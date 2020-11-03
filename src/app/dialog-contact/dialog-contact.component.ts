import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-contact',
  templateUrl: './dialog-contact.component.html',
  styleUrls: ['./dialog-contact.component.scss']
})
export class DialogContactComponent implements OnInit {
  transmitConfirmation = 'Sorry, something went wrong';
  failureMsg = 'Please try again.'
  icon = 'exclamation-triangle';

  constructor(public dialogRef: MatDialogRef<DialogContactComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  


  ngOnInit(): void {
    // Display dialog-msg according to server response for transmission
    let msgSent = this.data.messageSent;
    if (msgSent) {
      this.transmitConfirmation = 'Thank you, message sent!'
      this.icon = 'check-circle';
    } else {
      this.transmitConfirmation = 'Sorry, something went wrong.'
      this.icon = 'exclamation-triangle';
      // this.transmitMsg = 'Please try again later.';
    }

  }

}
