import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { HttpModule }    from '@angular/http';

import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app.routing";

import {SearchComponent} from "./pages/search/search.component";
import {ProfileComponent} from "./pages/profile/profile.component";

import {SearchService} from "./services/search.service";
import {DataStoreService} from "./services/datastore.service";

//when creating a component, add it here
@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
    declarations: [AppComponent, SearchComponent, ProfileComponent],
    providers: [SearchService, DataStoreService],
    bootstrap: [AppComponent],
})

export class AppModule { }