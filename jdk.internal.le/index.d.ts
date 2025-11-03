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
      module org {
        module jline {
          module keymap {
            interface _BindingReader$$static extends ClassLike {
              new(reader: jline.utils.NonBlockingReader): BindingReader;
            }
            let BindingReader: _BindingReader$$static;
            interface _BindingReader {
              getCurrentBuffer(): string;
              getLastBinding(): string;
              peekCharacter(timeout: long): int;
              readBinding<T>(keys: KeyMap<T>): T;
              readBinding<T>(keys: KeyMap<T>, local: KeyMap<T>): T;
              readBinding<T>(keys: KeyMap<T>, local: KeyMap<T>, block: boolean): T;
              readCharacter(): int;
              readCharacterBuffered(): int;
              readStringUntil(sequence: string): string;
              runMacro(macro: string): void;
              _lastBinding: string;
              _opBuffer: keymap$stringBuilder;
              _pushBackChar: java.util.Deque<int>;
              _reader: jline.utils.NonBlockingReader;
            }
            interface BindingReader extends CombineTypes<[_BindingReader, java.lang.Object]> {}
            interface _KeyMap$$static<T> extends ClassLike {
              alt(c: char): string;
              alt(c: string): string;
              _bind<T>(map: KeyMap<T>, keySeq: KeyMap$charSequence, _function: T, onlyIfNotBound: boolean): void;
              ctrl(key: char): string;
              del(): string;
              display(key: string): string;
              _doGetBoundKeys<T>(keyMap: KeyMap<T>, prefix: string, bound: java.util.Map<string,T>): void;
              esc(): string;
              key(terminal: jline.terminal.Terminal, capability: jline.utils.InfoCmp$Capability): string;
              range(range: string): java.util.Collection<string>;
              translate(str: string): string;
              _unbind<T>(map: KeyMap<T>, keySeq: KeyMap$charSequence): T;
              readonly DEFAULT_AMBIGUOUS_TIMEOUT: long;
              readonly KEYMAP_LENGTH: int;
              readonly KEYSEQ_COMPARATOR: java.util.Comparator<string>;
              new(): KeyMap<T>;
            }
            let KeyMap: _KeyMap$$static<T>;
            interface _KeyMap<T> {
              bind(_function: T, keySeqs: KeyMap$charSequence[]): void;
              bind(_function: T, ...keySeqs: KeyMap$charSequence[]): void;
              bind(_function: T, keySeqs: java.lang.Iterable<KeyMap$charSequence>): void;
              bind(_function: T, keySeq: KeyMap$charSequence): void;
              bindIfNotBound(_function: T, keySeq: KeyMap$charSequence): void;
              getAmbiguousTimeout(): long;
              getAnotherKey(): T;
              getBound(keySeq: KeyMap$charSequence, remaining: int[]): T;
              getBound(keySeq: KeyMap$charSequence): T;
              getBoundKeys(): java.util.Map<string,T>;
              getNomatch(): T;
              getUnicode(): T;
              setAmbiguousTimeout(ambiguousTimeout: long): void;
              setNomatch(nomatch: T): void;
              setUnicode(unicode: T): void;
              unbind(keySeqs: KeyMap$charSequence[]): void;
              unbind(...keySeqs: KeyMap$charSequence[]): void;
              unbind(keySeq: KeyMap$charSequence): void;
              _ambiguousTimeout: long;
              _anotherKey: T;
              _mapping: any[];
              _nomatch: T;
              _unicode: T;
            }
            interface KeyMap<T> extends CombineTypes<[_KeyMap<T>, java.lang.Object]> {}
          }
          module reader {
            module impl {
              module completer {
                interface _AggregateCompleter$$static extends ClassLike {
                  new(completers: Completer[]): AggregateCompleter;
                  new(...completers: Completer[]): AggregateCompleter;
                  new(completers: java.util.Collection<Completer>): AggregateCompleter;
                }
                let AggregateCompleter: _AggregateCompleter$$static;
                interface _AggregateCompleter {
                  complete(reader: LineReader, line: ParsedLine, candidates: java.util.List<Candidate>): void;
                  getCompleters(): java.util.Collection<Completer>;
                  toString(): string;
                  _completers: java.util.Collection<Completer>;
                }
                interface AggregateCompleter extends CombineTypes<[_AggregateCompleter, jdk.internal.org.jline.reader.Completer, java.lang.Object]> {}
                interface _ArgumentCompleter$$static extends ClassLike {
                  new(completers: java.util.Collection<Completer>): ArgumentCompleter;
                  new(completers: Completer[]): ArgumentCompleter;
                  new(...completers: Completer[]): ArgumentCompleter;
                }
                let ArgumentCompleter: _ArgumentCompleter$$static;
                interface _ArgumentCompleter {
                  complete(reader: LineReader, line: ParsedLine, candidates: java.util.List<Candidate>): void;
                  getCompleters(): java.util.List<Completer>;
                  isStrict(): boolean;
                  setStrict(strict: boolean): void;
                  setStrictCommand(strictCommand: boolean): void;
                  _completers: java.util.List<Completer>;
                  _strict: boolean;
                  _strictCommand: boolean;
                }
                interface ArgumentCompleter extends CombineTypes<[_ArgumentCompleter, jdk.internal.org.jline.reader.Completer, java.lang.Object]> {}
                interface _ArgumentCompleter$ArgumentLine$$static extends ClassLike {
                  new(word: string, cursor: int): ArgumentCompleter$ArgumentLine;
                }
                let ArgumentCompleter$ArgumentLine: _ArgumentCompleter$ArgumentLine$$static;
                interface _ArgumentCompleter$ArgumentLine {
                  cursor(): int;
                  line(): string;
                  word(): string;
                  wordCursor(): int;
                  wordIndex(): int;
                  words(): java.util.List<string>;
                  _cursor: int;
                  _word: string;
                }
                interface ArgumentCompleter$ArgumentLine extends CombineTypes<[_ArgumentCompleter$ArgumentLine, java.lang.Object, jdk.internal.org.jline.reader.ParsedLine]> {}
                interface _EnumCompleter$$static extends ClassLike {
                  new(source: java.lang.Class<java.lang.Enum<any>>): EnumCompleter;
                }
                let EnumCompleter: _EnumCompleter$$static;
                interface _EnumCompleter {
                }
                interface EnumCompleter extends CombineTypes<[_EnumCompleter, jdk.internal.org.jline.reader.impl.completer.StringsCompleter]> {}
                interface _FileNameCompleter$$static extends ClassLike {
                  new(): FileNameCompleter;
                }
                let FileNameCompleter: _FileNameCompleter$$static;
                interface _FileNameCompleter {
                  _accept(path: java.nio.file.Path): boolean;
                  complete(reader: LineReader, commandLine: ParsedLine, candidates: java.util.List<Candidate>): void;
                  _getDisplay(terminal: jline.terminal.Terminal, p: java.nio.file.Path): string;
                  _getUserDir(): java.nio.file.Path;
                  _getUserHome(): java.nio.file.Path;
                }
                interface FileNameCompleter extends CombineTypes<[_FileNameCompleter, jdk.internal.org.jline.reader.Completer, java.lang.Object]> {}
                interface _NullCompleter$$static extends ClassLike {
                  readonly INSTANCE: NullCompleter;
                  new(): NullCompleter;
                }
                let NullCompleter: _NullCompleter$$static;
                interface _NullCompleter {
                  complete(reader: LineReader, line: ParsedLine, candidates: java.util.List<Candidate>): void;
                }
                interface NullCompleter extends CombineTypes<[_NullCompleter, jdk.internal.org.jline.reader.Completer, java.lang.Object]> {}
                interface _StringsCompleter$$static extends ClassLike {
                  new(): StringsCompleter;
                  new(stringsSupplier: java.util.function.Supplier<java.util.Collection<string>>): StringsCompleter;
                  new(strings: string[]): StringsCompleter;
                  new(...strings: string[]): StringsCompleter;
                  new(strings: java.lang.Iterable<string>): StringsCompleter;
                  new(candidates: Candidate[]): StringsCompleter;
                  new(...candidates: Candidate[]): StringsCompleter;
                  new(candidates: java.util.Collection<Candidate>): StringsCompleter;
                }
                let StringsCompleter: _StringsCompleter$$static;
                interface _StringsCompleter {
                  complete(reader: LineReader, commandLine: ParsedLine, candidates: java.util.List<Candidate>): void;
                  toString(): string;
                  _candidates: java.util.Collection<Candidate>;
                  _stringsSupplier: java.util.function.Supplier<java.util.Collection<string>>;
                }
                interface StringsCompleter extends CombineTypes<[_StringsCompleter, jdk.internal.org.jline.reader.Completer, java.lang.Object]> {}
                interface _SystemCompleter$$static extends ClassLike {
                  new(): SystemCompleter;
                }
                let SystemCompleter: _SystemCompleter$$static;
                interface _SystemCompleter {
                  add(command: string, completers: java.util.List<Completer>): void;
                  add(commands: java.util.List<string>, completer: Completer): void;
                  add(command: string, completer: Completer): void;
                  add(other: SystemCompleter): void;
                  addAliases(aliasCommand: java.util.Map<string,string>): void;
                  _command(cmd: string): string;
                  compile(): void;
                  complete(reader: LineReader, commandLine: ParsedLine, candidates: java.util.List<Candidate>): void;
                  _getAliases(): java.util.Map<string,string>;
                  getCompleters(): java.util.Map<string,java.util.List<Completer>>;
                  isCompiled(): boolean;
                  _aliasCommand: java.util.Map<string,string>;
                  _commands: StringsCompleter;
                  _compiled: boolean;
                  _completers: java.util.Map<string,java.util.List<Completer>>;
                }
                interface SystemCompleter extends CombineTypes<[_SystemCompleter, jdk.internal.org.jline.reader.Completer, java.lang.Object]> {}
              }
              module history {
                interface _DefaultHistory$$static extends ClassLike {
                  _doTrimHistory(allItems: java.util.List<History$Entry>, max: int): java.util.List<History$Entry>;
                  _escape(s: string): string;
                  _unescape(s: string): string;
                  readonly DEFAULT_HISTORY_FILE_SIZE: int;
                  readonly DEFAULT_HISTORY_SIZE: int;
                  new(): DefaultHistory;
                  new(reader: LineReader): DefaultHistory;
                }
                let DefaultHistory: _DefaultHistory$$static;
                interface _DefaultHistory {
                  add(time: java.time.Instant, line: string): void;
                  _addHistoryLine(path: java.nio.file.Path, line: string): void;
                  _addHistoryLine(path: java.nio.file.Path, line: string, checkDuplicates: boolean): void;
                  append(file: java.nio.file.Path, incremental: boolean): void;
                  attach(reader: LineReader): void;
                  _createEntry(index: int, time: java.time.Instant, line: string): DefaultHistory$EntryImpl;
                  current(): string;
                  _doHistoryFileDataKey(path: java.nio.file.Path): string;
                  first(): int;
                  _format(entry: History$Entry): string;
                  get(index: int): string;
                  _getEntriesInFile(path: java.nio.file.Path): int;
                  _getHistoryFileData(path: java.nio.file.Path): DefaultHistory$HistoryFileData;
                  _getLastLoaded(path: java.nio.file.Path): int;
                  _getPath(): java.nio.file.Path;
                  _incEntriesInFile(path: java.nio.file.Path, amount: int): void;
                  index(): int;
                  _internalAdd(time: java.time.Instant, line: string): void;
                  _internalAdd(time: java.time.Instant, line: string, checkDuplicates: boolean): void;
                  _internalClear(): void;
                  _internalWrite(path: java.nio.file.Path, from: int): void;
                  isEmpty(): boolean;
                  _isLineReaderHistory(path: java.nio.file.Path): boolean;
                  iterator(index: int): java.util.ListIterator<History$Entry>;
                  last(): int;
                  load(): void;
                  _matchPatterns(patterns: string, line: string): boolean;
                  _maybeResize(): void;
                  moveTo(index: int): boolean;
                  moveToEnd(): void;
                  moveToFirst(): boolean;
                  moveToLast(): boolean;
                  next(): boolean;
                  previous(): boolean;
                  purge(): void;
                  read(file: java.nio.file.Path, checkDuplicates: boolean): void;
                  resetIndex(): void;
                  save(): void;
                  _setEntriesInFile(path: java.nio.file.Path, entriesInFile: int): void;
                  _setHistoryFileData(path: java.nio.file.Path, historyFileData: DefaultHistory$HistoryFileData): void;
                  _setLastLoaded(path: java.nio.file.Path, lastloaded: int): void;
                  size(): int;
                  spliterator(): java.util.Spliterator<History$Entry>;
                  toString(): string;
                  _trimHistory(path: java.nio.file.Path, max: int): void;
                  write(file: java.nio.file.Path, incremental: boolean): void;
                  _historyFiles: java.util.Map<string,DefaultHistory$HistoryFileData>;
                  _index: int;
                  _items: java.util.LinkedList<History$Entry>;
                  _offset: int;
                  _reader: LineReader;
                }
                interface DefaultHistory extends CombineTypes<[_DefaultHistory, jdk.internal.org.jline.reader.History, java.lang.Object]> {}
                interface _DefaultHistory$EntryImpl$$static extends ClassLike {
                  new(index: int, time: java.time.Instant, line: string): DefaultHistory$EntryImpl;
                }
                let DefaultHistory$EntryImpl: _DefaultHistory$EntryImpl$$static;
                interface _DefaultHistory$EntryImpl {
                  index(): int;
                  line(): string;
                  time(): java.time.Instant;
                  toString(): string;
                  _index: int;
                  _line: string;
                  _time: java.time.Instant;
                }
                interface DefaultHistory$EntryImpl extends CombineTypes<[_DefaultHistory$EntryImpl, java.lang.Object, jdk.internal.org.jline.reader.History$Entry]> {}
                interface _DefaultHistory$HistoryFileData$$static extends ClassLike {
                  new(): DefaultHistory$HistoryFileData;
                  new(lastLoaded: int, entriesInFile: int): DefaultHistory$HistoryFileData;
                }
                let DefaultHistory$HistoryFileData: _DefaultHistory$HistoryFileData$$static;
                interface _DefaultHistory$HistoryFileData {
                  decLastLoaded(): void;
                  getEntriesInFile(): int;
                  getLastLoaded(): int;
                  incEntriesInFile(amount: int): void;
                  setEntriesInFile(entriesInFile: int): void;
                  setLastLoaded(lastLoaded: int): void;
                  _entriesInFile: int;
                  _lastLoaded: int;
                }
                interface DefaultHistory$HistoryFileData extends CombineTypes<[_DefaultHistory$HistoryFileData, java.lang.Object]> {}
              }
              interface _BufferImpl$$static extends ClassLike {
                new(): BufferImpl;
                new(size: int): BufferImpl;
              }
              let BufferImpl: _BufferImpl$$static;
              interface _BufferImpl {
                _adjust(i: int): int;
                atChar(i: int): int;
                backspace(num: int): int;
                backspace(): boolean;
                clear(): boolean;
                copy(): BufferImpl;
                copy(): Buffer;
                copyFrom(buf: Buffer): void;
                currChar(ch: int): boolean;
                currChar(): int;
                cursor(): int;
                cursor(position: int): boolean;
                delete(num: int): int;
                delete(): boolean;
                down(): boolean;
                _getCursorCol(): int;
                length(): int;
                move(num: int): int;
                _moveGapToCursor(): void;
                moveXY(dx: int, dy: int): boolean;
                nextChar(): int;
                prevChar(): int;
                substring(start: int): string;
                substring(start: int, end: int): string;
                toString(): string;
                up(): boolean;
                upToCursor(): string;
                write(c: int): void;
                write(c: int, overTyping: boolean): void;
                write(str: BufferImpl$charSequence): void;
                write(str: BufferImpl$charSequence, overTyping: boolean): void;
                _write(ucps: int[]): void;
                zeroOut(): void;
                _buffer: int[];
                _cursor: int;
                _cursorCol: int;
                _g0: int;
                _g1: int;
              }
              interface BufferImpl extends CombineTypes<[_BufferImpl, java.lang.Object, jdk.internal.org.jline.reader.Buffer]> {}
              interface _CompletionMatcherImpl$$static extends ClassLike {
                new(): CompletionMatcherImpl;
              }
              let CompletionMatcherImpl: _CompletionMatcherImpl$$static;
              interface _CompletionMatcherImpl {
                _camelMatch(word: string, i: int, candidate: string, j: int): boolean;
                compile(options: java.util.Map<LineReader$Option,boolean>, prefix: boolean, line: CompletingParsedLine, caseInsensitive: boolean, errors: int, originalGroupName: string): void;
                _defaultMatchers(options: java.util.Map<LineReader$Option,boolean>, prefix: boolean, line: CompletingParsedLine, caseInsensitive: boolean, errors: int, originalGroupName: string): void;
                exactMatch(): Candidate;
                getCommonPrefix(): string;
                _getCommonStart(str1: string, str2: string, caseInsensitive: boolean): string;
                matches(candidates: java.util.List<Candidate>): java.util.List<Candidate>;
                _reset(caseInsensitive: boolean): void;
                _simpleMatcher(predicate: java.util.function.Predicate<string>): java.util.function.Function<java.util.Map<string,java.util.List<Candidate>>,java.util.Map<string,java.util.List<Candidate>>>;
                _sort(candidates: java.util.List<Candidate>): java.util.Map<string,java.util.List<Candidate>>;
                _typoMatcher(word: string, errors: int, caseInsensitive: boolean, originalGroupName: string): java.util.function.Function<java.util.Map<string,java.util.List<Candidate>>,java.util.Map<string,java.util.List<Candidate>>>;
                _caseInsensitive: boolean;
                _exact: java.util.function.Predicate<string>;
                _matchers: java.util.List<java.util.function.Function<java.util.Map<string,java.util.List<Candidate>>,java.util.Map<string,java.util.List<Candidate>>>>;
                _matching: java.util.Map<string,java.util.List<Candidate>>;
              }
              interface CompletionMatcherImpl extends CombineTypes<[_CompletionMatcherImpl, jdk.internal.org.jline.reader.CompletionMatcher, java.lang.Object]> {}
              interface _DefaultExpander$$static extends ClassLike {
                new(): DefaultExpander;
              }
              let DefaultExpander: _DefaultExpander$$static;
              interface _DefaultExpander {
                expandHistory(history: History, line: string): string;
                expandVar(word: string): string;
                _searchBackwards(history: History, searchTerm: string, startIndex: int, startsWith: boolean): int;
              }
              interface DefaultExpander extends CombineTypes<[_DefaultExpander, jdk.internal.org.jline.reader.Expander, java.lang.Object]> {}
              interface _DefaultHighlighter$$static extends ClassLike {
                new(): DefaultHighlighter;
              }
              let DefaultHighlighter: _DefaultHighlighter$$static;
              interface _DefaultHighlighter {
                highlight(reader: LineReader, buffer: string): jline.utils.AttributedString;
                setErrorIndex(errorIndex: int): void;
                setErrorPattern(errorPattern: java.util.regex.Pattern): void;
                _errorIndex: int;
                _errorPattern: java.util.regex.Pattern;
              }
              interface DefaultHighlighter extends CombineTypes<[_DefaultHighlighter, jdk.internal.org.jline.reader.Highlighter, java.lang.Object]> {}
              interface _DefaultParser$$static extends ClassLike {
                new(): DefaultParser;
              }
              let DefaultParser: _DefaultParser$$static;
              interface _DefaultParser {
                blockCommentDelims(blockCommentDelims: DefaultParser$BlockCommentDelims): DefaultParser;
                commandGroup(commandGroup: int): DefaultParser;
                eofOnEscapedNewLine(eofOnEscapedNewLine: boolean): DefaultParser;
                eofOnUnclosedBracket(brackets: DefaultParser$Bracket[]): DefaultParser;
                eofOnUnclosedBracket(...brackets: DefaultParser$Bracket[]): DefaultParser;
                eofOnUnclosedQuote(eofOnUnclosedQuote: boolean): DefaultParser;
                escapeChars(chars: char[]): DefaultParser;
                getBlockCommentDelims(): DefaultParser$BlockCommentDelims;
                getCommand(line: string): string;
                getEscapeChars(): char[];
                getLineCommentDelims(): string[];
                getQuoteChars(): char[];
                getVariable(line: string): string;
                _handleDelimiterAndGetRawWordLength(current: DefaultParser$stringBuilder, words: java.util.List<string>, rawWordStart: int, rawWordCursor: int, rawWordLength: int, pos: int): int;
                _isCommentDelim(buffer: DefaultParser$charSequence, pos: int, pattern: string): boolean;
                isDelimiter(buffer: DefaultParser$charSequence, pos: int): boolean;
                isDelimiterChar(buffer: DefaultParser$charSequence, pos: int): boolean;
                isEofOnEscapedNewLine(): boolean;
                isEofOnUnclosedQuote(): boolean;
                isEscapeChar(ch: char): boolean;
                isEscapeChar(buffer: DefaultParser$charSequence, pos: int): boolean;
                isEscaped(buffer: DefaultParser$charSequence, pos: int): boolean;
                isLineCommentStarted(buffer: DefaultParser$charSequence, pos: int): boolean;
                isQuoteChar(buffer: DefaultParser$charSequence, pos: int): boolean;
                isQuoted(buffer: DefaultParser$charSequence, pos: int): boolean;
                _isRawEscapeChar(key: char): boolean;
                _isRawQuoteChar(key: char): boolean;
                lineCommentDelims(lineCommentDelims: string[]): DefaultParser;
                parse(line: string, cursor: int, context: Parser$ParseContext): ParsedLine;
                quoteChars(chars: char[]): DefaultParser;
                regexCommand(regexCommand: string): DefaultParser;
                regexVariable(regexVariable: string): DefaultParser;
                setBlockCommentDelims(blockCommentDelims: DefaultParser$BlockCommentDelims): void;
                setCommandGroup(commandGroup: int): void;
                setEofOnEscapedNewLine(eofOnEscapedNewLine: boolean): void;
                setEofOnUnclosedBracket(brackets: DefaultParser$Bracket[]): void;
                setEofOnUnclosedBracket(...brackets: DefaultParser$Bracket[]): void;
                setEofOnUnclosedQuote(eofOnUnclosedQuote: boolean): void;
                setEscapeChars(chars: char[]): void;
                setLineCommentDelims(lineCommentDelims: string[]): void;
                setQuoteChars(chars: char[]): void;
                setRegexCommand(regexCommand: string): void;
                setRegexVariable(regexVariable: string): void;
                validCommandName(name: string): boolean;
                validVariableName(name: string): boolean;
                _blockCommentDelims: DefaultParser$BlockCommentDelims;
                _closingBrackets: char[];
                _commandGroup: int;
                _eofOnEscapedNewLine: boolean;
                _eofOnUnclosedQuote: boolean;
                _escapeChars: char[];
                _lineCommentDelims: string[];
                _openingBrackets: char[];
                _quoteChars: char[];
                _regexCommand: string;
                _regexVariable: string;
              }
              interface DefaultParser extends CombineTypes<[_DefaultParser, java.lang.Object, jdk.internal.org.jline.reader.Parser]> {}
              interface _DefaultParser$ArgumentList$$static extends ClassLike {
                new(this$0: string, line: java.util.List<string>, words: int, wordIndex: int, wordCursor: int): DefaultParser$ArgumentList;
                new(this$0: string, line: java.util.List<string>, words: int, wordIndex: int, wordCursor: int, cursor: string, openingQuote: int, rawWordCursor: int): DefaultParser$ArgumentList;
              }
              let DefaultParser$ArgumentList: _DefaultParser$ArgumentList$$static;
              interface _DefaultParser$ArgumentList {
                cursor(): int;
                escape(candidate: DefaultParser$ArgumentList$charSequence, complete: boolean): DefaultParser$ArgumentList$charSequence;
                line(): string;
                rawWordCursor(): int;
                rawWordLength(): int;
                word(): string;
                wordCursor(): int;
                wordIndex(): int;
                words(): java.util.List<string>;
                _cursor: int;
                _line: string;
                _openingQuote: string;
                _rawWordCursor: int;
                _rawWordLength: int;
                _this$0: DefaultParser;
                _wordCursor: int;
                _wordIndex: int;
                _words: java.util.List<string>;
              }
              interface DefaultParser$ArgumentList extends CombineTypes<[_DefaultParser$ArgumentList, jdk.internal.org.jline.reader.CompletingParsedLine, java.lang.Object, jdk.internal.org.jline.reader.ParsedLine]> {}
              interface _DefaultParser$BlockCommentDelims$$static extends ClassLike {
                new(start: string, end: string): DefaultParser$BlockCommentDelims;
              }
              let DefaultParser$BlockCommentDelims: _DefaultParser$BlockCommentDelims$$static;
              interface _DefaultParser$BlockCommentDelims {
                getEnd(): string;
                getStart(): string;
                _end: string;
                _start: string;
              }
              interface DefaultParser$BlockCommentDelims extends CombineTypes<[_DefaultParser$BlockCommentDelims, java.lang.Object]> {}
              interface _DefaultParser$Bracket$$static extends ClassLike {
                valueOf(name: string): DefaultParser$Bracket;
                values(): DefaultParser$Bracket[];
                readonly ANGLE: DefaultParser$Bracket;
                readonly CURLY: DefaultParser$Bracket;
                readonly ROUND: DefaultParser$Bracket;
                readonly SQUARE: DefaultParser$Bracket;
              }
              let DefaultParser$Bracket: _DefaultParser$Bracket$$static;
              interface _DefaultParser$Bracket {
              }
              interface DefaultParser$Bracket extends CombineTypes<[_DefaultParser$Bracket]> {}
              interface _DefaultParser$BracketChecker$$static extends ClassLike {
                new(a0: DefaultParser, cursor: int): DefaultParser$BracketChecker;
              }
              let DefaultParser$BracketChecker: _DefaultParser$BracketChecker$$static;
              interface _DefaultParser$BracketChecker {
                _bracketId(brackets: char[], buffer: DefaultParser$BracketChecker$charSequence, pos: int): int;
                check(buffer: DefaultParser$BracketChecker$charSequence, pos: int): void;
                getMissingClosingBrackets(): string;
                getMissingOpeningBracket(): string;
                getNextClosingBracket(): string;
                getOpenBrackets(): int;
                isClosingBracketMissing(): boolean;
                isOpeningBracketMissing(): boolean;
                _cursor: int;
                _missingOpeningBracket: int;
                _nested: java.util.List<int>;
                _nextClosingBracket: string;
                _openBrackets: int;
                _this$0: DefaultParser;
              }
              interface DefaultParser$BracketChecker extends CombineTypes<[_DefaultParser$BracketChecker, java.lang.Object]> {}
              interface _InputRC$$static extends ClassLike {
                configure(reader: LineReader, url: java.net.URL): void;
                configure(reader: LineReader, is: java.io.InputStream): void;
                configure(reader: LineReader, r: java.io.Reader): void;
                _getKeyFromName(name: string): char;
                _setVar(reader: LineReader, key: string, val: string): void;
                _translateQuoted(keySeq: string): string;
              }
              let InputRC: _InputRC$$static;
              interface _InputRC {
                _parse(br: java.io.BufferedReader): void;
                _reader: LineReader;
              }
              interface InputRC extends CombineTypes<[_InputRC, java.lang.Object]> {}
              interface _KillRing$$static extends ClassLike {
                _DEFAULT_SIZE: int;
                new(size: int): KillRing;
                new(): KillRing;
              }
              let KillRing: _KillRing$$static;
              interface _KillRing {
                add(str: string): void;
                addBackwards(str: string): void;
                lastYank(): boolean;
                _next(): void;
                _prev(): void;
                resetLastKill(): void;
                resetLastYank(): void;
                yank(): string;
                yankPop(): string;
                _head: int;
                _lastKill: boolean;
                _lastYank: boolean;
                _slots: string[];
              }
              interface KillRing extends CombineTypes<[_KillRing, java.lang.Object]> {}
              interface _LineReaderImpl$$static extends ClassLike {
                _wrap(line: ParsedLine): CompletingParsedLine;
                readonly BRACKETED_PASTE_BEGIN: string;
                readonly BRACKETED_PASTE_END: string;
                readonly BRACKETED_PASTE_OFF: string;
                readonly BRACKETED_PASTE_ON: string;
                readonly DEFAULT_AMBIGUOUS_BINDING: long;
                readonly DEFAULT_BELL_STYLE: string;
                readonly DEFAULT_BLINK_MATCHING_PAREN: long;
                readonly DEFAULT_COMMENT_BEGIN: string;
                readonly DEFAULT_COMPLETION_STYLE_BACKGROUND: string;
                readonly DEFAULT_COMPLETION_STYLE_DESCRIPTION: string;
                readonly DEFAULT_COMPLETION_STYLE_GROUP: string;
                readonly DEFAULT_COMPLETION_STYLE_LIST_BACKGROUND: string;
                readonly DEFAULT_COMPLETION_STYLE_LIST_DESCRIPTION: string;
                readonly DEFAULT_COMPLETION_STYLE_LIST_GROUP: string;
                readonly DEFAULT_COMPLETION_STYLE_LIST_SELECTION: string;
                readonly DEFAULT_COMPLETION_STYLE_LIST_STARTING: string;
                readonly DEFAULT_COMPLETION_STYLE_SELECTION: string;
                readonly DEFAULT_COMPLETION_STYLE_STARTING: string;
                readonly DEFAULT_ERRORS: int;
                readonly DEFAULT_FEATURES_MAX_BUFFER_SIZE: int;
                readonly DEFAULT_INDENTATION: int;
                readonly DEFAULT_LIST_MAX: int;
                readonly DEFAULT_MAX_REPEAT_COUNT: int;
                readonly DEFAULT_MENU_LIST_MAX: int;
                readonly DEFAULT_ORIGINAL_GROUP_NAME: string;
                readonly DEFAULT_OTHERS_GROUP_NAME: string;
                readonly DEFAULT_REMOVE_SUFFIX_CHARS: string;
                readonly DEFAULT_SEARCH_TERMINATORS: string;
                readonly DEFAULT_SECONDARY_PROMPT_PATTERN: string;
                readonly DEFAULT_SUGGESTIONS_MIN_BUFFER_SIZE: int;
                readonly DEFAULT_SYSTEM_PROPERTY_PREFIX: string;
                readonly DEFAULT_TAB_WIDTH: int;
                readonly DEFAULT_WORDCHARS: string;
                _DESC_PREFIX: string;
                _DESC_SUFFIX: string;
                readonly FOCUS_IN_SEQ: string;
                readonly FOCUS_OUT_SEQ: string;
                _MARGIN_BETWEEN_COLUMNS: int;
                _MARGIN_BETWEEN_DISPLAY_AND_DESC: int;
                _MENU_LIST_WIDTH: int;
                _MIN_ROWS: int;
                readonly NULL_MASK: char;
                readonly TAB_WIDTH: int;
                new(terminal: jline.terminal.Terminal): LineReaderImpl;
                new(terminal: jline.terminal.Terminal, appName: string): LineReaderImpl;
                new(terminal: jline.terminal.Terminal, appName: string, variables: java.util.Map<string,any>): LineReaderImpl;
              }
              let LineReaderImpl: _LineReaderImpl$$static;
              interface _LineReaderImpl {
                _acceptAndHold(): boolean;
                _acceptAndInferNextHistory(): boolean;
                _acceptLine(): boolean;
                _acceptLineAndDownHistory(): boolean;
                _addBuiltinWidget(widgets: java.util.Map<string,Widget>, name: string, widget: Widget): void;
                addCommandsInBuffer(commands: java.util.Collection<string>): void;
                _addRightPrompt(prompt: jline.utils.AttributedString, line: jline.utils.AttributedString): jline.utils.AttributedString;
                _argumentBase(): boolean;
                _backwardChar(): boolean;
                _backwardDeleteChar(): boolean;
                _backwardDeleteWord(): boolean;
                backwardKillLine(): boolean;
                _backwardKillWord(): boolean;
                _backwardWord(): boolean;
                beep(): boolean;
                beginPaste(): boolean;
                _beginningOfBufferOrHistory(): boolean;
                _beginningOfHistory(): boolean;
                _beginningOfLine(): boolean;
                _beginningOfLineHist(): boolean;
                _bind(map: jline.keymap.KeyMap<Binding>, widget: string, keySeqs: java.lang.Iterable<LineReaderImpl$charSequence>): void;
                _bind(map: jline.keymap.KeyMap<Binding>, widget: string, keySeqs: LineReaderImpl$charSequence[]): void;
                _bind(map: jline.keymap.KeyMap<Binding>, widget: string, ...keySeqs: LineReaderImpl$charSequence[]): void;
                _bind(map: jline.keymap.KeyMap<Binding>, widget: Widget, keySeqs: LineReaderImpl$charSequence[]): void;
                _bind(map: jline.keymap.KeyMap<Binding>, widget: Widget, ...keySeqs: LineReaderImpl$charSequence[]): void;
                _bindArrowKeys(map: jline.keymap.KeyMap<Binding>): void;
                _bindConsoleChars(keyMap: jline.keymap.KeyMap<Binding>, attr: jline.terminal.Attributes): void;
                _bindKeys(emacs: jline.keymap.KeyMap<Binding>): void;
                _buildStyle(str: string): jline.utils.AttributedStyle;
                _builtinWidgets(): java.util.Map<string,Widget>;
                _callNeg(widget: Widget): boolean;
                callWidget(name: string): void;
                _candidateStartPosition(cands: java.util.List<Candidate>): int;
                _capitalizeWord(): boolean;
                _cleanup(): void;
                clear(): boolean;
                _clearChoices(): boolean;
                clearScreen(): boolean;
                _completePrefix(): boolean;
                _completeWord(): boolean;
                _computePost(possible: java.util.List<Candidate>, selection: Candidate, ordered: java.util.List<Candidate>, completed: string): LineReaderImpl$PostResult;
                _computePost(possible: java.util.List<Candidate>, selection: Candidate, ordered: java.util.List<Candidate>, completed: string, wcwidth: java.util.function.Function<string,int>, width: int, autoGroup: boolean, groupName: boolean, rowsFirst: boolean): LineReaderImpl$PostResult;
                _concat(lines: java.util.List<jline.utils.AttributedString>, sb: jline.utils.AttributedStringBuilder): void;
                _copyPrevWord(): boolean;
                copyRegionAsKill(): boolean;
                _deactivateRegion(): boolean;
                defaultKeyMaps(): java.util.Map<string,jline.keymap.KeyMap<Binding>>;
                _deleteChar(): boolean;
                _deleteCharOrList(): boolean;
                _deleteWord(): boolean;
                _digitArgument(): boolean;
                _displayRows(): int;
                _displayRows(status: jline.utils.Status): int;
                _doCleanup(nl: boolean): void;
                _doComplete(lst: LineReaderImpl$CompletionType, useMenu: boolean, prefix: boolean): boolean;
                _doComplete(lst: LineReaderImpl$CompletionType, useMenu: boolean, prefix: boolean, forSuggestion: boolean): boolean;
                _doCopyKillRegion(kill: boolean): boolean;
                _doDisplay(): void;
                _doGetSearchPattern(): string;
                _doInsertComment(isViMode: boolean): boolean;
                _doList(possible: java.util.List<Candidate>, completed: string, runLoop: boolean, escaper: java.util.function.BiFunction<LineReaderImpl$charSequence,boolean,LineReaderImpl$charSequence>): boolean;
                _doList(possible: java.util.List<Candidate>, completed: string, runLoop: boolean, escaper: java.util.function.BiFunction<LineReaderImpl$charSequence,boolean,LineReaderImpl$charSequence>, forSuggestion: boolean): boolean;
                _doLowercaseVersion(): boolean;
                _doMenu(original: java.util.List<Candidate>, completed: string, escaper: java.util.function.BiFunction<LineReaderImpl$charSequence,boolean,LineReaderImpl$charSequence>): boolean;
                _doReadBinding<T>(keys: jline.keymap.KeyMap<T>, local: jline.keymap.KeyMap<T>): T;
                _doReadStringUntil(sequence: string): string;
                _doSearchHistory(backward: boolean): boolean;
                _doViDeleteOrChange(startPos: int, endPos: int, isChange: boolean): boolean;
                _doViMatchBracket(): boolean;
                _downCaseWord(): boolean;
                _downHistory(): boolean;
                _downLine(): boolean;
                _downLineOrHistory(): boolean;
                _downLineOrSearch(): boolean;
                dumb(): jline.keymap.KeyMap<Binding>;
                editAndAddInBuffer(file: java.io.File): void;
                _editAndExecute(): boolean;
                emacs(): jline.keymap.KeyMap<Binding>;
                _emacsBackwardWord(): boolean;
                _emacsEditingMode(): boolean;
                _emacsForwardWord(): boolean;
                _endOfBufferOrHistory(): boolean;
                _endOfHistory(): boolean;
                _endOfLine(): boolean;
                _endOfLineHist(): boolean;
                _exchangePointAndMark(): boolean;
                _expandHistory(): boolean;
                _expandOrComplete(): boolean;
                _expandOrCompletePrefix(): boolean;
                _expandPromptPattern(pattern: string, padToWidth: int, message: string, line: int): jline.utils.AttributedString;
                _expandWord(): boolean;
                _findbol(): int;
                _findeol(): int;
                _finish(str: string): string;
                _finishBuffer(): string;
                flush(): void;
                focusIn(): boolean;
                focusOut(): boolean;
                _forwardChar(): boolean;
                _forwardWord(): boolean;
                _freshLine(): boolean;
                _fromAnsi(str: string): jline.utils.AttributedString;
                getAppName(): string;
                getAutosuggestion(): LineReader$SuggestionType;
                _getBoolean(name: string, def: boolean): boolean;
                _getBracketType(ch: int): int;
                getBuffer(): Buffer;
                getBuiltinWidgets(): java.util.Map<string,Widget>;
                _getCandidateComparator(caseInsensitive: boolean, word: string): java.util.Comparator<Candidate>;
                getCompleter(): Completer;
                _getCompletionStyle(name: string, value: string): jline.utils.AttributedStyle;
                _getCompletionStyleBackground(menuList: boolean): jline.utils.AttributedStyle;
                _getCompletionStyleBackground(): jline.utils.AttributedStyle;
                _getCompletionStyleDescription(menuList: boolean): jline.utils.AttributedStyle;
                _getCompletionStyleDescription(): jline.utils.AttributedStyle;
                _getCompletionStyleGroup(menuList: boolean): jline.utils.AttributedStyle;
                _getCompletionStyleGroup(): jline.utils.AttributedStyle;
                _getCompletionStyleListBackground(): jline.utils.AttributedStyle;
                _getCompletionStyleListDescription(): jline.utils.AttributedStyle;
                _getCompletionStyleListGroup(): jline.utils.AttributedStyle;
                _getCompletionStyleListSelection(): jline.utils.AttributedStyle;
                _getCompletionStyleListStarting(): jline.utils.AttributedStyle;
                _getCompletionStyleSelection(menuList: boolean): jline.utils.AttributedStyle;
                _getCompletionStyleSelection(): jline.utils.AttributedStyle;
                _getCompletionStyleStarting(menuList: boolean): jline.utils.AttributedStyle;
                _getCompletionStyleStarting(): jline.utils.AttributedStyle;
                getDisplayedBufferWithPrompts(secondaryPrompts: java.util.List<jline.utils.AttributedString>): jline.utils.AttributedString;
                getExpander(): Expander;
                _getFirstWord(): LineReaderImpl$charSequence;
                _getGroupComparator(): java.util.Comparator<string>;
                _getHighlightedBuffer(buffer: string): jline.utils.AttributedString;
                getHighlighter(): Highlighter;
                getHistory(): History;
                _getInt(name: string, def: int): int;
                getKeyMap(): string;
                getKeyMaps(): java.util.Map<string,jline.keymap.KeyMap<Binding>>;
                getKeys(): jline.keymap.KeyMap<Binding>;
                getLastBinding(): string;
                _getLong(name: string, def: long): long;
                _getOriginalGroupName(): string;
                _getOthersGroupName(): string;
                getParsedLine(): ParsedLine;
                getParser(): Parser;
                getRegionActive(): LineReader$RegionType;
                getRegionMark(): int;
                getSearchTerm(): string;
                _getString(name: string, def: string): string;
                _getTabWidth(): int;
                getTailTip(): string;
                getTerminal(): jline.terminal.Terminal;
                getVariable(name: string): any;
                getVariables(): java.util.Map<string,any>;
                _getViSearchString(): boolean;
                _getWidget(binding: any): Widget;
                getWidgets(): java.util.Map<string,Widget>;
                _handleSignal(signal: jline.terminal.Terminal$Signal): void;
                _historyIncrementalSearchBackward(): boolean;
                _historyIncrementalSearchForward(): boolean;
                _historySearchBackward(): boolean;
                _historySearchForward(): boolean;
                _indention(nb: int, sb: LineReaderImpl$stringBuilder): void;
                _insertClose(s: string): boolean;
                _insertCloseCurly(): boolean;
                _insertCloseParen(): boolean;
                _insertCloseSquare(): boolean;
                _insertComment(): boolean;
                _insertSecondaryPrompts(str: jline.utils.AttributedString, prompts: java.util.List<jline.utils.AttributedString>): jline.utils.AttributedString;
                _insertSecondaryPrompts(strAtt: jline.utils.AttributedString, prompts: java.util.List<jline.utils.AttributedString>, computePrompts: boolean): jline.utils.AttributedString;
                _insertTab(): boolean;
                _isAlpha(c: int): boolean;
                _isDelimiter(c: int): boolean;
                _isInViChangeOperation(): boolean;
                _isInViCmdMode(): boolean;
                _isInViMoveOperation(): boolean;
                isKeyMap(name: string): boolean;
                isReading(): boolean;
                isSet(option: LineReader$Option): boolean;
                _isTerminalDumb(): boolean;
                _isViAlphaNum(c: int): boolean;
                _isWhitespace(c: int): boolean;
                _isWord(c: int): boolean;
                _key(capability: jline.utils.InfoCmp$Capability): string;
                _killBuffer(): boolean;
                killLine(): boolean;
                killRegion(): boolean;
                _killWholeLine(): boolean;
                _killWord(): boolean;
                _listChoices(): boolean;
                _listChoices(forSuggestion: boolean): boolean;
                _matchPreviousCommand(buffer: string): string;
                _matches(p: java.util.regex.Pattern, line: string, index: int): java.util.List<LineReaderImpl$Pair<int,int>>;
                menu(): jline.keymap.KeyMap<Binding>;
                _menuComplete(): boolean;
                _menuExpandOrComplete(): boolean;
                _mergeCandidates(possible: java.util.List<Candidate>): void;
                mouse(): boolean;
                _moveHistory(next: boolean, count: int): boolean;
                _moveHistory(next: boolean): boolean;
                _namedWidget(name: string, widget: Widget): Widget;
                _negArgument(): boolean;
                _nextBindingIsComplete(): boolean;
                option(option: LineReader$Option, value: boolean): LineReader;
                _overwriteMode(): boolean;
                peekCharacter(timeout: long): int;
                _print(str: string): void;
                printAbove(str: string): void;
                printAbove(str: jline.utils.AttributedString): void;
                _println(s: string): void;
                _println(): void;
                _promptLines(): int;
                _pushBackBinding(): void;
                _pushBackBinding(skip: boolean): void;
                putString(str: LineReaderImpl$charSequence): void;
                _quit(): boolean;
                _quotedInsert(): boolean;
                readBinding(keys: jline.keymap.KeyMap<Binding>): Binding;
                readBinding(keys: jline.keymap.KeyMap<Binding>, local: jline.keymap.KeyMap<Binding>): Binding;
                readCharacter(): int;
                readLine(): string;
                readLine(mask: LineReaderImpl$character): string;
                readLine(prompt: string): string;
                readLine(prompt: string, mask: LineReaderImpl$character): string;
                readLine(prompt: string, mask: LineReaderImpl$character, buffer: string): string;
                readLine(prompt: string, rightPrompt: string, mask: LineReaderImpl$character, buffer: string): string;
                readLine(prompt: string, rightPrompt: string, maskingCallback: MaskingCallback, buffer: string): string;
                readMouseEvent(): jline.terminal.MouseEvent;
                _rebind(keyMap: jline.keymap.KeyMap<Binding>, operation: string, prevBinding: string, newBinding: char): void;
                redisplay(): boolean;
                _redisplay(flush: boolean): void;
                _redo(): boolean;
                redrawLine(): boolean;
                _removeIndentation(): void;
                runMacro(macro: string): void;
                safe(): jline.keymap.KeyMap<Binding>;
                searchBackwards(searchTerm: string, startIndex: int): int;
                searchBackwards(searchTerm: string): int;
                searchBackwards(searchTerm: string, startIndex: int, startsWith: boolean): int;
                searchForwards(searchTerm: string, startIndex: int, startsWith: boolean): int;
                searchForwards(searchTerm: string, startIndex: int): int;
                searchForwards(searchTerm: string): int;
                _selfInsert(): boolean;
                _selfInsertUnmeta(): boolean;
                _sendBreak(): boolean;
                setAutosuggestion(type: LineReader$SuggestionType): void;
                _setBuffer(buffer: Buffer): void;
                _setBuffer(buffer: string): void;
                setCompleter(completer: Completer): void;
                setCompletionMatcher(completionMatcher: CompletionMatcher): void;
                setExpander(expander: Expander): void;
                setHighlighter(highlighter: Highlighter): void;
                setHistory(history: History): void;
                setKeyMap(name: string): boolean;
                _setMarkCommand(): boolean;
                setOpt(option: LineReader$Option): void;
                setParser(parser: Parser): void;
                setPrompt(prompt: string): void;
                setRightPrompt(rightPrompt: string): void;
                setTailTip(tailTip: string): void;
                setVariable(name: string, value: any): void;
                _switchCase(ch: int): int;
                _toColumns(items: java.util.List<any>, selection: Candidate, completed: string, wcwidth: java.util.function.Function<string,int>, width: int, rowsFirst: boolean): LineReaderImpl$PostResult;
                _toColumns(items: any, width: int, maxWidth: int, sb: jline.utils.AttributedStringBuilder, selection: Candidate, completed: string, rowsFirst: boolean, doMenuList: boolean, out: int[]): void;
                _transposeChars(): boolean;
                _transposeWords(): boolean;
                _undefinedKey(): boolean;
                _undo(): boolean;
                _universalArgument(): boolean;
                unsetOpt(option: LineReader$Option): void;
                _upCaseWord(): boolean;
                _upHistory(): boolean;
                _upLine(): boolean;
                _upLineOrHistory(): boolean;
                _upLineOrSearch(): boolean;
                variable(name: string, value: any): LineReader;
                _viAddEol(): boolean;
                _viAddNext(): boolean;
                _viBackwardBlankWord(): boolean;
                _viBackwardBlankWordEnd(): boolean;
                _viBackwardChar(): boolean;
                _viBackwardDeleteChar(): boolean;
                _viBackwardKillWord(): boolean;
                _viBackwardWord(): boolean;
                _viBackwardWordEnd(): boolean;
                _viBeginningOfLine(): boolean;
                _viChange(): boolean;
                _viChange(startPos: int, endPos: int): boolean;
                _viChangeEol(): boolean;
                _viChangeWholeLine(): boolean;
                viCmd(): jline.keymap.KeyMap<Binding>;
                _viCmdMode(): boolean;
                _viDelete(): boolean;
                _viDeleteChangeYankToRemap(op: string): string;
                _viDeleteChar(): boolean;
                _viDeleteTo(startPos: int, endPos: int): boolean;
                _viDigitOrBeginningOfLine(): boolean;
                _viDownLineOrHistory(): boolean;
                _viEndOfLine(): boolean;
                _viFindNextChar(): boolean;
                _viFindNextCharSkip(): boolean;
                _viFindPrevChar(): boolean;
                _viFindPrevCharSkip(): boolean;
                _viFirstNonBlank(): boolean;
                _viForwardBlankWord(): boolean;
                _viForwardBlankWordEnd(): boolean;
                _viForwardChar(): boolean;
                _viForwardWord(): boolean;
                _viForwardWordEnd(): boolean;
                _viHistorySearchBackward(): boolean;
                _viHistorySearchForward(): boolean;
                _viInsert(): boolean;
                _viInsertBol(): boolean;
                _viInsertComment(): boolean;
                viInsertion(): jline.keymap.KeyMap<Binding>;
                _viJoin(): boolean;
                _viKillEol(): boolean;
                _viKillWholeLine(): boolean;
                _viMatchBracket(): boolean;
                _viOpenLineAbove(): boolean;
                _viOpenLineBelow(): boolean;
                viOpp(): jline.keymap.KeyMap<Binding>;
                _viPutAfter(): boolean;
                _viPutBefore(): boolean;
                _viRepeatFind(): boolean;
                _viRepeatSearch(): boolean;
                _viReplaceChars(): boolean;
                _viRevRepeatFind(): boolean;
                _viRevRepeatSearch(): boolean;
                _viSwapCase(): boolean;
                _viUpLineOrHistory(): boolean;
                _viYankTo(): boolean;
                _viYankTo(startPos: int, endPos: int): boolean;
                _viYankWholeLine(): boolean;
                _vifindchar(repeat: boolean): boolean;
                _vigetkey(): int;
                _visibleDisplayRows(): int;
                visual(): jline.keymap.KeyMap<Binding>;
                _visualLineMode(): boolean;
                _visualMode(): boolean;
                _whatCursorPosition(): boolean;
                yank(): boolean;
                yankPop(): boolean;
                zeroOut(): void;
                _alternateIn: string;
                _alternateOut: string;
                _appName: string;
                _autosuggestion: LineReader$SuggestionType;
                _bindingReader: jline.keymap.BindingReader;
                _buf: Buffer;
                _builtinWidgets: java.util.Map<string,Widget>;
                _candidateStartPosition: int;
                _commandsBuffer: java.util.List<string>;
                _completer: Completer;
                _completionMatcher: CompletionMatcher;
                _count: int;
                _display: jline.utils.Display;
                _doAutosuggestion: boolean;
                _expander: Expander;
                _findChar: int;
                _findDir: int;
                _findTailAdd: int;
                _forceChar: boolean;
                _forceLine: boolean;
                _highlighter: Highlighter;
                _history: History;
                _historyBuffer: Buffer;
                _isArgDigit: boolean;
                _isUndo: boolean;
                _keyMap: string;
                _keyMaps: java.util.Map<string,jline.keymap.KeyMap<Binding>>;
                _killRing: KillRing;
                _lock: java.util.concurrent.locks.ReentrantLock;
                _maskingCallback: MaskingCallback;
                _modifiedHistory: java.util.Map<int,string>;
                _mult: int;
                _nextCommandFromHistory: boolean;
                _nextHistoryId: int;
                _options: java.util.Map<LineReader$Option,boolean>;
                _overTyping: boolean;
                _parsedLine: ParsedLine;
                _parser: Parser;
                _post: java.util.function.Supplier<jline.utils.AttributedString>;
                _prompt: jline.utils.AttributedString;
                _reading: boolean;
                _regionActive: LineReader$RegionType;
                _regionMark: int;
                _repeatCount: int;
                _rightPrompt: jline.utils.AttributedString;
                _searchBackward: boolean;
                _searchBuffer: impl$charSequence;
                _searchDir: int;
                _searchFailing: boolean;
                _searchIndex: int;
                _searchString: string;
                _searchTerm: impl$stringBuffer;
                _size: jline.terminal.Size;
                _skipRedisplay: boolean;
                _smallTerminalOffset: int;
                _startedReading: java.util.concurrent.atomic.AtomicBoolean;
                _state: LineReaderImpl$State;
                _tailTip: string;
                _terminal: jline.terminal.Terminal;
                _undo: UndoTree<Buffer>;
                _universal: int;
                _variables: java.util.Map<string,any>;
                _viMoveMode: LineReaderImpl$ViMoveMode;
                _widgets: java.util.Map<string,Widget>;
                _yankBuffer: string;
              }
              interface LineReaderImpl extends CombineTypes<[_LineReaderImpl, jdk.internal.org.jline.reader.LineReader, java.lang.Object, java.io.Flushable]> {}
              interface _LineReaderImpl$BellType$$static extends ClassLike {
                valueOf(name: string): LineReaderImpl$BellType;
                values(): LineReaderImpl$BellType[];
                readonly AUDIBLE: LineReaderImpl$BellType;
                readonly NONE: LineReaderImpl$BellType;
                readonly VISIBLE: LineReaderImpl$BellType;
              }
              let LineReaderImpl$BellType: _LineReaderImpl$BellType$$static;
              interface _LineReaderImpl$BellType {
              }
              interface LineReaderImpl$BellType extends CombineTypes<[_LineReaderImpl$BellType]> {}
              interface _LineReaderImpl$CompletingWord$$static extends ClassLike {
                new(word: string): LineReaderImpl$CompletingWord;
              }
              let LineReaderImpl$CompletingWord: _LineReaderImpl$CompletingWord$$static;
              interface _LineReaderImpl$CompletingWord {
                cursor(): int;
                escape(candidate: LineReaderImpl$CompletingWord$charSequence, complete: boolean): LineReaderImpl$CompletingWord$charSequence;
                line(): string;
                rawWordCursor(): int;
                rawWordLength(): int;
                word(): string;
                wordCursor(): int;
                wordIndex(): int;
                words(): java.util.List<string>;
                _word: string;
              }
              interface LineReaderImpl$CompletingWord extends CombineTypes<[_LineReaderImpl$CompletingWord, jdk.internal.org.jline.reader.CompletingParsedLine, java.lang.Object]> {}
              interface _LineReaderImpl$CompletionType$$static extends ClassLike {
                valueOf(name: string): LineReaderImpl$CompletionType;
                values(): LineReaderImpl$CompletionType[];
                readonly Complete: LineReaderImpl$CompletionType;
                readonly Expand: LineReaderImpl$CompletionType;
                readonly ExpandComplete: LineReaderImpl$CompletionType;
                readonly List: LineReaderImpl$CompletionType;
              }
              let LineReaderImpl$CompletionType: _LineReaderImpl$CompletionType$$static;
              interface _LineReaderImpl$CompletionType {
              }
              interface LineReaderImpl$CompletionType extends CombineTypes<[_LineReaderImpl$CompletionType]> {}
              interface _LineReaderImpl$MenuSupport$$static extends ClassLike {
                new(a0: java.util.List<Candidate>, original: string, completed: java.util.function.BiFunction<LineReaderImpl$MenuSupport$charSequence,boolean,LineReaderImpl$MenuSupport$charSequence>): LineReaderImpl$MenuSupport;
              }
              let LineReaderImpl$MenuSupport: _LineReaderImpl$MenuSupport$$static;
              interface _LineReaderImpl$MenuSupport {
                completion(): Candidate;
                down(): void;
                get(): jline.utils.AttributedString;
                get(): any;
                left(): void;
                _major(step: int): void;
                _minor(step: int): void;
                next(): void;
                previous(): void;
                right(): void;
                up(): void;
                _update(): void;
                _columns: int;
                _completed: string;
                _computed: jline.utils.AttributedString;
                _escaper: java.util.function.BiFunction<impl$charSequence,boolean,impl$charSequence>;
                _lines: int;
                _possible: java.util.List<Candidate>;
                _selection: int;
                _this$0: LineReaderImpl;
                _topLine: int;
                _word: string;
              }
              interface LineReaderImpl$MenuSupport extends CombineTypes<[_LineReaderImpl$MenuSupport, java.lang.Object, java.util.function.Supplier<jline.utils.AttributedString>]> {}
              interface _LineReaderImpl$Pair$$static<U,V> extends ClassLike {
                new(u: U, v: V): LineReaderImpl$Pair<U,V>;
              }
              let LineReaderImpl$Pair: _LineReaderImpl$Pair$$static<U,V>;
              interface _LineReaderImpl$Pair<U,V> {
                getU(): U;
                getV(): V;
                _u: U;
                _v: V;
              }
              interface LineReaderImpl$Pair<U,V> extends CombineTypes<[_LineReaderImpl$Pair<U,V>, java.lang.Object]> {}
              interface _LineReaderImpl$PostResult$$static extends ClassLike {
                new(post: jline.utils.AttributedString, lines: int, selectedLine: int): LineReaderImpl$PostResult;
              }
              let LineReaderImpl$PostResult: _LineReaderImpl$PostResult$$static;
              interface _LineReaderImpl$PostResult {
                _lines: int;
                _post: jline.utils.AttributedString;
                _selectedLine: int;
              }
              interface LineReaderImpl$PostResult extends CombineTypes<[_LineReaderImpl$PostResult, java.lang.Object]> {}
              interface _LineReaderImpl$State$$static extends ClassLike {
                valueOf(name: string): LineReaderImpl$State;
                values(): LineReaderImpl$State[];
                readonly DONE: LineReaderImpl$State;
                readonly EOF: LineReaderImpl$State;
                readonly IGNORE: LineReaderImpl$State;
                readonly INTERRUPT: LineReaderImpl$State;
                readonly NORMAL: LineReaderImpl$State;
              }
              let LineReaderImpl$State: _LineReaderImpl$State$$static;
              interface _LineReaderImpl$State {
              }
              interface LineReaderImpl$State extends CombineTypes<[_LineReaderImpl$State]> {}
              interface _LineReaderImpl$TerminalLine$$static extends ClassLike {
                new(line: string, startPos: int, width: int): LineReaderImpl$TerminalLine;
              }
              let LineReaderImpl$TerminalLine: _LineReaderImpl$TerminalLine$$static;
              interface _LineReaderImpl$TerminalLine {
                getEndLine(): string;
                getStartPos(): int;
                _endLine: string;
                _startPos: int;
              }
              interface LineReaderImpl$TerminalLine extends CombineTypes<[_LineReaderImpl$TerminalLine, java.lang.Object]> {}
              interface _LineReaderImpl$ViMoveMode$$static extends ClassLike {
                valueOf(name: string): LineReaderImpl$ViMoveMode;
                values(): LineReaderImpl$ViMoveMode[];
                readonly CHANGE: LineReaderImpl$ViMoveMode;
                readonly DELETE: LineReaderImpl$ViMoveMode;
                readonly NORMAL: LineReaderImpl$ViMoveMode;
                readonly YANK: LineReaderImpl$ViMoveMode;
              }
              let LineReaderImpl$ViMoveMode: _LineReaderImpl$ViMoveMode$$static;
              interface _LineReaderImpl$ViMoveMode {
              }
              interface LineReaderImpl$ViMoveMode extends CombineTypes<[_LineReaderImpl$ViMoveMode]> {}
              interface _ReaderUtils$$static extends ClassLike {
                distance(word: string, cand: string): int;
                getBoolean(reader: LineReader, name: string, def: boolean): boolean;
                getInt(reader: LineReader, name: string, def: int): int;
                getLong(reader: LineReader, name: string, def: long): long;
                getString(reader: LineReader, name: string, def: string): string;
                isSet(reader: LineReader, option: LineReader$Option): boolean;
              }
              let ReaderUtils: _ReaderUtils$$static;
              interface _ReaderUtils {
              }
              interface ReaderUtils extends CombineTypes<[_ReaderUtils, java.lang.Object]> {}
              interface _SimpleMaskingCallback$$static extends ClassLike {
                new(mask: SimpleMaskingCallback$character): SimpleMaskingCallback;
              }
              let SimpleMaskingCallback: _SimpleMaskingCallback$$static;
              interface _SimpleMaskingCallback {
                display(line: string): string;
                history(line: string): string;
                _mask: impl$character;
              }
              interface SimpleMaskingCallback extends CombineTypes<[_SimpleMaskingCallback, jdk.internal.org.jline.reader.MaskingCallback, java.lang.Object]> {}
              interface _UndoTree$$static<T> extends ClassLike {
                new(s: java.util.function.Consumer<T>): UndoTree<T>;
              }
              let UndoTree: _UndoTree$$static<T>;
              interface _UndoTree<T> {
                canRedo(): boolean;
                canUndo(): boolean;
                clear(): void;
                newState(state: T): void;
                redo(): void;
                undo(): void;
                _current: impl$Node;
                _parent: impl$Node;
                _state: java.util.function.Consumer<T>;
              }
              interface UndoTree<T> extends CombineTypes<[_UndoTree<T>, java.lang.Object]> {}
              interface _UndoTree$Node$$static extends ClassLike {
                new(a0: T): UndoTree$Node;
              }
              let UndoTree$Node: _UndoTree$Node$$static;
              interface _UndoTree$Node {
                _left: impl$Node;
                _right: impl$Node;
                _state: T;
              }
              interface UndoTree$Node extends CombineTypes<[_UndoTree$Node, java.lang.Object]> {}
            }
            interface _Binding$$static extends ClassLike {
            }
            let Binding: _Binding$$static;
            interface _Binding {
            }
            interface Binding extends CombineTypes<[_Binding, java.lang.Object]> {}
            interface _Buffer$$static extends ClassLike {
            }
            let Buffer: _Buffer$$static;
            interface _Buffer {
              atChar(a0: int): int;
              backspace(): boolean;
              backspace(a0: int): int;
              clear(): boolean;
              copy(): Buffer;
              copyFrom(a0: Buffer): void;
              currChar(): int;
              currChar(a0: int): boolean;
              cursor(): int;
              cursor(a0: int): boolean;
              delete(): boolean;
              delete(a0: int): int;
              down(): boolean;
              length(): int;
              move(a0: int): int;
              moveXY(a0: int, a1: int): boolean;
              nextChar(): int;
              prevChar(): int;
              substring(a0: int): string;
              substring(a0: int, a1: int): string;
              toString(): string;
              up(): boolean;
              upToCursor(): string;
              write(a0: int): void;
              write(a0: int, a1: boolean): void;
              write(a0: Buffer$charSequence): void;
              write(a0: Buffer$charSequence, a1: boolean): void;
              zeroOut(): void;
            }
            interface Buffer extends CombineTypes<[_Buffer, java.lang.Object]> {}
            interface _Candidate$$static extends ClassLike {
              new(value: string): Candidate;
              new(value: string, displ: string, group: string, descr: string, suffix: string, key: string, complete: boolean, sort: int): Candidate;
              new(value: string, displ: string, group: string, descr: string, suffix: string, key: string, complete: boolean): Candidate;
            }
            let Candidate: _Candidate$$static;
            interface _Candidate {
              compareTo(o: Candidate): int;
              compareTo(a0: any): int;
              complete(): boolean;
              descr(): string;
              displ(): string;
              equals(o: any): boolean;
              group(): string;
              hashCode(): int;
              key(): string;
              sort(): int;
              suffix(): string;
              toString(): string;
              value(): string;
              _complete: boolean;
              _descr: string;
              _displ: string;
              _group: string;
              _key: string;
              _sort: int;
              _suffix: string;
              _value: string;
            }
            interface Candidate extends CombineTypes<[_Candidate, java.lang.Object, java.lang.Comparable<Candidate>]> {}
            interface _Completer$$static extends ClassLike {
            }
            let Completer: _Completer$$static;
            interface _Completer {
              complete(a0: LineReader, a1: ParsedLine, a2: java.util.List<Candidate>): void;
(a0: LineReader, a1: ParsedLine, a2: java.util.List<Candidate>): void;
            }
            interface Completer extends CombineTypes<[_Completer, java.lang.Object]> {}
            interface _CompletingParsedLine$$static extends ClassLike {
            }
            let CompletingParsedLine: _CompletingParsedLine$$static;
            interface _CompletingParsedLine {
              escape(a0: CompletingParsedLine$charSequence, a1: boolean): CompletingParsedLine$charSequence;
              rawWordCursor(): int;
              rawWordLength(): int;
            }
            interface CompletingParsedLine extends CombineTypes<[_CompletingParsedLine, java.lang.Object, jdk.internal.org.jline.reader.ParsedLine]> {}
            interface _CompletionMatcher$$static extends ClassLike {
            }
            let CompletionMatcher: _CompletionMatcher$$static;
            interface _CompletionMatcher {
              compile(a0: java.util.Map<LineReader$Option,boolean>, a1: boolean, a2: CompletingParsedLine, a3: boolean, a4: int, a5: string): void;
              exactMatch(): Candidate;
              getCommonPrefix(): string;
              matches(a0: java.util.List<Candidate>): java.util.List<Candidate>;
            }
            interface CompletionMatcher extends CombineTypes<[_CompletionMatcher, java.lang.Object]> {}
            interface _EOFError$$static extends ClassLike {
              _serialVersionUID: long;
              new(line: int, column: int, message: string): EOFError;
              new(line: int, column: int, message: string, missing: string): EOFError;
              new(line: int, column: int, message: string, missing: string, openBrackets: int, nextClosingBracket: string): EOFError;
            }
            let EOFError: _EOFError$$static;
            interface _EOFError {
              getMissing(): string;
              getNextClosingBracket(): string;
              getOpenBrackets(): int;
              _missing: string;
              _nextClosingBracket: string;
              _openBrackets: int;
            }
            interface EOFError extends CombineTypes<[_EOFError, jdk.internal.org.jline.reader.SyntaxError]> {}
            interface _Editor$$static extends ClassLike {
            }
            let Editor: _Editor$$static;
            interface _Editor {
              open(a0: java.util.List<string>): void;
              run(): void;
              setRestricted(a0: boolean): void;
            }
            interface Editor extends CombineTypes<[_Editor, java.lang.Object]> {}
            interface _EndOfFileException$$static extends ClassLike {
              _serialVersionUID: long;
              new(): EndOfFileException;
              new(message: string): EndOfFileException;
              new(message: string, cause: java.lang.Throwable): EndOfFileException;
              new(cause: java.lang.Throwable): EndOfFileException;
              new(message: string, cause: java.lang.Throwable, enableSuppression: boolean, writableStackTrace: boolean): EndOfFileException;
            }
            let EndOfFileException: _EndOfFileException$$static;
            interface _EndOfFileException {
              getPartialLine(): string;
              partialLine(partialLine: string): EndOfFileException;
              _partialLine: string;
            }
            interface EndOfFileException extends CombineTypes<[_EndOfFileException, java.lang.RuntimeException]> {}
            interface _Expander$$static extends ClassLike {
            }
            let Expander: _Expander$$static;
            interface _Expander {
              expandHistory(a0: History, a1: string): string;
              expandVar(a0: string): string;
            }
            interface Expander extends CombineTypes<[_Expander, java.lang.Object]> {}
            interface _Highlighter$$static extends ClassLike {
            }
            let Highlighter: _Highlighter$$static;
            interface _Highlighter {
              highlight(a0: LineReader, a1: string): jline.utils.AttributedString;
              refresh(reader: LineReader): void;
              setErrorIndex(a0: int): void;
              setErrorPattern(a0: java.util.regex.Pattern): void;
            }
            interface Highlighter extends CombineTypes<[_Highlighter, java.lang.Object]> {}
            interface _History$$static extends ClassLike {
            }
            let History: _History$$static;
            interface _History {
              add(line: string): void;
              add(a0: java.time.Instant, a1: string): void;
              append(a0: java.nio.file.Path, a1: boolean): void;
              attach(a0: LineReader): void;
              current(): string;
              first(): int;
              get(a0: int): string;
              index(): int;
              isEmpty(): boolean;
              isPersistable(entry: History$Entry): boolean;
              iterator(a0: int): java.util.ListIterator<History$Entry>;
              iterator(): java.util.ListIterator<History$Entry>;
              iterator(): java.util.Iterator;
              last(): int;
              load(): void;
              moveTo(a0: int): boolean;
              moveToEnd(): void;
              moveToFirst(): boolean;
              moveToLast(): boolean;
              next(): boolean;
              previous(): boolean;
              purge(): void;
              read(a0: java.nio.file.Path, a1: boolean): void;
              resetIndex(): void;
              reverseIterator(): java.util.Iterator<History$Entry>;
              reverseIterator(index: int): java.util.Iterator<History$Entry>;
              save(): void;
              size(): int;
              write(a0: java.nio.file.Path, a1: boolean): void;
            }
            interface History extends CombineTypes<[_History, java.lang.Iterable<History$Entry>, java.lang.Object]> {}
            interface _History$Entry$$static extends ClassLike {
            }
            let History$Entry: _History$Entry$$static;
            interface _History$Entry {
              index(): int;
              line(): string;
              time(): java.time.Instant;
            }
            interface History$Entry extends CombineTypes<[_History$Entry, java.lang.Object]> {}
            interface _LineReader$$static extends ClassLike {
              readonly ACCEPT_AND_HOLD: string;
              readonly ACCEPT_AND_INFER_NEXT_HISTORY: string;
              readonly ACCEPT_LINE: string;
              readonly ACCEPT_LINE_AND_DOWN_HISTORY: string;
              readonly AMBIGUOUS_BINDING: string;
              readonly ARGUMENT_BASE: string;
              readonly BACKWARD_CHAR: string;
              readonly BACKWARD_DELETE_CHAR: string;
              readonly BACKWARD_DELETE_WORD: string;
              readonly BACKWARD_KILL_LINE: string;
              readonly BACKWARD_KILL_WORD: string;
              readonly BACKWARD_WORD: string;
              readonly BEEP: string;
              readonly BEGINNING_OF_BUFFER_OR_HISTORY: string;
              readonly BEGINNING_OF_HISTORY: string;
              readonly BEGINNING_OF_LINE: string;
              readonly BEGINNING_OF_LINE_HIST: string;
              readonly BEGIN_PASTE: string;
              readonly BELL_STYLE: string;
              readonly BIND_TTY_SPECIAL_CHARS: string;
              readonly BLINK_MATCHING_PAREN: string;
              readonly CALLBACK_FINISH: string;
              readonly CALLBACK_INIT: string;
              readonly CALLBACK_KEYMAP: string;
              readonly CAPITALIZE_WORD: string;
              readonly CHARACTER_SEARCH: string;
              readonly CHARACTER_SEARCH_BACKWARD: string;
              readonly CLEAR: string;
              readonly CLEAR_SCREEN: string;
              readonly COMMENT_BEGIN: string;
              readonly COMPLETE_PREFIX: string;
              readonly COMPLETE_WORD: string;
              readonly COMPLETION_STYLE_BACKGROUND: string;
              readonly COMPLETION_STYLE_DESCRIPTION: string;
              readonly COMPLETION_STYLE_GROUP: string;
              readonly COMPLETION_STYLE_LIST_BACKGROUND: string;
              readonly COMPLETION_STYLE_LIST_DESCRIPTION: string;
              readonly COMPLETION_STYLE_LIST_GROUP: string;
              readonly COMPLETION_STYLE_LIST_SELECTION: string;
              readonly COMPLETION_STYLE_LIST_STARTING: string;
              readonly COMPLETION_STYLE_SELECTION: string;
              readonly COMPLETION_STYLE_STARTING: string;
              readonly COPY_PREV_WORD: string;
              readonly COPY_REGION_AS_KILL: string;
              readonly DELETE_CHAR: string;
              readonly DELETE_CHAR_OR_LIST: string;
              readonly DELETE_WORD: string;
              readonly DIGIT_ARGUMENT: string;
              readonly DISABLE_COMPLETION: string;
              readonly DISABLE_HISTORY: string;
              readonly DOWN_CASE_WORD: string;
              readonly DOWN_HISTORY: string;
              readonly DOWN_LINE: string;
              readonly DOWN_LINE_OR_HISTORY: string;
              readonly DOWN_LINE_OR_SEARCH: string;
              readonly DO_LOWERCASE_VERSION: string;
              readonly DUMB: string;
              readonly EDITING_MODE: string;
              readonly EDIT_AND_EXECUTE_COMMAND: string;
              readonly EMACS: string;
              readonly EMACS_BACKWARD_WORD: string;
              readonly EMACS_EDITING_MODE: string;
              readonly EMACS_FORWARD_WORD: string;
              readonly END_OF_BUFFER_OR_HISTORY: string;
              readonly END_OF_HISTORY: string;
              readonly END_OF_LINE: string;
              readonly END_OF_LINE_HIST: string;
              readonly ERRORS: string;
              readonly EXCHANGE_POINT_AND_MARK: string;
              readonly EXECUTE_NAMED_CMD: string;
              readonly EXPAND_HISTORY: string;
              readonly EXPAND_OR_COMPLETE: string;
              readonly EXPAND_OR_COMPLETE_PREFIX: string;
              readonly EXPAND_WORD: string;
              readonly FEATURES_MAX_BUFFER_SIZE: string;
              readonly FOCUS_IN: string;
              readonly FOCUS_OUT: string;
              readonly FORWARD_CHAR: string;
              readonly FORWARD_WORD: string;
              readonly FRESH_LINE: string;
              readonly HISTORY_BEGINNING_SEARCH_BACKWARD: string;
              readonly HISTORY_BEGINNING_SEARCH_FORWARD: string;
              readonly HISTORY_FILE: string;
              readonly HISTORY_FILE_SIZE: string;
              readonly HISTORY_IGNORE: string;
              readonly HISTORY_INCREMENTAL_PATTERN_SEARCH_BACKWARD: string;
              readonly HISTORY_INCREMENTAL_PATTERN_SEARCH_FORWARD: string;
              readonly HISTORY_INCREMENTAL_SEARCH_BACKWARD: string;
              readonly HISTORY_INCREMENTAL_SEARCH_FORWARD: string;
              readonly HISTORY_SEARCH_BACKWARD: string;
              readonly HISTORY_SEARCH_FORWARD: string;
              readonly HISTORY_SIZE: string;
              readonly INDENTATION: string;
              readonly INFER_NEXT_HISTORY: string;
              readonly INPUT_RC_FILE_NAME: string;
              readonly INSERT_CLOSE_CURLY: string;
              readonly INSERT_CLOSE_PAREN: string;
              readonly INSERT_CLOSE_SQUARE: string;
              readonly INSERT_COMMENT: string;
              readonly INSERT_LAST_WORD: string;
              readonly KEYMAP: string;
              readonly KILL_BUFFER: string;
              readonly KILL_LINE: string;
              readonly KILL_REGION: string;
              readonly KILL_WHOLE_LINE: string;
              readonly KILL_WORD: string;
              readonly LINE_OFFSET: string;
              readonly LIST_CHOICES: string;
              readonly LIST_EXPAND: string;
              readonly LIST_MAX: string;
              readonly MAGIC_SPACE: string;
              readonly MAIN: string;
              readonly MAX_REPEAT_COUNT: string;
              readonly MENU: string;
              readonly MENU_COMPLETE: string;
              readonly MENU_EXPAND_OR_COMPLETE: string;
              readonly MENU_LIST_MAX: string;
              readonly MENU_SELECT: string;
              readonly MOUSE: string;
              readonly NEG_ARGUMENT: string;
              readonly ORIGINAL_GROUP_NAME: string;
              readonly OTHERS_GROUP_NAME: string;
              readonly OVERWRITE_MODE: string;
              readonly PREFER_VISIBLE_BELL: string;
              readonly PROP_SUPPORT_PARSEDLINE: string;
              readonly PUT_REPLACE_SELECTION: string;
              readonly QUOTED_INSERT: string;
              readonly READ_COMMAND: string;
              readonly RECURSIVE_EDIT: string;
              readonly REDISPLAY: string;
              readonly REDO: string;
              readonly REDRAW_LINE: string;
              readonly REMOVE_SUFFIX_CHARS: string;
              readonly REVERSE_MENU_COMPLETE: string;
              readonly SAFE: string;
              readonly SEARCH_TERMINATORS: string;
              readonly SECONDARY_PROMPT_PATTERN: string;
              readonly SELF_INSERT: string;
              readonly SELF_INSERT_UNMETA: string;
              readonly SEND_BREAK: string;
              readonly SET_LOCAL_HISTORY: string;
              readonly SET_MARK_COMMAND: string;
              readonly SPELL_WORD: string;
              readonly SPLIT_UNDO: string;
              readonly SUGGESTIONS_MIN_BUFFER_SIZE: string;
              readonly SYSTEM_PROPERTY_PREFIX: string;
              readonly TAB_WIDTH: string;
              readonly TRANSPOSE_CHARS: string;
              readonly TRANSPOSE_WORDS: string;
              readonly UNDEFINED_KEY: string;
              readonly UNDO: string;
              readonly UNIVERSAL_ARGUMENT: string;
              readonly UP_CASE_WORD: string;
              readonly UP_HISTORY: string;
              readonly UP_LINE: string;
              readonly UP_LINE_OR_HISTORY: string;
              readonly UP_LINE_OR_SEARCH: string;
              readonly VICMD: string;
              readonly VIINS: string;
              readonly VIOPP: string;
              readonly VISUAL: string;
              readonly VISUAL_LINE_MODE: string;
              readonly VISUAL_MODE: string;
              readonly VI_ADD_EOL: string;
              readonly VI_ADD_NEXT: string;
              readonly VI_BACKWARD_BLANK_WORD: string;
              readonly VI_BACKWARD_BLANK_WORD_END: string;
              readonly VI_BACKWARD_CHAR: string;
              readonly VI_BACKWARD_DELETE_CHAR: string;
              readonly VI_BACKWARD_KILL_WORD: string;
              readonly VI_BACKWARD_WORD: string;
              readonly VI_BACKWARD_WORD_END: string;
              readonly VI_BEGINNING_OF_LINE: string;
              readonly VI_CHANGE: string;
              readonly VI_CHANGE_EOL: string;
              readonly VI_CHANGE_WHOLE_LINE: string;
              readonly VI_CMD_MODE: string;
              readonly VI_DELETE: string;
              readonly VI_DELETE_CHAR: string;
              readonly VI_DIGIT_OR_BEGINNING_OF_LINE: string;
              readonly VI_DOWN_LINE_OR_HISTORY: string;
              readonly VI_END_OF_LINE: string;
              readonly VI_FETCH_HISTORY: string;
              readonly VI_FIND_NEXT_CHAR: string;
              readonly VI_FIND_NEXT_CHAR_SKIP: string;
              readonly VI_FIND_PREV_CHAR: string;
              readonly VI_FIND_PREV_CHAR_SKIP: string;
              readonly VI_FIRST_NON_BLANK: string;
              readonly VI_FORWARD_BLANK_WORD: string;
              readonly VI_FORWARD_BLANK_WORD_END: string;
              readonly VI_FORWARD_CHAR: string;
              readonly VI_FORWARD_WORD: string;
              readonly VI_FORWARD_WORD_END: string;
              readonly VI_GOTO_COLUMN: string;
              readonly VI_HISTORY_SEARCH_BACKWARD: string;
              readonly VI_HISTORY_SEARCH_FORWARD: string;
              readonly VI_INSERT: string;
              readonly VI_INSERT_BOL: string;
              readonly VI_INSERT_COMMENT: string;
              readonly VI_JOIN: string;
              readonly VI_KILL_EOL: string;
              readonly VI_KILL_LINE: string;
              readonly VI_MATCH_BRACKET: string;
              readonly VI_OPEN_LINE_ABOVE: string;
              readonly VI_OPEN_LINE_BELOW: string;
              readonly VI_OPER_SWAP_CASE: string;
              readonly VI_PUT_AFTER: string;
              readonly VI_PUT_BEFORE: string;
              readonly VI_QUOTED_INSERT: string;
              readonly VI_REPEAT_CHANGE: string;
              readonly VI_REPEAT_FIND: string;
              readonly VI_REPEAT_SEARCH: string;
              readonly VI_REPLACE: string;
              readonly VI_REPLACE_CHARS: string;
              readonly VI_REV_REPEAT_FIND: string;
              readonly VI_REV_REPEAT_SEARCH: string;
              readonly VI_SET_BUFFER: string;
              readonly VI_SUBSTITUTE: string;
              readonly VI_SWAP_CASE: string;
              readonly VI_UNDO_CHANGE: string;
              readonly VI_UP_LINE_OR_HISTORY: string;
              readonly VI_YANK: string;
              readonly VI_YANK_EOL: string;
              readonly VI_YANK_WHOLE_LINE: string;
              readonly WHAT_CURSOR_POSITION: string;
              readonly WORDCHARS: string;
              readonly YANK: string;
              readonly YANK_POP: string;
            }
            let LineReader: _LineReader$$static;
            interface _LineReader {
              addCommandsInBuffer(a0: java.util.Collection<string>): void;
              callWidget(a0: string): void;
              defaultKeyMaps(): java.util.Map<string,jline.keymap.KeyMap<Binding>>;
              editAndAddInBuffer(a0: java.io.File): void;
              getAppName(): string;
              getAutosuggestion(): LineReader$SuggestionType;
              getBuffer(): Buffer;
              getBuiltinWidgets(): java.util.Map<string,Widget>;
              getExpander(): Expander;
              getHighlighter(): Highlighter;
              getHistory(): History;
              getKeyMap(): string;
              getKeyMaps(): java.util.Map<string,jline.keymap.KeyMap<Binding>>;
              getKeys(): jline.keymap.KeyMap<Binding>;
              getLastBinding(): string;
              getParsedLine(): ParsedLine;
              getParser(): Parser;
              getRegionActive(): LineReader$RegionType;
              getRegionMark(): int;
              getSearchTerm(): string;
              getTailTip(): string;
              getTerminal(): jline.terminal.Terminal;
              getVariable(a0: string): any;
              getVariables(): java.util.Map<string,any>;
              getWidgets(): java.util.Map<string,Widget>;
              isReading(): boolean;
              isSet(a0: LineReader$Option): boolean;
              option(a0: LineReader$Option, a1: boolean): LineReader;
              printAbove(a0: string): void;
              printAbove(a0: jline.utils.AttributedString): void;
              readLine(): string;
              readLine(a0: LineReader$character): string;
              readLine(a0: string): string;
              readLine(a0: string, a1: LineReader$character): string;
              readLine(a0: string, a1: LineReader$character, a2: string): string;
              readLine(a0: string, a1: string, a2: LineReader$character, a3: string): string;
              readLine(a0: string, a1: string, a2: MaskingCallback, a3: string): string;
              readMouseEvent(): jline.terminal.MouseEvent;
              runMacro(a0: string): void;
              setAutosuggestion(a0: LineReader$SuggestionType): void;
              setKeyMap(a0: string): boolean;
              setOpt(a0: LineReader$Option): void;
              setTailTip(a0: string): void;
              setVariable(a0: string, a1: any): void;
              unsetOpt(a0: LineReader$Option): void;
              variable(a0: string, a1: any): LineReader;
              zeroOut(): void;
            }
            interface LineReader extends CombineTypes<[_LineReader, java.lang.Object]> {}
            interface _LineReader$Option$$static extends ClassLike {
              valueOf(name: string): LineReader$Option;
              values(): LineReader$Option[];
              readonly AUTO_FRESH_LINE: LineReader$Option;
              readonly AUTO_GROUP: LineReader$Option;
              readonly AUTO_LIST: LineReader$Option;
              readonly AUTO_MENU: LineReader$Option;
              readonly AUTO_MENU_LIST: LineReader$Option;
              readonly AUTO_PARAM_SLASH: LineReader$Option;
              readonly AUTO_REMOVE_SLASH: LineReader$Option;
              readonly BRACKETED_PASTE: LineReader$Option;
              readonly CASE_INSENSITIVE: LineReader$Option;
              readonly CASE_INSENSITIVE_SEARCH: LineReader$Option;
              readonly COMPLETE_IN_WORD: LineReader$Option;
              readonly COMPLETE_MATCHER_CAMELCASE: LineReader$Option;
              readonly COMPLETE_MATCHER_TYPO: LineReader$Option;
              readonly DELAY_LINE_WRAP: LineReader$Option;
              readonly DISABLE_EVENT_EXPANSION: LineReader$Option;
              readonly DISABLE_HIGHLIGHTER: LineReader$Option;
              readonly DISABLE_UNDO: LineReader$Option;
              readonly EMPTY_WORD_OPTIONS: LineReader$Option;
              readonly ERASE_LINE_ON_FINISH: LineReader$Option;
              readonly GLOB_COMPLETE: LineReader$Option;
              readonly GROUP: LineReader$Option;
              readonly GROUP_PERSIST: LineReader$Option;
              readonly HISTORY_BEEP: LineReader$Option;
              readonly HISTORY_IGNORE_DUPS: LineReader$Option;
              readonly HISTORY_IGNORE_SPACE: LineReader$Option;
              readonly HISTORY_INCREMENTAL: LineReader$Option;
              readonly HISTORY_REDUCE_BLANKS: LineReader$Option;
              readonly HISTORY_TIMESTAMPED: LineReader$Option;
              readonly HISTORY_VERIFY: LineReader$Option;
              readonly INSERT_BRACKET: LineReader$Option;
              readonly INSERT_TAB: LineReader$Option;
              readonly LIST_AMBIGUOUS: LineReader$Option;
              readonly LIST_PACKED: LineReader$Option;
              readonly LIST_ROWS_FIRST: LineReader$Option;
              readonly MENU_COMPLETE: LineReader$Option;
              readonly MOUSE: LineReader$Option;
              readonly RECOGNIZE_EXACT: LineReader$Option;
              readonly USE_FORWARD_SLASH: LineReader$Option;
            }
            let LineReader$Option: _LineReader$Option$$static;
            interface _LineReader$Option {
              isDef(): boolean;
              isSet(options: java.util.Map<LineReader$Option,boolean>): boolean;
              _def: boolean;
            }
            interface LineReader$Option extends CombineTypes<[_LineReader$Option]> {}
            interface _LineReader$RegionType$$static extends ClassLike {
              valueOf(name: string): LineReader$RegionType;
              values(): LineReader$RegionType[];
              readonly CHAR: LineReader$RegionType;
              readonly LINE: LineReader$RegionType;
              readonly NONE: LineReader$RegionType;
              readonly PASTE: LineReader$RegionType;
            }
            let LineReader$RegionType: _LineReader$RegionType$$static;
            interface _LineReader$RegionType {
            }
            interface LineReader$RegionType extends CombineTypes<[_LineReader$RegionType]> {}
            interface _LineReader$SuggestionType$$static extends ClassLike {
              valueOf(name: string): LineReader$SuggestionType;
              values(): LineReader$SuggestionType[];
              readonly COMPLETER: LineReader$SuggestionType;
              readonly HISTORY: LineReader$SuggestionType;
              readonly NONE: LineReader$SuggestionType;
              readonly TAIL_TIP: LineReader$SuggestionType;
            }
            let LineReader$SuggestionType: _LineReader$SuggestionType$$static;
            interface _LineReader$SuggestionType {
            }
            interface LineReader$SuggestionType extends CombineTypes<[_LineReader$SuggestionType]> {}
            interface _LineReaderBuilder$$static extends ClassLike {
              builder(): LineReaderBuilder;
            }
            let LineReaderBuilder: _LineReaderBuilder$$static;
            interface _LineReaderBuilder {
              appName(appName: string): LineReaderBuilder;
              build(): LineReader;
              completer(completer: Completer): LineReaderBuilder;
              completionMatcher(completionMatcher: CompletionMatcher): LineReaderBuilder;
              expander(expander: Expander): LineReaderBuilder;
              highlighter(highlighter: Highlighter): LineReaderBuilder;
              history(history: History): LineReaderBuilder;
              option(option: LineReader$Option, value: boolean): LineReaderBuilder;
              parser(parser: Parser): LineReaderBuilder;
              terminal(terminal: jline.terminal.Terminal): LineReaderBuilder;
              variable(name: string, value: any): LineReaderBuilder;
              variables(variables: java.util.Map<string,any>): LineReaderBuilder;
              _appName: string;
              _completer: Completer;
              _completionMatcher: CompletionMatcher;
              _expander: Expander;
              _highlighter: Highlighter;
              _history: History;
              _memoryHistory: History;
              _options: java.util.Map<LineReader$Option,boolean>;
              _parser: Parser;
              _terminal: jline.terminal.Terminal;
              _variables: java.util.Map<string,any>;
            }
            interface LineReaderBuilder extends CombineTypes<[_LineReaderBuilder, java.lang.Object]> {}
            interface _Macro$$static extends ClassLike {
              new(sequence: string): Macro;
            }
            let Macro: _Macro$$static;
            interface _Macro {
              equals(o: any): boolean;
              getSequence(): string;
              hashCode(): int;
              toString(): string;
              _sequence: string;
            }
            interface Macro extends CombineTypes<[_Macro, jdk.internal.org.jline.reader.Binding, java.lang.Object]> {}
            interface _MaskingCallback$$static extends ClassLike {
            }
            let MaskingCallback: _MaskingCallback$$static;
            interface _MaskingCallback {
              display(a0: string): string;
              history(a0: string): string;
            }
            interface MaskingCallback extends CombineTypes<[_MaskingCallback, java.lang.Object]> {}
            interface _ParsedLine$$static extends ClassLike {
            }
            let ParsedLine: _ParsedLine$$static;
            interface _ParsedLine {
              cursor(): int;
              line(): string;
              word(): string;
              wordCursor(): int;
              wordIndex(): int;
              words(): java.util.List<string>;
            }
            interface ParsedLine extends CombineTypes<[_ParsedLine, java.lang.Object]> {}
            interface _Parser$$static extends ClassLike {
              readonly REGEX_COMMAND: string;
              readonly REGEX_VARIABLE: string;
            }
            let Parser: _Parser$$static;
            interface _Parser {
              getCommand(line: string): string;
              getVariable(line: string): string;
              isEscapeChar(ch: char): boolean;
              parse(a0: string, a1: int, a2: Parser$ParseContext): ParsedLine;
(a0: string, a1: int, a2: Parser$ParseContext): ParsedLine;
              parse(line: string, cursor: int): ParsedLine;
              validCommandName(name: string): boolean;
              validVariableName(name: string): boolean;
            }
            interface Parser extends CombineTypes<[_Parser, java.lang.Object]> {}
            interface _Parser$ParseContext$$static extends ClassLike {
              valueOf(name: string): Parser$ParseContext;
              values(): Parser$ParseContext[];
              readonly ACCEPT_LINE: Parser$ParseContext;
              readonly COMPLETE: Parser$ParseContext;
              readonly SECONDARY_PROMPT: Parser$ParseContext;
              readonly SPLIT_LINE: Parser$ParseContext;
              readonly UNSPECIFIED: Parser$ParseContext;
            }
            let Parser$ParseContext: _Parser$ParseContext$$static;
            interface _Parser$ParseContext {
            }
            interface Parser$ParseContext extends CombineTypes<[_Parser$ParseContext]> {}
            interface _PrintAboveWriter$$static extends ClassLike {
              new(reader: LineReader): PrintAboveWriter;
            }
            let PrintAboveWriter: _PrintAboveWriter$$static;
            interface _PrintAboveWriter {
              flush(): void;
              _reader: LineReader;
            }
            interface PrintAboveWriter extends CombineTypes<[_PrintAboveWriter, java.io.StringWriter]> {}
            interface _Reference$$static extends ClassLike {
              new(name: string): Reference;
            }
            let Reference: _Reference$$static;
            interface _Reference {
              equals(o: any): boolean;
              hashCode(): int;
              name(): string;
              toString(): string;
              _name: string;
            }
            interface Reference extends CombineTypes<[_Reference, jdk.internal.org.jline.reader.Binding, java.lang.Object]> {}
            interface _SyntaxError$$static extends ClassLike {
              _serialVersionUID: long;
              new(line: int, column: int, message: string): SyntaxError;
            }
            let SyntaxError: _SyntaxError$$static;
            interface _SyntaxError {
              column(): int;
              line(): int;
              _column: int;
              _line: int;
            }
            interface SyntaxError extends CombineTypes<[_SyntaxError, java.lang.RuntimeException]> {}
            interface _UserInterruptException$$static extends ClassLike {
              _serialVersionUID: long;
              new(partialLine: string): UserInterruptException;
            }
            let UserInterruptException: _UserInterruptException$$static;
            interface _UserInterruptException {
              getPartialLine(): string;
              _partialLine: string;
            }
            interface UserInterruptException extends CombineTypes<[_UserInterruptException, java.lang.RuntimeException]> {}
            interface _Widget$$static extends ClassLike {
            }
            let Widget: _Widget$$static;
            interface _Widget {
              apply(): boolean;
(): boolean;
            }
            interface Widget extends CombineTypes<[_Widget, jdk.internal.org.jline.reader.Binding, java.lang.Object]> {}
          }
          module terminal {
            module impl {
              module exec {
                interface _ExecPty$$static extends ClassLike {
                  current(provider: terminal.spi.TerminalProvider, systemStream: terminal.spi.SystemStream): terminal.spi.Pty;
                  doGetAttr(cfg: string): Attributes;
                  _doGetFlag(cfg: string, flag: java.lang.Enum<any>): boolean;
                  _doGetInt(name: string, cfg: string): int;
                  _doGetSize(cfg: string): Size;
                  _parseControlChar(str: string): int;
                  _new(provider: terminal.spi.TerminalProvider, systemStream: terminal.spi.SystemStream, name: string): ExecPty;
                }
                let ExecPty: _ExecPty$$static;
                interface _ExecPty {
                  close(): void;
                  _doGetConfig(): string;
                  _doGetSlaveInput(): java.io.InputStream;
                  _doSetAttr(attr: Attributes): void;
                  getAttr(): Attributes;
                  _getFlagsToSet(attr: Attributes, current: Attributes): java.util.List<string>;
                  getMasterInput(): java.io.InputStream;
                  getMasterOutput(): java.io.OutputStream;
                  getName(): string;
                  getSize(): Size;
                  getSlaveOutput(): java.io.OutputStream;
                  setSize(size: Size): void;
                  toString(): string;
                  _name: string;
                }
                interface ExecPty extends CombineTypes<[_ExecPty, jdk.internal.org.jline.terminal.spi.Pty, jdk.internal.org.jline.terminal.impl.AbstractPty]> {}
                interface _ExecTerminalProvider$$static extends ClassLike {
                  _newDescriptor(fd: java.io.FileDescriptor): java.lang.ProcessBuilder$Redirect;
                  _redirectPipeCreator: ExecTerminalProvider$RedirectPipeCreator;
                  _warned: boolean;
                  new(): ExecTerminalProvider;
                }
                let ExecTerminalProvider: _ExecTerminalProvider$$static;
                interface _ExecTerminalProvider {
                  current(systemStream: terminal.spi.SystemStream): terminal.spi.Pty;
                  isPosixSystemStream(stream: terminal.spi.SystemStream): boolean;
                  isSystemStream(stream: terminal.spi.SystemStream): boolean;
                  isWindowsSystemStream(stream: terminal.spi.SystemStream): boolean;
                  name(): string;
                  newTerminal(name: string, type: string, _in: java.io.InputStream, out: java.io.OutputStream, encoding: java.nio.charset.Charset, signalHandler: Terminal$SignalHandler, paused: boolean, attributes: Attributes, size: Size): Terminal;
                  posixSysTerminal(name: string, type: string, ansiPassThrough: boolean, encoding: java.nio.charset.Charset, nativeSignals: boolean, signalHandler: Terminal$SignalHandler, paused: boolean, systemStream: terminal.spi.SystemStream, inputStreamWrapper: java.util.function.Function<java.io.InputStream,java.io.InputStream>): Terminal;
                  sysTerminal(name: string, type: string, ansiPassThrough: boolean, encoding: java.nio.charset.Charset, nativeSignals: boolean, signalHandler: Terminal$SignalHandler, paused: boolean, systemStream: terminal.spi.SystemStream, inputStreamWrapper: java.util.function.Function<java.io.InputStream,java.io.InputStream>): Terminal;
                  systemStreamName(stream: terminal.spi.SystemStream): string;
                  toString(): string;
                  winSysTerminal(name: string, type: string, ansiPassThrough: boolean, encoding: java.nio.charset.Charset, nativeSignals: boolean, signalHandler: Terminal$SignalHandler, paused: boolean, systemStream: terminal.spi.SystemStream, inputStreamWrapper: java.util.function.Function<java.io.InputStream,java.io.InputStream>): Terminal;
                }
                interface ExecTerminalProvider extends CombineTypes<[_ExecTerminalProvider, jdk.internal.org.jline.terminal.spi.TerminalProvider, java.lang.Object]> {}
                interface _ExecTerminalProvider$RedirectPipeCreator$$static extends ClassLike {
                }
                let ExecTerminalProvider$RedirectPipeCreator: _ExecTerminalProvider$RedirectPipeCreator$$static;
                interface _ExecTerminalProvider$RedirectPipeCreator {
                  newRedirectPipe(a0: java.io.FileDescriptor): java.lang.ProcessBuilder$Redirect;
(a0: java.io.FileDescriptor): java.lang.ProcessBuilder$Redirect;
                }
                interface ExecTerminalProvider$RedirectPipeCreator extends CombineTypes<[_ExecTerminalProvider$RedirectPipeCreator, java.lang.Object]> {}
                interface _ExecTerminalProvider$ReflectionRedirectPipeCreator$$static extends ClassLike {
                  _new(): ExecTerminalProvider$ReflectionRedirectPipeCreator;
                }
                let ExecTerminalProvider$ReflectionRedirectPipeCreator: _ExecTerminalProvider$ReflectionRedirectPipeCreator$$static;
                interface _ExecTerminalProvider$ReflectionRedirectPipeCreator {
                  newRedirectPipe(fd: java.io.FileDescriptor): java.lang.ProcessBuilder$Redirect;
                  /** @renamed-from constructor */__constructor: java.lang.reflect.Constructor<java.lang.ProcessBuilder$Redirect>;
                  _fdField: java.lang.reflect.Field;
                  /** @renamed-to _constructor */_constructor: java.lang.reflect.Constructor<java.lang.ProcessBuilder$Redirect>;
                }
                interface ExecTerminalProvider$ReflectionRedirectPipeCreator extends CombineTypes<[_ExecTerminalProvider$ReflectionRedirectPipeCreator, jdk.internal.org.jline.terminal.impl.exec.ExecTerminalProvider$RedirectPipeCreator, java.lang.Object]> {}
              }
              module jna {
                module win {
                  interface _IntByReference$$static extends ClassLike {
                    _new(): IntByReference;
                  }
                  let IntByReference: _IntByReference$$static;
                  interface _IntByReference {
                    getValue(): int;
                    value: int;
                  }
                  interface IntByReference extends CombineTypes<[_IntByReference, java.lang.Object]> {}
                  interface _JnaWinConsoleWriter$$static extends ClassLike {
                    _new(console: Pointer): JnaWinConsoleWriter;
                  }
                  let JnaWinConsoleWriter: _JnaWinConsoleWriter$$static;
                  interface _JnaWinConsoleWriter {
                    _writeConsole(text: char[], len: int): void;
                    _console: Pointer;
                    _writtenChars: IntByReference;
                  }
                  interface JnaWinConsoleWriter extends CombineTypes<[_JnaWinConsoleWriter, jdk.internal.org.jline.terminal.impl.AbstractWindowsConsoleWriter]> {}
                  interface _JnaWinSysTerminal$$static extends ClassLike {
                    createTerminal(provider: terminal.spi.TerminalProvider, systemStream: terminal.spi.SystemStream, name: string, type: string, ansiPassThrough: boolean, encoding: java.nio.charset.Charset, nativeSignals: boolean, signalHandler: Terminal$SignalHandler, paused: boolean, inputStreamWrapper: java.util.function.Function<java.io.InputStream,java.io.InputStream>): JnaWinSysTerminal;
                    _enableVtp(console: Pointer, outMode: int): boolean;
                    isWindowsSystemStream(stream: terminal.spi.SystemStream): boolean;
                    _consoleErr: Pointer;
                    _consoleIn: Pointer;
                    _consoleOut: Pointer;
                    _new(provider: terminal.spi.TerminalProvider, systemStream: terminal.spi.SystemStream, writer: java.io.Writer, name: string, type: string, encoding: java.nio.charset.Charset, nativeSignals: boolean, signalHandler: Terminal$SignalHandler, inConsole: Pointer, inConsoleMode: int, outConsole: Pointer, outConsoleMode: int, inputStreamWrapper: java.util.function.Function<java.io.InputStream,java.io.InputStream>): JnaWinSysTerminal;
                  }
                  let JnaWinSysTerminal: _JnaWinSysTerminal$$static;
                  interface _JnaWinSysTerminal {
                    getBufferSize(): Size;
                    _getConsoleMode(console: Pointer): int;
                    _getConsoleMode(a0: any): int;
                    getCursorPosition(discarded: java.util.function.IntConsumer): Cursor;
                    getSize(): Size;
                    _processConsoleInput(): boolean;
                    _processFocusEvent(hasFocus: boolean): void;
                    _processKeyEvent(keyEvent: Kernel32$KEY_EVENT_RECORD): void;
                    _processMouseEvent(mouseEvent: Kernel32$MOUSE_EVENT_RECORD): void;
                    _readConsoleInput(dwMilliseconds: int): Kernel32$INPUT_RECORD;
                    _setConsoleMode(console: Pointer, mode: int): void;
                    _setConsoleMode(a0: any, a1: int): void;
                    _eventsRead: IntByReference;
                    _focus: char[];
                    _inputEvents: Kernel32$INPUT_RECORD[];
                    _mouse: char[];
                  }
                  interface JnaWinSysTerminal extends CombineTypes<[_JnaWinSysTerminal, AbstractWindowsTerminal<Pointer>]> {}
                  interface _Kernel32$$static extends ClassLike {
                    readonly BACKGROUND_BLUE: int;
                    readonly BACKGROUND_GREEN: int;
                    readonly BACKGROUND_INTENSITY: int;
                    readonly BACKGROUND_RED: int;
                    readonly DOUBLE_CLICK: int;
                    readonly ENABLE_ECHO_INPUT: int;
                    readonly ENABLE_EXTENDED_FLAGS: int;
                    readonly ENABLE_INSERT_MODE: int;
                    readonly ENABLE_LINE_INPUT: int;
                    readonly ENABLE_MOUSE_INPUT: int;
                    readonly ENABLE_PROCESSED_INPUT: int;
                    readonly ENABLE_QUICK_EDIT_MODE: int;
                    readonly ENABLE_WINDOW_INPUT: int;
                    readonly FOREGROUND_BLUE: int;
                    readonly FOREGROUND_GREEN: int;
                    readonly FOREGROUND_INTENSITY: int;
                    readonly FOREGROUND_RED: int;
                    readonly FROM_LEFT_1ST_BUTTON_PRESSED: int;
                    readonly FROM_LEFT_2ND_BUTTON_PRESSED: int;
                    readonly FROM_LEFT_3RD_BUTTON_PRESSED: int;
                    readonly FROM_LEFT_4TH_BUTTON_PRESSED: int;
                    readonly INSTANCE: Kernel32;
                    readonly LEFT_ALT_PRESSED: int;
                    readonly LEFT_CTRL_PRESSED: int;
                    readonly MOUSE_HWHEELED: int;
                    readonly MOUSE_MOVED: int;
                    readonly MOUSE_WHEELED: int;
                    readonly RIGHTMOST_BUTTON_PRESSED: int;
                    readonly RIGHT_ALT_PRESSED: int;
                    readonly RIGHT_CTRL_PRESSED: int;
                    readonly SHIFT_PRESSED: int;
                    readonly STD_ERROR_HANDLE: int;
                    readonly STD_INPUT_HANDLE: int;
                    readonly STD_OUTPUT_HANDLE: int;
                  }
                  let Kernel32: _Kernel32$$static;
                  interface _Kernel32 {
                    FillConsoleOutputAttribute(a0: Pointer, a1: short, a2: int, a3: Kernel32$COORD, a4: IntByReference): void;
                    FillConsoleOutputCharacter(a0: Pointer, a1: char, a2: int, a3: Kernel32$COORD, a4: IntByReference): void;
                    GetConsoleMode(a0: Pointer, a1: IntByReference): void;
                    GetConsoleScreenBufferInfo(a0: Pointer, a1: Kernel32$CONSOLE_SCREEN_BUFFER_INFO): void;
                    GetStdHandle(a0: int): Pointer;
                    ReadConsoleInput(a0: Pointer, a1: Kernel32$INPUT_RECORD[], a2: int, a3: IntByReference): void;
                    ScrollConsoleScreenBuffer(a0: Pointer, a1: Kernel32$SMALL_RECT, a2: Kernel32$SMALL_RECT, a3: Kernel32$COORD, a4: Kernel32$CHAR_INFO): void;
                    SetConsoleCursorPosition(a0: Pointer, a1: Kernel32$COORD): void;
                    SetConsoleMode(a0: Pointer, a1: int): void;
                    SetConsoleTextAttribute(a0: Pointer, a1: short): void;
                    SetConsoleTitle(a0: string): void;
                    WaitForSingleObject(a0: Pointer, a1: int): int;
                    WriteConsoleW(a0: Pointer, a1: char[], a2: int, a3: IntByReference, a4: Pointer): void;
                  }
                  interface Kernel32 extends CombineTypes<[_Kernel32, java.lang.Object]> {}
                  interface _Kernel32$CHAR_INFO$$static extends ClassLike {
                    new(): Kernel32$CHAR_INFO;
                    new(c: char, attr: short): Kernel32$CHAR_INFO;
                  }
                  let Kernel32$CHAR_INFO: _Kernel32$CHAR_INFO$$static;
                  interface _Kernel32$CHAR_INFO {
                    Attributes: short;
                    uChar: Kernel32$UnionChar;
                  }
                  interface Kernel32$CHAR_INFO extends CombineTypes<[_Kernel32$CHAR_INFO, java.lang.Object]> {}
                  interface _Kernel32$CONSOLE_CURSOR_INFO$$static extends ClassLike {
                    new(): Kernel32$CONSOLE_CURSOR_INFO;
                  }
                  let Kernel32$CONSOLE_CURSOR_INFO: _Kernel32$CONSOLE_CURSOR_INFO$$static;
                  interface _Kernel32$CONSOLE_CURSOR_INFO {
                    bVisible: boolean;
                    dwSize: int;
                  }
                  interface Kernel32$CONSOLE_CURSOR_INFO extends CombineTypes<[_Kernel32$CONSOLE_CURSOR_INFO, java.lang.Object]> {}
                  interface _Kernel32$CONSOLE_SCREEN_BUFFER_INFO$$static extends ClassLike {
                    new(): Kernel32$CONSOLE_SCREEN_BUFFER_INFO;
                  }
                  let Kernel32$CONSOLE_SCREEN_BUFFER_INFO: _Kernel32$CONSOLE_SCREEN_BUFFER_INFO$$static;
                  interface _Kernel32$CONSOLE_SCREEN_BUFFER_INFO {
                    windowHeight(): int;
                    windowWidth(): int;
                    dwCursorPosition: Kernel32$COORD;
                    dwMaximumWindowSize: Kernel32$COORD;
                    dwSize: Kernel32$COORD;
                    srWindow: Kernel32$SMALL_RECT;
                    wAttributes: short;
                  }
                  interface Kernel32$CONSOLE_SCREEN_BUFFER_INFO extends CombineTypes<[_Kernel32$CONSOLE_SCREEN_BUFFER_INFO, java.lang.Object]> {}
                  interface _Kernel32$COORD$$static extends ClassLike {
                    new(): Kernel32$COORD;
                    new(X: short, Y: short): Kernel32$COORD;
                  }
                  let Kernel32$COORD: _Kernel32$COORD$$static;
                  interface _Kernel32$COORD {
                    X: short;
                    Y: short;
                  }
                  interface Kernel32$COORD extends CombineTypes<[_Kernel32$COORD, java.lang.Object]> {}
                  interface _Kernel32$FOCUS_EVENT_RECORD$$static extends ClassLike {
                    new(): Kernel32$FOCUS_EVENT_RECORD;
                  }
                  let Kernel32$FOCUS_EVENT_RECORD: _Kernel32$FOCUS_EVENT_RECORD$$static;
                  interface _Kernel32$FOCUS_EVENT_RECORD {
                    bSetFocus: boolean;
                  }
                  interface Kernel32$FOCUS_EVENT_RECORD extends CombineTypes<[_Kernel32$FOCUS_EVENT_RECORD, java.lang.Object]> {}
                  interface _Kernel32$INPUT_RECORD$$static extends ClassLike {
                    readonly FOCUS_EVENT: short;
                    readonly KEY_EVENT: short;
                    readonly MENU_EVENT: short;
                    readonly MOUSE_EVENT: short;
                    readonly WINDOW_BUFFER_SIZE_EVENT: short;
                    new(): Kernel32$INPUT_RECORD;
                  }
                  let Kernel32$INPUT_RECORD: _Kernel32$INPUT_RECORD$$static;
                  interface _Kernel32$INPUT_RECORD {
                    Event: Kernel32$INPUT_RECORD$EventUnion;
                    EventType: short;
                  }
                  interface Kernel32$INPUT_RECORD extends CombineTypes<[_Kernel32$INPUT_RECORD, java.lang.Object]> {}
                  interface _Kernel32$INPUT_RECORD$EventUnion$$static extends ClassLike {
                    new(): Kernel32$INPUT_RECORD$EventUnion;
                  }
                  let Kernel32$INPUT_RECORD$EventUnion: _Kernel32$INPUT_RECORD$EventUnion$$static;
                  interface _Kernel32$INPUT_RECORD$EventUnion {
                    FocusEvent: Kernel32$FOCUS_EVENT_RECORD;
                    KeyEvent: Kernel32$KEY_EVENT_RECORD;
                    MenuEvent: Kernel32$MENU_EVENT_RECORD;
                    MouseEvent: Kernel32$MOUSE_EVENT_RECORD;
                    WindowBufferSizeEvent: Kernel32$WINDOW_BUFFER_SIZE_RECORD;
                  }
                  interface Kernel32$INPUT_RECORD$EventUnion extends CombineTypes<[_Kernel32$INPUT_RECORD$EventUnion, java.lang.Object]> {}
                  interface _Kernel32$KEY_EVENT_RECORD$$static extends ClassLike {
                    new(): Kernel32$KEY_EVENT_RECORD;
                  }
                  let Kernel32$KEY_EVENT_RECORD: _Kernel32$KEY_EVENT_RECORD$$static;
                  interface _Kernel32$KEY_EVENT_RECORD {
                    bKeyDown: boolean;
                    dwControlKeyState: int;
                    uChar: Kernel32$UnionChar;
                    wRepeatCount: short;
                    wVirtualKeyCode: short;
                    wVirtualScanCode: short;
                  }
                  interface Kernel32$KEY_EVENT_RECORD extends CombineTypes<[_Kernel32$KEY_EVENT_RECORD, java.lang.Object]> {}
                  interface _Kernel32$MENU_EVENT_RECORD$$static extends ClassLike {
                    new(): Kernel32$MENU_EVENT_RECORD;
                  }
                  let Kernel32$MENU_EVENT_RECORD: _Kernel32$MENU_EVENT_RECORD$$static;
                  interface _Kernel32$MENU_EVENT_RECORD {
                    dwCommandId: int;
                  }
                  interface Kernel32$MENU_EVENT_RECORD extends CombineTypes<[_Kernel32$MENU_EVENT_RECORD, java.lang.Object]> {}
                  interface _Kernel32$MOUSE_EVENT_RECORD$$static extends ClassLike {
                    new(): Kernel32$MOUSE_EVENT_RECORD;
                  }
                  let Kernel32$MOUSE_EVENT_RECORD: _Kernel32$MOUSE_EVENT_RECORD$$static;
                  interface _Kernel32$MOUSE_EVENT_RECORD {
                    dwButtonState: int;
                    dwControlKeyState: int;
                    dwEventFlags: int;
                    dwMousePosition: Kernel32$COORD;
                  }
                  interface Kernel32$MOUSE_EVENT_RECORD extends CombineTypes<[_Kernel32$MOUSE_EVENT_RECORD, java.lang.Object]> {}
                  interface _Kernel32$SMALL_RECT$$static extends ClassLike {
                    new(): Kernel32$SMALL_RECT;
                    new(org: Kernel32$SMALL_RECT): Kernel32$SMALL_RECT;
                    new(Top: short, Left: short, Bottom: short, Right: short): Kernel32$SMALL_RECT;
                  }
                  let Kernel32$SMALL_RECT: _Kernel32$SMALL_RECT$$static;
                  interface _Kernel32$SMALL_RECT {
                    height(): short;
                    width(): short;
                    Bottom: short;
                    Left: short;
                    Right: short;
                    Top: short;
                  }
                  interface Kernel32$SMALL_RECT extends CombineTypes<[_Kernel32$SMALL_RECT, java.lang.Object]> {}
                  interface _Kernel32$UnionChar$$static extends ClassLike {
                    new(): Kernel32$UnionChar;
                    new(c: char): Kernel32$UnionChar;
                  }
                  let Kernel32$UnionChar: _Kernel32$UnionChar$$static;
                  interface _Kernel32$UnionChar {
                    set(c: char): void;
                    UnicodeChar: char;
                  }
                  interface Kernel32$UnionChar extends CombineTypes<[_Kernel32$UnionChar, java.lang.Object]> {}
                  interface _Kernel32$WINDOW_BUFFER_SIZE_RECORD$$static extends ClassLike {
                    new(): Kernel32$WINDOW_BUFFER_SIZE_RECORD;
                  }
                  let Kernel32$WINDOW_BUFFER_SIZE_RECORD: _Kernel32$WINDOW_BUFFER_SIZE_RECORD$$static;
                  interface _Kernel32$WINDOW_BUFFER_SIZE_RECORD {
                    dwSize: Kernel32$COORD;
                  }
                  interface Kernel32$WINDOW_BUFFER_SIZE_RECORD extends CombineTypes<[_Kernel32$WINDOW_BUFFER_SIZE_RECORD, java.lang.Object]> {}
                  interface _Kernel32Impl$$static extends ClassLike {
                    _initIDs(): void;
                    new(): Kernel32Impl;
                  }
                  let Kernel32Impl: _Kernel32Impl$$static;
                  interface _Kernel32Impl {
                    FillConsoleOutputAttribute(a0: Pointer, a1: short, a2: int, a3: Kernel32$COORD, a4: IntByReference): void;
                    FillConsoleOutputCharacter(a0: Pointer, a1: char, a2: int, a3: Kernel32$COORD, a4: IntByReference): void;
                    GetConsoleMode(a0: Pointer, a1: IntByReference): void;
                    GetConsoleScreenBufferInfo(a0: Pointer, a1: Kernel32$CONSOLE_SCREEN_BUFFER_INFO): void;
                    GetStdHandle(a0: int): Pointer;
                    ReadConsoleInput(a0: Pointer, a1: Kernel32$INPUT_RECORD[], a2: int, a3: IntByReference): void;
                    ScrollConsoleScreenBuffer(a0: Pointer, a1: Kernel32$SMALL_RECT, a2: Kernel32$SMALL_RECT, a3: Kernel32$COORD, a4: Kernel32$CHAR_INFO): void;
                    SetConsoleCursorPosition(a0: Pointer, a1: Kernel32$COORD): void;
                    SetConsoleMode(a0: Pointer, a1: int): void;
                    SetConsoleTextAttribute(a0: Pointer, a1: short): void;
                    SetConsoleTitle(a0: string): void;
                    WaitForSingleObject(a0: Pointer, a1: int): int;
                    WriteConsoleW(a0: Pointer, a1: char[], a2: int, a3: IntByReference, a4: Pointer): void;
                  }
                  interface Kernel32Impl extends CombineTypes<[_Kernel32Impl, java.lang.Object, jdk.internal.org.jline.terminal.impl.jna.win.Kernel32]> {}
                  interface _Pointer$$static extends ClassLike {
                    new(value: long): Pointer;
                  }
                  let Pointer: _Pointer$$static;
                  interface _Pointer {
                    readonly value: long;
                  }
                  interface Pointer extends CombineTypes<[_Pointer, java.lang.Object]> {}
                  interface _WindowsAnsiWriter$$static extends ClassLike {
                    _ANSI_BACKGROUND_COLOR_MAP: short[];
                    _ANSI_FOREGROUND_COLOR_MAP: short[];
                    _BACKGROUND_BLACK: short;
                    _BACKGROUND_CYAN: short;
                    _BACKGROUND_MAGENTA: short;
                    _BACKGROUND_WHITE: short;
                    _BACKGROUND_YELLOW: short;
                    _FOREGROUND_BLACK: short;
                    _FOREGROUND_CYAN: short;
                    _FOREGROUND_MAGENTA: short;
                    _FOREGROUND_WHITE: short;
                    _FOREGROUND_YELLOW: short;
                    _MAX_ESCAPE_SEQUENCE_LENGTH: int;
                    new(out: java.io.Writer, console: Pointer): WindowsAnsiWriter;
                  }
                  let WindowsAnsiWriter: _WindowsAnsiWriter$$static;
                  interface _WindowsAnsiWriter {
                    _applyAttribute(): void;
                    _applyCursorPosition(): void;
                    _getConsoleInfo(): void;
                    _invertAttributeColors(attributes: short): short;
                    _processAttributeRest(): void;
                    _processChangeWindowTitle(label: string): void;
                    _processCursorDown(count: int): void;
                    _processCursorDownLine(count: int): void;
                    _processCursorLeft(count: int): void;
                    _processCursorRight(count: int): void;
                    _processCursorTo(row: int, col: int): void;
                    _processCursorToColumn(x: int): void;
                    _processCursorUp(count: int): void;
                    _processCursorUpLine(count: int): void;
                    _processDefaultBackgroundColor(): void;
                    _processDefaultTextColor(): void;
                    _processDeleteLine(optionInt: int): void;
                    _processEraseLine(eraseOption: int): void;
                    _processEraseScreen(eraseOption: int): void;
                    _processInsertLine(optionInt: int): void;
                    _processRestoreCursorPosition(): void;
                    _processSaveCursorPosition(): void;
                    _processSetAttribute(attribute: int): void;
                    _processSetBackgroundColorExt(paletteIndex: int): void;
                    _processSetForegroundColorExt(paletteIndex: int): void;
                    _bold: boolean;
                    _console: Pointer;
                    _info: Kernel32$CONSOLE_SCREEN_BUFFER_INFO;
                    _negative: boolean;
                    _originalColors: short;
                    _savedX: short;
                    _savedY: short;
                    _underline: boolean;
                  }
                  interface WindowsAnsiWriter extends CombineTypes<[_WindowsAnsiWriter, jdk.internal.org.jline.utils.AnsiWriter]> {}
                }
                interface _JnaTerminalProvider$$static extends ClassLike {
                  new(): JnaTerminalProvider;
                }
                let JnaTerminalProvider: _JnaTerminalProvider$$static;
                interface _JnaTerminalProvider {
                  _checkSystemStream(stream: terminal.spi.SystemStream): boolean;
                  isSystemStream(stream: terminal.spi.SystemStream): boolean;
                  name(): string;
                  newTerminal(name: string, type: string, _in: java.io.InputStream, out: java.io.OutputStream, encoding: java.nio.charset.Charset, signalHandler: Terminal$SignalHandler, paused: boolean, attributes: Attributes, size: Size): Terminal;
                  sysTerminal(name: string, type: string, ansiPassThrough: boolean, encoding: java.nio.charset.Charset, nativeSignals: boolean, signalHandler: Terminal$SignalHandler, paused: boolean, systemStream: terminal.spi.SystemStream, inputStreamWrapper: java.util.function.Function<java.io.InputStream,java.io.InputStream>): Terminal;
                  systemStreamName(stream: terminal.spi.SystemStream): string;
                  toString(): string;
                  winSysTerminal(name: string, type: string, ansiPassThrough: boolean, encoding: java.nio.charset.Charset, nativeSignals: boolean, signalHandler: Terminal$SignalHandler, paused: boolean, systemStream: terminal.spi.SystemStream, inputStreamWrapper: java.util.function.Function<java.io.InputStream,java.io.InputStream>): Terminal;
                }
                interface JnaTerminalProvider extends CombineTypes<[_JnaTerminalProvider, jdk.internal.org.jline.terminal.spi.TerminalProvider, java.lang.Object]> {}
                interface _LastErrorException$$static extends ClassLike {
                  new(lastError: long): LastErrorException;
                }
                let LastErrorException: _LastErrorException$$static;
                interface _LastErrorException {
                  readonly lastError: long;
                }
                interface LastErrorException extends CombineTypes<[_LastErrorException, java.lang.RuntimeException]> {}
              }
              interface _AbstractPosixTerminal$$static extends ClassLike {
                new(name: string, type: string, pty: terminal.spi.Pty): AbstractPosixTerminal;
                new(name: string, type: string, pty: terminal.spi.Pty, encoding: java.nio.charset.Charset, signalHandler: Terminal$SignalHandler): AbstractPosixTerminal;
              }
              let AbstractPosixTerminal: _AbstractPosixTerminal$$static;
              interface _AbstractPosixTerminal {
                _doClose(): void;
                getAttributes(): Attributes;
                getCursorPosition(discarded: java.util.function.IntConsumer): Cursor;
                getProvider(): terminal.spi.TerminalProvider;
                getPty(): terminal.spi.Pty;
                getSize(): Size;
                getSystemStream(): terminal.spi.SystemStream;
                setAttributes(attr: Attributes): void;
                setSize(size: Size): void;
                _originalAttributes: Attributes;
                _pty: terminal.spi.Pty;
              }
              interface AbstractPosixTerminal extends CombineTypes<[_AbstractPosixTerminal, jdk.internal.org.jline.terminal.impl.AbstractTerminal]> {}
              interface _AbstractPty$$static extends ClassLike {
                _newDescriptor(fd: int): java.io.FileDescriptor;
                _fileDescriptorCreator: AbstractPty$FileDescriptorCreator;
                new(provider: terminal.spi.TerminalProvider, systemStream: terminal.spi.SystemStream): AbstractPty;
              }
              let AbstractPty: _AbstractPty$$static;
              interface _AbstractPty {
                _checkInterrupted(): void;
                _doGetSlaveInput(): java.io.InputStream;
                _doSetAttr(a0: Attributes): void;
                getProvider(): terminal.spi.TerminalProvider;
                getSlaveInput(): java.io.InputStream;
                getSystemStream(): terminal.spi.SystemStream;
                setAttr(attr: Attributes): void;
                _current: Attributes;
                _provider: terminal.spi.TerminalProvider;
                _skipNextLf: boolean;
                _systemStream: terminal.spi.SystemStream;
              }
              interface AbstractPty extends CombineTypes<[_AbstractPty, jdk.internal.org.jline.terminal.spi.Pty, java.lang.Object]> {}
              interface _AbstractPty$FileDescriptorCreator$$static extends ClassLike {
              }
              let AbstractPty$FileDescriptorCreator: _AbstractPty$FileDescriptorCreator$$static;
              interface _AbstractPty$FileDescriptorCreator {
                newDescriptor(a0: int): java.io.FileDescriptor;
(a0: int): java.io.FileDescriptor;
              }
              interface AbstractPty$FileDescriptorCreator extends CombineTypes<[_AbstractPty$FileDescriptorCreator, java.lang.Object]> {}
              interface _AbstractPty$PtyInputStream$$static extends ClassLike {
                _new(this$0: AbstractPty, _in: java.io.InputStream): AbstractPty$PtyInputStream;
              }
              let AbstractPty$PtyInputStream: _AbstractPty$PtyInputStream$$static;
              interface _AbstractPty$PtyInputStream {
                read(timeout: long, a1: boolean): int;
                _setNonBlocking(): void;
                _c: int;
                _in: java.io.InputStream;
                _this$0: AbstractPty;
              }
              interface AbstractPty$PtyInputStream extends CombineTypes<[_AbstractPty$PtyInputStream, jdk.internal.org.jline.utils.NonBlockingInputStream]> {}
              interface _AbstractPty$ReflectionFileDescriptorCreator$$static extends ClassLike {
                _new(): AbstractPty$ReflectionFileDescriptorCreator;
              }
              let AbstractPty$ReflectionFileDescriptorCreator: _AbstractPty$ReflectionFileDescriptorCreator$$static;
              interface _AbstractPty$ReflectionFileDescriptorCreator {
                newDescriptor(fd: int): java.io.FileDescriptor;
                _fileDescriptorField: java.lang.reflect.Field;
              }
              interface AbstractPty$ReflectionFileDescriptorCreator extends CombineTypes<[_AbstractPty$ReflectionFileDescriptorCreator, jdk.internal.org.jline.terminal.impl.AbstractPty$FileDescriptorCreator, java.lang.Object]> {}
              interface _AbstractTerminal$$static extends ClassLike {
                new(name: string, type: string): AbstractTerminal;
                new(name: string, type: string, encoding: java.nio.charset.Charset, signalHandler: Terminal$SignalHandler): AbstractTerminal;
              }
              let AbstractTerminal: _AbstractTerminal$$static;
              interface _AbstractTerminal {
                canPauseResume(): boolean;
                _checkInterrupted(): void;
                close(): void;
                _doClose(): void;
                echo(): boolean;
                echo(echo: boolean): boolean;
                _echoSignal(signal: Terminal$Signal): void;
                encoding(): java.nio.charset.Charset;
                enterRawMode(): Attributes;
                flush(): void;
                getBooleanCapability(capability: jline.utils.InfoCmp$Capability): boolean;
                getCursorPosition(discarded: java.util.function.IntConsumer): Cursor;
                getKind(): string;
                getName(): string;
                getNumericCapability(capability: jline.utils.InfoCmp$Capability): int;
                getPalette(): jline.utils.ColorPalette;
                getStatus(): jline.utils.Status;
                getStatus(create: boolean): jline.utils.Status;
                getStringCapability(capability: jline.utils.InfoCmp$Capability): string;
                getType(): string;
                handle(signal: Terminal$Signal, handler: Terminal$SignalHandler): Terminal$SignalHandler;
                hasFocusSupport(): boolean;
                hasMouseSupport(): boolean;
                _parseInfoCmp(): void;
                pause(): void;
                pause(wait: boolean): void;
                paused(): boolean;
                puts(capability: jline.utils.InfoCmp$Capability, params: any[]): boolean;
                puts(capability: jline.utils.InfoCmp$Capability, ...params: any[]): boolean;
                raise(signal: Terminal$Signal): void;
                readMouseEvent(): MouseEvent;
                readMouseEvent(reader: java.util.function.IntSupplier): MouseEvent;
                resume(): void;
                setOnClose(onClose: java.lang.Runnable): void;
                trackFocus(tracking: boolean): boolean;
                trackMouse(tracking: Terminal$MouseTracking): boolean;
                _bools: java.util.Set<jline.utils.InfoCmp$Capability>;
                _encoding: java.nio.charset.Charset;
                _handlers: java.util.Map<Terminal$Signal,Terminal$SignalHandler>;
                _ints: java.util.Map<jline.utils.InfoCmp$Capability,int>;
                _lastMouseEvent: MouseEvent;
                _name: string;
                _onClose: java.lang.Runnable;
                _palette: jline.utils.ColorPalette;
                _status: jline.utils.Status;
                _strings: java.util.Map<jline.utils.InfoCmp$Capability,string>;
                _type: string;
              }
              interface AbstractTerminal extends CombineTypes<[_AbstractTerminal, java.lang.Object, jdk.internal.org.jline.terminal.spi.TerminalExt]> {}
              interface _AbstractWindowsConsoleWriter$$static extends ClassLike {
                new(): AbstractWindowsConsoleWriter;
              }
              let AbstractWindowsConsoleWriter: _AbstractWindowsConsoleWriter$$static;
              interface _AbstractWindowsConsoleWriter {
                close(): void;
                flush(): void;
                write(cbuf: char[], off: int, len: int): void;
                _writeConsole(a0: char[], a1: int): void;
(a0: char[], a1: int): void;
              }
              interface AbstractWindowsConsoleWriter extends CombineTypes<[_AbstractWindowsConsoleWriter, java.io.Writer]> {}
              interface _AbstractWindowsTerminal$$static<Console> extends ClassLike {
                _ALT_FLAG: int;
                _CAPSLOCK_ON: int;
                _CTRL_FLAG: int;
                _ENABLE_ECHO_INPUT: int;
                _ENABLE_EXTENDED_FLAGS: int;
                _ENABLE_INSERT_MODE: int;
                _ENABLE_LINE_INPUT: int;
                _ENABLE_MOUSE_INPUT: int;
                _ENABLE_PROCESSED_INPUT: int;
                _ENABLE_QUICK_EDIT_MODE: int;
                readonly ENABLE_VIRTUAL_TERMINAL_PROCESSING: int;
                _ENABLE_WINDOW_INPUT: int;
                _LEFT_ALT_PRESSED: int;
                _LEFT_CTRL_PRESSED: int;
                _NUMLOCK_ON: int;
                _RIGHT_ALT_PRESSED: int;
                _RIGHT_CTRL_PRESSED: int;
                _SCROLLLOCK_ON: int;
                _SHIFT_FLAG: int;
                _SHIFT_PRESSED: int;
                readonly TYPE_WINDOWS: string;
                readonly TYPE_WINDOWS_256_COLOR: string;
                readonly TYPE_WINDOWS_CONEMU: string;
                readonly TYPE_WINDOWS_VTP: string;
                _UTF8_CODE_PAGE: int;
                new(provider: terminal.spi.TerminalProvider, systemStream: terminal.spi.SystemStream, writer: java.io.Writer, name: string, type: string, encoding: java.nio.charset.Charset, nativeSignals: boolean, signalHandler: Terminal$SignalHandler, inConsole: Console, inConsoleMode: int, outConsole: Console, outConsoleMode: int, inputStreamWrapper: java.util.function.Function<java.io.InputStream,java.io.InputStream>): AbstractWindowsTerminal<Console>;
              }
              let AbstractWindowsTerminal: _AbstractWindowsTerminal$$static<Console>;
              interface _AbstractWindowsTerminal<Console> {
                canPauseResume(): boolean;
                _ctrl(key: char): int;
                _doClose(): void;
                getAttributes(): Attributes;
                _getConsoleMode(a0: Console): int;
                _getEscapeSequence(keyCode: short, keyState: int): string;
                getProvider(): terminal.spi.TerminalProvider;
                _getRawSequence(cap: jline.utils.InfoCmp$Capability): string;
                getSystemStream(): terminal.spi.SystemStream;
                handle(signal: Terminal$Signal, handler: Terminal$SignalHandler): Terminal$SignalHandler;
                hasFocusSupport(): boolean;
                input(): java.io.InputStream;
                output(): java.io.OutputStream;
                pause(): void;
                pause(wait: boolean): void;
                paused(): boolean;
                _processConsoleInput(): boolean;
                processInputChar(c: char): void;
                _processKeyEvent(isKeyDown: boolean, virtualKeyCode: short, ch: char, controlKeyState: int): void;
                _pump(): void;
                reader(): jline.utils.NonBlockingReader;
                resume(): void;
                setAttributes(attr: Attributes): void;
                _setConsoleMode(a0: Console, a1: int): void;
                setSize(size: Size): void;
                trackFocus(tracking: boolean): boolean;
                trackMouse(tracking: Terminal$MouseTracking): boolean;
                _updateConsoleMode(): void;
                writer(): java.io.PrintWriter;
                _attributes: Attributes;
                _closer: jline.utils.ShutdownHooks$Task;
                _closing: boolean;
                _focusTracking: boolean;
                _inConsole: Console;
                _input: java.io.InputStream;
                _lock: any;
                _nativeHandlers: java.util.Map<Terminal$Signal,any>;
                _originalInConsoleMode: int;
                _originalOutConsoleMode: int;
                _outConsole: Console;
                _output: java.io.OutputStream;
                _paused: boolean;
                _provider: terminal.spi.TerminalProvider;
                _pump: java.lang.Thread;
                _reader: jline.utils.NonBlockingReader;
                _skipNextLf: boolean;
                _slaveInputPipe: java.io.Writer;
                _systemStream: terminal.spi.SystemStream;
                _tracking: Terminal$MouseTracking;
                _writer: java.io.PrintWriter;
              }
              interface AbstractWindowsTerminal<Console> extends CombineTypes<[_AbstractWindowsTerminal<Console>, AbstractTerminal]> {}
              interface _CursorSupport$$static extends ClassLike {
                getCursorPosition(terminal: Terminal, discarded: java.util.function.IntConsumer): Cursor;
                new(): CursorSupport;
              }
              let CursorSupport: _CursorSupport$$static;
              interface _CursorSupport {
              }
              interface CursorSupport extends CombineTypes<[_CursorSupport, java.lang.Object]> {}
              interface _Diag$$static extends ClassLike {
                diag(out: java.io.PrintStream): void;
                _load<S>(clazz: java.lang.Class<S>): S;
                main(args: string[]): void;
                _testProvider(out: java.io.PrintStream, provider: terminal.spi.TerminalProvider): void;
                new(): Diag;
              }
              let Diag: _Diag$$static;
              interface _Diag {
              }
              interface Diag extends CombineTypes<[_Diag, java.lang.Object]> {}
              interface _DumbTerminal$$static extends ClassLike {
                new(_in: java.io.InputStream, out: java.io.OutputStream, inputStreamWrapper: java.util.function.Function<java.io.InputStream,java.io.InputStream>): DumbTerminal;
                new(name: string, type: string, _in: java.io.InputStream, out: java.io.OutputStream, encoding: java.nio.charset.Charset, inputStreamWrapper: java.util.function.Function<java.io.InputStream,java.io.InputStream>): DumbTerminal;
                new(provider: terminal.spi.TerminalProvider, systemStream: terminal.spi.SystemStream, name: string, type: string, _in: java.io.InputStream, out: java.io.OutputStream, encoding: java.nio.charset.Charset, signalHandler: Terminal$SignalHandler, inputStreamWrapper: java.util.function.Function<java.io.InputStream,java.io.InputStream>): DumbTerminal;
              }
              let DumbTerminal: _DumbTerminal$$static;
              interface _DumbTerminal {
                getAttributes(): Attributes;
                getProvider(): terminal.spi.TerminalProvider;
                getSize(): Size;
                getSystemStream(): terminal.spi.SystemStream;
                input(): java.io.InputStream;
                output(): java.io.OutputStream;
                reader(): jline.utils.NonBlockingReader;
                setAttributes(attr: Attributes): void;
                setSize(sz: Size): void;
                writer(): java.io.PrintWriter;
                _attributes: Attributes;
                _input: jline.utils.NonBlockingInputStream;
                _output: java.io.OutputStream;
                _provider: terminal.spi.TerminalProvider;
                _reader: jline.utils.NonBlockingReader;
                _size: Size;
                _skipNextLf: boolean;
                _systemStream: terminal.spi.SystemStream;
                _writer: java.io.PrintWriter;
              }
              interface DumbTerminal extends CombineTypes<[_DumbTerminal, jdk.internal.org.jline.terminal.impl.AbstractTerminal]> {}
              interface _DumbTerminalProvider$$static extends ClassLike {
                new(): DumbTerminalProvider;
              }
              let DumbTerminalProvider: _DumbTerminalProvider$$static;
              interface _DumbTerminalProvider {
                isSystemStream(stream: terminal.spi.SystemStream): boolean;
                name(): string;
                newTerminal(name: string, type: string, masterInput: java.io.InputStream, masterOutput: java.io.OutputStream, encoding: java.nio.charset.Charset, signalHandler: Terminal$SignalHandler, paused: boolean, attributes: Attributes, size: Size): Terminal;
                sysTerminal(name: string, type: string, ansiPassThrough: boolean, encoding: java.nio.charset.Charset, nativeSignals: boolean, signalHandler: Terminal$SignalHandler, paused: boolean, systemStream: terminal.spi.SystemStream, inputStreamWrapper: java.util.function.Function<java.io.InputStream,java.io.InputStream>): Terminal;
                systemStreamName(stream: terminal.spi.SystemStream): string;
                toString(): string;
              }
              interface DumbTerminalProvider extends CombineTypes<[_DumbTerminalProvider, jdk.internal.org.jline.terminal.spi.TerminalProvider, java.lang.Object]> {}
              interface _ExternalTerminal$$static extends ClassLike {
                new(name: string, type: string, masterInput: java.io.InputStream, masterOutput: java.io.OutputStream, encoding: java.nio.charset.Charset): ExternalTerminal;
                new(provider: terminal.spi.TerminalProvider, name: string, type: string, masterInput: java.io.InputStream, masterOutput: java.io.OutputStream, encoding: java.nio.charset.Charset, signalHandler: Terminal$SignalHandler): ExternalTerminal;
                new(provider: terminal.spi.TerminalProvider, name: string, type: string, masterInput: java.io.InputStream, masterOutput: java.io.OutputStream, encoding: java.nio.charset.Charset, signalHandler: Terminal$SignalHandler, paused: boolean): ExternalTerminal;
                new(provider: terminal.spi.TerminalProvider, name: string, type: string, masterInput: java.io.InputStream, masterOutput: java.io.OutputStream, encoding: java.nio.charset.Charset, signalHandler: Terminal$SignalHandler, paused: boolean, attributes: Attributes, size: Size): ExternalTerminal;
              }
              let ExternalTerminal: _ExternalTerminal$$static;
              interface _ExternalTerminal {
                canPauseResume(): boolean;
                _doClose(): void;
                getCursorPosition(discarded: java.util.function.IntConsumer): Cursor;
                getProvider(): terminal.spi.TerminalProvider;
                pause(): void;
                pause(wait: boolean): void;
                paused(): boolean;
                pump(): void;
                resume(): void;
                _closed: java.util.concurrent.atomic.AtomicBoolean;
                _lock: any;
                _masterInput: java.io.InputStream;
                _paused: boolean;
                _provider: terminal.spi.TerminalProvider;
                _pumpThread: java.lang.Thread;
              }
              interface ExternalTerminal extends CombineTypes<[_ExternalTerminal, jdk.internal.org.jline.terminal.impl.LineDisciplineTerminal]> {}
              interface _LineDisciplineTerminal$$static extends ClassLike {
                _ctrl(c: char): int;
                _getDefaultTerminalAttributes(): Attributes;
                _PIPE_SIZE: int;
                new(name: string, type: string, masterOutput: java.io.OutputStream, encoding: java.nio.charset.Charset): LineDisciplineTerminal;
                new(name: string, type: string, masterOutput: java.io.OutputStream, encoding: java.nio.charset.Charset, signalHandler: Terminal$SignalHandler): LineDisciplineTerminal;
              }
              let LineDisciplineTerminal: _LineDisciplineTerminal$$static;
              interface _LineDisciplineTerminal {
                _doClose(): void;
                _doProcessInputByte(c: int): boolean;
                getAttributes(): Attributes;
                getProvider(): terminal.spi.TerminalProvider;
                getSize(): Size;
                getSystemStream(): terminal.spi.SystemStream;
                input(): java.io.InputStream;
                output(): java.io.OutputStream;
                _processIOException(ioException: java.io.IOException): void;
                processInputByte(c: int): void;
                processInputBytes(input: byte[]): void;
                processInputBytes(input: byte[], offset: int, length: int): void;
                _processOutputByte(c: int): void;
                raise(signal: Terminal$Signal): void;
                reader(): jline.utils.NonBlockingReader;
                setAttributes(attr: Attributes): void;
                setSize(sz: Size): void;
                writer(): java.io.PrintWriter;
                _attributes: Attributes;
                _masterOutput: java.io.OutputStream;
                _size: Size;
                _skipNextLf: boolean;
                _slaveInput: jline.utils.NonBlockingPumpInputStream;
                _slaveInputPipe: java.io.OutputStream;
                _slaveOutput: java.io.OutputStream;
                _slaveReader: jline.utils.NonBlockingReader;
                _slaveWriter: java.io.PrintWriter;
              }
              interface LineDisciplineTerminal extends CombineTypes<[_LineDisciplineTerminal, jdk.internal.org.jline.terminal.impl.AbstractTerminal]> {}
              interface _LineDisciplineTerminal$FilteringOutputStream$$static extends ClassLike {
              }
              let LineDisciplineTerminal$FilteringOutputStream: _LineDisciplineTerminal$FilteringOutputStream$$static;
              interface _LineDisciplineTerminal$FilteringOutputStream {
                close(): void;
                flush(): void;
                write(b: int): void;
                write(b: byte[], off: int, len: int): void;
                _this$0: LineDisciplineTerminal;
              }
              interface LineDisciplineTerminal$FilteringOutputStream extends CombineTypes<[_LineDisciplineTerminal$FilteringOutputStream, java.io.OutputStream]> {}
              interface _MouseSupport$$static extends ClassLike {
                hasMouseSupport(terminal: Terminal): boolean;
                _readExt(terminal: Terminal): int;
                readMouse(terminal: Terminal, last: MouseEvent): MouseEvent;
                readMouse(reader: java.util.function.IntSupplier, last: MouseEvent): MouseEvent;
                trackMouse(terminal: Terminal, tracking: Terminal$MouseTracking): boolean;
                new(): MouseSupport;
              }
              let MouseSupport: _MouseSupport$$static;
              interface _MouseSupport {
              }
              interface MouseSupport extends CombineTypes<[_MouseSupport, java.lang.Object]> {}
              interface _NativeSignalHandler$$static extends ClassLike {
                readonly SIG_DFL: NativeSignalHandler;
                readonly SIG_IGN: NativeSignalHandler;
              }
              let NativeSignalHandler: _NativeSignalHandler$$static;
              interface _NativeSignalHandler {
                handle(signal: Terminal$Signal): void;
              }
              interface NativeSignalHandler extends CombineTypes<[_NativeSignalHandler, jdk.internal.org.jline.terminal.Terminal$SignalHandler, java.lang.Object]> {}
              interface _PosixPtyTerminal$$static extends ClassLike {
                new(name: string, type: string, pty: terminal.spi.Pty, _in: java.io.InputStream, out: java.io.OutputStream, encoding: java.nio.charset.Charset): PosixPtyTerminal;
                new(name: string, type: string, pty: terminal.spi.Pty, _in: java.io.InputStream, out: java.io.OutputStream, encoding: java.nio.charset.Charset, signalHandler: Terminal$SignalHandler): PosixPtyTerminal;
                new(name: string, type: string, pty: terminal.spi.Pty, _in: java.io.InputStream, out: java.io.OutputStream, encoding: java.nio.charset.Charset, signalHandler: Terminal$SignalHandler, paused: boolean): PosixPtyTerminal;
              }
              let PosixPtyTerminal: _PosixPtyTerminal$$static;
              interface _PosixPtyTerminal {
                canPauseResume(): boolean;
                _doClose(): void;
                input(): java.io.InputStream;
                output(): java.io.OutputStream;
                pause(): void;
                pause(wait: boolean): void;
                paused(): boolean;
                _pumpIn(): void;
                _pumpOut(): void;
                reader(): jline.utils.NonBlockingReader;
                resume(): void;
                writer(): java.io.PrintWriter;
                _in: java.io.InputStream;
                _input: jline.utils.NonBlockingInputStream;
                _inputPumpThread: java.lang.Thread;
                _lock: any;
                _masterInput: java.io.InputStream;
                _masterOutput: java.io.OutputStream;
                _out: java.io.OutputStream;
                _output: java.io.OutputStream;
                _outputPumpThread: java.lang.Thread;
                _paused: boolean;
                _reader: jline.utils.NonBlockingReader;
                _writer: java.io.PrintWriter;
              }
              interface PosixPtyTerminal extends CombineTypes<[_PosixPtyTerminal, jdk.internal.org.jline.terminal.impl.AbstractPosixTerminal]> {}
              interface _PosixPtyTerminal$InputStreamWrapper$$static extends ClassLike {
                _new(_in: jline.utils.NonBlockingInputStream): PosixPtyTerminal$InputStreamWrapper;
              }
              let PosixPtyTerminal$InputStreamWrapper: _PosixPtyTerminal$InputStreamWrapper$$static;
              interface _PosixPtyTerminal$InputStreamWrapper {
                close(): void;
                read(timeout: long, a1: boolean): int;
                _closed: boolean;
                _in: jline.utils.NonBlockingInputStream;
              }
              interface PosixPtyTerminal$InputStreamWrapper extends CombineTypes<[_PosixPtyTerminal$InputStreamWrapper, jdk.internal.org.jline.utils.NonBlockingInputStream]> {}
              interface _PosixSysTerminal$$static extends ClassLike {
                new(name: string, type: string, pty: terminal.spi.Pty, encoding: java.nio.charset.Charset, nativeSignals: boolean, signalHandler: Terminal$SignalHandler, inputStreamWrapper: java.util.function.Function<java.io.InputStream,java.io.InputStream>): PosixSysTerminal;
              }
              let PosixSysTerminal: _PosixSysTerminal$$static;
              interface _PosixSysTerminal {
                _doClose(): void;
                handle(signal: Terminal$Signal, handler: Terminal$SignalHandler): Terminal$SignalHandler;
                input(): java.io.InputStream;
                output(): java.io.OutputStream;
                reader(): jline.utils.NonBlockingReader;
                writer(): java.io.PrintWriter;
                _closer: jline.utils.ShutdownHooks$Task;
                _input: jline.utils.NonBlockingInputStream;
                _nativeHandlers: java.util.Map<Terminal$Signal,any>;
                _output: java.io.OutputStream;
                _reader: jline.utils.NonBlockingReader;
                _writer: java.io.PrintWriter;
              }
              interface PosixSysTerminal extends CombineTypes<[_PosixSysTerminal, jdk.internal.org.jline.terminal.impl.AbstractPosixTerminal]> {}
            }
            module spi {
              interface _Pty$$static extends ClassLike {
              }
              let Pty: _Pty$$static;
              interface _Pty {
                getAttr(): Attributes;
                getMasterInput(): java.io.InputStream;
                getMasterOutput(): java.io.OutputStream;
                getProvider(): TerminalProvider;
                getSize(): Size;
                getSlaveInput(): java.io.InputStream;
                getSlaveOutput(): java.io.OutputStream;
                getSystemStream(): SystemStream;
                setAttr(a0: Attributes): void;
                setSize(a0: Size): void;
              }
              interface Pty extends CombineTypes<[_Pty, java.io.Closeable, java.lang.Object]> {}
              interface _SystemStream$$static extends ClassLike {
                valueOf(name: string): SystemStream;
                values(): SystemStream[];
                readonly Error: SystemStream;
                readonly Input: SystemStream;
                readonly Output: SystemStream;
              }
              let SystemStream: _SystemStream$$static;
              interface _SystemStream {
              }
              interface SystemStream extends CombineTypes<[_SystemStream]> {}
              interface _TerminalExt$$static extends ClassLike {
              }
              let TerminalExt: _TerminalExt$$static;
              interface _TerminalExt {
                getProvider(): TerminalProvider;
                getSystemStream(): SystemStream;
              }
              interface TerminalExt extends CombineTypes<[_TerminalExt, jdk.internal.org.jline.terminal.Terminal, java.lang.Object]> {}
              interface _TerminalProvider$$static extends ClassLike {
                load(name: string): TerminalProvider;
              }
              let TerminalProvider: _TerminalProvider$$static;
              interface _TerminalProvider {
                isSystemStream(a0: SystemStream): boolean;
                name(): string;
                newTerminal(a0: string, a1: string, a2: java.io.InputStream, a3: java.io.OutputStream, a4: java.nio.charset.Charset, a5: Terminal$SignalHandler, a6: boolean, a7: Attributes, a8: Size): Terminal;
                sysTerminal(a0: string, a1: string, a2: boolean, a3: java.nio.charset.Charset, a4: boolean, a5: Terminal$SignalHandler, a6: boolean, a7: SystemStream, a8: java.util.function.Function<java.io.InputStream,java.io.InputStream>): Terminal;
                systemStreamName(a0: SystemStream): string;
              }
              interface TerminalProvider extends CombineTypes<[_TerminalProvider, java.lang.Object]> {}
            }
            interface _Attributes$$static extends ClassLike {
              new(): Attributes;
              new(attr: Attributes): Attributes;
            }
            let Attributes: _Attributes$$static;
            interface _Attributes {
              _append<T>(set: java.util.EnumSet<T>): string;
              _append<T>(set: java.util.EnumSet<T>, toString: java.util.function.Function<T,string>): string;
              copy(attributes: Attributes): void;
              _display(c: Attributes$ControlChar): string;
              getControlChar(c: Attributes$ControlChar): int;
              getControlChars(): java.util.EnumMap<Attributes$ControlChar,int>;
              getControlFlag(flag: Attributes$ControlFlag): boolean;
              getControlFlags(): java.util.EnumSet<Attributes$ControlFlag>;
              getInputFlag(flag: Attributes$InputFlag): boolean;
              getInputFlags(): java.util.EnumSet<Attributes$InputFlag>;
              getLocalFlag(flag: Attributes$LocalFlag): boolean;
              getLocalFlags(): java.util.EnumSet<Attributes$LocalFlag>;
              getOutputFlag(flag: Attributes$OutputFlag): boolean;
              getOutputFlags(): java.util.EnumSet<Attributes$OutputFlag>;
              setControlChar(c: Attributes$ControlChar, value: int): void;
              setControlChars(chars: java.util.EnumMap<Attributes$ControlChar,int>): void;
              setControlFlag(flag: Attributes$ControlFlag, value: boolean): void;
              setControlFlags(flags: java.util.EnumSet<Attributes$ControlFlag>): void;
              setControlFlags(flags: java.util.EnumSet<Attributes$ControlFlag>, value: boolean): void;
              setInputFlag(flag: Attributes$InputFlag, value: boolean): void;
              setInputFlags(flags: java.util.EnumSet<Attributes$InputFlag>): void;
              setInputFlags(flags: java.util.EnumSet<Attributes$InputFlag>, value: boolean): void;
              setLocalFlag(flag: Attributes$LocalFlag, value: boolean): void;
              setLocalFlags(flags: java.util.EnumSet<Attributes$LocalFlag>): void;
              setLocalFlags(flags: java.util.EnumSet<Attributes$LocalFlag>, value: boolean): void;
              setOutputFlag(flag: Attributes$OutputFlag, value: boolean): void;
              setOutputFlags(flags: java.util.EnumSet<Attributes$OutputFlag>): void;
              setOutputFlags(flags: java.util.EnumSet<Attributes$OutputFlag>, value: boolean): void;
              toString(): string;
              _cchars: java.util.EnumMap<Attributes$ControlChar,int>;
              _cflag: java.util.EnumSet<Attributes$ControlFlag>;
              _iflag: java.util.EnumSet<Attributes$InputFlag>;
              _lflag: java.util.EnumSet<Attributes$LocalFlag>;
              _oflag: java.util.EnumSet<Attributes$OutputFlag>;
            }
            interface Attributes extends CombineTypes<[_Attributes, java.lang.Object]> {}
            interface _Attributes$ControlChar$$static extends ClassLike {
              valueOf(name: string): Attributes$ControlChar;
              values(): Attributes$ControlChar[];
              readonly VDISCARD: Attributes$ControlChar;
              readonly VDSUSP: Attributes$ControlChar;
              readonly VEOF: Attributes$ControlChar;
              readonly VEOL: Attributes$ControlChar;
              readonly VEOL2: Attributes$ControlChar;
              readonly VERASE: Attributes$ControlChar;
              readonly VINTR: Attributes$ControlChar;
              readonly VKILL: Attributes$ControlChar;
              readonly VLNEXT: Attributes$ControlChar;
              readonly VMIN: Attributes$ControlChar;
              readonly VQUIT: Attributes$ControlChar;
              readonly VREPRINT: Attributes$ControlChar;
              readonly VSTART: Attributes$ControlChar;
              readonly VSTATUS: Attributes$ControlChar;
              readonly VSTOP: Attributes$ControlChar;
              readonly VSUSP: Attributes$ControlChar;
              readonly VTIME: Attributes$ControlChar;
              readonly VWERASE: Attributes$ControlChar;
            }
            let Attributes$ControlChar: _Attributes$ControlChar$$static;
            interface _Attributes$ControlChar {
            }
            interface Attributes$ControlChar extends CombineTypes<[_Attributes$ControlChar]> {}
            interface _Attributes$ControlFlag$$static extends ClassLike {
              valueOf(name: string): Attributes$ControlFlag;
              values(): Attributes$ControlFlag[];
              readonly CCAR_OFLOW: Attributes$ControlFlag;
              readonly CCTS_OFLOW: Attributes$ControlFlag;
              readonly CDSR_OFLOW: Attributes$ControlFlag;
              readonly CDTR_IFLOW: Attributes$ControlFlag;
              readonly CIGNORE: Attributes$ControlFlag;
              readonly CLOCAL: Attributes$ControlFlag;
              readonly CREAD: Attributes$ControlFlag;
              readonly CRTS_IFLOW: Attributes$ControlFlag;
              readonly CS5: Attributes$ControlFlag;
              readonly CS6: Attributes$ControlFlag;
              readonly CS7: Attributes$ControlFlag;
              readonly CS8: Attributes$ControlFlag;
              readonly CSTOPB: Attributes$ControlFlag;
              readonly HUPCL: Attributes$ControlFlag;
              readonly PARENB: Attributes$ControlFlag;
              readonly PARODD: Attributes$ControlFlag;
            }
            let Attributes$ControlFlag: _Attributes$ControlFlag$$static;
            interface _Attributes$ControlFlag {
            }
            interface Attributes$ControlFlag extends CombineTypes<[_Attributes$ControlFlag]> {}
            interface _Attributes$InputFlag$$static extends ClassLike {
              valueOf(name: string): Attributes$InputFlag;
              values(): Attributes$InputFlag[];
              readonly BRKINT: Attributes$InputFlag;
              readonly ICRNL: Attributes$InputFlag;
              readonly IGNBRK: Attributes$InputFlag;
              readonly IGNCR: Attributes$InputFlag;
              readonly IGNPAR: Attributes$InputFlag;
              readonly IMAXBEL: Attributes$InputFlag;
              readonly INLCR: Attributes$InputFlag;
              readonly INORMEOL: Attributes$InputFlag;
              readonly INPCK: Attributes$InputFlag;
              readonly ISTRIP: Attributes$InputFlag;
              readonly IUTF8: Attributes$InputFlag;
              readonly IXANY: Attributes$InputFlag;
              readonly IXOFF: Attributes$InputFlag;
              readonly IXON: Attributes$InputFlag;
              readonly PARMRK: Attributes$InputFlag;
            }
            let Attributes$InputFlag: _Attributes$InputFlag$$static;
            interface _Attributes$InputFlag {
            }
            interface Attributes$InputFlag extends CombineTypes<[_Attributes$InputFlag]> {}
            interface _Attributes$LocalFlag$$static extends ClassLike {
              valueOf(name: string): Attributes$LocalFlag;
              values(): Attributes$LocalFlag[];
              readonly ALTWERASE: Attributes$LocalFlag;
              readonly ECHO: Attributes$LocalFlag;
              readonly ECHOCTL: Attributes$LocalFlag;
              readonly ECHOE: Attributes$LocalFlag;
              readonly ECHOK: Attributes$LocalFlag;
              readonly ECHOKE: Attributes$LocalFlag;
              readonly ECHONL: Attributes$LocalFlag;
              readonly ECHOPRT: Attributes$LocalFlag;
              readonly EXTPROC: Attributes$LocalFlag;
              readonly FLUSHO: Attributes$LocalFlag;
              readonly ICANON: Attributes$LocalFlag;
              readonly IEXTEN: Attributes$LocalFlag;
              readonly ISIG: Attributes$LocalFlag;
              readonly NOFLSH: Attributes$LocalFlag;
              readonly NOKERNINFO: Attributes$LocalFlag;
              readonly PENDIN: Attributes$LocalFlag;
              readonly TOSTOP: Attributes$LocalFlag;
            }
            let Attributes$LocalFlag: _Attributes$LocalFlag$$static;
            interface _Attributes$LocalFlag {
            }
            interface Attributes$LocalFlag extends CombineTypes<[_Attributes$LocalFlag]> {}
            interface _Attributes$OutputFlag$$static extends ClassLike {
              valueOf(name: string): Attributes$OutputFlag;
              values(): Attributes$OutputFlag[];
              readonly BSDLY: Attributes$OutputFlag;
              readonly CRDLY: Attributes$OutputFlag;
              readonly FFDLY: Attributes$OutputFlag;
              readonly NLDLY: Attributes$OutputFlag;
              readonly OCRNL: Attributes$OutputFlag;
              readonly OFDEL: Attributes$OutputFlag;
              readonly OFILL: Attributes$OutputFlag;
              readonly ONLCR: Attributes$OutputFlag;
              readonly ONLRET: Attributes$OutputFlag;
              readonly ONOCR: Attributes$OutputFlag;
              readonly ONOEOT: Attributes$OutputFlag;
              readonly OPOST: Attributes$OutputFlag;
              readonly OXTABS: Attributes$OutputFlag;
              readonly TABDLY: Attributes$OutputFlag;
              readonly VTDLY: Attributes$OutputFlag;
            }
            let Attributes$OutputFlag: _Attributes$OutputFlag$$static;
            interface _Attributes$OutputFlag {
            }
            interface Attributes$OutputFlag extends CombineTypes<[_Attributes$OutputFlag]> {}
            interface _Cursor$$static extends ClassLike {
              new(x: int, y: int): Cursor;
            }
            let Cursor: _Cursor$$static;
            interface _Cursor {
              equals(o: any): boolean;
              getX(): int;
              getY(): int;
              hashCode(): int;
              toString(): string;
              _x: int;
              _y: int;
            }
            interface Cursor extends CombineTypes<[_Cursor, java.lang.Object]> {}
            interface _MouseEvent$$static extends ClassLike {
              new(type: MouseEvent$Type, button: MouseEvent$Button, modifiers: java.util.EnumSet<MouseEvent$Modifier>, x: int, y: int): MouseEvent;
            }
            let MouseEvent: _MouseEvent$$static;
            interface _MouseEvent {
              getButton(): MouseEvent$Button;
              getModifiers(): java.util.EnumSet<MouseEvent$Modifier>;
              getType(): MouseEvent$Type;
              getX(): int;
              getY(): int;
              toString(): string;
              _button: MouseEvent$Button;
              _modifiers: java.util.EnumSet<MouseEvent$Modifier>;
              _type: MouseEvent$Type;
              _x: int;
              _y: int;
            }
            interface MouseEvent extends CombineTypes<[_MouseEvent, java.lang.Object]> {}
            interface _MouseEvent$Button$$static extends ClassLike {
              valueOf(name: string): MouseEvent$Button;
              values(): MouseEvent$Button[];
              readonly Button1: MouseEvent$Button;
              readonly Button2: MouseEvent$Button;
              readonly Button3: MouseEvent$Button;
              readonly NoButton: MouseEvent$Button;
              readonly WheelDown: MouseEvent$Button;
              readonly WheelUp: MouseEvent$Button;
            }
            let MouseEvent$Button: _MouseEvent$Button$$static;
            interface _MouseEvent$Button {
            }
            interface MouseEvent$Button extends CombineTypes<[_MouseEvent$Button]> {}
            interface _MouseEvent$Modifier$$static extends ClassLike {
              valueOf(name: string): MouseEvent$Modifier;
              values(): MouseEvent$Modifier[];
              readonly Alt: MouseEvent$Modifier;
              readonly Control: MouseEvent$Modifier;
              readonly Shift: MouseEvent$Modifier;
            }
            let MouseEvent$Modifier: _MouseEvent$Modifier$$static;
            interface _MouseEvent$Modifier {
            }
            interface MouseEvent$Modifier extends CombineTypes<[_MouseEvent$Modifier]> {}
            interface _MouseEvent$Type$$static extends ClassLike {
              valueOf(name: string): MouseEvent$Type;
              values(): MouseEvent$Type[];
              readonly Dragged: MouseEvent$Type;
              readonly Moved: MouseEvent$Type;
              readonly Pressed: MouseEvent$Type;
              readonly Released: MouseEvent$Type;
              readonly Wheel: MouseEvent$Type;
            }
            let MouseEvent$Type: _MouseEvent$Type$$static;
            interface _MouseEvent$Type {
            }
            interface MouseEvent$Type extends CombineTypes<[_MouseEvent$Type]> {}
            interface _Size$$static extends ClassLike {
              new(): Size;
              new(columns: int, rows: int): Size;
            }
            let Size: _Size$$static;
            interface _Size {
              copy(size: Size): void;
              cursorPos(row: int, col: int): int;
              equals(o: any): boolean;
              getColumns(): int;
              getRows(): int;
              hashCode(): int;
              setColumns(columns: int): void;
              setRows(rows: int): void;
              toString(): string;
              _cols: int;
              _rows: int;
            }
            interface Size extends CombineTypes<[_Size, java.lang.Object]> {}
            interface _Terminal$$static extends ClassLike {
              readonly TYPE_DUMB: string;
              readonly TYPE_DUMB_COLOR: string;
            }
            let Terminal: _Terminal$$static;
            interface _Terminal {
              canPauseResume(): boolean;
              echo(): boolean;
              echo(a0: boolean): boolean;
              encoding(): java.nio.charset.Charset;
              enterRawMode(): Attributes;
              flush(): void;
              getAttributes(): Attributes;
              getBooleanCapability(a0: jline.utils.InfoCmp$Capability): boolean;
              getBufferSize(): Size;
              getCursorPosition(a0: java.util.function.IntConsumer): Cursor;
              getHeight(): int;
              getName(): string;
              getNumericCapability(a0: jline.utils.InfoCmp$Capability): int;
              getPalette(): jline.utils.ColorPalette;
              getSize(): Size;
              getStringCapability(a0: jline.utils.InfoCmp$Capability): string;
              getType(): string;
              getWidth(): int;
              handle(a0: Terminal$Signal, a1: Terminal$SignalHandler): Terminal$SignalHandler;
              hasFocusSupport(): boolean;
              hasMouseSupport(): boolean;
              input(): java.io.InputStream;
              output(): java.io.OutputStream;
              pause(): void;
              pause(a0: boolean): void;
              paused(): boolean;
              puts(a0: jline.utils.InfoCmp$Capability, a1: any[]): boolean;
              puts(a0: jline.utils.InfoCmp$Capability, ...a1: any[]): boolean;
              raise(a0: Terminal$Signal): void;
              readMouseEvent(): MouseEvent;
              readMouseEvent(a0: java.util.function.IntSupplier): MouseEvent;
              reader(): jline.utils.NonBlockingReader;
              resume(): void;
              setAttributes(a0: Attributes): void;
              setSize(a0: Size): void;
              trackFocus(a0: boolean): boolean;
              trackMouse(a0: Terminal$MouseTracking): boolean;
              writer(): java.io.PrintWriter;
            }
            interface Terminal extends CombineTypes<[_Terminal, java.io.Closeable, java.lang.Object, java.io.Flushable]> {}
            interface _Terminal$MouseTracking$$static extends ClassLike {
              valueOf(name: string): Terminal$MouseTracking;
              values(): Terminal$MouseTracking[];
              readonly Any: Terminal$MouseTracking;
              readonly Button: Terminal$MouseTracking;
              readonly Normal: Terminal$MouseTracking;
              readonly Off: Terminal$MouseTracking;
            }
            let Terminal$MouseTracking: _Terminal$MouseTracking$$static;
            interface _Terminal$MouseTracking {
            }
            interface Terminal$MouseTracking extends CombineTypes<[_Terminal$MouseTracking]> {}
            interface _Terminal$Signal$$static extends ClassLike {
              valueOf(name: string): Terminal$Signal;
              values(): Terminal$Signal[];
              readonly CONT: Terminal$Signal;
              readonly INFO: Terminal$Signal;
              readonly INT: Terminal$Signal;
              readonly QUIT: Terminal$Signal;
              readonly TSTP: Terminal$Signal;
              readonly WINCH: Terminal$Signal;
            }
            let Terminal$Signal: _Terminal$Signal$$static;
            interface _Terminal$Signal {
            }
            interface Terminal$Signal extends CombineTypes<[_Terminal$Signal]> {}
            interface _Terminal$SignalHandler$$static extends ClassLike {
              readonly SIG_DFL: Terminal$SignalHandler;
              readonly SIG_IGN: Terminal$SignalHandler;
            }
            let Terminal$SignalHandler: _Terminal$SignalHandler$$static;
            interface _Terminal$SignalHandler {
              handle(a0: Terminal$Signal): void;
(a0: Terminal$Signal): void;
            }
            interface Terminal$SignalHandler extends CombineTypes<[_Terminal$SignalHandler, java.lang.Object]> {}
            interface _TerminalBuilder$$static extends ClassLike {
              builder(): TerminalBuilder;
              _getBoolean(name: string, def: boolean): boolean;
              _getCodepageCharset(codepage: int): java.nio.charset.Charset;
              _getParentProcessCommand(): string;
              _load<S>(clazz: java.lang.Class<S>): S;
              _select(system: java.util.Map<terminal.spi.SystemStream,boolean>, streams: terminal.spi.SystemStream[]): terminal.spi.SystemStream;
              _select(system: java.util.Map<terminal.spi.SystemStream,boolean>, ...streams: terminal.spi.SystemStream[]): terminal.spi.SystemStream;
              setTerminalOverride(terminal: Terminal): void;
              terminal(): Terminal;
              readonly DEPRECATED_PROVIDERS: java.util.Set<string>;
              readonly PROP_CODEPAGE: string;
              readonly PROP_COLOR_DISTANCE: string;
              readonly PROP_DISABLE_ALTERNATE_CHARSET: string;
              readonly PROP_DISABLE_DEPRECATED_PROVIDER_WARNING: string;
              readonly PROP_DUMB: string;
              readonly PROP_DUMB_COLOR: string;
              readonly PROP_ENCODING: string;
              readonly PROP_EXEC: string;
              readonly PROP_FFM: string;
              readonly PROP_FILE_DESCRIPTOR_CREATION_MODE: string;
              readonly PROP_FILE_DESCRIPTOR_CREATION_MODE_DEFAULT: string;
              readonly PROP_FILE_DESCRIPTOR_CREATION_MODE_NATIVE: string;
              readonly PROP_FILE_DESCRIPTOR_CREATION_MODE_REFLECTION: string;
              readonly PROP_JANSI: string;
              readonly PROP_JNA: string;
              readonly PROP_JNI: string;
              readonly PROP_NON_BLOCKING_READS: string;
              readonly PROP_OUTPUT: string;
              readonly PROP_OUTPUT_ERR: string;
              readonly PROP_OUTPUT_ERR_OUT: string;
              readonly PROP_OUTPUT_FORCED_ERR: string;
              readonly PROP_OUTPUT_FORCED_OUT: string;
              readonly PROP_OUTPUT_OUT: string;
              readonly PROP_OUTPUT_OUT_ERR: string;
              readonly PROP_PROVIDER: string;
              readonly PROP_PROVIDERS: string;
              readonly PROP_PROVIDERS_DEFAULT: string;
              readonly PROP_PROVIDER_DUMB: string;
              readonly PROP_PROVIDER_EXEC: string;
              readonly PROP_PROVIDER_FFM: string;
              readonly PROP_PROVIDER_JANSI: string;
              readonly PROP_PROVIDER_JNA: string;
              readonly PROP_PROVIDER_JNI: string;
              readonly PROP_REDIRECT_PIPE_CREATION_MODE: string;
              readonly PROP_REDIRECT_PIPE_CREATION_MODE_DEFAULT: string;
              readonly PROP_REDIRECT_PIPE_CREATION_MODE_NATIVE: string;
              readonly PROP_REDIRECT_PIPE_CREATION_MODE_REFLECTION: string;
              readonly PROP_TYPE: string;
              _SYSTEM_TERMINAL: java.util.concurrent.atomic.AtomicReference<Terminal>;
              _TERMINAL_OVERRIDE: java.util.concurrent.atomic.AtomicReference<Terminal>;
              _UTF8_CODE_PAGE: int;
            }
            let TerminalBuilder: _TerminalBuilder$$static;
            interface _TerminalBuilder {
              attributes(attributes: Attributes): TerminalBuilder;
              build(): Terminal;
              _checkProvider(provider: string, exception: java.lang.IllegalStateException, providers: java.util.List<terminal.spi.TerminalProvider>, load: boolean, property: string, name: string): void;
              codepage(codepage: int): TerminalBuilder;
              color(color: boolean): TerminalBuilder;
              computeEncoding(): java.nio.charset.Charset;
              computeSystemOutput(): TerminalBuilder$SystemOutput;
              computeType(): string;
              _doBuild(): Terminal;
              dumb(dumb: boolean): TerminalBuilder;
              encoding(encoding: string): TerminalBuilder;
              encoding(encoding: java.nio.charset.Charset): TerminalBuilder;
              exec(exec: boolean): TerminalBuilder;
              ffm(ffm: boolean): TerminalBuilder;
              _getDumbTerminalType(dumb: boolean, systemStream: terminal.spi.SystemStream): string;
              getProviders(provider: string, exception: java.lang.IllegalStateException): java.util.List<terminal.spi.TerminalProvider>;
              inputStreamWrapper(wrapper: java.util.function.Function<java.io.InputStream,java.io.InputStream>): TerminalBuilder;
              jansi(jansi: boolean): TerminalBuilder;
              jna(jna: boolean): TerminalBuilder;
              jni(jni: boolean): TerminalBuilder;
              name(name: string): TerminalBuilder;
              nativeSignals(nativeSignals: boolean): TerminalBuilder;
              paused(paused: boolean): TerminalBuilder;
              provider(provider: string): TerminalBuilder;
              providers(providers: string): TerminalBuilder;
              _select(system: java.util.Map<terminal.spi.SystemStream,boolean>, systemOutput: TerminalBuilder$SystemOutput): terminal.spi.SystemStream;
              signalHandler(signalHandler: Terminal$SignalHandler): TerminalBuilder;
              size(size: Size): TerminalBuilder;
              streams(_in: java.io.InputStream, out: java.io.OutputStream): TerminalBuilder;
              system(system: boolean): TerminalBuilder;
              systemOutput(systemOutput: TerminalBuilder$SystemOutput): TerminalBuilder;
              type(type: string): TerminalBuilder;
              _attributes: Attributes;
              _codepage: int;
              _color: boolean;
              _dumb: boolean;
              _encoding: java.nio.charset.Charset;
              _exec: boolean;
              _ffm: boolean;
              _in: java.io.InputStream;
              _inputStreamWrapper: java.util.function.Function<java.io.InputStream,java.io.InputStream>;
              _jansi: boolean;
              _jna: boolean;
              _jni: boolean;
              _name: string;
              _nativeSignals: boolean;
              _out: java.io.OutputStream;
              _paused: boolean;
              _provider: string;
              _providers: string;
              _signalHandler: Terminal$SignalHandler;
              _size: Size;
              _system: boolean;
              _systemOutput: TerminalBuilder$SystemOutput;
              _type: string;
            }
            interface TerminalBuilder extends CombineTypes<[_TerminalBuilder, java.lang.Object]> {}
            interface _TerminalBuilder$SystemOutput$$static extends ClassLike {
              valueOf(name: string): TerminalBuilder$SystemOutput;
              values(): TerminalBuilder$SystemOutput[];
              readonly ForcedSysErr: TerminalBuilder$SystemOutput;
              readonly ForcedSysOut: TerminalBuilder$SystemOutput;
              readonly SysErr: TerminalBuilder$SystemOutput;
              readonly SysErrOrSysOut: TerminalBuilder$SystemOutput;
              readonly SysOut: TerminalBuilder$SystemOutput;
              readonly SysOutOrSysErr: TerminalBuilder$SystemOutput;
            }
            let TerminalBuilder$SystemOutput: _TerminalBuilder$SystemOutput$$static;
            interface _TerminalBuilder$SystemOutput {
            }
            interface TerminalBuilder$SystemOutput extends CombineTypes<[_TerminalBuilder$SystemOutput]> {}
          }
          module utils {
            interface _AnsiWriter$$static extends ClassLike {
              _ATTRIBUTE_BLINK_FAST: int;
              _ATTRIBUTE_BLINK_OFF: int;
              _ATTRIBUTE_BLINK_SLOW: int;
              _ATTRIBUTE_CONCEAL_OFF: int;
              _ATTRIBUTE_CONCEAL_ON: int;
              _ATTRIBUTE_INTENSITY_BOLD: int;
              _ATTRIBUTE_INTENSITY_FAINT: int;
              _ATTRIBUTE_INTENSITY_NORMAL: int;
              _ATTRIBUTE_ITALIC: int;
              _ATTRIBUTE_NEGATIVE_OFF: int;
              _ATTRIBUTE_NEGATIVE_ON: int;
              _ATTRIBUTE_NEGATIVE_Off: int;
              _ATTRIBUTE_UNDERLINE: int;
              _ATTRIBUTE_UNDERLINE_DOUBLE: int;
              _ATTRIBUTE_UNDERLINE_OFF: int;
              _BEL: int;
              _BLACK: int;
              _BLUE: int;
              _CYAN: int;
              _ERASE_LINE: int;
              _ERASE_LINE_TO_BEGINING: int;
              _ERASE_LINE_TO_END: int;
              _ERASE_SCREEN: int;
              _ERASE_SCREEN_TO_BEGINING: int;
              _ERASE_SCREEN_TO_END: int;
              _FIRST_ESC_CHAR: int;
              _GREEN: int;
              _LOOKING_FOR_CHARSET: int;
              _LOOKING_FOR_FIRST_ESC_CHAR: int;
              _LOOKING_FOR_INT_ARG_END: int;
              _LOOKING_FOR_NEXT_ARG: int;
              _LOOKING_FOR_OSC_COMMAND: int;
              _LOOKING_FOR_OSC_COMMAND_END: int;
              _LOOKING_FOR_OSC_PARAM: int;
              _LOOKING_FOR_SECOND_ESC_CHAR: int;
              _LOOKING_FOR_ST: int;
              _LOOKING_FOR_STR_ARG_END: int;
              _MAGENTA: int;
              _MAX_ESCAPE_SEQUENCE_LENGTH: int;
              _RED: int;
              _RESET_CODE: char[];
              _SECOND_CHARSET0_CHAR: int;
              _SECOND_CHARSET1_CHAR: int;
              _SECOND_ESC_CHAR: int;
              _SECOND_OSC_CHAR: int;
              _SECOND_ST_CHAR: int;
              _WHITE: int;
              _YELLOW: int;
              new(out: java.io.Writer): AnsiWriter;
            }
            let AnsiWriter: _AnsiWriter$$static;
            interface _AnsiWriter {
              close(): void;
              _getNextOptionInt(optionsIterator: java.util.Iterator<any>): int;
              _optionInt(options: java.util.ArrayList<any>, index: int): int;
              _optionInt(options: java.util.ArrayList<any>, index: int, defaultValue: int): int;
              _processAttributeRest(): void;
              _processChangeIconName(name: string): void;
              _processChangeIconNameAndWindowTitle(label: string): void;
              _processChangeWindowTitle(title: string): void;
              _processCharsetSelect(options: java.util.ArrayList<any>): boolean;
              _processCharsetSelect(set: int, seq: char): void;
              _processCursorDown(count: int): void;
              _processCursorDownLine(count: int): void;
              _processCursorLeft(count: int): void;
              _processCursorRight(count: int): void;
              _processCursorTo(row: int, col: int): void;
              _processCursorToColumn(x: int): void;
              _processCursorUp(count: int): void;
              _processCursorUpLine(count: int): void;
              _processDefaultBackgroundColor(): void;
              _processDefaultTextColor(): void;
              _processDeleteLine(optionInt: int): void;
              _processEraseLine(eraseOption: int): void;
              _processEraseScreen(eraseOption: int): void;
              _processEscapeCommand(options: java.util.ArrayList<any>, command: int): boolean;
              _processInsertLine(optionInt: int): void;
              _processOperatingSystemCommand(options: java.util.ArrayList<any>): boolean;
              _processRestoreCursorPosition(): void;
              _processSaveCursorPosition(): void;
              _processScrollDown(optionInt: int): void;
              _processScrollUp(optionInt: int): void;
              _processSetAttribute(attribute: int): void;
              _processSetBackgroundColor(color: int): void;
              _processSetBackgroundColor(color: int, bright: boolean): void;
              _processSetBackgroundColorExt(paletteIndex: int): void;
              _processSetBackgroundColorExt(r: int, g: int, b: int): void;
              _processSetForegroundColor(color: int): void;
              _processSetForegroundColor(color: int, bright: boolean): void;
              _processSetForegroundColorExt(paletteIndex: int): void;
              _processSetForegroundColorExt(r: int, g: int, b: int): void;
              _processUnknownExtension(options: java.util.ArrayList<any>, command: int): void;
              _processUnknownOperatingSystemCommand(command: int, param: string): void;
              _reset(skipBuffer: boolean): void;
              write(data: int): void;
              write(cbuf: char[], off: int, len: int): void;
              write(str: string, off: int, len: int): void;
              _buffer: char[];
              _options: java.util.ArrayList<any>;
              _pos: int;
              _startOfValue: int;
              _state: int;
            }
            interface AnsiWriter extends CombineTypes<[_AnsiWriter, java.io.FilterWriter]> {}
            interface _AttributedCharSequence$$static extends ClassLike {
              _attr(sb: AttributedCharSequence$stringBuilder, s: string, first: boolean): boolean;
              rgbColor(col: int): int;
              roundColor(col: int, max: int): int;
              roundRgbColor(r: int, g: int, b: int, max: int): int;
              _DISABLE_ALTERNATE_CHARSET: boolean;
              _HIGH_COLORS: int;
              readonly TRUE_COLORS: int;
              new(): AttributedCharSequence;
            }
            let AttributedCharSequence: _AttributedCharSequence$$static;
            interface _AttributedCharSequence {
              _buffer(): char[];
              charAt(index: int): char;
              codePointAt(index: int): int;
              codePointBefore(index: int): int;
              codePointCount(index: int, length: int): int;
              columnLength(): int;
              columnSplitLength(columns: int): java.util.List<AttributedString>;
              columnSplitLength(columns: int, includeNewlines: boolean, delayLineWrap: boolean): java.util.List<AttributedString>;
              columnSubSequence(start: int, stop: int): AttributedString;
              contains(c: char): boolean;
              isHidden(index: int): boolean;
              _offset(): int;
              print(terminal: jline.terminal.Terminal): void;
              println(terminal: jline.terminal.Terminal): void;
              runLimit(index: int): int;
              runStart(index: int): int;
              styleAt(a0: int): AttributedStyle;
              _styleCodeAt(index: int): long;
              subSequence(a0: int, a1: int): AttributedString;
              subSequence(a0: int, a1: int): AttributedCharSequence$charSequence;
              substring(start: int, end: int): AttributedString;
              toAnsi(): string;
              toAnsi(terminal: jline.terminal.Terminal): string;
              toAnsi(colors: int, force256colors: boolean): string;
              toAnsi(colors: int, force256colors: boolean, altIn: string, altOut: string): string;
              toAnsi(colors: int, force: AttributedCharSequence$ForceMode): string;
              toAnsi(colors: int, force: AttributedCharSequence$ForceMode, palette: ColorPalette): string;
              toAnsi(colors: int, force: AttributedCharSequence$ForceMode, palette: ColorPalette, altIn: string, altOut: string): string;
              toAttributedString(): AttributedString;
              toString(): string;
            }
            interface AttributedCharSequence extends CombineTypes<[_AttributedCharSequence, java.lang.CharSequence, java.lang.Object]> {}
            interface _AttributedCharSequence$ForceMode$$static extends ClassLike {
              valueOf(name: string): AttributedCharSequence$ForceMode;
              values(): AttributedCharSequence$ForceMode[];
              readonly Force256Colors: AttributedCharSequence$ForceMode;
              readonly ForceTrueColors: AttributedCharSequence$ForceMode;
              readonly None: AttributedCharSequence$ForceMode;
            }
            let AttributedCharSequence$ForceMode: _AttributedCharSequence$ForceMode$$static;
            interface _AttributedCharSequence$ForceMode {
            }
            interface AttributedCharSequence$ForceMode extends CombineTypes<[_AttributedCharSequence$ForceMode]> {}
            interface _AttributedString$$static extends ClassLike {
              fromAnsi(ansi: string): AttributedString;
              fromAnsi(ansi: string, tabs: int): AttributedString;
              fromAnsi(ansi: string, tabs: java.util.List<int>): AttributedString;
              fromAnsi(ansi: string, terminal: jline.terminal.Terminal): AttributedString;
              fromAnsi(ansi: string, tabs: java.util.List<int>, altIn: string, altOut: string): AttributedString;
              join(delimiter: AttributedString, elements: AttributedString[]): AttributedString;
              join(delimiter: AttributedString, ...elements: AttributedString[]): AttributedString;
              join(delimiter: AttributedString, elements: java.lang.Iterable<AttributedString>): AttributedString;
              stripAnsi(ansi: string): string;
              readonly EMPTY: AttributedString;
              readonly NEWLINE: AttributedString;
              new(str: AttributedString$charSequence): AttributedString;
              new(str: AttributedString$charSequence, start: int, end: int): AttributedString;
              new(str: AttributedString$charSequence, s: AttributedStyle): AttributedString;
              new(str: AttributedString$charSequence, start: int, end: int, s: AttributedStyle): AttributedString;
              _new(buffer: char[], style: long[], start: int, end: int): AttributedString;
            }
            let AttributedString: _AttributedString$$static;
            interface _AttributedString {
              _arrEq(a1: char[], a2: char[], s1: int, s2: int, l: int): boolean;
              _arrEq(a1: long[], a2: long[], s1: int, s2: int, l: int): boolean;
              _buffer(): char[];
              equals(o: any): boolean;
              hashCode(): int;
              length(): int;
              _offset(): int;
              styleAt(index: int): AttributedStyle;
              _styleCodeAt(index: int): long;
              styleMatches(pattern: java.util.regex.Pattern, style: AttributedStyle): AttributedString;
              subSequence(start: int, end: int): AttributedString;
              subSequence(a0: int, a1: int): AttributedString$charSequence;
              _buffer: char[];
              _end: int;
              _start: int;
              _style: long[];
            }
            interface AttributedString extends CombineTypes<[_AttributedString, jdk.internal.org.jline.utils.AttributedCharSequence]> {}
            interface _AttributedStringBuilder$$static extends ClassLike {
              append(strings: AttributedStringBuilder$charSequence[]): AttributedString;
              append(...strings: AttributedStringBuilder$charSequence[]): AttributedString;
              _equals(a: char[], aFromIndex: int, b: char[], bFromIndex: int, length: int): boolean;
              new(): AttributedStringBuilder;
              new(capacity: int): AttributedStringBuilder;
            }
            let AttributedStringBuilder: _AttributedStringBuilder$$static;
            interface _AttributedStringBuilder {
              altCharset(altIn: string, altOut: string): AttributedStringBuilder;
              ansiAppend(ansi: string): AttributedStringBuilder;
              append(csq: AttributedStringBuilder$charSequence): AttributedStringBuilder;
              append(csq: AttributedStringBuilder$charSequence, start: int, end: int): AttributedStringBuilder;
              append(c: char): AttributedStringBuilder;
              append(c: char, repeat: int): AttributedStringBuilder;
              append(csq: AttributedStringBuilder$charSequence, style: AttributedStyle): AttributedStringBuilder;
              append(str: AttributedString): AttributedStringBuilder;
              append(str: AttributedString, start: int, end: int): AttributedStringBuilder;
              append(str: AttributedCharSequence): AttributedStringBuilder;
              append(str: AttributedCharSequence, start: int, end: int): AttributedStringBuilder;
              append(a0: char): java.lang.Appendable;
              append(a0: AttributedStringBuilder$charSequence, a1: int, a2: int): java.lang.Appendable;
              append(a0: AttributedStringBuilder$charSequence): java.lang.Appendable;
              appendAnsi(ansi: string): void;
              _buffer(): char[];
              charAt(index: int): char;
              _ensureCapacity(nl: int): void;
              _insertTab(s: AttributedStyle): void;
              length(): int;
              _offset(): int;
              setLength(l: int): void;
              style(style: AttributedStyle): AttributedStringBuilder;
              style(style: java.util.function.Function<AttributedStyle,AttributedStyle>): AttributedStringBuilder;
              style(): AttributedStyle;
              styleAt(index: int): AttributedStyle;
              _styleCodeAt(index: int): long;
              styleMatches(pattern: java.util.regex.Pattern, s: AttributedStyle): AttributedStringBuilder;
              styleMatches(pattern: java.util.regex.Pattern, styles: java.util.List<AttributedStyle>): AttributedStringBuilder;
              styled(style: java.util.function.Function<AttributedStyle,AttributedStyle>, cs: AttributedStringBuilder$charSequence): AttributedStringBuilder;
              styled(style: AttributedStyle, cs: AttributedStringBuilder$charSequence): AttributedStringBuilder;
              styled(style: java.util.function.Function<AttributedStyle,AttributedStyle>, consumer: java.util.function.Consumer<AttributedStringBuilder>): AttributedStringBuilder;
              subSequence(start: int, end: int): AttributedString;
              subSequence(a0: int, a1: int): AttributedStringBuilder$charSequence;
              tabs(tabsize: int): AttributedStringBuilder;
              tabs(tabs: java.util.List<int>): AttributedStringBuilder;
              _altIn: char[];
              _altOut: char[];
              _buffer: char[];
              _current: AttributedStyle;
              _inAltCharset: boolean;
              _lastLineLength: int;
              _length: int;
              _style: long[];
              _tabs: AttributedStringBuilder$TabStops;
            }
            interface AttributedStringBuilder extends CombineTypes<[_AttributedStringBuilder, java.lang.Appendable, jdk.internal.org.jline.utils.AttributedCharSequence]> {}
            interface _AttributedStringBuilder$TabStops$$static extends ClassLike {
              new(tabs: int): AttributedStringBuilder$TabStops;
              new(tabs: java.util.List<int>): AttributedStringBuilder$TabStops;
            }
            let AttributedStringBuilder$TabStops: _AttributedStringBuilder$TabStops$$static;
            interface _AttributedStringBuilder$TabStops {
              _defined(): boolean;
              _spaces(lastLineLength: int): int;
              _lastSize: int;
              _lastStop: int;
              _tabs: java.util.List<int>;
            }
            interface AttributedStringBuilder$TabStops extends CombineTypes<[_AttributedStringBuilder$TabStops, java.lang.Object]> {}
            interface _AttributedStyle$$static extends ClassLike {
              _BG_COLOR: long;
              _BG_COLOR_EXP: int;
              readonly BLACK: int;
              readonly BLUE: int;
              readonly BOLD: AttributedStyle;
              readonly BOLD_OFF: AttributedStyle;
              readonly BRIGHT: int;
              readonly CYAN: int;
              readonly DEFAULT: AttributedStyle;
              _FG_COLOR: long;
              _FG_COLOR_EXP: int;
              _F_BACKGROUND: long;
              _F_BACKGROUND_IND: long;
              _F_BACKGROUND_RGB: long;
              _F_BLINK: long;
              _F_BOLD: long;
              _F_CONCEAL: long;
              _F_CROSSED_OUT: long;
              _F_FAINT: long;
              _F_FOREGROUND: long;
              _F_FOREGROUND_IND: long;
              _F_FOREGROUND_RGB: long;
              _F_HIDDEN: long;
              _F_INVERSE: long;
              _F_ITALIC: long;
              _F_UNDERLINE: long;
              readonly GREEN: int;
              readonly HIDDEN: AttributedStyle;
              readonly HIDDEN_OFF: AttributedStyle;
              readonly INVERSE: AttributedStyle;
              readonly INVERSE_OFF: AttributedStyle;
              readonly MAGENTA: int;
              _MASK: long;
              readonly RED: int;
              readonly WHITE: int;
              readonly YELLOW: int;
              new(): AttributedStyle;
              new(s: AttributedStyle): AttributedStyle;
              new(style: long, a1: long): AttributedStyle;
            }
            let AttributedStyle: _AttributedStyle$$static;
            interface _AttributedStyle {
              background(color: int): AttributedStyle;
              background(r: int, g: int, b: int): AttributedStyle;
              backgroundDefault(): AttributedStyle;
              backgroundOff(): AttributedStyle;
              backgroundRgb(color: int): AttributedStyle;
              blink(): AttributedStyle;
              blinkDefault(): AttributedStyle;
              blinkOff(): AttributedStyle;
              bold(): AttributedStyle;
              boldDefault(): AttributedStyle;
              boldOff(): AttributedStyle;
              conceal(): AttributedStyle;
              concealDefault(): AttributedStyle;
              concealOff(): AttributedStyle;
              crossedOut(): AttributedStyle;
              crossedOutDefault(): AttributedStyle;
              crossedOutOff(): AttributedStyle;
              equals(o: any): boolean;
              faint(): AttributedStyle;
              faintDefault(): AttributedStyle;
              faintOff(): AttributedStyle;
              foreground(color: int): AttributedStyle;
              foreground(r: int, g: int, b: int): AttributedStyle;
              foregroundDefault(): AttributedStyle;
              foregroundOff(): AttributedStyle;
              foregroundRgb(color: int): AttributedStyle;
              getMask(): long;
              getStyle(): long;
              hashCode(): int;
              hidden(): AttributedStyle;
              hiddenDefault(): AttributedStyle;
              hiddenOff(): AttributedStyle;
              inverse(): AttributedStyle;
              inverseDefault(): AttributedStyle;
              inverseNeg(): AttributedStyle;
              inverseOff(): AttributedStyle;
              italic(): AttributedStyle;
              italicDefault(): AttributedStyle;
              italicOff(): AttributedStyle;
              toAnsi(): string;
              toString(): string;
              underline(): AttributedStyle;
              underlineDefault(): AttributedStyle;
              underlineOff(): AttributedStyle;
              _mask: long;
              _style: long;
            }
            interface AttributedStyle extends CombineTypes<[_AttributedStyle, java.lang.Object]> {}
            interface _ClosedException$$static extends ClassLike {
              _serialVersionUID: long;
              new(): ClosedException;
              new(message: string): ClosedException;
              new(message: string, cause: java.lang.Throwable): ClosedException;
              new(cause: java.lang.Throwable): ClosedException;
            }
            let ClosedException: _ClosedException$$static;
            interface _ClosedException {
            }
            interface ClosedException extends CombineTypes<[_ClosedException, java.io.IOException]> {}
            interface _ColorPalette$$static extends ClassLike {
              _doLoad(terminal: jline.terminal.Terminal): int[];
              readonly DEFAULT: ColorPalette;
              readonly XTERM_INITC: string;
              new(): ColorPalette;
              new(terminal: jline.terminal.Terminal): ColorPalette;
              new(terminal: jline.terminal.Terminal, distance: string): ColorPalette;
            }
            let ColorPalette: _ColorPalette$$static;
            interface _ColorPalette {
              canChange(): boolean;
              getColor(index: int): int;
              _getDist(): Colors$Distance;
              getDistanceName(): string;
              getLength(): int;
              isReal(): boolean;
              loadPalette(): boolean;
              _loadPalette(doLoad: boolean): void;
              round(r: int, g: int, b: int): int;
              round(col: int): int;
              setColor(index: int, color: int): void;
              setDistance(name: string): void;
              toString(): string;
              _distance: Colors$Distance;
              _distanceName: string;
              _osc4: boolean;
              _palette: int[];
              _terminal: jline.terminal.Terminal;
            }
            interface ColorPalette extends CombineTypes<[_ColorPalette, java.lang.Object]> {}
            interface _Colors$$static extends ClassLike {
              CAT02toHPE(RGB: double[]): double[];
              _calculateH(h: double): double;
              _cam02(p1: int, p2: int, vc: double[]): double;
              _camlab(color: int): double[];
              _camlab(color: int, vc: double[]): double[];
              _camlch(c1: double[], c2: double[]): double;
              _camlch(c1: double[], c2: double[], w: double[]): double;
              _camlch(color: int): double[];
              _camlch(color: int, vc: double[]): double[];
              _cie00(lab1: double[], lab2: double[]): double;
              _cie94(lab1: double[], lab2: double[]): double;
              _doGetDistance(dist: string): Colors$Distance;
              _forwardPostAdaptationConeResponse(RGB: double[], vc: double[]): double[];
              _forwardPreAdaptationConeResponse(XYZ: double[]): double[];
              _forwardResponseCompression(RGB: double[], vc: double[]): double[];
              _forwardTransform(XYZ: double[], vc: double[]): double[];
              _getDistance(dist: string): Colors$Distance;
              _getWeights(dist: string): double[];
              _hueDifference(hue1: double, a1: double, hue2: double): double;
              _jmh2ucs(lch: double[]): double[];
              _lch2lab(lch: double[]): double[];
              _pivotRgb(n: double): double;
              _pivotXyz(n: double): double;
              _rgb(color: int): double[];
              _rgb2cielab(color: int): double[];
              rgb2cielab(rgb: double[]): double[];
              _rgb2xyz(color: int): double[];
              _rgb2xyz(rgb: double[]): double[];
              rgbColor(col: int): int;
              rgbColor(name: string): int;
              roundColor(col: int, max: int): int;
              roundColor(col: int, max: int, dist: string): int;
              _roundColor(color: int, colors: int[], max: int, dist: string): int;
              _roundColor(color: int, colors: int[], max: int, distance: Colors$Distance): int;
              roundRgbColor(r: int, g: int, b: int, max: int): int;
              _scalar(c1: double[], c2: double[], w: double[]): double;
              _scalar(c1: double[], c2: double[]): double;
              setRgbColors(colors: int[]): void;
              _sqr(n: double): double;
              _vc(xyz_w: double[], L_A: double, a2: double, Y_b: double[]): double[];
              _xyz2camlch(xyz: double[], vc: double[]): double[];
              _xyz2lab(xyz: double[]): double[];
              _A: int;
              readonly AdobeRGB_environment: double[];
              _B: int;
              readonly C: int;
              _COLORS_256: int[];
              _COLOR_NAMES: java.util.Map<string,int>;
              readonly D50: double[];
              readonly D65: double[];
              readonly DEFAULT_COLORS_256: int[];
              readonly DEFAULT_COLORS_88: int[];
              readonly H: int;
              readonly J: int;
              _L: int;
              readonly M: int;
              readonly Q: int;
              _SUR_C: int;
              _SUR_F: int;
              _SUR_N_C: int;
              _VC_A_W: int;
              _VC_C: int;
              _VC_D_RGB_B: int;
              _VC_D_RGB_G: int;
              _VC_D_RGB_R: int;
              _VC_F: int;
              _VC_F_L: int;
              _VC_L_A: int;
              _VC_N: int;
              _VC_N_BB: int;
              _VC_N_C: int;
              _VC_N_CB: int;
              _VC_X_W: int;
              _VC_Y_B: int;
              _VC_Y_W: int;
              _VC_Z: int;
              _VC_Z_W: int;
              _X: int;
              _Y: int;
              _Z: int;
              readonly averageSurrounding: double[];
              readonly darkSurrounding: double[];
              readonly dimSurrounding: double[];
              _epsilon: double;
              readonly h: int;
              _k1: double;
              _k2: double;
              _kappa: double;
              _kc: double;
              _kh: double;
              _kl: double;
              readonly s: int;
              readonly sRGB_encoding_environment: double[];
              readonly sRGB_typical_environment: double[];
              new(): Colors;
            }
            let Colors: _Colors$$static;
            interface _Colors {
            }
            interface Colors extends CombineTypes<[_Colors, java.lang.Object]> {}
            interface _Colors$Distance$$static extends ClassLike {
            }
            let Colors$Distance: _Colors$Distance$$static;
            interface _Colors$Distance {
              compute(a0: int, a1: int): double;
(a0: int, a1: int): double;
            }
            interface Colors$Distance extends CombineTypes<[_Colors$Distance, java.lang.Object]> {}
            interface _Colors$NamedDistance$$static extends ClassLike {
              new(name: string, delegate: Colors$Distance): Colors$NamedDistance;
            }
            let Colors$NamedDistance: _Colors$NamedDistance$$static;
            interface _Colors$NamedDistance {
              compute(c1: int, c2: int): double;
              toString(): string;
              _delegate: Colors$Distance;
              _name: string;
            }
            interface Colors$NamedDistance extends CombineTypes<[_Colors$NamedDistance, java.lang.Object, jdk.internal.org.jline.utils.Colors$Distance]> {}
            interface _Curses$$static extends ClassLike {
              _doTputs(out: java.lang.Appendable, str: string, params: any[]): void;
              _doTputs(out: java.lang.Appendable, str: string, ...params: any[]): void;
              _toInteger(pop: any): int;
              tputs(cap: string, params: any[]): string;
              tputs(cap: string, ...params: any[]): string;
              tputs(out: java.lang.Appendable, str: string, params: any[]): void;
              tputs(out: java.lang.Appendable, str: string, ...params: any[]): void;
              _IFTE_ELSE: int;
              _IFTE_IF: int;
              _IFTE_NONE: int;
              _IFTE_THEN: int;
              _dv: any[];
              _sv: any[];
            }
            let Curses: _Curses$$static;
            interface _Curses {
            }
            interface Curses extends CombineTypes<[_Curses, java.lang.Object]> {}
            interface _DiffHelper$$static extends ClassLike {
              diff(text1: AttributedString, text2: AttributedString): java.util.List<DiffHelper$Diff>;
              new(): DiffHelper;
            }
            let DiffHelper: _DiffHelper$$static;
            interface _DiffHelper {
            }
            interface DiffHelper extends CombineTypes<[_DiffHelper, java.lang.Object]> {}
            interface _DiffHelper$Diff$$static extends ClassLike {
              new(operation: DiffHelper$Operation, text: AttributedString): DiffHelper$Diff;
            }
            let DiffHelper$Diff: _DiffHelper$Diff$$static;
            interface _DiffHelper$Diff {
              toString(): string;
              readonly operation: DiffHelper$Operation;
              readonly text: AttributedString;
            }
            interface DiffHelper$Diff extends CombineTypes<[_DiffHelper$Diff, java.lang.Object]> {}
            interface _DiffHelper$Operation$$static extends ClassLike {
              valueOf(name: string): DiffHelper$Operation;
              values(): DiffHelper$Operation[];
              readonly DELETE: DiffHelper$Operation;
              readonly EQUAL: DiffHelper$Operation;
              readonly INSERT: DiffHelper$Operation;
            }
            let DiffHelper$Operation: _DiffHelper$Operation$$static;
            interface _DiffHelper$Operation {
            }
            interface DiffHelper$Operation extends CombineTypes<[_DiffHelper$Operation]> {}
            interface _Display$$static extends ClassLike {
              _longestCommon(l1: java.util.List<AttributedString>, l2: java.util.List<AttributedString>): int[];
              DISABLE_CR: boolean;
              new(terminal: jline.terminal.Terminal, fullscreen: boolean): Display;
            }
            let Display: _Display$$static;
            interface _Display {
              _can(single: InfoCmp$Capability, multi: InfoCmp$Capability): boolean;
              clear(): void;
              _computeCost(cap: InfoCmp$Capability): int;
              _cost(cap: InfoCmp$Capability): int;
              delayLineWrap(): boolean;
              _deleteChars(nb: int): boolean;
              _deleteLines(nb: int): boolean;
              _insertChars(nb: int): boolean;
              _insertLines(nb: int): boolean;
              _moveVisualCursorTo(targetPos: int, newLines: java.util.List<AttributedString>): void;
              _moveVisualCursorTo(i1: int): int;
              _perform(single: InfoCmp$Capability, multi: InfoCmp$Capability, nb: int): boolean;
              _rawPrint(c: char, num: int): void;
              _rawPrint(c: int): void;
              _rawPrint(str: AttributedString): void;
              reset(): void;
              resize(rows: int, columns: int): void;
              setDelayLineWrap(v: boolean): void;
              update(newLines: java.util.List<AttributedString>, targetCursorPos: int): void;
              update(newLines: java.util.List<AttributedString>, targetCursorPos: int, flush: boolean): void;
              updateAnsi(newLines: java.util.List<string>, targetCursorPos: int): void;
              wcwidth(str: string): int;
              _canScroll: boolean;
              _columns: int;
              _columns1: int;
              _cost: java.util.Map<InfoCmp$Capability,int>;
              _cursorDownIsNewLine: boolean;
              _cursorPos: int;
              _delayLineWrap: boolean;
              _delayedWrapAtEol: boolean;
              _fullScreen: boolean;
              _oldLines: java.util.List<AttributedString>;
              _reset: boolean;
              _rows: int;
              _terminal: jline.terminal.Terminal;
              _wrapAtEol: boolean;
            }
            interface Display extends CombineTypes<[_Display, java.lang.Object]> {}
            interface _ExecHelper$$static extends ClassLike {
              _close(closeables: java.io.Closeable[]): void;
              _close(...closeables: java.io.Closeable[]): void;
              exec(redirectInput: boolean, cmd: string[]): string;
              exec(redirectInput: boolean, ...cmd: string[]): string;
              waitAndCapture(p: java.lang.Process): string;
            }
            let ExecHelper: _ExecHelper$$static;
            interface _ExecHelper {
            }
            interface ExecHelper extends CombineTypes<[_ExecHelper, java.lang.Object]> {}
            interface _FastBufferedOutputStream$$static extends ClassLike {
              new(out: java.io.OutputStream): FastBufferedOutputStream;
            }
            let FastBufferedOutputStream: _FastBufferedOutputStream$$static;
            interface _FastBufferedOutputStream {
              flush(): void;
              _flushBuffer(): void;
              write(b: int): void;
              write(b: byte[], off: int, len: int): void;
              _buf: byte[];
              _count: int;
            }
            interface FastBufferedOutputStream extends CombineTypes<[_FastBufferedOutputStream, java.io.FilterOutputStream]> {}
            interface _InfoCmp$$static extends ClassLike {
              getCapabilitiesByName(): java.util.Map<string,InfoCmp$Capability>;
              getInfoCmp(terminal: string): string;
              getLoadedInfoCmp(terminal: string): string;
              _loadDefaultInfoCmp(name: string): string;
              parseInfoCmp(capabilities: string, bools: java.util.Set<InfoCmp$Capability>, ints: java.util.Map<InfoCmp$Capability,int>, strings: java.util.Map<InfoCmp$Capability,string>): void;
              setDefaultInfoCmp(terminal: string, caps: string): void;
              setDefaultInfoCmp(terminal: string, caps: java.util.function.Supplier<string>): void;
              _CAPS: java.util.Map<string,any>;
            }
            let InfoCmp: _InfoCmp$$static;
            interface _InfoCmp {
            }
            interface InfoCmp extends CombineTypes<[_InfoCmp, java.lang.Object]> {}
            interface _InfoCmp$Capability$$static extends ClassLike {
              byName(name: string): InfoCmp$Capability;
              valueOf(name: string): InfoCmp$Capability;
              values(): InfoCmp$Capability[];
              readonly acs_chars: InfoCmp$Capability;
              readonly alt_scancode_esc: InfoCmp$Capability;
              readonly auto_left_margin: InfoCmp$Capability;
              readonly auto_right_margin: InfoCmp$Capability;
              readonly back_color_erase: InfoCmp$Capability;
              readonly back_tab: InfoCmp$Capability;
              readonly bell: InfoCmp$Capability;
              readonly bit_image_carriage_return: InfoCmp$Capability;
              readonly bit_image_entwining: InfoCmp$Capability;
              readonly bit_image_newline: InfoCmp$Capability;
              readonly bit_image_repeat: InfoCmp$Capability;
              readonly bit_image_type: InfoCmp$Capability;
              readonly buffer_capacity: InfoCmp$Capability;
              readonly buttons: InfoCmp$Capability;
              readonly can_change: InfoCmp$Capability;
              readonly carriage_return: InfoCmp$Capability;
              readonly ceol_standout_glitch: InfoCmp$Capability;
              readonly change_char_pitch: InfoCmp$Capability;
              readonly change_line_pitch: InfoCmp$Capability;
              readonly change_res_horz: InfoCmp$Capability;
              readonly change_res_vert: InfoCmp$Capability;
              readonly change_scroll_region: InfoCmp$Capability;
              readonly char_padding: InfoCmp$Capability;
              readonly char_set_names: InfoCmp$Capability;
              readonly clear_all_tabs: InfoCmp$Capability;
              readonly clear_margins: InfoCmp$Capability;
              readonly clear_screen: InfoCmp$Capability;
              readonly clr_bol: InfoCmp$Capability;
              readonly clr_eol: InfoCmp$Capability;
              readonly clr_eos: InfoCmp$Capability;
              readonly code_set_init: InfoCmp$Capability;
              readonly col_addr_glitch: InfoCmp$Capability;
              readonly color_names: InfoCmp$Capability;
              readonly column_address: InfoCmp$Capability;
              readonly columns: InfoCmp$Capability;
              readonly command_character: InfoCmp$Capability;
              readonly cpi_changes_res: InfoCmp$Capability;
              readonly cr_cancels_micro_mode: InfoCmp$Capability;
              readonly create_window: InfoCmp$Capability;
              readonly cursor_address: InfoCmp$Capability;
              readonly cursor_down: InfoCmp$Capability;
              readonly cursor_home: InfoCmp$Capability;
              readonly cursor_invisible: InfoCmp$Capability;
              readonly cursor_left: InfoCmp$Capability;
              readonly cursor_mem_address: InfoCmp$Capability;
              readonly cursor_normal: InfoCmp$Capability;
              readonly cursor_right: InfoCmp$Capability;
              readonly cursor_to_ll: InfoCmp$Capability;
              readonly cursor_up: InfoCmp$Capability;
              readonly cursor_visible: InfoCmp$Capability;
              readonly define_bit_image_region: InfoCmp$Capability;
              readonly define_char: InfoCmp$Capability;
              readonly delete_character: InfoCmp$Capability;
              readonly delete_line: InfoCmp$Capability;
              readonly dest_tabs_magic_smso: InfoCmp$Capability;
              readonly device_type: InfoCmp$Capability;
              readonly dial_phone: InfoCmp$Capability;
              readonly dis_status_line: InfoCmp$Capability;
              readonly display_clock: InfoCmp$Capability;
              readonly display_pc_char: InfoCmp$Capability;
              readonly dot_horz_spacing: InfoCmp$Capability;
              readonly dot_vert_spacing: InfoCmp$Capability;
              readonly down_half_line: InfoCmp$Capability;
              readonly eat_newline_glitch: InfoCmp$Capability;
              readonly ena_acs: InfoCmp$Capability;
              readonly end_bit_image_region: InfoCmp$Capability;
              readonly enter_alt_charset_mode: InfoCmp$Capability;
              readonly enter_am_mode: InfoCmp$Capability;
              readonly enter_blink_mode: InfoCmp$Capability;
              readonly enter_bold_mode: InfoCmp$Capability;
              readonly enter_ca_mode: InfoCmp$Capability;
              readonly enter_delete_mode: InfoCmp$Capability;
              readonly enter_dim_mode: InfoCmp$Capability;
              readonly enter_doublewide_mode: InfoCmp$Capability;
              readonly enter_draft_quality: InfoCmp$Capability;
              readonly enter_horizontal_hl_mode: InfoCmp$Capability;
              readonly enter_insert_mode: InfoCmp$Capability;
              readonly enter_italics_mode: InfoCmp$Capability;
              readonly enter_left_hl_mode: InfoCmp$Capability;
              readonly enter_leftward_mode: InfoCmp$Capability;
              readonly enter_low_hl_mode: InfoCmp$Capability;
              readonly enter_micro_mode: InfoCmp$Capability;
              readonly enter_near_letter_quality: InfoCmp$Capability;
              readonly enter_normal_quality: InfoCmp$Capability;
              readonly enter_pc_charset_mode: InfoCmp$Capability;
              readonly enter_protected_mode: InfoCmp$Capability;
              readonly enter_reverse_mode: InfoCmp$Capability;
              readonly enter_right_hl_mode: InfoCmp$Capability;
              readonly enter_scancode_mode: InfoCmp$Capability;
              readonly enter_secure_mode: InfoCmp$Capability;
              readonly enter_shadow_mode: InfoCmp$Capability;
              readonly enter_standout_mode: InfoCmp$Capability;
              readonly enter_subscript_mode: InfoCmp$Capability;
              readonly enter_superscript_mode: InfoCmp$Capability;
              readonly enter_top_hl_mode: InfoCmp$Capability;
              readonly enter_underline_mode: InfoCmp$Capability;
              readonly enter_upward_mode: InfoCmp$Capability;
              readonly enter_vertical_hl_mode: InfoCmp$Capability;
              readonly enter_xon_mode: InfoCmp$Capability;
              readonly erase_chars: InfoCmp$Capability;
              readonly erase_overstrike: InfoCmp$Capability;
              readonly exit_alt_charset_mode: InfoCmp$Capability;
              readonly exit_am_mode: InfoCmp$Capability;
              readonly exit_attribute_mode: InfoCmp$Capability;
              readonly exit_ca_mode: InfoCmp$Capability;
              readonly exit_delete_mode: InfoCmp$Capability;
              readonly exit_doublewide_mode: InfoCmp$Capability;
              readonly exit_insert_mode: InfoCmp$Capability;
              readonly exit_italics_mode: InfoCmp$Capability;
              readonly exit_leftward_mode: InfoCmp$Capability;
              readonly exit_micro_mode: InfoCmp$Capability;
              readonly exit_pc_charset_mode: InfoCmp$Capability;
              readonly exit_scancode_mode: InfoCmp$Capability;
              readonly exit_shadow_mode: InfoCmp$Capability;
              readonly exit_standout_mode: InfoCmp$Capability;
              readonly exit_subscript_mode: InfoCmp$Capability;
              readonly exit_superscript_mode: InfoCmp$Capability;
              readonly exit_underline_mode: InfoCmp$Capability;
              readonly exit_upward_mode: InfoCmp$Capability;
              readonly exit_xon_mode: InfoCmp$Capability;
              readonly fixed_pause: InfoCmp$Capability;
              readonly flash_hook: InfoCmp$Capability;
              readonly flash_screen: InfoCmp$Capability;
              readonly form_feed: InfoCmp$Capability;
              readonly from_status_line: InfoCmp$Capability;
              readonly generic_type: InfoCmp$Capability;
              readonly get_mouse: InfoCmp$Capability;
              readonly goto_window: InfoCmp$Capability;
              readonly hangup: InfoCmp$Capability;
              readonly hard_copy: InfoCmp$Capability;
              readonly hard_cursor: InfoCmp$Capability;
              readonly has_meta_key: InfoCmp$Capability;
              readonly has_print_wheel: InfoCmp$Capability;
              readonly has_status_line: InfoCmp$Capability;
              readonly hue_lightness_saturation: InfoCmp$Capability;
              readonly init_1string: InfoCmp$Capability;
              readonly init_2string: InfoCmp$Capability;
              readonly init_3string: InfoCmp$Capability;
              readonly init_file: InfoCmp$Capability;
              readonly init_prog: InfoCmp$Capability;
              readonly init_tabs: InfoCmp$Capability;
              readonly initialize_color: InfoCmp$Capability;
              readonly initialize_pair: InfoCmp$Capability;
              readonly insert_character: InfoCmp$Capability;
              readonly insert_line: InfoCmp$Capability;
              readonly insert_null_glitch: InfoCmp$Capability;
              readonly insert_padding: InfoCmp$Capability;
              readonly key_a1: InfoCmp$Capability;
              readonly key_a3: InfoCmp$Capability;
              readonly key_b2: InfoCmp$Capability;
              readonly key_backspace: InfoCmp$Capability;
              readonly key_beg: InfoCmp$Capability;
              readonly key_btab: InfoCmp$Capability;
              readonly key_c1: InfoCmp$Capability;
              readonly key_c3: InfoCmp$Capability;
              readonly key_cancel: InfoCmp$Capability;
              readonly key_catab: InfoCmp$Capability;
              readonly key_clear: InfoCmp$Capability;
              readonly key_close: InfoCmp$Capability;
              readonly key_command: InfoCmp$Capability;
              readonly key_copy: InfoCmp$Capability;
              readonly key_create: InfoCmp$Capability;
              readonly key_ctab: InfoCmp$Capability;
              readonly key_dc: InfoCmp$Capability;
              readonly key_dl: InfoCmp$Capability;
              readonly key_down: InfoCmp$Capability;
              readonly key_eic: InfoCmp$Capability;
              readonly key_end: InfoCmp$Capability;
              readonly key_enter: InfoCmp$Capability;
              readonly key_eol: InfoCmp$Capability;
              readonly key_eos: InfoCmp$Capability;
              readonly key_exit: InfoCmp$Capability;
              readonly key_f0: InfoCmp$Capability;
              readonly key_f1: InfoCmp$Capability;
              readonly key_f10: InfoCmp$Capability;
              readonly key_f11: InfoCmp$Capability;
              readonly key_f12: InfoCmp$Capability;
              readonly key_f13: InfoCmp$Capability;
              readonly key_f14: InfoCmp$Capability;
              readonly key_f15: InfoCmp$Capability;
              readonly key_f16: InfoCmp$Capability;
              readonly key_f17: InfoCmp$Capability;
              readonly key_f18: InfoCmp$Capability;
              readonly key_f19: InfoCmp$Capability;
              readonly key_f2: InfoCmp$Capability;
              readonly key_f20: InfoCmp$Capability;
              readonly key_f21: InfoCmp$Capability;
              readonly key_f22: InfoCmp$Capability;
              readonly key_f23: InfoCmp$Capability;
              readonly key_f24: InfoCmp$Capability;
              readonly key_f25: InfoCmp$Capability;
              readonly key_f26: InfoCmp$Capability;
              readonly key_f27: InfoCmp$Capability;
              readonly key_f28: InfoCmp$Capability;
              readonly key_f29: InfoCmp$Capability;
              readonly key_f3: InfoCmp$Capability;
              readonly key_f30: InfoCmp$Capability;
              readonly key_f31: InfoCmp$Capability;
              readonly key_f32: InfoCmp$Capability;
              readonly key_f33: InfoCmp$Capability;
              readonly key_f34: InfoCmp$Capability;
              readonly key_f35: InfoCmp$Capability;
              readonly key_f36: InfoCmp$Capability;
              readonly key_f37: InfoCmp$Capability;
              readonly key_f38: InfoCmp$Capability;
              readonly key_f39: InfoCmp$Capability;
              readonly key_f4: InfoCmp$Capability;
              readonly key_f40: InfoCmp$Capability;
              readonly key_f41: InfoCmp$Capability;
              readonly key_f42: InfoCmp$Capability;
              readonly key_f43: InfoCmp$Capability;
              readonly key_f44: InfoCmp$Capability;
              readonly key_f45: InfoCmp$Capability;
              readonly key_f46: InfoCmp$Capability;
              readonly key_f47: InfoCmp$Capability;
              readonly key_f48: InfoCmp$Capability;
              readonly key_f49: InfoCmp$Capability;
              readonly key_f5: InfoCmp$Capability;
              readonly key_f50: InfoCmp$Capability;
              readonly key_f51: InfoCmp$Capability;
              readonly key_f52: InfoCmp$Capability;
              readonly key_f53: InfoCmp$Capability;
              readonly key_f54: InfoCmp$Capability;
              readonly key_f55: InfoCmp$Capability;
              readonly key_f56: InfoCmp$Capability;
              readonly key_f57: InfoCmp$Capability;
              readonly key_f58: InfoCmp$Capability;
              readonly key_f59: InfoCmp$Capability;
              readonly key_f6: InfoCmp$Capability;
              readonly key_f60: InfoCmp$Capability;
              readonly key_f61: InfoCmp$Capability;
              readonly key_f62: InfoCmp$Capability;
              readonly key_f63: InfoCmp$Capability;
              readonly key_f7: InfoCmp$Capability;
              readonly key_f8: InfoCmp$Capability;
              readonly key_f9: InfoCmp$Capability;
              readonly key_find: InfoCmp$Capability;
              readonly key_help: InfoCmp$Capability;
              readonly key_home: InfoCmp$Capability;
              readonly key_ic: InfoCmp$Capability;
              readonly key_il: InfoCmp$Capability;
              readonly key_left: InfoCmp$Capability;
              readonly key_ll: InfoCmp$Capability;
              readonly key_mark: InfoCmp$Capability;
              readonly key_message: InfoCmp$Capability;
              readonly key_mouse: InfoCmp$Capability;
              readonly key_move: InfoCmp$Capability;
              readonly key_next: InfoCmp$Capability;
              readonly key_npage: InfoCmp$Capability;
              readonly key_open: InfoCmp$Capability;
              readonly key_options: InfoCmp$Capability;
              readonly key_ppage: InfoCmp$Capability;
              readonly key_previous: InfoCmp$Capability;
              readonly key_print: InfoCmp$Capability;
              readonly key_redo: InfoCmp$Capability;
              readonly key_reference: InfoCmp$Capability;
              readonly key_refresh: InfoCmp$Capability;
              readonly key_replace: InfoCmp$Capability;
              readonly key_restart: InfoCmp$Capability;
              readonly key_resume: InfoCmp$Capability;
              readonly key_right: InfoCmp$Capability;
              readonly key_save: InfoCmp$Capability;
              readonly key_sbeg: InfoCmp$Capability;
              readonly key_scancel: InfoCmp$Capability;
              readonly key_scommand: InfoCmp$Capability;
              readonly key_scopy: InfoCmp$Capability;
              readonly key_screate: InfoCmp$Capability;
              readonly key_sdc: InfoCmp$Capability;
              readonly key_sdl: InfoCmp$Capability;
              readonly key_select: InfoCmp$Capability;
              readonly key_send: InfoCmp$Capability;
              readonly key_seol: InfoCmp$Capability;
              readonly key_sexit: InfoCmp$Capability;
              readonly key_sf: InfoCmp$Capability;
              readonly key_sfind: InfoCmp$Capability;
              readonly key_shelp: InfoCmp$Capability;
              readonly key_shome: InfoCmp$Capability;
              readonly key_sic: InfoCmp$Capability;
              readonly key_sleft: InfoCmp$Capability;
              readonly key_smessage: InfoCmp$Capability;
              readonly key_smove: InfoCmp$Capability;
              readonly key_snext: InfoCmp$Capability;
              readonly key_soptions: InfoCmp$Capability;
              readonly key_sprevious: InfoCmp$Capability;
              readonly key_sprint: InfoCmp$Capability;
              readonly key_sr: InfoCmp$Capability;
              readonly key_sredo: InfoCmp$Capability;
              readonly key_sreplace: InfoCmp$Capability;
              readonly key_sright: InfoCmp$Capability;
              readonly key_srsume: InfoCmp$Capability;
              readonly key_ssave: InfoCmp$Capability;
              readonly key_ssuspend: InfoCmp$Capability;
              readonly key_stab: InfoCmp$Capability;
              readonly key_sundo: InfoCmp$Capability;
              readonly key_suspend: InfoCmp$Capability;
              readonly key_undo: InfoCmp$Capability;
              readonly key_up: InfoCmp$Capability;
              readonly keypad_local: InfoCmp$Capability;
              readonly keypad_xmit: InfoCmp$Capability;
              readonly lab_f0: InfoCmp$Capability;
              readonly lab_f1: InfoCmp$Capability;
              readonly lab_f10: InfoCmp$Capability;
              readonly lab_f2: InfoCmp$Capability;
              readonly lab_f3: InfoCmp$Capability;
              readonly lab_f4: InfoCmp$Capability;
              readonly lab_f5: InfoCmp$Capability;
              readonly lab_f6: InfoCmp$Capability;
              readonly lab_f7: InfoCmp$Capability;
              readonly lab_f8: InfoCmp$Capability;
              readonly lab_f9: InfoCmp$Capability;
              readonly label_format: InfoCmp$Capability;
              readonly label_height: InfoCmp$Capability;
              readonly label_off: InfoCmp$Capability;
              readonly label_on: InfoCmp$Capability;
              readonly label_width: InfoCmp$Capability;
              readonly lines: InfoCmp$Capability;
              readonly lines_of_memory: InfoCmp$Capability;
              readonly lpi_changes_res: InfoCmp$Capability;
              readonly magic_cookie_glitch: InfoCmp$Capability;
              readonly max_attributes: InfoCmp$Capability;
              readonly max_colors: InfoCmp$Capability;
              readonly max_micro_address: InfoCmp$Capability;
              readonly max_micro_jump: InfoCmp$Capability;
              readonly max_pairs: InfoCmp$Capability;
              readonly maximum_windows: InfoCmp$Capability;
              readonly memory_above: InfoCmp$Capability;
              readonly memory_below: InfoCmp$Capability;
              readonly meta_off: InfoCmp$Capability;
              readonly meta_on: InfoCmp$Capability;
              readonly micro_col_size: InfoCmp$Capability;
              readonly micro_column_address: InfoCmp$Capability;
              readonly micro_down: InfoCmp$Capability;
              readonly micro_left: InfoCmp$Capability;
              readonly micro_line_size: InfoCmp$Capability;
              readonly micro_right: InfoCmp$Capability;
              readonly micro_row_address: InfoCmp$Capability;
              readonly micro_up: InfoCmp$Capability;
              readonly mouse_info: InfoCmp$Capability;
              readonly move_insert_mode: InfoCmp$Capability;
              readonly move_standout_mode: InfoCmp$Capability;
              readonly needs_xon_xoff: InfoCmp$Capability;
              readonly newline: InfoCmp$Capability;
              readonly no_color_video: InfoCmp$Capability;
              readonly no_esc_ctlc: InfoCmp$Capability;
              readonly no_pad_char: InfoCmp$Capability;
              readonly non_dest_scroll_region: InfoCmp$Capability;
              readonly non_rev_rmcup: InfoCmp$Capability;
              readonly num_labels: InfoCmp$Capability;
              readonly number_of_pins: InfoCmp$Capability;
              readonly order_of_pins: InfoCmp$Capability;
              readonly orig_colors: InfoCmp$Capability;
              readonly orig_pair: InfoCmp$Capability;
              readonly output_res_char: InfoCmp$Capability;
              readonly output_res_horz_inch: InfoCmp$Capability;
              readonly output_res_line: InfoCmp$Capability;
              readonly output_res_vert_inch: InfoCmp$Capability;
              readonly over_strike: InfoCmp$Capability;
              readonly pad_char: InfoCmp$Capability;
              readonly padding_baud_rate: InfoCmp$Capability;
              readonly parm_dch: InfoCmp$Capability;
              readonly parm_delete_line: InfoCmp$Capability;
              readonly parm_down_cursor: InfoCmp$Capability;
              readonly parm_down_micro: InfoCmp$Capability;
              readonly parm_ich: InfoCmp$Capability;
              readonly parm_index: InfoCmp$Capability;
              readonly parm_insert_line: InfoCmp$Capability;
              readonly parm_left_cursor: InfoCmp$Capability;
              readonly parm_left_micro: InfoCmp$Capability;
              readonly parm_right_cursor: InfoCmp$Capability;
              readonly parm_right_micro: InfoCmp$Capability;
              readonly parm_rindex: InfoCmp$Capability;
              readonly parm_up_cursor: InfoCmp$Capability;
              readonly parm_up_micro: InfoCmp$Capability;
              readonly pc_term_options: InfoCmp$Capability;
              readonly pkey_key: InfoCmp$Capability;
              readonly pkey_local: InfoCmp$Capability;
              readonly pkey_plab: InfoCmp$Capability;
              readonly pkey_xmit: InfoCmp$Capability;
              readonly plab_norm: InfoCmp$Capability;
              readonly print_rate: InfoCmp$Capability;
              readonly print_screen: InfoCmp$Capability;
              readonly prtr_non: InfoCmp$Capability;
              readonly prtr_off: InfoCmp$Capability;
              readonly prtr_on: InfoCmp$Capability;
              readonly prtr_silent: InfoCmp$Capability;
              readonly pulse: InfoCmp$Capability;
              readonly quick_dial: InfoCmp$Capability;
              readonly remove_clock: InfoCmp$Capability;
              readonly repeat_char: InfoCmp$Capability;
              readonly req_for_input: InfoCmp$Capability;
              readonly req_mouse_pos: InfoCmp$Capability;
              readonly reset_1string: InfoCmp$Capability;
              readonly reset_2string: InfoCmp$Capability;
              readonly reset_3string: InfoCmp$Capability;
              readonly reset_file: InfoCmp$Capability;
              readonly restore_cursor: InfoCmp$Capability;
              readonly row_addr_glitch: InfoCmp$Capability;
              readonly row_address: InfoCmp$Capability;
              readonly save_cursor: InfoCmp$Capability;
              readonly scancode_escape: InfoCmp$Capability;
              readonly scroll_forward: InfoCmp$Capability;
              readonly scroll_reverse: InfoCmp$Capability;
              readonly select_char_set: InfoCmp$Capability;
              readonly semi_auto_right_margin: InfoCmp$Capability;
              readonly set0_des_seq: InfoCmp$Capability;
              readonly set1_des_seq: InfoCmp$Capability;
              readonly set2_des_seq: InfoCmp$Capability;
              readonly set3_des_seq: InfoCmp$Capability;
              readonly set_a_attributes: InfoCmp$Capability;
              readonly set_a_background: InfoCmp$Capability;
              readonly set_a_foreground: InfoCmp$Capability;
              readonly set_attributes: InfoCmp$Capability;
              readonly set_background: InfoCmp$Capability;
              readonly set_bottom_margin: InfoCmp$Capability;
              readonly set_bottom_margin_parm: InfoCmp$Capability;
              readonly set_clock: InfoCmp$Capability;
              readonly set_color_band: InfoCmp$Capability;
              readonly set_color_pair: InfoCmp$Capability;
              readonly set_foreground: InfoCmp$Capability;
              readonly set_left_margin: InfoCmp$Capability;
              readonly set_left_margin_parm: InfoCmp$Capability;
              readonly set_lr_margin: InfoCmp$Capability;
              readonly set_page_length: InfoCmp$Capability;
              readonly set_pglen_inch: InfoCmp$Capability;
              readonly set_right_margin: InfoCmp$Capability;
              readonly set_right_margin_parm: InfoCmp$Capability;
              readonly set_tab: InfoCmp$Capability;
              readonly set_tb_margin: InfoCmp$Capability;
              readonly set_top_margin: InfoCmp$Capability;
              readonly set_top_margin_parm: InfoCmp$Capability;
              readonly set_window: InfoCmp$Capability;
              readonly start_bit_image: InfoCmp$Capability;
              readonly start_char_set_def: InfoCmp$Capability;
              readonly status_line_esc_ok: InfoCmp$Capability;
              readonly stop_bit_image: InfoCmp$Capability;
              readonly stop_char_set_def: InfoCmp$Capability;
              readonly subscript_characters: InfoCmp$Capability;
              readonly superscript_characters: InfoCmp$Capability;
              readonly tab: InfoCmp$Capability;
              readonly these_cause_cr: InfoCmp$Capability;
              readonly tilde_glitch: InfoCmp$Capability;
              readonly to_status_line: InfoCmp$Capability;
              readonly tone: InfoCmp$Capability;
              readonly transparent_underline: InfoCmp$Capability;
              readonly underline_char: InfoCmp$Capability;
              readonly up_half_line: InfoCmp$Capability;
              readonly user0: InfoCmp$Capability;
              readonly user1: InfoCmp$Capability;
              readonly user2: InfoCmp$Capability;
              readonly user3: InfoCmp$Capability;
              readonly user4: InfoCmp$Capability;
              readonly user5: InfoCmp$Capability;
              readonly user6: InfoCmp$Capability;
              readonly user7: InfoCmp$Capability;
              readonly user8: InfoCmp$Capability;
              readonly user9: InfoCmp$Capability;
              readonly virtual_terminal: InfoCmp$Capability;
              readonly wait_tone: InfoCmp$Capability;
              readonly wide_char_size: InfoCmp$Capability;
              readonly width_status_line: InfoCmp$Capability;
              readonly xoff_character: InfoCmp$Capability;
              readonly xon_character: InfoCmp$Capability;
              readonly xon_xoff: InfoCmp$Capability;
              readonly zero_motion: InfoCmp$Capability;
            }
            let InfoCmp$Capability: _InfoCmp$Capability$$static;
            interface _InfoCmp$Capability {
              getNames(): string[];
            }
            interface InfoCmp$Capability extends CombineTypes<[_InfoCmp$Capability]> {}
            interface _InputStreamReader$$static extends ClassLike {
              _BUFFER_SIZE: int;
              new(_in: java.io.InputStream): InputStreamReader;
              new(_in: java.io.InputStream, enc: string): InputStreamReader;
              new(_in: java.io.InputStream, dec: java.nio.charset.CharsetDecoder): InputStreamReader;
              new(_in: java.io.InputStream, charset: java.nio.charset.Charset): InputStreamReader;
            }
            let InputStreamReader: _InputStreamReader$$static;
            interface _InputStreamReader {
              close(): void;
              getEncoding(): string;
              _isOpen(): boolean;
              read(): int;
              read(buf: char[], offset: int, length: int): int;
              ready(): boolean;
              _bytes: java.nio.ByteBuffer;
              _decoder: java.nio.charset.CharsetDecoder;
              _endOfInput: boolean;
              _in: java.io.InputStream;
              _pending: char;
            }
            interface InputStreamReader extends CombineTypes<[_InputStreamReader, java.io.Reader]> {}
            interface _Levenshtein$$static extends ClassLike {
              distance(lhs: Levenshtein$charSequence, rhs: Levenshtein$charSequence): int;
              distance(source: Levenshtein$charSequence, target: Levenshtein$charSequence, deleteCost: int, insertCost: int, replaceCost: int, swapCost: int): int;
              new(): Levenshtein;
            }
            let Levenshtein: _Levenshtein$$static;
            interface _Levenshtein {
            }
            interface Levenshtein extends CombineTypes<[_Levenshtein, java.lang.Object]> {}
            interface _Log$$static extends ClassLike {
              debug(supplier: java.util.function.Supplier<string>): void;
              debug(messages: any[]): void;
              debug(...messages: any[]): void;
              error(messages: any[]): void;
              error(...messages: any[]): void;
              info(messages: any[]): void;
              info(...messages: any[]): void;
              isDebugEnabled(): boolean;
              _render(out: java.io.PrintStream, message: any): void;
              trace(messages: any[]): void;
              trace(...messages: any[]): void;
              trace(supplier: java.util.function.Supplier<string>): void;
              warn(messages: any[]): void;
              warn(...messages: any[]): void;
              new(): Log;
            }
            let Log: _Log$$static;
            interface _Log {
            }
            interface Log extends CombineTypes<[_Log, java.lang.Object]> {}
            interface _NonBlocking$$static extends ClassLike {
              nonBlocking(name: string, inputStream: java.io.InputStream): NonBlockingInputStream;
              nonBlocking(name: string, reader: java.io.Reader): NonBlockingReader;
              nonBlocking(name: string, inputStream: java.io.InputStream, encoding: java.nio.charset.Charset): NonBlockingReader;
              nonBlockingPumpInputStream(): NonBlockingPumpInputStream;
              nonBlockingPumpInputStream(size: int): NonBlockingPumpInputStream;
              nonBlockingPumpReader(): NonBlockingPumpReader;
              nonBlockingPumpReader(size: int): NonBlockingPumpReader;
              nonBlockingStream(reader: NonBlockingReader, encoding: java.nio.charset.Charset): NonBlockingInputStream;
              new(): NonBlocking;
            }
            let NonBlocking: _NonBlocking$$static;
            interface _NonBlocking {
            }
            interface NonBlocking extends CombineTypes<[_NonBlocking, java.lang.Object]> {}
            interface _NonBlocking$NonBlockingInputStreamReader$$static extends ClassLike {
              new(inputStream: NonBlockingInputStream, encoding: java.nio.charset.Charset): NonBlocking$NonBlockingInputStreamReader;
              new(input: NonBlockingInputStream, decoder: java.nio.charset.CharsetDecoder): NonBlocking$NonBlockingInputStreamReader;
            }
            let NonBlocking$NonBlockingInputStreamReader: _NonBlocking$NonBlockingInputStreamReader$$static;
            interface _NonBlocking$NonBlockingInputStreamReader {
              close(): void;
              _read(timeout: long, a1: boolean): int;
              readBuffered(b: char[], off: int, len: int, timeout: long): int;
              shutdown(): void;
              _bytes: java.nio.ByteBuffer;
              _chars: java.nio.CharBuffer;
              _decoder: java.nio.charset.CharsetDecoder;
              _input: NonBlockingInputStream;
            }
            interface NonBlocking$NonBlockingInputStreamReader extends CombineTypes<[_NonBlocking$NonBlockingInputStreamReader, jdk.internal.org.jline.utils.NonBlockingReader]> {}
            interface _NonBlocking$NonBlockingReaderInputStream$$static extends ClassLike {
            }
            let NonBlocking$NonBlockingReaderInputStream: _NonBlocking$NonBlockingReaderInputStream$$static;
            interface _NonBlocking$NonBlockingReaderInputStream {
              available(): int;
              close(): void;
              read(timeout: long, a1: boolean): int;
              _bytes: java.nio.ByteBuffer;
              _chars: java.nio.CharBuffer;
              _encoder: java.nio.charset.CharsetEncoder;
              _reader: NonBlockingReader;
            }
            interface NonBlocking$NonBlockingReaderInputStream extends CombineTypes<[_NonBlocking$NonBlockingReaderInputStream, jdk.internal.org.jline.utils.NonBlockingInputStream]> {}
            interface _NonBlockingInputStream$$static extends ClassLike {
              readonly EOF: int;
              readonly READ_EXPIRED: int;
              new(): NonBlockingInputStream;
            }
            let NonBlockingInputStream: _NonBlockingInputStream$$static;
            interface _NonBlockingInputStream {
              peek(timeout: long): int;
              read(): int;
              read(timeout: long): int;
              read(b: byte[], off: int, len: int): int;
              read(a0: long, a1: boolean): int;
(a0: long, a1: boolean): int;
              readBuffered(b: byte[]): int;
              readBuffered(b: byte[], timeout: long): int;
              readBuffered(b: byte[], off: int, len: int, timeout: long): int;
              shutdown(): void;
            }
            interface NonBlockingInputStream extends CombineTypes<[_NonBlockingInputStream, java.io.InputStream]> {}
            interface _NonBlockingInputStreamImpl$$static extends ClassLike {
              new(name: string, _in: java.io.InputStream): NonBlockingInputStreamImpl;
            }
            let NonBlockingInputStreamImpl: _NonBlockingInputStreamImpl$$static;
            interface _NonBlockingInputStreamImpl {
              close(): void;
              read(timeout: long, a1: boolean): int;
              _run(): void;
              shutdown(): void;
              _startReadingThreadIfNeeded(): void;
              _b: int;
              _exception: java.io.IOException;
              _in: java.io.InputStream;
              _name: string;
              _thread: java.lang.Thread;
              _threadDelay: long;
              _threadIsReading: boolean;
            }
            interface NonBlockingInputStreamImpl extends CombineTypes<[_NonBlockingInputStreamImpl, jdk.internal.org.jline.utils.NonBlockingInputStream]> {}
            interface _NonBlockingPumpInputStream$$static extends ClassLike {
              _rewind(buffer: java.nio.ByteBuffer, other: java.nio.ByteBuffer): boolean;
              _DEFAULT_BUFFER_SIZE: int;
              new(): NonBlockingPumpInputStream;
              new(bufferSize: int): NonBlockingPumpInputStream;
            }
            let NonBlockingPumpInputStream: _NonBlockingPumpInputStream$$static;
            interface _NonBlockingPumpInputStream {
              available(): int;
              _checkIoException(): void;
              close(): void;
              _flush(): void;
              getOutputStream(): java.io.OutputStream;
              read(timeout: long, a1: boolean): int;
              readBuffered(b: byte[], off: int, len: int, timeout: long): int;
              setIoException(exception: java.io.IOException): void;
              _wait(buffer: java.nio.ByteBuffer, timeout: long): int;
              _write(cbuf: byte[], off: int, len: int): void;
              _closed: boolean;
              _ioException: java.io.IOException;
              _output: java.io.OutputStream;
              _readBuffer: java.nio.ByteBuffer;
              _writeBuffer: java.nio.ByteBuffer;
            }
            interface NonBlockingPumpInputStream extends CombineTypes<[_NonBlockingPumpInputStream, jdk.internal.org.jline.utils.NonBlockingInputStream]> {}
            interface _NonBlockingPumpInputStream$NbpOutputStream$$static extends ClassLike {
            }
            let NonBlockingPumpInputStream$NbpOutputStream: _NonBlockingPumpInputStream$NbpOutputStream$$static;
            interface _NonBlockingPumpInputStream$NbpOutputStream {
              close(): void;
              flush(): void;
              write(b: int): void;
              write(cbuf: byte[], off: int, len: int): void;
              _this$0: NonBlockingPumpInputStream;
            }
            interface NonBlockingPumpInputStream$NbpOutputStream extends CombineTypes<[_NonBlockingPumpInputStream$NbpOutputStream, java.io.OutputStream]> {}
            interface _NonBlockingPumpReader$$static extends ClassLike {
              _DEFAULT_BUFFER_SIZE: int;
              new(): NonBlockingPumpReader;
              new(bufferSize: int): NonBlockingPumpReader;
            }
            let NonBlockingPumpReader: _NonBlockingPumpReader$$static;
            interface _NonBlockingPumpReader {
              available(): int;
              close(): void;
              getWriter(): java.io.Writer;
              _read(timeout: long, a1: boolean): int;
              readBuffered(b: char[], off: int, len: int, timeout: long): int;
              ready(): boolean;
              _write(cbuf: char[], off: int, len: int): void;
              _buffer: char[];
              _closed: boolean;
              _count: int;
              _lock: java.util.concurrent.locks.ReentrantLock;
              _notEmpty: java.util.concurrent.locks.Condition;
              _notFull: java.util.concurrent.locks.Condition;
              _read: int;
              _write: int;
              _writer: java.io.Writer;
            }
            interface NonBlockingPumpReader extends CombineTypes<[_NonBlockingPumpReader, jdk.internal.org.jline.utils.NonBlockingReader]> {}
            interface _NonBlockingPumpReader$NbpWriter$$static extends ClassLike {
            }
            let NonBlockingPumpReader$NbpWriter: _NonBlockingPumpReader$NbpWriter$$static;
            interface _NonBlockingPumpReader$NbpWriter {
              close(): void;
              flush(): void;
              write(cbuf: char[], off: int, len: int): void;
              _this$0: NonBlockingPumpReader;
            }
            interface NonBlockingPumpReader$NbpWriter extends CombineTypes<[_NonBlockingPumpReader$NbpWriter, java.io.Writer]> {}
            interface _NonBlockingReader$$static extends ClassLike {
              readonly EOF: int;
              readonly READ_EXPIRED: int;
              new(): NonBlockingReader;
            }
            let NonBlockingReader: _NonBlockingReader$$static;
            interface _NonBlockingReader {
              available(): int;
              peek(timeout: long): int;
              read(): int;
              read(timeout: long): int;
              read(b: char[], off: int, len: int): int;
              _read(a0: long, a1: boolean): int;
              readBuffered(b: char[]): int;
              readBuffered(b: char[], timeout: long): int;
              readBuffered(a0: char[], a1: int, a2: int, a3: long): int;
              shutdown(): void;
            }
            interface NonBlockingReader extends CombineTypes<[_NonBlockingReader, java.io.Reader]> {}
            interface _NonBlockingReaderImpl$$static extends ClassLike {
              readonly READ_EXPIRED: int;
              new(name: string, _in: java.io.Reader): NonBlockingReaderImpl;
            }
            let NonBlockingReaderImpl: _NonBlockingReaderImpl$$static;
            interface _NonBlockingReaderImpl {
              clear(): void;
              close(): void;
              _read(timeout: long, a1: boolean): int;
              readBuffered(b: char[], off: int, len: int, timeout: long): int;
              ready(): boolean;
              _run(): void;
              shutdown(): void;
              _startReadingThreadIfNeeded(): void;
              _ch: int;
              _exception: java.io.IOException;
              _in: java.io.Reader;
              _name: string;
              _thread: java.lang.Thread;
              _threadDelay: long;
              _threadIsReading: boolean;
            }
            interface NonBlockingReaderImpl extends CombineTypes<[_NonBlockingReaderImpl, jdk.internal.org.jline.utils.NonBlockingReader]> {}
            interface _OSUtils$$static extends ClassLike {
              _isExecutable(f: java.io.File): boolean;
              INFOCMP_COMMAND: string;
              readonly IS_AIX: boolean;
              readonly IS_CONEMU: boolean;
              readonly IS_CYGWIN: boolean;
              readonly IS_LINUX: boolean;
              readonly IS_MINGW: boolean;
              readonly IS_MSYSTEM: boolean;
              readonly IS_OSX: boolean;
              readonly IS_WINDOWS: boolean;
              readonly IS_WSL: boolean;
              readonly IS_WSL1: boolean;
              readonly IS_WSL2: boolean;
              STTY_COMMAND: string;
              STTY_F_OPTION: string;
              TEST_COMMAND: string;
              TTY_COMMAND: string;
              new(): OSUtils;
            }
            let OSUtils: _OSUtils$$static;
            interface _OSUtils {
            }
            interface OSUtils extends CombineTypes<[_OSUtils, java.lang.Object]> {}
            interface _PumpReader$$static extends ClassLike {
              _rewind(buffer: java.nio.CharBuffer, other: java.nio.CharBuffer): boolean;
              _DEFAULT_BUFFER_SIZE: int;
              _EOF: int;
              new(): PumpReader;
              new(bufferSize: int): PumpReader;
            }
            let PumpReader: _PumpReader$$static;
            interface _PumpReader {
              available(): int;
              close(): void;
              _copyFromBuffer(cbuf: char[], off: int, len: int): int;
              createInputStream(charset: java.nio.charset.Charset): java.io.InputStream;
              _encodeBytes(encoder: java.nio.charset.CharsetEncoder, output: java.nio.ByteBuffer): void;
              _flush(): void;
              getWriter(): java.io.Writer;
              read(): int;
              read(cbuf: char[], off: int, len: int): int;
              read(target: java.nio.CharBuffer): int;
              _readBytes(encoder: java.nio.charset.CharsetEncoder, b: byte[], off: int, len: int): int;
              _readBytes(encoder: java.nio.charset.CharsetEncoder, output: java.nio.ByteBuffer): void;
              ready(): boolean;
              _rewindReadBuffer(): boolean;
              _rewindWriteBuffer(): void;
              _wait(buffer: java.nio.CharBuffer): boolean;
              _waitForBufferSpace(): void;
              _waitForInput(): boolean;
              _waitForMoreInput(): boolean;
              _write(c: char): void;
              _write(cbuf: char[], off: int, len: int): void;
              _write(str: string, off: int, len: int): void;
              _closed: boolean;
              _readBuffer: java.nio.CharBuffer;
              _writeBuffer: java.nio.CharBuffer;
              _writer: PumpReader$Writer;
            }
            interface PumpReader extends CombineTypes<[_PumpReader, java.io.Reader]> {}
            interface _PumpReader$InputStream$$static extends ClassLike {
            }
            let PumpReader$InputStream: _PumpReader$InputStream$$static;
            interface _PumpReader$InputStream {
              available(): int;
              close(): void;
              _copyFromBuffer(b: byte[], off: int, len: int): int;
              read(): int;
              read(b: byte[], off: int, len: int): int;
              _readUsingBuffer(): boolean;
              _buffer: java.nio.ByteBuffer;
              _encoder: java.nio.charset.CharsetEncoder;
              _reader: PumpReader;
            }
            interface PumpReader$InputStream extends CombineTypes<[_PumpReader$InputStream, java.io.InputStream]> {}
            interface _PumpReader$Writer$$static extends ClassLike {
            }
            let PumpReader$Writer: _PumpReader$Writer$$static;
            interface _PumpReader$Writer {
              close(): void;
              flush(): void;
              write(c: int): void;
              write(cbuf: char[], off: int, len: int): void;
              write(str: string, off: int, len: int): void;
              _reader: PumpReader;
            }
            interface PumpReader$Writer extends CombineTypes<[_PumpReader$Writer, java.io.Writer]> {}
            interface _ShutdownHooks$$static extends ClassLike {
              add<T>(task: T): T;
              _addHook(thread: java.lang.Thread): java.lang.Thread;
              remove(task: ShutdownHooks$Task): void;
              _removeHook(thread: java.lang.Thread): void;
              _runTasks(): void;
              _hook: java.lang.Thread;
              _tasks: java.util.List<ShutdownHooks$Task>;
              new(): ShutdownHooks;
            }
            let ShutdownHooks: _ShutdownHooks$$static;
            interface _ShutdownHooks {
            }
            interface ShutdownHooks extends CombineTypes<[_ShutdownHooks, java.lang.Object]> {}
            interface _ShutdownHooks$Task$$static extends ClassLike {
            }
            let ShutdownHooks$Task: _ShutdownHooks$Task$$static;
            interface _ShutdownHooks$Task {
              run(): void;
(): void;
            }
            interface ShutdownHooks$Task extends CombineTypes<[_ShutdownHooks$Task, java.lang.Object]> {}
            interface _Signals$$static extends ClassLike {
              _doRegister(name: string, handler: any): any;
              register(name: string, handler: java.lang.Runnable): any;
              register(name: string, handler: java.lang.Runnable, loader: java.lang.ClassLoader): any;
              registerDefault(name: string): any;
              _toString(handler: any): string;
              unregister(name: string, previous: any): void;
            }
            let Signals: _Signals$$static;
            interface _Signals {
            }
            interface Signals extends CombineTypes<[_Signals, java.lang.Object]> {}
            interface _Status$$static extends ClassLike {
              getExistingStatus(terminal: jline.terminal.Terminal): java.util.Optional<Status>;
              getStatus(terminal: jline.terminal.Terminal): Status;
              getStatus(terminal: jline.terminal.Terminal, create: boolean): Status;
              new(terminal: jline.terminal.Terminal): Status;
            }
            let Status: _Status$$static;
            interface _Status {
              close(): void;
              _getBorderString(columns: int): AttributedString;
              hide(): void;
              redraw(): void;
              reset(): void;
              resize(): void;
              resize(size: jline.terminal.Size): void;
              restore(): void;
              setBorder(border: boolean): void;
              size(): int;
              _size(lines: java.util.List<any>): int;
              suspend(): void;
              toString(): string;
              update(lines: java.util.List<AttributedString>): void;
              update(lines: java.util.List<AttributedString>, flush: boolean): void;
              _border: int;
              _borderString: AttributedString;
              _display: Display;
              _ellipsis: AttributedString;
              _lines: java.util.List<AttributedString>;
              _scrollRegion: int;
              _supported: boolean;
              _suspended: boolean;
              _terminal: jline.terminal.Terminal;
            }
            interface Status extends CombineTypes<[_Status, java.lang.Object]> {}
            interface _Status$MovingCursorDisplay$$static extends ClassLike {
              new(terminal: jline.terminal.Terminal): Status$MovingCursorDisplay;
            }
            let Status$MovingCursorDisplay: _Status$MovingCursorDisplay$$static;
            interface _Status$MovingCursorDisplay {
              _initCursor(): void;
              _moveVisualCursorTo(targetPos: int, newLines: java.util.List<AttributedString>): void;
              _moveVisualCursorTo(i1: int): int;
              update(newLines: java.util.List<AttributedString>, targetCursorPos: int, flush: boolean): void;
              _firstLine: int;
            }
            interface Status$MovingCursorDisplay extends CombineTypes<[_Status$MovingCursorDisplay, jdk.internal.org.jline.utils.Display]> {}
            interface _StyleResolver$$static extends ClassLike {
              _color(name: string): int;
              _colorRgb(name: string): int;
              new(source: java.util.function.Function<string,string>): StyleResolver;
            }
            let StyleResolver: _StyleResolver$$static;
            interface _StyleResolver {
              _apply(style: AttributedStyle, spec: string): AttributedStyle;
              _applyAnsi(style: AttributedStyle, spec: string): AttributedStyle;
              _applyColor(style: AttributedStyle, spec: string): AttributedStyle;
              _applyNamed(style: AttributedStyle, name: string): AttributedStyle;
              _applyReference(style: AttributedStyle, spec: string): AttributedStyle;
              resolve(spec: string): AttributedStyle;
              resolve(spec: string, defaultSpec: string): AttributedStyle;
              _source: java.util.function.Function<string,string>;
            }
            interface StyleResolver extends CombineTypes<[_StyleResolver, java.lang.Object]> {}
            interface _Timeout$$static extends ClassLike {
              new(timeout: long): Timeout;
            }
            let Timeout: _Timeout$$static;
            interface _Timeout {
              elapsed(): boolean;
              isFinite(): boolean;
              isInfinite(): boolean;
              timeout(): long;
              _cur: long;
              _end: long;
              _timeout: long;
            }
            interface Timeout extends CombineTypes<[_Timeout, java.lang.Object]> {}
            interface _WCWidth$$static extends ClassLike {
              _bisearch(ucs: int, table: WCWidth$Interval[], max: int): boolean;
              wcwidth(ucs: int): int;
              _combining: WCWidth$Interval[];
            }
            let WCWidth: _WCWidth$$static;
            interface _WCWidth {
            }
            interface WCWidth extends CombineTypes<[_WCWidth, java.lang.Object]> {}
            interface _WCWidth$Interval$$static extends ClassLike {
              new(first: int, last: int): WCWidth$Interval;
            }
            let WCWidth$Interval: _WCWidth$Interval$$static;
            interface _WCWidth$Interval {
              readonly first: int;
              readonly last: int;
            }
            interface WCWidth$Interval extends CombineTypes<[_WCWidth$Interval, java.lang.Object]> {}
            interface _WriterOutputStream$$static extends ClassLike {
              new(out: java.io.Writer, charset: java.nio.charset.Charset): WriterOutputStream;
              new(out: java.io.Writer, decoder: java.nio.charset.CharsetDecoder): WriterOutputStream;
            }
            let WriterOutputStream: _WriterOutputStream$$static;
            interface _WriterOutputStream {
              close(): void;
              flush(): void;
              _flushOutput(): void;
              _processInput(endOfInput: boolean): void;
              write(b: int): void;
              write(b: byte[]): void;
              write(b: byte[], off: int, len: int): void;
              _decoder: java.nio.charset.CharsetDecoder;
              _decoderIn: java.nio.ByteBuffer;
              _decoderOut: java.nio.CharBuffer;
              _out: java.io.Writer;
            }
            interface WriterOutputStream extends CombineTypes<[_WriterOutputStream, java.io.OutputStream]> {}
          }
          interface _JdkConsoleProviderImpl$$static extends ClassLike {
            new(): JdkConsoleProviderImpl;
          }
          let JdkConsoleProviderImpl: _JdkConsoleProviderImpl$$static;
          interface _JdkConsoleProviderImpl {
            console(isTTY: boolean, charset: java.nio.charset.Charset): internal.io.JdkConsole;
          }
          interface JdkConsoleProviderImpl extends CombineTypes<[_JdkConsoleProviderImpl, java.lang.Object, jdk.internal.io.JdkConsoleProvider]> {}
          interface _JdkConsoleProviderImpl$JdkConsoleImpl$$static extends ClassLike {
            new(terminal: jline.terminal.Terminal): JdkConsoleProviderImpl$JdkConsoleImpl;
          }
          let JdkConsoleProviderImpl$JdkConsoleImpl: _JdkConsoleProviderImpl$JdkConsoleImpl$$static;
          interface _JdkConsoleProviderImpl$JdkConsoleImpl {
            charset(): java.nio.charset.Charset;
            flush(): void;
            format(fmt: string, args: any[]): internal.io.JdkConsole;
            format(fmt: string, ...args: any[]): internal.io.JdkConsole;
            printf(format: string, args: any[]): internal.io.JdkConsole;
            printf(format: string, ...args: any[]): internal.io.JdkConsole;
            readLine(fmt: string, args: any[]): string;
            readLine(fmt: string, ...args: any[]): string;
            readLine(): string;
            readPassword(fmt: string, args: any[]): char[];
            readPassword(fmt: string, ...args: any[]): char[];
            readPassword(): char[];
            reader(): java.io.Reader;
            writer(): java.io.PrintWriter;
            _jline: reader.LineReader;
            _terminal: terminal.Terminal;
          }
          interface JdkConsoleProviderImpl$JdkConsoleImpl extends CombineTypes<[_JdkConsoleProviderImpl$JdkConsoleImpl, jdk.internal.io.JdkConsole, java.lang.Object]> {}
        }
      }
    }
  }
}
