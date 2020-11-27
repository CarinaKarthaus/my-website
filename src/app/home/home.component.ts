import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CanvasSpace, Group, Line, Create, CanvasForm } from 'pts';
import { AnimationTriggerService } from '../services/animationtriggerservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  canvas: HTMLCanvasElement;
  space: CanvasSpace;

  @ViewChild('pt') private parentRef: ElementRef<HTMLElement>;


  constructor(public triggerService: AnimationTriggerService ) {}

  ngOnInit(): void {
    
  }


  ngAfterViewInit() {
    const parentElement = this.parentRef.nativeElement;
    this.canvas = parentElement.querySelector('canvas');
    this.graphicDraw();
  }

  /**
   * Render & resize canvas on window-resize
   */
  @HostListener('window:resize')
  resizeCanvas() {
    this.canvas.clientHeight;
    this.canvas.clientWidth;
    // clear previous canvas
    this.canvas
      .getContext('2d')
      .clearRect(0, 0, this.canvas.width, this.canvas.height);
    // Create new canvas
      this.graphicDraw();
  }

  /**
   * Main function to draw Pts-canvas
   */
  graphicDraw() {
    let form = this.initPtsCanvas();
    let pts = new Group();  // array of points on CanvasSpace
    pts = Create.distributeRandom(this.space.innerBound, 45);
    this.addPtsElements(form, pts);
  }


  /**
   * Init CanvasSpace incl. CanvasForm-functions for Pts-module
   */
   initPtsCanvas() {
    this.space = new CanvasSpace(this.canvas);
    this.space.autoResize;
    this.space.setup({ bgcolor: '#112233', retina: true, resize: true });
    let form = this.space.getForm();  // provides functions to draw certain shapes on canvas
    return form
  }

  /**
   * Add points to CanvasSpace and animate them 
   * @param form set of functions to draw shapes on canvas
   * @param pts array of points on CanvasSpace
   */
  addPtsElements(form: CanvasForm, pts: Group) {
    this.space.add({
      start: () => {
        // create 45 random points
        pts = Create.distributeRandom(this.space.innerBound, 45);
      },
      animate: () => {
        this.animatePtsElements(pts, form)
      },
    });
    this.space.bindMouse().bindTouch().play();
  }

  /**
   * Animate points by rotating them as a group and drawing perpendicular lines
   * @param pts array of points on CanvasSpace
   * @param form set of functions to draw shapes on canvas
   */
  animatePtsElements(pts: Group, form: CanvasForm) {
    let perpend = this.createPerpendGroup();
    pts.rotate2D(0.0005, this.space.center);
    this.drawLines(pts, perpend, form);        
}

  /**
   * Create group of lines perpendicular to line through center point (Pt) of canvas; turn it into an "op" (see the guide on Op for more)
   */
  createPerpendGroup() {
    let perpend = new Group(
      this.space.center.$subtract(0.1),
      this.space.center
    ).op(Line.perpendicularFromPt);
      return perpend
  }

  /**
   * Draw perpendicular line for every pt in pts-array
   * @param pts array of points on CanvasSpace 
   * @param perpend 
   * @param form set of functions to draw shapes on canvas
   */
  drawLines(pts: Group, perpend: any, form: CanvasForm) {
    pts.forEach((p, i) => {
      // for each point, find the perpendicular to the center line
      let lp = perpend(p);
      let ratio = this.getRatio(p, lp);
      this.drawForms(form, ratio, p, i, lp);
    });
  }

  getRatio(p, lp) {
    let ratio = Math.min(
      1,
      1 - lp.$subtract(p).magnitude() / (this.space.size.x / 2)
    );
    return ratio
  }

  /**
   * Draw lines & strokes on Canvas
   * @param form 
   * @param ratio 
   * @param p 
   * @param i 
   * @param lp 
   */
  drawForms(form, ratio, p, i, lp) {
    form
    .stroke(
      ['rgba(255,255,0,.3)', '0, 255, 255, 0.5)'][i % 5],
      ratio * 2
    )
    .line([p, lp]);
  form.fillOnly(['#f03', '#09f', '#0c6'][i % 5]).point(p, 1.5);
  }


  /**
   * Scroll to target element on btn-click
   * @param anchorId : id of target element
   */
  scrollTo(anchorId: string): void {
    document.getElementById(anchorId).scrollIntoView({ behavior: "smooth"});
  }
}
