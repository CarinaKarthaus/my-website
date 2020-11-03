import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { animationState, elementOffsetTop, animTriggerPosition, currentSection } from '../../assets/data/animationtriggers';


@Injectable({
  providedIn: 'root',
})
export class AnimationTriggerService {
  public currentPagePosition = 0;
  triggerOffset: number;
  windowHeight: number;

  public animationState = animationState;
  public elementOffsetTop = elementOffsetTop;     // Offset of HTML-element to the document's top edge
  public animTriggerPosition = animTriggerPosition;   // Scroll position where animations get triggered 
  public triggerPos = this.animTriggerPosition;
  public currentSection = currentSection;   //Indicates section currently visible
  public observable = new BehaviorSubject(this.currentPagePosition);
  public navLinkActivation = false;


  constructor() { }

  

  calculateTriggerPositions() {
    let offsetTop = this.elementOffsetTop;
    let triggerOffset = window.innerHeight / 1.6; // offset to trigger before element reaches top of screen 
    
    this.triggerPos.home = offsetTop.home ;
    this.triggerPos.about_header = offsetTop.about_header - triggerOffset;
    this.triggerPos.about_labels = offsetTop.about_labels - triggerOffset;
    this.triggerPos.about_skills = offsetTop.about_skills - triggerOffset;

    this.triggerPos.portfolio_header = offsetTop.portfolio_header - triggerOffset;
    this.triggerPos.portfolio_filter = offsetTop.portfolio_filter - triggerOffset;
    this.triggerPos.portfolio = offsetTop.portfolio - triggerOffset;    
    
    this.triggerPos.contact_header = offsetTop.contact_header - triggerOffset;
    this.triggerPos.contact_dialog = offsetTop.contact_dialog - triggerOffset;
    this.triggerPos.footer = offsetTop.footer - triggerOffset;

    // console.log('triggerPos', this.triggerPos)
      
  }


  /**
   * Track scroll position and initiate animation by changing and element's animationState
   */
  // @HostListener('window:scroll') 
  public animateOnScroll() {  

    this.calculateTriggerPositions();
    this.triggerAboutSection();
    this.triggerPortfolioSection();
    this.triggerContactSection();
    this.observable.next(this.currentPagePosition);  

    return this.animationState;  
  }

  triggerAboutSection() {
    if (this.currentPagePosition > this.triggerPos.about_header) {  
      this.animationState.about_header = 'in'
    } 
    if (this.currentPagePosition > this.triggerPos.about_labels) { 
      this.animationState.about_labels = 'in' 
    }
    if (this.currentPagePosition > this.triggerPos.about_skills) { 
      this.animationState.about_skills = 'in' 
    }
    // console.log(this.triggerPos);
    // console.log(this.elementOffsetTop);
    
    
  }

  triggerPortfolioSection() {
    if (this.currentPagePosition > this.triggerPos.portfolio_header) { 
      this.animationState.portfolio_header = 'in' 
    }
    if (this.currentPagePosition > this.triggerPos.portfolio_filter) { 
      this.animationState.portfolio_filter = 'in' 
    }
    if (this.currentPagePosition > this.triggerPos.portfolio) { 
      this.animationState.portfolio = 'in' 
    }
  }

  triggerContactSection() {
    if (this.currentPagePosition > this.triggerPos.contact_header) { 
      this.animationState.contact_header = 'in' 
    }
    if (this.currentPagePosition > this.triggerPos.contact_dialog) { 
      this.animationState.contact_dialog = 'in' 
    }  
    if (this.currentPagePosition > this.triggerPos.footer) { 
      this.animationState.footer = 'in' 
    }
  } 


}
