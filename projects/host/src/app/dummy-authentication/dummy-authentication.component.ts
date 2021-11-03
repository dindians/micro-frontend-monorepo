import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {loggedIn, loggedOut} from "../auth/auth.actions";
import {user} from "../auth/auth.state.selectors";
import {IAuthState} from "../auth/i-auth-state";
import {IUser} from "../model/i-user";
import {IHOST_DUMMY_AUTHENTICATION_COMPONENT_INJECTION_TOKEN, IHostDummyAuthenticationComponent, LogLevel, LogMessage} from "@lib/log-messages";

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy-authentication.component.html',
  styleUrls: ['./dummy-authentication.component.scss']
})
export class DummyAuthenticationComponent {
  constructor(private readonly authStore: Store<IAuthState>,
              @Inject(IHOST_DUMMY_AUTHENTICATION_COMPONENT_INJECTION_TOKEN) private readonly logMessages: IHostDummyAuthenticationComponent) {}
  userNameMinimumLength = 5;
  userNameFormControl = new FormControl('', [Validators.required, Validators.minLength(this.userNameMinimumLength)]);
  loginFormGroup = new FormGroup({ userName: this.userNameFormControl })
  user$ = this.authStore.pipe(select(user));
  login(): void {
    const userName = this.userNameFormControl.value.toString();
    let userEmailAddress = `${userName}@somewhere.com`;
    this.authStore.dispatch(loggedIn({ user: { name: userName, email: userEmailAddress }}));
    this.logMessages.addLogMessage(DummyAuthenticationComponent.createInfoMessage(`user ${userName} logged in.`));
  };
  logout(): void {
    let loggedInUser: IUser | undefined;
    this.user$.subscribe(user => loggedInUser = user).unsubscribe();
    this.authStore.dispatch(loggedOut());
    this.logMessages.addLogMessage(DummyAuthenticationComponent.createInfoMessage(`user ${loggedInUser?.name} logged out.`));
  };

  private static createInfoMessage(message: string): LogMessage {
    return new LogMessage(message, LogLevel.INFO, JSON.parse(JSON.stringify(new Date())), "DummyComponent");
  }
}
