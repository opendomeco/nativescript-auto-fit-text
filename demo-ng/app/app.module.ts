import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppComponent } from "./app.component";
import { AutoFitTextModule } from "nativescript-auto-fit-text/angular"

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AutoFitTextModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
