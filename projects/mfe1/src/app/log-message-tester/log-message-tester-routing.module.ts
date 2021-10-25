import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LogMessageTesterComponent} from "./log-message-tester.component";

const routes: Routes = [
  { path: '', component: LogMessageTesterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class LogMessageTesterRoutingModule {}
