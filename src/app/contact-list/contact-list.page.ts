import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContactFormPage } from '../contact-form/contact-form.page';
import { ContactService } from '../services/contact.service';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.page.html',
  styleUrls: ['./contact-list.page.scss'],
})
export class ContactListPage implements OnInit {

  public contactInfo =[];

  constructor(private contactService:ContactService, public modalCtrl: ModalController) { }

  ngOnInit() {
    this.contactService.getContact().subscribe((data) => this.contactInfo=data);
  }

  async openModal(){
    const modal = await this.modalCtrl.create({
      component: ContactFormPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'middleInitial': 'N'
      }
    });
    await modal.present();

}}
