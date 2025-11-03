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
    module rmi {
      module dgc {
        interface _DGC$$static extends ClassLike {
        }
        let DGC: _DGC$$static;
        interface _DGC {
          clean(a0: rmi.server.ObjID[], a1: long, a2: VMID, a3: boolean): void;
          dirty(a0: rmi.server.ObjID[], a1: long, a2: Lease): Lease;
        }
        interface DGC extends CombineTypes<[_DGC, java.rmi.Remote, java.lang.Object]> {}
        interface _Lease$$static extends ClassLike {
          _serialVersionUID: long;
          new(id: VMID, duration: long): Lease;
        }
        let Lease: _Lease$$static;
        interface _Lease {
          getVMID(): VMID;
          getValue(): long;
          _value: long;
          _vmid: VMID;
        }
        interface Lease extends CombineTypes<[_Lease, java.lang.Object, java.io.Serializable]> {}
        interface _VMID$$static extends ClassLike {
          isUnique(): boolean;
          _randomBytes: byte[];
          _serialVersionUID: long;
          new(): VMID;
        }
        let VMID: _VMID$$static;
        interface _VMID {
          equals(obj: any): boolean;
          hashCode(): int;
          toString(): string;
          _addr: byte[];
          _uid: rmi.server.UID;
        }
        interface VMID extends CombineTypes<[_VMID, java.lang.Object, java.io.Serializable]> {}
      }
      module registry {
        interface _LocateRegistry$$static extends ClassLike {
          createRegistry(port: int): Registry;
          createRegistry(port: int, csf: rmi.server.RMIClientSocketFactory, ssf: rmi.server.RMIServerSocketFactory): Registry;
          getRegistry(): Registry;
          getRegistry(port: int): Registry;
          getRegistry(host: string): Registry;
          getRegistry(host: string, port: int): Registry;
          getRegistry(host: string, port: int, csf: rmi.server.RMIClientSocketFactory): Registry;
        }
        let LocateRegistry: _LocateRegistry$$static;
        interface _LocateRegistry {
        }
        interface LocateRegistry extends CombineTypes<[_LocateRegistry, java.lang.Object]> {}
        interface _Registry$$static extends ClassLike {
          readonly REGISTRY_PORT: int;
        }
        let Registry: _Registry$$static;
        interface _Registry {
          bind(a0: string, a1: Remote): void;
          list(): string[];
          lookup(a0: string): Remote;
          rebind(a0: string, a1: Remote): void;
          unbind(a0: string): void;
        }
        interface Registry extends CombineTypes<[_Registry, java.rmi.Remote, java.lang.Object]> {}
        interface _RegistryHandler$$static extends ClassLike {
        }
        let RegistryHandler: _RegistryHandler$$static;
        interface _RegistryHandler {
          registryImpl(a0: int): Registry;
          registryStub(a0: string, a1: int): Registry;
        }
        interface RegistryHandler extends CombineTypes<[_RegistryHandler, java.lang.Object]> {}
      }
      module server {
        interface _ExportException$$static extends ClassLike {
          _serialVersionUID: long;
          new(s: string): ExportException;
          new(s: string, ex: java.lang.Exception): ExportException;
        }
        let ExportException: _ExportException$$static;
        interface _ExportException {
        }
        interface ExportException extends CombineTypes<[_ExportException, java.rmi.RemoteException]> {}
        interface _LoaderHandler$$static extends ClassLike {
          readonly packagePrefix: string;
        }
        let LoaderHandler: _LoaderHandler$$static;
        interface _LoaderHandler {
          getSecurityContext(a0: java.lang.ClassLoader): any;
          loadClass(a0: string): java.lang.Class<any>;
          loadClass(a0: java.net.URL, a1: string): java.lang.Class<any>;
        }
        interface LoaderHandler extends CombineTypes<[_LoaderHandler, java.lang.Object]> {}
        interface _LogStream$$static extends ClassLike {
          getDefaultStream(): java.io.PrintStream;
          log(name: string): LogStream;
          parseLevel(s: string): int;
          setDefaultStream(newDefault: java.io.PrintStream): void;
          readonly BRIEF: int;
          readonly SILENT: int;
          readonly VERBOSE: int;
          _defaultStream: java.io.PrintStream;
          _known: java.util.Map<string,LogStream>;
        }
        let LogStream: _LogStream$$static;
        interface _LogStream {
          getOutputStream(): java.io.OutputStream;
          setOutputStream(out: java.io.OutputStream): void;
          toString(): string;
          write(b: int): void;
          write(b: byte[], off: int, len: int): void;
          _bufOut: java.io.ByteArrayOutputStream;
          _buffer: server$stringBuffer;
          _logOut: java.io.OutputStream;
          _logWriter: java.io.OutputStreamWriter;
          _name: string;
        }
        interface LogStream extends CombineTypes<[_LogStream, java.io.PrintStream]> {}
        interface _ObjID$$static extends ClassLike {
          read(_in: java.io.ObjectInput): ObjID;
          _useRandomIDs(): boolean;
          readonly ACTIVATOR_ID: int;
          readonly DGC_ID: int;
          readonly REGISTRY_ID: int;
          _mySpace: UID;
          _nextObjNum: java.util.concurrent.atomic.AtomicLong;
          _secureRandom: java.security.SecureRandom;
          _serialVersionUID: long;
          new(): ObjID;
          new(objNum: int): ObjID;
        }
        let ObjID: _ObjID$$static;
        interface _ObjID {
          equals(obj: any): boolean;
          hashCode(): int;
          toString(): string;
          write(out: java.io.ObjectOutput): void;
          _objNum: long;
          _space: UID;
        }
        interface ObjID extends CombineTypes<[_ObjID, java.lang.Object, java.io.Serializable]> {}
        interface _Operation$$static extends ClassLike {
          new(op: string): Operation;
        }
        let Operation: _Operation$$static;
        interface _Operation {
          getOperation(): string;
          toString(): string;
          _operation: string;
        }
        interface Operation extends CombineTypes<[_Operation, java.lang.Object]> {}
        interface _RMIClassLoader$$static extends ClassLike {
          getClassAnnotation(cl: java.lang.Class<any>): string;
          getClassLoader(codebase: string): java.lang.ClassLoader;
          getDefaultProviderInstance(): RMIClassLoaderSpi;
          getSecurityContext(loader: java.lang.ClassLoader): any;
          _initializeProvider(): RMIClassLoaderSpi;
          loadClass(name: string): java.lang.Class<any>;
          loadClass(codebase: java.net.URL, name: string): java.lang.Class<any>;
          loadClass(codebase: string, name: string): java.lang.Class<any>;
          loadClass(codebase: string, name: string, defaultLoader: java.lang.ClassLoader): java.lang.Class<any>;
          loadProxyClass(codebase: string, interfaces: string[], defaultLoader: java.lang.ClassLoader): java.lang.Class<any>;
          _newDefaultProviderInstance(): RMIClassLoaderSpi;
          _defaultProvider: RMIClassLoaderSpi;
          _provider: RMIClassLoaderSpi;
        }
        let RMIClassLoader: _RMIClassLoader$$static;
        interface _RMIClassLoader {
        }
        interface RMIClassLoader extends CombineTypes<[_RMIClassLoader, java.lang.Object]> {}
        interface _RMIClassLoaderSpi$$static extends ClassLike {
          new(): RMIClassLoaderSpi;
        }
        let RMIClassLoaderSpi: _RMIClassLoaderSpi$$static;
        interface _RMIClassLoaderSpi {
          getClassAnnotation(a0: java.lang.Class<any>): string;
          getClassLoader(a0: string): java.lang.ClassLoader;
          loadClass(a0: string, a1: string, a2: java.lang.ClassLoader): java.lang.Class<any>;
          loadProxyClass(a0: string, a1: string[], a2: java.lang.ClassLoader): java.lang.Class<any>;
        }
        interface RMIClassLoaderSpi extends CombineTypes<[_RMIClassLoaderSpi, java.lang.Object]> {}
        interface _RMIClientSocketFactory$$static extends ClassLike {
        }
        let RMIClientSocketFactory: _RMIClientSocketFactory$$static;
        interface _RMIClientSocketFactory {
          createSocket(a0: string, a1: int): java.net.Socket;
(a0: string, a1: int): java.net.Socket;
        }
        interface RMIClientSocketFactory extends CombineTypes<[_RMIClientSocketFactory, java.lang.Object]> {}
        interface _RMIFailureHandler$$static extends ClassLike {
        }
        let RMIFailureHandler: _RMIFailureHandler$$static;
        interface _RMIFailureHandler {
          failure(a0: java.lang.Exception): boolean;
(a0: java.lang.Exception): boolean;
        }
        interface RMIFailureHandler extends CombineTypes<[_RMIFailureHandler, java.lang.Object]> {}
        interface _RMIServerSocketFactory$$static extends ClassLike {
        }
        let RMIServerSocketFactory: _RMIServerSocketFactory$$static;
        interface _RMIServerSocketFactory {
          createServerSocket(a0: int): java.net.ServerSocket;
(a0: int): java.net.ServerSocket;
        }
        interface RMIServerSocketFactory extends CombineTypes<[_RMIServerSocketFactory, java.lang.Object]> {}
        interface _RMISocketFactory$$static extends ClassLike {
          getDefaultSocketFactory(): RMISocketFactory;
          getFailureHandler(): RMIFailureHandler;
          getSocketFactory(): RMISocketFactory;
          setFailureHandler(fh: RMIFailureHandler): void;
          setSocketFactory(fac: RMISocketFactory): void;
          _defaultSocketFactory: RMISocketFactory;
          _factory: RMISocketFactory;
          _handler: RMIFailureHandler;
          new(): RMISocketFactory;
        }
        let RMISocketFactory: _RMISocketFactory$$static;
        interface _RMISocketFactory {
          createServerSocket(a0: int): java.net.ServerSocket;
          createSocket(a0: string, a1: int): java.net.Socket;
        }
        interface RMISocketFactory extends CombineTypes<[_RMISocketFactory, java.lang.Object, java.rmi.server.RMIServerSocketFactory, java.rmi.server.RMIClientSocketFactory]> {}
        interface _RemoteCall$$static extends ClassLike {
        }
        let RemoteCall: _RemoteCall$$static;
        interface _RemoteCall {
          done(): void;
          executeCall(): void;
          getInputStream(): java.io.ObjectInput;
          getOutputStream(): java.io.ObjectOutput;
          getResultStream(a0: boolean): java.io.ObjectOutput;
          releaseInputStream(): void;
          releaseOutputStream(): void;
        }
        interface RemoteCall extends CombineTypes<[_RemoteCall, java.lang.Object]> {}
        interface _RemoteObject$$static extends ClassLike {
          toStub(obj: Remote): Remote;
          _serialVersionUID: long;
          _new(): RemoteObject;
          _new(newref: RemoteRef): RemoteObject;
        }
        let RemoteObject: _RemoteObject$$static;
        interface _RemoteObject {
          equals(obj: any): boolean;
          getRef(): RemoteRef;
          hashCode(): int;
          _readObject(_in: java.io.ObjectInputStream): void;
          toString(): string;
          _writeObject(out: java.io.ObjectOutputStream): void;
          _ref: RemoteRef;
        }
        interface RemoteObject extends CombineTypes<[_RemoteObject, java.rmi.Remote, java.lang.Object, java.io.Serializable]> {}
        interface _RemoteObjectInvocationHandler$$static extends ClassLike {
          _getMethodHash(method: java.lang.reflect.Method): long;
          _methodToHash_Maps: RemoteObjectInvocationHandler$MethodToHash_Maps;
          _serialVersionUID: long;
          new(ref: RemoteRef): RemoteObjectInvocationHandler;
        }
        let RemoteObjectInvocationHandler: _RemoteObjectInvocationHandler$$static;
        interface _RemoteObjectInvocationHandler {
          invoke(proxy: any, method: java.lang.reflect.Method, args: any[]): any;
          _invokeObjectMethod(proxy: any, method: java.lang.reflect.Method, args: any[]): any;
          _invokeRemoteMethod(proxy: any, method: java.lang.reflect.Method, args: any[]): any;
          _proxyToString(proxy: any): string;
          _readObjectNoData(): void;
        }
        interface RemoteObjectInvocationHandler extends CombineTypes<[_RemoteObjectInvocationHandler, java.rmi.server.RemoteObject, java.lang.reflect.InvocationHandler]> {}
        interface _RemoteObjectInvocationHandler$MethodToHash_Maps$$static extends ClassLike {
          _new(): RemoteObjectInvocationHandler$MethodToHash_Maps;
        }
        let RemoteObjectInvocationHandler$MethodToHash_Maps: _RemoteObjectInvocationHandler$MethodToHash_Maps$$static;
        interface _RemoteObjectInvocationHandler$MethodToHash_Maps {
          _computeValue(remoteClass: java.lang.Class<any>): java.util.Map<java.lang.reflect.Method,long>;
          _computeValue(a0: java.lang.Class): any;
        }
        interface RemoteObjectInvocationHandler$MethodToHash_Maps extends CombineTypes<[_RemoteObjectInvocationHandler$MethodToHash_Maps, sun.rmi.server.WeakClassHashMap<java.util.Map<java.lang.reflect.Method,long>>]> {}
        interface _RemoteRef$$static extends ClassLike {
          readonly packagePrefix: string;
          readonly serialVersionUID: long;
        }
        let RemoteRef: _RemoteRef$$static;
        interface _RemoteRef {
          done(a0: RemoteCall): void;
          getRefClass(a0: java.io.ObjectOutput): string;
          invoke(a0: Remote, a1: java.lang.reflect.Method, a2: any[], a3: long): any;
          invoke(a0: RemoteCall): void;
          newCall(a0: RemoteObject, a1: Operation[], a2: int, a3: long): RemoteCall;
          remoteEquals(a0: RemoteRef): boolean;
          remoteHashCode(): int;
          remoteToString(): string;
        }
        interface RemoteRef extends CombineTypes<[_RemoteRef, java.io.Externalizable, java.lang.Object]> {}
        interface _RemoteServer$$static extends ClassLike {
          getClientHost(): string;
          getLog(): java.io.PrintStream;
          setLog(out: java.io.OutputStream): void;
          _logNull: boolean;
          _serialVersionUID: long;
          _new(): RemoteServer;
          _new(ref: RemoteRef): RemoteServer;
        }
        let RemoteServer: _RemoteServer$$static;
        interface _RemoteServer {
        }
        interface RemoteServer extends CombineTypes<[_RemoteServer, java.rmi.server.RemoteObject]> {}
        interface _RemoteStub$$static extends ClassLike {
          _setRef(stub: RemoteStub, ref: RemoteRef): void;
          _serialVersionUID: long;
          _new(): RemoteStub;
          _new(ref: RemoteRef): RemoteStub;
        }
        let RemoteStub: _RemoteStub$$static;
        interface _RemoteStub {
        }
        interface RemoteStub extends CombineTypes<[_RemoteStub, java.rmi.server.RemoteObject]> {}
        interface _ServerCloneException$$static extends ClassLike {
          _serialVersionUID: long;
          new(s: string): ServerCloneException;
          new(s: string, cause: java.lang.Exception): ServerCloneException;
        }
        let ServerCloneException: _ServerCloneException$$static;
        interface _ServerCloneException {
          getCause(): java.lang.Throwable;
          getMessage(): string;
          detail: java.lang.Exception;
        }
        interface ServerCloneException extends CombineTypes<[_ServerCloneException, java.lang.CloneNotSupportedException]> {}
        interface _ServerNotActiveException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): ServerNotActiveException;
          new(s: string): ServerNotActiveException;
        }
        let ServerNotActiveException: _ServerNotActiveException$$static;
        interface _ServerNotActiveException {
        }
        interface ServerNotActiveException extends CombineTypes<[_ServerNotActiveException, java.lang.Exception]> {}
        interface _ServerRef$$static extends ClassLike {
          readonly serialVersionUID: long;
        }
        let ServerRef: _ServerRef$$static;
        interface _ServerRef {
          exportObject(a0: Remote, a1: any): RemoteStub;
          getClientHost(): string;
        }
        interface ServerRef extends CombineTypes<[_ServerRef, java.rmi.server.RemoteRef, java.lang.Object]> {}
        interface _Skeleton$$static extends ClassLike {
        }
        let Skeleton: _Skeleton$$static;
        interface _Skeleton {
          dispatch(a0: Remote, a1: RemoteCall, a2: int, a3: long): void;
          getOperations(): Operation[];
        }
        interface Skeleton extends CombineTypes<[_Skeleton, java.lang.Object]> {}
        interface _SkeletonMismatchException$$static extends ClassLike {
          _serialVersionUID: long;
          new(s: string): SkeletonMismatchException;
        }
        let SkeletonMismatchException: _SkeletonMismatchException$$static;
        interface _SkeletonMismatchException {
        }
        interface SkeletonMismatchException extends CombineTypes<[_SkeletonMismatchException, java.rmi.RemoteException]> {}
        interface _SkeletonNotFoundException$$static extends ClassLike {
          _serialVersionUID: long;
          new(s: string): SkeletonNotFoundException;
          new(s: string, ex: java.lang.Exception): SkeletonNotFoundException;
        }
        let SkeletonNotFoundException: _SkeletonNotFoundException$$static;
        interface _SkeletonNotFoundException {
        }
        interface SkeletonNotFoundException extends CombineTypes<[_SkeletonNotFoundException, java.rmi.RemoteException]> {}
        interface _SocketSecurityException$$static extends ClassLike {
          _serialVersionUID: long;
          new(s: string): SocketSecurityException;
          new(s: string, ex: java.lang.Exception): SocketSecurityException;
        }
        let SocketSecurityException: _SocketSecurityException$$static;
        interface _SocketSecurityException {
        }
        interface SocketSecurityException extends CombineTypes<[_SocketSecurityException, java.rmi.server.ExportException]> {}
        interface _UID$$static extends ClassLike {
          read(_in: java.io.DataInput): UID;
          _hostUnique: int;
          _hostUniqueSet: boolean;
          _lastCount: short;
          _lastTime: long;
          _lock: any;
          _serialVersionUID: long;
          new(): UID;
          new(num: short): UID;
        }
        let UID: _UID$$static;
        interface _UID {
          equals(obj: any): boolean;
          hashCode(): int;
          toString(): string;
          write(out: java.io.DataOutput): void;
          _count: short;
          _time: long;
          _unique: int;
        }
        interface UID extends CombineTypes<[_UID, java.lang.Object, java.io.Serializable]> {}
        interface _UnicastRemoteObject$$static extends ClassLike {
          exportObject(obj: Remote): RemoteStub;
          exportObject(obj: Remote, port: int): Remote;
          exportObject(obj: Remote, port: int, csf: RMIClientSocketFactory, ssf: RMIServerSocketFactory): Remote;
          exportObject(obj: Remote, port: int, filter: java.io.ObjectInputFilter): Remote;
          exportObject(obj: Remote, port: int, csf: RMIClientSocketFactory, ssf: RMIServerSocketFactory, filter: java.io.ObjectInputFilter): Remote;
          _exportObject(obj: Remote, sref: sun.rmi.server.UnicastServerRef): Remote;
          unexportObject(obj: Remote, force: boolean): boolean;
          _serialVersionUID: long;
          _new(): UnicastRemoteObject;
          _new(port: int): UnicastRemoteObject;
          _new(port: int, csf: RMIClientSocketFactory, ssf: RMIServerSocketFactory): UnicastRemoteObject;
        }
        let UnicastRemoteObject: _UnicastRemoteObject$$static;
        interface _UnicastRemoteObject {
          clone(): any;
          _readObject(_in: java.io.ObjectInputStream): void;
          _reexport(): void;
          _csf: RMIClientSocketFactory;
          _port: int;
          _ssf: RMIServerSocketFactory;
        }
        interface UnicastRemoteObject extends CombineTypes<[_UnicastRemoteObject, java.rmi.server.RemoteServer]> {}
        interface _Unreferenced$$static extends ClassLike {
        }
        let Unreferenced: _Unreferenced$$static;
        interface _Unreferenced {
          unreferenced(): void;
(): void;
        }
        interface Unreferenced extends CombineTypes<[_Unreferenced, java.lang.Object]> {}
      }
      interface _AccessException$$static extends ClassLike {
        _serialVersionUID: long;
        new(s: string): AccessException;
        new(s: string, ex: java.lang.Exception): AccessException;
      }
      let AccessException: _AccessException$$static;
      interface _AccessException {
      }
      interface AccessException extends CombineTypes<[_AccessException, java.rmi.RemoteException]> {}
      interface _AlreadyBoundException$$static extends ClassLike {
        _serialVersionUID: long;
        new(): AlreadyBoundException;
        new(s: string): AlreadyBoundException;
      }
      let AlreadyBoundException: _AlreadyBoundException$$static;
      interface _AlreadyBoundException {
      }
      interface AlreadyBoundException extends CombineTypes<[_AlreadyBoundException, java.lang.Exception]> {}
      interface _ConnectException$$static extends ClassLike {
        _serialVersionUID: long;
        new(s: string): ConnectException;
        new(s: string, ex: java.lang.Exception): ConnectException;
      }
      let ConnectException: _ConnectException$$static;
      interface _ConnectException {
      }
      interface ConnectException extends CombineTypes<[_ConnectException, java.rmi.RemoteException]> {}
      interface _ConnectIOException$$static extends ClassLike {
        _serialVersionUID: long;
        new(s: string): ConnectIOException;
        new(s: string, ex: java.lang.Exception): ConnectIOException;
      }
      let ConnectIOException: _ConnectIOException$$static;
      interface _ConnectIOException {
      }
      interface ConnectIOException extends CombineTypes<[_ConnectIOException, java.rmi.RemoteException]> {}
      interface _MarshalException$$static extends ClassLike {
        _serialVersionUID: long;
        new(s: string): MarshalException;
        new(s: string, ex: java.lang.Exception): MarshalException;
      }
      let MarshalException: _MarshalException$$static;
      interface _MarshalException {
      }
      interface MarshalException extends CombineTypes<[_MarshalException, java.rmi.RemoteException]> {}
      interface _MarshalledObject$$static<T> extends ClassLike {
        _serialVersionUID: long;
        new(obj: T): MarshalledObject<T>;
      }
      let MarshalledObject: _MarshalledObject$$static<T>;
      interface _MarshalledObject<T> {
        equals(obj: any): boolean;
        get(): T;
        hashCode(): int;
        _readObject(stream: java.io.ObjectInputStream): void;
        _hash: int;
        _locBytes: byte[];
        _objBytes: byte[];
        _objectInputFilter: java.io.ObjectInputFilter;
      }
      interface MarshalledObject<T> extends CombineTypes<[_MarshalledObject<T>, java.lang.Object, java.io.Serializable]> {}
      interface _MarshalledObject$MarshalledObjectInputStream$$static extends ClassLike {
        _new(objIn: java.io.InputStream, locIn: java.io.InputStream, filter: java.io.ObjectInputFilter): MarshalledObject$MarshalledObjectInputStream;
      }
      let MarshalledObject$MarshalledObjectInputStream: _MarshalledObject$MarshalledObjectInputStream$$static;
      interface _MarshalledObject$MarshalledObjectInputStream {
        _readLocation(): any;
        _locIn: java.io.ObjectInputStream;
      }
      interface MarshalledObject$MarshalledObjectInputStream extends CombineTypes<[_MarshalledObject$MarshalledObjectInputStream, sun.rmi.server.MarshalInputStream]> {}
      interface _MarshalledObject$MarshalledObjectOutputStream$$static extends ClassLike {
        _new(objOut: java.io.OutputStream, locOut: java.io.OutputStream): MarshalledObject$MarshalledObjectOutputStream;
      }
      let MarshalledObject$MarshalledObjectOutputStream: _MarshalledObject$MarshalledObjectOutputStream$$static;
      interface _MarshalledObject$MarshalledObjectOutputStream {
        flush(): void;
        _hadAnnotations(): boolean;
        _writeLocation(loc: string): void;
        _hadAnnotations: boolean;
        _locOut: java.io.ObjectOutputStream;
      }
      interface MarshalledObject$MarshalledObjectOutputStream extends CombineTypes<[_MarshalledObject$MarshalledObjectOutputStream, sun.rmi.server.MarshalOutputStream]> {}
      interface _Naming$$static extends ClassLike {
        bind(name: string, obj: Remote): void;
        _getRegistry(parsed: Naming$ParsedNamingURL): rmi.registry.Registry;
        _intParseURL(str: string): Naming$ParsedNamingURL;
        list(name: string): string[];
        lookup(name: string): Remote;
        _parseURL(str: string): Naming$ParsedNamingURL;
        rebind(name: string, obj: Remote): void;
        unbind(name: string): void;
      }
      let Naming: _Naming$$static;
      interface _Naming {
      }
      interface Naming extends CombineTypes<[_Naming, java.lang.Object]> {}
      interface _Naming$ParsedNamingURL$$static extends ClassLike {
        _new(host: string, port: int, name: string): Naming$ParsedNamingURL;
      }
      let Naming$ParsedNamingURL: _Naming$ParsedNamingURL$$static;
      interface _Naming$ParsedNamingURL {
        _host: string;
        _name: string;
        _port: int;
      }
      interface Naming$ParsedNamingURL extends CombineTypes<[_Naming$ParsedNamingURL, java.lang.Object]> {}
      interface _NoSuchObjectException$$static extends ClassLike {
        _serialVersionUID: long;
        new(s: string): NoSuchObjectException;
      }
      let NoSuchObjectException: _NoSuchObjectException$$static;
      interface _NoSuchObjectException {
      }
      interface NoSuchObjectException extends CombineTypes<[_NoSuchObjectException, java.rmi.RemoteException]> {}
      interface _NotBoundException$$static extends ClassLike {
        _serialVersionUID: long;
        new(): NotBoundException;
        new(s: string): NotBoundException;
      }
      let NotBoundException: _NotBoundException$$static;
      interface _NotBoundException {
      }
      interface NotBoundException extends CombineTypes<[_NotBoundException, java.lang.Exception]> {}
      interface _RMISecurityException$$static extends ClassLike {
        _serialVersionUID: long;
        new(name: string): RMISecurityException;
        new(name: string, arg: string): RMISecurityException;
      }
      let RMISecurityException: _RMISecurityException$$static;
      interface _RMISecurityException {
      }
      interface RMISecurityException extends CombineTypes<[_RMISecurityException, java.lang.SecurityException]> {}
      interface _RMISecurityManager$$static extends ClassLike {
        new(): RMISecurityManager;
      }
      let RMISecurityManager: _RMISecurityManager$$static;
      interface _RMISecurityManager {
      }
      interface RMISecurityManager extends CombineTypes<[_RMISecurityManager, java.lang.SecurityManager]> {}
      interface _Remote$$static extends ClassLike {
      }
      let Remote: _Remote$$static;
      interface _Remote {
      }
      interface Remote extends CombineTypes<[_Remote, java.lang.Object]> {}
      interface _RemoteException$$static extends ClassLike {
        _serialVersionUID: long;
        new(): RemoteException;
        new(s: string): RemoteException;
        new(s: string, cause: java.lang.Throwable): RemoteException;
      }
      let RemoteException: _RemoteException$$static;
      interface _RemoteException {
        getCause(): java.lang.Throwable;
        getMessage(): string;
        detail: java.lang.Throwable;
      }
      interface RemoteException extends CombineTypes<[_RemoteException, java.io.IOException]> {}
      interface _ServerError$$static extends ClassLike {
        _serialVersionUID: long;
        new(s: string, err: java.lang.Error): ServerError;
      }
      let ServerError: _ServerError$$static;
      interface _ServerError {
      }
      interface ServerError extends CombineTypes<[_ServerError, java.rmi.RemoteException]> {}
      interface _ServerException$$static extends ClassLike {
        _serialVersionUID: long;
        new(s: string): ServerException;
        new(s: string, ex: java.lang.Exception): ServerException;
      }
      let ServerException: _ServerException$$static;
      interface _ServerException {
      }
      interface ServerException extends CombineTypes<[_ServerException, java.rmi.RemoteException]> {}
      interface _ServerRuntimeException$$static extends ClassLike {
        _serialVersionUID: long;
        new(s: string, ex: java.lang.Exception): ServerRuntimeException;
      }
      let ServerRuntimeException: _ServerRuntimeException$$static;
      interface _ServerRuntimeException {
      }
      interface ServerRuntimeException extends CombineTypes<[_ServerRuntimeException, java.rmi.RemoteException]> {}
      interface _StubNotFoundException$$static extends ClassLike {
        _serialVersionUID: long;
        new(s: string): StubNotFoundException;
        new(s: string, ex: java.lang.Exception): StubNotFoundException;
      }
      let StubNotFoundException: _StubNotFoundException$$static;
      interface _StubNotFoundException {
      }
      interface StubNotFoundException extends CombineTypes<[_StubNotFoundException, java.rmi.RemoteException]> {}
      interface _UnexpectedException$$static extends ClassLike {
        _serialVersionUID: long;
        new(s: string): UnexpectedException;
        new(s: string, ex: java.lang.Exception): UnexpectedException;
      }
      let UnexpectedException: _UnexpectedException$$static;
      interface _UnexpectedException {
      }
      interface UnexpectedException extends CombineTypes<[_UnexpectedException, java.rmi.RemoteException]> {}
      interface _UnknownHostException$$static extends ClassLike {
        _serialVersionUID: long;
        new(s: string): UnknownHostException;
        new(s: string, ex: java.lang.Exception): UnknownHostException;
      }
      let UnknownHostException: _UnknownHostException$$static;
      interface _UnknownHostException {
      }
      interface UnknownHostException extends CombineTypes<[_UnknownHostException, java.rmi.RemoteException]> {}
      interface _UnmarshalException$$static extends ClassLike {
        _serialVersionUID: long;
        new(s: string): UnmarshalException;
        new(s: string, ex: java.lang.Exception): UnmarshalException;
      }
      let UnmarshalException: _UnmarshalException$$static;
      interface _UnmarshalException {
      }
      interface UnmarshalException extends CombineTypes<[_UnmarshalException, java.rmi.RemoteException]> {}
    }
  }
  module javax {
    module rmi {
      module ssl {
        interface _SslRMIClientSocketFactory$$static extends ClassLike {
          _getDefaultClientSocketFactory(): javax.net.SocketFactory;
          _defaultSocketFactory: javax.net.SocketFactory;
          _serialVersionUID: long;
          new(): SslRMIClientSocketFactory;
        }
        let SslRMIClientSocketFactory: _SslRMIClientSocketFactory$$static;
        interface _SslRMIClientSocketFactory {
          createSocket(host: string, port: int): java.net.Socket;
          equals(obj: any): boolean;
          hashCode(): int;
        }
        interface SslRMIClientSocketFactory extends CombineTypes<[_SslRMIClientSocketFactory, java.lang.Object, java.rmi.server.RMIClientSocketFactory, java.io.Serializable]> {}
        interface _SslRMIServerSocketFactory$$static extends ClassLike {
          _getDefaultSSLSocketFactory(): javax.net.ssl.SSLSocketFactory;
          _defaultSSLSocketFactory: javax.net.ssl.SSLSocketFactory;
          new(): SslRMIServerSocketFactory;
          new(enabledCipherSuites: string[], enabledProtocols: string[], needClientAuth: boolean): SslRMIServerSocketFactory;
          new(context: javax.net.ssl.SSLContext, enabledCipherSuites: string[], enabledProtocols: string[], needClientAuth: boolean): SslRMIServerSocketFactory;
        }
        let SslRMIServerSocketFactory: _SslRMIServerSocketFactory$$static;
        interface _SslRMIServerSocketFactory {
          _checkParameters(that: SslRMIServerSocketFactory): boolean;
          createServerSocket(port: int): java.net.ServerSocket;
          equals(obj: any): boolean;
          getEnabledCipherSuites(): string[];
          getEnabledProtocols(): string[];
          getNeedClientAuth(): boolean;
          hashCode(): int;
          _context: javax.net.ssl.SSLContext;
          _enabledCipherSuites: string[];
          _enabledCipherSuitesList: java.util.List<string>;
          _enabledProtocols: string[];
          _enabledProtocolsList: java.util.List<string>;
          _needClientAuth: boolean;
        }
        interface SslRMIServerSocketFactory extends CombineTypes<[_SslRMIServerSocketFactory, java.lang.Object, java.rmi.server.RMIServerSocketFactory]> {}
      }
    }
  }
  module sun {
    module rmi {
      module log {
        interface _LogHandler$$static extends ClassLike {
          new(): LogHandler;
        }
        let LogHandler: _LogHandler$$static;
        interface _LogHandler {
          applyUpdate(a0: any, a1: any): any;
          initialSnapshot(): any;
          readUpdate(_in: LogInputStream, state: any): any;
          recover(_in: java.io.InputStream): any;
          snapshot(out: java.io.OutputStream, value: any): void;
          writeUpdate(out: LogOutputStream, value: any): void;
        }
        interface LogHandler extends CombineTypes<[_LogHandler, java.lang.Object]> {}
        interface _LogInputStream$$static extends ClassLike {
          new(_in: java.io.InputStream, length: int): LogInputStream;
        }
        let LogInputStream: _LogInputStream$$static;
        interface _LogInputStream {
          available(): int;
          close(): void;
          _finalize(): void;
          read(): int;
          read(b: byte[]): int;
          read(b: byte[], off: int, len: int): int;
          skip(n: long): long;
          _in: java.io.InputStream;
          _length: int;
        }
        interface LogInputStream extends CombineTypes<[_LogInputStream, java.io.InputStream]> {}
        interface _LogOutputStream$$static extends ClassLike {
          new(raf: java.io.RandomAccessFile): LogOutputStream;
        }
        let LogOutputStream: _LogOutputStream$$static;
        interface _LogOutputStream {
          close(): void;
          write(b: int): void;
          write(b: byte[]): void;
          write(b: byte[], off: int, len: int): void;
          _raf: java.io.RandomAccessFile;
        }
        interface LogOutputStream extends CombineTypes<[_LogOutputStream, java.io.OutputStream]> {}
        interface _ReliableLog$$static extends ClassLike {
          _getLogClassConstructor(): java.lang.reflect.Constructor<ReliableLog$LogFile>;
          readonly PreferredMajorVersion: int;
          readonly PreferredMinorVersion: int;
          _diskPageSize: long;
          _intBytes: int;
          _logClassConstructor: java.lang.reflect.Constructor<ReliableLog$LogFile>;
          _logfilePrefix: string;
          _newVersionFile: string;
          _snapshotPrefix: string;
          _versionFile: string;
          new(dirPath: string, handler: LogHandler, pad: boolean): ReliableLog;
          new(dirPath: string, handler: LogHandler): ReliableLog;
        }
        let ReliableLog: _ReliableLog$$static;
        interface _ReliableLog {
          close(): void;
          _commitToNewVersion(): void;
          _createFirstVersion(): void;
          _deleteFile(name: string): void;
          _deleteLogFile(ver: int): void;
          _deleteNewVersionFile(): void;
          _deleteSnapshot(ver: int): void;
          _fName(name: string): string;
          _getVersion(): void;
          _incrVersion(): void;
          _initializeLogFile(): void;
          logSize(): long;
          _openLogFile(truncate: boolean): void;
          _readVersion(name: string): int;
          recover(): any;
          _recoverUpdates(state: any): any;
          snapshot(value: any): void;
          snapshotSize(): long;
          update(value: any): void;
          update(value: any, forceToDisk: boolean): void;
          _versionName(name: string): string;
          _versionName(prefix: string, ver: int): string;
          _writeInt(out: java.io.DataOutput, val: int): void;
          _writeVersionFile(newVersion: boolean): void;
          _Debug: boolean;
          _dir: java.io.File;
          _handler: LogHandler;
          _intBuf: byte[];
          _lastLog: long;
          _lastSnapshot: long;
          _log: ReliableLog$LogFile;
          _logBytes: long;
          _logEntries: int;
          _logName: string;
          _majorFormatVersion: int;
          _minorFormatVersion: int;
          _snapshotBytes: long;
          _version: int;
        }
        interface ReliableLog extends CombineTypes<[_ReliableLog, java.lang.Object]> {}
        interface _ReliableLog$LogFile$$static extends ClassLike {
          new(name: string, mode: string): ReliableLog$LogFile;
        }
        let ReliableLog$LogFile: _ReliableLog$LogFile$$static;
        interface _ReliableLog$LogFile {
          _checkSpansBoundary(fp: long): boolean;
          _sync(): void;
          _fd: java.io.FileDescriptor;
        }
        interface ReliableLog$LogFile extends CombineTypes<[_ReliableLog$LogFile, java.io.RandomAccessFile]> {}
      }
      module registry {
        interface _RegistryImpl$$static extends ClassLike {
          checkAccess(op: string): void;
          createRegistry(regPort: int): RegistryImpl;
          _getAccessControlContext(port: int): java.security.AccessControlContext;
          getID(): java.rmi.server.ObjID;
          _getTextResource(key: string): string;
          _initRegistryFilter(): java.io.ObjectInputFilter;
          main(args: string[]): void;
          _pathToURLs(path: string): java.net.URL[];
          _registryFilter(filterInfo: java.io.ObjectInputFilter$FilterInfo): java.io.ObjectInputFilter$Status;
          _REGISTRY_FILTER_PROPNAME: string;
          _REGISTRY_MAX_ARRAY_SIZE: int;
          _REGISTRY_MAX_DEPTH: int;
          _allowedAccessCache: java.util.Hashtable<java.net.InetAddress,java.net.InetAddress>;
          _id: java.rmi.server.ObjID;
          _registry: RegistryImpl;
          _registryFilter: java.io.ObjectInputFilter;
          _resources: java.util.ResourceBundle;
          _serialVersionUID: long;
          new(port: int, csf: java.rmi.server.RMIClientSocketFactory, ssf: java.rmi.server.RMIServerSocketFactory): RegistryImpl;
          new(port: int, csf: java.rmi.server.RMIClientSocketFactory, ssf: java.rmi.server.RMIServerSocketFactory, serialFilter: java.io.ObjectInputFilter): RegistryImpl;
          new(port: int): RegistryImpl;
        }
        let RegistryImpl: _RegistryImpl$$static;
        interface _RegistryImpl {
          bind(name: string, obj: java.rmi.Remote): void;
          list(): string[];
          lookup(name: string): java.rmi.Remote;
          rebind(name: string, obj: java.rmi.Remote): void;
          _setup(uref: rmi.server.UnicastServerRef): void;
          unbind(name: string): void;
          _bindings: java.util.Hashtable<string,java.rmi.Remote>;
        }
        interface RegistryImpl extends CombineTypes<[_RegistryImpl, java.rmi.server.RemoteServer, java.rmi.registry.Registry]> {}
        interface _RegistryImpl_Skel$$static extends ClassLike {
          _interfaceHash: long;
          _operations: java.rmi.server.Operation[];
          new(): RegistryImpl_Skel;
        }
        let RegistryImpl_Skel: _RegistryImpl_Skel$$static;
        interface _RegistryImpl_Skel {
          dispatch(obj: java.rmi.Remote, remoteCall: java.rmi.server.RemoteCall, opnum: int, hash: long): void;
          getOperations(): java.rmi.server.Operation[];
        }
        interface RegistryImpl_Skel extends CombineTypes<[_RegistryImpl_Skel, java.rmi.server.Skeleton, java.lang.Object]> {}
        interface _RegistryImpl_Stub$$static extends ClassLike {
          _interfaceHash: long;
          _operations: java.rmi.server.Operation[];
          new(): RegistryImpl_Stub;
          new(ref: java.rmi.server.RemoteRef): RegistryImpl_Stub;
        }
        let RegistryImpl_Stub: _RegistryImpl_Stub$$static;
        interface _RegistryImpl_Stub {
          bind($param_String_1: string, $param_Remote_2: java.rmi.Remote): void;
          list(): string[];
          lookup($param_String_1: string): java.rmi.Remote;
          rebind($param_String_1: string, $param_Remote_2: java.rmi.Remote): void;
          unbind($param_String_1: string): void;
        }
        interface RegistryImpl_Stub extends CombineTypes<[_RegistryImpl_Stub, java.rmi.Remote, java.rmi.server.RemoteStub, java.rmi.registry.Registry]> {}
      }
      module runtime {
        interface _Log$$static extends ClassLike {
          getLog(loggerName: string, oldLogName: string, override: int): Log;
          getLog(loggerName: string, oldLogName: string, override: boolean): Log;
          _getSource(): java.lang.StackWalker$StackFrame;
          readonly BRIEF: java.util.logging.Level;
          readonly VERBOSE: java.util.logging.Level;
          _WALKER: java.lang.StackWalker;
          _logFactory: Log$LogFactory;
          new(): Log;
        }
        let Log: _Log$$static;
        interface _Log {
          getPrintStream(): java.io.PrintStream;
          isLoggable(a0: java.util.logging.Level): boolean;
          log(a0: java.util.logging.Level, a1: string): void;
          log(a0: java.util.logging.Level, a1: string, a2: java.lang.Throwable): void;
          setOutputStream(a0: java.io.OutputStream): void;
        }
        interface Log extends CombineTypes<[_Log, java.lang.Object]> {}
        interface _Log$InternalStreamHandler$$static extends ClassLike {
          _new(out: java.io.OutputStream): Log$InternalStreamHandler;
        }
        let Log$InternalStreamHandler: _Log$InternalStreamHandler$$static;
        interface _Log$InternalStreamHandler {
          close(): void;
          publish(record: java.util.logging.LogRecord): void;
        }
        interface Log$InternalStreamHandler extends CombineTypes<[_Log$InternalStreamHandler, java.util.logging.StreamHandler]> {}
        interface _Log$LogFactory$$static extends ClassLike {
        }
        let Log$LogFactory: _Log$LogFactory$$static;
        interface _Log$LogFactory {
          createLog(a0: string, a1: string, a2: java.util.logging.Level): Log;
(a0: string, a1: string, a2: java.util.logging.Level): Log;
        }
        interface Log$LogFactory extends CombineTypes<[_Log$LogFactory, java.lang.Object]> {}
        interface _Log$LogStreamLog$$static extends ClassLike {
          _unqualifiedName(name: string): string;
        }
        let Log$LogStreamLog: _Log$LogStreamLog$$static;
        interface _Log$LogStreamLog {
          getPrintStream(): java.io.PrintStream;
          isLoggable(level: java.util.logging.Level): boolean;
          log(messageLevel: java.util.logging.Level, message: string): void;
          log(level: java.util.logging.Level, message: string, thrown: java.lang.Throwable): void;
          setOutputStream(out: java.io.OutputStream): void;
          _levelValue: int;
          _stream: java.rmi.server.LogStream;
        }
        interface Log$LogStreamLog extends CombineTypes<[_Log$LogStreamLog, sun.rmi.runtime.Log]> {}
        interface _Log$LogStreamLogFactory$$static extends ClassLike {
          _new(): Log$LogStreamLogFactory;
        }
        let Log$LogStreamLogFactory: _Log$LogStreamLogFactory$$static;
        interface _Log$LogStreamLogFactory {
          createLog(loggerName: string, oldLogName: string, level: java.util.logging.Level): Log;
        }
        interface Log$LogStreamLogFactory extends CombineTypes<[_Log$LogStreamLogFactory, java.lang.Object, sun.rmi.runtime.Log$LogFactory]> {}
        interface _Log$LoggerLog$$static extends ClassLike {
          _alternateConsole: java.util.logging.Handler;
        }
        let Log$LoggerLog: _Log$LoggerLog$$static;
        interface _Log$LoggerLog {
          getPrintStream(): java.io.PrintStream;
          isLoggable(level: java.util.logging.Level): boolean;
          log(level: java.util.logging.Level, message: string): void;
          log(level: java.util.logging.Level, message: string, thrown: java.lang.Throwable): void;
          setOutputStream(out: java.io.OutputStream): void;
          toString(): string;
          _copyHandler: Log$InternalStreamHandler;
          _logger: java.util.logging.Logger;
          _loggerSandwich: Log$LoggerPrintStream;
        }
        interface Log$LoggerLog extends CombineTypes<[_Log$LoggerLog, sun.rmi.runtime.Log]> {}
        interface _Log$LoggerLogFactory$$static extends ClassLike {
          _new(): Log$LoggerLogFactory;
        }
        let Log$LoggerLogFactory: _Log$LoggerLogFactory$$static;
        interface _Log$LoggerLogFactory {
          createLog(loggerName: string, oldLogName: string, level: java.util.logging.Level): Log;
        }
        interface Log$LoggerLogFactory extends CombineTypes<[_Log$LoggerLogFactory, java.lang.Object, sun.rmi.runtime.Log$LogFactory]> {}
        interface _Log$LoggerPrintStream$$static extends ClassLike {
        }
        let Log$LoggerPrintStream: _Log$LoggerPrintStream$$static;
        interface _Log$LoggerPrintStream {
          toString(): string;
          write(b: int): void;
          write(b: byte[], off: int, len: int): void;
          _bufOut: java.io.ByteArrayOutputStream;
          _last: int;
          _logger: java.util.logging.Logger;
        }
        interface Log$LoggerPrintStream extends CombineTypes<[_Log$LoggerPrintStream, java.io.PrintStream]> {}
        interface _NewThreadAction$$static extends ClassLike {
          _systemThreadGroup: java.lang.ThreadGroup;
          _userThreadGroup: java.lang.ThreadGroup;
          _new(group: java.lang.ThreadGroup, runnable: java.lang.Runnable, name: string, daemon: boolean): NewThreadAction;
          new(runnable: java.lang.Runnable, name: string, daemon: boolean): NewThreadAction;
          new(runnable: java.lang.Runnable, name: string, daemon: boolean, user: boolean): NewThreadAction;
        }
        let NewThreadAction: _NewThreadAction$$static;
        interface _NewThreadAction {
          run(): java.lang.Thread;
          run(): any;
          _daemon: boolean;
          _group: java.lang.ThreadGroup;
          _name: string;
          _runnable: java.lang.Runnable;
        }
        interface NewThreadAction extends CombineTypes<[_NewThreadAction, java.security.PrivilegedAction<java.lang.Thread>, java.lang.Object]> {}
        interface _RuntimeUtil$$static extends ClassLike {
          _getInstance(): RuntimeUtil;
          _GET_INSTANCE_PERMISSION: java.security.Permission;
          _instance: RuntimeUtil;
          _runtimeLog: Log;
          _schedulerThreads: int;
        }
        let RuntimeUtil: _RuntimeUtil$$static;
        interface _RuntimeUtil {
          getScheduler(): java.util.concurrent.ScheduledThreadPoolExecutor;
          _scheduler: java.util.concurrent.ScheduledThreadPoolExecutor;
        }
        interface RuntimeUtil extends CombineTypes<[_RuntimeUtil, java.lang.Object]> {}
        interface _RuntimeUtil$GetInstanceAction$$static extends ClassLike {
          new(): RuntimeUtil$GetInstanceAction;
        }
        let RuntimeUtil$GetInstanceAction: _RuntimeUtil$GetInstanceAction$$static;
        interface _RuntimeUtil$GetInstanceAction {
          run(): RuntimeUtil;
          run(): any;
        }
        interface RuntimeUtil$GetInstanceAction extends CombineTypes<[_RuntimeUtil$GetInstanceAction, java.lang.Object, java.security.PrivilegedAction<RuntimeUtil>]> {}
      }
      module server {
        interface _DeserializationChecker$$static extends ClassLike {
        }
        let DeserializationChecker: _DeserializationChecker$$static;
        interface _DeserializationChecker {
          check(a0: java.lang.reflect.Method, a1: java.io.ObjectStreamClass, a2: int, a3: int): void;
          checkProxyClass(a0: java.lang.reflect.Method, a1: string[], a2: int, a3: int): void;
          end(callID: int): void;
        }
        interface DeserializationChecker extends CombineTypes<[_DeserializationChecker, java.lang.Object]> {}
        interface _Dispatcher$$static extends ClassLike {
        }
        let Dispatcher: _Dispatcher$$static;
        interface _Dispatcher {
          dispatch(a0: java.rmi.Remote, a1: java.rmi.server.RemoteCall): void;
(a0: java.rmi.Remote, a1: java.rmi.server.RemoteCall): void;
        }
        interface Dispatcher extends CombineTypes<[_Dispatcher, java.lang.Object]> {}
        interface _LoaderHandler$$static extends ClassLike {
          _addPermissionsForURLs(urls: java.net.URL[], perms: java.security.PermissionCollection, forLoader: boolean): void;
          getClassAnnotation(cl: java.lang.Class<any>): string;
          getClassLoader(codebase: string): java.lang.ClassLoader;
          _getDefaultCodebaseURLs(): java.net.URL[];
          _getLoaderAccessControlContext(urls: java.net.URL[]): java.security.AccessControlContext;
          _getRMIContextClassLoader(): java.lang.ClassLoader;
          getSecurityContext(loader: java.lang.ClassLoader): any;
          loadClass(codebase: string, name: string, defaultLoader: java.lang.ClassLoader): java.lang.Class<any>;
          _loadClass(urls: java.net.URL[], name: string): java.lang.Class<any>;
          _loadClassForName(name: string, initialize: boolean, loader: java.lang.ClassLoader): java.lang.Class<any>;
          loadProxyClass(codebase: string, interfaces: string[], defaultLoader: java.lang.ClassLoader): java.lang.Class<any>;
          _loadProxyClass(interfaceNames: string[], defaultLoader: java.lang.ClassLoader, codebaseLoader: java.lang.ClassLoader, preferCodebase: boolean): java.lang.Class<any>;
          _loadProxyClass(loader: java.lang.ClassLoader, interfaces: java.lang.Class<any>[]): java.lang.Class<any>;
          _loadProxyInterfaces(interfaces: string[], loader: java.lang.ClassLoader, classObjs: java.lang.Class<any>[], nonpublic: boolean[]): java.lang.ClassLoader;
          _lookupLoader(urls: java.net.URL[], parent: java.lang.ClassLoader): LoaderHandler$Loader;
          _pathToURLs(path: string): java.net.URL[];
          registerCodebaseLoader(loader: java.lang.ClassLoader): void;
          _urlsToPath(urls: java.net.URL[]): string;
          _codebaseLoaders: java.util.Map<java.lang.ClassLoader,java.lang.Void>;
          _codebaseProperty: string;
          _codebaseURLs: java.net.URL[];
          _loaderLog: rmi.runtime.Log;
          _loaderTable: java.util.HashMap<LoaderHandler$LoaderKey,LoaderHandler$LoaderEntry>;
          _logLevel: int;
          _pathToURLsCache: java.util.Map<string,any[]>;
          _refQueue: java.lang.ref.ReferenceQueue<LoaderHandler$Loader>;
        }
        let LoaderHandler: _LoaderHandler$$static;
        interface _LoaderHandler {
        }
        interface LoaderHandler extends CombineTypes<[_LoaderHandler, java.lang.Object]> {}
        interface _LoaderHandler$Loader$$static extends ClassLike {
        }
        let LoaderHandler$Loader: _LoaderHandler$Loader$$static;
        interface _LoaderHandler$Loader {
          _checkPermissions(): void;
          getClassAnnotation(): string;
          _getPermissions(codesource: java.security.CodeSource): java.security.PermissionCollection;
          _loadClass(name: string, resolve: boolean): java.lang.Class<any>;
          toString(): string;
          _annotation: string;
          _parent: java.lang.ClassLoader;
          _permissions: java.security.Permissions;
        }
        interface LoaderHandler$Loader extends CombineTypes<[_LoaderHandler$Loader, java.net.URLClassLoader]> {}
        interface _LoaderHandler$LoaderEntry$$static extends ClassLike {
          new(key: LoaderHandler$LoaderKey, loader: LoaderHandler$Loader): LoaderHandler$LoaderEntry;
        }
        let LoaderHandler$LoaderEntry: _LoaderHandler$LoaderEntry$$static;
        interface _LoaderHandler$LoaderEntry {
          key: LoaderHandler$LoaderKey;
          removed: boolean;
        }
        interface LoaderHandler$LoaderEntry extends CombineTypes<[_LoaderHandler$LoaderEntry, java.lang.ref.WeakReference<LoaderHandler$Loader>]> {}
        interface _LoaderHandler$LoaderKey$$static extends ClassLike {
          new(urls: java.net.URL[], parent: java.lang.ClassLoader): LoaderHandler$LoaderKey;
        }
        let LoaderHandler$LoaderKey: _LoaderHandler$LoaderKey$$static;
        interface _LoaderHandler$LoaderKey {
          equals(obj: any): boolean;
          hashCode(): int;
          _hashValue: int;
          _parent: java.lang.ClassLoader;
          _urls: java.net.URL[];
        }
        interface LoaderHandler$LoaderKey extends CombineTypes<[_LoaderHandler$LoaderKey, java.lang.Object]> {}
        interface _MarshalInputStream$$static extends ClassLike {
          _latestUserDefinedLoader(): java.lang.ClassLoader;
          _permittedSunClasses: java.util.Map<string,java.lang.Class<any>>;
          _useCodebaseOnlyProperty: boolean;
          new(_in: java.io.InputStream): MarshalInputStream;
        }
        let MarshalInputStream: _MarshalInputStream$$static;
        interface _MarshalInputStream {
          _checkSunClass(className: string, e: java.security.AccessControlException): java.lang.Class<any>;
          close(): void;
          done(): void;
          getDoneCallback(key: any): java.lang.Runnable;
          _readLocation(): any;
          _resolveClass(classDesc: java.io.ObjectStreamClass): java.lang.Class<any>;
          _resolveProxyClass(interfaces: string[]): java.lang.Class<any>;
          setDoneCallback(key: any, callback: java.lang.Runnable): void;
          _skipDefaultResolveClass(): void;
          _useCodebaseOnly(): void;
          _doneCallbacks: java.util.Map<any,java.lang.Runnable>;
          _skipDefaultResolveClass: boolean;
          _useCodebaseOnly: boolean;
        }
        interface MarshalInputStream extends CombineTypes<[_MarshalInputStream, java.io.ObjectInputStream]> {}
        interface _MarshalOutputStream$$static extends ClassLike {
          new(out: java.io.OutputStream): MarshalOutputStream;
          new(out: java.io.OutputStream, protocolVersion: int): MarshalOutputStream;
        }
        let MarshalOutputStream: _MarshalOutputStream$$static;
        interface _MarshalOutputStream {
          _annotateClass(cl: java.lang.Class<any>): void;
          _annotateProxyClass(cl: java.lang.Class<any>): void;
          _replaceObject(obj: any): any;
          _writeLocation(location: string): void;
        }
        interface MarshalOutputStream extends CombineTypes<[_MarshalOutputStream, java.io.ObjectOutputStream]> {}
        interface _UnicastRef$$static extends ClassLike {
          _marshalValue(type: java.lang.Class<any>, value: any, out: java.io.ObjectOutput): void;
          _unmarshalValue(type: java.lang.Class<any>, _in: java.io.ObjectInput): any;
          readonly clientCallLog: rmi.runtime.Log;
          readonly clientRefLog: rmi.runtime.Log;
          _serialVersionUID: long;
          new(): UnicastRef;
          new(liveRef: rmi.transport.LiveRef): UnicastRef;
        }
        let UnicastRef: _UnicastRef$$static;
        interface _UnicastRef {
          done(call: java.rmi.server.RemoteCall): void;
          _free(call: java.rmi.server.RemoteCall, reuse: boolean): void;
          getLiveRef(): rmi.transport.LiveRef;
          getRefClass(out: java.io.ObjectOutput): string;
          invoke(obj: java.rmi.Remote, method: java.lang.reflect.Method, params: any[], opnum: long): any;
          invoke(call: java.rmi.server.RemoteCall): void;
          _logClientCall(obj: any, method: any): void;
          _marshalCustomCallData(out: java.io.ObjectOutput): void;
          newCall(obj: java.rmi.server.RemoteObject, ops: java.rmi.server.Operation[], opnum: int, hash: long): java.rmi.server.RemoteCall;
          readExternal(_in: java.io.ObjectInput): void;
          remoteEquals(sub: java.rmi.server.RemoteRef): boolean;
          remoteHashCode(): int;
          remoteToString(): string;
          writeExternal(out: java.io.ObjectOutput): void;
          _ref: rmi.transport.LiveRef;
        }
        interface UnicastRef extends CombineTypes<[_UnicastRef, java.rmi.server.RemoteRef, java.lang.Object]> {}
        interface _UnicastRef2$$static extends ClassLike {
          _serialVersionUID: long;
          new(): UnicastRef2;
          new(liveRef: rmi.transport.LiveRef): UnicastRef2;
        }
        let UnicastRef2: _UnicastRef2$$static;
        interface _UnicastRef2 {
          getRefClass(out: java.io.ObjectOutput): string;
          readExternal(_in: java.io.ObjectInput): void;
          writeExternal(out: java.io.ObjectOutput): void;
        }
        interface UnicastRef2 extends CombineTypes<[_UnicastRef2, sun.rmi.server.UnicastRef]> {}
        interface _UnicastServerRef$$static extends ClassLike {
          clearStackTraces(t: java.lang.Throwable): void;
          readonly callLog: rmi.runtime.Log;
          _hashToMethod_Maps: WeakClassHashMap<java.util.Map<long,java.lang.reflect.Method>>;
          readonly logCalls: boolean;
          _serialVersionUID: long;
          _suppressStackTraces: boolean;
          _wantExceptionLog: boolean;
          _withoutSkeletons: java.util.Map<java.lang.Class<any>,any>;
          new(): UnicastServerRef;
          new(ref: rmi.transport.LiveRef): UnicastServerRef;
          new(ref: rmi.transport.LiveRef, filter: java.io.ObjectInputFilter): UnicastServerRef;
          new(port: int): UnicastServerRef;
          new(forceStubUse: boolean): UnicastServerRef;
        }
        let UnicastServerRef: _UnicastServerRef$$static;
        interface _UnicastServerRef {
          dispatch(obj: java.rmi.Remote, call: java.rmi.server.RemoteCall): void;
          exportObject(impl: java.rmi.Remote, data: any): java.rmi.server.RemoteStub;
          exportObject(impl: java.rmi.Remote, data: any, permanent: boolean): java.rmi.Remote;
          getClientHost(): string;
          _getClientRef(): java.rmi.server.RemoteRef;
          getRefClass(out: java.io.ObjectOutput): string;
          _logCall(obj: java.rmi.Remote, method: any): void;
          _logCallException(e: java.lang.Throwable): void;
          _oldDispatch(obj: java.rmi.Remote, call: java.rmi.server.RemoteCall, op: int): void;
          readExternal(_in: java.io.ObjectInput): void;
          setSkeleton(impl: java.rmi.Remote): void;
          _unmarshalCustomCallData(_in: java.io.ObjectInput): void;
          writeExternal(out: java.io.ObjectOutput): void;
          _filter: java.io.ObjectInputFilter;
          _forceStubUse: boolean;
          _hashToMethod_Map: java.util.Map<long,java.lang.reflect.Method>;
          _skel: java.rmi.server.Skeleton;
        }
        interface UnicastServerRef extends CombineTypes<[_UnicastServerRef, sun.rmi.server.UnicastRef, java.rmi.server.ServerRef, sun.rmi.server.Dispatcher]> {}
        interface _UnicastServerRef$HashToMethod_Maps$$static extends ClassLike {
          _new(): UnicastServerRef$HashToMethod_Maps;
        }
        let UnicastServerRef$HashToMethod_Maps: _UnicastServerRef$HashToMethod_Maps$$static;
        interface _UnicastServerRef$HashToMethod_Maps {
          _computeValue(remoteClass: java.lang.Class<any>): java.util.Map<long,java.lang.reflect.Method>;
          _computeValue(a0: java.lang.Class): any;
        }
        interface UnicastServerRef$HashToMethod_Maps extends CombineTypes<[_UnicastServerRef$HashToMethod_Maps, WeakClassHashMap<java.util.Map<long,java.lang.reflect.Method>>]> {}
        interface _UnicastServerRef2$$static extends ClassLike {
          _serialVersionUID: long;
          new(): UnicastServerRef2;
          new(ref: rmi.transport.LiveRef): UnicastServerRef2;
          new(ref: rmi.transport.LiveRef, filter: java.io.ObjectInputFilter): UnicastServerRef2;
          new(port: int, csf: java.rmi.server.RMIClientSocketFactory, ssf: java.rmi.server.RMIServerSocketFactory): UnicastServerRef2;
          new(port: int, csf: java.rmi.server.RMIClientSocketFactory, ssf: java.rmi.server.RMIServerSocketFactory, filter: java.io.ObjectInputFilter): UnicastServerRef2;
        }
        let UnicastServerRef2: _UnicastServerRef2$$static;
        interface _UnicastServerRef2 {
          _getClientRef(): java.rmi.server.RemoteRef;
          getRefClass(out: java.io.ObjectOutput): string;
        }
        interface UnicastServerRef2 extends CombineTypes<[_UnicastServerRef2, sun.rmi.server.UnicastServerRef]> {}
        interface _Util$$static extends ClassLike {
          _checkMethod(m: java.lang.reflect.Method): void;
          computeMethodHash(m: java.lang.reflect.Method): long;
          createProxy(implClass: java.lang.Class<any>, clientRef: java.rmi.server.RemoteRef, forceStubUse: boolean): java.rmi.Remote;
          _createSkeleton(object: java.rmi.Remote): java.rmi.server.Skeleton;
          _createStub(remoteClass: java.lang.Class<any>, ref: java.rmi.server.RemoteRef): java.rmi.server.RemoteStub;
          _getMethodNameAndDescriptor(m: java.lang.reflect.Method): string;
          _getRemoteClass(cl: java.lang.Class<any>): java.lang.Class<any>;
          _getRemoteInterfaces(remoteClass: java.lang.Class<any>): java.lang.Class<any>[];
          _getRemoteInterfaces(list: java.util.ArrayList<java.lang.Class<any>>, cl: java.lang.Class<any>): void;
          _getTypeDescriptor(type: java.lang.Class<any>): string;
          getUnqualifiedName(c: java.lang.Class<any>): string;
          _stubClassExists(remoteClass: java.lang.Class<any>): boolean;
          _ignoreStubClasses: boolean;
          _logLevel: int;
          readonly serverRefLog: rmi.runtime.Log;
          _stubConsParamTypes: java.lang.Class<any>[];
          _withoutStubs: java.util.Map<java.lang.Class<any>,java.lang.Void>;
        }
        let Util: _Util$$static;
        interface _Util {
        }
        interface Util extends CombineTypes<[_Util, java.lang.Object]> {}
        interface _WeakClassHashMap$$static<V> extends ClassLike {
          _new(): WeakClassHashMap<V>;
        }
        let WeakClassHashMap: _WeakClassHashMap$$static<V>;
        interface _WeakClassHashMap<V> {
          _computeValue(a0: java.lang.Class<any>): V;
(a0: java.lang.Class<any>): V;
          get(remoteClass: java.lang.Class<any>): V;
          _internalMap: java.util.Map<java.lang.Class<any>,WeakClassHashMap$ValueCell<V>>;
        }
        interface WeakClassHashMap<V> extends CombineTypes<[_WeakClassHashMap<V>, java.lang.Object]> {}
        interface _WeakClassHashMap$ValueCell$$static<T> extends ClassLike {
          _new(): WeakClassHashMap$ValueCell<T>;
        }
        let WeakClassHashMap$ValueCell: _WeakClassHashMap$ValueCell$$static<T>;
        interface _WeakClassHashMap$ValueCell<T> {
          _ref: java.lang.ref.Reference<T>;
        }
        interface WeakClassHashMap$ValueCell<T> extends CombineTypes<[_WeakClassHashMap$ValueCell<T>, java.lang.Object]> {}
      }
      module transport {
        module tcp {
          interface _ConnectionAcceptor$$static extends ClassLike {
            _threadNum: int;
            new(transport: TCPTransport): ConnectionAcceptor;
          }
          let ConnectionAcceptor: _ConnectionAcceptor$$static;
          interface _ConnectionAcceptor {
            accept(conn: Connection): void;
            run(): void;
            startNewAcceptor(): void;
            _queue: java.util.List<Connection>;
            _transport: TCPTransport;
          }
          interface ConnectionAcceptor extends CombineTypes<[_ConnectionAcceptor, java.lang.Object, java.lang.Runnable]> {}
          interface _TCPChannel$$static extends ClassLike {
            _handshakeTimeout: int;
            _idleTimeout: long;
            _responseTimeout: int;
            _scheduler: java.util.concurrent.ScheduledExecutorService;
            _new(tr: TCPTransport, ep: TCPEndpoint): TCPChannel;
          }
          let TCPChannel: _TCPChannel$$static;
          interface _TCPChannel {
            _checkConnectPermission(): void;
            _createConnection(): Connection;
            free(conn: Connection, reuse: boolean): void;
            _freeCachedConnections(): void;
            getEndpoint(): Endpoint;
            newConnection(): Connection;
            shedCache(): void;
            _writeTransportHeader(out: java.io.DataOutputStream): void;
            _acceptor: ConnectionAcceptor;
            _authcache: java.util.WeakHashMap<java.security.AccessControlContext,java.lang.ref.Reference<java.security.AccessControlContext>>;
            _cacheSecurityManager: java.lang.SecurityManager;
            _ep: TCPEndpoint;
            _freeList: java.util.List<TCPConnection>;
            _okContext: java.security.AccessControlContext;
            _reaper: java.util.concurrent.Future<any>;
            _tr: TCPTransport;
          }
          interface TCPChannel extends CombineTypes<[_TCPChannel, sun.rmi.transport.Channel, java.lang.Object]> {}
          interface _TCPConnection$$static extends ClassLike {
            _new(ch: TCPChannel, s: java.net.Socket, _in: java.io.InputStream, out: java.io.OutputStream): TCPConnection;
            _new(ch: TCPChannel, _in: java.io.InputStream, out: java.io.OutputStream): TCPConnection;
            _new(ch: TCPChannel, s: java.net.Socket): TCPConnection;
          }
          let TCPConnection: _TCPConnection$$static;
          interface _TCPConnection {
            close(): void;
            _expired(time: long): boolean;
            getChannel(): Channel;
            getInputStream(): java.io.InputStream;
            getOutputStream(): java.io.OutputStream;
            isDead(): boolean;
            isReusable(): boolean;
            releaseInputStream(): void;
            releaseOutputStream(): void;
            _setExpiration(time: long): void;
            _setLastUseTime(time: long): void;
            _channel: Channel;
            _expiration: long;
            _in: java.io.InputStream;
            _lastuse: long;
            _out: java.io.OutputStream;
            _roundtrip: long;
            _socket: java.net.Socket;
          }
          interface TCPConnection extends CombineTypes<[_TCPConnection, sun.rmi.transport.Connection, java.lang.Object]> {}
          interface _TCPDirectSocketFactory$$static extends ClassLike {
            new(): TCPDirectSocketFactory;
          }
          let TCPDirectSocketFactory: _TCPDirectSocketFactory$$static;
          interface _TCPDirectSocketFactory {
            createServerSocket(port: int): java.net.ServerSocket;
            createSocket(host: string, port: int): java.net.Socket;
          }
          interface TCPDirectSocketFactory extends CombineTypes<[_TCPDirectSocketFactory, java.rmi.server.RMISocketFactory]> {}
          interface _TCPEndpoint$$static extends ClassLike {
            _allKnownTransports(): java.util.Collection<TCPTransport>;
            _chooseFactory(): java.rmi.server.RMISocketFactory;
            _getBoolean(name: string): boolean;
            _getHostnameProperty(): string;
            _getInt(name: string, def: int): int;
            getLocalEndpoint(port: int): TCPEndpoint;
            getLocalEndpoint(port: int, csf: java.rmi.server.RMIClientSocketFactory, ssf: java.rmi.server.RMIServerSocketFactory): TCPEndpoint;
            read(_in: java.io.ObjectInput): TCPEndpoint;
            readHostPortFormat(_in: java.io.DataInput): TCPEndpoint;
            _resampleLocalHost(): string;
            _setDefaultPort(port: int, csf: java.rmi.server.RMIClientSocketFactory, ssf: java.rmi.server.RMIServerSocketFactory): void;
            _setLocalHost(host: string): void;
            shedConnectionCaches(): void;
            _FORMAT_HOST_PORT: int;
            _FORMAT_HOST_PORT_FACTORY: int;
            _localEndpoints: java.util.Map<TCPEndpoint,java.util.LinkedList<TCPEndpoint>>;
            _localHost: string;
            _localHostKnown: boolean;
            new(host: string, port: int): TCPEndpoint;
            new(host: string, port: int, csf: java.rmi.server.RMIClientSocketFactory, ssf: java.rmi.server.RMIServerSocketFactory): TCPEndpoint;
          }
          let TCPEndpoint: _TCPEndpoint$$static;
          interface _TCPEndpoint {
            equals(obj: any): boolean;
            exportObject(target: Target): void;
            getChannel(): Channel;
            getClientSocketFactory(): java.rmi.server.RMIClientSocketFactory;
            getHost(): string;
            getInboundTransport(): Transport;
            getListenPort(): int;
            getOutboundTransport(): Transport;
            getPort(): int;
            getServerSocketFactory(): java.rmi.server.RMIServerSocketFactory;
            hashCode(): int;
            _newServerSocket(): java.net.ServerSocket;
            _newSocket(): java.net.Socket;
            toString(): string;
            write(out: java.io.ObjectOutput): void;
            writeHostPortFormat(out: java.io.DataOutput): void;
            _csf: java.rmi.server.RMIClientSocketFactory;
            _host: string;
            _listenPort: int;
            _port: int;
            _ssf: java.rmi.server.RMIServerSocketFactory;
            _transport: TCPTransport;
          }
          interface TCPEndpoint extends CombineTypes<[_TCPEndpoint, sun.rmi.transport.Endpoint, java.lang.Object]> {}
          interface _TCPEndpoint$FQDN$$static extends ClassLike {
            _attemptFQDN(localAddr: java.net.InetAddress): string;
          }
          let TCPEndpoint$FQDN: _TCPEndpoint$FQDN$$static;
          interface _TCPEndpoint$FQDN {
            _getFQDN(): void;
            _getHost(): string;
            run(): void;
            _hostAddress: string;
            _reverseLookup: string;
          }
          interface TCPEndpoint$FQDN extends CombineTypes<[_TCPEndpoint$FQDN, java.lang.Object, java.lang.Runnable]> {}
          interface _TCPTransport$$static extends ClassLike {
            _closeSocket(sock: java.net.Socket): void;
            _createNopermsAcc(): java.security.AccessControlContext;
            getClientHost(): string;
            _NOPERMS_ACC: java.security.AccessControlContext;
            _connectionCount: java.util.concurrent.atomic.AtomicInteger;
            _connectionReadTimeout: int;
            _connectionThreadPool: java.util.concurrent.ExecutorService;
            _defaultSocketFactory: java.rmi.server.RMISocketFactory;
            _maxConnectionThreads: int;
            _tcpLog: rmi.runtime.Log;
            _threadConnectionHandler: java.lang.ThreadLocal<TCPTransport$ConnectionHandler>;
            _threadKeepAliveTime: long;
            _new(epList: java.util.LinkedList<TCPEndpoint>): TCPTransport;
          }
          let TCPTransport: _TCPTransport$$static;
          interface _TCPTransport {
            _checkAcceptPermission(acc: java.security.AccessControlContext): void;
            _decrementExportCount(): void;
            exportObject(target: Target): void;
            free(ep: Endpoint): void;
            getChannel(ep: Endpoint): TCPChannel;
            getChannel(a0: Endpoint): Channel;
            _getEndpoint(): TCPEndpoint;
            _handleMessages(conn: Connection, persistent: boolean): void;
            _listen(): void;
            shedConnectionCaches(): void;
            _targetUnexported(): void;
            _channelTable: java.util.Map<TCPEndpoint,java.lang.ref.Reference<TCPChannel>>;
            _epList: java.util.LinkedList<TCPEndpoint>;
            _exportCount: int;
            _server: java.net.ServerSocket;
          }
          interface TCPTransport extends CombineTypes<[_TCPTransport, sun.rmi.transport.Transport]> {}
          interface _TCPTransport$AcceptLoop$$static extends ClassLike {
            _new(a0: TCPTransport, serverSocket: java.net.ServerSocket): TCPTransport$AcceptLoop;
          }
          let TCPTransport$AcceptLoop: _TCPTransport$AcceptLoop$$static;
          interface _TCPTransport$AcceptLoop {
            _continueAfterAcceptFailure(t: java.lang.Throwable): boolean;
            _executeAcceptLoop(): void;
            run(): void;
            _throttleLoopOnException(): void;
            _lastExceptionTime: long;
            _recentExceptionCount: int;
            _serverSocket: java.net.ServerSocket;
            _this$0: TCPTransport;
          }
          interface TCPTransport$AcceptLoop extends CombineTypes<[_TCPTransport$AcceptLoop, java.lang.Object, java.lang.Runnable]> {}
          interface _TCPTransport$ConnectionHandler$$static extends ClassLike {
            _POST: int;
            _new(a0: TCPTransport, socket: java.net.Socket, remoteHost: string): TCPTransport$ConnectionHandler;
          }
          let TCPTransport$ConnectionHandler: _TCPTransport$ConnectionHandler$$static;
          interface _TCPTransport$ConnectionHandler {
            _checkAcceptPermission(sm: java.lang.SecurityManager, acc: java.security.AccessControlContext): void;
            _getClientHost(): string;
            run(): void;
            _run0(): void;
            _authCache: java.util.Map<java.security.AccessControlContext,java.lang.ref.Reference<java.security.AccessControlContext>>;
            _cacheSecurityManager: java.lang.SecurityManager;
            _okContext: java.security.AccessControlContext;
            _remoteHost: string;
            _socket: java.net.Socket;
            _this$0: TCPTransport;
          }
          interface TCPTransport$ConnectionHandler extends CombineTypes<[_TCPTransport$ConnectionHandler, java.lang.Object, java.lang.Runnable]> {}
        }
        interface _Channel$$static extends ClassLike {
        }
        let Channel: _Channel$$static;
        interface _Channel {
          free(a0: Connection, a1: boolean): void;
          getEndpoint(): Endpoint;
          newConnection(): Connection;
        }
        interface Channel extends CombineTypes<[_Channel, java.lang.Object]> {}
        interface _Connection$$static extends ClassLike {
        }
        let Connection: _Connection$$static;
        interface _Connection {
          close(): void;
          getChannel(): Channel;
          getInputStream(): java.io.InputStream;
          getOutputStream(): java.io.OutputStream;
          isReusable(): boolean;
          releaseInputStream(): void;
          releaseOutputStream(): void;
        }
        interface Connection extends CombineTypes<[_Connection, java.lang.Object]> {}
        interface _ConnectionInputStream$$static extends ClassLike {
          _new(_in: java.io.InputStream): ConnectionInputStream;
        }
        let ConnectionInputStream: _ConnectionInputStream$$static;
        interface _ConnectionInputStream {
          _discardRefs(): void;
          _done(c: Connection): void;
          _readID(): void;
          _registerRefs(): void;
          _saveRef(ref: LiveRef): void;
          _setAckNeeded(): void;
          _ackID: java.rmi.server.UID;
          _dgcAckNeeded: boolean;
          _incomingRefTable: java.util.Map<Endpoint,java.util.List<LiveRef>>;
        }
        interface ConnectionInputStream extends CombineTypes<[_ConnectionInputStream, sun.rmi.server.MarshalInputStream]> {}
        interface _ConnectionOutputStream$$static extends ClassLike {
          _new(conn: Connection, resultStream: boolean): ConnectionOutputStream;
        }
        let ConnectionOutputStream: _ConnectionOutputStream$$static;
        interface _ConnectionOutputStream {
          _done(): void;
          _getDGCAckHandler(): DGCAckHandler;
          _isResultStream(): boolean;
          _saveObject(obj: any): void;
          _writeID(): void;
          _ackID: java.rmi.server.UID;
          _conn: Connection;
          _dgcAckHandler: DGCAckHandler;
          _resultStream: boolean;
        }
        interface ConnectionOutputStream extends CombineTypes<[_ConnectionOutputStream, sun.rmi.server.MarshalOutputStream]> {}
        interface _DGCAckHandler$$static extends ClassLike {
          received(id: java.rmi.server.UID): void;
          _dgcAckTimeout: long;
          _idTable: java.util.Map<java.rmi.server.UID,DGCAckHandler>;
          _scheduler: java.util.concurrent.ScheduledExecutorService;
          _new(id: java.rmi.server.UID): DGCAckHandler;
        }
        let DGCAckHandler: _DGCAckHandler$$static;
        interface _DGCAckHandler {
          _add(obj: any): void;
          _release(): void;
          _startTimer(): void;
          _id: java.rmi.server.UID;
          _objList: java.util.List<any>;
          _task: java.util.concurrent.Future<any>;
        }
        interface DGCAckHandler extends CombineTypes<[_DGCAckHandler, java.lang.Object]> {}
        interface _DGCClient$$static extends ClassLike {
          _computeRenewTime(grantTime: long, a1: long): long;
          _createSocketAcc(): java.security.AccessControlContext;
          _getNextSequenceNum(): long;
          _registerRefs(ep: Endpoint, refs: java.util.List<LiveRef>): void;
          _SOCKET_ACC: java.security.AccessControlContext;
          _cleanFailureRetries: int;
          _cleanInterval: long;
          _dgcID: java.rmi.server.ObjID;
          _dirtyFailureRetries: int;
          _emptyObjIDArray: java.rmi.server.ObjID[];
          _gcInterval: long;
          _leaseValue: long;
          _nextSequenceNum: long;
          _vmid: java.rmi.dgc.VMID;
        }
        let DGCClient: _DGCClient$$static;
        interface _DGCClient {
        }
        interface DGCClient extends CombineTypes<[_DGCClient, java.lang.Object]> {}
        interface _DGCClient$EndpointEntry$$static extends ClassLike {
          _createObjIDArray(refEntries: java.util.Set<DGCClient$EndpointEntry$RefEntry>): java.rmi.server.ObjID[];
          lookup(ep: Endpoint): DGCClient$EndpointEntry;
          _endpointTable: java.util.Map<Endpoint,DGCClient$EndpointEntry>;
          _gcLatencyRequest: GC$LatencyRequest;
        }
        let DGCClient$EndpointEntry: _DGCClient$EndpointEntry$$static;
        interface _DGCClient$EndpointEntry {
          _makeCleanCalls(): void;
          _makeDirtyCall(refEntries: java.util.Set<DGCClient$EndpointEntry$RefEntry>, sequenceNum: long): void;
          _processPhantomRefs(phantom: DGCClient$EndpointEntry$RefEntry$PhantomLiveRef): void;
          registerRefs(refs: java.util.List<LiveRef>): boolean;
          _removeRefEntry(refEntry: DGCClient$EndpointEntry$RefEntry): void;
          _setRenewTime(newRenewTime: long): void;
          _dgc: java.rmi.dgc.DGC;
          _dirtyFailureDuration: long;
          _dirtyFailureStartTime: long;
          _dirtyFailures: int;
          _endpoint: Endpoint;
          _expirationTime: long;
          _interruptible: boolean;
          _invalidRefs: java.util.Set<DGCClient$EndpointEntry$RefEntry>;
          _pendingCleans: java.util.Set<DGCClient$EndpointEntry$CleanRequest>;
          _refQueue: java.lang.ref.ReferenceQueue<LiveRef>;
          _refTable: java.util.Map<LiveRef,DGCClient$EndpointEntry$RefEntry>;
          _removed: boolean;
          _renewCleanThread: java.lang.Thread;
          _renewTime: long;
        }
        interface DGCClient$EndpointEntry extends CombineTypes<[_DGCClient$EndpointEntry, java.lang.Object]> {}
        interface _DGCClient$EndpointEntry$CleanRequest$$static extends ClassLike {
          _new(objIDs: java.rmi.server.ObjID[], sequenceNum: long, a2: boolean): DGCClient$EndpointEntry$CleanRequest;
        }
        let DGCClient$EndpointEntry$CleanRequest: _DGCClient$EndpointEntry$CleanRequest$$static;
        interface _DGCClient$EndpointEntry$CleanRequest {
          _failures: int;
          _objIDs: java.rmi.server.ObjID[];
          _sequenceNum: long;
          _strong: boolean;
        }
        interface DGCClient$EndpointEntry$CleanRequest extends CombineTypes<[_DGCClient$EndpointEntry$CleanRequest, java.lang.Object]> {}
        interface _DGCClient$EndpointEntry$RefEntry$$static extends ClassLike {
          new(a0: DGCClient$EndpointEntry, ref: LiveRef): DGCClient$EndpointEntry$RefEntry;
        }
        let DGCClient$EndpointEntry$RefEntry: _DGCClient$EndpointEntry$RefEntry$$static;
        interface _DGCClient$EndpointEntry$RefEntry {
          addInstanceToRefSet(ref: LiveRef): void;
          getRef(): LiveRef;
          hasDirtyFailed(): boolean;
          isRefSetEmpty(): boolean;
          markDirtyFailed(): void;
          removeInstanceFromRefSet(phantom: DGCClient$EndpointEntry$RefEntry$PhantomLiveRef): void;
          _dirtyFailed: boolean;
          _ref: LiveRef;
          _refSet: java.util.Set<DGCClient$EndpointEntry$RefEntry$PhantomLiveRef>;
          _this$0: DGCClient$EndpointEntry;
        }
        interface DGCClient$EndpointEntry$RefEntry extends CombineTypes<[_DGCClient$EndpointEntry$RefEntry, java.lang.Object]> {}
        interface _DGCClient$EndpointEntry$RefEntry$PhantomLiveRef$$static extends ClassLike {
          new(a0: DGCClient$EndpointEntry$RefEntry, ref: LiveRef): DGCClient$EndpointEntry$RefEntry$PhantomLiveRef;
        }
        let DGCClient$EndpointEntry$RefEntry$PhantomLiveRef: _DGCClient$EndpointEntry$RefEntry$PhantomLiveRef$$static;
        interface _DGCClient$EndpointEntry$RefEntry$PhantomLiveRef {
          getRefEntry(): DGCClient$EndpointEntry$RefEntry;
          _this$1: DGCClient$EndpointEntry$RefEntry;
        }
        interface DGCClient$EndpointEntry$RefEntry$PhantomLiveRef extends CombineTypes<[_DGCClient$EndpointEntry$RefEntry$PhantomLiveRef, java.lang.ref.PhantomReference<LiveRef>]> {}
        interface _DGCClient$EndpointEntry$RenewCleanThread$$static extends ClassLike {
        }
        let DGCClient$EndpointEntry$RenewCleanThread: _DGCClient$EndpointEntry$RenewCleanThread$$static;
        interface _DGCClient$EndpointEntry$RenewCleanThread {
          run(): void;
          _this$0: DGCClient$EndpointEntry;
        }
        interface DGCClient$EndpointEntry$RenewCleanThread extends CombineTypes<[_DGCClient$EndpointEntry$RenewCleanThread, java.lang.Object, java.lang.Runnable]> {}
        interface _DGCImpl$$static extends ClassLike {
          _checkInput(filterInfo: java.io.ObjectInputFilter$FilterInfo): java.io.ObjectInputFilter$Status;
          _exportSingleton(): void;
          _getDGCImpl(): DGCImpl;
          _initDgcFilter(): java.io.ObjectInputFilter;
          _DGC_FILTER_PROPNAME: string;
          _DGC_MAX_ARRAY_SIZE: int;
          _DGC_MAX_DEPTH: int;
          _dgc: DGCImpl;
          _dgcFilter: java.io.ObjectInputFilter;
          _dgcLog: rmi.runtime.Log;
          _leaseCheckInterval: long;
          _leaseValue: long;
          _scheduler: java.util.concurrent.ScheduledExecutorService;
        }
        let DGCImpl: _DGCImpl$$static;
        interface _DGCImpl {
          _checkLeases(): void;
          clean(ids: java.rmi.server.ObjID[], sequenceNum: long, a2: java.rmi.dgc.VMID, vmid: boolean): void;
          dirty(ids: java.rmi.server.ObjID[], sequenceNum: long, a2: java.rmi.dgc.Lease): java.rmi.dgc.Lease;
          _registerTarget(vmid: java.rmi.dgc.VMID, target: Target): void;
          _unregisterTarget(vmid: java.rmi.dgc.VMID, target: Target): void;
          _checker: java.util.concurrent.Future<any>;
          _leaseTable: java.util.Map<java.rmi.dgc.VMID,DGCImpl$LeaseInfo>;
        }
        interface DGCImpl extends CombineTypes<[_DGCImpl, java.rmi.dgc.DGC, java.lang.Object]> {}
        interface _DGCImpl$LeaseInfo$$static extends ClassLike {
          _new(vmid: java.rmi.dgc.VMID, lease: long): DGCImpl$LeaseInfo;
        }
        let DGCImpl$LeaseInfo: _DGCImpl$LeaseInfo$$static;
        interface _DGCImpl$LeaseInfo {
          _expired(time: long): boolean;
          _renew(lease: long): void;
          _expiration: long;
          _notifySet: java.util.Set<Target>;
          _vmid: java.rmi.dgc.VMID;
        }
        interface DGCImpl$LeaseInfo extends CombineTypes<[_DGCImpl$LeaseInfo, java.lang.Object]> {}
        interface _DGCImpl_Skel$$static extends ClassLike {
          _interfaceHash: long;
          _operations: java.rmi.server.Operation[];
          new(): DGCImpl_Skel;
        }
        let DGCImpl_Skel: _DGCImpl_Skel$$static;
        interface _DGCImpl_Skel {
          dispatch(obj: java.rmi.Remote, remoteCall: java.rmi.server.RemoteCall, opnum: int, hash: long): void;
          getOperations(): java.rmi.server.Operation[];
        }
        interface DGCImpl_Skel extends CombineTypes<[_DGCImpl_Skel, java.rmi.server.Skeleton, java.lang.Object]> {}
        interface _DGCImpl_Stub$$static extends ClassLike {
          _leaseFilter(filterInfo: java.io.ObjectInputFilter$FilterInfo): java.io.ObjectInputFilter$Status;
          _DGCCLIENT_MAX_ARRAY_SIZE: int;
          _DGCCLIENT_MAX_DEPTH: int;
          _interfaceHash: long;
          _operations: java.rmi.server.Operation[];
          new(): DGCImpl_Stub;
          new(ref: java.rmi.server.RemoteRef): DGCImpl_Stub;
        }
        let DGCImpl_Stub: _DGCImpl_Stub$$static;
        interface _DGCImpl_Stub {
          clean($param_arrayOf_ObjID_1: java.rmi.server.ObjID[], $param_long_2: long, a2: java.rmi.dgc.VMID, $param_VMID_3: boolean): void;
          dirty($param_arrayOf_ObjID_1: java.rmi.server.ObjID[], $param_long_2: long, a2: java.rmi.dgc.Lease): java.rmi.dgc.Lease;
        }
        interface DGCImpl_Stub extends CombineTypes<[_DGCImpl_Stub, java.rmi.dgc.DGC, java.rmi.server.RemoteStub]> {}
        interface _Endpoint$$static extends ClassLike {
        }
        let Endpoint: _Endpoint$$static;
        interface _Endpoint {
          exportObject(a0: Target): void;
          getChannel(): Channel;
          getInboundTransport(): Transport;
          getOutboundTransport(): Transport;
        }
        interface Endpoint extends CombineTypes<[_Endpoint, java.lang.Object]> {}
        interface _GC$$static extends ClassLike {
          currentLatencyTarget(): long;
          maxObjectInspectionAge(): long;
          requestLatency(latency: long): GC$LatencyRequest;
          _setLatencyTarget(ms: long): void;
          _NO_TARGET: long;
          _daemon: java.lang.Thread;
          _latencyTarget: long;
          _lock: any;
        }
        let GC: _GC$$static;
        interface _GC {
        }
        interface GC extends CombineTypes<[_GC, java.lang.Object]> {}
        interface _GC$Daemon$$static extends ClassLike {
          create(): void;
        }
        let GC$Daemon: _GC$Daemon$$static;
        interface _GC$Daemon {
          run(): void;
        }
        interface GC$Daemon extends CombineTypes<[_GC$Daemon, java.lang.Object, java.lang.Runnable]> {}
        interface _GC$LatencyLock$$static extends ClassLike {
        }
        let GC$LatencyLock: _GC$LatencyLock$$static;
        interface _GC$LatencyLock {
        }
        interface GC$LatencyLock extends CombineTypes<[_GC$LatencyLock, java.lang.Object]> {}
        interface _GC$LatencyRequest$$static extends ClassLike {
          _adjustLatencyIfNeeded(): void;
          _counter: long;
          _requests: java.util.SortedSet<GC$LatencyRequest>;
        }
        let GC$LatencyRequest: _GC$LatencyRequest$$static;
        interface _GC$LatencyRequest {
          cancel(): void;
          compareTo(r: GC$LatencyRequest): int;
          compareTo(a0: any): int;
          toString(): string;
          _id: long;
          _latency: long;
        }
        interface GC$LatencyRequest extends CombineTypes<[_GC$LatencyRequest, java.lang.Comparable<GC$LatencyRequest>, java.lang.Object]> {}
        interface _LiveRef$$static extends ClassLike {
          read(_in: java.io.ObjectInput, useNewFormat: boolean): LiveRef;
          new(objID: java.rmi.server.ObjID, endpoint: Endpoint, isLocal: boolean): LiveRef;
          new(port: int): LiveRef;
          new(port: int, csf: java.rmi.server.RMIClientSocketFactory, ssf: java.rmi.server.RMIServerSocketFactory): LiveRef;
          new(objID: java.rmi.server.ObjID, port: int): LiveRef;
          new(objID: java.rmi.server.ObjID, port: int, csf: java.rmi.server.RMIClientSocketFactory, ssf: java.rmi.server.RMIServerSocketFactory): LiveRef;
        }
        let LiveRef: _LiveRef$$static;
        interface _LiveRef {
          clone(): any;
          equals(obj: any): boolean;
          exportObject(target: Target): void;
          getChannel(): Channel;
          getClientSocketFactory(): java.rmi.server.RMIClientSocketFactory;
          _getEndpoint(): Endpoint;
          getObjID(): java.rmi.server.ObjID;
          getPort(): int;
          getServerSocketFactory(): java.rmi.server.RMIServerSocketFactory;
          hashCode(): int;
          remoteEquals(obj: any): boolean;
          toString(): string;
          write(out: java.io.ObjectOutput, useNewFormat: boolean): void;
          _ch: Channel;
          _ep: Endpoint;
          _id: java.rmi.server.ObjID;
          _isLocal: boolean;
        }
        interface LiveRef extends CombineTypes<[_LiveRef, java.lang.Cloneable, java.lang.Object]> {}
        interface _ObjectEndpoint$$static extends ClassLike {
          _new(id: java.rmi.server.ObjID, transport: Transport): ObjectEndpoint;
        }
        let ObjectEndpoint: _ObjectEndpoint$$static;
        interface _ObjectEndpoint {
          equals(obj: any): boolean;
          hashCode(): int;
          toString(): string;
          _id: java.rmi.server.ObjID;
          _transport: Transport;
        }
        interface ObjectEndpoint extends CombineTypes<[_ObjectEndpoint, java.lang.Object]> {}
        interface _ObjectTable$$static extends ClassLike {
          _decrementKeepAliveCount(): void;
          getStub(impl: java.rmi.Remote): java.rmi.Remote;
          _getTarget(oe: ObjectEndpoint): Target;
          getTarget(impl: java.rmi.Remote): Target;
          _incrementKeepAliveCount(): void;
          _putTarget(target: Target): void;
          _referenced(id: java.rmi.server.ObjID, sequenceNum: long, a2: java.rmi.dgc.VMID): void;
          _removeTarget(target: Target): void;
          unexportObject(obj: java.rmi.Remote, force: boolean): boolean;
          _unreferenced(id: java.rmi.server.ObjID, sequenceNum: long, a2: java.rmi.dgc.VMID, vmid: boolean): void;
          _gcInterval: long;
          _gcLatencyRequest: GC$LatencyRequest;
          _implTable: java.util.Map<WeakRef,Target>;
          _keepAliveCount: int;
          _keepAliveLock: any;
          _objTable: java.util.Map<ObjectEndpoint,Target>;
          _reapQueue: java.lang.ref.ReferenceQueue<any>;
          _reaper: java.lang.Thread;
          _tableLock: any;
        }
        let ObjectTable: _ObjectTable$$static;
        interface _ObjectTable {
        }
        interface ObjectTable extends CombineTypes<[_ObjectTable, java.lang.Object]> {}
        interface _ObjectTable$Reaper$$static extends ClassLike {
        }
        let ObjectTable$Reaper: _ObjectTable$Reaper$$static;
        interface _ObjectTable$Reaper {
          run(): void;
        }
        interface ObjectTable$Reaper extends CombineTypes<[_ObjectTable$Reaper, java.lang.Object, java.lang.Runnable]> {}
        interface _SequenceEntry$$static extends ClassLike {
          _new(sequenceNum: long): SequenceEntry;
        }
        let SequenceEntry: _SequenceEntry$$static;
        interface _SequenceEntry {
          _retain(sequenceNum: long): void;
          _update(sequenceNum: long): void;
          _keep: boolean;
          _sequenceNum: long;
        }
        interface SequenceEntry extends CombineTypes<[_SequenceEntry, java.lang.Object]> {}
        interface _StreamRemoteCall$$static extends ClassLike {
          new(c: Connection): StreamRemoteCall;
          new(c: Connection, id: java.rmi.server.ObjID, op: int, hash: long): StreamRemoteCall;
        }
        let StreamRemoteCall: _StreamRemoteCall$$static;
        interface _StreamRemoteCall {
          discardPendingRefs(): void;
          done(): void;
          _exceptionReceivedFromServer(ex: java.lang.Exception): void;
          executeCall(): void;
          getConnection(): Connection;
          getInputStream(): java.io.ObjectInput;
          getOutputStream(): java.io.ObjectOutput;
          _getOutputStream(resultStream: boolean): java.io.ObjectOutput;
          getResultStream(success: boolean): java.io.ObjectOutput;
          getServerException(): java.lang.Exception;
          releaseInputStream(): void;
          releaseOutputStream(): void;
          setObjectInputFilter(filter: java.io.ObjectInputFilter): void;
          _conn: Connection;
          _filter: java.io.ObjectInputFilter;
          _in: ConnectionInputStream;
          _out: ConnectionOutputStream;
          _resultStarted: boolean;
          _serverException: java.lang.Exception;
        }
        interface StreamRemoteCall extends CombineTypes<[_StreamRemoteCall, java.lang.Object, java.rmi.server.RemoteCall]> {}
        interface _Target$$static extends ClassLike {
          _checkLoaderAncestry(child: java.lang.ClassLoader, ancestor: java.lang.ClassLoader): boolean;
          _nextThreadNum: int;
          new(impl: java.rmi.Remote, disp: rmi.server.Dispatcher, stub: java.rmi.Remote, id: java.rmi.server.ObjID, permanent: boolean): Target;
        }
        let Target: _Target$$static;
        interface _Target {
          _decrementCallCount(): void;
          _getAccessControlContext(): java.security.AccessControlContext;
          _getContextClassLoader(): java.lang.ClassLoader;
          _getDispatcher(): rmi.server.Dispatcher;
          _getImpl(): java.rmi.Remote;
          _getObjectEndpoint(): ObjectEndpoint;
          getStub(): java.rmi.Remote;
          _getWeakImpl(): WeakRef;
          _incrementCallCount(): void;
          _isEmpty(): boolean;
          _isPermanent(): boolean;
          _markRemoved(): void;
          _pinImpl(): void;
          _refSetRemove(vmid: java.rmi.dgc.VMID): void;
          _referenced(sequenceNum: long, a1: java.rmi.dgc.VMID): void;
          _setExportedTransport(exportedTransport: Transport): void;
          _unexport(force: boolean): boolean;
          _unpinImpl(): void;
          _unreferenced(sequenceNum: long, a1: java.rmi.dgc.VMID, vmid: boolean): void;
          vmidDead(vmid: java.rmi.dgc.VMID): void;
          _acc: java.security.AccessControlContext;
          _callCount: int;
          _ccl: java.lang.ClassLoader;
          _disp: rmi.server.Dispatcher;
          _exportedTransport: Transport;
          _id: java.rmi.server.ObjID;
          _permanent: boolean;
          _refSet: java.util.Vector<java.rmi.dgc.VMID>;
          _removed: boolean;
          _sequenceTable: java.util.Hashtable<java.rmi.dgc.VMID,SequenceEntry>;
          _stub: java.rmi.Remote;
          _weakImpl: WeakRef;
        }
        interface Target extends CombineTypes<[_Target, java.lang.Object]> {}
        interface _Transport$$static extends ClassLike {
          _currentTransport(): Transport;
          _getLogLevel(): string;
          _setContextClassLoader(ccl: java.lang.ClassLoader): void;
          _SETCCL_ACC: java.security.AccessControlContext;
          _currentTransport: java.lang.ThreadLocal<Transport>;
          _dgcID: java.rmi.server.ObjID;
          _logLevel: int;
          _transportLog: rmi.runtime.Log;
          new(): Transport;
        }
        let Transport: _Transport$$static;
        interface _Transport {
          _checkAcceptPermission(a0: java.security.AccessControlContext): void;
          exportObject(target: Target): void;
          free(a0: Endpoint): void;
          getChannel(a0: Endpoint): Channel;
          serviceCall(call: java.rmi.server.RemoteCall): boolean;
          _targetUnexported(): void;
        }
        interface Transport extends CombineTypes<[_Transport, java.lang.Object]> {}
        interface _TransportConstants$$static extends ClassLike {
          readonly Call: byte;
          readonly DGCAck: byte;
          readonly ExceptionalReturn: byte;
          readonly Magic: int;
          readonly MultiplexProtocol: byte;
          readonly NormalReturn: byte;
          readonly Ping: byte;
          readonly PingAck: byte;
          readonly ProtocolAck: byte;
          readonly ProtocolNack: byte;
          readonly Return: byte;
          readonly SingleOpProtocol: byte;
          readonly StreamProtocol: byte;
          readonly Version: short;
          new(): TransportConstants;
        }
        let TransportConstants: _TransportConstants$$static;
        interface _TransportConstants {
        }
        interface TransportConstants extends CombineTypes<[_TransportConstants, java.lang.Object]> {}
        interface _WeakRef$$static extends ClassLike {
          new(obj: any): WeakRef;
          new(obj: any, q: java.lang.ref.ReferenceQueue<any>): WeakRef;
        }
        let WeakRef: _WeakRef$$static;
        interface _WeakRef {
          equals(obj: any): boolean;
          hashCode(): int;
          pin(): void;
          _setHashValue(obj: any): void;
          unpin(): void;
          _hashValue: int;
          _strongRef: any;
        }
        interface WeakRef extends CombineTypes<[_WeakRef, java.lang.ref.WeakReference<any>]> {}
      }
    }
  }
}
