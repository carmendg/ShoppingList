import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.model';
import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { ToastService } from '../../services/toast/toast.service';

/**
 * Generated class for the AddShoppingItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-shopping-item',
  templateUrl: 'add-shopping-item.html',
})
export class AddShoppingItemPage {

  item: Item= {
    name: '',
    quantity: undefined,
    price: undefined,
  };


  constructor(public navCtrl: NavController, public navParams: NavParams,
              private shopping: ShoppingListService, private toast: ToastService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddShoppingItemPage');
  }

  //Añadimos la funcionalidad del botón de añadir.
  addItem(item: Item){
    //this.shopping.addItem(item); Si ponemos esto solo, quiere decir que lo añade y en la pantalla no se verá nada. 
    this.shopping.addItem(item).then( ref => { //Podemos añadirle un callback para que se vea algo. (PARA ESO ES EL THEN)
      //console.log(ref.key); //Mostramos la key del item que hemos añadido.
      //Hacemos que navegue hacia atrás mandándole la key para mostrar el item añadido.
      this.toast.show(`${item.name} added!`);
      this.navCtrl.setRoot('HomePage', { key: ref.key});
    });                  

  }

}
