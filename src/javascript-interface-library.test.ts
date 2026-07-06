/*******************************************************************************
*                                                                              *
*                  JavaScript Interface Library (JIL) - Tests                  *
*                                                                              *
*******************************************************************************/

  import { describe, it, expect } from 'vitest'

  import * as JIL from './javascript-interface-library'

/**** global ****/

  describe('global',() => {
    it('refers to the global object',() => {
      expect(JIL.global).to.equal(globalThis)
    })
  })

/**** object functions ****/

  describe('Object Functions',() => {
    it('Object_hasOwnProperty also works for vanilla objects',() => {
      const Vanilla = Object.create(null)
        Vanilla.foo = 42
      expect(JIL.Object_hasOwnProperty(Vanilla,'foo')).to.equal(true)
      expect(JIL.Object_hasOwnProperty(Vanilla,'bar')).to.equal(false)
      expect(JIL.Object_hasOwnProperty({ foo:42 },'foo')).to.equal(true)
      expect(JIL.Object_hasOwnProperty({},'toString')).to.equal(false)
    })

    it('Object_isPrototypeOf also works for vanilla objects',() => {
      const Prototype = Object.create(null)
      const Derived   = Object.create(Prototype)
      expect(JIL.Object_isPrototypeOf(Prototype,Derived)).to.equal(true)
      expect(JIL.Object_isPrototypeOf(Derived,Prototype)).to.equal(false)
      expect(JIL.Object_isPrototypeOf(Object.prototype,{})).to.equal(true)
    })

    it('Object_propertyIsEnumerable also works for vanilla objects',() => {
      const Vanilla = Object.create(null)
        Vanilla.visible = 1
        Object.defineProperty(Vanilla,'hidden',{ value:2, enumerable:false })
      expect(JIL.Object_propertyIsEnumerable(Vanilla,'visible')).to.equal(true)
      expect(JIL.Object_propertyIsEnumerable(Vanilla,'hidden')).to.equal(false)
    })

    it('Object_toString also works for vanilla objects',() => {
      expect(JIL.Object_toString(Object.create(null))).to.equal('[object Object]')
      expect(JIL.Object_toString({ toString:() => 'custom' })).to.equal('custom')
    })

    it('Object_toLocaleString falls back to "toLocaleString"',() => {
      expect(JIL.Object_toLocaleString(Object.create(null)))
        .to.equal('[object Object]')
      expect(JIL.Object_toLocaleString({ toLocaleString:() => 'localised' }))
        .to.equal('localised')
    })

    it('Object_valueOf also works for vanilla objects',() => {
      const Vanilla = Object.create(null)
      expect(JIL.Object_valueOf(Vanilla)).to.equal(Vanilla)
      expect(JIL.Object_valueOf({ valueOf:() => 42 })).to.equal(42)
    })
  })

/**** ObjectMergedWith ****/

  describe('ObjectMergedWith',() => {
    it('merges own properties into the target',() => {
      const Target = { a:1 }
      const Result = JIL.ObjectMergedWith(Target,{ b:2 },{ c:3 })
      expect(Result).to.equal(Target)
      expect(Target).to.deep.equal({ a:1, b:2, c:3 })
    })

    it('preserves property descriptors',() => {
      const WithGetter = { get answer () { return 42 } }
      const Target = JIL.ObjectMergedWith({},WithGetter)
      expect(typeof Object.getOwnPropertyDescriptor(Target,'answer').get)
        .to.equal('function')
    })

    it('also copies symbol keys',() => {
      const Key = Symbol('demo')
      const Target = JIL.ObjectMergedWith({},{ [Key]:42 })
      expect(Object.getOwnPropertyDescriptor(Target,Key).value).to.equal(42)
    })

    it('skips nil arguments but rejects other non-objects',() => {
      expect(JIL.ObjectMergedWith({ a:1 },null,undefined)).to.deep.equal({ a:1 })
      expect(() => JIL.ObjectMergedWith({},42)).to.throw()
    })
  })

/**** throwError ****/

  describe('throwError',() => {
    it('constructs named errors',() => {
      try {
        JIL.throwError('FooError: went wrong')
        throw new Error('throwError did not throw')
      } catch (Signal) {
        expect(Signal.name).to.equal('FooError')
        expect(Signal.message).to.equal('went wrong')
      }
    })

    it('throws plain errors for messages without a name prefix',() => {
      try {
        JIL.throwError('just went wrong')
        throw new Error('throwError did not throw')
      } catch (Signal) {
        expect(Signal.name).to.equal('Error')
        expect(Signal.message).to.equal('just went wrong')
      }
    })
  })

