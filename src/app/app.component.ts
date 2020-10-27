import { CdkScrollable, ScrollingModule } from '@angular/cdk/scrolling';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { AnimationTriggerService } from './services/animationtriggerservice';
import { MatDrawerContainer } from '@angular/material/sidenav';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit, AfterViewInit {
  title = 'my-website';


  clientWidth: number;
  fixedNav = false;

  // Indicates section currently visible in viewport
  navPositionIndicator = {
    homePosition: false,
    aboutPosition: false,
    portfolioPosition: false,
    contactPosition: false,
  };
  public mobilePagePosition;


  constructor(public triggerService: AnimationTriggerService, private scrollingModule: ScrollingModule) {}

  triggerPos = this.triggerService.animTriggerPosition;
  elementOffsetTop = this.triggerService.elementOffsetTop;
  

  ngOnInit(): void {

  }


  
  ngAfterViewInit() {
    setInterval(this.getScrollingPosition, 100);


  }
  

  @ViewChild('drawerContainer') drawerContainer;

  getScrollingPosition() {
    // let drContainer = document.getElementById('drawerContainer');

    let drawerContainer = this.drawerContainer.getBoundingClientRect();
    this.mobilePagePosition = drawerContainer.top;

    // this.triggerService.mobilePagePosition = this.mobilePagePosition;
    
    console.log(this.mobilePagePosition);           
  }

}


