import { HostListener, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AnimationTriggerService {
  currentPagePosition: number;

  constructor() { }
  
  public animationState = {
    'about_header': 'out',
    'labels': 'out',
    'skills': 'out',
    'portfolio_header': 'out',
    'portfolio_filter': 'out',
    'portfolio': 'out',
    'contact_header': 'out',
    'contact': 'out'
  };

  /**
   * Track scroll position and initiate animation by changing and element's animationState
   */
  @HostListener('window:scroll') 
  public animateOnScroll() {
    this.currentPagePosition = window.scrollY;

    if (this.currentPagePosition >  275) { this.animationState.about_header = 'in'} 
    if (this.currentPagePosition >  250) { this.animationState.labels = 'in' }
    if (this.currentPagePosition >  650) { this.animationState.skills = 'in' }
    if (this.currentPagePosition > 1650) { this.animationState.portfolio_header = 'in' }
    if (this.currentPagePosition > 1650) { this.animationState.portfolio_filter = 'in' }
    if (this.currentPagePosition > 1650) { this.animationState.portfolio = 'in' }
    if (this.currentPagePosition > 2600) { this.animationState.contact_header = 'in' }
    if (this.currentPagePosition > 2750) { this.animationState.contact = 'in' }
    
    console.log(this.currentPagePosition);
    return this.animationState;  
  }
}
