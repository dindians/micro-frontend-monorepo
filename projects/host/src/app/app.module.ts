import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MetaReducer, StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {hydrationMetaReducer} from "./hydration-meta-reducer";
import {IAppState} from "./i-app-state";
import {logMessagesStateReducer} from "@lib/log-messages";
import {HeaderModule} from "./header/header.module";

const metaReducers: MetaReducer[] = [hydrationMetaReducer];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HeaderModule,
    StoreModule.forRoot<IAppState>({logMessagesState: logMessagesStateReducer}, {metaReducers}),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    MatBadgeModule,
//    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
