import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SlideInAnimation } from '../animations';
import { AnimationTriggerService } from '../services/animationtriggerservice';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../../models/contact.class';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [SlideInAnimation],
})
export class ContactComponent implements OnInit {
  contact = new Contact();
  submitted = false
  clicked: boolean;

  contactForm = new FormGroup({
    name: new FormControl( '', Validators.required),
    email: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  /**
   * If form-input is valid, send email with contact-form-data and reset form
   * @param formDirective
   */
  submitForm(formDirective: FormGroupDirective) {
    if (formDirective.valid) {
      this.sendEmail();
      this.contactForm.reset();
      this.submitted = true;
      this.clicked = true;
      setTimeout(() => {
        this.clicked = false;
      }, 60000); // Disables submitting for 60s
    }
  }

  // send email to server
  sendEmail() {
    console.log();

/*     this.http
      .post('http://carina-karthaus.developeradademie.com/php/send_mail.php', {
        email: this.contactForm.controls['email'].value,
        name: this.contactForm.controls['name'].value,
        message: this.contactForm.controls['message'].value,
      })
      .subscribe(
        (success: any) => {
          // Wenn fertig:formDirective.resetForm();
          // Erfolgsnachricht anzeigen (Dialog)
        },
        (error: any) => {
          // Fehlermeldung anzeigen
        }
      ); */
  }

  email = new FormControl('', [Validators.required, Validators.email]); 
  name = new FormControl('', [Validators.required, Validators.minLength(2)]); 
  message = new FormControl('', [Validators.required, Validators.minLength(5)]); 

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Please enter an email-address';
    }
    return this.email.hasError('email') ? 'Please enter a valid email' : '';
  }

  constructor(
    public triggerService: AnimationTriggerService,
    private http: HttpClient,
    private dialogRef: MatDialogRef<ContactComponent>
  ) {}

  ngOnInit(): void {}

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