/**** value classification functions ****/

  describe('Value Classification Functions',() => {
    it('ValueExists/ValueIsMissing check for null and undefined',() => {
      expect(JIL.ValueExists(0)).to.equal(true)
      expect(JIL.ValueExists(null)).to.equal(false)
      expect(JIL.ValueIsMissing(undefined)).to.equal(true)
      expect(JIL.ValueIsMissing('')).to.equal(false)
    })

    it('ValueIsBoolean accepts plain and boxed booleans',() => {
      expect(JIL.ValueIsBoolean(true)).to.equal(true)
      expect(JIL.ValueIsBoolean(new Boolean(false))).to.equal(true)
      expect(JIL.ValueIsBoolean(0)).to.equal(false)
    })

    it('ValueIsNumber accepts plain and boxed numbers',() => {
      expect(JIL.ValueIsNumber(42)).to.equal(true)
      expect(JIL.ValueIsNumber(new Number(42))).to.equal(true)
      expect(JIL.ValueIsNumber('42')).to.equal(false)
    })

    it('ValueIsFiniteNumber rejects infinite values',() => {
      expect(JIL.ValueIsFiniteNumber(42)).to.equal(true)
      expect(JIL.ValueIsFiniteNumber(Infinity)).to.equal(false)
      expect(JIL.ValueIsFiniteNumber(NaN)).to.equal(false)
    })

    it('ValueIsNaN detects numeric NaN only',() => {
      expect(JIL.ValueIsNaN(NaN)).to.equal(true)
      expect(JIL.ValueIsNaN(42)).to.equal(false)
      expect(JIL.ValueIsNaN('not-a-number')).to.equal(false)
    })

    it('ValueIsNumberInRange respects inclusive and exclusive bounds',() => {
      expect(JIL.ValueIsNumberInRange(5,0,10)).to.equal(true)
      expect(JIL.ValueIsNumberInRange(0,0,10)).to.equal(true)
      expect(JIL.ValueIsNumberInRange(0,0,10,false)).to.equal(false)
      expect(JIL.ValueIsNumberInRange(11,0,10)).to.equal(false)
      expect(JIL.ValueIsNumberInRange(NaN,0,10)).to.equal(false)
      expect(JIL.ValueIsNumberInRange(new Number(0),0,10,false)).to.equal(false)
    })

    it('ValueIsInteger[InRange] classifies integral numbers',() => {
      expect(JIL.ValueIsInteger(42)).to.equal(true)
      expect(JIL.ValueIsInteger(4.2)).to.equal(false)
      expect(JIL.ValueIsIntegerInRange(5,0,10)).to.equal(true)
      expect(JIL.ValueIsIntegerInRange(11,0,10)).to.equal(false)
    })

    it('ValueIsOrdinal/Cardinal classify non-negative and positive integers',() => {
      expect(JIL.ValueIsOrdinal(0)).to.equal(true)
      expect(JIL.ValueIsOrdinal(-1)).to.equal(false)
      expect(JIL.ValueIsCardinal(1)).to.equal(true)
      expect(JIL.ValueIsCardinal(0)).to.equal(false)
    })

    it('ValueIs[NonEmpty]String treats blank strings as empty',() => {
      expect(JIL.ValueIsString('abc')).to.equal(true)
      expect(JIL.ValueIsString(42)).to.equal(false)
      expect(JIL.ValueIsEmptyString('  ')).to.equal(true)
      expect(JIL.ValueIsNonEmptyString('abc')).to.equal(true)
      expect(JIL.ValueIsNonEmptyString('  ')).to.equal(false)
    })

    it('ValueIsStringMatching applies the given pattern',() => {
      expect(JIL.ValueIsStringMatching('abc',/b/)).to.equal(true)
      expect(JIL.ValueIsStringMatching('abc',/x/)).to.equal(false)
    })

    it('ValueIsText[line] rejects control characters',() => {
      expect(JIL.ValueIsText('two\nlines')).to.equal(true)
      expect(JIL.ValueIsText('\x01')).to.equal(false)
      expect(JIL.ValueIsTextline('single line')).to.equal(true)
      expect(JIL.ValueIsTextline('two\nlines')).to.equal(false)
    })

    it('ValueIsFunction accepts any callable',() => {
      expect(JIL.ValueIsFunction(() => 42)).to.equal(true)
      expect(JIL.ValueIsFunction(Math.max)).to.equal(true)
      expect(JIL.ValueIsFunction(42)).to.equal(false)
    })

    it('ValueIsAnonymous/NamedFunction inspect the function name',() => {
      const anonymous = [ function () {} ][0]
      function named () {}

      expect(JIL.ValueIsNamedFunction(named)).to.equal(true)
      expect(JIL.ValueIsNamedFunction(anonymous)).to.equal(false)
      expect(JIL.ValueIsAnonymousFunction(anonymous)).to.equal(true)
      expect(JIL.ValueIsAnonymousFunction(named)).to.equal(false)
    })

    it('ValueIsNative/ScriptedFunction distinguish implementations',() => {
      function scripted () {}

      expect(JIL.ValueIsNativeFunction(Math.max)).to.equal(true)
      expect(JIL.ValueIsNativeFunction(scripted)).to.equal(false)
      expect(JIL.ValueIsScriptedFunction(scripted)).to.equal(true)
      expect(JIL.ValueIsScriptedFunction(Math.max)).to.equal(false)
    })

    it('bound functions do not count as "native"',() => {
      const bound = (function () {}).bind(null)
      expect(JIL.ValueIsNativeFunction(bound)).to.equal(false)
      expect(JIL.ValueIsScriptedFunction(bound)).to.equal(true)
    })

    it('ValueIsObject rejects null and primitives',() => {
      expect(JIL.ValueIsObject({})).to.equal(true)
      expect(JIL.ValueIsObject([])).to.equal(true)
      expect(JIL.ValueIsObject(null)).to.equal(false)
      expect(JIL.ValueIsObject(42)).to.equal(false)
    })

    it('ValueIsPlain/VanillaObject inspect the prototype chain',() => {
      expect(JIL.ValueIsPlainObject({})).to.equal(true)
      expect(JIL.ValueIsPlainObject(Object.create(null))).to.equal(false)
      expect(JIL.ValueIsPlainObject(new Date())).to.equal(false)
      expect(JIL.ValueIsVanillaObject(Object.create(null))).to.equal(true)
      expect(JIL.ValueIsVanillaObject({})).to.equal(false)
    })

    it('ValueIsArray matches Array.isArray',() => {
      expect(JIL.ValueIsArray([ 1,2 ])).to.equal(true)
      expect(JIL.ValueIsArray('nope')).to.equal(false)
    })

    it('ValueIsList classifies dense arrays with optional length limits',() => {
      expect(JIL.ValueIsList([ 1,2,3 ])).to.equal(true)
      expect(JIL.ValueIsList([ 1,undefined,3 ])).to.equal(false)
      expect(JIL.ValueIsList([ 1,2 ],1,3)).to.equal(true)
      expect(JIL.ValueIsList([ 1,2 ],3)).to.equal(false)
    })

    it('ValueIsListSatisfying applies the given validator',() => {
      expect(JIL.ValueIsListSatisfying([ 1,2 ],JIL.ValueIsNumber)).to.equal(true)
      expect(JIL.ValueIsListSatisfying([ 1,'x' ],JIL.ValueIsNumber)).to.equal(false)
      expect(JIL.ValueIsListSatisfying([ 1,2 ],() => undefined)).to.equal(false)
    })

    it('ValueIsInstanceOf and ValueInheritsFrom check ancestry',() => {
      expect(JIL.ValueIsInstanceOf(new Date(),Date)).to.equal(true)
      expect(JIL.ValueIsInstanceOf({},Date)).to.equal(false)

      const Prototype = { x:1 }
      expect(JIL.ValueInheritsFrom(Object.create(Prototype),Prototype))
        .to.equal(true)
      expect(JIL.ValueInheritsFrom({},Prototype)).to.equal(false)
    })

    it('ValueIsDate/Error/Promise/RegExp classify built-ins',() => {
      expect(JIL.ValueIsDate(new Date())).to.equal(true)
      expect(JIL.ValueIsDate('2026-07-03')).to.equal(false)
      expect(JIL.ValueIsError(new TypeError('demo'))).to.equal(true)
      expect(JIL.ValueIsPromise(Promise.resolve(42))).to.equal(true)
      expect(JIL.ValueIsPromise({ then:() => 42 })).to.equal(true)
      expect(JIL.ValueIsRegExp(/demo/)).to.equal(true)
    })

    it('ValueIsOneOf compares without unboxing',() => {
      expect(JIL.ValueIsOneOf(2,[ 1,2,3 ])).to.equal(true)
      expect(JIL.ValueIsOneOf(4,[ 1,2,3 ])).to.equal(false)
      expect(JIL.ValueIsOneOf(new Number(2),[ 1,2,3 ])).to.equal(false)
    })

    it('ValueIsColor matches ColorSet entries and CSS formats',() => {
      expect(JIL.ValueIsColor('transparent')).to.equal(true)
      expect(JIL.ValueIsColor('Red')).to.equal(true)
      expect(JIL.ValueIsColor('#FF0000')).to.equal(true)
      expect(JIL.ValueIsColor('rgba(240,248,255,1.0)')).to.equal(true)
      expect(JIL.ValueIsColor('rgba((0,0,0,1)')).to.equal(false)
    })

    it('ValueIsEMailAddress checks the address syntax',() => {
      expect(JIL.ValueIsEMailAddress('a.rozek@gmx.de')).to.equal(true)
      expect(JIL.ValueIsEMailAddress('John.Doe@GMX.de')).to.equal(true)
      expect(JIL.ValueIsEMailAddress('no-address')).to.equal(false)
      expect(JIL.ValueIsEMailAddress('see a@b.de inside')).to.equal(false)
    })

    it('ValueIsURL accepts URLs without whitespace or control chars',() => {
      expect(JIL.ValueIsURL('https://example.com/path?query=1')).to.equal(true)
      expect(JIL.ValueIsURL('no url')).to.equal(false)
      expect(JIL.ValueIsURL('')).to.equal(false)
    })

    it('ValueIsPhoneNumber accepts common notations',() => {
      for (const Candidate of [
        '072112345', '0721 123 45', '(0721) 123-45', '0721/12345',
        '+49 721 12345', '+49 (0) 721 12345', '+4972112345', '110'
      ]) {
        expect(JIL.ValueIsPhoneNumber(Candidate),Candidate).to.equal(true)
      }
    })

    it('ValueIsPhoneNumber rejects implausible input',() => {
      for (const Candidate of [
        '', '0721-CALL-ME', '01', '01234567890123456789',
        '+', '0721-', '+049 721 12345'
      ]) {
        expect(JIL.ValueIsPhoneNumber(Candidate),Candidate).to.equal(false)
      }
      expect(JIL.ValueIsPhoneNumber(4972112345)).to.equal(false)
    })

    it('ValueIsE164PhoneNumber accepts canonical numbers only',() => {
      expect(JIL.ValueIsE164PhoneNumber('+4972112345')).to.equal(true)
      expect(JIL.ValueIsE164PhoneNumber('+6834567')).to.equal(true)
      expect(JIL.ValueIsE164PhoneNumber('+123456789012345')).to.equal(true)

      for (const Candidate of [
        '+1234567890123456', '+04972112345', '+49 721 12345', '4972112345'
      ]) {
        expect(JIL.ValueIsE164PhoneNumber(Candidate),Candidate).to.equal(false)
      }
    })

    it('ValueIsBigInt/Symbol classify modern primitives',() => {
      expect(JIL.ValueIsBigInt(10n)).to.equal(true)
      expect(JIL.ValueIsBigInt(10)).to.equal(false)
      expect(JIL.ValueIsSymbol(Symbol('demo'))).to.equal(true)
      expect(JIL.ValueIsSymbol('demo')).to.equal(false)
    })

    it('ValueIsMap/Set/TypedArray/ArrayBuffer classify containers',() => {
      expect(JIL.ValueIsMap(new Map())).to.equal(true)
      expect(JIL.ValueIsMap({})).to.equal(false)
      expect(JIL.ValueIsSet(new Set())).to.equal(true)
      expect(JIL.ValueIsSet([])).to.equal(false)
      expect(JIL.ValueIsTypedArray(new Uint8Array(4))).to.equal(true)
      expect(JIL.ValueIsTypedArray(new DataView(new ArrayBuffer(4))))
        .to.equal(false)
      expect(JIL.ValueIsArrayBuffer(new ArrayBuffer(4))).to.equal(true)
      expect(JIL.ValueIsArrayBuffer(new Uint8Array(4))).to.equal(false)
    })

    it('ValueIsUUID checks the canonical UUID format',() => {
      expect(JIL.ValueIsUUID('123e4567-e89b-12d3-a456-426614174000'))
        .to.equal(true)
      expect(JIL.ValueIsUUID('123E4567-E89B-12D3-A456-426614174000'))
        .to.equal(true)
      expect(JIL.ValueIsUUID('no-uuid')).to.equal(false)
    })

    it('ValueIsISODate detects calendar overflows',() => {
      expect(JIL.ValueIsISODate('2026-07-03')).to.equal(true)
      expect(JIL.ValueIsISODate('2026-02-31')).to.equal(false)
      expect(JIL.ValueIsISODate('2026-7-3')).to.equal(false)
    })

    it('ValueIsISOTimestamp accepts ISO 8601 timestamps',() => {
      expect(JIL.ValueIsISOTimestamp('2026-07-03T10:56:00Z')).to.equal(true)
      expect(JIL.ValueIsISOTimestamp('2026-07-03T10:56+02:00')).to.equal(true)
      expect(JIL.ValueIsISOTimestamp('2026-07-03')).to.equal(false)
      expect(JIL.ValueIsISOTimestamp('2026-07-03T25:00:00Z')).to.equal(false)
    })

    it('ValueIsIPv4Address checks dotted-quad notation',() => {
      expect(JIL.ValueIsIPv4Address('192.168.0.1')).to.equal(true)
      expect(JIL.ValueIsIPv4Address('256.1.1.1')).to.equal(false)
      expect(JIL.ValueIsIPv4Address('1.2.3')).to.equal(false)
    })

    it('ValueIsIPv6Address uses the full IPv6 grammar',() => {
      expect(JIL.ValueIsIPv6Address('::1')).to.equal(true)
      expect(JIL.ValueIsIPv6Address('2001:db8::8a2e:370:7334')).to.equal(true)
      expect(JIL.ValueIsIPv6Address('1.2.3.4')).to.equal(false)
      expect(JIL.ValueIsIPv6Address('xyz')).to.equal(false)
    })

    it('ValueIsHostName follows RFC 1123',() => {
      expect(JIL.ValueIsHostName('example.com')).to.equal(true)
      expect(JIL.ValueIsHostName('sub-domain.example')).to.equal(true)
      expect(JIL.ValueIsHostName('-bad-.com')).to.equal(false)
      expect(JIL.ValueIsHostName('no_underscores.com')).to.equal(false)
    })

    it('ValueIsPortNumber accepts 1...65535',() => {
      expect(JIL.ValueIsPortNumber(443)).to.equal(true)
      expect(JIL.ValueIsPortNumber(0)).to.equal(false)
      expect(JIL.ValueIsPortNumber(70000)).to.equal(false)
      expect(JIL.ValueIsPortNumber('443')).to.equal(false)
    })

    it('ValueIsJSONString checks parseability',() => {
      expect(JIL.ValueIsJSONString('{"a":1}')).to.equal(true)
      expect(JIL.ValueIsJSONString('{a:1}')).to.equal(false)
    })

    it('ValueIsBase64 checks alphabet and padding',() => {
      expect(JIL.ValueIsBase64('SGVsbG8=')).to.equal(true)
      expect(JIL.ValueIsBase64('SGVsbG8')).to.equal(false)
    })

    it('ValueIsHexString accepts hex digits only',() => {
      expect(JIL.ValueIsHexString('deadBEEF')).to.equal(true)
      expect(JIL.ValueIsHexString('xyz')).to.equal(false)
      expect(JIL.ValueIsHexString('')).to.equal(false)
    })

    it('ValueIsIdentifier checks syntactically valid JavaScript identifiers',() => {
      expect(JIL.ValueIsIdentifier('myVar')).to.equal(true)
      expect(JIL.ValueIsIdentifier('_privateVar')).to.equal(true)
      expect(JIL.ValueIsIdentifier('$element')).to.equal(true)
      expect(JIL.ValueIsIdentifier('café')).to.equal(true)
      expect(JIL.ValueIsIdentifier('αβγ')).to.equal(true)
      expect(JIL.ValueIsIdentifier('')).to.equal(false)
      expect(JIL.ValueIsIdentifier('123abc')).to.equal(false)
      expect(JIL.ValueIsIdentifier('my-var')).to.equal(false)
      expect(JIL.ValueIsIdentifier('my var')).to.equal(false)
      expect(JIL.ValueIsIdentifier('class')).to.equal(true) // keyword check is
    })                              // deliberately not part of this classifier
  })

