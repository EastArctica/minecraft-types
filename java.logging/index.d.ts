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
  module java {
    module util {
      module logging {
        interface _ConsoleHandler$$static extends ClassLike {
          new(): ConsoleHandler;
        }
        let ConsoleHandler: _ConsoleHandler$$static;
        interface _ConsoleHandler {
          close(): void;
          publish(record: LogRecord): void;
        }
        interface ConsoleHandler extends CombineTypes<[_ConsoleHandler, java.util.logging.StreamHandler]> {}
        interface _ErrorManager$$static extends ClassLike {
          readonly CLOSE_FAILURE: int;
          readonly FLUSH_FAILURE: int;
          readonly FORMAT_FAILURE: int;
          readonly GENERIC_FAILURE: int;
          readonly OPEN_FAILURE: int;
          readonly WRITE_FAILURE: int;
          new(): ErrorManager;
        }
        let ErrorManager: _ErrorManager$$static;
        interface _ErrorManager {
          error(msg: string, ex: java.lang.Exception, code: int): void;
          _reported: boolean;
        }
        interface ErrorManager extends CombineTypes<[_ErrorManager, java.lang.Object]> {}
        interface _FileHandler$$static extends ClassLike {
          _generate(pat: string, count: int, generation: int, unique: int): java.io.File;
          _MAX_LOCKS: int;
          _locks: Set<string>;
          new(): FileHandler;
          new(pattern: string): FileHandler;
          new(pattern: string, append: boolean): FileHandler;
          new(pattern: string, limit: int, count: int): FileHandler;
          new(pattern: string, limit: int, count: int, append: boolean): FileHandler;
          new(pattern: string, limit: long, a2: int, count: boolean): FileHandler;
        }
        let FileHandler: _FileHandler$$static;
        interface _FileHandler {
          close(): void;
          _close0(): void;
          _configure(): void;
          _generate(pattern: string, generation: int, unique: int): java.io.File;
          _isParentWritable(path: java.nio.file.Path): boolean;
          _open(fname: java.io.File, append: boolean): void;
          _openFiles(): void;
          publish(record: LogRecord): void;
          _publish0(record: LogRecord): void;
          _rotate(): void;
          _rotate0(): void;
          _append: boolean;
          _count: int;
          _files: java.io.File[];
          _limit: long;
          _lockFileChannel: java.nio.channels.FileChannel;
          _lockFileName: string;
          _maxLocks: int;
          _meter: FileHandler$MeteredStream;
          _pattern: string;
        }
        interface FileHandler extends CombineTypes<[_FileHandler, java.util.logging.StreamHandler]> {}
        interface _FileHandler$InitializationErrorManager$$static extends ClassLike {
        }
        let FileHandler$InitializationErrorManager: _FileHandler$InitializationErrorManager$$static;
        interface _FileHandler$InitializationErrorManager {
          error(msg: string, ex: java.lang.Exception, code: int): void;
          _lastException: java.lang.Exception;
        }
        interface FileHandler$InitializationErrorManager extends CombineTypes<[_FileHandler$InitializationErrorManager, java.util.logging.ErrorManager]> {}
        interface _FileHandler$MeteredStream$$static extends ClassLike {
          _new(out: java.io.OutputStream, written: long): FileHandler$MeteredStream;
        }
        let FileHandler$MeteredStream: _FileHandler$MeteredStream$$static;
        interface _FileHandler$MeteredStream {
          close(): void;
          flush(): void;
          write(b: int): void;
          write(buff: byte[]): void;
          write(buff: byte[], off: int, len: int): void;
          _out: java.io.OutputStream;
          _written: long;
        }
        interface FileHandler$MeteredStream extends CombineTypes<[_FileHandler$MeteredStream, java.io.OutputStream]> {}
        interface _Filter$$static extends ClassLike {
        }
        let Filter: _Filter$$static;
        interface _Filter {
          isLoggable(a0: LogRecord): boolean;
(a0: LogRecord): boolean;
        }
        interface Filter extends CombineTypes<[_Filter, java.lang.Object]> {}
        interface _Formatter$$static extends ClassLike {
          _new(): Formatter;
        }
        let Formatter: _Formatter$$static;
        interface _Formatter {
          format(a0: LogRecord): string;
(a0: LogRecord): string;
          formatMessage(record: LogRecord): string;
          getHead(h: Handler): string;
          getTail(h: Handler): string;
        }
        interface Formatter extends CombineTypes<[_Formatter, java.lang.Object]> {}
        interface _Handler$$static extends ClassLike {
          _offValue: int;
          _new(): Handler;
          _new(defaultLevel: Level, defaultFormatter: Formatter, specifiedFormatter: Formatter): Handler;
        }
        let Handler: _Handler$$static;
        interface _Handler {
          _checkPermission(): void;
          close(): void;
          flush(): void;
          getEncoding(): string;
          getErrorManager(): ErrorManager;
          getFilter(): Filter;
          getFormatter(): Formatter;
          getLevel(): Level;
          _initLocking(): util.concurrent.locks.ReentrantLock;
          isLoggable(record: LogRecord): boolean;
          publish(a0: LogRecord): void;
          _reportError(msg: string, ex: java.lang.Exception, code: int): void;
          setEncoding(encoding: string): void;
          _setEncoding0(encoding: string): void;
          setErrorManager(em: ErrorManager): void;
          _setErrorManager0(em: ErrorManager): void;
          setFilter(newFilter: Filter): void;
          _setFilter0(newFilter: Filter): void;
          setFormatter(newFormatter: Formatter): void;
          _setFormatter0(newFormatter: Formatter): void;
          setLevel(newLevel: Level): void;
          _setLevel0(newLevel: Level): void;
          _tryUseLock(): boolean;
          _unlock(): void;
          _encoding: string;
          _errorManager: ErrorManager;
          _filter: Filter;
          _formatter: Formatter;
          _lock: util.concurrent.locks.ReentrantLock;
          _logLevel: Level;
          _manager: LogManager;
        }
        interface Handler extends CombineTypes<[_Handler, java.lang.Object]> {}
        interface _Level$$static extends ClassLike {
          _findLevel(name: string): Level;
          parse(name: string): Level;
          readonly ALL: Level;
          readonly CONFIG: Level;
          readonly FINE: Level;
          readonly FINER: Level;
          readonly FINEST: Level;
          readonly INFO: Level;
          readonly OFF: Level;
          readonly SEVERE: Level;
          readonly WARNING: Level;
          _defaultBundle: string;
          _serialVersionUID: long;
          _standardLevels: Level[];
          _new(name: string, value: int): Level;
          _new(name: string, value: int, resourceBundleName: string): Level;
        }
        let Level: _Level$$static;
        interface _Level {
          _computeLocalizedLevelName(newLocale: Locale): string;
          equals(ox: any): boolean;
          _getCachedLocalizedLevelName(): string;
          _getLevelName(): string;
          _getLocalizedLevelName(): string;
          getLocalizedName(): string;
          getName(): string;
          getResourceBundleName(): string;
          hashCode(): int;
          intValue(): int;
          _readResolve(): any;
          toString(): string;
          _cachedLocale: Locale;
          _localizedLevelName: string;
          _name: string;
          _resourceBundleName: string;
          _value: int;
        }
        interface Level extends CombineTypes<[_Level, java.lang.Object, java.io.Serializable]> {}
        interface _Level$KnownLevel$$static extends ClassLike {
          _add(l: Level): void;
          _findByLocalizedLevelName(name: string, selector: util.function.Function<Level$KnownLevel,Optional<Level>>): Optional<Level>;
          _findByName(name: string, selector: util.function.Function<Level$KnownLevel,Optional<Level>>): Optional<Level>;
          _findByValue(value: int, selector: util.function.Function<Level$KnownLevel,Optional<Level>>): Optional<Level>;
          _matches(l: Level): Optional<Level>;
          _purge(): void;
          _registerWithClassLoader(customLevel: Level): void;
          _CUSTOM_LEVEL_CLV: jdk.internal.loader.ClassLoaderValue<List<Level>>;
          _QUEUE: java.lang.ref.ReferenceQueue<Level>;
          _intToLevels: Map<int,List<Level$KnownLevel>>;
          _nameToLevels: Map<string,List<Level$KnownLevel>>;
          _new(l: Level): Level$KnownLevel;
        }
        let Level$KnownLevel: _Level$KnownLevel$$static;
        interface _Level$KnownLevel {
          _mirrored(): Optional<Level>;
          _referent(): Optional<Level>;
          _remove(): void;
          _mirroredLevel: Level;
        }
        interface Level$KnownLevel extends CombineTypes<[_Level$KnownLevel, java.lang.ref.WeakReference<Level>]> {}
        interface _Level$RbAccess$$static extends ClassLike {
          _RB_ACCESS: jdk.internal.access.JavaUtilResourceBundleAccess;
        }
        let Level$RbAccess: _Level$RbAccess$$static;
        interface _Level$RbAccess {
        }
        interface Level$RbAccess extends CombineTypes<[_Level$RbAccess, java.lang.Object]> {}
        interface _LogManager$$static extends ClassLike {
          _checkSubclassPermissions(): java.lang.Void;
          _doSetLevel(logger: Logger, level: Level): void;
          _doSetParent(logger: Logger, parent: Logger): void;
          getLogManager(): LogManager;
          getLoggingMXBean(): LoggingMXBean;
          _initStatic(): void;
          _trim(value: string): string;
          readonly LOGGING_MXBEAN_NAME: string;
          _MAX_ITERATIONS: int;
          _STATE_INITIALIZED: int;
          _STATE_INITIALIZING: int;
          _STATE_READING_CONFIG: int;
          _STATE_SHUTDOWN: int;
          _STATE_UNINITIALIZED: int;
          _controlPermission: java.security.Permission;
          _defaultLevel: Level;
          _manager: LogManager;
          _new(): LogManager;
        }
        let LogManager: _LogManager$$static;
        interface _LogManager {
          addConfigurationListener(listener: java.lang.Runnable): LogManager;
          addLogger(logger: Logger): boolean;
          checkAccess(): void;
          _checkPermission(): void;
          _closeHandlers(logger: Logger): void;
          _contexts(): List<LogManager$LoggerContext>;
          _createLoggerHandlers(name: string, handlersPropertyName: string): List<Handler>;
          _demandLogger(name: string, resourceBundleName: string, caller: java.lang.Class<any>): Logger;
          _demandLogger(name: string, resourceBundleName: string, module: java.lang.Module): Logger;
          _demandSystemLogger(name: string, resourceBundleName: string, caller: java.lang.Class<any>): Logger;
          _demandSystemLogger(name: string, resourceBundleName: string, module: java.lang.Module): Logger;
          _drainLoggerRefQueueBounded(): void;
          _ensureLogManagerInitialized(): void;
          _forceLoadHandlers(logger: Logger): boolean;
          _getBooleanProperty(name: string, defaultValue: boolean): boolean;
          _getConfigurationFileName(): string;
          _getFilterProperty(name: string, defaultValue: Filter): Filter;
          _getFormatterProperty(name: string, defaultValue: Formatter): Formatter;
          _getIntProperty(name: string, defaultValue: int): int;
          _getLevelProperty(name: string, defaultValue: Level): Level;
          getLogger(name: string): Logger;
          getLoggerNames(): Enumeration<string>;
          _getLongProperty(name: string, defaultValue: long): long;
          getProperty(name: string): string;
          _getStringProperty(name: string, defaultValue: string): string;
          _getSystemContext(): LogManager$LoggerContext;
          _getUserContext(): LogManager$LoggerContext;
          _initializeGlobalHandlers(): void;
          _invokeConfigurationListeners(): void;
          _loadLoggerHandlers(logger: Logger, name: string, handlersPropertyName: string): void;
          _parseClassNames(propertyName: string): string[];
          readConfiguration(): void;
          readConfiguration(ins: java.io.InputStream): void;
          _readPrimordialConfiguration(): void;
          removeConfigurationListener(listener: java.lang.Runnable): void;
          reset(): void;
          _resetLogger(logger: Logger): void;
          _resetLoggerContext(cx: LogManager$LoggerContext): void;
          _setLevelsOnExistingLoggers(): void;
          _setLoggerHandlers(logger: Logger, name: string, handlersPropertyName: string, handlers: List<Handler>): void;
          updateConfiguration(mapper: util.function.Function<string,util.function.BiFunction<string,string,string>>): void;
          updateConfiguration(ins: java.io.InputStream, mapper: util.function.Function<string,util.function.BiFunction<string,string,string>>): void;
          _closeOnResetLoggers: util.concurrent.CopyOnWriteArrayList<LogManager$CloseOnReset>;
          _configurationLock: util.concurrent.locks.ReentrantLock;
          _contextsMap: WeakHashMap<any,LogManager$LoggerContext>;
          _globalHandlersState: int;
          _initializationDone: boolean;
          _initializedCalled: boolean;
          _listeners: Map<any,java.lang.Runnable>;
          _loggerRefQueue: java.lang.ref.ReferenceQueue<Logger>;
          _props: Properties;
          _readPrimordialConfiguration: boolean;
          _rootLogger: Logger;
          _systemContext: LogManager$LoggerContext;
          _userContext: LogManager$LoggerContext;
        }
        interface LogManager extends CombineTypes<[_LogManager, java.lang.Object]> {}
        interface _LogManager$Cleaner$$static extends ClassLike {
        }
        let LogManager$Cleaner: _LogManager$Cleaner$$static;
        interface _LogManager$Cleaner {
          run(): void;
          _this$0: LogManager;
        }
        interface LogManager$Cleaner extends CombineTypes<[_LogManager$Cleaner, java.lang.Thread]> {}
        interface _LogManager$CloseOnReset$$static extends ClassLike {
          create(logger: Logger): LogManager$CloseOnReset;
        }
        let LogManager$CloseOnReset: _LogManager$CloseOnReset$$static;
        interface _LogManager$CloseOnReset {
          equals(other: any): boolean;
          get(): Logger;
          hashCode(): int;
          _logger: Logger;
        }
        interface LogManager$CloseOnReset extends CombineTypes<[_LogManager$CloseOnReset, java.lang.Object]> {}
        interface _LogManager$ConfigProperty$$static extends ClassLike {
          _find(property: string): Optional<LogManager$ConfigProperty>;
          _getLoggerName(property: string): string;
          _matches(property: string): boolean;
          _merge(k: string, previous: Properties, next: Properties, mappingFunction: util.function.BiFunction<string,string,string>): void;
          _needsUpdating(k: string, previous: Properties, next: Properties): boolean;
          valueOf(name: string): LogManager$ConfigProperty;
          values(): LogManager$ConfigProperty[];
          _ALL: EnumSet<LogManager$ConfigProperty>;
          readonly HANDLERS: LogManager$ConfigProperty;
          readonly LEVEL: LogManager$ConfigProperty;
          readonly USEPARENT: LogManager$ConfigProperty;
        }
        let LogManager$ConfigProperty: _LogManager$ConfigProperty$$static;
        interface _LogManager$ConfigProperty {
          handleKey(key: string): boolean;
          _key(loggerName: string): string;
          _loggerName(key: string): string;
          _length: int;
          _suffix: string;
        }
        interface LogManager$ConfigProperty extends CombineTypes<[_LogManager$ConfigProperty]> {}
        interface _LogManager$LogNode$$static extends ClassLike {
          _new(parent: LogManager$LogNode, context: LogManager$LoggerContext): LogManager$LogNode;
        }
        let LogManager$LogNode: _LogManager$LogNode$$static;
        interface _LogManager$LogNode {
          _walkAndSetParent(parent: Logger): void;
          _children: HashMap<string,LogManager$LogNode>;
          _context: LogManager$LoggerContext;
          _loggerRef: LogManager$LoggerWeakRef;
          _parent: LogManager$LogNode;
        }
        interface LogManager$LogNode extends CombineTypes<[_LogManager$LogNode, java.lang.Object]> {}
        interface _LogManager$LoggerContext$$static extends ClassLike {
        }
        let LogManager$LoggerContext: _LogManager$LoggerContext$$static;
        interface _LogManager$LoggerContext {
          _addLocalLogger(logger: Logger): boolean;
          _addLocalLogger(logger: Logger, addDefaultLoggersIfNeeded: boolean): boolean;
          _demandLogger(name: string, resourceBundleName: string, module: java.lang.Module): Logger;
          _ensureAllDefaultLoggers(logger: Logger): void;
          _ensureDefaultLogger(logger: Logger): void;
          _ensureInitialized(): void;
          _findLogger(name: string): Logger;
          _getGlobalLogger(): Logger;
          _getLoggerNames(): Enumeration<string>;
          _getNode(name: string): LogManager$LogNode;
          _getOwner(): LogManager;
          _getRootLogger(): Logger;
          _processParentHandlers(logger: Logger, name: string, visited: util.function.Predicate<Logger>): void;
          _removeLoggerRef(name: string, ref: LogManager$LoggerWeakRef): void;
          _requiresDefaultLoggers(): boolean;
          _namedLoggers: util.concurrent.ConcurrentHashMap<string,LogManager$LoggerWeakRef>;
          _root: LogManager$LogNode;
          _this$0: LogManager;
        }
        interface LogManager$LoggerContext extends CombineTypes<[_LogManager$LoggerContext, java.lang.Object]> {}
        interface _LogManager$LoggerWeakRef$$static extends ClassLike {
          _new(this$0: LogManager, logger: Logger): LogManager$LoggerWeakRef;
        }
        let LogManager$LoggerWeakRef: _LogManager$LoggerWeakRef$$static;
        interface _LogManager$LoggerWeakRef {
          _dispose(): void;
          _setNode(node: LogManager$LogNode): void;
          _setParentRef(parentRef: java.lang.ref.WeakReference<Logger>): void;
          _disposed: boolean;
          _name: string;
          _node: LogManager$LogNode;
          _parentRef: java.lang.ref.WeakReference<Logger>;
        }
        interface LogManager$LoggerWeakRef extends CombineTypes<[_LogManager$LoggerWeakRef, java.lang.ref.WeakReference<Logger>]> {}
        interface _LogManager$LoggingProviderAccess$$static extends ClassLike {
          _INSTANCE: LogManager$LoggingProviderAccess;
        }
        let LogManager$LoggingProviderAccess: _LogManager$LoggingProviderAccess$$static;
        interface _LogManager$LoggingProviderAccess {
          demandLoggerFor(manager: LogManager, name: string, module: java.lang.Module): Logger;
          run(): java.lang.Void;
          run(): any;
        }
        interface LogManager$LoggingProviderAccess extends CombineTypes<[_LogManager$LoggingProviderAccess, java.security.PrivilegedAction<java.lang.Void>, java.lang.Object, sun.util.logging.internal.LoggingProviderImpl$LogManagerAccess]> {}
        interface _LogManager$ModType$$static extends ClassLike {
          _of(previous: string, next: string): LogManager$ModType;
          valueOf(name: string): LogManager$ModType;
          values(): LogManager$ModType[];
          readonly ADDED: LogManager$ModType;
          readonly CHANGED: LogManager$ModType;
          readonly REMOVED: LogManager$ModType;
          readonly SAME: LogManager$ModType;
        }
        let LogManager$ModType: _LogManager$ModType$$static;
        interface _LogManager$ModType {
        }
        interface LogManager$ModType extends CombineTypes<[_LogManager$ModType]> {}
        interface _LogManager$RootLogger$$static extends ClassLike {
        }
        let LogManager$RootLogger: _LogManager$RootLogger$$static;
        interface _LogManager$RootLogger {
          _accessCheckedHandlers(): Handler[];
          addHandler(h: Handler): void;
          log(record: LogRecord): void;
          removeHandler(h: Handler): void;
          _this$0: LogManager;
        }
        interface LogManager$RootLogger extends CombineTypes<[_LogManager$RootLogger, java.util.logging.Logger]> {}
        interface _LogManager$SystemLoggerContext$$static extends ClassLike {
          _new(this$0: LogManager): LogManager$SystemLoggerContext;
        }
        let LogManager$SystemLoggerContext: _LogManager$SystemLoggerContext$$static;
        interface _LogManager$SystemLoggerContext {
          _demandLogger(name: string, resourceBundleName: string, module: java.lang.Module): Logger;
        }
        interface LogManager$SystemLoggerContext extends CombineTypes<[_LogManager$SystemLoggerContext, java.util.logging.LogManager$LoggerContext]> {}
        interface _LogManager$VisitedLoggers$$static extends ClassLike {
          _NEVER: LogManager$VisitedLoggers;
          _new(): LogManager$VisitedLoggers;
        }
        let LogManager$VisitedLoggers: _LogManager$VisitedLoggers$$static;
        interface _LogManager$VisitedLoggers {
          clear(): void;
          test(logger: Logger): boolean;
          test(a0: any): boolean;
          _visited: IdentityHashMap<Logger,boolean>;
        }
        interface LogManager$VisitedLoggers extends CombineTypes<[_LogManager$VisitedLoggers, util.function.Predicate<Logger>, java.lang.Object]> {}
        interface _LogRecord$$static extends ClassLike {
          _globalSequenceNumber: util.concurrent.atomic.AtomicLong;
          _serialPersistentFields: java.io.ObjectStreamField[];
          _serialVersionUID: long;
          new(level: Level, msg: string): LogRecord;
        }
        let LogRecord: _LogRecord$$static;
        interface _LogRecord {
          getInstant(): java.time.Instant;
          getLevel(): Level;
          getLoggerName(): string;
          getLongThreadID(): long;
          getMessage(): string;
          getMillis(): long;
          getParameters(): any[];
          getResourceBundle(): ResourceBundle;
          getResourceBundleName(): string;
          getSequenceNumber(): long;
          getSourceClassName(): string;
          getSourceMethodName(): string;
          getThreadID(): int;
          getThrown(): java.lang.Throwable;
          _inferCaller(): void;
          _readObject(_in: java.io.ObjectInputStream): void;
          setInstant(instant: java.time.Instant): void;
          setLevel(level: Level): void;
          setLoggerName(name: string): void;
          setLongThreadID(longThreadID: long): LogRecord;
          setMessage(message: string): void;
          setMillis(millis: long): void;
          setParameters(parameters: any[]): void;
          setResourceBundle(bundle: ResourceBundle): void;
          setResourceBundleName(name: string): void;
          setSequenceNumber(seq: long): void;
          setSourceClassName(sourceClassName: string): void;
          setSourceMethodName(sourceMethodName: string): void;
          setThreadID(threadID: int): void;
          setThrown(thrown: java.lang.Throwable): void;
          _shortThreadID(id: long): int;
          _writeObject(out: java.io.ObjectOutputStream): void;
          _instant: java.time.Instant;
          _level: Level;
          _loggerName: string;
          _longThreadID: long;
          _message: string;
          _needToInferCaller: boolean;
          _parameters: any[];
          _resourceBundle: ResourceBundle;
          _resourceBundleName: string;
          _sequenceNumber: long;
          _sourceClassName: string;
          _sourceMethodName: string;
          _threadID: int;
          _thrown: java.lang.Throwable;
        }
        interface LogRecord extends CombineTypes<[_LogRecord, java.lang.Object, java.io.Serializable]> {}
        interface _LogRecord$CallerFinder$$static extends ClassLike {
          _WALKER: java.lang.StackWalker;
          _new(): LogRecord$CallerFinder;
        }
        let LogRecord$CallerFinder: _LogRecord$CallerFinder$$static;
        interface _LogRecord$CallerFinder {
          _get(): Optional<java.lang.StackWalker$StackFrame>;
          _isLoggerImplFrame(cname: string): boolean;
          test(t: java.lang.StackWalker$StackFrame): boolean;
          test(a0: any): boolean;
          _lookingForLogger: boolean;
        }
        interface LogRecord$CallerFinder extends CombineTypes<[_LogRecord$CallerFinder, util.function.Predicate<java.lang.StackWalker$StackFrame>, java.lang.Object]> {}
        interface _Logger$$static extends ClassLike {
          _demandLogger(name: string, resourceBundleName: string, caller: java.lang.Class<any>): Logger;
          getAnonymousLogger(): Logger;
          getAnonymousLogger(resourceBundleName: string): Logger;
          getGlobal(): Logger;
          getLogger(name: string): Logger;
          _getLogger(name: string, callerClass: java.lang.Class<any>): Logger;
          getLogger(name: string, resourceBundleName: string): Logger;
          _getLogger(name: string, resourceBundleName: string, callerClass: java.lang.Class<any>): Logger;
          _getPlatformLogger(name: string): Logger;
          readonly GLOBAL_LOGGER_NAME: string;
          _NO_RESOURCE_BUNDLE: Logger$LoggerBundle;
          _SYSTEM_BUNDLE: Logger$LoggerBundle;
          _SYSTEM_LOGGER_RB_NAME: string;
          _emptyHandlers: Handler[];
          readonly global: Logger;
          _offValue: int;
          _treeLock: any;
          _new(name: string, resourceBundleName: string): Logger;
          _new(name: string, resourceBundleName: string, caller: java.lang.Module, manager: LogManager, isSystemLogger: boolean): Logger;
        }
        let Logger: _Logger$$static;
        interface _Logger {
          _accessCheckedHandlers(): Handler[];
          addHandler(handler: Handler): void;
          _catalog(): ResourceBundle;
          _checkPermission(): void;
          config(msg: string): void;
          config(msgSupplier: util.function.Supplier<string>): void;
          _doLog(lr: LogRecord): void;
          _doLog(lr: LogRecord, rbname: string): void;
          _doLog(lr: LogRecord, rb: ResourceBundle): void;
          _doSetParent(newParent: Logger): void;
          entering(sourceClass: string, sourceMethod: string): void;
          entering(sourceClass: string, sourceMethod: string, param1: any): void;
          entering(sourceClass: string, sourceMethod: string, params: any[]): void;
          exiting(sourceClass: string, sourceMethod: string): void;
          exiting(sourceClass: string, sourceMethod: string, result: any): void;
          _findResourceBundle(name: string, useCallersModule: boolean): ResourceBundle;
          fine(msg: string): void;
          fine(msgSupplier: util.function.Supplier<string>): void;
          finer(msg: string): void;
          finer(msgSupplier: util.function.Supplier<string>): void;
          finest(msg: string): void;
          finest(msgSupplier: util.function.Supplier<string>): void;
          _getCallerModule(): java.lang.Module;
          _getEffectiveLoggerBundle(): Logger$LoggerBundle;
          getFilter(): Filter;
          getHandlers(): Handler[];
          getLevel(): Level;
          getName(): string;
          getParent(): Logger;
          getResourceBundle(): ResourceBundle;
          getResourceBundleName(): string;
          getUseParentHandlers(): boolean;
          info(msg: string): void;
          info(msgSupplier: util.function.Supplier<string>): void;
          _isLevelInitialized(): boolean;
          isLoggable(level: Level): boolean;
          log(record: LogRecord): void;
          log(level: Level, msg: string): void;
          log(level: Level, msgSupplier: util.function.Supplier<string>): void;
          log(level: Level, msg: string, param1: any): void;
          log(level: Level, msg: string, params: any[]): void;
          log(level: Level, msg: string, thrown: java.lang.Throwable): void;
          log(level: Level, thrown: java.lang.Throwable, msgSupplier: util.function.Supplier<string>): void;
          logp(level: Level, sourceClass: string, sourceMethod: string, msg: string): void;
          logp(level: Level, sourceClass: string, sourceMethod: string, msgSupplier: util.function.Supplier<string>): void;
          logp(level: Level, sourceClass: string, sourceMethod: string, msg: string, param1: any): void;
          logp(level: Level, sourceClass: string, sourceMethod: string, msg: string, params: any[]): void;
          logp(level: Level, sourceClass: string, sourceMethod: string, msg: string, thrown: java.lang.Throwable): void;
          logp(level: Level, sourceClass: string, sourceMethod: string, thrown: java.lang.Throwable, msgSupplier: util.function.Supplier<string>): void;
          logrb(level: Level, sourceClass: string, sourceMethod: string, bundleName: string, msg: string): void;
          logrb(level: Level, sourceClass: string, sourceMethod: string, bundleName: string, msg: string, param1: any): void;
          logrb(level: Level, sourceClass: string, sourceMethod: string, bundleName: string, msg: string, params: any[]): void;
          logrb(level: Level, sourceClass: string, sourceMethod: string, bundle: ResourceBundle, msg: string, params: any[]): void;
          logrb(level: Level, sourceClass: string, sourceMethod: string, bundle: ResourceBundle, msg: string, ...params: any[]): void;
          logrb(level: Level, bundle: ResourceBundle, msg: string, params: any[]): void;
          logrb(level: Level, bundle: ResourceBundle, msg: string, ...params: any[]): void;
          logrb(level: Level, sourceClass: string, sourceMethod: string, bundleName: string, msg: string, thrown: java.lang.Throwable): void;
          logrb(level: Level, sourceClass: string, sourceMethod: string, bundle: ResourceBundle, msg: string, thrown: java.lang.Throwable): void;
          logrb(level: Level, bundle: ResourceBundle, msg: string, thrown: java.lang.Throwable): void;
          _mergeWithSystemLogger(system: Logger): void;
          _removeChildLogger(child: LogManager$LoggerWeakRef): void;
          removeHandler(handler: Handler): void;
          _setCallerModuleRef(callerModule: java.lang.Module): void;
          setFilter(newFilter: Filter): void;
          setLevel(newLevel: Level): void;
          _setLogManager(manager: LogManager): void;
          setParent(parent: Logger): void;
          setResourceBundle(bundle: ResourceBundle): void;
          setUseParentHandlers(useParentHandlers: boolean): void;
          _setupResourceInfo(name: string, caller: java.lang.Class<any>): void;
          _setupResourceInfo(name: string, callerModule: java.lang.Module): void;
          severe(msg: string): void;
          severe(msgSupplier: util.function.Supplier<string>): void;
          throwing(sourceClass: string, sourceMethod: string, thrown: java.lang.Throwable): void;
          _updateEffectiveLevel(): void;
          warning(msg: string): void;
          warning(msgSupplier: util.function.Supplier<string>): void;
          _anonymous: boolean;
          _callerModuleRef: java.lang.ref.WeakReference<java.lang.Module>;
          _catalogLocale: Locale;
          _catalogName: string;
          _catalogRef: java.lang.ref.WeakReference<ResourceBundle>;
          _config: Logger$ConfigurationData;
          _isSystemLogger: boolean;
          _kids: ArrayList<LogManager$LoggerWeakRef>;
          _loggerBundle: Logger$LoggerBundle;
          _manager: LogManager;
          _name: string;
          _parent: Logger;
        }
        interface Logger extends CombineTypes<[_Logger, java.lang.Object]> {}
        interface _Logger$ConfigurationData$$static extends ClassLike {
          _new(): Logger$ConfigurationData;
        }
        let Logger$ConfigurationData: _Logger$ConfigurationData$$static;
        interface _Logger$ConfigurationData {
          _addHandler(h: Handler): void;
          _merge(systemPeer: Logger): Logger$ConfigurationData;
          _removeHandler(h: Handler): void;
          _setFilter(f: Filter): void;
          _setLevelObject(l: Level): void;
          _setLevelValue(v: int): void;
          _setUseParentHandlers(flag: boolean): void;
          _delegate: Logger$ConfigurationData;
          _filter: Filter;
          _handlers: util.concurrent.CopyOnWriteArrayList<Handler>;
          _levelObject: Level;
          _levelValue: int;
          _useParentHandlers: boolean;
        }
        interface Logger$ConfigurationData extends CombineTypes<[_Logger$ConfigurationData, java.lang.Object]> {}
        interface _Logger$LoggerBundle$$static extends ClassLike {
          _get(name: string, bundle: ResourceBundle): Logger$LoggerBundle;
        }
        let Logger$LoggerBundle: _Logger$LoggerBundle$$static;
        interface _Logger$LoggerBundle {
          _isSystemBundle(): boolean;
          _resourceBundleName: string;
          _userBundle: ResourceBundle;
        }
        interface Logger$LoggerBundle extends CombineTypes<[_Logger$LoggerBundle, java.lang.Object]> {}
        interface _Logger$RbAccess$$static extends ClassLike {
          _RB_ACCESS: jdk.internal.access.JavaUtilResourceBundleAccess;
        }
        let Logger$RbAccess: _Logger$RbAccess$$static;
        interface _Logger$RbAccess {
        }
        interface Logger$RbAccess extends CombineTypes<[_Logger$RbAccess, java.lang.Object]> {}
        interface _Logger$SystemLoggerHelper$$static extends ClassLike {
          _getBooleanProperty(key: string): boolean;
          _disableCallerCheck: boolean;
        }
        let Logger$SystemLoggerHelper: _Logger$SystemLoggerHelper$$static;
        interface _Logger$SystemLoggerHelper {
        }
        interface Logger$SystemLoggerHelper extends CombineTypes<[_Logger$SystemLoggerHelper, java.lang.Object]> {}
        interface _Logging$$static extends ClassLike {
          _getInstance(): Logging;
          _EMPTY_STRING: string;
          _INSTANCE: Logging;
          _logManager: LogManager;
        }
        let Logging: _Logging$$static;
        interface _Logging {
          getLoggerLevel(loggerName: string): string;
          getLoggerNames(): List<string>;
          getParentLoggerName(loggerName: string): string;
          setLoggerLevel(loggerName: string, levelName: string): void;
        }
        interface Logging extends CombineTypes<[_Logging, java.util.logging.LoggingMXBean, java.lang.Object]> {}
        interface _LoggingMXBean$$static extends ClassLike {
        }
        let LoggingMXBean: _LoggingMXBean$$static;
        interface _LoggingMXBean {
          getLoggerLevel(a0: string): string;
          getLoggerNames(): List<string>;
          getParentLoggerName(a0: string): string;
          setLoggerLevel(a0: string, a1: string): void;
        }
        interface LoggingMXBean extends CombineTypes<[_LoggingMXBean, java.lang.Object]> {}
        interface _LoggingPermission$$static extends ClassLike {
          _serialVersionUID: long;
          new(name: string, actions: string): LoggingPermission;
        }
        let LoggingPermission: _LoggingPermission$$static;
        interface _LoggingPermission {
        }
        interface LoggingPermission extends CombineTypes<[_LoggingPermission, java.security.BasicPermission]> {}
        interface _MemoryHandler$$static extends ClassLike {
          _DEFAULT_SIZE: int;
          new(): MemoryHandler;
          new(target: Handler, size: int, pushLevel: Level): MemoryHandler;
        }
        let MemoryHandler: _MemoryHandler$$static;
        interface _MemoryHandler {
          close(): void;
          flush(): void;
          getPushLevel(): Level;
          _init(): void;
          isLoggable(record: LogRecord): boolean;
          publish(record: LogRecord): void;
          _publish0(record: LogRecord): void;
          push(): void;
          _push0(): void;
          setPushLevel(newLevel: Level): void;
          _setPushLevel0(newLevel: Level): void;
          _buffer: LogRecord[];
          _count: int;
          _pushLevel: Level;
          _size: int;
          _start: int;
          _target: Handler;
        }
        interface MemoryHandler extends CombineTypes<[_MemoryHandler, java.util.logging.Handler]> {}
        interface _SimpleFormatter$$static extends ClassLike {
          _getLoggingProperty(name: string): string;
          new(): SimpleFormatter;
        }
        let SimpleFormatter: _SimpleFormatter$$static;
        interface _SimpleFormatter {
          format(record: LogRecord): string;
          _format: string;
        }
        interface SimpleFormatter extends CombineTypes<[_SimpleFormatter, java.util.logging.Formatter]> {}
        interface _SocketHandler$$static extends ClassLike {
          new(): SocketHandler;
          new(host: string, port: int): SocketHandler;
        }
        let SocketHandler: _SocketHandler$$static;
        interface _SocketHandler {
          close(): void;
          _close0(): void;
          _connect(): void;
          publish(record: LogRecord): void;
          _publish0(record: LogRecord): void;
          _host: string;
          _port: int;
          _sock: java.net.Socket;
        }
        interface SocketHandler extends CombineTypes<[_SocketHandler, java.util.logging.StreamHandler]> {}
        interface _StreamHandler$$static extends ClassLike {
          new(): StreamHandler;
          new(out: java.io.OutputStream, formatter: Formatter): StreamHandler;
          _new(defaultLevel: Level, defaultFormatter: Formatter, specifiedFormatter: Formatter): StreamHandler;
        }
        let StreamHandler: _StreamHandler$$static;
        interface _StreamHandler {
          close(): void;
          flush(): void;
          _flush0(): void;
          _flushAndClose(): void;
          isLoggable(record: LogRecord): boolean;
          publish(record: LogRecord): void;
          _publish0(record: LogRecord): void;
          setEncoding(encoding: string): void;
          _setEncoding0(encoding: string): void;
          _setOutputStream(out: java.io.OutputStream): void;
          _setOutputStream0(out: java.io.OutputStream): void;
          _setOutputStreamPrivileged(out: java.io.OutputStream): void;
          _doneHeader: boolean;
          _output: java.io.OutputStream;
          _writer: java.io.Writer;
        }
        interface StreamHandler extends CombineTypes<[_StreamHandler, java.util.logging.Handler]> {}
        interface _XMLFormatter$$static extends ClassLike {
          new(): XMLFormatter;
        }
        let XMLFormatter: _XMLFormatter$$static;
        interface _XMLFormatter {
          _a2(sb: XMLFormatter$stringBuilder, x: int): void;
          _appendISO8601(sb: XMLFormatter$stringBuilder, millis: long): void;
          _escape(sb: XMLFormatter$stringBuilder, text: string): void;
          format(record: LogRecord): string;
          getHead(h: Handler): string;
          getTail(h: Handler): string;
          _manager: LogManager;
          _useInstant: boolean;
        }
        interface XMLFormatter extends CombineTypes<[_XMLFormatter, java.util.logging.Formatter]> {}
      }
    }
  }
  module sun {
    module net {
      module www {
        module protocol {
          module http {
            module logging {
              interface _HttpLogFormatter$$static extends ClassLike {
                _cpattern: java.util.regex.Pattern;
                _pattern: java.util.regex.Pattern;
                new(): HttpLogFormatter;
              }
              let HttpLogFormatter: _HttpLogFormatter$$static;
              interface _HttpLogFormatter {
                format(record: java.util.logging.LogRecord): string;
              }
              interface HttpLogFormatter extends CombineTypes<[_HttpLogFormatter, java.util.logging.SimpleFormatter]> {}
            }
          }
        }
      }
    }
    module util {
      module logging {
        module internal {
          interface _LoggingProviderImpl$$static extends ClassLike {
            _demandJULLoggerFor(name: string, module: java.lang.Module): java.util.logging.Logger;
            getLogManagerAccess(): LoggingProviderImpl$LogManagerAccess;
            setLogManagerAccess(accesLoggers: LoggingProviderImpl$LogManagerAccess): void;
            _LOGGERFINDER_PERMISSION: java.lang.RuntimePermission;
            _LOGGING_CONTROL_PERMISSION: java.util.logging.LoggingPermission;
            _logManagerAccess: LoggingProviderImpl$LogManagerAccess;
            new(): LoggingProviderImpl;
          }
          let LoggingProviderImpl: _LoggingProviderImpl$$static;
          interface _LoggingProviderImpl {
            _demandLoggerFor(name: string, module: java.lang.Module): java.lang.System$Logger;
          }
          interface LoggingProviderImpl extends CombineTypes<[_LoggingProviderImpl, jdk.internal.logger.DefaultLoggerFinder]> {}
          interface _LoggingProviderImpl$JULWrapper$$static extends ClassLike {
            _of(logger: java.util.logging.Logger): LoggingProviderImpl$JULWrapper;
            _toJUL(level: java.lang.System$Logger$Level): java.util.logging.Level;
            _toJUL(level: PlatformLogger$Level): java.util.logging.Level;
            _platform2JulLevelMapping: java.util.logging.Level[];
            _spi2JulLevelMapping: java.util.logging.Level[];
          }
          let LoggingProviderImpl$JULWrapper: _LoggingProviderImpl$JULWrapper$$static;
          interface _LoggingProviderImpl$JULWrapper {
            equals(obj: any): boolean;
            getLoggerConfiguration(): PlatformLogger$ConfigurableBridge$LoggerConfiguration;
            getName(): string;
            getPlatformLevel(): PlatformLogger$Level;
            hashCode(): int;
            isEnabled(): boolean;
            isLoggable(level: PlatformLogger$Level): boolean;
            isLoggable(level: java.lang.System$Logger$Level): boolean;
            log(level: PlatformLogger$Level, msg: string, throwable: java.lang.Throwable): void;
            log(level: PlatformLogger$Level, format: string, params: any[]): void;
            log(level: PlatformLogger$Level, format: string, ...params: any[]): void;
            log(level: PlatformLogger$Level, msg: string): void;
            log(level: PlatformLogger$Level, msgSuppier: java.util.function.Supplier<string>): void;
            log(level: PlatformLogger$Level, thrown: java.lang.Throwable, msgSuppier: java.util.function.Supplier<string>): void;
            log(level: java.lang.System$Logger$Level, msg: string): void;
            log(level: java.lang.System$Logger$Level, msgSupplier: java.util.function.Supplier<string>): void;
            log(level: java.lang.System$Logger$Level, obj: any): void;
            log(level: java.lang.System$Logger$Level, msg: string, thrown: java.lang.Throwable): void;
            log(level: java.lang.System$Logger$Level, msgSupplier: java.util.function.Supplier<string>, thrown: java.lang.Throwable): void;
            log(level: java.lang.System$Logger$Level, format: string, params: any[]): void;
            log(level: java.lang.System$Logger$Level, format: string, ...params: any[]): void;
            log(level: java.lang.System$Logger$Level, bundle: java.util.ResourceBundle, key: string, thrown: java.lang.Throwable): void;
            log(level: java.lang.System$Logger$Level, bundle: java.util.ResourceBundle, format: string, params: any[]): void;
            log(level: java.lang.System$Logger$Level, bundle: java.util.ResourceBundle, format: string, ...params: any[]): void;
            logp(level: PlatformLogger$Level, sourceClass: string, sourceMethod: string, msg: string): void;
            logp(level: PlatformLogger$Level, sourceClass: string, sourceMethod: string, msgSupplier: java.util.function.Supplier<string>): void;
            logp(level: PlatformLogger$Level, sourceClass: string, sourceMethod: string, msg: string, params: any[]): void;
            logp(level: PlatformLogger$Level, sourceClass: string, sourceMethod: string, msg: string, ...params: any[]): void;
            logp(level: PlatformLogger$Level, sourceClass: string, sourceMethod: string, msg: string, thrown: java.lang.Throwable): void;
            logp(level: PlatformLogger$Level, sourceClass: string, sourceMethod: string, thrown: java.lang.Throwable, msgSupplier: java.util.function.Supplier<string>): void;
            logrb(level: PlatformLogger$Level, bundle: java.util.ResourceBundle, key: string, throwable: java.lang.Throwable): void;
            logrb(level: PlatformLogger$Level, bundle: java.util.ResourceBundle, key: string, params: any[]): void;
            logrb(level: PlatformLogger$Level, bundle: java.util.ResourceBundle, key: string, ...params: any[]): void;
            logrb(level: PlatformLogger$Level, sourceClass: string, sourceMethod: string, bundle: java.util.ResourceBundle, key: string, params: any[]): void;
            logrb(level: PlatformLogger$Level, sourceClass: string, sourceMethod: string, bundle: java.util.ResourceBundle, key: string, ...params: any[]): void;
            logrb(level: PlatformLogger$Level, sourceClass: string, sourceMethod: string, bundle: java.util.ResourceBundle, key: string, thrown: java.lang.Throwable): void;
            setPlatformLevel(level: PlatformLogger$Level): void;
            _julLogger: java.util.logging.Logger;
          }
          interface LoggingProviderImpl$JULWrapper extends CombineTypes<[_LoggingProviderImpl$JULWrapper, java.lang.System$Logger, sun.util.logging.PlatformLogger$ConfigurableBridge$LoggerConfiguration, sun.util.logging.PlatformLogger$ConfigurableBridge, sun.util.logging.PlatformLogger$Bridge]> {}
          interface _LoggingProviderImpl$LogManagerAccess$$static extends ClassLike {
          }
          let LoggingProviderImpl$LogManagerAccess: _LoggingProviderImpl$LogManagerAccess$$static;
          interface _LoggingProviderImpl$LogManagerAccess {
            demandLoggerFor(a0: java.util.logging.LogManager, a1: string, a2: java.lang.Module): java.util.logging.Logger;
(a0: java.util.logging.LogManager, a1: string, a2: java.lang.Module): java.util.logging.Logger;
          }
          interface LoggingProviderImpl$LogManagerAccess extends CombineTypes<[_LoggingProviderImpl$LogManagerAccess, java.lang.Object]> {}
        }
        module resources {
          interface _logging$$static extends ClassLike {
            new(): logging;
          }
          let logging: _logging$$static;
          interface _logging {
            _getContents(): any[][];
          }
          interface logging extends CombineTypes<[_logging, java.util.ListResourceBundle]> {}
          interface _logging_de$$static extends ClassLike {
            new(): logging_de;
          }
          let logging_de: _logging_de$$static;
          interface _logging_de {
            _getContents(): any[][];
          }
          interface logging_de extends CombineTypes<[_logging_de, java.util.ListResourceBundle]> {}
          interface _logging_es$$static extends ClassLike {
            new(): logging_es;
          }
          let logging_es: _logging_es$$static;
          interface _logging_es {
            _getContents(): any[][];
          }
          interface logging_es extends CombineTypes<[_logging_es, java.util.ListResourceBundle]> {}
          interface _logging_fr$$static extends ClassLike {
            new(): logging_fr;
          }
          let logging_fr: _logging_fr$$static;
          interface _logging_fr {
            _getContents(): any[][];
          }
          interface logging_fr extends CombineTypes<[_logging_fr, java.util.ListResourceBundle]> {}
          interface _logging_it$$static extends ClassLike {
            new(): logging_it;
          }
          let logging_it: _logging_it$$static;
          interface _logging_it {
            _getContents(): any[][];
          }
          interface logging_it extends CombineTypes<[_logging_it, java.util.ListResourceBundle]> {}
          interface _logging_ja$$static extends ClassLike {
            new(): logging_ja;
          }
          let logging_ja: _logging_ja$$static;
          interface _logging_ja {
            _getContents(): any[][];
          }
          interface logging_ja extends CombineTypes<[_logging_ja, java.util.ListResourceBundle]> {}
          interface _logging_ko$$static extends ClassLike {
            new(): logging_ko;
          }
          let logging_ko: _logging_ko$$static;
          interface _logging_ko {
            _getContents(): any[][];
          }
          interface logging_ko extends CombineTypes<[_logging_ko, java.util.ListResourceBundle]> {}
          interface _logging_pt_BR$$static extends ClassLike {
            new(): logging_pt_BR;
          }
          let logging_pt_BR: _logging_pt_BR$$static;
          interface _logging_pt_BR {
            _getContents(): any[][];
          }
          interface logging_pt_BR extends CombineTypes<[_logging_pt_BR, java.util.ListResourceBundle]> {}
          interface _logging_sv$$static extends ClassLike {
            new(): logging_sv;
          }
          let logging_sv: _logging_sv$$static;
          interface _logging_sv {
            _getContents(): any[][];
          }
          interface logging_sv extends CombineTypes<[_logging_sv, java.util.ListResourceBundle]> {}
          interface _logging_zh_CN$$static extends ClassLike {
            new(): logging_zh_CN;
          }
          let logging_zh_CN: _logging_zh_CN$$static;
          interface _logging_zh_CN {
            _getContents(): any[][];
          }
          interface logging_zh_CN extends CombineTypes<[_logging_zh_CN, java.util.ListResourceBundle]> {}
          interface _logging_zh_HK$$static extends ClassLike {
            new(): logging_zh_HK;
          }
          let logging_zh_HK: _logging_zh_HK$$static;
          interface _logging_zh_HK {
            _getContents(): any[][];
          }
          interface logging_zh_HK extends CombineTypes<[_logging_zh_HK, java.util.ListResourceBundle]> {}
          interface _logging_zh_TW$$static extends ClassLike {
            new(): logging_zh_TW;
          }
          let logging_zh_TW: _logging_zh_TW$$static;
          interface _logging_zh_TW {
            _getContents(): any[][];
          }
          interface logging_zh_TW extends CombineTypes<[_logging_zh_TW, java.util.ListResourceBundle]> {}
        }
      }
    }
  }
}
