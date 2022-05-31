import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './Components/intro/intro.component';
import { FooterComponent } from './Components/footer/footer.component';
import { StoryComponent } from './Components/story/story.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    FooterComponent,
    StoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