/**** argument validation functions ****/

  describe('Argument Validation Functions',() => {
    function checksValidators (Suffix, goodValue, badValue) {
      const allowFn = JIL['allow'+Suffix], expectFn = JIL['expect'+Suffix]
      expect(JIL['allowed'+Suffix]).to.equal(allowFn)
      expect(JIL['expected'+Suffix]).to.equal(expectFn)

      expect(allowFn('demo',undefined)).to.equal(undefined)
      expect(allowFn('demo',goodValue)).to.equal(goodValue)
      expect(expectFn('demo',goodValue)).to.equal(goodValue)
      expect(() => expectFn('demo',badValue)).to.throw()
      expect(() => expectFn('demo',undefined)).to.throw()
    }

    it('validatedArgument applies classifier and nil policy',() => {
      const isBig = (Value) => Value > 3

      expect(JIL.validatedArgument('demo',5,isBig,JIL.rejectNil,'big value'))
        .to.equal(5)
      expect(JIL.validatedArgument('demo',undefined,isBig,JIL.acceptNil,'big value'))
        .to.equal(undefined)
      expect(() => JIL.validatedArgument('demo',2,isBig,JIL.rejectNil,'big value'))
        .to.throw()
      expect(
        () => JIL.validatedArgument('demo',undefined,isBig,JIL.rejectNil,'big value')
      ).to.throw()
    })

    it('ValidatorForClassifier derives named validators',() => {
      const expectDemo = JIL.ValidatorForClassifier(
        JIL.ValueIsNumber,JIL.rejectNil,'numeric value'
      )
      expect(expectDemo.name).to.equal('expectNumber')
      expect(expectDemo('demo',42)).to.equal(42)
      expect(() => expectDemo('demo','nope')).to.throw()
    })

    it('FunctionWithName renames functions',() => {
      const renamed = JIL.FunctionWithName(function () { return 42 },'answer')
      expect(renamed.name).to.equal('answer')
      expect(renamed()).to.equal(42)
      expect(() => JIL.FunctionWithName(42,'answer')).to.throw()
      expect(() => JIL.FunctionWithName(function () {},42)).to.throw()
    })

    it('expectValue unboxes primitives - but nothing else',() => {
      expect(JIL.expectValue('demo',new Number(5))).to.equal(5)

      const Timestamp = new Date()
      expect(JIL.expectValue('demo',Timestamp)).to.equal(Timestamp)
      expect(() => JIL.expectValue('demo',undefined)).to.throw()
    })

    it('allow/expect[ed]Boolean',() => {
      checksValidators('Boolean',true,'nope')
      expect(JIL.expectBoolean('demo',new Boolean(true))).to.equal(true)
    })

    it('allow/expect[ed][Finite]Number',() => {
      checksValidators('Number',42,'nope')
      checksValidators('FiniteNumber',42,Infinity)
    })

    it('allow/expect[ed]NaN',() => {
      expect(Number.isNaN(JIL.expectNaN('demo',NaN))).to.equal(true)
      expect(() => JIL.expectNaN('demo',42)).to.throw()
      expect(JIL.allowNaN('demo',undefined)).to.equal(undefined)
    })

    it('allow/expect[ed]NumberInRange',() => {
      expect(JIL.expectNumberInRange('demo',5,0,10)).to.equal(5)
      expect(JIL.expectNumberInRange('demo',0,0,10)).to.equal(0)
      expect(() => JIL.expectNumberInRange('demo',0,0,10,false)).to.throw()
      expect(() => JIL.expectNumberInRange('demo',11,0,10)).to.throw()
      expect(JIL.allowNumberInRange('demo',undefined,0,10)).to.equal(undefined)
    })

    it('allow/expect[ed]Integer[InRange]',() => {
      checksValidators('Integer',42,4.2)
      expect(JIL.expectIntegerInRange('demo',5,0,10)).to.equal(5)
      expect(() => JIL.expectIntegerInRange('demo',11,0,10)).to.throw()
      expect(JIL.allowIntegerInRange('demo',undefined,0,10)).to.equal(undefined)
    })

    it('allow/expect[ed]Ordinal/Cardinal',() => {
      checksValidators('Ordinal',0,-1)
      checksValidators('Cardinal',1,0)
    })

    it('allow/expect[ed][NonEmpty]String',() => {
      checksValidators('String','abc',42)
      checksValidators('NonEmptyString','abc','  ')
    })

    it('allow/expect[ed]StringMatching',() => {
      expect(JIL.expectStringMatching('demo','abc',/b/)).to.equal('abc')
      expect(() => JIL.expectStringMatching('demo','abc',/x/)).to.throw()
      expect(JIL.allowStringMatching('demo',undefined,/x/)).to.equal(undefined)
    })

    it('allow/expect[ed]Text[line]',() => {
      checksValidators('Text','two\nlines','\x01')
      checksValidators('Textline','single line','two\nlines')
    })

    it('allow/expect[ed]Function',() => {
      checksValidators('Function',Math.max,42)
    })

    it('allow/expect[ed]Anonymous/NamedFunction',() => {
      const anonymous = [ function () {} ][0]
      function named () {}

      checksValidators('AnonymousFunction',anonymous,named)
      checksValidators('NamedFunction',named,anonymous)
    })

    it('allow/expect[ed]Native/ScriptedFunction',() => {
      function scripted () {}

      checksValidators('NativeFunction',Math.max,scripted)
      checksValidators('ScriptedFunction',scripted,Math.max)
    })

    it('allow/expect[ed]Object',() => {
      checksValidators('Object',{ a:1 },42)
    })

    it('allow/expect[ed]Plain/VanillaObject',() => {
      checksValidators('PlainObject',{ a:1 },new Date())
      checksValidators('VanillaObject',Object.create(null),{ a:1 })
    })

    it('allow/expect[ed]Array',() => {
      const Demo = [ 1,2 ]
      expect(JIL.expectArray('demo',Demo)).to.equal(Demo)
      expect(() => JIL.expectArray('demo','nope')).to.throw()
      expect(JIL.allowArray('demo',undefined)).to.equal(undefined)
    })

    it('allow/expect[ed]List',() => {
      const Demo = [ 1,2 ]
      expect(JIL.expectList('demo',Demo,'short list',1,3)).to.equal(Demo)
      expect(() => JIL.expectList('demo',[ 1,undefined ])).to.throw()
      expect(() => JIL.expectList('demo',Demo,'long list',3)).to.throw()
      expect(JIL.allowList('demo',undefined)).to.equal(undefined)
    })

    it('allow/expect[ed]ListSatisfying',() => {
      const Demo = [ 1,2 ]
      expect(JIL.expectListSatisfying('demo',Demo,JIL.ValueIsNumber))
        .to.equal(Demo)
      expect(() => JIL.expectListSatisfying('demo',[ 'x' ],JIL.ValueIsNumber))
        .to.throw()
      expect(JIL.allowListSatisfying('demo',undefined,JIL.ValueIsNumber))
        .to.equal(undefined)
    })

    it('allow/expect[ed]InstanceOf',() => {
      const Timestamp = new Date()
      expect(JIL.expectInstanceOf('demo',Timestamp,Date,'Date object'))
        .to.equal(Timestamp)
      expect(() => JIL.expectInstanceOf('demo',42,Date,'Date object')).to.throw()
      expect(JIL.allowInstanceOf('demo',undefined,Date,'Date object'))
        .to.equal(undefined)
    })

    it('allow/expect[ed]ValueInheritingFrom',() => {
      const Prototype = { x:1 }
      const Derived   = Object.create(Prototype)
      expect(JIL.expectValueInheritingFrom('demo',Derived,Prototype,'derivative'))
        .to.equal(Derived)
      expect(() => JIL.expectValueInheritingFrom('demo',{},Prototype,'derivative'))
        .to.throw()
      expect(JIL.allowValueInheritingFrom('demo',undefined,Prototype,'derivative'))
        .to.equal(undefined)
    })

    it('allow/expect[ed]Date/Error/Promise/RegExp',() => {
      checksValidators('Date',new Date(),42)
      checksValidators('Error',new TypeError('demo'),42)
      checksValidators('Promise',Promise.resolve(42),42)
      checksValidators('RegExp',/demo/,42)
    })

    it('allow/expect[ed]OneOf',() => {
      expect(JIL.expectOneOf('demo',2,[ 1,2,3 ])).to.equal(2)
      expect(() => JIL.expectOneOf('demo',4,[ 1,2,3 ])).to.throw()
      expect(JIL.allowOneOf('demo',undefined,[ 1,2,3 ])).to.equal(undefined)

      const Timestamp = new Date()
      expect(JIL.expectOneOf('demo',Timestamp,[ Timestamp ])).to.equal(Timestamp)
    })

    it('allow/expect[ed]Color/EMailAddress/URL',() => {
      checksValidators('Color','red','no-colour')
      checksValidators('EMailAddress','a.rozek@gmx.de','no-address')
      checksValidators('URL','https://example.com','no url')
    })

    it('allow/expect[ed][E164]PhoneNumber',() => {
      checksValidators('PhoneNumber','+4972112345','no-phone')
      checksValidators('E164PhoneNumber','+4972112345','0721 12345')
    })

    it('validators for modern primitives and containers',() => {
      checksValidators('BigInt',10n,10)
      checksValidators('Symbol',Symbol('demo'),'demo')
      checksValidators('Map',new Map(),{})
      checksValidators('Set',new Set(),[])
      checksValidators('TypedArray',new Uint8Array(4),[])
      checksValidators('ArrayBuffer',new ArrayBuffer(4),new Uint8Array(4))
    })

    it('validators for formatted strings and numbers',() => {
      checksValidators('UUID','123e4567-e89b-12d3-a456-426614174000','no-uuid')
      checksValidators('ISODate','2026-07-03','2026-02-31')
      checksValidators('ISOTimestamp','2026-07-03T10:56:00Z','2026-07-03')
      checksValidators('IPv4Address','192.168.0.1','256.1.1.1')
      checksValidators('IPv6Address','::1','1.2.3.4')
      checksValidators('HostName','example.com','-bad-.com')
      checksValidators('PortNumber',443,70000)
      checksValidators('JSONString','{"a":1}','{a:1}')
      checksValidators('Base64','SGVsbG8=','SGVsbG8')
      checksValidators('HexString','deadBEEF','xyz')
      checksValidators('Identifier','foo','1abc')
    })
  })

