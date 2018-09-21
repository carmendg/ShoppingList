import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../models/item/item.model';
import 'rxjs/add/operator/map';  //Necesario para que pueda usar el MAP.

@IonicPage(  )
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shoppingList$: Observable<Item[]>;

  constructor(public navCtrl: NavController, private shopping: ShoppingListService) {

    this.shoppingList$ = this.shopping
                          .getShoppingList() //Nos devuelve la lista de la Base de Datos.
                          .snapshotChanges() //Nos devuelve el valor y la key. (Key and Value).
                          //.valueChanges() //Nos devuelve sólo el valor.
                          .map( changes => { //Nos devuelve una lista con los cambios y para cada uno vamos a obtener
                              return changes.map(c => ({
                                key: c.payload.key, ...c.payload.val()
                             }));
                          });
  }
 /* {
    key: 'value',
    name: 'iPad Pro';
  }*/

}
