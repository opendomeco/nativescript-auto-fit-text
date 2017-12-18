import { NgModule, NO_ERRORS_SCHEMA, ModuleWithProviders } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';


@NgModule({
    declarations: [],
    imports: [],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AutoFitTextModule {

    static forRoot(): ModuleWithProviders {
        registerElement('AutoFitText', () => require('../').AutoFitText);
        return {
            ngModule: AutoFitTextModule,
            providers: [
            ]
        };
    }
}