/**** escaped, unescaped ****/

  describe('escaped/unescaped',() => {
    it('escaped escapes control characters',() => {
      expect(JIL.escaped('a\nb')).to.equal('a\\nb')
      expect(JIL.escaped('\x01')).to.equal('\\x01')
    })

    it('unescaped evaluates escape sequences',() => {
      expect(JIL.unescaped('a\\nb')).to.equal('a\nb')
      expect(JIL.unescaped('\\x41')).to.equal('A')
    })

    it('unescaped leaves invalid hex sequences untouched',() => {
      expect(JIL.unescaped('\\xzz')).to.equal('\\xzz')
    })

    it('unescaped evaluates code point escapes',() => {
      expect(JIL.unescaped('\\u{1F600}')).to.equal(String.fromCodePoint(0x1F600))
      expect(JIL.unescaped('\\u{110000}')).to.equal('\\u{110000}') // invalid
    })

    it('escaped and unescaped are inverse of each other',() => {
      const Original = 'a\tb\nc\\d'
      expect(JIL.unescaped(JIL.escaped(Original))).to.equal(Original)
    })
  })

/**** quotable, quoted ****/

  describe('quotable/quoted',() => {
    it('quoted quotes and escapes properly',() => {
      expect(JIL.quoted('a"b')).to.equal('"a\\"b"')
      expect(JIL.quoted("a'b","'")).to.equal("'a\\'b'")
    })

    it('quotable escapes control characters',() => {
      expect(JIL.quotable('a\nb')).to.equal('a\\nb')
      expect(JIL.quotable('a\x01b')).to.equal('a\\x01b')
    })

    it('quotable/quoted support backticks',() => {
      const Backtick = String.fromCharCode(96)
      expect(JIL.quotable('a'+Backtick+'b',Backtick))
        .to.equal('a\\'+Backtick+'b')
      expect(JIL.quotable('a${b}',Backtick)).to.equal('a\\${b}')
      expect(JIL.quoted('x',Backtick)).to.equal(Backtick+'x'+Backtick)
    })
  })

