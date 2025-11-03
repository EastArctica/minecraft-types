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
        module classfile {
          interface _AccessFlags$$static extends ClassLike {
            _flagToModifier(flag: int, t: AccessFlags$Kind): string;
            _flagToName(flag: int, t: AccessFlags$Kind): string;
            _getModifiers(flags: int, modifierFlags: int[], t: AccessFlags$Kind): java.util.Set<string>;
            readonly ACC_ABSTRACT: int;
            readonly ACC_ANNOTATION: int;
            readonly ACC_BRIDGE: int;
            readonly ACC_ENUM: int;
            readonly ACC_FINAL: int;
            readonly ACC_INTERFACE: int;
            readonly ACC_MANDATED: int;
            readonly ACC_MODULE: int;
            readonly ACC_NATIVE: int;
            readonly ACC_PRIVATE: int;
            readonly ACC_PROTECTED: int;
            readonly ACC_PUBLIC: int;
            readonly ACC_STATIC: int;
            readonly ACC_STRICT: int;
            readonly ACC_SUPER: int;
            readonly ACC_SYNCHRONIZED: int;
            readonly ACC_SYNTHETIC: int;
            readonly ACC_TRANSIENT: int;
            readonly ACC_VARARGS: int;
            readonly ACC_VOLATILE: int;
            _classFlags: int[];
            _classModifiers: int[];
            _fieldFlags: int[];
            _fieldModifiers: int[];
            _innerClassFlags: int[];
            _innerClassModifiers: int[];
            _methodFlags: int[];
            _methodModifiers: int[];
            _new(cr: ClassReader): AccessFlags;
            new(flags: int): AccessFlags;
          }
          let AccessFlags: _AccessFlags$$static;
          interface _AccessFlags {
            byteLength(): int;
            getClassFlags(): java.util.Set<string>;
            getClassModifiers(): java.util.Set<string>;
            getFieldFlags(): java.util.Set<string>;
            getFieldModifiers(): java.util.Set<string>;
            _getFlags(expectedFlags: int[], t: AccessFlags$Kind): java.util.Set<string>;
            getInnerClassFlags(): java.util.Set<string>;
            getInnerClassModifiers(): java.util.Set<string>;
            getMethodFlags(): java.util.Set<string>;
            getMethodModifiers(): java.util.Set<string>;
            _getModifiers(modifierFlags: int[], t: AccessFlags$Kind): java.util.Set<string>;
            ignore(mask: int): AccessFlags;
            is(mask: int): boolean;
            readonly flags: int;
          }
          interface AccessFlags extends CombineTypes<[_AccessFlags, java.lang.Object]> {}
          interface _AccessFlags$Kind$$static extends ClassLike {
            valueOf(name: string): AccessFlags$Kind;
            values(): AccessFlags$Kind[];
            readonly Class: AccessFlags$Kind;
            readonly Field: AccessFlags$Kind;
            readonly InnerClass: AccessFlags$Kind;
            readonly Method: AccessFlags$Kind;
          }
          let AccessFlags$Kind: _AccessFlags$Kind$$static;
          interface _AccessFlags$Kind {
          }
          interface AccessFlags$Kind extends CombineTypes<[_AccessFlags$Kind]> {}
          interface _Annotation$$static extends ClassLike {
            _new(cr: ClassReader): Annotation;
            new(constant_pool: ConstantPool, type_index: int, element_value_pairs: Annotation$element_value_pair[]): Annotation;
          }
          let Annotation: _Annotation$$static;
          interface _Annotation {
            length(): int;
            readonly element_value_pairs: Annotation$element_value_pair[];
            readonly num_element_value_pairs: int;
            readonly type_index: int;
          }
          interface Annotation extends CombineTypes<[_Annotation, java.lang.Object]> {}
          interface _Annotation$Annotation_element_value$$static extends ClassLike {
            _new(cr: ClassReader, tag: int): Annotation$Annotation_element_value;
            new(annotation_value: Annotation, tag: int): Annotation$Annotation_element_value;
          }
          let Annotation$Annotation_element_value: _Annotation$Annotation_element_value$$static;
          interface _Annotation$Annotation_element_value {
            accept<R, P>(visitor: Annotation$element_value$Visitor<R,P>, p: P): R;
            length(): int;
            readonly annotation_value: Annotation;
          }
          interface Annotation$Annotation_element_value extends CombineTypes<[_Annotation$Annotation_element_value, com.sun.tools.classfile.Annotation$element_value]> {}
          interface _Annotation$Array_element_value$$static extends ClassLike {
            _new(cr: ClassReader, tag: int): Annotation$Array_element_value;
            new(values: Annotation$element_value[], tag: int): Annotation$Array_element_value;
          }
          let Annotation$Array_element_value: _Annotation$Array_element_value$$static;
          interface _Annotation$Array_element_value {
            accept<R, P>(visitor: Annotation$element_value$Visitor<R,P>, p: P): R;
            length(): int;
            readonly num_values: int;
            readonly values: Annotation$element_value[];
          }
          interface Annotation$Array_element_value extends CombineTypes<[_Annotation$Array_element_value, com.sun.tools.classfile.Annotation$element_value]> {}
          interface _Annotation$Class_element_value$$static extends ClassLike {
            _new(cr: ClassReader, tag: int): Annotation$Class_element_value;
            new(class_info_index: int, tag: int): Annotation$Class_element_value;
          }
          let Annotation$Class_element_value: _Annotation$Class_element_value$$static;
          interface _Annotation$Class_element_value {
            accept<R, P>(visitor: Annotation$element_value$Visitor<R,P>, p: P): R;
            length(): int;
            readonly class_info_index: int;
          }
          interface Annotation$Class_element_value extends CombineTypes<[_Annotation$Class_element_value, com.sun.tools.classfile.Annotation$element_value]> {}
          interface _Annotation$Enum_element_value$$static extends ClassLike {
            _new(cr: ClassReader, tag: int): Annotation$Enum_element_value;
            new(type_name_index: int, const_name_index: int, tag: int): Annotation$Enum_element_value;
          }
          let Annotation$Enum_element_value: _Annotation$Enum_element_value$$static;
          interface _Annotation$Enum_element_value {
            accept<R, P>(visitor: Annotation$element_value$Visitor<R,P>, p: P): R;
            length(): int;
            readonly const_name_index: int;
            readonly type_name_index: int;
          }
          interface Annotation$Enum_element_value extends CombineTypes<[_Annotation$Enum_element_value, com.sun.tools.classfile.Annotation$element_value]> {}
          interface _Annotation$InvalidAnnotation$$static extends ClassLike {
            _serialVersionUID: long;
            _new(msg: string): Annotation$InvalidAnnotation;
          }
          let Annotation$InvalidAnnotation: _Annotation$InvalidAnnotation$$static;
          interface _Annotation$InvalidAnnotation {
          }
          interface Annotation$InvalidAnnotation extends CombineTypes<[_Annotation$InvalidAnnotation, com.sun.tools.classfile.AttributeException]> {}
          interface _Annotation$Primitive_element_value$$static extends ClassLike {
            _new(cr: ClassReader, tag: int): Annotation$Primitive_element_value;
            new(const_value_index: int, tag: int): Annotation$Primitive_element_value;
          }
          let Annotation$Primitive_element_value: _Annotation$Primitive_element_value$$static;
          interface _Annotation$Primitive_element_value {
            accept<R, P>(visitor: Annotation$element_value$Visitor<R,P>, p: P): R;
            length(): int;
            readonly const_value_index: int;
          }
          interface Annotation$Primitive_element_value extends CombineTypes<[_Annotation$Primitive_element_value, com.sun.tools.classfile.Annotation$element_value]> {}
          interface _Annotation$element_value$$static extends ClassLike {
            read(cr: ClassReader): Annotation$element_value;
            _new(tag: int): Annotation$element_value;
          }
          let Annotation$element_value: _Annotation$element_value$$static;
          interface _Annotation$element_value {
            accept<R, P>(a0: Annotation$element_value$Visitor<R,P>, a1: P): R;
            length(): int;
            readonly tag: int;
          }
          interface Annotation$element_value extends CombineTypes<[_Annotation$element_value, java.lang.Object]> {}
          interface _Annotation$element_value$Visitor$$static<R,P> extends ClassLike {
          }
          let Annotation$element_value$Visitor: _Annotation$element_value$Visitor$$static<R,P>;
          interface _Annotation$element_value$Visitor<R,P> {
            visitAnnotation(a0: Annotation$Annotation_element_value, a1: P): R;
            visitArray(a0: Annotation$Array_element_value, a1: P): R;
            visitClass(a0: Annotation$Class_element_value, a1: P): R;
            visitEnum(a0: Annotation$Enum_element_value, a1: P): R;
            visitPrimitive(a0: Annotation$Primitive_element_value, a1: P): R;
          }
          interface Annotation$element_value$Visitor<R,P> extends CombineTypes<[_Annotation$element_value$Visitor<R,P>, java.lang.Object]> {}
          interface _Annotation$element_value_pair$$static extends ClassLike {
            _new(cr: ClassReader): Annotation$element_value_pair;
            new(element_name_index: int, value: Annotation$element_value): Annotation$element_value_pair;
          }
          let Annotation$element_value_pair: _Annotation$element_value_pair$$static;
          interface _Annotation$element_value_pair {
            length(): int;
            readonly element_name_index: int;
            readonly value: Annotation$element_value;
          }
          interface Annotation$element_value_pair extends CombineTypes<[_Annotation$element_value_pair, java.lang.Object]> {}
          interface _AnnotationDefault_attribute$$static extends ClassLike {
            _new(cr: ClassReader, name_index: int, length: int): AnnotationDefault_attribute;
            new(constant_pool: ConstantPool, default_value: Annotation$element_value): AnnotationDefault_attribute;
            new(name_index: int, default_value: Annotation$element_value): AnnotationDefault_attribute;
          }
          let AnnotationDefault_attribute: _AnnotationDefault_attribute$$static;
          interface _AnnotationDefault_attribute {
            accept<R, D>(visitor: Attribute$Visitor<R,D>, data: D): R;
            readonly default_value: Annotation$element_value;
          }
          interface AnnotationDefault_attribute extends CombineTypes<[_AnnotationDefault_attribute, com.sun.tools.classfile.Attribute]> {}
          interface _Attribute$$static extends ClassLike {
            read(cr: ClassReader): Attribute;
            readonly AnnotationDefault: string;
            readonly BootstrapMethods: string;
            readonly CharacterRangeTable: string;
            readonly Code: string;
            readonly CompilationID: string;
            readonly ConstantValue: string;
            readonly Deprecated: string;
            readonly EnclosingMethod: string;
            readonly Exceptions: string;
            readonly InnerClasses: string;
            readonly LineNumberTable: string;
            readonly LocalVariableTable: string;
            readonly LocalVariableTypeTable: string;
            readonly MethodParameters: string;
            readonly Module: string;
            readonly ModuleHashes: string;
            readonly ModuleMainClass: string;
            readonly ModulePackages: string;
            readonly ModuleResolution: string;
            readonly ModuleTarget: string;
            readonly NestHost: string;
            readonly NestMembers: string;
            readonly PermittedSubclasses: string;
            readonly Record: string;
            readonly RuntimeInvisibleAnnotations: string;
            readonly RuntimeInvisibleParameterAnnotations: string;
            readonly RuntimeInvisibleTypeAnnotations: string;
            readonly RuntimeVisibleAnnotations: string;
            readonly RuntimeVisibleParameterAnnotations: string;
            readonly RuntimeVisibleTypeAnnotations: string;
            readonly Signature: string;
            readonly SourceDebugExtension: string;
            readonly SourceFile: string;
            readonly SourceID: string;
            readonly StackMap: string;
            readonly StackMapTable: string;
            readonly Synthetic: string;
            _new(name_index: int, length: int): Attribute;
          }
          let Attribute: _Attribute$$static;
          interface _Attribute {
            accept<R, D>(a0: Attribute$Visitor<R,D>, a1: D): R;
<R, D>(a0: Attribute$Visitor<R,D>, a1: D): R;
            byteLength(): int;
            getName(constant_pool: ConstantPool): string;
            readonly attribute_length: int;
            readonly attribute_name_index: int;
          }
          interface Attribute extends CombineTypes<[_Attribute, java.lang.Object]> {}
          interface _Attribute$Factory$$static extends ClassLike {
            new(): Attribute$Factory;
          }
          let Attribute$Factory: _Attribute$Factory$$static;
          interface _Attribute$Factory {
            createAttribute(cr: ClassReader, name_index: int, data: byte[]): Attribute;
            _init(): void;
            _standardAttributes: java.util.Map<string,java.lang.Class<Attribute>>;
          }
          interface Attribute$Factory extends CombineTypes<[_Attribute$Factory, java.lang.Object]> {}
          interface _Attribute$Visitor$$static<R,P> extends ClassLike {
          }
          let Attribute$Visitor: _Attribute$Visitor$$static<R,P>;
          interface _Attribute$Visitor<R,P> {
            visitAnnotationDefault(a0: AnnotationDefault_attribute, a1: P): R;
            visitBootstrapMethods(a0: BootstrapMethods_attribute, a1: P): R;
            visitCharacterRangeTable(a0: CharacterRangeTable_attribute, a1: P): R;
            visitCode(a0: Code_attribute, a1: P): R;
            visitCompilationID(a0: CompilationID_attribute, a1: P): R;
            visitConstantValue(a0: ConstantValue_attribute, a1: P): R;
            visitDefault(a0: DefaultAttribute, a1: P): R;
            visitDeprecated(a0: Deprecated_attribute, a1: P): R;
            visitEnclosingMethod(a0: EnclosingMethod_attribute, a1: P): R;
            visitExceptions(a0: Exceptions_attribute, a1: P): R;
            visitInnerClasses(a0: InnerClasses_attribute, a1: P): R;
            visitLineNumberTable(a0: LineNumberTable_attribute, a1: P): R;
            visitLocalVariableTable(a0: LocalVariableTable_attribute, a1: P): R;
            visitLocalVariableTypeTable(a0: LocalVariableTypeTable_attribute, a1: P): R;
            visitMethodParameters(a0: MethodParameters_attribute, a1: P): R;
            visitModule(a0: Module_attribute, a1: P): R;
            visitModuleHashes(a0: ModuleHashes_attribute, a1: P): R;
            visitModuleMainClass(a0: ModuleMainClass_attribute, a1: P): R;
            visitModulePackages(a0: ModulePackages_attribute, a1: P): R;
            visitModuleResolution(a0: ModuleResolution_attribute, a1: P): R;
            visitModuleTarget(a0: ModuleTarget_attribute, a1: P): R;
            visitNestHost(a0: NestHost_attribute, a1: P): R;
            visitNestMembers(a0: NestMembers_attribute, a1: P): R;
            visitPermittedSubclasses(a0: PermittedSubclasses_attribute, a1: P): R;
            visitRecord(a0: Record_attribute, a1: P): R;
            visitRuntimeInvisibleAnnotations(a0: RuntimeInvisibleAnnotations_attribute, a1: P): R;
            visitRuntimeInvisibleParameterAnnotations(a0: RuntimeInvisibleParameterAnnotations_attribute, a1: P): R;
            visitRuntimeInvisibleTypeAnnotations(a0: RuntimeInvisibleTypeAnnotations_attribute, a1: P): R;
            visitRuntimeVisibleAnnotations(a0: RuntimeVisibleAnnotations_attribute, a1: P): R;
            visitRuntimeVisibleParameterAnnotations(a0: RuntimeVisibleParameterAnnotations_attribute, a1: P): R;
            visitRuntimeVisibleTypeAnnotations(a0: RuntimeVisibleTypeAnnotations_attribute, a1: P): R;
            visitSignature(a0: Signature_attribute, a1: P): R;
            visitSourceDebugExtension(a0: SourceDebugExtension_attribute, a1: P): R;
            visitSourceFile(a0: SourceFile_attribute, a1: P): R;
            visitSourceID(a0: SourceID_attribute, a1: P): R;
            visitStackMap(a0: StackMap_attribute, a1: P): R;
            visitStackMapTable(a0: StackMapTable_attribute, a1: P): R;
            visitSynthetic(a0: Synthetic_attribute, a1: P): R;
          }
          interface Attribute$Visitor<R,P> extends CombineTypes<[_Attribute$Visitor<R,P>, java.lang.Object]> {}
          interface _AttributeException$$static extends ClassLike {
            _serialVersionUID: long;
            _new(): AttributeException;
            _new(msg: string): AttributeException;
          }
          let AttributeException: _AttributeException$$static;
          interface _AttributeException {
          }
          interface AttributeException extends CombineTypes<[_AttributeException, java.lang.Exception]> {}
          interface _Attributes$$static extends ClassLike {
            _new(cr: ClassReader): Attributes;
            new(constant_pool: ConstantPool, attrs: Attribute[]): Attributes;
            new(attributes: java.util.Map<string,Attribute>): Attributes;
          }
          let Attributes: _Attributes$$static;
          interface _Attributes {
            byteLength(): int;
            get(index: int): Attribute;
            get(name: string): Attribute;
            getIndex(constant_pool: ConstantPool, name: string): int;
            iterator(): java.util.Iterator<Attribute>;
            size(): int;
            readonly attrs: Attribute[];
            readonly map: java.util.Map<string,Attribute>;
          }
          interface Attributes extends CombineTypes<[_Attributes, java.lang.Iterable<Attribute>, java.lang.Object]> {}
          interface _BootstrapMethods_attribute$$static extends ClassLike {
            length(bootstrap_method_specifiers: BootstrapMethods_attribute$BootstrapMethodSpecifier[]): int;
            _new(cr: ClassReader, name_index: int, length: int): BootstrapMethods_attribute;
            new(name_index: int, bootstrap_method_specifiers: BootstrapMethods_attribute$BootstrapMethodSpecifier[]): BootstrapMethods_attribute;
          }
          let BootstrapMethods_attribute: _BootstrapMethods_attribute$$static;
          interface _BootstrapMethods_attribute {
            accept<R, P>(visitor: Attribute$Visitor<R,P>, p: P): R;
            readonly bootstrap_method_specifiers: BootstrapMethods_attribute$BootstrapMethodSpecifier[];
          }
          interface BootstrapMethods_attribute extends CombineTypes<[_BootstrapMethods_attribute, com.sun.tools.classfile.Attribute]> {}
          interface _BootstrapMethods_attribute$BootstrapMethodSpecifier$$static extends ClassLike {
            new(bootstrap_method_ref: int, bootstrap_arguments: int[]): BootstrapMethods_attribute$BootstrapMethodSpecifier;
            _new(cr: ClassReader): BootstrapMethods_attribute$BootstrapMethodSpecifier;
          }
          let BootstrapMethods_attribute$BootstrapMethodSpecifier: _BootstrapMethods_attribute$BootstrapMethodSpecifier$$static;
          interface _BootstrapMethods_attribute$BootstrapMethodSpecifier {
            _length(): int;
            bootstrap_arguments: int[];
            bootstrap_method_ref: int;
          }
          interface BootstrapMethods_attribute$BootstrapMethodSpecifier extends CombineTypes<[_BootstrapMethods_attribute$BootstrapMethodSpecifier, java.lang.Object]> {}
          interface _CharacterRangeTable_attribute$$static extends ClassLike {
            readonly CRT_ASSIGNMENT: int;
            readonly CRT_BLOCK: int;
            readonly CRT_BRANCH_FALSE: int;
            readonly CRT_BRANCH_TRUE: int;
            readonly CRT_CREATE: int;
            readonly CRT_FLOW_CONTROLLER: int;
            readonly CRT_FLOW_TARGET: int;
            readonly CRT_INVOKE: int;
            readonly CRT_STATEMENT: int;
            _new(cr: ClassReader, name_index: int, length: int): CharacterRangeTable_attribute;
            new(constant_pool: ConstantPool, character_range_table: CharacterRangeTable_attribute$Entry[]): CharacterRangeTable_attribute;
            new(name_index: int, character_range_table: CharacterRangeTable_attribute$Entry[]): CharacterRangeTable_attribute;
          }
          let CharacterRangeTable_attribute: _CharacterRangeTable_attribute$$static;
          interface _CharacterRangeTable_attribute {
            accept<R, D>(visitor: Attribute$Visitor<R,D>, data: D): R;
            readonly character_range_table: CharacterRangeTable_attribute$Entry[];
          }
          interface CharacterRangeTable_attribute extends CombineTypes<[_CharacterRangeTable_attribute, com.sun.tools.classfile.Attribute]> {}
          interface _CharacterRangeTable_attribute$Entry$$static extends ClassLike {
            length(): int;
            _new(cr: ClassReader): CharacterRangeTable_attribute$Entry;
          }
          let CharacterRangeTable_attribute$Entry: _CharacterRangeTable_attribute$Entry$$static;
          interface _CharacterRangeTable_attribute$Entry {
            readonly character_range_end: int;
            readonly character_range_start: int;
            readonly end_pc: int;
            readonly flags: int;
            readonly start_pc: int;
          }
          interface CharacterRangeTable_attribute$Entry extends CombineTypes<[_CharacterRangeTable_attribute$Entry, java.lang.Object]> {}
          interface _ClassFile$$static extends ClassLike {
            read(file: java.io.File): ClassFile;
            read(input: java.nio.file.Path): ClassFile;
            read(input: java.nio.file.Path, attributeFactory: Attribute$Factory): ClassFile;
            read(file: java.io.File, attributeFactory: Attribute$Factory): ClassFile;
            read(_in: java.io.InputStream): ClassFile;
            read(_in: java.io.InputStream, attributeFactory: Attribute$Factory): ClassFile;
            _new(_in: java.io.InputStream, attributeFactory: Attribute$Factory): ClassFile;
            new(magic: int, minor_version: int, major_version: int, constant_pool: ConstantPool, access_flags: AccessFlags, this_class: int, super_class: int, interfaces: int[], fields: Field[], methods: Method[], attributes: Attributes): ClassFile;
          }
          let ClassFile: _ClassFile$$static;
          interface _ClassFile {
            byteLength(): int;
            _byteLength(indices: int[]): int;
            _byteLength(fields: Field[]): int;
            _byteLength(methods: Method[]): int;
            getAttribute(name: string): Attribute;
            getInterfaceName(i: int): string;
            getName(): string;
            getSuperclassName(): string;
            isClass(): boolean;
            isInterface(): boolean;
            readonly access_flags: AccessFlags;
            readonly attributes: Attributes;
            readonly constant_pool: ConstantPool;
            readonly fields: Field[];
            readonly interfaces: int[];
            readonly magic: int;
            readonly major_version: int;
            readonly methods: Method[];
            readonly minor_version: int;
            readonly super_class: int;
            readonly this_class: int;
          }
          interface ClassFile extends CombineTypes<[_ClassFile, java.lang.Object]> {}
          interface _ClassReader$$static extends ClassLike {
            _new(classFile: ClassFile, _in: java.io.InputStream, attributeFactory: Attribute$Factory): ClassReader;
          }
          let ClassReader: _ClassReader$$static;
          interface _ClassReader {
            _getClassFile(): ClassFile;
            _getConstantPool(): ConstantPool;
            readAttribute(): Attribute;
            readDouble(): double;
            readFloat(): float;
            readFully(b: byte[]): void;
            readInt(): int;
            readLong(): long;
            readUTF(): string;
            readUnsignedByte(): int;
            readUnsignedShort(): int;
            _attributeFactory: Attribute$Factory;
            _classFile: ClassFile;
            _in: java.io.DataInputStream;
          }
          interface ClassReader extends CombineTypes<[_ClassReader, java.lang.Object]> {}
          interface _ClassTranslator$$static extends ClassLike {
            _equal<T>(a1: T[], a2: T[]): boolean;
            new(): ClassTranslator;
          }
          let ClassTranslator: _ClassTranslator$$static;
          interface _ClassTranslator {
            translate(cf: ClassFile, translations: java.util.Map<any,any>): ClassFile;
            _translate(cp: ConstantPool, translations: java.util.Map<any,any>): ConstantPool;
            _translate(cpInfo: ConstantPool$CPInfo, translations: java.util.Map<any,any>): ConstantPool$CPInfo;
            _translate(fields: Field[], constant_pool: ConstantPool, translations: java.util.Map<any,any>): Field[];
            _translate(field: Field, constant_pool: ConstantPool, translations: java.util.Map<any,any>): Field;
            _translate(method: Method, constant_pool: ConstantPool, translations: java.util.Map<any,any>): Method;
            _translate(attribute: Attribute, translations: java.util.Map<any,any>): Attribute;
            _translateAttributes(attributes: Attributes, constant_pool: ConstantPool, translations: java.util.Map<any,any>): Attributes;
            _translateMethods(methods: Method[], constant_pool: ConstantPool, translations: java.util.Map<any,any>): Method[];
            visitClass(info: ConstantPool$CONSTANT_Class_info, translations: java.util.Map<any,any>): ConstantPool$CPInfo;
            visitClass(a0: ConstantPool$CONSTANT_Class_info, a1: any): any;
            visitDouble(info: ConstantPool$CONSTANT_Double_info, translations: java.util.Map<any,any>): ConstantPool$CPInfo;
            visitDouble(a0: ConstantPool$CONSTANT_Double_info, a1: any): any;
            visitDynamicConstant(info: ConstantPool$CONSTANT_Dynamic_info, translations: java.util.Map<any,any>): ConstantPool$CPInfo;
            visitDynamicConstant(a0: ConstantPool$CONSTANT_Dynamic_info, a1: any): any;
            visitFieldref(info: ConstantPool$CONSTANT_Fieldref_info, translations: java.util.Map<any,any>): ConstantPool$CPInfo;
            visitFieldref(a0: ConstantPool$CONSTANT_Fieldref_info, a1: any): any;
            visitFloat(info: ConstantPool$CONSTANT_Float_info, translations: java.util.Map<any,any>): ConstantPool$CPInfo;
            visitFloat(a0: ConstantPool$CONSTANT_Float_info, a1: any): any;
            visitInteger(info: ConstantPool$CONSTANT_Integer_info, translations: java.util.Map<any,any>): ConstantPool$CPInfo;
            visitInteger(a0: ConstantPool$CONSTANT_Integer_info, a1: any): any;
            visitInterfaceMethodref(info: ConstantPool$CONSTANT_InterfaceMethodref_info, translations: java.util.Map<any,any>): ConstantPool$CPInfo;
            visitInterfaceMethodref(a0: ConstantPool$CONSTANT_InterfaceMethodref_info, a1: any): any;
            visitInvokeDynamic(info: ConstantPool$CONSTANT_InvokeDynamic_info, translations: java.util.Map<any,any>): ConstantPool$CPInfo;
            visitInvokeDynamic(a0: ConstantPool$CONSTANT_InvokeDynamic_info, a1: any): any;
            visitLong(info: ConstantPool$CONSTANT_Long_info, translations: java.util.Map<any,any>): ConstantPool$CPInfo;
            visitLong(a0: ConstantPool$CONSTANT_Long_info, a1: any): any;
            visitMethodHandle(info: ConstantPool$CONSTANT_MethodHandle_info, translations: java.util.Map<any,any>): ConstantPool$CPInfo;
            visitMethodHandle(a0: ConstantPool$CONSTANT_MethodHandle_info, a1: any): any;
            visitMethodType(info: ConstantPool$CONSTANT_MethodType_info, translations: java.util.Map<any,any>): ConstantPool$CPInfo;
            visitMethodType(a0: ConstantPool$CONSTANT_MethodType_info, a1: any): any;
            visitMethodref(info: ConstantPool$CONSTANT_Methodref_info, translations: java.util.Map<any,any>): ConstantPool$CPInfo;
            visitMethodref(a0: ConstantPool$CONSTANT_Methodref_info, a1: any): any;
            visitModule(info: ConstantPool$CONSTANT_Module_info, translations: java.util.Map<any,any>): ConstantPool$CPInfo;
            visitModule(a0: ConstantPool$CONSTANT_Module_info, a1: any): any;
            visitNameAndType(info: ConstantPool$CONSTANT_NameAndType_info, translations: java.util.Map<any,any>): ConstantPool$CPInfo;
            visitNameAndType(a0: ConstantPool$CONSTANT_NameAndType_info, a1: any): any;
            visitPackage(info: ConstantPool$CONSTANT_Package_info, translations: java.util.Map<any,any>): ConstantPool$CPInfo;
            visitPackage(a0: ConstantPool$CONSTANT_Package_info, a1: any): any;
            visitString(info: ConstantPool$CONSTANT_String_info, translations: java.util.Map<any,any>): ConstantPool$CPInfo;
            visitString(a0: ConstantPool$CONSTANT_String_info, a1: any): any;
            visitUtf8(info: ConstantPool$CONSTANT_Utf8_info, translations: java.util.Map<any,any>): ConstantPool$CPInfo;
            visitUtf8(a0: ConstantPool$CONSTANT_Utf8_info, a1: any): any;
          }
          interface ClassTranslator extends CombineTypes<[_ClassTranslator, ConstantPool$Visitor<ConstantPool$CPInfo,java.util.Map<any,any>>, java.lang.Object]> {}
          interface _ClassWriter$$static extends ClassLike {
            new(): ClassWriter;
          }
          let ClassWriter: _ClassWriter$$static;
          interface _ClassWriter {
            write(classFile: ClassFile, f: java.io.File): void;
            write(classFile: ClassFile, s: java.io.OutputStream): void;
            _write(): void;
            _writeAccessFlags(flags: AccessFlags): void;
            _writeAttributes(attributes: Attributes): void;
            _writeClassInfo(): void;
            _writeConstantPool(): void;
            _writeDescriptor(d: Descriptor): void;
            _writeField(f: Field): void;
            _writeFields(): void;
            _writeHeader(): void;
            _writeMethod(m: Method): void;
            _writeMethods(): void;
            _attributeWriter: ClassWriter$AttributeWriter;
            _classFile: ClassFile;
            _constantPoolWriter: ClassWriter$ConstantPoolWriter;
            _out: ClassWriter$ClassOutputStream;
          }
          interface ClassWriter extends CombineTypes<[_ClassWriter, java.lang.Object]> {}
          interface _ClassWriter$AnnotationWriter$$static extends ClassLike {
            _new(): ClassWriter$AnnotationWriter;
          }
          let ClassWriter$AnnotationWriter: _ClassWriter$AnnotationWriter$$static;
          interface _ClassWriter$AnnotationWriter {
            visitAnnotation(ev: Annotation$Annotation_element_value, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitAnnotation(a0: Annotation$Annotation_element_value, a1: any): any;
            visitArray(ev: Annotation$Array_element_value, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitArray(a0: Annotation$Array_element_value, a1: any): any;
            visitClass(ev: Annotation$Class_element_value, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitClass(a0: Annotation$Class_element_value, a1: any): any;
            visitEnum(ev: Annotation$Enum_element_value, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitEnum(a0: Annotation$Enum_element_value, a1: any): any;
            visitPrimitive(ev: Annotation$Primitive_element_value, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitPrimitive(a0: Annotation$Primitive_element_value, a1: any): any;
            write(annos: Annotation[], out: ClassWriter$ClassOutputStream): void;
            write(annos: TypeAnnotation[], out: ClassWriter$ClassOutputStream): void;
            write(anno: Annotation, out: ClassWriter$ClassOutputStream): void;
            write(anno: TypeAnnotation, out: ClassWriter$ClassOutputStream): void;
            write(pair: Annotation$element_value_pair, out: ClassWriter$ClassOutputStream): void;
            write(ev: Annotation$element_value, out: ClassWriter$ClassOutputStream): void;
            _write(p: TypeAnnotation$Position, out: ClassWriter$ClassOutputStream): void;
          }
          interface ClassWriter$AnnotationWriter extends CombineTypes<[_ClassWriter$AnnotationWriter, Annotation$element_value$Visitor<java.lang.Void,ClassWriter$ClassOutputStream>, java.lang.Object]> {}
          interface _ClassWriter$AttributeWriter$$static extends ClassLike {
            _new(): ClassWriter$AttributeWriter;
          }
          let ClassWriter$AttributeWriter: _ClassWriter$AttributeWriter$$static;
          interface _ClassWriter$AttributeWriter {
            visitAnnotationDefault(attr: AnnotationDefault_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitAnnotationDefault(a0: AnnotationDefault_attribute, a1: any): any;
            visitBootstrapMethods(attr: BootstrapMethods_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitBootstrapMethods(a0: BootstrapMethods_attribute, a1: any): any;
            visitCharacterRangeTable(attr: CharacterRangeTable_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitCharacterRangeTable(a0: CharacterRangeTable_attribute, a1: any): any;
            visitCode(attr: Code_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitCode(a0: Code_attribute, a1: any): any;
            visitCompilationID(attr: CompilationID_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitCompilationID(a0: CompilationID_attribute, a1: any): any;
            visitConstantValue(attr: ConstantValue_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitConstantValue(a0: ConstantValue_attribute, a1: any): any;
            visitDefault(attr: DefaultAttribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitDefault(a0: DefaultAttribute, a1: any): any;
            visitDeprecated(attr: Deprecated_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitDeprecated(a0: Deprecated_attribute, a1: any): any;
            visitEnclosingMethod(attr: EnclosingMethod_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitEnclosingMethod(a0: EnclosingMethod_attribute, a1: any): any;
            visitExceptions(attr: Exceptions_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitExceptions(a0: Exceptions_attribute, a1: any): any;
            visitInnerClasses(attr: InnerClasses_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitInnerClasses(a0: InnerClasses_attribute, a1: any): any;
            visitLineNumberTable(attr: LineNumberTable_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitLineNumberTable(a0: LineNumberTable_attribute, a1: any): any;
            visitLocalVariableTable(attr: LocalVariableTable_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitLocalVariableTable(a0: LocalVariableTable_attribute, a1: any): any;
            visitLocalVariableTypeTable(attr: LocalVariableTypeTable_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitLocalVariableTypeTable(a0: LocalVariableTypeTable_attribute, a1: any): any;
            visitMethodParameters(attr: MethodParameters_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitMethodParameters(a0: MethodParameters_attribute, a1: any): any;
            visitModule(attr: Module_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitModule(a0: Module_attribute, a1: any): any;
            visitModuleHashes(attr: ModuleHashes_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitModuleHashes(a0: ModuleHashes_attribute, a1: any): any;
            visitModuleMainClass(attr: ModuleMainClass_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitModuleMainClass(a0: ModuleMainClass_attribute, a1: any): any;
            visitModulePackages(attr: ModulePackages_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitModulePackages(a0: ModulePackages_attribute, a1: any): any;
            visitModuleResolution(attr: ModuleResolution_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitModuleResolution(a0: ModuleResolution_attribute, a1: any): any;
            visitModuleTarget(attr: ModuleTarget_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitModuleTarget(a0: ModuleTarget_attribute, a1: any): any;
            visitNestHost(attr: NestHost_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitNestHost(a0: NestHost_attribute, a1: any): any;
            visitNestMembers(attr: NestMembers_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitNestMembers(a0: NestMembers_attribute, a1: any): any;
            visitPermittedSubclasses(attr: PermittedSubclasses_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitPermittedSubclasses(a0: PermittedSubclasses_attribute, a1: any): any;
            visitRecord(attr: Record_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitRecord(a0: Record_attribute, a1: any): any;
            visitRuntimeInvisibleAnnotations(attr: RuntimeInvisibleAnnotations_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitRuntimeInvisibleAnnotations(a0: RuntimeInvisibleAnnotations_attribute, a1: any): any;
            visitRuntimeInvisibleParameterAnnotations(attr: RuntimeInvisibleParameterAnnotations_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitRuntimeInvisibleParameterAnnotations(a0: RuntimeInvisibleParameterAnnotations_attribute, a1: any): any;
            visitRuntimeInvisibleTypeAnnotations(attr: RuntimeInvisibleTypeAnnotations_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitRuntimeInvisibleTypeAnnotations(a0: RuntimeInvisibleTypeAnnotations_attribute, a1: any): any;
            visitRuntimeVisibleAnnotations(attr: RuntimeVisibleAnnotations_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitRuntimeVisibleAnnotations(a0: RuntimeVisibleAnnotations_attribute, a1: any): any;
            visitRuntimeVisibleParameterAnnotations(attr: RuntimeVisibleParameterAnnotations_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitRuntimeVisibleParameterAnnotations(a0: RuntimeVisibleParameterAnnotations_attribute, a1: any): any;
            visitRuntimeVisibleTypeAnnotations(attr: RuntimeVisibleTypeAnnotations_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitRuntimeVisibleTypeAnnotations(a0: RuntimeVisibleTypeAnnotations_attribute, a1: any): any;
            visitSignature(attr: Signature_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitSignature(a0: Signature_attribute, a1: any): any;
            visitSourceDebugExtension(attr: SourceDebugExtension_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitSourceDebugExtension(a0: SourceDebugExtension_attribute, a1: any): any;
            visitSourceFile(attr: SourceFile_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitSourceFile(a0: SourceFile_attribute, a1: any): any;
            visitSourceID(attr: SourceID_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitSourceID(a0: SourceID_attribute, a1: any): any;
            visitStackMap(attr: StackMap_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitStackMap(a0: StackMap_attribute, a1: any): any;
            visitStackMapTable(attr: StackMapTable_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitStackMapTable(a0: StackMapTable_attribute, a1: any): any;
            visitSynthetic(attr: Synthetic_attribute, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visitSynthetic(a0: Synthetic_attribute, a1: any): any;
            write(attributes: Attributes, out: ClassWriter$ClassOutputStream): void;
            write(attr: Attribute, out: ClassWriter$ClassOutputStream): void;
            _writeAccessFlags(flags: AccessFlags, out: ClassWriter$ClassOutputStream): void;
            _writeCharacterRangeTableEntry(entry: CharacterRangeTable_attribute$Entry, out: ClassWriter$ClassOutputStream): void;
            _writeExceptionTableEntry(exception_data: Code_attribute$Exception_data, out: ClassWriter$ClassOutputStream): void;
            _writeInnerClassesInfo(info: InnerClasses_attribute$Info, out: ClassWriter$ClassOutputStream): void;
            _writeLineNumberTableEntry(entry: LineNumberTable_attribute$Entry, out: ClassWriter$ClassOutputStream): void;
            _writeLocalVariableTableEntry(entry: LocalVariableTable_attribute$Entry, out: ClassWriter$ClassOutputStream): void;
            _writeLocalVariableTypeTableEntry(entry: LocalVariableTypeTable_attribute$Entry, out: ClassWriter$ClassOutputStream): void;
            _annotationWriter: ClassWriter$AnnotationWriter;
            _stackMapWriter: ClassWriter$StackMapTableWriter;
          }
          interface ClassWriter$AttributeWriter extends CombineTypes<[_ClassWriter$AttributeWriter, java.lang.Object, Attribute$Visitor<java.lang.Void,ClassWriter$ClassOutputStream>]> {}
          interface _ClassWriter$ClassOutputStream$$static extends ClassLike {
            new(): ClassWriter$ClassOutputStream;
          }
          let ClassWriter$ClassOutputStream: _ClassWriter$ClassOutputStream$$static;
          interface _ClassWriter$ClassOutputStream {
            writeByte(value: int): void;
            writeDouble(value: double): void;
            writeFloat(value: float): void;
            writeInt(value: int): void;
            writeLong(value: long): void;
            writeShort(value: int): void;
            writeTo(s: ClassWriter$ClassOutputStream): void;
            writeUTF(value: string): void;
            _d: java.io.DataOutputStream;
          }
          interface ClassWriter$ClassOutputStream extends CombineTypes<[_ClassWriter$ClassOutputStream, java.io.ByteArrayOutputStream]> {}
          interface _ClassWriter$ConstantPoolWriter$$static extends ClassLike {
            _new(): ClassWriter$ConstantPoolWriter;
          }
          let ClassWriter$ConstantPoolWriter: _ClassWriter$ConstantPoolWriter$$static;
          interface _ClassWriter$ConstantPoolWriter {
            visitClass(info: ConstantPool$CONSTANT_Class_info, out: ClassWriter$ClassOutputStream): int;
            visitClass(a0: ConstantPool$CONSTANT_Class_info, a1: any): any;
            visitDouble(info: ConstantPool$CONSTANT_Double_info, out: ClassWriter$ClassOutputStream): int;
            visitDouble(a0: ConstantPool$CONSTANT_Double_info, a1: any): any;
            visitDynamicConstant(info: ConstantPool$CONSTANT_Dynamic_info, out: ClassWriter$ClassOutputStream): int;
            visitDynamicConstant(a0: ConstantPool$CONSTANT_Dynamic_info, a1: any): any;
            visitFieldref(info: ConstantPool$CONSTANT_Fieldref_info, out: ClassWriter$ClassOutputStream): int;
            visitFieldref(a0: ConstantPool$CONSTANT_Fieldref_info, a1: any): any;
            visitFloat(info: ConstantPool$CONSTANT_Float_info, out: ClassWriter$ClassOutputStream): int;
            visitFloat(a0: ConstantPool$CONSTANT_Float_info, a1: any): any;
            visitInteger(info: ConstantPool$CONSTANT_Integer_info, out: ClassWriter$ClassOutputStream): int;
            visitInteger(a0: ConstantPool$CONSTANT_Integer_info, a1: any): any;
            visitInterfaceMethodref(info: ConstantPool$CONSTANT_InterfaceMethodref_info, out: ClassWriter$ClassOutputStream): int;
            visitInterfaceMethodref(a0: ConstantPool$CONSTANT_InterfaceMethodref_info, a1: any): any;
            visitInvokeDynamic(info: ConstantPool$CONSTANT_InvokeDynamic_info, out: ClassWriter$ClassOutputStream): int;
            visitInvokeDynamic(a0: ConstantPool$CONSTANT_InvokeDynamic_info, a1: any): any;
            visitLong(info: ConstantPool$CONSTANT_Long_info, out: ClassWriter$ClassOutputStream): int;
            visitLong(a0: ConstantPool$CONSTANT_Long_info, a1: any): any;
            visitMethodHandle(info: ConstantPool$CONSTANT_MethodHandle_info, out: ClassWriter$ClassOutputStream): int;
            visitMethodHandle(a0: ConstantPool$CONSTANT_MethodHandle_info, a1: any): any;
            visitMethodType(info: ConstantPool$CONSTANT_MethodType_info, out: ClassWriter$ClassOutputStream): int;
            visitMethodType(a0: ConstantPool$CONSTANT_MethodType_info, a1: any): any;
            visitMethodref(info: ConstantPool$CONSTANT_Methodref_info, out: ClassWriter$ClassOutputStream): int;
            visitMethodref(a0: ConstantPool$CONSTANT_Methodref_info, a1: any): any;
            visitModule(info: ConstantPool$CONSTANT_Module_info, out: ClassWriter$ClassOutputStream): int;
            visitModule(a0: ConstantPool$CONSTANT_Module_info, a1: any): any;
            visitNameAndType(info: ConstantPool$CONSTANT_NameAndType_info, out: ClassWriter$ClassOutputStream): int;
            visitNameAndType(a0: ConstantPool$CONSTANT_NameAndType_info, a1: any): any;
            visitPackage(info: ConstantPool$CONSTANT_Package_info, out: ClassWriter$ClassOutputStream): int;
            visitPackage(a0: ConstantPool$CONSTANT_Package_info, a1: any): any;
            visitString(info: ConstantPool$CONSTANT_String_info, out: ClassWriter$ClassOutputStream): int;
            visitString(a0: ConstantPool$CONSTANT_String_info, a1: any): any;
            visitUtf8(info: ConstantPool$CONSTANT_Utf8_info, out: ClassWriter$ClassOutputStream): int;
            visitUtf8(a0: ConstantPool$CONSTANT_Utf8_info, a1: any): any;
            _write(info: ConstantPool$CPInfo, out: ClassWriter$ClassOutputStream): int;
            _writeRef(info: ConstantPool$CPRefInfo, out: ClassWriter$ClassOutputStream): int;
          }
          interface ClassWriter$ConstantPoolWriter extends CombineTypes<[_ClassWriter$ConstantPoolWriter, java.lang.Object, ConstantPool$Visitor<int,ClassWriter$ClassOutputStream>]> {}
          interface _ClassWriter$StackMapTableWriter$$static extends ClassLike {
            _new(): ClassWriter$StackMapTableWriter;
          }
          let ClassWriter$StackMapTableWriter: _ClassWriter$StackMapTableWriter$$static;
          interface _ClassWriter$StackMapTableWriter {
            visit_append_frame(frame: StackMapTable_attribute$append_frame, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visit_append_frame(a0: StackMapTable_attribute$append_frame, a1: any): any;
            visit_chop_frame(frame: StackMapTable_attribute$chop_frame, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visit_chop_frame(a0: StackMapTable_attribute$chop_frame, a1: any): any;
            visit_full_frame(frame: StackMapTable_attribute$full_frame, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visit_full_frame(a0: StackMapTable_attribute$full_frame, a1: any): any;
            visit_same_frame(frame: StackMapTable_attribute$same_frame, p: ClassWriter$ClassOutputStream): java.lang.Void;
            visit_same_frame(a0: StackMapTable_attribute$same_frame, a1: any): any;
            visit_same_frame_extended(frame: StackMapTable_attribute$same_frame_extended, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visit_same_frame_extended(a0: StackMapTable_attribute$same_frame_extended, a1: any): any;
            visit_same_locals_1_stack_item_frame(frame: StackMapTable_attribute$same_locals_1_stack_item_frame, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visit_same_locals_1_stack_item_frame(a0: StackMapTable_attribute$same_locals_1_stack_item_frame, a1: any): any;
            visit_same_locals_1_stack_item_frame_extended(frame: StackMapTable_attribute$same_locals_1_stack_item_frame_extended, out: ClassWriter$ClassOutputStream): java.lang.Void;
            visit_same_locals_1_stack_item_frame_extended(a0: StackMapTable_attribute$same_locals_1_stack_item_frame_extended, a1: any): any;
            write(frame: StackMapTable_attribute$stack_map_frame, out: ClassWriter$ClassOutputStream): void;
            _writeVerificationTypeInfo(info: StackMapTable_attribute$verification_type_info, out: ClassWriter$ClassOutputStream): void;
          }
          interface ClassWriter$StackMapTableWriter extends CombineTypes<[_ClassWriter$StackMapTableWriter, StackMapTable_attribute$stack_map_frame$Visitor<java.lang.Void,ClassWriter$ClassOutputStream>, java.lang.Object]> {}
          interface _Code_attribute$$static extends ClassLike {
            _new(cr: ClassReader, name_index: int, length: int): Code_attribute;
          }
          let Code_attribute: _Code_attribute$$static;
          interface _Code_attribute {
            accept<R, D>(visitor: Attribute$Visitor<R,D>, data: D): R;
            getByte(offset: int): int;
            getInstructions(): java.lang.Iterable<Instruction>;
            getInt(offset: int): int;
            getShort(offset: int): int;
            getUnsignedByte(offset: int): int;
            getUnsignedShort(offset: int): int;
            readonly attributes: Attributes;
            readonly code: byte[];
            readonly code_length: int;
            readonly exception_table: Code_attribute$Exception_data[];
            readonly exception_table_length: int;
            readonly max_locals: int;
            readonly max_stack: int;
          }
          interface Code_attribute extends CombineTypes<[_Code_attribute, com.sun.tools.classfile.Attribute]> {}
          interface _Code_attribute$Exception_data$$static extends ClassLike {
            _new(cr: ClassReader): Code_attribute$Exception_data;
          }
          let Code_attribute$Exception_data: _Code_attribute$Exception_data$$static;
          interface _Code_attribute$Exception_data {
            readonly catch_type: int;
            readonly end_pc: int;
            readonly handler_pc: int;
            readonly start_pc: int;
          }
          interface Code_attribute$Exception_data extends CombineTypes<[_Code_attribute$Exception_data, java.lang.Object]> {}
          interface _Code_attribute$InvalidIndex$$static extends ClassLike {
            _serialVersionUID: long;
            _new(index: int): Code_attribute$InvalidIndex;
          }
          let Code_attribute$InvalidIndex: _Code_attribute$InvalidIndex$$static;
          interface _Code_attribute$InvalidIndex {
            getMessage(): string;
            readonly index: int;
          }
          interface Code_attribute$InvalidIndex extends CombineTypes<[_Code_attribute$InvalidIndex, com.sun.tools.classfile.AttributeException]> {}
          interface _CompilationID_attribute$$static extends ClassLike {
            _new(cr: ClassReader, name_index: int, length: int): CompilationID_attribute;
            new(constant_pool: ConstantPool, compilationID_index: int): CompilationID_attribute;
            new(name_index: int, compilationID_index: int): CompilationID_attribute;
          }
          let CompilationID_attribute: _CompilationID_attribute$$static;
          interface _CompilationID_attribute {
            accept<R, D>(visitor: Attribute$Visitor<R,D>, data: D): R;
            _getCompilationID(constant_pool: ConstantPool): string;
            readonly compilationID_index: int;
          }
          interface CompilationID_attribute extends CombineTypes<[_CompilationID_attribute, com.sun.tools.classfile.Attribute]> {}
          interface _ConstantPool$$static extends ClassLike {
            readonly CONSTANT_Class: int;
            readonly CONSTANT_Double: int;
            readonly CONSTANT_Dynamic: int;
            readonly CONSTANT_Fieldref: int;
            readonly CONSTANT_Float: int;
            readonly CONSTANT_Integer: int;
            readonly CONSTANT_InterfaceMethodref: int;
            readonly CONSTANT_InvokeDynamic: int;
            readonly CONSTANT_Long: int;
            readonly CONSTANT_MethodHandle: int;
            readonly CONSTANT_MethodType: int;
            readonly CONSTANT_Methodref: int;
            readonly CONSTANT_Module: int;
            readonly CONSTANT_NameAndType: int;
            readonly CONSTANT_Package: int;
            readonly CONSTANT_String: int;
            readonly CONSTANT_Utf8: int;
            _new(cr: ClassReader): ConstantPool;
            new(pool: ConstantPool$CPInfo[]): ConstantPool;
          }
          let ConstantPool: _ConstantPool$$static;
          interface _ConstantPool {
            byteLength(): int;
            entries(): java.lang.Iterable<ConstantPool$CPInfo>;
            get(index: int): ConstantPool$CPInfo;
            _get(index: int, expected_type: int): ConstantPool$CPInfo;
            getClassInfo(index: int): ConstantPool$CONSTANT_Class_info;
            getModuleInfo(index: int): ConstantPool$CONSTANT_Module_info;
            getNameAndTypeInfo(index: int): ConstantPool$CONSTANT_NameAndType_info;
            getPackageInfo(index: int): ConstantPool$CONSTANT_Package_info;
            getUTF8Index(value: string): int;
            getUTF8Info(index: int): ConstantPool$CONSTANT_Utf8_info;
            getUTF8Value(index: int): string;
            size(): int;
            _pool: ConstantPool$CPInfo[];
          }
          interface ConstantPool extends CombineTypes<[_ConstantPool, java.lang.Object]> {}
          interface _ConstantPool$CONSTANT_Class_info$$static extends ClassLike {
            _new(cp: ConstantPool, cr: ClassReader): ConstantPool$CONSTANT_Class_info;
            new(cp: ConstantPool, name_index: int): ConstantPool$CONSTANT_Class_info;
          }
          let ConstantPool$CONSTANT_Class_info: _ConstantPool$CONSTANT_Class_info$$static;
          interface _ConstantPool$CONSTANT_Class_info {
            accept<R, D>(visitor: ConstantPool$Visitor<R,D>, data: D): R;
            byteLength(): int;
            getBaseName(): string;
            getDimensionCount(): int;
            getName(): string;
            getTag(): int;
            toString(): string;
            readonly name_index: int;
          }
          interface ConstantPool$CONSTANT_Class_info extends CombineTypes<[_ConstantPool$CONSTANT_Class_info, com.sun.tools.classfile.ConstantPool$CPInfo]> {}
          interface _ConstantPool$CONSTANT_Double_info$$static extends ClassLike {
            _new(cr: ClassReader): ConstantPool$CONSTANT_Double_info;
            new(value: double): ConstantPool$CONSTANT_Double_info;
          }
          let ConstantPool$CONSTANT_Double_info: _ConstantPool$CONSTANT_Double_info$$static;
          interface _ConstantPool$CONSTANT_Double_info {
            accept<R, D>(visitor: ConstantPool$Visitor<R,D>, data: D): R;
            byteLength(): int;
            getTag(): int;
            size(): int;
            toString(): string;
            readonly value: double;
          }
          interface ConstantPool$CONSTANT_Double_info extends CombineTypes<[_ConstantPool$CONSTANT_Double_info, com.sun.tools.classfile.ConstantPool$CPInfo]> {}
          interface _ConstantPool$CONSTANT_Dynamic_info$$static extends ClassLike {
            _new(cp: ConstantPool, cr: ClassReader): ConstantPool$CONSTANT_Dynamic_info;
            new(cp: ConstantPool, bootstrap_method_index: int, name_and_type_index: int): ConstantPool$CONSTANT_Dynamic_info;
          }
          let ConstantPool$CONSTANT_Dynamic_info: _ConstantPool$CONSTANT_Dynamic_info$$static;
          interface _ConstantPool$CONSTANT_Dynamic_info {
            accept<R, D>(visitor: ConstantPool$Visitor<R,D>, data: D): R;
            byteLength(): int;
            getNameAndTypeInfo(): ConstantPool$CONSTANT_NameAndType_info;
            getTag(): int;
            toString(): string;
            readonly bootstrap_method_attr_index: int;
            readonly name_and_type_index: int;
          }
          interface ConstantPool$CONSTANT_Dynamic_info extends CombineTypes<[_ConstantPool$CONSTANT_Dynamic_info, com.sun.tools.classfile.ConstantPool$CPInfo]> {}
          interface _ConstantPool$CONSTANT_Fieldref_info$$static extends ClassLike {
            _new(cp: ConstantPool, cr: ClassReader): ConstantPool$CONSTANT_Fieldref_info;
            new(cp: ConstantPool, class_index: int, name_and_type_index: int): ConstantPool$CONSTANT_Fieldref_info;
          }
          let ConstantPool$CONSTANT_Fieldref_info: _ConstantPool$CONSTANT_Fieldref_info$$static;
          interface _ConstantPool$CONSTANT_Fieldref_info {
            accept<R, D>(visitor: ConstantPool$Visitor<R,D>, data: D): R;
            toString(): string;
          }
          interface ConstantPool$CONSTANT_Fieldref_info extends CombineTypes<[_ConstantPool$CONSTANT_Fieldref_info, com.sun.tools.classfile.ConstantPool$CPRefInfo]> {}
          interface _ConstantPool$CONSTANT_Float_info$$static extends ClassLike {
            _new(cr: ClassReader): ConstantPool$CONSTANT_Float_info;
            new(value: float): ConstantPool$CONSTANT_Float_info;
          }
          let ConstantPool$CONSTANT_Float_info: _ConstantPool$CONSTANT_Float_info$$static;
          interface _ConstantPool$CONSTANT_Float_info {
            accept<R, D>(visitor: ConstantPool$Visitor<R,D>, data: D): R;
            byteLength(): int;
            getTag(): int;
            toString(): string;
            readonly value: float;
          }
          interface ConstantPool$CONSTANT_Float_info extends CombineTypes<[_ConstantPool$CONSTANT_Float_info, com.sun.tools.classfile.ConstantPool$CPInfo]> {}
          interface _ConstantPool$CONSTANT_Integer_info$$static extends ClassLike {
            _new(cr: ClassReader): ConstantPool$CONSTANT_Integer_info;
            new(value: int): ConstantPool$CONSTANT_Integer_info;
          }
          let ConstantPool$CONSTANT_Integer_info: _ConstantPool$CONSTANT_Integer_info$$static;
          interface _ConstantPool$CONSTANT_Integer_info {
            accept<R, D>(visitor: ConstantPool$Visitor<R,D>, data: D): R;
            byteLength(): int;
            getTag(): int;
            toString(): string;
            readonly value: int;
          }
          interface ConstantPool$CONSTANT_Integer_info extends CombineTypes<[_ConstantPool$CONSTANT_Integer_info, com.sun.tools.classfile.ConstantPool$CPInfo]> {}
          interface _ConstantPool$CONSTANT_InterfaceMethodref_info$$static extends ClassLike {
            _new(cp: ConstantPool, cr: ClassReader): ConstantPool$CONSTANT_InterfaceMethodref_info;
            new(cp: ConstantPool, class_index: int, name_and_type_index: int): ConstantPool$CONSTANT_InterfaceMethodref_info;
          }
          let ConstantPool$CONSTANT_InterfaceMethodref_info: _ConstantPool$CONSTANT_InterfaceMethodref_info$$static;
          interface _ConstantPool$CONSTANT_InterfaceMethodref_info {
            accept<R, D>(visitor: ConstantPool$Visitor<R,D>, data: D): R;
            toString(): string;
          }
          interface ConstantPool$CONSTANT_InterfaceMethodref_info extends CombineTypes<[_ConstantPool$CONSTANT_InterfaceMethodref_info, com.sun.tools.classfile.ConstantPool$CPRefInfo]> {}
          interface _ConstantPool$CONSTANT_InvokeDynamic_info$$static extends ClassLike {
            _new(cp: ConstantPool, cr: ClassReader): ConstantPool$CONSTANT_InvokeDynamic_info;
            new(cp: ConstantPool, bootstrap_method_index: int, name_and_type_index: int): ConstantPool$CONSTANT_InvokeDynamic_info;
          }
          let ConstantPool$CONSTANT_InvokeDynamic_info: _ConstantPool$CONSTANT_InvokeDynamic_info$$static;
          interface _ConstantPool$CONSTANT_InvokeDynamic_info {
            accept<R, D>(visitor: ConstantPool$Visitor<R,D>, data: D): R;
            byteLength(): int;
            getNameAndTypeInfo(): ConstantPool$CONSTANT_NameAndType_info;
            getTag(): int;
            toString(): string;
            readonly bootstrap_method_attr_index: int;
            readonly name_and_type_index: int;
          }
          interface ConstantPool$CONSTANT_InvokeDynamic_info extends CombineTypes<[_ConstantPool$CONSTANT_InvokeDynamic_info, com.sun.tools.classfile.ConstantPool$CPInfo]> {}
          interface _ConstantPool$CONSTANT_Long_info$$static extends ClassLike {
            _new(cr: ClassReader): ConstantPool$CONSTANT_Long_info;
            new(value: long): ConstantPool$CONSTANT_Long_info;
          }
          let ConstantPool$CONSTANT_Long_info: _ConstantPool$CONSTANT_Long_info$$static;
          interface _ConstantPool$CONSTANT_Long_info {
            accept<R, D>(visitor: ConstantPool$Visitor<R,D>, data: D): R;
            byteLength(): int;
            getTag(): int;
            size(): int;
            toString(): string;
            readonly value: long;
          }
          interface ConstantPool$CONSTANT_Long_info extends CombineTypes<[_ConstantPool$CONSTANT_Long_info, com.sun.tools.classfile.ConstantPool$CPInfo]> {}
          interface _ConstantPool$CONSTANT_MethodHandle_info$$static extends ClassLike {
            _new(cp: ConstantPool, cr: ClassReader): ConstantPool$CONSTANT_MethodHandle_info;
            new(cp: ConstantPool, ref_kind: ConstantPool$RefKind, member_index: int): ConstantPool$CONSTANT_MethodHandle_info;
          }
          let ConstantPool$CONSTANT_MethodHandle_info: _ConstantPool$CONSTANT_MethodHandle_info$$static;
          interface _ConstantPool$CONSTANT_MethodHandle_info {
            accept<R, D>(visitor: ConstantPool$Visitor<R,D>, data: D): R;
            byteLength(): int;
            getCPRefInfo(): ConstantPool$CPRefInfo;
            getTag(): int;
            toString(): string;
            readonly reference_index: int;
            readonly reference_kind: ConstantPool$RefKind;
          }
          interface ConstantPool$CONSTANT_MethodHandle_info extends CombineTypes<[_ConstantPool$CONSTANT_MethodHandle_info, com.sun.tools.classfile.ConstantPool$CPInfo]> {}
          interface _ConstantPool$CONSTANT_MethodType_info$$static extends ClassLike {
            _new(cp: ConstantPool, cr: ClassReader): ConstantPool$CONSTANT_MethodType_info;
            new(cp: ConstantPool, signature_index: int): ConstantPool$CONSTANT_MethodType_info;
          }
          let ConstantPool$CONSTANT_MethodType_info: _ConstantPool$CONSTANT_MethodType_info$$static;
          interface _ConstantPool$CONSTANT_MethodType_info {
            accept<R, D>(visitor: ConstantPool$Visitor<R,D>, data: D): R;
            byteLength(): int;
            getTag(): int;
            getType(): string;
            toString(): string;
            readonly descriptor_index: int;
          }
          interface ConstantPool$CONSTANT_MethodType_info extends CombineTypes<[_ConstantPool$CONSTANT_MethodType_info, com.sun.tools.classfile.ConstantPool$CPInfo]> {}
          interface _ConstantPool$CONSTANT_Methodref_info$$static extends ClassLike {
            _new(cp: ConstantPool, cr: ClassReader): ConstantPool$CONSTANT_Methodref_info;
            new(cp: ConstantPool, class_index: int, name_and_type_index: int): ConstantPool$CONSTANT_Methodref_info;
          }
          let ConstantPool$CONSTANT_Methodref_info: _ConstantPool$CONSTANT_Methodref_info$$static;
          interface _ConstantPool$CONSTANT_Methodref_info {
            accept<R, D>(visitor: ConstantPool$Visitor<R,D>, data: D): R;
            toString(): string;
          }
          interface ConstantPool$CONSTANT_Methodref_info extends CombineTypes<[_ConstantPool$CONSTANT_Methodref_info, com.sun.tools.classfile.ConstantPool$CPRefInfo]> {}
          interface _ConstantPool$CONSTANT_Module_info$$static extends ClassLike {
            _new(cp: ConstantPool, cr: ClassReader): ConstantPool$CONSTANT_Module_info;
            new(cp: ConstantPool, name_index: int): ConstantPool$CONSTANT_Module_info;
          }
          let ConstantPool$CONSTANT_Module_info: _ConstantPool$CONSTANT_Module_info$$static;
          interface _ConstantPool$CONSTANT_Module_info {
            accept<R, D>(visitor: ConstantPool$Visitor<R,D>, data: D): R;
            byteLength(): int;
            getName(): string;
            getTag(): int;
            toString(): string;
            readonly name_index: int;
          }
          interface ConstantPool$CONSTANT_Module_info extends CombineTypes<[_ConstantPool$CONSTANT_Module_info, com.sun.tools.classfile.ConstantPool$CPInfo]> {}
          interface _ConstantPool$CONSTANT_NameAndType_info$$static extends ClassLike {
            _new(cp: ConstantPool, cr: ClassReader): ConstantPool$CONSTANT_NameAndType_info;
            new(cp: ConstantPool, name_index: int, type_index: int): ConstantPool$CONSTANT_NameAndType_info;
          }
          let ConstantPool$CONSTANT_NameAndType_info: _ConstantPool$CONSTANT_NameAndType_info$$static;
          interface _ConstantPool$CONSTANT_NameAndType_info {
            accept<R, D>(visitor: ConstantPool$Visitor<R,D>, data: D): R;
            byteLength(): int;
            getName(): string;
            getTag(): int;
            getType(): string;
            toString(): string;
            readonly name_index: int;
            readonly type_index: int;
          }
          interface ConstantPool$CONSTANT_NameAndType_info extends CombineTypes<[_ConstantPool$CONSTANT_NameAndType_info, com.sun.tools.classfile.ConstantPool$CPInfo]> {}
          interface _ConstantPool$CONSTANT_Package_info$$static extends ClassLike {
            _new(cp: ConstantPool, cr: ClassReader): ConstantPool$CONSTANT_Package_info;
            new(cp: ConstantPool, name_index: int): ConstantPool$CONSTANT_Package_info;
          }
          let ConstantPool$CONSTANT_Package_info: _ConstantPool$CONSTANT_Package_info$$static;
          interface _ConstantPool$CONSTANT_Package_info {
            accept<R, D>(visitor: ConstantPool$Visitor<R,D>, data: D): R;
            byteLength(): int;
            getName(): string;
            getTag(): int;
            toString(): string;
            readonly name_index: int;
          }
          interface ConstantPool$CONSTANT_Package_info extends CombineTypes<[_ConstantPool$CONSTANT_Package_info, com.sun.tools.classfile.ConstantPool$CPInfo]> {}
          interface _ConstantPool$CONSTANT_String_info$$static extends ClassLike {
            _new(cp: ConstantPool, cr: ClassReader): ConstantPool$CONSTANT_String_info;
            new(cp: ConstantPool, string_index: int): ConstantPool$CONSTANT_String_info;
          }
          let ConstantPool$CONSTANT_String_info: _ConstantPool$CONSTANT_String_info$$static;
          interface _ConstantPool$CONSTANT_String_info {
            accept<R, D>(visitor: ConstantPool$Visitor<R,D>, data: D): R;
            byteLength(): int;
            getString(): string;
            getTag(): int;
            toString(): string;
            readonly string_index: int;
          }
          interface ConstantPool$CONSTANT_String_info extends CombineTypes<[_ConstantPool$CONSTANT_String_info, com.sun.tools.classfile.ConstantPool$CPInfo]> {}
          interface _ConstantPool$CONSTANT_Utf8_info$$static extends ClassLike {
            _isPrintableAscii(s: string): boolean;
            _new(cr: ClassReader): ConstantPool$CONSTANT_Utf8_info;
            new(value: string): ConstantPool$CONSTANT_Utf8_info;
          }
          let ConstantPool$CONSTANT_Utf8_info: _ConstantPool$CONSTANT_Utf8_info$$static;
          interface _ConstantPool$CONSTANT_Utf8_info {
            accept<R, D>(visitor: ConstantPool$Visitor<R,D>, data: D): R;
            byteLength(): int;
            getTag(): int;
            toString(): string;
            readonly value: string;
          }
          interface ConstantPool$CONSTANT_Utf8_info extends CombineTypes<[_ConstantPool$CONSTANT_Utf8_info, com.sun.tools.classfile.ConstantPool$CPInfo]> {}
          interface _ConstantPool$CPInfo$$static extends ClassLike {
            _new(): ConstantPool$CPInfo;
            _new(cp: ConstantPool): ConstantPool$CPInfo;
          }
          let ConstantPool$CPInfo: _ConstantPool$CPInfo$$static;
          interface _ConstantPool$CPInfo {
            accept<R, D>(a0: ConstantPool$Visitor<R,D>, a1: D): R;
            byteLength(): int;
            getTag(): int;
            size(): int;
            _cp: ConstantPool;
          }
          interface ConstantPool$CPInfo extends CombineTypes<[_ConstantPool$CPInfo, java.lang.Object]> {}
          interface _ConstantPool$CPRefInfo$$static extends ClassLike {
            _new(cp: ConstantPool, cr: ClassReader, tag: int): ConstantPool$CPRefInfo;
            _new(cp: ConstantPool, tag: int, class_index: int, name_and_type_index: int): ConstantPool$CPRefInfo;
          }
          let ConstantPool$CPRefInfo: _ConstantPool$CPRefInfo$$static;
          interface _ConstantPool$CPRefInfo {
            byteLength(): int;
            getClassInfo(): ConstantPool$CONSTANT_Class_info;
            getClassName(): string;
            getNameAndTypeInfo(): ConstantPool$CONSTANT_NameAndType_info;
            getTag(): int;
            readonly class_index: int;
            readonly name_and_type_index: int;
            readonly tag: int;
          }
          interface ConstantPool$CPRefInfo extends CombineTypes<[_ConstantPool$CPRefInfo, com.sun.tools.classfile.ConstantPool$CPInfo]> {}
          interface _ConstantPool$EntryNotFound$$static extends ClassLike {
            _serialVersionUID: long;
            _new(value: any): ConstantPool$EntryNotFound;
          }
          let ConstantPool$EntryNotFound: _ConstantPool$EntryNotFound$$static;
          interface _ConstantPool$EntryNotFound {
            getMessage(): string;
            readonly value: any;
          }
          interface ConstantPool$EntryNotFound extends CombineTypes<[_ConstantPool$EntryNotFound, com.sun.tools.classfile.ConstantPoolException]> {}
          interface _ConstantPool$InvalidEntry$$static extends ClassLike {
            _serialVersionUID: long;
            _new(index: int, tag: int): ConstantPool$InvalidEntry;
          }
          let ConstantPool$InvalidEntry: _ConstantPool$InvalidEntry$$static;
          interface _ConstantPool$InvalidEntry {
            getMessage(): string;
            readonly tag: int;
          }
          interface ConstantPool$InvalidEntry extends CombineTypes<[_ConstantPool$InvalidEntry, com.sun.tools.classfile.ConstantPoolException]> {}
          interface _ConstantPool$InvalidIndex$$static extends ClassLike {
            _serialVersionUID: long;
            _new(index: int): ConstantPool$InvalidIndex;
          }
          let ConstantPool$InvalidIndex: _ConstantPool$InvalidIndex$$static;
          interface _ConstantPool$InvalidIndex {
            getMessage(): string;
          }
          interface ConstantPool$InvalidIndex extends CombineTypes<[_ConstantPool$InvalidIndex, com.sun.tools.classfile.ConstantPoolException]> {}
          interface _ConstantPool$RefKind$$static extends ClassLike {
            _getRefkind(tag: int): ConstantPool$RefKind;
            valueOf(name: string): ConstantPool$RefKind;
            values(): ConstantPool$RefKind[];
            readonly REF_getField: ConstantPool$RefKind;
            readonly REF_getStatic: ConstantPool$RefKind;
            readonly REF_invokeInterface: ConstantPool$RefKind;
            readonly REF_invokeSpecial: ConstantPool$RefKind;
            readonly REF_invokeStatic: ConstantPool$RefKind;
            readonly REF_invokeVirtual: ConstantPool$RefKind;
            readonly REF_newInvokeSpecial: ConstantPool$RefKind;
            readonly REF_putField: ConstantPool$RefKind;
            readonly REF_putStatic: ConstantPool$RefKind;
          }
          let ConstantPool$RefKind: _ConstantPool$RefKind$$static;
          interface _ConstantPool$RefKind {
            readonly tag: int;
          }
          interface ConstantPool$RefKind extends CombineTypes<[_ConstantPool$RefKind]> {}
          interface _ConstantPool$UnexpectedEntry$$static extends ClassLike {
            _serialVersionUID: long;
            _new(index: int, expected_tag: int, found_tag: int): ConstantPool$UnexpectedEntry;
          }
          let ConstantPool$UnexpectedEntry: _ConstantPool$UnexpectedEntry$$static;
          interface _ConstantPool$UnexpectedEntry {
            getMessage(): string;
            readonly expected_tag: int;
            readonly found_tag: int;
          }
          interface ConstantPool$UnexpectedEntry extends CombineTypes<[_ConstantPool$UnexpectedEntry, com.sun.tools.classfile.ConstantPoolException]> {}
          interface _ConstantPool$Visitor$$static<R,P> extends ClassLike {
          }
          let ConstantPool$Visitor: _ConstantPool$Visitor$$static<R,P>;
          interface _ConstantPool$Visitor<R,P> {
            visitClass(a0: ConstantPool$CONSTANT_Class_info, a1: P): R;
            visitDouble(a0: ConstantPool$CONSTANT_Double_info, a1: P): R;
            visitDynamicConstant(a0: ConstantPool$CONSTANT_Dynamic_info, a1: P): R;
            visitFieldref(a0: ConstantPool$CONSTANT_Fieldref_info, a1: P): R;
            visitFloat(a0: ConstantPool$CONSTANT_Float_info, a1: P): R;
            visitInteger(a0: ConstantPool$CONSTANT_Integer_info, a1: P): R;
            visitInterfaceMethodref(a0: ConstantPool$CONSTANT_InterfaceMethodref_info, a1: P): R;
            visitInvokeDynamic(a0: ConstantPool$CONSTANT_InvokeDynamic_info, a1: P): R;
            visitLong(a0: ConstantPool$CONSTANT_Long_info, a1: P): R;
            visitMethodHandle(a0: ConstantPool$CONSTANT_MethodHandle_info, a1: P): R;
            visitMethodType(a0: ConstantPool$CONSTANT_MethodType_info, a1: P): R;
            visitMethodref(a0: ConstantPool$CONSTANT_Methodref_info, a1: P): R;
            visitModule(a0: ConstantPool$CONSTANT_Module_info, a1: P): R;
            visitNameAndType(a0: ConstantPool$CONSTANT_NameAndType_info, a1: P): R;
            visitPackage(a0: ConstantPool$CONSTANT_Package_info, a1: P): R;
            visitString(a0: ConstantPool$CONSTANT_String_info, a1: P): R;
            visitUtf8(a0: ConstantPool$CONSTANT_Utf8_info, a1: P): R;
          }
          interface ConstantPool$Visitor<R,P> extends CombineTypes<[_ConstantPool$Visitor<R,P>, java.lang.Object]> {}
          interface _ConstantPoolException$$static extends ClassLike {
            _serialVersionUID: long;
            _new(index: int): ConstantPoolException;
          }
          let ConstantPoolException: _ConstantPoolException$$static;
          interface _ConstantPoolException {
            readonly index: int;
          }
          interface ConstantPoolException extends CombineTypes<[_ConstantPoolException, java.lang.Exception]> {}
          interface _ConstantValue_attribute$$static extends ClassLike {
            _new(cr: ClassReader, name_index: int, length: int): ConstantValue_attribute;
            new(constant_pool: ConstantPool, constantvalue_index: int): ConstantValue_attribute;
            new(name_index: int, constantvalue_index: int): ConstantValue_attribute;
          }
          let ConstantValue_attribute: _ConstantValue_attribute$$static;
          interface _ConstantValue_attribute {
            accept<R, D>(visitor: Attribute$Visitor<R,D>, data: D): R;
            readonly constantvalue_index: int;
          }
          interface ConstantValue_attribute extends CombineTypes<[_ConstantValue_attribute, com.sun.tools.classfile.Attribute]> {}
          interface _DefaultAttribute$$static extends ClassLike {
            _new(cr: ClassReader, name_index: int, data: byte[]): DefaultAttribute;
            _new(cr: ClassReader, name_index: int, data: byte[], reason: string): DefaultAttribute;
            new(constant_pool: ConstantPool, name_index: int, info: byte[]): DefaultAttribute;
            new(constant_pool: ConstantPool, name_index: int, info: byte[], reason: string): DefaultAttribute;
          }
          let DefaultAttribute: _DefaultAttribute$$static;
          interface _DefaultAttribute {
            accept<R, P>(visitor: Attribute$Visitor<R,P>, p: P): R;
            readonly info: byte[];
            readonly reason: string;
          }
          interface DefaultAttribute extends CombineTypes<[_DefaultAttribute, com.sun.tools.classfile.Attribute]> {}
          interface _Dependencies$$static extends ClassLike {
            getAPIFinder(access: int): Dependency$Finder;
            getClassDependencyFinder(): Dependency$Finder;
            getDefaultFilter(): Dependency$Filter;
            getDefaultFinder(): Dependency$Finder;
            getPackageFilter(packageNames: java.util.Set<string>, matchSubpackages: boolean): Dependency$Filter;
            getRegexFilter(pattern: java.util.regex.Pattern): Dependency$Filter;
            new(): Dependencies;
          }
          let Dependencies: _Dependencies$$static;
          interface _Dependencies {
            findAllDependencies(classFinder: Dependencies$ClassFileReader, rootClassNames: java.util.Set<string>, transitiveClosure: boolean): java.util.Set<Dependency>;
            findAllDependencies(classFinder: Dependencies$ClassFileReader, rootClassNames: java.util.Set<string>, transitiveClosure: boolean, recorder: Dependencies$Recorder): void;
            getFilter(): Dependency$Filter;
            getFinder(): Dependency$Finder;
            setFilter(f: Dependency$Filter): void;
            setFinder(f: Dependency$Finder): void;
            _filter: Dependency$Filter;
            _finder: Dependency$Finder;
          }
          interface Dependencies extends CombineTypes<[_Dependencies, java.lang.Object]> {}
          interface _Dependencies$APIDependencyFinder$$static extends ClassLike {
            _new(access: int): Dependencies$APIDependencyFinder;
          }
          let Dependencies$APIDependencyFinder: _Dependencies$APIDependencyFinder$$static;
          interface _Dependencies$APIDependencyFinder {
            _checkAccess(flags: AccessFlags): boolean;
            findDependencies(classfile: ClassFile): java.lang.Iterable<Dependency>;
            _showAccess: int;
          }
          interface Dependencies$APIDependencyFinder extends CombineTypes<[_Dependencies$APIDependencyFinder, com.sun.tools.classfile.Dependencies$BasicDependencyFinder]> {}
          interface _Dependencies$BasicDependencyFinder$$static extends ClassLike {
            _new(): Dependencies$BasicDependencyFinder;
          }
          let Dependencies$BasicDependencyFinder: _Dependencies$BasicDependencyFinder$$static;
          interface _Dependencies$BasicDependencyFinder {
            _getLocation(className: string): Dependency$Location;
            _locations: java.util.Map<string,Dependency$Location>;
          }
          interface Dependencies$BasicDependencyFinder extends CombineTypes<[_Dependencies$BasicDependencyFinder, java.lang.Object, com.sun.tools.classfile.Dependency$Finder]> {}
          interface _Dependencies$BasicDependencyFinder$Visitor$$static extends ClassLike {
            _new(this$0: Dependencies$BasicDependencyFinder, classFile: ClassFile): Dependencies$BasicDependencyFinder$Visitor;
          }
          let Dependencies$BasicDependencyFinder$Visitor: _Dependencies$BasicDependencyFinder$Visitor$$static;
          interface _Dependencies$BasicDependencyFinder$Visitor {
            _addClass(index: int): void;
            _addClasses(indices: int[]): void;
            _addDependency(name: string): void;
            _findDependencies(t: Type): void;
            _findDependencies(ts: java.util.List<Type>): void;
            _scan(d: Descriptor, attrs: Attributes): void;
            _scan(cpInfo: ConstantPool$CPInfo): void;
            _scan(t: Type): void;
            _scan(attrs: Attributes): void;
            _scan(attr: RuntimeAnnotations_attribute): void;
            _scan(attr: RuntimeParameterAnnotations_attribute): void;
            visitArrayType(type: Type$ArrayType, p: java.lang.Void): java.lang.Void;
            visitArrayType(a0: Type$ArrayType, a1: any): any;
            visitClass(info: ConstantPool$CONSTANT_Class_info, p: java.lang.Void): java.lang.Void;
            visitClass(a0: ConstantPool$CONSTANT_Class_info, a1: any): any;
            visitClassSigType(type: Type$ClassSigType, p: java.lang.Void): java.lang.Void;
            visitClassSigType(a0: Type$ClassSigType, a1: any): any;
            visitClassType(type: Type$ClassType, p: java.lang.Void): java.lang.Void;
            visitClassType(a0: Type$ClassType, a1: any): any;
            visitDouble(info: ConstantPool$CONSTANT_Double_info, p: java.lang.Void): java.lang.Void;
            visitDouble(a0: ConstantPool$CONSTANT_Double_info, a1: any): any;
            visitDynamicConstant(info: ConstantPool$CONSTANT_Dynamic_info, aVoid: java.lang.Void): java.lang.Void;
            visitDynamicConstant(a0: ConstantPool$CONSTANT_Dynamic_info, a1: any): any;
            visitFieldref(info: ConstantPool$CONSTANT_Fieldref_info, p: java.lang.Void): java.lang.Void;
            visitFieldref(a0: ConstantPool$CONSTANT_Fieldref_info, a1: any): any;
            visitFloat(info: ConstantPool$CONSTANT_Float_info, p: java.lang.Void): java.lang.Void;
            visitFloat(a0: ConstantPool$CONSTANT_Float_info, a1: any): any;
            visitInteger(info: ConstantPool$CONSTANT_Integer_info, p: java.lang.Void): java.lang.Void;
            visitInteger(a0: ConstantPool$CONSTANT_Integer_info, a1: any): any;
            visitInterfaceMethodref(info: ConstantPool$CONSTANT_InterfaceMethodref_info, p: java.lang.Void): java.lang.Void;
            visitInterfaceMethodref(a0: ConstantPool$CONSTANT_InterfaceMethodref_info, a1: any): any;
            visitInvokeDynamic(info: ConstantPool$CONSTANT_InvokeDynamic_info, p: java.lang.Void): java.lang.Void;
            visitInvokeDynamic(a0: ConstantPool$CONSTANT_InvokeDynamic_info, a1: any): any;
            visitLong(info: ConstantPool$CONSTANT_Long_info, p: java.lang.Void): java.lang.Void;
            visitLong(a0: ConstantPool$CONSTANT_Long_info, a1: any): any;
            visitMethodHandle(info: ConstantPool$CONSTANT_MethodHandle_info, p: java.lang.Void): java.lang.Void;
            visitMethodHandle(a0: ConstantPool$CONSTANT_MethodHandle_info, a1: any): any;
            visitMethodType(info: ConstantPool$CONSTANT_MethodType_info, p: java.lang.Void): java.lang.Void;
            visitMethodType(type: Type$MethodType, p: java.lang.Void): java.lang.Void;
            visitMethodType(a0: ConstantPool$CONSTANT_MethodType_info, a1: any): any;
            visitMethodType(a0: Type$MethodType, a1: any): any;
            visitMethodref(info: ConstantPool$CONSTANT_Methodref_info, p: java.lang.Void): java.lang.Void;
            visitMethodref(a0: ConstantPool$CONSTANT_Methodref_info, a1: any): any;
            visitModule(info: ConstantPool$CONSTANT_Module_info, p: java.lang.Void): java.lang.Void;
            visitModule(a0: ConstantPool$CONSTANT_Module_info, a1: any): any;
            visitNameAndType(info: ConstantPool$CONSTANT_NameAndType_info, p: java.lang.Void): java.lang.Void;
            visitNameAndType(a0: ConstantPool$CONSTANT_NameAndType_info, a1: any): any;
            visitPackage(info: ConstantPool$CONSTANT_Package_info, p: java.lang.Void): java.lang.Void;
            visitPackage(a0: ConstantPool$CONSTANT_Package_info, a1: any): any;
            _visitRef(info: ConstantPool$CPRefInfo, p: java.lang.Void): java.lang.Void;
            visitSimpleType(type: Type$SimpleType, p: java.lang.Void): java.lang.Void;
            visitSimpleType(a0: Type$SimpleType, a1: any): any;
            visitString(info: ConstantPool$CONSTANT_String_info, p: java.lang.Void): java.lang.Void;
            visitString(a0: ConstantPool$CONSTANT_String_info, a1: any): any;
            visitTypeParamType(type: Type$TypeParamType, p: java.lang.Void): java.lang.Void;
            visitTypeParamType(a0: Type$TypeParamType, a1: any): any;
            visitUtf8(info: ConstantPool$CONSTANT_Utf8_info, p: java.lang.Void): java.lang.Void;
            visitUtf8(a0: ConstantPool$CONSTANT_Utf8_info, a1: any): any;
            visitWildcardType(type: Type$WildcardType, p: java.lang.Void): java.lang.Void;
            visitWildcardType(a0: Type$WildcardType, a1: any): any;
            _constant_pool: ConstantPool;
            _deps: java.util.Set<Dependency>;
            _origin: Dependency$Location;
            _this$0: Dependencies$BasicDependencyFinder;
          }
          interface Dependencies$BasicDependencyFinder$Visitor extends CombineTypes<[_Dependencies$BasicDependencyFinder$Visitor, ConstantPool$Visitor<java.lang.Void,java.lang.Void>, Type$Visitor<java.lang.Void,java.lang.Void>, java.lang.Object]> {}
          interface _Dependencies$ClassDependencyFinder$$static extends ClassLike {
            _new(): Dependencies$ClassDependencyFinder;
          }
          let Dependencies$ClassDependencyFinder: _Dependencies$ClassDependencyFinder$$static;
          interface _Dependencies$ClassDependencyFinder {
            findDependencies(classfile: ClassFile): java.lang.Iterable<Dependency>;
          }
          interface Dependencies$ClassDependencyFinder extends CombineTypes<[_Dependencies$ClassDependencyFinder, com.sun.tools.classfile.Dependencies$BasicDependencyFinder]> {}
          interface _Dependencies$ClassFileError$$static extends ClassLike {
            _serialVersionUID: long;
            new(cause: java.lang.Throwable): Dependencies$ClassFileError;
          }
          let Dependencies$ClassFileError: _Dependencies$ClassFileError$$static;
          interface _Dependencies$ClassFileError {
          }
          interface Dependencies$ClassFileError extends CombineTypes<[_Dependencies$ClassFileError, java.lang.Error]> {}
          interface _Dependencies$ClassFileNotFoundException$$static extends ClassLike {
            _serialVersionUID: long;
            new(className: string): Dependencies$ClassFileNotFoundException;
            new(className: string, cause: java.lang.Throwable): Dependencies$ClassFileNotFoundException;
          }
          let Dependencies$ClassFileNotFoundException: _Dependencies$ClassFileNotFoundException$$static;
          interface _Dependencies$ClassFileNotFoundException {
            readonly className: string;
          }
          interface Dependencies$ClassFileNotFoundException extends CombineTypes<[_Dependencies$ClassFileNotFoundException, java.lang.Exception]> {}
          interface _Dependencies$ClassFileReader$$static extends ClassLike {
          }
          let Dependencies$ClassFileReader: _Dependencies$ClassFileReader$$static;
          interface _Dependencies$ClassFileReader {
            getClassFile(a0: string): ClassFile;
(a0: string): ClassFile;
          }
          interface Dependencies$ClassFileReader extends CombineTypes<[_Dependencies$ClassFileReader, java.lang.Object]> {}
          interface _Dependencies$DefaultFilter$$static extends ClassLike {
            _instance(): Dependencies$DefaultFilter;
            _instance: Dependencies$DefaultFilter;
            _new(): Dependencies$DefaultFilter;
          }
          let Dependencies$DefaultFilter: _Dependencies$DefaultFilter$$static;
          interface _Dependencies$DefaultFilter {
            accepts(dependency: Dependency): boolean;
          }
          interface Dependencies$DefaultFilter extends CombineTypes<[_Dependencies$DefaultFilter, java.lang.Object, com.sun.tools.classfile.Dependency$Filter]> {}
          interface _Dependencies$Recorder$$static extends ClassLike {
          }
          let Dependencies$Recorder: _Dependencies$Recorder$$static;
          interface _Dependencies$Recorder {
            addDependency(a0: Dependency): void;
(a0: Dependency): void;
          }
          interface Dependencies$Recorder extends CombineTypes<[_Dependencies$Recorder, java.lang.Object]> {}
          interface _Dependencies$SimpleDependency$$static extends ClassLike {
            new(origin: Dependency$Location, target: Dependency$Location): Dependencies$SimpleDependency;
          }
          let Dependencies$SimpleDependency: _Dependencies$SimpleDependency$$static;
          interface _Dependencies$SimpleDependency {
            equals(other: any): boolean;
            getOrigin(): Dependency$Location;
            getTarget(): Dependency$Location;
            hashCode(): int;
            toString(): string;
            _origin: Dependency$Location;
            _target: Dependency$Location;
          }
          interface Dependencies$SimpleDependency extends CombineTypes<[_Dependencies$SimpleDependency, java.lang.Object, com.sun.tools.classfile.Dependency]> {}
          interface _Dependencies$SimpleLocation$$static extends ClassLike {
            new(name: string): Dependencies$SimpleLocation;
          }
          let Dependencies$SimpleLocation: _Dependencies$SimpleLocation$$static;
          interface _Dependencies$SimpleLocation {
            equals(other: any): boolean;
            getClassName(): string;
            getName(): string;
            getPackageName(): string;
            hashCode(): int;
            toString(): string;
            _className: string;
            _name: string;
          }
          interface Dependencies$SimpleLocation extends CombineTypes<[_Dependencies$SimpleLocation, com.sun.tools.classfile.Dependency$Location, java.lang.Object]> {}
          interface _Dependencies$TargetPackageFilter$$static extends ClassLike {
            _new(packageNames: java.util.Set<string>, matchSubpackages: boolean): Dependencies$TargetPackageFilter;
          }
          let Dependencies$TargetPackageFilter: _Dependencies$TargetPackageFilter$$static;
          interface _Dependencies$TargetPackageFilter {
            accepts(dependency: Dependency): boolean;
            _matchSubpackages: boolean;
            _packageNames: java.util.Set<string>;
          }
          interface Dependencies$TargetPackageFilter extends CombineTypes<[_Dependencies$TargetPackageFilter, java.lang.Object, com.sun.tools.classfile.Dependency$Filter]> {}
          interface _Dependencies$TargetRegexFilter$$static extends ClassLike {
            _new(pattern: java.util.regex.Pattern): Dependencies$TargetRegexFilter;
          }
          let Dependencies$TargetRegexFilter: _Dependencies$TargetRegexFilter$$static;
          interface _Dependencies$TargetRegexFilter {
            accepts(dependency: Dependency): boolean;
            _pattern: java.util.regex.Pattern;
          }
          interface Dependencies$TargetRegexFilter extends CombineTypes<[_Dependencies$TargetRegexFilter, java.lang.Object, com.sun.tools.classfile.Dependency$Filter]> {}
          interface _Dependency$$static extends ClassLike {
          }
          let Dependency: _Dependency$$static;
          interface _Dependency {
            getOrigin(): Dependency$Location;
            getTarget(): Dependency$Location;
          }
          interface Dependency extends CombineTypes<[_Dependency, java.lang.Object]> {}
          interface _Dependency$Filter$$static extends ClassLike {
          }
          let Dependency$Filter: _Dependency$Filter$$static;
          interface _Dependency$Filter {
            accepts(a0: Dependency): boolean;
(a0: Dependency): boolean;
          }
          interface Dependency$Filter extends CombineTypes<[_Dependency$Filter, java.lang.Object]> {}
          interface _Dependency$Finder$$static extends ClassLike {
          }
          let Dependency$Finder: _Dependency$Finder$$static;
          interface _Dependency$Finder {
            findDependencies(a0: ClassFile): java.lang.Iterable<Dependency>;
(a0: ClassFile): java.lang.Iterable<Dependency>;
          }
          interface Dependency$Finder extends CombineTypes<[_Dependency$Finder, java.lang.Object]> {}
          interface _Dependency$Location$$static extends ClassLike {
          }
          let Dependency$Location: _Dependency$Location$$static;
          interface _Dependency$Location {
            getClassName(): string;
            getName(): string;
            getPackageName(): string;
          }
          interface Dependency$Location extends CombineTypes<[_Dependency$Location, java.lang.Object]> {}
          interface _Deprecated_attribute$$static extends ClassLike {
            _new(cr: ClassReader, name_index: int, length: int): Deprecated_attribute;
            new(constant_pool: ConstantPool): Deprecated_attribute;
            new(name_index: int): Deprecated_attribute;
          }
          let Deprecated_attribute: _Deprecated_attribute$$static;
          interface _Deprecated_attribute {
            accept<R, D>(visitor: Attribute$Visitor<R,D>, data: D): R;
          }
          interface Deprecated_attribute extends CombineTypes<[_Deprecated_attribute, com.sun.tools.classfile.Attribute]> {}
          interface _Descriptor$$static extends ClassLike {
            new(cr: ClassReader): Descriptor;
            new(index: int): Descriptor;
          }
          let Descriptor: _Descriptor$$static;
          interface _Descriptor {
            getFieldType(constant_pool: ConstantPool): string;
            getParameterCount(constant_pool: ConstantPool): int;
            getParameterTypes(constant_pool: ConstantPool): string;
            getReturnType(constant_pool: ConstantPool): string;
            getValue(constant_pool: ConstantPool): string;
            _parse(desc: string, start: int, end: int): string;
            _count: int;
            readonly index: int;
          }
          interface Descriptor extends CombineTypes<[_Descriptor, java.lang.Object]> {}
          interface _Descriptor$InvalidDescriptor$$static extends ClassLike {
            _serialVersionUID: long;
            _new(desc: string): Descriptor$InvalidDescriptor;
            _new(desc: string, index: int): Descriptor$InvalidDescriptor;
          }
          let Descriptor$InvalidDescriptor: _Descriptor$InvalidDescriptor$$static;
          interface _Descriptor$InvalidDescriptor {
            getMessage(): string;
            readonly desc: string;
            readonly index: int;
          }
          interface Descriptor$InvalidDescriptor extends CombineTypes<[_Descriptor$InvalidDescriptor, com.sun.tools.classfile.DescriptorException]> {}
          interface _DescriptorException$$static extends ClassLike {
            _serialVersionUID: long;
            new(): DescriptorException;
          }
          let DescriptorException: _DescriptorException$$static;
          interface _DescriptorException {
          }
          interface DescriptorException extends CombineTypes<[_DescriptorException, java.lang.Exception]> {}
          interface _EnclosingMethod_attribute$$static extends ClassLike {
            _new(cr: ClassReader, name_index: int, length: int): EnclosingMethod_attribute;
            new(constant_pool: ConstantPool, class_index: int, method_index: int): EnclosingMethod_attribute;
            new(name_index: int, class_index: int, method_index: int): EnclosingMethod_attribute;
          }
          let EnclosingMethod_attribute: _EnclosingMethod_attribute$$static;
          interface _EnclosingMethod_attribute {
            accept<R, D>(visitor: Attribute$Visitor<R,D>, data: D): R;
            getClassName(constant_pool: ConstantPool): string;
            getMethodName(constant_pool: ConstantPool): string;
            readonly class_index: int;
            readonly method_index: int;
          }
          interface EnclosingMethod_attribute extends CombineTypes<[_EnclosingMethod_attribute, com.sun.tools.classfile.Attribute]> {}
          interface _Exceptions_attribute$$static extends ClassLike {
            _new(cr: ClassReader, name_index: int, length: int): Exceptions_attribute;
            new(constant_pool: ConstantPool, exception_index_table: int[]): Exceptions_attribute;
            new(name_index: int, exception_index_table: int[]): Exceptions_attribute;
          }
          let Exceptions_attribute: _Exceptions_attribute$$static;
          interface _Exceptions_attribute {
            accept<R, D>(visitor: Attribute$Visitor<R,D>, data: D): R;
            getException(index: int, constant_pool: ConstantPool): string;
            readonly exception_index_table: int[];
            readonly number_of_exceptions: int;
          }
          interface Exceptions_attribute extends CombineTypes<[_Exceptions_attribute, com.sun.tools.classfile.Attribute]> {}
          interface _FatalError$$static extends ClassLike {
            _serialVersionUID: long;
            _new(message: string): FatalError;
          }
          let FatalError: _FatalError$$static;
          interface _FatalError {
          }
          interface FatalError extends CombineTypes<[_FatalError, java.lang.Error]> {}
          interface _Field$$static extends ClassLike {
            _new(cr: ClassReader): Field;
            new(access_flags: AccessFlags, name_index: int, descriptor: Descriptor, attributes: Attributes): Field;
          }
          let Field: _Field$$static;
          interface _Field {
            byteLength(): int;
            getName(constant_pool: ConstantPool): string;
            readonly access_flags: AccessFlags;
            readonly attributes: Attributes;
            readonly descriptor: Descriptor;
            readonly name_index: int;
          }
          interface Field extends CombineTypes<[_Field, java.lang.Object]> {}
          interface _InnerClasses_attribute$$static extends ClassLike {
            _new(cr: ClassReader, name_index: int, length: int): InnerClasses_attribute;
            new(constant_pool: ConstantPool, classes: InnerClasses_attribute$Info[]): InnerClasses_attribute;
            new(name_index: int, classes: InnerClasses_attribute$Info[]): InnerClasses_attribute;
          }
          let InnerClasses_attribute: _InnerClasses_attribute$$static;
          interface _InnerClasses_attribute {
            accept<R, D>(visitor: Attribute$Visitor<R,D>, data: D): R;
            readonly classes: InnerClasses_attribute$Info[];
            readonly number_of_classes: int;
          }
          interface InnerClasses_attribute extends CombineTypes<[_InnerClasses_attribute, com.sun.tools.classfile.Attribute]> {}
          interface _InnerClasses_attribute$Info$$static extends ClassLike {
            length(): int;
            _new(cr: ClassReader): InnerClasses_attribute$Info;
            new(inner_class_info_index: int, outer_class_info_index: int, inner_name_index: int, inner_class_access_flags: AccessFlags): InnerClasses_attribute$Info;
          }
          let InnerClasses_attribute$Info: _InnerClasses_attribute$Info$$static;
          interface _InnerClasses_attribute$Info {
            getInnerClassInfo(constant_pool: ConstantPool): ConstantPool$CONSTANT_Class_info;
            getInnerName(constant_pool: ConstantPool): string;
            getOuterClassInfo(constant_pool: ConstantPool): ConstantPool$CONSTANT_Class_info;
            readonly inner_class_access_flags: AccessFlags;
            readonly inner_class_info_index: int;
            readonly inner_name_index: int;
            readonly outer_class_info_index: int;
          }
          interface InnerClasses_attribute$Info extends CombineTypes<[_InnerClasses_attribute$Info, java.lang.Object]> {}
          interface _Instruction$$static extends ClassLike {
            _align(n: int): int;
            new(bytes: byte[], pc: int): Instruction;
          }
          let Instruction: _Instruction$$static;
          interface _Instruction {
            accept<R, P>(visitor: Instruction$KindVisitor<R,P>, p: P): R;
            getByte(offset: int): int;
            getInt(offset: int): int;
            getKind(): Instruction$Kind;
            getMnemonic(): string;
            getOpcode(): Opcode;
            getPC(): int;
            getShort(offset: int): int;
            getUnsignedByte(offset: int): int;
            getUnsignedShort(offset: int): int;
            length(): int;
            _bytes: byte[];
            _pc: int;
          }
          interface Instruction extends CombineTypes<[_Instruction, java.lang.Object]> {}
          interface _Instruction$Kind$$static extends ClassLike {
            valueOf(name: string): Instruction$Kind;
            values(): Instruction$Kind[];
            readonly ATYPE: Instruction$Kind;
            readonly BRANCH: Instruction$Kind;
            readonly BRANCH_W: Instruction$Kind;
            readonly BYTE: Instruction$Kind;
            readonly CPREF: Instruction$Kind;
            readonly CPREF_W: Instruction$Kind;
            readonly CPREF_W_UBYTE: Instruction$Kind;
            readonly CPREF_W_UBYTE_ZERO: Instruction$Kind;
            readonly DYNAMIC: Instruction$Kind;
            readonly LOCAL: Instruction$Kind;
            readonly LOCAL_BYTE: Instruction$Kind;
            readonly NO_OPERANDS: Instruction$Kind;
            readonly SHORT: Instruction$Kind;
            readonly UNKNOWN: Instruction$Kind;
            readonly WIDE_CPREF_W: Instruction$Kind;
            readonly WIDE_CPREF_W_SHORT: Instruction$Kind;
            readonly WIDE_LOCAL: Instruction$Kind;
            readonly WIDE_LOCAL_SHORT: Instruction$Kind;
            readonly WIDE_NO_OPERANDS: Instruction$Kind;
          }
          let Instruction$Kind: _Instruction$Kind$$static;
          interface _Instruction$Kind {
            readonly length: int;
          }
          interface Instruction$Kind extends CombineTypes<[_Instruction$Kind]> {}
          interface _Instruction$KindVisitor$$static<R,P> extends ClassLike {
          }
          let Instruction$KindVisitor: _Instruction$KindVisitor$$static<R,P>;
          interface _Instruction$KindVisitor<R,P> {
            visitArrayType(a0: Instruction, a1: Instruction$TypeKind, a2: P): R;
            visitBranch(a0: Instruction, a1: int, a2: P): R;
            visitConstantPoolRef(a0: Instruction, a1: int, a2: P): R;
            visitConstantPoolRefAndValue(a0: Instruction, a1: int, a2: int, a3: P): R;
            visitLocal(a0: Instruction, a1: int, a2: P): R;
            visitLocalAndValue(a0: Instruction, a1: int, a2: int, a3: P): R;
            visitLookupSwitch(a0: Instruction, a1: int, a2: int, a3: int[], a4: int[], a5: P): R;
            visitNoOperands(a0: Instruction, a1: P): R;
            visitTableSwitch(a0: Instruction, a1: int, a2: int, a3: int, a4: int[], a5: P): R;
            visitUnknown(a0: Instruction, a1: P): R;
            visitValue(a0: Instruction, a1: int, a2: P): R;
          }
          interface Instruction$KindVisitor<R,P> extends CombineTypes<[_Instruction$KindVisitor<R,P>, java.lang.Object]> {}
          interface _Instruction$TypeKind$$static extends ClassLike {
            get(value: int): Instruction$TypeKind;
            valueOf(name: string): Instruction$TypeKind;
            values(): Instruction$TypeKind[];
            readonly T_BOOLEAN: Instruction$TypeKind;
            readonly T_BYTE: Instruction$TypeKind;
            readonly T_CHAR: Instruction$TypeKind;
            readonly T_DOUBLE: Instruction$TypeKind;
            readonly T_FLOAT: Instruction$TypeKind;
            readonly T_INT: Instruction$TypeKind;
            readonly T_LONG: Instruction$TypeKind;
            readonly T_SHORT: Instruction$TypeKind;
          }
          let Instruction$TypeKind: _Instruction$TypeKind$$static;
          interface _Instruction$TypeKind {
            readonly name: string;
            readonly value: int;
          }
          interface Instruction$TypeKind extends CombineTypes<[_Instruction$TypeKind]> {}
          interface _LineNumberTable_attribute$$static extends ClassLike {
            _new(cr: ClassReader, name_index: int, length: int): LineNumberTable_attribute;
            new(constant_pool: ConstantPool, line_number_table: LineNumberTable_attribute$Entry[]): LineNumberTable_attribute;
            new(name_index: int, line_number_table: LineNumberTable_attribute$Entry[]): LineNumberTable_attribute;
          }
          let LineNumberTable_attribute: _LineNumberTable_attribute$$static;
          interface _LineNumberTable_attribute {
            accept<R, D>(visitor: Attribute$Visitor<R,D>, data: D): R;
            readonly line_number_table: LineNumberTable_attribute$Entry[];
            readonly line_number_table_length: int;
          }
          interface LineNumberTable_attribute extends CombineTypes<[_LineNumberTable_attribute, com.sun.tools.classfile.Attribute]> {}
          interface _LineNumberTable_attribute$Entry$$static extends ClassLike {
            length(): int;
            _new(cr: ClassReader): LineNumberTable_attribute$Entry;
          }
          let LineNumberTable_attribute$Entry: _LineNumberTable_attribute$Entry$$static;
          interface _LineNumberTable_attribute$Entry {
            readonly line_number: int;
            readonly start_pc: int;
          }
          interface LineNumberTable_attribute$Entry extends CombineTypes<[_LineNumberTable_attribute$Entry, java.lang.Object]> {}
          interface _LocalVariableTable_attribute$$static extends ClassLike {
            _new(cr: ClassReader, name_index: int, length: int): LocalVariableTable_attribute;
            new(constant_pool: ConstantPool, local_variable_table: LocalVariableTable_attribute$Entry[]): LocalVariableTable_attribute;
            new(name_index: int, local_variable_table: LocalVariableTable_attribute$Entry[]): LocalVariableTable_attribute;
          }
          let LocalVariableTable_attribute: _LocalVariableTable_attribute$$static;
          interface _LocalVariableTable_attribute {
            accept<R, D>(visitor: Attribute$Visitor<R,D>, data: D): R;
            readonly local_variable_table: LocalVariableTable_attribute$Entry[];
            readonly local_variable_table_length: int;
          }
          interface LocalVariableTable_attribute extends CombineTypes<[_LocalVariableTable_attribute, com.sun.tools.classfile.Attribute]> {}
          interface _LocalVariableTable_attribute$Entry$$static extends ClassLike {
            length(): int;
            _new(cr: ClassReader): LocalVariableTable_attribute$Entry;
          }
          let LocalVariableTable_attribute$Entry: _LocalVariableTable_attribute$Entry$$static;
          interface _LocalVariableTable_attribute$Entry {
            readonly descriptor_index: int;
            readonly index: int;
            readonly length: int;
            readonly name_index: int;
            readonly start_pc: int;
          }
          interface LocalVariableTable_attribute$Entry extends CombineTypes<[_LocalVariableTable_attribute$Entry, java.lang.Object]> {}
          interface _LocalVariableTypeTable_attribute$$static extends ClassLike {
            _new(cr: ClassReader, name_index: int, length: int): LocalVariableTypeTable_attribute;
            new(constant_pool: ConstantPool, local_variable_table: LocalVariableTypeTable_attribute$Entry[]): LocalVariableTypeTable_attribute;
            new(name_index: int, local_variable_table: LocalVariableTypeTable_attribute$Entry[]): LocalVariableTypeTable_attribute;
          }
          let LocalVariableTypeTable_attribute: _LocalVariableTypeTable_attribute$$static;
          interface _LocalVariableTypeTable_attribute {
            accept<R, D>(visitor: Attribute$Visitor<R,D>, data: D): R;
            readonly local_variable_table: LocalVariableTypeTable_attribute$Entry[];
            readonly local_variable_table_length: int;
          }
          interface LocalVariableTypeTable_attribute extends CombineTypes<[_LocalVariableTypeTable_attribute, com.sun.tools.classfile.Attribute]> {}
          interface _LocalVariableTypeTable_attribute$Entry$$static extends ClassLike {
            length(): int;
            _new(cr: ClassReader): LocalVariableTypeTable_attribute$Entry;
          }
          let LocalVariableTypeTable_attribute$Entry: _LocalVariableTypeTable_attribute$Entry$$static;
          interface _LocalVariableTypeTable_attribute$Entry {
            readonly index: int;
            readonly length: int;
            readonly name_index: int;
            readonly signature_index: int;
            readonly start_pc: int;
          }
          interface LocalVariableTypeTable_attribute$Entry extends CombineTypes<[_LocalVariableTypeTable_attribute$Entry, java.lang.Object]> {}
          interface _Method$$static extends ClassLike {
            _new(cr: ClassReader): Method;
            new(access_flags: AccessFlags, name_index: int, descriptor: Descriptor, attributes: Attributes): Method;
          }
          let Method: _Method$$static;
          interface _Method {
            byteLength(): int;
            getName(constant_pool: ConstantPool): string;
            readonly access_flags: AccessFlags;
            readonly attributes: Attributes;
            readonly descriptor: Descriptor;
            readonly name_index: int;
          }
          interface Method extends CombineTypes<[_Method, java.lang.Object]> {}
          interface _MethodParameters_attribute$$static extends ClassLike {
            _new(cr: ClassReader, name_index: int, length: int): MethodParameters_attribute;
            new(constant_pool: ConstantPool, method_parameter_table: MethodParameters_attribute$Entry[]): MethodParameters_attribute;
            new(name_index: int, method_parameter_table: MethodParameters_attribute$Entry[]): MethodParameters_attribute;
          }
          let MethodParameters_attribute: _MethodParameters_attribute$$static;
          interface _MethodParameters_attribute {
            accept<R, D>(visitor: Attribute$Visitor<R,D>, data: D): R;
            readonly method_parameter_table: MethodParameters_attribute$Entry[];
            readonly method_parameter_table_length: int;
          }
          interface MethodParameters_attribute extends CombineTypes<[_MethodParameters_attribute, com.sun.tools.classfile.Attribute]> {}
          interface _MethodParameters_attribute$Entry$$static extends ClassLike {
            length(): int;
            _new(cr: ClassReader): MethodParameters_attribute$Entry;
            new(name_index: int, flags: int): MethodParameters_attribute$Entry;
          }
          let MethodParameters_attribute$Entry: _MethodParameters_attribute$Entry$$static;
          interface _MethodParameters_attribute$Entry {
            readonly flags: int;
            readonly name_index: int;
          }
          interface MethodParameters_attribute$Entry extends CombineTypes<[_MethodParameters_attribute$Entry, java.lang.Object]> {}
          interface _ModuleHashes_attribute$$static extends ClassLike {
            _length(hashes_table: ModuleHashes_attribute$Entry[]): int;
            _new(cr: ClassReader, name_index: int, length: int): ModuleHashes_attribute;
            new(constant_pool: ConstantPool, algorithm_index: int, hashes_table: ModuleHashes_attribute$Entry[]): ModuleHashes_attribute;
            new(name_index: int, algorithm_index: int, hashes_table: ModuleHashes_attribute$Entry[]): ModuleHashes_attribute;
          }
          let ModuleHashes_attribute: _ModuleHashes_attribute$$static;
          interface _ModuleHashes_attribute {
            accept<R, D>(visitor: Attribute$Visitor<R,D>, data: D): R;
            readonly algorithm_index: int;
            readonly hashes_table: ModuleHashes_attribute$Entry[];
            readonly hashes_table_length: int;
          }
          interface ModuleHashes_attribute extends CombineTypes<[_ModuleHashes_attribute, com.sun.tools.classfile.Attribute]> {}
          interface _ModuleHashes_attribute$Entry$$static extends ClassLike {
            _new(cr: ClassReader): ModuleHashes_attribute$Entry;
          }
          let ModuleHashes_attribute$Entry: _ModuleHashes_attribute$Entry$$static;
          interface _ModuleHashes_attribute$Entry {
            length(): int;
            readonly hash: byte[];
            readonly module_name_index: int;
          }
          interface ModuleHashes_attribute$Entry extends CombineTypes<[_ModuleHashes_attribute$Entry, java.lang.Object]> {}
          interface _ModuleMainClass_attribute$$static extends ClassLike {
            _new(cr: ClassReader, name_index: int, length: int): ModuleMainClass_attribute;
            new(constant_pool: ConstantPool, mainClass_index: int): ModuleMainClass_attribute;
            new(name_index: int, mainClass_index: int): ModuleMainClass_attribute;
          }
          let ModuleMainClass_attribute: _ModuleMainClass_attribute$$static;
          interface _ModuleMainClass_attribute {
            accept<R, D>(visitor: Attribute$Visitor<R,D>, data: D): R;
            getMainClassName(constant_pool: ConstantPool): string;
            readonly main_class_index: int;
          }
          interface ModuleMainClass_attribute extends CombineTypes<[_ModuleMainClass_attribute, com.sun.tools.classfile.Attribute]> {}
          interface _ModulePackages_attribute$$static extends ClassLike {
            _new(cr: ClassReader, name_index: int, length: int): ModulePackages_attribute;
            new(constant_pool: ConstantPool, packages_index: int[]): ModulePackages_attribute;
            new(name_index: int, packages_index: int[]): ModulePackages_attribute;
          }
          let ModulePackages_attribute: _ModulePackages_attribute$$static;
          interface _ModulePackages_attribute {
            accept<R, D>(visitor: Attribute$Visitor<R,D>, data: D): R;
            getPackage(index: int, constant_pool: ConstantPool): string;
            readonly packages_count: int;
            readonly packages_index: int[];
          }
          interface ModulePackages_attribute extends CombineTypes<[_ModulePackages_attribute, com.sun.tools.classfile.Attribute]> {}
          interface _ModuleResolution_attribute$$static extends ClassLike {
            readonly DO_NOT_RESOLVE_BY_DEFAULT: int;
            readonly WARN_DEPRECATED: int;
            readonly WARN_DEPRECATED_FOR_REMOVAL: int;
            readonly WARN_INCUBATING: int;
            _new(cr: ClassReader, name_index: int, length: int): ModuleResolution_attribute;
            new(constant_pool: ConstantPool, resolution_flags: int): ModuleResolution_attribute;
            new(name_index: int, resolution_flags: int): ModuleResolution_attribute;
          }
          let ModuleResolution_attribute: _ModuleResolution_attribute$$static;
          interface _ModuleResolution_attribute {
            accept<R, D>(visitor: Attribute$Visitor<R,D>, data: D): R;
            readonly resolution_flags: int;
          }
          interface ModuleResolution_attribute extends CombineTypes<[_ModuleResolution_attribute, com.sun.tools.classfile.Attribute]> {}
          interface _ModuleTarget_attribute$$static extends ClassLike {
            _new(cr: ClassReader, name_index: int, length: int): ModuleTarget_attribute;
            new(name_index: int, target_platform_index: int): ModuleTarget_attribute;
          }
          let ModuleTarget_attribute: _ModuleTarget_attribute$$static;
          interface _ModuleTarget_attribute {
            accept<R, D>(visitor: Attribute$Visitor<R,D>, data: D): R;
            readonly target_platform_index: int;
          }
          interface ModuleTarget_attribute extends CombineTypes<[_ModuleTarget_attribute, com.sun.tools.classfile.Attribute]> {}
          interface _Module_attribute$$static extends ClassLike {
            readonly ACC_MANDATED: int;
            readonly ACC_OPEN: int;
            readonly ACC_STATIC_PHASE: int;
            readonly ACC_SYNTHETIC: int;
            readonly ACC_TRANSITIVE: int;
            _new(cr: ClassReader, name_index: int, length: int): Module_attribute;
            new(name_index: int, module_name: int, module_flags: int, module_version_index: int, requires: Module_attribute$RequiresEntry[], exports: Module_attribute$ExportsEntry[], opens: Module_attribute$OpensEntry[], uses: int[], provides: Module_attribute$ProvidesEntry[]): Module_attribute;
          }
          let Module_attribute: _Module_attribute$$static;
          interface _Module_attribute {
            accept<R, D>(visitor: Attribute$Visitor<R,D>, data: D): R;
            getUses(index: int, constant_pool: ConstantPool): string;
            readonly exports: Module_attribute$ExportsEntry[];
            readonly exports_count: int;
            readonly module_flags: int;
            readonly module_name: int;
            readonly module_version_index: int;
            readonly opens: Module_attribute$OpensEntry[];
            readonly opens_count: int;
            readonly provides: Module_attribute$ProvidesEntry[];
            readonly provides_count: int;
            readonly requires: Module_attribute$RequiresEntry[];
            readonly requires_count: int;
            readonly uses_count: int;
            readonly uses_index: int[];
          }
          interface Module_attribute extends CombineTypes<[_Module_attribute, com.sun.tools.classfile.Attribute]> {}
          interface _Module_attribute$ExportsEntry$$static extends ClassLike {
            _new(cr: ClassReader): Module_attribute$ExportsEntry;
            new(index: int, flags: int, to: int[]): Module_attribute$ExportsEntry;
          }
          let Module_attribute$ExportsEntry: _Module_attribute$ExportsEntry$$static;
          interface _Module_attribute$ExportsEntry {
            length(): int;
            readonly exports_flags: int;
            readonly exports_index: int;
            readonly exports_to_count: int;
            readonly exports_to_index: int[];
          }
          interface Module_attribute$ExportsEntry extends CombineTypes<[_Module_attribute$ExportsEntry, java.lang.Object]> {}
          interface _Module_attribute$OpensEntry$$static extends ClassLike {
            _new(cr: ClassReader): Module_attribute$OpensEntry;
            new(index: int, flags: int, to: int[]): Module_attribute$OpensEntry;
          }
          let Module_attribute$OpensEntry: _Module_attribute$OpensEntry$$static;
          interface _Module_attribute$OpensEntry {
            length(): int;
            readonly opens_flags: int;
            readonly opens_index: int;
            readonly opens_to_count: int;
            readonly opens_to_index: int[];
          }
          interface Module_attribute$OpensEntry extends CombineTypes<[_Module_attribute$OpensEntry, java.lang.Object]> {}
          interface _Module_attribute$ProvidesEntry$$static extends ClassLike {
            readonly length: int;
            _new(cr: ClassReader): Module_attribute$ProvidesEntry;
            new(provides: int, _with: int[]): Module_attribute$ProvidesEntry;
          }
          let Module_attribute$ProvidesEntry: _Module_attribute$ProvidesEntry$$static;
          interface _Module_attribute$ProvidesEntry {
            readonly provides_index: int;
            readonly with_count: int;
            readonly with_index: int[];
          }
          interface Module_attribute$ProvidesEntry extends CombineTypes<[_Module_attribute$ProvidesEntry, java.lang.Object]> {}
          interface _Module_attribute$RequiresEntry$$static extends ClassLike {
            readonly length: int;
            _new(cr: ClassReader): Module_attribute$RequiresEntry;
            new(index: int, flags: int, version_index: int): Module_attribute$RequiresEntry;
          }
          let Module_attribute$RequiresEntry: _Module_attribute$RequiresEntry$$static;
          interface _Module_attribute$RequiresEntry {
            getRequires(constant_pool: ConstantPool): string;
            readonly requires_flags: int;
            readonly requires_index: int;
            readonly requires_version_index: int;
          }
          interface Module_attribute$RequiresEntry extends CombineTypes<[_Module_attribute$RequiresEntry, java.lang.Object]> {}
          interface _NestHost_attribute$$static extends ClassLike {
            _new(cr: ClassReader, name_index: int, length: int): NestHost_attribute;
            new(constant_pool: ConstantPool, signature_index: int): NestHost_attribute;
            new(name_index: int, top_index: int): NestHost_attribute;
          }
          let NestHost_attribute: _NestHost_attribute$$static;
          interface _NestHost_attribute {
            accept<R, D>(visitor: Attribute$Visitor<R,D>, data: D): R;
            getNestTop(constant_pool: ConstantPool): ConstantPool$CONSTANT_Class_info;
            readonly top_index: int;
          }
          interface NestHost_attribute extends CombineTypes<[_NestHost_attribute, com.sun.tools.classfile.Attribute]> {}
          interface _NestMembers_attribute$$static extends ClassLike {
            _new(cr: ClassReader, name_index: int, length: int): NestMembers_attribute;
            new(name_index: int, members_indexes: int[]): NestMembers_attribute;
          }
          let NestMembers_attribute: _NestMembers_attribute$$static;
          interface _NestMembers_attribute {
            accept<R, D>(visitor: Attribute$Visitor<R,D>, data: D): R;
            getChildren(constant_pool: ConstantPool): ConstantPool$CONSTANT_Class_info[];
            readonly members_indexes: int[];
          }
          interface NestMembers_attribute extends CombineTypes<[_NestMembers_attribute, com.sun.tools.classfile.Attribute]> {}
          interface _Opcode$$static extends ClassLike {
            get(opcode: int): Opcode;
            get(opcodePrefix: int, opcode: int): Opcode;
            _getOpcodeBlock(opcodePrefix: int): Opcode[];
            valueOf(name: string): Opcode;
            values(): Opcode[];
            readonly AALOAD: Opcode;
            readonly AASTORE: Opcode;
            readonly ACONST_NULL: Opcode;
            readonly ALOAD: Opcode;
            readonly ALOAD_0: Opcode;
            readonly ALOAD_1: Opcode;
            readonly ALOAD_2: Opcode;
            readonly ALOAD_3: Opcode;
            readonly ALOAD_W: Opcode;
            readonly ANEWARRAY: Opcode;
            readonly ARETURN: Opcode;
            readonly ARRAYLENGTH: Opcode;
            readonly ASTORE: Opcode;
            readonly ASTORE_0: Opcode;
            readonly ASTORE_1: Opcode;
            readonly ASTORE_2: Opcode;
            readonly ASTORE_3: Opcode;
            readonly ASTORE_W: Opcode;
            readonly ATHROW: Opcode;
            readonly BALOAD: Opcode;
            readonly BASTORE: Opcode;
            readonly BIPUSH: Opcode;
            readonly CACHE_FLUSH: Opcode;
            readonly CALOAD: Opcode;
            readonly CASTORE: Opcode;
            readonly CHECKCAST: Opcode;
            readonly D2F: Opcode;
            readonly D2I: Opcode;
            readonly D2L: Opcode;
            readonly DADD: Opcode;
            readonly DALOAD: Opcode;
            readonly DASTORE: Opcode;
            readonly DCMPG: Opcode;
            readonly DCMPL: Opcode;
            readonly DCONST_0: Opcode;
            readonly DCONST_1: Opcode;
            readonly DDIV: Opcode;
            readonly DLOAD: Opcode;
            readonly DLOAD_0: Opcode;
            readonly DLOAD_1: Opcode;
            readonly DLOAD_2: Opcode;
            readonly DLOAD_3: Opcode;
            readonly DLOAD_W: Opcode;
            readonly DMUL: Opcode;
            readonly DNEG: Opcode;
            readonly DREM: Opcode;
            readonly DRETURN: Opcode;
            readonly DSTORE: Opcode;
            readonly DSTORE_0: Opcode;
            readonly DSTORE_1: Opcode;
            readonly DSTORE_2: Opcode;
            readonly DSTORE_3: Opcode;
            readonly DSTORE_W: Opcode;
            readonly DSUB: Opcode;
            readonly DUP: Opcode;
            readonly DUP2: Opcode;
            readonly DUP2_X1: Opcode;
            readonly DUP2_X2: Opcode;
            readonly DUP_X1: Opcode;
            readonly DUP_X2: Opcode;
            readonly ENTER_SYNC_METHOD: Opcode;
            readonly F2D: Opcode;
            readonly F2I: Opcode;
            readonly F2L: Opcode;
            readonly FADD: Opcode;
            readonly FALOAD: Opcode;
            readonly FASTORE: Opcode;
            readonly FCMPG: Opcode;
            readonly FCMPL: Opcode;
            readonly FCONST_0: Opcode;
            readonly FCONST_1: Opcode;
            readonly FCONST_2: Opcode;
            readonly FDIV: Opcode;
            readonly FLOAD: Opcode;
            readonly FLOAD_0: Opcode;
            readonly FLOAD_1: Opcode;
            readonly FLOAD_2: Opcode;
            readonly FLOAD_3: Opcode;
            readonly FLOAD_W: Opcode;
            readonly FMUL: Opcode;
            readonly FNEG: Opcode;
            readonly FREM: Opcode;
            readonly FRETURN: Opcode;
            readonly FSTORE: Opcode;
            readonly FSTORE_0: Opcode;
            readonly FSTORE_1: Opcode;
            readonly FSTORE_2: Opcode;
            readonly FSTORE_3: Opcode;
            readonly FSTORE_W: Opcode;
            readonly FSUB: Opcode;
            readonly GETFIELD: Opcode;
            readonly GETSTATIC: Opcode;
            readonly GOTO: Opcode;
            readonly GOTO_W: Opcode;
            readonly I2B: Opcode;
            readonly I2C: Opcode;
            readonly I2D: Opcode;
            readonly I2F: Opcode;
            readonly I2L: Opcode;
            readonly I2S: Opcode;
            readonly IADD: Opcode;
            readonly IALOAD: Opcode;
            readonly IAND: Opcode;
            readonly IASTORE: Opcode;
            readonly ICONST_0: Opcode;
            readonly ICONST_1: Opcode;
            readonly ICONST_2: Opcode;
            readonly ICONST_3: Opcode;
            readonly ICONST_4: Opcode;
            readonly ICONST_5: Opcode;
            readonly ICONST_M1: Opcode;
            readonly IDIV: Opcode;
            readonly IFEQ: Opcode;
            readonly IFGE: Opcode;
            readonly IFGT: Opcode;
            readonly IFLE: Opcode;
            readonly IFLT: Opcode;
            readonly IFNE: Opcode;
            readonly IFNONNULL: Opcode;
            readonly IFNULL: Opcode;
            readonly IF_ACMPEQ: Opcode;
            readonly IF_ACMPNE: Opcode;
            readonly IF_ICMPEQ: Opcode;
            readonly IF_ICMPGE: Opcode;
            readonly IF_ICMPGT: Opcode;
            readonly IF_ICMPLE: Opcode;
            readonly IF_ICMPLT: Opcode;
            readonly IF_ICMPNE: Opcode;
            readonly IINC: Opcode;
            readonly IINC_W: Opcode;
            readonly ILOAD: Opcode;
            readonly ILOAD_0: Opcode;
            readonly ILOAD_1: Opcode;
            readonly ILOAD_2: Opcode;
            readonly ILOAD_3: Opcode;
            readonly ILOAD_W: Opcode;
            readonly IMUL: Opcode;
            readonly INEG: Opcode;
            readonly INSTANCEOF: Opcode;
            readonly INVOKEDYNAMIC: Opcode;
            readonly INVOKEINTERFACE: Opcode;
            readonly INVOKESPECIAL: Opcode;
            readonly INVOKESTATIC: Opcode;
            readonly INVOKEVIRTUAL: Opcode;
            readonly IOR: Opcode;
            readonly IREM: Opcode;
            readonly IRETURN: Opcode;
            readonly ISHL: Opcode;
            readonly ISHR: Opcode;
            readonly ISTORE: Opcode;
            readonly ISTORE_0: Opcode;
            readonly ISTORE_1: Opcode;
            readonly ISTORE_2: Opcode;
            readonly ISTORE_3: Opcode;
            readonly ISTORE_W: Opcode;
            readonly ISUB: Opcode;
            readonly IUSHR: Opcode;
            readonly IXOR: Opcode;
            readonly JSR: Opcode;
            readonly JSR_W: Opcode;
            readonly L2D: Opcode;
            readonly L2F: Opcode;
            readonly L2I: Opcode;
            readonly LADD: Opcode;
            readonly LALOAD: Opcode;
            readonly LAND: Opcode;
            readonly LASTORE: Opcode;
            readonly LCMP: Opcode;
            readonly LCONST_0: Opcode;
            readonly LCONST_1: Opcode;
            readonly LDC: Opcode;
            readonly LDC2_W: Opcode;
            readonly LDC_W: Opcode;
            readonly LDIV: Opcode;
            readonly LLOAD: Opcode;
            readonly LLOAD_0: Opcode;
            readonly LLOAD_1: Opcode;
            readonly LLOAD_2: Opcode;
            readonly LLOAD_3: Opcode;
            readonly LLOAD_W: Opcode;
            readonly LMUL: Opcode;
            readonly LNEG: Opcode;
            readonly LOAD_BYTE: Opcode;
            readonly LOAD_CHAR: Opcode;
            readonly LOAD_CHAR_OE: Opcode;
            readonly LOAD_SHORT: Opcode;
            readonly LOAD_SHORT_OE: Opcode;
            readonly LOAD_UBYTE: Opcode;
            readonly LOAD_WORD: Opcode;
            readonly LOAD_WORD_OE: Opcode;
            readonly LOOKUPSWITCH: Opcode;
            readonly LOR: Opcode;
            readonly LREM: Opcode;
            readonly LRETURN: Opcode;
            readonly LSHL: Opcode;
            readonly LSHR: Opcode;
            readonly LSTORE: Opcode;
            readonly LSTORE_0: Opcode;
            readonly LSTORE_1: Opcode;
            readonly LSTORE_2: Opcode;
            readonly LSTORE_3: Opcode;
            readonly LSTORE_W: Opcode;
            readonly LSUB: Opcode;
            readonly LUSHR: Opcode;
            readonly LXOR: Opcode;
            readonly MONITORENTER: Opcode;
            readonly MONITOREXIT: Opcode;
            readonly MULTIANEWARRAY: Opcode;
            readonly NCLOAD_BYTE: Opcode;
            readonly NCLOAD_CHAR: Opcode;
            readonly NCLOAD_CHAR_OE: Opcode;
            readonly NCLOAD_SHORT: Opcode;
            readonly NCLOAD_SHORT_OE: Opcode;
            readonly NCLOAD_UBYTE: Opcode;
            readonly NCLOAD_WORD: Opcode;
            readonly NCLOAD_WORD_OE: Opcode;
            readonly NCSTORE_BYTE: Opcode;
            readonly NCSTORE_SHORT: Opcode;
            readonly NCSTORE_SHORT_OE: Opcode;
            readonly NCSTORE_WORD: Opcode;
            readonly NCSTORE_WORD_OE: Opcode;
            readonly NEW: Opcode;
            readonly NEWARRAY: Opcode;
            readonly NONPRIV: int;
            readonly NOP: Opcode;
            readonly POP: Opcode;
            readonly POP2: Opcode;
            readonly PRIV: int;
            readonly PRIV_CACHE_FLUSH: Opcode;
            readonly PRIV_CACHE_INDEX_FLUSH: Opcode;
            readonly PRIV_LOAD_BYTE: Opcode;
            readonly PRIV_LOAD_CHAR: Opcode;
            readonly PRIV_LOAD_CHAR_OE: Opcode;
            readonly PRIV_LOAD_SHORT: Opcode;
            readonly PRIV_LOAD_SHORT_OE: Opcode;
            readonly PRIV_LOAD_UBYTE: Opcode;
            readonly PRIV_LOAD_WORD: Opcode;
            readonly PRIV_LOAD_WORD_OE: Opcode;
            readonly PRIV_NCLOAD_BYTE: Opcode;
            readonly PRIV_NCLOAD_CHAR: Opcode;
            readonly PRIV_NCLOAD_CHAR_OE: Opcode;
            readonly PRIV_NCLOAD_SHORT: Opcode;
            readonly PRIV_NCLOAD_SHORT_OE: Opcode;
            readonly PRIV_NCLOAD_UBYTE: Opcode;
            readonly PRIV_NCLOAD_WORD: Opcode;
            readonly PRIV_NCLOAD_WORD_OE: Opcode;
            readonly PRIV_NCSTORE_BYTE: Opcode;
            readonly PRIV_NCSTORE_SHORT: Opcode;
            readonly PRIV_NCSTORE_SHORT_OE: Opcode;
            readonly PRIV_NCSTORE_WORD: Opcode;
            readonly PRIV_NCSTORE_WORD_OE: Opcode;
            readonly PRIV_POWERDOWN: Opcode;
            readonly PRIV_READ_DCACHE_DATA: Opcode;
            readonly PRIV_READ_DCACHE_TAG: Opcode;
            readonly PRIV_READ_ICACHE_DATA: Opcode;
            readonly PRIV_READ_ICACHE_TAG: Opcode;
            readonly PRIV_READ_REG_0: Opcode;
            readonly PRIV_READ_REG_1: Opcode;
            readonly PRIV_READ_REG_10: Opcode;
            readonly PRIV_READ_REG_11: Opcode;
            readonly PRIV_READ_REG_12: Opcode;
            readonly PRIV_READ_REG_13: Opcode;
            readonly PRIV_READ_REG_14: Opcode;
            readonly PRIV_READ_REG_15: Opcode;
            readonly PRIV_READ_REG_16: Opcode;
            readonly PRIV_READ_REG_17: Opcode;
            readonly PRIV_READ_REG_18: Opcode;
            readonly PRIV_READ_REG_19: Opcode;
            readonly PRIV_READ_REG_2: Opcode;
            readonly PRIV_READ_REG_20: Opcode;
            readonly PRIV_READ_REG_21: Opcode;
            readonly PRIV_READ_REG_22: Opcode;
            readonly PRIV_READ_REG_23: Opcode;
            readonly PRIV_READ_REG_24: Opcode;
            readonly PRIV_READ_REG_25: Opcode;
            readonly PRIV_READ_REG_26: Opcode;
            readonly PRIV_READ_REG_27: Opcode;
            readonly PRIV_READ_REG_28: Opcode;
            readonly PRIV_READ_REG_29: Opcode;
            readonly PRIV_READ_REG_3: Opcode;
            readonly PRIV_READ_REG_30: Opcode;
            readonly PRIV_READ_REG_31: Opcode;
            readonly PRIV_READ_REG_4: Opcode;
            readonly PRIV_READ_REG_5: Opcode;
            readonly PRIV_READ_REG_6: Opcode;
            readonly PRIV_READ_REG_7: Opcode;
            readonly PRIV_READ_REG_8: Opcode;
            readonly PRIV_READ_REG_9: Opcode;
            readonly PRIV_READ_SCACHE_DATA: Opcode;
            readonly PRIV_RESET: Opcode;
            readonly PRIV_RET_FROM_TRAP: Opcode;
            readonly PRIV_STORE_BYTE: Opcode;
            readonly PRIV_STORE_SHORT: Opcode;
            readonly PRIV_STORE_SHORT_OE: Opcode;
            readonly PRIV_STORE_WORD: Opcode;
            readonly PRIV_STORE_WORD_OE: Opcode;
            readonly PRIV_WRITE_DCACHE_DATA: Opcode;
            readonly PRIV_WRITE_DCACHE_TAG: Opcode;
            readonly PRIV_WRITE_ICACHE_DATA: Opcode;
            readonly PRIV_WRITE_ICACHE_TAG: Opcode;
            readonly PRIV_WRITE_REG_0: Opcode;
            readonly PRIV_WRITE_REG_1: Opcode;
            readonly PRIV_WRITE_REG_10: Opcode;
            readonly PRIV_WRITE_REG_11: Opcode;
            readonly PRIV_WRITE_REG_12: Opcode;
            readonly PRIV_WRITE_REG_13: Opcode;
            readonly PRIV_WRITE_REG_14: Opcode;
            readonly PRIV_WRITE_REG_15: Opcode;
            readonly PRIV_WRITE_REG_16: Opcode;
            readonly PRIV_WRITE_REG_17: Opcode;
            readonly PRIV_WRITE_REG_18: Opcode;
            readonly PRIV_WRITE_REG_19: Opcode;
            readonly PRIV_WRITE_REG_2: Opcode;
            readonly PRIV_WRITE_REG_20: Opcode;
            readonly PRIV_WRITE_REG_21: Opcode;
            readonly PRIV_WRITE_REG_22: Opcode;
            readonly PRIV_WRITE_REG_23: Opcode;
            readonly PRIV_WRITE_REG_24: Opcode;
            readonly PRIV_WRITE_REG_25: Opcode;
            readonly PRIV_WRITE_REG_26: Opcode;
            readonly PRIV_WRITE_REG_27: Opcode;
            readonly PRIV_WRITE_REG_28: Opcode;
            readonly PRIV_WRITE_REG_29: Opcode;
            readonly PRIV_WRITE_REG_3: Opcode;
            readonly PRIV_WRITE_REG_30: Opcode;
            readonly PRIV_WRITE_REG_31: Opcode;
            readonly PRIV_WRITE_REG_4: Opcode;
            readonly PRIV_WRITE_REG_5: Opcode;
            readonly PRIV_WRITE_REG_6: Opcode;
            readonly PRIV_WRITE_REG_7: Opcode;
            readonly PRIV_WRITE_REG_8: Opcode;
            readonly PRIV_WRITE_REG_9: Opcode;
            readonly PRIV_WRITE_SCACHE_DATA: Opcode;
            readonly PRIV_ZERO_LINE: Opcode;
            readonly PUTFIELD: Opcode;
            readonly PUTSTATIC: Opcode;
            readonly RET: Opcode;
            readonly RETURN: Opcode;
            readonly RET_FROM_SUB: Opcode;
            readonly RET_W: Opcode;
            readonly SALOAD: Opcode;
            readonly SASTORE: Opcode;
            readonly SIPUSH: Opcode;
            readonly STORE_BYTE: Opcode;
            readonly STORE_SHORT: Opcode;
            readonly STORE_SHORT_OE: Opcode;
            readonly STORE_WORD: Opcode;
            readonly STORE_WORD_OE: Opcode;
            readonly SWAP: Opcode;
            readonly TABLESWITCH: Opcode;
            readonly WIDE: int;
            readonly ZERO_LINE: Opcode;
            _nonPrivOpcodes: Opcode[];
            _privOpcodes: Opcode[];
            _stdOpcodes: Opcode[];
            _wideOpcodes: Opcode[];
          }
          let Opcode: _Opcode$$static;
          interface _Opcode {
            readonly kind: Instruction$Kind;
            readonly opcode: int;
            readonly set: Opcode$Set;
          }
          interface Opcode extends CombineTypes<[_Opcode]> {}
          interface _Opcode$Set$$static extends ClassLike {
            valueOf(name: string): Opcode$Set;
            values(): Opcode$Set[];
            readonly PICOJAVA: Opcode$Set;
            readonly STANDARD: Opcode$Set;
          }
          let Opcode$Set: _Opcode$Set$$static;
          interface _Opcode$Set {
          }
          interface Opcode$Set extends CombineTypes<[_Opcode$Set]> {}
          interface _PermittedSubclasses_attribute$$static extends ClassLike {
            _new(cr: ClassReader, name_index: int, length: int): PermittedSubclasses_attribute;
            new(name_index: int, subtypes: int[]): PermittedSubclasses_attribute;
          }
          let PermittedSubclasses_attribute: _PermittedSubclasses_attribute$$static;
          interface _PermittedSubclasses_attribute {
            accept<R, D>(visitor: Attribute$Visitor<R,D>, data: D): R;
            getSubtypes(constant_pool: ConstantPool): ConstantPool$CONSTANT_Class_info[];
            subtypes: int[];
          }
          interface PermittedSubclasses_attribute extends CombineTypes<[_PermittedSubclasses_attribute, com.sun.tools.classfile.Attribute]> {}
          interface _Record_attribute$$static extends ClassLike {
            _new(cr: ClassReader, name_index: int, length: int): Record_attribute;
            new(name_index: int, component_info_arr: Record_attribute$ComponentInfo[]): Record_attribute;
          }
          let Record_attribute: _Record_attribute$$static;
          interface _Record_attribute {
            accept<R, D>(visitor: Attribute$Visitor<R,D>, data: D): R;
            readonly component_count: int;
            readonly component_info_arr: Record_attribute$ComponentInfo[];
          }
          interface Record_attribute extends CombineTypes<[_Record_attribute, com.sun.tools.classfile.Attribute]> {}
          interface _Record_attribute$ComponentInfo$$static extends ClassLike {
            _new(cr: ClassReader): Record_attribute$ComponentInfo;
            new(name_index: int, descriptor: Descriptor, attributes: Attributes): Record_attribute$ComponentInfo;
          }
          let Record_attribute$ComponentInfo: _Record_attribute$ComponentInfo$$static;
          interface _Record_attribute$ComponentInfo {
            getName(constant_pool: ConstantPool): string;
            readonly attributes: Attributes;
            readonly descriptor: Descriptor;
            readonly name_index: int;
          }
          interface Record_attribute$ComponentInfo extends CombineTypes<[_Record_attribute$ComponentInfo, java.lang.Object]> {}
          interface _ReferenceFinder$$static extends ClassLike {
            new(filter: ReferenceFinder$Filter, visitor: ReferenceFinder$Visitor): ReferenceFinder;
          }
          let ReferenceFinder: _ReferenceFinder$$static;
          interface _ReferenceFinder {
            parse(cf: ClassFile): boolean;
            _codeVisitor: Instruction$KindVisitor<int,java.util.List<int>>;
            _cpVisitor: ConstantPool$Visitor<boolean,ConstantPool>;
            _filter: ReferenceFinder$Filter;
            _visitor: ReferenceFinder$Visitor;
          }
          interface ReferenceFinder extends CombineTypes<[_ReferenceFinder, java.lang.Object]> {}
          interface _ReferenceFinder$Filter$$static extends ClassLike {
          }
          let ReferenceFinder$Filter: _ReferenceFinder$Filter$$static;
          interface _ReferenceFinder$Filter {
            accept(a0: ConstantPool, a1: ConstantPool$CPRefInfo): boolean;
(a0: ConstantPool, a1: ConstantPool$CPRefInfo): boolean;
          }
          interface ReferenceFinder$Filter extends CombineTypes<[_ReferenceFinder$Filter, java.lang.Object]> {}
          interface _ReferenceFinder$Visitor$$static extends ClassLike {
          }
          let ReferenceFinder$Visitor: _ReferenceFinder$Visitor$$static;
          interface _ReferenceFinder$Visitor {
            visit(a0: ClassFile, a1: Method, a2: java.util.List<ConstantPool$CPRefInfo>): void;
(a0: ClassFile, a1: Method, a2: java.util.List<ConstantPool$CPRefInfo>): void;
          }
          interface ReferenceFinder$Visitor extends CombineTypes<[_ReferenceFinder$Visitor, java.lang.Object]> {}
          interface _RuntimeAnnotations_attribute$$static extends ClassLike {
            _length(annos: Annotation[]): int;
            _new(cr: ClassReader, name_index: int, length: int): RuntimeAnnotations_attribute;
            _new(name_index: int, annotations: Annotation[]): RuntimeAnnotations_attribute;
          }
          let RuntimeAnnotations_attribute: _RuntimeAnnotations_attribute$$static;
          interface _RuntimeAnnotations_attribute {
            readonly annotations: Annotation[];
          }
          interface RuntimeAnnotations_attribute extends CombineTypes<[_RuntimeAnnotations_attribute, com.sun.tools.classfile.Attribute]> {}
          interface _RuntimeInvisibleAnnotations_attribute$$static extends ClassLike {
            _new(cr: ClassReader, name_index: int, length: int): RuntimeInvisibleAnnotations_attribute;
            new(cp: ConstantPool, annotations: Annotation[]): RuntimeInvisibleAnnotations_attribute;
            new(name_index: int, annotations: Annotation[]): RuntimeInvisibleAnnotations_attribute;
          }
          let RuntimeInvisibleAnnotations_attribute: _RuntimeInvisibleAnnotations_attribute$$static;
          interface _RuntimeInvisibleAnnotations_attribute {
            accept<R, P>(visitor: Attribute$Visitor<R,P>, p: P): R;
          }
          interface RuntimeInvisibleAnnotations_attribute extends CombineTypes<[_RuntimeInvisibleAnnotations_attribute, com.sun.tools.classfile.RuntimeAnnotations_attribute]> {}
          interface _RuntimeInvisibleParameterAnnotations_attribute$$static extends ClassLike {
            _new(cr: ClassReader, name_index: int, length: int): RuntimeInvisibleParameterAnnotations_attribute;
            new(cp: ConstantPool, parameter_annotations: Annotation[][]): RuntimeInvisibleParameterAnnotations_attribute;
            new(name_index: int, parameter_annotations: Annotation[][]): RuntimeInvisibleParameterAnnotations_attribute;
          }
          let RuntimeInvisibleParameterAnnotations_attribute: _RuntimeInvisibleParameterAnnotations_attribute$$static;
          interface _RuntimeInvisibleParameterAnnotations_attribute {
            accept<R, P>(visitor: Attribute$Visitor<R,P>, p: P): R;
          }
          interface RuntimeInvisibleParameterAnnotations_attribute extends CombineTypes<[_RuntimeInvisibleParameterAnnotations_attribute, com.sun.tools.classfile.RuntimeParameterAnnotations_attribute]> {}
          interface _RuntimeInvisibleTypeAnnotations_attribute$$static extends ClassLike {
            _new(cr: ClassReader, name_index: int, length: int): RuntimeInvisibleTypeAnnotations_attribute;
            new(cp: ConstantPool, annotations: TypeAnnotation[]): RuntimeInvisibleTypeAnnotations_attribute;
            new(name_index: int, annotations: TypeAnnotation[]): RuntimeInvisibleTypeAnnotations_attribute;
          }
          let RuntimeInvisibleTypeAnnotations_attribute: _RuntimeInvisibleTypeAnnotations_attribute$$static;
          interface _RuntimeInvisibleTypeAnnotations_attribute {
            accept<R, P>(visitor: Attribute$Visitor<R,P>, p: P): R;
          }
          interface RuntimeInvisibleTypeAnnotations_attribute extends CombineTypes<[_RuntimeInvisibleTypeAnnotations_attribute, com.sun.tools.classfile.RuntimeTypeAnnotations_attribute]> {}
          interface _RuntimeParameterAnnotations_attribute$$static extends ClassLike {
            _length(anno_arrays: Annotation[][]): int;
            _new(cr: ClassReader, name_index: int, length: int): RuntimeParameterAnnotations_attribute;
            _new(name_index: int, parameter_annotations: Annotation[][]): RuntimeParameterAnnotations_attribute;
          }
          let RuntimeParameterAnnotations_attribute: _RuntimeParameterAnnotations_attribute$$static;
          interface _RuntimeParameterAnnotations_attribute {
            readonly parameter_annotations: Annotation[][];
          }
          interface RuntimeParameterAnnotations_attribute extends CombineTypes<[_RuntimeParameterAnnotations_attribute, com.sun.tools.classfile.Attribute]> {}
          interface _RuntimeTypeAnnotations_attribute$$static extends ClassLike {
            _length(annos: TypeAnnotation[]): int;
            _new(cr: ClassReader, name_index: int, length: int): RuntimeTypeAnnotations_attribute;
            _new(name_index: int, annotations: TypeAnnotation[]): RuntimeTypeAnnotations_attribute;
          }
          let RuntimeTypeAnnotations_attribute: _RuntimeTypeAnnotations_attribute$$static;
          interface _RuntimeTypeAnnotations_attribute {
            readonly annotations: TypeAnnotation[];
          }
          interface RuntimeTypeAnnotations_attribute extends CombineTypes<[_RuntimeTypeAnnotations_attribute, com.sun.tools.classfile.Attribute]> {}
          interface _RuntimeVisibleAnnotations_attribute$$static extends ClassLike {
            _new(cr: ClassReader, name_index: int, length: int): RuntimeVisibleAnnotations_attribute;
            new(cp: ConstantPool, annotations: Annotation[]): RuntimeVisibleAnnotations_attribute;
            new(name_index: int, annotations: Annotation[]): RuntimeVisibleAnnotations_attribute;
          }
          let RuntimeVisibleAnnotations_attribute: _RuntimeVisibleAnnotations_attribute$$static;
          interface _RuntimeVisibleAnnotations_attribute {
            accept<R, P>(visitor: Attribute$Visitor<R,P>, p: P): R;
          }
          interface RuntimeVisibleAnnotations_attribute extends CombineTypes<[_RuntimeVisibleAnnotations_attribute, com.sun.tools.classfile.RuntimeAnnotations_attribute]> {}
          interface _RuntimeVisibleParameterAnnotations_attribute$$static extends ClassLike {
            _new(cr: ClassReader, name_index: int, length: int): RuntimeVisibleParameterAnnotations_attribute;
            new(cp: ConstantPool, parameter_annotations: Annotation[][]): RuntimeVisibleParameterAnnotations_attribute;
            new(name_index: int, parameter_annotations: Annotation[][]): RuntimeVisibleParameterAnnotations_attribute;
          }
          let RuntimeVisibleParameterAnnotations_attribute: _RuntimeVisibleParameterAnnotations_attribute$$static;
          interface _RuntimeVisibleParameterAnnotations_attribute {
            accept<R, P>(visitor: Attribute$Visitor<R,P>, p: P): R;
          }
          interface RuntimeVisibleParameterAnnotations_attribute extends CombineTypes<[_RuntimeVisibleParameterAnnotations_attribute, com.sun.tools.classfile.RuntimeParameterAnnotations_attribute]> {}
          interface _RuntimeVisibleTypeAnnotations_attribute$$static extends ClassLike {
            _new(cr: ClassReader, name_index: int, length: int): RuntimeVisibleTypeAnnotations_attribute;
            new(cp: ConstantPool, annotations: TypeAnnotation[]): RuntimeVisibleTypeAnnotations_attribute;
            new(name_index: int, annotations: TypeAnnotation[]): RuntimeVisibleTypeAnnotations_attribute;
          }
          let RuntimeVisibleTypeAnnotations_attribute: _RuntimeVisibleTypeAnnotations_attribute$$static;
          interface _RuntimeVisibleTypeAnnotations_attribute {
            accept<R, P>(visitor: Attribute$Visitor<R,P>, p: P): R;
          }
          interface RuntimeVisibleTypeAnnotations_attribute extends CombineTypes<[_RuntimeVisibleTypeAnnotations_attribute, com.sun.tools.classfile.RuntimeTypeAnnotations_attribute]> {}
          interface _Signature$$static extends ClassLike {
            new(index: int): Signature;
          }
          let Signature: _Signature$$static;
          interface _Signature {
            _debugInfo(): string;
            getFieldType(constant_pool: ConstantPool): string;
            getParameterCount(constant_pool: ConstantPool): int;
            getParameterTypes(constant_pool: ConstantPool): string;
            getReturnType(constant_pool: ConstantPool): string;
            getType(constant_pool: ConstantPool): Type;
            _parse(sig: string): Type;
            _parseClassTypeSignature(): Type;
            _parseClassTypeSignatureRest(): Type;
            _parseTypeParamType(): Type$TypeParamType;
            _parseTypeParamTypes(): java.util.List<Type$TypeParamType>;
            _parseTypeSignature(): Type;
            _parseTypeSignatures(term: char): java.util.List<Type>;
            _parseTypeVariableSignature(): Type;
            _sig: string;
            _sigp: int;
            _type: Type;
          }
          interface Signature extends CombineTypes<[_Signature, com.sun.tools.classfile.Descriptor]> {}
          interface _Signature_attribute$$static extends ClassLike {
            _new(cr: ClassReader, name_index: int, length: int): Signature_attribute;
            new(constant_pool: ConstantPool, signature_index: int): Signature_attribute;
            new(name_index: int, signature_index: int): Signature_attribute;
          }
          let Signature_attribute: _Signature_attribute$$static;
          interface _Signature_attribute {
            accept<R, D>(visitor: Attribute$Visitor<R,D>, data: D): R;
            getParsedSignature(): Signature;
            getSignature(constant_pool: ConstantPool): string;
            readonly signature_index: int;
          }
          interface Signature_attribute extends CombineTypes<[_Signature_attribute, com.sun.tools.classfile.Attribute]> {}
          interface _SourceDebugExtension_attribute$$static extends ClassLike {
            _new(cr: ClassReader, name_index: int, length: int): SourceDebugExtension_attribute;
            new(constant_pool: ConstantPool, debug_extension: byte[]): SourceDebugExtension_attribute;
            new(name_index: int, debug_extension: byte[]): SourceDebugExtension_attribute;
          }
          let SourceDebugExtension_attribute: _SourceDebugExtension_attribute$$static;
          interface _SourceDebugExtension_attribute {
            accept<R, D>(visitor: Attribute$Visitor<R,D>, data: D): R;
            getValue(): string;
            readonly debug_extension: byte[];
          }
          interface SourceDebugExtension_attribute extends CombineTypes<[_SourceDebugExtension_attribute, com.sun.tools.classfile.Attribute]> {}
          interface _SourceFile_attribute$$static extends ClassLike {
            _new(cr: ClassReader, name_index: int, length: int): SourceFile_attribute;
            new(constant_pool: ConstantPool, sourcefile_index: int): SourceFile_attribute;
            new(name_index: int, sourcefile_index: int): SourceFile_attribute;
          }
          let SourceFile_attribute: _SourceFile_attribute$$static;
          interface _SourceFile_attribute {
            accept<R, P>(visitor: Attribute$Visitor<R,P>, p: P): R;
            getSourceFile(constant_pool: ConstantPool): string;
            readonly sourcefile_index: int;
          }
          interface SourceFile_attribute extends CombineTypes<[_SourceFile_attribute, com.sun.tools.classfile.Attribute]> {}
          interface _SourceID_attribute$$static extends ClassLike {
            _new(cr: ClassReader, name_index: int, length: int): SourceID_attribute;
            new(constant_pool: ConstantPool, sourceID_index: int): SourceID_attribute;
            new(name_index: int, sourceID_index: int): SourceID_attribute;
          }
          let SourceID_attribute: _SourceID_attribute$$static;
          interface _SourceID_attribute {
            accept<R, D>(visitor: Attribute$Visitor<R,D>, data: D): R;
            _getSourceID(constant_pool: ConstantPool): string;
            readonly sourceID_index: int;
          }
          interface SourceID_attribute extends CombineTypes<[_SourceID_attribute, com.sun.tools.classfile.Attribute]> {}
          interface _StackMapTable_attribute$$static extends ClassLike {
            _length(entries: StackMapTable_attribute$stack_map_frame[]): int;
            _new(cr: ClassReader, name_index: int, length: int): StackMapTable_attribute;
            new(constant_pool: ConstantPool, entries: StackMapTable_attribute$stack_map_frame[]): StackMapTable_attribute;
            new(name_index: int, entries: StackMapTable_attribute$stack_map_frame[]): StackMapTable_attribute;
          }
          let StackMapTable_attribute: _StackMapTable_attribute$$static;
          interface _StackMapTable_attribute {
            accept<R, D>(visitor: Attribute$Visitor<R,D>, data: D): R;
            readonly entries: StackMapTable_attribute$stack_map_frame[];
            readonly number_of_entries: int;
          }
          interface StackMapTable_attribute extends CombineTypes<[_StackMapTable_attribute, com.sun.tools.classfile.Attribute]> {}
          interface _StackMapTable_attribute$InvalidStackMap$$static extends ClassLike {
            _serialVersionUID: long;
            _new(msg: string): StackMapTable_attribute$InvalidStackMap;
          }
          let StackMapTable_attribute$InvalidStackMap: _StackMapTable_attribute$InvalidStackMap$$static;
          interface _StackMapTable_attribute$InvalidStackMap {
          }
          interface StackMapTable_attribute$InvalidStackMap extends CombineTypes<[_StackMapTable_attribute$InvalidStackMap, com.sun.tools.classfile.AttributeException]> {}
          interface _StackMapTable_attribute$Object_variable_info$$static extends ClassLike {
            _new(cr: ClassReader): StackMapTable_attribute$Object_variable_info;
          }
          let StackMapTable_attribute$Object_variable_info: _StackMapTable_attribute$Object_variable_info$$static;
          interface _StackMapTable_attribute$Object_variable_info {
            length(): int;
            readonly cpool_index: int;
          }
          interface StackMapTable_attribute$Object_variable_info extends CombineTypes<[_StackMapTable_attribute$Object_variable_info, com.sun.tools.classfile.StackMapTable_attribute$verification_type_info]> {}
          interface _StackMapTable_attribute$Uninitialized_variable_info$$static extends ClassLike {
            _new(cr: ClassReader): StackMapTable_attribute$Uninitialized_variable_info;
          }
          let StackMapTable_attribute$Uninitialized_variable_info: _StackMapTable_attribute$Uninitialized_variable_info$$static;
          interface _StackMapTable_attribute$Uninitialized_variable_info {
            length(): int;
            readonly offset: int;
          }
          interface StackMapTable_attribute$Uninitialized_variable_info extends CombineTypes<[_StackMapTable_attribute$Uninitialized_variable_info, com.sun.tools.classfile.StackMapTable_attribute$verification_type_info]> {}
          interface _StackMapTable_attribute$append_frame$$static extends ClassLike {
            _new(frame_type: int, cr: ClassReader): StackMapTable_attribute$append_frame;
          }
          let StackMapTable_attribute$append_frame: _StackMapTable_attribute$append_frame$$static;
          interface _StackMapTable_attribute$append_frame {
            accept<R, D>(visitor: StackMapTable_attribute$stack_map_frame$Visitor<R,D>, data: D): R;
            getOffsetDelta(): int;
            length(): int;
            readonly locals: StackMapTable_attribute$verification_type_info[];
            readonly offset_delta: int;
          }
          interface StackMapTable_attribute$append_frame extends CombineTypes<[_StackMapTable_attribute$append_frame, com.sun.tools.classfile.StackMapTable_attribute$stack_map_frame]> {}
          interface _StackMapTable_attribute$chop_frame$$static extends ClassLike {
            _new(frame_type: int, cr: ClassReader): StackMapTable_attribute$chop_frame;
          }
          let StackMapTable_attribute$chop_frame: _StackMapTable_attribute$chop_frame$$static;
          interface _StackMapTable_attribute$chop_frame {
            accept<R, D>(visitor: StackMapTable_attribute$stack_map_frame$Visitor<R,D>, data: D): R;
            getOffsetDelta(): int;
            length(): int;
            readonly offset_delta: int;
          }
          interface StackMapTable_attribute$chop_frame extends CombineTypes<[_StackMapTable_attribute$chop_frame, com.sun.tools.classfile.StackMapTable_attribute$stack_map_frame]> {}
          interface _StackMapTable_attribute$full_frame$$static extends ClassLike {
            _new(frame_type: int, cr: ClassReader): StackMapTable_attribute$full_frame;
          }
          let StackMapTable_attribute$full_frame: _StackMapTable_attribute$full_frame$$static;
          interface _StackMapTable_attribute$full_frame {
            accept<R, D>(visitor: StackMapTable_attribute$stack_map_frame$Visitor<R,D>, data: D): R;
            getOffsetDelta(): int;
            length(): int;
            readonly locals: StackMapTable_attribute$verification_type_info[];
            readonly number_of_locals: int;
            readonly number_of_stack_items: int;
            readonly offset_delta: int;
            readonly stack: StackMapTable_attribute$verification_type_info[];
          }
          interface StackMapTable_attribute$full_frame extends CombineTypes<[_StackMapTable_attribute$full_frame, com.sun.tools.classfile.StackMapTable_attribute$stack_map_frame]> {}
          interface _StackMapTable_attribute$same_frame$$static extends ClassLike {
            _new(frame_type: int): StackMapTable_attribute$same_frame;
          }
          let StackMapTable_attribute$same_frame: _StackMapTable_attribute$same_frame$$static;
          interface _StackMapTable_attribute$same_frame {
            accept<R, D>(visitor: StackMapTable_attribute$stack_map_frame$Visitor<R,D>, data: D): R;
            getOffsetDelta(): int;
          }
          interface StackMapTable_attribute$same_frame extends CombineTypes<[_StackMapTable_attribute$same_frame, com.sun.tools.classfile.StackMapTable_attribute$stack_map_frame]> {}
          interface _StackMapTable_attribute$same_frame_extended$$static extends ClassLike {
            _new(frame_type: int, cr: ClassReader): StackMapTable_attribute$same_frame_extended;
          }
          let StackMapTable_attribute$same_frame_extended: _StackMapTable_attribute$same_frame_extended$$static;
          interface _StackMapTable_attribute$same_frame_extended {
            accept<R, D>(visitor: StackMapTable_attribute$stack_map_frame$Visitor<R,D>, data: D): R;
            getOffsetDelta(): int;
            length(): int;
            readonly offset_delta: int;
          }
          interface StackMapTable_attribute$same_frame_extended extends CombineTypes<[_StackMapTable_attribute$same_frame_extended, com.sun.tools.classfile.StackMapTable_attribute$stack_map_frame]> {}
          interface _StackMapTable_attribute$same_locals_1_stack_item_frame$$static extends ClassLike {
            _new(frame_type: int, cr: ClassReader): StackMapTable_attribute$same_locals_1_stack_item_frame;
          }
          let StackMapTable_attribute$same_locals_1_stack_item_frame: _StackMapTable_attribute$same_locals_1_stack_item_frame$$static;
          interface _StackMapTable_attribute$same_locals_1_stack_item_frame {
            accept<R, D>(visitor: StackMapTable_attribute$stack_map_frame$Visitor<R,D>, data: D): R;
            getOffsetDelta(): int;
            length(): int;
            readonly stack: StackMapTable_attribute$verification_type_info[];
          }
          interface StackMapTable_attribute$same_locals_1_stack_item_frame extends CombineTypes<[_StackMapTable_attribute$same_locals_1_stack_item_frame, com.sun.tools.classfile.StackMapTable_attribute$stack_map_frame]> {}
          interface _StackMapTable_attribute$same_locals_1_stack_item_frame_extended$$static extends ClassLike {
            _new(frame_type: int, cr: ClassReader): StackMapTable_attribute$same_locals_1_stack_item_frame_extended;
          }
          let StackMapTable_attribute$same_locals_1_stack_item_frame_extended: _StackMapTable_attribute$same_locals_1_stack_item_frame_extended$$static;
          interface _StackMapTable_attribute$same_locals_1_stack_item_frame_extended {
            accept<R, D>(visitor: StackMapTable_attribute$stack_map_frame$Visitor<R,D>, data: D): R;
            getOffsetDelta(): int;
            length(): int;
            readonly offset_delta: int;
            readonly stack: StackMapTable_attribute$verification_type_info[];
          }
          interface StackMapTable_attribute$same_locals_1_stack_item_frame_extended extends CombineTypes<[_StackMapTable_attribute$same_locals_1_stack_item_frame_extended, com.sun.tools.classfile.StackMapTable_attribute$stack_map_frame]> {}
          interface _StackMapTable_attribute$stack_map_frame$$static extends ClassLike {
            _read(cr: ClassReader): StackMapTable_attribute$stack_map_frame;
            _new(frame_type: int): StackMapTable_attribute$stack_map_frame;
          }
          let StackMapTable_attribute$stack_map_frame: _StackMapTable_attribute$stack_map_frame$$static;
          interface _StackMapTable_attribute$stack_map_frame {
            accept<R, D>(a0: StackMapTable_attribute$stack_map_frame$Visitor<R,D>, a1: D): R;
            getOffsetDelta(): int;
            length(): int;
            readonly frame_type: int;
          }
          interface StackMapTable_attribute$stack_map_frame extends CombineTypes<[_StackMapTable_attribute$stack_map_frame, java.lang.Object]> {}
          interface _StackMapTable_attribute$stack_map_frame$Visitor$$static<R,P> extends ClassLike {
          }
          let StackMapTable_attribute$stack_map_frame$Visitor: _StackMapTable_attribute$stack_map_frame$Visitor$$static<R,P>;
          interface _StackMapTable_attribute$stack_map_frame$Visitor<R,P> {
            visit_append_frame(a0: StackMapTable_attribute$append_frame, a1: P): R;
            visit_chop_frame(a0: StackMapTable_attribute$chop_frame, a1: P): R;
            visit_full_frame(a0: StackMapTable_attribute$full_frame, a1: P): R;
            visit_same_frame(a0: StackMapTable_attribute$same_frame, a1: P): R;
            visit_same_frame_extended(a0: StackMapTable_attribute$same_frame_extended, a1: P): R;
            visit_same_locals_1_stack_item_frame(a0: StackMapTable_attribute$same_locals_1_stack_item_frame, a1: P): R;
            visit_same_locals_1_stack_item_frame_extended(a0: StackMapTable_attribute$same_locals_1_stack_item_frame_extended, a1: P): R;
          }
          interface StackMapTable_attribute$stack_map_frame$Visitor<R,P> extends CombineTypes<[_StackMapTable_attribute$stack_map_frame$Visitor<R,P>, java.lang.Object]> {}
          interface _StackMapTable_attribute$verification_type_info$$static extends ClassLike {
            _read(cr: ClassReader): StackMapTable_attribute$verification_type_info;
            readonly ITEM_Double: int;
            readonly ITEM_Float: int;
            readonly ITEM_Integer: int;
            readonly ITEM_Long: int;
            readonly ITEM_Null: int;
            readonly ITEM_Object: int;
            readonly ITEM_Top: int;
            readonly ITEM_Uninitialized: int;
            readonly ITEM_UninitializedThis: int;
            _new(tag: int): StackMapTable_attribute$verification_type_info;
          }
          let StackMapTable_attribute$verification_type_info: _StackMapTable_attribute$verification_type_info$$static;
          interface _StackMapTable_attribute$verification_type_info {
            length(): int;
            readonly tag: int;
          }
          interface StackMapTable_attribute$verification_type_info extends CombineTypes<[_StackMapTable_attribute$verification_type_info, java.lang.Object]> {}
          interface _StackMap_attribute$$static extends ClassLike {
            _new(cr: ClassReader, name_index: int, length: int): StackMap_attribute;
            new(constant_pool: ConstantPool, entries: StackMap_attribute$stack_map_frame[]): StackMap_attribute;
            new(name_index: int, entries: StackMap_attribute$stack_map_frame[]): StackMap_attribute;
          }
          let StackMap_attribute: _StackMap_attribute$$static;
          interface _StackMap_attribute {
            accept<R, D>(visitor: Attribute$Visitor<R,D>, data: D): R;
            readonly entries: StackMap_attribute$stack_map_frame[];
            readonly number_of_entries: int;
          }
          interface StackMap_attribute extends CombineTypes<[_StackMap_attribute, com.sun.tools.classfile.Attribute]> {}
          interface _StackMap_attribute$stack_map_frame$$static extends ClassLike {
            _new(cr: ClassReader): StackMap_attribute$stack_map_frame;
          }
          let StackMap_attribute$stack_map_frame: _StackMap_attribute$stack_map_frame$$static;
          interface _StackMap_attribute$stack_map_frame {
          }
          interface StackMap_attribute$stack_map_frame extends CombineTypes<[_StackMap_attribute$stack_map_frame, com.sun.tools.classfile.StackMapTable_attribute$full_frame]> {}
          interface _Synthetic_attribute$$static extends ClassLike {
            _new(cr: ClassReader, name_index: int, length: int): Synthetic_attribute;
            new(constant_pool: ConstantPool): Synthetic_attribute;
            new(name_index: int): Synthetic_attribute;
          }
          let Synthetic_attribute: _Synthetic_attribute$$static;
          interface _Synthetic_attribute {
            accept<R, D>(visitor: Attribute$Visitor<R,D>, data: D): R;
          }
          interface Synthetic_attribute extends CombineTypes<[_Synthetic_attribute, com.sun.tools.classfile.Attribute]> {}
          interface _Type$$static extends ClassLike {
            _append(sb: Type$stringBuilder, prefix: string, types: java.util.List<Type>, suffix: string): void;
            _appendIfNotEmpty(sb: Type$stringBuilder, prefix: string, types: java.util.List<Type>, suffix: string): void;
            _new(): Type;
          }
          let Type: _Type$$static;
          interface _Type {
            accept<R, D>(a0: Type$Visitor<R,D>, a1: D): R;
<R, D>(a0: Type$Visitor<R,D>, a1: D): R;
            isObject(): boolean;
          }
          interface Type extends CombineTypes<[_Type, java.lang.Object]> {}
          interface _Type$ArrayType$$static extends ClassLike {
            new(elemType: Type): Type$ArrayType;
          }
          let Type$ArrayType: _Type$ArrayType$$static;
          interface _Type$ArrayType {
            accept<R, D>(visitor: Type$Visitor<R,D>, data: D): R;
            toString(): string;
            readonly elemType: Type;
          }
          interface Type$ArrayType extends CombineTypes<[_Type$ArrayType, com.sun.tools.classfile.Type]> {}
          interface _Type$ClassSigType$$static extends ClassLike {
            new(typeParamTypes: java.util.List<Type$TypeParamType>, superclassType: Type, superinterfaceTypes: java.util.List<Type>): Type$ClassSigType;
          }
          let Type$ClassSigType: _Type$ClassSigType$$static;
          interface _Type$ClassSigType {
            accept<R, D>(visitor: Type$Visitor<R,D>, data: D): R;
            toString(): string;
            readonly superclassType: Type;
            readonly superinterfaceTypes: java.util.List<Type>;
            readonly typeParamTypes: java.util.List<Type$TypeParamType>;
          }
          interface Type$ClassSigType extends CombineTypes<[_Type$ClassSigType, com.sun.tools.classfile.Type]> {}
          interface _Type$ClassType$$static extends ClassLike {
            new(outerType: Type$ClassType, name: string, typeArgs: java.util.List<Type>): Type$ClassType;
          }
          let Type$ClassType: _Type$ClassType$$static;
          interface _Type$ClassType {
            accept<R, D>(visitor: Type$Visitor<R,D>, data: D): R;
            getBinaryName(): string;
            isObject(): boolean;
            toString(): string;
            readonly name: string;
            readonly outerType: Type$ClassType;
            readonly typeArgs: java.util.List<Type>;
          }
          interface Type$ClassType extends CombineTypes<[_Type$ClassType, com.sun.tools.classfile.Type]> {}
          interface _Type$MethodType$$static extends ClassLike {
            new(paramTypes: java.util.List<Type>, resultType: Type): Type$MethodType;
            new(typeParamTypes: java.util.List<Type$TypeParamType>, paramTypes: java.util.List<Type>, returnType: Type, throwsTypes: java.util.List<Type>): Type$MethodType;
          }
          let Type$MethodType: _Type$MethodType$$static;
          interface _Type$MethodType {
            accept<R, D>(visitor: Type$Visitor<R,D>, data: D): R;
            toString(): string;
            readonly paramTypes: java.util.List<Type>;
            readonly returnType: Type;
            readonly throwsTypes: java.util.List<Type>;
            readonly typeParamTypes: java.util.List<Type$TypeParamType>;
          }
          interface Type$MethodType extends CombineTypes<[_Type$MethodType, com.sun.tools.classfile.Type]> {}
          interface _Type$SimpleType$$static extends ClassLike {
            _primitiveTypes: java.util.Set<string>;
            new(name: string): Type$SimpleType;
          }
          let Type$SimpleType: _Type$SimpleType$$static;
          interface _Type$SimpleType {
            accept<R, D>(visitor: Type$Visitor<R,D>, data: D): R;
            isPrimitiveType(): boolean;
            toString(): string;
            readonly name: string;
          }
          interface Type$SimpleType extends CombineTypes<[_Type$SimpleType, com.sun.tools.classfile.Type]> {}
          interface _Type$TypeParamType$$static extends ClassLike {
            new(name: string, classBound: Type, interfaceBounds: java.util.List<Type>): Type$TypeParamType;
          }
          let Type$TypeParamType: _Type$TypeParamType$$static;
          interface _Type$TypeParamType {
            accept<R, D>(visitor: Type$Visitor<R,D>, data: D): R;
            toString(): string;
            readonly classBound: Type;
            readonly interfaceBounds: java.util.List<Type>;
            readonly name: string;
          }
          interface Type$TypeParamType extends CombineTypes<[_Type$TypeParamType, com.sun.tools.classfile.Type]> {}
          interface _Type$Visitor$$static<R,P> extends ClassLike {
          }
          let Type$Visitor: _Type$Visitor$$static<R,P>;
          interface _Type$Visitor<R,P> {
            visitArrayType(a0: Type$ArrayType, a1: P): R;
            visitClassSigType(a0: Type$ClassSigType, a1: P): R;
            visitClassType(a0: Type$ClassType, a1: P): R;
            visitMethodType(a0: Type$MethodType, a1: P): R;
            visitSimpleType(a0: Type$SimpleType, a1: P): R;
            visitTypeParamType(a0: Type$TypeParamType, a1: P): R;
            visitWildcardType(a0: Type$WildcardType, a1: P): R;
          }
          interface Type$Visitor<R,P> extends CombineTypes<[_Type$Visitor<R,P>, java.lang.Object]> {}
          interface _Type$WildcardType$$static extends ClassLike {
            new(): Type$WildcardType;
            new(kind: Type$WildcardType$Kind, boundType: Type): Type$WildcardType;
          }
          let Type$WildcardType: _Type$WildcardType$$static;
          interface _Type$WildcardType {
            accept<R, D>(visitor: Type$Visitor<R,D>, data: D): R;
            toString(): string;
            readonly boundType: Type;
            readonly kind: Type$WildcardType$Kind;
          }
          interface Type$WildcardType extends CombineTypes<[_Type$WildcardType, com.sun.tools.classfile.Type]> {}
          interface _Type$WildcardType$Kind$$static extends ClassLike {
            valueOf(name: string): Type$WildcardType$Kind;
            values(): Type$WildcardType$Kind[];
            readonly EXTENDS: Type$WildcardType$Kind;
            readonly SUPER: Type$WildcardType$Kind;
            readonly UNBOUNDED: Type$WildcardType$Kind;
          }
          let Type$WildcardType$Kind: _Type$WildcardType$Kind$$static;
          interface _Type$WildcardType$Kind {
          }
          interface Type$WildcardType$Kind extends CombineTypes<[_Type$WildcardType$Kind]> {}
          interface _TypeAnnotation$$static extends ClassLike {
            _position_length(pos: TypeAnnotation$Position): int;
            _read_position(cr: ClassReader): TypeAnnotation$Position;
            _new(cr: ClassReader): TypeAnnotation;
            new(constant_pool: ConstantPool, annotation: Annotation, position: TypeAnnotation$Position): TypeAnnotation;
          }
          let TypeAnnotation: _TypeAnnotation$$static;
          interface _TypeAnnotation {
            length(): int;
            toString(): string;
            readonly annotation: Annotation;
            readonly constant_pool: ConstantPool;
            readonly position: TypeAnnotation$Position;
          }
          interface TypeAnnotation extends CombineTypes<[_TypeAnnotation, java.lang.Object]> {}
          interface _TypeAnnotation$Position$$static extends ClassLike {
            getBinaryFromTypePath(locs: java.util.List<TypeAnnotation$Position$TypePathEntry>): java.util.List<int>;
            getTypePathFromBinary(list: java.util.List<int>): java.util.List<TypeAnnotation$Position$TypePathEntry>;
            new(): TypeAnnotation$Position;
          }
          let TypeAnnotation$Position: _TypeAnnotation$Position$$static;
          interface _TypeAnnotation$Position {
            emitToClassfile(): boolean;
            toString(): string;
            bound_index: int;
            exception_index: int;
            isValidOffset: boolean;
            location: java.util.List<TypeAnnotation$Position$TypePathEntry>;
            lvarIndex: int[];
            lvarLength: int[];
            lvarOffset: int[];
            offset: int;
            parameter_index: int;
            pos: int;
            type: TypeAnnotation$TargetType;
            type_index: int;
          }
          interface TypeAnnotation$Position extends CombineTypes<[_TypeAnnotation$Position, java.lang.Object]> {}
          interface _TypeAnnotation$Position$TypePathEntry$$static extends ClassLike {
            fromBinary(tag: int, arg: int): TypeAnnotation$Position$TypePathEntry;
            readonly ARRAY: TypeAnnotation$Position$TypePathEntry;
            readonly INNER_TYPE: TypeAnnotation$Position$TypePathEntry;
            readonly WILDCARD: TypeAnnotation$Position$TypePathEntry;
            readonly bytesPerEntry: int;
            new(tag: TypeAnnotation$Position$TypePathEntryKind, arg: int): TypeAnnotation$Position$TypePathEntry;
          }
          let TypeAnnotation$Position$TypePathEntry: _TypeAnnotation$Position$TypePathEntry$$static;
          interface _TypeAnnotation$Position$TypePathEntry {
            equals(other: any): boolean;
            hashCode(): int;
            toString(): string;
            readonly arg: int;
            readonly tag: TypeAnnotation$Position$TypePathEntryKind;
          }
          interface TypeAnnotation$Position$TypePathEntry extends CombineTypes<[_TypeAnnotation$Position$TypePathEntry, java.lang.Object]> {}
          interface _TypeAnnotation$Position$TypePathEntryKind$$static extends ClassLike {
            valueOf(name: string): TypeAnnotation$Position$TypePathEntryKind;
            values(): TypeAnnotation$Position$TypePathEntryKind[];
            readonly ARRAY: TypeAnnotation$Position$TypePathEntryKind;
            readonly INNER_TYPE: TypeAnnotation$Position$TypePathEntryKind;
            readonly TYPE_ARGUMENT: TypeAnnotation$Position$TypePathEntryKind;
            readonly WILDCARD: TypeAnnotation$Position$TypePathEntryKind;
          }
          let TypeAnnotation$Position$TypePathEntryKind: _TypeAnnotation$Position$TypePathEntryKind$$static;
          interface _TypeAnnotation$Position$TypePathEntryKind {
            readonly tag: int;
          }
          interface TypeAnnotation$Position$TypePathEntryKind extends CombineTypes<[_TypeAnnotation$Position$TypePathEntryKind]> {}
          interface _TypeAnnotation$TargetType$$static extends ClassLike {
            fromTargetTypeValue(tag: int): TypeAnnotation$TargetType;
            isValidTargetTypeValue(tag: int): boolean;
            valueOf(name: string): TypeAnnotation$TargetType;
            values(): TypeAnnotation$TargetType[];
            readonly CAST: TypeAnnotation$TargetType;
            readonly CLASS_EXTENDS: TypeAnnotation$TargetType;
            readonly CLASS_TYPE_PARAMETER: TypeAnnotation$TargetType;
            readonly CLASS_TYPE_PARAMETER_BOUND: TypeAnnotation$TargetType;
            readonly CONSTRUCTOR_INVOCATION_TYPE_ARGUMENT: TypeAnnotation$TargetType;
            readonly CONSTRUCTOR_REFERENCE: TypeAnnotation$TargetType;
            readonly CONSTRUCTOR_REFERENCE_TYPE_ARGUMENT: TypeAnnotation$TargetType;
            readonly EXCEPTION_PARAMETER: TypeAnnotation$TargetType;
            readonly FIELD: TypeAnnotation$TargetType;
            readonly INSTANCEOF: TypeAnnotation$TargetType;
            readonly LOCAL_VARIABLE: TypeAnnotation$TargetType;
            _MAXIMUM_TARGET_TYPE_VALUE: int;
            readonly METHOD_FORMAL_PARAMETER: TypeAnnotation$TargetType;
            readonly METHOD_INVOCATION_TYPE_ARGUMENT: TypeAnnotation$TargetType;
            readonly METHOD_RECEIVER: TypeAnnotation$TargetType;
            readonly METHOD_REFERENCE: TypeAnnotation$TargetType;
            readonly METHOD_REFERENCE_TYPE_ARGUMENT: TypeAnnotation$TargetType;
            readonly METHOD_RETURN: TypeAnnotation$TargetType;
            readonly METHOD_TYPE_PARAMETER: TypeAnnotation$TargetType;
            readonly METHOD_TYPE_PARAMETER_BOUND: TypeAnnotation$TargetType;
            readonly NEW: TypeAnnotation$TargetType;
            readonly RESOURCE_VARIABLE: TypeAnnotation$TargetType;
            readonly THROWS: TypeAnnotation$TargetType;
            readonly UNKNOWN: TypeAnnotation$TargetType;
            _targets: TypeAnnotation$TargetType[];
          }
          let TypeAnnotation$TargetType: _TypeAnnotation$TargetType$$static;
          interface _TypeAnnotation$TargetType {
            isLocal(): boolean;
            targetTypeValue(): int;
            _isLocal: boolean;
            _targetTypeValue: int;
          }
          interface TypeAnnotation$TargetType extends CombineTypes<[_TypeAnnotation$TargetType]> {}
        }
        module javap {
          module resources {
            interface _javap$$static extends ClassLike {
              new(): javap;
            }
            let javap: _javap$$static;
            interface _javap {
              _getContents(): any[][];
            }
            interface javap extends CombineTypes<[_javap, java.util.ListResourceBundle]> {}
            interface _javap_de$$static extends ClassLike {
              new(): javap_de;
            }
            let javap_de: _javap_de$$static;
            interface _javap_de {
              _getContents(): any[][];
            }
            interface javap_de extends CombineTypes<[_javap_de, java.util.ListResourceBundle]> {}
            interface _javap_ja$$static extends ClassLike {
              new(): javap_ja;
            }
            let javap_ja: _javap_ja$$static;
            interface _javap_ja {
              _getContents(): any[][];
            }
            interface javap_ja extends CombineTypes<[_javap_ja, java.util.ListResourceBundle]> {}
            interface _javap_zh_CN$$static extends ClassLike {
              new(): javap_zh_CN;
            }
            let javap_zh_CN: _javap_zh_CN$$static;
            interface _javap_zh_CN {
              _getContents(): any[][];
            }
            interface javap_zh_CN extends CombineTypes<[_javap_zh_CN, java.util.ListResourceBundle]> {}
            interface _version$$static extends ClassLike {
              new(): version;
            }
            let version: _version$$static;
            interface _version {
              _getContents(): any[][];
            }
            interface version extends CombineTypes<[_version, java.util.ListResourceBundle]> {}
          }
          interface _AnnotationWriter$$static extends ClassLike {
            _instance(context: Context): AnnotationWriter;
            _new(context: Context): AnnotationWriter;
          }
          let AnnotationWriter: _AnnotationWriter$$static;
          interface _AnnotationWriter {
            write(annot: tools.classfile.Annotation): void;
            write(annot: tools.classfile.Annotation, resolveIndices: boolean): void;
            write(annot: tools.classfile.TypeAnnotation): void;
            write(annot: tools.classfile.TypeAnnotation, showOffsets: boolean, resolveIndices: boolean): void;
            write(pos: tools.classfile.TypeAnnotation$Position, showOffsets: boolean): void;
            write(pair: tools.classfile.Annotation$element_value_pair, resolveIndices: boolean): void;
            write(value: tools.classfile.Annotation$element_value): void;
            write(value: tools.classfile.Annotation$element_value, resolveIndices: boolean): void;
            _writeDescriptor(index: int, resolveIndices: boolean): void;
            _writeIndex(index: int, resolveIndices: boolean): void;
            _classWriter: ClassWriter;
            _constantWriter: ConstantWriter;
            _ev_writer: AnnotationWriter$element_value_Writer;
          }
          interface AnnotationWriter extends CombineTypes<[_AnnotationWriter, com.sun.tools.javap.BasicWriter]> {}
          interface _AnnotationWriter$element_value_Writer$$static extends ClassLike {
            _new(this$0: AnnotationWriter): AnnotationWriter$element_value_Writer;
          }
          let AnnotationWriter$element_value_Writer: _AnnotationWriter$element_value_Writer$$static;
          interface _AnnotationWriter$element_value_Writer {
            visitAnnotation(ev: tools.classfile.Annotation$Annotation_element_value, resolveIndices: boolean): java.lang.Void;
            visitAnnotation(a0: tools.classfile.Annotation$Annotation_element_value, a1: any): any;
            visitArray(ev: tools.classfile.Annotation$Array_element_value, resolveIndices: boolean): java.lang.Void;
            visitArray(a0: tools.classfile.Annotation$Array_element_value, a1: any): any;
            visitClass(ev: tools.classfile.Annotation$Class_element_value, resolveIndices: boolean): java.lang.Void;
            visitClass(a0: tools.classfile.Annotation$Class_element_value, a1: any): any;
            visitEnum(ev: tools.classfile.Annotation$Enum_element_value, resolveIndices: boolean): java.lang.Void;
            visitEnum(a0: tools.classfile.Annotation$Enum_element_value, a1: any): any;
            visitPrimitive(ev: tools.classfile.Annotation$Primitive_element_value, resolveIndices: boolean): java.lang.Void;
            visitPrimitive(a0: tools.classfile.Annotation$Primitive_element_value, a1: any): any;
            write(value: tools.classfile.Annotation$element_value, resolveIndices: boolean): void;
            _this$0: AnnotationWriter;
          }
          interface AnnotationWriter$element_value_Writer extends CombineTypes<[_AnnotationWriter$element_value_Writer, tools.classfile.Annotation$element_value$Visitor<java.lang.Void,boolean>, java.lang.Object]> {}
          interface _AttributeWriter$$static extends ClassLike {
            _getJavaName(name: string): string;
            instance(context: Context): AttributeWriter;
            _toHex(i: int): string;
            _toHex(i: int, w: int): string;
            _toHex(ba: byte[]): string;
            _format: string;
            _new(context: Context): AttributeWriter;
          }
          let AttributeWriter: _AttributeWriter$$static;
          interface _AttributeWriter {
            _getAlgorithm(attr: tools.classfile.ModuleHashes_attribute): string;
            _getInnerName(constant_pool: tools.classfile.ConstantPool, info: tools.classfile.InnerClasses_attribute$Info): string;
            _getJavaClassName(a: tools.classfile.EnclosingMethod_attribute): string;
            _getJavaClassName(a: tools.classfile.ModuleMainClass_attribute): string;
            _getJavaException(attr: tools.classfile.Exceptions_attribute, index: int): string;
            _getJavaFieldType(d: tools.classfile.Descriptor): string;
            _getJavaPackage(attr: tools.classfile.ModulePackages_attribute, index: int): string;
            _getMethodName(a: tools.classfile.EnclosingMethod_attribute): string;
            _getModuleName(entry: tools.classfile.ModuleHashes_attribute$Entry): string;
            _getSignature(info: tools.classfile.Signature_attribute): string;
            _getSourceFile(attr: tools.classfile.SourceFile_attribute): string;
            _getTargetPlatform(attr: tools.classfile.ModuleTarget_attribute): string;
            _getValue(d: tools.classfile.Descriptor): string;
            _printExportOpenEntry(index: int, flags: int, to_index: int[]): void;
            _printExportsTable(attr: tools.classfile.Module_attribute): void;
            _printOpensTable(attr: tools.classfile.Module_attribute): void;
            _printProvidesTable(attr: tools.classfile.Module_attribute): void;
            _printRequiresTable(attr: tools.classfile.Module_attribute): void;
            _printUsesTable(attr: tools.classfile.Module_attribute): void;
            _toHex(b: byte, w: int): string;
            visitAnnotationDefault(attr: tools.classfile.AnnotationDefault_attribute, ignore: java.lang.Void): java.lang.Void;
            visitAnnotationDefault(a0: tools.classfile.AnnotationDefault_attribute, a1: any): any;
            visitBootstrapMethods(attr: tools.classfile.BootstrapMethods_attribute, p: java.lang.Void): java.lang.Void;
            visitBootstrapMethods(a0: tools.classfile.BootstrapMethods_attribute, a1: any): any;
            visitCharacterRangeTable(attr: tools.classfile.CharacterRangeTable_attribute, ignore: java.lang.Void): java.lang.Void;
            visitCharacterRangeTable(a0: tools.classfile.CharacterRangeTable_attribute, a1: any): any;
            visitCode(attr: tools.classfile.Code_attribute, ignore: java.lang.Void): java.lang.Void;
            visitCode(a0: tools.classfile.Code_attribute, a1: any): any;
            visitCompilationID(attr: tools.classfile.CompilationID_attribute, ignore: java.lang.Void): java.lang.Void;
            visitCompilationID(a0: tools.classfile.CompilationID_attribute, a1: any): any;
            visitConstantValue(attr: tools.classfile.ConstantValue_attribute, ignore: java.lang.Void): java.lang.Void;
            visitConstantValue(a0: tools.classfile.ConstantValue_attribute, a1: any): any;
            visitDefault(attr: tools.classfile.DefaultAttribute, ignore: java.lang.Void): java.lang.Void;
            visitDefault(a0: tools.classfile.DefaultAttribute, a1: any): any;
            visitDeprecated(attr: tools.classfile.Deprecated_attribute, ignore: java.lang.Void): java.lang.Void;
            visitDeprecated(a0: tools.classfile.Deprecated_attribute, a1: any): any;
            visitEnclosingMethod(attr: tools.classfile.EnclosingMethod_attribute, ignore: java.lang.Void): java.lang.Void;
            visitEnclosingMethod(a0: tools.classfile.EnclosingMethod_attribute, a1: any): any;
            visitExceptions(attr: tools.classfile.Exceptions_attribute, ignore: java.lang.Void): java.lang.Void;
            visitExceptions(a0: tools.classfile.Exceptions_attribute, a1: any): any;
            visitInnerClasses(attr: tools.classfile.InnerClasses_attribute, ignore: java.lang.Void): java.lang.Void;
            visitInnerClasses(a0: tools.classfile.InnerClasses_attribute, a1: any): any;
            visitLineNumberTable(attr: tools.classfile.LineNumberTable_attribute, ignore: java.lang.Void): java.lang.Void;
            visitLineNumberTable(a0: tools.classfile.LineNumberTable_attribute, a1: any): any;
            visitLocalVariableTable(attr: tools.classfile.LocalVariableTable_attribute, ignore: java.lang.Void): java.lang.Void;
            visitLocalVariableTable(a0: tools.classfile.LocalVariableTable_attribute, a1: any): any;
            visitLocalVariableTypeTable(attr: tools.classfile.LocalVariableTypeTable_attribute, ignore: java.lang.Void): java.lang.Void;
            visitLocalVariableTypeTable(a0: tools.classfile.LocalVariableTypeTable_attribute, a1: any): any;
            visitMethodParameters(attr: tools.classfile.MethodParameters_attribute, ignore: java.lang.Void): java.lang.Void;
            visitMethodParameters(a0: tools.classfile.MethodParameters_attribute, a1: any): any;
            visitModule(attr: tools.classfile.Module_attribute, ignore: java.lang.Void): java.lang.Void;
            visitModule(a0: tools.classfile.Module_attribute, a1: any): any;
            visitModuleHashes(attr: tools.classfile.ModuleHashes_attribute, ignore: java.lang.Void): java.lang.Void;
            visitModuleHashes(a0: tools.classfile.ModuleHashes_attribute, a1: any): any;
            visitModuleMainClass(attr: tools.classfile.ModuleMainClass_attribute, ignore: java.lang.Void): java.lang.Void;
            visitModuleMainClass(a0: tools.classfile.ModuleMainClass_attribute, a1: any): any;
            visitModulePackages(attr: tools.classfile.ModulePackages_attribute, ignore: java.lang.Void): java.lang.Void;
            visitModulePackages(a0: tools.classfile.ModulePackages_attribute, a1: any): any;
            visitModuleResolution(attr: tools.classfile.ModuleResolution_attribute, ignore: java.lang.Void): java.lang.Void;
            visitModuleResolution(a0: tools.classfile.ModuleResolution_attribute, a1: any): any;
            visitModuleTarget(attr: tools.classfile.ModuleTarget_attribute, ignore: java.lang.Void): java.lang.Void;
            visitModuleTarget(a0: tools.classfile.ModuleTarget_attribute, a1: any): any;
            visitNestHost(attr: tools.classfile.NestHost_attribute, aVoid: java.lang.Void): java.lang.Void;
            visitNestHost(a0: tools.classfile.NestHost_attribute, a1: any): any;
            visitNestMembers(attr: tools.classfile.NestMembers_attribute, aVoid: java.lang.Void): java.lang.Void;
            visitNestMembers(a0: tools.classfile.NestMembers_attribute, a1: any): any;
            _visitParameterAnnotations(message: string, attr: tools.classfile.RuntimeParameterAnnotations_attribute): void;
            visitPermittedSubclasses(attr: tools.classfile.PermittedSubclasses_attribute, ignore: java.lang.Void): java.lang.Void;
            visitPermittedSubclasses(a0: tools.classfile.PermittedSubclasses_attribute, a1: any): any;
            visitRecord(attr: tools.classfile.Record_attribute, p: java.lang.Void): java.lang.Void;
            visitRecord(a0: tools.classfile.Record_attribute, a1: any): any;
            visitRuntimeInvisibleAnnotations(attr: tools.classfile.RuntimeInvisibleAnnotations_attribute, ignore: java.lang.Void): java.lang.Void;
            visitRuntimeInvisibleAnnotations(a0: tools.classfile.RuntimeInvisibleAnnotations_attribute, a1: any): any;
            visitRuntimeInvisibleParameterAnnotations(attr: tools.classfile.RuntimeInvisibleParameterAnnotations_attribute, ignore: java.lang.Void): java.lang.Void;
            visitRuntimeInvisibleParameterAnnotations(a0: tools.classfile.RuntimeInvisibleParameterAnnotations_attribute, a1: any): any;
            visitRuntimeInvisibleTypeAnnotations(attr: tools.classfile.RuntimeInvisibleTypeAnnotations_attribute, ignore: java.lang.Void): java.lang.Void;
            visitRuntimeInvisibleTypeAnnotations(a0: tools.classfile.RuntimeInvisibleTypeAnnotations_attribute, a1: any): any;
            visitRuntimeVisibleAnnotations(attr: tools.classfile.RuntimeVisibleAnnotations_attribute, ignore: java.lang.Void): java.lang.Void;
            visitRuntimeVisibleAnnotations(a0: tools.classfile.RuntimeVisibleAnnotations_attribute, a1: any): any;
            visitRuntimeVisibleParameterAnnotations(attr: tools.classfile.RuntimeVisibleParameterAnnotations_attribute, ignore: java.lang.Void): java.lang.Void;
            visitRuntimeVisibleParameterAnnotations(a0: tools.classfile.RuntimeVisibleParameterAnnotations_attribute, a1: any): any;
            visitRuntimeVisibleTypeAnnotations(attr: tools.classfile.RuntimeVisibleTypeAnnotations_attribute, ignore: java.lang.Void): java.lang.Void;
            visitRuntimeVisibleTypeAnnotations(a0: tools.classfile.RuntimeVisibleTypeAnnotations_attribute, a1: any): any;
            visitSignature(attr: tools.classfile.Signature_attribute, ignore: java.lang.Void): java.lang.Void;
            visitSignature(a0: tools.classfile.Signature_attribute, a1: any): any;
            visitSourceDebugExtension(attr: tools.classfile.SourceDebugExtension_attribute, ignore: java.lang.Void): java.lang.Void;
            visitSourceDebugExtension(a0: tools.classfile.SourceDebugExtension_attribute, a1: any): any;
            visitSourceFile(attr: tools.classfile.SourceFile_attribute, ignore: java.lang.Void): java.lang.Void;
            visitSourceFile(a0: tools.classfile.SourceFile_attribute, a1: any): any;
            visitSourceID(attr: tools.classfile.SourceID_attribute, ignore: java.lang.Void): java.lang.Void;
            visitSourceID(a0: tools.classfile.SourceID_attribute, a1: any): any;
            visitStackMap(attr: tools.classfile.StackMap_attribute, ignore: java.lang.Void): java.lang.Void;
            visitStackMap(a0: tools.classfile.StackMap_attribute, a1: any): any;
            visitStackMapTable(attr: tools.classfile.StackMapTable_attribute, ignore: java.lang.Void): java.lang.Void;
            visitStackMapTable(a0: tools.classfile.StackMapTable_attribute, a1: any): any;
            visitSynthetic(attr: tools.classfile.Synthetic_attribute, ignore: java.lang.Void): java.lang.Void;
            visitSynthetic(a0: tools.classfile.Synthetic_attribute, a1: any): any;
            write(owner: any, attr: tools.classfile.Attribute, constant_pool: tools.classfile.ConstantPool): void;
            write(owner: any, attrs: tools.classfile.Attributes, constant_pool: tools.classfile.ConstantPool): void;
            _writeInnerClassHeader(): void;
            _writeList(prefix: string, items: java.util.Collection<any>, suffix: string): void;
            _writeModifiers(items: java.util.Collection<string>): void;
            _annotationWriter: AnnotationWriter;
            _codeWriter: CodeWriter;
            _constantWriter: ConstantWriter;
            _constant_pool: tools.classfile.ConstantPool;
            _options: Options;
            _owner: any;
          }
          interface AttributeWriter extends CombineTypes<[_AttributeWriter, tools.classfile.Attribute$Visitor<java.lang.Void,java.lang.Void>, BasicWriter]> {}
          interface _AttributeWriter$StackMapTableWriter$$static extends ClassLike {
            _new(this$0: AttributeWriter): AttributeWriter$StackMapTableWriter;
          }
          let AttributeWriter$StackMapTableWriter: _AttributeWriter$StackMapTableWriter$$static;
          interface _AttributeWriter$StackMapTableWriter {
            _mapTypeName(tag: int): string;
            _printHeader(frame: tools.classfile.StackMapTable_attribute$stack_map_frame, extra: string): void;
            _printMap(name: string, map: tools.classfile.StackMapTable_attribute$verification_type_info[]): void;
            visit_append_frame(frame: tools.classfile.StackMapTable_attribute$append_frame, p: java.lang.Void): java.lang.Void;
            visit_append_frame(a0: tools.classfile.StackMapTable_attribute$append_frame, a1: any): any;
            visit_chop_frame(frame: tools.classfile.StackMapTable_attribute$chop_frame, p: java.lang.Void): java.lang.Void;
            visit_chop_frame(a0: tools.classfile.StackMapTable_attribute$chop_frame, a1: any): any;
            visit_full_frame(frame: tools.classfile.StackMapTable_attribute$full_frame, p: java.lang.Void): java.lang.Void;
            visit_full_frame(a0: tools.classfile.StackMapTable_attribute$full_frame, a1: any): any;
            visit_same_frame(frame: tools.classfile.StackMapTable_attribute$same_frame, p: java.lang.Void): java.lang.Void;
            visit_same_frame(a0: tools.classfile.StackMapTable_attribute$same_frame, a1: any): any;
            visit_same_frame_extended(frame: tools.classfile.StackMapTable_attribute$same_frame_extended, p: java.lang.Void): java.lang.Void;
            visit_same_frame_extended(a0: tools.classfile.StackMapTable_attribute$same_frame_extended, a1: any): any;
            visit_same_locals_1_stack_item_frame(frame: tools.classfile.StackMapTable_attribute$same_locals_1_stack_item_frame, p: java.lang.Void): java.lang.Void;
            visit_same_locals_1_stack_item_frame(a0: tools.classfile.StackMapTable_attribute$same_locals_1_stack_item_frame, a1: any): any;
            visit_same_locals_1_stack_item_frame_extended(frame: tools.classfile.StackMapTable_attribute$same_locals_1_stack_item_frame_extended, p: java.lang.Void): java.lang.Void;
            visit_same_locals_1_stack_item_frame_extended(a0: tools.classfile.StackMapTable_attribute$same_locals_1_stack_item_frame_extended, a1: any): any;
            write(frame: tools.classfile.StackMapTable_attribute$stack_map_frame): void;
            _this$0: AttributeWriter;
          }
          interface AttributeWriter$StackMapTableWriter extends CombineTypes<[_AttributeWriter$StackMapTableWriter, java.lang.Object, tools.classfile.StackMapTable_attribute$stack_map_frame$Visitor<java.lang.Void,java.lang.Void>]> {}
          interface _BasicWriter$$static extends ClassLike {
            _new(context: Context): BasicWriter;
          }
          let BasicWriter: _BasicWriter$$static;
          interface _BasicWriter {
            _indent(delta: int): void;
            _print(s: string): void;
            _print(o: any): void;
            _println(): void;
            _println(s: string): void;
            _println(o: any): void;
            _report(e: tools.classfile.AttributeException): string;
            _report(e: tools.classfile.ConstantPoolException): string;
            _report(e: tools.classfile.DescriptorException): string;
            _report(msg: string): string;
            _setPendingNewline(b: boolean): void;
            _space(w: int): string;
            _tab(): void;
            _lineWriter: BasicWriter$LineWriter;
            _messages: Messages;
            _out: java.io.PrintWriter;
            _spaces: string[];
          }
          interface BasicWriter extends CombineTypes<[_BasicWriter, java.lang.Object]> {}
          interface _BasicWriter$LineWriter$$static extends ClassLike {
            _instance(context: Context): BasicWriter$LineWriter;
            _new(context: Context): BasicWriter$LineWriter;
          }
          let BasicWriter$LineWriter: _BasicWriter$LineWriter$$static;
          interface _BasicWriter$LineWriter {
            _indent(delta: int): void;
            _indent(): void;
            _print(s: string): void;
            _println(): void;
            _tab(): void;
            _buffer: javap$stringBuilder;
            _indentCount: int;
            _indentWidth: int;
            _out: java.io.PrintWriter;
            _pendingNewline: boolean;
            _pendingSpaces: int;
            _tabColumn: int;
          }
          interface BasicWriter$LineWriter extends CombineTypes<[_BasicWriter$LineWriter, java.lang.Object]> {}
          interface _ClassWriter$$static extends ClassLike {
            _getJavaName(name: string): string;
            _instance(context: Context): ClassWriter;
            _DEFAULT_ALLOWED_MAJOR_VERSION: int;
            _DEFAULT_ALLOWED_MINOR_VERSION: int;
            _new(context: Context): ClassWriter;
          }
          let ClassWriter: _ClassWriter$$static;
          interface _ClassWriter {
            _adjustVarargs(flags: tools.classfile.AccessFlags, params: string): string;
            _esc(c: char, quote: char): string;
            _getClassFile(): tools.classfile.ClassFile;
            _getClassName(index: int): string;
            _getConstantCharValue(c: char): string;
            _getConstantStringValue(s: string): string;
            _getConstantValue(d: tools.classfile.Descriptor, index: int): string;
            _getFieldName(f: tools.classfile.Field): string;
            _getJavaException(attr: tools.classfile.Exceptions_attribute, index: int): string;
            _getJavaFieldType(d: tools.classfile.Descriptor): string;
            _getJavaInterfaceName(cf: tools.classfile.ClassFile, index: int): string;
            _getJavaName(cf: tools.classfile.ClassFile): string;
            _getJavaParameterTypes(d: tools.classfile.Descriptor, flags: tools.classfile.AccessFlags): string;
            _getJavaReturnType(d: tools.classfile.Descriptor): string;
            _getJavaSuperclassName(cf: tools.classfile.ClassFile): string;
            _getMethod(): tools.classfile.Method;
            _getModuleName(index: int): string;
            _getName(m: tools.classfile.Method): string;
            _getPackageName(index: int): string;
            _getSignature(attributes: tools.classfile.Attributes): tools.classfile.Signature_attribute;
            _getSourceFile(attr: tools.classfile.SourceFile_attribute): string;
            _getUTF8Value(index: int): string;
            _getValue(d: tools.classfile.Descriptor): string;
            _setClassFile(cf: tools.classfile.ClassFile): void;
            _setDigest(name: string, digest: byte[]): void;
            _setFile(uri: java.net.URI): void;
            _setFileSize(size: int): void;
            _setLastModified(lastModified: long): void;
            _setMethod(m: tools.classfile.Method): void;
            write(cf: tools.classfile.ClassFile): void;
            _writeDirectives(): void;
            _writeField(f: tools.classfile.Field): void;
            _writeFields(): void;
            _writeList(prefix: string, items: java.util.Collection<any>, suffix: string): void;
            _writeListIfNotEmpty(prefix: string, items: java.util.List<any>, suffix: string): void;
            _writeMethod(m: tools.classfile.Method): void;
            _writeMethods(): void;
            _writeModifiers(items: java.util.Collection<string>): void;
            _attrWriter: AttributeWriter;
            _classFile: tools.classfile.ClassFile;
            _codeWriter: CodeWriter;
            _constantWriter: ConstantWriter;
            _constant_pool: tools.classfile.ConstantPool;
            _digest: byte[];
            _digestName: string;
            _lastModified: long;
            _method: tools.classfile.Method;
            _options: Options;
            _size: int;
            _uri: java.net.URI;
          }
          interface ClassWriter extends CombineTypes<[_ClassWriter, com.sun.tools.javap.BasicWriter]> {}
          interface _ClassWriter$JavaTypePrinter$$static extends ClassLike {
            _new(this$0: ClassWriter, isInterface: boolean): ClassWriter$JavaTypePrinter;
          }
          let ClassWriter$JavaTypePrinter: _ClassWriter$JavaTypePrinter$$static;
          interface _ClassWriter$JavaTypePrinter {
            _append(sb: ClassWriter$JavaTypePrinter$stringBuilder, t: tools.classfile.Type): void;
            _append(sb: ClassWriter$JavaTypePrinter$stringBuilder, prefix: string, list: java.util.List<tools.classfile.Type>, suffix: string): void;
            _appendIfNotEmpty(sb: ClassWriter$JavaTypePrinter$stringBuilder, prefix: string, list: java.util.List<tools.classfile.Type>, suffix: string): void;
            _isEmpty(list: java.util.List<tools.classfile.Type>): boolean;
            _print(t: tools.classfile.Type): string;
            _printTypeArgs(typeParamTypes: java.util.List<tools.classfile.Type$TypeParamType>): string;
            visitArrayType(type: tools.classfile.Type$ArrayType, sb: ClassWriter$JavaTypePrinter$stringBuilder): ClassWriter$JavaTypePrinter$stringBuilder;
            visitArrayType(a0: tools.classfile.Type$ArrayType, a1: any): any;
            visitClassSigType(type: tools.classfile.Type$ClassSigType, sb: ClassWriter$JavaTypePrinter$stringBuilder): ClassWriter$JavaTypePrinter$stringBuilder;
            visitClassSigType(a0: tools.classfile.Type$ClassSigType, a1: any): any;
            visitClassType(type: tools.classfile.Type$ClassType, sb: ClassWriter$JavaTypePrinter$stringBuilder): ClassWriter$JavaTypePrinter$stringBuilder;
            visitClassType(a0: tools.classfile.Type$ClassType, a1: any): any;
            visitMethodType(type: tools.classfile.Type$MethodType, sb: ClassWriter$JavaTypePrinter$stringBuilder): ClassWriter$JavaTypePrinter$stringBuilder;
            visitMethodType(a0: tools.classfile.Type$MethodType, a1: any): any;
            visitSimpleType(type: tools.classfile.Type$SimpleType, sb: ClassWriter$JavaTypePrinter$stringBuilder): ClassWriter$JavaTypePrinter$stringBuilder;
            visitSimpleType(a0: tools.classfile.Type$SimpleType, a1: any): any;
            visitTypeParamType(type: tools.classfile.Type$TypeParamType, sb: ClassWriter$JavaTypePrinter$stringBuilder): ClassWriter$JavaTypePrinter$stringBuilder;
            visitTypeParamType(a0: tools.classfile.Type$TypeParamType, a1: any): any;
            visitWildcardType(type: tools.classfile.Type$WildcardType, sb: ClassWriter$JavaTypePrinter$stringBuilder): ClassWriter$JavaTypePrinter$stringBuilder;
            visitWildcardType(a0: tools.classfile.Type$WildcardType, a1: any): any;
            _isInterface: boolean;
            _this$0: ClassWriter;
          }
          interface ClassWriter$JavaTypePrinter extends CombineTypes<[_ClassWriter$JavaTypePrinter, java.lang.Object, tools.classfile.Type$Visitor<javap$stringBuilder,javap$stringBuilder>]> {}
          interface _CodeWriter$$static extends ClassLike {
            instance(context: Context): CodeWriter;
            _new(context: Context): CodeWriter;
          }
          let CodeWriter: _CodeWriter$$static;
          interface _CodeWriter {
            _getDetailWriters(attr: tools.classfile.Code_attribute): java.util.List<InstructionDetailWriter>;
            _printConstant(index: int): void;
            _write(attr: tools.classfile.Code_attribute, constant_pool: tools.classfile.ConstantPool): void;
            writeExceptionTable(attr: tools.classfile.Code_attribute): void;
            writeInstr(instr: tools.classfile.Instruction): void;
            writeInstrs(attr: tools.classfile.Code_attribute): void;
            writeVerboseHeader(attr: tools.classfile.Code_attribute, constant_pool: tools.classfile.ConstantPool): void;
            _attrWriter: AttributeWriter;
            _classWriter: ClassWriter;
            _constantWriter: ConstantWriter;
            _instructionPrinter: tools.classfile.Instruction$KindVisitor<java.lang.Void,int>;
            _localVariableTableWriter: LocalVariableTableWriter;
            _localVariableTypeTableWriter: LocalVariableTypeTableWriter;
            _options: Options;
            _sourceWriter: SourceWriter;
            _stackMapWriter: StackMapWriter;
            _tryBlockWriter: TryBlockWriter;
            _typeAnnotationWriter: TypeAnnotationWriter;
          }
          interface CodeWriter extends CombineTypes<[_CodeWriter, com.sun.tools.javap.BasicWriter]> {}
          interface _ConstantWriter$$static extends ClassLike {
            _addEscapes(name: string): string;
            _checkName(name: string): string;
            instance(context: Context): ConstantWriter;
            _new(context: Context): ConstantWriter;
          }
          let ConstantWriter: _ConstantWriter$$static;
          interface _ConstantWriter {
            _booleanValue(constant_pool_index: int): string;
            _charValue(constant_pool_index: int): string;
            _cpTagName(cpInfo: tools.classfile.ConstantPool$CPInfo): string;
            _stringValue(constant_pool_index: int): string;
            _stringValue(cpInfo: tools.classfile.ConstantPool$CPInfo): string;
            _tagName(tag: int): string;
            _write(cpx: int): void;
            _writeConstantPool(): void;
            _writeConstantPool(constant_pool: tools.classfile.ConstantPool): void;
            _classWriter: ClassWriter;
            _options: Options;
            _stringValueVisitor: ConstantWriter$StringValueVisitor;
          }
          interface ConstantWriter extends CombineTypes<[_ConstantWriter, com.sun.tools.javap.BasicWriter]> {}
          interface _ConstantWriter$StringValueVisitor$$static extends ClassLike {
          }
          let ConstantWriter$StringValueVisitor: _ConstantWriter$StringValueVisitor$$static;
          interface _ConstantWriter$StringValueVisitor {
            _getCheckedClassName(info: tools.classfile.ConstantPool$CPRefInfo): string;
            _getCheckedName(info: tools.classfile.ConstantPool$CONSTANT_Class_info): string;
            _getCheckedName(info: tools.classfile.ConstantPool$CONSTANT_NameAndType_info): string;
            _getType(info: tools.classfile.ConstantPool$CONSTANT_NameAndType_info): string;
            visit(info: tools.classfile.ConstantPool$CPInfo): string;
            visitClass(info: tools.classfile.ConstantPool$CONSTANT_Class_info, p: java.lang.Void): string;
            visitClass(a0: tools.classfile.ConstantPool$CONSTANT_Class_info, a1: any): any;
            visitDouble(info: tools.classfile.ConstantPool$CONSTANT_Double_info, p: java.lang.Void): string;
            visitDouble(a0: tools.classfile.ConstantPool$CONSTANT_Double_info, a1: any): any;
            visitDynamicConstant(info: tools.classfile.ConstantPool$CONSTANT_Dynamic_info, p: java.lang.Void): string;
            visitDynamicConstant(a0: tools.classfile.ConstantPool$CONSTANT_Dynamic_info, a1: any): any;
            visitFieldref(info: tools.classfile.ConstantPool$CONSTANT_Fieldref_info, p: java.lang.Void): string;
            visitFieldref(a0: tools.classfile.ConstantPool$CONSTANT_Fieldref_info, a1: any): any;
            visitFloat(info: tools.classfile.ConstantPool$CONSTANT_Float_info, p: java.lang.Void): string;
            visitFloat(a0: tools.classfile.ConstantPool$CONSTANT_Float_info, a1: any): any;
            visitInteger(info: tools.classfile.ConstantPool$CONSTANT_Integer_info, p: java.lang.Void): string;
            visitInteger(a0: tools.classfile.ConstantPool$CONSTANT_Integer_info, a1: any): any;
            visitInterfaceMethodref(info: tools.classfile.ConstantPool$CONSTANT_InterfaceMethodref_info, p: java.lang.Void): string;
            visitInterfaceMethodref(a0: tools.classfile.ConstantPool$CONSTANT_InterfaceMethodref_info, a1: any): any;
            visitInvokeDynamic(info: tools.classfile.ConstantPool$CONSTANT_InvokeDynamic_info, p: java.lang.Void): string;
            visitInvokeDynamic(a0: tools.classfile.ConstantPool$CONSTANT_InvokeDynamic_info, a1: any): any;
            visitLong(info: tools.classfile.ConstantPool$CONSTANT_Long_info, p: java.lang.Void): string;
            visitLong(a0: tools.classfile.ConstantPool$CONSTANT_Long_info, a1: any): any;
            visitMethodHandle(info: tools.classfile.ConstantPool$CONSTANT_MethodHandle_info, p: java.lang.Void): string;
            visitMethodHandle(a0: tools.classfile.ConstantPool$CONSTANT_MethodHandle_info, a1: any): any;
            visitMethodType(info: tools.classfile.ConstantPool$CONSTANT_MethodType_info, p: java.lang.Void): string;
            visitMethodType(a0: tools.classfile.ConstantPool$CONSTANT_MethodType_info, a1: any): any;
            visitMethodref(info: tools.classfile.ConstantPool$CONSTANT_Methodref_info, p: java.lang.Void): string;
            visitMethodref(a0: tools.classfile.ConstantPool$CONSTANT_Methodref_info, a1: any): any;
            visitModule(info: tools.classfile.ConstantPool$CONSTANT_Module_info, p: java.lang.Void): string;
            visitModule(a0: tools.classfile.ConstantPool$CONSTANT_Module_info, a1: any): any;
            visitNameAndType(info: tools.classfile.ConstantPool$CONSTANT_NameAndType_info, p: java.lang.Void): string;
            visitNameAndType(a0: tools.classfile.ConstantPool$CONSTANT_NameAndType_info, a1: any): any;
            visitPackage(info: tools.classfile.ConstantPool$CONSTANT_Package_info, p: java.lang.Void): string;
            visitPackage(a0: tools.classfile.ConstantPool$CONSTANT_Package_info, a1: any): any;
            _visitRef(info: tools.classfile.ConstantPool$CPRefInfo, p: java.lang.Void): string;
            visitString(info: tools.classfile.ConstantPool$CONSTANT_String_info, p: java.lang.Void): string;
            visitString(a0: tools.classfile.ConstantPool$CONSTANT_String_info, a1: any): any;
            visitUtf8(info: tools.classfile.ConstantPool$CONSTANT_Utf8_info, p: java.lang.Void): string;
            visitUtf8(a0: tools.classfile.ConstantPool$CONSTANT_Utf8_info, a1: any): any;
            _this$0: ConstantWriter;
          }
          interface ConstantWriter$StringValueVisitor extends CombineTypes<[_ConstantWriter$StringValueVisitor, tools.classfile.ConstantPool$Visitor<string,java.lang.Void>, java.lang.Object]> {}
          interface _Context$$static extends ClassLike {
            new(): Context;
          }
          let Context: _Context$$static;
          interface _Context {
            get<T>(key: java.lang.Class<T>): T;
            put<T>(key: java.lang.Class<T>, value: T): T;
            _map: java.util.Map<java.lang.Class<any>,any>;
          }
          interface Context extends CombineTypes<[_Context, java.lang.Object]> {}
          interface _DisassemblerTool$$static extends ClassLike {
          }
          let DisassemblerTool: _DisassemblerTool$$static;
          interface _DisassemblerTool {
            getStandardFileManager(a0: javax.tools.DiagnosticListener<javax.tools.JavaFileObject>, a1: java.util.Locale, a2: java.nio.charset.Charset): javax.tools.StandardJavaFileManager;
            getTask(a0: java.io.Writer, a1: javax.tools.JavaFileManager, a2: javax.tools.DiagnosticListener<javax.tools.JavaFileObject>, a3: java.lang.Iterable<string>, a4: java.lang.Iterable<string>): DisassemblerTool$DisassemblerTask;
          }
          interface DisassemblerTool extends CombineTypes<[_DisassemblerTool, javax.tools.OptionChecker, javax.tools.Tool, java.lang.Object]> {}
          interface _DisassemblerTool$DisassemblerTask$$static extends ClassLike {
          }
          let DisassemblerTool$DisassemblerTask: _DisassemblerTool$DisassemblerTask$$static;
          interface _DisassemblerTool$DisassemblerTask {
            call(): boolean;
            call(): any;
            setLocale(a0: java.util.Locale): void;
          }
          interface DisassemblerTool$DisassemblerTask extends CombineTypes<[_DisassemblerTool$DisassemblerTask, java.util.concurrent.Callable<boolean>, java.lang.Object]> {}
          interface _InstructionDetailWriter$$static extends ClassLike {
            _new(context: Context): InstructionDetailWriter;
          }
          let InstructionDetailWriter: _InstructionDetailWriter$$static;
          interface _InstructionDetailWriter {
            _flush(): void;
            _writeDetails(a0: tools.classfile.Instruction): void;
(a0: tools.classfile.Instruction): void;
          }
          interface InstructionDetailWriter extends CombineTypes<[_InstructionDetailWriter, com.sun.tools.javap.BasicWriter]> {}
          interface _InstructionDetailWriter$Kind$$static extends ClassLike {
            valueOf(name: string): InstructionDetailWriter$Kind;
            values(): InstructionDetailWriter$Kind[];
            readonly LOCAL_VARS: InstructionDetailWriter$Kind;
            readonly LOCAL_VAR_TYPES: InstructionDetailWriter$Kind;
            readonly SOURCE: InstructionDetailWriter$Kind;
            readonly STACKMAPS: InstructionDetailWriter$Kind;
            readonly TRY_BLOCKS: InstructionDetailWriter$Kind;
            readonly TYPE_ANNOS: InstructionDetailWriter$Kind;
          }
          let InstructionDetailWriter$Kind: _InstructionDetailWriter$Kind$$static;
          interface _InstructionDetailWriter$Kind {
            _option: string;
          }
          interface InstructionDetailWriter$Kind extends CombineTypes<[_InstructionDetailWriter$Kind]> {}
          interface _InternalError$$static extends ClassLike {
            _serialVersionUID: long;
            _new(t: java.lang.Throwable, args: any[]): InternalError;
            _new(t: java.lang.Throwable, ...args: any[]): InternalError;
            _new(args: any[]): InternalError;
            _new(...args: any[]): InternalError;
          }
          let InternalError: _InternalError$$static;
          interface _InternalError {
            readonly args: any[];
          }
          interface InternalError extends CombineTypes<[_InternalError, java.lang.Error]> {}
          interface _JavapFileManager$$static extends ClassLike {
            create(dl: javax.tools.DiagnosticListener<javax.tools.JavaFileObject>, log: java.io.PrintWriter): JavapFileManager;
          }
          let JavapFileManager: _JavapFileManager$$static;
          interface _JavapFileManager {
          }
          interface JavapFileManager extends CombineTypes<[_JavapFileManager, com.sun.tools.javac.file.JavacFileManager]> {}
          interface _JavapTask$$static extends ClassLike {
            _getPrintWriterForStream(s: java.io.OutputStream): java.io.PrintWriter;
            _getPrintWriterForWriter(w: java.io.Writer): java.io.PrintWriter;
            _EXIT_ABNORMAL: int;
            _EXIT_CMDERR: int;
            _EXIT_ERROR: int;
            _EXIT_OK: int;
            _EXIT_SYSERR: int;
            _nl: string;
            _progname: string;
            _recognizedOptions: JavapTask$Option[];
            _versionRB: java.util.ResourceBundle;
            _versionRBName: string;
            new(): JavapTask;
            new(out: java.io.Writer, fileManager: javax.tools.JavaFileManager, diagnosticListener: javax.tools.DiagnosticListener<javax.tools.JavaFileObject>): JavapTask;
            new(out: java.io.Writer, fileManager: javax.tools.JavaFileManager, diagnosticListener: javax.tools.DiagnosticListener<javax.tools.JavaFileObject>, options: java.lang.Iterable<string>, classes: java.lang.Iterable<string>): JavapTask;
          }
          let JavapTask: _JavapTask$$static;
          interface _JavapTask {
            call(): boolean;
            call(): any;
            _createDiagnostic(kind: javax.tools.Diagnostic$Kind, key: string, args: any[]): javax.tools.Diagnostic<javax.tools.JavaFileObject>;
            _createDiagnostic(kind: javax.tools.Diagnostic$Kind, key: string, ...args: any[]): javax.tools.Diagnostic<javax.tools.JavaFileObject>;
            _findModule(moduleName: string): javax.tools.JavaFileManager$Location;
            _getClassFileObject(className: string): javax.tools.JavaFileObject;
            _getDefaultFileManager(dl: javax.tools.DiagnosticListener<javax.tools.JavaFileObject>, log: java.io.PrintWriter): javax.tools.JavaFileManager;
            _getDiagnosticListenerForStream(s: java.io.OutputStream): javax.tools.DiagnosticListener<javax.tools.JavaFileObject>;
            _getDiagnosticListenerForWriter(w: java.io.Writer): javax.tools.DiagnosticListener<javax.tools.JavaFileObject>;
            getMessage(key: string, args: any[]): string;
            getMessage(key: string, ...args: any[]): string;
            getMessage(locale: java.util.Locale, key: string, args: any[]): string;
            getMessage(locale: java.util.Locale, key: string, ...args: any[]): string;
            _handleOption(name: string, rest: java.util.Iterator<string>): void;
            handleOptions(args: string[]): void;
            _handleOptions(args: java.lang.Iterable<string>, allowClasses: boolean): void;
            _open(className: string): javax.tools.JavaFileObject;
            _printLines(msg: string): void;
            read(fo: javax.tools.JavaFileObject): JavapTask$ClassFileInfo;
            _reportError(key: string, args: any[]): void;
            _reportError(key: string, ...args: any[]): void;
            _reportNote(key: string, args: any[]): void;
            _reportNote(key: string, ...args: any[]): void;
            _reportWarning(key: string, args: any[]): void;
            _reportWarning(key: string, ...args: any[]): void;
            _run(args: string[]): int;
            run(): int;
            _setClassFile(classFile: tools.classfile.ClassFile): void;
            setDiagnosticListener(dl: javax.tools.DiagnosticListener<javax.tools.JavaFileObject>): void;
            setDiagnosticListener(s: java.io.OutputStream): void;
            setLocale(locale: java.util.Locale): void;
            setLog(log: java.io.Writer): void;
            setLog(s: java.io.OutputStream): void;
            _setMethod(enclosingMethod: tools.classfile.Method): void;
            _showHelp(): void;
            _showVersion(full: boolean): void;
            _version(key: string): string;
            write(info: JavapTask$ClassFileInfo): void;
            _write(value: tools.classfile.Attribute): void;
            _write(attrs: tools.classfile.Attributes): void;
            _write(constant_pool: tools.classfile.ConstantPool): void;
            _write(constant_pool: tools.classfile.ConstantPool, value: int): void;
            _write(value: tools.classfile.ConstantPool$CPInfo): void;
            _write(value: tools.classfile.Field): void;
            _write(value: tools.classfile.Method): void;
            _writeClass(classWriter: ClassWriter, className: string): int;
            _attributeFactory: tools.classfile.Attribute$Factory;
            _bundles: java.util.Map<java.util.Locale,java.util.ResourceBundle>;
            _classes: java.util.List<string>;
            _context: Context;
            _defaultFileManager: javax.tools.JavaFileManager;
            _diagnosticListener: javax.tools.DiagnosticListener<javax.tools.JavaFileObject>;
            _fileManager: javax.tools.JavaFileManager;
            _log: java.io.PrintWriter;
            _moduleLocation: javax.tools.JavaFileManager$Location;
            _options: Options;
            _task_locale: java.util.Locale;
          }
          interface JavapTask extends CombineTypes<[_JavapTask, com.sun.tools.javap.Messages, java.lang.Object, com.sun.tools.javap.DisassemblerTool$DisassemblerTask]> {}
          interface _JavapTask$BadArgs$$static extends ClassLike {
            _serialVersionUID: long;
            _new(this$0: JavapTask, key: string, args: any[]): JavapTask$BadArgs;
            _new(this$0: JavapTask, key: string, ...args: any[]): JavapTask$BadArgs;
          }
          let JavapTask$BadArgs: _JavapTask$BadArgs$$static;
          interface _JavapTask$BadArgs {
            _showUsage(b: boolean): JavapTask$BadArgs;
            _args: any[];
            _key: string;
            _showUsage: boolean;
            _this$0: JavapTask;
          }
          interface JavapTask$BadArgs extends CombineTypes<[_JavapTask$BadArgs, java.lang.Exception]> {}
          interface _JavapTask$ClassFileInfo$$static extends ClassLike {
            _new(fo: javax.tools.JavaFileObject, cf: tools.classfile.ClassFile, digest: byte[], size: int): JavapTask$ClassFileInfo;
          }
          let JavapTask$ClassFileInfo: _JavapTask$ClassFileInfo$$static;
          interface _JavapTask$ClassFileInfo {
            readonly cf: tools.classfile.ClassFile;
            readonly digest: byte[];
            readonly fo: javax.tools.JavaFileObject;
            readonly size: int;
          }
          interface JavapTask$ClassFileInfo extends CombineTypes<[_JavapTask$ClassFileInfo, java.lang.Object]> {}
          interface _JavapTask$Option$$static extends ClassLike {
            _new(hasArg: boolean, aliases: string[]): JavapTask$Option;
            _new(hasArg: boolean, ...aliases: string[]): JavapTask$Option;
          }
          let JavapTask$Option: _JavapTask$Option$$static;
          interface _JavapTask$Option {
            _ignoreRest(): boolean;
            _matches(opt: string): boolean;
            _process(a0: JavapTask, a1: string, a2: string): void;
(a0: JavapTask, a1: string, a2: string): void;
            _aliases: string[];
            _hasArg: boolean;
          }
          interface JavapTask$Option extends CombineTypes<[_JavapTask$Option, java.lang.Object]> {}
          interface _JavapTask$SizeInputStream$$static extends ClassLike {
            _new(_in: java.io.InputStream): JavapTask$SizeInputStream;
          }
          let JavapTask$SizeInputStream: _JavapTask$SizeInputStream$$static;
          interface _JavapTask$SizeInputStream {
            read(buf: byte[], offset: int, length: int): int;
            read(): int;
            _size(): int;
            _size: int;
          }
          interface JavapTask$SizeInputStream extends CombineTypes<[_JavapTask$SizeInputStream, java.io.FilterInputStream]> {}
          interface _LocalVariableTableWriter$$static extends ClassLike {
            _instance(context: Context): LocalVariableTableWriter;
            _new(context: Context): LocalVariableTableWriter;
          }
          let LocalVariableTableWriter: _LocalVariableTableWriter$$static;
          interface _LocalVariableTableWriter {
            flush(): void;
            _put(pc: int, entry: tools.classfile.LocalVariableTable_attribute$Entry): void;
            reset(attr: tools.classfile.Code_attribute): void;
            writeDetails(instr: tools.classfile.Instruction): void;
            writeLocalVariables(pc: int, kind: LocalVariableTableWriter$NoteKind): void;
            _classWriter: ClassWriter;
            _codeAttr: tools.classfile.Code_attribute;
            _pcMap: java.util.Map<int,java.util.List<tools.classfile.LocalVariableTable_attribute$Entry>>;
          }
          interface LocalVariableTableWriter extends CombineTypes<[_LocalVariableTableWriter, com.sun.tools.javap.InstructionDetailWriter]> {}
          interface _LocalVariableTableWriter$NoteKind$$static extends ClassLike {
            valueOf(name: string): LocalVariableTableWriter$NoteKind;
            values(): LocalVariableTableWriter$NoteKind[];
            readonly END: LocalVariableTableWriter$NoteKind;
            readonly START: LocalVariableTableWriter$NoteKind;
          }
          let LocalVariableTableWriter$NoteKind: _LocalVariableTableWriter$NoteKind$$static;
          interface _LocalVariableTableWriter$NoteKind {
            match(a0: tools.classfile.LocalVariableTable_attribute$Entry, a1: int): boolean;
(a0: tools.classfile.LocalVariableTable_attribute$Entry, a1: int): boolean;
            readonly text: string;
          }
          interface LocalVariableTableWriter$NoteKind extends CombineTypes<[_LocalVariableTableWriter$NoteKind]> {}
          interface _LocalVariableTypeTableWriter$$static extends ClassLike {
            _instance(context: Context): LocalVariableTypeTableWriter;
            _new(context: Context): LocalVariableTypeTableWriter;
          }
          let LocalVariableTypeTableWriter: _LocalVariableTypeTableWriter$$static;
          interface _LocalVariableTypeTableWriter {
            flush(): void;
            _put(pc: int, entry: tools.classfile.LocalVariableTypeTable_attribute$Entry): void;
            reset(attr: tools.classfile.Code_attribute): void;
            writeDetails(instr: tools.classfile.Instruction): void;
            writeLocalVariables(pc: int, kind: LocalVariableTypeTableWriter$NoteKind): void;
            _classWriter: ClassWriter;
            _codeAttr: tools.classfile.Code_attribute;
            _pcMap: java.util.Map<int,java.util.List<tools.classfile.LocalVariableTypeTable_attribute$Entry>>;
          }
          interface LocalVariableTypeTableWriter extends CombineTypes<[_LocalVariableTypeTableWriter, com.sun.tools.javap.InstructionDetailWriter]> {}
          interface _LocalVariableTypeTableWriter$NoteKind$$static extends ClassLike {
            valueOf(name: string): LocalVariableTypeTableWriter$NoteKind;
            values(): LocalVariableTypeTableWriter$NoteKind[];
            readonly END: LocalVariableTypeTableWriter$NoteKind;
            readonly START: LocalVariableTypeTableWriter$NoteKind;
          }
          let LocalVariableTypeTableWriter$NoteKind: _LocalVariableTypeTableWriter$NoteKind$$static;
          interface _LocalVariableTypeTableWriter$NoteKind {
            match(a0: tools.classfile.LocalVariableTypeTable_attribute$Entry, a1: int): boolean;
(a0: tools.classfile.LocalVariableTypeTable_attribute$Entry, a1: int): boolean;
            readonly text: string;
          }
          interface LocalVariableTypeTableWriter$NoteKind extends CombineTypes<[_LocalVariableTypeTableWriter$NoteKind]> {}
          interface _Main$$static extends ClassLike {
            main(args: string[]): void;
            run(args: string[], out: java.io.PrintWriter): int;
            new(): Main;
          }
          let Main: _Main$$static;
          interface _Main {
          }
          interface Main extends CombineTypes<[_Main, java.lang.Object]> {}
          interface _Main$JavapToolProvider$$static extends ClassLike {
            new(): Main$JavapToolProvider;
          }
          let Main$JavapToolProvider: _Main$JavapToolProvider$$static;
          interface _Main$JavapToolProvider {
            description(): java.util.Optional<string>;
            name(): string;
            run(out: java.io.PrintWriter, err: java.io.PrintWriter, args: string[]): int;
            run(out: java.io.PrintWriter, err: java.io.PrintWriter, ...args: string[]): int;
          }
          interface Main$JavapToolProvider extends CombineTypes<[_Main$JavapToolProvider, java.lang.Object, java.util.spi.ToolProvider]> {}
          interface _Messages$$static extends ClassLike {
          }
          let Messages: _Messages$$static;
          interface _Messages {
            getMessage(a0: string, a1: any[]): string;
            getMessage(a0: string, ...a1: any[]): string;
            getMessage(a0: java.util.Locale, a1: string, a2: any[]): string;
            getMessage(a0: java.util.Locale, a1: string, ...a2: any[]): string;
          }
          interface Messages extends CombineTypes<[_Messages, java.lang.Object]> {}
          interface _Options$$static extends ClassLike {
            instance(context: Context): Options;
            _new(context: Context): Options;
          }
          let Options: _Options$$static;
          interface _Options {
            checkAccess(flags: tools.classfile.AccessFlags): boolean;
            accessOptions: java.util.Set<string>;
            details: java.util.Set<InstructionDetailWriter$Kind>;
            fullVersion: boolean;
            help: boolean;
            indentWidth: int;
            moduleName: string;
            showAccess: int;
            showAllAttrs: boolean;
            showConstants: boolean;
            showDescriptors: boolean;
            showDisassembled: boolean;
            showFlags: boolean;
            showInnerClasses: boolean;
            showLineAndLocalVariableTables: boolean;
            sysInfo: boolean;
            tabColumn: int;
            verbose: boolean;
            version: boolean;
          }
          interface Options extends CombineTypes<[_Options, java.lang.Object]> {}
          interface _SourceWriter$$static extends ClassLike {
            _instance(context: Context): SourceWriter;
            _splitLines(text: string): string[];
            _new(context: Context): SourceWriter;
          }
          let SourceWriter: _SourceWriter$$static;
          interface _SourceWriter {
            hasSource(): boolean;
            _nextLine(line: int): int;
            _readSource(cf: tools.classfile.ClassFile): string;
            reset(cf: tools.classfile.ClassFile, attr: tools.classfile.Code_attribute): void;
            _setFileManager(fileManager: javax.tools.JavaFileManager): void;
            _setLineMap(attr: tools.classfile.Code_attribute): void;
            _setSource(cf: tools.classfile.ClassFile): void;
            writeDetails(instr: tools.classfile.Instruction): void;
            _classFile: tools.classfile.ClassFile;
            _fileManager: javax.tools.JavaFileManager;
            _lineList: java.util.List<int>;
            _lineMap: java.util.SortedMap<int,java.util.SortedSet<int>>;
            _sourceLines: string[];
          }
          interface SourceWriter extends CombineTypes<[_SourceWriter, com.sun.tools.javap.InstructionDetailWriter]> {}
          interface _StackMapWriter$$static extends ClassLike {
            _instance(context: Context): StackMapWriter;
            _new(context: Context): StackMapWriter;
          }
          let StackMapWriter: _StackMapWriter$$static;
          interface _StackMapWriter {
            _print(label: string, entries: tools.classfile.StackMapTable_attribute$verification_type_info[]): void;
            _print(entry: tools.classfile.StackMapTable_attribute$verification_type_info): void;
            reset(attr: tools.classfile.Code_attribute): void;
            _setStackMap(attr: tools.classfile.StackMapTable_attribute): void;
            writeDetails(instr: tools.classfile.Instruction): void;
            _writeDetails(pc: int): void;
            writeInitialDetails(): void;
            _classWriter: ClassWriter;
            _empty: tools.classfile.StackMapTable_attribute$verification_type_info[];
            _map: java.util.Map<int,StackMapWriter$StackMap>;
          }
          interface StackMapWriter extends CombineTypes<[_StackMapWriter, com.sun.tools.javap.InstructionDetailWriter]> {}
          interface _StackMapWriter$CustomVerificationTypeInfo$$static extends ClassLike {
            new(text: string): StackMapWriter$CustomVerificationTypeInfo;
          }
          let StackMapWriter$CustomVerificationTypeInfo: _StackMapWriter$CustomVerificationTypeInfo$$static;
          interface _StackMapWriter$CustomVerificationTypeInfo {
            _text: string;
          }
          interface StackMapWriter$CustomVerificationTypeInfo extends CombineTypes<[_StackMapWriter$CustomVerificationTypeInfo, com.sun.tools.classfile.StackMapTable_attribute$verification_type_info]> {}
          interface _StackMapWriter$StackMap$$static extends ClassLike {
            _new(locals: tools.classfile.StackMapTable_attribute$verification_type_info[], stack: tools.classfile.StackMapTable_attribute$verification_type_info[]): StackMapWriter$StackMap;
          }
          let StackMapWriter$StackMap: _StackMapWriter$StackMap$$static;
          interface _StackMapWriter$StackMap {
            _locals: tools.classfile.StackMapTable_attribute$verification_type_info[];
            _stack: tools.classfile.StackMapTable_attribute$verification_type_info[];
          }
          interface StackMapWriter$StackMap extends CombineTypes<[_StackMapWriter$StackMap, java.lang.Object]> {}
          interface _StackMapWriter$StackMapBuilder$$static extends ClassLike {
            _new(this$0: StackMapWriter): StackMapWriter$StackMapBuilder;
          }
          let StackMapWriter$StackMapBuilder: _StackMapWriter$StackMapBuilder$$static;
          interface _StackMapWriter$StackMapBuilder {
            visit_append_frame(frame: tools.classfile.StackMapTable_attribute$append_frame, pc: int): int;
            visit_append_frame(a0: tools.classfile.StackMapTable_attribute$append_frame, a1: any): any;
            visit_chop_frame(frame: tools.classfile.StackMapTable_attribute$chop_frame, pc: int): int;
            visit_chop_frame(a0: tools.classfile.StackMapTable_attribute$chop_frame, a1: any): any;
            visit_full_frame(frame: tools.classfile.StackMapTable_attribute$full_frame, pc: int): int;
            visit_full_frame(a0: tools.classfile.StackMapTable_attribute$full_frame, a1: any): any;
            visit_same_frame(frame: tools.classfile.StackMapTable_attribute$same_frame, pc: int): int;
            visit_same_frame(a0: tools.classfile.StackMapTable_attribute$same_frame, a1: any): any;
            visit_same_frame_extended(frame: tools.classfile.StackMapTable_attribute$same_frame_extended, pc: int): int;
            visit_same_frame_extended(a0: tools.classfile.StackMapTable_attribute$same_frame_extended, a1: any): any;
            visit_same_locals_1_stack_item_frame(frame: tools.classfile.StackMapTable_attribute$same_locals_1_stack_item_frame, pc: int): int;
            visit_same_locals_1_stack_item_frame(a0: tools.classfile.StackMapTable_attribute$same_locals_1_stack_item_frame, a1: any): any;
            visit_same_locals_1_stack_item_frame_extended(frame: tools.classfile.StackMapTable_attribute$same_locals_1_stack_item_frame_extended, pc: int): int;
            visit_same_locals_1_stack_item_frame_extended(a0: tools.classfile.StackMapTable_attribute$same_locals_1_stack_item_frame_extended, a1: any): any;
            _this$0: StackMapWriter;
          }
          interface StackMapWriter$StackMapBuilder extends CombineTypes<[_StackMapWriter$StackMapBuilder, tools.classfile.StackMapTable_attribute$stack_map_frame$Visitor<int,int>, java.lang.Object]> {}
          interface _TryBlockWriter$$static extends ClassLike {
            _instance(context: Context): TryBlockWriter;
            _new(context: Context): TryBlockWriter;
          }
          let TryBlockWriter: _TryBlockWriter$$static;
          interface _TryBlockWriter {
            _put(pc: int, entry: tools.classfile.Code_attribute$Exception_data): void;
            reset(attr: tools.classfile.Code_attribute): void;
            writeDetails(instr: tools.classfile.Instruction): void;
            writeTrys(instr: tools.classfile.Instruction, kind: TryBlockWriter$NoteKind): void;
            _constantWriter: ConstantWriter;
            _indexMap: java.util.Map<tools.classfile.Code_attribute$Exception_data,int>;
            _pcMap: java.util.Map<int,java.util.List<tools.classfile.Code_attribute$Exception_data>>;
          }
          interface TryBlockWriter extends CombineTypes<[_TryBlockWriter, com.sun.tools.javap.InstructionDetailWriter]> {}
          interface _TryBlockWriter$NoteKind$$static extends ClassLike {
            valueOf(name: string): TryBlockWriter$NoteKind;
            values(): TryBlockWriter$NoteKind[];
            readonly END: TryBlockWriter$NoteKind;
            readonly HANDLER: TryBlockWriter$NoteKind;
            readonly START: TryBlockWriter$NoteKind;
          }
          let TryBlockWriter$NoteKind: _TryBlockWriter$NoteKind$$static;
          interface _TryBlockWriter$NoteKind {
            match(a0: tools.classfile.Code_attribute$Exception_data, a1: int): boolean;
(a0: tools.classfile.Code_attribute$Exception_data, a1: int): boolean;
            readonly text: string;
          }
          interface TryBlockWriter$NoteKind extends CombineTypes<[_TryBlockWriter$NoteKind]> {}
          interface _TypeAnnotationWriter$$static extends ClassLike {
            _instance(context: Context): TypeAnnotationWriter;
            _new(context: Context): TypeAnnotationWriter;
          }
          let TypeAnnotationWriter: _TypeAnnotationWriter$$static;
          interface _TypeAnnotationWriter {
            _addNote(pc: int, note: TypeAnnotationWriter$Note): void;
            _check(kind: TypeAnnotationWriter$NoteKind, attr: tools.classfile.RuntimeTypeAnnotations_attribute): void;
            reset(attr: tools.classfile.Code_attribute): void;
            _writeDetails(instr: tools.classfile.Instruction): void;
            _annotationWriter: AnnotationWriter;
            _classWriter: ClassWriter;
            _pcMap: java.util.Map<int,java.util.List<TypeAnnotationWriter$Note>>;
          }
          interface TypeAnnotationWriter extends CombineTypes<[_TypeAnnotationWriter, com.sun.tools.javap.InstructionDetailWriter]> {}
          interface _TypeAnnotationWriter$Note$$static extends ClassLike {
            _new(kind: TypeAnnotationWriter$NoteKind, anno: tools.classfile.TypeAnnotation): TypeAnnotationWriter$Note;
          }
          let TypeAnnotationWriter$Note: _TypeAnnotationWriter$Note$$static;
          interface _TypeAnnotationWriter$Note {
            readonly anno: tools.classfile.TypeAnnotation;
            readonly kind: TypeAnnotationWriter$NoteKind;
          }
          interface TypeAnnotationWriter$Note extends CombineTypes<[_TypeAnnotationWriter$Note, java.lang.Object]> {}
          interface _TypeAnnotationWriter$NoteKind$$static extends ClassLike {
            valueOf(name: string): TypeAnnotationWriter$NoteKind;
            values(): TypeAnnotationWriter$NoteKind[];
            readonly INVISIBLE: TypeAnnotationWriter$NoteKind;
            readonly VISIBLE: TypeAnnotationWriter$NoteKind;
          }
          let TypeAnnotationWriter$NoteKind: _TypeAnnotationWriter$NoteKind$$static;
          interface _TypeAnnotationWriter$NoteKind {
          }
          interface TypeAnnotationWriter$NoteKind extends CombineTypes<[_TypeAnnotationWriter$NoteKind]> {}
        }
        module jdeprscan {
          module resources {
            interface _jdeprscan$$static extends ClassLike {
              new(): jdeprscan;
            }
            let jdeprscan: _jdeprscan$$static;
            interface _jdeprscan {
              _getContents(): any[][];
            }
            interface jdeprscan extends CombineTypes<[_jdeprscan, java.util.ListResourceBundle]> {}
            interface _jdeprscan_de$$static extends ClassLike {
              new(): jdeprscan_de;
            }
            let jdeprscan_de: _jdeprscan_de$$static;
            interface _jdeprscan_de {
              _getContents(): any[][];
            }
            interface jdeprscan_de extends CombineTypes<[_jdeprscan_de, java.util.ListResourceBundle]> {}
            interface _jdeprscan_ja$$static extends ClassLike {
              new(): jdeprscan_ja;
            }
            let jdeprscan_ja: _jdeprscan_ja$$static;
            interface _jdeprscan_ja {
              _getContents(): any[][];
            }
            interface jdeprscan_ja extends CombineTypes<[_jdeprscan_ja, java.util.ListResourceBundle]> {}
            interface _jdeprscan_zh_CN$$static extends ClassLike {
              new(): jdeprscan_zh_CN;
            }
            let jdeprscan_zh_CN: _jdeprscan_zh_CN$$static;
            interface _jdeprscan_zh_CN {
              _getContents(): any[][];
            }
            interface jdeprscan_zh_CN extends CombineTypes<[_jdeprscan_zh_CN, java.util.ListResourceBundle]> {}
          }
          module scan {
            interface _CPEntries$$static extends ClassLike {
              loadFrom(cf: tools.classfile.ClassFile): CPEntries;
              _new(): CPEntries;
            }
            let CPEntries: _CPEntries$$static;
            interface _CPEntries {
              toString(): string;
              _classes: java.util.List<tools.classfile.ConstantPool$CONSTANT_Class_info>;
              _fieldRefs: java.util.List<tools.classfile.ConstantPool$CONSTANT_Fieldref_info>;
              _intfMethodRefs: java.util.List<tools.classfile.ConstantPool$CONSTANT_InterfaceMethodref_info>;
              _methodRefs: java.util.List<tools.classfile.ConstantPool$CONSTANT_Methodref_info>;
            }
            interface CPEntries extends CombineTypes<[_CPEntries, java.lang.Object]> {}
            interface _CPSelector$$static extends ClassLike {
              _new(): CPSelector;
            }
            let CPSelector: _CPSelector$$static;
            interface _CPSelector {
              visitClass(info: tools.classfile.ConstantPool$CONSTANT_Class_info, p: CPEntries): java.lang.Void;
              visitClass(a0: tools.classfile.ConstantPool$CONSTANT_Class_info, a1: any): any;
              visitDouble(info: tools.classfile.ConstantPool$CONSTANT_Double_info, p: CPEntries): java.lang.Void;
              visitDouble(a0: tools.classfile.ConstantPool$CONSTANT_Double_info, a1: any): any;
              visitDynamicConstant(info: tools.classfile.ConstantPool$CONSTANT_Dynamic_info, p: CPEntries): java.lang.Void;
              visitDynamicConstant(a0: tools.classfile.ConstantPool$CONSTANT_Dynamic_info, a1: any): any;
              visitFieldref(info: tools.classfile.ConstantPool$CONSTANT_Fieldref_info, p: CPEntries): java.lang.Void;
              visitFieldref(a0: tools.classfile.ConstantPool$CONSTANT_Fieldref_info, a1: any): any;
              visitFloat(info: tools.classfile.ConstantPool$CONSTANT_Float_info, p: CPEntries): java.lang.Void;
              visitFloat(a0: tools.classfile.ConstantPool$CONSTANT_Float_info, a1: any): any;
              visitInteger(info: tools.classfile.ConstantPool$CONSTANT_Integer_info, p: CPEntries): java.lang.Void;
              visitInteger(a0: tools.classfile.ConstantPool$CONSTANT_Integer_info, a1: any): any;
              visitInterfaceMethodref(info: tools.classfile.ConstantPool$CONSTANT_InterfaceMethodref_info, p: CPEntries): java.lang.Void;
              visitInterfaceMethodref(a0: tools.classfile.ConstantPool$CONSTANT_InterfaceMethodref_info, a1: any): any;
              visitInvokeDynamic(info: tools.classfile.ConstantPool$CONSTANT_InvokeDynamic_info, p: CPEntries): java.lang.Void;
              visitInvokeDynamic(a0: tools.classfile.ConstantPool$CONSTANT_InvokeDynamic_info, a1: any): any;
              visitLong(info: tools.classfile.ConstantPool$CONSTANT_Long_info, p: CPEntries): java.lang.Void;
              visitLong(a0: tools.classfile.ConstantPool$CONSTANT_Long_info, a1: any): any;
              visitMethodHandle(info: tools.classfile.ConstantPool$CONSTANT_MethodHandle_info, p: CPEntries): java.lang.Void;
              visitMethodHandle(a0: tools.classfile.ConstantPool$CONSTANT_MethodHandle_info, a1: any): any;
              visitMethodType(info: tools.classfile.ConstantPool$CONSTANT_MethodType_info, p: CPEntries): java.lang.Void;
              visitMethodType(a0: tools.classfile.ConstantPool$CONSTANT_MethodType_info, a1: any): any;
              visitMethodref(info: tools.classfile.ConstantPool$CONSTANT_Methodref_info, p: CPEntries): java.lang.Void;
              visitMethodref(a0: tools.classfile.ConstantPool$CONSTANT_Methodref_info, a1: any): any;
              visitModule(info: tools.classfile.ConstantPool$CONSTANT_Module_info, p: CPEntries): java.lang.Void;
              visitModule(a0: tools.classfile.ConstantPool$CONSTANT_Module_info, a1: any): any;
              visitNameAndType(info: tools.classfile.ConstantPool$CONSTANT_NameAndType_info, p: CPEntries): java.lang.Void;
              visitNameAndType(a0: tools.classfile.ConstantPool$CONSTANT_NameAndType_info, a1: any): any;
              visitPackage(info: tools.classfile.ConstantPool$CONSTANT_Package_info, p: CPEntries): java.lang.Void;
              visitPackage(a0: tools.classfile.ConstantPool$CONSTANT_Package_info, a1: any): any;
              visitString(info: tools.classfile.ConstantPool$CONSTANT_String_info, p: CPEntries): java.lang.Void;
              visitString(a0: tools.classfile.ConstantPool$CONSTANT_String_info, a1: any): any;
              visitUtf8(info: tools.classfile.ConstantPool$CONSTANT_Utf8_info, p: CPEntries): java.lang.Void;
              visitUtf8(a0: tools.classfile.ConstantPool$CONSTANT_Utf8_info, a1: any): any;
            }
            interface CPSelector extends CombineTypes<[_CPSelector, java.lang.Object, tools.classfile.ConstantPool$Visitor<java.lang.Void,CPEntries>]> {}
            interface _ClassFinder$$static extends ClassLike {
              new(verbose: boolean): ClassFinder;
            }
            let ClassFinder: _ClassFinder$$static;
            interface _ClassFinder {
              addDir(dirName: string): void;
              addJar(jarName: string): void;
              addJrt(): void;
              find(className: string): tools.classfile.ClassFile;
              _list: java.util.List<ClassFinder$PathEntry>;
              _verbose: boolean;
            }
            interface ClassFinder extends CombineTypes<[_ClassFinder, java.lang.Object]> {}
            interface _ClassFinder$DirPathEntry$$static extends ClassLike {
              _new(this$0: ClassFinder, dir: java.nio.file.Path): ClassFinder$DirPathEntry;
            }
            let ClassFinder$DirPathEntry: _ClassFinder$DirPathEntry$$static;
            interface _ClassFinder$DirPathEntry {
              find(className: string): tools.classfile.ClassFile;
              _dir: java.nio.file.Path;
              _this$0: ClassFinder;
            }
            interface ClassFinder$DirPathEntry extends CombineTypes<[_ClassFinder$DirPathEntry, com.sun.tools.jdeprscan.scan.ClassFinder$PathEntry, java.lang.Object]> {}
            interface _ClassFinder$JarPathEntry$$static extends ClassLike {
              _new(this$0: ClassFinder, jf: java.util.jar.JarFile): ClassFinder$JarPathEntry;
            }
            let ClassFinder$JarPathEntry: _ClassFinder$JarPathEntry$$static;
            interface _ClassFinder$JarPathEntry {
              find(className: string): tools.classfile.ClassFile;
              _jarFile: java.util.jar.JarFile;
              _this$0: ClassFinder;
            }
            interface ClassFinder$JarPathEntry extends CombineTypes<[_ClassFinder$JarPathEntry, com.sun.tools.jdeprscan.scan.ClassFinder$PathEntry, java.lang.Object]> {}
            interface _ClassFinder$JrtPathEntry$$static extends ClassLike {
              _new(this$0: ClassFinder): ClassFinder$JrtPathEntry;
            }
            let ClassFinder$JrtPathEntry: _ClassFinder$JrtPathEntry$$static;
            interface _ClassFinder$JrtPathEntry {
              find(className: string): tools.classfile.ClassFile;
              _fs: java.nio.file.FileSystem;
              _this$0: ClassFinder;
            }
            interface ClassFinder$JrtPathEntry extends CombineTypes<[_ClassFinder$JrtPathEntry, com.sun.tools.jdeprscan.scan.ClassFinder$PathEntry, java.lang.Object]> {}
            interface _ClassFinder$PathEntry$$static extends ClassLike {
            }
            let ClassFinder$PathEntry: _ClassFinder$PathEntry$$static;
            interface _ClassFinder$PathEntry {
              find(a0: string): tools.classfile.ClassFile;
(a0: string): tools.classfile.ClassFile;
            }
            interface ClassFinder$PathEntry extends CombineTypes<[_ClassFinder$PathEntry, java.lang.Object]> {}
            interface _MethodSig$$static extends ClassLike {
              _ex(desc: string, pos: int): java.lang.IllegalArgumentException;
              fromDesc(desc: string): MethodSig;
              _parse(desc: string, start: int, end: int): MethodSig;
            }
            let MethodSig: _MethodSig$$static;
            interface _MethodSig {
              getParameters(): java.util.List<string>;
              getReturnType(): string;
              toString(): string;
              _parameters: java.util.List<string>;
              _returnType: string;
            }
            interface MethodSig extends CombineTypes<[_MethodSig, java.lang.Object]> {}
            interface _Scan$$static extends ClassLike {
              new(out: java.io.PrintStream, err: java.io.PrintStream, classPath: java.util.List<string>, db: DeprDB, verbose: boolean): Scan;
            }
            let Scan: _Scan$$static;
            interface _Scan {
              _addInterfaces(intfs: java.util.Deque<string>, cf: tools.classfile.ClassFile): void;
              _checkClasses(cf: tools.classfile.ClassFile, entries: CPEntries): void;
              _checkFieldRef(cf: tools.classfile.ClassFile, fri: tools.classfile.ConstantPool$CONSTANT_Fieldref_info): void;
              _checkFields(cf: tools.classfile.ClassFile): void;
              _checkInterfaces(cf: tools.classfile.ClassFile): void;
              _checkMethodRef(cf: tools.classfile.ClassFile, clname: string, nti: tools.classfile.ConstantPool$CONSTANT_NameAndType_info, msgKey: string): void;
              _checkMethods(cf: tools.classfile.ClassFile): void;
              _checkSuper(cf: tools.classfile.ClassFile): void;
              _dep(forRemoval: boolean): string;
              _errorException(ex: java.lang.Exception): void;
              _errorNoClass(className: string): void;
              _errorNoFile(fileName: string): void;
              _errorNoMethod(className: string, methodName: string, desc: string): void;
              _isMemberPresent(targetClass: tools.classfile.ClassFile, targetName: string, targetDesc: string, checkMethod: boolean): boolean;
              _nameFromDescType(descType: string): string;
              _nameFromRefType(refType: string): string;
              _printField(key: string, cf: tools.classfile.ClassFile, cname: string, fname: string, r: boolean): void;
              _printFieldType(key: string, cf: tools.classfile.ClassFile, cname: string, fname: string, type: string, r: boolean): void;
              _printHasField(cf: tools.classfile.ClassFile, fname: string, type: string, r: boolean): void;
              _printHasMethodParmType(cf: tools.classfile.ClassFile, mname: string, parmType: string, r: boolean): void;
              _printHasMethodRetType(cf: tools.classfile.ClassFile, mname: string, retType: string, r: boolean): void;
              _printHasOverriddenMethod(cf: tools.classfile.ClassFile, overridden: string, mname: string, desc: string, r: boolean): void;
              _printMethod(key: string, cf: tools.classfile.ClassFile, cname: string, mname: string, rtype: string, r: boolean): void;
              _printType(key: string, cf: tools.classfile.ClassFile, cname: string, r: boolean): void;
              _processClass(cf: tools.classfile.ClassFile): void;
              processClassFile(fileName: string): boolean;
              processClassName(className: string): boolean;
              _resolveMember(cf: tools.classfile.ClassFile, startClassName: string, findName: string, findDesc: string, resolveMethod: boolean, checkStartClass: boolean): string;
              scanDir(dirname: string): boolean;
              scanJar(jarname: string): boolean;
              _typeKind(cf: tools.classfile.ClassFile): string;
              _classPath: java.util.List<string>;
              _classesNotFound: java.util.Set<string>;
              _db: DeprDB;
              _descTypePattern: java.util.regex.Pattern;
              _err: java.io.PrintStream;
              _errorOccurred: boolean;
              _finder: ClassFinder;
              _out: java.io.PrintStream;
              _refTypePattern: java.util.regex.Pattern;
              _verbose: boolean;
            }
            interface Scan extends CombineTypes<[_Scan, java.lang.Object]> {}
          }
          interface _CSV$$static extends ClassLike {
            _quote(input: string): string;
            split(input: string): java.util.List<string>;
            write(out: java.io.PrintStream, objs: any[]): void;
            write(out: java.io.PrintStream, ...objs: any[]): void;
            new(): CSV;
          }
          let CSV: _CSV$$static;
          interface _CSV {
          }
          interface CSV extends CombineTypes<[_CSV, java.lang.Object]> {}
          interface _CSV$State$$static extends ClassLike {
            valueOf(name: string): CSV$State;
            values(): CSV$State[];
            readonly END_QFIELD: CSV$State;
            readonly IN_FIELD: CSV$State;
            readonly IN_QFIELD: CSV$State;
            readonly START_FIELD: CSV$State;
          }
          let CSV$State: _CSV$State$$static;
          interface _CSV$State {
          }
          interface CSV$State extends CombineTypes<[_CSV$State]> {}
          interface _CSVParseException$$static extends ClassLike {
            _serialVersionUID: long;
            new(msg: string, input: string, index: int): CSVParseException;
          }
          let CSVParseException: _CSVParseException$$static;
          interface _CSVParseException {
            getIndex(): int;
            getInput(): string;
            getMessage(): string;
            _index: int;
            _input: string;
          }
          interface CSVParseException extends CombineTypes<[_CSVParseException, java.lang.IllegalArgumentException]> {}
          interface _DeprDB$$static extends ClassLike {
            loadFromFile(filename: string): java.util.List<DeprData>;
            loadFromList(deprList: java.util.List<DeprData>): DeprDB;
            _validElementKinds: java.util.Set<string>;
          }
          let DeprDB: _DeprDB$$static;
          interface _DeprDB {
            getFieldDeprecated(typeName: string, fieldName: string): DeprData;
            getMethodDeprecated(typeName: string, methodName: string, type: string): DeprData;
            getTypeDeprecated(typeName: string): DeprData;
            toString(): string;
            _fields: java.util.Map<string,java.util.Map<string,DeprData>>;
            _methods: java.util.Map<string,java.util.Map<string,DeprData>>;
            _types: java.util.Map<string,DeprData>;
          }
          interface DeprDB extends CombineTypes<[_DeprDB, java.lang.Object]> {}
          interface _DeprData$$static extends ClassLike {
            new(kind: javax.lang.model.element.ElementKind, type: javax.lang.model.element.TypeElement, typeName: string, nameSig: string, since: string, forRemoval: boolean): DeprData;
          }
          let DeprData: _DeprData$$static;
          interface _DeprData {
            isForRemoval(): boolean;
            toString(): string;
            _forRemoval: boolean;
            _kind: javax.lang.model.element.ElementKind;
            _nameSig: string;
            _since: string;
            _type: javax.lang.model.element.TypeElement;
            _typeName: string;
          }
          interface DeprData extends CombineTypes<[_DeprData, java.lang.Object]> {}
          interface _LoadProc$$static extends ClassLike {
            new(): LoadProc;
          }
          let LoadProc: _LoadProc$$static;
          interface _LoadProc {
            _addData(kind: javax.lang.model.element.ElementKind, type: javax.lang.model.element.TypeElement, nameSig: string, dep: java.lang.Deprecated): void;
            _addMember(kind: javax.lang.model.element.ElementKind, type: javax.lang.model.element.TypeElement, nameSig: string, dep: java.lang.Deprecated): void;
            _addType(kind: javax.lang.model.element.ElementKind, type: javax.lang.model.element.TypeElement, dep: java.lang.Deprecated): void;
            _desc(tm: javax.lang.model.type.TypeMirror): string;
            getDeprecations(): java.util.List<DeprData>;
            _getDetail(e: javax.lang.model.element.Element): string;
            getSupportedSourceVersion(): javax.lang.model.SourceVersion;
            init(pe: javax.annotation.processing.ProcessingEnvironment): void;
            process(annotations: java.util.Set<javax.lang.model.element.TypeElement>, roundEnv: javax.annotation.processing.RoundEnvironment): boolean;
            _deprList: java.util.List<DeprData>;
            _elements: javax.lang.model.util.Elements;
            _messager: javax.annotation.processing.Messager;
          }
          interface LoadProc extends CombineTypes<[_LoadProc, javax.annotation.processing.AbstractProcessor]> {}
          interface _Main$$static extends ClassLike {
            call(out: java.io.PrintStream, err: java.io.PrintStream, args: string[]): boolean;
            call(out: java.io.PrintStream, err: java.io.PrintStream, ...args: string[]): boolean;
            main(args: string[]): void;
            _new(out: java.io.PrintStream, err: java.io.PrintStream): Main;
          }
          let Main: _Main$$static;
          interface _Main {
            _convertModularFileName(filename: string): string;
            _doClassNames(classNames: java.util.Collection<string>): boolean;
            _doFileNames(filenames: java.util.stream.Stream<string>): boolean;
            _doJarFile(jarname: string): boolean;
            _doModularFileNames(filenames: java.util.stream.Stream<string>): boolean;
            _printHelp(out: java.io.PrintStream): void;
            _processDirectory(dirname: string, classNames: java.util.Collection<string>): boolean;
            _processJarFile(jarname: string, classNames: java.util.Collection<string>): boolean;
            _processJdk9(jdkHome: string, classes: java.util.Collection<string>): boolean;
            _processOldJdk(jdkHome: string, classNames: java.util.Collection<string>): boolean;
            _processRelease(release: string, classes: java.util.Collection<string>): boolean;
            _processSelf(classes: java.util.Collection<string>): boolean;
            report(diagnostic: javax.tools.Diagnostic<javax.tools.JavaFileObject>): void;
            _require(cond: boolean): void;
            _run(argArray: string[]): boolean;
            _run(...argArray: string[]): boolean;
            _bootClassPath: java.util.List<java.io.File>;
            _classPath: java.util.List<java.io.File>;
            _comments: java.util.List<string>;
            _compiler: javax.tools.JavaCompiler;
            _deprList: java.util.List<DeprData>;
            _err: java.io.PrintStream;
            _fm: javax.tools.StandardJavaFileManager;
            _forRemoval: boolean;
            _options: java.util.List<string>;
            _out: java.io.PrintStream;
            _releasesWithForRemoval: java.util.Set<string>;
            _releasesWithoutForRemoval: java.util.Set<string>;
            _systemModules: java.util.List<java.io.File>;
            _validReleases: java.util.Set<string>;
            _verbose: boolean;
          }
          interface Main extends CombineTypes<[_Main, javax.tools.DiagnosticListener<javax.tools.JavaFileObject>, java.lang.Object]> {}
          interface _Main$LoadMode$$static extends ClassLike {
            valueOf(name: string): Main$LoadMode;
            values(): Main$LoadMode[];
            readonly CLASSES: Main$LoadMode;
            readonly DIR: Main$LoadMode;
            readonly JAR: Main$LoadMode;
            readonly JDK9: Main$LoadMode;
            readonly LOAD_CSV: Main$LoadMode;
            readonly OLD_JDK: Main$LoadMode;
            readonly RELEASE: Main$LoadMode;
            readonly SELF: Main$LoadMode;
          }
          let Main$LoadMode: _Main$LoadMode$$static;
          interface _Main$LoadMode {
          }
          interface Main$LoadMode extends CombineTypes<[_Main$LoadMode]> {}
          interface _Main$ScanMode$$static extends ClassLike {
            valueOf(name: string): Main$ScanMode;
            values(): Main$ScanMode[];
            readonly ARGS: Main$ScanMode;
            readonly LIST: Main$ScanMode;
            readonly PRINT_CSV: Main$ScanMode;
          }
          let Main$ScanMode: _Main$ScanMode$$static;
          interface _Main$ScanMode {
          }
          interface Main$ScanMode extends CombineTypes<[_Main$ScanMode]> {}
          interface _Main$UsageException$$static extends ClassLike {
            _serialVersionUID: long;
            _new(): Main$UsageException;
          }
          let Main$UsageException: _Main$UsageException$$static;
          interface _Main$UsageException {
          }
          interface Main$UsageException extends CombineTypes<[_Main$UsageException, java.lang.Exception]> {}
          interface _Messages$$static extends ClassLike {
            get(key: string, args: any[]): string;
            get(key: string, ...args: any[]): string;
            _REPLACE_LINESEP: boolean;
            _bundle: java.util.ResourceBundle;
            new(): Messages;
          }
          let Messages: _Messages$$static;
          interface _Messages {
          }
          interface Messages extends CombineTypes<[_Messages, java.lang.Object]> {}
          interface _Pretty$$static extends ClassLike {
            _depr(since: string, forRemoval: boolean): string;
            _desc(desc: string): string;
            _desc(desc: string, pos_inout: int[]): string;
            _parms(types: string): string;
            print(dd: DeprData): string;
            _unslashify(n: string): string;
            _DESC_PAT: java.util.regex.Pattern;
            new(): Pretty;
          }
          let Pretty: _Pretty$$static;
          interface _Pretty {
          }
          interface Pretty extends CombineTypes<[_Pretty, java.lang.Object]> {}
          interface _TraverseProc$$static extends ClassLike {
            _new(roots: java.util.List<string>): TraverseProc;
          }
          let TraverseProc: _TraverseProc$$static;
          interface _TraverseProc {
            _addPublicTypes(list: java.util.List<javax.lang.model.element.TypeElement>, e: javax.lang.model.element.Element): void;
            _findModules(root: javax.lang.model.element.ModuleElement): java.util.Set<javax.lang.model.element.ModuleElement>;
            _findModules0(m: javax.lang.model.element.ModuleElement, set: java.util.Set<javax.lang.model.element.ModuleElement>, nesting: int): java.util.Set<javax.lang.model.element.ModuleElement>;
            _findPackages(mods: java.util.Collection<javax.lang.model.element.ModuleElement>): java.util.Set<javax.lang.model.element.PackageElement>;
            _findPublicTypes(pkgs: java.util.Collection<javax.lang.model.element.PackageElement>): java.util.Map<javax.lang.model.element.PackageElement,java.util.List<javax.lang.model.element.TypeElement>>;
            getPublicTypes(): java.util.Map<javax.lang.model.element.PackageElement,java.util.List<javax.lang.model.element.TypeElement>>;
            getSupportedSourceVersion(): javax.lang.model.SourceVersion;
            init(pe: javax.annotation.processing.ProcessingEnvironment): void;
            _printPublicTypes(): void;
            _printPublicTypes(types: java.util.Map<javax.lang.model.element.PackageElement,java.util.List<javax.lang.model.element.TypeElement>>): void;
            process(annotations: java.util.Set<javax.lang.model.element.TypeElement>, roundEnv: javax.annotation.processing.RoundEnvironment): boolean;
            _elements: javax.lang.model.util.Elements;
            _messager: javax.annotation.processing.Messager;
            _moduleRoots: java.util.List<string>;
            _publicTypes: java.util.Map<javax.lang.model.element.PackageElement,java.util.List<javax.lang.model.element.TypeElement>>;
          }
          interface TraverseProc extends CombineTypes<[_TraverseProc, javax.annotation.processing.AbstractProcessor]> {}
        }
        module jdeps {
          module resources {
            interface _jdeps$$static extends ClassLike {
              new(): jdeps;
            }
            let jdeps: _jdeps$$static;
            interface _jdeps {
              _getContents(): any[][];
            }
            interface jdeps extends CombineTypes<[_jdeps, java.util.ListResourceBundle]> {}
            interface _jdeps_de$$static extends ClassLike {
              new(): jdeps_de;
            }
            let jdeps_de: _jdeps_de$$static;
            interface _jdeps_de {
              _getContents(): any[][];
            }
            interface jdeps_de extends CombineTypes<[_jdeps_de, java.util.ListResourceBundle]> {}
            interface _jdeps_ja$$static extends ClassLike {
              new(): jdeps_ja;
            }
            let jdeps_ja: _jdeps_ja$$static;
            interface _jdeps_ja {
              _getContents(): any[][];
            }
            interface jdeps_ja extends CombineTypes<[_jdeps_ja, java.util.ListResourceBundle]> {}
            interface _jdeps_zh_CN$$static extends ClassLike {
              new(): jdeps_zh_CN;
            }
            let jdeps_zh_CN: _jdeps_zh_CN$$static;
            interface _jdeps_zh_CN {
              _getContents(): any[][];
            }
            interface jdeps_zh_CN extends CombineTypes<[_jdeps_zh_CN, java.util.ListResourceBundle]> {}
            interface _jdkinternals$$static extends ClassLike {
              new(): jdkinternals;
            }
            let jdkinternals: _jdkinternals$$static;
            interface _jdkinternals {
              _getContents(): any[][];
            }
            interface jdkinternals extends CombineTypes<[_jdkinternals, java.util.ListResourceBundle]> {}
            interface _version$$static extends ClassLike {
              new(): version;
            }
            let version: _version$$static;
            interface _version {
              _getContents(): any[][];
            }
            interface version extends CombineTypes<[_version, java.util.ListResourceBundle]> {}
          }
          interface _Analyzer$$static extends ClassLike {
            _notFound(archive: Archive): boolean;
            _ANY: java.util.function.Predicate<Archive>;
            _NOT_FOUND: Archive;
            _REMOVED_JDK_INTERNALS: Analyzer$Jdk8Internals;
            _new(config: JdepsConfiguration, type: Analyzer$Type, filter: Analyzer$Filter): Analyzer;
          }
          let Analyzer: _Analyzer$$static;
          interface _Analyzer {
            _archives(): java.util.Set<Archive>;
            _dependences(source: Archive): java.util.Set<string>;
            _hasDependences(archive: Archive): boolean;
            _requires(source: Archive): java.util.stream.Stream<Archive>;
            _run(archives: java.lang.Iterable<Archive>, locationMap: java.util.Map<tools.classfile.Dependency$Location,Archive>): boolean;
            _visitDependences(source: Archive, v: Analyzer$Visitor, level: Analyzer$Type, targetFilter: java.util.function.Predicate<Archive>): void;
            _visitDependences(source: Archive, v: Analyzer$Visitor): void;
            _visitDependences(source: Archive, v: Analyzer$Visitor, level: Analyzer$Type): void;
            _configuration: JdepsConfiguration;
            _filter: Analyzer$Filter;
            _locationToArchive: java.util.Map<tools.classfile.Dependency$Location,Archive>;
            _results: java.util.Map<Archive,Analyzer$Dependences>;
            _type: Analyzer$Type;
          }
          interface Analyzer extends CombineTypes<[_Analyzer, java.lang.Object]> {}
          interface _Analyzer$Dep$$static extends ClassLike {
            _new(this$0: Analyzer, origin: string, originArchive: Archive, target: string, targetArchive: Archive): Analyzer$Dep;
          }
          let Analyzer$Dep: _Analyzer$Dep$$static;
          interface _Analyzer$Dep {
            equals(o: any): boolean;
            hashCode(): int;
            _origin(): string;
            _originArchive(): Archive;
            _target(): string;
            _targetArchive(): Archive;
            toString(): string;
            _origin: string;
            _originArchive: Archive;
            _target: string;
            _targetArchive: Archive;
          }
          interface Analyzer$Dep extends CombineTypes<[_Analyzer$Dep, java.lang.Object]> {}
          interface _Analyzer$Dependences$$static extends ClassLike {
            _new(this$0: Analyzer, archive: Archive, level: Analyzer$Type): Analyzer$Dependences;
            _new(this$0: Archive, archive: Analyzer$Type, level: java.util.function.Predicate<Archive>): Analyzer$Dependences;
          }
          let Analyzer$Dependences: _Analyzer$Dependences$$static;
          interface _Analyzer$Dependences {
            _addDep(o: tools.classfile.Dependency$Location, t: tools.classfile.Dependency$Location): Analyzer$Dep;
            _dependencies(): java.util.Set<Analyzer$Dep>;
            _findArchive(t: tools.classfile.Dependency$Location): Archive;
            _getLocationName(o: tools.classfile.Dependency$Location): string;
            _getTargetProfile(target: Archive): Profile;
            _requires(): java.util.Set<Archive>;
            visit(o: tools.classfile.Dependency$Location, t: tools.classfile.Dependency$Location): void;
            _archive: Archive;
            _curDep: Analyzer$Dep;
            _deps: java.util.Set<Analyzer$Dep>;
            _level: Analyzer$Type;
            _profile: Profile;
            _requires: java.util.Set<Archive>;
            _targetFilter: java.util.function.Predicate<Archive>;
            _this$0: Analyzer;
          }
          interface Analyzer$Dependences extends CombineTypes<[_Analyzer$Dependences, com.sun.tools.jdeps.Archive$Visitor, java.lang.Object]> {}
          interface _Analyzer$Filter$$static extends ClassLike {
          }
          let Analyzer$Filter: _Analyzer$Filter$$static;
          interface _Analyzer$Filter {
            accepts(a0: tools.classfile.Dependency$Location, a1: Archive, a2: tools.classfile.Dependency$Location, a3: Archive): boolean;
(a0: tools.classfile.Dependency$Location, a1: Archive, a2: tools.classfile.Dependency$Location, a3: Archive): boolean;
          }
          interface Analyzer$Filter extends CombineTypes<[_Analyzer$Filter, java.lang.Object]> {}
          interface _Analyzer$Jdk8Internals$$static extends ClassLike {
            _JDK8_INTERNALS: string;
            _NAME: string;
          }
          let Analyzer$Jdk8Internals: _Analyzer$Jdk8Internals$$static;
          interface _Analyzer$Jdk8Internals {
            contains(location: tools.classfile.Dependency$Location): boolean;
            isExported(pn: string): boolean;
            isJDK(): boolean;
            name(): string;
            _jdk8Internals: java.util.Set<string>;
          }
          interface Analyzer$Jdk8Internals extends CombineTypes<[_Analyzer$Jdk8Internals, com.sun.tools.jdeps.Module]> {}
          interface _Analyzer$Type$$static extends ClassLike {
            valueOf(name: string): Analyzer$Type;
            values(): Analyzer$Type[];
            readonly CLASS: Analyzer$Type;
            readonly MODULE: Analyzer$Type;
            readonly PACKAGE: Analyzer$Type;
            readonly SUMMARY: Analyzer$Type;
            readonly VERBOSE: Analyzer$Type;
          }
          let Analyzer$Type: _Analyzer$Type$$static;
          interface _Analyzer$Type {
          }
          interface Analyzer$Type extends CombineTypes<[_Analyzer$Type]> {}
          interface _Analyzer$Visitor$$static extends ClassLike {
          }
          let Analyzer$Visitor: _Analyzer$Visitor$$static;
          interface _Analyzer$Visitor {
            visitDependence(a0: string, a1: Archive, a2: string, a3: Archive): void;
(a0: string, a1: Archive, a2: string, a3: Archive): void;
          }
          interface Analyzer$Visitor extends CombineTypes<[_Analyzer$Visitor, java.lang.Object]> {}
          interface _Archive$$static extends ClassLike {
            getInstance(p: java.nio.file.Path, version: java.lang.Runtime$Version): Archive;
            isSameLocation(archive: Archive, other: Archive): boolean;
            _new(name: string): Archive;
            _new(name: string, location: java.net.URI, reader: ClassFileReader): Archive;
            _new(p: java.nio.file.Path, reader: ClassFileReader): Archive;
          }
          let Archive: _Archive$$static;
          interface _Archive {
            addClass(origin: tools.classfile.Dependency$Location): void;
            addClass(origin: tools.classfile.Dependency$Location, target: tools.classfile.Dependency$Location): void;
            close(): void;
            contains(entry: string): boolean;
            equals(o: any): boolean;
            getClasses(): java.util.Set<tools.classfile.Dependency$Location>;
            getDependencies(): java.util.stream.Stream<tools.classfile.Dependency$Location>;
            getModule(): Module;
            getName(): string;
            getPathName(): string;
            hasDependences(): boolean;
            hashCode(): int;
            isEmpty(): boolean;
            _isJrt(): boolean;
            path(): java.util.Optional<java.nio.file.Path>;
            reader(): ClassFileReader;
            toString(): string;
            visitDependences(v: Archive$Visitor): void;
            _deps: java.util.Map<tools.classfile.Dependency$Location,java.util.Set<tools.classfile.Dependency$Location>>;
            _filename: string;
            _location: java.net.URI;
            _path: java.nio.file.Path;
            _reader: ClassFileReader;
          }
          interface Archive extends CombineTypes<[_Archive, java.io.Closeable, java.lang.Object]> {}
          interface _Archive$Visitor$$static extends ClassLike {
          }
          let Archive$Visitor: _Archive$Visitor$$static;
          interface _Archive$Visitor {
            visit(a0: tools.classfile.Dependency$Location, a1: tools.classfile.Dependency$Location): void;
(a0: tools.classfile.Dependency$Location, a1: tools.classfile.Dependency$Location): void;
          }
          interface Archive$Visitor extends CombineTypes<[_Archive$Visitor, java.lang.Object]> {}
          interface _ClassFileReader$$static extends ClassLike {
            _isClass(file: java.nio.file.Path): boolean;
            newInstance(path: java.nio.file.Path, version: java.lang.Runtime$Version): ClassFileReader;
            newInstance(fs: java.nio.file.FileSystem, path: java.nio.file.Path): ClassFileReader;
            _new(path: java.nio.file.Path): ClassFileReader;
          }
          let ClassFileReader: _ClassFileReader$$static;
          interface _ClassFileReader {
            close(): void;
            entries(): java.util.Set<string>;
            getClassFile(name: string): tools.classfile.ClassFile;
            getClassFiles(): java.lang.Iterable<tools.classfile.ClassFile>;
            getFileName(): string;
            _readClassFile(p: java.nio.file.Path): tools.classfile.ClassFile;
            _scan(): java.util.Set<string>;
            skippedEntries(): java.util.List<string>;
            toString(): string;
            _baseFileName: string;
            _entries: java.util.Set<string>;
            _path: java.nio.file.Path;
            _skippedEntries: java.util.List<string>;
          }
          interface ClassFileReader extends CombineTypes<[_ClassFileReader, java.io.Closeable, java.lang.Object]> {}
          interface _ClassFileReader$DirectoryReader$$static extends ClassLike {
            _new(path: java.nio.file.Path): ClassFileReader$DirectoryReader;
            _new(fs: java.nio.file.FileSystem, path: java.nio.file.Path): ClassFileReader$DirectoryReader;
          }
          let ClassFileReader$DirectoryReader: _ClassFileReader$DirectoryReader$$static;
          interface _ClassFileReader$DirectoryReader {
            getClassFile(name: string): tools.classfile.ClassFile;
            getClassFiles(): java.lang.Iterable<tools.classfile.ClassFile>;
            _scan(): java.util.Set<string>;
            _fsSep: string;
          }
          interface ClassFileReader$DirectoryReader extends CombineTypes<[_ClassFileReader$DirectoryReader, com.sun.tools.jdeps.ClassFileReader]> {}
          interface _ClassFileReader$DirectoryReader$DirectoryIterator$$static extends ClassLike {
            _new(this$0: ClassFileReader$DirectoryReader): ClassFileReader$DirectoryReader$DirectoryIterator;
          }
          let ClassFileReader$DirectoryReader$DirectoryIterator: _ClassFileReader$DirectoryReader$DirectoryIterator$$static;
          interface _ClassFileReader$DirectoryReader$DirectoryIterator {
            hasNext(): boolean;
            next(): tools.classfile.ClassFile;
            next(): any;
            remove(): void;
            _entries: java.util.List<java.nio.file.Path>;
            _index: int;
            _this$0: ClassFileReader$DirectoryReader;
          }
          interface ClassFileReader$DirectoryReader$DirectoryIterator extends CombineTypes<[_ClassFileReader$DirectoryReader$DirectoryIterator, java.util.Iterator<tools.classfile.ClassFile>, java.lang.Object]> {}
          interface _ClassFileReader$FileIterator$$static extends ClassLike {
            _new(this$0: ClassFileReader): ClassFileReader$FileIterator;
          }
          let ClassFileReader$FileIterator: _ClassFileReader$FileIterator$$static;
          interface _ClassFileReader$FileIterator {
            hasNext(): boolean;
            next(): tools.classfile.ClassFile;
            next(): any;
            remove(): void;
            _count: int;
            _this$0: ClassFileReader;
          }
          interface ClassFileReader$FileIterator extends CombineTypes<[_ClassFileReader$FileIterator, java.util.Iterator<tools.classfile.ClassFile>, java.lang.Object]> {}
          interface _ClassFileReader$JarFileIterator$$static extends ClassLike {
            _new(this$0: ClassFileReader, reader: ClassFileReader$JarFileReader): ClassFileReader$JarFileIterator;
            _new(this$0: ClassFileReader, reader: ClassFileReader$JarFileReader, jarfile: java.util.jar.JarFile): ClassFileReader$JarFileIterator;
          }
          let ClassFileReader$JarFileIterator: _ClassFileReader$JarFileIterator$$static;
          interface _ClassFileReader$JarFileIterator {
            hasNext(): boolean;
            next(): tools.classfile.ClassFile;
            next(): any;
            _nextEntry(): java.util.jar.JarEntry;
            remove(): void;
            _setJarFile(jarfile: java.util.jar.JarFile): void;
            _cf: tools.classfile.ClassFile;
            _entries: java.util.Iterator<java.util.jar.JarEntry>;
            _jf: java.util.jar.JarFile;
            _nextEntry: java.util.jar.JarEntry;
            _reader: ClassFileReader$JarFileReader;
            _this$0: ClassFileReader;
          }
          interface ClassFileReader$JarFileIterator extends CombineTypes<[_ClassFileReader$JarFileIterator, java.util.Iterator<tools.classfile.ClassFile>, java.lang.Object]> {}
          interface _ClassFileReader$JarFileReader$$static extends ClassLike {
            _openJarFile(f: java.io.File, version: java.lang.Runtime$Version): java.util.jar.JarFile;
            _new(path: java.nio.file.Path, version: java.lang.Runtime$Version): ClassFileReader$JarFileReader;
            _new(path: java.nio.file.Path, jf: java.util.jar.JarFile, version: java.lang.Runtime$Version): ClassFileReader$JarFileReader;
          }
          let ClassFileReader$JarFileReader: _ClassFileReader$JarFileReader$$static;
          interface _ClassFileReader$JarFileReader {
            close(): void;
            getClassFile(name: string): tools.classfile.ClassFile;
            getClassFiles(): java.lang.Iterable<tools.classfile.ClassFile>;
            _readClassFile(jarfile: java.util.jar.JarFile, e: java.util.jar.JarEntry): tools.classfile.ClassFile;
            _scan(): java.util.Set<string>;
            _jarfile: java.util.jar.JarFile;
            _version: java.lang.Runtime$Version;
          }
          interface ClassFileReader$JarFileReader extends CombineTypes<[_ClassFileReader$JarFileReader, com.sun.tools.jdeps.ClassFileReader]> {}
          interface _DependencyFinder$$static extends ClassLike {
            _API_FINDER: DependencyFinder$Finder;
            _CLASS_FINDER: DependencyFinder$Finder;
            _new(configuration: JdepsConfiguration, filter: JdepsFilter): DependencyFinder;
          }
          let DependencyFinder: _DependencyFinder$$static;
          interface _DependencyFinder {
            _dependences(): java.util.Map<Archive,java.util.Set<Archive>>;
            _getDependences(source: Archive): java.util.stream.Stream<Archive>;
            _isParsed(location: tools.classfile.Dependency$Location): boolean;
            _locationToArchive(): java.util.Map<tools.classfile.Dependency$Location,Archive>;
            _locationToArchive(location: tools.classfile.Dependency$Location): Archive;
            parse(archiveStream: java.util.stream.Stream<Archive>): java.util.Set<tools.classfile.Dependency$Location>;
            parse(archive: Archive, name: string): java.util.Set<tools.classfile.Dependency$Location>;
            _parse(archive: Archive, finder: DependencyFinder$Finder): java.util.Optional<java.util.concurrent.FutureTask<java.util.Set<tools.classfile.Dependency$Location>>>;
            _parse(archive: Archive, finder: DependencyFinder$Finder, name: string): java.util.Set<tools.classfile.Dependency$Location>;
            parseExportedAPIs(archiveStream: java.util.stream.Stream<Archive>): java.util.Set<tools.classfile.Dependency$Location>;
            parseExportedAPIs(archive: Archive, name: string): java.util.Set<tools.classfile.Dependency$Location>;
            _shutdown(): void;
            _waitForTasksCompleted(): java.util.Set<tools.classfile.Dependency$Location>;
            _configuration: JdepsConfiguration;
            _filter: JdepsFilter;
            _parsedArchives: java.util.Map<DependencyFinder$Finder,java.util.Deque<Archive>>;
            _parsedClasses: java.util.Map<tools.classfile.Dependency$Location,Archive>;
            _pool: java.util.concurrent.ExecutorService;
            _tasks: java.util.Deque<java.util.concurrent.FutureTask<java.util.Set<tools.classfile.Dependency$Location>>>;
          }
          interface DependencyFinder extends CombineTypes<[_DependencyFinder, java.lang.Object]> {}
          interface _DependencyFinder$Finder$$static extends ClassLike {
            _new(apiOnly: boolean): DependencyFinder$Finder;
          }
          let DependencyFinder$Finder: _DependencyFinder$Finder$$static;
          interface _DependencyFinder$Finder {
            accept(archive: Archive, cn: string, accessFlags: tools.classfile.AccessFlags): boolean;
            findDependencies(classfile: tools.classfile.ClassFile): java.lang.Iterable<tools.classfile.Dependency>;
            _apiOnly: boolean;
            _finder: tools.classfile.Dependency$Finder;
          }
          interface DependencyFinder$Finder extends CombineTypes<[_DependencyFinder$Finder, java.lang.Object, com.sun.tools.classfile.Dependency$Finder, com.sun.tools.jdeps.DependencyFinder$SourceFilter]> {}
          interface _DependencyFinder$SourceFilter$$static extends ClassLike {
          }
          let DependencyFinder$SourceFilter: _DependencyFinder$SourceFilter$$static;
          interface _DependencyFinder$SourceFilter {
            accept(a0: Archive, a1: string, a2: tools.classfile.AccessFlags): boolean;
(a0: Archive, a1: string, a2: tools.classfile.AccessFlags): boolean;
          }
          interface DependencyFinder$SourceFilter extends CombineTypes<[_DependencyFinder$SourceFilter, java.lang.Object]> {}
          interface _DepsAnalyzer$$static extends ClassLike {
            new(config: JdepsConfiguration, filter: JdepsFilter, writer: JdepsWriter, verbose: Analyzer$Type, apiOnly: boolean): DepsAnalyzer;
          }
          let DepsAnalyzer: _DepsAnalyzer$$static;
          interface _DepsAnalyzer {
            _addEdge(builder: Graph$Builder<DepsAnalyzer$Node>, dep: Analyzer$Dep): void;
            _archives(): java.util.Set<Archive>;
            dependenceGraph(): Graph<DepsAnalyzer$Node>;
            _dependences(): java.util.Set<string>;
            include(source: Archive): boolean;
            moduleGraph(): Graph<DepsAnalyzer$Node>;
            run(): boolean;
            run(compileTimeView: boolean, maxDepth: int): boolean;
            _transitiveArchiveDeps(depth: int): void;
            _transitiveDeps(depth: int): void;
            _unresolvedArchives(locations: java.util.stream.Stream<tools.classfile.Dependency$Location>): java.util.Set<Archive>;
            _analyzer: Analyzer;
            _apiOnly: boolean;
            _archives: java.util.Set<Archive>;
            _configuration: JdepsConfiguration;
            _filter: JdepsFilter;
            _finder: DependencyFinder;
            _rootArchives: java.util.List<Archive>;
            _verbose: Analyzer$Type;
            _writer: JdepsWriter;
          }
          interface DepsAnalyzer extends CombineTypes<[_DepsAnalyzer, java.lang.Object]> {}
          interface _DepsAnalyzer$Info$$static extends ClassLike {
            valueOf(name: string): DepsAnalyzer$Info;
            values(): DepsAnalyzer$Info[];
            readonly EXPORTED_API: DepsAnalyzer$Info;
            readonly INTERNAL_API: DepsAnalyzer$Info;
            readonly JDK_INTERNAL_API: DepsAnalyzer$Info;
            readonly JDK_REMOVED_INTERNAL_API: DepsAnalyzer$Info;
            readonly MODULE_PRIVATE: DepsAnalyzer$Info;
            readonly QUALIFIED_EXPORTED_API: DepsAnalyzer$Info;
            readonly REQUIRES: DepsAnalyzer$Info;
            readonly REQUIRES_TRANSITIVE: DepsAnalyzer$Info;
          }
          let DepsAnalyzer$Info: _DepsAnalyzer$Info$$static;
          interface _DepsAnalyzer$Info {
          }
          interface DepsAnalyzer$Info extends CombineTypes<[_DepsAnalyzer$Info]> {}
          interface _DepsAnalyzer$Node$$static extends ClassLike {
            _new(name: string, info: DepsAnalyzer$Info): DepsAnalyzer$Node;
            _new(name: string, source: string, info: DepsAnalyzer$Info): DepsAnalyzer$Node;
          }
          let DepsAnalyzer$Node: _DepsAnalyzer$Node$$static;
          interface _DepsAnalyzer$Node {
            equals(o: any): boolean;
            hashCode(): int;
            toString(): string;
            readonly info: DepsAnalyzer$Info;
            readonly name: string;
            readonly source: string;
          }
          interface DepsAnalyzer$Node extends CombineTypes<[_DepsAnalyzer$Node, java.lang.Object]> {}
          interface _Graph$$static<T> extends ClassLike {
            new(nodes: java.util.Set<T>, edges: java.util.Map<T,java.util.Set<T>>): Graph<T>;
          }
          let Graph: _Graph$$static<T>;
          interface _Graph<T> {
            adjacentNodes(u: T): java.util.Set<T>;
            contains(u: T): boolean;
            dfs(roots: java.util.Set<T>): java.util.Set<T>;
            edges(): java.util.Map<T,java.util.Set<T>>;
            edgesFrom(u: T): java.util.Set<Graph$Edge<T>>;
            _isAdjacent(u: T, v: T): boolean;
            nodes(): java.util.Set<T>;
            ordered(action: java.util.function.Consumer<T>): void;
            orderedNodes(): java.util.stream.Stream<T>;
            _pathExists(u: T, v: T): boolean;
            _pathExists(u: T, v: T, includeAdjacent: boolean): boolean;
            printGraph(out: java.io.PrintWriter): void;
            reduce(): Graph<T>;
            reduce(g: Graph<T>): Graph<T>;
            reverse(action: java.util.function.Consumer<T>): void;
            toString(): string;
            transpose(): Graph<T>;
            _edges: java.util.Map<T,java.util.Set<T>>;
            _nodes: java.util.Set<T>;
          }
          interface Graph<T> extends CombineTypes<[_Graph<T>, java.lang.Object]> {}
          interface _Graph$Builder$$static<T> extends ClassLike {
            _new(): Graph$Builder<T>;
          }
          let Graph$Builder: _Graph$Builder$$static<T>;
          interface _Graph$Builder<T> {
            addEdge(u: T, v: T): void;
            addNode(node: T): void;
            addNodes(nodes: java.util.Set<T>): void;
            build(): Graph<T>;
            _edges: java.util.Map<T,java.util.Set<T>>;
            _nodes: java.util.Set<T>;
          }
          interface Graph$Builder<T> extends CombineTypes<[_Graph$Builder<T>, java.lang.Object]> {}
          interface _Graph$Edge$$static<T> extends ClassLike {
            _new(u: T, v: T): Graph$Edge<T>;
          }
          let Graph$Edge: _Graph$Edge$$static<T>;
          interface _Graph$Edge<T> {
            equals(o: any): boolean;
            hashCode(): int;
            toString(): string;
            _u: T;
            _v: T;
          }
          interface Graph$Edge<T> extends CombineTypes<[_Graph$Edge<T>, java.lang.Object]> {}
          interface _Graph$TopoSorter$$static<T> extends ClassLike {
            _new(graph: Graph<T>): Graph$TopoSorter<T>;
          }
          let Graph$TopoSorter: _Graph$TopoSorter$$static<T>;
          interface _Graph$TopoSorter<T> {
            ordered(action: java.util.function.Consumer<T>): void;
            reverse(action: java.util.function.Consumer<T>): void;
            _sort(): void;
            _visit(node: T, visited: java.util.Set<T>, done: java.util.Set<T>): void;
            _graph: Graph<T>;
            _result: java.util.Deque<T>;
          }
          interface Graph$TopoSorter<T> extends CombineTypes<[_Graph$TopoSorter<T>, java.lang.Object]> {}
          interface _InverseDepsAnalyzer$$static extends ClassLike {
            new(config: JdepsConfiguration, filter: JdepsFilter, writer: JdepsWriter, verbose: Analyzer$Type, apiOnly: boolean): InverseDepsAnalyzer;
          }
          let InverseDepsAnalyzer: _InverseDepsAnalyzer$$static;
          interface _InverseDepsAnalyzer {
            _findPaths(graph: Graph<Archive>, target: Archive): java.util.Set<java.util.Deque<Archive>>;
            inverseDependences(): java.util.Set<java.util.Deque<Archive>>;
            _makePaths(path: java.util.Deque<Archive>): java.util.stream.Stream<java.util.Deque<Archive>>;
            run(): boolean;
            targets(): java.util.Set<Archive>;
            _endPoints: java.util.Map<Archive,java.util.Set<Archive>>;
            _targets: java.util.Set<Archive>;
          }
          interface InverseDepsAnalyzer extends CombineTypes<[_InverseDepsAnalyzer, com.sun.tools.jdeps.DepsAnalyzer]> {}
          interface _JdepsConfiguration$$static extends ClassLike {
            isToken(name: string): boolean;
            readonly ALL_DEFAULT: string;
            readonly ALL_MODULE_PATH: string;
            readonly ALL_SYSTEM: string;
            readonly MODULE_INFO: string;
          }
          let JdepsConfiguration: _JdepsConfiguration$$static;
          interface _JdepsConfiguration {
            _addModuleReference(mref: java.lang.module.ModuleReference): void;
            _addPackagesInUnnamedModule(archive: Archive): void;
            classPathArchives(): java.util.List<Archive>;
            close(): void;
            findClass(location: tools.classfile.Dependency$Location): java.util.Optional<Archive>;
            findModule(name: string): java.util.Optional<Module>;
            findModuleDescriptor(name: string): java.util.Optional<java.lang.module.ModuleDescriptor>;
            getModules(): java.util.Map<string,Module>;
            getVersion(): java.lang.Runtime$Version;
            _initProfiles(): void;
            initialArchives(): java.util.List<Archive>;
            resolve(roots: java.util.Set<string>): java.lang.module.Configuration;
            rootModules(): java.util.Set<Module>;
            splitPackages(): java.util.Map<string,java.util.Set<string>>;
            toModule(mref: java.lang.module.ModuleReference): Module;
            _toPackageName(name: string): string;
            _classpathArchives: java.util.List<Archive>;
            _finder: java.lang.module.ModuleFinder;
            _initialArchives: java.util.List<Archive>;
            _nameToModule: java.util.Map<string,Module>;
            _packageToModule: java.util.Map<string,Module>;
            _packageToUnnamedModule: java.util.Map<string,java.util.List<Archive>>;
            _rootModules: java.util.Set<Module>;
            _system: JdepsConfiguration$SystemModuleFinder;
            _version: java.lang.Runtime$Version;
          }
          interface JdepsConfiguration extends CombineTypes<[_JdepsConfiguration, java.lang.Object, java.lang.AutoCloseable]> {}
          interface _JdepsConfiguration$Builder$$static extends ClassLike {
            _createModulePathFinder(mpaths: string): java.lang.module.ModuleFinder;
            new(): JdepsConfiguration$Builder;
            new(javaHome: string): JdepsConfiguration$Builder;
          }
          let JdepsConfiguration$Builder: _JdepsConfiguration$Builder$$static;
          interface _JdepsConfiguration$Builder {
            addClassPath(classPath: string): JdepsConfiguration$Builder;
            addRoot(path: java.nio.file.Path): JdepsConfiguration$Builder;
            addmods(addmods: java.util.Set<string>): JdepsConfiguration$Builder;
            appModulePath(modulePath: string): JdepsConfiguration$Builder;
            build(): JdepsConfiguration;
            _getClassPaths(cpaths: string): java.util.List<java.nio.file.Path>;
            multiRelease(version: java.lang.Runtime$Version): JdepsConfiguration$Builder;
            upgradeModulePath(upgradeModulePath: string): JdepsConfiguration$Builder;
            _appModulePath: java.lang.module.ModuleFinder;
            _classPaths: java.util.List<java.nio.file.Path>;
            _initialArchives: java.util.List<Archive>;
            _paths: java.util.List<java.nio.file.Path>;
            _rootModules: java.util.Set<string>;
            _systemModulePath: JdepsConfiguration$SystemModuleFinder;
            _tokens: java.util.Set<string>;
            _upgradeModulePath: java.lang.module.ModuleFinder;
            _version: java.lang.Runtime$Version;
          }
          interface JdepsConfiguration$Builder extends CombineTypes<[_JdepsConfiguration$Builder, java.lang.Object]> {}
          interface _JdepsConfiguration$SystemModuleFinder$$static extends ClassLike {
            _JAVA_HOME: string;
            _new(): JdepsConfiguration$SystemModuleFinder;
            _new(javaHome: string): JdepsConfiguration$SystemModuleFinder;
          }
          let JdepsConfiguration$SystemModuleFinder: _JdepsConfiguration$SystemModuleFinder$$static;
          interface _JdepsConfiguration$SystemModuleFinder {
            defaultSystemRoots(): java.util.Set<string>;
            _dropHashes(md: java.lang.module.ModuleDescriptor): java.lang.module.ModuleDescriptor;
            find(mn: string): java.util.Optional<java.lang.module.ModuleReference>;
            findAll(): java.util.Set<java.lang.module.ModuleReference>;
            getClassReader(modulename: string): ClassFileReader;
            moduleNames(): java.util.stream.Stream<string>;
            _toModuleReference(path: java.nio.file.Path): java.lang.module.ModuleReference;
            _walk(root: java.nio.file.Path): java.util.Map<string,java.lang.module.ModuleReference>;
            _fileSystem: java.nio.file.FileSystem;
            _root: java.nio.file.Path;
            _systemModules: java.util.Map<string,java.lang.module.ModuleReference>;
          }
          interface JdepsConfiguration$SystemModuleFinder extends CombineTypes<[_JdepsConfiguration$SystemModuleFinder, java.lang.module.ModuleFinder, java.lang.Object]> {}
          interface _JdepsFilter$$static extends ClassLike {
            readonly DEFAULT_FILTER: JdepsFilter;
          }
          let JdepsFilter: _JdepsFilter$$static;
          interface _JdepsFilter {
            accepts(d: tools.classfile.Dependency): boolean;
            accepts(origin: tools.classfile.Dependency$Location, originArchive: Archive, target: tools.classfile.Dependency$Location, targetArchive: Archive): boolean;
            hasIncludePattern(): boolean;
            hasTargetFilter(): boolean;
            isJDKInternalPackage(module: Module, pn: string): boolean;
            matches(cn: string): boolean;
            matches(source: Archive): boolean;
            requiresFilter(): java.util.Set<string>;
            toString(): string;
            _filter: tools.classfile.Dependency$Filter;
            _filterPattern: java.util.regex.Pattern;
            _filterSameArchive: boolean;
            _filterSamePackage: boolean;
            _findJDKInternals: boolean;
            _findMissingDeps: boolean;
            _includePattern: java.util.regex.Pattern;
            _requires: java.util.Set<string>;
          }
          interface JdepsFilter extends CombineTypes<[_JdepsFilter, com.sun.tools.jdeps.Analyzer$Filter, java.lang.Object, com.sun.tools.classfile.Dependency$Filter]> {}
          interface _JdepsFilter$Builder$$static extends ClassLike {
            new(): JdepsFilter$Builder;
          }
          let JdepsFilter$Builder: _JdepsFilter$Builder$$static;
          interface _JdepsFilter$Builder {
            build(): JdepsFilter;
            filter(regex: java.util.regex.Pattern): JdepsFilter$Builder;
            filter(samePackage: boolean, sameArchive: boolean): JdepsFilter$Builder;
            findJDKInternals(value: boolean): JdepsFilter$Builder;
            findMissingDeps(value: boolean): JdepsFilter$Builder;
            includePattern(regex: java.util.regex.Pattern): JdepsFilter$Builder;
            packages(packageNames: java.util.Set<string>): JdepsFilter$Builder;
            regex(regex: java.util.regex.Pattern): JdepsFilter$Builder;
            requires(name: string, packageNames: java.util.Set<string>): JdepsFilter$Builder;
            _filterPattern: java.util.regex.Pattern;
            _filterSameArchive: boolean;
            _filterSamePackage: boolean;
            _findJDKInterals: boolean;
            _findMissingDeps: boolean;
            _includePattern: java.util.regex.Pattern;
            _regex: java.util.regex.Pattern;
            _requires: java.util.Set<string>;
            _targetPackages: java.util.Set<string>;
          }
          interface JdepsFilter$Builder extends CombineTypes<[_JdepsFilter$Builder, java.lang.Object]> {}
          interface _JdepsTask$$static extends ClassLike {
            _getMessage(key: string, args: any[]): string;
            _getMessage(key: string, ...args: any[]): string;
            _EXIT_ABNORMAL: int;
            _EXIT_CMDERR: int;
            _EXIT_ERROR: int;
            _EXIT_OK: int;
            _EXIT_SYSERR: int;
            _PROGNAME: string;
            _recognizedOptions: JdepsTask$Option[];
            _new(): JdepsTask;
          }
          let JdepsTask: _JdepsTask$$static;
          interface _JdepsTask {
            _analyzeDeps(): JdepsTask$AnalyzeDeps;
            _buildConfig(): JdepsConfiguration;
            _checkModuleDeps(mods: java.util.Set<string>): JdepsTask$CheckModuleDeps;
            _dependencyFilter(config: JdepsConfiguration): JdepsFilter;
            _genDotFile(dir: java.nio.file.Path): JdepsTask$GenDotFile;
            _genModuleInfo(dir: java.nio.file.Path, openModule: boolean): JdepsTask$GenModuleInfo;
            _getOption(name: string): JdepsTask$Option;
            handleOptions(args: string[]): void;
            _listModuleDeps(option: JdepsTask$CommandOption): JdepsTask$ListModuleDeps;
            _replacementFor(cn: string): java.util.Optional<string>;
            _reportError(key: string, args: any[]): void;
            _reportError(key: string, ...args: any[]): void;
            _run(args: string[]): int;
            _run(...args: string[]): int;
            _run(): boolean;
            _setLog(out: java.io.PrintWriter): void;
            _showHelp(): void;
            _showVersion(full: boolean): void;
            _version(key: string): string;
            _warning(key: string, args: any[]): void;
            _warning(key: string, ...args: any[]): void;
            _command: JdepsTask$Command;
            _inputArgs: java.util.List<string>;
            _log: java.io.PrintWriter;
            _options: JdepsTask$Options;
          }
          interface JdepsTask extends CombineTypes<[_JdepsTask, java.lang.Object]> {}
          interface _JdepsTask$AnalyzeDeps$$static extends ClassLike {
            _new(this$0: JdepsTask): JdepsTask$AnalyzeDeps;
            _new(this$0: JdepsTask, option: JdepsTask$CommandOption): JdepsTask$AnalyzeDeps;
          }
          let JdepsTask$AnalyzeDeps: _JdepsTask$AnalyzeDeps$$static;
          interface _JdepsTask$AnalyzeDeps {
            _checkOptions(): boolean;
            _getAnalyzerType(): Analyzer$Type;
            _run(config: JdepsConfiguration): boolean;
            _run(config: JdepsConfiguration, writer: JdepsWriter, type: Analyzer$Type): boolean;
            _this$0: JdepsTask;
            _writer: JdepsWriter;
          }
          interface JdepsTask$AnalyzeDeps extends CombineTypes<[_JdepsTask$AnalyzeDeps, com.sun.tools.jdeps.JdepsTask$Command]> {}
          interface _JdepsTask$BadArgs$$static extends ClassLike {
            _serialVersionUID: long;
            _new(key: string, args: any[]): JdepsTask$BadArgs;
            _new(key: string, ...args: any[]): JdepsTask$BadArgs;
          }
          let JdepsTask$BadArgs: _JdepsTask$BadArgs$$static;
          interface _JdepsTask$BadArgs {
            getArgs(): any[];
            getKey(): string;
            _showUsage(b: boolean): JdepsTask$BadArgs;
            showUsage(): boolean;
            _args: any[];
            _key: string;
            _showUsage: boolean;
          }
          interface JdepsTask$BadArgs extends CombineTypes<[_JdepsTask$BadArgs, com.sun.tools.jdeps.JdepsTask$BadArguments, java.lang.Exception]> {}
          interface _JdepsTask$BadArguments$$static extends ClassLike {
          }
          let JdepsTask$BadArguments: _JdepsTask$BadArguments$$static;
          interface _JdepsTask$BadArguments {
            getArgs(): any[];
            getKey(): string;
            showUsage(): boolean;
          }
          interface JdepsTask$BadArguments extends CombineTypes<[_JdepsTask$BadArguments, java.lang.Object]> {}
          interface _JdepsTask$CheckModuleDeps$$static extends ClassLike {
            _new(this$0: java.util.Set<string>): JdepsTask$CheckModuleDeps;
          }
          let JdepsTask$CheckModuleDeps: _JdepsTask$CheckModuleDeps$$static;
          interface _JdepsTask$CheckModuleDeps {
            _addModules(): java.util.Set<string>;
            _checkOptions(): boolean;
            _run(config: JdepsConfiguration): boolean;
            _modules: java.util.Set<string>;
            _this$0: JdepsTask;
          }
          interface JdepsTask$CheckModuleDeps extends CombineTypes<[_JdepsTask$CheckModuleDeps, com.sun.tools.jdeps.JdepsTask$Command]> {}
          interface _JdepsTask$Command$$static extends ClassLike {
            _new(this$0: JdepsTask, option: JdepsTask$CommandOption): JdepsTask$Command;
          }
          let JdepsTask$Command: _JdepsTask$Command$$static;
          interface _JdepsTask$Command {
            _addModules(): java.util.Set<string>;
            _checkOptions(): boolean;
            _run(a0: JdepsConfiguration): boolean;
            toString(): string;
            _option: JdepsTask$CommandOption;
          }
          interface JdepsTask$Command extends CombineTypes<[_JdepsTask$Command, java.lang.Object]> {}
          interface _JdepsTask$CommandOption$$static extends ClassLike {
            valueOf(name: string): JdepsTask$CommandOption;
            values(): JdepsTask$CommandOption[];
            readonly ANALYZE_DEPS: JdepsTask$CommandOption;
            readonly CHECK_MODULES: JdepsTask$CommandOption;
            readonly GENERATE_DOT_FILE: JdepsTask$CommandOption;
            readonly GENERATE_MODULE_INFO: JdepsTask$CommandOption;
            readonly GENERATE_OPEN_MODULE: JdepsTask$CommandOption;
            readonly LIST_DEPS: JdepsTask$CommandOption;
            readonly LIST_REDUCED_DEPS: JdepsTask$CommandOption;
            readonly PRINT_MODULE_DEPS: JdepsTask$CommandOption;
          }
          let JdepsTask$CommandOption: _JdepsTask$CommandOption$$static;
          interface _JdepsTask$CommandOption {
            _names(): string[];
            toString(): string;
            _names: string[];
          }
          interface JdepsTask$CommandOption extends CombineTypes<[_JdepsTask$CommandOption]> {}
          interface _JdepsTask$GenDotFile$$static extends ClassLike {
            _new(this$0: JdepsTask, dotOutputDir: java.nio.file.Path): JdepsTask$GenDotFile;
          }
          let JdepsTask$GenDotFile: _JdepsTask$GenDotFile$$static;
          interface _JdepsTask$GenDotFile {
            _run(config: JdepsConfiguration): boolean;
            _dotOutputDir: java.nio.file.Path;
            _this$0: JdepsTask;
          }
          interface JdepsTask$GenDotFile extends CombineTypes<[_JdepsTask$GenDotFile, com.sun.tools.jdeps.JdepsTask$AnalyzeDeps]> {}
          interface _JdepsTask$GenModuleInfo$$static extends ClassLike {
            _new(this$0: JdepsTask, dir: java.nio.file.Path, openModule: boolean): JdepsTask$GenModuleInfo;
          }
          let JdepsTask$GenModuleInfo: _JdepsTask$GenModuleInfo$$static;
          interface _JdepsTask$GenModuleInfo {
            _checkOptions(): boolean;
            _run(config: JdepsConfiguration): boolean;
            _toPackageName(name: string): string;
            _dir: java.nio.file.Path;
            _openModule: boolean;
            _this$0: JdepsTask;
          }
          interface JdepsTask$GenModuleInfo extends CombineTypes<[_JdepsTask$GenModuleInfo, com.sun.tools.jdeps.JdepsTask$Command]> {}
          interface _JdepsTask$HiddenOption$$static extends ClassLike {
            _new(hasArg: boolean, aliases: string[]): JdepsTask$HiddenOption;
            _new(hasArg: boolean, ...aliases: string[]): JdepsTask$HiddenOption;
          }
          let JdepsTask$HiddenOption: _JdepsTask$HiddenOption$$static;
          interface _JdepsTask$HiddenOption {
            _isHidden(): boolean;
          }
          interface JdepsTask$HiddenOption extends CombineTypes<[_JdepsTask$HiddenOption, com.sun.tools.jdeps.JdepsTask$Option]> {}
          interface _JdepsTask$InverseAnalyzeDeps$$static extends ClassLike {
            _new(this$0: JdepsTask): JdepsTask$InverseAnalyzeDeps;
          }
          let JdepsTask$InverseAnalyzeDeps: _JdepsTask$InverseAnalyzeDeps$$static;
          interface _JdepsTask$InverseAnalyzeDeps {
            _addModules(): java.util.Set<string>;
            _checkOptions(): boolean;
            _comparator(): java.util.Comparator<java.util.Deque<Archive>>;
            _run(config: JdepsConfiguration): boolean;
            _toInversePath(path: java.util.Deque<Archive>): string;
            _this$0: JdepsTask;
          }
          interface JdepsTask$InverseAnalyzeDeps extends CombineTypes<[_JdepsTask$InverseAnalyzeDeps, com.sun.tools.jdeps.JdepsTask$AnalyzeDeps]> {}
          interface _JdepsTask$ListModuleDeps$$static extends ClassLike {
            _new(this$0: JdepsTask, option: JdepsTask$CommandOption, jdkinternals: boolean, reduced: boolean): JdepsTask$ListModuleDeps;
            _new(this$0: JdepsTask, option: JdepsTask$CommandOption, jdkinternals: boolean, reduced: boolean, sep: string): JdepsTask$ListModuleDeps;
          }
          let JdepsTask$ListModuleDeps: _JdepsTask$ListModuleDeps$$static;
          interface _JdepsTask$ListModuleDeps {
            _checkOptions(): boolean;
            _run(config: JdepsConfiguration): boolean;
            _jdkinternals: boolean;
            _reduced: boolean;
            _separator: string;
            _this$0: JdepsTask;
          }
          interface JdepsTask$ListModuleDeps extends CombineTypes<[_JdepsTask$ListModuleDeps, com.sun.tools.jdeps.JdepsTask$Command]> {}
          interface _JdepsTask$Option$$static extends ClassLike {
            _new(hasArg: boolean, aliases: string[]): JdepsTask$Option;
            _new(hasArg: boolean, ...aliases: string[]): JdepsTask$Option;
            _new(hasArg: boolean, cmd: JdepsTask$CommandOption): JdepsTask$Option;
          }
          let JdepsTask$Option: _JdepsTask$Option$$static;
          interface _JdepsTask$Option {
            _ignoreRest(): boolean;
            _isHidden(): boolean;
            _matches(opt: string): boolean;
            _process(a0: JdepsTask, a1: string, a2: string): void;
(a0: JdepsTask, a1: string, a2: string): void;
            _aliases: string[];
            _hasArg: boolean;
          }
          interface JdepsTask$Option extends CombineTypes<[_JdepsTask$Option, java.lang.Object]> {}
          interface _JdepsTask$Options$$static extends ClassLike {
            _NO_RECURSIVE: int;
            _RECURSIVE: int;
          }
          let JdepsTask$Options: _JdepsTask$Options$$static;
          interface _JdepsTask$Options {
            _depth(): int;
            _hasFilter(): boolean;
            _hasSourcePath(): boolean;
            _numFilters(): int;
            _addmods: java.util.Set<string>;
            _apiOnly: boolean;
            _classpath: string;
            _compileTimeView: boolean;
            _depth: int;
            _filterRegex: java.util.regex.Pattern;
            _filterSameArchive: boolean;
            _filterSamePackage: boolean;
            _findJDKInternals: boolean;
            _findMissingDeps: boolean;
            _fullVersion: boolean;
            _help: boolean;
            _ignoreMissingDeps: boolean;
            _includePattern: java.util.regex.Pattern;
            _inverse: boolean;
            _modulePath: string;
            _multiRelease: java.lang.Runtime$Version;
            _nowarning: boolean;
            _packageNames: java.util.Set<string>;
            _recursive: int;
            _regex: java.util.regex.Pattern;
            _requires: java.util.Set<string>;
            _rootModules: java.util.Set<string>;
            _showLabel: boolean;
            _showModule: boolean;
            _showProfile: boolean;
            _showSummary: boolean;
            _systemModulePath: string;
            _upgradeModulePath: string;
            _verbose: Analyzer$Type;
            _version: boolean;
          }
          interface JdepsTask$Options extends CombineTypes<[_JdepsTask$Options, java.lang.Object]> {}
          interface _JdepsTask$ResourceBundleHelper$$static extends ClassLike {
            _getMessage(key: string): string;
            _getSuggestedReplacement(key: string): string;
            _getVersion(key: string): string;
            _LS: string;
            _bundle: java.util.ResourceBundle;
            _jdkinternals: java.util.ResourceBundle;
            _versionRB: java.util.ResourceBundle;
          }
          let JdepsTask$ResourceBundleHelper: _JdepsTask$ResourceBundleHelper$$static;
          interface _JdepsTask$ResourceBundleHelper {
          }
          interface JdepsTask$ResourceBundleHelper extends CombineTypes<[_JdepsTask$ResourceBundleHelper, java.lang.Object]> {}
          interface _JdepsTask$SimpleDepVisitor$$static extends ClassLike {
            _new(this$0: JdepsTask): JdepsTask$SimpleDepVisitor;
          }
          let JdepsTask$SimpleDepVisitor: _JdepsTask$SimpleDepVisitor$$static;
          interface _JdepsTask$SimpleDepVisitor {
            visitDependence(origin: string, originArchive: Archive, target: string, targetArchive: Archive): void;
            _source: Archive;
            _this$0: JdepsTask;
          }
          interface JdepsTask$SimpleDepVisitor extends CombineTypes<[_JdepsTask$SimpleDepVisitor, com.sun.tools.jdeps.Analyzer$Visitor, java.lang.Object]> {}
          interface _JdepsTask$UncheckedBadArgs$$static extends ClassLike {
            _serialVersionUID: long;
            _new(cause: JdepsTask$BadArgs): JdepsTask$UncheckedBadArgs;
          }
          let JdepsTask$UncheckedBadArgs: _JdepsTask$UncheckedBadArgs$$static;
          interface _JdepsTask$UncheckedBadArgs {
            getArgs(): any[];
            getKey(): string;
            showUsage(): boolean;
            _cause: JdepsTask$BadArgs;
          }
          interface JdepsTask$UncheckedBadArgs extends CombineTypes<[_JdepsTask$UncheckedBadArgs, java.lang.RuntimeException, com.sun.tools.jdeps.JdepsTask$BadArguments]> {}
          interface _JdepsWriter$$static extends ClassLike {
            newDotWriter(outputdir: java.nio.file.Path, type: Analyzer$Type): JdepsWriter;
            newSimpleWriter(writer: java.io.PrintWriter, type: Analyzer$Type): JdepsWriter;
            _new(type: Analyzer$Type, showProfile: boolean, showModule: boolean): JdepsWriter;
          }
          let JdepsWriter: _JdepsWriter$$static;
          interface _JdepsWriter {
            _generateOutput(a0: java.util.Collection<Archive>, a1: Analyzer): void;
(a0: java.util.Collection<Archive>, a1: Analyzer): void;
            _getProfile(name: string): Profile;
            _showProfileOrModule(m: Module): string;
            _toTag(source: Archive, name: string, target: Archive): string;
            _showModule: boolean;
            _showProfile: boolean;
            _type: Analyzer$Type;
          }
          interface JdepsWriter extends CombineTypes<[_JdepsWriter, java.lang.Object]> {}
          interface _JdepsWriter$DotFileWriter$$static extends ClassLike {
            _new(dir: java.nio.file.Path, type: Analyzer$Type, showProfile: boolean, showModule: boolean, showLabel: boolean): JdepsWriter$DotFileWriter;
          }
          let JdepsWriter$DotFileWriter: _JdepsWriter$DotFileWriter$$static;
          interface _JdepsWriter$DotFileWriter {
            _generateOutput(archives: java.util.Collection<Archive>, analyzer: Analyzer): void;
            _generateSummaryDotFile(archives: java.util.Collection<Archive>, analyzer: Analyzer): void;
            _outputDir: java.nio.file.Path;
            _showLabel: boolean;
          }
          interface JdepsWriter$DotFileWriter extends CombineTypes<[_JdepsWriter$DotFileWriter, com.sun.tools.jdeps.JdepsWriter]> {}
          interface _JdepsWriter$DotFileWriter$DotFileFormatter$$static extends ClassLike {
            _new(this$0: JdepsWriter$DotFileWriter, writer: java.io.PrintWriter, archive: Archive): JdepsWriter$DotFileWriter$DotFileFormatter;
          }
          let JdepsWriter$DotFileWriter$DotFileFormatter: _JdepsWriter$DotFileWriter$DotFileFormatter$$static;
          interface _JdepsWriter$DotFileWriter$DotFileFormatter {
            close(): void;
            visitDependence(origin: string, originArchive: Archive, target: string, targetArchive: Archive): void;
            _name: string;
            _this$0: JdepsWriter$DotFileWriter;
            _writer: java.io.PrintWriter;
          }
          interface JdepsWriter$DotFileWriter$DotFileFormatter extends CombineTypes<[_JdepsWriter$DotFileWriter$DotFileFormatter, com.sun.tools.jdeps.Analyzer$Visitor, java.lang.Object, java.lang.AutoCloseable]> {}
          interface _JdepsWriter$DotFileWriter$SummaryDotFile$$static extends ClassLike {
            _new(this$0: JdepsWriter$DotFileWriter, writer: java.io.PrintWriter, type: Analyzer$Type): JdepsWriter$DotFileWriter$SummaryDotFile;
          }
          let JdepsWriter$DotFileWriter$SummaryDotFile: _JdepsWriter$DotFileWriter$SummaryDotFile$$static;
          interface _JdepsWriter$DotFileWriter$SummaryDotFile {
            close(): void;
            _getLabel(origin: Archive, target: Archive): string;
            _labelBuilder(): Analyzer$Visitor;
            visitDependence(origin: string, originArchive: Archive, target: string, targetArchive: Archive): void;
            _edges: java.util.Map<Archive,java.util.Map<Archive,jdeps$stringBuilder>>;
            _this$0: JdepsWriter$DotFileWriter;
            _type: Analyzer$Type;
            _writer: java.io.PrintWriter;
          }
          interface JdepsWriter$DotFileWriter$SummaryDotFile extends CombineTypes<[_JdepsWriter$DotFileWriter$SummaryDotFile, com.sun.tools.jdeps.Analyzer$Visitor, java.lang.Object, java.lang.AutoCloseable]> {}
          interface _JdepsWriter$SimpleWriter$$static extends ClassLike {
            _new(writer: java.io.PrintWriter, type: Analyzer$Type, showProfile: boolean, showModule: boolean): JdepsWriter$SimpleWriter;
          }
          let JdepsWriter$SimpleWriter: _JdepsWriter$SimpleWriter$$static;
          interface _JdepsWriter$SimpleWriter {
            _generateOutput(archives: java.util.Collection<Archive>, analyzer: Analyzer): void;
            _writer: java.io.PrintWriter;
          }
          interface JdepsWriter$SimpleWriter extends CombineTypes<[_JdepsWriter$SimpleWriter, com.sun.tools.jdeps.JdepsWriter]> {}
          interface _JdepsWriter$SimpleWriter$RawOutputFormatter$$static extends ClassLike {
            _new(this$0: JdepsWriter$SimpleWriter, writer: java.io.PrintWriter): JdepsWriter$SimpleWriter$RawOutputFormatter;
          }
          let JdepsWriter$SimpleWriter$RawOutputFormatter: _JdepsWriter$SimpleWriter$RawOutputFormatter$$static;
          interface _JdepsWriter$SimpleWriter$RawOutputFormatter {
            visitDependence(origin: string, originArchive: Archive, target: string, targetArchive: Archive): void;
            _pkg: string;
            _this$0: JdepsWriter$SimpleWriter;
            _writer: java.io.PrintWriter;
          }
          interface JdepsWriter$SimpleWriter$RawOutputFormatter extends CombineTypes<[_JdepsWriter$SimpleWriter$RawOutputFormatter, com.sun.tools.jdeps.Analyzer$Visitor, java.lang.Object]> {}
          interface _JdepsWriter$SimpleWriter$RawSummaryFormatter$$static extends ClassLike {
            _new(this$0: JdepsWriter$SimpleWriter, writer: java.io.PrintWriter): JdepsWriter$SimpleWriter$RawSummaryFormatter;
          }
          let JdepsWriter$SimpleWriter$RawSummaryFormatter: _JdepsWriter$SimpleWriter$RawSummaryFormatter$$static;
          interface _JdepsWriter$SimpleWriter$RawSummaryFormatter {
            printModuleDescriptor(module: Module): void;
            visitDependence(origin: string, originArchive: Archive, target: string, targetArchive: Archive): void;
            _this$0: JdepsWriter$SimpleWriter;
            _writer: java.io.PrintWriter;
          }
          interface JdepsWriter$SimpleWriter$RawSummaryFormatter extends CombineTypes<[_JdepsWriter$SimpleWriter$RawSummaryFormatter, com.sun.tools.jdeps.Analyzer$Visitor, java.lang.Object]> {}
          interface _Main$$static extends ClassLike {
            main(args: string[]): void;
            main(...args: string[]): void;
            run(args: string[], out: java.io.PrintWriter): int;
            new(): Main;
          }
          let Main: _Main$$static;
          interface _Main {
          }
          interface Main extends CombineTypes<[_Main, java.lang.Object]> {}
          interface _Main$JDepsToolProvider$$static extends ClassLike {
            new(): Main$JDepsToolProvider;
          }
          let Main$JDepsToolProvider: _Main$JDepsToolProvider$$static;
          interface _Main$JDepsToolProvider {
            description(): java.util.Optional<string>;
            name(): string;
            run(out: java.io.PrintWriter, err: java.io.PrintWriter, args: string[]): int;
            run(out: java.io.PrintWriter, err: java.io.PrintWriter, ...args: string[]): int;
          }
          interface Main$JDepsToolProvider extends CombineTypes<[_Main$JDepsToolProvider, java.lang.Object, java.util.spi.ToolProvider]> {}
          interface _Module$$static extends ClassLike {
            _trace(fmt: string, args: any[]): void;
            _trace(fmt: string, ...args: any[]): void;
            _trace(traceOn: boolean, fmt: string, args: any[]): void;
            _trace(traceOn: boolean, fmt: string, ...args: any[]): void;
            _DEBUG: boolean;
            _JDK_UNSUPPORTED: string;
            _UNNAMED_MODULE: Module;
            _new(name: string): Module;
            _new(name: string, descriptor: java.lang.module.ModuleDescriptor, isSystem: boolean): Module;
          }
          let Module: _Module$$static;
          interface _Module {
            descriptor(): java.lang.module.ModuleDescriptor;
            exports(): java.util.Map<string,java.util.Set<string>>;
            getModule(): Module;
            isAutomatic(): boolean;
            isExported(pn: string): boolean;
            isExported(pn: string, target: string): boolean;
            isJDK(): boolean;
            isJDKUnsupported(): boolean;
            isNamed(): boolean;
            isOpen(pn: string): boolean;
            isOpen(pn: string, target: string): boolean;
            isSystem(): boolean;
            location(): java.net.URI;
            name(): string;
            packages(): java.util.Set<string>;
            toNormalModule(requires: java.util.Map<string,boolean>): Module;
            toString(): string;
            _descriptor: java.lang.module.ModuleDescriptor;
            _exports: java.util.Map<string,java.util.Set<string>>;
            _isSystem: boolean;
            _location: java.net.URI;
            _opens: java.util.Map<string,java.util.Set<string>>;
          }
          interface Module extends CombineTypes<[_Module, com.sun.tools.jdeps.Archive]> {}
          interface _Module$Builder$$static extends ClassLike {
            new(md: java.lang.module.ModuleDescriptor): Module$Builder;
            new(md: java.lang.module.ModuleDescriptor, isSystem: boolean): Module$Builder;
          }
          let Module$Builder: _Module$Builder$$static;
          interface _Module$Builder {
            build(): Module;
            classes(reader: ClassFileReader): Module$Builder;
            location(location: java.net.URI): Module$Builder;
            _descriptor: java.lang.module.ModuleDescriptor;
            _isSystem: boolean;
            _location: java.net.URI;
            _name: string;
            _reader: ClassFileReader;
          }
          interface Module$Builder extends CombineTypes<[_Module$Builder, java.lang.Object]> {}
          interface _Module$NormalModule$$static extends ClassLike {
          }
          let Module$NormalModule: _Module$NormalModule$$static;
          interface _Module$NormalModule {
            descriptor(): java.lang.module.ModuleDescriptor;
            _md: java.lang.module.ModuleDescriptor;
          }
          interface Module$NormalModule extends CombineTypes<[_Module$NormalModule, com.sun.tools.jdeps.Module]> {}
          interface _Module$UnnamedModule$$static extends ClassLike {
          }
          let Module$UnnamedModule: _Module$UnnamedModule$$static;
          interface _Module$UnnamedModule {
            isExported(pn: string): boolean;
            name(): string;
          }
          interface Module$UnnamedModule extends CombineTypes<[_Module$UnnamedModule, com.sun.tools.jdeps.Module]> {}
          interface _ModuleAnalyzer$$static extends ClassLike {
            _JAVA_BASE: string;
            new(config: JdepsConfiguration, log: java.io.PrintWriter, names: java.util.Set<string>): ModuleAnalyzer;
          }
          let ModuleAnalyzer: _ModuleAnalyzer$$static;
          interface _ModuleAnalyzer {
            descriptors(name: string): java.lang.module.ModuleDescriptor[];
            _matches(md: java.lang.module.ModuleDescriptor, other: java.lang.module.ModuleDescriptor): boolean;
            run(ignoreMissingDeps: boolean): boolean;
            unusedQualifiedExports(name: string): java.util.Map<string,java.util.Set<string>>;
            _configuration: JdepsConfiguration;
            _dependencyFinder: DependencyFinder;
            _log: java.io.PrintWriter;
            _modules: java.util.Map<Module,ModuleAnalyzer$ModuleDeps>;
          }
          interface ModuleAnalyzer extends CombineTypes<[_ModuleAnalyzer, java.lang.Object]> {}
          interface _ModuleAnalyzer$ModuleDeps$$static extends ClassLike {
            _new(this$0: ModuleAnalyzer, root: Module): ModuleAnalyzer$ModuleDeps;
          }
          let ModuleAnalyzer$ModuleDeps: _ModuleAnalyzer$ModuleDeps$$static;
          interface _ModuleAnalyzer$ModuleDeps {
            _analyzeDeps(): boolean;
            _buildReducedGraph(): Graph<Module>;
            _checkQualifiedExports(): void;
            _computeRequires(ignoreMissingDeps: boolean): void;
            _computeRequires(apionly: boolean, ignoreMissingDeps: boolean): java.util.stream.Stream<Module>;
            _computeRequiresTransitive(ignoreMissingDeps: boolean): void;
            _descriptor(): java.lang.module.ModuleDescriptor;
            _descriptor(requiresTransitive: java.util.Set<Module>, requires: java.util.Set<Module>): java.lang.module.ModuleDescriptor;
            _hasMissingDependencies(): boolean;
            _printModuleDescriptor(): void;
            _printModuleDescriptor(out: java.io.PrintWriter, module: Module): void;
            _reduced(): java.lang.module.ModuleDescriptor;
            _showMissingDeps(): void;
            _unusedQualifiedExports(): java.util.Map<string,java.util.Set<string>>;
            _requires: java.util.Set<Module>;
            _requiresTransitive: java.util.Set<Module>;
            _root: Module;
            _this$0: ModuleAnalyzer;
            _unusedQualifiedExports: java.util.Map<string,java.util.Set<string>>;
          }
          interface ModuleAnalyzer$ModuleDeps extends CombineTypes<[_ModuleAnalyzer$ModuleDeps, java.lang.Object]> {}
          interface _ModuleDotGraph$$static extends ClassLike {
            new(config: JdepsConfiguration, apiOnly: boolean): ModuleDotGraph;
            new(configurations: java.util.Map<string,java.lang.module.Configuration>, apiOnly: boolean): ModuleDotGraph;
          }
          let ModuleDotGraph: _ModuleDotGraph$$static;
          interface _ModuleDotGraph {
            genDotFile(path: java.nio.file.Path, name: string, configuration: java.lang.module.Configuration, attributes: ModuleDotGraph$Attributes): void;
            genDotFiles(dir: java.nio.file.Path): boolean;
            genDotFiles(dir: java.nio.file.Path, attributes: ModuleDotGraph$Attributes): boolean;
            _gengraph(cf: java.lang.module.Configuration): Graph<string>;
            requiresTransitiveGraph(cf: java.lang.module.Configuration, roots: java.util.Set<string>): Graph<string>;
            _toDotFileBaseName(mn: string): string;
            _apiOnly: boolean;
            _config: JdepsConfiguration;
            _configurations: java.util.Map<string,java.lang.module.Configuration>;
          }
          interface ModuleDotGraph extends CombineTypes<[_ModuleDotGraph, java.lang.Object]> {}
          interface _ModuleDotGraph$Attributes$$static extends ClassLike {
            readonly BLACK: string;
            readonly BLUE: string;
            readonly DARK_GRAY: string;
            readonly LIGHT_GRAY: string;
            readonly ORANGE: string;
          }
          let ModuleDotGraph$Attributes: _ModuleDotGraph$Attributes$$static;
          interface _ModuleDotGraph$Attributes {
            arrowColor(): string;
            arrowSize(): int;
            arrowWidth(): int;
            fontColor(): string;
            fontName(): string;
            fontSize(): int;
            javaSubgraphColor(): string;
            jdkSubgraphColor(): string;
            nodeMargin(): string;
            nodeSep(): double;
            rankSep(): double;
            ranks(): java.util.List<java.util.Set<string>>;
            requiresMandatedColor(): string;
            requiresStyle(): string;
            requiresTransitiveStyle(): string;
            weightOf(s: string, t: string): int;
          }
          interface ModuleDotGraph$Attributes extends CombineTypes<[_ModuleDotGraph$Attributes, java.lang.Object]> {}
          interface _ModuleDotGraph$DotGraphAttributes$$static extends ClassLike {
            _ARROW_SIZE: int;
            _ARROW_WIDTH: int;
            _DEFAULT: ModuleDotGraph$DotGraphAttributes;
            _FONT_NAME: string;
            _FONT_SIZE: int;
            new(): ModuleDotGraph$DotGraphAttributes;
          }
          let ModuleDotGraph$DotGraphAttributes: _ModuleDotGraph$DotGraphAttributes$$static;
          interface _ModuleDotGraph$DotGraphAttributes {
            arrowColor(): string;
            arrowSize(): int;
            arrowWidth(): int;
            fontColor(): string;
            fontName(): string;
            fontSize(): int;
          }
          interface ModuleDotGraph$DotGraphAttributes extends CombineTypes<[_ModuleDotGraph$DotGraphAttributes, com.sun.tools.jdeps.ModuleDotGraph$Attributes, java.lang.Object]> {}
          interface _ModuleDotGraph$DotGraphBuilder$$static extends ClassLike {
            _javaSE(): java.util.Set<string>;
            _jdk(): java.util.Set<string>;
            _JAVA_SE_SUBGRAPH: java.util.Set<string>;
            _JDK_SUBGRAPH: java.util.Set<string>;
            new(name: string, graph: Graph<string>, attributes: ModuleDotGraph$Attributes): ModuleDotGraph$DotGraphBuilder;
          }
          let ModuleDotGraph$DotGraphBuilder: _ModuleDotGraph$DotGraphBuilder$$static;
          interface _ModuleDotGraph$DotGraphBuilder {
            build(filename: java.nio.file.Path): void;
            modules(descriptors: java.util.stream.Stream<java.lang.module.ModuleDescriptor>): ModuleDotGraph$DotGraphBuilder;
            printNode(out: java.io.PrintWriter, node: string, color: string, group: string): void;
            printNode(out: java.io.PrintWriter, md: java.lang.module.ModuleDescriptor, edges: java.util.Set<string>): void;
            subgraph(name: string, group: string, color: string, nodes: java.util.Set<string>): ModuleDotGraph$DotGraphBuilder;
            _attributes: ModuleDotGraph$Attributes;
            _descriptors: java.util.TreeSet<java.lang.module.ModuleDescriptor>;
            _graph: Graph<string>;
            _name: string;
            _subgraphs: java.util.List<ModuleDotGraph$DotGraphBuilder$SubGraph>;
          }
          interface ModuleDotGraph$DotGraphBuilder extends CombineTypes<[_ModuleDotGraph$DotGraphBuilder, java.lang.Object]> {}
          interface _ModuleDotGraph$DotGraphBuilder$SubGraph$$static extends ClassLike {
            _new(name: string, group: string, color: string, nodes: java.util.Set<string>): ModuleDotGraph$DotGraphBuilder$SubGraph;
          }
          let ModuleDotGraph$DotGraphBuilder$SubGraph: _ModuleDotGraph$DotGraphBuilder$SubGraph$$static;
          interface _ModuleDotGraph$DotGraphBuilder$SubGraph {
            _color: string;
            _group: string;
            _name: string;
            _nodes: java.util.Set<string>;
          }
          interface ModuleDotGraph$DotGraphBuilder$SubGraph extends CombineTypes<[_ModuleDotGraph$DotGraphBuilder$SubGraph, java.lang.Object]> {}
          interface _ModuleExportsAnalyzer$$static extends ClassLike {
            new(config: JdepsConfiguration, filter: JdepsFilter, showInternals: boolean, reduced: boolean, writer: java.io.PrintWriter, separator: string): ModuleExportsAnalyzer;
          }
          let ModuleExportsAnalyzer: _ModuleExportsAnalyzer$$static;
          interface _ModuleExportsAnalyzer {
            _dependenceStream(): java.util.stream.Stream<java.util.Map<Archive,java.util.Set<string>>>;
            _internalPackages(): java.util.Map<Module,java.util.Set<string>>;
            _modules(): java.util.Set<Module>;
            run(maxDepth: int, ignoreMissingDeps: boolean): boolean;
            _visitMissingDeps(visitor: Analyzer$Visitor): void;
            _deps: java.util.Map<Archive,java.util.Map<Archive,java.util.Set<string>>>;
            _missingDeps: java.util.Map<string,java.util.Set<string>>;
            _reduced: boolean;
            _separator: string;
            _showInternals: boolean;
            _writer: java.io.PrintWriter;
          }
          interface ModuleExportsAnalyzer extends CombineTypes<[_ModuleExportsAnalyzer, com.sun.tools.jdeps.DepsAnalyzer]> {}
          interface _ModuleExportsAnalyzer$RootModule$$static extends ClassLike {
            _NAME: string;
            _new(): ModuleExportsAnalyzer$RootModule;
          }
          let ModuleExportsAnalyzer$RootModule: _ModuleExportsAnalyzer$RootModule$$static;
          interface _ModuleExportsAnalyzer$RootModule {
          }
          interface ModuleExportsAnalyzer$RootModule extends CombineTypes<[_ModuleExportsAnalyzer$RootModule, com.sun.tools.jdeps.Module]> {}
          interface _ModuleGraphBuilder$$static extends ClassLike {
            _new(config: JdepsConfiguration): ModuleGraphBuilder;
          }
          let ModuleGraphBuilder: _ModuleGraphBuilder$$static;
          interface _ModuleGraphBuilder {
            addEdge(a0: any, a1: any): void;
            _addModule(module: Module): ModuleGraphBuilder;
            addNode(a0: any): void;
            addNodes(a0: java.util.Set): void;
            build(): Graph;
            buildGraph(): Graph<Module>;
            _buildGraph(edges: java.util.Map<Module,java.util.Set<Module>>): Graph<Module>;
            reduced(): Graph<Module>;
            requiresTransitive(m: Module): java.util.stream.Stream<Module>;
            _config: JdepsConfiguration;
          }
          interface ModuleGraphBuilder extends CombineTypes<[_ModuleGraphBuilder, Graph$Builder<Module>]> {}
          interface _ModuleInfoBuilder$$static extends ClassLike {
            _toString<M>(mods: java.util.Set<M>, what: string): string;
            new(configuration: JdepsConfiguration, args: java.util.List<string>, outputdir: java.nio.file.Path, open: boolean): ModuleInfoBuilder;
          }
          let ModuleInfoBuilder: _ModuleInfoBuilder$$static;
          interface _ModuleInfoBuilder {
            _automaticModules(): java.util.Set<Module>;
            _computeRequiresTransitive(): java.util.Map<Archive,java.util.Set<Archive>>;
            descriptors(): java.util.stream.Stream<java.lang.module.ModuleDescriptor>;
            _modules(): java.util.stream.Stream<Module>;
            _printModuleInfo(writer: java.io.PrintWriter, md: java.lang.module.ModuleDescriptor): void;
            run(ignoreMissingDeps: boolean, log: java.io.PrintWriter, quiet: boolean): boolean;
            _toNormalModule(module: Module, requiresTransitive: java.util.Set<Archive>, ignoreMissingDeps: boolean): Module;
            _visitMissingDeps(visitor: Analyzer$Visitor): void;
            _writeModuleInfo(file: java.nio.file.Path, md: java.lang.module.ModuleDescriptor): void;
            _analyzer: Analyzer;
            _automaticToNormalModule: java.util.Map<Module,Module>;
            _configuration: JdepsConfiguration;
            _dependencyFinder: DependencyFinder;
            _open: boolean;
            _outputdir: java.nio.file.Path;
          }
          interface ModuleInfoBuilder extends CombineTypes<[_ModuleInfoBuilder, java.lang.Object]> {}
          interface _MultiReleaseException$$static extends ClassLike {
            _serialVersionUID: long;
            new(key: string, params: any[]): MultiReleaseException;
            new(key: string, ...params: any[]): MultiReleaseException;
          }
          let MultiReleaseException: _MultiReleaseException$$static;
          interface _MultiReleaseException {
            getKey(): string;
            getParams(): any[];
            _key: string;
            _params: any[];
          }
          interface MultiReleaseException extends CombineTypes<[_MultiReleaseException, java.lang.RuntimeException]> {}
          interface _Profile$$static extends ClassLike {
            getProfile(pn: string): Profile;
            getProfile(m: Module): Profile;
            getProfileCount(): int;
            _init(systemModules: java.util.Map<string,Module>): void;
            main(args: string[]): void;
            valueOf(name: string): Profile;
            values(): Profile[];
            readonly COMPACT1: Profile;
            readonly COMPACT2: Profile;
            readonly COMPACT3: Profile;
            _JDK: java.util.Set<Module>;
          }
          let Profile: _Profile$$static;
          interface _Profile {
            _addModule(systemModules: java.util.Map<string,Module>, module: Module): void;
            profileName(): string;
            toString(): string;
            _mnames: string[];
            _modules: java.util.Map<string,Module>;
            _name: string;
            _profile: int;
          }
          interface Profile extends CombineTypes<[_Profile]> {}
          interface _VersionHelper$$static extends ClassLike {
            add(jarfile: java.util.jar.JarFile, e: java.util.jar.JarEntry, cf: tools.classfile.ClassFile): void;
            get(classname: string): string;
            _META_INF_VERSIONS: string;
            _nameToVersion: java.util.Map<string,string>;
            new(): VersionHelper;
          }
          let VersionHelper: _VersionHelper$$static;
          interface _VersionHelper {
          }
          interface VersionHelper extends CombineTypes<[_VersionHelper, java.lang.Object]> {}
        }
      }
    }
  }
}
