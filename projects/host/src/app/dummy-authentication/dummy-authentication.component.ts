import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {loggedIn, loggedOut} from "../auth/auth.actions";
import {userContext} from "../auth/auth.state.selectors";
import {IAuthState} from "../auth/i-auth-state";
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
  userContext$ = userContext(this.authStore);

  login(): void {
    const userName = this.userNameFormControl.value.toString();
    let userEmailAddress = `${userName}@somewhere.com`;
    this.authStore.dispatch(loggedIn({ user: { name: userName, email: userEmailAddress }}));
    this.logMessages.addLogMessage(DummyAuthenticationComponent.createInfoMessage(`user ${userName} logged in.`));
  };

  logout(): void {
    // when the user is logged out, the username will be undefined. Remember the username before logging out.
    let userName: string | undefined;
    this.userContext$.subscribe(userContext => userName = userContext.user?.name).unsubscribe();
    this.authStore.dispatch(loggedOut());
    this.logMessages.addLogMessage(DummyAuthenticationComponent.createInfoMessage(`user ${userName} logged out.`));
  };

  private static createInfoMessage(message: string): LogMessage {
    return new LogMessage(message, LogLevel.INFO, JSON.parse(JSON.stringify(new Date())), "DummyComponent");
  }
}
