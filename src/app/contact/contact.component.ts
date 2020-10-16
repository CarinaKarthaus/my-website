import { Component, HostListener, OnInit } from '@angular/core';
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
  scrollHeight = this.triggerService.scrollHeight;

  @HostListener('window:scroll') 
  updateScrollHeight() {
    this.scrollHeight.contact_header = document.getElementById('header').clientHeight; 
    this.scrollHeight.contact_dialog = document.getElementById('contact_dialog').clientHeight;     
  }

  ngOnInit(): void {
  }

}
