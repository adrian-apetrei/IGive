import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { SharedModule } from "src/app/modules/shared.module";
import { TopicCardComponent } from "../add-donation/topic-card/topic-card.component";
import { BrowseCausesPageRoutingModule } from "./browse-causes-routing.module";
import { BrowseCausesPage } from "./browse-causes.page";
import { TopicListComponent } from "./topic-list/topic-list.component";

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    IonicModule,
    BrowseCausesPageRoutingModule,
  ],
  declarations: [BrowseCausesPage, TopicCardComponent, TopicListComponent],
})
export class BrowseCausesPageModule {}
