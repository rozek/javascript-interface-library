export declare const acceptNil = true;

export declare const allowAnonymousFunction: Function;

/**** allow[ed]Array ****/
export declare function allowArray(Description: string, Argument: any): any[] | null | undefined;

export declare const allowBoolean: Function;

export declare const allowCardinal: Function;

export declare const allowColor: Function;

export declare const allowDate: Function;

export declare const allowE164PhoneNumber: Function;

export declare const allowedAnonymousFunction: Function;

export declare const allowedArray: typeof allowArray;

export declare const allowedBoolean: Function;

export declare const allowedCardinal: Function;

export declare const allowedColor: Function;

export declare const allowedDate: Function;

export declare const allowedE164PhoneNumber: Function;

export declare const allowedEMailAddress: Function;

export declare const allowedError: Function;

export declare const allowedFiniteNumber: Function;

export declare const allowedFunction: Function;

export declare const allowedInstanceOf: typeof allowInstanceOf;

export declare const allowedInteger: Function;

export declare const allowedIntegerInRange: typeof allowIntegerInRange;

export declare const allowedList: typeof allowList;

export declare const allowedListSatisfying: typeof allowListSatisfying;

export declare const allowedNamedFunction: Function;

export declare const allowedNaN: Function;

export declare const allowedNativeFunction: Function;

export declare const allowedNonEmptyString: Function;

export declare const allowedNumber: Function;

export declare const allowedNumberInRange: typeof allowNumberInRange;

export declare const allowedObject: Function;

export declare const allowedOneOf: typeof allowOneOf;

export declare const allowedOrdinal: Function;

export declare const allowedPhoneNumber: Function;

export declare const allowedPlainObject: Function;

export declare const allowedPromise: Function;

export declare const allowedRegExp: Function;

export declare const allowedScriptedFunction: Function;

export declare const allowedString: Function;

export declare const allowedStringMatching: typeof allowStringMatching;

export declare const allowedText: Function;

export declare const allowedTextline: Function;

export declare const allowedURL: Function;

export declare const allowedValueInheritingFrom: typeof allowValueInheritingFrom;

export declare const allowedVanillaObject: Function;

export declare const allowEMailAddress: Function;

export declare const allowError: Function;

export declare const allowFiniteNumber: Function;

export declare const allowFunction: Function;

/**** allow[ed]InstanceOf ****/
export declare function allowInstanceOf(Description: string, Argument: any, constructor: Function, Expectation: string): any | null | undefined;

export declare const allowInteger: Function;

/**** allow[ed]IntegerInRange ****/
export declare function allowIntegerInRange(Description: string, Argument: any, minValue?: number, maxValue?: number): number | null | undefined;

/**** allow[ed]List ****/
export declare function allowList(Description: string, Argument: any, Expectation?: string, minLength?: number, maxLength?: number): any[] | null | undefined;

/**** allow[ed]ListSatisfying ****/
export declare function allowListSatisfying(Description: string, Argument: any, Validator: (Value: any) => boolean, Expectation?: string, minLength?: number, maxLength?: number): any[] | null | undefined;

export declare const allowNamedFunction: Function;

export declare const allowNaN: Function;

export declare const allowNativeFunction: Function;

export declare const allowNonEmptyString: Function;

export declare const allowNumber: Function;

/**** allow[ed]NumberInRange ****/
export declare function allowNumberInRange(Description: string, Argument: any, minValue?: number, maxValue?: number, withMin?: boolean, withMax?: boolean): number | null | undefined;

export declare const allowObject: Function;

/**** allow[ed]OneOf ****/
export declare function allowOneOf(Description: string, Argument: any, ValueList: any[]): any | null | undefined;

export declare const allowOrdinal: Function;

export declare const allowPhoneNumber: Function;

export declare const allowPlainObject: Function;

export declare const allowPromise: Function;

export declare const allowRegExp: Function;

export declare const allowScriptedFunction: Function;

export declare const allowString: Function;

