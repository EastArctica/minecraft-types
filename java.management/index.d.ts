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
        module defaults {
          interface _JmxProperties$$static extends ClassLike {
            readonly JMX_IMPL_NAME: string;
            readonly JMX_IMPL_VENDOR: string;
            readonly JMX_IMPL_VERSION: string;
            readonly JMX_INITIAL_BUILDER: string;
            readonly JMX_SPEC_NAME: string;
            readonly JMX_SPEC_VENDOR: string;
            readonly JMX_SPEC_VERSION: string;
            readonly MBEANSERVER_LOGGER: java.lang.System$Logger;
            readonly MBEANSERVER_LOGGER_NAME: string;
            readonly MISC_LOGGER: java.lang.System$Logger;
            readonly MISC_LOGGER_NAME: string;
            readonly MLET_LIB_DIR: string;
            readonly MLET_LOGGER: java.lang.System$Logger;
            readonly MLET_LOGGER_NAME: string;
            readonly MODELMBEAN_LOGGER: java.lang.System$Logger;
            readonly MODELMBEAN_LOGGER_NAME: string;
            readonly MONITOR_LOGGER: java.lang.System$Logger;
            readonly MONITOR_LOGGER_NAME: string;
            readonly NOTIFICATION_LOGGER: java.lang.System$Logger;
            readonly NOTIFICATION_LOGGER_NAME: string;
            readonly RELATION_LOGGER: java.lang.System$Logger;
            readonly RELATION_LOGGER_NAME: string;
            readonly TIMER_LOGGER: java.lang.System$Logger;
            readonly TIMER_LOGGER_NAME: string;
          }
          let JmxProperties: _JmxProperties$$static;
          interface _JmxProperties {
          }
          interface JmxProperties extends CombineTypes<[_JmxProperties, java.lang.Object]> {}
          interface _ServiceName$$static extends ClassLike {
            readonly DELEGATE: string;
            readonly DOMAIN: string;
            readonly JMX_IMPL_NAME: string;
            readonly JMX_IMPL_VENDOR: string;
            readonly JMX_SPEC_NAME: string;
            readonly JMX_SPEC_VENDOR: string;
            readonly JMX_SPEC_VERSION: string;
            readonly MLET: string;
          }
          let ServiceName: _ServiceName$$static;
          interface _ServiceName {
          }
          interface ServiceName extends CombineTypes<[_ServiceName, java.lang.Object]> {}
        }
        module interceptor {
          interface _DefaultMBeanServerInterceptor$$static extends ClassLike {
            _checkMBeanPermission(mbean: javax.management.DynamicMBean, member: string, objectName: javax.management.ObjectName, actions: string): void;
            _checkMBeanPermission(classname: string, member: string, objectName: javax.management.ObjectName, actions: string): void;
            _checkMBeanTrustPermission(theClass: java.lang.Class<any>): void;
            _getClassName(mbean: javax.management.DynamicMBean): string;
            _getNewMBeanClassName(mbeanToRegister: any): string;
            _getNotificationBroadcaster<T>(name: javax.management.ObjectName, instance: any, reqClass: java.lang.Class<T>): T;
            _getResource(mbean: javax.management.DynamicMBean): any;
            _postDeregisterInvoke(mbean: javax.management.ObjectName, moi: javax.management.MBeanRegistration): void;
            _postRegister(logicalName: javax.management.ObjectName, mbean: javax.management.DynamicMBean, registrationDone: boolean, registerFailed: boolean): void;
            _preDeregisterInvoke(moi: javax.management.MBeanRegistration): void;
            _preRegister(mbean: javax.management.DynamicMBean, mbs: javax.management.MBeanServer, name: javax.management.ObjectName): javax.management.ObjectName;
            _rethrow(t: java.lang.Throwable): void;
            _rethrowMaybeMBeanException(t: java.lang.Throwable): void;
            _safeGetClassName(mbean: javax.management.DynamicMBean): string;
            _throwMBeanRegistrationException(t: java.lang.Throwable, where: string): void;
            new(outer: javax.management.MBeanServer, delegate: javax.management.MBeanServerDelegate, instantiator: jmx.mbeanserver.MBeanInstantiator, repository: jmx.mbeanserver.Repository): DefaultMBeanServerInterceptor;
          }
          let DefaultMBeanServerInterceptor: _DefaultMBeanServerInterceptor$$static;
          interface _DefaultMBeanServerInterceptor {
            _addClassLoader(loader: java.lang.ClassLoader, logicalName: javax.management.ObjectName): void;
            addNotificationListener(name: javax.management.ObjectName, listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, handback: any): void;
            addNotificationListener(name: javax.management.ObjectName, listener: javax.management.ObjectName, filter: javax.management.NotificationFilter, handback: any): void;
            _createClassLoaderContext(loader: java.lang.ClassLoader, logicalName: javax.management.ObjectName): DefaultMBeanServerInterceptor$ResourceContext;
            createMBean(className: string, name: javax.management.ObjectName): javax.management.ObjectInstance;
            createMBean(className: string, name: javax.management.ObjectName, loaderName: javax.management.ObjectName): javax.management.ObjectInstance;
            createMBean(className: string, name: javax.management.ObjectName, params: any[], signature: string[]): javax.management.ObjectInstance;
            createMBean(className: string, name: javax.management.ObjectName, loaderName: javax.management.ObjectName, params: any[], signature: string[]): javax.management.ObjectInstance;
            _createMBean(className: string, name: javax.management.ObjectName, loaderName: javax.management.ObjectName, withDefaultLoaderRepository: boolean, params: any[], signature: string[]): javax.management.ObjectInstance;
            _exclusiveUnregisterMBean(name: javax.management.ObjectName): void;
            _filterListOfObjectInstances(list: java.util.Set<javax.management.ObjectInstance>, query: javax.management.QueryExp): java.util.Set<javax.management.ObjectInstance>;
            getAttribute(name: javax.management.ObjectName, attribute: string): any;
            getAttributes(name: javax.management.ObjectName, attributes: string[]): javax.management.AttributeList;
            getClassLoader(loaderName: javax.management.ObjectName): java.lang.ClassLoader;
            getClassLoaderFor(mbeanName: javax.management.ObjectName): java.lang.ClassLoader;
            getClassLoaderRepository(): javax.management.loading.ClassLoaderRepository;
            getDefaultDomain(): string;
            getDomains(): string[];
            _getInstantiatorCLR(): jmx.mbeanserver.ModifiableClassLoaderRepository;
            _getListener(listener: javax.management.ObjectName): javax.management.NotificationListener;
            _getListenerWrapper(l: javax.management.NotificationListener, name: javax.management.ObjectName, mbean: javax.management.DynamicMBean, create: boolean): javax.management.NotificationListener;
            _getMBean(name: javax.management.ObjectName): javax.management.DynamicMBean;
            getMBeanCount(): int;
            getMBeanInfo(name: javax.management.ObjectName): javax.management.MBeanInfo;
            getObjectInstance(name: javax.management.ObjectName): javax.management.ObjectInstance;
            instantiate(className: string): any;
            instantiate(className: string, loaderName: javax.management.ObjectName): any;
            instantiate(className: string, params: any[], signature: string[]): any;
            instantiate(className: string, loaderName: javax.management.ObjectName, params: any[], signature: string[]): any;
            invoke(name: javax.management.ObjectName, operationName: string, params: any[], signature: string[]): any;
            isInstanceOf(name: javax.management.ObjectName, className: string): boolean;
            isRegistered(name: javax.management.ObjectName): boolean;
            _makeResourceContextFor(resource: any, logicalName: javax.management.ObjectName): DefaultMBeanServerInterceptor$ResourceContext;
            _nonDefaultDomain(name: javax.management.ObjectName): javax.management.ObjectName;
            _objectInstancesFromFilteredNamedObjects(list: java.util.Set<jmx.mbeanserver.NamedObject>, query: javax.management.QueryExp): java.util.Set<javax.management.ObjectInstance>;
            _objectNamesFromFilteredNamedObjects(list: java.util.Set<jmx.mbeanserver.NamedObject>, query: javax.management.QueryExp): java.util.Set<javax.management.ObjectName>;
            queryMBeans(name: javax.management.ObjectName, query: javax.management.QueryExp): java.util.Set<javax.management.ObjectInstance>;
            _queryMBeansImpl(name: javax.management.ObjectName, query: javax.management.QueryExp): java.util.Set<javax.management.ObjectInstance>;
            queryNames(name: javax.management.ObjectName, query: javax.management.QueryExp): java.util.Set<javax.management.ObjectName>;
            _queryNamesImpl(name: javax.management.ObjectName, query: javax.management.QueryExp): java.util.Set<javax.management.ObjectName>;
            _registerDynamicMBean(classname: string, mbean: javax.management.DynamicMBean, name: javax.management.ObjectName): javax.management.ObjectInstance;
            registerMBean(object: any, name: javax.management.ObjectName): javax.management.ObjectInstance;
            _registerObject(classname: string, object: any, name: javax.management.ObjectName): javax.management.ObjectInstance;
            _registerWithRepository(resource: any, object: javax.management.DynamicMBean, logicalName: javax.management.ObjectName): DefaultMBeanServerInterceptor$ResourceContext;
            _removeClassLoader(loader: java.lang.ClassLoader, logicalName: javax.management.ObjectName): void;
            removeNotificationListener(name: javax.management.ObjectName, listener: javax.management.NotificationListener): void;
            removeNotificationListener(name: javax.management.ObjectName, listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, handback: any): void;
            removeNotificationListener(name: javax.management.ObjectName, listener: javax.management.ObjectName): void;
            removeNotificationListener(name: javax.management.ObjectName, listener: javax.management.ObjectName, filter: javax.management.NotificationFilter, handback: any): void;
            _removeNotificationListener(name: javax.management.ObjectName, listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, handback: any, removeAll: boolean): void;
            _sendNotification(NotifType: string, name: javax.management.ObjectName): void;
            setAttribute(name: javax.management.ObjectName, attribute: javax.management.Attribute): void;
            setAttributes(name: javax.management.ObjectName, attributes: javax.management.AttributeList): javax.management.AttributeList;
            _unregisterFromRepository(resource: any, object: javax.management.DynamicMBean, logicalName: javax.management.ObjectName): DefaultMBeanServerInterceptor$ResourceContext;
            unregisterMBean(name: javax.management.ObjectName): void;
            _beingUnregistered: java.util.Set<javax.management.ObjectName>;
            _delegate: javax.management.MBeanServerDelegate;
            _domain: string;
            _instantiator: jmx.mbeanserver.MBeanInstantiator;
            _listenerWrappers: java.util.WeakHashMap<DefaultMBeanServerInterceptor$ListenerWrapper,java.lang.ref.WeakReference<DefaultMBeanServerInterceptor$ListenerWrapper>>;
            _repository: jmx.mbeanserver.Repository;
            _server: javax.management.MBeanServer;
          }
          interface DefaultMBeanServerInterceptor extends CombineTypes<[_DefaultMBeanServerInterceptor, com.sun.jmx.interceptor.MBeanServerInterceptor, java.lang.Object]> {}
          interface _DefaultMBeanServerInterceptor$ListenerWrapper$$static extends ClassLike {
            _new(l: javax.management.NotificationListener, name: javax.management.ObjectName, mbean: any): DefaultMBeanServerInterceptor$ListenerWrapper;
          }
          let DefaultMBeanServerInterceptor$ListenerWrapper: _DefaultMBeanServerInterceptor$ListenerWrapper$$static;
          interface _DefaultMBeanServerInterceptor$ListenerWrapper {
            equals(o: any): boolean;
            handleNotification(notification: javax.management.Notification, handback: any): void;
            hashCode(): int;
            _listener: javax.management.NotificationListener;
            _mbean: any;
            _name: javax.management.ObjectName;
          }
          interface DefaultMBeanServerInterceptor$ListenerWrapper extends CombineTypes<[_DefaultMBeanServerInterceptor$ListenerWrapper, javax.management.NotificationListener, java.lang.Object]> {}
          interface _DefaultMBeanServerInterceptor$ResourceContext$$static extends ClassLike {
            readonly NONE: DefaultMBeanServerInterceptor$ResourceContext;
          }
          let DefaultMBeanServerInterceptor$ResourceContext: _DefaultMBeanServerInterceptor$ResourceContext$$static;
          interface _DefaultMBeanServerInterceptor$ResourceContext {
            done(): void;
(): void;
          }
          interface DefaultMBeanServerInterceptor$ResourceContext extends CombineTypes<[_DefaultMBeanServerInterceptor$ResourceContext, com.sun.jmx.mbeanserver.Repository$RegistrationContext, java.lang.Object]> {}
          interface _MBeanServerInterceptor$$static extends ClassLike {
          }
          let MBeanServerInterceptor: _MBeanServerInterceptor$$static;
          interface _MBeanServerInterceptor {
            getClassLoaderRepository(): javax.management.loading.ClassLoaderRepository;
            instantiate(a0: string): any;
            instantiate(a0: string, a1: javax.management.ObjectName): any;
            instantiate(a0: string, a1: any[], a2: string[]): any;
            instantiate(a0: string, a1: javax.management.ObjectName, a2: any[], a3: string[]): any;
          }
          interface MBeanServerInterceptor extends CombineTypes<[_MBeanServerInterceptor, javax.management.MBeanServer, java.lang.Object]> {}
        }
        module mbeanserver {
          interface _ClassLoaderRepositorySupport$$static extends ClassLike {
            _EMPTY_LOADER_ARRAY: ClassLoaderRepositorySupport$LoaderEntry[];
            _new(): ClassLoaderRepositorySupport;
          }
          let ClassLoaderRepositorySupport: _ClassLoaderRepositorySupport$$static;
          interface _ClassLoaderRepositorySupport {
            _add(name: javax.management.ObjectName, cl: java.lang.ClassLoader): boolean;
            addClassLoader(loader: java.lang.ClassLoader): void;
            addClassLoader(name: javax.management.ObjectName, loader: java.lang.ClassLoader): void;
            getClassLoader(name: javax.management.ObjectName): java.lang.ClassLoader;
            loadClass(className: string): java.lang.Class<any>;
            _loadClass(list: ClassLoaderRepositorySupport$LoaderEntry[], className: string, without: java.lang.ClassLoader, stop: java.lang.ClassLoader): java.lang.Class<any>;
            loadClassBefore(stop: java.lang.ClassLoader, className: string): java.lang.Class<any>;
            loadClassWithout(without: java.lang.ClassLoader, className: string): java.lang.Class<any>;
            _remove(name: javax.management.ObjectName, cl: java.lang.ClassLoader): boolean;
            removeClassLoader(loader: java.lang.ClassLoader): void;
            removeClassLoader(name: javax.management.ObjectName): void;
            _startValidSearch(aloader: java.lang.ClassLoader, className: string): void;
            _stopValidSearch(aloader: java.lang.ClassLoader, className: string): void;
            _loaders: ClassLoaderRepositorySupport$LoaderEntry[];
            _loadersWithNames: java.util.Map<javax.management.ObjectName,java.lang.ClassLoader>;
            _search: java.util.Map<string,java.util.List<java.lang.ClassLoader>>;
          }
          interface ClassLoaderRepositorySupport extends CombineTypes<[_ClassLoaderRepositorySupport, java.lang.Object, com.sun.jmx.mbeanserver.ModifiableClassLoaderRepository]> {}
          interface _ClassLoaderRepositorySupport$LoaderEntry$$static extends ClassLike {
            _new(name: javax.management.ObjectName, loader: java.lang.ClassLoader): ClassLoaderRepositorySupport$LoaderEntry;
          }
          let ClassLoaderRepositorySupport$LoaderEntry: _ClassLoaderRepositorySupport$LoaderEntry$$static;
          interface _ClassLoaderRepositorySupport$LoaderEntry {
            _loader: java.lang.ClassLoader;
            _name: javax.management.ObjectName;
          }
          interface ClassLoaderRepositorySupport$LoaderEntry extends CombineTypes<[_ClassLoaderRepositorySupport$LoaderEntry, java.lang.Object]> {}
          interface _ConvertingMethod$$static extends ClassLike {
            _from(m: java.lang.reflect.Method): ConvertingMethod;
            _noStrings: string[];
          }
          let ConvertingMethod: _ConvertingMethod$$static;
          interface _ConvertingMethod {
            _checkCallFromOpen(): void;
            _checkCallToOpen(): void;
            _fromOpenParameter(lookup: MXBeanLookup, param: any, paramNo: int): any;
            _fromOpenParameters(params: any[]): any[];
            _fromOpenReturnValue(lookup: MXBeanLookup, ret: any): any;
            _getDescriptor(): javax.management.Descriptor;
            _getGenericParameterTypes(): java.lang.reflect.Type[];
            _getGenericReturnType(): java.lang.reflect.Type;
            _getMethod(): java.lang.reflect.Method;
            _getName(): string;
            _getOpenParameterTypes(): javax.management.openmbean.OpenType<any>[];
            _getOpenReturnType(): javax.management.openmbean.OpenType<any>;
            _getOpenSignature(): string[];
            _invokeWithOpenReturn(lookup: MXBeanLookup, obj: any, params: any[]): any;
            _invokeWithOpenReturn(obj: any, params: any[]): any;
            _methodName(): string;
            _toOpenParameter(lookup: MXBeanLookup, param: any, paramNo: int): any;
            _toOpenParameters(lookup: MXBeanLookup, params: any[]): any[];
            _toOpenReturnValue(lookup: MXBeanLookup, ret: any): any;
            _method: java.lang.reflect.Method;
            _paramConversionIsIdentity: boolean;
            _paramMappings: MXBeanMapping[];
            _returnMapping: MXBeanMapping;
          }
          interface ConvertingMethod extends CombineTypes<[_ConvertingMethod, java.lang.Object]> {}
          interface _DefaultMXBeanMappingFactory$$static extends ClassLike {
            _capitalize(name: string): string;
            decapitalize(name: string): string;
            _getMapping(type: java.lang.reflect.Type): MXBeanMapping;
            _invalidObjectException(msg: string, cause: java.lang.Throwable): java.io.InvalidObjectException;
            _invalidObjectException(cause: java.lang.Throwable): java.io.InvalidObjectException;
            _isIdentity(mapping: MXBeanMapping): boolean;
            _makeEnumMapping<T>(enumClass: java.lang.Class<any>, fake: java.lang.Class<T>): MXBeanMapping;
            _makeMXBeanRefMapping(t: java.lang.reflect.Type): MXBeanMapping;
            _mustBeComparable(collection: java.lang.Class<any>, element: java.lang.reflect.Type): void;
            _openDataException(msg: string, cause: java.lang.Throwable): javax.management.openmbean.OpenDataException;
            _openDataException(cause: java.lang.Throwable): javax.management.openmbean.OpenDataException;
            propertyName(m: java.lang.reflect.Method): string;
            _putMapping(type: java.lang.reflect.Type, mapping: MXBeanMapping): void;
            _putPermanentMapping(type: java.lang.reflect.Type, mapping: MXBeanMapping): void;
            _inProgress: java.util.Map<java.lang.reflect.Type,java.lang.reflect.Type>;
            _keyArray: string[];
            _keyValueArray: string[];
            _mappings: DefaultMXBeanMappingFactory$Mappings;
            _permanentMappings: java.util.List<MXBeanMapping>;
            new(): DefaultMXBeanMappingFactory;
          }
          let DefaultMXBeanMappingFactory: _DefaultMXBeanMappingFactory$$static;
          interface _DefaultMXBeanMappingFactory {
            _makeArrayOrCollectionMapping(collectionType: java.lang.reflect.Type, elementType: java.lang.reflect.Type, factory: MXBeanMappingFactory): MXBeanMapping;
            _makeCompositeMapping(c: java.lang.Class<any>, factory: MXBeanMappingFactory): MXBeanMapping;
            _makeMapping(objType: java.lang.reflect.Type, factory: MXBeanMappingFactory): MXBeanMapping;
            _makeParameterizedTypeMapping(objType: java.lang.reflect.ParameterizedType, factory: MXBeanMappingFactory): MXBeanMapping;
            _makeTabularMapping(objType: java.lang.reflect.Type, sortedMap: boolean, keyType: java.lang.reflect.Type, valueType: java.lang.reflect.Type, factory: MXBeanMappingFactory): MXBeanMapping;
            mappingForType(objType: java.lang.reflect.Type, factory: MXBeanMappingFactory): MXBeanMapping;
          }
          interface DefaultMXBeanMappingFactory extends CombineTypes<[_DefaultMXBeanMappingFactory, com.sun.jmx.mbeanserver.MXBeanMappingFactory]> {}
          interface _DefaultMXBeanMappingFactory$ArrayMapping$$static extends ClassLike {
            _new(targetType: java.lang.reflect.Type, openArrayType: javax.management.openmbean.ArrayType<any>, openArrayClass: java.lang.Class<any>, elementMapping: MXBeanMapping): DefaultMXBeanMappingFactory$ArrayMapping;
          }
          let DefaultMXBeanMappingFactory$ArrayMapping: _DefaultMXBeanMappingFactory$ArrayMapping$$static;
          interface _DefaultMXBeanMappingFactory$ArrayMapping {
            checkReconstructible(): void;
            _fromNonNullOpenValue(openValue: any): any;
            _toNonNullOpenValue(value: any): any;
            _elementMapping: MXBeanMapping;
          }
          interface DefaultMXBeanMappingFactory$ArrayMapping extends CombineTypes<[_DefaultMXBeanMappingFactory$ArrayMapping, com.sun.jmx.mbeanserver.DefaultMXBeanMappingFactory$NonNullMXBeanMapping]> {}
          interface _DefaultMXBeanMappingFactory$CollectionMapping$$static extends ClassLike {
            _new(targetType: java.lang.reflect.Type, openArrayType: javax.management.openmbean.ArrayType<any>, openArrayClass: java.lang.Class<any>, elementMapping: MXBeanMapping): DefaultMXBeanMappingFactory$CollectionMapping;
          }
          let DefaultMXBeanMappingFactory$CollectionMapping: _DefaultMXBeanMappingFactory$CollectionMapping$$static;
          interface _DefaultMXBeanMappingFactory$CollectionMapping {
            checkReconstructible(): void;
            _fromNonNullOpenValue(openValue: any): any;
            _toNonNullOpenValue(value: any): any;
            _collectionClass: java.lang.Class<java.util.Collection<any>>;
            _elementMapping: MXBeanMapping;
          }
          interface DefaultMXBeanMappingFactory$CollectionMapping extends CombineTypes<[_DefaultMXBeanMappingFactory$CollectionMapping, com.sun.jmx.mbeanserver.DefaultMXBeanMappingFactory$NonNullMXBeanMapping]> {}
          interface _DefaultMXBeanMappingFactory$CompositeBuilder$$static extends ClassLike {
            _new(targetClass: java.lang.Class<any>, itemNames: string[]): DefaultMXBeanMappingFactory$CompositeBuilder;
          }
          let DefaultMXBeanMappingFactory$CompositeBuilder: _DefaultMXBeanMappingFactory$CompositeBuilder$$static;
          interface _DefaultMXBeanMappingFactory$CompositeBuilder {
            _applicable(a0: java.lang.reflect.Method[]): string;
            _fromCompositeData(a0: javax.management.openmbean.CompositeData, a1: string[], a2: MXBeanMapping[]): any;
            _getItemNames(): string[];
            _getTargetClass(): java.lang.Class<any>;
            _possibleCause(): java.lang.Throwable;
            _itemNames: string[];
            _targetClass: java.lang.Class<any>;
          }
          interface DefaultMXBeanMappingFactory$CompositeBuilder extends CombineTypes<[_DefaultMXBeanMappingFactory$CompositeBuilder, java.lang.Object]> {}
          interface _DefaultMXBeanMappingFactory$CompositeBuilderCheckGetters$$static extends ClassLike {
            _new(targetClass: java.lang.Class<any>, itemNames: string[], getterConverters: MXBeanMapping[]): DefaultMXBeanMappingFactory$CompositeBuilderCheckGetters;
          }
          let DefaultMXBeanMappingFactory$CompositeBuilderCheckGetters: _DefaultMXBeanMappingFactory$CompositeBuilderCheckGetters$$static;
          interface _DefaultMXBeanMappingFactory$CompositeBuilderCheckGetters {
            _applicable(getters: java.lang.reflect.Method[]): string;
            _fromCompositeData(cd: javax.management.openmbean.CompositeData, itemNames: string[], converters: MXBeanMapping[]): any;
            _possibleCause(): java.lang.Throwable;
            _getterConverters: MXBeanMapping[];
            _possibleCause: java.lang.Throwable;
          }
          interface DefaultMXBeanMappingFactory$CompositeBuilderCheckGetters extends CombineTypes<[_DefaultMXBeanMappingFactory$CompositeBuilderCheckGetters, com.sun.jmx.mbeanserver.DefaultMXBeanMappingFactory$CompositeBuilder]> {}
          interface _DefaultMXBeanMappingFactory$CompositeBuilderViaConstructor$$static extends ClassLike {
            _subset(sub: java.util.BitSet, sup: java.util.BitSet): boolean;
            _new(targetClass: java.lang.Class<any>, itemNames: string[]): DefaultMXBeanMappingFactory$CompositeBuilderViaConstructor;
          }
          let DefaultMXBeanMappingFactory$CompositeBuilderViaConstructor: _DefaultMXBeanMappingFactory$CompositeBuilderViaConstructor$$static;
          interface _DefaultMXBeanMappingFactory$CompositeBuilderViaConstructor {
            _applicable(getters: java.lang.reflect.Method[]): string;
            _fromCompositeData(cd: javax.management.openmbean.CompositeData, itemNames: string[], mappings: MXBeanMapping[]): any;
            _getConstPropValues(ctr: java.lang.reflect.Constructor<any>): string[];
            _matchingMechanism(constr: java.lang.reflect.Constructor<any>): string;
            _referenceMechannism(matchingMechanism: string): string;
            _reportConstructorsAmbiguousFor(names: java.util.Set<string>): string;
            _reportMultipleConstructorsFoundFor(propertyNames: string[]): string;
            _reportMultipleConstructorsFoundFor(...propertyNames: string[]): string;
            _reportNoConstructor(): string;
            _reportNoConstructorFoundFor(names: java.util.Set<string>): string;
            _annotatedConstructors: java.util.List<DefaultMXBeanMappingFactory$CompositeBuilderViaConstructor$Constr>;
          }
          interface DefaultMXBeanMappingFactory$CompositeBuilderViaConstructor extends CombineTypes<[_DefaultMXBeanMappingFactory$CompositeBuilderViaConstructor, com.sun.jmx.mbeanserver.DefaultMXBeanMappingFactory$CompositeBuilder]> {}
          interface _DefaultMXBeanMappingFactory$CompositeBuilderViaConstructor$Constr$$static extends ClassLike {
            _new(constructor: java.lang.reflect.Constructor<any>, paramIndexes: int[], presentParams: java.util.BitSet): DefaultMXBeanMappingFactory$CompositeBuilderViaConstructor$Constr;
          }
          let DefaultMXBeanMappingFactory$CompositeBuilderViaConstructor$Constr: _DefaultMXBeanMappingFactory$CompositeBuilderViaConstructor$Constr$$static;
          interface _DefaultMXBeanMappingFactory$CompositeBuilderViaConstructor$Constr {
            /** @renamed-from constructor */__constructor: java.lang.reflect.Constructor<any>;
            _paramIndexes: int[];
            _presentParams: java.util.BitSet;
            /** @renamed-to _constructor */_constructor: java.lang.reflect.Constructor<any>;
          }
          interface DefaultMXBeanMappingFactory$CompositeBuilderViaConstructor$Constr extends CombineTypes<[_DefaultMXBeanMappingFactory$CompositeBuilderViaConstructor$Constr, java.lang.Object]> {}
          interface _DefaultMXBeanMappingFactory$CompositeBuilderViaFrom$$static extends ClassLike {
            _new(targetClass: java.lang.Class<any>, itemNames: string[]): DefaultMXBeanMappingFactory$CompositeBuilderViaFrom;
          }
          let DefaultMXBeanMappingFactory$CompositeBuilderViaFrom: _DefaultMXBeanMappingFactory$CompositeBuilderViaFrom$$static;
          interface _DefaultMXBeanMappingFactory$CompositeBuilderViaFrom {
            _applicable(getters: java.lang.reflect.Method[]): string;
            _fromCompositeData(cd: javax.management.openmbean.CompositeData, itemNames: string[], converters: MXBeanMapping[]): any;
            _fromMethod: java.lang.reflect.Method;
          }
          interface DefaultMXBeanMappingFactory$CompositeBuilderViaFrom extends CombineTypes<[_DefaultMXBeanMappingFactory$CompositeBuilderViaFrom, com.sun.jmx.mbeanserver.DefaultMXBeanMappingFactory$CompositeBuilder]> {}
          interface _DefaultMXBeanMappingFactory$CompositeBuilderViaProxy$$static extends ClassLike {
            _new(targetClass: java.lang.Class<any>, itemNames: string[]): DefaultMXBeanMappingFactory$CompositeBuilderViaProxy;
          }
          let DefaultMXBeanMappingFactory$CompositeBuilderViaProxy: _DefaultMXBeanMappingFactory$CompositeBuilderViaProxy$$static;
          interface _DefaultMXBeanMappingFactory$CompositeBuilderViaProxy {
            _applicable(getters: java.lang.reflect.Method[]): string;
            _fromCompositeData(cd: javax.management.openmbean.CompositeData, itemNames: string[], converters: MXBeanMapping[]): any;
          }
          interface DefaultMXBeanMappingFactory$CompositeBuilderViaProxy extends CombineTypes<[_DefaultMXBeanMappingFactory$CompositeBuilderViaProxy, com.sun.jmx.mbeanserver.DefaultMXBeanMappingFactory$CompositeBuilder]> {}
          interface _DefaultMXBeanMappingFactory$CompositeBuilderViaSetters$$static extends ClassLike {
            _new(targetClass: java.lang.Class<any>, itemNames: string[]): DefaultMXBeanMappingFactory$CompositeBuilderViaSetters;
          }
          let DefaultMXBeanMappingFactory$CompositeBuilderViaSetters: _DefaultMXBeanMappingFactory$CompositeBuilderViaSetters$$static;
          interface _DefaultMXBeanMappingFactory$CompositeBuilderViaSetters {
            _applicable(getters: java.lang.reflect.Method[]): string;
            _fromCompositeData(cd: javax.management.openmbean.CompositeData, itemNames: string[], converters: MXBeanMapping[]): any;
            _setters: java.lang.reflect.Method[];
          }
          interface DefaultMXBeanMappingFactory$CompositeBuilderViaSetters extends CombineTypes<[_DefaultMXBeanMappingFactory$CompositeBuilderViaSetters, com.sun.jmx.mbeanserver.DefaultMXBeanMappingFactory$CompositeBuilder]> {}
          interface _DefaultMXBeanMappingFactory$CompositeMapping$$static extends ClassLike {
            _new(targetClass: java.lang.Class<any>, compositeType: javax.management.openmbean.CompositeType, itemNames: string[], getters: java.lang.reflect.Method[], factory: MXBeanMappingFactory): DefaultMXBeanMappingFactory$CompositeMapping;
          }
          let DefaultMXBeanMappingFactory$CompositeMapping: _DefaultMXBeanMappingFactory$CompositeMapping$$static;
          interface _DefaultMXBeanMappingFactory$CompositeMapping {
            checkReconstructible(): void;
            _fromNonNullOpenValue(value: any): any;
            _makeCompositeBuilder(): void;
            _toNonNullOpenValue(value: any): any;
            _compositeBuilder: DefaultMXBeanMappingFactory$CompositeBuilder;
            _getterMappings: MXBeanMapping[];
            _getters: java.lang.reflect.Method[];
            _itemNames: string[];
          }
          interface DefaultMXBeanMappingFactory$CompositeMapping extends CombineTypes<[_DefaultMXBeanMappingFactory$CompositeMapping, com.sun.jmx.mbeanserver.DefaultMXBeanMappingFactory$NonNullMXBeanMapping]> {}
          interface _DefaultMXBeanMappingFactory$EnumMapping$$static<T> extends ClassLike {
            _new(enumClass: java.lang.Class<T>): DefaultMXBeanMappingFactory$EnumMapping<T>;
          }
          let DefaultMXBeanMappingFactory$EnumMapping: _DefaultMXBeanMappingFactory$EnumMapping$$static<T>;
          interface _DefaultMXBeanMappingFactory$EnumMapping<T> {
            _fromNonNullOpenValue(value: any): T;
            _fromNonNullOpenValue(a0: any): any;
            _toNonNullOpenValue(value: any): any;
            _enumClass: java.lang.Class<T>;
          }
          interface DefaultMXBeanMappingFactory$EnumMapping<T> extends CombineTypes<[_DefaultMXBeanMappingFactory$EnumMapping<T>, DefaultMXBeanMappingFactory$NonNullMXBeanMapping]> {}
          interface _DefaultMXBeanMappingFactory$IdentityMapping$$static extends ClassLike {
            _new(targetType: java.lang.reflect.Type, openType: javax.management.openmbean.OpenType<any>): DefaultMXBeanMappingFactory$IdentityMapping;
          }
          let DefaultMXBeanMappingFactory$IdentityMapping: _DefaultMXBeanMappingFactory$IdentityMapping$$static;
          interface _DefaultMXBeanMappingFactory$IdentityMapping {
            _fromNonNullOpenValue(openValue: any): any;
            _isIdentity(): boolean;
            _toNonNullOpenValue(javaValue: any): any;
          }
          interface DefaultMXBeanMappingFactory$IdentityMapping extends CombineTypes<[_DefaultMXBeanMappingFactory$IdentityMapping, com.sun.jmx.mbeanserver.DefaultMXBeanMappingFactory$NonNullMXBeanMapping]> {}
          interface _DefaultMXBeanMappingFactory$MXBeanRefMapping$$static extends ClassLike {
            _new(intf: java.lang.reflect.Type): DefaultMXBeanMappingFactory$MXBeanRefMapping;
          }
          let DefaultMXBeanMappingFactory$MXBeanRefMapping: _DefaultMXBeanMappingFactory$MXBeanRefMapping$$static;
          interface _DefaultMXBeanMappingFactory$MXBeanRefMapping {
            _fromNonNullOpenValue(openValue: any): any;
            _lookupNotNull<T>(excClass: java.lang.Class<T>): MXBeanLookup;
            _toNonNullOpenValue(javaValue: any): any;
          }
          interface DefaultMXBeanMappingFactory$MXBeanRefMapping extends CombineTypes<[_DefaultMXBeanMappingFactory$MXBeanRefMapping, com.sun.jmx.mbeanserver.DefaultMXBeanMappingFactory$NonNullMXBeanMapping]> {}
          interface _DefaultMXBeanMappingFactory$Mappings$$static extends ClassLike {
          }
          let DefaultMXBeanMappingFactory$Mappings: _DefaultMXBeanMappingFactory$Mappings$$static;
          interface _DefaultMXBeanMappingFactory$Mappings {
          }
          interface DefaultMXBeanMappingFactory$Mappings extends CombineTypes<[_DefaultMXBeanMappingFactory$Mappings, java.util.WeakHashMap<java.lang.reflect.Type,java.lang.ref.WeakReference<MXBeanMapping>>]> {}
          interface _DefaultMXBeanMappingFactory$NonNullMXBeanMapping$$static extends ClassLike {
            _new(javaType: java.lang.reflect.Type, openType: javax.management.openmbean.OpenType<any>): DefaultMXBeanMappingFactory$NonNullMXBeanMapping;
          }
          let DefaultMXBeanMappingFactory$NonNullMXBeanMapping: _DefaultMXBeanMappingFactory$NonNullMXBeanMapping$$static;
          interface _DefaultMXBeanMappingFactory$NonNullMXBeanMapping {
            _fromNonNullOpenValue(a0: any): any;
            fromOpenValue(openValue: any): any;
            _isIdentity(): boolean;
            _toNonNullOpenValue(a0: any): any;
            toOpenValue(javaValue: any): any;
          }
          interface DefaultMXBeanMappingFactory$NonNullMXBeanMapping extends CombineTypes<[_DefaultMXBeanMappingFactory$NonNullMXBeanMapping, com.sun.jmx.mbeanserver.MXBeanMapping]> {}
          interface _DefaultMXBeanMappingFactory$RecordCompositeBuilder$$static extends ClassLike {
            _new(targetClass: java.lang.Class<any>, itemNames: string[]): DefaultMXBeanMappingFactory$RecordCompositeBuilder;
          }
          let DefaultMXBeanMappingFactory$RecordCompositeBuilder: _DefaultMXBeanMappingFactory$RecordCompositeBuilder$$static;
          interface _DefaultMXBeanMappingFactory$RecordCompositeBuilder {
            _applicable(getters: java.lang.reflect.Method[]): string;
            _fromCompositeData(cd: javax.management.openmbean.CompositeData, itemNames: string[], mappings: MXBeanMapping[]): any;
            _getConstPropValues(ctor: java.lang.reflect.Constructor<any>): string[];
            _matchingMechanism(constr: java.lang.reflect.Constructor<any>): string;
            _referenceMechannism(matchingMechanism: string): string;
            _reportConstructorsAmbiguousFor(names: java.util.Set<string>): string;
            _reportMultipleConstructorsFoundFor(propertyNames: string[]): string;
            _reportMultipleConstructorsFoundFor(...propertyNames: string[]): string;
            _reportNoConstructor(): string;
            _reportNoConstructorFoundFor(names: java.util.Set<string>): string;
          }
          interface DefaultMXBeanMappingFactory$RecordCompositeBuilder extends CombineTypes<[_DefaultMXBeanMappingFactory$RecordCompositeBuilder, com.sun.jmx.mbeanserver.DefaultMXBeanMappingFactory$CompositeBuilderViaConstructor]> {}
          interface _DefaultMXBeanMappingFactory$TabularMapping$$static extends ClassLike {
            _new(targetType: java.lang.reflect.Type, sortedMap: boolean, tabularType: javax.management.openmbean.TabularType, keyConverter: MXBeanMapping, valueConverter: MXBeanMapping): DefaultMXBeanMappingFactory$TabularMapping;
          }
          let DefaultMXBeanMappingFactory$TabularMapping: _DefaultMXBeanMappingFactory$TabularMapping$$static;
          interface _DefaultMXBeanMappingFactory$TabularMapping {
            checkReconstructible(): void;
            _fromNonNullOpenValue(openValue: any): any;
            _toNonNullOpenValue(value: any): any;
            _keyMapping: MXBeanMapping;
            _sortedMap: boolean;
            _valueMapping: MXBeanMapping;
          }
          interface DefaultMXBeanMappingFactory$TabularMapping extends CombineTypes<[_DefaultMXBeanMappingFactory$TabularMapping, com.sun.jmx.mbeanserver.DefaultMXBeanMappingFactory$NonNullMXBeanMapping]> {}
          interface _DescriptorCache$$static extends ClassLike {
            _getInstance(): DescriptorCache;
            getInstance(proof: javax.management.JMX): DescriptorCache;
            _instance: DescriptorCache;
          }
          let DescriptorCache: _DescriptorCache$$static;
          interface _DescriptorCache {
            get(descriptor: javax.management.ImmutableDescriptor): javax.management.ImmutableDescriptor;
            union(descriptors: javax.management.Descriptor[]): javax.management.ImmutableDescriptor;
            union(...descriptors: javax.management.Descriptor[]): javax.management.ImmutableDescriptor;
            _map: java.util.WeakHashMap<javax.management.ImmutableDescriptor,java.lang.ref.WeakReference<javax.management.ImmutableDescriptor>>;
          }
          interface DescriptorCache extends CombineTypes<[_DescriptorCache, java.lang.Object]> {}
          interface _DynamicMBean2$$static extends ClassLike {
          }
          let DynamicMBean2: _DynamicMBean2$$static;
          interface _DynamicMBean2 {
            getClassName(): string;
            getResource(): any;
            preRegister2(a0: javax.management.MBeanServer, a1: javax.management.ObjectName): void;
            registerFailed(): void;
          }
          interface DynamicMBean2 extends CombineTypes<[_DynamicMBean2, java.lang.Object, javax.management.DynamicMBean]> {}
          interface _GetPropertyAction$$static extends ClassLike {
            new(key: string): GetPropertyAction;
          }
          let GetPropertyAction: _GetPropertyAction$$static;
          interface _GetPropertyAction {
            run(): string;
            run(): any;
            _key: string;
          }
          interface GetPropertyAction extends CombineTypes<[_GetPropertyAction, java.lang.Object, java.security.PrivilegedAction<string>]> {}
          interface _Introspector$$static extends ClassLike {
            _annotationToField(x: any): any;
            checkCompliance(mbeanClass: java.lang.Class<any>): void;
            descriptorForAnnotations(annots: java.lang.annotation.Annotation[]): javax.management.Descriptor;
            descriptorForElement(elmt: java.lang.reflect.AnnotatedElement): javax.management.Descriptor;
            elementFromComplex(complex: any, element: string): any;
            _equals(x: any, y: any): boolean;
            _findMBeanInterface<T>(aClass: java.lang.Class<T>, aName: string): java.lang.Class<T>;
            _getClassMBeanInfo<M>(introspector: MBeanIntrospector<M>, baseClass: java.lang.Class<any>, mbeanInterface: java.lang.Class<any>): javax.management.MBeanInfo;
            getMBeanInterface(baseClass: java.lang.Class<any>): java.lang.Class<any>;
            getMXBeanInterface<T>(baseClass: java.lang.Class<T>): java.lang.Class<T>;
            getStandardMBeanInterface<T>(baseClass: java.lang.Class<T>): java.lang.Class<T>;
            _implementsMBean<T>(c: java.lang.Class<T>, clName: string): java.lang.Class<T>;
            isDynamic(c: java.lang.Class<any>): boolean;
            makeDynamicMBean<T>(mbean: T): javax.management.DynamicMBean;
            testCompliance(baseClass: java.lang.Class<any>): javax.management.MBeanInfo;
            testCompliance(baseClass: java.lang.Class<any>, mbeanInterface: java.lang.Class<any>): javax.management.MBeanInfo;
            testComplianceMBeanInterface(interfaceClass: java.lang.Class<any>): void;
            testComplianceMXBeanInterface(interfaceClass: java.lang.Class<any>): void;
            testCreation(c: java.lang.Class<any>): void;
            _throwException(notCompliant: java.lang.Class<any>, cause: java.lang.Throwable): javax.management.NotCompliantMBeanException;
            readonly ALLOW_NONPUBLIC_MBEAN: boolean;
          }
          let Introspector: _Introspector$$static;
          interface _Introspector {
          }
          interface Introspector extends CombineTypes<[_Introspector, java.lang.Object]> {}
          interface _Introspector$SimpleIntrospector$$static extends ClassLike {
            _getCachedMethods(clazz: java.lang.Class<any>): java.util.List<java.lang.reflect.Method>;
            _getReadMethod(clazz: java.lang.Class<any>, property: string): java.lang.reflect.Method;
            _getReadMethods(clazz: java.lang.Class<any>): java.util.List<java.lang.reflect.Method>;
            _isReadMethod(method: java.lang.reflect.Method): boolean;
            _GET_METHOD_PREFIX: string;
            _IS_METHOD_PREFIX: string;
            _cache: java.util.Map<java.lang.Class<any>,java.lang.ref.SoftReference<java.util.List<java.lang.reflect.Method>>>;
          }
          let Introspector$SimpleIntrospector: _Introspector$SimpleIntrospector$$static;
          interface _Introspector$SimpleIntrospector {
          }
          interface Introspector$SimpleIntrospector extends CombineTypes<[_Introspector$SimpleIntrospector, java.lang.Object]> {}
          interface _JavaBeansAccessor$$static extends ClassLike {
            _getConstructorPropertiesValue(ctr: java.lang.reflect.Constructor<any>): string[];
            _getJavaBeansAccess(): jdk.internal.access.JavaBeansAccess;
            _getReadMethod(clazz: java.lang.Class<any>, property: string): java.lang.reflect.Method;
            _isAvailable(): boolean;
            _new(): JavaBeansAccessor;
          }
          let JavaBeansAccessor: _JavaBeansAccessor$$static;
          interface _JavaBeansAccessor {
          }
          interface JavaBeansAccessor extends CombineTypes<[_JavaBeansAccessor, java.lang.Object]> {}
          interface _JmxMBeanServer$$static extends ClassLike {
            _checkMBeanPermission(classname: string, member: string, objectName: javax.management.ObjectName, actions: string): void;
            _checkNewMBeanServerPermission(): void;
            newMBeanServer(defaultDomain: string, outer: javax.management.MBeanServer, delegate: javax.management.MBeanServerDelegate, interceptors: boolean): javax.management.MBeanServer;
            newMBeanServerDelegate(): javax.management.MBeanServerDelegate;
            readonly DEFAULT_FAIR_LOCK_POLICY: boolean;
            _new(domain: string, outer: javax.management.MBeanServer, delegate: javax.management.MBeanServerDelegate): JmxMBeanServer;
            _new(domain: string, outer: javax.management.MBeanServer, delegate: javax.management.MBeanServerDelegate, interceptors: boolean): JmxMBeanServer;
            _new(domain: string, outer: javax.management.MBeanServer, delegate: javax.management.MBeanServerDelegate, instantiator: MBeanInstantiator, interceptors: boolean): JmxMBeanServer;
            _new(domain: string, outer: javax.management.MBeanServer, delegate: javax.management.MBeanServerDelegate, instantiator: MBeanInstantiator, interceptors: boolean, fairLock: boolean): JmxMBeanServer;
          }
          let JmxMBeanServer: _JmxMBeanServer$$static;
          interface _JmxMBeanServer {
            addNotificationListener(name: javax.management.ObjectName, listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, handback: any): void;
            addNotificationListener(name: javax.management.ObjectName, listener: javax.management.ObjectName, filter: javax.management.NotificationFilter, handback: any): void;
            _cloneAttribute(attribute: javax.management.Attribute): javax.management.Attribute;
            _cloneAttributeList(list: javax.management.AttributeList): javax.management.AttributeList;
            _cloneObjectName(name: javax.management.ObjectName): javax.management.ObjectName;
            createMBean(className: string, name: javax.management.ObjectName): javax.management.ObjectInstance;
            createMBean(className: string, name: javax.management.ObjectName, loaderName: javax.management.ObjectName): javax.management.ObjectInstance;
            createMBean(className: string, name: javax.management.ObjectName, params: any[], signature: string[]): javax.management.ObjectInstance;
            createMBean(className: string, name: javax.management.ObjectName, loaderName: javax.management.ObjectName, params: any[], signature: string[]): javax.management.ObjectInstance;
            deserialize(name: javax.management.ObjectName, data: byte[]): java.io.ObjectInputStream;
            deserialize(className: string, data: byte[]): java.io.ObjectInputStream;
            deserialize(className: string, loaderName: javax.management.ObjectName, data: byte[]): java.io.ObjectInputStream;
            getAttribute(name: javax.management.ObjectName, attribute: string): any;
            getAttributes(name: javax.management.ObjectName, attributes: string[]): javax.management.AttributeList;
            getClassLoader(loaderName: javax.management.ObjectName): java.lang.ClassLoader;
            getClassLoaderFor(mbeanName: javax.management.ObjectName): java.lang.ClassLoader;
            getClassLoaderRepository(): javax.management.loading.ClassLoaderRepository;
            getDefaultDomain(): string;
            getDomains(): string[];
            getMBeanCount(): int;
            getMBeanInfo(name: javax.management.ObjectName): javax.management.MBeanInfo;
            getMBeanInstantiator(): MBeanInstantiator;
            getMBeanServerDelegate(): javax.management.MBeanServerDelegate;
            getMBeanServerInterceptor(): javax.management.MBeanServer;
            getObjectInstance(name: javax.management.ObjectName): javax.management.ObjectInstance;
            _initialize(): void;
            instantiate(className: string): any;
            instantiate(className: string, loaderName: javax.management.ObjectName): any;
            instantiate(className: string, params: any[], signature: string[]): any;
            instantiate(className: string, loaderName: javax.management.ObjectName, params: any[], signature: string[]): any;
            interceptorsEnabled(): boolean;
            invoke(name: javax.management.ObjectName, operationName: string, params: any[], signature: string[]): any;
            isInstanceOf(name: javax.management.ObjectName, className: string): boolean;
            isRegistered(name: javax.management.ObjectName): boolean;
            queryMBeans(name: javax.management.ObjectName, query: javax.management.QueryExp): java.util.Set<javax.management.ObjectInstance>;
            queryNames(name: javax.management.ObjectName, query: javax.management.QueryExp): java.util.Set<javax.management.ObjectName>;
            registerMBean(object: any, name: javax.management.ObjectName): javax.management.ObjectInstance;
            removeNotificationListener(name: javax.management.ObjectName, listener: javax.management.NotificationListener): void;
            removeNotificationListener(name: javax.management.ObjectName, listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, handback: any): void;
            removeNotificationListener(name: javax.management.ObjectName, listener: javax.management.ObjectName): void;
            removeNotificationListener(name: javax.management.ObjectName, listener: javax.management.ObjectName, filter: javax.management.NotificationFilter, handback: any): void;
            setAttribute(name: javax.management.ObjectName, attribute: javax.management.Attribute): void;
            setAttributes(name: javax.management.ObjectName, attributes: javax.management.AttributeList): javax.management.AttributeList;
            setMBeanServerInterceptor(interceptor: javax.management.MBeanServer): void;
            unregisterMBean(name: javax.management.ObjectName): void;
            _instantiator: MBeanInstantiator;
            _interceptorsEnabled: boolean;
            _mBeanServerDelegateObject: javax.management.MBeanServerDelegate;
            _mbsInterceptor: javax.management.MBeanServer;
            _outerShell: javax.management.MBeanServer;
            _secureClr: SecureClassLoaderRepository;
          }
          interface JmxMBeanServer extends CombineTypes<[_JmxMBeanServer, com.sun.jmx.mbeanserver.SunJmxMBeanServer, java.lang.Object]> {}
          interface _JmxMBeanServerBuilder$$static extends ClassLike {
            new(): JmxMBeanServerBuilder;
          }
          let JmxMBeanServerBuilder: _JmxMBeanServerBuilder$$static;
          interface _JmxMBeanServerBuilder {
            newMBeanServer(defaultDomain: string, outer: javax.management.MBeanServer, delegate: javax.management.MBeanServerDelegate): javax.management.MBeanServer;
            newMBeanServerDelegate(): javax.management.MBeanServerDelegate;
          }
          interface JmxMBeanServerBuilder extends CombineTypes<[_JmxMBeanServerBuilder, javax.management.MBeanServerBuilder]> {}
          interface _MBeanAnalyzer$$static<M> extends ClassLike {
            _analyzer<M>(mbeanType: java.lang.Class<any>, introspector: MBeanIntrospector<M>): MBeanAnalyzer<M>;
            _eliminateCovariantMethods(startMethods: java.util.List<java.lang.reflect.Method>): java.util.List<java.lang.reflect.Method>;
          }
          let MBeanAnalyzer: _MBeanAnalyzer$$static<M>;
          interface _MBeanAnalyzer<M> {
            _initMaps(mbeanType: java.lang.Class<any>, introspector: MBeanIntrospector<M>): void;
            _visit(visitor: MBeanAnalyzer$MBeanVisitor<M>): void;
            _attrMap: java.util.Map<string,MBeanAnalyzer$AttrMethods<M>>;
            _opMap: java.util.Map<string,java.util.List<M>>;
          }
          interface MBeanAnalyzer<M> extends CombineTypes<[_MBeanAnalyzer<M>, java.lang.Object]> {}
          interface _MBeanAnalyzer$AttrMethods$$static<M> extends ClassLike {
          }
          let MBeanAnalyzer$AttrMethods: _MBeanAnalyzer$AttrMethods$$static<M>;
          interface _MBeanAnalyzer$AttrMethods<M> {
            _getter: M;
            _setter: M;
          }
          interface MBeanAnalyzer$AttrMethods<M> extends CombineTypes<[_MBeanAnalyzer$AttrMethods<M>, java.lang.Object]> {}
          interface _MBeanAnalyzer$MBeanVisitor$$static<M> extends ClassLike {
          }
          let MBeanAnalyzer$MBeanVisitor: _MBeanAnalyzer$MBeanVisitor$$static<M>;
          interface _MBeanAnalyzer$MBeanVisitor<M> {
            visitAttribute(a0: string, a1: M, a2: M): void;
            visitOperation(a0: string, a1: M): void;
          }
          interface MBeanAnalyzer$MBeanVisitor<M> extends CombineTypes<[_MBeanAnalyzer$MBeanVisitor<M>, java.lang.Object]> {}
          interface _MBeanAnalyzer$MethodOrder$$static extends ClassLike {
            readonly instance: MBeanAnalyzer$MethodOrder;
          }
          let MBeanAnalyzer$MethodOrder: _MBeanAnalyzer$MethodOrder$$static;
          interface _MBeanAnalyzer$MethodOrder {
            compare(a: java.lang.reflect.Method, b: java.lang.reflect.Method): int;
            compare(a0: any, a1: any): int;
          }
          interface MBeanAnalyzer$MethodOrder extends CombineTypes<[_MBeanAnalyzer$MethodOrder, java.util.Comparator<java.lang.reflect.Method>, java.lang.Object]> {}
          interface _MBeanInstantiator$$static extends ClassLike {
            _checkMBeanPermission(clazz: java.lang.Class<any>, member: string, objectName: javax.management.ObjectName, actions: string): void;
            _checkMBeanPermission(classname: string, member: string, objectName: javax.management.ObjectName, actions: string): void;
            _ensureClassAccess(clazz: java.lang.Class<any>): void;
            _loadClass(className: string, loader: java.lang.ClassLoader): java.lang.Class<any>;
            _loadSignatureClasses(signature: string[], loader: java.lang.ClassLoader): java.lang.Class<any>[];
            _primitiveClasses: java.util.Map<string,java.lang.Class<any>>;
            _new(clr: ModifiableClassLoaderRepository): MBeanInstantiator;
          }
          let MBeanInstantiator: _MBeanInstantiator$$static;
          interface _MBeanInstantiator {
            deserialize(loader: java.lang.ClassLoader, data: byte[]): java.io.ObjectInputStream;
            deserialize(className: string, loaderName: javax.management.ObjectName, data: byte[], loader: java.lang.ClassLoader): java.io.ObjectInputStream;
            findClass(className: string, loader: java.lang.ClassLoader): java.lang.Class<any>;
            findClass(className: string, aLoader: javax.management.ObjectName): java.lang.Class<any>;
            findClassWithDefaultLoaderRepository(className: string): java.lang.Class<any>;
            _findConstructor(c: java.lang.Class<any>, params: java.lang.Class<any>[]): java.lang.reflect.Constructor<any>;
            findSignatureClasses(signature: string[], loader: java.lang.ClassLoader): java.lang.Class<any>[];
            _getClassLoader(name: javax.management.ObjectName): java.lang.ClassLoader;
            getClassLoaderRepository(): ModifiableClassLoaderRepository;
            instantiate(theClass: java.lang.Class<any>): any;
            instantiate(theClass: java.lang.Class<any>, params: any[], signature: string[], loader: java.lang.ClassLoader): any;
            instantiate(className: string): any;
            instantiate(className: string, loaderName: javax.management.ObjectName, loader: java.lang.ClassLoader): any;
            instantiate(className: string, params: any[], signature: string[], loader: java.lang.ClassLoader): any;
            instantiate(className: string, loaderName: javax.management.ObjectName, params: any[], signature: string[], loader: java.lang.ClassLoader): any;
            testCreation(c: java.lang.Class<any>): void;
            _clr: ModifiableClassLoaderRepository;
          }
          interface MBeanInstantiator extends CombineTypes<[_MBeanInstantiator, java.lang.Object]> {}
          interface _MBeanIntrospector$$static<M> extends ClassLike {
            _findConstructors(c: java.lang.Class<any>): javax.management.MBeanConstructorInfo[];
            _findNotifications(moi: any): javax.management.MBeanNotificationInfo[];
            _isValidParameter(m: java.lang.reflect.Method, value: any, paramNo: int): boolean;
            _unwrapInvocationTargetException(e: java.lang.reflect.InvocationTargetException): void;
            _new(): MBeanIntrospector<M>;
          }
          let MBeanIntrospector: _MBeanIntrospector$$static<M>;
          interface _MBeanIntrospector<M> {
            _checkMethod(a0: M): void;
            _consistent(getter: M, setter: M): boolean;
            _getAnalyzer(a0: java.lang.Class<any>): MBeanAnalyzer<M>;
            _getBasicMBeanDescriptor(): javax.management.Descriptor;
            _getClassMBeanInfo(resourceClass: java.lang.Class<any>, perInterface: PerInterface<M>): javax.management.MBeanInfo;
            _getGenericParameterTypes(a0: M): java.lang.reflect.Type[];
            _getGenericReturnType(a0: M): java.lang.reflect.Type;
            _getMBeanAttributeInfo(a0: string, a1: M, a2: M): javax.management.MBeanAttributeInfo;
            _getMBeanDescriptor(a0: java.lang.Class<any>): javax.management.Descriptor;
            _getMBeanInfo(resource: any, perInterface: PerInterface<M>): javax.management.MBeanInfo;
            _getMBeanInfoMap(): MBeanIntrospector$MBeanInfoMap;
            _getMBeanOperationInfo(a0: string, a1: M): javax.management.MBeanOperationInfo;
            _getMethods(mbeanType: java.lang.Class<any>): java.util.List<java.lang.reflect.Method>;
            _getName(a0: M): string;
            _getPerInterface(mbeanInterface: java.lang.Class<any>): PerInterface<M>;
            _getPerInterfaceMap(): MBeanIntrospector$PerInterfaceMap<M>;
            _getSignature(a0: M): string[];
            _invokeM(m: M, target: any, args: any[], cookie: any): any;
            _invokeM2(a0: M, a1: any, a2: any[], a3: any): any;
            _invokeSetter(name: string, setter: M, target: any, arg: any, cookie: any): void;
            _isMXBean(): boolean;
            _mFrom(a0: java.lang.reflect.Method): M;
            _makeInterfaceMBeanInfo(mbeanInterface: java.lang.Class<any>, analyzer: MBeanAnalyzer<M>): javax.management.MBeanInfo;
            _maybeInvalidParameter(name: string, setter: M, arg: any, cookie: any): void;
            _validParameter(a0: M, a1: any, a2: int, a3: any): boolean;
          }
          interface MBeanIntrospector<M> extends CombineTypes<[_MBeanIntrospector<M>, java.lang.Object]> {}
          interface _MBeanIntrospector$MBeanInfoMaker$$static extends ClassLike {
          }
          let MBeanIntrospector$MBeanInfoMaker: _MBeanIntrospector$MBeanInfoMaker$$static;
          interface _MBeanIntrospector$MBeanInfoMaker {
            _makeMBeanInfo(mbeanInterface: java.lang.Class<any>, description: string): javax.management.MBeanInfo;
            visitAttribute(attributeName: string, getter: M, setter: M): void;
            visitOperation(operationName: string, operation: M): void;
            _attrs: java.util.List<javax.management.MBeanAttributeInfo>;
            _ops: java.util.List<javax.management.MBeanOperationInfo>;
            _this$0: MBeanIntrospector;
          }
          interface MBeanIntrospector$MBeanInfoMaker extends CombineTypes<[_MBeanIntrospector$MBeanInfoMaker, MBeanAnalyzer$MBeanVisitor<M>, java.lang.Object]> {}
          interface _MBeanIntrospector$MBeanInfoMap$$static extends ClassLike {
            _new(): MBeanIntrospector$MBeanInfoMap;
          }
          let MBeanIntrospector$MBeanInfoMap: _MBeanIntrospector$MBeanInfoMap$$static;
          interface _MBeanIntrospector$MBeanInfoMap {
          }
          interface MBeanIntrospector$MBeanInfoMap extends CombineTypes<[_MBeanIntrospector$MBeanInfoMap, java.util.WeakHashMap<java.lang.Class<any>,java.util.WeakHashMap<java.lang.Class<any>,javax.management.MBeanInfo>>]> {}
          interface _MBeanIntrospector$PerInterfaceMap$$static<M> extends ClassLike {
            _new(): MBeanIntrospector$PerInterfaceMap<M>;
          }
          let MBeanIntrospector$PerInterfaceMap: _MBeanIntrospector$PerInterfaceMap$$static<M>;
          interface _MBeanIntrospector$PerInterfaceMap<M> {
          }
          interface MBeanIntrospector$PerInterfaceMap<M> extends CombineTypes<[_MBeanIntrospector$PerInterfaceMap<M>, java.util.WeakHashMap<java.lang.Class<any>,java.lang.ref.WeakReference<PerInterface<M>>>]> {}
          interface _MBeanServerDelegateImpl$$static extends ClassLike {
            _attributeInfos: javax.management.MBeanAttributeInfo[];
            _attributeNames: string[];
            new(): MBeanServerDelegateImpl;
          }
          let MBeanServerDelegateImpl: _MBeanServerDelegateImpl$$static;
          interface _MBeanServerDelegateImpl {
            getAttribute(attribute: string): any;
            getAttributes(attributes: string[]): javax.management.AttributeList;
            getMBeanInfo(): javax.management.MBeanInfo;
            invoke(actionName: string, params: any[], signature: string[]): any;
            postDeregister(): void;
            postRegister(registrationDone: boolean): void;
            preDeregister(): void;
            preRegister(server: javax.management.MBeanServer, name: javax.management.ObjectName): javax.management.ObjectName;
            setAttribute(attribute: javax.management.Attribute): void;
            setAttributes(attributes: javax.management.AttributeList): javax.management.AttributeList;
            _delegateInfo: javax.management.MBeanInfo;
          }
          interface MBeanServerDelegateImpl extends CombineTypes<[_MBeanServerDelegateImpl, javax.management.MBeanRegistration, javax.management.MBeanServerDelegate, javax.management.DynamicMBean]> {}
          interface _MBeanSupport$$static<M> extends ClassLike {
            _new<T>(resource: T, mbeanInterfaceType: java.lang.Class<T>): MBeanSupport<M>;
          }
          let MBeanSupport: _MBeanSupport$$static<M>;
          interface _MBeanSupport<M> {
            getAttribute(attribute: string): any;
            getAttributes(attributes: string[]): javax.management.AttributeList;
            getClassName(): string;
            _getCookie(): any;
            getMBeanInfo(): javax.management.MBeanInfo;
            getMBeanInterface(): java.lang.Class<any>;
            _getMBeanIntrospector(): MBeanIntrospector<M>;
            getResource(): any;
            invoke(operation: string, params: any[], signature: string[]): any;
            isMXBean(): boolean;
            postDeregister(): void;
            postRegister(registrationDone: boolean): void;
            preDeregister(): void;
            preRegister(server: javax.management.MBeanServer, name: javax.management.ObjectName): javax.management.ObjectName;
            preRegister2(server: javax.management.MBeanServer, name: javax.management.ObjectName): void;
            register(a0: javax.management.MBeanServer, a1: javax.management.ObjectName): void;
            registerFailed(): void;
            setAttribute(attribute: javax.management.Attribute): void;
            setAttributes(attributes: javax.management.AttributeList): javax.management.AttributeList;
            unregister(): void;
            _mbeanInfo: javax.management.MBeanInfo;
            _perInterface: PerInterface<M>;
            _resource: any;
          }
          interface MBeanSupport<M> extends CombineTypes<[_MBeanSupport<M>, javax.management.MBeanRegistration, java.lang.Object, DynamicMBean2]> {}
          interface _MXBeanIntrospector$$static extends ClassLike {
            _canUseOpenInfo(type: java.lang.reflect.Type): boolean;
            _getInstance(): MXBeanIntrospector;
            _originalTypeString(type: java.lang.reflect.Type): string;
            _typeDescriptor(openType: javax.management.openmbean.OpenType<any>, originalType: java.lang.reflect.Type): javax.management.Descriptor;
            _typeName(type: java.lang.reflect.Type): string;
            _instance: MXBeanIntrospector;
            _mbeanInfoMap: MBeanIntrospector$MBeanInfoMap;
            _new(): MXBeanIntrospector;
          }
          let MXBeanIntrospector: _MXBeanIntrospector$$static;
          interface _MXBeanIntrospector {
            _checkMethod(m: ConvertingMethod): void;
            _checkMethod(a0: any): void;
            _getAnalyzer(mbeanInterface: java.lang.Class<any>): MBeanAnalyzer<ConvertingMethod>;
            _getBasicMBeanDescriptor(): javax.management.Descriptor;
            _getGenericParameterTypes(m: ConvertingMethod): java.lang.reflect.Type[];
            _getGenericParameterTypes(a0: any): java.lang.reflect.Type[];
            _getGenericReturnType(m: ConvertingMethod): java.lang.reflect.Type;
            _getGenericReturnType(a0: any): java.lang.reflect.Type;
            _getMBeanAttributeInfo(attributeName: string, getter: ConvertingMethod, setter: ConvertingMethod): javax.management.MBeanAttributeInfo;
            _getMBeanAttributeInfo(a0: string, a1: any, a2: any): javax.management.MBeanAttributeInfo;
            _getMBeanDescriptor(resourceClass: java.lang.Class<any>): javax.management.Descriptor;
            _getMBeanInfoMap(): MBeanIntrospector$MBeanInfoMap;
            _getMBeanOperationInfo(operationName: string, operation: ConvertingMethod): javax.management.MBeanOperationInfo;
            _getMBeanOperationInfo(a0: string, a1: any): javax.management.MBeanOperationInfo;
            _getName(m: ConvertingMethod): string;
            _getName(a0: any): string;
            _getPerInterfaceMap(): MBeanIntrospector$PerInterfaceMap<ConvertingMethod>;
            _getSignature(m: ConvertingMethod): string[];
            _getSignature(a0: any): string[];
            _invokeM2(m: ConvertingMethod, target: any, args: any[], cookie: any): any;
            _invokeM2(a0: any, a1: any, a2: any[], a3: any): any;
            _isMXBean(): boolean;
            _mFrom(m: java.lang.reflect.Method): ConvertingMethod;
            _mFrom(a0: java.lang.reflect.Method): any;
            _validParameter(m: ConvertingMethod, value: any, paramNo: int, cookie: any): boolean;
            _validParameter(a0: any, a1: any, a2: int, a3: any): boolean;
            _perInterfaceMap: MBeanIntrospector$PerInterfaceMap<ConvertingMethod>;
          }
          interface MXBeanIntrospector extends CombineTypes<[_MXBeanIntrospector, MBeanIntrospector<ConvertingMethod>]> {}
          interface _MXBeanLookup$$static extends ClassLike {
            _getLookup(): MXBeanLookup;
            _lookupFor(mbsc: javax.management.MBeanServerConnection): MXBeanLookup;
            _setLookup(lookup: MXBeanLookup): void;
            _currentLookup: java.lang.ThreadLocal<MXBeanLookup>;
            _mbscToLookup: WeakIdentityHashMap<javax.management.MBeanServerConnection,java.lang.ref.WeakReference<MXBeanLookup>>;
          }
          let MXBeanLookup: _MXBeanLookup$$static;
          interface _MXBeanLookup {
            _addReference(name: javax.management.ObjectName, mxbean: any): void;
            _mxbeanToObjectName(mxbean: any): javax.management.ObjectName;
            _objectNameToMXBean<T>(name: javax.management.ObjectName, type: java.lang.Class<T>): T;
            _removeReference(name: javax.management.ObjectName, mxbean: any): boolean;
            _mbsc: javax.management.MBeanServerConnection;
            _mxbeanToObjectName: WeakIdentityHashMap<any,javax.management.ObjectName>;
            _objectNameToProxy: java.util.Map<javax.management.ObjectName,java.lang.ref.WeakReference<any>>;
          }
          interface MXBeanLookup extends CombineTypes<[_MXBeanLookup, java.lang.Object]> {}
          interface _MXBeanMapping$$static extends ClassLike {
            _makeOpenClass(javaType: java.lang.reflect.Type, openType: javax.management.openmbean.OpenType<any>): java.lang.Class<any>;
            _new(javaType: java.lang.reflect.Type, openType: javax.management.openmbean.OpenType<any>): MXBeanMapping;
          }
          let MXBeanMapping: _MXBeanMapping$$static;
          interface _MXBeanMapping {
            checkReconstructible(): void;
            fromOpenValue(a0: any): any;
            getJavaType(): java.lang.reflect.Type;
            getOpenClass(): java.lang.Class<any>;
            getOpenType(): javax.management.openmbean.OpenType<any>;
            toOpenValue(a0: any): any;
            _javaType: java.lang.reflect.Type;
            _openClass: java.lang.Class<any>;
            _openType: javax.management.openmbean.OpenType<any>;
          }
          interface MXBeanMapping extends CombineTypes<[_MXBeanMapping, java.lang.Object]> {}
          interface _MXBeanMappingFactory$$static extends ClassLike {
            readonly DEFAULT: MXBeanMappingFactory;
            _new(): MXBeanMappingFactory;
          }
          let MXBeanMappingFactory: _MXBeanMappingFactory$$static;
          interface _MXBeanMappingFactory {
            mappingForType(a0: java.lang.reflect.Type, a1: MXBeanMappingFactory): MXBeanMapping;
(a0: java.lang.reflect.Type, a1: MXBeanMappingFactory): MXBeanMapping;
          }
          interface MXBeanMappingFactory extends CombineTypes<[_MXBeanMappingFactory, java.lang.Object]> {}
          interface _MXBeanProxy$$static extends ClassLike {
            new(mxbeanInterface: java.lang.Class<any>): MXBeanProxy;
          }
          let MXBeanProxy: _MXBeanProxy$$static;
          interface _MXBeanProxy {
            invoke(mbsc: javax.management.MBeanServerConnection, name: javax.management.ObjectName, method: java.lang.reflect.Method, args: any[]): any;
            _handlerMap: java.util.Map<java.lang.reflect.Method,MXBeanProxy$Handler>;
          }
          interface MXBeanProxy extends CombineTypes<[_MXBeanProxy, java.lang.Object]> {}
          interface _MXBeanProxy$GetHandler$$static extends ClassLike {
            _new(attributeName: string, cm: ConvertingMethod): MXBeanProxy$GetHandler;
          }
          let MXBeanProxy$GetHandler: _MXBeanProxy$GetHandler$$static;
          interface _MXBeanProxy$GetHandler {
            _invoke(mbsc: javax.management.MBeanServerConnection, name: javax.management.ObjectName, args: any[]): any;
          }
          interface MXBeanProxy$GetHandler extends CombineTypes<[_MXBeanProxy$GetHandler, com.sun.jmx.mbeanserver.MXBeanProxy$Handler]> {}
          interface _MXBeanProxy$Handler$$static extends ClassLike {
            _new(name: string, cm: ConvertingMethod): MXBeanProxy$Handler;
          }
          let MXBeanProxy$Handler: _MXBeanProxy$Handler$$static;
          interface _MXBeanProxy$Handler {
            _getConvertingMethod(): ConvertingMethod;
            _getName(): string;
            _invoke(a0: javax.management.MBeanServerConnection, a1: javax.management.ObjectName, a2: any[]): any;
(a0: javax.management.MBeanServerConnection, a1: javax.management.ObjectName, a2: any[]): any;
            _convertingMethod: ConvertingMethod;
            _name: string;
          }
          interface MXBeanProxy$Handler extends CombineTypes<[_MXBeanProxy$Handler, java.lang.Object]> {}
          interface _MXBeanProxy$InvokeHandler$$static extends ClassLike {
            _new(operationName: string, signature: string[], cm: ConvertingMethod): MXBeanProxy$InvokeHandler;
          }
          let MXBeanProxy$InvokeHandler: _MXBeanProxy$InvokeHandler$$static;
          interface _MXBeanProxy$InvokeHandler {
            _invoke(mbsc: javax.management.MBeanServerConnection, name: javax.management.ObjectName, args: any[]): any;
            _signature: string[];
          }
          interface MXBeanProxy$InvokeHandler extends CombineTypes<[_MXBeanProxy$InvokeHandler, com.sun.jmx.mbeanserver.MXBeanProxy$Handler]> {}
          interface _MXBeanProxy$SetHandler$$static extends ClassLike {
            _new(attributeName: string, cm: ConvertingMethod): MXBeanProxy$SetHandler;
          }
          let MXBeanProxy$SetHandler: _MXBeanProxy$SetHandler$$static;
          interface _MXBeanProxy$SetHandler {
            _invoke(mbsc: javax.management.MBeanServerConnection, name: javax.management.ObjectName, args: any[]): any;
          }
          interface MXBeanProxy$SetHandler extends CombineTypes<[_MXBeanProxy$SetHandler, com.sun.jmx.mbeanserver.MXBeanProxy$Handler]> {}
          interface _MXBeanProxy$Visitor$$static extends ClassLike {
          }
          let MXBeanProxy$Visitor: _MXBeanProxy$Visitor$$static;
          interface _MXBeanProxy$Visitor {
            visitAttribute(attributeName: string, getter: ConvertingMethod, setter: ConvertingMethod): void;
            visitAttribute(a0: string, a1: any, a2: any): void;
            visitOperation(operationName: string, operation: ConvertingMethod): void;
            visitOperation(a0: string, a1: any): void;
            _this$0: MXBeanProxy;
          }
          interface MXBeanProxy$Visitor extends CombineTypes<[_MXBeanProxy$Visitor, java.lang.Object, MBeanAnalyzer$MBeanVisitor<ConvertingMethod>]> {}
          interface _MXBeanSupport$$static extends ClassLike {
            _findMXBeanInterface<T>(resourceClass: java.lang.Class<T>): java.lang.Class<T>;
            _transitiveInterfaces(c: java.lang.Class<any>): java.util.Set<java.lang.Class<any>>;
            _transitiveInterfaces(c: java.lang.Class<any>, intfs: java.util.Set<java.lang.Class<any>>): void;
            new<T>(resource: T, mxbeanInterface: java.lang.Class<T>): MXBeanSupport;
          }
          let MXBeanSupport: _MXBeanSupport$$static;
          interface _MXBeanSupport {
            _getCookie(): any;
            _getMBeanIntrospector(): MBeanIntrospector<ConvertingMethod>;
            register(server: javax.management.MBeanServer, name: javax.management.ObjectName): void;
            unregister(): void;
            _lock: any;
            _mxbeanLookup: MXBeanLookup;
            _objectName: javax.management.ObjectName;
          }
          interface MXBeanSupport extends CombineTypes<[_MXBeanSupport, MBeanSupport<ConvertingMethod>]> {}
          interface _ModifiableClassLoaderRepository$$static extends ClassLike {
          }
          let ModifiableClassLoaderRepository: _ModifiableClassLoaderRepository$$static;
          interface _ModifiableClassLoaderRepository {
            addClassLoader(a0: java.lang.ClassLoader): void;
            addClassLoader(a0: javax.management.ObjectName, a1: java.lang.ClassLoader): void;
            getClassLoader(a0: javax.management.ObjectName): java.lang.ClassLoader;
            removeClassLoader(a0: java.lang.ClassLoader): void;
            removeClassLoader(a0: javax.management.ObjectName): void;
          }
          interface ModifiableClassLoaderRepository extends CombineTypes<[_ModifiableClassLoaderRepository, java.lang.Object, javax.management.loading.ClassLoaderRepository]> {}
          interface _NamedObject$$static extends ClassLike {
            new(objectName: javax.management.ObjectName, object: javax.management.DynamicMBean): NamedObject;
            new(objectName: string, object: javax.management.DynamicMBean): NamedObject;
          }
          let NamedObject: _NamedObject$$static;
          interface _NamedObject {
            equals(object: any): boolean;
            getName(): javax.management.ObjectName;
            getObject(): javax.management.DynamicMBean;
            hashCode(): int;
            _name: javax.management.ObjectName;
            _object: javax.management.DynamicMBean;
          }
          interface NamedObject extends CombineTypes<[_NamedObject, java.lang.Object]> {}
          interface _ObjectInputStreamWithLoader$$static extends ClassLike {
            new(_in: java.io.InputStream, theLoader: java.lang.ClassLoader): ObjectInputStreamWithLoader;
          }
          let ObjectInputStreamWithLoader: _ObjectInputStreamWithLoader$$static;
          interface _ObjectInputStreamWithLoader {
            _resolveClass(aClass: java.io.ObjectStreamClass): java.lang.Class<any>;
            _loader: java.lang.ClassLoader;
          }
          interface ObjectInputStreamWithLoader extends CombineTypes<[_ObjectInputStreamWithLoader, java.io.ObjectInputStream]> {}
          interface _PerInterface$$static<M> extends ClassLike {
            _new(mbeanInterface: java.lang.Class<any>, introspector: MBeanIntrospector<M>, analyzer: MBeanAnalyzer<M>, mbeanInfo: javax.management.MBeanInfo): PerInterface<M>;
          }
          let PerInterface: _PerInterface$$static<M>;
          interface _PerInterface<M> {
            _getAttribute(resource: any, attribute: string, cookie: any): any;
            _getMBeanInfo(): javax.management.MBeanInfo;
            _getMBeanInterface(): java.lang.Class<any>;
            _invoke(resource: any, operation: string, params: any[], signature: string[], cookie: any): any;
            _isMXBean(): boolean;
            _noSuchMethod(msg: string, resource: any, operation: string, params: any[], signature: string[], cookie: any): any;
            _setAttribute(resource: any, attribute: string, value: any, cookie: any): void;
            _sigString(signature: string[]): string;
            _getters: java.util.Map<string,M>;
            _introspector: MBeanIntrospector<M>;
            _mbeanInfo: javax.management.MBeanInfo;
            _mbeanInterface: java.lang.Class<any>;
            _ops: java.util.Map<string,java.util.List<mbeanserver$MethodAndSig>>;
            _setters: java.util.Map<string,M>;
          }
          interface PerInterface<M> extends CombineTypes<[_PerInterface<M>, java.lang.Object]> {}
          interface _PerInterface$InitMaps$$static extends ClassLike {
          }
          let PerInterface$InitMaps: _PerInterface$InitMaps$$static;
          interface _PerInterface$InitMaps {
            visitAttribute(attributeName: string, getter: M, setter: M): void;
            visitOperation(operationName: string, operation: M): void;
            _this$0: PerInterface;
          }
          interface PerInterface$InitMaps extends CombineTypes<[_PerInterface$InitMaps, MBeanAnalyzer$MBeanVisitor<M>, java.lang.Object]> {}
          interface _PerInterface$MethodAndSig$$static extends ClassLike {
          }
          let PerInterface$MethodAndSig: _PerInterface$MethodAndSig$$static;
          interface _PerInterface$MethodAndSig {
            _method: M;
            _signature: string[];
          }
          interface PerInterface$MethodAndSig extends CombineTypes<[_PerInterface$MethodAndSig, java.lang.Object]> {}
          interface _Repository$$static extends ClassLike {
            new(domain: string): Repository;
            new(domain: string, fairLock: boolean): Repository;
          }
          let Repository: _Repository$$static;
          interface _Repository {
            _addAllMatching(moiTb: java.util.Map<string,NamedObject>, result: java.util.Set<NamedObject>, pattern: javax.management.ObjectName): void;
            addMBean(object: javax.management.DynamicMBean, name: javax.management.ObjectName, context: Repository$RegistrationContext): void;
            _addMoiToTb(object: javax.management.DynamicMBean, name: javax.management.ObjectName, key: string, moiTb: java.util.Map<string,NamedObject>, context: Repository$RegistrationContext): void;
            _addNewDomMoi(object: javax.management.DynamicMBean, dom: string, name: javax.management.ObjectName, context: Repository$RegistrationContext): void;
            contains(name: javax.management.ObjectName): boolean;
            getCount(): int;
            getDefaultDomain(): string;
            getDomains(): string[];
            query(pattern: javax.management.ObjectName, query: javax.management.QueryExp): java.util.Set<NamedObject>;
            _registering(context: Repository$RegistrationContext): void;
            remove(name: javax.management.ObjectName, context: Repository$RegistrationContext): void;
            retrieve(name: javax.management.ObjectName): javax.management.DynamicMBean;
            _retrieveNamedObject(name: javax.management.ObjectName): NamedObject;
            _unregistering(context: Repository$RegistrationContext, name: javax.management.ObjectName): void;
            _domain: string;
            _domainTb: java.util.Map<string,java.util.Map<string,NamedObject>>;
            _lock: java.util.concurrent.locks.ReentrantReadWriteLock;
            _nbElements: int;
          }
          interface Repository extends CombineTypes<[_Repository, java.lang.Object]> {}
          interface _Repository$RegistrationContext$$static extends ClassLike {
          }
          let Repository$RegistrationContext: _Repository$RegistrationContext$$static;
          interface _Repository$RegistrationContext {
            registering(): void;
            unregistered(): void;
          }
          interface Repository$RegistrationContext extends CombineTypes<[_Repository$RegistrationContext, java.lang.Object]> {}
          interface _SecureClassLoaderRepository$$static extends ClassLike {
            new(clr: javax.management.loading.ClassLoaderRepository): SecureClassLoaderRepository;
          }
          let SecureClassLoaderRepository: _SecureClassLoaderRepository$$static;
          interface _SecureClassLoaderRepository {
            loadClass(className: string): java.lang.Class<any>;
            loadClassBefore(loader: java.lang.ClassLoader, className: string): java.lang.Class<any>;
            loadClassWithout(loader: java.lang.ClassLoader, className: string): java.lang.Class<any>;
            _clr: javax.management.loading.ClassLoaderRepository;
          }
          interface SecureClassLoaderRepository extends CombineTypes<[_SecureClassLoaderRepository, java.lang.Object, javax.management.loading.ClassLoaderRepository]> {}
          interface _StandardMBeanIntrospector$$static extends ClassLike {
            _getInstance(): StandardMBeanIntrospector;
            _isDefinitelyImmutableInfo(implClass: java.lang.Class<any>): boolean;
            _definitelyImmutable: java.util.WeakHashMap<java.lang.Class<any>,boolean>;
            _instance: StandardMBeanIntrospector;
            _mbeanInfoMap: MBeanIntrospector$MBeanInfoMap;
            _perInterfaceMap: MBeanIntrospector$PerInterfaceMap<java.lang.reflect.Method>;
            _new(): StandardMBeanIntrospector;
          }
          let StandardMBeanIntrospector: _StandardMBeanIntrospector$$static;
          interface _StandardMBeanIntrospector {
            _checkMethod(m: java.lang.reflect.Method): void;
            _checkMethod(a0: any): void;
            _getAnalyzer(mbeanInterface: java.lang.Class<any>): MBeanAnalyzer<java.lang.reflect.Method>;
            _getBasicMBeanDescriptor(): javax.management.Descriptor;
            _getGenericParameterTypes(m: java.lang.reflect.Method): java.lang.reflect.Type[];
            _getGenericParameterTypes(a0: any): java.lang.reflect.Type[];
            _getGenericReturnType(m: java.lang.reflect.Method): java.lang.reflect.Type;
            _getGenericReturnType(a0: any): java.lang.reflect.Type;
            _getMBeanAttributeInfo(attributeName: string, getter: java.lang.reflect.Method, setter: java.lang.reflect.Method): javax.management.MBeanAttributeInfo;
            _getMBeanAttributeInfo(a0: string, a1: any, a2: any): javax.management.MBeanAttributeInfo;
            _getMBeanDescriptor(resourceClass: java.lang.Class<any>): javax.management.Descriptor;
            _getMBeanInfoMap(): MBeanIntrospector$MBeanInfoMap;
            _getMBeanOperationInfo(operationName: string, operation: java.lang.reflect.Method): javax.management.MBeanOperationInfo;
            _getMBeanOperationInfo(a0: string, a1: any): javax.management.MBeanOperationInfo;
            _getName(m: java.lang.reflect.Method): string;
            _getName(a0: any): string;
            _getPerInterfaceMap(): MBeanIntrospector$PerInterfaceMap<java.lang.reflect.Method>;
            _getSignature(m: java.lang.reflect.Method): string[];
            _getSignature(a0: any): string[];
            _invokeM2(m: java.lang.reflect.Method, target: any, args: any[], cookie: any): any;
            _invokeM2(a0: any, a1: any, a2: any[], a3: any): any;
            _isMXBean(): boolean;
            _mFrom(m: java.lang.reflect.Method): java.lang.reflect.Method;
            _mFrom(a0: java.lang.reflect.Method): any;
            _validParameter(m: java.lang.reflect.Method, value: any, paramNo: int, cookie: any): boolean;
            _validParameter(a0: any, a1: any, a2: int, a3: any): boolean;
          }
          interface StandardMBeanIntrospector extends CombineTypes<[_StandardMBeanIntrospector, MBeanIntrospector<java.lang.reflect.Method>]> {}
          interface _StandardMBeanSupport$$static extends ClassLike {
            new<T>(resource: T, mbeanInterfaceType: java.lang.Class<T>): StandardMBeanSupport;
          }
          let StandardMBeanSupport: _StandardMBeanSupport$$static;
          interface _StandardMBeanSupport {
            _getCookie(): any;
            getMBeanInfo(): javax.management.MBeanInfo;
            _getMBeanIntrospector(): MBeanIntrospector<java.lang.reflect.Method>;
            register(mbs: javax.management.MBeanServer, name: javax.management.ObjectName): void;
            unregister(): void;
          }
          interface StandardMBeanSupport extends CombineTypes<[_StandardMBeanSupport, MBeanSupport<java.lang.reflect.Method>]> {}
          interface _SunJmxMBeanServer$$static extends ClassLike {
          }
          let SunJmxMBeanServer: _SunJmxMBeanServer$$static;
          interface _SunJmxMBeanServer {
            getMBeanInstantiator(): MBeanInstantiator;
            getMBeanServerDelegate(): javax.management.MBeanServerDelegate;
            getMBeanServerInterceptor(): javax.management.MBeanServer;
            interceptorsEnabled(): boolean;
            setMBeanServerInterceptor(a0: javax.management.MBeanServer): void;
          }
          interface SunJmxMBeanServer extends CombineTypes<[_SunJmxMBeanServer, javax.management.MBeanServer, java.lang.Object]> {}
          interface _Util$$static extends ClassLike {
            cast<T>(x: any): T;
            hashCode(names: string[], values: any[]): int;
            _newIdentityHashMap<K, V>(): java.util.IdentityHashMap<K,V>;
            _newInsertionOrderMap<K, V>(): java.util.Map<K,V>;
            _newList<E>(): java.util.List<E>;
            _newList<E>(c: java.util.Collection<E>): java.util.List<E>;
            _newMap<K, V>(): java.util.Map<K,V>;
            newObjectName(string: string): javax.management.ObjectName;
            _newSet<E>(): java.util.Set<E>;
            _newSet<E>(c: java.util.Collection<E>): java.util.Set<E>;
            _newSortedMap<K, V>(): java.util.SortedMap<K,V>;
            _newSortedMap<K, V>(comp: java.util.Comparator<K>): java.util.SortedMap<K,V>;
            _newSynchronizedIdentityHashMap<K, V>(): java.util.Map<K,V>;
            _newSynchronizedMap<K, V>(): java.util.Map<K,V>;
            wildmatch(str: string, pat: string, stri: int, strend: int, pati: int, patend: int): boolean;
            wildmatch(str: string, pat: string): boolean;
            new(): Util;
          }
          let Util: _Util$$static;
          interface _Util {
          }
          interface Util extends CombineTypes<[_Util, java.lang.Object]> {}
          interface _WeakIdentityHashMap$$static<K,V> extends ClassLike {
            _make<K, V>(): WeakIdentityHashMap<K,V>;
          }
          let WeakIdentityHashMap: _WeakIdentityHashMap$$static<K,V>;
          interface _WeakIdentityHashMap<K,V> {
            _expunge(): void;
            _get(key: K): V;
            _makeReference(referent: K): java.lang.ref.WeakReference<K>;
            _makeReference(referent: K, q: java.lang.ref.ReferenceQueue<K>): java.lang.ref.WeakReference<K>;
            put(key: K, value: V): V;
            remove(key: K): V;
            _map: java.util.Map<java.lang.ref.WeakReference<K>,V>;
            _refQueue: java.lang.ref.ReferenceQueue<K>;
          }
          interface WeakIdentityHashMap<K,V> extends CombineTypes<[_WeakIdentityHashMap<K,V>, java.lang.Object]> {}
          interface _WeakIdentityHashMap$IdentityWeakReference$$static<T> extends ClassLike {
            _new(o: T): WeakIdentityHashMap$IdentityWeakReference<T>;
            _new(o: T, q: java.lang.ref.ReferenceQueue<T>): WeakIdentityHashMap$IdentityWeakReference<T>;
          }
          let WeakIdentityHashMap$IdentityWeakReference: _WeakIdentityHashMap$IdentityWeakReference$$static<T>;
          interface _WeakIdentityHashMap$IdentityWeakReference<T> {
            equals(o: any): boolean;
            hashCode(): int;
            _hashCode: int;
          }
          interface WeakIdentityHashMap$IdentityWeakReference<T> extends CombineTypes<[_WeakIdentityHashMap$IdentityWeakReference<T>, java.lang.ref.WeakReference<T>]> {}
        }
        module remote {
          module internal {
            interface _ArrayNotificationBuffer$$static extends ClassLike {
              _extractException(e: java.lang.Exception): java.lang.Exception;
              getNotificationBuffer(mbs: javax.management.MBeanServer, env: java.util.Map<string,any>): NotificationBuffer;
              _isInstanceOf(mbs: javax.management.MBeanServer, name: javax.management.ObjectName, className: string): boolean;
              _removeNotificationBuffer(mbs: javax.management.MBeanServer): void;
              _broadcasterClass: string;
              _broadcasterQuery: javax.management.QueryExp;
              _creationFilter: javax.management.NotificationFilter;
              _globalLock: any;
              _logger: remote.util.ClassLogger;
              _mbsToBuffer: java.util.HashMap<javax.management.MBeanServer,ArrayNotificationBuffer>;
            }
            let ArrayNotificationBuffer: _ArrayNotificationBuffer$$static;
            interface _ArrayNotificationBuffer {
              _addBufferListener(name: javax.management.ObjectName): void;
              _addNotification(notif: ArrayNotificationBuffer$NamedNotification): void;
              _addNotificationListener(name: javax.management.ObjectName, listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, handback: any): void;
              _addSharer(sharer: ArrayNotificationBuffer$ShareBuffer): void;
              _checkNoLocks(): void;
              _createListeners(): void;
              _createdNotification(n: javax.management.MBeanServerNotification): void;
              _destroyListeners(): void;
              dispose(): void;
              _dropNotification(): void;
              _earliestSequenceNumber(): long;
              fetchNotifications(filter: NotificationBufferFilter, startSequenceNumber: long, a2: long, timeout: int): javax.management.remote.NotificationResult;
              _isDisposed(): boolean;
              _nextSequenceNumber(): long;
              _notificationAt(seqNo: long): ArrayNotificationBuffer$NamedNotification;
              _queryNames(name: javax.management.ObjectName, query: javax.management.QueryExp): java.util.Set<javax.management.ObjectName>;
              _removeBufferListener(name: javax.management.ObjectName): void;
              _removeNotificationListener(name: javax.management.ObjectName, listener: javax.management.NotificationListener): void;
              _removeSharer(sharer: ArrayNotificationBuffer$ShareBuffer): void;
              _resize(newSize: int): void;
              _bufferListener: javax.management.NotificationListener;
              _createdDuringQuery: java.util.Set<javax.management.ObjectName>;
              _creationListener: javax.management.NotificationListener;
              _disposed: boolean;
              _earliestSequenceNumber: long;
              _mBeanServer: javax.management.MBeanServer;
              _nextSequenceNumber: long;
              _queue: ArrayQueue<ArrayNotificationBuffer$NamedNotification>;
              _queueSize: int;
              _sharers: java.util.Collection<ArrayNotificationBuffer$ShareBuffer>;
            }
            interface ArrayNotificationBuffer extends CombineTypes<[_ArrayNotificationBuffer, com.sun.jmx.remote.internal.NotificationBuffer, java.lang.Object]> {}
            interface _ArrayNotificationBuffer$BroadcasterQuery$$static extends ClassLike {
              _serialVersionUID: long;
            }
            let ArrayNotificationBuffer$BroadcasterQuery: _ArrayNotificationBuffer$BroadcasterQuery$$static;
            interface _ArrayNotificationBuffer$BroadcasterQuery {
              apply(name: javax.management.ObjectName): boolean;
            }
            interface ArrayNotificationBuffer$BroadcasterQuery extends CombineTypes<[_ArrayNotificationBuffer$BroadcasterQuery, javax.management.QueryExp, javax.management.QueryEval]> {}
            interface _ArrayNotificationBuffer$BufferListener$$static extends ClassLike {
            }
            let ArrayNotificationBuffer$BufferListener: _ArrayNotificationBuffer$BufferListener$$static;
            interface _ArrayNotificationBuffer$BufferListener {
              handleNotification(notif: javax.management.Notification, handback: any): void;
              _this$0: ArrayNotificationBuffer;
            }
            interface ArrayNotificationBuffer$BufferListener extends CombineTypes<[_ArrayNotificationBuffer$BufferListener, javax.management.NotificationListener, java.lang.Object]> {}
            interface _ArrayNotificationBuffer$NamedNotification$$static extends ClassLike {
              _new(sender: javax.management.ObjectName, notif: javax.management.Notification): ArrayNotificationBuffer$NamedNotification;
            }
            let ArrayNotificationBuffer$NamedNotification: _ArrayNotificationBuffer$NamedNotification$$static;
            interface _ArrayNotificationBuffer$NamedNotification {
              _getNotification(): javax.management.Notification;
              _getObjectName(): javax.management.ObjectName;
              toString(): string;
              _notification: javax.management.Notification;
              _sender: javax.management.ObjectName;
            }
            interface ArrayNotificationBuffer$NamedNotification extends CombineTypes<[_ArrayNotificationBuffer$NamedNotification, java.lang.Object]> {}
            interface _ArrayNotificationBuffer$ShareBuffer$$static extends ClassLike {
              _new(a0: ArrayNotificationBuffer, size: int): ArrayNotificationBuffer$ShareBuffer;
            }
            let ArrayNotificationBuffer$ShareBuffer: _ArrayNotificationBuffer$ShareBuffer$$static;
            interface _ArrayNotificationBuffer$ShareBuffer {
              dispose(): void;
              fetchNotifications(filter: NotificationBufferFilter, startSequenceNumber: long, a2: long, timeout: int): javax.management.remote.NotificationResult;
              _getSize(): int;
              _size: int;
              _this$0: ArrayNotificationBuffer;
            }
            interface ArrayNotificationBuffer$ShareBuffer extends CombineTypes<[_ArrayNotificationBuffer$ShareBuffer, com.sun.jmx.remote.internal.NotificationBuffer, java.lang.Object]> {}
            interface _ArrayQueue$$static<T> extends ClassLike {
              new(capacity: int): ArrayQueue<T>;
            }
            let ArrayQueue: _ArrayQueue$$static<T>;
            interface _ArrayQueue<T> {
              add(o: T): boolean;
              get(i: int): T;
              _newArray(size: int): T[];
              remove(i: int): T;
              resize(newcapacity: int): void;
              size(): int;
              _capacity: int;
              _head: int;
              _queue: T[];
              _tail: int;
            }
            interface ArrayQueue<T> extends CombineTypes<[_ArrayQueue<T>, java.util.AbstractList<T>]> {}
            interface _ClientCommunicatorAdmin$$static extends ClassLike {
              _CONNECTED: int;
              _FAILED: int;
              _RE_CONNECTING: int;
              _TERMINATED: int;
              _logger: remote.util.ClassLogger;
              _threadNo: long;
              new(period: long): ClientCommunicatorAdmin;
            }
            let ClientCommunicatorAdmin: _ClientCommunicatorAdmin$$static;
            interface _ClientCommunicatorAdmin {
              _checkConnection(): void;
              _doStart(): void;
              _doStop(): void;
              gotIOException(ioe: java.io.IOException): void;
              _restart(ioe: java.io.IOException): void;
              terminate(): void;
              _checker: ClientCommunicatorAdmin$Checker;
              _lock: int[];
              _period: long;
              _state: int;
            }
            interface ClientCommunicatorAdmin extends CombineTypes<[_ClientCommunicatorAdmin, java.lang.Object]> {}
            interface _ClientCommunicatorAdmin$Checker$$static extends ClassLike {
            }
            let ClientCommunicatorAdmin$Checker: _ClientCommunicatorAdmin$Checker$$static;
            interface _ClientCommunicatorAdmin$Checker {
              run(): void;
              _stop(): void;
              _myThread: java.lang.Thread;
              _this$0: ClientCommunicatorAdmin;
            }
            interface ClientCommunicatorAdmin$Checker extends CombineTypes<[_ClientCommunicatorAdmin$Checker, java.lang.Object, java.lang.Runnable]> {}
            interface _ClientListenerInfo$$static extends ClassLike {
              new(listenerID: int, name: javax.management.ObjectName, listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, handback: any, delegationSubject: javax.security.auth.Subject): ClientListenerInfo;
            }
            let ClientListenerInfo: _ClientListenerInfo$$static;
            interface _ClientListenerInfo {
              getDelegationSubject(): javax.security.auth.Subject;
              getHandback(): any;
              getListener(): javax.management.NotificationListener;
              getListenerID(): int;
              getNotificationFilter(): javax.management.NotificationFilter;
              getObjectName(): javax.management.ObjectName;
              sameAs(name: javax.management.ObjectName): boolean;
              sameAs(name: javax.management.ObjectName, listener: javax.management.NotificationListener): boolean;
              sameAs(name: javax.management.ObjectName, listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, handback: any): boolean;
              _delegationSubject: javax.security.auth.Subject;
              _filter: javax.management.NotificationFilter;
              _handback: any;
              _listener: javax.management.NotificationListener;
              _listenerID: int;
              _name: javax.management.ObjectName;
            }
            interface ClientListenerInfo extends CombineTypes<[_ClientListenerInfo, java.lang.Object]> {}
            interface _ClientNotifForwarder$$static extends ClassLike {
              _STARTED: int;
              _STARTING: int;
              _STOPPED: int;
              _STOPPING: int;
              _TERMINATED: int;
              _logger: remote.util.ClassLogger;
              _threadId: int;
              new(env: java.util.Map<string,any>): ClientNotifForwarder;
              new(defaultClassLoader: java.lang.ClassLoader, env: java.util.Map<string,any>): ClientNotifForwarder;
            }
            let ClientNotifForwarder: _ClientNotifForwarder$$static;
            interface _ClientNotifForwarder {
              _addListenerForMBeanRemovedNotif(): int;
              addNotificationListener(listenerID: int, name: javax.management.ObjectName, listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, handback: any, delegationSubject: javax.security.auth.Subject): void;
              _beforeRemove(): void;
              _fetchNotifs(a0: long, a1: int, a2: long): javax.management.remote.NotificationResult;
              getListenerId(name: javax.management.ObjectName, listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, handback: any): int;
              getListenerIds(name: javax.management.ObjectName, listener: javax.management.NotificationListener): int[];
              _init(reconnected: boolean): void;
              _lostNotifs(a0: string, a1: long): void;
              postReconnection(listenerInfos: ClientListenerInfo[]): void;
              preReconnection(): ClientListenerInfo[];
              _removeListenerForMBeanRemovedNotif(a0: int): void;
              removeNotificationListener(name: javax.management.ObjectName, listener: javax.management.NotificationListener): int[];
              removeNotificationListener(name: javax.management.ObjectName, listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, handback: any): int;
              removeNotificationListener(name: javax.management.ObjectName): int[];
              _setState(newState: int): void;
              terminate(): void;
              _acc: java.security.AccessControlContext;
              _beingReconnected: boolean;
              _clientSequenceNumber: long;
              _currentFetchThread: java.lang.Thread;
              _defaultClassLoader: java.lang.ClassLoader;
              _executor: java.util.concurrent.Executor;
              _infoList: java.util.Map<int,ClientListenerInfo>;
              _maxNotifications: int;
              _mbeanRemovedNotifID: int;
              _state: int;
              _timeout: long;
            }
            interface ClientNotifForwarder extends CombineTypes<[_ClientNotifForwarder, java.lang.Object]> {}
            interface _ClientNotifForwarder$LinearExecutor$$static extends ClassLike {
            }
            let ClientNotifForwarder$LinearExecutor: _ClientNotifForwarder$LinearExecutor$$static;
            interface _ClientNotifForwarder$LinearExecutor {
              execute(command: java.lang.Runnable): void;
              _command: java.lang.Runnable;
              _thread: java.lang.Thread;
            }
            interface ClientNotifForwarder$LinearExecutor extends CombineTypes<[_ClientNotifForwarder$LinearExecutor, java.util.concurrent.Executor, java.lang.Object]> {}
            interface _ClientNotifForwarder$NotifFetcher$$static extends ClassLike {
            }
            let ClientNotifForwarder$NotifFetcher: _ClientNotifForwarder$NotifFetcher$$static;
            interface _ClientNotifForwarder$NotifFetcher {
              _dispatchNotification(tn: javax.management.remote.TargetedNotification, myListenerID: int, listeners: java.util.Map<int,ClientListenerInfo>): void;
              _doRun(): void;
              _fetchNotifs(): javax.management.remote.NotificationResult;
              _fetchOneNotif(): javax.management.remote.NotificationResult;
              _isRejectedExecutionException(e: java.lang.Exception): boolean;
              _logOnce(msg: string, x: java.lang.SecurityException): void;
              run(): void;
              _setContextClassLoader(loader: java.lang.ClassLoader): java.lang.ClassLoader;
              _shouldStop(): boolean;
              _alreadyLogged: boolean;
              _this$0: ClientNotifForwarder;
            }
            interface ClientNotifForwarder$NotifFetcher extends CombineTypes<[_ClientNotifForwarder$NotifFetcher, java.lang.Object, java.lang.Runnable]> {}
            interface _NotificationBuffer$$static extends ClassLike {
            }
            let NotificationBuffer: _NotificationBuffer$$static;
            interface _NotificationBuffer {
              dispose(): void;
              fetchNotifications(a0: NotificationBufferFilter, a1: long, a2: long, a3: int): javax.management.remote.NotificationResult;
            }
            interface NotificationBuffer extends CombineTypes<[_NotificationBuffer, java.lang.Object]> {}
            interface _NotificationBufferFilter$$static extends ClassLike {
            }
            let NotificationBufferFilter: _NotificationBufferFilter$$static;
            interface _NotificationBufferFilter {
              apply(a0: java.util.List<javax.management.remote.TargetedNotification>, a1: javax.management.ObjectName, a2: javax.management.Notification): void;
(a0: java.util.List<javax.management.remote.TargetedNotification>, a1: javax.management.ObjectName, a2: javax.management.Notification): void;
            }
            interface NotificationBufferFilter extends CombineTypes<[_NotificationBufferFilter, java.lang.Object]> {}
            interface _ServerCommunicatorAdmin$$static extends ClassLike {
              _logger: remote.util.ClassLogger;
              _timelogger: remote.util.ClassLogger;
              new(timeout: long): ServerCommunicatorAdmin;
            }
            let ServerCommunicatorAdmin: _ServerCommunicatorAdmin$$static;
            interface _ServerCommunicatorAdmin {
              _doStop(): void;
(): void;
              _logtime(desc: string, time: long): void;
              reqIncoming(): boolean;
              rspOutgoing(): boolean;
              terminate(): void;
              _currentJobs: int;
              _lock: int[];
              _terminated: boolean;
              _timeout: long;
              _timestamp: long;
            }
            interface ServerCommunicatorAdmin extends CombineTypes<[_ServerCommunicatorAdmin, java.lang.Object]> {}
            interface _ServerCommunicatorAdmin$Timeout$$static extends ClassLike {
            }
            let ServerCommunicatorAdmin$Timeout: _ServerCommunicatorAdmin$Timeout$$static;
            interface _ServerCommunicatorAdmin$Timeout {
              run(): void;
              _this$0: ServerCommunicatorAdmin;
            }
            interface ServerCommunicatorAdmin$Timeout extends CombineTypes<[_ServerCommunicatorAdmin$Timeout, java.lang.Object, java.lang.Runnable]> {}
            interface _ServerNotifForwarder$$static extends ClassLike {
              _checkMBeanPermission(mbs: javax.management.MBeanServer, name: javax.management.ObjectName, actions: string): void;
              _extractException(e: java.lang.Exception): java.lang.Exception;
              _broadcasterClass: string;
              _listenerCounter: int;
              _listenerCounterLock: int[];
              _logger: remote.util.ClassLogger;
              new(mbeanServer: javax.management.MBeanServer, env: java.util.Map<string,any>, notifBuffer: NotificationBuffer, connectionId: string): ServerNotifForwarder;
            }
            let ServerNotifForwarder: _ServerNotifForwarder$$static;
            interface _ServerNotifForwarder {
              addNotificationListener(name: javax.management.ObjectName, filter: javax.management.NotificationFilter): int;
              _allowNotificationEmission(name: javax.management.ObjectName, tn: javax.management.remote.TargetedNotification): boolean;
              checkMBeanPermission(name: javax.management.ObjectName, actions: string): void;
              _checkState(): void;
              fetchNotifs(startSequenceNumber: long, a1: long, timeout: int): javax.management.remote.NotificationResult;
              _getListenerID(): int;
              _getSubject(): javax.security.auth.Subject;
              removeNotificationListener(name: javax.management.ObjectName, listenerIDs: int[]): void;
              removeNotificationListener(name: javax.management.ObjectName, listenerID: int): void;
              _snoopOnUnregister(nr: javax.management.remote.NotificationResult): void;
              terminate(): void;
              _bufferFilter: ServerNotifForwarder$NotifForwarderBufferFilter;
              _checkNotificationEmission: boolean;
              _connectionId: string;
              _connectionTimeout: long;
              _listenerMap: java.util.Map<javax.management.ObjectName,java.util.Set<ServerNotifForwarder$IdAndFilter>>;
              _mbeanServer: javax.management.MBeanServer;
              _notifBuffer: NotificationBuffer;
              _notificationAccessController: remote.security.NotificationAccessController;
              _terminated: boolean;
              _terminationLock: int[];
            }
            interface ServerNotifForwarder extends CombineTypes<[_ServerNotifForwarder, java.lang.Object]> {}
            interface _ServerNotifForwarder$IdAndFilter$$static extends ClassLike {
              _new(id: int, filter: javax.management.NotificationFilter): ServerNotifForwarder$IdAndFilter;
            }
            let ServerNotifForwarder$IdAndFilter: _ServerNotifForwarder$IdAndFilter$$static;
            interface _ServerNotifForwarder$IdAndFilter {
              equals(o: any): boolean;
              _getFilter(): javax.management.NotificationFilter;
              _getId(): int;
              hashCode(): int;
              _filter: javax.management.NotificationFilter;
              _id: int;
            }
            interface ServerNotifForwarder$IdAndFilter extends CombineTypes<[_ServerNotifForwarder$IdAndFilter, java.lang.Object]> {}
            interface _ServerNotifForwarder$NotifForwarderBufferFilter$$static extends ClassLike {
              _new(this$0: ServerNotifForwarder): ServerNotifForwarder$NotifForwarderBufferFilter;
            }
            let ServerNotifForwarder$NotifForwarderBufferFilter: _ServerNotifForwarder$NotifForwarderBufferFilter$$static;
            interface _ServerNotifForwarder$NotifForwarderBufferFilter {
              apply(targetedNotifs: java.util.List<javax.management.remote.TargetedNotification>, source: javax.management.ObjectName, notif: javax.management.Notification): void;
              _this$0: ServerNotifForwarder;
            }
            interface ServerNotifForwarder$NotifForwarderBufferFilter extends CombineTypes<[_ServerNotifForwarder$NotifForwarderBufferFilter, java.lang.Object, com.sun.jmx.remote.internal.NotificationBufferFilter]> {}
          }
          module security {
            interface _FileLoginModule$$static extends ClassLike {
              _DEFAULT_PASSWORD_FILE_NAME: string;
              _PASSWORD_FILE_NAME: string;
              _PASSWORD_KEY: string;
              _USERNAME_KEY: string;
              _logger: remote.util.ClassLogger;
              new(): FileLoginModule;
            }
            let FileLoginModule: _FileLoginModule$$static;
            interface _FileLoginModule {
              abort(): boolean;
              _attemptAuthentication(usePasswdFromSharedState: boolean): void;
              _cleanState(): void;
              commit(): boolean;
              _getUsernamePassword(usePasswdFromSharedState: boolean): void;
              initialize(subject: javax.security.auth.Subject, callbackHandler: javax.security.auth.callback.CallbackHandler, sharedState: java.util.Map<string,any>, options: java.util.Map<string,any>): void;
              login(): boolean;
              logout(): boolean;
              _callbackHandler: javax.security.auth.callback.CallbackHandler;
              _clearPass: boolean;
              _commitSucceeded: boolean;
              _hasJavaHomePermission: boolean;
              _hashPasswords: boolean;
              _hashPwdMgr: HashedPasswordManager;
              _options: java.util.Map<string,any>;
              _password: char[];
              _passwordFile: string;
              _passwordFileDisplayName: string;
              _sharedState: java.util.Map<string,any>;
              _storePass: boolean;
              _subject: javax.security.auth.Subject;
              _succeeded: boolean;
              _tryFirstPass: boolean;
              _useFirstPass: boolean;
              _user: javax.management.remote.JMXPrincipal;
              _userSuppliedPasswordFile: boolean;
              _username: string;
            }
            interface FileLoginModule extends CombineTypes<[_FileLoginModule, javax.security.auth.spi.LoginModule, java.lang.Object]> {}
            interface _HashedPasswordManager$$static extends ClassLike {
              _DefaultHashAlgorithm: string;
              _DefaultSaltLength: int;
              _logger: remote.util.ClassLogger;
              new(filename: string, shouldHashPasswords: boolean): HashedPasswordManager;
            }
            let HashedPasswordManager: _HashedPasswordManager$$static;
            interface _HashedPasswordManager {
              authenticate(userName: string, inputPassword: char[]): boolean;
              _getHash(algorithm: string, password: string): string[];
              loadPasswords(): void;
              _readPasswordFile(): string[];
              _writePasswordFile(input: string): void;
              _isLogged: boolean;
              _passwordFile: string;
              _random: java.security.SecureRandom;
              _shouldHashPasswords: boolean;
              _userCredentialsMap: java.util.Map<string,HashedPasswordManager$UserCredentials>;
            }
            interface HashedPasswordManager extends CombineTypes<[_HashedPasswordManager, java.lang.Object]> {}
            interface _HashedPasswordManager$UserCredentials$$static extends ClassLike {
              new(userName: string, hashAlgorithm: string, b64Salt: string, b64Hash: string): HashedPasswordManager$UserCredentials;
            }
            let HashedPasswordManager$UserCredentials: _HashedPasswordManager$UserCredentials$$static;
            interface _HashedPasswordManager$UserCredentials {
              toString(): string;
              _b64Hash: string;
              _b64Salt: string;
              _hashAlgorithm: string;
              _userName: string;
            }
            interface HashedPasswordManager$UserCredentials extends CombineTypes<[_HashedPasswordManager$UserCredentials, java.lang.Object]> {}
            interface _JMXPluggableAuthenticator$$static extends ClassLike {
              _authenticationFailure(method: string, message: string): void;
              _authenticationFailure(method: string, exception: java.lang.Exception): void;
              _logException(method: string, message: string, e: java.lang.Exception): void;
              _HASH_PASSWORDS: string;
              _LOGIN_CONFIG_NAME: string;
              _LOGIN_CONFIG_PROP: string;
              _PASSWORD_FILE_PROP: string;
              _logger: remote.util.ClassLogger;
              new(env: java.util.Map<any,any>): JMXPluggableAuthenticator;
            }
            let JMXPluggableAuthenticator: _JMXPluggableAuthenticator$$static;
            interface _JMXPluggableAuthenticator {
              authenticate(credentials: any): javax.security.auth.Subject;
              _loginContext: javax.security.auth.login.LoginContext;
              _password: string;
              _username: string;
            }
            interface JMXPluggableAuthenticator extends CombineTypes<[_JMXPluggableAuthenticator, java.lang.Object, javax.management.remote.JMXAuthenticator]> {}
            interface _JMXPluggableAuthenticator$FileLoginConfig$$static extends ClassLike {
              _FILE_LOGIN_MODULE: string;
              _HASH_PASSWORDS: string;
              _PASSWORD_FILE_OPTION: string;
              new(passwordFile: string, hashPasswords: string): JMXPluggableAuthenticator$FileLoginConfig;
            }
            let JMXPluggableAuthenticator$FileLoginConfig: _JMXPluggableAuthenticator$FileLoginConfig$$static;
            interface _JMXPluggableAuthenticator$FileLoginConfig {
              getAppConfigurationEntry(name: string): javax.security.auth.login.AppConfigurationEntry[];
              refresh(): void;
              _entries: javax.security.auth.login.AppConfigurationEntry[];
            }
            interface JMXPluggableAuthenticator$FileLoginConfig extends CombineTypes<[_JMXPluggableAuthenticator$FileLoginConfig, javax.security.auth.login.Configuration]> {}
            interface _JMXPluggableAuthenticator$JMXCallbackHandler$$static extends ClassLike {
            }
            let JMXPluggableAuthenticator$JMXCallbackHandler: _JMXPluggableAuthenticator$JMXCallbackHandler$$static;
            interface _JMXPluggableAuthenticator$JMXCallbackHandler {
              handle(callbacks: javax.security.auth.callback.Callback[]): void;
              _this$0: JMXPluggableAuthenticator;
            }
            interface JMXPluggableAuthenticator$JMXCallbackHandler extends CombineTypes<[_JMXPluggableAuthenticator$JMXCallbackHandler, javax.security.auth.callback.CallbackHandler, java.lang.Object]> {}
            interface _JMXSubjectDomainCombiner$$static extends ClassLike {
              getContext(subject: javax.security.auth.Subject): java.security.AccessControlContext;
              getDomainCombinerContext(subject: javax.security.auth.Subject): java.security.AccessControlContext;
              _nullCodeSource: java.security.CodeSource;
              _pdNoPerms: java.security.ProtectionDomain;
              new(s: javax.security.auth.Subject): JMXSubjectDomainCombiner;
            }
            let JMXSubjectDomainCombiner: _JMXSubjectDomainCombiner$$static;
            interface _JMXSubjectDomainCombiner {
              combine(current: java.security.ProtectionDomain[], assigned: java.security.ProtectionDomain[]): java.security.ProtectionDomain[];
            }
            interface JMXSubjectDomainCombiner extends CombineTypes<[_JMXSubjectDomainCombiner, javax.security.auth.SubjectDomainCombiner]> {}
            interface _MBeanServerAccessController$$static extends ClassLike {
              new(): MBeanServerAccessController;
            }
            let MBeanServerAccessController: _MBeanServerAccessController$$static;
            interface _MBeanServerAccessController {
              addNotificationListener(name: javax.management.ObjectName, listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, handback: any): void;
              addNotificationListener(name: javax.management.ObjectName, listener: javax.management.ObjectName, filter: javax.management.NotificationFilter, handback: any): void;
              _checkClassLoader(object: any): void;
              _checkCreate(className: string): void;
              _checkMLetMethods(name: javax.management.ObjectName, operation: string): void;
              _checkRead(): void;
              _checkUnregister(name: javax.management.ObjectName): void;
              _checkWrite(): void;
              createMBean(className: string, name: javax.management.ObjectName): javax.management.ObjectInstance;
              createMBean(className: string, name: javax.management.ObjectName, params: any[], signature: string[]): javax.management.ObjectInstance;
              createMBean(className: string, name: javax.management.ObjectName, loaderName: javax.management.ObjectName): javax.management.ObjectInstance;
              createMBean(className: string, name: javax.management.ObjectName, loaderName: javax.management.ObjectName, params: any[], signature: string[]): javax.management.ObjectInstance;
              deserialize(name: javax.management.ObjectName, data: byte[]): java.io.ObjectInputStream;
              deserialize(className: string, data: byte[]): java.io.ObjectInputStream;
              deserialize(className: string, loaderName: javax.management.ObjectName, data: byte[]): java.io.ObjectInputStream;
              getAttribute(name: javax.management.ObjectName, attribute: string): any;
              getAttributes(name: javax.management.ObjectName, attributes: string[]): javax.management.AttributeList;
              getClassLoader(loaderName: javax.management.ObjectName): java.lang.ClassLoader;
              getClassLoaderFor(mbeanName: javax.management.ObjectName): java.lang.ClassLoader;
              getClassLoaderRepository(): javax.management.loading.ClassLoaderRepository;
              getDefaultDomain(): string;
              getDomains(): string[];
              getMBeanCount(): int;
              getMBeanInfo(name: javax.management.ObjectName): javax.management.MBeanInfo;
              getMBeanServer(): javax.management.MBeanServer;
              getObjectInstance(name: javax.management.ObjectName): javax.management.ObjectInstance;
              instantiate(className: string): any;
              instantiate(className: string, params: any[], signature: string[]): any;
              instantiate(className: string, loaderName: javax.management.ObjectName): any;
              instantiate(className: string, loaderName: javax.management.ObjectName, params: any[], signature: string[]): any;
              invoke(name: javax.management.ObjectName, operationName: string, params: any[], signature: string[]): any;
              isInstanceOf(name: javax.management.ObjectName, className: string): boolean;
              isRegistered(name: javax.management.ObjectName): boolean;
              queryMBeans(name: javax.management.ObjectName, query: javax.management.QueryExp): java.util.Set<javax.management.ObjectInstance>;
              queryNames(name: javax.management.ObjectName, query: javax.management.QueryExp): java.util.Set<javax.management.ObjectName>;
              registerMBean(object: any, name: javax.management.ObjectName): javax.management.ObjectInstance;
              removeNotificationListener(name: javax.management.ObjectName, listener: javax.management.NotificationListener): void;
              removeNotificationListener(name: javax.management.ObjectName, listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, handback: any): void;
              removeNotificationListener(name: javax.management.ObjectName, listener: javax.management.ObjectName): void;
              removeNotificationListener(name: javax.management.ObjectName, listener: javax.management.ObjectName, filter: javax.management.NotificationFilter, handback: any): void;
              setAttribute(name: javax.management.ObjectName, attribute: javax.management.Attribute): void;
              setAttributes(name: javax.management.ObjectName, attributes: javax.management.AttributeList): javax.management.AttributeList;
              setMBeanServer(mbs: javax.management.MBeanServer): void;
              unregisterMBean(name: javax.management.ObjectName): void;
              _mbs: javax.management.MBeanServer;
            }
            interface MBeanServerAccessController extends CombineTypes<[_MBeanServerAccessController, javax.management.remote.MBeanServerForwarder, java.lang.Object]> {}
            interface _MBeanServerFileAccessController$$static extends ClassLike {
              _checkCreateAccess(access: MBeanServerFileAccessController$Access, className: string): boolean;
              _classNameMatch(pattern: string, className: string): boolean;
              _propertiesFromFile(fname: string): java.util.Properties;
              _CREATE: string;
              _READONLY: string;
              _READWRITE: string;
              _UNREGISTER: string;
              new(accessFileName: string): MBeanServerFileAccessController;
              new(accessFileName: string, mbs: javax.management.MBeanServer): MBeanServerFileAccessController;
              new(accessFileProps: java.util.Properties): MBeanServerFileAccessController;
              new(accessFileProps: java.util.Properties, mbs: javax.management.MBeanServer): MBeanServerFileAccessController;
            }
            let MBeanServerFileAccessController: _MBeanServerFileAccessController$$static;
            interface _MBeanServerFileAccessController {
              _checkAccess(requiredAccess: MBeanServerFileAccessController$AccessType, arg: string): void;
              checkCreate(className: string): void;
              checkRead(): void;
              checkUnregister(name: javax.management.ObjectName): void;
              checkWrite(): void;
              _parseProperties(props: java.util.Properties): void;
              refresh(): void;
              _accessFileName: string;
              _accessMap: java.util.Map<string,MBeanServerFileAccessController$Access>;
              _originalProps: java.util.Properties;
            }
            interface MBeanServerFileAccessController extends CombineTypes<[_MBeanServerFileAccessController, com.sun.jmx.remote.security.MBeanServerAccessController]> {}
            interface _MBeanServerFileAccessController$Access$$static extends ClassLike {
              _new(write: boolean, unregister: boolean, createPatternList: java.util.List<string>): MBeanServerFileAccessController$Access;
            }
            let MBeanServerFileAccessController$Access: _MBeanServerFileAccessController$Access$$static;
            interface _MBeanServerFileAccessController$Access {
              _NO_STRINGS: string[];
              _createPatterns: string[];
              _unregister: boolean;
              _write: boolean;
            }
            interface MBeanServerFileAccessController$Access extends CombineTypes<[_MBeanServerFileAccessController$Access, java.lang.Object]> {}
            interface _MBeanServerFileAccessController$AccessType$$static extends ClassLike {
              valueOf(name: string): MBeanServerFileAccessController$AccessType;
              values(): MBeanServerFileAccessController$AccessType[];
              readonly CREATE: MBeanServerFileAccessController$AccessType;
              readonly READ: MBeanServerFileAccessController$AccessType;
              readonly UNREGISTER: MBeanServerFileAccessController$AccessType;
              readonly WRITE: MBeanServerFileAccessController$AccessType;
            }
            let MBeanServerFileAccessController$AccessType: _MBeanServerFileAccessController$AccessType$$static;
            interface _MBeanServerFileAccessController$AccessType {
            }
            interface MBeanServerFileAccessController$AccessType extends CombineTypes<[_MBeanServerFileAccessController$AccessType]> {}
            interface _MBeanServerFileAccessController$Parser$$static extends ClassLike {
              _parseAccess(identity: string, s: string): MBeanServerFileAccessController$Access;
              _EOS: int;
            }
            let MBeanServerFileAccessController$Parser: _MBeanServerFileAccessController$Parser$$static;
            interface _MBeanServerFileAccessController$Parser {
              _next(): void;
              _parseAccess(): MBeanServerFileAccessController$Access;
              _parseClassName(): string;
              _parseCreate(createClasses: java.util.List<string>): void;
              _parseReadWrite(): MBeanServerFileAccessController$Access;
              _parseWord(): string;
              _skipSpace(): void;
              _syntax(msg: string): java.lang.IllegalArgumentException;
              _c: int;
              _i: int;
              _identity: string;
              _len: int;
              _s: string;
            }
            interface MBeanServerFileAccessController$Parser extends CombineTypes<[_MBeanServerFileAccessController$Parser, java.lang.Object]> {}
            interface _NotificationAccessController$$static extends ClassLike {
            }
            let NotificationAccessController: _NotificationAccessController$$static;
            interface _NotificationAccessController {
              addNotificationListener(a0: string, a1: javax.management.ObjectName, a2: javax.security.auth.Subject): void;
              fetchNotification(a0: string, a1: javax.management.ObjectName, a2: javax.management.Notification, a3: javax.security.auth.Subject): void;
              removeNotificationListener(a0: string, a1: javax.management.ObjectName, a2: javax.security.auth.Subject): void;
            }
            interface NotificationAccessController extends CombineTypes<[_NotificationAccessController, java.lang.Object]> {}
            interface _SubjectDelegator$$static extends ClassLike {
              checkRemoveCallerContext(subject: javax.security.auth.Subject): boolean;
              _getSubjectPrincipals(subject: javax.security.auth.Subject): java.util.Collection<java.security.Principal>;
              new(): SubjectDelegator;
            }
            let SubjectDelegator: _SubjectDelegator$$static;
            interface _SubjectDelegator {
              delegatedContext(authenticatedACC: java.security.AccessControlContext, delegatedSubject: javax.security.auth.Subject, removeCallerContext: boolean): java.security.AccessControlContext;
              _getDelegatedAcc(delegatedSubject: javax.security.auth.Subject, removeCallerContext: boolean): java.security.AccessControlContext;
            }
            interface SubjectDelegator extends CombineTypes<[_SubjectDelegator, java.lang.Object]> {}
          }
          module util {
            interface _ClassLoaderWithRepository$$static extends ClassLike {
              new(clr: javax.management.loading.ClassLoaderRepository, cl2: java.lang.ClassLoader): ClassLoaderWithRepository;
            }
            let ClassLoaderWithRepository: _ClassLoaderWithRepository$$static;
            interface _ClassLoaderWithRepository {
              _findClass(name: string): java.lang.Class<any>;
              _cl2: java.lang.ClassLoader;
              _repository: javax.management.loading.ClassLoaderRepository;
            }
            interface ClassLoaderWithRepository extends CombineTypes<[_ClassLoaderWithRepository, java.lang.ClassLoader]> {}
            interface _ClassLogger$$static extends ClassLike {
              new(subsystem: string, className: string): ClassLogger;
            }
            let ClassLogger: _ClassLogger$$static;
            interface _ClassLogger {
              config(func: string, msg: string): void;
              config(func: string, t: java.lang.Throwable): void;
              config(func: string, msg: string, t: java.lang.Throwable): void;
              configOn(): boolean;
              debug(func: string, msg: string): void;
              debug(func: string, t: java.lang.Throwable): void;
              debug(func: string, msg: string, t: java.lang.Throwable): void;
              debugOn(): boolean;
              error(func: string, msg: string): void;
              error(func: string, t: java.lang.Throwable): void;
              error(func: string, msg: string, t: java.lang.Throwable): void;
              fine(func: string, msg: string): void;
              fine(func: string, t: java.lang.Throwable): void;
              fine(func: string, msg: string, t: java.lang.Throwable): void;
              fineOn(): boolean;
              finer(func: string, msg: string): void;
              finer(func: string, t: java.lang.Throwable): void;
              finer(func: string, msg: string, t: java.lang.Throwable): void;
              finerOn(): boolean;
              finest(func: string, msg: string): void;
              finest(func: string, t: java.lang.Throwable): void;
              finest(func: string, msg: string, t: java.lang.Throwable): void;
              finestOn(): boolean;
              getName(): string;
              info(func: string, msg: string): void;
              info(func: string, t: java.lang.Throwable): void;
              info(func: string, msg: string, t: java.lang.Throwable): void;
              infoOn(): boolean;
              isLoggable(level: java.lang.System$Logger$Level): boolean;
              log(level: java.lang.System$Logger$Level, bundle: java.util.ResourceBundle, msg: string, thrown: java.lang.Throwable): void;
              log(level: java.lang.System$Logger$Level, bundle: java.util.ResourceBundle, format: string, params: any[]): void;
              log(level: java.lang.System$Logger$Level, bundle: java.util.ResourceBundle, format: string, ...params: any[]): void;
              severe(func: string, msg: string): void;
              severe(func: string, t: java.lang.Throwable): void;
              severe(func: string, msg: string, t: java.lang.Throwable): void;
              trace(func: string, msg: string): void;
              trace(func: string, t: java.lang.Throwable): void;
              trace(func: string, msg: string, t: java.lang.Throwable): void;
              traceOn(): boolean;
              warning(func: string, msg: string): void;
              warning(func: string, t: java.lang.Throwable): void;
              warning(func: string, msg: string, t: java.lang.Throwable): void;
              warningOn(): boolean;
              _className: string;
              _logger: java.lang.System$Logger;
            }
            interface ClassLogger extends CombineTypes<[_ClassLogger, java.lang.System$Logger, java.lang.Object]> {}
            interface _EnvHelp$$static extends ClassLike {
              checkAttributes(attributes: java.util.Map<any,any>): void;
              computeBooleanFromString(stringBoolean: string): boolean;
              computeBooleanFromString(stringBoolean: string, defaultValue: boolean): boolean;
              filterAttributes<V>(attributes: java.util.Map<string,V>): java.util.Map<string,V>;
              getCause(t: java.lang.Throwable): java.lang.Throwable;
              getConnectionCheckPeriod(env: java.util.Map<string,any>): long;
              getFetchTimeout(env: java.util.Map<string,any>): long;
              getIntegerAttribute(env: java.util.Map<string,any>, name: string, defaultValue: long, a3: long, minValue: long): long;
              getMaxFetchNotifNumber(env: java.util.Map<string,any>): int;
              getNotifBufferSize(env: java.util.Map<string,any>): int;
              getNotificationAccessController(env: java.util.Map<string,any>): remote.security.NotificationAccessController;
              getServerConnectionTimeout(env: java.util.Map<string,any>): long;
              _hideAttributes(map: java.util.SortedMap<string,any>): void;
              initCause<T>(throwable: T, cause: java.lang.Throwable): T;
              isServerDaemon(env: java.util.Map<string,any>): boolean;
              mapToHashtable<K, V>(map: java.util.Map<K,V>): java.util.Hashtable<K,V>;
              _parseHiddenAttributes(hide: string, hiddenStrings: java.util.SortedSet<string>, hiddenPrefixes: java.util.SortedSet<string>): void;
              _purgeUnserializable(objects: java.util.Collection<any>): void;
              resolveClientClassLoader(env: java.util.Map<string,any>): java.lang.ClassLoader;
              resolveServerClassLoader(env: java.util.Map<string,any>, mbs: javax.management.MBeanServer): java.lang.ClassLoader;
              readonly BUFFER_SIZE_PROPERTY: string;
              readonly CLIENT_CONNECTION_CHECK_PERIOD: string;
              _DEFAULT_CLASS_LOADER: string;
              _DEFAULT_CLASS_LOADER_NAME: string;
              readonly DEFAULT_HIDDEN_ATTRIBUTES: string;
              readonly DEFAULT_ORB: string;
              readonly FETCH_TIMEOUT: string;
              readonly HIDDEN_ATTRIBUTES: string;
              readonly JMX_SERVER_DAEMON: string;
              readonly MAX_FETCH_NOTIFS: string;
              readonly NOTIF_ACCESS_CONTROLLER: string;
              readonly SERVER_CONNECTION_TIMEOUT: string;
              _defaultHiddenPrefixes: java.util.SortedSet<string>;
              _defaultHiddenStrings: java.util.SortedSet<string>;
              _logger: ClassLogger;
              new(): EnvHelp;
            }
            let EnvHelp: _EnvHelp$$static;
            interface _EnvHelp {
            }
            interface EnvHelp extends CombineTypes<[_EnvHelp, java.lang.Object]> {}
            interface _EnvHelp$SinkOutputStream$$static extends ClassLike {
            }
            let EnvHelp$SinkOutputStream: _EnvHelp$SinkOutputStream$$static;
            interface _EnvHelp$SinkOutputStream {
              write(b: byte[], off: int, len: int): void;
              write(b: int): void;
            }
            interface EnvHelp$SinkOutputStream extends CombineTypes<[_EnvHelp$SinkOutputStream, java.io.OutputStream]> {}
            interface _OrderClassLoaders$$static extends ClassLike {
              new(cl1: java.lang.ClassLoader, cl2: java.lang.ClassLoader): OrderClassLoaders;
            }
            let OrderClassLoaders: _OrderClassLoaders$$static;
            interface _OrderClassLoaders {
              _loadClass(name: string, resolve: boolean): java.lang.Class<any>;
              _cl2: java.lang.ClassLoader;
            }
            interface OrderClassLoaders extends CombineTypes<[_OrderClassLoaders, java.lang.ClassLoader]> {}
          }
        }
      }
    }
  }
  module java {
    module lang {
      module management {
        interface _BufferPoolMXBean$$static extends ClassLike {
        }
        let BufferPoolMXBean: _BufferPoolMXBean$$static;
        interface _BufferPoolMXBean {
          getCount(): long;
          getMemoryUsed(): long;
          getName(): string;
          getTotalCapacity(): long;
        }
        interface BufferPoolMXBean extends CombineTypes<[_BufferPoolMXBean, java.lang.management.PlatformManagedObject, java.lang.Object]> {}
        interface _ClassLoadingMXBean$$static extends ClassLike {
        }
        let ClassLoadingMXBean: _ClassLoadingMXBean$$static;
        interface _ClassLoadingMXBean {
          getLoadedClassCount(): int;
          getTotalLoadedClassCount(): long;
          getUnloadedClassCount(): long;
          isVerbose(): boolean;
          setVerbose(a0: boolean): void;
        }
        interface ClassLoadingMXBean extends CombineTypes<[_ClassLoadingMXBean, java.lang.management.PlatformManagedObject, java.lang.Object]> {}
        interface _CompilationMXBean$$static extends ClassLike {
        }
        let CompilationMXBean: _CompilationMXBean$$static;
        interface _CompilationMXBean {
          getName(): string;
          getTotalCompilationTime(): long;
          isCompilationTimeMonitoringSupported(): boolean;
        }
        interface CompilationMXBean extends CombineTypes<[_CompilationMXBean, java.lang.management.PlatformManagedObject, java.lang.Object]> {}
        interface _DefaultPlatformMBeanProvider$$static extends ClassLike {
          _new(): DefaultPlatformMBeanProvider;
        }
        let DefaultPlatformMBeanProvider: _DefaultPlatformMBeanProvider$$static;
        interface _DefaultPlatformMBeanProvider {
          getPlatformComponentList(): java.util.List<sun.management.spi.PlatformMBeanProvider$PlatformComponent<any>>;
          _init(): java.util.List<sun.management.spi.PlatformMBeanProvider$PlatformComponent<any>>;
          _mxbeanList: java.util.List<sun.management.spi.PlatformMBeanProvider$PlatformComponent<any>>;
        }
        interface DefaultPlatformMBeanProvider extends CombineTypes<[_DefaultPlatformMBeanProvider, sun.management.spi.PlatformMBeanProvider]> {}
        interface _GarbageCollectorMXBean$$static extends ClassLike {
        }
        let GarbageCollectorMXBean: _GarbageCollectorMXBean$$static;
        interface _GarbageCollectorMXBean {
          getCollectionCount(): long;
          getCollectionTime(): long;
        }
        interface GarbageCollectorMXBean extends CombineTypes<[_GarbageCollectorMXBean, java.lang.Object, java.lang.management.MemoryManagerMXBean]> {}
        interface _LockInfo$$static extends ClassLike {
          from(cd: javax.management.openmbean.CompositeData): LockInfo;
          new(className: string, identityHashCode: int): LockInfo;
          _new(lock: any): LockInfo;
        }
        let LockInfo: _LockInfo$$static;
        interface _LockInfo {
          getClassName(): string;
          getIdentityHashCode(): int;
          toString(): string;
          _className: string;
          _identityHashCode: int;
        }
        interface LockInfo extends CombineTypes<[_LockInfo, java.lang.Object]> {}
        interface _ManagementFactory$$static extends ClassLike {
          _addMXBean(mbs: javax.management.MBeanServer, name: string, pmo: any): void;
          getClassLoadingMXBean(): ClassLoadingMXBean;
          getCompilationMXBean(): CompilationMXBean;
          getGarbageCollectorMXBeans(): java.util.List<GarbageCollectorMXBean>;
          getMemoryMXBean(): MemoryMXBean;
          getMemoryManagerMXBeans(): java.util.List<MemoryManagerMXBean>;
          getMemoryPoolMXBeans(): java.util.List<MemoryPoolMXBean>;
          getOperatingSystemMXBean(): OperatingSystemMXBean;
          getPlatformMBeanServer(): javax.management.MBeanServer;
          getPlatformMXBean<T>(mxbeanInterface: Class<T>): T;
          getPlatformMXBean<T>(connection: javax.management.MBeanServerConnection, mxbeanInterface: Class<T>): T;
          getPlatformMXBeans<T>(mxbeanInterface: Class<T>): java.util.List<T>;
          getPlatformMXBeans<T>(connection: javax.management.MBeanServerConnection, mxbeanInterface: Class<T>): java.util.List<T>;
          getPlatformManagementInterfaces(): java.util.Set<Class<PlatformManagedObject>>;
          _getProxyNames(pc: sun.management.spi.PlatformMBeanProvider$PlatformComponent<any>, conn: javax.management.MBeanServerConnection, intf: Class<any>): java.util.stream.Stream<string>;
          getRuntimeMXBean(): RuntimeMXBean;
          getThreadMXBean(): ThreadMXBean;
          _isInstanceOf(connection: javax.management.MBeanServerConnection, objName: javax.management.ObjectName, intfName: string): boolean;
          _loadNativeLib(): void;
          newPlatformMXBeanProxy<T>(connection: javax.management.MBeanServerConnection, mxbeanName: string, mxbeanInterface: Class<T>): T;
          _platformComponents(): java.util.Collection<sun.management.spi.PlatformMBeanProvider$PlatformComponent<any>>;
          readonly CLASS_LOADING_MXBEAN_NAME: string;
          readonly COMPILATION_MXBEAN_NAME: string;
          readonly GARBAGE_COLLECTOR_MXBEAN_DOMAIN_TYPE: string;
          readonly MEMORY_MANAGER_MXBEAN_DOMAIN_TYPE: string;
          readonly MEMORY_MXBEAN_NAME: string;
          readonly MEMORY_POOL_MXBEAN_DOMAIN_TYPE: string;
          _NOTIF_EMITTER: string;
          readonly OPERATING_SYSTEM_MXBEAN_NAME: string;
          readonly RUNTIME_MXBEAN_NAME: string;
          readonly THREAD_MXBEAN_NAME: string;
          _platformMBeanServer: javax.management.MBeanServer;
        }
        let ManagementFactory: _ManagementFactory$$static;
        interface _ManagementFactory {
        }
        interface ManagementFactory extends CombineTypes<[_ManagementFactory, java.lang.Object]> {}
        interface _ManagementFactory$PlatformMBeanFinder$$static extends ClassLike {
          _findFirst(mbeanIntf: Class<any>): sun.management.spi.PlatformMBeanProvider$PlatformComponent<any>;
          _findSingleton(mbeanIntf: Class<any>): sun.management.spi.PlatformMBeanProvider$PlatformComponent<any>;
          _getMap(): java.util.Map<string,sun.management.spi.PlatformMBeanProvider$PlatformComponent<any>>;
          _componentMap: java.util.Map<string,sun.management.spi.PlatformMBeanProvider$PlatformComponent<any>>;
        }
        let ManagementFactory$PlatformMBeanFinder: _ManagementFactory$PlatformMBeanFinder$$static;
        interface _ManagementFactory$PlatformMBeanFinder {
        }
        interface ManagementFactory$PlatformMBeanFinder extends CombineTypes<[_ManagementFactory$PlatformMBeanFinder, java.lang.Object]> {}
        interface _ManagementPermission$$static extends ClassLike {
          _serialVersionUID: long;
          new(name: string): ManagementPermission;
          new(name: string, actions: string): ManagementPermission;
        }
        let ManagementPermission: _ManagementPermission$$static;
        interface _ManagementPermission {
        }
        interface ManagementPermission extends CombineTypes<[_ManagementPermission, java.security.BasicPermission]> {}
        interface _MemoryMXBean$$static extends ClassLike {
        }
        let MemoryMXBean: _MemoryMXBean$$static;
        interface _MemoryMXBean {
          gc(): void;
          getHeapMemoryUsage(): MemoryUsage;
          getNonHeapMemoryUsage(): MemoryUsage;
          getObjectPendingFinalizationCount(): int;
          isVerbose(): boolean;
          setVerbose(a0: boolean): void;
        }
        interface MemoryMXBean extends CombineTypes<[_MemoryMXBean, java.lang.management.PlatformManagedObject, java.lang.Object]> {}
        interface _MemoryManagerMXBean$$static extends ClassLike {
        }
        let MemoryManagerMXBean: _MemoryManagerMXBean$$static;
        interface _MemoryManagerMXBean {
          getMemoryPoolNames(): string[];
          getName(): string;
          isValid(): boolean;
        }
        interface MemoryManagerMXBean extends CombineTypes<[_MemoryManagerMXBean, java.lang.management.PlatformManagedObject, java.lang.Object]> {}
        interface _MemoryNotificationInfo$$static extends ClassLike {
          from(cd: javax.management.openmbean.CompositeData): MemoryNotificationInfo;
          readonly MEMORY_COLLECTION_THRESHOLD_EXCEEDED: string;
          readonly MEMORY_THRESHOLD_EXCEEDED: string;
          new(poolName: string, usage: MemoryUsage, count: long): MemoryNotificationInfo;
          _new(cd: javax.management.openmbean.CompositeData): MemoryNotificationInfo;
        }
        let MemoryNotificationInfo: _MemoryNotificationInfo$$static;
        interface _MemoryNotificationInfo {
          getCount(): long;
          getPoolName(): string;
          getUsage(): MemoryUsage;
          _count: long;
          _poolName: string;
          _usage: MemoryUsage;
        }
        interface MemoryNotificationInfo extends CombineTypes<[_MemoryNotificationInfo, java.lang.Object]> {}
        interface _MemoryPoolMXBean$$static extends ClassLike {
        }
        let MemoryPoolMXBean: _MemoryPoolMXBean$$static;
        interface _MemoryPoolMXBean {
          getCollectionUsage(): MemoryUsage;
          getCollectionUsageThreshold(): long;
          getCollectionUsageThresholdCount(): long;
          getMemoryManagerNames(): string[];
          getName(): string;
          getPeakUsage(): MemoryUsage;
          getType(): MemoryType;
          getUsage(): MemoryUsage;
          getUsageThreshold(): long;
          getUsageThresholdCount(): long;
          isCollectionUsageThresholdExceeded(): boolean;
          isCollectionUsageThresholdSupported(): boolean;
          isUsageThresholdExceeded(): boolean;
          isUsageThresholdSupported(): boolean;
          isValid(): boolean;
          resetPeakUsage(): void;
          setCollectionUsageThreshold(a0: long): void;
          setUsageThreshold(a0: long): void;
        }
        interface MemoryPoolMXBean extends CombineTypes<[_MemoryPoolMXBean, java.lang.management.PlatformManagedObject, java.lang.Object]> {}
        interface _MemoryType$$static extends ClassLike {
          valueOf(name: string): MemoryType;
          values(): MemoryType[];
          readonly HEAP: MemoryType;
          readonly NON_HEAP: MemoryType;
        }
        let MemoryType: _MemoryType$$static;
        interface _MemoryType {
          toString(): string;
          _description: string;
        }
        interface MemoryType extends CombineTypes<[_MemoryType, Enum<MemoryType>]> {}
        interface _MemoryUsage$$static extends ClassLike {
          from(cd: javax.management.openmbean.CompositeData): MemoryUsage;
          new(init: long, a1: long, used: long, a3: long): MemoryUsage;
        }
        let MemoryUsage: _MemoryUsage$$static;
        interface _MemoryUsage {
          getCommitted(): long;
          getInit(): long;
          getMax(): long;
          getUsed(): long;
          toString(): string;
          _committed: long;
          _init: long;
          _max: long;
          _used: long;
        }
        interface MemoryUsage extends CombineTypes<[_MemoryUsage, java.lang.Object]> {}
        interface _MonitorInfo$$static extends ClassLike {
          from(cd: javax.management.openmbean.CompositeData): MonitorInfo;
          new(className: string, identityHashCode: int, stackDepth: int, stackFrame: StackTraceElement): MonitorInfo;
        }
        let MonitorInfo: _MonitorInfo$$static;
        interface _MonitorInfo {
          getLockedStackDepth(): int;
          getLockedStackFrame(): StackTraceElement;
          _stackDepth: int;
          _stackFrame: StackTraceElement;
        }
        interface MonitorInfo extends CombineTypes<[_MonitorInfo, java.lang.management.LockInfo]> {}
        interface _OperatingSystemMXBean$$static extends ClassLike {
        }
        let OperatingSystemMXBean: _OperatingSystemMXBean$$static;
        interface _OperatingSystemMXBean {
          getArch(): string;
          getAvailableProcessors(): int;
          getName(): string;
          getSystemLoadAverage(): double;
          getVersion(): string;
        }
        interface OperatingSystemMXBean extends CombineTypes<[_OperatingSystemMXBean, java.lang.management.PlatformManagedObject, java.lang.Object]> {}
        interface _PlatformLoggingMXBean$$static extends ClassLike {
        }
        let PlatformLoggingMXBean: _PlatformLoggingMXBean$$static;
        interface _PlatformLoggingMXBean {
          getLoggerLevel(a0: string): string;
          getLoggerNames(): java.util.List<string>;
          getParentLoggerName(a0: string): string;
          setLoggerLevel(a0: string, a1: string): void;
        }
        interface PlatformLoggingMXBean extends CombineTypes<[_PlatformLoggingMXBean, java.lang.management.PlatformManagedObject, java.lang.Object]> {}
        interface _PlatformManagedObject$$static extends ClassLike {
        }
        let PlatformManagedObject: _PlatformManagedObject$$static;
        interface _PlatformManagedObject {
          getObjectName(): javax.management.ObjectName;
(): javax.management.ObjectName;
        }
        interface PlatformManagedObject extends CombineTypes<[_PlatformManagedObject, java.lang.Object]> {}
        interface _RuntimeMXBean$$static extends ClassLike {
        }
        let RuntimeMXBean: _RuntimeMXBean$$static;
        interface _RuntimeMXBean {
          getBootClassPath(): string;
          getClassPath(): string;
          getInputArguments(): java.util.List<string>;
          getLibraryPath(): string;
          getManagementSpecVersion(): string;
          getName(): string;
          getPid(): long;
          getSpecName(): string;
          getSpecVendor(): string;
          getSpecVersion(): string;
          getStartTime(): long;
          getSystemProperties(): java.util.Map<string,string>;
          getUptime(): long;
          getVmName(): string;
          getVmVendor(): string;
          getVmVersion(): string;
          isBootClassPathSupported(): boolean;
        }
        interface RuntimeMXBean extends CombineTypes<[_RuntimeMXBean, java.lang.management.PlatformManagedObject, java.lang.Object]> {}
        interface _ThreadInfo$$static extends ClassLike {
          from(cd: javax.management.openmbean.CompositeData): ThreadInfo;
          _EMPTY_MONITORS: MonitorInfo[];
          _EMPTY_SYNCS: LockInfo[];
          _MAX_FRAMES: int;
          _NO_STACK_TRACE: StackTraceElement[];
        }
        let ThreadInfo: _ThreadInfo$$static;
        interface _ThreadInfo {
          getBlockedCount(): long;
          getBlockedTime(): long;
          getLockInfo(): LockInfo;
          getLockName(): string;
          getLockOwnerId(): long;
          getLockOwnerName(): string;
          getLockedMonitors(): MonitorInfo[];
          getLockedSynchronizers(): LockInfo[];
          getPriority(): int;
          getStackTrace(): StackTraceElement[];
          getThreadId(): long;
          getThreadName(): string;
          getThreadState(): Thread$State;
          getWaitedCount(): long;
          getWaitedTime(): long;
          _initialize(t: Thread, state: int, lockObj: any, lockOwner: Thread, blockedCount: long, a5: long, blockedTime: long, a7: long, waitedCount: StackTraceElement[], a9: MonitorInfo[], waitedTime: LockInfo[]): void;
          isDaemon(): boolean;
          isInNative(): boolean;
          isSuspended(): boolean;
          toString(): string;
          _blockedCount: long;
          _blockedTime: long;
          _daemon: boolean;
          _inNative: boolean;
          _lock: LockInfo;
          _lockName: string;
          _lockOwnerId: long;
          _lockOwnerName: string;
          _lockedMonitors: MonitorInfo[];
          _lockedSynchronizers: LockInfo[];
          _priority: int;
          _stackTrace: StackTraceElement[];
          _suspended: boolean;
          _threadId: long;
          _threadName: string;
          _threadState: Thread$State;
          _waitedCount: long;
          _waitedTime: long;
        }
        interface ThreadInfo extends CombineTypes<[_ThreadInfo, java.lang.Object]> {}
        interface _ThreadMXBean$$static extends ClassLike {
        }
        let ThreadMXBean: _ThreadMXBean$$static;
        interface _ThreadMXBean {
          dumpAllThreads(a0: boolean, a1: boolean): ThreadInfo[];
          dumpAllThreads(lockedMonitors: boolean, lockedSynchronizers: boolean, maxDepth: int): ThreadInfo[];
          findDeadlockedThreads(): long[];
          findMonitorDeadlockedThreads(): long[];
          getAllThreadIds(): long[];
          getCurrentThreadCpuTime(): long;
          getCurrentThreadUserTime(): long;
          getDaemonThreadCount(): int;
          getPeakThreadCount(): int;
          getThreadCount(): int;
          getThreadCpuTime(a0: long): long;
          getThreadInfo(a0: long): ThreadInfo;
          getThreadInfo(a0: long[]): ThreadInfo[];
          getThreadInfo(a0: long, a1: int): ThreadInfo;
          getThreadInfo(a0: long[], a1: int): ThreadInfo[];
          getThreadInfo(a0: long[], a1: boolean, a2: boolean): ThreadInfo[];
          getThreadInfo(ids: long[], lockedMonitors: boolean, lockedSynchronizers: boolean, maxDepth: int): ThreadInfo[];
          getThreadUserTime(a0: long): long;
          getTotalStartedThreadCount(): long;
          isCurrentThreadCpuTimeSupported(): boolean;
          isObjectMonitorUsageSupported(): boolean;
          isSynchronizerUsageSupported(): boolean;
          isThreadContentionMonitoringEnabled(): boolean;
          isThreadContentionMonitoringSupported(): boolean;
          isThreadCpuTimeEnabled(): boolean;
          isThreadCpuTimeSupported(): boolean;
          resetPeakThreadCount(): void;
          setThreadContentionMonitoringEnabled(a0: boolean): void;
          setThreadCpuTimeEnabled(a0: boolean): void;
        }
        interface ThreadMXBean extends CombineTypes<[_ThreadMXBean, java.lang.management.PlatformManagedObject, java.lang.Object]> {}
      }
    }
  }
  module javax {
    module management {
      module loading {
        interface _ClassLoaderRepository$$static extends ClassLike {
        }
        let ClassLoaderRepository: _ClassLoaderRepository$$static;
        interface _ClassLoaderRepository {
          loadClass(a0: string): java.lang.Class<any>;
          loadClassBefore(a0: java.lang.ClassLoader, a1: string): java.lang.Class<any>;
          loadClassWithout(a0: java.lang.ClassLoader, a1: string): java.lang.Class<any>;
        }
        interface ClassLoaderRepository extends CombineTypes<[_ClassLoaderRepository, java.lang.Object]> {}
        interface _DefaultLoaderRepository$$static extends ClassLike {
          _load(without: java.lang.ClassLoader, className: string): java.lang.Class<any>;
          loadClass(className: string): java.lang.Class<any>;
          loadClassWithout(loader: java.lang.ClassLoader, className: string): java.lang.Class<any>;
          new(): DefaultLoaderRepository;
        }
        let DefaultLoaderRepository: _DefaultLoaderRepository$$static;
        interface _DefaultLoaderRepository {
        }
        interface DefaultLoaderRepository extends CombineTypes<[_DefaultLoaderRepository, java.lang.Object]> {}
        interface _MLet$$static extends ClassLike {
          _removeSpace(s: string): string;
          _serialVersionUID: long;
          new(): MLet;
          new(urls: java.net.URL[]): MLet;
          new(urls: java.net.URL[], parent: java.lang.ClassLoader): MLet;
          new(urls: java.net.URL[], parent: java.lang.ClassLoader, factory: java.net.URLStreamHandlerFactory): MLet;
          new(urls: java.net.URL[], delegateToCLR: boolean): MLet;
          new(urls: java.net.URL[], parent: java.lang.ClassLoader, delegateToCLR: boolean): MLet;
          new(urls: java.net.URL[], parent: java.lang.ClassLoader, factory: java.net.URLStreamHandlerFactory, delegateToCLR: boolean): MLet;
        }
        let MLet: _MLet$$static;
        interface _MLet {
          addURL(url: java.net.URL): void;
          addURL(url: string): void;
          _check(version: string, codebase: java.net.URL, jarfile: string, mlet: MLetContent): java.net.URL;
          _constructParameter(param: string, type: string): any;
          _findClass(name: string): java.lang.Class<any>;
          _findClass(name: string, clr: ClassLoaderRepository): java.lang.Class<any>;
          _findLibrary(libname: string): string;
          getLibraryDirectory(): string;
          getMBeansFromURL(url: java.net.URL): java.util.Set<any>;
          getMBeansFromURL(url: string): java.util.Set<any>;
          _getTmpDir(): string;
          getURLs(): java.net.URL[];
          _init(delegateToCLR: boolean): void;
          loadClass(name: string, clr: ClassLoaderRepository): java.lang.Class<any>;
          _loadLibraryAsResource(libname: string): string;
          _loadSerializedObject(codebase: java.net.URL, filename: string): any;
          postDeregister(): void;
          postRegister(registrationDone: boolean): void;
          preDeregister(): void;
          preRegister(server: MBeanServer, name: ObjectName): ObjectName;
          readExternal(_in: java.io.ObjectInput): void;
          setLibraryDirectory(libdir: string): void;
          _setMBeanServer(server: MBeanServer): void;
          writeExternal(out: java.io.ObjectOutput): void;
          _currentClr: ClassLoaderRepository;
          _delegateToCLR: boolean;
          _libraryDirectory: string;
          _mletList: java.util.List<MLetContent>;
          _mletObjectName: ObjectName;
          _myUrls: java.net.URL[];
          _primitiveClasses: java.util.Map<string,java.lang.Class<any>>;
          _server: MBeanServer;
        }
        interface MLet extends CombineTypes<[_MLet, javax.management.MBeanRegistration, java.net.URLClassLoader, java.io.Externalizable, javax.management.loading.MLetMBean]> {}
        interface _MLetContent$$static extends ClassLike {
          new(url: java.net.URL, attributes: java.util.Map<string,string>, types: java.util.List<string>, values: java.util.List<string>): MLetContent;
        }
        let MLetContent: _MLetContent$$static;
        interface _MLetContent {
          getAttributes(): java.util.Map<string,string>;
          getCode(): string;
          getCodeBase(): java.net.URL;
          getDocumentBase(): java.net.URL;
          getJarFiles(): string;
          getName(): string;
          _getParameter(name: string): string;
          getParameterTypes(): java.util.List<string>;
          getParameterValues(): java.util.List<string>;
          getSerializedObject(): string;
          getVersion(): string;
          _attributes: java.util.Map<string,string>;
          _baseURL: java.net.URL;
          _documentURL: java.net.URL;
          _types: java.util.List<string>;
          _values: java.util.List<string>;
        }
        interface MLetContent extends CombineTypes<[_MLetContent, java.lang.Object]> {}
        interface _MLetMBean$$static extends ClassLike {
        }
        let MLetMBean: _MLetMBean$$static;
        interface _MLetMBean {
          addURL(a0: java.net.URL): void;
          addURL(a0: string): void;
          getLibraryDirectory(): string;
          getMBeansFromURL(a0: string): java.util.Set<any>;
          getMBeansFromURL(a0: java.net.URL): java.util.Set<any>;
          getResource(a0: string): java.net.URL;
          getResourceAsStream(a0: string): java.io.InputStream;
          getResources(a0: string): java.util.Enumeration<java.net.URL>;
          getURLs(): java.net.URL[];
          setLibraryDirectory(a0: string): void;
        }
        interface MLetMBean extends CombineTypes<[_MLetMBean, java.lang.Object]> {}
        interface _MLetObjectInputStream$$static extends ClassLike {
          new(_in: java.io.InputStream, loader: MLet): MLetObjectInputStream;
        }
        let MLetObjectInputStream: _MLetObjectInputStream$$static;
        interface _MLetObjectInputStream {
          getClassLoader(): java.lang.ClassLoader;
          _primitiveType(c: char): java.lang.Class<any>;
          _resolveClass(objectstreamclass: java.io.ObjectStreamClass): java.lang.Class<any>;
          _loader: MLet;
        }
        interface MLetObjectInputStream extends CombineTypes<[_MLetObjectInputStream, java.io.ObjectInputStream]> {}
        interface _MLetParser$$static extends ClassLike {
          _tag: string;
          new(): MLetParser;
        }
        let MLetParser: _MLetParser$$static;
        interface _MLetParser {
          parse(url: java.net.URL): java.util.List<MLetContent>;
          parseURL(urlname: string): java.util.List<MLetContent>;
          scanIdentifier(_in: java.io.Reader): string;
          scanTag(_in: java.io.Reader): java.util.Map<string,string>;
          skipSpace(_in: java.io.Reader): void;
          _c: int;
        }
        interface MLetParser extends CombineTypes<[_MLetParser, java.lang.Object]> {}
        interface _PrivateClassLoader$$static extends ClassLike {
        }
        let PrivateClassLoader: _PrivateClassLoader$$static;
        interface _PrivateClassLoader {
        }
        interface PrivateClassLoader extends CombineTypes<[_PrivateClassLoader, java.lang.Object]> {}
        interface _PrivateMLet$$static extends ClassLike {
          _serialVersionUID: long;
          new(urls: java.net.URL[], delegateToCLR: boolean): PrivateMLet;
          new(urls: java.net.URL[], parent: java.lang.ClassLoader, delegateToCLR: boolean): PrivateMLet;
          new(urls: java.net.URL[], parent: java.lang.ClassLoader, factory: java.net.URLStreamHandlerFactory, delegateToCLR: boolean): PrivateMLet;
        }
        let PrivateMLet: _PrivateMLet$$static;
        interface _PrivateMLet {
        }
        interface PrivateMLet extends CombineTypes<[_PrivateMLet, javax.management.loading.MLet, javax.management.loading.PrivateClassLoader]> {}
      }
      module modelmbean {
        interface _DescriptorSupport$$static extends ClassLike {
          _getForm(): string;
          _isMagic(c: char): boolean;
          _makeFieldValue(value: any): string;
          _parseQuotedFieldValue(s: string): any;
          _quote(s: string): string;
          _unquote(s: string): string;
          _charToEntityMap: string[];
          _currClass: string;
          _entities: string[];
          _entityToCharMap: java.util.Map<string,modelmbean$character>;
          _newSerialPersistentFields: java.io.ObjectStreamField[];
          _newSerialVersionUID: long;
          _oldSerialPersistentFields: java.io.ObjectStreamField[];
          _oldSerialVersionUID: long;
          _serialForm: string;
          _serialPersistentFields: java.io.ObjectStreamField[];
          _serialVersionUID: long;
          new(): DescriptorSupport;
          new(initNumFields: int): DescriptorSupport;
          new(inDescr: DescriptorSupport): DescriptorSupport;
          new(inStr: string): DescriptorSupport;
          new(fieldNames: string[], fieldValues: any[]): DescriptorSupport;
          new(fields: string[]): DescriptorSupport;
          new(...fields: string[]): DescriptorSupport;
        }
        let DescriptorSupport: _DescriptorSupport$$static;
        interface _DescriptorSupport {
          clone(): any;
          equals(o: any): boolean;
          getFieldNames(): string[];
          getFieldValue(fieldName: string): any;
          getFieldValues(fieldNames: string[]): any[];
          getFieldValues(...fieldNames: string[]): any[];
          getFields(): string[];
          hashCode(): int;
          _init(initMap: java.util.Map<string,any>): void;
          isValid(): boolean;
          _readObject(_in: java.io.ObjectInputStream): void;
          removeField(fieldName: string): void;
          setField(fieldName: string, fieldValue: any): void;
          setFields(fieldNames: string[], fieldValues: any[]): void;
          _toNumeric(inStr: string): long;
          toString(): string;
          toXMLString(): string;
          _validateField(fldName: string, fldValue: any): boolean;
          _writeObject(out: java.io.ObjectOutputStream): void;
          _descriptorMap: java.util.SortedMap<string,any>;
        }
        interface DescriptorSupport extends CombineTypes<[_DescriptorSupport, javax.management.Descriptor, java.lang.Object]> {}
        interface _InvalidTargetObjectTypeException$$static extends ClassLike {
          _compat: boolean;
          _newSerialPersistentFields: java.io.ObjectStreamField[];
          _newSerialVersionUID: long;
          _oldSerialPersistentFields: java.io.ObjectStreamField[];
          _oldSerialVersionUID: long;
          _serialPersistentFields: java.io.ObjectStreamField[];
          _serialVersionUID: long;
          new(): InvalidTargetObjectTypeException;
          new(s: string): InvalidTargetObjectTypeException;
          new(e: java.lang.Exception, s: string): InvalidTargetObjectTypeException;
        }
        let InvalidTargetObjectTypeException: _InvalidTargetObjectTypeException$$static;
        interface _InvalidTargetObjectTypeException {
          _readObject(_in: java.io.ObjectInputStream): void;
          _writeObject(out: java.io.ObjectOutputStream): void;
          _exception: java.lang.Exception;
        }
        interface InvalidTargetObjectTypeException extends CombineTypes<[_InvalidTargetObjectTypeException, java.lang.Exception]> {}
        interface _ModelMBean$$static extends ClassLike {
        }
        let ModelMBean: _ModelMBean$$static;
        interface _ModelMBean {
          setManagedResource(a0: any, a1: string): void;
          setModelMBeanInfo(a0: ModelMBeanInfo): void;
        }
        interface ModelMBean extends CombineTypes<[_ModelMBean, javax.management.modelmbean.ModelMBeanNotificationBroadcaster, javax.management.PersistentMBean, java.lang.Object, javax.management.DynamicMBean]> {}
        interface _ModelMBeanAttributeInfo$$static extends ClassLike {
          _compat: boolean;
          _currClass: string;
          _newSerialPersistentFields: java.io.ObjectStreamField[];
          _newSerialVersionUID: long;
          _oldSerialPersistentFields: java.io.ObjectStreamField[];
          _oldSerialVersionUID: long;
          _serialPersistentFields: java.io.ObjectStreamField[];
          _serialVersionUID: long;
          new(name: string, description: string, getter: java.lang.reflect.Method, setter: java.lang.reflect.Method): ModelMBeanAttributeInfo;
          new(name: string, description: string, getter: java.lang.reflect.Method, setter: java.lang.reflect.Method, descriptor: Descriptor): ModelMBeanAttributeInfo;
          new(name: string, type: string, description: string, isReadable: boolean, isWritable: boolean, isIs: boolean): ModelMBeanAttributeInfo;
          new(name: string, type: string, description: string, isReadable: boolean, isWritable: boolean, isIs: boolean, descriptor: Descriptor): ModelMBeanAttributeInfo;
          new(inInfo: ModelMBeanAttributeInfo): ModelMBeanAttributeInfo;
        }
        let ModelMBeanAttributeInfo: _ModelMBeanAttributeInfo$$static;
        interface _ModelMBeanAttributeInfo {
          clone(): any;
          getDescriptor(): Descriptor;
          _readObject(_in: java.io.ObjectInputStream): void;
          setDescriptor(inDescriptor: Descriptor): void;
          toString(): string;
          _validDescriptor(_in: Descriptor): Descriptor;
          _writeObject(out: java.io.ObjectOutputStream): void;
          _attrDescriptor: Descriptor;
        }
        interface ModelMBeanAttributeInfo extends CombineTypes<[_ModelMBeanAttributeInfo, javax.management.DescriptorAccess, javax.management.MBeanAttributeInfo]> {}
        interface _ModelMBeanConstructorInfo$$static extends ClassLike {
          _compat: boolean;
          _currClass: string;
          _newSerialPersistentFields: java.io.ObjectStreamField[];
          _newSerialVersionUID: long;
          _oldSerialPersistentFields: java.io.ObjectStreamField[];
          _oldSerialVersionUID: long;
          _serialPersistentFields: java.io.ObjectStreamField[];
          _serialVersionUID: long;
          new(description: string, constructorMethod: java.lang.reflect.Constructor<any>): ModelMBeanConstructorInfo;
          new(description: string, constructorMethod: java.lang.reflect.Constructor<any>, descriptor: Descriptor): ModelMBeanConstructorInfo;
          new(name: string, description: string, signature: MBeanParameterInfo[]): ModelMBeanConstructorInfo;
          new(name: string, description: string, signature: MBeanParameterInfo[], descriptor: Descriptor): ModelMBeanConstructorInfo;
          _new(old: ModelMBeanConstructorInfo): ModelMBeanConstructorInfo;
        }
        let ModelMBeanConstructorInfo: _ModelMBeanConstructorInfo$$static;
        interface _ModelMBeanConstructorInfo {
          clone(): any;
          getDescriptor(): Descriptor;
          _readObject(_in: java.io.ObjectInputStream): void;
          setDescriptor(inDescriptor: Descriptor): void;
          toString(): string;
          _validDescriptor(_in: Descriptor): Descriptor;
          _writeObject(out: java.io.ObjectOutputStream): void;
          _consDescriptor: Descriptor;
        }
        interface ModelMBeanConstructorInfo extends CombineTypes<[_ModelMBeanConstructorInfo, javax.management.MBeanConstructorInfo, javax.management.DescriptorAccess]> {}
        interface _ModelMBeanInfo$$static extends ClassLike {
        }
        let ModelMBeanInfo: _ModelMBeanInfo$$static;
        interface _ModelMBeanInfo {
          clone(): any;
          getAttribute(a0: string): ModelMBeanAttributeInfo;
          getAttributes(): MBeanAttributeInfo[];
          getClassName(): string;
          getConstructors(): MBeanConstructorInfo[];
          getDescription(): string;
          getDescriptor(a0: string, a1: string): Descriptor;
          getDescriptors(a0: string): Descriptor[];
          getMBeanDescriptor(): Descriptor;
          getNotification(a0: string): ModelMBeanNotificationInfo;
          getNotifications(): MBeanNotificationInfo[];
          getOperation(a0: string): ModelMBeanOperationInfo;
          getOperations(): MBeanOperationInfo[];
          setDescriptor(a0: Descriptor, a1: string): void;
          setDescriptors(a0: Descriptor[]): void;
          setMBeanDescriptor(a0: Descriptor): void;
        }
        interface ModelMBeanInfo extends CombineTypes<[_ModelMBeanInfo, java.lang.Object]> {}
        interface _ModelMBeanInfoSupport$$static extends ClassLike {
          _ALL: string;
          _ATTR: string;
          _CONS: string;
          _MMB: string;
          _NOTF: string;
          _NO_ATTRIBUTES: ModelMBeanAttributeInfo[];
          _NO_CONSTRUCTORS: ModelMBeanConstructorInfo[];
          _NO_NOTIFICATIONS: ModelMBeanNotificationInfo[];
          _NO_OPERATIONS: ModelMBeanOperationInfo[];
          _OPER: string;
          _compat: boolean;
          _currClass: string;
          _newSerialPersistentFields: java.io.ObjectStreamField[];
          _newSerialVersionUID: long;
          _oldSerialPersistentFields: java.io.ObjectStreamField[];
          _oldSerialVersionUID: long;
          _serialPersistentFields: java.io.ObjectStreamField[];
          _serialVersionUID: long;
          new(mbi: ModelMBeanInfo): ModelMBeanInfoSupport;
          new(className: string, description: string, attributes: ModelMBeanAttributeInfo[], constructors: ModelMBeanConstructorInfo[], operations: ModelMBeanOperationInfo[], notifications: ModelMBeanNotificationInfo[]): ModelMBeanInfoSupport;
          new(className: string, description: string, attributes: ModelMBeanAttributeInfo[], constructors: ModelMBeanConstructorInfo[], operations: ModelMBeanOperationInfo[], notifications: ModelMBeanNotificationInfo[], mbeandescriptor: Descriptor): ModelMBeanInfoSupport;
        }
        let ModelMBeanInfoSupport: _ModelMBeanInfoSupport$$static;
        interface _ModelMBeanInfoSupport {
          clone(): any;
          getAttribute(inName: string): ModelMBeanAttributeInfo;
          getConstructor(inName: string): ModelMBeanConstructorInfo;
          getDescriptor(inDescriptorName: string): Descriptor;
          getDescriptor(inDescriptorName: string, inDescriptorType: string): Descriptor;
          getDescriptor(): Descriptor;
          getDescriptors(inDescriptorType: string): Descriptor[];
          getMBeanDescriptor(): Descriptor;
          _getMBeanDescriptorNoException(): Descriptor;
          getNotification(inName: string): ModelMBeanNotificationInfo;
          getOperation(inName: string): ModelMBeanOperationInfo;
          _readObject(_in: java.io.ObjectInputStream): void;
          setDescriptor(inDescriptor: Descriptor, inDescriptorType: string): void;
          setDescriptors(inDescriptors: Descriptor[]): void;
          setMBeanDescriptor(inMBeanDescriptor: Descriptor): void;
          _validDescriptor(_in: Descriptor): Descriptor;
          _writeObject(out: java.io.ObjectOutputStream): void;
          _modelMBeanAttributes: MBeanAttributeInfo[];
          _modelMBeanConstructors: MBeanConstructorInfo[];
          _modelMBeanDescriptor: Descriptor;
          _modelMBeanNotifications: MBeanNotificationInfo[];
          _modelMBeanOperations: MBeanOperationInfo[];
        }
        interface ModelMBeanInfoSupport extends CombineTypes<[_ModelMBeanInfoSupport, javax.management.modelmbean.ModelMBeanInfo, javax.management.MBeanInfo]> {}
        interface _ModelMBeanNotificationBroadcaster$$static extends ClassLike {
        }
        let ModelMBeanNotificationBroadcaster: _ModelMBeanNotificationBroadcaster$$static;
        interface _ModelMBeanNotificationBroadcaster {
          addAttributeChangeNotificationListener(a0: NotificationListener, a1: string, a2: any): void;
          removeAttributeChangeNotificationListener(a0: NotificationListener, a1: string): void;
          sendAttributeChangeNotification(a0: AttributeChangeNotification): void;
          sendAttributeChangeNotification(a0: Attribute, a1: Attribute): void;
          sendNotification(a0: Notification): void;
          sendNotification(a0: string): void;
        }
        interface ModelMBeanNotificationBroadcaster extends CombineTypes<[_ModelMBeanNotificationBroadcaster, javax.management.NotificationBroadcaster, java.lang.Object]> {}
        interface _ModelMBeanNotificationInfo$$static extends ClassLike {
          _compat: boolean;
          _currClass: string;
          _newSerialPersistentFields: java.io.ObjectStreamField[];
          _newSerialVersionUID: long;
          _oldSerialPersistentFields: java.io.ObjectStreamField[];
          _oldSerialVersionUID: long;
          _serialPersistentFields: java.io.ObjectStreamField[];
          _serialVersionUID: long;
          new(notifTypes: string[], name: string, description: string): ModelMBeanNotificationInfo;
          new(notifTypes: string[], name: string, description: string, descriptor: Descriptor): ModelMBeanNotificationInfo;
          new(inInfo: ModelMBeanNotificationInfo): ModelMBeanNotificationInfo;
        }
        let ModelMBeanNotificationInfo: _ModelMBeanNotificationInfo$$static;
        interface _ModelMBeanNotificationInfo {
          clone(): any;
          getDescriptor(): Descriptor;
          _readObject(_in: java.io.ObjectInputStream): void;
          setDescriptor(inDescriptor: Descriptor): void;
          toString(): string;
          _validDescriptor(_in: Descriptor): Descriptor;
          _writeObject(out: java.io.ObjectOutputStream): void;
          _notificationDescriptor: Descriptor;
        }
        interface ModelMBeanNotificationInfo extends CombineTypes<[_ModelMBeanNotificationInfo, javax.management.DescriptorAccess, javax.management.MBeanNotificationInfo]> {}
        interface _ModelMBeanOperationInfo$$static extends ClassLike {
          _compat: boolean;
          _currClass: string;
          _newSerialPersistentFields: java.io.ObjectStreamField[];
          _newSerialVersionUID: long;
          _oldSerialPersistentFields: java.io.ObjectStreamField[];
          _oldSerialVersionUID: long;
          _serialPersistentFields: java.io.ObjectStreamField[];
          _serialVersionUID: long;
          new(description: string, operationMethod: java.lang.reflect.Method): ModelMBeanOperationInfo;
          new(description: string, operationMethod: java.lang.reflect.Method, descriptor: Descriptor): ModelMBeanOperationInfo;
          new(name: string, description: string, signature: MBeanParameterInfo[], type: string, impact: int): ModelMBeanOperationInfo;
          new(name: string, description: string, signature: MBeanParameterInfo[], type: string, impact: int, descriptor: Descriptor): ModelMBeanOperationInfo;
          new(inInfo: ModelMBeanOperationInfo): ModelMBeanOperationInfo;
        }
        let ModelMBeanOperationInfo: _ModelMBeanOperationInfo$$static;
        interface _ModelMBeanOperationInfo {
          clone(): any;
          getDescriptor(): Descriptor;
          _readObject(_in: java.io.ObjectInputStream): void;
          setDescriptor(inDescriptor: Descriptor): void;
          toString(): string;
          _validDescriptor(_in: Descriptor): Descriptor;
          _writeObject(out: java.io.ObjectOutputStream): void;
          _operationDescriptor: Descriptor;
        }
        interface ModelMBeanOperationInfo extends CombineTypes<[_ModelMBeanOperationInfo, javax.management.DescriptorAccess, javax.management.MBeanOperationInfo]> {}
        interface _RequiredModelMBean$$static extends ClassLike {
          _hasNotification(info: ModelMBeanInfo, notifName: string): boolean;
          _isRMMBMethodName(name: string): boolean;
          _makeAttributeChangeInfo(): ModelMBeanNotificationInfo;
          _makeGenericInfo(): ModelMBeanNotificationInfo;
          _javaSecurityAccess: jdk.internal.access.JavaSecurityAccess;
          _primitiveClassMap: java.util.Map<string,java.lang.Class<any>>;
          _primitiveClasses: java.lang.Class<any>[];
          _primitiveTypes: string[];
          _primitiveWrappers: string[];
          _rmmbMethodNames: java.util.Set<string>;
          new(): RequiredModelMBean;
          new(mbi: ModelMBeanInfo): RequiredModelMBean;
        }
        let RequiredModelMBean: _RequiredModelMBean$$static;
        interface _RequiredModelMBean {
          addAttributeChangeNotificationListener(inlistener: NotificationListener, inAttributeName: string, inhandback: any): void;
          addNotificationListener(listener: NotificationListener, filter: NotificationFilter, handback: any): void;
          _cacheResult(opInfo: ModelMBeanOperationInfo, opDescr: Descriptor, result: any): void;
          _createDefaultModelMBeanInfo(): ModelMBeanInfo;
          _findRMMBMethod(opMethodName: string, targetObjectField: any, opClassName: string, sig: string[]): java.lang.reflect.Method;
          getAttribute(attrName: string): any;
          getAttributes(attrNames: string[]): AttributeList;
          _getClassLoaderRepository(): management.loading.ClassLoaderRepository;
          getMBeanInfo(): MBeanInfo;
          getNotificationInfo(): MBeanNotificationInfo[];
          invoke(opName: string, opArgs: any[], sig: string[]): any;
          _invokeMethod(opName: string, method: java.lang.reflect.Method, targetObject: any, opArgs: any[]): any;
          load(): void;
          _loadClass(className: string): java.lang.Class<any>;
          postDeregister(): void;
          postRegister(registrationDone: boolean): void;
          preDeregister(): void;
          preRegister(server: MBeanServer, name: ObjectName): ObjectName;
          _printModelMBeanInfo(info: ModelMBeanInfo): string;
          removeAttributeChangeNotificationListener(inlistener: NotificationListener, inAttributeName: string): void;
          removeNotificationListener(listener: NotificationListener): void;
          removeNotificationListener(listener: NotificationListener, filter: NotificationFilter, handback: any): void;
          _resolveForCacheValue(descr: Descriptor): any;
          _resolveMethod(targetClass: java.lang.Class<any>, opMethodName: string, sig: string[]): java.lang.reflect.Method;
          sendAttributeChangeNotification(ntfyObj: AttributeChangeNotification): void;
          sendAttributeChangeNotification(inOldVal: Attribute, inNewVal: Attribute): void;
          sendNotification(ntfyObj: Notification): void;
          sendNotification(ntfyText: string): void;
          setAttribute(attribute: Attribute): void;
          setAttributes(attributes: AttributeList): AttributeList;
          setManagedResource(mr: any, mr_type: string): void;
          setModelMBeanInfo(mbi: ModelMBeanInfo): void;
          store(): void;
          _writeToLog(logFileName: string, logEntry: string): void;
          _acc: java.security.AccessControlContext;
          _attributeBroadcaster: NotificationBroadcasterSupport;
          _generalBroadcaster: NotificationBroadcasterSupport;
          _managedResource: any;
          _modelMBeanInfo: ModelMBeanInfo;
          _registered: boolean;
          _server: MBeanServer;
        }
        interface RequiredModelMBean extends CombineTypes<[_RequiredModelMBean, javax.management.MBeanRegistration, javax.management.modelmbean.ModelMBean, java.lang.Object, javax.management.NotificationEmitter]> {}
        interface _XMLParseException$$static extends ClassLike {
          _compat: boolean;
          _newSerialPersistentFields: java.io.ObjectStreamField[];
          _newSerialVersionUID: long;
          _oldSerialPersistentFields: java.io.ObjectStreamField[];
          _oldSerialVersionUID: long;
          _serialPersistentFields: java.io.ObjectStreamField[];
          _serialVersionUID: long;
          new(): XMLParseException;
          new(s: string): XMLParseException;
          new(e: java.lang.Exception, s: string): XMLParseException;
        }
        let XMLParseException: _XMLParseException$$static;
        interface _XMLParseException {
          _readObject(_in: java.io.ObjectInputStream): void;
          _writeObject(out: java.io.ObjectOutputStream): void;
        }
        interface XMLParseException extends CombineTypes<[_XMLParseException, java.lang.Exception]> {}
      }
      module monitor {
        interface _CounterMonitor$$static extends ClassLike {
          _notifsInfo: MBeanNotificationInfo[];
          _types: string[];
          new(): CounterMonitor;
        }
        let CounterMonitor: _CounterMonitor$$static;
        interface _CounterMonitor {
          _buildAlarmNotification(object: ObjectName, attribute: string, value: java.lang.Comparable<any>): MonitorNotification;
          _createObservedObject(object: ObjectName): Monitor$ObservedObject;
          getDerivedGauge(object: ObjectName): number;
          getDerivedGauge(): number;
          getDerivedGauge(a0: ObjectName): any;
          _getDerivedGaugeFromComparable(object: ObjectName, attribute: string, value: java.lang.Comparable<any>): java.lang.Comparable<any>;
          getDerivedGaugeTimeStamp(object: ObjectName): long;
          getDerivedGaugeTimeStamp(): long;
          getDifferenceMode(): boolean;
          getInitThreshold(): number;
          getModulus(): number;
          getNotificationInfo(): MBeanNotificationInfo[];
          getNotify(): boolean;
          getOffset(): number;
          getThreshold(object: ObjectName): number;
          getThreshold(): number;
          _isComparableTypeValid(object: ObjectName, attribute: string, value: java.lang.Comparable<any>): boolean;
          _isThresholdTypeValid(object: ObjectName, attribute: string, value: java.lang.Comparable<any>): boolean;
          _onErrorNotification(notification: MonitorNotification): void;
          _setDerivedGaugeWithDifference(scanCounter: number, mod: number, o: CounterMonitor$CounterMonitorObservedObject): void;
          setDifferenceMode(value: boolean): void;
          setInitThreshold(value: number): void;
          setModulus(value: number): void;
          setNotify(value: boolean): void;
          setOffset(value: number): void;
          setThreshold(value: number): void;
          start(): void;
          stop(): void;
          _updateDerivedGauge(scanCounter: any, o: CounterMonitor$CounterMonitorObservedObject): boolean;
          _updateNotifications(o: CounterMonitor$CounterMonitorObservedObject): MonitorNotification;
          _updateThreshold(o: CounterMonitor$CounterMonitorObservedObject): void;
          _differenceMode: boolean;
          _initThreshold: number;
          _modulus: number;
          _notify: boolean;
          _offset: number;
        }
        interface CounterMonitor extends CombineTypes<[_CounterMonitor, javax.management.monitor.Monitor, javax.management.monitor.CounterMonitorMBean]> {}
        interface _CounterMonitor$CounterMonitorObservedObject$$static extends ClassLike {
          new(observedObject: ObjectName): CounterMonitor$CounterMonitorObservedObject;
        }
        let CounterMonitor$CounterMonitorObservedObject: _CounterMonitor$CounterMonitorObservedObject$$static;
        interface _CounterMonitor$CounterMonitorObservedObject {
          getDerivedGaugeExceeded(): number;
          getDerivedGaugeValid(): boolean;
          getEventAlreadyNotified(): boolean;
          getModulusExceeded(): boolean;
          getPreviousScanCounter(): number;
          getThreshold(): number;
          getType(): Monitor$NumericalType;
          setDerivedGaugeExceeded(derivedGaugeExceeded: number): void;
          setDerivedGaugeValid(derivedGaugeValid: boolean): void;
          setEventAlreadyNotified(eventAlreadyNotified: boolean): void;
          setModulusExceeded(modulusExceeded: boolean): void;
          setPreviousScanCounter(previousScanCounter: number): void;
          setThreshold(threshold: number): void;
          setType(type: Monitor$NumericalType): void;
          _derivedGaugeExceeded: number;
          _derivedGaugeValid: boolean;
          _eventAlreadyNotified: boolean;
          _modulusExceeded: boolean;
          _previousScanCounter: number;
          _threshold: number;
          _type: Monitor$NumericalType;
        }
        interface CounterMonitor$CounterMonitorObservedObject extends CombineTypes<[_CounterMonitor$CounterMonitorObservedObject, javax.management.monitor.Monitor$ObservedObject]> {}
        interface _CounterMonitorMBean$$static extends ClassLike {
        }
        let CounterMonitorMBean: _CounterMonitorMBean$$static;
        interface _CounterMonitorMBean {
          getDerivedGauge(): number;
          getDerivedGauge(a0: ObjectName): number;
          getDerivedGaugeTimeStamp(): long;
          getDerivedGaugeTimeStamp(a0: ObjectName): long;
          getDifferenceMode(): boolean;
          getInitThreshold(): number;
          getModulus(): number;
          getNotify(): boolean;
          getOffset(): number;
          getThreshold(): number;
          getThreshold(a0: ObjectName): number;
          setDifferenceMode(a0: boolean): void;
          setInitThreshold(a0: number): void;
          setModulus(a0: number): void;
          setNotify(a0: boolean): void;
          setOffset(a0: number): void;
          setThreshold(a0: number): void;
        }
        interface CounterMonitorMBean extends CombineTypes<[_CounterMonitorMBean, java.lang.Object, javax.management.monitor.MonitorMBean]> {}
        interface _GaugeMonitor$$static extends ClassLike {
          _FALLING: int;
          _RISING: int;
          _RISING_OR_FALLING: int;
          _notifsInfo: MBeanNotificationInfo[];
          _types: string[];
          new(): GaugeMonitor;
        }
        let GaugeMonitor: _GaugeMonitor$$static;
        interface _GaugeMonitor {
          _buildAlarmNotification(object: ObjectName, attribute: string, value: java.lang.Comparable<any>): MonitorNotification;
          _createObservedObject(object: ObjectName): Monitor$ObservedObject;
          getDerivedGauge(object: ObjectName): number;
          getDerivedGauge(): number;
          getDerivedGauge(a0: ObjectName): any;
          _getDerivedGaugeFromComparable(object: ObjectName, attribute: string, value: java.lang.Comparable<any>): java.lang.Comparable<any>;
          getDerivedGaugeTimeStamp(object: ObjectName): long;
          getDerivedGaugeTimeStamp(): long;
          getDifferenceMode(): boolean;
          getHighThreshold(): number;
          getLowThreshold(): number;
          getNotificationInfo(): MBeanNotificationInfo[];
          getNotifyHigh(): boolean;
          getNotifyLow(): boolean;
          _isComparableTypeValid(object: ObjectName, attribute: string, value: java.lang.Comparable<any>): boolean;
          _isFirstGreaterThanLast(greater: number, less: number, type: Monitor$NumericalType): boolean;
          _isFirstStrictlyGreaterThanLast(greater: number, less: number, className: string): boolean;
          _isThresholdTypeValid(object: ObjectName, attribute: string, value: java.lang.Comparable<any>): boolean;
          _onErrorNotification(notification: MonitorNotification): void;
          _setDerivedGaugeWithDifference(scanGauge: number, o: GaugeMonitor$GaugeMonitorObservedObject): void;
          setDifferenceMode(value: boolean): void;
          setNotifyHigh(value: boolean): void;
          setNotifyLow(value: boolean): void;
          setThresholds(highValue: number, lowValue: number): void;
          start(): void;
          stop(): void;
          _updateDerivedGauge(scanGauge: any, o: GaugeMonitor$GaugeMonitorObservedObject): boolean;
          _updateNotifications(o: GaugeMonitor$GaugeMonitorObservedObject): MonitorNotification;
          _differenceMode: boolean;
          _highThreshold: number;
          _lowThreshold: number;
          _notifyHigh: boolean;
          _notifyLow: boolean;
        }
        interface GaugeMonitor extends CombineTypes<[_GaugeMonitor, javax.management.monitor.GaugeMonitorMBean, javax.management.monitor.Monitor]> {}
        interface _GaugeMonitor$GaugeMonitorObservedObject$$static extends ClassLike {
          new(observedObject: ObjectName): GaugeMonitor$GaugeMonitorObservedObject;
        }
        let GaugeMonitor$GaugeMonitorObservedObject: _GaugeMonitor$GaugeMonitorObservedObject$$static;
        interface _GaugeMonitor$GaugeMonitorObservedObject {
          getDerivedGaugeValid(): boolean;
          getPreviousScanGauge(): number;
          getStatus(): int;
          getType(): Monitor$NumericalType;
          setDerivedGaugeValid(derivedGaugeValid: boolean): void;
          setPreviousScanGauge(previousScanGauge: number): void;
          setStatus(status: int): void;
          setType(type: Monitor$NumericalType): void;
          _derivedGaugeValid: boolean;
          _previousScanGauge: number;
          _status: int;
          _type: Monitor$NumericalType;
        }
        interface GaugeMonitor$GaugeMonitorObservedObject extends CombineTypes<[_GaugeMonitor$GaugeMonitorObservedObject, javax.management.monitor.Monitor$ObservedObject]> {}
        interface _GaugeMonitorMBean$$static extends ClassLike {
        }
        let GaugeMonitorMBean: _GaugeMonitorMBean$$static;
        interface _GaugeMonitorMBean {
          getDerivedGauge(): number;
          getDerivedGauge(a0: ObjectName): number;
          getDerivedGaugeTimeStamp(): long;
          getDerivedGaugeTimeStamp(a0: ObjectName): long;
          getDifferenceMode(): boolean;
          getHighThreshold(): number;
          getLowThreshold(): number;
          getNotifyHigh(): boolean;
          getNotifyLow(): boolean;
          setDifferenceMode(a0: boolean): void;
          setNotifyHigh(a0: boolean): void;
          setNotifyLow(a0: boolean): void;
          setThresholds(a0: number, a1: number): void;
        }
        interface GaugeMonitorMBean extends CombineTypes<[_GaugeMonitorMBean, java.lang.Object, javax.management.monitor.MonitorMBean]> {}
        interface _Monitor$$static extends ClassLike {
          _classForType(type: Monitor$NumericalType): java.lang.Class<number>;
          _isValidForType(value: any, c: java.lang.Class<number>): boolean;
          _INTEGER_ZERO: int;
          _OBSERVED_ATTRIBUTE_ERROR_NOTIFIED: int;
          _OBSERVED_ATTRIBUTE_TYPE_ERROR_NOTIFIED: int;
          _OBSERVED_OBJECT_ERROR_NOTIFIED: int;
          _RESET_FLAGS_ALREADY_NOTIFIED: int;
          _RUNTIME_ERROR_NOTIFIED: int;
          _THRESHOLD_ERROR_NOTIFIED: int;
          _capacityIncrement: int;
          _executors: java.util.Map<java.util.concurrent.ThreadPoolExecutor,java.lang.Void>;
          _executorsLock: any;
          _maximumPoolSize: int;
          _noPermissionsACC: java.security.AccessControlContext;
          _scheduler: java.util.concurrent.ScheduledExecutorService;
          new(): Monitor;
        }
        let Monitor: _Monitor$$static;
        interface _Monitor {
          addObservedObject(object: ObjectName): void;
          _buildAlarmNotification(object: ObjectName, attribute: string, value: java.lang.Comparable<any>): MonitorNotification;
          _buildErrorNotification(object: ObjectName, attribute: string, value: java.lang.Comparable<any>): string;
          _cleanupFutures(): void;
          _cleanupIsComplexTypeAttribute(): void;
          _computeAlreadyNotifiedIndex(o: Monitor$ObservedObject, index: int, an: int[]): int;
          containsObservedObject(object: ObjectName): boolean;
          _createAlreadyNotified(): void;
          _createObservedObject(object: ObjectName): Monitor$ObservedObject;
          _doStart(): void;
          _doStop(): void;
          _getAttribute(mbsc: MBeanServerConnection, object: ObjectName, attribute: string): any;
          _getComparableFromAttribute(object: ObjectName, attribute: string, value: any): java.lang.Comparable<any>;
          _getDerivedGauge(object: ObjectName): any;
          _getDerivedGaugeFromComparable(object: ObjectName, attribute: string, value: java.lang.Comparable<any>): java.lang.Comparable<any>;
          _getDerivedGaugeTimeStamp(object: ObjectName): long;
          getGranularityPeriod(): long;
          getObservedAttribute(): string;
          getObservedObject(): ObjectName;
          _getObservedObject(object: ObjectName): Monitor$ObservedObject;
          getObservedObjects(): ObjectName[];
          isActive(): boolean;
          _isAlreadyNotified(o: Monitor$ObservedObject, mask: int): boolean;
          _isComparableTypeValid(object: ObjectName, attribute: string, value: java.lang.Comparable<any>): boolean;
          _isThresholdTypeValid(object: ObjectName, attribute: string, value: java.lang.Comparable<any>): boolean;
          _monitor(o: Monitor$ObservedObject, index: int, an: int[]): void;
          _onErrorNotification(notification: MonitorNotification): void;
          postDeregister(): void;
          postRegister(registrationDone: boolean): void;
          preDeregister(): void;
          preRegister(server: MBeanServer, name: ObjectName): ObjectName;
          removeObservedObject(object: ObjectName): void;
          _resetAllAlreadyNotified(o: Monitor$ObservedObject, index: int, an: int[]): void;
          _resetAlreadyNotified(o: Monitor$ObservedObject, index: int, mask: int): void;
          _sendNotification(type: string, timeStamp: long, a2: string, msg: any, derGauge: any, trigger: ObjectName, object: boolean): void;
          _setAlreadyNotified(o: Monitor$ObservedObject, index: int, mask: int, an: int[]): void;
          setGranularityPeriod(period: long): void;
          setObservedAttribute(attribute: string): void;
          setObservedObject(object: ObjectName): void;
          start(): void;
          stop(): void;
          _updateAlreadyNotified(o: Monitor$ObservedObject, index: int): void;
          _updateDeprecatedAlreadyNotified(): void;
          _acc: java.security.AccessControlContext;
          _alreadyNotified: int;
          _alreadyNotifieds: int[];
          _dbgTag: string;
          _elementCount: int;
          _firstAttribute: string;
          _granularityPeriod: long;
          _isActive: boolean;
          _isComplexTypeAttribute: boolean;
          _monitorFuture: java.util.concurrent.Future<any>;
          _observedAttribute: string;
          _observedObjects: java.util.List<Monitor$ObservedObject>;
          _remainingAttributes: java.util.List<string>;
          _schedulerFuture: java.util.concurrent.ScheduledFuture<any>;
          _schedulerTask: Monitor$SchedulerTask;
          _sequenceNumber: java.util.concurrent.atomic.AtomicLong;
          _server: MBeanServer;
        }
        interface Monitor extends CombineTypes<[_Monitor, javax.management.MBeanRegistration, javax.management.NotificationBroadcasterSupport, javax.management.monitor.MonitorMBean]> {}
        interface _Monitor$DaemonThreadFactory$$static extends ClassLike {
          _nameSuffix: string;
          new(poolName: string): Monitor$DaemonThreadFactory;
          new(poolName: string, threadGroup: java.lang.ThreadGroup): Monitor$DaemonThreadFactory;
        }
        let Monitor$DaemonThreadFactory: _Monitor$DaemonThreadFactory$$static;
        interface _Monitor$DaemonThreadFactory {
          getThreadGroup(): java.lang.ThreadGroup;
          newThread(r: java.lang.Runnable): java.lang.Thread;
          _group: java.lang.ThreadGroup;
          _namePrefix: string;
          _threadNumber: java.util.concurrent.atomic.AtomicInteger;
        }
        interface Monitor$DaemonThreadFactory extends CombineTypes<[_Monitor$DaemonThreadFactory, java.lang.Object, java.util.concurrent.ThreadFactory]> {}
        interface _Monitor$MonitorTask$$static extends ClassLike {
          new(a0: Monitor): Monitor$MonitorTask;
        }
        let Monitor$MonitorTask: _Monitor$MonitorTask$$static;
        interface _Monitor$MonitorTask {
          run(): void;
          submit(): java.util.concurrent.Future<any>;
          _executor: java.util.concurrent.ThreadPoolExecutor;
          _this$0: Monitor;
        }
        interface Monitor$MonitorTask extends CombineTypes<[_Monitor$MonitorTask, java.lang.Object, java.lang.Runnable]> {}
        interface _Monitor$NumericalType$$static extends ClassLike {
          valueOf(name: string): Monitor$NumericalType;
          values(): Monitor$NumericalType[];
          readonly BYTE: Monitor$NumericalType;
          readonly DOUBLE: Monitor$NumericalType;
          readonly FLOAT: Monitor$NumericalType;
          readonly INTEGER: Monitor$NumericalType;
          readonly LONG: Monitor$NumericalType;
          readonly SHORT: Monitor$NumericalType;
        }
        let Monitor$NumericalType: _Monitor$NumericalType$$static;
        interface _Monitor$NumericalType {
        }
        interface Monitor$NumericalType extends CombineTypes<[_Monitor$NumericalType]> {}
        interface _Monitor$ObservedObject$$static extends ClassLike {
          new(observedObject: ObjectName): Monitor$ObservedObject;
        }
        let Monitor$ObservedObject: _Monitor$ObservedObject$$static;
        interface _Monitor$ObservedObject {
          getAlreadyNotified(): int;
          getDerivedGauge(): any;
          getDerivedGaugeTimeStamp(): long;
          getObservedObject(): ObjectName;
          setAlreadyNotified(alreadyNotified: int): void;
          setDerivedGauge(derivedGauge: any): void;
          setDerivedGaugeTimeStamp(derivedGaugeTimeStamp: long): void;
          _alreadyNotified: int;
          _derivedGauge: any;
          _derivedGaugeTimeStamp: long;
          _observedObject: ObjectName;
        }
        interface Monitor$ObservedObject extends CombineTypes<[_Monitor$ObservedObject, java.lang.Object]> {}
        interface _Monitor$SchedulerTask$$static extends ClassLike {
          new(a0: Monitor): Monitor$SchedulerTask;
        }
        let Monitor$SchedulerTask: _Monitor$SchedulerTask$$static;
        interface _Monitor$SchedulerTask {
          run(): void;
          setMonitorTask(task: Monitor$MonitorTask): void;
          _task: Monitor$MonitorTask;
          _this$0: Monitor;
        }
        interface Monitor$SchedulerTask extends CombineTypes<[_Monitor$SchedulerTask, java.lang.Object, java.lang.Runnable]> {}
        interface _MonitorMBean$$static extends ClassLike {
        }
        let MonitorMBean: _MonitorMBean$$static;
        interface _MonitorMBean {
          addObservedObject(a0: ObjectName): void;
          containsObservedObject(a0: ObjectName): boolean;
          getGranularityPeriod(): long;
          getObservedAttribute(): string;
          getObservedObject(): ObjectName;
          getObservedObjects(): ObjectName[];
          isActive(): boolean;
          removeObservedObject(a0: ObjectName): void;
          setGranularityPeriod(a0: long): void;
          setObservedAttribute(a0: string): void;
          setObservedObject(a0: ObjectName): void;
          start(): void;
          stop(): void;
        }
        interface MonitorMBean extends CombineTypes<[_MonitorMBean, java.lang.Object]> {}
        interface _MonitorNotification$$static extends ClassLike {
          readonly OBSERVED_ATTRIBUTE_ERROR: string;
          readonly OBSERVED_ATTRIBUTE_TYPE_ERROR: string;
          readonly OBSERVED_OBJECT_ERROR: string;
          readonly RUNTIME_ERROR: string;
          readonly STRING_TO_COMPARE_VALUE_DIFFERED: string;
          readonly STRING_TO_COMPARE_VALUE_MATCHED: string;
          readonly THRESHOLD_ERROR: string;
          readonly THRESHOLD_HIGH_VALUE_EXCEEDED: string;
          readonly THRESHOLD_LOW_VALUE_EXCEEDED: string;
          readonly THRESHOLD_VALUE_EXCEEDED: string;
          _serialVersionUID: long;
          _new(type: string, source: any, sequenceNumber: long, a3: long, timeStamp: string, a5: ObjectName, msg: string, obsObj: any, obsAtt: any): MonitorNotification;
        }
        let MonitorNotification: _MonitorNotification$$static;
        interface _MonitorNotification {
          getDerivedGauge(): any;
          getObservedAttribute(): string;
          getObservedObject(): ObjectName;
          getTrigger(): any;
          _derivedGauge: any;
          _observedAttribute: string;
          _observedObject: ObjectName;
          _trigger: any;
        }
        interface MonitorNotification extends CombineTypes<[_MonitorNotification, javax.management.Notification]> {}
        interface _MonitorSettingException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): MonitorSettingException;
          new(message: string): MonitorSettingException;
        }
        let MonitorSettingException: _MonitorSettingException$$static;
        interface _MonitorSettingException {
        }
        interface MonitorSettingException extends CombineTypes<[_MonitorSettingException, javax.management.JMRuntimeException]> {}
        interface _StringMonitor$$static extends ClassLike {
          _DIFFERING: int;
          _MATCHING: int;
          _MATCHING_OR_DIFFERING: int;
          _notifsInfo: MBeanNotificationInfo[];
          _types: string[];
          new(): StringMonitor;
        }
        let StringMonitor: _StringMonitor$$static;
        interface _StringMonitor {
          _buildAlarmNotification(object: ObjectName, attribute: string, value: java.lang.Comparable<any>): MonitorNotification;
          _createObservedObject(object: ObjectName): Monitor$ObservedObject;
          getDerivedGauge(object: ObjectName): string;
          getDerivedGauge(): string;
          getDerivedGauge(a0: ObjectName): any;
          getDerivedGaugeTimeStamp(object: ObjectName): long;
          getDerivedGaugeTimeStamp(): long;
          getNotificationInfo(): MBeanNotificationInfo[];
          getNotifyDiffer(): boolean;
          getNotifyMatch(): boolean;
          getStringToCompare(): string;
          _isComparableTypeValid(object: ObjectName, attribute: string, value: java.lang.Comparable<any>): boolean;
          _onErrorNotification(notification: MonitorNotification): void;
          setNotifyDiffer(value: boolean): void;
          setNotifyMatch(value: boolean): void;
          setStringToCompare(value: string): void;
          start(): void;
          stop(): void;
          _notifyDiffer: boolean;
          _notifyMatch: boolean;
          _stringToCompare: string;
        }
        interface StringMonitor extends CombineTypes<[_StringMonitor, javax.management.monitor.StringMonitorMBean, javax.management.monitor.Monitor]> {}
        interface _StringMonitor$StringMonitorObservedObject$$static extends ClassLike {
          new(observedObject: ObjectName): StringMonitor$StringMonitorObservedObject;
        }
        let StringMonitor$StringMonitorObservedObject: _StringMonitor$StringMonitorObservedObject$$static;
        interface _StringMonitor$StringMonitorObservedObject {
          getStatus(): int;
          setStatus(status: int): void;
          _status: int;
        }
        interface StringMonitor$StringMonitorObservedObject extends CombineTypes<[_StringMonitor$StringMonitorObservedObject, javax.management.monitor.Monitor$ObservedObject]> {}
        interface _StringMonitorMBean$$static extends ClassLike {
        }
        let StringMonitorMBean: _StringMonitorMBean$$static;
        interface _StringMonitorMBean {
          getDerivedGauge(): string;
          getDerivedGauge(a0: ObjectName): string;
          getDerivedGaugeTimeStamp(): long;
          getDerivedGaugeTimeStamp(a0: ObjectName): long;
          getNotifyDiffer(): boolean;
          getNotifyMatch(): boolean;
          getStringToCompare(): string;
          setNotifyDiffer(a0: boolean): void;
          setNotifyMatch(a0: boolean): void;
          setStringToCompare(a0: string): void;
        }
        interface StringMonitorMBean extends CombineTypes<[_StringMonitorMBean, java.lang.Object, javax.management.monitor.MonitorMBean]> {}
      }
      module openmbean {
        interface _ArrayType$$static<T> extends ClassLike {
          _buildArrayClassName(dimension: int, elementType: OpenType<any>): string;
          _buildArrayClassName(dimension: int, elementType: OpenType<any>, isPrimitiveArray: boolean): string;
          _buildArrayDescription(dimension: int, elementType: OpenType<any>): string;
          _buildArrayDescription(dimension: int, elementType: OpenType<any>, isPrimitiveArray: boolean): string;
          getArrayType<E>(elementType: OpenType<E>): ArrayType<E[]>;
          getPrimitiveArrayType<T>(arrayClass: java.lang.Class<T>): ArrayType<T>;
          _getPrimitiveOpenType(primitiveTypeName: string): SimpleType<any>;
          _getPrimitiveTypeKey(elementClassName: string): string;
          _getPrimitiveTypeName(elementClassName: string): string;
          _isPrimitiveContentType(primitiveKey: string): boolean;
          _PRIMITIVE_ARRAY_TYPES: any[][];
          _PRIMITIVE_OPEN_TYPE_INDEX: int;
          _PRIMITIVE_TYPE_KEY_INDEX: int;
          _PRIMITIVE_TYPE_NAME_INDEX: int;
          _PRIMITIVE_WRAPPER_NAME_INDEX: int;
          _serialVersionUID: long;
          new(dimension: int, elementType: OpenType<any>): ArrayType<T>;
          new(elementType: SimpleType<any>, primitiveArray: boolean): ArrayType<T>;
          _new(className: string, typeName: string, description: string, dimension: int, elementType: OpenType<any>, primitiveArray: boolean): ArrayType<T>;
        }
        let ArrayType: _ArrayType$$static<T>;
        interface _ArrayType<T> {
          _checkElementsType(x_dim_Array: any[], dim: int): boolean;
          _convertFromPrimitiveToWrapperTypes<T>(): ArrayType<T>;
          _convertFromWrapperToPrimitiveTypes<T>(): ArrayType<T>;
          equals(obj: any): boolean;
          getDimension(): int;
          getElementOpenType(): OpenType<any>;
          hashCode(): int;
          _isAssignableFrom(ot: OpenType<any>): boolean;
          isPrimitiveArray(): boolean;
          isValue(obj: any): boolean;
          _readResolve(): any;
          toString(): string;
          _writeReplace(): any;
          _dimension: int;
          _elementType: OpenType<any>;
          _myHashCode: int;
          _myToString: string;
          _primitiveArray: boolean;
        }
        interface ArrayType<T> extends CombineTypes<[_ArrayType<T>, OpenType<T>]> {}
        interface _CompositeData$$static extends ClassLike {
        }
        let CompositeData: _CompositeData$$static;
        interface _CompositeData {
          containsKey(a0: string): boolean;
          containsValue(a0: any): boolean;
          equals(a0: any): boolean;
          get(a0: string): any;
          getAll(a0: string[]): any[];
          getCompositeType(): CompositeType;
          hashCode(): int;
          toString(): string;
          values(): java.util.Collection<any>;
        }
        interface CompositeData extends CombineTypes<[_CompositeData, java.lang.Object]> {}
        interface _CompositeDataInvocationHandler$$static extends ClassLike {
          new(compositeData: CompositeData): CompositeDataInvocationHandler;
          _new(compositeData: CompositeData, lookup: com.sun.jmx.mbeanserver.MXBeanLookup): CompositeDataInvocationHandler;
        }
        let CompositeDataInvocationHandler: _CompositeDataInvocationHandler$$static;
        interface _CompositeDataInvocationHandler {
          _equals(proxy: any, other: any): boolean;
          getCompositeData(): CompositeData;
          invoke(proxy: any, method: java.lang.reflect.Method, args: any[]): any;
          _compositeData: CompositeData;
          _lookup: com.sun.jmx.mbeanserver.MXBeanLookup;
        }
        interface CompositeDataInvocationHandler extends CombineTypes<[_CompositeDataInvocationHandler, java.lang.Object, java.lang.reflect.InvocationHandler]> {}
        interface _CompositeDataSupport$$static extends ClassLike {
          _makeMap(itemNames: string[], itemValues: any[]): java.util.SortedMap<string,any>;
          _makeMap(items: java.util.Map<string,any>): java.util.SortedMap<string,any>;
          _serialVersionUID: long;
          new(compositeType: CompositeType, itemNames: string[], itemValues: any[]): CompositeDataSupport;
          new(compositeType: CompositeType, items: java.util.Map<string,any>): CompositeDataSupport;
        }
        let CompositeDataSupport: _CompositeDataSupport$$static;
        interface _CompositeDataSupport {
          containsKey(key: string): boolean;
          containsValue(value: any): boolean;
          _contentString(): string;
          equals(obj: any): boolean;
          get(key: string): any;
          getAll(keys: string[]): any[];
          getCompositeType(): CompositeType;
          hashCode(): int;
          toString(): string;
          values(): java.util.Collection<any>;
          _compositeType: CompositeType;
          _contents: java.util.SortedMap<string,any>;
        }
        interface CompositeDataSupport extends CombineTypes<[_CompositeDataSupport, javax.management.openmbean.CompositeData, java.lang.Object, java.io.Serializable]> {}
        interface _CompositeDataView$$static extends ClassLike {
        }
        let CompositeDataView: _CompositeDataView$$static;
        interface _CompositeDataView {
          toCompositeData(a0: CompositeType): CompositeData;
(a0: CompositeType): CompositeData;
        }
        interface CompositeDataView extends CombineTypes<[_CompositeDataView, java.lang.Object]> {}
        interface _CompositeType$$static extends ClassLike {
          _checkForEmptyString(arg: string[], argName: string): void;
          _checkForNullElement(arg: any[], argName: string): void;
          _serialVersionUID: long;
          new(typeName: string, description: string, itemNames: string[], itemDescriptions: string[], itemTypes: OpenType<any>[]): CompositeType;
        }
        let CompositeType: _CompositeType$$static;
        interface _CompositeType {
          containsKey(itemName: string): boolean;
          equals(obj: any): boolean;
          getDescription(itemName: string): string;
          getType(itemName: string): OpenType<any>;
          hashCode(): int;
          _isAssignableFrom(ot: OpenType<any>): boolean;
          isValue(obj: any): boolean;
          keySet(): java.util.Set<string>;
          toString(): string;
          _myHashCode: int;
          _myNamesSet: java.util.Set<string>;
          _myToString: string;
          _nameToDescription: java.util.TreeMap<string,string>;
          _nameToType: java.util.TreeMap<string,OpenType<any>>;
        }
        interface CompositeType extends CombineTypes<[_CompositeType, OpenType<CompositeData>]> {}
        interface _InvalidKeyException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): InvalidKeyException;
          new(msg: string): InvalidKeyException;
        }
        let InvalidKeyException: _InvalidKeyException$$static;
        interface _InvalidKeyException {
        }
        interface InvalidKeyException extends CombineTypes<[_InvalidKeyException, java.lang.IllegalArgumentException]> {}
        interface _InvalidOpenTypeException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): InvalidOpenTypeException;
          new(msg: string): InvalidOpenTypeException;
        }
        let InvalidOpenTypeException: _InvalidOpenTypeException$$static;
        interface _InvalidOpenTypeException {
        }
        interface InvalidOpenTypeException extends CombineTypes<[_InvalidOpenTypeException, java.lang.IllegalArgumentException]> {}
        interface _KeyAlreadyExistsException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): KeyAlreadyExistsException;
          new(msg: string): KeyAlreadyExistsException;
        }
        let KeyAlreadyExistsException: _KeyAlreadyExistsException$$static;
        interface _KeyAlreadyExistsException {
        }
        interface KeyAlreadyExistsException extends CombineTypes<[_KeyAlreadyExistsException, java.lang.IllegalArgumentException]> {}
        interface _OpenDataException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): OpenDataException;
          new(msg: string): OpenDataException;
        }
        let OpenDataException: _OpenDataException$$static;
        interface _OpenDataException {
        }
        interface OpenDataException extends CombineTypes<[_OpenDataException, javax.management.JMException]> {}
        interface _OpenMBeanAttributeInfo$$static extends ClassLike {
        }
        let OpenMBeanAttributeInfo: _OpenMBeanAttributeInfo$$static;
        interface _OpenMBeanAttributeInfo {
          equals(a0: any): boolean;
          hashCode(): int;
          isIs(): boolean;
          isReadable(): boolean;
          isWritable(): boolean;
          toString(): string;
        }
        interface OpenMBeanAttributeInfo extends CombineTypes<[_OpenMBeanAttributeInfo, javax.management.openmbean.OpenMBeanParameterInfo, java.lang.Object]> {}
        interface _OpenMBeanAttributeInfoSupport$$static extends ClassLike {
          _cast<T>(x: any): T;
          _check(info: OpenMBeanParameterInfo): void;
          _comparableValueFrom<T>(d: Descriptor, name: string, openType: OpenType<T>): java.lang.Comparable<any>;
          _compare(x: any, y: any): int;
          _convertFrom<T>(x: any, openType: OpenType<T>): T;
          _convertFromString<T>(s: string, openType: OpenType<T>): T;
          _convertFromStringArray<T>(x: any, openType: OpenType<T>): T;
          _convertFromStrings<T>(x: any, openType: OpenType<T>): T;
          _equal(x1: OpenMBeanParameterInfo, x2: OpenMBeanParameterInfo): boolean;
          _hashCode(info: OpenMBeanParameterInfo): int;
          _isValue(info: OpenMBeanParameterInfo, obj: any): boolean;
          _makeDescriptor<T>(openType: OpenType<T>, defaultValue: T, legalValues: T[], minValue: java.lang.Comparable<T>, maxValue: java.lang.Comparable<T>): Descriptor;
          _makeDescriptor<T>(openType: OpenType<T>, defaultValue: T, legalValues: java.util.Set<T>, minValue: java.lang.Comparable<T>, maxValue: java.lang.Comparable<T>): Descriptor;
          _toString(info: OpenMBeanParameterInfo): string;
          _valueFrom<T>(d: Descriptor, name: string, openType: OpenType<T>): T;
          _valuesFrom<T>(d: Descriptor, name: string, openType: OpenType<T>): java.util.Set<T>;
          _serialVersionUID: long;
          new(name: string, description: string, openType: OpenType<any>, isReadable: boolean, isWritable: boolean, isIs: boolean): OpenMBeanAttributeInfoSupport;
          new(name: string, description: string, openType: OpenType<any>, isReadable: boolean, isWritable: boolean, isIs: boolean, descriptor: Descriptor): OpenMBeanAttributeInfoSupport;
          new<T>(name: string, description: string, openType: OpenType<T>, isReadable: boolean, isWritable: boolean, isIs: boolean, defaultValue: T): OpenMBeanAttributeInfoSupport;
          new<T>(name: string, description: string, openType: OpenType<T>, isReadable: boolean, isWritable: boolean, isIs: boolean, defaultValue: T, legalValues: T[]): OpenMBeanAttributeInfoSupport;
          new<T>(name: string, description: string, openType: OpenType<T>, isReadable: boolean, isWritable: boolean, isIs: boolean, defaultValue: T, minValue: java.lang.Comparable<T>, maxValue: java.lang.Comparable<T>): OpenMBeanAttributeInfoSupport;
        }
        let OpenMBeanAttributeInfoSupport: _OpenMBeanAttributeInfoSupport$$static;
        interface _OpenMBeanAttributeInfoSupport {
          equals(obj: any): boolean;
          getDefaultValue(): any;
          getLegalValues(): java.util.Set<any>;
          getMaxValue(): java.lang.Comparable<any>;
          getMinValue(): java.lang.Comparable<any>;
          getOpenType(): OpenType<any>;
          hasDefaultValue(): boolean;
          hasLegalValues(): boolean;
          hasMaxValue(): boolean;
          hasMinValue(): boolean;
          hashCode(): int;
          isValue(obj: any): boolean;
          _readResolve(): any;
          toString(): string;
          _defaultValue: any;
          _legalValues: java.util.Set<any>;
          _maxValue: java.lang.Comparable<any>;
          _minValue: java.lang.Comparable<any>;
          _myHashCode: int;
          _myToString: string;
          _openType: OpenType<any>;
        }
        interface OpenMBeanAttributeInfoSupport extends CombineTypes<[_OpenMBeanAttributeInfoSupport, javax.management.openmbean.OpenMBeanAttributeInfo, javax.management.MBeanAttributeInfo]> {}
        interface _OpenMBeanConstructorInfo$$static extends ClassLike {
        }
        let OpenMBeanConstructorInfo: _OpenMBeanConstructorInfo$$static;
        interface _OpenMBeanConstructorInfo {
          equals(a0: any): boolean;
          getDescription(): string;
          getName(): string;
          getSignature(): MBeanParameterInfo[];
          hashCode(): int;
          toString(): string;
        }
        interface OpenMBeanConstructorInfo extends CombineTypes<[_OpenMBeanConstructorInfo, java.lang.Object]> {}
        interface _OpenMBeanConstructorInfoSupport$$static extends ClassLike {
          _arrayCopyCast(src: OpenMBeanParameterInfo[]): MBeanParameterInfo[];
          _serialVersionUID: long;
          new(name: string, description: string, signature: OpenMBeanParameterInfo[]): OpenMBeanConstructorInfoSupport;
          new(name: string, description: string, signature: OpenMBeanParameterInfo[], descriptor: Descriptor): OpenMBeanConstructorInfoSupport;
        }
        let OpenMBeanConstructorInfoSupport: _OpenMBeanConstructorInfoSupport$$static;
        interface _OpenMBeanConstructorInfoSupport {
          equals(obj: any): boolean;
          hashCode(): int;
          toString(): string;
          _myHashCode: int;
          _myToString: string;
        }
        interface OpenMBeanConstructorInfoSupport extends CombineTypes<[_OpenMBeanConstructorInfoSupport, javax.management.MBeanConstructorInfo, javax.management.openmbean.OpenMBeanConstructorInfo]> {}
        interface _OpenMBeanInfo$$static extends ClassLike {
        }
        let OpenMBeanInfo: _OpenMBeanInfo$$static;
        interface _OpenMBeanInfo {
          equals(a0: any): boolean;
          getAttributes(): MBeanAttributeInfo[];
          getClassName(): string;
          getConstructors(): MBeanConstructorInfo[];
          getDescription(): string;
          getNotifications(): MBeanNotificationInfo[];
          getOperations(): MBeanOperationInfo[];
          hashCode(): int;
          toString(): string;
        }
        interface OpenMBeanInfo extends CombineTypes<[_OpenMBeanInfo, java.lang.Object]> {}
        interface _OpenMBeanInfoSupport$$static extends ClassLike {
          _arraySetHash<T>(a: T[]): int;
          _attributeArray(src: OpenMBeanAttributeInfo[]): MBeanAttributeInfo[];
          _constructorArray(src: OpenMBeanConstructorInfo[]): MBeanConstructorInfo[];
          _operationArray(src: OpenMBeanOperationInfo[]): MBeanOperationInfo[];
          _sameArrayContents<T>(a1: T[], a2: T[]): boolean;
          _serialVersionUID: long;
          new(className: string, description: string, openAttributes: OpenMBeanAttributeInfo[], openConstructors: OpenMBeanConstructorInfo[], openOperations: OpenMBeanOperationInfo[], notifications: MBeanNotificationInfo[]): OpenMBeanInfoSupport;
          new(className: string, description: string, openAttributes: OpenMBeanAttributeInfo[], openConstructors: OpenMBeanConstructorInfo[], openOperations: OpenMBeanOperationInfo[], notifications: MBeanNotificationInfo[], descriptor: Descriptor): OpenMBeanInfoSupport;
        }
        let OpenMBeanInfoSupport: _OpenMBeanInfoSupport$$static;
        interface _OpenMBeanInfoSupport {
          equals(obj: any): boolean;
          hashCode(): int;
          toString(): string;
          _myHashCode: int;
          _myToString: string;
        }
        interface OpenMBeanInfoSupport extends CombineTypes<[_OpenMBeanInfoSupport, javax.management.openmbean.OpenMBeanInfo, javax.management.MBeanInfo]> {}
        interface _OpenMBeanOperationInfo$$static extends ClassLike {
        }
        let OpenMBeanOperationInfo: _OpenMBeanOperationInfo$$static;
        interface _OpenMBeanOperationInfo {
          equals(a0: any): boolean;
          getDescription(): string;
          getImpact(): int;
          getName(): string;
          getReturnOpenType(): OpenType<any>;
          getReturnType(): string;
          getSignature(): MBeanParameterInfo[];
          hashCode(): int;
          toString(): string;
        }
        interface OpenMBeanOperationInfo extends CombineTypes<[_OpenMBeanOperationInfo, java.lang.Object]> {}
        interface _OpenMBeanOperationInfoSupport$$static extends ClassLike {
          _arrayCopyCast(src: OpenMBeanParameterInfo[]): MBeanParameterInfo[];
          _arrayCopyCast(src: MBeanParameterInfo[]): OpenMBeanParameterInfo[];
          _serialVersionUID: long;
          new(name: string, description: string, signature: OpenMBeanParameterInfo[], returnOpenType: OpenType<any>, impact: int): OpenMBeanOperationInfoSupport;
          new(name: string, description: string, signature: OpenMBeanParameterInfo[], returnOpenType: OpenType<any>, impact: int, descriptor: Descriptor): OpenMBeanOperationInfoSupport;
        }
        let OpenMBeanOperationInfoSupport: _OpenMBeanOperationInfoSupport$$static;
        interface _OpenMBeanOperationInfoSupport {
          equals(obj: any): boolean;
          getReturnOpenType(): OpenType<any>;
          hashCode(): int;
          _readResolve(): any;
          toString(): string;
          _myHashCode: int;
          _myToString: string;
          _returnOpenType: OpenType<any>;
        }
        interface OpenMBeanOperationInfoSupport extends CombineTypes<[_OpenMBeanOperationInfoSupport, javax.management.MBeanOperationInfo, javax.management.openmbean.OpenMBeanOperationInfo]> {}
        interface _OpenMBeanParameterInfo$$static extends ClassLike {
        }
        let OpenMBeanParameterInfo: _OpenMBeanParameterInfo$$static;
        interface _OpenMBeanParameterInfo {
          equals(a0: any): boolean;
          getDefaultValue(): any;
          getDescription(): string;
          getLegalValues(): java.util.Set<any>;
          getMaxValue(): java.lang.Comparable<any>;
          getMinValue(): java.lang.Comparable<any>;
          getName(): string;
          getOpenType(): OpenType<any>;
          hasDefaultValue(): boolean;
          hasLegalValues(): boolean;
          hasMaxValue(): boolean;
          hasMinValue(): boolean;
          hashCode(): int;
          isValue(a0: any): boolean;
          toString(): string;
        }
        interface OpenMBeanParameterInfo extends CombineTypes<[_OpenMBeanParameterInfo, java.lang.Object]> {}
        interface _OpenMBeanParameterInfoSupport$$static extends ClassLike {
          _serialVersionUID: long;
          new(name: string, description: string, openType: OpenType<any>): OpenMBeanParameterInfoSupport;
          new(name: string, description: string, openType: OpenType<any>, descriptor: Descriptor): OpenMBeanParameterInfoSupport;
          new<T>(name: string, description: string, openType: OpenType<T>, defaultValue: T): OpenMBeanParameterInfoSupport;
          new<T>(name: string, description: string, openType: OpenType<T>, defaultValue: T, legalValues: T[]): OpenMBeanParameterInfoSupport;
          new<T>(name: string, description: string, openType: OpenType<T>, defaultValue: T, minValue: java.lang.Comparable<T>, maxValue: java.lang.Comparable<T>): OpenMBeanParameterInfoSupport;
        }
        let OpenMBeanParameterInfoSupport: _OpenMBeanParameterInfoSupport$$static;
        interface _OpenMBeanParameterInfoSupport {
          equals(obj: any): boolean;
          getDefaultValue(): any;
          getLegalValues(): java.util.Set<any>;
          getMaxValue(): java.lang.Comparable<any>;
          getMinValue(): java.lang.Comparable<any>;
          getOpenType(): OpenType<any>;
          hasDefaultValue(): boolean;
          hasLegalValues(): boolean;
          hasMaxValue(): boolean;
          hasMinValue(): boolean;
          hashCode(): int;
          isValue(obj: any): boolean;
          _readResolve(): any;
          toString(): string;
          _defaultValue: any;
          _legalValues: java.util.Set<any>;
          _maxValue: java.lang.Comparable<any>;
          _minValue: java.lang.Comparable<any>;
          _myHashCode: int;
          _myToString: string;
          _openType: OpenType<any>;
        }
        interface OpenMBeanParameterInfoSupport extends CombineTypes<[_OpenMBeanParameterInfoSupport, javax.management.openmbean.OpenMBeanParameterInfo, javax.management.MBeanParameterInfo]> {}
        interface _OpenType$$static<T> extends ClassLike {
          _overridesGetClassName(c: java.lang.Class<any>): boolean;
          _valid(argName: string, argValue: string): string;
          _validClassName(className: string): string;
          readonly ALLOWED_CLASSNAMES: string[];
          readonly ALLOWED_CLASSNAMES_LIST: java.util.List<string>;
          _serialVersionUID: long;
          _new(className: string, typeName: string, description: string): OpenType<T>;
          _new(className: string, typeName: string, description: string, isArray: boolean): OpenType<T>;
        }
        let OpenType: _OpenType$$static<T>;
        interface _OpenType<T> {
          _checkClassNameOverride(): void;
          equals(a0: any): boolean;
          getClassName(): string;
          getDescription(): string;
          _getDescriptor(): Descriptor;
          getTypeName(): string;
          hashCode(): int;
          isArray(): boolean;
          _isAssignableFrom(ot: OpenType<any>): boolean;
          isValue(a0: any): boolean;
          _readObject(_in: java.io.ObjectInputStream): void;
          _safeGetClassName(): string;
          toString(): string;
          _className: string;
          _description: string;
          _descriptor: Descriptor;
          _isArray: boolean;
          _typeName: string;
        }
        interface OpenType<T> extends CombineTypes<[_OpenType<T>, java.lang.Object, java.io.Serializable]> {}
        interface _SimpleType$$static<T> extends ClassLike {
          readonly BIGDECIMAL: SimpleType<java.math.BigDecimal>;
          readonly BIGINTEGER: SimpleType<java.math.BigInteger>;
          readonly BOOLEAN: SimpleType<boolean>;
          readonly BYTE: SimpleType<byte>;
          readonly CHARACTER: SimpleType<openmbean$character>;
          readonly DATE: SimpleType<java.util.Date>;
          readonly DOUBLE: SimpleType<double>;
          readonly FLOAT: SimpleType<float>;
          readonly INTEGER: SimpleType<int>;
          readonly LONG: SimpleType<long>;
          readonly OBJECTNAME: SimpleType<ObjectName>;
          readonly SHORT: SimpleType<short>;
          readonly STRING: SimpleType<string>;
          readonly VOID: SimpleType<java.lang.Void>;
          _canonicalTypes: java.util.Map<SimpleType<any>,SimpleType<any>>;
          _serialVersionUID: long;
          _typeArray: SimpleType<any>[];
        }
        let SimpleType: _SimpleType$$static<T>;
        interface _SimpleType<T> {
          equals(obj: any): boolean;
          hashCode(): int;
          isValue(obj: any): boolean;
          readResolve(): any;
          toString(): string;
          _myHashCode: int;
          _myToString: string;
        }
        interface SimpleType<T> extends CombineTypes<[_SimpleType<T>, OpenType<T>]> {}
        interface _TabularData$$static extends ClassLike {
        }
        let TabularData: _TabularData$$static;
        interface _TabularData {
          calculateIndex(a0: CompositeData): any[];
          clear(): void;
          containsKey(a0: any[]): boolean;
          containsValue(a0: CompositeData): boolean;
          equals(a0: any): boolean;
          get(a0: any[]): CompositeData;
          getTabularType(): TabularType;
          hashCode(): int;
          isEmpty(): boolean;
          keySet(): java.util.Set<any>;
          put(a0: CompositeData): void;
          putAll(a0: CompositeData[]): void;
          remove(a0: any[]): CompositeData;
          size(): int;
          toString(): string;
          values(): java.util.Collection<any>;
        }
        interface TabularData extends CombineTypes<[_TabularData, java.lang.Object]> {}
        interface _TabularDataSupport$$static extends ClassLike {
          _serialVersionUID: long;
          new(tabularType: TabularType): TabularDataSupport;
          new(tabularType: TabularType, initialCapacity: int, loadFactor: float): TabularDataSupport;
        }
        let TabularDataSupport: _TabularDataSupport$$static;
        interface _TabularDataSupport {
          calculateIndex(value: CompositeData): any[];
          _checkKeyType(key: any[]): void;
          _checkValueAndIndex(value: CompositeData): java.util.List<any>;
          _checkValueType(value: CompositeData): void;
          clear(): void;
          clone(): any;
          containsKey(key: any): boolean;
          containsKey(key: any[]): boolean;
          containsValue(value: CompositeData): boolean;
          containsValue(value: any): boolean;
          entrySet(): java.util.Set<java.util.Map$Entry<any,any>>;
          equals(obj: any): boolean;
          get(key: any): any;
          get(key: any[]): CompositeData;
          getTabularType(): TabularType;
          hashCode(): int;
          _internalCalculateIndex(value: CompositeData): java.util.List<any>;
          _internalPut(value: CompositeData): CompositeData;
          isEmpty(): boolean;
          keySet(): java.util.Set<any>;
          put(key: any, value: any): any;
          put(value: CompositeData): void;
          putAll(t: java.util.Map<any,any>): void;
          putAll(values: CompositeData[]): void;
          _readObject(_in: java.io.ObjectInputStream): void;
          remove(key: any): any;
          remove(key: any[]): CompositeData;
          size(): int;
          toString(): string;
          values(): java.util.Collection<any>;
          _dataMap: java.util.Map<any,CompositeData>;
          _indexNamesArray: string[];
          _tabularType: TabularType;
        }
        interface TabularDataSupport extends CombineTypes<[_TabularDataSupport, java.lang.Cloneable, java.lang.Object, java.util.Map<any,any>, TabularData, java.io.Serializable]> {}
        interface _TabularType$$static extends ClassLike {
          _checkForEmptyString(arg: string[], argName: string): void;
          _checkForNullElement(arg: any[], argName: string): void;
          _serialVersionUID: long;
          new(typeName: string, description: string, rowType: CompositeType, indexNames: string[]): TabularType;
        }
        let TabularType: _TabularType$$static;
        interface _TabularType {
          equals(obj: any): boolean;
          getIndexNames(): java.util.List<string>;
          getRowType(): CompositeType;
          hashCode(): int;
          _isAssignableFrom(ot: OpenType<any>): boolean;
          isValue(obj: any): boolean;
          toString(): string;
          _indexNames: java.util.List<string>;
          _myHashCode: int;
          _myToString: string;
          _rowType: CompositeType;
        }
        interface TabularType extends CombineTypes<[_TabularType, OpenType<TabularData>]> {}
      }
      module relation {
        interface _InvalidRelationIdException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): InvalidRelationIdException;
          new(message: string): InvalidRelationIdException;
        }
        let InvalidRelationIdException: _InvalidRelationIdException$$static;
        interface _InvalidRelationIdException {
        }
        interface InvalidRelationIdException extends CombineTypes<[_InvalidRelationIdException, javax.management.relation.RelationException]> {}
        interface _InvalidRelationServiceException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): InvalidRelationServiceException;
          new(message: string): InvalidRelationServiceException;
        }
        let InvalidRelationServiceException: _InvalidRelationServiceException$$static;
        interface _InvalidRelationServiceException {
        }
        interface InvalidRelationServiceException extends CombineTypes<[_InvalidRelationServiceException, javax.management.relation.RelationException]> {}
        interface _InvalidRelationTypeException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): InvalidRelationTypeException;
          new(message: string): InvalidRelationTypeException;
        }
        let InvalidRelationTypeException: _InvalidRelationTypeException$$static;
        interface _InvalidRelationTypeException {
        }
        interface InvalidRelationTypeException extends CombineTypes<[_InvalidRelationTypeException, javax.management.relation.RelationException]> {}
        interface _InvalidRoleInfoException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): InvalidRoleInfoException;
          new(message: string): InvalidRoleInfoException;
        }
        let InvalidRoleInfoException: _InvalidRoleInfoException$$static;
        interface _InvalidRoleInfoException {
        }
        interface InvalidRoleInfoException extends CombineTypes<[_InvalidRoleInfoException, javax.management.relation.RelationException]> {}
        interface _InvalidRoleValueException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): InvalidRoleValueException;
          new(message: string): InvalidRoleValueException;
        }
        let InvalidRoleValueException: _InvalidRoleValueException$$static;
        interface _InvalidRoleValueException {
        }
        interface InvalidRoleValueException extends CombineTypes<[_InvalidRoleValueException, javax.management.relation.RelationException]> {}
        interface _MBeanServerNotificationFilter$$static extends ClassLike {
          _compat: boolean;
          _newSerialPersistentFields: java.io.ObjectStreamField[];
          _newSerialVersionUID: long;
          _oldSerialPersistentFields: java.io.ObjectStreamField[];
          _oldSerialVersionUID: long;
          _serialPersistentFields: java.io.ObjectStreamField[];
          _serialVersionUID: long;
          new(): MBeanServerNotificationFilter;
        }
        let MBeanServerNotificationFilter: _MBeanServerNotificationFilter$$static;
        interface _MBeanServerNotificationFilter {
          disableAllObjectNames(): void;
          disableObjectName(objectName: ObjectName): void;
          enableAllObjectNames(): void;
          enableObjectName(objectName: ObjectName): void;
          getDisabledObjectNames(): java.util.Vector<ObjectName>;
          getEnabledObjectNames(): java.util.Vector<ObjectName>;
          isNotificationEnabled(notif: Notification): boolean;
          _readObject(_in: java.io.ObjectInputStream): void;
          _writeObject(out: java.io.ObjectOutputStream): void;
          _deselectedNames: java.util.List<ObjectName>;
          _selectedNames: java.util.List<ObjectName>;
        }
        interface MBeanServerNotificationFilter extends CombineTypes<[_MBeanServerNotificationFilter, javax.management.NotificationFilterSupport]> {}
        interface _Relation$$static extends ClassLike {
        }
        let Relation: _Relation$$static;
        interface _Relation {
          getAllRoles(): RoleResult;
          getReferencedMBeans(): java.util.Map<ObjectName,java.util.List<string>>;
          getRelationId(): string;
          getRelationServiceName(): ObjectName;
          getRelationTypeName(): string;
          getRole(a0: string): java.util.List<ObjectName>;
          getRoleCardinality(a0: string): int;
          getRoles(a0: string[]): RoleResult;
          handleMBeanUnregistration(a0: ObjectName, a1: string): void;
          retrieveAllRoles(): RoleList;
          setRole(a0: Role): void;
          setRoles(a0: RoleList): RoleResult;
        }
        interface Relation extends CombineTypes<[_Relation, java.lang.Object]> {}
        interface _RelationException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): RelationException;
          new(message: string): RelationException;
        }
        let RelationException: _RelationException$$static;
        interface _RelationException {
        }
        interface RelationException extends CombineTypes<[_RelationException, javax.management.JMException]> {}
        interface _RelationNotFoundException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): RelationNotFoundException;
          new(message: string): RelationNotFoundException;
        }
        let RelationNotFoundException: _RelationNotFoundException$$static;
        interface _RelationNotFoundException {
        }
        interface RelationNotFoundException extends CombineTypes<[_RelationNotFoundException, javax.management.relation.RelationException]> {}
        interface _RelationNotification$$static extends ClassLike {
          readonly RELATION_BASIC_CREATION: string;
          readonly RELATION_BASIC_REMOVAL: string;
          readonly RELATION_BASIC_UPDATE: string;
          readonly RELATION_MBEAN_CREATION: string;
          readonly RELATION_MBEAN_REMOVAL: string;
          readonly RELATION_MBEAN_UPDATE: string;
          _compat: boolean;
          _newSerialPersistentFields: java.io.ObjectStreamField[];
          _newSerialVersionUID: long;
          _oldSerialPersistentFields: java.io.ObjectStreamField[];
          _oldSerialVersionUID: long;
          _serialPersistentFields: java.io.ObjectStreamField[];
          _serialVersionUID: long;
          new(notifType: string, sourceObj: any, sequence: long, a3: long, timeStamp: string, a5: string, message: string, id: ObjectName, typeName: java.util.List<ObjectName>): RelationNotification;
          new(notifType: string, sourceObj: any, sequence: long, a3: long, timeStamp: string, a5: string, message: string, id: ObjectName, typeName: string, objectName: java.util.List<ObjectName>, name: java.util.List<ObjectName>): RelationNotification;
        }
        let RelationNotification: _RelationNotification$$static;
        interface _RelationNotification {
          getMBeansToUnregister(): java.util.List<ObjectName>;
          getNewRoleValue(): java.util.List<ObjectName>;
          getObjectName(): ObjectName;
          getOldRoleValue(): java.util.List<ObjectName>;
          getRelationId(): string;
          getRelationTypeName(): string;
          getRoleName(): string;
          _isValidBasic(notifType: string, sourceObj: any, id: string, typeName: string): boolean;
          _isValidBasicStrict(notifType: string, sourceObj: any, id: string, typeName: string): boolean;
          _isValidCreate(notifType: string): boolean;
          _isValidUpdate(notifType: string, name: string, newValue: java.util.List<ObjectName>, oldValue: java.util.List<ObjectName>): boolean;
          _readObject(_in: java.io.ObjectInputStream): void;
          _safeGetObjectName(src: ObjectName): ObjectName;
          _safeGetObjectNameList(src: java.util.List<ObjectName>): java.util.ArrayList<ObjectName>;
          _writeObject(out: java.io.ObjectOutputStream): void;
          _newRoleValue: java.util.List<ObjectName>;
          _oldRoleValue: java.util.List<ObjectName>;
          _relationId: string;
          _relationObjName: ObjectName;
          _relationTypeName: string;
          _roleName: string;
          _unregisterMBeanList: java.util.List<ObjectName>;
        }
        interface RelationNotification extends CombineTypes<[_RelationNotification, javax.management.Notification]> {}
        interface _RelationService$$static extends ClassLike {
          _throwRoleProblemException(pbType: int, roleName: string): void;
          new(immediatePurgeFlag: boolean): RelationService;
        }
        let RelationService: _RelationService$$static;
        interface _RelationService {
          _addNewMBeanReference(objectName: ObjectName, relationId: string, roleName: string): boolean;
          addRelation(relationObjectName: ObjectName): void;
          _addRelationInt(relationBaseFlag: boolean, relationObj: RelationSupport, relationObjName: ObjectName, relationId: string, relationTypeName: string, roleList: RoleList): void;
          addRelationType(relationTypeObj: RelationType): void;
          _addRelationTypeInt(relationTypeObj: RelationType): void;
          _checkRoleInt(chkType: int, roleName: string, roleValue: java.util.List<ObjectName>, roleInfo: RoleInfo, writeChkFlag: boolean): int;
          checkRoleReading(roleName: string, relationTypeName: string): int;
          checkRoleWriting(role: Role, relationTypeName: string, initFlag: boolean): int;
          createRelation(relationId: string, relationTypeName: string, roleList: RoleList): void;
          createRelationType(relationTypeName: string, roleInfoArray: RoleInfo[]): void;
          findAssociatedMBeans(mbeanName: ObjectName, relationTypeName: string, roleName: string): java.util.Map<ObjectName,java.util.List<string>>;
          findReferencingRelations(mbeanName: ObjectName, relationTypeName: string, roleName: string): java.util.Map<string,java.util.List<string>>;
          findRelationsOfType(relationTypeName: string): java.util.List<string>;
          getAllRelationIds(): java.util.List<string>;
          getAllRelationTypeNames(): java.util.List<string>;
          getAllRoles(relationId: string): RoleResult;
          getNotificationInfo(): MBeanNotificationInfo[];
          getPurgeFlag(): boolean;
          getReferencedMBeans(relationId: string): java.util.Map<ObjectName,java.util.List<string>>;
          _getRelation(relationId: string): any;
          _getRelationType(relationTypeName: string): RelationType;
          getRelationTypeName(relationId: string): string;
          getRole(relationId: string, roleName: string): java.util.List<ObjectName>;
          getRoleCardinality(relationId: string, roleName: string): int;
          getRoleInfo(relationTypeName: string, roleInfoName: string): RoleInfo;
          getRoleInfos(relationTypeName: string): java.util.List<RoleInfo>;
          getRoles(relationId: string, roleNameArray: string[]): RoleResult;
          handleNotification(notif: Notification, handback: any): void;
          _handleReferenceUnregistration(relationId: string, objectName: ObjectName, roleNameList: java.util.List<string>): void;
          hasRelation(relationId: string): boolean;
          _initializeMissingRoles(relationBaseFlag: boolean, relationObj: RelationSupport, relationObjName: ObjectName, relationId: string, relationTypeName: string, roleInfoList: java.util.List<RoleInfo>): void;
          isActive(): void;
          isRelation(objectName: ObjectName): string;
          isRelationMBean(relationId: string): ObjectName;
          postDeregister(): void;
          postRegister(registrationDone: boolean): void;
          preDeregister(): void;
          preRegister(server: MBeanServer, name: ObjectName): ObjectName;
          purgeRelations(): void;
          _removeMBeanReference(objectName: ObjectName, relationId: string, roleName: string, allRolesFlag: boolean): boolean;
          removeRelation(relationId: string): void;
          removeRelationType(relationTypeName: string): void;
          _sendNotificationInt(intNtfType: int, message: string, relationId: string, unregMBeanList: java.util.List<ObjectName>, roleName: string, roleNewValue: java.util.List<ObjectName>, oldValue: java.util.List<ObjectName>): void;
          sendRelationCreationNotification(relationId: string): void;
          sendRelationRemovalNotification(relationId: string, unregMBeanList: java.util.List<ObjectName>): void;
          sendRoleUpdateNotification(relationId: string, newRole: Role, oldValue: java.util.List<ObjectName>): void;
          setPurgeFlag(purgeFlag: boolean): void;
          setRole(relationId: string, role: Role): void;
          setRoles(relationId: string, roleList: RoleList): RoleResult;
          updateRoleMap(relationId: string, newRole: Role, oldValue: java.util.List<ObjectName>): void;
          _updateUnregistrationListener(newRefList: java.util.List<ObjectName>, obsoleteRefList: java.util.List<ObjectName>): void;
          _atomicSeqNo: java.util.concurrent.atomic.AtomicLong;
          _myMBeanServer: MBeanServer;
          _myObjName: ObjectName;
          _myPurgeFlag: boolean;
          _myRefedMBeanObjName2RelIdsMap: java.util.Map<ObjectName,java.util.Map<string,java.util.List<string>>>;
          _myRelId2ObjMap: java.util.Map<string,any>;
          _myRelId2RelTypeMap: java.util.Map<string,string>;
          _myRelMBeanObjName2RelIdMap: java.util.Map<ObjectName,string>;
          _myRelType2ObjMap: java.util.Map<string,RelationType>;
          _myRelType2RelIdsMap: java.util.Map<string,java.util.List<string>>;
          _myUnregNtfFilter: MBeanServerNotificationFilter;
          _myUnregNtfList: java.util.List<MBeanServerNotification>;
        }
        interface RelationService extends CombineTypes<[_RelationService, javax.management.relation.RelationServiceMBean, javax.management.MBeanRegistration, javax.management.NotificationListener, javax.management.NotificationBroadcasterSupport]> {}
        interface _RelationServiceMBean$$static extends ClassLike {
        }
        let RelationServiceMBean: _RelationServiceMBean$$static;
        interface _RelationServiceMBean {
          addRelation(a0: ObjectName): void;
          addRelationType(a0: RelationType): void;
          checkRoleReading(a0: string, a1: string): int;
          checkRoleWriting(a0: Role, a1: string, a2: boolean): int;
          createRelation(a0: string, a1: string, a2: RoleList): void;
          createRelationType(a0: string, a1: RoleInfo[]): void;
          findAssociatedMBeans(a0: ObjectName, a1: string, a2: string): java.util.Map<ObjectName,java.util.List<string>>;
          findReferencingRelations(a0: ObjectName, a1: string, a2: string): java.util.Map<string,java.util.List<string>>;
          findRelationsOfType(a0: string): java.util.List<string>;
          getAllRelationIds(): java.util.List<string>;
          getAllRelationTypeNames(): java.util.List<string>;
          getAllRoles(a0: string): RoleResult;
          getPurgeFlag(): boolean;
          getReferencedMBeans(a0: string): java.util.Map<ObjectName,java.util.List<string>>;
          getRelationTypeName(a0: string): string;
          getRole(a0: string, a1: string): java.util.List<ObjectName>;
          getRoleCardinality(a0: string, a1: string): int;
          getRoleInfo(a0: string, a1: string): RoleInfo;
          getRoleInfos(a0: string): java.util.List<RoleInfo>;
          getRoles(a0: string, a1: string[]): RoleResult;
          hasRelation(a0: string): boolean;
          isActive(): void;
          isRelation(a0: ObjectName): string;
          isRelationMBean(a0: string): ObjectName;
          purgeRelations(): void;
          removeRelation(a0: string): void;
          removeRelationType(a0: string): void;
          sendRelationCreationNotification(a0: string): void;
          sendRelationRemovalNotification(a0: string, a1: java.util.List<ObjectName>): void;
          sendRoleUpdateNotification(a0: string, a1: Role, a2: java.util.List<ObjectName>): void;
          setPurgeFlag(a0: boolean): void;
          setRole(a0: string, a1: Role): void;
          setRoles(a0: string, a1: RoleList): RoleResult;
          updateRoleMap(a0: string, a1: Role, a2: java.util.List<ObjectName>): void;
        }
        interface RelationServiceMBean extends CombineTypes<[_RelationServiceMBean, java.lang.Object]> {}
        interface _RelationServiceNotRegisteredException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): RelationServiceNotRegisteredException;
          new(message: string): RelationServiceNotRegisteredException;
        }
        let RelationServiceNotRegisteredException: _RelationServiceNotRegisteredException$$static;
        interface _RelationServiceNotRegisteredException {
        }
        interface RelationServiceNotRegisteredException extends CombineTypes<[_RelationServiceNotRegisteredException, javax.management.relation.RelationException]> {}
        interface _RelationSupport$$static extends ClassLike {
          new(relationId: string, relationServiceName: ObjectName, relationTypeName: string, list: RoleList): RelationSupport;
          new(relationId: string, relationServiceName: ObjectName, relationServiceMBeanServer: MBeanServer, relationTypeName: string, list: RoleList): RelationSupport;
        }
        let RelationSupport: _RelationSupport$$static;
        interface _RelationSupport {
          getAllRoles(): RoleResult;
          _getAllRolesInt(relationServCallFlg: boolean, relationServ: RelationService): RoleResult;
          getReferencedMBeans(): java.util.Map<ObjectName,java.util.List<string>>;
          getRelationId(): string;
          getRelationServiceName(): ObjectName;
          getRelationTypeName(): string;
          getRole(roleName: string): java.util.List<ObjectName>;
          getRoleCardinality(roleName: string): int;
          _getRoleInt(roleName: string, relationServCallFlg: boolean, relationServ: RelationService, multiRoleFlg: boolean): any;
          getRoles(roleNameArray: string[]): RoleResult;
          _getRolesInt(roleNameArray: string[], relationServCallFlg: boolean, relationServ: RelationService): RoleResult;
          handleMBeanUnregistration(objectName: ObjectName, roleName: string): void;
          _handleMBeanUnregistrationInt(objectName: ObjectName, roleName: string, relationServCallFlg: boolean, relationServ: RelationService): void;
          _initMembers(relationId: string, relationServiceName: ObjectName, relationServiceMBeanServer: MBeanServer, relationTypeName: string, list: RoleList): void;
          _initRoleMap(list: RoleList): void;
          isInRelationService(): boolean;
          postDeregister(): void;
          postRegister(registrationDone: boolean): void;
          preDeregister(): void;
          preRegister(server: MBeanServer, name: ObjectName): ObjectName;
          retrieveAllRoles(): RoleList;
          _sendRoleUpdateNotification(newRole: Role, oldRoleValue: java.util.List<ObjectName>, relationServCallFlg: boolean, relationServ: RelationService): void;
          setRelationServiceManagementFlag(flag: boolean): void;
          setRole(role: Role): void;
          _setRoleInt(aRole: Role, relationServCallFlg: boolean, relationServ: RelationService, multiRoleFlg: boolean): any;
          setRoles(list: RoleList): RoleResult;
          _setRolesInt(list: RoleList, relationServCallFlg: boolean, relationServ: RelationService): RoleResult;
          _updateRelationServiceMap(newRole: Role, oldRoleValue: java.util.List<ObjectName>, relationServCallFlg: boolean, relationServ: RelationService): void;
          _myInRelServFlg: java.util.concurrent.atomic.AtomicBoolean;
          _myRelId: string;
          _myRelServiceMBeanServer: MBeanServer;
          _myRelServiceName: ObjectName;
          _myRelTypeName: string;
          _myRoleName2ValueMap: java.util.Map<string,Role>;
        }
        interface RelationSupport extends CombineTypes<[_RelationSupport, javax.management.MBeanRegistration, javax.management.relation.RelationSupportMBean, java.lang.Object]> {}
        interface _RelationSupportMBean$$static extends ClassLike {
        }
        let RelationSupportMBean: _RelationSupportMBean$$static;
        interface _RelationSupportMBean {
          isInRelationService(): boolean;
          setRelationServiceManagementFlag(a0: boolean): void;
        }
        interface RelationSupportMBean extends CombineTypes<[_RelationSupportMBean, javax.management.relation.Relation, java.lang.Object]> {}
        interface _RelationType$$static extends ClassLike {
        }
        let RelationType: _RelationType$$static;
        interface _RelationType {
          getRelationTypeName(): string;
          getRoleInfo(a0: string): RoleInfo;
          getRoleInfos(): java.util.List<RoleInfo>;
        }
        interface RelationType extends CombineTypes<[_RelationType, java.lang.Object, java.io.Serializable]> {}
        interface _RelationTypeNotFoundException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): RelationTypeNotFoundException;
          new(message: string): RelationTypeNotFoundException;
        }
        let RelationTypeNotFoundException: _RelationTypeNotFoundException$$static;
        interface _RelationTypeNotFoundException {
        }
        interface RelationTypeNotFoundException extends CombineTypes<[_RelationTypeNotFoundException, javax.management.relation.RelationException]> {}
        interface _RelationTypeSupport$$static extends ClassLike {
          _checkRoleInfos(roleInfoArray: RoleInfo[]): void;
          _compat: boolean;
          _newSerialPersistentFields: java.io.ObjectStreamField[];
          _newSerialVersionUID: long;
          _oldSerialPersistentFields: java.io.ObjectStreamField[];
          _oldSerialVersionUID: long;
          _serialPersistentFields: java.io.ObjectStreamField[];
          _serialVersionUID: long;
          new(relationTypeName: string, roleInfoArray: RoleInfo[]): RelationTypeSupport;
          _new(relationTypeName: string): RelationTypeSupport;
        }
        let RelationTypeSupport: _RelationTypeSupport$$static;
        interface _RelationTypeSupport {
          _addRoleInfo(roleInfo: RoleInfo): void;
          getRelationTypeName(): string;
          getRoleInfo(roleInfoName: string): RoleInfo;
          getRoleInfos(): java.util.List<RoleInfo>;
          _initMembers(relationTypeName: string, roleInfoArray: RoleInfo[]): void;
          _readObject(_in: java.io.ObjectInputStream): void;
          _setRelationServiceFlag(flag: boolean): void;
          _writeObject(out: java.io.ObjectOutputStream): void;
          _isInRelationService: boolean;
          _roleName2InfoMap: java.util.Map<string,RoleInfo>;
          _typeName: string;
        }
        interface RelationTypeSupport extends CombineTypes<[_RelationTypeSupport, java.lang.Object, javax.management.relation.RelationType]> {}
        interface _Role$$static extends ClassLike {
          roleValueToString(roleValue: java.util.List<ObjectName>): string;
          _compat: boolean;
          _newSerialPersistentFields: java.io.ObjectStreamField[];
          _newSerialVersionUID: long;
          _oldSerialPersistentFields: java.io.ObjectStreamField[];
          _oldSerialVersionUID: long;
          _serialPersistentFields: java.io.ObjectStreamField[];
          _serialVersionUID: long;
          new(roleName: string, roleValue: java.util.List<ObjectName>): Role;
        }
        let Role: _Role$$static;
        interface _Role {
          clone(): any;
          getRoleName(): string;
          getRoleValue(): java.util.List<ObjectName>;
          _readObject(_in: java.io.ObjectInputStream): void;
          setRoleName(roleName: string): void;
          setRoleValue(roleValue: java.util.List<ObjectName>): void;
          toString(): string;
          _writeObject(out: java.io.ObjectOutputStream): void;
          _name: string;
          _objectNameList: java.util.List<ObjectName>;
        }
        interface Role extends CombineTypes<[_Role, java.lang.Object, java.io.Serializable]> {}
        interface _RoleInfo$$static extends ClassLike {
          readonly ROLE_CARDINALITY_INFINITY: int;
          _compat: boolean;
          _newSerialPersistentFields: java.io.ObjectStreamField[];
          _newSerialVersionUID: long;
          _oldSerialPersistentFields: java.io.ObjectStreamField[];
          _oldSerialVersionUID: long;
          _serialPersistentFields: java.io.ObjectStreamField[];
          _serialVersionUID: long;
          new(roleName: string, mbeanClassName: string, read: boolean, write: boolean, min: int, max: int, descr: string): RoleInfo;
          new(roleName: string, mbeanClassName: string, read: boolean, write: boolean): RoleInfo;
          new(roleName: string, mbeanClassName: string): RoleInfo;
          new(roleInfo: RoleInfo): RoleInfo;
        }
        let RoleInfo: _RoleInfo$$static;
        interface _RoleInfo {
          checkMaxDegree(value: int): boolean;
          checkMinDegree(value: int): boolean;
          getDescription(): string;
          getMaxDegree(): int;
          getMinDegree(): int;
          getName(): string;
          getRefMBeanClassName(): string;
          _init(roleName: string, mbeanClassName: string, read: boolean, write: boolean, min: int, max: int, descr: string): void;
          isReadable(): boolean;
          isWritable(): boolean;
          _readObject(_in: java.io.ObjectInputStream): void;
          toString(): string;
          _writeObject(out: java.io.ObjectOutputStream): void;
          _description: string;
          _isReadable: boolean;
          _isWritable: boolean;
          _maxDegree: int;
          _minDegree: int;
          _name: string;
          _referencedMBeanClassName: string;
        }
        interface RoleInfo extends CombineTypes<[_RoleInfo, java.lang.Object, java.io.Serializable]> {}
        interface _RoleInfoNotFoundException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): RoleInfoNotFoundException;
          new(message: string): RoleInfoNotFoundException;
        }
        let RoleInfoNotFoundException: _RoleInfoNotFoundException$$static;
        interface _RoleInfoNotFoundException {
        }
        interface RoleInfoNotFoundException extends CombineTypes<[_RoleInfoNotFoundException, javax.management.relation.RelationException]> {}
        interface _RoleList$$static extends ClassLike {
          _checkTypeSafe(o: any): void;
          _checkTypeSafe(c: java.util.Collection<any>): void;
          _isTainted(o: any): boolean;
          _isTainted(c: java.util.Collection<any>): boolean;
          _serialVersionUID: long;
          new(): RoleList;
          new(initialCapacity: int): RoleList;
          new(list: java.util.List<Role>): RoleList;
        }
        let RoleList: _RoleList$$static;
        interface _RoleList {
          add(role: Role): void;
          add(index: int, role: Role): void;
          add(o: any): boolean;
          add(index: int, element: any): void;
          addAll(roleList: RoleList): boolean;
          addAll(index: int, roleList: RoleList): boolean;
          addAll(c: java.util.Collection<any>): boolean;
          addAll(index: int, c: java.util.Collection<any>): boolean;
          asList(): java.util.List<Role>;
          set(index: int, role: Role): void;
          set(index: int, element: any): any;
          _tainted: boolean;
          _typeSafe: boolean;
        }
        interface RoleList extends CombineTypes<[_RoleList, java.util.ArrayList<any>]> {}
        interface _RoleNotFoundException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): RoleNotFoundException;
          new(message: string): RoleNotFoundException;
        }
        let RoleNotFoundException: _RoleNotFoundException$$static;
        interface _RoleNotFoundException {
        }
        interface RoleNotFoundException extends CombineTypes<[_RoleNotFoundException, javax.management.relation.RelationException]> {}
        interface _RoleResult$$static extends ClassLike {
          _compat: boolean;
          _newSerialPersistentFields: java.io.ObjectStreamField[];
          _newSerialVersionUID: long;
          _oldSerialPersistentFields: java.io.ObjectStreamField[];
          _oldSerialVersionUID: long;
          _serialPersistentFields: java.io.ObjectStreamField[];
          _serialVersionUID: long;
          new(list: RoleList, unresolvedList: RoleUnresolvedList): RoleResult;
        }
        let RoleResult: _RoleResult$$static;
        interface _RoleResult {
          getRoles(): RoleList;
          getRolesUnresolved(): RoleUnresolvedList;
          _readObject(_in: java.io.ObjectInputStream): void;
          setRoles(list: RoleList): void;
          setRolesUnresolved(unresolvedList: RoleUnresolvedList): void;
          _writeObject(out: java.io.ObjectOutputStream): void;
          _roleList: RoleList;
          _unresolvedRoleList: RoleUnresolvedList;
        }
        interface RoleResult extends CombineTypes<[_RoleResult, java.lang.Object, java.io.Serializable]> {}
        interface _RoleStatus$$static extends ClassLike {
          isRoleStatus(status: int): boolean;
          readonly LESS_THAN_MIN_ROLE_DEGREE: int;
          readonly MORE_THAN_MAX_ROLE_DEGREE: int;
          readonly NO_ROLE_WITH_NAME: int;
          readonly REF_MBEAN_NOT_REGISTERED: int;
          readonly REF_MBEAN_OF_INCORRECT_CLASS: int;
          readonly ROLE_NOT_READABLE: int;
          readonly ROLE_NOT_WRITABLE: int;
          new(): RoleStatus;
        }
        let RoleStatus: _RoleStatus$$static;
        interface _RoleStatus {
        }
        interface RoleStatus extends CombineTypes<[_RoleStatus, java.lang.Object]> {}
        interface _RoleUnresolved$$static extends ClassLike {
          _compat: boolean;
          _newSerialPersistentFields: java.io.ObjectStreamField[];
          _newSerialVersionUID: long;
          _oldSerialPersistentFields: java.io.ObjectStreamField[];
          _oldSerialVersionUID: long;
          _serialPersistentFields: java.io.ObjectStreamField[];
          _serialVersionUID: long;
          new(name: string, value: java.util.List<ObjectName>, pbType: int): RoleUnresolved;
        }
        let RoleUnresolved: _RoleUnresolved$$static;
        interface _RoleUnresolved {
          clone(): any;
          getProblemType(): int;
          getRoleName(): string;
          getRoleValue(): java.util.List<ObjectName>;
          _readObject(_in: java.io.ObjectInputStream): void;
          setProblemType(pbType: int): void;
          setRoleName(name: string): void;
          setRoleValue(value: java.util.List<ObjectName>): void;
          toString(): string;
          _writeObject(out: java.io.ObjectOutputStream): void;
          _problemType: int;
          _roleName: string;
          _roleValue: java.util.List<ObjectName>;
        }
        interface RoleUnresolved extends CombineTypes<[_RoleUnresolved, java.lang.Object, java.io.Serializable]> {}
        interface _RoleUnresolvedList$$static extends ClassLike {
          _checkTypeSafe(o: any): void;
          _checkTypeSafe(c: java.util.Collection<any>): void;
          _isTainted(o: any): boolean;
          _isTainted(c: java.util.Collection<any>): boolean;
          _serialVersionUID: long;
          new(): RoleUnresolvedList;
          new(initialCapacity: int): RoleUnresolvedList;
          new(list: java.util.List<RoleUnresolved>): RoleUnresolvedList;
        }
        let RoleUnresolvedList: _RoleUnresolvedList$$static;
        interface _RoleUnresolvedList {
          add(role: RoleUnresolved): void;
          add(index: int, role: RoleUnresolved): void;
          add(o: any): boolean;
          add(index: int, element: any): void;
          addAll(roleList: RoleUnresolvedList): boolean;
          addAll(index: int, roleList: RoleUnresolvedList): boolean;
          addAll(c: java.util.Collection<any>): boolean;
          addAll(index: int, c: java.util.Collection<any>): boolean;
          asList(): java.util.List<RoleUnresolved>;
          set(index: int, role: RoleUnresolved): void;
          set(index: int, element: any): any;
          _tainted: boolean;
          _typeSafe: boolean;
        }
        interface RoleUnresolvedList extends CombineTypes<[_RoleUnresolvedList, java.util.ArrayList<any>]> {}
      }
      module remote {
        interface _JMXAddressable$$static extends ClassLike {
        }
        let JMXAddressable: _JMXAddressable$$static;
        interface _JMXAddressable {
          getAddress(): JMXServiceURL;
(): JMXServiceURL;
        }
        interface JMXAddressable extends CombineTypes<[_JMXAddressable, java.lang.Object]> {}
        interface _JMXAuthenticator$$static extends ClassLike {
        }
        let JMXAuthenticator: _JMXAuthenticator$$static;
        interface _JMXAuthenticator {
          authenticate(a0: any): javax.security.auth.Subject;
(a0: any): javax.security.auth.Subject;
        }
        interface JMXAuthenticator extends CombineTypes<[_JMXAuthenticator, java.lang.Object]> {}
        interface _JMXConnectionNotification$$static extends ClassLike {
          _nonNull(arg: any): any;
          readonly CLOSED: string;
          readonly FAILED: string;
          readonly NOTIFS_LOST: string;
          readonly OPENED: string;
          _serialVersionUID: long;
          new(type: string, source: any, connectionId: string, sequenceNumber: long, a4: string, message: any): JMXConnectionNotification;
        }
        let JMXConnectionNotification: _JMXConnectionNotification$$static;
        interface _JMXConnectionNotification {
          getConnectionId(): string;
          _connectionId: string;
        }
        interface JMXConnectionNotification extends CombineTypes<[_JMXConnectionNotification, javax.management.Notification]> {}
        interface _JMXConnector$$static extends ClassLike {
          readonly CREDENTIALS: string;
        }
        let JMXConnector: _JMXConnector$$static;
        interface _JMXConnector {
          addConnectionNotificationListener(a0: NotificationListener, a1: NotificationFilter, a2: any): void;
          close(): void;
          connect(): void;
          connect(a0: java.util.Map<string,any>): void;
          getConnectionId(): string;
          getMBeanServerConnection(): MBeanServerConnection;
          getMBeanServerConnection(a0: javax.security.auth.Subject): MBeanServerConnection;
          removeConnectionNotificationListener(a0: NotificationListener): void;
          removeConnectionNotificationListener(a0: NotificationListener, a1: NotificationFilter, a2: any): void;
        }
        interface JMXConnector extends CombineTypes<[_JMXConnector, java.io.Closeable, java.lang.Object]> {}
        interface _JMXConnectorFactory$$static extends ClassLike {
          connect(serviceURL: JMXServiceURL): JMXConnector;
          connect(serviceURL: JMXServiceURL, environment: java.util.Map<string,any>): JMXConnector;
          _getConnectorAsService(loader: java.lang.ClassLoader, url: JMXServiceURL, map: java.util.Map<string,any>, filter: java.util.function.Predicate<java.util.ServiceLoader$Provider<any>>): JMXConnector;
          _getConnectorAsService<P, C>(providerClass: java.lang.Class<P>, loader: java.lang.ClassLoader, url: JMXServiceURL, filter: java.util.function.Predicate<java.util.ServiceLoader$Provider<any>>, factory: JMXConnectorFactory$ConnectorFactory<P,C>): C;
          _getProvider<T>(serviceURL: JMXServiceURL, environment: java.util.Map<string,any>, providerClassName: string, targetInterface: java.lang.Class<T>, loader: java.lang.ClassLoader): T;
          _getProvider<T>(protocol: string, pkgs: string, loader: java.lang.ClassLoader, providerClassName: string, targetInterface: java.lang.Class<T>): T;
          _isSystemProvider(provider: java.util.ServiceLoader$Provider<any>): boolean;
          _newHashMap<K, V>(): java.util.Map<K,V>;
          _newHashMap<K>(map: java.util.Map<K,any>): java.util.Map<K,any>;
          newJMXConnector(serviceURL: JMXServiceURL, environment: java.util.Map<string,any>): JMXConnector;
          _protocol2package(protocol: string): string;
          _resolveClassLoader(environment: java.util.Map<string,any>): java.lang.ClassLoader;
          _resolvePkgs(env: java.util.Map<string,any>): string;
          _wrap(parent: java.lang.ClassLoader): java.lang.ClassLoader;
          readonly DEFAULT_CLASS_LOADER: string;
          readonly PROTOCOL_PROVIDER_CLASS_LOADER: string;
          _PROTOCOL_PROVIDER_DEFAULT_PACKAGE: string;
          readonly PROTOCOL_PROVIDER_PACKAGES: string;
          _logger: com.sun.jmx.remote.util.ClassLogger;
        }
        let JMXConnectorFactory: _JMXConnectorFactory$$static;
        interface _JMXConnectorFactory {
        }
        interface JMXConnectorFactory extends CombineTypes<[_JMXConnectorFactory, java.lang.Object]> {}
        interface _JMXConnectorFactory$ConnectorFactory$$static<P,C> extends ClassLike {
        }
        let JMXConnectorFactory$ConnectorFactory: _JMXConnectorFactory$ConnectorFactory$$static<P,C>;
        interface _JMXConnectorFactory$ConnectorFactory<P,C> {
          apply(a0: P): C;
(a0: P): C;
        }
        interface JMXConnectorFactory$ConnectorFactory<P,C> extends CombineTypes<[_JMXConnectorFactory$ConnectorFactory<P,C>, java.lang.Object]> {}
        interface _JMXConnectorFactory$ProviderFinder$$static<P,C> extends ClassLike {
          _new(factory: JMXConnectorFactory$ConnectorFactory<P,C>, url: JMXServiceURL): JMXConnectorFactory$ProviderFinder<P,C>;
        }
        let JMXConnectorFactory$ProviderFinder: _JMXConnectorFactory$ProviderFinder$$static<P,C>;
        interface _JMXConnectorFactory$ProviderFinder<P,C> {
          _get(): C;
          test(sp: java.util.ServiceLoader$Provider<P>): boolean;
          test(a0: any): boolean;
          _connection: C;
          _exception: java.io.IOException;
          _factory: JMXConnectorFactory$ConnectorFactory<P,C>;
          _url: JMXServiceURL;
        }
        interface JMXConnectorFactory$ProviderFinder<P,C> extends CombineTypes<[_JMXConnectorFactory$ProviderFinder<P,C>, java.lang.Object, java.util.function.Predicate<java.util.ServiceLoader$Provider<P>>]> {}
        interface _JMXConnectorProvider$$static extends ClassLike {
        }
        let JMXConnectorProvider: _JMXConnectorProvider$$static;
        interface _JMXConnectorProvider {
          newJMXConnector(a0: JMXServiceURL, a1: java.util.Map<string,any>): JMXConnector;
(a0: JMXServiceURL, a1: java.util.Map<string,any>): JMXConnector;
        }
        interface JMXConnectorProvider extends CombineTypes<[_JMXConnectorProvider, java.lang.Object]> {}
        interface _JMXConnectorServer$$static extends ClassLike {
          _nextSequenceNumber(): long;
          readonly AUTHENTICATOR: string;
          _sequenceNumber: long;
          _sequenceNumberLock: int[];
          new(): JMXConnectorServer;
          new(mbeanServer: MBeanServer): JMXConnectorServer;
        }
        let JMXConnectorServer: _JMXConnectorServer$$static;
        interface _JMXConnectorServer {
          _connectionClosed(connectionId: string, message: string, userData: any): void;
          _connectionFailed(connectionId: string, message: string, userData: any): void;
          _connectionOpened(connectionId: string, message: string, userData: any): void;
          getConnectionIds(): string[];
          getMBeanServer(): MBeanServer;
          getNotificationInfo(): MBeanNotificationInfo[];
          _getNotificationSource(): any;
          postDeregister(): void;
          postRegister(registrationDone: boolean): void;
          preDeregister(): void;
          preRegister(mbs: MBeanServer, name: ObjectName): ObjectName;
          _sendNotification(type: string, connectionId: string, message: string, userData: any): void;
          setMBeanServerForwarder(mbsf: MBeanServerForwarder): void;
          toJMXConnector(env: java.util.Map<string,any>): JMXConnector;
          _connectionIds: java.util.List<string>;
          _mbeanServer: MBeanServer;
          _myName: ObjectName;
        }
        interface JMXConnectorServer extends CombineTypes<[_JMXConnectorServer, javax.management.MBeanRegistration, javax.management.remote.JMXAddressable, javax.management.NotificationBroadcasterSupport, javax.management.remote.JMXConnectorServerMBean]> {}
        interface _JMXConnectorServerFactory$$static extends ClassLike {
          _getConnectorServerAsService(loader: java.lang.ClassLoader, url: JMXServiceURL, map: java.util.Map<string,any>, mbs: MBeanServer, filter: java.util.function.Predicate<java.util.ServiceLoader$Provider<any>>): JMXConnectorServer;
          newJMXConnectorServer(serviceURL: JMXServiceURL, environment: java.util.Map<string,any>, mbeanServer: MBeanServer): JMXConnectorServer;
          readonly DEFAULT_CLASS_LOADER: string;
          readonly DEFAULT_CLASS_LOADER_NAME: string;
          readonly PROTOCOL_PROVIDER_CLASS_LOADER: string;
          _PROTOCOL_PROVIDER_DEFAULT_PACKAGE: string;
          readonly PROTOCOL_PROVIDER_PACKAGES: string;
          _logger: com.sun.jmx.remote.util.ClassLogger;
        }
        let JMXConnectorServerFactory: _JMXConnectorServerFactory$$static;
        interface _JMXConnectorServerFactory {
        }
        interface JMXConnectorServerFactory extends CombineTypes<[_JMXConnectorServerFactory, java.lang.Object]> {}
        interface _JMXConnectorServerMBean$$static extends ClassLike {
        }
        let JMXConnectorServerMBean: _JMXConnectorServerMBean$$static;
        interface _JMXConnectorServerMBean {
          getAddress(): JMXServiceURL;
          getAttributes(): java.util.Map<string,any>;
          getConnectionIds(): string[];
          isActive(): boolean;
          setMBeanServerForwarder(a0: MBeanServerForwarder): void;
          start(): void;
          stop(): void;
          toJMXConnector(a0: java.util.Map<string,any>): JMXConnector;
        }
        interface JMXConnectorServerMBean extends CombineTypes<[_JMXConnectorServerMBean, java.lang.Object]> {}
        interface _JMXConnectorServerProvider$$static extends ClassLike {
        }
        let JMXConnectorServerProvider: _JMXConnectorServerProvider$$static;
        interface _JMXConnectorServerProvider {
          newJMXConnectorServer(a0: JMXServiceURL, a1: java.util.Map<string,any>, a2: MBeanServer): JMXConnectorServer;
(a0: JMXServiceURL, a1: java.util.Map<string,any>, a2: MBeanServer): JMXConnectorServer;
        }
        interface JMXConnectorServerProvider extends CombineTypes<[_JMXConnectorServerProvider, java.lang.Object]> {}
        interface _JMXPrincipal$$static extends ClassLike {
          _validate(name: string): void;
          _serialVersionUID: long;
          new(name: string): JMXPrincipal;
        }
        let JMXPrincipal: _JMXPrincipal$$static;
        interface _JMXPrincipal {
          equals(o: any): boolean;
          getName(): string;
          hashCode(): int;
          _readObject(ois: java.io.ObjectInputStream): void;
          toString(): string;
          _name: string;
        }
        interface JMXPrincipal extends CombineTypes<[_JMXPrincipal, java.security.Principal, java.lang.Object, java.io.Serializable]> {}
        interface _JMXProviderException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): JMXProviderException;
          new(message: string): JMXProviderException;
          new(message: string, cause: java.lang.Throwable): JMXProviderException;
        }
        let JMXProviderException: _JMXProviderException$$static;
        interface _JMXProviderException {
          getCause(): java.lang.Throwable;
          _cause: java.lang.Throwable;
        }
        interface JMXProviderException extends CombineTypes<[_JMXProviderException, java.io.IOException]> {}
        interface _JMXServerErrorException$$static extends ClassLike {
          _serialVersionUID: long;
          new(s: string, err: java.lang.Error): JMXServerErrorException;
        }
        let JMXServerErrorException: _JMXServerErrorException$$static;
        interface _JMXServerErrorException {
          getCause(): java.lang.Throwable;
          _cause: java.lang.Error;
        }
        interface JMXServerErrorException extends CombineTypes<[_JMXServerErrorException, java.io.IOException]> {}
        interface _JMXServiceURL$$static extends ClassLike {
          _indexOf(s: string, c: char, fromIndex: int): int;
          _indexOfFirstNotInSet(s: string, set: java.util.BitSet, fromIndex: int): int;
          _isNumericIPv6Address(s: string): boolean;
          _validateHost(h: string, port: int): void;
          _INVALID_INSTANCE_MSG: string;
          _alphaBitSet: java.util.BitSet;
          _alphaNumericBitSet: java.util.BitSet;
          _hostNameBitSet: java.util.BitSet;
          _logger: com.sun.jmx.remote.util.ClassLogger;
          _numericBitSet: java.util.BitSet;
          _protocolBitSet: java.util.BitSet;
          _randomException: java.lang.Exception;
          _serialVersionUID: long;
          new(serviceURL: string): JMXServiceURL;
          new(protocol: string, host: string, port: int): JMXServiceURL;
          new(protocol: string, host: string, port: int, urlPath: string): JMXServiceURL;
        }
        let JMXServiceURL: _JMXServiceURL$$static;
        interface _JMXServiceURL {
          equals(obj: any): boolean;
          _getActiveNetworkInterfaceIP(): string;
          getHost(): string;
          getPort(): int;
          getProtocol(): string;
          getURLPath(): string;
          hashCode(): int;
          _readObject(inputStream: java.io.ObjectInputStream): void;
          toString(): string;
          _validate(proto: string, h: string, p: int, url: string): void;
          _validate(): void;
          _host: string;
          _port: int;
          _protocol: string;
          _toString: string;
          _urlPath: string;
        }
        interface JMXServiceURL extends CombineTypes<[_JMXServiceURL, java.lang.Object, java.io.Serializable]> {}
        interface _MBeanServerForwarder$$static extends ClassLike {
        }
        let MBeanServerForwarder: _MBeanServerForwarder$$static;
        interface _MBeanServerForwarder {
          getMBeanServer(): MBeanServer;
          setMBeanServer(a0: MBeanServer): void;
        }
        interface MBeanServerForwarder extends CombineTypes<[_MBeanServerForwarder, javax.management.MBeanServer, java.lang.Object]> {}
        interface _NotificationResult$$static extends ClassLike {
          _validate(targetedNotifications: TargetedNotification[], earliestSequenceNumber: long, a2: long): void;
          _serialVersionUID: long;
          new(earliestSequenceNumber: long, a1: long, nextSequenceNumber: TargetedNotification[]): NotificationResult;
        }
        let NotificationResult: _NotificationResult$$static;
        interface _NotificationResult {
          getEarliestSequenceNumber(): long;
          getNextSequenceNumber(): long;
          getTargetedNotifications(): TargetedNotification[];
          _readObject(ois: java.io.ObjectInputStream): void;
          toString(): string;
          _earliestSequenceNumber: long;
          _nextSequenceNumber: long;
          _targetedNotifications: TargetedNotification[];
        }
        interface NotificationResult extends CombineTypes<[_NotificationResult, java.lang.Object, java.io.Serializable]> {}
        interface _SubjectDelegationPermission$$static extends ClassLike {
          _serialVersionUID: long;
          new(name: string): SubjectDelegationPermission;
          new(name: string, actions: string): SubjectDelegationPermission;
        }
        let SubjectDelegationPermission: _SubjectDelegationPermission$$static;
        interface _SubjectDelegationPermission {
        }
        interface SubjectDelegationPermission extends CombineTypes<[_SubjectDelegationPermission, java.security.BasicPermission]> {}
        interface _TargetedNotification$$static extends ClassLike {
          _validate(notif: Notification, id: int): void;
          _serialVersionUID: long;
          new(notification: Notification, listenerID: int): TargetedNotification;
        }
        let TargetedNotification: _TargetedNotification$$static;
        interface _TargetedNotification {
          getListenerID(): int;
          getNotification(): Notification;
          _readObject(ois: java.io.ObjectInputStream): void;
          toString(): string;
          _id: int;
          _notif: Notification;
        }
        interface TargetedNotification extends CombineTypes<[_TargetedNotification, java.lang.Object, java.io.Serializable]> {}
      }
      module timer {
        interface _Timer$$static extends ClassLike {
          _ALARM_CLOCK_INDEX: int;
          _FIXED_RATE_INDEX: int;
          readonly ONE_DAY: long;
          readonly ONE_HOUR: long;
          readonly ONE_MINUTE: long;
          readonly ONE_SECOND: long;
          readonly ONE_WEEK: long;
          _TIMER_DATE_INDEX: int;
          _TIMER_NB_OCCUR_INDEX: int;
          _TIMER_NOTIF_INDEX: int;
          _TIMER_PERIOD_INDEX: int;
          new(): Timer;
        }
        let Timer: _Timer$$static;
        interface _Timer {
          addNotification(type: string, message: string, userData: any, date: java.util.Date, period: long, a5: long, nbOccurences: boolean): int;
          addNotification(type: string, message: string, userData: any, date: java.util.Date, period: long, a5: long): int;
          addNotification(type: string, message: string, userData: any, date: java.util.Date, period: long): int;
          addNotification(type: string, message: string, userData: any, date: java.util.Date): int;
          getAllNotificationIDs(): java.util.Vector<int>;
          getDate(id: int): java.util.Date;
          getFixedRate(id: int): boolean;
          getNbNotifications(): int;
          getNbOccurences(id: int): long;
          getNotificationIDs(type: string): java.util.Vector<int>;
          getNotificationInfo(): MBeanNotificationInfo[];
          getNotificationMessage(id: int): string;
          getNotificationType(id: int): string;
          getNotificationUserData(id: int): any;
          getPeriod(id: int): long;
          getSendPastNotifications(): boolean;
          isActive(): boolean;
          isEmpty(): boolean;
          _notifyAlarmClock(notification: TimerAlarmClockNotification): void;
          postDeregister(): void;
          postRegister(registrationDone: boolean): void;
          preDeregister(): void;
          preRegister(server: MBeanServer, name: ObjectName): ObjectName;
          removeAllNotifications(): void;
          removeNotification(id: int): void;
          removeNotifications(type: string): void;
          _sendNotification(timeStamp: java.util.Date, notification: TimerNotification): void;
          _sendPastNotifications(currentDate: java.util.Date, currentFlag: boolean): void;
          setSendPastNotifications(value: boolean): void;
          start(): void;
          stop(): void;
          _updateTimerTable(notifID: int): void;
          _counterID: int;
          _isActive: boolean;
          _sendPastNotifications: boolean;
          _sequenceNumber: long;
          _timer: java.util.Timer;
          _timerTable: java.util.Map<int,any[]>;
        }
        interface Timer extends CombineTypes<[_Timer, javax.management.timer.TimerMBean, javax.management.MBeanRegistration, javax.management.NotificationBroadcasterSupport]> {}
        interface _TimerAlarmClock$$static extends ClassLike {
          new(listener: Timer, timeout: long): TimerAlarmClock;
          new(listener: Timer, next: java.util.Date): TimerAlarmClock;
        }
        let TimerAlarmClock: _TimerAlarmClock$$static;
        interface _TimerAlarmClock {
          run(): void;
          _listener: Timer;
          _next: java.util.Date;
          _timeout: long;
        }
        interface TimerAlarmClock extends CombineTypes<[_TimerAlarmClock, java.util.TimerTask]> {}
        interface _TimerAlarmClockNotification$$static extends ClassLike {
          _serialVersionUID: long;
          new(source: TimerAlarmClock): TimerAlarmClockNotification;
        }
        let TimerAlarmClockNotification: _TimerAlarmClockNotification$$static;
        interface _TimerAlarmClockNotification {
        }
        interface TimerAlarmClockNotification extends CombineTypes<[_TimerAlarmClockNotification, javax.management.Notification]> {}
        interface _TimerMBean$$static extends ClassLike {
        }
        let TimerMBean: _TimerMBean$$static;
        interface _TimerMBean {
          addNotification(a0: string, a1: string, a2: any, a3: java.util.Date, a4: long, a5: long, a6: boolean): int;
          addNotification(a0: string, a1: string, a2: any, a3: java.util.Date, a4: long, a5: long): int;
          addNotification(a0: string, a1: string, a2: any, a3: java.util.Date, a4: long): int;
          addNotification(a0: string, a1: string, a2: any, a3: java.util.Date): int;
          getAllNotificationIDs(): java.util.Vector<int>;
          getDate(a0: int): java.util.Date;
          getFixedRate(a0: int): boolean;
          getNbNotifications(): int;
          getNbOccurences(a0: int): long;
          getNotificationIDs(a0: string): java.util.Vector<int>;
          getNotificationMessage(a0: int): string;
          getNotificationType(a0: int): string;
          getNotificationUserData(a0: int): any;
          getPeriod(a0: int): long;
          getSendPastNotifications(): boolean;
          isActive(): boolean;
          isEmpty(): boolean;
          removeAllNotifications(): void;
          removeNotification(a0: int): void;
          removeNotifications(a0: string): void;
          setSendPastNotifications(a0: boolean): void;
          start(): void;
          stop(): void;
        }
        interface TimerMBean extends CombineTypes<[_TimerMBean, java.lang.Object]> {}
        interface _TimerNotification$$static extends ClassLike {
          _serialVersionUID: long;
          new(type: string, source: any, sequenceNumber: long, a3: long, timeStamp: string, a5: int): TimerNotification;
        }
        let TimerNotification: _TimerNotification$$static;
        interface _TimerNotification {
          _cloneTimerNotification(): any;
          getNotificationID(): int;
          _notificationID: int;
        }
        interface TimerNotification extends CombineTypes<[_TimerNotification, javax.management.Notification]> {}
      }
      interface _AndQueryExp$$static extends ClassLike {
        _serialVersionUID: long;
        new(): AndQueryExp;
        new(q1: QueryExp, q2: QueryExp): AndQueryExp;
      }
      let AndQueryExp: _AndQueryExp$$static;
      interface _AndQueryExp {
        apply(name: ObjectName): boolean;
        getLeftExp(): QueryExp;
        getRightExp(): QueryExp;
        toString(): string;
        _exp1: QueryExp;
        _exp2: QueryExp;
      }
      interface AndQueryExp extends CombineTypes<[_AndQueryExp, javax.management.QueryExp, javax.management.QueryEval]> {}
      interface _Attribute$$static extends ClassLike {
        _serialVersionUID: long;
        new(name: string, value: any): Attribute;
      }
      let Attribute: _Attribute$$static;
      interface _Attribute {
        equals(object: any): boolean;
        getName(): string;
        getValue(): any;
        hashCode(): int;
        toString(): string;
        _name: string;
        _value: any;
      }
      interface Attribute extends CombineTypes<[_Attribute, java.lang.Object, java.io.Serializable]> {}
      interface _AttributeChangeNotification$$static extends ClassLike {
        readonly ATTRIBUTE_CHANGE: string;
        _serialVersionUID: long;
        new(source: any, sequenceNumber: long, a2: long, timeStamp: string, a4: string, msg: string, attributeName: any, attributeType: any): AttributeChangeNotification;
      }
      let AttributeChangeNotification: _AttributeChangeNotification$$static;
      interface _AttributeChangeNotification {
        getAttributeName(): string;
        getAttributeType(): string;
        getNewValue(): any;
        getOldValue(): any;
        _attributeName: string;
        _attributeType: string;
        _newValue: any;
        _oldValue: any;
      }
      interface AttributeChangeNotification extends CombineTypes<[_AttributeChangeNotification, javax.management.Notification]> {}
      interface _AttributeChangeNotificationFilter$$static extends ClassLike {
        _serialVersionUID: long;
        new(): AttributeChangeNotificationFilter;
      }
      let AttributeChangeNotificationFilter: _AttributeChangeNotificationFilter$$static;
      interface _AttributeChangeNotificationFilter {
        disableAllAttributes(): void;
        disableAttribute(name: string): void;
        enableAttribute(name: string): void;
        getEnabledAttributes(): java.util.Vector<string>;
        isNotificationEnabled(notification: Notification): boolean;
        _enabledAttributes: java.util.Vector<string>;
      }
      interface AttributeChangeNotificationFilter extends CombineTypes<[_AttributeChangeNotificationFilter, javax.management.NotificationFilter, java.lang.Object]> {}
      interface _AttributeList$$static extends ClassLike {
        _serialVersionUID: long;
        new(): AttributeList;
        new(initialCapacity: int): AttributeList;
        new(list: AttributeList): AttributeList;
        new(list: java.util.List<Attribute>): AttributeList;
      }
      let AttributeList: _AttributeList$$static;
      interface _AttributeList {
        add(object: Attribute): void;
        add(index: int, object: Attribute): void;
        add(element: any): boolean;
        add(index: int, element: any): void;
        addAll(list: AttributeList): boolean;
        addAll(index: int, list: AttributeList): boolean;
        addAll(c: java.util.Collection<any>): boolean;
        addAll(index: int, c: java.util.Collection<any>): boolean;
        _adding(x: any): void;
        _adding(c: java.util.Collection<any>): void;
        asList(): java.util.List<Attribute>;
        set(index: int, object: Attribute): void;
        set(index: int, element: any): any;
        _tainted: boolean;
        _typeSafe: boolean;
      }
      interface AttributeList extends CombineTypes<[_AttributeList, java.util.ArrayList<any>]> {}
      interface _AttributeNotFoundException$$static extends ClassLike {
        _serialVersionUID: long;
        new(): AttributeNotFoundException;
        new(message: string): AttributeNotFoundException;
      }
      let AttributeNotFoundException: _AttributeNotFoundException$$static;
      interface _AttributeNotFoundException {
      }
      interface AttributeNotFoundException extends CombineTypes<[_AttributeNotFoundException, javax.management.OperationsException]> {}
      interface _AttributeValueExp$$static extends ClassLike {
        _serialVersionUID: long;
        new(): AttributeValueExp;
        new(attr: string): AttributeValueExp;
      }
      let AttributeValueExp: _AttributeValueExp$$static;
      interface _AttributeValueExp {
        apply(name: ObjectName): ValueExp;
        _getAttribute(name: ObjectName): any;
        getAttributeName(): string;
        setMBeanServer(s: MBeanServer): void;
        toString(): string;
        _attr: string;
      }
      interface AttributeValueExp extends CombineTypes<[_AttributeValueExp, javax.management.ValueExp, java.lang.Object]> {}
      interface _BadAttributeValueExpException$$static extends ClassLike {
        _serialVersionUID: long;
        new(val: any): BadAttributeValueExpException;
      }
      let BadAttributeValueExpException: _BadAttributeValueExpException$$static;
      interface _BadAttributeValueExpException {
        _readObject(ois: java.io.ObjectInputStream): void;
        toString(): string;
        _val: string;
      }
      interface BadAttributeValueExpException extends CombineTypes<[_BadAttributeValueExpException, java.lang.Exception]> {}
      interface _BadBinaryOpValueExpException$$static extends ClassLike {
        _serialVersionUID: long;
        new(exp: ValueExp): BadBinaryOpValueExpException;
      }
      let BadBinaryOpValueExpException: _BadBinaryOpValueExpException$$static;
      interface _BadBinaryOpValueExpException {
        getExp(): ValueExp;
        toString(): string;
        _exp: ValueExp;
      }
      interface BadBinaryOpValueExpException extends CombineTypes<[_BadBinaryOpValueExpException, java.lang.Exception]> {}
      interface _BadStringOperationException$$static extends ClassLike {
        _serialVersionUID: long;
        new(message: string): BadStringOperationException;
      }
      let BadStringOperationException: _BadStringOperationException$$static;
      interface _BadStringOperationException {
        toString(): string;
        _op: string;
      }
      interface BadStringOperationException extends CombineTypes<[_BadStringOperationException, java.lang.Exception]> {}
      interface _BetweenQueryExp$$static extends ClassLike {
        _serialVersionUID: long;
        new(): BetweenQueryExp;
        new(v1: ValueExp, v2: ValueExp, v3: ValueExp): BetweenQueryExp;
      }
      let BetweenQueryExp: _BetweenQueryExp$$static;
      interface _BetweenQueryExp {
        apply(name: ObjectName): boolean;
        getCheckedValue(): ValueExp;
        getLowerBound(): ValueExp;
        getUpperBound(): ValueExp;
        toString(): string;
        _exp1: ValueExp;
        _exp2: ValueExp;
        _exp3: ValueExp;
      }
      interface BetweenQueryExp extends CombineTypes<[_BetweenQueryExp, javax.management.QueryExp, javax.management.QueryEval]> {}
      interface _BinaryOpValueExp$$static extends ClassLike {
        _serialVersionUID: long;
        new(): BinaryOpValueExp;
        new(o: int, v1: ValueExp, v2: ValueExp): BinaryOpValueExp;
      }
      let BinaryOpValueExp: _BinaryOpValueExp$$static;
      interface _BinaryOpValueExp {
        apply(name: ObjectName): ValueExp;
        getLeftValue(): ValueExp;
        getOperator(): int;
        getRightValue(): ValueExp;
        _opString(): string;
        _parens(subexp: ValueExp, left: boolean): string;
        _precedence(xop: int): int;
        setMBeanServer(s: MBeanServer): void;
        toString(): string;
        _exp1: ValueExp;
        _exp2: ValueExp;
        _op: int;
      }
      interface BinaryOpValueExp extends CombineTypes<[_BinaryOpValueExp, javax.management.ValueExp, javax.management.QueryEval]> {}
      interface _BinaryRelQueryExp$$static extends ClassLike {
        _serialVersionUID: long;
        new(): BinaryRelQueryExp;
        new(op: int, v1: ValueExp, v2: ValueExp): BinaryRelQueryExp;
      }
      let BinaryRelQueryExp: _BinaryRelQueryExp$$static;
      interface _BinaryRelQueryExp {
        apply(name: ObjectName): boolean;
        getLeftValue(): ValueExp;
        getOperator(): int;
        getRightValue(): ValueExp;
        _relOpString(): string;
        toString(): string;
        _exp1: ValueExp;
        _exp2: ValueExp;
        _relOp: int;
      }
      interface BinaryRelQueryExp extends CombineTypes<[_BinaryRelQueryExp, javax.management.QueryExp, javax.management.QueryEval]> {}
      interface _BooleanValueExp$$static extends ClassLike {
        _serialVersionUID: long;
        _new(val: boolean): BooleanValueExp;
        _new(val: boolean): BooleanValueExp;
      }
      let BooleanValueExp: _BooleanValueExp$$static;
      interface _BooleanValueExp {
        apply(name: ObjectName): ValueExp;
        getValue(): boolean;
        setMBeanServer(s: MBeanServer): void;
        toString(): string;
        _val: boolean;
      }
      interface BooleanValueExp extends CombineTypes<[_BooleanValueExp, javax.management.ValueExp, javax.management.QueryEval]> {}
      interface _ClassAttributeValueExp$$static extends ClassLike {
        _newSerialVersionUID: long;
        _oldSerialVersionUID: long;
        _serialVersionUID: long;
        new(): ClassAttributeValueExp;
      }
      let ClassAttributeValueExp: _ClassAttributeValueExp$$static;
      interface _ClassAttributeValueExp {
        apply(name: ObjectName): ValueExp;
        _getValue(name: ObjectName): any;
        toString(): string;
        _attr: string;
      }
      interface ClassAttributeValueExp extends CombineTypes<[_ClassAttributeValueExp, javax.management.AttributeValueExp]> {}
      interface _ConstructorParameters$$static extends ClassLike {
      }
      let ConstructorParameters: _ConstructorParameters$$static;
      interface _ConstructorParameters {
        value(): string[];
(): string[];
      }
      interface ConstructorParameters extends CombineTypes<[_ConstructorParameters, java.lang.annotation.Annotation, java.lang.Object]> {}
      interface _DefaultLoaderRepository$$static extends ClassLike {
        loadClass(className: string): java.lang.Class<any>;
        loadClassWithout(loader: java.lang.ClassLoader, className: string): java.lang.Class<any>;
        new(): DefaultLoaderRepository;
      }
      let DefaultLoaderRepository: _DefaultLoaderRepository$$static;
      interface _DefaultLoaderRepository {
      }
      interface DefaultLoaderRepository extends CombineTypes<[_DefaultLoaderRepository, java.lang.Object]> {}
      interface _Descriptor$$static extends ClassLike {
      }
      let Descriptor: _Descriptor$$static;
      interface _Descriptor {
        clone(): any;
        equals(a0: any): boolean;
        getFieldNames(): string[];
        getFieldValue(a0: string): any;
        getFieldValues(a0: string[]): any[];
        getFieldValues(...a0: string[]): any[];
        getFields(): string[];
        hashCode(): int;
        isValid(): boolean;
        removeField(a0: string): void;
        setField(a0: string, a1: any): void;
        setFields(a0: string[], a1: any[]): void;
      }
      interface Descriptor extends CombineTypes<[_Descriptor, java.lang.Cloneable, java.lang.Object, java.io.Serializable]> {}
      interface _DescriptorAccess$$static extends ClassLike {
      }
      let DescriptorAccess: _DescriptorAccess$$static;
      interface _DescriptorAccess {
        setDescriptor(a0: Descriptor): void;
(a0: Descriptor): void;
      }
      interface DescriptorAccess extends CombineTypes<[_DescriptorAccess, java.lang.Object, javax.management.DescriptorRead]> {}
      interface _DescriptorKey$$static extends ClassLike {
      }
      let DescriptorKey: _DescriptorKey$$static;
      interface _DescriptorKey {
        value(): string;
(): string;
      }
      interface DescriptorKey extends CombineTypes<[_DescriptorKey, java.lang.annotation.Annotation, java.lang.Object]> {}
      interface _DescriptorRead$$static extends ClassLike {
      }
      let DescriptorRead: _DescriptorRead$$static;
      interface _DescriptorRead {
        getDescriptor(): Descriptor;
(): Descriptor;
      }
      interface DescriptorRead extends CombineTypes<[_DescriptorRead, java.lang.Object]> {}
      interface _DynamicMBean$$static extends ClassLike {
      }
      let DynamicMBean: _DynamicMBean$$static;
      interface _DynamicMBean {
        getAttribute(a0: string): any;
        getAttributes(a0: string[]): AttributeList;
        getMBeanInfo(): MBeanInfo;
        invoke(a0: string, a1: any[], a2: string[]): any;
        setAttribute(a0: Attribute): void;
        setAttributes(a0: AttributeList): AttributeList;
      }
      interface DynamicMBean extends CombineTypes<[_DynamicMBean, java.lang.Object]> {}
      interface _ImmutableDescriptor$$static extends ClassLike {
        _checkIllegalFieldName(name: string): void;
        _findNonEmpty(ds: Descriptor[], start: int): int;
        _illegal(message: string): void;
        _isEmpty(d: Descriptor): boolean;
        _makeMap(fieldNames: string[], fieldValues: any[]): java.util.SortedMap<string,any>;
        _makeMap(fields: string[]): java.util.SortedMap<string,any>;
        _nonNullDescriptor(d: Descriptor): Descriptor;
        union(descriptors: Descriptor[]): ImmutableDescriptor;
        union(...descriptors: Descriptor[]): ImmutableDescriptor;
        _unsupported(): void;
        readonly EMPTY_DESCRIPTOR: ImmutableDescriptor;
        _serialVersionUID: long;
        new(fieldNames: string[], fieldValues: any[]): ImmutableDescriptor;
        new(fields: string[]): ImmutableDescriptor;
        new(...fields: string[]): ImmutableDescriptor;
        new(fields: java.util.Map<string,any>): ImmutableDescriptor;
      }
      let ImmutableDescriptor: _ImmutableDescriptor$$static;
      interface _ImmutableDescriptor {
        clone(): Descriptor;
        clone(): any;
        equals(o: any): boolean;
        _fieldIndex(name: string): int;
        getFieldNames(): string[];
        getFieldValue(fieldName: string): any;
        getFieldValues(fieldNames: string[]): any[];
        getFieldValues(...fieldNames: string[]): any[];
        getFields(): string[];
        hashCode(): int;
        isValid(): boolean;
        _readResolve(): any;
        removeField(fieldName: string): void;
        setField(fieldName: string, fieldValue: any): void;
        setFields(fieldNames: string[], fieldValues: any[]): void;
        toString(): string;
        _hashCode: int;
        _names: string[];
        _values: any[];
      }
      interface ImmutableDescriptor extends CombineTypes<[_ImmutableDescriptor, javax.management.Descriptor, java.lang.Object]> {}
      interface _InQueryExp$$static extends ClassLike {
        _serialVersionUID: long;
        new(): InQueryExp;
        new(v1: ValueExp, items: ValueExp[]): InQueryExp;
      }
      let InQueryExp: _InQueryExp$$static;
      interface _InQueryExp {
        apply(name: ObjectName): boolean;
        _generateValueList(): string;
        getCheckedValue(): ValueExp;
        getExplicitValues(): ValueExp[];
        toString(): string;
        _val: ValueExp;
        _valueList: ValueExp[];
      }
      interface InQueryExp extends CombineTypes<[_InQueryExp, javax.management.QueryExp, javax.management.QueryEval]> {}
      interface _InstanceAlreadyExistsException$$static extends ClassLike {
        _serialVersionUID: long;
        new(): InstanceAlreadyExistsException;
        new(message: string): InstanceAlreadyExistsException;
      }
      let InstanceAlreadyExistsException: _InstanceAlreadyExistsException$$static;
      interface _InstanceAlreadyExistsException {
      }
      interface InstanceAlreadyExistsException extends CombineTypes<[_InstanceAlreadyExistsException, javax.management.OperationsException]> {}
      interface _InstanceNotFoundException$$static extends ClassLike {
        _serialVersionUID: long;
        new(): InstanceNotFoundException;
        new(message: string): InstanceNotFoundException;
      }
      let InstanceNotFoundException: _InstanceNotFoundException$$static;
      interface _InstanceNotFoundException {
      }
      interface InstanceNotFoundException extends CombineTypes<[_InstanceNotFoundException, javax.management.OperationsException]> {}
      interface _InstanceOfQueryExp$$static extends ClassLike {
        _serialVersionUID: long;
        new(classNameValue: StringValueExp): InstanceOfQueryExp;
      }
      let InstanceOfQueryExp: _InstanceOfQueryExp$$static;
      interface _InstanceOfQueryExp {
        apply(name: ObjectName): boolean;
        getClassNameValue(): StringValueExp;
        toString(): string;
        _classNameValue: StringValueExp;
      }
      interface InstanceOfQueryExp extends CombineTypes<[_InstanceOfQueryExp, javax.management.QueryExp, javax.management.QueryEval]> {}
      interface _IntrospectionException$$static extends ClassLike {
        _serialVersionUID: long;
        new(): IntrospectionException;
        new(message: string): IntrospectionException;
      }
      let IntrospectionException: _IntrospectionException$$static;
      interface _IntrospectionException {
      }
      interface IntrospectionException extends CombineTypes<[_IntrospectionException, javax.management.OperationsException]> {}
      interface _InvalidApplicationException$$static extends ClassLike {
        _serialVersionUID: long;
        new(val: any): InvalidApplicationException;
      }
      let InvalidApplicationException: _InvalidApplicationException$$static;
      interface _InvalidApplicationException {
        _val: any;
      }
      interface InvalidApplicationException extends CombineTypes<[_InvalidApplicationException, java.lang.Exception]> {}
      interface _InvalidAttributeValueException$$static extends ClassLike {
        _serialVersionUID: long;
        new(): InvalidAttributeValueException;
        new(message: string): InvalidAttributeValueException;
      }
      let InvalidAttributeValueException: _InvalidAttributeValueException$$static;
      interface _InvalidAttributeValueException {
      }
      interface InvalidAttributeValueException extends CombineTypes<[_InvalidAttributeValueException, javax.management.OperationsException]> {}
      interface _JMException$$static extends ClassLike {
        _serialVersionUID: long;
        new(): JMException;
        new(msg: string): JMException;
      }
      let JMException: _JMException$$static;
      interface _JMException {
      }
      interface JMException extends CombineTypes<[_JMException, java.lang.Exception]> {}
      interface _JMRuntimeException$$static extends ClassLike {
        _serialVersionUID: long;
        new(): JMRuntimeException;
        new(message: string): JMRuntimeException;
        _new(message: string, cause: java.lang.Throwable): JMRuntimeException;
      }
      let JMRuntimeException: _JMRuntimeException$$static;
      interface _JMRuntimeException {
      }
      interface JMRuntimeException extends CombineTypes<[_JMRuntimeException, java.lang.RuntimeException]> {}
      interface _JMX$$static extends ClassLike {
        _createProxy<T>(connection: MBeanServerConnection, objectName: ObjectName, interfaceClass: java.lang.Class<T>, notificationEmitter: boolean, isMXBean: boolean): T;
        isMXBeanInterface(interfaceClass: java.lang.Class<any>): boolean;
        newMBeanProxy<T>(connection: MBeanServerConnection, objectName: ObjectName, interfaceClass: java.lang.Class<T>): T;
        newMBeanProxy<T>(connection: MBeanServerConnection, objectName: ObjectName, interfaceClass: java.lang.Class<T>, notificationEmitter: boolean): T;
        newMXBeanProxy<T>(connection: MBeanServerConnection, objectName: ObjectName, interfaceClass: java.lang.Class<T>): T;
        newMXBeanProxy<T>(connection: MBeanServerConnection, objectName: ObjectName, interfaceClass: java.lang.Class<T>, notificationEmitter: boolean): T;
        readonly DEFAULT_VALUE_FIELD: string;
        readonly IMMUTABLE_INFO_FIELD: string;
        readonly INTERFACE_CLASS_NAME_FIELD: string;
        readonly LEGAL_VALUES_FIELD: string;
        readonly MAX_VALUE_FIELD: string;
        readonly MIN_VALUE_FIELD: string;
        readonly MXBEAN_FIELD: string;
        readonly OPEN_TYPE_FIELD: string;
        readonly ORIGINAL_TYPE_FIELD: string;
        _proof: JMX;
      }
      let JMX: _JMX$$static;
      interface _JMX {
      }
      interface JMX extends CombineTypes<[_JMX, java.lang.Object]> {}
      interface _ListenerNotFoundException$$static extends ClassLike {
        _serialVersionUID: long;
        new(): ListenerNotFoundException;
        new(message: string): ListenerNotFoundException;
      }
      let ListenerNotFoundException: _ListenerNotFoundException$$static;
      interface _ListenerNotFoundException {
      }
      interface ListenerNotFoundException extends CombineTypes<[_ListenerNotFoundException, javax.management.OperationsException]> {}
      interface _MBeanAttributeInfo$$static extends ClassLike {
        _attributeType(getter: java.lang.reflect.Method, setter: java.lang.reflect.Method): string;
        _isIs(getter: java.lang.reflect.Method): boolean;
        _NO_ATTRIBUTES: MBeanAttributeInfo[];
        _serialVersionUID: long;
        new(name: string, type: string, description: string, isReadable: boolean, isWritable: boolean, isIs: boolean): MBeanAttributeInfo;
        new(name: string, type: string, description: string, isReadable: boolean, isWritable: boolean, isIs: boolean, descriptor: Descriptor): MBeanAttributeInfo;
        new(name: string, description: string, getter: java.lang.reflect.Method, setter: java.lang.reflect.Method): MBeanAttributeInfo;
      }
      let MBeanAttributeInfo: _MBeanAttributeInfo$$static;
      interface _MBeanAttributeInfo {
        clone(): any;
        equals(o: any): boolean;
        getType(): string;
        hashCode(): int;
        isIs(): boolean;
        isReadable(): boolean;
        isWritable(): boolean;
        toString(): string;
        _attributeType: string;
        _is: boolean;
        _isRead: boolean;
        _isWrite: boolean;
      }
      interface MBeanAttributeInfo extends CombineTypes<[_MBeanAttributeInfo, java.lang.Cloneable, javax.management.MBeanFeatureInfo]> {}
      interface _MBeanConstructorInfo$$static extends ClassLike {
        _constructorSignature(cn: java.lang.reflect.Constructor<any>): MBeanParameterInfo[];
        _NO_CONSTRUCTORS: MBeanConstructorInfo[];
        _serialVersionUID: long;
        new(description: string, constructor: java.lang.reflect.Constructor<any>): MBeanConstructorInfo;
        new(name: string, description: string, signature: MBeanParameterInfo[]): MBeanConstructorInfo;
        new(name: string, description: string, signature: MBeanParameterInfo[], descriptor: Descriptor): MBeanConstructorInfo;
      }
      let MBeanConstructorInfo: _MBeanConstructorInfo$$static;
      interface _MBeanConstructorInfo {
        clone(): any;
        equals(o: any): boolean;
        _fastGetSignature(): MBeanParameterInfo[];
        getSignature(): MBeanParameterInfo[];
        hashCode(): int;
        toString(): string;
        _arrayGettersSafe: boolean;
        _signature: MBeanParameterInfo[];
      }
      interface MBeanConstructorInfo extends CombineTypes<[_MBeanConstructorInfo, java.lang.Cloneable, javax.management.MBeanFeatureInfo]> {}
      interface _MBeanException$$static extends ClassLike {
        _serialVersionUID: long;
        new(e: java.lang.Exception): MBeanException;
        new(e: java.lang.Exception, message: string): MBeanException;
      }
      let MBeanException: _MBeanException$$static;
      interface _MBeanException {
        getCause(): java.lang.Throwable;
        getTargetException(): java.lang.Exception;
        _exception: java.lang.Exception;
      }
      interface MBeanException extends CombineTypes<[_MBeanException, javax.management.JMException]> {}
      interface _MBeanFeatureInfo$$static extends ClassLike {
        _serialVersionUID: long;
        new(name: string, description: string): MBeanFeatureInfo;
        new(name: string, description: string, descriptor: Descriptor): MBeanFeatureInfo;
      }
      let MBeanFeatureInfo: _MBeanFeatureInfo$$static;
      interface _MBeanFeatureInfo {
        equals(o: any): boolean;
        getDescription(): string;
        getDescriptor(): Descriptor;
        getName(): string;
        hashCode(): int;
        _readObject(_in: java.io.ObjectInputStream): void;
        _writeObject(out: java.io.ObjectOutputStream): void;
        _description: string;
        _descriptor: Descriptor;
        _name: string;
      }
      interface MBeanFeatureInfo extends CombineTypes<[_MBeanFeatureInfo, java.lang.Object, javax.management.DescriptorRead, java.io.Serializable]> {}
      interface _MBeanInfo$$static extends ClassLike {
        _arrayGettersSafe(subclass: java.lang.Class<any>, immutableClass: java.lang.Class<any>): boolean;
        _isEqual(s1: string, s2: string): boolean;
        _arrayGettersSafeMap: java.util.Map<java.lang.Class<any>,boolean>;
        _serialVersionUID: long;
        new(className: string, description: string, attributes: MBeanAttributeInfo[], constructors: MBeanConstructorInfo[], operations: MBeanOperationInfo[], notifications: MBeanNotificationInfo[]): MBeanInfo;
        new(className: string, description: string, attributes: MBeanAttributeInfo[], constructors: MBeanConstructorInfo[], operations: MBeanOperationInfo[], notifications: MBeanNotificationInfo[], descriptor: Descriptor): MBeanInfo;
      }
      let MBeanInfo: _MBeanInfo$$static;
      interface _MBeanInfo {
        clone(): any;
        equals(o: any): boolean;
        _fastGetAttributes(): MBeanAttributeInfo[];
        _fastGetConstructors(): MBeanConstructorInfo[];
        _fastGetNotifications(): MBeanNotificationInfo[];
        _fastGetOperations(): MBeanOperationInfo[];
        getAttributes(): MBeanAttributeInfo[];
        getClassName(): string;
        getConstructors(): MBeanConstructorInfo[];
        getDescription(): string;
        getDescriptor(): Descriptor;
        getNotifications(): MBeanNotificationInfo[];
        getOperations(): MBeanOperationInfo[];
        hashCode(): int;
        _nonNullAttributes(): MBeanAttributeInfo[];
        _nonNullConstructors(): MBeanConstructorInfo[];
        _nonNullNotifications(): MBeanNotificationInfo[];
        _nonNullOperations(): MBeanOperationInfo[];
        _readObject(_in: java.io.ObjectInputStream): void;
        toString(): string;
        _writeObject(out: java.io.ObjectOutputStream): void;
        _arrayGettersSafe: boolean;
        _attributes: MBeanAttributeInfo[];
        _className: string;
        _constructors: MBeanConstructorInfo[];
        _description: string;
        _descriptor: Descriptor;
        _hashCode: int;
        _notifications: MBeanNotificationInfo[];
        _operations: MBeanOperationInfo[];
      }
      interface MBeanInfo extends CombineTypes<[_MBeanInfo, java.lang.Cloneable, java.lang.Object, javax.management.DescriptorRead, java.io.Serializable]> {}
      interface _MBeanInfo$ArrayGettersSafeAction$$static extends ClassLike {
        _new(subclass: java.lang.Class<any>, immutableClass: java.lang.Class<any>): MBeanInfo$ArrayGettersSafeAction;
      }
      let MBeanInfo$ArrayGettersSafeAction: _MBeanInfo$ArrayGettersSafeAction$$static;
      interface _MBeanInfo$ArrayGettersSafeAction {
        run(): boolean;
        run(): any;
        _immutableClass: java.lang.Class<any>;
        _subclass: java.lang.Class<any>;
      }
      interface MBeanInfo$ArrayGettersSafeAction extends CombineTypes<[_MBeanInfo$ArrayGettersSafeAction, java.security.PrivilegedAction<boolean>, java.lang.Object]> {}
      interface _MBeanNotificationInfo$$static extends ClassLike {
        _NO_NOTIFICATIONS: MBeanNotificationInfo[];
        _NO_TYPES: string[];
        _serialVersionUID: long;
        new(notifTypes: string[], name: string, description: string): MBeanNotificationInfo;
        new(notifTypes: string[], name: string, description: string, descriptor: Descriptor): MBeanNotificationInfo;
      }
      let MBeanNotificationInfo: _MBeanNotificationInfo$$static;
      interface _MBeanNotificationInfo {
        clone(): any;
        equals(o: any): boolean;
        _fastGetNotifTypes(): string[];
        getNotifTypes(): string[];
        hashCode(): int;
        _readObject(ois: java.io.ObjectInputStream): void;
        toString(): string;
        _arrayGettersSafe: boolean;
        _types: string[];
      }
      interface MBeanNotificationInfo extends CombineTypes<[_MBeanNotificationInfo, java.lang.Cloneable, javax.management.MBeanFeatureInfo]> {}
      interface _MBeanOperationInfo$$static extends ClassLike {
        _methodSignature(method: java.lang.reflect.Method): MBeanParameterInfo[];
        _parameters(classes: java.lang.Class<any>[], annots: java.lang.annotation.Annotation[][]): MBeanParameterInfo[];
        readonly ACTION: int;
        readonly ACTION_INFO: int;
        readonly INFO: int;
        _NO_OPERATIONS: MBeanOperationInfo[];
        readonly UNKNOWN: int;
        _serialVersionUID: long;
        new(description: string, method: java.lang.reflect.Method): MBeanOperationInfo;
        new(name: string, description: string, signature: MBeanParameterInfo[], type: string, impact: int): MBeanOperationInfo;
        new(name: string, description: string, signature: MBeanParameterInfo[], type: string, impact: int, descriptor: Descriptor): MBeanOperationInfo;
      }
      let MBeanOperationInfo: _MBeanOperationInfo$$static;
      interface _MBeanOperationInfo {
        clone(): any;
        equals(o: any): boolean;
        _fastGetSignature(): MBeanParameterInfo[];
        getImpact(): int;
        getReturnType(): string;
        getSignature(): MBeanParameterInfo[];
        hashCode(): int;
        toString(): string;
        _arrayGettersSafe: boolean;
        _impact: int;
        _signature: MBeanParameterInfo[];
        _type: string;
      }
      interface MBeanOperationInfo extends CombineTypes<[_MBeanOperationInfo, java.lang.Cloneable, javax.management.MBeanFeatureInfo]> {}
      interface _MBeanParameterInfo$$static extends ClassLike {
        _NO_PARAMS: MBeanParameterInfo[];
        _serialVersionUID: long;
        new(name: string, type: string, description: string): MBeanParameterInfo;
        new(name: string, type: string, description: string, descriptor: Descriptor): MBeanParameterInfo;
      }
      let MBeanParameterInfo: _MBeanParameterInfo$$static;
      interface _MBeanParameterInfo {
        clone(): any;
        equals(o: any): boolean;
        getType(): string;
        hashCode(): int;
        toString(): string;
        _type: string;
      }
      interface MBeanParameterInfo extends CombineTypes<[_MBeanParameterInfo, java.lang.Cloneable, javax.management.MBeanFeatureInfo]> {}
      interface _MBeanPermission$$static extends ClassLike {
        _getActions(mask: int): string;
        _getMask(action: string): int;
        _makeName(className: string, member: string, objectName: ObjectName): string;
        _ALL: int;
        _AddNotificationListener: int;
        _GetAttribute: int;
        _GetClassLoader: int;
        _GetClassLoaderFor: int;
        _GetClassLoaderRepository: int;
        _GetDomains: int;
        _GetMBeanInfo: int;
        _GetObjectInstance: int;
        _Instantiate: int;
        _Invoke: int;
        _IsInstanceOf: int;
        _NONE: int;
        _QueryMBeans: int;
        _QueryNames: int;
        _RegisterMBean: int;
        _RemoveNotificationListener: int;
        _SetAttribute: int;
        _UnregisterMBean: int;
        _serialVersionUID: long;
        new(name: string, actions: string): MBeanPermission;
        new(className: string, member: string, objectName: ObjectName, actions: string): MBeanPermission;
      }
      let MBeanPermission: _MBeanPermission$$static;
      interface _MBeanPermission {
        equals(obj: any): boolean;
        getActions(): string;
        hashCode(): int;
        implies(p: java.security.Permission): boolean;
        _initName(className: string, member: string, objectName: ObjectName): void;
        _parseActions(): void;
        _parseName(): void;
        _readObject(_in: java.io.ObjectInputStream): void;
        _setClassName(className: string): void;
        _setMember(member: string): void;
        _actions: string;
        _classNameExactMatch: boolean;
        _classNamePrefix: string;
        _mask: int;
        _member: string;
        _objectName: ObjectName;
      }
      interface MBeanPermission extends CombineTypes<[_MBeanPermission, java.security.Permission]> {}
      interface _MBeanRegistration$$static extends ClassLike {
      }
      let MBeanRegistration: _MBeanRegistration$$static;
      interface _MBeanRegistration {
        postDeregister(): void;
        postRegister(a0: boolean): void;
        preDeregister(): void;
        preRegister(a0: MBeanServer, a1: ObjectName): ObjectName;
      }
      interface MBeanRegistration extends CombineTypes<[_MBeanRegistration, java.lang.Object]> {}
      interface _MBeanRegistrationException$$static extends ClassLike {
        _serialVersionUID: long;
        new(e: java.lang.Exception): MBeanRegistrationException;
        new(e: java.lang.Exception, message: string): MBeanRegistrationException;
      }
      let MBeanRegistrationException: _MBeanRegistrationException$$static;
      interface _MBeanRegistrationException {
      }
      interface MBeanRegistrationException extends CombineTypes<[_MBeanRegistrationException, javax.management.MBeanException]> {}
      interface _MBeanServer$$static extends ClassLike {
      }
      let MBeanServer: _MBeanServer$$static;
      interface _MBeanServer {
        addNotificationListener(a0: ObjectName, a1: NotificationListener, a2: NotificationFilter, a3: any): void;
        addNotificationListener(a0: ObjectName, a1: ObjectName, a2: NotificationFilter, a3: any): void;
        createMBean(a0: string, a1: ObjectName): ObjectInstance;
        createMBean(a0: string, a1: ObjectName, a2: ObjectName): ObjectInstance;
        createMBean(a0: string, a1: ObjectName, a2: any[], a3: string[]): ObjectInstance;
        createMBean(a0: string, a1: ObjectName, a2: ObjectName, a3: any[], a4: string[]): ObjectInstance;
        deserialize(name: ObjectName, data: byte[]): java.io.ObjectInputStream;
        deserialize(className: string, data: byte[]): java.io.ObjectInputStream;
        deserialize(className: string, loaderName: ObjectName, data: byte[]): java.io.ObjectInputStream;
        getAttribute(a0: ObjectName, a1: string): any;
        getAttributes(a0: ObjectName, a1: string[]): AttributeList;
        getClassLoader(a0: ObjectName): java.lang.ClassLoader;
        getClassLoaderFor(a0: ObjectName): java.lang.ClassLoader;
        getClassLoaderRepository(): management.loading.ClassLoaderRepository;
        getDefaultDomain(): string;
        getDomains(): string[];
        getMBeanCount(): int;
        getMBeanInfo(a0: ObjectName): MBeanInfo;
        getObjectInstance(a0: ObjectName): ObjectInstance;
        instantiate(a0: string): any;
        instantiate(a0: string, a1: ObjectName): any;
        instantiate(a0: string, a1: any[], a2: string[]): any;
        instantiate(a0: string, a1: ObjectName, a2: any[], a3: string[]): any;
        invoke(a0: ObjectName, a1: string, a2: any[], a3: string[]): any;
        isInstanceOf(a0: ObjectName, a1: string): boolean;
        isRegistered(a0: ObjectName): boolean;
        queryMBeans(a0: ObjectName, a1: QueryExp): java.util.Set<ObjectInstance>;
        queryNames(a0: ObjectName, a1: QueryExp): java.util.Set<ObjectName>;
        registerMBean(a0: any, a1: ObjectName): ObjectInstance;
        removeNotificationListener(a0: ObjectName, a1: ObjectName): void;
        removeNotificationListener(a0: ObjectName, a1: ObjectName, a2: NotificationFilter, a3: any): void;
        removeNotificationListener(a0: ObjectName, a1: NotificationListener): void;
        removeNotificationListener(a0: ObjectName, a1: NotificationListener, a2: NotificationFilter, a3: any): void;
        setAttribute(a0: ObjectName, a1: Attribute): void;
        setAttributes(a0: ObjectName, a1: AttributeList): AttributeList;
        unregisterMBean(a0: ObjectName): void;
      }
      interface MBeanServer extends CombineTypes<[_MBeanServer, javax.management.MBeanServerConnection, java.lang.Object]> {}
      interface _MBeanServerBuilder$$static extends ClassLike {
        new(): MBeanServerBuilder;
      }
      let MBeanServerBuilder: _MBeanServerBuilder$$static;
      interface _MBeanServerBuilder {
        newMBeanServer(defaultDomain: string, outer: MBeanServer, delegate: MBeanServerDelegate): MBeanServer;
        newMBeanServerDelegate(): MBeanServerDelegate;
      }
      interface MBeanServerBuilder extends CombineTypes<[_MBeanServerBuilder, java.lang.Object]> {}
      interface _MBeanServerConnection$$static extends ClassLike {
      }
      let MBeanServerConnection: _MBeanServerConnection$$static;
      interface _MBeanServerConnection {
        addNotificationListener(a0: ObjectName, a1: NotificationListener, a2: NotificationFilter, a3: any): void;
        addNotificationListener(a0: ObjectName, a1: ObjectName, a2: NotificationFilter, a3: any): void;
        createMBean(a0: string, a1: ObjectName): ObjectInstance;
        createMBean(a0: string, a1: ObjectName, a2: ObjectName): ObjectInstance;
        createMBean(a0: string, a1: ObjectName, a2: any[], a3: string[]): ObjectInstance;
        createMBean(a0: string, a1: ObjectName, a2: ObjectName, a3: any[], a4: string[]): ObjectInstance;
        getAttribute(a0: ObjectName, a1: string): any;
        getAttributes(a0: ObjectName, a1: string[]): AttributeList;
        getDefaultDomain(): string;
        getDomains(): string[];
        getMBeanCount(): int;
        getMBeanInfo(a0: ObjectName): MBeanInfo;
        getObjectInstance(a0: ObjectName): ObjectInstance;
        invoke(a0: ObjectName, a1: string, a2: any[], a3: string[]): any;
        isInstanceOf(a0: ObjectName, a1: string): boolean;
        isRegistered(a0: ObjectName): boolean;
        queryMBeans(a0: ObjectName, a1: QueryExp): java.util.Set<ObjectInstance>;
        queryNames(a0: ObjectName, a1: QueryExp): java.util.Set<ObjectName>;
        removeNotificationListener(a0: ObjectName, a1: ObjectName): void;
        removeNotificationListener(a0: ObjectName, a1: ObjectName, a2: NotificationFilter, a3: any): void;
        removeNotificationListener(a0: ObjectName, a1: NotificationListener): void;
        removeNotificationListener(a0: ObjectName, a1: NotificationListener, a2: NotificationFilter, a3: any): void;
        setAttribute(a0: ObjectName, a1: Attribute): void;
        setAttributes(a0: ObjectName, a1: AttributeList): AttributeList;
        unregisterMBean(a0: ObjectName): void;
      }
      interface MBeanServerConnection extends CombineTypes<[_MBeanServerConnection, java.lang.Object]> {}
      interface _MBeanServerDelegate$$static extends ClassLike {
        _getStamp(): long;
        readonly DELEGATE_NAME: ObjectName;
        _notifsInfo: MBeanNotificationInfo[];
        _oldStamp: long;
        new(): MBeanServerDelegate;
      }
      let MBeanServerDelegate: _MBeanServerDelegate$$static;
      interface _MBeanServerDelegate {
        addNotificationListener(listener: NotificationListener, filter: NotificationFilter, handback: any): void;
        getImplementationName(): string;
        getImplementationVendor(): string;
        getImplementationVersion(): string;
        getMBeanServerId(): string;
        getNotificationInfo(): MBeanNotificationInfo[];
        getSpecificationName(): string;
        getSpecificationVendor(): string;
        getSpecificationVersion(): string;
        removeNotificationListener(listener: NotificationListener, filter: NotificationFilter, handback: any): void;
        removeNotificationListener(listener: NotificationListener): void;
        sendNotification(notification: Notification): void;
        _broadcaster: NotificationBroadcasterSupport;
        _mbeanServerId: string;
        _sequenceNumber: long;
        _stamp: long;
      }
      interface MBeanServerDelegate extends CombineTypes<[_MBeanServerDelegate, java.lang.Object, javax.management.MBeanServerDelegateMBean, javax.management.NotificationEmitter]> {}
      interface _MBeanServerDelegateMBean$$static extends ClassLike {
      }
      let MBeanServerDelegateMBean: _MBeanServerDelegateMBean$$static;
      interface _MBeanServerDelegateMBean {
        getImplementationName(): string;
        getImplementationVendor(): string;
        getImplementationVersion(): string;
        getMBeanServerId(): string;
        getSpecificationName(): string;
        getSpecificationVendor(): string;
        getSpecificationVersion(): string;
      }
      interface MBeanServerDelegateMBean extends CombineTypes<[_MBeanServerDelegateMBean, java.lang.Object]> {}
      interface _MBeanServerFactory$$static extends ClassLike {
        _addMBeanServer(mbs: MBeanServer): void;
        _checkMBeanServerBuilder(): void;
        _checkPermission(action: string): void;
        createMBeanServer(): MBeanServer;
        createMBeanServer(domain: string): MBeanServer;
        findMBeanServer(agentId: string): java.util.ArrayList<MBeanServer>;
        getClassLoaderRepository(server: MBeanServer): management.loading.ClassLoaderRepository;
        _getNewMBeanServerBuilder(): MBeanServerBuilder;
        _loadBuilderClass(builderClassName: string): java.lang.Class<any>;
        _mBeanServerId(mbs: MBeanServer): string;
        _newBuilder(builderClass: java.lang.Class<any>): MBeanServerBuilder;
        newMBeanServer(): MBeanServer;
        newMBeanServer(domain: string): MBeanServer;
        releaseMBeanServer(mbeanServer: MBeanServer): void;
        _removeMBeanServer(mbs: MBeanServer): void;
        _builder: MBeanServerBuilder;
        _mBeanServerList: java.util.ArrayList<MBeanServer>;
      }
      let MBeanServerFactory: _MBeanServerFactory$$static;
      interface _MBeanServerFactory {
      }
      interface MBeanServerFactory extends CombineTypes<[_MBeanServerFactory, java.lang.Object]> {}
      interface _MBeanServerInvocationHandler$$static extends ClassLike {
        _findMXBeanProxy(mxbeanInterface: java.lang.Class<any>): com.sun.jmx.mbeanserver.MXBeanProxy;
        _isLocal(proxy: any, method: java.lang.reflect.Method): boolean;
        newProxyInstance<T>(connection: MBeanServerConnection, objectName: ObjectName, interfaceClass: java.lang.Class<T>, notificationBroadcaster: boolean): T;
        _mxbeanProxies: java.util.WeakHashMap<java.lang.Class<any>,java.lang.ref.WeakReference<com.sun.jmx.mbeanserver.MXBeanProxy>>;
        new(connection: MBeanServerConnection, objectName: ObjectName): MBeanServerInvocationHandler;
        new(connection: MBeanServerConnection, objectName: ObjectName, isMXBean: boolean): MBeanServerInvocationHandler;
      }
      let MBeanServerInvocationHandler: _MBeanServerInvocationHandler$$static;
      interface _MBeanServerInvocationHandler {
        _doLocally(proxy: any, method: java.lang.reflect.Method, args: any[]): any;
        getMBeanServerConnection(): MBeanServerConnection;
        getObjectName(): ObjectName;
        invoke(proxy: any, method: java.lang.reflect.Method, args: any[]): any;
        _invokeBroadcasterMethod(proxy: any, method: java.lang.reflect.Method, args: any[]): any;
        isMXBean(): boolean;
        _shouldDoLocally(proxy: any, method: java.lang.reflect.Method): boolean;
        _connection: MBeanServerConnection;
        _isMXBean: boolean;
        _objectName: ObjectName;
      }
      interface MBeanServerInvocationHandler extends CombineTypes<[_MBeanServerInvocationHandler, java.lang.Object, java.lang.reflect.InvocationHandler]> {}
      interface _MBeanServerNotification$$static extends ClassLike {
        readonly REGISTRATION_NOTIFICATION: string;
        readonly UNREGISTRATION_NOTIFICATION: string;
        _serialVersionUID: long;
        new(type: string, source: any, sequenceNumber: long, a3: ObjectName): MBeanServerNotification;
      }
      let MBeanServerNotification: _MBeanServerNotification$$static;
      interface _MBeanServerNotification {
        getMBeanName(): ObjectName;
        toString(): string;
        _objectName: ObjectName;
      }
      interface MBeanServerNotification extends CombineTypes<[_MBeanServerNotification, javax.management.Notification]> {}
      interface _MBeanServerPermission$$static extends ClassLike {
        _getCanonicalName(mask: int): string;
        _impliedMask(mask: int): int;
        _makeCanonicalName(mask: int): string;
        _nameIndex(name: string): int;
        _parseMask(name: string): int;
        _simplifyMask(mask: int): int;
        _ALL_MASK: int;
        _CREATE: int;
        _CREATE_MASK: int;
        _FIND: int;
        _FIND_MASK: int;
        _NEW: int;
        _NEW_MASK: int;
        _N_NAMES: int;
        _RELEASE: int;
        _RELEASE_MASK: int;
        _canonicalNames: string[];
        _names: string[];
        _serialVersionUID: long;
        new(name: string): MBeanServerPermission;
        new(name: string, actions: string): MBeanServerPermission;
        _new(mask: int): MBeanServerPermission;
      }
      let MBeanServerPermission: _MBeanServerPermission$$static;
      interface _MBeanServerPermission {
        equals(obj: any): boolean;
        hashCode(): int;
        implies(p: java.security.Permission): boolean;
        newPermissionCollection(): java.security.PermissionCollection;
        _readObject(_in: java.io.ObjectInputStream): void;
        _mask: int;
      }
      interface MBeanServerPermission extends CombineTypes<[_MBeanServerPermission, java.security.BasicPermission]> {}
      interface _MBeanServerPermissionCollection$$static extends ClassLike {
        _serialVersionUID: long;
        _new(): MBeanServerPermissionCollection;
      }
      let MBeanServerPermissionCollection: _MBeanServerPermissionCollection$$static;
      interface _MBeanServerPermissionCollection {
        add(permission: java.security.Permission): void;
        elements(): java.util.Enumeration<java.security.Permission>;
        implies(permission: java.security.Permission): boolean;
        _collectionPermission: MBeanServerPermission;
      }
      interface MBeanServerPermissionCollection extends CombineTypes<[_MBeanServerPermissionCollection, java.security.PermissionCollection]> {}
      interface _MBeanTrustPermission$$static extends ClassLike {
        _validate(name: string, actions: string): void;
        _serialVersionUID: long;
        new(name: string): MBeanTrustPermission;
        new(name: string, actions: string): MBeanTrustPermission;
      }
      let MBeanTrustPermission: _MBeanTrustPermission$$static;
      interface _MBeanTrustPermission {
        _readObject(_in: java.io.ObjectInputStream): void;
      }
      interface MBeanTrustPermission extends CombineTypes<[_MBeanTrustPermission, java.security.BasicPermission]> {}
      interface _MXBean$$static extends ClassLike {
      }
      let MXBean: _MXBean$$static;
      interface _MXBean {
        value(): boolean;
(): boolean;
      }
      interface MXBean extends CombineTypes<[_MXBean, java.lang.annotation.Annotation, java.lang.Object]> {}
      interface _MalformedObjectNameException$$static extends ClassLike {
        _serialVersionUID: long;
        new(): MalformedObjectNameException;
        new(message: string): MalformedObjectNameException;
      }
      let MalformedObjectNameException: _MalformedObjectNameException$$static;
      interface _MalformedObjectNameException {
      }
      interface MalformedObjectNameException extends CombineTypes<[_MalformedObjectNameException, javax.management.OperationsException]> {}
      interface _MatchQueryExp$$static extends ClassLike {
        _wildmatch(s: string, p: string): boolean;
        _serialVersionUID: long;
        new(): MatchQueryExp;
        new(a: AttributeValueExp, s: StringValueExp): MatchQueryExp;
      }
      let MatchQueryExp: _MatchQueryExp$$static;
      interface _MatchQueryExp {
        apply(name: ObjectName): boolean;
        getAttribute(): AttributeValueExp;
        getPattern(): string;
        toString(): string;
        _exp: AttributeValueExp;
        _pattern: string;
      }
      interface MatchQueryExp extends CombineTypes<[_MatchQueryExp, javax.management.QueryExp, javax.management.QueryEval]> {}
      interface _NotCompliantMBeanException$$static extends ClassLike {
        _serialVersionUID: long;
        new(): NotCompliantMBeanException;
        new(message: string): NotCompliantMBeanException;
      }
      let NotCompliantMBeanException: _NotCompliantMBeanException$$static;
      interface _NotCompliantMBeanException {
      }
      interface NotCompliantMBeanException extends CombineTypes<[_NotCompliantMBeanException, javax.management.OperationsException]> {}
      interface _NotQueryExp$$static extends ClassLike {
        _serialVersionUID: long;
        new(): NotQueryExp;
        new(q: QueryExp): NotQueryExp;
      }
      let NotQueryExp: _NotQueryExp$$static;
      interface _NotQueryExp {
        apply(name: ObjectName): boolean;
        getNegatedExp(): QueryExp;
        toString(): string;
        _exp: QueryExp;
      }
      interface NotQueryExp extends CombineTypes<[_NotQueryExp, javax.management.QueryExp, javax.management.QueryEval]> {}
      interface _Notification$$static extends ClassLike {
        _compat: boolean;
        _newSerialPersistentFields: java.io.ObjectStreamField[];
        _newSerialVersionUID: long;
        _oldSerialPersistentFields: java.io.ObjectStreamField[];
        _oldSerialVersionUID: long;
        _serialPersistentFields: java.io.ObjectStreamField[];
        _serialVersionUID: long;
        new(type: string, source: any, sequenceNumber: long): Notification;
        new(type: string, source: any, sequenceNumber: long, a3: string): Notification;
        new(type: string, source: any, sequenceNumber: long, a3: long): Notification;
        new(type: string, source: any, sequenceNumber: long, a3: long, timeStamp: string): Notification;
      }
      let Notification: _Notification$$static;
      interface _Notification {
        getMessage(): string;
        getSequenceNumber(): long;
        getTimeStamp(): long;
        getType(): string;
        getUserData(): any;
        _readObject(_in: java.io.ObjectInputStream): void;
        setSequenceNumber(sequenceNumber: long): void;
        setSource(source: any): void;
        setTimeStamp(timeStamp: long): void;
        setUserData(userData: any): void;
        toString(): string;
        _writeObject(out: java.io.ObjectOutputStream): void;
        _message: string;
        _sequenceNumber: long;
        _source: any;
        _timeStamp: long;
        _type: string;
        _userData: any;
      }
      interface Notification extends CombineTypes<[_Notification, java.util.EventObject]> {}
      interface _NotificationBroadcaster$$static extends ClassLike {
      }
      let NotificationBroadcaster: _NotificationBroadcaster$$static;
      interface _NotificationBroadcaster {
        addNotificationListener(a0: NotificationListener, a1: NotificationFilter, a2: any): void;
        getNotificationInfo(): MBeanNotificationInfo[];
        removeNotificationListener(a0: NotificationListener): void;
      }
      interface NotificationBroadcaster extends CombineTypes<[_NotificationBroadcaster, java.lang.Object]> {}
      interface _NotificationBroadcasterSupport$$static extends ClassLike {
        _NO_NOTIFICATION_INFO: MBeanNotificationInfo[];
        _defaultExecutor: java.util.concurrent.Executor;
        _logger: com.sun.jmx.remote.util.ClassLogger;
        new(): NotificationBroadcasterSupport;
        new(executor: java.util.concurrent.Executor): NotificationBroadcasterSupport;
        new(info: MBeanNotificationInfo[]): NotificationBroadcasterSupport;
        new(...info: MBeanNotificationInfo[]): NotificationBroadcasterSupport;
        new(executor: java.util.concurrent.Executor, info: MBeanNotificationInfo[]): NotificationBroadcasterSupport;
        new(executor: java.util.concurrent.Executor, ...info: MBeanNotificationInfo[]): NotificationBroadcasterSupport;
      }
      let NotificationBroadcasterSupport: _NotificationBroadcasterSupport$$static;
      interface _NotificationBroadcasterSupport {
        addNotificationListener(listener: NotificationListener, filter: NotificationFilter, handback: any): void;
        getNotificationInfo(): MBeanNotificationInfo[];
        _handleNotification(listener: NotificationListener, notif: Notification, handback: any): void;
        removeNotificationListener(listener: NotificationListener): void;
        removeNotificationListener(listener: NotificationListener, filter: NotificationFilter, handback: any): void;
        sendNotification(notification: Notification): void;
        _executor: java.util.concurrent.Executor;
        _listenerList: java.util.List<NotificationBroadcasterSupport$ListenerInfo>;
        _notifInfo: MBeanNotificationInfo[];
      }
      interface NotificationBroadcasterSupport extends CombineTypes<[_NotificationBroadcasterSupport, java.lang.Object, javax.management.NotificationEmitter]> {}
      interface _NotificationBroadcasterSupport$ListenerInfo$$static extends ClassLike {
        _new(listener: NotificationListener, filter: NotificationFilter, handback: any): NotificationBroadcasterSupport$ListenerInfo;
      }
      let NotificationBroadcasterSupport$ListenerInfo: _NotificationBroadcasterSupport$ListenerInfo$$static;
      interface _NotificationBroadcasterSupport$ListenerInfo {
        equals(o: any): boolean;
        hashCode(): int;
        _filter: NotificationFilter;
        _handback: any;
        _listener: NotificationListener;
      }
      interface NotificationBroadcasterSupport$ListenerInfo extends CombineTypes<[_NotificationBroadcasterSupport$ListenerInfo, java.lang.Object]> {}
      interface _NotificationBroadcasterSupport$SendNotifJob$$static extends ClassLike {
        new(a0: NotificationBroadcasterSupport, notif: Notification, listenerInfo: NotificationBroadcasterSupport$ListenerInfo): NotificationBroadcasterSupport$SendNotifJob;
      }
      let NotificationBroadcasterSupport$SendNotifJob: _NotificationBroadcasterSupport$SendNotifJob$$static;
      interface _NotificationBroadcasterSupport$SendNotifJob {
        run(): void;
        _listenerInfo: NotificationBroadcasterSupport$ListenerInfo;
        _notif: Notification;
        _this$0: NotificationBroadcasterSupport;
      }
      interface NotificationBroadcasterSupport$SendNotifJob extends CombineTypes<[_NotificationBroadcasterSupport$SendNotifJob, java.lang.Object, java.lang.Runnable]> {}
      interface _NotificationBroadcasterSupport$WildcardListenerInfo$$static extends ClassLike {
        _new(listener: NotificationListener): NotificationBroadcasterSupport$WildcardListenerInfo;
      }
      let NotificationBroadcasterSupport$WildcardListenerInfo: _NotificationBroadcasterSupport$WildcardListenerInfo$$static;
      interface _NotificationBroadcasterSupport$WildcardListenerInfo {
        equals(o: any): boolean;
        hashCode(): int;
      }
      interface NotificationBroadcasterSupport$WildcardListenerInfo extends CombineTypes<[_NotificationBroadcasterSupport$WildcardListenerInfo, javax.management.NotificationBroadcasterSupport$ListenerInfo]> {}
      interface _NotificationEmitter$$static extends ClassLike {
      }
      let NotificationEmitter: _NotificationEmitter$$static;
      interface _NotificationEmitter {
        removeNotificationListener(a0: NotificationListener, a1: NotificationFilter, a2: any): void;
(a0: NotificationListener, a1: NotificationFilter, a2: any): void;
      }
      interface NotificationEmitter extends CombineTypes<[_NotificationEmitter, javax.management.NotificationBroadcaster, java.lang.Object]> {}
      interface _NotificationFilter$$static extends ClassLike {
      }
      let NotificationFilter: _NotificationFilter$$static;
      interface _NotificationFilter {
        isNotificationEnabled(a0: Notification): boolean;
(a0: Notification): boolean;
      }
      interface NotificationFilter extends CombineTypes<[_NotificationFilter, java.lang.Object, java.io.Serializable]> {}
      interface _NotificationFilterSupport$$static extends ClassLike {
        _serialVersionUID: long;
        new(): NotificationFilterSupport;
      }
      let NotificationFilterSupport: _NotificationFilterSupport$$static;
      interface _NotificationFilterSupport {
        disableAllTypes(): void;
        disableType(prefix: string): void;
        enableType(prefix: string): void;
        getEnabledTypes(): java.util.Vector<string>;
        isNotificationEnabled(notification: Notification): boolean;
        _enabledTypes: java.util.List<string>;
      }
      interface NotificationFilterSupport extends CombineTypes<[_NotificationFilterSupport, javax.management.NotificationFilter, java.lang.Object]> {}
      interface _NotificationListener$$static extends ClassLike {
      }
      let NotificationListener: _NotificationListener$$static;
      interface _NotificationListener {
        handleNotification(a0: Notification, a1: any): void;
(a0: Notification, a1: any): void;
      }
      interface NotificationListener extends CombineTypes<[_NotificationListener, java.util.EventListener, java.lang.Object]> {}
      interface _NumericValueExp$$static extends ClassLike {
        _compat: boolean;
        _newSerialPersistentFields: java.io.ObjectStreamField[];
        _newSerialVersionUID: long;
        _oldSerialPersistentFields: java.io.ObjectStreamField[];
        _oldSerialVersionUID: long;
        _serialPersistentFields: java.io.ObjectStreamField[];
        _serialVersionUID: long;
        new(): NumericValueExp;
        _new(val: number): NumericValueExp;
      }
      let NumericValueExp: _NumericValueExp$$static;
      interface _NumericValueExp {
        apply(name: ObjectName): ValueExp;
        doubleValue(): double;
        isLong(): boolean;
        longValue(): long;
        _readObject(_in: java.io.ObjectInputStream): void;
        setMBeanServer(s: MBeanServer): void;
        toString(): string;
        _writeObject(out: java.io.ObjectOutputStream): void;
        _val: number;
      }
      interface NumericValueExp extends CombineTypes<[_NumericValueExp, javax.management.ValueExp, javax.management.QueryEval]> {}
      interface _ObjectInstance$$static extends ClassLike {
        _serialVersionUID: long;
        new(objectName: string, className: string): ObjectInstance;
        new(objectName: ObjectName, className: string): ObjectInstance;
      }
      let ObjectInstance: _ObjectInstance$$static;
      interface _ObjectInstance {
        equals(object: any): boolean;
        getClassName(): string;
        getObjectName(): ObjectName;
        hashCode(): int;
        toString(): string;
        _className: string;
        _name: ObjectName;
      }
      interface ObjectInstance extends CombineTypes<[_ObjectInstance, java.lang.Object, java.io.Serializable]> {}
      interface _ObjectName$$static extends ClassLike {
        _checkKey(key: string): void;
        _checkValue(val: string): boolean;
        getInstance(name: string): ObjectName;
        getInstance(domain: string, key: string, value: string): ObjectName;
        getInstance(domain: string, table: java.util.Hashtable<string,string>): ObjectName;
        getInstance(name: ObjectName): ObjectName;
        _parseKey(s: char[], startKey: int): int;
        _parseValue(s: char[], startValue: int): int[];
        quote(s: string): string;
        unquote(q: string): string;
        _DOMAIN_LENGTH_MASK: int;
        _DOMAIN_PATTERN: int;
        _FLAG_MASK: int;
        _PROPLIST_PATTERN: int;
        _PROPVAL_PATTERN: int;
        readonly WILDCARD: ObjectName;
        __Empty_property_array: ObjectName$Property[];
        _compat: boolean;
        _newSerialPersistentFields: java.io.ObjectStreamField[];
        _newSerialVersionUID: long;
        _oldSerialPersistentFields: java.io.ObjectStreamField[];
        _oldSerialVersionUID: long;
        _serialPersistentFields: java.io.ObjectStreamField[];
        _serialVersionUID: long;
        new(name: string): ObjectName;
        new(domain: string, key: string, value: string): ObjectName;
        new(domain: string, table: java.util.Hashtable<string,string>): ObjectName;
      }
      let ObjectName: _ObjectName$$static;
      interface _ObjectName {
        __getKeyPropertyList(): java.util.Map<string,string>;
        _addProperty(prop: ObjectName$Property, index: int, keys_map: java.util.Map<string,ObjectName$Property>, key_name: string): void;
        apply(name: ObjectName): boolean;
        compareTo(name: ObjectName): int;
        compareTo(a0: any): int;
        _construct(name: string): void;
        _construct(domain: string, props: java.util.Map<string,string>): void;
        equals(object: any): boolean;
        getCanonicalKeyPropertyListString(): string;
        getCanonicalName(): string;
        getDomain(): string;
        _getDomainLength(): int;
        getKeyProperty(property: string): string;
        getKeyPropertyList(): java.util.Hashtable<string,string>;
        getKeyPropertyListString(): string;
        _getSerializedNameString(): string;
        hashCode(): int;
        _isDomain(domain: string): boolean;
        isDomainPattern(): boolean;
        isPattern(): boolean;
        isPropertyListPattern(): boolean;
        isPropertyPattern(): boolean;
        isPropertyValuePattern(): boolean;
        isPropertyValuePattern(property: string): boolean;
        _matchDomains(name: ObjectName): boolean;
        _matchKeys(name: ObjectName): boolean;
        _readObject(_in: java.io.ObjectInputStream): void;
        _setCanonicalName(specified_chars: char[], canonical_chars: char[], keys: string[], keys_map: java.util.Map<string,ObjectName$Property>, prop_index: int, nb_props: int): void;
        _setDomainLength(length: int): void;
        _setDomainPattern(value: boolean): void;
        setMBeanServer(mbs: MBeanServer): void;
        _setPropertyListPattern(value: boolean): void;
        _setPropertyValuePattern(value: boolean): void;
        toString(): string;
        _writeKeyPropertyListString(canonicalChars: char[], data: char[], offset: int): int;
        _writeObject(out: java.io.ObjectOutputStream): void;
        __ca_array: ObjectName$Property[];
        __canonicalName: string;
        __compressed_storage: int;
        __kp_array: ObjectName$Property[];
        __propertyList: java.util.Map<string,string>;
      }
      interface ObjectName extends CombineTypes<[_ObjectName, QueryExp, java.lang.Object, java.lang.Comparable<ObjectName>]> {}
      interface _ObjectName$PatternProperty$$static extends ClassLike {
        _new(key_index: int, key_length: int, value_length: int): ObjectName$PatternProperty;
      }
      let ObjectName$PatternProperty: _ObjectName$PatternProperty$$static;
      interface _ObjectName$PatternProperty {
      }
      interface ObjectName$PatternProperty extends CombineTypes<[_ObjectName$PatternProperty, javax.management.ObjectName$Property]> {}
      interface _ObjectName$Property$$static extends ClassLike {
        _new(key_index: int, key_length: int, value_length: int): ObjectName$Property;
      }
      let ObjectName$Property: _ObjectName$Property$$static;
      interface _ObjectName$Property {
        _getKeyString(name: string): string;
        _getValueString(name: string): string;
        _setKeyIndex(key_index: int): void;
        __key_index: int;
        __key_length: int;
        __value_length: int;
      }
      interface ObjectName$Property extends CombineTypes<[_ObjectName$Property, java.lang.Object]> {}
      interface _OperationsException$$static extends ClassLike {
        _serialVersionUID: long;
        new(): OperationsException;
        new(message: string): OperationsException;
      }
      let OperationsException: _OperationsException$$static;
      interface _OperationsException {
      }
      interface OperationsException extends CombineTypes<[_OperationsException, javax.management.JMException]> {}
      interface _OrQueryExp$$static extends ClassLike {
        _serialVersionUID: long;
        new(): OrQueryExp;
        new(q1: QueryExp, q2: QueryExp): OrQueryExp;
      }
      let OrQueryExp: _OrQueryExp$$static;
      interface _OrQueryExp {
        apply(name: ObjectName): boolean;
        getLeftExp(): QueryExp;
        getRightExp(): QueryExp;
        toString(): string;
        _exp1: QueryExp;
        _exp2: QueryExp;
      }
      interface OrQueryExp extends CombineTypes<[_OrQueryExp, javax.management.QueryExp, javax.management.QueryEval]> {}
      interface _PersistentMBean$$static extends ClassLike {
      }
      let PersistentMBean: _PersistentMBean$$static;
      interface _PersistentMBean {
        load(): void;
        store(): void;
      }
      interface PersistentMBean extends CombineTypes<[_PersistentMBean, java.lang.Object]> {}
      interface _QualifiedAttributeValueExp$$static extends ClassLike {
        _serialVersionUID: long;
        new(): QualifiedAttributeValueExp;
        new(className: string, attr: string): QualifiedAttributeValueExp;
      }
      let QualifiedAttributeValueExp: _QualifiedAttributeValueExp$$static;
      interface _QualifiedAttributeValueExp {
        apply(name: ObjectName): ValueExp;
        getAttrClassName(): string;
        toString(): string;
        _className: string;
      }
      interface QualifiedAttributeValueExp extends CombineTypes<[_QualifiedAttributeValueExp, javax.management.AttributeValueExp]> {}
      interface _Query$$static extends ClassLike {
        and(q1: QueryExp, q2: QueryExp): QueryExp;
        anySubString(a: AttributeValueExp, s: StringValueExp): QueryExp;
        attr(name: string): AttributeValueExp;
        attr(className: string, name: string): AttributeValueExp;
        between(v1: ValueExp, v2: ValueExp, v3: ValueExp): QueryExp;
        classattr(): AttributeValueExp;
        div(value1: ValueExp, value2: ValueExp): ValueExp;
        eq(v1: ValueExp, v2: ValueExp): QueryExp;
        _escapeString(s: string): string;
        finalSubString(a: AttributeValueExp, s: StringValueExp): QueryExp;
        geq(v1: ValueExp, v2: ValueExp): QueryExp;
        gt(v1: ValueExp, v2: ValueExp): QueryExp;
        in(val: ValueExp, valueList: ValueExp[]): QueryExp;
        initialSubString(a: AttributeValueExp, s: StringValueExp): QueryExp;
        isInstanceOf(classNameValue: StringValueExp): QueryExp;
        leq(v1: ValueExp, v2: ValueExp): QueryExp;
        lt(v1: ValueExp, v2: ValueExp): QueryExp;
        match(a: AttributeValueExp, s: StringValueExp): QueryExp;
        minus(value1: ValueExp, value2: ValueExp): ValueExp;
        not(queryExp: QueryExp): QueryExp;
        or(q1: QueryExp, q2: QueryExp): QueryExp;
        plus(value1: ValueExp, value2: ValueExp): ValueExp;
        times(value1: ValueExp, value2: ValueExp): ValueExp;
        value(val: string): StringValueExp;
        value(val: number): ValueExp;
        value(val: int): ValueExp;
        value(val: long): ValueExp;
        value(val: float): ValueExp;
        value(val: double): ValueExp;
        value(val: boolean): ValueExp;
        readonly DIV: int;
        readonly EQ: int;
        readonly GE: int;
        readonly GT: int;
        readonly LE: int;
        readonly LT: int;
        readonly MINUS: int;
        readonly PLUS: int;
        readonly TIMES: int;
        new(): Query;
      }
      let Query: _Query$$static;
      interface _Query {
      }
      interface Query extends CombineTypes<[_Query, java.lang.Object]> {}
      interface _QueryEval$$static extends ClassLike {
        getMBeanServer(): MBeanServer;
        _serialVersionUID: long;
        _server: java.lang.ThreadLocal<MBeanServer>;
        new(): QueryEval;
      }
      let QueryEval: _QueryEval$$static;
      interface _QueryEval {
        setMBeanServer(s: MBeanServer): void;
      }
      interface QueryEval extends CombineTypes<[_QueryEval, java.lang.Object, java.io.Serializable]> {}
      interface _QueryExp$$static extends ClassLike {
      }
      let QueryExp: _QueryExp$$static;
      interface _QueryExp {
        apply(a0: ObjectName): boolean;
        setMBeanServer(a0: MBeanServer): void;
      }
      interface QueryExp extends CombineTypes<[_QueryExp, java.lang.Object, java.io.Serializable]> {}
      interface _ReflectionException$$static extends ClassLike {
        _serialVersionUID: long;
        new(e: java.lang.Exception): ReflectionException;
        new(e: java.lang.Exception, message: string): ReflectionException;
      }
      let ReflectionException: _ReflectionException$$static;
      interface _ReflectionException {
        getCause(): java.lang.Throwable;
        getTargetException(): java.lang.Exception;
        _exception: java.lang.Exception;
      }
      interface ReflectionException extends CombineTypes<[_ReflectionException, javax.management.JMException]> {}
      interface _RuntimeErrorException$$static extends ClassLike {
        _serialVersionUID: long;
        new(e: java.lang.Error): RuntimeErrorException;
        new(e: java.lang.Error, message: string): RuntimeErrorException;
      }
      let RuntimeErrorException: _RuntimeErrorException$$static;
      interface _RuntimeErrorException {
        getCause(): java.lang.Throwable;
        getTargetError(): java.lang.Error;
        _error: java.lang.Error;
      }
      interface RuntimeErrorException extends CombineTypes<[_RuntimeErrorException, javax.management.JMRuntimeException]> {}
      interface _RuntimeMBeanException$$static extends ClassLike {
        _serialVersionUID: long;
        new(e: java.lang.RuntimeException): RuntimeMBeanException;
        new(e: java.lang.RuntimeException, message: string): RuntimeMBeanException;
      }
      let RuntimeMBeanException: _RuntimeMBeanException$$static;
      interface _RuntimeMBeanException {
        getCause(): java.lang.Throwable;
        getTargetException(): java.lang.RuntimeException;
        _runtimeException: java.lang.RuntimeException;
      }
      interface RuntimeMBeanException extends CombineTypes<[_RuntimeMBeanException, javax.management.JMRuntimeException]> {}
      interface _RuntimeOperationsException$$static extends ClassLike {
        _serialVersionUID: long;
        new(e: java.lang.RuntimeException): RuntimeOperationsException;
        new(e: java.lang.RuntimeException, message: string): RuntimeOperationsException;
      }
      let RuntimeOperationsException: _RuntimeOperationsException$$static;
      interface _RuntimeOperationsException {
        getCause(): java.lang.Throwable;
        getTargetException(): java.lang.RuntimeException;
        _runtimeException: java.lang.RuntimeException;
      }
      interface RuntimeOperationsException extends CombineTypes<[_RuntimeOperationsException, javax.management.JMRuntimeException]> {}
      interface _ServiceNotFoundException$$static extends ClassLike {
        _serialVersionUID: long;
        new(): ServiceNotFoundException;
        new(message: string): ServiceNotFoundException;
      }
      let ServiceNotFoundException: _ServiceNotFoundException$$static;
      interface _ServiceNotFoundException {
      }
      interface ServiceNotFoundException extends CombineTypes<[_ServiceNotFoundException, javax.management.OperationsException]> {}
      interface _StandardEmitterMBean$$static extends ClassLike {
        _NO_NOTIFICATION_INFO: MBeanNotificationInfo[];
        new<T>(implementation: T, mbeanInterface: java.lang.Class<T>, emitter: NotificationEmitter): StandardEmitterMBean;
        new<T>(implementation: T, mbeanInterface: java.lang.Class<T>, isMXBean: boolean, emitter: NotificationEmitter): StandardEmitterMBean;
        _new(mbeanInterface: java.lang.Class<any>, emitter: NotificationEmitter): StandardEmitterMBean;
        _new(mbeanInterface: java.lang.Class<any>, isMXBean: boolean, emitter: NotificationEmitter): StandardEmitterMBean;
      }
      let StandardEmitterMBean: _StandardEmitterMBean$$static;
      interface _StandardEmitterMBean {
        addNotificationListener(listener: NotificationListener, filter: NotificationFilter, handback: any): void;
        getNotificationInfo(): MBeanNotificationInfo[];
        _getNotifications(info: MBeanInfo): MBeanNotificationInfo[];
        removeNotificationListener(listener: NotificationListener): void;
        removeNotificationListener(listener: NotificationListener, filter: NotificationFilter, handback: any): void;
        sendNotification(n: Notification): void;
        _emitter: NotificationEmitter;
        _notificationInfo: MBeanNotificationInfo[];
      }
      interface StandardEmitterMBean extends CombineTypes<[_StandardEmitterMBean, javax.management.NotificationEmitter, javax.management.StandardMBean]> {}
      interface _StandardMBean$$static extends ClassLike {
        _customize(pi: MBeanParameterInfo, name: string, description: string): MBeanParameterInfo;
        _customize(ci: MBeanConstructorInfo, description: string, signature: MBeanParameterInfo[]): MBeanConstructorInfo;
        _customize(oi: MBeanOperationInfo, description: string, signature: MBeanParameterInfo[], impact: int): MBeanOperationInfo;
        _customize(ai: MBeanAttributeInfo, description: string): MBeanAttributeInfo;
        _equal<T>(a: T, b: T): boolean;
        _identicalArrays<T>(a: T[], b: T[]): boolean;
        _immutableInfo(subclass: java.lang.Class<StandardMBean>): boolean;
        _overrides(subclass: java.lang.Class<any>, superclass: java.lang.Class<any>, name: string, params: java.lang.Class<any>[]): boolean;
        _overrides(subclass: java.lang.Class<any>, superclass: java.lang.Class<any>, name: string, ...params: java.lang.Class<any>[]): boolean;
        _paramsToOpenParams(params: MBeanParameterInfo[]): management.openmbean.OpenMBeanParameterInfo[];
        _descriptors: com.sun.jmx.mbeanserver.DescriptorCache;
        _mbeanInfoSafeMap: java.util.Map<java.lang.Class<any>,boolean>;
        new<T>(implementation: T, mbeanInterface: java.lang.Class<T>): StandardMBean;
        _new(mbeanInterface: java.lang.Class<any>): StandardMBean;
        new<T>(implementation: T, mbeanInterface: java.lang.Class<T>, isMXBean: boolean): StandardMBean;
        _new(mbeanInterface: java.lang.Class<any>, isMXBean: boolean): StandardMBean;
      }
      let StandardMBean: _StandardMBean$$static;
      interface _StandardMBean {
        _cacheMBeanInfo(info: MBeanInfo): void;
        _construct<T>(implementation: T, mbeanInterface: java.lang.Class<T>, nullImplementationAllowed: boolean, isMXBean: boolean): void;
        getAttribute(attribute: string): any;
        getAttributes(attributes: string[]): AttributeList;
        _getAttributes(info: MBeanInfo): MBeanAttributeInfo[];
        _getCachedMBeanInfo(): MBeanInfo;
        _getClassName(info: MBeanInfo): string;
        _getConstructors(ctors: MBeanConstructorInfo[], impl: any): MBeanConstructorInfo[];
        _getConstructors(info: MBeanInfo, impl: any): MBeanConstructorInfo[];
        _getDescription(info: MBeanInfo): string;
        _getDescription(info: MBeanFeatureInfo): string;
        _getDescription(info: MBeanAttributeInfo): string;
        _getDescription(info: MBeanConstructorInfo): string;
        _getDescription(ctor: MBeanConstructorInfo, param: MBeanParameterInfo, sequence: int): string;
        _getDescription(info: MBeanOperationInfo): string;
        _getDescription(op: MBeanOperationInfo, param: MBeanParameterInfo, sequence: int): string;
        _getDescriptor(info: MBeanInfo, immutableInfo: boolean): Descriptor;
        _getImpact(info: MBeanOperationInfo): int;
        getImplementation(): any;
        getImplementationClass(): java.lang.Class<any>;
        getMBeanInfo(): MBeanInfo;
        getMBeanInterface(): java.lang.Class<any>;
        _getNotifications(info: MBeanInfo): MBeanNotificationInfo[];
        _getOperations(info: MBeanInfo): MBeanOperationInfo[];
        _getParameterName(ctor: MBeanConstructorInfo, param: MBeanParameterInfo, sequence: int): string;
        _getParameterName(op: MBeanOperationInfo, param: MBeanParameterInfo, sequence: int): string;
        invoke(actionName: string, params: any[], signature: string[]): any;
        _isMXBean(): boolean;
        postDeregister(): void;
        postRegister(registrationDone: boolean): void;
        preDeregister(): void;
        preRegister(server: MBeanServer, name: ObjectName): ObjectName;
        setAttribute(attribute: Attribute): void;
        setAttributes(attributes: AttributeList): AttributeList;
        setImplementation(implementation: any): void;
        _cachedMBeanInfo: MBeanInfo;
        _mbean: com.sun.jmx.mbeanserver.MBeanSupport<any>;
      }
      interface StandardMBean extends CombineTypes<[_StandardMBean, javax.management.MBeanRegistration, java.lang.Object, javax.management.DynamicMBean]> {}
      interface _StandardMBean$MBeanInfoSafeAction$$static extends ClassLike {
        _new(subclass: java.lang.Class<any>): StandardMBean$MBeanInfoSafeAction;
      }
      let StandardMBean$MBeanInfoSafeAction: _StandardMBean$MBeanInfoSafeAction$$static;
      interface _StandardMBean$MBeanInfoSafeAction {
        run(): boolean;
        run(): any;
        _subclass: java.lang.Class<any>;
      }
      interface StandardMBean$MBeanInfoSafeAction extends CombineTypes<[_StandardMBean$MBeanInfoSafeAction, java.security.PrivilegedAction<boolean>, java.lang.Object]> {}
      interface _StringValueExp$$static extends ClassLike {
        _serialVersionUID: long;
        new(): StringValueExp;
        new(val: string): StringValueExp;
      }
      let StringValueExp: _StringValueExp$$static;
      interface _StringValueExp {
        apply(name: ObjectName): ValueExp;
        getValue(): string;
        setMBeanServer(s: MBeanServer): void;
        toString(): string;
        _val: string;
      }
      interface StringValueExp extends CombineTypes<[_StringValueExp, javax.management.ValueExp, java.lang.Object]> {}
      interface _ValueExp$$static extends ClassLike {
      }
      let ValueExp: _ValueExp$$static;
      interface _ValueExp {
        apply(a0: ObjectName): ValueExp;
        setMBeanServer(a0: MBeanServer): void;
      }
      interface ValueExp extends CombineTypes<[_ValueExp, java.lang.Object, java.io.Serializable]> {}
    }
  }
  module sun {
    module management {
      module counter {
        module perf {
          interface _ByteArrayCounterSnapshot$$static extends ClassLike {
            _serialVersionUID: long;
            _new(name: string, u: Units, v: Variability, flags: int, vectorLength: int, value: byte[]): ByteArrayCounterSnapshot;
          }
          let ByteArrayCounterSnapshot: _ByteArrayCounterSnapshot$$static;
          interface _ByteArrayCounterSnapshot {
            byteArrayValue(): byte[];
            byteAt(index: int): byte;
            getValue(): any;
            _value: byte[];
          }
          interface ByteArrayCounterSnapshot extends CombineTypes<[_ByteArrayCounterSnapshot, sun.management.counter.AbstractCounter, sun.management.counter.ByteArrayCounter]> {}
          interface _InstrumentationException$$static extends ClassLike {
            _serialVersionUID: long;
            new(): InstrumentationException;
            new(message: string): InstrumentationException;
          }
          let InstrumentationException: _InstrumentationException$$static;
          interface _InstrumentationException {
          }
          interface InstrumentationException extends CombineTypes<[_InstrumentationException, java.lang.RuntimeException]> {}
          interface _LongArrayCounterSnapshot$$static extends ClassLike {
            _serialVersionUID: long;
            _new(name: string, u: Units, v: Variability, flags: int, vectorLength: int, value: long[]): LongArrayCounterSnapshot;
          }
          let LongArrayCounterSnapshot: _LongArrayCounterSnapshot$$static;
          interface _LongArrayCounterSnapshot {
            getValue(): any;
            longArrayValue(): long[];
            longAt(index: int): long;
            _value: long[];
          }
          interface LongArrayCounterSnapshot extends CombineTypes<[_LongArrayCounterSnapshot, sun.management.counter.LongArrayCounter, sun.management.counter.AbstractCounter]> {}
          interface _LongCounterSnapshot$$static extends ClassLike {
            _serialVersionUID: long;
            _new(name: string, u: Units, v: Variability, flags: int, value: long): LongCounterSnapshot;
          }
          let LongCounterSnapshot: _LongCounterSnapshot$$static;
          interface _LongCounterSnapshot {
            getValue(): any;
            longValue(): long;
            _value: long;
          }
          interface LongCounterSnapshot extends CombineTypes<[_LongCounterSnapshot, sun.management.counter.AbstractCounter, sun.management.counter.LongCounter]> {}
          interface _PerfByteArrayCounter$$static extends ClassLike {
            _serialVersionUID: long;
            _new(name: string, u: Units, v: Variability, flags: int, vectorLength: int, bb: java.nio.ByteBuffer): PerfByteArrayCounter;
          }
          let PerfByteArrayCounter: _PerfByteArrayCounter$$static;
          interface _PerfByteArrayCounter {
            byteArrayValue(): byte[];
            byteAt(index: int): byte;
            getValue(): any;
            toString(): string;
            _writeReplace(): any;
            _bb: java.nio.ByteBuffer;
          }
          interface PerfByteArrayCounter extends CombineTypes<[_PerfByteArrayCounter, sun.management.counter.AbstractCounter, sun.management.counter.ByteArrayCounter]> {}
          interface _PerfDataEntry$$static extends ClassLike {
            _new(b: java.nio.ByteBuffer): PerfDataEntry;
          }
          let PerfDataEntry: _PerfDataEntry$$static;
          interface _PerfDataEntry {
            byteData(): java.nio.ByteBuffer;
            flags(): int;
            longData(): java.nio.LongBuffer;
            name(): string;
            size(): int;
            type(): PerfDataType;
            units(): Units;
            variability(): Variability;
            vectorLength(): int;
            _data: java.nio.ByteBuffer;
            _dataOffset: int;
            _dataSize: int;
            _dataType: PerfDataType;
            _entryLength: int;
            _entryStart: int;
            _flags: int;
            _name: string;
            _unit: Units;
            _variability: Variability;
            _vectorLength: int;
          }
          interface PerfDataEntry extends CombineTypes<[_PerfDataEntry, java.lang.Object]> {}
          interface _PerfDataEntry$EntryFieldOffset$$static extends ClassLike {
            _DATA_OFFSET: int;
            _DATA_OFFSET_SIZE: int;
            _DATA_TYPE: int;
            _DATA_TYPE_SIZE: int;
            _DATA_UNIT: int;
            _DATA_UNIT_SIZE: int;
            _DATA_VAR: int;
            _DATA_VAR_SIZE: int;
            _ENTRY_LENGTH: int;
            _ENTRY_LENGTH_SIZE: int;
            _FLAGS: int;
            _FLAGS_SIZE: int;
            _NAME_OFFSET: int;
            _NAME_OFFSET_SIZE: int;
            _SIZEOF_BYTE: int;
            _SIZEOF_INT: int;
            _SIZEOF_LONG: int;
            _VECTOR_LENGTH: int;
            _VECTOR_LENGTH_SIZE: int;
          }
          let PerfDataEntry$EntryFieldOffset: _PerfDataEntry$EntryFieldOffset$$static;
          interface _PerfDataEntry$EntryFieldOffset {
          }
          interface PerfDataEntry$EntryFieldOffset extends CombineTypes<[_PerfDataEntry$EntryFieldOffset, java.lang.Object]> {}
          interface _PerfDataType$$static extends ClassLike {
            toPerfDataType(type: byte): PerfDataType;
            readonly BOOLEAN: PerfDataType;
            readonly BYTE: PerfDataType;
            readonly CHAR: PerfDataType;
            readonly DOUBLE: PerfDataType;
            readonly FLOAT: PerfDataType;
            readonly ILLEGAL: PerfDataType;
            readonly INT: PerfDataType;
            readonly LONG: PerfDataType;
            readonly SHORT: PerfDataType;
            _basicTypes: PerfDataType[];
          }
          let PerfDataType: _PerfDataType$$static;
          interface _PerfDataType {
            byteValue(): byte;
            size(): int;
            toString(): string;
            _name: string;
            _size: int;
            _value: byte;
          }
          interface PerfDataType extends CombineTypes<[_PerfDataType, java.lang.Object]> {}
          interface _PerfInstrumentation$$static extends ClassLike {
            new(b: java.nio.ByteBuffer): PerfInstrumentation;
          }
          let PerfInstrumentation: _PerfInstrumentation$$static;
          interface _PerfInstrumentation {
            findByPattern(patternString: string): java.util.List<Counter>;
            getAllCounters(): java.util.List<Counter>;
            getMajorVersion(): int;
            getMinorVersion(): int;
            getModificationTimeStamp(): long;
            _getNextCounter(): Counter;
            _hasNext(): boolean;
            _rewind(): void;
            _buffer: java.nio.ByteBuffer;
            _lastModificationTime: long;
            _lastUsed: long;
            _map: java.util.SortedMap<string,Counter>;
            _nextEntry: int;
            _prologue: Prologue;
          }
          interface PerfInstrumentation extends CombineTypes<[_PerfInstrumentation, java.lang.Object]> {}
          interface _PerfLongArrayCounter$$static extends ClassLike {
            _serialVersionUID: long;
            _new(name: string, u: Units, v: Variability, flags: int, vectorLength: int, lb: java.nio.LongBuffer): PerfLongArrayCounter;
          }
          let PerfLongArrayCounter: _PerfLongArrayCounter$$static;
          interface _PerfLongArrayCounter {
            getValue(): any;
            longArrayValue(): long[];
            longAt(index: int): long;
            _writeReplace(): any;
            _lb: java.nio.LongBuffer;
          }
          interface PerfLongArrayCounter extends CombineTypes<[_PerfLongArrayCounter, sun.management.counter.LongArrayCounter, sun.management.counter.AbstractCounter]> {}
          interface _PerfLongCounter$$static extends ClassLike {
            _serialVersionUID: long;
            _new(name: string, u: Units, v: Variability, flags: int, lb: java.nio.LongBuffer): PerfLongCounter;
          }
          let PerfLongCounter: _PerfLongCounter$$static;
          interface _PerfLongCounter {
            getValue(): any;
            longValue(): long;
            _writeReplace(): any;
            _lb: java.nio.LongBuffer;
          }
          interface PerfLongCounter extends CombineTypes<[_PerfLongCounter, sun.management.counter.AbstractCounter, sun.management.counter.LongCounter]> {}
          interface _PerfStringCounter$$static extends ClassLike {
            _defaultCharset: java.nio.charset.Charset;
            _serialVersionUID: long;
            _new(name: string, v: Variability, flags: int, bb: java.nio.ByteBuffer): PerfStringCounter;
            _new(name: string, v: Variability, flags: int, maxLength: int, bb: java.nio.ByteBuffer): PerfStringCounter;
          }
          let PerfStringCounter: _PerfStringCounter$$static;
          interface _PerfStringCounter {
            getValue(): any;
            getVectorLength(): int;
            isVector(): boolean;
            stringValue(): string;
            _writeReplace(): any;
          }
          interface PerfStringCounter extends CombineTypes<[_PerfStringCounter, sun.management.counter.StringCounter, sun.management.counter.perf.PerfByteArrayCounter]> {}
          interface _Prologue$$static extends ClassLike {
            _PERFDATA_BIG_ENDIAN: byte;
            _PERFDATA_LITTLE_ENDIAN: byte;
            _PERFDATA_MAGIC: int;
            _new(b: java.nio.ByteBuffer): Prologue;
          }
          let Prologue: _Prologue$$static;
          interface _Prologue {
            getByteOrder(): java.nio.ByteOrder;
            getEntryOffset(): int;
            getMagic(): int;
            getMajorVersion(): int;
            getMinorVersion(): int;
            getModificationTimeStamp(): long;
            getNumEntries(): int;
            getOverflow(): int;
            getUsed(): int;
            isAccessible(): boolean;
            _header: java.nio.ByteBuffer;
            _magic: int;
          }
          interface Prologue extends CombineTypes<[_Prologue, java.lang.Object]> {}
          interface _Prologue$PrologueFieldOffset$$static extends ClassLike {
            _ACCESSIBLE: int;
            _ACCESSIBLE_SIZE: int;
            _BYTE_ORDER: int;
            _BYTE_ORDER_SIZE: int;
            _ENTRY_OFFSET: int;
            _ENTRY_OFFSET_SIZE: int;
            _MAGIC: int;
            _MAGIC_SIZE: int;
            _MAJOR_SIZE: int;
            _MAJOR_VERSION: int;
            _MINOR_SIZE: int;
            _MINOR_VERSION: int;
            _MOD_TIMESTAMP: int;
            _MOD_TIMESTAMP_SIZE: int;
            _NUM_ENTRIES: int;
            _NUM_ENTRIES_SIZE: int;
            _OVERFLOW: int;
            _OVERFLOW_SIZE: int;
            _PROLOGUE_2_0_SIZE: int;
            _SIZEOF_BYTE: int;
            _SIZEOF_INT: int;
            _SIZEOF_LONG: int;
            _USED: int;
            _USED_SIZE: int;
          }
          let Prologue$PrologueFieldOffset: _Prologue$PrologueFieldOffset$$static;
          interface _Prologue$PrologueFieldOffset {
          }
          interface Prologue$PrologueFieldOffset extends CombineTypes<[_Prologue$PrologueFieldOffset, java.lang.Object]> {}
          interface _StringCounterSnapshot$$static extends ClassLike {
            _serialVersionUID: long;
            _new(name: string, u: Units, v: Variability, flags: int, value: string): StringCounterSnapshot;
          }
          let StringCounterSnapshot: _StringCounterSnapshot$$static;
          interface _StringCounterSnapshot {
            getValue(): any;
            stringValue(): string;
            _value: string;
          }
          interface StringCounterSnapshot extends CombineTypes<[_StringCounterSnapshot, sun.management.counter.StringCounter, sun.management.counter.AbstractCounter]> {}
        }
        interface _AbstractCounter$$static extends ClassLike {
          _serialVersionUID: long;
          _new(name: string, units: Units, variability: Variability, flags: int, vectorLength: int): AbstractCounter;
          _new(name: string, units: Units, variability: Variability, flags: int): AbstractCounter;
        }
        let AbstractCounter: _AbstractCounter$$static;
        interface _AbstractCounter {
          getFlags(): int;
          getName(): string;
          getUnits(): Units;
          getValue(): any;
(): any;
          getVariability(): Variability;
          getVectorLength(): int;
          isInternal(): boolean;
          isVector(): boolean;
          toString(): string;
          _flags: int;
          _name: string;
          _units: Units;
          _variability: Variability;
          _vectorLength: int;
        }
        interface AbstractCounter extends CombineTypes<[_AbstractCounter, java.lang.Object, sun.management.counter.Counter]> {}
        interface _AbstractCounter$Flags$$static extends ClassLike {
          _SUPPORTED: int;
          _new(this$0: AbstractCounter): AbstractCounter$Flags;
        }
        let AbstractCounter$Flags: _AbstractCounter$Flags$$static;
        interface _AbstractCounter$Flags {
        }
        interface AbstractCounter$Flags extends CombineTypes<[_AbstractCounter$Flags, java.lang.Object]> {}
        interface _ByteArrayCounter$$static extends ClassLike {
        }
        let ByteArrayCounter: _ByteArrayCounter$$static;
        interface _ByteArrayCounter {
          byteArrayValue(): byte[];
          byteAt(a0: int): byte;
        }
        interface ByteArrayCounter extends CombineTypes<[_ByteArrayCounter, java.lang.Object, sun.management.counter.Counter]> {}
        interface _Counter$$static extends ClassLike {
        }
        let Counter: _Counter$$static;
        interface _Counter {
          getFlags(): int;
          getName(): string;
          getUnits(): Units;
          getValue(): any;
          getVariability(): Variability;
          getVectorLength(): int;
          isInternal(): boolean;
          isVector(): boolean;
        }
        interface Counter extends CombineTypes<[_Counter, java.lang.Object, java.io.Serializable]> {}
        interface _LongArrayCounter$$static extends ClassLike {
        }
        let LongArrayCounter: _LongArrayCounter$$static;
        interface _LongArrayCounter {
          longArrayValue(): long[];
          longAt(a0: int): long;
        }
        interface LongArrayCounter extends CombineTypes<[_LongArrayCounter, java.lang.Object, sun.management.counter.Counter]> {}
        interface _LongCounter$$static extends ClassLike {
        }
        let LongCounter: _LongCounter$$static;
        interface _LongCounter {
          longValue(): long;
(): long;
        }
        interface LongCounter extends CombineTypes<[_LongCounter, java.lang.Object, sun.management.counter.Counter]> {}
        interface _StringCounter$$static extends ClassLike {
        }
        let StringCounter: _StringCounter$$static;
        interface _StringCounter {
          stringValue(): string;
(): string;
        }
        interface StringCounter extends CombineTypes<[_StringCounter, java.lang.Object, sun.management.counter.Counter]> {}
        interface _Units$$static extends ClassLike {
          toUnits(value: int): Units;
          readonly BYTES: Units;
          readonly EVENTS: Units;
          readonly HERTZ: Units;
          readonly INVALID: Units;
          readonly NONE: Units;
          _NUNITS: int;
          readonly STRING: Units;
          readonly TICKS: Units;
          _map: Units[];
          _serialVersionUID: long;
        }
        let Units: _Units$$static;
        interface _Units {
          intValue(): int;
          toString(): string;
          _name: string;
          _value: int;
        }
        interface Units extends CombineTypes<[_Units, java.lang.Object, java.io.Serializable]> {}
        interface _Variability$$static extends ClassLike {
          toVariability(value: int): Variability;
          readonly CONSTANT: Variability;
          readonly INVALID: Variability;
          readonly MONOTONIC: Variability;
          _NATTRIBUTES: int;
          readonly VARIABLE: Variability;
          _map: Variability[];
          _serialVersionUID: long;
        }
        let Variability: _Variability$$static;
        interface _Variability {
          intValue(): int;
          toString(): string;
          _name: string;
          _value: int;
        }
        interface Variability extends CombineTypes<[_Variability, java.lang.Object, java.io.Serializable]> {}
      }
      module spi {
        interface _PlatformMBeanProvider$$static extends ClassLike {
          _new(): PlatformMBeanProvider;
        }
        let PlatformMBeanProvider: _PlatformMBeanProvider$$static;
        interface _PlatformMBeanProvider {
          getPlatformComponentList(): java.util.List<PlatformMBeanProvider$PlatformComponent<any>>;
(): java.util.List<PlatformMBeanProvider$PlatformComponent<any>>;
        }
        interface PlatformMBeanProvider extends CombineTypes<[_PlatformMBeanProvider, java.lang.Object]> {}
        interface _PlatformMBeanProvider$PlatformComponent$$static<T> extends ClassLike {
        }
        let PlatformMBeanProvider$PlatformComponent: _PlatformMBeanProvider$PlatformComponent$$static<T>;
        interface _PlatformMBeanProvider$PlatformComponent<T> {
          getMBeans<I>(mbeanIntf: java.lang.Class<I>): java.util.List<I>;
          getObjectNamePattern(): string;
          isSingleton(): boolean;
          mbeanInterfaceNames(): java.util.Set<string>;
          mbeanInterfaces(): java.util.Set<java.lang.Class<T>>;
          nameToMBeanMap(): java.util.Map<string,T>;
          shouldRegister(): boolean;
        }
        interface PlatformMBeanProvider$PlatformComponent<T> extends CombineTypes<[_PlatformMBeanProvider$PlatformComponent<T>, java.lang.Object]> {}
      }
      interface _BaseOperatingSystemImpl$$static extends ClassLike {
        _unsafe: jdk.internal.misc.Unsafe;
        _new(vm: VMManagement): BaseOperatingSystemImpl;
      }
      let BaseOperatingSystemImpl: _BaseOperatingSystemImpl$$static;
      interface _BaseOperatingSystemImpl {
        getArch(): string;
        getAvailableProcessors(): int;
        getName(): string;
        getObjectName(): javax.management.ObjectName;
        getSystemLoadAverage(): double;
        getVersion(): string;
        _jvm: VMManagement;
        _loadavg: double[];
      }
      interface BaseOperatingSystemImpl extends CombineTypes<[_BaseOperatingSystemImpl, java.lang.Object, java.lang.management.OperatingSystemMXBean]> {}
      interface _ClassLoadingImpl$$static extends ClassLike {
        _setVerboseClass(a0: boolean): void;
        _new(vm: VMManagement): ClassLoadingImpl;
      }
      let ClassLoadingImpl: _ClassLoadingImpl$$static;
      interface _ClassLoadingImpl {
        getLoadedClassCount(): int;
        getObjectName(): javax.management.ObjectName;
        getTotalLoadedClassCount(): long;
        getUnloadedClassCount(): long;
        isVerbose(): boolean;
        setVerbose(value: boolean): void;
        _jvm: VMManagement;
      }
      interface ClassLoadingImpl extends CombineTypes<[_ClassLoadingImpl, java.lang.Object, java.lang.management.ClassLoadingMXBean]> {}
      interface _CompilationImpl$$static extends ClassLike {
        _new(vm: VMManagement): CompilationImpl;
      }
      let CompilationImpl: _CompilationImpl$$static;
      interface _CompilationImpl {
        getName(): string;
        getObjectName(): javax.management.ObjectName;
        getTotalCompilationTime(): long;
        isCompilationTimeMonitoringSupported(): boolean;
        _jvm: VMManagement;
        _name: string;
      }
      interface CompilationImpl extends CombineTypes<[_CompilationImpl, java.lang.management.CompilationMXBean, java.lang.Object]> {}
      interface _CompilerThreadStat$$static extends ClassLike {
        _serialVersionUID: long;
        _new(name: string, taskCount: long, a2: long, time: MethodInfo): CompilerThreadStat;
      }
      let CompilerThreadStat: _CompilerThreadStat$$static;
      interface _CompilerThreadStat {
        getCompileTaskCount(): long;
        getCompileTime(): long;
        getLastCompiledMethodInfo(): MethodInfo;
        getName(): string;
        toString(): string;
        _compileTime: long;
        _lastMethod: MethodInfo;
        _name: string;
        _taskCount: long;
      }
      interface CompilerThreadStat extends CombineTypes<[_CompilerThreadStat, java.lang.Object, java.io.Serializable]> {}
      interface _GarbageCollectorImpl$$static extends ClassLike {
        _new(name: string): GarbageCollectorImpl;
      }
      let GarbageCollectorImpl: _GarbageCollectorImpl$$static;
      interface _GarbageCollectorImpl {
        getCollectionCount(): long;
        getCollectionTime(): long;
        getMemoryPoolNames(): string[];
        getName(): string;
        getNotificationInfo(): javax.management.MBeanNotificationInfo[];
        getObjectName(): javax.management.ObjectName;
        isValid(): boolean;
      }
      interface GarbageCollectorImpl extends CombineTypes<[_GarbageCollectorImpl, java.lang.management.GarbageCollectorMXBean, sun.management.MemoryManagerImpl]> {}
      interface _HotspotClassLoading$$static extends ClassLike {
        _CLS_COUNTER_NAME_PATTERN: string;
        _COM_SUN_CLS: string;
        _JAVA_CLS: string;
        _SUN_CLS: string;
        _new(vm: VMManagement): HotspotClassLoading;
      }
      let HotspotClassLoading: _HotspotClassLoading$$static;
      interface _HotspotClassLoading {
        getClassInitializationTime(): long;
        getClassLoadingTime(): long;
        getClassVerificationTime(): long;
        getInitializedClassCount(): long;
        getInternalClassLoadingCounters(): java.util.List<management.counter.Counter>;
        getLoadedClassSize(): long;
        getMethodDataSize(): long;
        getUnloadedClassSize(): long;
        _jvm: VMManagement;
      }
      interface HotspotClassLoading extends CombineTypes<[_HotspotClassLoading, java.lang.Object, sun.management.HotspotClassLoadingMBean]> {}
      interface _HotspotClassLoadingMBean$$static extends ClassLike {
      }
      let HotspotClassLoadingMBean: _HotspotClassLoadingMBean$$static;
      interface _HotspotClassLoadingMBean {
        getClassInitializationTime(): long;
        getClassLoadingTime(): long;
        getClassVerificationTime(): long;
        getInitializedClassCount(): long;
        getInternalClassLoadingCounters(): java.util.List<management.counter.Counter>;
        getLoadedClassSize(): long;
        getMethodDataSize(): long;
        getUnloadedClassSize(): long;
      }
      interface HotspotClassLoadingMBean extends CombineTypes<[_HotspotClassLoadingMBean, java.lang.Object]> {}
      interface _HotspotCompilation$$static extends ClassLike {
        _CI_COUNTER_NAME_PATTERN: string;
        _COM_SUN_CI: string;
        _JAVA_CI: string;
        _SUN_CI: string;
        _new(vm: VMManagement): HotspotCompilation;
      }
      let HotspotCompilation: _HotspotCompilation$$static;
      interface _HotspotCompilation {
        getBailoutCompileCount(): long;
        getCompiledMethodCodeSize(): long;
        getCompiledMethodSize(): long;
        getCompilerThreadCount(): int;
        getCompilerThreadStats(): java.util.List<CompilerThreadStat>;
        getFailedCompile(): MethodInfo;
        getInternalCompilerCounters(): java.util.List<management.counter.Counter>;
        getInvalidatedCompile(): MethodInfo;
        getInvalidatedCompileCount(): long;
        getLastCompile(): MethodInfo;
        getTotalCompileCount(): long;
        _initCompilerCounters(): void;
        _lookup(name: string): management.counter.Counter;
        _compilerThreads: counter.LongCounter;
        _counters: java.util.Map<string,counter.Counter>;
        _jvm: VMManagement;
        _lastFailedMethod: counter.StringCounter;
        _lastFailedType: counter.LongCounter;
        _lastInvalidatedMethod: counter.StringCounter;
        _lastInvalidatedType: counter.LongCounter;
        _lastMethod: counter.StringCounter;
        _lastSize: counter.LongCounter;
        _lastType: counter.LongCounter;
        _nmethodCodeSize: counter.LongCounter;
        _nmethodSize: counter.LongCounter;
        _numActiveThreads: int;
        _threads: java.util.List<HotspotCompilation$CompilerThreadInfo>;
        _totalBailouts: counter.LongCounter;
        _totalCompiles: counter.LongCounter;
        _totalInvalidates: counter.LongCounter;
      }
      interface HotspotCompilation extends CombineTypes<[_HotspotCompilation, java.lang.Object, sun.management.HotspotCompilationMBean]> {}
      interface _HotspotCompilation$CompilerThreadInfo$$static extends ClassLike {
        _new(a0: HotspotCompilation, bname: string, index: int): HotspotCompilation$CompilerThreadInfo;
      }
      let HotspotCompilation$CompilerThreadInfo: _HotspotCompilation$CompilerThreadInfo$$static;
      interface _HotspotCompilation$CompilerThreadInfo {
        _getCompilerThreadStat(): CompilerThreadStat;
        _compiles: counter.LongCounter;
        _method: counter.StringCounter;
        _name: string;
        _time: counter.LongCounter;
        _type: counter.LongCounter;
      }
      interface HotspotCompilation$CompilerThreadInfo extends CombineTypes<[_HotspotCompilation$CompilerThreadInfo, java.lang.Object]> {}
      interface _HotspotCompilationMBean$$static extends ClassLike {
      }
      let HotspotCompilationMBean: _HotspotCompilationMBean$$static;
      interface _HotspotCompilationMBean {
        getBailoutCompileCount(): long;
        getCompiledMethodCodeSize(): long;
        getCompiledMethodSize(): long;
        getCompilerThreadCount(): int;
        getCompilerThreadStats(): java.util.List<CompilerThreadStat>;
        getFailedCompile(): MethodInfo;
        getInternalCompilerCounters(): java.util.List<management.counter.Counter>;
        getInvalidatedCompile(): MethodInfo;
        getInvalidatedCompileCount(): long;
        getLastCompile(): MethodInfo;
        getTotalCompileCount(): long;
      }
      interface HotspotCompilationMBean extends CombineTypes<[_HotspotCompilationMBean, java.lang.Object]> {}
      interface _HotspotInternal$$static extends ClassLike {
        _HOTSPOT_INTERNAL_MBEAN_NAME: string;
        _objName: javax.management.ObjectName;
        new(): HotspotInternal;
      }
      let HotspotInternal: _HotspotInternal$$static;
      interface _HotspotInternal {
        postDeregister(): void;
        postRegister(registrationDone: boolean): void;
        preDeregister(): void;
        preRegister(server: javax.management.MBeanServer, name: javax.management.ObjectName): javax.management.ObjectName;
        _server: javax.management.MBeanServer;
      }
      interface HotspotInternal extends CombineTypes<[_HotspotInternal, javax.management.MBeanRegistration, sun.management.HotspotInternalMBean, java.lang.Object]> {}
      interface _HotspotInternalMBean$$static extends ClassLike {
      }
      let HotspotInternalMBean: _HotspotInternalMBean$$static;
      interface _HotspotInternalMBean {
      }
      interface HotspotInternalMBean extends CombineTypes<[_HotspotInternalMBean, java.lang.Object]> {}
      interface _HotspotMemory$$static extends ClassLike {
        _COM_SUN_GC: string;
        _GC_COUNTER_NAME_PATTERN: string;
        _JAVA_GC: string;
        _SUN_GC: string;
        _new(vm: VMManagement): HotspotMemory;
      }
      let HotspotMemory: _HotspotMemory$$static;
      interface _HotspotMemory {
        getInternalMemoryCounters(): java.util.List<management.counter.Counter>;
        _jvm: VMManagement;
      }
      interface HotspotMemory extends CombineTypes<[_HotspotMemory, java.lang.Object, sun.management.HotspotMemoryMBean]> {}
      interface _HotspotMemoryMBean$$static extends ClassLike {
      }
      let HotspotMemoryMBean: _HotspotMemoryMBean$$static;
      interface _HotspotMemoryMBean {
        getInternalMemoryCounters(): java.util.List<management.counter.Counter>;
(): java.util.List<management.counter.Counter>;
      }
      interface HotspotMemoryMBean extends CombineTypes<[_HotspotMemoryMBean, java.lang.Object]> {}
      interface _HotspotRuntime$$static extends ClassLike {
        _COM_SUN_PROPERTY: string;
        _COM_SUN_RT: string;
        _JAVA_PROPERTY: string;
        _JAVA_RT: string;
        _RT_COUNTER_NAME_PATTERN: string;
        _SUN_PROPERTY: string;
        _SUN_RT: string;
        _new(vm: VMManagement): HotspotRuntime;
      }
      let HotspotRuntime: _HotspotRuntime$$static;
      interface _HotspotRuntime {
        getInternalRuntimeCounters(): java.util.List<management.counter.Counter>;
        getSafepointCount(): long;
        getSafepointSyncTime(): long;
        getTotalSafepointTime(): long;
        _jvm: VMManagement;
      }
      interface HotspotRuntime extends CombineTypes<[_HotspotRuntime, sun.management.HotspotRuntimeMBean, java.lang.Object]> {}
      interface _HotspotRuntimeMBean$$static extends ClassLike {
      }
      let HotspotRuntimeMBean: _HotspotRuntimeMBean$$static;
      interface _HotspotRuntimeMBean {
        getInternalRuntimeCounters(): java.util.List<management.counter.Counter>;
        getSafepointCount(): long;
        getSafepointSyncTime(): long;
        getTotalSafepointTime(): long;
      }
      interface HotspotRuntimeMBean extends CombineTypes<[_HotspotRuntimeMBean, java.lang.Object]> {}
      interface _HotspotThread$$static extends ClassLike {
        _COM_SUN_THREADS: string;
        _JAVA_THREADS: string;
        _SUN_THREADS: string;
        _THREADS_COUNTER_NAME_PATTERN: string;
        _new(vm: VMManagement): HotspotThread;
      }
      let HotspotThread: _HotspotThread$$static;
      interface _HotspotThread {
        getInternalThreadCount(): int;
        getInternalThreadCpuTimes(): java.util.Map<string,long>;
        getInternalThreadTimes0(a0: string[], a1: long[]): int;
        getInternalThreadingCounters(): java.util.List<management.counter.Counter>;
        _jvm: VMManagement;
      }
      interface HotspotThread extends CombineTypes<[_HotspotThread, java.lang.Object, sun.management.HotspotThreadMBean]> {}
      interface _HotspotThreadMBean$$static extends ClassLike {
      }
      let HotspotThreadMBean: _HotspotThreadMBean$$static;
      interface _HotspotThreadMBean {
        getInternalThreadCount(): int;
        getInternalThreadCpuTimes(): java.util.Map<string,long>;
        getInternalThreadingCounters(): java.util.List<management.counter.Counter>;
      }
      interface HotspotThreadMBean extends CombineTypes<[_HotspotThreadMBean, java.lang.Object]> {}
      interface _LazyCompositeData$$static extends ClassLike {
        getBoolean(cd: javax.management.openmbean.CompositeData, itemName: string): boolean;
        getInt(cd: javax.management.openmbean.CompositeData, itemName: string): int;
        getLong(cd: javax.management.openmbean.CompositeData, itemName: string): long;
        getString(cd: javax.management.openmbean.CompositeData, itemName: string): string;
        _isTypeMatched(type1: javax.management.openmbean.CompositeType, type2: javax.management.openmbean.CompositeType): boolean;
        _isTypeMatched(type1: javax.management.openmbean.TabularType, type2: javax.management.openmbean.TabularType): boolean;
        _isTypeMatched(type1: javax.management.openmbean.ArrayType<any>, type2: javax.management.openmbean.ArrayType<any>): boolean;
        _isTypeMatched(ot1: javax.management.openmbean.OpenType<any>, ot2: javax.management.openmbean.OpenType<any>): boolean;
        _serialVersionUID: long;
        new(): LazyCompositeData;
      }
      let LazyCompositeData: _LazyCompositeData$$static;
      interface _LazyCompositeData {
        _compositeData(): javax.management.openmbean.CompositeData;
        containsKey(key: string): boolean;
        containsValue(value: any): boolean;
        equals(obj: any): boolean;
        get(key: string): any;
        getAll(keys: string[]): any[];
        _getCompositeData(): javax.management.openmbean.CompositeData;
(): javax.management.openmbean.CompositeData;
        getCompositeType(): javax.management.openmbean.CompositeType;
        hashCode(): int;
        toString(): string;
        values(): java.util.Collection<any>;
        _writeReplace(): any;
        _compositeData: javax.management.openmbean.CompositeData;
      }
      interface LazyCompositeData extends CombineTypes<[_LazyCompositeData, javax.management.openmbean.CompositeData, java.lang.Object, java.io.Serializable]> {}
      interface _LockInfoCompositeData$$static extends ClassLike {
        _compositeType(): javax.management.openmbean.CompositeType;
        toCompositeData(li: java.lang.management.LockInfo): javax.management.openmbean.CompositeData;
        toLockInfo(cd: javax.management.openmbean.CompositeData): java.lang.management.LockInfo;
        _CLASS_NAME: string;
        _IDENTITY_HASH_CODE: string;
        _LOCK_INFO_COMPOSITE_TYPE: javax.management.openmbean.CompositeType;
        _serialVersionUID: long;
      }
      let LockInfoCompositeData: _LockInfoCompositeData$$static;
      interface _LockInfoCompositeData {
        _getCompositeData(): javax.management.openmbean.CompositeData;
        getLockInfo(): java.lang.management.LockInfo;
        _lock: java.lang.management.LockInfo;
      }
      interface LockInfoCompositeData extends CombineTypes<[_LockInfoCompositeData, sun.management.LazyCompositeData]> {}
      interface _ManagementFactoryHelper$$static extends ClassLike {
        _addMBean(mbs: javax.management.MBeanServer, mbean: any, mbeanName: string): void;
        _createBufferPoolMXBean(pool: jdk.internal.misc.VM$BufferPool): java.lang.management.BufferPoolMXBean;
        _createGarbageCollector(name: string, type: string): java.lang.management.GarbageCollectorMXBean;
        _createMemoryManager(name: string): java.lang.management.MemoryManagerMXBean;
        _createMemoryPool(name: string, isHeap: boolean, uThreshold: long, a3: long): java.lang.management.MemoryPoolMXBean;
        getAllMemoryPoolNames(): string[];
        getBufferPoolMXBeans(): java.util.List<java.lang.management.BufferPoolMXBean>;
        getClassLoadingMXBean(): java.lang.management.ClassLoadingMXBean;
        getCompilationMXBean(): java.lang.management.CompilationMXBean;
        getGarbageCollectorMXBeans(): java.util.List<java.lang.management.GarbageCollectorMXBean>;
        getHotspotClassLoadingMBean(): HotspotClassLoadingMBean;
        getHotspotCompilationMBean(): HotspotCompilationMBean;
        getHotspotMemoryMBean(): HotspotMemoryMBean;
        getHotspotRuntimeMBean(): HotspotRuntimeMBean;
        getHotspotThreadMBean(): HotspotThreadMBean;
        getMemoryMXBean(): java.lang.management.MemoryMXBean;
        getMemoryManagerMXBeans(): java.util.List<java.lang.management.MemoryManagerMXBean>;
        getMemoryPoolMXBeans(): java.util.List<java.lang.management.MemoryPoolMXBean>;
        getOperatingSystemMXBean(): java.lang.management.OperatingSystemMXBean;
        getPlatformLoggingMXBean(): java.lang.management.PlatformLoggingMXBean;
        getRuntimeMXBean(): java.lang.management.RuntimeMXBean;
        getThreadMXBean(): java.lang.management.ThreadMXBean;
        getVMManagement(): VMManagement;
        isPlatformLoggingMXBeanAvailable(): boolean;
        isThreadRunningNative(state: int): boolean;
        isThreadSuspended(state: int): boolean;
        _registerInternalMBeans(mbs: javax.management.MBeanServer): void;
        toThreadState(state: int): java.lang.Thread$State;
        _unregisterInternalMBeans(mbs: javax.management.MBeanServer): void;
        _unregisterMBean(mbs: javax.management.MBeanServer, mbeanName: string): void;
        _BUFFER_POOL_MXBEAN_NAME: string;
        _HOTSPOT_CLASS_LOADING_MBEAN_NAME: string;
        _HOTSPOT_COMPILATION_MBEAN_NAME: string;
        _HOTSPOT_MEMORY_MBEAN_NAME: string;
        _HOTSPOT_RUNTIME_MBEAN_NAME: string;
        _HOTSPOT_THREAD_MBEAN_NAME: string;
        _JMM_THREAD_STATE_FLAG_MASK: int;
        _JMM_THREAD_STATE_FLAG_NATIVE: int;
        _JMM_THREAD_STATE_FLAG_SUSPENDED: int;
        _LOGGING_MXBEAN_NAME: string;
        _bufferPools: java.util.List<java.lang.management.BufferPoolMXBean>;
        _classMBean: ClassLoadingImpl;
        _compileMBean: CompilationImpl;
        _hsClassMBean: HotspotClassLoading;
        _hsCompileMBean: HotspotCompilation;
        _hsMemoryMBean: HotspotMemory;
        _hsRuntimeMBean: HotspotRuntime;
        _hsThreadMBean: HotspotThread;
        _jvm: VMManagement;
        _memoryMBean: MemoryImpl;
        _osMBean: BaseOperatingSystemImpl;
        _runtimeMBean: RuntimeImpl;
        _threadMBean: ThreadImpl;
      }
      let ManagementFactoryHelper: _ManagementFactoryHelper$$static;
      interface _ManagementFactoryHelper {
      }
      interface ManagementFactoryHelper extends CombineTypes<[_ManagementFactoryHelper, java.lang.Object]> {}
      interface _ManagementFactoryHelper$LoggingMXBeanAccess$$static extends ClassLike {
        _getMXBeanImplementation(): any;
        _isAvailable(): boolean;
        _loadLoggingClass(className: string): java.lang.Class<any>;
        _unwrap(x: java.lang.reflect.InvocationTargetException): java.lang.RuntimeException;
        _LOGGING_MXBEAN_CLASS_NAME: string;
        _LOG_MANAGER_CLASS: java.lang.Class<any>;
        _LOG_MANAGER_CLASS_NAME: string;
        _new(): ManagementFactoryHelper$LoggingMXBeanAccess;
      }
      let ManagementFactoryHelper$LoggingMXBeanAccess: _ManagementFactoryHelper$LoggingMXBeanAccess$$static;
      interface _ManagementFactoryHelper$LoggingMXBeanAccess {
        _initMethodMap(impl: any): java.util.Map<string,java.lang.reflect.Method>;
        _invoke<T>(methodName: string, args: any[]): T;
        _invoke<T>(methodName: string, ...args: any[]): T;
        _impl: any;
        _methods: java.util.Map<string,java.lang.reflect.Method>;
      }
      interface ManagementFactoryHelper$LoggingMXBeanAccess extends CombineTypes<[_ManagementFactoryHelper$LoggingMXBeanAccess, java.lang.Object]> {}
      interface _ManagementFactoryHelper$PlatformLoggingImpl$$static extends ClassLike {
        _getInstance(): ManagementFactoryHelper$PlatformLoggingImpl;
        _MBEAN: java.lang.management.PlatformLoggingMXBean;
      }
      let ManagementFactoryHelper$PlatformLoggingImpl: _ManagementFactoryHelper$PlatformLoggingImpl$$static;
      interface _ManagementFactoryHelper$PlatformLoggingImpl {
        getLoggerLevel(loggerName: string): string;
        getLoggerNames(): java.util.List<string>;
        getObjectName(): javax.management.ObjectName;
        getParentLoggerName(loggerName: string): string;
        setLoggerLevel(loggerName: string, levelName: string): void;
        _loggingAccess: ManagementFactoryHelper$LoggingMXBeanAccess;
        _objname: javax.management.ObjectName;
      }
      interface ManagementFactoryHelper$PlatformLoggingImpl extends CombineTypes<[_ManagementFactoryHelper$PlatformLoggingImpl, java.lang.management.PlatformLoggingMXBean, java.lang.Object]> {}
      interface _MappedMXBeanType$$static extends ClassLike {
        _decapitalize(name: string): string;
        getMappedType(t: java.lang.reflect.Type): MappedMXBeanType;
        _newBasicType(c: java.lang.Class<any>, ot: javax.management.openmbean.OpenType<any>): MappedMXBeanType;
        _newMappedType(javaType: java.lang.reflect.Type): MappedMXBeanType;
        toJavaTypeData(openData: any, t: java.lang.reflect.Type): any;
        toOpenType(t: java.lang.reflect.Type): javax.management.openmbean.OpenType<any>;
        toOpenTypeData(data: any, t: java.lang.reflect.Type): any;
        _COMPOSITE_DATA_CLASS: java.lang.Class<any>;
        _KEY: string;
        _VALUE: string;
        _convertedTypes: java.util.WeakHashMap<java.lang.reflect.Type,MappedMXBeanType>;
        _inProgress: javax.management.openmbean.OpenType<any>;
        _mapIndexNames: string[];
        _mapItemNames: string[];
        _simpleTypes: javax.management.openmbean.OpenType<any>[];
        new(): MappedMXBeanType;
      }
      let MappedMXBeanType: _MappedMXBeanType$$static;
      interface _MappedMXBeanType {
        _getJavaType(): java.lang.reflect.Type;
        _getMappedTypeClass(): java.lang.Class<any>;
        _getName(): string;
        getOpenType(): javax.management.openmbean.OpenType<any>;
        _getTypeName(): string;
        _isBasicType(): boolean;
        toJavaTypeData(a0: any): any;
        toOpenTypeData(a0: any): any;
        _isBasicType: boolean;
        _mappedTypeClass: java.lang.Class<any>;
        _openType: javax.management.openmbean.OpenType<any>;
      }
      interface MappedMXBeanType extends CombineTypes<[_MappedMXBeanType, java.lang.Object]> {}
      interface _MappedMXBeanType$ArrayMXBeanType$$static extends ClassLike {
        _new(c: java.lang.Class<any>): MappedMXBeanType$ArrayMXBeanType;
        _new(): MappedMXBeanType$ArrayMXBeanType;
      }
      let MappedMXBeanType$ArrayMXBeanType: _MappedMXBeanType$ArrayMXBeanType$$static;
      interface _MappedMXBeanType$ArrayMXBeanType {
        _getJavaType(): java.lang.reflect.Type;
        _getName(): string;
        toJavaTypeData(data: any): any;
        toOpenTypeData(data: any): any;
        _arrayClass: java.lang.Class<any>;
        _baseElementType: MappedMXBeanType;
        _componentType: MappedMXBeanType;
      }
      interface MappedMXBeanType$ArrayMXBeanType extends CombineTypes<[_MappedMXBeanType$ArrayMXBeanType, sun.management.MappedMXBeanType]> {}
      interface _MappedMXBeanType$BasicMXBeanType$$static extends ClassLike {
        _new(c: java.lang.Class<any>, openType: javax.management.openmbean.OpenType<any>): MappedMXBeanType$BasicMXBeanType;
      }
      let MappedMXBeanType$BasicMXBeanType: _MappedMXBeanType$BasicMXBeanType$$static;
      interface _MappedMXBeanType$BasicMXBeanType {
        _getJavaType(): java.lang.reflect.Type;
        _getName(): string;
        toJavaTypeData(data: any): any;
        toOpenTypeData(data: any): any;
        _basicType: java.lang.Class<any>;
      }
      interface MappedMXBeanType$BasicMXBeanType extends CombineTypes<[_MappedMXBeanType$BasicMXBeanType, sun.management.MappedMXBeanType]> {}
      interface _MappedMXBeanType$CompositeDataMXBeanType$$static extends ClassLike {
        _new(c: java.lang.Class<any>): MappedMXBeanType$CompositeDataMXBeanType;
      }
      let MappedMXBeanType$CompositeDataMXBeanType: _MappedMXBeanType$CompositeDataMXBeanType$$static;
      interface _MappedMXBeanType$CompositeDataMXBeanType {
        _getJavaType(): java.lang.reflect.Type;
        _getName(): string;
        toJavaTypeData(data: any): any;
        toOpenTypeData(data: any): any;
        _fromMethod: java.lang.reflect.Method;
        _isCompositeData: boolean;
        _javaClass: java.lang.Class<any>;
        _toMethod: java.lang.reflect.Method;
      }
      interface MappedMXBeanType$CompositeDataMXBeanType extends CombineTypes<[_MappedMXBeanType$CompositeDataMXBeanType, sun.management.MappedMXBeanType]> {}
      interface _MappedMXBeanType$EnumMXBeanType$$static extends ClassLike {
        _new(c: java.lang.Class<any>): MappedMXBeanType$EnumMXBeanType;
      }
      let MappedMXBeanType$EnumMXBeanType: _MappedMXBeanType$EnumMXBeanType$$static;
      interface _MappedMXBeanType$EnumMXBeanType {
        _getJavaType(): java.lang.reflect.Type;
        _getName(): string;
        toJavaTypeData(data: any): any;
        toOpenTypeData(data: any): any;
        _enumClass: java.lang.Class;
      }
      interface MappedMXBeanType$EnumMXBeanType extends CombineTypes<[_MappedMXBeanType$EnumMXBeanType, sun.management.MappedMXBeanType]> {}
      interface _MappedMXBeanType$GenericArrayMXBeanType$$static extends ClassLike {
        _new(gat: java.lang.reflect.GenericArrayType): MappedMXBeanType$GenericArrayMXBeanType;
      }
      let MappedMXBeanType$GenericArrayMXBeanType: _MappedMXBeanType$GenericArrayMXBeanType$$static;
      interface _MappedMXBeanType$GenericArrayMXBeanType {
        _getJavaType(): java.lang.reflect.Type;
        _getName(): string;
        _gtype: java.lang.reflect.GenericArrayType;
      }
      interface MappedMXBeanType$GenericArrayMXBeanType extends CombineTypes<[_MappedMXBeanType$GenericArrayMXBeanType, sun.management.MappedMXBeanType$ArrayMXBeanType]> {}
      interface _MappedMXBeanType$InProgress$$static<T> extends ClassLike {
        _description: string;
        _serialVersionUID: long;
        _new(): MappedMXBeanType$InProgress<T>;
      }
      let MappedMXBeanType$InProgress: _MappedMXBeanType$InProgress$$static<T>;
      interface _MappedMXBeanType$InProgress<T> {
        equals(o: any): boolean;
        hashCode(): int;
        isValue(o: any): boolean;
        toString(): string;
      }
      interface MappedMXBeanType$InProgress<T> extends CombineTypes<[_MappedMXBeanType$InProgress<T>, javax.management.openmbean.OpenType<T>]> {}
      interface _MappedMXBeanType$ListMXBeanType$$static extends ClassLike {
        _new(pt: java.lang.reflect.ParameterizedType): MappedMXBeanType$ListMXBeanType;
      }
      let MappedMXBeanType$ListMXBeanType: _MappedMXBeanType$ListMXBeanType$$static;
      interface _MappedMXBeanType$ListMXBeanType {
        _getJavaType(): java.lang.reflect.Type;
        _getName(): string;
        toJavaTypeData(data: any): any;
        toOpenTypeData(data: any): any;
        _javaType: java.lang.reflect.ParameterizedType;
        _paramType: MappedMXBeanType;
        _typeName: string;
      }
      interface MappedMXBeanType$ListMXBeanType extends CombineTypes<[_MappedMXBeanType$ListMXBeanType, sun.management.MappedMXBeanType]> {}
      interface _MappedMXBeanType$MapMXBeanType$$static extends ClassLike {
        _new(pt: java.lang.reflect.ParameterizedType): MappedMXBeanType$MapMXBeanType;
      }
      let MappedMXBeanType$MapMXBeanType: _MappedMXBeanType$MapMXBeanType$$static;
      interface _MappedMXBeanType$MapMXBeanType {
        _getJavaType(): java.lang.reflect.Type;
        _getName(): string;
        toJavaTypeData(data: any): any;
        toOpenTypeData(data: any): any;
        _javaType: java.lang.reflect.ParameterizedType;
        _keyType: MappedMXBeanType;
        _typeName: string;
        _valueType: MappedMXBeanType;
      }
      interface MappedMXBeanType$MapMXBeanType extends CombineTypes<[_MappedMXBeanType$MapMXBeanType, sun.management.MappedMXBeanType]> {}
      interface _MemoryImpl$$static extends ClassLike {
        _createNotification(notifType: string, poolName: string, usage: java.lang.management.MemoryUsage, count: long): void;
        _getMemoryManagers(): java.lang.management.MemoryManagerMXBean[];
        _getMemoryManagers0(): java.lang.management.MemoryManagerMXBean[];
        _getMemoryPools(): java.lang.management.MemoryPoolMXBean[];
        _getMemoryPools0(): java.lang.management.MemoryPoolMXBean[];
        _getNextSeqNumber(): long;
        _getNotifMsg(notifType: string): string;
        _mgrs: java.lang.management.MemoryManagerMXBean[];
        _notifMsgs: string[];
        _notifName: string;
        _notifTypes: string[];
        _pools: java.lang.management.MemoryPoolMXBean[];
        _seqNumber: long;
        _new(vm: VMManagement): MemoryImpl;
      }
      let MemoryImpl: _MemoryImpl$$static;
      interface _MemoryImpl {
        gc(): void;
        getHeapMemoryUsage(): java.lang.management.MemoryUsage;
        _getMemoryUsage0(a0: boolean): java.lang.management.MemoryUsage;
        getNonHeapMemoryUsage(): java.lang.management.MemoryUsage;
        getNotificationInfo(): javax.management.MBeanNotificationInfo[];
        getObjectName(): javax.management.ObjectName;
        getObjectPendingFinalizationCount(): int;
        isVerbose(): boolean;
        setVerbose(value: boolean): void;
        _setVerboseGC(a0: boolean): void;
        _jvm: VMManagement;
      }
      interface MemoryImpl extends CombineTypes<[_MemoryImpl, java.lang.management.MemoryMXBean, sun.management.NotificationEmitterSupport]> {}
      interface _MemoryManagerImpl$$static extends ClassLike {
        _new(name: string): MemoryManagerImpl;
      }
      let MemoryManagerImpl: _MemoryManagerImpl$$static;
      interface _MemoryManagerImpl {
        getMemoryPoolNames(): string[];
        _getMemoryPools(): java.lang.management.MemoryPoolMXBean[];
        _getMemoryPools0(): java.lang.management.MemoryPoolMXBean[];
        getName(): string;
        getNotificationInfo(): javax.management.MBeanNotificationInfo[];
        getObjectName(): javax.management.ObjectName;
        isValid(): boolean;
        _isValid: boolean;
        _name: string;
        _notifInfo: javax.management.MBeanNotificationInfo[];
        _pools: java.lang.management.MemoryPoolMXBean[];
      }
      interface MemoryManagerImpl extends CombineTypes<[_MemoryManagerImpl, sun.management.NotificationEmitterSupport, java.lang.management.MemoryManagerMXBean]> {}
      interface _MemoryNotifInfoCompositeData$$static extends ClassLike {
        getCount(cd: javax.management.openmbean.CompositeData): long;
        getPoolName(cd: javax.management.openmbean.CompositeData): string;
        getUsage(cd: javax.management.openmbean.CompositeData): java.lang.management.MemoryUsage;
        toCompositeData(info: java.lang.management.MemoryNotificationInfo): javax.management.openmbean.CompositeData;
        validateCompositeData(cd: javax.management.openmbean.CompositeData): void;
        _COUNT: string;
        _POOL_NAME: string;
        _USAGE: string;
        _memoryNotifInfoCompositeType: javax.management.openmbean.CompositeType;
        _memoryNotifInfoItemNames: string[];
        _serialVersionUID: long;
      }
      let MemoryNotifInfoCompositeData: _MemoryNotifInfoCompositeData$$static;
      interface _MemoryNotifInfoCompositeData {
        _getCompositeData(): javax.management.openmbean.CompositeData;
        getMemoryNotifInfo(): java.lang.management.MemoryNotificationInfo;
        _memoryNotifInfo: java.lang.management.MemoryNotificationInfo;
      }
      interface MemoryNotifInfoCompositeData extends CombineTypes<[_MemoryNotifInfoCompositeData, sun.management.LazyCompositeData]> {}
      interface _MemoryPoolImpl$$static extends ClassLike {
        _new(name: string, isHeap: boolean, usageThreshold: long, a3: long): MemoryPoolImpl;
      }
      let MemoryPoolImpl: _MemoryPoolImpl$$static;
      interface _MemoryPoolImpl {
        getCollectionUsage(): java.lang.management.MemoryUsage;
        _getCollectionUsage0(): java.lang.management.MemoryUsage;
        getCollectionUsageThreshold(): long;
        getCollectionUsageThresholdCount(): long;
        getMemoryManagerNames(): string[];
        _getMemoryManagers(): java.lang.management.MemoryManagerMXBean[];
        _getMemoryManagers0(): java.lang.management.MemoryManagerMXBean[];
        getName(): string;
        getObjectName(): javax.management.ObjectName;
        getPeakUsage(): java.lang.management.MemoryUsage;
        _getPeakUsage0(): java.lang.management.MemoryUsage;
        getType(): java.lang.management.MemoryType;
        getUsage(): java.lang.management.MemoryUsage;
        _getUsage0(): java.lang.management.MemoryUsage;
        getUsageThreshold(): long;
        getUsageThresholdCount(): long;
        isCollectionUsageThresholdExceeded(): boolean;
        isCollectionUsageThresholdSupported(): boolean;
        isUsageThresholdExceeded(): boolean;
        isUsageThresholdSupported(): boolean;
        isValid(): boolean;
        resetPeakUsage(): void;
        _resetPeakUsage0(): void;
        _setCollectionThreshold0(a0: long, a1: long): void;
        setCollectionUsageThreshold(newThreshold: long): void;
        _setPoolCollectionSensor(a0: Sensor): void;
        _setPoolUsageSensor(a0: Sensor): void;
        setUsageThreshold(newThreshold: long): void;
        _setUsageThreshold0(a0: long, a1: long): void;
        _collectionThreshold: long;
        _collectionThresholdSupported: boolean;
        _gcSensor: Sensor;
        _gcSensorRegistered: boolean;
        _isHeap: boolean;
        _isValid: boolean;
        _managers: java.lang.management.MemoryManagerMXBean[];
        _name: string;
        _usageSensor: Sensor;
        _usageSensorRegistered: boolean;
        _usageThreshold: long;
        _usageThresholdSupported: boolean;
      }
      interface MemoryPoolImpl extends CombineTypes<[_MemoryPoolImpl, java.lang.management.MemoryPoolMXBean, java.lang.Object]> {}
      interface _MemoryPoolImpl$CollectionSensor$$static extends ClassLike {
        _new(this$0: MemoryPoolImpl, pool: MemoryPoolImpl, name: string): MemoryPoolImpl$CollectionSensor;
      }
      let MemoryPoolImpl$CollectionSensor: _MemoryPoolImpl$CollectionSensor$$static;
      interface _MemoryPoolImpl$CollectionSensor {
        _clearAction(): void;
        _triggerAction(usage: java.lang.management.MemoryUsage): void;
        _triggerAction(): void;
        _pool: MemoryPoolImpl;
        _this$0: MemoryPoolImpl;
      }
      interface MemoryPoolImpl$CollectionSensor extends CombineTypes<[_MemoryPoolImpl$CollectionSensor, sun.management.Sensor]> {}
      interface _MemoryPoolImpl$PoolSensor$$static extends ClassLike {
        _new(pool: MemoryPoolImpl, name: string): MemoryPoolImpl$PoolSensor;
      }
      let MemoryPoolImpl$PoolSensor: _MemoryPoolImpl$PoolSensor$$static;
      interface _MemoryPoolImpl$PoolSensor {
        _clearAction(): void;
        _triggerAction(usage: java.lang.management.MemoryUsage): void;
        _triggerAction(): void;
        _pool: MemoryPoolImpl;
      }
      interface MemoryPoolImpl$PoolSensor extends CombineTypes<[_MemoryPoolImpl$PoolSensor, sun.management.Sensor]> {}
      interface _MemoryUsageCompositeData$$static extends ClassLike {
        getCommitted(cd: javax.management.openmbean.CompositeData): long;
        getInit(cd: javax.management.openmbean.CompositeData): long;
        getMax(cd: javax.management.openmbean.CompositeData): long;
        _getMemoryUsageCompositeType(): javax.management.openmbean.CompositeType;
        getUsed(cd: javax.management.openmbean.CompositeData): long;
        toCompositeData(u: java.lang.management.MemoryUsage): javax.management.openmbean.CompositeData;
        validateCompositeData(cd: javax.management.openmbean.CompositeData): void;
        _COMMITTED: string;
        _INIT: string;
        _MAX: string;
        _USED: string;
        _memoryUsageCompositeType: javax.management.openmbean.CompositeType;
        _memoryUsageItemNames: string[];
        _serialVersionUID: long;
      }
      let MemoryUsageCompositeData: _MemoryUsageCompositeData$$static;
      interface _MemoryUsageCompositeData {
        _getCompositeData(): javax.management.openmbean.CompositeData;
        getMemoryUsage(): java.lang.management.MemoryUsage;
        _usage: java.lang.management.MemoryUsage;
      }
      interface MemoryUsageCompositeData extends CombineTypes<[_MemoryUsageCompositeData, sun.management.LazyCompositeData]> {}
      interface _MethodInfo$$static extends ClassLike {
        _serialVersionUID: long;
        _new(name: string, type: long, a2: int): MethodInfo;
      }
      let MethodInfo: _MethodInfo$$static;
      interface _MethodInfo {
        getCompileSize(): int;
        getName(): string;
        getType(): long;
        toString(): string;
        _compileSize: int;
        _name: string;
        _type: long;
      }
      interface MethodInfo extends CombineTypes<[_MethodInfo, java.lang.Object, java.io.Serializable]> {}
      interface _MonitorInfoCompositeData$$static extends ClassLike {
        getClassName(cd: javax.management.openmbean.CompositeData): string;
        getIdentityHashCode(cd: javax.management.openmbean.CompositeData): int;
        getLockedStackDepth(cd: javax.management.openmbean.CompositeData): int;
        getLockedStackFrame(cd: javax.management.openmbean.CompositeData): java.lang.StackTraceElement;
        toCompositeData(mi: java.lang.management.MonitorInfo): javax.management.openmbean.CompositeData;
        _v6CompositeType(): javax.management.openmbean.CompositeType;
        validateCompositeData(cd: javax.management.openmbean.CompositeData): void;
        _CLASS_NAME: string;
        _IDENTITY_HASH_CODE: string;
        _LOCKED_STACK_DEPTH: string;
        _LOCKED_STACK_FRAME: string;
        _MONITOR_INFO_ATTRIBUTES: string[];
        _MONITOR_INFO_COMPOSITE_TYPE: javax.management.openmbean.CompositeType;
        _V6_COMPOSITE_TYPE: javax.management.openmbean.CompositeType;
        _serialVersionUID: long;
      }
      let MonitorInfoCompositeData: _MonitorInfoCompositeData$$static;
      interface _MonitorInfoCompositeData {
        _getCompositeData(): javax.management.openmbean.CompositeData;
        getMonitorInfo(): java.lang.management.MonitorInfo;
        _lock: java.lang.management.MonitorInfo;
      }
      interface MonitorInfoCompositeData extends CombineTypes<[_MonitorInfoCompositeData, sun.management.LazyCompositeData]> {}
      interface _NotificationEmitterSupport$$static extends ClassLike {
        _new(): NotificationEmitterSupport;
      }
      let NotificationEmitterSupport: _NotificationEmitterSupport$$static;
      interface _NotificationEmitterSupport {
        addNotificationListener(listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, handback: any): void;
        getNotificationInfo(): javax.management.MBeanNotificationInfo[];
(): javax.management.MBeanNotificationInfo[];
        hasListeners(): boolean;
        removeNotificationListener(listener: javax.management.NotificationListener): void;
        removeNotificationListener(listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, handback: any): void;
        sendNotification(notification: javax.management.Notification): void;
        _listenerList: java.util.List<NotificationEmitterSupport$ListenerInfo>;
        _listenerLock: any;
      }
      interface NotificationEmitterSupport extends CombineTypes<[_NotificationEmitterSupport, java.lang.Object, javax.management.NotificationEmitter]> {}
      interface _NotificationEmitterSupport$ListenerInfo$$static extends ClassLike {
        new(listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, handback: any): NotificationEmitterSupport$ListenerInfo;
      }
      let NotificationEmitterSupport$ListenerInfo: _NotificationEmitterSupport$ListenerInfo$$static;
      interface _NotificationEmitterSupport$ListenerInfo {
        _filter: javax.management.NotificationFilter;
        _handback: any;
        listener: javax.management.NotificationListener;
      }
      interface NotificationEmitterSupport$ListenerInfo extends CombineTypes<[_NotificationEmitterSupport$ListenerInfo, java.lang.Object]> {}
      interface _RuntimeImpl$$static extends ClassLike {
        _new(vm: VMManagement): RuntimeImpl;
      }
      let RuntimeImpl: _RuntimeImpl$$static;
      interface _RuntimeImpl {
        getBootClassPath(): string;
        getClassPath(): string;
        getInputArguments(): java.util.List<string>;
        getLibraryPath(): string;
        getManagementSpecVersion(): string;
        getName(): string;
        getObjectName(): javax.management.ObjectName;
        getSpecName(): string;
        getSpecVendor(): string;
        getSpecVersion(): string;
        getStartTime(): long;
        getSystemProperties(): java.util.Map<string,string>;
        getUptime(): long;
        getVmName(): string;
        getVmVendor(): string;
        getVmVersion(): string;
        isBootClassPathSupported(): boolean;
        _jvm: VMManagement;
        _vmStartupTime: long;
      }
      interface RuntimeImpl extends CombineTypes<[_RuntimeImpl, java.lang.management.RuntimeMXBean, java.lang.Object]> {}
      interface _Sensor$$static extends ClassLike {
        new(name: string): Sensor;
      }
      let Sensor: _Sensor$$static;
      interface _Sensor {
        clear(): void;
        clear(increment: int): void;
        _clearAction(): void;
        getCount(): long;
        getName(): string;
        isOn(): boolean;
        toString(): string;
        trigger(): void;
        trigger(increment: int): void;
        trigger(increment: int, usage: java.lang.management.MemoryUsage): void;
        _triggerAction(): void;
        _triggerAction(a0: java.lang.management.MemoryUsage): void;
        _count: long;
        _lock: any;
        _name: string;
        _on: boolean;
      }
      interface Sensor extends CombineTypes<[_Sensor, java.lang.Object]> {}
      interface _StackTraceElementCompositeData$$static extends ClassLike {
        from(cd: javax.management.openmbean.CompositeData): java.lang.StackTraceElement;
        toCompositeData(ste: java.lang.StackTraceElement): javax.management.openmbean.CompositeData;
        _v5CompositeType(): javax.management.openmbean.CompositeType;
        validateCompositeData(cd: javax.management.openmbean.CompositeData): void;
        _CLASS_LOADER_NAME: string;
        _CLASS_NAME: string;
        _FILE_NAME: string;
        _LINE_NUMBER: string;
        _METHOD_NAME: string;
        _MODULE_NAME: string;
        _MODULE_VERSION: string;
        _NATIVE_METHOD: string;
        _STACK_TRACE_ELEMENT_COMPOSITE_TYPE: javax.management.openmbean.CompositeType;
        _V5_ATTRIBUTES: string[];
        _V5_COMPOSITE_TYPE: javax.management.openmbean.CompositeType;
        _V9_ATTRIBUTES: string[];
        _serialVersionUID: long;
      }
      let StackTraceElementCompositeData: _StackTraceElementCompositeData$$static;
      interface _StackTraceElementCompositeData {
        _getCompositeData(): javax.management.openmbean.CompositeData;
        getStackTraceElement(): java.lang.StackTraceElement;
        _ste: java.lang.StackTraceElement;
      }
      interface StackTraceElementCompositeData extends CombineTypes<[_StackTraceElementCompositeData, sun.management.LazyCompositeData]> {}
      interface _ThreadImpl$$static extends ClassLike {
        _dumpThreads0(a0: long[], a1: boolean, a2: boolean, a3: int): java.lang.management.ThreadInfo[];
        _findDeadlockedThreads0(): java.lang.Thread[];
        _findMonitorDeadlockedThreads0(): java.lang.Thread[];
        _getThreadAllocatedMemory0(a0: long): long;
        _getThreadAllocatedMemory1(a0: long[], a1: long[]): void;
        _getThreadInfo1(a0: long[], a1: int, a2: java.lang.management.ThreadInfo[]): void;
        _getThreadTotalCpuTime0(a0: long): long;
        _getThreadTotalCpuTime1(a0: long[], a1: long[]): void;
        _getThreadUserCpuTime0(a0: long): long;
        _getThreadUserCpuTime1(a0: long[], a1: long[]): void;
        _getThreads(): java.lang.Thread[];
        _getTotalThreadAllocatedMemory(): long;
        _resetContentionTimes0(a0: long): void;
        _resetPeakThreadCount0(): void;
        _setThreadAllocatedMemoryEnabled0(a0: boolean): void;
        _setThreadContentionMonitoringEnabled0(a0: boolean): void;
        _setThreadCpuTimeEnabled0(a0: boolean): void;
        _threadIds(threads: java.lang.Thread[]): long[];
        _new(vm: VMManagement): ThreadImpl;
      }
      let ThreadImpl: _ThreadImpl$$static;
      interface _ThreadImpl {
        dumpAllThreads(lockedMonitors: boolean, lockedSynchronizers: boolean): java.lang.management.ThreadInfo[];
        dumpAllThreads(lockedMonitors: boolean, lockedSynchronizers: boolean, maxDepth: int): java.lang.management.ThreadInfo[];
        _ensureThreadAllocatedMemorySupported(): void;
        findDeadlockedThreads(): long[];
        findMonitorDeadlockedThreads(): long[];
        getAllThreadIds(): long[];
        _getCurrentThreadAllocatedBytes(): long;
        getCurrentThreadCpuTime(): long;
        getCurrentThreadUserTime(): long;
        getDaemonThreadCount(): int;
        getObjectName(): javax.management.ObjectName;
        getPeakThreadCount(): int;
        _getThreadAllocatedBytes(id: long): long;
        _getThreadAllocatedBytes(ids: long[]): long[];
        getThreadCount(): int;
        getThreadCpuTime(id: long): long;
        _getThreadCpuTime(ids: long[]): long[];
        getThreadInfo(id: long): java.lang.management.ThreadInfo;
        getThreadInfo(id: long, a1: int): java.lang.management.ThreadInfo;
        getThreadInfo(ids: long[]): java.lang.management.ThreadInfo[];
        getThreadInfo(ids: long[], maxDepth: int): java.lang.management.ThreadInfo[];
        getThreadInfo(ids: long[], lockedMonitors: boolean, lockedSynchronizers: boolean): java.lang.management.ThreadInfo[];
        getThreadInfo(ids: long[], lockedMonitors: boolean, lockedSynchronizers: boolean, maxDepth: int): java.lang.management.ThreadInfo[];
        getThreadUserTime(id: long): long;
        _getThreadUserTime(ids: long[]): long[];
        getTotalStartedThreadCount(): long;
        _getTotalThreadAllocatedBytes(): long;
        isCurrentThreadCpuTimeSupported(): boolean;
        isObjectMonitorUsageSupported(): boolean;
        isSynchronizerUsageSupported(): boolean;
        _isThreadAllocatedMemoryEnabled(): boolean;
        _isThreadAllocatedMemorySupported(): boolean;
        isThreadContentionMonitoringEnabled(): boolean;
        isThreadContentionMonitoringSupported(): boolean;
        isThreadCpuTimeEnabled(): boolean;
        isThreadCpuTimeSupported(): boolean;
        resetPeakThreadCount(): void;
        _setThreadAllocatedMemoryEnabled(enable: boolean): void;
        setThreadContentionMonitoringEnabled(enable: boolean): void;
        setThreadCpuTimeEnabled(enable: boolean): void;
        _threadsToIds(threads: java.lang.Thread[]): long[];
        _verifyCurrentThreadCpuTime(): boolean;
        _verifyDumpThreads(lockedMonitors: boolean, lockedSynchronizers: boolean): void;
        _verifyThreadAllocatedMemory(id: long): boolean;
        _verifyThreadAllocatedMemory(ids: long[]): boolean;
        _verifyThreadCpuTime(ids: long[]): boolean;
        _verifyThreadId(id: long): void;
        _verifyThreadIds(ids: long[]): void;
        _allocatedMemoryEnabled: boolean;
        _contentionMonitoringEnabled: boolean;
        _cpuTimeEnabled: boolean;
        _jvm: VMManagement;
      }
      interface ThreadImpl extends CombineTypes<[_ThreadImpl, java.lang.Object, java.lang.management.ThreadMXBean]> {}
      interface _ThreadInfoCompositeData$$static extends ClassLike {
        getInstance(cd: javax.management.openmbean.CompositeData): ThreadInfoCompositeData;
        toCompositeData(ti: java.lang.management.ThreadInfo): javax.management.openmbean.CompositeData;
        validateCompositeData(cd: javax.management.openmbean.CompositeData): void;
        _BLOCKED_COUNT: string;
        _BLOCKED_TIME: string;
        _DAEMON: string;
        _IN_NATIVE: string;
        _LOCKED_MONITORS: string;
        _LOCKED_SYNCS: string;
        _LOCK_INFO: string;
        _LOCK_NAME: string;
        _LOCK_OWNER_ID: string;
        _LOCK_OWNER_NAME: string;
        _PRIORITY: string;
        _RUNTIME_VERSION: int;
        _STACK_TRACE: string;
        _SUSPENDED: string;
        _THREAD_ID: string;
        _THREAD_NAME: string;
        _THREAD_STATE: string;
        _V5_ATTRIBUTES: string[];
        _V6_ATTRIBUTES: string[];
        _V9_ATTRIBUTES: string[];
        _WAITED_COUNT: string;
        _WAITED_TIME: string;
        _serialVersionUID: long;
      }
      let ThreadInfoCompositeData: _ThreadInfoCompositeData$$static;
      interface _ThreadInfoCompositeData {
        blockedCount(): long;
        blockedTime(): long;
        _getCompositeData(): javax.management.openmbean.CompositeData;
        getPriority(): int;
        getThreadInfo(): java.lang.management.ThreadInfo;
        inNative(): boolean;
        isDaemon(): boolean;
        lockInfo(): java.lang.management.LockInfo;
        lockName(): string;
        lockOwnerId(): long;
        lockOwnerName(): string;
        lockedMonitors(): java.lang.management.MonitorInfo[];
        lockedSynchronizers(): java.lang.management.LockInfo[];
        stackTrace(): java.lang.StackTraceElement[];
        suspended(): boolean;
        threadId(): long;
        threadName(): string;
        threadState(): java.lang.Thread$State;
        waitedCount(): long;
        waitedTime(): long;
        _cdata: javax.management.openmbean.CompositeData;
        _threadInfo: java.lang.management.ThreadInfo;
      }
      interface ThreadInfoCompositeData extends CombineTypes<[_ThreadInfoCompositeData, sun.management.LazyCompositeData]> {}
      interface _ThreadInfoCompositeData$ThreadInfoCompositeTypes$$static extends ClassLike {
        _initCompositeType(): javax.management.openmbean.CompositeType;
        _initCompositeTypes(): java.util.Map<int,javax.management.openmbean.CompositeType>;
        _initV5CompositeType(threadInfoCompositeType: javax.management.openmbean.CompositeType): javax.management.openmbean.CompositeType;
        _initV6CompositeType(threadInfoCompositeType: javax.management.openmbean.CompositeType): javax.management.openmbean.CompositeType;
        _ofVersion(version: int): javax.management.openmbean.CompositeType;
        _compositeTypes: java.util.Map<int,javax.management.openmbean.CompositeType>;
        _new(): ThreadInfoCompositeData$ThreadInfoCompositeTypes;
      }
      let ThreadInfoCompositeData$ThreadInfoCompositeTypes: _ThreadInfoCompositeData$ThreadInfoCompositeTypes$$static;
      interface _ThreadInfoCompositeData$ThreadInfoCompositeTypes {
      }
      interface ThreadInfoCompositeData$ThreadInfoCompositeTypes extends CombineTypes<[_ThreadInfoCompositeData$ThreadInfoCompositeTypes, java.lang.Object]> {}
      interface _Util$$static extends ClassLike {
        _checkAccess(p: java.lang.management.ManagementPermission): void;
        checkControlAccess(): void;
        _checkMonitorAccess(): void;
        newObjectName(domainAndType: string, name: string): javax.management.ObjectName;
        newObjectName(name: string): javax.management.ObjectName;
        _toStringArray(list: java.util.List<string>): string[];
        _EMPTY_STRING_ARRAY: string[];
        _controlPermission: java.lang.management.ManagementPermission;
        _monitorPermission: java.lang.management.ManagementPermission;
      }
      let Util: _Util$$static;
      interface _Util {
      }
      interface Util extends CombineTypes<[_Util, java.lang.Object]> {}
      interface _VMManagement$$static extends ClassLike {
      }
      let VMManagement: _VMManagement$$static;
      interface _VMManagement {
        getAvailableProcessors(): int;
        getBootClassPath(): string;
        getClassInitializationTime(): long;
        getClassLoadingTime(): long;
        getClassPath(): string;
        getClassVerificationTime(): long;
        getCompilerName(): string;
        getDaemonThreadCount(): int;
        getInitializedClassCount(): long;
        getInternalCounters(a0: string): java.util.List<management.counter.Counter>;
        getLibraryPath(): string;
        getLiveThreadCount(): int;
        getLoadedClassCount(): int;
        getLoadedClassSize(): long;
        getManagementVersion(): string;
        getMethodDataSize(): long;
        getOsArch(): string;
        getOsName(): string;
        getOsVersion(): string;
        getPeakThreadCount(): int;
        getSafepointCount(): long;
        getSafepointSyncTime(): long;
        getStartupTime(): long;
        getTotalApplicationNonStoppedTime(): long;
        getTotalClassCount(): long;
        getTotalCompileTime(): long;
        getTotalSafepointTime(): long;
        getTotalThreadCount(): long;
        getUnloadedClassCount(): long;
        getUnloadedClassSize(): long;
        getUptime(): long;
        getVerboseClass(): boolean;
        getVerboseGC(): boolean;
        getVmArguments(): java.util.List<string>;
        getVmId(): string;
        getVmName(): string;
        getVmSpecName(): string;
        getVmSpecVendor(): string;
        getVmSpecVersion(): string;
        getVmVendor(): string;
        getVmVersion(): string;
        isBootClassPathSupported(): boolean;
        isCompilationTimeMonitoringSupported(): boolean;
        isCurrentThreadCpuTimeSupported(): boolean;
        isGcNotificationSupported(): boolean;
        isObjectMonitorUsageSupported(): boolean;
        isOtherThreadCpuTimeSupported(): boolean;
        isRemoteDiagnosticCommandsSupported(): boolean;
        isSynchronizerUsageSupported(): boolean;
        isThreadAllocatedMemoryEnabled(): boolean;
        isThreadAllocatedMemorySupported(): boolean;
        isThreadContentionMonitoringEnabled(): boolean;
        isThreadContentionMonitoringSupported(): boolean;
        isThreadCpuTimeEnabled(): boolean;
      }
      interface VMManagement extends CombineTypes<[_VMManagement, java.lang.Object]> {}
      interface _VMManagementImpl$$static extends ClassLike {
        _getVersion0(): string;
        _initOptionalSupportFields(): void;
        _compTimeMonitoringSupport: boolean;
        _currentThreadCpuTimeSupport: boolean;
        _gcNotificationSupport: boolean;
        _objectMonitorUsageSupport: boolean;
        _otherThreadCpuTimeSupport: boolean;
        _remoteDiagnosticCommandsSupport: boolean;
        _synchronizerUsageSupport: boolean;
        _threadAllocatedMemorySupport: boolean;
        _threadContentionMonitoringSupport: boolean;
        _version: string;
        _new(): VMManagementImpl;
      }
      let VMManagementImpl: _VMManagementImpl$$static;
      interface _VMManagementImpl {
        getAvailableProcessors(): int;
        getBootClassPath(): string;
        getClassInitializationTime(): long;
        getClassLoadingTime(): long;
        getClassPath(): string;
        getClassVerificationTime(): long;
        getCompilerName(): string;
        getDaemonThreadCount(): int;
        getInitializedClassCount(): long;
        getInternalCounters(pattern: string): java.util.List<management.counter.Counter>;
        getLibraryPath(): string;
        getLiveThreadCount(): int;
        getLoadedClassCount(): int;
        getLoadedClassSize(): long;
        getManagementVersion(): string;
        getMethodDataSize(): long;
        getOsArch(): string;
        getOsName(): string;
        getOsVersion(): string;
        getPeakThreadCount(): int;
        _getPerfInstrumentation(): management.counter.perf.PerfInstrumentation;
        _getProcessId(): int;
        getSafepointCount(): long;
        getSafepointSyncTime(): long;
        getStartupTime(): long;
        getTotalApplicationNonStoppedTime(): long;
        getTotalClassCount(): long;
        getTotalCompileTime(): long;
        getTotalSafepointTime(): long;
        getTotalThreadCount(): long;
        getUnloadedClassCount(): long;
        getUnloadedClassSize(): long;
        getUptime(): long;
        _getUptime0(): long;
        getVerboseClass(): boolean;
        getVerboseGC(): boolean;
        getVmArguments(): java.util.List<string>;
        getVmArguments0(): string[];
        getVmId(): string;
        getVmName(): string;
        getVmSpecName(): string;
        getVmSpecVendor(): string;
        getVmSpecVersion(): string;
        getVmVendor(): string;
        getVmVersion(): string;
        isBootClassPathSupported(): boolean;
        isCompilationTimeMonitoringSupported(): boolean;
        isCurrentThreadCpuTimeSupported(): boolean;
        isGcNotificationSupported(): boolean;
        isObjectMonitorUsageSupported(): boolean;
        isOtherThreadCpuTimeSupported(): boolean;
        isRemoteDiagnosticCommandsSupported(): boolean;
        isSynchronizerUsageSupported(): boolean;
        isThreadAllocatedMemoryEnabled(): boolean;
        isThreadAllocatedMemorySupported(): boolean;
        isThreadContentionMonitoringEnabled(): boolean;
        isThreadContentionMonitoringSupported(): boolean;
        isThreadCpuTimeEnabled(): boolean;
        _noPerfData: boolean;
        _perfInstr: counter.perf.PerfInstrumentation;
        _vmArgs: java.util.List<string>;
      }
      interface VMManagementImpl extends CombineTypes<[_VMManagementImpl, java.lang.Object, sun.management.VMManagement]> {}
    }
  }
}
