//Angular
import { NgModule, Renderer2 } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Components
import { AppComponent } from './app.component';

//Module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './global/angular-material/angular-material.module';
import { LoadSpinnerModule } from './global/load-spinner/load-spinner.module';
import { BoardModule } from './board/board.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    LoadSpinnerModule,
    BoardModule,
    Renderer2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
