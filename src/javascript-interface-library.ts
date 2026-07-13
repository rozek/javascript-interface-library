/*******************************************************************************
*                                                                              *
*                      JavaScript Interface Library (JIL)                      *
*                                                                              *
*******************************************************************************/

/**** get a reference to the "global" object ****/

  export const global = globalThis

//------------------------------------------------------------------------------
//--                             Object Functions                             --
//------------------------------------------------------------------------------
// allow methods from Object.prototype to be applied to "vanilla" objects

/**** ObjectMethodFor - "Object.prototype" methods for "vanilla" objects ****/

  function ObjectMethodFor (MethodName:string):Function {
    return FunctionWithName(function (Value:Object, ...ArgumentList:any[]):any {
      return (
        (Value == null) ||       // let these methods crash like their originals
        (MethodName in Value) && (typeof (Value as any)[MethodName] === 'function')
        ? (Value as any)[MethodName](...ArgumentList)
        : (Object.prototype as any)[MethodName].apply(Value,ArgumentList)
      )
    }, 'Object_' + MethodName)
  }

/**** Object_hasOwnProperty ****/

  export const Object_hasOwnProperty = /*#__PURE__*/ ObjectMethodFor(
    'hasOwnProperty'
  ) as (Value:Object, PropertyName:string) => boolean

/**** Object_isPrototypeOf ****/

  export const Object_isPrototypeOf = /*#__PURE__*/ ObjectMethodFor(
    'isPrototypeOf'
  ) as (Value:Object, Candidate:any) => boolean

/**** Object_propertyIsEnumerable ****/

  export const Object_propertyIsEnumerable = /*#__PURE__*/ ObjectMethodFor(
    'propertyIsEnumerable'
  ) as (Value:Object, PropertyName:string) => boolean

/**** Object_toString ****/

  export const Object_toString = /*#__PURE__*/ ObjectMethodFor(
    'toString'
  ) as (Value:Object) => string

/**** Object_toLocaleString ****/

  export function Object_toLocaleString (Value:Object):string {
    return (
      (Value == null) ||              // let this method crash like its original
      ('toLocaleString' in Value) && (typeof Value.toLocaleString === 'function')
      ? Value.toLocaleString()
      : Object_toString(Value)  // "toLocaleString" delegates to "toString", too
    )
  }

/**** Object_valueOf ****/

  export const Object_valueOf = /*#__PURE__*/ ObjectMethodFor(
    'valueOf'
  ) as (Value:Object) => any

/**** ObjectMergedWith ****/

  export function ObjectMergedWith (
    TargetObject:object, ...otherObjectList:object[]
  ):object {
    for (let i = 0, l = otherObjectList.length; i < l; i++) {
      let otherObject = otherObjectList[i]
      if (otherObject == null) { continue }

      if (typeof otherObject === 'object') {
        const DescriptorSet = Object.getOwnPropertyDescriptors(otherObject)
        for (const Key of Reflect.ownKeys(DescriptorSet)) {
          const Descriptor = (DescriptorSet as any)[Key]  // incl. symbol keys
          if (Descriptor.enumerable) {
            Object.defineProperty(TargetObject,Key,Descriptor)
          }
        }
      } else {
        throwError('InvalidArgument: argument #' + (i+1) + ' is not an object')
      }
    }

    return TargetObject
  }

/**** throwError - simplifies construction of named errors ****/

  export function throwError (Message:string):never {
    let Match = /^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(Message)
    if (Match == null) {
      throw new Error(Message)
    } else {
      let namedError = new Error(Match[2])
        namedError.name = Match[1]
      throw namedError
    }
  }

/**** missingArgument - throws the standard "MissingArgument" error ****/

  function missingArgument (Description:string):never {
    throwError(`MissingArgument: no ${escaped(Description)} given`)
  }

//------------------------------------------------------------------------------
//--                      Value Classification Functions                      --
//------------------------------------------------------------------------------

/**** ValueExists ****/

  export function ValueExists (Value:unknown):boolean {
    return (Value != null)
  }

/**** ValueIsMissing ****/

  export function ValueIsMissing (Value:unknown):Value is null|undefined {
    return (Value == null)
  }

/**** ValueIsBoolean ****/

  export function ValueIsBoolean (Value:unknown):Value is boolean {
    return (typeof Value === 'boolean') || (Value instanceof Boolean)
  }

/**** ValueIsNumber ****/

  export function ValueIsNumber (Value:unknown):Value is number {
    return (typeof Value === 'number') || (Value instanceof Number)
  }

/**** ValueIsFiniteNumber (pure "isFinite" breaks on objects) ****/

  export function ValueIsFiniteNumber (Value:unknown):Value is number {
    return ValueIsNumber(Value) && isFinite(Value.valueOf())
  }

/**** ValueIsNaN (numeric, but NaN - this differs from pure "isNaN") ****/

  export function ValueIsNaN (Value:unknown):Value is number {
    return ValueIsNumber(Value) && isNaN(Value.valueOf())
  }

/**** ValueIsNumberInRange ****/

  export function ValueIsNumberInRange (
    Value:unknown, minValue?:number, maxValue?:number,
    withMin:boolean = true, withMax:boolean = true
  ):Value is number {
    if (! ValueIsNumber(Value)) { return false }

    const numValue = (Value as number|Number).valueOf() // unboxes boxed numbers
    if (isNaN(numValue)) { return false }

    return ! (           // "ValueIsFiniteNumber" is more robust than "isFinite"
      (ValueIsFiniteNumber(minValue) &&
        ((numValue < minValue) || (! withMin && (numValue === minValue)))) ||
      (ValueIsFiniteNumber(maxValue) &&
        ((numValue > maxValue) || (! withMax && (numValue === maxValue))))
    )
  }

/**** ValueIsInteger ****/

  export function ValueIsInteger (Value:unknown):Value is number {
    if (! ValueIsNumber(Value)) { return false }

    const numValue = Value.valueOf()
    return isFinite(numValue) && (Math.round(numValue) === numValue)
  }

/**** ValueIsIntegerInRange ****/

  export function ValueIsIntegerInRange (
    Value:unknown, minValue?:number, maxValue?:number
  ):Value is number {
    if (! ValueIsInteger(Value)) { return false }

    const numValue = Value.valueOf()
    return ! (           // "ValueIsFiniteNumber" is more robust than "isFinite"
      (ValueIsFiniteNumber(minValue) && (numValue < minValue)) ||
      (ValueIsFiniteNumber(maxValue) && (numValue > maxValue))
    )
  }

/**** ValueIsOrdinal ****/

  export function ValueIsOrdinal (Value:unknown):Value is number {
    return ValueIsInteger(Value) && (Value.valueOf() >= 0)
  }

/**** ValueIsCardinal ****/

  export function ValueIsCardinal (Value:unknown):Value is number {
    return ValueIsInteger(Value) && (Value.valueOf() >= 1)
  }

/**** ValueIsString ****/

  export function ValueIsString (Value:unknown):Value is string {
    return (typeof Value === 'string') || (Value instanceof String)
  }

/**** ValueIs[Non]EmptyString ****/

  const emptyStringPattern = /^\s*$/

  export function ValueIsEmptyString (Value:unknown):Value is string {
    return ValueIsStringMatching(Value,emptyStringPattern)
  }

  export function ValueIsNonEmptyString (Value:unknown):Value is string {
    return ValueIsString(Value) && ! emptyStringPattern.test(Value.valueOf())
  }

/**** ValueIsStringMatching ****/

  export function ValueIsStringMatching (Value:unknown, Pattern:RegExp):Value is string {
    return (
      (typeof Value === 'string') || (Value instanceof String)
    ) && Pattern.test(Value.valueOf())
  }

