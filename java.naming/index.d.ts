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
      module jndi {
        module ldap {
          module ext {
            interface _StartTlsResponseImpl$$static extends ClassLike {
              _getPeerPrincipal(session: javax.net.ssl.SSLSession): java.security.Principal;
              _DNSNAME_TYPE: int;
              _debug: boolean;
              _serialVersionUID: long;
              new(): StartTlsResponseImpl;
            }
            let StartTlsResponseImpl: _StartTlsResponseImpl$$static;
            interface _StartTlsResponseImpl {
              close(): void;
              _getDefaultFactory(): javax.net.ssl.SSLSocketFactory;
              negotiate(): javax.net.ssl.SSLSession;
              negotiate(factory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.SSLSession;
              setConnection(ldapConnection: Connection, hostname: string): void;
              setEnabledCipherSuites(suites: string[]): void;
              setHostnameVerifier(verifier: javax.net.ssl.HostnameVerifier): void;
              _startHandshake(factory: javax.net.ssl.SSLSocketFactory): javax.net.ssl.SSLSocket;
              _verify(hostname: string, session: javax.net.ssl.SSLSession): boolean;
              _currentFactory: javax.net.ssl.SSLSocketFactory;
              _defaultFactory: javax.net.ssl.SSLSocketFactory;
              _hostname: string;
              _isClosed: boolean;
              _ldapConnection: Connection;
              _originalInputStream: java.io.InputStream;
              _originalOutputStream: java.io.OutputStream;
              _sslSocket: javax.net.ssl.SSLSocket;
              _suites: string[];
              _verifier: javax.net.ssl.HostnameVerifier;
            }
            interface StartTlsResponseImpl extends CombineTypes<[_StartTlsResponseImpl, javax.naming.ldap.StartTlsResponse]> {}
          }
          module pool {
            interface _ConnectionDesc$$static extends ClassLike {
              _BUSY: byte;
              _EXPIRED: byte;
              _IDLE: byte;
              _debug: boolean;
              _new(conn: PooledConnection): ConnectionDesc;
              _new(conn: PooledConnection, use: boolean): ConnectionDesc;
            }
            let ConnectionDesc: _ConnectionDesc$$static;
            interface _ConnectionDesc {
              _d(msg: string): void;
              equals(obj: any): boolean;
              _expire(threshold: long): boolean;
              _getState(): int;
              _getUseCount(): long;
              hashCode(): int;
              _release(): boolean;
              toString(): string;
              _tryUse(): PooledConnection;
              _conn: PooledConnection;
              _idleSince: long;
              _state: byte;
              _useCount: long;
            }
            interface ConnectionDesc extends CombineTypes<[_ConnectionDesc, java.lang.Object]> {}
            interface _Connections$$static extends ClassLike {
              _DEFAULT_SIZE: int;
              _debug: boolean;
              _trace: boolean;
              _new(id: any, initSize: int, prefSize: int, maxSize: int, factory: PooledConnectionFactory, lock: java.util.concurrent.locks.ReentrantLock): Connections;
            }
            let Connections: _Connections$$static;
            interface _Connections {
              _close(): void;
              _createConnection(factory: PooledConnectionFactory, timeout: long): PooledConnection;
              _d(msg: string, o1: any): void;
              _d(msg: string, i: int): void;
              _d(msg: string): void;
              _expire(threshold: long): boolean;
              _getAvailableConnection(timeout: long): PooledConnection;
              _getStats(): string;
              _grabLock(timeout: long): boolean;
              releasePooledConnection(conn: PooledConnection): boolean;
              removePooledConnection(conn: PooledConnection): boolean;
              _td(msg: string, o1: any, o2: any): void;
              _td(msg: string, o1: any): void;
              _td(msg: string): void;
              _unlock(): void;
              _waitForAvailableConnection(): void;
              _waitForAvailableConnection(waitTime: long): void;
              _closed: boolean;
              _connectionsAvailable: java.util.concurrent.locks.Condition;
              _conns: java.util.List<ConnectionDesc>;
              _factory: PooledConnectionFactory;
              _initSize: int;
              _initialized: boolean;
              _lock: java.util.concurrent.locks.ReentrantLock;
              _maxSize: int;
              _prefSize: int;
              _ref: java.lang.ref.Reference<any>;
            }
            interface Connections extends CombineTypes<[_Connections, com.sun.jndi.ldap.pool.PoolCallback, java.lang.Object]> {}
            interface _ConnectionsRef$$static extends ClassLike {
              _new(conns: Connections): ConnectionsRef;
            }
            let ConnectionsRef: _ConnectionsRef$$static;
            interface _ConnectionsRef {
              _getConnections(): Connections;
              _conns: Connections;
            }
            interface ConnectionsRef extends CombineTypes<[_ConnectionsRef, java.lang.Object]> {}
            interface _ConnectionsWeakRef$$static extends ClassLike {
              _new(connsRef: ConnectionsRef, queue: java.lang.ref.ReferenceQueue<ConnectionsRef>): ConnectionsWeakRef;
            }
            let ConnectionsWeakRef: _ConnectionsWeakRef$$static;
            interface _ConnectionsWeakRef {
              _getConnections(): Connections;
              _conns: Connections;
            }
            interface ConnectionsWeakRef extends CombineTypes<[_ConnectionsWeakRef, java.lang.ref.WeakReference<ConnectionsRef>]> {}
            interface _Pool$$static extends ClassLike {
              _expungeStaleConnections(): void;
              _debug: boolean;
              _queue: java.lang.ref.ReferenceQueue<ConnectionsRef>;
              _weakRefs: java.util.Collection<java.lang.ref.Reference<ConnectionsRef>>;
              new(initSize: int, prefSize: int, maxSize: int): Pool;
            }
            let Pool: _Pool$$static;
            interface _Pool {
              _checkRemaining(start: long, a1: long): long;
              _d(msg: string, i: int): void;
              _d(msg: string, obj: any): void;
              expire(threshold: long): void;
              _getOrCreateConnections(factory: PooledConnectionFactory, id: any): Connections;
              _getOrCreatePooledConnection(factory: PooledConnectionFactory, conns: Connections, start: long, a3: long): PooledConnection;
              getPooledConnection(id: any, timeout: long, a2: PooledConnectionFactory): PooledConnection;
              showStats(out: java.io.PrintStream): void;
              toString(): string;
              _initSize: int;
              _map: java.util.Map<any,ConnectionsRef>;
              _maxSize: int;
              _prefSize: int;
            }
            interface Pool extends CombineTypes<[_Pool, java.lang.Object]> {}
            interface _PoolCallback$$static extends ClassLike {
            }
            let PoolCallback: _PoolCallback$$static;
            interface _PoolCallback {
              releasePooledConnection(a0: PooledConnection): boolean;
              removePooledConnection(a0: PooledConnection): boolean;
            }
            interface PoolCallback extends CombineTypes<[_PoolCallback, java.lang.Object]> {}
            interface _PoolCleaner$$static extends ClassLike {
              new(period: long, a1: Pool[]): PoolCleaner;
            }
            let PoolCleaner: _PoolCleaner$$static;
            interface _PoolCleaner {
              run(): void;
              _period: long;
              _pools: Pool[];
            }
            interface PoolCleaner extends CombineTypes<[_PoolCleaner, java.lang.Object, java.lang.Runnable]> {}
            interface _PooledConnection$$static extends ClassLike {
            }
            let PooledConnection: _PooledConnection$$static;
            interface _PooledConnection {
              closeConnection(): void;
(): void;
            }
            interface PooledConnection extends CombineTypes<[_PooledConnection, java.lang.Object]> {}
            interface _PooledConnectionFactory$$static extends ClassLike {
            }
            let PooledConnectionFactory: _PooledConnectionFactory$$static;
            interface _PooledConnectionFactory {
              createPooledConnection(a0: PoolCallback): PooledConnection;
              createPooledConnection(a0: PoolCallback, a1: long): PooledConnection;
            }
            interface PooledConnectionFactory extends CombineTypes<[_PooledConnectionFactory, java.lang.Object]> {}
          }
          module sasl {
            interface _DefaultCallbackHandler$$static extends ClassLike {
              _new(principal: string, cred: any, realm: string): DefaultCallbackHandler;
            }
            let DefaultCallbackHandler: _DefaultCallbackHandler$$static;
            interface _DefaultCallbackHandler {
              _clearPassword(): void;
              _finalize(): void;
              handle(callbacks: javax.security.auth.callback.Callback[]): void;
              _authRealm: string;
              _authenticationID: string;
              _passwd: char[];
            }
            interface DefaultCallbackHandler extends CombineTypes<[_DefaultCallbackHandler, javax.security.auth.callback.CallbackHandler, java.lang.Object]> {}
            interface _LdapSasl$$static extends ClassLike {
              _getSaslMechanismNames(str: string): string[];
              saslBind(clnt: LdapClient, conn: Connection, server: string, dn: string, pw: any, authMech: string, env: java.util.Hashtable<any,any>, bindCtls: javax.naming.ldap.Control[]): LdapResult;
              _wrapInNamingException(e: java.lang.Exception): javax.naming.NamingException;
              _CHANNEL_BINDING: string;
              _CHANNEL_BINDING_TYPE: string;
              _LDAP_SASL_BIND_IN_PROGRESS: int;
              _LDAP_SUCCESS: int;
              _NO_BYTES: byte[];
              _SASL_AUTHZ_ID: string;
              _SASL_CALLBACK: string;
              _SASL_REALM: string;
            }
            let LdapSasl: _LdapSasl$$static;
            interface _LdapSasl {
            }
            interface LdapSasl extends CombineTypes<[_LdapSasl, java.lang.Object]> {}
            interface _SaslInputStream$$static extends ClassLike {
              _networkByteOrderToInt(buf: byte[], start: int, count: int): int;
              _debug: boolean;
              _new(sc: javax.security.sasl.SaslClient, _in: java.io.InputStream): SaslInputStream;
            }
            let SaslInputStream: _SaslInputStream$$static;
            interface _SaslInputStream {
              available(): int;
              close(): void;
              _fill(): int;
              read(): int;
              read(inBuf: byte[], start: int, count: int): int;
              _readFully(inBuf: byte[], total: int): int;
              _buf: byte[];
              _bufPos: int;
              _in: java.io.InputStream;
              _lenBuf: byte[];
              _recvMaxBufSize: int;
              _saslBuffer: byte[];
              _sc: javax.security.sasl.SaslClient;
            }
            interface SaslInputStream extends CombineTypes<[_SaslInputStream, java.io.InputStream]> {}
            interface _SaslOutputStream$$static extends ClassLike {
              _intToNetworkByteOrder(num: int, buf: byte[], start: int, count: int): void;
              _debug: boolean;
              _new(sc: javax.security.sasl.SaslClient, out: java.io.OutputStream): SaslOutputStream;
            }
            let SaslOutputStream: _SaslOutputStream$$static;
            interface _SaslOutputStream {
              close(): void;
              write(b: int): void;
              write(buffer: byte[], offset: int, total: int): void;
              _lenBuf: byte[];
              _rawSendSize: int;
              _sc: javax.security.sasl.SaslClient;
            }
            interface SaslOutputStream extends CombineTypes<[_SaslOutputStream, java.io.FilterOutputStream]> {}
          }
          interface _AbstractLdapNamingEnumeration$$static<T> extends ClassLike {
            _new(homeCtx: LdapCtx, answer: LdapResult, listArg: javax.naming.Name, cont: jndi.toolkit.ctx.Continuation): AbstractLdapNamingEnumeration<T>;
          }
          let AbstractLdapNamingEnumeration: _AbstractLdapNamingEnumeration$$static<T>;
          interface _AbstractLdapNamingEnumeration<T> {
            appendUnprocessedReferrals(ex: LdapReferralException): void;
            _cleanup(): void;
            close(): void;
            _createItem(a0: string, a1: javax.naming.directory.Attributes, a2: java.util.Vector<javax.naming.ldap.Control>): T;
            _finalize(): void;
            _getAtom(dn: string): string;
            _getNextBatch(): void;
            _getReferredResults(a0: LdapReferralContext): AbstractLdapNamingEnumeration<javax.naming.NameClassPair>;
            hasMore(): boolean;
            hasMoreElements(): boolean;
            _hasMoreImpl(): boolean;
            _hasMoreReferrals(): boolean;
            next(): T;
            next(): any;
            _nextAux(): T;
            nextElement(): T;
            nextElement(): any;
            _nextImpl(): T;
            _setNamingException(e: javax.naming.NamingException): void;
            _update(ne: AbstractLdapNamingEnumeration<javax.naming.NameClassPair>): void;
            _cleaned: boolean;
            _cont: jndi.toolkit.ctx.Continuation;
            _entries: java.util.Vector<LdapEntry>;
            _enumClnt: LdapClient;
            _errEx: javax.naming.NamingException;
            _hasMoreCalled: boolean;
            _homeCtx: LdapCtx;
            _limit: int;
            _listArg: javax.naming.Name;
            _more: boolean;
            _posn: int;
            _refEx: LdapReferralException;
            _res: LdapResult;
          }
          interface AbstractLdapNamingEnumeration<T> extends CombineTypes<[_AbstractLdapNamingEnumeration<T>, ReferralEnumeration<T>, java.lang.Object, javax.naming.NamingEnumeration<T>]> {}
          interface _BasicControl$$static extends ClassLike {
            _serialVersionUID: long;
            new(id: string): BasicControl;
            new(id: string, criticality: boolean, value: byte[]): BasicControl;
          }
          let BasicControl: _BasicControl$$static;
          interface _BasicControl {
            getEncodedValue(): byte[];
            getID(): string;
            isCritical(): boolean;
            _criticality: boolean;
            _id: string;
            _value: byte[];
          }
          interface BasicControl extends CombineTypes<[_BasicControl, javax.naming.ldap.Control, java.lang.Object]> {}
          interface _Ber$$static extends ClassLike {
            dumpBER(outStream: java.io.OutputStream, tag: string, bytes: byte[], from: int, to: int): void;
            readonly ASN_APPLICATION: int;
            readonly ASN_BIT_STRING: int;
            readonly ASN_BOOLEAN: int;
            readonly ASN_CONSTRUCTOR: int;
            readonly ASN_CONTEXT: int;
            readonly ASN_ENUMERATED: int;
            readonly ASN_INTEGER: int;
            readonly ASN_NULL: int;
            readonly ASN_OBJECT_ID: int;
            readonly ASN_OCTET_STR: int;
            readonly ASN_PRIMITIVE: int;
            readonly ASN_PRIVATE: int;
            readonly ASN_SEQUENCE: int;
            readonly ASN_SET: int;
            readonly ASN_SIMPLE_STRING: int;
            readonly ASN_UNIVERSAL: int;
            _new(): Ber;
          }
          let Ber: _Ber$$static;
          interface _Ber {
            _buf: byte[];
            _bufsize: int;
            _offset: int;
          }
          interface Ber extends CombineTypes<[_Ber, java.lang.Object]> {}
          interface _Ber$DecodeException$$static extends ClassLike {
            _serialVersionUID: long;
            _new(msg: string): Ber$DecodeException;
          }
          let Ber$DecodeException: _Ber$DecodeException$$static;
          interface _Ber$DecodeException {
          }
          interface Ber$DecodeException extends CombineTypes<[_Ber$DecodeException, java.io.IOException]> {}
          interface _Ber$EncodeException$$static extends ClassLike {
            _serialVersionUID: long;
            _new(msg: string): Ber$EncodeException;
          }
          let Ber$EncodeException: _Ber$EncodeException$$static;
          interface _Ber$EncodeException {
          }
          interface Ber$EncodeException extends CombineTypes<[_Ber$EncodeException, java.io.IOException]> {}
          interface _BerDecoder$$static extends ClassLike {
            new(buf: byte[], offset: int, bufsize: int): BerDecoder;
          }
          let BerDecoder: _BerDecoder$$static;
          interface _BerDecoder {
            bytesLeft(): int;
            getParsePosition(): int;
            parseBoolean(): boolean;
            parseByte(): int;
            parseEnumeration(): int;
            parseInt(): int;
            _parseIntWithTag(tag: int): int;
            parseLength(): int;
            parseOctetString(tag: int, rlen: int[]): byte[];
            parseSeq(rlen: int[]): int;
            parseString(decodeUTF8: boolean): string;
            parseStringWithTag(tag: int, decodeUTF8: boolean, rlen: int[]): string;
            peekByte(): int;
            reset(): void;
            _seek(i: int): void;
            _origOffset: int;
          }
          interface BerDecoder extends CombineTypes<[_BerDecoder, com.sun.jndi.ldap.Ber]> {}
          interface _BerEncoder$$static extends ClassLike {
            _BUF_GROWTH_FACTOR: int;
            _DEFAULT_BUFSIZE: int;
            _INITIAL_SEQUENCES: int;
            new(): BerEncoder;
            new(bufsize: int): BerEncoder;
          }
          let BerEncoder: _BerEncoder$$static;
          interface _BerEncoder {
            beginSeq(tag: int): void;
            encodeBoolean(b: boolean): void;
            encodeBoolean(b: boolean, tag: int): void;
            encodeByte(b: int): void;
            encodeInt(i: int): void;
            encodeInt(i: int, tag: int): void;
            _encodeInt(i: int, tag: int, intsize: int): void;
            _encodeLength(len: int): void;
            encodeOctetString(tb: byte[], tag: int, tboffset: int, length: int): void;
            encodeOctetString(tb: byte[], tag: int): void;
            encodeString(str: string, encodeUTF8: boolean): void;
            encodeString(str: string, tag: int, encodeUTF8: boolean): void;
            encodeStringArray(strs: string[], encodeUTF8: boolean): void;
            endSeq(): void;
            _ensureFreeBytes(len: int): void;
            getBuf(): byte[];
            getDataLen(): int;
            getTrimmedBuf(): byte[];
            reset(): void;
            _shiftSeqData(start: int, len: int, shift: int): void;
            _curSeqIndex: int;
            _seqOffset: int[];
          }
          interface BerEncoder extends CombineTypes<[_BerEncoder, com.sun.jndi.ldap.Ber]> {}
          interface _BindingWithControls$$static extends ClassLike {
            _serialVersionUID: long;
            new(name: string, obj: any, controls: javax.naming.ldap.Control[]): BindingWithControls;
          }
          let BindingWithControls: _BindingWithControls$$static;
          interface _BindingWithControls {
            getControls(): javax.naming.ldap.Control[];
            _controls: javax.naming.ldap.Control[];
          }
          interface BindingWithControls extends CombineTypes<[_BindingWithControls, javax.naming.ldap.HasControls, javax.naming.Binding]> {}
          interface _ClientId$$static extends ClassLike {
            _equalsControls(a: javax.naming.ldap.Control[], b: javax.naming.ldap.Control[]): boolean;
            _hashCodeControls(c: javax.naming.ldap.Control[]): int;
            _toStringControls(ctls: javax.naming.ldap.Control[]): string;
            readonly debug: boolean;
            _new(version: int, hostname: string, port: int, protocol: string, bindCtls: javax.naming.ldap.Control[], trace: java.io.OutputStream, socketFactory: string): ClientId;
          }
          let ClientId: _ClientId$$static;
          interface _ClientId {
            equals(obj: any): boolean;
            _equalsSockFactory(other: ClientId): boolean;
            hashCode(): int;
            _invokeComparator(c1: ClientId, c2: ClientId): boolean;
            toString(): string;
            _bindCtls: javax.naming.ldap.Control[];
            _ctlHash: int;
            _factory: javax.net.SocketFactory;
            _hostname: string;
            _isDefaultSockFactory: boolean;
            _myHash: int;
            _port: int;
            _protocol: string;
            _sockComparator: java.lang.reflect.Method;
            _socketFactory: string;
            _trace: java.io.OutputStream;
            _version: int;
          }
          interface ClientId extends CombineTypes<[_ClientId, java.lang.Object]> {}
          interface _Connection$$static extends ClassLike {
            _hostnameVerificationDisabledValue(): boolean;
            _readFully(is: java.io.InputStream, length: int): byte[];
            _IS_HOSTNAME_VERIFICATION_DISABLED: boolean;
            _debug: boolean;
            _new(parent: LdapClient, host: string, port: int, socketFactory: string, connectTimeout: int, readTimeout: int, trace: java.io.OutputStream): Connection;
          }
          let Connection: _Connection$$static;
          interface _Connection {
            _abandonOutstandingReqs(reqCtls: javax.naming.ldap.Control[]): void;
            _abandonRequest(ldr: LdapRequest, reqCtls: javax.naming.ldap.Control[]): void;
            _addRequest(ldapRequest: LdapRequest): void;
            _cleanup(reqCtls: javax.naming.ldap.Control[], notifyParent: boolean): void;
            _closeOpenedSocket(socket: java.net.Socket): void;
            _createConnectionSocket(host: string, port: int, factory: javax.net.SocketFactory, connectTimeout: int): java.net.Socket;
            _createInetSocketAddress(host: string, port: int): java.net.InetSocketAddress;
            _createSocket(host: string, port: int, socketFactory: string, connectTimeout: int): java.net.Socket;
            _findRequest(msgId: int): LdapRequest;
            _flushAndCloseOutputStream(): void;
            _getInputStream(): java.io.InputStream;
            _getMsgId(): int;
            _getSocketFactory(socketFactoryName: string): javax.net.SocketFactory;
            getTlsServerCertificate(): java.security.cert.X509Certificate;
            _initialSSLHandshake(sslSocket: javax.net.ssl.SSLSocket, connectTimeout: int): void;
            isTlsConnection(): boolean;
            isUpgradedToStartTls(): boolean;
            _ldapUnbind(reqCtls: javax.naming.ldap.Control[]): void;
            _pauseReader(): void;
            _readReply(ldr: LdapRequest): BerDecoder;
            _removeRequest(req: LdapRequest): void;
            replaceStreams(newIn: java.io.InputStream, newOut: java.io.OutputStream): void;
            replaceStreams(newIn: java.io.InputStream, newOut: java.io.OutputStream, isStartTls: boolean): void;
            run(): void;
            _setBound(): void;
            setHandshakeCompletedListener(sslSocket: javax.net.ssl.SSLSocket): void;
            _setV3(v: boolean): void;
            _tryUnpauseReader(): void;
            _unpauseReader(): void;
            _writeRequest(ber: BerEncoder, msgId: int): LdapRequest;
            _writeRequest(ber: BerEncoder, msgId: int, pauseAfterReceipt: boolean): LdapRequest;
            _writeRequest(ber: BerEncoder, msgId: int, pauseAfterReceipt: boolean, replyQueueCapacity: int): LdapRequest;
            _bound: boolean;
            _closureReason: java.io.IOException;
            _connectTimeout: int;
            readonly host: string;
            inStream: java.io.InputStream;
            _isUpgradedToStartTls: boolean;
            _outMsgId: int;
            outStream: java.io.OutputStream;
            _parent: LdapClient;
            _pauseLock: any;
            _paused: boolean;
            _pendingRequests: LdapRequest;
            readonly port: int;
            _readTimeout: int;
            sock: java.net.Socket;
            _startTlsLock: any;
            _tlsHandshakeListener: Connection$HandshakeListener;
            _traceFile: java.io.OutputStream;
            _traceTagIn: string;
            _traceTagOut: string;
            _useable: boolean;
            _v3: boolean;
            _worker: java.lang.Thread;
          }
          interface Connection extends CombineTypes<[_Connection, java.lang.Object, java.lang.Runnable]> {}
          interface _Connection$HandshakeListener$$static extends ClassLike {
          }
          let Connection$HandshakeListener: _Connection$HandshakeListener$$static;
          interface _Connection$HandshakeListener {
            handshakeCompleted(event: javax.net.ssl.HandshakeCompletedEvent): void;
            _this$0: Connection;
            _tlsHandshakeCompleted: java.util.concurrent.CompletableFuture<java.security.cert.X509Certificate>;
          }
          interface Connection$HandshakeListener extends CombineTypes<[_Connection$HandshakeListener, javax.net.ssl.HandshakeCompletedListener, java.lang.Object]> {}
          interface _DefaultLdapDnsProvider$$static extends ClassLike {
            new(): DefaultLdapDnsProvider;
          }
          let DefaultLdapDnsProvider: _DefaultLdapDnsProvider$$static;
          interface _DefaultLdapDnsProvider {
            lookupEndpoints(url: string, env: java.util.Map<any,any>): java.util.Optional<javax.naming.ldap.spi.LdapDnsProviderResult>;
          }
          interface DefaultLdapDnsProvider extends CombineTypes<[_DefaultLdapDnsProvider, java.lang.Object]> {}
          interface _DefaultResponseControlFactory$$static extends ClassLike {
            new(): DefaultResponseControlFactory;
          }
          let DefaultResponseControlFactory: _DefaultResponseControlFactory$$static;
          interface _DefaultResponseControlFactory {
            getControlInstance(ctl: javax.naming.ldap.Control): javax.naming.ldap.Control;
          }
          interface DefaultResponseControlFactory extends CombineTypes<[_DefaultResponseControlFactory, javax.naming.ldap.ControlFactory]> {}
          interface _DigestClientId$$static extends ClassLike {
            _SASL_PROPS: string[];
            _new(version: int, hostname: string, port: int, protocol: string, bindCtls: javax.naming.ldap.Control[], trace: java.io.OutputStream, socketFactory: string, username: string, passwd: any, env: java.util.Hashtable<any,any>): DigestClientId;
          }
          let DigestClientId: _DigestClientId$$static;
          interface _DigestClientId {
            equals(obj: any): boolean;
            hashCode(): int;
            toString(): string;
            _myHash: int;
            _propvals: string[];
          }
          interface DigestClientId extends CombineTypes<[_DigestClientId, com.sun.jndi.ldap.SimpleClientId]> {}
          interface _EntryChangeResponseControl$$static extends ClassLike {
            readonly ADD: int;
            readonly DELETE: int;
            readonly MODIFY: int;
            readonly OID: string;
            readonly RENAME: int;
            _serialVersionUID: long;
            new(id: string, criticality: boolean, value: byte[]): EntryChangeResponseControl;
          }
          let EntryChangeResponseControl: _EntryChangeResponseControl$$static;
          interface _EntryChangeResponseControl {
            getChangeNumber(): long;
            getChangeType(): int;
            getPreviousDN(): string;
            _changeNumber: long;
            _changeType: int;
            _previousDN: string;
          }
          interface EntryChangeResponseControl extends CombineTypes<[_EntryChangeResponseControl, com.sun.jndi.ldap.BasicControl]> {}
          interface _EventQueue$$static extends ClassLike {
            _debug: boolean;
            _new(): EventQueue;
          }
          let EventQueue: _EventQueue$$static;
          interface _EventQueue {
            _dequeue(): EventQueue$QueueElement;
            _enqueue(event: java.util.EventObject, vector: java.util.Vector<javax.naming.event.NamingListener>): void;
            run(): void;
            _stop(): void;
            _head: EventQueue$QueueElement;
            _qThread: java.lang.Thread;
            _tail: EventQueue$QueueElement;
          }
          interface EventQueue extends CombineTypes<[_EventQueue, java.lang.Object, java.lang.Runnable]> {}
          interface _EventQueue$QueueElement$$static extends ClassLike {
            _new(event: java.util.EventObject, vector: java.util.Vector<javax.naming.event.NamingListener>): EventQueue$QueueElement;
          }
          let EventQueue$QueueElement: _EventQueue$QueueElement$$static;
          interface _EventQueue$QueueElement {
            _event: java.util.EventObject;
            _next: EventQueue$QueueElement;
            _prev: EventQueue$QueueElement;
            _vector: java.util.Vector<javax.naming.event.NamingListener>;
          }
          interface EventQueue$QueueElement extends CombineTypes<[_EventQueue$QueueElement, java.lang.Object]> {}
          interface _EventSupport$$static extends ClassLike {
            _debug: boolean;
            _new(ctx: LdapCtx): EventSupport;
          }
          let EventSupport: _EventSupport$$static;
          interface _EventSupport {
            _addNamingListener(nm: string, scope: int, l: javax.naming.event.NamingListener): void;
            _addNamingListener(nm: string, filter: string, ctls: javax.naming.directory.SearchControls, l: javax.naming.event.NamingListener): void;
            _cleanup(): void;
            _fireUnsolicited(obj: any): void;
            _hasUnsolicited(): boolean;
            _queueEvent(event: java.util.EventObject, vector: java.util.Vector<javax.naming.event.NamingListener>): void;
            _removeDeadNotifier(info: NotifierArgs): void;
            _removeNamingListener(l: javax.naming.event.NamingListener): void;
            _ctx: LdapCtx;
            _eventQueue: EventQueue;
            _notifiers: java.util.Hashtable<NotifierArgs,NamingEventNotifier>;
            _unsolicited: java.util.Vector<javax.naming.ldap.UnsolicitedNotificationListener>;
          }
          interface EventSupport extends CombineTypes<[_EventSupport, java.lang.Object]> {}
          interface _Filter$$static extends ClassLike {
            _dprint(msg: string): void;
            _dprint(msg: string, str: byte[]): void;
            _dprint(msg: string, str: byte[], start: int, end: int): void;
            _encodeComplexFilter(ber: BerEncoder, filter: byte[], filterType: int, filtOffset: int[], filtEnd: int): void;
            _encodeExtensibleMatch(ber: BerEncoder, filter: byte[], matchStart: int, matchEnd: int, valueStart: int, valueEnd: int): void;
            _encodeFilter(ber: BerEncoder, filter: byte[], filterStart: int, filterEnd: int): void;
            _encodeFilterList(ber: BerEncoder, filter: byte[], filterType: int, start: int, end: int): void;
            _encodeFilterString(ber: BerEncoder, filterStr: string, isLdapv3: boolean): void;
            _encodeSimpleFilter(ber: BerEncoder, filter: byte[], filtStart: int, filtEnd: int): void;
            _encodeSubstringFilter(ber: BerEncoder, filter: byte[], typeStart: int, typeEnd: int, valueStart: int, valueEnd: int): void;
            _findRightParen(filter: byte[], filtOffset: int[], end: int): int[];
            _findUnescaped(str: byte[], ch: char, start: int, end: int): int;
            _indexOf(str: byte[], ch: char, start: int, end: int): int;
            _indexOf(str: byte[], target: string, start: int, end: int): int;
            _unescapeFilterValue(orig: byte[], start: int, end: int): byte[];
            _LDAP_FILTER_AND: int;
            _LDAP_FILTER_APPROX: int;
            _LDAP_FILTER_EQUALITY: int;
            _LDAP_FILTER_EXT: int;
            _LDAP_FILTER_EXT_DN: int;
            _LDAP_FILTER_EXT_RULE: int;
            _LDAP_FILTER_EXT_TYPE: int;
            _LDAP_FILTER_EXT_VAL: int;
            _LDAP_FILTER_GE: int;
            _LDAP_FILTER_LE: int;
            _LDAP_FILTER_NOT: int;
            _LDAP_FILTER_OR: int;
            _LDAP_FILTER_PRESENT: int;
            _LDAP_FILTER_SUBSTRINGS: int;
            _LDAP_SUBSTRING_ANY: int;
            _LDAP_SUBSTRING_FINAL: int;
            _LDAP_SUBSTRING_INITIAL: int;
            _dbg: boolean;
            _dbgIndent: int;
            _new(): Filter;
          }
          let Filter: _Filter$$static;
          interface _Filter {
          }
          interface Filter extends CombineTypes<[_Filter, java.lang.Object]> {}
          interface _LdapAttribute$$static extends ClassLike {
            _serialVersionUID: long;
            _new(id: string): LdapAttribute;
          }
          let LdapAttribute: _LdapAttribute$$static;
          interface _LdapAttribute {
            add(attrVal: any): boolean;
            clone(): any;
            getAttributeDefinition(): javax.naming.directory.DirContext;
            getAttributeSyntaxDefinition(): javax.naming.directory.DirContext;
            _getBaseCtx(): javax.naming.directory.DirContext;
            _setBaseCtxInfo(): void;
            _setParent(baseCtx: javax.naming.directory.DirContext, rdn: javax.naming.Name): void;
            _writeObject(out: java.io.ObjectOutputStream): void;
            _baseCtx: javax.naming.directory.DirContext;
            _baseCtxEnv: java.util.Hashtable<string,string>;
            _baseCtxURL: string;
            _rdn: javax.naming.Name;
          }
          interface LdapAttribute extends CombineTypes<[_LdapAttribute, javax.naming.directory.BasicAttribute]> {}
          interface _LdapBindingEnumeration$$static extends ClassLike {
            _new(homeCtx: LdapCtx, answer: LdapResult, remain: javax.naming.Name, cont: jndi.toolkit.ctx.Continuation): LdapBindingEnumeration;
          }
          let LdapBindingEnumeration: _LdapBindingEnumeration$$static;
          interface _LdapBindingEnumeration {
            _createItem(dn: string, attrs: javax.naming.directory.Attributes, respCtls: java.util.Vector<javax.naming.ldap.Control>): javax.naming.Binding;
            _createItem(a0: string, a1: javax.naming.directory.Attributes, a2: java.util.Vector): javax.naming.NameClassPair;
            _getReferredResults(refCtx: LdapReferralContext): AbstractLdapNamingEnumeration<javax.naming.NameClassPair>;
            _acc: java.security.AccessControlContext;
          }
          interface LdapBindingEnumeration extends CombineTypes<[_LdapBindingEnumeration, AbstractLdapNamingEnumeration<javax.naming.Binding>]> {}
          interface _LdapClient$$static extends ClassLike {
            _encodeControls(ber: BerEncoder, reqCtls: javax.naming.ldap.Control[]): void;
            _encodePassword(pw: any, v3: boolean): byte[];
            _getErrorMessage(errorCode: int, errorMessage: string): string;
            _getInstance(usePool: boolean, hostname: string, port: int, factory: string, connectTimeout: int, readTimeout: int, trace: java.io.OutputStream, version: int, authMechanism: string, ctls: javax.naming.ldap.Control[], protocol: string, user: string, passwd: any, env: java.util.Hashtable<any,any>): LdapClient;
            _hasNoValue(attr: javax.naming.directory.Attribute): boolean;
            _parseControls(replyBer: BerDecoder): java.util.Vector<javax.naming.ldap.Control>;
            _parseResult(replyBer: BerDecoder, res: LdapResult, isLdapv3: boolean): void;
            _ADD: int;
            _DELETE: int;
            _DISCONNECT_OID: string;
            _LBER_BITSTRING: int;
            _LBER_BOOLEAN: int;
            _LBER_ENUMERATED: int;
            _LBER_INTEGER: int;
            _LBER_NULL: int;
            _LBER_OCTETSTRING: int;
            _LBER_SEQUENCE: int;
            _LBER_SET: int;
            _LDAPS_URL: string;
            _LDAP_ADMIN_LIMIT_EXCEEDED: int;
            _LDAP_AFFECTS_MULTIPLE_DSAS: int;
            _LDAP_ALIAS_DEREFERENCING_PROBLEM: int;
            _LDAP_ALIAS_PROBLEM: int;
            _LDAP_ATTRIBUTE_OR_VALUE_EXISTS: int;
            _LDAP_AUTH_METHOD_NOT_SUPPORTED: int;
            _LDAP_BUSY: int;
            _LDAP_COMPARE_FALSE: int;
            _LDAP_COMPARE_TRUE: int;
            _LDAP_CONFIDENTIALITY_REQUIRED: int;
            _LDAP_CONSTRAINT_VIOLATION: int;
            _LDAP_CONTROLS: int;
            _LDAP_CONTROL_MANAGE_DSA_IT: string;
            _LDAP_CONTROL_PAGED_RESULTS: string;
            _LDAP_CONTROL_PREFERRED_LANG: string;
            _LDAP_CONTROL_SERVER_SORT_REQ: string;
            _LDAP_CONTROL_SERVER_SORT_RES: string;
            _LDAP_ENTRY_ALREADY_EXISTS: int;
            _LDAP_INAPPROPRIATE_AUTHENTICATION: int;
            _LDAP_INAPPROPRIATE_MATCHING: int;
            _LDAP_INSUFFICIENT_ACCESS_RIGHTS: int;
            _LDAP_INVALID_ATTRIBUTE_SYNTAX: int;
            _LDAP_INVALID_CREDENTIALS: int;
            _LDAP_INVALID_DN_SYNTAX: int;
            _LDAP_IS_LEAF: int;
            _LDAP_LOOP_DETECT: int;
            _LDAP_NAMING_VIOLATION: int;
            _LDAP_NOT_ALLOWED_ON_NON_LEAF: int;
            _LDAP_NOT_ALLOWED_ON_RDN: int;
            _LDAP_NO_SUCH_ATTRIBUTE: int;
            _LDAP_NO_SUCH_OBJECT: int;
            _LDAP_OBJECT_CLASS_MODS_PROHIBITED: int;
            _LDAP_OBJECT_CLASS_VIOLATION: int;
            _LDAP_OPERATIONS_ERROR: int;
            _LDAP_OTHER: int;
            _LDAP_PARTIAL_RESULTS: int;
            _LDAP_PROTOCOL_ERROR: int;
            _LDAP_REFERRAL: int;
            _LDAP_REF_FOLLOW: int;
            _LDAP_REF_FOLLOW_SCHEME: int;
            _LDAP_REF_IGNORE: int;
            _LDAP_REF_THROW: int;
            _LDAP_REP_ADD: int;
            _LDAP_REP_BIND: int;
            _LDAP_REP_COMPARE: int;
            _LDAP_REP_DELETE: int;
            _LDAP_REP_EXTENSION: int;
            _LDAP_REP_EXT_OID: int;
            _LDAP_REP_EXT_VAL: int;
            _LDAP_REP_MODIFY: int;
            _LDAP_REP_MODRDN: int;
            _LDAP_REP_REFERRAL: int;
            _LDAP_REP_RESULT: int;
            _LDAP_REP_SEARCH: int;
            _LDAP_REP_SEARCH_REF: int;
            _LDAP_REQ_ABANDON: int;
            _LDAP_REQ_ADD: int;
            _LDAP_REQ_BIND: int;
            _LDAP_REQ_COMPARE: int;
            _LDAP_REQ_DELETE: int;
            _LDAP_REQ_EXTENSION: int;
            _LDAP_REQ_MODIFY: int;
            _LDAP_REQ_MODRDN: int;
            _LDAP_REQ_SEARCH: int;
            _LDAP_REQ_UNBIND: int;
            _LDAP_SASL_BIND_IN_PROGRESS: int;
            _LDAP_SIZE_LIMIT_EXCEEDED: int;
            _LDAP_STRONG_AUTH_REQUIRED: int;
            _LDAP_SUCCESS: int;
            _LDAP_SUPERIOR_DN: int;
            _LDAP_TIME_LIMIT_EXCEEDED: int;
            _LDAP_UNAVAILABLE: int;
            _LDAP_UNAVAILABLE_CRITICAL_EXTENSION: int;
            _LDAP_UNDEFINED_ATTRIBUTE_TYPE: int;
            _LDAP_UNWILLING_TO_PERFORM: int;
            _LDAP_URL: string;
            _LDAP_VERSION: int;
            _LDAP_VERSION2: int;
            _LDAP_VERSION3: int;
            _LDAP_VERSION3_VERSION2: int;
            _REPLACE: int;
            _SCOPE_BASE_OBJECT: int;
            _SCOPE_ONE_LEVEL: int;
            _SCOPE_SUBTREE: int;
            _caseIgnore: boolean;
            _debug: int;
            _defaultBinaryAttrs: java.util.Hashtable<string,boolean>;
            _ldap_error_message: string[];
            _new(host: string, port: int, socketFactory: string, connectTimeout: int, readTimeout: int, trace: java.io.OutputStream, pcb: ldap.pool.PoolCallback): LdapClient;
          }
          let LdapClient: _LdapClient$$static;
          interface _LdapClient {
            _add(entry: LdapEntry, reqCtls: javax.naming.ldap.Control[]): LdapResult;
            _addUnsolicited(ctx: LdapCtx): void;
            _authenticate(initial: boolean, name: string, pw: any, version: int, authMechanism: string, ctls: javax.naming.ldap.Control[], env: java.util.Hashtable<any,any>): LdapResult;
            _authenticateCalled(): boolean;
            _clearSearchReply(res: LdapResult, ctls: javax.naming.ldap.Control[]): void;
            _close(reqCtls: javax.naming.ldap.Control[], hardClose: boolean): void;
            closeConnection(): void;
            _compare(DN: string, type: string, value: string, reqCtls: javax.naming.ldap.Control[]): LdapResult;
            _delete(DN: string, reqCtls: javax.naming.ldap.Control[]): LdapResult;
            _encodeAttribute(ber: BerEncoder, attr: javax.naming.directory.Attribute): void;
            _ensureOpen(): void;
            _extendedOp(id: string, request: byte[], reqCtls: javax.naming.ldap.Control[], pauseAfterReceipt: boolean): LdapResult;
            _finalize(): void;
            _forceClose(cleanPool: boolean): void;
            _getSearchReply(batchSize: int, res: LdapResult, binaryAttrs: java.util.Hashtable<string,boolean>): LdapResult;
            _getSearchReply(req: LdapRequest, batchSize: int, res: LdapResult, binaryAttrs: java.util.Hashtable<string,boolean>): LdapResult;
            _incRefCount(): void;
            _isBinaryValued(attrid: string, binaryAttrs: java.util.Hashtable<string,boolean>): boolean;
            _isUpgradedToStartTls(): boolean;
            ldapBind(dn: string, toServer: byte[], bindCtls: javax.naming.ldap.Control[], auth: string, pauseAfterReceipt: boolean): LdapResult;
            _moddn(DN: string, newrdn: string, deleteOldRdn: boolean, newSuperior: string, reqCtls: javax.naming.ldap.Control[]): LdapResult;
            _modify(dn: string, operations: int[], attrs: javax.naming.directory.Attribute[], reqCtls: javax.naming.ldap.Control[]): LdapResult;
            _notifyUnsolicited(e: any): void;
            _parseAttribute(ber: BerDecoder, binaryAttrs: java.util.Hashtable<string,boolean>): javax.naming.directory.Attribute;
            _parseAttributeValue(ber: BerDecoder, la: javax.naming.directory.Attribute, hasBinaryValues: boolean): int;
            _parseExtResponse(replyBer: BerDecoder, res: LdapResult): void;
            _processConnectionClosure(): void;
            _processReply(req: LdapRequest, res: LdapResult, responseType: int): LdapResult;
            _processUnsolicited(ber: BerDecoder): void;
            _removeUnsolicited(ctx: LdapCtx): void;
            _search(dn: string, scope: int, deref: int, sizeLimit: int, timeLimit: int, attrsOnly: boolean, attrs: string[], filter: string, batchSize: int, reqCtls: javax.naming.ldap.Control[], binaryAttrs: java.util.Hashtable<string,boolean>, waitFirstReply: boolean, replyQueueCapacity: int): LdapResult;
            _usingSaslStreams(): boolean;
            _authenticateCalled: boolean;
            _conn: Connection;
            _isLdapv3: boolean;
            _pcb: pool.PoolCallback;
            _pooled: boolean;
            _referenceCount: int;
            _unsolicited: java.util.Vector<LdapCtx>;
          }
          interface LdapClient extends CombineTypes<[_LdapClient, com.sun.jndi.ldap.pool.PooledConnection, java.lang.Object]> {}
          interface _LdapClientFactory$$static extends ClassLike {
            _new(host: string, port: int, socketFactory: string, connTimeout: int, readTimeout: int, trace: java.io.OutputStream): LdapClientFactory;
          }
          let LdapClientFactory: _LdapClientFactory$$static;
          interface _LdapClientFactory {
            createPooledConnection(pcb: ldap.pool.PoolCallback): ldap.pool.PooledConnection;
            createPooledConnection(pcb: ldap.pool.PoolCallback, timeout: long): ldap.pool.PooledConnection;
            _guardedIntegerCast(timeout: long): int;
            toString(): string;
            _connTimeout: int;
            _host: string;
            _port: int;
            _readTimeout: int;
            _socketFactory: string;
            _trace: java.io.OutputStream;
          }
          interface LdapClientFactory extends CombineTypes<[_LdapClientFactory, java.lang.Object, com.sun.jndi.ldap.pool.PooledConnectionFactory]> {}
          interface _LdapCtx$$static extends ClassLike {
            _addControl(prevCtls: javax.naming.ldap.Control[], addition: javax.naming.ldap.Control): javax.naming.ldap.Control[];
            _addRdnAttributes(dn: string, attrs: javax.naming.directory.Attributes, directUpdate: boolean): javax.naming.directory.Attributes;
            _appendVector<T>(v1: java.util.Vector<T>, v2: java.util.Vector<T>): java.util.Vector<T>;
            _cloneControls(ctls: javax.naming.ldap.Control[]): javax.naming.ldap.Control[];
            _cloneSearchControls(cons: javax.naming.directory.SearchControls): javax.naming.directory.SearchControls;
            _concatNames(lesser: string, greater: string): string;
            _containsIgnoreCase(enumStr: javax.naming.NamingEnumeration<string>, str: string): boolean;
            _convertToLdapModCode(mod_op: int): int;
            _extractURLs(refString: string): java.util.Vector<java.util.Vector<string>>;
            _filterToAssertion(filter: string, tokens: string[]): boolean;
            _findControl(ctls: javax.naming.ldap.Control[], target: javax.naming.ldap.Control): int;
            _getMechsAllowedToSendCredentials(): string;
            _getMechsFromPropertyValue(propValue: string): java.util.Set<string>;
            _getTargetName(nm: javax.naming.Name): string;
            mapErrorCode(errorCode: int, errorMessage: string): javax.naming.NamingException;
            _removeControl(prevCtls: javax.naming.ldap.Control[], target: javax.naming.ldap.Control): javax.naming.ldap.Control[];
            _searchToCompare(filter: string, cons: javax.naming.directory.SearchControls, tokens: string[]): boolean;
            _ALLOWED_MECHS_SP: string;
            _ALLOWED_MECHS_SP_VALUE: string;
            _BINARY_ATTRIBUTES: string;
            _BIND_CONTROLS: string;
            _CONNECT_TIMEOUT: string;
            _DEFAULT_BATCH_SIZE: int;
            _DEFAULT_DELETE_RDN: boolean;
            _DEFAULT_DEREF_ALIASES: int;
            readonly DEFAULT_HOST: string;
            _DEFAULT_LDAP_VERSION: int;
            readonly DEFAULT_PORT: int;
            _DEFAULT_REFERRAL_LIMIT: int;
            _DEFAULT_REFERRAL_MODE: int;
            _DEFAULT_REF_SEPARATOR: char;
            _DEFAULT_SSL_FACTORY: string;
            readonly DEFAULT_SSL_PORT: int;
            _DEFAULT_TYPES_ONLY: boolean;
            _DELETE_RDN: string;
            _DEREF_ALIASES: string;
            _DOMAIN_NAME: string;
            _EMPTY_SCHEMA: jndi.toolkit.dir.HierMemDirCtx;
            _ENABLE_POOL: string;
            _HARD_CLOSE: boolean;
            _MECHS_ALLOWED_BY_SP: java.util.Set<string>;
            _NETSCAPE_SCHEMA_BUG: string;
            _OLD_NETSCAPE_SCHEMA_BUG: string;
            _READ_TIMEOUT: string;
            _REFERRAL_LIMIT: string;
            _REF_SEPARATOR: string;
            _REPLY_QUEUE_SIZE: string;
            _SCHEMA_ATTRIBUTES: string[];
            _SOCKET_FACTORY: string;
            _SOFT_CLOSE: boolean;
            _STARTTLS_REQ_OID: string;
            _TRACE_BER: string;
            _TYPES_ONLY: string;
            _UNSECURED_CRED_TRANSMIT_MSG: string;
            _VERSION: string;
            _WAIT_FOR_REPLY: string;
            _debug: boolean;
            _manageReferralControl: javax.naming.ldap.Control;
            _myResponseControlFactory: javax.naming.ldap.ControlFactory;
            _parser: javax.naming.NameParser;
            new(dn: string, host: string, port_number: int, props: java.util.Hashtable<any,any>, useSsl: boolean): LdapCtx;
            _new(existing: LdapCtx, newDN: string): LdapCtx;
          }
          let LdapCtx: _LdapCtx$$static;
          interface _LdapCtx {
            addNamingListener(nm: javax.naming.Name, scope: int, l: javax.naming.event.NamingListener): void;
            addNamingListener(nm: string, scope: int, l: javax.naming.event.NamingListener): void;
            addNamingListener(nm: string, filter: string, ctls: javax.naming.directory.SearchControls, l: javax.naming.event.NamingListener): void;
            addNamingListener(nm: javax.naming.Name, filter: string, ctls: javax.naming.directory.SearchControls, l: javax.naming.event.NamingListener): void;
            addNamingListener(nm: javax.naming.Name, filter: string, filterArgs: any[], ctls: javax.naming.directory.SearchControls, l: javax.naming.event.NamingListener): void;
            addNamingListener(nm: string, filterExpr: string, filterArgs: any[], ctls: javax.naming.directory.SearchControls, l: javax.naming.event.NamingListener): void;
            addToEnvironment(propName: string, propVal: any): any;
            _addUnsolicited(): void;
            _adjustDeleteStatus(fname: string, answer: LdapResult): void;
            _buildSchemaTree(subschemasubentry: string): javax.naming.directory.DirContext;
            _c_bind(name: javax.naming.Name, obj: any, cont: jndi.toolkit.ctx.Continuation): void;
            _c_bind(name: javax.naming.Name, obj: any, attrs: javax.naming.directory.Attributes, cont: jndi.toolkit.ctx.Continuation): void;
            _c_createSubcontext(name: javax.naming.Name, cont: jndi.toolkit.ctx.Continuation): javax.naming.Context;
            _c_createSubcontext(name: javax.naming.Name, attrs: javax.naming.directory.Attributes, cont: jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext;
            _c_destroySubcontext(name: javax.naming.Name, cont: jndi.toolkit.ctx.Continuation): void;
            _c_getAttributes(name: javax.naming.Name, attrIds: string[], cont: jndi.toolkit.ctx.Continuation): javax.naming.directory.Attributes;
            _c_getNameParser(name: javax.naming.Name, cont: jndi.toolkit.ctx.Continuation): javax.naming.NameParser;
            _c_getSchema(name: javax.naming.Name, cont: jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext;
            _c_getSchemaClassDefinition(name: javax.naming.Name, cont: jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext;
            _c_list(name: javax.naming.Name, cont: jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.NameClassPair>;
            _c_listBindings(name: javax.naming.Name, cont: jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.Binding>;
            _c_lookup(name: javax.naming.Name, cont: jndi.toolkit.ctx.Continuation): any;
            _c_lookupLink(name: javax.naming.Name, cont: jndi.toolkit.ctx.Continuation): any;
            _c_modifyAttributes(name: javax.naming.Name, mod_op: int, attrs: javax.naming.directory.Attributes, cont: jndi.toolkit.ctx.Continuation): void;
            _c_modifyAttributes(name: javax.naming.Name, mods: javax.naming.directory.ModificationItem[], cont: jndi.toolkit.ctx.Continuation): void;
            _c_rebind(name: javax.naming.Name, obj: any, cont: jndi.toolkit.ctx.Continuation): void;
            _c_rebind(name: javax.naming.Name, obj: any, attrs: javax.naming.directory.Attributes, cont: jndi.toolkit.ctx.Continuation): void;
            _c_rename(oldName: javax.naming.Name, newName: javax.naming.Name, cont: jndi.toolkit.ctx.Continuation): void;
            _c_search(name: javax.naming.Name, matchingAttributes: javax.naming.directory.Attributes, cont: jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
            _c_search(name: javax.naming.Name, matchingAttributes: javax.naming.directory.Attributes, attributesToReturn: string[], cont: jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
            _c_search(name: javax.naming.Name, filter: string, cons: javax.naming.directory.SearchControls, cont: jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
            _c_search(name: javax.naming.Name, filterExpr: string, filterArgs: any[], cons: javax.naming.directory.SearchControls, cont: jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
            _c_unbind(name: javax.naming.Name, cont: jndi.toolkit.ctx.Continuation): void;
            close(): void;
            _closeConnection(hardclose: boolean): void;
            _compare(name: javax.naming.Name, type: string, value: string): LdapResult;
            composeName(name: javax.naming.Name, prefix: javax.naming.Name): javax.naming.Name;
            _connect(startTLS: boolean): void;
            _convertControls(ctls: java.util.Vector<javax.naming.ldap.Control>): javax.naming.ldap.Control[];
            _decEnumCount(): void;
            _doSearch(name: javax.naming.Name, filter: string, cons: javax.naming.directory.SearchControls, relative: boolean, waitForReply: boolean): LdapResult;
            _doSearchOnce(name: javax.naming.Name, filter: string, cons: javax.naming.directory.SearchControls, relative: boolean): LdapResult;
            _ensureCanTransmitCredentials(authMechanism: string): void;
            _ensureOpen(): void;
            _ensureOpen(startTLS: boolean): void;
            extendedOperation(request: javax.naming.ldap.ExtendedRequest): javax.naming.ldap.ExtendedResponse;
            _finalize(): void;
            _fireUnsolicited(obj: any): void;
            _fullyQualifiedName(rel: javax.naming.Name): string;
            _fullyQualifiedName(rel: string): string;
            getConnectControls(): javax.naming.ldap.Control[];
            getEnvironment(): java.util.Hashtable<string,any>;
            getNameInNamespace(): string;
            getRequestControls(): javax.naming.ldap.Control[];
            getResponseControls(): javax.naming.ldap.Control[];
            _getSchemaEntry(name: javax.naming.Name, relative: boolean): string;
            _getSchemaTree(name: javax.naming.Name): javax.naming.directory.DirContext;
            _getSearchReply(eClnt: LdapClient, res: LdapResult): LdapResult;
            _getURL(): string;
            _incEnumCount(): void;
            _initEnv(): void;
            _isConnectionEncrypted(): boolean;
            newInstance(reqCtls: javax.naming.ldap.Control[]): javax.naming.ldap.LdapContext;
            _p_getEnvironment(): java.util.Hashtable<string,any>;
            _processReturnCode(answer: LdapResult): void;
            _processReturnCode(answer: LdapResult, remainName: javax.naming.Name): void;
            _processReturnCode(res: LdapResult, resolvedName: javax.naming.Name, resolvedObj: any, remainName: javax.naming.Name, envprops: java.util.Hashtable<any,any>, fullDN: string): void;
            reconnect(connCtls: javax.naming.ldap.Control[]): void;
            removeFromEnvironment(propName: string): any;
            removeNamingListener(l: javax.naming.event.NamingListener): void;
            _removeUnsolicited(): void;
            _searchAux(name: javax.naming.Name, filter: string, cons: javax.naming.directory.SearchControls, relative: boolean, waitForReply: boolean, cont: jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
            _setBatchSize(batchSizeProp: string): void;
            _setBinaryAttributes(attrIds: string): void;
            _setConnectTimeout(connectTimeoutProp: string): void;
            _setDeleteRDN(deleteRDNProp: string): void;
            _setDerefAliases(deref: string): void;
            _setDomainName(domainName: string): void;
            _setHopCount(hopCount: int): void;
            _setParents(attrs: javax.naming.directory.Attributes, name: javax.naming.Name): void;
            _setProviderUrl(providerUrl: string): void;
            _setReadTimeout(readTimeoutProp: string): void;
            _setRefSeparator(sepStr: string): void;
            _setReferralLimit(referralLimitProp: string): void;
            _setReferralMode(ref: string, update: boolean): void;
            _setReplyQueueSize(replyQueueSizeProp: string): void;
            setRequestControls(reqCtls: javax.naming.ldap.Control[]): void;
            _setTypesOnly(typesOnlyProp: string): void;
            _setWaitForReply(waitForReplyProp: string): void;
            targetMustExist(): boolean;
            _addrEncodingSeparator: char;
            _batchSize: int;
            _binaryAttrs: java.util.Hashtable<string,boolean>;
            _bindCtls: javax.naming.ldap.Control[];
            _clnt: LdapClient;
            _closeRequested: boolean;
            _connectTimeout: int;
            _contextSeenStartTlsEnabled: boolean;
            _currentDN: string;
            _currentParsedDN: javax.naming.Name;
            _deleteRDN: boolean;
            _derefAliases: int;
            _enumCount: int;
            _envprops: java.util.Hashtable<string,any>;
            _eventSupport: EventSupport;
            _handleReferrals: int;
            _hasLdapsScheme: boolean;
            _hopCount: int;
            _hostname: string;
            _netscapeSchemaBug: boolean;
            _parentIsLdapCtx: boolean;
            _port_number: int;
            _readTimeout: int;
            _referralHopLimit: int;
            _replyQueueSize: int;
            _reqCtls: javax.naming.ldap.Control[];
            _respCtls: java.util.Vector<javax.naming.ldap.Control>;
            _schemaTrees: java.util.Hashtable<string,javax.naming.directory.DirContext>;
            _sharable: boolean;
            _trace: java.io.OutputStream;
            _typesOnly: boolean;
            _unsolicited: boolean;
            _url: string;
            _useDefaultPortNumber: boolean;
            _useSsl: boolean;
            _waitForReply: boolean;
          }
          interface LdapCtx extends CombineTypes<[_LdapCtx, javax.naming.event.EventDirContext, com.sun.jndi.toolkit.ctx.ComponentDirContext, javax.naming.ldap.LdapContext]> {}
          interface _LdapCtx$SearchArgs$$static extends ClassLike {
            _new(name: javax.naming.Name, filter: string, cons: javax.naming.directory.SearchControls, ra: string[]): LdapCtx$SearchArgs;
          }
          let LdapCtx$SearchArgs: _LdapCtx$SearchArgs$$static;
          interface _LdapCtx$SearchArgs {
            _cons: javax.naming.directory.SearchControls;
            _filter: string;
            _name: javax.naming.Name;
            _reqAttrs: string[];
          }
          interface LdapCtx$SearchArgs extends CombineTypes<[_LdapCtx$SearchArgs, java.lang.Object]> {}
          interface _LdapCtxFactory$$static extends ClassLike {
            createTypeNameAttr(cl: java.lang.Class<any>): javax.naming.directory.Attribute;
            _getClassesAux(currentClass: java.lang.Class<any>, v: java.util.Vector<string>): void;
            _getLdapCtxFromUrl(domain: string, url: string, u: LdapURL, env: java.util.Hashtable<any,any>): LdapCtx;
            getLdapCtxInstance(urlInfo: any, env: java.util.Hashtable<any,any>): javax.naming.directory.DirContext;
            _getTypeNames(currentClass: java.lang.Class<any>, v: java.util.Vector<string>): string[];
            _getURLs(ref: javax.naming.Reference): string[];
            _getUsingURL(url: string, env: java.util.Hashtable<any,any>): javax.naming.directory.DirContext;
            _getUsingURLs(urls: string[], env: java.util.Hashtable<any,any>): javax.naming.directory.DirContext;
            _isLdapRef(obj: any): boolean;
            readonly ADDRESS_TYPE: string;
            new(): LdapCtxFactory;
          }
          let LdapCtxFactory: _LdapCtxFactory$$static;
          interface _LdapCtxFactory {
            getInitialContext(envprops: java.util.Hashtable<any,any>): javax.naming.Context;
            getObjectInstance(ref: any, name: javax.naming.Name, nameCtx: javax.naming.Context, env: java.util.Hashtable<any,any>): any;
          }
          interface LdapCtxFactory extends CombineTypes<[_LdapCtxFactory, javax.naming.spi.ObjectFactory, javax.naming.spi.InitialContextFactory, java.lang.Object]> {}
          interface _LdapDnsProviderService$$static extends ClassLike {
            _getInstance(): LdapDnsProviderService;
            _LOCK: any;
            _service: LdapDnsProviderService;
          }
          let LdapDnsProviderService: _LdapDnsProviderService$$static;
          interface _LdapDnsProviderService {
            _lookupEndpoints(url: string, env: java.util.Hashtable<any,any>): javax.naming.ldap.spi.LdapDnsProviderResult;
            _providers: java.util.ServiceLoader<javax.naming.ldap.spi.LdapDnsProvider>;
          }
          interface LdapDnsProviderService extends CombineTypes<[_LdapDnsProviderService, java.lang.Object]> {}
          interface _LdapEntry$$static extends ClassLike {
            _new(DN: string, attrs: javax.naming.directory.Attributes): LdapEntry;
            _new(DN: string, attrs: javax.naming.directory.Attributes, respCtls: java.util.Vector<javax.naming.ldap.Control>): LdapEntry;
          }
          let LdapEntry: _LdapEntry$$static;
          interface _LdapEntry {
            _DN: string;
            _attributes: javax.naming.directory.Attributes;
            _respCtls: java.util.Vector<javax.naming.ldap.Control>;
          }
          interface LdapEntry extends CombineTypes<[_LdapEntry, java.lang.Object]> {}
          interface _LdapName$$static extends ClassLike {
            escapeAttributeValue(val: any): string;
            _isWhitespace(c: char): boolean;
            unescapeAttributeValue(val: string): any;
            _serialVersionUID: long;
            new(name: string): LdapName;
          }
          let LdapName: _LdapName$$static;
          interface _LdapName {
            add(comp: string): javax.naming.Name;
            add(pos: int, comp: string): javax.naming.Name;
            addAll(suffix: javax.naming.Name): javax.naming.Name;
            addAll(pos: int, suffix: javax.naming.Name): javax.naming.Name;
            clone(): any;
            compareTo(obj: any): int;
            endsWith(n: javax.naming.Name): boolean;
            equals(obj: any): boolean;
            get(pos: int): string;
            getAll(): java.util.Enumeration<string>;
            getPrefix(pos: int): javax.naming.Name;
            getSuffix(pos: int): javax.naming.Name;
            hashCode(): int;
            isEmpty(): boolean;
            _matches(beg: int, end: int, n: javax.naming.Name): boolean;
            _parse(): void;
            _readObject(s: java.io.ObjectInputStream): void;
            remove(pos: int): any;
            setValuesCaseSensitive(caseSensitive: boolean): void;
            size(): int;
            startsWith(n: javax.naming.Name): boolean;
            toString(): string;
            _writeObject(s: java.io.ObjectOutputStream): void;
            _rdns: java.util.Vector<LdapName$Rdn>;
            _unparsed: string;
            _valuesCaseSensitive: boolean;
          }
          interface LdapName extends CombineTypes<[_LdapName, java.lang.Object, javax.naming.Name]> {}
          interface _LdapName$DnParser$$static extends ClassLike {
            _new(name: string, valuesCaseSensitive: boolean): LdapName$DnParser;
          }
          let LdapName$DnParser: _LdapName$DnParser$$static;
          interface _LdapName$DnParser {
            _atTerminator(): boolean;
            _consumeWhitespace(): void;
            _getDn(): java.util.Vector<LdapName$Rdn>;
            _getRdn(): LdapName$Rdn;
            _parseAttrType(): string;
            _parseAttrValue(): string;
            _parseBinaryAttrValue(): string;
            _parseQuotedAttrValue(): string;
            _parseRdn(): LdapName$Rdn;
            _parseStringAttrValue(): string;
            _chars: char[];
            _cur: int;
            _len: int;
            _name: string;
            _valuesCaseSensitive: boolean;
          }
          interface LdapName$DnParser extends CombineTypes<[_LdapName$DnParser, java.lang.Object]> {}
          interface _LdapName$Rdn$$static extends ClassLike {
            _new(): LdapName$Rdn;
          }
          let LdapName$Rdn: _LdapName$Rdn$$static;
          interface _LdapName$Rdn {
            _add(tv: LdapName$TypeAndValue): void;
            compareTo(obj: any): int;
            equals(obj: any): boolean;
            hashCode(): int;
            _toAttributes(): javax.naming.directory.Attributes;
            toString(): string;
            _tvs: java.util.Vector<LdapName$TypeAndValue>;
          }
          interface LdapName$Rdn extends CombineTypes<[_LdapName$Rdn, java.lang.Object]> {}
          interface _LdapName$TypeAndValue$$static extends ClassLike {
            _decodeHexPairs(chars: char[], beg: int, end: int): byte[];
            _escapeBinaryValue(val: byte[]): string;
            _escapeStringValue(val: string): string;
            _escapeValue(val: any): string;
            _getUtf8Octets(chars: char[], beg: int, end: int): byte[];
            _unescapeValue(val: string): any;
            _new(type: string, value: string, valueCaseSensitive: boolean): LdapName$TypeAndValue;
          }
          let LdapName$TypeAndValue: _LdapName$TypeAndValue$$static;
          interface _LdapName$TypeAndValue {
            compareTo(obj: any): int;
            equals(obj: any): boolean;
            _getType(): string;
            _getUnescapedValue(): any;
            _getValueComparable(): string;
            hashCode(): int;
            toString(): string;
            _binary: boolean;
            _comparable: string;
            _type: string;
            _value: string;
            _valueCaseSensitive: boolean;
          }
          interface LdapName$TypeAndValue extends CombineTypes<[_LdapName$TypeAndValue, java.lang.Object]> {}
          interface _LdapNameParser$$static extends ClassLike {
            new(): LdapNameParser;
          }
          let LdapNameParser: _LdapNameParser$$static;
          interface _LdapNameParser {
            parse(name: string): javax.naming.Name;
          }
          interface LdapNameParser extends CombineTypes<[_LdapNameParser, java.lang.Object, javax.naming.NameParser]> {}
          interface _LdapNamingEnumeration$$static extends ClassLike {
            _defaultClassName: string;
            _new(homeCtx: LdapCtx, answer: LdapResult, listArg: javax.naming.Name, cont: jndi.toolkit.ctx.Continuation): LdapNamingEnumeration;
          }
          let LdapNamingEnumeration: _LdapNamingEnumeration$$static;
          interface _LdapNamingEnumeration {
            _createItem(dn: string, attrs: javax.naming.directory.Attributes, respCtls: java.util.Vector<javax.naming.ldap.Control>): javax.naming.NameClassPair;
            _getReferredResults(refCtx: LdapReferralContext): AbstractLdapNamingEnumeration<javax.naming.NameClassPair>;
          }
          interface LdapNamingEnumeration extends CombineTypes<[_LdapNamingEnumeration, AbstractLdapNamingEnumeration<javax.naming.NameClassPair>]> {}
          interface _LdapPoolManager$$static extends ClassLike {
            _d(msg: string): void;
            _d(msg: string, o: string): void;
            expire(threshold: long): void;
            _findPool(mech: string): int;
            _getInteger(propName: string, defVal: int): int;
            _getLdapClient(host: string, port: int, socketFactory: string, connTimeout: int, readTimeout: int, trace: java.io.OutputStream, version: int, authMech: string, ctls: javax.naming.ldap.Control[], protocol: string, user: string, passwd: any, env: java.util.Hashtable<any,any>): LdapClient;
            _getLong(propName: string, defVal: long): long;
            _getProperty(propName: string, defVal: string): string;
            _isPoolingAllowed(socketFactory: string, trace: java.io.OutputStream, authMech: string, protocol: string, env: java.util.Hashtable<any,any>): boolean;
            showStats(out: java.io.PrintStream): void;
            _startCleanerThread(): void;
            _DEBUG: string;
            _DEFAULT_AUTH_MECHS: string;
            _DEFAULT_INIT_POOL_SIZE: int;
            _DEFAULT_MAX_POOL_SIZE: int;
            _DEFAULT_PREF_POOL_SIZE: int;
            _DEFAULT_PROTOCOLS: string;
            _DEFAULT_TIMEOUT: int;
            _DIGEST: int;
            _INIT_POOL_SIZE: string;
            _MAX_POOL_SIZE: string;
            _NONE: int;
            _POOL_AUTH: string;
            _POOL_PROTOCOL: string;
            _POOL_TIMEOUT: string;
            _PREF_POOL_SIZE: string;
            _SASL_CALLBACK: string;
            _SIMPLE: int;
            readonly debug: boolean;
            _idleTimeout: long;
            _initSize: int;
            _maxSize: int;
            _pools: pool.Pool[];
            _prefSize: int;
            _supportPlainProtocol: boolean;
            _supportSslProtocol: boolean;
            readonly trace: boolean;
          }
          let LdapPoolManager: _LdapPoolManager$$static;
          interface _LdapPoolManager {
          }
          interface LdapPoolManager extends CombineTypes<[_LdapPoolManager, java.lang.Object]> {}
          interface _LdapReferralContext$$static extends ClassLike {
            _new(ex: LdapReferralException, env: java.util.Hashtable<any,any>, connCtls: javax.naming.ldap.Control[], reqCtls: javax.naming.ldap.Control[], nextName: string, skipThisReferral: boolean, handleReferrals: int): LdapReferralContext;
          }
          let LdapReferralContext: _LdapReferralContext$$static;
          interface _LdapReferralContext {
            addToEnvironment(propName: string, propVal: any): any;
            bind(name: string, obj: any): void;
            bind(name: javax.naming.Name, obj: any): void;
            bind(name: string, obj: any, attrs: javax.naming.directory.Attributes): void;
            bind(name: javax.naming.Name, obj: any, attrs: javax.naming.directory.Attributes): void;
            close(): void;
            composeName(name: string, prefix: string): string;
            composeName(name: javax.naming.Name, prefix: javax.naming.Name): javax.naming.Name;
            createSubcontext(name: string): javax.naming.Context;
            createSubcontext(name: javax.naming.Name): javax.naming.Context;
            createSubcontext(name: string, attrs: javax.naming.directory.Attributes): javax.naming.directory.DirContext;
            createSubcontext(name: javax.naming.Name, attrs: javax.naming.directory.Attributes): javax.naming.directory.DirContext;
            destroySubcontext(name: string): void;
            destroySubcontext(name: javax.naming.Name): void;
            extendedOperation(request: javax.naming.ldap.ExtendedRequest): javax.naming.ldap.ExtendedResponse;
            getAttributes(name: string): javax.naming.directory.Attributes;
            getAttributes(name: javax.naming.Name): javax.naming.directory.Attributes;
            getAttributes(name: string, attrIds: string[]): javax.naming.directory.Attributes;
            getAttributes(name: javax.naming.Name, attrIds: string[]): javax.naming.directory.Attributes;
            getConnectControls(): javax.naming.ldap.Control[];
            getEnvironment(): java.util.Hashtable<any,any>;
            getNameInNamespace(): string;
            getNameParser(name: string): javax.naming.NameParser;
            getNameParser(name: javax.naming.Name): javax.naming.NameParser;
            getRequestControls(): javax.naming.ldap.Control[];
            getResponseControls(): javax.naming.ldap.Control[];
            getSchema(name: string): javax.naming.directory.DirContext;
            getSchema(name: javax.naming.Name): javax.naming.directory.DirContext;
            getSchemaClassDefinition(name: string): javax.naming.directory.DirContext;
            getSchemaClassDefinition(name: javax.naming.Name): javax.naming.directory.DirContext;
            _initDefaults(referral: string, nextName: string): void;
            list(name: string): javax.naming.NamingEnumeration<javax.naming.NameClassPair>;
            list(name: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.NameClassPair>;
            listBindings(name: string): javax.naming.NamingEnumeration<javax.naming.Binding>;
            listBindings(name: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.Binding>;
            lookup(name: string): any;
            lookup(name: javax.naming.Name): any;
            lookupLink(name: string): any;
            lookupLink(name: javax.naming.Name): any;
            modifyAttributes(name: string, mod_op: int, attrs: javax.naming.directory.Attributes): void;
            modifyAttributes(name: javax.naming.Name, mod_op: int, attrs: javax.naming.directory.Attributes): void;
            modifyAttributes(name: string, mods: javax.naming.directory.ModificationItem[]): void;
            modifyAttributes(name: javax.naming.Name, mods: javax.naming.directory.ModificationItem[]): void;
            newInstance(requestControls: javax.naming.ldap.Control[]): javax.naming.ldap.LdapContext;
            _overrideAttributesAndScope(cons: javax.naming.directory.SearchControls): javax.naming.directory.SearchControls;
            _overrideFilter(filter: string): string;
            _overrideName(name: javax.naming.Name): javax.naming.Name;
            rebind(name: string, obj: any): void;
            rebind(name: javax.naming.Name, obj: any): void;
            rebind(name: string, obj: any, attrs: javax.naming.directory.Attributes): void;
            rebind(name: javax.naming.Name, obj: any, attrs: javax.naming.directory.Attributes): void;
            reconnect(connCtls: javax.naming.ldap.Control[]): void;
            removeFromEnvironment(propName: string): any;
            rename(oldName: string, newName: string): void;
            rename(oldName: javax.naming.Name, newName: javax.naming.Name): void;
            search(name: string, matchingAttributes: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
            search(name: javax.naming.Name, matchingAttributes: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
            search(name: string, matchingAttributes: javax.naming.directory.Attributes, attributesToReturn: string[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
            search(name: javax.naming.Name, matchingAttributes: javax.naming.directory.Attributes, attributesToReturn: string[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
            search(name: string, filter: string, cons: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
            search(name: javax.naming.Name, filter: string, cons: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
            search(name: string, filterExpr: string, filterArgs: any[], cons: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
            search(name: javax.naming.Name, filterExpr: string, filterArgs: any[], cons: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
            _setHopCount(hopCount: int): void;
            setRequestControls(requestControls: javax.naming.ldap.Control[]): void;
            _toName(name: string): javax.naming.Name;
            unbind(name: string): void;
            unbind(name: javax.naming.Name): void;
            _hopCount: int;
            _previousEx: javax.naming.NamingException;
            _refCtx: javax.naming.directory.DirContext;
            _refEx: LdapReferralException;
            _skipThisReferral: boolean;
            _urlAttrs: string;
            _urlFilter: string;
            _urlName: javax.naming.Name;
            _urlScope: string;
          }
          interface LdapReferralContext extends CombineTypes<[_LdapReferralContext, javax.naming.directory.DirContext, java.lang.Object, javax.naming.ldap.LdapContext]> {}
          interface _LdapReferralException$$static extends ClassLike {
            _serialVersionUID: long;
            _new(resolvedName: javax.naming.Name, resolvedObj: any, remainingName: javax.naming.Name, explanation: string, envprops: java.util.Hashtable<any,any>, nextName: string, handleReferrals: int, reqCtls: javax.naming.ldap.Control[]): LdapReferralException;
          }
          let LdapReferralException: _LdapReferralException$$static;
          interface _LdapReferralException {
            _appendUnprocessedReferrals(back: LdapReferralException): LdapReferralException;
            _dump(): void;
            _dumpState(): void;
            _getNamingException(): javax.naming.NamingException;
            _getNewRdn(): string;
            _getNextReferral(): string;
            getReferralContext(): javax.naming.Context;
            getReferralContext(newProps: java.util.Hashtable<any,any>): javax.naming.Context;
            getReferralContext(newProps: java.util.Hashtable<any,any>, connCtls: javax.naming.ldap.Control[]): javax.naming.Context;
            getReferralInfo(): any;
            _hasMoreReferralExceptions(): boolean;
            _hasMoreReferrals(): boolean;
            retryReferral(): void;
            _setHopCount(hopCount: int): void;
            _setNameResolved(resolved: boolean): void;
            _setNamingException(e: javax.naming.NamingException): void;
            _setNewRdn(newRdn: string): void;
            _setReferralInfo(referrals: java.util.Vector<any>, continuationRef: boolean): void;
            skipReferral(): boolean;
            _debug: boolean;
            _envprops: java.util.Hashtable<any,any>;
            _errorEx: javax.naming.NamingException;
            _foundEntry: boolean;
            _handleReferrals: int;
            _hopCount: int;
            _newRdn: string;
            _nextName: string;
            _nextReferralEx: LdapReferralException;
            _referralCount: int;
            _referralIndex: int;
            _referrals: java.util.Vector<any>;
            _reqCtls: javax.naming.ldap.Control[];
            _skipThisReferral: boolean;
          }
          interface LdapReferralException extends CombineTypes<[_LdapReferralException, javax.naming.ldap.LdapReferralException]> {}
          interface _LdapRequest$$static extends ClassLike {
            _CLOSE_MSG: string;
            _EOF: BerDecoder;
            _TIMEOUT_MSG_FMT: string;
            _new(msgId: int, pause: boolean, replyQueueCapacity: int): LdapRequest;
          }
          let LdapRequest: _LdapRequest$$static;
          interface _LdapRequest {
            _addReplyBer(ber: BerDecoder): boolean;
            _cancel(): void;
            _close(): void;
            _getReplyBer(millis: long): BerDecoder;
            _hasSearchCompleted(): boolean;
            _isClosed(): boolean;
            _cancelled: boolean;
            _closed: boolean;
            _completed: boolean;
            _msgId: int;
            _next: LdapRequest;
            _pauseAfterReceipt: boolean;
            _replies: java.util.concurrent.BlockingQueue<BerDecoder>;
          }
          interface LdapRequest extends CombineTypes<[_LdapRequest, java.lang.Object]> {}
          interface _LdapResult$$static extends ClassLike {
            new(): LdapResult;
          }
          let LdapResult: _LdapResult$$static;
          interface _LdapResult {
            _compareToSearchResult(name: string): boolean;
            _entries: java.util.Vector<LdapEntry>;
            _errorMessage: string;
            _extensionId: string;
            _extensionValue: byte[];
            _matchedDN: string;
            _msgId: int;
            _refEx: LdapReferralException;
            _referrals: java.util.Vector<java.util.Vector<string>>;
            _resControls: java.util.Vector<javax.naming.ldap.Control>;
            serverCreds: byte[];
            status: int;
          }
          interface LdapResult extends CombineTypes<[_LdapResult, java.lang.Object]> {}
          interface _LdapSchemaCtx$$static extends ClassLike {
            _createSchemaTree(env: java.util.Hashtable<string,any>, subschemasubentry: string, schemaEntry: LdapCtx, schemaAttrs: javax.naming.directory.Attributes, netscapeBug: boolean): javax.naming.directory.DirContext;
            _deepClone(orig: javax.naming.directory.Attributes): javax.naming.directory.Attributes;
            _ATTRIBUTE: int;
            _ATTRIBUTE_ROOT: int;
            _LEAF: int;
            _MATCHRULE: int;
            _MATCHRULE_ROOT: int;
            _OBJECTCLASS: int;
            _OBJECTCLASS_ROOT: int;
            _SCHEMA_ROOT: int;
            _SYNTAX: int;
            _SYNTAX_ROOT: int;
            _debug: boolean;
          }
          let LdapSchemaCtx: _LdapSchemaCtx$$static;
          interface _LdapSchemaCtx {
            _addServerSchema(attrs: javax.naming.directory.Attributes): void;
            bind(name: javax.naming.Name, obj: any, attrs: javax.naming.directory.Attributes): void;
            close(): void;
            _createNewCtx(): jndi.toolkit.dir.HierMemDirCtx;
            _deleteServerSchema(origAttrs: javax.naming.directory.Attributes): void;
            _doBind(name: javax.naming.Name, obj: any, attrs: javax.naming.directory.Attributes, useFactory: boolean): void;
            _doCreateSubcontext(name: javax.naming.Name, attrs: javax.naming.directory.Attributes): javax.naming.directory.DirContext;
            _doDestroySubcontext(name: javax.naming.Name): void;
            _doModifyAttributes(mods: javax.naming.directory.ModificationItem[]): void;
            _doRebind(name: javax.naming.Name, obj: any, attrs: javax.naming.directory.Attributes, useFactory: boolean): void;
            _doRename(oldname: javax.naming.Name, newname: javax.naming.Name): void;
            _doUnbind(name: javax.naming.Name): void;
            _modifyServerSchema(origAttrs: javax.naming.directory.Attributes, newAttrs: javax.naming.directory.Attributes): void;
            rebind(name: javax.naming.Name, obj: any, attrs: javax.naming.directory.Attributes): void;
            _setup(objectType: int, name: string, attrs: javax.naming.directory.Attributes): LdapSchemaCtx;
            _info: LdapSchemaCtx$SchemaInfo;
            _objectType: int;
            _setupMode: boolean;
          }
          interface LdapSchemaCtx extends CombineTypes<[_LdapSchemaCtx, com.sun.jndi.toolkit.dir.HierMemDirCtx]> {}
          interface _LdapSchemaCtx$SchemaInfo$$static extends ClassLike {
            _new(schemaEntryName: string, schemaEntry: LdapCtx, parser: LdapSchemaParser): LdapSchemaCtx$SchemaInfo;
          }
          let LdapSchemaCtx$SchemaInfo: _LdapSchemaCtx$SchemaInfo$$static;
          interface _LdapSchemaCtx$SchemaInfo {
            _close(): void;
            _modifyAttributes(env: java.util.Hashtable<any,any>, mods: javax.naming.directory.ModificationItem[]): void;
            _modifyAttributes(env: java.util.Hashtable<any,any>, mod: int, attrs: javax.naming.directory.Attributes): void;
            _reopenEntry(env: java.util.Hashtable<any,any>): LdapCtx;
            _hasLdapsScheme: boolean;
            _host: string;
            _parser: LdapSchemaParser;
            _port: int;
            _schemaEntry: LdapCtx;
            _schemaEntryName: string;
          }
          interface LdapSchemaCtx$SchemaInfo extends CombineTypes<[_LdapSchemaCtx$SchemaInfo, java.lang.Object]> {}
          interface _LdapSchemaParser$$static extends ClassLike {
            _LDAP2JNDISchema(schemaAttrs: javax.naming.directory.Attributes, schemaRoot: LdapSchemaCtx): void;
            _attrDescs2AttrDefs(attributeDescAttr: javax.naming.directory.Attribute, schemaRoot: LdapSchemaCtx): javax.naming.directory.DirContext;
            _desc2Def(desc: string): any[];
            _findTrailingWhitespace(string: string, pos: int): int;
            _matchRuleDescs2MatchRuleDefs(matchRuleDescAttr: javax.naming.directory.Attribute, schemaRoot: LdapSchemaCtx): javax.naming.directory.DirContext;
            _objectDescs2ClassDefs(objDescsAttr: javax.naming.directory.Attribute, schemaRoot: LdapSchemaCtx): javax.naming.directory.DirContext;
            _readNextTag(string: string, pos: int[]): javax.naming.directory.Attribute;
            _readNumericOID(string: string, pos: int[]): javax.naming.directory.Attribute;
            _readOIDs(string: string, pos: int[]): string[];
            _readQDString(string: string, pos: int[]): string[];
            _readQDStrings(string: string, pos: int[]): string[];
            _readQDescrList(string: string, pos: int[]): string[];
            _readQDescrs(string: string, pos: int[]): string[];
            _readTag(tag: string, string: string, pos: int[]): string[];
            _readWOID(string: string, pos: int[]): string[];
            _skipWhitespace(string: string, pos: int[]): void;
            _syntaxDescs2SyntaxDefs(syntaxDescAttr: javax.naming.directory.Attribute, schemaRoot: LdapSchemaCtx): javax.naming.directory.DirContext;
            _ABSTRACT_ID: string;
            _ATTRIBUTEDESC_ATTR_ID: string;
            _ATTRIBUTE_DEFINITION_NAME: string;
            _ATTR_DEF_ATTRS: string[];
            _AUXILIARY_ID: string;
            _CLASS_DEF_ATTRS: string[];
            _COLLECTIVE_ID: string;
            _DESC_ID: string;
            _EQUALITY_ID: string;
            _MATCHRULEDESC_ATTR_ID: string;
            _MATCHRULE_DEFINITION_NAME: string;
            _MATCHRULE_DEF_ATTRS: string[];
            _MAY_ID: string;
            _MUST_ID: string;
            _NAME_ID: string;
            _NO_USER_MOD_ID: string;
            _NUMERICOID_ID: string;
            _OBJECTCLASSDESC_ATTR_ID: string;
            _OBJECTCLASS_DEFINITION_NAME: string;
            _OBSOLETE_ID: string;
            _OID_LIST_BEGIN: char;
            _OID_LIST_END: char;
            _OID_SEPARATOR: char;
            _ORDERING_ID: string;
            _PRIVATE_ID: string;
            _SCHEMA_TRUE_VALUE: string;
            _SINGLE_QUOTE: char;
            _SINGLE_VAL_ID: string;
            _STRUCTURAL_ID: string;
            _SUBSTR_ID: string;
            _SUP_ID: string;
            _SYNTAXDESC_ATTR_ID: string;
            _SYNTAX_DEFINITION_NAME: string;
            _SYNTAX_DEF_ATTRS: string[];
            _SYNTAX_ID: string;
            _USAGE_ID: string;
            _WHSP: char;
            _debug: boolean;
            _new(netscapeBug: boolean): LdapSchemaParser;
          }
          let LdapSchemaParser: _LdapSchemaParser$$static;
          interface _LdapSchemaParser {
            _attrDef2AttrDesc(attrs: javax.naming.directory.Attributes): string;
            _classDef2ObjectDesc(attrs: javax.naming.directory.Attributes): string;
            _matchRuleDef2MatchRuleDesc(attrs: javax.naming.directory.Attributes): string;
            _stringifyAttrDesc(attrDefAttrs: javax.naming.directory.Attributes): javax.naming.directory.Attribute;
            _stringifyMatchRuleDesc(matchRuleDefAttrs: javax.naming.directory.Attributes): javax.naming.directory.Attribute;
            _stringifyObjDesc(classDefAttrs: javax.naming.directory.Attributes): javax.naming.directory.Attribute;
            _stringifySyntaxDesc(syntaxDefAttrs: javax.naming.directory.Attributes): javax.naming.directory.Attribute;
            _syntaxDef2SyntaxDesc(attrs: javax.naming.directory.Attributes): string;
            _writeBoolean(booleanAttr: javax.naming.directory.Attribute): string;
            _writeNumericOID(nOIDAttr: javax.naming.directory.Attribute): string;
            _writeOIDs(oidsAttr: javax.naming.directory.Attribute): string;
            _writeQDString(qdStringAttr: javax.naming.directory.Attribute): string;
            _writeQDStrings(attr: javax.naming.directory.Attribute): string;
            _writeQDescrs(attr: javax.naming.directory.Attribute): string;
            _writeWOID(attr: javax.naming.directory.Attribute): string;
            _netscapeBug: boolean;
          }
          interface LdapSchemaParser extends CombineTypes<[_LdapSchemaParser, java.lang.Object]> {}
          interface _LdapSearchEnumeration$$static extends ClassLike {
            _new(homeCtx: LdapCtx, search_results: LdapResult, starter: string, args: LdapCtx$SearchArgs, cont: jndi.toolkit.ctx.Continuation): LdapSearchEnumeration;
          }
          let LdapSearchEnumeration: _LdapSearchEnumeration$$static;
          interface _LdapSearchEnumeration {
            appendUnprocessedReferrals(ex: LdapReferralException): void;
            _createItem(dn: string, attrs: javax.naming.directory.Attributes, respCtls: java.util.Vector<javax.naming.ldap.Control>): javax.naming.directory.SearchResult;
            _createItem(a0: string, a1: javax.naming.directory.Attributes, a2: java.util.Vector): javax.naming.NameClassPair;
            _getReferredResults(refCtx: LdapReferralContext): AbstractLdapNamingEnumeration<javax.naming.NameClassPair>;
            _setStartName(nm: javax.naming.Name): void;
            _update(ne: AbstractLdapNamingEnumeration<javax.naming.NameClassPair>): void;
            _acc: java.security.AccessControlContext;
            _searchArgs: LdapCtx$SearchArgs;
            _startName: javax.naming.Name;
          }
          interface LdapSearchEnumeration extends CombineTypes<[_LdapSearchEnumeration, AbstractLdapNamingEnumeration<javax.naming.directory.SearchResult>]> {}
          interface _LdapURL$$static extends ClassLike {
            fromList(urlList: string): string[];
            hasQueryComponents(url: string): boolean;
            isLdapSchemeOnly(uri: string): boolean;
            _toUrlString(host: string, port: int, dn: string, useSsl: boolean): string;
            validateURI(uri: string): string;
            _DEFAULT_PARSE_MODE: jndi.toolkit.url.Uri$ParseMode;
            readonly PARSE_MODE: jndi.toolkit.url.Uri$ParseMode;
            _PARSE_MODE_PROP: string;
            new(url: string): LdapURL;
          }
          let LdapURL: _LdapURL$$static;
          interface _LdapURL {
            getAttributes(): string;
            getDN(): string;
            getExtensions(): string;
            getFilter(): string;
            getScope(): string;
            _isSchemeOnly(uri: string): boolean;
            _newInvalidURISchemeException(uri: string): java.net.MalformedURLException;
            _parseMode(): jndi.toolkit.url.Uri$ParseMode;
            _parsePathAndQuery(): void;
            useSsl(): boolean;
            _DN: string;
            _attributes: string;
            _extensions: string;
            _filter: string;
            _scope: string;
            _useSsl: boolean;
          }
          interface LdapURL extends CombineTypes<[_LdapURL, com.sun.jndi.toolkit.url.Uri]> {}
          interface _ManageReferralControl$$static extends ClassLike {
            readonly OID: string;
            _serialVersionUID: long;
            new(): ManageReferralControl;
            new(criticality: boolean): ManageReferralControl;
          }
          let ManageReferralControl: _ManageReferralControl$$static;
          interface _ManageReferralControl {
          }
          interface ManageReferralControl extends CombineTypes<[_ManageReferralControl, com.sun.jndi.ldap.BasicControl]> {}
          interface _NameClassPairWithControls$$static extends ClassLike {
            _serialVersionUID: long;
            new(name: string, className: string, controls: javax.naming.ldap.Control[]): NameClassPairWithControls;
          }
          let NameClassPairWithControls: _NameClassPairWithControls$$static;
          interface _NameClassPairWithControls {
            getControls(): javax.naming.ldap.Control[];
            _controls: javax.naming.ldap.Control[];
          }
          interface NameClassPairWithControls extends CombineTypes<[_NameClassPairWithControls, javax.naming.NameClassPair, javax.naming.ldap.HasControls]> {}
          interface _NamingEventNotifier$$static extends ClassLike {
            _debug: boolean;
            _new(support: EventSupport, ctx: LdapCtx, info: NotifierArgs, firstListener: javax.naming.event.NamingListener): NamingEventNotifier;
          }
          let NamingEventNotifier: _NamingEventNotifier$$static;
          interface _NamingEventNotifier {
            _addNamingListener(l: javax.naming.event.NamingListener): void;
            _cleanup(): void;
            _fireNamingException(e: javax.naming.NamingException): void;
            _fireObjectAdded(newBd: javax.naming.Binding, changeID: long): void;
            _fireObjectChanged(newBd: javax.naming.Binding, changeID: long): void;
            _fireObjectRemoved(oldBd: javax.naming.Binding, changeID: long): void;
            _fireObjectRenamed(newBd: javax.naming.Binding, oldDN: string, changeID: long): void;
            _hasNamingListeners(): boolean;
            _removeNamingListener(l: javax.naming.event.NamingListener): void;
            run(): void;
            _stop(): void;
            _context: LdapCtx;
            _eventSrc: javax.naming.event.EventContext;
            _info: NotifierArgs;
            _namingListeners: java.util.Vector<javax.naming.event.NamingListener>;
            _results: javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
            _support: EventSupport;
            _worker: java.lang.Thread;
          }
          interface NamingEventNotifier extends CombineTypes<[_NamingEventNotifier, java.lang.Object, java.lang.Runnable]> {}
          interface _NotifierArgs$$static extends ClassLike {
            _checkStringArrays(s1: string[], s2: string[]): boolean;
            _ADDED_MASK: int;
            _CHANGED_MASK: int;
            _REMOVED_MASK: int;
            _RENAMED_MASK: int;
            _new(name: string, scope: int, l: javax.naming.event.NamingListener): NotifierArgs;
            _new(name: string, filter: string, ctls: javax.naming.directory.SearchControls, l: javax.naming.event.NamingListener): NotifierArgs;
          }
          let NotifierArgs: _NotifierArgs$$static;
          interface _NotifierArgs {
            _checkControls(ctls: javax.naming.directory.SearchControls): boolean;
            _controlsCode(): int;
            equals(obj: any): boolean;
            hashCode(): int;
            _controls: javax.naming.directory.SearchControls;
            _filter: string;
            _mask: int;
            _name: string;
            _sum: int;
          }
          interface NotifierArgs extends CombineTypes<[_NotifierArgs, java.lang.Object]> {}
          interface _Obj$$static extends ClassLike {
            _decodeObject(attrs: javax.naming.directory.Attributes): any;
            _decodeReference(attrs: javax.naming.directory.Attributes, codebases: string[]): javax.naming.Reference;
            _decodeRmiObject(className: string, rmiName: string, codebases: string[]): any;
            _deserializeObject(obj: byte[], cl: java.lang.ClassLoader): any;
            _determineBindAttrs(separator: char, obj: any, attrs: javax.naming.directory.Attributes, cloned: boolean, name: javax.naming.Name, ctx: javax.naming.Context, env: java.util.Hashtable<any,any>): javax.naming.directory.Attributes;
            _encodeObject(separator: char, obj: any, attrs: javax.naming.directory.Attributes, objectClass: javax.naming.directory.Attribute, cloned: boolean): javax.naming.directory.Attributes;
            _encodeReference(separator: char, ref: javax.naming.Reference, attrs: javax.naming.directory.Attributes, orig: any): javax.naming.directory.Attributes;
            _getCodebases(codebaseAttr: javax.naming.directory.Attribute): string[];
            _serializeObject(obj: any): byte[];
            _BASE_OBJECT: int;
            _CLASSNAME: int;
            _CODEBASE: int;
            _FACTORY: int;
            _JAVA_ATTRIBUTES: string[];
            _JAVA_OBJECT_CLASSES: string[];
            _JAVA_OBJECT_CLASSES_LOWER: string[];
            _MAR_OBJECT: int;
            _OBJECT_CLASS: int;
            _REF_ADDR: int;
            _REF_OBJECT: int;
            _REMOTE_LOC: int;
            _SERIALIZED_DATA: int;
            _SER_OBJECT: int;
            _STRUCTURAL: int;
            _TYPENAME: int;
            _helper: VersionHelper;
          }
          let Obj: _Obj$$static;
          interface _Obj {
          }
          interface Obj extends CombineTypes<[_Obj, java.lang.Object]> {}
          interface _Obj$LoaderInputStream$$static extends ClassLike {
            _new(_in: java.io.InputStream, cl: java.lang.ClassLoader): Obj$LoaderInputStream;
          }
          let Obj$LoaderInputStream: _Obj$LoaderInputStream$$static;
          interface _Obj$LoaderInputStream {
            _resolveClass(desc: java.io.ObjectStreamClass): java.lang.Class<any>;
            _resolveProxyClass(interfaces: string[]): java.lang.Class<any>;
            _classLoader: java.lang.ClassLoader;
          }
          interface Obj$LoaderInputStream extends CombineTypes<[_Obj$LoaderInputStream, java.io.ObjectInputStream]> {}
          interface _PersistentSearchControl$$static extends ClassLike {
            readonly ADD: int;
            readonly ANY: int;
            readonly DELETE: int;
            readonly MODIFY: int;
            readonly OID: string;
            readonly RENAME: int;
            _serialVersionUID: long;
            new(): PersistentSearchControl;
            new(changeTypes: int, changesOnly: boolean, returnControls: boolean, criticality: boolean): PersistentSearchControl;
          }
          let PersistentSearchControl: _PersistentSearchControl$$static;
          interface _PersistentSearchControl {
            _setEncodedValue(): byte[];
            _changeTypes: int;
            _changesOnly: boolean;
            _returnControls: boolean;
          }
          interface PersistentSearchControl extends CombineTypes<[_PersistentSearchControl, com.sun.jndi.ldap.BasicControl]> {}
          interface _ReferralEnumeration$$static<T> extends ClassLike {
          }
          let ReferralEnumeration: _ReferralEnumeration$$static<T>;
          interface _ReferralEnumeration<T> {
            appendUnprocessedReferrals(a0: LdapReferralException): void;
(a0: LdapReferralException): void;
          }
          interface ReferralEnumeration<T> extends CombineTypes<[_ReferralEnumeration<T>, java.lang.Object, javax.naming.NamingEnumeration<T>]> {}
          interface _SearchResultWithControls$$static extends ClassLike {
            _serialVersionUID: long;
            new(name: string, obj: any, attrs: javax.naming.directory.Attributes, isRelative: boolean, controls: javax.naming.ldap.Control[]): SearchResultWithControls;
          }
          let SearchResultWithControls: _SearchResultWithControls$$static;
          interface _SearchResultWithControls {
            getControls(): javax.naming.ldap.Control[];
            _controls: javax.naming.ldap.Control[];
          }
          interface SearchResultWithControls extends CombineTypes<[_SearchResultWithControls, javax.naming.ldap.HasControls, javax.naming.directory.SearchResult]> {}
          interface _ServiceLocator$$static extends ClassLike {
            _extractHostports(srvRecords: ServiceLocator$SrvRecord[]): string[];
            _getLdapService(domainName: string, environment: java.util.Map<any,any>): string[];
            _getLdapService(domainName: string, environment: java.util.Hashtable<any,any>): string[];
            _mapDnToDomainName(dn: string): string;
            _selectHostport(srvRecords: ServiceLocator$SrvRecord[], head: int, tail: int): string;
            _SRV_RR: string;
            _SRV_RR_ATTR: string[];
            _random: java.util.Random;
          }
          let ServiceLocator: _ServiceLocator$$static;
          interface _ServiceLocator {
          }
          interface ServiceLocator extends CombineTypes<[_ServiceLocator, java.lang.Object]> {}
          interface _ServiceLocator$SrvRecord$$static extends ClassLike {
            _new(srvRecord: string): ServiceLocator$SrvRecord;
          }
          let ServiceLocator$SrvRecord: _ServiceLocator$SrvRecord$$static;
          interface _ServiceLocator$SrvRecord {
            compareTo(that: ServiceLocator$SrvRecord): int;
            compareTo(a0: any): int;
            _hostport: string;
            _priority: int;
            _sum: int;
            _weight: int;
          }
          interface ServiceLocator$SrvRecord extends CombineTypes<[_ServiceLocator$SrvRecord, java.lang.Comparable<ServiceLocator$SrvRecord>, java.lang.Object]> {}
          interface _SimpleClientId$$static extends ClassLike {
            _new(version: int, hostname: string, port: int, protocol: string, bindCtls: javax.naming.ldap.Control[], trace: java.io.OutputStream, socketFactory: string, username: string, passwd: any): SimpleClientId;
          }
          let SimpleClientId: _SimpleClientId$$static;
          interface _SimpleClientId {
            equals(obj: any): boolean;
            hashCode(): int;
            toString(): string;
            _myHash: int;
            _passwd: any;
            _username: string;
          }
          interface SimpleClientId extends CombineTypes<[_SimpleClientId, com.sun.jndi.ldap.ClientId]> {}
          interface _UnsolicitedResponseImpl$$static extends ClassLike {
            _serialVersionUID: long;
            _new(oid: string, berVal: byte[], ref: java.util.Vector<java.util.Vector<string>>, status: int, msg: string, matchedDN: string, controls: javax.naming.ldap.Control[]): UnsolicitedResponseImpl;
          }
          let UnsolicitedResponseImpl: _UnsolicitedResponseImpl$$static;
          interface _UnsolicitedResponseImpl {
            getControls(): javax.naming.ldap.Control[];
            getEncodedValue(): byte[];
            getException(): javax.naming.NamingException;
            getID(): string;
            getReferrals(): string[];
            _controls: javax.naming.ldap.Control[];
            _exception: javax.naming.NamingException;
            _extensionValue: byte[];
            _oid: string;
            _referrals: string[];
          }
          interface UnsolicitedResponseImpl extends CombineTypes<[_UnsolicitedResponseImpl, javax.naming.ldap.UnsolicitedNotification, java.lang.Object]> {}
          interface _VersionHelper$$static extends ClassLike {
            _getPrivilegedProperty(propertyName: string, defaultVal: string): string;
            _getUrlArray(url: string[]): java.net.URL[];
            _getVersionHelper(): VersionHelper;
            isSerialDataAllowed(): boolean;
            _helper: VersionHelper;
            _trustSerialData: boolean;
            _trustURLCodebase: boolean;
          }
          let VersionHelper: _VersionHelper$$static;
          interface _VersionHelper {
            _createThread(r: java.lang.Runnable): java.lang.Thread;
            _getContextClassLoader(): java.lang.ClassLoader;
            _getURLClassLoader(url: string[]): java.lang.ClassLoader;
            _loadClass(className: string): java.lang.Class<any>;
          }
          interface VersionHelper extends CombineTypes<[_VersionHelper, java.lang.Object]> {}
        }
        module toolkit {
          module ctx {
            interface _AtomicContext$$static extends ClassLike {
              _debug: int;
              _new(): AtomicContext;
            }
            let AtomicContext: _AtomicContext$$static;
            interface _AtomicContext {
              _a_bind(a0: string, a1: any, a2: Continuation): void;
              _a_bind_nns(name: string, obj: any, cont: Continuation): void;
              _a_createSubcontext(a0: string, a1: Continuation): javax.naming.Context;
              _a_createSubcontext_nns(name: string, cont: Continuation): javax.naming.Context;
              _a_destroySubcontext(a0: string, a1: Continuation): void;
              _a_destroySubcontext_nns(name: string, cont: Continuation): void;
              _a_getNameParser(a0: Continuation): javax.naming.NameParser;
              _a_getNameParser_nns(cont: Continuation): javax.naming.NameParser;
              _a_list(a0: Continuation): javax.naming.NamingEnumeration<javax.naming.NameClassPair>;
              _a_listBindings(a0: Continuation): javax.naming.NamingEnumeration<javax.naming.Binding>;
              _a_listBindings_nns(cont: Continuation): javax.naming.NamingEnumeration<javax.naming.Binding>;
              _a_list_nns(cont: Continuation): javax.naming.NamingEnumeration<javax.naming.NameClassPair>;
              _a_lookup(a0: string, a1: Continuation): any;
              _a_lookupLink(a0: string, a1: Continuation): any;
              _a_lookupLink_nns(name: string, cont: Continuation): any;
              _a_lookup_nns(name: string, cont: Continuation): any;
              _a_processJunction_nns(name: string, cont: Continuation): void;
              _a_processJunction_nns(cont: Continuation): void;
              _a_rebind(a0: string, a1: any, a2: Continuation): void;
              _a_rebind_nns(name: string, obj: any, cont: Continuation): void;
              _a_rename(a0: string, a1: javax.naming.Name, a2: Continuation): void;
              _a_rename_nns(oldname: string, newname: javax.naming.Name, cont: Continuation): void;
              _a_resolveIntermediate_nns(name: string, cont: Continuation): any;
              _a_unbind(a0: string, a1: Continuation): void;
              _a_unbind_nns(name: string, cont: Continuation): void;
              _c_bind(name: javax.naming.Name, obj: any, cont: Continuation): void;
              _c_bind_nns(name: javax.naming.Name, obj: any, cont: Continuation): void;
              _c_createSubcontext(name: javax.naming.Name, cont: Continuation): javax.naming.Context;
              _c_createSubcontext_nns(name: javax.naming.Name, cont: Continuation): javax.naming.Context;
              _c_destroySubcontext(name: javax.naming.Name, cont: Continuation): void;
              _c_destroySubcontext_nns(name: javax.naming.Name, cont: Continuation): void;
              _c_getNameParser(name: javax.naming.Name, cont: Continuation): javax.naming.NameParser;
              _c_getNameParser_nns(name: javax.naming.Name, cont: Continuation): javax.naming.NameParser;
              _c_list(name: javax.naming.Name, cont: Continuation): javax.naming.NamingEnumeration<javax.naming.NameClassPair>;
              _c_listBindings(name: javax.naming.Name, cont: Continuation): javax.naming.NamingEnumeration<javax.naming.Binding>;
              _c_listBindings_nns(name: javax.naming.Name, cont: Continuation): javax.naming.NamingEnumeration<javax.naming.Binding>;
              _c_list_nns(name: javax.naming.Name, cont: Continuation): javax.naming.NamingEnumeration<javax.naming.NameClassPair>;
              _c_lookup(name: javax.naming.Name, cont: Continuation): any;
              _c_lookupLink(name: javax.naming.Name, cont: Continuation): any;
              _c_lookupLink_nns(name: javax.naming.Name, cont: Continuation): any;
              _c_lookup_nns(name: javax.naming.Name, cont: Continuation): any;
              _c_parseComponent(a0: string, a1: Continuation): StringHeadTail;
              _c_rebind(name: javax.naming.Name, obj: any, cont: Continuation): void;
              _c_rebind_nns(name: javax.naming.Name, obj: any, cont: Continuation): void;
              _c_rename(oldname: javax.naming.Name, newname: javax.naming.Name, cont: Continuation): void;
              _c_rename_nns(oldname: javax.naming.Name, newname: javax.naming.Name, cont: Continuation): void;
              _c_resolveIntermediate_nns(name: javax.naming.Name, cont: Continuation): any;
              _c_unbind(name: javax.naming.Name, cont: Continuation): void;
              _c_unbind_nns(name: javax.naming.Name, cont: Continuation): void;
              _isEmpty(name: string): boolean;
              _resolve_to_context(name: javax.naming.Name, cont: Continuation): boolean;
              _resolve_to_nns_and_continue(name: javax.naming.Name, cont: Continuation): void;
              _resolve_to_penultimate_context(name: javax.naming.Name, cont: Continuation): boolean;
              _resolve_to_penultimate_context_nns(name: javax.naming.Name, cont: Continuation): boolean;
            }
            interface AtomicContext extends CombineTypes<[_AtomicContext, com.sun.jndi.toolkit.ctx.ComponentContext]> {}
            interface _AtomicDirContext$$static extends ClassLike {
              _new(): AtomicDirContext;
            }
            let AtomicDirContext: _AtomicDirContext$$static;
            interface _AtomicDirContext {
              _a_bind(a0: string, a1: any, a2: javax.naming.directory.Attributes, a3: Continuation): void;
              _a_bind_nns(name: string, obj: any, attrs: javax.naming.directory.Attributes, cont: Continuation): void;
              _a_createSubcontext(a0: string, a1: javax.naming.directory.Attributes, a2: Continuation): javax.naming.directory.DirContext;
              _a_createSubcontext_nns(name: string, attrs: javax.naming.directory.Attributes, cont: Continuation): javax.naming.directory.DirContext;
              _a_getAttributes(a0: string, a1: string[], a2: Continuation): javax.naming.directory.Attributes;
              _a_getAttributes_nns(name: string, attrIds: string[], cont: Continuation): javax.naming.directory.Attributes;
              _a_getSchema(a0: Continuation): javax.naming.directory.DirContext;
              _a_getSchemaClassDefinition(a0: Continuation): javax.naming.directory.DirContext;
              _a_getSchemaDefinition_nns(cont: Continuation): javax.naming.directory.DirContext;
              _a_getSchema_nns(cont: Continuation): javax.naming.directory.DirContext;
              _a_modifyAttributes(a0: string, a1: int, a2: javax.naming.directory.Attributes, a3: Continuation): void;
              _a_modifyAttributes(a0: string, a1: javax.naming.directory.ModificationItem[], a2: Continuation): void;
              _a_modifyAttributes_nns(name: string, mod_op: int, attrs: javax.naming.directory.Attributes, cont: Continuation): void;
              _a_modifyAttributes_nns(name: string, mods: javax.naming.directory.ModificationItem[], cont: Continuation): void;
              _a_rebind(a0: string, a1: any, a2: javax.naming.directory.Attributes, a3: Continuation): void;
              _a_rebind_nns(name: string, obj: any, attrs: javax.naming.directory.Attributes, cont: Continuation): void;
              _a_search(a0: javax.naming.directory.Attributes, a1: string[], a2: Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              _a_search(a0: string, a1: string, a2: any[], a3: javax.naming.directory.SearchControls, a4: Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              _a_search(a0: string, a1: string, a2: javax.naming.directory.SearchControls, a3: Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              _a_search_nns(matchingAttributes: javax.naming.directory.Attributes, attributesToReturn: string[], cont: Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              _a_search_nns(name: string, filterExpr: string, filterArgs: any[], cons: javax.naming.directory.SearchControls, cont: Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              _a_search_nns(name: string, filter: string, cons: javax.naming.directory.SearchControls, cont: Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              _c_bind(name: javax.naming.Name, obj: any, attrs: javax.naming.directory.Attributes, cont: Continuation): void;
              _c_bind_nns(name: javax.naming.Name, obj: any, attrs: javax.naming.directory.Attributes, cont: Continuation): void;
              _c_createSubcontext(name: javax.naming.Name, attrs: javax.naming.directory.Attributes, cont: Continuation): javax.naming.directory.DirContext;
              _c_createSubcontext_nns(name: javax.naming.Name, attrs: javax.naming.directory.Attributes, cont: Continuation): javax.naming.directory.DirContext;
              _c_getAttributes(name: javax.naming.Name, attrIds: string[], cont: Continuation): javax.naming.directory.Attributes;
              _c_getAttributes_nns(name: javax.naming.Name, attrIds: string[], cont: Continuation): javax.naming.directory.Attributes;
              _c_getSchema(name: javax.naming.Name, cont: Continuation): javax.naming.directory.DirContext;
              _c_getSchemaClassDefinition(name: javax.naming.Name, cont: Continuation): javax.naming.directory.DirContext;
              _c_getSchemaClassDefinition_nns(name: javax.naming.Name, cont: Continuation): javax.naming.directory.DirContext;
              _c_getSchema_nns(name: javax.naming.Name, cont: Continuation): javax.naming.directory.DirContext;
              _c_modifyAttributes(name: javax.naming.Name, mod_op: int, attrs: javax.naming.directory.Attributes, cont: Continuation): void;
              _c_modifyAttributes(name: javax.naming.Name, mods: javax.naming.directory.ModificationItem[], cont: Continuation): void;
              _c_modifyAttributes_nns(name: javax.naming.Name, mod_op: int, attrs: javax.naming.directory.Attributes, cont: Continuation): void;
              _c_modifyAttributes_nns(name: javax.naming.Name, mods: javax.naming.directory.ModificationItem[], cont: Continuation): void;
              _c_rebind(name: javax.naming.Name, obj: any, attrs: javax.naming.directory.Attributes, cont: Continuation): void;
              _c_rebind_nns(name: javax.naming.Name, obj: any, attrs: javax.naming.directory.Attributes, cont: Continuation): void;
              _c_search(name: javax.naming.Name, matchingAttributes: javax.naming.directory.Attributes, attributesToReturn: string[], cont: Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              _c_search(name: javax.naming.Name, filter: string, cons: javax.naming.directory.SearchControls, cont: Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              _c_search(name: javax.naming.Name, filterExpr: string, filterArgs: any[], cons: javax.naming.directory.SearchControls, cont: Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              _c_search_nns(name: javax.naming.Name, matchingAttributes: javax.naming.directory.Attributes, attributesToReturn: string[], cont: Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              _c_search_nns(name: javax.naming.Name, filter: string, cons: javax.naming.directory.SearchControls, cont: Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              _c_search_nns(name: javax.naming.Name, filterExpr: string, filterArgs: any[], cons: javax.naming.directory.SearchControls, cont: Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
            }
            interface AtomicDirContext extends CombineTypes<[_AtomicDirContext, com.sun.jndi.toolkit.ctx.ComponentDirContext]> {}
            interface _ComponentContext$$static extends ClassLike {
              _TERMINAL_COMPONENT: byte;
              _TERMINAL_NNS_COMPONENT: byte;
              _USE_CONTINUATION: byte;
              _debug: int;
              _new(): ComponentContext;
            }
            let ComponentContext: _ComponentContext$$static;
            interface _ComponentContext {
              _c_bind(a0: javax.naming.Name, a1: any, a2: Continuation): void;
              _c_bind_nns(name: javax.naming.Name, obj: any, cont: Continuation): void;
              _c_createSubcontext(a0: javax.naming.Name, a1: Continuation): javax.naming.Context;
              _c_createSubcontext_nns(name: javax.naming.Name, cont: Continuation): javax.naming.Context;
              _c_destroySubcontext(a0: javax.naming.Name, a1: Continuation): void;
              _c_destroySubcontext_nns(name: javax.naming.Name, cont: Continuation): void;
              _c_getNameParser(a0: javax.naming.Name, a1: Continuation): javax.naming.NameParser;
              _c_getNameParser_nns(name: javax.naming.Name, cont: Continuation): javax.naming.NameParser;
              _c_list(a0: javax.naming.Name, a1: Continuation): javax.naming.NamingEnumeration<javax.naming.NameClassPair>;
              _c_listBindings(a0: javax.naming.Name, a1: Continuation): javax.naming.NamingEnumeration<javax.naming.Binding>;
              _c_listBindings_nns(name: javax.naming.Name, cont: Continuation): javax.naming.NamingEnumeration<javax.naming.Binding>;
              _c_list_nns(name: javax.naming.Name, cont: Continuation): javax.naming.NamingEnumeration<javax.naming.NameClassPair>;
              _c_lookup(a0: javax.naming.Name, a1: Continuation): any;
              _c_lookupLink(a0: javax.naming.Name, a1: Continuation): any;
              _c_lookupLink_nns(name: javax.naming.Name, cont: Continuation): any;
              _c_lookup_nns(name: javax.naming.Name, cont: Continuation): any;
              _c_processJunction_nns(name: javax.naming.Name, cont: Continuation): void;
              _c_rebind(a0: javax.naming.Name, a1: any, a2: Continuation): void;
              _c_rebind_nns(name: javax.naming.Name, obj: any, cont: Continuation): void;
              _c_rename(a0: javax.naming.Name, a1: javax.naming.Name, a2: Continuation): void;
              _c_rename_nns(oldname: javax.naming.Name, newname: javax.naming.Name, cont: Continuation): void;
              _c_resolveIntermediate_nns(name: javax.naming.Name, cont: Continuation): any;
              _c_unbind(a0: javax.naming.Name, a1: Continuation): void;
              _c_unbind_nns(name: javax.naming.Name, cont: Continuation): void;
              _checkAndAdjustRemainingName(rname: javax.naming.Name): void;
              _isAllEmpty(n: javax.naming.Name): boolean;
              _p_bind(name: javax.naming.Name, obj: any, cont: Continuation): void;
              _p_createSubcontext(name: javax.naming.Name, cont: Continuation): javax.naming.Context;
              _p_destroySubcontext(name: javax.naming.Name, cont: Continuation): void;
              _p_getNameParser(name: javax.naming.Name, cont: Continuation): javax.naming.NameParser;
              _p_list(name: javax.naming.Name, cont: Continuation): javax.naming.NamingEnumeration<javax.naming.NameClassPair>;
              _p_listBindings(name: javax.naming.Name, cont: Continuation): javax.naming.NamingEnumeration<javax.naming.Binding>;
              _p_lookup(name: javax.naming.Name, cont: Continuation): any;
              _p_lookupLink(name: javax.naming.Name, cont: Continuation): any;
              _p_parseComponent(name: javax.naming.Name, cont: Continuation): HeadTail;
              _p_rebind(name: javax.naming.Name, obj: any, cont: Continuation): void;
              _p_rename(oldName: javax.naming.Name, newName: javax.naming.Name, cont: Continuation): void;
              _p_resolveIntermediate(name: javax.naming.Name, cont: Continuation): HeadTail;
              _p_resolveToClass(name: javax.naming.Name, contextType: java.lang.Class<any>, cont: Continuation): javax.naming.spi.ResolveResult;
              _p_unbind(name: javax.naming.Name, cont: Continuation): void;
            }
            interface ComponentContext extends CombineTypes<[_ComponentContext, com.sun.jndi.toolkit.ctx.PartialCompositeContext]> {}
            interface _ComponentDirContext$$static extends ClassLike {
              _new(): ComponentDirContext;
            }
            let ComponentDirContext: _ComponentDirContext$$static;
            interface _ComponentDirContext {
              _c_bind(a0: javax.naming.Name, a1: any, a2: javax.naming.directory.Attributes, a3: Continuation): void;
              _c_bind_nns(name: javax.naming.Name, obj: any, attrs: javax.naming.directory.Attributes, cont: Continuation): void;
              _c_createSubcontext(a0: javax.naming.Name, a1: javax.naming.directory.Attributes, a2: Continuation): javax.naming.directory.DirContext;
              _c_createSubcontext_nns(name: javax.naming.Name, attrs: javax.naming.directory.Attributes, cont: Continuation): javax.naming.directory.DirContext;
              _c_getAttributes(a0: javax.naming.Name, a1: string[], a2: Continuation): javax.naming.directory.Attributes;
              _c_getAttributes_nns(name: javax.naming.Name, attrIds: string[], cont: Continuation): javax.naming.directory.Attributes;
              _c_getSchema(a0: javax.naming.Name, a1: Continuation): javax.naming.directory.DirContext;
              _c_getSchemaClassDefinition(a0: javax.naming.Name, a1: Continuation): javax.naming.directory.DirContext;
              _c_getSchemaClassDefinition_nns(name: javax.naming.Name, cont: Continuation): javax.naming.directory.DirContext;
              _c_getSchema_nns(name: javax.naming.Name, cont: Continuation): javax.naming.directory.DirContext;
              _c_modifyAttributes(a0: javax.naming.Name, a1: int, a2: javax.naming.directory.Attributes, a3: Continuation): void;
              _c_modifyAttributes(a0: javax.naming.Name, a1: javax.naming.directory.ModificationItem[], a2: Continuation): void;
              _c_modifyAttributes_nns(name: javax.naming.Name, mod_op: int, attrs: javax.naming.directory.Attributes, cont: Continuation): void;
              _c_modifyAttributes_nns(name: javax.naming.Name, mods: javax.naming.directory.ModificationItem[], cont: Continuation): void;
              _c_rebind(a0: javax.naming.Name, a1: any, a2: javax.naming.directory.Attributes, a3: Continuation): void;
              _c_rebind_nns(name: javax.naming.Name, obj: any, attrs: javax.naming.directory.Attributes, cont: Continuation): void;
              _c_search(a0: javax.naming.Name, a1: javax.naming.directory.Attributes, a2: string[], a3: Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              _c_search(a0: javax.naming.Name, a1: string, a2: javax.naming.directory.SearchControls, a3: Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              _c_search(a0: javax.naming.Name, a1: string, a2: any[], a3: javax.naming.directory.SearchControls, a4: Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              _c_search_nns(name: javax.naming.Name, matchingAttributes: javax.naming.directory.Attributes, attributesToReturn: string[], cont: Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              _c_search_nns(name: javax.naming.Name, filter: string, cons: javax.naming.directory.SearchControls, cont: Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              _c_search_nns(name: javax.naming.Name, filterExpr: string, filterArgs: any[], cons: javax.naming.directory.SearchControls, cont: Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              _p_bind(name: javax.naming.Name, obj: any, attrs: javax.naming.directory.Attributes, cont: Continuation): void;
              _p_createSubcontext(name: javax.naming.Name, attrs: javax.naming.directory.Attributes, cont: Continuation): javax.naming.directory.DirContext;
              _p_getAttributes(name: javax.naming.Name, attrIds: string[], cont: Continuation): javax.naming.directory.Attributes;
              _p_getSchema(name: javax.naming.Name, cont: Continuation): javax.naming.directory.DirContext;
              _p_getSchemaClassDefinition(name: javax.naming.Name, cont: Continuation): javax.naming.directory.DirContext;
              _p_modifyAttributes(name: javax.naming.Name, mod_op: int, attrs: javax.naming.directory.Attributes, cont: Continuation): void;
              _p_modifyAttributes(name: javax.naming.Name, mods: javax.naming.directory.ModificationItem[], cont: Continuation): void;
              _p_rebind(name: javax.naming.Name, obj: any, attrs: javax.naming.directory.Attributes, cont: Continuation): void;
              _p_search(name: javax.naming.Name, matchingAttributes: javax.naming.directory.Attributes, attributesToReturn: string[], cont: Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              _p_search(name: javax.naming.Name, filter: string, cons: javax.naming.directory.SearchControls, cont: Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              _p_search(name: javax.naming.Name, filterExpr: string, filterArgs: any[], cons: javax.naming.directory.SearchControls, cont: Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
            }
            interface ComponentDirContext extends CombineTypes<[_ComponentDirContext, com.sun.jndi.toolkit.ctx.PartialCompositeDirContext]> {}
            interface _Continuation$$static extends ClassLike {
              _serialVersionUID: long;
              new(): Continuation;
              new(top: javax.naming.Name, environment: java.util.Hashtable<any,any>): Continuation;
            }
            let Continuation: _Continuation$$static;
            interface _Continuation {
              fillInException(e: javax.naming.NamingException): javax.naming.NamingException;
              isContinue(): boolean;
              setContinue(obj: any, relResName: javax.naming.Name, currCtx: javax.naming.Context): void;
              setContinue(obj: any, relResName: javax.naming.Name, currCtx: javax.naming.Context, remain: javax.naming.Name): void;
              setContinue(obj: any, relResName: string, currCtx: javax.naming.Context, remain: string): void;
              setContinue(obj: any, currCtx: any): void;
              _setContinueAux(resObj: any, relResName: javax.naming.Name, currCtx: javax.naming.Context, remain: javax.naming.Name): void;
              _setContinueLink(linkRef: any, relResName: javax.naming.Name, resolvedCtx: javax.naming.Context, rname: javax.naming.Name): void;
              setContinueNNS(resObj: any, relResName: javax.naming.Name, currCtx: javax.naming.Context): void;
              setContinueNNS(resObj: any, relResName: string, currCtx: javax.naming.Context): void;
              setError(resObj: any, remain: javax.naming.Name): void;
              setError(resObj: any, remain: string): void;
              _setErrorAux(resObj: any, rname: javax.naming.Name): void;
              setErrorNNS(resObj: any, remain: javax.naming.Name): void;
              setErrorNNS(resObj: any, remain: string): void;
              setSuccess(): void;
              toString(): string;
              toString(detail: boolean): string;
              _continuing: boolean;
              _environment: java.util.Hashtable<any,any>;
              _followingLink: any;
              _relativeResolvedName: javax.naming.Name;
              _resolvedContext: javax.naming.Context;
              _starter: javax.naming.Name;
            }
            interface Continuation extends CombineTypes<[_Continuation, javax.naming.spi.ResolveResult]> {}
            interface _HeadTail$$static extends ClassLike {
              new(head: javax.naming.Name, tail: javax.naming.Name): HeadTail;
              new(head: javax.naming.Name, tail: javax.naming.Name, status: int): HeadTail;
            }
            let HeadTail: _HeadTail$$static;
            interface _HeadTail {
              getHead(): javax.naming.Name;
              getStatus(): int;
              getTail(): javax.naming.Name;
              setStatus(status: int): void;
              _head: javax.naming.Name;
              _status: int;
              _tail: javax.naming.Name;
            }
            interface HeadTail extends CombineTypes<[_HeadTail, java.lang.Object]> {}
            interface _PartialCompositeContext$$static extends ClassLike {
              _allEmpty(name: javax.naming.Name): boolean;
              _getPCContext(cont: Continuation): PartialCompositeContext;
              __ATOMIC: int;
              __COMPONENT: int;
              __EMPTY_NAME: javax.naming.CompositeName;
              __NNS_NAME: javax.naming.CompositeName;
              __PARTIAL: int;
              _new(): PartialCompositeContext;
            }
            let PartialCompositeContext: _PartialCompositeContext$$static;
            interface _PartialCompositeContext {
              bind(name: string, newObj: any): void;
              bind(name: javax.naming.Name, newObj: any): void;
              composeName(name: string, prefix: string): string;
              composeName(name: javax.naming.Name, prefix: javax.naming.Name): javax.naming.Name;
              createSubcontext(name: string): javax.naming.Context;
              createSubcontext(name: javax.naming.Name): javax.naming.Context;
              destroySubcontext(name: string): void;
              destroySubcontext(name: javax.naming.Name): void;
              getNameParser(name: string): javax.naming.NameParser;
              getNameParser(name: javax.naming.Name): javax.naming.NameParser;
              list(name: string): javax.naming.NamingEnumeration<javax.naming.NameClassPair>;
              list(name: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.NameClassPair>;
              listBindings(name: string): javax.naming.NamingEnumeration<javax.naming.Binding>;
              listBindings(name: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.Binding>;
              lookup(name: string): any;
              lookup(name: javax.naming.Name): any;
              lookupLink(name: string): any;
              lookupLink(name: javax.naming.Name): any;
              _p_bind(a0: javax.naming.Name, a1: any, a2: Continuation): void;
              _p_createSubcontext(a0: javax.naming.Name, a1: Continuation): javax.naming.Context;
              _p_destroySubcontext(a0: javax.naming.Name, a1: Continuation): void;
              _p_getEnvironment(): java.util.Hashtable<any,any>;
              _p_getNameParser(a0: javax.naming.Name, a1: Continuation): javax.naming.NameParser;
              _p_list(a0: javax.naming.Name, a1: Continuation): javax.naming.NamingEnumeration<javax.naming.NameClassPair>;
              _p_listBindings(a0: javax.naming.Name, a1: Continuation): javax.naming.NamingEnumeration<javax.naming.Binding>;
              _p_lookup(a0: javax.naming.Name, a1: Continuation): any;
              _p_lookupLink(a0: javax.naming.Name, a1: Continuation): any;
              _p_rebind(a0: javax.naming.Name, a1: any, a2: Continuation): void;
              _p_rename(a0: javax.naming.Name, a1: javax.naming.Name, a2: Continuation): void;
              _p_resolveToClass(a0: javax.naming.Name, a1: java.lang.Class<any>, a2: Continuation): javax.naming.spi.ResolveResult;
              _p_unbind(a0: javax.naming.Name, a1: Continuation): void;
              rebind(name: string, newObj: any): void;
              rebind(name: javax.naming.Name, newObj: any): void;
              rename(oldName: string, newName: string): void;
              rename(oldName: javax.naming.Name, newName: javax.naming.Name): void;
              resolveToClass(name: string, contextType: java.lang.Class<javax.naming.Context>): javax.naming.spi.ResolveResult;
              resolveToClass(name: javax.naming.Name, contextType: java.lang.Class<javax.naming.Context>): javax.naming.spi.ResolveResult;
              unbind(name: string): void;
              unbind(name: javax.naming.Name): void;
              __contextType: int;
            }
            interface PartialCompositeContext extends CombineTypes<[_PartialCompositeContext, javax.naming.spi.Resolver, java.lang.Object, javax.naming.Context]> {}
            interface _PartialCompositeDirContext$$static extends ClassLike {
              _getPCDirContext(cont: Continuation): PartialCompositeDirContext;
              _new(): PartialCompositeDirContext;
            }
            let PartialCompositeDirContext: _PartialCompositeDirContext$$static;
            interface _PartialCompositeDirContext {
              _a_bind(name: string, obj: any, cont: Continuation): void;
              _a_createSubcontext(name: string, cont: Continuation): javax.naming.Context;
              _a_destroySubcontext(name: string, cont: Continuation): void;
              _a_getNameParser(cont: Continuation): javax.naming.NameParser;
              _a_list(cont: Continuation): javax.naming.NamingEnumeration<javax.naming.NameClassPair>;
              _a_listBindings(cont: Continuation): javax.naming.NamingEnumeration<javax.naming.Binding>;
              _a_lookup(name: string, cont: Continuation): any;
              _a_lookupLink(name: string, cont: Continuation): any;
              _a_rebind(name: string, obj: any, cont: Continuation): void;
              _a_rename(oldname: string, newname: javax.naming.Name, cont: Continuation): void;
              _a_unbind(name: string, cont: Continuation): void;
              bind(name: string, obj: any, attrs: javax.naming.directory.Attributes): void;
              bind(name: javax.naming.Name, obj: any, attrs: javax.naming.directory.Attributes): void;
              _c_parseComponent(inputName: string, cont: Continuation): StringHeadTail;
              createSubcontext(name: string, attrs: javax.naming.directory.Attributes): javax.naming.directory.DirContext;
              createSubcontext(name: javax.naming.Name, attrs: javax.naming.directory.Attributes): javax.naming.directory.DirContext;
              getAttributes(name: string): javax.naming.directory.Attributes;
              getAttributes(name: javax.naming.Name): javax.naming.directory.Attributes;
              getAttributes(name: string, attrIds: string[]): javax.naming.directory.Attributes;
              getAttributes(name: javax.naming.Name, attrIds: string[]): javax.naming.directory.Attributes;
              getSchema(name: string): javax.naming.directory.DirContext;
              getSchema(name: javax.naming.Name): javax.naming.directory.DirContext;
              getSchemaClassDefinition(name: string): javax.naming.directory.DirContext;
              getSchemaClassDefinition(name: javax.naming.Name): javax.naming.directory.DirContext;
              modifyAttributes(name: string, mod_op: int, attrs: javax.naming.directory.Attributes): void;
              modifyAttributes(name: javax.naming.Name, mod_op: int, attrs: javax.naming.directory.Attributes): void;
              modifyAttributes(name: string, mods: javax.naming.directory.ModificationItem[]): void;
              modifyAttributes(name: javax.naming.Name, mods: javax.naming.directory.ModificationItem[]): void;
              _p_bind(a0: javax.naming.Name, a1: any, a2: javax.naming.directory.Attributes, a3: Continuation): void;
              _p_createSubcontext(a0: javax.naming.Name, a1: javax.naming.directory.Attributes, a2: Continuation): javax.naming.directory.DirContext;
              _p_getAttributes(a0: javax.naming.Name, a1: string[], a2: Continuation): javax.naming.directory.Attributes;
              _p_getSchema(a0: javax.naming.Name, a1: Continuation): javax.naming.directory.DirContext;
              _p_getSchemaClassDefinition(a0: javax.naming.Name, a1: Continuation): javax.naming.directory.DirContext;
              _p_modifyAttributes(a0: javax.naming.Name, a1: int, a2: javax.naming.directory.Attributes, a3: Continuation): void;
              _p_modifyAttributes(a0: javax.naming.Name, a1: javax.naming.directory.ModificationItem[], a2: Continuation): void;
              _p_rebind(a0: javax.naming.Name, a1: any, a2: javax.naming.directory.Attributes, a3: Continuation): void;
              _p_search(a0: javax.naming.Name, a1: javax.naming.directory.Attributes, a2: string[], a3: Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              _p_search(a0: javax.naming.Name, a1: string, a2: javax.naming.directory.SearchControls, a3: Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              _p_search(a0: javax.naming.Name, a1: string, a2: any[], a3: javax.naming.directory.SearchControls, a4: Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              rebind(name: string, obj: any, attrs: javax.naming.directory.Attributes): void;
              rebind(name: javax.naming.Name, obj: any, attrs: javax.naming.directory.Attributes): void;
              search(name: string, matchingAttributes: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              search(name: javax.naming.Name, matchingAttributes: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              search(name: string, matchingAttributes: javax.naming.directory.Attributes, attributesToReturn: string[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              search(name: javax.naming.Name, matchingAttributes: javax.naming.directory.Attributes, attributesToReturn: string[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              search(name: string, filter: string, cons: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              search(name: javax.naming.Name, filter: string, cons: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              search(name: string, filterExpr: string, filterArgs: any[], cons: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              search(name: javax.naming.Name, filterExpr: string, filterArgs: any[], cons: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
            }
            interface PartialCompositeDirContext extends CombineTypes<[_PartialCompositeDirContext, com.sun.jndi.toolkit.ctx.AtomicContext, javax.naming.directory.DirContext]> {}
            interface _StringHeadTail$$static extends ClassLike {
              new(head: string, tail: string): StringHeadTail;
              new(head: string, tail: string, status: int): StringHeadTail;
            }
            let StringHeadTail: _StringHeadTail$$static;
            interface _StringHeadTail {
              getHead(): string;
              getStatus(): int;
              getTail(): string;
              setStatus(status: int): void;
              _head: string;
              _status: int;
              _tail: string;
            }
            interface StringHeadTail extends CombineTypes<[_StringHeadTail, java.lang.Object]> {}
          }
          module dir {
            interface _AttrFilter$$static extends ClassLike {
            }
            let AttrFilter: _AttrFilter$$static;
            interface _AttrFilter {
              check(a0: javax.naming.directory.Attributes): boolean;
(a0: javax.naming.directory.Attributes): boolean;
            }
            interface AttrFilter extends CombineTypes<[_AttrFilter, java.lang.Object]> {}
            interface _ContainmentFilter$$static extends ClassLike {
              contains(superset: javax.naming.directory.Attributes, subset: javax.naming.directory.Attributes): boolean;
              new(match: javax.naming.directory.Attributes): ContainmentFilter;
            }
            let ContainmentFilter: _ContainmentFilter$$static;
            interface _ContainmentFilter {
              check(attrs: javax.naming.directory.Attributes): boolean;
              _matchingAttrs: javax.naming.directory.Attributes;
            }
            interface ContainmentFilter extends CombineTypes<[_ContainmentFilter, com.sun.jndi.toolkit.dir.AttrFilter, java.lang.Object]> {}
            interface _ContextEnumerator$$static extends ClassLike {
              _debug: boolean;
              new(context: javax.naming.Context): ContextEnumerator;
              new(context: javax.naming.Context, scope: int): ContextEnumerator;
              _new(context: javax.naming.Context, scope: int, contextName: string, returnSelf: boolean): ContextEnumerator;
            }
            let ContextEnumerator: _ContextEnumerator$$static;
            interface _ContextEnumerator {
              close(): void;
              _getImmediateChildren(ctx: javax.naming.Context): javax.naming.NamingEnumeration<javax.naming.Binding>;
              _getNextChild(): javax.naming.Binding;
              _getNextDescendant(): javax.naming.Binding;
              hasMore(): boolean;
              _hasMoreChildren(): boolean;
              _hasMoreDescendants(): boolean;
              hasMoreElements(): boolean;
              _newEnumerator(ctx: javax.naming.Context, scope: int, contextName: string, returnSelf: boolean): ContextEnumerator;
              next(): javax.naming.Binding;
              next(): any;
              nextElement(): javax.naming.Binding;
              nextElement(): any;
              _prepNextChild(): void;
              _children: javax.naming.NamingEnumeration<javax.naming.Binding>;
              _contextName: string;
              _currentChild: javax.naming.Binding;
              _currentChildEnum: ContextEnumerator;
              _currentChildExpanded: boolean;
              _currentReturned: boolean;
              _root: javax.naming.Context;
              _rootProcessed: boolean;
              _scope: int;
            }
            interface ContextEnumerator extends CombineTypes<[_ContextEnumerator, java.lang.Object, javax.naming.NamingEnumeration<javax.naming.Binding>]> {}
            interface _DirSearch$$static extends ClassLike {
              search(ctx: javax.naming.directory.DirContext, matchingAttributes: javax.naming.directory.Attributes, attributesToReturn: string[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              search(ctx: javax.naming.directory.DirContext, filter: string, cons: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              search(ctx: javax.naming.directory.DirContext, filterExpr: string, filterArgs: any[], cons: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              new(): DirSearch;
            }
            let DirSearch: _DirSearch$$static;
            interface _DirSearch {
            }
            interface DirSearch extends CombineTypes<[_DirSearch, java.lang.Object]> {}
            interface _HierMemDirCtx$$static extends ClassLike {
              _applyMods(mods: javax.naming.directory.ModificationItem[], orig: javax.naming.directory.Attributes): javax.naming.directory.Attributes;
              _debug: boolean;
              _defaultParser: javax.naming.NameParser;
              new(): HierMemDirCtx;
              new(ignoreCase: boolean): HierMemDirCtx;
              new(environment: java.util.Hashtable<string,any>, ignoreCase: boolean): HierMemDirCtx;
              _new(environment: java.util.Hashtable<string,any>, ignoreCase: boolean, useFac: boolean): HierMemDirCtx;
            }
            let HierMemDirCtx: _HierMemDirCtx$$static;
            interface _HierMemDirCtx {
              addToEnvironment(propName: string, propVal: any): any;
              bind(name: string, obj: any): void;
              bind(name: javax.naming.Name, obj: any): void;
              bind(name: string, obj: any, attrs: javax.naming.directory.Attributes): void;
              bind(name: javax.naming.Name, obj: any, attrs: javax.naming.directory.Attributes): void;
              _canonizeName(name: javax.naming.Name): javax.naming.Name;
              close(): void;
              composeName(name: string, prefix: string): string;
              composeName(name: javax.naming.Name, prefix: javax.naming.Name): javax.naming.Name;
              _createNewCtx(): HierMemDirCtx;
              createSubcontext(name: string): javax.naming.Context;
              createSubcontext(name: javax.naming.Name): javax.naming.Context;
              createSubcontext(name: string, attrs: javax.naming.directory.Attributes): javax.naming.directory.DirContext;
              createSubcontext(name: javax.naming.Name, attrs: javax.naming.directory.Attributes): javax.naming.directory.DirContext;
              destroySubcontext(name: string): void;
              destroySubcontext(name: javax.naming.Name): void;
              _doBind(name: javax.naming.Name, obj: any, attrs: javax.naming.directory.Attributes, useFactory: boolean): void;
              _doBindAux(name: javax.naming.Name, obj: any): void;
              _doCreateSubcontext(name: javax.naming.Name, attrs: javax.naming.directory.Attributes): javax.naming.directory.DirContext;
              _doDestroySubcontext(name: javax.naming.Name): void;
              _doGetAttributes(): javax.naming.directory.Attributes;
              _doGetAttributes(attrIds: string[]): javax.naming.directory.Attributes;
              _doList(): javax.naming.NamingEnumeration<javax.naming.NameClassPair>;
              _doListBindings(useFactory: boolean): javax.naming.NamingEnumeration<javax.naming.Binding>;
              doLookup(name: javax.naming.Name, useFactory: boolean): any;
              _doModifyAttributes(mods: javax.naming.directory.ModificationItem[]): void;
              _doRebind(name: javax.naming.Name, obj: any, attrs: javax.naming.directory.Attributes, useFactory: boolean): void;
              _doRebindAux(name: javax.naming.Name, obj: any): void;
              _doRename(oldname: javax.naming.Name, newname: javax.naming.Name): void;
              _doUnbind(name: javax.naming.Name): void;
              getAttributes(name: string): javax.naming.directory.Attributes;
              getAttributes(name: javax.naming.Name): javax.naming.directory.Attributes;
              getAttributes(name: string, attrIds: string[]): javax.naming.directory.Attributes;
              getAttributes(name: javax.naming.Name, attrIds: string[]): javax.naming.directory.Attributes;
              getEnvironment(): java.util.Hashtable<string,any>;
              _getInternalName(name: javax.naming.Name): javax.naming.Name;
              _getLeafName(name: javax.naming.Name): javax.naming.Name;
              getNameInNamespace(): string;
              getNameParser(name: string): javax.naming.NameParser;
              getNameParser(name: javax.naming.Name): javax.naming.NameParser;
              getSchema(name: string): javax.naming.directory.DirContext;
              getSchema(name: javax.naming.Name): javax.naming.directory.DirContext;
              getSchemaClassDefinition(name: string): javax.naming.directory.DirContext;
              getSchemaClassDefinition(name: javax.naming.Name): javax.naming.directory.DirContext;
              _init(): void;
              list(name: string): javax.naming.NamingEnumeration<javax.naming.NameClassPair>;
              list(name: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.NameClassPair>;
              listBindings(name: string): javax.naming.NamingEnumeration<javax.naming.Binding>;
              listBindings(name: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.Binding>;
              lookup(name: string): any;
              lookup(name: javax.naming.Name): any;
              lookupLink(name: string): any;
              lookupLink(name: javax.naming.Name): any;
              modifyAttributes(name: string, mod_op: int, attrs: javax.naming.directory.Attributes): void;
              modifyAttributes(name: javax.naming.Name, mod_op: int, attrs: javax.naming.directory.Attributes): void;
              modifyAttributes(name: string, mods: javax.naming.directory.ModificationItem[]): void;
              modifyAttributes(name: javax.naming.Name, mods: javax.naming.directory.ModificationItem[]): void;
              rebind(name: string, obj: any): void;
              rebind(name: javax.naming.Name, obj: any): void;
              rebind(name: string, obj: any, attrs: javax.naming.directory.Attributes): void;
              rebind(name: javax.naming.Name, obj: any, attrs: javax.naming.directory.Attributes): void;
              removeFromEnvironment(propName: string): any;
              rename(oldname: string, newname: string): void;
              rename(oldname: javax.naming.Name, newname: javax.naming.Name): void;
              search(name: string, matchingAttributes: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              search(name: javax.naming.Name, matchingAttributes: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              search(name: string, matchingAttributes: javax.naming.directory.Attributes, attributesToReturn: string[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              search(name: javax.naming.Name, matchingAttributes: javax.naming.directory.Attributes, attributesToReturn: string[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              search(name: javax.naming.Name, filter: string, cons: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              search(name: javax.naming.Name, filterExpr: string, filterArgs: any[], cons: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              search(name: string, filter: string, cons: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              search(name: string, filterExpr: string, filterArgs: any[], cons: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              setIgnoreCase(ignoreCase: boolean): void;
              setNameParser(parser: javax.naming.NameParser): void;
              setReadOnly(e: javax.naming.NamingException): void;
              unbind(name: string): void;
              unbind(name: javax.naming.Name): void;
              _alwaysUseFactory: boolean;
              _attrs: javax.naming.directory.Attributes;
              _bindings: java.util.Hashtable<javax.naming.Name,any>;
              _ignoreCase: boolean;
              _myEnv: java.util.Hashtable<string,any>;
              _myParser: javax.naming.NameParser;
              _readOnlyEx: javax.naming.NamingException;
            }
            interface HierMemDirCtx extends CombineTypes<[_HierMemDirCtx, javax.naming.directory.DirContext, java.lang.Object]> {}
            interface _HierMemDirCtx$BaseFlatNames$$static<T> extends ClassLike {
              _new(a0: java.util.Enumeration<javax.naming.Name>): HierMemDirCtx$BaseFlatNames<T>;
            }
            let HierMemDirCtx$BaseFlatNames: _HierMemDirCtx$BaseFlatNames$$static<T>;
            interface _HierMemDirCtx$BaseFlatNames<T> {
              close(): void;
              hasMore(): boolean;
              hasMoreElements(): boolean;
              next(): T;
(): T;
              nextElement(): T;
              _names: java.util.Enumeration<javax.naming.Name>;
            }
            interface HierMemDirCtx$BaseFlatNames<T> extends CombineTypes<[_HierMemDirCtx$BaseFlatNames<T>, java.lang.Object, javax.naming.NamingEnumeration<T>]> {}
            interface _HierMemDirCtx$FlatBindings$$static extends ClassLike {
              _new(a0: java.util.Hashtable<javax.naming.Name,any>, bindings: java.util.Hashtable<string,any>, env: boolean): HierMemDirCtx$FlatBindings;
            }
            let HierMemDirCtx$FlatBindings: _HierMemDirCtx$FlatBindings$$static;
            interface _HierMemDirCtx$FlatBindings {
              next(): javax.naming.Binding;
              next(): any;
              _bds: java.util.Hashtable<javax.naming.Name,any>;
              _env: java.util.Hashtable<string,any>;
              _this$0: HierMemDirCtx;
              _useFactory: boolean;
            }
            interface HierMemDirCtx$FlatBindings extends CombineTypes<[_HierMemDirCtx$FlatBindings, HierMemDirCtx$BaseFlatNames<javax.naming.Binding>]> {}
            interface _HierMemDirCtx$FlatNames$$static extends ClassLike {
              _new(a0: java.util.Enumeration<javax.naming.Name>): HierMemDirCtx$FlatNames;
            }
            let HierMemDirCtx$FlatNames: _HierMemDirCtx$FlatNames$$static;
            interface _HierMemDirCtx$FlatNames {
              next(): javax.naming.NameClassPair;
              next(): any;
              _this$0: HierMemDirCtx;
            }
            interface HierMemDirCtx$FlatNames extends CombineTypes<[_HierMemDirCtx$FlatNames, HierMemDirCtx$BaseFlatNames<javax.naming.NameClassPair>]> {}
            interface _HierMemDirCtx$HierContextEnumerator$$static extends ClassLike {
              new(this$0: HierMemDirCtx, context: javax.naming.Context, scope: int): HierMemDirCtx$HierContextEnumerator;
              _new(this$0: HierMemDirCtx, context: javax.naming.Context, scope: int, contextName: string, returnSelf: boolean): HierMemDirCtx$HierContextEnumerator;
            }
            let HierMemDirCtx$HierContextEnumerator: _HierMemDirCtx$HierContextEnumerator$$static;
            interface _HierMemDirCtx$HierContextEnumerator {
              _getImmediateChildren(ctx: javax.naming.Context): javax.naming.NamingEnumeration<javax.naming.Binding>;
              _newEnumerator(ctx: javax.naming.Context, scope: int, contextName: string, returnSelf: boolean): ContextEnumerator;
              _this$0: HierMemDirCtx;
            }
            interface HierMemDirCtx$HierContextEnumerator extends CombineTypes<[_HierMemDirCtx$HierContextEnumerator, com.sun.jndi.toolkit.dir.ContextEnumerator]> {}
            interface _HierarchicalName$$static extends ClassLike {
              _serialVersionUID: long;
              _new(): HierarchicalName;
              _new(comps: java.util.Enumeration<string>, syntax: java.util.Properties): HierarchicalName;
              _new(n: string, syntax: java.util.Properties): HierarchicalName;
            }
            let HierarchicalName: _HierarchicalName$$static;
            interface _HierarchicalName {
              clone(): any;
              getPrefix(posn: int): javax.naming.Name;
              getSuffix(posn: int): javax.naming.Name;
              hashCode(): int;
              _hashValue: int;
            }
            interface HierarchicalName extends CombineTypes<[_HierarchicalName, javax.naming.CompoundName]> {}
            interface _HierarchicalNameParser$$static extends ClassLike {
              _mySyntax: java.util.Properties;
              _new(): HierarchicalNameParser;
            }
            let HierarchicalNameParser: _HierarchicalNameParser$$static;
            interface _HierarchicalNameParser {
              parse(name: string): javax.naming.Name;
            }
            interface HierarchicalNameParser extends CombineTypes<[_HierarchicalNameParser, java.lang.Object, javax.naming.NameParser]> {}
            interface _LazySearchEnumerationImpl$$static extends ClassLike {
              new(candidates: javax.naming.NamingEnumeration<javax.naming.Binding>, filter: AttrFilter, cons: javax.naming.directory.SearchControls): LazySearchEnumerationImpl;
              new(candidates: javax.naming.NamingEnumeration<javax.naming.Binding>, filter: AttrFilter, cons: javax.naming.directory.SearchControls, ctx: javax.naming.Context, env: java.util.Hashtable<string,any>, useFactory: boolean): LazySearchEnumerationImpl;
              new(candidates: javax.naming.NamingEnumeration<javax.naming.Binding>, filter: AttrFilter, cons: javax.naming.directory.SearchControls, ctx: javax.naming.Context, env: java.util.Hashtable<string,any>): LazySearchEnumerationImpl;
            }
            let LazySearchEnumerationImpl: _LazySearchEnumerationImpl$$static;
            interface _LazySearchEnumerationImpl {
              close(): void;
              _findNextMatch(remove: boolean): javax.naming.directory.SearchResult;
              hasMore(): boolean;
              hasMoreElements(): boolean;
              next(): javax.naming.directory.SearchResult;
              next(): any;
              nextElement(): javax.naming.directory.SearchResult;
              nextElement(): any;
              _candidates: javax.naming.NamingEnumeration<javax.naming.Binding>;
              _cons: javax.naming.directory.SearchControls;
              _context: javax.naming.Context;
              _env: java.util.Hashtable<string,any>;
              _filter: AttrFilter;
              _nextMatch: javax.naming.directory.SearchResult;
              _useFactory: boolean;
            }
            interface LazySearchEnumerationImpl extends CombineTypes<[_LazySearchEnumerationImpl, javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>, java.lang.Object]> {}
            interface _SearchFilter$$static extends ClassLike {
              findUnescaped(ch: char, val: string, start: int): int;
              format(attrs: javax.naming.directory.Attributes): string;
              format(expr: string, args: any[]): string;
              _getEncodedStringRep(obj: any): string;
              selectAttributes(originals: javax.naming.directory.Attributes, attrIDs: string[]): javax.naming.directory.Attributes;
              _AND_TOKEN: char;
              _APPROX_MATCH: int;
              _APPROX_TOKEN: char;
              _BEGIN_FILTER_TOKEN: char;
              _END_FILTER_TOKEN: char;
              _EQUAL_MATCH: int;
              _EQUAL_TOKEN: char;
              _EXTEND_TOKEN: char;
              _GREATER_MATCH: int;
              _GREATER_TOKEN: char;
              _LESS_MATCH: int;
              _LESS_TOKEN: char;
              _NOT_TOKEN: char;
              _OR_TOKEN: char;
              _WILDCARD_TOKEN: char;
              _debug: boolean;
              new(filter: string): SearchFilter;
            }
            let SearchFilter: _SearchFilter$$static;
            interface _SearchFilter {
              check(targetAttrs: javax.naming.directory.Attributes): boolean;
              _consumeChar(): void;
              _consumeChars(i: int): void;
              _createNextFilter(): SearchFilter$StringFilter;
              _getCurrentChar(): char;
              _normalizeFilter(): void;
              _relCharAt(i: int): char;
              _relIndexOf(ch: int): int;
              _relSubstring(beginIndex: int, endIndex: int): string;
              _skipWhiteSpace(): void;
              _filter: string;
              _pos: int;
              _rootFilter: SearchFilter$StringFilter;
            }
            interface SearchFilter extends CombineTypes<[_SearchFilter, com.sun.jndi.toolkit.dir.AttrFilter, java.lang.Object]> {}
            interface _SearchFilter$AtomicFilter$$static extends ClassLike {
              _new(this$0: SearchFilter): SearchFilter$AtomicFilter;
            }
            let SearchFilter$AtomicFilter: _SearchFilter$AtomicFilter$$static;
            interface _SearchFilter$AtomicFilter {
              check(targetAttrs: javax.naming.directory.Attributes): boolean;
              parse(): void;
              _substringMatch(proto: string, value: string): boolean;
              _attrID: string;
              _matchType: int;
              _this$0: SearchFilter;
              _value: string;
            }
            interface SearchFilter$AtomicFilter extends CombineTypes<[_SearchFilter$AtomicFilter, java.lang.Object, com.sun.jndi.toolkit.dir.SearchFilter$StringFilter]> {}
            interface _SearchFilter$CompoundFilter$$static extends ClassLike {
              _new(this$0: SearchFilter, polarity: boolean): SearchFilter$CompoundFilter;
            }
            let SearchFilter$CompoundFilter: _SearchFilter$CompoundFilter$$static;
            interface _SearchFilter$CompoundFilter {
              check(targetAttrs: javax.naming.directory.Attributes): boolean;
              parse(): void;
              _polarity: boolean;
              _subFilters: java.util.Vector<SearchFilter$StringFilter>;
              _this$0: SearchFilter;
            }
            interface SearchFilter$CompoundFilter extends CombineTypes<[_SearchFilter$CompoundFilter, java.lang.Object, com.sun.jndi.toolkit.dir.SearchFilter$StringFilter]> {}
            interface _SearchFilter$NotFilter$$static extends ClassLike {
              _new(this$0: SearchFilter): SearchFilter$NotFilter;
            }
            let SearchFilter$NotFilter: _SearchFilter$NotFilter$$static;
            interface _SearchFilter$NotFilter {
              check(targetAttrs: javax.naming.directory.Attributes): boolean;
              parse(): void;
              _filter: SearchFilter$StringFilter;
              _this$0: SearchFilter;
            }
            interface SearchFilter$NotFilter extends CombineTypes<[_SearchFilter$NotFilter, java.lang.Object, com.sun.jndi.toolkit.dir.SearchFilter$StringFilter]> {}
            interface _SearchFilter$StringFilter$$static extends ClassLike {
            }
            let SearchFilter$StringFilter: _SearchFilter$StringFilter$$static;
            interface _SearchFilter$StringFilter {
              parse(): void;
(): void;
            }
            interface SearchFilter$StringFilter extends CombineTypes<[_SearchFilter$StringFilter, com.sun.jndi.toolkit.dir.AttrFilter, java.lang.Object]> {}
          }
          module url {
            interface _GenericURLContext$$static extends ClassLike {
              new(env: java.util.Hashtable<any,any>): GenericURLContext;
            }
            let GenericURLContext: _GenericURLContext$$static;
            interface _GenericURLContext {
              addToEnvironment(propName: string, propVal: any): any;
              bind(name: string, obj: any): void;
              bind(name: javax.naming.Name, obj: any): void;
              close(): void;
              composeName(name: string, prefix: string): string;
              composeName(name: javax.naming.Name, prefix: javax.naming.Name): javax.naming.Name;
              createSubcontext(name: string): javax.naming.Context;
              createSubcontext(name: javax.naming.Name): javax.naming.Context;
              destroySubcontext(name: string): void;
              destroySubcontext(name: javax.naming.Name): void;
              _getContinuationContext(n: javax.naming.Name): javax.naming.Context;
              getEnvironment(): java.util.Hashtable<string,any>;
              getNameInNamespace(): string;
              getNameParser(name: string): javax.naming.NameParser;
              getNameParser(name: javax.naming.Name): javax.naming.NameParser;
              _getRootURLContext(a0: string, a1: java.util.Hashtable<any,any>): javax.naming.spi.ResolveResult;
(a0: string, a1: java.util.Hashtable<any,any>): javax.naming.spi.ResolveResult;
              _getURLPrefix(url: string): string;
              _getURLSuffix(prefix: string, url: string): javax.naming.Name;
              list(name: string): javax.naming.NamingEnumeration<javax.naming.NameClassPair>;
              list(name: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.NameClassPair>;
              listBindings(name: string): javax.naming.NamingEnumeration<javax.naming.Binding>;
              listBindings(name: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.Binding>;
              lookup(name: string): any;
              lookup(name: javax.naming.Name): any;
              lookupLink(name: string): any;
              lookupLink(name: javax.naming.Name): any;
              rebind(name: string, obj: any): void;
              rebind(name: javax.naming.Name, obj: any): void;
              removeFromEnvironment(propName: string): any;
              rename(oldName: string, newName: string): void;
              rename(name: javax.naming.Name, newName: javax.naming.Name): void;
              unbind(name: string): void;
              unbind(name: javax.naming.Name): void;
              _urlEquals(url1: string, url2: string): boolean;
              _myEnv: java.util.Hashtable<string,any>;
            }
            interface GenericURLContext extends CombineTypes<[_GenericURLContext, java.lang.Object, javax.naming.Context]> {}
            interface _GenericURLDirContext$$static extends ClassLike {
              _new(env: java.util.Hashtable<any,any>): GenericURLDirContext;
            }
            let GenericURLDirContext: _GenericURLDirContext$$static;
            interface _GenericURLDirContext {
              bind(name: string, obj: any, attrs: javax.naming.directory.Attributes): void;
              bind(name: javax.naming.Name, obj: any, attrs: javax.naming.directory.Attributes): void;
              createSubcontext(name: string, attrs: javax.naming.directory.Attributes): javax.naming.directory.DirContext;
              createSubcontext(name: javax.naming.Name, attrs: javax.naming.directory.Attributes): javax.naming.directory.DirContext;
              getAttributes(name: string): javax.naming.directory.Attributes;
              getAttributes(name: javax.naming.Name): javax.naming.directory.Attributes;
              getAttributes(name: string, attrIds: string[]): javax.naming.directory.Attributes;
              getAttributes(name: javax.naming.Name, attrIds: string[]): javax.naming.directory.Attributes;
              _getContinuationDirContext(n: javax.naming.Name): javax.naming.directory.DirContext;
              getSchema(name: string): javax.naming.directory.DirContext;
              getSchema(name: javax.naming.Name): javax.naming.directory.DirContext;
              getSchemaClassDefinition(name: string): javax.naming.directory.DirContext;
              getSchemaClassDefinition(name: javax.naming.Name): javax.naming.directory.DirContext;
              modifyAttributes(name: string, mod_op: int, attrs: javax.naming.directory.Attributes): void;
              modifyAttributes(name: javax.naming.Name, mod_op: int, attrs: javax.naming.directory.Attributes): void;
              modifyAttributes(name: string, mods: javax.naming.directory.ModificationItem[]): void;
              modifyAttributes(name: javax.naming.Name, mods: javax.naming.directory.ModificationItem[]): void;
              rebind(name: string, obj: any, attrs: javax.naming.directory.Attributes): void;
              rebind(name: javax.naming.Name, obj: any, attrs: javax.naming.directory.Attributes): void;
              search(name: string, matchingAttributes: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              search(name: javax.naming.Name, matchingAttributes: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              search(name: string, matchingAttributes: javax.naming.directory.Attributes, attributesToReturn: string[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              search(name: javax.naming.Name, matchingAttributes: javax.naming.directory.Attributes, attributesToReturn: string[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              search(name: string, filter: string, cons: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              search(name: javax.naming.Name, filter: string, cons: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              search(name: string, filterExpr: string, filterArgs: any[], cons: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              search(name: javax.naming.Name, filterExpr: string, filterArgs: any[], cons: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
            }
            interface GenericURLDirContext extends CombineTypes<[_GenericURLDirContext, com.sun.jndi.toolkit.url.GenericURLContext, javax.naming.directory.DirContext]> {}
            interface _Uri$$static extends ClassLike {
              new(uri: string): Uri;
              _new(): Uri;
            }
            let Uri: _Uri$$static;
            interface _Uri {
              _acceptsFragment(): boolean;
              _checkSchemeOnly(uri: string, scheme: string): boolean;
              getHost(): string;
              getPath(): string;
              getPort(): int;
              getQuery(): string;
              getScheme(): string;
              _init(uri: string): void;
              _isSchemeOnly(uri: string): boolean;
              _newInvalidURISchemeException(uri: string): java.net.MalformedURLException;
              _parse(uri: string, mode: Uri$ParseMode): void;
              _parseCompat(uri: string): void;
              _parseLegacy(uri: string): void;
              _parseMode(): Uri$ParseMode;
              _parseStrict(uri: string): void;
              toString(): string;
              _fragment: string;
              _hasAuthority: boolean;
              _host: string;
              _path: string;
              _port: int;
              _query: string;
              _scheme: string;
              _uri: string;
            }
            interface Uri extends CombineTypes<[_Uri, java.lang.Object]> {}
            interface _Uri$ParseMode$$static extends ClassLike {
              valueOf(name: string): Uri$ParseMode;
              values(): Uri$ParseMode[];
              readonly COMPAT: Uri$ParseMode;
              readonly LEGACY: Uri$ParseMode;
              readonly STRICT: Uri$ParseMode;
            }
            let Uri$ParseMode: _Uri$ParseMode$$static;
            interface _Uri$ParseMode {
            }
            interface Uri$ParseMode extends CombineTypes<[_Uri$ParseMode]> {}
            interface _UrlUtil$$static extends ClassLike {
              decode(s: string): string;
              decode(s: string, enc: string): string;
              encode(s: string, enc: string): string;
            }
            let UrlUtil: _UrlUtil$$static;
            interface _UrlUtil {
            }
            interface UrlUtil extends CombineTypes<[_UrlUtil, java.lang.Object]> {}
          }
        }
        module url {
          module ldap {
            interface _ldapURLContext$$static extends ClassLike {
              _setFilterUsingURL(url: jndi.ldap.LdapURL): string;
              _setSearchControlsUsingURL(url: jndi.ldap.LdapURL): javax.naming.directory.SearchControls;
              _new(env: java.util.Hashtable<any,any>): ldapURLContext;
            }
            let ldapURLContext: _ldapURLContext$$static;
            interface _ldapURLContext {
              bind(name: string, obj: any): void;
              bind(name: javax.naming.Name, obj: any): void;
              bind(name: string, obj: any, attrs: javax.naming.directory.Attributes): void;
              bind(name: javax.naming.Name, obj: any, attrs: javax.naming.directory.Attributes): void;
              composeName(name: string, prefix: string): string;
              composeName(name: javax.naming.Name, prefix: javax.naming.Name): javax.naming.Name;
              createSubcontext(name: string): javax.naming.Context;
              createSubcontext(name: javax.naming.Name): javax.naming.Context;
              createSubcontext(name: string, attrs: javax.naming.directory.Attributes): javax.naming.directory.DirContext;
              createSubcontext(name: javax.naming.Name, attrs: javax.naming.directory.Attributes): javax.naming.directory.DirContext;
              destroySubcontext(name: string): void;
              destroySubcontext(name: javax.naming.Name): void;
              getAttributes(name: string): javax.naming.directory.Attributes;
              getAttributes(name: javax.naming.Name): javax.naming.directory.Attributes;
              getAttributes(name: string, attrIds: string[]): javax.naming.directory.Attributes;
              getAttributes(name: javax.naming.Name, attrIds: string[]): javax.naming.directory.Attributes;
              getNameParser(name: string): javax.naming.NameParser;
              getNameParser(name: javax.naming.Name): javax.naming.NameParser;
              _getRootURLContext(name: string, env: java.util.Hashtable<any,any>): javax.naming.spi.ResolveResult;
              getSchema(name: string): javax.naming.directory.DirContext;
              getSchema(name: javax.naming.Name): javax.naming.directory.DirContext;
              getSchemaClassDefinition(name: string): javax.naming.directory.DirContext;
              getSchemaClassDefinition(name: javax.naming.Name): javax.naming.directory.DirContext;
              _getURLSuffix(prefix: string, url: string): javax.naming.Name;
              list(name: string): javax.naming.NamingEnumeration<javax.naming.NameClassPair>;
              list(name: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.NameClassPair>;
              listBindings(name: string): javax.naming.NamingEnumeration<javax.naming.Binding>;
              listBindings(name: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.Binding>;
              lookup(name: string): any;
              lookup(name: javax.naming.Name): any;
              lookupLink(name: string): any;
              lookupLink(name: javax.naming.Name): any;
              modifyAttributes(name: string, mod_op: int, attrs: javax.naming.directory.Attributes): void;
              modifyAttributes(name: javax.naming.Name, mod_op: int, attrs: javax.naming.directory.Attributes): void;
              modifyAttributes(name: string, mods: javax.naming.directory.ModificationItem[]): void;
              modifyAttributes(name: javax.naming.Name, mods: javax.naming.directory.ModificationItem[]): void;
              rebind(name: string, obj: any): void;
              rebind(name: javax.naming.Name, obj: any): void;
              rebind(name: string, obj: any, attrs: javax.naming.directory.Attributes): void;
              rebind(name: javax.naming.Name, obj: any, attrs: javax.naming.directory.Attributes): void;
              rename(oldName: string, newName: string): void;
              rename(oldName: javax.naming.Name, newName: javax.naming.Name): void;
              search(name: string, matchingAttributes: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              search(name: javax.naming.Name, matchingAttributes: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              search(name: string, matchingAttributes: javax.naming.directory.Attributes, attributesToReturn: string[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              search(name: javax.naming.Name, matchingAttributes: javax.naming.directory.Attributes, attributesToReturn: string[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              search(name: string, filter: string, cons: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              search(name: javax.naming.Name, filter: string, cons: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              search(name: string, filterExpr: string, filterArgs: any[], cons: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              search(name: javax.naming.Name, filterExpr: string, filterArgs: any[], cons: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              _searchUsingURL(name: string): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
              unbind(name: string): void;
              unbind(name: javax.naming.Name): void;
            }
            interface ldapURLContext extends CombineTypes<[_ldapURLContext, com.sun.jndi.toolkit.url.GenericURLDirContext]> {}
            interface _ldapURLContextFactory$$static extends ClassLike {
              _getUsingURLIgnoreRootDN(url: string, env: java.util.Hashtable<any,any>): javax.naming.spi.ResolveResult;
              new(): ldapURLContextFactory;
            }
            let ldapURLContextFactory: _ldapURLContextFactory$$static;
            interface _ldapURLContextFactory {
              getObjectInstance(urlInfo: any, name: javax.naming.Name, nameCtx: javax.naming.Context, env: java.util.Hashtable<any,any>): any;
            }
            interface ldapURLContextFactory extends CombineTypes<[_ldapURLContextFactory, javax.naming.spi.ObjectFactory, java.lang.Object]> {}
          }
          module ldaps {
            interface _ldapsURLContextFactory$$static extends ClassLike {
              new(): ldapsURLContextFactory;
            }
            let ldapsURLContextFactory: _ldapsURLContextFactory$$static;
            interface _ldapsURLContextFactory {
            }
            interface ldapsURLContextFactory extends CombineTypes<[_ldapsURLContextFactory, com.sun.jndi.url.ldap.ldapURLContextFactory]> {}
          }
        }
      }
      module naming {
        module internal {
          interface _FactoryEnumeration$$static extends ClassLike {
            _new(factories: java.util.List<NamedWeakReference<any>>, loader: java.lang.ClassLoader): FactoryEnumeration;
          }
          let FactoryEnumeration: _FactoryEnumeration$$static;
          interface _FactoryEnumeration {
            hasMore(): boolean;
            next(): any;
            _factories: java.util.List<NamedWeakReference<any>>;
            _loader: java.lang.ClassLoader;
            _posn: int;
          }
          interface FactoryEnumeration extends CombineTypes<[_FactoryEnumeration, java.lang.Object]> {}
          interface _NamedWeakReference$$static<T> extends ClassLike {
            _new(referent: T, name: string): NamedWeakReference<T>;
          }
          let NamedWeakReference: _NamedWeakReference$$static<T>;
          interface _NamedWeakReference<T> {
            _getName(): string;
            _name: string;
          }
          interface NamedWeakReference<T> extends CombineTypes<[_NamedWeakReference<T>, java.lang.ref.WeakReference<T>]> {}
          interface _NamingManagerHelper$$static extends ClassLike {
            _createObjectFromFactories(obj: any, name: javax.naming.Name, nameCtx: javax.naming.Context, environment: java.util.Hashtable<any,any>, attrs: javax.naming.directory.Attributes): any;
            _createObjectFromFactories(obj: any, name: javax.naming.Name, nameCtx: javax.naming.Context, environment: java.util.Hashtable<any,any>): any;
            getDirObjectInstance(refInfo: any, name: javax.naming.Name, nameCtx: javax.naming.Context, environment: java.util.Hashtable<any,any>, attrs: javax.naming.directory.Attributes, factoryFilter: java.util.function.Predicate<java.lang.Class<any>>): any;
            getObjectFactoryBuilder(): javax.naming.spi.ObjectFactoryBuilder;
            _getObjectFactoryFromReference(ref: javax.naming.Reference, factoryName: string, filter: java.util.function.Predicate<java.lang.Class<any>>): javax.naming.spi.ObjectFactory;
            getObjectInstance(refInfo: any, name: javax.naming.Name, nameCtx: javax.naming.Context, environment: java.util.Hashtable<any,any>, factoryFilter: java.util.function.Predicate<java.lang.Class<any>>): any;
            _getURLObject(scheme: string, urlInfo: any, name: javax.naming.Name, nameCtx: javax.naming.Context, environment: java.util.Hashtable<any,any>): any;
            _getURLScheme(str: string): string;
            _processURL(refInfo: any, name: javax.naming.Name, nameCtx: javax.naming.Context, environment: java.util.Hashtable<any,any>): any;
            _processURLAddrs(ref: javax.naming.Reference, name: javax.naming.Name, nameCtx: javax.naming.Context, environment: java.util.Hashtable<any,any>): any;
            setObjectFactoryBuilder(builder: javax.naming.spi.ObjectFactoryBuilder): void;
            _DEFAULT_PKG_PREFIX: string;
            _helper: VersionHelper;
            _object_factory_builder: javax.naming.spi.ObjectFactoryBuilder;
            new(): NamingManagerHelper;
          }
          let NamingManagerHelper: _NamingManagerHelper$$static;
          interface _NamingManagerHelper {
          }
          interface NamingManagerHelper extends CombineTypes<[_NamingManagerHelper, java.lang.Object]> {}
          interface _ObjectFactoriesFilter$$static extends ClassLike {
            checkGlobalFilter(serialClass: java.lang.Class<any>): boolean;
            _checkInput(filter: ObjectFactoriesFilter$ConfiguredFilter, serialClass: ObjectFactoriesFilter$FactoryInfo): boolean;
            checkLdapFilter(serialClass: java.lang.Class<any>): boolean;
            checkRmiFilter(serialClass: java.lang.Class<any>): boolean;
            _getFilterPropertyValue(propertyName: string, defaultValue: string): string;
            _initializeFilter(filterPropertyName: string, filterDefaultValue: string): ObjectFactoriesFilter$ConfiguredFilter;
            _DEFAULT_GLOBAL_SP_VALUE: string;
            _DEFAULT_LDAP_SP_VALUE: string;
            _DEFAULT_RMI_SP_VALUE: string;
            _GLOBAL_FACTORIES_FILTER_PROPNAME: string;
            _GLOBAL_FILTER: ObjectFactoriesFilter$ConfiguredFilter;
            _LDAP_FACTORIES_FILTER_PROPNAME: string;
            _LDAP_FILTER: ObjectFactoriesFilter$ConfiguredFilter;
            _RMI_FACTORIES_FILTER_PROPNAME: string;
            _RMI_FILTER: ObjectFactoriesFilter$ConfiguredFilter;
          }
          let ObjectFactoriesFilter: _ObjectFactoriesFilter$$static;
          interface _ObjectFactoriesFilter {
          }
          interface ObjectFactoriesFilter extends CombineTypes<[_ObjectFactoriesFilter, java.lang.Object]> {}
          interface _ObjectFactoriesFilter$ConfiguredFilter$$static extends ClassLike {
          }
          let ObjectFactoriesFilter$ConfiguredFilter: _ObjectFactoriesFilter$ConfiguredFilter$$static;
          interface _ObjectFactoriesFilter$ConfiguredFilter {
            filter(): java.io.ObjectInputFilter;
(): java.io.ObjectInputFilter;
          }
          interface ObjectFactoriesFilter$ConfiguredFilter extends CombineTypes<[_ObjectFactoriesFilter$ConfiguredFilter, java.lang.Object]> {}
          interface _ObjectFactoriesFilter$FactoryInfo$$static extends ClassLike {
          }
          let ObjectFactoriesFilter$FactoryInfo: _ObjectFactoriesFilter$FactoryInfo$$static;
          interface _ObjectFactoriesFilter$FactoryInfo {
            arrayLength(): long;
            depth(): long;
            references(): long;
            streamBytes(): long;
          }
          interface ObjectFactoriesFilter$FactoryInfo extends CombineTypes<[_ObjectFactoriesFilter$FactoryInfo, java.io.ObjectInputFilter$FilterInfo, java.lang.Object]> {}
          interface _ObjectFactoriesFilter$InvalidFilter$$static extends ClassLike {
          }
          let ObjectFactoriesFilter$InvalidFilter: _ObjectFactoriesFilter$InvalidFilter$$static;
          interface _ObjectFactoriesFilter$InvalidFilter {
            equals(o: any): boolean;
            error(): java.lang.IllegalArgumentException;
            filter(): java.io.ObjectInputFilter;
            filterPropertyName(): string;
            hashCode(): int;
            toString(): string;
          }
          interface ObjectFactoriesFilter$InvalidFilter extends CombineTypes<[_ObjectFactoriesFilter$InvalidFilter, java.lang.Record, com.sun.naming.internal.ObjectFactoriesFilter$ConfiguredFilter]> {}
          interface _ObjectFactoriesFilter$ValidFilter$$static extends ClassLike {
          }
          let ObjectFactoriesFilter$ValidFilter: _ObjectFactoriesFilter$ValidFilter$$static;
          interface _ObjectFactoriesFilter$ValidFilter {
            equals(o: any): boolean;
            filter(): java.io.ObjectInputFilter;
            hashCode(): int;
            toString(): string;
          }
          interface ObjectFactoriesFilter$ValidFilter extends CombineTypes<[_ObjectFactoriesFilter$ValidFilter, java.lang.Record, com.sun.naming.internal.ObjectFactoriesFilter$ConfiguredFilter]> {}
          interface _ResourceManager$$static extends ClassLike {
            _getApplicationResources(): java.util.Hashtable<string,any>;
            getFactories(propName: string, env: java.util.Hashtable<any,any>, ctx: javax.naming.Context): FactoryEnumeration;
            getFactory(propName: string, env: java.util.Hashtable<any,any>, ctx: javax.naming.Context, classSuffix: string, defaultPkgPrefix: string): any;
            getInitialEnvironment(env: java.util.Hashtable<any,any>): java.util.Hashtable<any,any>;
            getProperty(propName: string, env: java.util.Hashtable<any,any>, ctx: javax.naming.Context, concat: boolean): string;
            _getProviderResource(obj: any): java.util.Hashtable<string,any>;
            _isListProperty(prop: string): boolean;
            _mergeTables(props1: java.util.Hashtable<string,any>, props2: java.util.Hashtable<string,any>): void;
            _APP_RESOURCE_FILE_NAME: string;
            _DISABLE_APP_RESOURCE_FILES: string;
            _JRE_CONF_PROPERTY_FILE_NAME: string;
            _NO_FACTORY: java.lang.ref.WeakReference<any>;
            _PROVIDER_RESOURCE_FILE_NAME: string;
            _factoryCache: java.util.WeakHashMap<java.lang.ClassLoader,java.util.Map<string,java.util.List<NamedWeakReference<any>>>>;
            _helper: VersionHelper;
            _listProperties: string[];
            _propertiesCache: java.util.WeakHashMap<any,java.util.Hashtable<string,any>>;
            _urlFactoryCache: java.util.WeakHashMap<java.lang.ClassLoader,java.util.Map<string,java.lang.ref.WeakReference<any>>>;
          }
          let ResourceManager: _ResourceManager$$static;
          interface _ResourceManager {
          }
          interface ResourceManager extends CombineTypes<[_ResourceManager, java.lang.Object]> {}
          interface _VersionHelper$$static extends ClassLike {
            _getUrlArray(codebase: string): java.net.URL[];
            getVersionHelper(): VersionHelper;
            _resolveName(c: java.lang.Class<any>, name: string): string;
            readonly CONTROL_FACTORIES: int;
            readonly DNS_URL: int;
            readonly INITIAL_CONTEXT_FACTORY: int;
            readonly OBJECT_FACTORIES: int;
            _PROPS: string[];
            readonly PROVIDER_URL: int;
            readonly STATE_FACTORIES: int;
            _TRUST_URL_CODE_BASE: boolean;
            readonly URL_PKG_PREFIXES: int;
            _helper: VersionHelper;
          }
          let VersionHelper: _VersionHelper$$static;
          interface _VersionHelper {
            _getContextClassLoader(): java.lang.ClassLoader;
            _getJavaHomeConfStream(filename: string): java.io.InputStream;
            _getJndiProperties(): string[];
            _getJndiProperty(i: int): string;
            _getResourceAsStream(c: java.lang.Class<any>, name: string): java.io.InputStream;
            _getResources(cl: java.lang.ClassLoader, name: string): javax.naming.NamingEnumeration<java.io.InputStream>;
            loadClass(className: string): java.lang.Class<any>;
            loadClass(className: string, codebase: string): java.lang.Class<any>;
            _loadClass(className: string, initialize: boolean, cl: java.lang.ClassLoader): java.lang.Class<any>;
            _loadClass(className: string, cl: java.lang.ClassLoader): java.lang.Class<any>;
            loadClassWithoutInit(className: string): java.lang.Class<any>;
          }
          interface VersionHelper extends CombineTypes<[_VersionHelper, java.lang.Object]> {}
          interface _VersionHelper$InputStreamEnumeration$$static extends ClassLike {
            _new(a0: java.util.Enumeration<java.net.URL>): VersionHelper$InputStreamEnumeration;
          }
          let VersionHelper$InputStreamEnumeration: _VersionHelper$InputStreamEnumeration$$static;
          interface _VersionHelper$InputStreamEnumeration {
            close(): void;
            _getNextElement(): java.io.InputStream;
            hasMore(): boolean;
            hasMoreElements(): boolean;
            next(): java.io.InputStream;
            next(): any;
            nextElement(): java.io.InputStream;
            nextElement(): any;
            _nextElement: java.io.InputStream;
            _urls: java.util.Enumeration<java.net.URL>;
          }
          interface VersionHelper$InputStreamEnumeration extends CombineTypes<[_VersionHelper$InputStreamEnumeration, java.lang.Object, javax.naming.NamingEnumeration<java.io.InputStream>]> {}
        }
      }
    }
  }
  module javax {
    module naming {
      module directory {
        interface _Attribute$$static extends ClassLike {
          readonly serialVersionUID: long;
        }
        let Attribute: _Attribute$$static;
        interface _Attribute {
          add(a0: any): boolean;
          add(a0: int, a1: any): void;
          clear(): void;
          clone(): any;
          contains(a0: any): boolean;
          get(): any;
          get(a0: int): any;
          getAll(): NamingEnumeration<any>;
          getAttributeDefinition(): DirContext;
          getAttributeSyntaxDefinition(): DirContext;
          getID(): string;
          isOrdered(): boolean;
          remove(a0: any): boolean;
          remove(a0: int): any;
          set(a0: int, a1: any): any;
          size(): int;
        }
        interface Attribute extends CombineTypes<[_Attribute, java.lang.Cloneable, java.lang.Object, java.io.Serializable]> {}
        interface _AttributeInUseException$$static extends ClassLike {
          _serialVersionUID: long;
          new(explanation: string): AttributeInUseException;
          new(): AttributeInUseException;
        }
        let AttributeInUseException: _AttributeInUseException$$static;
        interface _AttributeInUseException {
        }
        interface AttributeInUseException extends CombineTypes<[_AttributeInUseException, javax.naming.NamingException]> {}
        interface _AttributeModificationException$$static extends ClassLike {
          _serialVersionUID: long;
          new(explanation: string): AttributeModificationException;
          new(): AttributeModificationException;
        }
        let AttributeModificationException: _AttributeModificationException$$static;
        interface _AttributeModificationException {
          getUnexecutedModifications(): ModificationItem[];
          setUnexecutedModifications(e: ModificationItem[]): void;
          toString(): string;
          _unexecs: ModificationItem[];
        }
        interface AttributeModificationException extends CombineTypes<[_AttributeModificationException, javax.naming.NamingException]> {}
        interface _Attributes$$static extends ClassLike {
        }
        let Attributes: _Attributes$$static;
        interface _Attributes {
          clone(): any;
          get(a0: string): Attribute;
          getAll(): NamingEnumeration<Attribute>;
          getIDs(): NamingEnumeration<string>;
          isCaseIgnored(): boolean;
          put(a0: string, a1: any): Attribute;
          put(a0: Attribute): Attribute;
          remove(a0: string): Attribute;
          size(): int;
        }
        interface Attributes extends CombineTypes<[_Attributes, java.lang.Cloneable, java.lang.Object, java.io.Serializable]> {}
        interface _BasicAttribute$$static extends ClassLike {
          _arrayEquals(a1: any, a2: any): boolean;
          _valueEquals(obj1: any, obj2: any): boolean;
          _serialVersionUID: long;
          new(id: string): BasicAttribute;
          new(id: string, value: any): BasicAttribute;
          new(id: string, ordered: boolean): BasicAttribute;
          new(id: string, value: any, ordered: boolean): BasicAttribute;
        }
        let BasicAttribute: _BasicAttribute$$static;
        interface _BasicAttribute {
          add(attrVal: any): boolean;
          add(ix: int, attrVal: any): void;
          clear(): void;
          clone(): any;
          contains(attrVal: any): boolean;
          equals(obj: any): boolean;
          _find(target: any): int;
          get(): any;
          get(ix: int): any;
          getAll(): NamingEnumeration<any>;
          getAttributeDefinition(): DirContext;
          getAttributeSyntaxDefinition(): DirContext;
          getID(): string;
          hashCode(): int;
          isOrdered(): boolean;
          _readObject(s: java.io.ObjectInputStream): void;
          remove(attrval: any): boolean;
          remove(ix: int): any;
          set(ix: int, attrVal: any): any;
          size(): int;
          toString(): string;
          _writeObject(s: java.io.ObjectOutputStream): void;
          _attrID: string;
          _ordered: boolean;
          _values: java.util.Vector<any>;
        }
        interface BasicAttribute extends CombineTypes<[_BasicAttribute, javax.naming.directory.Attribute, java.lang.Object]> {}
        interface _BasicAttribute$ValuesEnumImpl$$static extends ClassLike {
          _new(this$0: BasicAttribute): BasicAttribute$ValuesEnumImpl;
        }
        let BasicAttribute$ValuesEnumImpl: _BasicAttribute$ValuesEnumImpl$$static;
        interface _BasicAttribute$ValuesEnumImpl {
          close(): void;
          hasMore(): boolean;
          hasMoreElements(): boolean;
          next(): any;
          nextElement(): any;
          _list: java.util.Enumeration<any>;
        }
        interface BasicAttribute$ValuesEnumImpl extends CombineTypes<[_BasicAttribute$ValuesEnumImpl, NamingEnumeration<any>, java.lang.Object]> {}
        interface _BasicAttributes$$static extends ClassLike {
          _serialVersionUID: long;
          new(): BasicAttributes;
          new(ignoreCase: boolean): BasicAttributes;
          new(attrID: string, val: any): BasicAttributes;
          new(attrID: string, val: any, ignoreCase: boolean): BasicAttributes;
        }
        let BasicAttributes: _BasicAttributes$$static;
        interface _BasicAttributes {
          clone(): any;
          equals(obj: any): boolean;
          get(attrID: string): Attribute;
          getAll(): NamingEnumeration<Attribute>;
          getIDs(): NamingEnumeration<string>;
          hashCode(): int;
          isCaseIgnored(): boolean;
          put(attrID: string, val: any): Attribute;
          put(attr: Attribute): Attribute;
          _readObject(s: java.io.ObjectInputStream): void;
          remove(attrID: string): Attribute;
          size(): int;
          toString(): string;
          _writeObject(s: java.io.ObjectOutputStream): void;
          _attrs: java.util.Hashtable<string,Attribute>;
          _ignoreCase: boolean;
        }
        interface BasicAttributes extends CombineTypes<[_BasicAttributes, javax.naming.directory.Attributes, java.lang.Object]> {}
        interface _BasicAttributes$AttrEnumImpl$$static extends ClassLike {
          new(this$0: BasicAttributes): BasicAttributes$AttrEnumImpl;
        }
        let BasicAttributes$AttrEnumImpl: _BasicAttributes$AttrEnumImpl$$static;
        interface _BasicAttributes$AttrEnumImpl {
          close(): void;
          hasMore(): boolean;
          hasMoreElements(): boolean;
          next(): Attribute;
          next(): any;
          nextElement(): Attribute;
          nextElement(): any;
          _elements: java.util.Enumeration<Attribute>;
        }
        interface BasicAttributes$AttrEnumImpl extends CombineTypes<[_BasicAttributes$AttrEnumImpl, java.lang.Object, NamingEnumeration<Attribute>]> {}
        interface _BasicAttributes$IDEnumImpl$$static extends ClassLike {
          new(this$0: BasicAttributes): BasicAttributes$IDEnumImpl;
        }
        let BasicAttributes$IDEnumImpl: _BasicAttributes$IDEnumImpl$$static;
        interface _BasicAttributes$IDEnumImpl {
          close(): void;
          hasMore(): boolean;
          hasMoreElements(): boolean;
          next(): string;
          next(): any;
          nextElement(): string;
          nextElement(): any;
          _elements: java.util.Enumeration<Attribute>;
        }
        interface BasicAttributes$IDEnumImpl extends CombineTypes<[_BasicAttributes$IDEnumImpl, NamingEnumeration<string>, java.lang.Object]> {}
        interface _DirContext$$static extends ClassLike {
          readonly ADD_ATTRIBUTE: int;
          readonly REMOVE_ATTRIBUTE: int;
          readonly REPLACE_ATTRIBUTE: int;
        }
        let DirContext: _DirContext$$static;
        interface _DirContext {
          bind(a0: Name, a1: any, a2: Attributes): void;
          bind(a0: string, a1: any, a2: Attributes): void;
          createSubcontext(a0: Name, a1: Attributes): DirContext;
          createSubcontext(a0: string, a1: Attributes): DirContext;
          getAttributes(a0: Name): Attributes;
          getAttributes(a0: string): Attributes;
          getAttributes(a0: Name, a1: string[]): Attributes;
          getAttributes(a0: string, a1: string[]): Attributes;
          getSchema(a0: Name): DirContext;
          getSchema(a0: string): DirContext;
          getSchemaClassDefinition(a0: Name): DirContext;
          getSchemaClassDefinition(a0: string): DirContext;
          modifyAttributes(a0: Name, a1: int, a2: Attributes): void;
          modifyAttributes(a0: string, a1: int, a2: Attributes): void;
          modifyAttributes(a0: Name, a1: ModificationItem[]): void;
          modifyAttributes(a0: string, a1: ModificationItem[]): void;
          rebind(a0: Name, a1: any, a2: Attributes): void;
          rebind(a0: string, a1: any, a2: Attributes): void;
          search(a0: Name, a1: Attributes, a2: string[]): NamingEnumeration<SearchResult>;
          search(a0: string, a1: Attributes, a2: string[]): NamingEnumeration<SearchResult>;
          search(a0: Name, a1: Attributes): NamingEnumeration<SearchResult>;
          search(a0: string, a1: Attributes): NamingEnumeration<SearchResult>;
          search(a0: Name, a1: string, a2: SearchControls): NamingEnumeration<SearchResult>;
          search(a0: string, a1: string, a2: SearchControls): NamingEnumeration<SearchResult>;
          search(a0: Name, a1: string, a2: any[], a3: SearchControls): NamingEnumeration<SearchResult>;
          search(a0: string, a1: string, a2: any[], a3: SearchControls): NamingEnumeration<SearchResult>;
        }
        interface DirContext extends CombineTypes<[_DirContext, java.lang.Object, javax.naming.Context]> {}
        interface _InitialDirContext$$static extends ClassLike {
          _new(lazy: boolean): InitialDirContext;
          new(): InitialDirContext;
          new(environment: java.util.Hashtable<any,any>): InitialDirContext;
        }
        let InitialDirContext: _InitialDirContext$$static;
        interface _InitialDirContext {
          bind(name: string, obj: any, attrs: Attributes): void;
          bind(name: Name, obj: any, attrs: Attributes): void;
          createSubcontext(name: string, attrs: Attributes): DirContext;
          createSubcontext(name: Name, attrs: Attributes): DirContext;
          getAttributes(name: string): Attributes;
          getAttributes(name: string, attrIds: string[]): Attributes;
          getAttributes(name: Name): Attributes;
          getAttributes(name: Name, attrIds: string[]): Attributes;
          getSchema(name: string): DirContext;
          getSchema(name: Name): DirContext;
          getSchemaClassDefinition(name: string): DirContext;
          getSchemaClassDefinition(name: Name): DirContext;
          _getURLOrDefaultInitDirCtx(name: string): DirContext;
          _getURLOrDefaultInitDirCtx(name: Name): DirContext;
          modifyAttributes(name: string, mod_op: int, attrs: Attributes): void;
          modifyAttributes(name: Name, mod_op: int, attrs: Attributes): void;
          modifyAttributes(name: string, mods: ModificationItem[]): void;
          modifyAttributes(name: Name, mods: ModificationItem[]): void;
          rebind(name: string, obj: any, attrs: Attributes): void;
          rebind(name: Name, obj: any, attrs: Attributes): void;
          search(name: string, matchingAttributes: Attributes): NamingEnumeration<SearchResult>;
          search(name: Name, matchingAttributes: Attributes): NamingEnumeration<SearchResult>;
          search(name: string, matchingAttributes: Attributes, attributesToReturn: string[]): NamingEnumeration<SearchResult>;
          search(name: Name, matchingAttributes: Attributes, attributesToReturn: string[]): NamingEnumeration<SearchResult>;
          search(name: string, filter: string, cons: SearchControls): NamingEnumeration<SearchResult>;
          search(name: Name, filter: string, cons: SearchControls): NamingEnumeration<SearchResult>;
          search(name: string, filterExpr: string, filterArgs: any[], cons: SearchControls): NamingEnumeration<SearchResult>;
          search(name: Name, filterExpr: string, filterArgs: any[], cons: SearchControls): NamingEnumeration<SearchResult>;
        }
        interface InitialDirContext extends CombineTypes<[_InitialDirContext, javax.naming.InitialContext, javax.naming.directory.DirContext]> {}
        interface _InvalidAttributeIdentifierException$$static extends ClassLike {
          _serialVersionUID: long;
          new(explanation: string): InvalidAttributeIdentifierException;
          new(): InvalidAttributeIdentifierException;
        }
        let InvalidAttributeIdentifierException: _InvalidAttributeIdentifierException$$static;
        interface _InvalidAttributeIdentifierException {
        }
        interface InvalidAttributeIdentifierException extends CombineTypes<[_InvalidAttributeIdentifierException, javax.naming.NamingException]> {}
        interface _InvalidAttributeValueException$$static extends ClassLike {
          _serialVersionUID: long;
          new(explanation: string): InvalidAttributeValueException;
          new(): InvalidAttributeValueException;
        }
        let InvalidAttributeValueException: _InvalidAttributeValueException$$static;
        interface _InvalidAttributeValueException {
        }
        interface InvalidAttributeValueException extends CombineTypes<[_InvalidAttributeValueException, javax.naming.NamingException]> {}
        interface _InvalidAttributesException$$static extends ClassLike {
          _serialVersionUID: long;
          new(explanation: string): InvalidAttributesException;
          new(): InvalidAttributesException;
        }
        let InvalidAttributesException: _InvalidAttributesException$$static;
        interface _InvalidAttributesException {
        }
        interface InvalidAttributesException extends CombineTypes<[_InvalidAttributesException, javax.naming.NamingException]> {}
        interface _InvalidSearchControlsException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): InvalidSearchControlsException;
          new(msg: string): InvalidSearchControlsException;
        }
        let InvalidSearchControlsException: _InvalidSearchControlsException$$static;
        interface _InvalidSearchControlsException {
        }
        interface InvalidSearchControlsException extends CombineTypes<[_InvalidSearchControlsException, javax.naming.NamingException]> {}
        interface _InvalidSearchFilterException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): InvalidSearchFilterException;
          new(msg: string): InvalidSearchFilterException;
        }
        let InvalidSearchFilterException: _InvalidSearchFilterException$$static;
        interface _InvalidSearchFilterException {
        }
        interface InvalidSearchFilterException extends CombineTypes<[_InvalidSearchFilterException, javax.naming.NamingException]> {}
        interface _ModificationItem$$static extends ClassLike {
          _serialVersionUID: long;
          new(mod_op: int, attr: Attribute): ModificationItem;
        }
        let ModificationItem: _ModificationItem$$static;
        interface _ModificationItem {
          getAttribute(): Attribute;
          getModificationOp(): int;
          toString(): string;
          _attr: Attribute;
          _mod_op: int;
        }
        interface ModificationItem extends CombineTypes<[_ModificationItem, java.lang.Object, java.io.Serializable]> {}
        interface _NoSuchAttributeException$$static extends ClassLike {
          _serialVersionUID: long;
          new(explanation: string): NoSuchAttributeException;
          new(): NoSuchAttributeException;
        }
        let NoSuchAttributeException: _NoSuchAttributeException$$static;
        interface _NoSuchAttributeException {
        }
        interface NoSuchAttributeException extends CombineTypes<[_NoSuchAttributeException, javax.naming.NamingException]> {}
        interface _SchemaViolationException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): SchemaViolationException;
          new(explanation: string): SchemaViolationException;
        }
        let SchemaViolationException: _SchemaViolationException$$static;
        interface _SchemaViolationException {
        }
        interface SchemaViolationException extends CombineTypes<[_SchemaViolationException, javax.naming.NamingException]> {}
        interface _SearchControls$$static extends ClassLike {
          readonly OBJECT_SCOPE: int;
          readonly ONELEVEL_SCOPE: int;
          readonly SUBTREE_SCOPE: int;
          _serialVersionUID: long;
          new(): SearchControls;
          new(scope: int, countlim: long, a2: int, timelim: string[], attrs: boolean, retobj: boolean): SearchControls;
        }
        let SearchControls: _SearchControls$$static;
        interface _SearchControls {
          getCountLimit(): long;
          getDerefLinkFlag(): boolean;
          getReturningAttributes(): string[];
          getReturningObjFlag(): boolean;
          getSearchScope(): int;
          getTimeLimit(): int;
          setCountLimit(limit: long): void;
          setDerefLinkFlag(on: boolean): void;
          setReturningAttributes(attrs: string[]): void;
          setReturningObjFlag(on: boolean): void;
          setSearchScope(scope: int): void;
          setTimeLimit(ms: int): void;
          _attributesToReturn: string[];
          _countLimit: long;
          _derefLink: boolean;
          _returnObj: boolean;
          _searchScope: int;
          _timeLimit: int;
        }
        interface SearchControls extends CombineTypes<[_SearchControls, java.lang.Object, java.io.Serializable]> {}
        interface _SearchResult$$static extends ClassLike {
          _serialVersionUID: long;
          new(name: string, obj: any, attrs: Attributes): SearchResult;
          new(name: string, obj: any, attrs: Attributes, isRelative: boolean): SearchResult;
          new(name: string, className: string, obj: any, attrs: Attributes): SearchResult;
          new(name: string, className: string, obj: any, attrs: Attributes, isRelative: boolean): SearchResult;
        }
        let SearchResult: _SearchResult$$static;
        interface _SearchResult {
          getAttributes(): Attributes;
          setAttributes(attrs: Attributes): void;
          toString(): string;
          _attrs: Attributes;
        }
        interface SearchResult extends CombineTypes<[_SearchResult, javax.naming.Binding]> {}
      }
      module event {
        interface _EventContext$$static extends ClassLike {
          readonly OBJECT_SCOPE: int;
          readonly ONELEVEL_SCOPE: int;
          readonly SUBTREE_SCOPE: int;
        }
        let EventContext: _EventContext$$static;
        interface _EventContext {
          addNamingListener(a0: Name, a1: int, a2: NamingListener): void;
          addNamingListener(a0: string, a1: int, a2: NamingListener): void;
          removeNamingListener(a0: NamingListener): void;
          targetMustExist(): boolean;
        }
        interface EventContext extends CombineTypes<[_EventContext, java.lang.Object, javax.naming.Context]> {}
        interface _EventDirContext$$static extends ClassLike {
        }
        let EventDirContext: _EventDirContext$$static;
        interface _EventDirContext {
          addNamingListener(a0: Name, a1: string, a2: naming.directory.SearchControls, a3: NamingListener): void;
          addNamingListener(a0: string, a1: string, a2: naming.directory.SearchControls, a3: NamingListener): void;
          addNamingListener(a0: Name, a1: string, a2: any[], a3: naming.directory.SearchControls, a4: NamingListener): void;
          addNamingListener(a0: string, a1: string, a2: any[], a3: naming.directory.SearchControls, a4: NamingListener): void;
        }
        interface EventDirContext extends CombineTypes<[_EventDirContext, javax.naming.event.EventContext, javax.naming.directory.DirContext, java.lang.Object]> {}
        interface _NamespaceChangeListener$$static extends ClassLike {
        }
        let NamespaceChangeListener: _NamespaceChangeListener$$static;
        interface _NamespaceChangeListener {
          objectAdded(a0: NamingEvent): void;
          objectRemoved(a0: NamingEvent): void;
          objectRenamed(a0: NamingEvent): void;
        }
        interface NamespaceChangeListener extends CombineTypes<[_NamespaceChangeListener, javax.naming.event.NamingListener, java.lang.Object]> {}
        interface _NamingEvent$$static extends ClassLike {
          readonly OBJECT_ADDED: int;
          readonly OBJECT_CHANGED: int;
          readonly OBJECT_REMOVED: int;
          readonly OBJECT_RENAMED: int;
          _serialVersionUID: long;
          new(source: EventContext, type: int, newBd: Binding, oldBd: Binding, changeInfo: any): NamingEvent;
        }
        let NamingEvent: _NamingEvent$$static;
        interface _NamingEvent {
          dispatch(listener: NamingListener): void;
          getChangeInfo(): any;
          getEventContext(): EventContext;
          getNewBinding(): Binding;
          getOldBinding(): Binding;
          getType(): int;
          _changeInfo: any;
          _newBinding: Binding;
          _oldBinding: Binding;
          _type: int;
        }
        interface NamingEvent extends CombineTypes<[_NamingEvent, java.util.EventObject]> {}
        interface _NamingExceptionEvent$$static extends ClassLike {
          _serialVersionUID: long;
          new(source: EventContext, exc: NamingException): NamingExceptionEvent;
        }
        let NamingExceptionEvent: _NamingExceptionEvent$$static;
        interface _NamingExceptionEvent {
          dispatch(listener: NamingListener): void;
          getEventContext(): EventContext;
          getException(): NamingException;
          _exception: NamingException;
        }
        interface NamingExceptionEvent extends CombineTypes<[_NamingExceptionEvent, java.util.EventObject]> {}
        interface _NamingListener$$static extends ClassLike {
        }
        let NamingListener: _NamingListener$$static;
        interface _NamingListener {
          namingExceptionThrown(a0: NamingExceptionEvent): void;
(a0: NamingExceptionEvent): void;
        }
        interface NamingListener extends CombineTypes<[_NamingListener, java.util.EventListener, java.lang.Object]> {}
        interface _ObjectChangeListener$$static extends ClassLike {
        }
        let ObjectChangeListener: _ObjectChangeListener$$static;
        interface _ObjectChangeListener {
          objectChanged(a0: NamingEvent): void;
(a0: NamingEvent): void;
        }
        interface ObjectChangeListener extends CombineTypes<[_ObjectChangeListener, javax.naming.event.NamingListener, java.lang.Object]> {}
      }
      module ldap {
        module spi {
          interface _LdapDnsProvider$$static extends ClassLike {
            _checkPermission(): java.lang.Void;
            _DNSPROVIDER_PERMISSION: java.lang.RuntimePermission;
            _new(): LdapDnsProvider;
          }
          let LdapDnsProvider: _LdapDnsProvider$$static;
          interface _LdapDnsProvider {
            lookupEndpoints(a0: string, a1: java.util.Map<any,any>): java.util.Optional<LdapDnsProviderResult>;
(a0: string, a1: java.util.Map<any,any>): java.util.Optional<LdapDnsProviderResult>;
          }
          interface LdapDnsProvider extends CombineTypes<[_LdapDnsProvider, java.lang.Object]> {}
          interface _LdapDnsProviderResult$$static extends ClassLike {
            new(domainName: string, endpoints: java.util.List<string>): LdapDnsProviderResult;
          }
          let LdapDnsProviderResult: _LdapDnsProviderResult$$static;
          interface _LdapDnsProviderResult {
            getDomainName(): string;
            getEndpoints(): java.util.List<string>;
            _domainName: string;
            _endpoints: java.util.List<string>;
          }
          interface LdapDnsProviderResult extends CombineTypes<[_LdapDnsProviderResult, java.lang.Object]> {}
        }
        interface _BasicControl$$static extends ClassLike {
          _serialVersionUID: long;
          new(id: string): BasicControl;
          new(id: string, criticality: boolean, value: byte[]): BasicControl;
        }
        let BasicControl: _BasicControl$$static;
        interface _BasicControl {
          getEncodedValue(): byte[];
          getID(): string;
          isCritical(): boolean;
          _criticality: boolean;
          _id: string;
          _value: byte[];
        }
        interface BasicControl extends CombineTypes<[_BasicControl, javax.naming.ldap.Control, java.lang.Object]> {}
        interface _Control$$static extends ClassLike {
          readonly CRITICAL: boolean;
          readonly NONCRITICAL: boolean;
        }
        let Control: _Control$$static;
        interface _Control {
          getEncodedValue(): byte[];
          getID(): string;
          isCritical(): boolean;
        }
        interface Control extends CombineTypes<[_Control, java.lang.Object, java.io.Serializable]> {}
        interface _ControlFactory$$static extends ClassLike {
          getControlInstance(ctl: Control, ctx: Context, env: java.util.Hashtable<any,any>): Control;
          _new(): ControlFactory;
        }
        let ControlFactory: _ControlFactory$$static;
        interface _ControlFactory {
          getControlInstance(a0: Control): Control;
(a0: Control): Control;
        }
        interface ControlFactory extends CombineTypes<[_ControlFactory, java.lang.Object]> {}
        interface _ExtendedRequest$$static extends ClassLike {
        }
        let ExtendedRequest: _ExtendedRequest$$static;
        interface _ExtendedRequest {
          createExtendedResponse(a0: string, a1: byte[], a2: int, a3: int): ExtendedResponse;
          getEncodedValue(): byte[];
          getID(): string;
        }
        interface ExtendedRequest extends CombineTypes<[_ExtendedRequest, java.lang.Object, java.io.Serializable]> {}
        interface _ExtendedResponse$$static extends ClassLike {
        }
        let ExtendedResponse: _ExtendedResponse$$static;
        interface _ExtendedResponse {
          getEncodedValue(): byte[];
          getID(): string;
        }
        interface ExtendedResponse extends CombineTypes<[_ExtendedResponse, java.lang.Object, java.io.Serializable]> {}
        interface _HasControls$$static extends ClassLike {
        }
        let HasControls: _HasControls$$static;
        interface _HasControls {
          getControls(): Control[];
(): Control[];
        }
        interface HasControls extends CombineTypes<[_HasControls, java.lang.Object]> {}
        interface _InitialLdapContext$$static extends ClassLike {
          _BIND_CONTROLS_PROPERTY: string;
          new(): InitialLdapContext;
          new(environment: java.util.Hashtable<any,any>, connCtls: Control[]): InitialLdapContext;
        }
        let InitialLdapContext: _InitialLdapContext$$static;
        interface _InitialLdapContext {
          extendedOperation(request: ExtendedRequest): ExtendedResponse;
          getConnectControls(): Control[];
          _getDefaultLdapInitCtx(): LdapContext;
          getRequestControls(): Control[];
          getResponseControls(): Control[];
          newInstance(reqCtls: Control[]): LdapContext;
          reconnect(connCtls: Control[]): void;
          setRequestControls(requestControls: Control[]): void;
        }
        interface InitialLdapContext extends CombineTypes<[_InitialLdapContext, javax.naming.ldap.LdapContext, javax.naming.directory.InitialDirContext]> {}
        interface _LdapContext$$static extends ClassLike {
          readonly CONTROL_FACTORIES: string;
        }
        let LdapContext: _LdapContext$$static;
        interface _LdapContext {
          extendedOperation(a0: ExtendedRequest): ExtendedResponse;
          getConnectControls(): Control[];
          getRequestControls(): Control[];
          getResponseControls(): Control[];
          newInstance(a0: Control[]): LdapContext;
          reconnect(a0: Control[]): void;
          setRequestControls(a0: Control[]): void;
        }
        interface LdapContext extends CombineTypes<[_LdapContext, javax.naming.directory.DirContext, java.lang.Object]> {}
        interface _LdapName$$static extends ClassLike {
          _serialVersionUID: long;
          new(name: string): LdapName;
          new(rdns: java.util.List<Rdn>): LdapName;
        }
        let LdapName: _LdapName$$static;
        interface _LdapName {
          add(comp: string): Name;
          add(comp: Rdn): Name;
          add(posn: int, comp: string): Name;
          add(posn: int, comp: Rdn): Name;
          addAll(suffix: Name): Name;
          addAll(suffixRdns: java.util.List<Rdn>): Name;
          addAll(posn: int, suffix: Name): Name;
          addAll(posn: int, suffixRdns: java.util.List<Rdn>): Name;
          clone(): any;
          compareTo(obj: any): int;
          _doesListMatch(beg: int, end: int, rdns: java.util.List<Rdn>): boolean;
          endsWith(n: Name): boolean;
          endsWith(rdns: java.util.List<Rdn>): boolean;
          equals(obj: any): boolean;
          get(posn: int): string;
          getAll(): java.util.Enumeration<string>;
          getPrefix(posn: int): Name;
          getRdn(posn: int): Rdn;
          getRdns(): java.util.List<Rdn>;
          getSuffix(posn: int): Name;
          hashCode(): int;
          isEmpty(): boolean;
          _matches(beg: int, end: int, n: Name): boolean;
          _parse(): void;
          _readObject(s: java.io.ObjectInputStream): void;
          remove(posn: int): any;
          size(): int;
          startsWith(n: Name): boolean;
          startsWith(rdns: java.util.List<Rdn>): boolean;
          toString(): string;
          _writeObject(s: java.io.ObjectOutputStream): void;
          _rdns: java.util.List<Rdn>;
          _unparsed: string;
        }
        interface LdapName extends CombineTypes<[_LdapName, java.lang.Object, javax.naming.Name]> {}
        interface _LdapReferralException$$static extends ClassLike {
          _serialVersionUID: long;
          _new(explanation: string): LdapReferralException;
          _new(): LdapReferralException;
        }
        let LdapReferralException: _LdapReferralException$$static;
        interface _LdapReferralException {
          getReferralContext(): Context;
          getReferralContext(a0: java.util.Hashtable<any,any>): Context;
          getReferralContext(a0: java.util.Hashtable<any,any>, a1: Control[]): Context;
        }
        interface LdapReferralException extends CombineTypes<[_LdapReferralException, javax.naming.ReferralException]> {}
        interface _ManageReferralControl$$static extends ClassLike {
          readonly OID: string;
          _serialVersionUID: long;
          new(): ManageReferralControl;
          new(criticality: boolean): ManageReferralControl;
        }
        let ManageReferralControl: _ManageReferralControl$$static;
        interface _ManageReferralControl {
        }
        interface ManageReferralControl extends CombineTypes<[_ManageReferralControl, javax.naming.ldap.BasicControl]> {}
        interface _PagedResultsControl$$static extends ClassLike {
          _EMPTY_COOKIE: byte[];
          readonly OID: string;
          _serialVersionUID: long;
          new(pageSize: int, criticality: boolean): PagedResultsControl;
          new(pageSize: int, cookie: byte[], criticality: boolean): PagedResultsControl;
        }
        let PagedResultsControl: _PagedResultsControl$$static;
        interface _PagedResultsControl {
          _setEncodedValue(pageSize: int, cookie: byte[]): byte[];
        }
        interface PagedResultsControl extends CombineTypes<[_PagedResultsControl, javax.naming.ldap.BasicControl]> {}
        interface _PagedResultsResponseControl$$static extends ClassLike {
          readonly OID: string;
          _serialVersionUID: long;
          new(id: string, criticality: boolean, value: byte[]): PagedResultsResponseControl;
        }
        let PagedResultsResponseControl: _PagedResultsResponseControl$$static;
        interface _PagedResultsResponseControl {
          getCookie(): byte[];
          getResultSize(): int;
          _cookie: byte[];
          _resultSize: int;
        }
        interface PagedResultsResponseControl extends CombineTypes<[_PagedResultsResponseControl, javax.naming.ldap.BasicControl]> {}
        interface _Rdn$$static extends ClassLike {
          _decodeHexPairs(chars: char[], beg: int, end: int): byte[];
          _escapeBinaryValue(val: byte[]): string;
          _escapeStringValue(val: string): string;
          escapeValue(val: any): string;
          _getUtf8Octets(chars: char[], beg: int, end: int): byte[];
          _isWhitespace(c: char): boolean;
          unescapeValue(val: string): any;
          _DEFAULT_SIZE: int;
          _escapees: string;
          _serialVersionUID: long;
          new(attrSet: naming.directory.Attributes): Rdn;
          new(rdnString: string): Rdn;
          new(rdn: Rdn): Rdn;
          new(type: string, value: any): Rdn;
          _new(): Rdn;
        }
        let Rdn: _Rdn$$static;
        interface _Rdn {
          compareTo(obj: any): int;
          equals(obj: any): boolean;
          getType(): string;
          getValue(): any;
          hashCode(): int;
          _isEmptyValue(val: any): boolean;
          _put(type: string, value: any): Rdn;
          _readObject(s: java.io.ObjectInputStream): void;
          size(): int;
          _sort(): void;
          toAttributes(): naming.directory.Attributes;
          toString(): string;
          _writeObject(s: java.io.ObjectOutputStream): void;
          _entries: java.util.ArrayList<Rdn$RdnEntry>;
        }
        interface Rdn extends CombineTypes<[_Rdn, java.lang.Object, java.lang.Comparable<any>, java.io.Serializable]> {}
        interface _Rdn$RdnEntry$$static extends ClassLike {
        }
        let Rdn$RdnEntry: _Rdn$RdnEntry$$static;
        interface _Rdn$RdnEntry {
          compareTo(that: Rdn$RdnEntry): int;
          compareTo(a0: any): int;
          equals(obj: any): boolean;
          _getType(): string;
          _getValue(): any;
          _getValueComparable(): string;
          hashCode(): int;
          toString(): string;
          _comparable: string;
          _type: string;
          _value: any;
        }
        interface Rdn$RdnEntry extends CombineTypes<[_Rdn$RdnEntry, java.lang.Comparable<Rdn$RdnEntry>, java.lang.Object]> {}
        interface _Rfc2253Parser$$static extends ClassLike {
          _isWhitespace(c: char): boolean;
          _new(name: string): Rfc2253Parser;
        }
        let Rfc2253Parser: _Rfc2253Parser$$static;
        interface _Rfc2253Parser {
          _atTerminator(): boolean;
          _consumeWhitespace(): void;
          _doParse(rdn: Rdn): Rdn;
          _parseAttrType(): string;
          _parseAttrValue(): string;
          _parseBinaryAttrValue(): string;
          _parseDn(): java.util.List<Rdn>;
          _parseQuotedAttrValue(): string;
          _parseRdn(): Rdn;
          _parseRdn(rdn: Rdn): Rdn;
          _parseStringAttrValue(): string;
          _chars: char[];
          _cur: int;
          _len: int;
          _name: string;
        }
        interface Rfc2253Parser extends CombineTypes<[_Rfc2253Parser, java.lang.Object]> {}
        interface _SortControl$$static extends ClassLike {
          readonly OID: string;
          _serialVersionUID: long;
          new(sortBy: string, criticality: boolean): SortControl;
          new(sortBy: string[], criticality: boolean): SortControl;
          new(sortBy: SortKey[], criticality: boolean): SortControl;
        }
        let SortControl: _SortControl$$static;
        interface _SortControl {
          _setEncodedValue(sortKeys: SortKey[]): byte[];
        }
        interface SortControl extends CombineTypes<[_SortControl, javax.naming.ldap.BasicControl]> {}
        interface _SortKey$$static extends ClassLike {
          new(attrID: string): SortKey;
          new(attrID: string, ascendingOrder: boolean, matchingRuleID: string): SortKey;
        }
        let SortKey: _SortKey$$static;
        interface _SortKey {
          getAttributeID(): string;
          getMatchingRuleID(): string;
          isAscending(): boolean;
          _attrID: string;
          _matchingRuleID: string;
          _reverseOrder: boolean;
        }
        interface SortKey extends CombineTypes<[_SortKey, java.lang.Object]> {}
        interface _SortResponseControl$$static extends ClassLike {
          readonly OID: string;
          _serialVersionUID: long;
          new(id: string, criticality: boolean, value: byte[]): SortResponseControl;
        }
        let SortResponseControl: _SortResponseControl$$static;
        interface _SortResponseControl {
          getAttributeID(): string;
          getException(): NamingException;
          getResultCode(): int;
          isSorted(): boolean;
          _badAttrId: string;
          _resultCode: int;
        }
        interface SortResponseControl extends CombineTypes<[_SortResponseControl, javax.naming.ldap.BasicControl]> {}
        interface _StartTlsRequest$$static extends ClassLike {
          _privilegedHasNext(iter: java.util.Iterator<StartTlsResponse>): boolean;
          readonly OID: string;
          _serialVersionUID: long;
          new(): StartTlsRequest;
        }
        let StartTlsRequest: _StartTlsRequest$$static;
        interface _StartTlsRequest {
          createExtendedResponse(id: string, berValue: byte[], offset: int, length: int): ExtendedResponse;
          _getContextClassLoader(): java.lang.ClassLoader;
          getEncodedValue(): byte[];
          getID(): string;
          _wrapException(e: java.lang.Exception): ConfigurationException;
        }
        interface StartTlsRequest extends CombineTypes<[_StartTlsRequest, java.lang.Object, javax.naming.ldap.ExtendedRequest]> {}
        interface _StartTlsResponse$$static extends ClassLike {
          readonly OID: string;
          _serialVersionUID: long;
          _new(): StartTlsResponse;
        }
        let StartTlsResponse: _StartTlsResponse$$static;
        interface _StartTlsResponse {
          close(): void;
          getEncodedValue(): byte[];
          getID(): string;
          negotiate(): javax.net.ssl.SSLSession;
          negotiate(a0: javax.net.ssl.SSLSocketFactory): javax.net.ssl.SSLSession;
          setEnabledCipherSuites(a0: string[]): void;
          setHostnameVerifier(a0: javax.net.ssl.HostnameVerifier): void;
        }
        interface StartTlsResponse extends CombineTypes<[_StartTlsResponse, java.lang.Object, javax.naming.ldap.ExtendedResponse]> {}
        interface _UnsolicitedNotification$$static extends ClassLike {
        }
        let UnsolicitedNotification: _UnsolicitedNotification$$static;
        interface _UnsolicitedNotification {
          getException(): NamingException;
          getReferrals(): string[];
        }
        interface UnsolicitedNotification extends CombineTypes<[_UnsolicitedNotification, javax.naming.ldap.HasControls, java.lang.Object, javax.naming.ldap.ExtendedResponse]> {}
        interface _UnsolicitedNotificationEvent$$static extends ClassLike {
          _serialVersionUID: long;
          new(src: any, notice: UnsolicitedNotification): UnsolicitedNotificationEvent;
        }
        let UnsolicitedNotificationEvent: _UnsolicitedNotificationEvent$$static;
        interface _UnsolicitedNotificationEvent {
          dispatch(listener: UnsolicitedNotificationListener): void;
          getNotification(): UnsolicitedNotification;
          _notice: UnsolicitedNotification;
        }
        interface UnsolicitedNotificationEvent extends CombineTypes<[_UnsolicitedNotificationEvent, java.util.EventObject]> {}
        interface _UnsolicitedNotificationListener$$static extends ClassLike {
        }
        let UnsolicitedNotificationListener: _UnsolicitedNotificationListener$$static;
        interface _UnsolicitedNotificationListener {
          notificationReceived(a0: UnsolicitedNotificationEvent): void;
(a0: UnsolicitedNotificationEvent): void;
        }
        interface UnsolicitedNotificationListener extends CombineTypes<[_UnsolicitedNotificationListener, javax.naming.event.NamingListener, java.lang.Object]> {}
      }
      module spi {
        interface _ContinuationContext$$static extends ClassLike {
          _new(cpe: CannotProceedException, env: java.util.Hashtable<any,any>): ContinuationContext;
        }
        let ContinuationContext: _ContinuationContext$$static;
        interface _ContinuationContext {
          addToEnvironment(propName: string, value: any): any;
          bind(name: Name, newObj: any): void;
          bind(name: string, newObj: any): void;
          close(): void;
          composeName(name: Name, prefix: Name): Name;
          composeName(name: string, prefix: string): string;
          createSubcontext(name: Name): Context;
          createSubcontext(name: string): Context;
          destroySubcontext(name: Name): void;
          destroySubcontext(name: string): void;
          getEnvironment(): java.util.Hashtable<any,any>;
          getNameInNamespace(): string;
          getNameParser(name: Name): NameParser;
          getNameParser(name: string): NameParser;
          _getTargetContext(): Context;
          list(name: Name): NamingEnumeration<NameClassPair>;
          list(name: string): NamingEnumeration<NameClassPair>;
          listBindings(name: Name): NamingEnumeration<Binding>;
          listBindings(name: string): NamingEnumeration<Binding>;
          lookup(name: Name): any;
          lookup(name: string): any;
          lookupLink(name: Name): any;
          lookupLink(name: string): any;
          rebind(name: Name, newObj: any): void;
          rebind(name: string, newObj: any): void;
          removeFromEnvironment(propName: string): any;
          rename(name: Name, newName: Name): void;
          rename(name: string, newName: string): void;
          resolveToClass(name: Name, contextType: java.lang.Class<Context>): ResolveResult;
          resolveToClass(name: string, contextType: java.lang.Class<Context>): ResolveResult;
          unbind(name: Name): void;
          unbind(name: string): void;
          _contCtx: Context;
          _cpe: CannotProceedException;
          _env: java.util.Hashtable<any,any>;
        }
        interface ContinuationContext extends CombineTypes<[_ContinuationContext, javax.naming.spi.Resolver, java.lang.Object, javax.naming.Context]> {}
        interface _ContinuationDirContext$$static extends ClassLike {
          _new(cpe: CannotProceedException, env: java.util.Hashtable<any,any>): ContinuationDirContext;
        }
        let ContinuationDirContext: _ContinuationDirContext$$static;
        interface _ContinuationDirContext {
          bind(name: Name, obj: any, attrs: naming.directory.Attributes): void;
          bind(name: string, obj: any, attrs: naming.directory.Attributes): void;
          createSubcontext(name: Name, attrs: naming.directory.Attributes): naming.directory.DirContext;
          createSubcontext(name: string, attrs: naming.directory.Attributes): naming.directory.DirContext;
          getAttributes(name: string): naming.directory.Attributes;
          getAttributes(name: string, attrIds: string[]): naming.directory.Attributes;
          getAttributes(name: Name): naming.directory.Attributes;
          getAttributes(name: Name, attrIds: string[]): naming.directory.Attributes;
          getSchema(name: string): naming.directory.DirContext;
          getSchema(name: Name): naming.directory.DirContext;
          getSchemaClassDefinition(name: string): naming.directory.DirContext;
          getSchemaClassDefinition(name: Name): naming.directory.DirContext;
          _getTargetContext(name: Name): DirContextNamePair;
          _getTargetContext(name: string): DirContextStringPair;
          modifyAttributes(name: Name, mod_op: int, attrs: naming.directory.Attributes): void;
          modifyAttributes(name: string, mod_op: int, attrs: naming.directory.Attributes): void;
          modifyAttributes(name: Name, mods: naming.directory.ModificationItem[]): void;
          modifyAttributes(name: string, mods: naming.directory.ModificationItem[]): void;
          rebind(name: Name, obj: any, attrs: naming.directory.Attributes): void;
          rebind(name: string, obj: any, attrs: naming.directory.Attributes): void;
          search(name: Name, matchingAttributes: naming.directory.Attributes, attributesToReturn: string[]): NamingEnumeration<naming.directory.SearchResult>;
          search(name: string, matchingAttributes: naming.directory.Attributes, attributesToReturn: string[]): NamingEnumeration<naming.directory.SearchResult>;
          search(name: Name, matchingAttributes: naming.directory.Attributes): NamingEnumeration<naming.directory.SearchResult>;
          search(name: string, matchingAttributes: naming.directory.Attributes): NamingEnumeration<naming.directory.SearchResult>;
          search(name: Name, filter: string, cons: naming.directory.SearchControls): NamingEnumeration<naming.directory.SearchResult>;
          search(name: string, filter: string, cons: naming.directory.SearchControls): NamingEnumeration<naming.directory.SearchResult>;
          search(name: Name, filterExpr: string, args: any[], cons: naming.directory.SearchControls): NamingEnumeration<naming.directory.SearchResult>;
          search(name: string, filterExpr: string, args: any[], cons: naming.directory.SearchControls): NamingEnumeration<naming.directory.SearchResult>;
        }
        interface ContinuationDirContext extends CombineTypes<[_ContinuationDirContext, javax.naming.directory.DirContext, javax.naming.spi.ContinuationContext]> {}
        interface _DirContextNamePair$$static extends ClassLike {
          _new(ctx: naming.directory.DirContext, name: Name): DirContextNamePair;
        }
        let DirContextNamePair: _DirContextNamePair$$static;
        interface _DirContextNamePair {
          _getDirContext(): naming.directory.DirContext;
          _getName(): Name;
          _ctx: naming.directory.DirContext;
          _name: Name;
        }
        interface DirContextNamePair extends CombineTypes<[_DirContextNamePair, java.lang.Object]> {}
        interface _DirContextStringPair$$static extends ClassLike {
          _new(ctx: naming.directory.DirContext, str: string): DirContextStringPair;
        }
        let DirContextStringPair: _DirContextStringPair$$static;
        interface _DirContextStringPair {
          _getDirContext(): naming.directory.DirContext;
          _getString(): string;
          _ctx: naming.directory.DirContext;
          _str: string;
        }
        interface DirContextStringPair extends CombineTypes<[_DirContextStringPair, java.lang.Object]> {}
        interface _DirObjectFactory$$static extends ClassLike {
        }
        let DirObjectFactory: _DirObjectFactory$$static;
        interface _DirObjectFactory {
          getObjectInstance(a0: any, a1: Name, a2: Context, a3: java.util.Hashtable<any,any>, a4: naming.directory.Attributes): any;
(a0: any, a1: Name, a2: Context, a3: java.util.Hashtable<any,any>, a4: naming.directory.Attributes): any;
        }
        interface DirObjectFactory extends CombineTypes<[_DirObjectFactory, javax.naming.spi.ObjectFactory, java.lang.Object]> {}
        interface _DirStateFactory$$static extends ClassLike {
        }
        let DirStateFactory: _DirStateFactory$$static;
        interface _DirStateFactory {
          getStateToBind(a0: any, a1: Name, a2: Context, a3: java.util.Hashtable<any,any>, a4: naming.directory.Attributes): DirStateFactory$Result;
(a0: any, a1: Name, a2: Context, a3: java.util.Hashtable<any,any>, a4: naming.directory.Attributes): DirStateFactory$Result;
        }
        interface DirStateFactory extends CombineTypes<[_DirStateFactory, java.lang.Object, javax.naming.spi.StateFactory]> {}
        interface _DirStateFactory$Result$$static extends ClassLike {
          new(obj: any, outAttrs: naming.directory.Attributes): DirStateFactory$Result;
        }
        let DirStateFactory$Result: _DirStateFactory$Result$$static;
        interface _DirStateFactory$Result {
          getAttributes(): naming.directory.Attributes;
          getObject(): any;
          _attrs: naming.directory.Attributes;
          _obj: any;
        }
        interface DirStateFactory$Result extends CombineTypes<[_DirStateFactory$Result, java.lang.Object]> {}
        interface _DirectoryManager$$static extends ClassLike {
          getContinuationDirContext(cpe: CannotProceedException): naming.directory.DirContext;
          getObjectInstance(refInfo: any, name: Name, nameCtx: Context, environment: java.util.Hashtable<any,any>, attrs: naming.directory.Attributes): any;
          getStateToBind(obj: any, name: Name, nameCtx: Context, environment: java.util.Hashtable<any,any>, attrs: naming.directory.Attributes): DirStateFactory$Result;
          _new(): DirectoryManager;
        }
        let DirectoryManager: _DirectoryManager$$static;
        interface _DirectoryManager {
        }
        interface DirectoryManager extends CombineTypes<[_DirectoryManager, javax.naming.spi.NamingManager]> {}
        interface _InitialContextFactory$$static extends ClassLike {
        }
        let InitialContextFactory: _InitialContextFactory$$static;
        interface _InitialContextFactory {
          getInitialContext(a0: java.util.Hashtable<any,any>): Context;
(a0: java.util.Hashtable<any,any>): Context;
        }
        interface InitialContextFactory extends CombineTypes<[_InitialContextFactory, java.lang.Object]> {}
        interface _InitialContextFactoryBuilder$$static extends ClassLike {
        }
        let InitialContextFactoryBuilder: _InitialContextFactoryBuilder$$static;
        interface _InitialContextFactoryBuilder {
          createInitialContextFactory(a0: java.util.Hashtable<any,any>): InitialContextFactory;
(a0: java.util.Hashtable<any,any>): InitialContextFactory;
        }
        interface InitialContextFactoryBuilder extends CombineTypes<[_InitialContextFactoryBuilder, java.lang.Object]> {}
        interface _NamingManager$$static extends ClassLike {
          _getContext(obj: any, name: Name, nameCtx: Context, environment: java.util.Hashtable<any,any>): Context;
          getContinuationContext(cpe: CannotProceedException): Context;
          _getFactory(className: string): InitialContextFactory;
          getInitialContext(env: java.util.Hashtable<any,any>): Context;
          _getInitialContextFactoryBuilder(): InitialContextFactoryBuilder;
          _getObjectFactoryBuilder(): ObjectFactoryBuilder;
          getObjectInstance(refInfo: any, name: Name, nameCtx: Context, environment: java.util.Hashtable<any,any>): any;
          _getResolver(obj: any, name: Name, nameCtx: Context, environment: java.util.Hashtable<any,any>): Resolver;
          getStateToBind(obj: any, name: Name, nameCtx: Context, environment: java.util.Hashtable<any,any>): any;
          getURLContext(scheme: string, environment: java.util.Hashtable<any,any>): Context;
          _getURLObject(scheme: string, urlInfo: any, name: Name, nameCtx: Context, environment: java.util.Hashtable<any,any>): any;
          hasInitialContextFactoryBuilder(): boolean;
          setInitialContextFactoryBuilder(builder: InitialContextFactoryBuilder): void;
          setObjectFactoryBuilder(builder: ObjectFactoryBuilder): void;
          readonly CPE: string;
          _FACTORIES_CACHE: jdk.internal.loader.ClassLoaderValue<InitialContextFactory>;
          _defaultPkgPrefix: string;
          _helper: com.sun.naming.internal.VersionHelper;
          _initctx_factory_builder: InitialContextFactoryBuilder;
          _new(): NamingManager;
        }
        let NamingManager: _NamingManager$$static;
        interface _NamingManager {
        }
        interface NamingManager extends CombineTypes<[_NamingManager, java.lang.Object]> {}
        interface _NamingManager$FactoryInitializationError$$static extends ClassLike {
          _serialVersionUID: long;
        }
        let NamingManager$FactoryInitializationError: _NamingManager$FactoryInitializationError$$static;
        interface _NamingManager$FactoryInitializationError {
          getCause(): NoInitialContextException;
          getCause(): java.lang.Throwable;
        }
        interface NamingManager$FactoryInitializationError extends CombineTypes<[_NamingManager$FactoryInitializationError, java.lang.Error]> {}
        interface _ObjectFactory$$static extends ClassLike {
        }
        let ObjectFactory: _ObjectFactory$$static;
        interface _ObjectFactory {
          getObjectInstance(a0: any, a1: Name, a2: Context, a3: java.util.Hashtable<any,any>): any;
(a0: any, a1: Name, a2: Context, a3: java.util.Hashtable<any,any>): any;
        }
        interface ObjectFactory extends CombineTypes<[_ObjectFactory, java.lang.Object]> {}
        interface _ObjectFactoryBuilder$$static extends ClassLike {
        }
        let ObjectFactoryBuilder: _ObjectFactoryBuilder$$static;
        interface _ObjectFactoryBuilder {
          createObjectFactory(a0: any, a1: java.util.Hashtable<any,any>): ObjectFactory;
(a0: any, a1: java.util.Hashtable<any,any>): ObjectFactory;
        }
        interface ObjectFactoryBuilder extends CombineTypes<[_ObjectFactoryBuilder, java.lang.Object]> {}
        interface _ResolveResult$$static extends ClassLike {
          _serialVersionUID: long;
          _new(): ResolveResult;
          new(robj: any, rcomp: string): ResolveResult;
          new(robj: any, rname: Name): ResolveResult;
        }
        let ResolveResult: _ResolveResult$$static;
        interface _ResolveResult {
          appendRemainingComponent(name: string): void;
          appendRemainingName(name: Name): void;
          getRemainingName(): Name;
          getResolvedObj(): any;
          setRemainingName(name: Name): void;
          setResolvedObj(obj: any): void;
          _remainingName: Name;
          _resolvedObj: any;
        }
        interface ResolveResult extends CombineTypes<[_ResolveResult, java.lang.Object, java.io.Serializable]> {}
        interface _Resolver$$static extends ClassLike {
        }
        let Resolver: _Resolver$$static;
        interface _Resolver {
          resolveToClass(a0: Name, a1: java.lang.Class<Context>): ResolveResult;
          resolveToClass(a0: string, a1: java.lang.Class<Context>): ResolveResult;
        }
        interface Resolver extends CombineTypes<[_Resolver, java.lang.Object]> {}
        interface _StateFactory$$static extends ClassLike {
        }
        let StateFactory: _StateFactory$$static;
        interface _StateFactory {
          getStateToBind(a0: any, a1: Name, a2: Context, a3: java.util.Hashtable<any,any>): any;
(a0: any, a1: Name, a2: Context, a3: java.util.Hashtable<any,any>): any;
        }
        interface StateFactory extends CombineTypes<[_StateFactory, java.lang.Object]> {}
      }
      interface _AuthenticationException$$static extends ClassLike {
        _serialVersionUID: long;
        new(explanation: string): AuthenticationException;
        new(): AuthenticationException;
      }
      let AuthenticationException: _AuthenticationException$$static;
      interface _AuthenticationException {
      }
      interface AuthenticationException extends CombineTypes<[_AuthenticationException, javax.naming.NamingSecurityException]> {}
      interface _AuthenticationNotSupportedException$$static extends ClassLike {
        _serialVersionUID: long;
        new(explanation: string): AuthenticationNotSupportedException;
        new(): AuthenticationNotSupportedException;
      }
      let AuthenticationNotSupportedException: _AuthenticationNotSupportedException$$static;
      interface _AuthenticationNotSupportedException {
      }
      interface AuthenticationNotSupportedException extends CombineTypes<[_AuthenticationNotSupportedException, javax.naming.NamingSecurityException]> {}
      interface _BinaryRefAddr$$static extends ClassLike {
        _serialVersionUID: long;
        new(addrType: string, src: byte[]): BinaryRefAddr;
        new(addrType: string, src: byte[], offset: int, count: int): BinaryRefAddr;
      }
      let BinaryRefAddr: _BinaryRefAddr$$static;
      interface _BinaryRefAddr {
        equals(obj: any): boolean;
        getContent(): any;
        hashCode(): int;
        toString(): string;
        _buf: byte[];
      }
      interface BinaryRefAddr extends CombineTypes<[_BinaryRefAddr, javax.naming.RefAddr]> {}
      interface _Binding$$static extends ClassLike {
        _serialVersionUID: long;
        new(name: string, obj: any): Binding;
        new(name: string, obj: any, isRelative: boolean): Binding;
        new(name: string, className: string, obj: any): Binding;
        new(name: string, className: string, obj: any, isRelative: boolean): Binding;
      }
      let Binding: _Binding$$static;
      interface _Binding {
        getClassName(): string;
        getObject(): any;
        setObject(obj: any): void;
        toString(): string;
        _boundObj: any;
      }
      interface Binding extends CombineTypes<[_Binding, javax.naming.NameClassPair]> {}
      interface _CannotProceedException$$static extends ClassLike {
        _serialVersionUID: long;
        new(explanation: string): CannotProceedException;
        new(): CannotProceedException;
      }
      let CannotProceedException: _CannotProceedException$$static;
      interface _CannotProceedException {
        getAltName(): Name;
        getAltNameCtx(): Context;
        getEnvironment(): java.util.Hashtable<any,any>;
        getRemainingNewName(): Name;
        setAltName(altName: Name): void;
        setAltNameCtx(altNameCtx: Context): void;
        setEnvironment(environment: java.util.Hashtable<any,any>): void;
        setRemainingNewName(newName: Name): void;
        _altName: Name;
        _altNameCtx: Context;
        _environment: java.util.Hashtable<any,any>;
        _remainingNewName: Name;
      }
      interface CannotProceedException extends CombineTypes<[_CannotProceedException, javax.naming.NamingException]> {}
      interface _CommunicationException$$static extends ClassLike {
        _serialVersionUID: long;
        new(explanation: string): CommunicationException;
        new(): CommunicationException;
      }
      let CommunicationException: _CommunicationException$$static;
      interface _CommunicationException {
      }
      interface CommunicationException extends CombineTypes<[_CommunicationException, javax.naming.NamingException]> {}
      interface _CompositeName$$static extends ClassLike {
        _serialVersionUID: long;
        _new(comps: java.util.Enumeration<string>): CompositeName;
        new(n: string): CompositeName;
        new(): CompositeName;
      }
      let CompositeName: _CompositeName$$static;
      interface _CompositeName {
        add(comp: string): Name;
        add(posn: int, comp: string): Name;
        addAll(suffix: Name): Name;
        addAll(posn: int, n: Name): Name;
        clone(): any;
        compareTo(obj: any): int;
        endsWith(n: Name): boolean;
        equals(obj: any): boolean;
        get(posn: int): string;
        getAll(): java.util.Enumeration<string>;
        getPrefix(posn: int): Name;
        getSuffix(posn: int): Name;
        hashCode(): int;
        isEmpty(): boolean;
        _readObject(s: java.io.ObjectInputStream): void;
        remove(posn: int): any;
        size(): int;
        startsWith(n: Name): boolean;
        toString(): string;
        _writeObject(s: java.io.ObjectOutputStream): void;
        _impl: NameImpl;
      }
      interface CompositeName extends CombineTypes<[_CompositeName, java.lang.Object, javax.naming.Name]> {}
      interface _CompoundName$$static extends ClassLike {
        _serialVersionUID: long;
        _new(comps: java.util.Enumeration<string>, syntax: java.util.Properties): CompoundName;
        new(n: string, syntax: java.util.Properties): CompoundName;
      }
      let CompoundName: _CompoundName$$static;
      interface _CompoundName {
        add(comp: string): Name;
        add(posn: int, comp: string): Name;
        addAll(suffix: Name): Name;
        addAll(posn: int, n: Name): Name;
        clone(): any;
        compareTo(obj: any): int;
        endsWith(n: Name): boolean;
        equals(obj: any): boolean;
        get(posn: int): string;
        getAll(): java.util.Enumeration<string>;
        getPrefix(posn: int): Name;
        getSuffix(posn: int): Name;
        hashCode(): int;
        isEmpty(): boolean;
        _readObject(s: java.io.ObjectInputStream): void;
        remove(posn: int): any;
        size(): int;
        startsWith(n: Name): boolean;
        toString(): string;
        _writeObject(s: java.io.ObjectOutputStream): void;
        _impl: NameImpl;
        _mySyntax: java.util.Properties;
      }
      interface CompoundName extends CombineTypes<[_CompoundName, java.lang.Object, javax.naming.Name]> {}
      interface _ConfigurationException$$static extends ClassLike {
        _serialVersionUID: long;
        new(explanation: string): ConfigurationException;
        new(): ConfigurationException;
      }
      let ConfigurationException: _ConfigurationException$$static;
      interface _ConfigurationException {
      }
      interface ConfigurationException extends CombineTypes<[_ConfigurationException, javax.naming.NamingException]> {}
      interface _Context$$static extends ClassLike {
        readonly APPLET: string;
        readonly AUTHORITATIVE: string;
        readonly BATCHSIZE: string;
        readonly DNS_URL: string;
        readonly INITIAL_CONTEXT_FACTORY: string;
        readonly LANGUAGE: string;
        readonly OBJECT_FACTORIES: string;
        readonly PROVIDER_URL: string;
        readonly REFERRAL: string;
        readonly SECURITY_AUTHENTICATION: string;
        readonly SECURITY_CREDENTIALS: string;
        readonly SECURITY_PRINCIPAL: string;
        readonly SECURITY_PROTOCOL: string;
        readonly STATE_FACTORIES: string;
        readonly URL_PKG_PREFIXES: string;
      }
      let Context: _Context$$static;
      interface _Context {
        addToEnvironment(a0: string, a1: any): any;
        bind(a0: Name, a1: any): void;
        bind(a0: string, a1: any): void;
        close(): void;
        composeName(a0: Name, a1: Name): Name;
        composeName(a0: string, a1: string): string;
        createSubcontext(a0: Name): Context;
        createSubcontext(a0: string): Context;
        destroySubcontext(a0: Name): void;
        destroySubcontext(a0: string): void;
        getEnvironment(): java.util.Hashtable<any,any>;
        getNameInNamespace(): string;
        getNameParser(a0: Name): NameParser;
        getNameParser(a0: string): NameParser;
        list(a0: Name): NamingEnumeration<NameClassPair>;
        list(a0: string): NamingEnumeration<NameClassPair>;
        listBindings(a0: Name): NamingEnumeration<Binding>;
        listBindings(a0: string): NamingEnumeration<Binding>;
        lookup(a0: Name): any;
        lookup(a0: string): any;
        lookupLink(a0: Name): any;
        lookupLink(a0: string): any;
        rebind(a0: Name, a1: any): void;
        rebind(a0: string, a1: any): void;
        removeFromEnvironment(a0: string): any;
        rename(a0: Name, a1: Name): void;
        rename(a0: string, a1: string): void;
        unbind(a0: Name): void;
        unbind(a0: string): void;
      }
      interface Context extends CombineTypes<[_Context, java.lang.Object]> {}
      interface _ContextNotEmptyException$$static extends ClassLike {
        _serialVersionUID: long;
        new(explanation: string): ContextNotEmptyException;
        new(): ContextNotEmptyException;
      }
      let ContextNotEmptyException: _ContextNotEmptyException$$static;
      interface _ContextNotEmptyException {
      }
      interface ContextNotEmptyException extends CombineTypes<[_ContextNotEmptyException, javax.naming.NamingException]> {}
      interface _InitialContext$$static extends ClassLike {
        doLookup<T>(name: Name): T;
        doLookup<T>(name: string): T;
        _getURLScheme(str: string): string;
        _new(lazy: boolean): InitialContext;
        new(): InitialContext;
        new(environment: java.util.Hashtable<any,any>): InitialContext;
      }
      let InitialContext: _InitialContext$$static;
      interface _InitialContext {
        addToEnvironment(propName: string, propVal: any): any;
        bind(name: string, obj: any): void;
        bind(name: Name, obj: any): void;
        close(): void;
        composeName(name: string, prefix: string): string;
        composeName(name: Name, prefix: Name): Name;
        createSubcontext(name: string): Context;
        createSubcontext(name: Name): Context;
        destroySubcontext(name: string): void;
        destroySubcontext(name: Name): void;
        _getDefaultInitCtx(): Context;
        getEnvironment(): java.util.Hashtable<any,any>;
        getNameInNamespace(): string;
        getNameParser(name: string): NameParser;
        getNameParser(name: Name): NameParser;
        _getURLOrDefaultInitCtx(name: string): Context;
        _getURLOrDefaultInitCtx(name: Name): Context;
        _init(environment: java.util.Hashtable<any,any>): void;
        list(name: string): NamingEnumeration<NameClassPair>;
        list(name: Name): NamingEnumeration<NameClassPair>;
        listBindings(name: string): NamingEnumeration<Binding>;
        listBindings(name: Name): NamingEnumeration<Binding>;
        lookup(name: string): any;
        lookup(name: Name): any;
        lookupLink(name: string): any;
        lookupLink(name: Name): any;
        rebind(name: string, obj: any): void;
        rebind(name: Name, obj: any): void;
        removeFromEnvironment(propName: string): any;
        rename(oldName: string, newName: string): void;
        rename(oldName: Name, newName: Name): void;
        unbind(name: string): void;
        unbind(name: Name): void;
        _defaultInitCtx: Context;
        _gotDefault: boolean;
        _myProps: java.util.Hashtable<any,any>;
      }
      interface InitialContext extends CombineTypes<[_InitialContext, java.lang.Object, javax.naming.Context]> {}
      interface _InsufficientResourcesException$$static extends ClassLike {
        _serialVersionUID: long;
        new(explanation: string): InsufficientResourcesException;
        new(): InsufficientResourcesException;
      }
      let InsufficientResourcesException: _InsufficientResourcesException$$static;
      interface _InsufficientResourcesException {
      }
      interface InsufficientResourcesException extends CombineTypes<[_InsufficientResourcesException, javax.naming.NamingException]> {}
      interface _InterruptedNamingException$$static extends ClassLike {
        _serialVersionUID: long;
        new(explanation: string): InterruptedNamingException;
        new(): InterruptedNamingException;
      }
      let InterruptedNamingException: _InterruptedNamingException$$static;
      interface _InterruptedNamingException {
      }
      interface InterruptedNamingException extends CombineTypes<[_InterruptedNamingException, javax.naming.NamingException]> {}
      interface _InvalidNameException$$static extends ClassLike {
        _serialVersionUID: long;
        new(explanation: string): InvalidNameException;
        new(): InvalidNameException;
      }
      let InvalidNameException: _InvalidNameException$$static;
      interface _InvalidNameException {
      }
      interface InvalidNameException extends CombineTypes<[_InvalidNameException, javax.naming.NamingException]> {}
      interface _LimitExceededException$$static extends ClassLike {
        _serialVersionUID: long;
        new(): LimitExceededException;
        new(explanation: string): LimitExceededException;
      }
      let LimitExceededException: _LimitExceededException$$static;
      interface _LimitExceededException {
      }
      interface LimitExceededException extends CombineTypes<[_LimitExceededException, javax.naming.NamingException]> {}
      interface _LinkException$$static extends ClassLike {
        _serialVersionUID: long;
        new(explanation: string): LinkException;
        new(): LinkException;
      }
      let LinkException: _LinkException$$static;
      interface _LinkException {
        getLinkExplanation(): string;
        getLinkRemainingName(): Name;
        getLinkResolvedName(): Name;
        getLinkResolvedObj(): any;
        setLinkExplanation(msg: string): void;
        setLinkRemainingName(name: Name): void;
        setLinkResolvedName(name: Name): void;
        setLinkResolvedObj(obj: any): void;
        toString(): string;
        toString(detail: boolean): string;
        _linkExplanation: string;
        _linkRemainingName: Name;
        _linkResolvedName: Name;
        _linkResolvedObj: any;
      }
      interface LinkException extends CombineTypes<[_LinkException, javax.naming.NamingException]> {}
      interface _LinkLoopException$$static extends ClassLike {
        _serialVersionUID: long;
        new(explanation: string): LinkLoopException;
        new(): LinkLoopException;
      }
      let LinkLoopException: _LinkLoopException$$static;
      interface _LinkLoopException {
      }
      interface LinkLoopException extends CombineTypes<[_LinkLoopException, javax.naming.LinkException]> {}
      interface _LinkRef$$static extends ClassLike {
        _linkAddrType: string;
        _linkClassName: string;
        _serialVersionUID: long;
        new(linkName: Name): LinkRef;
        new(linkName: string): LinkRef;
      }
      let LinkRef: _LinkRef$$static;
      interface _LinkRef {
        getLinkName(): string;
      }
      interface LinkRef extends CombineTypes<[_LinkRef, javax.naming.Reference]> {}
      interface _MalformedLinkException$$static extends ClassLike {
        _serialVersionUID: long;
        new(explanation: string): MalformedLinkException;
        new(): MalformedLinkException;
      }
      let MalformedLinkException: _MalformedLinkException$$static;
      interface _MalformedLinkException {
      }
      interface MalformedLinkException extends CombineTypes<[_MalformedLinkException, javax.naming.LinkException]> {}
      interface _Name$$static extends ClassLike {
        readonly serialVersionUID: long;
      }
      let Name: _Name$$static;
      interface _Name {
        add(a0: string): Name;
        add(a0: int, a1: string): Name;
        addAll(a0: Name): Name;
        addAll(a0: int, a1: Name): Name;
        clone(): any;
        compareTo(a0: any): int;
        endsWith(a0: Name): boolean;
        get(a0: int): string;
        getAll(): java.util.Enumeration<string>;
        getPrefix(a0: int): Name;
        getSuffix(a0: int): Name;
        isEmpty(): boolean;
        remove(a0: int): any;
        size(): int;
        startsWith(a0: Name): boolean;
      }
      interface Name extends CombineTypes<[_Name, java.lang.Cloneable, java.lang.Object, java.lang.Comparable<any>, java.io.Serializable]> {}
      interface _NameAlreadyBoundException$$static extends ClassLike {
        _serialVersionUID: long;
        new(explanation: string): NameAlreadyBoundException;
        new(): NameAlreadyBoundException;
      }
      let NameAlreadyBoundException: _NameAlreadyBoundException$$static;
      interface _NameAlreadyBoundException {
      }
      interface NameAlreadyBoundException extends CombineTypes<[_NameAlreadyBoundException, javax.naming.NamingException]> {}
      interface _NameClassPair$$static extends ClassLike {
        _serialVersionUID: long;
        new(name: string, className: string): NameClassPair;
        new(name: string, className: string, isRelative: boolean): NameClassPair;
      }
      let NameClassPair: _NameClassPair$$static;
      interface _NameClassPair {
        getClassName(): string;
        getName(): string;
        getNameInNamespace(): string;
        isRelative(): boolean;
        setClassName(name: string): void;
        setName(name: string): void;
        setNameInNamespace(fullName: string): void;
        setRelative(r: boolean): void;
        toString(): string;
        _className: string;
        _fullName: string;
        _isRel: boolean;
        _name: string;
      }
      interface NameClassPair extends CombineTypes<[_NameClassPair, java.lang.Object, java.io.Serializable]> {}
      interface _NameImpl$$static extends ClassLike {
        _getBoolean(p: java.util.Properties, name: string): boolean;
        _toBoolean(name: string): boolean;
        _FLAT: byte;
        _LEFT_TO_RIGHT: byte;
        _RIGHT_TO_LEFT: byte;
        _STYLE_ESCAPE: int;
        _STYLE_NONE: int;
        _STYLE_QUOTE1: int;
        _STYLE_QUOTE2: int;
        _new(syntax: java.util.Properties): NameImpl;
        _new(syntax: java.util.Properties, n: string): NameImpl;
        _new(syntax: java.util.Properties, comps: java.util.Enumeration<string>): NameImpl;
      }
      let NameImpl: _NameImpl$$static;
      interface _NameImpl {
        add(comp: string): void;
        add(posn: int, comp: string): void;
        addAll(comps: java.util.Enumeration<string>): boolean;
        addAll(posn: int, comps: java.util.Enumeration<string>): boolean;
        compareTo(obj: NameImpl): int;
        endsWith(posn: int, suffix: java.util.Enumeration<string>): boolean;
        equals(obj: any): boolean;
        _extractComp(name: string, i: int, len: int, comps: java.util.Vector<string>): int;
        get(posn: int): string;
        getAll(): java.util.Enumeration<string>;
        getPrefix(posn: int): java.util.Enumeration<string>;
        getSuffix(posn: int): java.util.Enumeration<string>;
        hashCode(): int;
        _isA(n: string, i: int, match: string): boolean;
        isEmpty(): boolean;
        _isMeta(n: string, i: int): boolean;
        _isSeparator(n: string, i: int): boolean;
        _recordNamingConvention(p: java.util.Properties): void;
        remove(posn: int): any;
        size(): int;
        _skipSeparator(name: string, i: int): int;
        startsWith(posn: int, prefix: java.util.Enumeration<string>): boolean;
        _stringifyComp(comp: string): string;
        toString(): string;
        _components: java.util.Vector<string>;
        _escapingStyle: int;
        _syntaxAvaSeparator: string;
        _syntaxBeginQuote1: string;
        _syntaxBeginQuote2: string;
        _syntaxCaseInsensitive: boolean;
        _syntaxDirection: byte;
        _syntaxEndQuote1: string;
        _syntaxEndQuote2: string;
        _syntaxEscape: string;
        _syntaxSeparator: string;
        _syntaxSeparator2: string;
        _syntaxTrimBlanks: boolean;
        _syntaxTypevalSeparator: string;
      }
      interface NameImpl extends CombineTypes<[_NameImpl, java.lang.Object]> {}
      interface _NameImplEnumerator$$static extends ClassLike {
        _new(v: java.util.Vector<string>, start: int, lim: int): NameImplEnumerator;
      }
      let NameImplEnumerator: _NameImplEnumerator$$static;
      interface _NameImplEnumerator {
        hasMoreElements(): boolean;
        nextElement(): string;
        nextElement(): any;
        _count: int;
        _limit: int;
        _vector: java.util.Vector<string>;
      }
      interface NameImplEnumerator extends CombineTypes<[_NameImplEnumerator, java.util.Enumeration<string>, java.lang.Object]> {}
      interface _NameNotFoundException$$static extends ClassLike {
        _serialVersionUID: long;
        new(explanation: string): NameNotFoundException;
        new(): NameNotFoundException;
      }
      let NameNotFoundException: _NameNotFoundException$$static;
      interface _NameNotFoundException {
      }
      interface NameNotFoundException extends CombineTypes<[_NameNotFoundException, javax.naming.NamingException]> {}
      interface _NameParser$$static extends ClassLike {
      }
      let NameParser: _NameParser$$static;
      interface _NameParser {
        parse(a0: string): Name;
(a0: string): Name;
      }
      interface NameParser extends CombineTypes<[_NameParser, java.lang.Object]> {}
      interface _NamingEnumeration$$static<T> extends ClassLike {
      }
      let NamingEnumeration: _NamingEnumeration$$static<T>;
      interface _NamingEnumeration<T> {
        close(): void;
        hasMore(): boolean;
        next(): T;
      }
      interface NamingEnumeration<T> extends CombineTypes<[_NamingEnumeration<T>, java.lang.Object, java.util.Enumeration<T>]> {}
      interface _NamingException$$static extends ClassLike {
        _serialVersionUID: long;
        new(explanation: string): NamingException;
        new(): NamingException;
      }
      let NamingException: _NamingException$$static;
      interface _NamingException {
        appendRemainingComponent(name: string): void;
        appendRemainingName(name: Name): void;
        getCause(): java.lang.Throwable;
        getExplanation(): string;
        getRemainingName(): Name;
        getResolvedName(): Name;
        getResolvedObj(): any;
        getRootCause(): java.lang.Throwable;
        initCause(cause: java.lang.Throwable): java.lang.Throwable;
        setRemainingName(name: Name): void;
        setResolvedName(name: Name): void;
        setResolvedObj(obj: any): void;
        setRootCause(e: java.lang.Throwable): void;
        toString(): string;
        toString(detail: boolean): string;
        _remainingName: Name;
        _resolvedName: Name;
        _resolvedObj: any;
        _rootException: java.lang.Throwable;
      }
      interface NamingException extends CombineTypes<[_NamingException, java.lang.Exception]> {}
      interface _NamingSecurityException$$static extends ClassLike {
        _serialVersionUID: long;
        new(explanation: string): NamingSecurityException;
        new(): NamingSecurityException;
      }
      let NamingSecurityException: _NamingSecurityException$$static;
      interface _NamingSecurityException {
      }
      interface NamingSecurityException extends CombineTypes<[_NamingSecurityException, javax.naming.NamingException]> {}
      interface _NoInitialContextException$$static extends ClassLike {
        _serialVersionUID: long;
        new(): NoInitialContextException;
        new(explanation: string): NoInitialContextException;
      }
      let NoInitialContextException: _NoInitialContextException$$static;
      interface _NoInitialContextException {
      }
      interface NoInitialContextException extends CombineTypes<[_NoInitialContextException, javax.naming.NamingException]> {}
      interface _NoPermissionException$$static extends ClassLike {
        _serialVersionUID: long;
        new(explanation: string): NoPermissionException;
        new(): NoPermissionException;
      }
      let NoPermissionException: _NoPermissionException$$static;
      interface _NoPermissionException {
      }
      interface NoPermissionException extends CombineTypes<[_NoPermissionException, javax.naming.NamingSecurityException]> {}
      interface _NotContextException$$static extends ClassLike {
        _serialVersionUID: long;
        new(explanation: string): NotContextException;
        new(): NotContextException;
      }
      let NotContextException: _NotContextException$$static;
      interface _NotContextException {
      }
      interface NotContextException extends CombineTypes<[_NotContextException, javax.naming.NamingException]> {}
      interface _OperationNotSupportedException$$static extends ClassLike {
        _serialVersionUID: long;
        new(): OperationNotSupportedException;
        new(explanation: string): OperationNotSupportedException;
      }
      let OperationNotSupportedException: _OperationNotSupportedException$$static;
      interface _OperationNotSupportedException {
      }
      interface OperationNotSupportedException extends CombineTypes<[_OperationNotSupportedException, javax.naming.NamingException]> {}
      interface _PartialResultException$$static extends ClassLike {
        _serialVersionUID: long;
        new(explanation: string): PartialResultException;
        new(): PartialResultException;
      }
      let PartialResultException: _PartialResultException$$static;
      interface _PartialResultException {
      }
      interface PartialResultException extends CombineTypes<[_PartialResultException, javax.naming.NamingException]> {}
      interface _RefAddr$$static extends ClassLike {
        _serialVersionUID: long;
        _new(addrType: string): RefAddr;
      }
      let RefAddr: _RefAddr$$static;
      interface _RefAddr {
        equals(obj: any): boolean;
        getContent(): any;
(): any;
        getType(): string;
        hashCode(): int;
        toString(): string;
        _addrType: string;
      }
      interface RefAddr extends CombineTypes<[_RefAddr, java.lang.Object, java.io.Serializable]> {}
      interface _Reference$$static extends ClassLike {
        _serialVersionUID: long;
        new(className: string): Reference;
        new(className: string, addr: RefAddr): Reference;
        new(className: string, factory: string, factoryLocation: string): Reference;
        new(className: string, addr: RefAddr, factory: string, factoryLocation: string): Reference;
      }
      let Reference: _Reference$$static;
      interface _Reference {
        add(addr: RefAddr): void;
        add(posn: int, addr: RefAddr): void;
        clear(): void;
        clone(): any;
        equals(obj: any): boolean;
        get(addrType: string): RefAddr;
        get(posn: int): RefAddr;
        getAll(): java.util.Enumeration<RefAddr>;
        getClassName(): string;
        getFactoryClassLocation(): string;
        getFactoryClassName(): string;
        hashCode(): int;
        remove(posn: int): any;
        size(): int;
        toString(): string;
        _addrs: java.util.Vector<RefAddr>;
        _classFactory: string;
        _classFactoryLocation: string;
        _className: string;
      }
      interface Reference extends CombineTypes<[_Reference, java.lang.Cloneable, java.lang.Object, java.io.Serializable]> {}
      interface _Referenceable$$static extends ClassLike {
      }
      let Referenceable: _Referenceable$$static;
      interface _Referenceable {
        getReference(): Reference;
(): Reference;
      }
      interface Referenceable extends CombineTypes<[_Referenceable, java.lang.Object]> {}
      interface _ReferralException$$static extends ClassLike {
        _serialVersionUID: long;
        _new(explanation: string): ReferralException;
        _new(): ReferralException;
      }
      let ReferralException: _ReferralException$$static;
      interface _ReferralException {
        getReferralContext(): Context;
        getReferralContext(a0: java.util.Hashtable<any,any>): Context;
        getReferralInfo(): any;
        retryReferral(): void;
        skipReferral(): boolean;
      }
      interface ReferralException extends CombineTypes<[_ReferralException, javax.naming.NamingException]> {}
      interface _ServiceUnavailableException$$static extends ClassLike {
        _serialVersionUID: long;
        new(explanation: string): ServiceUnavailableException;
        new(): ServiceUnavailableException;
      }
      let ServiceUnavailableException: _ServiceUnavailableException$$static;
      interface _ServiceUnavailableException {
      }
      interface ServiceUnavailableException extends CombineTypes<[_ServiceUnavailableException, javax.naming.NamingException]> {}
      interface _SizeLimitExceededException$$static extends ClassLike {
        _serialVersionUID: long;
        new(): SizeLimitExceededException;
        new(explanation: string): SizeLimitExceededException;
      }
      let SizeLimitExceededException: _SizeLimitExceededException$$static;
      interface _SizeLimitExceededException {
      }
      interface SizeLimitExceededException extends CombineTypes<[_SizeLimitExceededException, javax.naming.LimitExceededException]> {}
      interface _StringRefAddr$$static extends ClassLike {
        _serialVersionUID: long;
        new(addrType: string, addr: string): StringRefAddr;
      }
      let StringRefAddr: _StringRefAddr$$static;
      interface _StringRefAddr {
        getContent(): any;
        _contents: string;
      }
      interface StringRefAddr extends CombineTypes<[_StringRefAddr, javax.naming.RefAddr]> {}
      interface _TimeLimitExceededException$$static extends ClassLike {
        _serialVersionUID: long;
        new(): TimeLimitExceededException;
        new(explanation: string): TimeLimitExceededException;
      }
      let TimeLimitExceededException: _TimeLimitExceededException$$static;
      interface _TimeLimitExceededException {
      }
      interface TimeLimitExceededException extends CombineTypes<[_TimeLimitExceededException, javax.naming.LimitExceededException]> {}
    }
  }
  module sun {
    module security {
      module provider {
        module certpath {
          module ldap {
            interface _JdkLDAP$$static extends ClassLike {
              _serialVersionUID: long;
              new(): JdkLDAP;
            }
            let JdkLDAP: _JdkLDAP$$static;
            interface _JdkLDAP {
            }
            interface JdkLDAP extends CombineTypes<[_JdkLDAP, java.security.Provider]> {}
            interface _JdkLDAP$ProviderService$$static extends ClassLike {
              _new(p: java.security.Provider, type: string, algo: string, cn: string, aliases: java.util.List<string>, attrs: java.util.HashMap<string,string>): JdkLDAP$ProviderService;
            }
            let JdkLDAP$ProviderService: _JdkLDAP$ProviderService$$static;
            interface _JdkLDAP$ProviderService {
              newInstance(ctrParamObj: any): any;
            }
            interface JdkLDAP$ProviderService extends CombineTypes<[_JdkLDAP$ProviderService, java.security.Provider$Service]> {}
            interface _LDAPCertStore$$static extends ClassLike {
              _getInstance(params: java.security.cert.LDAPCertStoreParameters): LDAPCertStoreImpl;
              _certStoreCache: security.util.Cache<LDAPCertStore$Key,LDAPCertStoreImpl>;
              _debug: security.util.Debug;
              new(params: java.security.cert.CertStoreParameters): LDAPCertStore;
            }
            let LDAPCertStore: _LDAPCertStore$$static;
            interface _LDAPCertStore {
              engineGetCRLs(selector: java.security.cert.CRLSelector): java.util.Collection<java.security.cert.X509CRL>;
              engineGetCertificates(selector: java.security.cert.CertSelector): java.util.Collection<java.security.cert.X509Certificate>;
              _impl: LDAPCertStoreImpl;
              _ldapDN: string;
            }
            interface LDAPCertStore extends CombineTypes<[_LDAPCertStore, java.security.cert.CertStoreSpi]> {}
            interface _LDAPCertStore$Key$$static extends ClassLike {
              _new(serverName: string, port: int): LDAPCertStore$Key;
            }
            let LDAPCertStore$Key: _LDAPCertStore$Key$$static;
            interface _LDAPCertStore$Key {
              equals(obj: any): boolean;
              hashCode(): int;
              _hashCode: int;
              _port: int;
              _serverName: string;
            }
            interface LDAPCertStore$Key extends CombineTypes<[_LDAPCertStore$Key, java.lang.Object]> {}
            interface _LDAPCertStoreImpl$$static extends ClassLike {
              _ARL: string;
              _BB0: byte[][];
              _CA_CERT: string;
              _CRL: string;
              _CROSS_CERT: string;
              _DEFAULT_CACHE_LIFETIME: int;
              _DEFAULT_CACHE_SIZE: int;
              _EMPTY_ATTRIBUTES: javax.naming.directory.Attributes;
              _LIFETIME: int;
              _PROP_DISABLE_APP_RESOURCE_FILES: string;
              _PROP_LIFETIME: string;
              _STRING0: string[];
              _USER_CERT: string;
              _debug: security.util.Debug;
              _new(serverName: string, port: int): LDAPCertStoreImpl;
            }
            let LDAPCertStoreImpl: _LDAPCertStoreImpl$$static;
            interface _LDAPCertStoreImpl {
              _createInitialDirContext(server: string, port: int): void;
              _getCRLs(request: LDAPCertStoreImpl$LDAPRequest, id: string, sel: java.security.cert.X509CRLSelector): java.util.Collection<java.security.cert.X509CRL>;
              _getCRLs(xsel: java.security.cert.X509CRLSelector, ldapDN: string): java.util.Collection<java.security.cert.X509CRL>;
              _getCertPairs(request: LDAPCertStoreImpl$LDAPRequest, id: string): java.util.Collection<X509CertificatePair>;
              _getCertificates(request: LDAPCertStoreImpl$LDAPRequest, id: string, sel: java.security.cert.X509CertSelector): java.util.Collection<java.security.cert.X509Certificate>;
              _getCertificates(xsel: java.security.cert.X509CertSelector, ldapDN: string): java.util.Collection<java.security.cert.X509Certificate>;
              _getMatchingCrossCerts(request: LDAPCertStoreImpl$LDAPRequest, forward: java.security.cert.X509CertSelector, reverse: java.security.cert.X509CertSelector): java.util.Collection<java.security.cert.X509Certificate>;
              _cacheHits: int;
              _cacheMisses: int;
              _cf: java.security.cert.CertificateFactory;
              _communicationError: boolean;
              _ctx: javax.naming.ldap.LdapContext;
              _prefetchCRLs: boolean;
              _requests: int;
              _valueCache: security.util.Cache<string,byte[][]>;
            }
            interface LDAPCertStoreImpl extends CombineTypes<[_LDAPCertStoreImpl, java.lang.Object]> {}
            interface _LDAPCertStoreImpl$LDAPRequest$$static extends ClassLike {
              _checkName(name: string): string;
              _getAttributeValues(attr: javax.naming.directory.Attribute): byte[][];
              _new(a0: LDAPCertStoreImpl, name: string): LDAPCertStoreImpl$LDAPRequest;
            }
            let LDAPCertStoreImpl$LDAPRequest: _LDAPCertStoreImpl$LDAPRequest$$static;
            interface _LDAPCertStoreImpl$LDAPRequest {
              _addRequestedAttribute(attrId: string): void;
              _cacheAttribute(attrId: string, values: byte[][]): void;
              _getValueMap(): java.util.Map<string,byte[][]>;
              _getValues(attrId: string): byte[][];
              _name: javax.naming.ldap.LdapName;
              _requestedAttributes: java.util.List<string>;
              _this$0: LDAPCertStoreImpl;
              _valueMap: java.util.Map<string,byte[][]>;
            }
            interface LDAPCertStoreImpl$LDAPRequest extends CombineTypes<[_LDAPCertStoreImpl$LDAPRequest, java.lang.Object]> {}
          }
        }
      }
    }
  }
}