/**** HTMLsafe ****/

  describe('HTMLsafe',() => {
    it('escapes markup and control characters',() => {
      expect(JIL.HTMLsafe('a<b>c')).to.equal('a&lt;b&gt;c')
      expect(JIL.HTMLsafe('a"b\'c')).to.equal('a&quot;b&apos;c')
      expect(JIL.HTMLsafe('\x7F')).to.equal('&#x007f;')
    })

    it('replaces line breaks with the given replacement',() => {
      expect(JIL.HTMLsafe('x\ny')).to.equal('x<br/>y')
      expect(JIL.HTMLsafe('x\ny','|')).to.equal('x|y')
    })
  })

/**** MarkDownSafe ****/

  describe('MarkDownSafe',() => {
    it('escapes colons and MarkDown-relevant characters',() => {
      expect(JIL.MarkDownSafe('a:b')).to.equal('a&#58;b')
      expect(JIL.MarkDownSafe('a<b')).to.equal('a&lt;b')
      expect(JIL.MarkDownSafe('a*b')).to.equal('a&#42;b')
      expect(JIL.MarkDownSafe('a_b')).to.equal('a&#95;b')
      expect(JIL.MarkDownSafe('[x]')).to.equal('&#91;x&#93;')
    })
  })

/**** ValuesDiffer ****/

  describe('ValuesDiffer',() => {
    const equal = (a,b,Mode) => JIL.ValuesAreEqual(a,b,Mode)

    it('compares primitives',() => {
      expect(equal(1,1)).to.equal(true)
      expect(equal('a','b')).to.equal(false)
      expect(equal(NaN,NaN)).to.equal(true)
      expect(equal(1,'1')).to.equal(false)
    })

    it('compares numbers with relative tolerance',() => {
      expect(equal(0.1+0.2,0.3)).to.equal(true)
      expect(equal(1e20,1e20+1)).to.equal(true)
      expect(equal(1e20,1e20+1e10)).to.equal(false)
    })

    it('compares Dates by their timestamps',() => {
      expect(equal(new Date(42),new Date(42))).to.equal(true)
      expect(equal(new Date(0),new Date(1e12))).to.equal(false)
      expect(equal(new Date(NaN),new Date(NaN))).to.equal(true)
    })

    it('compares RegExps by source and flags',() => {
      expect(equal(/a/g,/a/g)).to.equal(true)
      expect(equal(/a/g,/a/i)).to.equal(false)
    })

    it('compares boxed primitives by value',() => {
      expect(equal(new Number(1),new Number(1))).to.equal(true)
      expect(equal(new Number(1),new Number(2))).to.equal(false)
    })

    it('compares arrays and plain objects structurally',() => {
      expect(equal({ a:[ 1,{ b:2 } ] },{ a:[ 1,{ b:2 } ] })).to.equal(true)
      expect(equal({ a:1 },{ a:2 })).to.equal(false)
      expect(equal([ 1,[ 2,3 ] ],[ 1,[ 2,3 ] ])).to.equal(true)
    })

    it('distinguishes objects with different prototypes',() => {
      class Example { constructor () { this.a = 1 } }
      expect(equal(new Example(),{ a:1 })).to.equal(false)
    })

    it('compares Maps, Sets and typed arrays',() => {
      expect(equal(
        new Map([ [ 'a',{ x:1 } ] ]),new Map([ [ 'a',{ x:1 } ] ])
      )).to.equal(true)
      expect(equal(new Map([ [ 'a',1 ] ]),new Map([ [ 'a',2 ] ]))).to.equal(false)
      expect(equal(new Set([ 1,2 ]),new Set([ 2,1 ]))).to.equal(true)
      expect(equal(new Set([ 1,2 ]),new Set([ 1,3 ]))).to.equal(false)
      expect(equal(new Uint8Array([ 1,2 ]),new Uint8Array([ 1,2 ]))).to.equal(true)
      expect(equal(new Uint8Array([ 1 ]),new Int8Array([ 1 ]))).to.equal(false)
    })

    it('detects circular references',() => {
      const a = { v:1 }; a.self = a
      const b = { v:1 }; b.self = b
      const c = { v:2 }; c.self = c
      expect(equal(a,b)).to.equal(true)
      expect(equal(a,c)).to.equal(false)
    })

    it('supports an options object with a custom tolerance',() => {
      expect(JIL.ValuesAreEqual(0.1,0.11,{ Tolerance:0.02 })).to.equal(true)
      expect(JIL.ValuesAreEqual(0.1,0.13,{ Tolerance:0.02 })).to.equal(false)
      expect(JIL.ValuesAreEqual({ a:1 },{ a:1 },{ Mode:'by-reference' }))
        .to.equal(false)
    })

    it('supports mode "by-reference"',() => {
      expect(equal({ a:1 },{ a:1 },'by-reference')).to.equal(false)
      const shared = { a:1 }
      expect(equal([ shared ],[ shared ],'by-reference')).to.equal(true)
    })
  })

