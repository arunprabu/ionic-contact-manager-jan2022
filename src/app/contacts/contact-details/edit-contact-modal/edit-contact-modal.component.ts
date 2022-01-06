import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-edit-contact-modal',
  templateUrl: './edit-contact-modal.component.html',
  styles: [], // inline styles
})
export class EditContactModalComponent implements OnInit {

  // creating custom property
  @Input() id: number;
  @Input() name: string; // we are going to make the variable as custom prop
  @Input() email: string;
  @Input() phone: string;

  // reactive form
  nameInput: FormControl;
  emailInput: FormControl;
  phoneInput: FormControl;

  constructor(private modalController: ModalController,
    private contactService: ContactService) {
  }

  ngOnInit() {
    // receiving data from parent comp
    console.log(this.name);

    this.nameInput = new FormControl(this.name);
    this.emailInput = new FormControl(this.email);
    this.phoneInput = new FormControl(this.phone);
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  handleUpdateContact() {
    console.log(this.nameInput.value);
    console.log(this.emailInput.value);
    console.log(this.phoneInput.value);

    const contactFormData = {
      id: this.id,
      name: this.nameInput.value,
      phone: this.phoneInput.value,
      email:this.emailInput.value
    };

    this.contactService.updateContact(contactFormData)
      .subscribe( (res: any)=>{
        console.log(res);
      });

  }

}
