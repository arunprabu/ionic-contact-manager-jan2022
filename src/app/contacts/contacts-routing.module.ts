import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsPage } from './contacts.page';

// child routing / nested routing
const routes: Routes = [
  {
    path: '', // localhost:8100/contacts
    component: ContactsPage
  },
  {
    path: 'add', // localhost:8100/contacts/add
    loadChildren: () => import('./add-contact/add-contact.module').then( m => m.AddContactPageModule)
  },
  {
    path: ':contactId', // contactId is the URL Param
    loadChildren: () => import('./contact-details/contact-details.module').then( m => m.ContactDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // registering the child routes
  exports: [RouterModule],
})
export class ContactsPageRoutingModule {}
