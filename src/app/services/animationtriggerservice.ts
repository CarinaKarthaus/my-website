import { HostListener, Injectable } from '@angular/core';
import { animationState, elementOffsetTop, animTriggerPosition } from '../../assets/data/animationtriggers';


@Injectable({
  providedIn: 'root'
})
export class AnimationTriggerService {
  currentPagePosition: number;
  triggerOffset: number;
  windowHeight: number;

  public animationState = animationState;
  public elementOffsetTop = elementOffsetTop;     // Offset of HTML-element to the document's top edge
  public animTriggerPosition = animTriggerPosition;   // Scroll position where animations get triggered 
  public triggerPos = this.animTriggerPosition;

  constructor() { }


  calculateTriggerPositions() {
    let offsetTop = this.elementOffsetTop;
    let triggerOffset = window.innerHeight / 1.8; // offset to trigger before element reaches top of screen 

    this.triggerPos.home = window.innerHeight;
    this.triggerPos.about_header = offsetTop.about_header - triggerOffset;
    this.triggerPos.about_labels = offsetTop.about_labels - triggerOffset;
    this.triggerPos.about_skills = offsetTop.about_skills - triggerOffset;

    this.triggerPos.portfolio_header = offsetTop.portfolio_header - triggerOffset;
    this.triggerPos.portfolio_filter = offsetTop.portfolio_filter - triggerOffset;
    this.triggerPos.portfolio = offsetTop.portfolio - triggerOffset;    
    
    this.triggerPos.contact_header = offsetTop.contact_header - triggerOffset;
    this.triggerPos.contact_dialog = offsetTop.contact_dialog - triggerOffset;
    this.triggerPos.footer = offsetTop.footer - triggerOffset;
  }

  /**
   * Track scroll position and initiate animation by changing and element's animationState
   */
  @HostListener('window:scroll') 
  public animateOnScroll() {
    this.currentPagePosition = window.scrollY;
    this.calculateTriggerPositions();

    this.triggerAboutSection();
    this.triggerPortfolioSection();
    this.triggerContactSection();
    
    // console.log(this.currentPagePosition);
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
      this.animationState.contact = 'in' 
    }  
    if (this.currentPagePosition > this.triggerPos.footer) { 
      this.animationState.footer = 'in' 
    }
  }
}
