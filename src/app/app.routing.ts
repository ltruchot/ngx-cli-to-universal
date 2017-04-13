import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent, ArticleItemComponent } from './articles/index';
import { LoginComponent } from './login/index';
import { MomentComponent } from './moment/index';

const routes: Routes = [{
  path: 'articles',
  component: ArticleListComponent
}, {
  path: 'article/:id',
  component: ArticleItemComponent
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'moment',
  component: MomentComponent
}];

export const routing = RouterModule.forRoot(routes);
