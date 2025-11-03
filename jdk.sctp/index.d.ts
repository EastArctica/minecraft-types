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
        module sctp {
          interface _AbstractNotificationHandler$$static<T> extends ClassLike {
            _new(): AbstractNotificationHandler<T>;
          }
          let AbstractNotificationHandler: _AbstractNotificationHandler$$static<T>;
          interface _AbstractNotificationHandler<T> {
            handleNotification(notification: Notification, attachment: T): HandlerResult;
            handleNotification(notification: AssociationChangeNotification, attachment: T): HandlerResult;
            handleNotification(notification: PeerAddressChangeNotification, attachment: T): HandlerResult;
            handleNotification(notification: SendFailedNotification, attachment: T): HandlerResult;
            handleNotification(notification: ShutdownNotification, attachment: T): HandlerResult;
          }
          interface AbstractNotificationHandler<T> extends CombineTypes<[_AbstractNotificationHandler<T>, NotificationHandler<T>, java.lang.Object]> {}
          interface _Association$$static extends ClassLike {
            _new(associationID: int, maxInStreams: int, maxOutStreams: int): Association;
          }
          let Association: _Association$$static;
          interface _Association {
            associationID(): int;
            maxInboundStreams(): int;
            maxOutboundStreams(): int;
            _associationID: int;
            _maxInStreams: int;
            _maxOutStreams: int;
          }
          interface Association extends CombineTypes<[_Association, java.lang.Object]> {}
          interface _AssociationChangeNotification$$static extends ClassLike {
            _new(): AssociationChangeNotification;
          }
          let AssociationChangeNotification: _AssociationChangeNotification$$static;
          interface _AssociationChangeNotification {
            association(): Association;
            event(): AssociationChangeNotification$AssocChangeEvent;
          }
          interface AssociationChangeNotification extends CombineTypes<[_AssociationChangeNotification, com.sun.nio.sctp.Notification, java.lang.Object]> {}
          interface _AssociationChangeNotification$AssocChangeEvent$$static extends ClassLike {
            valueOf(name: string): AssociationChangeNotification$AssocChangeEvent;
            values(): AssociationChangeNotification$AssocChangeEvent[];
            readonly CANT_START: AssociationChangeNotification$AssocChangeEvent;
            readonly COMM_LOST: AssociationChangeNotification$AssocChangeEvent;
            readonly COMM_UP: AssociationChangeNotification$AssocChangeEvent;
            readonly RESTART: AssociationChangeNotification$AssocChangeEvent;
            readonly SHUTDOWN: AssociationChangeNotification$AssocChangeEvent;
          }
          let AssociationChangeNotification$AssocChangeEvent: _AssociationChangeNotification$AssocChangeEvent$$static;
          interface _AssociationChangeNotification$AssocChangeEvent {
          }
          interface AssociationChangeNotification$AssocChangeEvent extends CombineTypes<[_AssociationChangeNotification$AssocChangeEvent]> {}
          interface _HandlerResult$$static extends ClassLike {
            valueOf(name: string): HandlerResult;
            values(): HandlerResult[];
            readonly CONTINUE: HandlerResult;
            readonly RETURN: HandlerResult;
          }
          let HandlerResult: _HandlerResult$$static;
          interface _HandlerResult {
          }
          interface HandlerResult extends CombineTypes<[_HandlerResult]> {}
          interface _IllegalReceiveException$$static extends ClassLike {
            _serialVersionUID: long;
            new(): IllegalReceiveException;
            new(msg: string): IllegalReceiveException;
          }
          let IllegalReceiveException: _IllegalReceiveException$$static;
          interface _IllegalReceiveException {
          }
          interface IllegalReceiveException extends CombineTypes<[_IllegalReceiveException, java.lang.IllegalStateException]> {}
          interface _IllegalUnbindException$$static extends ClassLike {
            _serialVersionUID: long;
            new(): IllegalUnbindException;
            new(msg: string): IllegalUnbindException;
          }
          let IllegalUnbindException: _IllegalUnbindException$$static;
          interface _IllegalUnbindException {
          }
          interface IllegalUnbindException extends CombineTypes<[_IllegalUnbindException, java.lang.IllegalStateException]> {}
          interface _InvalidStreamException$$static extends ClassLike {
            _serialVersionUID: long;
            new(): InvalidStreamException;
            new(msg: string): InvalidStreamException;
          }
          let InvalidStreamException: _InvalidStreamException$$static;
          interface _InvalidStreamException {
          }
          interface InvalidStreamException extends CombineTypes<[_InvalidStreamException, java.lang.IllegalArgumentException]> {}
          interface _MessageInfo$$static extends ClassLike {
            createOutgoing(address: java.net.SocketAddress, streamNumber: int): MessageInfo;
            createOutgoing(association: Association, address: java.net.SocketAddress, streamNumber: int): MessageInfo;
            _new(): MessageInfo;
          }
          let MessageInfo: _MessageInfo$$static;
          interface _MessageInfo {
            address(): java.net.SocketAddress;
            association(): Association;
            bytes(): int;
            complete(a0: boolean): MessageInfo;
            isComplete(): boolean;
            isUnordered(): boolean;
            payloadProtocolID(): int;
            payloadProtocolID(a0: int): MessageInfo;
            streamNumber(): int;
            streamNumber(a0: int): MessageInfo;
            timeToLive(): long;
            timeToLive(a0: long): MessageInfo;
            unordered(a0: boolean): MessageInfo;
          }
          interface MessageInfo extends CombineTypes<[_MessageInfo, java.lang.Object]> {}
          interface _Notification$$static extends ClassLike {
          }
          let Notification: _Notification$$static;
          interface _Notification {
            association(): Association;
(): Association;
          }
          interface Notification extends CombineTypes<[_Notification, java.lang.Object]> {}
          interface _NotificationHandler$$static<T> extends ClassLike {
          }
          let NotificationHandler: _NotificationHandler$$static<T>;
          interface _NotificationHandler<T> {
            handleNotification(a0: Notification, a1: T): HandlerResult;
(a0: Notification, a1: T): HandlerResult;
          }
          interface NotificationHandler<T> extends CombineTypes<[_NotificationHandler<T>, java.lang.Object]> {}
          interface _PeerAddressChangeNotification$$static extends ClassLike {
            _new(): PeerAddressChangeNotification;
          }
          let PeerAddressChangeNotification: _PeerAddressChangeNotification$$static;
          interface _PeerAddressChangeNotification {
            address(): java.net.SocketAddress;
            association(): Association;
            event(): PeerAddressChangeNotification$AddressChangeEvent;
          }
          interface PeerAddressChangeNotification extends CombineTypes<[_PeerAddressChangeNotification, com.sun.nio.sctp.Notification, java.lang.Object]> {}
          interface _PeerAddressChangeNotification$AddressChangeEvent$$static extends ClassLike {
            valueOf(name: string): PeerAddressChangeNotification$AddressChangeEvent;
            values(): PeerAddressChangeNotification$AddressChangeEvent[];
            readonly ADDR_ADDED: PeerAddressChangeNotification$AddressChangeEvent;
            readonly ADDR_AVAILABLE: PeerAddressChangeNotification$AddressChangeEvent;
            readonly ADDR_CONFIRMED: PeerAddressChangeNotification$AddressChangeEvent;
            readonly ADDR_MADE_PRIMARY: PeerAddressChangeNotification$AddressChangeEvent;
            readonly ADDR_REMOVED: PeerAddressChangeNotification$AddressChangeEvent;
            readonly ADDR_UNREACHABLE: PeerAddressChangeNotification$AddressChangeEvent;
          }
          let PeerAddressChangeNotification$AddressChangeEvent: _PeerAddressChangeNotification$AddressChangeEvent$$static;
          interface _PeerAddressChangeNotification$AddressChangeEvent {
          }
          interface PeerAddressChangeNotification$AddressChangeEvent extends CombineTypes<[_PeerAddressChangeNotification$AddressChangeEvent]> {}
          interface _SctpChannel$$static extends ClassLike {
            open(): SctpChannel;
            open(remote: java.net.SocketAddress, maxOutStreams: int, maxInStreams: int): SctpChannel;
            _new(provider: java.nio.channels.spi.SelectorProvider): SctpChannel;
          }
          let SctpChannel: _SctpChannel$$static;
          interface _SctpChannel {
            association(): Association;
            bind(a0: java.net.SocketAddress): SctpChannel;
            bindAddress(a0: java.net.InetAddress): SctpChannel;
            connect(a0: java.net.SocketAddress): boolean;
            connect(a0: java.net.SocketAddress, a1: int, a2: int): boolean;
            finishConnect(): boolean;
            getAllLocalAddresses(): java.util.Set<java.net.SocketAddress>;
            getOption<T>(a0: SctpSocketOption<T>): T;
            getRemoteAddresses(): java.util.Set<java.net.SocketAddress>;
            isConnectionPending(): boolean;
            receive<T>(a0: java.nio.ByteBuffer, a1: T, a2: NotificationHandler<T>): MessageInfo;
            send(a0: java.nio.ByteBuffer, a1: MessageInfo): int;
            setOption<T>(a0: SctpSocketOption<T>, a1: T): SctpChannel;
            shutdown(): SctpChannel;
            supportedOptions(): java.util.Set<SctpSocketOption<any>>;
            unbindAddress(a0: java.net.InetAddress): SctpChannel;
            validOps(): int;
          }
          interface SctpChannel extends CombineTypes<[_SctpChannel, java.nio.channels.spi.AbstractSelectableChannel]> {}
          interface _SctpMultiChannel$$static extends ClassLike {
            open(): SctpMultiChannel;
            _new(provider: java.nio.channels.spi.SelectorProvider): SctpMultiChannel;
          }
          let SctpMultiChannel: _SctpMultiChannel$$static;
          interface _SctpMultiChannel {
            associations(): java.util.Set<Association>;
            bind(a0: java.net.SocketAddress, a1: int): SctpMultiChannel;
            bind(local: java.net.SocketAddress): SctpMultiChannel;
            bindAddress(a0: java.net.InetAddress): SctpMultiChannel;
            branch(a0: Association): SctpChannel;
            getAllLocalAddresses(): java.util.Set<java.net.SocketAddress>;
            getOption<T>(a0: SctpSocketOption<T>, a1: Association): T;
            getRemoteAddresses(a0: Association): java.util.Set<java.net.SocketAddress>;
            receive<T>(a0: java.nio.ByteBuffer, a1: T, a2: NotificationHandler<T>): MessageInfo;
            send(a0: java.nio.ByteBuffer, a1: MessageInfo): int;
            setOption<T>(a0: SctpSocketOption<T>, a1: T, a2: Association): SctpMultiChannel;
            shutdown(a0: Association): SctpMultiChannel;
            supportedOptions(): java.util.Set<SctpSocketOption<any>>;
            unbindAddress(a0: java.net.InetAddress): SctpMultiChannel;
            validOps(): int;
          }
          interface SctpMultiChannel extends CombineTypes<[_SctpMultiChannel, java.nio.channels.spi.AbstractSelectableChannel]> {}
          interface _SctpServerChannel$$static extends ClassLike {
            open(): SctpServerChannel;
            _new(provider: java.nio.channels.spi.SelectorProvider): SctpServerChannel;
          }
          let SctpServerChannel: _SctpServerChannel$$static;
          interface _SctpServerChannel {
            accept(): SctpChannel;
            bind(local: java.net.SocketAddress): SctpServerChannel;
            bind(a0: java.net.SocketAddress, a1: int): SctpServerChannel;
            bindAddress(a0: java.net.InetAddress): SctpServerChannel;
            getAllLocalAddresses(): java.util.Set<java.net.SocketAddress>;
            getOption<T>(a0: SctpSocketOption<T>): T;
            setOption<T>(a0: SctpSocketOption<T>, a1: T): SctpServerChannel;
            supportedOptions(): java.util.Set<SctpSocketOption<any>>;
            unbindAddress(a0: java.net.InetAddress): SctpServerChannel;
            validOps(): int;
          }
          interface SctpServerChannel extends CombineTypes<[_SctpServerChannel, java.nio.channels.spi.AbstractSelectableChannel]> {}
          interface _SctpSocketOption$$static<T> extends ClassLike {
          }
          let SctpSocketOption: _SctpSocketOption$$static<T>;
          interface _SctpSocketOption<T> {
          }
          interface SctpSocketOption<T> extends CombineTypes<[_SctpSocketOption<T>, java.lang.Object, java.net.SocketOption<T>]> {}
          interface _SctpStandardSocketOptions$$static extends ClassLike {
            readonly SCTP_DISABLE_FRAGMENTS: SctpSocketOption<boolean>;
            readonly SCTP_EXPLICIT_COMPLETE: SctpSocketOption<boolean>;
            readonly SCTP_FRAGMENT_INTERLEAVE: SctpSocketOption<int>;
            readonly SCTP_INIT_MAXSTREAMS: SctpSocketOption<SctpStandardSocketOptions$InitMaxStreams>;
            readonly SCTP_NODELAY: SctpSocketOption<boolean>;
            readonly SCTP_PRIMARY_ADDR: SctpSocketOption<java.net.SocketAddress>;
            readonly SCTP_SET_PEER_PRIMARY_ADDR: SctpSocketOption<java.net.SocketAddress>;
            readonly SO_LINGER: SctpSocketOption<int>;
            readonly SO_RCVBUF: SctpSocketOption<int>;
            readonly SO_SNDBUF: SctpSocketOption<int>;
          }
          let SctpStandardSocketOptions: _SctpStandardSocketOptions$$static;
          interface _SctpStandardSocketOptions {
          }
          interface SctpStandardSocketOptions extends CombineTypes<[_SctpStandardSocketOptions, java.lang.Object]> {}
          interface _SctpStandardSocketOptions$InitMaxStreams$$static extends ClassLike {
            create(maxInStreams: int, maxOutStreams: int): SctpStandardSocketOptions$InitMaxStreams;
          }
          let SctpStandardSocketOptions$InitMaxStreams: _SctpStandardSocketOptions$InitMaxStreams$$static;
          interface _SctpStandardSocketOptions$InitMaxStreams {
            equals(obj: any): boolean;
            hashCode(): int;
            maxInStreams(): int;
            maxOutStreams(): int;
            toString(): string;
            _maxInStreams: int;
            _maxOutStreams: int;
          }
          interface SctpStandardSocketOptions$InitMaxStreams extends CombineTypes<[_SctpStandardSocketOptions$InitMaxStreams, java.lang.Object]> {}
          interface _SendFailedNotification$$static extends ClassLike {
            _new(): SendFailedNotification;
          }
          let SendFailedNotification: _SendFailedNotification$$static;
          interface _SendFailedNotification {
            address(): java.net.SocketAddress;
            association(): Association;
            buffer(): java.nio.ByteBuffer;
            errorCode(): int;
            streamNumber(): int;
          }
          interface SendFailedNotification extends CombineTypes<[_SendFailedNotification, com.sun.nio.sctp.Notification, java.lang.Object]> {}
          interface _ShutdownNotification$$static extends ClassLike {
            _new(): ShutdownNotification;
          }
          let ShutdownNotification: _ShutdownNotification$$static;
          interface _ShutdownNotification {
            association(): Association;
(): Association;
          }
          interface ShutdownNotification extends CombineTypes<[_ShutdownNotification, com.sun.nio.sctp.Notification, java.lang.Object]> {}
        }
      }
    }
  }
  module sun {
    module nio {
      module ch {
        module sctp {
          interface _MessageInfoImpl$$static extends ClassLike {
            new(association: com.sun.nio.sctp.Association, address: java.net.SocketAddress, streamNumber: int): MessageInfoImpl;
          }
          let MessageInfoImpl: _MessageInfoImpl$$static;
          interface _MessageInfoImpl {
            address(): java.net.SocketAddress;
            association(): com.sun.nio.sctp.Association;
            _associationID(): int;
            bytes(): int;
            complete(complete: boolean): com.sun.nio.sctp.MessageInfo;
            isComplete(): boolean;
            isUnordered(): boolean;
            payloadProtocolID(): int;
            payloadProtocolID(ppid: int): com.sun.nio.sctp.MessageInfo;
            _setAssociation(association: com.sun.nio.sctp.Association): void;
            streamNumber(): int;
            streamNumber(streamNumber: int): com.sun.nio.sctp.MessageInfo;
            timeToLive(): long;
            timeToLive(millis: long): com.sun.nio.sctp.MessageInfo;
            toString(): string;
            unordered(unordered: boolean): com.sun.nio.sctp.MessageInfo;
            _address: java.net.SocketAddress;
            _assocId: int;
            _association: com.sun.nio.sctp.Association;
            _bytes: int;
            _complete: boolean;
            _ppid: int;
            _streamNumber: int;
            _timeToLive: long;
            _unordered: boolean;
          }
          interface MessageInfoImpl extends CombineTypes<[_MessageInfoImpl, com.sun.nio.sctp.MessageInfo]> {}
          interface _SctpChannelImpl$$static extends ClassLike {
            new(provider: java.nio.channels.spi.SelectorProvider): SctpChannelImpl;
          }
          let SctpChannelImpl: _SctpChannelImpl$$static;
          interface _SctpChannelImpl {
            association(): com.sun.nio.sctp.Association;
            bind(local: java.net.SocketAddress): com.sun.nio.sctp.SctpChannel;
            bindAddress(address: java.net.InetAddress): com.sun.nio.sctp.SctpChannel;
            connect(remote: java.net.SocketAddress): boolean;
            connect(remote: java.net.SocketAddress, maxOutStreams: int, maxInStreams: int): boolean;
            finishConnect(): boolean;
            getAllLocalAddresses(): java.util.Set<java.net.SocketAddress>;
            getOption<T>(name: com.sun.nio.sctp.SctpSocketOption<T>): T;
            getRemoteAddresses(): java.util.Set<java.net.SocketAddress>;
            implCloseSelectableChannel(): void;
            _implConfigureBlocking(block: boolean): void;
            isConnectionPending(): boolean;
            receive<T>(dst: java.nio.ByteBuffer, attachment: T, handler: com.sun.nio.sctp.NotificationHandler<T>): com.sun.nio.sctp.MessageInfo;
            send(src: java.nio.ByteBuffer, messageInfo: com.sun.nio.sctp.MessageInfo): int;
            setOption<T>(name: com.sun.nio.sctp.SctpSocketOption<T>, value: T): com.sun.nio.sctp.SctpChannel;
            shutdown(): com.sun.nio.sctp.SctpChannel;
            supportedOptions(): java.util.Set<com.sun.nio.sctp.SctpSocketOption<any>>;
            unbindAddress(address: java.net.InetAddress): com.sun.nio.sctp.SctpChannel;
          }
          interface SctpChannelImpl extends CombineTypes<[_SctpChannelImpl, com.sun.nio.sctp.SctpChannel]> {}
          interface _SctpMultiChannelImpl$$static extends ClassLike {
            new(provider: java.nio.channels.spi.SelectorProvider): SctpMultiChannelImpl;
          }
          let SctpMultiChannelImpl: _SctpMultiChannelImpl$$static;
          interface _SctpMultiChannelImpl {
            associations(): java.util.Set<com.sun.nio.sctp.Association>;
            bind(local: java.net.SocketAddress, backlog: int): com.sun.nio.sctp.SctpMultiChannel;
            bindAddress(address: java.net.InetAddress): com.sun.nio.sctp.SctpMultiChannel;
            branch(association: com.sun.nio.sctp.Association): com.sun.nio.sctp.SctpChannel;
            getAllLocalAddresses(): java.util.Set<java.net.SocketAddress>;
            getOption<T>(name: com.sun.nio.sctp.SctpSocketOption<T>, association: com.sun.nio.sctp.Association): T;
            getRemoteAddresses(association: com.sun.nio.sctp.Association): java.util.Set<java.net.SocketAddress>;
            implCloseSelectableChannel(): void;
            _implConfigureBlocking(block: boolean): void;
            receive<T>(buffer: java.nio.ByteBuffer, attachment: T, handler: com.sun.nio.sctp.NotificationHandler<T>): com.sun.nio.sctp.MessageInfo;
            send(buffer: java.nio.ByteBuffer, messageInfo: com.sun.nio.sctp.MessageInfo): int;
            setOption<T>(name: com.sun.nio.sctp.SctpSocketOption<T>, value: T, association: com.sun.nio.sctp.Association): com.sun.nio.sctp.SctpMultiChannel;
            shutdown(association: com.sun.nio.sctp.Association): com.sun.nio.sctp.SctpMultiChannel;
            supportedOptions(): java.util.Set<com.sun.nio.sctp.SctpSocketOption<any>>;
            unbindAddress(address: java.net.InetAddress): com.sun.nio.sctp.SctpMultiChannel;
          }
          interface SctpMultiChannelImpl extends CombineTypes<[_SctpMultiChannelImpl, com.sun.nio.sctp.SctpMultiChannel]> {}
          interface _SctpServerChannelImpl$$static extends ClassLike {
            new(provider: java.nio.channels.spi.SelectorProvider): SctpServerChannelImpl;
          }
          let SctpServerChannelImpl: _SctpServerChannelImpl$$static;
          interface _SctpServerChannelImpl {
            accept(): com.sun.nio.sctp.SctpChannel;
            bind(local: java.net.SocketAddress, backlog: int): com.sun.nio.sctp.SctpServerChannel;
            bindAddress(address: java.net.InetAddress): com.sun.nio.sctp.SctpServerChannel;
            getAllLocalAddresses(): java.util.Set<java.net.SocketAddress>;
            getOption<T>(name: com.sun.nio.sctp.SctpSocketOption<T>): T;
            implCloseSelectableChannel(): void;
            _implConfigureBlocking(block: boolean): void;
            setOption<T>(name: com.sun.nio.sctp.SctpSocketOption<T>, value: T): com.sun.nio.sctp.SctpServerChannel;
            supportedOptions(): java.util.Set<com.sun.nio.sctp.SctpSocketOption<any>>;
            unbindAddress(address: java.net.InetAddress): com.sun.nio.sctp.SctpServerChannel;
          }
          interface SctpServerChannelImpl extends CombineTypes<[_SctpServerChannelImpl, com.sun.nio.sctp.SctpServerChannel]> {}
          interface _SctpStdSocketOption$$static<T> extends ClassLike {
            readonly SCTP_DISABLE_FRAGMENTS: int;
            readonly SCTP_EXPLICIT_COMPLETE: int;
            readonly SCTP_FRAGMENT_INTERLEAVE: int;
            readonly SCTP_NODELAY: int;
            readonly SO_LINGER: int;
            readonly SO_RCVBUF: int;
            readonly SO_SNDBUF: int;
            new(name: string, type: java.lang.Class<T>): SctpStdSocketOption<T>;
            new(name: string, type: java.lang.Class<T>, constValue: int): SctpStdSocketOption<T>;
          }
          let SctpStdSocketOption: _SctpStdSocketOption$$static<T>;
          interface _SctpStdSocketOption<T> {
            _constValue(): int;
            name(): string;
            toString(): string;
            type(): java.lang.Class<T>;
            _constValue: int;
            _name: string;
            _type: java.lang.Class<T>;
          }
          interface SctpStdSocketOption<T> extends CombineTypes<[_SctpStdSocketOption<T>, java.lang.Object, com.sun.nio.sctp.SctpSocketOption<T>]> {}
          interface _UnsupportedUtil$$static extends ClassLike {
            _sctpUnsupported(): java.lang.UnsupportedOperationException;
            _MESSAGE: string;
          }
          let UnsupportedUtil: _UnsupportedUtil$$static;
          interface _UnsupportedUtil {
          }
          interface UnsupportedUtil extends CombineTypes<[_UnsupportedUtil, java.lang.Object]> {}
        }
      }
    }
  }
}
