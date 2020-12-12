import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  Downloader,
  DownloadRequest,
  NotificationVisibility,
} from "@ionic-native/downloader/ngx";
import {
  DocumentViewer,
  DocumentViewerOptions,
} from "@ionic-native/document-viewer/ngx";

@Component({
  selector: "app-tax-forms",
  templateUrl: "./tax-forms.component.html",
  styleUrls: ["./tax-forms.component.scss"],
})
export class TaxFormsComponent implements OnInit {
  charity;
  taxForms = [];
  viewPdf = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute // private document: DocumentViewer // private downloader: Downloader,
  ) {}

  ngOnInit() {
    if (this.route.snapshot.data["charity"]) {
      this.charity = this.route.snapshot.data["charity"];
    }
    if (this.charity.name === "COVID-19 Solidarity Response Fund (WHO)") {
      this.taxForms = [
        {
          name: "COVID-19 Solidarity Response Fund Certificate",
        },
      ];
    }
    this.charity.taxFormDesc = `${this.charity.name} is a registered charity 10795 8621 RR0001
    )} They provide tax forms at the beginning of the calendar year, usually in the first two weeks on January for donations made in the previous calendar year.`;
  }

  back() {
    this.viewPdf = false;
    this.router.navigateByUrl(`tabs/charity-details/${this.charity._id}`);
  }

  closePdf() {
    this.viewPdf = false;
  }
  downloadPDF(form) {
    this.viewPdf = true;
    // const options: DocumentViewerOptions = {
    //   title: form.name,
    // };
    // this.document.viewDocument(
    //   `../../../assets/pdf/${form.name}.pdf`,
    //   "application/pdf",
    //   options
    // );
    // const request: DownloadRequest = {
    //   uri: "./",
    //   title: form.name,
    //   description: "",
    //   mimeType: "",
    //   visibleInDownloadsUi: true,
    //   notificationVisibility: NotificationVisibility.VisibleNotifyCompleted,
    //   destinationInExternalFilesDir: {
    //     dirType: "Downloads",
    //     subPath: "app-debug.apk",
    //   },
    // };
    // this.downloader
    //   .download(request)
    //   .then((location: string) => console.log("File downloaded at:" + location))
    //   .catch((error: any) => console.error(error));
  }
}
