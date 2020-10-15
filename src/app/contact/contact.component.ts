import { Component, OnInit } from '@angular/core';
import { SlideInAnimation } from '../animations';
import { AnimationTriggerService } from '../services/animationtriggerservice';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [ SlideInAnimation ]
})
export class ContactComponent implements OnInit {

  constructor(public triggerService: AnimationTriggerService) { }
  
  animationState = this.triggerService.animationState;

  ngOnInit(): void {
  }

}
