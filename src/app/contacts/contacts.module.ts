import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactsPageRoutingModule } from './contacts-routing.module';

import { ContactsPage } from './contacts.page';
import { UpdateContactModalComponent } from './contact-details/update-contact-modal/update-contact-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ContactsPageRoutingModule
  ],
  declarations: [ContactsPage, UpdateContactModalComponent]
})
export class ContactsPageModule {}
