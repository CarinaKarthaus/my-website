import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { AnimationTriggerService } from './services/animationtriggerservice';
import { MatDrawerContainer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'my-website';

  // Indicates section currently visible in viewport
  navPositionIndicator = {
    homePosition: false,
    aboutPosition: false,
    portfolioPosition: false,
    contactPosition: false,
  };

  @ViewChild('drawerContainer') drawerContainer;
  @ViewChild(MatDrawerContainer) MatDrawerContainer;


  constructor(
    public triggerService: AnimationTriggerService
  ) {}


  ngOnInit(): void {
  }
  
  ngAfterViewInit() {
    // Fire event when scroll detected to get scrollY position
    this.MatDrawerContainer.scrollable.elementScrolled().subscribe(() => {
      this.getScrollPosition(this);
  });

  }

  /**
   * Detect scroll position in drawerContainer
   * @param self original instance of AppComponent
   */
  getScrollPosition(self: AppComponent) {
    let currentYPosition = self.drawerContainer.nativeElement.getBoundingClientRect().top;
    this.triggerService.currentPagePosition = currentYPosition * (-1); // Remove negative sign
    // console.log('test', this.triggerService.currentPagePosition)
  }

  
}
