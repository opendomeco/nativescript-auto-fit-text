import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';
registerElement('AutoFitText', () => require('../').AutoFitText);
@NgModule({
    declarations: [],
    imports: [],
    providers: [],
    schemas: [ NO_ERRORS_SCHEMA ]
})
export class AutoFitTextModule {}