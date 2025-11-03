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
      module jmx {
        module remote {
          module internal {
            module rmi {
              interface _ProxyRef$$static extends ClassLike {
                _serialVersionUID: long;
                new(ref: java.rmi.server.RemoteRef): ProxyRef;
              }
              let ProxyRef: _ProxyRef$$static;
              interface _ProxyRef {
                done(call: java.rmi.server.RemoteCall): void;
                getRefClass(out: java.io.ObjectOutput): string;
                invoke(call: java.rmi.server.RemoteCall): void;
                invoke(obj: java.rmi.Remote, method: java.lang.reflect.Method, params: any[], opnum: long): any;
                newCall(obj: java.rmi.server.RemoteObject, op: java.rmi.server.Operation[], opnum: int, hash: long): java.rmi.server.RemoteCall;
                readExternal(_in: java.io.ObjectInput): void;
                remoteEquals(obj: java.rmi.server.RemoteRef): boolean;
                remoteHashCode(): int;
                remoteToString(): string;
                writeExternal(out: java.io.ObjectOutput): void;
                _ref: java.rmi.server.RemoteRef;
              }
              interface ProxyRef extends CombineTypes<[_ProxyRef, java.rmi.server.RemoteRef, java.lang.Object]> {}
              interface _RMIExporter$$static extends ClassLike {
                readonly EXPORTER_ATTRIBUTE: string;
              }
              let RMIExporter: _RMIExporter$$static;
              interface _RMIExporter {
                exportObject(a0: java.rmi.Remote, a1: int, a2: java.rmi.server.RMIClientSocketFactory, a3: java.rmi.server.RMIServerSocketFactory, a4: java.io.ObjectInputFilter): java.rmi.Remote;
                unexportObject(a0: java.rmi.Remote, a1: boolean): boolean;
              }
              interface RMIExporter extends CombineTypes<[_RMIExporter, java.lang.Object]> {}
            }
          }
          module protocol {
            module rmi {
              interface _ClientProvider$$static extends ClassLike {
                new(): ClientProvider;
              }
              let ClientProvider: _ClientProvider$$static;
              interface _ClientProvider {
                newJMXConnector(serviceURL: javax.management.remote.JMXServiceURL, environment: java.util.Map<string,any>): javax.management.remote.JMXConnector;
              }
              interface ClientProvider extends CombineTypes<[_ClientProvider, javax.management.remote.JMXConnectorProvider, java.lang.Object]> {}
              interface _ServerProvider$$static extends ClassLike {
                new(): ServerProvider;
              }
              let ServerProvider: _ServerProvider$$static;
              interface _ServerProvider {
                newJMXConnectorServer(serviceURL: javax.management.remote.JMXServiceURL, environment: java.util.Map<string,any>, mbeanServer: javax.management.MBeanServer): javax.management.remote.JMXConnectorServer;
              }
              interface ServerProvider extends CombineTypes<[_ServerProvider, javax.management.remote.JMXConnectorServerProvider, java.lang.Object]> {}
            }
          }
        }
      }
    }
  }
  module javax {
    module management {
      module remote {
        module rmi {
          interface _NoCallStackClassLoader$$static extends ClassLike {
            stringToBytes(s: string): byte[];
            new(className: string, byteCode: byte[], referencedClassNames: string[], referencedClassLoader: java.lang.ClassLoader, protectionDomain: java.security.ProtectionDomain): NoCallStackClassLoader;
            new(classNames: string[], byteCodes: byte[][], referencedClassNames: string[], referencedClassLoader: java.lang.ClassLoader, protectionDomain: java.security.ProtectionDomain): NoCallStackClassLoader;
          }
          let NoCallStackClassLoader: _NoCallStackClassLoader$$static;
          interface _NoCallStackClassLoader {
            _findClass(name: string): java.lang.Class<any>;
            _byteCodes: byte[][];
            _classNames: string[];
            _protectionDomain: java.security.ProtectionDomain;
            _referencedClassLoader: java.lang.ClassLoader;
            _referencedClassNames: string[];
          }
          interface NoCallStackClassLoader extends CombineTypes<[_NoCallStackClassLoader, java.lang.ClassLoader]> {}
          interface _RMIConnection$$static extends ClassLike {
          }
          let RMIConnection: _RMIConnection$$static;
          interface _RMIConnection {
            addNotificationListener(a0: ObjectName, a1: ObjectName, a2: java.rmi.MarshalledObject, a3: java.rmi.MarshalledObject, a4: javax.security.auth.Subject): void;
            addNotificationListeners(a0: ObjectName[], a1: java.rmi.MarshalledObject[], a2: javax.security.auth.Subject[]): int[];
            close(): void;
            createMBean(a0: string, a1: ObjectName, a2: javax.security.auth.Subject): ObjectInstance;
            createMBean(a0: string, a1: ObjectName, a2: ObjectName, a3: javax.security.auth.Subject): ObjectInstance;
            createMBean(a0: string, a1: ObjectName, a2: java.rmi.MarshalledObject, a3: string[], a4: javax.security.auth.Subject): ObjectInstance;
            createMBean(a0: string, a1: ObjectName, a2: ObjectName, a3: java.rmi.MarshalledObject, a4: string[], a5: javax.security.auth.Subject): ObjectInstance;
            fetchNotifications(a0: long, a1: int, a2: long): NotificationResult;
            getAttribute(a0: ObjectName, a1: string, a2: javax.security.auth.Subject): any;
            getAttributes(a0: ObjectName, a1: string[], a2: javax.security.auth.Subject): AttributeList;
            getConnectionId(): string;
            getDefaultDomain(a0: javax.security.auth.Subject): string;
            getDomains(a0: javax.security.auth.Subject): string[];
            getMBeanCount(a0: javax.security.auth.Subject): int;
            getMBeanInfo(a0: ObjectName, a1: javax.security.auth.Subject): MBeanInfo;
            getObjectInstance(a0: ObjectName, a1: javax.security.auth.Subject): ObjectInstance;
            invoke(a0: ObjectName, a1: string, a2: java.rmi.MarshalledObject, a3: string[], a4: javax.security.auth.Subject): any;
            isInstanceOf(a0: ObjectName, a1: string, a2: javax.security.auth.Subject): boolean;
            isRegistered(a0: ObjectName, a1: javax.security.auth.Subject): boolean;
            queryMBeans(a0: ObjectName, a1: java.rmi.MarshalledObject, a2: javax.security.auth.Subject): java.util.Set<ObjectInstance>;
            queryNames(a0: ObjectName, a1: java.rmi.MarshalledObject, a2: javax.security.auth.Subject): java.util.Set<ObjectName>;
            removeNotificationListener(a0: ObjectName, a1: ObjectName, a2: javax.security.auth.Subject): void;
            removeNotificationListener(a0: ObjectName, a1: ObjectName, a2: java.rmi.MarshalledObject, a3: java.rmi.MarshalledObject, a4: javax.security.auth.Subject): void;
            removeNotificationListeners(a0: ObjectName, a1: int[], a2: javax.security.auth.Subject): void;
            setAttribute(a0: ObjectName, a1: java.rmi.MarshalledObject, a2: javax.security.auth.Subject): void;
            setAttributes(a0: ObjectName, a1: java.rmi.MarshalledObject, a2: javax.security.auth.Subject): AttributeList;
            unregisterMBean(a0: ObjectName, a1: javax.security.auth.Subject): void;
          }
          interface RMIConnection extends CombineTypes<[_RMIConnection, java.rmi.Remote, java.io.Closeable, java.lang.Object]> {}
          interface _RMIConnectionImpl$$static extends ClassLike {
            _checkNonNull(what: string, x: any): void;
            _extractException(e: java.lang.Exception): java.lang.Exception;
            _newIOException(message: string, cause: java.lang.Throwable): java.io.IOException;
            _nullIsEmpty(array: any[]): any[];
            _nullIsEmpty(array: string[]): string[];
            _objects(objs: any[]): string;
            _strings(strs: string[]): string;
            _withPermissions(perms: java.security.Permission[]): java.security.AccessControlContext;
            _withPermissions(...perms: java.security.Permission[]): java.security.AccessControlContext;
            _ADD_NOTIFICATION_LISTENERS: int;
            _ADD_NOTIFICATION_LISTENER_OBJECTNAME: int;
            _CREATE_MBEAN: int;
            _CREATE_MBEAN_LOADER: int;
            _CREATE_MBEAN_LOADER_PARAMS: int;
            _CREATE_MBEAN_PARAMS: int;
            _GET_ATTRIBUTE: int;
            _GET_ATTRIBUTES: int;
            _GET_DEFAULT_DOMAIN: int;
            _GET_DOMAINS: int;
            _GET_MBEAN_COUNT: int;
            _GET_MBEAN_INFO: int;
            _GET_OBJECT_INSTANCE: int;
            _INVOKE: int;
            _IS_INSTANCE_OF: int;
            _IS_REGISTERED: int;
            _NO_OBJECTS: any[];
            _NO_STRINGS: string[];
            _QUERY_MBEANS: int;
            _QUERY_NAMES: int;
            _REMOVE_NOTIFICATION_LISTENER: int;
            _REMOVE_NOTIFICATION_LISTENER_OBJECTNAME: int;
            _REMOVE_NOTIFICATION_LISTENER_OBJECTNAME_FILTER_HANDBACK: int;
            _SET_ATTRIBUTE: int;
            _SET_ATTRIBUTES: int;
            _UNREGISTER_MBEAN: int;
            _logger: com.sun.jmx.remote.util.ClassLogger;
            new(rmiServer: RMIServerImpl, connectionId: string, defaultClassLoader: java.lang.ClassLoader, subject: javax.security.auth.Subject, env: java.util.Map<string,any>): RMIConnectionImpl;
          }
          let RMIConnectionImpl: _RMIConnectionImpl$$static;
          interface _RMIConnectionImpl {
            addNotificationListener(name: ObjectName, listener: ObjectName, filter: java.rmi.MarshalledObject, handback: java.rmi.MarshalledObject, delegationSubject: javax.security.auth.Subject): void;
            addNotificationListeners(names: ObjectName[], filters: java.rmi.MarshalledObject[], delegationSubjects: javax.security.auth.Subject[]): int[];
            close(): void;
            createMBean(className: string, name: ObjectName, delegationSubject: javax.security.auth.Subject): ObjectInstance;
            createMBean(className: string, name: ObjectName, loaderName: ObjectName, delegationSubject: javax.security.auth.Subject): ObjectInstance;
            createMBean(className: string, name: ObjectName, params: java.rmi.MarshalledObject, signature: string[], delegationSubject: javax.security.auth.Subject): ObjectInstance;
            createMBean(className: string, name: ObjectName, loaderName: ObjectName, params: java.rmi.MarshalledObject, signature: string[], delegationSubject: javax.security.auth.Subject): ObjectInstance;
            _doOperation(operation: int, params: any[]): any;
            _doPrivilegedOperation(operation: int, params: any[], delegationSubject: javax.security.auth.Subject): any;
            fetchNotifications(clientSequenceNumber: long, a1: int, maxNotifications: long): NotificationResult;
            getAttribute(name: ObjectName, attribute: string, delegationSubject: javax.security.auth.Subject): any;
            getAttributes(name: ObjectName, attributes: string[], delegationSubject: javax.security.auth.Subject): AttributeList;
            _getClassLoader(name: ObjectName): java.lang.ClassLoader;
            _getClassLoaderFor(name: ObjectName): java.lang.ClassLoader;
            getConnectionId(): string;
            getDefaultDomain(delegationSubject: javax.security.auth.Subject): string;
            getDomains(delegationSubject: javax.security.auth.Subject): string[];
            getMBeanCount(delegationSubject: javax.security.auth.Subject): int;
            getMBeanInfo(name: ObjectName, delegationSubject: javax.security.auth.Subject): MBeanInfo;
            getObjectInstance(name: ObjectName, delegationSubject: javax.security.auth.Subject): ObjectInstance;
            _getServerNotifFwd(): com.sun.jmx.remote.internal.ServerNotifForwarder;
            invoke(name: ObjectName, operationName: string, params: java.rmi.MarshalledObject, signature: string[], delegationSubject: javax.security.auth.Subject): any;
            isInstanceOf(name: ObjectName, className: string, delegationSubject: javax.security.auth.Subject): boolean;
            isRegistered(name: ObjectName, delegationSubject: javax.security.auth.Subject): boolean;
            queryMBeans(name: ObjectName, query: java.rmi.MarshalledObject, delegationSubject: javax.security.auth.Subject): java.util.Set<ObjectInstance>;
            queryNames(name: ObjectName, query: java.rmi.MarshalledObject, delegationSubject: javax.security.auth.Subject): java.util.Set<ObjectName>;
            removeNotificationListener(name: ObjectName, listener: ObjectName, delegationSubject: javax.security.auth.Subject): void;
            removeNotificationListener(name: ObjectName, listener: ObjectName, filter: java.rmi.MarshalledObject, handback: java.rmi.MarshalledObject, delegationSubject: javax.security.auth.Subject): void;
            removeNotificationListeners(name: ObjectName, listenerIDs: int[], delegationSubject: javax.security.auth.Subject): void;
            setAttribute(name: ObjectName, attribute: java.rmi.MarshalledObject, delegationSubject: javax.security.auth.Subject): void;
            setAttributes(name: ObjectName, attributes: java.rmi.MarshalledObject, delegationSubject: javax.security.auth.Subject): AttributeList;
            toString(): string;
            unreferenced(): void;
            unregisterMBean(name: ObjectName, delegationSubject: javax.security.auth.Subject): void;
            _unwrap<T>(mo: java.rmi.MarshalledObject<any>, cl: java.lang.ClassLoader, wrappedClass: java.lang.Class<T>, delegationSubject: javax.security.auth.Subject): T;
            _unwrap<T>(mo: java.rmi.MarshalledObject<any>, cl1: java.lang.ClassLoader, cl2: java.lang.ClassLoader, wrappedClass: java.lang.Class<T>, delegationSubject: javax.security.auth.Subject): T;
            _acc: java.security.AccessControlContext;
            _classLoaderWithRepository: com.sun.jmx.remote.util.ClassLoaderWithRepository;
            _connectionId: string;
            _defaultClassLoader: java.lang.ClassLoader;
            _defaultContextClassLoader: java.lang.ClassLoader;
            _env: java.util.Map<string,any>;
            _mbeanServer: MBeanServer;
            _removeCallerContext: boolean;
            _rmiServer: RMIServerImpl;
            _serverCommunicatorAdmin: com.sun.jmx.remote.internal.ServerCommunicatorAdmin;
            _serverNotifForwarder: com.sun.jmx.remote.internal.ServerNotifForwarder;
            _subject: javax.security.auth.Subject;
            _subjectDelegator: com.sun.jmx.remote.security.SubjectDelegator;
            _terminated: boolean;
          }
          interface RMIConnectionImpl extends CombineTypes<[_RMIConnectionImpl, javax.management.remote.rmi.RMIConnection, java.rmi.server.Unreferenced, java.lang.Object]> {}
          interface _RMIConnectionImpl$CombinedClassLoader$$static extends ClassLike {
          }
          let RMIConnectionImpl$CombinedClassLoader: _RMIConnectionImpl$CombinedClassLoader$$static;
          interface _RMIConnectionImpl$CombinedClassLoader {
            _loadClass(name: string, resolve: boolean): java.lang.Class<any>;
            _defaultCL: RMIConnectionImpl$CombinedClassLoader$ClassLoaderWrapper;
          }
          interface RMIConnectionImpl$CombinedClassLoader extends CombineTypes<[_RMIConnectionImpl$CombinedClassLoader, java.lang.ClassLoader]> {}
          interface _RMIConnectionImpl$CombinedClassLoader$ClassLoaderWrapper$$static extends ClassLike {
            _new(cl: java.lang.ClassLoader): RMIConnectionImpl$CombinedClassLoader$ClassLoaderWrapper;
          }
          let RMIConnectionImpl$CombinedClassLoader$ClassLoaderWrapper: _RMIConnectionImpl$CombinedClassLoader$ClassLoaderWrapper$$static;
          interface _RMIConnectionImpl$CombinedClassLoader$ClassLoaderWrapper {
            _loadClass(name: string, resolve: boolean): java.lang.Class<any>;
          }
          interface RMIConnectionImpl$CombinedClassLoader$ClassLoaderWrapper extends CombineTypes<[_RMIConnectionImpl$CombinedClassLoader$ClassLoaderWrapper, java.lang.ClassLoader]> {}
          interface _RMIConnectionImpl$PrivilegedOperation$$static extends ClassLike {
            new(a0: RMIConnectionImpl, operation: int, params: any[]): RMIConnectionImpl$PrivilegedOperation;
          }
          let RMIConnectionImpl$PrivilegedOperation: _RMIConnectionImpl$PrivilegedOperation$$static;
          interface _RMIConnectionImpl$PrivilegedOperation {
            run(): any;
            _operation: int;
            _params: any[];
            _this$0: RMIConnectionImpl;
          }
          interface RMIConnectionImpl$PrivilegedOperation extends CombineTypes<[_RMIConnectionImpl$PrivilegedOperation, java.lang.Object, java.security.PrivilegedExceptionAction<any>]> {}
          interface _RMIConnectionImpl$RMIServerCommunicatorAdmin$$static extends ClassLike {
            new(a0: RMIConnectionImpl, timeout: long): RMIConnectionImpl$RMIServerCommunicatorAdmin;
          }
          let RMIConnectionImpl$RMIServerCommunicatorAdmin: _RMIConnectionImpl$RMIServerCommunicatorAdmin$$static;
          interface _RMIConnectionImpl$RMIServerCommunicatorAdmin {
            _doStop(): void;
            _this$0: RMIConnectionImpl;
          }
          interface RMIConnectionImpl$RMIServerCommunicatorAdmin extends CombineTypes<[_RMIConnectionImpl$RMIServerCommunicatorAdmin, com.sun.jmx.remote.internal.ServerCommunicatorAdmin]> {}
          interface _RMIConnectionImpl$SetCcl$$static extends ClassLike {
            _new(classLoader: java.lang.ClassLoader): RMIConnectionImpl$SetCcl;
          }
          let RMIConnectionImpl$SetCcl: _RMIConnectionImpl$SetCcl$$static;
          interface _RMIConnectionImpl$SetCcl {
            run(): java.lang.ClassLoader;
            run(): any;
            _classLoader: java.lang.ClassLoader;
          }
          interface RMIConnectionImpl$SetCcl extends CombineTypes<[_RMIConnectionImpl$SetCcl, java.lang.Object, java.security.PrivilegedExceptionAction<java.lang.ClassLoader>]> {}
          interface _RMIConnectionImpl_Stub$$static extends ClassLike {
            _serialVersionUID: long;
            new(ref: java.rmi.server.RemoteRef): RMIConnectionImpl_Stub;
          }
          let RMIConnectionImpl_Stub: _RMIConnectionImpl_Stub$$static;
          interface _RMIConnectionImpl_Stub {
            addNotificationListener($param_ObjectName_1: ObjectName, $param_ObjectName_2: ObjectName, $param_MarshalledObject_3: java.rmi.MarshalledObject, $param_MarshalledObject_4: java.rmi.MarshalledObject, $param_Subject_5: javax.security.auth.Subject): void;
            addNotificationListeners($param_arrayOf_ObjectName_1: ObjectName[], $param_arrayOf_MarshalledObject_2: java.rmi.MarshalledObject[], $param_arrayOf_Subject_3: javax.security.auth.Subject[]): int[];
            close(): void;
            createMBean($param_String_1: string, $param_ObjectName_2: ObjectName, $param_MarshalledObject_3: java.rmi.MarshalledObject, $param_arrayOf_String_4: string[], $param_Subject_5: javax.security.auth.Subject): ObjectInstance;
            createMBean($param_String_1: string, $param_ObjectName_2: ObjectName, $param_ObjectName_3: ObjectName, $param_MarshalledObject_4: java.rmi.MarshalledObject, $param_arrayOf_String_5: string[], $param_Subject_6: javax.security.auth.Subject): ObjectInstance;
            createMBean($param_String_1: string, $param_ObjectName_2: ObjectName, $param_ObjectName_3: ObjectName, $param_Subject_4: javax.security.auth.Subject): ObjectInstance;
            createMBean($param_String_1: string, $param_ObjectName_2: ObjectName, $param_Subject_3: javax.security.auth.Subject): ObjectInstance;
            fetchNotifications($param_long_1: long, a1: int, $param_int_2: long): NotificationResult;
            getAttribute($param_ObjectName_1: ObjectName, $param_String_2: string, $param_Subject_3: javax.security.auth.Subject): any;
            getAttributes($param_ObjectName_1: ObjectName, $param_arrayOf_String_2: string[], $param_Subject_3: javax.security.auth.Subject): AttributeList;
            getConnectionId(): string;
            getDefaultDomain($param_Subject_1: javax.security.auth.Subject): string;
            getDomains($param_Subject_1: javax.security.auth.Subject): string[];
            getMBeanCount($param_Subject_1: javax.security.auth.Subject): int;
            getMBeanInfo($param_ObjectName_1: ObjectName, $param_Subject_2: javax.security.auth.Subject): MBeanInfo;
            getObjectInstance($param_ObjectName_1: ObjectName, $param_Subject_2: javax.security.auth.Subject): ObjectInstance;
            invoke($param_ObjectName_1: ObjectName, $param_String_2: string, $param_MarshalledObject_3: java.rmi.MarshalledObject, $param_arrayOf_String_4: string[], $param_Subject_5: javax.security.auth.Subject): any;
            isInstanceOf($param_ObjectName_1: ObjectName, $param_String_2: string, $param_Subject_3: javax.security.auth.Subject): boolean;
            isRegistered($param_ObjectName_1: ObjectName, $param_Subject_2: javax.security.auth.Subject): boolean;
            queryMBeans($param_ObjectName_1: ObjectName, $param_MarshalledObject_2: java.rmi.MarshalledObject, $param_Subject_3: javax.security.auth.Subject): java.util.Set;
            queryNames($param_ObjectName_1: ObjectName, $param_MarshalledObject_2: java.rmi.MarshalledObject, $param_Subject_3: javax.security.auth.Subject): java.util.Set;
            removeNotificationListener($param_ObjectName_1: ObjectName, $param_ObjectName_2: ObjectName, $param_MarshalledObject_3: java.rmi.MarshalledObject, $param_MarshalledObject_4: java.rmi.MarshalledObject, $param_Subject_5: javax.security.auth.Subject): void;
            removeNotificationListener($param_ObjectName_1: ObjectName, $param_ObjectName_2: ObjectName, $param_Subject_3: javax.security.auth.Subject): void;
            removeNotificationListeners($param_ObjectName_1: ObjectName, $param_arrayOf_Integer_2: int[], $param_Subject_3: javax.security.auth.Subject): void;
            setAttribute($param_ObjectName_1: ObjectName, $param_MarshalledObject_2: java.rmi.MarshalledObject, $param_Subject_3: javax.security.auth.Subject): void;
            setAttributes($param_ObjectName_1: ObjectName, $param_MarshalledObject_2: java.rmi.MarshalledObject, $param_Subject_3: javax.security.auth.Subject): AttributeList;
            unregisterMBean($param_ObjectName_1: ObjectName, $param_Subject_2: javax.security.auth.Subject): void;
          }
          interface RMIConnectionImpl_Stub extends CombineTypes<[_RMIConnectionImpl_Stub, javax.management.remote.rmi.RMIConnection, java.rmi.server.RemoteStub]> {}
          interface _RMIConnector$$static extends ClassLike {
            _base64ToByteArray(s: string): byte[];
            _base64toInt(c: char): int;
            _checkStub(stub: java.rmi.Remote, stubClass: java.lang.Class<any>): void;
            _getAttributesNames(attributes: AttributeList): string;
            _getConnection(server: RMIServer, credentials: any, checkStub: boolean): RMIConnection;
            _narrowJRMPServer(objref: any): RMIServer;
            _objects(objs: any[]): string;
            _packageOf(cn: string): string;
            _shadowJrmpStub(stub: java.rmi.server.RemoteObject): RMIConnection;
            _strings(strs: string[]): string;
            _base64ToInt: byte[];
            _logger: com.sun.jmx.remote.util.ClassLogger;
            _orb: java.lang.ref.WeakReference<any>;
            _pRefClassName: string;
            _proxyRefConstructor: java.lang.reflect.Constructor<any>;
            _rmiConnectionImplStubClass: java.lang.Class<any>;
            _rmiConnectionImplStubClassName: string;
            _rmiServerImplStubClass: java.lang.Class<any>;
            _rmiServerImplStubClassName: string;
            _serialVersionUID: long;
            new(url: JMXServiceURL, environment: java.util.Map<string,any>): RMIConnector;
            new(rmiServer: RMIServer, environment: java.util.Map<string,any>): RMIConnector;
          }
          let RMIConnector: _RMIConnector$$static;
          interface _RMIConnector {
            addConnectionNotificationListener(listener: NotificationListener, filter: NotificationFilter, handback: any): void;
            _addListenerWithSubject(name: ObjectName, filter: java.rmi.MarshalledObject<NotificationFilter>, delegationSubject: javax.security.auth.Subject, reconnect: boolean): int;
            _addListenersWithSubjects(names: ObjectName[], filters: java.rmi.MarshalledObject<NotificationFilter>[], delegationSubjects: javax.security.auth.Subject[], reconnect: boolean): int[];
            close(): void;
            _close(intern: boolean): void;
            connect(): void;
            connect(environment: java.util.Map<string,any>): void;
            _findRMIServer(directoryURL: JMXServiceURL, environment: java.util.Map<string,any>): RMIServer;
            _findRMIServerJNDI(jndiURL: string, env: java.util.Map<string,any>): RMIServer;
            _findRMIServerJRMP(base64: string, env: java.util.Map<string,any>): RMIServer;
            getAddress(): JMXServiceURL;
            getConnectionId(): string;
            _getConnectionWithSubject(delegationSubject: javax.security.auth.Subject): MBeanServerConnection;
            getMBeanServerConnection(): MBeanServerConnection;
            getMBeanServerConnection(delegationSubject: javax.security.auth.Subject): MBeanServerConnection;
            _initTransients(): void;
            _popDefaultClassLoader(old: java.lang.ClassLoader): void;
            _pushDefaultClassLoader(): java.lang.ClassLoader;
            _readObject(s: java.io.ObjectInputStream): void;
            removeConnectionNotificationListener(listener: NotificationListener): void;
            removeConnectionNotificationListener(listener: NotificationListener, filter: NotificationFilter, handback: any): void;
            _sendNotification(n: Notification): void;
            toString(): string;
            _writeObject(s: java.io.ObjectOutputStream): void;
            _clientNotifCounter: long;
            _clientNotifSeqNo: long;
            _closeException: java.lang.Exception;
            _communicatorAdmin: com.sun.jmx.remote.internal.ClientCommunicatorAdmin;
            _connected: boolean;
            _connection: RMIConnection;
            _connectionBroadcaster: NotificationBroadcasterSupport;
            _connectionId: string;
            _defaultClassLoader: java.lang.ClassLoader;
            _env: java.util.Map<string,any>;
            _jmxServiceURL: JMXServiceURL;
            _nullSubjectConnRef: java.lang.ref.WeakReference<MBeanServerConnection>;
            _rmbscMap: java.util.WeakHashMap<javax.security.auth.Subject,java.lang.ref.WeakReference<MBeanServerConnection>>;
            _rmiNotifClient: RMIConnector$RMINotifClient;
            _rmiServer: RMIServer;
            _terminated: boolean;
          }
          interface RMIConnector extends CombineTypes<[_RMIConnector, javax.management.remote.JMXAddressable, java.lang.Object, javax.management.remote.JMXConnector, java.io.Serializable]> {}
          interface _RMIConnector$ObjectInputStreamWithLoader$$static extends ClassLike {
            _new(_in: java.io.InputStream, cl: java.lang.ClassLoader): RMIConnector$ObjectInputStreamWithLoader;
          }
          let RMIConnector$ObjectInputStreamWithLoader: _RMIConnector$ObjectInputStreamWithLoader$$static;
          interface _RMIConnector$ObjectInputStreamWithLoader {
            _resolveClass(classDesc: java.io.ObjectStreamClass): java.lang.Class<any>;
            _loader: java.lang.ClassLoader;
          }
          interface RMIConnector$ObjectInputStreamWithLoader extends CombineTypes<[_RMIConnector$ObjectInputStreamWithLoader, java.io.ObjectInputStream]> {}
          interface _RMIConnector$RMIClientCommunicatorAdmin$$static extends ClassLike {
            new(a0: RMIConnector, period: long): RMIConnector$RMIClientCommunicatorAdmin;
          }
          let RMIConnector$RMIClientCommunicatorAdmin: _RMIConnector$RMIClientCommunicatorAdmin$$static;
          interface _RMIConnector$RMIClientCommunicatorAdmin {
            _checkConnection(): void;
            _doStart(): void;
            _doStop(): void;
            gotIOException(ioe: java.io.IOException): void;
            reconnectNotificationListeners(old: com.sun.jmx.remote.internal.ClientListenerInfo[]): void;
            _this$0: RMIConnector;
          }
          interface RMIConnector$RMIClientCommunicatorAdmin extends CombineTypes<[_RMIConnector$RMIClientCommunicatorAdmin, com.sun.jmx.remote.internal.ClientCommunicatorAdmin]> {}
          interface _RMIConnector$RMINotifClient$$static extends ClassLike {
            new(a0: java.lang.ClassLoader, cl: java.util.Map<string,any>): RMIConnector$RMINotifClient;
          }
          let RMIConnector$RMINotifClient: _RMIConnector$RMINotifClient$$static;
          interface _RMIConnector$RMINotifClient {
            _addListenerForMBeanRemovedNotif(): int;
            _fetchNotifs(clientSequenceNumber: long, a1: int, maxNotifications: long): NotificationResult;
            _lostNotifs(message: string, number: long): void;
            _removeListenerForMBeanRemovedNotif(id: int): void;
            _rethrowDeserializationException(ioe: java.io.IOException): void;
            _this$0: RMIConnector;
          }
          interface RMIConnector$RMINotifClient extends CombineTypes<[_RMIConnector$RMINotifClient, com.sun.jmx.remote.internal.ClientNotifForwarder]> {}
          interface _RMIConnector$RemoteMBeanServerConnection$$static extends ClassLike {
            new(a0: RMIConnector): RMIConnector$RemoteMBeanServerConnection;
            new(a0: RMIConnector, delegationSubject: javax.security.auth.Subject): RMIConnector$RemoteMBeanServerConnection;
          }
          let RMIConnector$RemoteMBeanServerConnection: _RMIConnector$RemoteMBeanServerConnection$$static;
          interface _RMIConnector$RemoteMBeanServerConnection {
            addNotificationListener(name: ObjectName, listener: ObjectName, filter: NotificationFilter, handback: any): void;
            addNotificationListener(name: ObjectName, listener: NotificationListener, filter: NotificationFilter, handback: any): void;
            createMBean(className: string, name: ObjectName): ObjectInstance;
            createMBean(className: string, name: ObjectName, loaderName: ObjectName): ObjectInstance;
            createMBean(className: string, name: ObjectName, params: any[], signature: string[]): ObjectInstance;
            createMBean(className: string, name: ObjectName, loaderName: ObjectName, params: any[], signature: string[]): ObjectInstance;
            getAttribute(name: ObjectName, attribute: string): any;
            getAttributes(name: ObjectName, attributes: string[]): AttributeList;
            getDefaultDomain(): string;
            getDomains(): string[];
            getMBeanCount(): int;
            getMBeanInfo(name: ObjectName): MBeanInfo;
            getObjectInstance(name: ObjectName): ObjectInstance;
            invoke(name: ObjectName, operationName: string, params: any[], signature: string[]): any;
            isInstanceOf(name: ObjectName, className: string): boolean;
            isRegistered(name: ObjectName): boolean;
            queryMBeans(name: ObjectName, query: QueryExp): java.util.Set<ObjectInstance>;
            queryNames(name: ObjectName, query: QueryExp): java.util.Set<ObjectName>;
            removeNotificationListener(name: ObjectName, listener: ObjectName): void;
            removeNotificationListener(name: ObjectName, listener: ObjectName, filter: NotificationFilter, handback: any): void;
            removeNotificationListener(name: ObjectName, listener: NotificationListener): void;
            removeNotificationListener(name: ObjectName, listener: NotificationListener, filter: NotificationFilter, handback: any): void;
            setAttribute(name: ObjectName, attribute: Attribute): void;
            setAttributes(name: ObjectName, attributes: AttributeList): AttributeList;
            unregisterMBean(name: ObjectName): void;
            _delegationSubject: javax.security.auth.Subject;
            _this$0: RMIConnector;
          }
          interface RMIConnector$RemoteMBeanServerConnection extends CombineTypes<[_RMIConnector$RemoteMBeanServerConnection, javax.management.MBeanServerConnection, java.lang.Object]> {}
          interface _RMIConnector$Util$$static extends ClassLike {
            cast<T>(x: any): T;
          }
          let RMIConnector$Util: _RMIConnector$Util$$static;
          interface _RMIConnector$Util {
          }
          interface RMIConnector$Util extends CombineTypes<[_RMIConnector$Util, java.lang.Object]> {}
          interface _RMIConnectorServer$$static extends ClassLike {
            _byteArrayToBase64(a: byte[]): string;
            _encodeJRMPStub(rmiServer: RMIServer, env: java.util.Map<string,any>): string;
            _encodeStub(rmiServer: RMIServer, env: java.util.Map<string,any>): string;
            _newIOException(message: string, cause: java.lang.Throwable): java.io.IOException;
            _newJRMPServer(env: java.util.Map<string,any>, port: int): RMIServerImpl;
            _objectToBind(rmiServer: RMIServerImpl, env: java.util.Map<string,any>): RMIServer;
            _CREATED: int;
            readonly CREDENTIALS_FILTER_PATTERN: string;
            readonly JNDI_REBIND_ATTRIBUTE: string;
            readonly RMI_CLIENT_SOCKET_FACTORY_ATTRIBUTE: string;
            readonly RMI_SERVER_SOCKET_FACTORY_ATTRIBUTE: string;
            readonly SERIAL_FILTER_PATTERN: string;
            _STARTED: int;
            _STOPPED: int;
            _intToAlpha: char[];
            _logger: com.sun.jmx.remote.util.ClassLogger;
            _openedServers: java.util.Set<RMIConnectorServer>;
            new(url: JMXServiceURL, environment: java.util.Map<string,any>): RMIConnectorServer;
            new(url: JMXServiceURL, environment: java.util.Map<string,any>, mbeanServer: MBeanServer): RMIConnectorServer;
            new(url: JMXServiceURL, environment: java.util.Map<string,any>, rmiServerImpl: RMIServerImpl, mbeanServer: MBeanServer): RMIConnectorServer;
          }
          let RMIConnectorServer: _RMIConnectorServer$$static;
          interface _RMIConnectorServer {
            _bind(jndiUrl: string, attributes: java.util.Hashtable<any,any>, rmiServer: RMIServer, rebind: boolean): void;
            _connectionClosed(connectionId: string, message: string, userData: any): void;
            _connectionFailed(connectionId: string, message: string, userData: any): void;
            _connectionOpened(connectionId: string, message: string, userData: any): void;
            _encodeStubInAddress(rmiServer: RMIServer, attributes: java.util.Map<string,any>): void;
            getAddress(): JMXServiceURL;
            getAttributes(): java.util.Map<string,any>;
            isActive(): boolean;
            _newServer(): RMIServerImpl;
            setMBeanServerForwarder(mbsf: MBeanServerForwarder): void;
            start(): void;
            stop(): void;
            toJMXConnector(env: java.util.Map<string,any>): JMXConnector;
            _address: JMXServiceURL;
            _attributes: java.util.Map<string,any>;
            _boundJndiUrl: string;
            _defaultClassLoader: java.lang.ClassLoader;
            _rmiServerImpl: RMIServerImpl;
            _state: int;
          }
          interface RMIConnectorServer extends CombineTypes<[_RMIConnectorServer, javax.management.remote.JMXConnectorServer]> {}
          interface _RMIJRMPServerImpl$$static extends ClassLike {
            new(port: int, csf: java.rmi.server.RMIClientSocketFactory, ssf: java.rmi.server.RMIServerSocketFactory, env: java.util.Map<string,any>): RMIJRMPServerImpl;
          }
          let RMIJRMPServerImpl: _RMIJRMPServerImpl$$static;
          interface _RMIJRMPServerImpl {
            _closeClient(client: RMIConnection): void;
            _closeServer(): void;
            _export(): void;
            _export(obj: java.rmi.Remote, typeFilter: java.io.ObjectInputFilter): void;
            _getProtocol(): string;
            _makeClient(connectionId: string, subject: javax.security.auth.Subject): RMIConnection;
            _newClientCheckInput(filterInfo: java.io.ObjectInputFilter$FilterInfo): java.io.ObjectInputFilter$Status;
            toStub(): java.rmi.Remote;
            _unexport(obj: java.rmi.Remote, force: boolean): void;
            _allowedTypes: java.util.Set<string>;
            _cFilter: java.io.ObjectInputFilter;
            _csf: java.rmi.server.RMIClientSocketFactory;
            _env: java.util.Map<string,any>;
            _jmxRmiFilter: java.io.ObjectInputFilter;
            _port: int;
            _ssf: java.rmi.server.RMIServerSocketFactory;
          }
          interface RMIJRMPServerImpl extends CombineTypes<[_RMIJRMPServerImpl, javax.management.remote.rmi.RMIServerImpl]> {}
          interface _RMIServer$$static extends ClassLike {
          }
          let RMIServer: _RMIServer$$static;
          interface _RMIServer {
            getVersion(): string;
            newClient(a0: any): RMIConnection;
          }
          interface RMIServer extends CombineTypes<[_RMIServer, java.rmi.Remote, java.lang.Object]> {}
          interface _RMIServerImpl$$static extends ClassLike {
            _makeConnectionId(protocol: string, subject: javax.security.auth.Subject): string;
            _connectionIdNumber: int;
            _logger: com.sun.jmx.remote.util.ClassLogger;
            new(env: java.util.Map<string,any>): RMIServerImpl;
          }
          let RMIServerImpl: _RMIServerImpl$$static;
          interface _RMIServerImpl {
            _clientClosed(client: RMIConnection): void;
            close(): void;
            _closeClient(a0: RMIConnection): void;
            _closeServer(): void;
            _doNewClient(credentials: any): RMIConnection;
            _dropDeadReferences(): void;
            _export(): void;
            getDefaultClassLoader(): java.lang.ClassLoader;
            getMBeanServer(): MBeanServer;
            _getNotifBuffer(): com.sun.jmx.remote.internal.NotificationBuffer;
            _getProtocol(): string;
            getVersion(): string;
            _makeClient(a0: string, a1: javax.security.auth.Subject): RMIConnection;
            newClient(credentials: any): RMIConnection;
            setDefaultClassLoader(cl: java.lang.ClassLoader): void;
            setMBeanServer(mbs: MBeanServer): void;
            _setRMIConnectorServer(connServer: RMIConnectorServer): void;
            toStub(): java.rmi.Remote;
            _cl: java.lang.ClassLoader;
            _clientList: java.util.List<java.lang.ref.WeakReference<RMIConnection>>;
            _connServer: RMIConnectorServer;
            _env: java.util.Map<string,any>;
            _mbeanServer: MBeanServer;
            _notifBuffer: com.sun.jmx.remote.internal.NotificationBuffer;
          }
          interface RMIServerImpl extends CombineTypes<[_RMIServerImpl, java.io.Closeable, java.lang.Object, javax.management.remote.rmi.RMIServer]> {}
          interface _RMIServerImpl_Stub$$static extends ClassLike {
            _serialVersionUID: long;
            new(ref: java.rmi.server.RemoteRef): RMIServerImpl_Stub;
          }
          let RMIServerImpl_Stub: _RMIServerImpl_Stub$$static;
          interface _RMIServerImpl_Stub {
            getVersion(): string;
            newClient($param_Object_1: any): RMIConnection;
          }
          interface RMIServerImpl_Stub extends CombineTypes<[_RMIServerImpl_Stub, java.rmi.server.RemoteStub, javax.management.remote.rmi.RMIServer]> {}
        }
      }
    }
  }
}
