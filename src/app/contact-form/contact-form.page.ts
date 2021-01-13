import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.page.html',
  styleUrls: ['./contact-form.page.scss'],
})
export class ContactFormPage implements OnInit {

  constructor(public modalController: ModalController) {
  }

  ngOnInit() {
  }

  async closeModal(){
    await this.modalController.dismiss();
  }

}
