// ng modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// plugins modules
import { LocalStorageModule } from 'angular-2-local-storage';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';

// custom modules
import { routing } from './app.routing';
import { ArticlesModule } from './articles/articles.module';
import { LoginModule } from './login/login.module';

// components
import { AppComponent } from './app.component';
import { MomentComponent } from './moment/moment.component';

export class CustomOption extends ToastOptions {
  animate = 'slideDown'; // you can override any options available
  newestOnTop = true;
  showCloseButton = false;
  toastLife = 3000;
  maxShown = 1;
  positionClass = 'toast-top-right';
}

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
    LoginModule,
    ToastModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: ToastOptions,
      useClass: CustomOption
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