/**** ValueIsText ****/

  const noCtrlCharsButCRLFPattern = /^[^\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/

  export function ValueIsText (Value:unknown):Value is string {
    return ValueIsStringMatching(Value,noCtrlCharsButCRLFPattern)
  }

/**** ValueIsTextline ****/

  const noCtrlCharsPattern = /^[^\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/

  export function ValueIsTextline (Value:unknown):Value is string {
    return ValueIsStringMatching(Value,noCtrlCharsPattern)
  }

/**** ValueIsFunction ****/

  export function ValueIsFunction (Value:unknown):Value is Function {
    return (typeof Value === 'function')
  }

/**** ValueIsAnonymousFunction ****/

  export function ValueIsAnonymousFunction (Value:unknown):Value is Function {
    return (typeof Value === 'function') && ((Value.name ?? '') === '')
  }

/**** ValueIsNamedFunction ****/

  export function ValueIsNamedFunction (Value:unknown):Value is Function {
    return (typeof Value === 'function') && ! ValueIsAnonymousFunction(Value)
  }

/**** ValueIsNativeFunction ****/

  const NativeFunctionPattern =
    /^function\s*[^(]*\(\)\s*\{\s*\[native code\]\s*\}\s*$/

  export function ValueIsNativeFunction (Value:unknown):Value is Function {
    return (
      (typeof Value === 'function') &&
      NativeFunctionPattern.test(Value.toString()) &&
      ! Value.name.startsWith('bound ')  // "bound" functions aren't truly native
    )
  }

/**** ValueIsScriptedFunction ****/

  export function ValueIsScriptedFunction (Value:unknown):Value is Function {
    return (typeof Value === 'function') && ! ValueIsNativeFunction(Value)
  }

/**** ValueIsObject ****/

  export function ValueIsObject (Value:unknown):Value is object {
    return (Value != null) && (typeof Value === 'object')
  }

/**** ValueIsPlainObject ****/

  export function ValueIsPlainObject (Value:unknown):Value is object {
    return (
      (Value != null) && (typeof Value === 'object') &&
      (Object.getPrototypeOf(Value) === Object.prototype)
    )
  }

/**** ValueIsVanillaObject ****/

  export function ValueIsVanillaObject (Value:unknown):Value is object {
    return (
      (Value != null) && (typeof Value === 'object') &&
      ! (Value instanceof Object)
    )
  }

/**** ValueIsArray ****/

  export const ValueIsArray = Array.isArray

/**** ValueIsList ("dense" array) ****/

  export function ValueIsList (
    Value:unknown, minLength?:number, maxLength?:number
  ):Value is any[] {
    return ValueIsListSatisfying(
      Value, (Item:any) => (Item !== undefined), minLength,maxLength
    )
  }

/**** ValueIsListSatisfying ****/

  export function ValueIsListSatisfying (
    Value:unknown, Validator:(Value:any) => boolean,
    minLength?:number, maxLength?:number
  ):Value is any[] {
    if (! ValueIsArray(Value)) { return false }

    try {
      for (let i = 0, l = Value.length; i < l; i++) {
        if (! Validator(Value[i])) { return false }
      }

      if ((minLength != null) && (Value.length < minLength)) { return false }
      if ((maxLength != null) && (Value.length > maxLength)) { return false }

      return true
    } catch (Signal) {           // a throwing validator marks the list invalid
      return false
    }
  }

/**** ValueIsListOf ****/

  export function ValueIsListOf (Value:any, ValueList:any[]):boolean {
    return ValueIsListSatisfying(Value,(Value:any) => ValueIsOneOf(Value,ValueList))
  }

/**** ValueIsInstanceOf ****/

  export function ValueIsInstanceOf<T> (
    Value:unknown, Constructor:abstract new (...ArgumentList:any[]) => T
  ):Value is T {
    return (Value instanceof Constructor)
  }

/**** ValueInheritsFrom ****/

  export function ValueInheritsFrom (Value:unknown, Prototype:object):boolean {
    return Object_isPrototypeOf(Prototype,Value)
  }

/**** ValueIsDate ****/

  export function ValueIsDate (Value:unknown):Value is Date {
    return (Value instanceof Date)
  }

/**** ValueIsError ****/

  export function ValueIsError (Value:unknown):Value is Error {
    return (Value instanceof Error)
  }

/**** ValueIsPromise ****/

  export function ValueIsPromise (Value:unknown):Value is Promise<any> {
    return (Value != null) && (typeof (Value as any).then === 'function')
  }
// see https://stackoverflow.com/questions/27746304/how-do-i-tell-if-an-object-is-a-promise

/**** ValueIsRegExp ****/

  export function ValueIsRegExp (Value:unknown):Value is RegExp {
    return (Value instanceof RegExp)
  }

/**** ValueIsOneOf ****/

  export function ValueIsOneOf<T> (Value:unknown, ValueList:T[]):Value is T {
    return (ValueList.indexOf(Value as T) >= 0)
  }                     // no automatic unboxing of boxed values and vice-versa!

/**** ValueIsColor ****/

  export function ValueIsColor (Value:unknown):Value is string {
    if (! ValueIsString(Value)) { return false }

    let lowerValue = Value.valueOf().toLowerCase()   // ColorSet keys are l.c.
    return (
      ColorSet.hasOwnProperty(lowerValue) ||
      HexColor6Pattern.test(lowerValue) || HexColor8Pattern.test(lowerValue) ||
      RGBColorPattern.test(lowerValue)  || RGBAColorPattern.test(lowerValue)
    )
  }

/**** ValueIsEMailAddress ****/

  const EMailAddressPattern = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i
  // see https://stackoverflow.com/questions/201323/how-to-validate-an-email-address-using-a-regular-expression

  export function ValueIsEMailAddress (Value:unknown):Value is string {
    return ValueIsStringMatching(Value, EMailAddressPattern)
  }

/**** ValueIsURL - absolute or relative, strictly following RFC 3986 ****/

  const URLCharacterPattern =                  // URL characters after RFC 3986
    /^[A-Za-z0-9\-._~:\/?#\[\]@!$&'()*+,;=%]+$/      // i.e., no raw IRIs either
  const brokenPercentEncodingPattern = /%(?![0-9A-Fa-f]{2})/

  export function ValueIsURL (Value:unknown):Value is string {
    if (! ValueIsString(Value)) { return false }

    const Candidate = Value.valueOf()
    if (
      ! URLCharacterPattern.test(Candidate) ||  // also rejects '' + whitespace
      brokenPercentEncodingPattern.test(Candidate)
    ) { return false }

    try {
      new URL(Candidate, 'file://')
      return true
    } catch (Signal) {
      return false
    }
  }

/**** ValueIsAbsoluteURL ****/

  function normalizedProtocol (Protocol:string):string {
    return Protocol.toLowerCase().replace(/:?$/,':') // appends missing colons
  }

  export function ValueIsAbsoluteURL (
    Value:unknown, allowedProtocols?:string[]
  ):Value is string {
    if (! ValueIsURL(Value)) { return false }

    let parsedURL:URL
    try {
      parsedURL = new URL(Value.valueOf())    // without a base: absolute only
    } catch (Signal) {
      return false
    }

    if (allowedProtocols == null) { return true }

    return allowedProtocols.some(               // "parsedURL.protocol" already
      (Protocol) => (normalizedProtocol(Protocol) === parsedURL.protocol)
    )                                  // comes in lower case and with a colon
  }

/**** ValueIsPhoneNumber ****/
// plausibility check only - neither prefixes nor lengths are actually verified!

  const PhoneNumberPattern = /^\+?[0-9(][0-9 \-.\/()]*[0-9)]$/    // not perfect

  export function ValueIsPhoneNumber (Value:unknown):Value is string {
    if (! ValueIsString(Value)) { return false }

    let Candidate = Value.valueOf()
    if (! PhoneNumberPattern.test(Candidate)) { return false }

    let Digits = Candidate.replace(/[^0-9]/g,'')
    return (
      Candidate.charAt(0) === '+'
      ? /^[1-9][0-9]{6,14}$/.test(Digits) // E.164: 7-15 digits, no leading zero
      : (Digits.length >= 3) && (Digits.length <= 16)
    )
  }

/**** ValueIsE164PhoneNumber (canonical machine-readable format) ****/

  const E164PhoneNumberPattern = /^\+[1-9][0-9]{6,14}$/

  export function ValueIsE164PhoneNumber (Value:unknown):Value is string {
    return ValueIsStringMatching(Value,E164PhoneNumberPattern)
  }

/**** ValueIsBigInt ****/

  export function ValueIsBigInt (Value:unknown):Value is bigint {
    return (typeof Value === 'bigint')
  }

/**** ValueIsSymbol ****/

  export function ValueIsSymbol (Value:unknown):Value is symbol {
    return (typeof Value === 'symbol')
  }

/**** ValueIsMap ****/

  export function ValueIsMap (Value:unknown):Value is Map<any,any> {
    return (Value instanceof Map)
  }

/**** ValueIsSet ****/

  export function ValueIsSet (Value:unknown):Value is Set<any> {
    return (Value instanceof Set)
  }

/**** ValueIsTypedArray ****/

  export type TypedArray =
    Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|
    Int32Array|Uint32Array|Float32Array|Float64Array|
    BigInt64Array|BigUint64Array

  export function ValueIsTypedArray (Value:unknown):Value is TypedArray {
    return ArrayBuffer.isView(Value) && ! (Value instanceof DataView)
  }

/**** ValueIsArrayBuffer ****/

  export function ValueIsArrayBuffer (Value:unknown):Value is ArrayBuffer {
    return (Value instanceof ArrayBuffer)
  }

/**** ValueIsUUID ****/

  const UUIDPattern =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

  export function ValueIsUUID (Value:unknown):Value is string {
    return ValueIsStringMatching(Value,UUIDPattern)
  }

/**** ValueIsISODate (a calendar date like "2026-07-03") ****/

  const ISODatePattern = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/

  export function ValueIsISODate (Value:unknown):Value is string {
    if (! ValueIsString(Value)) { return false }

    const Match = ISODatePattern.exec(Value.valueOf())
    if (Match == null) { return false }

    const [ Year,Month,Day ] = [ Match[1],Match[2],Match[3] ].map(Number)
    const Timestamp = new Date(Date.UTC(Year,Month-1,Day))
    return (                                    // detects overflows like 02-31
      (Timestamp.getUTCFullYear() === Year) &&
      (Timestamp.getUTCMonth() === Month-1) && (Timestamp.getUTCDate() === Day)
    )
  }

/**** ValueIsISOTimestamp (like "2026-07-03T10:56:00Z") ****/

  const ISOTimestampPattern = new RegExp(
    '^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}' +
    '(:[0-9]{2}([.][0-9]+)?)?(Z|[+-][0-9]{2}:[0-9]{2})?$'
  )

  export function ValueIsISOTimestamp (Value:unknown):Value is string {
    return (
      ValueIsStringMatching(Value,ISOTimestampPattern) &&
      ! isNaN(Date.parse(Value.valueOf()))
    )
  }

/**** ValueIsIPv4Address ****/

  const IPv4AddressPattern = new RegExp(
    '^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])[.]){3}' +
    '(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])$'
  )

  export function ValueIsIPv4Address (Value:unknown):Value is string {
    return ValueIsStringMatching(Value,IPv4AddressPattern)
  }

/**** ValueIsIPv6Address ****/

  const IPv6CharSetPattern = /^[0-9a-fA-F:.]+$/

  export function ValueIsIPv6Address (Value:unknown):Value is string {
    if (
      ! ValueIsString(Value) || ! IPv6CharSetPattern.test(Value.valueOf())
    ) { return false }

    try {                        // URL parsing implements the full IPv6 grammar
      new URL('http://[' + Value.valueOf() + ']/')
      return true
    } catch (Signal) {
      return false
    }
  }

/**** ValueIsHostName (according to RFC 1123) ****/

  const HostNamePattern = new RegExp(
    '^(?=.{1,253}$)' +
    '[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?' +
    '([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$', 'i'
  )

  export function ValueIsHostName (Value:unknown):Value is string {
    return ValueIsStringMatching(Value,HostNamePattern)
  }

/**** ValueIsPortNumber ****/

  export function ValueIsPortNumber (Value:unknown):Value is number {
    return ValueIsIntegerInRange(Value,1,65535)
  }

/**** serializable types ****/

  export type serializableValue  = null | boolean | number | string |
                                   serializableObject | serializableArray
  export type serializableObject = { [Key:string]:serializableValue }
  export type serializableArray  = serializableValue[]

/**** ValueIsSerializableValue ****/

  export function ValueIsSerializableValue (
    Value:any, visitedObjects:WeakSet<object> = new WeakSet()
  ):boolean {
    switch (true) {
      case (Value == null):                // deliberately also allows undefined
      case ValueIsBoolean(Value):
      case ValueIsFiniteNumber(Value):  // NaN/Infinity are not serializable
      case ValueIsString(Value):
        return true
      case ValueIsList(Value):
        if (visitedObjects.has(Value)) { return false }     // recursion detected
        visitedObjects.add(Value)
        try {
          return ValueIsListSatisfying(
            Value, (Item:any) => {
              if (Item === undefined) { return false }  // JSON would make "null" of it
              return ValueIsSerializableValue(Item,visitedObjects)
            }
          )
        } finally { visitedObjects.delete(Value) }
      case ValueIsPlainObject(Value):
        if (visitedObjects.has(Value)) { return false }     // recursion detected
        visitedObjects.add(Value)
        try {
          for (let Property in Value) {
            if (
              Value.hasOwnProperty(Property) &&
              ! ValueIsSerializableValue((Value as any)[Property],visitedObjects)
            ) { return false }
          }
          return true
        } finally { visitedObjects.delete(Value) }
    }
    return false
  }

/**** ValueIsSerializableObject ****/

  export function ValueIsSerializableObject (Value:any):boolean {
    return ValueIsPlainObject(Value) && ValueIsSerializableValue(Value)
  }

/**** ValueIsJSONString ****/

  export function ValueIsJSONString (Value:unknown):Value is string {
    if (! ValueIsString(Value)) { return false }

    try {
      JSON.parse(Value.valueOf())
      return true
    } catch (Signal) {
      return false
    }
  }

/**** ValueIsBase64 (standard alphabet, correctly padded) ****/

  const Base64Pattern = new RegExp(
    '^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$'
  )

  export function ValueIsBase64 (Value:unknown):Value is string {
    return ValueIsStringMatching(Value,Base64Pattern)
  }

/**** ValueIsHexString ****/

  const HexStringPattern = /^[0-9a-fA-F]+$/

  export function ValueIsHexString (Value:unknown):Value is string {
    return ValueIsStringMatching(Value,HexStringPattern)
  }

/**** ValueIsIdentifier ****/

  const IdentifierPattern = /^[\p{ID_Start}_$][\p{ID_Continue}_$\u200C\u200D]*$/u

  export function ValueIsIdentifier (Value:unknown):Value is string {
    return ValueIsStringMatching(Value,IdentifierPattern)
  }

//------------------------------------------------------------------------------
//--                      Argument Validation Functions                       --
//------------------------------------------------------------------------------

  export const rejectNil = false
  export const acceptNil = true

/**** unboxed - unboxes boxed primitives, leaves anything else untouched ****/

  function unboxed (Value:any):any {
    return (                          // "valueOf" may return other values for
      (Value instanceof Boolean) ||          // other objects (e.g. Dates)
      (Value instanceof Number) || (Value instanceof String)
      ? Value.valueOf()
      : Value
    )
  }

/**** validatedArgument ****/

  export function validatedArgument (
    Description:string, Argument:any, ValueIsValid:(Value:any) => boolean,
    NilIsAcceptable:boolean, Expectation:string
  ):any|null|undefined {
    if (Argument == null) {
      if (NilIsAcceptable) { return Argument }
      missingArgument(Description)
    }

    if (ValueIsValid(Argument)) {
      return unboxed(Argument)                       // unboxes any primitives
    }
    throwError(
      `InvalidArgument: the given ${escaped(Description)} is no valid ${escaped(Expectation)}`
    )
  }

/**** ValidatorForClassifier ****/

  export function ValidatorForClassifier<T> (
    Classifier:(Value:any) => boolean, NilIsAcceptable:true, Expectation:string
  ):(Description:string, Argument:any) => T|null|undefined
  export function ValidatorForClassifier<T> (
    Classifier:(Value:any) => boolean, NilIsAcceptable:false, Expectation:string
  ):(Description:string, Argument:any) => T
  export function ValidatorForClassifier (
    Classifier:(Value:any) => boolean, NilIsAcceptable:boolean,
    Expectation:string
  ):any {
    let Validator = function (Description:string, Argument:any):any {
      return validatedArgument(
        Description, Argument, Classifier, NilIsAcceptable, Expectation
      )
    }

    let ClassifierName = Classifier.name
    if ((ClassifierName != null) && /^ValueIs/.test(ClassifierName)) {
      let ValidatorName = ClassifierName.replace(  // derive name from validator
        /^ValueIs/, NilIsAcceptable ? 'allow' : 'expect'
      )
      return FunctionWithName(Validator,ValidatorName)
    } else {
      return Validator                              // without any specific name
    }
  }

/**** FunctionWithName ****/

  export function FunctionWithName (
    originalFunction:Function, desiredName:string|String
  ):Function {
    if (originalFunction == null) {
      throwError('MissingArgument: no function given')
    }
    if (typeof originalFunction !== 'function') {
      throwError('InvalidArgument: the given 1st Argument is not a JavaScript function')
    }

    if (desiredName == null) {
      throwError('MissingArgument: no desired name given')
    }
    if ((typeof desiredName !== 'string') && ! (desiredName instanceof String)) {
      throwError('InvalidArgument: the given desired name is not a string')
    }

    if (originalFunction.name === desiredName) { return originalFunction }

    Object.defineProperty(originalFunction, 'name', {
      value:desiredName.valueOf()
    })
    return originalFunction
  }

/**** allowVariantOf - turns an "expect..." function into its "allow..." twin ****/

  function allowVariantOf<ArgList extends any[], Result> (
    expectFunction:(Description:string, Argument:any, ...ArgumentList:ArgList) => Result,
    FunctionName:string
  ):(Description:string, Argument:any, ...ArgumentList:ArgList) => Result|null|undefined {
    return FunctionWithName(
      (Description:string, Argument:any, ...ArgumentList:ArgList) => (
        Argument == null
        ? Argument
        : expectFunction(Description,Argument,...ArgumentList)
      ), FunctionName
    ) as (Description:string, Argument:any, ...ArgumentList:ArgList) => Result|null|undefined
  }

/**** allow[ed]Value ****/

  export function allowValue (
    Description:string, Argument:any, Validator?:Function
  ):any {
    return (Argument == null
      ? undefined
      : expectedValue(Description,Argument,Validator)
    )
  }
  export const allowedValue = allowValue

/**** expect[ed]Value ****/

  export function expectValue (
    Description:string, Argument:any, Validator?:Function
  ):any {
    if (Argument == null) missingArgument(Description)

    const Value = unboxed(Argument)    // unboxes primitives - but nothing else
    if ((Validator == null) || (Validator(Value) === true)) { return Value }

    throwError(`InvalidArgument: the given ${escaped(Description)} is invalid`)
  }
  export const expectedValue = expectValue

/**** allow/expect[ed]Boolean ****/

  export const allowBoolean = /*#__PURE__*/ ValidatorForClassifier<boolean>(
    ValueIsBoolean, acceptNil, 'boolean value'
  ), allowedBoolean = allowBoolean

  export const expectBoolean = /*#__PURE__*/ ValidatorForClassifier<boolean>(
    ValueIsBoolean, rejectNil, 'boolean value'
  ), expectedBoolean = expectBoolean

/**** allow/expect[ed]Number ****/

  export const allowNumber = /*#__PURE__*/ ValidatorForClassifier<number>(
    ValueIsNumber, acceptNil, 'numeric value'
  ), allowedNumber = allowNumber

  export const expectNumber = /*#__PURE__*/ ValidatorForClassifier<number>(
    ValueIsNumber, rejectNil, 'numeric value'
  ), expectedNumber = expectNumber

/**** allow/expect[ed]FiniteNumber ****/

  export const allowFiniteNumber = /*#__PURE__*/ ValidatorForClassifier<number>(
    ValueIsFiniteNumber, acceptNil, 'finite numeric value'
  ), allowedFiniteNumber = allowFiniteNumber

  export const expectFiniteNumber = /*#__PURE__*/ ValidatorForClassifier<number>(
    ValueIsFiniteNumber, rejectNil, 'finite numeric value'
  ), expectedFiniteNumber = expectFiniteNumber

/**** allow/expect[ed]NaN ****/

  export const allowNaN = /*#__PURE__*/ ValidatorForClassifier<number>(
    ValueIsNaN, acceptNil, 'NaN value'
  ), allowedNaN = allowNaN

  export const expectNaN = /*#__PURE__*/ ValidatorForClassifier<number>(
    ValueIsNaN, rejectNil, 'NaN value'
  ), expectedNaN = expectNaN

/**** allow[ed]NumberInRange ****/

  export const allowNumberInRange = /*#__PURE__*/ allowVariantOf(
    expectNumberInRange, 'allowNumberInRange'
  ), allowedNumberInRange = allowNumberInRange

/**** expect[ed]NumberInRange ****/

  export function expectNumberInRange (
    Description:string, Argument:any,
    minValue?:number, maxValue?:number, withMin?:boolean, withMax?:boolean
  ):number {
    expectNumber(Description, Argument)

    if (isNaN(Argument)) {
      throwError(
        `InvalidArgument: the given ${escaped(Description)} is not-a-number`
      )
    }

    withMin ??= true; withMax ??= true
    const hasMin = (minValue != null) && isFinite(minValue)
    const hasMax = (maxValue != null) && isFinite(maxValue)

    const belowMin = hasMin &&
      ((Argument < minValue) || (! withMin && (Argument === minValue)))
    const aboveMax = hasMax &&
      ((Argument > maxValue) || (! withMax && (Argument === maxValue)))
    switch (true) {
      case (belowMin && hasMax) || (aboveMax && hasMin):
        throw new RangeError(
          `the given ${escaped(Description)} (${Argument}) is outside ` +
          `the allowed range (${minValue}...${maxValue})`
        )
      case belowMin:
        throw new RangeError(
          `the given ${escaped(Description)} is below the allowed ` +
          `minimum (${Argument} ${withMin ? '<' : '<='} ${minValue})`
        )
      case aboveMax:
        throw new RangeError(
          `the given ${escaped(Description)} exceeds the allowed ` +
          `maximum (${Argument} ${withMax ? '>' : '>='} ${maxValue})`
        )
    }

    return Argument.valueOf()
  }
  export const expectedNumberInRange = expectNumberInRange

/**** allow/expect[ed]Integer ****/

  export const allowInteger = /*#__PURE__*/ ValidatorForClassifier<number>(
    ValueIsInteger, acceptNil, 'integral numeric value'
  ), allowedInteger = allowInteger

  export const expectInteger = /*#__PURE__*/ ValidatorForClassifier<number>(
    ValueIsInteger, rejectNil, 'integral numeric value'
  ), expectedInteger = expectInteger

/**** allow[ed]IntegerInRange ****/

  export const allowIntegerInRange = /*#__PURE__*/ allowVariantOf(
    expectIntegerInRange, 'allowIntegerInRange'
  ), allowedIntegerInRange = allowIntegerInRange

/**** expect[ed]IntegerInRange ****/

  export function expectIntegerInRange (
    Description:string, Argument:any, minValue?:number, maxValue?:number
  ):number {
    expectInteger(Description, Argument)

    const hasMin = (minValue != null) && isFinite(minValue)
    const hasMax = (maxValue != null) && isFinite(maxValue)

    const belowMin = hasMin && (Argument < minValue)
    const aboveMax = hasMax && (Argument > maxValue)
    switch (true) {
      case (belowMin && hasMax) || (aboveMax && hasMin):
        throw new RangeError(
          `the given ${escaped(Description)} (${Argument}) is outside ` +
          `the allowed range (${minValue}...${maxValue})`
        )
      case belowMin:
        throw new RangeError(
          `the given ${escaped(Description)} is below the allowed ` +
          `minimum (${Argument} < ${minValue})`
        )
      case aboveMax:
        throw new RangeError(
          `the given ${escaped(Description)} exceeds the allowed ` +
          `maximum (${Argument} > ${maxValue})`
        )
    }

    return Argument.valueOf()
  }
  export const expectedIntegerInRange = expectIntegerInRange

/**** allow/expect[ed]Ordinal ****/

  export const allowOrdinal = /*#__PURE__*/ ValidatorForClassifier<number>(
    ValueIsOrdinal, acceptNil, 'ordinal number'
  ), allowedOrdinal = allowOrdinal

  export const expectOrdinal = /*#__PURE__*/ ValidatorForClassifier<number>(
    ValueIsOrdinal, rejectNil, 'ordinal number'
  ), expectedOrdinal = expectOrdinal

/**** allow/expect[ed]Cardinal ****/

  export const allowCardinal = /*#__PURE__*/ ValidatorForClassifier<number>(
    ValueIsCardinal, acceptNil, 'cardinal number'
  ), allowedCardinal = allowCardinal

  export const expectCardinal = /*#__PURE__*/ ValidatorForClassifier<number>(
    ValueIsCardinal, rejectNil, 'cardinal number'
  ), expectedCardinal = expectCardinal

/**** allow/expect[ed]String ****/

  export const allowString = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsString, acceptNil, 'literal string'
  ), allowedString = allowString

  export const expectString = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsString, rejectNil, 'literal string'
  ), expectedString = expectString

/**** allow/expect[ed]NonEmptyString ****/

  export const allowNonEmptyString = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsNonEmptyString, acceptNil, 'non-empty literal string'
  ), allowedNonEmptyString = allowNonEmptyString

  export const expectNonEmptyString = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsNonEmptyString, rejectNil, 'non-empty literal string'
  ), expectedNonEmptyString = expectNonEmptyString