/**** ValuesAreEqual ****/

  describe('ValuesAreEqual',() => {
    it('is the negation of ValuesDiffer',() => {
      expect(JIL.ValuesAreEqual(1,1)).to.equal(true)
      expect(JIL.ValuesAreEqual({ a:1 },{ a:2 })).to.equal(false)
      expect(JIL.ValuesAreEqual([ 1 ],[ 1 ],'by-value'))
        .to.equal(! JIL.ValuesDiffer([ 1 ],[ 1 ],'by-value'))
    })
  })

/**** ObjectIs[Not]Empty ****/

  describe('ObjectIs[Not]Empty',() => {
    it('checks for own enumerable properties',() => {
      expect(JIL.ObjectIsEmpty({})).to.equal(true)
      expect(JIL.ObjectIsEmpty({ a:1 })).to.equal(false)
      expect(JIL.ObjectIsNotEmpty({ a:1 })).to.equal(true)
      expect(JIL.ObjectIsEmpty(Object.create(null))).to.equal(true)
      expect(() => JIL.ObjectIsEmpty('nope')).to.throw()
    })
  })

/**** StringIs[Not]Empty ****/

  describe('StringIs[Not]Empty',() => {
    it('treats blank strings as empty',() => {
      expect(JIL.StringIsEmpty('')).to.equal(true)
      expect(JIL.StringIsEmpty('   ')).to.equal(true)
      expect(JIL.StringIsEmpty('abc')).to.equal(false)
      expect(JIL.StringIsNotEmpty('abc')).to.equal(true)
    })
  })