/**** allow[ed]StringMatching ****/
export declare function allowStringMatching(Description: string, Argument: any, Pattern: RegExp): string | null | undefined;

export declare const allowText: Function;

export declare const allowTextline: Function;

export declare const allowURL: Function;

/**** allow[ed]ValueInheritingFrom ****/
export declare function allowValueInheritingFrom(Description: string, Argument: any, prototype: any, Expectation: string): any | null | undefined;

export declare const allowVanillaObject: Function;

export declare const ColorSet: {
    transparent: string;
    aliceblue: string;
    lightpink: string;
    antiquewhite: string;
    lightsalmon: string;
    aqua: string;
    lightseagreen: string;
    aquamarine: string;
    lightskyblue: string;
    azure: string;
    lightslategray: string;
    beige: string;
    lightslategrey: string;
    bisque: string;
    lightsteelblue: string;
    black: string;
    lightyellow: string;
    blanchedalmond: string;
    lime: string;
    blue: string;
    limegreen: string;
    blueviolet: string;
    linen: string;
    brown: string;
    magenta: string;
    burlywood: string;
    maroon: string;
    cadetblue: string;
    mediumaquamarine: string;
    chartreuse: string;
    mediumblue: string;
    chocolate: string;
    mediumorchid: string;
    coral: string;
    mediumpurple: string;
    cornflowerblue: string;
    mediumseagreen: string;
    cornsilk: string;
    mediumslateblue: string;
    crimson: string;
    mediumspringgreen: string;
    cyan: string;
    mediumturquoise: string;
    darkblue: string;
    mediumvioletred: string;
    darkcyan: string;
    midnightblue: string;
    darkgoldenrod: string;
    mintcream: string;
    darkgray: string;
    mistyrose: string;
    darkgreen: string;
    moccasin: string;
    darkgrey: string;
    navajowhite: string;
    darkkhaki: string;
    navy: string;
    darkmagenta: string;
    oldlace: string;
    darkolivegreen: string;
    olive: string;
    darkorange: string;
    olivedrab: string;
    darkorchid: string;
    orange: string;
    darkred: string;
    orangered: string;
    darksalmon: string;
    orchid: string;
    darkseagreen: string;
    palegoldenrod: string;
    darkslateblue: string;
    palegreen: string;
    darkslategray: string;
    paleturquoise: string;
    darkslategrey: string;
    palevioletred: string;
    darkturquoise: string;
    papayawhip: string;
    darkviolet: string;
    peachpuff: string;
    deeppink: string;
    peru: string;
    deepskyblue: string;
    pink: string;
    dimgray: string;
    plum: string;
    dimgrey: string;
    powderblue: string;
    dodgerblue: string;
    purple: string;
    firebrick: string;
    red: string;
    floralwhite: string;
    rosybrown: string;
    forestgreen: string;
    royalblue: string;
    fuchsia: string;
    saddlebrown: string;
    gainsboro: string;
    salmon: string;
    ghostwhite: string;
    sandybrown: string;
    gold: string;
    seagreen: string;
    goldenrod: string;
    seashell: string;
    gray: string;
    sienna: string;
    green: string;
    silver: string;
    greenyellow: string;
    skyblue: string;
    grey: string;
    slateblue: string;
    honeydew: string;
    slategray: string;
    hotpink: string;
    slategrey: string;
    indianred: string;
    snow: string;
    indigo: string;
    springgreen: string;
    ivory: string;
    steelblue: string;
    khaki: string;
    tan: string;
    lavender: string;
    teal: string;
    lavenderblush: string;
    thistle: string;
    lawngreen: string;
    tomato: string;
    lemonchiffon: string;
    turquoise: string;
    lightblue: string;
    violet: string;
    lightcoral: string;
    wheat: string;
    lightcyan: string;
    white: string;
    lightgoldenrodyellow: string;
    whitesmoke: string;
    lightgray: string;
    yellow: string;
    lightgreen: string;
    yellowgreen: string;
    lightgrey: string;
};

/**** constrained ****/
export declare function constrained(Value: number, Minimum?: number, Maximum?: number): number;

