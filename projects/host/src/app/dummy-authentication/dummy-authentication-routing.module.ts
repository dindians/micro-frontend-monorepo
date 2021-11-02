import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DummyAuthenticationComponent} from "./dummy-authentication.component";

const DUMMY_ROUTES: Routes = [
  { path: '', component: DummyAuthenticationComponent }
];
@NgModule({
  imports: [RouterModule.forChild(DUMMY_ROUTES)],
  exports: [RouterModule]
})
export class DummyAuthenticationRoutingModule {}
