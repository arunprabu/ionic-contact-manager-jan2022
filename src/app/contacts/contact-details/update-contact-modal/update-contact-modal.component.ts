import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-update-contact-modal',
  templateUrl: './update-contact-modal.component.html',
  styles: []
})
export class UpdateContactModalComponent implements OnInit{

  @Input() name: string; // this is custom prop to receive name from parent comp /page
  @Input() email: string;
  @Input() phone: string;

  nameInput: FormControl;
  emailInput: FormControl;
  phoneInput: FormControl;

  constructor(private modalController: ModalController) {
  }

  ngOnInit(): void {
    console.log(this.phone);
    this.nameInput = new FormControl(this.name);
    this.emailInput = new FormControl(this.email);
    this.phoneInput = new FormControl(this.phone);
  }

  dismissModal(){
    this.modalController.dismiss();
  }

  handleUpdateContact(){
    //submittable form data
    const contactData = {
      name: this.nameInput.value,
      email: this.emailInput.value,
      phone: this.phoneInput.value
    };

    console.log(contactData);
  }
}
