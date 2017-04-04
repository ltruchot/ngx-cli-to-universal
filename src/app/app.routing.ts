import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent, ArticleItemComponent } from './articles/index';
import { LoginComponent } from './login/index';

const routes: Routes = [{
  path: '',
  component: ArticleListComponent
}, {
  path: 'article/:id',
  component: ArticleItemComponent
}, {
  path: 'login',
  component: LoginComponent
}];

export const routing = RouterModule.forRoot(routes);
