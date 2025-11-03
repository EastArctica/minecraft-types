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
      module management {
        module internal {
          interface _DiagnosticCommandArgumentInfo$$static extends ClassLike {
            _new(name: string, description: string, type: string, defaultValue: string, mandatory: boolean, option: boolean, multiple: boolean, position: int): DiagnosticCommandArgumentInfo;
          }
          let DiagnosticCommandArgumentInfo: _DiagnosticCommandArgumentInfo$$static;
          interface _DiagnosticCommandArgumentInfo {
            _getDefault(): string;
            _getDescription(): string;
            _getName(): string;
            _getPosition(): int;
            _getType(): string;
            _isMandatory(): boolean;
            _isMultiple(): boolean;
            _isOption(): boolean;
            _defaultValue: string;
            _description: string;
            _mandatory: boolean;
            _multiple: boolean;
            _name: string;
            _option: boolean;
            _position: int;
            _type: string;
          }
          interface DiagnosticCommandArgumentInfo extends CombineTypes<[_DiagnosticCommandArgumentInfo, java.lang.Object]> {}
          interface _DiagnosticCommandImpl$$static extends ClassLike {
            _getDiagnosticCommandMBean(): DiagnosticCommandMBean;
            _getNextSeqNumber(): long;
            _transform(name: string): string;
            _diagCommandMBean: DiagnosticCommandImpl;
            _diagFramNotifTypes: string[];
            _notifName: string;
            _seqNumber: long;
            _strArrayClassName: string;
            _strClassName: string;
            _new(jvm: sun.management.VMManagement): DiagnosticCommandImpl;
          }
          let DiagnosticCommandImpl: _DiagnosticCommandImpl$$static;
          interface _DiagnosticCommandImpl {
            addNotificationListener(listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, handback: any): void;
            _commandDescriptor(w: DiagnosticCommandImpl$Wrapper): javax.management.Descriptor;
            _createDiagnosticFrameworkNotification(): void;
            _executeDiagnosticCommand(a0: string): string;
            getAttribute(attribute: string): any;
            getAttributes(attributes: string[]): javax.management.AttributeList;
            _getDiagnosticCommandInfo(a0: string[]): DiagnosticCommandInfo[];
            _getDiagnosticCommands(): string[];
            getMBeanInfo(): javax.management.MBeanInfo;
            getNotificationInfo(): javax.management.MBeanNotificationInfo[];
            invoke(actionName: string, params: any[], signature: string[]): any;
            removeNotificationListener(listener: javax.management.NotificationListener): void;
            removeNotificationListener(listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, handback: any): void;
            setAttribute(attribute: javax.management.Attribute): void;
            setAttributes(attributes: javax.management.AttributeList): javax.management.AttributeList;
            _setNotificationEnabled(a0: boolean): void;
            _isSupported: boolean;
            _jvm: sun.management.VMManagement;
            _notifInfo: javax.management.MBeanNotificationInfo[];
            _wrappers: java.util.Map<string,DiagnosticCommandImpl$Wrapper>;
          }
          interface DiagnosticCommandImpl extends CombineTypes<[_DiagnosticCommandImpl, com.sun.management.DiagnosticCommandMBean, sun.management.NotificationEmitterSupport]> {}
          interface _DiagnosticCommandImpl$OperationInfoComparator$$static extends ClassLike {
          }
          let DiagnosticCommandImpl$OperationInfoComparator: _DiagnosticCommandImpl$OperationInfoComparator$$static;
          interface _DiagnosticCommandImpl$OperationInfoComparator {
            compare(o1: javax.management.MBeanOperationInfo, o2: javax.management.MBeanOperationInfo): int;
            compare(a0: any, a1: any): int;
          }
          interface DiagnosticCommandImpl$OperationInfoComparator extends CombineTypes<[_DiagnosticCommandImpl$OperationInfoComparator, java.util.Comparator<javax.management.MBeanOperationInfo>, java.lang.Object]> {}
          interface _DiagnosticCommandImpl$Wrapper$$static extends ClassLike {
            _new(a0: DiagnosticCommandImpl, name: string, cmd: string, info: DiagnosticCommandInfo): DiagnosticCommandImpl$Wrapper;
          }
          let DiagnosticCommandImpl$Wrapper: _DiagnosticCommandImpl$Wrapper$$static;
          interface _DiagnosticCommandImpl$Wrapper {
            execute(args: string[]): string;
            _cmd: string;
            _info: DiagnosticCommandInfo;
            _name: string;
            _permission: java.security.Permission;
            _this$0: DiagnosticCommandImpl;
          }
          interface DiagnosticCommandImpl$Wrapper extends CombineTypes<[_DiagnosticCommandImpl$Wrapper, java.lang.Object]> {}
          interface _DiagnosticCommandInfo$$static extends ClassLike {
            _new(name: string, description: string, impact: string, permissionClass: string, permissionName: string, permissionAction: string, enabled: boolean, arguments: java.util.List<DiagnosticCommandArgumentInfo>): DiagnosticCommandInfo;
          }
          let DiagnosticCommandInfo: _DiagnosticCommandInfo$$static;
          interface _DiagnosticCommandInfo {
            _getArgumentsInfo(): java.util.List<DiagnosticCommandArgumentInfo>;
            _getDescription(): string;
            _getImpact(): string;
            _getName(): string;
            _getPermissionAction(): string;
            _getPermissionClass(): string;
            _getPermissionName(): string;
            _isEnabled(): boolean;
            _arguments: java.util.List<DiagnosticCommandArgumentInfo>;
            _description: string;
            _enabled: boolean;
            _impact: string;
            _name: string;
            _permissionAction: string;
            _permissionClass: string;
            _permissionName: string;
          }
          interface DiagnosticCommandInfo extends CombineTypes<[_DiagnosticCommandInfo, java.lang.Object]> {}
          interface _Flag$$static extends ClassLike {
            _getAllFlagNames(): string[];
            _getAllFlags(): java.util.List<Flag>;
            _getFlag(name: string): Flag;
            _getFlags(names: string[], numFlags: int): java.util.List<Flag>;
            _getFlags(a0: string[], a1: Flag[], a2: int): int;
            _getInternalFlagCount(): int;
            _initialize(): void;
            _setBooleanValue(a0: string, a1: boolean): void;
            _setDoubleValue(a0: string, a1: double): void;
            _setLongValue(a0: string, a1: long): void;
            _setStringValue(a0: string, a1: string): void;
            _new(name: string, value: any, writeable: boolean, external: boolean, origin: VMOption$Origin): Flag;
          }
          let Flag: _Flag$$static;
          interface _Flag {
            _getVMOption(): VMOption;
            _getValue(): any;
            _isExternal(): boolean;
            _isWriteable(): boolean;
            _external: boolean;
            _name: string;
            _origin: VMOption$Origin;
            _value: any;
            _writeable: boolean;
          }
          interface Flag extends CombineTypes<[_Flag, java.lang.Object]> {}
          interface _GarbageCollectionNotifInfoCompositeData$$static extends ClassLike {
            _getBaseGcNotifInfoCompositeType(): javax.management.openmbean.CompositeType;
            getGcAction(cd: javax.management.openmbean.CompositeData): string;
            getGcCause(cd: javax.management.openmbean.CompositeData): string;
            getGcInfo(cd: javax.management.openmbean.CompositeData): GcInfo;
            getGcName(cd: javax.management.openmbean.CompositeData): string;
            toCompositeData(info: GarbageCollectionNotificationInfo): javax.management.openmbean.CompositeData;
            validateCompositeData(cd: javax.management.openmbean.CompositeData): void;
            _GC_ACTION: string;
            _GC_CAUSE: string;
            _GC_INFO: string;
            _GC_NAME: string;
            _baseGcNotifInfoCompositeType: javax.management.openmbean.CompositeType;
            _compositeTypeByBuilder: java.util.HashMap<GcInfoBuilder,javax.management.openmbean.CompositeType>;
            _gcNotifInfoItemNames: string[];
            _serialVersionUID: long;
            new(info: GarbageCollectionNotificationInfo): GarbageCollectionNotifInfoCompositeData;
          }
          let GarbageCollectionNotifInfoCompositeData: _GarbageCollectionNotifInfoCompositeData$$static;
          interface _GarbageCollectionNotifInfoCompositeData {
            _getCompositeData(): javax.management.openmbean.CompositeData;
            _getCompositeTypeByBuilder(): javax.management.openmbean.CompositeType;
            getGarbageCollectionNotifInfo(): GarbageCollectionNotificationInfo;
            _gcNotifInfo: GarbageCollectionNotificationInfo;
          }
          interface GarbageCollectionNotifInfoCompositeData extends CombineTypes<[_GarbageCollectionNotifInfoCompositeData, sun.management.LazyCompositeData]> {}
          interface _GarbageCollectorExtImpl$$static extends ClassLike {
            _createGarbageCollector(name: string, type: string): java.lang.management.GarbageCollectorMXBean;
            _getNextSeqNumber(): long;
            _gcNotifTypes: string[];
            _notifName: string;
            _seqNumber: long;
            new(name: string): GarbageCollectorExtImpl;
          }
          let GarbageCollectorExtImpl: _GarbageCollectorExtImpl$$static;
          interface _GarbageCollectorExtImpl {
            addNotificationListener(listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, handback: any): void;
            _createGCNotification(timestamp: long, a1: string, gcName: string, gcAction: string, gcCause: GcInfo): void;
            _getAllPoolNames(): string[];
            _getGcInfoBuilder(): GcInfoBuilder;
            getLastGcInfo(): GcInfo;
            getNotificationInfo(): javax.management.MBeanNotificationInfo[];
            removeNotificationListener(listener: javax.management.NotificationListener): void;
            removeNotificationListener(listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, handback: any): void;
            _setNotificationEnabled(a0: GarbageCollectorMXBean, a1: boolean): void;
            _gcInfoBuilder: GcInfoBuilder;
            _poolNames: string[];
          }
          interface GarbageCollectorExtImpl extends CombineTypes<[_GarbageCollectorExtImpl, sun.management.GarbageCollectorImpl, com.sun.management.GarbageCollectorMXBean]> {}
          interface _GcInfoBuilder$$static extends ClassLike {
            _new(gc: java.lang.management.GarbageCollectorMXBean, poolNames: string[]): GcInfoBuilder;
          }
          let GcInfoBuilder: _GcInfoBuilder$$static;
          interface _GcInfoBuilder {
            _fillGcAttributeInfo(a0: java.lang.management.GarbageCollectorMXBean, a1: int, a2: string[], a3: char[], a4: string[]): void;
            _getGcExtItemCount(): int;
            _getGcInfoCompositeType(): javax.management.openmbean.CompositeType;
            _getItemNames(): string[];
            _getLastGcInfo(): GcInfo;
            _getLastGcInfo0(a0: java.lang.management.GarbageCollectorMXBean, a1: int, a2: any[], a3: char[], a4: java.lang.management.MemoryUsage[], a5: java.lang.management.MemoryUsage[]): GcInfo;
            _getNumGcExtAttributes(a0: java.lang.management.GarbageCollectorMXBean): int;
            getPoolNames(): string[];
            _allItemNames: string[];
            _gc: java.lang.management.GarbageCollectorMXBean;
            _gcExtItemCount: int;
            _gcExtItemDescs: string[];
            _gcExtItemNames: string[];
            _gcExtItemTypes: char[];
            _gcInfoCompositeType: javax.management.openmbean.CompositeType;
            _poolNames: string[];
          }
          interface GcInfoBuilder extends CombineTypes<[_GcInfoBuilder, java.lang.Object]> {}
          interface _GcInfoCompositeData$$static extends ClassLike {
            cast(x: any): java.util.Map<string,java.lang.management.MemoryUsage>;
            _getBaseGcInfoCompositeType(): javax.management.openmbean.CompositeType;
            _getBaseGcInfoItemNames(): string[];
            _getBaseGcInfoItemTypes(): javax.management.openmbean.OpenType<any>[];
            getEndTime(cd: javax.management.openmbean.CompositeData): long;
            getId(cd: javax.management.openmbean.CompositeData): long;
            getMemoryUsageAfterGc(cd: javax.management.openmbean.CompositeData): java.util.Map<string,java.lang.management.MemoryUsage>;
            getMemoryUsageBeforeGc(cd: javax.management.openmbean.CompositeData): java.util.Map<string,java.lang.management.MemoryUsage>;
            getStartTime(cd: javax.management.openmbean.CompositeData): long;
            toCompositeData(info: GcInfo): javax.management.openmbean.CompositeData;
            validateCompositeData(cd: javax.management.openmbean.CompositeData): void;
            _DURATION: string;
            _END_TIME: string;
            _ID: string;
            _MEMORY_USAGE_AFTER_GC: string;
            _MEMORY_USAGE_BEFORE_GC: string;
            _START_TIME: string;
            _baseGcInfoCompositeType: javax.management.openmbean.CompositeType;
            _baseGcInfoItemNames: string[];
            _baseGcInfoItemTypes: javax.management.openmbean.OpenType<any>[];
            _memoryUsageMapType: sun.management.MappedMXBeanType;
            _serialVersionUID: long;
            new(info: GcInfo, builder: GcInfoBuilder, gcExtItemValues: any[]): GcInfoCompositeData;
          }
          let GcInfoCompositeData: _GcInfoCompositeData$$static;
          interface _GcInfoCompositeData {
            _getCompositeData(): javax.management.openmbean.CompositeData;
            getGcInfo(): GcInfo;
            _builder: GcInfoBuilder;
            _gcExtItemValues: any[];
            _info: GcInfo;
          }
          interface GcInfoCompositeData extends CombineTypes<[_GcInfoCompositeData, sun.management.LazyCompositeData]> {}
          interface _HotSpotDiagnostic$$static extends ClassLike {
            new(): HotSpotDiagnostic;
          }
          let HotSpotDiagnostic: _HotSpotDiagnostic$$static;
          interface _HotSpotDiagnostic {
            dumpHeap(outputFile: string, live: boolean): void;
            _dumpHeap0(a0: string, a1: boolean): void;
            dumpThreads(outputFile: string, format: HotSpotDiagnosticMXBean$ThreadDumpFormat): void;
            _dumpThreads(out: java.io.OutputStream, format: HotSpotDiagnosticMXBean$ThreadDumpFormat): void;
            getDiagnosticOptions(): java.util.List<VMOption>;
            getObjectName(): javax.management.ObjectName;
            getVMOption(name: string): VMOption;
            setVMOption(name: string, value: string): void;
          }
          interface HotSpotDiagnostic extends CombineTypes<[_HotSpotDiagnostic, com.sun.management.HotSpotDiagnosticMXBean, java.lang.Object]> {}
          interface _HotSpotThreadImpl$$static extends ClassLike {
            new(vm: sun.management.VMManagement): HotSpotThreadImpl;
          }
          let HotSpotThreadImpl: _HotSpotThreadImpl$$static;
          interface _HotSpotThreadImpl {
            getCurrentThreadAllocatedBytes(): long;
            getThreadAllocatedBytes(id: long): long;
            getThreadAllocatedBytes(ids: long[]): long[];
            getThreadCpuTime(ids: long[]): long[];
            getThreadUserTime(ids: long[]): long[];
            getTotalThreadAllocatedBytes(): long;
            isThreadAllocatedMemoryEnabled(): boolean;
            isThreadAllocatedMemorySupported(): boolean;
            setThreadAllocatedMemoryEnabled(enable: boolean): void;
          }
          interface HotSpotThreadImpl extends CombineTypes<[_HotSpotThreadImpl, sun.management.ThreadImpl, com.sun.management.ThreadMXBean]> {}
          interface _OperatingSystemImpl$$static extends ClassLike {
            _initialize0(): void;
            _psapiLock: any;
            _new(vm: sun.management.VMManagement): OperatingSystemImpl;
          }
          let OperatingSystemImpl: _OperatingSystemImpl$$static;
          interface _OperatingSystemImpl {
            getCommittedVirtualMemorySize(): long;
            _getCommittedVirtualMemorySize0(): long;
            getCpuLoad(): double;
            _getCpuLoad0(): double;
            getFreeMemorySize(): long;
            _getFreeMemorySize0(): long;
            getFreeSwapSpaceSize(): long;
            _getFreeSwapSpaceSize0(): long;
            getProcessCpuLoad(): double;
            _getProcessCpuLoad0(): double;
            getProcessCpuTime(): long;
            _getProcessCpuTime0(): long;
            getTotalMemorySize(): long;
            _getTotalMemorySize0(): long;
            getTotalSwapSpaceSize(): long;
            _getTotalSwapSpaceSize0(): long;
          }
          interface OperatingSystemImpl extends CombineTypes<[_OperatingSystemImpl, sun.management.BaseOperatingSystemImpl, com.sun.management.OperatingSystemMXBean]> {}
          interface _PlatformMBeanProviderImpl$$static extends ClassLike {
            _getDiagnosticMXBean(): HotSpotDiagnosticMXBean;
            _getOperatingSystemMXBean(): java.lang.management.OperatingSystemMXBean;
            _DIAGNOSTIC_COMMAND_MBEAN_NAME: string;
            _hsDiagMBean: HotSpotDiagnostic;
            _osMBean: java.lang.management.OperatingSystemMXBean;
            new(): PlatformMBeanProviderImpl;
          }
          let PlatformMBeanProviderImpl: _PlatformMBeanProviderImpl$$static;
          interface _PlatformMBeanProviderImpl {
            getPlatformComponentList(): java.util.List<sun.management.spi.PlatformMBeanProvider$PlatformComponent<any>>;
            _init(): java.util.List<sun.management.spi.PlatformMBeanProvider$PlatformComponent<any>>;
            _mxbeanList: java.util.List<sun.management.spi.PlatformMBeanProvider$PlatformComponent<any>>;
          }
          interface PlatformMBeanProviderImpl extends CombineTypes<[_PlatformMBeanProviderImpl, sun.management.spi.PlatformMBeanProvider]> {}
          interface _VMOptionCompositeData$$static extends ClassLike {
            getName(cd: javax.management.openmbean.CompositeData): string;
            getOrigin(cd: javax.management.openmbean.CompositeData): VMOption$Origin;
            _getVMOptionCompositeType(): javax.management.openmbean.CompositeType;
            getValue(cd: javax.management.openmbean.CompositeData): string;
            isWriteable(cd: javax.management.openmbean.CompositeData): boolean;
            toCompositeData(option: VMOption): javax.management.openmbean.CompositeData;
            validateCompositeData(cd: javax.management.openmbean.CompositeData): void;
            _NAME: string;
            _ORIGIN: string;
            _VALUE: string;
            _WRITEABLE: string;
            _serialVersionUID: long;
            _vmOptionCompositeType: javax.management.openmbean.CompositeType;
            _vmOptionItemNames: string[];
          }
          let VMOptionCompositeData: _VMOptionCompositeData$$static;
          interface _VMOptionCompositeData {
            _getCompositeData(): javax.management.openmbean.CompositeData;
            getVMOption(): VMOption;
            _option: VMOption;
          }
          interface VMOptionCompositeData extends CombineTypes<[_VMOptionCompositeData, sun.management.LazyCompositeData]> {}
        }
        interface _DiagnosticCommandMBean$$static extends ClassLike {
        }
        let DiagnosticCommandMBean: _DiagnosticCommandMBean$$static;
        interface _DiagnosticCommandMBean {
        }
        interface DiagnosticCommandMBean extends CombineTypes<[_DiagnosticCommandMBean, java.lang.Object, javax.management.DynamicMBean]> {}
        interface _GarbageCollectionNotificationInfo$$static extends ClassLike {
          from(cd: javax.management.openmbean.CompositeData): GarbageCollectionNotificationInfo;
          readonly GARBAGE_COLLECTION_NOTIFICATION: string;
          new(gcName: string, gcAction: string, gcCause: string, gcInfo: GcInfo): GarbageCollectionNotificationInfo;
          _new(cd: javax.management.openmbean.CompositeData): GarbageCollectionNotificationInfo;
        }
        let GarbageCollectionNotificationInfo: _GarbageCollectionNotificationInfo$$static;
        interface _GarbageCollectionNotificationInfo {
          getGcAction(): string;
          getGcCause(): string;
          getGcInfo(): GcInfo;
          getGcName(): string;
          toCompositeData(ct: javax.management.openmbean.CompositeType): javax.management.openmbean.CompositeData;
          _cdata: javax.management.openmbean.CompositeData;
          _gcAction: string;
          _gcCause: string;
          _gcInfo: GcInfo;
          _gcName: string;
        }
        interface GarbageCollectionNotificationInfo extends CombineTypes<[_GarbageCollectionNotificationInfo, javax.management.openmbean.CompositeDataView, java.lang.Object]> {}
        interface _GarbageCollectorMXBean$$static extends ClassLike {
        }
        let GarbageCollectorMXBean: _GarbageCollectorMXBean$$static;
        interface _GarbageCollectorMXBean {
          getLastGcInfo(): GcInfo;
(): GcInfo;
        }
        interface GarbageCollectorMXBean extends CombineTypes<[_GarbageCollectorMXBean, java.lang.management.GarbageCollectorMXBean, java.lang.Object]> {}
        interface _GcInfo$$static extends ClassLike {
          from(cd: javax.management.openmbean.CompositeData): GcInfo;
        }
        let GcInfo: _GcInfo$$static;
        interface _GcInfo {
          containsKey(key: string): boolean;
          containsValue(value: any): boolean;
          equals(obj: any): boolean;
          get(key: string): any;
          getAll(keys: string[]): any[];
          getCompositeType(): javax.management.openmbean.CompositeType;
          getDuration(): long;
          getEndTime(): long;
          getId(): long;
          getMemoryUsageAfterGc(): java.util.Map<string,java.lang.management.MemoryUsage>;
          getMemoryUsageBeforeGc(): java.util.Map<string,java.lang.management.MemoryUsage>;
          getStartTime(): long;
          hashCode(): int;
          toCompositeData(ct: javax.management.openmbean.CompositeType): javax.management.openmbean.CompositeData;
          toString(): string;
          values(): java.util.Collection<any>;
          _builder: internal.GcInfoBuilder;
          _cdata: javax.management.openmbean.CompositeData;
          _endTime: long;
          _extAttributes: any[];
          _index: long;
          _startTime: long;
          _usageAfterGc: java.util.Map<string,java.lang.management.MemoryUsage>;
          _usageBeforeGc: java.util.Map<string,java.lang.management.MemoryUsage>;
        }
        interface GcInfo extends CombineTypes<[_GcInfo, javax.management.openmbean.CompositeDataView, javax.management.openmbean.CompositeData, java.lang.Object]> {}
        interface _HotSpotDiagnosticMXBean$$static extends ClassLike {
        }
        let HotSpotDiagnosticMXBean: _HotSpotDiagnosticMXBean$$static;
        interface _HotSpotDiagnosticMXBean {
          dumpHeap(a0: string, a1: boolean): void;
          dumpThreads(outputFile: string, format: HotSpotDiagnosticMXBean$ThreadDumpFormat): void;
          getDiagnosticOptions(): java.util.List<VMOption>;
          getVMOption(a0: string): VMOption;
          setVMOption(a0: string, a1: string): void;
        }
        interface HotSpotDiagnosticMXBean extends CombineTypes<[_HotSpotDiagnosticMXBean, java.lang.management.PlatformManagedObject, java.lang.Object]> {}
        interface _HotSpotDiagnosticMXBean$ThreadDumpFormat$$static extends ClassLike {
          valueOf(name: string): HotSpotDiagnosticMXBean$ThreadDumpFormat;
          values(): HotSpotDiagnosticMXBean$ThreadDumpFormat[];
          readonly JSON: HotSpotDiagnosticMXBean$ThreadDumpFormat;
          readonly TEXT_PLAIN: HotSpotDiagnosticMXBean$ThreadDumpFormat;
        }
        let HotSpotDiagnosticMXBean$ThreadDumpFormat: _HotSpotDiagnosticMXBean$ThreadDumpFormat$$static;
        interface _HotSpotDiagnosticMXBean$ThreadDumpFormat {
        }
        interface HotSpotDiagnosticMXBean$ThreadDumpFormat extends CombineTypes<[_HotSpotDiagnosticMXBean$ThreadDumpFormat]> {}
        interface _OperatingSystemMXBean$$static extends ClassLike {
        }
        let OperatingSystemMXBean: _OperatingSystemMXBean$$static;
        interface _OperatingSystemMXBean {
          getCommittedVirtualMemorySize(): long;
          getCpuLoad(): double;
          getFreeMemorySize(): long;
          getFreePhysicalMemorySize(): long;
          getFreeSwapSpaceSize(): long;
          getProcessCpuLoad(): double;
          getProcessCpuTime(): long;
          getSystemCpuLoad(): double;
          getTotalMemorySize(): long;
          getTotalPhysicalMemorySize(): long;
          getTotalSwapSpaceSize(): long;
        }
        interface OperatingSystemMXBean extends CombineTypes<[_OperatingSystemMXBean, java.lang.Object, java.lang.management.OperatingSystemMXBean]> {}
        interface _ThreadMXBean$$static extends ClassLike {
        }
        let ThreadMXBean: _ThreadMXBean$$static;
        interface _ThreadMXBean {
          getCurrentThreadAllocatedBytes(): long;
          getThreadAllocatedBytes(a0: long): long;
          getThreadAllocatedBytes(a0: long[]): long[];
          getThreadCpuTime(a0: long[]): long[];
          getThreadUserTime(a0: long[]): long[];
          getTotalThreadAllocatedBytes(): long;
          isThreadAllocatedMemoryEnabled(): boolean;
          isThreadAllocatedMemorySupported(): boolean;
          setThreadAllocatedMemoryEnabled(a0: boolean): void;
        }
        interface ThreadMXBean extends CombineTypes<[_ThreadMXBean, java.lang.Object, java.lang.management.ThreadMXBean]> {}
        interface _UnixOperatingSystemMXBean$$static extends ClassLike {
        }
        let UnixOperatingSystemMXBean: _UnixOperatingSystemMXBean$$static;
        interface _UnixOperatingSystemMXBean {
          getMaxFileDescriptorCount(): long;
          getOpenFileDescriptorCount(): long;
        }
        interface UnixOperatingSystemMXBean extends CombineTypes<[_UnixOperatingSystemMXBean, com.sun.management.OperatingSystemMXBean, java.lang.Object]> {}
        interface _VMOption$$static extends ClassLike {
          from(cd: javax.management.openmbean.CompositeData): VMOption;
          new(name: string, value: string, writeable: boolean, origin: VMOption$Origin): VMOption;
        }
        let VMOption: _VMOption$$static;
        interface _VMOption {
          getName(): string;
          getOrigin(): VMOption$Origin;
          getValue(): string;
          isWriteable(): boolean;
          toString(): string;
          _name: string;
          _origin: VMOption$Origin;
          _value: string;
          _writeable: boolean;
        }
        interface VMOption extends CombineTypes<[_VMOption, java.lang.Object]> {}
        interface _VMOption$Origin$$static extends ClassLike {
          valueOf(name: string): VMOption$Origin;
          values(): VMOption$Origin[];
          readonly ATTACH_ON_DEMAND: VMOption$Origin;
          readonly CONFIG_FILE: VMOption$Origin;
          readonly DEFAULT: VMOption$Origin;
          readonly ENVIRON_VAR: VMOption$Origin;
          readonly ERGONOMIC: VMOption$Origin;
          readonly MANAGEMENT: VMOption$Origin;
          readonly OTHER: VMOption$Origin;
          readonly VM_CREATION: VMOption$Origin;
        }
        let VMOption$Origin: _VMOption$Origin$$static;
        interface _VMOption$Origin {
        }
        interface VMOption$Origin extends CombineTypes<[_VMOption$Origin]> {}
      }
    }
  }
}
