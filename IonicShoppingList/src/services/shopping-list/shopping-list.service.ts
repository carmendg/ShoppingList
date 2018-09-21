
import { AngularFireDatabase } from "angularfire2/database";
import { Item } from "../../models/item/item.model";
import { Injectable } from "@angular/core";


@Injectable()
export class ShoppingListService {

    private shoppingListRef = this.db.list<Item>('shopping-list');
    constructor(private db: AngularFireDatabase) { }

    getShoppingList() {
        return this.shoppingListRef;
    }

    addItem(item: Item) { //Añadir el elemento a la lista.
        return this.shoppingListRef.push(item);
    }

    editItem(item: Item) { //Modifico elemento de la lista.
        return this.shoppingListRef.update(item.key, item);
    }

    removeItem(item: Item) { //Borro elemento de la lista.
        return this.shoppingListRef.remove(item.key);
    }
}