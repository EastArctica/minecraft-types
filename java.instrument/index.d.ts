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
    module lang {
      module instrument {
        interface _ClassDefinition$$static extends ClassLike {
          new(theClass: Class<any>, theClassFile: byte[]): ClassDefinition;
        }
        let ClassDefinition: _ClassDefinition$$static;
        interface _ClassDefinition {
          getDefinitionClass(): Class<any>;
          getDefinitionClassFile(): byte[];
          _mClass: Class<any>;
          _mClassFile: byte[];
        }
        interface ClassDefinition extends CombineTypes<[_ClassDefinition, java.lang.Object]> {}
        interface _ClassFileTransformer$$static extends ClassLike {
        }
        let ClassFileTransformer: _ClassFileTransformer$$static;
        interface _ClassFileTransformer {
          transform(loader: ClassLoader, className: string, classBeingRedefined: Class<any>, protectionDomain: java.security.ProtectionDomain, classfileBuffer: byte[]): byte[];
          transform(module: Module, loader: ClassLoader, className: string, classBeingRedefined: Class<any>, protectionDomain: java.security.ProtectionDomain, classfileBuffer: byte[]): byte[];
        }
        interface ClassFileTransformer extends CombineTypes<[_ClassFileTransformer, java.lang.Object]> {}
        interface _IllegalClassFormatException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): IllegalClassFormatException;
          new(s: string): IllegalClassFormatException;
        }
        let IllegalClassFormatException: _IllegalClassFormatException$$static;
        interface _IllegalClassFormatException {
        }
        interface IllegalClassFormatException extends CombineTypes<[_IllegalClassFormatException, java.lang.Exception]> {}
        interface _Instrumentation$$static extends ClassLike {
        }
        let Instrumentation: _Instrumentation$$static;
        interface _Instrumentation {
          addTransformer(a0: ClassFileTransformer, a1: boolean): void;
          addTransformer(a0: ClassFileTransformer): void;
          appendToBootstrapClassLoaderSearch(a0: java.util.jar.JarFile): void;
          appendToSystemClassLoaderSearch(a0: java.util.jar.JarFile): void;
          getAllLoadedClasses(): Class[];
          getInitiatedClasses(a0: ClassLoader): Class[];
          getObjectSize(a0: any): long;
          isModifiableClass(a0: Class<any>): boolean;
          isModifiableModule(a0: Module): boolean;
          isNativeMethodPrefixSupported(): boolean;
          isRedefineClassesSupported(): boolean;
          isRetransformClassesSupported(): boolean;
          redefineClasses(a0: ClassDefinition[]): void;
          redefineClasses(...a0: ClassDefinition[]): void;
          redefineModule(a0: Module, a1: java.util.Set<Module>, a2: java.util.Map<string,java.util.Set<Module>>, a3: java.util.Map<string,java.util.Set<Module>>, a4: java.util.Set<Class<any>>, a5: java.util.Map<Class<any>,java.util.List<Class<any>>>): void;
          removeTransformer(a0: ClassFileTransformer): boolean;
          retransformClasses(a0: Class<any>[]): void;
          retransformClasses(...a0: Class<any>[]): void;
          setNativeMethodPrefix(a0: ClassFileTransformer, a1: string): void;
        }
        interface Instrumentation extends CombineTypes<[_Instrumentation, java.lang.Object]> {}
        interface _UnmodifiableClassException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): UnmodifiableClassException;
          new(s: string): UnmodifiableClassException;
        }
        let UnmodifiableClassException: _UnmodifiableClassException$$static;
        interface _UnmodifiableClassException {
        }
        interface UnmodifiableClassException extends CombineTypes<[_UnmodifiableClassException, java.lang.Exception]> {}
        interface _UnmodifiableModuleException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): UnmodifiableModuleException;
          new(msg: string): UnmodifiableModuleException;
        }
        let UnmodifiableModuleException: _UnmodifiableModuleException$$static;
        interface _UnmodifiableModuleException {
        }
        interface UnmodifiableModuleException extends CombineTypes<[_UnmodifiableModuleException, java.lang.RuntimeException]> {}
      }
    }
  }
  module sun {
    module instrument {
      interface _InstrumentationImpl$$static extends ClassLike {
        _codeSource(clazz: java.lang.Class<any>): java.net.URL;
        loadAgent(path: string): void;
        _loadAgent0(a0: string): void;
        _setAccessible(ao: java.lang.reflect.AccessibleObject, accessible: boolean): void;
        _TRACE_USAGE: boolean;
        _TRACE_USAGE_PROP_NAME: string;
      }
      let InstrumentationImpl: _InstrumentationImpl$$static;
      interface _InstrumentationImpl {
        addTransformer(transformer: java.lang.instrument.ClassFileTransformer): void;
        addTransformer(transformer: java.lang.instrument.ClassFileTransformer, canRetransform: boolean): void;
        appendToBootstrapClassLoaderSearch(jarfile: java.util.jar.JarFile): void;
        _appendToClassLoaderSearch0(a0: long, a1: string, a2: boolean): void;
        appendToSystemClassLoaderSearch(jarfile: java.util.jar.JarFile): void;
        _cloneAndCheckMap(module: java.lang.Module, map: java.util.Map<string,java.util.Set<java.lang.Module>>): java.util.Map<string,java.util.Set<java.lang.Module>>;
        _findTransformerManager(transformer: java.lang.instrument.ClassFileTransformer): TransformerManager;
        getAllLoadedClasses(): java.lang.Class[];
        _getAllLoadedClasses0(a0: long): java.lang.Class[];
        getInitiatedClasses(loader: java.lang.ClassLoader): java.lang.Class[];
        _getInitiatedClasses0(a0: long, a1: java.lang.ClassLoader): java.lang.Class[];
        getObjectSize(objectToSize: any): long;
        _getObjectSize0(a0: long, a1: any): long;
        isModifiableClass(theClass: java.lang.Class<any>): boolean;
        _isModifiableClass0(a0: long, a1: java.lang.Class<any>): boolean;
        isModifiableModule(module: java.lang.Module): boolean;
        isNativeMethodPrefixSupported(): boolean;
        isRedefineClassesSupported(): boolean;
        isRetransformClassesSupported(): boolean;
        _isRetransformClassesSupported0(a0: long): boolean;
        _jarFile(a0: long): string;
        _loadClassAndCallAgentmain(classname: string, optionsString: string): void;
        _loadClassAndCallPremain(classname: string, optionsString: string): void;
        _loadClassAndStartAgent(classname: string, methodname: string, optionsString: string): void;
        redefineClasses(definitions: java.lang.instrument.ClassDefinition[]): void;
        redefineClasses(...definitions: java.lang.instrument.ClassDefinition[]): void;
        _redefineClasses0(a0: long, a1: java.lang.instrument.ClassDefinition[]): void;
        redefineModule(module: java.lang.Module, extraReads: java.util.Set<java.lang.Module>, extraExports: java.util.Map<string,java.util.Set<java.lang.Module>>, extraOpens: java.util.Map<string,java.util.Set<java.lang.Module>>, extraUses: java.util.Set<java.lang.Class<any>>, extraProvides: java.util.Map<java.lang.Class<any>,java.util.List<java.lang.Class<any>>>): void;
        removeTransformer(transformer: java.lang.instrument.ClassFileTransformer): boolean;
        retransformClasses(classes: java.lang.Class<any>[]): void;
        retransformClasses(...classes: java.lang.Class<any>[]): void;
        _retransformClasses0(a0: long, a1: java.lang.Class<any>[]): void;
        _setHasRetransformableTransformers(a0: long, a1: boolean): void;
        _setHasTransformers(a0: long, a1: boolean): void;
        setNativeMethodPrefix(transformer: java.lang.instrument.ClassFileTransformer, prefix: string): void;
        _setNativeMethodPrefixes(a0: long, a1: string[], a2: boolean): void;
        _trace(methodName: string): void;
        _transform(module: java.lang.Module, loader: java.lang.ClassLoader, classname: string, classBeingRedefined: java.lang.Class<any>, protectionDomain: java.security.ProtectionDomain, classfileBuffer: byte[], isRetransformer: boolean): byte[];
        _mEnvironmentSupportsNativeMethodPrefix: boolean;
        _mEnvironmentSupportsRedefineClasses: boolean;
        _mEnvironmentSupportsRetransformClasses: boolean;
        _mEnvironmentSupportsRetransformClassesKnown: boolean;
        _mNativeAgent: long;
        _mRetransfomableTransformerManager: TransformerManager;
        _mTransformerManager: TransformerManager;
      }
      interface InstrumentationImpl extends CombineTypes<[_InstrumentationImpl, java.lang.instrument.Instrumentation, java.lang.Object]> {}
      interface _InstrumentationImpl$HolderStackWalker$$static extends ClassLike {
        _walker: java.lang.StackWalker;
      }
      let InstrumentationImpl$HolderStackWalker: _InstrumentationImpl$HolderStackWalker$$static;
      interface _InstrumentationImpl$HolderStackWalker {
      }
      interface InstrumentationImpl$HolderStackWalker extends CombineTypes<[_InstrumentationImpl$HolderStackWalker, java.lang.Object]> {}
      interface _TransformerManager$$static extends ClassLike {
        _new(isRetransformable: boolean): TransformerManager;
      }
      let TransformerManager: _TransformerManager$$static;
      interface _TransformerManager {
        addTransformer(transformer: java.lang.instrument.ClassFileTransformer): void;
        _getNativeMethodPrefixes(): string[];
        _getSnapshotTransformerList(): TransformerManager$TransformerInfo[];
        _getTransformerCount(): int;
        _includesTransformer(transformer: java.lang.instrument.ClassFileTransformer): boolean;
        _isRetransformable(): boolean;
        removeTransformer(transformer: java.lang.instrument.ClassFileTransformer): boolean;
        _setNativeMethodPrefix(transformer: java.lang.instrument.ClassFileTransformer, prefix: string): boolean;
        transform(module: java.lang.Module, loader: java.lang.ClassLoader, classname: string, classBeingRedefined: java.lang.Class<any>, protectionDomain: java.security.ProtectionDomain, classfileBuffer: byte[]): byte[];
        _mIsRetransformable: boolean;
        _mTransformerList: TransformerManager$TransformerInfo[];
      }
      interface TransformerManager extends CombineTypes<[_TransformerManager, java.lang.Object]> {}
      interface _TransformerManager$TransformerInfo$$static extends ClassLike {
        _new(a0: TransformerManager, transformer: java.lang.instrument.ClassFileTransformer): TransformerManager$TransformerInfo;
      }
      let TransformerManager$TransformerInfo: _TransformerManager$TransformerInfo$$static;
      interface _TransformerManager$TransformerInfo {
        _getPrefix(): string;
        _setPrefix(prefix: string): void;
        _transformer(): java.lang.instrument.ClassFileTransformer;
        _mPrefix: string;
        _mTransformer: java.lang.instrument.ClassFileTransformer;
      }
      interface TransformerManager$TransformerInfo extends CombineTypes<[_TransformerManager$TransformerInfo, java.lang.Object]> {}
    }
  }
}
