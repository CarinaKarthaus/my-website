import { Component, HostListener, OnInit } from '@angular/core';
import { SlideInAnimation } from '../animations';
import { AnimationTriggerService } from '../services/animationtriggerservice';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [ SlideInAnimation ]
})
export class AboutComponent implements OnInit {
  
  constructor(public triggerService: AnimationTriggerService) { }
  animationState = this.triggerService.animationState;

  ngOnInit(): void {
    setInterval(() => {
      this.triggerService.animateOnScroll();
    },50);
  }

  characteristics = [
    {
      'charName': 'International Experience',
      'charDescr': 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      'charName': 'PLACEHOLDER',
      'charDescr': 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      'charName': 'PLACEHOLDER',
      'charDescr': 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      'charName': 'PLACEHOLDER',
      'charDescr': 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    }
  ]
  

 
  skills = [
    {
      'skillName': 'HTML',
      'skillLevel': 85
    },
    {
      'skillName': 'CSS',
      'skillLevel': 85
    },
    {
      'skillName': 'JavaScript',
      'skillLevel': 75
    },
    {
      'skillName': 'Angular',
      'skillLevel': 60
    },
    {
      'skillName': 'Design Thinking',
      'skillLevel': 70
    },
    {
      'skillName': 'SCRUM',
      'skillLevel': 70
    },
    {
      'skillName': 'Node.js',
      'skillLevel': 50
    },
    {
      'skillName': 'UI Design',
      'skillLevel': 50
    },
    {
      'skillName': 'Python',
      'skillLevel': 40
    }
  ]




}
