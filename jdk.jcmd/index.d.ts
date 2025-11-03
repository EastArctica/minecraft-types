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
  module sun {
    module tools {
      module common {
        interface _PrintStreamPrinter$$static extends ClassLike {
          drainUTF8(is: java.io.InputStream, ps: java.io.PrintStream): long;
          new(): PrintStreamPrinter;
        }
        let PrintStreamPrinter: _PrintStreamPrinter$$static;
        interface _PrintStreamPrinter {
        }
        interface PrintStreamPrinter extends CombineTypes<[_PrintStreamPrinter, java.lang.Object]> {}
        interface _ProcessArgumentMatcher$$static extends ClassLike {
          _check(vmd: com.sun.tools.attach.VirtualMachineDescriptor, excludeClass: string, partialMatch: string): boolean;
          _getExcludeStringFrom(excludeClass: java.lang.Class<any>): string;
          _getSingleVMD(pid: string): java.util.Collection<com.sun.tools.attach.VirtualMachineDescriptor>;
          _getVMDs(excludeClass: java.lang.Class<any>, partialMatch: string): java.util.Collection<com.sun.tools.attach.VirtualMachineDescriptor>;
          new(pidArg: string): ProcessArgumentMatcher;
        }
        let ProcessArgumentMatcher: _ProcessArgumentMatcher$$static;
        interface _ProcessArgumentMatcher {
          getVirtualMachineDescriptors(): java.util.Collection<com.sun.tools.attach.VirtualMachineDescriptor>;
          getVirtualMachinePids(excludeClass: java.lang.Class<any>): java.util.Collection<string>;
          _matchClass: string;
          _singlePid: string;
        }
        interface ProcessArgumentMatcher extends CombineTypes<[_ProcessArgumentMatcher, java.lang.Object]> {}
        interface _ProcessHelper$$static extends ClassLike {
          _getMainClass(pid: string): string;
          _new(): ProcessHelper;
        }
        let ProcessHelper: _ProcessHelper$$static;
        interface _ProcessHelper {
        }
        interface ProcessHelper extends CombineTypes<[_ProcessHelper, java.lang.Object]> {}
      }
      module jcmd {
        interface _Arguments$$static extends ClassLike {
          usage(): void;
          new(args: string[]): Arguments;
        }
        let Arguments: _Arguments$$static;
        interface _Arguments {
          getCommand(): string;
          getProcessString(): string;
          isListCounters(): boolean;
          isListProcesses(): boolean;
          isShowUsage(): boolean;
          _readCommandFile(path: string): void;
          _command: string;
          _listCounters: boolean;
          _listProcesses: boolean;
          _processString: string;
          _showUsage: boolean;
        }
        interface Arguments extends CombineTypes<[_Arguments, java.lang.Object]> {}
        interface _JCmd$$static extends ClassLike {
          _executeCommandForPid(pid: string, command: string): void;
          _listCounters(pid: string): void;
          main(args: string[]): void;
          new(): JCmd;
        }
        let JCmd: _JCmd$$static;
        interface _JCmd {
        }
        interface JCmd extends CombineTypes<[_JCmd, java.lang.Object]> {}
        interface _JCmd$AscendingMonitorComparator$$static extends ClassLike {
          _new(): JCmd$AscendingMonitorComparator;
        }
        let JCmd$AscendingMonitorComparator: _JCmd$AscendingMonitorComparator$$static;
        interface _JCmd$AscendingMonitorComparator {
          compare(m1: sun.jvmstat.monitor.Monitor, m2: sun.jvmstat.monitor.Monitor): int;
          compare(a0: any, a1: any): int;
        }
        interface JCmd$AscendingMonitorComparator extends CombineTypes<[_JCmd$AscendingMonitorComparator, java.lang.Object, java.util.Comparator<sun.jvmstat.monitor.Monitor>]> {}
      }
      module jinfo {
        interface _JInfo$$static extends ClassLike {
          _SAOptionError(msg: string): void;
          _attach(pid: string): com.sun.tools.attach.VirtualMachine;
          _checkForUnsupportedOptions(args: string[]): void;
          _commandLine(pid: string): void;
          _drain(vm: com.sun.tools.attach.VirtualMachine, _in: java.io.InputStream): void;
          _flag(pid: string, option: string): void;
          _flags(pid: string): void;
          main(args: string[]): void;
          _sysprops(pid: string): void;
          _usage(exit: int): void;
          new(): JInfo;
        }
        let JInfo: _JInfo$$static;
        interface _JInfo {
        }
        interface JInfo extends CombineTypes<[_JInfo, java.lang.Object]> {}
      }
      module jmap {
        interface _JMap$$static extends ClassLike {
          _SAOptionError(msg: string): void;
          _checkForUnsupportedOptions(args: string[]): void;
          _dump(pid: string, options: string): void;
          _executeCommandForPid(pid: string, command: string, args: any[]): void;
          _executeCommandForPid(pid: string, command: string, ...args: any[]): void;
          _histo(pid: string, options: string): void;
          main(args: string[]): void;
          _parseFileName(opt: string): string;
          _usage(exit: int): void;
          new(): JMap;
        }
        let JMap: _JMap$$static;
        interface _JMap {
        }
        interface JMap extends CombineTypes<[_JMap, java.lang.Object]> {}
      }
      module jps {
        interface _Arguments$$static extends ClassLike {
          printUsage(ps: java.io.PrintStream): void;
          _debug: boolean;
          _printStackTrace: boolean;
          new(args: string[]): Arguments;
        }
        let Arguments: _Arguments$$static;
        interface _Arguments {
          hostId(): sun.jvmstat.monitor.HostIdentifier;
          hostname(): string;
          isDebug(): boolean;
          isHelp(): boolean;
          isQuiet(): boolean;
          printStackTrace(): boolean;
          showLongPaths(): boolean;
          showMainArgs(): boolean;
          showVmArgs(): boolean;
          showVmFlags(): boolean;
          _help: boolean;
          _hostId: sun.jvmstat.monitor.HostIdentifier;
          _hostname: string;
          _longPaths: boolean;
          _mainArgs: boolean;
          _quiet: boolean;
          _vmArgs: boolean;
          _vmFlags: boolean;
        }
        interface Arguments extends CombineTypes<[_Arguments, java.lang.Object]> {}
        interface _Jps$$static extends ClassLike {
          main(args: string[]): void;
          _arguments: Arguments;
          new(): Jps;
        }
        let Jps: _Jps$$static;
        interface _Jps {
        }
        interface Jps extends CombineTypes<[_Jps, java.lang.Object]> {}
      }
      module jstack {
        interface _JStack$$static extends ClassLike {
          _SAOptionError(msg: string): void;
          _checkForUnsupportedOptions(args: string[]): void;
          main(args: string[]): void;
          _runThreadDump(pid: string, args: string[]): void;
          _usage(exit: int): void;
          new(): JStack;
        }
        let JStack: _JStack$$static;
        interface _JStack {
        }
        interface JStack extends CombineTypes<[_JStack, java.lang.Object]> {}
      }
      module jstat {
        interface _Alignment$$static extends ClassLike {
          keySet(): java.util.Set<string>;
          toAlignment(s: string): Alignment;
          readonly CENTER: Alignment;
          readonly LEFT: Alignment;
          readonly RIGHT: Alignment;
          _blanks: string;
          _map: java.util.HashMap<string,Alignment>;
          _nextOrdinal: int;
        }
        let Alignment: _Alignment$$static;
        interface _Alignment {
          _align(a0: string, a1: int): string;
(a0: string, a1: int): string;
          toString(): string;
          _name: string;
          _value: int;
        }
        interface Alignment extends CombineTypes<[_Alignment, java.lang.Object]> {}
        interface _Arguments$$static extends ClassLike {
          printUsage(ps: java.io.PrintStream): void;
          _toMillis(s: string): int;
          _ALL_NAMES: string;
          _JVMSTAT_USERDIR: string;
          _OPTIONS_FILENAME: string;
          _UNSUPPORTED_OPTIONS_FILENAME: string;
          _debug: boolean;
          _showUnsupported: boolean;
          new(args: string[]): Arguments;
        }
        let Arguments: _Arguments$$static;
        interface _Arguments {
          comparator(): java.util.Comparator<sun.jvmstat.monitor.Monitor>;
          counterNames(): string;
          headerRate(): int;
          isConstantsOnly(): boolean;
          isHelp(): boolean;
          isList(): boolean;
          isOptions(): boolean;
          isSnap(): boolean;
          isSpecialOption(): boolean;
          isTimestamp(): boolean;
          isVerbose(): boolean;
          optionFormat(): OptionFormat;
          optionsSources(): java.util.List<java.net.URL>;
          printConstants(): boolean;
          printStrings(): boolean;
          sampleCount(): int;
          sampleInterval(): int;
          showUnsupported(): boolean;
          specialOption(): string;
          vmId(): sun.jvmstat.monitor.VmIdentifier;
          vmIdString(): string;
          _comparator: java.util.Comparator<sun.jvmstat.monitor.Monitor>;
          _constants: boolean;
          _constantsOnly: boolean;
          _count: int;
          _headerRate: int;
          _help: boolean;
          _interval: int;
          _list: boolean;
          _names: string;
          _optionFormat: OptionFormat;
          _options: boolean;
          _snap: boolean;
          _specialOption: string;
          _strings: boolean;
          _timestamp: boolean;
          _verbose: boolean;
          _vmId: sun.jvmstat.monitor.VmIdentifier;
          _vmIdString: string;
        }
        interface Arguments extends CombineTypes<[_Arguments, java.lang.Object]> {}
        interface _AscendingMonitorComparator$$static extends ClassLike {
          _new(): AscendingMonitorComparator;
        }
        let AscendingMonitorComparator: _AscendingMonitorComparator$$static;
        interface _AscendingMonitorComparator {
          compare(o1: sun.jvmstat.monitor.Monitor, o2: sun.jvmstat.monitor.Monitor): int;
          compare(a0: any, a1: any): int;
        }
        interface AscendingMonitorComparator extends CombineTypes<[_AscendingMonitorComparator, java.lang.Object, java.util.Comparator<sun.jvmstat.monitor.Monitor>]> {}
        interface _Closure$$static extends ClassLike {
        }
        let Closure: _Closure$$static;
        interface _Closure {
          visit(a0: any, a1: boolean): void;
(a0: any, a1: boolean): void;
        }
        interface Closure extends CombineTypes<[_Closure, java.lang.Object]> {}
        interface _ColumnFormat$$static extends ClassLike {
          new(number: int): ColumnFormat;
        }
        let ColumnFormat: _ColumnFormat$$static;
        interface _ColumnFormat {
          getAlignment(): Alignment;
          getExpression(): Expression;
          getFormat(): string;
          getHeader(): string;
          getPreviousValue(): any;
          getScale(): Scale;
          getValue(): string;
          getWidth(): int;
          isRequired(): boolean;
          printFormat(indentLevel: int): void;
          setAlignment(align: Alignment): void;
          setExpression(e: Expression): void;
          setFormat(format: string): void;
          setHeader(header: string): void;
          setPreviousValue(o: any): void;
          setRequired(r: boolean): void;
          setScale(scale: Scale): void;
          setWidth(width: int): void;
          validate(): void;
          _align: Alignment;
          _expression: Expression;
          _format: string;
          _header: string;
          _number: int;
          _previousValue: any;
          _required: boolean;
          _scale: Scale;
          _width: int;
        }
        interface ColumnFormat extends CombineTypes<[_ColumnFormat, sun.tools.jstat.OptionFormat]> {}
        interface _DescendingMonitorComparator$$static extends ClassLike {
          _new(): DescendingMonitorComparator;
        }
        let DescendingMonitorComparator: _DescendingMonitorComparator$$static;
        interface _DescendingMonitorComparator {
          compare(o1: sun.jvmstat.monitor.Monitor, o2: sun.jvmstat.monitor.Monitor): int;
          compare(a0: any, a1: any): int;
        }
        interface DescendingMonitorComparator extends CombineTypes<[_DescendingMonitorComparator, java.lang.Object, java.util.Comparator<sun.jvmstat.monitor.Monitor>]> {}
        interface _Expression$$static extends ClassLike {
          _nextOrdinal: int;
          _new(): Expression;
        }
        let Expression: _Expression$$static;
        interface _Expression {
          _getLeft(): Expression;
          _getOperator(): Operator;
          _getRight(): Expression;
          _isRequired(): boolean;
          _setLeft(left: Expression): void;
          _setOperator(o: Operator): void;
          _setRequired(r: boolean): void;
          _setRight(right: Expression): void;
          toString(): string;
          _debug: boolean;
          _left: Expression;
          _operator: Operator;
          _ordinal: int;
          _required: boolean;
          _right: Expression;
        }
        interface Expression extends CombineTypes<[_Expression, java.lang.Object]> {}
        interface _ExpressionEvaluator$$static extends ClassLike {
        }
        let ExpressionEvaluator: _ExpressionEvaluator$$static;
        interface _ExpressionEvaluator {
          evaluate(a0: Expression): any;
(a0: Expression): any;
        }
        interface ExpressionEvaluator extends CombineTypes<[_ExpressionEvaluator, java.lang.Object]> {}
        interface _ExpressionExecuter$$static extends ClassLike {
          _debug: boolean;
          _new(vm: sun.jvmstat.monitor.MonitoredVm): ExpressionExecuter;
        }
        let ExpressionExecuter: _ExpressionExecuter$$static;
        interface _ExpressionExecuter {
          evaluate(e: Expression): any;
          _map: java.util.HashMap<string,any>;
          _vm: sun.jvmstat.monitor.MonitoredVm;
        }
        interface ExpressionExecuter extends CombineTypes<[_ExpressionExecuter, sun.tools.jstat.ExpressionEvaluator, java.lang.Object]> {}
        interface _ExpressionResolver$$static extends ClassLike {
          _debug: boolean;
          _new(vm: sun.jvmstat.monitor.MonitoredVm): ExpressionResolver;
        }
        let ExpressionResolver: _ExpressionResolver$$static;
        interface _ExpressionResolver {
          evaluate(e: Expression): any;
          _vm: sun.jvmstat.monitor.MonitoredVm;
        }
        interface ExpressionResolver extends CombineTypes<[_ExpressionResolver, sun.tools.jstat.ExpressionEvaluator, java.lang.Object]> {}
        interface _HeaderClosure$$static extends ClassLike {
          _ALIGN_CHAR: char;
          new(): HeaderClosure;
        }
        let HeaderClosure: _HeaderClosure$$static;
        interface _HeaderClosure {
          getHeader(): string;
          visit(o: any, hasNext: boolean): void;
          _header: jstat$stringBuilder;
        }
        interface HeaderClosure extends CombineTypes<[_HeaderClosure, sun.tools.jstat.Closure, java.lang.Object]> {}
        interface _Identifier$$static extends ClassLike {
          new(name: string): Identifier;
        }
        let Identifier: _Identifier$$static;
        interface _Identifier {
          getName(): string;
          getValue(): any;
          isResolved(): boolean;
          setValue(value: any): void;
          toString(): string;
          _name: string;
          _value: any;
        }
        interface Identifier extends CombineTypes<[_Identifier, sun.tools.jstat.Expression]> {}
        interface _JStatLogger$$static extends ClassLike {
          new(monitoredVm: sun.jvmstat.monitor.MonitoredVm): JStatLogger;
        }
        let JStatLogger: _JStatLogger$$static;
        interface _JStatLogger {
          logSamples(formatter: OutputFormatter, headerRate: int, sampleInterval: int, sampleCount: int, out: java.io.PrintStream): void;
          printList(list: java.util.List<sun.jvmstat.monitor.Monitor>, verbose: boolean, showUnsupported: boolean, out: java.io.PrintStream): void;
          printNames(names: string, comparator: java.util.Comparator<sun.jvmstat.monitor.Monitor>, showUnsupported: boolean, out: java.io.PrintStream): void;
          printSnapShot(names: string, comparator: java.util.Comparator<sun.jvmstat.monitor.Monitor>, verbose: boolean, showUnsupported: boolean, out: java.io.PrintStream): void;
          stopLogging(): void;
          _active: boolean;
          _monitoredVm: sun.jvmstat.monitor.MonitoredVm;
        }
        interface JStatLogger extends CombineTypes<[_JStatLogger, java.lang.Object]> {}
        interface _Jstat$$static extends ClassLike {
          _logNames(): void;
          _logSamples(): void;
          _logSnapShot(): void;
          main(args: string[]): void;
          _arguments: Arguments;
          new(): Jstat;
        }
        let Jstat: _Jstat$$static;
        interface _Jstat {
        }
        interface Jstat extends CombineTypes<[_Jstat, java.lang.Object]> {}
        interface _Literal$$static extends ClassLike {
          new(value: any): Literal;
        }
        let Literal: _Literal$$static;
        interface _Literal {
          getValue(): any;
          setValue(value: any): void;
          toString(): string;
          _value: any;
        }
        interface Literal extends CombineTypes<[_Literal, sun.tools.jstat.Expression]> {}
        interface _Operator$$static extends ClassLike {
          _keySet(): java.util.Set<any>;
          toOperator(s: string): Operator;
          readonly DIVIDE: Operator;
          readonly MINUS: Operator;
          readonly MULTIPLY: Operator;
          readonly PLUS: Operator;
          _map: java.util.HashMap<string,Operator>;
          _nextOrdinal: int;
        }
        let Operator: _Operator$$static;
        interface _Operator {
          _eval(a0: double, a1: double): double;
(a0: double, a1: double): double;
          toString(): string;
          _name: string;
          _ordinal: int;
        }
        interface Operator extends CombineTypes<[_Operator, java.lang.Object]> {}
        interface _OptionFinder$$static extends ClassLike {
          _debug: boolean;
          new(optionsSources: java.util.List<java.net.URL>): OptionFinder;
        }
        let OptionFinder: _OptionFinder$$static;
        interface _OptionFinder {
          getOptionFormat(option: string, useTimestamp: boolean): OptionFormat;
          _getOptionFormat(option: string, sources: java.util.List<java.net.URL>): OptionFormat;
          _optionsSources: java.util.List<java.net.URL>;
        }
        interface OptionFinder extends CombineTypes<[_OptionFinder, java.lang.Object]> {}
        interface _OptionFormat$$static extends ClassLike {
          new(name: string): OptionFormat;
        }
        let OptionFormat: _OptionFormat$$static;
        interface _OptionFormat {
          addSubFormat(f: OptionFormat): void;
          apply(c: Closure): void;
          equals(o: any): boolean;
          getName(): string;
          getSubFormat(index: int): OptionFormat;
          hashCode(): int;
          insertSubFormat(index: int, f: OptionFormat): void;
          printFormat(): void;
          printFormat(indentLevel: int): void;
          _children: java.util.List<OptionFormat>;
          _name: string;
        }
        interface OptionFormat extends CombineTypes<[_OptionFormat, java.lang.Object]> {}
        interface _OptionLister$$static extends ClassLike {
          _debug: boolean;
          new(sources: java.util.List<java.net.URL>): OptionLister;
        }
        let OptionLister: _OptionLister$$static;
        interface _OptionLister {
          print(ps: java.io.PrintStream): void;
          _sources: java.util.List<java.net.URL>;
        }
        interface OptionLister extends CombineTypes<[_OptionLister, java.lang.Object]> {}
        interface _OptionOutputFormatter$$static extends ClassLike {
          new(vm: sun.jvmstat.monitor.MonitoredVm, format: OptionFormat): OptionOutputFormatter;
        }
        let OptionOutputFormatter: _OptionOutputFormatter$$static;
        interface _OptionOutputFormatter {
          getHeader(): string;
          getRow(): string;
          _resolve(): void;
          _format: OptionFormat;
          _header: string;
          _vm: sun.jvmstat.monitor.MonitoredVm;
        }
        interface OptionOutputFormatter extends CombineTypes<[_OptionOutputFormatter, sun.tools.jstat.OutputFormatter, java.lang.Object]> {}
        interface _OutputFormatter$$static extends ClassLike {
        }
        let OutputFormatter: _OutputFormatter$$static;
        interface _OutputFormatter {
          getHeader(): string;
          getRow(): string;
        }
        interface OutputFormatter extends CombineTypes<[_OutputFormatter, java.lang.Object]> {}
        interface _Parser$$static extends ClassLike {
          _ALIGN: string;
          _CLOSEBLOCK: char;
          _CLOSEPAREN: char;
          _COLUMN: string;
          _DATA: string;
          _DOUBLEQUOTE: char;
          _FORMAT: string;
          _HEADER: string;
          _OPENBLOCK: char;
          _OPENPAREN: char;
          _OPERATOR_DIVIDE: char;
          _OPERATOR_MINUS: char;
          _OPERATOR_MULTIPLY: char;
          _OPERATOR_PLUS: char;
          _OPTION: string;
          _PERCENT_CHAR: char;
          _REQUIRED: string;
          _SCALE: string;
          _START: string;
          _WIDTH: string;
          _alignKeyWords: java.util.Set<string>;
          _boolKeyWords: java.util.Set<string>;
          _delimiters: char[];
          _infixOps: char[];
          _ldebug: boolean;
          _otherKeyWords: string[];
          _pdebug: boolean;
          _reservedWords: java.util.Set<string>;
          _scaleKeyWords: java.util.Set<string>;
          new(filename: string): Parser;
          new(r: java.io.Reader): Parser;
        }
        let Parser: _Parser$$static;
        interface _Parser {
          _addExpression(): Expression;
          _alignStmt(cf: ColumnFormat): void;
          _dataStmt(cf: ColumnFormat): void;
          _expression(): Expression;
          _formatStmt(cf: ColumnFormat): void;
          _getOptionFormat(): OptionFormat;
          _headerStmt(cf: ColumnFormat): void;
          _isInfixOperator(op: char): boolean;
          _isReservedWord(word: string): boolean;
          _log(logging: boolean, s: string): void;
          _match(ttype: int, token: string): void;
          _match(ttype: int): void;
          _match(ttype: char): void;
          _match(token: string): void;
          _matchID(): void;
          _matchNumber(): void;
          _matchOne(keyWords: java.util.Set<string>): Token;
          _matchQuotedString(): void;
          _multExpression(): Expression;
          _nextToken(): void;
          _optionList(of: OptionFormat): void;
          _optionStmt(): OptionFormat;
          parse(option: string): OptionFormat;
          parseOptions(): java.util.Set<OptionFormat>;
          _primary(): Expression;
          _pushBack(): void;
          _requiredStmt(cf: ColumnFormat): void;
          _scaleStmt(cf: ColumnFormat): void;
          _statementList(cf: ColumnFormat): void;
          _unary(): Expression;
          _widthStmt(cf: ColumnFormat): void;
          _columnCount: int;
          _filename: string;
          _lookahead: Token;
          _optionFormat: OptionFormat;
          _previous: Token;
          _st: java.io.StreamTokenizer;
        }
        interface Parser extends CombineTypes<[_Parser, java.lang.Object]> {}
        interface _ParserException$$static extends ClassLike {
          new(): ParserException;
          new(msg: string): ParserException;
        }
        let ParserException: _ParserException$$static;
        interface _ParserException {
        }
        interface ParserException extends CombineTypes<[_ParserException, java.lang.Exception]> {}
        interface _RawOutputFormatter$$static extends ClassLike {
          new(logged: java.util.List<sun.jvmstat.monitor.Monitor>, printStrings: boolean): RawOutputFormatter;
        }
        let RawOutputFormatter: _RawOutputFormatter$$static;
        interface _RawOutputFormatter {
          getHeader(): string;
          getRow(): string;
          _header: string;
          _logged: java.util.List<sun.jvmstat.monitor.Monitor>;
          _printStrings: boolean;
        }
        interface RawOutputFormatter extends CombineTypes<[_RawOutputFormatter, sun.tools.jstat.OutputFormatter, java.lang.Object]> {}
        interface _RowClosure$$static extends ClassLike {
          new(vm: sun.jvmstat.monitor.MonitoredVm): RowClosure;
        }
        let RowClosure: _RowClosure$$static;
        interface _RowClosure {
          getRow(): string;
          visit(o: any, hasNext: boolean): void;
          _row: jstat$stringBuilder;
          _vm: sun.jvmstat.monitor.MonitoredVm;
        }
        interface RowClosure extends CombineTypes<[_RowClosure, sun.tools.jstat.Closure, java.lang.Object]> {}
        interface _Scale$$static extends ClassLike {
          _keySet(): java.util.Set<string>;
          toScale(s: string): Scale;
          readonly GIGA: Scale;
          readonly HOUR: Scale;
          readonly HOUR2: Scale;
          readonly KILO: Scale;
          readonly MEGA: Scale;
          readonly MICRO: Scale;
          readonly MILLI: Scale;
          readonly MINUTES: Scale;
          readonly MSEC: Scale;
          readonly NANO: Scale;
          readonly NSEC: Scale;
          readonly PERCENT: Scale;
          readonly PETA: Scale;
          readonly PICO: Scale;
          readonly PSEC: Scale;
          readonly RAW: Scale;
          readonly SEC: Scale;
          readonly SEC2: Scale;
          readonly TERA: Scale;
          readonly USEC: Scale;
          _map: java.util.HashMap<string,Scale>;
          _nextOrdinal: int;
        }
        let Scale: _Scale$$static;
        interface _Scale {
          getFactor(): double;
          _scale(value: double): double;
          toString(): string;
          _factor: double;
          _name: string;
          _ordinal: int;
        }
        interface Scale extends CombineTypes<[_Scale, java.lang.Object]> {}
        interface _SymbolResolutionClosure$$static extends ClassLike {
          _debug: boolean;
          new(ee: ExpressionEvaluator): SymbolResolutionClosure;
        }
        let SymbolResolutionClosure: _SymbolResolutionClosure$$static;
        interface _SymbolResolutionClosure {
          visit(o: any, hasNext: boolean): void;
          _ee: ExpressionEvaluator;
        }
        interface SymbolResolutionClosure extends CombineTypes<[_SymbolResolutionClosure, sun.tools.jstat.Closure, java.lang.Object]> {}
        interface _SyntaxException$$static extends ClassLike {
          new(message: string): SyntaxException;
          new(lineno: int, expected: string, found: string): SyntaxException;
          new(lineno: int, expected: string, found: Token): SyntaxException;
          new(lineno: int, expected: Token, found: Token): SyntaxException;
          new(lineno: int, expected: java.util.Set<string>, found: Token): SyntaxException;
        }
        let SyntaxException: _SyntaxException$$static;
        interface _SyntaxException {
          getMessage(): string;
          _message: string;
        }
        interface SyntaxException extends CombineTypes<[_SyntaxException, sun.tools.jstat.ParserException]> {}
        interface _Token$$static extends ClassLike {
          new(ttype: int, sval: string, nval: double): Token;
          new(ttype: int, sval: string): Token;
          new(ttype: int): Token;
        }
        let Token: _Token$$static;
        interface _Token {
          toMessage(): string;
          toString(): string;
          nval: double;
          sval: string;
          ttype: int;
        }
        interface Token extends CombineTypes<[_Token, java.lang.Object]> {}
      }
    }
  }
}
