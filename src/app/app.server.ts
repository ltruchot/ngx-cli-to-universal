import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule} from './app.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { ArticlesModule } from './articles/articles.module';

@NgModule({
  imports: [
    ServerModule,
    FormsModule,
    AppModule,
    ArticlesModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: []
})
export class AppServerModule {}
