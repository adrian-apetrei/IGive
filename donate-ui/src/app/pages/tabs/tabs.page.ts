import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { NavController } from '@ionic/angular';
import { IonTabs } from '@ionic/angular/directives/navigation/ion-tabs';

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.page.html",
  styleUrls: ["./tabs.page.scss"],
})
export class TabsPage implements OnInit {
  @ViewChild('tabs') tabs: IonTabs;

  constructor(private router: Router, private navCtrl: NavController) {}

  ngOnInit() {}

  goToRegisterDonation() {
    this.router.navigateByUrl("/tabs/register-donation");
  }


  async openTab(tab: string, evt: MouseEvent) {
      const tabSelected = this.tabs.getSelected();
      evt.stopImmediatePropagation();
      evt.preventDefault();
      return tabSelected !== tab
        ? await this.navCtrl.navigateRoot(this.tabs.outlet.tabsPrefix + '/' + tab)
        : this.tabs.select(tab);
  }
}
