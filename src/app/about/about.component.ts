import { Component, OnInit } from '@angular/core';
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




}
