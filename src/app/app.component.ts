import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { AnimationTriggerService } from './services/animationtriggerservice';
import { MatDrawerContainer } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'my-website';
  currentYPosition: number;

  // Indicates section currently visible in viewport

  @ViewChild('drawerContainer') drawerContainer;
  @ViewChild(MatDrawerContainer) MatDrawerContainer;


  constructor(public triggerService: AnimationTriggerService ) {  }

  
 currentSection = this.triggerService.currentSection;


  ngOnInit(): void {
  }
  
  ngAfterViewInit() {
    // Fire event when scroll detected to get scrollY position
    this.MatDrawerContainer.scrollable.elementScrolled().subscribe(() => {
      this.getScrollPosition(this);
      this.triggerService.animateOnScroll();
  });

  }

  /**
   * Detect scroll position in drawerContainer
   * @param self original instance of AppComponent
   */
  getScrollPosition(self: AppComponent) {
    this.currentYPosition = self.drawerContainer.nativeElement.getBoundingClientRect().top;
    this.triggerService.currentPagePosition = Math.abs(this.currentYPosition); // Remove negative sign from position
    // console.log('test', this.triggerService.currentPagePosition)

  }



 

  
}
