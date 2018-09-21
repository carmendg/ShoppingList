import { Injectable } from "../../../node_modules/@angular/core";
import { ToastController } from "ionic-angular";

/* Para mandar las notificaciones de cuando se ha guardado, borrado o modificado un elemento en la base de datos.*/


@Injectable()
export class ToastService {
    constructor( private toastCtrl: ToastController){ }

    show( message: string, duration: number = 3000 ){
        return this.toastCtrl.create({
            message,
            duration
        }).present();
    }
}