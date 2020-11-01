import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { SlideInAnimation } from '../animations';
import { AnimationTriggerService } from '../services/animationtriggerservice';
import { labels, skills } from '../../assets/data/skills';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [ SlideInAnimation ]
})
export class AboutComponent implements OnInit, AfterViewInit {
  animationState;
  labels = labels;
  skills = skills;


  constructor(public triggerService: AnimationTriggerService) {
    this.animationState = this.triggerService.animationState;
   }



  ngOnInit(): void {
    // setInterval(() => {
      this.triggerService.animateOnScroll();
    // },50);
  }

  ngAfterViewInit() {
    this.triggerService.observable.subscribe(() => {
      this.updateOffset();
      
    })
  }

  // Access Elements to detect offset to document top
  @ViewChild('aboutHeader') aboutHeader: ElementRef;
  @ViewChild('aboutLabels') aboutLabels: ElementRef;
  @ViewChild('aboutSkills') aboutSkills: ElementRef;

  headerOffset = 0;
  labelsOffset = 0;
  skillsOffset = 0;
  elementOffsetTop = this.triggerService.elementOffsetTop;

  // @HostListener('window:scroll') 
  updateOffset() {
    let pageOffsetY = this.triggerService.currentPagePosition;
      const rectHeader = this.aboutHeader.nativeElement.getBoundingClientRect();
      const rectLabels = this.aboutLabels.nativeElement.getBoundingClientRect();
      const rectSkills = this.aboutSkills.nativeElement.getBoundingClientRect();

      // Add element's offset to viewport-top to the offset already scrolled (pageYOffset)
      this.headerOffset = rectHeader.top + pageOffsetY;
      this.labelsOffset = rectLabels.top + pageOffsetY;
      this.skillsOffset = rectSkills.top + pageOffsetY;
      // Update offset-object from triggerService
      this.elementOffsetTop.about_header = this.headerOffset;
      this.elementOffsetTop.about_labels = this.labelsOffset;
      this.elementOffsetTop.about_skills = this.skillsOffset;    
      
      
    }

  }



