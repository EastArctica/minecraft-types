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
  module sun {
    module jvmstat {
      module monitor {
        module event {
          interface _HostEvent$$static extends ClassLike {
            new(host: MonitoredHost): HostEvent;
          }
          let HostEvent: _HostEvent$$static;
          interface _HostEvent {
            getMonitoredHost(): MonitoredHost;
          }
          interface HostEvent extends CombineTypes<[_HostEvent, java.util.EventObject]> {}
          interface _HostListener$$static extends ClassLike {
          }
          let HostListener: _HostListener$$static;
          interface _HostListener {
            disconnected(a0: HostEvent): void;
            vmStatusChanged(a0: VmStatusChangeEvent): void;
          }
          interface HostListener extends CombineTypes<[_HostListener, java.util.EventListener, java.lang.Object]> {}
          interface _MonitorStatusChangeEvent$$static extends ClassLike {
            new(vm: MonitoredVm, inserted: java.util.List<Monitor>, removed: java.util.List<Monitor>): MonitorStatusChangeEvent;
          }
          let MonitorStatusChangeEvent: _MonitorStatusChangeEvent$$static;
          interface _MonitorStatusChangeEvent {
            getInserted(): java.util.List<Monitor>;
            getRemoved(): java.util.List<Monitor>;
            _inserted: java.util.List<Monitor>;
            _removed: java.util.List<Monitor>;
          }
          interface MonitorStatusChangeEvent extends CombineTypes<[_MonitorStatusChangeEvent, sun.jvmstat.monitor.event.VmEvent]> {}
          interface _VmEvent$$static extends ClassLike {
            new(vm: MonitoredVm): VmEvent;
          }
          let VmEvent: _VmEvent$$static;
          interface _VmEvent {
            getMonitoredVm(): MonitoredVm;
          }
          interface VmEvent extends CombineTypes<[_VmEvent, java.util.EventObject]> {}
          interface _VmListener$$static extends ClassLike {
          }
          let VmListener: _VmListener$$static;
          interface _VmListener {
            disconnected(a0: VmEvent): void;
            monitorStatusChanged(a0: MonitorStatusChangeEvent): void;
            monitorsUpdated(a0: VmEvent): void;
          }
          interface VmListener extends CombineTypes<[_VmListener, java.util.EventListener, java.lang.Object]> {}
          interface _VmStatusChangeEvent$$static extends ClassLike {
            new(host: MonitoredHost, active: java.util.Set<int>, started: java.util.Set<int>, terminated: java.util.Set<int>): VmStatusChangeEvent;
          }
          let VmStatusChangeEvent: _VmStatusChangeEvent$$static;
          interface _VmStatusChangeEvent {
            getActive(): java.util.Set<int>;
            getStarted(): java.util.Set<int>;
            getTerminated(): java.util.Set<int>;
            _active: java.util.Set<int>;
            _started: java.util.Set<int>;
            _terminated: java.util.Set<int>;
          }
          interface VmStatusChangeEvent extends CombineTypes<[_VmStatusChangeEvent, sun.jvmstat.monitor.event.HostEvent]> {}
        }
        interface _AbstractMonitor$$static extends ClassLike {
          _new(name: string, units: Units, variability: Variability, supported: boolean, vectorLength: int): AbstractMonitor;
          _new(name: string, units: Units, variability: Variability, supported: boolean): AbstractMonitor;
        }
        let AbstractMonitor: _AbstractMonitor$$static;
        interface _AbstractMonitor {
          getBaseName(): string;
          getName(): string;
          getUnits(): Units;
          getValue(): any;
(): any;
          getVariability(): Variability;
          getVectorLength(): int;
          isSupported(): boolean;
          isVector(): boolean;
          _name: string;
          _supported: boolean;
          _units: Units;
          _variability: Variability;
          _vectorLength: int;
        }
        interface AbstractMonitor extends CombineTypes<[_AbstractMonitor, sun.jvmstat.monitor.Monitor, java.lang.Object]> {}
        interface _BufferedMonitoredVm$$static extends ClassLike {
        }
        let BufferedMonitoredVm: _BufferedMonitoredVm$$static;
        interface _BufferedMonitoredVm {
          getBytes(): byte[];
          getCapacity(): int;
        }
        interface BufferedMonitoredVm extends CombineTypes<[_BufferedMonitoredVm, java.lang.Object, sun.jvmstat.monitor.MonitoredVm]> {}
        interface _ByteArrayMonitor$$static extends ClassLike {
        }
        let ByteArrayMonitor: _ByteArrayMonitor$$static;
        interface _ByteArrayMonitor {
          byteArrayValue(): byte[];
          byteAt(a0: int): byte;
        }
        interface ByteArrayMonitor extends CombineTypes<[_ByteArrayMonitor, sun.jvmstat.monitor.Monitor, java.lang.Object]> {}
        interface _HostIdentifier$$static extends ClassLike {
          new(uriString: string): HostIdentifier;
          new(scheme: string, authority: string, path: string, query: string, fragment: string): HostIdentifier;
          new(vmid: VmIdentifier): HostIdentifier;
        }
        let HostIdentifier: _HostIdentifier$$static;
        interface _HostIdentifier {
          _canonicalize(uriString: string): java.net.URI;
          equals(object: any): boolean;
          getFragment(): string;
          getHost(): string;
          getPath(): string;
          getPort(): int;
          getQuery(): string;
          getScheme(): string;
          getSchemeSpecificPart(): string;
          getURI(): java.net.URI;
          getUserInfo(): string;
          hashCode(): int;
          resolve(vmid: VmIdentifier): VmIdentifier;
          toString(): string;
          _uri: java.net.URI;
        }
        interface HostIdentifier extends CombineTypes<[_HostIdentifier, java.lang.Object]> {}
        interface _IntegerMonitor$$static extends ClassLike {
        }
        let IntegerMonitor: _IntegerMonitor$$static;
        interface _IntegerMonitor {
          intValue(): int;
(): int;
        }
        interface IntegerMonitor extends CombineTypes<[_IntegerMonitor, sun.jvmstat.monitor.Monitor, java.lang.Object]> {}
        interface _LongMonitor$$static extends ClassLike {
        }
        let LongMonitor: _LongMonitor$$static;
        interface _LongMonitor {
          longValue(): long;
(): long;
        }
        interface LongMonitor extends CombineTypes<[_LongMonitor, sun.jvmstat.monitor.Monitor, java.lang.Object]> {}
        interface _Monitor$$static extends ClassLike {
        }
        let Monitor: _Monitor$$static;
        interface _Monitor {
          getBaseName(): string;
          getName(): string;
          getUnits(): Units;
          getValue(): any;
          getVariability(): Variability;
          getVectorLength(): int;
          isSupported(): boolean;
          isVector(): boolean;
        }
        interface Monitor extends CombineTypes<[_Monitor, java.lang.Object]> {}
        interface _MonitorException$$static extends ClassLike {
          new(): MonitorException;
          new(message: string): MonitorException;
          new(message: string, cause: java.lang.Throwable): MonitorException;
          new(cause: java.lang.Throwable): MonitorException;
        }
        let MonitorException: _MonitorException$$static;
        interface _MonitorException {
        }
        interface MonitorException extends CombineTypes<[_MonitorException, java.lang.Exception]> {}
        interface _MonitoredHost$$static extends ClassLike {
          getMonitoredHost(hostIdString: string): MonitoredHost;
          getMonitoredHost(vmid: VmIdentifier): MonitoredHost;
          getMonitoredHost(hostId: HostIdentifier): MonitoredHost;
          _resolveHostId(hostId: HostIdentifier): HostIdentifier;
          _LOCAL_PROTOCOL: string;
          _LOCAL_PROTOCOL_PROP_NAME: string;
          _REMOTE_PROTOCOL: string;
          _REMOTE_PROTOCOL_PROP_NAME: string;
          _monitoredHosts: java.util.Map<HostIdentifier,MonitoredHost>;
          new(): MonitoredHost;
        }
        let MonitoredHost: _MonitoredHost$$static;
        interface _MonitoredHost {
          activeVms(): java.util.Set<int>;
          addHostListener(a0: monitor.event.HostListener): void;
          clearLastException(): void;
          detach(a0: MonitoredVm): void;
          getHostIdentifier(): HostIdentifier;
          getInterval(): int;
          getLastException(): java.lang.Exception;
          getMonitoredVm(a0: VmIdentifier): MonitoredVm;
          getMonitoredVm(a0: VmIdentifier, a1: int): MonitoredVm;
          isErrored(): boolean;
          removeHostListener(a0: monitor.event.HostListener): void;
          setInterval(interval: int): void;
          setLastException(lastException: java.lang.Exception): void;
          _hostId: HostIdentifier;
          _interval: int;
          _lastException: java.lang.Exception;
        }
        interface MonitoredHost extends CombineTypes<[_MonitoredHost, java.lang.Object]> {}
        interface _MonitoredHostService$$static extends ClassLike {
        }
        let MonitoredHostService: _MonitoredHostService$$static;
        interface _MonitoredHostService {
          getMonitoredHost(a0: HostIdentifier): MonitoredHost;
          getScheme(): string;
        }
        interface MonitoredHostService extends CombineTypes<[_MonitoredHostService, java.lang.Object]> {}
        interface _MonitoredVm$$static extends ClassLike {
        }
        let MonitoredVm: _MonitoredVm$$static;
        interface _MonitoredVm {
          addVmListener(a0: monitor.event.VmListener): void;
          clearLastException(): void;
          detach(): void;
          findByName(a0: string): Monitor;
          findByPattern(a0: string): java.util.List<Monitor>;
          getInterval(): int;
          getLastException(): java.lang.Exception;
          getVmIdentifier(): VmIdentifier;
          isErrored(): boolean;
          removeVmListener(a0: monitor.event.VmListener): void;
          setInterval(a0: int): void;
          setLastException(a0: java.lang.Exception): void;
        }
        interface MonitoredVm extends CombineTypes<[_MonitoredVm, java.lang.Object]> {}
        interface _MonitoredVmUtil$$static extends ClassLike {
          commandLine(vm: MonitoredVm): string;
          isAttachable(vm: MonitoredVm): boolean;
          jvmArgs(vm: MonitoredVm): string;
          jvmFlags(vm: MonitoredVm): string;
          mainArgs(vm: MonitoredVm): string;
          mainClass(vm: MonitoredVm, fullPath: boolean): string;
          vmVersion(vm: MonitoredVm): string;
          _IS_ATTACHABLE: int;
          _IS_KERNEL_VM: int;
        }
        let MonitoredVmUtil: _MonitoredVmUtil$$static;
        interface _MonitoredVmUtil {
        }
        interface MonitoredVmUtil extends CombineTypes<[_MonitoredVmUtil, java.lang.Object]> {}
        interface _StringMonitor$$static extends ClassLike {
        }
        let StringMonitor: _StringMonitor$$static;
        interface _StringMonitor {
          stringValue(): string;
(): string;
        }
        interface StringMonitor extends CombineTypes<[_StringMonitor, sun.jvmstat.monitor.Monitor, java.lang.Object]> {}
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
        interface _VmIdentifier$$static extends ClassLike {
          new(uriString: string): VmIdentifier;
          new(uri: java.net.URI): VmIdentifier;
        }
        let VmIdentifier: _VmIdentifier$$static;
        interface _VmIdentifier {
          _canonicalize(uriString: string): java.net.URI;
          equals(object: any): boolean;
          getAuthority(): string;
          getFragment(): string;
          getHost(): string;
          getHostIdentifier(): HostIdentifier;
          getLocalVmId(): int;
          getPath(): string;
          getPort(): int;
          getQuery(): string;
          getScheme(): string;
          getSchemeSpecificPart(): string;
          getURI(): java.net.URI;
          getUserInfo(): string;
          hashCode(): int;
          toString(): string;
          _validate(): void;
          _uri: java.net.URI;
        }
        interface VmIdentifier extends CombineTypes<[_VmIdentifier, java.lang.Object]> {}
      }
      module perfdata {
        module monitor {
          module protocol {
            module file {
              interface _FileMonitoredVm$$static extends ClassLike {
                new(vmid: jvmstat.monitor.VmIdentifier, interval: int): FileMonitoredVm;
              }
              let FileMonitoredVm: _FileMonitoredVm$$static;
              interface _FileMonitoredVm {
                addVmListener(l: jvmstat.monitor.event.VmListener): void;
                removeVmListener(l: jvmstat.monitor.event.VmListener): void;
              }
              interface FileMonitoredVm extends CombineTypes<[_FileMonitoredVm, sun.jvmstat.perfdata.monitor.AbstractMonitoredVm]> {}
              interface _MonitoredHostFileService$$static extends ClassLike {
                new(): MonitoredHostFileService;
              }
              let MonitoredHostFileService: _MonitoredHostFileService$$static;
              interface _MonitoredHostFileService {
                getMonitoredHost(hostId: jvmstat.monitor.HostIdentifier): jvmstat.monitor.MonitoredHost;
                getScheme(): string;
              }
              interface MonitoredHostFileService extends CombineTypes<[_MonitoredHostFileService, java.lang.Object, sun.jvmstat.monitor.MonitoredHostService]> {}
              interface _MonitoredHostProvider$$static extends ClassLike {
                readonly DEFAULT_POLLING_INTERVAL: int;
                new(hostId: jvmstat.monitor.HostIdentifier): MonitoredHostProvider;
              }
              let MonitoredHostProvider: _MonitoredHostProvider$$static;
              interface _MonitoredHostProvider {
                activeVms(): java.util.Set<int>;
                addHostListener(listener: jvmstat.monitor.event.HostListener): void;
                detach(vm: jvmstat.monitor.MonitoredVm): void;
                getMonitoredVm(vmid: jvmstat.monitor.VmIdentifier): jvmstat.monitor.MonitoredVm;
                getMonitoredVm(vmid: jvmstat.monitor.VmIdentifier, interval: int): jvmstat.monitor.MonitoredVm;
                removeHostListener(listener: jvmstat.monitor.event.HostListener): void;
              }
              interface MonitoredHostProvider extends CombineTypes<[_MonitoredHostProvider, sun.jvmstat.monitor.MonitoredHost]> {}
              interface _PerfDataBuffer$$static extends ClassLike {
                new(vmid: jvmstat.monitor.VmIdentifier): PerfDataBuffer;
              }
              let PerfDataBuffer: _PerfDataBuffer$$static;
              interface _PerfDataBuffer {
              }
              interface PerfDataBuffer extends CombineTypes<[_PerfDataBuffer, sun.jvmstat.perfdata.monitor.AbstractPerfDataBuffer]> {}
            }
            module local {
              interface _LocalEventTimer$$static extends ClassLike {
                getInstance(): LocalEventTimer;
                _instance: LocalEventTimer;
              }
              let LocalEventTimer: _LocalEventTimer$$static;
              interface _LocalEventTimer {
              }
              interface LocalEventTimer extends CombineTypes<[_LocalEventTimer, java.util.Timer]> {}
              interface _LocalMonitoredVm$$static extends ClassLike {
                _cast<T>(x: any): T;
                new(vmid: jvmstat.monitor.VmIdentifier, interval: int): LocalMonitoredVm;
              }
              let LocalMonitoredVm: _LocalMonitoredVm$$static;
              interface _LocalMonitoredVm {
                addVmListener(l: jvmstat.monitor.event.VmListener): void;
                detach(): void;
                _fireMonitorStatusChangedEvents(inserted: java.util.List<jvmstat.monitor.Monitor>, removed: java.util.List<jvmstat.monitor.Monitor>): void;
                _fireMonitorsUpdatedEvents(): void;
                removeVmListener(l: jvmstat.monitor.event.VmListener): void;
                setInterval(newInterval: int): void;
                _listeners: java.util.ArrayList<jvmstat.monitor.event.VmListener>;
                _task: LocalMonitoredVm$NotifierTask;
              }
              interface LocalMonitoredVm extends CombineTypes<[_LocalMonitoredVm, sun.jvmstat.perfdata.monitor.AbstractMonitoredVm]> {}
              interface _LocalMonitoredVm$NotifierTask$$static extends ClassLike {
              }
              let LocalMonitoredVm$NotifierTask: _LocalMonitoredVm$NotifierTask$$static;
              interface _LocalMonitoredVm$NotifierTask {
                run(): void;
                _this$0: LocalMonitoredVm;
              }
              interface LocalMonitoredVm$NotifierTask extends CombineTypes<[_LocalMonitoredVm$NotifierTask, sun.jvmstat.perfdata.monitor.CountedTimerTask]> {}
              interface _LocalVmManager$$static extends ClassLike {
                new(): LocalVmManager;
              }
              let LocalVmManager: _LocalVmManager$$static;
              interface _LocalVmManager {
                activeVms(): java.util.Set<int>;
                _userDirFileFilter: java.io.FilenameFilter;
                _userDirFilter: java.io.FilenameFilter;
              }
              interface LocalVmManager extends CombineTypes<[_LocalVmManager, java.lang.Object]> {}
              interface _MonitoredHostLocalService$$static extends ClassLike {
                new(): MonitoredHostLocalService;
              }
              let MonitoredHostLocalService: _MonitoredHostLocalService$$static;
              interface _MonitoredHostLocalService {
                getMonitoredHost(hostId: jvmstat.monitor.HostIdentifier): jvmstat.monitor.MonitoredHost;
                getScheme(): string;
              }
              interface MonitoredHostLocalService extends CombineTypes<[_MonitoredHostLocalService, java.lang.Object, sun.jvmstat.monitor.MonitoredHostService]> {}
              interface _MonitoredHostProvider$$static extends ClassLike {
                _DEFAULT_POLLING_INTERVAL: int;
                new(hostId: jvmstat.monitor.HostIdentifier): MonitoredHostProvider;
              }
              let MonitoredHostProvider: _MonitoredHostProvider$$static;
              interface _MonitoredHostProvider {
                activeVms(): java.util.Set<int>;
                addHostListener(listener: jvmstat.monitor.event.HostListener): void;
                detach(vm: jvmstat.monitor.MonitoredVm): void;
                _fireVmStatusChangedEvents(active: java.util.Set<int>, started: java.util.Set<int>, terminated: java.util.Set<int>): void;
                getMonitoredVm(vmid: jvmstat.monitor.VmIdentifier): jvmstat.monitor.MonitoredVm;
                getMonitoredVm(vmid: jvmstat.monitor.VmIdentifier, interval: int): jvmstat.monitor.MonitoredVm;
                removeHostListener(listener: jvmstat.monitor.event.HostListener): void;
                setInterval(newInterval: int): void;
                _activeVms: java.util.HashSet<int>;
                _listeners: java.util.ArrayList<jvmstat.monitor.event.HostListener>;
                _task: MonitoredHostProvider$NotifierTask;
                _vmManager: LocalVmManager;
              }
              interface MonitoredHostProvider extends CombineTypes<[_MonitoredHostProvider, sun.jvmstat.monitor.MonitoredHost]> {}
              interface _MonitoredHostProvider$NotifierTask$$static extends ClassLike {
              }
              let MonitoredHostProvider$NotifierTask: _MonitoredHostProvider$NotifierTask$$static;
              interface _MonitoredHostProvider$NotifierTask {
                run(): void;
                _this$0: MonitoredHostProvider;
              }
              interface MonitoredHostProvider$NotifierTask extends CombineTypes<[_MonitoredHostProvider$NotifierTask, sun.jvmstat.perfdata.monitor.CountedTimerTask]> {}
              interface _PerfDataBuffer$$static extends ClassLike {
                _perf: jdk.internal.perf.Perf;
                new(vmid: jvmstat.monitor.VmIdentifier): PerfDataBuffer;
              }
              let PerfDataBuffer: _PerfDataBuffer$$static;
              interface _PerfDataBuffer {
              }
              interface PerfDataBuffer extends CombineTypes<[_PerfDataBuffer, sun.jvmstat.perfdata.monitor.AbstractPerfDataBuffer]> {}
              interface _PerfDataFile$$static extends ClassLike {
                getLocalVmId(file: java.io.File): int;
                getTempDirectories(vmid: int): java.util.List<string>;
                getTempDirectory(): string;
                readonly dirNamePrefix: string;
                readonly fileNamePattern: string;
                _platSupport: PlatformSupport;
                readonly userDirNamePattern: string;
              }
              let PerfDataFile: _PerfDataFile$$static;
              interface _PerfDataFile {
              }
              interface PerfDataFile extends CombineTypes<[_PerfDataFile, java.lang.Object]> {}
            }
          }
          module v1_0 {
            interface _BasicType$$static extends ClassLike {
              toBasicType(i: int): BasicType;
              readonly ADDRESS: BasicType;
              readonly ARRAY: BasicType;
              readonly BOOLEAN: BasicType;
              readonly BYTE: BasicType;
              readonly CHAR: BasicType;
              readonly DOUBLE: BasicType;
              readonly FLOAT: BasicType;
              readonly ILLEGAL: BasicType;
              readonly INT: BasicType;
              readonly LONG: BasicType;
              readonly OBJECT: BasicType;
              readonly SHORT: BasicType;
              readonly VOID: BasicType;
              _basicTypes: BasicType[];
            }
            let BasicType: _BasicType$$static;
            interface _BasicType {
              intValue(): int;
              toString(): string;
              _name: string;
              _value: int;
            }
            interface BasicType extends CombineTypes<[_BasicType, java.lang.Object]> {}
            interface _PerfDataBuffer$$static extends ClassLike {
              _EMPTY_LIST: java.util.ArrayList<jvmstat.monitor.Monitor>;
              _PERFDATA_DATAATTR_OFFSET: int;
              _PERFDATA_DATAATTR_SIZE: int;
              _PERFDATA_DATATYPE_OFFSET: int;
              _PERFDATA_DATATYPE_SIZE: int;
              _PERFDATA_DATAUNITS_OFFSET: int;
              _PERFDATA_DATAUNITS_SIZE: int;
              _PERFDATA_ENTRYLENGTH_OFFSET: int;
              _PERFDATA_ENTRYLENGTH_SIZE: int;
              _PERFDATA_FLAGS_OFFSET: int;
              _PERFDATA_FLAGS_SIZE: int;
              _PERFDATA_NAMELENGTH_OFFSET: int;
              _PERFDATA_NAMELENGTH_SIZE: int;
              _PERFDATA_NAME_OFFSET: int;
              _PERFDATA_VECTORLENGTH_OFFSET: int;
              _PERFDATA_VECTORLENGTH_SIZE: int;
              _syncWaitMs: int;
              new(buffer: java.nio.ByteBuffer, lvmid: int): PerfDataBuffer;
            }
            let PerfDataBuffer: _PerfDataBuffer$$static;
            interface _PerfDataBuffer {
              _buildMonitorMap(map: java.util.Map<string,jvmstat.monitor.Monitor>): void;
              _buildPseudoMonitors(map: java.util.Map<string,jvmstat.monitor.Monitor>): void;
              _getMonitorStatus(map: java.util.Map<string,jvmstat.monitor.Monitor>): MonitorStatus;
              _getNewMonitors(map: java.util.Map<string,jvmstat.monitor.Monitor>): void;
              _getNextMonitorEntry(): jvmstat.monitor.Monitor;
              _pollFor(map: java.util.Map<string,jvmstat.monitor.Monitor>, name: string, timeLimit: long): jvmstat.monitor.Monitor;
              _synchWithTarget(map: java.util.Map<string,jvmstat.monitor.Monitor>): void;
              _insertedMonitors: java.util.ArrayList<jvmstat.monitor.Monitor>;
              _lastModificationTime: long;
              _lastUsed: int;
              _nextEntry: int;
              _overflow: jvmstat.monitor.IntegerMonitor;
              _perfDataItem: int;
              _pollForEntry: int;
              _prologue: PerfDataBufferPrologue;
            }
            interface PerfDataBuffer extends CombineTypes<[_PerfDataBuffer, sun.jvmstat.perfdata.monitor.PerfDataBufferImpl]> {}
            interface _PerfDataBufferPrologue$$static extends ClassLike {
              _PERFDATA_BUFFER_SIZE_NAME: string;
              _PERFDATA_BUFFER_USED_NAME: string;
              _PERFDATA_MODTIMESTAMP_NAME: string;
              _PERFDATA_OVERFLOW_NAME: string;
              _PERFDATA_PROLOG_MODTIMESTAMP_OFFSET: int;
              _PERFDATA_PROLOG_MODTIMESTAMP_SIZE: int;
              _PERFDATA_PROLOG_OVERFLOW_OFFSET: int;
              _PERFDATA_PROLOG_OVERFLOW_SIZE: int;
              _PERFDATA_PROLOG_SIZE: int;
              _PERFDATA_PROLOG_USED_OFFSET: int;
              _PERFDATA_PROLOG_USED_SIZE: int;
              _SUPPORTED_MAJOR_VERSION: int;
              _SUPPORTED_MINOR_VERSION: int;
              new(byteBuffer: java.nio.ByteBuffer): PerfDataBufferPrologue;
            }
            let PerfDataBufferPrologue: _PerfDataBufferPrologue$$static;
            interface _PerfDataBufferPrologue {
              getBufferSize(): int;
              getModificationTimeStamp(): long;
              getOverflow(): int;
              getSize(): int;
              getUsed(): int;
              isAccessible(): boolean;
              modificationTimeStampBuffer(): java.nio.LongBuffer;
              overflowBuffer(): java.nio.IntBuffer;
              sizeBuffer(): java.nio.IntBuffer;
              supportsAccessible(): boolean;
              usedBuffer(): java.nio.IntBuffer;
            }
            interface PerfDataBufferPrologue extends CombineTypes<[_PerfDataBufferPrologue, sun.jvmstat.perfdata.monitor.AbstractPerfDataBufferPrologue]> {}
          }
          module v2_0 {
            interface _PerfDataBuffer$$static extends ClassLike {
              _EMPTY_LIST: java.util.ArrayList<jvmstat.monitor.Monitor>;
              _PERFDATA_DATAOFFSET_OFFSET: int;
              _PERFDATA_DATAOFFSET_SIZE: int;
              _PERFDATA_DATATYPE_OFFSET: int;
              _PERFDATA_DATATYPE_SIZE: int;
              _PERFDATA_DATAUNITS_OFFSET: int;
              _PERFDATA_DATAUNITS_SIZE: int;
              _PERFDATA_DATAVAR_OFFSET: int;
              _PERFDATA_DATAVAR_SIZE: int;
              _PERFDATA_ENTRYLENGTH_OFFSET: int;
              _PERFDATA_ENTRYLENGTH_SIZE: int;
              _PERFDATA_FLAGS_OFFSET: int;
              _PERFDATA_FLAGS_SIZE: int;
              _PERFDATA_NAMEOFFSET_OFFSET: int;
              _PERFDATA_NAMEOFFSET_SIZE: int;
              _PERFDATA_VECTORLENGTH_OFFSET: int;
              _PERFDATA_VECTORLENGTH_SIZE: int;
              _syncWaitMs: int;
              new(buffer: java.nio.ByteBuffer, lvmid: int): PerfDataBuffer;
            }
            let PerfDataBuffer: _PerfDataBuffer$$static;
            interface _PerfDataBuffer {
              _buildMonitorMap(map: java.util.Map<string,jvmstat.monitor.Monitor>): void;
              _buildPseudoMonitors(map: java.util.Map<string,jvmstat.monitor.Monitor>): void;
              _getMonitorStatus(map: java.util.Map<string,jvmstat.monitor.Monitor>): MonitorStatus;
              _getNewMonitors(map: java.util.Map<string,jvmstat.monitor.Monitor>): void;
              _getNextMonitorEntry(): jvmstat.monitor.Monitor;
              _synchWithTarget(): void;
              _insertedMonitors: java.util.ArrayList<jvmstat.monitor.Monitor>;
              _lastNumEntries: long;
              _nextEntry: int;
              _overflow: jvmstat.monitor.IntegerMonitor;
              _prologue: PerfDataBufferPrologue;
            }
            interface PerfDataBuffer extends CombineTypes<[_PerfDataBuffer, sun.jvmstat.perfdata.monitor.PerfDataBufferImpl]> {}
            interface _PerfDataBufferPrologue$$static extends ClassLike {
              _PERFDATA_BUFFER_SIZE_NAME: string;
              _PERFDATA_BUFFER_USED_NAME: string;
              _PERFDATA_MODTIMESTAMP_NAME: string;
              _PERFDATA_NUMENTRIES_NAME: string;
              _PERFDATA_OVERFLOW_NAME: string;
              _PERFDATA_PROLOG_ACCESSIBLE_OFFSET: int;
              _PERFDATA_PROLOG_ACCESSIBLE_SIZE: int;
              _PERFDATA_PROLOG_ENTRYOFFSET_OFFSET: int;
              _PERFDATA_PROLOG_ENTRYOFFSET_SIZE: int;
              _PERFDATA_PROLOG_MODTIMESTAMP_OFFSET: int;
              _PERFDATA_PROLOG_MODTIMESTAMP_SIZE: int;
              _PERFDATA_PROLOG_NUMENTRIES_OFFSET: int;
              _PERFDATA_PROLOG_NUMENTRIES_SIZE: int;
              _PERFDATA_PROLOG_OVERFLOW_OFFSET: int;
              _PERFDATA_PROLOG_OVERFLOW_SIZE: int;
              _PERFDATA_PROLOG_SIZE: int;
              _PERFDATA_PROLOG_USED_OFFSET: int;
              _PERFDATA_PROLOG_USED_SIZE: int;
              _SUPPORTED_MAJOR_VERSION: int;
              _SUPPORTED_MINOR_VERSION: int;
              new(byteBuffer: java.nio.ByteBuffer): PerfDataBufferPrologue;
            }
            let PerfDataBufferPrologue: _PerfDataBufferPrologue$$static;
            interface _PerfDataBufferPrologue {
              getBufferSize(): int;
              getEntryOffset(): int;
              getModificationTimeStamp(): long;
              getNumEntries(): int;
              getOverflow(): int;
              getSize(): int;
              getUsed(): int;
              isAccessible(): boolean;
              _modificationTimeStampBuffer(): java.nio.LongBuffer;
              _numEntriesBuffer(): java.nio.IntBuffer;
              _overflowBuffer(): java.nio.IntBuffer;
              _sizeBuffer(): java.nio.IntBuffer;
              supportsAccessible(): boolean;
              _usedBuffer(): java.nio.IntBuffer;
            }
            interface PerfDataBufferPrologue extends CombineTypes<[_PerfDataBufferPrologue, sun.jvmstat.perfdata.monitor.AbstractPerfDataBufferPrologue]> {}
            interface _TypeCode$$static extends ClassLike {
              toTypeCode(c: char): TypeCode;
              toTypeCode(b: byte): TypeCode;
              readonly ARRAY: TypeCode;
              readonly BOOLEAN: TypeCode;
              readonly BYTE: TypeCode;
              readonly CHAR: TypeCode;
              readonly DOUBLE: TypeCode;
              readonly FLOAT: TypeCode;
              readonly INT: TypeCode;
              readonly LONG: TypeCode;
              readonly OBJECT: TypeCode;
              readonly SHORT: TypeCode;
              readonly VOID: TypeCode;
              _basicTypes: TypeCode[];
            }
            let TypeCode: _TypeCode$$static;
            interface _TypeCode {
              toChar(): int;
              toString(): string;
              _name: string;
              _value: char;
            }
            interface TypeCode extends CombineTypes<[_TypeCode, java.lang.Object]> {}
          }
          interface _AbstractMonitoredVm$$static extends ClassLike {
            new(vmid: jvmstat.monitor.VmIdentifier, interval: int): AbstractMonitoredVm;
          }
          let AbstractMonitoredVm: _AbstractMonitoredVm$$static;
          interface _AbstractMonitoredVm {
            addVmListener(a0: jvmstat.monitor.event.VmListener): void;
            clearLastException(): void;
            detach(): void;
            findByName(name: string): jvmstat.monitor.Monitor;
            findByPattern(patternString: string): java.util.List<jvmstat.monitor.Monitor>;
            getBytes(): byte[];
            getCapacity(): int;
            getInterval(): int;
            getLastException(): java.lang.Exception;
            getMonitorStatus(): MonitorStatus;
            getVmIdentifier(): jvmstat.monitor.VmIdentifier;
            isErrored(): boolean;
            removeVmListener(a0: jvmstat.monitor.event.VmListener): void;
            setInterval(interval: int): void;
            setLastException(e: java.lang.Exception): void;
            _interval: int;
            _pdb: AbstractPerfDataBuffer;
            _vmid: jvmstat.monitor.VmIdentifier;
          }
          interface AbstractMonitoredVm extends CombineTypes<[_AbstractMonitoredVm, sun.jvmstat.monitor.BufferedMonitoredVm, java.lang.Object]> {}
          interface _AbstractPerfDataBuffer$$static extends ClassLike {
            new(): AbstractPerfDataBuffer;
          }
          let AbstractPerfDataBuffer: _AbstractPerfDataBuffer$$static;
          interface _AbstractPerfDataBuffer {
            _createPerfDataBuffer(bb: java.nio.ByteBuffer, lvmid: int): void;
            findByName(name: string): jvmstat.monitor.Monitor;
            findByPattern(patternString: string): java.util.List<jvmstat.monitor.Monitor>;
            getByteBuffer(): java.nio.ByteBuffer;
            getBytes(): byte[];
            getCapacity(): int;
            getLocalVmId(): int;
            getMonitorStatus(): MonitorStatus;
            _impl: PerfDataBufferImpl;
          }
          interface AbstractPerfDataBuffer extends CombineTypes<[_AbstractPerfDataBuffer, java.lang.Object]> {}
          interface _AbstractPerfDataBufferPrologue$$static extends ClassLike {
            getByteOrder(bb: java.nio.ByteBuffer): java.nio.ByteOrder;
            getMagic(bb: java.nio.ByteBuffer): int;
            getMajorVersion(bb: java.nio.ByteBuffer): int;
            getMinorVersion(bb: java.nio.ByteBuffer): int;
            _PERFDATA_BIG_ENDIAN: byte;
            _PERFDATA_LITTLE_ENDIAN: byte;
            _PERFDATA_MAGIC: int;
            readonly PERFDATA_MAJOR_NAME: string;
            readonly PERFDATA_MINOR_NAME: string;
            _PERFDATA_PROLOG_BYTEORDER_OFFSET: int;
            _PERFDATA_PROLOG_BYTEORDER_SIZE: int;
            _PERFDATA_PROLOG_MAGIC_OFFSET: int;
            _PERFDATA_PROLOG_MAJOR_OFFSET: int;
            _PERFDATA_PROLOG_MAJOR_SIZE: int;
            _PERFDATA_PROLOG_MINOR_OFFSET: int;
            _PERFDATA_PROLOG_MINOR_SIZE: int;
            _PERFDATA_PROLOG_OFFSET: int;
            _PERFDATA_PROLOG_RESERVEDB1_OFFSET: int;
            _PERFDATA_PROLOG_RESERVEDB1_SIZE: int;
            _PERFDATA_PROLOG_SIZE: int;
            new(byteBuffer: java.nio.ByteBuffer): AbstractPerfDataBufferPrologue;
          }
          let AbstractPerfDataBufferPrologue: _AbstractPerfDataBufferPrologue$$static;
          interface _AbstractPerfDataBufferPrologue {
            getByteOrder(): java.nio.ByteOrder;
            getMagic(): int;
            getMajorVersion(): int;
            getMinorVersion(): int;
            getSize(): int;
            isAccessible(): boolean;
            majorVersionBuffer(): java.nio.IntBuffer;
            minorVersionBuffer(): java.nio.IntBuffer;
            supportsAccessible(): boolean;
            _byteBuffer: java.nio.ByteBuffer;
          }
          interface AbstractPerfDataBufferPrologue extends CombineTypes<[_AbstractPerfDataBufferPrologue, java.lang.Object]> {}
          interface _AliasFileParser$$static extends ClassLike {
            _ALIAS: string;
            _new(inputfile: java.net.URL): AliasFileParser;
          }
          let AliasFileParser: _AliasFileParser$$static;
          interface _AliasFileParser {
            _match(ttype: int, token: string): void;
            _match(ttype: int): void;
            _match(token: string): void;
            _nextToken(): void;
            parse(map: java.util.Map<string,java.util.ArrayList<string>>): void;
            _currentToken: AliasFileParser$Token;
            _inputfile: java.net.URL;
            _st: java.io.StreamTokenizer;
          }
          interface AliasFileParser extends CombineTypes<[_AliasFileParser, java.lang.Object]> {}
          interface _AliasFileParser$Token$$static extends ClassLike {
            new(a0: AliasFileParser, ttype: int, sval: string): AliasFileParser$Token;
          }
          let AliasFileParser$Token: _AliasFileParser$Token$$static;
          interface _AliasFileParser$Token {
            sval: string;
            ttype: int;
          }
          interface AliasFileParser$Token extends CombineTypes<[_AliasFileParser$Token, java.lang.Object]> {}
          interface _CountedTimerTask$$static extends ClassLike {
            new(): CountedTimerTask;
          }
          let CountedTimerTask: _CountedTimerTask$$static;
          interface _CountedTimerTask {
            executionCount(): long;
            run(): void;
            _executionCount: long;
          }
          interface CountedTimerTask extends CombineTypes<[_CountedTimerTask, java.util.TimerTask]> {}
          interface _CountedTimerTaskUtils$$static extends ClassLike {
            reschedule(timer: java.util.Timer, oldTask: CountedTimerTask, newTask: CountedTimerTask, oldInterval: int, newInterval: int): void;
            new(): CountedTimerTaskUtils;
          }
          let CountedTimerTaskUtils: _CountedTimerTaskUtils$$static;
          interface _CountedTimerTaskUtils {
          }
          interface CountedTimerTaskUtils extends CombineTypes<[_CountedTimerTaskUtils, java.lang.Object]> {}
          interface _MonitorDataException$$static extends ClassLike {
            new(): MonitorDataException;
            new(s: string): MonitorDataException;
          }
          let MonitorDataException: _MonitorDataException$$static;
          interface _MonitorDataException {
          }
          interface MonitorDataException extends CombineTypes<[_MonitorDataException, sun.jvmstat.monitor.MonitorException]> {}
          interface _MonitorStatus$$static extends ClassLike {
            new(inserted: java.util.List<jvmstat.monitor.Monitor>, removed: java.util.List<jvmstat.monitor.Monitor>): MonitorStatus;
          }
          let MonitorStatus: _MonitorStatus$$static;
          interface _MonitorStatus {
            getInserted(): java.util.List<jvmstat.monitor.Monitor>;
            getRemoved(): java.util.List<jvmstat.monitor.Monitor>;
            _inserted: java.util.List<jvmstat.monitor.Monitor>;
            _removed: java.util.List<jvmstat.monitor.Monitor>;
          }
          interface MonitorStatus extends CombineTypes<[_MonitorStatus, java.lang.Object]> {}
          interface _MonitorStructureException$$static extends ClassLike {
            new(): MonitorStructureException;
            new(s: string): MonitorStructureException;
          }
          let MonitorStructureException: _MonitorStructureException$$static;
          interface _MonitorStructureException {
          }
          interface MonitorStructureException extends CombineTypes<[_MonitorStructureException, sun.jvmstat.monitor.MonitorException]> {}
          interface _MonitorTypeException$$static extends ClassLike {
            new(): MonitorTypeException;
            new(s: string): MonitorTypeException;
          }
          let MonitorTypeException: _MonitorTypeException$$static;
          interface _MonitorTypeException {
          }
          interface MonitorTypeException extends CombineTypes<[_MonitorTypeException, sun.jvmstat.monitor.MonitorException]> {}
          interface _MonitorVersionException$$static extends ClassLike {
            new(): MonitorVersionException;
            new(message: string): MonitorVersionException;
          }
          let MonitorVersionException: _MonitorVersionException$$static;
          interface _MonitorVersionException {
          }
          interface MonitorVersionException extends CombineTypes<[_MonitorVersionException, sun.jvmstat.monitor.MonitorException]> {}
          interface _PerfByteArrayMonitor$$static extends ClassLike {
            new(name: string, u: jvmstat.monitor.Units, v: jvmstat.monitor.Variability, supported: boolean, bb: java.nio.ByteBuffer, vectorLength: int): PerfByteArrayMonitor;
          }
          let PerfByteArrayMonitor: _PerfByteArrayMonitor$$static;
          interface _PerfByteArrayMonitor {
            byteArrayValue(): byte[];
            byteAt(index: int): byte;
            getMaximumLength(): int;
            getValue(): any;
            _bb: java.nio.ByteBuffer;
          }
          interface PerfByteArrayMonitor extends CombineTypes<[_PerfByteArrayMonitor, sun.jvmstat.monitor.ByteArrayMonitor, sun.jvmstat.monitor.AbstractMonitor]> {}
          interface _PerfDataBufferImpl$$static extends ClassLike {
            _new(buffer: java.nio.ByteBuffer, lvmid: int): PerfDataBufferImpl;
          }
          let PerfDataBufferImpl: _PerfDataBufferImpl$$static;
          interface _PerfDataBufferImpl {
            _buildAliasMap(): void;
            _buildMonitorMap(a0: java.util.Map<string,jvmstat.monitor.Monitor>): void;
            _findByAlias(name: string): jvmstat.monitor.Monitor;
            findByName(name: string): jvmstat.monitor.Monitor;
            findByPattern(patternString: string): java.util.List<jvmstat.monitor.Monitor>;
            _getByteBuffer(): java.nio.ByteBuffer;
            getBytes(): byte[];
            getCapacity(): int;
            getLocalVmId(): int;
            getMonitorStatus(): MonitorStatus;
            _getMonitorStatus(a0: java.util.Map<string,jvmstat.monitor.Monitor>): MonitorStatus;
            _getNewMonitors(a0: java.util.Map<string,jvmstat.monitor.Monitor>): void;
            _aliasCache: java.util.Map<string,jvmstat.monitor.Monitor>;
            _aliasMap: java.util.Map<string,java.util.ArrayList<string>>;
            _buffer: java.nio.ByteBuffer;
            _lvmid: int;
            _monitors: java.util.Map<string,jvmstat.monitor.Monitor>;
          }
          interface PerfDataBufferImpl extends CombineTypes<[_PerfDataBufferImpl, java.lang.Object]> {}
          interface _PerfIntegerMonitor$$static extends ClassLike {
            new(name: string, u: jvmstat.monitor.Units, v: jvmstat.monitor.Variability, supported: boolean, ib: java.nio.IntBuffer): PerfIntegerMonitor;
          }
          let PerfIntegerMonitor: _PerfIntegerMonitor$$static;
          interface _PerfIntegerMonitor {
            getValue(): any;
            intValue(): int;
            _ib: java.nio.IntBuffer;
          }
          interface PerfIntegerMonitor extends CombineTypes<[_PerfIntegerMonitor, sun.jvmstat.monitor.IntegerMonitor, sun.jvmstat.monitor.AbstractMonitor]> {}
          interface _PerfLongMonitor$$static extends ClassLike {
            new(name: string, u: jvmstat.monitor.Units, v: jvmstat.monitor.Variability, supported: boolean, lb: java.nio.LongBuffer): PerfLongMonitor;
          }
          let PerfLongMonitor: _PerfLongMonitor$$static;
          interface _PerfLongMonitor {
            getValue(): any;
            longValue(): long;
            _lb: java.nio.LongBuffer;
          }
          interface PerfLongMonitor extends CombineTypes<[_PerfLongMonitor, sun.jvmstat.monitor.LongMonitor, sun.jvmstat.monitor.AbstractMonitor]> {}
          interface _PerfStringConstantMonitor$$static extends ClassLike {
            new(name: string, supported: boolean, bb: java.nio.ByteBuffer): PerfStringConstantMonitor;
          }
          let PerfStringConstantMonitor: _PerfStringConstantMonitor$$static;
          interface _PerfStringConstantMonitor {
            getValue(): any;
            stringValue(): string;
            _data: string;
          }
          interface PerfStringConstantMonitor extends CombineTypes<[_PerfStringConstantMonitor, sun.jvmstat.perfdata.monitor.PerfStringMonitor]> {}
          interface _PerfStringMonitor$$static extends ClassLike {
            _defaultCharset: java.nio.charset.Charset;
            new(name: string, v: jvmstat.monitor.Variability, supported: boolean, bb: java.nio.ByteBuffer): PerfStringMonitor;
            new(name: string, v: jvmstat.monitor.Variability, supported: boolean, bb: java.nio.ByteBuffer, maxLength: int): PerfStringMonitor;
          }
          let PerfStringMonitor: _PerfStringMonitor$$static;
          interface _PerfStringMonitor {
            getValue(): any;
            stringValue(): string;
          }
          interface PerfStringMonitor extends CombineTypes<[_PerfStringMonitor, sun.jvmstat.monitor.StringMonitor, sun.jvmstat.perfdata.monitor.PerfByteArrayMonitor]> {}
          interface _PerfStringVariableMonitor$$static extends ClassLike {
            new(name: string, supported: boolean, bb: java.nio.ByteBuffer): PerfStringVariableMonitor;
            new(name: string, supported: boolean, bb: java.nio.ByteBuffer, maxLength: int): PerfStringVariableMonitor;
          }
          let PerfStringVariableMonitor: _PerfStringVariableMonitor$$static;
          interface _PerfStringVariableMonitor {
          }
          interface PerfStringVariableMonitor extends CombineTypes<[_PerfStringVariableMonitor, sun.jvmstat.perfdata.monitor.PerfStringMonitor]> {}
          interface _SyntaxException$$static extends ClassLike {
            new(lineno: int): SyntaxException;
          }
          let SyntaxException: _SyntaxException$$static;
          interface _SyntaxException {
            getMessage(): string;
            _lineno: int;
          }
          interface SyntaxException extends CombineTypes<[_SyntaxException, java.lang.Exception]> {}
        }
      }
      interface _PlatformSupport$$static extends ClassLike {
        getInstance(): PlatformSupport;
        getTemporaryDirectory(): string;
        _tmpDirName: string;
        _new(): PlatformSupport;
      }
      let PlatformSupport: _PlatformSupport$$static;
      interface _PlatformSupport {
        getLocalVmId(file: java.io.File): int;
        getNamespaceVmId(pid: int): int;
        getTemporaryDirectories(vmid: int): java.util.List<string>;
      }
      interface PlatformSupport extends CombineTypes<[_PlatformSupport, java.lang.Object]> {}
    }
  }
}
