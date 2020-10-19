import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @ViewChild('home') private parentRef: ElementRef<HTMLElement>;

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  scrollTo(anchorId: string): void {
    this.viewportScroller.scrollToAnchor(anchorId);
  }

}
