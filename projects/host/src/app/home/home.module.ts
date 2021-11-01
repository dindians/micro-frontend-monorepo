import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from "./home-routing.module";
import {LogMessagesStoreProviderModule} from "@lib/log-messages";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    HomeRoutingModule,
    LogMessagesStoreProviderModule
  ]
})
export class HomeModule {}
