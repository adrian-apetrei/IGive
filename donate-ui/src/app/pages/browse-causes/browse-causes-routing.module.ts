import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataResolverService } from 'src/app/services/static-data-resolver.service';

import { BrowseCausesPage } from './browse-causes.page';
import { TopicListComponent } from './topic-list/topic-list.component';

const routes: Routes = [
  {
    path: '',
    component: BrowseCausesPage
  },
  {
    path: 'topic/:id',
    resolve: {
      topic: DataResolverService
    },
    component: TopicListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowseCausesPageRoutingModule {}
