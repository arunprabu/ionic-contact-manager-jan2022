import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.page.html',
  styles: [], // inline styles
})
export class ContactDetailsPage implements OnInit {

  constructor( private alertController: AlertController) { }

  ngOnInit() {
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

}
