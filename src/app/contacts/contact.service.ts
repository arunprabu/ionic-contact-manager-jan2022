import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  createContact(contactFormData) {
    console.log(contactFormData);

    return this.http.post('https://jsonplaceholder.typicode.com/users', contactFormData)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));

  }

  getContacts() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  getContactById( contactId){
    console.log(contactId);

    return this.http.get(`https://jsonplaceholder.typicode.com/users/${contactId}`)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  updateContact(contactFormData) {
    console.log(contactFormData);
    return this.http.put(`https://jsonplaceholder.typicode.com/users/${contactFormData.id}`, contactFormData)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

}

