import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ContactService } from '../contact.service';
import { EditContactModalComponent } from './edit-contact-modal/edit-contact-modal.component';
// import { UpdateContactModalComponent } from './update-contact-modal/update-contact-modal.component';
//import { Contacts } from '@capacitor-community/contacts';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.page.html',
  styles: [], // inline styles
})
export class ContactDetailsPage implements OnInit {

  contactData: any;

  // dataFromModal: any;
  constructor( private alertController: AlertController,
    private modalController: ModalController,
    private activatedRoute: ActivatedRoute,
    private contactService: ContactService) { }

  ngOnInit() {
    console.log('inside ngOnInit');
    // read url param
    const contactId = this.activatedRoute.snapshot.paramMap.get('contactId');
    console.log(contactId);

    this.contactService.getContactById(contactId)
      .subscribe( (res: any) =>{
        console.log(res);
        this.contactData = res;
      });
  }

  async handleDeleteContact() {
    const alert = await this.alertController.create({
      header: 'Are you sure?',
      message: 'This contact will be permanantly deleted. Okay?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Yes',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async handleUpdateModalOpen() {
    const modal = await this.modalController.create({
      component: EditContactModalComponent,
      componentProps: {
        id: this.contactData.id,
        name: this.contactData.name,
        phone: this.contactData.phone,
        email: this.contactData.email
      },
      cssClass: 'my-custom-class',
    });
    return await modal.present();

    // const modal = await this.modalController.create({
    //   component: UpdateContactModalComponent,
    //   cssClass: 'my-custom-class',
    //   componentProps: {
    //     name: 'Arun',
    //     email: 'a@b.com',
    //     phone: '342443214'
    //   }
    // });

    // modal.onDidDismiss().then((dataReturned) => {
    //   if (dataReturned !== null) {
    //     this.dataFromModal = dataReturned.data;
    //     console.log(this.dataFromModal);

    //     // access the data in android device
    //     Contacts.getContacts().then(result => {
    //       console.log(result);
    //       for (const contact of result.contacts) {
    //           console.log(contact);
    //       }
    //     });
    //   }
    // });
    // return await modal.present();
  }

}
