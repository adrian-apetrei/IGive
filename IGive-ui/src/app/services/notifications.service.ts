import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { AlertController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class NotificationsService {
  constructor(
    public toastController: ToastController,
    public alertController: AlertController
  ) {}

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

  async presentAlertConfirm(options) {
    const alert = await this.alertController.create({
      cssClass: "confirm-dialog",
      header: options.header || "",
      message: options.message,
      buttons: [
        {
          text: "No",
          role: "cancel",
          cssClass: "secondary",
        },
        {
          text: "Yes",
          role: "confirm",
        },
      ],
    });

    await alert.present();

    return alert;
  }
}
