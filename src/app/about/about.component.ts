import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
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