/**** allow[ed]StringMatching ****/

  export const allowStringMatching = /*#__PURE__*/ allowVariantOf(
    expectStringMatching, 'allowStringMatching'
  ), allowedStringMatching = allowStringMatching

/**** expect[ed]StringMatching ****/

  export function expectStringMatching (
    Description:string, Argument:any, Pattern:RegExp
  ):string {
    expectString(Description, Argument)

    if (Pattern.test(Argument)) { return Argument.valueOf() }
    throwError(
      `InvalidArgument: the given ${escaped(Description)} does not match the specified pattern`
    )
  }
  export const expectedStringMatching = expectStringMatching

/**** allow/expect[ed]Text ****/

  export const allowText = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsText, acceptNil, 'literal text'
  ), allowedText = allowText

  export const expectText = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsText, rejectNil, 'literal text'
  ), expectedText = expectText

/**** allow/expect[ed]Textline ****/

  export const allowTextline = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsTextline, acceptNil, 'single line of text'
  ), allowedTextline = allowTextline

  export const expectTextline = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsTextline, rejectNil, 'single line of text'
  ), expectedTextline = expectTextline

/**** allow/expect[ed]Function ****/

  export const allowFunction = /*#__PURE__*/ ValidatorForClassifier<Function>(
    ValueIsFunction, acceptNil, 'JavaScript function'
  ), allowedFunction = allowFunction

  export const expectFunction = /*#__PURE__*/ ValidatorForClassifier<Function>(
    ValueIsFunction, rejectNil, 'JavaScript function'
  ), expectedFunction = expectFunction

