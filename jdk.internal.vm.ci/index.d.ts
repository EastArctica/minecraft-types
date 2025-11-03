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
    module vm {
      module ci {
        module aarch64 {
          interface _AArch64$$static extends ClassLike {
            readonly CPU: ci.code.Register$RegisterCategory;
            readonly SIMD: ci.code.Register$RegisterCategory;
            readonly allRegisters: ci.code.RegisterArray;
            readonly cpuRegisters: ci.code.RegisterArray;
            readonly lr: ci.code.Register;
            readonly r0: ci.code.Register;
            readonly r1: ci.code.Register;
            readonly r10: ci.code.Register;
            readonly r11: ci.code.Register;
            readonly r12: ci.code.Register;
            readonly r13: ci.code.Register;
            readonly r14: ci.code.Register;
            readonly r15: ci.code.Register;
            readonly r16: ci.code.Register;
            readonly r17: ci.code.Register;
            readonly r18: ci.code.Register;
            readonly r19: ci.code.Register;
            readonly r2: ci.code.Register;
            readonly r20: ci.code.Register;
            readonly r21: ci.code.Register;
            readonly r22: ci.code.Register;
            readonly r23: ci.code.Register;
            readonly r24: ci.code.Register;
            readonly r25: ci.code.Register;
            readonly r26: ci.code.Register;
            readonly r27: ci.code.Register;
            readonly r28: ci.code.Register;
            readonly r29: ci.code.Register;
            readonly r3: ci.code.Register;
            readonly r30: ci.code.Register;
            readonly r31: ci.code.Register;
            readonly r4: ci.code.Register;
            readonly r5: ci.code.Register;
            readonly r6: ci.code.Register;
            readonly r7: ci.code.Register;
            readonly r8: ci.code.Register;
            readonly r9: ci.code.Register;
            readonly rscratch1: ci.code.Register;
            readonly rscratch2: ci.code.Register;
            readonly simdRegisters: ci.code.RegisterArray;
            readonly sp: ci.code.Register;
            readonly v0: ci.code.Register;
            readonly v1: ci.code.Register;
            readonly v10: ci.code.Register;
            readonly v11: ci.code.Register;
            readonly v12: ci.code.Register;
            readonly v13: ci.code.Register;
            readonly v14: ci.code.Register;
            readonly v15: ci.code.Register;
            readonly v16: ci.code.Register;
            readonly v17: ci.code.Register;
            readonly v18: ci.code.Register;
            readonly v19: ci.code.Register;
            readonly v2: ci.code.Register;
            readonly v20: ci.code.Register;
            readonly v21: ci.code.Register;
            readonly v22: ci.code.Register;
            readonly v23: ci.code.Register;
            readonly v24: ci.code.Register;
            readonly v25: ci.code.Register;
            readonly v26: ci.code.Register;
            readonly v27: ci.code.Register;
            readonly v28: ci.code.Register;
            readonly v29: ci.code.Register;
            readonly v3: ci.code.Register;
            readonly v30: ci.code.Register;
            readonly v31: ci.code.Register;
            readonly v4: ci.code.Register;
            readonly v5: ci.code.Register;
            readonly v6: ci.code.Register;
            readonly v7: ci.code.Register;
            readonly v8: ci.code.Register;
            readonly v9: ci.code.Register;
            readonly zr: ci.code.Register;
            new(features: java.util.EnumSet<AArch64$CPUFeature>, flags: java.util.EnumSet<AArch64$Flag>): AArch64;
          }
          let AArch64: _AArch64$$static;
          interface _AArch64 {
            canStoreValue(category: ci.code.Register$RegisterCategory, platformKind: ci.meta.PlatformKind): boolean;
            getFeatures(): java.util.EnumSet<AArch64$CPUFeature>;
            getFeatures(): java.util.Set;
            getFlags(): java.util.EnumSet<AArch64$Flag>;
            getLargestStorableKind(category: ci.code.Register$RegisterCategory): AArch64Kind;
            getLargestStorableKind(a0: ci.code.Register$RegisterCategory): ci.meta.PlatformKind;
            getPlatformKind(javaKind: ci.meta.JavaKind): ci.meta.PlatformKind;
            _features: java.util.EnumSet<AArch64$CPUFeature>;
            _flags: java.util.EnumSet<AArch64$Flag>;
          }
          interface AArch64 extends CombineTypes<[_AArch64, jdk.vm.ci.code.Architecture]> {}
          interface _AArch64$CPUFeature$$static extends ClassLike {
            valueOf(name: string): AArch64$CPUFeature;
            values(): AArch64$CPUFeature[];
            readonly A53MAC: AArch64$CPUFeature;
            readonly AES: AArch64$CPUFeature;
            readonly ASIMD: AArch64$CPUFeature;
            readonly CRC32: AArch64$CPUFeature;
            readonly DCPOP: AArch64$CPUFeature;
            readonly EVTSTRM: AArch64$CPUFeature;
            readonly FP: AArch64$CPUFeature;
            readonly LSE: AArch64$CPUFeature;
            readonly PACA: AArch64$CPUFeature;
            readonly PMULL: AArch64$CPUFeature;
            readonly SHA1: AArch64$CPUFeature;
            readonly SHA2: AArch64$CPUFeature;
            readonly SHA3: AArch64$CPUFeature;
            readonly SHA512: AArch64$CPUFeature;
            readonly SVE: AArch64$CPUFeature;
            readonly SVE2: AArch64$CPUFeature;
            readonly SVEBITPERM: AArch64$CPUFeature;
          }
          let AArch64$CPUFeature: _AArch64$CPUFeature$$static;
          interface _AArch64$CPUFeature {
          }
          interface AArch64$CPUFeature extends CombineTypes<[_AArch64$CPUFeature, ci.code.CPUFeatureName]> {}
          interface _AArch64$Flag$$static extends ClassLike {
            valueOf(name: string): AArch64$Flag;
            values(): AArch64$Flag[];
            readonly AvoidUnalignedAccesses: AArch64$Flag;
            readonly UseBlockZeroing: AArch64$Flag;
            readonly UseCRC32: AArch64$Flag;
            readonly UseLSE: AArch64$Flag;
            readonly UseNeon: AArch64$Flag;
            readonly UseSIMDForMemoryOps: AArch64$Flag;
          }
          let AArch64$Flag: _AArch64$Flag$$static;
          interface _AArch64$Flag {
          }
          interface AArch64$Flag extends CombineTypes<[_AArch64$Flag]> {}
          interface _AArch64Kind$$static extends ClassLike {
            valueOf(name: string): AArch64Kind;
            values(): AArch64Kind[];
            readonly BYTE: AArch64Kind;
            readonly DOUBLE: AArch64Kind;
            readonly DWORD: AArch64Kind;
            readonly QWORD: AArch64Kind;
            readonly SINGLE: AArch64Kind;
            readonly V128_BYTE: AArch64Kind;
            readonly V128_DOUBLE: AArch64Kind;
            readonly V128_DWORD: AArch64Kind;
            readonly V128_QWORD: AArch64Kind;
            readonly V128_SINGLE: AArch64Kind;
            readonly V128_WORD: AArch64Kind;
            readonly V32_BYTE: AArch64Kind;
            readonly V32_WORD: AArch64Kind;
            readonly V64_BYTE: AArch64Kind;
            readonly V64_DWORD: AArch64Kind;
            readonly V64_WORD: AArch64Kind;
            readonly WORD: AArch64Kind;
          }
          let AArch64Kind: _AArch64Kind$$static;
          interface _AArch64Kind {
            getKey(): ci.meta.PlatformKind$Key;
            getScalar(): AArch64Kind;
            getSizeInBytes(): int;
            getTypeChar(): char;
            getVectorLength(): int;
            isInteger(): boolean;
            isSIMD(): boolean;
            _key: ci.meta.PlatformKind$EnumKey<AArch64Kind>;
            _scalar: AArch64Kind;
            _size: int;
            _vectorLength: int;
          }
          interface AArch64Kind extends CombineTypes<[_AArch64Kind, ci.meta.PlatformKind]> {}
        }
        module amd64 {
          interface _AMD64$$static extends ClassLike {
            readonly CPU: ci.code.Register$RegisterCategory;
            readonly MASK: ci.code.Register$RegisterCategory;
            readonly XMM: ci.code.Register$RegisterCategory;
            readonly allRegisters: ci.code.RegisterArray;
            readonly cpuRegisters: ci.code.Register[];
            readonly k0: ci.code.Register;
            readonly k1: ci.code.Register;
            readonly k2: ci.code.Register;
            readonly k3: ci.code.Register;
            readonly k4: ci.code.Register;
            readonly k5: ci.code.Register;
            readonly k6: ci.code.Register;
            readonly k7: ci.code.Register;
            readonly r10: ci.code.Register;
            readonly r11: ci.code.Register;
            readonly r12: ci.code.Register;
            readonly r13: ci.code.Register;
            readonly r14: ci.code.Register;
            readonly r15: ci.code.Register;
            readonly r8: ci.code.Register;
            readonly r9: ci.code.Register;
            readonly rax: ci.code.Register;
            readonly rbp: ci.code.Register;
            readonly rbx: ci.code.Register;
            readonly rcx: ci.code.Register;
            readonly rdi: ci.code.Register;
            readonly rdx: ci.code.Register;
            readonly rip: ci.code.Register;
            readonly rsi: ci.code.Register;
            readonly rsp: ci.code.Register;
            readonly valueRegistersAVX512: ci.code.RegisterArray;
            readonly valueRegistersSSE: ci.code.RegisterArray;
            readonly xmm0: ci.code.Register;
            readonly xmm1: ci.code.Register;
            readonly xmm10: ci.code.Register;
            readonly xmm11: ci.code.Register;
            readonly xmm12: ci.code.Register;
            readonly xmm13: ci.code.Register;
            readonly xmm14: ci.code.Register;
            readonly xmm15: ci.code.Register;
            readonly xmm16: ci.code.Register;
            readonly xmm17: ci.code.Register;
            readonly xmm18: ci.code.Register;
            readonly xmm19: ci.code.Register;
            readonly xmm2: ci.code.Register;
            readonly xmm20: ci.code.Register;
            readonly xmm21: ci.code.Register;
            readonly xmm22: ci.code.Register;
            readonly xmm23: ci.code.Register;
            readonly xmm24: ci.code.Register;
            readonly xmm25: ci.code.Register;
            readonly xmm26: ci.code.Register;
            readonly xmm27: ci.code.Register;
            readonly xmm28: ci.code.Register;
            readonly xmm29: ci.code.Register;
            readonly xmm3: ci.code.Register;
            readonly xmm30: ci.code.Register;
            readonly xmm31: ci.code.Register;
            readonly xmm4: ci.code.Register;
            readonly xmm5: ci.code.Register;
            readonly xmm6: ci.code.Register;
            readonly xmm7: ci.code.Register;
            readonly xmm8: ci.code.Register;
            readonly xmm9: ci.code.Register;
            readonly xmmRegistersAVX512: ci.code.Register[];
            readonly xmmRegistersSSE: ci.code.Register[];
            new(features: java.util.EnumSet<AMD64$CPUFeature>, flags: java.util.EnumSet<AMD64$Flag>): AMD64;
          }
          let AMD64: _AMD64$$static;
          interface _AMD64 {
            canStoreValue(category: ci.code.Register$RegisterCategory, platformKind: ci.meta.PlatformKind): boolean;
            getAvailableValueRegisters(): ci.code.RegisterArray;
            getFeatures(): java.util.EnumSet<AMD64$CPUFeature>;
            getFeatures(): java.util.Set;
            getFlags(): java.util.EnumSet<AMD64$Flag>;
            getLargestStorableKind(category: ci.code.Register$RegisterCategory): AMD64Kind;
            getLargestStorableKind(a0: ci.code.Register$RegisterCategory): ci.meta.PlatformKind;
            getPlatformKind(javaKind: ci.meta.JavaKind): ci.meta.PlatformKind;
            _features: java.util.EnumSet<AMD64$CPUFeature>;
            _flags: java.util.EnumSet<AMD64$Flag>;
            _largestKind: AMD64Kind;
          }
          interface AMD64 extends CombineTypes<[_AMD64, jdk.vm.ci.code.Architecture]> {}
          interface _AMD64$CPUFeature$$static extends ClassLike {
            valueOf(name: string): AMD64$CPUFeature;
            values(): AMD64$CPUFeature[];
            readonly ADX: AMD64$CPUFeature;
            readonly AES: AMD64$CPUFeature;
            readonly AMD_3DNOW_PREFETCH: AMD64$CPUFeature;
            readonly AVX: AMD64$CPUFeature;
            readonly AVX2: AMD64$CPUFeature;
            readonly AVX512BW: AMD64$CPUFeature;
            readonly AVX512CD: AMD64$CPUFeature;
            readonly AVX512DQ: AMD64$CPUFeature;
            readonly AVX512ER: AMD64$CPUFeature;
            readonly AVX512F: AMD64$CPUFeature;
            readonly AVX512PF: AMD64$CPUFeature;
            readonly AVX512VL: AMD64$CPUFeature;
            readonly AVX512_BITALG: AMD64$CPUFeature;
            readonly AVX512_IFMA: AMD64$CPUFeature;
            readonly AVX512_VAES: AMD64$CPUFeature;
            readonly AVX512_VBMI: AMD64$CPUFeature;
            readonly AVX512_VBMI2: AMD64$CPUFeature;
            readonly AVX512_VNNI: AMD64$CPUFeature;
            readonly AVX512_VPCLMULQDQ: AMD64$CPUFeature;
            readonly AVX512_VPOPCNTDQ: AMD64$CPUFeature;
            readonly BMI1: AMD64$CPUFeature;
            readonly BMI2: AMD64$CPUFeature;
            readonly CET_IBT: AMD64$CPUFeature;
            readonly CET_SS: AMD64$CPUFeature;
            readonly CLMUL: AMD64$CPUFeature;
            readonly CLWB: AMD64$CPUFeature;
            readonly CMOV: AMD64$CPUFeature;
            readonly CX8: AMD64$CPUFeature;
            readonly ERMS: AMD64$CPUFeature;
            readonly F16C: AMD64$CPUFeature;
            readonly FLUSH: AMD64$CPUFeature;
            readonly FLUSHOPT: AMD64$CPUFeature;
            readonly FMA: AMD64$CPUFeature;
            readonly FSRM: AMD64$CPUFeature;
            readonly FXSR: AMD64$CPUFeature;
            readonly GFNI: AMD64$CPUFeature;
            readonly HT: AMD64$CPUFeature;
            readonly HV: AMD64$CPUFeature;
            readonly LZCNT: AMD64$CPUFeature;
            readonly MMX: AMD64$CPUFeature;
            readonly OSPKE: AMD64$CPUFeature;
            readonly PKU: AMD64$CPUFeature;
            readonly POPCNT: AMD64$CPUFeature;
            readonly RDPID: AMD64$CPUFeature;
            readonly RDTSCP: AMD64$CPUFeature;
            readonly RTM: AMD64$CPUFeature;
            readonly SERIALIZE: AMD64$CPUFeature;
            readonly SHA: AMD64$CPUFeature;
            readonly SSE: AMD64$CPUFeature;
            readonly SSE2: AMD64$CPUFeature;
            readonly SSE3: AMD64$CPUFeature;
            readonly SSE4A: AMD64$CPUFeature;
            readonly SSE4_1: AMD64$CPUFeature;
            readonly SSE4_2: AMD64$CPUFeature;
            readonly SSSE3: AMD64$CPUFeature;
            readonly TSC: AMD64$CPUFeature;
            readonly TSCINV: AMD64$CPUFeature;
            readonly TSCINV_BIT: AMD64$CPUFeature;
            readonly VZEROUPPER: AMD64$CPUFeature;
          }
          let AMD64$CPUFeature: _AMD64$CPUFeature$$static;
          interface _AMD64$CPUFeature {
          }
          interface AMD64$CPUFeature extends CombineTypes<[_AMD64$CPUFeature, ci.code.CPUFeatureName]> {}
          interface _AMD64$Flag$$static extends ClassLike {
            valueOf(name: string): AMD64$Flag;
            values(): AMD64$Flag[];
            readonly UseCountLeadingZerosInstruction: AMD64$Flag;
            readonly UseCountTrailingZerosInstruction: AMD64$Flag;
          }
          let AMD64$Flag: _AMD64$Flag$$static;
          interface _AMD64$Flag {
          }
          interface AMD64$Flag extends CombineTypes<[_AMD64$Flag]> {}
          interface _AMD64Kind$$static extends ClassLike {
            valueOf(name: string): AMD64Kind;
            values(): AMD64Kind[];
            readonly BYTE: AMD64Kind;
            readonly DOUBLE: AMD64Kind;
            readonly DWORD: AMD64Kind;
            readonly MASK16: AMD64Kind;
            readonly MASK32: AMD64Kind;
            readonly MASK64: AMD64Kind;
            readonly MASK8: AMD64Kind;
            readonly QWORD: AMD64Kind;
            readonly SINGLE: AMD64Kind;
            readonly V128_BYTE: AMD64Kind;
            readonly V128_DOUBLE: AMD64Kind;
            readonly V128_DWORD: AMD64Kind;
            readonly V128_QWORD: AMD64Kind;
            readonly V128_SINGLE: AMD64Kind;
            readonly V128_WORD: AMD64Kind;
            readonly V256_BYTE: AMD64Kind;
            readonly V256_DOUBLE: AMD64Kind;
            readonly V256_DWORD: AMD64Kind;
            readonly V256_QWORD: AMD64Kind;
            readonly V256_SINGLE: AMD64Kind;
            readonly V256_WORD: AMD64Kind;
            readonly V32_BYTE: AMD64Kind;
            readonly V32_WORD: AMD64Kind;
            readonly V512_BYTE: AMD64Kind;
            readonly V512_DOUBLE: AMD64Kind;
            readonly V512_DWORD: AMD64Kind;
            readonly V512_QWORD: AMD64Kind;
            readonly V512_SINGLE: AMD64Kind;
            readonly V512_WORD: AMD64Kind;
            readonly V64_BYTE: AMD64Kind;
            readonly V64_DWORD: AMD64Kind;
            readonly V64_WORD: AMD64Kind;
            readonly WORD: AMD64Kind;
          }
          let AMD64Kind: _AMD64Kind$$static;
          interface _AMD64Kind {
            getKey(): ci.meta.PlatformKind$Key;
            getScalar(): AMD64Kind;
            getSizeInBytes(): int;
            getTypeChar(): char;
            getVectorLength(): int;
            isInteger(): boolean;
            isMask(): boolean;
            isXMM(): boolean;
            _key: ci.meta.PlatformKind$EnumKey<AMD64Kind>;
            _scalar: AMD64Kind;
            _size: int;
            _vectorLength: int;
          }
          interface AMD64Kind extends CombineTypes<[_AMD64Kind, ci.meta.PlatformKind]> {}
        }
        module code {
          module site {
            interface _Call$$static extends ClassLike {
              new(target: ci.meta.InvokeTarget, pcOffset: int, size: int, direct: boolean, debugInfo: DebugInfo): Call;
            }
            let Call: _Call$$static;
            interface _Call {
              equals(obj: any): boolean;
              toString(): string;
              readonly direct: boolean;
              readonly size: int;
              readonly target: ci.meta.InvokeTarget;
            }
            interface Call extends CombineTypes<[_Call, jdk.vm.ci.code.site.Infopoint]> {}
            interface _ConstantReference$$static extends ClassLike {
              new(constant: ci.meta.VMConstant): ConstantReference;
            }
            let ConstantReference: _ConstantReference$$static;
            interface _ConstantReference {
              equals(obj: any): boolean;
              getConstant(): ci.meta.VMConstant;
              hashCode(): int;
              toString(): string;
              _constant: ci.meta.VMConstant;
            }
            interface ConstantReference extends CombineTypes<[_ConstantReference, jdk.vm.ci.code.site.Reference]> {}
            interface _DataPatch$$static extends ClassLike {
              new(pcOffset: int, reference: Reference): DataPatch;
              new(pcOffset: int, reference: Reference, note: any): DataPatch;
            }
            let DataPatch: _DataPatch$$static;
            interface _DataPatch {
              equals(obj: any): boolean;
              toString(): string;
              note: any;
              reference: Reference;
            }
            interface DataPatch extends CombineTypes<[_DataPatch, jdk.vm.ci.code.site.Site]> {}
            interface _DataSectionReference$$static extends ClassLike {
              new(): DataSectionReference;
            }
            let DataSectionReference: _DataSectionReference$$static;
            interface _DataSectionReference {
              equals(obj: any): boolean;
              getOffset(): int;
              hashCode(): int;
              setOffset(offset: int): void;
              toString(): string;
              _initialized: boolean;
              _offset: int;
            }
            interface DataSectionReference extends CombineTypes<[_DataSectionReference, jdk.vm.ci.code.site.Reference]> {}
            interface _ExceptionHandler$$static extends ClassLike {
              new(pcOffset: int, handlerPos: int): ExceptionHandler;
            }
            let ExceptionHandler: _ExceptionHandler$$static;
            interface _ExceptionHandler {
              equals(obj: any): boolean;
              toString(): string;
              readonly handlerPos: int;
            }
            interface ExceptionHandler extends CombineTypes<[_ExceptionHandler, jdk.vm.ci.code.site.Site]> {}
            interface _ImplicitExceptionDispatch$$static extends ClassLike {
              new(pcOffset: int, dispatchOffset: int, debugInfo: DebugInfo): ImplicitExceptionDispatch;
            }
            let ImplicitExceptionDispatch: _ImplicitExceptionDispatch$$static;
            interface _ImplicitExceptionDispatch {
              equals(obj: any): boolean;
              toString(): string;
              readonly dispatchOffset: int;
            }
            interface ImplicitExceptionDispatch extends CombineTypes<[_ImplicitExceptionDispatch, jdk.vm.ci.code.site.Infopoint]> {}
            interface _Infopoint$$static extends ClassLike {
              _appendDebugInfo(sb: Infopoint$stringBuilder, info: DebugInfo): void;
              new(pcOffset: int, debugInfo: DebugInfo, reason: InfopointReason): Infopoint;
            }
            let Infopoint: _Infopoint$$static;
            interface _Infopoint {
              compareTo(o: Infopoint): int;
              compareTo(a0: any): int;
              equals(obj: any): boolean;
              toString(): string;
              readonly debugInfo: DebugInfo;
              readonly reason: InfopointReason;
            }
            interface Infopoint extends CombineTypes<[_Infopoint, Site, java.lang.Comparable<Infopoint>]> {}
            interface _InfopointReason$$static extends ClassLike {
              valueOf(name: string): InfopointReason;
              values(): InfopointReason[];
              readonly BYTECODE_POSITION: InfopointReason;
              readonly CALL: InfopointReason;
              readonly IMPLICIT_EXCEPTION: InfopointReason;
              readonly METHOD_END: InfopointReason;
              readonly METHOD_START: InfopointReason;
              readonly SAFEPOINT: InfopointReason;
            }
            let InfopointReason: _InfopointReason$$static;
            interface _InfopointReason {
            }
            interface InfopointReason extends CombineTypes<[_InfopointReason]> {}
            interface _Mark$$static extends ClassLike {
              new(pcOffset: int, id: any): Mark;
            }
            let Mark: _Mark$$static;
            interface _Mark {
              equals(obj: any): boolean;
              toString(): string;
              readonly id: any;
            }
            interface Mark extends CombineTypes<[_Mark, jdk.vm.ci.code.site.Site]> {}
            interface _Reference$$static extends ClassLike {
              new(): Reference;
            }
            let Reference: _Reference$$static;
            interface _Reference {
              equals(a0: any): boolean;
              hashCode(): int;
            }
            interface Reference extends CombineTypes<[_Reference, java.lang.Object]> {}
            interface _Site$$static extends ClassLike {
              new(pos: int): Site;
            }
            let Site: _Site$$static;
            interface _Site {
              equals(a0: any): boolean;
(a0: any): boolean;
              hashCode(): int;
              toString(): string;
              readonly pcOffset: int;
            }
            interface Site extends CombineTypes<[_Site, java.lang.Object]> {}
          }
          module stack {
            interface _InspectedFrame$$static extends ClassLike {
            }
            let InspectedFrame: _InspectedFrame$$static;
            interface _InspectedFrame {
              getBytecodeIndex(): int;
              getLocal(a0: int): any;
              getMethod(): ci.meta.ResolvedJavaMethod;
              hasVirtualObjects(): boolean;
              isMethod(a0: ci.meta.ResolvedJavaMethod): boolean;
              isVirtual(a0: int): boolean;
              materializeVirtualObjects(a0: boolean): void;
            }
            interface InspectedFrame extends CombineTypes<[_InspectedFrame, java.lang.Object]> {}
            interface _InspectedFrameVisitor$$static<T> extends ClassLike {
            }
            let InspectedFrameVisitor: _InspectedFrameVisitor$$static<T>;
            interface _InspectedFrameVisitor<T> {
              visitFrame(a0: InspectedFrame): T;
(a0: InspectedFrame): T;
            }
            interface InspectedFrameVisitor<T> extends CombineTypes<[_InspectedFrameVisitor<T>, java.lang.Object]> {}
            interface _StackIntrospection$$static extends ClassLike {
            }
            let StackIntrospection: _StackIntrospection$$static;
            interface _StackIntrospection {
              canMaterializeVirtualObjects(): boolean;
              iterateFrames<T>(a0: ci.meta.ResolvedJavaMethod[], a1: ci.meta.ResolvedJavaMethod[], a2: int, a3: InspectedFrameVisitor<T>): T;
<T>(a0: ci.meta.ResolvedJavaMethod[], a1: ci.meta.ResolvedJavaMethod[], a2: int, a3: InspectedFrameVisitor<T>): T;
            }
            interface StackIntrospection extends CombineTypes<[_StackIntrospection, java.lang.Object]> {}
          }
          interface _Architecture$$static extends ClassLike {
            _new(name: string, wordKind: ci.meta.PlatformKind, byteOrder: java.nio.ByteOrder, unalignedMemoryAccess: boolean, registers: RegisterArray, implicitMemoryBarriers: int, nativeCallDisplacementOffset: int, returnAddressSize: int): Architecture;
          }
          let Architecture: _Architecture$$static;
          interface _Architecture {
            canStoreValue(a0: Register$RegisterCategory, a1: ci.meta.PlatformKind): boolean;
            equals(obj: any): boolean;
            getAvailableValueRegisters(): RegisterArray;
            getByteOrder(): java.nio.ByteOrder;
            getFeatures(): java.util.Set<CPUFeatureName>;
            getLargestStorableKind(a0: Register$RegisterCategory): ci.meta.PlatformKind;
            getMachineCodeCallDisplacementOffset(): int;
            getName(): string;
            getPlatformKind(a0: ci.meta.JavaKind): ci.meta.PlatformKind;
            getRegisters(): RegisterArray;
            getReturnAddressSize(): int;
            getWordKind(): ci.meta.PlatformKind;
            getWordSize(): int;
            hashCode(): int;
            requiredBarriers(barriers: int): int;
            supportsUnalignedMemoryAccess(): boolean;
            toString(): string;
            _byteOrder: java.nio.ByteOrder;
            _implicitMemoryBarriers: int;
            _machineCodeCallDisplacementOffset: int;
            _name: string;
            _registers: RegisterArray;
            _returnAddressSize: int;
            _unalignedMemoryAccess: boolean;
            _wordKind: ci.meta.PlatformKind;
          }
          interface Architecture extends CombineTypes<[_Architecture, java.lang.Object]> {}
          interface _BailoutException$$static extends ClassLike {
            readonly serialVersionUID: long;
            new(format: string, args: any[]): BailoutException;
            new(format: string, ...args: any[]): BailoutException;
            new(cause: java.lang.Throwable, format: string, args: any[]): BailoutException;
            new(cause: java.lang.Throwable, format: string, ...args: any[]): BailoutException;
            new(permanent: boolean, format: string, args: any[]): BailoutException;
            new(permanent: boolean, format: string, ...args: any[]): BailoutException;
          }
          let BailoutException: _BailoutException$$static;
          interface _BailoutException {
            isPermanent(): boolean;
            _permanent: boolean;
          }
          interface BailoutException extends CombineTypes<[_BailoutException, java.lang.RuntimeException]> {}
          interface _BytecodeFrame$$static extends ClassLike {
            getPlaceholderBciName(bci: int): string;
            isPlaceholderBci(bci: int): boolean;
            readonly AFTER_BCI: int;
            readonly AFTER_EXCEPTION_BCI: int;
            readonly BEFORE_BCI: int;
            readonly INVALID_FRAMESTATE_BCI: int;
            readonly UNKNOWN_BCI: int;
            readonly UNWIND_BCI: int;
            new(caller: BytecodeFrame, method: ci.meta.ResolvedJavaMethod, bci: int, rethrowException: boolean, duringCall: boolean, values: ci.meta.JavaValue[], slotKinds: ci.meta.JavaKind[], numLocals: int, numStack: int, numLocks: int): BytecodeFrame;
          }
          let BytecodeFrame: _BytecodeFrame$$static;
          interface _BytecodeFrame {
            caller(): BytecodeFrame;
            equals(obj: any): boolean;
            getLocalValue(i: int): ci.meta.JavaValue;
            getLocalValueKind(i: int): ci.meta.JavaKind;
            getLockValue(i: int): ci.meta.JavaValue;
            getStackValue(i: int): ci.meta.JavaValue;
            getStackValueKind(i: int): ci.meta.JavaKind;
            hashCode(): int;
            toString(): string;
            validateFormat(): boolean;
            verifyInvariants(): void;
            readonly duringCall: boolean;
            readonly numLocals: int;
            readonly numLocks: int;
            readonly numStack: int;
            readonly rethrowException: boolean;
            _slotKinds: ci.meta.JavaKind[];
            readonly values: ci.meta.JavaValue[];
          }
          interface BytecodeFrame extends CombineTypes<[_BytecodeFrame, jdk.vm.ci.code.BytecodePosition]> {}
          interface _BytecodePosition$$static extends ClassLike {
            new(caller: BytecodePosition, method: ci.meta.ResolvedJavaMethod, bci: int): BytecodePosition;
          }
          let BytecodePosition: _BytecodePosition$$static;
          interface _BytecodePosition {
            addCaller(link: BytecodePosition): BytecodePosition;
            equals(obj: any): boolean;
            getBCI(): int;
            getCaller(): BytecodePosition;
            getMethod(): ci.meta.ResolvedJavaMethod;
            hashCode(): int;
            toString(): string;
            _bci: int;
            _caller: BytecodePosition;
            _method: ci.meta.ResolvedJavaMethod;
          }
          interface BytecodePosition extends CombineTypes<[_BytecodePosition, java.lang.Object]> {}
          interface _CPUFeatureName$$static extends ClassLike {
          }
          let CPUFeatureName: _CPUFeatureName$$static;
          interface _CPUFeatureName {
            name(): string;
(): string;
            nameEquals(other: string): boolean;
          }
          interface CPUFeatureName extends CombineTypes<[_CPUFeatureName, java.lang.Object]> {}
          interface _CallingConvention$$static extends ClassLike {
            new(stackSize: int, returnLocation: ci.meta.AllocatableValue, argumentLocations: ci.meta.AllocatableValue[]): CallingConvention;
            new(stackSize: int, returnLocation: ci.meta.AllocatableValue, ...argumentLocations: ci.meta.AllocatableValue[]): CallingConvention;
          }
          let CallingConvention: _CallingConvention$$static;
          interface _CallingConvention {
            getArgument(index: int): ci.meta.AllocatableValue;
            getArgumentCount(): int;
            getArguments(): ci.meta.AllocatableValue[];
            getReturn(): ci.meta.AllocatableValue;
            getStackSize(): int;
            toString(): string;
            _verify(): boolean;
            _argumentLocations: ci.meta.AllocatableValue[];
            _returnLocation: ci.meta.AllocatableValue;
            _stackSize: int;
          }
          interface CallingConvention extends CombineTypes<[_CallingConvention, java.lang.Object]> {}
          interface _CallingConvention$Type$$static extends ClassLike {
          }
          let CallingConvention$Type: _CallingConvention$Type$$static;
          interface _CallingConvention$Type {
          }
          interface CallingConvention$Type extends CombineTypes<[_CallingConvention$Type, java.lang.Object]> {}
          interface _CodeCacheProvider$$static extends ClassLike {
          }
          let CodeCacheProvider: _CodeCacheProvider$$static;
          interface _CodeCacheProvider {
            addCode(method: ci.meta.ResolvedJavaMethod, compiledCode: CompiledCode, log: ci.meta.SpeculationLog, installedCode: InstalledCode): InstalledCode;
            createSpeculationLog(): ci.meta.SpeculationLog;
            getMarkName(mark: code.site.Mark): string;
            getMaxCallTargetOffset(a0: long): long;
            getMinimumOutgoingSize(): int;
            getRegisterConfig(): RegisterConfig;
            getTarget(): TargetDescription;
            getTargetName(call: code.site.Call): string;
            installCode(a0: ci.meta.ResolvedJavaMethod, a1: CompiledCode, a2: InstalledCode, a3: ci.meta.SpeculationLog, a4: boolean): InstalledCode;
            invalidateInstalledCode(a0: InstalledCode): void;
            setDefaultCode(method: ci.meta.ResolvedJavaMethod, compiledCode: CompiledCode): InstalledCode;
            shouldDebugNonSafepoints(): boolean;
          }
          interface CodeCacheProvider extends CombineTypes<[_CodeCacheProvider, java.lang.Object]> {}
          interface _CodeUtil$$static extends ClassLike {
            append(sb: CodeUtil$stringBuilder, pos: BytecodePosition): CodeUtil$stringBuilder;
            append(sb: CodeUtil$stringBuilder, frame: BytecodeFrame): CodeUtil$stringBuilder;
            append(sb: CodeUtil$stringBuilder, info: DebugInfo, formatterArg: CodeUtil$RefMapFormatter): CodeUtil$stringBuilder;
            convert(value: long, a1: int, inputBits: boolean): long;
            getCallingConvention(codeCache: CodeCacheProvider, type: CallingConvention$Type, method: ci.meta.ResolvedJavaMethod, valueKindFactory: ValueKindFactory<any>): CallingConvention;
            isEven(n: int): boolean;
            isOdd(n: int): boolean;
            isPowerOf2(val: int): boolean;
            isPowerOf2(val: long): boolean;
            log2(val: int): int;
            log2(val: long): int;
            mask(bits: int): long;
            maxValue(bits: int): long;
            minValue(bits: int): long;
            narrow(value: long, a1: int): long;
            signExtend(value: long, a1: int): long;
            tabulate(cells: any[], cols: int, lpad: int, rpad: int): string;
            tabulateValues(frame: BytecodeFrame): string;
            zeroExtend(value: long, a1: int): long;
            readonly K: int;
            readonly M: int;
            readonly NEW_LINE: string;
            new(): CodeUtil;
          }
          let CodeUtil: _CodeUtil$$static;
          interface _CodeUtil {
          }
          interface CodeUtil extends CombineTypes<[_CodeUtil, java.lang.Object]> {}
          interface _CodeUtil$DefaultRefMapFormatter$$static extends ClassLike {
            new(slotSize: int, fp: Register, refMapToFPOffset: int): CodeUtil$DefaultRefMapFormatter;
          }
          let CodeUtil$DefaultRefMapFormatter: _CodeUtil$DefaultRefMapFormatter$$static;
          interface _CodeUtil$DefaultRefMapFormatter {
            formatStackSlot(frameRefMapIndex: int): string;
            readonly fp: Register;
            readonly refMapToFPOffset: int;
            readonly slotSize: int;
          }
          interface CodeUtil$DefaultRefMapFormatter extends CombineTypes<[_CodeUtil$DefaultRefMapFormatter, jdk.vm.ci.code.CodeUtil$RefMapFormatter, java.lang.Object]> {}
          interface _CodeUtil$NumberedRefMapFormatter$$static extends ClassLike {
            new(): CodeUtil$NumberedRefMapFormatter;
          }
          let CodeUtil$NumberedRefMapFormatter: _CodeUtil$NumberedRefMapFormatter$$static;
          interface _CodeUtil$NumberedRefMapFormatter {
            formatRegister(regRefMapIndex: int): string;
            formatStackSlot(frameRefMapIndex: int): string;
          }
          interface CodeUtil$NumberedRefMapFormatter extends CombineTypes<[_CodeUtil$NumberedRefMapFormatter, jdk.vm.ci.code.CodeUtil$RefMapFormatter, java.lang.Object]> {}
          interface _CodeUtil$RefMapFormatter$$static extends ClassLike {
          }
          let CodeUtil$RefMapFormatter: _CodeUtil$RefMapFormatter$$static;
          interface _CodeUtil$RefMapFormatter {
            formatStackSlot(a0: int): string;
(a0: int): string;
          }
          interface CodeUtil$RefMapFormatter extends CombineTypes<[_CodeUtil$RefMapFormatter, java.lang.Object]> {}
          interface _CompilationRequest$$static extends ClassLike {
            new(method: ci.meta.ResolvedJavaMethod): CompilationRequest;
            new(method: ci.meta.ResolvedJavaMethod, entryBCI: int): CompilationRequest;
          }
          let CompilationRequest: _CompilationRequest$$static;
          interface _CompilationRequest {
            getEntryBCI(): int;
            getMethod(): ci.meta.ResolvedJavaMethod;
            toString(): string;
            _entryBCI: int;
            _method: ci.meta.ResolvedJavaMethod;
          }
          interface CompilationRequest extends CombineTypes<[_CompilationRequest, java.lang.Object]> {}
          interface _CompilationRequestResult$$static extends ClassLike {
          }
          let CompilationRequestResult: _CompilationRequestResult$$static;
          interface _CompilationRequestResult {
            getFailure(): any;
(): any;
          }
          interface CompilationRequestResult extends CombineTypes<[_CompilationRequestResult, java.lang.Object]> {}
          interface _CompiledCode$$static extends ClassLike {
          }
          let CompiledCode: _CompiledCode$$static;
          interface _CompiledCode {
          }
          interface CompiledCode extends CombineTypes<[_CompiledCode, java.lang.Object]> {}
          interface _DebugInfo$$static extends ClassLike {
            new(codePos: BytecodePosition, virtualObjectMapping: VirtualObject[]): DebugInfo;
            new(codePos: BytecodePosition): DebugInfo;
          }
          let DebugInfo: _DebugInfo$$static;
          interface _DebugInfo {
            equals(obj: any): boolean;
            frame(): BytecodeFrame;
            getBytecodePosition(): BytecodePosition;
            getCalleeSaveInfo(): RegisterSaveLayout;
            getReferenceMap(): ReferenceMap;
            getVirtualObjectMapping(): VirtualObject[];
            hasFrame(): boolean;
            hashCode(): int;
            setCalleeSaveInfo(calleeSaveInfo: RegisterSaveLayout): void;
            setReferenceMap(referenceMap: ReferenceMap): void;
            toString(): string;
            _bytecodePosition: BytecodePosition;
            _calleeSaveInfo: RegisterSaveLayout;
            _referenceMap: ReferenceMap;
            _virtualObjectMapping: VirtualObject[];
          }
          interface DebugInfo extends CombineTypes<[_DebugInfo, java.lang.Object]> {}
          interface _InstalledCode$$static extends ClassLike {
            new(name: string): InstalledCode;
          }
          let InstalledCode: _InstalledCode$$static;
          interface _InstalledCode {
            executeVarargs(args: any[]): any;
            executeVarargs(...args: any[]): any;
            getAddress(): long;
            getCode(): byte[];
            getEntryPoint(): long;
            getName(): string;
            getStart(): long;
            getVersion(): long;
            invalidate(): void;
            invalidate(deoptimize: boolean): void;
            isAlive(): boolean;
            isValid(): boolean;
            _address: long;
            _entryPoint: long;
            _name: string;
            _version: long;
          }
          interface InstalledCode extends CombineTypes<[_InstalledCode, java.lang.Object]> {}
          interface _InvalidInstalledCodeException$$static extends ClassLike {
            _serialVersionUID: long;
            new(): InvalidInstalledCodeException;
            new(message: string): InvalidInstalledCodeException;
          }
          let InvalidInstalledCodeException: _InvalidInstalledCodeException$$static;
          interface _InvalidInstalledCodeException {
          }
          interface InvalidInstalledCodeException extends CombineTypes<[_InvalidInstalledCodeException, java.lang.Exception]> {}
          interface _Location$$static extends ClassLike {
            register(reg: Register): Location;
            stack(offset: int): Location;
            subregister(reg: Register, offset: int): Location;
          }
          let Location: _Location$$static;
          interface _Location {
            isRegister(): boolean;
            isStack(): boolean;
            toString(): string;
            readonly offset: int;
            readonly reg: Register;
          }
          interface Location extends CombineTypes<[_Location, java.lang.Object]> {}
          interface _MemoryBarriers$$static extends ClassLike {
            barriersString(barriers: int): string;
            readonly JMM_POST_VOLATILE_READ: int;
            readonly JMM_POST_VOLATILE_WRITE: int;
            readonly JMM_PRE_VOLATILE_READ: int;
            readonly JMM_PRE_VOLATILE_WRITE: int;
            readonly LOAD_LOAD: int;
            readonly LOAD_STORE: int;
            readonly STORE_LOAD: int;
            readonly STORE_STORE: int;
            new(): MemoryBarriers;
          }
          let MemoryBarriers: _MemoryBarriers$$static;
          interface _MemoryBarriers {
          }
          interface MemoryBarriers extends CombineTypes<[_MemoryBarriers, java.lang.Object]> {}
          interface _ReferenceMap$$static extends ClassLike {
            new(): ReferenceMap;
          }
          let ReferenceMap: _ReferenceMap$$static;
          interface _ReferenceMap {
          }
          interface ReferenceMap extends CombineTypes<[_ReferenceMap, java.lang.Object]> {}
          interface _Register$$static extends ClassLike {
            readonly None: Register;
            readonly SPECIAL: Register$RegisterCategory;
            new(number: int, encoding: int, name: string, registerCategory: Register$RegisterCategory): Register;
          }
          let Register: _Register$$static;
          interface _Register {
            asValue(kind: ci.meta.ValueKind<any>): RegisterValue;
            asValue(): RegisterValue;
            compareTo(o: Register): int;
            compareTo(a0: any): int;
            encoding(): int;
            equals(obj: any): boolean;
            getRegisterCategory(): Register$RegisterCategory;
            hashCode(): int;
            isValid(): boolean;
            mayContainReference(): boolean;
            toString(): string;
            readonly encoding: int;
            readonly name: string;
            readonly number: int;
            _registerCategory: Register$RegisterCategory;
          }
          interface Register extends CombineTypes<[_Register, java.lang.Comparable<Register>, java.lang.Object]> {}
          interface _Register$RegisterCategory$$static extends ClassLike {
            new(name: string): Register$RegisterCategory;
            new(name: string, mayContainReference: boolean): Register$RegisterCategory;
          }
          let Register$RegisterCategory: _Register$RegisterCategory$$static;
          interface _Register$RegisterCategory {
            equals(obj: any): boolean;
            hashCode(): int;
            toString(): string;
            _mayContainReference: boolean;
            _name: string;
          }
          interface Register$RegisterCategory extends CombineTypes<[_Register$RegisterCategory, java.lang.Object]> {}
          interface _RegisterArray$$static extends ClassLike {
            new(registers: Register[]): RegisterArray;
            new(...registers: Register[]): RegisterArray;
            new(registers: java.util.Collection<Register>): RegisterArray;
          }
          let RegisterArray: _RegisterArray$$static;
          interface _RegisterArray {
            addTo(collection: java.util.Collection<Register>): void;
            asList(): java.util.List<Register>;
            equals(obj: any): boolean;
            get(index: int): Register;
            hashCode(): int;
            iterator(): java.util.Iterator<Register>;
            size(): int;
            toArray(): Register[];
            toString(): string;
            _hash: int;
            _registers: Register[];
          }
          interface RegisterArray extends CombineTypes<[_RegisterArray, java.lang.Iterable<Register>, java.lang.Object]> {}
          interface _RegisterAttributes$$static extends ClassLike {
            createMap(registerConfig: RegisterConfig, registers: RegisterArray): RegisterAttributes[];
            readonly NONE: RegisterAttributes;
            new(isCallerSave: boolean, isCalleeSave: boolean, isAllocatable: boolean): RegisterAttributes;
          }
          let RegisterAttributes: _RegisterAttributes$$static;
          interface _RegisterAttributes {
            isAllocatable(): boolean;
            isCalleeSave(): boolean;
            isCallerSave(): boolean;
            _allocatable: boolean;
            _calleeSave: boolean;
            _callerSave: boolean;
          }
          interface RegisterAttributes extends CombineTypes<[_RegisterAttributes, java.lang.Object]> {}
          interface _RegisterConfig$$static extends ClassLike {
          }
          let RegisterConfig: _RegisterConfig$$static;
          interface _RegisterConfig {
            areAllAllocatableRegistersCallerSaved(): boolean;
            filterAllocatableRegisters(a0: ci.meta.PlatformKind, a1: RegisterArray): RegisterArray;
            getAllocatableRegisters(): RegisterArray;
            getAttributesMap(): RegisterAttributes[];
            getCalleeSaveRegisters(): RegisterArray;
            getCallerSaveRegisters(): RegisterArray;
            getCallingConvention(a0: CallingConvention$Type, a1: ci.meta.JavaType, a2: ci.meta.JavaType[], a3: ValueKindFactory<any>): CallingConvention;
            getCallingConventionRegisters(a0: CallingConvention$Type, a1: ci.meta.JavaKind): RegisterArray;
            getFrameRegister(): Register;
            getMaximumFrameSize(): int;
            getReturnRegister(a0: ci.meta.JavaKind): Register;
          }
          interface RegisterConfig extends CombineTypes<[_RegisterConfig, java.lang.Object]> {}
          interface _RegisterSaveLayout$$static extends ClassLike {
            new(registers: Register[], slots: int[]): RegisterSaveLayout;
          }
          let RegisterSaveLayout: _RegisterSaveLayout$$static;
          interface _RegisterSaveLayout {
            equals(obj: any): boolean;
            hashCode(): int;
            registerToSlot(register: Register): int;
            registersToSlots(sorted: boolean): java.util.Map<Register,int>;
            size(): int;
            slotsToRegisters(sorted: boolean): java.util.Map<int,Register>;
            toString(): string;
            _registers: Register[];
            _slots: int[];
          }
          interface RegisterSaveLayout extends CombineTypes<[_RegisterSaveLayout, java.lang.Object]> {}
          interface _RegisterValue$$static extends ClassLike {
            _new(kind: ci.meta.ValueKind<any>, register: Register): RegisterValue;
          }
          let RegisterValue: _RegisterValue$$static;
          interface _RegisterValue {
            equals(obj: any): boolean;
            getRegister(): Register;
            hashCode(): int;
            toString(): string;
            _reg: Register;
          }
          interface RegisterValue extends CombineTypes<[_RegisterValue, jdk.vm.ci.meta.AllocatableValue]> {}
          interface _StackLockValue$$static extends ClassLike {
            new(object: ci.meta.JavaValue, slot: ci.meta.AllocatableValue, eliminated: boolean): StackLockValue;
          }
          let StackLockValue: _StackLockValue$$static;
          interface _StackLockValue {
            equals(obj: any): boolean;
            getOwner(): ci.meta.JavaValue;
            getSlot(): ci.meta.AllocatableValue;
            hashCode(): int;
            isEliminated(): boolean;
            setOwner(newOwner: ci.meta.JavaValue): void;
            setSlot(stackSlot: ci.meta.AllocatableValue): void;
            toString(): string;
            _eliminated: boolean;
            _owner: ci.meta.JavaValue;
            _slot: ci.meta.AllocatableValue;
          }
          interface StackLockValue extends CombineTypes<[_StackLockValue, jdk.vm.ci.meta.JavaValue, java.lang.Object]> {}
          interface _StackSlot$$static extends ClassLike {
            get(kind: ci.meta.ValueKind<any>, offset: int, addFrameSize: boolean): StackSlot;
          }
          let StackSlot: _StackSlot$$static;
          interface _StackSlot {
            asInArg(): StackSlot;
            asOutArg(): StackSlot;
            equals(obj: any): boolean;
            getOffset(totalFrameSize: int): int;
            getRawAddFrameSize(): boolean;
            getRawOffset(): int;
            hashCode(): int;
            isInCallerFrame(): boolean;
            toString(): string;
            _addFrameSize: boolean;
            _offset: int;
          }
          interface StackSlot extends CombineTypes<[_StackSlot, jdk.vm.ci.meta.AllocatableValue]> {}
          interface _SuppressFBWarnings$$static extends ClassLike {
          }
          let SuppressFBWarnings: _SuppressFBWarnings$$static;
          interface _SuppressFBWarnings {
            justification(): string;
            value(): string[];
          }
          interface SuppressFBWarnings extends CombineTypes<[_SuppressFBWarnings, java.lang.annotation.Annotation, java.lang.Object]> {}
          interface _TargetDescription$$static extends ClassLike {
            new(arch: Architecture, isMP: boolean, stackAlignment: int, implicitNullCheckLimit: int, inlineObjects: boolean): TargetDescription;
          }
          let TargetDescription: _TargetDescription$$static;
          interface _TargetDescription {
            equals(obj: any): boolean;
            hashCode(): int;
            toString(): string;
            readonly arch: Architecture;
            readonly implicitNullCheckLimit: int;
            readonly inlineObjects: boolean;
            readonly isMP: boolean;
            readonly linuxOs: boolean;
            readonly macOs: boolean;
            readonly stackAlignment: int;
            readonly wordJavaKind: ci.meta.JavaKind;
            readonly wordSize: int;
          }
          interface TargetDescription extends CombineTypes<[_TargetDescription, java.lang.Object]> {}
          interface _ValueKindFactory$$static<K> extends ClassLike {
          }
          let ValueKindFactory: _ValueKindFactory$$static<K>;
          interface _ValueKindFactory<K> {
            getValueKind(a0: ci.meta.JavaKind): K;
(a0: ci.meta.JavaKind): K;
          }
          interface ValueKindFactory<K> extends CombineTypes<[_ValueKindFactory<K>, java.lang.Object]> {}
          interface _ValueUtil$$static extends ClassLike {
            asAllocatableValue(value: ci.meta.Value): ci.meta.AllocatableValue;
            asConstantJavaValue(value: ci.meta.JavaValue): ci.meta.JavaConstant;
            asRegister(value: ci.meta.Value): Register;
            asRegister(value: ci.meta.Value, kind: ci.meta.PlatformKind): Register;
            asRegisterValue(value: ci.meta.Value): RegisterValue;
            asStackSlot(value: ci.meta.Value): StackSlot;
            asVirtualObject(value: ci.meta.JavaValue): VirtualObject;
            isAllocatableValue(value: ci.meta.Value): boolean;
            isConstantJavaValue(value: ci.meta.JavaValue): boolean;
            isIllegal(value: ci.meta.Value): boolean;
            isIllegalJavaValue(value: ci.meta.JavaValue): boolean;
            isLegal(value: ci.meta.Value): boolean;
            isRegister(value: ci.meta.Value): boolean;
            isStackSlot(value: ci.meta.Value): boolean;
            isVirtualObject(value: ci.meta.JavaValue): boolean;
            new(): ValueUtil;
          }
          let ValueUtil: _ValueUtil$$static;
          interface _ValueUtil {
          }
          interface ValueUtil extends CombineTypes<[_ValueUtil, java.lang.Object]> {}
          interface _VirtualObject$$static extends ClassLike {
            _appendValue(buf: VirtualObject$stringBuilder, value: ci.meta.JavaValue, visited: java.util.Set<VirtualObject>): VirtualObject$stringBuilder;
            get(type: ci.meta.ResolvedJavaType, id: int): VirtualObject;
            get(type: ci.meta.ResolvedJavaType, id: int, isAutoBox: boolean): VirtualObject;
            _same(o1: any, o2: any): boolean;
          }
          let VirtualObject: _VirtualObject$$static;
          interface _VirtualObject {
            equals(o: any): boolean;
            getId(): int;
            getSlotKind(index: int): ci.meta.JavaKind;
            getType(): ci.meta.ResolvedJavaType;
            getValues(): ci.meta.JavaValue[];
            hashCode(): int;
            isAutoBox(): boolean;
            setValues(values: ci.meta.JavaValue[], slotKinds: ci.meta.JavaKind[]): void;
            toString(): string;
            verifyLayout(verifier: VirtualObject$LayoutVerifier): void;
            _id: int;
            _isAutoBox: boolean;
            _slotKinds: ci.meta.JavaKind[];
            _type: ci.meta.ResolvedJavaType;
            _values: ci.meta.JavaValue[];
          }
          interface VirtualObject extends CombineTypes<[_VirtualObject, jdk.vm.ci.meta.JavaValue, java.lang.Object]> {}
          interface _VirtualObject$LayoutVerifier$$static extends ClassLike {
          }
          let VirtualObject$LayoutVerifier: _VirtualObject$LayoutVerifier$$static;
          interface _VirtualObject$LayoutVerifier {
            getOffset(a0: ci.meta.ResolvedJavaField): int;
(a0: ci.meta.ResolvedJavaField): int;
            getStorageKind(field: ci.meta.ResolvedJavaField): ci.meta.JavaKind;
          }
          interface VirtualObject$LayoutVerifier extends CombineTypes<[_VirtualObject$LayoutVerifier, java.lang.Object]> {}
        }
        module common {
          interface _InitTimer$$static extends ClassLike {
            _isEnabled(): boolean;
            timer(name: string): InitTimer;
            timer(name: string, suffix: any): InitTimer;
            _SPACES: string;
            _enabledPropertyValue: boolean;
            _initializingThread: java.lang.Thread;
            _nesting: java.util.concurrent.atomic.AtomicInteger;
          }
          let InitTimer: _InitTimer$$static;
          interface _InitTimer {
            close(): void;
            _name: string;
            _start: long;
          }
          interface InitTimer extends CombineTypes<[_InitTimer, java.lang.Object, java.lang.AutoCloseable]> {}
          interface _JVMCIError$$static extends ClassLike {
            _format(msg: string, args: any[]): string;
            _format(msg: string, ...args: any[]): string;
            guarantee(condition: boolean, msg: string, args: any[]): void;
            guarantee(condition: boolean, msg: string, ...args: any[]): void;
            shouldNotReachHere(): java.lang.RuntimeException;
            shouldNotReachHere(msg: string): java.lang.RuntimeException;
            shouldNotReachHere(cause: java.lang.Throwable): java.lang.RuntimeException;
            unimplemented(): java.lang.RuntimeException;
            unimplemented(msg: string): java.lang.RuntimeException;
            _serialVersionUID: long;
            new(msg: string): JVMCIError;
            new(msg: string, args: any[]): JVMCIError;
            new(msg: string, ...args: any[]): JVMCIError;
            new(cause: java.lang.Throwable): JVMCIError;
          }
          let JVMCIError: _JVMCIError$$static;
          interface _JVMCIError {
          }
          interface JVMCIError extends CombineTypes<[_JVMCIError, java.lang.Error]> {}
          interface _NativeImageReinitialize$$static extends ClassLike {
          }
          let NativeImageReinitialize: _NativeImageReinitialize$$static;
          interface _NativeImageReinitialize {
          }
          interface NativeImageReinitialize extends CombineTypes<[_NativeImageReinitialize, java.lang.annotation.Annotation, java.lang.Object]> {}
          interface _SuppressFBWarnings$$static extends ClassLike {
          }
          let SuppressFBWarnings: _SuppressFBWarnings$$static;
          interface _SuppressFBWarnings {
            justification(): string;
            value(): string[];
          }
          interface SuppressFBWarnings extends CombineTypes<[_SuppressFBWarnings, java.lang.annotation.Annotation, java.lang.Object]> {}
        }
        module hotspot {
          module aarch64 {
            interface _AArch64HotSpotJVMCIBackendFactory$$static extends ClassLike {
              _computeFeatures(config: AArch64HotSpotVMConfig): java.util.EnumSet<ci.aarch64.AArch64$CPUFeature>;
              _computeFlags(config: AArch64HotSpotVMConfig): java.util.EnumSet<ci.aarch64.AArch64$Flag>;
              _createRegisterConfig(config: AArch64HotSpotVMConfig, target: ci.code.TargetDescription): ci.code.RegisterConfig;
              _createTarget(config: AArch64HotSpotVMConfig): ci.code.TargetDescription;
              new(): AArch64HotSpotJVMCIBackendFactory;
            }
            let AArch64HotSpotJVMCIBackendFactory: _AArch64HotSpotJVMCIBackendFactory$$static;
            interface _AArch64HotSpotJVMCIBackendFactory {
              _createBackend(metaAccess: HotSpotMetaAccessProvider, codeCache: HotSpotCodeCacheProvider, constantReflection: ci.meta.ConstantReflectionProvider, stackIntrospection: ci.code.stack.StackIntrospection): ci.runtime.JVMCIBackend;
              _createCodeCache(runtime: HotSpotJVMCIRuntime, target: ci.code.TargetDescription, regConfig: ci.code.RegisterConfig): HotSpotCodeCacheProvider;
              _createConstantReflection(runtime: HotSpotJVMCIRuntime): HotSpotConstantReflectionProvider;
              createJVMCIBackend(runtime: HotSpotJVMCIRuntime, host: ci.runtime.JVMCIBackend): ci.runtime.JVMCIBackend;
              _createMetaAccess(runtime: HotSpotJVMCIRuntime): HotSpotMetaAccessProvider;
              getArchitecture(): string;
              toString(): string;
            }
            interface AArch64HotSpotJVMCIBackendFactory extends CombineTypes<[_AArch64HotSpotJVMCIBackendFactory, jdk.vm.ci.hotspot.HotSpotJVMCIBackendFactory, java.lang.Object]> {}
            interface _AArch64HotSpotRegisterConfig$$static extends ClassLike {
              _initAllocatable(arch: ci.code.Architecture, reserveForHeapBase: boolean, canUsePlatformRegister: boolean): ci.code.RegisterArray;
              readonly fp: ci.code.Register;
              readonly heapBaseRegister: ci.code.Register;
              readonly inlineCacheRegister: ci.code.Register;
              readonly metaspaceMethodRegister: ci.code.Register;
              readonly platformRegister: ci.code.Register;
              _reservedRegisters: ci.code.RegisterArray;
              readonly threadRegister: ci.code.Register;
              new(target: ci.code.TargetDescription, useCompressedOops: boolean, canUsePlatformRegister: boolean): AArch64HotSpotRegisterConfig;
              new(target: ci.code.TargetDescription, allocatable: ci.code.RegisterArray): AArch64HotSpotRegisterConfig;
            }
            let AArch64HotSpotRegisterConfig: _AArch64HotSpotRegisterConfig$$static;
            interface _AArch64HotSpotRegisterConfig {
              areAllAllocatableRegistersCallerSaved(): boolean;
              _callingConvention(generalParameterRegisters: ci.code.RegisterArray, returnType: ci.meta.JavaType, parameterTypes: ci.meta.JavaType[], type: HotSpotCallingConventionType, valueKindFactory: ci.code.ValueKindFactory<any>): ci.code.CallingConvention;
              filterAllocatableRegisters(kind: ci.meta.PlatformKind, registers: ci.code.RegisterArray): ci.code.RegisterArray;
              getAllocatableRegisters(): ci.code.RegisterArray;
              getAttributesMap(): ci.code.RegisterAttributes[];
              getCalleeSaveRegisters(): ci.code.RegisterArray;
              getCallerSaveRegisters(): ci.code.RegisterArray;
              getCallingConvention(type: ci.code.CallingConvention$Type, returnType: ci.meta.JavaType, parameterTypes: ci.meta.JavaType[], valueKindFactory: ci.code.ValueKindFactory<any>): ci.code.CallingConvention;
              getCallingConventionRegisters(type: ci.code.CallingConvention$Type, kind: ci.meta.JavaKind): ci.code.RegisterArray;
              getFrameRegister(): ci.code.Register;
              getReturnRegister(kind: ci.meta.JavaKind): ci.code.Register;
              _parseDarwinNativeStackArg(valueKind: ci.meta.ValueKind<any>, locations: ci.meta.AllocatableValue[], index: int, currentStackOffset: int, type: HotSpotCallingConventionType): int;
              _parseStackArg(valueKind: ci.meta.ValueKind<any>, locations: ci.meta.AllocatableValue[], index: int, currentStackOffset: int, type: HotSpotCallingConventionType): int;
              toString(): string;
              _allAllocatableAreCallerSaved: boolean;
              _allocatable: ci.code.RegisterArray;
              _attributesMap: ci.code.RegisterAttributes[];
              _callerSaved: ci.code.RegisterArray;
              _javaGeneralParameterRegisters: ci.code.RegisterArray;
              _nativeGeneralParameterRegisters: ci.code.RegisterArray;
              _simdParameterRegisters: ci.code.RegisterArray;
              _target: ci.code.TargetDescription;
            }
            interface AArch64HotSpotRegisterConfig extends CombineTypes<[_AArch64HotSpotRegisterConfig, java.lang.Object, jdk.vm.ci.code.RegisterConfig]> {}
            interface _AArch64HotSpotVMConfig$$static extends ClassLike {
              _new(config: HotSpotVMConfigStore): AArch64HotSpotVMConfig;
            }
            let AArch64HotSpotVMConfig: _AArch64HotSpotVMConfig$$static;
            interface _AArch64HotSpotVMConfig {
              _aarch64A53MAC: long;
              _aarch64AES: long;
              _aarch64ASIMD: long;
              _aarch64CRC32: long;
              _aarch64EVTSTRM: long;
              _aarch64FP: long;
              _aarch64LSE: long;
              _aarch64PMULL: long;
              _aarch64SHA1: long;
              _aarch64SHA2: long;
              _avoidUnalignedAccesses: boolean;
              _useBlockZeroing: boolean;
              _useCRC32: boolean;
              _useCompressedOops: boolean;
              _useLSE: boolean;
              _useNeon: boolean;
              _useSIMDForMemoryOps: boolean;
              _vmVersionFeatures: long;
            }
            interface AArch64HotSpotVMConfig extends CombineTypes<[_AArch64HotSpotVMConfig, jdk.vm.ci.hotspot.HotSpotVMConfigAccess]> {}
          }
          module amd64 {
            interface _AMD64HotSpotJVMCIBackendFactory$$static extends ClassLike {
              _computeFeatures(config: AMD64HotSpotVMConfig): java.util.EnumSet<ci.amd64.AMD64$CPUFeature>;
              _computeFlags(config: AMD64HotSpotVMConfig): java.util.EnumSet<ci.amd64.AMD64$Flag>;
              _createRegisterConfig(config: AMD64HotSpotVMConfig, target: ci.code.TargetDescription): ci.code.RegisterConfig;
              _createTarget(config: AMD64HotSpotVMConfig): ci.code.TargetDescription;
              new(): AMD64HotSpotJVMCIBackendFactory;
            }
            let AMD64HotSpotJVMCIBackendFactory: _AMD64HotSpotJVMCIBackendFactory$$static;
            interface _AMD64HotSpotJVMCIBackendFactory {
              _createBackend(metaAccess: HotSpotMetaAccessProvider, codeCache: HotSpotCodeCacheProvider, constantReflection: ci.meta.ConstantReflectionProvider, stackIntrospection: ci.code.stack.StackIntrospection): ci.runtime.JVMCIBackend;
              _createCodeCache(runtime: HotSpotJVMCIRuntime, target: ci.code.TargetDescription, regConfig: ci.code.RegisterConfig): HotSpotCodeCacheProvider;
              _createConstantReflection(runtime: HotSpotJVMCIRuntime): HotSpotConstantReflectionProvider;
              createJVMCIBackend(runtime: HotSpotJVMCIRuntime, host: ci.runtime.JVMCIBackend): ci.runtime.JVMCIBackend;
              _createMetaAccess(runtime: HotSpotJVMCIRuntime): HotSpotMetaAccessProvider;
              getArchitecture(): string;
              toString(): string;
            }
            interface AMD64HotSpotJVMCIBackendFactory extends CombineTypes<[_AMD64HotSpotJVMCIBackendFactory, jdk.vm.ci.hotspot.HotSpotJVMCIBackendFactory, java.lang.Object]> {}
            interface _AMD64HotSpotRegisterConfig$$static extends ClassLike {
              _initAllocatable(arch: ci.code.Architecture, reserveForHeapBase: boolean): ci.code.RegisterArray;
              _reservedRegisters: ci.code.RegisterArray;
              new(target: ci.code.TargetDescription, useCompressedOops: boolean, windowsOs: boolean): AMD64HotSpotRegisterConfig;
              new(target: ci.code.TargetDescription, allocatable: ci.code.RegisterArray, windowsOS: boolean): AMD64HotSpotRegisterConfig;
            }
            let AMD64HotSpotRegisterConfig: _AMD64HotSpotRegisterConfig$$static;
            interface _AMD64HotSpotRegisterConfig {
              areAllAllocatableRegistersCallerSaved(): boolean;
              _callingConvention(generalParameterRegisters: ci.code.RegisterArray, xmmParameterRegisters: ci.code.RegisterArray, unified: boolean, returnType: ci.meta.JavaType, parameterTypes: ci.meta.JavaType[], type: HotSpotCallingConventionType, valueKindFactory: ci.code.ValueKindFactory<any>): ci.code.CallingConvention;
              filterAllocatableRegisters(kind: ci.meta.PlatformKind, registers: ci.code.RegisterArray): ci.code.RegisterArray;
              getAllocatableRegisters(): ci.code.RegisterArray;
              getAttributesMap(): ci.code.RegisterAttributes[];
              getCalleeSaveRegisters(): ci.code.RegisterArray;
              getCallerSaveRegisters(): ci.code.RegisterArray;
              getCallingConvention(type: ci.code.CallingConvention$Type, returnType: ci.meta.JavaType, parameterTypes: ci.meta.JavaType[], valueKindFactory: ci.code.ValueKindFactory<any>): ci.code.CallingConvention;
              getCallingConventionRegisters(type: ci.code.CallingConvention$Type, kind: ci.meta.JavaKind): ci.code.RegisterArray;
              getFrameRegister(): ci.code.Register;
              getReturnRegister(kind: ci.meta.JavaKind): ci.code.Register;
              toString(): string;
              _allAllocatableAreCallerSaved: boolean;
              _allocatable: ci.code.RegisterArray;
              _attributesMap: ci.code.RegisterAttributes[];
              _callerSaved: ci.code.RegisterArray;
              _javaGeneralParameterRegisters: ci.code.RegisterArray;
              _javaXMMParameterRegisters: ci.code.RegisterArray;
              _nativeGeneralParameterRegisters: ci.code.RegisterArray;
              _nativeXMMParameterRegisters: ci.code.RegisterArray;
              _needsNativeStackHomeSpace: boolean;
              _target: ci.code.TargetDescription;
              _windowsOS: boolean;
            }
            interface AMD64HotSpotRegisterConfig extends CombineTypes<[_AMD64HotSpotRegisterConfig, java.lang.Object, jdk.vm.ci.code.RegisterConfig]> {}
            interface _AMD64HotSpotVMConfig$$static extends ClassLike {
              _new(config: HotSpotVMConfigStore): AMD64HotSpotVMConfig;
            }
            let AMD64HotSpotVMConfig: _AMD64HotSpotVMConfig$$static;
            interface _AMD64HotSpotVMConfig {
              _amd643DNOWPREFETCH: long;
              _amd64ADX: long;
              _amd64AES: long;
              _amd64AVX: long;
              _amd64AVX2: long;
              _amd64AVX512BW: long;
              _amd64AVX512CD: long;
              _amd64AVX512DQ: long;
              _amd64AVX512ER: long;
              _amd64AVX512F: long;
              _amd64AVX512PF: long;
              _amd64AVX512VL: long;
              _amd64BMI1: long;
              _amd64BMI2: long;
              _amd64CET_IBT: long;
              _amd64CET_SS: long;
              _amd64CLMUL: long;
              _amd64CMOV: long;
              _amd64CX8: long;
              _amd64ERMS: long;
              _amd64FMA: long;
              _amd64FXSR: long;
              _amd64HT: long;
              _amd64LZCNT: long;
              _amd64MMX: long;
              _amd64OSPKE: long;
              _amd64PKU: long;
              _amd64POPCNT: long;
              _amd64RTM: long;
              _amd64SHA: long;
              _amd64SSE: long;
              _amd64SSE2: long;
              _amd64SSE3: long;
              _amd64SSE41: long;
              _amd64SSE42: long;
              _amd64SSE4A: long;
              _amd64SSSE3: long;
              _amd64TSC: long;
              _amd64TSCINV: long;
              _useAVX: int;
              _useCompressedOops: boolean;
              _useCountLeadingZerosInstruction: boolean;
              _useCountTrailingZerosInstruction: boolean;
              _useSSE: int;
              _vmVersionFeatures: long;
              _windowsOs: boolean;
            }
            interface AMD64HotSpotVMConfig extends CombineTypes<[_AMD64HotSpotVMConfig, jdk.vm.ci.hotspot.HotSpotVMConfigAccess]> {}
          }
          module riscv64 {
            interface _RISCV64HotSpotJVMCIBackendFactory$$static extends ClassLike {
              _computeFeatures(config: RISCV64HotSpotVMConfig): java.util.EnumSet<ci.riscv64.RISCV64$CPUFeature>;
              _computeFlags(config: RISCV64HotSpotVMConfig): java.util.EnumSet<ci.riscv64.RISCV64$Flag>;
              _createRegisterConfig(config: RISCV64HotSpotVMConfig, target: ci.code.TargetDescription): ci.code.RegisterConfig;
              _createTarget(config: RISCV64HotSpotVMConfig): ci.code.TargetDescription;
              new(): RISCV64HotSpotJVMCIBackendFactory;
            }
            let RISCV64HotSpotJVMCIBackendFactory: _RISCV64HotSpotJVMCIBackendFactory$$static;
            interface _RISCV64HotSpotJVMCIBackendFactory {
              _createBackend(metaAccess: HotSpotMetaAccessProvider, codeCache: HotSpotCodeCacheProvider, constantReflection: ci.meta.ConstantReflectionProvider, stackIntrospection: ci.code.stack.StackIntrospection): ci.runtime.JVMCIBackend;
              _createCodeCache(runtime: HotSpotJVMCIRuntime, target: ci.code.TargetDescription, regConfig: ci.code.RegisterConfig): HotSpotCodeCacheProvider;
              _createConstantReflection(runtime: HotSpotJVMCIRuntime): HotSpotConstantReflectionProvider;
              createJVMCIBackend(runtime: HotSpotJVMCIRuntime, host: ci.runtime.JVMCIBackend): ci.runtime.JVMCIBackend;
              _createMetaAccess(runtime: HotSpotJVMCIRuntime): HotSpotMetaAccessProvider;
              getArchitecture(): string;
              toString(): string;
            }
            interface RISCV64HotSpotJVMCIBackendFactory extends CombineTypes<[_RISCV64HotSpotJVMCIBackendFactory, jdk.vm.ci.hotspot.HotSpotJVMCIBackendFactory, java.lang.Object]> {}
            interface _RISCV64HotSpotRegisterConfig$$static extends ClassLike {
              _initAllocatable(arch: ci.code.Architecture, reserveForHeapBase: boolean): ci.code.RegisterArray;
              readonly fp: ci.code.Register;
              readonly gp: ci.code.Register;
              readonly heapBaseRegister: ci.code.Register;
              readonly ra: ci.code.Register;
              _reservedRegisters: ci.code.RegisterArray;
              readonly sp: ci.code.Register;
              readonly t0: ci.code.Register;
              readonly t1: ci.code.Register;
              readonly t2: ci.code.Register;
              readonly threadRegister: ci.code.Register;
              readonly tp: ci.code.Register;
              readonly zero: ci.code.Register;
              new(target: ci.code.TargetDescription, useCompressedOops: boolean, linuxOs: boolean): RISCV64HotSpotRegisterConfig;
              new(target: ci.code.TargetDescription, allocatable: ci.code.RegisterArray): RISCV64HotSpotRegisterConfig;
            }
            let RISCV64HotSpotRegisterConfig: _RISCV64HotSpotRegisterConfig$$static;
            interface _RISCV64HotSpotRegisterConfig {
              areAllAllocatableRegistersCallerSaved(): boolean;
              _callingConvention(generalParameterRegisters: ci.code.RegisterArray, returnType: ci.meta.JavaType, parameterTypes: ci.meta.JavaType[], type: HotSpotCallingConventionType, valueKindFactory: ci.code.ValueKindFactory<any>): ci.code.CallingConvention;
              filterAllocatableRegisters(kind: ci.meta.PlatformKind, registers: ci.code.RegisterArray): ci.code.RegisterArray;
              getAllocatableRegisters(): ci.code.RegisterArray;
              getAttributesMap(): ci.code.RegisterAttributes[];
              getCalleeSaveRegisters(): ci.code.RegisterArray;
              getCallerSaveRegisters(): ci.code.RegisterArray;
              getCallingConvention(type: ci.code.CallingConvention$Type, returnType: ci.meta.JavaType, parameterTypes: ci.meta.JavaType[], valueKindFactory: ci.code.ValueKindFactory<any>): ci.code.CallingConvention;
              getCallingConventionRegisters(type: ci.code.CallingConvention$Type, kind: ci.meta.JavaKind): ci.code.RegisterArray;
              getFrameRegister(): ci.code.Register;
              getReturnRegister(kind: ci.meta.JavaKind): ci.code.Register;
              toString(): string;
              _allAllocatableAreCallerSaved: boolean;
              _allocatable: ci.code.RegisterArray;
              _attributesMap: ci.code.RegisterAttributes[];
              _callerSaved: ci.code.RegisterArray;
              _fpParameterRegisters: ci.code.RegisterArray;
              _javaGeneralParameterRegisters: ci.code.RegisterArray;
              _nativeGeneralParameterRegisters: ci.code.RegisterArray;
              _target: ci.code.TargetDescription;
            }
            interface RISCV64HotSpotRegisterConfig extends CombineTypes<[_RISCV64HotSpotRegisterConfig, java.lang.Object, jdk.vm.ci.code.RegisterConfig]> {}
            interface _RISCV64HotSpotVMConfig$$static extends ClassLike {
              _new(config: HotSpotVMConfigStore): RISCV64HotSpotVMConfig;
            }
            let RISCV64HotSpotVMConfig: _RISCV64HotSpotVMConfig$$static;
            interface _RISCV64HotSpotVMConfig {
              _avoidUnalignedAccesses: boolean;
              _linuxOs: boolean;
              _nearCpool: boolean;
              _traceTraps: boolean;
              _useCompressedOops: boolean;
              _useConservativeFence: boolean;
              _useRVC: boolean;
              _useRVV: boolean;
              _useRVVForBigIntegerShiftIntrinsics: boolean;
              _useZba: boolean;
              _useZbb: boolean;
              _vmVersionFeatures: long;
            }
            interface RISCV64HotSpotVMConfig extends CombineTypes<[_RISCV64HotSpotVMConfig, jdk.vm.ci.hotspot.HotSpotVMConfigAccess]> {}
          }
          interface _AnnotationDataDecoder$$static extends ClassLike {
            _asArray(type1: ci.meta.ResolvedJavaType, type2: ci.meta.ResolvedJavaType, types: ci.meta.ResolvedJavaType[]): ci.meta.ResolvedJavaType[];
            _asArray(type1: ci.meta.ResolvedJavaType, type2: ci.meta.ResolvedJavaType, ...types: ci.meta.ResolvedJavaType[]): ci.meta.ResolvedJavaType[];
            _INSTANCE: AnnotationDataDecoder;
            _new(): AnnotationDataDecoder;
          }
          let AnnotationDataDecoder: _AnnotationDataDecoder$$static;
          interface _AnnotationDataDecoder {
            newAnnotation(type: ci.meta.JavaType, elements: java.util.Map$Entry<string,any>[]): ci.meta.AnnotationData;
            newAnnotation(a0: any, a1: java.util.Map$Entry[]): any;
            newEnumValue(enumType: ci.meta.JavaType, name: string): ci.meta.EnumData;
            newEnumValue(a0: any, a1: string): any;
            newErrorValue(description: string): ci.meta.ErrorData;
            newErrorValue(a0: string): any;
            resolveType(name: string): ci.meta.JavaType;
            resolveType(a0: string): any;
          }
          interface AnnotationDataDecoder extends CombineTypes<[_AnnotationDataDecoder, jdk.internal.vm.VMSupport$AnnotationDecoder<ci.meta.JavaType,ci.meta.AnnotationData,ci.meta.EnumData,ci.meta.ErrorData>, java.lang.Object]> {}
          interface _Cleaner$$static extends ClassLike {
            _add(cl: Cleaner): Cleaner;
            _clean(): void;
            _remove(cl: Cleaner): void;
            _first: Cleaner;
            _queue: java.lang.ref.ReferenceQueue<any>;
            _new(referent: any): Cleaner;
          }
          let Cleaner: _Cleaner$$static;
          interface _Cleaner {
            _doCleanup(): boolean;
(): boolean;
            _next: Cleaner;
            _prev: Cleaner;
          }
          interface Cleaner extends CombineTypes<[_Cleaner, java.lang.ref.WeakReference<any>]> {}
          interface _CompilerToVM$$static extends ClassLike {
            compilerToVM(): CompilerToVM;
            _registerNatives(): void;
            _new(): CompilerToVM;
          }
          let CompilerToVM: _CompilerToVM$$static;
          interface _CompilerToVM {
            _addFailedSpeculation(a0: long, a1: byte[]): boolean;
            _allocateCompileId(method: HotSpotResolvedJavaMethodImpl, entryBCI: int): int;
            _allocateCompileId(a0: HotSpotResolvedJavaMethodImpl, a1: long, a2: int): int;
            _arrayBaseOffset(a0: char): int;
            _arrayIndexScale(a0: char): int;
            _asJavaType(a0: HotSpotObjectConstantImpl): HotSpotResolvedJavaType;
            _asReflectionExecutable(method: HotSpotResolvedJavaMethodImpl): java.lang.reflect.Executable;
            _asReflectionExecutable(a0: HotSpotResolvedJavaMethodImpl, a1: long): java.lang.reflect.Executable;
            _asReflectionField(holder: HotSpotResolvedObjectTypeImpl, fieldIndex: int): java.lang.reflect.Field;
            _asReflectionField(a0: HotSpotResolvedObjectTypeImpl, a1: long, a2: int): java.lang.reflect.Field;
            _asResolvedJavaMethod(a0: java.lang.reflect.Executable): HotSpotResolvedJavaMethodImpl;
            _asString(a0: HotSpotObjectConstantImpl): string;
            _attachCurrentThread(a0: byte[], a1: boolean, a2: long[]): boolean;
            _boxPrimitive(a0: any): HotSpotObjectConstantImpl;
            _callSystemExit(a0: int): void;
            _collectCounters(): long[];
            _compileToBytecode(a0: HotSpotObjectConstantImpl): void;
            _constantPoolRemapInstructionOperandFromCache(constantPool: HotSpotConstantPool, cpci: int): int;
            _constantPoolRemapInstructionOperandFromCache(a0: HotSpotConstantPool, a1: long, a2: int): int;
            _detachCurrentThread(a0: boolean): boolean;
            _disassembleCodeBlob(a0: ci.code.InstalledCode): string;
            _ensureInitialized(klass: HotSpotResolvedObjectTypeImpl): void;
            _ensureInitialized(a0: HotSpotResolvedObjectTypeImpl, a1: long): void;
            _ensureLinked(klass: HotSpotResolvedObjectTypeImpl): void;
            _ensureLinked(a0: HotSpotResolvedObjectTypeImpl, a1: long): void;
            _equals(a0: HotSpotObjectConstantImpl, a1: long, a2: HotSpotObjectConstantImpl, a3: long): boolean;
            _executeHotSpotNmethod(a0: any[], a1: HotSpotNmethod): any;
            _findUniqueConcreteMethod(actualHolderType: HotSpotResolvedObjectTypeImpl, method: HotSpotResolvedJavaMethodImpl): HotSpotResolvedJavaMethodImpl;
            _findUniqueConcreteMethod(a0: HotSpotResolvedObjectTypeImpl, a1: long, a2: HotSpotResolvedJavaMethodImpl, a3: long): HotSpotResolvedJavaMethodImpl;
            _flushDebugOutput(): void;
            _getArrayLength(a0: HotSpotObjectConstantImpl): int;
            _getArrayType(primitiveTypeChar: char, nonPrimitiveKlass: HotSpotResolvedObjectTypeImpl): HotSpotResolvedObjectTypeImpl;
            _getArrayType(a0: char, a1: HotSpotResolvedObjectTypeImpl, a2: long): HotSpotResolvedObjectTypeImpl;
            _getBytecode(method: HotSpotResolvedJavaMethodImpl): byte[];
            _getBytecode(a0: HotSpotResolvedJavaMethodImpl, a1: long): byte[];
            _getClassInitializer(type: HotSpotResolvedObjectTypeImpl): HotSpotResolvedJavaMethodImpl;
            _getClassInitializer(a0: HotSpotResolvedObjectTypeImpl, a1: long): HotSpotResolvedJavaMethodImpl;
            _getCode(a0: HotSpotInstalledCode): byte[];
            _getComponentType(klass: HotSpotResolvedObjectTypeImpl): HotSpotResolvedJavaType;
            _getComponentType(a0: HotSpotResolvedObjectTypeImpl, a1: long): HotSpotResolvedJavaType;
            _getConstantPool(object: MetaspaceObject): HotSpotConstantPool;
            _getConstantPool(a0: any, a1: long, a2: boolean): HotSpotConstantPool;
            _getCountersSize(): int;
            _getCurrentJavaThread(): long;
            _getDeclaredConstructors(klass: HotSpotResolvedObjectTypeImpl): ci.meta.ResolvedJavaMethod[];
            _getDeclaredConstructors(a0: HotSpotResolvedObjectTypeImpl, a1: long): ci.meta.ResolvedJavaMethod[];
            _getDeclaredFieldsInfo(klass: HotSpotResolvedObjectTypeImpl): HotSpotResolvedObjectTypeImpl$FieldInfo[];
            _getDeclaredFieldsInfo(a0: HotSpotResolvedObjectTypeImpl, a1: long): HotSpotResolvedObjectTypeImpl$FieldInfo[];
            _getDeclaredMethods(klass: HotSpotResolvedObjectTypeImpl): ci.meta.ResolvedJavaMethod[];
            _getDeclaredMethods(a0: HotSpotResolvedObjectTypeImpl, a1: long): ci.meta.ResolvedJavaMethod[];
            _getEncodedClassAnnotationData(type: HotSpotResolvedObjectTypeImpl, filter: ci.meta.ResolvedJavaType[]): byte[];
            _getEncodedClassAnnotationData(a0: HotSpotResolvedObjectTypeImpl, a1: long, a2: any, a3: int, a4: long): byte[];
            _getEncodedExecutableAnnotationData(method: HotSpotResolvedJavaMethodImpl, filter: ci.meta.ResolvedJavaType[]): byte[];
            _getEncodedExecutableAnnotationData(a0: HotSpotResolvedJavaMethodImpl, a1: long, a2: any, a3: int, a4: long): byte[];
            _getEncodedFieldAnnotationData(holder: HotSpotResolvedObjectTypeImpl, fieldIndex: int, filter: ci.meta.ResolvedJavaType[]): byte[];
            _getEncodedFieldAnnotationData(a0: HotSpotResolvedObjectTypeImpl, a1: long, a2: int, a3: any, a4: int, a5: long): byte[];
            _getExceptionTableLength(method: HotSpotResolvedJavaMethodImpl): int;
            _getExceptionTableLength(a0: HotSpotResolvedJavaMethodImpl, a1: long): int;
            _getExceptionTableStart(method: HotSpotResolvedJavaMethodImpl): long;
            _getExceptionTableStart(a0: HotSpotResolvedJavaMethodImpl, a1: long): long;
            _getFailedSpeculations(a0: long, a1: byte[][]): byte[][];
            _getFailedSpeculationsAddress(method: HotSpotResolvedJavaMethodImpl): long;
            _getFailedSpeculationsAddress(a0: HotSpotResolvedJavaMethodImpl, a1: long): long;
            _getFlagValue(a0: string): any;
            _getIdentityHashCode(a0: HotSpotObjectConstantImpl): int;
            _getImplementor(type: HotSpotResolvedObjectTypeImpl): HotSpotResolvedObjectTypeImpl;
            _getImplementor(a0: HotSpotResolvedObjectTypeImpl, a1: long): HotSpotResolvedObjectTypeImpl;
            _getInstallCodeFlags(): int;
            _getInterfaces(klass: HotSpotResolvedObjectTypeImpl): HotSpotResolvedObjectTypeImpl[];
            _getInterfaces(a0: HotSpotResolvedObjectTypeImpl, a1: long): HotSpotResolvedObjectTypeImpl[];
            _getJavaMirror(klass: HotSpotResolvedObjectTypeImpl): HotSpotObjectConstantImpl;
            _getJavaMirror(a0: HotSpotResolvedObjectTypeImpl, a1: long): HotSpotObjectConstantImpl;
            _getLineNumberTable(method: HotSpotResolvedJavaMethodImpl): long[];
            _getLineNumberTable(a0: HotSpotResolvedJavaMethodImpl, a1: long): long[];
            _getLocalVariableTableLength(method: HotSpotResolvedJavaMethodImpl): int;
            _getLocalVariableTableLength(a0: HotSpotResolvedJavaMethodImpl, a1: long): int;
            _getLocalVariableTableStart(method: HotSpotResolvedJavaMethodImpl): long;
            _getLocalVariableTableStart(a0: HotSpotResolvedJavaMethodImpl, a1: long): long;
            _getMaxCallTargetOffset(a0: long): long;
            _getResolvedJavaMethod(a0: HotSpotObjectConstantImpl, a1: long): HotSpotResolvedJavaMethodImpl;
            _getResolvedJavaType(base: HotSpotConstantPool, displacement: long): HotSpotResolvedObjectTypeImpl;
            _getResolvedJavaType(base: HotSpotMethodData, displacement: long): HotSpotResolvedObjectTypeImpl;
            _getResolvedJavaType(base: HotSpotResolvedObjectTypeImpl, displacement: long, a2: boolean): HotSpotResolvedObjectTypeImpl;
            _getResolvedJavaType(base: HotSpotObjectConstantImpl, displacement: long, a2: boolean): HotSpotResolvedObjectTypeImpl;
            _getResolvedJavaType(address: long): HotSpotResolvedObjectTypeImpl;
            _getResolvedJavaType0(a0: any, a1: long, a2: boolean): HotSpotResolvedObjectTypeImpl;
            _getSignatureName(a0: long): string;
            _getSignaturePolymorphicHolders(): string[];
            _getStackTraceElement(method: HotSpotResolvedJavaMethodImpl, bci: int): java.lang.StackTraceElement;
            _getStackTraceElement(a0: HotSpotResolvedJavaMethodImpl, a1: long, a2: int): java.lang.StackTraceElement;
            _getSymbol(a0: long): string;
            _getThreadLocalLong(a0: int): long;
            _getThreadLocalObject(a0: int): any;
            _getUncachedStringInPool(constantPool: HotSpotConstantPool, cpi: int): ci.meta.JavaConstant;
            _getUncachedStringInPool(a0: HotSpotConstantPool, a1: long, a2: int): ci.meta.JavaConstant;
            _getVtableIndexForInterfaceMethod(type: HotSpotResolvedObjectTypeImpl, method: HotSpotResolvedJavaMethodImpl): int;
            _getVtableIndexForInterfaceMethod(a0: HotSpotResolvedObjectTypeImpl, a1: long, a2: HotSpotResolvedJavaMethodImpl, a3: long): int;
            _hasCompiledCodeForOSR(method: HotSpotResolvedJavaMethodImpl, entryBCI: int, level: int): boolean;
            _hasCompiledCodeForOSR(a0: HotSpotResolvedJavaMethodImpl, a1: long, a2: int, a3: int): boolean;
            _hasFinalizableSubclass(type: HotSpotResolvedObjectTypeImpl): boolean;
            _hasFinalizableSubclass(a0: HotSpotResolvedObjectTypeImpl, a1: long): boolean;
            _hasNeverInlineDirective(method: HotSpotResolvedJavaMethodImpl): boolean;
            _hasNeverInlineDirective(a0: HotSpotResolvedJavaMethodImpl, a1: long): boolean;
            _installCode(compiledCode: HotSpotCompiledCode, code: ci.code.InstalledCode, failedSpeculationsAddress: long, a3: byte[]): int;
            _installCode0(a0: long, a1: long, a2: boolean, a3: HotSpotCompiledCode, a4: any[], a5: ci.code.InstalledCode, a6: long, a7: byte[]): int;
            _interpreterFrameSize(a0: ci.code.BytecodeFrame): int;
            _invalidateHotSpotNmethod(a0: HotSpotNmethod, a1: boolean): void;
            _isAssignableFrom(klass: HotSpotResolvedObjectTypeImpl, subklass: HotSpotResolvedObjectTypeImpl): boolean;
            _isAssignableFrom(a0: HotSpotResolvedObjectTypeImpl, a1: long, a2: HotSpotResolvedObjectTypeImpl, a3: long): boolean;
            _isCompilable(method: HotSpotResolvedJavaMethodImpl): boolean;
            _isCompilable(a0: HotSpotResolvedJavaMethodImpl, a1: long): boolean;
            _isCurrentThreadAttached(): boolean;
            _isInstance(klass: HotSpotResolvedObjectTypeImpl, object: HotSpotObjectConstantImpl): boolean;
            _isInstance(a0: HotSpotResolvedObjectTypeImpl, a1: long, a2: HotSpotObjectConstantImpl): boolean;
            _isInternedString(a0: HotSpotObjectConstantImpl): boolean;
            _isMature(a0: long): boolean;
            _isResolvedInvokeHandleInPool(constantPool: HotSpotConstantPool, cpi: int): int;
            _isResolvedInvokeHandleInPool(a0: HotSpotConstantPool, a1: long, a2: int): int;
            _isTrustedForIntrinsics(klass: HotSpotResolvedObjectTypeImpl): boolean;
            _isTrustedForIntrinsics(a0: HotSpotResolvedObjectTypeImpl, a1: long): boolean;
            _iterateFrames<T>(a0: ci.meta.ResolvedJavaMethod[], a1: ci.meta.ResolvedJavaMethod[], a2: int, a3: ci.code.stack.InspectedFrameVisitor<T>): T;
            _lookupAppendixInPool(constantPool: HotSpotConstantPool, cpi: int): HotSpotObjectConstantImpl;
            _lookupAppendixInPool(a0: HotSpotConstantPool, a1: long, a2: int): HotSpotObjectConstantImpl;
            _lookupClass(a0: java.lang.Class<any>): HotSpotResolvedJavaType;
            _lookupJClass(a0: long): HotSpotResolvedJavaType;
            _lookupKlassInPool(constantPool: HotSpotConstantPool, cpi: int): any;
            _lookupKlassInPool(a0: HotSpotConstantPool, a1: long, a2: int): any;
            _lookupKlassRefIndexInPool(constantPool: HotSpotConstantPool, rawIndex: int, opcode: int): int;
            _lookupKlassRefIndexInPool(a0: HotSpotConstantPool, a1: long, a2: int, a3: int): int;
            _lookupMethodInPool(constantPool: HotSpotConstantPool, cpi: int, opcode: byte, caller: HotSpotResolvedJavaMethodImpl): HotSpotResolvedJavaMethodImpl;
            _lookupMethodInPool(a0: HotSpotConstantPool, a1: long, a2: int, a3: byte, a4: HotSpotResolvedJavaMethodImpl, a5: long): HotSpotResolvedJavaMethodImpl;
            _lookupNameAndTypeRefIndexInPool(constantPool: HotSpotConstantPool, rawIndex: int, opcode: int): int;
            _lookupNameAndTypeRefIndexInPool(a0: HotSpotConstantPool, a1: long, a2: int, a3: int): int;
            _lookupNameInPool(constantPool: HotSpotConstantPool, rawIndex: int, opcode: int): string;
            _lookupNameInPool(a0: HotSpotConstantPool, a1: long, a2: int, a3: int): string;
            _lookupSignatureInPool(constantPool: HotSpotConstantPool, rawIndex: int, opcode: int): string;
            _lookupSignatureInPool(a0: HotSpotConstantPool, a1: long, a2: int, a3: int): string;
            _lookupType(name: string, accessingClass: HotSpotResolvedObjectTypeImpl, resolve: boolean): HotSpotResolvedJavaType;
            _lookupType(a0: string, a1: HotSpotResolvedObjectTypeImpl, a2: long, a3: boolean): HotSpotResolvedJavaType;
            _materializeVirtualObjects(a0: HotSpotStackFrameReference, a1: boolean): void;
            _methodDataExceptionSeen(a0: long, a1: int): int;
            _methodDataProfileDataSize(a0: long, a1: int): int;
            _methodIsIgnoredBySecurityStackWalk(method: HotSpotResolvedJavaMethodImpl): boolean;
            _methodIsIgnoredBySecurityStackWalk(a0: HotSpotResolvedJavaMethodImpl, a1: long): boolean;
            _notifyCompilerInliningEvent(compileId: int, caller: HotSpotResolvedJavaMethodImpl, callee: HotSpotResolvedJavaMethodImpl, succeeded: boolean, message: string, bci: int): void;
            _notifyCompilerInliningEvent(a0: int, a1: HotSpotResolvedJavaMethodImpl, a2: long, a3: HotSpotResolvedJavaMethodImpl, a4: long, a5: boolean, a6: string, a7: int): void;
            _notifyCompilerPhaseEvent(a0: long, a1: int, a2: int, a3: int): void;
            _readArrayElement(a0: HotSpotObjectConstantImpl, a1: int): any;
            _readConfiguration(): any[];
            _readFieldValue(object: HotSpotObjectConstantImpl, expectedType: HotSpotResolvedObjectTypeImpl, offset: long, a3: char): ci.meta.JavaConstant;
            _readFieldValue(a0: HotSpotObjectConstantImpl, a1: HotSpotResolvedObjectTypeImpl, a2: long, a3: long, a4: char): ci.meta.JavaConstant;
            _readStaticFieldValue(declaringKlass: HotSpotResolvedObjectTypeImpl, offset: long, a2: char): ci.meta.JavaConstant;
            _readStaticFieldValue(a0: HotSpotResolvedObjectTypeImpl, a1: long, a2: long, a3: char): ci.meta.JavaConstant;
            _registerCompilerPhase(a0: string): int;
            _registerNativeMethods(a0: java.lang.Class<any>): long[];
            _releaseClearedOopHandles(): void;
            _releaseFailedSpeculations(a0: long): void;
            _reprofile(method: HotSpotResolvedJavaMethodImpl): void;
            _reprofile(a0: HotSpotResolvedJavaMethodImpl, a1: long): void;
            _resetCompilationStatistics(): void;
            _resolveBootstrapMethod(constantPool: HotSpotConstantPool, cpi: int): any[];
            _resolveBootstrapMethod(a0: HotSpotConstantPool, a1: long, a2: int): any[];
            _resolveFieldInPool(constantPool: HotSpotConstantPool, cpi: int, method: HotSpotResolvedJavaMethodImpl, opcode: byte, info: int[]): HotSpotResolvedObjectTypeImpl;
            _resolveFieldInPool(a0: HotSpotConstantPool, a1: long, a2: int, a3: HotSpotResolvedJavaMethodImpl, a4: long, a5: byte, a6: int[]): HotSpotResolvedObjectTypeImpl;
            _resolveInvokeDynamicInPool(constantPool: HotSpotConstantPool, cpi: int): int;
            _resolveInvokeDynamicInPool(a0: HotSpotConstantPool, a1: long, a2: int): int;
            _resolveInvokeHandleInPool(constantPool: HotSpotConstantPool, cpi: int): void;
            _resolveInvokeHandleInPool(a0: HotSpotConstantPool, a1: long, a2: int): void;
            _resolveMethod(exactReceiver: HotSpotResolvedObjectTypeImpl, method: HotSpotResolvedJavaMethodImpl, caller: HotSpotResolvedObjectTypeImpl): HotSpotResolvedJavaMethodImpl;
            _resolveMethod(a0: HotSpotResolvedObjectTypeImpl, a1: long, a2: HotSpotResolvedJavaMethodImpl, a3: long, a4: HotSpotResolvedObjectTypeImpl, a5: long): HotSpotResolvedJavaMethodImpl;
            _resolvePossiblyCachedConstantInPool(constantPool: HotSpotConstantPool, cpi: int): ci.meta.JavaConstant;
            _resolvePossiblyCachedConstantInPool(a0: HotSpotConstantPool, a1: long, a2: int): ci.meta.JavaConstant;
            _resolveTypeInPool(constantPool: HotSpotConstantPool, cpi: int): HotSpotResolvedObjectTypeImpl;
            _resolveTypeInPool(a0: HotSpotConstantPool, a1: long, a2: int): HotSpotResolvedObjectTypeImpl;
            _setCountersSize(a0: int): boolean;
            _setNotInlinableOrCompilable(method: HotSpotResolvedJavaMethodImpl): void;
            _setNotInlinableOrCompilable(a0: HotSpotResolvedJavaMethodImpl, a1: long): void;
            _setThreadLocalLong(a0: int, a1: long): void;
            _setThreadLocalObject(a0: int, a1: any): void;
            _shouldDebugNonSafepoints(): boolean;
            _shouldInlineMethod(method: HotSpotResolvedJavaMethodImpl): boolean;
            _shouldInlineMethod(a0: HotSpotResolvedJavaMethodImpl, a1: long): boolean;
            _ticksNow(): long;
            _translate(a0: any, a1: boolean): long;
            _unboxPrimitive(a0: HotSpotObjectConstantImpl): any;
            _unhand(a0: long): any;
            _updateHotSpotNmethod(a0: HotSpotNmethod): void;
            _writeDebugOutput(a0: long, a1: int, a2: boolean): void;
            _ARRAY_BOOLEAN_BASE_OFFSET: int;
            _ARRAY_BOOLEAN_INDEX_SCALE: int;
            _ARRAY_BYTE_BASE_OFFSET: int;
            _ARRAY_BYTE_INDEX_SCALE: int;
            _ARRAY_CHAR_BASE_OFFSET: int;
            _ARRAY_CHAR_INDEX_SCALE: int;
            _ARRAY_DOUBLE_BASE_OFFSET: int;
            _ARRAY_DOUBLE_INDEX_SCALE: int;
            _ARRAY_FLOAT_BASE_OFFSET: int;
            _ARRAY_FLOAT_INDEX_SCALE: int;
            _ARRAY_INT_BASE_OFFSET: int;
            _ARRAY_INT_INDEX_SCALE: int;
            _ARRAY_LONG_BASE_OFFSET: int;
            _ARRAY_LONG_INDEX_SCALE: int;
            _ARRAY_OBJECT_BASE_OFFSET: int;
            _ARRAY_OBJECT_INDEX_SCALE: int;
            _ARRAY_SHORT_BASE_OFFSET: int;
            _ARRAY_SHORT_INDEX_SCALE: int;
          }
          interface CompilerToVM extends CombineTypes<[_CompilerToVM, java.lang.Object]> {}
          interface _CompilerToVM$KlassPointers$$static extends ClassLike {
            _new(types: ci.meta.ResolvedJavaType[]): CompilerToVM$KlassPointers;
          }
          let CompilerToVM$KlassPointers: _CompilerToVM$KlassPointers$$static;
          interface _CompilerToVM$KlassPointers {
            _buffer(): long;
            close(): void;
            _pointersArray: long;
            _types: ci.meta.ResolvedJavaType[];
            _unsafe: jdk.internal.misc.Unsafe;
          }
          interface CompilerToVM$KlassPointers extends CombineTypes<[_CompilerToVM$KlassPointers, java.lang.Object, java.lang.AutoCloseable]> {}
          interface _DirectHotSpotObjectConstantImpl$$static extends ClassLike {
            _forNonNullObject(object: any, compressed: boolean): HotSpotObjectConstantImpl;
            _forObject(object: any, compressed: boolean): ci.meta.JavaConstant;
          }
          let DirectHotSpotObjectConstantImpl: _DirectHotSpotObjectConstantImpl$$static;
          interface _DirectHotSpotObjectConstantImpl {
            compress(): ci.meta.JavaConstant;
            compress(): ci.meta.Constant;
            getIdentityHashCode(): int;
            uncompress(): ci.meta.JavaConstant;
            uncompress(): ci.meta.Constant;
            _object: any;
          }
          interface DirectHotSpotObjectConstantImpl extends CombineTypes<[_DirectHotSpotObjectConstantImpl, jdk.vm.ci.hotspot.HotSpotObjectConstantImpl]> {}
          interface _EmptyEventProvider$$static extends ClassLike {
            _shouldNotReachHere(): java.lang.InternalError;
            _new(): EmptyEventProvider;
          }
          let EmptyEventProvider: _EmptyEventProvider$$static;
          interface _EmptyEventProvider {
            newCompilationEvent(): EventProvider$CompilationEvent;
            newCompilerFailureEvent(): EventProvider$CompilerFailureEvent;
          }
          interface EmptyEventProvider extends CombineTypes<[_EmptyEventProvider, jdk.vm.ci.hotspot.EventProvider, java.lang.Object]> {}
          interface _EmptyEventProvider$EmptyCompilationEvent$$static extends ClassLike {
            _new(): EmptyEventProvider$EmptyCompilationEvent;
          }
          let EmptyEventProvider$EmptyCompilationEvent: _EmptyEventProvider$EmptyCompilationEvent$$static;
          interface _EmptyEventProvider$EmptyCompilationEvent {
            begin(): void;
            commit(): void;
            end(): void;
            setCodeSize(codeSize: int): void;
            setCompileId(compileId: int): void;
            setCompileLevel(compileLevel: int): void;
            setInlinedBytes(inlinedBytes: int): void;
            setIsOsr(isOsr: boolean): void;
            setMethod(method: string): void;
            setSucceeded(succeeded: boolean): void;
            shouldWrite(): boolean;
          }
          interface EmptyEventProvider$EmptyCompilationEvent extends CombineTypes<[_EmptyEventProvider$EmptyCompilationEvent, jdk.vm.ci.hotspot.EventProvider$CompilationEvent, java.lang.Object]> {}
          interface _EmptyEventProvider$EmptyCompilerFailureEvent$$static extends ClassLike {
            _new(): EmptyEventProvider$EmptyCompilerFailureEvent;
          }
          let EmptyEventProvider$EmptyCompilerFailureEvent: _EmptyEventProvider$EmptyCompilerFailureEvent$$static;
          interface _EmptyEventProvider$EmptyCompilerFailureEvent {
            commit(): void;
            setCompileId(compileId: int): void;
            setMessage(message: string): void;
            shouldWrite(): boolean;
          }
          interface EmptyEventProvider$EmptyCompilerFailureEvent extends CombineTypes<[_EmptyEventProvider$EmptyCompilerFailureEvent, java.lang.Object, jdk.vm.ci.hotspot.EventProvider$CompilerFailureEvent]> {}
          interface _EventProvider$$static extends ClassLike {
            createEmptyCompilationEvent(): EventProvider$CompilationEvent;
            createEmptyCompilerFailureEvent(): EventProvider$CompilerFailureEvent;
            createEmptyEventProvider(): EventProvider;
          }
          let EventProvider: _EventProvider$$static;
          interface _EventProvider {
            newCompilationEvent(): EventProvider$CompilationEvent;
            newCompilerFailureEvent(): EventProvider$CompilerFailureEvent;
          }
          interface EventProvider extends CombineTypes<[_EventProvider, java.lang.Object]> {}
          interface _EventProvider$CompilationEvent$$static extends ClassLike {
          }
          let EventProvider$CompilationEvent: _EventProvider$CompilationEvent$$static;
          interface _EventProvider$CompilationEvent {
            setCodeSize(a0: int): void;
            setCompileId(a0: int): void;
            setCompileLevel(a0: int): void;
            setInlinedBytes(a0: int): void;
            setIsOsr(a0: boolean): void;
            setMethod(a0: string): void;
            setSucceeded(a0: boolean): void;
          }
          interface EventProvider$CompilationEvent extends CombineTypes<[_EventProvider$CompilationEvent, jdk.vm.ci.hotspot.EventProvider$TimedEvent, java.lang.Object]> {}
          interface _EventProvider$CompilerFailureEvent$$static extends ClassLike {
          }
          let EventProvider$CompilerFailureEvent: _EventProvider$CompilerFailureEvent$$static;
          interface _EventProvider$CompilerFailureEvent {
            setCompileId(a0: int): void;
            setMessage(a0: string): void;
          }
          interface EventProvider$CompilerFailureEvent extends CombineTypes<[_EventProvider$CompilerFailureEvent, jdk.vm.ci.hotspot.EventProvider$InstantEvent, java.lang.Object]> {}
          interface _EventProvider$InstantEvent$$static extends ClassLike {
          }
          let EventProvider$InstantEvent: _EventProvider$InstantEvent$$static;
          interface _EventProvider$InstantEvent {
            commit(): void;
            shouldWrite(): boolean;
          }
          interface EventProvider$InstantEvent extends CombineTypes<[_EventProvider$InstantEvent, java.lang.Object]> {}
          interface _EventProvider$TimedEvent$$static extends ClassLike {
          }
          let EventProvider$TimedEvent: _EventProvider$TimedEvent$$static;
          interface _EventProvider$TimedEvent {
            begin(): void;
            end(): void;
          }
          interface EventProvider$TimedEvent extends CombineTypes<[_EventProvider$TimedEvent, jdk.vm.ci.hotspot.EventProvider$InstantEvent, java.lang.Object]> {}
          interface _HandleCleaner$$static extends ClassLike {
            _create(wrapper: any, handle: long): void;
          }
          let HandleCleaner: _HandleCleaner$$static;
          interface _HandleCleaner {
            _doCleanup(): boolean;
            _handle: long;
            _isJObject: boolean;
          }
          interface HandleCleaner extends CombineTypes<[_HandleCleaner, jdk.vm.ci.hotspot.Cleaner]> {}
          interface _HotSpotCallingConventionType$$static extends ClassLike {
            valueOf(name: string): HotSpotCallingConventionType;
            values(): HotSpotCallingConventionType[];
            readonly JavaCall: HotSpotCallingConventionType;
            readonly JavaCallee: HotSpotCallingConventionType;
            readonly NativeCall: HotSpotCallingConventionType;
            readonly VALUES: ci.code.CallingConvention$Type[];
          }
          let HotSpotCallingConventionType: _HotSpotCallingConventionType$$static;
          interface _HotSpotCallingConventionType {
            readonly out: boolean;
          }
          interface HotSpotCallingConventionType extends CombineTypes<[_HotSpotCallingConventionType, ci.code.CallingConvention$Type]> {}
          interface _HotSpotCodeCacheProvider$$static extends ClassLike {
            new(runtime: HotSpotJVMCIRuntime, target: ci.code.TargetDescription, regConfig: ci.code.RegisterConfig): HotSpotCodeCacheProvider;
          }
          let HotSpotCodeCacheProvider: _HotSpotCodeCacheProvider$$static;
          interface _HotSpotCodeCacheProvider {
            createSpeculationLog(): ci.meta.SpeculationLog;
            disassemble(code: ci.code.InstalledCode): string;
            getMarkName(mark: ci.code.site.Mark): string;
            getMaxCallTargetOffset(address: long): long;
            getMinimumOutgoingSize(): int;
            getRegisterConfig(): ci.code.RegisterConfig;
            getTarget(): ci.code.TargetDescription;
            getTargetName(call: ci.code.site.Call): string;
            installCode(method: ci.meta.ResolvedJavaMethod, compiledCode: ci.code.CompiledCode, installedCode: ci.code.InstalledCode, log: ci.meta.SpeculationLog, isDefault: boolean): ci.code.InstalledCode;
            interpreterFrameSize(pos: ci.code.BytecodeFrame): int;
            invalidateInstalledCode(installedCode: ci.code.InstalledCode): void;
            _logOrDump(installedCode: ci.code.InstalledCode, compiledCode: ci.code.CompiledCode): ci.code.InstalledCode;
            resetCompilationStatistics(): void;
            shouldDebugNonSafepoints(): boolean;
            _config: HotSpotVMConfig;
            _regConfig: ci.code.RegisterConfig;
            _runtime: HotSpotJVMCIRuntime;
            _target: ci.code.TargetDescription;
          }
          interface HotSpotCodeCacheProvider extends CombineTypes<[_HotSpotCodeCacheProvider, java.lang.Object, jdk.vm.ci.code.CodeCacheProvider]> {}
          interface _HotSpotCompilationRequest$$static extends ClassLike {
            new(method: HotSpotResolvedJavaMethod, entryBCI: int, compileState: long): HotSpotCompilationRequest;
            new(method: HotSpotResolvedJavaMethod, entryBCI: int, compileState: long, a3: int): HotSpotCompilationRequest;
          }
          let HotSpotCompilationRequest: _HotSpotCompilationRequest$$static;
          interface _HotSpotCompilationRequest {
            getId(): int;
            getJvmciEnv(): long;
            getMethod(): HotSpotResolvedJavaMethod;
            getMethod(): ci.meta.ResolvedJavaMethod;
            toString(): string;
            _compileState: long;
            _id: int;
          }
          interface HotSpotCompilationRequest extends CombineTypes<[_HotSpotCompilationRequest, jdk.vm.ci.code.CompilationRequest]> {}
          interface _HotSpotCompilationRequestResult$$static extends ClassLike {
            failure(failureMessage: string, retry: boolean): HotSpotCompilationRequestResult;
            success(inlinedBytecodes: int): HotSpotCompilationRequestResult;
          }
          let HotSpotCompilationRequestResult: _HotSpotCompilationRequestResult$$static;
          interface _HotSpotCompilationRequestResult {
            getFailure(): any;
            getFailureMessage(): string;
            getInlinedBytecodes(): int;
            getRetry(): boolean;
            _failureMessage: string;
            _inlinedBytecodes: int;
            _retry: boolean;
          }
          interface HotSpotCompilationRequestResult extends CombineTypes<[_HotSpotCompilationRequestResult, java.lang.Object, jdk.vm.ci.code.CompilationRequestResult]> {}
          interface _HotSpotCompiledCode$$static extends ClassLike {
            verifyVirtualObject(v: ci.code.VirtualObject): void;
            new(name: string, targetCode: byte[], targetCodeSize: int, sites: ci.code.site.Site[], assumptions: ci.meta.Assumptions$Assumption[], methods: ci.meta.ResolvedJavaMethod[], comments: HotSpotCompiledCode$Comment[], dataSection: byte[], dataSectionAlignment: int, dataSectionPatches: ci.code.site.DataPatch[], isImmutablePIC: boolean, totalFrameSize: int, deoptRescueSlot: ci.code.StackSlot): HotSpotCompiledCode;
          }
          let HotSpotCompiledCode: _HotSpotCompiledCode$$static;
          interface _HotSpotCompiledCode {
            getName(): string;
            toString(): string;
            _validateFrames(): boolean;
            _assumptions: ci.meta.Assumptions$Assumption[];
            _comments: HotSpotCompiledCode$Comment[];
            _dataSection: byte[];
            _dataSectionAlignment: int;
            _dataSectionPatches: ci.code.site.DataPatch[];
            _deoptRescueSlot: ci.code.StackSlot;
            _isImmutablePIC: boolean;
            _methods: ci.meta.ResolvedJavaMethod[];
            _name: string;
            _sites: ci.code.site.Site[];
            _targetCode: byte[];
            _targetCodeSize: int;
            _totalFrameSize: int;
          }
          interface HotSpotCompiledCode extends CombineTypes<[_HotSpotCompiledCode, java.lang.Object, jdk.vm.ci.code.CompiledCode]> {}
          interface _HotSpotCompiledCode$Comment$$static extends ClassLike {
            new(pcOffset: int, text: string): HotSpotCompiledCode$Comment;
          }
          let HotSpotCompiledCode$Comment: _HotSpotCompiledCode$Comment$$static;
          interface _HotSpotCompiledCode$Comment {
            readonly pcOffset: int;
            readonly text: string;
          }
          interface HotSpotCompiledCode$Comment extends CombineTypes<[_HotSpotCompiledCode$Comment, java.lang.Object]> {}
          interface _HotSpotCompiledCodeStream$$static extends ClassLike {
            _c(name: string): int;
            _hexdump(out: java.io.PrintStream, address: long, a2: byte[]): void;
            _isSet(flags: int, bit: int): boolean;
            _isU1(value: int): boolean;
            _setIf(flag: int, array: any[]): int;
            _setIf(flag: int, condition: boolean): int;
            _setIf(flag: int, condition: int): int;
            _shouldDump(name: string, nmethod: HotSpotCompiledNmethod): string;
            _DURING_CALL: int;
            _HAS_ASSUMPTIONS: int;
            _HAS_CALLEE_SAVE_INFO: int;
            _HAS_COMMENTS: int;
            _HAS_DEOPT_RESCUE_SLOT: int;
            _HAS_FRAMES: int;
            _HAS_LOCALS: int;
            _HAS_LOCKS: int;
            _HAS_METHODS: int;
            _HAS_REFERENCE_MAP: int;
            _HAS_STACK: int;
            _HEADER: int;
            _INITIAL_CHUNK_SIZE: int;
            _IS_NMETHOD: int;
            _MARK_INVOKEINTERFACE: int;
            _MARK_INVOKESPECIAL: int;
            _MARK_INVOKESTATIC: int;
            _MARK_INVOKEVIRTUAL: int;
            _NO_REGISTER: int;
            _RETHROW_EXCEPTION: int;
            _new(code: HotSpotCompiledCode, withTypeInfo: boolean, withComments: boolean, withMethods: boolean): HotSpotCompiledCodeStream;
          }
          let HotSpotCompiledCodeStream: _HotSpotCompiledCodeStream$$static;
          interface _HotSpotCompiledCodeStream {
            _beforeWrite(name: string, sizeInBytes: int): void;
            close(): void;
            _codeDesc(): string;
            _dump(dumpName: string): void;
            _emitType(name: string, sizeInBytes: int): void;
            _ensureCapacity(toWrite: int): void;
            _error(format: string, args: any[]): ci.common.JVMCIError;
            _error(format: string, ...args: any[]): ci.common.JVMCIError;
            _finalizeObjectPool(): any[];
            _getChunkNext(chunk: long): long;
            _getDataSize(chunk: long): int;
            _getTotalDataSize(): int;
            _isNarrowOop(oopValue: ci.meta.Value): boolean;
            _maybeDump(name: string, nmethod: HotSpotCompiledNmethod): void;
            _rawWriteU2(name: string, value: int): void;
            _setChunkNext(chunk: long, a1: long): void;
            _setDataSize(chunk: long, a1: int): void;
            _writeAssumptions(assumptions: ci.meta.Assumptions$Assumption[]): void;
            _writeBasicType(kind: ci.meta.JavaKind): void;
            _writeBoolean(name: string, value: boolean): void;
            _writeCalleeSaveInfo(calleeSaveInfo: ci.code.RegisterSaveLayout): void;
            _writeDataPatch(patch: ci.code.site.DataPatch, code: HotSpotCompiledCode): void;
            _writeDataSectionPatches(dataSectionPatches: ci.code.site.DataPatch[]): void;
            _writeDebugInfo(debugInfo: ci.code.DebugInfo, fullInfo: boolean): void;
            _writeFrame(pos: ci.code.BytecodePosition, fullInfo: boolean, depth: int): void;
            _writeInt(name: string, value: int): void;
            _writeJavaValue(value: ci.meta.JavaValue, kind: ci.meta.JavaKind): void;
            _writeLocation(loc: ci.code.Location): void;
            _writeLong(name: string, value: long): void;
            _writeMetaspaceConstantPatch(metaspaceCon: HotSpotMetaspaceConstantImpl): void;
            _writeMethod(name: string, method: ci.meta.ResolvedJavaMethod): void;
            _writeObjectID(value: DirectHotSpotObjectConstantImpl, u1Tag: HotSpotCompiledCodeStream$Tag, u2Tag: HotSpotCompiledCodeStream$Tag): int;
            _writeObjectType(name: string, type: ci.meta.ResolvedJavaType): void;
            _writeOopConstantPatch(con: HotSpotObjectConstantImpl): void;
            _writeReferenceMap(map: ci.code.ReferenceMap): void;
            _writeRegister(reg: ci.code.Register): void;
            _writeS2(name: string, value: int): void;
            _writeSites(code: HotSpotCompiledCode): void;
            _writeStubCounts(code: HotSpotCompiledCode): void;
            _writeTag(tag: HotSpotCompiledCodeStream$Tag): void;
            _writeU1(name: string, value: int): void;
            _writeU2(name: string, value: int): void;
            _writeUTF8(name: string, value: string): void;
            _writeVirtualObjects(virtualObjects: ci.code.VirtualObject[]): void;
            _codeDesc: any;
            _currentChunk: long;
            _currentChunkIndex: int;
            _currentChunkOffset: int;
            _currentChunkSize: int;
            _headChunk: long;
            _objectPool: any[];
            _objects: java.util.HashMap<HotSpotCompiledCodeStream$IdentityBox,int>;
            _runtime: HotSpotJVMCIRuntime;
            _timeNS: long;
            _unsafe: jdk.internal.misc.Unsafe;
            _withTypeInfo: boolean;
          }
          interface HotSpotCompiledCodeStream extends CombineTypes<[_HotSpotCompiledCodeStream, java.lang.Object, java.lang.AutoCloseable]> {}
          interface _HotSpotCompiledCodeStream$IdentityBox$$static extends ClassLike {
            _new(obj: any): HotSpotCompiledCodeStream$IdentityBox;
          }
          let HotSpotCompiledCodeStream$IdentityBox: _HotSpotCompiledCodeStream$IdentityBox$$static;
          interface _HotSpotCompiledCodeStream$IdentityBox {
            equals(other: any): boolean;
            hashCode(): int;
            _obj: any;
          }
          interface HotSpotCompiledCodeStream$IdentityBox extends CombineTypes<[_HotSpotCompiledCodeStream$IdentityBox, java.lang.Object]> {}
          interface _HotSpotCompiledCodeStream$Tag$$static extends ClassLike {
            valueOf(name: string): HotSpotCompiledCodeStream$Tag;
            values(): HotSpotCompiledCodeStream$Tag[];
            readonly CALLSITE_TARGET_VALUE: HotSpotCompiledCodeStream$Tag;
            readonly CONCRETE_METHOD: HotSpotCompiledCodeStream$Tag;
            readonly CONCRETE_SUBTYPE: HotSpotCompiledCodeStream$Tag;
            readonly ILLEGAL: HotSpotCompiledCodeStream$Tag;
            readonly JOBJECT: HotSpotCompiledCodeStream$Tag;
            readonly LEAF_TYPE: HotSpotCompiledCodeStream$Tag;
            readonly NO_FINALIZABLE_SUBCLASS: HotSpotCompiledCodeStream$Tag;
            readonly NULL_CONSTANT: HotSpotCompiledCodeStream$Tag;
            readonly OBJECT_ID: HotSpotCompiledCodeStream$Tag;
            readonly OBJECT_ID2: HotSpotCompiledCodeStream$Tag;
            readonly PATCH_DATA_SECTION_REFERENCE: HotSpotCompiledCodeStream$Tag;
            readonly PATCH_JOBJECT: HotSpotCompiledCodeStream$Tag;
            readonly PATCH_KLASS: HotSpotCompiledCodeStream$Tag;
            readonly PATCH_METHOD: HotSpotCompiledCodeStream$Tag;
            readonly PATCH_NARROW_JOBJECT: HotSpotCompiledCodeStream$Tag;
            readonly PATCH_NARROW_KLASS: HotSpotCompiledCodeStream$Tag;
            readonly PATCH_NARROW_OBJECT_ID: HotSpotCompiledCodeStream$Tag;
            readonly PATCH_NARROW_OBJECT_ID2: HotSpotCompiledCodeStream$Tag;
            readonly PATCH_OBJECT_ID: HotSpotCompiledCodeStream$Tag;
            readonly PATCH_OBJECT_ID2: HotSpotCompiledCodeStream$Tag;
            readonly PRIMITIVE4: HotSpotCompiledCodeStream$Tag;
            readonly PRIMITIVE8: HotSpotCompiledCodeStream$Tag;
            readonly PRIMITIVE_0: HotSpotCompiledCodeStream$Tag;
            readonly RAW_CONSTANT: HotSpotCompiledCodeStream$Tag;
            readonly REGISTER_NARROW_OOP: HotSpotCompiledCodeStream$Tag;
            readonly REGISTER_OOP: HotSpotCompiledCodeStream$Tag;
            readonly REGISTER_PRIMITIVE: HotSpotCompiledCodeStream$Tag;
            readonly SITE_CALL: HotSpotCompiledCodeStream$Tag;
            readonly SITE_DATA_PATCH: HotSpotCompiledCodeStream$Tag;
            readonly SITE_EXCEPTION_HANDLER: HotSpotCompiledCodeStream$Tag;
            readonly SITE_FOREIGN_CALL: HotSpotCompiledCodeStream$Tag;
            readonly SITE_FOREIGN_CALL_NO_DEBUG_INFO: HotSpotCompiledCodeStream$Tag;
            readonly SITE_IMPLICIT_EXCEPTION: HotSpotCompiledCodeStream$Tag;
            readonly SITE_IMPLICIT_EXCEPTION_DISPATCH: HotSpotCompiledCodeStream$Tag;
            readonly SITE_INFOPOINT: HotSpotCompiledCodeStream$Tag;
            readonly SITE_MARK: HotSpotCompiledCodeStream$Tag;
            readonly SITE_SAFEPOINT: HotSpotCompiledCodeStream$Tag;
            readonly STACK_SLOT_NARROW_OOP: HotSpotCompiledCodeStream$Tag;
            readonly STACK_SLOT_OOP: HotSpotCompiledCodeStream$Tag;
            readonly STACK_SLOT_PRIMITIVE: HotSpotCompiledCodeStream$Tag;
            readonly VIRTUAL_OBJECT_ID: HotSpotCompiledCodeStream$Tag;
            readonly VIRTUAL_OBJECT_ID2: HotSpotCompiledCodeStream$Tag;
          }
          let HotSpotCompiledCodeStream$Tag: _HotSpotCompiledCodeStream$Tag$$static;
          interface _HotSpotCompiledCodeStream$Tag {
          }
          interface HotSpotCompiledCodeStream$Tag extends CombineTypes<[_HotSpotCompiledCodeStream$Tag]> {}
          interface _HotSpotCompiledNmethod$$static extends ClassLike {
            new(name: string, targetCode: byte[], targetCodeSize: int, sites: ci.code.site.Site[], assumptions: ci.meta.Assumptions$Assumption[], methods: ci.meta.ResolvedJavaMethod[], comments: HotSpotCompiledCode$Comment[], dataSection: byte[], dataSectionAlignment: int, dataSectionPatches: ci.code.site.DataPatch[], isImmutablePIC: boolean, totalFrameSize: int, deoptRescueSlot: ci.code.StackSlot, method: HotSpotResolvedJavaMethod, entryBCI: int, id: int, compileState: long, a17: boolean): HotSpotCompiledNmethod;
          }
          let HotSpotCompiledNmethod: _HotSpotCompiledNmethod$$static;
          interface _HotSpotCompiledNmethod {
            getInstallationFailureMessage(): string;
            toString(): string;
            _compileState: long;
            _entryBCI: int;
            _hasUnsafeAccess: boolean;
            _id: int;
            _installationFailureMessage: string;
            _method: HotSpotResolvedJavaMethod;
          }
          interface HotSpotCompiledNmethod extends CombineTypes<[_HotSpotCompiledNmethod, jdk.vm.ci.hotspot.HotSpotCompiledCode]> {}
          interface _HotSpotCompressedNullConstant$$static extends ClassLike {
            readonly COMPRESSED_NULL: ci.meta.JavaConstant;
          }
          let HotSpotCompressedNullConstant: _HotSpotCompressedNullConstant$$static;
          interface _HotSpotCompressedNullConstant {
            asBoolean(): boolean;
            asBoxedPrimitive(): any;
            asDouble(): double;
            asFloat(): float;
            asInt(): int;
            asLong(): long;
            compress(): ci.meta.Constant;
            equals(o: any): boolean;
            getJavaKind(): ci.meta.JavaKind;
            hashCode(): int;
            isCompressed(): boolean;
            isDefaultForKind(): boolean;
            isNull(): boolean;
            toString(): string;
            toValueString(): string;
            uncompress(): ci.meta.Constant;
          }
          interface HotSpotCompressedNullConstant extends CombineTypes<[_HotSpotCompressedNullConstant, jdk.vm.ci.meta.JavaConstant, jdk.vm.ci.hotspot.HotSpotConstant, java.lang.Object]> {}
          interface _HotSpotConstant$$static extends ClassLike {
          }
          let HotSpotConstant: _HotSpotConstant$$static;
          interface _HotSpotConstant {
            compress(): ci.meta.Constant;
            isCompressed(): boolean;
            uncompress(): ci.meta.Constant;
          }
          interface HotSpotConstant extends CombineTypes<[_HotSpotConstant, jdk.vm.ci.meta.Constant, java.lang.Object]> {}
          interface _HotSpotConstantPool$$static extends ClassLike {
            _fromMetaspace(constantPoolHandle: long): HotSpotConstantPool;
            _getJavaType(type: any): ci.meta.JavaType;
            _isInvokedynamicIndex(index: int): boolean;
            _isSignaturePolymorphicHolder(type: ci.meta.ResolvedJavaType): boolean;
            _rawIndexToConstantPoolCacheIndex(rawIndex: int, opcode: int): int;
            _signaturePolymorphicHolders: string[];
          }
          let HotSpotConstantPool: _HotSpotConstantPool$$static;
          interface _HotSpotConstantPool {
            _checkBounds(index: int): void;
            _checkTag(index: int, tag: HotSpotConstantPool$JvmConstant): void;
            _checkTagIsFieldOrMethod(index: int): void;
            _flags(): int;
            _getConstantPoolPointer(): long;
            _getDoubleAt(index: int): double;
            _getEntryAt(index: int): long;
            _getFloatAt(index: int): float;
            _getHolder(): HotSpotResolvedObjectType;
            _getIntAt(index: int): int;
            _getKlassRefIndexAt(rawIndex: int, opcode: int): int;
            _getLongAt(index: int): long;
            getMetadataHandle(): long;
            _getNameAndTypeAt(index: int): int;
            _getNameAndTypeRefIndexAt(rawIndex: int, opcode: int): int;
            _getNameOf(rawIndex: int, opcode: int): string;
            _getNameRefIndexAt(index: int): int;
            _getSignatureOf(rawIndex: int, opcode: int): string;
            _getSignatureRefIndexAt(index: int): int;
            getSourceFileName(): string;
            _getStaticFieldConstantValue(cpi: int): ci.meta.JavaConstant;
            _getTagAt(index: int): HotSpotConstantPool$JvmConstant;
            _getUncachedKlassRefIndexAt(index: int): int;
            hasDynamicConstant(): boolean;
            isResolvedDynamicInvoke(cpi: int, opcode: int): boolean;
            length(): int;
            loadReferencedType(cpi: int, opcode: int): void;
            loadReferencedType(cpi: int, opcode: int, initialize: boolean): void;
            lookupAppendix(cpi: int, opcode: int): ci.meta.JavaConstant;
            lookupBootstrapMethodInvocation(rawCpi: int, opcode: int): ci.meta.ConstantPool$BootstrapMethodInvocation;
            lookupConstant(cpi: int): any;
            lookupField(cpi: int, method: ci.meta.ResolvedJavaMethod, opcode: int): ci.meta.JavaField;
            lookupMethod(cpi: int, opcode: int, caller: ci.meta.ResolvedJavaMethod): ci.meta.JavaMethod;
            lookupReferencedType(cpi: int, opcode: int): ci.meta.JavaType;
            lookupSignature(cpi: int): ci.meta.Signature;
            lookupType(cpi: int, opcode: int): ci.meta.JavaType;
            lookupUtf8(cpi: int): string;
            rawIndexToConstantPoolIndex(rawIndex: int, opcode: int): int;
            toString(): string;
            _constantPoolHandle: long;
            _constants: HotSpotConstantPool$JvmConstants;
            _holder: HotSpotResolvedObjectTypeImpl;
            _lastLookupType: HotSpotConstantPool$LookupTypeCacheElement;
          }
          interface HotSpotConstantPool extends CombineTypes<[_HotSpotConstantPool, jdk.vm.ci.hotspot.MetaspaceHandleObject, jdk.vm.ci.meta.ConstantPool, java.lang.Object]> {}
          interface _HotSpotConstantPool$BootstrapMethodInvocationImpl$$static extends ClassLike {
            _argumentAsString(arg: ci.meta.JavaConstant): string;
            _new(indy: boolean, method: ci.meta.ResolvedJavaMethod, name: string, type: ci.meta.JavaConstant, staticArguments: java.util.List<ci.meta.JavaConstant>): HotSpotConstantPool$BootstrapMethodInvocationImpl;
          }
          let HotSpotConstantPool$BootstrapMethodInvocationImpl: _HotSpotConstantPool$BootstrapMethodInvocationImpl$$static;
          interface _HotSpotConstantPool$BootstrapMethodInvocationImpl {
            getMethod(): ci.meta.ResolvedJavaMethod;
            getName(): string;
            getStaticArguments(): java.util.List<ci.meta.JavaConstant>;
            getType(): ci.meta.JavaConstant;
            isInvokeDynamic(): boolean;
            toString(): string;
            _indy: boolean;
            _method: ci.meta.ResolvedJavaMethod;
            _name: string;
            _staticArguments: java.util.List<ci.meta.JavaConstant>;
            _type: ci.meta.JavaConstant;
          }
          interface HotSpotConstantPool$BootstrapMethodInvocationImpl extends CombineTypes<[_HotSpotConstantPool$BootstrapMethodInvocationImpl, jdk.vm.ci.meta.ConstantPool$BootstrapMethodInvocation, java.lang.Object]> {}
          interface _HotSpotConstantPool$Bytecodes$$static extends ClassLike {
            _isInvoke(opcode: int): boolean;
            _isInvokeHandleAlias(opcode: int): boolean;
            readonly ANEWARRAY: int;
            readonly CHECKCAST: int;
            readonly GETFIELD: int;
            readonly GETSTATIC: int;
            readonly INSTANCEOF: int;
            readonly INVOKEDYNAMIC: int;
            readonly INVOKEINTERFACE: int;
            readonly INVOKESPECIAL: int;
            readonly INVOKESTATIC: int;
            readonly INVOKEVIRTUAL: int;
            readonly LDC: int;
            readonly LDC2_W: int;
            readonly LDC_W: int;
            readonly MULTIANEWARRAY: int;
            readonly NEW: int;
            readonly NEWARRAY: int;
            readonly PUTFIELD: int;
            readonly PUTSTATIC: int;
            new(): HotSpotConstantPool$Bytecodes;
          }
          let HotSpotConstantPool$Bytecodes: _HotSpotConstantPool$Bytecodes$$static;
          interface _HotSpotConstantPool$Bytecodes {
          }
          interface HotSpotConstantPool$Bytecodes extends CombineTypes<[_HotSpotConstantPool$Bytecodes, java.lang.Object]> {}
          interface _HotSpotConstantPool$JvmConstant$$static extends ClassLike {
            _new(tag: int, name: string): HotSpotConstantPool$JvmConstant;
          }
          let HotSpotConstantPool$JvmConstant: _HotSpotConstantPool$JvmConstant$$static;
          interface _HotSpotConstantPool$JvmConstant {
            toString(): string;
            _name: string;
            _tag: int;
          }
          interface HotSpotConstantPool$JvmConstant extends CombineTypes<[_HotSpotConstantPool$JvmConstant, java.lang.Object]> {}
          interface _HotSpotConstantPool$JvmConstants$$static extends ClassLike {
            _instance(): HotSpotConstantPool$JvmConstants;
            _instance: HotSpotConstantPool$JvmConstants;
            _new(): HotSpotConstantPool$JvmConstants;
          }
          let HotSpotConstantPool$JvmConstants: _HotSpotConstantPool$JvmConstants$$static;
          interface _HotSpotConstantPool$JvmConstants {
            _add(constant: HotSpotConstantPool$JvmConstant): HotSpotConstantPool$JvmConstant;
            _get(tag: int): HotSpotConstantPool$JvmConstant;
            _indexOf(tag: int): int;
            _c: HotSpotVMConfig;
            _externalMax: int;
            _internalMax: int;
            _internalMin: int;
            _jvmClass: HotSpotConstantPool$JvmConstant;
            _jvmDouble: HotSpotConstantPool$JvmConstant;
            _jvmDynamic: HotSpotConstantPool$JvmConstant;
            _jvmDynamicInError: HotSpotConstantPool$JvmConstant;
            _jvmFieldref: HotSpotConstantPool$JvmConstant;
            _jvmFloat: HotSpotConstantPool$JvmConstant;
            _jvmInteger: HotSpotConstantPool$JvmConstant;
            _jvmInterfaceMethodref: HotSpotConstantPool$JvmConstant;
            _jvmInvokeDynamic: HotSpotConstantPool$JvmConstant;
            _jvmLong: HotSpotConstantPool$JvmConstant;
            _jvmMethodHandle: HotSpotConstantPool$JvmConstant;
            _jvmMethodHandleInError: HotSpotConstantPool$JvmConstant;
            _jvmMethodType: HotSpotConstantPool$JvmConstant;
            _jvmMethodTypeInError: HotSpotConstantPool$JvmConstant;
            _jvmMethodref: HotSpotConstantPool$JvmConstant;
            _jvmNameAndType: HotSpotConstantPool$JvmConstant;
            _jvmString: HotSpotConstantPool$JvmConstant;
            _jvmUnresolvedClass: HotSpotConstantPool$JvmConstant;
            _jvmUnresolvedClassInError: HotSpotConstantPool$JvmConstant;
            _jvmUtf8: HotSpotConstantPool$JvmConstant;
            _table: HotSpotConstantPool$JvmConstant[];
          }
          interface HotSpotConstantPool$JvmConstants extends CombineTypes<[_HotSpotConstantPool$JvmConstants, java.lang.Object]> {}
          interface _HotSpotConstantPool$LookupTypeCacheElement$$static extends ClassLike {
            _new(lastCpi: int, javaType: ci.meta.JavaType): HotSpotConstantPool$LookupTypeCacheElement;
          }
          let HotSpotConstantPool$LookupTypeCacheElement: _HotSpotConstantPool$LookupTypeCacheElement$$static;
          interface _HotSpotConstantPool$LookupTypeCacheElement {
            _javaType: ci.meta.JavaType;
            _lastCpi: int;
          }
          interface HotSpotConstantPool$LookupTypeCacheElement extends CombineTypes<[_HotSpotConstantPool$LookupTypeCacheElement, java.lang.Object]> {}
          interface _HotSpotConstantReflectionProvider$$static extends ClassLike {
            _isBoxCached(source: ci.meta.JavaConstant): boolean;
            new(runtime: HotSpotJVMCIRuntime): HotSpotConstantReflectionProvider;
          }
          let HotSpotConstantReflectionProvider: _HotSpotConstantReflectionProvider$$static;
          interface _HotSpotConstantReflectionProvider {
            asJavaClass(type: ci.meta.ResolvedJavaType): ci.meta.JavaConstant;
            asJavaType(constant: ci.meta.Constant): ci.meta.ResolvedJavaType;
            asObjectHub(type: ci.meta.ResolvedJavaType): ci.meta.Constant;
            boxPrimitive(source: ci.meta.JavaConstant): ci.meta.JavaConstant;
            constantEquals(x: ci.meta.Constant, y: ci.meta.Constant): boolean;
            forObject(value: any): ci.meta.JavaConstant;
            forString(value: string): ci.meta.JavaConstant;
            getMemoryAccessProvider(): ci.meta.MemoryAccessProvider;
            getMethodHandleAccess(): ci.meta.MethodHandleAccessProvider;
            readArrayElement(array: ci.meta.JavaConstant, index: int): ci.meta.JavaConstant;
            readArrayLength(array: ci.meta.JavaConstant): int;
            readFieldValue(field: ci.meta.ResolvedJavaField, receiver: ci.meta.JavaConstant): ci.meta.JavaConstant;
            unboxPrimitive(source: ci.meta.JavaConstant): ci.meta.JavaConstant;
            _memoryAccess: HotSpotMemoryAccessProviderImpl;
            _methodHandleAccess: HotSpotMethodHandleAccessProvider;
            _runtime: HotSpotJVMCIRuntime;
          }
          interface HotSpotConstantReflectionProvider extends CombineTypes<[_HotSpotConstantReflectionProvider, jdk.vm.ci.meta.ConstantReflectionProvider, java.lang.Object]> {}
          interface _HotSpotForeignCallTarget$$static extends ClassLike {
            new(address: long): HotSpotForeignCallTarget;
          }
          let HotSpotForeignCallTarget: _HotSpotForeignCallTarget$$static;
          interface _HotSpotForeignCallTarget {
            _address: long;
          }
          interface HotSpotForeignCallTarget extends CombineTypes<[_HotSpotForeignCallTarget, java.lang.Object, jdk.vm.ci.meta.InvokeTarget]> {}
          interface _HotSpotInstalledCode$$static extends ClassLike {
            new(name: string): HotSpotInstalledCode;
          }
          let HotSpotInstalledCode: _HotSpotInstalledCode$$static;
          interface _HotSpotInstalledCode {
            getCode(): byte[];
            getCodeSize(): long;
            getSize(): int;
            getStart(): long;
            toString(): string;
(): string;
            _codeSize: int;
            _codeStart: long;
            _size: int;
          }
          interface HotSpotInstalledCode extends CombineTypes<[_HotSpotInstalledCode, jdk.vm.ci.code.InstalledCode]> {}
          interface _HotSpotJDKReflection$$static extends ClassLike {
            _forNonNullObject(value: any): HotSpotObjectConstantImpl;
            _getField(field: HotSpotResolvedJavaFieldImpl): java.lang.reflect.Field;
            _getMethod(method: HotSpotResolvedJavaMethodImpl): java.lang.reflect.Executable;
            _new(): HotSpotJDKReflection;
          }
          let HotSpotJDKReflection: _HotSpotJDKReflection$$static;
          interface _HotSpotJDKReflection {
            _asJavaType(object: HotSpotObjectConstantImpl): ci.meta.ResolvedJavaType;
            _asObject<T>(object: HotSpotObjectConstantImpl, type: java.lang.Class<T>): T;
            _asObject(object: HotSpotObjectConstantImpl, type: HotSpotResolvedJavaType): any;
            _asString(object: HotSpotObjectConstantImpl): string;
            _boxPrimitive(source: ci.meta.JavaConstant): ci.meta.JavaConstant;
            _equals(a: HotSpotObjectConstantImpl, b: HotSpotObjectConstantImpl): boolean;
            _forObject(value: any): ci.meta.JavaConstant;
            _formatString(object: HotSpotObjectConstantImpl): string;
            _getAnnotation<T>(holder: HotSpotResolvedObjectTypeImpl, annotationClass: java.lang.Class<T>): T;
            _getAnnotations(holder: HotSpotResolvedObjectTypeImpl): java.lang.annotation.Annotation[];
            _getDeclaredAnnotations(holder: HotSpotResolvedObjectTypeImpl): java.lang.annotation.Annotation[];
            _getEnclosingClass(holder: HotSpotResolvedObjectTypeImpl): HotSpotResolvedObjectType;
            _getFieldAnnotation<T>(javaField: HotSpotResolvedJavaFieldImpl, annotationClass: java.lang.Class<T>): T;
            _getFieldAnnotations(javaField: HotSpotResolvedJavaFieldImpl): java.lang.annotation.Annotation[];
            _getFieldDeclaredAnnotations(javaField: HotSpotResolvedJavaFieldImpl): java.lang.annotation.Annotation[];
            _getGenericParameterTypes(javaMethod: HotSpotResolvedJavaMethodImpl): java.lang.reflect.Type[];
            _getLength(arrayObject: HotSpotObjectConstantImpl): int;
            _getMethodAnnotation<T>(javaMethod: HotSpotResolvedJavaMethodImpl, annotationClass: java.lang.Class<T>): T;
            _getMethodAnnotations(javaMethod: HotSpotResolvedJavaMethodImpl): java.lang.annotation.Annotation[];
            _getMethodDeclaredAnnotations(javaMethod: HotSpotResolvedJavaMethodImpl): java.lang.annotation.Annotation[];
            _getMirror(holder: HotSpotResolvedObjectTypeImpl): java.lang.Class<any>;
            _getMirror(type: HotSpotResolvedJavaType): java.lang.Class<any>;
            _getParameterAnnotations(javaMethod: HotSpotResolvedJavaMethodImpl): java.lang.annotation.Annotation[][];
            _getParameters(javaMethod: HotSpotResolvedJavaMethodImpl): ci.meta.ResolvedJavaMethod$Parameter[];
            _getType(object: HotSpotObjectConstantImpl): HotSpotResolvedObjectTypeImpl;
            _isAssignableFrom(holder: HotSpotResolvedObjectTypeImpl, otherType: HotSpotResolvedObjectTypeImpl): boolean;
            _isInstance(holder: HotSpotResolvedObjectTypeImpl, obj: HotSpotObjectConstantImpl): boolean;
            _isLocalClass(holder: HotSpotResolvedObjectTypeImpl): boolean;
            _isMemberClass(holder: HotSpotResolvedObjectTypeImpl): boolean;
            _readArrayElement(arrayObject: HotSpotObjectConstantImpl, index: int): ci.meta.JavaConstant;
            _resolveObject(object: HotSpotObjectConstantImpl): any;
            _unboxPrimitive(source: HotSpotObjectConstantImpl): ci.meta.JavaConstant;
            _oopSizeOffset: long;
          }
          interface HotSpotJDKReflection extends CombineTypes<[_HotSpotJDKReflection, jdk.vm.ci.hotspot.HotSpotJVMCIReflection]> {}
          interface _HotSpotJVMCIBackendFactory$$static extends ClassLike {
            convertFeatures<CPUFeatureType>(enumType: java.lang.Class<CPUFeatureType>, constants: java.util.Map<string,long>, features: long, a3: java.util.Map<string,string>): java.util.EnumSet<CPUFeatureType>;
          }
          let HotSpotJVMCIBackendFactory: _HotSpotJVMCIBackendFactory$$static;
          interface _HotSpotJVMCIBackendFactory {
            createJVMCIBackend(a0: HotSpotJVMCIRuntime, a1: ci.runtime.JVMCIBackend): ci.runtime.JVMCIBackend;
            getArchitecture(): string;
          }
          interface HotSpotJVMCIBackendFactory extends CombineTypes<[_HotSpotJVMCIBackendFactory, java.lang.Object]> {}
          interface _HotSpotJVMCICompilerConfig$$static extends ClassLike {
            _getCompilerFactory(runtime: HotSpotJVMCIRuntime): ci.runtime.JVMCICompilerFactory;
            _getJVMCICompilerFactories(): java.util.List<ci.runtime.JVMCICompilerFactory>;
            _openJVMCITo(otherModule: java.lang.Module): void;
            _compilerFactory: ci.runtime.JVMCICompilerFactory;
            _new(): HotSpotJVMCICompilerConfig;
          }
          let HotSpotJVMCICompilerConfig: _HotSpotJVMCICompilerConfig$$static;
          interface _HotSpotJVMCICompilerConfig {
          }
          interface HotSpotJVMCICompilerConfig extends CombineTypes<[_HotSpotJVMCICompilerConfig, java.lang.Object]> {}
          interface _HotSpotJVMCICompilerConfig$DummyCompilerFactory$$static extends ClassLike {
            _new(reason: string, runtime: HotSpotJVMCIRuntime): HotSpotJVMCICompilerConfig$DummyCompilerFactory;
          }
          let HotSpotJVMCICompilerConfig$DummyCompilerFactory: _HotSpotJVMCICompilerConfig$DummyCompilerFactory$$static;
          interface _HotSpotJVMCICompilerConfig$DummyCompilerFactory {
            compileMethod(request: ci.code.CompilationRequest): HotSpotCompilationRequestResult;
            compileMethod(a0: ci.code.CompilationRequest): ci.code.CompilationRequestResult;
            createCompiler(rt: ci.runtime.JVMCIRuntime): ci.runtime.JVMCICompiler;
            getCompilerName(): string;
            isGCSupported(gcIdentifier: int): boolean;
            _reason: string;
            _runtime: HotSpotJVMCIRuntime;
          }
          interface HotSpotJVMCICompilerConfig$DummyCompilerFactory extends CombineTypes<[_HotSpotJVMCICompilerConfig$DummyCompilerFactory, jdk.vm.ci.runtime.JVMCICompiler, java.lang.Object, jdk.vm.ci.runtime.JVMCICompilerFactory]> {}
          interface _HotSpotJVMCICompilerFactory$$static extends ClassLike {
            new(): HotSpotJVMCICompilerFactory;
          }
          let HotSpotJVMCICompilerFactory: _HotSpotJVMCICompilerFactory$$static;
          interface _HotSpotJVMCICompilerFactory {
            adjustCompilationLevel(declaringClass: any, name: string, signature: string, isOsr: boolean, level: HotSpotJVMCICompilerFactory$CompilationLevel): HotSpotJVMCICompilerFactory$CompilationLevel;
            getCompilationLevelAdjustment(): HotSpotJVMCICompilerFactory$CompilationLevelAdjustment;
          }
          interface HotSpotJVMCICompilerFactory extends CombineTypes<[_HotSpotJVMCICompilerFactory, java.lang.Object, jdk.vm.ci.runtime.JVMCICompilerFactory]> {}
          interface _HotSpotJVMCICompilerFactory$CompilationLevel$$static extends ClassLike {
            valueOf(name: string): HotSpotJVMCICompilerFactory$CompilationLevel;
            values(): HotSpotJVMCICompilerFactory$CompilationLevel[];
            readonly FullOptimization: HotSpotJVMCICompilerFactory$CompilationLevel;
            readonly FullProfile: HotSpotJVMCICompilerFactory$CompilationLevel;
            readonly LimitedProfile: HotSpotJVMCICompilerFactory$CompilationLevel;
            readonly None: HotSpotJVMCICompilerFactory$CompilationLevel;
            readonly Simple: HotSpotJVMCICompilerFactory$CompilationLevel;
          }
          let HotSpotJVMCICompilerFactory$CompilationLevel: _HotSpotJVMCICompilerFactory$CompilationLevel$$static;
          interface _HotSpotJVMCICompilerFactory$CompilationLevel {
          }
          interface HotSpotJVMCICompilerFactory$CompilationLevel extends CombineTypes<[_HotSpotJVMCICompilerFactory$CompilationLevel]> {}
          interface _HotSpotJVMCICompilerFactory$CompilationLevelAdjustment$$static extends ClassLike {
            valueOf(name: string): HotSpotJVMCICompilerFactory$CompilationLevelAdjustment;
            values(): HotSpotJVMCICompilerFactory$CompilationLevelAdjustment[];
            readonly ByFullSignature: HotSpotJVMCICompilerFactory$CompilationLevelAdjustment;
            readonly ByHolder: HotSpotJVMCICompilerFactory$CompilationLevelAdjustment;
            readonly None: HotSpotJVMCICompilerFactory$CompilationLevelAdjustment;
          }
          let HotSpotJVMCICompilerFactory$CompilationLevelAdjustment: _HotSpotJVMCICompilerFactory$CompilationLevelAdjustment$$static;
          interface _HotSpotJVMCICompilerFactory$CompilationLevelAdjustment {
          }
          interface HotSpotJVMCICompilerFactory$CompilationLevelAdjustment extends CombineTypes<[_HotSpotJVMCICompilerFactory$CompilationLevelAdjustment]> {}
          interface _HotSpotJVMCIReflection$$static extends ClassLike {
            _new(): HotSpotJVMCIReflection;
          }
          let HotSpotJVMCIReflection: _HotSpotJVMCIReflection$$static;
          interface _HotSpotJVMCIReflection {
            _asJavaType(a0: HotSpotObjectConstantImpl): ci.meta.ResolvedJavaType;
            _asObject<T>(a0: HotSpotObjectConstantImpl, a1: java.lang.Class<T>): T;
            _asObject(a0: HotSpotObjectConstantImpl, a1: HotSpotResolvedJavaType): any;
            _asString(a0: HotSpotObjectConstantImpl): string;
            _boxPrimitive(a0: ci.meta.JavaConstant): ci.meta.JavaConstant;
            _equals(a0: HotSpotObjectConstantImpl, a1: HotSpotObjectConstantImpl): boolean;
            _forObject(a0: any): ci.meta.JavaConstant;
            _formatString(a0: HotSpotObjectConstantImpl): string;
            _getAnnotation<T>(a0: HotSpotResolvedObjectTypeImpl, a1: java.lang.Class<T>): T;
            _getAnnotations(a0: HotSpotResolvedObjectTypeImpl): java.lang.annotation.Annotation[];
            _getDeclaredAnnotations(a0: HotSpotResolvedObjectTypeImpl): java.lang.annotation.Annotation[];
            _getEnclosingClass(a0: HotSpotResolvedObjectTypeImpl): HotSpotResolvedObjectType;
            _getFieldAnnotation<T>(a0: HotSpotResolvedJavaFieldImpl, a1: java.lang.Class<T>): T;
            _getFieldAnnotations(a0: HotSpotResolvedJavaFieldImpl): java.lang.annotation.Annotation[];
            _getFieldDeclaredAnnotations(a0: HotSpotResolvedJavaFieldImpl): java.lang.annotation.Annotation[];
            _getGenericParameterTypes(a0: HotSpotResolvedJavaMethodImpl): java.lang.reflect.Type[];
            _getLength(a0: HotSpotObjectConstantImpl): int;
            _getMethodAnnotation<T>(a0: HotSpotResolvedJavaMethodImpl, a1: java.lang.Class<T>): T;
            _getMethodAnnotations(a0: HotSpotResolvedJavaMethodImpl): java.lang.annotation.Annotation[];
            _getMethodDeclaredAnnotations(a0: HotSpotResolvedJavaMethodImpl): java.lang.annotation.Annotation[];
            _getParameterAnnotations(a0: HotSpotResolvedJavaMethodImpl): java.lang.annotation.Annotation[][];
            _getParameters(a0: HotSpotResolvedJavaMethodImpl): ci.meta.ResolvedJavaMethod$Parameter[];
            _getType(a0: HotSpotObjectConstantImpl): HotSpotResolvedObjectTypeImpl;
            _isAssignableFrom(a0: HotSpotResolvedObjectTypeImpl, a1: HotSpotResolvedObjectTypeImpl): boolean;
            _isInstance(a0: HotSpotResolvedObjectTypeImpl, a1: HotSpotObjectConstantImpl): boolean;
            _isLocalClass(a0: HotSpotResolvedObjectTypeImpl): boolean;
            _isMemberClass(a0: HotSpotResolvedObjectTypeImpl): boolean;
            _readArrayElement(a0: HotSpotObjectConstantImpl, a1: int): ci.meta.JavaConstant;
            _resolveObject(a0: HotSpotObjectConstantImpl): any;
            _unboxPrimitive(a0: HotSpotObjectConstantImpl): ci.meta.JavaConstant;
          }
          interface HotSpotJVMCIReflection extends CombineTypes<[_HotSpotJVMCIReflection, java.lang.Object]> {}
          interface _HotSpotJVMCIRuntime$$static extends ClassLike {
            _exceptionToString(o: java.lang.Throwable, toString: boolean, stackTrace: boolean): string[];
            _findFactory(architecture: string): HotSpotJVMCIBackendFactory;
            getHostWordKind(): ci.meta.JavaKind;
            _getHotSpotJVMCIBackendFactories(): java.lang.Iterable<HotSpotJVMCIBackendFactory>;
            _postTranslation(translatedObject: any): void;
            runtime(): HotSpotJVMCIRuntime;
            _writeDebugOutput0(vm: CompilerToVM, bytes: byte[], offset: int, length: int, flush: boolean, canThrow: boolean): int;
            _FORCE_TRANSLATE_FAILURE_FILTER_RE: java.util.regex.Pattern;
            _cachedHotSpotJVMCIBackendFactories: java.util.List<HotSpotJVMCIBackendFactory>;
            _instance: HotSpotJVMCIRuntime;
            _options: java.util.Map<string,any>;
          }
          let HotSpotJVMCIRuntime: _HotSpotJVMCIRuntime$$static;
          interface _HotSpotJVMCIRuntime {
            asResolvedJavaType(hotspot_jclass_value: long): HotSpotResolvedJavaType;
            attachCurrentThread(asDaemon: boolean, javaVMInfo: long[]): boolean;
            _bootstrapFinished(): void;
            collectCounters(): long[];
            _compileMethod(method: HotSpotResolvedJavaMethod, entryBCI: int, compileState: long, a3: int): HotSpotCompilationRequestResult;
            _createClass(javaClass: java.lang.Class<any>): HotSpotResolvedJavaType;
            detachCurrentThread(release: boolean): boolean;
            excludeFromJVMCICompilation(modules: java.lang.Module[]): void;
            excludeFromJVMCICompilation(...modules: java.lang.Module[]): void;
            exitHotSpot(status: int): void;
            _exitHotSpotWithMessage(status: int, format: string, args: any[]): ci.common.JVMCIError;
            _exitHotSpotWithMessage(status: int, format: string, ...args: any[]): ci.common.JVMCIError;
            _fromClass(javaClass: java.lang.Class<any>): HotSpotResolvedJavaType;
            _fromClass0(javaClass: java.lang.Class<any>): HotSpotResolvedJavaType;
            _fromMetaspace(klassPointer: long): HotSpotResolvedObjectTypeImpl;
            getArrayBaseOffset(kind: ci.meta.JavaKind): int;
            getArrayIndexScale(kind: ci.meta.JavaKind): int;
            _getCallSite(): HotSpotResolvedObjectTypeImpl;
            getCompiler(): ci.runtime.JVMCICompiler;
            getCompilerToVM(): CompilerToVM;
            getConfig(): HotSpotVMConfig;
            getConfigStore(): HotSpotVMConfigStore;
            _getConstantCallSite(): HotSpotResolvedObjectTypeImpl;
            getCountersSize(): int;
            getCurrentJavaThread(): long;
            getHostJVMCIBackend(): ci.runtime.JVMCIBackend;
            getIntrinsificationTrustPredicate(compilerLeafClasses: java.lang.Class<any>[]): java.util.function.Predicate<ci.meta.ResolvedJavaType>;
            getIntrinsificationTrustPredicate(...compilerLeafClasses: java.lang.Class<any>[]): java.util.function.Predicate<ci.meta.ResolvedJavaType>;
            getJObjectValue(peerObject: HotSpotObjectConstant): long;
            getJVMCIBackend<T>(arch: java.lang.Class<T>): ci.runtime.JVMCIBackend;
            getJVMCIBackends(): java.util.Map<java.lang.Class<ci.code.Architecture>,ci.runtime.JVMCIBackend>;
            _getJavaLangClass(): HotSpotResolvedObjectTypeImpl;
            _getJavaLangCloneable(): HotSpotResolvedObjectTypeImpl;
            _getJavaLangEnum(): HotSpotResolvedObjectTypeImpl;
            _getJavaLangObject(): HotSpotResolvedObjectTypeImpl;
            _getJavaLangSerializable(): HotSpotResolvedObjectTypeImpl;
            _getJavaLangString(): HotSpotResolvedObjectTypeImpl;
            _getJavaLangThrowable(): HotSpotResolvedObjectTypeImpl;
            getLogStream(): java.io.OutputStream;
            _getMethodHandleClass(): HotSpotResolvedObjectType;
            getMirror(type: ci.meta.ResolvedJavaType): java.lang.Class<any>;
            getMirror(method: ci.meta.ResolvedJavaMethod): java.lang.reflect.Executable;
            getMirror(field: ci.meta.ResolvedJavaField): java.lang.reflect.Field;
            _getReflection(): HotSpotJVMCIReflection;
            getThreadLocalLong(id: int): long;
            getThreadLocalObject(id: int): any;
            _getVmEventListeners(): java.lang.Iterable<HotSpotVMEventListener>;
            isCurrentThreadAttached(): boolean;
            _isGCSupported(gcIdentifier: int): boolean;
            lookupType(name: string, accessingType: HotSpotResolvedObjectType, resolve: boolean): ci.meta.JavaType;
            _lookupTypeInternal(name: string, accessingType: HotSpotResolvedObjectType, resolve: boolean): ci.meta.JavaType;
            _notifyInstall(hotSpotCodeCacheProvider: HotSpotCodeCacheProvider, installedCode: ci.code.InstalledCode, compiledCode: ci.code.CompiledCode): void;
            _registerBackend(backend: ci.runtime.JVMCIBackend): ci.runtime.JVMCIBackend;
            registerNativeMethods(clazz: java.lang.Class<any>): long[];
            setCountersSize(newSize: int): boolean;
            setThreadLocalLong(id: int, value: long): void;
            setThreadLocalObject(id: int, value: any): void;
            _shutdown(): void;
            translate(obj: any): long;
            unhand<T>(type: java.lang.Class<T>, handle: long): T;
            writeDebugOutput(bytes: byte[], offset: int, length: int, flush: boolean, canThrow: boolean): int;
            _backends: java.util.Map<java.lang.Class<ci.code.Architecture>,ci.runtime.JVMCIBackend>;
            _callSiteType: HotSpotResolvedObjectTypeImpl;
            _cloneableType: HotSpotResolvedObjectTypeImpl;
            _compiler: ci.runtime.JVMCICompiler;
            _compilerFactory: ci.runtime.JVMCICompilerFactory;
            _compilerToVm: CompilerToVM;
            _config: HotSpotVMConfig;
            _configStore: HotSpotVMConfigStore;
            _constantCallSiteType: HotSpotResolvedObjectTypeImpl;
            _creatingCompiler: boolean;
            _enumType: HotSpotResolvedObjectTypeImpl;
            _excludeFromJVMCICompilation: java.lang.Module[];
            _hostBackend: ci.runtime.JVMCIBackend;
            _hsCompilerFactory: HotSpotJVMCICompilerFactory;
            _isShutdown: boolean;
            _javaLangClass: HotSpotResolvedObjectTypeImpl;
            _javaLangInvokeMethodHandle: HotSpotResolvedObjectTypeImpl;
            _javaLangObject: HotSpotResolvedObjectTypeImpl;
            _javaLangString: HotSpotResolvedObjectTypeImpl;
            _reflection: HotSpotJVMCIReflection;
            _resolvedJavaType: java.lang.ClassValue<HotSpotJVMCIRuntime$WeakReferenceHolder<HotSpotResolvedJavaType>>;
            _resolvedJavaTypes: java.util.HashMap<long,java.lang.ref.WeakReference<ci.meta.ResolvedJavaType>>;
            _serializableType: HotSpotResolvedObjectTypeImpl;
            _throwableType: HotSpotResolvedObjectTypeImpl;
            _vmEventListeners: java.util.List<HotSpotVMEventListener>;
          }
          interface HotSpotJVMCIRuntime extends CombineTypes<[_HotSpotJVMCIRuntime, java.lang.Object, jdk.vm.ci.runtime.JVMCIRuntime]> {}
          interface _HotSpotJVMCIRuntime$ErrorCreatingCompiler$$static extends ClassLike {
            _new(t: java.lang.RuntimeException): HotSpotJVMCIRuntime$ErrorCreatingCompiler;
          }
          let HotSpotJVMCIRuntime$ErrorCreatingCompiler: _HotSpotJVMCIRuntime$ErrorCreatingCompiler$$static;
          interface _HotSpotJVMCIRuntime$ErrorCreatingCompiler {
            compileMethod(request: ci.code.CompilationRequest): ci.code.CompilationRequestResult;
            isGCSupported(gcIdentifier: int): boolean;
            _t: java.lang.RuntimeException;
          }
          interface HotSpotJVMCIRuntime$ErrorCreatingCompiler extends CombineTypes<[_HotSpotJVMCIRuntime$ErrorCreatingCompiler, jdk.vm.ci.runtime.JVMCICompiler, java.lang.Object]> {}
          interface _HotSpotJVMCIRuntime$Option$$static extends ClassLike {
            _parse(runtime: HotSpotJVMCIRuntime): void;
            printProperties(out: java.io.PrintStream): void;
            _stringSimiliarity(str1: string, str2: string): float;
            valueOf(name: string): HotSpotJVMCIRuntime$Option;
            values(): HotSpotJVMCIRuntime$Option[];
            readonly AuditHandles: HotSpotJVMCIRuntime$Option;
            readonly CodeSerializationTypeInfo: HotSpotJVMCIRuntime$Option;
            readonly Compiler: HotSpotJVMCIRuntime$Option;
            readonly DumpSerializedCode: HotSpotJVMCIRuntime$Option;
            _FUZZY_MATCH_THRESHOLD: float;
            readonly ForceTranslateFailure: HotSpotJVMCIRuntime$Option;
            readonly InitTimer: HotSpotJVMCIRuntime$Option;
            _JVMCI_OPTION_PROPERTY_PREFIX: string;
            _NULL_VALUE: string;
            _PROPERTY_HELP_INDENT: int;
            _PROPERTY_LINE_WIDTH: int;
            readonly PrintConfig: HotSpotJVMCIRuntime$Option;
            readonly TraceMethodDataFilter: HotSpotJVMCIRuntime$Option;
            readonly UseProfilingInformation: HotSpotJVMCIRuntime$Option;
          }
          let HotSpotJVMCIRuntime$Option: _HotSpotJVMCIRuntime$Option$$static;
          interface _HotSpotJVMCIRuntime$Option {
            getBoolean(): boolean;
            getPropertyName(): string;
            getString(): string;
            _getValue(): any;
            _init(propertyValue: string): void;
            _defaultValue: any;
            _helpLines: string[];
            _isDefault: boolean;
            _type: java.lang.Class<any>;
            _value: any;
          }
          interface HotSpotJVMCIRuntime$Option extends CombineTypes<[_HotSpotJVMCIRuntime$Option]> {}
          interface _HotSpotJVMCIRuntime$WeakReferenceHolder$$static<T> extends ClassLike {
            _new(value: T): HotSpotJVMCIRuntime$WeakReferenceHolder<T>;
          }
          let HotSpotJVMCIRuntime$WeakReferenceHolder: _HotSpotJVMCIRuntime$WeakReferenceHolder$$static<T>;
          interface _HotSpotJVMCIRuntime$WeakReferenceHolder<T> {
            _get(): T;
            _set(value: T): void;
            _ref: java.lang.ref.WeakReference<T>;
          }
          interface HotSpotJVMCIRuntime$WeakReferenceHolder<T> extends CombineTypes<[_HotSpotJVMCIRuntime$WeakReferenceHolder<T>, java.lang.Object]> {}
          interface _HotSpotJVMCIUnsupportedOperationError$$static extends ClassLike {
            _serialVersionUID: long;
            new(reason: string): HotSpotJVMCIUnsupportedOperationError;
            new(reason: string, cause: java.lang.Throwable): HotSpotJVMCIUnsupportedOperationError;
          }
          let HotSpotJVMCIUnsupportedOperationError: _HotSpotJVMCIUnsupportedOperationError$$static;
          interface _HotSpotJVMCIUnsupportedOperationError {
          }
          interface HotSpotJVMCIUnsupportedOperationError extends CombineTypes<[_HotSpotJVMCIUnsupportedOperationError, java.lang.Error]> {}
          interface _HotSpotJavaType$$static extends ClassLike {
            new(name: string): HotSpotJavaType;
          }
          let HotSpotJavaType: _HotSpotJavaType$$static;
          interface _HotSpotJavaType {
            getName(): string;
            _name: string;
          }
          interface HotSpotJavaType extends CombineTypes<[_HotSpotJavaType, jdk.vm.ci.meta.JavaType, java.lang.Object]> {}
          interface _HotSpotMemoryAccessProvider$$static extends ClassLike {
          }
          let HotSpotMemoryAccessProvider: _HotSpotMemoryAccessProvider$$static;
          interface _HotSpotMemoryAccessProvider {
            readKlassPointerConstant(a0: ci.meta.Constant, a1: long): ci.meta.Constant;
            readMethodPointerConstant(a0: ci.meta.Constant, a1: long): ci.meta.Constant;
            readNarrowKlassPointerConstant(a0: ci.meta.Constant, a1: long): ci.meta.Constant;
            readNarrowOopConstant(a0: ci.meta.Constant, a1: long): ci.meta.JavaConstant;
          }
          interface HotSpotMemoryAccessProvider extends CombineTypes<[_HotSpotMemoryAccessProvider, jdk.vm.ci.meta.MemoryAccessProvider, java.lang.Object]> {}
          interface _HotSpotMemoryAccessProviderImpl$$static extends ClassLike {
            _asRawPointer(base: ci.meta.Constant): long;
            _new(runtime: HotSpotJVMCIRuntime): HotSpotMemoryAccessProviderImpl;
          }
          let HotSpotMemoryAccessProviderImpl: _HotSpotMemoryAccessProviderImpl$$static;
          interface _HotSpotMemoryAccessProviderImpl {
            _readKlass(base: ci.meta.Constant, displacement: long, a2: boolean): HotSpotResolvedObjectTypeImpl;
            readKlassPointerConstant(base: ci.meta.Constant, displacement: long): ci.meta.Constant;
            readMethodPointerConstant(base: ci.meta.Constant, displacement: long): ci.meta.Constant;
            readNarrowKlassPointerConstant(base: ci.meta.Constant, displacement: long): ci.meta.Constant;
            readNarrowOopConstant(base: ci.meta.Constant, displacement: long): ci.meta.JavaConstant;
            readObjectConstant(base: ci.meta.Constant, displacement: long): ci.meta.JavaConstant;
            readPrimitiveConstant(kind: ci.meta.JavaKind, baseConstant: ci.meta.Constant, initialDisplacement: long, a3: int): ci.meta.JavaConstant;
            _runtime: HotSpotJVMCIRuntime;
          }
          interface HotSpotMemoryAccessProviderImpl extends CombineTypes<[_HotSpotMemoryAccessProviderImpl, java.lang.Object, jdk.vm.ci.hotspot.HotSpotMemoryAccessProvider]> {}
          interface _HotSpotMetaAccessProvider$$static extends ClassLike {
            _intMaskRight(n: int): int;
            new(runtime: HotSpotJVMCIRuntime): HotSpotMetaAccessProvider;
          }
          let HotSpotMetaAccessProvider: _HotSpotMetaAccessProvider$$static;
          interface _HotSpotMetaAccessProvider {
            computeArrayAllocationSize(length: int, headerSize: int, log2ElementSize: int): int;
            convertDeoptAction(action: ci.meta.DeoptimizationAction): int;
            convertDeoptAction(action: int): ci.meta.DeoptimizationAction;
            convertDeoptReason(reason: ci.meta.DeoptimizationReason): int;
            convertDeoptReason(reason: int): ci.meta.DeoptimizationReason;
            decodeDebugId(constant: ci.meta.JavaConstant): int;
            decodeDeoptAction(constant: ci.meta.JavaConstant): ci.meta.DeoptimizationAction;
            decodeDeoptReason(constant: ci.meta.JavaConstant): ci.meta.DeoptimizationReason;
            decodeSpeculation(constant: ci.meta.JavaConstant, speculationLog: ci.meta.SpeculationLog): ci.meta.SpeculationLog$Speculation;
            encodeDeoptActionAndReason(action: ci.meta.DeoptimizationAction, reason: ci.meta.DeoptimizationReason, debugId: int): ci.meta.JavaConstant;
            encodeSpeculation(speculation: ci.meta.SpeculationLog$Speculation): ci.meta.JavaConstant;
            getArrayBaseOffset(kind: ci.meta.JavaKind): int;
            getArrayIndexScale(kind: ci.meta.JavaKind): int;
            getMemorySize(constant: ci.meta.JavaConstant): long;
            lookupJavaField(reflectionField: java.lang.reflect.Field): ci.meta.ResolvedJavaField;
            lookupJavaMethod(reflectionMethod: java.lang.reflect.Executable): ci.meta.ResolvedJavaMethod;
            lookupJavaType(clazz: java.lang.Class<any>): ci.meta.ResolvedJavaType;
            lookupJavaType(constant: ci.meta.JavaConstant): HotSpotResolvedObjectType;
            lookupJavaType(a0: ci.meta.JavaConstant): ci.meta.ResolvedJavaType;
            parseMethodDescriptor(signature: string): ci.meta.Signature;
            _runtime: HotSpotJVMCIRuntime;
          }
          interface HotSpotMetaAccessProvider extends CombineTypes<[_HotSpotMetaAccessProvider, java.lang.Object, jdk.vm.ci.meta.MetaAccessProvider]> {}
          interface _HotSpotMetaspaceConstant$$static extends ClassLike {
          }
          let HotSpotMetaspaceConstant: _HotSpotMetaspaceConstant$$static;
          interface _HotSpotMetaspaceConstant {
            asResolvedJavaMethod(): HotSpotResolvedJavaMethod;
            asResolvedJavaType(): HotSpotResolvedObjectType;
          }
          interface HotSpotMetaspaceConstant extends CombineTypes<[_HotSpotMetaspaceConstant, jdk.vm.ci.hotspot.HotSpotConstant, java.lang.Object, jdk.vm.ci.meta.VMConstant]> {}
          interface _HotSpotMetaspaceConstantImpl$$static extends ClassLike {
            _forMetaspaceObject(metaspaceObject: MetaspaceObject, compressed: boolean): HotSpotMetaspaceConstantImpl;
            _getMetaspaceObject(constant: ci.meta.Constant): MetaspaceObject;
          }
          let HotSpotMetaspaceConstantImpl: _HotSpotMetaspaceConstantImpl$$static;
          interface _HotSpotMetaspaceConstantImpl {
            asResolvedJavaMethod(): HotSpotResolvedJavaMethod;
            asResolvedJavaType(): HotSpotResolvedObjectType;
            compress(): ci.meta.Constant;
            equals(o: any): boolean;
            hashCode(): int;
            isCompressed(): boolean;
            isDefaultForKind(): boolean;
            toString(): string;
            toValueString(): string;
            uncompress(): ci.meta.Constant;
            _compressed: boolean;
            _metaspaceObject: MetaspaceObject;
          }
          interface HotSpotMetaspaceConstantImpl extends CombineTypes<[_HotSpotMetaspaceConstantImpl, java.lang.Object, jdk.vm.ci.hotspot.HotSpotMetaspaceConstant, jdk.vm.ci.meta.VMConstant]> {}
          interface _HotSpotMethod$$static extends ClassLike {
            applyFormattingFlagsAndWidth(s: string, flags: int, width: int): string;
            readonly FULLY_QUALIFIED_METHOD_NAME: boolean;
            _new(): HotSpotMethod;
          }
          let HotSpotMethod: _HotSpotMethod$$static;
          interface _HotSpotMethod {
            formatTo(formatter: java.util.Formatter, flags: int, width: int, precision: int): void;
            toString(): string;
          }
          interface HotSpotMethod extends CombineTypes<[_HotSpotMethod, java.util.Formattable, jdk.vm.ci.meta.JavaMethod, java.lang.Object]> {}
          interface _HotSpotMethodData$$static extends ClassLike {
            getNoDataAccessor(exceptionPossiblyNotRecorded: boolean): HotSpotMethodDataAccessor;
            _new(methodDataPointer: long, a1: HotSpotResolvedJavaMethodImpl): HotSpotMethodData;
          }
          let HotSpotMethodData: _HotSpotMethodData$$static;
          interface _HotSpotMethodData {
            _extraDataSize(): int;
            getCompiledIRSize(): int;
            _getData(position: int): HotSpotMethodDataAccessor;
            getDecompileCount(): int;
            getDeoptimizationCount(reason: ci.meta.DeoptimizationReason): int;
            _getExtraDataBeginOffset(): int;
            getMetaspacePointer(): long;
            getNormalData(position: int): HotSpotMethodDataAccessor;
            getOSRDeoptimizationCount(reason: ci.meta.DeoptimizationReason): int;
            getOverflowRecompileCount(): int;
            getOverflowTrapCount(): int;
            hasExtraData(): boolean;
            hasNormalData(): boolean;
            isProfileMature(): boolean;
            isWithin(position: int): boolean;
            _normalDataSize(): int;
            _readInt(position: int, offsetInBytes: int): int;
            _readKlass(position: int, offsetInBytes: int): HotSpotResolvedObjectTypeImpl;
            _readMethod(position: int, offsetInBytes: int): HotSpotResolvedJavaMethod;
            _readUnsignedByte(position: int, offsetInBytes: int): int;
            _readUnsignedInt(position: int, offsetInBytes: int): long;
            _readUnsignedIntAsSignedInt(position: int, offsetInBytes: int): int;
            _readUnsignedShort(position: int, offsetInBytes: int): int;
            setCompiledIRSize(size: int): void;
            toString(): string;
            _method: HotSpotResolvedJavaMethodImpl;
            _methodDataPointer: long;
            _state: HotSpotMethodData$VMState;
          }
          interface HotSpotMethodData extends CombineTypes<[_HotSpotMethodData, java.lang.Object, jdk.vm.ci.hotspot.MetaspaceObject]> {}
          interface _HotSpotMethodData$AbstractTypeData$$static extends ClassLike {
            _new(state: HotSpotMethodData$VMState, tag: int, staticSize: int): HotSpotMethodData$AbstractTypeData;
          }
          let HotSpotMethodData$AbstractTypeData: _HotSpotMethodData$AbstractTypeData$$static;
          interface _HotSpotMethodData$AbstractTypeData {
            appendTo(sb: HotSpotMethodData$AbstractTypeData$stringBuilder, data: HotSpotMethodData, pos: int): HotSpotMethodData$AbstractTypeData$stringBuilder;
            _createTypeProfile(nullSeen: ci.meta.TriState, profile: HotSpotMethodData$RawItemProfile<ci.meta.ResolvedJavaType>): ci.meta.JavaTypeProfile;
            getNonprofiledCount(data: HotSpotMethodData, position: int): int;
            _getRawTypeProfile(data: HotSpotMethodData, position: int): HotSpotMethodData$RawItemProfile<ci.meta.ResolvedJavaType>;
            _getTypeCountOffset(row: int): int;
            _getTypeOffset(row: int): int;
            getTypeProfile(data: HotSpotMethodData, position: int): ci.meta.JavaTypeProfile;
            _getTypesNotRecordedExecutionCount(a0: HotSpotMethodData, a1: int): long;
(a0: HotSpotMethodData, a1: int): long;
          }
          interface HotSpotMethodData$AbstractTypeData extends CombineTypes<[_HotSpotMethodData$AbstractTypeData, jdk.vm.ci.hotspot.HotSpotMethodData$CounterData]> {}
          interface _HotSpotMethodData$ArgInfoData$$static extends ClassLike {
            _new(state: HotSpotMethodData$VMState, tag: int): HotSpotMethodData$ArgInfoData;
          }
          let HotSpotMethodData$ArgInfoData: _HotSpotMethodData$ArgInfoData$$static;
          interface _HotSpotMethodData$ArgInfoData {
          }
          interface HotSpotMethodData$ArgInfoData extends CombineTypes<[_HotSpotMethodData$ArgInfoData, jdk.vm.ci.hotspot.HotSpotMethodData$ArrayData]> {}
          interface _HotSpotMethodData$ArrayData$$static extends ClassLike {
            _new(state: HotSpotMethodData$VMState, tag: int, staticSize: int): HotSpotMethodData$ArrayData;
          }
          let HotSpotMethodData$ArrayData: _HotSpotMethodData$ArrayData$$static;
          interface _HotSpotMethodData$ArrayData {
            appendTo(sb: HotSpotMethodData$ArrayData$stringBuilder, data: HotSpotMethodData, pos: int): HotSpotMethodData$ArrayData$stringBuilder;
            _getDynamicSize(data: HotSpotMethodData, position: int): int;
            _getLength(data: HotSpotMethodData, position: int): int;
          }
          interface HotSpotMethodData$ArrayData extends CombineTypes<[_HotSpotMethodData$ArrayData, jdk.vm.ci.hotspot.HotSpotMethodDataAccessor]> {}
          interface _HotSpotMethodData$BitData$$static extends ClassLike {
            _new(state: HotSpotMethodData$VMState, tag: int, staticSize: int): HotSpotMethodData$BitData;
          }
          let HotSpotMethodData$BitData: _HotSpotMethodData$BitData$$static;
          interface _HotSpotMethodData$BitData {
            appendTo(sb: HotSpotMethodData$BitData$stringBuilder, data: HotSpotMethodData, pos: int): HotSpotMethodData$BitData$stringBuilder;
            getNullSeen(data: HotSpotMethodData, position: int): ci.meta.TriState;
          }
          interface HotSpotMethodData$BitData extends CombineTypes<[_HotSpotMethodData$BitData, jdk.vm.ci.hotspot.HotSpotMethodDataAccessor]> {}
          interface _HotSpotMethodData$BranchData$$static extends ClassLike {
            _new(state: HotSpotMethodData$VMState, tag: int): HotSpotMethodData$BranchData;
          }
          let HotSpotMethodData$BranchData: _HotSpotMethodData$BranchData$$static;
          interface _HotSpotMethodData$BranchData {
            appendTo(sb: HotSpotMethodData$BranchData$stringBuilder, data: HotSpotMethodData, pos: int): HotSpotMethodData$BranchData$stringBuilder;
            getBranchTakenProbability(data: HotSpotMethodData, position: int): double;
            getExecutionCount(data: HotSpotMethodData, position: int): int;
          }
          interface HotSpotMethodData$BranchData extends CombineTypes<[_HotSpotMethodData$BranchData, jdk.vm.ci.hotspot.HotSpotMethodData$JumpData]> {}
          interface _HotSpotMethodData$CounterData$$static extends ClassLike {
            _new(state: HotSpotMethodData$VMState, tag: int): HotSpotMethodData$CounterData;
            _new(state: HotSpotMethodData$VMState, tag: int, staticSize: int): HotSpotMethodData$CounterData;
          }
          let HotSpotMethodData$CounterData: _HotSpotMethodData$CounterData$$static;
          interface _HotSpotMethodData$CounterData {
            appendTo(sb: HotSpotMethodData$CounterData$stringBuilder, data: HotSpotMethodData, pos: int): HotSpotMethodData$CounterData$stringBuilder;
            _getCounterValue(data: HotSpotMethodData, position: int): int;
            getExecutionCount(data: HotSpotMethodData, position: int): int;
          }
          interface HotSpotMethodData$CounterData extends CombineTypes<[_HotSpotMethodData$CounterData, jdk.vm.ci.hotspot.HotSpotMethodData$BitData]> {}
          interface _HotSpotMethodData$JumpData$$static extends ClassLike {
            _new(state: HotSpotMethodData$VMState, tag: int): HotSpotMethodData$JumpData;
            _new(state: HotSpotMethodData$VMState, tag: int, staticSize: int): HotSpotMethodData$JumpData;
          }
          let HotSpotMethodData$JumpData: _HotSpotMethodData$JumpData$$static;
          interface _HotSpotMethodData$JumpData {
            appendTo(sb: HotSpotMethodData$JumpData$stringBuilder, data: HotSpotMethodData, pos: int): HotSpotMethodData$JumpData$stringBuilder;
            getBranchTakenProbability(data: HotSpotMethodData, position: int): double;
            getExecutionCount(data: HotSpotMethodData, position: int): int;
            getTakenDisplacement(data: HotSpotMethodData, position: int): int;
          }
          interface HotSpotMethodData$JumpData extends CombineTypes<[_HotSpotMethodData$JumpData, jdk.vm.ci.hotspot.HotSpotMethodDataAccessor]> {}
          interface _HotSpotMethodData$MultiBranchData$$static extends ClassLike {
            _new(state: HotSpotMethodData$VMState, tag: int): HotSpotMethodData$MultiBranchData;
          }
          let HotSpotMethodData$MultiBranchData: _HotSpotMethodData$MultiBranchData$$static;
          interface _HotSpotMethodData$MultiBranchData {
            appendTo(sb: HotSpotMethodData$MultiBranchData$stringBuilder, data: HotSpotMethodData, pos: int): HotSpotMethodData$MultiBranchData$stringBuilder;
            _getCountOffset(index: int): int;
            _getDisplacementOffset(index: int): int;
            getExecutionCount(data: HotSpotMethodData, position: int): int;
            getSwitchProbabilities(data: HotSpotMethodData, position: int): double[];
            _readCount(data: HotSpotMethodData, position: int, i: int): long;
          }
          interface HotSpotMethodData$MultiBranchData extends CombineTypes<[_HotSpotMethodData$MultiBranchData, jdk.vm.ci.hotspot.HotSpotMethodData$ArrayData]> {}
          interface _HotSpotMethodData$NoMethodData$$static extends ClassLike {
            _new(state: HotSpotMethodData$VMState, tag: int, exceptionSeen: ci.meta.TriState): HotSpotMethodData$NoMethodData;
          }
          let HotSpotMethodData$NoMethodData: _HotSpotMethodData$NoMethodData$$static;
          interface _HotSpotMethodData$NoMethodData {
            appendTo(sb: HotSpotMethodData$NoMethodData$stringBuilder, data: HotSpotMethodData, pos: int): HotSpotMethodData$NoMethodData$stringBuilder;
            getBCI(data: HotSpotMethodData, position: int): int;
            getExceptionSeen(data: HotSpotMethodData, position: int): ci.meta.TriState;
            _exceptionSeen: ci.meta.TriState;
          }
          interface HotSpotMethodData$NoMethodData extends CombineTypes<[_HotSpotMethodData$NoMethodData, jdk.vm.ci.hotspot.HotSpotMethodDataAccessor]> {}
          interface _HotSpotMethodData$RawItemProfile$$static<T> extends ClassLike {
            _new(entries: int, items: T[], counts: long[], totalCount: long): HotSpotMethodData$RawItemProfile<T>;
          }
          let HotSpotMethodData$RawItemProfile: _HotSpotMethodData$RawItemProfile$$static<T>;
          interface _HotSpotMethodData$RawItemProfile<T> {
            _counts: long[];
            _entries: int;
            _items: T[];
            _totalCount: long;
          }
          interface HotSpotMethodData$RawItemProfile<T> extends CombineTypes<[_HotSpotMethodData$RawItemProfile<T>, java.lang.Object]> {}
          interface _HotSpotMethodData$ReceiverTypeData$$static extends ClassLike {
            _new(state: HotSpotMethodData$VMState, tag: int): HotSpotMethodData$ReceiverTypeData;
            _new(state: HotSpotMethodData$VMState, tag: int, staticSize: int): HotSpotMethodData$ReceiverTypeData;
          }
          let HotSpotMethodData$ReceiverTypeData: _HotSpotMethodData$ReceiverTypeData$$static;
          interface _HotSpotMethodData$ReceiverTypeData {
            getExecutionCount(data: HotSpotMethodData, position: int): int;
            _getTypesNotRecordedExecutionCount(data: HotSpotMethodData, position: int): long;
          }
          interface HotSpotMethodData$ReceiverTypeData extends CombineTypes<[_HotSpotMethodData$ReceiverTypeData, jdk.vm.ci.hotspot.HotSpotMethodData$AbstractTypeData]> {}
          interface _HotSpotMethodData$RetData$$static extends ClassLike {
            _new(state: HotSpotMethodData$VMState, tag: int): HotSpotMethodData$RetData;
          }
          let HotSpotMethodData$RetData: _HotSpotMethodData$RetData$$static;
          interface _HotSpotMethodData$RetData {
          }
          interface HotSpotMethodData$RetData extends CombineTypes<[_HotSpotMethodData$RetData, jdk.vm.ci.hotspot.HotSpotMethodData$CounterData]> {}
          interface _HotSpotMethodData$UnknownProfileData$$static extends ClassLike {
            _new(state: HotSpotMethodData$VMState, tag: int): HotSpotMethodData$UnknownProfileData;
          }
          let HotSpotMethodData$UnknownProfileData: _HotSpotMethodData$UnknownProfileData$$static;
          interface _HotSpotMethodData$UnknownProfileData {
            appendTo(sb: HotSpotMethodData$UnknownProfileData$stringBuilder, data: HotSpotMethodData, pos: int): HotSpotMethodData$UnknownProfileData$stringBuilder;
            _getDynamicSize(data: HotSpotMethodData, position: int): int;
          }
          interface HotSpotMethodData$UnknownProfileData extends CombineTypes<[_HotSpotMethodData$UnknownProfileData, jdk.vm.ci.hotspot.HotSpotMethodDataAccessor]> {}
          interface _HotSpotMethodData$VMState$$static extends ClassLike {
            _instance(): HotSpotMethodData$VMState;
            _truncateLongToInt(value: long): int;
            _instance: HotSpotMethodData$VMState;
          }
          let HotSpotMethodData$VMState: _HotSpotMethodData$VMState$$static;
          interface _HotSpotMethodData$VMState {
            _cellIndexToOffset(cells: int): int;
            _cellsToBytes(cells: int): int;
            _checkAccessorTags(): boolean;
            _computeFullOffset(position: int, offsetInBytes: int): int;
            _argInfoDataSize: int;
            _arrayDataLengthOffset: int;
            _arrayDataStartOffset: int;
            _bitDataNullSeenFlag: int;
            _bitDataSize: int;
            _branchDataSize: int;
            _config: HotSpotVMConfig;
            _counterDataCountOffset: int;
            _counterDataSize: int;
            _jumpDataSize: int;
            _multiBranchDataFirstCountOffset: int;
            _multiBranchDataFirstDisplacementOffset: int;
            _multiBranchDataRowSize: int;
            _multiBranchDataRowSizeInCells: int;
            _multiBranchDataSize: int;
            _noDataExceptionPossiblyNotRecordedAccessor: HotSpotMethodDataAccessor;
            _noDataNoExceptionAccessor: HotSpotMethodDataAccessor;
            _noDataSize: int;
            _nonprofiledCountOffset: int;
            _notTakenCountOffset: int;
            _profileDataAccessors: HotSpotMethodDataAccessor[];
            _retDataRowSize: int;
            _retDataSize: int;
            _takenCountOffset: int;
            _takenDisplacementOffset: int;
            _typeCheckDataSize: int;
            _typeDataFirstTypeCountOffset: int;
            _typeDataFirstTypeOffset: int;
            _typeDataRowSize: int;
            _virtualCallDataFirstMethodCountOffset: int;
            _virtualCallDataFirstMethodOffset: int;
            _virtualCallDataSize: int;
          }
          interface HotSpotMethodData$VMState extends CombineTypes<[_HotSpotMethodData$VMState, java.lang.Object]> {}
          interface _HotSpotMethodData$VirtualCallData$$static extends ClassLike {
            _new(state: HotSpotMethodData$VMState, tag: int): HotSpotMethodData$VirtualCallData;
            _new(state: HotSpotMethodData$VMState, tag: int, staticSize: int): HotSpotMethodData$VirtualCallData;
          }
          let HotSpotMethodData$VirtualCallData: _HotSpotMethodData$VirtualCallData$$static;
          interface _HotSpotMethodData$VirtualCallData {
            appendTo(sb: HotSpotMethodData$VirtualCallData$stringBuilder, data: HotSpotMethodData, pos: int): HotSpotMethodData$VirtualCallData$stringBuilder;
            _createMethodProfile(profile: HotSpotMethodData$RawItemProfile<ci.meta.ResolvedJavaMethod>): ci.meta.JavaMethodProfile;
            getExecutionCount(data: HotSpotMethodData, position: int): int;
            _getMethodCountOffset(row: int): int;
            _getMethodOffset(row: int): int;
            getMethodProfile(data: HotSpotMethodData, position: int): ci.meta.JavaMethodProfile;
            _getMethodsNotRecordedExecutionCount(data: HotSpotMethodData, position: int): long;
            _getRawMethodProfile(data: HotSpotMethodData, position: int): HotSpotMethodData$RawItemProfile<ci.meta.ResolvedJavaMethod>;
            _getTypesNotRecordedExecutionCount(data: HotSpotMethodData, position: int): long;
          }
          interface HotSpotMethodData$VirtualCallData extends CombineTypes<[_HotSpotMethodData$VirtualCallData, jdk.vm.ci.hotspot.HotSpotMethodData$ReceiverTypeData]> {}
          interface _HotSpotMethodData$VirtualCallTypeData$$static extends ClassLike {
            _new(state: HotSpotMethodData$VMState, tag: int): HotSpotMethodData$VirtualCallTypeData;
          }
          let HotSpotMethodData$VirtualCallTypeData: _HotSpotMethodData$VirtualCallTypeData$$static;
          interface _HotSpotMethodData$VirtualCallTypeData {
            _getDynamicSize(data: HotSpotMethodData, position: int): int;
          }
          interface HotSpotMethodData$VirtualCallTypeData extends CombineTypes<[_HotSpotMethodData$VirtualCallTypeData, jdk.vm.ci.hotspot.HotSpotMethodData$VirtualCallData]> {}
          interface _HotSpotMethodDataAccessor$$static extends ClassLike {
            _readTag(config: HotSpotVMConfig, data: HotSpotMethodData, position: int): int;
            _new(state: HotSpotMethodData$VMState, tag: int, staticSize: int): HotSpotMethodDataAccessor;
          }
          let HotSpotMethodDataAccessor: _HotSpotMethodDataAccessor$$static;
          interface _HotSpotMethodDataAccessor {
            _appendTo(a0: HotSpotMethodDataAccessor$stringBuilder, a1: HotSpotMethodData, a2: int): HotSpotMethodDataAccessor$stringBuilder;
(a0: HotSpotMethodDataAccessor$stringBuilder, a1: HotSpotMethodData, a2: int): HotSpotMethodDataAccessor$stringBuilder;
            _getBCI(data: HotSpotMethodData, position: int): int;
            _getBranchTakenProbability(data: HotSpotMethodData, position: int): double;
            _getDynamicSize(data: HotSpotMethodData, position: int): int;
            _getExceptionSeen(data: HotSpotMethodData, position: int): ci.meta.TriState;
            _getExecutionCount(data: HotSpotMethodData, position: int): int;
            _getFlags(data: HotSpotMethodData, position: int): int;
            _getMethodProfile(data: HotSpotMethodData, position: int): ci.meta.JavaMethodProfile;
            _getNullSeen(data: HotSpotMethodData, position: int): ci.meta.TriState;
            _getSize(data: HotSpotMethodData, position: int): int;
            _getSwitchProbabilities(data: HotSpotMethodData, position: int): double[];
            _getTag(): int;
            _getTypeProfile(data: HotSpotMethodData, position: int): ci.meta.JavaTypeProfile;
            _config: HotSpotVMConfig;
            _state: HotSpotMethodData$VMState;
            _staticSize: int;
            _tag: int;
          }
          interface HotSpotMethodDataAccessor extends CombineTypes<[_HotSpotMethodDataAccessor, java.lang.Object]> {}
          interface _HotSpotMethodHandleAccessProvider$$static extends ClassLike {
            getMethodHandleIntrinsic(intrinsicId: int): ci.meta.MethodHandleAccessProvider$IntrinsicMethod;
            _getTargetMethod(method: ci.meta.JavaConstant): ci.meta.ResolvedJavaMethod;
            new(constantReflection: ci.meta.ConstantReflectionProvider): HotSpotMethodHandleAccessProvider;
          }
          let HotSpotMethodHandleAccessProvider: _HotSpotMethodHandleAccessProvider$$static;
          interface _HotSpotMethodHandleAccessProvider {
            lookupMethodHandleIntrinsic(method: ci.meta.ResolvedJavaMethod): ci.meta.MethodHandleAccessProvider$IntrinsicMethod;
            resolveInvokeBasicTarget(methodHandle: ci.meta.JavaConstant, forceBytecodeGeneration: boolean): ci.meta.ResolvedJavaMethod;
            resolveLinkToTarget(memberName: ci.meta.JavaConstant): ci.meta.ResolvedJavaMethod;
            _constantReflection: ci.meta.ConstantReflectionProvider;
          }
          interface HotSpotMethodHandleAccessProvider extends CombineTypes<[_HotSpotMethodHandleAccessProvider, jdk.vm.ci.meta.MethodHandleAccessProvider, java.lang.Object]> {}
          interface _HotSpotMethodHandleAccessProvider$Internals$$static extends ClassLike {
            _findFieldInClass(declaringType: ci.meta.ResolvedJavaType, fieldName: string, fieldType: ci.meta.ResolvedJavaType): ci.meta.ResolvedJavaField;
            _instance(): HotSpotMethodHandleAccessProvider$Internals;
            _resolveType(className: string): ci.meta.ResolvedJavaType;
            _instance: HotSpotMethodHandleAccessProvider$Internals;
          }
          let HotSpotMethodHandleAccessProvider$Internals: _HotSpotMethodHandleAccessProvider$Internals$$static;
          interface _HotSpotMethodHandleAccessProvider$Internals {
            _callSiteTargetField: HotSpotResolvedJavaField;
            _constantCallSiteFrozenField: HotSpotResolvedJavaField;
            _lambdaFormType: ci.meta.ResolvedJavaType;
            _lambdaFormVmentryField: ci.meta.ResolvedJavaField;
            _methodField: ci.meta.ResolvedJavaField;
            _methodHandleFormField: ci.meta.ResolvedJavaField;
            _vmtargetField: HotSpotResolvedJavaField;
          }
          interface HotSpotMethodHandleAccessProvider$Internals extends CombineTypes<[_HotSpotMethodHandleAccessProvider$Internals, java.lang.Object]> {}
          interface _HotSpotModifiers$$static extends ClassLike {
            jvmClassModifiers(): int;
            jvmFieldModifiers(): int;
            jvmMethodModifiers(): int;
            readonly ANNOTATION: int;
            readonly BRIDGE: int;
            readonly ENUM: int;
            readonly SYNTHETIC: int;
            readonly VARARGS: int;
            new(): HotSpotModifiers;
          }
          let HotSpotModifiers: _HotSpotModifiers$$static;
          interface _HotSpotModifiers {
          }
          interface HotSpotModifiers extends CombineTypes<[_HotSpotModifiers, java.lang.Object]> {}
          interface _HotSpotNmethod$$static extends ClassLike {
            _new(method: HotSpotResolvedJavaMethodImpl, name: string, isDefault: boolean, compileId: long): HotSpotNmethod;
          }
          let HotSpotNmethod: _HotSpotNmethod$$static;
          interface _HotSpotNmethod {
            _checkArgs(args: any[]): boolean;
            _checkArgs(...args: any[]): boolean;
            executeVarargs(args: any[]): any;
            executeVarargs(...args: any[]): any;
            getAddress(): long;
            getEntryPoint(): long;
            getMethod(): ci.meta.ResolvedJavaMethod;
            getStart(): long;
            _inOopsTable(): boolean;
            invalidate(deoptimize: boolean): void;
            isDefault(): boolean;
            isValid(): boolean;
            setSpeculationLog(log: HotSpotSpeculationLog): void;
            toString(): string;
            _compileIdSnapshot: long;
            _isDefault: boolean;
            _method: HotSpotResolvedJavaMethodImpl;
            _speculationLog: HotSpotSpeculationLog;
          }
          interface HotSpotNmethod extends CombineTypes<[_HotSpotNmethod, jdk.vm.ci.hotspot.HotSpotInstalledCode]> {}
          interface _HotSpotObjectConstant$$static extends ClassLike {
          }
          let HotSpotObjectConstant: _HotSpotObjectConstant$$static;
          interface _HotSpotObjectConstant {
            asObject<T>(a0: java.lang.Class<T>): T;
            asObject(a0: ci.meta.ResolvedJavaType): any;
            compress(): ci.meta.JavaConstant;
            compress(): ci.meta.Constant;
            getCallSiteTarget(a0: ci.meta.Assumptions): ci.meta.JavaConstant;
            getIdentityHashCode(): int;
            getType(): HotSpotResolvedObjectType;
            isInternedString(): boolean;
            toValueString(): string;
            uncompress(): ci.meta.JavaConstant;
            uncompress(): ci.meta.Constant;
          }
          interface HotSpotObjectConstant extends CombineTypes<[_HotSpotObjectConstant, jdk.vm.ci.meta.JavaConstant, jdk.vm.ci.hotspot.HotSpotConstant, java.lang.Object, jdk.vm.ci.meta.VMConstant]> {}
          interface _HotSpotObjectConstantImpl$$static extends ClassLike {
            _new(compressed: boolean): HotSpotObjectConstantImpl;
          }
          let HotSpotObjectConstantImpl: _HotSpotObjectConstantImpl$$static;
          interface _HotSpotObjectConstantImpl {
            asBoolean(): boolean;
            asBoxedPrimitive(): any;
            asDouble(): double;
            asFloat(): float;
            asInt(): int;
            asJavaType(): ci.meta.ResolvedJavaType;
            asLong(): long;
            asObject<T>(type: java.lang.Class<T>): T;
            asObject(type: ci.meta.ResolvedJavaType): any;
            compress(): ci.meta.JavaConstant;
            compress(): ci.meta.Constant;
            equals(o: any): boolean;
            getCallSiteTarget(assumptions: ci.meta.Assumptions): ci.meta.JavaConstant;
            getIdentityHashCode(): int;
            getJavaKind(): ci.meta.JavaKind;
            getType(): HotSpotResolvedObjectType;
            hashCode(): int;
            isCompressed(): boolean;
            isDefaultForKind(): boolean;
            _isFullyInitializedConstantCallSite(): boolean;
            isInternedString(): boolean;
            isNull(): boolean;
            readFieldValue(field: HotSpotResolvedJavaField): ci.meta.JavaConstant;
            _readTarget(): HotSpotObjectConstantImpl;
            toString(): string;
            toValueString(): string;
            uncompress(): ci.meta.JavaConstant;
            uncompress(): ci.meta.Constant;
            _compressed: boolean;
          }
          interface HotSpotObjectConstantImpl extends CombineTypes<[_HotSpotObjectConstantImpl, java.lang.Object, jdk.vm.ci.hotspot.HotSpotObjectConstant]> {}
          interface _HotSpotObjectConstantScope$$static extends ClassLike {
            enterGlobalScope(): HotSpotObjectConstantScope;
            openLocalScope(description: any): HotSpotObjectConstantScope;
            _CURRENT: java.lang.ThreadLocal<HotSpotObjectConstantScope>;
          }
          let HotSpotObjectConstantScope: _HotSpotObjectConstantScope$$static;
          interface _HotSpotObjectConstantScope {
            _add(obj: IndirectHotSpotObjectConstantImpl): void;
            close(): void;
            _isGlobal(): boolean;
            _foreignObjects: java.util.List<IndirectHotSpotObjectConstantImpl>;
            _localScopeDescription: any;
            _parent: HotSpotObjectConstantScope;
          }
          interface HotSpotObjectConstantScope extends CombineTypes<[_HotSpotObjectConstantScope, java.lang.Object, java.lang.AutoCloseable]> {}
          interface _HotSpotProfilingInfo$$static extends ClassLike {
            _supportedCompilerIRType: java.lang.Class<any>;
            _new(methodData: HotSpotMethodData, method: HotSpotResolvedJavaMethod, includeNormal: boolean, includeOSR: boolean): HotSpotProfilingInfo;
          }
          let HotSpotProfilingInfo: _HotSpotProfilingInfo$$static;
          interface _HotSpotProfilingInfo {
            _findBCI(targetBCI: int): boolean;
            getBranchTakenProbability(bci: int): double;
            getCodeSize(): int;
            getCompilerIRSize(irType: java.lang.Class<any>): int;
            getDecompileCount(): int;
            getDeoptimizationCount(reason: ci.meta.DeoptimizationReason): int;
            getExceptionSeen(bci: int): ci.meta.TriState;
            getExecutionCount(bci: int): int;
            getMethodProfile(bci: int): ci.meta.JavaMethodProfile;
            getNullSeen(bci: int): ci.meta.TriState;
            getOverflowRecompileCount(): int;
            getOverflowTrapCount(): int;
            getSwitchProbabilities(bci: int): double[];
            getTypeProfile(bci: int): ci.meta.JavaTypeProfile;
            ignoreMature(): void;
            isMature(): boolean;
            _noDataFound(exceptionPossiblyNotRecorded: boolean): void;
            _normalDataFound(data: HotSpotMethodDataAccessor, pos: int, bci: int): void;
            setCompilerIRSize(irType: java.lang.Class<any>, size: int): boolean;
            _setCurrentData(dataAccessor: HotSpotMethodDataAccessor, position: int): void;
            setMature(): void;
            toString(): string;
            _dataAccessor: HotSpotMethodDataAccessor;
            _hintBCI: int;
            _hintPosition: int;
            _includeNormal: boolean;
            _includeOSR: boolean;
            _isMature: boolean;
            _method: HotSpotResolvedJavaMethod;
            _methodData: HotSpotMethodData;
            _position: int;
          }
          interface HotSpotProfilingInfo extends CombineTypes<[_HotSpotProfilingInfo, java.lang.Object, jdk.vm.ci.meta.ProfilingInfo]> {}
          interface _HotSpotReferenceMap$$static extends ClassLike {
            new(objects: ci.code.Location[], derivedBase: ci.code.Location[], sizeInBytes: int[], maxRegisterSize: int): HotSpotReferenceMap;
          }
          let HotSpotReferenceMap: _HotSpotReferenceMap$$static;
          interface _HotSpotReferenceMap {
            equals(obj: any): boolean;
            hashCode(): int;
            toString(): string;
            _derivedBase: ci.code.Location[];
            _maxRegisterSize: int;
            _objects: ci.code.Location[];
            _sizeInBytes: int[];
          }
          interface HotSpotReferenceMap extends CombineTypes<[_HotSpotReferenceMap, jdk.vm.ci.code.ReferenceMap]> {}
          interface _HotSpotResolvedJavaField$$static extends ClassLike {
          }
          let HotSpotResolvedJavaField: _HotSpotResolvedJavaField$$static;
          interface _HotSpotResolvedJavaField {
            isInObject(a0: ci.meta.JavaConstant): boolean;
            isStable(): boolean;
          }
          interface HotSpotResolvedJavaField extends CombineTypes<[_HotSpotResolvedJavaField, java.lang.Object, jdk.vm.ci.meta.ResolvedJavaField]> {}
          interface _HotSpotResolvedJavaFieldImpl$$static extends ClassLike {
            _new(holder: HotSpotResolvedObjectTypeImpl, type: ci.meta.JavaType, offset: int, classfileFlags: int, internalFlags: int, index: int): HotSpotResolvedJavaFieldImpl;
          }
          let HotSpotResolvedJavaFieldImpl: _HotSpotResolvedJavaFieldImpl$$static;
          interface _HotSpotResolvedJavaFieldImpl {
            equals(obj: any): boolean;
            getAnnotation<T>(annotationClass: java.lang.Class<T>): T;
            getAnnotationData(annotationType: ci.meta.ResolvedJavaType): ci.meta.AnnotationData;
            getAnnotationData(type1: ci.meta.ResolvedJavaType, type2: ci.meta.ResolvedJavaType, types: ci.meta.ResolvedJavaType[]): java.util.List<ci.meta.AnnotationData>;
            getAnnotationData(type1: ci.meta.ResolvedJavaType, type2: ci.meta.ResolvedJavaType, ...types: ci.meta.ResolvedJavaType[]): java.util.List<ci.meta.AnnotationData>;
            _getAnnotationData0(filter: ci.meta.ResolvedJavaType[]): java.util.List<ci.meta.AnnotationData>;
            _getAnnotationData0(...filter: ci.meta.ResolvedJavaType[]): java.util.List<ci.meta.AnnotationData>;
            getAnnotations(): java.lang.annotation.Annotation[];
            getConstantValue(): ci.meta.JavaConstant;
            getDeclaredAnnotations(): java.lang.annotation.Annotation[];
            getDeclaringClass(): HotSpotResolvedObjectTypeImpl;
            getDeclaringClass(): ci.meta.ResolvedJavaType;
            getDeclaringClass(): ci.meta.JavaType;
            _getIndex(): int;
            getModifiers(): int;
            getName(): string;
            getOffset(): int;
            getType(): ci.meta.JavaType;
            _hasAnnotations(): boolean;
            hashCode(): int;
            isInObject(object: ci.meta.JavaConstant): boolean;
            isInternal(): boolean;
            isStable(): boolean;
            isSynthetic(): boolean;
            toString(): string;
            _classfileFlags: int;
            _holder: HotSpotResolvedObjectTypeImpl;
            _index: int;
            _internalFlags: int;
            _offset: int;
            _type: ci.meta.JavaType;
          }
          interface HotSpotResolvedJavaFieldImpl extends CombineTypes<[_HotSpotResolvedJavaFieldImpl, java.lang.Object, jdk.vm.ci.hotspot.HotSpotResolvedJavaField]> {}
          interface _HotSpotResolvedJavaMethod$$static extends ClassLike {
          }
          let HotSpotResolvedJavaMethod: _HotSpotResolvedJavaMethod$$static;
          interface _HotSpotResolvedJavaMethod {
            allocateCompileId(a0: int): int;
            getDeclaringClass(): HotSpotResolvedObjectType;
            getDeclaringClass(): ci.meta.ResolvedJavaType;
            getDeclaringClass(): ci.meta.JavaType;
            hasCodeAtLevel(a0: int, a1: int): boolean;
            hasCompiledCode(): boolean;
            hasCompiledCodeAtLevel(a0: int): boolean;
            hasReservedStackAccess(): boolean;
            ignoredBySecurityStackWalk(): boolean;
            intrinsicId(): int;
            isCallerSensitive(): boolean;
            isDefault(): boolean;
            isForceInline(): boolean;
            isIntrinsicCandidate(): boolean;
            methodIdnum(): int;
            setNotInlinableOrCompilable(): void;
            uniqueConcreteMethod(a0: HotSpotResolvedObjectType): ci.meta.ResolvedJavaMethod;
            vtableEntryOffset(a0: ci.meta.ResolvedJavaType): int;
          }
          interface HotSpotResolvedJavaMethod extends CombineTypes<[_HotSpotResolvedJavaMethod, java.lang.Object, jdk.vm.ci.meta.ResolvedJavaMethod]> {}
          interface _HotSpotResolvedJavaMethodImpl$$static extends ClassLike {
            _fromMetaspace(metaspaceHandle: long, a1: HotSpotResolvedObjectTypeImpl): HotSpotResolvedJavaMethod;
            _new(holder: HotSpotResolvedObjectTypeImpl, metaspaceHandle: long): HotSpotResolvedJavaMethodImpl;
          }
          let HotSpotResolvedJavaMethodImpl: _HotSpotResolvedJavaMethodImpl$$static;
          interface _HotSpotResolvedJavaMethodImpl {
            allocateCompileId(entryBCI: int): int;
            asStackTraceElement(bci: int): java.lang.StackTraceElement;
            canBeInlined(): boolean;
            canBeStaticallyBound(): boolean;
            equals(obj: any): boolean;
            getAllModifiers(): int;
            getAnnotation<T>(annotationClass: java.lang.Class<T>): T;
            getAnnotationData(type: ci.meta.ResolvedJavaType): ci.meta.AnnotationData;
            getAnnotationData(type1: ci.meta.ResolvedJavaType, type2: ci.meta.ResolvedJavaType, types: ci.meta.ResolvedJavaType[]): java.util.List<ci.meta.AnnotationData>;
            getAnnotationData(type1: ci.meta.ResolvedJavaType, type2: ci.meta.ResolvedJavaType, ...types: ci.meta.ResolvedJavaType[]): java.util.List<ci.meta.AnnotationData>;
            _getAnnotationData0(filter: ci.meta.ResolvedJavaType[]): java.util.List<ci.meta.AnnotationData>;
            _getAnnotationData0(...filter: ci.meta.ResolvedJavaType[]): java.util.List<ci.meta.AnnotationData>;
            getAnnotations(): java.lang.annotation.Annotation[];
            getCode(): byte[];
            getCodeSize(): int;
            _getCompiledCode(): long;
            _getConstMethod(): long;
            _getConstMethodFlags(): int;
            getConstantPool(): ci.meta.ConstantPool;
            getDeclaredAnnotations(): java.lang.annotation.Annotation[];
            getDeclaringClass(): HotSpotResolvedObjectTypeImpl;
            getDeclaringClass(): ci.meta.JavaType;
            getDeclaringClass(): HotSpotResolvedObjectType;
            getDeclaringClass(): ci.meta.ResolvedJavaType;
            getEncoding(): ci.meta.Constant;
            getExceptionHandlers(): ci.meta.ExceptionHandler[];
            _getFlags(): int;
            getGenericParameterTypes(): java.lang.reflect.Type[];
            getLineNumberTable(): ci.meta.LineNumberTable;
            getLocalVariableTable(): ci.meta.LocalVariableTable;
            getMaxLocals(): int;
            getMaxStackSize(): int;
            getMetadataHandle(): long;
            _getMetaspaceMethodConstant(): ci.meta.Constant;
            _getMethodPointer(): long;
            getModifiers(): int;
            getName(): string;
            getParameterAnnotations(): java.lang.annotation.Annotation[][];
            getParameters(): ci.meta.ResolvedJavaMethod$Parameter[];
            getProfilingInfo(includeNormal: boolean, includeOSR: boolean): ci.meta.ProfilingInfo;
            getSignature(): HotSpotSignature;
            getSignature(): ci.meta.Signature;
            getSpeculationLog(): ci.meta.SpeculationLog;
            _getVtableIndex(resolved: HotSpotResolvedObjectTypeImpl): int;
            _getVtableIndex(): int;
            _getVtableIndexForInterfaceMethod(resolved: ci.meta.ResolvedJavaType): int;
            _hasAnnotations(): boolean;
            hasCodeAtLevel(entryBCI: int, level: int): boolean;
            hasCompiledCode(): boolean;
            hasCompiledCodeAtLevel(level: int): boolean;
            hasNeverInlineDirective(): boolean;
            hasReservedStackAccess(): boolean;
            hashCode(): int;
            ignoredBySecurityStackWalk(): boolean;
            intrinsicId(): int;
            isBridge(): boolean;
            isCallerSensitive(): boolean;
            isClassInitializer(): boolean;
            isConstructor(): boolean;
            isDefault(): boolean;
            isForceInline(): boolean;
            isInVirtualMethodTable(resolved: ci.meta.ResolvedJavaType): boolean;
            isIntrinsicCandidate(): boolean;
            isSynthetic(): boolean;
            isVarArgs(): boolean;
            methodIdnum(): int;
            reprofile(): void;
            setNotInlinableOrCompilable(): void;
            shouldBeInlined(): boolean;
            uniqueConcreteMethod(receiver: HotSpotResolvedObjectType): ci.meta.ResolvedJavaMethod;
            vtableEntryOffset(resolved: ci.meta.ResolvedJavaType): int;
            _code: byte[];
            _constantPool: HotSpotConstantPool;
            _holder: HotSpotResolvedObjectTypeImpl;
            _methodData: HotSpotMethodData;
            _methodHandle: long;
            _nameCache: string;
            _signature: HotSpotSignature;
            _toJavaCache: java.lang.reflect.Executable;
          }
          interface HotSpotResolvedJavaMethodImpl extends CombineTypes<[_HotSpotResolvedJavaMethodImpl, jdk.vm.ci.hotspot.HotSpotResolvedJavaMethod, jdk.vm.ci.hotspot.MetaspaceHandleObject, jdk.vm.ci.hotspot.HotSpotMethod]> {}
          interface _HotSpotResolvedJavaType$$static extends ClassLike {
            _new(name: string): HotSpotResolvedJavaType;
          }
          let HotSpotResolvedJavaType: _HotSpotResolvedJavaType$$static;
          interface _HotSpotResolvedJavaType {
            equals(a0: any): boolean;
            getArrayClass(): HotSpotResolvedObjectType;
            getArrayClass(): ci.meta.JavaType;
            getArrayClass(): ci.meta.ResolvedJavaType;
            _getArrayType(): HotSpotResolvedObjectTypeImpl;
            _getJavaMirror(): ci.meta.JavaConstant;
            hashCode(): int;
            _isBeingInitialized(): boolean;
            _arrayOfType: HotSpotResolvedObjectTypeImpl;
          }
          interface HotSpotResolvedJavaType extends CombineTypes<[_HotSpotResolvedJavaType, jdk.vm.ci.meta.ResolvedJavaType, jdk.vm.ci.hotspot.HotSpotJavaType]> {}
          interface _HotSpotResolvedObjectType$$static extends ClassLike {
          }
          let HotSpotResolvedObjectType: _HotSpotResolvedObjectType$$static;
          interface _HotSpotResolvedObjectType {
            findLeafConcreteSubtype(): ci.meta.Assumptions$AssumptionResult<ci.meta.ResolvedJavaType>;
            findLeastCommonAncestor(a0: ci.meta.ResolvedJavaType): HotSpotResolvedObjectType;
            findLeastCommonAncestor(a0: ci.meta.ResolvedJavaType): ci.meta.ResolvedJavaType;
            findUniqueConcreteMethod(a0: ci.meta.ResolvedJavaMethod): ci.meta.Assumptions$AssumptionResult<ci.meta.ResolvedJavaMethod>;
            getArrayClass(): HotSpotResolvedObjectType;
            getArrayClass(): ci.meta.ResolvedJavaType;
            getArrayClass(): ci.meta.JavaType;
            getClassInitializer(): ci.meta.ResolvedJavaMethod;
            getComponentType(): ci.meta.ResolvedJavaType;
            getComponentType(): ci.meta.JavaType;
            getConstantPool(): ci.meta.ConstantPool;
            getEnclosingType(): HotSpotResolvedObjectType;
            getEnclosingType(): ci.meta.ResolvedJavaType;
            getInterfaces(): HotSpotResolvedObjectType[];
            getInterfaces(): ci.meta.ResolvedJavaType[];
            getJavaKind(): ci.meta.JavaKind;
            getSuperclass(): HotSpotResolvedObjectType;
            getSuperclass(): ci.meta.ResolvedJavaType;
            getSupertype(): HotSpotResolvedObjectType;
            getVtableLength(): int;
            instanceSize(): int;
            isDefinitelyResolvedWithRespectTo(a0: ci.meta.ResolvedJavaType): boolean;
            isPrimaryType(): boolean;
            isPrimitive(): boolean;
            klass(): ci.meta.Constant;
            layoutHelper(): int;
            prototypeMarkWord(): long;
            superCheckOffset(): int;
          }
          interface HotSpotResolvedObjectType extends CombineTypes<[_HotSpotResolvedObjectType, jdk.vm.ci.meta.ResolvedJavaType, java.lang.Object]> {}
          interface _HotSpotResolvedObjectTypeImpl$$static extends ClassLike {
            _findFieldWithOffset(offset: long, a1: ci.meta.JavaKind, expectedEntryKind: ci.meta.ResolvedJavaField[]): ci.meta.ResolvedJavaField;
            _fromMetaspace(klassPointer: long): HotSpotResolvedObjectTypeImpl;
            _getJavaLangObject(): HotSpotResolvedObjectTypeImpl;
            _METHOD_CACHE_ARRAY_CAPACITY: int;
            _NO_ANNOTATIONS: java.lang.annotation.Annotation[];
            _NO_FIELDS: HotSpotResolvedJavaField[];
            _fieldSortingMethod: HotSpotResolvedObjectTypeImpl$SortByOffset;
            _new(klass: long, a1: string): HotSpotResolvedObjectTypeImpl;
          }
          let HotSpotResolvedObjectTypeImpl: _HotSpotResolvedObjectTypeImpl$$static;
          interface _HotSpotResolvedObjectTypeImpl {
            _concreteSubtype(type: HotSpotResolvedObjectTypeImpl): ci.meta.Assumptions$AssumptionResult<ci.meta.ResolvedJavaType>;
            _createField(type: ci.meta.JavaType, offset: int, classfileFlags: int, internalFlags: int, index: int): HotSpotResolvedJavaField;
            _createMethod(metaspaceHandle: long): HotSpotResolvedJavaMethod;
            declaresDefaultMethods(): boolean;
            ensureInitialized(): void;
            equals(obj: any): boolean;
            findInstanceFieldWithOffset(offset: long, a1: ci.meta.JavaKind): ci.meta.ResolvedJavaField;
            findLeafConcreteSubtype(): ci.meta.Assumptions$AssumptionResult<ci.meta.ResolvedJavaType>;
            findLeastCommonAncestor(otherType: ci.meta.ResolvedJavaType): HotSpotResolvedObjectType;
            findLeastCommonAncestor(a0: ci.meta.ResolvedJavaType): ci.meta.ResolvedJavaType;
            findStaticFieldWithOffset(offset: long, a1: ci.meta.JavaKind): ci.meta.ResolvedJavaField;
            findUniqueConcreteMethod(method: ci.meta.ResolvedJavaMethod): ci.meta.Assumptions$AssumptionResult<ci.meta.ResolvedJavaMethod>;
            getAccessFlags(): int;
            getAnnotation<T>(annotationClass: java.lang.Class<T>): T;
            getAnnotationData(annotationType: ci.meta.ResolvedJavaType): ci.meta.AnnotationData;
            getAnnotationData(type1: ci.meta.ResolvedJavaType, type2: ci.meta.ResolvedJavaType, types: ci.meta.ResolvedJavaType[]): java.util.List<ci.meta.AnnotationData>;
            getAnnotationData(type1: ci.meta.ResolvedJavaType, type2: ci.meta.ResolvedJavaType, ...types: ci.meta.ResolvedJavaType[]): java.util.List<ci.meta.AnnotationData>;
            _getAnnotationData0(filter: ci.meta.ResolvedJavaType[]): java.util.List<ci.meta.AnnotationData>;
            _getAnnotationData0(...filter: ci.meta.ResolvedJavaType[]): java.util.List<ci.meta.AnnotationData>;
            getAnnotations(): java.lang.annotation.Annotation[];
            _getArrayType(): HotSpotResolvedObjectTypeImpl;
            getClassInitializer(): ci.meta.ResolvedJavaMethod;
            getComponentType(): ci.meta.ResolvedJavaType;
            getComponentType(): ci.meta.JavaType;
            getConstantPool(): HotSpotConstantPool;
            getConstantPool(): ci.meta.ConstantPool;
            getDeclaredAnnotations(): java.lang.annotation.Annotation[];
            getDeclaredConstructors(): ci.meta.ResolvedJavaMethod[];
            getDeclaredConstructors(forceLink: boolean): ci.meta.ResolvedJavaMethod[];
            getDeclaredMethods(): ci.meta.ResolvedJavaMethod[];
            getDeclaredMethods(forceLink: boolean): ci.meta.ResolvedJavaMethod[];
            getEnclosingType(): HotSpotResolvedObjectType;
            getEnclosingType(): ci.meta.ResolvedJavaType;
            _getFieldInfo(): HotSpotResolvedObjectTypeImpl$FieldInfo[];
            _getFieldInfo(index: int): HotSpotResolvedObjectTypeImpl$FieldInfo;
            _getFields(retrieveStaticFields: boolean, prepend: HotSpotResolvedJavaField[]): HotSpotResolvedJavaField[];
            _getInitState(): int;
            getInstanceFields(includeSuperclasses: boolean): ci.meta.ResolvedJavaField[];
            getInterfaces(): HotSpotResolvedObjectTypeImpl[];
            getInterfaces(): ci.meta.ResolvedJavaType[];
            getInterfaces(): HotSpotResolvedObjectType[];
            getJavaKind(): ci.meta.JavaKind;
            _getJavaMirror(): ci.meta.JavaConstant;
            _getKlassPointer(): long;
            getMetaspacePointer(): long;
            getModifiers(): int;
            getSingleImplementor(): HotSpotResolvedObjectTypeImpl;
            getSingleImplementor(): ci.meta.ResolvedJavaType;
            getSourceFileName(): string;
            getStaticFields(): ci.meta.ResolvedJavaField[];
            _getSubklass(): HotSpotResolvedObjectTypeImpl;
            getSuperclass(): HotSpotResolvedObjectTypeImpl;
            getSuperclass(): ci.meta.ResolvedJavaType;
            getSuperclass(): HotSpotResolvedObjectType;
            getSupertype(): HotSpotResolvedObjectTypeImpl;
            getSupertype(): HotSpotResolvedObjectType;
            getVtableLength(): int;
            hasDefaultMethods(): boolean;
            hasFinalizableSubclass(): ci.meta.Assumptions$AssumptionResult<boolean>;
            hasFinalizer(): boolean;
            _hasSameClassLoader(otherMirror: HotSpotResolvedObjectTypeImpl): boolean;
            initialize(): void;
            instanceSize(): int;
            isArray(): boolean;
            isAssignableFrom(other: ci.meta.ResolvedJavaType): boolean;
            isBeingInitialized(): boolean;
            isCloneableWithAllocation(): boolean;
            isDefinitelyResolvedWithRespectTo(accessingClass: ci.meta.ResolvedJavaType): boolean;
            isEnum(): boolean;
            isInitialized(): boolean;
            isInstance(obj: ci.meta.JavaConstant): boolean;
            isInstanceClass(): boolean;
            isInterface(): boolean;
            isJavaLangObject(): boolean;
            _isLeafClass(): boolean;
            isLinked(): boolean;
            isLocal(): boolean;
            isMember(): boolean;
            isPrimaryType(): boolean;
            klass(): ci.meta.Constant;
            layoutHelper(): int;
            link(): void;
            lookupType(unresolvedJavaType: ci.meta.UnresolvedJavaType, resolve: boolean): ci.meta.ResolvedJavaType;
            _mayHaveAnnotations(includingInherited: boolean): boolean;
            prototypeMarkWord(): long;
            resolve(accessingClass: ci.meta.ResolvedJavaType): ci.meta.ResolvedJavaType;
            resolveField(unresolvedJavaField: ci.meta.UnresolvedJavaField, accessingClass: ci.meta.ResolvedJavaType): ci.meta.ResolvedJavaField;
            resolveMethod(method: ci.meta.ResolvedJavaMethod, callerType: ci.meta.ResolvedJavaType): ci.meta.ResolvedJavaMethod;
            superCheckOffset(): int;
            toString(): string;
            _componentType: HotSpotResolvedJavaType;
            _constantPool: HotSpotConstantPool;
            _fieldInfo: HotSpotResolvedObjectTypeImpl$FieldInfo[];
            _instanceFields: HotSpotResolvedJavaField[];
            _interfaces: HotSpotResolvedObjectTypeImpl[];
            _klassPointer: long;
            _methodCacheArray: HotSpotResolvedJavaMethodImpl[];
            _methodCacheHashMap: java.util.HashMap<long,HotSpotResolvedJavaMethodImpl>;
            _mirror: ci.meta.JavaConstant;
            _reflectionFieldCache: java.util.HashMap<HotSpotResolvedJavaFieldImpl,java.lang.reflect.Field>;
            _superClass: HotSpotResolvedObjectTypeImpl;
          }
          interface HotSpotResolvedObjectTypeImpl extends CombineTypes<[_HotSpotResolvedObjectTypeImpl, jdk.vm.ci.hotspot.HotSpotResolvedObjectType, jdk.vm.ci.hotspot.MetaspaceObject, jdk.vm.ci.hotspot.HotSpotResolvedJavaType]> {}
          interface _HotSpotResolvedObjectTypeImpl$FieldInfo$$static extends ClassLike {
            _new(nameIndex: int, signatureIndex: int, offset: int, classfileFlags: int, internalFlags: int, initializerIndex: int): HotSpotResolvedObjectTypeImpl$FieldInfo;
          }
          let HotSpotResolvedObjectTypeImpl$FieldInfo: _HotSpotResolvedObjectTypeImpl$FieldInfo$$static;
          interface _HotSpotResolvedObjectTypeImpl$FieldInfo {
            _getClassfileFlags(): int;
            getConstantValue(klass: HotSpotResolvedObjectTypeImpl): ci.meta.JavaConstant;
            _getConstantValueIndex(): int;
            _getInternalFlags(): int;
            getName(klass: HotSpotResolvedObjectTypeImpl): string;
            _getNameIndex(): int;
            getOffset(): int;
            getSignature(klass: HotSpotResolvedObjectTypeImpl): string;
            _getSignatureIndex(): int;
            getType(klass: HotSpotResolvedObjectTypeImpl): ci.meta.JavaType;
            _isInternal(): boolean;
            isStatic(): boolean;
            _classfileFlags: int;
            _initializerIndex: int;
            _internalFlags: int;
            _nameIndex: int;
            _offset: int;
            _signatureIndex: int;
          }
          interface HotSpotResolvedObjectTypeImpl$FieldInfo extends CombineTypes<[_HotSpotResolvedObjectTypeImpl$FieldInfo, java.lang.Object]> {}
          interface _HotSpotResolvedObjectTypeImpl$SortByOffset$$static extends ClassLike {
            _new(): HotSpotResolvedObjectTypeImpl$SortByOffset;
          }
          let HotSpotResolvedObjectTypeImpl$SortByOffset: _HotSpotResolvedObjectTypeImpl$SortByOffset$$static;
          interface _HotSpotResolvedObjectTypeImpl$SortByOffset {
            compare(a: ci.meta.ResolvedJavaField, b: ci.meta.ResolvedJavaField): int;
            compare(a0: any, a1: any): int;
          }
          interface HotSpotResolvedObjectTypeImpl$SortByOffset extends CombineTypes<[_HotSpotResolvedObjectTypeImpl$SortByOffset, java.lang.Object, java.util.Comparator<ci.meta.ResolvedJavaField>]> {}
          interface _HotSpotResolvedPrimitiveType$$static extends ClassLike {
            _forKind(kind: ci.meta.JavaKind): HotSpotResolvedPrimitiveType;
            _fromMetaspace(mirror: HotSpotObjectConstantImpl, typeChar: char): HotSpotResolvedPrimitiveType;
            _primitives: HotSpotResolvedPrimitiveType[];
          }
          let HotSpotResolvedPrimitiveType: _HotSpotResolvedPrimitiveType$$static;
          interface _HotSpotResolvedPrimitiveType {
            declaresDefaultMethods(): boolean;
            equals(obj: any): boolean;
            findInstanceFieldWithOffset(offset: long, a1: ci.meta.JavaKind): ci.meta.ResolvedJavaField;
            findLeafConcreteSubtype(): ci.meta.Assumptions$AssumptionResult<ci.meta.ResolvedJavaType>;
            findLeastCommonAncestor(otherType: ci.meta.ResolvedJavaType): ci.meta.ResolvedJavaType;
            findUniqueConcreteMethod(method: ci.meta.ResolvedJavaMethod): ci.meta.Assumptions$AssumptionResult<ci.meta.ResolvedJavaMethod>;
            getAnnotation<T>(annotationClass: java.lang.Class<T>): T;
            getAnnotationData(type: ci.meta.ResolvedJavaType): ci.meta.AnnotationData;
            getAnnotationData(type1: ci.meta.ResolvedJavaType, type2: ci.meta.ResolvedJavaType, types: ci.meta.ResolvedJavaType[]): java.util.List<ci.meta.AnnotationData>;
            getAnnotationData(type1: ci.meta.ResolvedJavaType, type2: ci.meta.ResolvedJavaType, ...types: ci.meta.ResolvedJavaType[]): java.util.List<ci.meta.AnnotationData>;
            getAnnotations(): java.lang.annotation.Annotation[];
            _getArrayType(): HotSpotResolvedObjectTypeImpl;
            getClassInitializer(): ci.meta.ResolvedJavaMethod;
            getComponentType(): ci.meta.ResolvedJavaType;
            getComponentType(): ci.meta.JavaType;
            getDeclaredAnnotations(): java.lang.annotation.Annotation[];
            getDeclaredConstructors(): ci.meta.ResolvedJavaMethod[];
            getDeclaredMethods(): ci.meta.ResolvedJavaMethod[];
            getElementalType(): ci.meta.ResolvedJavaType;
            getElementalType(): ci.meta.JavaType;
            getEnclosingType(): ci.meta.ResolvedJavaType;
            getInstanceFields(includeSuperclasses: boolean): ci.meta.ResolvedJavaField[];
            getInterfaces(): ci.meta.ResolvedJavaType[];
            getJavaKind(): ci.meta.JavaKind;
            _getJavaMirror(): ci.meta.JavaConstant;
            getModifiers(): int;
            getSingleImplementor(): ci.meta.ResolvedJavaType;
            getSourceFileName(): string;
            getStaticFields(): ci.meta.ResolvedJavaField[];
            getSuperclass(): ci.meta.ResolvedJavaType;
            hasDefaultMethods(): boolean;
            hasFinalizableSubclass(): ci.meta.Assumptions$AssumptionResult<boolean>;
            hasFinalizer(): boolean;
            initialize(): void;
            isArray(): boolean;
            isAssignableFrom(other: ci.meta.ResolvedJavaType): boolean;
            isBeingInitialized(): boolean;
            isCloneableWithAllocation(): boolean;
            isEnum(): boolean;
            isInitialized(): boolean;
            isInstance(obj: ci.meta.JavaConstant): boolean;
            isInstanceClass(): boolean;
            isInterface(): boolean;
            isJavaLangObject(): boolean;
            isLinked(): boolean;
            isLocal(): boolean;
            isMember(): boolean;
            isPrimitive(): boolean;
            link(): void;
            resolve(accessingClass: ci.meta.ResolvedJavaType): ci.meta.ResolvedJavaType;
            resolveMethod(method: ci.meta.ResolvedJavaMethod, callerType: ci.meta.ResolvedJavaType): ci.meta.ResolvedJavaMethod;
            toString(): string;
            _kind: ci.meta.JavaKind;
            _mirror: HotSpotObjectConstantImpl;
          }
          interface HotSpotResolvedPrimitiveType extends CombineTypes<[_HotSpotResolvedPrimitiveType, jdk.vm.ci.hotspot.HotSpotResolvedJavaType]> {}
          interface _HotSpotRuntimeStub$$static extends ClassLike {
            new(name: string): HotSpotRuntimeStub;
          }
          let HotSpotRuntimeStub: _HotSpotRuntimeStub$$static;
          interface _HotSpotRuntimeStub {
            executeVarargs(args: any[]): any;
            executeVarargs(...args: any[]): any;
            getMethod(): ci.meta.ResolvedJavaMethod;
            invalidate(): void;
            isValid(): boolean;
            toString(): string;
          }
          interface HotSpotRuntimeStub extends CombineTypes<[_HotSpotRuntimeStub, jdk.vm.ci.hotspot.HotSpotInstalledCode]> {}
          interface _HotSpotSignature$$static extends ClassLike {
            _checkValidCache(type: ci.meta.ResolvedJavaType, accessingClass: ci.meta.ResolvedJavaType): boolean;
            _getUnresolvedOrPrimitiveType(runtime: HotSpotJVMCIRuntime, name: string): ci.meta.JavaType;
            _parseSignature(signature: string, start: int): int;
            new(runtime: HotSpotJVMCIRuntime, signature: string): HotSpotSignature;
            new(runtime: HotSpotJVMCIRuntime, returnType: ci.meta.ResolvedJavaType, parameterTypes: ci.meta.ResolvedJavaType[]): HotSpotSignature;
            new(runtime: HotSpotJVMCIRuntime, returnType: ci.meta.ResolvedJavaType, ...parameterTypes: ci.meta.ResolvedJavaType[]): HotSpotSignature;
          }
          let HotSpotSignature: _HotSpotSignature$$static;
          interface _HotSpotSignature {
            equals(obj: any): boolean;
            getParameterCount(withReceiver: boolean): int;
            getParameterKind(index: int): ci.meta.JavaKind;
            getParameterType(index: int, accessingClass: ci.meta.ResolvedJavaType): ci.meta.JavaType;
            getReturnKind(): ci.meta.JavaKind;
            getReturnType(accessingClass: ci.meta.ResolvedJavaType): ci.meta.JavaType;
            hashCode(): int;
            toMethodDescriptor(): string;
            toString(): string;
            _originalString: string;
            _parameterTypes: ci.meta.ResolvedJavaType[];
            _parameters: java.util.List<string>;
            _returnType: string;
            _returnTypeCache: ci.meta.ResolvedJavaType;
            _runtime: HotSpotJVMCIRuntime;
          }
          interface HotSpotSignature extends CombineTypes<[_HotSpotSignature, jdk.vm.ci.meta.Signature, java.lang.Object]> {}
          interface _HotSpotSpeculationEncoding$$static extends ClassLike {
            _LENGTH_BITS: int;
            _LENGTH_MASK: int;
            _MAX_LENGTH: int;
            _NULL_METHOD: int;
            _NULL_STRING: int;
            _NULL_TYPE: int;
            _SHA1: java.security.MessageDigest;
            _SHA1_IS_CLONEABLE: boolean;
            _SHA1_LENGTH: int;
            _new(): HotSpotSpeculationEncoding;
          }
          let HotSpotSpeculationEncoding: _HotSpotSpeculationEncoding$$static;
          interface _HotSpotSpeculationEncoding {
            addByte(value: int): void;
            addInt(value: int): void;
            addLong(value: long): void;
            addMethod(method: ci.meta.ResolvedJavaMethod): void;
            _addNull(o: any, nullValue: int): boolean;
            addShort(value: int): void;
            addString(value: string): void;
            addType(type: ci.meta.ResolvedJavaType): void;
            _checkOpen(): void;
            _getByteArray(): byte[];
            _dos: java.io.DataOutputStream;
            _result: byte[];
          }
          interface HotSpotSpeculationEncoding extends CombineTypes<[_HotSpotSpeculationEncoding, jdk.vm.ci.meta.SpeculationLog$SpeculationReasonEncoding, java.io.ByteArrayOutputStream]> {}
          interface _HotSpotSpeculationLog$$static extends ClassLike {
            _contains(haystack: byte[][], fromIndex: int, needle: byte[]): boolean;
            _decodeIndex(indexAndLength: long): int;
            _decodeLength(indexAndLength: long): int;
            _encode(reason: ci.meta.SpeculationLog$SpeculationReason): byte[];
            _encodeIndexAndLength(index: int, length: int): long;
            _NO_FLATTENED_SPECULATIONS: byte[];
            new(): HotSpotSpeculationLog;
            new(failedSpeculationsAddress: long): HotSpotSpeculationLog;
          }
          let HotSpotSpeculationLog: _HotSpotSpeculationLog$$static;
          interface _HotSpotSpeculationLog {
            addFailedSpeculation(speculation: ci.meta.SpeculationLog$Speculation): boolean;
            collectFailedSpeculations(): void;
            getFailedSpeculationsAddress(): long;
            _getFlattenedSpeculations(validate: boolean): byte[];
            hasSpeculations(): boolean;
            lookupSpeculation(constant: ci.meta.JavaConstant): ci.meta.SpeculationLog$Speculation;
            managesFailedSpeculations(): boolean;
            maySpeculate(reason: ci.meta.SpeculationLog$SpeculationReason): boolean;
            speculate(reason: ci.meta.SpeculationLog$SpeculationReason): ci.meta.SpeculationLog$Speculation;
            toString(): string;
            _failedSpeculations: byte[][];
            _failedSpeculationsAddress: long;
            _managesFailedSpeculations: boolean;
            _speculationReasons: java.util.List<ci.meta.SpeculationLog$SpeculationReason>;
            _speculations: java.util.List<byte[]>;
          }
          interface HotSpotSpeculationLog extends CombineTypes<[_HotSpotSpeculationLog, java.lang.Object, jdk.vm.ci.meta.SpeculationLog]> {}
          interface _HotSpotSpeculationLog$HotSpotSpeculation$$static extends ClassLike {
            _new(reason: ci.meta.SpeculationLog$SpeculationReason, id: ci.meta.JavaConstant, encoding: byte[]): HotSpotSpeculationLog$HotSpotSpeculation;
          }
          let HotSpotSpeculationLog$HotSpotSpeculation: _HotSpotSpeculationLog$HotSpotSpeculation$$static;
          interface _HotSpotSpeculationLog$HotSpotSpeculation {
            getEncoding(): ci.meta.JavaConstant;
            toString(): string;
            _encoding: byte[];
            _id: ci.meta.JavaConstant;
          }
          interface HotSpotSpeculationLog$HotSpotSpeculation extends CombineTypes<[_HotSpotSpeculationLog$HotSpotSpeculation, jdk.vm.ci.meta.SpeculationLog$Speculation]> {}
          interface _HotSpotSpeculationLog$LogCleaner$$static extends ClassLike {
            _new(referent: HotSpotSpeculationLog, address: long): HotSpotSpeculationLog$LogCleaner;
          }
          let HotSpotSpeculationLog$LogCleaner: _HotSpotSpeculationLog$LogCleaner$$static;
          interface _HotSpotSpeculationLog$LogCleaner {
            _doCleanup(): boolean;
            _address: long;
          }
          interface HotSpotSpeculationLog$LogCleaner extends CombineTypes<[_HotSpotSpeculationLog$LogCleaner, jdk.vm.ci.hotspot.Cleaner]> {}
          interface _HotSpotStackFrameReference$$static extends ClassLike {
            new(): HotSpotStackFrameReference;
          }
          let HotSpotStackFrameReference: _HotSpotStackFrameReference$$static;
          interface _HotSpotStackFrameReference {
            getBytecodeIndex(): int;
            getFrameNumber(): int;
            getLocal(index: int): any;
            getMethod(): ci.meta.ResolvedJavaMethod;
            getStackPointer(): long;
            hasVirtualObjects(): boolean;
            isMethod(otherMethod: ci.meta.ResolvedJavaMethod): boolean;
            isVirtual(index: int): boolean;
            materializeVirtualObjects(invalidateCode: boolean): void;
            toString(): string;
            _bci: int;
            _compilerToVM: CompilerToVM;
            _frameNumber: int;
            _localIsVirtual: boolean[];
            _locals: any[];
            _method: HotSpotResolvedJavaMethod;
            _objectsMaterialized: boolean;
            _stackPointer: long;
          }
          interface HotSpotStackFrameReference extends CombineTypes<[_HotSpotStackFrameReference, jdk.vm.ci.code.stack.InspectedFrame, java.lang.Object]> {}
          interface _HotSpotStackIntrospection$$static extends ClassLike {
            new(runtime: HotSpotJVMCIRuntime): HotSpotStackIntrospection;
          }
          let HotSpotStackIntrospection: _HotSpotStackIntrospection$$static;
          interface _HotSpotStackIntrospection {
            canMaterializeVirtualObjects(): boolean;
            iterateFrames<T>(initialMethods: ci.meta.ResolvedJavaMethod[], matchingMethods: ci.meta.ResolvedJavaMethod[], initialSkip: int, visitor: ci.code.stack.InspectedFrameVisitor<T>): T;
            _runtime: HotSpotJVMCIRuntime;
          }
          interface HotSpotStackIntrospection extends CombineTypes<[_HotSpotStackIntrospection, java.lang.Object, jdk.vm.ci.code.stack.StackIntrospection]> {}
          interface _HotSpotVMConfig$$static extends ClassLike {
            _config(): HotSpotVMConfig;
            _new(store: HotSpotVMConfigStore): HotSpotVMConfig;
          }
          let HotSpotVMConfig: _HotSpotVMConfig$$static;
          interface _HotSpotVMConfig {
            _baseVtableLength(): int;
            _getCodeInstallResultDescription(codeInstallResult: int): string;
            _getHostArchitectureName(): string;
            _prototypeMarkWord(): long;
            _symbolAt(index: int): string;
            _annotationsClassAnnotationsOffset: int;
            _annotationsFieldAnnotationsOffset: int;
            _arrayDataArrayLenOffset: int;
            _arrayDataArrayStartOffset: int;
            _arrayU1DataOffset: int;
            _arrayU1LengthOffset: int;
            _arrayU2DataOffset: int;
            _bciProfileWidth: int;
            _bitDataExceptionSeenFlag: int;
            _bitDataNullSeenFlag: int;
            _branchDataNotTakenOffset: int;
            _classLoaderDataOffset: int;
            _codeInstallResultCacheFull: int;
            _codeInstallResultCodeTooLarge: int;
            _codeInstallResultDependenciesFailed: int;
            _codeInstallResultFirstPermanentBailout: int;
            _codeInstallResultNMethodReclaimed: int;
            _codeInstallResultOk: int;
            _compLevelAdjustmentByFullSignature: int;
            _compLevelAdjustmentByHolder: int;
            _compLevelAdjustmentNone: int;
            _compilationLevelFullOptimization: int;
            _compilationLevelFullProfile: int;
            _compilationLevelLimitedProfile: int;
            _compilationLevelNone: int;
            _compilationLevelSimple: int;
            _constMethodCodeSizeOffset: int;
            _constMethodConstantsOffset: int;
            _constMethodFlagsCallerSensitive: int;
            _constMethodFlagsIntrinsicCandidate: int;
            _constMethodFlagsOffset: int;
            _constMethodFlagsReservedStackAccess: int;
            _constMethodHasExceptionTable: int;
            _constMethodHasLineNumberTable: int;
            _constMethodHasLocalVariableTable: int;
            _constMethodHasMethodAnnotations: int;
            _constMethodHasParameterAnnotations: int;
            _constMethodMaxStackOffset: int;
            _constMethodMethodIdnumOffset: int;
            _constMethodNameIndexOffset: int;
            _constMethodSignatureIndexOffset: int;
            _constantPoolCpCacheIndexTag: int;
            _constantPoolFlagsOffset: int;
            _constantPoolHasDynamicConstant: int;
            _constantPoolHolderOffset: int;
            _constantPoolLengthOffset: int;
            _constantPoolSize: int;
            _constantPoolSourceFileNameIndexOffset: int;
            _constantPoolTagsOffset: int;
            _dataLayoutArgInfoDataTag: int;
            _dataLayoutBCIOffset: int;
            _dataLayoutBitDataTag: int;
            _dataLayoutBranchDataTag: int;
            _dataLayoutCallTypeDataTag: int;
            _dataLayoutCellSize: int;
            _dataLayoutCounterDataTag: int;
            _dataLayoutFlagsOffset: int;
            _dataLayoutHeaderSize: int;
            _dataLayoutJumpDataTag: int;
            _dataLayoutMultiBranchDataTag: int;
            _dataLayoutNoTag: int;
            _dataLayoutParametersTypeDataTag: int;
            _dataLayoutReceiverTypeDataTag: int;
            _dataLayoutRetDataTag: int;
            _dataLayoutSpeculativeTrapDataTag: int;
            _dataLayoutTagOffset: int;
            _dataLayoutVirtualCallDataTag: int;
            _dataLayoutVirtualCallTypeDataTag: int;
            _deoptActionMakeNotCompilable: int;
            _deoptActionMakeNotEntrant: int;
            _deoptActionMaybeRecompile: int;
            _deoptActionNone: int;
            _deoptActionReinterpret: int;
            _deoptReasonAliasing: int;
            _deoptReasonArrayCheck: int;
            _deoptReasonClassCheck: int;
            _deoptReasonConstraint: int;
            _deoptReasonDiv0Check: int;
            _deoptReasonJsrMismatch: int;
            _deoptReasonLoopLimitCheck: int;
            _deoptReasonNone: int;
            _deoptReasonNotCompiledExceptionHandler: int;
            _deoptReasonNullCheck: int;
            _deoptReasonOSROffset: int;
            _deoptReasonOptimizedTypeCheck: int;
            _deoptReasonRangeCheck: int;
            _deoptReasonTransferToInterpreter: int;
            _deoptReasonTypeCheckInlining: int;
            _deoptReasonUnreached0: int;
            _deoptReasonUnresolved: int;
            _deoptimizationActionBits: int;
            _deoptimizationActionShift: int;
            _deoptimizationDebugIdBits: int;
            _deoptimizationDebugIdShift: int;
            _deoptimizationReasonBits: int;
            _deoptimizationReasonShift: int;
            _exceptionTableElementCatchTypeIndexOffset: int;
            _exceptionTableElementEndPcOffset: int;
            _exceptionTableElementHandlerPcOffset: int;
            _exceptionTableElementSize: int;
            _exceptionTableElementStartPcOffset: int;
            _extraStackEntries: int;
            _fieldsAnnotationsBaseOffset: int;
            _heapWordSize: int;
            _hubOffset: int;
            _instanceKlassAnnotationsOffset: int;
            _instanceKlassConstantsOffset: int;
            _instanceKlassFieldInfoStreamOffset: int;
            _instanceKlassInitStateOffset: int;
            _instanceKlassMiscFlagsOffset: int;
            _instanceKlassStateBeingInitialized: int;
            _instanceKlassStateFullyInitialized: int;
            _instanceKlassStateLinked: int;
            _invalidVtableIndex: int;
            _invocationEntryBci: int;
            _javaMirrorOffset: int;
            _jumpDataDisplacementOffset: int;
            _jumpDataTakenOffset: int;
            _jvmAccAnnotation: int;
            _jvmAccBridge: int;
            _jvmAccEnum: int;
            _jvmAccHasFinalizer: int;
            _jvmAccInterface: int;
            _jvmAccIsCloneableFast: int;
            _jvmAccSynthetic: int;
            _jvmAccVarargs: int;
            _jvmConstantClass: int;
            _jvmConstantDouble: int;
            _jvmConstantDynamic: int;
            _jvmConstantDynamicInError: int;
            _jvmConstantExternalMax: int;
            _jvmConstantFieldref: int;
            _jvmConstantFloat: int;
            _jvmConstantInteger: int;
            _jvmConstantInterfaceMethodref: int;
            _jvmConstantInternalMax: int;
            _jvmConstantInternalMin: int;
            _jvmConstantInvokeDynamic: int;
            _jvmConstantLong: int;
            _jvmConstantMethodHandle: int;
            _jvmConstantMethodHandleInError: int;
            _jvmConstantMethodType: int;
            _jvmConstantMethodTypeInError: int;
            _jvmConstantMethodref: int;
            _jvmConstantNameAndType: int;
            _jvmConstantString: int;
            _jvmConstantUnresolvedClass: int;
            _jvmConstantUnresolvedClassInError: int;
            _jvmConstantUtf8: int;
            _jvmFieldFlagInternalShift: int;
            _jvmFieldFlagStableShift: int;
            _jvmMiscFlagsDeclaresDefaultMethods: int;
            _jvmMiscFlagsHasDefaultMethods: int;
            _klassAccessFlagsOffset: int;
            _klassLayoutHelperInstanceSlowPathBit: int;
            _klassLayoutHelperNeutralValue: int;
            _klassLayoutHelperOffset: int;
            _klassOffset: int;
            _klassVtableLengthOffset: int;
            _klassVtableStartOffset: int;
            _localVariableTableElementDescriptorCpIndexOffset: int;
            _localVariableTableElementLengthOffset: int;
            _localVariableTableElementNameCpIndexOffset: int;
            _localVariableTableElementSize: int;
            _localVariableTableElementSlotOffset: int;
            _localVariableTableElementStartBciOffset: int;
            _markWordNoHashInPlace: int;
            _markWordNoLockInPlace: int;
            _methodAccessFlagsOffset: int;
            _methodCodeOffset: int;
            _methodConstMethodOffset: int;
            _methodDataCountOffset: int;
            _methodDataDataSize: int;
            _methodDataDecompiles: int;
            _methodDataIRSizeOffset: int;
            _methodDataOffset: int;
            _methodDataOopDataOffset: int;
            _methodDataOopTrapHistoryOffset: int;
            _methodDataOverflowRecompiles: int;
            _methodDataOverflowTraps: int;
            _methodDataSize: int;
            _methodFlagsDontInline: int;
            _methodFlagsForceInline: int;
            _methodFlagsOffset: int;
            _methodIntrinsicIdOffset: int;
            _methodMaxLocalsOffset: int;
            _methodProfileWidth: int;
            _methodVtableIndexOffset: int;
            _multiBranchDataPerCaseCellCount: int;
            _nextSiblingOffset: int;
            _nmethodCompLevelOffset: int;
            _nonvirtualVtableIndex: int;
            _objectAlignment: int;
            _osArch: string;
            _receiverTypeDataCount0Offset: int;
            _receiverTypeDataNonprofiledCountOffset: int;
            _receiverTypeDataReceiver0Offset: int;
            _receiverTypeDataReceiverTypeRowCellCount: int;
            _runtimeCallStackSize: int;
            _secondarySuperCacheOffset: int;
            _subklassOffset: int;
            _superCheckOffsetOffset: int;
            _superOffset: int;
            _symbolClinit: long;
            _symbolInit: long;
            _symbolVmSymbols: long;
            _typeProfileWidth: int;
            _universeBaseVtableSize: int;
            _useCompressedOops: boolean;
            _useDeferredInitBarriers: boolean;
            _vmIntrinsicInvokeBasic: int;
            _vmIntrinsicLinkToInterface: int;
            _vmIntrinsicLinkToSpecial: int;
            _vmIntrinsicLinkToStatic: int;
            _vmIntrinsicLinkToVirtual: int;
            _vmSymbolsFirstSID: int;
            _vmSymbolsSIDLimit: int;
            _vtableEntryMethodOffset: int;
            _vtableEntrySize: int;
          }
          interface HotSpotVMConfig extends CombineTypes<[_HotSpotVMConfig, jdk.vm.ci.hotspot.HotSpotVMConfigAccess]> {}
          interface _HotSpotVMConfigAccess$$static extends ClassLike {
            _convertValue<T>(name: string, toType: java.lang.Class<T>, value: any, cppType: string): any;
            new(store: HotSpotVMConfigStore): HotSpotVMConfigAccess;
          }
          let HotSpotVMConfigAccess: _HotSpotVMConfigAccess$$static;
          interface _HotSpotVMConfigAccess {
            getAddress(name: string, notPresent: long): long;
            getAddress(name: string): long;
            getConstant<T>(name: string, type: java.lang.Class<T>, notPresent: T): T;
            getConstant<T>(name: string, type: java.lang.Class<T>): T;
            _getField(name: string, cppType: string, required: boolean): VMField;
            getFieldAddress(name: string, cppType: string, notPresent: long): long;
            getFieldAddress(name: string, notPresent: long, outCppType: string[]): long;
            getFieldAddress(name: string, cppType: string): long;
            _getFieldAddress0(name: string, notPresent: long, inCppType: string, outCppType: string[]): long;
            getFieldOffset<T>(name: string, type: java.lang.Class<T>, cppType: string, notPresent: T): T;
            getFieldOffset<T>(name: string, type: java.lang.Class<T>, notPresent: T, outCppType: string[]): T;
            getFieldOffset<T>(name: string, type: java.lang.Class<T>, cppType: string): T;
            getFieldOffset<T>(name: string, type: java.lang.Class<T>): T;
            _getFieldOffset0<T>(name: string, type: java.lang.Class<T>, notPresent: T, inCppType: string, outCppType: string[]): T;
            getFieldValue<T>(name: string, type: java.lang.Class<T>, cppType: string, notPresent: T): T;
            getFieldValue<T>(name: string, type: java.lang.Class<T>, cppType: string): T;
            getFieldValue<T>(name: string, type: java.lang.Class<T>, notPresent: T, outCppType: string[]): T;
            getFieldValue<T>(name: string, type: java.lang.Class<T>): T;
            _getFieldValue0<T>(name: string, type: java.lang.Class<T>, notPresent: T, inCppType: string, outCppType: string[]): T;
            getFlag<T>(name: string, type: java.lang.Class<T>): T;
            getFlag<T>(name: string, type: java.lang.Class<T>, notPresent: T): T;
            getStore(): HotSpotVMConfigStore;
            _missingEntry(category: string, name: string, keys: java.util.Set<string>): ci.common.JVMCIError;
            _store: HotSpotVMConfigStore;
          }
          interface HotSpotVMConfigAccess extends CombineTypes<[_HotSpotVMConfigAccess, java.lang.Object]> {}
          interface _HotSpotVMConfigStore$$static extends ClassLike {
            _printConfigLine(runtime: HotSpotJVMCIRuntime, format: string, args: any[]): void;
            _printConfigLine(runtime: HotSpotJVMCIRuntime, format: string, ...args: any[]): void;
            _new(compilerToVm: CompilerToVM): HotSpotVMConfigStore;
          }
          let HotSpotVMConfigStore: _HotSpotVMConfigStore$$static;
          interface _HotSpotVMConfigStore {
            getAddresses(): java.util.Map<string,long>;
            getConstants(): java.util.Map<string,long>;
            getFields(): java.util.Map<string,VMField>;
            getFlags(): java.util.Map<string,VMFlag>;
            getIntrinsics(): java.util.List<VMIntrinsicMethod>;
            _printConfig(runtime: HotSpotJVMCIRuntime): void;
            toString(): string;
            _compilerToVm: CompilerToVM;
            _vmAddresses: java.util.HashMap<string,long>;
            _vmConstants: java.util.HashMap<string,long>;
            _vmFields: java.util.HashMap<string,VMField>;
            _vmFlags: java.util.HashMap<string,VMFlag>;
            _vmIntrinsics: java.util.List<VMIntrinsicMethod>;
          }
          interface HotSpotVMConfigStore extends CombineTypes<[_HotSpotVMConfigStore, java.lang.Object]> {}
          interface _HotSpotVMEventListener$$static extends ClassLike {
          }
          let HotSpotVMEventListener: _HotSpotVMEventListener$$static;
          interface _HotSpotVMEventListener {
            notifyBootstrapFinished(): void;
            notifyInstall(hotSpotCodeCacheProvider: HotSpotCodeCacheProvider, installedCode: ci.code.InstalledCode, compiledCode: ci.code.CompiledCode): void;
            notifyShutdown(): void;
          }
          interface HotSpotVMEventListener extends CombineTypes<[_HotSpotVMEventListener, java.lang.Object]> {}
          interface _IndirectHotSpotObjectConstantImpl$$static extends ClassLike {
            _clearHandle(handle: long): void;
          }
          let IndirectHotSpotObjectConstantImpl: _IndirectHotSpotObjectConstantImpl$$static;
          interface _IndirectHotSpotObjectConstantImpl {
            _checkHandle(): void;
            _clear(scopeDescription: any): void;
            compress(): ci.meta.JavaConstant;
            compress(): ci.meta.Constant;
            _getHandle(): long;
            getIdentityHashCode(): int;
            getType(): HotSpotResolvedObjectType;
            _isValid(): boolean;
            uncompress(): ci.meta.JavaConstant;
            uncompress(): ci.meta.Constant;
            _base: IndirectHotSpotObjectConstantImpl;
            _hashCode: int;
            _objectHandle: long;
            _rawAudit: any;
          }
          interface IndirectHotSpotObjectConstantImpl extends CombineTypes<[_IndirectHotSpotObjectConstantImpl, jdk.vm.ci.hotspot.HotSpotObjectConstantImpl]> {}
          interface _IndirectHotSpotObjectConstantImpl$Audit$$static extends ClassLike {
            _new(scope: any, handle: long, a2: java.lang.Throwable): IndirectHotSpotObjectConstantImpl$Audit;
          }
          let IndirectHotSpotObjectConstantImpl$Audit: _IndirectHotSpotObjectConstantImpl$Audit$$static;
          interface _IndirectHotSpotObjectConstantImpl$Audit {
            _handle: long;
            _origin: java.lang.Throwable;
            _scope: any;
          }
          interface IndirectHotSpotObjectConstantImpl$Audit extends CombineTypes<[_IndirectHotSpotObjectConstantImpl$Audit, java.lang.Object]> {}
          interface _JFR$$static extends ClassLike {
            new(): JFR;
          }
          let JFR: _JFR$$static;
          interface _JFR {
          }
          interface JFR extends CombineTypes<[_JFR, java.lang.Object]> {}
          interface _JFR$CompilerInliningEvent$$static extends ClassLike {
            write(compileId: int, caller: ci.meta.ResolvedJavaMethod, callee: ci.meta.ResolvedJavaMethod, succeeded: boolean, message: string, bci: int): void;
            new(): JFR$CompilerInliningEvent;
          }
          let JFR$CompilerInliningEvent: _JFR$CompilerInliningEvent$$static;
          interface _JFR$CompilerInliningEvent {
          }
          interface JFR$CompilerInliningEvent extends CombineTypes<[_JFR$CompilerInliningEvent, java.lang.Object]> {}
          interface _JFR$CompilerPhaseEvent$$static extends ClassLike {
            _getPhaseToId(phaseName: string): int;
            write(startTime: long, a1: string, phaseName: int, compileId: int): void;
            _phaseToId: java.util.concurrent.ConcurrentHashMap<string,int>;
            new(): JFR$CompilerPhaseEvent;
          }
          let JFR$CompilerPhaseEvent: _JFR$CompilerPhaseEvent$$static;
          interface _JFR$CompilerPhaseEvent {
          }
          interface JFR$CompilerPhaseEvent extends CombineTypes<[_JFR$CompilerPhaseEvent, java.lang.Object]> {}
          interface _JFR$Ticks$$static extends ClassLike {
            now(): long;
            new(): JFR$Ticks;
          }
          let JFR$Ticks: _JFR$Ticks$$static;
          interface _JFR$Ticks {
          }
          interface JFR$Ticks extends CombineTypes<[_JFR$Ticks, java.lang.Object]> {}
          interface _MetaspaceHandleObject$$static extends ClassLike {
          }
          let MetaspaceHandleObject: _MetaspaceHandleObject$$static;
          interface _MetaspaceHandleObject {
            getMetadataHandle(): long;
(): long;
            getMetaspacePointer(): long;
          }
          interface MetaspaceHandleObject extends CombineTypes<[_MetaspaceHandleObject, java.lang.Object, jdk.vm.ci.hotspot.MetaspaceObject]> {}
          interface _MetaspaceObject$$static extends ClassLike {
          }
          let MetaspaceObject: _MetaspaceObject$$static;
          interface _MetaspaceObject {
            getMetaspacePointer(): long;
(): long;
          }
          interface MetaspaceObject extends CombineTypes<[_MetaspaceObject, java.lang.Object]> {}
          interface _SharedHotSpotSpeculationLog$$static extends ClassLike {
            new(masterLog: HotSpotSpeculationLog): SharedHotSpotSpeculationLog;
          }
          let SharedHotSpotSpeculationLog: _SharedHotSpotSpeculationLog$$static;
          interface _SharedHotSpotSpeculationLog {
            toString(): string;
            _masterLog: HotSpotSpeculationLog;
          }
          interface SharedHotSpotSpeculationLog extends CombineTypes<[_SharedHotSpotSpeculationLog, jdk.vm.ci.hotspot.HotSpotSpeculationLog]> {}
          interface _SharedLibraryJVMCIReflection$$static extends ClassLike {
            _convertUnknownValue(object: any): any;
            _getClassAnnotations(className: string): java.lang.annotation.Annotation[];
            _getMethodAnnotationsInternal(javaMethod: ci.meta.ResolvedJavaMethod): java.lang.annotation.Annotation[];
            _getParameterAnnotations(className: string, methodName: string): java.lang.annotation.Annotation[][];
            _new(): SharedLibraryJVMCIReflection;
          }
          let SharedLibraryJVMCIReflection: _SharedLibraryJVMCIReflection$$static;
          interface _SharedLibraryJVMCIReflection {
            _asJavaType(object: HotSpotObjectConstantImpl): ci.meta.ResolvedJavaType;
            _asObject<T>(object: HotSpotObjectConstantImpl, type: java.lang.Class<T>): T;
            _asObject(object: HotSpotObjectConstantImpl, type: HotSpotResolvedJavaType): any;
            _asString(object: HotSpotObjectConstantImpl): string;
            _boxPrimitive(source: ci.meta.JavaConstant): ci.meta.JavaConstant;
            _equals(x: HotSpotObjectConstantImpl, y: HotSpotObjectConstantImpl): boolean;
            _forObject(value: any): ci.meta.JavaConstant;
            _formatString(object: HotSpotObjectConstantImpl): string;
            _getAnnotation<T>(holder: HotSpotResolvedObjectTypeImpl, annotationClass: java.lang.Class<T>): T;
            _getAnnotations(holder: HotSpotResolvedObjectTypeImpl): java.lang.annotation.Annotation[];
            _getDeclaredAnnotations(holder: HotSpotResolvedObjectTypeImpl): java.lang.annotation.Annotation[];
            _getEnclosingClass(holder: HotSpotResolvedObjectTypeImpl): HotSpotResolvedObjectType;
            _getFieldAnnotation<T>(javaField: HotSpotResolvedJavaFieldImpl, annotationClass: java.lang.Class<T>): T;
            _getFieldAnnotations(javaField: HotSpotResolvedJavaFieldImpl): java.lang.annotation.Annotation[];
            _getFieldDeclaredAnnotations(javaMethod: HotSpotResolvedJavaFieldImpl): java.lang.annotation.Annotation[];
            _getGenericParameterTypes(javaMethod: HotSpotResolvedJavaMethodImpl): java.lang.reflect.Type[];
            _getLength(object: HotSpotObjectConstantImpl): int;
            _getMethodAnnotation<T>(javaMethod: HotSpotResolvedJavaMethodImpl, annotationClass: java.lang.Class<T>): T;
            _getMethodAnnotations(javaMethod: HotSpotResolvedJavaMethodImpl): java.lang.annotation.Annotation[];
            _getMethodDeclaredAnnotations(javaMethod: HotSpotResolvedJavaMethodImpl): java.lang.annotation.Annotation[];
            _getParameterAnnotations(javaMethod: HotSpotResolvedJavaMethodImpl): java.lang.annotation.Annotation[][];
            _getParameters(javaMethod: HotSpotResolvedJavaMethodImpl): ci.meta.ResolvedJavaMethod$Parameter[];
            _getType(object: HotSpotObjectConstantImpl): HotSpotResolvedObjectTypeImpl;
            _isAssignableFrom(holder: HotSpotResolvedObjectTypeImpl, otherType: HotSpotResolvedObjectTypeImpl): boolean;
            _isInstance(holder: HotSpotResolvedObjectTypeImpl, obj: HotSpotObjectConstantImpl): boolean;
            _isLocalClass(holder: HotSpotResolvedObjectTypeImpl): boolean;
            _isMemberClass(holder: HotSpotResolvedObjectTypeImpl): boolean;
            _readArrayElement(arrayObject: HotSpotObjectConstantImpl, index: int): ci.meta.JavaConstant;
            _resolveObject(objectHandle: HotSpotObjectConstantImpl): any;
            _unboxPrimitive(source: HotSpotObjectConstantImpl): ci.meta.JavaConstant;
          }
          interface SharedLibraryJVMCIReflection extends CombineTypes<[_SharedLibraryJVMCIReflection, jdk.vm.ci.hotspot.HotSpotJVMCIReflection]> {}
          interface _SuppressFBWarnings$$static extends ClassLike {
          }
          let SuppressFBWarnings: _SuppressFBWarnings$$static;
          interface _SuppressFBWarnings {
            justification(): string;
            value(): string[];
          }
          interface SuppressFBWarnings extends CombineTypes<[_SuppressFBWarnings, java.lang.annotation.Annotation, java.lang.Object]> {}
          interface _UnsafeAccess$$static extends ClassLike {
            _UNSAFE: jdk.internal.misc.Unsafe;
            _new(): UnsafeAccess;
          }
          let UnsafeAccess: _UnsafeAccess$$static;
          interface _UnsafeAccess {
          }
          interface UnsafeAccess extends CombineTypes<[_UnsafeAccess, java.lang.Object]> {}
          interface _VMEntryPoint$$static extends ClassLike {
          }
          let VMEntryPoint: _VMEntryPoint$$static;
          interface _VMEntryPoint {
            value(): string;
(): string;
          }
          interface VMEntryPoint extends CombineTypes<[_VMEntryPoint, java.lang.annotation.Annotation, java.lang.Object]> {}
          interface _VMField$$static extends ClassLike {
            _new(name: string, type: string, offset: long, a3: long, address: any): VMField;
          }
          let VMField: _VMField$$static;
          interface _VMField {
            isStatic(): boolean;
            toString(): string;
            readonly address: long;
            readonly name: string;
            readonly offset: long;
            readonly type: string;
            readonly value: any;
          }
          interface VMField extends CombineTypes<[_VMField, java.lang.Object]> {}
          interface _VMFlag$$static extends ClassLike {
            _new(name: string, type: string, value: any): VMFlag;
          }
          let VMFlag: _VMFlag$$static;
          interface _VMFlag {
            toString(): string;
            readonly name: string;
            readonly type: string;
            readonly value: any;
          }
          interface VMFlag extends CombineTypes<[_VMFlag, java.lang.Object]> {}
          interface _VMIntrinsicMethod$$static extends ClassLike {
            _new(declaringClass: string, name: string, descriptor: string, id: int): VMIntrinsicMethod;
          }
          let VMIntrinsicMethod: _VMIntrinsicMethod$$static;
          interface _VMIntrinsicMethod {
            equals(obj: any): boolean;
            hashCode(): int;
            toString(): string;
            readonly declaringClass: string;
            readonly descriptor: string;
            readonly id: int;
            readonly name: string;
          }
          interface VMIntrinsicMethod extends CombineTypes<[_VMIntrinsicMethod, java.lang.Object]> {}
        }
        module meta {
          interface _AbstractJavaProfile$$static<T,U> extends ClassLike {
            new(notRecordedProbability: double, a1: T[]): AbstractJavaProfile<T,U>;
          }
          let AbstractJavaProfile: _AbstractJavaProfile$$static<T,U>;
          interface _AbstractJavaProfile<T,U> {
            equals(obj: any): boolean;
            findEntry(type: ResolvedJavaType): T;
            _getItems(): T[];
            getNotRecordedProbability(): double;
            hashCode(): int;
            isIncluded(item: U): boolean;
            _isSorted(): boolean;
            toString(): string;
            _totalProbablility(): double;
            _notRecordedProbability: double;
            _pitems: T[];
          }
          interface AbstractJavaProfile<T,U> extends CombineTypes<[_AbstractJavaProfile<T,U>, java.lang.Object]> {}
          interface _AbstractProfiledItem$$static<T> extends ClassLike {
            new(item: T, probability: double): AbstractProfiledItem<T>;
          }
          let AbstractProfiledItem: _AbstractProfiledItem$$static<T>;
          interface _AbstractProfiledItem<T> {
            compareTo(o: AbstractProfiledItem<any>): int;
            compareTo(a0: any): int;
            equals(obj: any): boolean;
            _getItem(): T;
            getProbability(): double;
            hashCode(): int;
            toString(): string;
(): string;
            _item: T;
            _probability: double;
          }
          interface AbstractProfiledItem<T> extends CombineTypes<[_AbstractProfiledItem<T>, java.lang.Comparable<AbstractProfiledItem<any>>, java.lang.Object]> {}
          interface _AllocatableValue$$static extends ClassLike {
            readonly NONE: AllocatableValue[];
            new(kind: ValueKind<any>): AllocatableValue;
          }
          let AllocatableValue: _AllocatableValue$$static;
          interface _AllocatableValue {
          }
          interface AllocatableValue extends CombineTypes<[_AllocatableValue, jdk.vm.ci.meta.JavaValue, jdk.vm.ci.meta.Value]> {}
          interface _Annotated$$static extends ClassLike {
          }
          let Annotated: _Annotated$$static;
          interface _Annotated {
            getAnnotationData(type1: ResolvedJavaType, type2: ResolvedJavaType, types: ResolvedJavaType[]): java.util.List<AnnotationData>;
            getAnnotationData(type1: ResolvedJavaType, type2: ResolvedJavaType, ...types: ResolvedJavaType[]): java.util.List<AnnotationData>;
            getAnnotationData(type: ResolvedJavaType): AnnotationData;
          }
          interface Annotated extends CombineTypes<[_Annotated, java.lang.Object]> {}
          interface _AnnotationData$$static extends ClassLike {
            _ELEMENT_TYPES: java.util.Set<java.lang.Class<any>>;
            new(type: JavaType, elements: java.util.Map$Entry<string,any>[]): AnnotationData;
          }
          let AnnotationData: _AnnotationData$$static;
          interface _AnnotationData {
            equals(obj: any): boolean;
            get<V>(name: string, elementType: java.lang.Class<V>): V;
            getAnnotationType(): JavaType;
            hashCode(): int;
            toString(): string;
            _elements: java.util.Map<string,any>;
            _type: JavaType;
          }
          interface AnnotationData extends CombineTypes<[_AnnotationData, java.lang.Object]> {}
          interface _Assumptions$$static extends ClassLike {
            new(): Assumptions;
          }
          let Assumptions: _Assumptions$$static;
          interface _Assumptions {
            equals(obj: any): boolean;
            hashCode(): int;
            isEmpty(): boolean;
            iterator(): java.util.Iterator<Assumptions$Assumption>;
            record(assumption: Assumptions$Assumption): void;
            record(other: Assumptions): void;
            recordConcreteMethod(method: ResolvedJavaMethod, context: ResolvedJavaType, impl: ResolvedJavaMethod): void;
            recordConcreteSubtype(context: ResolvedJavaType, subtype: ResolvedJavaType): void;
            recordNoFinalizableSubclassAssumption(receiverType: ResolvedJavaType): void;
            toArray(): Assumptions$Assumption[];
            toString(): string;
            _assumptions: java.util.Set<Assumptions$Assumption>;
          }
          interface Assumptions extends CombineTypes<[_Assumptions, java.lang.Object, java.lang.Iterable<Assumptions$Assumption>]> {}
          interface _Assumptions$Assumption$$static extends ClassLike {
            new(): Assumptions$Assumption;
          }
          let Assumptions$Assumption: _Assumptions$Assumption$$static;
          interface _Assumptions$Assumption {
          }
          interface Assumptions$Assumption extends CombineTypes<[_Assumptions$Assumption, java.lang.Object]> {}
          interface _Assumptions$AssumptionResult$$static<T> extends ClassLike {
            _EMPTY: Assumptions$Assumption[];
            new(result: T, assumptions: Assumptions$Assumption[]): Assumptions$AssumptionResult<T>;
            new(result: T, ...assumptions: Assumptions$Assumption[]): Assumptions$AssumptionResult<T>;
            new(result: T): Assumptions$AssumptionResult<T>;
          }
          let Assumptions$AssumptionResult: _Assumptions$AssumptionResult$$static<T>;
          interface _Assumptions$AssumptionResult<T> {
            add(other: Assumptions$AssumptionResult<T>): void;
            canRecordTo(target: Assumptions): boolean;
            getResult(): T;
            isAssumptionFree(): boolean;
            recordTo(target: Assumptions): void;
            toString(): string;
            _assumptions: Assumptions$Assumption[];
            _result: T;
          }
          interface Assumptions$AssumptionResult<T> extends CombineTypes<[_Assumptions$AssumptionResult<T>, java.lang.Object]> {}
          interface _Assumptions$CallSiteTargetValue$$static extends ClassLike {
            new(callSite: JavaConstant, methodHandle: JavaConstant): Assumptions$CallSiteTargetValue;
          }
          let Assumptions$CallSiteTargetValue: _Assumptions$CallSiteTargetValue$$static;
          interface _Assumptions$CallSiteTargetValue {
            equals(obj: any): boolean;
            hashCode(): int;
            toString(): string;
            readonly callSite: JavaConstant;
            readonly methodHandle: JavaConstant;
          }
          interface Assumptions$CallSiteTargetValue extends CombineTypes<[_Assumptions$CallSiteTargetValue, jdk.vm.ci.meta.Assumptions$Assumption]> {}
          interface _Assumptions$ConcreteMethod$$static extends ClassLike {
            new(method: ResolvedJavaMethod, context: ResolvedJavaType, impl: ResolvedJavaMethod): Assumptions$ConcreteMethod;
          }
          let Assumptions$ConcreteMethod: _Assumptions$ConcreteMethod$$static;
          interface _Assumptions$ConcreteMethod {
            equals(obj: any): boolean;
            hashCode(): int;
            toString(): string;
            readonly context: ResolvedJavaType;
            readonly impl: ResolvedJavaMethod;
            readonly method: ResolvedJavaMethod;
          }
          interface Assumptions$ConcreteMethod extends CombineTypes<[_Assumptions$ConcreteMethod, jdk.vm.ci.meta.Assumptions$Assumption]> {}
          interface _Assumptions$ConcreteSubtype$$static extends ClassLike {
            new(context: ResolvedJavaType, subtype: ResolvedJavaType): Assumptions$ConcreteSubtype;
          }
          let Assumptions$ConcreteSubtype: _Assumptions$ConcreteSubtype$$static;
          interface _Assumptions$ConcreteSubtype {
            equals(obj: any): boolean;
            hashCode(): int;
            toString(): string;
            readonly context: ResolvedJavaType;
            readonly subtype: ResolvedJavaType;
          }
          interface Assumptions$ConcreteSubtype extends CombineTypes<[_Assumptions$ConcreteSubtype, jdk.vm.ci.meta.Assumptions$Assumption]> {}
          interface _Assumptions$LeafType$$static extends ClassLike {
            new(context: ResolvedJavaType): Assumptions$LeafType;
          }
          let Assumptions$LeafType: _Assumptions$LeafType$$static;
          interface _Assumptions$LeafType {
            equals(obj: any): boolean;
            hashCode(): int;
            toString(): string;
            readonly context: ResolvedJavaType;
          }
          interface Assumptions$LeafType extends CombineTypes<[_Assumptions$LeafType, jdk.vm.ci.meta.Assumptions$Assumption]> {}
          interface _Assumptions$NoFinalizableSubclass$$static extends ClassLike {
            new(receiverType: ResolvedJavaType): Assumptions$NoFinalizableSubclass;
          }
          let Assumptions$NoFinalizableSubclass: _Assumptions$NoFinalizableSubclass$$static;
          interface _Assumptions$NoFinalizableSubclass {
            equals(obj: any): boolean;
            hashCode(): int;
            toString(): string;
            readonly receiverType: ResolvedJavaType;
          }
          interface Assumptions$NoFinalizableSubclass extends CombineTypes<[_Assumptions$NoFinalizableSubclass, jdk.vm.ci.meta.Assumptions$Assumption]> {}
          interface _Constant$$static extends ClassLike {
          }
          let Constant: _Constant$$static;
          interface _Constant {
            isDefaultForKind(): boolean;
            toValueString(): string;
          }
          interface Constant extends CombineTypes<[_Constant, java.lang.Object]> {}
          interface _ConstantPool$$static extends ClassLike {
          }
          let ConstantPool: _ConstantPool$$static;
          interface _ConstantPool {
            length(): int;
            loadReferencedType(a0: int, a1: int): void;
            loadReferencedType(cpi: int, opcode: int, initialize: boolean): void;
            lookupAppendix(a0: int, a1: int): JavaConstant;
            lookupBootstrapMethodInvocation(cpi: int, opcode: int): ConstantPool$BootstrapMethodInvocation;
            lookupConstant(a0: int): any;
            lookupField(a0: int, a1: ResolvedJavaMethod, a2: int): JavaField;
            lookupMethod(cpi: int, opcode: int): JavaMethod;
            lookupMethod(a0: int, a1: int, a2: ResolvedJavaMethod): JavaMethod;
            lookupReferencedType(a0: int, a1: int): JavaType;
            lookupSignature(a0: int): Signature;
            lookupType(a0: int, a1: int): JavaType;
            lookupUtf8(a0: int): string;
          }
          interface ConstantPool extends CombineTypes<[_ConstantPool, java.lang.Object]> {}
          interface _ConstantPool$BootstrapMethodInvocation$$static extends ClassLike {
          }
          let ConstantPool$BootstrapMethodInvocation: _ConstantPool$BootstrapMethodInvocation$$static;
          interface _ConstantPool$BootstrapMethodInvocation {
            getMethod(): ResolvedJavaMethod;
            getName(): string;
            getStaticArguments(): java.util.List<JavaConstant>;
            getType(): JavaConstant;
            isInvokeDynamic(): boolean;
          }
          interface ConstantPool$BootstrapMethodInvocation extends CombineTypes<[_ConstantPool$BootstrapMethodInvocation, java.lang.Object]> {}
          interface _ConstantReflectionProvider$$static extends ClassLike {
          }
          let ConstantReflectionProvider: _ConstantReflectionProvider$$static;
          interface _ConstantReflectionProvider {
            asJavaClass(a0: ResolvedJavaType): JavaConstant;
            asJavaType(a0: Constant): ResolvedJavaType;
            asObjectHub(a0: ResolvedJavaType): Constant;
            boxPrimitive(a0: JavaConstant): JavaConstant;
            constantEquals(a0: Constant, a1: Constant): boolean;
            forString(a0: string): JavaConstant;
            getMemoryAccessProvider(): MemoryAccessProvider;
            getMethodHandleAccess(): MethodHandleAccessProvider;
            readArrayElement(a0: JavaConstant, a1: int): JavaConstant;
            readArrayLength(a0: JavaConstant): int;
            readFieldValue(a0: ResolvedJavaField, a1: JavaConstant): JavaConstant;
            unboxPrimitive(a0: JavaConstant): JavaConstant;
          }
          interface ConstantReflectionProvider extends CombineTypes<[_ConstantReflectionProvider, java.lang.Object]> {}
          interface _DefaultProfilingInfo$$static extends ClassLike {
            get(exceptionSeen: TriState): ProfilingInfo;
            _NO_PROFILING_INFO: ProfilingInfo[];
            _new(exceptionSeen: TriState): DefaultProfilingInfo;
          }
          let DefaultProfilingInfo: _DefaultProfilingInfo$$static;
          interface _DefaultProfilingInfo {
            getBranchTakenProbability(bci: int): double;
            getCodeSize(): int;
            getCompilerIRSize(irType: java.lang.Class<any>): int;
            getDeoptimizationCount(reason: DeoptimizationReason): int;
            getExceptionSeen(bci: int): TriState;
            getExecutionCount(bci: int): int;
            getMethodProfile(bci: int): JavaMethodProfile;
            getNullSeen(bci: int): TriState;
            getSwitchProbabilities(bci: int): double[];
            getTypeProfile(bci: int): JavaTypeProfile;
            isMature(): boolean;
            setCompilerIRSize(irType: java.lang.Class<any>, nodeCount: int): boolean;
            setMature(): void;
            toString(): string;
            _exceptionSeen: TriState;
          }
          interface DefaultProfilingInfo extends CombineTypes<[_DefaultProfilingInfo, java.lang.Object, jdk.vm.ci.meta.ProfilingInfo]> {}
          interface _DeoptimizationAction$$static extends ClassLike {
            valueOf(name: string): DeoptimizationAction;
            values(): DeoptimizationAction[];
            readonly InvalidateRecompile: DeoptimizationAction;
            readonly InvalidateReprofile: DeoptimizationAction;
            readonly InvalidateStopCompiling: DeoptimizationAction;
            readonly None: DeoptimizationAction;
            readonly RecompileIfTooManyDeopts: DeoptimizationAction;
          }
          let DeoptimizationAction: _DeoptimizationAction$$static;
          interface _DeoptimizationAction {
            doesInvalidateCompilation(): boolean;
            _invalidatesCompilation: boolean;
          }
          interface DeoptimizationAction extends CombineTypes<[_DeoptimizationAction]> {}
          interface _DeoptimizationReason$$static extends ClassLike {
            valueOf(name: string): DeoptimizationReason;
            values(): DeoptimizationReason[];
            readonly Aliasing: DeoptimizationReason;
            readonly ArithmeticException: DeoptimizationReason;
            readonly ArrayStoreException: DeoptimizationReason;
            readonly BoundsCheckException: DeoptimizationReason;
            readonly ClassCastException: DeoptimizationReason;
            readonly JavaSubroutineMismatch: DeoptimizationReason;
            readonly LoopLimitCheck: DeoptimizationReason;
            readonly None: DeoptimizationReason;
            readonly NotCompiledExceptionHandler: DeoptimizationReason;
            readonly NullCheckException: DeoptimizationReason;
            readonly OptimizedTypeCheckViolated: DeoptimizationReason;
            readonly RuntimeConstraint: DeoptimizationReason;
            readonly TransferToInterpreter: DeoptimizationReason;
            readonly TypeCheckedInliningViolated: DeoptimizationReason;
            readonly UnreachedCode: DeoptimizationReason;
            readonly Unresolved: DeoptimizationReason;
          }
          let DeoptimizationReason: _DeoptimizationReason$$static;
          interface _DeoptimizationReason {
          }
          interface DeoptimizationReason extends CombineTypes<[_DeoptimizationReason]> {}
          interface _EncodedSpeculationReason$$static extends ClassLike {
            _addNonNullObject(encoding: SpeculationLog$SpeculationReasonEncoding, o: any): void;
            new(groupId: int, groupName: string, context: any[]): EncodedSpeculationReason;
          }
          let EncodedSpeculationReason: _EncodedSpeculationReason$$static;
          interface _EncodedSpeculationReason {
            encode(encodingSupplier: java.util.function.Supplier<SpeculationLog$SpeculationReasonEncoding>): SpeculationLog$SpeculationReasonEncoding;
            equals(obj: any): boolean;
            hashCode(): int;
            toString(): string;
            _context: any[];
            _encoding: SpeculationLog$SpeculationReasonEncoding;
            _groupId: int;
            _groupName: string;
          }
          interface EncodedSpeculationReason extends CombineTypes<[_EncodedSpeculationReason, jdk.vm.ci.meta.SpeculationLog$SpeculationReason, java.lang.Object]> {}
          interface _EnumData$$static extends ClassLike {
            new(type: JavaType, name: string): EnumData;
          }
          let EnumData: _EnumData$$static;
          interface _EnumData {
            equals(obj: any): boolean;
            getEnumType(): JavaType;
            getName(): string;
            hashCode(): int;
            toString(): string;
            _name: string;
            _type: JavaType;
          }
          interface EnumData extends CombineTypes<[_EnumData, java.lang.Object]> {}
          interface _ErrorData$$static extends ClassLike {
            new(description: string): ErrorData;
          }
          let ErrorData: _ErrorData$$static;
          interface _ErrorData {
            equals(obj: any): boolean;
            hashCode(): int;
            toString(): string;
            _description: string;
          }
          interface ErrorData extends CombineTypes<[_ErrorData, java.lang.Object]> {}
          interface _ExceptionHandler$$static extends ClassLike {
            new(startBCI: int, endBCI: int, catchBCI: int, catchTypeCPI: int, catchType: JavaType): ExceptionHandler;
          }
          let ExceptionHandler: _ExceptionHandler$$static;
          interface _ExceptionHandler {
            catchTypeCPI(): int;
            equals(obj: any): boolean;
            getCatchType(): JavaType;
            getEndBCI(): int;
            getHandlerBCI(): int;
            getStartBCI(): int;
            hashCode(): int;
            isCatchAll(): boolean;
            toString(): string;
            _catchType: JavaType;
            _catchTypeCPI: int;
            _endBCI: int;
            _handlerBCI: int;
            _startBCI: int;
          }
          interface ExceptionHandler extends CombineTypes<[_ExceptionHandler, java.lang.Object]> {}
          interface _InvokeTarget$$static extends ClassLike {
          }
          let InvokeTarget: _InvokeTarget$$static;
          interface _InvokeTarget {
          }
          interface InvokeTarget extends CombineTypes<[_InvokeTarget, java.lang.Object]> {}
          interface _JavaConstant$$static extends ClassLike {
            defaultForKind(kind: JavaKind): JavaConstant;
            forBoolean(i: boolean): PrimitiveConstant;
            forBoxedPrimitive(value: any): PrimitiveConstant;
            forByte(i: byte): PrimitiveConstant;
            forChar(i: char): PrimitiveConstant;
            forDouble(d: double): PrimitiveConstant;
            forFloat(f: float): PrimitiveConstant;
            forIllegal(): PrimitiveConstant;
            forInt(i: int): PrimitiveConstant;
            forIntegerKind(kind: JavaKind, i: long): PrimitiveConstant;
            forLong(i: long): PrimitiveConstant;
            forPrimitive(typeChar: char, rawValue: long): PrimitiveConstant;
            forPrimitive(kind: JavaKind, rawValue: long): PrimitiveConstant;
            forPrimitiveInt(bits: int, i: long): PrimitiveConstant;
            forShort(i: short): PrimitiveConstant;
            isNull(c: Constant): boolean;
            toString(constant: JavaConstant): string;
            readonly DOUBLE_0: PrimitiveConstant;
            readonly DOUBLE_1: PrimitiveConstant;
            readonly FALSE: PrimitiveConstant;
            readonly FLOAT_0: PrimitiveConstant;
            readonly FLOAT_1: PrimitiveConstant;
            readonly ILLEGAL: PrimitiveConstant;
            readonly INT_0: PrimitiveConstant;
            readonly INT_1: PrimitiveConstant;
            readonly INT_2: PrimitiveConstant;
            readonly INT_MINUS_1: PrimitiveConstant;
            readonly LONG_0: PrimitiveConstant;
            readonly LONG_1: PrimitiveConstant;
            readonly NULL_POINTER: JavaConstant;
            readonly TRUE: PrimitiveConstant;
          }
          let JavaConstant: _JavaConstant$$static;
          interface _JavaConstant {
            asBoolean(): boolean;
            asBoxedPrimitive(): any;
            asDouble(): double;
            asFloat(): float;
            asInt(): int;
            asLong(): long;
            getJavaKind(): JavaKind;
            isDefaultForKind(): boolean;
            isNonNull(): boolean;
            isNull(): boolean;
            toValueString(): string;
          }
          interface JavaConstant extends CombineTypes<[_JavaConstant, jdk.vm.ci.meta.JavaValue, jdk.vm.ci.meta.Constant, java.lang.Object]> {}
          interface _JavaField$$static extends ClassLike {
          }
          let JavaField: _JavaField$$static;
          interface _JavaField {
            format(format: string): string;
            getDeclaringClass(): JavaType;
            getJavaKind(): JavaKind;
            getName(): string;
            getType(): JavaType;
          }
          interface JavaField extends CombineTypes<[_JavaField, java.lang.Object]> {}
          interface _JavaKind$$static extends ClassLike {
            _formatArray(array: any): string;
            fromJavaClass(klass: java.lang.Class<any>): JavaKind;
            fromPrimitiveOrVoidTypeChar(ch: char): JavaKind;
            fromTypeString(typeString: string): JavaKind;
            fromWordSize(wordSizeInBytes: int): JavaKind;
            _isToStringSafe(c: java.lang.Class<any>): boolean;
            valueOf(name: string): JavaKind;
            values(): JavaKind[];
            readonly Boolean: JavaKind;
            readonly Byte: JavaKind;
            readonly Char: JavaKind;
            readonly Double: JavaKind;
            readonly Float: JavaKind;
            readonly Illegal: JavaKind;
            readonly Int: JavaKind;
            readonly Long: JavaKind;
            _MAX_FORMAT_ARRAY_LENGTH: int;
            readonly Object: JavaKind;
            readonly Short: JavaKind;
            readonly Void: JavaKind;
          }
          let JavaKind: _JavaKind$$static;
          interface _JavaKind {
            format(value: any): string;
            getBasicType(): int;
            getBitCount(): int;
            getByteCount(): int;
            getJavaName(): string;
            getMaxValue(): long;
            getMinValue(): long;
            getSlotCount(): int;
            getStackKind(): JavaKind;
            getTypeChar(): char;
            isNumericFloat(): boolean;
            isNumericInteger(): boolean;
            isObject(): boolean;
            isPrimitive(): boolean;
            isUnsigned(): boolean;
            needsTwoSlots(): boolean;
            toBoxedJavaClass(): java.lang.Class<any>;
            toJavaClass(): java.lang.Class<any>;
            toString(): string;
            _basicType: int;
            _boxedJavaClass: java.lang.Class<any>;
            _isStackInt: boolean;
            _javaName: string;
            _primitiveJavaClass: java.lang.Class<any>;
            _slotCount: int;
            _typeChar: char;
          }
          interface JavaKind extends CombineTypes<[_JavaKind]> {}
          interface _JavaKind$FormatWithToString$$static extends ClassLike {
          }
          let JavaKind$FormatWithToString: _JavaKind$FormatWithToString$$static;
          interface _JavaKind$FormatWithToString {
          }
          interface JavaKind$FormatWithToString extends CombineTypes<[_JavaKind$FormatWithToString, java.lang.Object]> {}
          interface _JavaMethod$$static extends ClassLike {
          }
          let JavaMethod: _JavaMethod$$static;
          interface _JavaMethod {
            format(format: string): string;
            getDeclaringClass(): JavaType;
            getName(): string;
            getSignature(): Signature;
          }
          interface JavaMethod extends CombineTypes<[_JavaMethod, java.lang.Object]> {}
          interface _JavaMethodProfile$$static extends ClassLike {
            new(notRecordedProbability: double, a1: JavaMethodProfile$ProfiledMethod[]): JavaMethodProfile;
          }
          let JavaMethodProfile: _JavaMethodProfile$$static;
          interface _JavaMethodProfile {
            getMethods(): JavaMethodProfile$ProfiledMethod[];
          }
          interface JavaMethodProfile extends CombineTypes<[_JavaMethodProfile, AbstractJavaProfile<JavaMethodProfile$ProfiledMethod,ResolvedJavaMethod>]> {}
          interface _JavaMethodProfile$ProfiledMethod$$static extends ClassLike {
            new(method: ResolvedJavaMethod, probability: double): JavaMethodProfile$ProfiledMethod;
          }
          let JavaMethodProfile$ProfiledMethod: _JavaMethodProfile$ProfiledMethod$$static;
          interface _JavaMethodProfile$ProfiledMethod {
            getMethod(): ResolvedJavaMethod;
            toString(): string;
          }
          interface JavaMethodProfile$ProfiledMethod extends CombineTypes<[_JavaMethodProfile$ProfiledMethod, AbstractProfiledItem<ResolvedJavaMethod>]> {}
          interface _JavaType$$static extends ClassLike {
          }
          let JavaType: _JavaType$$static;
          interface _JavaType {
            getArrayClass(): JavaType;
            getComponentType(): JavaType;
            getElementalType(): JavaType;
            getJavaKind(): JavaKind;
            getName(): string;
            getUnqualifiedName(): string;
            isArray(): boolean;
            resolve(a0: ResolvedJavaType): ResolvedJavaType;
            toClassName(): string;
            toJavaName(): string;
            toJavaName(qualified: boolean): string;
          }
          interface JavaType extends CombineTypes<[_JavaType, java.lang.Object]> {}
          interface _JavaTypeProfile$$static extends ClassLike {
            _EMPTY_ARRAY: JavaTypeProfile$ProfiledType[];
            new(nullSeen: TriState, notRecordedProbability: double, a2: JavaTypeProfile$ProfiledType[]): JavaTypeProfile;
          }
          let JavaTypeProfile: _JavaTypeProfile$$static;
          interface _JavaTypeProfile {
            allTypesRecorded(): boolean;
            asSingleType(): ResolvedJavaType;
            _createAdjustedProfile(result: java.util.ArrayList<JavaTypeProfile$ProfiledType>, newNullSeen: TriState, newNotRecorded: double): JavaTypeProfile;
            equals(other: any): boolean;
            getNullSeen(): TriState;
            getTypes(): JavaTypeProfile$ProfiledType[];
            hashCode(): int;
            restrict(otherProfile: JavaTypeProfile): JavaTypeProfile;
            restrict(declaredType: ResolvedJavaType, nonNull: boolean): JavaTypeProfile;
            toString(): string;
            _nullSeen: TriState;
          }
          interface JavaTypeProfile extends CombineTypes<[_JavaTypeProfile, AbstractJavaProfile<JavaTypeProfile$ProfiledType,ResolvedJavaType>]> {}
          interface _JavaTypeProfile$ProfiledType$$static extends ClassLike {
            new(type: ResolvedJavaType, probability: double): JavaTypeProfile$ProfiledType;
          }
          let JavaTypeProfile$ProfiledType: _JavaTypeProfile$ProfiledType$$static;
          interface _JavaTypeProfile$ProfiledType {
            getType(): ResolvedJavaType;
            toString(): string;
          }
          interface JavaTypeProfile$ProfiledType extends CombineTypes<[_JavaTypeProfile$ProfiledType, AbstractProfiledItem<ResolvedJavaType>]> {}
          interface _JavaValue$$static extends ClassLike {
          }
          let JavaValue: _JavaValue$$static;
          interface _JavaValue {
          }
          interface JavaValue extends CombineTypes<[_JavaValue, java.lang.Object]> {}
          interface _LineNumberTable$$static extends ClassLike {
            new(lineNumbers: int[], bcis: int[]): LineNumberTable;
          }
          let LineNumberTable: _LineNumberTable$$static;
          interface _LineNumberTable {
            getBcis(): int[];
            getLineNumber(atBci: int): int;
            getLineNumbers(): int[];
            _bcis: int[];
            _lineNumbers: int[];
          }
          interface LineNumberTable extends CombineTypes<[_LineNumberTable, java.lang.Object]> {}
          interface _Local$$static extends ClassLike {
            new(name: string, type: JavaType, startBci: int, endBci: int, slot: int): Local;
          }
          let Local: _Local$$static;
          interface _Local {
            equals(obj: any): boolean;
            getEndBCI(): int;
            getName(): string;
            getSlot(): int;
            getStartBCI(): int;
            getType(): JavaType;
            hashCode(): int;
            toString(): string;
            _endBci: int;
            _name: string;
            _slot: int;
            _startBci: int;
            _type: JavaType;
          }
          interface Local extends CombineTypes<[_Local, java.lang.Object]> {}
          interface _LocalVariableTable$$static extends ClassLike {
            new(locals: Local[]): LocalVariableTable;
          }
          let LocalVariableTable: _LocalVariableTable$$static;
          interface _LocalVariableTable {
            getLocal(slot: int, bci: int): Local;
            getLocals(): Local[];
            getLocalsAt(bci: int): Local[];
            _locals: Local[];
          }
          interface LocalVariableTable extends CombineTypes<[_LocalVariableTable, java.lang.Object]> {}
          interface _MemoryAccessProvider$$static extends ClassLike {
          }
          let MemoryAccessProvider: _MemoryAccessProvider$$static;
          interface _MemoryAccessProvider {
            readObjectConstant(a0: Constant, a1: long): JavaConstant;
            readPrimitiveConstant(a0: JavaKind, a1: Constant, a2: long, a3: int): JavaConstant;
          }
          interface MemoryAccessProvider extends CombineTypes<[_MemoryAccessProvider, java.lang.Object]> {}
          interface _MetaAccessProvider$$static extends ClassLike {
          }
          let MetaAccessProvider: _MetaAccessProvider$$static;
          interface _MetaAccessProvider {
            decodeDebugId(a0: JavaConstant): int;
            decodeDeoptAction(a0: JavaConstant): DeoptimizationAction;
            decodeDeoptReason(a0: JavaConstant): DeoptimizationReason;
            decodeSpeculation(a0: JavaConstant, a1: SpeculationLog): SpeculationLog$Speculation;
            encodeDeoptActionAndReason(a0: DeoptimizationAction, a1: DeoptimizationReason, a2: int): JavaConstant;
            encodeSpeculation(a0: SpeculationLog$Speculation): JavaConstant;
            getArrayBaseOffset(a0: JavaKind): int;
            getArrayIndexScale(a0: JavaKind): int;
            getMemorySize(a0: JavaConstant): long;
            lookupJavaField(a0: java.lang.reflect.Field): ResolvedJavaField;
            lookupJavaMethod(a0: java.lang.reflect.Executable): ResolvedJavaMethod;
            lookupJavaType(a0: java.lang.Class<any>): ResolvedJavaType;
            lookupJavaType(a0: JavaConstant): ResolvedJavaType;
            lookupJavaTypes(classes: java.lang.Class<any>[]): ResolvedJavaType[];
            parseMethodDescriptor(a0: string): Signature;
          }
          interface MetaAccessProvider extends CombineTypes<[_MetaAccessProvider, java.lang.Object]> {}
          interface _MetaUtil$$static extends ClassLike {
            appendLocation(sb: MetaUtil$stringBuilder, method: ResolvedJavaMethod, bci: int): MetaUtil$stringBuilder;
            _appendProfile(buf: MetaUtil$stringBuilder, profile: AbstractJavaProfile<any,any>, bci: int, type: string, sep: string): void;
            getSimpleName(clazz: java.lang.Class<any>, withEnclosingClass: boolean): string;
            identityHashCodeString(obj: any): string;
            internalNameToJava(name: string, qualified: boolean, classForNameCompatible: boolean): string;
            _replacePackageAndHiddenSeparators(name: string, packageSeparator: MetaUtil$character, hiddenSeparator: MetaUtil$character): string;
            _safeSimpleName(clazz: java.lang.Class<any>): string;
            toInternalName(className: string): string;
            toLocation(method: ResolvedJavaMethod, bci: int): string;
            readonly HIDDEN_SEPARATOR_INTERNAL: char;
            readonly HIDDEN_SEPARATOR_JAVA: char;
            readonly PACKAGE_SEPARATOR_INTERNAL: char;
            readonly PACKAGE_SEPARATOR_JAVA: char;
            new(): MetaUtil;
          }
          let MetaUtil: _MetaUtil$$static;
          interface _MetaUtil {
          }
          interface MetaUtil extends CombineTypes<[_MetaUtil, java.lang.Object]> {}
          interface _MethodHandleAccessProvider$$static extends ClassLike {
          }
          let MethodHandleAccessProvider: _MethodHandleAccessProvider$$static;
          interface _MethodHandleAccessProvider {
            lookupMethodHandleIntrinsic(a0: ResolvedJavaMethod): MethodHandleAccessProvider$IntrinsicMethod;
            resolveInvokeBasicTarget(a0: JavaConstant, a1: boolean): ResolvedJavaMethod;
            resolveLinkToTarget(a0: JavaConstant): ResolvedJavaMethod;
          }
          interface MethodHandleAccessProvider extends CombineTypes<[_MethodHandleAccessProvider, java.lang.Object]> {}
          interface _MethodHandleAccessProvider$IntrinsicMethod$$static extends ClassLike {
            valueOf(name: string): MethodHandleAccessProvider$IntrinsicMethod;
            values(): MethodHandleAccessProvider$IntrinsicMethod[];
            readonly INVOKE_BASIC: MethodHandleAccessProvider$IntrinsicMethod;
            readonly LINK_TO_INTERFACE: MethodHandleAccessProvider$IntrinsicMethod;
            readonly LINK_TO_SPECIAL: MethodHandleAccessProvider$IntrinsicMethod;
            readonly LINK_TO_STATIC: MethodHandleAccessProvider$IntrinsicMethod;
            readonly LINK_TO_VIRTUAL: MethodHandleAccessProvider$IntrinsicMethod;
          }
          let MethodHandleAccessProvider$IntrinsicMethod: _MethodHandleAccessProvider$IntrinsicMethod$$static;
          interface _MethodHandleAccessProvider$IntrinsicMethod {
          }
          interface MethodHandleAccessProvider$IntrinsicMethod extends CombineTypes<[_MethodHandleAccessProvider$IntrinsicMethod]> {}
          interface _ModifiersProvider$$static extends ClassLike {
          }
          let ModifiersProvider: _ModifiersProvider$$static;
          interface _ModifiersProvider {
            getModifiers(): int;
(): int;
            isAbstract(): boolean;
            isConcrete(): boolean;
            isFinalFlagSet(): boolean;
            isInterface(): boolean;
            isNative(): boolean;
            isPackagePrivate(): boolean;
            isPrivate(): boolean;
            isProtected(): boolean;
            isPublic(): boolean;
            isStatic(): boolean;
            isStrict(): boolean;
            isSynchronized(): boolean;
            isTransient(): boolean;
            isVolatile(): boolean;
          }
          interface ModifiersProvider extends CombineTypes<[_ModifiersProvider, java.lang.Object]> {}
          interface _NullConstant$$static extends ClassLike {
            _new(): NullConstant;
          }
          let NullConstant: _NullConstant$$static;
          interface _NullConstant {
            asBoolean(): boolean;
            asBoxedPrimitive(): any;
            asDouble(): double;
            asFloat(): float;
            asInt(): int;
            asLong(): long;
            equals(o: any): boolean;
            getJavaKind(): JavaKind;
            hashCode(): int;
            isDefaultForKind(): boolean;
            isNull(): boolean;
            toString(): string;
            toValueString(): string;
          }
          interface NullConstant extends CombineTypes<[_NullConstant, jdk.vm.ci.meta.JavaConstant, java.lang.Object]> {}
          interface _PlatformKind$$static extends ClassLike {
          }
          let PlatformKind: _PlatformKind$$static;
          interface _PlatformKind {
            getKey(): PlatformKind$Key;
            getSizeInBytes(): int;
            getTypeChar(): char;
            getVectorLength(): int;
            name(): string;
          }
          interface PlatformKind extends CombineTypes<[_PlatformKind, java.lang.Object]> {}
          interface _PlatformKind$EnumKey$$static<E> extends ClassLike {
            new(e: java.lang.Enum<E>): PlatformKind$EnumKey<E>;
          }
          let PlatformKind$EnumKey: _PlatformKind$EnumKey$$static<E>;
          interface _PlatformKind$EnumKey<E> {
            equals(obj: any): boolean;
            hashCode(): int;
            _e: java.lang.Enum<E>;
          }
          interface PlatformKind$EnumKey<E> extends CombineTypes<[_PlatformKind$EnumKey<E>, PlatformKind$Key, java.lang.Object]> {}
          interface _PlatformKind$Key$$static extends ClassLike {
          }
          let PlatformKind$Key: _PlatformKind$Key$$static;
          interface _PlatformKind$Key {
          }
          interface PlatformKind$Key extends CombineTypes<[_PlatformKind$Key, java.lang.Object]> {}
          interface _PrimitiveConstant$$static extends ClassLike {
            _forTypeChar(kind: char, i: long): PrimitiveConstant;
            _new(kind: JavaKind, primitive: long): PrimitiveConstant;
          }
          let PrimitiveConstant: _PrimitiveConstant$$static;
          interface _PrimitiveConstant {
            asBoolean(): boolean;
            asBoxedPrimitive(): any;
            asDouble(): double;
            asFloat(): float;
            asInt(): int;
            asLong(): long;
            equals(o: any): boolean;
            getJavaKind(): JavaKind;
            getRawValue(): long;
            getSerializedSize(): int;
            hashCode(): int;
            isDefaultForKind(): boolean;
            isNull(): boolean;
            serialize(buffer: java.nio.ByteBuffer): void;
            toString(): string;
            _kind: JavaKind;
            _primitive: long;
          }
          interface PrimitiveConstant extends CombineTypes<[_PrimitiveConstant, jdk.vm.ci.meta.JavaConstant, jdk.vm.ci.meta.SerializableConstant, java.lang.Object]> {}
          interface _ProfilingInfo$$static extends ClassLike {
          }
          let ProfilingInfo: _ProfilingInfo$$static;
          interface _ProfilingInfo {
            getBranchTakenProbability(a0: int): double;
            getCodeSize(): int;
            getCompilerIRSize(a0: java.lang.Class<any>): int;
            getDeoptimizationCount(a0: DeoptimizationReason): int;
            getExceptionSeen(a0: int): TriState;
            getExecutionCount(a0: int): int;
            getMethodProfile(a0: int): JavaMethodProfile;
            getNullSeen(a0: int): TriState;
            getSwitchProbabilities(a0: int): double[];
            getTypeProfile(a0: int): JavaTypeProfile;
            isMature(): boolean;
            setCompilerIRSize(a0: java.lang.Class<any>, a1: int): boolean;
            setMature(): void;
            toString(method: ResolvedJavaMethod, sep: string): string;
          }
          interface ProfilingInfo extends CombineTypes<[_ProfilingInfo, java.lang.Object]> {}
          interface _RawConstant$$static extends ClassLike {
            new(rawValue: long): RawConstant;
          }
          let RawConstant: _RawConstant$$static;
          interface _RawConstant {
          }
          interface RawConstant extends CombineTypes<[_RawConstant, jdk.vm.ci.meta.PrimitiveConstant]> {}
          interface _ResolvedJavaField$$static extends ClassLike {
          }
          let ResolvedJavaField: _ResolvedJavaField$$static;
          interface _ResolvedJavaField {
            getConstantValue(): JavaConstant;
            getDeclaringClass(): ResolvedJavaType;
            getDeclaringClass(): JavaType;
            getModifiers(): int;
            getOffset(): int;
            isFinal(): boolean;
            isInternal(): boolean;
            isSynthetic(): boolean;
          }
          interface ResolvedJavaField extends CombineTypes<[_ResolvedJavaField, jdk.vm.ci.meta.Annotated, java.lang.Object, jdk.vm.ci.meta.JavaField, jdk.vm.ci.meta.ModifiersProvider, java.lang.reflect.AnnotatedElement]> {}
          interface _ResolvedJavaMethod$$static extends ClassLike {
          }
          let ResolvedJavaMethod: _ResolvedJavaMethod$$static;
          interface _ResolvedJavaMethod {
            asStackTraceElement(a0: int): java.lang.StackTraceElement;
            canBeInlined(): boolean;
            canBeStaticallyBound(): boolean;
            getCode(): byte[];
            getCodeSize(): int;
            getConstantPool(): ConstantPool;
            getDeclaringClass(): ResolvedJavaType;
            getDeclaringClass(): JavaType;
            getEncoding(): Constant;
            getExceptionHandlers(): ExceptionHandler[];
            getGenericParameterTypes(): java.lang.reflect.Type[];
            getLineNumberTable(): LineNumberTable;
            getLocalVariableTable(): LocalVariableTable;
            getMaxLocals(): int;
            getMaxStackSize(): int;
            getParameterAnnotation<T>(annotationClass: java.lang.Class<T>, parameterIndex: int): T;
            getParameterAnnotations(): java.lang.annotation.Annotation[][];
            getParameterAnnotations<T>(annotationClass: java.lang.Class<T>): T[];
            getParameters(): ResolvedJavaMethod$Parameter[];
            getProfilingInfo(): ProfilingInfo;
            getProfilingInfo(a0: boolean, a1: boolean): ProfilingInfo;
            getSpeculationLog(): SpeculationLog;
            hasBytecodes(): boolean;
            hasNeverInlineDirective(): boolean;
            hasReceiver(): boolean;
            isBridge(): boolean;
            isClassInitializer(): boolean;
            isConstructor(): boolean;
            isDefault(): boolean;
            isFinal(): boolean;
            isInVirtualMethodTable(a0: ResolvedJavaType): boolean;
            isJavaLangObjectInit(): boolean;
            isSynthetic(): boolean;
            isVarArgs(): boolean;
            reprofile(): void;
            shouldBeInlined(): boolean;
            toParameterTypes(): JavaType[];
          }
          interface ResolvedJavaMethod extends CombineTypes<[_ResolvedJavaMethod, jdk.vm.ci.meta.JavaMethod, jdk.vm.ci.meta.Annotated, java.lang.Object, jdk.vm.ci.meta.InvokeTarget, jdk.vm.ci.meta.ModifiersProvider, java.lang.reflect.AnnotatedElement]> {}
          interface _ResolvedJavaMethod$Parameter$$static extends ClassLike {
            new(name: string, modifiers: int, method: ResolvedJavaMethod, index: int): ResolvedJavaMethod$Parameter;
          }
          let ResolvedJavaMethod$Parameter: _ResolvedJavaMethod$Parameter$$static;
          interface _ResolvedJavaMethod$Parameter {
            equals(obj: any): boolean;
            getAnnotation<T>(annotationClass: java.lang.Class<T>): T;
            getAnnotations(): java.lang.annotation.Annotation[];
            getDeclaredAnnotations(): java.lang.annotation.Annotation[];
            getDeclaringMethod(): ResolvedJavaMethod;
            getKind(): JavaKind;
            getModifiers(): int;
            getName(): string;
            getParameterizedType(): java.lang.reflect.Type;
            getType(): JavaType;
            hashCode(): int;
            isNamePresent(): boolean;
            isVarArgs(): boolean;
            toString(): string;
            _index: int;
            _method: ResolvedJavaMethod;
            _modifiers: int;
            _name: string;
          }
          interface ResolvedJavaMethod$Parameter extends CombineTypes<[_ResolvedJavaMethod$Parameter, java.lang.Object, java.lang.reflect.AnnotatedElement]> {}
          interface _ResolvedJavaType$$static extends ClassLike {
          }
          let ResolvedJavaType: _ResolvedJavaType$$static;
          interface _ResolvedJavaType {
            declaresDefaultMethods(): boolean;
            findInstanceFieldWithOffset(a0: long, a1: JavaKind): ResolvedJavaField;
            findLeafConcreteSubtype(): Assumptions$AssumptionResult<ResolvedJavaType>;
            findLeastCommonAncestor(a0: ResolvedJavaType): ResolvedJavaType;
            findMethod(name: string, signature: Signature): ResolvedJavaMethod;
            findUniqueConcreteMethod(a0: ResolvedJavaMethod): Assumptions$AssumptionResult<ResolvedJavaMethod>;
            getArrayClass(): ResolvedJavaType;
            getArrayClass(): JavaType;
            getClassInitializer(): ResolvedJavaMethod;
            getComponentType(): ResolvedJavaType;
            getComponentType(): JavaType;
            getDeclaredConstructors(): ResolvedJavaMethod[];
            getDeclaredConstructors(forceLink: boolean): ResolvedJavaMethod[];
            getDeclaredMethods(): ResolvedJavaMethod[];
            getDeclaredMethods(forceLink: boolean): ResolvedJavaMethod[];
            getElementalType(): ResolvedJavaType;
            getElementalType(): JavaType;
            getEnclosingType(): ResolvedJavaType;
            getHostClass(): ResolvedJavaType;
            getInstanceFields(a0: boolean): ResolvedJavaField[];
            getInterfaces(): ResolvedJavaType[];
            getSingleImplementor(): ResolvedJavaType;
            getSourceFileName(): string;
            getStaticFields(): ResolvedJavaField[];
            getSuperclass(): ResolvedJavaType;
            hasDefaultMethods(): boolean;
            hasFinalizableSubclass(): Assumptions$AssumptionResult<boolean>;
            hasFinalizer(): boolean;
            initialize(): void;
            isAssignableFrom(a0: ResolvedJavaType): boolean;
            isCloneableWithAllocation(): boolean;
            isEnum(): boolean;
            isInitialized(): boolean;
            isInstance(a0: JavaConstant): boolean;
            isInstanceClass(): boolean;
            isInterface(): boolean;
            isJavaLangObject(): boolean;
            isLeaf(): boolean;
            isLinked(): boolean;
            isLocal(): boolean;
            isMember(): boolean;
            isPrimitive(): boolean;
            link(): void;
            lookupType(unresolvedJavaType: UnresolvedJavaType, resolve: boolean): ResolvedJavaType;
            resolveConcreteMethod(method: ResolvedJavaMethod, callerType: ResolvedJavaType): ResolvedJavaMethod;
            resolveField(unresolvedJavaField: UnresolvedJavaField, accessingClass: ResolvedJavaType): ResolvedJavaField;
            resolveMethod(a0: ResolvedJavaMethod, a1: ResolvedJavaType): ResolvedJavaMethod;
          }
          interface ResolvedJavaType extends CombineTypes<[_ResolvedJavaType, jdk.vm.ci.meta.JavaType, jdk.vm.ci.meta.Annotated, java.lang.Object, jdk.vm.ci.meta.ModifiersProvider, java.lang.reflect.AnnotatedElement]> {}
          interface _SerializableConstant$$static extends ClassLike {
          }
          let SerializableConstant: _SerializableConstant$$static;
          interface _SerializableConstant {
            getSerializedSize(): int;
            serialize(a0: java.nio.ByteBuffer): void;
          }
          interface SerializableConstant extends CombineTypes<[_SerializableConstant, jdk.vm.ci.meta.Constant, java.lang.Object]> {}
          interface _Signature$$static extends ClassLike {
          }
          let Signature: _Signature$$static;
          interface _Signature {
            getParameterCount(a0: boolean): int;
            getParameterKind(index: int): JavaKind;
            getParameterType(a0: int, a1: ResolvedJavaType): JavaType;
            getReturnKind(): JavaKind;
            getReturnType(a0: ResolvedJavaType): JavaType;
            toMethodDescriptor(): string;
            toParameterKinds(receiver: boolean): JavaKind[];
            toParameterTypes(receiverType: JavaType): JavaType[];
          }
          interface Signature extends CombineTypes<[_Signature, java.lang.Object]> {}
          interface _SpeculationLog$$static extends ClassLike {
            readonly NO_SPECULATION: SpeculationLog$Speculation;
          }
          let SpeculationLog: _SpeculationLog$$static;
          interface _SpeculationLog {
            collectFailedSpeculations(): void;
            hasSpeculations(): boolean;
            lookupSpeculation(a0: JavaConstant): SpeculationLog$Speculation;
            maySpeculate(a0: SpeculationLog$SpeculationReason): boolean;
            speculate(a0: SpeculationLog$SpeculationReason): SpeculationLog$Speculation;
          }
          interface SpeculationLog extends CombineTypes<[_SpeculationLog, java.lang.Object]> {}
          interface _SpeculationLog$NoSpeculationReason$$static extends ClassLike {
            new(): SpeculationLog$NoSpeculationReason;
          }
          let SpeculationLog$NoSpeculationReason: _SpeculationLog$NoSpeculationReason$$static;
          interface _SpeculationLog$NoSpeculationReason {
          }
          interface SpeculationLog$NoSpeculationReason extends CombineTypes<[_SpeculationLog$NoSpeculationReason, jdk.vm.ci.meta.SpeculationLog$SpeculationReason, java.lang.Object]> {}
          interface _SpeculationLog$Speculation$$static extends ClassLike {
            new(reason: SpeculationLog$SpeculationReason): SpeculationLog$Speculation;
          }
          let SpeculationLog$Speculation: _SpeculationLog$Speculation$$static;
          interface _SpeculationLog$Speculation {
            equals(obj: any): boolean;
            getReason(): SpeculationLog$SpeculationReason;
            hashCode(): int;
            toString(): string;
            _reason: SpeculationLog$SpeculationReason;
          }
          interface SpeculationLog$Speculation extends CombineTypes<[_SpeculationLog$Speculation, java.lang.Object]> {}
          interface _SpeculationLog$SpeculationReason$$static extends ClassLike {
          }
          let SpeculationLog$SpeculationReason: _SpeculationLog$SpeculationReason$$static;
          interface _SpeculationLog$SpeculationReason {
            encode(encodingSupplier: java.util.function.Supplier<SpeculationLog$SpeculationReasonEncoding>): SpeculationLog$SpeculationReasonEncoding;
          }
          interface SpeculationLog$SpeculationReason extends CombineTypes<[_SpeculationLog$SpeculationReason, java.lang.Object]> {}
          interface _SpeculationLog$SpeculationReasonEncoding$$static extends ClassLike {
          }
          let SpeculationLog$SpeculationReasonEncoding: _SpeculationLog$SpeculationReasonEncoding$$static;
          interface _SpeculationLog$SpeculationReasonEncoding {
            addByte(a0: int): void;
            addField(field: ResolvedJavaField): void;
            addInt(a0: int): void;
            addLong(a0: long): void;
            addMethod(a0: ResolvedJavaMethod): void;
            addShort(a0: int): void;
            addString(a0: string): void;
            addType(a0: ResolvedJavaType): void;
          }
          interface SpeculationLog$SpeculationReasonEncoding extends CombineTypes<[_SpeculationLog$SpeculationReasonEncoding, java.lang.Object]> {}
          interface _SuppressFBWarnings$$static extends ClassLike {
          }
          let SuppressFBWarnings: _SuppressFBWarnings$$static;
          interface _SuppressFBWarnings {
            justification(): string;
            value(): string[];
          }
          interface SuppressFBWarnings extends CombineTypes<[_SuppressFBWarnings, java.lang.annotation.Annotation, java.lang.Object]> {}
          interface _TriState$$static extends ClassLike {
            get(value: boolean): TriState;
            merge(a: TriState, b: TriState): TriState;
            valueOf(name: string): TriState;
            values(): TriState[];
            readonly FALSE: TriState;
            readonly TRUE: TriState;
            readonly UNKNOWN: TriState;
          }
          let TriState: _TriState$$static;
          interface _TriState {
            isFalse(): boolean;
            isKnown(): boolean;
            isTrue(): boolean;
            isUnknown(): boolean;
            toBoolean(): boolean;
          }
          interface TriState extends CombineTypes<[_TriState]> {}
          interface _UnresolvedJavaField$$static extends ClassLike {
            new(holder: JavaType, name: string, type: JavaType): UnresolvedJavaField;
          }
          let UnresolvedJavaField: _UnresolvedJavaField$$static;
          interface _UnresolvedJavaField {
            equals(obj: any): boolean;
            getDeclaringClass(): JavaType;
            getName(): string;
            getType(): JavaType;
            hashCode(): int;
            resolve(accessingClass: ResolvedJavaType): ResolvedJavaField;
            toString(): string;
            _holder: JavaType;
            _name: string;
            _type: JavaType;
          }
          interface UnresolvedJavaField extends CombineTypes<[_UnresolvedJavaField, java.lang.Object, jdk.vm.ci.meta.JavaField]> {}
          interface _UnresolvedJavaMethod$$static extends ClassLike {
            new(name: string, signature: Signature, holder: JavaType): UnresolvedJavaMethod;
          }
          let UnresolvedJavaMethod: _UnresolvedJavaMethod$$static;
          interface _UnresolvedJavaMethod {
            equals(obj: any): boolean;
            getDeclaringClass(): JavaType;
            getName(): string;
            getSignature(): Signature;
            hashCode(): int;
            _holder: JavaType;
            _name: string;
            _signature: Signature;
          }
          interface UnresolvedJavaMethod extends CombineTypes<[_UnresolvedJavaMethod, jdk.vm.ci.meta.JavaMethod, java.lang.Object]> {}
          interface _UnresolvedJavaType$$static extends ClassLike {
            create(name: string): UnresolvedJavaType;
          }
          let UnresolvedJavaType: _UnresolvedJavaType$$static;
          interface _UnresolvedJavaType {
            equals(obj: any): boolean;
            getArrayClass(): JavaType;
            getComponentType(): JavaType;
            getJavaKind(): JavaKind;
            getName(): string;
            hashCode(): int;
            resolve(accessingClass: ResolvedJavaType): ResolvedJavaType;
            toString(): string;
            _name: string;
          }
          interface UnresolvedJavaType extends CombineTypes<[_UnresolvedJavaType, jdk.vm.ci.meta.JavaType, java.lang.Object]> {}
          interface _VMConstant$$static extends ClassLike {
          }
          let VMConstant: _VMConstant$$static;
          interface _VMConstant {
          }
          interface VMConstant extends CombineTypes<[_VMConstant, jdk.vm.ci.meta.Constant, java.lang.Object]> {}
          interface _Value$$static extends ClassLike {
            readonly ILLEGAL: AllocatableValue;
            readonly NO_VALUES: Value[];
            _new(valueKind: ValueKind<any>): Value;
          }
          let Value: _Value$$static;
          interface _Value {
            equals(obj: any): boolean;
            _getKindSuffix(): string;
            getPlatformKind(): PlatformKind;
            getValueKind(): ValueKind<any>;
            getValueKind<K>(cls: java.lang.Class<K>): K;
            hashCode(): int;
            identityEquals(other: Value): boolean;
            _valueKind: ValueKind<any>;
          }
          interface Value extends CombineTypes<[_Value, java.lang.Object]> {}
          interface _Value$IllegalValue$$static extends ClassLike {
          }
          let Value$IllegalValue: _Value$IllegalValue$$static;
          interface _Value$IllegalValue {
            equals(other: any): boolean;
            toString(): string;
          }
          interface Value$IllegalValue extends CombineTypes<[_Value$IllegalValue, jdk.vm.ci.meta.AllocatableValue]> {}
          interface _ValueKind$$static<K> extends ClassLike {
            readonly Illegal: ValueKind<any>;
            new(platformKind: PlatformKind): ValueKind<K>;
          }
          let ValueKind: _ValueKind$$static<K>;
          interface _ValueKind<K> {
            changeType(a0: PlatformKind): K;
(a0: PlatformKind): K;
            getKindSuffix(): string;
            getPlatformKind(): PlatformKind;
            _platformKind: PlatformKind;
          }
          interface ValueKind<K> extends CombineTypes<[_ValueKind<K>, java.lang.Object]> {}
          interface _ValueKind$IllegalKind$$static extends ClassLike {
            valueOf(name: string): ValueKind$IllegalKind;
            values(): ValueKind$IllegalKind[];
            readonly ILLEGAL: ValueKind$IllegalKind;
          }
          let ValueKind$IllegalKind: _ValueKind$IllegalKind$$static;
          interface _ValueKind$IllegalKind {
            getKey(): PlatformKind$Key;
            getSizeInBytes(): int;
            getTypeChar(): char;
            getVectorLength(): int;
            _key: PlatformKind$EnumKey<ValueKind$IllegalKind>;
          }
          interface ValueKind$IllegalKind extends CombineTypes<[_ValueKind$IllegalKind, PlatformKind]> {}
          interface _ValueKind$IllegalValueKind$$static extends ClassLike {
            _new(): ValueKind$IllegalValueKind;
          }
          let ValueKind$IllegalValueKind: _ValueKind$IllegalValueKind$$static;
          interface _ValueKind$IllegalValueKind {
            changeType(newPlatformKind: PlatformKind): ValueKind$IllegalValueKind;
            changeType(a0: PlatformKind): ValueKind;
            toString(): string;
          }
          interface ValueKind$IllegalValueKind extends CombineTypes<[_ValueKind$IllegalValueKind, ValueKind<ValueKind$IllegalValueKind>]> {}
        }
        module riscv64 {
          interface _RISCV64$$static extends ClassLike {
            readonly CPU: ci.code.Register$RegisterCategory;
            readonly FP: ci.code.Register$RegisterCategory;
            readonly allRegisters: ci.code.RegisterArray;
            readonly cpuRegisters: ci.code.RegisterArray;
            readonly f0: ci.code.Register;
            readonly f1: ci.code.Register;
            readonly f10: ci.code.Register;
            readonly f11: ci.code.Register;
            readonly f12: ci.code.Register;
            readonly f13: ci.code.Register;
            readonly f14: ci.code.Register;
            readonly f15: ci.code.Register;
            readonly f16: ci.code.Register;
            readonly f17: ci.code.Register;
            readonly f18: ci.code.Register;
            readonly f19: ci.code.Register;
            readonly f2: ci.code.Register;
            readonly f20: ci.code.Register;
            readonly f21: ci.code.Register;
            readonly f22: ci.code.Register;
            readonly f23: ci.code.Register;
            readonly f24: ci.code.Register;
            readonly f25: ci.code.Register;
            readonly f26: ci.code.Register;
            readonly f27: ci.code.Register;
            readonly f28: ci.code.Register;
            readonly f29: ci.code.Register;
            readonly f3: ci.code.Register;
            readonly f30: ci.code.Register;
            readonly f31: ci.code.Register;
            readonly f4: ci.code.Register;
            readonly f5: ci.code.Register;
            readonly f6: ci.code.Register;
            readonly f7: ci.code.Register;
            readonly f8: ci.code.Register;
            readonly f9: ci.code.Register;
            readonly fpRegisters: ci.code.RegisterArray;
            readonly x0: ci.code.Register;
            readonly x1: ci.code.Register;
            readonly x10: ci.code.Register;
            readonly x11: ci.code.Register;
            readonly x12: ci.code.Register;
            readonly x13: ci.code.Register;
            readonly x14: ci.code.Register;
            readonly x15: ci.code.Register;
            readonly x16: ci.code.Register;
            readonly x17: ci.code.Register;
            readonly x18: ci.code.Register;
            readonly x19: ci.code.Register;
            readonly x2: ci.code.Register;
            readonly x20: ci.code.Register;
            readonly x21: ci.code.Register;
            readonly x22: ci.code.Register;
            readonly x23: ci.code.Register;
            readonly x24: ci.code.Register;
            readonly x25: ci.code.Register;
            readonly x26: ci.code.Register;
            readonly x27: ci.code.Register;
            readonly x28: ci.code.Register;
            readonly x29: ci.code.Register;
            readonly x3: ci.code.Register;
            readonly x30: ci.code.Register;
            readonly x31: ci.code.Register;
            readonly x4: ci.code.Register;
            readonly x5: ci.code.Register;
            readonly x6: ci.code.Register;
            readonly x7: ci.code.Register;
            readonly x8: ci.code.Register;
            readonly x9: ci.code.Register;
            new(features: java.util.EnumSet<RISCV64$CPUFeature>, flags: java.util.EnumSet<RISCV64$Flag>): RISCV64;
          }
          let RISCV64: _RISCV64$$static;
          interface _RISCV64 {
            canStoreValue(category: ci.code.Register$RegisterCategory, platformKind: ci.meta.PlatformKind): boolean;
            getFeatures(): java.util.EnumSet<RISCV64$CPUFeature>;
            getFeatures(): java.util.Set;
            getFlags(): java.util.EnumSet<RISCV64$Flag>;
            getLargestStorableKind(category: ci.code.Register$RegisterCategory): RISCV64Kind;
            getLargestStorableKind(a0: ci.code.Register$RegisterCategory): ci.meta.PlatformKind;
            getPlatformKind(javaKind: ci.meta.JavaKind): ci.meta.PlatformKind;
            _features: java.util.EnumSet<RISCV64$CPUFeature>;
            _flags: java.util.EnumSet<RISCV64$Flag>;
          }
          interface RISCV64 extends CombineTypes<[_RISCV64, jdk.vm.ci.code.Architecture]> {}
          interface _RISCV64$CPUFeature$$static extends ClassLike {
            valueOf(name: string): RISCV64$CPUFeature;
            values(): RISCV64$CPUFeature[];
            readonly A: RISCV64$CPUFeature;
            readonly C: RISCV64$CPUFeature;
            readonly D: RISCV64$CPUFeature;
            readonly F: RISCV64$CPUFeature;
            readonly I: RISCV64$CPUFeature;
            readonly M: RISCV64$CPUFeature;
            readonly V: RISCV64$CPUFeature;
          }
          let RISCV64$CPUFeature: _RISCV64$CPUFeature$$static;
          interface _RISCV64$CPUFeature {
          }
          interface RISCV64$CPUFeature extends CombineTypes<[_RISCV64$CPUFeature, ci.code.CPUFeatureName]> {}
          interface _RISCV64$Flag$$static extends ClassLike {
            valueOf(name: string): RISCV64$Flag;
            values(): RISCV64$Flag[];
            readonly AvoidUnalignedAccesses: RISCV64$Flag;
            readonly NearCpool: RISCV64$Flag;
            readonly TraceTraps: RISCV64$Flag;
            readonly UseConservativeFence: RISCV64$Flag;
            readonly UseRVC: RISCV64$Flag;
            readonly UseRVV: RISCV64$Flag;
            readonly UseRVVForBigIntegerShiftIntrinsics: RISCV64$Flag;
            readonly UseZba: RISCV64$Flag;
            readonly UseZbb: RISCV64$Flag;
          }
          let RISCV64$Flag: _RISCV64$Flag$$static;
          interface _RISCV64$Flag {
          }
          interface RISCV64$Flag extends CombineTypes<[_RISCV64$Flag]> {}
          interface _RISCV64Kind$$static extends ClassLike {
            valueOf(name: string): RISCV64Kind;
            values(): RISCV64Kind[];
            readonly BYTE: RISCV64Kind;
            readonly DOUBLE: RISCV64Kind;
            readonly DWORD: RISCV64Kind;
            readonly QWORD: RISCV64Kind;
            readonly SINGLE: RISCV64Kind;
            readonly WORD: RISCV64Kind;
          }
          let RISCV64Kind: _RISCV64Kind$$static;
          interface _RISCV64Kind {
            getKey(): ci.meta.PlatformKind$Key;
            getScalar(): RISCV64Kind;
            getSizeInBytes(): int;
            getTypeChar(): char;
            getVectorLength(): int;
            isFP(): boolean;
            isInteger(): boolean;
            _key: ci.meta.PlatformKind$EnumKey<RISCV64Kind>;
            _scalar: RISCV64Kind;
            _size: int;
            _vectorLength: int;
          }
          interface RISCV64Kind extends CombineTypes<[_RISCV64Kind, ci.meta.PlatformKind]> {}
        }
        module runtime {
          interface _JVMCI$$static extends ClassLike {
            getRuntime(): JVMCIRuntime;
            initialize(): void;
            _initializeRuntime(): JVMCIRuntime;
            _initializing: boolean;
            _runtime: JVMCIRuntime;
            new(): JVMCI;
          }
          let JVMCI: _JVMCI$$static;
          interface _JVMCI {
          }
          interface JVMCI extends CombineTypes<[_JVMCI, java.lang.Object]> {}
          interface _JVMCIBackend$$static extends ClassLike {
            new(metaAccess: ci.meta.MetaAccessProvider, codeCache: ci.code.CodeCacheProvider, constantReflection: ci.meta.ConstantReflectionProvider, stackIntrospection: ci.code.stack.StackIntrospection): JVMCIBackend;
          }
          let JVMCIBackend: _JVMCIBackend$$static;
          interface _JVMCIBackend {
            getCodeCache(): ci.code.CodeCacheProvider;
            getConstantReflection(): ci.meta.ConstantReflectionProvider;
            getMetaAccess(): ci.meta.MetaAccessProvider;
            getStackIntrospection(): ci.code.stack.StackIntrospection;
            getTarget(): ci.code.TargetDescription;
            _codeCache: ci.code.CodeCacheProvider;
            _constantReflection: ci.meta.ConstantReflectionProvider;
            _metaAccess: ci.meta.MetaAccessProvider;
            _stackIntrospection: ci.code.stack.StackIntrospection;
          }
          interface JVMCIBackend extends CombineTypes<[_JVMCIBackend, java.lang.Object]> {}
          interface _JVMCICompiler$$static extends ClassLike {
            readonly INVOCATION_ENTRY_BCI: int;
          }
          let JVMCICompiler: _JVMCICompiler$$static;
          interface _JVMCICompiler {
            compileMethod(a0: ci.code.CompilationRequest): ci.code.CompilationRequestResult;
(a0: ci.code.CompilationRequest): ci.code.CompilationRequestResult;
            isGCSupported(gcIdentifier: int): boolean;
          }
          interface JVMCICompiler extends CombineTypes<[_JVMCICompiler, java.lang.Object]> {}
          interface _JVMCICompilerFactory$$static extends ClassLike {
          }
          let JVMCICompilerFactory: _JVMCICompilerFactory$$static;
          interface _JVMCICompilerFactory {
            createCompiler(a0: JVMCIRuntime): JVMCICompiler;
            getCompilerName(): string;
            onSelection(): void;
            printProperties(out: java.io.PrintStream): void;
          }
          interface JVMCICompilerFactory extends CombineTypes<[_JVMCICompilerFactory, java.lang.Object]> {}
          interface _JVMCIRuntime$$static extends ClassLike {
          }
          let JVMCIRuntime: _JVMCIRuntime$$static;
          interface _JVMCIRuntime {
            getCompiler(): JVMCICompiler;
            getHostJVMCIBackend(): JVMCIBackend;
            getJVMCIBackend<T>(a0: java.lang.Class<T>): JVMCIBackend;
          }
          interface JVMCIRuntime extends CombineTypes<[_JVMCIRuntime, java.lang.Object]> {}
        }
        module services {
          interface _JVMCIPermission$$static extends ClassLike {
            _serialVersionUID: long;
            new(): JVMCIPermission;
          }
          let JVMCIPermission: _JVMCIPermission$$static;
          interface _JVMCIPermission {
          }
          interface JVMCIPermission extends CombineTypes<[_JVMCIPermission, java.security.BasicPermission]> {}
          interface _JVMCIServiceLocator$$static extends ClassLike {
            _checkPermission(): java.lang.Void;
            _getJVMCIServiceLocators(): java.lang.Iterable<JVMCIServiceLocator>;
            getProviders<S>(service: java.lang.Class<S>): java.util.List<S>;
            _cachedLocators: java.util.List<JVMCIServiceLocator>;
            _new(): JVMCIServiceLocator;
          }
          let JVMCIServiceLocator: _JVMCIServiceLocator$$static;
          interface _JVMCIServiceLocator {
            _getProvider<S>(a0: java.lang.Class<S>): S;
<S>(a0: java.lang.Class<S>): S;
          }
          interface JVMCIServiceLocator extends CombineTypes<[_JVMCIServiceLocator, java.lang.Object]> {}
          interface _Services$$static extends ClassLike {
            _checkJVMCIEnabled(): void;
            createTerminatingThreadLocal<T>(initialValue: java.util.function.Supplier<T>, onThreadTermination: java.util.function.Consumer<T>): java.lang.ThreadLocal<T>;
            getSavedProperties(): java.util.Map<string,string>;
            getSavedProperty(name: string, def: string): string;
            getSavedProperty(name: string): string;
            initializeJVMCI(): void;
            _initializeSavedProperties(serializedProperties: byte[]): void;
            load<S>(service: java.lang.Class<S>): java.lang.Iterable<S>;
            _load0<S>(service: java.lang.Class<S>): java.lang.Iterable<S>;
            loadSingle<S>(service: java.lang.Class<S>, required: boolean): S;
            _openJVMCITo(otherModule: java.lang.Module): void;
            readonly IS_BUILDING_NATIVE_IMAGE: boolean;
            readonly IS_IN_NATIVE_IMAGE: boolean;
            _JVMCI_ENABLED: boolean;
            _savedProperties: java.util.Map<string,string>;
            _servicesCache: java.util.Map<java.lang.Class<any>,java.util.List<any>>;
          }
          let Services: _Services$$static;
          interface _Services {
          }
          interface Services extends CombineTypes<[_Services, java.lang.Object]> {}
          interface _SuppressFBWarnings$$static extends ClassLike {
          }
          let SuppressFBWarnings: _SuppressFBWarnings$$static;
          interface _SuppressFBWarnings {
            justification(): string;
            value(): string[];
          }
          interface SuppressFBWarnings extends CombineTypes<[_SuppressFBWarnings, java.lang.annotation.Annotation, java.lang.Object]> {}
          interface _VMEntryPoint$$static extends ClassLike {
          }
          let VMEntryPoint: _VMEntryPoint$$static;
          interface _VMEntryPoint {
            value(): string;
(): string;
          }
          interface VMEntryPoint extends CombineTypes<[_VMEntryPoint, java.lang.annotation.Annotation, java.lang.Object]> {}
        }
      }
    }
  }
}
