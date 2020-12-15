import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController, LoadingController } from "@ionic/angular";
import { finalize } from "rxjs/operators";
import { Credentials } from "src/app/data/models";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
})
export class LoginPage implements OnInit {
  credentials: Credentials = {
    email: "",
    password: "",
  };
  constructor(
    private auth: AuthService,
    private router: Router,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}

  async login() {
    const loading = await this.loadingCtrl.create();
    loading.present();

    this.auth
      .login(this.credentials)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(
        (res) => {
          if (res) {
            this.router.navigateByUrl("/tabs/home");
          }
        },
        async (err) => {
          const alert = await this.alertCtrl.create({
            header: "Login failed",
            message: err.error["msg"],
            buttons: ["OK"],
          });
          await alert.present();
        }
      );
  }
}
