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
      module jndi {
        module rmi {
          module registry {
            interface _AtomicNameParser$$static extends ClassLike {
              _syntax: java.util.Properties;
              _new(): AtomicNameParser;
            }
            let AtomicNameParser: _AtomicNameParser$$static;
            interface _AtomicNameParser {
              parse(name: string): javax.naming.Name;
            }
            interface AtomicNameParser extends CombineTypes<[_AtomicNameParser, java.lang.Object, javax.naming.NameParser]> {}
            interface _BindingEnumeration$$static extends ClassLike {
              _new(ctx: RegistryContext, names: string[]): BindingEnumeration;
            }
            let BindingEnumeration: _BindingEnumeration$$static;
            interface _BindingEnumeration {
              close(): void;
              _finalize(): void;
              hasMore(): boolean;
              hasMoreElements(): boolean;
              next(): javax.naming.Binding;
              next(): any;
              nextElement(): javax.naming.Binding;
              nextElement(): any;
              _ctx: RegistryContext;
              _names: string[];
              _nextName: int;
            }
            interface BindingEnumeration extends CombineTypes<[_BindingEnumeration, java.lang.Object, javax.naming.NamingEnumeration<javax.naming.Binding>]> {}
            interface _NameClassPairEnumeration$$static extends ClassLike {
              _new(names: string[]): NameClassPairEnumeration;
            }
            let NameClassPairEnumeration: _NameClassPairEnumeration$$static;
            interface _NameClassPairEnumeration {
              close(): void;
              hasMore(): boolean;
              hasMoreElements(): boolean;
              next(): javax.naming.NameClassPair;
              next(): any;
              nextElement(): javax.naming.NameClassPair;
              nextElement(): any;
              _names: string[];
              _nextName: int;
            }
            interface NameClassPairEnumeration extends CombineTypes<[_NameClassPairEnumeration, java.lang.Object, javax.naming.NamingEnumeration<javax.naming.NameClassPair>]> {}
            interface _ReferenceWrapper$$static extends ClassLike {
              _serialVersionUID: long;
              new(wrappee: javax.naming.Reference): ReferenceWrapper;
            }
            let ReferenceWrapper: _ReferenceWrapper$$static;
            interface _ReferenceWrapper {
              getReference(): javax.naming.Reference;
              _wrappee: javax.naming.Reference;
            }
            interface ReferenceWrapper extends CombineTypes<[_ReferenceWrapper, java.rmi.server.UnicastRemoteObject, com.sun.jndi.rmi.registry.RemoteReference]> {}
            interface _ReferenceWrapper_Stub$$static extends ClassLike {
              _serialVersionUID: long;
              new(ref: java.rmi.server.RemoteRef): ReferenceWrapper_Stub;
            }
            let ReferenceWrapper_Stub: _ReferenceWrapper_Stub$$static;
            interface _ReferenceWrapper_Stub {
              getReference(): javax.naming.Reference;
            }
            interface ReferenceWrapper_Stub extends CombineTypes<[_ReferenceWrapper_Stub, java.rmi.Remote, java.rmi.server.RemoteStub, com.sun.jndi.rmi.registry.RemoteReference]> {}
            interface _RegistryContext$$static extends ClassLike {
              _getRegistry(host: string, port: int, socketFactory: java.rmi.server.RMIClientSocketFactory): java.rmi.registry.Registry;
              _installSecurityMgr(): void;
              wrapRemoteException(re: java.rmi.RemoteException): javax.naming.NamingException;
              readonly SECURITY_MGR: string;
              _SOCKET_FACTORY: string;
              _nameParser: javax.naming.NameParser;
              _trustURLCodebase: boolean;
              new(host: string, port: int, env: java.util.Hashtable<any,any>): RegistryContext;
              _new(ctx: RegistryContext): RegistryContext;
            }
            let RegistryContext: _RegistryContext$$static;
            interface _RegistryContext {
              addToEnvironment(propName: string, propVal: any): any;
              bind(name: javax.naming.Name, obj: any): void;
              bind(name: string, obj: any): void;
              close(): void;
              composeName(name: javax.naming.Name, prefix: javax.naming.Name): javax.naming.Name;
              composeName(name: string, prefix: string): string;
              createSubcontext(name: javax.naming.Name): javax.naming.Context;
              createSubcontext(name: string): javax.naming.Context;
              _decodeObject(r: java.rmi.Remote, name: javax.naming.Name): any;
              destroySubcontext(name: javax.naming.Name): void;
              destroySubcontext(name: string): void;
              _encodeObject(obj: any, name: javax.naming.Name): java.rmi.Remote;
              _finalize(): void;
              getEnvironment(): java.util.Hashtable<string,any>;
              getNameInNamespace(): string;
              getNameParser(name: javax.naming.Name): javax.naming.NameParser;
              getNameParser(name: string): javax.naming.NameParser;
              getReference(): javax.naming.Reference;
              list(name: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.NameClassPair>;
              list(name: string): javax.naming.NamingEnumeration<javax.naming.NameClassPair>;
              listBindings(name: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.Binding>;
              listBindings(name: string): javax.naming.NamingEnumeration<javax.naming.Binding>;
              lookup(name: javax.naming.Name): any;
              lookup(name: string): any;
              lookupLink(name: javax.naming.Name): any;
              lookupLink(name: string): any;
              rebind(name: javax.naming.Name, obj: any): void;
              rebind(name: string, obj: any): void;
              removeFromEnvironment(propName: string): any;
              rename(oldName: javax.naming.Name, newName: javax.naming.Name): void;
              rename(name: string, newName: string): void;
              unbind(name: javax.naming.Name): void;
              unbind(name: string): void;
              _environment: java.util.Hashtable<string,any>;
              _host: string;
              _port: int;
              _reference: javax.naming.Reference;
              _registry: java.rmi.registry.Registry;
            }
            interface RegistryContext extends CombineTypes<[_RegistryContext, java.lang.Object, javax.naming.Context, javax.naming.Referenceable]> {}
            interface _RegistryContextFactory$$static extends ClassLike {
              _URLToContext(url: string, env: java.util.Hashtable<any,any>): javax.naming.Context;
              _URLsToObject(urls: string[], env: java.util.Hashtable<any,any>): any;
              _getInitCtxURL(env: java.util.Hashtable<any,any>): string;
              _getURLs(ref: javax.naming.Reference): string[];
              _isRegistryRef(obj: any): boolean;
              readonly ADDRESS_TYPE: string;
              new(): RegistryContextFactory;
            }
            let RegistryContextFactory: _RegistryContextFactory$$static;
            interface _RegistryContextFactory {
              getInitialContext(env: java.util.Hashtable<any,any>): javax.naming.Context;
              getObjectInstance(ref: any, name: javax.naming.Name, nameCtx: javax.naming.Context, env: java.util.Hashtable<any,any>): any;
            }
            interface RegistryContextFactory extends CombineTypes<[_RegistryContextFactory, javax.naming.spi.ObjectFactory, javax.naming.spi.InitialContextFactory, java.lang.Object]> {}
            interface _RemoteReference$$static extends ClassLike {
            }
            let RemoteReference: _RemoteReference$$static;
            interface _RemoteReference {
              getReference(): javax.naming.Reference;
(): javax.naming.Reference;
            }
            interface RemoteReference extends CombineTypes<[_RemoteReference, java.rmi.Remote, java.lang.Object]> {}
          }
        }
        module url {
          module rmi {
            interface _rmiURLContext$$static extends ClassLike {
              _DEFAULT_PARSE_MODE: jndi.toolkit.url.Uri$ParseMode;
              readonly PARSE_MODE: jndi.toolkit.url.Uri$ParseMode;
              _PARSE_MODE_PROP: string;
              new(env: java.util.Hashtable<any,any>): rmiURLContext;
            }
            let rmiURLContext: _rmiURLContext$$static;
            interface _rmiURLContext {
              _getRootURLContext(url: string, env: java.util.Hashtable<any,any>): javax.naming.spi.ResolveResult;
            }
            interface rmiURLContext extends CombineTypes<[_rmiURLContext, com.sun.jndi.toolkit.url.GenericURLContext]> {}
            interface _rmiURLContext$Parser$$static extends ClassLike {
              new(url: string): rmiURLContext$Parser;
              new(url: string, mode: jndi.toolkit.url.Uri$ParseMode): rmiURLContext$Parser;
            }
            let rmiURLContext$Parser: _rmiURLContext$Parser$$static;
            interface _rmiURLContext$Parser {
              _acceptsFragment(): boolean;
              host(): string;
              mode(): jndi.toolkit.url.Uri$ParseMode;
              _newNamingException(cause: java.lang.Throwable): javax.naming.NamingException;
              objName(): string;
              parse(): void;
              _parseCompat(): void;
              _parseLegacy(): void;
              _parseStrict(): void;
              port(): int;
              url(): string;
              _host: string;
              _mode: jndi.toolkit.url.Uri$ParseMode;
              _objName: string;
              _port: int;
              _url: string;
            }
            interface rmiURLContext$Parser extends CombineTypes<[_rmiURLContext$Parser, java.lang.Object]> {}
            interface _rmiURLContextFactory$$static extends ClassLike {
              _getUsingURL(url: string, env: java.util.Hashtable<any,any>): any;
              _getUsingURLs(urls: string[], env: java.util.Hashtable<any,any>): any;
              new(): rmiURLContextFactory;
            }
            let rmiURLContextFactory: _rmiURLContextFactory$$static;
            interface _rmiURLContextFactory {
              getObjectInstance(urlInfo: any, name: javax.naming.Name, nameCtx: javax.naming.Context, env: java.util.Hashtable<any,any>): any;
            }
            interface rmiURLContextFactory extends CombineTypes<[_rmiURLContextFactory, javax.naming.spi.ObjectFactory, java.lang.Object]> {}
          }
        }
      }
    }
  }
}
