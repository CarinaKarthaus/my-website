import { Component, HostListener, OnInit } from '@angular/core';

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


  constructor() {}

  ngOnInit(): void {}

  navAppears() {
    
  }


  /**
   * Check current position to adjust nav-bar & active-style for links
   */
  @HostListener('window:scroll')
  adjustNav() {
    this.currentPagePosition = window.scrollY;

    this.toggleFixedNav();
    this.checkActiveSection();
  }

  toggleFixedNav() {
    if (this.currentPagePosition > 1050) {
      this.fixedNav = true;
    } else {
      this.fixedNav = false;
    }
  }

  /**
   * Checks section currently visible and assigns/removes active-link-style accordingly
   */
  checkActiveSection() {
    if (this.currentPagePosition <= 350) {
      this.resetNavClasses();
      this.navPositionIndicator.homePosition = true;
    }
    if (this.currentPagePosition > 350) {
      this.resetNavClasses();
      this.navPositionIndicator.aboutPosition = true;
    }
    if (this.currentPagePosition > 1800) {
      this.resetNavClasses();
      this.navPositionIndicator.portfolioPosition = true;
    }
    if (this.currentPagePosition > 2750) {
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