/**** allow/expect[ed]AnonymousFunction ****/

  export const allowAnonymousFunction = /*#__PURE__*/ ValidatorForClassifier<Function>(
    ValueIsAnonymousFunction, acceptNil, 'anonymous JavaScript function'
  ), allowedAnonymousFunction = allowAnonymousFunction

  export const expectAnonymousFunction = /*#__PURE__*/ ValidatorForClassifier<Function>(
    ValueIsAnonymousFunction, rejectNil, 'anonymous JavaScript function'
  ), expectedAnonymousFunction = expectAnonymousFunction

/**** allow/expect[ed]NamedFunction ****/

  export const allowNamedFunction = /*#__PURE__*/ ValidatorForClassifier<Function>(
    ValueIsNamedFunction, acceptNil, 'named JavaScript function'
  ), allowedNamedFunction = allowNamedFunction

  export const expectNamedFunction = /*#__PURE__*/ ValidatorForClassifier<Function>(
    ValueIsNamedFunction, rejectNil, 'named JavaScript function'
  ), expectedNamedFunction = expectNamedFunction

/**** allow/expect[ed]NativeFunction ****/

  export const allowNativeFunction = /*#__PURE__*/ ValidatorForClassifier<Function>(
    ValueIsNativeFunction, acceptNil, 'native JavaScript function'
  ), allowedNativeFunction = allowNativeFunction

  export const expectNativeFunction = /*#__PURE__*/ ValidatorForClassifier<Function>(
    ValueIsNativeFunction, rejectNil, 'native JavaScript function'
  ), expectedNativeFunction = expectNativeFunction

/**** allow/expect[ed]ScriptedFunction ****/

  export const allowScriptedFunction = /*#__PURE__*/ ValidatorForClassifier<Function>(
    ValueIsScriptedFunction, acceptNil, 'scripted JavaScript function'
  ), allowedScriptedFunction = allowScriptedFunction

  export const expectScriptedFunction = /*#__PURE__*/ ValidatorForClassifier<Function>(
    ValueIsScriptedFunction, rejectNil, 'scripted JavaScript function'
  ), expectedScriptedFunction = expectScriptedFunction

/**** allow/expect[ed]Object ****/

  export const allowObject = /*#__PURE__*/ ValidatorForClassifier<object>(
    ValueIsObject, acceptNil, 'JavaScript object'
  ), allowedObject = allowObject

  export const expectObject = /*#__PURE__*/ ValidatorForClassifier<object>(
    ValueIsObject, rejectNil, 'JavaScript object'
  ), expectedObject = expectObject

/**** allow/expect[ed]PlainObject ****/

  export const allowPlainObject = /*#__PURE__*/ ValidatorForClassifier<object>(
    ValueIsPlainObject, acceptNil, '"plain" JavaScript object'
  ), allowedPlainObject = allowPlainObject

  export const expectPlainObject = /*#__PURE__*/ ValidatorForClassifier<object>(
    ValueIsPlainObject, rejectNil, '"plain" JavaScript object'
  ), expectedPlainObject = expectPlainObject

/**** allow/expect[ed]VanillaObject ****/

  export const allowVanillaObject = /*#__PURE__*/ ValidatorForClassifier<object>(
    ValueIsVanillaObject, acceptNil, '"vanilla" JavaScript object'
  ), allowedVanillaObject = allowVanillaObject

  export const expectVanillaObject = /*#__PURE__*/ ValidatorForClassifier<object>(
    ValueIsVanillaObject, rejectNil, '"vanilla" JavaScript object'
  ), expectedVanillaObject = expectVanillaObject

/**** allow[ed]Array ****/

  export const allowArray = /*#__PURE__*/ allowVariantOf(
    expectArray, 'allowArray'
  ), allowedArray = allowArray

/**** expect[ed]Array ****/

  export function expectArray (Description:string, Argument:any):any[] {
    if (Argument == null) missingArgument(Description)

    if (ValueIsArray(Argument)) { return Argument }
    throwError(
      `InvalidArgument: the given ${escaped(Description)} is no JavaScript array`
    )
  }
  export const expectedArray = expectArray

/**** allow[ed]List ****/

  export const allowList = /*#__PURE__*/ allowVariantOf(
    expectList, 'allowList'
  ), allowedList = allowList

/**** expect[ed]List ****/

  export function expectList (
    Description:string, Argument:any, Expectation?:string,
    minLength?:number, maxLength?:number
  ):any[] {
    if (Argument == null) missingArgument(Description)

    if (ValueIsList(Argument, minLength,maxLength)) { return Argument }
    throwError(
      `InvalidArgument: the given ${escaped(Description)} is ` + (
        Expectation == null
        ? 'either not a list or contains an invalid number of elements'
        : 'no ' + escaped(Expectation)
      )
    )
  }
  export const expectedList = expectList

/**** allow[ed]ListSatisfying ****/

  export const allowListSatisfying = /*#__PURE__*/ allowVariantOf(
    expectListSatisfying, 'allowListSatisfying'
  ), allowedListSatisfying = allowListSatisfying

