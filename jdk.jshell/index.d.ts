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
      module jshell {
        module debug {
          interface _InternalDebugControl$$static extends ClassLike {
            debug(state: jdk.jshell.JShell, err: java.io.PrintStream, flags: int, format: string, args: any[]): void;
            debug(state: jdk.jshell.JShell, err: java.io.PrintStream, flags: int, format: string, ...args: any[]): void;
            debug(state: jdk.jshell.JShell, err: java.io.PrintStream, ex: java.lang.Throwable, where: string): void;
            isDebugEnabled(state: jdk.jshell.JShell, flag: int): boolean;
            release(state: jdk.jshell.JShell): void;
            setDebugFlags(state: jdk.jshell.JShell, flags: int): void;
            readonly DBG_COMPA: int;
            readonly DBG_DEP: int;
            readonly DBG_EVNT: int;
            readonly DBG_FMGR: int;
            readonly DBG_GEN: int;
            readonly DBG_WRAP: int;
            _debugMap: java.util.Map<jdk.jshell.JShell,int>;
          }
          let InternalDebugControl: _InternalDebugControl$$static;
          interface _InternalDebugControl {
          }
          interface InternalDebugControl extends CombineTypes<[_InternalDebugControl, java.lang.Object]> {}
        }
        module tool {
          module resources {
            interface _l10n$$static extends ClassLike {
              new(): l10n;
            }
            let l10n: _l10n$$static;
            interface _l10n {
              _getContents(): any[][];
            }
            interface l10n extends CombineTypes<[_l10n, java.util.ListResourceBundle]> {}
            interface _l10n_de$$static extends ClassLike {
              new(): l10n_de;
            }
            let l10n_de: _l10n_de$$static;
            interface _l10n_de {
              _getContents(): any[][];
            }
            interface l10n_de extends CombineTypes<[_l10n_de, java.util.ListResourceBundle]> {}
            interface _l10n_ja$$static extends ClassLike {
              new(): l10n_ja;
            }
            let l10n_ja: _l10n_ja$$static;
            interface _l10n_ja {
              _getContents(): any[][];
            }
            interface l10n_ja extends CombineTypes<[_l10n_ja, java.util.ListResourceBundle]> {}
            interface _l10n_zh_CN$$static extends ClassLike {
              new(): l10n_zh_CN;
            }
            let l10n_zh_CN: _l10n_zh_CN$$static;
            interface _l10n_zh_CN {
              _getContents(): any[][];
            }
            interface l10n_zh_CN extends CombineTypes<[_l10n_zh_CN, java.util.ListResourceBundle]> {}
            interface _version$$static extends ClassLike {
              new(): version;
            }
            let version: _version$$static;
            interface _version {
              _getContents(): any[][];
            }
            interface version extends CombineTypes<[_version, java.util.ListResourceBundle]> {}
          }
          interface _ArgTokenizer$$static extends ClassLike {
            _CT_ALPHA: byte;
            _CT_QUOTE: byte;
            _CT_WHITESPACE: byte;
            _new(prefix: string, arg: string): ArgTokenizer;
          }
          let ArgTokenizer: _ArgTokenizer$$static;
          interface _ArgTokenizer {
            _allowedOptions(opts: string[]): void;
            _allowedOptions(...opts: string[]): void;
            _badOptions(): string;
            _foundOption(opt: string): void;
            _hasOption(opt: string): boolean;
            _isAllowedOption(opt: string): boolean;
            _isQuoted(): boolean;
            _mark(): void;
            _next(): string;
            nextToken(): void;
            _optionCount(): int;
            _quoteChar(ch: int): void;
            _read(): int;
            _remainder(): string;
            _rewind(): void;
            _unicode2ctype(c: int): int;
            _val(): string;
            _whitespaceChars(low: int, hi: int): void;
            _whole(): string;
            _badOptions: java.util.List<string>;
            _buf: char[];
            _ctype: byte[];
            _isQuoted: boolean;
            _length: int;
            _mark: int;
            _next: int;
            _options: java.util.Map<string,boolean>;
            _prefix: string;
            _str: string;
            _sval: string;
          }
          interface ArgTokenizer extends CombineTypes<[_ArgTokenizer, java.lang.Object]> {}
          interface _ConsoleIOContext$$static extends ClassLike {
            _commonPrefix(str1: string, str2: string): string;
            _AUTOPRINT_THRESHOLD: int;
            _ESCAPE_TIMEOUT: long;
            _FIXES_SHORTCUT: string;
            _FIX_COMPUTERS: ConsoleIOContext$FixComputer[];
            _HISTORY_LINE_PREFIX: string;
            _LINE_SEPARATOR: string;
            _LINE_SEPARATORS2: string;
            _NEEDED_LINES: int;
            _new(repl: JShellTool, cmdin: java.io.InputStream, cmdout: java.io.PrintStream, interactive: boolean): ConsoleIOContext;
          }
          let ConsoleIOContext: _ConsoleIOContext$$static;
          interface _ConsoleIOContext {
            afterUserCode(): void;
            beforeUserCode(): void;
            charset(): java.nio.charset.Charset;
            close(): void;
            _complete(completionState: ConsoleIOContext$CompletionState): boolean;
            _countPendingOpenBraces(code: string): int;
            _countTrailintBackslashes(text: ConsoleIOContext$charSequence): int;
            _doPrintFullDocumentation(todo: java.util.List<ConsoleIOContext$CompletionTask>, doc: java.util.List<string>, command: boolean): ConsoleIOContext$CompletionTask$Result;
            _doReadUserLine(prompt: string, mask: ConsoleIOContext$character): string;
            _fixes(): boolean;
            _fixes(computer: ConsoleIOContext$FixComputer): void;
            _getHistory(): internal.org.jline.reader.History;
            history(currentSession: boolean): java.lang.Iterable<string>;
            interactiveOutput(): boolean;
            _printColumns(candidates: java.util.List<ConsoleIOContext$charSequence>): void;
            readLine(firstLinePrompt: string, continuationPrompt: string, firstLine: boolean, prefix: string): string;
            _readOutRemainingEscape(c: int): void;
            readPassword(prompt: string): char[];
            readUserInput(): int;
            readUserInputChar(): char;
            readUserLine(prompt: string): string;
            replaceLastHistoryEntry(source: string): void;
            resume(): void;
            setIndent(indent: int): void;
            suspend(): void;
            terminalEditorRunning(): boolean;
            _toSplitEntries(entry: string): java.util.stream.Stream<string>;
            userOutput(): java.io.Writer;
            _allowIncompleteInputs: boolean;
            _backgroundWork: java.util.concurrent.ExecutorService;
            _historyLoad: java.time.Instant;
            _in: internal.org.jline.reader.impl.LineReaderImpl;
            _input: StopDetectingInputStream;
            _originalAttributes: internal.org.jline.terminal.Attributes;
            _pendingBytes: byte[];
            _pendingBytesPointer: int;
            _pendingLine: string;
            _pendingLinePointer: int;
            _prefix: string;
            _repl: JShellTool;
            _userInputHistory: internal.org.jline.reader.History;
          }
          interface ConsoleIOContext extends CombineTypes<[_ConsoleIOContext, jdk.internal.jshell.tool.IOContext]> {}
          interface _ConsoleIOContext$AllSuggestionsCompletionTask$$static extends ClassLike {
            new(a0: java.util.List<jdk.jshell.SourceCodeAnalysis$Suggestion>, suggestions: int): ConsoleIOContext$AllSuggestionsCompletionTask;
          }
          let ConsoleIOContext$AllSuggestionsCompletionTask: _ConsoleIOContext$AllSuggestionsCompletionTask$$static;
          interface _ConsoleIOContext$AllSuggestionsCompletionTask {
            description(): string;
            perform(text: string, cursor: int): ConsoleIOContext$CompletionTask$Result;
            _anchor: int;
            _suggestions: java.util.List<jdk.jshell.SourceCodeAnalysis$Suggestion>;
            _this$0: ConsoleIOContext;
          }
          interface ConsoleIOContext$AllSuggestionsCompletionTask extends CombineTypes<[_ConsoleIOContext$AllSuggestionsCompletionTask, java.lang.Object, jdk.internal.jshell.tool.ConsoleIOContext$CompletionTask]> {}
          interface _ConsoleIOContext$CommandFullDocumentationTask$$static extends ClassLike {
            new(a0: java.util.List<ConsoleIOContext$CompletionTask>): ConsoleIOContext$CommandFullDocumentationTask;
          }
          let ConsoleIOContext$CommandFullDocumentationTask: _ConsoleIOContext$CommandFullDocumentationTask$$static;
          interface _ConsoleIOContext$CommandFullDocumentationTask {
            description(): string;
            perform(text: string, cursor: int): ConsoleIOContext$CompletionTask$Result;
            _this$0: ConsoleIOContext;
            _todo: java.util.List<ConsoleIOContext$CompletionTask>;
          }
          interface ConsoleIOContext$CommandFullDocumentationTask extends CombineTypes<[_ConsoleIOContext$CommandFullDocumentationTask, java.lang.Object, jdk.internal.jshell.tool.ConsoleIOContext$CompletionTask]> {}
          interface _ConsoleIOContext$CommandSynopsisTask$$static extends ClassLike {
            new(a0: java.util.List<string>): ConsoleIOContext$CommandSynopsisTask;
          }
          let ConsoleIOContext$CommandSynopsisTask: _ConsoleIOContext$CommandSynopsisTask$$static;
          interface _ConsoleIOContext$CommandSynopsisTask {
            description(): string;
            perform(text: string, cursor: int): ConsoleIOContext$CompletionTask$Result;
            _synopsis: java.util.List<string>;
            _this$0: ConsoleIOContext;
          }
          interface ConsoleIOContext$CommandSynopsisTask extends CombineTypes<[_ConsoleIOContext$CommandSynopsisTask, java.lang.Object, jdk.internal.jshell.tool.ConsoleIOContext$CompletionTask]> {}
          interface _ConsoleIOContext$CompletionState$$static extends ClassLike {
          }
          let ConsoleIOContext$CompletionState: _ConsoleIOContext$CompletionState$$static;
          interface _ConsoleIOContext$CompletionState {
            actionCount: int;
            todo: java.util.List<ConsoleIOContext$CompletionTask>;
          }
          interface ConsoleIOContext$CompletionState extends CombineTypes<[_ConsoleIOContext$CompletionState, java.lang.Object]> {}
          interface _ConsoleIOContext$CompletionTask$$static extends ClassLike {
          }
          let ConsoleIOContext$CompletionTask: _ConsoleIOContext$CompletionTask$$static;
          interface _ConsoleIOContext$CompletionTask {
            description(): string;
            perform(a0: string, a1: int): ConsoleIOContext$CompletionTask$Result;
          }
          interface ConsoleIOContext$CompletionTask extends CombineTypes<[_ConsoleIOContext$CompletionTask, java.lang.Object]> {}
          interface _ConsoleIOContext$CompletionTask$Result$$static extends ClassLike {
            valueOf(name: string): ConsoleIOContext$CompletionTask$Result;
            values(): ConsoleIOContext$CompletionTask$Result[];
            readonly CONTINUE: ConsoleIOContext$CompletionTask$Result;
            readonly FINISH: ConsoleIOContext$CompletionTask$Result;
            readonly NO_DATA: ConsoleIOContext$CompletionTask$Result;
            readonly SKIP: ConsoleIOContext$CompletionTask$Result;
            readonly SKIP_NOREPAINT: ConsoleIOContext$CompletionTask$Result;
          }
          let ConsoleIOContext$CompletionTask$Result: _ConsoleIOContext$CompletionTask$Result$$static;
          interface _ConsoleIOContext$CompletionTask$Result {
          }
          interface ConsoleIOContext$CompletionTask$Result extends CombineTypes<[_ConsoleIOContext$CompletionTask$Result]> {}
          interface _ConsoleIOContext$ContinueCompletionTask$$static extends ClassLike {
          }
          let ConsoleIOContext$ContinueCompletionTask: _ConsoleIOContext$ContinueCompletionTask$$static;
          interface _ConsoleIOContext$ContinueCompletionTask {
            description(): string;
            perform(text: string, cursor: int): ConsoleIOContext$CompletionTask$Result;
          }
          interface ConsoleIOContext$ContinueCompletionTask extends CombineTypes<[_ConsoleIOContext$ContinueCompletionTask, java.lang.Object, jdk.internal.jshell.tool.ConsoleIOContext$CompletionTask]> {}
          interface _ConsoleIOContext$ExpressionJavadocTask$$static extends ClassLike {
            new(a0: java.util.List<ConsoleIOContext$CompletionTask>): ConsoleIOContext$ExpressionJavadocTask;
          }
          let ConsoleIOContext$ExpressionJavadocTask: _ConsoleIOContext$ExpressionJavadocTask$$static;
          interface _ConsoleIOContext$ExpressionJavadocTask {
            description(): string;
            perform(text: string, cursor: int): ConsoleIOContext$CompletionTask$Result;
            _this$0: ConsoleIOContext;
            _todo: java.util.List<ConsoleIOContext$CompletionTask>;
          }
          interface ConsoleIOContext$ExpressionJavadocTask extends CombineTypes<[_ConsoleIOContext$ExpressionJavadocTask, java.lang.Object, jdk.internal.jshell.tool.ConsoleIOContext$CompletionTask]> {}
          interface _ConsoleIOContext$ExpressionSignaturesTask$$static extends ClassLike {
            new(a0: java.util.List<string>): ConsoleIOContext$ExpressionSignaturesTask;
          }
          let ConsoleIOContext$ExpressionSignaturesTask: _ConsoleIOContext$ExpressionSignaturesTask$$static;
          interface _ConsoleIOContext$ExpressionSignaturesTask {
            description(): string;
            perform(text: string, cursor: int): ConsoleIOContext$CompletionTask$Result;
            _doc: java.util.List<string>;
            _this$0: ConsoleIOContext;
          }
          interface ConsoleIOContext$ExpressionSignaturesTask extends CombineTypes<[_ConsoleIOContext$ExpressionSignaturesTask, java.lang.Object, jdk.internal.jshell.tool.ConsoleIOContext$CompletionTask]> {}
          interface _ConsoleIOContext$Fix$$static extends ClassLike {
          }
          let ConsoleIOContext$Fix: _ConsoleIOContext$Fix$$static;
          interface _ConsoleIOContext$Fix {
            displayName(): string;
            perform(a0: internal.org.jline.reader.impl.LineReaderImpl): void;
          }
          interface ConsoleIOContext$Fix extends CombineTypes<[_ConsoleIOContext$Fix, java.lang.Object]> {}
          interface _ConsoleIOContext$FixComputer$$static extends ClassLike {
            new(shortcut: char, showMenu: boolean): ConsoleIOContext$FixComputer;
          }
          let ConsoleIOContext$FixComputer: _ConsoleIOContext$FixComputer$$static;
          interface _ConsoleIOContext$FixComputer {
            compute(a0: JShellTool, a1: string, a2: int): ConsoleIOContext$FixResult;
(a0: JShellTool, a1: string, a2: int): ConsoleIOContext$FixResult;
            _shortcut: char;
            _showMenu: boolean;
          }
          interface ConsoleIOContext$FixComputer extends CombineTypes<[_ConsoleIOContext$FixComputer, java.lang.Object]> {}
          interface _ConsoleIOContext$FixResult$$static extends ClassLike {
            new(fixes: java.util.List<ConsoleIOContext$Fix>, error: string): ConsoleIOContext$FixResult;
          }
          let ConsoleIOContext$FixResult: _ConsoleIOContext$FixResult$$static;
          interface _ConsoleIOContext$FixResult {
            readonly error: string;
            readonly fixes: java.util.List<ConsoleIOContext$Fix>;
          }
          interface ConsoleIOContext$FixResult extends CombineTypes<[_ConsoleIOContext$FixResult, java.lang.Object]> {}
          interface _ConsoleIOContext$HighlighterImpl$$static extends ClassLike {
            new(a0: ConsoleIOContext, useComplexDeprecationHighlight: boolean): ConsoleIOContext$HighlighterImpl;
          }
          let ConsoleIOContext$HighlighterImpl: _ConsoleIOContext$HighlighterImpl$$static;
          interface _ConsoleIOContext$HighlighterImpl {
            highlight(reader: internal.org.jline.reader.LineReader, buffer: string): internal.org.jline.utils.AttributedString;
            setErrorIndex(errorIndex: int): void;
            setErrorPattern(errorPattern: java.util.regex.Pattern): void;
            _toAttributedStyle(attributes: java.util.Set<jdk.jshell.SourceCodeAnalysis$Attribute>): internal.org.jline.utils.AttributedStyle;
            _highlights: java.util.List<ConsoleIOContext$HighlighterImpl$UIHighlight>;
            _prevBuffer: string;
            _this$0: ConsoleIOContext;
            _useComplexDeprecationHighlight: boolean;
          }
          interface ConsoleIOContext$HighlighterImpl extends CombineTypes<[_ConsoleIOContext$HighlighterImpl, jdk.internal.org.jline.reader.Highlighter, java.lang.Object]> {}
          interface _ConsoleIOContext$HighlighterImpl$UIHighlight$$static extends ClassLike {
            _new(start: int, end: int, content: string, style: internal.org.jline.utils.AttributedStyle): ConsoleIOContext$HighlighterImpl$UIHighlight;
          }
          let ConsoleIOContext$HighlighterImpl$UIHighlight: _ConsoleIOContext$HighlighterImpl$UIHighlight$$static;
          interface _ConsoleIOContext$HighlighterImpl$UIHighlight {
            content(): string;
            end(): int;
            equals(o: any): boolean;
            hashCode(): int;
            start(): int;
            style(): internal.org.jline.utils.AttributedStyle;
            toString(): string;
          }
          interface ConsoleIOContext$HighlighterImpl$UIHighlight extends CombineTypes<[_ConsoleIOContext$HighlighterImpl$UIHighlight, java.lang.Record]> {}
          interface _ConsoleIOContext$JShellLineReader$$static extends ClassLike {
            new(a0: internal.org.jline.terminal.Terminal, terminal: string, appName: java.util.Map<string,any>): ConsoleIOContext$JShellLineReader;
          }
          let ConsoleIOContext$JShellLineReader: _ConsoleIOContext$JShellLineReader$$static;
          interface _ConsoleIOContext$JShellLineReader {
            _doComplete(lst: internal.org.jline.reader.impl.LineReaderImpl$CompletionType, useMenu: boolean, prefix: boolean): boolean;
            _insertCloseParen(): boolean;
            _insertCloseSquare(): boolean;
            readBinding(keys: internal.org.jline.keymap.KeyMap<internal.org.jline.reader.Binding>, local: internal.org.jline.keymap.KeyMap<internal.org.jline.reader.Binding>): internal.org.jline.reader.Binding;
            _repaint(): void;
            _completionState: ConsoleIOContext$CompletionState;
            _this$0: ConsoleIOContext;
          }
          interface ConsoleIOContext$JShellLineReader extends CombineTypes<[_ConsoleIOContext$JShellLineReader, jdk.internal.org.jline.reader.impl.LineReaderImpl]> {}
          interface _ConsoleIOContext$NoSuchCommandCompletionTask$$static extends ClassLike {
          }
          let ConsoleIOContext$NoSuchCommandCompletionTask: _ConsoleIOContext$NoSuchCommandCompletionTask$$static;
          interface _ConsoleIOContext$NoSuchCommandCompletionTask {
            description(): string;
            perform(text: string, cursor: int): ConsoleIOContext$CompletionTask$Result;
            _this$0: ConsoleIOContext;
          }
          interface ConsoleIOContext$NoSuchCommandCompletionTask extends CombineTypes<[_ConsoleIOContext$NoSuchCommandCompletionTask, java.lang.Object, jdk.internal.jshell.tool.ConsoleIOContext$CompletionTask]> {}
          interface _ConsoleIOContext$NoopCompletionTask$$static extends ClassLike {
          }
          let ConsoleIOContext$NoopCompletionTask: _ConsoleIOContext$NoopCompletionTask$$static;
          interface _ConsoleIOContext$NoopCompletionTask {
            description(): string;
            perform(text: string, cursor: int): ConsoleIOContext$CompletionTask$Result;
          }
          interface ConsoleIOContext$NoopCompletionTask extends CombineTypes<[_ConsoleIOContext$NoopCompletionTask, java.lang.Object, jdk.internal.jshell.tool.ConsoleIOContext$CompletionTask]> {}
          interface _ConsoleIOContext$OrdinaryCompletionTask$$static extends ClassLike {
            new(a0: java.util.List<ConsoleIOContext$OrdinaryCompletionTask$charSequence>, toShow: string, prefix: boolean, cont: boolean): ConsoleIOContext$OrdinaryCompletionTask;
          }
          let ConsoleIOContext$OrdinaryCompletionTask: _ConsoleIOContext$OrdinaryCompletionTask$$static;
          interface _ConsoleIOContext$OrdinaryCompletionTask {
            description(): string;
            perform(text: string, cursor: int): ConsoleIOContext$CompletionTask$Result;
            _cont: boolean;
            _prefix: string;
            _showSmart: boolean;
            _this$0: ConsoleIOContext;
            _toShow: java.util.List<tool$charSequence>;
          }
          interface ConsoleIOContext$OrdinaryCompletionTask extends CombineTypes<[_ConsoleIOContext$OrdinaryCompletionTask, java.lang.Object, jdk.internal.jshell.tool.ConsoleIOContext$CompletionTask]> {}
          interface _ConsoleIOContext$ProgrammaticInTerminal$$static extends ClassLike {
            _DEFAULT_HEIGHT: int;
            new(input: java.io.InputStream, output: java.io.OutputStream, interactive: boolean, size: internal.org.jline.terminal.Size): ConsoleIOContext$ProgrammaticInTerminal;
            _new(input: java.io.InputStream, output: java.io.OutputStream, terminal: string, size: internal.org.jline.terminal.Size, bufferSize: internal.org.jline.terminal.Size): ConsoleIOContext$ProgrammaticInTerminal;
          }
          let ConsoleIOContext$ProgrammaticInTerminal: _ConsoleIOContext$ProgrammaticInTerminal$$static;
          interface _ConsoleIOContext$ProgrammaticInTerminal {
            _doClose(): void;
            getBufferSize(): internal.org.jline.terminal.Size;
            reader(): internal.org.jline.utils.NonBlockingReader;
            _bufferSize: internal.org.jline.terminal.Size;
            _inputReader: internal.org.jline.utils.NonBlockingReader;
          }
          interface ConsoleIOContext$ProgrammaticInTerminal extends CombineTypes<[_ConsoleIOContext$ProgrammaticInTerminal, jdk.internal.org.jline.terminal.impl.LineDisciplineTerminal]> {}
          interface _ConsoleIOContext$TestTerminal$$static extends ClassLike {
            _computeSize(): internal.org.jline.terminal.Size;
            new(input: java.io.InputStream, output: java.io.OutputStream): ConsoleIOContext$TestTerminal;
          }
          let ConsoleIOContext$TestTerminal: _ConsoleIOContext$TestTerminal$$static;
          interface _ConsoleIOContext$TestTerminal {
          }
          interface ConsoleIOContext$TestTerminal extends CombineTypes<[_ConsoleIOContext$TestTerminal, jdk.internal.jshell.tool.ConsoleIOContext$ProgrammaticInTerminal]> {}
          interface _ConsoleIOContextTestSupport$$static extends ClassLike {
            willComputeCompletion(): void;
            IMPL: ConsoleIOContextTestSupport;
            new(): ConsoleIOContextTestSupport;
          }
          let ConsoleIOContextTestSupport: _ConsoleIOContextTestSupport$$static;
          interface _ConsoleIOContextTestSupport {
            _willComputeCompletionCallback(): void;
(): void;
          }
          interface ConsoleIOContextTestSupport extends CombineTypes<[_ConsoleIOContextTestSupport, java.lang.Object]> {}
          interface _ContinuousCompletionProvider$$static extends ClassLike {
            _PERFECT_MATCHER: java.util.function.BiPredicate<string,string>;
            _STARTSWITH_MATCHER: java.util.function.BiPredicate<string,string>;
            _new(wordCompletionProvider: java.util.Map<string,JShellTool$CompletionProvider>, matcher: java.util.function.BiPredicate<string,string>): ContinuousCompletionProvider;
            _new(wordCompletionProviderSupplier: java.util.function.Supplier<java.util.Map<string,JShellTool$CompletionProvider>>, matcher: java.util.function.BiPredicate<string,string>): ContinuousCompletionProvider;
          }
          let ContinuousCompletionProvider: _ContinuousCompletionProvider$$static;
          interface _ContinuousCompletionProvider {
            completionSuggestions(input: string, cursor: int, anchor: int[]): java.util.List<jdk.jshell.SourceCodeAnalysis$Suggestion>;
            _matcher: java.util.function.BiPredicate<string,string>;
            _wordCompletionProviderSupplier: java.util.function.Supplier<java.util.Map<string,JShellTool$CompletionProvider>>;
          }
          interface ContinuousCompletionProvider extends CombineTypes<[_ContinuousCompletionProvider, jdk.internal.jshell.tool.JShellTool$CompletionProvider, java.lang.Object]> {}
          interface _Feedback$$static extends ClassLike {
            _FIELD_PATTERN: java.util.regex.Pattern;
            _RECORD_SEPARATOR: string;
            _RECORD_TYPEKIND_SELECTOR: Selector;
            _TRUNCATION_FIELD: string;
            _VAR_VALUE_ADD_SELECTOR: Selector;
            _new(): Feedback;
          }
          let Feedback: _Feedback$$static;
          interface _Feedback {
            format(fc: Selector$FormatCase, fa: Selector$FormatAction, fw: Selector$FormatWhen, fr: Selector$FormatResolve, fu: Selector$FormatUnresolved, fe: Selector$FormatErrors, name: string, type: string, value: string, unresolved: string, errorLines: java.util.List<string>): string;
            format(field: string, fc: Selector$FormatCase, fa: Selector$FormatAction, fw: Selector$FormatWhen, fr: Selector$FormatResolve, fu: Selector$FormatUnresolved, fe: Selector$FormatErrors, name: string, type: string, value: string, unresolved: string, errorLines: java.util.List<string>): string;
            getContinuationPrompt(nextId: string): string;
            getErrorPost(): string;
            getErrorPre(): string;
            getPost(): string;
            getPre(): string;
            getPrompt(nextId: string): string;
            markModesReadOnly(): void;
            _modeCompletions(): JShellTool$CompletionProvider;
            _modeCompletions(successor: JShellTool$CompletionProvider): JShellTool$CompletionProvider;
            restoreEncodedModes(messageHandler: MessageHandler, encoded: string): boolean;
            setFeedback(messageHandler: MessageHandler, at: ArgTokenizer, retainer: java.util.function.Consumer<string>): boolean;
            setFormat(messageHandler: MessageHandler, at: ArgTokenizer): boolean;
            setMode(messageHandler: MessageHandler, at: ArgTokenizer, retainer: java.util.function.Consumer<string>): boolean;
            setPrompt(messageHandler: MessageHandler, at: ArgTokenizer): boolean;
            setTruncation(messageHandler: MessageHandler, at: ArgTokenizer): boolean;
            shouldDisplayCommandFluff(): boolean;
            truncateVarValue(value: string): string;
            _mode: Feedback$Mode;
            _modeMap: java.util.Map<string,Feedback$Mode>;
            _retainedCurrentMode: Feedback$Mode;
            _retainedMap: java.util.Map<string,string>;
          }
          interface Feedback extends CombineTypes<[_Feedback, java.lang.Object]> {}
          interface _Feedback$Mode$$static extends ClassLike {
            _new(name: string): Feedback$Mode;
            _new(name: string, m: Feedback$Mode): Feedback$Mode;
          }
          let Feedback$Mode: _Feedback$Mode$$static;
          interface _Feedback$Mode {
            _add(field: string, ing: Feedback$Mode$Setting): void;
            _encode(): string;
            equals(o: any): boolean;
            _format(field: string, selector: Selector): string;
            _format(fc: Selector$FormatCase, fa: Selector$FormatAction, fw: Selector$FormatWhen, fr: Selector$FormatResolve, fu: Selector$FormatUnresolved, fe: Selector$FormatErrors, name: string, type: string, value: string, unresolved: string, errorLines: java.util.List<string>): string;
            _format(field: string, fc: Selector$FormatCase, fa: Selector$FormatAction, fw: Selector$FormatWhen, fr: Selector$FormatResolve, fu: Selector$FormatUnresolved, fe: Selector$FormatErrors, name: string, type: string, value: string, unresolved: string, errorLines: java.util.List<string>): string;
            _getContinuationPrompt(nextId: string): string;
            _getPrompt(nextId: string): string;
            hashCode(): int;
            _set(field: string, format: string, selector: Selector): void;
            _setCommandFluff(fluff: boolean): void;
            _setPrompts(prompt: string, continuationPrompt: string): void;
            _truncateValue(value: string, selector: Selector): string;
            _truncateVarValue(value: string): string;
            _byField: java.util.Map<string,java.util.List<Feedback$Mode$Setting>>;
            _commandFluff: boolean;
            _continuationPrompt: string;
            _name: string;
            _prompt: string;
            _readOnly: boolean;
          }
          interface Feedback$Mode extends CombineTypes<[_Feedback$Mode, java.lang.Object]> {}
          interface _Feedback$Mode$Setting$$static extends ClassLike {
            _new(format: string, selector: Selector): Feedback$Mode$Setting;
          }
          let Feedback$Mode$Setting: _Feedback$Mode$Setting$$static;
          interface _Feedback$Mode$Setting {
            equals(o: any): boolean;
            hashCode(): int;
            toString(): string;
            _format: string;
            _selector: Selector;
          }
          interface Feedback$Mode$Setting extends CombineTypes<[_Feedback$Mode$Setting, java.lang.Object]> {}
          interface _Feedback$Setter$$static extends ClassLike {
            _new(a0: Feedback, messageHandler: MessageHandler, at: ArgTokenizer): Feedback$Setter;
          }
          let Feedback$Setter: _Feedback$Setter$$static;
          interface _Feedback$Setter {
            _buildMode(it: java.util.Iterator<string>): Feedback$Mode;
            _checkOptionsAndRemainingInput(): void;
            _encodedModeIterator(encoded: string): java.util.Iterator<string>;
            _errorat(messageKey: string, args: any[]): void;
            _errorat(messageKey: string, ...args: any[]): void;
            _fluff(format: string, args: any[]): void;
            _fluff(format: string, ...args: any[]): void;
            _fluffmsg(messageKey: string, args: any[]): void;
            _fluffmsg(messageKey: string, ...args: any[]): void;
            _hard(format: string, args: any[]): void;
            _hard(format: string, ...args: any[]): void;
            _hardmsg(messageKey: string, args: any[]): void;
            _hardmsg(messageKey: string, ...args: any[]): void;
            _installFormat(m: Feedback$Mode, field: string, format: string, help: string): void;
            _next(): string;
            _nextFormat(): string;
            _nextMode(): Feedback$Mode;
            _nextModeIdentifier(): string;
            _parseSelector(selectorText: string): Selector;
            _restoreEncodedModes(allEncoded: string): boolean;
            _searchForMode(umode: string): Feedback$Mode;
            _searchForMode(umode: string, msg: string): Feedback$Mode;
            _setFeedback(retainer: java.util.function.Consumer<string>): boolean;
            _setFormat(): boolean;
            _setMode(retainer: java.util.function.Consumer<string>): boolean;
            _setPrompt(): boolean;
            _setTruncation(): boolean;
            _showFeedbackModes(): void;
            _showFeedbackSetting(): void;
            _showFluff(): boolean;
            _showFormatSettings(sm: Feedback$Mode, f: string): void;
            _showModeSettings(umode: string, msg: string): void;
            _showModeSettings(sm: Feedback$Mode): void;
            _showPromptSettings(sm: Feedback$Mode): void;
            _showTruncationSettings(sm: Feedback$Mode): void;
            _toFormat(format: string): string;
            _toIdentifier(id: string, err: string): string;
            _toModeIdentifier(id: string): string;
            _toStringLiteral(s: string): string;
            _at: ArgTokenizer;
            _messageHandler: MessageHandler;
            _this$0: Feedback;
            _valid: boolean;
          }
          interface Feedback$Setter extends CombineTypes<[_Feedback$Setter, java.lang.Object]> {}
          interface _IOContext$$static extends ClassLike {
            _new(): IOContext;
          }
          let IOContext: _IOContext$$static;
          interface _IOContext {
            afterUserCode(): void;
            beforeUserCode(): void;
            charset(): java.nio.charset.Charset;
            close(): void;
            history(a0: boolean): java.lang.Iterable<string>;
            interactiveOutput(): boolean;
            readLine(a0: string, a1: string, a2: boolean, a3: string): string;
            readPassword(prompt: string): char[];
            readUserInput(): int;
            readUserInputChar(): char;
            readUserLine(prompt: string): string;
            replaceLastHistoryEntry(a0: string): void;
            resume(): void;
            setIndent(indent: int): void;
            suspend(): void;
            terminalEditorRunning(): boolean;
            userOutput(): java.io.Writer;
          }
          interface IOContext extends CombineTypes<[_IOContext, java.lang.Object, java.lang.AutoCloseable]> {}
          interface _IOContext$InputInterruptedException$$static extends ClassLike {
            _serialVersionUID: long;
            _new(this$0: IOContext): IOContext$InputInterruptedException;
          }
          let IOContext$InputInterruptedException: _IOContext$InputInterruptedException$$static;
          interface _IOContext$InputInterruptedException {
            _this$0: IOContext;
          }
          interface IOContext$InputInterruptedException extends CombineTypes<[_IOContext$InputInterruptedException, java.lang.Exception]> {}
          interface _JShellTool$$static extends ClassLike {
            _classPathCompletion(): JShellTool$CompletionProvider;
            _envCompletion(): JShellTool$CompletionProvider;
            _fileCompletions(accept: java.util.function.Predicate<java.nio.file.Path>): JShellTool$CompletionProvider;
            _getResource(name: string): string;
            _historyCompletion(): JShellTool$CompletionProvider;
            _nonEmptyStream<T>(supplier: java.util.function.Supplier<java.util.stream.Stream<T>>, filters: JShellTool$SnippetPredicate<T>[]): java.util.stream.Stream<T>;
            _nonEmptyStream<T>(supplier: java.util.function.Supplier<java.util.stream.Stream<T>>, ...filters: JShellTool$SnippetPredicate<T>[]): java.util.stream.Stream<T>;
            _optionCompletion(provider: JShellTool$CompletionProvider): JShellTool$CompletionProvider;
            _orMostSpecificCompletion(left: JShellTool$CompletionProvider, right: JShellTool$CompletionProvider): JShellTool$CompletionProvider;
            _readResource(name: string): string;
            _reloadCompletion(): JShellTool$CompletionProvider;
            _saveCompletion(): JShellTool$CompletionProvider;
            _skipWordThenCompletion(completionProvider: JShellTool$CompletionProvider): JShellTool$CompletionProvider;
            _toPathResolvingUserHome(pathString: string): java.nio.file.Path;
            _trimEnd(s: string): string;
            _ARG_OPTIONS: java.util.Map<string,JShellTool$CompletionProvider>;
            _BUILTIN_FILE_PATH_FORMAT: string;
            _BUILTIN_FILE_PATTERN: java.util.regex.Pattern;
            _BUILT_IN_EDITOR: JShellTool$EditorSetting;
            _COMMAND_LINE_LIKE_OPTIONS_COMPLETION_PROVIDER: JShellTool$FixedCompletionProvider;
            _CONTINUATION_PROMPT: string;
            _DEFAULT_INDENT: int;
            _EDITOR_ENV_VARS: string[];
            _EDITOR_KEY: string;
            _EMPTY_COMPLETION_PROVIDER: JShellTool$CompletionProvider;
            _FEEDBACK_KEY: string;
            _FILE_COMPLETION_PROVIDER: JShellTool$CompletionProvider;
            _HISTORY_OPTION_COMPLETION_PROVIDER: JShellTool$CompletionProvider;
            _ID: java.util.regex.Pattern;
            readonly INDENT_KEY: string;
            _INT_PREFIX: string;
            _L10N_RB_NAME: string;
            _LINEBREAK: java.util.regex.Pattern;
            _MODE2_KEY: string;
            _MODE_KEY: string;
            _OPTION_PATTERN: java.util.regex.Pattern;
            _OPTION_PRE_PATTERN: java.util.regex.Pattern;
            _OPTION_VALUE_PATTERN: java.util.regex.Pattern;
            _OUTPUT_WIDTH: int;
            _PROMPT: string;
            _RB_NAME_PREFIX: string;
            _RECORD_SEPARATOR: string;
            _RELOAD_OPTIONS_COMPLETION_PROVIDER: JShellTool$CompletionProvider;
            _REPLAY_RESTORE_KEY: string;
            _RERUN_ID: java.util.regex.Pattern;
            _RERUN_PREVIOUS: java.util.regex.Pattern;
            _SAVE_OPTION_COMPLETION_PROVIDER: JShellTool$CompletionProvider;
            _SET_MODE_OPTIONS_COMPLETION_PROVIDER: JShellTool$CompletionProvider;
            _SET_SUB: java.util.regex.Pattern;
            _SET_SUBCOMMANDS: string[];
            _SNIPPET_HISTORY_OPTION_COMPLETION_PROVIDER: JShellTool$CompletionProvider;
            _SNIPPET_OPTION_COMPLETION_PROVIDER: JShellTool$CompletionProvider;
            _STARTUP_KEY: string;
            _VERSION_RB_NAME: string;
            _new(cmdin: java.io.InputStream, cmdout: java.io.PrintStream, cmderr: java.io.PrintStream, console: java.io.PrintStream, userin: java.io.InputStream, userout: java.io.PrintStream, usererr: java.io.PrintStream, prefs: PersistentStorage, envvars: java.util.Map<string,string>, locale: java.util.Locale, interactiveTerminal: boolean): JShellTool;
          }
          let JShellTool: _JShellTool$$static;
          interface _JShellTool {
            _addToReplayHistory(s: string): void;
            _allMethodSnippets(): java.util.stream.Stream<jdk.jshell.MethodSnippet>;
            _allSnippets(): java.util.stream.Stream<jdk.jshell.Snippet>;
            _allTypeSnippets(): java.util.stream.Stream<jdk.jshell.TypeDeclSnippet>;
            _allVarSnippets(): java.util.stream.Stream<jdk.jshell.VarSnippet>;
            _argsOptionsToSnippets<T>(snippetSupplier: java.util.function.Supplier<java.util.stream.Stream<T>>, defFilter: java.util.function.Predicate<jdk.jshell.Snippet>, rawargs: string, cmd: string): java.util.stream.Stream<T>;
            _argsOptionsToSnippets<T>(snippetSupplier: java.util.function.Supplier<java.util.stream.Stream<T>>, defFilter: java.util.function.Predicate<jdk.jshell.Snippet>, at: ArgTokenizer): java.util.stream.Stream<T>;
            _builtInEdit(initialText: string, saveHandler: java.util.function.Consumer<string>, errorHandler: java.util.function.Consumer<string>): boolean;
            _checkOptionsAndRemainingInput(at: ArgTokenizer): boolean;
            _closeState(): void;
            _cmdDebug(arg: string): boolean;
            _cmdDrop(rawargs: string): boolean;
            _cmdEdit(arg: string): boolean;
            _cmdEnv(rawargs: string): boolean;
            _cmdExit(arg: string): boolean;
            _cmdHelp(arg: string): boolean;
            _cmdHistory(rawArgs: string): boolean;
            _cmdImports(): boolean;
            _cmdList(arg: string): boolean;
            _cmdMethods(arg: string): boolean;
            _cmdOpen(filename: string): boolean;
            _cmdReload(rawargs: string): boolean;
            _cmdReset(rawargs: string): boolean;
            _cmdSave(rawargs: string): boolean;
            _cmdSet(arg: string): boolean;
            _cmdTypes(arg: string): boolean;
            _cmdUseHistoryEntry(index: int): boolean;
            _cmdVars(arg: string): boolean;
            commandCompletionSuggestions(code: string, cursor: int, anchor: int[]): java.util.List<jdk.jshell.SourceCodeAnalysis$Suggestion>;
            commandDocumentation(code: string, cursor: int, shortDescription: boolean): java.util.List<string>;
            _configEditor(): JShellTool$EditorSetting;
            _debug(format: string, args: any[]): void;
            _debug(format: string, ...args: any[]): void;
            _displayDiagnostics(source: string, diagnostics: java.util.List<jdk.jshell.Diag>): void;
            _displayEvalException(ex: jdk.jshell.EvalException, caused: java.lang.StackTraceElement[]): boolean;
            _displayException(exception: java.lang.Throwable): boolean;
            _displayException(exception: java.lang.Throwable, caused: java.lang.StackTraceElement[]): boolean;
            _displayUnresolvedException(ex: jdk.jshell.UnresolvedReferenceException): boolean;
            _displayableDiagnostic(source: string, diag: jdk.jshell.Diag, toDisplay: java.util.List<string>): void;
            _doReload(history: JShellTool$ReplayableHistory, echo: boolean, oldOptions: JShellTool$Options): boolean;
            _dropableSnippets(): java.util.stream.Stream<jdk.jshell.Snippet>;
            _error(format: string, args: any[]): void;
            _error(format: string, ...args: any[]): void;
            errormsg(key: string, args: any[]): void;
            errormsg(key: string, ...args: any[]): void;
            _errorsOnly(diagnostics: java.util.List<jdk.jshell.Diag>): java.util.List<jdk.jshell.Diag>;
            _findCommand(cmd: string, filter: java.util.function.Predicate<JShellTool$Command>): JShellTool$Command[];
            fluff(format: string, args: any[]): void;
            fluff(format: string, ...args: any[]): void;
            fluffmsg(key: string, args: any[]): void;
            fluffmsg(key: string, ...args: any[]): void;
            _fullVersion(): string;
            _getInput(initial: string): string;
            _getResourceString(key: string): string;
            _handleEvent(ste: jdk.jshell.SnippetEvent): boolean;
            hard(format: string, args: any[]): void;
            hard(format: string, ...args: any[]): void;
            _hardPairs<T>(stream: java.util.stream.Stream<T>, a: java.util.function.Function<T,string>, b: java.util.function.Function<T,string>): void;
            hardmsg(key: string, args: any[]): void;
            hardmsg(key: string, ...args: any[]): void;
            _hardrb(key: string): void;
            _helpCompletion(): JShellTool$CompletionProvider;
            _inStartUp(sn: jdk.jshell.Snippet): boolean;
            _indent(): string;
            _initFeedback(initMode: string): void;
            _interactive(): boolean;
            _isActive(sn: jdk.jshell.Snippet): boolean;
            _isCommand(line: string): boolean;
            isComplete(src: string): boolean;
            _mainActive(sn: jdk.jshell.Snippet): boolean;
            _matchingDeclaration(sn: jdk.jshell.Snippet, name: string): boolean;
            _messageFormat(key: string, args: any[]): string;
            _messageFormat(key: string, ...args: any[]): string;
            _parseCommandLineLikeFlags(rawargs: string, ap: JShellTool$OptionParserBase): boolean;
            _prefix(s: string): string;
            _prefix(s: string, pre: string, post: string): string;
            _prefixError(s: string): string;
            _printHelp(name: string, key: string): void;
            _printSnippetStatus(sn: jdk.jshell.DeclarationSnippet, resolve: boolean): void;
            _printStackTrace(stes: java.lang.StackTraceElement[], caused: java.lang.StackTraceElement[]): void;
            _printUsage(): void;
            _printUsageX(): void;
            _processCommand(input: string): void;
            _processInput(src: string): string;
            _processSource(source: string): boolean;
            _processSourceCatchingReset(src: string): boolean;
            _registerCommand(cmd: JShellTool$Command): void;
            _rerunHistoryEntriesById(rawargs: string): void;
            _rerunSnippet(snippet: jdk.jshell.Snippet): void;
            _resetState(): void;
            _run(_in: IOContext): boolean;
            _runFile(filename: string, context: string): boolean;
            _setFeedback(messageHandler: MessageHandler, at: ArgTokenizer): boolean;
            _setStart(at: ArgTokenizer): boolean;
            showFluff(): boolean;
            _showIndent(): void;
            _showSetStart(): void;
            _snippetCompletion(snippetsSupplier: java.util.function.Supplier<java.util.stream.Stream<jdk.jshell.Snippet>>): JShellTool$CompletionProvider;
            _snippetWithOptionCompletion(optionProvider: JShellTool$CompletionProvider, snippetsSupplier: java.util.function.Supplier<java.util.stream.Stream<jdk.jshell.Snippet>>): JShellTool$CompletionProvider;
            start(args: string[]): int;
            _startUpRun(start: string): void;
            _stop(): void;
            _subCommand(cmd: string, at: ArgTokenizer, subs: string[]): string;
            _toAction(status: jdk.jshell.Snippet$Status, previousStatus: jdk.jshell.Snippet$Status, isSignatureChange: boolean): Selector$FormatAction;
            _version(): string;
            _version(key: string): string;
            _analysis: jdk.jshell.SourceCodeAnalysis;
            _cmderr: java.io.PrintStream;
            _cmdin: java.io.InputStream;
            _cmdout: java.io.PrintStream;
            _commandCompletions: ContinuousCompletionProvider;
            _commands: java.util.Map<string,JShellTool$Command>;
            _console: java.io.PrintStream;
            _currentNameSpace: JShellTool$NameSpace;
            _debug: boolean;
            _debugFlags: int;
            _editor: JShellTool$EditorSetting;
            _envvars: java.util.Map<string,string>;
            _errorNamespace: JShellTool$NameSpace;
            _executionControlSpec: string;
            _exitCode: int;
            _feedback: Feedback;
            _input: IOContext;
            _interactiveModeBegun: boolean;
            _interactiveTerminal: boolean;
            _isCurrentlyRunningStartup: boolean;
            _live: boolean;
            _locale: java.util.Locale;
            _mainNamespace: JShellTool$NameSpace;
            _mapSnippet: java.util.Map<jdk.jshell.Snippet,JShellTool$SnippetInfo>;
            _options: JShellTool$Options;
            _outputRB: java.util.ResourceBundle;
            _prefs: PersistentStorage;
            _regenerateOnDeath: boolean;
            _replayableHistory: JShellTool$ReplayableHistory;
            _replayableHistoryPrevious: JShellTool$ReplayableHistory;
            _shutdownSubscription: jdk.jshell.JShell$Subscription;
            _startNamespace: JShellTool$NameSpace;
            _startup: Startup;
            _state: jdk.jshell.JShell;
            testPrompt: boolean;
            _usererr: java.io.PrintStream;
            _userin: java.io.InputStream;
            _userout: java.io.PrintStream;
            _versionRB: java.util.ResourceBundle;
          }
          interface JShellTool extends CombineTypes<[_JShellTool, java.lang.Object, jdk.internal.jshell.tool.MessageHandler]> {}
          interface _JShellTool$ArgSuggestion$$static extends ClassLike {
            new(continuation: string): JShellTool$ArgSuggestion;
          }
          let JShellTool$ArgSuggestion: _JShellTool$ArgSuggestion$$static;
          interface _JShellTool$ArgSuggestion {
            continuation(): string;
            matchesType(): boolean;
            _continuation: string;
          }
          interface JShellTool$ArgSuggestion extends CombineTypes<[_JShellTool$ArgSuggestion, jdk.jshell.SourceCodeAnalysis$Suggestion, java.lang.Object]> {}
          interface _JShellTool$ArgToSnippets$$static<T> extends ClassLike {
            _new(a0: java.util.function.Supplier<java.util.stream.Stream<T>>): JShellTool$ArgToSnippets<T>;
          }
          let JShellTool$ArgToSnippets: _JShellTool$ArgToSnippets$$static<T>;
          interface _JShellTool$ArgToSnippets<T> {
            _allIds(): string[];
            _argToSnippets(arg: string): java.util.stream.Stream<T>;
            _argsToSnippets(args: java.util.List<string>): java.util.stream.Stream<T>;
            _badSnippetErrormsg(arg: string): void;
            _initIdMapping(): void;
            _layeredSnippetSearch<R>(aSnippetSupplier: java.util.function.Supplier<java.util.stream.Stream<R>>, arg: string): java.util.stream.Stream<R>;
            _order(id: string): int;
            _order(sn: jdk.jshell.Snippet): int;
            _range(arg: string): java.util.stream.Stream<T>;
            _snippetIndex(s: string): int;
            _allIds: string[];
            _allSnippets: java.util.List<T>;
            _snippetSupplier: java.util.function.Supplier<java.util.stream.Stream<T>>;
            _this$0: JShellTool;
          }
          interface JShellTool$ArgToSnippets<T> extends CombineTypes<[_JShellTool$ArgToSnippets<T>, java.lang.Object]> {}
          interface _JShellTool$Command$$static extends ClassLike {
            new(command: string, run: java.util.function.Function<string,boolean>, completions: JShellTool$CompletionProvider): JShellTool$Command;
            new(command: string, run: java.util.function.Function<string,boolean>, completions: JShellTool$CompletionProvider, kind: JShellTool$CommandKind): JShellTool$Command;
            new(command: string, helpKey: string, kind: JShellTool$CommandKind): JShellTool$Command;
            new(command: string, helpKey: string, run: java.util.function.Function<string,boolean>, completions: JShellTool$CompletionProvider, kind: JShellTool$CommandKind): JShellTool$Command;
          }
          let JShellTool$Command: _JShellTool$Command$$static;
          interface _JShellTool$Command {
            readonly command: string;
            readonly completions: JShellTool$CompletionProvider;
            readonly helpKey: string;
            readonly kind: JShellTool$CommandKind;
            readonly run: java.util.function.Function<string,boolean>;
          }
          interface JShellTool$Command extends CombineTypes<[_JShellTool$Command, java.lang.Object]> {}
          interface _JShellTool$CommandKind$$static extends ClassLike {
            valueOf(name: string): JShellTool$CommandKind;
            values(): JShellTool$CommandKind[];
            readonly HELP_ONLY: JShellTool$CommandKind;
            readonly HELP_SUBJECT: JShellTool$CommandKind;
            readonly HIDDEN: JShellTool$CommandKind;
            readonly NORMAL: JShellTool$CommandKind;
            readonly REPLAY: JShellTool$CommandKind;
          }
          let JShellTool$CommandKind: _JShellTool$CommandKind$$static;
          interface _JShellTool$CommandKind {
            _isRealCommand: boolean;
            _shouldSuggestCompletions: boolean;
            _showInHelp: boolean;
          }
          interface JShellTool$CommandKind extends CombineTypes<[_JShellTool$CommandKind]> {}
          interface _JShellTool$CompletionProvider$$static extends ClassLike {
          }
          let JShellTool$CompletionProvider: _JShellTool$CompletionProvider$$static;
          interface _JShellTool$CompletionProvider {
            completionSuggestions(a0: string, a1: int, a2: int[]): java.util.List<jdk.jshell.SourceCodeAnalysis$Suggestion>;
(a0: string, a1: int, a2: int[]): java.util.List<jdk.jshell.SourceCodeAnalysis$Suggestion>;
          }
          interface JShellTool$CompletionProvider extends CombineTypes<[_JShellTool$CompletionProvider, java.lang.Object]> {}
          interface _JShellTool$DisplayEvent$$static extends ClassLike {
            _new(this$0: jdk.jshell.SnippetEvent, ste: Selector$FormatWhen, update: string, value: java.util.List<jdk.jshell.Diag>): JShellTool$DisplayEvent;
            _new(this$0: jdk.jshell.Snippet, sn: jdk.jshell.Snippet$Status, status: boolean, resolve: java.util.List<jdk.jshell.Diag>): JShellTool$DisplayEvent;
          }
          let JShellTool$DisplayEvent: _JShellTool$DisplayEvent$$static;
          interface _JShellTool$DisplayEvent {
            _custom(fcase: Selector$FormatCase, name: string): void;
            _custom(fcase: Selector$FormatCase, name: string, type: string): void;
            _displayDeclarationAndValue(): void;
            _unresolved(key: jdk.jshell.DeclarationSnippet): string;
            _action: Selector$FormatAction;
            _errcnt: Selector$FormatErrors;
            _errorLines: java.util.List<string>;
            _resolution: Selector$FormatResolve;
            _resolve: boolean;
            _sn: jdk.jshell.Snippet;
            _this$0: JShellTool;
            _unrcnt: Selector$FormatUnresolved;
            _unresolved: string;
            _update: Selector$FormatWhen;
            _value: string;
          }
          interface JShellTool$DisplayEvent extends CombineTypes<[_JShellTool$DisplayEvent, java.lang.Object]> {}
          interface _JShellTool$EditorSetting$$static extends ClassLike {
            _fromPrefs(prefs: PersistentStorage): JShellTool$EditorSetting;
            _removePrefs(prefs: PersistentStorage): void;
            _BUILT_IN_REP: string;
            _NORMAL_PREFIX: char;
            _WAIT_PREFIX: char;
            _new(cmd: string[], wait: boolean): JShellTool$EditorSetting;
          }
          let JShellTool$EditorSetting: _JShellTool$EditorSetting$$static;
          interface _JShellTool$EditorSetting {
            equals(o: any): boolean;
            hashCode(): int;
            _toPrefs(prefs: PersistentStorage): void;
            _cmd: string[];
            _wait: boolean;
          }
          interface JShellTool$EditorSetting extends CombineTypes<[_JShellTool$EditorSetting, java.lang.Object]> {}
          interface _JShellTool$FixedCompletionProvider$$static extends ClassLike {
            new(alternatives: string[]): JShellTool$FixedCompletionProvider;
            new(...alternatives: string[]): JShellTool$FixedCompletionProvider;
            new(base: JShellTool$FixedCompletionProvider, alternatives: string[]): JShellTool$FixedCompletionProvider;
            new(base: JShellTool$FixedCompletionProvider, ...alternatives: string[]): JShellTool$FixedCompletionProvider;
          }
          let JShellTool$FixedCompletionProvider: _JShellTool$FixedCompletionProvider$$static;
          interface _JShellTool$FixedCompletionProvider {
            completionSuggestions(input: string, cursor: int, anchor: int[]): java.util.List<jdk.jshell.SourceCodeAnalysis$Suggestion>;
            _alternatives: string[];
          }
          interface JShellTool$FixedCompletionProvider extends CombineTypes<[_JShellTool$FixedCompletionProvider, jdk.internal.jshell.tool.JShellTool$CompletionProvider, java.lang.Object]> {}
          interface _JShellTool$IOContextConsole$$static extends ClassLike {
          }
          let JShellTool$IOContextConsole: _JShellTool$IOContextConsole$$static;
          interface _JShellTool$IOContextConsole {
            charset(): java.nio.charset.Charset;
            flush(): void;
            readLine(prompt: string): string;
            readPassword(prompt: string): char[];
            reader(): java.io.Reader;
            writer(): java.io.PrintWriter;
            _reader: java.io.Reader;
            _this$0: JShellTool;
            _writer: java.io.PrintWriter;
          }
          interface JShellTool$IOContextConsole extends CombineTypes<[_JShellTool$IOContextConsole, jdk.jshell.JShellConsole, java.lang.Object]> {}
          interface _JShellTool$InitMessageHandler$$static extends ClassLike {
          }
          let JShellTool$InitMessageHandler: _JShellTool$InitMessageHandler$$static;
          interface _JShellTool$InitMessageHandler {
            errormsg(messageKey: string, args: any[]): void;
            errormsg(messageKey: string, ...args: any[]): void;
            fluff(format: string, args: any[]): void;
            fluff(format: string, ...args: any[]): void;
            fluffmsg(messageKey: string, args: any[]): void;
            fluffmsg(messageKey: string, ...args: any[]): void;
            hard(format: string, args: any[]): void;
            hard(format: string, ...args: any[]): void;
            hardmsg(messageKey: string, args: any[]): void;
            hardmsg(messageKey: string, ...args: any[]): void;
            showFluff(): boolean;
            _this$0: JShellTool;
          }
          interface JShellTool$InitMessageHandler extends CombineTypes<[_JShellTool$InitMessageHandler, java.lang.Object, jdk.internal.jshell.tool.MessageHandler]> {}
          interface _JShellTool$NameSpace$$static extends ClassLike {
            _new(this$0: JShellTool, spaceName: string, prefix: string): JShellTool$NameSpace;
          }
          let JShellTool$NameSpace: _JShellTool$NameSpace$$static;
          interface _JShellTool$NameSpace {
            _tid(sn: jdk.jshell.Snippet): string;
            _tidNext(): string;
            _nextNum: int;
            _prefix: string;
            _spaceName: string;
            _this$0: JShellTool;
          }
          interface JShellTool$NameSpace extends CombineTypes<[_JShellTool$NameSpace, java.lang.Object]> {}
          interface _JShellTool$OptionKind$$static extends ClassLike {
            valueOf(name: string): JShellTool$OptionKind;
            values(): JShellTool$OptionKind[];
            readonly ADD_EXPORTS: JShellTool$OptionKind;
            readonly ADD_MODULES: JShellTool$OptionKind;
            readonly CLASS_PATH: JShellTool$OptionKind;
            readonly ENABLE_NATIVE_ACCESS: JShellTool$OptionKind;
            readonly ENABLE_PREVIEW: JShellTool$OptionKind;
            readonly MODULE_PATH: JShellTool$OptionKind;
            readonly SOURCE_RELEASE: JShellTool$OptionKind;
            readonly TO_COMPILER: JShellTool$OptionKind;
            readonly TO_REMOTE_VM: JShellTool$OptionKind;
          }
          let JShellTool$OptionKind: _JShellTool$OptionKind$$static;
          interface _JShellTool$OptionKind {
            _onlyOne: boolean;
            _optionFlag: string;
            _passFlag: boolean;
            _showOption: boolean;
            _toCompiler: boolean;
            _toRemoteVm: boolean;
          }
          interface JShellTool$OptionKind extends CombineTypes<[_JShellTool$OptionKind]> {}
          interface _JShellTool$OptionParserBase$$static extends ClassLike {
          }
          let JShellTool$OptionParserBase: _JShellTool$OptionParserBase$$static;
          interface _JShellTool$OptionParserBase {
            _addOptions(kind: JShellTool$OptionKind, vals: java.util.Collection<string>): void;
            _checkValidPathEntry(p: java.nio.file.Path, context: string, isModulePath: boolean): boolean;
            _msg(key: string, args: any[]): void;
            _msg(key: string, ...args: any[]): void;
            _nonOptions(): java.util.List<string>;
            _parse(args: string[]): JShellTool$Options;
            _parse(options: internal.joptsimple.OptionSet): JShellTool$Options;
            _toPathImpl(path: string, context: string): java.util.stream.Stream<java.nio.file.Path>;
            _validPaths(vals: java.util.Collection<string>, context: string, isModulePath: boolean): java.util.Collection<string>;
            _argAddExports: internal.joptsimple.OptionSpec<string>;
            _argAddModules: internal.joptsimple.OptionSpec<string>;
            _argClassPath: internal.joptsimple.OptionSpec<string>;
            _argEnableNativeAccess: internal.joptsimple.OptionSpecBuilder;
            _argEnablePreview: internal.joptsimple.OptionSpecBuilder;
            _argModulePath: internal.joptsimple.OptionSpec<string>;
            _argNonOptions: internal.joptsimple.NonOptionArgumentSpec<string>;
            _failed: boolean;
            _nonOptions: java.util.List<string>;
            _opts: JShellTool$Options;
            _parser: internal.joptsimple.OptionParser;
            _this$0: JShellTool;
          }
          interface JShellTool$OptionParserBase extends CombineTypes<[_JShellTool$OptionParserBase, java.lang.Object]> {}
          interface _JShellTool$OptionParserCommandLine$$static extends ClassLike {
          }
          let JShellTool$OptionParserCommandLine: _JShellTool$OptionParserCommandLine$$static;
          interface _JShellTool$OptionParserCommandLine {
            _feedbackMode(): string;
            _msg(key: string, args: any[]): void;
            _msg(key: string, ...args: any[]): void;
            _parse(options: internal.joptsimple.OptionSet): JShellTool$Options;
            _startup(): Startup;
            _argC: internal.joptsimple.OptionSpec<string>;
            _argExecution: internal.joptsimple.OptionSpec<string>;
            _argFeedback: internal.joptsimple.OptionSpec<string>;
            _argFullVersion: internal.joptsimple.OptionSpecBuilder;
            _argHelp: internal.joptsimple.OptionSpecBuilder;
            _argHelpExtra: internal.joptsimple.OptionSpecBuilder;
            _argNoStart: internal.joptsimple.OptionSpecBuilder;
            _argQ: internal.joptsimple.OptionSpecBuilder;
            _argR: internal.joptsimple.OptionSpec<string>;
            _argS: internal.joptsimple.OptionSpecBuilder;
            _argShowVersion: internal.joptsimple.OptionSpecBuilder;
            _argStart: internal.joptsimple.OptionSpec<string>;
            _argV: internal.joptsimple.OptionSpecBuilder;
            _argVersion: internal.joptsimple.OptionSpecBuilder;
            _feedbackMode: string;
            _initialStartup: Startup;
            _this$0: JShellTool;
          }
          interface JShellTool$OptionParserCommandLine extends CombineTypes<[_JShellTool$OptionParserCommandLine, jdk.internal.jshell.tool.JShellTool$OptionParserBase]> {}
          interface _JShellTool$OptionParserReload$$static extends ClassLike {
          }
          let JShellTool$OptionParserReload: _JShellTool$OptionParserReload$$static;
          interface _JShellTool$OptionParserReload {
            _parse(options: internal.joptsimple.OptionSet): JShellTool$Options;
            _quiet(): boolean;
            _restore(): boolean;
            _argQuiet: internal.joptsimple.OptionSpecBuilder;
            _argRestore: internal.joptsimple.OptionSpecBuilder;
            _quiet: boolean;
            _restore: boolean;
          }
          interface JShellTool$OptionParserReload extends CombineTypes<[_JShellTool$OptionParserReload, jdk.internal.jshell.tool.JShellTool$OptionParserBase]> {}
          interface _JShellTool$Options$$static extends ClassLike {
            _new(): JShellTool$Options;
          }
          let JShellTool$Options: _JShellTool$Options$$static;
          interface _JShellTool$Options {
            _addAll(kind: JShellTool$OptionKind, vals: java.util.Collection<string>): void;
            _compilerOptions(): string[];
            _override(newer: JShellTool$Options): JShellTool$Options;
            _remoteVmOptions(): string[];
            _selectOptions(pred: java.util.function.Predicate<java.util.Map$Entry<JShellTool$OptionKind,java.util.List<string>>>): string[];
            _shownOptions(): string[];
            _optMap: java.util.Map<JShellTool$OptionKind,java.util.List<string>>;
          }
          interface JShellTool$Options extends CombineTypes<[_JShellTool$Options, java.lang.Object]> {}
          interface _JShellTool$ReplayableHistory$$static extends ClassLike {
            _emptyHistory(): JShellTool$ReplayableHistory;
            _fromPrevious(prefs: PersistentStorage): JShellTool$ReplayableHistory;
          }
          let JShellTool$ReplayableHistory: _JShellTool$ReplayableHistory$$static;
          interface _JShellTool$ReplayableHistory {
            _add(s: string): void;
            _iterable(): java.lang.Iterable<string>;
            _markSaved(): void;
            _storeHistory(prefs: PersistentStorage): void;
            _hist: java.util.List<string>;
            _lastSaved: int;
          }
          interface JShellTool$ReplayableHistory extends CombineTypes<[_JShellTool$ReplayableHistory, java.lang.Object]> {}
          interface _JShellTool$SaveHandler$$static extends ClassLike {
            _new(a0: string, src: java.util.Set<string>): JShellTool$SaveHandler;
          }
          let JShellTool$SaveHandler: _JShellTool$SaveHandler$$static;
          interface _JShellTool$SaveHandler {
            accept(s: string): void;
            accept(a0: any): void;
            _trimNewlines(s: string): string;
            _currSrcs: java.util.Set<string>;
            _src: string;
            _this$0: JShellTool;
          }
          interface JShellTool$SaveHandler extends CombineTypes<[_JShellTool$SaveHandler, java.util.function.Consumer<string>, java.lang.Object]> {}
          interface _JShellTool$SetEditor$$static extends ClassLike {
            _new(this$0: JShellTool, at: ArgTokenizer): JShellTool$SetEditor;
            _new(this$0: JShellTool): JShellTool$SetEditor;
          }
          let JShellTool$SetEditor: _JShellTool$SetEditor$$static;
          interface _JShellTool$SetEditor {
            _check(): boolean;
            _format(ed: JShellTool$EditorSetting): string;
            _install(): void;
            _set(): boolean;
            _at: ArgTokenizer;
            _command: string[];
            _defaultOption: boolean;
            _deleteOption: boolean;
            _hasCommand: boolean;
            _primaryOptionCount: int;
            _retainOption: boolean;
            _this$0: JShellTool;
            _waitOption: boolean;
          }
          interface JShellTool$SetEditor extends CombineTypes<[_JShellTool$SetEditor, java.lang.Object]> {}
          interface _JShellTool$SnippetInfo$$static extends ClassLike {
            _new(snippet: jdk.jshell.Snippet, space: JShellTool$NameSpace, tid: string): JShellTool$SnippetInfo;
          }
          let JShellTool$SnippetInfo: _JShellTool$SnippetInfo$$static;
          interface _JShellTool$SnippetInfo {
            _snippet: jdk.jshell.Snippet;
            _space: JShellTool$NameSpace;
            _tid: string;
          }
          interface JShellTool$SnippetInfo extends CombineTypes<[_JShellTool$SnippetInfo, java.lang.Object]> {}
          interface _JShellTool$SnippetPredicate$$static<T> extends ClassLike {
          }
          let JShellTool$SnippetPredicate: _JShellTool$SnippetPredicate$$static<T>;
          interface _JShellTool$SnippetPredicate<T> {
          }
          interface JShellTool$SnippetPredicate<T> extends CombineTypes<[_JShellTool$SnippetPredicate<T>, java.util.function.Predicate<T>, java.lang.Object]> {}
          interface _JShellToolBuilder$$static extends ClassLike {
            _PREFERENCES_NODE: string;
            new(): JShellToolBuilder;
          }
          let JShellToolBuilder: _JShellToolBuilder$$static;
          interface _JShellToolBuilder {
            env(vars: java.util.Map<string,string>): jdk.jshell.tool.JavaShellToolBuilder;
            err(error: java.io.PrintStream): jdk.jshell.tool.JavaShellToolBuilder;
            err(cmdErr: java.io.PrintStream, userErr: java.io.PrintStream): jdk.jshell.tool.JavaShellToolBuilder;
            in(cmdIn: java.io.InputStream, userIn: java.io.InputStream): jdk.jshell.tool.JavaShellToolBuilder;
            interactiveTerminal(terminal: boolean): jdk.jshell.tool.JavaShellToolBuilder;
            locale(locale: java.util.Locale): jdk.jshell.tool.JavaShellToolBuilder;
            out(output: java.io.PrintStream): jdk.jshell.tool.JavaShellToolBuilder;
            out(cmdOut: java.io.PrintStream, console: java.io.PrintStream, userOut: java.io.PrintStream): jdk.jshell.tool.JavaShellToolBuilder;
            persistence(prefs: java.util.prefs.Preferences): jdk.jshell.tool.JavaShellToolBuilder;
            persistence(prefsMap: java.util.Map<string,string>): jdk.jshell.tool.JavaShellToolBuilder;
            promptCapture(capture: boolean): jdk.jshell.tool.JavaShellToolBuilder;
            rawTool(): JShellTool;
            run(arguments: string[]): void;
            run(...arguments: string[]): void;
            start(arguments: string[]): int;
            start(...arguments: string[]): int;
            _capturePrompt: boolean;
            _cmdErr: java.io.PrintStream;
            _cmdIn: java.io.InputStream;
            _cmdOut: java.io.PrintStream;
            _console: java.io.PrintStream;
            _interactiveTerminal: boolean;
            _locale: java.util.Locale;
            _prefs: PersistentStorage;
            _userErr: java.io.PrintStream;
            _userIn: java.io.InputStream;
            _userOut: java.io.PrintStream;
            _vars: java.util.Map<string,string>;
          }
          interface JShellToolBuilder extends CombineTypes<[_JShellToolBuilder, jdk.jshell.tool.JavaShellToolBuilder, java.lang.Object]> {}
          interface _JShellToolBuilder$MapStorage$$static extends ClassLike {
            _new(map: java.util.Map<string,string>): JShellToolBuilder$MapStorage;
          }
          let JShellToolBuilder$MapStorage: _JShellToolBuilder$MapStorage$$static;
          interface _JShellToolBuilder$MapStorage {
            clear(): void;
            flush(): void;
            get(key: string): string;
            keys(): string[];
            put(key: string, value: string): void;
            remove(key: string): void;
            _map: java.util.Map<string,string>;
          }
          interface JShellToolBuilder$MapStorage extends CombineTypes<[_JShellToolBuilder$MapStorage, java.lang.Object, jdk.internal.jshell.tool.PersistentStorage]> {}
          interface _JShellToolBuilder$PreferencesStorage$$static extends ClassLike {
            _new(p: java.util.prefs.Preferences): JShellToolBuilder$PreferencesStorage;
          }
          let JShellToolBuilder$PreferencesStorage: _JShellToolBuilder$PreferencesStorage$$static;
          interface _JShellToolBuilder$PreferencesStorage {
            clear(): void;
            flush(): void;
            get(key: string): string;
            keys(): string[];
            put(key: string, value: string): void;
            remove(key: string): void;
            _p: java.util.prefs.Preferences;
          }
          interface JShellToolBuilder$PreferencesStorage extends CombineTypes<[_JShellToolBuilder$PreferencesStorage, java.lang.Object, jdk.internal.jshell.tool.PersistentStorage]> {}
          interface _JShellToolProvider$$static extends ClassLike {
            main(arguments: string[]): void;
            new(): JShellToolProvider;
          }
          let JShellToolProvider: _JShellToolProvider$$static;
          interface _JShellToolProvider {
            getSourceVersions(): java.util.Set<javax.lang.model.SourceVersion>;
            name(): string;
            run(_in: java.io.InputStream, out: java.io.OutputStream, err: java.io.OutputStream, arguments: string[]): int;
            run(_in: java.io.InputStream, out: java.io.OutputStream, err: java.io.OutputStream, ...arguments: string[]): int;
          }
          interface JShellToolProvider extends CombineTypes<[_JShellToolProvider, javax.tools.Tool, java.lang.Object]> {}
          interface _MessageHandler$$static extends ClassLike {
          }
          let MessageHandler: _MessageHandler$$static;
          interface _MessageHandler {
            errormsg(a0: string, a1: any[]): void;
            errormsg(a0: string, ...a1: any[]): void;
            fluff(a0: string, a1: any[]): void;
            fluff(a0: string, ...a1: any[]): void;
            fluffmsg(a0: string, a1: any[]): void;
            fluffmsg(a0: string, ...a1: any[]): void;
            hard(a0: string, a1: any[]): void;
            hard(a0: string, ...a1: any[]): void;
            hardmsg(a0: string, a1: any[]): void;
            hardmsg(a0: string, ...a1: any[]): void;
            showFluff(): boolean;
          }
          interface MessageHandler extends CombineTypes<[_MessageHandler, java.lang.Object]> {}
          interface _NonInteractiveIOContext$$static extends ClassLike {
            _new(): NonInteractiveIOContext;
          }
          let NonInteractiveIOContext: _NonInteractiveIOContext$$static;
          interface _NonInteractiveIOContext {
            afterUserCode(): void;
            beforeUserCode(): void;
            history(currentSession: boolean): java.lang.Iterable<string>;
            interactiveOutput(): boolean;
            replaceLastHistoryEntry(source: string): void;
            resume(): void;
            suspend(): void;
            terminalEditorRunning(): boolean;
          }
          interface NonInteractiveIOContext extends CombineTypes<[_NonInteractiveIOContext, jdk.internal.jshell.tool.IOContext]> {}
          interface _PersistentStorage$$static extends ClassLike {
          }
          let PersistentStorage: _PersistentStorage$$static;
          interface _PersistentStorage {
            clear(): void;
            flush(): void;
            get(a0: string): string;
            keys(): string[];
            put(a0: string, a1: string): void;
            remove(a0: string): void;
          }
          interface PersistentStorage extends CombineTypes<[_PersistentStorage, java.lang.Object]> {}
          interface _ReloadIOContext$$static extends ClassLike {
            _new(history: java.lang.Iterable<string>, echoStream: java.io.PrintStream): ReloadIOContext;
          }
          let ReloadIOContext: _ReloadIOContext$$static;
          interface _ReloadIOContext {
            close(): void;
            readLine(firstLinePrompt: string, continuationPrompt: string, firstLine: boolean, prefix: string): string;
            readUserInput(): int;
            _echoStream: java.io.PrintStream;
            _it: java.util.Iterator<string>;
          }
          interface ReloadIOContext extends CombineTypes<[_ReloadIOContext, jdk.internal.jshell.tool.NonInteractiveIOContext]> {}
          interface _ScannerIOContext$$static extends ClassLike {
            _new(scannerIn: java.util.Scanner): ScannerIOContext;
            _new(rdr: java.io.Reader): ScannerIOContext;
          }
          let ScannerIOContext: _ScannerIOContext$$static;
          interface _ScannerIOContext {
            close(): void;
            readLine(firstLinePrompt: string, continuationPrompt: string, firstLine: boolean, prefix: string): string;
            readUserInput(): int;
            _scannerIn: java.util.Scanner;
          }
          interface ScannerIOContext extends CombineTypes<[_ScannerIOContext, jdk.internal.jshell.tool.NonInteractiveIOContext]> {}
          interface _Selector$$static extends ClassLike {
            _fromPreJDK14(os: Selector, smearClassIntoRecord: boolean): Selector;
            _ALWAYS: Selector;
            _ANY: Selector;
            _OLD_ALWAYS: Selector;
            _selectorMap: java.util.Map<string,Selector$SelectorInstanceWithDoc<any>>;
            _new(bits: long): Selector;
            _new(cc: java.util.Collection<Selector$FormatCase>, ca: java.util.Collection<Selector$FormatAction>, cw: java.util.Collection<Selector$FormatWhen>, cr: java.util.Collection<Selector$FormatResolve>, cu: java.util.Collection<Selector$FormatUnresolved>, ce: java.util.Collection<Selector$FormatErrors>): Selector;
            _new(fc: Selector$FormatCase, fa: Selector$FormatAction, fw: Selector$FormatWhen, fr: Selector$FormatResolve, fu: Selector$FormatUnresolved, fe: Selector$FormatErrors): Selector;
            _new(text: string, cc: java.util.EnumSet<Selector$FormatCase>, ca: java.util.EnumSet<Selector$FormatAction>, cw: java.util.EnumSet<Selector$FormatWhen>, cr: java.util.EnumSet<Selector$FormatResolve>, cu: java.util.EnumSet<Selector$FormatUnresolved>, ce: java.util.EnumSet<Selector$FormatErrors>): Selector;
            _new(cc: java.util.EnumSet<Selector$FormatCase>, ca: java.util.EnumSet<Selector$FormatAction>, cw: java.util.EnumSet<Selector$FormatWhen>, cr: java.util.EnumSet<Selector$FormatResolve>, cu: java.util.EnumSet<Selector$FormatUnresolved>, ce: java.util.EnumSet<Selector$FormatErrors>): Selector;
          }
          let Selector: _Selector$$static;
          interface _Selector {
            _asBits(): long;
            _covers(os: Selector): boolean;
            equals(o: any): boolean;
            hashCode(): int;
            _includedIn(os: Selector): boolean;
            _selectorToString<E>(sb: Selector$stringBuilder, c: java.util.EnumSet<E>, all: java.util.EnumSet<E>): void;
            toString(): string;
            _unpackEnumSets(): void;
            _bits: long;
            _ca: java.util.EnumSet<Selector$FormatAction>;
            _cc: java.util.EnumSet<Selector$FormatCase>;
            _ce: java.util.EnumSet<Selector$FormatErrors>;
            _cr: java.util.EnumSet<Selector$FormatResolve>;
            _cu: java.util.EnumSet<Selector$FormatUnresolved>;
            _cw: java.util.EnumSet<Selector$FormatWhen>;
            _text: string;
          }
          interface Selector extends CombineTypes<[_Selector, java.lang.Object]> {}
          interface _Selector$BitUnpacker$$static extends ClassLike {
          }
          let Selector$BitUnpacker: _Selector$BitUnpacker$$static;
          interface _Selector$BitUnpacker {
            _unpack(): void;
            _unpackEnumbits<E>(k: java.lang.Class<E>, values: E[]): java.util.EnumSet<E>;
            _b: long;
            _this$0: Selector;
          }
          interface Selector$BitUnpacker extends CombineTypes<[_Selector$BitUnpacker, java.lang.Object]> {}
          interface _Selector$FormatAction$$static extends ClassLike {
            valueOf(name: string): Selector$FormatAction;
            values(): Selector$FormatAction[];
            readonly ADDED: Selector$FormatAction;
            _ALL: java.util.EnumSet<Selector$FormatAction>;
            _COUNT: int;
            readonly DROPPED: Selector$FormatAction;
            readonly MODIFIED: Selector$FormatAction;
            readonly OVERWROTE: Selector$FormatAction;
            readonly REPLACED: Selector$FormatAction;
            readonly USED: Selector$FormatAction;
          }
          let Selector$FormatAction: _Selector$FormatAction$$static;
          interface _Selector$FormatAction {
            doc(): string;
            kind(): Selector$SelectorKind;
            _doc: string;
          }
          interface Selector$FormatAction extends CombineTypes<[_Selector$FormatAction, Selector$SelectorInstanceWithDoc<Selector$FormatAction>]> {}
          interface _Selector$FormatCase$$static extends ClassLike {
            valueOf(name: string): Selector$FormatCase;
            values(): Selector$FormatCase[];
            _ALL: java.util.EnumSet<Selector$FormatCase>;
            readonly ANNOTATION: Selector$FormatCase;
            readonly ASSIGNMENT: Selector$FormatCase;
            readonly CLASS: Selector$FormatCase;
            _COUNT: int;
            readonly ENUM: Selector$FormatCase;
            readonly EXPRESSION: Selector$FormatCase;
            readonly IMPORT: Selector$FormatCase;
            readonly INTERFACE: Selector$FormatCase;
            readonly METHOD: Selector$FormatCase;
            readonly RECORD: Selector$FormatCase;
            readonly STATEMENT: Selector$FormatCase;
            _SUSPICIOUS: java.util.EnumSet<Selector$FormatCase>;
            readonly VARDECL: Selector$FormatCase;
            readonly VARINIT: Selector$FormatCase;
            readonly VARVALUE: Selector$FormatCase;
          }
          let Selector$FormatCase: _Selector$FormatCase$$static;
          interface _Selector$FormatCase {
            doc(): string;
            kind(): Selector$SelectorKind;
            _doc: string;
          }
          interface Selector$FormatCase extends CombineTypes<[_Selector$FormatCase, Selector$SelectorInstanceWithDoc<Selector$FormatCase>]> {}
          interface _Selector$FormatErrors$$static extends ClassLike {
            valueOf(name: string): Selector$FormatErrors;
            values(): Selector$FormatErrors[];
            _ALL: java.util.EnumSet<Selector$FormatErrors>;
            _COUNT: int;
            readonly ERROR0: Selector$FormatErrors;
            readonly ERROR1: Selector$FormatErrors;
            readonly ERROR2: Selector$FormatErrors;
          }
          let Selector$FormatErrors: _Selector$FormatErrors$$static;
          interface _Selector$FormatErrors {
            doc(): string;
            kind(): Selector$SelectorKind;
            _doc: string;
          }
          interface Selector$FormatErrors extends CombineTypes<[_Selector$FormatErrors, Selector$SelectorInstanceWithDoc<Selector$FormatErrors>]> {}
          interface _Selector$FormatResolve$$static extends ClassLike {
            valueOf(name: string): Selector$FormatResolve;
            values(): Selector$FormatResolve[];
            _ALL: java.util.EnumSet<Selector$FormatResolve>;
            _COUNT: int;
            readonly DEFINED: Selector$FormatResolve;
            readonly NOTDEFINED: Selector$FormatResolve;
            readonly OK: Selector$FormatResolve;
          }
          let Selector$FormatResolve: _Selector$FormatResolve$$static;
          interface _Selector$FormatResolve {
            doc(): string;
            kind(): Selector$SelectorKind;
            _doc: string;
          }
          interface Selector$FormatResolve extends CombineTypes<[_Selector$FormatResolve, Selector$SelectorInstanceWithDoc<Selector$FormatResolve>]> {}
          interface _Selector$FormatUnresolved$$static extends ClassLike {
            valueOf(name: string): Selector$FormatUnresolved;
            values(): Selector$FormatUnresolved[];
            _ALL: java.util.EnumSet<Selector$FormatUnresolved>;
            _COUNT: int;
            readonly UNRESOLVED0: Selector$FormatUnresolved;
            readonly UNRESOLVED1: Selector$FormatUnresolved;
            readonly UNRESOLVED2: Selector$FormatUnresolved;
          }
          let Selector$FormatUnresolved: _Selector$FormatUnresolved$$static;
          interface _Selector$FormatUnresolved {
            doc(): string;
            kind(): Selector$SelectorKind;
            _doc: string;
          }
          interface Selector$FormatUnresolved extends CombineTypes<[_Selector$FormatUnresolved, Selector$SelectorInstanceWithDoc<Selector$FormatUnresolved>]> {}
          interface _Selector$FormatWhen$$static extends ClassLike {
            valueOf(name: string): Selector$FormatWhen;
            values(): Selector$FormatWhen[];
            _ALL: java.util.EnumSet<Selector$FormatWhen>;
            _COUNT: int;
            readonly PRIMARY: Selector$FormatWhen;
            readonly UPDATE: Selector$FormatWhen;
          }
          let Selector$FormatWhen: _Selector$FormatWhen$$static;
          interface _Selector$FormatWhen {
            doc(): string;
            kind(): Selector$SelectorKind;
            _doc: string;
          }
          interface Selector$FormatWhen extends CombineTypes<[_Selector$FormatWhen, Selector$SelectorInstanceWithDoc<Selector$FormatWhen>]> {}
          interface _Selector$SelectorBuilder$$static extends ClassLike {
            _new(selectorText: string): Selector$SelectorBuilder;
          }
          let Selector$SelectorBuilder: _Selector$SelectorBuilder$$static;
          interface _Selector$SelectorBuilder {
            _add(v: Selector$SelectorInstanceWithDoc<any>): void;
            _toSelector(): Selector;
            _faction: Selector$SelectorBuilder$SelectorCollector<Selector$FormatAction>;
            _fcase: Selector$SelectorBuilder$SelectorCollector<Selector$FormatCase>;
            _ferrors: Selector$SelectorBuilder$SelectorCollector<Selector$FormatErrors>;
            _fresolve: Selector$SelectorBuilder$SelectorCollector<Selector$FormatResolve>;
            _funresolved: Selector$SelectorBuilder$SelectorCollector<Selector$FormatUnresolved>;
            _fwhen: Selector$SelectorBuilder$SelectorCollector<Selector$FormatWhen>;
            _selectorText: string;
          }
          interface Selector$SelectorBuilder extends CombineTypes<[_Selector$SelectorBuilder, java.lang.Object]> {}
          interface _Selector$SelectorBuilder$SelectorCollector$$static<E> extends ClassLike {
            _new(k: java.lang.Class<E>): Selector$SelectorBuilder$SelectorCollector<E>;
          }
          let Selector$SelectorBuilder$SelectorCollector: _Selector$SelectorBuilder$SelectorCollector$$static<E>;
          interface _Selector$SelectorBuilder$SelectorCollector<E> {
            _add(e: E): void;
            _get(): java.util.EnumSet<E>;
            _all: java.util.EnumSet<E>;
            _set: java.util.EnumSet<E>;
          }
          interface Selector$SelectorBuilder$SelectorCollector<E> extends CombineTypes<[_Selector$SelectorBuilder$SelectorCollector<E>, java.lang.Object]> {}
          interface _Selector$SelectorInstanceWithDoc$$static<E> extends ClassLike {
          }
          let Selector$SelectorInstanceWithDoc: _Selector$SelectorInstanceWithDoc$$static<E>;
          interface _Selector$SelectorInstanceWithDoc<E> {
            doc(): string;
            kind(): Selector$SelectorKind;
          }
          interface Selector$SelectorInstanceWithDoc<E> extends CombineTypes<[_Selector$SelectorInstanceWithDoc<E>, java.lang.Object]> {}
          interface _Selector$SelectorKind$$static extends ClassLike {
            valueOf(name: string): Selector$SelectorKind;
            values(): Selector$SelectorKind[];
            readonly ACTION: Selector$SelectorKind;
            readonly CASE: Selector$SelectorKind;
            readonly ERRORS: Selector$SelectorKind;
            readonly RESOLVE: Selector$SelectorKind;
            readonly UNRESOLVED: Selector$SelectorKind;
            readonly WHEN: Selector$SelectorKind;
          }
          let Selector$SelectorKind: _Selector$SelectorKind$$static;
          interface _Selector$SelectorKind {
            _all: java.util.EnumSet<Selector$SelectorInstanceWithDoc<any>>;
            _k: java.lang.Class<Selector$SelectorInstanceWithDoc<any>>;
          }
          interface Selector$SelectorKind extends CombineTypes<[_Selector$SelectorKind]> {}
          interface _Startup$$static extends ClassLike {
            _defaultStartup(mh: MessageHandler): Startup;
            _fromFileList(fns: java.util.List<string>, context: string, mh: MessageHandler): Startup;
            _noStartup(): Startup;
            _readFile(filename: string, context: string, mh: MessageHandler): Startup$StartupEntry;
            _unpack(storedForm: string, mh: MessageHandler): Startup;
            _DEFAULT_STARTUP_NAME: string;
            _defaultStartup: Startup;
          }
          let Startup: _Startup$$static;
          interface _Startup {
            equals(o: any): boolean;
            hashCode(): int;
            _isDefault(): boolean;
            _isEmpty(): boolean;
            _show(isRetained: boolean): string;
            _showDetail(): string;
            _storedForm(): string;
            toString(): string;
            _content: string;
            _entries: java.util.List<Startup$StartupEntry>;
          }
          interface Startup extends CombineTypes<[_Startup, java.lang.Object]> {}
          interface _Startup$StartupEntry$$static extends ClassLike {
            _new(isBuiltIn: boolean, name: string, content: string): Startup$StartupEntry;
            _new(isBuiltIn: boolean, name: string, content: string, timeStamp: string): Startup$StartupEntry;
          }
          let Startup$StartupEntry: _Startup$StartupEntry$$static;
          interface _Startup$StartupEntry {
            equals(o: any): boolean;
            hashCode(): int;
            _storedForm(): string;
            toString(): string;
            _content: string;
            _isBuiltIn: boolean;
            _name: string;
            _timeStamp: string;
          }
          interface Startup$StartupEntry extends CombineTypes<[_Startup$StartupEntry, java.lang.Object]> {}
          interface _StopDetectingInputStream$$static extends ClassLike {
            readonly INITIAL_SIZE: int;
            new(stop: java.lang.Runnable, errorHandler: java.util.function.Consumer<java.lang.Exception>): StopDetectingInputStream;
          }
          let StopDetectingInputStream: _StopDetectingInputStream$$static;
          interface _StopDetectingInputStream {
            _getState(): StopDetectingInputStream$State;
            read(): int;
            read(b: byte[], off: int, len: int): int;
            setInputStream(input: java.io.InputStream): java.io.InputStream;
            setState(state: StopDetectingInputStream$State): void;
            shutdown(): void;
            _waitInputNeeded(): StopDetectingInputStream$State;
            write(b: int): void;
            _buffer: int[];
            _end: int;
            _errorHandler: java.util.function.Consumer<java.lang.Exception>;
            _initialized: boolean;
            _start: int;
            _state: StopDetectingInputStream$State;
            _stop: java.lang.Runnable;
          }
          interface StopDetectingInputStream extends CombineTypes<[_StopDetectingInputStream, java.io.InputStream]> {}
          interface _StopDetectingInputStream$State$$static extends ClassLike {
            valueOf(name: string): StopDetectingInputStream$State;
            values(): StopDetectingInputStream$State[];
            readonly BUFFER: StopDetectingInputStream$State;
            readonly CLOSED: StopDetectingInputStream$State;
            readonly READ: StopDetectingInputStream$State;
            readonly WAIT: StopDetectingInputStream$State;
          }
          let StopDetectingInputStream$State: _StopDetectingInputStream$State$$static;
          interface _StopDetectingInputStream$State {
          }
          interface StopDetectingInputStream$State extends CombineTypes<[_StopDetectingInputStream$State]> {}
        }
      }
    }
    module jshell {
      module execution {
        module impl {
          interface _ConsoleImpl$$static extends ClassLike {
            ensureOutputAreWritten(): void;
            _sendChars(remoteInput: java.io.OutputStream, data: char[], off: int, len: int): void;
            _sendInt(remoteInput: java.io.OutputStream, data: int): void;
            new(): ConsoleImpl;
          }
          let ConsoleImpl: _ConsoleImpl$$static;
          interface _ConsoleImpl {
          }
          interface ConsoleImpl extends CombineTypes<[_ConsoleImpl, java.lang.Object]> {}
          interface _ConsoleImpl$ConsoleOutputStream$$static extends ClassLike {
            new(console: JShellConsole): ConsoleImpl$ConsoleOutputStream;
          }
          let ConsoleImpl$ConsoleOutputStream: _ConsoleImpl$ConsoleOutputStream$$static;
          interface _ConsoleImpl$ConsoleOutputStream {
            _readChar(pos: int): char;
            _readCharsOrNull(pos: int): char[];
            _readInt(pos: int): int;
            write(b: int): void;
            _bp: int;
            _buffer: int[];
            _console: JShellConsole;
            readonly sinkInput: java.io.InputStream;
            _sinkOutput: java.io.OutputStream;
          }
          interface ConsoleImpl$ConsoleOutputStream extends CombineTypes<[_ConsoleImpl$ConsoleOutputStream, java.io.OutputStream]> {}
          interface _ConsoleImpl$ConsoleProviderImpl$$static extends ClassLike {
            setRemoteInput(remoteInput: java.io.OutputStream): void;
            setRemoteOutput(remoteOutput: java.io.InputStream): void;
            _console: ConsoleImpl$RemoteConsole;
            _remoteInput: java.io.OutputStream;
            _remoteOutput: java.io.InputStream;
            new(): ConsoleImpl$ConsoleProviderImpl;
          }
          let ConsoleImpl$ConsoleProviderImpl: _ConsoleImpl$ConsoleProviderImpl$$static;
          interface _ConsoleImpl$ConsoleProviderImpl {
            console(isTTY: boolean, charset: java.nio.charset.Charset): jdk.internal.io.JdkConsole;
          }
          interface ConsoleImpl$ConsoleProviderImpl extends CombineTypes<[_ConsoleImpl$ConsoleProviderImpl, java.lang.Object, jdk.internal.io.JdkConsoleProvider]> {}
          interface _ConsoleImpl$RemoteConsole$$static extends ClassLike {
            new(remoteOutput: java.io.InputStream, remoteInput: java.io.OutputStream): ConsoleImpl$RemoteConsole;
          }
          let ConsoleImpl$RemoteConsole: _ConsoleImpl$RemoteConsole$$static;
          interface _ConsoleImpl$RemoteConsole {
            charset(): java.nio.charset.Charset;
            _ensureOutputAreWritten(): void;
            flush(): void;
            format(fmt: string, args: any[]): jdk.internal.io.JdkConsole;
            format(fmt: string, ...args: any[]): jdk.internal.io.JdkConsole;
            printf(format: string, args: any[]): jdk.internal.io.JdkConsole;
            printf(format: string, ...args: any[]): jdk.internal.io.JdkConsole;
            _readChars(data: char[], off: int, len: int): int;
            _readChars(): char[];
            _readInt(): int;
            readLine(fmt: string, args: any[]): string;
            readLine(fmt: string, ...args: any[]): string;
            readLine(): string;
            readPassword(fmt: string, args: any[]): char[];
            readPassword(fmt: string, ...args: any[]): char[];
            readPassword(): char[];
            reader(): java.io.Reader;
            _sendAndReceive<R, E>(task: ConsoleImpl$RemoteConsole$SendAndReceive<R,E>): R;
            _sendChars(data: char[], off: int, len: int): void;
            _sendInt(data: int): void;
            writer(): java.io.PrintWriter;
            _reader: java.io.Reader;
            _remoteInput: java.io.OutputStream;
            _remoteOutput: java.io.InputStream;
            _writer: java.io.PrintWriter;
          }
          interface ConsoleImpl$RemoteConsole extends CombineTypes<[_ConsoleImpl$RemoteConsole, jdk.internal.io.JdkConsole, java.lang.Object]> {}
          interface _ConsoleImpl$RemoteConsole$SendAndReceive$$static<R,E> extends ClassLike {
          }
          let ConsoleImpl$RemoteConsole$SendAndReceive: _ConsoleImpl$RemoteConsole$SendAndReceive$$static<R,E>;
          interface _ConsoleImpl$RemoteConsole$SendAndReceive<R,E> {
            run(): R;
(): R;
          }
          interface ConsoleImpl$RemoteConsole$SendAndReceive<R,E> extends CombineTypes<[_ConsoleImpl$RemoteConsole$SendAndReceive<R,E>, java.lang.Object]> {}
          interface _ConsoleImpl$Task$$static extends ClassLike {
            valueOf(name: string): ConsoleImpl$Task;
            values(): ConsoleImpl$Task[];
            readonly CHARSET: ConsoleImpl$Task;
            readonly ENSURE_OUTPUTS_ARE_WRITTEN: ConsoleImpl$Task;
            readonly FLUSH_CONSOLE: ConsoleImpl$Task;
            readonly FLUSH_OUTPUT: ConsoleImpl$Task;
            readonly READ_CHARS: ConsoleImpl$Task;
            readonly READ_LINE: ConsoleImpl$Task;
            readonly READ_PASSWORD: ConsoleImpl$Task;
            readonly WRITE_CHARS: ConsoleImpl$Task;
          }
          let ConsoleImpl$Task: _ConsoleImpl$Task$$static;
          interface _ConsoleImpl$Task {
          }
          interface ConsoleImpl$Task extends CombineTypes<[_ConsoleImpl$Task]> {}
          interface _PipeInputStream$$static extends ClassLike {
            _INITIAL_SIZE: int;
            new(): PipeInputStream;
          }
          let PipeInputStream: _PipeInputStream$$static;
          interface _PipeInputStream {
            close(): void;
            createOutput(): java.io.OutputStream;
            _inputNeeded(): void;
            read(): int;
            read(b: byte[], off: int, len: int): int;
            _write(b: int): void;
            _buffer: int[];
            _closed: boolean;
            _end: int;
            _start: int;
          }
          interface PipeInputStream extends CombineTypes<[_PipeInputStream, java.io.InputStream]> {}
        }
        interface _DefaultLoaderDelegate$$static extends ClassLike {
          new(): DefaultLoaderDelegate;
        }
        let DefaultLoaderDelegate: _DefaultLoaderDelegate$$static;
        interface _DefaultLoaderDelegate {
          addToClasspath(cp: string): void;
          classesRedefined(cbcs: jshell.spi.ExecutionControl$ClassBytecodes[]): void;
          findClass(name: string): java.lang.Class<any>;
          load(cbcs: jshell.spi.ExecutionControl$ClassBytecodes[]): void;
          _klasses: java.util.Map<string,java.lang.Class<any>>;
          _loader: DefaultLoaderDelegate$RemoteClassLoader;
        }
        interface DefaultLoaderDelegate extends CombineTypes<[_DefaultLoaderDelegate, jdk.jshell.execution.LoaderDelegate, java.lang.Object]> {}
        interface _DefaultLoaderDelegate$RemoteClassLoader$$static extends ClassLike {
          _new(): DefaultLoaderDelegate$RemoteClassLoader;
        }
        let DefaultLoaderDelegate$RemoteClassLoader: _DefaultLoaderDelegate$RemoteClassLoader$$static;
        interface _DefaultLoaderDelegate$RemoteClassLoader {
          addURL(url: java.net.URL): void;
          _declare(name: string, bytes: byte[]): void;
          _doFindResource(name: string): java.net.URL;
          _findClass(name: string): java.lang.Class<any>;
          findResource(name: string): java.net.URL;
          findResources(name: string): java.util.Enumeration<java.net.URL>;
          _toResourceString(className: string): string;
          _classFiles: java.util.Map<string,DefaultLoaderDelegate$RemoteClassLoader$ClassFile>;
        }
        interface DefaultLoaderDelegate$RemoteClassLoader extends CombineTypes<[_DefaultLoaderDelegate$RemoteClassLoader, java.net.URLClassLoader]> {}
        interface _DefaultLoaderDelegate$RemoteClassLoader$ClassFile$$static extends ClassLike {
          _new(data: byte[], timestamp: long): DefaultLoaderDelegate$RemoteClassLoader$ClassFile;
        }
        let DefaultLoaderDelegate$RemoteClassLoader$ClassFile: _DefaultLoaderDelegate$RemoteClassLoader$ClassFile$$static;
        interface _DefaultLoaderDelegate$RemoteClassLoader$ClassFile {
          readonly data: byte[];
          readonly timestamp: long;
        }
        interface DefaultLoaderDelegate$RemoteClassLoader$ClassFile extends CombineTypes<[_DefaultLoaderDelegate$RemoteClassLoader$ClassFile, java.lang.Object]> {}
        interface _DefaultLoaderDelegate$RemoteClassLoader$ResourceURLStreamHandler$$static extends ClassLike {
          _new(a0: DefaultLoaderDelegate$RemoteClassLoader, name: string): DefaultLoaderDelegate$RemoteClassLoader$ResourceURLStreamHandler;
        }
        let DefaultLoaderDelegate$RemoteClassLoader$ResourceURLStreamHandler: _DefaultLoaderDelegate$RemoteClassLoader$ResourceURLStreamHandler$$static;
        interface _DefaultLoaderDelegate$RemoteClassLoader$ResourceURLStreamHandler {
          _openConnection(u: java.net.URL): java.net.URLConnection;
          _name: string;
          _this$0: DefaultLoaderDelegate$RemoteClassLoader;
        }
        interface DefaultLoaderDelegate$RemoteClassLoader$ResourceURLStreamHandler extends CombineTypes<[_DefaultLoaderDelegate$RemoteClassLoader$ResourceURLStreamHandler, java.net.URLStreamHandler]> {}
        interface _DemultiplexInput$$static extends ClassLike {
          _new(input: java.io.InputStream, io: java.util.Map<string,java.io.OutputStream>, closeList: java.lang.Iterable<java.io.OutputStream>): DemultiplexInput;
        }
        let DemultiplexInput: _DemultiplexInput$$static;
        interface _DemultiplexInput {
          _debug(format: string, args: any[]): void;
          _debug(format: string, ...args: any[]): void;
          _debug(ex: java.lang.Throwable, where: string): void;
          run(): void;
          _closeList: java.lang.Iterable<java.io.OutputStream>;
          _delegate: java.io.DataInputStream;
          _io: java.util.Map<string,java.io.OutputStream>;
        }
        interface DemultiplexInput extends CombineTypes<[_DemultiplexInput, java.lang.Thread]> {}
        interface _DirectExecutionControl$$static extends ClassLike {
          _appendEscapedChar(idx: int, cp: int, target: DirectExecutionControl$stringBuilder): void;
          _needsEscape(idx: int, cp: int): boolean;
          _valueString(value: any): string;
          _charRep: string[];
          new(loaderDelegate: LoaderDelegate): DirectExecutionControl;
          new(): DirectExecutionControl;
        }
        let DirectExecutionControl: _DirectExecutionControl$$static;
        interface _DirectExecutionControl {
          addToClasspath(cp: string): void;
          _asRunException(ex: java.lang.Throwable): jshell.spi.ExecutionControl$RunException;
          _classesRedefined(cbcs: jshell.spi.ExecutionControl$ClassBytecodes[]): void;
          _clientCodeEnter(): void;
          _clientCodeLeave(): void;
          close(): void;
          extensionCommand(command: string, arg: any): any;
          _findClass(name: string): java.lang.Class<any>;
          invoke(className: string, methodName: string): string;
          _invoke(doitMethod: java.lang.reflect.Method): string;
          load(cbcs: jshell.spi.ExecutionControl$ClassBytecodes[]): void;
          redefine(cbcs: jshell.spi.ExecutionControl$ClassBytecodes[]): void;
          stop(): void;
          _throwConvertedInvocationException(cause: java.lang.Throwable): string;
          _throwConvertedOtherException(ex: java.lang.Throwable): string;
          varValue(className: string, varName: string): string;
          _loaderDelegate: LoaderDelegate;
        }
        interface DirectExecutionControl extends CombineTypes<[_DirectExecutionControl, java.lang.Object, jdk.jshell.spi.ExecutionControl]> {}
        interface _ExecutionControlForwarder$$static extends ClassLike {
          _MAX_UTF_CHARS: int;
          _NULL_MARKER: string;
          _TRUNCATE_END: int;
          _TRUNCATE_JOIN: string;
          _TRUNCATE_START: int;
          _new(ec: jshell.spi.ExecutionControl, _in: java.io.ObjectInput, out: java.io.ObjectOutput): ExecutionControlForwarder;
        }
        let ExecutionControlForwarder: _ExecutionControlForwarder$$static;
        interface _ExecutionControlForwarder {
          _commandLoop(): void;
          _flush(): void;
          _processCommand(): boolean;
          _writeInt(i: int): void;
          _writeInternalException(ex: java.lang.Throwable): void;
          _writeNullOrUTF(s: string): void;
          _writeObject(o: any): void;
          _writeResolutionException(ex: jshell.spi.ExecutionControl$ResolutionException): void;
          _writeStatus(status: int): void;
          _writeSuccess(): boolean;
          _writeSuccessAndResult(result: string): boolean;
          _writeSuccessAndResult(result: any): boolean;
          _writeUTF(s: string): void;
          _writeUserException(ex: jshell.spi.ExecutionControl$UserException): void;
          _ec: jshell.spi.ExecutionControl;
          _in: java.io.ObjectInput;
          _out: java.io.ObjectOutput;
        }
        interface ExecutionControlForwarder extends CombineTypes<[_ExecutionControlForwarder, java.lang.Object]> {}
        interface _FailOverExecutionControlProvider$$static extends ClassLike {
          new(): FailOverExecutionControlProvider;
        }
        let FailOverExecutionControlProvider: _FailOverExecutionControlProvider$$static;
        interface _FailOverExecutionControlProvider {
          defaultParameters(): java.util.Map<string,string>;
          generate(env: jshell.spi.ExecutionEnv, parameters: java.util.Map<string,string>): jshell.spi.ExecutionControl;
          _logger(): java.util.logging.Logger;
          name(): string;
          _logger: java.util.logging.Logger;
        }
        interface FailOverExecutionControlProvider extends CombineTypes<[_FailOverExecutionControlProvider, jdk.jshell.spi.ExecutionControlProvider, java.lang.Object]> {}
        interface _JdiDefaultExecutionControl$$static extends ClassLike {
          _create(env: jshell.spi.ExecutionEnv, remoteAgent: string, isLaunch: boolean, host: string, timeout: int): jshell.spi.ExecutionControl;
          _debug(format: string, args: any[]): void;
          _debug(format: string, ...args: any[]): void;
          _debug(ex: java.lang.Throwable, where: string): void;
        }
        let JdiDefaultExecutionControl: _JdiDefaultExecutionControl$$static;
        interface _JdiDefaultExecutionControl {
          close(): void;
          _disposeVM(): void;
          invoke(classname: string, methodname: string): string;
          stop(): void;
          _vm(): com.sun.jdi.VirtualMachine;
          _STOP_LOCK: any;
          _process: java.lang.Process;
          _remoteAgent: string;
          _userCodeRunning: boolean;
          _vm: com.sun.jdi.VirtualMachine;
        }
        interface JdiDefaultExecutionControl extends CombineTypes<[_JdiDefaultExecutionControl, jdk.jshell.execution.JdiExecutionControl]> {}
        interface _JdiEventHandler$$static extends ClassLike {
          _new(vm: com.sun.jdi.VirtualMachine, reportVMExit: java.util.function.Consumer<string>): JdiEventHandler;
        }
        let JdiEventHandler: _JdiEventHandler$$static;
        interface _JdiEventHandler {
          _handleDisconnectedException(): void;
          _handleEvent(event: com.sun.jdi.event.Event): boolean;
          _handleExitEvent(event: com.sun.jdi.event.Event): void;
          run(): void;
          _shutdown(): void;
          _start(): void;
          _completed: boolean;
          _connected: boolean;
          _reportVMExit: java.util.function.Consumer<string>;
          _thread: java.lang.Thread;
          _vm: com.sun.jdi.VirtualMachine;
        }
        interface JdiEventHandler extends CombineTypes<[_JdiEventHandler, java.lang.Object, java.lang.Runnable]> {}
        interface _JdiExecutionControl$$static extends ClassLike {
          _nameToRef(vm: com.sun.jdi.VirtualMachine, name: string): com.sun.jdi.ReferenceType;
          _new(out: java.io.ObjectOutput, _in: java.io.ObjectInput): JdiExecutionControl;
        }
        let JdiExecutionControl: _JdiExecutionControl$$static;
        interface _JdiExecutionControl {
          redefine(cbcs: jshell.spi.ExecutionControl$ClassBytecodes[]): void;
          _referenceType(vm: com.sun.jdi.VirtualMachine, name: string): com.sun.jdi.ReferenceType;
          _vm(): com.sun.jdi.VirtualMachine;
(): com.sun.jdi.VirtualMachine;
          _toReferenceType: java.util.Map<string,com.sun.jdi.ReferenceType>;
        }
        interface JdiExecutionControl extends CombineTypes<[_JdiExecutionControl, jdk.jshell.execution.StreamingExecutionControl, jdk.jshell.spi.ExecutionControl]> {}
        interface _JdiExecutionControlProvider$$static extends ClassLike {
          _DEFAULT_TIMEOUT: int;
          readonly PARAM_HOST_NAME: string;
          readonly PARAM_LAUNCH: string;
          readonly PARAM_REMOTE_AGENT: string;
          readonly PARAM_TIMEOUT: string;
          new(): JdiExecutionControlProvider;
        }
        let JdiExecutionControlProvider: _JdiExecutionControlProvider$$static;
        interface _JdiExecutionControlProvider {
          defaultParameters(): java.util.Map<string,string>;
          generate(env: jshell.spi.ExecutionEnv, parameters: java.util.Map<string,string>): jshell.spi.ExecutionControl;
          name(): string;
        }
        interface JdiExecutionControlProvider extends CombineTypes<[_JdiExecutionControlProvider, jdk.jshell.spi.ExecutionControlProvider, java.lang.Object]> {}
        interface _JdiInitiator$$static extends ClassLike {
          _CONNECT_TIMEOUT_FACTOR: double;
          new(port: int, remoteVMOptions: java.util.List<string>, remoteAgent: string, isLaunch: boolean, host: string, timeout: int, customConnectorArgs: java.util.Map<string,string>): JdiInitiator;
        }
        let JdiInitiator: _JdiInitiator$$static;
        interface _JdiInitiator {
          _createTempFile(label: string): java.io.File;
          _debug(format: string, args: any[]): void;
          _debug(format: string, ...args: any[]): void;
          _debug(ex: java.lang.Throwable, where: string): void;
          _findConnector(name: string): com.sun.jdi.connect.Connector;
          _launchArgs(port: int, remoteVMOptions: string): java.util.Map<string,string>;
          _launchTarget(): com.sun.jdi.VirtualMachine;
          _listenTarget(port: int, remoteVMOptions: java.util.List<string>): com.sun.jdi.VirtualMachine;
          _mergeConnectorArgs(connector: com.sun.jdi.connect.Connector, argumentName2Value: java.util.Map<string,string>): java.util.Map<string,com.sun.jdi.connect.Connector$Argument>;
          process(): java.lang.Process;
          _readFile(f: java.io.File): string;
          _reportLaunchFail(ex: java.lang.Throwable, context: string): java.lang.InternalError;
          _timedVirtualMachineCreation(creator: java.util.concurrent.Callable<com.sun.jdi.VirtualMachine>, processComplete: java.util.concurrent.Callable<int>): com.sun.jdi.VirtualMachine;
          vm(): com.sun.jdi.VirtualMachine;
          _connectTimeout: int;
          _connector: com.sun.jdi.connect.Connector;
          _connectorArgs: java.util.Map<string,com.sun.jdi.connect.Connector$Argument>;
          _process: java.lang.Process;
          _remoteAgent: string;
          _vm: com.sun.jdi.VirtualMachine;
        }
        interface JdiInitiator extends CombineTypes<[_JdiInitiator, java.lang.Object]> {}
        interface _LoaderDelegate$$static extends ClassLike {
        }
        let LoaderDelegate: _LoaderDelegate$$static;
        interface _LoaderDelegate {
          addToClasspath(a0: string): void;
          classesRedefined(a0: jshell.spi.ExecutionControl$ClassBytecodes[]): void;
          findClass(a0: string): java.lang.Class<any>;
          load(a0: jshell.spi.ExecutionControl$ClassBytecodes[]): void;
        }
        interface LoaderDelegate extends CombineTypes<[_LoaderDelegate, java.lang.Object]> {}
        interface _LocalExecutionControl$$static extends ClassLike {
          _genCancelClass(): jshell.spi.ExecutionControl$ClassBytecodes;
          _instrument(classFile: byte[]): byte[];
          _CANCEL_CLASS: string;
          _CD_Cancel: java.lang.constant.ClassDesc;
          _CD_ThreadDeath: java.lang.constant.ClassDesc;
          _MTD_void: java.lang.constant.MethodTypeDesc;
          new(loaderDelegate: LoaderDelegate): LocalExecutionControl;
          new(): LocalExecutionControl;
        }
        let LocalExecutionControl: _LocalExecutionControl$$static;
        interface _LocalExecutionControl {
          _clientCodeEnter(): void;
          _clientCodeLeave(): void;
          _invoke(doitMethod: java.lang.reflect.Method): string;
          load(cbcs: jshell.spi.ExecutionControl$ClassBytecodes[]): void;
          stop(): void;
          _STOP_LOCK: any;
          _allStop: java.lang.reflect.Field;
          _execThreadGroup: java.lang.ThreadGroup;
          _userCodeRunning: boolean;
        }
        interface LocalExecutionControl extends CombineTypes<[_LocalExecutionControl, jdk.jshell.execution.DirectExecutionControl]> {}
        interface _LocalExecutionControlProvider$$static extends ClassLike {
          new(): LocalExecutionControlProvider;
        }
        let LocalExecutionControlProvider: _LocalExecutionControlProvider$$static;
        interface _LocalExecutionControlProvider {
          defaultParameters(): java.util.Map<string,string>;
          generate(env: jshell.spi.ExecutionEnv, parameters: java.util.Map<string,string>): jshell.spi.ExecutionControl;
          name(): string;
        }
        interface LocalExecutionControlProvider extends CombineTypes<[_LocalExecutionControlProvider, jdk.jshell.spi.ExecutionControlProvider, java.lang.Object]> {}
        interface _MultiplexingOutputStream$$static extends ClassLike {
          _PACKET_SIZE: int;
          _new(name: string, delegate: java.io.OutputStream): MultiplexingOutputStream;
        }
        let MultiplexingOutputStream: _MultiplexingOutputStream$$static;
        interface _MultiplexingOutputStream {
          close(): void;
          flush(): void;
          write(b: int): void;
          write(b: byte[], off: int, len: int): void;
          _delegate: java.io.OutputStream;
          _name: byte[];
        }
        interface MultiplexingOutputStream extends CombineTypes<[_MultiplexingOutputStream, java.io.OutputStream]> {}
        interface _RemoteCodes$$static extends ClassLike {
          _CMD_ADD_CLASSPATH: string;
          _CMD_CLOSE: string;
          _CMD_INVOKE: string;
          _CMD_LOAD: string;
          _CMD_REDEFINE: string;
          _CMD_STOP: string;
          _CMD_VAR_VALUE: string;
          _COMMAND_PREFIX: int;
          _RESULT_CLASS_INSTALL_EXCEPTION: int;
          _RESULT_CORRALLED: int;
          _RESULT_INTERNAL_PROBLEM: int;
          _RESULT_NOT_IMPLEMENTED: int;
          _RESULT_STOPPED: int;
          _RESULT_SUCCESS: int;
          _RESULT_TERMINATED: int;
          _RESULT_USER_EXCEPTION: int;
          _RESULT_USER_EXCEPTION_CHAINED: int;
          _new(): RemoteCodes;
        }
        let RemoteCodes: _RemoteCodes$$static;
        interface _RemoteCodes {
        }
        interface RemoteCodes extends CombineTypes<[_RemoteCodes, java.lang.Object]> {}
        interface _RemoteExecutionControl$$static extends ClassLike {
          main(args: string[]): void;
          new(loaderDelegate: LoaderDelegate): RemoteExecutionControl;
          new(): RemoteExecutionControl;
        }
        let RemoteExecutionControl: _RemoteExecutionControl$$static;
        interface _RemoteExecutionControl {
          _clientCodeEnter(): void;
          _clientCodeLeave(): void;
          _invoke(doitMethod: java.lang.reflect.Method): string;
          redefine(cbcs: jshell.spi.ExecutionControl$ClassBytecodes[]): void;
          stop(): void;
          _throwConvertedInvocationException(cause: java.lang.Throwable): string;
          _throwConvertedOtherException(ex: java.lang.Throwable): string;
          varValue(className: string, varName: string): string;
          _expectingStop: boolean;
          _inClientCode: boolean;
          _stopException: RemoteExecutionControl$StopExecutionException;
        }
        interface RemoteExecutionControl extends CombineTypes<[_RemoteExecutionControl, jdk.jshell.execution.DirectExecutionControl, jdk.jshell.spi.ExecutionControl]> {}
        interface _RemoteExecutionControl$StopExecutionException$$static extends ClassLike {
        }
        let RemoteExecutionControl$StopExecutionException: _RemoteExecutionControl$StopExecutionException$$static;
        interface _RemoteExecutionControl$StopExecutionException {
          fillInStackTrace(): java.lang.Throwable;
          _this$0: RemoteExecutionControl;
        }
        interface RemoteExecutionControl$StopExecutionException extends CombineTypes<[_RemoteExecutionControl$StopExecutionException, java.lang.ThreadDeath]> {}
        interface _StreamingExecutionControl$$static extends ClassLike {
          new(out: java.io.ObjectOutput, _in: java.io.ObjectInput): StreamingExecutionControl;
        }
        let StreamingExecutionControl: _StreamingExecutionControl$$static;
        interface _StreamingExecutionControl {
          addToClasspath(path: string): void;
          close(): void;
          extensionCommand(command: string, arg: any): any;
          invoke(classname: string, methodname: string): string;
          load(cbcs: jshell.spi.ExecutionControl$ClassBytecodes[]): void;
          _readAndReportClassInstallResult(): void;
          _readAndReportClassSimpleResult(): void;
          _readAndReportExecutionResult(): void;
          _readNullOrUTF(): string;
          _readResolutionException(): jshell.spi.ExecutionControl$ResolutionException;
          _readUserException(): jshell.spi.ExecutionControl$UserException;
          redefine(cbcs: jshell.spi.ExecutionControl$ClassBytecodes[]): void;
          stop(): void;
          varValue(classname: string, varname: string): string;
          _writeCommand(cmd: string): void;
          _in: java.io.ObjectInput;
          _out: java.io.ObjectOutput;
        }
        interface StreamingExecutionControl extends CombineTypes<[_StreamingExecutionControl, java.lang.Object, jdk.jshell.spi.ExecutionControl]> {}
        interface _Util$$static extends ClassLike {
          _debug(ex: java.lang.Throwable, where: string): void;
          detectJdiExitEvent(vm: com.sun.jdi.VirtualMachine, unbiddenExitHandler: java.util.function.Consumer<string>): void;
          forwardExecutionControl(ec: jshell.spi.ExecutionControl, _in: java.io.ObjectInput, out: java.io.ObjectOutput): void;
          forwardExecutionControlAndIO(ec: jshell.spi.ExecutionControl, inStream: java.io.InputStream, outStream: java.io.OutputStream, outputStreamMap: java.util.Map<string,java.util.function.Consumer<java.io.OutputStream>>, inputStreamMap: java.util.Map<string,java.util.function.Consumer<java.io.InputStream>>): void;
          _multiplexingOutputStream(label: string, outputStream: java.io.OutputStream): java.io.OutputStream;
          remoteInputOutput(input: java.io.InputStream, output: java.io.OutputStream, outputStreamMap: java.util.Map<string,java.io.OutputStream>, inputStreamMap: java.util.Map<string,java.io.InputStream>, factory: java.util.function.BiFunction<java.io.ObjectInput,java.io.ObjectOutput,jshell.spi.ExecutionControl>): jshell.spi.ExecutionControl;
          _TAG_CLOSED: int;
          _TAG_DATA: int;
          _TAG_EXCEPTION: int;
        }
        let Util: _Util$$static;
        interface _Util {
        }
        interface Util extends CombineTypes<[_Util, java.lang.Object]> {}
      }
      module resources {
        interface _l10n$$static extends ClassLike {
          new(): l10n;
        }
        let l10n: _l10n$$static;
        interface _l10n {
          _getContents(): any[][];
        }
        interface l10n extends CombineTypes<[_l10n, java.util.ListResourceBundle]> {}
        interface _l10n_de$$static extends ClassLike {
          new(): l10n_de;
        }
        let l10n_de: _l10n_de$$static;
        interface _l10n_de {
          _getContents(): any[][];
        }
        interface l10n_de extends CombineTypes<[_l10n_de, java.util.ListResourceBundle]> {}
        interface _l10n_ja$$static extends ClassLike {
          new(): l10n_ja;
        }
        let l10n_ja: _l10n_ja$$static;
        interface _l10n_ja {
          _getContents(): any[][];
        }
        interface l10n_ja extends CombineTypes<[_l10n_ja, java.util.ListResourceBundle]> {}
        interface _l10n_zh_CN$$static extends ClassLike {
          new(): l10n_zh_CN;
        }
        let l10n_zh_CN: _l10n_zh_CN$$static;
        interface _l10n_zh_CN {
          _getContents(): any[][];
        }
        interface l10n_zh_CN extends CombineTypes<[_l10n_zh_CN, java.util.ListResourceBundle]> {}
      }
      module spi {
        interface _ExecutionControl$$static extends ClassLike {
          generate(env: ExecutionEnv, name: string, parameters: java.util.Map<string,string>): ExecutionControl;
          generate(env: ExecutionEnv, spec: string): ExecutionControl;
        }
        let ExecutionControl: _ExecutionControl$$static;
        interface _ExecutionControl {
          addToClasspath(a0: string): void;
          close(): void;
          extensionCommand(a0: string, a1: any): any;
          invoke(a0: string, a1: string): string;
          load(a0: ExecutionControl$ClassBytecodes[]): void;
          redefine(a0: ExecutionControl$ClassBytecodes[]): void;
          stop(): void;
          varValue(a0: string, a1: string): string;
        }
        interface ExecutionControl extends CombineTypes<[_ExecutionControl, java.lang.Object, java.lang.AutoCloseable]> {}
        interface _ExecutionControl$ClassBytecodes$$static extends ClassLike {
          _serialVersionUID: long;
          new(name: string, bytecodes: byte[]): ExecutionControl$ClassBytecodes;
        }
        let ExecutionControl$ClassBytecodes: _ExecutionControl$ClassBytecodes$$static;
        interface _ExecutionControl$ClassBytecodes {
          bytecodes(): byte[];
          name(): string;
          _bytecodes: byte[];
          _name: string;
        }
        interface ExecutionControl$ClassBytecodes extends CombineTypes<[_ExecutionControl$ClassBytecodes, java.lang.Object, java.io.Serializable]> {}
        interface _ExecutionControl$ClassInstallException$$static extends ClassLike {
          _serialVersionUID: long;
          new(message: string, installed: boolean[]): ExecutionControl$ClassInstallException;
        }
        let ExecutionControl$ClassInstallException: _ExecutionControl$ClassInstallException$$static;
        interface _ExecutionControl$ClassInstallException {
          installed(): boolean[];
          _installed: boolean[];
        }
        interface ExecutionControl$ClassInstallException extends CombineTypes<[_ExecutionControl$ClassInstallException, jdk.jshell.spi.ExecutionControl$ExecutionControlException]> {}
        interface _ExecutionControl$EngineTerminationException$$static extends ClassLike {
          _serialVersionUID: long;
          new(message: string): ExecutionControl$EngineTerminationException;
        }
        let ExecutionControl$EngineTerminationException: _ExecutionControl$EngineTerminationException$$static;
        interface _ExecutionControl$EngineTerminationException {
        }
        interface ExecutionControl$EngineTerminationException extends CombineTypes<[_ExecutionControl$EngineTerminationException, jdk.jshell.spi.ExecutionControl$ExecutionControlException]> {}
        interface _ExecutionControl$ExecutionControlException$$static extends ClassLike {
          _serialVersionUID: long;
          new(message: string): ExecutionControl$ExecutionControlException;
        }
        let ExecutionControl$ExecutionControlException: _ExecutionControl$ExecutionControlException$$static;
        interface _ExecutionControl$ExecutionControlException {
        }
        interface ExecutionControl$ExecutionControlException extends CombineTypes<[_ExecutionControl$ExecutionControlException, java.lang.Exception]> {}
        interface _ExecutionControl$InternalException$$static extends ClassLike {
          _serialVersionUID: long;
          new(message: string): ExecutionControl$InternalException;
        }
        let ExecutionControl$InternalException: _ExecutionControl$InternalException$$static;
        interface _ExecutionControl$InternalException {
        }
        interface ExecutionControl$InternalException extends CombineTypes<[_ExecutionControl$InternalException, jdk.jshell.spi.ExecutionControl$ExecutionControlException]> {}
        interface _ExecutionControl$NotImplementedException$$static extends ClassLike {
          _serialVersionUID: long;
          new(message: string): ExecutionControl$NotImplementedException;
        }
        let ExecutionControl$NotImplementedException: _ExecutionControl$NotImplementedException$$static;
        interface _ExecutionControl$NotImplementedException {
        }
        interface ExecutionControl$NotImplementedException extends CombineTypes<[_ExecutionControl$NotImplementedException, jdk.jshell.spi.ExecutionControl$InternalException]> {}
        interface _ExecutionControl$ResolutionException$$static extends ClassLike {
          _serialVersionUID: long;
          new(id: int, stackElements: java.lang.StackTraceElement[]): ExecutionControl$ResolutionException;
        }
        let ExecutionControl$ResolutionException: _ExecutionControl$ResolutionException$$static;
        interface _ExecutionControl$ResolutionException {
          id(): int;
          _id: int;
        }
        interface ExecutionControl$ResolutionException extends CombineTypes<[_ExecutionControl$ResolutionException, jdk.jshell.spi.ExecutionControl$RunException]> {}
        interface _ExecutionControl$RunException$$static extends ClassLike {
          _serialVersionUID: long;
        }
        let ExecutionControl$RunException: _ExecutionControl$RunException$$static;
        interface _ExecutionControl$RunException {
        }
        interface ExecutionControl$RunException extends CombineTypes<[_ExecutionControl$RunException, jdk.jshell.spi.ExecutionControl$ExecutionControlException]> {}
        interface _ExecutionControl$StoppedException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): ExecutionControl$StoppedException;
        }
        let ExecutionControl$StoppedException: _ExecutionControl$StoppedException$$static;
        interface _ExecutionControl$StoppedException {
        }
        interface ExecutionControl$StoppedException extends CombineTypes<[_ExecutionControl$StoppedException, jdk.jshell.spi.ExecutionControl$RunException]> {}
        interface _ExecutionControl$UserException$$static extends ClassLike {
          _serialVersionUID: long;
          new(message: string, causeExceptionClass: string, stackElements: java.lang.StackTraceElement[]): ExecutionControl$UserException;
        }
        let ExecutionControl$UserException: _ExecutionControl$UserException$$static;
        interface _ExecutionControl$UserException {
          causeExceptionClass(): string;
          _causeExceptionClass: string;
        }
        interface ExecutionControl$UserException extends CombineTypes<[_ExecutionControl$UserException, jdk.jshell.spi.ExecutionControl$RunException]> {}
        interface _ExecutionControlProvider$$static extends ClassLike {
        }
        let ExecutionControlProvider: _ExecutionControlProvider$$static;
        interface _ExecutionControlProvider {
          defaultParameters(): java.util.Map<string,string>;
          generate(a0: ExecutionEnv, a1: java.util.Map<string,string>): ExecutionControl;
          name(): string;
        }
        interface ExecutionControlProvider extends CombineTypes<[_ExecutionControlProvider, java.lang.Object]> {}
        interface _ExecutionEnv$$static extends ClassLike {
        }
        let ExecutionEnv: _ExecutionEnv$$static;
        interface _ExecutionEnv {
          closeDown(): void;
          console(): java.util.Optional<JShellConsole>;
          extraRemoteVMOptions(): java.util.List<string>;
          userErr(): java.io.PrintStream;
          userIn(): java.io.InputStream;
          userOut(): java.io.PrintStream;
        }
        interface ExecutionEnv extends CombineTypes<[_ExecutionEnv, java.lang.Object]> {}
        interface _SPIResolutionException$$static extends ClassLike {
          new(id: int): SPIResolutionException;
        }
        let SPIResolutionException: _SPIResolutionException$$static;
        interface _SPIResolutionException {
          id(): int;
          _id: int;
        }
        interface SPIResolutionException extends CombineTypes<[_SPIResolutionException, java.lang.RuntimeException]> {}
      }
      module tool {
        interface _JavaShellToolBuilder$$static extends ClassLike {
          builder(): JavaShellToolBuilder;
        }
        let JavaShellToolBuilder: _JavaShellToolBuilder$$static;
        interface _JavaShellToolBuilder {
          env(a0: java.util.Map<string,string>): JavaShellToolBuilder;
          err(a0: java.io.PrintStream): JavaShellToolBuilder;
          err(a0: java.io.PrintStream, a1: java.io.PrintStream): JavaShellToolBuilder;
          in(a0: java.io.InputStream, a1: java.io.InputStream): JavaShellToolBuilder;
          interactiveTerminal(terminal: boolean): JavaShellToolBuilder;
          locale(a0: java.util.Locale): JavaShellToolBuilder;
          out(a0: java.io.PrintStream): JavaShellToolBuilder;
          out(a0: java.io.PrintStream, a1: java.io.PrintStream, a2: java.io.PrintStream): JavaShellToolBuilder;
          persistence(a0: java.util.prefs.Preferences): JavaShellToolBuilder;
          persistence(a0: java.util.Map<string,string>): JavaShellToolBuilder;
          promptCapture(a0: boolean): JavaShellToolBuilder;
          run(a0: string[]): void;
          run(...a0: string[]): void;
          start(arguments: string[]): int;
          start(...arguments: string[]): int;
        }
        interface JavaShellToolBuilder extends CombineTypes<[_JavaShellToolBuilder, java.lang.Object]> {}
      }
      interface _ClassTracker$$static extends ClassLike {
        _new(): ClassTracker;
      }
      let ClassTracker: _ClassTracker$$static;
      interface _ClassTracker {
        _get(className: string): ClassTracker$ClassInfo;
        _markLoaded(cbcs: jshell.spi.ExecutionControl$ClassBytecodes[]): void;
        _markLoaded(cbcs: jshell.spi.ExecutionControl$ClassBytecodes[], isLoaded: boolean[]): void;
        _setCurrentBytes(className: string, bytes: byte[]): void;
        _map: java.util.HashMap<string,ClassTracker$ClassInfo>;
      }
      interface ClassTracker extends CombineTypes<[_ClassTracker, java.lang.Object]> {}
      interface _ClassTracker$ClassInfo$$static extends ClassLike {
      }
      let ClassTracker$ClassInfo: _ClassTracker$ClassInfo$$static;
      interface _ClassTracker$ClassInfo {
        equals(o: any): boolean;
        _getClassName(): string;
        _getCurrentBytes(): byte[];
        _getLoadedBytes(): byte[];
        hashCode(): int;
        _isCurrent(): boolean;
        _isLoaded(): boolean;
        _setCurrentBytes(bytes: byte[]): void;
        _setLoadedBytes(bytes: byte[]): void;
        _toClassBytecodes(): jshell.spi.ExecutionControl$ClassBytecodes;
        _className: string;
        _currentBytes: byte[];
        _loadedBytes: byte[];
      }
      interface ClassTracker$ClassInfo extends CombineTypes<[_ClassTracker$ClassInfo, java.lang.Object]> {}
      interface _CompletenessAnalyzer$$static extends ClassLike {
        _die(): void;
        _error(): SourceCodeAnalysis$Completeness;
        _XANY1: int;
        _XBRACESNEEDED: int;
        _XDECL: int;
        _XDECL1: int;
        _XDECL1o: int;
        _XERRO: int;
        _XEXPR: int;
        _XEXPR1: int;
        _XEXPR1o: int;
        _XMODIFIER: int;
        _XSTART: int;
        _XSTMT: int;
        _XSTMT1: int;
        _XSTMT1o: int;
        _XTERM: int;
        _new(proc: JShell): CompletenessAnalyzer;
      }
      let CompletenessAnalyzer: _CompletenessAnalyzer$$static;
      interface _CompletenessAnalyzer {
        _scan(s: string): CompletenessAnalyzer$CaInfo;
        _names: com.sun.tools.javac.util.Names;
        _proc: JShell;
        _scannerFactory: com.sun.tools.javac.parser.ScannerFactory;
      }
      interface CompletenessAnalyzer extends CombineTypes<[_CompletenessAnalyzer, java.lang.Object]> {}
      interface _CompletenessAnalyzer$CT$$static extends ClassLike {
      }
      let CompletenessAnalyzer$CT: _CompletenessAnalyzer$CT$$static;
      interface _CompletenessAnalyzer$CT {
        readonly endPos: int;
        readonly kind: CompletenessAnalyzer$TK;
        readonly message: string;
        readonly tok: com.sun.tools.javac.parser.Tokens$Token;
      }
      interface CompletenessAnalyzer$CT extends CombineTypes<[_CompletenessAnalyzer$CT, java.lang.Object]> {}
      interface _CompletenessAnalyzer$CaInfo$$static extends ClassLike {
        _new(status: SourceCodeAnalysis$Completeness, unitEndPos: int): CompletenessAnalyzer$CaInfo;
      }
      let CompletenessAnalyzer$CaInfo: _CompletenessAnalyzer$CaInfo$$static;
      interface _CompletenessAnalyzer$CaInfo {
        _status: SourceCodeAnalysis$Completeness;
        _unitEndPos: int;
      }
      interface CompletenessAnalyzer$CaInfo extends CombineTypes<[_CompletenessAnalyzer$CaInfo, java.lang.Object]> {}
      interface _CompletenessAnalyzer$CaLog$$static extends ClassLike {
        _createLog(context: com.sun.tools.javac.util.Context): CompletenessAnalyzer$CaLog;
      }
      let CompletenessAnalyzer$CaLog: _CompletenessAnalyzer$CaLog$$static;
      interface _CompletenessAnalyzer$CaLog {
        error(key: string, args: any[]): void;
        error(key: string, ...args: any[]): void;
        error(pos: int, errorKey: com.sun.tools.javac.util.JCDiagnostic$Error): void;
        error(pos: int, key: string, args: any[]): void;
        error(pos: int, key: string, ...args: any[]): void;
        report(diagnostic: com.sun.tools.javac.util.JCDiagnostic): void;
      }
      interface CompletenessAnalyzer$CaLog extends CombineTypes<[_CompletenessAnalyzer$CaLog, com.sun.tools.javac.util.Log]> {}
      interface _CompletenessAnalyzer$Matched$$static extends ClassLike {
        _new(scanner: com.sun.tools.javac.parser.Scanner): CompletenessAnalyzer$Matched;
      }
      let CompletenessAnalyzer$Matched: _CompletenessAnalyzer$Matched$$static;
      interface _CompletenessAnalyzer$Matched {
        _advance(): com.sun.tools.javac.parser.Tokens$Token;
        _db(format: string, args: any[]): void;
        _db(format: string, ...args: any[]): void;
        hasNext(): boolean;
        _match(tk: CompletenessAnalyzer$TK, open: com.sun.tools.javac.parser.Tokens$TokenKind): CompletenessAnalyzer$CT;
        next(): CompletenessAnalyzer$CT;
        next(): any;
        _nextCT(): CompletenessAnalyzer$CT;
        _current: com.sun.tools.javac.parser.Tokens$Token;
        _currentCT: CompletenessAnalyzer$CT;
        _prevCT: CompletenessAnalyzer$CT;
        _scanner: com.sun.tools.javac.parser.Scanner;
        _stack: java.util.Deque<com.sun.tools.javac.parser.Tokens$Token>;
      }
      interface CompletenessAnalyzer$Matched extends CombineTypes<[_CompletenessAnalyzer$Matched, java.util.Iterator<CompletenessAnalyzer$CT>, java.lang.Object]> {}
      interface _CompletenessAnalyzer$Parser$$static extends ClassLike {
        _new(matchedFactory: java.util.function.Supplier<CompletenessAnalyzer$Matched>, names: com.sun.tools.javac.util.Names, parseFactory: java.util.function.Function<TaskFactory$Worker<TaskFactory$ParseTask,SourceCodeAnalysis$Completeness>,SourceCodeAnalysis$Completeness>): CompletenessAnalyzer$Parser;
      }
      let CompletenessAnalyzer$Parser: _CompletenessAnalyzer$Parser$$static;
      interface _CompletenessAnalyzer$Parser {
        disambiguateDeclarationVsExpression(): SourceCodeAnalysis$Completeness;
        disambiguateStatementVsExpression(): SourceCodeAnalysis$Completeness;
        endPos(): int;
        _lastly(tk: CompletenessAnalyzer$TK): SourceCodeAnalysis$Completeness;
        _nextToken(): void;
        _optionalFinalSemi(): SourceCodeAnalysis$Completeness;
        parseDeclaration(): SourceCodeAnalysis$Completeness;
        parseExpression(): SourceCodeAnalysis$Completeness;
        parseExpressionOptionalSemi(): SourceCodeAnalysis$Completeness;
        parseExpressionStatement(): SourceCodeAnalysis$Completeness;
        parseSimpleStatement(): SourceCodeAnalysis$Completeness;
        parseStatement(): SourceCodeAnalysis$Completeness;
        parseUnit(): SourceCodeAnalysis$Completeness;
        _resetInput(): void;
        _shouldAbort(tk: CompletenessAnalyzer$TK): boolean;
        _shouldAbort(flags: SourceCodeAnalysis$Completeness): boolean;
        _checkResult: SourceCodeAnalysis$Completeness;
        _in: CompletenessAnalyzer$Matched;
        _matchedFactory: java.util.function.Supplier<CompletenessAnalyzer$Matched>;
        _names: com.sun.tools.javac.util.Names;
        _parseFactory: java.util.function.Function<TaskFactory$Worker<TaskFactory$ParseTask,SourceCodeAnalysis$Completeness>,SourceCodeAnalysis$Completeness>;
        _token: CompletenessAnalyzer$CT;
      }
      interface CompletenessAnalyzer$Parser extends CombineTypes<[_CompletenessAnalyzer$Parser, java.lang.Object]> {}
      interface _CompletenessAnalyzer$SyntaxException$$static extends ClassLike {
      }
      let CompletenessAnalyzer$SyntaxException: _CompletenessAnalyzer$SyntaxException$$static;
      interface _CompletenessAnalyzer$SyntaxException {
      }
      interface CompletenessAnalyzer$SyntaxException extends CombineTypes<[_CompletenessAnalyzer$SyntaxException, java.lang.RuntimeException]> {}
      interface _CompletenessAnalyzer$TK$$static extends ClassLike {
        _tokenKindToTK(prev: CompletenessAnalyzer$TK, kind: com.sun.tools.javac.parser.Tokens$TokenKind): CompletenessAnalyzer$TK;
        valueOf(name: string): CompletenessAnalyzer$TK;
        values(): CompletenessAnalyzer$TK[];
        readonly ABSTRACT: CompletenessAnalyzer$TK;
        readonly AMP: CompletenessAnalyzer$TK;
        readonly AMPAMP: CompletenessAnalyzer$TK;
        readonly AMPEQ: CompletenessAnalyzer$TK;
        readonly ARROW: CompletenessAnalyzer$TK;
        readonly ASSERT: CompletenessAnalyzer$TK;
        readonly BANG: CompletenessAnalyzer$TK;
        readonly BANGEQ: CompletenessAnalyzer$TK;
        readonly BAR: CompletenessAnalyzer$TK;
        readonly BARBAR: CompletenessAnalyzer$TK;
        readonly BAREQ: CompletenessAnalyzer$TK;
        readonly BOOLEAN: CompletenessAnalyzer$TK;
        readonly BRACES: CompletenessAnalyzer$TK;
        readonly BRACKETS: CompletenessAnalyzer$TK;
        readonly BREAK: CompletenessAnalyzer$TK;
        readonly BYTE: CompletenessAnalyzer$TK;
        readonly CARET: CompletenessAnalyzer$TK;
        readonly CARETEQ: CompletenessAnalyzer$TK;
        readonly CASE: CompletenessAnalyzer$TK;
        readonly CATCH: CompletenessAnalyzer$TK;
        readonly CHAR: CompletenessAnalyzer$TK;
        readonly CHARLITERAL: CompletenessAnalyzer$TK;
        readonly CLASS: CompletenessAnalyzer$TK;
        readonly COLCOL: CompletenessAnalyzer$TK;
        readonly COLCOLNEW: CompletenessAnalyzer$TK;
        readonly COLON: CompletenessAnalyzer$TK;
        readonly COMMA: CompletenessAnalyzer$TK;
        readonly CONST: CompletenessAnalyzer$TK;
        readonly CONTINUE: CompletenessAnalyzer$TK;
        readonly CUSTOM: CompletenessAnalyzer$TK;
        readonly DEFAULT: CompletenessAnalyzer$TK;
        readonly DO: CompletenessAnalyzer$TK;
        readonly DOT: CompletenessAnalyzer$TK;
        readonly DOTCLASS: CompletenessAnalyzer$TK;
        readonly DOTSTAR: CompletenessAnalyzer$TK;
        readonly DOUBLE: CompletenessAnalyzer$TK;
        readonly DOUBLELITERAL: CompletenessAnalyzer$TK;
        readonly ELLIPSIS: CompletenessAnalyzer$TK;
        readonly ELSE: CompletenessAnalyzer$TK;
        readonly ENUM: CompletenessAnalyzer$TK;
        readonly EOF: CompletenessAnalyzer$TK;
        readonly EQ: CompletenessAnalyzer$TK;
        readonly EQEQ: CompletenessAnalyzer$TK;
        readonly ERROR: CompletenessAnalyzer$TK;
        readonly EXTENDS: CompletenessAnalyzer$TK;
        readonly FALSE: CompletenessAnalyzer$TK;
        readonly FINAL: CompletenessAnalyzer$TK;
        readonly FINALLY: CompletenessAnalyzer$TK;
        readonly FLOAT: CompletenessAnalyzer$TK;
        readonly FLOATLITERAL: CompletenessAnalyzer$TK;
        readonly FOR: CompletenessAnalyzer$TK;
        readonly GOTO: CompletenessAnalyzer$TK;
        readonly GT: CompletenessAnalyzer$TK;
        readonly GTEQ: CompletenessAnalyzer$TK;
        readonly GTGT: CompletenessAnalyzer$TK;
        readonly GTGTEQ: CompletenessAnalyzer$TK;
        readonly GTGTGT: CompletenessAnalyzer$TK;
        readonly GTGTGTEQ: CompletenessAnalyzer$TK;
        readonly IDENTIFIER: CompletenessAnalyzer$TK;
        readonly IF: CompletenessAnalyzer$TK;
        readonly IMPLEMENTS: CompletenessAnalyzer$TK;
        readonly IMPORT: CompletenessAnalyzer$TK;
        readonly INSTANCEOF: CompletenessAnalyzer$TK;
        readonly INT: CompletenessAnalyzer$TK;
        readonly INTERFACE: CompletenessAnalyzer$TK;
        readonly INTLITERAL: CompletenessAnalyzer$TK;
        readonly LBRACE: CompletenessAnalyzer$TK;
        readonly LBRACKET: CompletenessAnalyzer$TK;
        readonly LONG: CompletenessAnalyzer$TK;
        readonly LONGLITERAL: CompletenessAnalyzer$TK;
        readonly LPAREN: CompletenessAnalyzer$TK;
        readonly LT: CompletenessAnalyzer$TK;
        readonly LTEQ: CompletenessAnalyzer$TK;
        readonly LTLT: CompletenessAnalyzer$TK;
        readonly LTLTEQ: CompletenessAnalyzer$TK;
        readonly MONKEYS_AT: CompletenessAnalyzer$TK;
        readonly NATIVE: CompletenessAnalyzer$TK;
        readonly NEW: CompletenessAnalyzer$TK;
        readonly NULL: CompletenessAnalyzer$TK;
        readonly PACKAGE: CompletenessAnalyzer$TK;
        readonly PARENS: CompletenessAnalyzer$TK;
        readonly PERCENT: CompletenessAnalyzer$TK;
        readonly PERCENTEQ: CompletenessAnalyzer$TK;
        readonly PLUS: CompletenessAnalyzer$TK;
        readonly PLUSEQ: CompletenessAnalyzer$TK;
        readonly PLUSPLUS: CompletenessAnalyzer$TK;
        readonly PRIVATE: CompletenessAnalyzer$TK;
        readonly PROTECTED: CompletenessAnalyzer$TK;
        readonly PUBLIC: CompletenessAnalyzer$TK;
        readonly QUES: CompletenessAnalyzer$TK;
        readonly RBRACE: CompletenessAnalyzer$TK;
        readonly RBRACKET: CompletenessAnalyzer$TK;
        readonly RETURN: CompletenessAnalyzer$TK;
        readonly RPAREN: CompletenessAnalyzer$TK;
        readonly SEMI: CompletenessAnalyzer$TK;
        readonly SHORT: CompletenessAnalyzer$TK;
        readonly SLASH: CompletenessAnalyzer$TK;
        readonly SLASHEQ: CompletenessAnalyzer$TK;
        readonly STAR: CompletenessAnalyzer$TK;
        readonly STAREQ: CompletenessAnalyzer$TK;
        readonly STATIC: CompletenessAnalyzer$TK;
        readonly STRICTFP: CompletenessAnalyzer$TK;
        readonly STRINGFRAGMENT: CompletenessAnalyzer$TK;
        readonly STRINGLITERAL: CompletenessAnalyzer$TK;
        readonly SUB: CompletenessAnalyzer$TK;
        readonly SUBEQ: CompletenessAnalyzer$TK;
        readonly SUBSUB: CompletenessAnalyzer$TK;
        readonly SUPER: CompletenessAnalyzer$TK;
        readonly SWITCH: CompletenessAnalyzer$TK;
        readonly SYNCHRONIZED: CompletenessAnalyzer$TK;
        readonly THIS: CompletenessAnalyzer$TK;
        readonly THROW: CompletenessAnalyzer$TK;
        readonly THROWS: CompletenessAnalyzer$TK;
        readonly TILDE: CompletenessAnalyzer$TK;
        readonly TRANSIENT: CompletenessAnalyzer$TK;
        readonly TRUE: CompletenessAnalyzer$TK;
        readonly TRY: CompletenessAnalyzer$TK;
        readonly UNDERSCORE: CompletenessAnalyzer$TK;
        readonly UNMATCHED: CompletenessAnalyzer$TK;
        readonly VOID: CompletenessAnalyzer$TK;
        readonly VOLATILE: CompletenessAnalyzer$TK;
        readonly WHILE: CompletenessAnalyzer$TK;
        _tokenKindToTKMap: java.util.EnumMap<com.sun.tools.javac.parser.Tokens$TokenKind,CompletenessAnalyzer$TK>;
      }
      let CompletenessAnalyzer$TK: _CompletenessAnalyzer$TK$$static;
      interface _CompletenessAnalyzer$TK {
        _isBracesNeeded(): boolean;
        _isDeclaration(): boolean;
        _isError(): boolean;
        _isExpression(): boolean;
        _isModifier(): boolean;
        _isOkToTerminate(): boolean;
        _isStart(): boolean;
        _belongs: int;
        _mapping: java.util.function.Function<CompletenessAnalyzer$TK,CompletenessAnalyzer$TK>;
        _tokenKind: com.sun.tools.javac.parser.Tokens$TokenKind;
        _valueOp: boolean;
      }
      interface CompletenessAnalyzer$TK extends CombineTypes<[_CompletenessAnalyzer$TK]> {}
      interface _Corraller$$static extends ClassLike {
        new(dis: TreeDissector, keyIndex: int, source: string): Corraller;
      }
      let Corraller: _Corraller$$static;
      interface _Corraller {
        _corral<T>(tree: T): Wrap;
        corralMethod(tree: com.sun.source.tree.MethodTree): Wrap;
        _corralToWrap(tree: com.sun.source.tree.Tree): Wrap;
        corralType(tree: com.sun.source.tree.ClassTree): Wrap;
        _debugWrap(format: string, args: any[]): void;
        _debugWrap(format: string, ...args: any[]): void;
        _defaultConstructor(tree: com.sun.tools.javac.tree.JCTree$JCClassDecl): string;
        visitClassDef(tree: com.sun.tools.javac.tree.JCTree$JCClassDecl): void;
        visitMethodDef(tree: com.sun.tools.javac.tree.JCTree$JCMethodDecl): void;
        visitTree(tree: com.sun.tools.javac.tree.JCTree): void;
        visitVarDef(tree: com.sun.tools.javac.tree.JCTree$JCVariableDecl): void;
        _dis: TreeDissector;
        _resolutionExceptionBlock: string;
        _result: Wrap;
        _source: string;
      }
      interface Corraller extends CombineTypes<[_Corraller, com.sun.tools.javac.tree.JCTree$Visitor]> {}
      interface _DeclarationSnippet$$static extends ClassLike {
        _new(key: Key$DeclarationKey, userSource: string, guts: Wrap, unitName: string, subkind: Snippet$SubKind, corralled: Wrap, declareReferences: java.util.Collection<string>, bodyReferences: java.util.Collection<string>, syntheticDiags: DiagList): DeclarationSnippet;
      }
      let DeclarationSnippet: _DeclarationSnippet$$static;
      interface _DeclarationSnippet {
        _bodyReferences(): java.util.Collection<string>;
        _corralled(): Wrap;
        _declareReferences(): java.util.Collection<string>;
        _importLine(state: JShell): string;
        _bodyReferences: java.util.Collection<string>;
        _corralled: Wrap;
        _declareReferences: java.util.Collection<string>;
      }
      interface DeclarationSnippet extends CombineTypes<[_DeclarationSnippet, jdk.jshell.PersistentSnippet]> {}
      interface _Diag$$static extends ClassLike {
        readonly NOPOS: long;
        _new(): Diag;
      }
      let Diag: _Diag$$static;
      interface _Diag {
        getCode(): string;
        getEndPosition(): long;
        getMessage(a0: java.util.Locale): string;
        getPosition(): long;
        getStartPosition(): long;
        isError(): boolean;
        _isNotAStatementError(): boolean;
        _isOverrideError(): boolean;
        _isResolutionError(): boolean;
        _isUnreachableError(): boolean;
        _snippetOrNull(): Snippet;
      }
      interface Diag extends CombineTypes<[_Diag, java.lang.Object]> {}
      interface _DiagList$$static extends ClassLike {
        _new(): DiagList;
        _new(d: Diag): DiagList;
        _new(c: java.util.Collection<Diag>): DiagList;
      }
      let DiagList: _DiagList$$static;
      interface _DiagList {
        add(index: int, element: Diag): void;
        add(d: Diag): boolean;
        add(a0: int, a1: any): void;
        add(a0: any): boolean;
        addAll(c: java.util.Collection<Diag>): boolean;
        addAll(index: int, c: java.util.Collection<Diag>): boolean;
        _hasErrors(): boolean;
        _hasNotStatement(): boolean;
        _hasOtherThanNotStatementErrors(): boolean;
        _hasResolutionErrorsAndNoOthers(): boolean;
        _hasUnreachableError(): boolean;
        _ofUnit(u: Unit): DiagList;
        remove(o: any): boolean;
        set(index: int, element: Diag): Diag;
        set(a0: int, a1: any): any;
        _tally(d: Diag): void;
        _cntNotStmt: int;
        _cntOther: int;
        _cntOverride: int;
        _cntResolve: int;
        _cntUnreach: int;
      }
      interface DiagList extends CombineTypes<[_DiagList, java.util.ArrayList<Diag>]> {}
      interface _ErroneousSnippet$$static extends ClassLike {
        _new(key: Key$ErroneousKey, userSource: string, guts: Wrap, probableKind: Snippet$Kind, subkind: Snippet$SubKind): ErroneousSnippet;
      }
      let ErroneousSnippet: _ErroneousSnippet$$static;
      interface _ErroneousSnippet {
        probableKind(): Snippet$Kind;
        _probableKind: Snippet$Kind;
      }
      interface ErroneousSnippet extends CombineTypes<[_ErroneousSnippet, jdk.jshell.Snippet]> {}
      interface _Eval$$static extends ClassLike {
        _DEFAULT_PREFIX: java.util.regex.Pattern;
        _IMPORT_PATTERN: java.util.regex.Pattern;
        _new(state: JShell): Eval;
      }
      let Eval: _Eval$$static;
      interface _Eval {
        _anonymous2Member(ei: ExpressionToTypeInfo$ExpressionInfo, compileSource: string, rinit: Wrap$Range, dis: TreeDissector, init: com.sun.source.tree.Tree): Util$Pair<Wrap,Wrap>;
        _asEvalException(ue: jshell.spi.ExecutionControl$UserException): EvalException;
        _asJShellException(e: java.lang.Throwable): JShellException;
        _asUnresolvedReferenceException(re: jshell.spi.ExecutionControl$ResolutionException): UnresolvedReferenceException;
        _compileAndLoad(ins: java.util.Set<Unit>): java.util.Set<Unit>;
        _compileFailResult(xt: TaskFactory$BaseTask<any>, userSource: string, probableKind: Snippet$Kind): java.util.List<Snippet>;
        _compileFailResult(diags: DiagList, userSource: string, probableKind: Snippet$Kind): java.util.List<Snippet>;
        _computeDeclareName(ts: com.sun.tools.javac.code.Symbol$TypeSymbol): string;
        _declare(si: Snippet, generatedDiagnostics: DiagList): java.util.List<SnippetEvent>;
        _drop(si: Snippet): java.util.List<SnippetEvent>;
        _eval(userSource: string): java.util.List<SnippetEvent>;
        _events(c: Unit, outs: java.util.Collection<Unit>, value: string, exception: JShellException): java.util.List<SnippetEvent>;
        _interestingEvent(e: SnippetEvent): boolean;
        _isWrap(ste: java.lang.StackTraceElement): boolean;
        _kindOfTree(tree: com.sun.source.tree.Tree): Snippet$Kind;
        _load(classbytecodes: java.util.Collection<jshell.spi.ExecutionControl$ClassBytecodes>): void;
        _modifierDiagnostics(modtree: com.sun.source.tree.ModifiersTree, dis: TreeDissector, isAbstractProhibited: boolean): DiagList;
        _nameInUnicode(nn: javax.lang.model.element.Name, upper: boolean): string;
        _objectMethodNameDiag(name: string, nameStart: long): Diag;
        _outerWrapSet(units: java.util.Collection<Unit>): java.util.Set<OuterWrap>;
        _processClass(userSource: string, unitTree: com.sun.source.tree.Tree, compileSource: string, snippetKind: Snippet$SubKind, pt: TaskFactory$ParseTask): java.util.List<Snippet>;
        _processExpression(userSource: string, tree: com.sun.source.tree.Tree, compileSource: string, pt: TaskFactory$ParseTask): java.util.List<Snippet>;
        _processImport(userSource: string, compileSource: string): java.util.List<Snippet>;
        _processMethod(userSource: string, unitTree: com.sun.source.tree.Tree, compileSource: string, pt: TaskFactory$ParseTask): java.util.List<Snippet>;
        _processStatement(userSource: string, compileSource: string): java.util.List<Snippet>;
        _processVariables(userSource: string, units: java.util.List<com.sun.source.tree.Tree>, compileSource: string, pt: TaskFactory$ParseTask): java.util.List<Snippet>;
        _shouldGenTempVar(snippetKind: Snippet$SubKind): boolean;
        _sourceToSnippets(userSource: string): java.util.List<Snippet>;
        _sourceToSnippetsWithWrappers(userSource: string): java.util.List<Snippet>;
        _toScratchSnippets(userSource: string): java.util.List<Snippet>;
        _translateExceptionStack(ex: java.lang.Exception): java.lang.StackTraceElement[];
        _trialCompile(guts: Wrap): DiagList;
        _userReadableName(nn: javax.lang.model.element.Name, compileSource: string): string;
        _anonCount: int;
        _objectMethods: java.util.Set<string>;
        _preserveState: boolean;
        _state: JShell;
        _varNumber: int;
      }
      interface Eval extends CombineTypes<[_Eval, java.lang.Object]> {}
      interface _Eval$EvalPretty$$static extends ClassLike {
        _prettyExpr(tree: com.sun.tools.javac.tree.JCTree, bln: boolean): string;
        new(writer: java.io.Writer, bln: boolean): Eval$EvalPretty;
      }
      let Eval$EvalPretty: _Eval$EvalPretty$$static;
      interface _Eval$EvalPretty {
        print(o: any): void;
        _out: java.io.Writer;
      }
      interface Eval$EvalPretty extends CombineTypes<[_Eval$EvalPretty, com.sun.tools.javac.tree.Pretty]> {}
      interface _Eval$ModifierDiagnostic$$static extends ClassLike {
        _new(a0: Eval, fatal: boolean, message: string, start: long, a4: long): Eval$ModifierDiagnostic;
      }
      let Eval$ModifierDiagnostic: _Eval$ModifierDiagnostic$$static;
      interface _Eval$ModifierDiagnostic {
        getCode(): string;
        getEndPosition(): long;
        getMessage(locale: java.util.Locale): string;
        getPosition(): long;
        getStartPosition(): long;
        isError(): boolean;
        _end: long;
        _fatal: boolean;
        _message: string;
        _start: long;
      }
      interface Eval$ModifierDiagnostic extends CombineTypes<[_Eval$ModifierDiagnostic, jdk.jshell.Diag]> {}
      interface _Eval$Result$$static extends ClassLike {
        valueOf(name: string): Eval$Result;
        values(): Eval$Result[];
        readonly CONTINUE: Eval$Result;
        readonly FAILURE: Eval$Result;
        readonly SUCESS: Eval$Result;
      }
      let Eval$Result: _Eval$Result$$static;
      interface _Eval$Result {
      }
      interface Eval$Result extends CombineTypes<[_Eval$Result]> {}
      interface _EvalException$$static extends ClassLike {
        _new(message: string, exceptionClass: string, stackElements: java.lang.StackTraceElement[], cause: JShellException): EvalException;
      }
      let EvalException: _EvalException$$static;
      interface _EvalException {
        getCause(): JShellException;
        getCause(): java.lang.Throwable;
        getExceptionClassName(): string;
        _exceptionClass: string;
      }
      interface EvalException extends CombineTypes<[_EvalException, jdk.jshell.JShellException]> {}
      interface _ExpressionSnippet$$static extends ClassLike {
        _new(key: Key$ExpressionKey, userSource: string, guts: Wrap, name: string, subkind: Snippet$SubKind): ExpressionSnippet;
      }
      let ExpressionSnippet: _ExpressionSnippet$$static;
      interface _ExpressionSnippet {
        _key(): Key$ExpressionKey;
        _key(): Key;
        name(): string;
        typeName(): string;
      }
      interface ExpressionSnippet extends CombineTypes<[_ExpressionSnippet, jdk.jshell.Snippet]> {}
      interface _ExpressionToTypeInfo$$static extends ClassLike {
        _capturedVariables(at: TaskFactory$AnalyzeTask, topLevel: com.sun.source.tree.CompilationUnitTree, tree: com.sun.source.tree.Tree): java.util.Set<javax.lang.model.element.VariableElement>;
        expressionInfo(code: string, state: JShell): ExpressionToTypeInfo$ExpressionInfo;
        listAnonymousClassesToConvert(from: com.sun.source.tree.Tree): com.sun.tools.javac.util.List<com.sun.source.tree.NewClassTree>;
        localVariableTypeForInitializer(code: string, state: JShell, onlyAccessible: boolean): ExpressionToTypeInfo$ExpressionInfo;
        _LOCAL_VARIABLES: java.util.Set<javax.lang.model.element.ElementKind>;
        _OBJECT_TYPE_NAME: string;
      }
      let ExpressionToTypeInfo: _ExpressionToTypeInfo$$static;
      interface _ExpressionToTypeInfo {
        _findAccessibleSupertypes(type: com.sun.tools.javac.code.Type): com.sun.tools.javac.util.List<com.sun.tools.javac.code.Type>;
        _findExpressionPath(): com.sun.source.util.TreePath;
        _isAccessible(type: com.sun.tools.javac.code.Type): boolean;
        _pathToType(tp: com.sun.source.util.TreePath): com.sun.tools.javac.code.Type;
        _pathToType(tp: com.sun.source.util.TreePath, tree: com.sun.source.tree.Tree): com.sun.tools.javac.code.Type;
        _supertype(type: com.sun.tools.javac.code.Type): com.sun.tools.javac.code.Type;
        _treeToInfo(tp: com.sun.source.util.TreePath): ExpressionToTypeInfo$ExpressionInfo;
        _typeOfExpression(): ExpressionToTypeInfo$ExpressionInfo;
        _varTypeName(type: com.sun.tools.javac.code.Type, printIntersectionTypes: boolean, anonymousTypesKind: TypePrinter$AnonymousTypeKind): string;
        _varTypeName(type: com.sun.tools.javac.code.Type, fullClassNameAndPackageToClass: java.util.function.BinaryOperator<string>, printIntersectionTypes: boolean, anonymousTypesKind: TypePrinter$AnonymousTypeKind): string;
        _anon2Name: java.util.Map<com.sun.tools.javac.code.Symbol$TypeSymbol,string>;
        _at: TaskFactory$AnalyzeTask;
        _computeEnhancedInfo: boolean;
        _cu: com.sun.source.tree.CompilationUnitTree;
        _enhancedTypesAccessible: boolean;
        _state: JShell;
        _syms: com.sun.tools.javac.code.Symtab;
        _types: com.sun.tools.javac.code.Types;
      }
      interface ExpressionToTypeInfo extends CombineTypes<[_ExpressionToTypeInfo, java.lang.Object]> {}
      interface _ExpressionToTypeInfo$ExpressionInfo$$static extends ClassLike {
        new(): ExpressionToTypeInfo$ExpressionInfo;
      }
      let ExpressionToTypeInfo$ExpressionInfo: _ExpressionToTypeInfo$ExpressionInfo$$static;
      interface _ExpressionToTypeInfo$ExpressionInfo {
        _accessibleTypeName: string;
        _anonymousClasses: com.sun.tools.javac.util.List<ExpressionToTypeInfo$ExpressionInfo$AnonymousDescription>;
        _declareTypeName: string;
        _displayTypeName: string;
        _fullTypeName: string;
        _isNonVoid: boolean;
        _isPrimitiveType: boolean;
        _tree: com.sun.source.tree.ExpressionTree;
        _typeName: string;
      }
      interface ExpressionToTypeInfo$ExpressionInfo extends CombineTypes<[_ExpressionToTypeInfo$ExpressionInfo, java.lang.Object]> {}
      interface _ExpressionToTypeInfo$ExpressionInfo$AnonymousDescription$$static extends ClassLike {
        _new(): ExpressionToTypeInfo$ExpressionInfo$AnonymousDescription;
      }
      let ExpressionToTypeInfo$ExpressionInfo$AnonymousDescription: _ExpressionToTypeInfo$ExpressionInfo$AnonymousDescription$$static;
      interface _ExpressionToTypeInfo$ExpressionInfo$AnonymousDescription {
        _capturedVariables: com.sun.tools.javac.util.List<ExpressionToTypeInfo$ExpressionInfo$AnonymousDescription$VariableDesc>;
        _declareTypeName: string;
        _enclosingInstanceType: string;
        _isClass: boolean;
        _parameterTypes: com.sun.tools.javac.util.List<string>;
        _superTypeName: string;
      }
      interface ExpressionToTypeInfo$ExpressionInfo$AnonymousDescription extends CombineTypes<[_ExpressionToTypeInfo$ExpressionInfo$AnonymousDescription, java.lang.Object]> {}
      interface _ExpressionToTypeInfo$ExpressionInfo$AnonymousDescription$VariableDesc$$static extends ClassLike {
        new(type: string, name: string): ExpressionToTypeInfo$ExpressionInfo$AnonymousDescription$VariableDesc;
      }
      let ExpressionToTypeInfo$ExpressionInfo$AnonymousDescription$VariableDesc: _ExpressionToTypeInfo$ExpressionInfo$AnonymousDescription$VariableDesc$$static;
      interface _ExpressionToTypeInfo$ExpressionInfo$AnonymousDescription$VariableDesc {
        _name: string;
        _type: string;
      }
      interface ExpressionToTypeInfo$ExpressionInfo$AnonymousDescription$VariableDesc extends CombineTypes<[_ExpressionToTypeInfo$ExpressionInfo$AnonymousDescription$VariableDesc, java.lang.Object]> {}
      interface _ExpressionToTypeInfo$PathFinder$$static extends ClassLike {
      }
      let ExpressionToTypeInfo$PathFinder: _ExpressionToTypeInfo$PathFinder$$static;
      interface _ExpressionToTypeInfo$PathFinder {
        visitClass(node: com.sun.source.tree.ClassTree, isTargetContext: boolean): com.sun.source.util.TreePath;
        visitClass(a0: com.sun.source.tree.ClassTree, a1: any): any;
        visitCompilationUnit(node: com.sun.source.tree.CompilationUnitTree, isTargetContext: boolean): com.sun.source.util.TreePath;
        visitCompilationUnit(a0: com.sun.source.tree.CompilationUnitTree, a1: any): any;
        visitMethod(node: com.sun.source.tree.MethodTree, isTargetContext: boolean): com.sun.source.util.TreePath;
        visitMethod(a0: com.sun.source.tree.MethodTree, a1: any): any;
        visitReturn(node: com.sun.source.tree.ReturnTree, isTargetContext: boolean): com.sun.source.util.TreePath;
        visitReturn(a0: com.sun.source.tree.ReturnTree, a1: any): any;
        visitVariable(node: com.sun.source.tree.VariableTree, isTargetContext: boolean): com.sun.source.util.TreePath;
        visitVariable(a0: com.sun.source.tree.VariableTree, a1: any): any;
      }
      interface ExpressionToTypeInfo$PathFinder extends CombineTypes<[_ExpressionToTypeInfo$PathFinder, com.sun.source.util.TreePathScanner<com.sun.source.util.TreePath,boolean>]> {}
      interface _ExpressionToTypeInfo$Result$$static extends ClassLike {
        _serialVersionUID: long;
        _new(path: com.sun.source.util.TreePath): ExpressionToTypeInfo$Result;
      }
      let ExpressionToTypeInfo$Result: _ExpressionToTypeInfo$Result$$static;
      interface _ExpressionToTypeInfo$Result {
        _expressionPath: com.sun.source.util.TreePath;
      }
      interface ExpressionToTypeInfo$Result extends CombineTypes<[_ExpressionToTypeInfo$Result, java.lang.Error]> {}
      interface _GeneralWrap$$static extends ClassLike {
      }
      let GeneralWrap: _GeneralWrap$$static;
      interface _GeneralWrap {
        debugPos(lpos: long): string;
        firstSnippetIndex(): int;
        firstSnippetLine(): int;
        lastSnippetIndex(): int;
        lastSnippetLine(): int;
        snippetIndexToWrapIndex(a0: int): int;
        snippetLineToWrapLine(a0: int): int;
        wrapIndexToSnippetIndex(a0: int): int;
        wrapIndexToSnippetIndex(wi: long): int;
        wrapLineToSnippetLine(a0: int): int;
        wrapped(): string;
      }
      interface GeneralWrap extends CombineTypes<[_GeneralWrap, java.lang.Object]> {}
      interface _ImportSnippet$$static extends ClassLike {
        _new(key: Key$ImportKey, userSource: string, guts: Wrap, fullname: string, name: string, subkind: Snippet$SubKind, fullkey: string, isStatic: boolean, isStar: boolean): ImportSnippet;
      }
      let ImportSnippet: _ImportSnippet$$static;
      interface _ImportSnippet {
        fullname(): string;
        _importLine(state: JShell): string;
        isStatic(): boolean;
        _key(): Key$ImportKey;
        _key(): Key;
        name(): string;
        _fullkey: string;
        _fullname: string;
        _isStar: boolean;
        _isStatic: boolean;
      }
      interface ImportSnippet extends CombineTypes<[_ImportSnippet, jdk.jshell.PersistentSnippet]> {}
      interface _JShell$$static extends ClassLike {
        builder(): JShell$Builder;
        create(): JShell;
        _L10N_RB_NAME: string;
        _outputRB: java.util.ResourceBundle;
        _new(b: JShell$Builder): JShell;
      }
      let JShell: _JShell$$static;
      interface _JShell {
        addToClasspath(path: string): void;
        _checkIfAlive(): void;
        _checkValidSnippet(sn: Snippet): Snippet;
        close(): void;
        _closeDown(): void;
        _debug(flags: int, format: string, args: any[]): void;
        _debug(flags: int, format: string, ...args: any[]): void;
        _debug(ex: java.lang.Throwable, where: string): void;
        diagnostics(snippet: Snippet): java.util.stream.Stream<Diag>;
        drop(snippet: Snippet): java.util.List<SnippetEvent>;
        eval(input: string): java.util.List<SnippetEvent>;
        _executionControl(): jshell.spi.ExecutionControl;
        imports(): java.util.stream.Stream<ImportSnippet>;
        _messageFormat(key: string, args: any[]): string;
        _messageFormat(key: string, ...args: any[]): string;
        methods(): java.util.stream.Stream<MethodSnippet>;
        _nextKeyIndex(): int;
        _notifyKeyStatusEvent(event: SnippetEvent): void;
        _notifyShutdownEvent(state: JShell): void;
        onShutdown(listener: java.util.function.Consumer<JShell>): JShell$Subscription;
        onSnippetEvent(listener: java.util.function.Consumer<SnippetEvent>): JShell$Subscription;
        _onX<T>(map: java.util.Map<JShell$Subscription,java.util.function.Consumer<T>>, listener: java.util.function.Consumer<T>): JShell$Subscription;
        snippets(): java.util.stream.Stream<Snippet>;
        sourceCodeAnalysis(): SourceCodeAnalysis;
        status(snippet: Snippet): Snippet$Status;
        stop(): void;
        types(): java.util.stream.Stream<TypeDeclSnippet>;
        unresolvedDependencies(snippet: DeclarationSnippet): java.util.stream.Stream<string>;
        unsubscribe(token: JShell$Subscription): void;
        varValue(snippet: VarSnippet): string;
        variables(): java.util.stream.Stream<VarSnippet>;
        _classTracker: ClassTracker;
        _closed: boolean;
        _console: java.util.Optional<JShellConsole>;
        _err: java.io.PrintStream;
        _eval: Eval;
        _executionControl: spi.ExecutionControl;
        _extraCompilerOptions: java.util.List<string>;
        _extraRemoteVMOptions: java.util.List<string>;
        _fileManagerMapping: java.util.function.Function<javax.tools.StandardJavaFileManager,javax.tools.StandardJavaFileManager>;
        _idGenerator: java.util.function.BiFunction<Snippet,int,string>;
        _in: java.io.InputStream;
        _keyMap: KeyMap;
        _keyStatusListeners: java.util.Map<JShell$Subscription,java.util.function.Consumer<SnippetEvent>>;
        _maps: SnippetMaps;
        _nextKeyIndex: int;
        _out: java.io.PrintStream;
        _outerMap: OuterWrapMap;
        _shutdownListeners: java.util.Map<JShell$Subscription,java.util.function.Consumer<JShell>>;
        _sourceCodeAnalysis: SourceCodeAnalysisImpl;
        _taskFactory: TaskFactory;
        _tempVariableNameGenerator: java.util.function.Supplier<string>;
      }
      interface JShell extends CombineTypes<[_JShell, java.lang.Object, java.lang.AutoCloseable]> {}
      interface _JShell$Builder$$static extends ClassLike {
        _new(): JShell$Builder;
      }
      let JShell$Builder: _JShell$Builder$$static;
      interface _JShell$Builder {
        build(): JShell;
        compilerOptions(options: string[]): JShell$Builder;
        compilerOptions(...options: string[]): JShell$Builder;
        console(console: JShellConsole): JShell$Builder;
        err(err: java.io.PrintStream): JShell$Builder;
        executionEngine(executionControlSpec: string): JShell$Builder;
        executionEngine(executionControlProvider: jshell.spi.ExecutionControlProvider, executionControlParameters: java.util.Map<string,string>): JShell$Builder;
        fileManager(mapping: java.util.function.Function<javax.tools.StandardJavaFileManager,javax.tools.StandardJavaFileManager>): JShell$Builder;
        idGenerator(generator: java.util.function.BiFunction<Snippet,int,string>): JShell$Builder;
        in(_in: java.io.InputStream): JShell$Builder;
        out(out: java.io.PrintStream): JShell$Builder;
        remoteVMOptions(options: string[]): JShell$Builder;
        remoteVMOptions(...options: string[]): JShell$Builder;
        tempVariableNameGenerator(generator: java.util.function.Supplier<string>): JShell$Builder;
        _console: JShellConsole;
        _err: java.io.PrintStream;
        _executionControlParameters: java.util.Map<string,string>;
        _executionControlProvider: spi.ExecutionControlProvider;
        _executionControlSpec: string;
        _extraCompilerOptions: java.util.List<string>;
        _extraRemoteVMOptions: java.util.List<string>;
        _fileManagerMapping: java.util.function.Function<javax.tools.StandardJavaFileManager,javax.tools.StandardJavaFileManager>;
        _idGenerator: java.util.function.BiFunction<Snippet,int,string>;
        _in: java.io.InputStream;
        _out: java.io.PrintStream;
        _tempVariableNameGenerator: java.util.function.Supplier<string>;
      }
      interface JShell$Builder extends CombineTypes<[_JShell$Builder, java.lang.Object]> {}
      interface _JShell$ExecutionEnvImpl$$static extends ClassLike {
        _new(this$0: JShell): JShell$ExecutionEnvImpl;
      }
      let JShell$ExecutionEnvImpl: _JShell$ExecutionEnvImpl$$static;
      interface _JShell$ExecutionEnvImpl {
        closeDown(): void;
        console(): java.util.Optional<JShellConsole>;
        extraRemoteVMOptions(): java.util.List<string>;
        userErr(): java.io.PrintStream;
        userIn(): java.io.InputStream;
        userOut(): java.io.PrintStream;
        _this$0: JShell;
      }
      interface JShell$ExecutionEnvImpl extends CombineTypes<[_JShell$ExecutionEnvImpl, java.lang.Object, jdk.jshell.spi.ExecutionEnv]> {}
      interface _JShell$Subscription$$static extends ClassLike {
        _new(this$0: java.util.function.Consumer<JShell$Subscription>): JShell$Subscription;
      }
      let JShell$Subscription: _JShell$Subscription$$static;
      interface _JShell$Subscription {
        _remover: java.util.function.Consumer<JShell$Subscription>;
      }
      interface JShell$Subscription extends CombineTypes<[_JShell$Subscription, java.lang.Object]> {}
      interface _JShellConsole$$static extends ClassLike {
      }
      let JShellConsole: _JShellConsole$$static;
      interface _JShellConsole {
        charset(): java.nio.charset.Charset;
        flush(): void;
        readLine(a0: string): string;
        readPassword(a0: string): char[];
        reader(): java.io.Reader;
        writer(): java.io.PrintWriter;
      }
      interface JShellConsole extends CombineTypes<[_JShellConsole, java.lang.Object]> {}
      interface _JShellException$$static extends ClassLike {
        _new(message: string): JShellException;
        _new(message: string, cause: java.lang.Throwable): JShellException;
      }
      let JShellException: _JShellException$$static;
      interface _JShellException {
      }
      interface JShellException extends CombineTypes<[_JShellException, java.lang.Exception]> {}
      interface _Key$$static extends ClassLike {
        _new(state: JShell): Key;
      }
      let Key: _Key$$static;
      interface _Key {
        _index(): int;
        _kind(): Snippet$Kind;
(): Snippet$Kind;
        _state(): JShell;
        _index: int;
        _state: JShell;
      }
      interface Key extends CombineTypes<[_Key, java.lang.Object]> {}
      interface _Key$DeclarationKey$$static extends ClassLike {
        _new(state: JShell, name: string): Key$DeclarationKey;
      }
      let Key$DeclarationKey: _Key$DeclarationKey$$static;
      interface _Key$DeclarationKey {
      }
      interface Key$DeclarationKey extends CombineTypes<[_Key$DeclarationKey, jdk.jshell.Key$PersistentKey]> {}
      interface _Key$ErroneousKey$$static extends ClassLike {
        _new(state: JShell): Key$ErroneousKey;
      }
      let Key$ErroneousKey: _Key$ErroneousKey$$static;
      interface _Key$ErroneousKey {
        _kind(): Snippet$Kind;
        toString(): string;
      }
      interface Key$ErroneousKey extends CombineTypes<[_Key$ErroneousKey, jdk.jshell.Key$UniqueKey]> {}
      interface _Key$ExpressionKey$$static extends ClassLike {
        _new(state: JShell, name: string, typeName: string): Key$ExpressionKey;
      }
      let Key$ExpressionKey: _Key$ExpressionKey$$static;
      interface _Key$ExpressionKey {
        kind(): Snippet$Kind;
        _name(): string;
        toString(): string;
        _typeName(): string;
        _name: string;
        _typeName: string;
      }
      interface Key$ExpressionKey extends CombineTypes<[_Key$ExpressionKey, jdk.jshell.Key$UniqueKey]> {}
      interface _Key$ImportKey$$static extends ClassLike {
        _new(state: JShell, name: string, snippetKind: Snippet$SubKind): Key$ImportKey;
      }
      let Key$ImportKey: _Key$ImportKey$$static;
      interface _Key$ImportKey {
        kind(): Snippet$Kind;
        _snippetKind(): Snippet$SubKind;
        toString(): string;
        _snippetKind: Snippet$SubKind;
      }
      interface Key$ImportKey extends CombineTypes<[_Key$ImportKey, jdk.jshell.Key$PersistentKey]> {}
      interface _Key$MethodKey$$static extends ClassLike {
        _new(state: JShell, name: string, parameterTypes: string): Key$MethodKey;
      }
      let Key$MethodKey: _Key$MethodKey$$static;
      interface _Key$MethodKey {
        _kind(): Snippet$Kind;
        _parameterTypes(): string;
        toString(): string;
        _parameterTypes: string;
      }
      interface Key$MethodKey extends CombineTypes<[_Key$MethodKey, jdk.jshell.Key$DeclarationKey]> {}
      interface _Key$PersistentKey$$static extends ClassLike {
        _new(state: JShell, name: string): Key$PersistentKey;
      }
      let Key$PersistentKey: _Key$PersistentKey$$static;
      interface _Key$PersistentKey {
        _name(): string;
        _name: string;
      }
      interface Key$PersistentKey extends CombineTypes<[_Key$PersistentKey, jdk.jshell.Key]> {}
      interface _Key$StatementKey$$static extends ClassLike {
        _new(state: JShell): Key$StatementKey;
      }
      let Key$StatementKey: _Key$StatementKey$$static;
      interface _Key$StatementKey {
        kind(): Snippet$Kind;
        toString(): string;
      }
      interface Key$StatementKey extends CombineTypes<[_Key$StatementKey, jdk.jshell.Key$UniqueKey]> {}
      interface _Key$TypeDeclKey$$static extends ClassLike {
        _new(state: JShell, name: string): Key$TypeDeclKey;
      }
      let Key$TypeDeclKey: _Key$TypeDeclKey$$static;
      interface _Key$TypeDeclKey {
        _kind(): Snippet$Kind;
        toString(): string;
      }
      interface Key$TypeDeclKey extends CombineTypes<[_Key$TypeDeclKey, jdk.jshell.Key$DeclarationKey]> {}
      interface _Key$UniqueKey$$static extends ClassLike {
        _new(state: JShell): Key$UniqueKey;
      }
      let Key$UniqueKey: _Key$UniqueKey$$static;
      interface _Key$UniqueKey {
      }
      interface Key$UniqueKey extends CombineTypes<[_Key$UniqueKey, jdk.jshell.Key]> {}
      interface _Key$VarKey$$static extends ClassLike {
        _new(state: JShell, name: string): Key$VarKey;
      }
      let Key$VarKey: _Key$VarKey$$static;
      interface _Key$VarKey {
        kind(): Snippet$Kind;
        toString(): string;
      }
      interface Key$VarKey extends CombineTypes<[_Key$VarKey, jdk.jshell.Key$DeclarationKey]> {}
      interface _KeyMap$$static extends ClassLike {
        _new(state: JShell): KeyMap;
      }
      let KeyMap: _KeyMap$$static;
      interface _KeyMap {
        _doesVariableNameExist(name: string): boolean;
        _importKeys(): java.util.stream.Stream<Key$ImportKey>;
        _keyForClass(name: string): Key$TypeDeclKey;
        _keyForErroneous(): Key$ErroneousKey;
        _keyForExpression(name: string, type: string): Key$ExpressionKey;
        _keyForImport(name: string, snippetKind: Snippet$SubKind): Key$ImportKey;
        _keyForMethod(name: string, parameterTypes: string): Key$MethodKey;
        _keyForStatement(): Key$StatementKey;
        _keyForVariable(name: string): Key$VarKey;
        _classMap: java.util.Map<string,Key$TypeDeclKey>;
        _importMap: java.util.Map<string,Key$ImportKey>;
        _methodMap: java.util.Map<string,Key$MethodKey>;
        _state: JShell;
        _varMap: java.util.Map<string,Key$VarKey>;
      }
      interface KeyMap extends CombineTypes<[_KeyMap, java.lang.Object]> {}
      interface _MaskCommentsAndModifiers$$static extends ClassLike {
        _ALL_MODIFIERS: java.util.Set<string>;
        _IGNORED_MODIFIERS: java.util.Set<string>;
        _new(s: string, maskModifiers: boolean): MaskCommentsAndModifiers;
        _new(s: string, ignoredModifiers: java.util.Set<string>): MaskCommentsAndModifiers;
        _new(s: string, maskModifiers: boolean, ignoredModifiers: java.util.Set<string>): MaskCommentsAndModifiers;
      }
      let MaskCommentsAndModifiers: _MaskCommentsAndModifiers$$static;
      interface _MaskCommentsAndModifiers {
        _cleared(): string;
        _endsWithOpenToken(): boolean;
        _mask(): string;
        _next(): void;
        _read(): int;
        _unread(): void;
        _write(ch: int): void;
        _write(s: MaskCommentsAndModifiers$charSequence): void;
        _writeMask(ch: int): void;
        _writeMask(s: MaskCommentsAndModifiers$charSequence): void;
        _writeTo(sb: MaskCommentsAndModifiers$stringBuilder, ch: int): void;
        _c: int;
        _ignoredModifiers: java.util.Set<string>;
        _length: int;
        _maskModifiers: boolean;
        _next: int;
        _openToken: boolean;
        _sbCleared: jshell$stringBuilder;
        _sbMask: jshell$stringBuilder;
        _str: string;
      }
      interface MaskCommentsAndModifiers extends CombineTypes<[_MaskCommentsAndModifiers, java.lang.Object]> {}
      interface _MemoryFileManager$$static extends ClassLike {
        new(standardManager: javax.tools.StandardJavaFileManager, proc: JShell): MemoryFileManager;
      }
      let MemoryFileManager: _MemoryFileManager$$static;
      interface _MemoryFileManager {
        close(): void;
        contains(location: javax.tools.JavaFileManager$Location, file: javax.tools.FileObject): boolean;
        createSourceFileObject(origin: any, name: string, code: string): javax.tools.JavaFileObject;
        dumpClasses(): void;
        flush(): void;
        _generatedClasses(): java.util.Collection<MemoryFileManager$OutputMemoryJavaFileObject>;
        getClassLoader(location: javax.tools.JavaFileManager$Location): java.lang.ClassLoader;
        getFileForInput(location: javax.tools.JavaFileManager$Location, packageName: string, relativeName: string): javax.tools.FileObject;
        getFileForOutput(location: javax.tools.JavaFileManager$Location, packageName: string, relativeName: string, sibling: javax.tools.FileObject): javax.tools.FileObject;
        getJavaFileForInput(location: javax.tools.JavaFileManager$Location, className: string, kind: javax.tools.JavaFileObject$Kind): javax.tools.JavaFileObject;
        getJavaFileForOutput(location: javax.tools.JavaFileManager$Location, className: string, kind: javax.tools.JavaFileObject$Kind, sibling: javax.tools.FileObject): javax.tools.JavaFileObject;
        _getLocationAsPaths(loc: javax.tools.JavaFileManager$Location): java.lang.Iterable<java.nio.file.Path>;
        getLocationForModule(location: javax.tools.JavaFileManager$Location, moduleName: string): javax.tools.JavaFileManager$Location;
        getLocationForModule(location: javax.tools.JavaFileManager$Location, fo: javax.tools.JavaFileObject): javax.tools.JavaFileManager$Location;
        handleOption(current: string, remaining: java.util.Iterator<string>): boolean;
        hasLocation(location: javax.tools.JavaFileManager$Location): boolean;
        inferBinaryName(location: javax.tools.JavaFileManager$Location, file: javax.tools.JavaFileObject): string;
        inferModuleName(location: javax.tools.JavaFileManager$Location): string;
        isSameFile(a: javax.tools.FileObject, b: javax.tools.FileObject): boolean;
        isSupportedOption(option: string): int;
        list(location: javax.tools.JavaFileManager$Location, packageName: string, kinds: java.util.Set<javax.tools.JavaFileObject$Kind>, recurse: boolean): java.lang.Iterable<javax.tools.JavaFileObject>;
        listLocationsForModules(location: javax.tools.JavaFileManager$Location): java.lang.Iterable<java.util.Set<javax.tools.JavaFileManager$Location>>;
        _registerClassFileCreationListener(listen: MemoryFileManager$ClassFileCreationListener): void;
        _classListener: MemoryFileManager$ClassFileCreationListener;
        _classObjects: java.util.Map<string,MemoryFileManager$OutputMemoryJavaFileObject>;
        _proc: JShell;
        _stdFileManager: javax.tools.StandardJavaFileManager;
      }
      interface MemoryFileManager extends CombineTypes<[_MemoryFileManager, javax.tools.JavaFileManager, java.lang.Object]> {}
      interface _MemoryFileManager$ClassFileCreationListener$$static extends ClassLike {
      }
      let MemoryFileManager$ClassFileCreationListener: _MemoryFileManager$ClassFileCreationListener$$static;
      interface _MemoryFileManager$ClassFileCreationListener {
        newClassFile(a0: MemoryFileManager$OutputMemoryJavaFileObject, a1: javax.tools.JavaFileManager$Location, a2: string, a3: javax.tools.JavaFileObject$Kind, a4: javax.tools.FileObject): void;
(a0: MemoryFileManager$OutputMemoryJavaFileObject, a1: javax.tools.JavaFileManager$Location, a2: string, a3: javax.tools.JavaFileObject$Kind, a4: javax.tools.FileObject): void;
      }
      interface MemoryFileManager$ClassFileCreationListener extends CombineTypes<[_MemoryFileManager$ClassFileCreationListener, java.lang.Object]> {}
      interface _MemoryFileManager$MemoryJavaFileObject$$static extends ClassLike {
        new(name: string, kind: javax.tools.JavaFileObject$Kind): MemoryFileManager$MemoryJavaFileObject;
      }
      let MemoryFileManager$MemoryJavaFileObject: _MemoryFileManager$MemoryJavaFileObject$$static;
      interface _MemoryFileManager$MemoryJavaFileObject {
      }
      interface MemoryFileManager$MemoryJavaFileObject extends CombineTypes<[_MemoryFileManager$MemoryJavaFileObject, javax.tools.SimpleJavaFileObject]> {}
      interface _MemoryFileManager$OutputMemoryJavaFileObject$$static extends ClassLike {
        new(name: string, kind: javax.tools.JavaFileObject$Kind): MemoryFileManager$OutputMemoryJavaFileObject;
      }
      let MemoryFileManager$OutputMemoryJavaFileObject: _MemoryFileManager$OutputMemoryJavaFileObject$$static;
      interface _MemoryFileManager$OutputMemoryJavaFileObject {
        dump(): void;
        getBytes(): byte[];
        getName(): string;
        openInputStream(): java.io.InputStream;
        openOutputStream(): java.io.OutputStream;
        _bos: java.io.ByteArrayOutputStream;
        _bytes: byte[];
        _className: string;
      }
      interface MemoryFileManager$OutputMemoryJavaFileObject extends CombineTypes<[_MemoryFileManager$OutputMemoryJavaFileObject, jdk.jshell.MemoryFileManager$MemoryJavaFileObject]> {}
      interface _MemoryFileManager$SourceMemoryJavaFileObject$$static extends ClassLike {
        _new(this$0: MemoryFileManager, origin: any, className: string, code: string): MemoryFileManager$SourceMemoryJavaFileObject;
      }
      let MemoryFileManager$SourceMemoryJavaFileObject: _MemoryFileManager$SourceMemoryJavaFileObject$$static;
      interface _MemoryFileManager$SourceMemoryJavaFileObject {
        getCharContent(ignoreEncodingErrors: boolean): MemoryFileManager$SourceMemoryJavaFileObject$charSequence;
        getOrigin(): any;
        _origin: any;
        _src: string;
      }
      interface MemoryFileManager$SourceMemoryJavaFileObject extends CombineTypes<[_MemoryFileManager$SourceMemoryJavaFileObject, jdk.jshell.MemoryFileManager$MemoryJavaFileObject]> {}
      interface _MethodSnippet$$static extends ClassLike {
        _new(key: Key$MethodKey, userSource: string, guts: Wrap, name: string, signature: string, corralled: Wrap, declareReferences: java.util.Collection<string>, bodyReferences: java.util.Collection<string>, unresolvedSelf: string, syntheticDiags: DiagList): MethodSnippet;
      }
      let MethodSnippet: _MethodSnippet$$static;
      interface _MethodSnippet {
        _key(): Key$MethodKey;
        _key(): Key;
        parameterTypes(): string;
        _qualifiedParameterTypes(): string;
        _setQualifiedParameterTypes(sig: string): void;
        signature(): string;
        toString(): string;
        _qualifiedParameterTypes: string;
        _signature: string;
        _unresolvedSelf: string;
      }
      interface MethodSnippet extends CombineTypes<[_MethodSnippet, jdk.jshell.DeclarationSnippet]> {}
      interface _OuterImportSnippetWrap$$static extends ClassLike {
        _new(wrap: Wrap, snippet: Snippet): OuterImportSnippetWrap;
      }
      let OuterImportSnippetWrap: _OuterImportSnippetWrap$$static;
      interface _OuterImportSnippetWrap {
        toString(): string;
        _wrapDiag(d: javax.tools.Diagnostic<javax.tools.JavaFileObject>): Diag;
        _snippet: Snippet;
      }
      interface OuterImportSnippetWrap extends CombineTypes<[_OuterImportSnippetWrap, jdk.jshell.OuterWrap]> {}
      interface _OuterSnippetsClassWrap$$static extends ClassLike {
        _new(className: string, w: Wrap$CompoundWrap, snippets: java.util.List<Snippet>, wraps: java.util.List<Wrap>): OuterSnippetsClassWrap;
      }
      let OuterSnippetsClassWrap: _OuterSnippetsClassWrap$$static;
      interface _OuterSnippetsClassWrap {
        className(): string;
        _ordinal(sn: Snippet): int;
        toString(): string;
        _wrapDiag(d: javax.tools.Diagnostic<javax.tools.JavaFileObject>): Diag;
        wrapLineToSnippet(wline: int): Snippet;
        _className: string;
        _wrapToSnippet: java.util.LinkedHashMap<Wrap,Snippet>;
      }
      interface OuterSnippetsClassWrap extends CombineTypes<[_OuterSnippetsClassWrap, jdk.jshell.OuterWrap]> {}
      interface _OuterWrap$$static extends ClassLike {
        _new(wrap: Wrap): OuterWrap;
      }
      let OuterWrap: _OuterWrap$$static;
      interface _OuterWrap {
        classFullName(): string;
        className(): string;
        equals(o: any): boolean;
        firstSnippetIndex(): int;
        firstSnippetLine(): int;
        hashCode(): int;
        lastSnippetIndex(): int;
        lastSnippetLine(): int;
        snippetIndexToWrapIndex(ui: int): int;
        snippetLineToWrapLine(snline: int): int;
        toString(): string;
        _wrapDiag(d: javax.tools.Diagnostic<javax.tools.JavaFileObject>): Diag;
        wrapIndexToSnippetIndex(si: int): int;
        wrapLineToSnippetLine(wline: int): int;
        wrapped(): string;
        _w: Wrap;
      }
      interface OuterWrap extends CombineTypes<[_OuterWrap, java.lang.Object, jdk.jshell.GeneralWrap]> {}
      interface _OuterWrap$WrappedDiagnostic$$static extends ClassLike {
        _new(this$0: javax.tools.Diagnostic<javax.tools.JavaFileObject>): OuterWrap$WrappedDiagnostic;
      }
      let OuterWrap$WrappedDiagnostic: _OuterWrap$WrappedDiagnostic$$static;
      interface _OuterWrap$WrappedDiagnostic {
        getCode(): string;
        getEndPosition(): long;
        getMessage(locale: java.util.Locale): string;
        getPosition(): long;
        getStartPosition(): long;
        isError(): boolean;
        _isResolutionError(): boolean;
        toString(): string;
        _diag: javax.tools.Diagnostic<javax.tools.JavaFileObject>;
        _this$0: OuterWrap;
      }
      interface OuterWrap$WrappedDiagnostic extends CombineTypes<[_OuterWrap$WrappedDiagnostic, jdk.jshell.Diag]> {}
      interface _OuterWrapMap$$static extends ClassLike {
        _new(state: JShell): OuterWrapMap;
      }
      let OuterWrapMap: _OuterWrapMap$$static;
      interface _OuterWrapMap {
        _getOuter(className: string): OuterSnippetsClassWrap;
        _wrapImport(guts: Wrap, sn: Snippet): OuterWrap;
        _wrapInClass(except: java.util.Set<Key>, plus: java.util.Collection<Snippet>, snippets: java.util.List<Snippet>, wraps: java.util.List<Wrap>): OuterWrap;
        _wrapInTrialClass(wrap: Wrap): OuterWrap;
        _wrappedInClass(className: string, imports: string, wraps: java.util.List<Wrap>): Wrap$CompoundWrap;
        _classOuters: java.util.Map<string,OuterSnippetsClassWrap>;
        _state: JShell;
      }
      interface OuterWrapMap extends CombineTypes<[_OuterWrapMap, java.lang.Object]> {}
      interface _PersistentSnippet$$static extends ClassLike {
        _new(key: Key, userSource: string, guts: Wrap, unitName: string, subkind: Snippet$SubKind, syntheticDiags: DiagList): PersistentSnippet;
      }
      let PersistentSnippet: _PersistentSnippet$$static;
      interface _PersistentSnippet {
        name(): string;
      }
      interface PersistentSnippet extends CombineTypes<[_PersistentSnippet, jdk.jshell.Snippet]> {}
      interface _ReplParser$$static extends ClassLike {
        new(fac: ReplParserFactory, S: com.sun.tools.javac.parser.Lexer, keepDocComments: boolean, keepLineMap: boolean, keepEndPositions: boolean, forceExpression: boolean): ReplParser;
      }
      let ReplParser: _ReplParser$$static;
      interface _ReplParser {
        parseCompilationUnit(): com.sun.tools.javac.tree.JCTree$JCCompilationUnit;
        _replUnit(pmods: com.sun.tools.javac.tree.JCTree$JCModifiers, dc: com.sun.tools.javac.parser.Tokens$Comment): com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree>;
        _forceExpression: boolean;
        _source: com.sun.tools.javac.code.Source;
      }
      interface ReplParser extends CombineTypes<[_ReplParser, com.sun.tools.javac.parser.JavacParser]> {}
      interface _ReplParserFactory$$static extends ClassLike {
        preRegister(context: com.sun.tools.javac.util.Context, forceExpression: boolean): void;
        _new(context: com.sun.tools.javac.util.Context, forceExpression: boolean): ReplParserFactory;
      }
      let ReplParserFactory: _ReplParserFactory$$static;
      interface _ReplParserFactory {
        newParser(input: ReplParserFactory$charSequence, keepDocComments: boolean, keepEndPos: boolean, keepLineMap: boolean): com.sun.tools.javac.parser.JavacParser;
        newParser(input: ReplParserFactory$charSequence, keepDocComments: boolean, keepEndPos: boolean, keepLineMap: boolean, parseModuleInfo: boolean): com.sun.tools.javac.parser.JavacParser;
        _forceExpression: boolean;
        _scannerFactory: com.sun.tools.javac.parser.ScannerFactory;
        _source: com.sun.tools.javac.code.Source;
      }
      interface ReplParserFactory extends CombineTypes<[_ReplParserFactory, com.sun.tools.javac.parser.ParserFactory]> {}
      interface _ReplResolve$$static extends ClassLike {
        isStatic(env: com.sun.tools.javac.comp.Env<com.sun.tools.javac.comp.AttrContext>): boolean;
        _new(context: com.sun.tools.javac.util.Context): ReplResolve;
      }
      let ReplResolve: _ReplResolve$$static;
      interface _ReplResolve {
      }
      interface ReplResolve extends CombineTypes<[_ReplResolve, com.sun.tools.javac.comp.Resolve]> {}
      interface _Snippet$$static extends ClassLike {
        _UNASSOCIATED_ID: string;
        _new(key: Key, userSource: string, guts: Wrap, unitName: string, subkind: Snippet$SubKind, syntheticDiags: DiagList): Snippet;
      }
      let Snippet: _Snippet$$static;
      interface _Snippet {
        _bodyReferences(): java.util.Collection<string>;
        _classFullName(): string;
        _className(): string;
        _corralled(): Wrap;
        _declareReferences(): java.util.Collection<string>;
        _diagnostics(): DiagList;
        _guts(): Wrap;
        id(): string;
        _importLine(state: JShell): string;
        _isExecutable(): boolean;
        _key(): Key;
        kind(): Snippet$Kind;
        _name(): string;
        _outerWrap(): OuterWrap;
        _sequenceNumber(): int;
        _setCompilationStatus(status: Snippet$Status, unresolved: java.util.List<string>, diagnostics: DiagList): void;
        _setDiagnostics(diagnostics: DiagList): void;
        _setDropped(): void;
        _setFailed(diagnostics: DiagList): void;
        _setId(id: string): void;
        _setOuterWrap(outer: OuterWrap): void;
        _setOverwritten(): void;
        _setSequenceNumber(seq: int): void;
        source(): string;
        _status(): Snippet$Status;
        subKind(): Snippet$SubKind;
        _syntheticDiags(): DiagList;
        toString(): string;
        _unresolved(): java.util.List<string>;
        _diagnostics: DiagList;
        _guts: Wrap;
        _id: string;
        _key: Key;
        _outer: OuterWrap;
        _seq: int;
        _source: string;
        _status: Snippet$Status;
        _subkind: Snippet$SubKind;
        _syntheticDiags: DiagList;
        _unitName: string;
        _unresolved: java.util.List<string>;
      }
      interface Snippet extends CombineTypes<[_Snippet, java.lang.Object]> {}
      interface _Snippet$Kind$$static extends ClassLike {
        valueOf(name: string): Snippet$Kind;
        values(): Snippet$Kind[];
        readonly ERRONEOUS: Snippet$Kind;
        readonly EXPRESSION: Snippet$Kind;
        readonly IMPORT: Snippet$Kind;
        readonly METHOD: Snippet$Kind;
        readonly STATEMENT: Snippet$Kind;
        readonly TYPE_DECL: Snippet$Kind;
        readonly VAR: Snippet$Kind;
      }
      let Snippet$Kind: _Snippet$Kind$$static;
      interface _Snippet$Kind {
        isPersistent(): boolean;
        _isPersistent: boolean;
      }
      interface Snippet$Kind extends CombineTypes<[_Snippet$Kind]> {}
      interface _Snippet$Status$$static extends ClassLike {
        valueOf(name: string): Snippet$Status;
        values(): Snippet$Status[];
        readonly DROPPED: Snippet$Status;
        readonly NONEXISTENT: Snippet$Status;
        readonly OVERWRITTEN: Snippet$Status;
        readonly RECOVERABLE_DEFINED: Snippet$Status;
        readonly RECOVERABLE_NOT_DEFINED: Snippet$Status;
        readonly REJECTED: Snippet$Status;
        readonly VALID: Snippet$Status;
      }
      let Snippet$Status: _Snippet$Status$$static;
      interface _Snippet$Status {
        isActive(): boolean;
        isDefined(): boolean;
        _isActive: boolean;
        _isDefined: boolean;
      }
      interface Snippet$Status extends CombineTypes<[_Snippet$Status]> {}
      interface _Snippet$SubKind$$static extends ClassLike {
        valueOf(name: string): Snippet$SubKind;
        values(): Snippet$SubKind[];
        readonly ANNOTATION_TYPE_SUBKIND: Snippet$SubKind;
        readonly ASSIGNMENT_SUBKIND: Snippet$SubKind;
        readonly CLASS_SUBKIND: Snippet$SubKind;
        readonly ENUM_SUBKIND: Snippet$SubKind;
        readonly INTERFACE_SUBKIND: Snippet$SubKind;
        readonly METHOD_SUBKIND: Snippet$SubKind;
        readonly OTHER_EXPRESSION_SUBKIND: Snippet$SubKind;
        readonly RECORD_SUBKIND: Snippet$SubKind;
        readonly SINGLE_STATIC_IMPORT_SUBKIND: Snippet$SubKind;
        readonly SINGLE_TYPE_IMPORT_SUBKIND: Snippet$SubKind;
        readonly STATEMENT_SUBKIND: Snippet$SubKind;
        readonly STATIC_IMPORT_ON_DEMAND_SUBKIND: Snippet$SubKind;
        readonly TEMP_VAR_EXPRESSION_SUBKIND: Snippet$SubKind;
        readonly TYPE_IMPORT_ON_DEMAND_SUBKIND: Snippet$SubKind;
        readonly UNKNOWN_SUBKIND: Snippet$SubKind;
        readonly VAR_DECLARATION_SUBKIND: Snippet$SubKind;
        readonly VAR_DECLARATION_WITH_INITIALIZER_SUBKIND: Snippet$SubKind;
        readonly VAR_VALUE_SUBKIND: Snippet$SubKind;
      }
      let Snippet$SubKind: _Snippet$SubKind$$static;
      interface _Snippet$SubKind {
        hasValue(): boolean;
        isExecutable(): boolean;
        kind(): Snippet$Kind;
        _hasValue: boolean;
        _isExecutable: boolean;
        _kind: Snippet$Kind;
      }
      interface Snippet$SubKind extends CombineTypes<[_Snippet$SubKind]> {}
      interface _SnippetEvent$$static extends ClassLike {
        _new(snippet: Snippet, previousStatus: Snippet$Status, status: Snippet$Status, isSignatureChange: boolean, causeSnippet: Snippet, value: string, exception: JShellException): SnippetEvent;
      }
      let SnippetEvent: _SnippetEvent$$static;
      interface _SnippetEvent {
        causeSnippet(): Snippet;
        exception(): JShellException;
        isSignatureChange(): boolean;
        previousStatus(): Snippet$Status;
        snippet(): Snippet;
        status(): Snippet$Status;
        toString(): string;
        value(): string;
        _causeSnippet: Snippet;
        _exception: JShellException;
        _isSignatureChange: boolean;
        _previousStatus: Snippet$Status;
        _snippet: Snippet;
        _status: Snippet$Status;
        _value: string;
      }
      interface SnippetEvent extends CombineTypes<[_SnippetEvent, java.lang.Object]> {}
      interface _SnippetMaps$$static extends ClassLike {
        _new(proc: JShell): SnippetMaps;
      }
      let SnippetMaps: _SnippetMaps$$static;
      interface _SnippetMaps {
        _addDependencies(refs: java.util.Collection<string>, snip: Snippet): void;
        _fullClassNameAndPackageToClass(full: string, pkg: string): string;
        _getDependents(snip: Snippet): java.util.List<Snippet>;
        _getSnippet(key: Key): Snippet;
        _getSnippet(ki: int): Snippet;
        _getSnippetDeadOrAlive(ki: int): Snippet;
        _importSnippets(): java.util.stream.Stream<ImportSnippet>;
        _installSnippet(sn: Snippet): void;
        _mapDependencies(snip: Snippet): void;
        _packageAndImportsExcept(except: java.util.Set<Key>, plus: java.util.Collection<Snippet>): string;
        _setSnippet(ki: int, snip: Snippet): void;
        _snippetList(): java.util.List<Snippet>;
        _dependencies: java.util.Map<string,java.util.Set<int>>;
        _keyIndexToSnippet: java.util.List<Snippet>;
        _snippets: java.util.Set<Snippet>;
        _state: JShell;
      }
      interface SnippetMaps extends CombineTypes<[_SnippetMaps, java.lang.Object]> {}
      interface _SourceCodeAnalysis$$static extends ClassLike {
        _new(): SourceCodeAnalysis;
      }
      let SourceCodeAnalysis: _SourceCodeAnalysis$$static;
      interface _SourceCodeAnalysis {
        analyzeCompletion(a0: string): SourceCodeAnalysis$CompletionInfo;
        analyzeType(a0: string, a1: int): string;
        completionSuggestions(a0: string, a1: int, a2: int[]): java.util.List<SourceCodeAnalysis$Suggestion>;
        dependents(a0: Snippet): java.util.Collection<Snippet>;
        documentation(a0: string, a1: int, a2: boolean): java.util.List<SourceCodeAnalysis$Documentation>;
        highlights(a0: string): java.util.List<SourceCodeAnalysis$Highlight>;
        listQualifiedNames(a0: string, a1: int): SourceCodeAnalysis$QualifiedNames;
        sourceToSnippets(a0: string): java.util.List<Snippet>;
        wrapper(a0: Snippet): SourceCodeAnalysis$SnippetWrapper;
        wrappers(a0: string): java.util.List<SourceCodeAnalysis$SnippetWrapper>;
      }
      interface SourceCodeAnalysis extends CombineTypes<[_SourceCodeAnalysis, java.lang.Object]> {}
      interface _SourceCodeAnalysis$Attribute$$static extends ClassLike {
        valueOf(name: string): SourceCodeAnalysis$Attribute;
        values(): SourceCodeAnalysis$Attribute[];
        readonly DECLARATION: SourceCodeAnalysis$Attribute;
        readonly DEPRECATED: SourceCodeAnalysis$Attribute;
        readonly KEYWORD: SourceCodeAnalysis$Attribute;
      }
      let SourceCodeAnalysis$Attribute: _SourceCodeAnalysis$Attribute$$static;
      interface _SourceCodeAnalysis$Attribute {
      }
      interface SourceCodeAnalysis$Attribute extends CombineTypes<[_SourceCodeAnalysis$Attribute]> {}
      interface _SourceCodeAnalysis$Completeness$$static extends ClassLike {
        valueOf(name: string): SourceCodeAnalysis$Completeness;
        values(): SourceCodeAnalysis$Completeness[];
        readonly COMPLETE: SourceCodeAnalysis$Completeness;
        readonly COMPLETE_WITH_SEMI: SourceCodeAnalysis$Completeness;
        readonly CONSIDERED_INCOMPLETE: SourceCodeAnalysis$Completeness;
        readonly DEFINITELY_INCOMPLETE: SourceCodeAnalysis$Completeness;
        readonly EMPTY: SourceCodeAnalysis$Completeness;
        readonly UNKNOWN: SourceCodeAnalysis$Completeness;
      }
      let SourceCodeAnalysis$Completeness: _SourceCodeAnalysis$Completeness$$static;
      interface _SourceCodeAnalysis$Completeness {
        isComplete(): boolean;
        _isComplete: boolean;
      }
      interface SourceCodeAnalysis$Completeness extends CombineTypes<[_SourceCodeAnalysis$Completeness]> {}
      interface _SourceCodeAnalysis$CompletionInfo$$static extends ClassLike {
      }
      let SourceCodeAnalysis$CompletionInfo: _SourceCodeAnalysis$CompletionInfo$$static;
      interface _SourceCodeAnalysis$CompletionInfo {
        completeness(): SourceCodeAnalysis$Completeness;
        remaining(): string;
        source(): string;
      }
      interface SourceCodeAnalysis$CompletionInfo extends CombineTypes<[_SourceCodeAnalysis$CompletionInfo, java.lang.Object]> {}
      interface _SourceCodeAnalysis$Documentation$$static extends ClassLike {
      }
      let SourceCodeAnalysis$Documentation: _SourceCodeAnalysis$Documentation$$static;
      interface _SourceCodeAnalysis$Documentation {
        javadoc(): string;
        signature(): string;
      }
      interface SourceCodeAnalysis$Documentation extends CombineTypes<[_SourceCodeAnalysis$Documentation, java.lang.Object]> {}
      interface _SourceCodeAnalysis$Highlight$$static extends ClassLike {
        new(start: int, end: int, attributes: java.util.Set<SourceCodeAnalysis$Attribute>): SourceCodeAnalysis$Highlight;
      }
      let SourceCodeAnalysis$Highlight: _SourceCodeAnalysis$Highlight$$static;
      interface _SourceCodeAnalysis$Highlight {
        attributes(): java.util.Set<SourceCodeAnalysis$Attribute>;
        end(): int;
        equals(o: any): boolean;
        hashCode(): int;
        start(): int;
        toString(): string;
      }
      interface SourceCodeAnalysis$Highlight extends CombineTypes<[_SourceCodeAnalysis$Highlight, java.lang.Record]> {}
      interface _SourceCodeAnalysis$QualifiedNames$$static extends ClassLike {
        _new(names: java.util.List<string>, simpleNameLength: int, upToDate: boolean, resolvable: boolean): SourceCodeAnalysis$QualifiedNames;
      }
      let SourceCodeAnalysis$QualifiedNames: _SourceCodeAnalysis$QualifiedNames$$static;
      interface _SourceCodeAnalysis$QualifiedNames {
        getNames(): java.util.List<string>;
        getSimpleNameLength(): int;
        isResolvable(): boolean;
        isUpToDate(): boolean;
        _names: java.util.List<string>;
        _resolvable: boolean;
        _simpleNameLength: int;
        _upToDate: boolean;
      }
      interface SourceCodeAnalysis$QualifiedNames extends CombineTypes<[_SourceCodeAnalysis$QualifiedNames, java.lang.Object]> {}
      interface _SourceCodeAnalysis$SnippetWrapper$$static extends ClassLike {
      }
      let SourceCodeAnalysis$SnippetWrapper: _SourceCodeAnalysis$SnippetWrapper$$static;
      interface _SourceCodeAnalysis$SnippetWrapper {
        fullClassName(): string;
        kind(): Snippet$Kind;
        source(): string;
        sourceToWrappedPosition(a0: int): int;
        wrapped(): string;
        wrappedToSourcePosition(a0: int): int;
      }
      interface SourceCodeAnalysis$SnippetWrapper extends CombineTypes<[_SourceCodeAnalysis$SnippetWrapper, java.lang.Object]> {}
      interface _SourceCodeAnalysis$Suggestion$$static extends ClassLike {
      }
      let SourceCodeAnalysis$Suggestion: _SourceCodeAnalysis$Suggestion$$static;
      interface _SourceCodeAnalysis$Suggestion {
        continuation(): string;
        matchesType(): boolean;
      }
      interface SourceCodeAnalysis$Suggestion extends CombineTypes<[_SourceCodeAnalysis$Suggestion, java.lang.Object]> {}
      interface _SourceCodeAnalysisImpl$$static extends ClassLike {
        _addClassName2Map(classSimpleName2FQN: java.util.Map<string,java.util.Collection<string>>, typeName: string): void;
        _isJRTMarkerFile(path: java.nio.file.Path): boolean;
        _CLASS_KINDS: java.util.Set<com.sun.source.tree.Tree$Kind>;
        _INDEXER: java.util.concurrent.ExecutorService;
        _PATH_TO_INDEX: java.util.Map<java.nio.file.Path,SourceCodeAnalysisImpl$ClassIndex>;
        _availableSourcesOverride: java.util.List<java.nio.file.Path>;
        _new(proc: JShell): SourceCodeAnalysisImpl;
      }
      let SourceCodeAnalysisImpl: _SourceCodeAnalysisImpl$$static;
      interface _SourceCodeAnalysisImpl {
        _addElements(elements: java.lang.Iterable<javax.lang.model.element.Element>, accept: java.util.function.Predicate<javax.lang.model.element.Element>, smart: java.util.function.Predicate<javax.lang.model.element.Element>, result: java.util.List<SourceCodeAnalysis$Suggestion>): void;
        _addElements(elements: java.lang.Iterable<javax.lang.model.element.Element>, accept: java.util.function.Predicate<javax.lang.model.element.Element>, smart: java.util.function.Predicate<javax.lang.model.element.Element>, paren: java.util.function.Function<boolean,string>, result: java.util.List<SourceCodeAnalysis$Suggestion>): void;
        _addScopeElements(at: TaskFactory$AnalyzeTask, scope: com.sun.source.tree.Scope, elementConvertor: java.util.function.Function<javax.lang.model.element.Element,java.lang.Iterable<javax.lang.model.element.Element>>, filter: java.util.function.Predicate<javax.lang.model.element.Element>, smartFilter: java.util.function.Predicate<javax.lang.model.element.Element>, result: java.util.List<SourceCodeAnalysis$Suggestion>): void;
        analyzeCompletion(srcInput: string): SourceCodeAnalysis$CompletionInfo;
        analyzeType(code: string, cursor: int): string;
        _appendDot(fqn: string): string;
        _appendPaths(fm: MemoryFileManager, loc: javax.tools.JavaFileManager$Location, paths: java.util.Collection<java.nio.file.Path>): void;
        _classpathChanged(): void;
        close(): void;
        completionSuggestions(code: string, cursor: int, anchor: int[]): java.util.List<SourceCodeAnalysis$Suggestion>;
        _completionSuggestionsImpl(code: string, cursor: int, anchor: int[]): java.util.List<SourceCodeAnalysis$Suggestion>;
        _computeActualInvocationTypes(at: TaskFactory$AnalyzeTask, arguments: java.util.List<com.sun.source.tree.ExpressionTree>, currentArgument: com.sun.source.util.TreePath): java.util.List<javax.lang.model.type.TypeMirror>;
        _computeSmartTypesForExecutableType(at: TaskFactory$AnalyzeTask, candidateMethods: java.lang.Iterable<com.sun.tools.javac.util.Pair<javax.lang.model.element.ExecutableElement,javax.lang.model.type.ExecutableType>>, precedingActualTypes: java.util.List<javax.lang.model.type.TypeMirror>): java.util.List<javax.lang.model.type.TypeMirror>;
        _computeSuggestions(code: OuterWrap, cursor: int, anchor: int[]): java.util.List<SourceCodeAnalysis$Suggestion>;
        _constructDocumentation(at: TaskFactory$AnalyzeTask, helper: jdk.internal.shellsupport.doc.JavadocHelper, el: javax.lang.model.element.Element, computeJavadoc: boolean): SourceCodeAnalysis$Documentation;
        _createAccessibilityFilter(at: TaskFactory$AnalyzeTask, tp: com.sun.source.util.TreePath): java.util.function.Predicate<javax.lang.model.element.Element>;
        _createArrayLengthSymbol(at: TaskFactory$AnalyzeTask, site: javax.lang.model.type.TypeMirror): javax.lang.model.element.Element;
        _createDotClassSymbol(at: TaskFactory$AnalyzeTask, site: javax.lang.model.type.TypeMirror): javax.lang.model.element.Element;
        _createPackageElement(at: TaskFactory$AnalyzeTask, packageName: string): javax.lang.model.element.PackageElement;
        dependents(snippet: Snippet): java.util.Collection<Snippet>;
        _doIndex(timestamp: long, a1: java.nio.file.Path, originalPath: java.lang.Iterable<java.nio.file.Path>): SourceCodeAnalysisImpl$ClassIndex;
        documentation(code: string, cursor: int, computeJavadoc: boolean): java.util.List<SourceCodeAnalysis$Documentation>;
        _documentationImpl(code: string, cursor: int, computeJavadoc: boolean): java.util.List<SourceCodeAnalysis$Documentation>;
        _elementHeader(at: TaskFactory$AnalyzeTask, el: javax.lang.model.element.Element, includeParameterNames: boolean, useFQN: boolean): string;
        _filterExecutableTypesByArguments(at: TaskFactory$AnalyzeTask, candidateMethods: java.lang.Iterable<com.sun.tools.javac.util.Pair<javax.lang.model.element.ExecutableElement,javax.lang.model.type.ExecutableType>>, precedingActualTypes: java.util.List<javax.lang.model.type.TypeMirror>): java.util.List<com.sun.tools.javac.util.Pair<javax.lang.model.element.ExecutableElement,javax.lang.model.type.ExecutableType>>;
        _findImport(tp: com.sun.source.util.TreePath): com.sun.source.tree.ImportTree;
        _findSources(): java.util.List<java.nio.file.Path>;
        _findTargetType(at: TaskFactory$AnalyzeTask, forPath: com.sun.source.util.TreePath): java.lang.Iterable<javax.lang.model.type.TypeMirror>;
        _getEnclosedElements(packageEl: javax.lang.model.element.PackageElement): java.util.List<javax.lang.model.element.Element>;
        _getOriginalEnclosingElement(el: javax.lang.model.element.Element): javax.lang.model.element.Element;
        _guessKind(code: string): com.sun.source.tree.Tree$Kind;
        _hasSyntheticParameterNames(el: javax.lang.model.element.Element): boolean;
        highlights(snippet: string): java.util.List<SourceCodeAnalysis$Highlight>;
        _indexForPath(path: java.nio.file.Path): SourceCodeAnalysisImpl$ClassIndex;
        _isAccessible(at: TaskFactory$AnalyzeTask, scope: com.sun.source.tree.Scope, fqn: string): boolean;
        _isClass(tp: com.sun.source.util.TreePath): boolean;
        _isEmptyArgumentsContext(arguments: java.util.List<com.sun.source.tree.ExpressionTree>): boolean;
        _isNewClass(tp: com.sun.source.util.TreePath): boolean;
        _isStaticContext(at: TaskFactory$AnalyzeTask, path: com.sun.source.util.TreePath): boolean;
        _isThrowsClause(tp: com.sun.source.util.TreePath): boolean;
        _isTypeParameter(tp: com.sun.source.util.TreePath): boolean;
        _isVariable(tp: com.sun.source.util.TreePath): boolean;
        _listPackages(at: TaskFactory$AnalyzeTask, enclosingPackage: string): java.util.Set<javax.lang.model.element.PackageElement>;
        listQualifiedNames(code: string, cursor: int): SourceCodeAnalysis$QualifiedNames;
        _localElements(scope: com.sun.source.tree.Scope): java.util.stream.Stream<javax.lang.model.element.Element>;
        _membersOf(at: TaskFactory$AnalyzeTask, site: javax.lang.model.type.TypeMirror, shouldGenerateDotClassItem: boolean): java.util.List<javax.lang.model.element.Element>;
        _membersOf(at: TaskFactory$AnalyzeTask, elements: java.util.List<javax.lang.model.element.Element>): java.util.List<javax.lang.model.element.Element>;
        _methodCandidates(at: TaskFactory$AnalyzeTask, invocation: com.sun.source.util.TreePath): java.lang.Iterable<com.sun.tools.javac.util.Pair<javax.lang.model.element.ExecutableElement,javax.lang.model.type.ExecutableType>>;
        _newClassCandidates(at: TaskFactory$AnalyzeTask, newClassPath: com.sun.source.util.TreePath): java.lang.Iterable<com.sun.tools.javac.util.Pair<javax.lang.model.element.ExecutableElement,javax.lang.model.type.ExecutableType>>;
        _parameterType(method: javax.lang.model.element.ExecutableElement, methodType: javax.lang.model.type.ExecutableType, paramIndex: int, allowVarArgsArray: boolean): java.util.stream.Stream<javax.lang.model.type.TypeMirror>;
        _pathFor(topLevel: com.sun.source.tree.CompilationUnitTree, sp: com.sun.source.util.SourcePositions, wrap: GeneralWrap, snippetEndPos: int): com.sun.source.util.TreePath;
        _primitivesOrVoid(at: TaskFactory$AnalyzeTask): java.util.List<javax.lang.model.element.Element>;
        _refreshIndexes(version: int): void;
        _resultTypeOf(el: javax.lang.model.element.Element): javax.lang.model.type.TypeMirror;
        resumeIndexing(): void;
        _scopeContent(at: TaskFactory$AnalyzeTask, scope: com.sun.source.tree.Scope, elementConvertor: java.util.function.Function<javax.lang.model.element.Element,java.lang.Iterable<javax.lang.model.element.Element>>): java.lang.Iterable<javax.lang.model.element.Element>;
        _simpleName(el: javax.lang.model.element.Element): string;
        _smartFilterFromList(at: TaskFactory$AnalyzeTask, base: com.sun.source.util.TreePath, types: java.util.Collection<com.sun.source.tree.Tree>, current: com.sun.source.tree.Tree): java.util.function.Predicate<javax.lang.model.element.Element>;
        sourceToSnippets(input: string): java.util.List<Snippet>;
        suspendIndexing(): void;
        _typeParametersOpt(at: TaskFactory$AnalyzeTask, typeParameters: java.util.List<javax.lang.model.element.TypeParameterElement>, includeParameterNames: boolean): string;
        _unwrapArrayType(arrayType: javax.lang.model.type.TypeMirror): javax.lang.model.type.TypeMirror;
        waitBackgroundTaskFinished(): void;
        _waitIndexingNotSuspended(): void;
        wrapper(snippet: Snippet): SourceCodeAnalysis$SnippetWrapper;
        wrappers(input: string): java.util.List<SourceCodeAnalysis$SnippetWrapper>;
        _DEFAULT_PAREN: java.util.function.Function<boolean,string>;
        _FALSE: java.util.function.Predicate<javax.lang.model.element.Element>;
        _IDENTITY: java.util.function.Function<javax.lang.model.element.Element,java.lang.Iterable<javax.lang.model.element.Element>>;
        _INSTANCE_ONLY: java.util.function.Predicate<javax.lang.model.element.Element>;
        _IS_CLASS: java.util.function.Predicate<javax.lang.model.element.Element>;
        _IS_CONSTRUCTOR: java.util.function.Predicate<javax.lang.model.element.Element>;
        _IS_INTERFACE: java.util.function.Predicate<javax.lang.model.element.Element>;
        _IS_METHOD: java.util.function.Predicate<javax.lang.model.element.Element>;
        _IS_PACKAGE: java.util.function.Predicate<javax.lang.model.element.Element>;
        _IS_STATIC: java.util.function.Predicate<javax.lang.model.element.Element>;
        _IS_TYPE: java.util.function.Predicate<javax.lang.model.element.Element>;
        _IS_VOID: java.util.function.Predicate<javax.lang.model.element.Element>;
        _JAVA_IDENTIFIER: java.util.regex.Pattern;
        _NO_PAREN: java.util.function.Function<boolean,string>;
        _STATIC_ONLY: java.util.function.Predicate<javax.lang.model.element.Element>;
        _TRUE: java.util.function.Predicate<javax.lang.model.element.Element>;
        _availableSources: java.util.List<java.nio.file.Path>;
        _ca: CompletenessAnalyzer;
        _classpathVersion: int;
        _closeables: java.util.List<java.lang.AutoCloseable>;
        _currentIndexes: java.util.Map<java.nio.file.Path,SourceCodeAnalysisImpl$ClassIndex>;
        _indexVersion: int;
        _keepParameterNames: string[];
        _proc: JShell;
        _suspend: int;
        _suspendLock: any;
      }
      interface SourceCodeAnalysisImpl extends CombineTypes<[_SourceCodeAnalysisImpl, jdk.jshell.SourceCodeAnalysis]> {}
      interface _SourceCodeAnalysisImpl$ClassIndex$$static extends ClassLike {
        new(timestamp: long, a1: java.nio.file.Path, forPath: java.util.Set<string>, packages: java.util.Map<string,java.util.Collection<string>>): SourceCodeAnalysisImpl$ClassIndex;
      }
      let SourceCodeAnalysisImpl$ClassIndex: _SourceCodeAnalysisImpl$ClassIndex$$static;
      interface _SourceCodeAnalysisImpl$ClassIndex {
        readonly classSimpleName2FQN: java.util.Map<string,java.util.Collection<string>>;
        readonly forPath: java.nio.file.Path;
        readonly packages: java.util.Set<string>;
        readonly timestamp: long;
      }
      interface SourceCodeAnalysisImpl$ClassIndex extends CombineTypes<[_SourceCodeAnalysisImpl$ClassIndex, java.lang.Object]> {}
      interface _SourceCodeAnalysisImpl$CompletionInfoImpl$$static extends ClassLike {
        _new(completeness: SourceCodeAnalysis$Completeness, source: string, remaining: string): SourceCodeAnalysisImpl$CompletionInfoImpl;
      }
      let SourceCodeAnalysisImpl$CompletionInfoImpl: _SourceCodeAnalysisImpl$CompletionInfoImpl$$static;
      interface _SourceCodeAnalysisImpl$CompletionInfoImpl {
        completeness(): SourceCodeAnalysis$Completeness;
        remaining(): string;
        source(): string;
        _completeness: SourceCodeAnalysis$Completeness;
        _remaining: string;
        _source: string;
      }
      interface SourceCodeAnalysisImpl$CompletionInfoImpl extends CombineTypes<[_SourceCodeAnalysisImpl$CompletionInfoImpl, jdk.jshell.SourceCodeAnalysis$CompletionInfo, java.lang.Object]> {}
      interface _SourceCodeAnalysisImpl$DocumentationImpl$$static extends ClassLike {
        new(signature: string, javadoc: string): SourceCodeAnalysisImpl$DocumentationImpl;
      }
      let SourceCodeAnalysisImpl$DocumentationImpl: _SourceCodeAnalysisImpl$DocumentationImpl$$static;
      interface _SourceCodeAnalysisImpl$DocumentationImpl {
        javadoc(): string;
        signature(): string;
        _javadoc: string;
        _signature: string;
      }
      interface SourceCodeAnalysisImpl$DocumentationImpl extends CombineTypes<[_SourceCodeAnalysisImpl$DocumentationImpl, java.lang.Object, jdk.jshell.SourceCodeAnalysis$Documentation]> {}
      interface _SourceCodeAnalysisImpl$SuggestionImpl$$static extends ClassLike {
        new(continuation: string, matchesType: boolean): SourceCodeAnalysisImpl$SuggestionImpl;
      }
      let SourceCodeAnalysisImpl$SuggestionImpl: _SourceCodeAnalysisImpl$SuggestionImpl$$static;
      interface _SourceCodeAnalysisImpl$SuggestionImpl {
        continuation(): string;
        matchesType(): boolean;
        _continuation: string;
        _matchesType: boolean;
      }
      interface SourceCodeAnalysisImpl$SuggestionImpl extends CombineTypes<[_SourceCodeAnalysisImpl$SuggestionImpl, jdk.jshell.SourceCodeAnalysis$Suggestion, java.lang.Object]> {}
      interface _StatementSnippet$$static extends ClassLike {
        _new(key: Key$StatementKey, userSource: string, guts: Wrap): StatementSnippet;
      }
      let StatementSnippet: _StatementSnippet$$static;
      interface _StatementSnippet {
      }
      interface StatementSnippet extends CombineTypes<[_StatementSnippet, jdk.jshell.Snippet]> {}
      interface _TaskFactory$$static extends ClassLike {
        _INITIAL_SUPPORTED_VER: java.lang.Runtime$Version;
        _new(state: JShell): TaskFactory;
      }
      let TaskFactory: _TaskFactory$$static;
      interface _TaskFactory {
        _addToClasspath(path: string): void;
        analyze<Z>(wrap: OuterWrap, worker: TaskFactory$Worker<TaskFactory$AnalyzeTask,Z>): Z;
        analyze<Z>(wrap: OuterWrap, extraArgs: java.util.List<string>, worker: TaskFactory$Worker<TaskFactory$AnalyzeTask,Z>): Z;
        analyze<Z>(wraps: java.util.Collection<OuterWrap>, worker: TaskFactory$Worker<TaskFactory$AnalyzeTask,Z>): Z;
        analyze<Z>(wraps: java.util.Collection<OuterWrap>, extraArgs: java.util.List<string>, worker: TaskFactory$Worker<TaskFactory$AnalyzeTask,Z>): Z;
        compile<Z>(wraps: java.util.Collection<OuterWrap>, worker: TaskFactory$Worker<TaskFactory$CompileTask,Z>): Z;
        _fileManager(): MemoryFileManager;
        _initTaskPool(): void;
        parse<Z>(source: string, forceExpression: boolean, worker: TaskFactory$Worker<TaskFactory$ParseTask,Z>): Z;
        _parse<Z>(source: string, worker: TaskFactory$Worker<TaskFactory$ParseTask,Z>): Z;
        _runTask<S, T, Z>(inputs: java.util.stream.Stream<S>, sh: TaskFactory$SourceHandler<S>, options: java.util.List<string>, creator: java.util.function.BiFunction<com.sun.tools.javac.api.JavacTaskImpl,javax.tools.DiagnosticCollector<javax.tools.JavaFileObject>,T>, worker: TaskFactory$Worker<T,Z>): Z;
        _classpath: string;
        _compiler: javax.tools.JavaCompiler;
        _fileManager: MemoryFileManager;
        _javacTaskPool: com.sun.tools.javac.api.JavacTaskPool;
        _state: JShell;
      }
      interface TaskFactory extends CombineTypes<[_TaskFactory, java.lang.Object]> {}
      interface _TaskFactory$AnalyzeTask$$static extends ClassLike {
      }
      let TaskFactory$AnalyzeTask: _TaskFactory$AnalyzeTask$$static;
      interface _TaskFactory$AnalyzeTask {
        _analyze(): java.lang.Iterable<com.sun.source.tree.CompilationUnitTree>;
        _cuTrees(): java.lang.Iterable<com.sun.source.tree.CompilationUnitTree>;
        _getElements(): javax.lang.model.util.Elements;
        _getTypes(): javax.lang.model.util.Types;
        _cuts: java.lang.Iterable<com.sun.source.tree.CompilationUnitTree>;
      }
      interface TaskFactory$AnalyzeTask extends CombineTypes<[_TaskFactory$AnalyzeTask, TaskFactory$BaseTask<OuterWrap>]> {}
      interface _TaskFactory$BaseTask$$static<S> extends ClassLike {
      }
      let TaskFactory$BaseTask: _TaskFactory$BaseTask$$static<S>;
      interface _TaskFactory$BaseTask<S> {
        _cuTrees(): java.lang.Iterable<com.sun.source.tree.CompilationUnitTree>;
(): java.lang.Iterable<com.sun.source.tree.CompilationUnitTree>;
        _debugPrintDiagnostics(src: string): void;
        _diag(diag: javax.tools.Diagnostic<javax.tools.JavaFileObject>): Diag;
        _firstCuTree(): com.sun.source.tree.CompilationUnitTree;
        _getContext(): com.sun.tools.javac.util.Context;
        _getDiagnostics(): DiagList;
        _hasErrors(): boolean;
        _messages(): com.sun.tools.javac.util.JavacMessages;
        _shortErrorMessage(): string;
        _sourceForFile(sourceFile: javax.tools.JavaFileObject): S;
        _trees(): com.sun.source.util.Trees;
        _types(): com.sun.tools.javac.code.Types;
        _context: com.sun.tools.javac.util.Context;
        _diagnostics: javax.tools.DiagnosticCollector<javax.tools.JavaFileObject>;
        _diags: DiagList;
        _messages: com.sun.tools.javac.util.JavacMessages;
        _sourceHandler: TaskFactory$SourceHandler<S>;
        _task: com.sun.tools.javac.api.JavacTaskImpl;
        _this$0: TaskFactory;
        _trees: com.sun.source.util.Trees;
        _types: com.sun.tools.javac.code.Types;
      }
      interface TaskFactory$BaseTask<S> extends CombineTypes<[_TaskFactory$BaseTask<S>, java.lang.Object]> {}
      interface _TaskFactory$CompileTask$$static extends ClassLike {
        _new(this$0: TaskFactory$SourceHandler<OuterWrap>, sh: com.sun.tools.javac.api.JavacTaskImpl, jti: javax.tools.DiagnosticCollector<javax.tools.JavaFileObject>): TaskFactory$CompileTask;
      }
      let TaskFactory$CompileTask: _TaskFactory$CompileTask$$static;
      interface _TaskFactory$CompileTask {
        _classList(w: OuterWrap): java.util.List<string>;
        _compile(): boolean;
        _cuTrees(): java.lang.Iterable<com.sun.source.tree.CompilationUnitTree>;
        _listenForNewClassFile(jfo: MemoryFileManager$OutputMemoryJavaFileObject, location: javax.tools.JavaFileManager$Location, className: string, kind: javax.tools.JavaFileObject$Kind, sibling: javax.tools.FileObject): void;
        _classObjs: java.util.Map<OuterWrap,java.util.List<MemoryFileManager$OutputMemoryJavaFileObject>>;
        _this$0: TaskFactory;
      }
      interface TaskFactory$CompileTask extends CombineTypes<[_TaskFactory$CompileTask, TaskFactory$BaseTask<OuterWrap>]> {}
      interface _TaskFactory$DisableAccessibilityResolve$$static extends ClassLike {
        preRegister(context: com.sun.tools.javac.util.Context): void;
        new(context: com.sun.tools.javac.util.Context): TaskFactory$DisableAccessibilityResolve;
      }
      let TaskFactory$DisableAccessibilityResolve: _TaskFactory$DisableAccessibilityResolve$$static;
      interface _TaskFactory$DisableAccessibilityResolve {
        isAccessible(env: com.sun.tools.javac.comp.Env<com.sun.tools.javac.comp.AttrContext>, c: com.sun.tools.javac.code.Symbol$TypeSymbol, checkInner: boolean): boolean;
        isAccessible(env: com.sun.tools.javac.comp.Env<com.sun.tools.javac.comp.AttrContext>, site: com.sun.tools.javac.code.Type, sym: com.sun.tools.javac.code.Symbol, checkInner: boolean): boolean;
        runWithoutAccessChecks(r: java.lang.Runnable): void;
        _noAccessChecks: boolean;
      }
      interface TaskFactory$DisableAccessibilityResolve extends CombineTypes<[_TaskFactory$DisableAccessibilityResolve, com.sun.tools.javac.comp.Resolve]> {}
      interface _TaskFactory$DisableAccessibilityResolve$Marker$$static extends ClassLike {
      }
      let TaskFactory$DisableAccessibilityResolve$Marker: _TaskFactory$DisableAccessibilityResolve$Marker$$static;
      interface _TaskFactory$DisableAccessibilityResolve$Marker {
      }
      interface TaskFactory$DisableAccessibilityResolve$Marker extends CombineTypes<[_TaskFactory$DisableAccessibilityResolve$Marker, java.lang.Object]> {}
      interface _TaskFactory$ParseTask$$static extends ClassLike {
      }
      let TaskFactory$ParseTask: _TaskFactory$ParseTask$$static;
      interface _TaskFactory$ParseTask {
        _cuTrees(): java.lang.Iterable<com.sun.source.tree.CompilationUnitTree>;
        _parse(): java.lang.Iterable<com.sun.source.tree.CompilationUnitTree>;
        _units(): java.util.List<com.sun.source.tree.Tree>;
        _cuts: java.lang.Iterable<com.sun.source.tree.CompilationUnitTree>;
        _units: java.util.List<com.sun.source.tree.Tree>;
      }
      interface TaskFactory$ParseTask extends CombineTypes<[_TaskFactory$ParseTask, TaskFactory$BaseTask<string>]> {}
      interface _TaskFactory$SourceHandler$$static<T> extends ClassLike {
      }
      let TaskFactory$SourceHandler: _TaskFactory$SourceHandler$$static<T>;
      interface _TaskFactory$SourceHandler<T> {
        diag(a0: javax.tools.Diagnostic<javax.tools.JavaFileObject>): Diag;
        sourceForFileObject(a0: javax.tools.JavaFileObject): T;
        sourceToFileObject(a0: MemoryFileManager, a1: T): javax.tools.JavaFileObject;
      }
      interface TaskFactory$SourceHandler<T> extends CombineTypes<[_TaskFactory$SourceHandler<T>, java.lang.Object]> {}
      interface _TaskFactory$StringSourceHandler$$static extends ClassLike {
      }
      let TaskFactory$StringSourceHandler: _TaskFactory$StringSourceHandler$$static;
      interface _TaskFactory$StringSourceHandler {
        diag(d: javax.tools.Diagnostic<javax.tools.JavaFileObject>): Diag;
        sourceForFileObject(file: javax.tools.JavaFileObject): string;
        sourceForFileObject(a0: javax.tools.JavaFileObject): any;
        sourceToFileObject(fm: MemoryFileManager, src: string): javax.tools.JavaFileObject;
        sourceToFileObject(a0: MemoryFileManager, a1: any): javax.tools.JavaFileObject;
        _file2Snippet: java.util.Map<java.net.URI,string>;
      }
      interface TaskFactory$StringSourceHandler extends CombineTypes<[_TaskFactory$StringSourceHandler, TaskFactory$SourceHandler<string>, java.lang.Object]> {}
      interface _TaskFactory$TaskListenerImpl$$static extends ClassLike {
        new(context: com.sun.tools.javac.util.Context, state: JShell): TaskFactory$TaskListenerImpl;
      }
      let TaskFactory$TaskListenerImpl: _TaskFactory$TaskListenerImpl$$static;
      interface _TaskFactory$TaskListenerImpl {
        finished(e: com.sun.source.util.TaskEvent): void;
        _setVariableType(s: VarSnippet): void;
        started(e: com.sun.source.util.TaskEvent): void;
        _context: com.sun.tools.javac.util.Context;
        _state: JShell;
        _var2OriginalType: java.util.Map<com.sun.tools.javac.code.Symbol$VarSymbol,com.sun.tools.javac.code.Type>;
        _variablesSet: boolean;
      }
      interface TaskFactory$TaskListenerImpl extends CombineTypes<[_TaskFactory$TaskListenerImpl, com.sun.source.util.TaskListener, java.lang.Object]> {}
      interface _TaskFactory$Worker$$static<T,Z> extends ClassLike {
      }
      let TaskFactory$Worker: _TaskFactory$Worker$$static<T,Z>;
      interface _TaskFactory$Worker<T,Z> {
        withTask(a0: T): Z;
(a0: T): Z;
      }
      interface TaskFactory$Worker<T,Z> extends CombineTypes<[_TaskFactory$Worker<T,Z>, java.lang.Object]> {}
      interface _TaskFactory$WrapSourceHandler$$static extends ClassLike {
      }
      let TaskFactory$WrapSourceHandler: _TaskFactory$WrapSourceHandler$$static;
      interface _TaskFactory$WrapSourceHandler {
        diag(d: javax.tools.Diagnostic<javax.tools.JavaFileObject>): Diag;
        sourceForFileObject(file: javax.tools.JavaFileObject): OuterWrap;
        sourceForFileObject(a0: javax.tools.JavaFileObject): any;
        sourceToFileObject(fm: MemoryFileManager, w: OuterWrap): javax.tools.JavaFileObject;
        sourceToFileObject(a0: MemoryFileManager, a1: any): javax.tools.JavaFileObject;
        _file2Snippet: java.util.Map<java.net.URI,OuterWrap>;
        _this$0: TaskFactory;
      }
      interface TaskFactory$WrapSourceHandler extends CombineTypes<[_TaskFactory$WrapSourceHandler, TaskFactory$SourceHandler<OuterWrap>, java.lang.Object]> {}
      interface _TreeDependencyScanner$$static extends ClassLike {
        _new(): TreeDependencyScanner;
      }
      let TreeDependencyScanner: _TreeDependencyScanner$$static;
      interface _TreeDependencyScanner {
        _add(p: java.util.Set<string>, name: javax.lang.model.element.Name): void;
        bodyReferences(): java.util.Collection<string>;
        declareReferences(): java.util.Collection<string>;
        scan(node: com.sun.source.tree.Tree): void;
        visitClass(node: com.sun.source.tree.ClassTree, p: java.util.Set<string>): java.lang.Void;
        visitClass(a0: com.sun.source.tree.ClassTree, a1: any): any;
        visitIdentifier(node: com.sun.source.tree.IdentifierTree, p: java.util.Set<string>): java.lang.Void;
        visitIdentifier(a0: com.sun.source.tree.IdentifierTree, a1: any): any;
        visitImport(node: com.sun.source.tree.ImportTree, p: java.util.Set<string>): java.lang.Void;
        visitImport(a0: com.sun.source.tree.ImportTree, a1: any): any;
        visitMemberSelect(node: com.sun.source.tree.MemberSelectTree, p: java.util.Set<string>): java.lang.Void;
        visitMemberSelect(a0: com.sun.source.tree.MemberSelectTree, a1: any): any;
        visitMethod(node: com.sun.source.tree.MethodTree, p: java.util.Set<string>): java.lang.Void;
        visitMethod(a0: com.sun.source.tree.MethodTree, a1: any): any;
        visitPackage(node: com.sun.source.tree.PackageTree, p: java.util.Set<string>): java.lang.Void;
        visitPackage(a0: com.sun.source.tree.PackageTree, a1: any): any;
        visitVariable(node: com.sun.source.tree.VariableTree, p: java.util.Set<string>): java.lang.Void;
        visitVariable(a0: com.sun.source.tree.VariableTree, a1: any): any;
        _body: java.util.Set<string>;
        _decl: java.util.Set<string>;
      }
      interface TreeDependencyScanner extends CombineTypes<[_TreeDependencyScanner, com.sun.source.util.TreeScanner<java.lang.Void,java.util.Set<string>>]> {}
      interface _TreeDissector$$static extends ClassLike {
        _classes(cut: com.sun.source.tree.CompilationUnitTree): java.util.stream.Stream<Util$Pair<com.sun.source.tree.CompilationUnitTree,com.sun.source.tree.ClassTree>>;
        _classes(cuts: java.lang.Iterable<com.sun.source.tree.CompilationUnitTree>): java.util.stream.Stream<Util$Pair<com.sun.source.tree.CompilationUnitTree,com.sun.source.tree.ClassTree>>;
        _createByFirstClass(bt: TaskFactory$BaseTask<any>): TreeDissector;
        _createBySnippet(bt: TaskFactory$BaseTask<any>, si: Snippet): TreeDissector;
        printType(at: TaskFactory$AnalyzeTask, state: JShell, type: javax.lang.model.type.TypeMirror): string;
        _signature(types: com.sun.tools.javac.code.Types, mt: com.sun.tools.javac.code.Type$MethodType): string;
        _isClassOrInterface: java.util.function.Predicate<com.sun.source.tree.Tree>;
      }
      let TreeDissector: _TreeDissector$$static;
      interface _TreeDissector {
        _firstStatement(): com.sun.source.tree.StatementTree;
        _firstVariable(): com.sun.source.tree.VariableTree;
        _getEndPosition(tree: com.sun.source.tree.Tree): int;
        _getSourcePositions(): com.sun.source.util.SourcePositions;
        _getStartPosition(tree: com.sun.source.tree.Tree): int;
        _method(msn: MethodSnippet): com.sun.source.tree.MethodTree;
        _treeListToRange(treeList: java.util.List<com.sun.source.tree.Tree>): Wrap$Range;
        _treeToRange(tree: com.sun.source.tree.Tree): Wrap$Range;
        _trees(): com.sun.source.util.Trees;
        _typeOfMethod(msn: MethodSnippet): string;
        _types(): com.sun.tools.javac.code.Types;
        _bt: TaskFactory$BaseTask<any>;
        _targetClass: com.sun.source.tree.ClassTree;
        _targetCompilationUnit: com.sun.source.tree.CompilationUnitTree;
        _theSourcePositions: com.sun.source.util.SourcePositions;
      }
      interface TreeDissector extends CombineTypes<[_TreeDissector, java.lang.Object]> {}
      interface _TreeDissector$TDSignatureGenerator$$static extends ClassLike {
        _new(types: com.sun.tools.javac.code.Types): TreeDissector$TDSignatureGenerator;
      }
      let TreeDissector$TDSignatureGenerator: _TreeDissector$TDSignatureGenerator$$static;
      interface _TreeDissector$TDSignatureGenerator {
        _append(ch: char): void;
        _append(ba: byte[]): void;
        _append(name: com.sun.tools.javac.util.Name): void;
        toString(): string;
        _sb: jshell$stringBuilder;
      }
      interface TreeDissector$TDSignatureGenerator extends CombineTypes<[_TreeDissector$TDSignatureGenerator, com.sun.tools.javac.code.Types$SignatureGenerator]> {}
      interface _TypeDeclSnippet$$static extends ClassLike {
        _new(key: Key$TypeDeclKey, userSource: string, guts: Wrap, unitName: string, subkind: Snippet$SubKind, corralled: Wrap, declareReferences: java.util.Collection<string>, bodyReferences: java.util.Collection<string>, syntheticDiags: DiagList): TypeDeclSnippet;
      }
      let TypeDeclSnippet: _TypeDeclSnippet$$static;
      interface _TypeDeclSnippet {
        _key(): Key$TypeDeclKey;
        _key(): Key;
      }
      interface TypeDeclSnippet extends CombineTypes<[_TypeDeclSnippet, jdk.jshell.DeclarationSnippet]> {}
      interface _TypePrinter$$static extends ClassLike {
        _OBJECT: string;
        _new(messages: com.sun.tools.javac.util.JavacMessages, types: com.sun.tools.javac.code.Types, fullClassNameAndPackageToClass: java.util.function.BinaryOperator<string>, printIntersectionTypes: boolean, anonymousTypesKind: TypePrinter$AnonymousTypeKind): TypePrinter;
        _new(messages: com.sun.tools.javac.util.JavacMessages, types: com.sun.tools.javac.code.Types, fullClassNameAndPackageToClass: java.util.function.BinaryOperator<string>, anonymousToName: java.util.function.Function<com.sun.tools.javac.code.Symbol$TypeSymbol,string>, printIntersectionTypes: boolean, anonymousTypesKind: TypePrinter$AnonymousTypeKind): TypePrinter;
      }
      let TypePrinter: _TypePrinter$$static;
      interface _TypePrinter {
        _capturedVarId(t: com.sun.tools.javac.code.Type$CapturedType, locale: java.util.Locale): string;
        _className(t: com.sun.tools.javac.code.Type$ClassType, longform: boolean, locale: java.util.Locale): string;
        _localize(locale: java.util.Locale, key: string, args: any[]): string;
        _localize(locale: java.util.Locale, key: string, ...args: any[]): string;
        _toString(t: com.sun.tools.javac.code.Type): string;
        visitCapturedType(t: com.sun.tools.javac.code.Type$CapturedType, locale: java.util.Locale): string;
        visitCapturedType(a0: com.sun.tools.javac.code.Type$CapturedType, a1: any): any;
        visitClassSymbol(sym: com.sun.tools.javac.code.Symbol$ClassSymbol, locale: java.util.Locale): string;
        visitClassSymbol(a0: com.sun.tools.javac.code.Symbol$ClassSymbol, a1: any): any;
        visitPackageSymbol(s: com.sun.tools.javac.code.Symbol$PackageSymbol, locale: java.util.Locale): string;
        visitPackageSymbol(a0: com.sun.tools.javac.code.Symbol$PackageSymbol, a1: any): any;
        visitType(t: com.sun.tools.javac.code.Type, locale: java.util.Locale): string;
        visitType(a0: com.sun.tools.javac.code.Type, a1: any): any;
        _anonymousToName: java.util.function.Function<com.sun.tools.javac.code.Symbol$TypeSymbol,string>;
        _anonymousTypesKind: TypePrinter$AnonymousTypeKind;
        _fullClassNameAndPackageToClass: java.util.function.BinaryOperator<string>;
        _messages: com.sun.tools.javac.util.JavacMessages;
        _printIntersectionTypes: boolean;
        _types: com.sun.tools.javac.code.Types;
      }
      interface TypePrinter extends CombineTypes<[_TypePrinter, com.sun.tools.javac.code.Printer]> {}
      interface _TypePrinter$AnonymousTypeKind$$static extends ClassLike {
        valueOf(name: string): TypePrinter$AnonymousTypeKind;
        values(): TypePrinter$AnonymousTypeKind[];
        readonly DECLARE: TypePrinter$AnonymousTypeKind;
        readonly DISPLAY: TypePrinter$AnonymousTypeKind;
        readonly SUPER: TypePrinter$AnonymousTypeKind;
      }
      let TypePrinter$AnonymousTypeKind: _TypePrinter$AnonymousTypeKind$$static;
      interface _TypePrinter$AnonymousTypeKind {
      }
      interface TypePrinter$AnonymousTypeKind extends CombineTypes<[_TypePrinter$AnonymousTypeKind]> {}
      interface _Unit$$static extends ClassLike {
        _new(state: JShell, si: Snippet, causalSnippet: Snippet, generatedDiagnostics: DiagList): Unit;
        _new(state: JShell, si: Snippet): Unit;
      }
      let Unit: _Unit$$static;
      interface _Unit {
        _checkForOverwrite(at: TaskFactory$AnalyzeTask): void;
        _classesToLoad(classnames: java.util.List<string>): java.util.stream.Stream<jshell.spi.ExecutionControl$ClassBytecodes>;
        _computeDiagnostics(): DiagList;
        _computeQualifiedParameterTypes(at: TaskFactory$AnalyzeTask, msi: MethodSnippet): string;
        _corralIfNeeded(working: java.util.Collection<Unit>): boolean;
        _dependents(): java.util.stream.Stream<Unit>;
        _doRedefines(): boolean;
        _effectedDependents(): java.util.stream.Stream<Unit>;
        equals(o: any): boolean;
        _event(value: string, exception: JShellException): SnippetEvent;
        _finish(): void;
        hashCode(): int;
        _initialize(): void;
        _isDefined(): boolean;
        _isDependency(): boolean;
        _isImport(): boolean;
        _isRecoverable(): boolean;
        _markForReplacement(): void;
        _markOldDeclarationOverwritten(): void;
        _overwriteMatchingMethod(msi: MethodSnippet): Snippet$Status;
        _recordCompilation(): void;
        _secondaryEvents(): java.util.List<SnippetEvent>;
        _setCorralledDiagnostics(cct: TaskFactory$AnalyzeTask): void;
        _setDiagnostics(ct: TaskFactory$AnalyzeTask): void;
        _setDiagnostics(diags: DiagList): void;
        _setStatus(at: TaskFactory$AnalyzeTask): void;
        _setWrap(exceptUnit: java.util.Collection<Unit>, plusUnfiltered: java.util.Collection<Unit>): void;
        _sigChanged(): boolean;
        _smashingErrorDiagnostics(ct: TaskFactory$CompileTask): boolean;
        _snippet(): Snippet;
        toString(): string;
        _activeGuts: Wrap;
        _causalSnippet: Snippet;
        _classNameInitial: string;
        _compilationDiagnostics: DiagList;
        _dependenciesNeeded: boolean;
        _generatedDiagnostics: DiagList;
        _isAttemptingCorral: boolean;
        _isDependency: boolean;
        _isNew: boolean;
        _prevStatus: Snippet$Status;
        _recompilationDiagnostics: DiagList;
        _replaceOldEvent: SnippetEvent;
        _secondaryEvents: java.util.List<SnippetEvent>;
        _seq: int;
        _si: Snippet;
        _siOld: Snippet;
        _signatureChanged: boolean;
        _state: JShell;
        _status: Snippet$Status;
        _toRedefine: java.util.List<ClassTracker$ClassInfo>;
        _unresolved: java.util.List<string>;
      }
      interface Unit extends CombineTypes<[_Unit, java.lang.Object]> {}
      interface _Unit$UnresolvedExtractor$$static extends ClassLike {
        _RESOLVE_ERROR_LOCATION: string;
        _RESOLVE_ERROR_SYMBOL: string;
        _new(diags: DiagList): Unit$UnresolvedExtractor;
      }
      let Unit$UnresolvedExtractor: _Unit$UnresolvedExtractor$$static;
      interface _Unit$UnresolvedExtractor {
        _otherAll(): DiagList;
        _otherCorralledErrors(): DiagList;
        _unresolved(): java.util.List<string>;
        _otherAll: DiagList;
        _otherErrors: DiagList;
        _unresolved: java.util.Set<string>;
      }
      interface Unit$UnresolvedExtractor extends CombineTypes<[_Unit$UnresolvedExtractor, java.lang.Object]> {}
      interface _UnresolvedReferenceException$$static extends ClassLike {
        _new(snippet: DeclarationSnippet, stackElements: java.lang.StackTraceElement[]): UnresolvedReferenceException;
      }
      let UnresolvedReferenceException: _UnresolvedReferenceException$$static;
      interface _UnresolvedReferenceException {
        getSnippet(): DeclarationSnippet;
        _snippet: DeclarationSnippet;
      }
      interface UnresolvedReferenceException extends CombineTypes<[_UnresolvedReferenceException, jdk.jshell.JShellException]> {}
      interface _Util$$static extends ClassLike {
        _asLetters(i: int): string;
        _expunge(s: string): string;
        _isDoIt(name: javax.lang.model.element.Name): boolean;
        _isDoIt(sname: string): boolean;
        _isInJShellClass(s: string): boolean;
        _join(a1: string[], a2: string[]): string[];
        _stream<T>(iterable: java.lang.Iterable<T>): java.util.stream.Stream<T>;
        _trimEnd(s: string): string;
        _DOIT_METHOD_NAME: string;
        _JSHELL_ANONYMOUS: string;
        _PARSED_LOCALE: java.util.Locale;
        _PREFIX_PATTERN: java.util.regex.Pattern;
        _REPL_CLASS_PREFIX: string;
        _REPL_DOESNOTMATTER_CLASS_NAME: string;
        _REPL_PACKAGE: string;
        _new(): Util;
      }
      let Util: _Util$$static;
      interface _Util {
      }
      interface Util extends CombineTypes<[_Util, java.lang.Object]> {}
      interface _Util$Pair$$static<T,U> extends ClassLike {
        _new(first: T, second: U): Util$Pair<T,U>;
      }
      let Util$Pair: _Util$Pair$$static<T,U>;
      interface _Util$Pair<T,U> {
        _first: T;
        _second: U;
      }
      interface Util$Pair<T,U> extends CombineTypes<[_Util$Pair<T,U>, java.lang.Object]> {}
      interface _VarSnippet$$static extends ClassLike {
        _new(key: Key$VarKey, userSource: string, guts: Wrap, name: string, fieldName: string, subkind: Snippet$SubKind, typeName: string, fullTypeName: string, anonymousClasses: java.util.Set<string>, declareReferences: java.util.Collection<string>, syntheticDiags: DiagList): VarSnippet;
      }
      let VarSnippet: _VarSnippet$$static;
      interface _VarSnippet {
        _fieldName(): string;
        _importLine(state: JShell): string;
        typeName(): string;
        _anonymousClasses: java.util.Set<string>;
        _fieldName: string;
        _fullTypeName: string;
        _typeName: string;
      }
      interface VarSnippet extends CombineTypes<[_VarSnippet, jdk.jshell.DeclarationSnippet]> {}
      interface _Wrap$$static extends ClassLike {
        classMemberWrap(source: string): Wrap;
        _countLines(s: string): int;
        _countLines(s: string, from: int, toEx: int): int;
        identityWrap(source: string): Wrap;
        _indent(n: int): string;
        methodReturnWrap(source: string): Wrap;
        methodUnreachableSemiWrap(source: string): Wrap;
        methodUnreachableWrap(source: string): Wrap;
        _methodWrap(prefix: string, source: string, suffix: string): Wrap;
        methodWrap(source: string): Wrap;
        _nlindent(n: int): string;
        rangeWrap(source: string, range: Wrap$Range): Wrap;
        _semi(w: Wrap): string;
        _semi(s: string): string;
        simpleWrap(source: string): Wrap;
        tempVarWrap(source: string, typename: string, name: string, anonDeclareWrap: Wrap): Wrap;
        varWrap(source: string, wtype: Wrap, brackets: string, wname: Wrap, winit: Wrap, enhanced: boolean, anonDeclareWrap: Wrap): Wrap;
        _new(): Wrap;
      }
      let Wrap: _Wrap$$static;
      interface _Wrap {
        _debugWrap(format: string, args: any[]): void;
        _debugWrap(format: string, ...args: any[]): void;
      }
      interface Wrap extends CombineTypes<[_Wrap, java.lang.Object, jdk.jshell.GeneralWrap]> {}
      interface _Wrap$CompoundWrap$$static extends ClassLike {
        _new(os: any[]): Wrap$CompoundWrap;
        _new(...os: any[]): Wrap$CompoundWrap;
      }
      let Wrap$CompoundWrap: _Wrap$CompoundWrap$$static;
      interface _Wrap$CompoundWrap {
        firstSnippetIndex(): int;
        firstSnippetLine(): int;
        lastSnippetIndex(): int;
        lastSnippetLine(): int;
        snippetIndexToWrapIndex(sni: int): int;
        snippetLineToWrapLine(snline: int): int;
        toString(): string;
        wrapIndexToSnippetIndex(wi: int): int;
        _wrapIndexToWrap(wi: long): Wrap;
        wrapLineToSnippetLine(wline: int): int;
        _wrapLineToWrap(wline: int): Wrap;
        wrapped(): string;
        _os: any[];
        _snidxFirst: int;
        _snidxLast: int;
        _snlineFirst: int;
        _snlineLast: int;
        _wrapped: string;
      }
      interface Wrap$CompoundWrap extends CombineTypes<[_Wrap$CompoundWrap, jdk.jshell.Wrap]> {}
      interface _Wrap$DoitMethodWrap$$static extends ClassLike {
        _new(w: Wrap): Wrap$DoitMethodWrap;
      }
      let Wrap$DoitMethodWrap: _Wrap$DoitMethodWrap$$static;
      interface _Wrap$DoitMethodWrap {
      }
      interface Wrap$DoitMethodWrap extends CombineTypes<[_Wrap$DoitMethodWrap, jdk.jshell.Wrap$CompoundWrap]> {}
      interface _Wrap$NoWrap$$static extends ClassLike {
        _new(unit: string): Wrap$NoWrap;
      }
      let Wrap$NoWrap: _Wrap$NoWrap$$static;
      interface _Wrap$NoWrap {
      }
      interface Wrap$NoWrap extends CombineTypes<[_Wrap$NoWrap, jdk.jshell.Wrap$RangeWrap]> {}
      interface _Wrap$Range$$static extends ClassLike {
        _new(begin: int, end: int): Wrap$Range;
        _new(s: string): Wrap$Range;
      }
      let Wrap$Range: _Wrap$Range$$static;
      interface _Wrap$Range {
        _isEmpty(): boolean;
        _length(): int;
        _part(s: string): string;
        toString(): string;
        _verify(s: string): void;
        _begin: int;
        _end: int;
      }
      interface Wrap$Range extends CombineTypes<[_Wrap$Range, java.lang.Object]> {}
      interface _Wrap$RangeWrap$$static extends ClassLike {
        _new(snippetSource: string, usedWithinSnippet: Wrap$Range): Wrap$RangeWrap;
      }
      let Wrap$RangeWrap: _Wrap$RangeWrap$$static;
      interface _Wrap$RangeWrap {
        firstSnippetIndex(): int;
        firstSnippetLine(): int;
        lastSnippetIndex(): int;
        lastSnippetLine(): int;
        snippetIndexToWrapIndex(sni: int): int;
        snippetLineToWrapLine(snline: int): int;
        toString(): string;
        wrapIndexToSnippetIndex(wi: int): int;
        wrapLineToSnippetLine(wline: int): int;
        wrapped(): string;
        _firstSnline: int;
        _lastSnline: int;
        _range: Wrap$Range;
        _wrapped: string;
      }
      interface Wrap$RangeWrap extends CombineTypes<[_Wrap$RangeWrap, jdk.jshell.Wrap]> {}
      interface _Wrap$VarDeclareWrap$$static extends ClassLike {
        _new(wtype: Wrap, brackets: string, wname: Wrap): Wrap$VarDeclareWrap;
      }
      let Wrap$VarDeclareWrap: _Wrap$VarDeclareWrap$$static;
      interface _Wrap$VarDeclareWrap {
      }
      interface Wrap$VarDeclareWrap extends CombineTypes<[_Wrap$VarDeclareWrap, jdk.jshell.Wrap$CompoundWrap]> {}
    }
  }
}
