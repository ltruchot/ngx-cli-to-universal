import { Component, OnInit, ViewContainerRef, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

import { SeatersClient } from 'seaters';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: []
})
export class AppComponent implements OnInit {
  title = 'app works!';
  modelExample: string;
  isBrowser: boolean;

  constructor (@Inject(PLATFORM_ID) platformId: string, private router: Router, private toastsManager: ToastsManager, private vRef: ViewContainerRef) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      this.toastsManager.setRootViewContainerRef(vRef);
    }
  }

  ngOnInit () { }

  displayToastr () {
    if (!this.isBrowser) {
      return;
    }
    this.toastsManager.info('I\'m the body', 'I\'m a toast head!');
  }
}
