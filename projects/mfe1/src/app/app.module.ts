import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderModule} from "./header/header.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HeaderModule,
    // add 'StoreModule.forRoot({}, {})' to initialize the ngrx store module to prevent the following bootstrap exception:
    // NullInjectorError: R3InjectorError(AppModule)[StoreFeatureModule -> ReducerManager -> ReducerManager -> ReducerManager]: NullInjectorError: No provider for ReducerManager!
    StoreModule.forRoot({}, {}),
    environment.production ? [] : StoreDevtoolsModule.instrument({ name: 'NgRx Micro frontend mfe1', maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