/**** expect[ed]ListSatisfying ****/

  export function expectListSatisfying (
    Description:string, Argument:any, Validator:(Value:any) => boolean,
    Expectation?:string, minLength?:number, maxLength?:number
  ):any[] {
    if (Argument == null) missingArgument(Description)

    if (ValueIsListSatisfying(Argument,Validator, minLength,maxLength)) {
      return Argument
    }
    throwError(
      `InvalidArgument: the given ${escaped(Description)} is ` + (
        Expectation == null
        ? 'either not a list or contains invalid elements'
        : 'no ' + escaped(Expectation)
      )
    )
  }
  export const expectedListSatisfying = expectListSatisfying

/**** allow/expect[ed]ListOf ****/

  export const allowListOf = /*#__PURE__*/ allowVariantOf(
    expectListOf, 'allowListOf'
  ), allowedListOf = allowListOf

  export function expectListOf (
    Description:string, Argument:any, ValueList:any[]
  ):any[] {
    if (Argument == null) missingArgument(Description)

    if (ValueIsListOf(Argument,ValueList)) { return Argument }
    throwError(`InvalidArgument: the given value is no ${escaped(Description)}`)
  }
  export const expectedListOf = expectListOf

/**** allow[ed]InstanceOf ****/

  export const allowInstanceOf = /*#__PURE__*/ allowVariantOf(
    expectInstanceOf, 'allowInstanceOf'
  ), allowedInstanceOf = allowInstanceOf

/**** expect[ed]InstanceOf ****/

  export function expectInstanceOf (
    Description:string, Argument:any, constructor:Function, Expectation:string
  ):any {
    if (Argument == null) missingArgument(Description)

    if (Argument instanceof constructor) { return Argument }
    throwError(
      `InvalidArgument: the given ${escaped(Description)} is no ${escaped(Expectation)}`
    )
  }
  export const expectedInstanceOf = expectInstanceOf

/**** allow[ed]ValueInheritingFrom ****/

  export const allowValueInheritingFrom = /*#__PURE__*/ allowVariantOf(
    expectValueInheritingFrom, 'allowValueInheritingFrom'
  ), allowedValueInheritingFrom = allowValueInheritingFrom

/**** expect[ed]ValueInheritingFrom ****/

  export function expectValueInheritingFrom (
    Description:string, Argument:any, prototype:any, Expectation:string
  ):any {
    if (Argument == null) missingArgument(Description)

    if (prototype.isPrototypeOf(Argument)) { return Argument }
    throwError(
      `InvalidArgument: the given ${escaped(Description)} is no ${escaped(Expectation)}`
    )
  }
  export const expectedValueInheritingFrom = expectValueInheritingFrom

/**** allow/expect[ed]Date ****/

  export const allowDate = /*#__PURE__*/ ValidatorForClassifier<Date>(
    ValueIsDate, acceptNil, 'JavaScript Date object'
  ), allowedDate = allowDate

  export const expectDate = /*#__PURE__*/ ValidatorForClassifier<Date>(
    ValueIsDate, rejectNil, 'JavaScript Date object'
  ), expectedDate = expectDate

/**** allow/expect[ed]Error ****/

  export const allowError = /*#__PURE__*/ ValidatorForClassifier<Error>(
    ValueIsError, acceptNil, 'JavaScript Error object'
  ), allowedError = allowError

  export const expectError = /*#__PURE__*/ ValidatorForClassifier<Error>(
    ValueIsError, rejectNil, 'JavaScript Error object'
  ), expectedError = expectError

/**** allow/expect[ed]Promise ****/

  export const allowPromise = /*#__PURE__*/ ValidatorForClassifier<Promise<any>>(
    ValueIsPromise, acceptNil, 'JavaScript Promise (or "Thenable") object'
  ), allowedPromise = allowPromise

  export const expectPromise = /*#__PURE__*/ ValidatorForClassifier<Promise<any>>(
    ValueIsPromise, rejectNil, 'JavaScript Promise (or "Thenable") object'
  ), expectedPromise = expectPromise

/**** allow/expect[ed]RegExp ****/

  export const allowRegExp = /*#__PURE__*/ ValidatorForClassifier<RegExp>(
    ValueIsRegExp, acceptNil, 'JavaScript RegExp object'
  ), allowedRegExp = allowRegExp

  export const expectRegExp = /*#__PURE__*/ ValidatorForClassifier<RegExp>(
    ValueIsRegExp, rejectNil, 'JavaScript RegExp object'
  ), expectedRegExp = expectRegExp

/**** allow[ed]OneOf ****/

  export const allowOneOf = /*#__PURE__*/ allowVariantOf(
    expectOneOf, 'allowOneOf'
  ), allowedOneOf = allowOneOf

/**** expect[ed]OneOf ****/

  export function expectOneOf (
    Description:string, Argument:any, ValueList:any[]
  ):any {
    if (Argument == null) missingArgument(Description)

    if (ValueIsOneOf(Argument,ValueList)) {
      return unboxed(Argument)     // unboxes primitives - but nothing else, as
    }        // "valueOf" may return other values for other objects (e.g. Dates)
    throwError(
      `InvalidArgument: the given ${escaped(Description)} is not among the supported values`
    )
  }
  export const expectedOneOf = expectOneOf

/**** allow/expect[ed]Color ****/

  export const allowColor = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsColor, acceptNil, 'CSS color specification'
  ), allowedColor = allowColor

  export const expectColor = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsColor, rejectNil, 'CSS color specification'
  ), expectedColor = expectColor

/**** allow/expect[ed]EMailAddress ****/

  export const allowEMailAddress = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsEMailAddress, acceptNil, 'EMail address'
  ), allowedEMailAddress = allowEMailAddress

  export const expectEMailAddress = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsEMailAddress, rejectNil, 'EMail address'
  ), expectedEMailAddress = expectEMailAddress

/**** allow/expect[ed]URL ****/

  export const allowURL = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsURL, acceptNil, 'URL'
  ), allowedURL = allowURL

  export const expectURL = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsURL, rejectNil, 'URL'
  ), expectedURL = expectURL

/**** allow[ed]AbsoluteURL ****/

  export const allowAbsoluteURL = /*#__PURE__*/ allowVariantOf(
    expectAbsoluteURL, 'allowAbsoluteURL'
  ), allowedAbsoluteURL = allowAbsoluteURL

/**** expect[ed]AbsoluteURL ****/

  export function expectAbsoluteURL (
    Description:string, Argument:any, allowedProtocols?:string[]
  ):string {
    if (Argument == null) missingArgument(Description)

    if (ValueIsAbsoluteURL(Argument,allowedProtocols)) {
      return Argument.valueOf()
    }
    throwError(
      `InvalidArgument: the given ${escaped(Description)} is no valid absolute URL`
    )
  }
  export const expectedAbsoluteURL = expectAbsoluteURL

/**** allow/expect[ed]PhoneNumber ****/

  export const allowPhoneNumber = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsPhoneNumber, acceptNil, 'phone number'
  ), allowedPhoneNumber = allowPhoneNumber

  export const expectPhoneNumber = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsPhoneNumber, rejectNil, 'phone number'
  ), expectedPhoneNumber = expectPhoneNumber

/**** allow/expect[ed]E164PhoneNumber ****/

  export const allowE164PhoneNumber = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsE164PhoneNumber, acceptNil, 'phone number in E.164 format'
  ), allowedE164PhoneNumber = allowE164PhoneNumber

  export const expectE164PhoneNumber = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsE164PhoneNumber, rejectNil, 'phone number in E.164 format'
  ), expectedE164PhoneNumber = expectE164PhoneNumber

/**** allow/expect[ed]BigInt ****/

  export const allowBigInt = /*#__PURE__*/ ValidatorForClassifier<bigint>(
    ValueIsBigInt, acceptNil, 'BigInt value'
  ), allowedBigInt = allowBigInt

  export const expectBigInt = /*#__PURE__*/ ValidatorForClassifier<bigint>(
    ValueIsBigInt, rejectNil, 'BigInt value'
  ), expectedBigInt = expectBigInt

/**** allow/expect[ed]Symbol ****/

  export const allowSymbol = /*#__PURE__*/ ValidatorForClassifier<symbol>(
    ValueIsSymbol, acceptNil, 'symbol'
  ), allowedSymbol = allowSymbol

  export const expectSymbol = /*#__PURE__*/ ValidatorForClassifier<symbol>(
    ValueIsSymbol, rejectNil, 'symbol'
  ), expectedSymbol = expectSymbol

/**** allow/expect[ed]Map ****/

  export const allowMap = /*#__PURE__*/ ValidatorForClassifier<Map<any,any>>(
    ValueIsMap, acceptNil, 'JavaScript Map'
  ), allowedMap = allowMap

  export const expectMap = /*#__PURE__*/ ValidatorForClassifier<Map<any,any>>(
    ValueIsMap, rejectNil, 'JavaScript Map'
  ), expectedMap = expectMap

/**** allow/expect[ed]Set ****/

  export const allowSet = /*#__PURE__*/ ValidatorForClassifier<Set<any>>(
    ValueIsSet, acceptNil, 'JavaScript Set'
  ), allowedSet = allowSet

  export const expectSet = /*#__PURE__*/ ValidatorForClassifier<Set<any>>(
    ValueIsSet, rejectNil, 'JavaScript Set'
  ), expectedSet = expectSet

/**** allow/expect[ed]TypedArray ****/

  export const allowTypedArray = /*#__PURE__*/ ValidatorForClassifier<TypedArray>(
    ValueIsTypedArray, acceptNil, 'typed array'
  ), allowedTypedArray = allowTypedArray

  export const expectTypedArray = /*#__PURE__*/ ValidatorForClassifier<TypedArray>(
    ValueIsTypedArray, rejectNil, 'typed array'
  ), expectedTypedArray = expectTypedArray

/**** allow/expect[ed]ArrayBuffer ****/

  export const allowArrayBuffer = /*#__PURE__*/ ValidatorForClassifier<ArrayBuffer>(
    ValueIsArrayBuffer, acceptNil, 'ArrayBuffer'
  ), allowedArrayBuffer = allowArrayBuffer

  export const expectArrayBuffer = /*#__PURE__*/ ValidatorForClassifier<ArrayBuffer>(
    ValueIsArrayBuffer, rejectNil, 'ArrayBuffer'
  ), expectedArrayBuffer = expectArrayBuffer

