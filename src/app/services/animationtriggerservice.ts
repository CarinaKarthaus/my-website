import { HostListener, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AnimationTriggerService {

  constructor() { }

  public animationState = {
    'about_header': 'out',
    'about_labels': 'out',
    'about_skills': 'out',
    'portfolio_header': 'out',
    'portfolio_filter': 'out',
    'portfolio': 'out',
    'contact_header': 'out',
    'contact': 'out',
    'contact_dialog': 'out',
    'footer': 'out'
  };

  currentPagePosition: number;
  triggerOffset: number;
  windowHeight: number;

  // Indicates offset of HTML-element to the document's top edge
  public elementOffsetTop = {
    home: 1000,
    about_header: 1050,
    about_labels: 1100,
    about_skills: 1200,
    portfolio_header: 1800,
    portfolio_filter: 2000,
    portfolio: 2100,
    contact_header: 2700,
    contact_dialog: 2800,
    footer: 4000,
  };

  public animTriggerPosition = {
    home: 1000,
    about_header: 1050,
    about_labels: 1100,
    about_skills: 1200,
    portfolio_header: 1800,
    portfolio_filter: 2000,
    portfolio: 2100,
    contact_header: 2700,
    contact_dialog: 2800,
    footer: 3000,
  }


  calculateTriggerPositions() {
    this.windowHeight = window.innerHeight;
    this.triggerOffset =  window.innerHeight / 2  ;

    this.animTriggerPosition.home = this.windowHeight;
    this.animTriggerPosition.about_header = this.elementOffsetTop.about_header - this.windowHeight + this.triggerOffset;
    this.animTriggerPosition.about_labels = this.elementOffsetTop.about_labels - this.windowHeight + this.triggerOffset;
    this.animTriggerPosition.about_skills = this.elementOffsetTop.about_skills - this.windowHeight + this.triggerOffset;

    this.animTriggerPosition.portfolio_header = this.elementOffsetTop.portfolio_header - this.windowHeight + this.triggerOffset;
    this.animTriggerPosition.portfolio_filter = this.elementOffsetTop.portfolio_filter - this.windowHeight + this.triggerOffset;
    this.animTriggerPosition.portfolio = this.elementOffsetTop.portfolio - this.windowHeight + this.triggerOffset;    
    
    this.animTriggerPosition.contact_header = this.elementOffsetTop.contact_header - this.windowHeight + this.triggerOffset;
    this.animTriggerPosition.contact_dialog = this.elementOffsetTop.contact_dialog - this.windowHeight + this.triggerOffset;
    this.animTriggerPosition.footer = this.elementOffsetTop.footer - this.windowHeight + this.triggerOffset;


    console.log('elementOffsetService:', this.elementOffsetTop);

  }

  /**
   * Track scroll position and initiate animation by changing and element's animationState
   */
  @HostListener('window:scroll') 
  public animateOnScroll() {
    this.currentPagePosition = window.scrollY;
    this.calculateTriggerPositions();

    let triggerPos = this.animTriggerPosition;

    // this.triggerAboutSection();

    
    if (this.currentPagePosition > triggerPos.about_header) {  
      this.animationState.about_header = 'in'
    } 
    if (this.currentPagePosition > triggerPos.about_labels) { 
      this.animationState.about_labels = 'in' 
    }
    if (this.currentPagePosition > triggerPos.about_skills) { 
      this.animationState.about_skills = 'in' 
    }
    if (this.currentPagePosition > triggerPos.portfolio_header) { 
      this.animationState.portfolio_header = 'in' 
    }
    if (this.currentPagePosition > triggerPos.portfolio_filter) { 
      this.animationState.portfolio_filter = 'in' 
    }
    if (this.currentPagePosition > triggerPos.portfolio) { 
      this.animationState.portfolio = 'in' 
    }
    if (this.currentPagePosition > triggerPos.contact_header) { 
      this.animationState.contact_header = 'in' 
    }
    if (this.currentPagePosition > triggerPos.contact_dialog) { 
      this.animationState.contact = 'in' 
    }  
    if (this.currentPagePosition > triggerPos.footer) { 
      this.animationState.footer = 'in' 
    }
    
    // console.log(this.currentPagePosition);
    console.log('window.scrollY', this.currentPagePosition);
    
    
    return this.animationState;  
  }

  // triggerAboutSection() {

  // }
}
