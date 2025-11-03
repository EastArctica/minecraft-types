type ClassLike = {
  class: Packages.java.lang.Class<any>;
  [Symbol.hasInstance](v): boolean
 }
type isAny<T> = (T extends never ? true : false) extends false ? false : true;
type CombineTypes<A> = (
  A extends [infer B, ...infer Rest] ?
    isAny<B> extends true ?
      CombineTypes<Rest>
      : CombineTypes<Rest> extends never ? B : B & CombineTypes<Rest>
    : A extends [infer B] ?
      isAny<B> extends true ? never : B
  : never
)
type char   = number & {};
type byte   = number & {};
type short  = number & {};
type int    = number & {};
type long   = number | BigInt;
type float  = number & {};
type double = number & {};
type Function$$JS = Function;
declare module Packages {
  module jdk {
    module internal {
      module joptsimple {
        module internal {
          interface _AbbreviationMap$$static<V> extends ClassLike {
            _charsOf(aKey: string): char[];
            new(): AbbreviationMap<V>;
          }
          let AbbreviationMap: _AbbreviationMap$$static<V>;
          interface _AbbreviationMap<V> {
            _add(chars: char[], newValue: V, offset: int, length: int): boolean;
            _addToMappings(mappings: java.util.Map<string,V>): void;
            contains(key: string): boolean;
            get(key: string): V;
            put(key: string, newValue: V): void;
            putAll(keys: java.lang.Iterable<string>, newValue: V): void;
            remove(key: string): void;
            _remove(aKey: char[], offset: int, length: int): boolean;
            _removeAtEndOfKey(): boolean;
            _setValueToThatOfOnlyChild(): void;
            toJavaUtilMap(): java.util.Map<string,V>;
            _children: java.util.Map<internal$character,AbbreviationMap<V>>;
            _key: string;
            _keysBeyond: int;
            _value: V;
          }
          interface AbbreviationMap<V> extends CombineTypes<[_AbbreviationMap<V>, OptionNameMap<V>, java.lang.Object]> {}
          interface _Classes$$static extends ClassLike {
            shortNameOf(className: string): string;
            wrapperOf<T>(clazz: java.lang.Class<T>): java.lang.Class<T>;
            _WRAPPERS: java.util.Map<java.lang.Class<any>,java.lang.Class<any>>;
          }
          let Classes: _Classes$$static;
          interface _Classes {
          }
          interface Classes extends CombineTypes<[_Classes, java.lang.Object]> {}
          interface _Columns$$static extends ClassLike {
            _itemOrEmpty(items: java.util.List<string>, index: int): string;
            _INDENT_WIDTH: int;
            _new(optionWidth: int, descriptionWidth: int): Columns;
          }
          let Columns: _Columns$$static;
          interface _Columns {
            _fit(row: Row): java.util.List<Row>;
            _piecesOf(raw: string, width: int): java.util.List<string>;
            _piecesOfEmbeddedLine(line: string, width: int): java.util.List<string>;
            _processNextWord(source: string, nextPiece: Columns$stringBuilder, start: int, end: int, width: int, pieces: java.util.List<string>): Columns$stringBuilder;
            _descriptionWidth: int;
            _optionWidth: int;
          }
          interface Columns extends CombineTypes<[_Columns, java.lang.Object]> {}
          interface _ConstructorInvokingValueConverter$$static<V> extends ClassLike {
            _new(ctor: java.lang.reflect.Constructor<V>): ConstructorInvokingValueConverter<V>;
          }
          let ConstructorInvokingValueConverter: _ConstructorInvokingValueConverter$$static<V>;
          interface _ConstructorInvokingValueConverter<V> {
            convert(value: string): V;
            valuePattern(): string;
            valueType(): java.lang.Class<V>;
            _ctor: java.lang.reflect.Constructor<V>;
          }
          interface ConstructorInvokingValueConverter<V> extends CombineTypes<[_ConstructorInvokingValueConverter<V>, java.lang.Object, ValueConverter<V>]> {}
          interface _Messages$$static extends ClassLike {
            message(locale: java.util.Locale, bundleName: string, type: java.lang.Class<any>, key: string, args: any[]): string;
            message(locale: java.util.Locale, bundleName: string, type: java.lang.Class<any>, key: string, ...args: any[]): string;
          }
          let Messages: _Messages$$static;
          interface _Messages {
          }
          interface Messages extends CombineTypes<[_Messages, java.lang.Object]> {}
          interface _MethodInvokingValueConverter$$static<V> extends ClassLike {
            _new(method: java.lang.reflect.Method, clazz: java.lang.Class<V>): MethodInvokingValueConverter<V>;
          }
          let MethodInvokingValueConverter: _MethodInvokingValueConverter$$static<V>;
          interface _MethodInvokingValueConverter<V> {
            convert(value: string): V;
            valuePattern(): string;
            valueType(): java.lang.Class<V>;
            _clazz: java.lang.Class<V>;
            _method: java.lang.reflect.Method;
          }
          interface MethodInvokingValueConverter<V> extends CombineTypes<[_MethodInvokingValueConverter<V>, java.lang.Object, ValueConverter<V>]> {}
          interface _OptionNameMap$$static<V> extends ClassLike {
          }
          let OptionNameMap: _OptionNameMap$$static<V>;
          interface _OptionNameMap<V> {
            contains(a0: string): boolean;
            get(a0: string): V;
            put(a0: string, a1: V): void;
            putAll(a0: java.lang.Iterable<string>, a1: V): void;
            remove(a0: string): void;
            toJavaUtilMap(): java.util.Map<string,V>;
          }
          interface OptionNameMap<V> extends CombineTypes<[_OptionNameMap<V>, java.lang.Object]> {}
          interface _Reflection$$static extends ClassLike {
            _constructorConverter<V>(clazz: java.lang.Class<V>): ValueConverter<V>;
            convertWith<V>(converter: ValueConverter<V>, raw: string): V;
            findConverter<V>(clazz: java.lang.Class<V>): ValueConverter<V>;
            instantiate<T>(constructor: java.lang.reflect.Constructor<T>, args: any[]): T;
            instantiate<T>(constructor: java.lang.reflect.Constructor<T>, ...args: any[]): T;
            invoke(method: java.lang.reflect.Method, args: any[]): any;
            invoke(method: java.lang.reflect.Method, ...args: any[]): any;
            _meetsConverterRequirements(method: java.lang.reflect.Method, expectedReturnType: java.lang.Class<any>): boolean;
            _reflectionException(ex: java.lang.Exception): java.lang.RuntimeException;
            _valueOfConverter<V>(clazz: java.lang.Class<V>): ValueConverter<V>;
          }
          let Reflection: _Reflection$$static;
          interface _Reflection {
          }
          interface Reflection extends CombineTypes<[_Reflection, java.lang.Object]> {}
          interface _ReflectionException$$static extends ClassLike {
            _serialVersionUID: long;
            _new(cause: java.lang.Throwable): ReflectionException;
          }
          let ReflectionException: _ReflectionException$$static;
          interface _ReflectionException {
          }
          interface ReflectionException extends CombineTypes<[_ReflectionException, java.lang.RuntimeException]> {}
          interface _Row$$static extends ClassLike {
            _new(option: string, description: string): Row;
          }
          let Row: _Row$$static;
          interface _Row {
            equals(that: any): boolean;
            hashCode(): int;
            _description: string;
            _option: string;
          }
          interface Row extends CombineTypes<[_Row, java.lang.Object]> {}
          interface _Rows$$static extends ClassLike {
            new(overallWidth: int, columnSeparatorWidth: int): Rows;
          }
          let Rows: _Rows$$static;
          interface _Rows {
            add(option: string, description: string): void;
            _add(row: Row): void;
            _descriptionWidth(): int;
            fitToWidth(): void;
            _optionWidth(): int;
            _pad(buffer: Rows$stringBuilder, s: string, length: int): Rows$stringBuilder;
            render(): string;
            reset(): void;
            _columnSeparatorWidth: int;
            _overallWidth: int;
            _rows: java.util.List<Row>;
            _widthOfWidestDescription: int;
            _widthOfWidestOption: int;
          }
          interface Rows extends CombineTypes<[_Rows, java.lang.Object]> {}
          interface _SimpleOptionNameMap$$static<V> extends ClassLike {
            new(): SimpleOptionNameMap<V>;
          }
          let SimpleOptionNameMap: _SimpleOptionNameMap$$static<V>;
          interface _SimpleOptionNameMap<V> {
            contains(key: string): boolean;
            get(key: string): V;
            put(key: string, newValue: V): void;
            putAll(keys: java.lang.Iterable<string>, newValue: V): void;
            remove(key: string): void;
            toJavaUtilMap(): java.util.Map<string,V>;
            _map: java.util.Map<string,V>;
          }
          interface SimpleOptionNameMap<V> extends CombineTypes<[_SimpleOptionNameMap<V>, OptionNameMap<V>, java.lang.Object]> {}
          interface _Strings$$static extends ClassLike {
            isNullOrEmpty(target: string): boolean;
            join(pieces: string[], separator: string): string;
            join(pieces: java.lang.Iterable<string>, separator: string): string;
            repeat(ch: char, count: int): string;
            surround(target: string, begin: char, end: char): string;
            readonly EMPTY: string;
            readonly LINE_SEPARATOR: string;
          }
          let Strings: _Strings$$static;
          interface _Strings {
          }
          interface Strings extends CombineTypes<[_Strings, java.lang.Object]> {}
        }
        module util {
          interface _DateConverter$$static extends ClassLike {
            datePattern(pattern: string): DateConverter;
            new(formatter: java.text.DateFormat): DateConverter;
          }
          let DateConverter: _DateConverter$$static;
          interface _DateConverter {
            convert(value: string): java.util.Date;
            convert(a0: string): any;
            _message(value: string): string;
            valuePattern(): string;
            valueType(): java.lang.Class<java.util.Date>;
            _formatter: java.text.DateFormat;
          }
          interface DateConverter extends CombineTypes<[_DateConverter, ValueConverter<java.util.Date>, java.lang.Object]> {}
          interface _EnumConverter$$static<E> extends ClassLike {
            _new(clazz: java.lang.Class<E>): EnumConverter<E>;
          }
          let EnumConverter: _EnumConverter$$static<E>;
          interface _EnumConverter<E> {
            convert(value: string): E;
            convert(a0: string): any;
            _message(value: string): string;
            setDelimiters(delimiters: string): void;
            valuePattern(): string;
            valueType(): java.lang.Class<E>;
            _clazz: java.lang.Class<E>;
            _delimiters: string;
          }
          interface EnumConverter<E> extends CombineTypes<[_EnumConverter<E>, java.lang.Object, ValueConverter<E>]> {}
          interface _InetAddressConverter$$static extends ClassLike {
            new(): InetAddressConverter;
          }
          let InetAddressConverter: _InetAddressConverter$$static;
          interface _InetAddressConverter {
            convert(value: string): java.net.InetAddress;
            convert(a0: string): any;
            _message(value: string): string;
            valuePattern(): string;
            valueType(): java.lang.Class<java.net.InetAddress>;
          }
          interface InetAddressConverter extends CombineTypes<[_InetAddressConverter, java.lang.Object, ValueConverter<java.net.InetAddress>]> {}
          interface _KeyValuePair$$static extends ClassLike {
            valueOf(asString: string): KeyValuePair;
          }
          let KeyValuePair: _KeyValuePair$$static;
          interface _KeyValuePair {
            equals(that: any): boolean;
            hashCode(): int;
            toString(): string;
            readonly key: string;
            readonly value: string;
          }
          interface KeyValuePair extends CombineTypes<[_KeyValuePair, java.lang.Object]> {}
          interface _PathConverter$$static extends ClassLike {
            new(pathProperties: PathProperties[]): PathConverter;
            new(...pathProperties: PathProperties[]): PathConverter;
          }
          let PathConverter: _PathConverter$$static;
          interface _PathConverter {
            convert(value: string): java.nio.file.Path;
            convert(a0: string): any;
            _message(errorKey: string, value: string): string;
            valuePattern(): string;
            valueType(): java.lang.Class<java.nio.file.Path>;
            _pathProperties: PathProperties[];
          }
          interface PathConverter extends CombineTypes<[_PathConverter, ValueConverter<java.nio.file.Path>, java.lang.Object]> {}
          interface _PathProperties$$static extends ClassLike {
            valueOf(name: string): PathProperties;
            values(): PathProperties[];
            readonly DIRECTORY_EXISTING: PathProperties;
            readonly FILE_EXISTING: PathProperties;
            readonly FILE_OVERWRITABLE: PathProperties;
            readonly NOT_EXISTING: PathProperties;
            readonly READABLE: PathProperties;
            readonly WRITABLE: PathProperties;
          }
          let PathProperties: _PathProperties$$static;
          interface _PathProperties {
            _accept(a0: java.nio.file.Path): boolean;
(a0: java.nio.file.Path): boolean;
            _getMessageKey(): string;
            _messageKey: string;
          }
          interface PathProperties extends CombineTypes<[_PathProperties]> {}
          interface _RegexMatcher$$static extends ClassLike {
            regex(pattern: string): ValueConverter<string>;
            new(pattern: string, flags: int): RegexMatcher;
          }
          let RegexMatcher: _RegexMatcher$$static;
          interface _RegexMatcher {
            convert(value: string): string;
            convert(a0: string): any;
            _raiseValueConversionFailure(value: string): void;
            valuePattern(): string;
            valueType(): java.lang.Class<string>;
            _pattern: java.util.regex.Pattern;
          }
          interface RegexMatcher extends CombineTypes<[_RegexMatcher, java.lang.Object, ValueConverter<string>]> {}
        }
        interface _AbstractOptionSpec$$static<V> extends ClassLike {
          _new(option: string): AbstractOptionSpec<V>;
          _new(options: java.util.List<string>, description: string): AbstractOptionSpec<V>;
        }
        let AbstractOptionSpec: _AbstractOptionSpec$$static<V>;
        interface _AbstractOptionSpec<V> {
          _argumentTypeIndicatorFrom(converter: ValueConverter<V>): string;
          _arrangeOptions(unarranged: java.util.List<string>): void;
          _convert(a0: string): V;
          _convertWith(converter: ValueConverter<V>, argument: string): V;
          description(): string;
          equals(that: any): boolean;
          forHelp(): AbstractOptionSpec<V>;
          _handleOption(a0: OptionParser, a1: ArgumentList, a2: OptionSet, a3: string): void;
          hashCode(): int;
          isForHelp(): boolean;
          options(): java.util.List<string>;
          representsNonOptions(): boolean;
          toString(): string;
          value(detectedOptions: OptionSet): V;
          values(detectedOptions: OptionSet): java.util.List<V>;
          _description: string;
          _forHelp: boolean;
          _options: java.util.List<string>;
        }
        interface AbstractOptionSpec<V> extends CombineTypes<[_AbstractOptionSpec<V>, OptionSpec<V>, OptionDescriptor, java.lang.Object]> {}
        interface _AlternativeLongOptionSpec$$static extends ClassLike {
          _new(): AlternativeLongOptionSpec;
        }
        let AlternativeLongOptionSpec: _AlternativeLongOptionSpec$$static;
        interface _AlternativeLongOptionSpec {
          _detectOptionArgument(parser: OptionParser, arguments: ArgumentList, detectedOptions: OptionSet): void;
        }
        interface AlternativeLongOptionSpec extends CombineTypes<[_AlternativeLongOptionSpec, ArgumentAcceptingOptionSpec<string>]> {}
        interface _ArgumentAcceptingOptionSpec$$static<V> extends ClassLike {
          _NIL_VALUE_SEPARATOR: char;
          _new(option: string, argumentRequired: boolean): ArgumentAcceptingOptionSpec<V>;
          _new(options: java.util.List<string>, argumentRequired: boolean, description: string): ArgumentAcceptingOptionSpec<V>;
        }
        let ArgumentAcceptingOptionSpec: _ArgumentAcceptingOptionSpec$$static<V>;
        interface _ArgumentAcceptingOptionSpec<V> {
          acceptsArguments(): boolean;
          _addArguments(detectedOptions: OptionSet, detectedArgument: string): void;
          _addDefaultValue(value: V): void;
          argumentDescription(): string;
          argumentTypeIndicator(): string;
          _canConvertArgument(argument: string): boolean;
          _convert(argument: string): V;
          defaultValues(): java.util.List<V>;
          defaultsTo(value: V, values: V[]): ArgumentAcceptingOptionSpec<V>;
          defaultsTo(value: V, ...values: V[]): ArgumentAcceptingOptionSpec<V>;
          defaultsTo(values: V[]): ArgumentAcceptingOptionSpec<V>;
          describedAs(description: string): ArgumentAcceptingOptionSpec<V>;
          _detectOptionArgument(a0: OptionParser, a1: ArgumentList, a2: OptionSet): void;
(a0: OptionParser, a1: ArgumentList, a2: OptionSet): void;
          equals(that: any): boolean;
          _handleOption(parser: OptionParser, arguments: ArgumentList, detectedOptions: OptionSet, detectedArgument: string): void;
          hashCode(): int;
          _isArgumentOfNumberType(): boolean;
          isRequired(): boolean;
          ofType<T>(argumentType: java.lang.Class<T>): ArgumentAcceptingOptionSpec<T>;
          required(): ArgumentAcceptingOptionSpec<V>;
          requiresArgument(): boolean;
          withValuesConvertedBy<T>(aConverter: ValueConverter<T>): ArgumentAcceptingOptionSpec<T>;
          withValuesSeparatedBy(separator: char): ArgumentAcceptingOptionSpec<V>;
          withValuesSeparatedBy(separator: string): ArgumentAcceptingOptionSpec<V>;
          _argumentDescription: string;
          _argumentRequired: boolean;
          _converter: ValueConverter<V>;
          _defaultValues: java.util.List<V>;
          _optionRequired: boolean;
          _valueSeparator: string;
        }
        interface ArgumentAcceptingOptionSpec<V> extends CombineTypes<[_ArgumentAcceptingOptionSpec<V>, AbstractOptionSpec<V>]> {}
        interface _ArgumentList$$static extends ClassLike {
          _new(arguments: string[]): ArgumentList;
          _new(...arguments: string[]): ArgumentList;
        }
        let ArgumentList: _ArgumentList$$static;
        interface _ArgumentList {
          _hasMore(): boolean;
          _next(): string;
          _peek(): string;
          _treatNextAsLongOption(): void;
          _arguments: string[];
          _currentIndex: int;
        }
        interface ArgumentList extends CombineTypes<[_ArgumentList, java.lang.Object]> {}
        interface _BuiltinHelpFormatter$$static extends ClassLike {
          _new(): BuiltinHelpFormatter;
          new(desiredOverallWidth: int, desiredColumnSeparatorWidth: int): BuiltinHelpFormatter;
        }
        let BuiltinHelpFormatter: _BuiltinHelpFormatter$$static;
        interface _BuiltinHelpFormatter {
          _addHeaders(options: java.util.Collection<OptionDescriptor>): void;
          _addNonOptionRow(single: string): void;
          _addNonOptionsDescription(options: java.util.Collection<OptionDescriptor>): void;
          _addOptionRow(single: string): void;
          _addOptionRow(left: string, right: string): void;
          _addOptions(options: java.util.Collection<OptionDescriptor>): void;
          _addRows(options: java.util.Collection<OptionDescriptor>): void;
          _appendOptionHelp(buffer: BuiltinHelpFormatter$stringBuilder, typeIndicator: string, description: string, required: boolean): void;
          _appendTypeIndicator(buffer: BuiltinHelpFormatter$stringBuilder, typeIndicator: string, description: string, start: char, end: char): void;
          _createDefaultValuesDisplay(defaultValues: java.util.List<any>): string;
          _createDescriptionDisplay(descriptor: OptionDescriptor): string;
          _createNonOptionArgumentsDisplay(nonOptionDescriptor: OptionDescriptor): string;
          _createOptionDisplay(descriptor: OptionDescriptor): string;
          _extractTypeIndicator(descriptor: OptionDescriptor): string;
          _findAndRemoveNonOptionsSpec(options: java.util.Collection<OptionDescriptor>): OptionDescriptor;
          _fitRowsToWidth(): void;
          format(options: java.util.Map<string,OptionDescriptor>): string;
          _formattedHelpOutput(): string;
          _hasRequiredOption(options: java.util.Collection<OptionDescriptor>): boolean;
          _maybeAppendNonOptionsDescription(buffer: BuiltinHelpFormatter$stringBuilder, nonOptions: OptionDescriptor): void;
          _maybeAppendOptionInfo(buffer: BuiltinHelpFormatter$stringBuilder, descriptor: OptionDescriptor): void;
          _message(keySuffix: string, args: any[]): string;
          _message(keySuffix: string, ...args: any[]): string;
          _nonOptionOutput(): string;
          _optionLeader(option: string): string;
          _optionOutput(): string;
          _shouldShowNonOptionArgumentDisplay(nonOptionDescriptor: OptionDescriptor): boolean;
          _nonOptionRows: internal.Rows;
          _optionRows: internal.Rows;
        }
        interface BuiltinHelpFormatter extends CombineTypes<[_BuiltinHelpFormatter, jdk.internal.joptsimple.HelpFormatter, java.lang.Object]> {}
        interface _HelpFormatter$$static extends ClassLike {
        }
        let HelpFormatter: _HelpFormatter$$static;
        interface _HelpFormatter {
          format(a0: java.util.Map<string,OptionDescriptor>): string;
(a0: java.util.Map<string,OptionDescriptor>): string;
        }
        interface HelpFormatter extends CombineTypes<[_HelpFormatter, java.lang.Object]> {}
        interface _IllegalOptionSpecificationException$$static extends ClassLike {
          _serialVersionUID: long;
          _new(option: string): IllegalOptionSpecificationException;
        }
        let IllegalOptionSpecificationException: _IllegalOptionSpecificationException$$static;
        interface _IllegalOptionSpecificationException {
          _messageArguments(): any[];
        }
        interface IllegalOptionSpecificationException extends CombineTypes<[_IllegalOptionSpecificationException, jdk.internal.joptsimple.OptionException]> {}
        interface _MissingRequiredOptionsException$$static extends ClassLike {
          _serialVersionUID: long;
          _new(missingRequiredOptions: java.util.List<OptionSpec<any>>): MissingRequiredOptionsException;
        }
        let MissingRequiredOptionsException: _MissingRequiredOptionsException$$static;
        interface _MissingRequiredOptionsException {
          _messageArguments(): any[];
        }
        interface MissingRequiredOptionsException extends CombineTypes<[_MissingRequiredOptionsException, jdk.internal.joptsimple.OptionException]> {}
        interface _MultipleArgumentsForOptionException$$static extends ClassLike {
          _serialVersionUID: long;
          _new(options: OptionSpec<any>): MultipleArgumentsForOptionException;
        }
        let MultipleArgumentsForOptionException: _MultipleArgumentsForOptionException$$static;
        interface _MultipleArgumentsForOptionException {
          _messageArguments(): any[];
        }
        interface MultipleArgumentsForOptionException extends CombineTypes<[_MultipleArgumentsForOptionException, jdk.internal.joptsimple.OptionException]> {}
        interface _NoArgumentOptionSpec$$static extends ClassLike {
          _new(option: string): NoArgumentOptionSpec;
          _new(options: java.util.List<string>, description: string): NoArgumentOptionSpec;
        }
        let NoArgumentOptionSpec: _NoArgumentOptionSpec$$static;
        interface _NoArgumentOptionSpec {
          acceptsArguments(): boolean;
          argumentDescription(): string;
          argumentTypeIndicator(): string;
          _convert(argument: string): java.lang.Void;
          _convert(a0: string): any;
          defaultValues(): java.util.List<java.lang.Void>;
          _handleOption(parser: OptionParser, arguments: ArgumentList, detectedOptions: OptionSet, detectedArgument: string): void;
          isRequired(): boolean;
          requiresArgument(): boolean;
        }
        interface NoArgumentOptionSpec extends CombineTypes<[_NoArgumentOptionSpec, AbstractOptionSpec<java.lang.Void>]> {}
        interface _NonOptionArgumentSpec$$static<V> extends ClassLike {
          _NAME: string;
          _new(): NonOptionArgumentSpec<V>;
          _new(description: string): NonOptionArgumentSpec<V>;
        }
        let NonOptionArgumentSpec: _NonOptionArgumentSpec$$static<V>;
        interface _NonOptionArgumentSpec<V> {
          acceptsArguments(): boolean;
          argumentDescription(): string;
          argumentTypeIndicator(): string;
          _convert(argument: string): V;
          defaultValues(): java.util.List<any>;
          describedAs(description: string): NonOptionArgumentSpec<V>;
          _handleOption(parser: OptionParser, arguments: ArgumentList, detectedOptions: OptionSet, detectedArgument: string): void;
          isRequired(): boolean;
          ofType<T>(argumentType: java.lang.Class<T>): NonOptionArgumentSpec<T>;
          representsNonOptions(): boolean;
          requiresArgument(): boolean;
          withValuesConvertedBy<T>(aConverter: ValueConverter<T>): NonOptionArgumentSpec<T>;
          _argumentDescription: string;
          _converter: ValueConverter<V>;
        }
        interface NonOptionArgumentSpec<V> extends CombineTypes<[_NonOptionArgumentSpec<V>, AbstractOptionSpec<V>]> {}
        interface _OptionArgumentConversionException$$static extends ClassLike {
          _serialVersionUID: long;
          _new(options: OptionSpec<any>, argument: string, cause: java.lang.Throwable): OptionArgumentConversionException;
        }
        let OptionArgumentConversionException: _OptionArgumentConversionException$$static;
        interface _OptionArgumentConversionException {
          _messageArguments(): any[];
          _argument: string;
        }
        interface OptionArgumentConversionException extends CombineTypes<[_OptionArgumentConversionException, jdk.internal.joptsimple.OptionException]> {}
        interface _OptionDeclarer$$static extends ClassLike {
        }
        let OptionDeclarer: _OptionDeclarer$$static;
        interface _OptionDeclarer {
          accepts(a0: string): OptionSpecBuilder;
          accepts(a0: string, a1: string): OptionSpecBuilder;
          acceptsAll(a0: java.util.List<string>): OptionSpecBuilder;
          acceptsAll(a0: java.util.List<string>, a1: string): OptionSpecBuilder;
          allowsUnrecognizedOptions(): void;
          nonOptions(): NonOptionArgumentSpec<string>;
          nonOptions(a0: string): NonOptionArgumentSpec<string>;
          posixlyCorrect(a0: boolean): void;
          recognizeAlternativeLongOptions(a0: boolean): void;
        }
        interface OptionDeclarer extends CombineTypes<[_OptionDeclarer, java.lang.Object]> {}
        interface _OptionDescriptor$$static extends ClassLike {
        }
        let OptionDescriptor: _OptionDescriptor$$static;
        interface _OptionDescriptor {
          acceptsArguments(): boolean;
          argumentDescription(): string;
          argumentTypeIndicator(): string;
          defaultValues(): java.util.List<any>;
          description(): string;
          isRequired(): boolean;
          options(): java.util.List<string>;
          representsNonOptions(): boolean;
          requiresArgument(): boolean;
        }
        interface OptionDescriptor extends CombineTypes<[_OptionDescriptor, java.lang.Object]> {}
        interface _OptionException$$static extends ClassLike {
          _unrecognizedOption(option: string): OptionException;
          _serialVersionUID: long;
          _new(options: java.util.List<string>): OptionException;
          _new(options: java.util.Collection<OptionSpec<any>>): OptionException;
          _new(options: java.util.Collection<OptionSpec<any>>, cause: java.lang.Throwable): OptionException;
        }
        let OptionException: _OptionException$$static;
        interface _OptionException {
          _formattedMessage(locale: java.util.Locale): string;
          getMessage(): string;
          _localizedMessage(locale: java.util.Locale): string;
          _messageArguments(): any[];
(): any[];
          _multipleOptionString(): string;
          options(): java.util.List<string>;
          _singleOptionString(): string;
          _singleOptionString(option: string): string;
          _specToString(option: OptionSpec<any>): string;
          _specsToStrings(options: java.util.Collection<OptionSpec<any>>): java.util.List<string>;
          _options: java.util.List<string>;
        }
        interface OptionException extends CombineTypes<[_OptionException, java.lang.RuntimeException]> {}
        interface _OptionMissingRequiredArgumentException$$static extends ClassLike {
          _serialVersionUID: long;
          _new(option: OptionSpec<any>): OptionMissingRequiredArgumentException;
        }
        let OptionMissingRequiredArgumentException: _OptionMissingRequiredArgumentException$$static;
        interface _OptionMissingRequiredArgumentException {
          _messageArguments(): any[];
        }
        interface OptionMissingRequiredArgumentException extends CombineTypes<[_OptionMissingRequiredArgumentException, jdk.internal.joptsimple.OptionException]> {}
        interface _OptionParser$$static extends ClassLike {
          _extractShortOptionsFrom(argument: string): char[];
          _parseLongOptionWithArgument(argument: string): joptsimple.util.KeyValuePair;
          _parseShortOptionWithArgument(argument: string): joptsimple.util.KeyValuePair;
          new(): OptionParser;
          new(allowAbbreviations: boolean): OptionParser;
          new(optionSpecification: string): OptionParser;
        }
        let OptionParser: _OptionParser$$static;
        interface _OptionParser {
          __recognizedOptions(): java.util.Map<string,AbstractOptionSpec<any>>;
          accepts(option: string): OptionSpecBuilder;
          accepts(option: string, description: string): OptionSpecBuilder;
          acceptsAll(options: java.util.List<string>): OptionSpecBuilder;
          acceptsAll(options: java.util.List<string>, description: string): OptionSpecBuilder;
          allowsUnrecognizedOptions(): void;
          _availableIf(precedentSynonyms: java.util.List<string>, available: string): void;
          _availableIf(precedentSynonyms: java.util.List<string>, available: OptionSpec<any>): void;
          _availableUnless(precedentSynonyms: java.util.List<string>, available: string): void;
          _availableUnless(precedentSynonyms: java.util.List<string>, available: OptionSpec<any>): void;
          _doesAllowsUnrecognizedOptions(): boolean;
          _ensureAllowedOptions(options: OptionSet): void;
          _ensureRequiredOptions(options: OptionSet): void;
          formatHelpWith(formatter: HelpFormatter): void;
          _handleLongOptionToken(candidate: string, arguments: ArgumentList, detected: OptionSet): void;
          _handleNonOptionArgument(candidate: string, arguments: ArgumentList, detectedOptions: OptionSet): void;
          _handleShortOptionCluster(candidate: string, arguments: ArgumentList, detected: OptionSet): void;
          _handleShortOptionToken(candidate: string, arguments: ArgumentList, detected: OptionSet): void;
          _isHelpOptionPresent(options: OptionSet): boolean;
          _isRecognized(option: string): boolean;
          _looksLikeAnOption(argument: string): boolean;
          _missingRequiredOptions(options: OptionSet): java.util.List<AbstractOptionSpec<any>>;
          mutuallyExclusive(specs: OptionSpecBuilder[]): void;
          mutuallyExclusive(...specs: OptionSpecBuilder[]): void;
          _noMoreOptions(): void;
          nonOptions(): NonOptionArgumentSpec<string>;
          nonOptions(description: string): NonOptionArgumentSpec<string>;
          _optionsHasAnyOf(options: OptionSet, specs: java.util.Collection<OptionSpec<any>>): boolean;
          parse(arguments: string[]): OptionSet;
          parse(...arguments: string[]): OptionSet;
          posixlyCorrect(setting: boolean): void;
          _posixlyCorrect(): boolean;
          printHelpOn(sink: java.io.OutputStream): void;
          printHelpOn(sink: java.io.Writer): void;
          _putDependentOption(precedentSynonyms: java.util.List<string>, required: OptionSpec<any>, target: java.util.Map<java.util.List<string>,java.util.Set<OptionSpec<any>>>): void;
          _recognize(spec: AbstractOptionSpec<any>): void;
          recognizeAlternativeLongOptions(recognize: boolean): void;
          recognizedOptions(): java.util.Map<string,OptionSpec<any>>;
          _requiredIf(precedentSynonyms: java.util.List<string>, required: string): void;
          _requiredIf(precedentSynonyms: java.util.List<string>, required: OptionSpec<any>): void;
          _requiredUnless(precedentSynonyms: java.util.List<string>, required: string): void;
          _requiredUnless(precedentSynonyms: java.util.List<string>, required: OptionSpec<any>): void;
          _reset(): void;
          _specFor(option: char): AbstractOptionSpec<any>;
          _specFor(option: string): AbstractOptionSpec<any>;
          _unavailableOptions(options: OptionSet): java.util.List<AbstractOptionSpec<any>>;
          _validateOptionCharacters(options: char[]): void;
          _allowsUnrecognizedOptions: boolean;
          _availableIf: java.util.Map<java.util.List<string>,java.util.Set<OptionSpec<any>>>;
          _availableUnless: java.util.Map<java.util.List<string>,java.util.Set<OptionSpec<any>>>;
          _helpFormatter: HelpFormatter;
          _posixlyCorrect: boolean;
          _recognizedOptions: internal.OptionNameMap<AbstractOptionSpec<any>>;
          _requiredIf: java.util.Map<java.util.List<string>,java.util.Set<OptionSpec<any>>>;
          _requiredUnless: java.util.Map<java.util.List<string>,java.util.Set<OptionSpec<any>>>;
          _state: OptionParserState;
          _trainingOrder: java.util.ArrayList<AbstractOptionSpec<any>>;
        }
        interface OptionParser extends CombineTypes<[_OptionParser, java.lang.Object, jdk.internal.joptsimple.OptionDeclarer]> {}
        interface _OptionParserState$$static extends ClassLike {
          _moreOptions(posixlyCorrect: boolean): OptionParserState;
          _noMoreOptions(): OptionParserState;
          _new(): OptionParserState;
        }
        let OptionParserState: _OptionParserState$$static;
        interface _OptionParserState {
          _handleArgument(a0: OptionParser, a1: ArgumentList, a2: OptionSet): void;
(a0: OptionParser, a1: ArgumentList, a2: OptionSet): void;
        }
        interface OptionParserState extends CombineTypes<[_OptionParserState, java.lang.Object]> {}
        interface _OptionSet$$static extends ClassLike {
          _defaultValues(recognizedSpecs: java.util.Map<string,AbstractOptionSpec<any>>): java.util.Map<string,java.util.List<any>>;
          _new(recognizedSpecs: java.util.Map<string,AbstractOptionSpec<any>>): OptionSet;
        }
        let OptionSet: _OptionSet$$static;
        interface _OptionSet {
          _add(spec: AbstractOptionSpec<any>): void;
          _addWithArgument(spec: AbstractOptionSpec<any>, argument: string): void;
          asMap(): java.util.Map<OptionSpec<any>,java.util.List<any>>;
          _defaultValueFor<V>(option: OptionSpec<V>): java.util.List<V>;
          _defaultValuesFor<V>(option: string): java.util.List<V>;
          equals(that: any): boolean;
          has(option: string): boolean;
          has(option: OptionSpec<any>): boolean;
          hasArgument(option: string): boolean;
          hasArgument(option: OptionSpec<any>): boolean;
          hasOptions(): boolean;
          hashCode(): int;
          nonOptionArguments(): java.util.List<any>;
          specs(): java.util.List<OptionSpec<any>>;
          valueOf(option: string): any;
          valueOf<V>(option: OptionSpec<V>): V;
          valuesOf(option: string): java.util.List<any>;
          valuesOf<V>(option: OptionSpec<V>): java.util.List<V>;
          _defaultValues: java.util.Map<string,java.util.List<any>>;
          _detectedOptions: java.util.Map<string,AbstractOptionSpec<any>>;
          _detectedSpecs: java.util.List<OptionSpec<any>>;
          _optionsToArguments: java.util.Map<AbstractOptionSpec<any>,java.util.List<string>>;
          _recognizedSpecs: java.util.Map<string,AbstractOptionSpec<any>>;
        }
        interface OptionSet extends CombineTypes<[_OptionSet, java.lang.Object]> {}
        interface _OptionSpec$$static<V> extends ClassLike {
        }
        let OptionSpec: _OptionSpec$$static<V>;
        interface _OptionSpec<V> {
          isForHelp(): boolean;
          options(): java.util.List<string>;
          value(a0: OptionSet): V;
          values(a0: OptionSet): java.util.List<V>;
        }
        interface OptionSpec<V> extends CombineTypes<[_OptionSpec<V>, java.lang.Object]> {}
        interface _OptionSpecBuilder$$static extends ClassLike {
          _new(parser: OptionParser, options: java.util.List<string>, description: string): OptionSpecBuilder;
        }
        let OptionSpecBuilder: _OptionSpecBuilder$$static;
        interface _OptionSpecBuilder {
          acceptsArguments(): boolean;
          argumentDescription(): string;
          argumentTypeIndicator(): string;
          _attachToParser(): void;
          availableIf(dependent: string, otherDependents: string[]): OptionSpecBuilder;
          availableIf(dependent: string, ...otherDependents: string[]): OptionSpecBuilder;
          availableIf(dependent: OptionSpec<any>, otherDependents: OptionSpec<any>[]): OptionSpecBuilder;
          availableIf(dependent: OptionSpec<any>, ...otherDependents: OptionSpec<any>[]): OptionSpecBuilder;
          availableUnless(dependent: string, otherDependents: string[]): OptionSpecBuilder;
          availableUnless(dependent: string, ...otherDependents: string[]): OptionSpecBuilder;
          availableUnless(dependent: OptionSpec<any>, otherDependents: OptionSpec<any>[]): OptionSpecBuilder;
          availableUnless(dependent: OptionSpec<any>, ...otherDependents: OptionSpec<any>[]): OptionSpecBuilder;
          defaultValues(): java.util.List;
          isRequired(): boolean;
          requiredIf(dependent: string, otherDependents: string[]): OptionSpecBuilder;
          requiredIf(dependent: string, ...otherDependents: string[]): OptionSpecBuilder;
          requiredIf(dependent: OptionSpec<any>, otherDependents: OptionSpec<any>[]): OptionSpecBuilder;
          requiredIf(dependent: OptionSpec<any>, ...otherDependents: OptionSpec<any>[]): OptionSpecBuilder;
          requiredUnless(dependent: string, otherDependents: string[]): OptionSpecBuilder;
          requiredUnless(dependent: string, ...otherDependents: string[]): OptionSpecBuilder;
          requiredUnless(dependent: OptionSpec<any>, otherDependents: OptionSpec<any>[]): OptionSpecBuilder;
          requiredUnless(dependent: OptionSpec<any>, ...otherDependents: OptionSpec<any>[]): OptionSpecBuilder;
          requiresArgument(): boolean;
          _validatedDependents(dependent: string, otherDependents: string[]): java.util.List<string>;
          _validatedDependents(dependent: string, ...otherDependents: string[]): java.util.List<string>;
          withOptionalArg(): ArgumentAcceptingOptionSpec<string>;
          withRequiredArg(): ArgumentAcceptingOptionSpec<string>;
          _parser: OptionParser;
        }
        interface OptionSpecBuilder extends CombineTypes<[_OptionSpecBuilder, jdk.internal.joptsimple.NoArgumentOptionSpec]> {}
        interface _OptionSpecTokenizer$$static extends ClassLike {
          _HELP_MARKER: char;
          _POSIXLY_CORRECT_MARKER: char;
          _new(specification: string): OptionSpecTokenizer;
        }
        let OptionSpecTokenizer: _OptionSpecTokenizer$$static;
        interface _OptionSpecTokenizer {
          _adjustForPosixlyCorrect(parser: OptionParser): void;
          _configure(parser: OptionParser): void;
          _handleArgumentAcceptingOption(candidate: string): AbstractOptionSpec<any>;
          _handleReservedForExtensionsToken(): AbstractOptionSpec<any>;
          _hasMore(): boolean;
          _next(): AbstractOptionSpec<any>;
          _index: int;
          _specification: string;
        }
        interface OptionSpecTokenizer extends CombineTypes<[_OptionSpecTokenizer, java.lang.Object]> {}
        interface _OptionalArgumentOptionSpec$$static<V> extends ClassLike {
          _new(option: string): OptionalArgumentOptionSpec<V>;
          _new(options: java.util.List<string>, description: string): OptionalArgumentOptionSpec<V>;
        }
        let OptionalArgumentOptionSpec: _OptionalArgumentOptionSpec$$static<V>;
        interface _OptionalArgumentOptionSpec<V> {
          _detectOptionArgument(parser: OptionParser, arguments: ArgumentList, detectedOptions: OptionSet): void;
          _handleOptionArgument(parser: OptionParser, detectedOptions: OptionSet, arguments: ArgumentList): void;
        }
        interface OptionalArgumentOptionSpec<V> extends CombineTypes<[_OptionalArgumentOptionSpec<V>, ArgumentAcceptingOptionSpec<V>]> {}
        interface _ParserRules$$static extends ClassLike {
          _ensureLegalOption(option: string): void;
          _ensureLegalOptionCharacter(option: char): void;
          _ensureLegalOptions(options: java.util.List<string>): void;
          _isAllowedPunctuation(option: char): boolean;
          _isLongOptionToken(argument: string): boolean;
          _isOptionTerminator(argument: string): boolean;
          _isShortOptionToken(argument: string): boolean;
          _DOUBLE_HYPHEN: string;
          _HYPHEN: string;
          _HYPHEN_CHAR: char;
          _OPTION_TERMINATOR: string;
          _RESERVED_FOR_EXTENSIONS: string;
        }
        let ParserRules: _ParserRules$$static;
        interface _ParserRules {
        }
        interface ParserRules extends CombineTypes<[_ParserRules, java.lang.Object]> {}
        interface _RequiredArgumentOptionSpec$$static<V> extends ClassLike {
          _new(option: string): RequiredArgumentOptionSpec<V>;
          _new(options: java.util.List<string>, description: string): RequiredArgumentOptionSpec<V>;
        }
        let RequiredArgumentOptionSpec: _RequiredArgumentOptionSpec$$static<V>;
        interface _RequiredArgumentOptionSpec<V> {
          _detectOptionArgument(parser: OptionParser, arguments: ArgumentList, detectedOptions: OptionSet): void;
        }
        interface RequiredArgumentOptionSpec<V> extends CombineTypes<[_RequiredArgumentOptionSpec<V>, ArgumentAcceptingOptionSpec<V>]> {}
        interface _UnavailableOptionException$$static extends ClassLike {
          _serialVersionUID: long;
          _new(forbiddenOptions: java.util.List<OptionSpec<any>>): UnavailableOptionException;
        }
        let UnavailableOptionException: _UnavailableOptionException$$static;
        interface _UnavailableOptionException {
          _messageArguments(): any[];
        }
        interface UnavailableOptionException extends CombineTypes<[_UnavailableOptionException, jdk.internal.joptsimple.OptionException]> {}
        interface _UnconfiguredOptionException$$static extends ClassLike {
          _serialVersionUID: long;
          _new(option: string): UnconfiguredOptionException;
          _new(options: java.util.List<string>): UnconfiguredOptionException;
        }
        let UnconfiguredOptionException: _UnconfiguredOptionException$$static;
        interface _UnconfiguredOptionException {
          _messageArguments(): any[];
        }
        interface UnconfiguredOptionException extends CombineTypes<[_UnconfiguredOptionException, jdk.internal.joptsimple.OptionException]> {}
        interface _UnrecognizedOptionException$$static extends ClassLike {
          _serialVersionUID: long;
          _new(option: string): UnrecognizedOptionException;
        }
        let UnrecognizedOptionException: _UnrecognizedOptionException$$static;
        interface _UnrecognizedOptionException {
          _messageArguments(): any[];
        }
        interface UnrecognizedOptionException extends CombineTypes<[_UnrecognizedOptionException, jdk.internal.joptsimple.OptionException]> {}
        interface _ValueConversionException$$static extends ClassLike {
          _serialVersionUID: long;
          new(message: string): ValueConversionException;
          new(message: string, cause: java.lang.Throwable): ValueConversionException;
        }
        let ValueConversionException: _ValueConversionException$$static;
        interface _ValueConversionException {
        }
        interface ValueConversionException extends CombineTypes<[_ValueConversionException, java.lang.RuntimeException]> {}
        interface _ValueConverter$$static<V> extends ClassLike {
        }
        let ValueConverter: _ValueConverter$$static<V>;
        interface _ValueConverter<V> {
          convert(a0: string): V;
          valuePattern(): string;
          valueType(): java.lang.Class<V>;
        }
        interface ValueConverter<V> extends CombineTypes<[_ValueConverter<V>, java.lang.Object]> {}
      }
      module opt {
        interface _CommandLine$$static extends ClassLike {
          _appendParsedCommandArgs(newArgs: java.util.List<string>, args: java.util.List<string>): void;
          _appendParsedEnvVariables(newArgs: java.util.List<string>, envVariable: string): void;
          loadCmdFile(_in: java.io.InputStream, args: java.util.List<string>): void;
          _loadCmdFile(name: string, args: java.util.List<string>): void;
          _loadCmdFileAndCloseReader(r: java.io.Reader, args: java.util.List<string>): void;
          parse(args: string[]): string[];
          parse(...args: string[]): string[];
          parse(args: java.util.List<string>): java.util.List<string>;
          parse(envVariable: string, args: java.util.List<string>): java.util.List<string>;
          new(): CommandLine;
        }
        let CommandLine: _CommandLine$$static;
        interface _CommandLine {
        }
        interface CommandLine extends CombineTypes<[_CommandLine, java.lang.Object]> {}
        interface _CommandLine$Tokenizer$$static extends ClassLike {
          new(_in: java.io.Reader): CommandLine$Tokenizer;
        }
        let CommandLine$Tokenizer: _CommandLine$Tokenizer$$static;
        interface _CommandLine$Tokenizer {
          nextToken(): string;
          _skipWhite(): void;
          _ch: int;
          _in: java.io.Reader;
        }
        interface CommandLine$Tokenizer extends CombineTypes<[_CommandLine$Tokenizer, java.lang.Object]> {}
        interface _CommandLine$UnmatchedQuote$$static extends ClassLike {
          _serialVersionUID: long;
          _new(variable: string): CommandLine$UnmatchedQuote;
        }
        let CommandLine$UnmatchedQuote: _CommandLine$UnmatchedQuote$$static;
        interface _CommandLine$UnmatchedQuote {
          readonly variableName: string;
        }
        interface CommandLine$UnmatchedQuote extends CombineTypes<[_CommandLine$UnmatchedQuote, java.lang.Exception]> {}
      }
    }
  }
}
