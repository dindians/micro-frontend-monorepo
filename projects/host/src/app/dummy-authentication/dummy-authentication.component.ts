import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {loggedIn, loggedOut} from "../auth/auth.actions";
import {userContext} from "../auth/auth.state.selectors";
import {IAuthState} from "../auth/i-auth-state";
import {ILOG_MESSAGE_SERVICE_FOR_HOST_DUMMY_AUTHENTICATION_COMPONENT_INJECTION_TOKEN, ILogMessageServiceForHostDummyAuthenticationComponent} from "@lib/log-messages";

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy-authentication.component.html',
  styleUrls: ['./dummy-authentication.component.scss']
})
export class DummyAuthenticationComponent {
  constructor(private readonly authStore: Store<IAuthState>,
              @Inject(ILOG_MESSAGE_SERVICE_FOR_HOST_DUMMY_AUTHENTICATION_COMPONENT_INJECTION_TOKEN) private readonly logMessageService: ILogMessageServiceForHostDummyAuthenticationComponent) {}
  private messagePrefix = '[host dummy-authentication-component] ';
  private messageSource = 'DummyAuthenticationComponent';
  userNameMinimumLength = 5;
  userNameFormControl = new FormControl('', [Validators.required, Validators.minLength(this.userNameMinimumLength)]);
  loginFormGroup = new FormGroup({ userName: this.userNameFormControl })
  userContext$ = userContext(this.authStore);

  login(): void {
    /*
    todo do NOT dispatch loggedIn and loggedOut actions directly from this component, but define a login service for this.
    here are the login/out feature use cases/user stories
    * login scenario/workflow:

    1. if user is NOT logged in, enable login button
    2. login button click event triggers login action
    3. auth effect listens to login action and triggers login service to execute login function, and when login function returns triggers logging-in action
    4. login service enables the user to login (how is this done?)
    5. upon successful login, the login service triggers the logged-in action

    * logout scenario/workflow
    ...likewise...
     */
    const userName = this.userNameFormControl.value.toString();
    let userEmailAddress = `${userName}@somewhere.com`;
    this.authStore.dispatch(loggedIn({ user: { name: userName, email: userEmailAddress }}));
    this.logMessageService.info(this.messagePrefix + `user ${userName} logged in.`, this.messageSource);
  };

  logout(): void {
    // when the user is logged out, the username will be undefined. Remember the username before logging out.
    let userName: string | undefined;
    this.userContext$.subscribe(userContext => userName = userContext.user?.name).unsubscribe();
    this.authStore.dispatch(loggedOut());
    this.logMessageService.info(this.messagePrefix + `user ${userName} logged out.`, this.messageSource);
  };
}
