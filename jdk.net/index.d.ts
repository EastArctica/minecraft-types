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
    module net {
      interface _ExtendedSocketOptions$$static extends ClassLike {
        _getIncomingNapiId(fd: java.io.FileDescriptor): int;
        _getIpDontFragment(fd: java.io.FileDescriptor, isIPv6: boolean): boolean;
        _getQuickAckOption(fd: java.io.FileDescriptor): any;
        _getSoPeerCred(fd: java.io.FileDescriptor): any;
        _getTcpKeepAliveIntvl(fd: java.io.FileDescriptor): int;
        _getTcpKeepAliveProbes(fd: java.io.FileDescriptor): int;
        _getTcpKeepAliveTime(fd: java.io.FileDescriptor): int;
        _options(): java.util.Set<java.net.SocketOption<any>>;
        _setIpDontFragment(fd: java.io.FileDescriptor, value: boolean, isIPv6: boolean): void;
        _setQuickAckOption(fd: java.io.FileDescriptor, enable: boolean): void;
        _setTcpKeepAliveIntvl(fd: java.io.FileDescriptor, value: int): void;
        _setTcpKeepAliveProbes(fd: java.io.FileDescriptor, value: int): void;
        _setTcpKeepAliveTime(fd: java.io.FileDescriptor, value: int): void;
        readonly IP_DONTFRAGMENT: java.net.SocketOption<boolean>;
        readonly SO_INCOMING_NAPI_ID: java.net.SocketOption<int>;
        readonly SO_PEERCRED: java.net.SocketOption<UnixDomainPrincipal>;
        readonly TCP_KEEPCOUNT: java.net.SocketOption<int>;
        readonly TCP_KEEPIDLE: java.net.SocketOption<int>;
        readonly TCP_KEEPINTERVAL: java.net.SocketOption<int>;
        readonly TCP_QUICKACK: java.net.SocketOption<boolean>;
        _extendedOptions: java.util.Set<java.net.SocketOption<any>>;
        _fdAccess: jdk.internal.access.JavaIOFileDescriptorAccess;
        _incomingNapiIdOptSupported: boolean;
        _ipDontFragmentSupported: boolean;
        _keepAliveOptSupported: boolean;
        _peerCredentialsSupported: boolean;
        _platformSocketOptions: ExtendedSocketOptions$PlatformSocketOptions;
        _quickAckSupported: boolean;
      }
      let ExtendedSocketOptions: _ExtendedSocketOptions$$static;
      interface _ExtendedSocketOptions {
      }
      interface ExtendedSocketOptions extends CombineTypes<[_ExtendedSocketOptions, java.lang.Object]> {}
      interface _ExtendedSocketOptions$ExtSocketOption$$static<T> extends ClassLike {
        _new(name: string, type: java.lang.Class<T>): ExtendedSocketOptions$ExtSocketOption<T>;
      }
      let ExtendedSocketOptions$ExtSocketOption: _ExtendedSocketOptions$ExtSocketOption$$static<T>;
      interface _ExtendedSocketOptions$ExtSocketOption<T> {
        name(): string;
        toString(): string;
        type(): java.lang.Class<T>;
        _name: string;
        _type: java.lang.Class<T>;
      }
      interface ExtendedSocketOptions$ExtSocketOption<T> extends CombineTypes<[_ExtendedSocketOptions$ExtSocketOption<T>, java.lang.Object, java.net.SocketOption<T>]> {}
      interface _ExtendedSocketOptions$PlatformSocketOptions$$static extends ClassLike {
        _create(): ExtendedSocketOptions$PlatformSocketOptions;
        _get(): ExtendedSocketOptions$PlatformSocketOptions;
        _newInstance(cn: string): ExtendedSocketOptions$PlatformSocketOptions;
        _instance: ExtendedSocketOptions$PlatformSocketOptions;
        _new(): ExtendedSocketOptions$PlatformSocketOptions;
      }
      let ExtendedSocketOptions$PlatformSocketOptions: _ExtendedSocketOptions$PlatformSocketOptions$$static;
      interface _ExtendedSocketOptions$PlatformSocketOptions {
        _getIncomingNapiId(fd: int): int;
        _getIpDontFragment(fd: int, isIPv6: boolean): boolean;
        _getQuickAck(fd: int): boolean;
        _getSoPeerCred(fd: int): UnixDomainPrincipal;
        _getTcpKeepAliveIntvl(fd: int): int;
        _getTcpKeepAliveProbes(fd: int): int;
        _getTcpKeepAliveTime(fd: int): int;
        _incomingNapiIdSupported(): boolean;
        _ipDontFragmentSupported(): boolean;
        _keepAliveOptionsSupported(): boolean;
        _peerCredentialsSupported(): boolean;
        _quickAckSupported(): boolean;
        _setIpDontFragment(fd: int, value: boolean, isIPv6: boolean): void;
        _setQuickAck(fd: int, on: boolean): void;
        _setTcpKeepAliveIntvl(fd: int, value: int): void;
        _setTcpKeepAliveProbes(fd: int, value: int): void;
        _setTcpKeepAliveTime(fd: int, value: int): void;
      }
      interface ExtendedSocketOptions$PlatformSocketOptions extends CombineTypes<[_ExtendedSocketOptions$PlatformSocketOptions, java.lang.Object]> {}
      interface _NetworkPermission$$static extends ClassLike {
        _serialVersionUID: long;
        new(name: string): NetworkPermission;
        new(name: string, actions: string): NetworkPermission;
      }
      let NetworkPermission: _NetworkPermission$$static;
      interface _NetworkPermission {
      }
      interface NetworkPermission extends CombineTypes<[_NetworkPermission, java.security.BasicPermission]> {}
      interface _Sockets$$static extends ClassLike {
        _checkValueType(value: any, type: java.lang.Class<any>): void;
        getOption<T>(s: java.net.Socket, name: java.net.SocketOption<T>): T;
        getOption<T>(s: java.net.ServerSocket, name: java.net.SocketOption<T>): T;
        getOption<T>(s: java.net.DatagramSocket, name: java.net.SocketOption<T>): T;
        _isReusePortAvailable(): boolean;
        _optionSets(): java.util.Map<java.lang.Class<any>,java.util.Set<java.net.SocketOption<any>>>;
        setOption<T>(s: java.net.Socket, name: java.net.SocketOption<T>, value: T): void;
        setOption<T>(s: java.net.ServerSocket, name: java.net.SocketOption<T>, value: T): void;
        setOption<T>(s: java.net.DatagramSocket, name: java.net.SocketOption<T>, value: T): void;
        supportedOptions(socketType: java.lang.Class<any>): java.util.Set<java.net.SocketOption<any>>;
        _checkedReusePort: boolean;
        _isReusePortAvailable: boolean;
        _options: java.util.Map<java.lang.Class<any>,java.util.Set<java.net.SocketOption<any>>>;
      }
      let Sockets: _Sockets$$static;
      interface _Sockets {
      }
      interface Sockets extends CombineTypes<[_Sockets, java.lang.Object]> {}
      interface _Sockets$KeepAliveOptions$$static extends ClassLike {
        _AVAILABLE: boolean;
        _new(): Sockets$KeepAliveOptions;
      }
      let Sockets$KeepAliveOptions: _Sockets$KeepAliveOptions$$static;
      interface _Sockets$KeepAliveOptions {
      }
      interface Sockets$KeepAliveOptions extends CombineTypes<[_Sockets$KeepAliveOptions, java.lang.Object]> {}
      interface _Sockets$QuickAck$$static extends ClassLike {
        _available: boolean;
        _new(): Sockets$QuickAck;
      }
      let Sockets$QuickAck: _Sockets$QuickAck$$static;
      interface _Sockets$QuickAck {
      }
      interface Sockets$QuickAck extends CombineTypes<[_Sockets$QuickAck, java.lang.Object]> {}
      interface _UnixDomainPrincipal$$static extends ClassLike {
        new(user: java.nio.file.attribute.UserPrincipal, group: java.nio.file.attribute.GroupPrincipal): UnixDomainPrincipal;
      }
      let UnixDomainPrincipal: _UnixDomainPrincipal$$static;
      interface _UnixDomainPrincipal {
        equals(o: any): boolean;
        group(): java.nio.file.attribute.GroupPrincipal;
        hashCode(): int;
        toString(): string;
        user(): java.nio.file.attribute.UserPrincipal;
      }
      interface UnixDomainPrincipal extends CombineTypes<[_UnixDomainPrincipal, java.lang.Record]> {}
      interface _WindowsSocketOptions$$static extends ClassLike {
        _getIpDontFragment0(a0: int, a1: boolean): boolean;
        _getTcpKeepAliveIntvl0(a0: int): int;
        _getTcpKeepAliveProbes0(a0: int): int;
        _getTcpKeepAliveTime0(a0: int): int;
        _keepAliveOptionsSupported0(): boolean;
        _setIpDontFragment0(a0: int, a1: boolean, a2: boolean): void;
        _setTcpKeepAliveIntvl0(a0: int, a1: int): void;
        _setTcpKeepAliveProbes0(a0: int, a1: int): void;
        _setTcpKeepAliveTime0(a0: int, a1: int): void;
        new(): WindowsSocketOptions;
      }
      let WindowsSocketOptions: _WindowsSocketOptions$$static;
      interface _WindowsSocketOptions {
        _getIpDontFragment(fd: int, isIPv6: boolean): boolean;
        _getTcpKeepAliveIntvl(fd: int): int;
        _getTcpKeepAliveProbes(fd: int): int;
        _getTcpKeepAliveTime(fd: int): int;
        _ipDontFragmentSupported(): boolean;
        _keepAliveOptionsSupported(): boolean;
        _setIpDontFragment(fd: int, value: boolean, isIPv6: boolean): void;
        _setTcpKeepAliveIntvl(fd: int, value: int): void;
        _setTcpKeepAliveProbes(fd: int, value: int): void;
        _setTcpKeepAliveTime(fd: int, value: int): void;
      }
      interface WindowsSocketOptions extends CombineTypes<[_WindowsSocketOptions, jdk.net.ExtendedSocketOptions$PlatformSocketOptions]> {}
    }
    module nio {
      interface _Channels$$static extends ClassLike {
        readWriteSelectableChannel(fd: java.io.FileDescriptor, closer: Channels$SelectableChannelCloser): java.nio.channels.SelectableChannel;
      }
      let Channels: _Channels$$static;
      interface _Channels {
      }
      interface Channels extends CombineTypes<[_Channels, java.lang.Object]> {}
      interface _Channels$ReadWriteChannelImpl$$static extends ClassLike {
        _new(provider: sun.nio.ch.SelectorProviderImpl, fd: java.io.FileDescriptor, closer: Channels$SelectableChannelCloser): Channels$ReadWriteChannelImpl;
      }
      let Channels$ReadWriteChannelImpl: _Channels$ReadWriteChannelImpl$$static;
      interface _Channels$ReadWriteChannelImpl {
        getFD(): java.io.FileDescriptor;
        getFDVal(): int;
        _implCloseSelectableChannel(): void;
        _implConfigureBlocking(block: boolean): void;
        kill(): void;
        translateAndSetReadyOps(ops: int, ski: sun.nio.ch.SelectionKeyImpl): boolean;
        translateAndUpdateReadyOps(ops: int, ski: sun.nio.ch.SelectionKeyImpl): boolean;
        translateInterestOps(ops: int): int;
        _translateReadyOps(ops: int, initialOps: int, ski: sun.nio.ch.SelectionKeyImpl): boolean;
        validOps(): int;
        _closer: Channels$SelectableChannelCloser;
        _fd: java.io.FileDescriptor;
        _fdVal: int;
      }
      interface Channels$ReadWriteChannelImpl extends CombineTypes<[_Channels$ReadWriteChannelImpl, java.nio.channels.spi.AbstractSelectableChannel, sun.nio.ch.SelChImpl]> {}
      interface _Channels$SelectableChannelCloser$$static extends ClassLike {
      }
      let Channels$SelectableChannelCloser: _Channels$SelectableChannelCloser$$static;
      interface _Channels$SelectableChannelCloser {
        implCloseChannel(a0: java.nio.channels.SelectableChannel): void;
        implReleaseChannel(a0: java.nio.channels.SelectableChannel): void;
      }
      interface Channels$SelectableChannelCloser extends CombineTypes<[_Channels$SelectableChannelCloser, java.lang.Object]> {}
    }
  }
}
