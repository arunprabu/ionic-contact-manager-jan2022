import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
//import {Contact, Contacts, NewContact} from '@capacitor-community/contacts';
import { ToastController } from '@ionic/angular';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.page.html',
  styleUrls: ['./add-contact.page.scss'],
})
export class AddContactPage implements OnInit {

  name = new FormControl('');
  email = new FormControl('');
  phone = new FormControl('');

  constructor(private contactService: ContactService,
    private toastController: ToastController) {

  }

  ngOnInit() {
  }

  async handleContactCreate(){
    const contactData = {
      name: this.name.value,
      email: this.email.value,
      phone: this.phone.value
    };

    console.log(contactData); // submittable form data

    const toast = await this.toastController.create({
      message: 'Contact added succesfully!',
      duration: 2000,
      position: 'middle',
      color: 'success'
    });

    this.contactService.createContact(contactData)
      .subscribe( (res: any) => {
        console.log(res);
        if(res && res.id ){
          toast.present();
        }
      });
  }


















  // async saveContact(){
  //   const newContact: NewContact = {
  //     givenName: 'Arthur',
  //     familyName: 'Dent'
  //   };

  //   Contacts.saveContact(newContact);
  //   const toast = await this.toastController.create({
  //     message: `${newContact.givenName} saved`,
  //     duration: 2000
  //   });
  //   toast.present();
  // }

}
