import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { SlideInAnimation } from '../animations';
import { AnimationTriggerService } from '../services/animationtriggerservice';
import { labels, skills } from '../../assets/data/skills';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [ SlideInAnimation ]
})
export class AboutComponent implements OnInit {
  
  constructor(public triggerService: AnimationTriggerService) { }

  animationState = this.triggerService.animationState;
  labels = labels;
  skills = skills;

  ngOnInit(): void {
    setInterval(() => {
      this.triggerService.animateOnScroll();
    },50);
  }

  // Access Elements to detect offset to document top
  @ViewChild('aboutHeader') aboutHeader: ElementRef;
  @ViewChild('aboutLabels') aboutLabels: ElementRef;
  @ViewChild('aboutSkills') aboutSkills: ElementRef;

  headerOffset = 0;
  labelsOffset = 0;
  skillsOffset = 0;
  elementOffsetTop = this.triggerService.elementOffsetTop;

  @HostListener('window:scroll') 
  updateOffset() {
      const rectHeader = this.aboutHeader.nativeElement.getBoundingClientRect();
      const rectLabels = this.aboutLabels.nativeElement.getBoundingClientRect();
      const rectSkills = this.aboutSkills.nativeElement.getBoundingClientRect();

      // Add element's offset to viewport-top to the offset already scrolled (pageYOffset)
      this.headerOffset = rectHeader.top + window.pageYOffset; // - document.documentElement.clientTop;
      this.labelsOffset = rectLabels.top + window.pageYOffset; // - document.documentElement.clientTop;
      this.skillsOffset = rectSkills.top + window.pageYOffset; // - document.documentElement.clientTop;
      // Update offset-object from triggerService
      this.elementOffsetTop.about_header = this.headerOffset;
      this.elementOffsetTop.about_labels = this.labelsOffset;
      this.elementOffsetTop.about_skills = this.skillsOffset;
      
    }

  }



