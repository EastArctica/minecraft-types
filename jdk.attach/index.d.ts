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
        module attach {
          module spi {
            interface _AttachProvider$$static extends ClassLike {
              providers(): java.util.List<AttachProvider>;
              _lock: any;
              _providers: java.util.List<AttachProvider>;
              _new(): AttachProvider;
            }
            let AttachProvider: _AttachProvider$$static;
            interface _AttachProvider {
              attachVirtualMachine(a0: string): VirtualMachine;
              attachVirtualMachine(vmd: VirtualMachineDescriptor): VirtualMachine;
              listVirtualMachines(): java.util.List<VirtualMachineDescriptor>;
              name(): string;
              type(): string;
            }
            interface AttachProvider extends CombineTypes<[_AttachProvider, java.lang.Object]> {}
          }
          interface _AgentInitializationException$$static extends ClassLike {
            _serialVersionUID: long;
            new(): AgentInitializationException;
            new(s: string): AgentInitializationException;
            new(s: string, returnValue: int): AgentInitializationException;
          }
          let AgentInitializationException: _AgentInitializationException$$static;
          interface _AgentInitializationException {
            returnValue(): int;
            _returnValue: int;
          }
          interface AgentInitializationException extends CombineTypes<[_AgentInitializationException, java.lang.Exception]> {}
          interface _AgentLoadException$$static extends ClassLike {
            _serialVersionUID: long;
            new(): AgentLoadException;
            new(s: string): AgentLoadException;
          }
          let AgentLoadException: _AgentLoadException$$static;
          interface _AgentLoadException {
          }
          interface AgentLoadException extends CombineTypes<[_AgentLoadException, java.lang.Exception]> {}
          interface _AttachNotSupportedException$$static extends ClassLike {
            _serialVersionUID: long;
            new(): AttachNotSupportedException;
            new(s: string): AttachNotSupportedException;
          }
          let AttachNotSupportedException: _AttachNotSupportedException$$static;
          interface _AttachNotSupportedException {
          }
          interface AttachNotSupportedException extends CombineTypes<[_AttachNotSupportedException, java.lang.Exception]> {}
          interface _AttachOperationFailedException$$static extends ClassLike {
            _serialVersionUID: long;
            new(message: string): AttachOperationFailedException;
          }
          let AttachOperationFailedException: _AttachOperationFailedException$$static;
          interface _AttachOperationFailedException {
          }
          interface AttachOperationFailedException extends CombineTypes<[_AttachOperationFailedException, java.io.IOException]> {}
          interface _AttachPermission$$static extends ClassLike {
            _serialVersionUID: long;
            new(name: string): AttachPermission;
            new(name: string, actions: string): AttachPermission;
          }
          let AttachPermission: _AttachPermission$$static;
          interface _AttachPermission {
          }
          interface AttachPermission extends CombineTypes<[_AttachPermission, java.security.BasicPermission]> {}
          interface _VirtualMachine$$static extends ClassLike {
            attach(id: string): VirtualMachine;
            attach(vmd: VirtualMachineDescriptor): VirtualMachine;
            list(): java.util.List<VirtualMachineDescriptor>;
            _new(provider: attach.spi.AttachProvider, id: string): VirtualMachine;
          }
          let VirtualMachine: _VirtualMachine$$static;
          interface _VirtualMachine {
            detach(): void;
            equals(ob: any): boolean;
            getAgentProperties(): java.util.Properties;
            getSystemProperties(): java.util.Properties;
            hashCode(): int;
            id(): string;
            loadAgent(a0: string, a1: string): void;
            loadAgent(agent: string): void;
            loadAgentLibrary(a0: string, a1: string): void;
            loadAgentLibrary(agentLibrary: string): void;
            loadAgentPath(a0: string, a1: string): void;
            loadAgentPath(agentPath: string): void;
            provider(): attach.spi.AttachProvider;
            startLocalManagementAgent(): string;
            startManagementAgent(a0: java.util.Properties): void;
            toString(): string;
            _hash: int;
            _id: string;
            _provider: spi.AttachProvider;
          }
          interface VirtualMachine extends CombineTypes<[_VirtualMachine, java.lang.Object]> {}
          interface _VirtualMachineDescriptor$$static extends ClassLike {
            new(provider: attach.spi.AttachProvider, id: string, displayName: string): VirtualMachineDescriptor;
            new(provider: attach.spi.AttachProvider, id: string): VirtualMachineDescriptor;
          }
          let VirtualMachineDescriptor: _VirtualMachineDescriptor$$static;
          interface _VirtualMachineDescriptor {
            displayName(): string;
            equals(ob: any): boolean;
            hashCode(): int;
            id(): string;
            provider(): attach.spi.AttachProvider;
            toString(): string;
            _displayName: string;
            _hash: int;
            _id: string;
            _provider: spi.AttachProvider;
          }
          interface VirtualMachineDescriptor extends CombineTypes<[_VirtualMachineDescriptor, java.lang.Object]> {}
        }
      }
    }
  }
  module sun {
    module tools {
      module attach {
        interface _AttachProviderImpl$$static extends ClassLike {
          _enumProcesses(a0: int[], a1: int): int;
          _isLibraryLoadedByProcess(a0: string, a1: int): boolean;
          _isTempPathSecure(): boolean;
          _tempPath(): string;
          _volumeFlags(a0: string): long;
          _FS_PERSISTENT_ACLS: long;
          _isTempPathSecure: boolean;
          _wasTempPathChecked: boolean;
          new(): AttachProviderImpl;
        }
        let AttachProviderImpl: _AttachProviderImpl$$static;
        interface _AttachProviderImpl {
          attachVirtualMachine(vmid: string): com.sun.tools.attach.VirtualMachine;
          _listJavaProcesses(): java.util.List<com.sun.tools.attach.VirtualMachineDescriptor>;
          listVirtualMachines(): java.util.List<com.sun.tools.attach.VirtualMachineDescriptor>;
          name(): string;
          type(): string;
        }
        interface AttachProviderImpl extends CombineTypes<[_AttachProviderImpl, sun.tools.attach.HotSpotAttachProvider]> {}
        interface _HotSpotAttachProvider$$static extends ClassLike {
          new(): HotSpotAttachProvider;
        }
        let HotSpotAttachProvider: _HotSpotAttachProvider$$static;
        interface _HotSpotAttachProvider {
          checkAttachPermission(): void;
          listVirtualMachines(): java.util.List<com.sun.tools.attach.VirtualMachineDescriptor>;
          _testAttachable(id: string): void;
        }
        interface HotSpotAttachProvider extends CombineTypes<[_HotSpotAttachProvider, com.sun.tools.attach.spi.AttachProvider]> {}
        interface _HotSpotAttachProvider$HotSpotVirtualMachineDescriptor$$static extends ClassLike {
          _new(provider: com.sun.tools.attach.spi.AttachProvider, id: string, displayName: string): HotSpotAttachProvider$HotSpotVirtualMachineDescriptor;
        }
        let HotSpotAttachProvider$HotSpotVirtualMachineDescriptor: _HotSpotAttachProvider$HotSpotVirtualMachineDescriptor$$static;
        interface _HotSpotAttachProvider$HotSpotVirtualMachineDescriptor {
          isAttachable(): boolean;
        }
        interface HotSpotAttachProvider$HotSpotVirtualMachineDescriptor extends CombineTypes<[_HotSpotAttachProvider$HotSpotVirtualMachineDescriptor, com.sun.tools.attach.VirtualMachineDescriptor]> {}
        interface _HotSpotVirtualMachine$$static extends ClassLike {
          _checkNulls(args: any[]): void;
          _checkNulls(...args: any[]): void;
          _checkedKeyName(key: any): boolean;
          _pid(): long;
          _stripKeyName(key: any): string;
          _ALLOW_ATTACH_SELF: boolean;
          _ATTACH_ERROR_BADJAR: int;
          _ATTACH_ERROR_BADVERSION: int;
          _ATTACH_ERROR_NOTONCP: int;
          _ATTACH_ERROR_STARTFAIL: int;
          _CURRENT_PID: long;
          _JNI_ENOMEM: int;
          _MANAGEMENT_PREFIX: string;
          _defaultAttachTimeout: long;
          _new(provider: com.sun.tools.attach.spi.AttachProvider, id: string): HotSpotVirtualMachine;
        }
        let HotSpotVirtualMachine: _HotSpotVirtualMachine$$static;
        interface _HotSpotVirtualMachine {
          _attachTimeout(): long;
          dumpHeap(args: any[]): java.io.InputStream;
          dumpHeap(...args: any[]): java.io.InputStream;
          _escape(arg: any): string;
          _execute(a0: string, a1: any[]): java.io.InputStream;
          _execute(a0: string, ...a1: any[]): java.io.InputStream;
(a0: string, a1: any[]): java.io.InputStream;
(a0: string, ...a1: any[]): java.io.InputStream;
          executeCommand(cmd: string, args: any[]): java.io.InputStream;
          executeCommand(cmd: string, ...args: any[]): java.io.InputStream;
          executeJCmd(command: string): java.io.InputStream;
          getAgentProperties(): java.util.Properties;
          getSystemProperties(): java.util.Properties;
          heapHisto(args: any[]): java.io.InputStream;
          heapHisto(...args: any[]): java.io.InputStream;
          loadAgent(agent: string, options: string): void;
          _loadAgentLibrary(agentLibrary: string, isAbsolute: boolean, options: string): void;
          loadAgentLibrary(agentLibrary: string, options: string): void;
          loadAgentPath(agentLibrary: string, options: string): void;
          localDataDump(): void;
          printFlag(name: string): java.io.InputStream;
          _processCompletionStatus(ioe: java.io.IOException, cmd: string, sis: java.io.InputStream): void;
          _readErrorMessage(_in: java.io.InputStream): string;
          _readInt(_in: java.io.InputStream): int;
          remoteDataDump(args: any[]): java.io.InputStream;
          remoteDataDump(...args: any[]): java.io.InputStream;
          setFlag(name: string, value: string): java.io.InputStream;
          startLocalManagementAgent(): string;
          startManagementAgent(agentProperties: java.util.Properties): void;
          _attachTimeout: long;
        }
        interface HotSpotVirtualMachine extends CombineTypes<[_HotSpotVirtualMachine, com.sun.tools.attach.VirtualMachine]> {}
        interface _HotSpotVirtualMachine$SocketInputStream$$static extends ClassLike {
          new(fd: long): HotSpotVirtualMachine$SocketInputStream;
        }
        let HotSpotVirtualMachine$SocketInputStream: _HotSpotVirtualMachine$SocketInputStream$$static;
        interface _HotSpotVirtualMachine$SocketInputStream {
          _close(a0: long): void;
          close(): void;
          _read(a0: long, a1: byte[], a2: int, a3: int): int;
          read(): int;
          read(bs: byte[], off: int, len: int): int;
          _fd: long;
        }
        interface HotSpotVirtualMachine$SocketInputStream extends CombineTypes<[_HotSpotVirtualMachine$SocketInputStream, java.io.InputStream]> {}
        interface _VirtualMachineImpl$$static extends ClassLike {
          _closePipe(a0: long): void;
          _closeProcess(a0: long): void;
          _connectPipe(a0: long): void;
          _createPipe(a0: string): long;
          _enqueue(a0: long, a1: byte[], a2: string, a3: string, a4: any[]): void;
          _enqueue(a0: long, a1: byte[], a2: string, a3: string, ...a4: any[]): void;
          _generateStub(): byte[];
          _init(): void;
          _openProcess(a0: int): long;
          _readPipe(a0: long, a1: byte[], a2: int, a3: int): int;
          _stub: byte[];
          _new(provider: com.sun.tools.attach.spi.AttachProvider, id: string): VirtualMachineImpl;
        }
        let VirtualMachineImpl: _VirtualMachineImpl$$static;
        interface _VirtualMachineImpl {
          detach(): void;
          _execute(cmd: string, args: any[]): java.io.InputStream;
          _execute(cmd: string, ...args: any[]): java.io.InputStream;
          _hProcess: long;
        }
        interface VirtualMachineImpl extends CombineTypes<[_VirtualMachineImpl, sun.tools.attach.HotSpotVirtualMachine]> {}
        interface _VirtualMachineImpl$SocketInputStreamImpl$$static extends ClassLike {
          new(fd: long): VirtualMachineImpl$SocketInputStreamImpl;
        }
        let VirtualMachineImpl$SocketInputStreamImpl: _VirtualMachineImpl$SocketInputStreamImpl$$static;
        interface _VirtualMachineImpl$SocketInputStreamImpl {
          _close(fd: long): void;
          _read(fd: long, a1: byte[], bs: int, off: int): int;
        }
        interface VirtualMachineImpl$SocketInputStreamImpl extends CombineTypes<[_VirtualMachineImpl$SocketInputStreamImpl, sun.tools.attach.HotSpotVirtualMachine$SocketInputStream]> {}
      }
    }
  }
}
