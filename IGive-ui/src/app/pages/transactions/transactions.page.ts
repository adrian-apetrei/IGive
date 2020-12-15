import { Component, OnInit } from "@angular/core";
import { StaticDataService } from "src/app/services/static-data.service";
import { sortBy } from "lodash";
import { Router } from "@angular/router";
import { DonationService } from "src/app/services/donation.service";
import { forkJoin } from "rxjs";
import { map } from "rxjs/operators";
@Component({
  selector: "app-transactions",
  templateUrl: "./transactions.page.html",
})
export class TransactionsPage implements OnInit {
  charities;
  transactions;
  totalDonatedAmount;
  data;
  constructor(
    private dataService: StaticDataService,
    private router: Router,
    private donations: DonationService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    forkJoin([
      this.dataService.getCharities(),
      this.donations.getDonationMethods(),
    ])
      .pipe(
        map(([charities, donations]) => {
          return { charities, donations: (donations as any).donationMethods };
        })
      )
      .subscribe((data) => {
        const transactions = (data.donations as any)
          .map((d) => ({
            ...d,
            charityName: (data.charities as any).filter(
              (c) => c._id === d.charityId
            )[0].name,
          }))
          .filter((i) => !!i.paymentMethod.donationAmount);
        this.data = data.charities;
        this.transactions = sortBy(transactions, ["created_at"]);
        this.charities = this.transactions.reduce((acc, item) => {
          const obj: any = {
            charityName: this.data.filter((c) => c._id === item.charityId)[0]
              .name,
            charityId: item.charityId,
            donatedAmount: item.paymentMethod.donationAmount || 0,
          };
          if (!acc.length) {
            acc.push(obj);
          } else {
            const accumulator = acc.filter(
              (accItem) => accItem.charityId === obj.charityId
            );
            if (accumulator.length) {
              acc[acc.indexOf(accumulator[0])].donatedAmount +=
                obj.donatedAmount;
            } else {
              acc.push(obj);
            }
          }
          return acc;
        }, []);
        this.totalDonatedAmount = this.transactions.reduce(
          (acc, val) => acc + (val.paymentMethod.donationAmount || 0),
          0
        );
      });
  }

  goToCharityDetails(id) {
    const charity = this.data.filter((item) => {
      return item._id === id;
    })[0];
    this.dataService.setData(id, charity);
    this.router.navigateByUrl(`/tabs/charity-details/${id}`);
  }
}
