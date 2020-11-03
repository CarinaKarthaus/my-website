import {
  AfterViewInit,
  Component,
  ElementRef,
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
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../../models/contact.class';
import { DialogContactComponent } from '../dialog-contact/dialog-contact.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [SlideInAnimation],
})
export class ContactComponent implements OnInit, AfterViewInit {
  contact = new Contact();
  submitted = false
  clicked: boolean;

  contactForm = new FormGroup({
    name: new FormControl( '', Validators.required),
    email: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  messageSent = false;

  /**
   * Send email with contact-form-data and reset form, if form is filled correctly
   * @param formDirective
   */
  submitForm(formDirective: FormGroupDirective) {
    if (formDirective.valid) {
      this.sendEmail(formDirective);

      this.submitted = true;
      this.clicked = true;
      setTimeout(() => {
        this.clicked = false;
      }, 60000); // Disables submitting for 60s
    }
  }

  // send email to server
  sendEmail(formDirective) {
    console.log();

   this.http
    .post('https://carina-karthaus.developeradademie.com/php/send_mail.php', {
      email: this.contactForm.controls['email'].value,
      name: this.contactForm.controls['name'].value,
      message: this.contactForm.controls['message'].value,
    })
    .subscribe(
      (success: any) => {
        this.openDialog(true);
        this.contactForm.reset();
        formDirective.resetForm();
      },
      (error: any) => {
        this.openDialog(false);
      }
    ); 
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
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    // this.openDialog(false);
  }


  ngAfterViewInit() {
    this.triggerService.observable.subscribe(() => {
      this.updateOffset();
      
    })
  }

  animationState = this.triggerService.animationState;

  // Access Elements to detect offset to document top
  @ViewChild('contactHeader') contactHeader: ElementRef;
  @ViewChild('contactDialog') contactDialog: ElementRef;

  headerOffset = 0;
  dialogOffset = 0;
  elementOffsetTop = this.triggerService.elementOffsetTop;

  updateOffset() {
    let pageOffsetY = this.triggerService.currentPagePosition;
    const rectHeader = this.contactHeader.nativeElement.getBoundingClientRect();
    const rectDialog = this.contactDialog.nativeElement.getBoundingClientRect();

    // Add element's offset to viewport-top to the offset already scrolled (pageYOffset)
    this.headerOffset = rectHeader.top + pageOffsetY;
    this.dialogOffset = rectDialog.top + pageOffsetY;

    // Update offset-object from triggerService
    this.elementOffsetTop.contact_header = this.headerOffset;
    this.elementOffsetTop.contact_dialog = this.dialogOffset;
    
  }



  /**
   * Open dialog to show if message has been transmitted to server
   * @param messageSent server-response, if message transmission was successful
   */
  openDialog(messageSent) {
    this.messageSent = messageSent;
    this.dialog.open(DialogContactComponent, {
      data: {
        messageSent: messageSent
      }
    }) ;

  }
}
