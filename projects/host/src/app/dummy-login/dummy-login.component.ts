import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {loggedIn, loggedOut} from "../auth/auth.actions";
import {user} from "../auth/auth.state.selectors";
import {IAuthState} from "../auth/i-auth-state";
import {IUser} from "../model/i-user";
import {addLogMessage, ILogMessagesState, LogLevel, LogMessage} from "@lib/log-messages";

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy-login.component.html',
  styleUrls: ['./dummy-login.component.scss']
})
export class DummyLoginComponent {
  constructor(private readonly authStore: Store<IAuthState>, private readonly logMessageStore: Store<ILogMessagesState>) {}
  userNameFormControl = new FormControl('', [Validators.required]);
  loginFormGroup = new FormGroup({ userName: this.userNameFormControl })
  user$ = this.authStore.pipe(select(user));
  login(): void {
    const userName = this.userNameFormControl.value.toString();
    let userEmailAddress = `${userName}@somewhere.com`;
    this.authStore.dispatch(loggedIn({ user: { name: userName, email: userEmailAddress }}));
    this.logMessageStore.dispatch(addLogMessage( { logMessage: DummyLoginComponent.createInfoMessage(`user ${userName} logged in.`) }));
  };
  logout(): void {
    let loggedInUser: IUser | undefined;
    this.user$.subscribe(user => loggedInUser = user).unsubscribe();
    this.authStore.dispatch(loggedOut());
    this.logMessageStore.dispatch(addLogMessage( { logMessage: DummyLoginComponent.createInfoMessage(`user ${loggedInUser?.name} logged out.`) }));
  };

  private static createInfoMessage(message: string): LogMessage {
    return new LogMessage(message, LogLevel.INFO, JSON.parse(JSON.stringify(new Date())), "DummyComponent");
  }
}
