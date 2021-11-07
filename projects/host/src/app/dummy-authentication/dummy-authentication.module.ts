import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {DummyAuthenticationComponent} from './dummy-authentication.component';
import {DummyAuthenticationRoutingModule} from "./dummy-authentication-routing.module";
import {authStateName, IAuthState} from "../auth/i-auth-state";
import {authStateReducer} from "../auth/auth.state.reducer";
import {LogMessageServiceProviderModule} from "@lib/log-messages";

@NgModule({
  declarations: [DummyAuthenticationComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    DummyAuthenticationRoutingModule,
    StoreModule.forFeature<IAuthState>(authStateName(), authStateReducer),
    LogMessageServiceProviderModule
  ]
})
export class DummyAuthenticationModule {}
