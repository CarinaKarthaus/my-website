import { Component, OnInit } from '@angular/core';

// Class for dynamic grid list
// export interface Tile {
//   color: string;
//   cols: number;
//   rows: number;
//   text: string;
// }


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  // For dynamic grid list
  // tiles: Tile[] = [
  //   {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
  //   {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  //   {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
  //   {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  //   {text: 'Five', cols: 2, rows: 3, color: 'lightblue'}
  // ];

  
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
    // {
    //   title: 'This Website', 
    //   details: '##########PLACEHOLDER#####', 
    //   app_link: ' ##########PLACEHOLDER#####', 
    //   github_link: '##########PLACEHOLDER#####', 
    //   img: '##########PLACEHOLDER#####',
    //   img_mobile: '##########PLACEHOLDER#####',
    //   category: 'Angular'
    // }
  ];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.projects.length; i++) {
      console.log(this.projects[i].category);
    }
    
  }


  currentFilter = '';

  updateFilter (newFilter? : string) {
    if (newFilter == undefined) {
      this.currentFilter = '';
    } else if (newFilter == 'Angular') {
      this.currentFilter = 'Angular';
    } else if (newFilter == 'JavaScript') {
      this.currentFilter = 'JavaScript';
    }
  }


}
