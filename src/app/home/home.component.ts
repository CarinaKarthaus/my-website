import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CanvasSpace, Pt, Group, Line, Create, Bound, Const } from 'pts';
import { ViewportScroller } from '@angular/common';
import { AnimationTriggerService } from '../services/animationtriggerservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private viewportScroller: ViewportScroller, public triggerService: AnimationTriggerService ) {}

  ngOnInit(): void {
    
  }

  canvas: HTMLCanvasElement;
  space: CanvasSpace;
  form;
  Pts;

 
  



  // Rendering and resizing/adjusting of canvas

  @ViewChild('pt') private parentRef: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    const parentElement = this.parentRef.nativeElement;
    this.canvas = parentElement.querySelector('canvas');
    this.graphicDraw();
  }


  @HostListener('window:resize')
  resizeCanvas() {
    this.canvas.clientHeight;
    this.canvas.clientWidth;
    this.canvas
      .getContext('2d')
      .clearRect(0, 0, this.canvas.width, this.canvas.height);
    
      this.graphicDraw();
  }

  graphicDraw() {
    //init Pts.space
    this.space = new CanvasSpace(this.canvas);
    this.space.autoResize;
    this.space.setup({ bgcolor: '#112233', retina: true, resize: true });
    var form = this.space.getForm();
    // var singularityPt = new Pt([this.space.size.x, 0]);
    // var line = Line.fromAngle([0, this.space.size.y], 2.4, 1);
    var pts = new Group();
    pts = Create.distributeRandom(this.space.innerBound, 70);

    this.space.add({
      // creatr 100 random points
      start: (bound) => {
        pts = Create.distributeRandom(this.space.innerBound, 75);
      },
      animate: (time, ftime) => {
        // make a line and turn it into an "op" (see the guide on Op for more)
        let perpend = new Group(
          this.space.center.$subtract(0.1),
          this.space.center
        ).op(Line.perpendicularFromPt);
        pts.rotate2D(0.0005, this.space.center);
        pts.forEach((p, i) => {
          // for each point, find the perpendicular to the line
          let lp = perpend(p);
          var ratio = Math.min(
            1,
            1 - lp.$subtract(p).magnitude() / (this.space.size.x / 2)
          );
          form
            .stroke(
              ['rgba(255,255,0,.3)', '0, 255, 255, 0.5)'][i % 5],
              ratio * 2
            )
            .line([p, lp]);
          form.fillOnly(['#f03', '#09f', '#0c6'][i % 5]).point(p, 1.5);
        });
      },
    });
    //// ----
    this.space.bindMouse().bindTouch().play();
  }

  // Scrolling on btn-click

  public scrollTo(anchorId: string): void {
    this.viewportScroller.scrollToAnchor(anchorId);
  }
}
