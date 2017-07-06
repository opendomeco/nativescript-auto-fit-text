import { AutoFitTextBase } from './auto-fit-text.common';

export class AutoFitText extends AutoFitTextBase {

    constructor() {
        super();
        let label: UILabel = this.nativeView;
        label.font = label.font.fontWithSize(200);
        label.adjustsFontSizeToFitWidth = true;
        label.textAlignment = NSTextAlignment.Center;
    }

    initNativeView(): void {
        (<any>this.nativeView).owner = this;
        super.initNativeView();
    }

    disposeNativeView(): void {
        // Remove reference from native view to this instance.
        (<any>this.nativeView).owner = null;

        // If you want to recycle nativeView and have modified the nativeView 
        // without using Property or CssProperty (e.g. outside our property system - 'setNative' callbacks)
        // you have to reset it to its initial state here.
        super.disposeNativeView();
    }

}
