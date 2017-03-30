import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent, ArticleItemComponent } from './index';
import { ArticlesService } from './articles.service';

@NgModule({
  imports: [RouterModule],
  exports: [
    ArticleListComponent,
    ArticleItemComponent
  ],
  declarations: [
    ArticleListComponent,
    ArticleItemComponent
  ],
  providers: [ArticlesService]
})

export class ArticlesModule {

}
