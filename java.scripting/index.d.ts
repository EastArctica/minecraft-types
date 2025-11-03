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
  module com {
    module sun {
      module tools {
        module script {
          module shell {
            interface _Main$$static extends ClassLike {
              _addFileSource(se: javax.script.ScriptEngine, fileName: string, encoding: string): void;
              _addInteractiveMode(se: javax.script.ScriptEngine): void;
              _addStringSource(se: javax.script.ScriptEngine, source: string): void;
              _checkClassPath(args: string[]): void;
              _evaluateReader(se: javax.script.ScriptEngine, reader: java.io.Reader, name: string): any;
              _evaluateStream(se: javax.script.ScriptEngine, is: java.io.InputStream, name: string, encoding: string): any;
              _evaluateString(se: javax.script.ScriptEngine, script: string, exitOnError: boolean): any;
              _evaluateString(se: javax.script.ScriptEngine, script: string): void;
              _fileToURL(file: java.io.File): java.net.URL;
              _getError(): java.io.PrintStream;
              _getIn(): java.io.InputStream;
              _getMessage(key: string, params: any[]): string;
              _getPrompt(se: javax.script.ScriptEngine): string;
              _getScriptEngine(lang: string): javax.script.ScriptEngine;
              _initScriptEngine(se: javax.script.ScriptEngine): void;
              _listScriptEngines(): void;
              main(args: string[]): void;
              _pathToURLs(path: string): java.net.URL[];
              _processOptions(args: string[]): string[];
              _processSource(se: javax.script.ScriptEngine, filename: string, encoding: string): void;
              _setScriptArguments(se: javax.script.ScriptEngine, args: string[]): void;
              _setScriptFilename(se: javax.script.ScriptEngine, name: string): string;
              _usage(exitCode: int): void;
              _BUNDLE_NAME: string;
              _DEFAULT_LANGUAGE: string;
              _EXIT_CMD_NO_CLASSPATH: int;
              _EXIT_CMD_NO_ENCODING: int;
              _EXIT_CMD_NO_FILE: int;
              _EXIT_CMD_NO_LANG: int;
              _EXIT_CMD_NO_PROPNAME: int;
              _EXIT_CMD_NO_SCRIPT: int;
              _EXIT_ENGINE_NOT_FOUND: int;
              _EXIT_FILE_NOT_FOUND: int;
              _EXIT_MULTIPLE_STDIN: int;
              _EXIT_NO_ENCODING_FOUND: int;
              _EXIT_SCRIPT_ERROR: int;
              _EXIT_SUCCESS: int;
              _EXIT_UNKNOWN_OPTION: int;
              _PROGRAM_NAME: string;
              _engineManager: javax.script.ScriptEngineManager;
              _engines: java.util.Map<string,javax.script.ScriptEngine>;
              _msgRes: java.util.ResourceBundle;
              _scripts: java.util.List<Main$Command>;
              new(): Main;
            }
            let Main: _Main$$static;
            interface _Main {
            }
            interface Main extends CombineTypes<[_Main, java.lang.Object]> {}
            interface _Main$Command$$static extends ClassLike {
            }
            let Main$Command: _Main$Command$$static;
            interface _Main$Command {
              run(a0: string[]): void;
(a0: string[]): void;
            }
            interface Main$Command extends CombineTypes<[_Main$Command, java.lang.Object]> {}
          }
        }
      }
    }
  }
  module javax {
    module script {
      interface _AbstractScriptEngine$$static extends ClassLike {
        new(): AbstractScriptEngine;
        new(n: Bindings): AbstractScriptEngine;
      }
      let AbstractScriptEngine: _AbstractScriptEngine$$static;
      interface _AbstractScriptEngine {
        eval(reader: java.io.Reader, bindings: Bindings): any;
        eval(script: string, bindings: Bindings): any;
        eval(reader: java.io.Reader): any;
        eval(script: string): any;
        get(key: string): any;
        getBindings(scope: int): Bindings;
        getContext(): ScriptContext;
        _getScriptContext(nn: Bindings): ScriptContext;
        put(key: string, value: any): void;
        setBindings(bindings: Bindings, scope: int): void;
        setContext(ctxt: ScriptContext): void;
        _context: ScriptContext;
      }
      interface AbstractScriptEngine extends CombineTypes<[_AbstractScriptEngine, javax.script.ScriptEngine, java.lang.Object]> {}
      interface _Bindings$$static extends ClassLike {
      }
      let Bindings: _Bindings$$static;
      interface _Bindings {
        containsKey(a0: any): boolean;
        get(a0: any): any;
        put(a0: string, a1: any): any;
        put(a0: any, a1: any): any;
        putAll(a0: java.util.Map<string,any>): void;
        remove(a0: any): any;
      }
      interface Bindings extends CombineTypes<[_Bindings, java.util.Map<string,any>, java.lang.Object]> {}
      interface _Compilable$$static extends ClassLike {
      }
      let Compilable: _Compilable$$static;
      interface _Compilable {
        compile(a0: string): CompiledScript;
        compile(a0: java.io.Reader): CompiledScript;
      }
      interface Compilable extends CombineTypes<[_Compilable, java.lang.Object]> {}
      interface _CompiledScript$$static extends ClassLike {
        new(): CompiledScript;
      }
      let CompiledScript: _CompiledScript$$static;
      interface _CompiledScript {
        eval(a0: ScriptContext): any;
        eval(bindings: Bindings): any;
        eval(): any;
        getEngine(): ScriptEngine;
      }
      interface CompiledScript extends CombineTypes<[_CompiledScript, java.lang.Object]> {}
      interface _Invocable$$static extends ClassLike {
      }
      let Invocable: _Invocable$$static;
      interface _Invocable {
        getInterface<T>(a0: java.lang.Class<T>): T;
        getInterface<T>(a0: any, a1: java.lang.Class<T>): T;
        invokeFunction(a0: string, a1: any[]): any;
        invokeFunction(a0: string, ...a1: any[]): any;
        invokeMethod(a0: any, a1: string, a2: any[]): any;
        invokeMethod(a0: any, a1: string, ...a2: any[]): any;
      }
      interface Invocable extends CombineTypes<[_Invocable, java.lang.Object]> {}
      interface _ScriptContext$$static extends ClassLike {
        readonly ENGINE_SCOPE: int;
        readonly GLOBAL_SCOPE: int;
      }
      let ScriptContext: _ScriptContext$$static;
      interface _ScriptContext {
        getAttribute(a0: string, a1: int): any;
        getAttribute(a0: string): any;
        getAttributesScope(a0: string): int;
        getBindings(a0: int): Bindings;
        getErrorWriter(): java.io.Writer;
        getReader(): java.io.Reader;
        getScopes(): java.util.List<int>;
        getWriter(): java.io.Writer;
        removeAttribute(a0: string, a1: int): any;
        setAttribute(a0: string, a1: any, a2: int): void;
        setBindings(a0: Bindings, a1: int): void;
        setErrorWriter(a0: java.io.Writer): void;
        setReader(a0: java.io.Reader): void;
        setWriter(a0: java.io.Writer): void;
      }
      interface ScriptContext extends CombineTypes<[_ScriptContext, java.lang.Object]> {}
      interface _ScriptEngine$$static extends ClassLike {
        readonly ARGV: string;
        readonly ENGINE: string;
        readonly ENGINE_VERSION: string;
        readonly FILENAME: string;
        readonly LANGUAGE: string;
        readonly LANGUAGE_VERSION: string;
        readonly NAME: string;
      }
      let ScriptEngine: _ScriptEngine$$static;
      interface _ScriptEngine {
        createBindings(): Bindings;
        eval(a0: string, a1: ScriptContext): any;
        eval(a0: java.io.Reader, a1: ScriptContext): any;
        eval(a0: string): any;
        eval(a0: java.io.Reader): any;
        eval(a0: string, a1: Bindings): any;
        eval(a0: java.io.Reader, a1: Bindings): any;
        get(a0: string): any;
        getBindings(a0: int): Bindings;
        getContext(): ScriptContext;
        getFactory(): ScriptEngineFactory;
        put(a0: string, a1: any): void;
        setBindings(a0: Bindings, a1: int): void;
        setContext(a0: ScriptContext): void;
      }
      interface ScriptEngine extends CombineTypes<[_ScriptEngine, java.lang.Object]> {}
      interface _ScriptEngineFactory$$static extends ClassLike {
      }
      let ScriptEngineFactory: _ScriptEngineFactory$$static;
      interface _ScriptEngineFactory {
        getEngineName(): string;
        getEngineVersion(): string;
        getExtensions(): java.util.List<string>;
        getLanguageName(): string;
        getLanguageVersion(): string;
        getMethodCallSyntax(a0: string, a1: string, a2: string[]): string;
        getMethodCallSyntax(a0: string, a1: string, ...a2: string[]): string;
        getMimeTypes(): java.util.List<string>;
        getNames(): java.util.List<string>;
        getOutputStatement(a0: string): string;
        getParameter(a0: string): any;
        getProgram(a0: string[]): string;
        getProgram(...a0: string[]): string;
        getScriptEngine(): ScriptEngine;
      }
      interface ScriptEngineFactory extends CombineTypes<[_ScriptEngineFactory, java.lang.Object]> {}
      interface _ScriptEngineManager$$static extends ClassLike {
        _associateFactory(associations: java.util.Map<string,ScriptEngineFactory>, association: string, factory: ScriptEngineFactory): void;
        _debugPrint(exp: java.lang.Throwable): void;
        _reportException(msg: string, exp: java.lang.Throwable): void;
        _COMPARATOR: java.util.Comparator<ScriptEngineFactory>;
        _DEBUG: boolean;
        new(): ScriptEngineManager;
        new(loader: java.lang.ClassLoader): ScriptEngineManager;
      }
      let ScriptEngineManager: _ScriptEngineManager$$static;
      interface _ScriptEngineManager {
        get(key: string): any;
        getBindings(): Bindings;
        _getEngineBy(selector: string, associations: java.util.Map<string,ScriptEngineFactory>, valuesFn: java.util.function.Function<ScriptEngineFactory,java.util.List<string>>): ScriptEngine;
        getEngineByExtension(extension: string): ScriptEngine;
        getEngineByMimeType(mimeType: string): ScriptEngine;
        getEngineByName(shortName: string): ScriptEngine;
        getEngineFactories(): java.util.List<ScriptEngineFactory>;
        _getServiceLoader(loader: java.lang.ClassLoader): java.util.ServiceLoader<ScriptEngineFactory>;
        _initEngines(loader: java.lang.ClassLoader): void;
        put(key: string, value: any): void;
        registerEngineExtension(extension: string, factory: ScriptEngineFactory): void;
        registerEngineMimeType(type: string, factory: ScriptEngineFactory): void;
        registerEngineName(name: string, factory: ScriptEngineFactory): void;
        setBindings(bindings: Bindings): void;
        _engineSpis: java.util.TreeSet<ScriptEngineFactory>;
        _extensionAssociations: java.util.HashMap<string,ScriptEngineFactory>;
        _globalScope: Bindings;
        _mimeTypeAssociations: java.util.HashMap<string,ScriptEngineFactory>;
        _nameAssociations: java.util.HashMap<string,ScriptEngineFactory>;
      }
      interface ScriptEngineManager extends CombineTypes<[_ScriptEngineManager, java.lang.Object]> {}
      interface _ScriptException$$static extends ClassLike {
        _serialVersionUID: long;
        new(s: string): ScriptException;
        new(e: java.lang.Exception): ScriptException;
        new(message: string, fileName: string, lineNumber: int): ScriptException;
        new(message: string, fileName: string, lineNumber: int, columnNumber: int): ScriptException;
      }
      let ScriptException: _ScriptException$$static;
      interface _ScriptException {
        getColumnNumber(): int;
        getFileName(): string;
        getLineNumber(): int;
        getMessage(): string;
        _columnNumber: int;
        _fileName: string;
        _lineNumber: int;
      }
      interface ScriptException extends CombineTypes<[_ScriptException, java.lang.Exception]> {}
      interface _SimpleBindings$$static extends ClassLike {
        new(m: java.util.Map<string,any>): SimpleBindings;
        new(): SimpleBindings;
      }
      let SimpleBindings: _SimpleBindings$$static;
      interface _SimpleBindings {
        _checkKey(key: any): void;
        clear(): void;
        containsKey(key: any): boolean;
        containsValue(value: any): boolean;
        entrySet(): java.util.Set<java.util.Map$Entry<string,any>>;
        get(key: any): any;
        isEmpty(): boolean;
        keySet(): java.util.Set<string>;
        put(name: string, value: any): any;
        put(a0: any, a1: any): any;
        putAll(toMerge: java.util.Map<string,any>): void;
        remove(key: any): any;
        size(): int;
        values(): java.util.Collection<any>;
        _map: java.util.Map<string,any>;
      }
      interface SimpleBindings extends CombineTypes<[_SimpleBindings, javax.script.Bindings, java.lang.Object]> {}
      interface _SimpleScriptContext$$static extends ClassLike {
        _scopes: java.util.List<int>;
        new(): SimpleScriptContext;
        _new(reader: java.io.Reader, writer: java.io.Writer, errorWriter: java.io.Writer): SimpleScriptContext;
      }
      let SimpleScriptContext: _SimpleScriptContext$$static;
      interface _SimpleScriptContext {
        _checkName(name: string): void;
        getAttribute(name: string): any;
        getAttribute(name: string, scope: int): any;
        getAttributesScope(name: string): int;
        getBindings(scope: int): Bindings;
        getErrorWriter(): java.io.Writer;
        getReader(): java.io.Reader;
        getScopes(): java.util.List<int>;
        getWriter(): java.io.Writer;
        removeAttribute(name: string, scope: int): any;
        setAttribute(name: string, value: any, scope: int): void;
        setBindings(bindings: Bindings, scope: int): void;
        setErrorWriter(writer: java.io.Writer): void;
        setReader(reader: java.io.Reader): void;
        setWriter(writer: java.io.Writer): void;
        _engineScope: Bindings;
        _errorWriter: java.io.Writer;
        _globalScope: Bindings;
        _reader: java.io.Reader;
        _writer: java.io.Writer;
      }
      interface SimpleScriptContext extends CombineTypes<[_SimpleScriptContext, java.lang.Object, javax.script.ScriptContext]> {}
    }
  }
}