/**** escaped - escapes all control characters in a given string ****/
export declare function escaped(Text: string): string;

export declare const expectAnonymousFunction: Function;

/**** expect[ed]Array ****/
export declare function expectArray(Description: string, Argument: any): any[];

export declare const expectBoolean: Function;

export declare const expectCardinal: Function;

export declare const expectColor: Function;

export declare const expectDate: Function;

export declare const expectE164PhoneNumber: Function;

export declare const expectedAnonymousFunction: Function;

export declare const expectedArray: typeof expectArray;

export declare const expectedBoolean: Function;

export declare const expectedCardinal: Function;

export declare const expectedColor: Function;

export declare const expectedDate: Function;

export declare const expectedE164PhoneNumber: Function;

export declare const expectedEMailAddress: Function;

export declare const expectedError: Function;

export declare const expectedFiniteNumber: Function;

export declare const expectedFunction: Function;

export declare const expectedInstanceOf: typeof expectInstanceOf;

export declare const expectedInteger: Function;

export declare const expectedIntegerInRange: typeof expectIntegerInRange;

export declare const expectedList: typeof expectList;

export declare const expectedListSatisfying: typeof expectListSatisfying;

export declare const expectedNamedFunction: Function;

export declare const expectedNaN: Function;

export declare const expectedNativeFunction: Function;

export declare const expectedNonEmptyString: Function;

export declare const expectedNumber: Function;

export declare const expectedNumberInRange: typeof expectNumberInRange;

export declare const expectedObject: Function;

export declare const expectedOneOf: typeof expectOneOf;

export declare const expectedOrdinal: Function;

export declare const expectedPhoneNumber: Function;

export declare const expectedPlainObject: Function;

export declare const expectedPromise: Function;

export declare const expectedRegExp: Function;

export declare const expectedScriptedFunction: Function;

export declare const expectedString: Function;

export declare const expectedStringMatching: typeof expectStringMatching;

export declare const expectedText: Function;

export declare const expectedTextline: Function;

export declare const expectedURL: Function;

export declare const expectedValue: typeof expectValue;

export declare const expectedValueInheritingFrom: typeof expectValueInheritingFrom;

export declare const expectedVanillaObject: Function;

export declare const expectEMailAddress: Function;

export declare const expectError: Function;

export declare const expectFiniteNumber: Function;

export declare const expectFunction: Function;

/**** expect[ed]InstanceOf ****/
export declare function expectInstanceOf(Description: string, Argument: any, constructor: Function, Expectation: string): any;

export declare const expectInteger: Function;

/**** expect[ed]IntegerInRange ****/
export declare function expectIntegerInRange(Description: string, Argument: any, minValue?: number, maxValue?: number): number;

/**** expect[ed]List ****/
export declare function expectList(Description: string, Argument: any, Expectation?: string, minLength?: number, maxLength?: number): any[];

/**** expect[ed]ListSatisfying ****/
export declare function expectListSatisfying(Description: string, Argument: any, Validator: (Value: any) => boolean, Expectation?: string, minLength?: number, maxLength?: number): any[];

export declare const expectNamedFunction: Function;

export declare const expectNaN: Function;

export declare const expectNativeFunction: Function;

export declare const expectNonEmptyString: Function;

export declare const expectNumber: Function;

/**** expect[ed]NumberInRange ****/
export declare function expectNumberInRange(Description: string, Argument: any, minValue?: number, maxValue?: number, withMin?: boolean, withMax?: boolean): number;

export declare const expectObject: Function;

/**** expect[ed]OneOf ****/
export declare function expectOneOf(Description: string, Argument: any, ValueList: any[]): any;

export declare const expectOrdinal: Function;

export declare const expectPhoneNumber: Function;

export declare const expectPlainObject: Function;

export declare const expectPromise: Function;

export declare const expectRegExp: Function;

export declare const expectScriptedFunction: Function;

export declare const expectString: Function;

