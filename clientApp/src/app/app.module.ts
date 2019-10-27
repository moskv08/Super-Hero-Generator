import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroService } from './services/hero.service';
import { HeroFormComponent } from './components/hero-form/hero-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    HttpClientModule,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
