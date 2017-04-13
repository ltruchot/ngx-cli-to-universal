// ng modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// plugins modules
import { LocalStorageModule } from 'angular-2-local-storage';

// custom modules
import { routing } from './app.routing';
import { ArticlesModule } from './articles/articles.module';
import { LoginModule } from './login/login.module';


// components
import { AppComponent } from './app.component';
import { MomentComponent } from './moment/moment.component';

@NgModule({
  declarations: [
    AppComponent,
    MomentComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'app-root'
    }),
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    }),
    FormsModule,
    HttpModule,
    routing,
    RouterModule,
    ArticlesModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