/**** constrained ****/

  describe('constrained',() => {
    it('clamps values into the given range',() => {
      expect(JIL.constrained(5,0,10)).to.equal(5)
      expect(JIL.constrained(-5,0,10)).to.equal(0)
      expect(JIL.constrained(15,0,10)).to.equal(10)
      expect(JIL.constrained(15)).to.equal(15)
    })
  })

/**** colour utilities ****/

  describe('Color Utilities',() => {
    it('ColorSet provides rgba values for all colour names',() => {
      expect(JIL.ColorSet.transparent).to.equal('rgba(0,0,0,0.0)')
      expect(JIL.ColorSet.red).to.equal('rgba(255,0,0,1.0)')

      const rgbaPattern = /^rgba\([0-9]+,[0-9]+,[0-9]+,[01]\.0\)$/
      expect(Object.values(JIL.ColorSet).every(
        (Value) => rgbaPattern.test(Value)
      )).to.equal(true)
    })

    it('HexColor supports named colours, case-insensitively',() => {
      expect(JIL.HexColor('red')).to.equal('#FF0000FF')
      expect(JIL.HexColor('Red')).to.equal('#FF0000FF')
    })

    it('HexColor handles fractional alpha values',() => {
      expect(JIL.HexColor('rgba(0,0,0,0.5)')).to.equal('#00000080')
      expect(JIL.HexColor('rgba(0,0,0,1.0)')).to.equal('#000000FF')
    })

    it('HexColor rejects invalid colours',() => {
      expect(() => JIL.HexColor('no-colour')).to.throw()
    })

    it('RGBAColor accepts its own output',() => {
      const Result = JIL.RGBAColor('#ffffff')
      expect(Result).to.equal('rgba(255,255,255,1)')
      expect(JIL.RGBAColor(Result)).to.equal(Result)
      expect(JIL.RGBAColor('rgba(240,248,255,1.0)'))
        .to.equal('rgba(240,248,255,1.0)')
    })

    it('RGBAColor rejects invalid colours',() => {
      expect(() => JIL.RGBAColor('no-colour')).to.throw()
    })

    it('shortHexColor strips the alpha channel',() => {
      expect(JIL.shortHexColor('red')).to.equal('#FF0000')
      expect(JIL.shortHexColor('rgba(255,0,0,0.5)')).to.equal('#FF0000')
    })
  })

