import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    AppRoutingModule,
    // add 'StoreModule.forRoot({}, {})' to initialize the ngrx store module to prevent the following bootstrap exception:
    // NullInjectorError: R3InjectorError(AppModule)[StoreFeatureModule -> ReducerManager -> ReducerManager -> ReducerManager]: NullInjectorError: No provider for ReducerManager!
    StoreModule.forRoot({}, {}),
    environment.production ? []: StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
