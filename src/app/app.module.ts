// ng modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// custom modules
import { routing } from './app.routing';
import { ArticlesModule } from './articles/articles.module';

// components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'app-root'
    }),
    FormsModule,
    HttpModule,
    routing,
    RouterModule,
    ArticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
