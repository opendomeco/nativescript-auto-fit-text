# AutoFitText

This plugin is based on the Nativescript Label implementation but with changes to adjust the font size according of it's width

![Example Image](/assets/showoff.gif?raw=true)

## Prerequisites / Requirements

This plugin is only tested with **{N} > 3.0.0**

## Installation

Describe your plugin installation steps. Ideally it would be something like:

```javascript
tns plugin add nativescript-auto-fit-text
```

## Usage 

### Angular	
```typescript
import { AutoFitTextModule } from "nativescript-auto-fit-text/angular"

@NgModule({
	...
    imports: [
        AutoFitTextModule
    ],
    ...
})
export class AppModule { }

```

### Vanilla Nativescript

```html
<Page xmlns="http://schemas.nativescript.org/tns.xsd" loaded="pageLoaded" class="page" xmlns:ui="nativescript-auto-fit-text">
  <StackLayout class="p-20">
    <ui:AutoFitText text="Testinggggggggggggggggg" textWrap="false"></ui:AutoFitText>
  </StackLayout>
</Page>
```

## Credits

[@grantland - android-autofittextview](https://github.com/grantland/android-autofittextview)
    
## License

Apache License Version 2.0, January 2004


