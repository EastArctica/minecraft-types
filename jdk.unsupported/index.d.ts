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
      module nio {
        module file {
          interface _ExtendedCopyOption$$static extends ClassLike {
            valueOf(name: string): ExtendedCopyOption;
            values(): ExtendedCopyOption[];
            readonly INTERRUPTIBLE: ExtendedCopyOption;
          }
          let ExtendedCopyOption: _ExtendedCopyOption$$static;
          interface _ExtendedCopyOption {
          }
          interface ExtendedCopyOption extends CombineTypes<[_ExtendedCopyOption, java.nio.file.CopyOption]> {}
          interface _ExtendedOpenOption$$static extends ClassLike {
            valueOf(name: string): ExtendedOpenOption;
            values(): ExtendedOpenOption[];
            readonly DIRECT: ExtendedOpenOption;
            readonly NOSHARE_DELETE: ExtendedOpenOption;
            readonly NOSHARE_READ: ExtendedOpenOption;
            readonly NOSHARE_WRITE: ExtendedOpenOption;
          }
          let ExtendedOpenOption: _ExtendedOpenOption$$static;
          interface _ExtendedOpenOption {
          }
          interface ExtendedOpenOption extends CombineTypes<[_ExtendedOpenOption, java.nio.file.OpenOption]> {}
          interface _ExtendedWatchEventModifier$$static extends ClassLike {
            valueOf(name: string): ExtendedWatchEventModifier;
            values(): ExtendedWatchEventModifier[];
            readonly FILE_TREE: ExtendedWatchEventModifier;
          }
          let ExtendedWatchEventModifier: _ExtendedWatchEventModifier$$static;
          interface _ExtendedWatchEventModifier {
          }
          interface ExtendedWatchEventModifier extends CombineTypes<[_ExtendedWatchEventModifier, java.nio.file.WatchEvent$Modifier]> {}
          interface _SensitivityWatchEventModifier$$static extends ClassLike {
            valueOf(name: string): SensitivityWatchEventModifier;
            values(): SensitivityWatchEventModifier[];
            readonly HIGH: SensitivityWatchEventModifier;
            readonly LOW: SensitivityWatchEventModifier;
            readonly MEDIUM: SensitivityWatchEventModifier;
          }
          let SensitivityWatchEventModifier: _SensitivityWatchEventModifier$$static;
          interface _SensitivityWatchEventModifier {
            sensitivityValueInSeconds(): int;
            _sensitivity: int;
          }
          interface SensitivityWatchEventModifier extends CombineTypes<[_SensitivityWatchEventModifier, java.nio.file.WatchEvent$Modifier]> {}
        }
      }
    }
  }
  module sun {
    module misc {
      interface _Signal$$static extends ClassLike {
        handle(sig: Signal, handler: SignalHandler): SignalHandler;
        raise(sig: Signal): void;
        new(name: string): Signal;
      }
      let Signal: _Signal$$static;
      interface _Signal {
        equals(other: any): boolean;
        getName(): string;
        getNumber(): int;
        hashCode(): int;
        toString(): string;
        _iSignal: jdk.internal.misc.Signal;
      }
      interface Signal extends CombineTypes<[_Signal, java.lang.Object]> {}
      interface _Signal$InternalMiscHandler$$static extends ClassLike {
        _of(signal: Signal, handler: SignalHandler): jdk.internal.misc.Signal$Handler;
      }
      let Signal$InternalMiscHandler: _Signal$InternalMiscHandler$$static;
      interface _Signal$InternalMiscHandler {
        handle(ignore: jdk.internal.misc.Signal): void;
        _handler: SignalHandler;
        _signal: Signal;
      }
      interface Signal$InternalMiscHandler extends CombineTypes<[_Signal$InternalMiscHandler, jdk.internal.misc.Signal$Handler, java.lang.Object]> {}
      interface _Signal$SunMiscHandler$$static extends ClassLike {
        _of(signal: jdk.internal.misc.Signal, handler: jdk.internal.misc.Signal$Handler): SignalHandler;
        _new(iSignal: jdk.internal.misc.Signal, iHandler: jdk.internal.misc.Signal$Handler): Signal$SunMiscHandler;
      }
      let Signal$SunMiscHandler: _Signal$SunMiscHandler$$static;
      interface _Signal$SunMiscHandler {
        handle(sig: Signal): void;
        toString(): string;
        _iHandler: jdk.internal.misc.Signal$Handler;
        _iSignal: jdk.internal.misc.Signal;
      }
      interface Signal$SunMiscHandler extends CombineTypes<[_Signal$SunMiscHandler, sun.misc.SignalHandler, java.lang.Object]> {}
      interface _SignalHandler$$static extends ClassLike {
        readonly SIG_DFL: SignalHandler;
        readonly SIG_IGN: SignalHandler;
      }
      let SignalHandler: _SignalHandler$$static;
      interface _SignalHandler {
        handle(a0: Signal): void;
(a0: Signal): void;
      }
      interface SignalHandler extends CombineTypes<[_SignalHandler, java.lang.Object]> {}
      interface _Unsafe$$static extends ClassLike {
        getUnsafe(): Unsafe;
        readonly ADDRESS_SIZE: int;
        readonly ARRAY_BOOLEAN_BASE_OFFSET: int;
        readonly ARRAY_BOOLEAN_INDEX_SCALE: int;
        readonly ARRAY_BYTE_BASE_OFFSET: int;
        readonly ARRAY_BYTE_INDEX_SCALE: int;
        readonly ARRAY_CHAR_BASE_OFFSET: int;
        readonly ARRAY_CHAR_INDEX_SCALE: int;
        readonly ARRAY_DOUBLE_BASE_OFFSET: int;
        readonly ARRAY_DOUBLE_INDEX_SCALE: int;
        readonly ARRAY_FLOAT_BASE_OFFSET: int;
        readonly ARRAY_FLOAT_INDEX_SCALE: int;
        readonly ARRAY_INT_BASE_OFFSET: int;
        readonly ARRAY_INT_INDEX_SCALE: int;
        readonly ARRAY_LONG_BASE_OFFSET: int;
        readonly ARRAY_LONG_INDEX_SCALE: int;
        readonly ARRAY_OBJECT_BASE_OFFSET: int;
        readonly ARRAY_OBJECT_INDEX_SCALE: int;
        readonly ARRAY_SHORT_BASE_OFFSET: int;
        readonly ARRAY_SHORT_INDEX_SCALE: int;
        readonly INVALID_FIELD_OFFSET: int;
        _theInternalUnsafe: jdk.internal.misc.Unsafe;
        _theUnsafe: Unsafe;
      }
      let Unsafe: _Unsafe$$static;
      interface _Unsafe {
        addressSize(): int;
        allocateInstance(cls: java.lang.Class<any>): any;
        allocateMemory(bytes: long): long;
        arrayBaseOffset(arrayClass: java.lang.Class<any>): int;
        arrayIndexScale(arrayClass: java.lang.Class<any>): int;
        compareAndSwapInt(o: any, offset: long, a2: int, expected: int): boolean;
        compareAndSwapLong(o: any, offset: long, a2: long, expected: long): boolean;
        compareAndSwapObject(o: any, offset: long, a2: any, expected: any): boolean;
        copyMemory(srcBase: any, srcOffset: long, a2: any, destBase: long, destOffset: long): void;
        copyMemory(srcAddress: long, a1: long, destAddress: long): void;
        ensureClassInitialized(c: java.lang.Class<any>): void;
        freeMemory(address: long): void;
        fullFence(): void;
        getAddress(address: long): long;
        getAndAddInt(o: any, offset: long, a2: int): int;
        getAndAddLong(o: any, offset: long, a2: long): long;
        getAndSetInt(o: any, offset: long, a2: int): int;
        getAndSetLong(o: any, offset: long, a2: long): long;
        getAndSetObject(o: any, offset: long, a2: any): any;
        getBoolean(o: any, offset: long): boolean;
        getBooleanVolatile(o: any, offset: long): boolean;
        getByte(o: any, offset: long): byte;
        getByte(address: long): byte;
        getByteVolatile(o: any, offset: long): byte;
        getChar(o: any, offset: long): char;
        getChar(address: long): char;
        getCharVolatile(o: any, offset: long): char;
        getDouble(o: any, offset: long): double;
        getDouble(address: long): double;
        getDoubleVolatile(o: any, offset: long): double;
        getFloat(o: any, offset: long): float;
        getFloat(address: long): float;
        getFloatVolatile(o: any, offset: long): float;
        getInt(o: any, offset: long): int;
        getInt(address: long): int;
        getIntVolatile(o: any, offset: long): int;
        getLoadAverage(loadavg: double[], nelems: int): int;
        getLong(o: any, offset: long): long;
        getLong(address: long): long;
        getLongVolatile(o: any, offset: long): long;
        getObject(o: any, offset: long): any;
        getObjectVolatile(o: any, offset: long): any;
        getShort(o: any, offset: long): short;
        getShort(address: long): short;
        getShortVolatile(o: any, offset: long): short;
        invokeCleaner(directBuffer: java.nio.ByteBuffer): void;
        loadFence(): void;
        objectFieldOffset(f: java.lang.reflect.Field): long;
        pageSize(): int;
        park(isAbsolute: boolean, time: long): void;
        putAddress(address: long, a1: long): void;
        putBoolean(o: any, offset: long, a2: boolean): void;
        putBooleanVolatile(o: any, offset: long, a2: boolean): void;
        putByte(o: any, offset: long, a2: byte): void;
        putByte(address: long, a1: byte): void;
        putByteVolatile(o: any, offset: long, a2: byte): void;
        putChar(o: any, offset: long, a2: char): void;
        putChar(address: long, a1: char): void;
        putCharVolatile(o: any, offset: long, a2: char): void;
        putDouble(o: any, offset: long, a2: double): void;
        putDouble(address: long, a1: double): void;
        putDoubleVolatile(o: any, offset: long, a2: double): void;
        putFloat(o: any, offset: long, a2: float): void;
        putFloat(address: long, a1: float): void;
        putFloatVolatile(o: any, offset: long, a2: float): void;
        putInt(o: any, offset: long, a2: int): void;
        putInt(address: long, a1: int): void;
        putIntVolatile(o: any, offset: long, a2: int): void;
        putLong(o: any, offset: long, a2: long): void;
        putLong(address: long, a1: long): void;
        putLongVolatile(o: any, offset: long, a2: long): void;
        putObject(o: any, offset: long, a2: any): void;
        putObjectVolatile(o: any, offset: long, a2: any): void;
        putOrderedInt(o: any, offset: long, a2: int): void;
        putOrderedLong(o: any, offset: long, a2: long): void;
        putOrderedObject(o: any, offset: long, a2: any): void;
        putShort(o: any, offset: long, a2: short): void;
        putShort(address: long, a1: short): void;
        putShortVolatile(o: any, offset: long, a2: short): void;
        reallocateMemory(address: long, a1: long): long;
        setMemory(o: any, offset: long, a2: long, bytes: byte): void;
        setMemory(address: long, a1: long, bytes: byte): void;
        shouldBeInitialized(c: java.lang.Class<any>): boolean;
        staticFieldBase(f: java.lang.reflect.Field): any;
        staticFieldOffset(f: java.lang.reflect.Field): long;
        storeFence(): void;
        throwException(ee: java.lang.Throwable): void;
        unpark(thread: any): void;
      }
      interface Unsafe extends CombineTypes<[_Unsafe, java.lang.Object]> {}
    }
    module reflect {
      interface _ReflectionFactory$$static extends ClassLike {
        getReflectionFactory(): ReflectionFactory;
        _REFLECTION_FACTORY_ACCESS_PERM: java.security.Permission;
        _delegate: jdk.internal.reflect.ReflectionFactory;
        _soleInstance: ReflectionFactory;
      }
      let ReflectionFactory: _ReflectionFactory$$static;
      interface _ReflectionFactory {
        hasStaticInitializerForSerialization(cl: java.lang.Class<any>): boolean;
        newConstructorForExternalization(cl: java.lang.Class<any>): java.lang.reflect.Constructor<any>;
        newConstructorForSerialization(cl: java.lang.Class<any>, constructorToCall: java.lang.reflect.Constructor<any>): java.lang.reflect.Constructor<any>;
        newConstructorForSerialization(cl: java.lang.Class<any>): java.lang.reflect.Constructor<any>;
        newOptionalDataExceptionForSerialization(bool: boolean): java.io.OptionalDataException;
        readObjectForSerialization(cl: java.lang.Class<any>): java.lang.invoke.MethodHandle;
        readObjectNoDataForSerialization(cl: java.lang.Class<any>): java.lang.invoke.MethodHandle;
        readResolveForSerialization(cl: java.lang.Class<any>): java.lang.invoke.MethodHandle;
        writeObjectForSerialization(cl: java.lang.Class<any>): java.lang.invoke.MethodHandle;
        writeReplaceForSerialization(cl: java.lang.Class<any>): java.lang.invoke.MethodHandle;
      }
      interface ReflectionFactory extends CombineTypes<[_ReflectionFactory, java.lang.Object]> {}
    }
  }
}