/**** expect[ed]StringMatching ****/
export declare function expectStringMatching(Description: string, Argument: any, Pattern: RegExp): string;

export declare const expectText: Function;

export declare const expectTextline: Function;

export declare const expectURL: Function;

/**** expect[ed]Value ****/
export declare function expectValue(Description: string, Argument: any): any;

/**** expect[ed]ValueInheritingFrom ****/
export declare function expectValueInheritingFrom(Description: string, Argument: any, prototype: any, Expectation: string): any;

export declare const expectVanillaObject: Function;

/**** FunctionWithName (works with older JS engines as well) ****/
export declare function FunctionWithName(originalFunction: Function, desiredName: string | String): Function;

/**** get a reference to the "global" object ****/
export declare const global: any;

/**** HexColor - converts a given color to #rrggbbaa ****/
export declare function HexColor(Color: string): string;

/**** HTMLsafe ****/
export declare function HTMLsafe(Argument: string, EOLReplacement?: string): string;

/**** MarkDownSafe ****/
export declare function MarkDownSafe(Argument: string, EOLReplacement?: string): string;

/**** Object_hasOwnProperty ****/
export declare function Object_hasOwnProperty(Value: Object, PropertyName: string): boolean;

/**** Object_isPrototypeOf ****/
export declare function Object_isPrototypeOf(Value: Object, Candidate: any): boolean;

/**** Object_propertyIsEnumerable ****/
export declare function Object_propertyIsEnumerable(Value: Object, PropertyName: string): boolean;

/**** Object_toLocaleString ****/
export declare function Object_toLocaleString(Value: Object): string;

/**** Object_toString ****/
export declare function Object_toString(Value: Object): string;

/**** Object_valueOf ****/
export declare function Object_valueOf(Value: Object): any;

/**** ObjectIsEmpty ****/
export declare function ObjectIsEmpty(Candidate: any): boolean;

/**** ObjectIsNotEmpty ****/
export declare function ObjectIsNotEmpty(Candidate: any): boolean;

/**** ObjectMergedWith ****/
export declare function ObjectMergedWith(TargetObject: object, ...otherObjectList: object[]): object;

/**** quotable - makes a given string ready to be put in single/double quotes ****/
export declare function quotable(Text: string, Quote?: '"' | "'"): string;

/**** quoted ****/
export declare function quoted(Text: string, Quote?: '"' | "'"): string;

export declare const rejectNil = false;

/**** RGBAColor - converts a given color to RGBA(r,g,b,a) ****/
export declare function RGBAColor(Color: string): string;

/**** shortHexColor - converts a given color into #RRGGBB ****/
export declare function shortHexColor(Color: string): string;

/**** StringIsEmpty ****/
export declare function StringIsEmpty(Candidate: string): boolean;

/**** StringIsNotEmpty ****/
export declare function StringIsNotEmpty(Candidate: string): boolean;

/**** throwError - simplifies construction of named errors ****/
export declare function throwError(Message: string): never;

/**** unescaped - evaluates all escape sequences in a given string ****/
export declare function unescaped(Text: string): string;

/**** validatedArgument ****/
export declare function validatedArgument(Description: string, Argument: any, ValueIsValid: (Value: any) => boolean, NilIsAcceptable: boolean, Expectation: string): any | null | undefined;

/**** ValidatorForClassifier ****/
export declare function ValidatorForClassifier(Classifier: (Value: any) => boolean, NilIsAcceptable: boolean, Expectation: string): Function;

/**** ValueExists ****/
export declare function ValueExists(Value: any): boolean;

/**** ValueInheritsFrom ****/
export declare function ValueInheritsFrom(Value: any, Prototype: Object): boolean;

/**** ValueIsAnonymousFunction ****/
export declare function ValueIsAnonymousFunction(Value: any): boolean;

/**** ValueIsArray ****/
export declare const ValueIsArray: (arg: any) => arg is any[];

/**** ValueIsBoolean ****/
export declare function ValueIsBoolean(Value: any): boolean;

/**** ValueIsCardinal ****/
export declare function ValueIsCardinal(Value: any): boolean;

