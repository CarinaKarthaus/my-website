import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CanvasSpace, Pt, Group, Line, Create, Bound } from 'pts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  canvas: HTMLElement;
  space: CanvasSpace;

  @ViewChild('pt') private parentRef: ElementRef<HTMLElement>;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const parentElement = this.parentRef.nativeElement;
    this.canvas = parentElement.querySelector('canvas');
    this.graphicDraw();
  }


  @HostListener('window:resize')
      resizeCanvas() {
        this.canvas.clientHeight;
        this.canvas.clientWidth;

}


  graphicDraw() {
    //init Pts.space
    this.space = new CanvasSpace(this.canvas);
    this.space.autoResize;
    this.space.setup({ bgcolor: '#000628', retina: true, resize: true });
    var form = this.space.getForm();  
    // var singularityPt = new Pt([this.space.size.x, 0]);
    // var line = Line.fromAngle([0, this.space.size.y], 2.4, 1);
    var pts = new Group();
    pts = Create.distributeRandom(this.space.innerBound, 150);

    this.space.add({
      // creatr 150 random points
      start: (bound) => {
        pts = Create.distributeRandom(this.space.innerBound, 150);
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
          form.stroke(`rgba(255,255,200,${ratio}`, ratio * 2).line([p, lp]);
          form.fillOnly(['#f03', '#09f', '#0c6'][i % 5]).point(p, 1);
        });
      },
    });
    //// ----
    this.space.bindMouse().bindTouch().play();
  }
}
