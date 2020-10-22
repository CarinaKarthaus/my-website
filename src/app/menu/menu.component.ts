import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { AnimationTriggerService } from '../services/animationtriggerservice';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  currentPagePosition: number;
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


  @ViewChild('nav') nav: ElementRef;

  ngOnInit(): void {}


  /**
   * Check current position to adjust nav-bar & active-style for links
   */
  @HostListener('window:scroll')
  adjustNav() {
    this.currentPagePosition = window.scrollY;
    this.toggleFixedNav();
    this.checkActiveSection();
  }

  // Activate fixed nav on viewport-top on scroll 
  toggleFixedNav() {
    let navHeight = this.nav.nativeElement.offsetHeight; 
    if (this.currentPagePosition > (this.triggerPos.home + navHeight )) {
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