/**** allow/expect[ed]UUID ****/

  export const allowUUID = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsUUID, acceptNil, 'UUID'
  ), allowedUUID = allowUUID

  export const expectUUID = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsUUID, rejectNil, 'UUID'
  ), expectedUUID = expectUUID

/**** allow/expect[ed]ISODate ****/

  export const allowISODate = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsISODate, acceptNil, 'ISO 8601 date'
  ), allowedISODate = allowISODate

  export const expectISODate = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsISODate, rejectNil, 'ISO 8601 date'
  ), expectedISODate = expectISODate

/**** allow/expect[ed]ISOTimestamp ****/

  export const allowISOTimestamp = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsISOTimestamp, acceptNil, 'ISO 8601 timestamp'
  ), allowedISOTimestamp = allowISOTimestamp

  export const expectISOTimestamp = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsISOTimestamp, rejectNil, 'ISO 8601 timestamp'
  ), expectedISOTimestamp = expectISOTimestamp

/**** allow/expect[ed]IPv4Address ****/

  export const allowIPv4Address = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsIPv4Address, acceptNil, 'IPv4 address'
  ), allowedIPv4Address = allowIPv4Address

  export const expectIPv4Address = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsIPv4Address, rejectNil, 'IPv4 address'
  ), expectedIPv4Address = expectIPv4Address

/**** allow/expect[ed]IPv6Address ****/

  export const allowIPv6Address = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsIPv6Address, acceptNil, 'IPv6 address'
  ), allowedIPv6Address = allowIPv6Address

  export const expectIPv6Address = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsIPv6Address, rejectNil, 'IPv6 address'
  ), expectedIPv6Address = expectIPv6Address

/**** allow/expect[ed]HostName ****/

  export const allowHostName = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsHostName, acceptNil, 'host name'
  ), allowedHostName = allowHostName

  export const expectHostName = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsHostName, rejectNil, 'host name'
  ), expectedHostName = expectHostName

/**** allow/expect[ed]PortNumber ****/

  export const allowPortNumber = /*#__PURE__*/ ValidatorForClassifier<number>(
    ValueIsPortNumber, acceptNil, 'port number'
  ), allowedPortNumber = allowPortNumber

  export const expectPortNumber = /*#__PURE__*/ ValidatorForClassifier<number>(
    ValueIsPortNumber, rejectNil, 'port number'
  ), expectedPortNumber = expectPortNumber

/**** allow/expect[ed]SerializableValue ****/

  export const allowSerializableValue = /*#__PURE__*/ ValidatorForClassifier(
    ValueIsSerializableValue, acceptNil, 'serializable value'
  ), allowedSerializableValue = allowSerializableValue

  export const expectSerializableValue = /*#__PURE__*/ ValidatorForClassifier(
    ValueIsSerializableValue, rejectNil, 'serializable value'
  ), expectedSerializableValue = expectSerializableValue

/**** allow/expect[ed]SerializableObject ****/

  export const allowSerializableObject = /*#__PURE__*/ ValidatorForClassifier(
    ValueIsSerializableObject, acceptNil, 'serializable object'
  ), allowedSerializableObject = allowSerializableObject

  export const expectSerializableObject = /*#__PURE__*/ ValidatorForClassifier(
    ValueIsSerializableObject, rejectNil, 'serializable object'
  ), expectedSerializableObject = expectSerializableObject

/**** allow/expect[ed]JSONString ****/

  export const allowJSONString = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsJSONString, acceptNil, 'JSON string'
  ), allowedJSONString = allowJSONString

  export const expectJSONString = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsJSONString, rejectNil, 'JSON string'
  ), expectedJSONString = expectJSONString

/**** allow/expect[ed]Base64 ****/

  export const allowBase64 = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsBase64, acceptNil, 'Base64-encoded string'
  ), allowedBase64 = allowBase64

  export const expectBase64 = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsBase64, rejectNil, 'Base64-encoded string'
  ), expectedBase64 = expectBase64

/**** allow/expect[ed]HexString ****/

  export const allowHexString = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsHexString, acceptNil, 'hexadecimal string'
  ), allowedHexString = allowHexString

  export const expectHexString = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsHexString, rejectNil, 'hexadecimal string'
  ), expectedHexString = expectHexString

/**** allow/expect[ed]Identifier ****/

  export const allowIdentifier = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsIdentifier, acceptNil, 'JavaScript identifier'
  ), allowedIdentifier = allowIdentifier

  export const expectIdentifier = /*#__PURE__*/ ValidatorForClassifier<string>(
    ValueIsIdentifier, rejectNil, 'JavaScript identifier'
  ), expectedIdentifier = expectIdentifier

/**** escaped - escapes all control characters in a given string ****/

  const EscSequenceSource = (         // core of several escaping patterns below
    String.raw`\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|` +
    String.raw`\\u\{[0-9a-fA-F]+\}|\\[0bfnrtv'"\\\/]`
  )
  const EscSequenceScanPattern = new RegExp(EscSequenceSource + '?','g')
  const CtrlCharCodePattern    = /[\x00-\x1f\x7f-\x9f]/g

  const CtrlCharEscapeSet:{ [Char:string]:string } = {
    '\0':'\\0', '\b':'\\b', '\f':'\\f', '\n':'\\n',
    '\r':'\\r', '\t':'\\t', '\v':'\\v'
  }

  function escapedCtrlChar (Char:string):string {
    return CtrlCharEscapeSet[Char] ?? (
      '\\x' + Char.charCodeAt(0).toString(16).padStart(2,'0')
    )
  }

  export function escaped (Text:string):string {
    return Text
      .replace(EscSequenceScanPattern, (Match) => (
        Match === '\\' ? '\\\\' : Match
      ))
      .replace(CtrlCharCodePattern, escapedCtrlChar)
  }

/**** unescaped - evaluates all escape sequences in a given string ****/

  const EscSequenceEvalPattern = new RegExp(EscSequenceSource,'g')

  const EscapeSequenceSet:{ [Sequence:string]:string } = {
    ...Object.fromEntries(Object.entries(CtrlCharEscapeSet).map(
      ([ Char,Sequence ]) => [ Sequence,Char ]
    )),
    "\\'":"'", '\\"':'"', '\\\\':'\\'
  }

  function unescapedCodePoint (Match:string):string {
    const CodePoint = (
      Match.charAt(2) === '{'
      ? parseInt(Match.slice(3,-1),16)          // handles "\u{...}" escapes
      : parseInt(Match.slice(2),16)          // handles "\xNN" and "\uNNNN"
    )
    return (
      CodePoint <= 0x10FFFF ? String.fromCodePoint(CodePoint) : Match
    )                       // leaves invalid code point escapes untouched
  }

  export function unescaped (Text:string):string {
    return Text.replace(EscSequenceEvalPattern, (Match) => (
      EscapeSequenceSet[Match] ?? unescapedCodePoint(Match)
    ))
  }

/**** quotable - makes a given string ready to be put in quotes ****/

  const EscSeqOrSglQuotePattern  = new RegExp(EscSequenceSource + "?|'",'g')
  const EscSeqOrDblQuotePattern  = new RegExp(EscSequenceSource + '?|"','g')
  const EscSeqOrBackQuotePattern = new RegExp(EscSequenceSource + '?|`|\\$\\{','g')

  const QuoteEscapeSet:{ [Char:string]:string } = {
    "'":"\\'", '"':'\\"', '`':'\\`', '${':'\\${', '\\':'\\\\'
  }

  export type QuoteCharacter = '"' | "'" | '`'

  export function quotable (Text:string, Quote:QuoteCharacter = '"'):string {
    const QuotePattern = (
      Quote === "'"
      ? EscSeqOrSglQuotePattern
      : (Quote === '`' ? EscSeqOrBackQuotePattern : EscSeqOrDblQuotePattern)
    )
    return Text
      .replace(QuotePattern, (Match) => QuoteEscapeSet[Match] ?? Match)
      .replace(CtrlCharCodePattern, escapedCtrlChar)
  }

/**** quoted ****/

  export function quoted (Text:string, Quote:QuoteCharacter = '"'):string {
    return Quote + quotable(Text,Quote) + Quote
  }

