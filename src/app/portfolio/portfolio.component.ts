import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
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
  animationState = this.triggerService.animationState;
  currentFilter = '';
  projects = projects;
  visibleProjects = this.projects;
  columns = 3;

  constructor(public triggerService: AnimationTriggerService ) { }

  ngOnInit(): void {
    
  }

  /**
   * Adapts no. of columns per grid-row based on screen-width
   */
  @HostListener('window:resize') 
  arrangeGrid() {
    let screenWidth = window.innerWidth;

    if (screenWidth >= 1200) { this.columns = 3}
    if (screenWidth < 1200) { this.columns = 2 }
    if (screenWidth < 800 ) {this.columns = 1}   
    
  }



  // Access Elements to detect offset to document top
  @ViewChild('portfolioHeader') portfolioHeader: ElementRef;
  @ViewChild('portfolioFilter') portfolioFilter: ElementRef;
  @ViewChild('portfolioGrid') portfolioGrid: ElementRef;

  headerOffset = 0;
  filterOffset = 0;
  portfolioOffset = 0;
  elementOffsetTop = this.triggerService.elementOffsetTop;

  @HostListener('window:scroll') 
  updateOffset() {
      const rectHeader = this.portfolioHeader.nativeElement.getBoundingClientRect();
      const rectFilter = this.portfolioFilter.nativeElement.getBoundingClientRect();
      const rectPortfolio = this.portfolioGrid.nativeElement.getBoundingClientRect();

      // Add element's offset to viewport-top to the offset already scrolled (pageYOffset)
      this.headerOffset = rectHeader.top + window.pageYOffset; // - document.documentElement.clientTop;
      this.filterOffset = rectFilter.top + window.pageYOffset; // - document.documentElement.clientTop;
      this.portfolioOffset = rectPortfolio.top + window.pageYOffset; // - document.documentElement.clientTop;
      // Update offset-object from triggerService
      this.elementOffsetTop.portfolio_header = this.headerOffset;
      this.elementOffsetTop.portfolio_filter = this.filterOffset;
      this.elementOffsetTop.portfolio = this.portfolioOffset;
      
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
