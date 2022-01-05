import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-contact-modal',
  templateUrl: './edit-contact-modal.component.html',
  styles: [], // inline styles
})
export class EditContactModalComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  dismissModal(){
    this.modalController.dismiss();
  }

}
