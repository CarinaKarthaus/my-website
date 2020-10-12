import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  currentFilter = '';

  projects = [ 
    { 
      title: 'El Pollo Loco', 
      details: 'A JavaScript-based jump-and-run-game.', 
      app_link: 'http://carina-karthaus.developerakademie.com/el_pollo_loco/', 
      github_link: 'https://github.com/CarinaKarthaus/el_pollo_loco', 
      img: 'el_pollo_loco3.png',
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
      img: 'simple-crm.png',
      img_mobile: '##########PLACEHOLDER#####',
      category: 'Angular'
    },
    {
      title: 'carinakarthaus.com', 
      details: '##########PLACEHOLDER#####', 
      app_link: ' ##########PLACEHOLDER#####', 
      github_link: '##########PLACEHOLDER#####', 
      img: '##########PLACEHOLDER#####',
      img_mobile: '##########PLACEHOLDER#####',
      category: 'Angular'
    }
  ];

  visibleProjects = this.projects;

  constructor() { }

  ngOnInit(): void {
    
  }

/**
 * Filter visible projects
 * @param newFilter: defines current filter selection for visible project-portfolio 
 */
  updateFilter (newFilter? : string) {
    if (newFilter == undefined) {
      this.currentFilter = '';
      this.visibleProjects = this.projects;
    } else if (newFilter == 'Angular') {
      this.currentFilter = 'Angular';
      this.visibleProjects = this.projects.filter(project => project.category == 'Angular');
    } else if (newFilter == 'JavaScript') {
      this.currentFilter = 'JavaScript';
      this.visibleProjects = this.projects.filter(project => project.category == 'JavaScript');
    }
  }


}
