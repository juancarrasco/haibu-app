import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ListPage } from '../list/list.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(public navCtrl: NavController) {

  }

  pushPage():void{
    // push another page onto the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.navigateRoot('list');
  }

}
