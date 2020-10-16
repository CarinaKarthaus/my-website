import { Component, HostListener, OnInit } from '@angular/core';
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
  scrollHeight = this.triggerService.scrollHeight;


  ngOnInit(): void {
    setInterval(() => {
      this.triggerService.animateOnScroll();
    },50);
  }

  @HostListener('window:scroll') 
  updateScrollHeight() {
    this.scrollHeight.aboutHeader = document.getElementById('header').clientHeight; 
    this.scrollHeight.aboutLabels = document.getElementById('labels').clientHeight;    
    this.scrollHeight.aboutSkills = document.getElementById('skills').clientHeight;  
  }


}
