import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { AnimationTriggerService } from '../services/animationtriggerservice';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss', './menu.component.responsive.scss'],
})
export class MenuComponent implements OnInit {
  currentPagePosition: number;
  clientWidth: number;
  fixedNav = false;

  // Indicates section currently visible in viewport
  navPositionIndicator = {
    homePosition: true,
    aboutPosition: false,
    portfolioPosition: false,
    contactPosition: false,
  };


  constructor(public triggerService: AnimationTriggerService) {}

  triggerPos = this.triggerService.animTriggerPosition;
  elementOffsetTop = this.triggerService.elementOffsetTop;

  isMobile: boolean;
  maxWidthMobile = 850;

  ngOnInit(): void {
  }

 
  /**
   * Check current position & client width to adjust nav-bar & active-style for links
   */

  @HostListener('window:resize')
  activateMobileNav() {
    this.adjustNav();
  }

  @HostListener('window:scroll')
  adjustNav() {
    this.clientWidth = window.innerWidth;
    this.isMobile = this.clientWidth <= this.maxWidthMobile;
    this.currentPagePosition = window.scrollY;

    if (!this.isMobile) {
      this.toggleFixedNav();
    } else {
      this.fixedNav = false;
    }
    this.checkActiveSection();
  }

  

  // Activate fixed nav on viewport-top on scroll 

  @ViewChild('nav') nav: ElementRef;

  toggleFixedNav() {
    let navHeight = this.nav.nativeElement.offsetHeight; 
    let triggerPositionReached = this.currentPagePosition > (this.triggerPos.home + navHeight );

    if ( triggerPositionReached) {
      this.fixedNav = true;
    } else {
      this.fixedNav = false;
    }            
  }

  /**
   * Checks section currently visible and assigns/removes active-link-style accordingly
   */
  checkActiveSection() {
    let navSwitchOffset = window.innerHeight / 2;

    if (this.currentPagePosition <= this.elementOffsetTop.home - navSwitchOffset) {
      this.resetNavClasses();
      this.navPositionIndicator.homePosition = true;
    }
    if (this.currentPagePosition > this.elementOffsetTop.about_header - navSwitchOffset) {
      this.resetNavClasses();
      this.navPositionIndicator.aboutPosition = true;
    }
    if (this.currentPagePosition > this.elementOffsetTop.portfolio_header - navSwitchOffset) {
      this.resetNavClasses();
      this.navPositionIndicator.portfolioPosition = true;
    }
    if (this.currentPagePosition > this.elementOffsetTop.contact_header - navSwitchOffset) {
      this.resetNavClasses();
      this.navPositionIndicator.contactPosition = true;
    }

    console.log(this.currentPagePosition, this.elementOffsetTop);
    
  }

  /**
   * Remove active-class from all nav-links by setting all indicators to false
   */
  resetNavClasses() {
    for (let i in this.navPositionIndicator) {
      if (Object.hasOwnProperty.call(this.navPositionIndicator, i)) {
        this.navPositionIndicator[i] = false;
      }
    }
  }
}
