import { Component, OnInit } from '@angular/core';
import { Contacts } from '@capacitor-community/contacts';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  contactList: any;
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    // this.contactService.getContacts()
    //   .subscribe( (res: any) => {
    //     console.log(res);

    //     this.contactList = res;
    //   });
    Contacts.getContacts().then(result => {
      console.log(result);
        for (const contact of result.contacts) {
            console.log(contact);
        }
    });
  }

}
