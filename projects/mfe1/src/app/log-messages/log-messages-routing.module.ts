import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LogMessagesComponent} from "./log-messages.component";

const LOG_MESSAGES_ROUTES: Routes = [
  { path: '', component: LogMessagesComponent }
];
@NgModule({
  imports: [RouterModule.forChild(LOG_MESSAGES_ROUTES)],
  exports: [RouterModule]
})
export class LogMessagesRoutingModule {}
