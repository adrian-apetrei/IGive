import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class NotificationsService {
  constructor(public toastController: ToastController) {}

  async show(message: string) {
    const toast = await this.toastController.create({
      message,
      position: "top",
      buttons: [
        {
          icon: "close-outline",
          role: "cancel",
        },
      ],
    });
    toast.present();
  }
}
