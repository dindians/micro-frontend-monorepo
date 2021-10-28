import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";

export const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'log-message-tester', loadChildren: () => import('./log-message-tester/log-message-tester.module').then(m => m.LogMessageTesterModule) },
  { path: 'log-messages', loadChildren: () => import('./log-messages/log-messages.module').then(m => m.LogMessagesModule) },
];
