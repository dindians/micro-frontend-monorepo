import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {DummyLoginComponent} from './dummy-login.component';
import {DummyLoginRoutingModule} from "./dummy-login-routing.module";
import {authStateFeatureName, IAuthState} from "../auth/i-auth-state";
import {authStateReducer} from "../auth/auth.state.reducer";
import {LogMessagesStoreProviderModule} from "@lib/log-messages";

@NgModule({
  declarations: [DummyLoginComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    DummyLoginRoutingModule,
    StoreModule.forFeature<IAuthState>(authStateFeatureName, authStateReducer),
    LogMessagesStoreProviderModule
  ]
})
export class DummyLoginModule {}
