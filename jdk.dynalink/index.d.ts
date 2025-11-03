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
    module dynalink {
      module beans {
        interface _AbstractJavaLinker$$static extends ClassLike {
          _assertParameterCount(descriptor: CallSiteDescriptor, paramCount: int): void;
          _createDynamicMethod(members: java.lang.Iterable<java.lang.reflect.Executable>, clazz: java.lang.Class<any>, name: string): DynamicMethod;
          _createDynamicMethod(m: java.lang.reflect.Executable): SingleDynamicMethod;
          _decapitalize(str: string): string;
          _getMethodGetterType(req: AbstractJavaLinker$ComponentLinkRequest): java.lang.invoke.MethodType;
          _getMostGenericGetter(getter: java.lang.reflect.Method): java.lang.reflect.Method;
          _getMostGenericGetter(name: string, declaringClass: java.lang.Class<any>): java.lang.reflect.Method;
          _getUnmodifiableKeys(m: java.util.Map<string,any>): java.util.Set<string>;
          _matchReturnTypes(m1: java.lang.invoke.MethodHandle, m2: java.lang.invoke.MethodHandle): AbstractJavaLinker$MethodPair;
          _mergeMethods(method: SingleDynamicMethod, existing: DynamicMethod, clazz: java.lang.Class<any>, name: string): DynamicMethod;
          _unreflectSafely(m: java.lang.reflect.Executable): java.lang.invoke.MethodHandle;
          _CONSTANT_NULL_DROP_ANNOTATED_METHOD: java.lang.invoke.MethodHandle;
          _CONSTANT_NULL_DROP_METHOD_HANDLE: java.lang.invoke.MethodHandle;
          _GETTER_INVOKER: java.lang.invoke.MethodHandle;
          _GET_ANNOTATED_METHOD: java.lang.invoke.MethodHandle;
          _GET_DYNAMIC_METHOD: java.lang.invoke.MethodHandle;
          _GET_PROPERTY_GETTER_HANDLE: java.lang.invoke.MethodHandle;
          _GET_PROPERTY_SETTER_HANDLE: java.lang.invoke.MethodHandle;
          _IS_ANNOTATED_METHOD_NOT_NULL: java.lang.invoke.MethodHandle;
          _IS_DYNAMIC_METHOD: java.lang.invoke.MethodHandle;
          _IS_METHOD_HANDLE_NOT_NULL: java.lang.invoke.MethodHandle;
          _OBJECT_IDENTITY: java.lang.invoke.MethodHandle;
          _privateLookup: dynalink.linker.support.Lookup;
          _new(clazz: java.lang.Class<any>, classGuard: java.lang.invoke.MethodHandle): AbstractJavaLinker;
          _new(clazz: java.lang.Class<any>, classGuard: java.lang.invoke.MethodHandle, assignableGuard: java.lang.invoke.MethodHandle): AbstractJavaLinker;
        }
        let AbstractJavaLinker: _AbstractJavaLinker$$static;
        interface _AbstractJavaLinker {
          _addMember(name: string, m: java.lang.reflect.Executable, methodMap: java.util.Map<string,DynamicMethod>): void;
          _addMember(name: string, method: SingleDynamicMethod, methodMap: java.util.Map<string,DynamicMethod>): void;
          _createFacetIntrospector(): FacetIntrospector;
          _createGuardedDynamicMethodInvocation(callSiteDescriptor: CallSiteDescriptor, linkerServices: dynalink.linker.LinkerServices, methodName: string, methodMap: java.util.Map<string,DynamicMethod>): dynalink.linker.GuardedInvocation;
          _createNoSuchMemberHandler(missingMemberHandlerFactory: MissingMemberHandlerFactory, linkRequest: dynalink.linker.LinkRequest, linkerServices: dynalink.linker.LinkerServices): GuardedInvocationComponent;
          _getAssignableGuard(type: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle;
          _getClassGuard(type: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle;
          _getClassGuardedInvocationComponent(invocation: java.lang.invoke.MethodHandle, type: java.lang.invoke.MethodType): GuardedInvocationComponent;
          _getConstructorMethod(a0: string): SingleDynamicMethod;
          _getDynamicMethod(methodName: string, methodMap: java.util.Map<string,DynamicMethod>): DynamicMethod;
          _getDynamicMethod(name: any): any;
          _getDynamicMethod(name: string): DynamicMethod;
          _getDynamicMethodInvocation(callSiteDescriptor: CallSiteDescriptor, linkerServices: dynalink.linker.LinkerServices, methodName: string, methodMap: java.util.Map<string,DynamicMethod>): java.lang.invoke.MethodHandle;
          _getExplicitSignatureDynamicMethod(fullName: string, methodsMap: java.util.Map<string,DynamicMethod>): SingleDynamicMethod;
          _getGuard(validationType: GuardedInvocationComponent$ValidationType, methodType: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle;
          getGuardedInvocation(request: dynalink.linker.LinkRequest, linkerServices: dynalink.linker.LinkerServices): dynalink.linker.GuardedInvocation;
          _getGuardedInvocationComponent(req: AbstractJavaLinker$ComponentLinkRequest): GuardedInvocationComponent;
          _getMethodGetter(req: AbstractJavaLinker$ComponentLinkRequest): GuardedInvocationComponent;
          _getMethodNames(): java.util.Set<string>;
          _getNamedMethodGetter(req: AbstractJavaLinker$ComponentLinkRequest): GuardedInvocationComponent;
          _getNamedPropertyGetter(req: AbstractJavaLinker$ComponentLinkRequest): GuardedInvocationComponent;
          _getNamedPropertySetter(req: AbstractJavaLinker$ComponentLinkRequest): GuardedInvocationComponent;
          _getNextComponent(req: AbstractJavaLinker$ComponentLinkRequest): GuardedInvocationComponent;
          _getPropertyGetter(req: AbstractJavaLinker$ComponentLinkRequest): GuardedInvocationComponent;
          _getPropertyGetterHandle(id: any): any;
          _getPropertySetter(req: AbstractJavaLinker$ComponentLinkRequest): GuardedInvocationComponent;
          _getPropertySetterHandle(setterDescriptor: CallSiteDescriptor, linkerServices: dynalink.linker.LinkerServices, id: any): java.lang.invoke.MethodHandle;
          _getReadablePropertyNames(): java.util.Set<string>;
          _getUnnamedMethodGetter(req: AbstractJavaLinker$ComponentLinkRequest): GuardedInvocationComponent;
          _getUnnamedPropertyGetter(req: AbstractJavaLinker$ComponentLinkRequest): GuardedInvocationComponent;
          _getUnnamedPropertySetter(req: AbstractJavaLinker$ComponentLinkRequest): GuardedInvocationComponent;
          _getWritablePropertyNames(): java.util.Set<string>;
          _setPropertyGetter(name: string, handle: SingleDynamicMethod, validationType: GuardedInvocationComponent$ValidationType): void;
          _setPropertyGetter(getter: java.lang.reflect.Method, prefixLen: int): void;
          _setPropertyGetter(name: string, handle: java.lang.invoke.MethodHandle, validationType: GuardedInvocationComponent$ValidationType): void;
          _assignableGuard: java.lang.invoke.MethodHandle;
          _classGuard: java.lang.invoke.MethodHandle;
          _clazz: java.lang.Class<any>;
          _getDynamicMethod: java.lang.invoke.MethodHandle;
          _getPropertyGetterHandle: java.lang.invoke.MethodHandle;
          _getPropertySetterHandle: java.lang.invoke.MethodHandle;
          _methods: java.util.Map<string,DynamicMethod>;
          _propertyGetters: java.util.Map<string,AbstractJavaLinker$AnnotatedDynamicMethod>;
          _propertySetters: java.util.Map<string,DynamicMethod>;
        }
        interface AbstractJavaLinker extends CombineTypes<[_AbstractJavaLinker, jdk.dynalink.linker.GuardingDynamicLinker, java.lang.Object]> {}
        interface _AbstractJavaLinker$AnnotatedDynamicMethod$$static extends ClassLike {
          _new(method: SingleDynamicMethod, validationType: GuardedInvocationComponent$ValidationType): AbstractJavaLinker$AnnotatedDynamicMethod;
        }
        let AbstractJavaLinker$AnnotatedDynamicMethod: _AbstractJavaLinker$AnnotatedDynamicMethod$$static;
        interface _AbstractJavaLinker$AnnotatedDynamicMethod {
          _getInvocation(req: AbstractJavaLinker$ComponentLinkRequest): java.lang.invoke.MethodHandle;
          _getTarget(desc: CallSiteDescriptor, linkerServices: dynalink.linker.LinkerServices): java.lang.invoke.MethodHandle;
          _method: SingleDynamicMethod;
          _validationType: GuardedInvocationComponent$ValidationType;
        }
        interface AbstractJavaLinker$AnnotatedDynamicMethod extends CombineTypes<[_AbstractJavaLinker$AnnotatedDynamicMethod, java.lang.Object]> {}
        interface _AbstractJavaLinker$ComponentLinkRequest$$static extends ClassLike {
          _new(linkRequest: dynalink.linker.LinkRequest, linkerServices: dynalink.linker.LinkerServices, missingMemberHandlerFactory: MissingMemberHandlerFactory): AbstractJavaLinker$ComponentLinkRequest;
        }
        let AbstractJavaLinker$ComponentLinkRequest: _AbstractJavaLinker$ComponentLinkRequest$$static;
        interface _AbstractJavaLinker$ComponentLinkRequest {
          _getDescriptor(): CallSiteDescriptor;
          _popNamespace(): AbstractJavaLinker$ComponentLinkRequest;
          _baseOperation: Operation;
          _linkRequest: dynalink.linker.LinkRequest;
          _linkerServices: dynalink.linker.LinkerServices;
          _missingMemberHandlerFactory: MissingMemberHandlerFactory;
          _name: any;
          _namespaces: java.util.List<Namespace>;
        }
        interface AbstractJavaLinker$ComponentLinkRequest extends CombineTypes<[_AbstractJavaLinker$ComponentLinkRequest, java.lang.Object]> {}
        interface _AbstractJavaLinker$MethodPair$$static extends ClassLike {
          _new(method1: java.lang.invoke.MethodHandle, method2: java.lang.invoke.MethodHandle): AbstractJavaLinker$MethodPair;
        }
        let AbstractJavaLinker$MethodPair: _AbstractJavaLinker$MethodPair$$static;
        interface _AbstractJavaLinker$MethodPair {
          _guardWithTest(test: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle;
          _method1: java.lang.invoke.MethodHandle;
          _method2: java.lang.invoke.MethodHandle;
        }
        interface AbstractJavaLinker$MethodPair extends CombineTypes<[_AbstractJavaLinker$MethodPair, java.lang.Object]> {}
        interface _AccessibleMembersLookup$$static extends ClassLike {
          _new(clazz: java.lang.Class<any>, instance: boolean): AccessibleMembersLookup;
        }
        let AccessibleMembersLookup: _AccessibleMembersLookup$$static;
        interface _AccessibleMembersLookup {
          _getAccessibleMethod(m: java.lang.reflect.Method): java.lang.reflect.Method;
          _getInnerClasses(): java.lang.Class<any>[];
          _getMethods(): java.util.Collection<java.lang.reflect.Method>;
          _lookupAccessibleMembers(clazz: java.lang.Class<any>): void;
          _innerClasses: java.util.Map<string,java.lang.Class<any>>;
          _instance: boolean;
          _methods: java.util.Map<AccessibleMembersLookup$MethodSignature,java.lang.reflect.Method>;
        }
        interface AccessibleMembersLookup extends CombineTypes<[_AccessibleMembersLookup, java.lang.Object]> {}
        interface _AccessibleMembersLookup$MethodSignature$$static extends ClassLike {
          _new(name: string, args: java.lang.Class<any>[]): AccessibleMembersLookup$MethodSignature;
          _new(method: java.lang.reflect.Method): AccessibleMembersLookup$MethodSignature;
        }
        let AccessibleMembersLookup$MethodSignature: _AccessibleMembersLookup$MethodSignature$$static;
        interface _AccessibleMembersLookup$MethodSignature {
          equals(o: any): boolean;
          hashCode(): int;
          toString(): string;
          _args: java.lang.Class<any>[];
          _name: string;
        }
        interface AccessibleMembersLookup$MethodSignature extends CombineTypes<[_AccessibleMembersLookup$MethodSignature, java.lang.Object]> {}
        interface _ApplicableOverloadedMethods$$static extends ClassLike {
          _APPLICABLE_BY_METHOD_INVOCATION_CONVERSION: ApplicableOverloadedMethods$ApplicabilityTest;
          _APPLICABLE_BY_SUBTYPING: ApplicableOverloadedMethods$ApplicabilityTest;
          _APPLICABLE_BY_VARIABLE_ARITY: ApplicableOverloadedMethods$ApplicabilityTest;
          _new(methods: java.util.List<SingleDynamicMethod>, callSiteType: java.lang.invoke.MethodType, test: ApplicableOverloadedMethods$ApplicabilityTest): ApplicableOverloadedMethods;
        }
        let ApplicableOverloadedMethods: _ApplicableOverloadedMethods$$static;
        interface _ApplicableOverloadedMethods {
          _findMaximallySpecificMethods(): java.util.List<SingleDynamicMethod>;
          _getMethods(): java.util.List<SingleDynamicMethod>;
          _methods: java.util.List<SingleDynamicMethod>;
          _varArgs: boolean;
        }
        interface ApplicableOverloadedMethods extends CombineTypes<[_ApplicableOverloadedMethods, java.lang.Object]> {}
        interface _ApplicableOverloadedMethods$ApplicabilityTest$$static extends ClassLike {
          _new(): ApplicableOverloadedMethods$ApplicabilityTest;
        }
        let ApplicableOverloadedMethods$ApplicabilityTest: _ApplicableOverloadedMethods$ApplicabilityTest$$static;
        interface _ApplicableOverloadedMethods$ApplicabilityTest {
          _isApplicable(a0: java.lang.invoke.MethodType, a1: SingleDynamicMethod): boolean;
(a0: java.lang.invoke.MethodType, a1: SingleDynamicMethod): boolean;
        }
        interface ApplicableOverloadedMethods$ApplicabilityTest extends CombineTypes<[_ApplicableOverloadedMethods$ApplicabilityTest, java.lang.Object]> {}
        interface _BeanIntrospector$$static extends ClassLike {
          _new(clazz: java.lang.Class<any>): BeanIntrospector;
        }
        let BeanIntrospector: _BeanIntrospector$$static;
        interface _BeanIntrospector {
          _editMethodHandle(mh: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle;
          _getInnerClassGetters(): java.util.Map<string,java.lang.invoke.MethodHandle>;
          _getRecordComponentGetters(): java.util.Collection<java.lang.reflect.Method>;
          _clazz: java.lang.Class<any>;
        }
        interface BeanIntrospector extends CombineTypes<[_BeanIntrospector, jdk.dynalink.beans.FacetIntrospector]> {}
        interface _BeanLinker$$static extends ClassLike {
          _assertParameterCount(descriptor: CallSiteDescriptor, paramCount: int): void;
          _convertKeyToInteger(fixedKey: any, linkerServices: dynalink.linker.LinkerServices): int;
          _createGuardedInvocationComponentAsType(invocation: java.lang.invoke.MethodHandle, fromType: java.lang.invoke.MethodType, linkerServices: dynalink.linker.LinkerServices): GuardedInvocationComponent;
          _createInternalFilteredGuardedInvocationComponent(invocation: java.lang.invoke.MethodHandle, linkerServices: dynalink.linker.LinkerServices): GuardedInvocationComponent;
          _createInternalFilteredGuardedInvocationComponent(invocation: java.lang.invoke.MethodHandle, guard: java.lang.invoke.MethodHandle, validatorClass: java.lang.Class<any>, validationType: GuardedInvocationComponent$ValidationType, linkerServices: dynalink.linker.LinkerServices): GuardedInvocationComponent;
          _dropObjectArguments(m: java.lang.invoke.MethodHandle, n: int): java.lang.invoke.MethodHandle;
          _findRangeCheck(collectionType: java.lang.Class<any>): java.lang.invoke.MethodHandle;
          _getTypedName(name: any, isMap: boolean, linkerServices: dynalink.linker.LinkerServices): any;
          _guardComponentWithRangeCheck(gicact: BeanLinker$GuardedInvocationComponentAndCollectionType, callSiteType: java.lang.invoke.MethodType, nextComponent: GuardedInvocationComponent, binder: BeanLinker$Binder, noOp: java.lang.invoke.MethodHandle): GuardedInvocationComponent;
          _noOp(): void;
          _rangeCheck(array: any, index: any): boolean;
          _rangeCheck(list: java.util.List<any>, index: any): boolean;
          _CONTAINS_MAP: java.lang.invoke.MethodHandle;
          _GET_ARRAY_LENGTH: java.lang.invoke.MethodHandle;
          _GET_COLLECTION_LENGTH: java.lang.invoke.MethodHandle;
          _GET_LIST_ELEMENT: java.lang.invoke.MethodHandle;
          _GET_MAP_ELEMENT: java.lang.invoke.MethodHandle;
          _GET_MAP_LENGTH: java.lang.invoke.MethodHandle;
          _INVALID_NAME: any;
          _LIST_GUARD: java.lang.invoke.MethodHandle;
          _MAP_GUARD: java.lang.invoke.MethodHandle;
          _NO_OP_1: java.lang.invoke.MethodHandle;
          _NO_OP_2: java.lang.invoke.MethodHandle;
          _NO_OP_3: java.lang.invoke.MethodHandle;
          _NULL_GETTER_1: java.lang.invoke.MethodHandle;
          _NULL_GETTER_2: java.lang.invoke.MethodHandle;
          _PUT_MAP_ELEMENT: java.lang.invoke.MethodHandle;
          _RANGE_CHECK_ARRAY: java.lang.invoke.MethodHandle;
          _RANGE_CHECK_LIST: java.lang.invoke.MethodHandle;
          _REMOVE_LIST_ELEMENT: java.lang.invoke.MethodHandle;
          _REMOVE_MAP_ELEMENT: java.lang.invoke.MethodHandle;
          _SET_LIST_ELEMENT: java.lang.invoke.MethodHandle;
          _new(clazz: java.lang.Class<any>): BeanLinker;
        }
        let BeanLinker: _BeanLinker$$static;
        interface _BeanLinker {
          canLinkType(type: java.lang.Class<any>): boolean;
          _createFacetIntrospector(): FacetIntrospector;
          _getConstructorMethod(signature: string): SingleDynamicMethod;
          _getElementGetter(req: AbstractJavaLinker$ComponentLinkRequest): GuardedInvocationComponent;
          _getElementRemover(req: AbstractJavaLinker$ComponentLinkRequest): GuardedInvocationComponent;
          _getElementSetter(req: AbstractJavaLinker$ComponentLinkRequest): GuardedInvocationComponent;
          _getGuardedInvocationComponent(req: AbstractJavaLinker$ComponentLinkRequest): GuardedInvocationComponent;
          _guardedInvocationComponentAndCollectionType(callSiteType: java.lang.invoke.MethodType, linkerServices: dynalink.linker.LinkerServices, arrayMethod: java.util.function.Function<java.lang.Class<any>,java.lang.invoke.MethodHandle>, listMethod: java.lang.invoke.MethodHandle, mapMethod: java.lang.invoke.MethodHandle): BeanLinker$GuardedInvocationComponentAndCollectionType;
        }
        interface BeanLinker extends CombineTypes<[_BeanLinker, jdk.dynalink.linker.TypeBasedGuardingDynamicLinker, jdk.dynalink.beans.AbstractJavaLinker]> {}
        interface _BeanLinker$Binder$$static extends ClassLike {
          _new(linkerServices: dynalink.linker.LinkerServices, methodType: java.lang.invoke.MethodType, fixedKey: any): BeanLinker$Binder;
        }
        let BeanLinker$Binder: _BeanLinker$Binder$$static;
        interface _BeanLinker$Binder {
          _bind(handle: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle;
          _bindTest(handle: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle;
          _bindToFixedKey(handle: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle;
          _convertArgToNumber(mh: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle;
          _fixedKey: any;
          _linkerServices: dynalink.linker.LinkerServices;
          _methodType: java.lang.invoke.MethodType;
        }
        interface BeanLinker$Binder extends CombineTypes<[_BeanLinker$Binder, java.lang.Object]> {}
        interface _BeanLinker$CollectionType$$static extends ClassLike {
          valueOf(name: string): BeanLinker$CollectionType;
          values(): BeanLinker$CollectionType[];
          readonly ARRAY: BeanLinker$CollectionType;
          readonly LIST: BeanLinker$CollectionType;
          readonly MAP: BeanLinker$CollectionType;
        }
        let BeanLinker$CollectionType: _BeanLinker$CollectionType$$static;
        interface _BeanLinker$CollectionType {
        }
        interface BeanLinker$CollectionType extends CombineTypes<[_BeanLinker$CollectionType]> {}
        interface _BeanLinker$GuardedInvocationComponentAndCollectionType$$static extends ClassLike {
          _new(gic: GuardedInvocationComponent, collectionType: BeanLinker$CollectionType): BeanLinker$GuardedInvocationComponentAndCollectionType;
        }
        let BeanLinker$GuardedInvocationComponentAndCollectionType: _BeanLinker$GuardedInvocationComponentAndCollectionType$$static;
        interface _BeanLinker$GuardedInvocationComponentAndCollectionType {
          _collectionType: BeanLinker$CollectionType;
          _gic: GuardedInvocationComponent;
        }
        interface BeanLinker$GuardedInvocationComponentAndCollectionType extends CombineTypes<[_BeanLinker$GuardedInvocationComponentAndCollectionType, java.lang.Object]> {}
        interface _BeansLinker$$static extends ClassLike {
          getConstructorMethod(clazz: java.lang.Class<any>, signature: string): any;
          getInstanceMethodNames(clazz: java.lang.Class<any>): java.util.Set<string>;
          getReadableInstancePropertyNames(clazz: java.lang.Class<any>): java.util.Set<string>;
          getReadableStaticPropertyNames(clazz: java.lang.Class<any>): java.util.Set<string>;
          _getStaticLinkerForClass(clazz: java.lang.Class<any>): dynalink.linker.TypeBasedGuardingDynamicLinker;
          getStaticMethodNames(clazz: java.lang.Class<any>): java.util.Set<string>;
          getWritableInstancePropertyNames(clazz: java.lang.Class<any>): java.util.Set<string>;
          getWritableStaticPropertyNames(clazz: java.lang.Class<any>): java.util.Set<string>;
          isDynamicConstructor(obj: any): boolean;
          isDynamicMethod(obj: any): boolean;
          _linkers: java.lang.ClassValue<dynalink.linker.TypeBasedGuardingDynamicLinker>;
          new(): BeansLinker;
          new(missingMemberHandlerFactory: MissingMemberHandlerFactory): BeansLinker;
        }
        let BeansLinker: _BeansLinker$$static;
        interface _BeansLinker {
          getGuardedInvocation(request: dynalink.linker.LinkRequest, linkerServices: dynalink.linker.LinkerServices): dynalink.linker.GuardedInvocation;
          getLinkerForClass(clazz: java.lang.Class<any>): dynalink.linker.TypeBasedGuardingDynamicLinker;
          _missingMemberHandlerFactory: MissingMemberHandlerFactory;
        }
        interface BeansLinker extends CombineTypes<[_BeansLinker, jdk.dynalink.linker.GuardingDynamicLinker, java.lang.Object]> {}
        interface _BeansLinker$NoSuchMemberHandlerBindingLinker$$static extends ClassLike {
          _new(linker: dynalink.linker.TypeBasedGuardingDynamicLinker, missingMemberHandlerFactory: MissingMemberHandlerFactory): BeansLinker$NoSuchMemberHandlerBindingLinker;
        }
        let BeansLinker$NoSuchMemberHandlerBindingLinker: _BeansLinker$NoSuchMemberHandlerBindingLinker$$static;
        interface _BeansLinker$NoSuchMemberHandlerBindingLinker {
          canLinkType(type: java.lang.Class<any>): boolean;
          getGuardedInvocation(linkRequest: dynalink.linker.LinkRequest, linkerServices: dynalink.linker.LinkerServices): dynalink.linker.GuardedInvocation;
          _linker: dynalink.linker.TypeBasedGuardingDynamicLinker;
          _missingMemberHandlerFactory: MissingMemberHandlerFactory;
        }
        interface BeansLinker$NoSuchMemberHandlerBindingLinker extends CombineTypes<[_BeansLinker$NoSuchMemberHandlerBindingLinker, java.lang.Object, jdk.dynalink.linker.TypeBasedGuardingDynamicLinker]> {}
        interface _CallerSensitiveDynamicMethod$$static extends ClassLike {
          _getMethodType(m: java.lang.reflect.Executable): java.lang.invoke.MethodType;
          _getName(m: java.lang.reflect.Executable): string;
          _unreflect(lookup: java.lang.invoke.MethodHandles$Lookup, m: java.lang.reflect.Method): java.lang.invoke.MethodHandle;
          _unreflectConstructor(lookup: java.lang.invoke.MethodHandles$Lookup, c: java.lang.reflect.Constructor<any>): java.lang.invoke.MethodHandle;
          _GET_LOOKUP_CONTEXT: java.security.AccessControlContext;
          _new(target: java.lang.reflect.Executable): CallerSensitiveDynamicMethod;
        }
        let CallerSensitiveDynamicMethod: _CallerSensitiveDynamicMethod$$static;
        interface _CallerSensitiveDynamicMethod {
          _getMethodType(): java.lang.invoke.MethodType;
          _getTarget(desc: CallSiteDescriptor): java.lang.invoke.MethodHandle;
          _isConstructor(): boolean;
          _isVarArgs(): boolean;
          _target: java.lang.reflect.Executable;
          _type: java.lang.invoke.MethodType;
        }
        interface CallerSensitiveDynamicMethod extends CombineTypes<[_CallerSensitiveDynamicMethod, jdk.dynalink.beans.SingleDynamicMethod]> {}
        interface _CheckRestrictedPackage$$static extends ClassLike {
          _isRestrictedClass(clazz: java.lang.Class<any>): boolean;
          _NO_PERMISSIONS_CONTEXT: java.security.AccessControlContext;
          _new(): CheckRestrictedPackage;
        }
        let CheckRestrictedPackage: _CheckRestrictedPackage$$static;
        interface _CheckRestrictedPackage {
        }
        interface CheckRestrictedPackage extends CombineTypes<[_CheckRestrictedPackage, java.lang.Object]> {}
        interface _ClassLinker$$static extends ClassLike {
          _FOR_CLASS: java.lang.invoke.MethodHandle;
          _new(): ClassLinker;
        }
        let ClassLinker: _ClassLinker$$static;
        interface _ClassLinker {
        }
        interface ClassLinker extends CombineTypes<[_ClassLinker, jdk.dynalink.beans.BeanLinker]> {}
        interface _ClassString$$static extends ClassLike {
          _canConvert(ls: dynalink.linker.LinkerServices, from: java.lang.Class<any>, to: java.lang.Class<any>): boolean;
          _GET_CLASS_LOADER_CONTEXT: java.security.AccessControlContext;
          _NULL_CLASS: java.lang.Class<any>;
          _new(classes: java.lang.Class<any>[]): ClassString;
        }
        let ClassString: _ClassString$$static;
        interface _ClassString {
          equals(other: any): boolean;
          _getApplicables(methods: java.util.List<java.lang.invoke.MethodHandle>, linkerServices: dynalink.linker.LinkerServices, varArg: boolean): java.util.LinkedList<java.lang.invoke.MethodHandle>;
          _getMaximallySpecifics(methods: java.util.List<java.lang.invoke.MethodHandle>, linkerServices: dynalink.linker.LinkerServices, varArg: boolean): java.util.List<java.lang.invoke.MethodHandle>;
          hashCode(): int;
          _isApplicable(method: java.lang.invoke.MethodHandle, linkerServices: dynalink.linker.LinkerServices, varArg: boolean): boolean;
          _isVisibleFrom(classLoader: java.lang.ClassLoader): boolean;
          toString(): string;
          _classes: java.lang.Class<any>[];
          _hashCode: int;
        }
        interface ClassString extends CombineTypes<[_ClassString, java.lang.Object]> {}
        interface _DynamicMethod$$static extends ClassLike {
          _getClassAndMethodName(clazz: java.lang.Class<any>, name: string): string;
          _new(name: string): DynamicMethod;
        }
        let DynamicMethod: _DynamicMethod$$static;
        interface _DynamicMethod {
          _contains(a0: SingleDynamicMethod): boolean;
          _getInvocation(a0: CallSiteDescriptor, a1: dynalink.linker.LinkerServices): java.lang.invoke.MethodHandle;
          _getMethodForExactParamTypes(a0: string): SingleDynamicMethod;
          _getName(): string;
          _isConstructor(): boolean;
          toString(): string;
          _name: string;
        }
        interface DynamicMethod extends CombineTypes<[_DynamicMethod, java.lang.Object]> {}
        interface _DynamicMethodLinker$$static extends ClassLike {
          _new(): DynamicMethodLinker;
        }
        let DynamicMethodLinker: _DynamicMethodLinker$$static;
        interface _DynamicMethodLinker {
          canLinkType(type: java.lang.Class<any>): boolean;
          getGuardedInvocation(linkRequest: dynalink.linker.LinkRequest, linkerServices: dynalink.linker.LinkerServices): dynalink.linker.GuardedInvocation;
        }
        interface DynamicMethodLinker extends CombineTypes<[_DynamicMethodLinker, java.lang.Object, jdk.dynalink.linker.TypeBasedGuardingDynamicLinker]> {}
        interface _FacetIntrospector$$static extends ClassLike {
          _new(clazz: java.lang.Class<any>, instance: boolean): FacetIntrospector;
        }
        let FacetIntrospector: _FacetIntrospector$$static;
        interface _FacetIntrospector {
          _editMethodHandle(a0: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle;
          _getFields(): java.util.Collection<java.lang.reflect.Field>;
          _getInnerClassGetters(): java.util.Map<string,java.lang.invoke.MethodHandle>;
          _getMethods(): java.util.Collection<java.lang.reflect.Method>;
          _getRecordComponentGetters(): java.util.Collection<java.lang.reflect.Method>;
          _isAccessible(m: java.lang.reflect.Member): boolean;
          _unreflectGetter(field: java.lang.reflect.Field): java.lang.invoke.MethodHandle;
          _unreflectSetter(field: java.lang.reflect.Field): java.lang.invoke.MethodHandle;
          _clazz: java.lang.Class<any>;
          _instance: boolean;
          _isRestricted: boolean;
          _membersLookup: AccessibleMembersLookup;
        }
        interface FacetIntrospector extends CombineTypes<[_FacetIntrospector, java.lang.Object]> {}
        interface _GuardedInvocationComponent$$static extends ClassLike {
          _new(invocation: java.lang.invoke.MethodHandle): GuardedInvocationComponent;
          _new(invocation: java.lang.invoke.MethodHandle, guard: java.lang.invoke.MethodHandle, validationType: GuardedInvocationComponent$ValidationType): GuardedInvocationComponent;
          _new(invocation: java.lang.invoke.MethodHandle, guard: java.lang.invoke.MethodHandle, validatorClass: java.lang.Class<any>, validationType: GuardedInvocationComponent$ValidationType): GuardedInvocationComponent;
          _new(guardedInvocation: dynalink.linker.GuardedInvocation, validatorClass: java.lang.Class<any>, validationType: GuardedInvocationComponent$ValidationType): GuardedInvocationComponent;
        }
        let GuardedInvocationComponent: _GuardedInvocationComponent$$static;
        interface _GuardedInvocationComponent {
          _compose(compositeInvocation: java.lang.invoke.MethodHandle, otherGuard: java.lang.invoke.MethodHandle, otherValidatorClass: java.lang.Class<any>, otherValidationType: GuardedInvocationComponent$ValidationType): GuardedInvocationComponent;
          _getGuardedInvocation(): dynalink.linker.GuardedInvocation;
          _getValidationType(): GuardedInvocationComponent$ValidationType;
          _getValidatorClass(): java.lang.Class<any>;
          _replaceInvocation(newInvocation: java.lang.invoke.MethodHandle): GuardedInvocationComponent;
          _replaceInvocation(newInvocation: java.lang.invoke.MethodHandle, newGuard: java.lang.invoke.MethodHandle): GuardedInvocationComponent;
          _guardedInvocation: dynalink.linker.GuardedInvocation;
          _validator: GuardedInvocationComponent$Validator;
        }
        interface GuardedInvocationComponent extends CombineTypes<[_GuardedInvocationComponent, java.lang.Object]> {}
        interface _GuardedInvocationComponent$ValidationType$$static extends ClassLike {
          valueOf(name: string): GuardedInvocationComponent$ValidationType;
          values(): GuardedInvocationComponent$ValidationType[];
          readonly EXACT_CLASS: GuardedInvocationComponent$ValidationType;
          readonly INSTANCE_OF: GuardedInvocationComponent$ValidationType;
          readonly IS_ARRAY: GuardedInvocationComponent$ValidationType;
          readonly NONE: GuardedInvocationComponent$ValidationType;
        }
        let GuardedInvocationComponent$ValidationType: _GuardedInvocationComponent$ValidationType$$static;
        interface _GuardedInvocationComponent$ValidationType {
        }
        interface GuardedInvocationComponent$ValidationType extends CombineTypes<[_GuardedInvocationComponent$ValidationType]> {}
        interface _GuardedInvocationComponent$Validator$$static extends ClassLike {
          _new(validatorClass: java.lang.Class<any>, validationType: GuardedInvocationComponent$ValidationType): GuardedInvocationComponent$Validator;
        }
        let GuardedInvocationComponent$Validator: _GuardedInvocationComponent$Validator$$static;
        interface _GuardedInvocationComponent$Validator {
          _compose(other: GuardedInvocationComponent$Validator): GuardedInvocationComponent$Validator;
          _isAssignableFrom(other: GuardedInvocationComponent$Validator): boolean;
          toString(): string;
          _validationType: GuardedInvocationComponent$ValidationType;
          _validatorClass: java.lang.Class<any>;
        }
        interface GuardedInvocationComponent$Validator extends CombineTypes<[_GuardedInvocationComponent$Validator, java.lang.Object]> {}
        interface _LinkerServicesWithMissingMemberHandlerFactory$$static extends ClassLike {
          _get(linkerServices: dynalink.linker.LinkerServices, missingMemberHandlerFactory: MissingMemberHandlerFactory): dynalink.linker.LinkerServices;
        }
        let LinkerServicesWithMissingMemberHandlerFactory: _LinkerServicesWithMissingMemberHandlerFactory$$static;
        interface _LinkerServicesWithMissingMemberHandlerFactory {
          asType(handle: java.lang.invoke.MethodHandle, fromType: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle;
          canConvert(from: java.lang.Class<any>, to: java.lang.Class<any>): boolean;
          compareConversion(sourceType: java.lang.Class<any>, targetType1: java.lang.Class<any>, targetType2: java.lang.Class<any>): dynalink.linker.ConversionComparator$Comparison;
          filterInternalObjects(target: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle;
          getGuardedInvocation(linkRequest: dynalink.linker.LinkRequest): dynalink.linker.GuardedInvocation;
          getTypeConverter(sourceType: java.lang.Class<any>, targetType: java.lang.Class<any>): java.lang.invoke.MethodHandle;
          getWithLookup<T>(operation: java.util.function.Supplier<T>, lookupSupplier: SecureLookupSupplier): T;
          _linkerServices: dynalink.linker.LinkerServices;
          _missingMemberHandlerFactory: MissingMemberHandlerFactory;
        }
        interface LinkerServicesWithMissingMemberHandlerFactory extends CombineTypes<[_LinkerServicesWithMissingMemberHandlerFactory, jdk.dynalink.linker.LinkerServices, java.lang.Object]> {}
        interface _MaximallySpecific$$static extends ClassLike {
          _compare(c1: java.lang.Class<any>, c2: java.lang.Class<any>, argTypes: java.lang.Class<any>[], i: int, cmp: dynalink.linker.LinkerServices): dynalink.linker.ConversionComparator$Comparison;
          _getMaximallySpecificMethodHandles(methods: java.util.List<java.lang.invoke.MethodHandle>, varArgs: boolean, argTypes: java.lang.Class<any>[], ls: dynalink.linker.LinkerServices): java.util.List<java.lang.invoke.MethodHandle>;
          _getMaximallySpecificMethods(methods: java.util.List<SingleDynamicMethod>, varArgs: boolean): java.util.List<SingleDynamicMethod>;
          _getMaximallySpecificMethods<T>(methods: java.util.List<T>, varArgs: boolean, argTypes: java.lang.Class<any>[], ls: dynalink.linker.LinkerServices, methodTypeGetter: java.util.function.Function<T,java.lang.invoke.MethodType>): java.util.List<T>;
          _getParameterClass(t: java.lang.invoke.MethodType, l: int, i: int, varArgs: boolean): java.lang.Class<any>;
          _isMoreSpecific(t1: java.lang.invoke.MethodType, t2: java.lang.invoke.MethodType, varArgs: boolean, argTypes: java.lang.Class<any>[], ls: dynalink.linker.LinkerServices): dynalink.linker.ConversionComparator$Comparison;
          _new(): MaximallySpecific;
        }
        let MaximallySpecific: _MaximallySpecific$$static;
        interface _MaximallySpecific {
        }
        interface MaximallySpecific extends CombineTypes<[_MaximallySpecific, java.lang.Object]> {}
        interface _MissingMemberHandlerFactory$$static extends ClassLike {
        }
        let MissingMemberHandlerFactory: _MissingMemberHandlerFactory$$static;
        interface _MissingMemberHandlerFactory {
          createMissingMemberHandler(a0: dynalink.linker.LinkRequest, a1: dynalink.linker.LinkerServices): java.lang.invoke.MethodHandle;
(a0: dynalink.linker.LinkRequest, a1: dynalink.linker.LinkerServices): java.lang.invoke.MethodHandle;
        }
        interface MissingMemberHandlerFactory extends CombineTypes<[_MissingMemberHandlerFactory, java.lang.Object]> {}
        interface _OverloadedDynamicMethod$$static extends ClassLike {
          _addClassHierarchy(map: java.util.Map<java.lang.Class<any>,java.lang.Class<any>>, clazz: java.lang.Class<any>): void;
          _createPrimitiveWrapperTypes(): java.util.Set<java.lang.Class<any>>;
          _getCallSiteClassLoader(callSiteDescriptor: CallSiteDescriptor): java.lang.ClassLoader;
          _isApplicableDynamically(linkerServices: dynalink.linker.LinkerServices, callSiteType: java.lang.invoke.MethodType, m: SingleDynamicMethod): boolean;
          _isApplicableDynamically(linkerServices: dynalink.linker.LinkerServices, callSiteType: java.lang.Class<any>, methodType: java.lang.Class<any>): boolean;
          _isAssignableFromBoxedPrimitive(clazz: java.lang.Class<any>): boolean;
          _isPotentiallyConvertible(callSiteType: java.lang.Class<any>, methodType: java.lang.Class<any>): boolean;
          _GET_CALL_SITE_CLASS_LOADER_CONTEXT: java.security.AccessControlContext;
          _PRIMITIVE_WRAPPER_TYPES: java.util.Set<java.lang.Class<any>>;
          _new(clazz: java.lang.Class<any>, name: string): OverloadedDynamicMethod;
        }
        let OverloadedDynamicMethod: _OverloadedDynamicMethod$$static;
        interface _OverloadedDynamicMethod {
          addMethod(method: SingleDynamicMethod): void;
          _constructorFlagConsistent(method: SingleDynamicMethod): boolean;
          contains(m: SingleDynamicMethod): boolean;
          _getApplicables(callSiteType: java.lang.invoke.MethodType, test: ApplicableOverloadedMethods$ApplicabilityTest): ApplicableOverloadedMethods;
          _getInvocation(callSiteDescriptor: CallSiteDescriptor, linkerServices: dynalink.linker.LinkerServices): java.lang.invoke.MethodHandle;
          _getMethodForExactParamTypes(paramTypes: string): SingleDynamicMethod;
          isConstructor(): boolean;
          toString(): string;
          _methods: java.util.LinkedList<SingleDynamicMethod>;
        }
        interface OverloadedDynamicMethod extends CombineTypes<[_OverloadedDynamicMethod, jdk.dynalink.beans.DynamicMethod]> {}
        interface _OverloadedMethod$$static extends ClassLike {
          _appendSig(b: OverloadedMethod$stringBuilder, m: java.lang.invoke.MethodHandle): void;
          _appendTypes(b: OverloadedMethod$stringBuilder, classes: java.lang.Class<any>[], varArg: boolean): void;
          _argTypesString(classes: java.lang.Class<any>[]): string;
          _getCommonReturnType(methodHandles: java.util.List<java.lang.invoke.MethodHandle>): java.lang.Class<any>;
          _getSignatureList(methods: java.util.List<java.lang.invoke.MethodHandle>): string;
          _SELECT_METHOD: java.lang.invoke.MethodHandle;
          _THROW_AMBIGUOUS_METHOD: java.lang.invoke.MethodHandle;
          _THROW_NO_SUCH_METHOD: java.lang.invoke.MethodHandle;
          _new(methodHandles: java.util.List<java.lang.invoke.MethodHandle>, parent: OverloadedDynamicMethod, callSiteClassLoader: java.lang.ClassLoader, callSiteType: java.lang.invoke.MethodType, linkerServices: dynalink.linker.LinkerServices, lookupSupplier: SecureLookupSupplier): OverloadedMethod;
        }
        let OverloadedMethod: _OverloadedMethod$$static;
        interface _OverloadedMethod {
          _adaptThrower(rawThrower: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle;
          _getAmbiguousMethodThrower(argTypes: java.lang.Class<any>[], methods: java.util.List<java.lang.invoke.MethodHandle>): java.lang.invoke.MethodHandle;
          _getInvoker(): java.lang.invoke.MethodHandle;
          _getNoSuchMethodThrower(argTypes: java.lang.Class<any>[]): java.lang.invoke.MethodHandle;
          _selectMethod(args: any[]): java.lang.invoke.MethodHandle;
          _throwAmbiguousMethod(argTypes: java.lang.Class<any>[], methods: java.util.List<java.lang.invoke.MethodHandle>): void;
          _throwNoSuchMethod(argTypes: java.lang.Class<any>[]): void;
          _argTypesToMethods: java.util.Map<ClassString,java.lang.invoke.MethodHandle>;
          _callSiteClassLoader: java.lang.ClassLoader;
          _callSiteType: java.lang.invoke.MethodType;
          _fixArgMethods: java.util.ArrayList<java.lang.invoke.MethodHandle>;
          _invoker: java.lang.invoke.MethodHandle;
          _linkerServices: dynalink.linker.LinkerServices;
          _lookupSupplier: SecureLookupSupplier;
          _parent: OverloadedDynamicMethod;
          _varArgMethods: java.util.ArrayList<java.lang.invoke.MethodHandle>;
        }
        interface OverloadedMethod extends CombineTypes<[_OverloadedMethod, java.lang.Object]> {}
        interface _SimpleDynamicMethod$$static extends ClassLike {
          _getName(target: java.lang.invoke.MethodHandle, clazz: java.lang.Class<any>, name: string, constructor: boolean): string;
          _new(target: java.lang.invoke.MethodHandle, clazz: java.lang.Class<any>, name: string): SimpleDynamicMethod;
          _new(target: java.lang.invoke.MethodHandle, clazz: java.lang.Class<any>, name: string, constructor: boolean): SimpleDynamicMethod;
        }
        let SimpleDynamicMethod: _SimpleDynamicMethod$$static;
        interface _SimpleDynamicMethod {
          _getMethodType(): java.lang.invoke.MethodType;
          _getTarget(desc: CallSiteDescriptor): java.lang.invoke.MethodHandle;
          _isConstructor(): boolean;
          _isVarArgs(): boolean;
          /** @renamed-from constructor */__constructor: boolean;
          _target: java.lang.invoke.MethodHandle;
          /** @renamed-to _constructor */_constructor: boolean;
        }
        interface SimpleDynamicMethod extends CombineTypes<[_SimpleDynamicMethod, jdk.dynalink.beans.SingleDynamicMethod]> {}
        interface _SingleDynamicMethod$$static extends ClassLike {
          _canConvertTo(linkerServices: dynalink.linker.LinkerServices, to: java.lang.Class<any>, obj: any): boolean;
          _collectArguments(target: java.lang.invoke.MethodHandle, parameterCount: int): java.lang.invoke.MethodHandle;
          _createConvertingInvocation(sizedMethod: java.lang.invoke.MethodHandle, linkerServices: dynalink.linker.LinkerServices, callSiteType: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle;
          _getInvocation(target: java.lang.invoke.MethodHandle, callSiteType: java.lang.invoke.MethodType, linkerServices: dynalink.linker.LinkerServices): java.lang.invoke.MethodHandle;
          _getMethodNameWithSignature(type: java.lang.invoke.MethodType, methodName: string, withReturnType: boolean): string;
          _typeMatchesDescription(paramTypes: string, type: java.lang.invoke.MethodType): boolean;
          _typeNameMatches(typeName: string, type: java.lang.Class<any>): boolean;
          _CAN_CONVERT_TO: java.lang.invoke.MethodHandle;
          _new(name: string): SingleDynamicMethod;
        }
        let SingleDynamicMethod: _SingleDynamicMethod$$static;
        interface _SingleDynamicMethod {
          _contains(method: SingleDynamicMethod): boolean;
          _getInvocation(callSiteDescriptor: CallSiteDescriptor, linkerServices: dynalink.linker.LinkerServices): java.lang.invoke.MethodHandle;
          _getMethodForExactParamTypes(paramTypes: string): SingleDynamicMethod;
          _getMethodType(): java.lang.invoke.MethodType;
          _getTarget(a0: CallSiteDescriptor): java.lang.invoke.MethodHandle;
          _isVarArgs(): boolean;
        }
        interface SingleDynamicMethod extends CombineTypes<[_SingleDynamicMethod, jdk.dynalink.beans.DynamicMethod]> {}
        interface _StaticClass$$static extends ClassLike {
          forClass(clazz: java.lang.Class<any>): StaticClass;
          _serialVersionUID: long;
          _staticClasses: java.lang.ClassValue<StaticClass>;
          _new(clazz: java.lang.Class<any>): StaticClass;
        }
        let StaticClass: _StaticClass$$static;
        interface _StaticClass {
          getRepresentedClass(): java.lang.Class<any>;
          _readResolve(): any;
          toString(): string;
          _clazz: java.lang.Class<any>;
        }
        interface StaticClass extends CombineTypes<[_StaticClass, java.lang.Object, java.io.Serializable]> {}
        interface _StaticClassIntrospector$$static extends ClassLike {
          _dropReceiver(mh: java.lang.invoke.MethodHandle, receiverClass: java.lang.Class<any>): java.lang.invoke.MethodHandle;
          _editConstructorMethodHandle(cmh: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle;
          _editStaticMethodHandle(mh: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle;
          _new(clazz: java.lang.Class<any>): StaticClassIntrospector;
        }
        let StaticClassIntrospector: _StaticClassIntrospector$$static;
        interface _StaticClassIntrospector {
          _editMethodHandle(mh: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle;
          _getInnerClassGetters(): java.util.Map<string,java.lang.invoke.MethodHandle>;
          _getRecordComponentGetters(): java.util.Collection<java.lang.reflect.Method>;
        }
        interface StaticClassIntrospector extends CombineTypes<[_StaticClassIntrospector, jdk.dynalink.beans.FacetIntrospector]> {}
        interface _StaticClassLinker$$static extends ClassLike {
          _getConstructorMethod(clazz: java.lang.Class<any>, signature: string): any;
          _getReadableStaticPropertyNames(clazz: java.lang.Class<any>): java.util.Set<string>;
          _getStaticMethodNames(clazz: java.lang.Class<any>): java.util.Set<string>;
          _getWritableStaticPropertyNames(clazz: java.lang.Class<any>): java.util.Set<string>;
          _isClass(clazz: java.lang.Class<any>, obj: any): boolean;
          _ARRAY_CTOR: java.lang.invoke.MethodHandle;
          _GET_CLASS: java.lang.invoke.MethodHandle;
          _IS_CLASS: java.lang.invoke.MethodHandle;
          _linkers: java.lang.ClassValue<StaticClassLinker$SingleClassStaticsLinker>;
          _new(): StaticClassLinker;
        }
        let StaticClassLinker: _StaticClassLinker$$static;
        interface _StaticClassLinker {
          canLinkType(type: java.lang.Class<any>): boolean;
          getGuardedInvocation(request: dynalink.linker.LinkRequest, linkerServices: dynalink.linker.LinkerServices): dynalink.linker.GuardedInvocation;
        }
        interface StaticClassLinker extends CombineTypes<[_StaticClassLinker, java.lang.Object, jdk.dynalink.linker.TypeBasedGuardingDynamicLinker]> {}
        interface _StaticClassLinker$SingleClassStaticsLinker$$static extends ClassLike {
          _createConstructorMethod(clazz: java.lang.Class<any>): DynamicMethod;
          _new(clazz: java.lang.Class<any>): StaticClassLinker$SingleClassStaticsLinker;
        }
        let StaticClassLinker$SingleClassStaticsLinker: _StaticClassLinker$SingleClassStaticsLinker$$static;
        interface _StaticClassLinker$SingleClassStaticsLinker {
          _createFacetIntrospector(): FacetIntrospector;
          _getConstructorMethod(signature: string): SingleDynamicMethod;
          getGuardedInvocation(request: dynalink.linker.LinkRequest, linkerServices: dynalink.linker.LinkerServices): dynalink.linker.GuardedInvocation;
          _getGuardedInvocationComponent(req: AbstractJavaLinker$ComponentLinkRequest): GuardedInvocationComponent;
          /** @renamed-from constructor */__constructor: DynamicMethod;
          /** @renamed-to _constructor */_constructor: DynamicMethod;
        }
        interface StaticClassLinker$SingleClassStaticsLinker extends CombineTypes<[_StaticClassLinker$SingleClassStaticsLinker, jdk.dynalink.beans.AbstractJavaLinker]> {}
      }
      module internal {
        interface _AccessControlContextFactory$$static extends ClassLike {
          createAccessControlContext(): java.security.AccessControlContext;
          createAccessControlContext(permissions: java.security.Permission[]): java.security.AccessControlContext;
          createAccessControlContext(...permissions: java.security.Permission[]): java.security.AccessControlContext;
          createAccessControlContext(runtimePermissionNames: string[]): java.security.AccessControlContext;
          createAccessControlContext(...runtimePermissionNames: string[]): java.security.AccessControlContext;
          _makeRuntimePermissions(runtimePermissionNames: string[]): java.security.Permission[];
          _makeRuntimePermissions(...runtimePermissionNames: string[]): java.security.Permission[];
        }
        let AccessControlContextFactory: _AccessControlContextFactory$$static;
        interface _AccessControlContextFactory {
        }
        interface AccessControlContextFactory extends CombineTypes<[_AccessControlContextFactory, java.lang.Object]> {}
        interface _InternalTypeUtilities$$static extends ClassLike {
          areAssignable(c1: java.lang.Class<any>, c2: java.lang.Class<any>): boolean;
          canReferenceDirectly(referrerLoader: java.lang.ClassLoader, referredLoader: java.lang.ClassLoader): boolean;
          _collectAssignables(c1: java.lang.Class<any>, c2: java.lang.Class<any>, s: java.util.Set<java.lang.Class<any>>): void;
          _getAssignables(c1: java.lang.Class<any>, c2: java.lang.Class<any>): java.util.Set<java.lang.Class<any>>;
          getCommonLosslessConversionType(c1: java.lang.Class<any>, c2: java.lang.Class<any>): java.lang.Class<any>;
          _getMostSpecificCommonTypeUnequalNonprimitives(c1: java.lang.Class<any>, c2: java.lang.Class<any>): java.lang.Class<any>;
        }
        let InternalTypeUtilities: _InternalTypeUtilities$$static;
        interface _InternalTypeUtilities {
        }
        interface InternalTypeUtilities extends CombineTypes<[_InternalTypeUtilities, java.lang.Object]> {}
      }
      module linker {
        module support {
          interface _CompositeGuardingDynamicLinker$$static extends ClassLike {
            new(linkers: java.lang.Iterable<GuardingDynamicLinker>): CompositeGuardingDynamicLinker;
          }
          let CompositeGuardingDynamicLinker: _CompositeGuardingDynamicLinker$$static;
          interface _CompositeGuardingDynamicLinker {
            getGuardedInvocation(linkRequest: LinkRequest, linkerServices: LinkerServices): GuardedInvocation;
            _linkers: GuardingDynamicLinker[];
          }
          interface CompositeGuardingDynamicLinker extends CombineTypes<[_CompositeGuardingDynamicLinker, jdk.dynalink.linker.GuardingDynamicLinker, java.lang.Object]> {}
          interface _CompositeTypeBasedGuardingDynamicLinker$$static extends ClassLike {
            _addTypeBased(llinkers: java.util.List<GuardingDynamicLinker>, tblinkers: java.util.List<TypeBasedGuardingDynamicLinker>): void;
            optimize(linkers: java.lang.Iterable<GuardingDynamicLinker>): java.util.List<GuardingDynamicLinker>;
            new(linkers: java.lang.Iterable<TypeBasedGuardingDynamicLinker>): CompositeTypeBasedGuardingDynamicLinker;
          }
          let CompositeTypeBasedGuardingDynamicLinker: _CompositeTypeBasedGuardingDynamicLinker$$static;
          interface _CompositeTypeBasedGuardingDynamicLinker {
            canLinkType(type: java.lang.Class<any>): boolean;
            getGuardedInvocation(linkRequest: LinkRequest, linkerServices: LinkerServices): GuardedInvocation;
            _classToLinker: java.lang.ClassValue<java.util.List<TypeBasedGuardingDynamicLinker>>;
          }
          interface CompositeTypeBasedGuardingDynamicLinker extends CombineTypes<[_CompositeTypeBasedGuardingDynamicLinker, java.lang.Object, jdk.dynalink.linker.TypeBasedGuardingDynamicLinker]> {}
          interface _CompositeTypeBasedGuardingDynamicLinker$ClassToLinker$$static extends ClassLike {
            _NO_LINKER: java.util.List<TypeBasedGuardingDynamicLinker>;
            _new(linkers: TypeBasedGuardingDynamicLinker[]): CompositeTypeBasedGuardingDynamicLinker$ClassToLinker;
          }
          let CompositeTypeBasedGuardingDynamicLinker$ClassToLinker: _CompositeTypeBasedGuardingDynamicLinker$ClassToLinker$$static;
          interface _CompositeTypeBasedGuardingDynamicLinker$ClassToLinker {
            _computeValue(clazz: java.lang.Class<any>): java.util.List<TypeBasedGuardingDynamicLinker>;
            _computeValue(a0: java.lang.Class): any;
            _linkers: TypeBasedGuardingDynamicLinker[];
            _singletonLinkers: java.util.List<TypeBasedGuardingDynamicLinker>[];
          }
          interface CompositeTypeBasedGuardingDynamicLinker$ClassToLinker extends CombineTypes<[_CompositeTypeBasedGuardingDynamicLinker$ClassToLinker, java.lang.ClassValue<java.util.List<TypeBasedGuardingDynamicLinker>>]> {}
          interface _DefaultInternalObjectFilter$$static extends ClassLike {
            _checkHandle(handle: java.lang.invoke.MethodHandle, handleKind: string): java.lang.invoke.MethodHandle;
            _filterVarArgs(parameterFilter: java.lang.invoke.MethodHandle, args: any[]): any[];
            _FILTER_VARARGS: java.lang.invoke.MethodHandle;
            new(parameterFilter: java.lang.invoke.MethodHandle, returnFilter: java.lang.invoke.MethodHandle): DefaultInternalObjectFilter;
          }
          let DefaultInternalObjectFilter: _DefaultInternalObjectFilter$$static;
          interface _DefaultInternalObjectFilter {
            transform(target: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle;
            _parameterFilter: java.lang.invoke.MethodHandle;
            _returnFilter: java.lang.invoke.MethodHandle;
            _varArgFilter: java.lang.invoke.MethodHandle;
          }
          interface DefaultInternalObjectFilter extends CombineTypes<[_DefaultInternalObjectFilter, jdk.dynalink.linker.MethodHandleTransformer, java.lang.Object]> {}
          interface _Guards$$static extends ClassLike {
            asType(test: java.lang.invoke.MethodHandle, type: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle;
            asType(linkerServices: LinkerServices, test: java.lang.invoke.MethodHandle, type: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle;
            _asType(test: java.lang.invoke.MethodHandle, pos: int, type: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle;
            _constantBoolean(value: boolean, type: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle;
            _constantFalse(type: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle;
            _constantTrue(type: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle;
            _getClassBoundArgumentTest(test: java.lang.invoke.MethodHandle, clazz: java.lang.Class<any>, pos: int, type: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle;
            getClassGuard(clazz: java.lang.Class<any>): java.lang.invoke.MethodHandle;
            getIdentityGuard(obj: any): java.lang.invoke.MethodHandle;
            getInstanceOfGuard(clazz: java.lang.Class<any>): java.lang.invoke.MethodHandle;
            _getTestType(test: java.lang.invoke.MethodHandle, type: java.lang.invoke.MethodType): java.lang.invoke.MethodType;
            isArray(pos: int, type: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle;
            _isArray(o: any): boolean;
            _isIdentical(o1: any, o2: any): boolean;
            isInstance(clazz: java.lang.Class<any>, type: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle;
            isInstance(clazz: java.lang.Class<any>, pos: int, type: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle;
            isNotNull(): java.lang.invoke.MethodHandle;
            _isNotNull(obj: any): boolean;
            isNull(): java.lang.invoke.MethodHandle;
            _isNull(obj: any): boolean;
            isOfClass(clazz: java.lang.Class<any>, type: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle;
            _isOfClass(c: java.lang.Class<any>, o: any): boolean;
            _IS_ARRAY: java.lang.invoke.MethodHandle;
            _IS_IDENTICAL: java.lang.invoke.MethodHandle;
            _IS_INSTANCE: java.lang.invoke.MethodHandle;
            _IS_NOT_NULL: java.lang.invoke.MethodHandle;
            _IS_NULL: java.lang.invoke.MethodHandle;
            _IS_OF_CLASS: java.lang.invoke.MethodHandle;
            _LOG: java.util.logging.Logger;
          }
          let Guards: _Guards$$static;
          interface _Guards {
          }
          interface Guards extends CombineTypes<[_Guards, java.lang.Object]> {}
          interface _Lookup$$static extends ClassLike {
            findOwnSpecial(lookup: java.lang.invoke.MethodHandles$Lookup, name: string, rtype: java.lang.Class<any>, ptypes: java.lang.Class<any>[]): java.lang.invoke.MethodHandle;
            findOwnSpecial(lookup: java.lang.invoke.MethodHandles$Lookup, name: string, rtype: java.lang.Class<any>, ...ptypes: java.lang.Class<any>[]): java.lang.invoke.MethodHandle;
            findOwnStatic(lookup: java.lang.invoke.MethodHandles$Lookup, name: string, rtype: java.lang.Class<any>, ptypes: java.lang.Class<any>[]): java.lang.invoke.MethodHandle;
            findOwnStatic(lookup: java.lang.invoke.MethodHandles$Lookup, name: string, rtype: java.lang.Class<any>, ...ptypes: java.lang.Class<any>[]): java.lang.invoke.MethodHandle;
            _methodDescription(declaringClass: java.lang.Class<any>, name: string, type: java.lang.invoke.MethodType): string;
            unreflect(lookup: java.lang.invoke.MethodHandles$Lookup, m: java.lang.reflect.Method): java.lang.invoke.MethodHandle;
            unreflectConstructor(lookup: java.lang.invoke.MethodHandles$Lookup, c: java.lang.reflect.Constructor<any>): java.lang.invoke.MethodHandle;
            readonly PUBLIC: Lookup;
            new(lookup: java.lang.invoke.MethodHandles$Lookup): Lookup;
          }
          let Lookup: _Lookup$$static;
          interface _Lookup {
            findGetter(refc: java.lang.Class<any>, name: string, type: java.lang.Class<any>): java.lang.invoke.MethodHandle;
            findOwnSpecial(name: string, rtype: java.lang.Class<any>, ptypes: java.lang.Class<any>[]): java.lang.invoke.MethodHandle;
            findOwnSpecial(name: string, rtype: java.lang.Class<any>, ...ptypes: java.lang.Class<any>[]): java.lang.invoke.MethodHandle;
            findOwnStatic(name: string, rtype: java.lang.Class<any>, ptypes: java.lang.Class<any>[]): java.lang.invoke.MethodHandle;
            findOwnStatic(name: string, rtype: java.lang.Class<any>, ...ptypes: java.lang.Class<any>[]): java.lang.invoke.MethodHandle;
            findSpecial(declaringClass: java.lang.Class<any>, name: string, type: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle;
            findStatic(declaringClass: java.lang.Class<any>, name: string, type: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle;
            findVirtual(declaringClass: java.lang.Class<any>, name: string, type: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle;
            unreflect(m: java.lang.reflect.Method): java.lang.invoke.MethodHandle;
            unreflectConstructor(c: java.lang.reflect.Constructor<any>): java.lang.invoke.MethodHandle;
            unreflectGetter(f: java.lang.reflect.Field): java.lang.invoke.MethodHandle;
            unreflectSetter(f: java.lang.reflect.Field): java.lang.invoke.MethodHandle;
            _lookup: java.lang.invoke.MethodHandles$Lookup;
          }
          interface Lookup extends CombineTypes<[_Lookup, java.lang.Object]> {}
          interface _SimpleLinkRequest$$static extends ClassLike {
            new(callSiteDescriptor: CallSiteDescriptor, callSiteUnstable: boolean, arguments: any[]): SimpleLinkRequest;
            new(callSiteDescriptor: CallSiteDescriptor, callSiteUnstable: boolean, ...arguments: any[]): SimpleLinkRequest;
          }
          let SimpleLinkRequest: _SimpleLinkRequest$$static;
          interface _SimpleLinkRequest {
            getArguments(): any[];
            getCallSiteDescriptor(): CallSiteDescriptor;
            getReceiver(): any;
            isCallSiteUnstable(): boolean;
            replaceArguments(newCallSiteDescriptor: CallSiteDescriptor, newArguments: any[]): LinkRequest;
            replaceArguments(newCallSiteDescriptor: CallSiteDescriptor, ...newArguments: any[]): LinkRequest;
            _arguments: any[];
            _callSiteDescriptor: CallSiteDescriptor;
            _callSiteUnstable: boolean;
          }
          interface SimpleLinkRequest extends CombineTypes<[_SimpleLinkRequest, java.lang.Object, jdk.dynalink.linker.LinkRequest]> {}
          interface _TypeUtilities$$static extends ClassLike {
            _createClassNameMapping(classes: java.util.Collection<java.lang.Class<any>>): java.util.Map<string,java.lang.Class<any>>;
            _createWrapperTypes(): java.util.Map<java.lang.Class<any>,java.lang.Class<any>>;
            getPrimitiveType(wrapperType: java.lang.Class<any>): java.lang.Class<any>;
            getPrimitiveTypeByName(name: string): java.lang.Class<any>;
            getWrapperType(primitiveType: java.lang.Class<any>): java.lang.Class<any>;
            _invertMap<K, V>(map: java.util.Map<K,V>): java.util.Map<V,K>;
            _isBoxingAndWideningReferenceConversion(sourceType: java.lang.Class<any>, targetType: java.lang.Class<any>): boolean;
            isConvertibleWithoutLoss(sourceType: java.lang.Class<any>, targetType: java.lang.Class<any>): boolean;
            isMethodInvocationConvertible(sourceType: java.lang.Class<any>, targetType: java.lang.Class<any>): boolean;
            _isProperPrimitiveLosslessSubtype(subType: java.lang.Class<any>, superType: java.lang.Class<any>): boolean;
            _isProperPrimitiveSubtype(subType: java.lang.Class<any>, superType: java.lang.Class<any>): boolean;
            isSubtype(subType: java.lang.Class<any>, superType: java.lang.Class<any>): boolean;
            isWrapperType(type: java.lang.Class<any>): boolean;
            _PRIMITIVE_TYPES: java.util.Map<java.lang.Class<any>,java.lang.Class<any>>;
            _PRIMITIVE_TYPES_BY_NAME: java.util.Map<string,java.lang.Class<any>>;
            _WRAPPER_TYPES: java.util.Map<java.lang.Class<any>,java.lang.Class<any>>;
          }
          let TypeUtilities: _TypeUtilities$$static;
          interface _TypeUtilities {
          }
          interface TypeUtilities extends CombineTypes<[_TypeUtilities, java.lang.Object]> {}
        }
        interface _ConversionComparator$$static extends ClassLike {
        }
        let ConversionComparator: _ConversionComparator$$static;
        interface _ConversionComparator {
          compareConversion(a0: java.lang.Class<any>, a1: java.lang.Class<any>, a2: java.lang.Class<any>): ConversionComparator$Comparison;
(a0: java.lang.Class<any>, a1: java.lang.Class<any>, a2: java.lang.Class<any>): ConversionComparator$Comparison;
        }
        interface ConversionComparator extends CombineTypes<[_ConversionComparator, java.lang.Object]> {}
        interface _ConversionComparator$Comparison$$static extends ClassLike {
          valueOf(name: string): ConversionComparator$Comparison;
          values(): ConversionComparator$Comparison[];
          readonly INDETERMINATE: ConversionComparator$Comparison;
          readonly TYPE_1_BETTER: ConversionComparator$Comparison;
          readonly TYPE_2_BETTER: ConversionComparator$Comparison;
        }
        let ConversionComparator$Comparison: _ConversionComparator$Comparison$$static;
        interface _ConversionComparator$Comparison {
        }
        interface ConversionComparator$Comparison extends CombineTypes<[_ConversionComparator$Comparison]> {}
        interface _GuardedInvocation$$static extends ClassLike {
          new(invocation: java.lang.invoke.MethodHandle): GuardedInvocation;
          new(invocation: java.lang.invoke.MethodHandle, guard: java.lang.invoke.MethodHandle): GuardedInvocation;
          new(invocation: java.lang.invoke.MethodHandle, switchPoint: java.lang.invoke.SwitchPoint): GuardedInvocation;
          new(invocation: java.lang.invoke.MethodHandle, guard: java.lang.invoke.MethodHandle, switchPoint: java.lang.invoke.SwitchPoint): GuardedInvocation;
          new(invocation: java.lang.invoke.MethodHandle, guard: java.lang.invoke.MethodHandle, switchPoint: java.lang.invoke.SwitchPoint, exception: java.lang.Class<java.lang.Throwable>): GuardedInvocation;
          new(invocation: java.lang.invoke.MethodHandle, guard: java.lang.invoke.MethodHandle, switchPoints: java.lang.invoke.SwitchPoint[], exception: java.lang.Class<java.lang.Throwable>): GuardedInvocation;
        }
        let GuardedInvocation: _GuardedInvocation$$static;
        interface _GuardedInvocation {
          addSwitchPoint(newSwitchPoint: java.lang.invoke.SwitchPoint): GuardedInvocation;
          asType(newType: java.lang.invoke.MethodType): GuardedInvocation;
          asType(linkerServices: LinkerServices, newType: java.lang.invoke.MethodType): GuardedInvocation;
          asType(desc: CallSiteDescriptor): GuardedInvocation;
          asTypeSafeReturn(linkerServices: LinkerServices, newType: java.lang.invoke.MethodType): GuardedInvocation;
          compose(fallback: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle;
          compose(guardFallback: java.lang.invoke.MethodHandle, switchpointFallback: java.lang.invoke.MethodHandle, catchFallback: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle;
          dropArguments(pos: int, valueTypes: java.util.List<java.lang.Class<any>>): GuardedInvocation;
          dropArguments(pos: int, valueTypes: java.lang.Class<any>[]): GuardedInvocation;
          dropArguments(pos: int, ...valueTypes: java.lang.Class<any>[]): GuardedInvocation;
          filterArguments(pos: int, filters: java.lang.invoke.MethodHandle[]): GuardedInvocation;
          filterArguments(pos: int, ...filters: java.lang.invoke.MethodHandle[]): GuardedInvocation;
          getException(): java.lang.Class<java.lang.Throwable>;
          getGuard(): java.lang.invoke.MethodHandle;
          getInvocation(): java.lang.invoke.MethodHandle;
          getSwitchPoints(): java.lang.invoke.SwitchPoint[];
          hasBeenInvalidated(): boolean;
          replaceMethods(newInvocation: java.lang.invoke.MethodHandle, newGuard: java.lang.invoke.MethodHandle): GuardedInvocation;
          _replaceMethodsOrThis(newInvocation: java.lang.invoke.MethodHandle, newGuard: java.lang.invoke.MethodHandle): GuardedInvocation;
          _exception: java.lang.Class<java.lang.Throwable>;
          _guard: java.lang.invoke.MethodHandle;
          _invocation: java.lang.invoke.MethodHandle;
          _switchPoints: java.lang.invoke.SwitchPoint[];
        }
        interface GuardedInvocation extends CombineTypes<[_GuardedInvocation, java.lang.Object]> {}
        interface _GuardedInvocationTransformer$$static extends ClassLike {
        }
        let GuardedInvocationTransformer: _GuardedInvocationTransformer$$static;
        interface _GuardedInvocationTransformer {
          filter(a0: GuardedInvocation, a1: LinkRequest, a2: LinkerServices): GuardedInvocation;
(a0: GuardedInvocation, a1: LinkRequest, a2: LinkerServices): GuardedInvocation;
        }
        interface GuardedInvocationTransformer extends CombineTypes<[_GuardedInvocationTransformer, java.lang.Object]> {}
        interface _GuardingDynamicLinker$$static extends ClassLike {
        }
        let GuardingDynamicLinker: _GuardingDynamicLinker$$static;
        interface _GuardingDynamicLinker {
          getGuardedInvocation(a0: LinkRequest, a1: LinkerServices): GuardedInvocation;
(a0: LinkRequest, a1: LinkerServices): GuardedInvocation;
        }
        interface GuardingDynamicLinker extends CombineTypes<[_GuardingDynamicLinker, java.lang.Object]> {}
        interface _GuardingDynamicLinkerExporter$$static extends ClassLike {
          _AUTOLOAD_PERMISSION: java.security.Permission;
          readonly AUTOLOAD_PERMISSION_NAME: string;
          _new(): GuardingDynamicLinkerExporter;
        }
        let GuardingDynamicLinkerExporter: _GuardingDynamicLinkerExporter$$static;
        interface _GuardingDynamicLinkerExporter {
        }
        interface GuardingDynamicLinkerExporter extends CombineTypes<[_GuardingDynamicLinkerExporter, java.util.function.Supplier<java.util.List<GuardingDynamicLinker>>, java.lang.Object]> {}
        interface _GuardingTypeConverterFactory$$static extends ClassLike {
        }
        let GuardingTypeConverterFactory: _GuardingTypeConverterFactory$$static;
        interface _GuardingTypeConverterFactory {
          convertToType(a0: java.lang.Class<any>, a1: java.lang.Class<any>, a2: java.util.function.Supplier<java.lang.invoke.MethodHandles$Lookup>): GuardedInvocation;
(a0: java.lang.Class<any>, a1: java.lang.Class<any>, a2: java.util.function.Supplier<java.lang.invoke.MethodHandles$Lookup>): GuardedInvocation;
        }
        interface GuardingTypeConverterFactory extends CombineTypes<[_GuardingTypeConverterFactory, java.lang.Object]> {}
        interface _LinkRequest$$static extends ClassLike {
        }
        let LinkRequest: _LinkRequest$$static;
        interface _LinkRequest {
          getArguments(): any[];
          getCallSiteDescriptor(): CallSiteDescriptor;
          getReceiver(): any;
          isCallSiteUnstable(): boolean;
          replaceArguments(a0: CallSiteDescriptor, a1: any[]): LinkRequest;
          replaceArguments(a0: CallSiteDescriptor, ...a1: any[]): LinkRequest;
        }
        interface LinkRequest extends CombineTypes<[_LinkRequest, java.lang.Object]> {}
        interface _LinkerServices$$static extends ClassLike {
        }
        let LinkerServices: _LinkerServices$$static;
        interface _LinkerServices {
          asType(a0: java.lang.invoke.MethodHandle, a1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle;
          asTypeLosslessReturn(handle: java.lang.invoke.MethodHandle, fromType: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle;
          canConvert(a0: java.lang.Class<any>, a1: java.lang.Class<any>): boolean;
          compareConversion(a0: java.lang.Class<any>, a1: java.lang.Class<any>, a2: java.lang.Class<any>): ConversionComparator$Comparison;
          filterInternalObjects(a0: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle;
          getGuardedInvocation(a0: LinkRequest): GuardedInvocation;
          getTypeConverter(a0: java.lang.Class<any>, a1: java.lang.Class<any>): java.lang.invoke.MethodHandle;
          getWithLookup<T>(a0: java.util.function.Supplier<T>, a1: SecureLookupSupplier): T;
        }
        interface LinkerServices extends CombineTypes<[_LinkerServices, java.lang.Object]> {}
        interface _MethodHandleTransformer$$static extends ClassLike {
        }
        let MethodHandleTransformer: _MethodHandleTransformer$$static;
        interface _MethodHandleTransformer {
          transform(a0: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle;
(a0: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle;
        }
        interface MethodHandleTransformer extends CombineTypes<[_MethodHandleTransformer, java.lang.Object]> {}
        interface _MethodTypeConversionStrategy$$static extends ClassLike {
        }
        let MethodTypeConversionStrategy: _MethodTypeConversionStrategy$$static;
        interface _MethodTypeConversionStrategy {
          asType(a0: java.lang.invoke.MethodHandle, a1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle;
(a0: java.lang.invoke.MethodHandle, a1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle;
        }
        interface MethodTypeConversionStrategy extends CombineTypes<[_MethodTypeConversionStrategy, java.lang.Object]> {}
        interface _TypeBasedGuardingDynamicLinker$$static extends ClassLike {
        }
        let TypeBasedGuardingDynamicLinker: _TypeBasedGuardingDynamicLinker$$static;
        interface _TypeBasedGuardingDynamicLinker {
          canLinkType(a0: java.lang.Class<any>): boolean;
(a0: java.lang.Class<any>): boolean;
        }
        interface TypeBasedGuardingDynamicLinker extends CombineTypes<[_TypeBasedGuardingDynamicLinker, jdk.dynalink.linker.GuardingDynamicLinker, java.lang.Object]> {}
      }
      module support {
        interface _AbstractRelinkableCallSite$$static extends ClassLike {
          _new(descriptor: CallSiteDescriptor): AbstractRelinkableCallSite;
        }
        let AbstractRelinkableCallSite: _AbstractRelinkableCallSite$$static;
        interface _AbstractRelinkableCallSite {
          getDescriptor(): CallSiteDescriptor;
          initialize(relinkAndInvoke: java.lang.invoke.MethodHandle): void;
          _descriptor: CallSiteDescriptor;
        }
        interface AbstractRelinkableCallSite extends CombineTypes<[_AbstractRelinkableCallSite, java.lang.invoke.MutableCallSite, jdk.dynalink.RelinkableCallSite]> {}
        interface _ChainedCallSite$$static extends ClassLike {
          _checkMaxChainLength(maxChainLength: int): int;
          _PRUNE_CATCHES: java.lang.invoke.MethodHandle;
          _PRUNE_SWITCHPOINTS: java.lang.invoke.MethodHandle;
          new(descriptor: CallSiteDescriptor): ChainedCallSite;
        }
        let ChainedCallSite: _ChainedCallSite$$static;
        interface _ChainedCallSite {
          _getMaxChainLength(): int;
          _makePruneAndInvokeMethod(relinkAndInvoke: java.lang.invoke.MethodHandle, prune: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle;
          _prune(relink: java.lang.invoke.MethodHandle, catches: boolean): java.lang.invoke.MethodHandle;
          relink(guardedInvocation: dynalink.linker.GuardedInvocation, relinkAndInvoke: java.lang.invoke.MethodHandle): void;
          _relinkInternal(invocation: dynalink.linker.GuardedInvocation, relink: java.lang.invoke.MethodHandle, reset: boolean, removeCatches: boolean): java.lang.invoke.MethodHandle;
          resetAndRelink(guardedInvocation: dynalink.linker.GuardedInvocation, relinkAndInvoke: java.lang.invoke.MethodHandle): void;
          _invocations: any;
        }
        interface ChainedCallSite extends CombineTypes<[_ChainedCallSite, jdk.dynalink.support.AbstractRelinkableCallSite]> {}
        interface _SimpleRelinkableCallSite$$static extends ClassLike {
          new(descriptor: CallSiteDescriptor): SimpleRelinkableCallSite;
        }
        let SimpleRelinkableCallSite: _SimpleRelinkableCallSite$$static;
        interface _SimpleRelinkableCallSite {
          relink(guardedInvocation: dynalink.linker.GuardedInvocation, relinkAndInvoke: java.lang.invoke.MethodHandle): void;
          resetAndRelink(guardedInvocation: dynalink.linker.GuardedInvocation, relinkAndInvoke: java.lang.invoke.MethodHandle): void;
        }
        interface SimpleRelinkableCallSite extends CombineTypes<[_SimpleRelinkableCallSite, jdk.dynalink.support.AbstractRelinkableCallSite]> {}
      }
      interface _BiClassValue$$static<T> extends ClassLike {
        _computing<T>(compute: java.util.function.BiFunction<java.lang.Class<any>,java.lang.Class<any>,T>): BiClassValue<T>;
        _getRetentionDirection(from: java.lang.Class<any>, to: java.lang.Class<any>): BiClassValue$RetentionDirection;
        _GET_CLASS_LOADER_CONTEXT: java.security.AccessControlContext;
      }
      let BiClassValue: _BiClassValue$$static<T>;
      interface _BiClassValue<T> {
        _get(c1: java.lang.Class<any>, c2: java.lang.Class<any>): T;
        _compute: java.util.function.BiFunction<java.lang.Class<any>,java.lang.Class<any>,T>;
        _root: BiClassValue$BiClassValuesRoot<T>;
      }
      interface BiClassValue<T> extends CombineTypes<[_BiClassValue<T>, java.lang.Object]> {}
      interface _BiClassValue$BiClassValues$$static<T> extends ClassLike {
        _FORWARD: java.lang.invoke.VarHandle;
        _REVERSE: java.lang.invoke.VarHandle;
      }
      let BiClassValue$BiClassValues: _BiClassValue$BiClassValues$$static<T>;
      interface _BiClassValue$BiClassValues<T> {
        _compute(mapHandle: java.lang.invoke.VarHandle, c: java.lang.Class<any>, compute: java.util.function.Function<java.lang.Class<any>,T>): T;
        _computeForward(c: java.lang.Class<any>, compute: java.util.function.Function<java.lang.Class<any>,T>): T;
        _computeReverse(c: java.lang.Class<any>, compute: java.util.function.Function<java.lang.Class<any>,T>): T;
        _getForwardValue(c: java.lang.Class<any>): T;
        _getReverseValue(c: java.lang.Class<any>): T;
        _forward: java.util.Map<java.lang.Class<any>,T>;
        _reverse: java.util.Map<java.lang.Class<any>,T>;
      }
      interface BiClassValue$BiClassValues<T> extends CombineTypes<[_BiClassValue$BiClassValues<T>, java.lang.Object]> {}
      interface _BiClassValue$BiClassValuesRoot$$static<T> extends ClassLike {
      }
      let BiClassValue$BiClassValuesRoot: _BiClassValue$BiClassValuesRoot$$static<T>;
      interface _BiClassValue$BiClassValuesRoot<T> {
        _computeValue(type: java.lang.Class<any>): BiClassValue$BiClassValues<T>;
        _computeValue(a0: java.lang.Class): any;
      }
      interface BiClassValue$BiClassValuesRoot<T> extends CombineTypes<[_BiClassValue$BiClassValuesRoot<T>, java.lang.ClassValue<BiClassValue$BiClassValues<T>>]> {}
      interface _BiClassValue$RetentionDirection$$static extends ClassLike {
        valueOf(name: string): BiClassValue$RetentionDirection;
        values(): BiClassValue$RetentionDirection[];
        readonly FORWARD: BiClassValue$RetentionDirection;
        readonly NEITHER: BiClassValue$RetentionDirection;
        readonly REVERSE: BiClassValue$RetentionDirection;
      }
      let BiClassValue$RetentionDirection: _BiClassValue$RetentionDirection$$static;
      interface _BiClassValue$RetentionDirection {
      }
      interface BiClassValue$RetentionDirection extends CombineTypes<[_BiClassValue$RetentionDirection]> {}
      interface _CallSiteDescriptor$$static extends ClassLike {
        _alwaysAssert(cond: boolean, errorMessage: java.util.function.Supplier<string>): void;
        _lookupHashCode(lookup: java.lang.invoke.MethodHandles$Lookup): int;
        _lookupsEqual(l1: java.lang.invoke.MethodHandles$Lookup, l2: java.lang.invoke.MethodHandles$Lookup): boolean;
        new(lookup: java.lang.invoke.MethodHandles$Lookup, operation: Operation, methodType: java.lang.invoke.MethodType): CallSiteDescriptor;
      }
      let CallSiteDescriptor: _CallSiteDescriptor$$static;
      interface _CallSiteDescriptor {
        _assertChangeInvariants(changed: CallSiteDescriptor, caller: string): void;
        changeMethodType(newMethodType: java.lang.invoke.MethodType): CallSiteDescriptor;
        _changeMethodTypeInternal(newMethodType: java.lang.invoke.MethodType): CallSiteDescriptor;
        changeOperation(newOperation: Operation): CallSiteDescriptor;
        _changeOperationInternal(newOperation: Operation): CallSiteDescriptor;
        equals(obj: any): boolean;
        getMethodType(): java.lang.invoke.MethodType;
        getOperation(): Operation;
        hashCode(): int;
        toString(): string;
        _methodType: java.lang.invoke.MethodType;
        _operation: Operation;
      }
      interface CallSiteDescriptor extends CombineTypes<[_CallSiteDescriptor, jdk.dynalink.SecureLookupSupplier]> {}
      interface _DynamicLinker$$static extends ClassLike {
        getLinkedCallSiteLocation(): java.lang.StackTraceElement;
        _isInitialLinkFrame(frame: java.lang.StackWalker$StackFrame): boolean;
        _isRelinkFrame(frame: java.lang.StackWalker$StackFrame): boolean;
        _testFrame(frame: java.lang.StackWalker$StackFrame, methodName: string, className: string): boolean;
        _CLASS_NAME: string;
        _INITIAL_LINK_CLASS_NAME: string;
        _INITIAL_LINK_METHOD_NAME: string;
        _INVOKE_PACKAGE_PREFIX: string;
        _RELINK: java.lang.invoke.MethodHandle;
        _RELINK_METHOD_NAME: string;
        _stackWalker: java.lang.StackWalker;
        _new(linkerServices: dynalink.linker.LinkerServices, prelinkTransformer: dynalink.linker.GuardedInvocationTransformer, syncOnRelink: boolean, unstableRelinkThreshold: int): DynamicLinker;
      }
      let DynamicLinker: _DynamicLinker$$static;
      interface _DynamicLinker {
        _createRelinkAndInvokeMethod(callSite: RelinkableCallSite, relinkCount: int): java.lang.invoke.MethodHandle;
        getLinkerServices(): dynalink.linker.LinkerServices;
        link<T>(callSite: T): T;
        _relink(callSite: RelinkableCallSite, relinkCount: int, arguments: any[]): java.lang.invoke.MethodHandle;
        _relink(callSite: RelinkableCallSite, relinkCount: int, ...arguments: any[]): java.lang.invoke.MethodHandle;
        _linkerServices: linker.LinkerServices;
        _prelinkTransformer: linker.GuardedInvocationTransformer;
        _syncOnRelink: boolean;
        _unstableRelinkThreshold: int;
      }
      interface DynamicLinker extends CombineTypes<[_DynamicLinker, java.lang.Object]> {}
      interface _DynamicLinkerFactory$$static extends ClassLike {
        _addClasses(knownLinkerClasses: java.util.Set<java.lang.Class<dynalink.linker.GuardingDynamicLinker>>, linkers: java.util.List<dynalink.linker.GuardingDynamicLinker>): void;
        _copyListRequireNonNullElements<T>(list: java.util.List<T>): java.util.List<T>;
        _getThreadContextClassLoader(): java.lang.ClassLoader;
        _requireNonNullElements<T>(list: java.util.List<T>, msgSupplier: java.util.function.Supplier<string>): java.util.List<T>;
        _DEFAULT_UNSTABLE_RELINK_THRESHOLD: int;
        _GET_CLASS_LOADER_CONTEXT: java.security.AccessControlContext;
        new(): DynamicLinkerFactory;
      }
      let DynamicLinkerFactory: _DynamicLinkerFactory$$static;
      interface _DynamicLinkerFactory {
        createLinker(): DynamicLinker;
        _discoverAutoLoadLinkers(): java.util.List<dynalink.linker.GuardingDynamicLinker>;
        getAutoLoadingErrors(): java.util.List<java.util.ServiceConfigurationError>;
        setAutoConversionStrategy(autoConversionStrategy: dynalink.linker.MethodTypeConversionStrategy): void;
        setClassLoader(classLoader: java.lang.ClassLoader): void;
        setFallbackLinkers(fallbackLinkers: java.util.List<dynalink.linker.GuardingDynamicLinker>): void;
        setFallbackLinkers(fallbackLinkers: dynalink.linker.GuardingDynamicLinker[]): void;
        setFallbackLinkers(...fallbackLinkers: dynalink.linker.GuardingDynamicLinker[]): void;
        setInternalObjectsFilter(internalObjectsFilter: dynalink.linker.MethodHandleTransformer): void;
        setPrelinkTransformer(prelinkTransformer: dynalink.linker.GuardedInvocationTransformer): void;
        setPrioritizedLinker(prioritizedLinker: dynalink.linker.GuardingDynamicLinker): void;
        setPrioritizedLinkers(prioritizedLinkers: java.util.List<dynalink.linker.GuardingDynamicLinker>): void;
        setPrioritizedLinkers(prioritizedLinkers: dynalink.linker.GuardingDynamicLinker[]): void;
        setPrioritizedLinkers(...prioritizedLinkers: dynalink.linker.GuardingDynamicLinker[]): void;
        setSyncOnRelink(syncOnRelink: boolean): void;
        setUnstableRelinkThreshold(unstableRelinkThreshold: int): void;
        _autoConversionStrategy: linker.MethodTypeConversionStrategy;
        _autoLoadingErrors: java.util.List<java.util.ServiceConfigurationError>;
        _classLoader: java.lang.ClassLoader;
        _classLoaderExplicitlySet: boolean;
        _fallbackLinkers: java.util.List<linker.GuardingDynamicLinker>;
        _internalObjectsFilter: linker.MethodHandleTransformer;
        _prelinkTransformer: linker.GuardedInvocationTransformer;
        _prioritizedLinkers: java.util.List<linker.GuardingDynamicLinker>;
        _syncOnRelink: boolean;
        _unstableRelinkThreshold: int;
      }
      interface DynamicLinkerFactory extends CombineTypes<[_DynamicLinkerFactory, java.lang.Object]> {}
      interface _LinkerServicesImpl$$static extends ClassLike {
        _getCurrentLookup(): java.lang.invoke.MethodHandles$Lookup;
        _getWithLookupInternal<T>(operation: java.util.function.Supplier<T>, lookupSupplier: SecureLookupSupplier): T;
        _threadLookupSupplier: java.lang.ThreadLocal<SecureLookupSupplier>;
        _new(typeConverterFactory: TypeConverterFactory, topLevelLinker: dynalink.linker.GuardingDynamicLinker, internalObjectsFilter: dynalink.linker.MethodHandleTransformer): LinkerServicesImpl;
      }
      let LinkerServicesImpl: _LinkerServicesImpl$$static;
      interface _LinkerServicesImpl {
        asType(handle: java.lang.invoke.MethodHandle, fromType: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle;
        canConvert(from: java.lang.Class<any>, to: java.lang.Class<any>): boolean;
        compareConversion(sourceType: java.lang.Class<any>, targetType1: java.lang.Class<any>, targetType2: java.lang.Class<any>): dynalink.linker.ConversionComparator$Comparison;
        filterInternalObjects(target: java.lang.invoke.MethodHandle): java.lang.invoke.MethodHandle;
        getGuardedInvocation(linkRequest: dynalink.linker.LinkRequest): dynalink.linker.GuardedInvocation;
        getTypeConverter(sourceType: java.lang.Class<any>, targetType: java.lang.Class<any>): java.lang.invoke.MethodHandle;
        getWithLookup<T>(operation: java.util.function.Supplier<T>, lookupSupplier: SecureLookupSupplier): T;
        _internalObjectsFilter: linker.MethodHandleTransformer;
        _topLevelLinker: linker.GuardingDynamicLinker;
        _typeConverterFactory: TypeConverterFactory;
      }
      interface LinkerServicesImpl extends CombineTypes<[_LinkerServicesImpl, jdk.dynalink.linker.LinkerServices, java.lang.Object]> {}
      interface _LinkerServicesImpl$LinkerException$$static extends ClassLike {
        _serialVersionUID: long;
        new(cause: java.lang.Exception): LinkerServicesImpl$LinkerException;
      }
      let LinkerServicesImpl$LinkerException: _LinkerServicesImpl$LinkerException$$static;
      interface _LinkerServicesImpl$LinkerException {
      }
      interface LinkerServicesImpl$LinkerException extends CombineTypes<[_LinkerServicesImpl$LinkerException, java.lang.RuntimeException]> {}
      interface _NamedOperation$$static extends ClassLike {
        getBaseOperation(op: Operation): Operation;
        getName(op: Operation): any;
        new(baseOperation: Operation, name: any): NamedOperation;
      }
      let NamedOperation: _NamedOperation$$static;
      interface _NamedOperation {
        changeName(newName: string): NamedOperation;
        equals(obj: any): boolean;
        getBaseOperation(): Operation;
        getName(): any;
        hashCode(): int;
        toString(): string;
        _baseOperation: Operation;
        _name: any;
      }
      interface NamedOperation extends CombineTypes<[_NamedOperation, jdk.dynalink.Operation, java.lang.Object]> {}
      interface _Namespace$$static extends ClassLike {
      }
      let Namespace: _Namespace$$static;
      interface _Namespace {
      }
      interface Namespace extends CombineTypes<[_Namespace, java.lang.Object]> {}
      interface _NamespaceOperation$$static extends ClassLike {
        contains(op: Operation, baseOperation: Operation, namespace: Namespace): boolean;
        getBaseOperation(op: Operation): Operation;
        getNamespaces(op: Operation): Namespace[];
        new(baseOperation: Operation, namespaces: Namespace[]): NamespaceOperation;
        new(baseOperation: Operation, ...namespaces: Namespace[]): NamespaceOperation;
      }
      let NamespaceOperation: _NamespaceOperation$$static;
      interface _NamespaceOperation {
        contains(namespace: Namespace): boolean;
        equals(obj: any): boolean;
        getBaseOperation(): Operation;
        getNamespace(i: int): Namespace;
        getNamespaceCount(): int;
        getNamespaces(): Namespace[];
        hashCode(): int;
        toString(): string;
        _baseOperation: Operation;
        _namespaces: Namespace[];
      }
      interface NamespaceOperation extends CombineTypes<[_NamespaceOperation, jdk.dynalink.Operation, java.lang.Object]> {}
      interface _NoSuchDynamicMethodException$$static extends ClassLike {
        _serialVersionUID: long;
        new(message: string): NoSuchDynamicMethodException;
      }
      let NoSuchDynamicMethodException: _NoSuchDynamicMethodException$$static;
      interface _NoSuchDynamicMethodException {
      }
      interface NoSuchDynamicMethodException extends CombineTypes<[_NoSuchDynamicMethodException, java.lang.RuntimeException]> {}
      interface _Operation$$static extends ClassLike {
      }
      let Operation: _Operation$$static;
      interface _Operation {
        named(name: any): NamedOperation;
        withNamespace(namespace: Namespace): NamespaceOperation;
        withNamespaces(namespaces: Namespace[]): NamespaceOperation;
        withNamespaces(...namespaces: Namespace[]): NamespaceOperation;
      }
      interface Operation extends CombineTypes<[_Operation, java.lang.Object]> {}
      interface _RelinkableCallSite$$static extends ClassLike {
      }
      let RelinkableCallSite: _RelinkableCallSite$$static;
      interface _RelinkableCallSite {
        getDescriptor(): CallSiteDescriptor;
        initialize(a0: java.lang.invoke.MethodHandle): void;
        relink(a0: dynalink.linker.GuardedInvocation, a1: java.lang.invoke.MethodHandle): void;
        resetAndRelink(a0: dynalink.linker.GuardedInvocation, a1: java.lang.invoke.MethodHandle): void;
      }
      interface RelinkableCallSite extends CombineTypes<[_RelinkableCallSite, java.lang.Object]> {}
      interface _SecureLookupSupplier$$static extends ClassLike {
        _GET_LOOKUP_PERMISSION: java.lang.RuntimePermission;
        readonly GET_LOOKUP_PERMISSION_NAME: string;
        new(lookup: java.lang.invoke.MethodHandles$Lookup): SecureLookupSupplier;
      }
      let SecureLookupSupplier: _SecureLookupSupplier$$static;
      interface _SecureLookupSupplier {
        getLookup(): java.lang.invoke.MethodHandles$Lookup;
        _getLookupPrivileged(): java.lang.invoke.MethodHandles$Lookup;
        _lookup: java.lang.invoke.MethodHandles$Lookup;
      }
      interface SecureLookupSupplier extends CombineTypes<[_SecureLookupSupplier, java.lang.Object]> {}
      interface _StandardNamespace$$static extends ClassLike {
        findFirst(op: Operation): StandardNamespace;
        valueOf(name: string): StandardNamespace;
        values(): StandardNamespace[];
        readonly ELEMENT: StandardNamespace;
        readonly METHOD: StandardNamespace;
        readonly PROPERTY: StandardNamespace;
      }
      let StandardNamespace: _StandardNamespace$$static;
      interface _StandardNamespace {
      }
      interface StandardNamespace extends CombineTypes<[_StandardNamespace, Namespace]> {}
      interface _StandardOperation$$static extends ClassLike {
        valueOf(name: string): StandardOperation;
        values(): StandardOperation[];
        readonly CALL: StandardOperation;
        readonly GET: StandardOperation;
        readonly NEW: StandardOperation;
        readonly REMOVE: StandardOperation;
        readonly SET: StandardOperation;
      }
      let StandardOperation: _StandardOperation$$static;
      interface _StandardOperation {
      }
      interface StandardOperation extends CombineTypes<[_StandardOperation, Operation]> {}
      interface _TypeConverterFactory$$static extends ClassLike {
        _applyConverters(handle: java.lang.invoke.MethodHandle, pos: int, converters: java.util.List<java.lang.invoke.MethodHandle>): java.lang.invoke.MethodHandle;
        _canAutoConvert(fromType: java.lang.Class<any>, toType: java.lang.Class<any>): boolean;
        _createConverter(sourceType: java.lang.Class<any>, targetType: java.lang.Class<any>, factories: dynalink.linker.GuardingTypeConverterFactory[]): java.lang.invoke.MethodHandle;
        _getCacheableTypeConverter(sourceType: java.lang.Class<any>, targetType: java.lang.Class<any>, converterMap: BiClassValue<java.lang.invoke.MethodHandle>): java.lang.invoke.MethodHandle;
        _getCacheableTypeConverterNull(sourceType: java.lang.Class<any>, targetType: java.lang.Class<any>, converterMap: BiClassValue<java.lang.invoke.MethodHandle>): java.lang.invoke.MethodHandle;
        _getTypeConverterNull(sourceType: java.lang.Class<any>, targetType: java.lang.Class<any>, converterMap: BiClassValue<java.lang.invoke.MethodHandle>): java.lang.invoke.MethodHandle;
        _IDENTITY_CONVERSION: java.lang.invoke.MethodHandle;
        _new(factories: java.lang.Iterable<dynalink.linker.GuardingTypeConverterFactory>, autoConversionStrategy: dynalink.linker.MethodTypeConversionStrategy): TypeConverterFactory;
      }
      let TypeConverterFactory: _TypeConverterFactory$$static;
      interface _TypeConverterFactory {
        _asType(handle: java.lang.invoke.MethodHandle, fromType: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle;
        _canConvert(from: java.lang.Class<any>, to: java.lang.Class<any>): boolean;
        _compareConversion(sourceType: java.lang.Class<any>, targetType1: java.lang.Class<any>, targetType2: java.lang.Class<any>): dynalink.linker.ConversionComparator$Comparison;
        _getTypeConverter(sourceType: java.lang.Class<any>, targetType: java.lang.Class<any>): java.lang.invoke.MethodHandle;
        _autoConversionStrategy: linker.MethodTypeConversionStrategy;
        _canConvert: BiClassValue<boolean>;
        _comparators: linker.ConversionComparator[];
        _converterIdentityMap: BiClassValue<java.lang.invoke.MethodHandle>;
        _converterMap: BiClassValue<java.lang.invoke.MethodHandle>;
      }
      interface TypeConverterFactory extends CombineTypes<[_TypeConverterFactory, java.lang.Object]> {}
      interface _TypeConverterFactory$LookupSupplier$$static extends ClassLike {
      }
      let TypeConverterFactory$LookupSupplier: _TypeConverterFactory$LookupSupplier$$static;
      interface _TypeConverterFactory$LookupSupplier {
        get(): java.lang.invoke.MethodHandles$Lookup;
        get(): any;
        _closed: boolean;
        _returnedLookup: boolean;
      }
      interface TypeConverterFactory$LookupSupplier extends CombineTypes<[_TypeConverterFactory$LookupSupplier, java.util.function.Supplier<java.lang.invoke.MethodHandles$Lookup>, java.lang.Object]> {}
      interface _TypeConverterFactory$NotCacheableConverter$$static extends ClassLike {
        _new(converter: java.lang.invoke.MethodHandle): TypeConverterFactory$NotCacheableConverter;
      }
      let TypeConverterFactory$NotCacheableConverter: _TypeConverterFactory$NotCacheableConverter$$static;
      interface _TypeConverterFactory$NotCacheableConverter {
        _converter: java.lang.invoke.MethodHandle;
      }
      interface TypeConverterFactory$NotCacheableConverter extends CombineTypes<[_TypeConverterFactory$NotCacheableConverter, java.lang.RuntimeException]> {}
    }
  }
}
