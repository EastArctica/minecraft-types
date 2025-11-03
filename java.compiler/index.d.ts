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
  module javax {
    module annotation {
      module processing {
        interface _AbstractProcessor$$static extends ClassLike {
          _new(): AbstractProcessor;
        }
        let AbstractProcessor: _AbstractProcessor$$static;
        interface _AbstractProcessor {
          _arrayToSet(array: string[], stripModulePrefixes: boolean, contentType: string, annotationName: string): java.util.Set<string>;
          getCompletions(element: javax.lang.model.element.Element, annotation: javax.lang.model.element.AnnotationMirror, member: javax.lang.model.element.ExecutableElement, userText: string): java.lang.Iterable<Completion>;
          getSupportedAnnotationTypes(): java.util.Set<string>;
          getSupportedOptions(): java.util.Set<string>;
          getSupportedSourceVersion(): javax.lang.model.SourceVersion;
          init(processingEnv: ProcessingEnvironment): void;
          _isInitialized(): boolean;
          process(a0: java.util.Set<javax.lang.model.element.TypeElement>, a1: RoundEnvironment): boolean;
(a0: java.util.Set<javax.lang.model.element.TypeElement>, a1: RoundEnvironment): boolean;
          _initialized: boolean;
          _processingEnv: ProcessingEnvironment;
        }
        interface AbstractProcessor extends CombineTypes<[_AbstractProcessor, java.lang.Object, javax.annotation.processing.Processor]> {}
        interface _Completion$$static extends ClassLike {
        }
        let Completion: _Completion$$static;
        interface _Completion {
          getMessage(): string;
          getValue(): string;
        }
        interface Completion extends CombineTypes<[_Completion, java.lang.Object]> {}
        interface _Completions$$static extends ClassLike {
          of(value: string, message: string): Completion;
          of(value: string): Completion;
        }
        let Completions: _Completions$$static;
        interface _Completions {
        }
        interface Completions extends CombineTypes<[_Completions, java.lang.Object]> {}
        interface _Completions$SimpleCompletion$$static extends ClassLike {
          _new(value: string, message: string): Completions$SimpleCompletion;
        }
        let Completions$SimpleCompletion: _Completions$SimpleCompletion$$static;
        interface _Completions$SimpleCompletion {
          getMessage(): string;
          getValue(): string;
          toString(): string;
          _message: string;
          _value: string;
        }
        interface Completions$SimpleCompletion extends CombineTypes<[_Completions$SimpleCompletion, javax.annotation.processing.Completion, java.lang.Object]> {}
        interface _Filer$$static extends ClassLike {
        }
        let Filer: _Filer$$static;
        interface _Filer {
          createClassFile(a0: Filer$charSequence, a1: javax.lang.model.element.Element[]): javax.tools.JavaFileObject;
          createClassFile(a0: Filer$charSequence, ...a1: javax.lang.model.element.Element[]): javax.tools.JavaFileObject;
          createResource(a0: javax.tools.JavaFileManager$Location, a1: Filer$charSequence, a2: Filer$charSequence, a3: javax.lang.model.element.Element[]): javax.tools.FileObject;
          createResource(a0: javax.tools.JavaFileManager$Location, a1: Filer$charSequence, a2: Filer$charSequence, ...a3: javax.lang.model.element.Element[]): javax.tools.FileObject;
          createSourceFile(a0: Filer$charSequence, a1: javax.lang.model.element.Element[]): javax.tools.JavaFileObject;
          createSourceFile(a0: Filer$charSequence, ...a1: javax.lang.model.element.Element[]): javax.tools.JavaFileObject;
          getResource(a0: javax.tools.JavaFileManager$Location, a1: Filer$charSequence, a2: Filer$charSequence): javax.tools.FileObject;
        }
        interface Filer extends CombineTypes<[_Filer, java.lang.Object]> {}
        interface _FilerException$$static extends ClassLike {
          _serialVersionUID: long;
          new(s: string): FilerException;
        }
        let FilerException: _FilerException$$static;
        interface _FilerException {
        }
        interface FilerException extends CombineTypes<[_FilerException, java.io.IOException]> {}
        interface _Generated$$static extends ClassLike {
        }
        let Generated: _Generated$$static;
        interface _Generated {
          comments(): string;
          date(): string;
          value(): string[];
        }
        interface Generated extends CombineTypes<[_Generated, java.lang.annotation.Annotation, java.lang.Object]> {}
        interface _Messager$$static extends ClassLike {
        }
        let Messager: _Messager$$static;
        interface _Messager {
          printError(msg: Messager$charSequence): void;
          printError(msg: Messager$charSequence, e: javax.lang.model.element.Element): void;
          printMessage(a0: javax.tools.Diagnostic$Kind, a1: Messager$charSequence): void;
          printMessage(a0: javax.tools.Diagnostic$Kind, a1: Messager$charSequence, a2: javax.lang.model.element.Element): void;
          printMessage(a0: javax.tools.Diagnostic$Kind, a1: Messager$charSequence, a2: javax.lang.model.element.Element, a3: javax.lang.model.element.AnnotationMirror): void;
          printMessage(a0: javax.tools.Diagnostic$Kind, a1: Messager$charSequence, a2: javax.lang.model.element.Element, a3: javax.lang.model.element.AnnotationMirror, a4: javax.lang.model.element.AnnotationValue): void;
          printNote(msg: Messager$charSequence): void;
          printNote(msg: Messager$charSequence, e: javax.lang.model.element.Element): void;
          printWarning(msg: Messager$charSequence): void;
          printWarning(msg: Messager$charSequence, e: javax.lang.model.element.Element): void;
        }
        interface Messager extends CombineTypes<[_Messager, java.lang.Object]> {}
        interface _ProcessingEnvironment$$static extends ClassLike {
        }
        let ProcessingEnvironment: _ProcessingEnvironment$$static;
        interface _ProcessingEnvironment {
          getElementUtils(): javax.lang.model.util.Elements;
          getFiler(): Filer;
          getLocale(): java.util.Locale;
          getMessager(): Messager;
          getOptions(): java.util.Map<string,string>;
          getSourceVersion(): javax.lang.model.SourceVersion;
          getTypeUtils(): javax.lang.model.util.Types;
          isPreviewEnabled(): boolean;
        }
        interface ProcessingEnvironment extends CombineTypes<[_ProcessingEnvironment, java.lang.Object]> {}
        interface _Processor$$static extends ClassLike {
        }
        let Processor: _Processor$$static;
        interface _Processor {
          getCompletions(a0: javax.lang.model.element.Element, a1: javax.lang.model.element.AnnotationMirror, a2: javax.lang.model.element.ExecutableElement, a3: string): java.lang.Iterable<Completion>;
          getSupportedAnnotationTypes(): java.util.Set<string>;
          getSupportedOptions(): java.util.Set<string>;
          getSupportedSourceVersion(): javax.lang.model.SourceVersion;
          init(a0: ProcessingEnvironment): void;
          process(a0: java.util.Set<javax.lang.model.element.TypeElement>, a1: RoundEnvironment): boolean;
        }
        interface Processor extends CombineTypes<[_Processor, java.lang.Object]> {}
        interface _RoundEnvironment$$static extends ClassLike {
        }
        let RoundEnvironment: _RoundEnvironment$$static;
        interface _RoundEnvironment {
          errorRaised(): boolean;
          getElementsAnnotatedWith(a0: javax.lang.model.element.TypeElement): java.util.Set<javax.lang.model.element.Element>;
          getElementsAnnotatedWith(a0: java.lang.Class<java.lang.annotation.Annotation>): java.util.Set<javax.lang.model.element.Element>;
          getElementsAnnotatedWithAny(annotations: javax.lang.model.element.TypeElement[]): java.util.Set<javax.lang.model.element.Element>;
          getElementsAnnotatedWithAny(...annotations: javax.lang.model.element.TypeElement[]): java.util.Set<javax.lang.model.element.Element>;
          getElementsAnnotatedWithAny(annotations: java.util.Set<java.lang.Class<java.lang.annotation.Annotation>>): java.util.Set<javax.lang.model.element.Element>;
          getRootElements(): java.util.Set<javax.lang.model.element.Element>;
          processingOver(): boolean;
        }
        interface RoundEnvironment extends CombineTypes<[_RoundEnvironment, java.lang.Object]> {}
        interface _SupportedAnnotationTypes$$static extends ClassLike {
        }
        let SupportedAnnotationTypes: _SupportedAnnotationTypes$$static;
        interface _SupportedAnnotationTypes {
          value(): string[];
(): string[];
        }
        interface SupportedAnnotationTypes extends CombineTypes<[_SupportedAnnotationTypes, java.lang.annotation.Annotation, java.lang.Object]> {}
        interface _SupportedOptions$$static extends ClassLike {
        }
        let SupportedOptions: _SupportedOptions$$static;
        interface _SupportedOptions {
          value(): string[];
(): string[];
        }
        interface SupportedOptions extends CombineTypes<[_SupportedOptions, java.lang.annotation.Annotation, java.lang.Object]> {}
        interface _SupportedSourceVersion$$static extends ClassLike {
        }
        let SupportedSourceVersion: _SupportedSourceVersion$$static;
        interface _SupportedSourceVersion {
          value(): javax.lang.model.SourceVersion;
(): javax.lang.model.SourceVersion;
        }
        interface SupportedSourceVersion extends CombineTypes<[_SupportedSourceVersion, java.lang.annotation.Annotation, java.lang.Object]> {}
      }
    }
    module lang {
      module model {
        module element {
          interface _AnnotationMirror$$static extends ClassLike {
          }
          let AnnotationMirror: _AnnotationMirror$$static;
          interface _AnnotationMirror {
            getAnnotationType(): model.type.DeclaredType;
            getElementValues(): java.util.Map<ExecutableElement,AnnotationValue>;
          }
          interface AnnotationMirror extends CombineTypes<[_AnnotationMirror, java.lang.Object]> {}
          interface _AnnotationValue$$static extends ClassLike {
          }
          let AnnotationValue: _AnnotationValue$$static;
          interface _AnnotationValue {
            accept<R, P>(a0: AnnotationValueVisitor<R,P>, a1: P): R;
            getValue(): any;
            toString(): string;
          }
          interface AnnotationValue extends CombineTypes<[_AnnotationValue, java.lang.Object]> {}
          interface _AnnotationValueVisitor$$static<R,P> extends ClassLike {
          }
          let AnnotationValueVisitor: _AnnotationValueVisitor$$static<R,P>;
          interface _AnnotationValueVisitor<R,P> {
            visit(a0: AnnotationValue, a1: P): R;
            visit(av: AnnotationValue): R;
            visitAnnotation(a0: AnnotationMirror, a1: P): R;
            visitArray(a0: java.util.List<AnnotationValue>, a1: P): R;
            visitBoolean(a0: boolean, a1: P): R;
            visitByte(a0: byte, a1: P): R;
            visitChar(a0: char, a1: P): R;
            visitDouble(a0: double, a1: P): R;
            visitEnumConstant(a0: VariableElement, a1: P): R;
            visitFloat(a0: float, a1: P): R;
            visitInt(a0: int, a1: P): R;
            visitLong(a0: long, a1: P): R;
            visitShort(a0: short, a1: P): R;
            visitString(a0: string, a1: P): R;
            visitType(a0: model.type.TypeMirror, a1: P): R;
            visitUnknown(a0: AnnotationValue, a1: P): R;
          }
          interface AnnotationValueVisitor<R,P> extends CombineTypes<[_AnnotationValueVisitor<R,P>, java.lang.Object]> {}
          interface _Element$$static extends ClassLike {
          }
          let Element: _Element$$static;
          interface _Element {
            accept<R, P>(a0: ElementVisitor<R,P>, a1: P): R;
            asType(): model.type.TypeMirror;
            equals(a0: any): boolean;
            getAnnotation<A>(a0: java.lang.Class<A>): A;
            getAnnotationMirrors(): java.util.List<AnnotationMirror>;
            getAnnotationsByType<A>(a0: java.lang.Class<A>): A[];
            getEnclosedElements(): java.util.List<Element>;
            getEnclosingElement(): Element;
            getKind(): ElementKind;
            getModifiers(): java.util.Set<Modifier>;
            getSimpleName(): Name;
            hashCode(): int;
          }
          interface Element extends CombineTypes<[_Element, javax.lang.model.AnnotatedConstruct, java.lang.Object]> {}
          interface _ElementKind$$static extends ClassLike {
            valueOf(name: string): ElementKind;
            values(): ElementKind[];
            readonly ANNOTATION_TYPE: ElementKind;
            readonly BINDING_VARIABLE: ElementKind;
            readonly CLASS: ElementKind;
            readonly CONSTRUCTOR: ElementKind;
            readonly ENUM: ElementKind;
            readonly ENUM_CONSTANT: ElementKind;
            readonly EXCEPTION_PARAMETER: ElementKind;
            readonly FIELD: ElementKind;
            readonly INSTANCE_INIT: ElementKind;
            readonly INTERFACE: ElementKind;
            readonly LOCAL_VARIABLE: ElementKind;
            readonly METHOD: ElementKind;
            readonly MODULE: ElementKind;
            readonly OTHER: ElementKind;
            readonly PACKAGE: ElementKind;
            readonly PARAMETER: ElementKind;
            readonly RECORD: ElementKind;
            readonly RECORD_COMPONENT: ElementKind;
            readonly RESOURCE_VARIABLE: ElementKind;
            readonly STATIC_INIT: ElementKind;
            readonly TYPE_PARAMETER: ElementKind;
          }
          let ElementKind: _ElementKind$$static;
          interface _ElementKind {
            isClass(): boolean;
            isDeclaredType(): boolean;
            isExecutable(): boolean;
            isField(): boolean;
            isInitializer(): boolean;
            isInterface(): boolean;
            isVariable(): boolean;
          }
          interface ElementKind extends CombineTypes<[_ElementKind]> {}
          interface _ElementVisitor$$static<R,P> extends ClassLike {
          }
          let ElementVisitor: _ElementVisitor$$static<R,P>;
          interface _ElementVisitor<R,P> {
            visit(a0: Element, a1: P): R;
            visit(e: Element): R;
            visitExecutable(a0: ExecutableElement, a1: P): R;
            visitModule(e: ModuleElement, p: P): R;
            visitPackage(a0: PackageElement, a1: P): R;
            visitRecordComponent(e: RecordComponentElement, p: P): R;
            visitType(a0: TypeElement, a1: P): R;
            visitTypeParameter(a0: TypeParameterElement, a1: P): R;
            visitUnknown(a0: Element, a1: P): R;
            visitVariable(a0: VariableElement, a1: P): R;
          }
          interface ElementVisitor<R,P> extends CombineTypes<[_ElementVisitor<R,P>, java.lang.Object]> {}
          interface _ExecutableElement$$static extends ClassLike {
          }
          let ExecutableElement: _ExecutableElement$$static;
          interface _ExecutableElement {
            asType(): model.type.TypeMirror;
            getDefaultValue(): AnnotationValue;
            getEnclosingElement(): Element;
            getParameters(): java.util.List<VariableElement>;
            getReceiverType(): model.type.TypeMirror;
            getReturnType(): model.type.TypeMirror;
            getSimpleName(): Name;
            getThrownTypes(): java.util.List<model.type.TypeMirror>;
            getTypeParameters(): java.util.List<TypeParameterElement>;
            isDefault(): boolean;
            isVarArgs(): boolean;
          }
          interface ExecutableElement extends CombineTypes<[_ExecutableElement, java.lang.Object, javax.lang.model.element.Element, javax.lang.model.element.Parameterizable]> {}
          interface _Modifier$$static extends ClassLike {
            valueOf(name: string): Modifier;
            values(): Modifier[];
            readonly ABSTRACT: Modifier;
            readonly DEFAULT: Modifier;
            readonly FINAL: Modifier;
            readonly NATIVE: Modifier;
            readonly NON_SEALED: Modifier;
            readonly PRIVATE: Modifier;
            readonly PROTECTED: Modifier;
            readonly PUBLIC: Modifier;
            readonly SEALED: Modifier;
            readonly STATIC: Modifier;
            readonly STRICTFP: Modifier;
            readonly SYNCHRONIZED: Modifier;
            readonly TRANSIENT: Modifier;
            readonly VOLATILE: Modifier;
          }
          let Modifier: _Modifier$$static;
          interface _Modifier {
            toString(): string;
          }
          interface Modifier extends CombineTypes<[_Modifier]> {}
          interface _ModuleElement$$static extends ClassLike {
          }
          let ModuleElement: _ModuleElement$$static;
          interface _ModuleElement {
            asType(): model.type.TypeMirror;
            getDirectives(): java.util.List<ModuleElement$Directive>;
            getEnclosedElements(): java.util.List<Element>;
            getEnclosingElement(): Element;
            getQualifiedName(): Name;
            getSimpleName(): Name;
            isOpen(): boolean;
            isUnnamed(): boolean;
          }
          interface ModuleElement extends CombineTypes<[_ModuleElement, java.lang.Object, javax.lang.model.element.Element, javax.lang.model.element.QualifiedNameable]> {}
          interface _ModuleElement$Directive$$static extends ClassLike {
          }
          let ModuleElement$Directive: _ModuleElement$Directive$$static;
          interface _ModuleElement$Directive {
            accept<R, P>(a0: ModuleElement$DirectiveVisitor<R,P>, a1: P): R;
            getKind(): ModuleElement$DirectiveKind;
          }
          interface ModuleElement$Directive extends CombineTypes<[_ModuleElement$Directive, java.lang.Object]> {}
          interface _ModuleElement$DirectiveKind$$static extends ClassLike {
            valueOf(name: string): ModuleElement$DirectiveKind;
            values(): ModuleElement$DirectiveKind[];
            readonly EXPORTS: ModuleElement$DirectiveKind;
            readonly OPENS: ModuleElement$DirectiveKind;
            readonly PROVIDES: ModuleElement$DirectiveKind;
            readonly REQUIRES: ModuleElement$DirectiveKind;
            readonly USES: ModuleElement$DirectiveKind;
          }
          let ModuleElement$DirectiveKind: _ModuleElement$DirectiveKind$$static;
          interface _ModuleElement$DirectiveKind {
          }
          interface ModuleElement$DirectiveKind extends CombineTypes<[_ModuleElement$DirectiveKind]> {}
          interface _ModuleElement$DirectiveVisitor$$static<R,P> extends ClassLike {
          }
          let ModuleElement$DirectiveVisitor: _ModuleElement$DirectiveVisitor$$static<R,P>;
          interface _ModuleElement$DirectiveVisitor<R,P> {
            visit(d: ModuleElement$Directive): R;
            visit(d: ModuleElement$Directive, p: P): R;
            visitExports(a0: ModuleElement$ExportsDirective, a1: P): R;
            visitOpens(a0: ModuleElement$OpensDirective, a1: P): R;
            visitProvides(a0: ModuleElement$ProvidesDirective, a1: P): R;
            visitRequires(a0: ModuleElement$RequiresDirective, a1: P): R;
            visitUnknown(d: ModuleElement$Directive, p: P): R;
            visitUses(a0: ModuleElement$UsesDirective, a1: P): R;
          }
          interface ModuleElement$DirectiveVisitor<R,P> extends CombineTypes<[_ModuleElement$DirectiveVisitor<R,P>, java.lang.Object]> {}
          interface _ModuleElement$ExportsDirective$$static extends ClassLike {
          }
          let ModuleElement$ExportsDirective: _ModuleElement$ExportsDirective$$static;
          interface _ModuleElement$ExportsDirective {
            getPackage(): PackageElement;
            getTargetModules(): java.util.List<ModuleElement>;
          }
          interface ModuleElement$ExportsDirective extends CombineTypes<[_ModuleElement$ExportsDirective, javax.lang.model.element.ModuleElement$Directive, java.lang.Object]> {}
          interface _ModuleElement$OpensDirective$$static extends ClassLike {
          }
          let ModuleElement$OpensDirective: _ModuleElement$OpensDirective$$static;
          interface _ModuleElement$OpensDirective {
            getPackage(): PackageElement;
            getTargetModules(): java.util.List<ModuleElement>;
          }
          interface ModuleElement$OpensDirective extends CombineTypes<[_ModuleElement$OpensDirective, javax.lang.model.element.ModuleElement$Directive, java.lang.Object]> {}
          interface _ModuleElement$ProvidesDirective$$static extends ClassLike {
          }
          let ModuleElement$ProvidesDirective: _ModuleElement$ProvidesDirective$$static;
          interface _ModuleElement$ProvidesDirective {
            getImplementations(): java.util.List<TypeElement>;
            getService(): TypeElement;
          }
          interface ModuleElement$ProvidesDirective extends CombineTypes<[_ModuleElement$ProvidesDirective, javax.lang.model.element.ModuleElement$Directive, java.lang.Object]> {}
          interface _ModuleElement$RequiresDirective$$static extends ClassLike {
          }
          let ModuleElement$RequiresDirective: _ModuleElement$RequiresDirective$$static;
          interface _ModuleElement$RequiresDirective {
            getDependency(): ModuleElement;
            isStatic(): boolean;
            isTransitive(): boolean;
          }
          interface ModuleElement$RequiresDirective extends CombineTypes<[_ModuleElement$RequiresDirective, javax.lang.model.element.ModuleElement$Directive, java.lang.Object]> {}
          interface _ModuleElement$UsesDirective$$static extends ClassLike {
          }
          let ModuleElement$UsesDirective: _ModuleElement$UsesDirective$$static;
          interface _ModuleElement$UsesDirective {
            getService(): TypeElement;
(): TypeElement;
          }
          interface ModuleElement$UsesDirective extends CombineTypes<[_ModuleElement$UsesDirective, javax.lang.model.element.ModuleElement$Directive, java.lang.Object]> {}
          interface _Name$$static extends ClassLike {
          }
          let Name: _Name$$static;
          interface _Name {
            contentEquals(a0: Name$charSequence): boolean;
            equals(a0: any): boolean;
            hashCode(): int;
          }
          interface Name extends CombineTypes<[_Name, java.lang.CharSequence, java.lang.Object]> {}
          interface _NestingKind$$static extends ClassLike {
            valueOf(name: string): NestingKind;
            values(): NestingKind[];
            readonly ANONYMOUS: NestingKind;
            readonly LOCAL: NestingKind;
            readonly MEMBER: NestingKind;
            readonly TOP_LEVEL: NestingKind;
          }
          let NestingKind: _NestingKind$$static;
          interface _NestingKind {
            isNested(): boolean;
          }
          interface NestingKind extends CombineTypes<[_NestingKind]> {}
          interface _PackageElement$$static extends ClassLike {
          }
          let PackageElement: _PackageElement$$static;
          interface _PackageElement {
            asType(): model.type.TypeMirror;
            getEnclosedElements(): java.util.List<Element>;
            getEnclosingElement(): Element;
            getQualifiedName(): Name;
            getSimpleName(): Name;
            isUnnamed(): boolean;
          }
          interface PackageElement extends CombineTypes<[_PackageElement, java.lang.Object, javax.lang.model.element.Element, javax.lang.model.element.QualifiedNameable]> {}
          interface _Parameterizable$$static extends ClassLike {
          }
          let Parameterizable: _Parameterizable$$static;
          interface _Parameterizable {
            getTypeParameters(): java.util.List<TypeParameterElement>;
(): java.util.List<TypeParameterElement>;
          }
          interface Parameterizable extends CombineTypes<[_Parameterizable, java.lang.Object, javax.lang.model.element.Element]> {}
          interface _QualifiedNameable$$static extends ClassLike {
          }
          let QualifiedNameable: _QualifiedNameable$$static;
          interface _QualifiedNameable {
            getQualifiedName(): Name;
(): Name;
          }
          interface QualifiedNameable extends CombineTypes<[_QualifiedNameable, java.lang.Object, javax.lang.model.element.Element]> {}
          interface _RecordComponentElement$$static extends ClassLike {
          }
          let RecordComponentElement: _RecordComponentElement$$static;
          interface _RecordComponentElement {
            getAccessor(): ExecutableElement;
            getEnclosingElement(): Element;
            getSimpleName(): Name;
          }
          interface RecordComponentElement extends CombineTypes<[_RecordComponentElement, java.lang.Object, javax.lang.model.element.Element]> {}
          interface _TypeElement$$static extends ClassLike {
          }
          let TypeElement: _TypeElement$$static;
          interface _TypeElement {
            asType(): model.type.TypeMirror;
            getEnclosedElements(): java.util.List<Element>;
            getEnclosingElement(): Element;
            getInterfaces(): java.util.List<model.type.TypeMirror>;
            getNestingKind(): NestingKind;
            getPermittedSubclasses(): java.util.List<model.type.TypeMirror>;
            getQualifiedName(): Name;
            getRecordComponents(): java.util.List<RecordComponentElement>;
            getSimpleName(): Name;
            getSuperclass(): model.type.TypeMirror;
            getTypeParameters(): java.util.List<TypeParameterElement>;
            isUnnamed(): boolean;
          }
          interface TypeElement extends CombineTypes<[_TypeElement, java.lang.Object, javax.lang.model.element.Element, javax.lang.model.element.QualifiedNameable, javax.lang.model.element.Parameterizable]> {}
          interface _TypeParameterElement$$static extends ClassLike {
          }
          let TypeParameterElement: _TypeParameterElement$$static;
          interface _TypeParameterElement {
            asType(): model.type.TypeMirror;
            getBounds(): java.util.List<model.type.TypeMirror>;
            getEnclosingElement(): Element;
            getGenericElement(): Element;
          }
          interface TypeParameterElement extends CombineTypes<[_TypeParameterElement, java.lang.Object, javax.lang.model.element.Element]> {}
          interface _UnknownAnnotationValueException$$static extends ClassLike {
            _serialVersionUID: long;
            new(av: AnnotationValue, p: any): UnknownAnnotationValueException;
          }
          let UnknownAnnotationValueException: _UnknownAnnotationValueException$$static;
          interface _UnknownAnnotationValueException {
            getArgument(): any;
            getUnknownAnnotationValue(): AnnotationValue;
            _av: AnnotationValue;
            _parameter: any;
          }
          interface UnknownAnnotationValueException extends CombineTypes<[_UnknownAnnotationValueException, javax.lang.model.UnknownEntityException]> {}
          interface _UnknownDirectiveException$$static extends ClassLike {
            _serialVersionUID: long;
            new(d: ModuleElement$Directive, p: any): UnknownDirectiveException;
          }
          let UnknownDirectiveException: _UnknownDirectiveException$$static;
          interface _UnknownDirectiveException {
            getArgument(): any;
            getUnknownDirective(): ModuleElement$Directive;
            _directive: ModuleElement$Directive;
            _parameter: any;
          }
          interface UnknownDirectiveException extends CombineTypes<[_UnknownDirectiveException, javax.lang.model.UnknownEntityException]> {}
          interface _UnknownElementException$$static extends ClassLike {
            _serialVersionUID: long;
            new(e: Element, p: any): UnknownElementException;
          }
          let UnknownElementException: _UnknownElementException$$static;
          interface _UnknownElementException {
            getArgument(): any;
            getUnknownElement(): Element;
            _element: Element;
            _parameter: any;
          }
          interface UnknownElementException extends CombineTypes<[_UnknownElementException, javax.lang.model.UnknownEntityException]> {}
          interface _VariableElement$$static extends ClassLike {
          }
          let VariableElement: _VariableElement$$static;
          interface _VariableElement {
            asType(): model.type.TypeMirror;
            getConstantValue(): any;
            getEnclosingElement(): Element;
            getSimpleName(): Name;
            isUnnamed(): boolean;
          }
          interface VariableElement extends CombineTypes<[_VariableElement, java.lang.Object, javax.lang.model.element.Element]> {}
        }
        module type {
          interface _ArrayType$$static extends ClassLike {
          }
          let ArrayType: _ArrayType$$static;
          interface _ArrayType {
            getComponentType(): TypeMirror;
(): TypeMirror;
          }
          interface ArrayType extends CombineTypes<[_ArrayType, java.lang.Object, javax.lang.model.type.ReferenceType]> {}
          interface _DeclaredType$$static extends ClassLike {
          }
          let DeclaredType: _DeclaredType$$static;
          interface _DeclaredType {
            asElement(): model.element.Element;
            getEnclosingType(): TypeMirror;
            getTypeArguments(): java.util.List<TypeMirror>;
          }
          interface DeclaredType extends CombineTypes<[_DeclaredType, java.lang.Object, javax.lang.model.type.ReferenceType]> {}
          interface _ErrorType$$static extends ClassLike {
          }
          let ErrorType: _ErrorType$$static;
          interface _ErrorType {
          }
          interface ErrorType extends CombineTypes<[_ErrorType, javax.lang.model.type.DeclaredType, java.lang.Object]> {}
          interface _ExecutableType$$static extends ClassLike {
          }
          let ExecutableType: _ExecutableType$$static;
          interface _ExecutableType {
            getParameterTypes(): java.util.List<TypeMirror>;
            getReceiverType(): TypeMirror;
            getReturnType(): TypeMirror;
            getThrownTypes(): java.util.List<TypeMirror>;
            getTypeVariables(): java.util.List<TypeVariable>;
          }
          interface ExecutableType extends CombineTypes<[_ExecutableType, javax.lang.model.type.TypeMirror, java.lang.Object]> {}
          interface _IntersectionType$$static extends ClassLike {
          }
          let IntersectionType: _IntersectionType$$static;
          interface _IntersectionType {
            getBounds(): java.util.List<TypeMirror>;
(): java.util.List<TypeMirror>;
          }
          interface IntersectionType extends CombineTypes<[_IntersectionType, javax.lang.model.type.TypeMirror, java.lang.Object]> {}
          interface _MirroredTypeException$$static extends ClassLike {
            _serialVersionUID: long;
            new(type: TypeMirror): MirroredTypeException;
          }
          let MirroredTypeException: _MirroredTypeException$$static;
          interface _MirroredTypeException {
            getTypeMirror(): TypeMirror;
            _readObject(s: java.io.ObjectInputStream): void;
            _type: TypeMirror;
          }
          interface MirroredTypeException extends CombineTypes<[_MirroredTypeException, javax.lang.model.type.MirroredTypesException]> {}
          interface _MirroredTypesException$$static extends ClassLike {
            _serialVersionUID: long;
            _new(message: string, type: TypeMirror): MirroredTypesException;
            new(types: java.util.List<TypeMirror>): MirroredTypesException;
          }
          let MirroredTypesException: _MirroredTypesException$$static;
          interface _MirroredTypesException {
            getTypeMirrors(): java.util.List<TypeMirror>;
            _readObject(s: java.io.ObjectInputStream): void;
            _types: java.util.List<TypeMirror>;
          }
          interface MirroredTypesException extends CombineTypes<[_MirroredTypesException, java.lang.RuntimeException]> {}
          interface _NoType$$static extends ClassLike {
          }
          let NoType: _NoType$$static;
          interface _NoType {
          }
          interface NoType extends CombineTypes<[_NoType, javax.lang.model.type.TypeMirror, java.lang.Object]> {}
          interface _NullType$$static extends ClassLike {
          }
          let NullType: _NullType$$static;
          interface _NullType {
          }
          interface NullType extends CombineTypes<[_NullType, java.lang.Object, javax.lang.model.type.ReferenceType]> {}
          interface _PrimitiveType$$static extends ClassLike {
          }
          let PrimitiveType: _PrimitiveType$$static;
          interface _PrimitiveType {
          }
          interface PrimitiveType extends CombineTypes<[_PrimitiveType, javax.lang.model.type.TypeMirror, java.lang.Object]> {}
          interface _ReferenceType$$static extends ClassLike {
          }
          let ReferenceType: _ReferenceType$$static;
          interface _ReferenceType {
          }
          interface ReferenceType extends CombineTypes<[_ReferenceType, javax.lang.model.type.TypeMirror, java.lang.Object]> {}
          interface _TypeKind$$static extends ClassLike {
            valueOf(name: string): TypeKind;
            values(): TypeKind[];
            readonly ARRAY: TypeKind;
            readonly BOOLEAN: TypeKind;
            readonly BYTE: TypeKind;
            readonly CHAR: TypeKind;
            readonly DECLARED: TypeKind;
            readonly DOUBLE: TypeKind;
            readonly ERROR: TypeKind;
            readonly EXECUTABLE: TypeKind;
            readonly FLOAT: TypeKind;
            readonly INT: TypeKind;
            readonly INTERSECTION: TypeKind;
            readonly LONG: TypeKind;
            readonly MODULE: TypeKind;
            readonly NONE: TypeKind;
            readonly NULL: TypeKind;
            readonly OTHER: TypeKind;
            readonly PACKAGE: TypeKind;
            readonly SHORT: TypeKind;
            readonly TYPEVAR: TypeKind;
            readonly UNION: TypeKind;
            readonly VOID: TypeKind;
            readonly WILDCARD: TypeKind;
          }
          let TypeKind: _TypeKind$$static;
          interface _TypeKind {
            isPrimitive(): boolean;
          }
          interface TypeKind extends CombineTypes<[_TypeKind]> {}
          interface _TypeMirror$$static extends ClassLike {
          }
          let TypeMirror: _TypeMirror$$static;
          interface _TypeMirror {
            accept<R, P>(a0: TypeVisitor<R,P>, a1: P): R;
            equals(a0: any): boolean;
            getAnnotation<A>(a0: java.lang.Class<A>): A;
            getAnnotationMirrors(): java.util.List<model.element.AnnotationMirror>;
            getAnnotationsByType<A>(a0: java.lang.Class<A>): A[];
            getKind(): TypeKind;
            hashCode(): int;
            toString(): string;
          }
          interface TypeMirror extends CombineTypes<[_TypeMirror, javax.lang.model.AnnotatedConstruct, java.lang.Object]> {}
          interface _TypeVariable$$static extends ClassLike {
          }
          let TypeVariable: _TypeVariable$$static;
          interface _TypeVariable {
            asElement(): model.element.Element;
            getLowerBound(): TypeMirror;
            getUpperBound(): TypeMirror;
          }
          interface TypeVariable extends CombineTypes<[_TypeVariable, java.lang.Object, javax.lang.model.type.ReferenceType]> {}
          interface _TypeVisitor$$static<R,P> extends ClassLike {
          }
          let TypeVisitor: _TypeVisitor$$static<R,P>;
          interface _TypeVisitor<R,P> {
            visit(a0: TypeMirror, a1: P): R;
            visit(t: TypeMirror): R;
            visitArray(a0: ArrayType, a1: P): R;
            visitDeclared(a0: DeclaredType, a1: P): R;
            visitError(a0: ErrorType, a1: P): R;
            visitExecutable(a0: ExecutableType, a1: P): R;
            visitIntersection(a0: IntersectionType, a1: P): R;
            visitNoType(a0: NoType, a1: P): R;
            visitNull(a0: NullType, a1: P): R;
            visitPrimitive(a0: PrimitiveType, a1: P): R;
            visitTypeVariable(a0: TypeVariable, a1: P): R;
            visitUnion(a0: UnionType, a1: P): R;
            visitUnknown(a0: TypeMirror, a1: P): R;
            visitWildcard(a0: WildcardType, a1: P): R;
          }
          interface TypeVisitor<R,P> extends CombineTypes<[_TypeVisitor<R,P>, java.lang.Object]> {}
          interface _UnionType$$static extends ClassLike {
          }
          let UnionType: _UnionType$$static;
          interface _UnionType {
            getAlternatives(): java.util.List<TypeMirror>;
(): java.util.List<TypeMirror>;
          }
          interface UnionType extends CombineTypes<[_UnionType, javax.lang.model.type.TypeMirror, java.lang.Object]> {}
          interface _UnknownTypeException$$static extends ClassLike {
            _serialVersionUID: long;
            new(t: TypeMirror, p: any): UnknownTypeException;
          }
          let UnknownTypeException: _UnknownTypeException$$static;
          interface _UnknownTypeException {
            getArgument(): any;
            getUnknownType(): TypeMirror;
            _parameter: any;
            _type: TypeMirror;
          }
          interface UnknownTypeException extends CombineTypes<[_UnknownTypeException, javax.lang.model.UnknownEntityException]> {}
          interface _WildcardType$$static extends ClassLike {
          }
          let WildcardType: _WildcardType$$static;
          interface _WildcardType {
            getExtendsBound(): TypeMirror;
            getSuperBound(): TypeMirror;
          }
          interface WildcardType extends CombineTypes<[_WildcardType, javax.lang.model.type.TypeMirror, java.lang.Object]> {}
        }
        module util {
          interface _AbstractAnnotationValueVisitor14$$static<R,P> extends ClassLike {
            _new(): AbstractAnnotationValueVisitor14<R,P>;
          }
          let AbstractAnnotationValueVisitor14: _AbstractAnnotationValueVisitor14$$static<R,P>;
          interface _AbstractAnnotationValueVisitor14<R,P> {
          }
          interface AbstractAnnotationValueVisitor14<R,P> extends CombineTypes<[_AbstractAnnotationValueVisitor14<R,P>, AbstractAnnotationValueVisitor9<R,P>]> {}
          interface _AbstractAnnotationValueVisitor6$$static<R,P> extends ClassLike {
            _new(): AbstractAnnotationValueVisitor6<R,P>;
          }
          let AbstractAnnotationValueVisitor6: _AbstractAnnotationValueVisitor6$$static<R,P>;
          interface _AbstractAnnotationValueVisitor6<R,P> {
            visit(av: model.element.AnnotationValue, p: P): R;
            visit(av: model.element.AnnotationValue): R;
            visitUnknown(av: model.element.AnnotationValue, p: P): R;
          }
          interface AbstractAnnotationValueVisitor6<R,P> extends CombineTypes<[_AbstractAnnotationValueVisitor6<R,P>, java.lang.Object, model.element.AnnotationValueVisitor<R,P>]> {}
          interface _AbstractAnnotationValueVisitor7$$static<R,P> extends ClassLike {
            _new(): AbstractAnnotationValueVisitor7<R,P>;
          }
          let AbstractAnnotationValueVisitor7: _AbstractAnnotationValueVisitor7$$static<R,P>;
          interface _AbstractAnnotationValueVisitor7<R,P> {
          }
          interface AbstractAnnotationValueVisitor7<R,P> extends CombineTypes<[_AbstractAnnotationValueVisitor7<R,P>, AbstractAnnotationValueVisitor6<R,P>]> {}
          interface _AbstractAnnotationValueVisitor8$$static<R,P> extends ClassLike {
            _new(): AbstractAnnotationValueVisitor8<R,P>;
          }
          let AbstractAnnotationValueVisitor8: _AbstractAnnotationValueVisitor8$$static<R,P>;
          interface _AbstractAnnotationValueVisitor8<R,P> {
          }
          interface AbstractAnnotationValueVisitor8<R,P> extends CombineTypes<[_AbstractAnnotationValueVisitor8<R,P>, AbstractAnnotationValueVisitor7<R,P>]> {}
          interface _AbstractAnnotationValueVisitor9$$static<R,P> extends ClassLike {
            _new(): AbstractAnnotationValueVisitor9<R,P>;
          }
          let AbstractAnnotationValueVisitor9: _AbstractAnnotationValueVisitor9$$static<R,P>;
          interface _AbstractAnnotationValueVisitor9<R,P> {
          }
          interface AbstractAnnotationValueVisitor9<R,P> extends CombineTypes<[_AbstractAnnotationValueVisitor9<R,P>, AbstractAnnotationValueVisitor8<R,P>]> {}
          interface _AbstractElementVisitor14$$static<R,P> extends ClassLike {
            _new(): AbstractElementVisitor14<R,P>;
          }
          let AbstractElementVisitor14: _AbstractElementVisitor14$$static<R,P>;
          interface _AbstractElementVisitor14<R,P> {
            visitRecordComponent(a0: model.element.RecordComponentElement, a1: P): R;
(a0: model.element.RecordComponentElement, a1: P): R;
          }
          interface AbstractElementVisitor14<R,P> extends CombineTypes<[_AbstractElementVisitor14<R,P>, AbstractElementVisitor9<R,P>]> {}
          interface _AbstractElementVisitor6$$static<R,P> extends ClassLike {
            _new(): AbstractElementVisitor6<R,P>;
          }
          let AbstractElementVisitor6: _AbstractElementVisitor6$$static<R,P>;
          interface _AbstractElementVisitor6<R,P> {
            visit(e: model.element.Element, p: P): R;
            visit(e: model.element.Element): R;
            visitModule(e: model.element.ModuleElement, p: P): R;
            visitRecordComponent(e: model.element.RecordComponentElement, p: P): R;
            visitUnknown(e: model.element.Element, p: P): R;
          }
          interface AbstractElementVisitor6<R,P> extends CombineTypes<[_AbstractElementVisitor6<R,P>, model.element.ElementVisitor<R,P>, java.lang.Object]> {}
          interface _AbstractElementVisitor7$$static<R,P> extends ClassLike {
            _new(): AbstractElementVisitor7<R,P>;
          }
          let AbstractElementVisitor7: _AbstractElementVisitor7$$static<R,P>;
          interface _AbstractElementVisitor7<R,P> {
          }
          interface AbstractElementVisitor7<R,P> extends CombineTypes<[_AbstractElementVisitor7<R,P>, AbstractElementVisitor6<R,P>]> {}
          interface _AbstractElementVisitor8$$static<R,P> extends ClassLike {
            _new(): AbstractElementVisitor8<R,P>;
          }
          let AbstractElementVisitor8: _AbstractElementVisitor8$$static<R,P>;
          interface _AbstractElementVisitor8<R,P> {
          }
          interface AbstractElementVisitor8<R,P> extends CombineTypes<[_AbstractElementVisitor8<R,P>, AbstractElementVisitor7<R,P>]> {}
          interface _AbstractElementVisitor9$$static<R,P> extends ClassLike {
            _new(): AbstractElementVisitor9<R,P>;
          }
          let AbstractElementVisitor9: _AbstractElementVisitor9$$static<R,P>;
          interface _AbstractElementVisitor9<R,P> {
            visitModule(a0: model.element.ModuleElement, a1: P): R;
(a0: model.element.ModuleElement, a1: P): R;
          }
          interface AbstractElementVisitor9<R,P> extends CombineTypes<[_AbstractElementVisitor9<R,P>, AbstractElementVisitor8<R,P>]> {}
          interface _AbstractTypeVisitor14$$static<R,P> extends ClassLike {
            _new(): AbstractTypeVisitor14<R,P>;
          }
          let AbstractTypeVisitor14: _AbstractTypeVisitor14$$static<R,P>;
          interface _AbstractTypeVisitor14<R,P> {
          }
          interface AbstractTypeVisitor14<R,P> extends CombineTypes<[_AbstractTypeVisitor14<R,P>, AbstractTypeVisitor9<R,P>]> {}
          interface _AbstractTypeVisitor6$$static<R,P> extends ClassLike {
            _new(): AbstractTypeVisitor6<R,P>;
          }
          let AbstractTypeVisitor6: _AbstractTypeVisitor6$$static<R,P>;
          interface _AbstractTypeVisitor6<R,P> {
            visit(t: model.type.TypeMirror, p: P): R;
            visit(t: model.type.TypeMirror): R;
            visitIntersection(t: model.type.IntersectionType, p: P): R;
            visitUnion(t: model.type.UnionType, p: P): R;
            visitUnknown(t: model.type.TypeMirror, p: P): R;
          }
          interface AbstractTypeVisitor6<R,P> extends CombineTypes<[_AbstractTypeVisitor6<R,P>, model.type.TypeVisitor<R,P>, java.lang.Object]> {}
          interface _AbstractTypeVisitor7$$static<R,P> extends ClassLike {
            _new(): AbstractTypeVisitor7<R,P>;
          }
          let AbstractTypeVisitor7: _AbstractTypeVisitor7$$static<R,P>;
          interface _AbstractTypeVisitor7<R,P> {
            visitUnion(a0: model.type.UnionType, a1: P): R;
(a0: model.type.UnionType, a1: P): R;
          }
          interface AbstractTypeVisitor7<R,P> extends CombineTypes<[_AbstractTypeVisitor7<R,P>, AbstractTypeVisitor6<R,P>]> {}
          interface _AbstractTypeVisitor8$$static<R,P> extends ClassLike {
            _new(): AbstractTypeVisitor8<R,P>;
          }
          let AbstractTypeVisitor8: _AbstractTypeVisitor8$$static<R,P>;
          interface _AbstractTypeVisitor8<R,P> {
            visitIntersection(a0: model.type.IntersectionType, a1: P): R;
(a0: model.type.IntersectionType, a1: P): R;
          }
          interface AbstractTypeVisitor8<R,P> extends CombineTypes<[_AbstractTypeVisitor8<R,P>, AbstractTypeVisitor7<R,P>]> {}
          interface _AbstractTypeVisitor9$$static<R,P> extends ClassLike {
            _new(): AbstractTypeVisitor9<R,P>;
          }
          let AbstractTypeVisitor9: _AbstractTypeVisitor9$$static<R,P>;
          interface _AbstractTypeVisitor9<R,P> {
          }
          interface AbstractTypeVisitor9<R,P> extends CombineTypes<[_AbstractTypeVisitor9<R,P>, AbstractTypeVisitor8<R,P>]> {}
          interface _ElementFilter$$static extends ClassLike {
            constructorsIn(elements: java.lang.Iterable<model.element.Element>): java.util.List<model.element.ExecutableElement>;
            constructorsIn(elements: java.util.Set<model.element.Element>): java.util.Set<model.element.ExecutableElement>;
            exportsIn(directives: java.lang.Iterable<model.element.ModuleElement$Directive>): java.util.List<model.element.ModuleElement$ExportsDirective>;
            fieldsIn(elements: java.lang.Iterable<model.element.Element>): java.util.List<model.element.VariableElement>;
            fieldsIn(elements: java.util.Set<model.element.Element>): java.util.Set<model.element.VariableElement>;
            _listFilter<E>(elements: java.lang.Iterable<model.element.Element>, targetKinds: java.util.Set<model.element.ElementKind>, clazz: java.lang.Class<E>): java.util.List<E>;
            _listFilter<D>(directives: java.lang.Iterable<model.element.ModuleElement$Directive>, directiveKind: model.element.ModuleElement$DirectiveKind, clazz: java.lang.Class<D>): java.util.List<D>;
            methodsIn(elements: java.lang.Iterable<model.element.Element>): java.util.List<model.element.ExecutableElement>;
            methodsIn(elements: java.util.Set<model.element.Element>): java.util.Set<model.element.ExecutableElement>;
            modulesIn(elements: java.lang.Iterable<model.element.Element>): java.util.List<model.element.ModuleElement>;
            modulesIn(elements: java.util.Set<model.element.Element>): java.util.Set<model.element.ModuleElement>;
            opensIn(directives: java.lang.Iterable<model.element.ModuleElement$Directive>): java.util.List<model.element.ModuleElement$OpensDirective>;
            packagesIn(elements: java.lang.Iterable<model.element.Element>): java.util.List<model.element.PackageElement>;
            packagesIn(elements: java.util.Set<model.element.Element>): java.util.Set<model.element.PackageElement>;
            providesIn(directives: java.lang.Iterable<model.element.ModuleElement$Directive>): java.util.List<model.element.ModuleElement$ProvidesDirective>;
            recordComponentsIn(elements: java.lang.Iterable<model.element.Element>): java.util.List<model.element.RecordComponentElement>;
            recordComponentsIn(elements: java.util.Set<model.element.Element>): java.util.Set<model.element.RecordComponentElement>;
            requiresIn(directives: java.lang.Iterable<model.element.ModuleElement$Directive>): java.util.List<model.element.ModuleElement$RequiresDirective>;
            _setFilter<E>(elements: java.util.Set<model.element.Element>, targetKinds: java.util.Set<model.element.ElementKind>, clazz: java.lang.Class<E>): java.util.Set<E>;
            typesIn(elements: java.lang.Iterable<model.element.Element>): java.util.List<model.element.TypeElement>;
            typesIn(elements: java.util.Set<model.element.Element>): java.util.Set<model.element.TypeElement>;
            usesIn(directives: java.lang.Iterable<model.element.ModuleElement$Directive>): java.util.List<model.element.ModuleElement$UsesDirective>;
            _CONSTRUCTOR_KIND: java.util.Set<model.element.ElementKind>;
            _FIELD_KINDS: java.util.Set<model.element.ElementKind>;
            _METHOD_KIND: java.util.Set<model.element.ElementKind>;
            _MODULE_KIND: java.util.Set<model.element.ElementKind>;
            _PACKAGE_KIND: java.util.Set<model.element.ElementKind>;
            _RECORD_COMPONENT_KIND: java.util.Set<model.element.ElementKind>;
            _TYPE_KINDS: java.util.Set<model.element.ElementKind>;
          }
          let ElementFilter: _ElementFilter$$static;
          interface _ElementFilter {
          }
          interface ElementFilter extends CombineTypes<[_ElementFilter, java.lang.Object]> {}
          interface _ElementKindVisitor14$$static<R,P> extends ClassLike {
            _new(): ElementKindVisitor14<R,P>;
            _new(defaultValue: R): ElementKindVisitor14<R,P>;
          }
          let ElementKindVisitor14: _ElementKindVisitor14$$static<R,P>;
          interface _ElementKindVisitor14<R,P> {
            visitRecordComponent(e: model.element.RecordComponentElement, p: P): R;
            visitTypeAsRecord(e: model.element.TypeElement, p: P): R;
            visitVariableAsBindingVariable(e: model.element.VariableElement, p: P): R;
          }
          interface ElementKindVisitor14<R,P> extends CombineTypes<[_ElementKindVisitor14<R,P>, ElementKindVisitor9<R,P>]> {}
          interface _ElementKindVisitor6$$static<R,P> extends ClassLike {
            _new(): ElementKindVisitor6<R,P>;
            _new(defaultValue: R): ElementKindVisitor6<R,P>;
          }
          let ElementKindVisitor6: _ElementKindVisitor6$$static<R,P>;
          interface _ElementKindVisitor6<R,P> {
            visitExecutable(e: model.element.ExecutableElement, p: P): R;
            visitExecutableAsConstructor(e: model.element.ExecutableElement, p: P): R;
            visitExecutableAsInstanceInit(e: model.element.ExecutableElement, p: P): R;
            visitExecutableAsMethod(e: model.element.ExecutableElement, p: P): R;
            visitExecutableAsStaticInit(e: model.element.ExecutableElement, p: P): R;
            visitPackage(e: model.element.PackageElement, p: P): R;
            visitType(e: model.element.TypeElement, p: P): R;
            visitTypeAsAnnotationType(e: model.element.TypeElement, p: P): R;
            visitTypeAsClass(e: model.element.TypeElement, p: P): R;
            visitTypeAsEnum(e: model.element.TypeElement, p: P): R;
            visitTypeAsInterface(e: model.element.TypeElement, p: P): R;
            visitTypeAsRecord(e: model.element.TypeElement, p: P): R;
            visitTypeParameter(e: model.element.TypeParameterElement, p: P): R;
            visitVariable(e: model.element.VariableElement, p: P): R;
            visitVariableAsBindingVariable(e: model.element.VariableElement, p: P): R;
            visitVariableAsEnumConstant(e: model.element.VariableElement, p: P): R;
            visitVariableAsExceptionParameter(e: model.element.VariableElement, p: P): R;
            visitVariableAsField(e: model.element.VariableElement, p: P): R;
            visitVariableAsLocalVariable(e: model.element.VariableElement, p: P): R;
            visitVariableAsParameter(e: model.element.VariableElement, p: P): R;
            visitVariableAsResourceVariable(e: model.element.VariableElement, p: P): R;
          }
          interface ElementKindVisitor6<R,P> extends CombineTypes<[_ElementKindVisitor6<R,P>, SimpleElementVisitor6<R,P>]> {}
          interface _ElementKindVisitor7$$static<R,P> extends ClassLike {
            _new(): ElementKindVisitor7<R,P>;
            _new(defaultValue: R): ElementKindVisitor7<R,P>;
          }
          let ElementKindVisitor7: _ElementKindVisitor7$$static<R,P>;
          interface _ElementKindVisitor7<R,P> {
            visitVariableAsResourceVariable(e: model.element.VariableElement, p: P): R;
          }
          interface ElementKindVisitor7<R,P> extends CombineTypes<[_ElementKindVisitor7<R,P>, ElementKindVisitor6<R,P>]> {}
          interface _ElementKindVisitor8$$static<R,P> extends ClassLike {
            _new(): ElementKindVisitor8<R,P>;
            _new(defaultValue: R): ElementKindVisitor8<R,P>;
          }
          let ElementKindVisitor8: _ElementKindVisitor8$$static<R,P>;
          interface _ElementKindVisitor8<R,P> {
          }
          interface ElementKindVisitor8<R,P> extends CombineTypes<[_ElementKindVisitor8<R,P>, ElementKindVisitor7<R,P>]> {}
          interface _ElementKindVisitor9$$static<R,P> extends ClassLike {
            _new(): ElementKindVisitor9<R,P>;
            _new(defaultValue: R): ElementKindVisitor9<R,P>;
          }
          let ElementKindVisitor9: _ElementKindVisitor9$$static<R,P>;
          interface _ElementKindVisitor9<R,P> {
            visitModule(e: model.element.ModuleElement, p: P): R;
          }
          interface ElementKindVisitor9<R,P> extends CombineTypes<[_ElementKindVisitor9<R,P>, ElementKindVisitor8<R,P>]> {}
          interface _ElementScanner14$$static<R,P> extends ClassLike {
            _new(): ElementScanner14<R,P>;
            _new(defaultValue: R): ElementScanner14<R,P>;
          }
          let ElementScanner14: _ElementScanner14$$static<R,P>;
          interface _ElementScanner14<R,P> {
            _createScanningList(element: model.element.Parameterizable, toBeScanned: java.util.List<model.element.Element>): java.util.List<model.element.Element>;
            visitExecutable(e: model.element.ExecutableElement, p: P): R;
            visitRecordComponent(e: model.element.RecordComponentElement, p: P): R;
            visitType(e: model.element.TypeElement, p: P): R;
          }
          interface ElementScanner14<R,P> extends CombineTypes<[_ElementScanner14<R,P>, ElementScanner9<R,P>]> {}
          interface _ElementScanner6$$static<R,P> extends ClassLike {
            _new(): ElementScanner6<R,P>;
            _new(defaultValue: R): ElementScanner6<R,P>;
          }
          let ElementScanner6: _ElementScanner6$$static<R,P>;
          interface _ElementScanner6<R,P> {
            scan(iterable: java.lang.Iterable<model.element.Element>, p: P): R;
            scan(e: model.element.Element, p: P): R;
            scan(e: model.element.Element): R;
            visitExecutable(e: model.element.ExecutableElement, p: P): R;
            visitPackage(e: model.element.PackageElement, p: P): R;
            visitType(e: model.element.TypeElement, p: P): R;
            visitTypeParameter(e: model.element.TypeParameterElement, p: P): R;
            visitVariable(e: model.element.VariableElement, p: P): R;
            _DEFAULT_VALUE: R;
          }
          interface ElementScanner6<R,P> extends CombineTypes<[_ElementScanner6<R,P>, AbstractElementVisitor6<R,P>]> {}
          interface _ElementScanner7$$static<R,P> extends ClassLike {
            _new(): ElementScanner7<R,P>;
            _new(defaultValue: R): ElementScanner7<R,P>;
          }
          let ElementScanner7: _ElementScanner7$$static<R,P>;
          interface _ElementScanner7<R,P> {
            visitVariable(e: model.element.VariableElement, p: P): R;
          }
          interface ElementScanner7<R,P> extends CombineTypes<[_ElementScanner7<R,P>, ElementScanner6<R,P>]> {}
          interface _ElementScanner8$$static<R,P> extends ClassLike {
            _new(): ElementScanner8<R,P>;
            _new(defaultValue: R): ElementScanner8<R,P>;
          }
          let ElementScanner8: _ElementScanner8$$static<R,P>;
          interface _ElementScanner8<R,P> {
          }
          interface ElementScanner8<R,P> extends CombineTypes<[_ElementScanner8<R,P>, ElementScanner7<R,P>]> {}
          interface _ElementScanner9$$static<R,P> extends ClassLike {
            _new(): ElementScanner9<R,P>;
            _new(defaultValue: R): ElementScanner9<R,P>;
          }
          let ElementScanner9: _ElementScanner9$$static<R,P>;
          interface _ElementScanner9<R,P> {
            visitModule(e: model.element.ModuleElement, p: P): R;
          }
          interface ElementScanner9<R,P> extends CombineTypes<[_ElementScanner9<R,P>, ElementScanner8<R,P>]> {}
          interface _Elements$$static extends ClassLike {
          }
          let Elements: _Elements$$static;
          interface _Elements {
            getAllAnnotationMirrors(a0: model.element.Element): java.util.List<model.element.AnnotationMirror>;
            getAllMembers(a0: model.element.TypeElement): java.util.List<model.element.Element>;
            getAllModuleElements(): java.util.Set<model.element.ModuleElement>;
            getAllPackageElements(name: Elements$charSequence): java.util.Set<model.element.PackageElement>;
            getAllTypeElements(name: Elements$charSequence): java.util.Set<model.element.TypeElement>;
            getBinaryName(a0: model.element.TypeElement): model.element.Name;
            getConstantExpression(a0: any): string;
            getDocComment(a0: model.element.Element): string;
            getElementValuesWithDefaults(a0: model.element.AnnotationMirror): java.util.Map<model.element.ExecutableElement,model.element.AnnotationValue>;
            getFileObjectOf(e: model.element.Element): javax.tools.JavaFileObject;
            getModuleElement(name: Elements$charSequence): model.element.ModuleElement;
            getModuleOf(e: model.element.Element): model.element.ModuleElement;
            getName(a0: Elements$charSequence): model.element.Name;
            getOrigin(e: model.element.Element): Elements$Origin;
            getOrigin(c: AnnotatedConstruct, a: model.element.AnnotationMirror): Elements$Origin;
            getOrigin(m: model.element.ModuleElement, directive: model.element.ModuleElement$Directive): Elements$Origin;
            getOutermostTypeElement(e: model.element.Element): model.element.TypeElement;
            getPackageElement(a0: Elements$charSequence): model.element.PackageElement;
            getPackageElement(module: model.element.ModuleElement, name: Elements$charSequence): model.element.PackageElement;
            getPackageOf(a0: model.element.Element): model.element.PackageElement;
            getTypeElement(a0: Elements$charSequence): model.element.TypeElement;
            getTypeElement(module: model.element.ModuleElement, name: Elements$charSequence): model.element.TypeElement;
            hides(a0: model.element.Element, a1: model.element.Element): boolean;
            isAutomaticModule(module: model.element.ModuleElement): boolean;
            isBridge(e: model.element.ExecutableElement): boolean;
            isCanonicalConstructor(e: model.element.ExecutableElement): boolean;
            isCompactConstructor(e: model.element.ExecutableElement): boolean;
            isDeprecated(a0: model.element.Element): boolean;
            isFunctionalInterface(a0: model.element.TypeElement): boolean;
            overrides(a0: model.element.ExecutableElement, a1: model.element.ExecutableElement, a2: model.element.TypeElement): boolean;
            printElements(a0: java.io.Writer, a1: model.element.Element[]): void;
            printElements(a0: java.io.Writer, ...a1: model.element.Element[]): void;
            recordComponentFor(accessor: model.element.ExecutableElement): model.element.RecordComponentElement;
          }
          interface Elements extends CombineTypes<[_Elements, java.lang.Object]> {}
          interface _Elements$Origin$$static extends ClassLike {
            valueOf(name: string): Elements$Origin;
            values(): Elements$Origin[];
            readonly EXPLICIT: Elements$Origin;
            readonly MANDATED: Elements$Origin;
            readonly SYNTHETIC: Elements$Origin;
          }
          let Elements$Origin: _Elements$Origin$$static;
          interface _Elements$Origin {
            isDeclared(): boolean;
          }
          interface Elements$Origin extends CombineTypes<[_Elements$Origin]> {}
          interface _SimpleAnnotationValueVisitor14$$static<R,P> extends ClassLike {
            _new(): SimpleAnnotationValueVisitor14<R,P>;
            _new(defaultValue: R): SimpleAnnotationValueVisitor14<R,P>;
          }
          let SimpleAnnotationValueVisitor14: _SimpleAnnotationValueVisitor14$$static<R,P>;
          interface _SimpleAnnotationValueVisitor14<R,P> {
          }
          interface SimpleAnnotationValueVisitor14<R,P> extends CombineTypes<[_SimpleAnnotationValueVisitor14<R,P>, SimpleAnnotationValueVisitor9<R,P>]> {}
          interface _SimpleAnnotationValueVisitor6$$static<R,P> extends ClassLike {
            _new(): SimpleAnnotationValueVisitor6<R,P>;
            _new(defaultValue: R): SimpleAnnotationValueVisitor6<R,P>;
          }
          let SimpleAnnotationValueVisitor6: _SimpleAnnotationValueVisitor6$$static<R,P>;
          interface _SimpleAnnotationValueVisitor6<R,P> {
            _defaultAction(o: any, p: P): R;
            visitAnnotation(a: model.element.AnnotationMirror, p: P): R;
            visitArray(vals: java.util.List<model.element.AnnotationValue>, p: P): R;
            visitBoolean(b: boolean, p: P): R;
            visitByte(b: byte, p: P): R;
            visitChar(c: char, p: P): R;
            visitDouble(d: double, a1: P): R;
            visitEnumConstant(c: model.element.VariableElement, p: P): R;
            visitFloat(f: float, p: P): R;
            visitInt(i: int, p: P): R;
            visitLong(i: long, a1: P): R;
            visitShort(s: short, p: P): R;
            visitString(s: string, p: P): R;
            visitType(t: model.type.TypeMirror, p: P): R;
            _DEFAULT_VALUE: R;
          }
          interface SimpleAnnotationValueVisitor6<R,P> extends CombineTypes<[_SimpleAnnotationValueVisitor6<R,P>, AbstractAnnotationValueVisitor6<R,P>]> {}
          interface _SimpleAnnotationValueVisitor7$$static<R,P> extends ClassLike {
            _new(): SimpleAnnotationValueVisitor7<R,P>;
            _new(defaultValue: R): SimpleAnnotationValueVisitor7<R,P>;
          }
          let SimpleAnnotationValueVisitor7: _SimpleAnnotationValueVisitor7$$static<R,P>;
          interface _SimpleAnnotationValueVisitor7<R,P> {
          }
          interface SimpleAnnotationValueVisitor7<R,P> extends CombineTypes<[_SimpleAnnotationValueVisitor7<R,P>, SimpleAnnotationValueVisitor6<R,P>]> {}
          interface _SimpleAnnotationValueVisitor8$$static<R,P> extends ClassLike {
            _new(): SimpleAnnotationValueVisitor8<R,P>;
            _new(defaultValue: R): SimpleAnnotationValueVisitor8<R,P>;
          }
          let SimpleAnnotationValueVisitor8: _SimpleAnnotationValueVisitor8$$static<R,P>;
          interface _SimpleAnnotationValueVisitor8<R,P> {
          }
          interface SimpleAnnotationValueVisitor8<R,P> extends CombineTypes<[_SimpleAnnotationValueVisitor8<R,P>, SimpleAnnotationValueVisitor7<R,P>]> {}
          interface _SimpleAnnotationValueVisitor9$$static<R,P> extends ClassLike {
            _new(): SimpleAnnotationValueVisitor9<R,P>;
            _new(defaultValue: R): SimpleAnnotationValueVisitor9<R,P>;
          }
          let SimpleAnnotationValueVisitor9: _SimpleAnnotationValueVisitor9$$static<R,P>;
          interface _SimpleAnnotationValueVisitor9<R,P> {
          }
          interface SimpleAnnotationValueVisitor9<R,P> extends CombineTypes<[_SimpleAnnotationValueVisitor9<R,P>, SimpleAnnotationValueVisitor8<R,P>]> {}
          interface _SimpleElementVisitor14$$static<R,P> extends ClassLike {
            _new(): SimpleElementVisitor14<R,P>;
            _new(defaultValue: R): SimpleElementVisitor14<R,P>;
          }
          let SimpleElementVisitor14: _SimpleElementVisitor14$$static<R,P>;
          interface _SimpleElementVisitor14<R,P> {
            visitRecordComponent(e: model.element.RecordComponentElement, p: P): R;
          }
          interface SimpleElementVisitor14<R,P> extends CombineTypes<[_SimpleElementVisitor14<R,P>, SimpleElementVisitor9<R,P>]> {}
          interface _SimpleElementVisitor6$$static<R,P> extends ClassLike {
            _new(): SimpleElementVisitor6<R,P>;
            _new(defaultValue: R): SimpleElementVisitor6<R,P>;
          }
          let SimpleElementVisitor6: _SimpleElementVisitor6$$static<R,P>;
          interface _SimpleElementVisitor6<R,P> {
            _defaultAction(e: model.element.Element, p: P): R;
            visitExecutable(e: model.element.ExecutableElement, p: P): R;
            visitPackage(e: model.element.PackageElement, p: P): R;
            visitType(e: model.element.TypeElement, p: P): R;
            visitTypeParameter(e: model.element.TypeParameterElement, p: P): R;
            visitVariable(e: model.element.VariableElement, p: P): R;
            _DEFAULT_VALUE: R;
          }
          interface SimpleElementVisitor6<R,P> extends CombineTypes<[_SimpleElementVisitor6<R,P>, AbstractElementVisitor6<R,P>]> {}
          interface _SimpleElementVisitor7$$static<R,P> extends ClassLike {
            _new(): SimpleElementVisitor7<R,P>;
            _new(defaultValue: R): SimpleElementVisitor7<R,P>;
          }
          let SimpleElementVisitor7: _SimpleElementVisitor7$$static<R,P>;
          interface _SimpleElementVisitor7<R,P> {
            visitVariable(e: model.element.VariableElement, p: P): R;
          }
          interface SimpleElementVisitor7<R,P> extends CombineTypes<[_SimpleElementVisitor7<R,P>, SimpleElementVisitor6<R,P>]> {}
          interface _SimpleElementVisitor8$$static<R,P> extends ClassLike {
            _new(): SimpleElementVisitor8<R,P>;
            _new(defaultValue: R): SimpleElementVisitor8<R,P>;
          }
          let SimpleElementVisitor8: _SimpleElementVisitor8$$static<R,P>;
          interface _SimpleElementVisitor8<R,P> {
          }
          interface SimpleElementVisitor8<R,P> extends CombineTypes<[_SimpleElementVisitor8<R,P>, SimpleElementVisitor7<R,P>]> {}
          interface _SimpleElementVisitor9$$static<R,P> extends ClassLike {
            _new(): SimpleElementVisitor9<R,P>;
            _new(defaultValue: R): SimpleElementVisitor9<R,P>;
          }
          let SimpleElementVisitor9: _SimpleElementVisitor9$$static<R,P>;
          interface _SimpleElementVisitor9<R,P> {
            visitModule(e: model.element.ModuleElement, p: P): R;
          }
          interface SimpleElementVisitor9<R,P> extends CombineTypes<[_SimpleElementVisitor9<R,P>, SimpleElementVisitor8<R,P>]> {}
          interface _SimpleTypeVisitor14$$static<R,P> extends ClassLike {
            _new(): SimpleTypeVisitor14<R,P>;
            _new(defaultValue: R): SimpleTypeVisitor14<R,P>;
          }
          let SimpleTypeVisitor14: _SimpleTypeVisitor14$$static<R,P>;
          interface _SimpleTypeVisitor14<R,P> {
          }
          interface SimpleTypeVisitor14<R,P> extends CombineTypes<[_SimpleTypeVisitor14<R,P>, SimpleTypeVisitor9<R,P>]> {}
          interface _SimpleTypeVisitor6$$static<R,P> extends ClassLike {
            _new(): SimpleTypeVisitor6<R,P>;
            _new(defaultValue: R): SimpleTypeVisitor6<R,P>;
          }
          let SimpleTypeVisitor6: _SimpleTypeVisitor6$$static<R,P>;
          interface _SimpleTypeVisitor6<R,P> {
            _defaultAction(t: model.type.TypeMirror, p: P): R;
            visitArray(t: model.type.ArrayType, p: P): R;
            visitDeclared(t: model.type.DeclaredType, p: P): R;
            visitError(t: model.type.ErrorType, p: P): R;
            visitExecutable(t: model.type.ExecutableType, p: P): R;
            visitNoType(t: model.type.NoType, p: P): R;
            visitNull(t: model.type.NullType, p: P): R;
            visitPrimitive(t: model.type.PrimitiveType, p: P): R;
            visitTypeVariable(t: model.type.TypeVariable, p: P): R;
            visitWildcard(t: model.type.WildcardType, p: P): R;
            _DEFAULT_VALUE: R;
          }
          interface SimpleTypeVisitor6<R,P> extends CombineTypes<[_SimpleTypeVisitor6<R,P>, AbstractTypeVisitor6<R,P>]> {}
          interface _SimpleTypeVisitor7$$static<R,P> extends ClassLike {
            _new(): SimpleTypeVisitor7<R,P>;
            _new(defaultValue: R): SimpleTypeVisitor7<R,P>;
          }
          let SimpleTypeVisitor7: _SimpleTypeVisitor7$$static<R,P>;
          interface _SimpleTypeVisitor7<R,P> {
            visitUnion(t: model.type.UnionType, p: P): R;
          }
          interface SimpleTypeVisitor7<R,P> extends CombineTypes<[_SimpleTypeVisitor7<R,P>, SimpleTypeVisitor6<R,P>]> {}
          interface _SimpleTypeVisitor8$$static<R,P> extends ClassLike {
            _new(): SimpleTypeVisitor8<R,P>;
            _new(defaultValue: R): SimpleTypeVisitor8<R,P>;
          }
          let SimpleTypeVisitor8: _SimpleTypeVisitor8$$static<R,P>;
          interface _SimpleTypeVisitor8<R,P> {
            visitIntersection(t: model.type.IntersectionType, p: P): R;
          }
          interface SimpleTypeVisitor8<R,P> extends CombineTypes<[_SimpleTypeVisitor8<R,P>, SimpleTypeVisitor7<R,P>]> {}
          interface _SimpleTypeVisitor9$$static<R,P> extends ClassLike {
            _new(): SimpleTypeVisitor9<R,P>;
            _new(defaultValue: R): SimpleTypeVisitor9<R,P>;
          }
          let SimpleTypeVisitor9: _SimpleTypeVisitor9$$static<R,P>;
          interface _SimpleTypeVisitor9<R,P> {
          }
          interface SimpleTypeVisitor9<R,P> extends CombineTypes<[_SimpleTypeVisitor9<R,P>, SimpleTypeVisitor8<R,P>]> {}
          interface _TypeKindVisitor14$$static<R,P> extends ClassLike {
            _new(): TypeKindVisitor14<R,P>;
            _new(defaultValue: R): TypeKindVisitor14<R,P>;
          }
          let TypeKindVisitor14: _TypeKindVisitor14$$static<R,P>;
          interface _TypeKindVisitor14<R,P> {
          }
          interface TypeKindVisitor14<R,P> extends CombineTypes<[_TypeKindVisitor14<R,P>, TypeKindVisitor9<R,P>]> {}
          interface _TypeKindVisitor6$$static<R,P> extends ClassLike {
            _new(): TypeKindVisitor6<R,P>;
            _new(defaultValue: R): TypeKindVisitor6<R,P>;
          }
          let TypeKindVisitor6: _TypeKindVisitor6$$static<R,P>;
          interface _TypeKindVisitor6<R,P> {
            visitNoType(t: model.type.NoType, p: P): R;
            visitNoTypeAsModule(t: model.type.NoType, p: P): R;
            visitNoTypeAsNone(t: model.type.NoType, p: P): R;
            visitNoTypeAsPackage(t: model.type.NoType, p: P): R;
            visitNoTypeAsVoid(t: model.type.NoType, p: P): R;
            visitPrimitive(t: model.type.PrimitiveType, p: P): R;
            visitPrimitiveAsBoolean(t: model.type.PrimitiveType, p: P): R;
            visitPrimitiveAsByte(t: model.type.PrimitiveType, p: P): R;
            visitPrimitiveAsChar(t: model.type.PrimitiveType, p: P): R;
            visitPrimitiveAsDouble(t: model.type.PrimitiveType, p: P): R;
            visitPrimitiveAsFloat(t: model.type.PrimitiveType, p: P): R;
            visitPrimitiveAsInt(t: model.type.PrimitiveType, p: P): R;
            visitPrimitiveAsLong(t: model.type.PrimitiveType, p: P): R;
            visitPrimitiveAsShort(t: model.type.PrimitiveType, p: P): R;
          }
          interface TypeKindVisitor6<R,P> extends CombineTypes<[_TypeKindVisitor6<R,P>, SimpleTypeVisitor6<R,P>]> {}
          interface _TypeKindVisitor7$$static<R,P> extends ClassLike {
            _new(): TypeKindVisitor7<R,P>;
            _new(defaultValue: R): TypeKindVisitor7<R,P>;
          }
          let TypeKindVisitor7: _TypeKindVisitor7$$static<R,P>;
          interface _TypeKindVisitor7<R,P> {
            visitUnion(t: model.type.UnionType, p: P): R;
          }
          interface TypeKindVisitor7<R,P> extends CombineTypes<[_TypeKindVisitor7<R,P>, TypeKindVisitor6<R,P>]> {}
          interface _TypeKindVisitor8$$static<R,P> extends ClassLike {
            _new(): TypeKindVisitor8<R,P>;
            _new(defaultValue: R): TypeKindVisitor8<R,P>;
          }
          let TypeKindVisitor8: _TypeKindVisitor8$$static<R,P>;
          interface _TypeKindVisitor8<R,P> {
            visitIntersection(t: model.type.IntersectionType, p: P): R;
          }
          interface TypeKindVisitor8<R,P> extends CombineTypes<[_TypeKindVisitor8<R,P>, TypeKindVisitor7<R,P>]> {}
          interface _TypeKindVisitor9$$static<R,P> extends ClassLike {
            _new(): TypeKindVisitor9<R,P>;
            _new(defaultValue: R): TypeKindVisitor9<R,P>;
          }
          let TypeKindVisitor9: _TypeKindVisitor9$$static<R,P>;
          interface _TypeKindVisitor9<R,P> {
            visitNoTypeAsModule(t: model.type.NoType, p: P): R;
          }
          interface TypeKindVisitor9<R,P> extends CombineTypes<[_TypeKindVisitor9<R,P>, TypeKindVisitor8<R,P>]> {}
          interface _Types$$static extends ClassLike {
          }
          let Types: _Types$$static;
          interface _Types {
            asElement(a0: model.type.TypeMirror): model.element.Element;
            asMemberOf(a0: model.type.DeclaredType, a1: model.element.Element): model.type.TypeMirror;
            boxedClass(a0: model.type.PrimitiveType): model.element.TypeElement;
            capture(a0: model.type.TypeMirror): model.type.TypeMirror;
            contains(a0: model.type.TypeMirror, a1: model.type.TypeMirror): boolean;
            directSupertypes(a0: model.type.TypeMirror): java.util.List<model.type.TypeMirror>;
            erasure(a0: model.type.TypeMirror): model.type.TypeMirror;
            getArrayType(a0: model.type.TypeMirror): model.type.ArrayType;
            getDeclaredType(a0: model.element.TypeElement, a1: model.type.TypeMirror[]): model.type.DeclaredType;
            getDeclaredType(a0: model.element.TypeElement, ...a1: model.type.TypeMirror[]): model.type.DeclaredType;
            getDeclaredType(a0: model.type.DeclaredType, a1: model.element.TypeElement, a2: model.type.TypeMirror[]): model.type.DeclaredType;
            getDeclaredType(a0: model.type.DeclaredType, a1: model.element.TypeElement, ...a2: model.type.TypeMirror[]): model.type.DeclaredType;
            getNoType(a0: model.type.TypeKind): model.type.NoType;
            getNullType(): model.type.NullType;
            getPrimitiveType(a0: model.type.TypeKind): model.type.PrimitiveType;
            getWildcardType(a0: model.type.TypeMirror, a1: model.type.TypeMirror): model.type.WildcardType;
            isAssignable(a0: model.type.TypeMirror, a1: model.type.TypeMirror): boolean;
            isSameType(a0: model.type.TypeMirror, a1: model.type.TypeMirror): boolean;
            isSubsignature(a0: model.type.ExecutableType, a1: model.type.ExecutableType): boolean;
            isSubtype(a0: model.type.TypeMirror, a1: model.type.TypeMirror): boolean;
            unboxedType(a0: model.type.TypeMirror): model.type.PrimitiveType;
          }
          interface Types extends CombineTypes<[_Types, java.lang.Object]> {}
        }
        interface _AnnotatedConstruct$$static extends ClassLike {
        }
        let AnnotatedConstruct: _AnnotatedConstruct$$static;
        interface _AnnotatedConstruct {
          getAnnotation<A>(a0: java.lang.Class<A>): A;
          getAnnotationMirrors(): java.util.List<model.element.AnnotationMirror>;
          getAnnotationsByType<A>(a0: java.lang.Class<A>): A[];
        }
        interface AnnotatedConstruct extends CombineTypes<[_AnnotatedConstruct, java.lang.Object]> {}
        interface _SourceVersion$$static extends ClassLike {
          _getLatestSupported(): SourceVersion;
          isIdentifier(name: SourceVersion$charSequence): boolean;
          isKeyword(s: SourceVersion$charSequence): boolean;
          isKeyword(s: SourceVersion$charSequence, version: SourceVersion): boolean;
          isName(name: SourceVersion$charSequence): boolean;
          isName(name: SourceVersion$charSequence, version: SourceVersion): boolean;
          latest(): SourceVersion;
          latestSupported(): SourceVersion;
          valueOf(name: string): SourceVersion;
          valueOf(rv: java.lang.Runtime$Version): SourceVersion;
          values(): SourceVersion[];
          readonly RELEASE_0: SourceVersion;
          readonly RELEASE_1: SourceVersion;
          readonly RELEASE_10: SourceVersion;
          readonly RELEASE_11: SourceVersion;
          readonly RELEASE_12: SourceVersion;
          readonly RELEASE_13: SourceVersion;
          readonly RELEASE_14: SourceVersion;
          readonly RELEASE_15: SourceVersion;
          readonly RELEASE_16: SourceVersion;
          readonly RELEASE_17: SourceVersion;
          readonly RELEASE_18: SourceVersion;
          readonly RELEASE_19: SourceVersion;
          readonly RELEASE_2: SourceVersion;
          readonly RELEASE_20: SourceVersion;
          readonly RELEASE_21: SourceVersion;
          readonly RELEASE_3: SourceVersion;
          readonly RELEASE_4: SourceVersion;
          readonly RELEASE_5: SourceVersion;
          readonly RELEASE_6: SourceVersion;
          readonly RELEASE_7: SourceVersion;
          readonly RELEASE_8: SourceVersion;
          readonly RELEASE_9: SourceVersion;
          _latestSupported: SourceVersion;
        }
        let SourceVersion: _SourceVersion$$static;
        interface _SourceVersion {
          runtimeVersion(): java.lang.Runtime$Version;
        }
        interface SourceVersion extends CombineTypes<[_SourceVersion]> {}
        interface _UnknownEntityException$$static extends ClassLike {
          _serialVersionUID: long;
          _new(message: string): UnknownEntityException;
        }
        let UnknownEntityException: _UnknownEntityException$$static;
        interface _UnknownEntityException {
        }
        interface UnknownEntityException extends CombineTypes<[_UnknownEntityException, java.lang.RuntimeException]> {}
      }
    }
    module tools {
      interface _Diagnostic$$static<S> extends ClassLike {
        readonly NOPOS: long;
      }
      let Diagnostic: _Diagnostic$$static<S>;
      interface _Diagnostic<S> {
        getCode(): string;
        getColumnNumber(): long;
        getEndPosition(): long;
        getKind(): Diagnostic$Kind;
        getLineNumber(): long;
        getMessage(a0: java.util.Locale): string;
        getPosition(): long;
        getSource(): S;
        getStartPosition(): long;
      }
      interface Diagnostic<S> extends CombineTypes<[_Diagnostic<S>, java.lang.Object]> {}
      interface _Diagnostic$Kind$$static extends ClassLike {
        valueOf(name: string): Diagnostic$Kind;
        values(): Diagnostic$Kind[];
        readonly ERROR: Diagnostic$Kind;
        readonly MANDATORY_WARNING: Diagnostic$Kind;
        readonly NOTE: Diagnostic$Kind;
        readonly OTHER: Diagnostic$Kind;
        readonly WARNING: Diagnostic$Kind;
      }
      let Diagnostic$Kind: _Diagnostic$Kind$$static;
      interface _Diagnostic$Kind {
      }
      interface Diagnostic$Kind extends CombineTypes<[_Diagnostic$Kind]> {}
      interface _DiagnosticCollector$$static<S> extends ClassLike {
        new(): DiagnosticCollector<S>;
      }
      let DiagnosticCollector: _DiagnosticCollector$$static<S>;
      interface _DiagnosticCollector<S> {
        getDiagnostics(): java.util.List<Diagnostic<S>>;
        report(diagnostic: Diagnostic<S>): void;
        _diagnostics: java.util.List<Diagnostic<S>>;
      }
      interface DiagnosticCollector<S> extends CombineTypes<[_DiagnosticCollector<S>, DiagnosticListener<S>, java.lang.Object]> {}
      interface _DiagnosticListener$$static<S> extends ClassLike {
      }
      let DiagnosticListener: _DiagnosticListener$$static<S>;
      interface _DiagnosticListener<S> {
        report(a0: Diagnostic<S>): void;
(a0: Diagnostic<S>): void;
      }
      interface DiagnosticListener<S> extends CombineTypes<[_DiagnosticListener<S>, java.lang.Object]> {}
      interface _DocumentationTool$$static extends ClassLike {
      }
      let DocumentationTool: _DocumentationTool$$static;
      interface _DocumentationTool {
        getStandardFileManager(a0: DiagnosticListener<JavaFileObject>, a1: java.util.Locale, a2: java.nio.charset.Charset): StandardJavaFileManager;
        getTask(a0: java.io.Writer, a1: JavaFileManager, a2: DiagnosticListener<JavaFileObject>, a3: java.lang.Class<any>, a4: java.lang.Iterable<string>, a5: java.lang.Iterable<JavaFileObject>): DocumentationTool$DocumentationTask;
      }
      interface DocumentationTool extends CombineTypes<[_DocumentationTool, javax.tools.OptionChecker, javax.tools.Tool, java.lang.Object]> {}
      interface _DocumentationTool$DocumentationTask$$static extends ClassLike {
      }
      let DocumentationTool$DocumentationTask: _DocumentationTool$DocumentationTask$$static;
      interface _DocumentationTool$DocumentationTask {
        addModules(a0: java.lang.Iterable<string>): void;
        call(): boolean;
        call(): any;
        setLocale(a0: java.util.Locale): void;
      }
      interface DocumentationTool$DocumentationTask extends CombineTypes<[_DocumentationTool$DocumentationTask, java.util.concurrent.Callable<boolean>, java.lang.Object]> {}
      interface _DocumentationTool$Location$$static extends ClassLike {
        valueOf(name: string): DocumentationTool$Location;
        values(): DocumentationTool$Location[];
        readonly DOCLET_PATH: DocumentationTool$Location;
        readonly DOCUMENTATION_OUTPUT: DocumentationTool$Location;
        readonly SNIPPET_PATH: DocumentationTool$Location;
        readonly TAGLET_PATH: DocumentationTool$Location;
      }
      let DocumentationTool$Location: _DocumentationTool$Location$$static;
      interface _DocumentationTool$Location {
        getName(): string;
        isOutputLocation(): boolean;
      }
      interface DocumentationTool$Location extends CombineTypes<[_DocumentationTool$Location, JavaFileManager$Location]> {}
      interface _FileObject$$static extends ClassLike {
      }
      let FileObject: _FileObject$$static;
      interface _FileObject {
        delete(): boolean;
        getCharContent(a0: boolean): FileObject$charSequence;
        getLastModified(): long;
        getName(): string;
        openInputStream(): java.io.InputStream;
        openOutputStream(): java.io.OutputStream;
        openReader(a0: boolean): java.io.Reader;
        openWriter(): java.io.Writer;
        toUri(): java.net.URI;
      }
      interface FileObject extends CombineTypes<[_FileObject, java.lang.Object]> {}
      interface _ForwardingFileObject$$static<F> extends ClassLike {
        _new(fileObject: F): ForwardingFileObject<F>;
      }
      let ForwardingFileObject: _ForwardingFileObject$$static<F>;
      interface _ForwardingFileObject<F> {
        delete(): boolean;
        getCharContent(ignoreEncodingErrors: boolean): ForwardingFileObject$charSequence;
        getLastModified(): long;
        getName(): string;
        openInputStream(): java.io.InputStream;
        openOutputStream(): java.io.OutputStream;
        openReader(ignoreEncodingErrors: boolean): java.io.Reader;
        openWriter(): java.io.Writer;
        toUri(): java.net.URI;
        _fileObject: F;
      }
      interface ForwardingFileObject<F> extends CombineTypes<[_ForwardingFileObject<F>, java.lang.Object, FileObject]> {}
      interface _ForwardingJavaFileManager$$static<M> extends ClassLike {
        _new(fileManager: M): ForwardingJavaFileManager<M>;
      }
      let ForwardingJavaFileManager: _ForwardingJavaFileManager$$static<M>;
      interface _ForwardingJavaFileManager<M> {
        close(): void;
        contains(location: JavaFileManager$Location, fo: FileObject): boolean;
        flush(): void;
        getClassLoader(location: JavaFileManager$Location): java.lang.ClassLoader;
        getFileForInput(location: JavaFileManager$Location, packageName: string, relativeName: string): FileObject;
        getFileForOutput(location: JavaFileManager$Location, packageName: string, relativeName: string, sibling: FileObject): FileObject;
        getFileForOutputForOriginatingFiles(location: JavaFileManager$Location, packageName: string, relativeName: string, originatingFiles: FileObject[]): FileObject;
        getFileForOutputForOriginatingFiles(location: JavaFileManager$Location, packageName: string, relativeName: string, ...originatingFiles: FileObject[]): FileObject;
        getJavaFileForInput(location: JavaFileManager$Location, className: string, kind: JavaFileObject$Kind): JavaFileObject;
        getJavaFileForOutput(location: JavaFileManager$Location, className: string, kind: JavaFileObject$Kind, sibling: FileObject): JavaFileObject;
        getJavaFileForOutputForOriginatingFiles(location: JavaFileManager$Location, className: string, kind: JavaFileObject$Kind, originatingFiles: FileObject[]): JavaFileObject;
        getJavaFileForOutputForOriginatingFiles(location: JavaFileManager$Location, className: string, kind: JavaFileObject$Kind, ...originatingFiles: FileObject[]): JavaFileObject;
        getLocationForModule(location: JavaFileManager$Location, moduleName: string): JavaFileManager$Location;
        getLocationForModule(location: JavaFileManager$Location, fo: JavaFileObject): JavaFileManager$Location;
        getServiceLoader<S>(location: JavaFileManager$Location, service: java.lang.Class<S>): java.util.ServiceLoader<S>;
        handleOption(current: string, remaining: java.util.Iterator<string>): boolean;
        hasLocation(location: JavaFileManager$Location): boolean;
        inferBinaryName(location: JavaFileManager$Location, file: JavaFileObject): string;
        inferModuleName(location: JavaFileManager$Location): string;
        isSameFile(a: FileObject, b: FileObject): boolean;
        isSupportedOption(option: string): int;
        list(location: JavaFileManager$Location, packageName: string, kinds: java.util.Set<JavaFileObject$Kind>, recurse: boolean): java.lang.Iterable<JavaFileObject>;
        listLocationsForModules(location: JavaFileManager$Location): java.lang.Iterable<java.util.Set<JavaFileManager$Location>>;
        _fileManager: M;
      }
      interface ForwardingJavaFileManager<M> extends CombineTypes<[_ForwardingJavaFileManager<M>, JavaFileManager, java.lang.Object]> {}
      interface _ForwardingJavaFileObject$$static<F> extends ClassLike {
        _new(fileObject: F): ForwardingJavaFileObject<F>;
      }
      let ForwardingJavaFileObject: _ForwardingJavaFileObject$$static<F>;
      interface _ForwardingJavaFileObject<F> {
        getAccessLevel(): javax.lang.model.element.Modifier;
        getKind(): JavaFileObject$Kind;
        getNestingKind(): javax.lang.model.element.NestingKind;
        isNameCompatible(simpleName: string, kind: JavaFileObject$Kind): boolean;
      }
      interface ForwardingJavaFileObject<F> extends CombineTypes<[_ForwardingJavaFileObject<F>, JavaFileObject, ForwardingFileObject<F>]> {}
      interface _JavaCompiler$$static extends ClassLike {
      }
      let JavaCompiler: _JavaCompiler$$static;
      interface _JavaCompiler {
        getStandardFileManager(a0: DiagnosticListener<JavaFileObject>, a1: java.util.Locale, a2: java.nio.charset.Charset): StandardJavaFileManager;
        getTask(a0: java.io.Writer, a1: JavaFileManager, a2: DiagnosticListener<JavaFileObject>, a3: java.lang.Iterable<string>, a4: java.lang.Iterable<string>, a5: java.lang.Iterable<JavaFileObject>): JavaCompiler$CompilationTask;
      }
      interface JavaCompiler extends CombineTypes<[_JavaCompiler, javax.tools.OptionChecker, javax.tools.Tool, java.lang.Object]> {}
      interface _JavaCompiler$CompilationTask$$static extends ClassLike {
      }
      let JavaCompiler$CompilationTask: _JavaCompiler$CompilationTask$$static;
      interface _JavaCompiler$CompilationTask {
        addModules(a0: java.lang.Iterable<string>): void;
        call(): boolean;
        call(): any;
        setLocale(a0: java.util.Locale): void;
        setProcessors(a0: java.lang.Iterable<javax.annotation.processing.Processor>): void;
      }
      interface JavaCompiler$CompilationTask extends CombineTypes<[_JavaCompiler$CompilationTask, java.util.concurrent.Callable<boolean>, java.lang.Object]> {}
      interface _JavaFileManager$$static extends ClassLike {
        _siblingFrom(originatingFiles: FileObject[]): FileObject;
      }
      let JavaFileManager: _JavaFileManager$$static;
      interface _JavaFileManager {
        close(): void;
        contains(location: JavaFileManager$Location, fo: FileObject): boolean;
        flush(): void;
        getClassLoader(a0: JavaFileManager$Location): java.lang.ClassLoader;
        getFileForInput(a0: JavaFileManager$Location, a1: string, a2: string): FileObject;
        getFileForOutput(a0: JavaFileManager$Location, a1: string, a2: string, a3: FileObject): FileObject;
        getFileForOutputForOriginatingFiles(location: JavaFileManager$Location, packageName: string, relativeName: string, originatingFiles: FileObject[]): FileObject;
        getFileForOutputForOriginatingFiles(location: JavaFileManager$Location, packageName: string, relativeName: string, ...originatingFiles: FileObject[]): FileObject;
        getJavaFileForInput(a0: JavaFileManager$Location, a1: string, a2: JavaFileObject$Kind): JavaFileObject;
        getJavaFileForOutput(a0: JavaFileManager$Location, a1: string, a2: JavaFileObject$Kind, a3: FileObject): JavaFileObject;
        getJavaFileForOutputForOriginatingFiles(location: JavaFileManager$Location, className: string, kind: JavaFileObject$Kind, originatingFiles: FileObject[]): JavaFileObject;
        getJavaFileForOutputForOriginatingFiles(location: JavaFileManager$Location, className: string, kind: JavaFileObject$Kind, ...originatingFiles: FileObject[]): JavaFileObject;
        getLocationForModule(location: JavaFileManager$Location, moduleName: string): JavaFileManager$Location;
        getLocationForModule(location: JavaFileManager$Location, fo: JavaFileObject): JavaFileManager$Location;
        getServiceLoader<S>(location: JavaFileManager$Location, service: java.lang.Class<S>): java.util.ServiceLoader<S>;
        handleOption(a0: string, a1: java.util.Iterator<string>): boolean;
        hasLocation(a0: JavaFileManager$Location): boolean;
        inferBinaryName(a0: JavaFileManager$Location, a1: JavaFileObject): string;
        inferModuleName(location: JavaFileManager$Location): string;
        isSameFile(a0: FileObject, a1: FileObject): boolean;
        list(a0: JavaFileManager$Location, a1: string, a2: java.util.Set<JavaFileObject$Kind>, a3: boolean): java.lang.Iterable<JavaFileObject>;
        listLocationsForModules(location: JavaFileManager$Location): java.lang.Iterable<java.util.Set<JavaFileManager$Location>>;
      }
      interface JavaFileManager extends CombineTypes<[_JavaFileManager, javax.tools.OptionChecker, java.io.Closeable, java.lang.Object, java.io.Flushable]> {}
      interface _JavaFileManager$Location$$static extends ClassLike {
      }
      let JavaFileManager$Location: _JavaFileManager$Location$$static;
      interface _JavaFileManager$Location {
        getName(): string;
        isModuleOrientedLocation(): boolean;
        isOutputLocation(): boolean;
      }
      interface JavaFileManager$Location extends CombineTypes<[_JavaFileManager$Location, java.lang.Object]> {}
      interface _JavaFileObject$$static extends ClassLike {
      }
      let JavaFileObject: _JavaFileObject$$static;
      interface _JavaFileObject {
        getAccessLevel(): javax.lang.model.element.Modifier;
        getKind(): JavaFileObject$Kind;
        getNestingKind(): javax.lang.model.element.NestingKind;
        isNameCompatible(a0: string, a1: JavaFileObject$Kind): boolean;
      }
      interface JavaFileObject extends CombineTypes<[_JavaFileObject, javax.tools.FileObject, java.lang.Object]> {}
      interface _JavaFileObject$Kind$$static extends ClassLike {
        valueOf(name: string): JavaFileObject$Kind;
        values(): JavaFileObject$Kind[];
        readonly CLASS: JavaFileObject$Kind;
        readonly HTML: JavaFileObject$Kind;
        readonly OTHER: JavaFileObject$Kind;
        readonly SOURCE: JavaFileObject$Kind;
      }
      let JavaFileObject$Kind: _JavaFileObject$Kind$$static;
      interface _JavaFileObject$Kind {
        readonly extension: string;
      }
      interface JavaFileObject$Kind extends CombineTypes<[_JavaFileObject$Kind]> {}
      interface _OptionChecker$$static extends ClassLike {
      }
      let OptionChecker: _OptionChecker$$static;
      interface _OptionChecker {
        isSupportedOption(a0: string): int;
(a0: string): int;
      }
      interface OptionChecker extends CombineTypes<[_OptionChecker, java.lang.Object]> {}
      interface _SimpleJavaFileObject$$static extends ClassLike {
        _new(uri: java.net.URI, kind: JavaFileObject$Kind): SimpleJavaFileObject;
      }
      let SimpleJavaFileObject: _SimpleJavaFileObject$$static;
      interface _SimpleJavaFileObject {
        delete(): boolean;
        getAccessLevel(): javax.lang.model.element.Modifier;
        getCharContent(ignoreEncodingErrors: boolean): SimpleJavaFileObject$charSequence;
        getKind(): JavaFileObject$Kind;
        getLastModified(): long;
        getName(): string;
        getNestingKind(): javax.lang.model.element.NestingKind;
        isNameCompatible(simpleName: string, kind: JavaFileObject$Kind): boolean;
        openInputStream(): java.io.InputStream;
        openOutputStream(): java.io.OutputStream;
        openReader(ignoreEncodingErrors: boolean): java.io.Reader;
        openWriter(): java.io.Writer;
        toString(): string;
        toUri(): java.net.URI;
        _kind: JavaFileObject$Kind;
        _uri: java.net.URI;
      }
      interface SimpleJavaFileObject extends CombineTypes<[_SimpleJavaFileObject, javax.tools.JavaFileObject, java.lang.Object]> {}
      interface _StandardJavaFileManager$$static extends ClassLike {
        _asCollection<T>(iterable: java.lang.Iterable<T>): java.util.Collection<T>;
        _asFiles(paths: java.lang.Iterable<java.nio.file.Path>): java.lang.Iterable<java.io.File>;
        _asPaths(files: java.lang.Iterable<java.io.File>): java.lang.Iterable<java.nio.file.Path>;
      }
      let StandardJavaFileManager: _StandardJavaFileManager$$static;
      interface _StandardJavaFileManager {
        asPath(file: FileObject): java.nio.file.Path;
        getJavaFileObjects(a0: java.io.File[]): java.lang.Iterable<JavaFileObject>;
        getJavaFileObjects(...a0: java.io.File[]): java.lang.Iterable<JavaFileObject>;
        getJavaFileObjects(paths: java.nio.file.Path[]): java.lang.Iterable<JavaFileObject>;
        getJavaFileObjects(...paths: java.nio.file.Path[]): java.lang.Iterable<JavaFileObject>;
        getJavaFileObjects(a0: string[]): java.lang.Iterable<JavaFileObject>;
        getJavaFileObjects(...a0: string[]): java.lang.Iterable<JavaFileObject>;
        getJavaFileObjectsFromFiles(a0: java.lang.Iterable<java.io.File>): java.lang.Iterable<JavaFileObject>;
        getJavaFileObjectsFromPaths(paths: java.util.Collection<java.nio.file.Path>): java.lang.Iterable<JavaFileObject>;
        getJavaFileObjectsFromPaths(paths: java.lang.Iterable<java.nio.file.Path>): java.lang.Iterable<JavaFileObject>;
        getJavaFileObjectsFromStrings(a0: java.lang.Iterable<string>): java.lang.Iterable<JavaFileObject>;
        getLocation(a0: JavaFileManager$Location): java.lang.Iterable<java.io.File>;
        getLocationAsPaths(location: JavaFileManager$Location): java.lang.Iterable<java.nio.file.Path>;
        isSameFile(a0: FileObject, a1: FileObject): boolean;
        setLocation(a0: JavaFileManager$Location, a1: java.lang.Iterable<java.io.File>): void;
        setLocationForModule(location: JavaFileManager$Location, moduleName: string, paths: java.util.Collection<java.nio.file.Path>): void;
        setLocationFromPaths(location: JavaFileManager$Location, paths: java.util.Collection<java.nio.file.Path>): void;
        setPathFactory(f: StandardJavaFileManager$PathFactory): void;
      }
      interface StandardJavaFileManager extends CombineTypes<[_StandardJavaFileManager, javax.tools.JavaFileManager, java.lang.Object]> {}
      interface _StandardJavaFileManager$PathFactory$$static extends ClassLike {
      }
      let StandardJavaFileManager$PathFactory: _StandardJavaFileManager$PathFactory$$static;
      interface _StandardJavaFileManager$PathFactory {
        getPath(a0: string, a1: string[]): java.nio.file.Path;
        getPath(a0: string, ...a1: string[]): java.nio.file.Path;
(a0: string, a1: string[]): java.nio.file.Path;
(a0: string, ...a1: string[]): java.nio.file.Path;
      }
      interface StandardJavaFileManager$PathFactory extends CombineTypes<[_StandardJavaFileManager$PathFactory, java.lang.Object]> {}
      interface _StandardLocation$$static extends ClassLike {
        locationFor(name: string): JavaFileManager$Location;
        valueOf(name: string): StandardLocation;
        values(): StandardLocation[];
        readonly ANNOTATION_PROCESSOR_MODULE_PATH: StandardLocation;
        readonly ANNOTATION_PROCESSOR_PATH: StandardLocation;
        readonly CLASS_OUTPUT: StandardLocation;
        readonly CLASS_PATH: StandardLocation;
        readonly MODULE_PATH: StandardLocation;
        readonly MODULE_SOURCE_PATH: StandardLocation;
        readonly NATIVE_HEADER_OUTPUT: StandardLocation;
        readonly PATCH_MODULE_PATH: StandardLocation;
        readonly PLATFORM_CLASS_PATH: StandardLocation;
        readonly SOURCE_OUTPUT: StandardLocation;
        readonly SOURCE_PATH: StandardLocation;
        readonly SYSTEM_MODULES: StandardLocation;
        readonly UPGRADE_MODULE_PATH: StandardLocation;
        _locations: java.util.concurrent.ConcurrentMap<string,JavaFileManager$Location>;
      }
      let StandardLocation: _StandardLocation$$static;
      interface _StandardLocation {
        getName(): string;
        isModuleOrientedLocation(): boolean;
        isOutputLocation(): boolean;
      }
      interface StandardLocation extends CombineTypes<[_StandardLocation, JavaFileManager$Location]> {}
      interface _Tool$$static extends ClassLike {
      }
      let Tool: _Tool$$static;
      interface _Tool {
        getSourceVersions(): java.util.Set<javax.lang.model.SourceVersion>;
        name(): string;
        run(a0: java.io.InputStream, a1: java.io.OutputStream, a2: java.io.OutputStream, a3: string[]): int;
        run(a0: java.io.InputStream, a1: java.io.OutputStream, a2: java.io.OutputStream, ...a3: string[]): int;
      }
      interface Tool extends CombineTypes<[_Tool, java.lang.Object]> {}
      interface _ToolProvider$$static extends ClassLike {
        getSystemDocumentationTool(): DocumentationTool;
        getSystemJavaCompiler(): JavaCompiler;
        _getSystemTool<T>(clazz: java.lang.Class<T>, moduleName: string, className: string): T;
        getSystemToolClassLoader(): java.lang.ClassLoader;
        _matches<T>(tool: T, moduleName: string): boolean;
        _systemDocumentationToolModule: string;
        _systemDocumentationToolName: string;
        _systemJavaCompilerModule: string;
        _systemJavaCompilerName: string;
      }
      let ToolProvider: _ToolProvider$$static;
      interface _ToolProvider {
      }
      interface ToolProvider extends CombineTypes<[_ToolProvider, java.lang.Object]> {}
    }
  }
}
