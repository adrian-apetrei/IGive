import { Component, OnInit } from "@angular/core";
import { StaticDataService } from "src/app/services/static-data.service";
import { sortBy } from 'lodash';
import { Router } from '@angular/router';
@Component({
  selector: "app-transactions",
  templateUrl: "./transactions.page.html",
  styleUrls: ["./transactions.page.scss"],
})
export class TransactionsPage implements OnInit {
  charities;
  transactions;
  totalDonatedAmount;
  constructor(private dataService: StaticDataService, private router: Router) {}

  ngOnInit() {
    this.transactions = sortBy(this.dataService.getTransactions(), ['date']);
    this.charities = this.transactions.reduce((acc, item) => {
      const obj: any = {
        charityName: item.charityName,
        charityId: item.charityId,
        donatedAmount: item.donatedAmount,
      };
      if (!acc.length) {
        acc.push(obj);
      } else {
        const accumulator = acc.filter(
          (accItem) => accItem.charityId === obj.charityId
        );
        if (accumulator.length) {
          acc[acc.indexOf(accumulator[0])].donatedAmount =
            obj.donatedAmount.charAt(0) +
            (Number(obj.donatedAmount.substring(1)) +
              Number(acc[acc.indexOf(accumulator[0])].donatedAmount.substring(1)));
        } else {
          acc.push(obj);
        }
      }
      return acc;
    }, []);
    this.totalDonatedAmount = this.transactions.reduce((acc, val) => acc + Number(val.donatedAmount.substring(1)) , 0);
  }

  goToCharityDetails(id) {
    this.router.navigateByUrl(`/tabs/charity-details/${id}`);
  }
}
