import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.model';
import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { ToastService } from '../../services/toast/toast.service';

/**
 * Generated class for the EditShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {

  item: Item; 

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private shopping: ShoppingListService, private toast: ToastService) { }
  

  ionViewWillLoad() {
    console.log(this.navParams.get('item')); //Mostramos lo que le estamos enviando.
    this.item = this.navParams.get('item'); // Asignamos el valor del Item que nos han mandado por parametros a nuestra variable.
  }

  //Función que edita el objeto.
  saveItem(item: Item) {
    this.shopping.editItem(item).then(() => {
      this.toast.show(`${item.name} saved!`); //Mostramos la notificación.
      this.navCtrl.setRoot('HomePage'); //Después de modificarlo lo mandamos a home otra vez.
    });
  }

  //Función que elimina el objeto.
  removeItem(item: Item){
    this.shopping.removeItem(item).then(() => {
      this.toast.show(`${item.name} deleted!`); //Mostramos la notificación.
      this.navCtrl.setRoot('HomePage'); //Después de eliminarlo lo mandamos a home otra vez.
    });
  }

}
