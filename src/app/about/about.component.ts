import { Component, HostListener, OnInit } from '@angular/core';
import { SlideInAnimation } from '../animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [ SlideInAnimation ]
})
export class AboutComponent implements OnInit {
  currentPagePosition;
  animationStateHeader = 'out';
  animationStateLabel = 'out';
  animationStateSkills = 'out';

  @HostListener('window:scroll') 
  animateOnScroll() {
    this.currentPagePosition = window.scrollY;
    console.log(this.currentPagePosition);

    if (this.currentPagePosition > 250) {
      this.animationStateHeader = 'in';
    } else if (this.currentPagePosition > 400) {
      this.animationStateLabel = 'in';
    } else if (this.currentPagePosition > 700) {
      this.animationStateSkills = 'in';
    }
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


  constructor() { }

  ngOnInit(): void {
  }

}
