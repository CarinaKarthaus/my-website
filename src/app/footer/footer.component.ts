import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGithub, faXing, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @ViewChild('home') private parentRef: ElementRef<HTMLElement>;

 constructor(private viewportScroller: ViewportScroller, library: FaIconLibrary) {
    // Add icons to library to make them accessible
    library.addIcons(faGithub, faLinkedinIn, faXing);
  }

  ngOnInit(): void {
  }

  scrollTo(anchorId: string): void {
    this.viewportScroller.scrollToAnchor(anchorId);
  }

}
