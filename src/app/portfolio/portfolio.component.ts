import { Component, OnInit } from '@angular/core';
import { Project } from 'src/models/project.class';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  
  projects = new Project( [
    { 
      title: 'El Pollo Loco', 
      details: 'A JavaScript-based jump-and-run-game.', 
      app_link: 'http://carina-karthaus.developerakademie.com/el_pollo_loco/', 
      github_link: 'https://github.com/CarinaKarthaus/el_pollo_loco', 
      img: 'el_pollo_loco.png',
      img_mobile: '',
      category: 'JavaScript'

    },
    {
      title: 'JOIN - The Task Manager', 
      details: 'An app to create, assign and manage tasks using Eisenhower\'s urgent-important-principle.', 
      app_link: 'http://carina-karthaus.developerakademie.com/task-management/', 
      github_link: 'https://github.com/CarinaKarthaus/task-management', 
      img: 'join.png',
      img_mobile: 'join_mobile.png',
      category: 'JavaScript'
    },    
    {
      title: 'Ring of Fire', 
      details: 'Angular-based web-app of the popular drinking game.', 
      app_link: 'https://ring-of-fire-d7737.web.app/', 
      github_link: 'https://github.com/CarinaKarthaus/ring_of_fire', 
      img: 'ringoffire.png',
      img_mobile: 'ringoffire_mobile.png',
      category: 'Angular'
    },
    {
      title: 'Simple CRM', 
      details: 'A smart & simple webbased CRM system.', 
      app_link: ' ##########PLACEHOLDER#####', 
      github_link: '##########PLACEHOLDER#####', 
      img: '##########PLACEHOLDER#####',
      img_mobile: '##########PLACEHOLDER#####',
      category: 'Angular'
    },
    {
      title: 'This Website', 
      details: '##########PLACEHOLDER#####', 
      app_link: ' ##########PLACEHOLDER#####', 
      github_link: '##########PLACEHOLDER#####', 
      img: '##########PLACEHOLDER#####',
      img_mobile: '##########PLACEHOLDER#####',
      category: 'Angular'
    }
  ]);

  constructor() { }

  ngOnInit(): void {
  }

}
