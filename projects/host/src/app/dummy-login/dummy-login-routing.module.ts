import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DummyLoginComponent} from "./dummy-login.component";

const DUMMY_ROUTES: Routes = [
  { path: '', component: DummyLoginComponent }
];
@NgModule({
  imports: [RouterModule.forChild(DUMMY_ROUTES)],
  exports: [RouterModule]
})
export class DummyLoginRoutingModule {}
