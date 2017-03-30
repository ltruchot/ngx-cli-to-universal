import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // needed for ngIf, ngFor, etc.
import { Routes, Router, RouterModule, ActivatedRoute } from '@angular/router';
import { ArticleListComponent, ArticleItemComponent } from './index';
import { ArticlesService } from './articles.service';

@NgModule({
  imports: [RouterModule, CommonModule],
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
