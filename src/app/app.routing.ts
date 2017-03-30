import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent, ArticleItemComponent } from './articles/index';

const routes: Routes = [{
  path: '',
  component: ArticleListComponent
}, {
  path: 'article/:id',
  component: ArticleItemComponent
}];

export const routing = RouterModule.forRoot(routes);
