import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { SlideInAnimation } from '../animations';
import { AnimationTriggerService } from '../services/animationtriggerservice';
import { FormControl, FormGroup, FormGroupDirective, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../../models/contact.class';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [ SlideInAnimation ]
})
export class ContactComponent implements OnInit {
  contact = new Contact();
  submitted = false;
  clicked: boolean;

  contactForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    message: new FormControl()
 });

 /**
  * If form-input is valid, send email with contact-form-data and reset form
  * @param formDirective 
  */
  submitForm(formDirective: FormGroupDirective) {
    if (formDirective.valid) {
      this.sendEmail();
      formDirective.resetForm();
      this.contactForm.reset();
      this.submitted = true;
      this.clicked = true;
      setTimeout(() => {
        this.clicked = false;
      }, 60000)   // Disables submitting for 60s  
    }
  }

  // send email to server
  sendEmail(){
    console.log(this.contact);
   
    // this.http.post('http://carina-karthaus.developeradademie.com/php/send_mail.php', {
    // "email": this.contact.email,
    // "name": this.contact.name,
    // "message": this.contact.message
    // })
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Please enter an email-address';
    }

    return this.email.hasError('email') ? 'Please enter a valid email' : '';
  }

  constructor(public triggerService: AnimationTriggerService, private http: HttpClient, private dialogRef: MatDialogRef<ContactComponent>) { }

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
