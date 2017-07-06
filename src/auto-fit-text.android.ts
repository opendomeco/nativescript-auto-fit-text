import { AutoFitTextBase } from './auto-fit-text.common';
import * as utils from 'tns-core-modules/utils/utils';

declare var me: any;

export class AutoFitText extends AutoFitTextBase {

    public createNativeView(): Object {
        const textField: android.widget.TextView = super.createNativeView() as android.widget.TextView;
        textField.setMaxLines(1);
        textField.setSingleLine();
        textField.setMaxHeight(200);
        textField.setTextSize(200);
        textField.setMinHeight(40);
        textField.setTextAlignment(android.widget.TextView.TEXT_ALIGNMENT_CENTER);
        
        me.grantland.widget.AutofitHelper.create(textField);
        return textField;
    }

    initNativeView(): void {
        (<any>this.nativeView).owner = this;
        super.initNativeView();
    }

    disposeNativeView(): void {
        (<any>this.nativeView).owner = null;
        super.disposeNativeView();
    }
}
