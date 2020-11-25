import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowseCausesPage } from './browse-causes.page';
import { TopicListComponent } from './topic-list/topic-list.component';

const routes: Routes = [
  {
    path: '',
    component: BrowseCausesPage
  },
  {
    path: 'topic',
    component: TopicListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowseCausesPageRoutingModule {}
