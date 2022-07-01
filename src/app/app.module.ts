import {RouterModule, Routes} from "@angular/router";
import {UserStringComponent} from "./components/userstring.component";
import {ReplacementComponent} from "./components/replacement.component";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from "./app.component";

const appRoutes: Routes = [
    { path: '', component: UserStringComponent},
    { path: 'replacements', component: ReplacementComponent},
    { path: '**', redirectTo: '/'}
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, UserStringComponent, ReplacementComponent],
    bootstrap: [AppComponent]
})

export class AppModule {}
