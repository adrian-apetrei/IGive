import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { finalize } from "rxjs/operators";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
})
export class RegisterPage implements OnInit {
  credentials = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    displayName: "",
  };
  constructor(
    private auth: AuthService,
    private router: Router,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}

  async register() {
    const loading = await this.loadingCtrl.create();
    loading.present();
    this.credentials.displayName = `${this.credentials.firstName} ${this.credentials.lastName}`;
    this.auth
      .register(this.credentials)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(
        (res) => {
          this.router.navigateByUrl("/user-preferences/welcome");
        },
        async (err) => {
          const alert = await this.alertCtrl.create({
            header: "Registration failed",
            message: err.error["msg"],
            buttons: ["OK"],
          });
          await alert.present();
        }
      );
  }
}
