import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Contacts, NewContact } from '@capacitor-community/contacts';
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

  async handleContactCreate() {
    const contactData = {
      name: this.name.value,
      email: this.email.value,
      phone: this.phone.value
    };

    console.log(contactData); // submittable form data

    this.contactService.createContact(contactData)
      .subscribe((res: any) => {
        console.log(res);

        const contactDataToBeSaved = {
          givenName: res.name,
          phoneNumbers: [{ label: 'Official', number: res.phone }]
        };

        if (res && res.id) {
          Contacts.saveContact(contactDataToBeSaved)
            .then(async (result: any) => {
              console.log(result);
              const toast = await this.toastController.create({
                message: `${result.givenName} saved`,
                duration: 2000,
                position: 'middle',
                color: 'success'
              });
              toast.present();
            })
            .catch(async (err) => {
              console.log(err);
              const toast = await this.toastController.create({
                message: err,
                duration: 2000,
                position: 'middle',
                color: 'danger'
              });
              toast.present();
            });
        }
      });
  }

  // saveContact(res){
  //   const newContact: NewContact = {
  //     givenName: res.name,
  //     familyName: ''
  //   };

  //   Contacts.saveContact(newContact)
  //     .then( async (status) => {
  //       console.log(status);
  //       const toast = await this.toastController.create({
  //         message: `${newContact.givenName} saved`,
  //         duration: 2000,
  //         position: 'middle',
  //         color: 'success'
  //       });
  //       toast.present();
  //     })
  //     .catch(async (err)=>{
  //       console.log(err);
  //       const toast = await this.toastController.create({
  //         message: err,
  //         duration: 2000,
  //         position: 'middle',
  //         color: 'danger'
  //       });
  //       toast.present();
  //     });
  // }

}
