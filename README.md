# javascript-interface-library #

various classification, validation and utility functions for JavaScript and TypeScript

From time to time, it's necessary to classify and/or validate the values of user inputs, data read from input streams (like files or network connections) or arguments passed as part of a function call. While TypeScript type annotations already eliminate the need for many of these tests, there still exist lots of interfaces to the outer (non-TypeScript) world where value checking remains important.

These situations are, what the `javascript-interface-library` is providing functions for.

**NPM users**: please consider the [Github README](https://github.com/rozek/javascript-interface-library/blob/main/README.md) for the latest description of this package (as updating the docs would otherwise always require a new NPM package version)

### Installation ###

`javascript-interface-library` may be used as an ESM, CommonJS or AMD module or from a global variable.

You may either install the package into your build environment using [NPM](https://docs.npmjs.com/) with the command

```
npm install javascript-interface-library
```

or load the plain script file directly

```
<script src="https://unpkg.com/javascript-interface-library"></script>
```

### Access ###

How to access the package depends on the type of module you prefer

* ESM: `import { ValueIsListSatisfying, ValueIsOrdinal } from 'javascript-interface-library'`
* CommonJS: `const JIL = require('javascript-interface-library')`
* AMD: `require(['javascript-interface-library'], (JIL) => {...})`

Alternatively, you may access the global Variable `JIL` directly.

### Usage as an ECMAscript Module ###

```
<script>
  console.log(ValueIsListSatisfying(
    [1,2,3,4], ValueIsOrdinal, 1,10
  ))
</script>
```

All module functions and values are exported individually, thus allowing your bundler to perform some "tree-shaking" in order to import actually used functions or values only.

### Usage as a CommonJS or AMD Module (or as a global Variable) ###

Let's assume that you already "required" or "imported" (or simply loaded) the module according to your local environment. In that case, you may use it as follows:

```
console.log(JIL.ValueIsListSatisfying(
  [1,2,3,4], JIL.ValueIsOrdinal, 1,10
))
```

### API Reference ###

As shown above, the individual functions and values may either be accessed directly (when used as an ESM) or by prefixing them with their namespace `JIL` (in all other cases). The following documentation lists all module contents without namespace prefix only.

#### Object Functions ####

The JavaScript `Object` class provides a few useful functions (or "static methods") for inspecting or converting a given object. Unfortunately, these functions are often used without prior checking whether the given target object actually inherits from the `Object` protoype or was built using `Object.create(null)` - and will fail whenever such a "vanilla" object is given.

`JIL` therefore contains the following functions which mimic their counterparts from the `Object` class, but succeed even if the given target object is "vanilla".

* `Object_hasOwnProperty (Value:Object, PropertyName:string):boolean` <br>
* `Object_isPrototypeOf (Value:Object, Candidate:any):boolean` <br>
* `Object_propertyIsEnumerable (Value:Object, PropertyName:string):boolean` <br>
* `Object_toString (Value:Object):string` <br>
* `Object_toLocaleString (Value:Object):string` <br>
* `Object_valueOf (Value:Object):any` <br>

#### Value Classification Functions ####

The following functions check whether a given argument satisfies a certain constraint (e.g., belongs to a certain category) and return either `true` (if the constrain is met) or false otherwise.

* `ValueExists (Value:any):boolean`<br>
* `ValueIsMissing (Value:any):boolean`<br>
* `ValueIsBoolean (Value:any):boolean`<br>
* `ValueIsNumber (Value:any):boolean`<br>
* `ValueIsFiniteNumber (Value:any):boolean`<br>
* `ValueIsNaN (Value:any):boolean`<br>
* `ValueIsNumberInRange (Value:any, minValue?:number, maxValue?:number, withMin:boolean = true, withMax:boolean = true):boolean`<br>
* `ValueIsInteger (Value:any):boolean`<br>
* `ValueIsIntegerInRange (Value:any, minValue?:number, maxValue?:number):boolean`<br>
* `ValueIsOrdinal (Value:any):boolean`<br>
* `ValueIsCardinal (Value:any):boolean`<br>
* `ValueIsString (Value:any):boolean`<br>
* `ValueIsNonEmptyString (Value:any):boolean`<br>
* `ValueIsStringMatching (Value:any, Pattern:RegExp):boolean`<br>
* `ValueIsText (Value:any):boolean`<br>
* `ValueIsTextline (Value:any):boolean`<br>
* `ValueIsFunction (Value:any):boolean`<br>
* `ValueIsAnonymousFunction (Value:any):boolean`<br>
* `ValueIsNamedFunction (Value:any):boolean`<br>
* `ValueIsNativeFunction (Value:any):boolean`<br>
* `ValueIsScriptedFunction (Value:any):boolean`<br>
* `ValueIsObject (Value:any):boolean`<br>
* `ValueIsPlainObject (Value:any):boolean`<br>
* `ValueIsVanillaObject (Value:any):boolean`<br>
* `ValueIsArray (Value:any):boolean`<br>
* `ValueIsList (Value:any, minLength?:number, maxLength?:number):boolean`<br>
* `ValueIsListSatisfying (Value:any, Validator:Function, minLength?:number, maxLength?:number):boolean`<br>
* `ValueIsInstanceOf (Value:any, constructor:Function):boolean`<br>
* `ValueInheritsFrom (Value:any, prototype:Object):boolean`<br>
* `ValueIsDate (Value:any):boolean`<br>
* `ValueIsError (Value:any):boolean`<br>
* `ValueIsPromise (Value:any):boolean`<br>
* `ValueIsRegExp (Value:any):boolean`<br>
* `ValueIsOneOf (Value:any, ValueList:any[]):boolean`<br>
* `ValueIsColor (Value:any):boolean`<br>
* `ValueIsEMailAddress (Value:any):boolean`<br>
* `ValueIsURL (Value:any):boolean`<br>

#### Argument Validation Functions ####

The following functions check whether a given argument satisfies a certain constraint (e.g., belongs to a certain category) and either return the given argument (sometimes after some normalization), if the constrain is met, or throw an error otherwise.

Unless stated otherwise, these functions exist in four different "flavours", as indicated by their name prefixes:

* `allowXXX`<br>validates the given argument and returns it, if it is either missing (i.e., equals `null` or `undefined`) or meets the condition defined for `XXX` - or throws an exception otherwise
* `allwedXXX`<br>synonym for `allowXXX`, looks better when used as an expression
* `expectXXX`<br>validates the given argument and returns it, if it exists (i.e., differs both from `null` and `undefined`) and meets the condition defined for `XXX` - or throws an exception otherwise  
* `expectedXXX`<br>synonym for `expectXXX`, looks better when used as an expression

For the sake of clarity, however, only the first "flavour" (namely `allowXXX`) is shown in the list below (provided that this flavour actually exists).

* `expectValue (Description:string, Argument:any):any`<br>
* `allowBoolean (Description:string, Argument:any):boolean|null|undefined`<br>
* `allowNumber (Description:string, Argument:any):number|null|undefined`<br>
* `allowFiniteNumber (Description:string, Argument:any):number|null|undefined`<br>
* `allowNaN (Description:string, Argument:any):number|null|undefined`<br>
* `allowNumberInRange (Description:string, Argument:any, minValue?:number, maxValue?:number, withMin?:boolean, withMax?:boolean):number|null|undefined`<br>
* `allowInteger (Description:string, Argument:any):number|null|undefined`<br>
* `allowIntegerInRange (Description:string, Argument:any, minValue?:number, maxValue?:number):number|null|undefined`<br>
* `allowOrdinal (Description:string, Argument:any):number|null|undefined`<br>
* `allowCardinal (Description:string, Argument:any):number|null|undefined`<br>
* `allowString (Description:string, Argument:any):string|null|undefined`<br>
* `allowNonEmptyString (Description:string, Argument:any):string|null|undefined`<br>
* `allowStringMatching (Description:string, Argument:any, pattern:RegExp):string|null|undefined`<br>
* `allowText (Description:string, Argument:any):string|null|undefined`<br>
* `allowTextline (Description:string, Argument:any):string|null|undefined`<br>
* `allowFunction (Description:string, Argument:any):Function|null|undefined`<br>
* `allowAnonymousFunction (Description:string, Argument:any):Function|null|undefined`<br>
* `allowNamedFunction (Description:string, Argument:any):Function|null|undefined`<br>
* `allowNativeFunction (Description:string, Argument:any):Function|null|undefined`<br>
* `allowScriptedFunction (Description:string, Argument:any):Function|null|undefined`<br>
* `allowObject (Description:string, Argument:any):any|null|undefined`<br>
* `allowPlainObject (Description:string, Argument:any):any|null|undefined`<br>
* `allowVanillaObject (Description:string, Argument:any):any|null|undefined`<br>
* `allowArray (Description:string, Argument:any):any[]|null|undefined`<br>
* `allowList (Description:string, Argument:any, Expectation?:string,minLength?:number, maxLength?:number):any[]|null|undefined`<br>
* `allowListSatisfying (Description:string, Argument:any, Validator:(Value:any) => boolean,Expectation?:string, minLength?:number, maxLength?:number):any[]|null|undefined`<br>
* `allowInstanceOf (Description:string, Argument:any, constructor:Function, Expectation:string):any|null|undefined`<br>
* `allowValueInheritingFrom (Description:string, Argument:any, prototype:any, Expectation:string):any|null|undefined`<br>
* `allowDate (Description:string, Argument:any):Date|null|undefined`<br>
* `allowError (Description:string, Argument:any):Error|null|undefined`<br>
* `allowPromise (Description:string, Argument:any):any|null|undefined`<br>
* `allowRegExp (Description:string, Argument:any):RegExp|null|undefined`<br>
* `allowOneOf (Description:string, Argument:any, ValueList:any[]):any|null|undefined`<br>
* `allowColor (Description:string, Argument:any):string|null|undefined`<br>
* `allowEMailAddress (Description:string, Argument:any):string|null|undefined`<br>
* `allowURL (Description:string, Argument:any):string|null|undefined`<br>

#### Utility Functions ####

* `throwError (Message:string):never`<br>
* `ObjectMergedWith (TargetObject:object, ...otherObjectList:object[]):object`<br>
* `escaped (Text:string):string`<br>
* `unescaped (Text:string):string`<br>
* `quotable (Text:string, Quote:'"' | "'" = '"'):string`<br>
* `quoted (Text:string, Quote:'"' | "'" = '"'):string`<br>
* `HTMLsafe (Argument:string, EOLReplacement?:string):string`<br>
* `MarkDownSafe (Argument:string, EOLReplacement?:string):string`<br>
* `ValuesDiffer (thisValue:any, otherValue:any):boolean`<br>
* `ValuesAreEqual (thisValue:any, otherValue:any):boolean`<br>
* `ObjectIsEmpty (Candidate:any):boolean`<br>
* `StringIsEmpty (Candidate:string):boolean`<br>
* `StringIsNotEmpty (Candidate:string):boolean`<br>
* `ValidatorForClassifier (Classifier:(Value:any) => boolean, NilIsAcceptable:boolean,Expectation:string):Function`<br>
* `validatedArgument (Description:string, Argument:any, ValueIsValid:(Value:any) => boolean,NilIsAcceptable:boolean, Expectation:string):any|null|undefined`<br>
* `FunctionWithName (originalFunction:Function, desiredName:string|String):Function`

#### Color Utilities ####

* `ColorSet`<br>
* `HexColor (Color:string):string`<br>
* `RGBAColor (Color:string):string`<br>
* `CSSColor (Color:string):string`<br>
* `shortCSSColor (Color:string):string`<br>

