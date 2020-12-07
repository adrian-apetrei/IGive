import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { NavController } from "@ionic/angular";
import { IonTabs } from "@ionic/angular/directives/navigation/ion-tabs";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.page.html",
})
export class TabsPage implements OnInit {
  @ViewChild("tabs") tabs: IonTabs;
  isActive = false;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event: NavigationEnd) => {
      if (event instanceof NavigationEnd) {
        if (
          event.url.includes("charity-details") ||
          event.url.includes("donation-method")
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
