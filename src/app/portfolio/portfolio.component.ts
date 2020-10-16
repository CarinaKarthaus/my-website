import { Component, HostListener, OnInit } from '@angular/core';
import { SlideInAnimation } from '../animations';
import { AnimationTriggerService } from '../services/animationtriggerservice';
import { projects } from '../../assets/data/projects';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [ SlideInAnimation ]
})

export class PortfolioComponent implements OnInit {
  currentFilter = '';
  projects = projects;
  visibleProjects = this.projects;

  constructor(public triggerService: AnimationTriggerService ) { }

  ngOnInit(): void {
    
  }

  animationState = this.triggerService.animationState;
  scrollHeight = this.triggerService.scrollHeight;



  @HostListener('window:scroll') 
  updateScrollHeight() {
    this.scrollHeight.portfolio_header = document.getElementById('header').clientHeight; 
    this.scrollHeight.portfolio_filter = document.getElementById('portfolio_filter').clientHeight;    
    this.scrollHeight.portfolio = document.getElementById('portfolio').clientHeight;  
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
