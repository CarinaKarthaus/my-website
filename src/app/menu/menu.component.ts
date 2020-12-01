import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationTriggerService } from '../services/animationtriggerservice';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss', './menu.component.responsive.scss'],
})
export class MenuComponent implements OnInit, AfterViewInit {
  currentPagePosition: number;
  clientWidth: number;
  fixedNav = false;



  constructor(public triggerService: AnimationTriggerService, public router: Router) {

  }

  // Indicates section currently visible in viewport
  currentSection = this.triggerService.currentSection;
  triggerPos = this.triggerService.animTriggerPosition;
  elementOffsetTop = this.triggerService.elementOffsetTop;

  isMobile: boolean;
  maxWidthMobile = 850;
  public navLinkActivation = false;



  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      this.checkForStartPage();
    });

  }

  ngAfterViewInit(): void {
    // subscribe to changes of currentPagePosition in triggerService
    this.triggerService.pagePosition$.subscribe((pagePosition) => {
      this.currentPagePosition = pagePosition;
      this.activateMobileNav();
      
    })
    this.checkForStartPage();
  }

 /**
   * Check current position & client width to adjust nav-bar & active-style for links
   */
  @HostListener('window:resize')
  activateMobileNav() {
    this.adjustNav();
  }

  public adjustNav() {
    this.clientWidth = window.innerWidth;
    this.isMobile = this.clientWidth <= this.maxWidthMobile;
    this.currentPagePosition = this.triggerService.currentPagePosition;
    if (!this.isMobile) {
      this.toggleFixedNav();
    } else {
      this.fixedNav = false;
    }
    if (this.navLinkActivation) {
          this.setActiveSection();
    }
  }
  
  // Activate fixed nav on viewport-top on scroll 
  @ViewChild('nav') nav: ElementRef;
  toggleFixedNav() {
    let navHeight = this.nav.nativeElement.offsetHeight; 
    let triggerPositionReached = this.currentPagePosition >= (this.triggerPos.home + navHeight );
    if ( triggerPositionReached) {
      this.fixedNav = true;
    } else {
      this.fixedNav = false;
    }            
  }

  /**
   * Checks section currently visible and assigns/removes active-link-style accordingly
   */
  setActiveSection() {
    this.elementOffsetTop = this.triggerService.elementOffsetTop;
    let navSwitchOffset = window.innerHeight / 2;

    this.checkHomeSection(navSwitchOffset);
    this.checkAboutSection(navSwitchOffset);
    this.checkPortfolioSection(navSwitchOffset);
    this.checkContactSection(navSwitchOffset);

    this.updateSectionObservables();

  }

  checkHomeSection(navSwitchOffset: number) {
    if (this.currentPagePosition <= this.elementOffsetTop.home - navSwitchOffset) {
      this.resetNavClasses();
      this.currentSection.homeSection = true;
    }
  }

  checkAboutSection(navSwitchOffset: number) {
    if (this.currentPagePosition > this.elementOffsetTop.about_header - navSwitchOffset) {
      this.resetNavClasses();
      this.currentSection.aboutSection = true;
    }
  }

  checkPortfolioSection(navSwitchOffset: number) {
    if (this.currentPagePosition > this.elementOffsetTop.portfolio_header - navSwitchOffset) {
      this.resetNavClasses();
      this.currentSection.portfolioSection = true;
    }
  }

  checkContactSection(navSwitchOffset: number) {
    if (this.currentPagePosition > this.elementOffsetTop.contact_header - navSwitchOffset) {
      this.resetNavClasses();
      this.currentSection.contactSection = true;
    }
  }

  /**
   * Update the section-Observables 
   */
  updateSectionObservables() {
    this.triggerService.homeSection$.next(this.currentSection.homeSection);
    this.triggerService.aboutSection$.next(this.currentSection.aboutSection);
    this.triggerService.portfolioSection$.next(this.currentSection.portfolioSection);
    this.triggerService.contactSection$.next(this.currentSection.contactSection);
    
  }


  /**
   * Remove active-class from all nav-links by setting all indicators to false
   */
  resetNavClasses() {
    for (let i in this.currentSection) {
      if (Object.hasOwnProperty.call(this.currentSection, i)) {
        this.currentSection[i] = false;
      }
    }
  }



 public checkForStartPage() {
  let url = window.location.href;  
  this.navLinkActivation = !url.endsWith('data-protection') && !url.endsWith('imprint') ;
  this.resetNavClasses();
  this.updateSectionObservables();
}



}