/**** ValueIsColor ****/
export declare function ValueIsColor(Value: any): boolean;

/**** ValueIsDate ****/
export declare function ValueIsDate(Value: any): boolean;

export declare function ValueIsE164PhoneNumber(Value: any): boolean;

export declare function ValueIsEMailAddress(Value: any): boolean;

export declare function ValueIsEmptyString(Value: any): boolean;

/**** ValueIsError ****/
export declare function ValueIsError(Value: any): boolean;

/**** ValueIsFiniteNumber (pure "isFinite" breaks on objects) ****/
export declare function ValueIsFiniteNumber(Value: any): boolean;

/**** ValueIsFunction ****/
export declare function ValueIsFunction(Value: any): boolean;

/**** ValueIsInstanceOf ****/
export declare function ValueIsInstanceOf(Value: any, Constructor: Function): boolean;

/**** ValueIsInteger ****/
export declare function ValueIsInteger(Value: any): boolean;

/**** ValueIsIntegerInRange ****/
export declare function ValueIsIntegerInRange(Value: any, minValue?: number, maxValue?: number): boolean;

/**** ValueIsList ("dense" array) ****/
export declare function ValueIsList(Value: any, minLength?: number, maxLength?: number): boolean;

/**** ValueIsListSatisfying ****/
export declare function ValueIsListSatisfying(Value: any, Validator: Function, minLength?: number, maxLength?: number): boolean;

/**** ValueIsMissing ****/
export declare function ValueIsMissing(Value: any): boolean;

/**** ValueIsNamedFunction ****/
export declare function ValueIsNamedFunction(Value: any): boolean;

/**** ValueIsNaN (numeric, but NaN - this differs from pure "isNaN") ****/
export declare function ValueIsNaN(Value: any): boolean;

/**** ValueIsNativeFunction ****/
export declare function ValueIsNativeFunction(Value: any): boolean;

export declare function ValueIsNonEmptyString(Value: any): boolean;

/**** ValueIsNumber ****/
export declare function ValueIsNumber(Value: any): boolean;

/**** ValueIsNumberInRange ****/
export declare function ValueIsNumberInRange(Value: any, minValue?: number, maxValue?: number, withMin?: boolean, withMax?: boolean): boolean;

/**** ValueIsObject ****/
export declare function ValueIsObject(Value: any): boolean;

/**** ValueIsOneOf ****/
export declare function ValueIsOneOf(Value: any, ValueList: any[]): boolean;

/**** ValueIsOrdinal ****/
export declare function ValueIsOrdinal(Value: any): boolean;

export declare function ValueIsPhoneNumber(Value: any): boolean;

/**** ValueIsPlainObject ****/
export declare function ValueIsPlainObject(Value: any): boolean;

/**** ValueIsPromise ****/
export declare function ValueIsPromise(Value: any): boolean;

/**** ValueIsRegExp ****/
export declare function ValueIsRegExp(Value: any): boolean;

/**** ValueIsScriptedFunction ****/
export declare function ValueIsScriptedFunction(Value: any): boolean;

/**** ValueIsString ****/
export declare function ValueIsString(Value: any): boolean;

/**** ValueIsStringMatching ****/
export declare function ValueIsStringMatching(Value: any, Pattern: RegExp): boolean;

export declare function ValueIsText(Value: any): boolean;

export declare function ValueIsTextline(Value: any): boolean;

export declare function ValueIsURL(Value: any): boolean;

/**** ValueIsVanillaObject ****/
export declare function ValueIsVanillaObject(Value: any): boolean;

/**** ValuesAreEqual ****/
export declare function ValuesAreEqual(thisValue: any, otherValue: any, Mode?: 'by-value' | 'by-reference' | undefined): boolean;

/**** ValuesDiffer ****/
export declare function ValuesDiffer(thisValue: any, otherValue: any, Mode?: 'by-value' | 'by-reference' | undefined, visitedPairs?: WeakMap<object, WeakSet<object>>): boolean;

export { }
