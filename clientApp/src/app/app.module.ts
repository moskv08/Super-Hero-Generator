import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroService } from './services/hero.service';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { HeroProfileComponent } from './components/hero-profile/hero-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    HeroProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
