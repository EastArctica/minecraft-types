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
        module remote {
          interface _RemoteHost$$static extends ClassLike {
          }
          let RemoteHost: _RemoteHost$$static;
          interface _RemoteHost {
            activeVms(): int[];
            attachVm(a0: int): RemoteVm;
            detachVm(a0: RemoteVm): void;
          }
          interface RemoteHost extends CombineTypes<[_RemoteHost, java.rmi.Remote, java.lang.Object]> {}
          interface _RemoteVm$$static extends ClassLike {
          }
          let RemoteVm: _RemoteVm$$static;
          interface _RemoteVm {
            detach(): void;
            getBytes(): byte[];
            getCapacity(): int;
            getLocalVmId(): int;
          }
          interface RemoteVm extends CombineTypes<[_RemoteVm, java.rmi.Remote, java.lang.Object]> {}
        }
      }
      module perfdata {
        module monitor {
          module protocol {
            module rmi {
              interface _MonitoredHostProvider$$static extends ClassLike {
                _DEFAULT_POLLING_INTERVAL: int;
                _serverName: string;
                new(hostId: jvmstat.monitor.HostIdentifier): MonitoredHostProvider;
              }
              let MonitoredHostProvider: _MonitoredHostProvider$$static;
              interface _MonitoredHostProvider {
                activeVms(): java.util.Set<int>;
                addHostListener(listener: jvmstat.monitor.event.HostListener): void;
                detach(vm: jvmstat.monitor.MonitoredVm): void;
                _fireDisconnectedEvents(): void;
                _fireVmStatusChangedEvents(active: java.util.Set<int>, started: java.util.Set<int>, terminated: java.util.Set<int>): void;
                getMonitoredVm(vmid: jvmstat.monitor.VmIdentifier): jvmstat.monitor.MonitoredVm;
                getMonitoredVm(vmid: jvmstat.monitor.VmIdentifier, interval: int): jvmstat.monitor.MonitoredVm;
                removeHostListener(listener: jvmstat.monitor.event.HostListener): void;
                setInterval(newInterval: int): void;
                _activeVms: java.util.HashSet<int>;
                _listeners: java.util.ArrayList<jvmstat.monitor.event.HostListener>;
                _remoteHost: jvmstat.monitor.remote.RemoteHost;
                _task: MonitoredHostProvider$NotifierTask;
                _timer: java.util.Timer;
                _vmManager: RemoteVmManager;
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
              interface _MonitoredHostRmiService$$static extends ClassLike {
                new(): MonitoredHostRmiService;
              }
              let MonitoredHostRmiService: _MonitoredHostRmiService$$static;
              interface _MonitoredHostRmiService {
                getMonitoredHost(hostId: jvmstat.monitor.HostIdentifier): jvmstat.monitor.MonitoredHost;
                getScheme(): string;
              }
              interface MonitoredHostRmiService extends CombineTypes<[_MonitoredHostRmiService, java.lang.Object, sun.jvmstat.monitor.MonitoredHostService]> {}
              interface _PerfDataBuffer$$static extends ClassLike {
                new(rvm: jvmstat.monitor.remote.RemoteVm, lvmid: int): PerfDataBuffer;
              }
              let PerfDataBuffer: _PerfDataBuffer$$static;
              interface _PerfDataBuffer {
                sample(buffer: java.nio.ByteBuffer): void;
                _rvm: jvmstat.monitor.remote.RemoteVm;
              }
              interface PerfDataBuffer extends CombineTypes<[_PerfDataBuffer, sun.jvmstat.perfdata.monitor.AbstractPerfDataBuffer]> {}
              interface _RemoteMonitoredVm$$static extends ClassLike {
                new(rvm: jvmstat.monitor.remote.RemoteVm, vmid: jvmstat.monitor.VmIdentifier, timer: java.util.Timer, interval: int): RemoteMonitoredVm;
              }
              let RemoteMonitoredVm: _RemoteMonitoredVm$$static;
              interface _RemoteMonitoredVm {
                addVmListener(l: jvmstat.monitor.event.VmListener): void;
                attach(): void;
                detach(): void;
                _fireMonitorStatusChangedEvents(inserted: java.util.List<jvmstat.monitor.Monitor>, removed: java.util.List<jvmstat.monitor.Monitor>): void;
                _fireMonitorsUpdatedEvents(): void;
                getRemoteVm(): jvmstat.monitor.remote.RemoteVm;
                removeVmListener(l: jvmstat.monitor.event.VmListener): void;
                sample(): void;
                setInterval(newInterval: int): void;
                _listeners: java.util.ArrayList<jvmstat.monitor.event.VmListener>;
                _notifierTask: RemoteMonitoredVm$NotifierTask;
                _rvm: jvmstat.monitor.remote.RemoteVm;
                _samplerTask: RemoteMonitoredVm$SamplerTask;
                _timer: java.util.Timer;
                _updateBuffer: java.nio.ByteBuffer;
              }
              interface RemoteMonitoredVm extends CombineTypes<[_RemoteMonitoredVm, sun.jvmstat.perfdata.monitor.AbstractMonitoredVm]> {}
              interface _RemoteMonitoredVm$NotifierTask$$static extends ClassLike {
              }
              let RemoteMonitoredVm$NotifierTask: _RemoteMonitoredVm$NotifierTask$$static;
              interface _RemoteMonitoredVm$NotifierTask {
                run(): void;
                _this$0: RemoteMonitoredVm;
              }
              interface RemoteMonitoredVm$NotifierTask extends CombineTypes<[_RemoteMonitoredVm$NotifierTask, sun.jvmstat.perfdata.monitor.CountedTimerTask]> {}
              interface _RemoteMonitoredVm$SamplerTask$$static extends ClassLike {
              }
              let RemoteMonitoredVm$SamplerTask: _RemoteMonitoredVm$SamplerTask$$static;
              interface _RemoteMonitoredVm$SamplerTask {
                run(): void;
                _this$0: RemoteMonitoredVm;
              }
              interface RemoteMonitoredVm$SamplerTask extends CombineTypes<[_RemoteMonitoredVm$SamplerTask, sun.jvmstat.perfdata.monitor.CountedTimerTask]> {}
              interface _RemoteVmManager$$static extends ClassLike {
                new(remoteHost: jvmstat.monitor.remote.RemoteHost): RemoteVmManager;
                new(remoteHost: jvmstat.monitor.remote.RemoteHost, user: string): RemoteVmManager;
              }
              let RemoteVmManager: _RemoteVmManager$$static;
              interface _RemoteVmManager {
                activeVms(): java.util.Set<int>;
                _remoteHost: jvmstat.monitor.remote.RemoteHost;
                _user: string;
              }
              interface RemoteVmManager extends CombineTypes<[_RemoteVmManager, java.lang.Object]> {}
            }
          }
        }
      }
    }
    module tools {
      module jstatd {
        interface _Jstatd$$static extends ClassLike {
          _bind(name: string, remoteHost: sun.jvmstat.monitor.remote.RemoteHost): void;
          main(args: string[]): void;
          _printUsage(): void;
          _port: int;
          _registry: java.rmi.registry.Registry;
          _remoteHost: sun.jvmstat.monitor.remote.RemoteHost;
          _rmiFilterPattern: string;
          _startRegistry: boolean;
          new(): Jstatd;
        }
        let Jstatd: _Jstatd$$static;
        interface _Jstatd {
        }
        interface Jstatd extends CombineTypes<[_Jstatd, java.lang.Object]> {}
        interface _RemoteHostImpl$$static extends ClassLike {
          _rvm: sun.jvmstat.monitor.remote.RemoteVm;
          new(): RemoteHostImpl;
          new(rmiPort: int): RemoteHostImpl;
        }
        let RemoteHostImpl: _RemoteHostImpl$$static;
        interface _RemoteHostImpl {
          activeVms(): int[];
          attachVm(lvmid: int): sun.jvmstat.monitor.remote.RemoteVm;
          detachVm(rvm: sun.jvmstat.monitor.remote.RemoteVm): void;
          disconnected(ev: sun.jvmstat.monitor.event.HostEvent): void;
          vmStatusChanged(ev: sun.jvmstat.monitor.event.VmStatusChangeEvent): void;
          _activeVms: java.util.Set<int>;
          _monitoredHost: sun.jvmstat.monitor.MonitoredHost;
          _rmiPort: int;
        }
        interface RemoteHostImpl extends CombineTypes<[_RemoteHostImpl, java.lang.Object, sun.jvmstat.monitor.event.HostListener, sun.jvmstat.monitor.remote.RemoteHost]> {}
        interface _RemoteVmImpl$$static extends ClassLike {
          _new(mvm: sun.jvmstat.monitor.BufferedMonitoredVm): RemoteVmImpl;
        }
        let RemoteVmImpl: _RemoteVmImpl$$static;
        interface _RemoteVmImpl {
          detach(): void;
          getBytes(): byte[];
          getCapacity(): int;
          getLocalVmId(): int;
          _mvm: sun.jvmstat.monitor.BufferedMonitoredVm;
        }
        interface RemoteVmImpl extends CombineTypes<[_RemoteVmImpl, sun.jvmstat.monitor.remote.RemoteVm, java.lang.Object]> {}
      }
    }
  }
}
