var AutoFitText = require("nativescript-auto-fit-text").AutoFitText;
var autoFitText = new AutoFitText();

describe("greet function", function() {
    it("exists", function() {
        expect(autoFitText.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(autoFitText.greet()).toEqual("Hello, NS");
    });
});