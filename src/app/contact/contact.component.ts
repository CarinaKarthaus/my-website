import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { SlideInAnimation } from '../animations';
import { AnimationTriggerService } from '../services/animationtriggerservice';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [ SlideInAnimation ]
})
export class ContactComponent implements OnInit {

  submit(){
    console.log('workin');
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Please enter an email-address';
    }

    return this.email.hasError('email') ? 'Please enter a valid email' : '';
  }

  constructor(public triggerService: AnimationTriggerService) { }

  ngOnInit(): void {
  }
  
  animationState = this.triggerService.animationState;


   // Access Elements to detect offset to document top
   @ViewChild('contactHeader') contactHeader: ElementRef;
   @ViewChild('contactDialog') contactDialog: ElementRef;
 
   headerOffset = 0;
   dialogOffset = 0;
   elementOffsetTop = this.triggerService.elementOffsetTop;
 
   @HostListener('window:scroll') 
   updateOffset() {
       const rectHeader = this.contactHeader.nativeElement.getBoundingClientRect();
       const rectDialog = this.contactDialog.nativeElement.getBoundingClientRect();
 
       // Add element's offset to viewport-top to the offset already scrolled (pageYOffset)
       this.headerOffset = rectHeader.top + window.pageYOffset; // - document.documentElement.clientTop;
       this.dialogOffset = rectDialog.top + window.pageYOffset; // - document.documentElement.clientTop;

       // Update offset-object from triggerService
       this.elementOffsetTop.contact_header = this.headerOffset;
       this.elementOffsetTop.contact_dialog = this.dialogOffset;
 
       // console.log('elementOffsetTop', this.elementOffsetTop);
     }

  

 

}
