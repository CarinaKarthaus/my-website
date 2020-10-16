import { HostListener, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AnimationTriggerService {
  currentPagePosition: number;
  triggerOffset: number;

  public scrollHeight = {
    home: 1000,
    aboutHeader: 1050,
    aboutLabels: 1100,
    aboutSkills: 1200,
    portfolio_header: 1800,
    portfolio_filter: 2000,
    portfolio: 2100,
    contact_header: 2700,
    contact_dialog: 2800,
  };

  private scrollPosition = {
    home: 1000,
    aboutHeader: 1050,
    aboutLabels: 1100,
    aboutSkills: 1200,
    portfolio_header: 1800,
    portfolio_filter: 2000,
    portfolio: 2100,
    contact_header: 2700,
    contact_dialog: 2800,
    footer: 3000,
  }

  private absScrollPosition = this.scrollPosition;

  constructor() { }
  
  public animationState = {
    'about_header': 'out',
    'labels': 'out',
    'skills': 'out',
    'portfolio_header': 'out',
    'portfolio_filter': 'out',
    'portfolio': 'out',
    'contact_header': 'out',
    'contact': 'out',
    'contact_dialog': 'out',
    'footer': 'out'
  };


  calculateTriggerPositions() {
    // this.triggerOffset = 500;
    this.triggerOffset =  window.innerHeight / 3  ;

    // this.scrollPosition.home
    this.absScrollPosition.aboutHeader = this.scrollHeight.home ;
    this.absScrollPosition.aboutLabels = (this.scrollPosition.home + this.scrollHeight.aboutHeader)  ;
    this.absScrollPosition.aboutSkills = (this.scrollPosition.aboutHeader + this.scrollHeight.aboutLabels) ;
    this.absScrollPosition.portfolio_header = (this.scrollPosition.aboutLabels + this.scrollHeight.aboutSkills)  ;
    this.absScrollPosition.portfolio_filter = (this.scrollPosition.aboutSkills + this.scrollHeight.portfolio_header) ;
    this.absScrollPosition.portfolio = (this.scrollPosition.portfolio_header + this.scrollHeight.portfolio_filter) ;
    this.absScrollPosition.contact_header = (this.scrollPosition.portfolio_filter + this.scrollHeight.portfolio) ;
    this.absScrollPosition.contact_dialog = (this.scrollPosition.portfolio + this.scrollHeight.contact_header) ;
    this.absScrollPosition.footer = (this.scrollPosition.contact_header + this.scrollHeight.contact_dialog) ;

  }

  /**
   * Track scroll position and initiate animation by changing and element's animationState
   */
  @HostListener('window:scroll') 
  public animateOnScroll() {
    this.currentPagePosition = window.scrollY;

    this.calculateTriggerPositions();


    if (this.currentPagePosition >  (this.absScrollPosition.aboutHeader - this.triggerOffset)) {  
      this.animationState.about_header = 'in'
    } 
    if (this.currentPagePosition > (this.absScrollPosition.aboutLabels  - this.triggerOffset )) { 
      this.animationState.labels = 'in' 
    }
    if (this.currentPagePosition > (this.absScrollPosition.aboutSkills  - this.triggerOffset )) { 
      this.animationState.skills = 'in' 
    }
    if (this.currentPagePosition > (this.absScrollPosition.portfolio_header - this.triggerOffset )) { 
      this.animationState.portfolio_header = 'in' 
    }
    if (this.currentPagePosition > (this.absScrollPosition.portfolio_filter - this.triggerOffset )) { 
      this.animationState.portfolio_filter = 'in' 
    }
    if (this.currentPagePosition > (this.absScrollPosition.portfolio - this.triggerOffset )) { 
      this.animationState.portfolio = 'in' 
    }
    if (this.currentPagePosition > (this.absScrollPosition.contact_header - this.triggerOffset )) { 
      this.animationState.contact_header = 'in' 
    }
    if (this.currentPagePosition > (this.absScrollPosition.contact_dialog - this.triggerOffset )) { 
      this.animationState.contact = 'in' 
    }  
    if (this.currentPagePosition > (this.absScrollPosition.footer - this.triggerOffset )) { 
      this.animationState.footer = 'in' 
    }
    
    // console.log(this.currentPagePosition);
    console.log('scrollHeight:', this.scrollHeight);
    console.log('absScrollPosition', this.absScrollPosition);
    console.log('triggerOffset', this.triggerOffset);
    
    
    return this.animationState;  
  }
}
