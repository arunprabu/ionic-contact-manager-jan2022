import { Component, OnInit } from '@angular/core';
import {Contact, Contacts, NewContact} from '@capacitor-community/contacts';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.page.html',
  styleUrls: ['./add-contact.page.scss'],
})
export class AddContactPage implements OnInit {

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  async saveContact(){
    const newContact: NewContact = {
      givenName: 'Arthur',
      familyName: 'Dent'
    };

    Contacts.saveContact(newContact);
    const toast = await this.toastController.create({
      message: `${newContact.givenName} saved`,
      duration: 2000
    });
    toast.present();
  }

}
