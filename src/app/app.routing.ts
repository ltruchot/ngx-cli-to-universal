import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent, ArticleItemComponent } from './articles/index';

const routes: Routes = [{
  path: '',
  component: ArticleListComponent
}, {
  path: 'article/:year/:month/:day/:title',
  component: ArticleItemComponent
}];

export const routing = RouterModule.forRoot(routes);
