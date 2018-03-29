import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContatoPage } from '../contato/contato';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  

  constructor(public navCtrl: NavController) {

  }
  openContatoPage(){
  this.navCtrl.push(ContatoPage);
  }
}
