import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {loggedIn, loggedOut} from "../auth/auth.actions";
import {user} from "../auth/auth.state.selectors";
import {IAuthState} from "../auth/i-auth-state";
import {IUser} from "../model/i-user";
import {IHOST_DUMMY_LOGIN_COMPONENT_INJECTION_TOKEN, IHostDummyLoginComponent, LogLevel, LogMessage} from "@lib/log-messages";

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy-login.component.html',
  styleUrls: ['./dummy-login.component.scss']
})
export class DummyLoginComponent {
  constructor(private readonly authStore: Store<IAuthState>,
              @Inject(IHOST_DUMMY_LOGIN_COMPONENT_INJECTION_TOKEN) private readonly logMessages: IHostDummyLoginComponent) {}
  userNameFormControl = new FormControl('', [Validators.required]);
  loginFormGroup = new FormGroup({ userName: this.userNameFormControl })
  user$ = this.authStore.pipe(select(user));
  login(): void {
    const userName = this.userNameFormControl.value.toString();
    let userEmailAddress = `${userName}@somewhere.com`;
    this.authStore.dispatch(loggedIn({ user: { name: userName, email: userEmailAddress }}));
    this.logMessages.addLogMessage(DummyLoginComponent.createInfoMessage(`user ${userName} logged in.`));
  };
  logout(): void {
    let loggedInUser: IUser | undefined;
    this.user$.subscribe(user => loggedInUser = user).unsubscribe();
    this.authStore.dispatch(loggedOut());
    this.logMessages.addLogMessage(DummyLoginComponent.createInfoMessage(`user ${loggedInUser?.name} logged out.`));
  };

  private static createInfoMessage(message: string): LogMessage {
    return new LogMessage(message, LogLevel.INFO, JSON.parse(JSON.stringify(new Date())), "DummyComponent");
  }
}
