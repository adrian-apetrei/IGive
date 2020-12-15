import { Component, OnChanges, OnInit, ViewChild } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { NavController } from "@ionic/angular";
import { IonTabs } from "@ionic/angular/directives/navigation/ion-tabs";
import { Plugins, KeyboardInfo, Capacitor } from "@capacitor/core";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.page.html",
})
export class TabsPage implements OnInit {
  @ViewChild("tabs") tabs: IonTabs;
  isActive = false;
  hideFabButton = false;
  keyboard;

  constructor(private router: Router, private navCtrl: NavController) {
    if (Capacitor.platform !== "web") {
      this.keyboard = Plugins.Keyboard;

      this.keyboard.addListener("keyboardWillShow", (info: KeyboardInfo) => {
        this.hideFabButton = true;
      });
      this.keyboard.addListener("keyboardWillHide", () => {
        this.hideFabButton = false;
      });
    }
  }

  ngOnInit() {
    this.router.events.subscribe((event: NavigationEnd) => {
      if (event instanceof NavigationEnd) {
        if (
          event.url.includes("charity-details") ||
          event.url.includes("donation-method") ||
          event.url.includes("register-donation")
        ) {
          this.isActive = true;
        } else {
          this.isActive = false;
        }
      }
    });
  }

  goToRegisterDonation() {
    this.isActive = true;
    this.router.navigateByUrl("/tabs/register-donation");
  }

  async openTab(tab: string, evt: MouseEvent) {
    this.isActive = false;
    const tabSelected = this.tabs.getSelected();
    evt.stopImmediatePropagation();
    evt.preventDefault();
    return tabSelected !== tab
      ? await this.navCtrl.navigateRoot(this.tabs.outlet.tabsPrefix + "/" + tab)
      : this.tabs.select(tab);
  }
}
