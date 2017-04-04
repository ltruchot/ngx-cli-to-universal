import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // needed for ngIf, ngFor, etc.
import { Routes, Router, RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './index';

@NgModule({
  imports: [RouterModule, CommonModule, FormsModule],
  exports: [
    LoginComponent,
  ],
  declarations: [
    LoginComponent
  ]
})

export class LoginModule {

}
