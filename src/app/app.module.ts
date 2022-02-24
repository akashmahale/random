import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomComponent } from 'src/pages/random/random.component';
import { MalGrabComponent } from 'src/pages/mal-grab/mal-grab.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/services/api.service';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { HeadSubComponent } from 'src/components/head-sub/head-sub.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomComponent,
    MalGrabComponent,
    NavbarComponent,
    HeadSubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