/**** HTMLsafe ****/
// warning: any "EOLReplacement" is inserted as given - it must be trusted HTML!

  const HTMLSpecialsPattern = /[&<>"'\x00-\x1F\x7F-\x9F\\]/g

  export function HTMLsafe (Argument:string, EOLReplacement?:string):string {
    EOLReplacement = (EOLReplacement || '').trim() || '<br/>'
    return Argument.replace(HTMLSpecialsPattern, (Match) => {
      switch (Match) {
        case '&':  return '&amp;'
        case '<':  return '&lt;'
        case '>':  return '&gt;'
        case '"':  return '&quot;'
        case "'":  return '&apos;'
        case '\b': return '&#92;b'
        case '\f': return '&#92;f'
        case '\n': return EOLReplacement as string
        case '\r': return '&#92;r'
        case '\t': return '&#92;t'
        case '\v': return '&#92;v'
        case '\\': return '&#92;'
        default: {
          const Result = Match.charCodeAt(0).toString(16)
          return '&#x' + Result.padStart(4,'0') + ';'
        }
      }
    })
  }

/**** MarkDownSafe ****/
// warning: any "EOLReplacement" is inserted as given - it must be trusted HTML
// and must not contain any MarkDown-relevant characters!

  const MarkDownSpecialsPattern = /[:`*_\[\]#|~]/g

  export function MarkDownSafe (Argument:string, EOLReplacement?:string):string {
    return HTMLsafe(Argument, EOLReplacement).replace(
      MarkDownSpecialsPattern, (Match) => '&#' + Match.charCodeAt(0) + ';'
    )
  }

/**** ValuesDiffer ****/

  export type ValuesDifferMode = 'by-value'|'by-reference'
                       // mode 'by-value' is deprecated (and behaves as default)
  export interface ValuesDifferOptions {
    Mode?:ValuesDifferMode
    Tolerance?:number              // absolute tolerance for number comparisons
  }

  export function ValuesDiffer (
    thisValue:any, otherValue:any,
    ModeOrOptions?:ValuesDifferMode|ValuesDifferOptions,
    visitedPairs?:WeakMap<object,WeakSet<object>>     // for internal use only
  ):boolean {
    if (thisValue === otherValue) { return false }

    let Mode:ValuesDifferMode|undefined = undefined
    let Tolerance:number|undefined      = undefined
    if (typeof ModeOrOptions === 'string') {  // narrows in any TS version, with
      Mode = ModeOrOptions                    // or without "strictNullChecks"
    } else if (ModeOrOptions != null) {
      Mode = ModeOrOptions.Mode; Tolerance = ModeOrOptions.Tolerance
    }

    let thisType = typeof thisValue
    if (thisType !== typeof otherValue) { return true }

    /**** ArraysDiffer ****/

      function ArraysDiffer (
        thisArray:any[], otherArray:any[],
        ModeOrOptions:ValuesDifferMode|ValuesDifferOptions|undefined,
        visitedPairs:WeakMap<object,WeakSet<object>>
      ):boolean {
        if (! Array.isArray(otherArray)) { return true }

        if (thisArray.length !== otherArray.length) { return true }

        for (let i = 0, l = thisArray.length; i < l; i++) {
          if (ValuesDiffer(thisArray[i],otherArray[i],ModeOrOptions,visitedPairs)) {
            return true
          }
        }

        return false
      }

    /**** MapsDiffer - keys are matched by identity, values recursively ****/

      function MapsDiffer (
        thisMap:Map<any,any>, otherMap:any,
        ModeOrOptions:ValuesDifferMode|ValuesDifferOptions|undefined,
        visitedPairs:WeakMap<object,WeakSet<object>>
      ):boolean {
        if (! (otherMap instanceof Map))    { return true }
        if (thisMap.size !== otherMap.size) { return true }

        let Difference = false
        thisMap.forEach(function (Value:any, Key:any) {
          if (! Difference) {
            Difference = (
              ! otherMap.has(Key) ||
              ValuesDiffer(Value,otherMap.get(Key),ModeOrOptions,visitedPairs)
            )
          }
        })
        return Difference
      }

    /**** SetsDiffer - elements are matched by identity ****/

      function SetsDiffer (thisSet:Set<any>, otherSet:any):boolean {
        if (! (otherSet instanceof Set))    { return true }
        if (thisSet.size !== otherSet.size) { return true }

        let Difference = false
        thisSet.forEach(function (Value:any) {
          if (! Difference && ! otherSet.has(Value)) { Difference = true }
        })
        return Difference
      }

    /**** TypedArraysDiffer - typed arrays are compared byte-wise ****/

      function TypedArraysDiffer (thisArray:any, otherArray:any):boolean {
        if (
          Object.getPrototypeOf(thisArray) !== Object.getPrototypeOf(otherArray)
        ) { return true }

        if (thisArray.byteLength !== otherArray.byteLength) { return true }

        let thisView = new Uint8Array(
          thisArray.buffer, thisArray.byteOffset, thisArray.byteLength
        )
        let otherView = new Uint8Array(
          otherArray.buffer, otherArray.byteOffset, otherArray.byteLength
        )

        for (let i = 0, l = thisView.length; i < l; i++) {
          if (thisView[i] !== otherView[i]) { return true }
        }
        return false
      }

    /**** ObjectsDiffer ****/

      function ObjectsDiffer (
        thisObject:any, otherObject:any,
        ModeOrOptions:ValuesDifferMode|ValuesDifferOptions|undefined,
        visitedPairs:WeakMap<object,WeakSet<object>>
      ):boolean {
        if (Object.getPrototypeOf(thisObject) !== Object.getPrototypeOf(otherObject)) {
          return true
        }

        for (let key in thisObject) {
          if (! (key in otherObject)) { return true }
        }

        for (let key in otherObject) {
          if (! (key in thisObject)) { return true }

          if (ValuesDiffer(thisObject[key],otherObject[key],ModeOrOptions,visitedPairs)) {
            return true
          }
        }

        return false
      }


    switch (thisType) {
      case 'undefined':
      case 'boolean':
      case 'string':
      case 'bigint':
      case 'symbol':
      case 'function': return true   // most primitives are compared using "==="
      case 'number': {
        if (isNaN(thisValue) !== isNaN(otherValue)) { return true }

        if (Tolerance != null) {                  // explicit absolute tolerance
          return (Math.abs(thisValue-otherValue) > Tolerance)
        }

        const relTolerance = Number.EPSILON * Math.max( // default is relative!
          1, Math.abs(thisValue), Math.abs(otherValue)
        )
        return (Math.abs(thisValue-otherValue) > relTolerance)
      }
      case 'object':
        if (thisValue  == null) { return true }  // since "other_value" != null!
        if (otherValue == null) { return true }   // since "this_value" != null!

        if (                    // boxed primitives are compared by their values
          (thisValue instanceof Boolean) ||
          (thisValue instanceof Number) ||
          (thisValue instanceof String)
        ) {
          if (Mode === 'by-reference') { return true }  // s.a. thisValue !== otherValue
          return (
            (Object.getPrototypeOf(thisValue) !== Object.getPrototypeOf(otherValue)) ||
            (thisValue.valueOf() !== otherValue.valueOf())
          )
        }

        if (thisValue instanceof Date) {   // Dates are compared by their times
          if (Mode === 'by-reference')        { return true }
          if (! (otherValue instanceof Date)) { return true }

          let thisTime = thisValue.getTime(), otherTime = otherValue.getTime()
          return (
            (thisTime !== otherTime) && ! (isNaN(thisTime) && isNaN(otherTime))
          )                          // two "invalid" Dates are considered equal
        }

        if (thisValue instanceof RegExp) {   // RegExps: compare source + flags
          if (Mode === 'by-reference') { return true }
          return (
            ! (otherValue instanceof RegExp) ||
            (thisValue.source !== otherValue.source) ||
            (thisValue.flags  !== otherValue.flags)
          )
        }

      /**** cycle detection - matching cycles are considered "equal" ****/

        if (visitedPairs == null) { visitedPairs = new WeakMap() }

        let visitedPartners = visitedPairs.get(thisValue)
        if (visitedPartners == null) {
          visitedPairs.set(thisValue, visitedPartners = new WeakSet())
        }
        if (visitedPartners.has(otherValue)) { return false }
        visitedPartners.add(otherValue)

        if (Array.isArray(thisValue)) {
          return ArraysDiffer(thisValue,otherValue,ModeOrOptions,visitedPairs)
        }

        if (thisValue instanceof Map) {
          if (Mode === 'by-reference') { return true }
          return MapsDiffer(thisValue,otherValue,ModeOrOptions,visitedPairs)
        }

        if (thisValue instanceof Set) {
          if (Mode === 'by-reference') { return true }
          return SetsDiffer(thisValue,otherValue)
        }

        if (ArrayBuffer.isView(thisValue)) {    // typed arrays incl. DataViews
          if (Mode === 'by-reference') { return true }
          return TypedArraysDiffer(thisValue,otherValue)
        }

        return (
          Mode === 'by-reference'
          ? true                           // because (thisValue !== otherValue)
          : ObjectsDiffer(thisValue,otherValue,ModeOrOptions,visitedPairs)
        )
      default: return true                          // unsupported property type
    }
  }

/**** ValuesAreEqual ****/

  export function ValuesAreEqual (
    thisValue:any, otherValue:any,
    ModeOrOptions?:ValuesDifferMode|ValuesDifferOptions
  ):boolean {
    return ! ValuesDiffer(thisValue,otherValue,ModeOrOptions)
  }

/**** ObjectIsEmpty ****/

  export function ObjectIsEmpty (Candidate:any):boolean {
    expectObject('candidate',Candidate)
    for (let Key in Candidate) {
      if (Object_hasOwnProperty(Candidate,Key)) {
        return false
      }
    }
    return true
  }

/**** ObjectIsNotEmpty ****/

  export function ObjectIsNotEmpty (Candidate:any):boolean {
    return ! ObjectIsEmpty(Candidate)
  }

/**** StringIsEmpty ****/

  export function StringIsEmpty (Candidate:string):boolean {
    return /^\s*$/.test(Candidate)
  }

/**** StringIsNotEmpty ****/

  export function StringIsNotEmpty (Candidate:string):boolean {
    return ! StringIsEmpty(Candidate)
  }

/**** constrained ****/

  export function constrained (
    Value:number, Minimum:number = -Infinity, Maximum:number = Infinity
  ):number {
    return Math.max(Minimum, Math.min(Value, Maximum))
  }

//------------------------------------------------------------------------------
//--                             Color Utilities                              --
//------------------------------------------------------------------------------

// built-in color names (see http://www.w3.org/TR/SVG/types.html#ColorKeywords) ----

  export const ColorSet = /*#__PURE__*/ Object.freeze({
           transparent:'rgba(0,0,0,0.0)',
             aliceblue:'rgba(240,248,255,1.0)',         lightpink:'rgba(255,182,193,1.0)',
          antiquewhite:'rgba(250,235,215,1.0)',       lightsalmon:'rgba(255,160,122,1.0)',
                  aqua:'rgba(0,255,255,1.0)',       lightseagreen:'rgba(32,178,170,1.0)',
            aquamarine:'rgba(127,255,212,1.0)',      lightskyblue:'rgba(135,206,250,1.0)',
                 azure:'rgba(240,255,255,1.0)',    lightslategray:'rgba(119,136,153,1.0)',
                 beige:'rgba(245,245,220,1.0)',    lightslategrey:'rgba(119,136,153,1.0)',
                bisque:'rgba(255,228,196,1.0)',    lightsteelblue:'rgba(176,196,222,1.0)',
                 black:'rgba(0,0,0,1.0)',             lightyellow:'rgba(255,255,224,1.0)',
        blanchedalmond:'rgba(255,235,205,1.0)',              lime:'rgba(0,255,0,1.0)',
                  blue:'rgba(0,0,255,1.0)',             limegreen:'rgba(50,205,50,1.0)',
            blueviolet:'rgba(138,43,226,1.0)',              linen:'rgba(250,240,230,1.0)',
                 brown:'rgba(165,42,42,1.0)',             magenta:'rgba(255,0,255,1.0)',
             burlywood:'rgba(222,184,135,1.0)',            maroon:'rgba(128,0,0,1.0)',
             cadetblue:'rgba(95,158,160,1.0)',   mediumaquamarine:'rgba(102,205,170,1.0)',
            chartreuse:'rgba(127,255,0,1.0)',          mediumblue:'rgba(0,0,205,1.0)',
             chocolate:'rgba(210,105,30,1.0)',       mediumorchid:'rgba(186,85,211,1.0)',
                 coral:'rgba(255,127,80,1.0)',       mediumpurple:'rgba(147,112,219,1.0)',
        cornflowerblue:'rgba(100,149,237,1.0)',    mediumseagreen:'rgba(60,179,113,1.0)',
              cornsilk:'rgba(255,248,220,1.0)',   mediumslateblue:'rgba(123,104,238,1.0)',
               crimson:'rgba(220,20,60,1.0)',   mediumspringgreen:'rgba(0,250,154,1.0)',
                  cyan:'rgba(0,255,255,1.0)',     mediumturquoise:'rgba(72,209,204,1.0)',
              darkblue:'rgba(0,0,139,1.0)',       mediumvioletred:'rgba(199,21,133,1.0)',
              darkcyan:'rgba(0,139,139,1.0)',        midnightblue:'rgba(25,25,112,1.0)',
         darkgoldenrod:'rgba(184,134,11,1.0)',          mintcream:'rgba(245,255,250,1.0)',
              darkgray:'rgba(169,169,169,1.0)',         mistyrose:'rgba(255,228,225,1.0)',
             darkgreen:'rgba(0,100,0,1.0)',              moccasin:'rgba(255,228,181,1.0)',
              darkgrey:'rgba(169,169,169,1.0)',       navajowhite:'rgba(255,222,173,1.0)',
             darkkhaki:'rgba(189,183,107,1.0)',              navy:'rgba(0,0,128,1.0)',
           darkmagenta:'rgba(139,0,139,1.0)',             oldlace:'rgba(253,245,230,1.0)',
        darkolivegreen:'rgba(85,107,47,1.0)',               olive:'rgba(128,128,0,1.0)',
            darkorange:'rgba(255,140,0,1.0)',           olivedrab:'rgba(107,142,35,1.0)',
            darkorchid:'rgba(153,50,204,1.0)',             orange:'rgba(255,165,0,1.0)',
               darkred:'rgba(139,0,0,1.0)',             orangered:'rgba(255,69,0,1.0)',
            darksalmon:'rgba(233,150,122,1.0)',            orchid:'rgba(218,112,214,1.0)',
          darkseagreen:'rgba(143,188,143,1.0)',     palegoldenrod:'rgba(238,232,170,1.0)',
         darkslateblue:'rgba(72,61,139,1.0)',           palegreen:'rgba(152,251,152,1.0)',
         darkslategray:'rgba(47,79,79,1.0)',        paleturquoise:'rgba(175,238,238,1.0)',
         darkslategrey:'rgba(47,79,79,1.0)',        palevioletred:'rgba(219,112,147,1.0)',
         darkturquoise:'rgba(0,206,209,1.0)',          papayawhip:'rgba(255,239,213,1.0)',
            darkviolet:'rgba(148,0,211,1.0)',           peachpuff:'rgba(255,218,185,1.0)',
              deeppink:'rgba(255,20,147,1.0)',               peru:'rgba(205,133,63,1.0)',
           deepskyblue:'rgba(0,191,255,1.0)',                pink:'rgba(255,192,203,1.0)',
               dimgray:'rgba(105,105,105,1.0)',              plum:'rgba(221,160,221,1.0)',
               dimgrey:'rgba(105,105,105,1.0)',        powderblue:'rgba(176,224,230,1.0)',
            dodgerblue:'rgba(30,144,255,1.0)',             purple:'rgba(128,0,128,1.0)',
             firebrick:'rgba(178,34,34,1.0)',                 red:'rgba(255,0,0,1.0)',
           floralwhite:'rgba(255,250,240,1.0)',         rosybrown:'rgba(188,143,143,1.0)',
           forestgreen:'rgba(34,139,34,1.0)',           royalblue:'rgba(65,105,225,1.0)',
               fuchsia:'rgba(255,0,255,1.0)',         saddlebrown:'rgba(139,69,19,1.0)',
             gainsboro:'rgba(220,220,220,1.0)',            salmon:'rgba(250,128,114,1.0)',
            ghostwhite:'rgba(248,248,255,1.0)',        sandybrown:'rgba(244,164,96,1.0)',
                  gold:'rgba(255,215,0,1.0)',            seagreen:'rgba(46,139,87,1.0)',
             goldenrod:'rgba(218,165,32,1.0)',           seashell:'rgba(255,245,238,1.0)',
                  gray:'rgba(128,128,128,1.0)',            sienna:'rgba(160,82,45,1.0)',
                 green:'rgba(0,128,0,1.0)',                silver:'rgba(192,192,192,1.0)',
           greenyellow:'rgba(173,255,47,1.0)',            skyblue:'rgba(135,206,235,1.0)',
                  grey:'rgba(128,128,128,1.0)',         slateblue:'rgba(106,90,205,1.0)',
              honeydew:'rgba(240,255,240,1.0)',         slategray:'rgba(112,128,144,1.0)',
               hotpink:'rgba(255,105,180,1.0)',         slategrey:'rgba(112,128,144,1.0)',
             indianred:'rgba(205,92,92,1.0)',                snow:'rgba(255,250,250,1.0)',
                indigo:'rgba(75,0,130,1.0)',          springgreen:'rgba(0,255,127,1.0)',
                 ivory:'rgba(255,255,240,1.0)',         steelblue:'rgba(70,130,180,1.0)',
                 khaki:'rgba(240,230,140,1.0)',               tan:'rgba(210,180,140,1.0)',
              lavender:'rgba(230,230,250,1.0)',              teal:'rgba(0,128,128,1.0)',
         lavenderblush:'rgba(255,240,245,1.0)',           thistle:'rgba(216,191,216,1.0)',
             lawngreen:'rgba(124,252,0,1.0)',              tomato:'rgba(255,99,71,1.0)',
          lemonchiffon:'rgba(255,250,205,1.0)',         turquoise:'rgba(64,224,208,1.0)',
             lightblue:'rgba(173,216,230,1.0)',            violet:'rgba(238,130,238,1.0)',
            lightcoral:'rgba(240,128,128,1.0)',             wheat:'rgba(245,222,179,1.0)',
             lightcyan:'rgba(224,255,255,1.0)',             white:'rgba(255,255,255,1.0)',
  lightgoldenrodyellow:'rgba(250,250,210,1.0)',        whitesmoke:'rgba(245,245,245,1.0)',
             lightgray:'rgba(211,211,211,1.0)',            yellow:'rgba(255,255,0,1.0)',
            lightgreen:'rgba(144,238,144,1.0)',       yellowgreen:'rgba(154,205,50,1.0)',
             lightgrey:'rgba(211,211,211,1.0)',
  })

/**** patterns for the various CSS color notations ****/

  const HexColor6Pattern = /^#[a-fA-F0-9]{6}$/
  const HexColor8Pattern = /^#[a-fA-F0-9]{8}$/

  const RGBColorPattern  =                                        // not perfect
    /^rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)$/i
  const RGBAColorPattern =                                        // not perfect
    /^rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([01]?[.][0-9]+|[01])\)$/i

/**** HexColor - converts a given color to #rrggbbaa ****/

  export function HexColor (Color:string):string {
    let lowerColor = Color.toLowerCase()
    if (ColorSet.hasOwnProperty(lowerColor)) {
// @ts-ignore TS dislikes indexing with literal keys
      Color = ColorSet[lowerColor]
    } // do not return here as color is now in RGBA format

    if (HexColor6Pattern.test(Color)) { return Color + 'FF' }
    if (HexColor8Pattern.test(Color)) { return Color }

    function dec2hex (Value:number):string {
      Value = Math.max(0, Math.min(255, Math.round(Value)))
      return Value.toString(16).toUpperCase().padStart(2,'0')
    }

    let Match = RGBColorPattern.exec(Color)
    if (Match != null) {
      return ('#' +
        dec2hex(parseInt(Match[1],10)) +
        dec2hex(parseInt(Match[2],10)) +
        dec2hex(parseInt(Match[3],10)) + 'FF'
      )
    }

    Match = RGBAColorPattern.exec(Color)
    if (Match != null) {
      return ('#' +
        dec2hex(parseInt(Match[1],10)) +
        dec2hex(parseInt(Match[2],10)) +
        dec2hex(parseInt(Match[3],10)) +
        dec2hex(parseFloat(Match[4])*255)
      )
    }

    throwError('InvalidArgument: the given Value is not a valid CSS Color specification')
  }

/**** RGBAColor - converts a given color to RGBA(r,g,b,a) ****/

  export function RGBAColor (Color:string):string {
    let lowerColor = Color.toLowerCase()
    if (ColorSet.hasOwnProperty(lowerColor)) {
// @ts-ignore TS dislikes indexing with literal keys
      return ColorSet[lowerColor]             // color is already in RGBA format
    }

    if (HexColor6Pattern.test(Color)) {
      return ('rgba(' +
        parseInt(Color.slice(1,3),16) + ',' +
        parseInt(Color.slice(3,5),16) + ',' +
        parseInt(Color.slice(5,7),16) + ',1' +
      ')')
    }

    if (HexColor8Pattern.test(Color)) {
      return ('rgba(' +
        parseInt(Color.slice(1,3),16) + ',' +
        parseInt(Color.slice(3,5),16) + ',' +
        parseInt(Color.slice(5,7),16) + ',' +
        (parseInt(Color.slice(7),16)/255) +
      ')')
    }

    if (RGBColorPattern.test(Color)) {
      return Color.slice(0,Color.length-1) + ',1)'
    }

    if (RGBAColorPattern.test(Color)) { return Color }

    throwError('InvalidArgument: the given Value is not a valid CSS Color specification')
  }

/**** shortHexColor - converts a given color into #RRGGBB ****/

  export function shortHexColor (Color:string):string {
    return HexColor(Color).slice(0,7)
  }
