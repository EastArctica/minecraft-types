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
  module javax {
    module security {
      module auth {
        module kerberos {
          interface _DelegationPermission$$static extends ClassLike {
            _serialVersionUID: long;
            new(principals: string): DelegationPermission;
            new(principals: string, actions: string): DelegationPermission;
          }
          let DelegationPermission: _DelegationPermission$$static;
          interface _DelegationPermission {
            equals(obj: any): boolean;
            hashCode(): int;
            implies(p: java.security.Permission): boolean;
            _init(target: string): void;
            newPermissionCollection(): java.security.PermissionCollection;
            _readObject(s: java.io.ObjectInputStream): void;
            _writeObject(s: java.io.ObjectOutputStream): void;
            _service: string;
            _subordinate: string;
          }
          interface DelegationPermission extends CombineTypes<[_DelegationPermission, java.security.BasicPermission, java.io.Serializable]> {}
          interface _EncryptionKey$$static extends ClassLike {
            _serialVersionUID: long;
            new(keyBytes: byte[], keyType: int): EncryptionKey;
          }
          let EncryptionKey: _EncryptionKey$$static;
          interface _EncryptionKey {
            destroy(): void;
            equals(other: any): boolean;
            getAlgorithm(): string;
            getEncoded(): byte[];
            getFormat(): string;
            getKeyType(): int;
            hashCode(): int;
            isDestroyed(): boolean;
            toString(): string;
            _destroyed: boolean;
            _key: KeyImpl;
          }
          interface EncryptionKey extends CombineTypes<[_EncryptionKey, java.lang.Object, javax.crypto.SecretKey]> {}
          interface _JavaxSecurityAuthKerberosAccessImpl$$static extends ClassLike {
            _new(): JavaxSecurityAuthKerberosAccessImpl;
          }
          let JavaxSecurityAuthKerberosAccessImpl: _JavaxSecurityAuthKerberosAccessImpl$$static;
          interface _JavaxSecurityAuthKerberosAccessImpl {
            kerberosTicketGetClientAlias(t: KerberosTicket): KerberosPrincipal;
            kerberosTicketGetProxy(t: KerberosTicket): KerberosTicket;
            kerberosTicketGetServerAlias(t: KerberosTicket): KerberosPrincipal;
            kerberosTicketSetClientAlias(t: KerberosTicket, a: KerberosPrincipal): void;
            kerberosTicketSetProxy(t: KerberosTicket, p: KerberosTicket): void;
            kerberosTicketSetServerAlias(t: KerberosTicket, a: KerberosPrincipal): void;
            keyTabTakeSnapshot(ktab: KeyTab): sun.security.krb5.internal.ktab.KeyTab;
          }
          interface JavaxSecurityAuthKerberosAccessImpl extends CombineTypes<[_JavaxSecurityAuthKerberosAccessImpl, java.lang.Object, sun.security.krb5.JavaxSecurityAuthKerberosAccess]> {}
          interface _KerberosCredMessage$$static extends ClassLike {
            new(sender: KerberosPrincipal, recipient: KerberosPrincipal, message: byte[]): KerberosCredMessage;
          }
          let KerberosCredMessage: _KerberosCredMessage$$static;
          interface _KerberosCredMessage {
            destroy(): void;
            equals(other: any): boolean;
            getEncoded(): byte[];
            getRecipient(): KerberosPrincipal;
            getSender(): KerberosPrincipal;
            hashCode(): int;
            isDestroyed(): boolean;
            toString(): string;
            _destroyed: boolean;
            _message: byte[];
            _recipient: KerberosPrincipal;
            _sender: KerberosPrincipal;
          }
          interface KerberosCredMessage extends CombineTypes<[_KerberosCredMessage, javax.security.auth.Destroyable, java.lang.Object]> {}
          interface _KerberosKey$$static extends ClassLike {
            _serialVersionUID: long;
            new(principal: KerberosPrincipal, keyBytes: byte[], keyType: int, versionNum: int): KerberosKey;
            new(principal: KerberosPrincipal, password: char[], algorithm: string): KerberosKey;
          }
          let KerberosKey: _KerberosKey$$static;
          interface _KerberosKey {
            destroy(): void;
            equals(other: any): boolean;
            getAlgorithm(): string;
            getEncoded(): byte[];
            getFormat(): string;
            getKeyType(): int;
            getPrincipal(): KerberosPrincipal;
            getVersionNumber(): int;
            hashCode(): int;
            isDestroyed(): boolean;
            toString(): string;
            _destroyed: boolean;
            _key: KeyImpl;
            _principal: KerberosPrincipal;
            _versionNum: int;
          }
          interface KerberosKey extends CombineTypes<[_KerberosKey, java.lang.Object, javax.crypto.SecretKey]> {}
          interface _KerberosPrincipal$$static extends ClassLike {
            readonly KRB_NT_ENTERPRISE: int;
            readonly KRB_NT_PRINCIPAL: int;
            readonly KRB_NT_SRV_HST: int;
            readonly KRB_NT_SRV_INST: int;
            readonly KRB_NT_SRV_XHST: int;
            readonly KRB_NT_UID: int;
            readonly KRB_NT_UNKNOWN: int;
            _serialVersionUID: long;
            new(name: string): KerberosPrincipal;
            new(name: string, nameType: int): KerberosPrincipal;
          }
          let KerberosPrincipal: _KerberosPrincipal$$static;
          interface _KerberosPrincipal {
            equals(other: any): boolean;
            getName(): string;
            getNameType(): int;
            getRealm(): string;
            hashCode(): int;
            _readObject(ois: java.io.ObjectInputStream): void;
            toString(): string;
            _writeObject(oos: java.io.ObjectOutputStream): void;
            _fullName: string;
            _nameType: int;
            _realm: string;
          }
          interface KerberosPrincipal extends CombineTypes<[_KerberosPrincipal, java.security.Principal, java.lang.Object, java.io.Serializable]> {}
          interface _KerberosTicket$$static extends ClassLike {
            _FORWARDABLE_TICKET_FLAG: int;
            _FORWARDED_TICKET_FLAG: int;
            _INITIAL_TICKET_FLAG: int;
            _NUM_FLAGS: int;
            _POSTDATED_TICKET_FLAG: int;
            _PROXIABLE_TICKET_FLAG: int;
            _PROXY_TICKET_FLAG: int;
            _RENEWABLE_TICKET_FLAG: int;
            _serialVersionUID: long;
            new(asn1Encoding: byte[], client: KerberosPrincipal, server: KerberosPrincipal, sessionKey: byte[], keyType: int, flags: boolean[], authTime: java.util.Date, startTime: java.util.Date, endTime: java.util.Date, renewTill: java.util.Date, clientAddresses: java.net.InetAddress[]): KerberosTicket;
          }
          let KerberosTicket: _KerberosTicket$$static;
          interface _KerberosTicket {
            destroy(): void;
            equals(other: any): boolean;
            getAuthTime(): java.util.Date;
            getClient(): KerberosPrincipal;
            getClientAddresses(): java.net.InetAddress[];
            getEncoded(): byte[];
            getEndTime(): java.util.Date;
            getFlags(): boolean[];
            getRenewTill(): java.util.Date;
            getServer(): KerberosPrincipal;
            getSessionKey(): javax.crypto.SecretKey;
            getSessionKeyType(): int;
            getStartTime(): java.util.Date;
            hashCode(): int;
            _init(asn1Encoding: byte[], client: KerberosPrincipal, server: KerberosPrincipal, sessionKey: byte[], keyType: int, flags: boolean[], authTime: java.util.Date, startTime: java.util.Date, endTime: java.util.Date, renewTill: java.util.Date, clientAddresses: java.net.InetAddress[]): void;
            _init(asn1Encoding: byte[], client: KerberosPrincipal, server: KerberosPrincipal, sessionKey: KeyImpl, flags: boolean[], authTime: java.util.Date, startTime: java.util.Date, endTime: java.util.Date, renewTill: java.util.Date, clientAddresses: java.net.InetAddress[]): void;
            isCurrent(): boolean;
            isDestroyed(): boolean;
            isForwardable(): boolean;
            isForwarded(): boolean;
            isInitial(): boolean;
            isPostdated(): boolean;
            isProxiable(): boolean;
            isProxy(): boolean;
            isRenewable(): boolean;
            _readObject(s: java.io.ObjectInputStream): void;
            refresh(): void;
            toString(): string;
            _asn1Encoding: byte[];
            _authTime: java.util.Date;
            _client: KerberosPrincipal;
            _clientAddresses: java.net.InetAddress[];
            _clientAlias: KerberosPrincipal;
            _destroyed: boolean;
            _endTime: java.util.Date;
            _flags: boolean[];
            _proxy: KerberosTicket;
            _renewTill: java.util.Date;
            _server: KerberosPrincipal;
            _serverAlias: KerberosPrincipal;
            _sessionKey: KeyImpl;
            _startTime: java.util.Date;
          }
          interface KerberosTicket extends CombineTypes<[_KerberosTicket, javax.security.auth.Destroyable, javax.security.auth.Refreshable, java.lang.Object, java.io.Serializable]> {}
          interface _KeyImpl$$static extends ClassLike {
            _serialVersionUID: long;
            new(keyBytes: byte[], keyType: int): KeyImpl;
            new(principal: KerberosPrincipal, password: char[], algorithm: string): KeyImpl;
          }
          let KeyImpl: _KeyImpl$$static;
          interface _KeyImpl {
            destroy(): void;
            equals(other: any): boolean;
            getAlgorithm(): string;
            _getAlgorithmName(eType: int): string;
            getEncoded(): byte[];
            getFormat(): string;
            getKeyType(): int;
            hashCode(): int;
            isDestroyed(): boolean;
            _readObject(ois: java.io.ObjectInputStream): void;
            toString(): string;
            _writeObject(oos: java.io.ObjectOutputStream): void;
            _destroyed: boolean;
            _keyBytes: byte[];
            _keyType: int;
          }
          interface KeyImpl extends CombineTypes<[_KeyImpl, javax.security.auth.Destroyable, java.lang.Object, javax.crypto.SecretKey, java.io.Serializable]> {}
          interface _KeyTab$$static extends ClassLike {
            getInstance(file: java.io.File): KeyTab;
            getInstance(princ: KerberosPrincipal, file: java.io.File): KeyTab;
            getInstance(): KeyTab;
            getInstance(princ: KerberosPrincipal): KeyTab;
            getUnboundInstance(file: java.io.File): KeyTab;
            getUnboundInstance(): KeyTab;
          }
          let KeyTab: _KeyTab$$static;
          interface _KeyTab {
            equals(other: any): boolean;
            exists(): boolean;
            _getEncryptionKeys(principal: sun.security.krb5.PrincipalName): sun.security.krb5.EncryptionKey[];
            getKeys(principal: KerberosPrincipal): KerberosKey[];
            getPrincipal(): KerberosPrincipal;
            hashCode(): int;
            isBound(): boolean;
            _takeSnapshot(): sun.security.krb5.internal.ktab.KeyTab;
            toString(): string;
            _bound: boolean;
            _file: java.io.File;
            _princ: KerberosPrincipal;
          }
          interface KeyTab extends CombineTypes<[_KeyTab, java.lang.Object]> {}
          interface _KrbDelegationPermissionCollection$$static extends ClassLike {
            _serialPersistentFields: java.io.ObjectStreamField[];
            _serialVersionUID: long;
            new(): KrbDelegationPermissionCollection;
          }
          let KrbDelegationPermissionCollection: _KrbDelegationPermissionCollection$$static;
          interface _KrbDelegationPermissionCollection {
            add(permission: java.security.Permission): void;
            elements(): java.util.Enumeration<java.security.Permission>;
            implies(permission: java.security.Permission): boolean;
            _readObject(_in: java.io.ObjectInputStream): void;
            _writeObject(out: java.io.ObjectOutputStream): void;
            _perms: java.util.concurrent.ConcurrentHashMap<java.security.Permission,boolean>;
          }
          interface KrbDelegationPermissionCollection extends CombineTypes<[_KrbDelegationPermissionCollection, java.security.PermissionCollection, java.io.Serializable]> {}
          interface _KrbServicePermissionCollection$$static extends ClassLike {
            _serialPersistentFields: java.io.ObjectStreamField[];
            _serialVersionUID: long;
            new(): KrbServicePermissionCollection;
          }
          let KrbServicePermissionCollection: _KrbServicePermissionCollection$$static;
          interface _KrbServicePermissionCollection {
            add(permission: java.security.Permission): void;
            elements(): java.util.Enumeration<java.security.Permission>;
            implies(permission: java.security.Permission): boolean;
            _readObject(_in: java.io.ObjectInputStream): void;
            _writeObject(out: java.io.ObjectOutputStream): void;
            _perms: java.util.concurrent.ConcurrentHashMap<string,java.security.Permission>;
          }
          interface KrbServicePermissionCollection extends CombineTypes<[_KrbServicePermissionCollection, java.security.PermissionCollection, java.io.Serializable]> {}
          interface _ServicePermission$$static extends ClassLike {
            _getActions(mask: int): string;
            _getMask(action: string): int;
            _ACCEPT: int;
            _ALL: int;
            _INITIATE: int;
            _NONE: int;
            _serialVersionUID: long;
            new(servicePrincipal: string, action: string): ServicePermission;
            _new(servicePrincipal: string, mask: int): ServicePermission;
          }
          let ServicePermission: _ServicePermission$$static;
          interface _ServicePermission {
            equals(obj: any): boolean;
            getActions(): string;
            _getMask(): int;
            hashCode(): int;
            implies(p: java.security.Permission): boolean;
            _impliesIgnoreMask(p: ServicePermission): boolean;
            _init(servicePrincipal: string, mask: int): void;
            newPermissionCollection(): java.security.PermissionCollection;
            _readObject(s: java.io.ObjectInputStream): void;
            _writeObject(s: java.io.ObjectOutputStream): void;
            _actions: string;
            _mask: int;
          }
          interface ServicePermission extends CombineTypes<[_ServicePermission, java.security.Permission, java.io.Serializable]> {}
        }
      }
    }
  }
  module org {
    module ietf {
      module jgss {
        interface _ChannelBinding$$static extends ClassLike {
          new(initAddr: java.net.InetAddress, acceptAddr: java.net.InetAddress, appData: byte[]): ChannelBinding;
          new(appData: byte[]): ChannelBinding;
        }
        let ChannelBinding: _ChannelBinding$$static;
        interface _ChannelBinding {
          equals(obj: any): boolean;
          getAcceptorAddress(): java.net.InetAddress;
          getApplicationData(): byte[];
          getInitiatorAddress(): java.net.InetAddress;
          hashCode(): int;
          _acceptor: java.net.InetAddress;
          _appData: byte[];
          _initiator: java.net.InetAddress;
        }
        interface ChannelBinding extends CombineTypes<[_ChannelBinding, java.lang.Object]> {}
        interface _GSSContext$$static extends ClassLike {
          readonly DEFAULT_LIFETIME: int;
          readonly INDEFINITE_LIFETIME: int;
        }
        let GSSContext: _GSSContext$$static;
        interface _GSSContext {
          acceptSecContext(a0: byte[], a1: int, a2: int): byte[];
          acceptSecContext(a0: java.io.InputStream, a1: java.io.OutputStream): void;
          dispose(): void;
          export(): byte[];
          getAnonymityState(): boolean;
          getConfState(): boolean;
          getCredDelegState(): boolean;
          getDelegCred(): GSSCredential;
          getIntegState(): boolean;
          getLifetime(): int;
          getMIC(a0: byte[], a1: int, a2: int, a3: MessageProp): byte[];
          getMIC(a0: java.io.InputStream, a1: java.io.OutputStream, a2: MessageProp): void;
          getMech(): Oid;
          getMutualAuthState(): boolean;
          getReplayDetState(): boolean;
          getSequenceDetState(): boolean;
          getSrcName(): GSSName;
          getTargName(): GSSName;
          getWrapSizeLimit(a0: int, a1: boolean, a2: int): int;
          initSecContext(a0: byte[], a1: int, a2: int): byte[];
          initSecContext(a0: java.io.InputStream, a1: java.io.OutputStream): int;
          isEstablished(): boolean;
          isInitiator(): boolean;
          isProtReady(): boolean;
          isTransferable(): boolean;
          requestAnonymity(a0: boolean): void;
          requestConf(a0: boolean): void;
          requestCredDeleg(a0: boolean): void;
          requestInteg(a0: boolean): void;
          requestLifetime(a0: int): void;
          requestMutualAuth(a0: boolean): void;
          requestReplayDet(a0: boolean): void;
          requestSequenceDet(a0: boolean): void;
          setChannelBinding(a0: ChannelBinding): void;
          unwrap(a0: byte[], a1: int, a2: int, a3: MessageProp): byte[];
          unwrap(a0: java.io.InputStream, a1: java.io.OutputStream, a2: MessageProp): void;
          verifyMIC(a0: byte[], a1: int, a2: int, a3: byte[], a4: int, a5: int, a6: MessageProp): void;
          verifyMIC(a0: java.io.InputStream, a1: java.io.InputStream, a2: MessageProp): void;
          wrap(a0: byte[], a1: int, a2: int, a3: MessageProp): byte[];
          wrap(a0: java.io.InputStream, a1: java.io.OutputStream, a2: MessageProp): void;
        }
        interface GSSContext extends CombineTypes<[_GSSContext, java.lang.Object]> {}
        interface _GSSCredential$$static extends ClassLike {
          readonly ACCEPT_ONLY: int;
          readonly DEFAULT_LIFETIME: int;
          readonly INDEFINITE_LIFETIME: int;
          readonly INITIATE_AND_ACCEPT: int;
          readonly INITIATE_ONLY: int;
        }
        let GSSCredential: _GSSCredential$$static;
        interface _GSSCredential {
          add(a0: GSSName, a1: int, a2: int, a3: Oid, a4: int): void;
          dispose(): void;
          equals(a0: any): boolean;
          getMechs(): Oid[];
          getName(): GSSName;
          getName(a0: Oid): GSSName;
          getRemainingAcceptLifetime(a0: Oid): int;
          getRemainingInitLifetime(a0: Oid): int;
          getRemainingLifetime(): int;
          getUsage(): int;
          getUsage(a0: Oid): int;
          hashCode(): int;
        }
        interface GSSCredential extends CombineTypes<[_GSSCredential, java.lang.Cloneable, java.lang.Object]> {}
        interface _GSSException$$static extends ClassLike {
          readonly BAD_BINDINGS: int;
          readonly BAD_MECH: int;
          readonly BAD_MIC: int;
          readonly BAD_NAME: int;
          readonly BAD_NAMETYPE: int;
          readonly BAD_QOP: int;
          readonly BAD_STATUS: int;
          readonly CONTEXT_EXPIRED: int;
          readonly CREDENTIALS_EXPIRED: int;
          readonly DEFECTIVE_CREDENTIAL: int;
          readonly DEFECTIVE_TOKEN: int;
          readonly DUPLICATE_ELEMENT: int;
          readonly DUPLICATE_TOKEN: int;
          readonly FAILURE: int;
          readonly GAP_TOKEN: int;
          readonly NAME_NOT_MN: int;
          readonly NO_CONTEXT: int;
          readonly NO_CRED: int;
          readonly OLD_TOKEN: int;
          readonly UNAUTHORIZED: int;
          readonly UNAVAILABLE: int;
          readonly UNSEQ_TOKEN: int;
          _messages: string[];
          _serialVersionUID: long;
          new(majorCode: int): GSSException;
          _new(majorCode: int, majorString: string): GSSException;
          new(majorCode: int, minorCode: int, minorString: string): GSSException;
        }
        let GSSException: _GSSException$$static;
        interface _GSSException {
          getMajor(): int;
          getMajorString(): string;
          getMessage(): string;
          getMinor(): int;
          getMinorString(): string;
          setMinor(minorCode: int, message: string): void;
          toString(): string;
          _validateMajor(major: int): boolean;
          _major: int;
          _majorString: string;
          _minor: int;
          _minorMessage: string;
        }
        interface GSSException extends CombineTypes<[_GSSException, java.lang.Exception]> {}
        interface _GSSManager$$static extends ClassLike {
          getInstance(): GSSManager;
          new(): GSSManager;
        }
        let GSSManager: _GSSManager$$static;
        interface _GSSManager {
          addProviderAtEnd(a0: java.security.Provider, a1: Oid): void;
          addProviderAtFront(a0: java.security.Provider, a1: Oid): void;
          createContext(a0: GSSName, a1: Oid, a2: GSSCredential, a3: int): GSSContext;
          createContext(a0: GSSCredential): GSSContext;
          createContext(a0: byte[]): GSSContext;
          createCredential(a0: int): GSSCredential;
          createCredential(a0: GSSName, a1: int, a2: Oid, a3: int): GSSCredential;
          createCredential(a0: GSSName, a1: int, a2: Oid[], a3: int): GSSCredential;
          createName(a0: string, a1: Oid): GSSName;
          createName(a0: byte[], a1: Oid): GSSName;
          createName(a0: string, a1: Oid, a2: Oid): GSSName;
          createName(a0: byte[], a1: Oid, a2: Oid): GSSName;
          getMechs(): Oid[];
          getMechsForName(a0: Oid): Oid[];
          getNamesForMech(a0: Oid): Oid[];
        }
        interface GSSManager extends CombineTypes<[_GSSManager, java.lang.Object]> {}
        interface _GSSName$$static extends ClassLike {
          readonly NT_ANONYMOUS: Oid;
          readonly NT_EXPORT_NAME: Oid;
          readonly NT_HOSTBASED_SERVICE: Oid;
          readonly NT_MACHINE_UID_NAME: Oid;
          readonly NT_STRING_UID_NAME: Oid;
          readonly NT_USER_NAME: Oid;
        }
        let GSSName: _GSSName$$static;
        interface _GSSName {
          canonicalize(a0: Oid): GSSName;
          equals(a0: GSSName): boolean;
          equals(a0: any): boolean;
          export(): byte[];
          getStringNameType(): Oid;
          hashCode(): int;
          isAnonymous(): boolean;
          isMN(): boolean;
          toString(): string;
        }
        interface GSSName extends CombineTypes<[_GSSName, java.lang.Object]> {}
        interface _MessageProp$$static extends ClassLike {
          new(privState: boolean): MessageProp;
          new(qop: int, privState: boolean): MessageProp;
        }
        let MessageProp: _MessageProp$$static;
        interface _MessageProp {
          getMinorStatus(): int;
          getMinorString(): string;
          getPrivacy(): boolean;
          getQOP(): int;
          isDuplicateToken(): boolean;
          isGapToken(): boolean;
          isOldToken(): boolean;
          isUnseqToken(): boolean;
          _resetStatusValues(): void;
          setPrivacy(privState: boolean): void;
          setQOP(qop: int): void;
          setSupplementaryStates(duplicate: boolean, old: boolean, unseq: boolean, gap: boolean, minorStatus: int, minorString: string): void;
          _dupToken: boolean;
          _gapToken: boolean;
          _minorStatus: int;
          _minorString: string;
          _oldToken: boolean;
          _privacyState: boolean;
          _qop: int;
          _unseqToken: boolean;
        }
        interface MessageProp extends CombineTypes<[_MessageProp, java.lang.Object]> {}
        interface _Oid$$static extends ClassLike {
          _getInstance(strOid: string): Oid;
          new(strOid: string): Oid;
          new(derOid: java.io.InputStream): Oid;
          new(data: byte[]): Oid;
        }
        let Oid: _Oid$$static;
        interface _Oid {
          containedIn(oids: Oid[]): boolean;
          equals(other: any): boolean;
          getDER(): byte[];
          hashCode(): int;
          toString(): string;
          _derEncoding: byte[];
          _oid: sun.security.util.ObjectIdentifier;
        }
        interface Oid extends CombineTypes<[_Oid, java.lang.Object]> {}
      }
    }
  }
  module sun {
    module net {
      module www {
        module protocol {
          module http {
            module spnego {
              interface _NegotiateCallbackHandler$$static extends ClassLike {
                new(hci: HttpCallerInfo): NegotiateCallbackHandler;
              }
              let NegotiateCallbackHandler: _NegotiateCallbackHandler$$static;
              interface _NegotiateCallbackHandler {
                _getAnswer(): void;
                handle(callbacks: javax.security.auth.callback.Callback[]): void;
                _answered: boolean;
                _hci: HttpCallerInfo;
                _password: char[];
                _username: string;
              }
              interface NegotiateCallbackHandler extends CombineTypes<[_NegotiateCallbackHandler, javax.security.auth.callback.CallbackHandler, java.lang.Object]> {}
              interface _NegotiatorImpl$$static extends ClassLike {
                _DEBUG: boolean;
                new(hci: HttpCallerInfo): NegotiatorImpl;
              }
              let NegotiatorImpl: _NegotiatorImpl$$static;
              interface _NegotiatorImpl {
                disposeContext(): void;
                firstToken(): byte[];
                _init(hci: HttpCallerInfo): void;
                nextToken(token: byte[]): byte[];
                _context: org.ietf.jgss.GSSContext;
                _oneToken: byte[];
              }
              interface NegotiatorImpl extends CombineTypes<[_NegotiatorImpl, sun.net.www.protocol.http.Negotiator]> {}
            }
          }
        }
      }
    }
    module security {
      module jgss {
        module krb5 {
          module internal {
            interface _TlsChannelBindingImpl$$static extends ClassLike {
              new(appData: byte[]): TlsChannelBindingImpl;
            }
            let TlsChannelBindingImpl: _TlsChannelBindingImpl$$static;
            interface _TlsChannelBindingImpl {
            }
            interface TlsChannelBindingImpl extends CombineTypes<[_TlsChannelBindingImpl, org.ietf.jgss.ChannelBinding]> {}
          }
          interface _AcceptSecContextToken$$static extends ClassLike {
            new(context: Krb5Context, apReq: security.krb5.KrbApReq): AcceptSecContextToken;
            new(context: Krb5Context, serviceCreds: security.krb5.Credentials, apReq: security.krb5.KrbApReq, is: java.io.InputStream): AcceptSecContextToken;
          }
          let AcceptSecContextToken: _AcceptSecContextToken$$static;
          interface _AcceptSecContextToken {
            encode(): byte[];
            _apRep: security.krb5.KrbApRep;
          }
          interface AcceptSecContextToken extends CombineTypes<[_AcceptSecContextToken, sun.security.jgss.krb5.InitialToken]> {}
          interface _CipherHelper$$static extends ClassLike {
            _getDesEncryptionKey(key: byte[]): byte[];
            _AES_IV_SIZE: int;
            _DEBUG: boolean;
            _DES_CHECKSUM_SIZE: int;
            _DES_IV_SIZE: int;
            _HMAC_CHECKSUM_SIZE: int;
            _KG_USAGE_SEAL: int;
            _KG_USAGE_SEQ: int;
            _KG_USAGE_SIGN: int;
            _KG_USAGE_SIGN_MS: int;
            _ZERO_IV: byte[];
            _ZERO_IV_AES: byte[];
            _new(key: security.krb5.EncryptionKey): CipherHelper;
          }
          let CipherHelper: _CipherHelper$$static;
          interface _CipherHelper {
            _aes128Decrypt(token: WrapToken_v2, ciphertext: byte[], cStart: int, cLen: int, plaintext: byte[], pStart: int, key_usage: int): void;
            _aes128Encrypt(confounder: byte[], tokenHeader: byte[], plaintext: byte[], start: int, len: int, key_usage: int): byte[];
            _aes128Sha2Decrypt(token: WrapToken_v2, ciphertext: byte[], cStart: int, cLen: int, plaintext: byte[], pStart: int, key_usage: int): void;
            _aes128Sha2Encrypt(confounder: byte[], tokenHeader: byte[], plaintext: byte[], start: int, len: int, key_usage: int): byte[];
            _aes256Decrypt(token: WrapToken_v2, ciphertext: byte[], cStart: int, cLen: int, plaintext: byte[], pStart: int, key_usage: int): void;
            _aes256Encrypt(confounder: byte[], tokenHeader: byte[], plaintext: byte[], start: int, len: int, key_usage: int): byte[];
            _aes256Sha2Decrypt(token: WrapToken_v2, ciphertext: byte[], cStart: int, cLen: int, plaintext: byte[], pStart: int, key_usage: int): void;
            _aes256Sha2Encrypt(confounder: byte[], tokenHeader: byte[], plaintext: byte[], start: int, len: int, key_usage: int): byte[];
            _arcFourDecrypt(token: WrapToken, ciphertext: byte[], cStart: int, cLen: int, plaintext: byte[], pStart: int): void;
            _arcFourEncrypt(token: WrapToken, confounder: byte[], plaintext: byte[], start: int, len: int, padding: byte[]): byte[];
            _calculateChecksum(alg: int, header: byte[], trailer: byte[], data: byte[], start: int, len: int, tokenId: int): byte[];
            _calculateChecksum(header: byte[], data: byte[], start: int, len: int, key_usage: int): byte[];
            _decryptData(token: WrapToken, ciphertext: byte[], cStart: int, cLen: int, plaintext: byte[], pStart: int): void;
            _decryptData(token: WrapToken_v2, ciphertext: byte[], cStart: int, cLen: int, plaintext: byte[], pStart: int, key_usage: int): void;
            _decryptData(token: WrapToken, cipherStream: java.io.InputStream, cLen: int, plaintext: byte[], pStart: int): void;
            _decryptData(token: WrapToken_v2, cipherStream: java.io.InputStream, cLen: int, plaintext: byte[], pStart: int, key_usage: int): void;
            _decryptSeq(ivec: byte[], ciphertext: byte[], start: int, len: int): byte[];
            _des3KdDecrypt(token: WrapToken, ciphertext: byte[], cStart: int, cLen: int, plaintext: byte[], pStart: int): void;
            _des3KdEncrypt(confounder: byte[], plaintext: byte[], start: int, len: int, padding: byte[]): byte[];
            _desCbcDecrypt(token: WrapToken, key: byte[], cipherText: byte[], offset: int, len: int, dataOutBuf: byte[], dataOffset: int): void;
            _desCbcDecrypt(token: WrapToken, key: byte[], is: java.io.InputStream, len: int, dataOutBuf: byte[], dataOffset: int): void;
            _encryptData(token: WrapToken, confounder: byte[], plaintext: byte[], start: int, len: int, padding: byte[], os: java.io.OutputStream): void;
            _encryptData(token: WrapToken_v2, confounder: byte[], tokenHeader: byte[], plaintext: byte[], start: int, len: int, key_usage: int): byte[];
            _encryptData(token: WrapToken, confounder: byte[], plaintext: byte[], pStart: int, pLen: int, padding: byte[], ciphertext: byte[], cStart: int): void;
            _encryptData(token: WrapToken_v2, confounder: byte[], tokenHeader: byte[], plaintext: byte[], pStart: int, pLen: int, ciphertext: byte[], cStart: int, key_usage: int): int;
            _encryptSeq(ivec: byte[], plaintext: byte[], start: int, len: int): byte[];
            _getChecksumLength(): int;
            _getDesCbcChecksum(key: byte[], header: byte[], data: byte[], offset: int, len: int): byte[];
            _getEType(): int;
            _getInitializedDes(encryptMode: boolean, key: byte[], ivBytes: byte[]): javax.crypto.Cipher;
            _getProto(): int;
            _getSealAlg(): int;
            _getSgnAlg(): int;
            _isArcFour(): boolean;
            _etype: int;
            _keybytes: byte[];
            _sealAlg: int;
            _sgnAlg: int;
          }
          interface CipherHelper extends CombineTypes<[_CipherHelper, java.lang.Object]> {}
          interface _CipherHelper$WrapTokenInputStream$$static extends ClassLike {
            new(is: java.io.InputStream, length: int): CipherHelper$WrapTokenInputStream;
          }
          let CipherHelper$WrapTokenInputStream: _CipherHelper$WrapTokenInputStream$$static;
          interface _CipherHelper$WrapTokenInputStream {
            available(): int;
            close(): void;
            read(): int;
            read(b: byte[]): int;
            read(b: byte[], off: int, len: int): int;
            skip(n: long): long;
            _is: java.io.InputStream;
            _length: int;
            _remaining: int;
            _temp: int;
          }
          interface CipherHelper$WrapTokenInputStream extends CombineTypes<[_CipherHelper$WrapTokenInputStream, java.io.InputStream]> {}
          interface _InitSecContextToken$$static extends ClassLike {
            _ACCEPTOR_USE_INITIATOR_SEQNUM: boolean;
            _new(context: Krb5Context, tgt: security.krb5.Credentials, serviceTicket: security.krb5.Credentials): InitSecContextToken;
            _new(context: Krb5Context, cred: Krb5AcceptCredential, is: java.io.InputStream): InitSecContextToken;
          }
          let InitSecContextToken: _InitSecContextToken$$static;
          interface _InitSecContextToken {
            encode(): byte[];
            getKrbApReq(): security.krb5.KrbApReq;
            _apReq: security.krb5.KrbApReq;
          }
          interface InitSecContextToken extends CombineTypes<[_InitSecContextToken, sun.security.jgss.krb5.InitialToken]> {}
          interface _InitialToken$$static extends ClassLike {
            _CHANNEL_BINDING_AF_INET: int;
            _CHANNEL_BINDING_AF_INET6: int;
            _CHANNEL_BINDING_AF_NULL_ADDR: int;
            _CHANNEL_BINDING_AF_UNSPEC: int;
            _CHECKSUM_BINDINGS_SIZE: int;
            _CHECKSUM_CONF_FLAG: int;
            _CHECKSUM_DELEG_FLAG: int;
            _CHECKSUM_DELEG_LGTH_SIZE: int;
            _CHECKSUM_DELEG_OPT_SIZE: int;
            _CHECKSUM_FLAGS_SIZE: int;
            _CHECKSUM_INTEG_FLAG: int;
            _CHECKSUM_LENGTH_SIZE: int;
            _CHECKSUM_MUTUAL_FLAG: int;
            _CHECKSUM_REPLAY_FLAG: int;
            _CHECKSUM_SEQUENCE_FLAG: int;
            _CHECKSUM_TYPE: int;
            _Inet4_ADDRSZ: int;
            _Inet6_ADDRSZ: int;
            _new(): InitialToken;
          }
          let InitialToken: _InitialToken$$static;
          interface _InitialToken {
            _computeChannelBinding(channelBinding: org.ietf.jgss.ChannelBinding): byte[];
            encode(): byte[];
(): byte[];
            _getAddrBytes(addr: java.net.InetAddress): byte[];
            _getAddrType(addr: java.net.InetAddress, defValue: int): int;
            _CHECKSUM_FIRST_BYTES: byte[];
          }
          interface InitialToken extends CombineTypes<[_InitialToken, sun.security.jgss.krb5.Krb5Token]> {}
          interface _InitialToken$OverloadedChecksum$$static extends ClassLike {
            new(this$0: InitialToken, context: Krb5Context, tgt: security.krb5.Credentials, serviceTicket: security.krb5.Credentials): InitialToken$OverloadedChecksum;
            new(this$0: InitialToken, context: Krb5Context, checksum: security.krb5.Checksum, key: security.krb5.EncryptionKey, subKey: security.krb5.EncryptionKey): InitialToken$OverloadedChecksum;
          }
          let InitialToken$OverloadedChecksum: _InitialToken$OverloadedChecksum$$static;
          interface _InitialToken$OverloadedChecksum {
            getChecksum(): security.krb5.Checksum;
            getDelegatedCreds(): security.krb5.Credentials;
            setContextFlags(context: Krb5Context): void;
            _useNullKey(ch: CipherHelper): boolean;
            _checksumBytes: byte[];
            _delegCreds: security.krb5.Credentials;
            _flags: int;
          }
          interface InitialToken$OverloadedChecksum extends CombineTypes<[_InitialToken$OverloadedChecksum, java.lang.Object]> {}
          interface _Krb5AcceptCredential$$static extends ClassLike {
            _getInstance(caller: GSSCaller, name: Krb5NameElement): Krb5AcceptCredential;
          }
          let Krb5AcceptCredential: _Krb5AcceptCredential$$static;
          interface _Krb5AcceptCredential {
            destroy(): void;
            dispose(): void;
            getAcceptLifetime(): int;
            getInitLifetime(): int;
            getKrb5EncryptionKeys(princ: security.krb5.PrincipalName): security.krb5.EncryptionKey[];
            getMechanism(): org.ietf.jgss.Oid;
            getName(): jgss.spi.GSSNameSpi;
            getProvider(): java.security.Provider;
            impersonate(name: jgss.spi.GSSNameSpi): jgss.spi.GSSCredentialSpi;
            isAcceptorCredential(): boolean;
            isInitiatorCredential(): boolean;
            _name: Krb5NameElement;
            _screds: ServiceCreds;
          }
          interface Krb5AcceptCredential extends CombineTypes<[_Krb5AcceptCredential, java.lang.Object, sun.security.jgss.krb5.Krb5CredElement]> {}
          interface _Krb5Context$$static extends ClassLike {
            _getHexBytes(bytes: byte[], pos: int, len: int): string;
            _printState(state: int): string;
            readonly ACCEPTOR_SUBKEY: int;
            _DEBUG: boolean;
            readonly INITIATOR_SUBKEY: int;
            readonly SESSION_KEY: int;
            _STATE_DELETED: int;
            _STATE_DONE: int;
            _STATE_IN_PROCESS: int;
            _STATE_NEW: int;
            _new(caller: GSSCaller, peerName: Krb5NameElement, myCred: Krb5CredElement, lifetime: int): Krb5Context;
            _new(caller: GSSCaller, myCred: Krb5CredElement): Krb5Context;
            new(caller: GSSCaller, interProcessToken: byte[]): Krb5Context;
          }
          let Krb5Context: _Krb5Context$$static;
          interface _Krb5Context {
            acceptSecContext(is: java.io.InputStream, mechTokenSize: int): byte[];
            _checkPermission(principal: string, action: string): void;
            dispose(): void;
            export(): byte[];
            getAnonymityState(): boolean;
            _getCaller(): GSSCaller;
            _getChannelBinding(): org.ietf.jgss.ChannelBinding;
            _getCipherHelper(ckey: security.krb5.EncryptionKey): CipherHelper;
            getConfState(): boolean;
            getCredDelegState(): boolean;
            getDelegCred(): jgss.spi.GSSCredentialSpi;
            getDelegPolicyState(): boolean;
            getIntegState(): boolean;
            _getKey(): security.krb5.EncryptionKey;
            getKeySrc(): int;
            getLifetime(): int;
            getMIC(inMsg: byte[], offset: int, len: int, msgProp: org.ietf.jgss.MessageProp): byte[];
            _getMIC(inMsg: byte[], offset: int, len: int, outBuf: byte[], outOffset: int, msgProp: org.ietf.jgss.MessageProp): int;
            _getMIC(inMsg: byte[], offset: int, len: int, os: java.io.OutputStream, msgProp: org.ietf.jgss.MessageProp): void;
            getMIC(is: java.io.InputStream, os: java.io.OutputStream, msgProp: org.ietf.jgss.MessageProp): void;
            getMech(): org.ietf.jgss.Oid;
            getMutualAuthState(): boolean;
            getProvider(): java.security.Provider;
            getReplayDetState(): boolean;
            getSequenceDetState(): boolean;
            getSrcName(): jgss.spi.GSSNameSpi;
            getTargName(): jgss.spi.GSSNameSpi;
            getWrapSizeLimit(qop: int, confReq: boolean, maxTokSize: int): int;
            _incrementMySequenceNumber(): int;
            initSecContext(is: java.io.InputStream, mechTokenSize: int): byte[];
            inquireSecContext(type: string): any;
            isEstablished(): boolean;
            isInitiator(): boolean;
            isProtReady(): boolean;
            isTransferable(): boolean;
            requestAnonymity(value: boolean): void;
            requestConf(value: boolean): void;
            requestCredDeleg(value: boolean): void;
            requestDelegPolicy(value: boolean): void;
            requestInteg(value: boolean): void;
            requestLifetime(lifetime: int): void;
            requestMutualAuth(value: boolean): void;
            requestReplayDet(value: boolean): void;
            requestSequenceDet(value: boolean): void;
            _resetMySequenceNumber(seqNumber: int): void;
            _resetPeerSequenceNumber(seqNumber: int): void;
            setAuthTime(authTime: string): void;
            setAuthzData(authzData: security.krb5.internal.AuthorizationData): void;
            setChannelBinding(channelBinding: org.ietf.jgss.ChannelBinding): void;
            _setConfState(state: boolean): void;
            _setCredDelegState(state: boolean): void;
            _setDelegCred(delegatedCred: Krb5CredElement): void;
            _setDelegPolicyState(state: boolean): void;
            _setIntegState(state: boolean): void;
            _setKey(keySrc: int, key: security.krb5.EncryptionKey): void;
            _setMutualAuthState(state: boolean): void;
            _setReplayDetState(state: boolean): void;
            _setSequenceDetState(state: boolean): void;
            _setSequencingAndReplayProps(token: MessageToken, prop: org.ietf.jgss.MessageProp): void;
            _setSequencingAndReplayProps(token: MessageToken_v2, prop: org.ietf.jgss.MessageProp): void;
            setTktFlags(tktFlags: boolean[]): void;
            _tryConstrainedDelegation(): void;
            unwrap(inBuf: byte[], offset: int, len: int, msgProp: org.ietf.jgss.MessageProp): byte[];
            unwrap(inBuf: byte[], inOffset: int, len: int, outBuf: byte[], outOffset: int, msgProp: org.ietf.jgss.MessageProp): int;
            unwrap(is: java.io.InputStream, outBuf: byte[], outOffset: int, msgProp: org.ietf.jgss.MessageProp): int;
            unwrap(is: java.io.InputStream, os: java.io.OutputStream, msgProp: org.ietf.jgss.MessageProp): void;
            verifyMIC(inTok: byte[], tokOffset: int, tokLen: int, inMsg: byte[], msgOffset: int, msgLen: int, msgProp: org.ietf.jgss.MessageProp): void;
            _verifyMIC(is: java.io.InputStream, inMsg: byte[], msgOffset: int, msgLen: int, msgProp: org.ietf.jgss.MessageProp): void;
            verifyMIC(is: java.io.InputStream, msgStr: java.io.InputStream, mProp: org.ietf.jgss.MessageProp): void;
            wrap(inBuf: byte[], offset: int, len: int, msgProp: org.ietf.jgss.MessageProp): byte[];
            wrap(inBuf: byte[], inOffset: int, len: int, outBuf: byte[], outOffset: int, msgProp: org.ietf.jgss.MessageProp): int;
            wrap(inBuf: byte[], offset: int, len: int, os: java.io.OutputStream, msgProp: org.ietf.jgss.MessageProp): void;
            wrap(is: java.io.InputStream, os: java.io.OutputStream, msgProp: org.ietf.jgss.MessageProp): void;
            _apReq: security.krb5.KrbApReq;
            _authTime: string;
            _authzData: security.krb5.internal.AuthorizationData;
            _caller: GSSCaller;
            _channelBinding: org.ietf.jgss.ChannelBinding;
            _cipherHelper: CipherHelper;
            _confState: boolean;
            _credDelegState: boolean;
            _delegPolicyState: boolean;
            _delegatedCred: Krb5CredElement;
            _initiator: boolean;
            _integState: boolean;
            _isConstrainedDelegationTried: boolean;
            _key: security.krb5.EncryptionKey;
            _keySrc: int;
            _lifetime: int;
            _mutualAuthState: boolean;
            _myCred: Krb5CredElement;
            _myName: Krb5NameElement;
            _mySeqNumber: int;
            _mySeqNumberLock: any;
            _peerName: Krb5NameElement;
            _peerSeqNumberLock: any;
            _peerTokenTracker: TokenTracker;
            _replayDetState: boolean;
            _sequenceDetState: boolean;
            _serviceCreds: security.krb5.Credentials;
            _state: int;
            _tgt: security.krb5.Credentials;
            _tktFlags: boolean[];
          }
          interface Krb5Context extends CombineTypes<[_Krb5Context, sun.security.jgss.spi.GSSContextSpi, java.lang.Object]> {}
          interface _Krb5Context$KerberosSessionKey$$static extends ClassLike {
            _serialVersionUID: long;
            _new(key: security.krb5.EncryptionKey): Krb5Context$KerberosSessionKey;
          }
          let Krb5Context$KerberosSessionKey: _Krb5Context$KerberosSessionKey$$static;
          interface _Krb5Context$KerberosSessionKey {
            getAlgorithm(): string;
            getEncoded(): byte[];
            getFormat(): string;
            _readObject(stream: java.io.ObjectInputStream): void;
            toString(): string;
            _key: security.krb5.EncryptionKey;
          }
          interface Krb5Context$KerberosSessionKey extends CombineTypes<[_Krb5Context$KerberosSessionKey, java.security.Key, java.lang.Object]> {}
          interface _Krb5CredElement$$static extends ClassLike {
          }
          let Krb5CredElement: _Krb5CredElement$$static;
          interface _Krb5CredElement {
          }
          interface Krb5CredElement extends CombineTypes<[_Krb5CredElement, sun.security.jgss.spi.GSSCredentialSpi, java.lang.Object]> {}
          interface _Krb5InitCredential$$static extends ClassLike {
            _getInstance(caller: GSSCaller, name: Krb5NameElement, initLifetime: int): Krb5InitCredential;
            _getInstance(name: Krb5NameElement, delegatedCred: security.krb5.Credentials): Krb5InitCredential;
            _getTgt(caller: GSSCaller, name: Krb5NameElement, initLifetime: int): javax.security.auth.kerberos.KerberosTicket;
            _serialVersionUID: long;
          }
          let Krb5InitCredential: _Krb5InitCredential$$static;
          interface _Krb5InitCredential {
            dispose(): void;
            getAcceptLifetime(): int;
            getInitLifetime(): int;
            _getKrb5Credentials(): security.krb5.Credentials;
            getMechanism(): org.ietf.jgss.Oid;
            getName(): jgss.spi.GSSNameSpi;
            getProvider(): java.security.Provider;
            impersonate(name: jgss.spi.GSSNameSpi): jgss.spi.GSSCredentialSpi;
            isAcceptorCredential(): boolean;
            isInitiatorCredential(): boolean;
            _readObject(stream: java.io.ObjectInputStream): void;
            _krb5Credentials: security.krb5.Credentials;
            _name: Krb5NameElement;
            proxyTicket: javax.security.auth.kerberos.KerberosTicket;
          }
          interface Krb5InitCredential extends CombineTypes<[_Krb5InitCredential, javax.security.auth.kerberos.KerberosTicket, sun.security.jgss.krb5.Krb5CredElement]> {}
          interface _Krb5MechFactory$$static extends ClassLike {
            checkAcceptCredPermission(name: Krb5NameElement, originalName: jgss.spi.GSSNameSpi): void;
            checkInitCredPermission(name: Krb5NameElement): void;
            _createOid(oidStr: string): org.ietf.jgss.Oid;
            _getCredFromSubject(name: jgss.spi.GSSNameSpi, initiate: boolean): Krb5CredElement;
            _DEBUG: boolean;
            _GSS_KRB5_MECH_OID: org.ietf.jgss.Oid;
            _NT_GSS_KRB5_PRINCIPAL: org.ietf.jgss.Oid;
            _PROVIDER: java.security.Provider;
            _nameTypes: org.ietf.jgss.Oid[];
            new(): Krb5MechFactory;
            new(caller: GSSCaller): Krb5MechFactory;
          }
          let Krb5MechFactory: _Krb5MechFactory$$static;
          interface _Krb5MechFactory {
            getCredentialElement(name: jgss.spi.GSSNameSpi, initLifetime: int, acceptLifetime: int, usage: int): jgss.spi.GSSCredentialSpi;
            getMechanismContext(peer: jgss.spi.GSSNameSpi, myInitiatorCred: jgss.spi.GSSCredentialSpi, lifetime: int): jgss.spi.GSSContextSpi;
            getMechanismContext(myAcceptorCred: jgss.spi.GSSCredentialSpi): jgss.spi.GSSContextSpi;
            getMechanismContext(exportedContext: byte[]): jgss.spi.GSSContextSpi;
            getMechanismOid(): org.ietf.jgss.Oid;
            getNameElement(nameStr: string, nameType: org.ietf.jgss.Oid): jgss.spi.GSSNameSpi;
            getNameElement(name: byte[], nameType: org.ietf.jgss.Oid): jgss.spi.GSSNameSpi;
            getNameTypes(): org.ietf.jgss.Oid[];
            getProvider(): java.security.Provider;
            _caller: GSSCaller;
          }
          interface Krb5MechFactory extends CombineTypes<[_Krb5MechFactory, sun.security.jgss.spi.MechanismFactory, java.lang.Object]> {}
          interface _Krb5NameElement$$static extends ClassLike {
            _getComponents(gssNameStr: string): string[];
            _getHostBasedInstance(serviceName: string, hostName: string): string;
            _getInstance(gssNameStr: string, gssNameType: org.ietf.jgss.Oid): Krb5NameElement;
            getInstance(principalName: security.krb5.PrincipalName): Krb5NameElement;
          }
          let Krb5NameElement: _Krb5NameElement$$static;
          interface _Krb5NameElement {
            equals(other: jgss.spi.GSSNameSpi): boolean;
            equals(another: any): boolean;
            export(): byte[];
            getGSSNameType(): org.ietf.jgss.Oid;
            getKrb5PrincipalName(): security.krb5.PrincipalName;
            getMechanism(): org.ietf.jgss.Oid;
            getProvider(): java.security.Provider;
            getStringNameType(): org.ietf.jgss.Oid;
            hashCode(): int;
            isAnonymousName(): boolean;
            toString(): string;
            _gssNameStr: string;
            _gssNameType: org.ietf.jgss.Oid;
            _krb5PrincipalName: security.krb5.PrincipalName;
          }
          interface Krb5NameElement extends CombineTypes<[_Krb5NameElement, sun.security.jgss.spi.GSSNameSpi, java.lang.Object]> {}
          interface _Krb5ProxyCredential$$static extends ClassLike {
            _tryImpersonation(caller: GSSCaller, initiator: Krb5InitCredential): Krb5CredElement;
            _new(self: Krb5InitCredential, user: Krb5NameElement, userCreds: security.krb5.Credentials): Krb5ProxyCredential;
          }
          let Krb5ProxyCredential: _Krb5ProxyCredential$$static;
          interface _Krb5ProxyCredential {
            dispose(): void;
            getAcceptLifetime(): int;
            getInitLifetime(): int;
            getMechanism(): org.ietf.jgss.Oid;
            getName(): Krb5NameElement;
            getName(): jgss.spi.GSSNameSpi;
            getProvider(): java.security.Provider;
            impersonate(name: jgss.spi.GSSNameSpi): jgss.spi.GSSCredentialSpi;
            isAcceptorCredential(): boolean;
            isInitiatorCredential(): boolean;
            readonly self: Krb5InitCredential;
            _user: Krb5NameElement;
            readonly userCreds: security.krb5.Credentials;
          }
          interface Krb5ProxyCredential extends CombineTypes<[_Krb5ProxyCredential, java.lang.Object, sun.security.jgss.krb5.Krb5CredElement]> {}
          interface _Krb5Token$$static extends ClassLike {
            getTokenName(tokenId: int): string;
            readonly AP_REP_ID: int;
            readonly AP_REQ_ID: int;
            readonly ERR_ID: int;
            readonly MIC_ID: int;
            readonly MIC_ID_v2: int;
            OID: security.util.ObjectIdentifier;
            readonly WRAP_ID: int;
            readonly WRAP_ID_v2: int;
            _new(): Krb5Token;
          }
          let Krb5Token: _Krb5Token$$static;
          interface _Krb5Token {
          }
          interface Krb5Token extends CombineTypes<[_Krb5Token, sun.security.jgss.GSSToken]> {}
          interface _Krb5Util$$static extends ClassLike {
            credsToTicket(serviceCreds: security.krb5.Credentials): javax.security.auth.kerberos.KerberosTicket;
            _getInitialTicket(caller: GSSCaller, clientPrincipal: string): javax.security.auth.kerberos.KerberosTicket;
            getServiceCreds(caller: GSSCaller, serverPrincipal: string): ServiceCreds;
            _getServiceTicket(caller: GSSCaller, clientPrincipal: string, serverPrincipal: string): javax.security.auth.kerberos.KerberosTicket;
            keyInfo(data: byte[]): string;
            keysFromJavaxKeyTab(ktab: javax.security.auth.kerberos.KeyTab, cname: security.krb5.PrincipalName): security.krb5.EncryptionKey[];
            snapshotFromJavaxKeyTab(ktab: javax.security.auth.kerberos.KeyTab): security.krb5.internal.ktab.KeyTab;
            ticketToCreds(kerbTicket: javax.security.auth.kerberos.KerberosTicket): security.krb5.Credentials;
            _DEBUG: boolean;
          }
          let Krb5Util: _Krb5Util$$static;
          interface _Krb5Util {
          }
          interface Krb5Util extends CombineTypes<[_Krb5Util, java.lang.Object]> {}
          interface _MessageToken$$static extends ClassLike {
            _getTokenSize(ch: CipherHelper): int;
            _FILLER: int;
            _SEAL_ALG_ARCFOUR_HMAC: int;
            _SEAL_ALG_DES: int;
            _SEAL_ALG_DES3_KD: int;
            _SEAL_ALG_NONE: int;
            _SEAL_ALG_POS: int;
            _SGN_ALG_DES_MAC: int;
            _SGN_ALG_DES_MAC_MD5: int;
            _SGN_ALG_HMAC_MD5_ARCFOUR: int;
            _SGN_ALG_HMAC_SHA1_DES3_KD: int;
            _SIGN_ALG_POS: int;
            _TOKEN_ID_POS: int;
            _TOKEN_NO_CKSUM_SIZE: int;
            _new(tokenId: int, context: Krb5Context, tokenBytes: byte[], tokenOffset: int, tokenLen: int, prop: org.ietf.jgss.MessageProp): MessageToken;
            _new(tokenId: int, context: Krb5Context, is: java.io.InputStream, prop: org.ietf.jgss.MessageProp): MessageToken;
            _new(tokenId: int, context: Krb5Context): MessageToken;
          }
          let MessageToken: _MessageToken$$static;
          interface _MessageToken {
            encode(os: java.io.OutputStream): void;
            genSignAndSeqNumber(prop: org.ietf.jgss.MessageProp, optionalHeader: byte[], data: byte[], offset: int, len: int, optionalTrailer: byte[]): void;
            getChecksum(): byte[];
            _getChecksum(optionalHeader: byte[], data: byte[], offset: int, len: int, optionalTrailer: byte[]): byte[];
            getConfState(): boolean;
            getEncSeqNumber(): byte[];
            getGSSHeader(): GSSHeader;
            _getKrb5TokenSize(): int;
            _getSealAlg(a0: boolean, a1: int): int;
(a0: boolean, a1: int): int;
            getSequenceNumber(): int;
            _getSgnAlg(qop: int): int;
            getTokenId(): int;
            _getTokenSize(): int;
            _init(tokenId: int, context: Krb5Context): void;
            verifySignAndSeqNumber(optionalHeader: byte[], data: byte[], offset: int, len: int, optionalTrailer: byte[]): boolean;
            _checksum: byte[];
            _cipherHelper: CipherHelper;
            _confState: boolean;
            _encSeqNumber: byte[];
            _gssHeader: GSSHeader;
            _initiator: boolean;
            _seqNumber: int;
            _seqNumberData: byte[];
            _tokenHeader: MessageToken$MessageTokenHeader;
            _tokenId: int;
          }
          interface MessageToken extends CombineTypes<[_MessageToken, sun.security.jgss.krb5.Krb5Token]> {}
          interface _MessageToken$MessageTokenHeader$$static extends ClassLike {
            new(this$0: MessageToken, tokenId: int, conf: boolean, qop: int): MessageToken$MessageTokenHeader;
            new(this$0: MessageToken, is: java.io.InputStream, prop: org.ietf.jgss.MessageProp): MessageToken$MessageTokenHeader;
          }
          let MessageToken$MessageTokenHeader: _MessageToken$MessageTokenHeader$$static;
          interface _MessageToken$MessageTokenHeader {
            encode(os: java.io.OutputStream): void;
            getBytes(): byte[];
            getSealAlg(): int;
            getSignAlg(): int;
            getTokenId(): int;
            _bytes: byte[];
            _sealAlg: int;
            _signAlg: int;
            _tokenId: int;
          }
          interface MessageToken$MessageTokenHeader extends CombineTypes<[_MessageToken$MessageTokenHeader, java.lang.Object]> {}
          interface _MessageToken_v2$$static extends ClassLike {
            _CONFOUNDER_SIZE: int;
            _FILLER: int;
            _FLAG_ACCEPTOR_SUBKEY: int;
            _FLAG_SENDER_IS_ACCEPTOR: int;
            _FLAG_WRAP_CONFIDENTIAL: int;
            _KG_USAGE_ACCEPTOR_SEAL: int;
            _KG_USAGE_ACCEPTOR_SIGN: int;
            _KG_USAGE_INITIATOR_SEAL: int;
            _KG_USAGE_INITIATOR_SIGN: int;
            _TOKEN_EC_POS: int;
            _TOKEN_FLAG_POS: int;
            _TOKEN_HEADER_SIZE: int;
            _TOKEN_ID_POS: int;
            _TOKEN_RRC_POS: int;
            _new(tokenId: int, context: Krb5Context, tokenBytes: byte[], tokenOffset: int, tokenLen: int, prop: org.ietf.jgss.MessageProp): MessageToken_v2;
            _new(tokenId: int, context: Krb5Context, is: java.io.InputStream, prop: org.ietf.jgss.MessageProp): MessageToken_v2;
            _new(tokenId: int, context: Krb5Context): MessageToken_v2;
          }
          let MessageToken_v2: _MessageToken_v2$$static;
          interface _MessageToken_v2 {
            encode(a0: java.io.OutputStream): void;
(a0: java.io.OutputStream): void;
            _encodeHeader(os: java.io.OutputStream): void;
            genSignAndSeqNumber(prop: org.ietf.jgss.MessageProp, data: byte[], offset: int, len: int): void;
            _getChecksum(data: byte[], offset: int, len: int): byte[];
            getConfState(): boolean;
            getKeyUsage(): int;
            getSequenceNumber(): int;
            _getTokenHeader(): byte[];
            getTokenId(): int;
            _init(tokenId: int, context: Krb5Context): void;
            _rotate(): void;
            verifySign(data: byte[], offset: int, len: int): boolean;
            _checksum: byte[];
            _cipherHelper: CipherHelper;
            _confState: boolean;
            _ec: int;
            _have_acceptor_subkey: boolean;
            _initiator: boolean;
            _key_usage: int;
            _rrc: int;
            _seqNumber: int;
            _tokenData: byte[];
            _tokenDataLen: int;
            _tokenHeader: MessageToken_v2$MessageTokenHeader;
            _tokenId: int;
          }
          interface MessageToken_v2 extends CombineTypes<[_MessageToken_v2, sun.security.jgss.krb5.Krb5Token]> {}
          interface _MessageToken_v2$MessageTokenHeader$$static extends ClassLike {
            new(this$0: MessageToken_v2, tokenId: int, conf: boolean): MessageToken_v2$MessageTokenHeader;
            new(this$0: MessageToken_v2, is: java.io.InputStream, prop: org.ietf.jgss.MessageProp, tokId: int): MessageToken_v2$MessageTokenHeader;
          }
          let MessageToken_v2$MessageTokenHeader: _MessageToken_v2$MessageTokenHeader$$static;
          interface _MessageToken_v2$MessageTokenHeader {
            encode(os: java.io.OutputStream): void;
            getBytes(): byte[];
            getTokenId(): int;
            _bytes: byte[];
            _tokenId: int;
          }
          interface MessageToken_v2$MessageTokenHeader extends CombineTypes<[_MessageToken_v2$MessageTokenHeader, java.lang.Object]> {}
          interface _MicToken$$static extends ClassLike {
            new(context: Krb5Context, tokenBytes: byte[], tokenOffset: int, tokenLen: int, prop: org.ietf.jgss.MessageProp): MicToken;
            new(context: Krb5Context, is: java.io.InputStream, prop: org.ietf.jgss.MessageProp): MicToken;
            new(context: Krb5Context, prop: org.ietf.jgss.MessageProp, data: byte[], pos: int, len: int): MicToken;
            new(context: Krb5Context, prop: org.ietf.jgss.MessageProp, data: java.io.InputStream): MicToken;
          }
          let MicToken: _MicToken$$static;
          interface _MicToken {
            encode(outToken: byte[], offset: int): int;
            encode(): byte[];
            _getSealAlg(confRequested: boolean, qop: int): int;
            verify(data: byte[], offset: int, len: int): void;
            verify(data: java.io.InputStream): void;
          }
          interface MicToken extends CombineTypes<[_MicToken, sun.security.jgss.krb5.MessageToken]> {}
          interface _MicToken_v2$$static extends ClassLike {
            new(context: Krb5Context, tokenBytes: byte[], tokenOffset: int, tokenLen: int, prop: org.ietf.jgss.MessageProp): MicToken_v2;
            new(context: Krb5Context, is: java.io.InputStream, prop: org.ietf.jgss.MessageProp): MicToken_v2;
            new(context: Krb5Context, prop: org.ietf.jgss.MessageProp, data: byte[], pos: int, len: int): MicToken_v2;
            new(context: Krb5Context, prop: org.ietf.jgss.MessageProp, data: java.io.InputStream): MicToken_v2;
          }
          let MicToken_v2: _MicToken_v2$$static;
          interface _MicToken_v2 {
            encode(): byte[];
            encode(outToken: byte[], offset: int): int;
            encode(os: java.io.OutputStream): void;
            verify(data: byte[], offset: int, len: int): void;
            verify(data: java.io.InputStream): void;
          }
          interface MicToken_v2 extends CombineTypes<[_MicToken_v2, sun.security.jgss.krb5.MessageToken_v2]> {}
          interface _ServiceCreds$$static extends ClassLike {
            getInstance(subj: javax.security.auth.Subject, serverPrincipal: string): ServiceCreds;
          }
          let ServiceCreds: _ServiceCreds$$static;
          interface _ServiceCreds {
            destroy(): void;
            getEKeys(princ: security.krb5.PrincipalName): security.krb5.EncryptionKey[];
            getInitCred(): security.krb5.Credentials;
            getKKeys(): javax.security.auth.kerberos.KerberosKey[];
            getKKeys(princ: javax.security.auth.kerberos.KerberosPrincipal): javax.security.auth.kerberos.KerberosKey[];
            getName(): string;
            _allPrincs: java.util.Set<javax.security.auth.kerberos.KerberosPrincipal>;
            _destroyed: boolean;
            _kk: java.util.List<javax.security.auth.kerberos.KerberosKey>;
            _kp: javax.security.auth.kerberos.KerberosPrincipal;
            _ktabs: java.util.List<javax.security.auth.kerberos.KeyTab>;
            _tgt: javax.security.auth.kerberos.KerberosTicket;
          }
          interface ServiceCreds extends CombineTypes<[_ServiceCreds, java.lang.Object]> {}
          interface _SubjectComber$$static extends ClassLike {
            _find<T>(subject: javax.security.auth.Subject, serverPrincipal: string, clientPrincipal: string, credClass: java.lang.Class<T>): T;
            _findAux<T>(subject: javax.security.auth.Subject, serverPrincipal: string, clientPrincipal: string, credClass: java.lang.Class<T>, oneOnly: boolean): any;
            _findClientMatch(input: string, ticket: javax.security.auth.kerberos.KerberosTicket): string;
            _findMany<T>(subject: javax.security.auth.Subject, serverPrincipal: string, clientPrincipal: string, credClass: java.lang.Class<T>): java.util.List<T>;
            _findServerMatch(input: string, ticket: javax.security.auth.kerberos.KerberosTicket): string;
            _DEBUG: boolean;
          }
          let SubjectComber: _SubjectComber$$static;
          interface _SubjectComber {
          }
          interface SubjectComber extends CombineTypes<[_SubjectComber, java.lang.Object]> {}
          interface _WrapToken$$static extends ClassLike {
            _getSizeLimit(qop: int, confReq: boolean, maxTokenSize: int, ch: CipherHelper): int;
            _CONFOUNDER_SIZE: int;
            _pads: byte[][];
            new(context: Krb5Context, tokenBytes: byte[], tokenOffset: int, tokenLen: int, prop: org.ietf.jgss.MessageProp): WrapToken;
            new(context: Krb5Context, is: java.io.InputStream, prop: org.ietf.jgss.MessageProp): WrapToken;
            new(context: Krb5Context, prop: org.ietf.jgss.MessageProp, dataBytes: byte[], dataOffset: int, dataLen: int): WrapToken;
          }
          let WrapToken: _WrapToken$$static;
          interface _WrapToken {
            encode(os: java.io.OutputStream): void;
            encode(): byte[];
            encode(outToken: byte[], offset: int): int;
            getData(): byte[];
            getData(dataBuf: byte[], dataBufOffset: int): int;
            _getDataFromBuffer(dataBuf: byte[], dataBufOffset: int): void;
            _getDataFromStream(dataBuf: byte[], dataBufOffset: int): void;
            _getKrb5TokenSize(): int;
            _getPadding(len: int): byte[];
            _getSealAlg(conf: boolean, qop: int): int;
            _confounder: byte[];
            _dataBytes: byte[];
            _dataLen: int;
            _dataOffset: int;
            _dataSize: int;
            _is: java.io.InputStream;
            _padding: byte[];
            _privacy: boolean;
            _readTokenFromInputStream: boolean;
            _tokenBytes: byte[];
            _tokenLen: int;
            _tokenOffset: int;
          }
          interface WrapToken extends CombineTypes<[_WrapToken, sun.security.jgss.krb5.MessageToken]> {}
          interface _WrapToken_v2$$static extends ClassLike {
            _getSizeLimit(qop: int, confReq: boolean, maxTokenSize: int, ch: CipherHelper): int;
            new(context: Krb5Context, tokenBytes: byte[], tokenOffset: int, tokenLen: int, prop: org.ietf.jgss.MessageProp): WrapToken_v2;
            new(context: Krb5Context, is: java.io.InputStream, prop: org.ietf.jgss.MessageProp): WrapToken_v2;
            new(context: Krb5Context, prop: org.ietf.jgss.MessageProp, dataBytes: byte[], dataOffset: int, dataLen: int): WrapToken_v2;
          }
          let WrapToken_v2: _WrapToken_v2$$static;
          interface _WrapToken_v2 {
            encode(os: java.io.OutputStream): void;
            encode(): byte[];
            encode(outToken: byte[], offset: int): int;
            getData(): byte[];
            getData(dataBuf: byte[], dataBufOffset: int): int;
            _confounder: byte[];
            _privacy: boolean;
          }
          interface WrapToken_v2 extends CombineTypes<[_WrapToken_v2, sun.security.jgss.krb5.MessageToken_v2]> {}
        }
        module spi {
          interface _GSSContextSpi$$static extends ClassLike {
          }
          let GSSContextSpi: _GSSContextSpi$$static;
          interface _GSSContextSpi {
            acceptSecContext(a0: java.io.InputStream, a1: int): byte[];
            dispose(): void;
            export(): byte[];
            getAnonymityState(): boolean;
            getConfState(): boolean;
            getCredDelegState(): boolean;
            getDelegCred(): GSSCredentialSpi;
            getDelegPolicyState(): boolean;
            getIntegState(): boolean;
            getLifetime(): int;
            getMIC(a0: java.io.InputStream, a1: java.io.OutputStream, a2: org.ietf.jgss.MessageProp): void;
            getMIC(a0: byte[], a1: int, a2: int, a3: org.ietf.jgss.MessageProp): byte[];
            getMech(): org.ietf.jgss.Oid;
            getMutualAuthState(): boolean;
            getProvider(): java.security.Provider;
            getReplayDetState(): boolean;
            getSequenceDetState(): boolean;
            getSrcName(): GSSNameSpi;
            getTargName(): GSSNameSpi;
            getWrapSizeLimit(a0: int, a1: boolean, a2: int): int;
            initSecContext(a0: java.io.InputStream, a1: int): byte[];
            inquireSecContext(a0: string): any;
            isEstablished(): boolean;
            isInitiator(): boolean;
            isProtReady(): boolean;
            isTransferable(): boolean;
            requestAnonymity(a0: boolean): void;
            requestConf(a0: boolean): void;
            requestCredDeleg(a0: boolean): void;
            requestDelegPolicy(a0: boolean): void;
            requestInteg(a0: boolean): void;
            requestLifetime(a0: int): void;
            requestMutualAuth(a0: boolean): void;
            requestReplayDet(a0: boolean): void;
            requestSequenceDet(a0: boolean): void;
            setChannelBinding(a0: org.ietf.jgss.ChannelBinding): void;
            unwrap(a0: java.io.InputStream, a1: java.io.OutputStream, a2: org.ietf.jgss.MessageProp): void;
            unwrap(a0: byte[], a1: int, a2: int, a3: org.ietf.jgss.MessageProp): byte[];
            verifyMIC(a0: java.io.InputStream, a1: java.io.InputStream, a2: org.ietf.jgss.MessageProp): void;
            verifyMIC(a0: byte[], a1: int, a2: int, a3: byte[], a4: int, a5: int, a6: org.ietf.jgss.MessageProp): void;
            wrap(a0: java.io.InputStream, a1: java.io.OutputStream, a2: org.ietf.jgss.MessageProp): void;
            wrap(a0: byte[], a1: int, a2: int, a3: org.ietf.jgss.MessageProp): byte[];
          }
          interface GSSContextSpi extends CombineTypes<[_GSSContextSpi, java.lang.Object]> {}
          interface _GSSCredentialSpi$$static extends ClassLike {
          }
          let GSSCredentialSpi: _GSSCredentialSpi$$static;
          interface _GSSCredentialSpi {
            dispose(): void;
            getAcceptLifetime(): int;
            getInitLifetime(): int;
            getMechanism(): org.ietf.jgss.Oid;
            getName(): GSSNameSpi;
            getProvider(): java.security.Provider;
            impersonate(a0: GSSNameSpi): GSSCredentialSpi;
            isAcceptorCredential(): boolean;
            isInitiatorCredential(): boolean;
          }
          interface GSSCredentialSpi extends CombineTypes<[_GSSCredentialSpi, java.lang.Object]> {}
          interface _GSSNameSpi$$static extends ClassLike {
          }
          let GSSNameSpi: _GSSNameSpi$$static;
          interface _GSSNameSpi {
            equals(a0: GSSNameSpi): boolean;
            equals(a0: any): boolean;
            export(): byte[];
            getMechanism(): org.ietf.jgss.Oid;
            getProvider(): java.security.Provider;
            getStringNameType(): org.ietf.jgss.Oid;
            hashCode(): int;
            isAnonymousName(): boolean;
            toString(): string;
          }
          interface GSSNameSpi extends CombineTypes<[_GSSNameSpi, java.lang.Object]> {}
          interface _MechanismFactory$$static extends ClassLike {
          }
          let MechanismFactory: _MechanismFactory$$static;
          interface _MechanismFactory {
            getCredentialElement(a0: GSSNameSpi, a1: int, a2: int, a3: int): GSSCredentialSpi;
            getMechanismContext(a0: GSSNameSpi, a1: GSSCredentialSpi, a2: int): GSSContextSpi;
            getMechanismContext(a0: GSSCredentialSpi): GSSContextSpi;
            getMechanismContext(a0: byte[]): GSSContextSpi;
            getMechanismOid(): org.ietf.jgss.Oid;
            getNameElement(a0: string, a1: org.ietf.jgss.Oid): GSSNameSpi;
            getNameElement(a0: byte[], a1: org.ietf.jgss.Oid): GSSNameSpi;
            getNameTypes(): org.ietf.jgss.Oid[];
            getProvider(): java.security.Provider;
          }
          interface MechanismFactory extends CombineTypes<[_MechanismFactory, java.lang.Object]> {}
        }
        module spnego {
          interface _NegTokenInit$$static extends ClassLike {
            _new(mechTypes: byte[], flags: security.util.BitArray, token: byte[], mechListMIC: byte[]): NegTokenInit;
            new(_in: byte[]): NegTokenInit;
          }
          let NegTokenInit: _NegTokenInit$$static;
          interface _NegTokenInit {
            _encode(): byte[];
            _getMechListMIC(): byte[];
            getMechToken(): byte[];
            getMechTypeList(): org.ietf.jgss.Oid[];
            _getMechTypes(): byte[];
            _getReqFlags(): security.util.BitArray;
            _parseToken(_in: byte[]): void;
            _mechListMIC: byte[];
            _mechToken: byte[];
            _mechTypeList: org.ietf.jgss.Oid[];
            _mechTypes: byte[];
            _reqFlags: security.util.BitArray;
          }
          interface NegTokenInit extends CombineTypes<[_NegTokenInit, sun.security.jgss.spnego.SpNegoToken]> {}
          interface _NegTokenTarg$$static extends ClassLike {
            _new(result: int, mech: org.ietf.jgss.Oid, token: byte[], mechListMIC: byte[]): NegTokenTarg;
            new(_in: byte[]): NegTokenTarg;
          }
          let NegTokenTarg: _NegTokenTarg$$static;
          interface _NegTokenTarg {
            _encode(): byte[];
            _getMechListMIC(): byte[];
            _getNegotiatedResult(): int;
            _getResponseToken(): byte[];
            getSupportedMech(): org.ietf.jgss.Oid;
            _parseToken(_in: byte[]): void;
            _mechListMIC: byte[];
            _negResult: int;
            _responseToken: byte[];
            _supportedMech: org.ietf.jgss.Oid;
          }
          interface NegTokenTarg extends CombineTypes<[_NegTokenTarg, sun.security.jgss.spnego.SpNegoToken]> {}
          interface _SpNegoContext$$static extends ClassLike {
            _negotiate_mech_type(supported_mechSet: org.ietf.jgss.Oid[], mechSet: org.ietf.jgss.Oid[]): org.ietf.jgss.Oid;
            _printState(state: int): string;
            _DEBUG: boolean;
            _STATE_DELETED: int;
            _STATE_DONE: int;
            _STATE_IN_PROCESS: int;
            _STATE_NEW: int;
            new(factory: SpNegoMechFactory, peerName: jgss.spi.GSSNameSpi, myCred: jgss.spi.GSSCredentialSpi, lifetime: int): SpNegoContext;
            new(factory: SpNegoMechFactory, myCred: jgss.spi.GSSCredentialSpi): SpNegoContext;
            new(factory: SpNegoMechFactory, interProcessToken: byte[]): SpNegoContext;
          }
          let SpNegoContext: _SpNegoContext$$static;
          interface _SpNegoContext {
            _GSS_acceptSecContext(token: byte[]): byte[];
            _GSS_initSecContext(token: byte[]): byte[];
            acceptSecContext(is: java.io.InputStream, mechTokenSize: int): byte[];
            dispose(): void;
            export(): byte[];
            getAnonymityState(): boolean;
            _getAvailableMechs(): org.ietf.jgss.Oid[];
            _getChannelBinding(): org.ietf.jgss.ChannelBinding;
            getConfState(): boolean;
            _getContextFlags(): security.util.BitArray;
            getCredDelegState(): boolean;
            getDelegCred(): jgss.spi.GSSCredentialSpi;
            getDelegPolicyState(): boolean;
            _getEncodedMechs(mechSet: org.ietf.jgss.Oid[]): byte[];
            getIntegState(): boolean;
            getLifetime(): int;
            getMIC(inMsg: byte[], offset: int, len: int, msgProp: org.ietf.jgss.MessageProp): byte[];
            getMIC(is: java.io.InputStream, os: java.io.OutputStream, msgProp: org.ietf.jgss.MessageProp): void;
            getMech(): org.ietf.jgss.Oid;
            getMutualAuthState(): boolean;
            getNegotiatedMech(): org.ietf.jgss.Oid;
            getProvider(): java.security.Provider;
            getReplayDetState(): boolean;
            getSequenceDetState(): boolean;
            getSrcName(): jgss.spi.GSSNameSpi;
            getTargName(): jgss.spi.GSSNameSpi;
            getWrapSizeLimit(qop: int, confReq: boolean, maxTokSize: int): int;
            initSecContext(is: java.io.InputStream, mechTokenSize: int): byte[];
            inquireSecContext(type: string): any;
            isEstablished(): boolean;
            isInitiator(): boolean;
            isMechContextEstablished(): boolean;
            isProtReady(): boolean;
            isTransferable(): boolean;
            requestAnonymity(value: boolean): void;
            requestConf(value: boolean): void;
            requestCredDeleg(value: boolean): void;
            requestDelegPolicy(value: boolean): void;
            requestInteg(value: boolean): void;
            requestLifetime(lifetime: int): void;
            requestMutualAuth(value: boolean): void;
            requestReplayDet(value: boolean): void;
            requestSequenceDet(value: boolean): void;
            setChannelBinding(channelBinding: org.ietf.jgss.ChannelBinding): void;
            _setContextFlags(): void;
            unwrap(inBuf: byte[], offset: int, len: int, msgProp: org.ietf.jgss.MessageProp): byte[];
            unwrap(is: java.io.InputStream, os: java.io.OutputStream, msgProp: org.ietf.jgss.MessageProp): void;
            verifyMIC(inTok: byte[], tokOffset: int, tokLen: int, inMsg: byte[], msgOffset: int, msgLen: int, msgProp: org.ietf.jgss.MessageProp): void;
            verifyMIC(is: java.io.InputStream, msgStr: java.io.InputStream, msgProp: org.ietf.jgss.MessageProp): void;
            _verifyMechListMIC(mechTypes: byte[], token: byte[]): boolean;
            wrap(inBuf: byte[], offset: int, len: int, msgProp: org.ietf.jgss.MessageProp): byte[];
            wrap(is: java.io.InputStream, os: java.io.OutputStream, msgProp: org.ietf.jgss.MessageProp): void;
            _DER_mechTypes: byte[];
            _channelBinding: org.ietf.jgss.ChannelBinding;
            _confState: boolean;
            _credDelegState: boolean;
            _delegPolicyState: boolean;
            _factory: SpNegoMechFactory;
            _initiator: boolean;
            _integState: boolean;
            _internal_mech: org.ietf.jgss.Oid;
            _lifetime: int;
            _mechContext: org.ietf.jgss.GSSContext;
            _mutualAuthState: boolean;
            _myCred: SpNegoCredElement;
            _myName: jgss.spi.GSSNameSpi;
            _peerName: jgss.spi.GSSNameSpi;
            _replayDetState: boolean;
            _sequenceDetState: boolean;
            _state: int;
          }
          interface SpNegoContext extends CombineTypes<[_SpNegoContext, sun.security.jgss.spi.GSSContextSpi, java.lang.Object]> {}
          interface _SpNegoCredElement$$static extends ClassLike {
            new(cred: jgss.spi.GSSCredentialSpi): SpNegoCredElement;
          }
          let SpNegoCredElement: _SpNegoCredElement$$static;
          interface _SpNegoCredElement {
            dispose(): void;
            getAcceptLifetime(): int;
            getInitLifetime(): int;
            getInternalCred(): jgss.spi.GSSCredentialSpi;
            _getInternalMech(): org.ietf.jgss.Oid;
            getMechanism(): org.ietf.jgss.Oid;
            getName(): jgss.spi.GSSNameSpi;
            getProvider(): java.security.Provider;
            impersonate(name: jgss.spi.GSSNameSpi): jgss.spi.GSSCredentialSpi;
            isAcceptorCredential(): boolean;
            isInitiatorCredential(): boolean;
            _cred: jgss.spi.GSSCredentialSpi;
          }
          interface SpNegoCredElement extends CombineTypes<[_SpNegoCredElement, sun.security.jgss.spi.GSSCredentialSpi, java.lang.Object]> {}
          interface _SpNegoMechFactory$$static extends ClassLike {
            _getCredFromSubject(name: jgss.spi.GSSNameSpi, initiate: boolean): SpNegoCredElement;
            _DEFAULT_SPNEGO_MECH_OID: org.ietf.jgss.Oid;
            _GSS_SPNEGO_MECH_OID: org.ietf.jgss.Oid;
            _PROVIDER: java.security.Provider;
            _nameTypes: org.ietf.jgss.Oid[];
            new(): SpNegoMechFactory;
            new(caller: GSSCaller): SpNegoMechFactory;
          }
          let SpNegoMechFactory: _SpNegoMechFactory$$static;
          interface _SpNegoMechFactory {
            getCredentialElement(name: jgss.spi.GSSNameSpi, initLifetime: int, acceptLifetime: int, usage: int): jgss.spi.GSSCredentialSpi;
            getMechanismContext(peer: jgss.spi.GSSNameSpi, myInitiatorCred: jgss.spi.GSSCredentialSpi, lifetime: int): jgss.spi.GSSContextSpi;
            getMechanismContext(myAcceptorCred: jgss.spi.GSSCredentialSpi): jgss.spi.GSSContextSpi;
            getMechanismContext(exportedContext: byte[]): jgss.spi.GSSContextSpi;
            getMechanismOid(): org.ietf.jgss.Oid;
            getNameElement(nameStr: string, nameType: org.ietf.jgss.Oid): jgss.spi.GSSNameSpi;
            getNameElement(name: byte[], nameType: org.ietf.jgss.Oid): jgss.spi.GSSNameSpi;
            getNameTypes(): org.ietf.jgss.Oid[];
            getProvider(): java.security.Provider;
            _availableMechs: org.ietf.jgss.Oid[];
            _manager: GSSManagerImpl;
          }
          interface SpNegoMechFactory extends CombineTypes<[_SpNegoMechFactory, sun.security.jgss.spi.MechanismFactory, java.lang.Object]> {}
          interface _SpNegoToken$$static extends ClassLike {
            _checkNextField(last: int, current: int): int;
            _getNegoResultString(result: int): string;
            _getTokenName(type: int): string;
            _DEBUG: boolean;
            _NEG_TOKEN_INIT_ID: int;
            _NEG_TOKEN_TARG_ID: int;
            OID: security.util.ObjectIdentifier;
            _new(tokenType: int): SpNegoToken;
          }
          let SpNegoToken: _SpNegoToken$$static;
          interface _SpNegoToken {
            _encode(): byte[];
(): byte[];
            _getEncoded(): byte[];
            _getType(): int;
            _tokenType: int;
          }
          interface SpNegoToken extends CombineTypes<[_SpNegoToken, sun.security.jgss.GSSToken]> {}
          interface _SpNegoToken$NegoResult$$static extends ClassLike {
            valueOf(name: string): SpNegoToken$NegoResult;
            values(): SpNegoToken$NegoResult[];
            readonly ACCEPT_COMPLETE: SpNegoToken$NegoResult;
            readonly ACCEPT_INCOMPLETE: SpNegoToken$NegoResult;
            readonly REJECT: SpNegoToken$NegoResult;
          }
          let SpNegoToken$NegoResult: _SpNegoToken$NegoResult$$static;
          interface _SpNegoToken$NegoResult {
          }
          interface SpNegoToken$NegoResult extends CombineTypes<[_SpNegoToken$NegoResult]> {}
        }
        module wrapper {
          interface _GSSCredElement$$static extends ClassLike {
            _disposerFor(stub: GSSLibStub, pCredentials: long): java.lang.Runnable;
            _new(pCredentials: long, a1: GSSNameElement, srcName: org.ietf.jgss.Oid): GSSCredElement;
            _new(name: GSSNameElement, lifetime: int, usage: int, stub: GSSLibStub): GSSCredElement;
          }
          let GSSCredElement: _GSSCredElement$$static;
          interface _GSSCredElement {
            dispose(): void;
            _doServicePermCheck(): void;
            getAcceptLifetime(): int;
            getInitLifetime(): int;
            getMechanism(): org.ietf.jgss.Oid;
            getName(): GSSNameElement;
            getName(): jgss.spi.GSSNameSpi;
            getProvider(): java.security.Provider;
            impersonate(name: jgss.spi.GSSNameSpi): jgss.spi.GSSCredentialSpi;
            isAcceptorCredential(): boolean;
            isInitiatorCredential(): boolean;
            toString(): string;
            _cStub: GSSLibStub;
            _cleanable: java.lang.ref.Cleaner$Cleanable;
            _name: GSSNameElement;
            _pCred: long;
            _usage: int;
          }
          interface GSSCredElement extends CombineTypes<[_GSSCredElement, sun.security.jgss.spi.GSSCredentialSpi, java.lang.Object]> {}
          interface _GSSLibStub$$static extends ClassLike {
            _getInstance(mech: org.ietf.jgss.Oid): GSSLibStub;
            _getMechPtr(a0: byte[]): long;
            _indicateMechs(): org.ietf.jgss.Oid[];
            _init(a0: string, a1: boolean): boolean;
            _table: java.util.Hashtable<org.ietf.jgss.Oid,GSSLibStub>;
          }
          let GSSLibStub: _GSSLibStub$$static;
          interface _GSSLibStub {
            _acceptContext(a0: long, a1: org.ietf.jgss.ChannelBinding, a2: byte[], a3: NativeGSSContext): byte[];
            _acquireCred(a0: long, a1: int, a2: int): long;
            _canonicalizeName(a0: long): long;
            _compareName(a0: long, a1: long): boolean;
            _deleteContext(a0: long): long;
            _displayName(a0: long): any[];
            equals(obj: any): boolean;
            _exportContext(a0: long): byte[];
            _exportName(a0: long): byte[];
            _getContextMech(a0: long): org.ietf.jgss.Oid;
            _getContextName(a0: long, a1: boolean): long;
            _getContextTime(a0: long): int;
            _getCredName(a0: long): long;
            _getCredTime(a0: long): int;
            _getCredUsage(a0: long): int;
            _getMech(): org.ietf.jgss.Oid;
            _getMic(a0: long, a1: int, a2: byte[]): byte[];
            hashCode(): int;
            _importContext(a0: byte[]): NativeGSSContext;
            _importName(a0: byte[], a1: org.ietf.jgss.Oid): long;
            _initContext(a0: long, a1: long, a2: org.ietf.jgss.ChannelBinding, a3: byte[], a4: NativeGSSContext): byte[];
            _inquireContext(a0: long): long[];
            _inquireNamesForMech(): org.ietf.jgss.Oid[];
            _releaseCred(a0: long): long;
            _releaseName(a0: long): void;
            _unwrap(a0: long, a1: byte[], a2: org.ietf.jgss.MessageProp): byte[];
            _verifyMic(a0: long, a1: byte[], a2: byte[], a3: org.ietf.jgss.MessageProp): void;
            _wrap(a0: long, a1: byte[], a2: org.ietf.jgss.MessageProp): byte[];
            _wrapSizeLimit(a0: long, a1: int, a2: int, a3: int): int;
            _mech: org.ietf.jgss.Oid;
            _pMech: long;
          }
          interface GSSLibStub extends CombineTypes<[_GSSLibStub, java.lang.Object]> {}
          interface _GSSNameElement$$static extends ClassLike {
            _disposerFor(stub: GSSLibStub, pName: long): java.lang.Runnable;
            _getNativeNameType(nameType: org.ietf.jgss.Oid, stub: GSSLibStub): org.ietf.jgss.Oid;
            _DEF_ACCEPTOR: GSSNameElement;
            _new(pNativeName: long, a1: GSSLibStub): GSSNameElement;
            _new(nameBytes: byte[], nameType: org.ietf.jgss.Oid, stub: GSSLibStub): GSSNameElement;
          }
          let GSSNameElement: _GSSNameElement$$static;
          interface _GSSNameElement {
            dispose(): void;
            equals(other: jgss.spi.GSSNameSpi): boolean;
            equals(other: any): boolean;
            export(): byte[];
            getKrbName(): string;
            getMechanism(): org.ietf.jgss.Oid;
            getProvider(): java.security.Provider;
            getStringNameType(): org.ietf.jgss.Oid;
            hashCode(): int;
            isAnonymousName(): boolean;
            _setPrintables(): void;
            toString(): string;
            _cStub: GSSLibStub;
            _cleanable: java.lang.ref.Cleaner$Cleanable;
            _pName: long;
            _printableName: string;
            _printableType: org.ietf.jgss.Oid;
          }
          interface GSSNameElement extends CombineTypes<[_GSSNameElement, sun.security.jgss.spi.GSSNameSpi, java.lang.Object]> {}
          interface _Krb5Util$$static extends ClassLike {
            _checkServicePermission(target: string, action: string): void;
            _getTGSName(name: GSSNameElement): string;
            _cleaner: java.lang.ref.Cleaner;
            _new(): Krb5Util;
          }
          let Krb5Util: _Krb5Util$$static;
          interface _Krb5Util {
          }
          interface Krb5Util extends CombineTypes<[_Krb5Util, java.lang.Object]> {}
          interface _NativeGSSContext$$static extends ClassLike {
            _disposerFor(stub: GSSLibStub, pContext: long): java.lang.Runnable;
            _getMechFromSpNegoToken(token: byte[], isInitiator: boolean): org.ietf.jgss.Oid;
            _GSS_C_ANON_FLAG: int;
            _GSS_C_CONF_FLAG: int;
            _GSS_C_DELEG_FLAG: int;
            _GSS_C_INTEG_FLAG: int;
            _GSS_C_MUTUAL_FLAG: int;
            _GSS_C_PROT_READY_FLAG: int;
            _GSS_C_REPLAY_FLAG: int;
            _GSS_C_SEQUENCE_FLAG: int;
            _GSS_C_TRANS_FLAG: int;
            _NUM_OF_INQUIRE_VALUES: int;
            _new(peer: GSSNameElement, myCred: GSSCredElement, time: int, stub: GSSLibStub): NativeGSSContext;
            _new(myCred: GSSCredElement, stub: GSSLibStub): NativeGSSContext;
            _new(pCtxt: long, a1: GSSLibStub): NativeGSSContext;
          }
          let NativeGSSContext: _NativeGSSContext$$static;
          interface _NativeGSSContext {
            acceptSecContext(is: java.io.InputStream, mechTokenLen: int): byte[];
            _changeFlags(flagMask: int, isEnable: boolean): void;
            _checkFlags(flagMask: int): boolean;
            dispose(): void;
            _doDelegPermCheck(): void;
            _doServicePermCheck(): void;
            export(): byte[];
            getAnonymityState(): boolean;
            getConfState(): boolean;
            getCredDelegState(): boolean;
            getDelegCred(): jgss.spi.GSSCredentialSpi;
            getDelegPolicyState(): boolean;
            getIntegState(): boolean;
            getLifetime(): int;
            getMIC(_in: byte[], offset: int, len: int, msgProp: org.ietf.jgss.MessageProp): byte[];
            getMIC(inStream: java.io.InputStream, outStream: java.io.OutputStream, msgProp: org.ietf.jgss.MessageProp): void;
            getMech(): org.ietf.jgss.Oid;
            getMutualAuthState(): boolean;
            getProvider(): java.security.Provider;
            getReplayDetState(): boolean;
            getSequenceDetState(): boolean;
            getSrcName(): jgss.spi.GSSNameSpi;
            getTargName(): jgss.spi.GSSNameSpi;
            getWrapSizeLimit(qop: int, confReq: boolean, maxTokenSize: int): int;
            initSecContext(is: java.io.InputStream, mechTokenLen: int): byte[];
            inquireSecContext(type: string): any;
            isEstablished(): boolean;
            isInitiator(): boolean;
            isProtReady(): boolean;
            isTransferable(): boolean;
            requestAnonymity(state: boolean): void;
            requestConf(state: boolean): void;
            requestCredDeleg(state: boolean): void;
            requestDelegPolicy(state: boolean): void;
            requestInteg(state: boolean): void;
            requestLifetime(lifetime: int): void;
            requestMutualAuth(state: boolean): void;
            requestReplayDet(state: boolean): void;
            requestSequenceDet(state: boolean): void;
            _retrieveToken(is: java.io.InputStream, mechTokenLen: int): byte[];
            setChannelBinding(cb: org.ietf.jgss.ChannelBinding): void;
            _setContext(pContext: long): void;
            unwrap(inBuf: byte[], offset: int, len: int, msgProp: org.ietf.jgss.MessageProp): byte[];
            unwrap(inBuf: byte[], inOffset: int, len: int, outBuf: byte[], outOffset: int, msgProp: org.ietf.jgss.MessageProp): int;
            unwrap(inStream: java.io.InputStream, outStream: java.io.OutputStream, msgProp: org.ietf.jgss.MessageProp): void;
            unwrap(inStream: java.io.InputStream, outBuf: byte[], outOffset: int, msgProp: org.ietf.jgss.MessageProp): int;
            verifyMIC(inToken: byte[], tOffset: int, tLen: int, inMsg: byte[], mOffset: int, mLen: int, msgProp: org.ietf.jgss.MessageProp): void;
            verifyMIC(tokStream: java.io.InputStream, msgStream: java.io.InputStream, msgProp: org.ietf.jgss.MessageProp): void;
            wrap(inBuf: byte[], offset: int, len: int, msgProp: org.ietf.jgss.MessageProp): byte[];
            wrap(inBuf: byte[], offset: int, len: int, os: java.io.OutputStream, msgProp: org.ietf.jgss.MessageProp): void;
            wrap(inBuf: byte[], inOffset: int, len: int, outBuf: byte[], outOffset: int, msgProp: org.ietf.jgss.MessageProp): int;
            wrap(inStream: java.io.InputStream, outStream: java.io.OutputStream, msgProp: org.ietf.jgss.MessageProp): void;
            _actualMech: org.ietf.jgss.Oid;
            _cStub: GSSLibStub;
            _cb: org.ietf.jgss.ChannelBinding;
            _cleanable: java.lang.ref.Cleaner$Cleanable;
            _cred: GSSCredElement;
            _delegatedCred: GSSCredElement;
            _disposeCred: GSSCredElement;
            _disposeDelegatedCred: GSSCredElement;
            _flags: int;
            _isEstablished: boolean;
            _isInitiator: boolean;
            _lifetime: int;
            _pContext: long;
            _skipDelegPermCheck: boolean;
            _skipServicePermCheck: boolean;
            _srcName: GSSNameElement;
            _targetName: GSSNameElement;
          }
          interface NativeGSSContext extends CombineTypes<[_NativeGSSContext, sun.security.jgss.spi.GSSContextSpi, java.lang.Object]> {}
          interface _NativeGSSFactory$$static extends ClassLike {
            new(caller: GSSCaller): NativeGSSFactory;
          }
          let NativeGSSFactory: _NativeGSSFactory$$static;
          interface _NativeGSSFactory {
            _getCredFromSubject(name: GSSNameElement, initiate: boolean): GSSCredElement;
            getCredentialElement(name: jgss.spi.GSSNameSpi, initLifetime: int, acceptLifetime: int, usage: int): jgss.spi.GSSCredentialSpi;
            getMechanismContext(peer: jgss.spi.GSSNameSpi, myCred: jgss.spi.GSSCredentialSpi, lifetime: int): jgss.spi.GSSContextSpi;
            getMechanismContext(myCred: jgss.spi.GSSCredentialSpi): jgss.spi.GSSContextSpi;
            getMechanismContext(exportedContext: byte[]): jgss.spi.GSSContextSpi;
            getMechanismOid(): org.ietf.jgss.Oid;
            getNameElement(nameStr: string, nameType: org.ietf.jgss.Oid): jgss.spi.GSSNameSpi;
            getNameElement(name: byte[], nameType: org.ietf.jgss.Oid): jgss.spi.GSSNameSpi;
            getNameTypes(): org.ietf.jgss.Oid[];
            getProvider(): java.security.Provider;
            setMech(mech: org.ietf.jgss.Oid): void;
            _cStub: GSSLibStub;
            _caller: GSSCaller;
          }
          interface NativeGSSFactory extends CombineTypes<[_NativeGSSFactory, sun.security.jgss.spi.MechanismFactory, java.lang.Object]> {}
          interface _SunNativeProvider$$static extends ClassLike {
            _debug(message: string): void;
            _DEBUG: boolean;
            _INFO: string;
            _INSTANCE: java.security.Provider;
            _MECH_MAP: java.util.HashMap<string,string>;
            _MF_CLASS: string;
            _NAME: string;
            _serialVersionUID: long;
            new(): SunNativeProvider;
          }
          let SunNativeProvider: _SunNativeProvider$$static;
          interface _SunNativeProvider {
          }
          interface SunNativeProvider extends CombineTypes<[_SunNativeProvider, java.security.Provider]> {}
        }
        interface _GSSCaller$$static extends ClassLike {
          readonly CALLER_ACCEPT: GSSCaller;
          readonly CALLER_INITIATE: GSSCaller;
          readonly CALLER_UNKNOWN: GSSCaller;
          _new(s: string): GSSCaller;
        }
        let GSSCaller: _GSSCaller$$static;
        interface _GSSCaller {
          toString(): string;
          _name: string;
        }
        interface GSSCaller extends CombineTypes<[_GSSCaller, java.lang.Object]> {}
        interface _GSSContextImpl$$static extends ClassLike {
          _DELETED: int;
          _IN_PROGRESS: int;
          _PRE_INIT: int;
          _READY: int;
          new(): GSSContextImpl;
          _new(src: GSSContextImpl): GSSContextImpl;
          new(gssManager: GSSManagerImpl, peer: org.ietf.jgss.GSSName, mech: org.ietf.jgss.Oid, myCred: org.ietf.jgss.GSSCredential, lifetime: int): GSSContextImpl;
          new(gssManager: GSSManagerImpl, myCred: org.ietf.jgss.GSSCredential): GSSContextImpl;
          new(gssManager: GSSManagerImpl, interProcessToken: byte[]): GSSContextImpl;
        }
        let GSSContextImpl: _GSSContextImpl$$static;
        interface _GSSContextImpl {
          acceptSecContext(inTok: byte[], offset: int, len: int): byte[];
          acceptSecContext(inStream: java.io.InputStream, outStream: java.io.OutputStream): void;
          dispose(): void;
          export(): byte[];
          getAnonymityState(): boolean;
          getConfState(): boolean;
          getCredDelegState(): boolean;
          getDelegCred(): org.ietf.jgss.GSSCredential;
          getDelegPolicyState(): boolean;
          getIntegState(): boolean;
          getLifetime(): int;
          getMIC(inMsg: byte[], offset: int, len: int, msgProp: org.ietf.jgss.MessageProp): byte[];
          getMIC(inStream: java.io.InputStream, outStream: java.io.OutputStream, msgProp: org.ietf.jgss.MessageProp): void;
          getMech(): org.ietf.jgss.Oid;
          getMutualAuthState(): boolean;
          getReplayDetState(): boolean;
          getSequenceDetState(): boolean;
          getSrcName(): org.ietf.jgss.GSSName;
          getTargName(): org.ietf.jgss.GSSName;
          getWrapSizeLimit(qop: int, confReq: boolean, maxTokenSize: int): int;
          initSecContext(inputBuf: byte[], offset: int, len: int): byte[];
          initSecContext(inStream: java.io.InputStream, outStream: java.io.OutputStream): int;
          inquireSecContext(type: string): any;
          isEstablished(): boolean;
          isInitiator(): boolean;
          isProtReady(): boolean;
          isTransferable(): boolean;
          requestAnonymity(state: boolean): void;
          requestConf(state: boolean): void;
          requestCredDeleg(state: boolean): void;
          requestDelegPolicy(state: boolean): void;
          requestInteg(state: boolean): void;
          requestLifetime(lifetime: int): void;
          requestMutualAuth(state: boolean): void;
          requestReplayDet(state: boolean): void;
          requestSequenceDet(state: boolean): void;
          setChannelBinding(channelBindings: org.ietf.jgss.ChannelBinding): void;
          unwrap(inBuf: byte[], offset: int, len: int, msgProp: org.ietf.jgss.MessageProp): byte[];
          unwrap(inStream: java.io.InputStream, outStream: java.io.OutputStream, msgProp: org.ietf.jgss.MessageProp): void;
          verifyMIC(inTok: byte[], tokOffset: int, tokLen: int, inMsg: byte[], msgOffset: int, msgLen: int, msgProp: org.ietf.jgss.MessageProp): void;
          verifyMIC(tokStream: java.io.InputStream, msgStream: java.io.InputStream, msgProp: org.ietf.jgss.MessageProp): void;
          wrap(inBuf: byte[], offset: int, len: int, msgProp: org.ietf.jgss.MessageProp): byte[];
          wrap(inStream: java.io.InputStream, outStream: java.io.OutputStream, msgProp: org.ietf.jgss.MessageProp): void;
          _channelBindings: org.ietf.jgss.ChannelBinding;
          _currentState: int;
          _gssManager: GSSManagerImpl;
          _initiator: boolean;
          _mechCtxt: spi.GSSContextSpi;
          _mechOid: org.ietf.jgss.Oid;
          _myCred: GSSCredentialImpl;
          _objId: security.util.ObjectIdentifier;
          _reqAnonState: boolean;
          _reqConfState: boolean;
          _reqCredDelegState: boolean;
          _reqDelegPolicyState: boolean;
          _reqIntegState: boolean;
          _reqLifetime: int;
          _reqMutualAuthState: boolean;
          _reqReplayDetState: boolean;
          _reqSequenceDetState: boolean;
          _srcName: GSSNameImpl;
          _targName: GSSNameImpl;
        }
        interface GSSContextImpl extends CombineTypes<[_GSSContextImpl, java.lang.Object, org.ietf.jgss.GSSContext]> {}
        interface _GSSCredentialImpl$$static extends ClassLike {
          _getElementStr(mechOid: org.ietf.jgss.Oid, usage: int): string;
          new(): GSSCredentialImpl;
          _new(src: GSSCredentialImpl): GSSCredentialImpl;
          _new(gssManager: GSSManagerImpl, usage: int): GSSCredentialImpl;
          _new(gssManager: GSSManagerImpl, name: org.ietf.jgss.GSSName, lifetime: int, mech: org.ietf.jgss.Oid, usage: int): GSSCredentialImpl;
          _new(gssManager: GSSManagerImpl, name: org.ietf.jgss.GSSName, lifetime: int, mechs: org.ietf.jgss.Oid[], usage: int): GSSCredentialImpl;
          new(gssManager: GSSManagerImpl, mechElement: jgss.spi.GSSCredentialSpi): GSSCredentialImpl;
        }
        let GSSCredentialImpl: _GSSCredentialImpl$$static;
        interface _GSSCredentialImpl {
          add(name: org.ietf.jgss.GSSName, initLifetime: int, acceptLifetime: int, mech: org.ietf.jgss.Oid, usage: int): void;
          dispose(): void;
          equals(another: any): boolean;
          getElement(mechOid: org.ietf.jgss.Oid, initiate: boolean): jgss.spi.GSSCredentialSpi;
          _getElements(): java.util.Set<jgss.spi.GSSCredentialSpi>;
          getMechs(): org.ietf.jgss.Oid[];
          getName(): org.ietf.jgss.GSSName;
          getName(mech: org.ietf.jgss.Oid): org.ietf.jgss.GSSName;
          getRemainingAcceptLifetime(mech: org.ietf.jgss.Oid): int;
          getRemainingInitLifetime(mech: org.ietf.jgss.Oid): int;
          getRemainingLifetime(): int;
          getUsage(): int;
          getUsage(mech: org.ietf.jgss.Oid): int;
          hashCode(): int;
          impersonate(name: org.ietf.jgss.GSSName): org.ietf.jgss.GSSCredential;
          _init(gssManager: GSSManagerImpl): void;
          toString(): string;
          _destroyed: boolean;
          _gssManager: GSSManagerImpl;
          _hashtable: java.util.Hashtable<GSSCredentialImpl$SearchKey,spi.GSSCredentialSpi>;
          _tempCred: spi.GSSCredentialSpi;
        }
        interface GSSCredentialImpl extends CombineTypes<[_GSSCredentialImpl, org.ietf.jgss.GSSCredential, java.lang.Object]> {}
        interface _GSSCredentialImpl$SearchKey$$static extends ClassLike {
          new(mechOid: org.ietf.jgss.Oid, usage: int): GSSCredentialImpl$SearchKey;
        }
        let GSSCredentialImpl$SearchKey: _GSSCredentialImpl$SearchKey$$static;
        interface _GSSCredentialImpl$SearchKey {
          equals(other: any): boolean;
          getMech(): org.ietf.jgss.Oid;
          getUsage(): int;
          hashCode(): int;
          _mechOid: org.ietf.jgss.Oid;
          _usage: int;
        }
        interface GSSCredentialImpl$SearchKey extends CombineTypes<[_GSSCredentialImpl$SearchKey, java.lang.Object]> {}
        interface _GSSExceptionImpl$$static extends ClassLike {
          _serialVersionUID: long;
          _new(majorCode: int, mech: org.ietf.jgss.Oid): GSSExceptionImpl;
          new(majorCode: int, majorMessage: string): GSSExceptionImpl;
          new(majorCode: int, cause: java.lang.Exception): GSSExceptionImpl;
          new(majorCode: int, majorMessage: string, cause: java.lang.Exception): GSSExceptionImpl;
        }
        let GSSExceptionImpl: _GSSExceptionImpl$$static;
        interface _GSSExceptionImpl {
          getMessage(): string;
          _majorMessage: string;
        }
        interface GSSExceptionImpl extends CombineTypes<[_GSSExceptionImpl, org.ietf.jgss.GSSException]> {}
        interface _GSSHeader$$static extends ClassLike {
          getMaxMechTokenSize(mechOid: security.util.ObjectIdentifier, maxTotalSize: int): int;
          readonly TOKEN_ID: int;
          new(mechOid: security.util.ObjectIdentifier, mechTokenLength: int): GSSHeader;
          new(is: java.io.InputStream): GSSHeader;
        }
        let GSSHeader: _GSSHeader$$static;
        interface _GSSHeader {
          _debug(str: string): void;
          encode(os: java.io.OutputStream): int;
          _getHexBytes(bytes: byte[], len: int): string;
          _getLenFieldSize(len: int): int;
          getLength(): int;
          _getLength(_in: java.io.InputStream): int;
          _getLength(lenByte: int, _in: java.io.InputStream): int;
          getMechTokenLength(): int;
          getOid(): security.util.ObjectIdentifier;
          _putLength(len: int, out: java.io.OutputStream): int;
          _mechOid: security.util.ObjectIdentifier;
          _mechOidBytes: byte[];
          _mechTokenLength: int;
        }
        interface GSSHeader extends CombineTypes<[_GSSHeader, java.lang.Object]> {}
        interface _GSSManagerImpl$$static extends ClassLike {
          _wrap(cred: GSSCredentialImpl): org.ietf.jgss.GSSCredential;
          _wrap(ctxt: GSSContextImpl): org.ietf.jgss.GSSContext;
          _USE_NATIVE: boolean;
          new(caller: GSSCaller, useNative: boolean): GSSManagerImpl;
          new(caller: GSSCaller): GSSManagerImpl;
          new(): GSSManagerImpl;
        }
        let GSSManagerImpl: _GSSManagerImpl$$static;
        interface _GSSManagerImpl {
          addProviderAtEnd(p: java.security.Provider, mech: org.ietf.jgss.Oid): void;
          addProviderAtFront(p: java.security.Provider, mech: org.ietf.jgss.Oid): void;
          createContext(peer: org.ietf.jgss.GSSName, mech: org.ietf.jgss.Oid, myCred: org.ietf.jgss.GSSCredential, lifetime: int): org.ietf.jgss.GSSContext;
          createContext(myCred: org.ietf.jgss.GSSCredential): org.ietf.jgss.GSSContext;
          createContext(interProcessToken: byte[]): org.ietf.jgss.GSSContext;
          createCredential(usage: int): org.ietf.jgss.GSSCredential;
          createCredential(aName: org.ietf.jgss.GSSName, lifetime: int, mech: org.ietf.jgss.Oid, usage: int): org.ietf.jgss.GSSCredential;
          createCredential(aName: org.ietf.jgss.GSSName, lifetime: int, mechs: org.ietf.jgss.Oid[], usage: int): org.ietf.jgss.GSSCredential;
          createName(nameStr: string, nameType: org.ietf.jgss.Oid): org.ietf.jgss.GSSName;
          createName(name: byte[], nameType: org.ietf.jgss.Oid): org.ietf.jgss.GSSName;
          createName(nameStr: string, nameType: org.ietf.jgss.Oid, mech: org.ietf.jgss.Oid): org.ietf.jgss.GSSName;
          createName(name: byte[], nameType: org.ietf.jgss.Oid, mech: org.ietf.jgss.Oid): org.ietf.jgss.GSSName;
          getCredentialElement(name: jgss.spi.GSSNameSpi, initLifetime: int, acceptLifetime: int, mech: org.ietf.jgss.Oid, usage: int): jgss.spi.GSSCredentialSpi;
          _getMechanismContext(peer: jgss.spi.GSSNameSpi, myInitiatorCred: jgss.spi.GSSCredentialSpi, lifetime: int, mech: org.ietf.jgss.Oid): jgss.spi.GSSContextSpi;
          _getMechanismContext(myAcceptorCred: jgss.spi.GSSCredentialSpi, mech: org.ietf.jgss.Oid): jgss.spi.GSSContextSpi;
          _getMechanismContext(exportedContext: byte[]): jgss.spi.GSSContextSpi;
          getMechs(): org.ietf.jgss.Oid[];
          getMechsForName(nameType: org.ietf.jgss.Oid): org.ietf.jgss.Oid[];
          getNameElement(name: string, nameType: org.ietf.jgss.Oid, mech: org.ietf.jgss.Oid): jgss.spi.GSSNameSpi;
          getNameElement(name: byte[], nameType: org.ietf.jgss.Oid, mech: org.ietf.jgss.Oid): jgss.spi.GSSNameSpi;
          getNamesForMech(mech: org.ietf.jgss.Oid): org.ietf.jgss.Oid[];
          _list: ProviderList;
        }
        interface GSSManagerImpl extends CombineTypes<[_GSSManagerImpl, org.ietf.jgss.GSSManager]> {}
        interface _GSSNameImpl$$static extends ClassLike {
          _getNameTypeStr(nameTypeOid: org.ietf.jgss.Oid): string;
          _wrapElement(gssManager: GSSManagerImpl, mechElement: jgss.spi.GSSNameSpi): GSSNameImpl;
          _oldHostbasedServiceName: org.ietf.jgss.Oid;
          _new(gssManager: GSSManagerImpl, mechElement: jgss.spi.GSSNameSpi): GSSNameImpl;
          _new(gssManager: GSSManagerImpl, appName: any, appNameType: org.ietf.jgss.Oid): GSSNameImpl;
          _new(gssManager: GSSManagerImpl, appName: any, appNameType: org.ietf.jgss.Oid, mech: org.ietf.jgss.Oid): GSSNameImpl;
        }
        let GSSNameImpl: _GSSNameImpl$$static;
        interface _GSSNameImpl {
          canonicalize(mech: org.ietf.jgss.Oid): org.ietf.jgss.GSSName;
          equals(other: org.ietf.jgss.GSSName): boolean;
          equals(another: any): boolean;
          export(): byte[];
          getElement(mechOid: org.ietf.jgss.Oid): jgss.spi.GSSNameSpi;
          _getElements(): java.util.Set<jgss.spi.GSSNameSpi>;
          getStringNameType(): org.ietf.jgss.Oid;
          hashCode(): int;
          _importName(gssManager: GSSManagerImpl, appName: any): void;
          _init(gssManager: GSSManagerImpl, appName: any, appNameType: org.ietf.jgss.Oid, mech: org.ietf.jgss.Oid): void;
          isAnonymous(): boolean;
          isMN(): boolean;
          toString(): string;
          _appNameBytes: byte[];
          _appNameStr: string;
          _appNameType: org.ietf.jgss.Oid;
          _elements: java.util.HashMap<org.ietf.jgss.Oid,spi.GSSNameSpi>;
          _gssManager: GSSManagerImpl;
          _mechElement: spi.GSSNameSpi;
          _printableName: string;
          _printableNameType: org.ietf.jgss.Oid;
        }
        interface GSSNameImpl extends CombineTypes<[_GSSNameImpl, java.lang.Object, org.ietf.jgss.GSSName]> {}
        interface _GSSToken$$static extends ClassLike {
          getHexBytes(bytes: byte[]): string;
          getHexBytes(bytes: byte[], len: int): string;
          getHexBytes(bytes: byte[], pos: int, len: int): string;
          readBigEndian(data: byte[], pos: int, size: int): int;
          readFully(is: java.io.InputStream, buffer: byte[]): void;
          readFully(is: java.io.InputStream, buffer: byte[], offset: int, len: int): void;
          readInt(is: java.io.InputStream): int;
          readInt(src: byte[], pos: int): int;
          readLittleEndian(data: byte[], pos: int, size: int): int;
          writeBigEndian(value: int, array: byte[]): void;
          writeBigEndian(value: int, array: byte[], pos: int): void;
          writeInt(val: int, os: java.io.OutputStream): void;
          writeInt(val: int, dest: byte[], pos: int): int;
          writeLittleEndian(value: int, array: byte[]): void;
          writeLittleEndian(value: int, array: byte[], pos: int): void;
          new(): GSSToken;
        }
        let GSSToken: _GSSToken$$static;
        interface _GSSToken {
        }
        interface GSSToken extends CombineTypes<[_GSSToken, java.lang.Object]> {}
        interface _GSSUtil$$static extends ClassLike {
          createOid(oidStr: string): org.ietf.jgss.Oid;
          _debug(message: string): void;
          getMechStr(oid: org.ietf.jgss.Oid): string;
          getSubject(name: org.ietf.jgss.GSSName, creds: org.ietf.jgss.GSSCredential): javax.security.auth.Subject;
          isKerberosMech(oid: org.ietf.jgss.Oid): boolean;
          isSpNegoMech(oid: org.ietf.jgss.Oid): boolean;
          login(caller: GSSCaller, mech: org.ietf.jgss.Oid): javax.security.auth.Subject;
          _populateCredentials(credentials: java.util.Set<any>, gssCredentials: java.util.Set<any>): void;
          searchSubject<T>(name: jgss.spi.GSSNameSpi, mech: org.ietf.jgss.Oid, initiate: boolean, credCls: java.lang.Class<T>): java.util.Vector<T>;
          useMSInterop(): boolean;
          useSubjectCredsOnly(caller: GSSCaller): boolean;
          _DEBUG: boolean;
          readonly GSS_KRB5_MECH_OID: org.ietf.jgss.Oid;
          readonly GSS_KRB5_MECH_OID2: org.ietf.jgss.Oid;
          readonly GSS_KRB5_MECH_OID_MS: org.ietf.jgss.Oid;
          readonly GSS_SPNEGO_MECH_OID: org.ietf.jgss.Oid;
          readonly NT_GSS_KRB5_PRINCIPAL: org.ietf.jgss.Oid;
          new(): GSSUtil;
        }
        let GSSUtil: _GSSUtil$$static;
        interface _GSSUtil {
        }
        interface GSSUtil extends CombineTypes<[_GSSUtil, java.lang.Object]> {}
        interface _HttpCaller$$static extends ClassLike {
          new(hci: sun.net.www.protocol.http.HttpCallerInfo): HttpCaller;
        }
        let HttpCaller: _HttpCaller$$static;
        interface _HttpCaller {
          info(): sun.net.www.protocol.http.HttpCallerInfo;
          _hci: sun.net.www.protocol.http.HttpCallerInfo;
        }
        interface HttpCaller extends CombineTypes<[_HttpCaller, sun.security.jgss.GSSCaller]> {}
        interface _JgssExtender$$static extends ClassLike {
          getExtender(): JgssExtender;
          _setExtender(theOne: JgssExtender): void;
          _theOne: JgssExtender;
          new(): JgssExtender;
        }
        let JgssExtender: _JgssExtender$$static;
        interface _JgssExtender {
          wrap(cred: org.ietf.jgss.GSSCredential): org.ietf.jgss.GSSCredential;
          wrap(ctxt: org.ietf.jgss.GSSContext): org.ietf.jgss.GSSContext;
        }
        interface JgssExtender extends CombineTypes<[_JgssExtender, java.lang.Object]> {}
        interface _LoginConfigImpl$$static extends ClassLike {
          _isServerSide(caller: GSSCaller): boolean;
          readonly HTTP_USE_GLOBAL_CREDS: boolean;
          _debug: security.util.Debug;
          new(caller: GSSCaller, mech: org.ietf.jgss.Oid): LoginConfigImpl;
        }
        let LoginConfigImpl: _LoginConfigImpl$$static;
        interface _LoginConfigImpl {
          getAppConfigurationEntry(name: string): javax.security.auth.login.AppConfigurationEntry[];
          _getDefaultConfigurationEntry(): javax.security.auth.login.AppConfigurationEntry[];
          _caller: GSSCaller;
          _config: javax.security.auth.login.Configuration;
          _mechName: string;
        }
        interface LoginConfigImpl extends CombineTypes<[_LoginConfigImpl, javax.security.auth.login.Configuration]> {}
        interface _ProviderList$$static extends ClassLike {
          _createGSSException(p: java.security.Provider, className: string, trailingMsg: string, cause: java.lang.Exception): org.ietf.jgss.GSSException;
          _getMechFactoryImpl(p: java.security.Provider, className: string, mechOid: org.ietf.jgss.Oid, caller: GSSCaller): jgss.spi.MechanismFactory;
          readonly DEFAULT_MECH_OID: org.ietf.jgss.Oid;
          _PROV_PROP_PREFIX: string;
          _PROV_PROP_PREFIX_LEN: int;
          _SPI_MECH_FACTORY_TYPE: string;
          new(caller: GSSCaller, useNative: boolean): ProviderList;
        }
        let ProviderList: _ProviderList$$static;
        interface _ProviderList {
          _addAllMechsFromProvider(p: java.security.Provider): boolean;
          addProviderAtEnd(p: java.security.Provider, mechOid: org.ietf.jgss.Oid): void;
          addProviderAtFront(p: java.security.Provider, mechOid: org.ietf.jgss.Oid): void;
          getMechFactory(mechOid: org.ietf.jgss.Oid): jgss.spi.MechanismFactory;
          getMechFactory(mechOid: org.ietf.jgss.Oid, p: java.security.Provider): jgss.spi.MechanismFactory;
          _getMechFactory(e: ProviderList$PreferencesEntry, mechOid: org.ietf.jgss.Oid): jgss.spi.MechanismFactory;
          getMechs(): org.ietf.jgss.Oid[];
          _getOidFromMechFactoryProperty(prop: string): org.ietf.jgss.Oid;
          _isMechFactoryProperty(prop: string): boolean;
          _caller: GSSCaller;
          _factories: java.util.HashMap<ProviderList$PreferencesEntry,spi.MechanismFactory>;
          _mechs: java.util.HashSet<org.ietf.jgss.Oid>;
          _preferences: java.util.ArrayList<ProviderList$PreferencesEntry>;
        }
        interface ProviderList extends CombineTypes<[_ProviderList, java.lang.Object]> {}
        interface _ProviderList$PreferencesEntry$$static extends ClassLike {
          _new(p: java.security.Provider, oid: org.ietf.jgss.Oid): ProviderList$PreferencesEntry;
        }
        let ProviderList$PreferencesEntry: _ProviderList$PreferencesEntry$$static;
        interface _ProviderList$PreferencesEntry {
          equals(other: any): boolean;
          _getOid(): org.ietf.jgss.Oid;
          _getProvider(): java.security.Provider;
          hashCode(): int;
          _implies(other: any): boolean;
          _impliesMechanism(oid: org.ietf.jgss.Oid): boolean;
          toString(): string;
          _oid: org.ietf.jgss.Oid;
          _p: java.security.Provider;
        }
        interface ProviderList$PreferencesEntry extends CombineTypes<[_ProviderList$PreferencesEntry, java.lang.Object]> {}
        interface _SunProvider$$static extends ClassLike {
          _INFO: string;
          _serialVersionUID: long;
          new(): SunProvider;
        }
        let SunProvider: _SunProvider$$static;
        interface _SunProvider {
        }
        interface SunProvider extends CombineTypes<[_SunProvider, java.security.Provider]> {}
        interface _SunProvider$ProviderService$$static extends ClassLike {
          _new(p: java.security.Provider, type: string, algo: string, cn: string): SunProvider$ProviderService;
        }
        let SunProvider$ProviderService: _SunProvider$ProviderService$$static;
        interface _SunProvider$ProviderService {
          newInstance(ctrParamObj: any): any;
        }
        interface SunProvider$ProviderService extends CombineTypes<[_SunProvider$ProviderService, java.security.Provider$Service]> {}
        interface _TokenTracker$$static extends ClassLike {
          _MAX_INTERVALS: int;
          new(initNumber: int): TokenTracker;
        }
        let TokenTracker: _TokenTracker$$static;
        interface _TokenTracker {
          _add(number: int, prevEntryPos: int): void;
          _getIntervalIndex(number: int): int;
          getProps(number: int, prop: org.ietf.jgss.MessageProp): void;
          toString(): string;
          _expectedNumber: int;
          _initNumber: int;
          _list: java.util.LinkedList<TokenTracker$Entry>;
          _windowStart: int;
          _windowStartIndex: int;
        }
        interface TokenTracker extends CombineTypes<[_TokenTracker, java.lang.Object]> {}
        interface _TokenTracker$Entry$$static extends ClassLike {
          _new(number: int): TokenTracker$Entry;
        }
        let TokenTracker$Entry: _TokenTracker$Entry$$static;
        interface _TokenTracker$Entry {
          _append(number: int): void;
          _compareTo(number: int): int;
          _contains(number: int): boolean;
          _getEnd(): int;
          _getStart(): int;
          _setEnd(end: int): void;
          _setInterval(start: int, end: int): void;
          _setStart(start: int): void;
          toString(): string;
          _end: int;
          _start: int;
        }
        interface TokenTracker$Entry extends CombineTypes<[_TokenTracker$Entry, java.lang.Object]> {}
      }
      module krb5 {
        module internal {
          module ccache {
            interface _CCacheInputStream$$static extends ClassLike {
              _DEBUG: boolean;
              new(is: java.io.InputStream): CCacheInputStream;
            }
            let CCacheInputStream: _CCacheInputStream$$static;
            interface _CCacheInputStream {
              _isRealm(str: string): boolean;
              _readAddr(): HostAddress[];
              _readAuth(): AuthorizationDataEntry[];
              _readCred(version: int): any;
              _readData(): byte[];
              _readFlags(): boolean[];
              _readKey(version: int): EncryptionKey;
              readPrincipal(version: int): PrincipalName;
              readTag(): Tag;
              _readTimes(): long[];
              _readskey(): boolean;
            }
            interface CCacheInputStream extends CombineTypes<[_CCacheInputStream, sun.security.krb5.internal.util.KrbDataInputStream, sun.security.krb5.internal.ccache.FileCCacheConstants]> {}
            interface _CCacheOutputStream$$static extends ClassLike {
              new(os: java.io.OutputStream): CCacheOutputStream;
            }
            let CCacheOutputStream: _CCacheOutputStream$$static;
            interface _CCacheOutputStream {
              addConfigEntry(cname: PrincipalName, e: CredentialsCache$ConfigEntry): void;
              addCreds(creds: Credentials): void;
              _writeFlags(flags: TicketFlags): void;
              writeHeader(p: PrincipalName, version: int): void;
              _writeTicket(t: Ticket): void;
            }
            interface CCacheOutputStream extends CombineTypes<[_CCacheOutputStream, sun.security.krb5.internal.util.KrbDataOutputStream, sun.security.krb5.internal.ccache.FileCCacheConstants]> {}
            interface _Credentials$$static extends ClassLike {
              new(new_cname: PrincipalName, new_sname: PrincipalName, new_key: EncryptionKey, new_authtime: KerberosTime, new_starttime: KerberosTime, new_endtime: KerberosTime, new_renewTill: KerberosTime, new_isEncInSKey: boolean, new_flags: TicketFlags, new_caddr: HostAddresses, new_authData: AuthorizationData, new_ticket: Ticket, new_secondTicket: Ticket): Credentials;
              new(kdcRep: KDCRep, new_secondTicket: Ticket, new_authorizationData: AuthorizationData, new_isEncInSKey: boolean): Credentials;
              new(kdcRep: KDCRep): Credentials;
              new(kdcRep: KDCRep, new_ticket: Ticket): Credentials;
            }
            let Credentials: _Credentials$$static;
            interface _Credentials {
              getAuthTime(): KerberosTime;
              getClientPrincipal(): PrincipalName;
              getEType(): int;
              getEndTime(): KerberosTime;
              getKey(): EncryptionKey;
              getRenewTill(): KerberosTime;
              getServicePrincipal(): PrincipalName;
              getServicePrincipal2(): PrincipalName;
              getStartTime(): KerberosTime;
              getTicket(): Ticket;
              getTicketFlags(): TicketFlags;
              getTktEType(): int;
              getTktEType2(): int;
              isValid(): boolean;
              setKrbCreds(): Credentials;
              _authorizationData: AuthorizationData;
              _authtime: KerberosTime;
              _caddr: HostAddresses;
              _cname: PrincipalName;
              _endtime: KerberosTime;
              _flags: TicketFlags;
              isEncInSKey: boolean;
              _key: EncryptionKey;
              _renewTill: KerberosTime;
              _secondTicket: Ticket;
              _sname: PrincipalName;
              _starttime: KerberosTime;
              _ticket: Ticket;
            }
            interface Credentials extends CombineTypes<[_Credentials, java.lang.Object]> {}
            interface _CredentialsCache$$static extends ClassLike {
              cacheName(): string;
              create(principal: PrincipalName, name: string): CredentialsCache;
              create(principal: PrincipalName): CredentialsCache;
              getInstance(principal: PrincipalName): CredentialsCache;
              getInstance(cache: string): CredentialsCache;
              getInstance(principal: PrincipalName, cache: string): CredentialsCache;
              getInstance(): CredentialsCache;
              _cacheName: string;
              new(): CredentialsCache;
            }
            let CredentialsCache: _CredentialsCache$$static;
            interface _CredentialsCache {
              addConfigEntry(a0: CredentialsCache$ConfigEntry): void;
              getConfigEntries(): java.util.List<CredentialsCache$ConfigEntry>;
              getConfigEntry(name: string): CredentialsCache$ConfigEntry;
              getCreds(a0: PrincipalName): Credentials;
              getCreds(a0: LoginOptions, a1: PrincipalName): Credentials;
              getCredsList(): Credentials[];
              getDefaultCreds(): Credentials;
              getInitialCreds(): Credentials;
              getPrimaryPrincipal(): PrincipalName;
              save(): void;
              update(a0: Credentials): void;
            }
            interface CredentialsCache extends CombineTypes<[_CredentialsCache, java.lang.Object]> {}
            interface _CredentialsCache$ConfigEntry$$static extends ClassLike {
              new(name: string, princ: PrincipalName, data: byte[]): CredentialsCache$ConfigEntry;
            }
            let CredentialsCache$ConfigEntry: _CredentialsCache$ConfigEntry$$static;
            interface _CredentialsCache$ConfigEntry {
              getData(): byte[];
              getName(): string;
              getPrinc(): PrincipalName;
              getSName(): PrincipalName;
              toString(): string;
              _data: byte[];
              _name: string;
              _princ: PrincipalName;
            }
            interface CredentialsCache$ConfigEntry extends CombineTypes<[_CredentialsCache$ConfigEntry, java.lang.Object]> {}
            interface _FileCCacheConstants$$static extends ClassLike {
              readonly FCC_TAG_DELTATIME: int;
              readonly KRB5_FCC_FVNO_1: int;
              readonly KRB5_FCC_FVNO_2: int;
              readonly KRB5_FCC_FVNO_3: int;
              readonly KRB5_FCC_FVNO_4: int;
              readonly KRB5_NT_UNKNOWN: int;
              readonly TKT_FLG_FORWARDABLE: int;
              readonly TKT_FLG_FORWARDED: int;
              readonly TKT_FLG_HW_AUTH: int;
              readonly TKT_FLG_INITIAL: int;
              readonly TKT_FLG_INVALID: int;
              readonly TKT_FLG_MAY_POSTDATE: int;
              readonly TKT_FLG_POSTDATED: int;
              readonly TKT_FLG_PRE_AUTH: int;
              readonly TKT_FLG_PROXIABLE: int;
              readonly TKT_FLG_PROXY: int;
              readonly TKT_FLG_RENEWABLE: int;
            }
            let FileCCacheConstants: _FileCCacheConstants$$static;
            interface _FileCCacheConstants {
            }
            interface FileCCacheConstants extends CombineTypes<[_FileCCacheConstants, java.lang.Object]> {}
            interface _FileCredentialsCache$$static extends ClassLike {
              _New(principal: PrincipalName, name: string): FileCredentialsCache;
              _New(principal: PrincipalName): FileCredentialsCache;
              acquireInstance(principal: PrincipalName, cache: string): FileCredentialsCache;
              acquireInstance(): FileCredentialsCache;
              checkValidation(name: string): string;
              _exec(c: string): string;
              getDefaultCacheName(): string;
              _DEBUG: boolean;
            }
            let FileCredentialsCache: _FileCredentialsCache$$static;
            interface _FileCredentialsCache {
              addConfigEntry(e: CredentialsCache$ConfigEntry): void;
              _exists(cache: string): boolean;
              getConfigEntries(): java.util.List<CredentialsCache$ConfigEntry>;
              getCreds(options: LoginOptions, sname: PrincipalName): Credentials;
              getCreds(sname: PrincipalName): Credentials;
              getCredsList(): Credentials[];
              getDefaultCreds(): Credentials;
              getInitialCreds(): Credentials;
              getPrimaryPrincipal(): PrincipalName;
              _init(principal: PrincipalName, name: string): void;
              _load(name: string): void;
              _match(s1: string[], s2: string[]): boolean;
              save(): void;
              update(c: Credentials): void;
              _configEntries: java.util.List<CredentialsCache$ConfigEntry>;
              _credentialsList: java.util.Vector<Credentials>;
              primaryPrincipal: PrincipalName;
              tag: Tag;
              version: int;
            }
            interface FileCredentialsCache extends CombineTypes<[_FileCredentialsCache, sun.security.krb5.internal.ccache.CredentialsCache, sun.security.krb5.internal.ccache.FileCCacheConstants]> {}
            interface _MemoryCredentialsCache$$static extends ClassLike {
              _getCCacheInstance(p: PrincipalName): CredentialsCache;
              _getCCacheInstance(p: PrincipalName, cacheFile: java.io.File): CredentialsCache;
              new(): MemoryCredentialsCache;
            }
            let MemoryCredentialsCache: _MemoryCredentialsCache$$static;
            interface _MemoryCredentialsCache {
              exists(a0: string): boolean;
              getCreds(a0: PrincipalName): Credentials;
              getCredsList(): Credentials[];
              getPrimaryPrincipal(): PrincipalName;
              save(): void;
              update(a0: Credentials): void;
            }
            interface MemoryCredentialsCache extends CombineTypes<[_MemoryCredentialsCache, sun.security.krb5.internal.ccache.CredentialsCache]> {}
            interface _Tag$$static extends ClassLike {
              new(len: int, new_tag: int, new_time: int, new_usec: int): Tag;
              new(new_tag: int): Tag;
            }
            let Tag: _Tag$$static;
            interface _Tag {
              toByteArray(): byte[];
              _length: int;
              _tag: int;
              _tagLen: int;
              _time_offset: int;
              _usec_offset: int;
            }
            interface Tag extends CombineTypes<[_Tag, java.lang.Object]> {}
          }
          module crypto {
            module dk {
              interface _AesDkCrypto$$static extends ClassLike {
                _PBKDF2(secret: char[], salt: byte[], count: int, keyLength: int): byte[];
                readBigEndian(data: byte[], pos: int, size: int): int;
                _BLOCK_SIZE: int;
                _DEFAULT_ITERATION_COUNT: int;
                _ZERO_IV: byte[];
                _debug: boolean;
                _hashSize: int;
                new(length: int): AesDkCrypto;
              }
              let AesDkCrypto: _AesDkCrypto$$static;
              interface _AesDkCrypto {
                calculateChecksum(baseKey: byte[], usage: int, input: byte[], start: int, len: int): byte[];
                decrypt(baseKey: byte[], usage: int, ivec: byte[], ciphertext: byte[], start: int, len: int): byte[];
                _decryptCTS(baseKey: byte[], usage: int, ivec: byte[], ciphertext: byte[], start: int, len: int, confounder_exists: boolean): byte[];
                decryptRaw(baseKey: byte[], usage: int, ivec: byte[], ciphertext: byte[], start: int, len: int): byte[];
                encrypt(baseKey: byte[], usage: int, ivec: byte[], new_ivec: byte[], plaintext: byte[], start: int, len: int): byte[];
                _encryptCTS(baseKey: byte[], usage: int, ivec: byte[], new_ivec: byte[], plaintext: byte[], start: int, len: int, confounder_exists: boolean): byte[];
                encryptRaw(baseKey: byte[], usage: int, ivec: byte[], plaintext: byte[], start: int, len: int): byte[];
                getChecksumLength(): int;
                _getCipher(key: byte[], ivec: byte[], mode: int): javax.crypto.Cipher;
                _getHmac(key: byte[], msg: byte[]): byte[];
                _getKeySeedLength(): int;
                _randomToKey(_in: byte[]): byte[];
                stringToKey(password: char[], salt: string, s2kparams: byte[]): byte[];
                _stringToKey(secret: char[], salt: byte[], params: byte[]): byte[];
                _keyLength: int;
              }
              interface AesDkCrypto extends CombineTypes<[_AesDkCrypto, sun.security.krb5.internal.crypto.dk.DkCrypto]> {}
              interface _AesSha2DkCrypto$$static extends ClassLike {
                _PBKDF2(secret: char[], salt: byte[], count: int, keyLength: int): byte[];
                readBigEndian(data: byte[], pos: int, size: int): int;
                _BLOCK_SIZE: int;
                _DEFAULT_ITERATION_COUNT: int;
                _ETYPE_NAME_128: byte[];
                _ETYPE_NAME_256: byte[];
                _ZERO_IV: byte[];
                _debug: boolean;
                new(length: int): AesSha2DkCrypto;
              }
              let AesSha2DkCrypto: _AesSha2DkCrypto$$static;
              interface _AesSha2DkCrypto {
                calculateChecksum(baseKey: byte[], usage: int, input: byte[], start: int, len: int): byte[];
                decrypt(baseKey: byte[], usage: int, ivec: byte[], ciphertext: byte[], start: int, len: int): byte[];
                _decryptCTS(baseKey: byte[], usage: int, ivec: byte[], ciphertext: byte[], start: int, len: int, confounder_exists: boolean): byte[];
                decryptRaw(baseKey: byte[], usage: int, ivec: byte[], ciphertext: byte[], start: int, len: int): byte[];
                _deriveKey(baseKey: byte[], usage: int, type: byte): byte[];
                _dr(key: byte[], constant: byte[]): byte[];
                encrypt(baseKey: byte[], usage: int, ivec: byte[], new_ivec: byte[], plaintext: byte[], start: int, len: int): byte[];
                _encryptCTS(baseKey: byte[], usage: int, ivec: byte[], new_ivec: byte[], plaintext: byte[], start: int, len: int, confounder_exists: boolean): byte[];
                encryptRaw(baseKey: byte[], usage: int, ivec: byte[], plaintext: byte[], start: int, len: int): byte[];
                getChecksumLength(): int;
                _getCipher(key: byte[], ivec: byte[], mode: int): javax.crypto.Cipher;
                _getHmac(key: byte[], msg: byte[]): byte[];
                _getKeySeedLength(): int;
                _randomToKey(_in: byte[]): byte[];
                stringToKey(password: char[], salt: string, s2kparams: byte[]): byte[];
                _stringToKey(secret: char[], salt: byte[], params: byte[]): byte[];
                _hashSize: int;
                _keyLength: int;
              }
              interface AesSha2DkCrypto extends CombineTypes<[_AesSha2DkCrypto, sun.security.krb5.internal.crypto.dk.DkCrypto]> {}
              interface _ArcFourCrypto$$static extends ClassLike {
                _ZERO_IV: byte[];
                _confounderSize: int;
                _debug: boolean;
                _hashSize: int;
                new(length: int): ArcFourCrypto;
              }
              let ArcFourCrypto: _ArcFourCrypto$$static;
              interface _ArcFourCrypto {
                _arcfour_translate_usage(usage: int): int;
                calculateChecksum(baseKey: byte[], usage: int, input: byte[], start: int, len: int): byte[];
                decrypt(baseKey: byte[], usage: int, ivec: byte[], ciphertext: byte[], start: int, len: int): byte[];
                decryptRaw(baseKey: byte[], usage: int, ivec: byte[], ciphertext: byte[], start: int, len: int, seqNum: byte[]): byte[];
                decryptSeq(baseKey: byte[], usage: int, checksum: byte[], ciphertext: byte[], start: int, len: int): byte[];
                encrypt(baseKey: byte[], usage: int, ivec: byte[], new_ivec: byte[], plaintext: byte[], start: int, len: int): byte[];
                encryptRaw(baseKey: byte[], usage: int, seqNum: byte[], plaintext: byte[], start: int, len: int): byte[];
                encryptSeq(baseKey: byte[], usage: int, checksum: byte[], plaintext: byte[], start: int, len: int): byte[];
                getChecksumLength(): int;
                _getCipher(key: byte[], ivec: byte[], mode: int): javax.crypto.Cipher;
                _getHmac(key: byte[], msg: byte[]): byte[];
                _getKeySeedLength(): int;
                _getSalt(usage: int): byte[];
                _randomToKey(_in: byte[]): byte[];
                stringToKey(passwd: char[]): byte[];
                _stringToKey(secret: char[], opaque: byte[]): byte[];
                _keyLength: int;
              }
              interface ArcFourCrypto extends CombineTypes<[_ArcFourCrypto, sun.security.krb5.internal.crypto.dk.DkCrypto]> {}
              interface _Des3DkCrypto$$static extends ClassLike {
                _des3Expand(input: byte[], start: int, end: int): byte[];
                _keyCorrection(key: byte[]): byte[];
                _setParityBit(key: byte[]): void;
                _ZERO_IV: byte[];
                new(): Des3DkCrypto;
              }
              let Des3DkCrypto: _Des3DkCrypto$$static;
              interface _Des3DkCrypto {
                getChecksumLength(): int;
                _getCipher(key: byte[], ivec: byte[], mode: int): javax.crypto.Cipher;
                _getHmac(key: byte[], msg: byte[]): byte[];
                _getKeySeedLength(): int;
                parityFix(value: byte[]): byte[];
                _randomToKey(_in: byte[]): byte[];
                stringToKey(salt: char[]): byte[];
                _stringToKey(secretAndSalt: byte[], opaque: byte[]): byte[];
              }
              interface Des3DkCrypto extends CombineTypes<[_Des3DkCrypto, sun.security.krb5.internal.crypto.dk.DkCrypto]> {}
              interface _DkCrypto$$static extends ClassLike {
                _binaryStringToBytes(str: string): byte[];
                _bytesToString(digest: byte[]): string;
                _charToUtf16(chars: char[]): byte[];
                _charToUtf8(chars: char[]): byte[];
                _nfold(_in: byte[], outbits: int): byte[];
                _traceOutput(traceTag: string, output: byte[], offset: int, len: int): void;
                _KERBEROS_CONSTANT: byte[];
                _debug: boolean;
                new(): DkCrypto;
              }
              let DkCrypto: _DkCrypto$$static;
              interface _DkCrypto {
                calculateChecksum(baseKey: byte[], usage: int, input: byte[], start: int, len: int): byte[];
                decrypt(baseKey: byte[], usage: int, ivec: byte[], ciphertext: byte[], start: int, len: int): byte[];
                decryptRaw(baseKey: byte[], usage: int, ivec: byte[], ciphertext: byte[], start: int, len: int): byte[];
                _dk(key: byte[], constant: byte[]): byte[];
                _dr(key: byte[], constant: byte[]): byte[];
                encrypt(baseKey: byte[], usage: int, ivec: byte[], new_ivec: byte[], plaintext: byte[], start: int, len: int): byte[];
                encryptRaw(baseKey: byte[], usage: int, ivec: byte[], plaintext: byte[], start: int, len: int): byte[];
                getChecksumLength(): int;
                _getCipher(a0: byte[], a1: byte[], a2: int): javax.crypto.Cipher;
                _getHmac(a0: byte[], a1: byte[]): byte[];
                _getKeySeedLength(): int;
                _randomToKey(a0: byte[]): byte[];
                _roundup(n: int, blocksize: int): int;
              }
              interface DkCrypto extends CombineTypes<[_DkCrypto, java.lang.Object]> {}
            }
            interface _Aes128$$static extends ClassLike {
              calculateChecksum(baseKey: byte[], usage: int, input: byte[], start: int, len: int): byte[];
              decrypt(baseKey: byte[], usage: int, ivec: byte[], ciphertext: byte[], start: int, len: int): byte[];
              decryptRaw(baseKey: byte[], usage: int, ivec: byte[], ciphertext: byte[], start: int, len: int): byte[];
              encrypt(baseKey: byte[], usage: int, ivec: byte[], plaintext: byte[], start: int, len: int): byte[];
              encryptRaw(baseKey: byte[], usage: int, ivec: byte[], plaintext: byte[], start: int, len: int): byte[];
              getChecksumLength(): int;
              stringToKey(password: char[], salt: string, params: byte[]): byte[];
              _CRYPTO: dk.AesDkCrypto;
            }
            let Aes128: _Aes128$$static;
            interface _Aes128 {
            }
            interface Aes128 extends CombineTypes<[_Aes128, java.lang.Object]> {}
            interface _Aes128CtsHmacSha1EType$$static extends ClassLike {
              new(): Aes128CtsHmacSha1EType;
            }
            let Aes128CtsHmacSha1EType: _Aes128CtsHmacSha1EType$$static;
            interface _Aes128CtsHmacSha1EType {
              blockSize(): int;
              checksumSize(): int;
              checksumType(): int;
              confounderSize(): int;
              decrypt(cipher: byte[], key: byte[], usage: int): byte[];
              decrypt(cipher: byte[], key: byte[], ivec: byte[], usage: int): byte[];
              decryptedData(data: byte[]): byte[];
              eType(): int;
              encrypt(data: byte[], key: byte[], usage: int): byte[];
              encrypt(data: byte[], key: byte[], ivec: byte[], usage: int): byte[];
              keySize(): int;
              keyType(): int;
              minimumPadSize(): int;
            }
            interface Aes128CtsHmacSha1EType extends CombineTypes<[_Aes128CtsHmacSha1EType, sun.security.krb5.internal.crypto.EType]> {}
            interface _Aes128CtsHmacSha2EType$$static extends ClassLike {
              new(): Aes128CtsHmacSha2EType;
            }
            let Aes128CtsHmacSha2EType: _Aes128CtsHmacSha2EType$$static;
            interface _Aes128CtsHmacSha2EType {
              blockSize(): int;
              checksumSize(): int;
              checksumType(): int;
              confounderSize(): int;
              decrypt(cipher: byte[], key: byte[], usage: int): byte[];
              decrypt(cipher: byte[], key: byte[], ivec: byte[], usage: int): byte[];
              decryptedData(data: byte[]): byte[];
              eType(): int;
              encrypt(data: byte[], key: byte[], usage: int): byte[];
              encrypt(data: byte[], key: byte[], ivec: byte[], usage: int): byte[];
              keySize(): int;
              keyType(): int;
              minimumPadSize(): int;
            }
            interface Aes128CtsHmacSha2EType extends CombineTypes<[_Aes128CtsHmacSha2EType, sun.security.krb5.internal.crypto.EType]> {}
            interface _Aes128Sha2$$static extends ClassLike {
              calculateChecksum(baseKey: byte[], usage: int, input: byte[], start: int, len: int): byte[];
              decrypt(baseKey: byte[], usage: int, ivec: byte[], ciphertext: byte[], start: int, len: int): byte[];
              decryptRaw(baseKey: byte[], usage: int, ivec: byte[], ciphertext: byte[], start: int, len: int): byte[];
              encrypt(baseKey: byte[], usage: int, ivec: byte[], plaintext: byte[], start: int, len: int): byte[];
              encryptRaw(baseKey: byte[], usage: int, ivec: byte[], plaintext: byte[], start: int, len: int): byte[];
              getChecksumLength(): int;
              stringToKey(password: char[], salt: string, params: byte[]): byte[];
              _CRYPTO: dk.AesSha2DkCrypto;
            }
            let Aes128Sha2: _Aes128Sha2$$static;
            interface _Aes128Sha2 {
            }
            interface Aes128Sha2 extends CombineTypes<[_Aes128Sha2, java.lang.Object]> {}
            interface _Aes256$$static extends ClassLike {
              calculateChecksum(baseKey: byte[], usage: int, input: byte[], start: int, len: int): byte[];
              decrypt(baseKey: byte[], usage: int, ivec: byte[], ciphertext: byte[], start: int, len: int): byte[];
              decryptRaw(baseKey: byte[], usage: int, ivec: byte[], ciphertext: byte[], start: int, len: int): byte[];
              encrypt(baseKey: byte[], usage: int, ivec: byte[], plaintext: byte[], start: int, len: int): byte[];
              encryptRaw(baseKey: byte[], usage: int, ivec: byte[], plaintext: byte[], start: int, len: int): byte[];
              getChecksumLength(): int;
              stringToKey(password: char[], salt: string, params: byte[]): byte[];
              _CRYPTO: dk.AesDkCrypto;
            }
            let Aes256: _Aes256$$static;
            interface _Aes256 {
            }
            interface Aes256 extends CombineTypes<[_Aes256, java.lang.Object]> {}
            interface _Aes256CtsHmacSha1EType$$static extends ClassLike {
              new(): Aes256CtsHmacSha1EType;
            }
            let Aes256CtsHmacSha1EType: _Aes256CtsHmacSha1EType$$static;
            interface _Aes256CtsHmacSha1EType {
              blockSize(): int;
              checksumSize(): int;
              checksumType(): int;
              confounderSize(): int;
              decrypt(cipher: byte[], key: byte[], usage: int): byte[];
              decrypt(cipher: byte[], key: byte[], ivec: byte[], usage: int): byte[];
              decryptedData(data: byte[]): byte[];
              eType(): int;
              encrypt(data: byte[], key: byte[], usage: int): byte[];
              encrypt(data: byte[], key: byte[], ivec: byte[], usage: int): byte[];
              keySize(): int;
              keyType(): int;
              minimumPadSize(): int;
            }
            interface Aes256CtsHmacSha1EType extends CombineTypes<[_Aes256CtsHmacSha1EType, sun.security.krb5.internal.crypto.EType]> {}
            interface _Aes256CtsHmacSha2EType$$static extends ClassLike {
              new(): Aes256CtsHmacSha2EType;
            }
            let Aes256CtsHmacSha2EType: _Aes256CtsHmacSha2EType$$static;
            interface _Aes256CtsHmacSha2EType {
              blockSize(): int;
              checksumSize(): int;
              checksumType(): int;
              confounderSize(): int;
              decrypt(cipher: byte[], key: byte[], usage: int): byte[];
              decrypt(cipher: byte[], key: byte[], ivec: byte[], usage: int): byte[];
              decryptedData(data: byte[]): byte[];
              eType(): int;
              encrypt(data: byte[], key: byte[], usage: int): byte[];
              encrypt(data: byte[], key: byte[], ivec: byte[], usage: int): byte[];
              keySize(): int;
              keyType(): int;
              minimumPadSize(): int;
            }
            interface Aes256CtsHmacSha2EType extends CombineTypes<[_Aes256CtsHmacSha2EType, sun.security.krb5.internal.crypto.EType]> {}
            interface _Aes256Sha2$$static extends ClassLike {
              calculateChecksum(baseKey: byte[], usage: int, input: byte[], start: int, len: int): byte[];
              decrypt(baseKey: byte[], usage: int, ivec: byte[], ciphertext: byte[], start: int, len: int): byte[];
              decryptRaw(baseKey: byte[], usage: int, ivec: byte[], ciphertext: byte[], start: int, len: int): byte[];
              encrypt(baseKey: byte[], usage: int, ivec: byte[], plaintext: byte[], start: int, len: int): byte[];
              encryptRaw(baseKey: byte[], usage: int, ivec: byte[], plaintext: byte[], start: int, len: int): byte[];
              getChecksumLength(): int;
              stringToKey(password: char[], salt: string, params: byte[]): byte[];
              _CRYPTO: dk.AesSha2DkCrypto;
            }
            let Aes256Sha2: _Aes256Sha2$$static;
            interface _Aes256Sha2 {
            }
            interface Aes256Sha2 extends CombineTypes<[_Aes256Sha2, java.lang.Object]> {}
            interface _ArcFourHmac$$static extends ClassLike {
              calculateChecksum(baseKey: byte[], usage: int, input: byte[], start: int, len: int): byte[];
              decrypt(baseKey: byte[], usage: int, ivec: byte[], ciphertext: byte[], start: int, len: int): byte[];
              decryptRaw(baseKey: byte[], usage: int, ivec: byte[], ciphertext: byte[], start: int, len: int, seqNum: byte[]): byte[];
              decryptSeq(baseKey: byte[], usage: int, checksum: byte[], ciphertext: byte[], start: int, len: int): byte[];
              encrypt(baseKey: byte[], usage: int, ivec: byte[], plaintext: byte[], start: int, len: int): byte[];
              encryptRaw(baseKey: byte[], usage: int, seqNum: byte[], plaintext: byte[], start: int, len: int): byte[];
              encryptSeq(baseKey: byte[], usage: int, checksum: byte[], plaintext: byte[], start: int, len: int): byte[];
              getChecksumLength(): int;
              stringToKey(password: char[]): byte[];
              _CRYPTO: dk.ArcFourCrypto;
            }
            let ArcFourHmac: _ArcFourHmac$$static;
            interface _ArcFourHmac {
            }
            interface ArcFourHmac extends CombineTypes<[_ArcFourHmac, java.lang.Object]> {}
            interface _ArcFourHmacEType$$static extends ClassLike {
              new(): ArcFourHmacEType;
            }
            let ArcFourHmacEType: _ArcFourHmacEType$$static;
            interface _ArcFourHmacEType {
              blockSize(): int;
              checksumSize(): int;
              checksumType(): int;
              confounderSize(): int;
              decrypt(cipher: byte[], key: byte[], usage: int): byte[];
              decrypt(cipher: byte[], key: byte[], ivec: byte[], usage: int): byte[];
              decryptedData(data: byte[]): byte[];
              eType(): int;
              encrypt(data: byte[], key: byte[], usage: int): byte[];
              encrypt(data: byte[], key: byte[], ivec: byte[], usage: int): byte[];
              keySize(): int;
              keyType(): int;
              minimumPadSize(): int;
            }
            interface ArcFourHmacEType extends CombineTypes<[_ArcFourHmacEType, sun.security.krb5.internal.crypto.EType]> {}
            interface _CksumType$$static extends ClassLike {
              getInstance(cksumTypeConst: int): CksumType;
              isChecksumEqual(cksum1: byte[], cksum2: byte[]): boolean;
              _DEBUG: boolean;
              new(): CksumType;
            }
            let CksumType: _CksumType$$static;
            interface _CksumType {
              calculateChecksum(a0: byte[], a1: int, a2: byte[], a3: int): byte[];
              cksumSize(): int;
              cksumType(): int;
              confounderSize(): int;
              isKeyed(): boolean;
              keySize(): int;
              keyType(): int;
              verifyChecksum(a0: byte[], a1: int, a2: byte[], a3: byte[], a4: int): boolean;
            }
            interface CksumType extends CombineTypes<[_CksumType, java.lang.Object]> {}
            interface _Crc32CksumType$$static extends ClassLike {
              bytes2long(input: byte[]): long;
              int2quad(input: long): byte[];
              new(): Crc32CksumType;
            }
            let Crc32CksumType: _Crc32CksumType$$static;
            interface _Crc32CksumType {
              calculateChecksum(data: byte[], size: int, key: byte[], usage: int): byte[];
              cksumSize(): int;
              cksumType(): int;
              confounderSize(): int;
              isKeyed(): boolean;
              keySize(): int;
              keyType(): int;
              verifyChecksum(data: byte[], size: int, key: byte[], checksum: byte[], usage: int): boolean;
            }
            interface Crc32CksumType extends CombineTypes<[_Crc32CksumType, sun.security.krb5.internal.crypto.CksumType]> {}
            interface _Des$$static extends ClassLike {
              bad_key(key: long): boolean;
              bad_key(key: byte[]): boolean;
              cbc_encrypt(input: byte[], output: byte[], key: byte[], ivec: byte[], encrypt: boolean): void;
              char_to_key(passwdChars: char[]): long;
              des_cksum(ivec: byte[], msg: byte[], key: byte[]): byte[];
              long2octet(input: long): byte[];
              long2octet(input: long, a1: byte[]): void;
              long2octet(input: long, a1: byte[], output: int): void;
              octet2long(input: byte[]): long;
              octet2long(input: byte[], offset: int): long;
              _pad(data: byte[]): byte[];
              set_parity(key: byte[]): byte[];
              set_parity(key: long): long;
              string_to_key_bytes(passwdChars: char[]): byte[];
              _CHARSET: string;
              _bad_keys: long[];
              _good_parity: byte[];
              new(): Des;
            }
            let Des: _Des$$static;
            interface _Des {
            }
            interface Des extends CombineTypes<[_Des, java.lang.Object]> {}
            interface _Des3$$static extends ClassLike {
              calculateChecksum(baseKey: byte[], usage: int, input: byte[], start: int, len: int): byte[];
              decrypt(baseKey: byte[], usage: int, ivec: byte[], ciphertext: byte[], start: int, len: int): byte[];
              decryptRaw(baseKey: byte[], usage: int, ivec: byte[], ciphertext: byte[], start: int, len: int): byte[];
              encrypt(baseKey: byte[], usage: int, ivec: byte[], plaintext: byte[], start: int, len: int): byte[];
              encryptRaw(baseKey: byte[], usage: int, ivec: byte[], plaintext: byte[], start: int, len: int): byte[];
              getChecksumLength(): int;
              parityFix(value: byte[]): byte[];
              stringToKey(chars: char[]): byte[];
              _CRYPTO: dk.Des3DkCrypto;
            }
            let Des3: _Des3$$static;
            interface _Des3 {
            }
            interface Des3 extends CombineTypes<[_Des3, java.lang.Object]> {}
            interface _Des3CbcHmacSha1KdEType$$static extends ClassLike {
              new(): Des3CbcHmacSha1KdEType;
            }
            let Des3CbcHmacSha1KdEType: _Des3CbcHmacSha1KdEType$$static;
            interface _Des3CbcHmacSha1KdEType {
              blockSize(): int;
              checksumSize(): int;
              checksumType(): int;
              confounderSize(): int;
              decrypt(cipher: byte[], key: byte[], usage: int): byte[];
              decrypt(cipher: byte[], key: byte[], ivec: byte[], usage: int): byte[];
              decryptedData(data: byte[]): byte[];
              eType(): int;
              encrypt(data: byte[], key: byte[], usage: int): byte[];
              encrypt(data: byte[], key: byte[], ivec: byte[], usage: int): byte[];
              keySize(): int;
              keyType(): int;
              minimumPadSize(): int;
            }
            interface Des3CbcHmacSha1KdEType extends CombineTypes<[_Des3CbcHmacSha1KdEType, sun.security.krb5.internal.crypto.EType]> {}
            interface _DesCbcCrcEType$$static extends ClassLike {
              new(): DesCbcCrcEType;
            }
            let DesCbcCrcEType: _DesCbcCrcEType$$static;
            interface _DesCbcCrcEType {
              blockSize(): int;
              _calculateChecksum(data: byte[], size: int): byte[];
              checksumSize(): int;
              checksumType(): int;
              confounderSize(): int;
              decrypt(cipher: byte[], key: byte[], usage: int): byte[];
              decrypt(a0: byte[], a1: byte[], a2: byte[], a3: int): byte[];
              eType(): int;
              encrypt(data: byte[], key: byte[], usage: int): byte[];
              encrypt(a0: byte[], a1: byte[], a2: byte[], a3: int): byte[];
              keySize(): int;
              keyType(): int;
              minimumPadSize(): int;
            }
            interface DesCbcCrcEType extends CombineTypes<[_DesCbcCrcEType, sun.security.krb5.internal.crypto.DesCbcEType]> {}
            interface _DesCbcEType$$static extends ClassLike {
              _new(): DesCbcEType;
            }
            let DesCbcEType: _DesCbcEType$$static;
            interface _DesCbcEType {
              blockSize(): int;
              _calculateChecksum(a0: byte[], a1: int): byte[];
(a0: byte[], a1: int): byte[];
              _checksumField(data: byte[]): byte[];
              _copyChecksumField(data: byte[], cksum: byte[]): void;
              decrypt(cipher: byte[], key: byte[], usage: int): byte[];
              decrypt(cipher: byte[], key: byte[], ivec: byte[], usage: int): byte[];
              encrypt(data: byte[], key: byte[], usage: int): byte[];
              encrypt(data: byte[], key: byte[], ivec: byte[], usage: int): byte[];
              _generateChecksum(data: byte[]): byte[];
              _isChecksumEqual(cksum1: byte[], cksum2: byte[]): boolean;
              _isChecksumValid(data: byte[]): boolean;
              keySize(): int;
              keyType(): int;
              _resetChecksumField(data: byte[]): void;
            }
            interface DesCbcEType extends CombineTypes<[_DesCbcEType, sun.security.krb5.internal.crypto.EType]> {}
            interface _DesCbcMd5EType$$static extends ClassLike {
              new(): DesCbcMd5EType;
            }
            let DesCbcMd5EType: _DesCbcMd5EType$$static;
            interface _DesCbcMd5EType {
              blockSize(): int;
              _calculateChecksum(data: byte[], size: int): byte[];
              checksumSize(): int;
              checksumType(): int;
              confounderSize(): int;
              decrypt(a0: byte[], a1: byte[], a2: byte[], a3: int): byte[];
              decrypt(a0: byte[], a1: byte[], a2: int): byte[];
              eType(): int;
              encrypt(a0: byte[], a1: byte[], a2: byte[], a3: int): byte[];
              encrypt(a0: byte[], a1: byte[], a2: int): byte[];
              keySize(): int;
              keyType(): int;
              minimumPadSize(): int;
            }
            interface DesCbcMd5EType extends CombineTypes<[_DesCbcMd5EType, sun.security.krb5.internal.crypto.DesCbcEType]> {}
            interface _DesMacCksumType$$static extends ClassLike {
              new(): DesMacCksumType;
            }
            let DesMacCksumType: _DesMacCksumType$$static;
            interface _DesMacCksumType {
              calculateChecksum(data: byte[], size: int, key: byte[], usage: int): byte[];
              cksumSize(): int;
              cksumType(): int;
              confounderSize(): int;
              _decryptKeyedChecksum(enc_cksum: byte[], key: byte[]): byte[];
              isKeyed(): boolean;
              keySize(): int;
              keyType(): int;
              verifyChecksum(data: byte[], size: int, key: byte[], checksum: byte[], usage: int): boolean;
            }
            interface DesMacCksumType extends CombineTypes<[_DesMacCksumType, sun.security.krb5.internal.crypto.CksumType]> {}
            interface _DesMacKCksumType$$static extends ClassLike {
              new(): DesMacKCksumType;
            }
            let DesMacKCksumType: _DesMacKCksumType$$static;
            interface _DesMacKCksumType {
              calculateChecksum(data: byte[], size: int, key: byte[], usage: int): byte[];
              cksumSize(): int;
              cksumType(): int;
              confounderSize(): int;
              isKeyed(): boolean;
              keySize(): int;
              keyType(): int;
              verifyChecksum(data: byte[], size: int, key: byte[], checksum: byte[], usage: int): boolean;
            }
            interface DesMacKCksumType extends CombineTypes<[_DesMacKCksumType, sun.security.krb5.internal.crypto.CksumType]> {}
            interface _EType$$static extends ClassLike {
              getBuiltInDefaults(): int[];
              getDefaults(configName: string): int[];
              getDefaults(configName: string, keys: EncryptionKey[]): int[];
              getInstance(eTypeConst: int): EType;
              initStatic(): void;
              isNewer(eTypeConst: int): boolean;
              isSupported(eTypeConst: int, config: int[]): boolean;
              isSupported(eTypeConst: int): boolean;
              toString(type: int): string;
              _DEBUG: boolean;
              _defaultETypes: int[];
              _supportedETypes: int[];
              new(): EType;
            }
            let EType: _EType$$static;
            interface _EType {
              blockSize(): int;
              checksumSize(): int;
              checksumType(): int;
              confounderSize(): int;
              dataSize(data: byte[]): int;
              decrypt(a0: byte[], a1: byte[], a2: int): byte[];
              decrypt(a0: byte[], a1: byte[], a2: byte[], a3: int): byte[];
              decryptedData(data: byte[]): byte[];
              eType(): int;
              encrypt(a0: byte[], a1: byte[], a2: int): byte[];
              encrypt(a0: byte[], a1: byte[], a2: byte[], a3: int): byte[];
              keySize(): int;
              keyType(): int;
              minimumPadSize(): int;
              padSize(data: byte[]): int;
              startOfChecksum(): int;
              startOfData(): int;
              startOfPad(data: byte[]): int;
            }
            interface EType extends CombineTypes<[_EType, java.lang.Object]> {}
            interface _HmacMd5ArcFourCksumType$$static extends ClassLike {
              new(): HmacMd5ArcFourCksumType;
            }
            let HmacMd5ArcFourCksumType: _HmacMd5ArcFourCksumType$$static;
            interface _HmacMd5ArcFourCksumType {
              calculateChecksum(data: byte[], size: int, key: byte[], usage: int): byte[];
              cksumSize(): int;
              cksumType(): int;
              confounderSize(): int;
              isKeyed(): boolean;
              keySize(): int;
              keyType(): int;
              verifyChecksum(data: byte[], size: int, key: byte[], checksum: byte[], usage: int): boolean;
            }
            interface HmacMd5ArcFourCksumType extends CombineTypes<[_HmacMd5ArcFourCksumType, sun.security.krb5.internal.crypto.CksumType]> {}
            interface _HmacSha1Aes128CksumType$$static extends ClassLike {
              new(): HmacSha1Aes128CksumType;
            }
            let HmacSha1Aes128CksumType: _HmacSha1Aes128CksumType$$static;
            interface _HmacSha1Aes128CksumType {
              calculateChecksum(data: byte[], size: int, key: byte[], usage: int): byte[];
              cksumSize(): int;
              cksumType(): int;
              confounderSize(): int;
              isKeyed(): boolean;
              keySize(): int;
              keyType(): int;
              verifyChecksum(data: byte[], size: int, key: byte[], checksum: byte[], usage: int): boolean;
            }
            interface HmacSha1Aes128CksumType extends CombineTypes<[_HmacSha1Aes128CksumType, sun.security.krb5.internal.crypto.CksumType]> {}
            interface _HmacSha1Aes256CksumType$$static extends ClassLike {
              new(): HmacSha1Aes256CksumType;
            }
            let HmacSha1Aes256CksumType: _HmacSha1Aes256CksumType$$static;
            interface _HmacSha1Aes256CksumType {
              calculateChecksum(data: byte[], size: int, key: byte[], usage: int): byte[];
              cksumSize(): int;
              cksumType(): int;
              confounderSize(): int;
              isKeyed(): boolean;
              keySize(): int;
              keyType(): int;
              verifyChecksum(data: byte[], size: int, key: byte[], checksum: byte[], usage: int): boolean;
            }
            interface HmacSha1Aes256CksumType extends CombineTypes<[_HmacSha1Aes256CksumType, sun.security.krb5.internal.crypto.CksumType]> {}
            interface _HmacSha1Des3KdCksumType$$static extends ClassLike {
              new(): HmacSha1Des3KdCksumType;
            }
            let HmacSha1Des3KdCksumType: _HmacSha1Des3KdCksumType$$static;
            interface _HmacSha1Des3KdCksumType {
              calculateChecksum(data: byte[], size: int, key: byte[], usage: int): byte[];
              cksumSize(): int;
              cksumType(): int;
              confounderSize(): int;
              isKeyed(): boolean;
              keySize(): int;
              keyType(): int;
              verifyChecksum(data: byte[], size: int, key: byte[], checksum: byte[], usage: int): boolean;
            }
            interface HmacSha1Des3KdCksumType extends CombineTypes<[_HmacSha1Des3KdCksumType, sun.security.krb5.internal.crypto.CksumType]> {}
            interface _HmacSha2Aes128CksumType$$static extends ClassLike {
              new(): HmacSha2Aes128CksumType;
            }
            let HmacSha2Aes128CksumType: _HmacSha2Aes128CksumType$$static;
            interface _HmacSha2Aes128CksumType {
              calculateChecksum(data: byte[], size: int, key: byte[], usage: int): byte[];
              cksumSize(): int;
              cksumType(): int;
              confounderSize(): int;
              isKeyed(): boolean;
              keySize(): int;
              keyType(): int;
              verifyChecksum(data: byte[], size: int, key: byte[], checksum: byte[], usage: int): boolean;
            }
            interface HmacSha2Aes128CksumType extends CombineTypes<[_HmacSha2Aes128CksumType, sun.security.krb5.internal.crypto.CksumType]> {}
            interface _HmacSha2Aes256CksumType$$static extends ClassLike {
              new(): HmacSha2Aes256CksumType;
            }
            let HmacSha2Aes256CksumType: _HmacSha2Aes256CksumType$$static;
            interface _HmacSha2Aes256CksumType {
              calculateChecksum(data: byte[], size: int, key: byte[], usage: int): byte[];
              cksumSize(): int;
              cksumType(): int;
              confounderSize(): int;
              isKeyed(): boolean;
              keySize(): int;
              keyType(): int;
              verifyChecksum(data: byte[], size: int, key: byte[], checksum: byte[], usage: int): boolean;
            }
            interface HmacSha2Aes256CksumType extends CombineTypes<[_HmacSha2Aes256CksumType, sun.security.krb5.internal.crypto.CksumType]> {}
            interface _KeyUsage$$static extends ClassLike {
              isValid(usage: int): boolean;
              readonly KU_AD_KDC_ISSUED_CKSUM: int;
              readonly KU_AP_REQ_AUTHENTICATOR: int;
              readonly KU_AS_REQ: int;
              readonly KU_AUTHENTICATOR_CKSUM: int;
              readonly KU_ENC_AP_REP_PART: int;
              readonly KU_ENC_AS_REP_PART: int;
              readonly KU_ENC_KRB_CRED_PART: int;
              readonly KU_ENC_KRB_PRIV_PART: int;
              readonly KU_ENC_TGS_REP_PART_SESSKEY: int;
              readonly KU_ENC_TGS_REP_PART_SUBKEY: int;
              readonly KU_KRB_SAFE_CKSUM: int;
              readonly KU_PA_ENC_TS: int;
              readonly KU_PA_FOR_USER_ENC_CKSUM: int;
              readonly KU_PA_TGS_REQ_AUTHENTICATOR: int;
              readonly KU_PA_TGS_REQ_CKSUM: int;
              readonly KU_TGS_REQ_AUTH_DATA_SESSKEY: int;
              readonly KU_TGS_REQ_AUTH_DATA_SUBKEY: int;
              readonly KU_TICKET: int;
              readonly KU_UNKNOWN: int;
            }
            let KeyUsage: _KeyUsage$$static;
            interface _KeyUsage {
            }
            interface KeyUsage extends CombineTypes<[_KeyUsage, java.lang.Object]> {}
            interface _Nonce$$static extends ClassLike {
              value(): int;
              new(): Nonce;
            }
            let Nonce: _Nonce$$static;
            interface _Nonce {
            }
            interface Nonce extends CombineTypes<[_Nonce, java.lang.Object]> {}
            interface _NullEType$$static extends ClassLike {
              new(): NullEType;
            }
            let NullEType: _NullEType$$static;
            interface _NullEType {
              blockSize(): int;
              checksumSize(): int;
              checksumType(): int;
              confounderSize(): int;
              decrypt(cipher: byte[], key: byte[], usage: int): byte[];
              decrypt(cipher: byte[], key: byte[], ivec: byte[], usage: int): byte[];
              eType(): int;
              encrypt(data: byte[], key: byte[], usage: int): byte[];
              encrypt(data: byte[], key: byte[], ivec: byte[], usage: int): byte[];
              keySize(): int;
              keyType(): int;
              minimumPadSize(): int;
            }
            interface NullEType extends CombineTypes<[_NullEType, sun.security.krb5.internal.crypto.EType]> {}
            interface _RsaMd5CksumType$$static extends ClassLike {
              new(): RsaMd5CksumType;
            }
            let RsaMd5CksumType: _RsaMd5CksumType$$static;
            interface _RsaMd5CksumType {
              calculateChecksum(data: byte[], size: int, key: byte[], usage: int): byte[];
              cksumSize(): int;
              cksumType(): int;
              confounderSize(): int;
              isKeyed(): boolean;
              keySize(): int;
              keyType(): int;
              verifyChecksum(data: byte[], size: int, key: byte[], checksum: byte[], usage: int): boolean;
            }
            interface RsaMd5CksumType extends CombineTypes<[_RsaMd5CksumType, sun.security.krb5.internal.crypto.CksumType]> {}
            interface _RsaMd5DesCksumType$$static extends ClassLike {
              new(): RsaMd5DesCksumType;
            }
            let RsaMd5DesCksumType: _RsaMd5DesCksumType$$static;
            interface _RsaMd5DesCksumType {
              calculateChecksum(data: byte[], size: int, key: byte[], usage: int): byte[];
              _calculateRawChecksum(data: byte[], size: int): byte[];
              cksumSize(): int;
              cksumType(): int;
              confounderSize(): int;
              _decryptKeyedChecksum(enc_cksum: byte[], key: byte[]): byte[];
              isKeyed(): boolean;
              keySize(): int;
              keyType(): int;
              verifyChecksum(data: byte[], size: int, key: byte[], checksum: byte[], usage: int): boolean;
            }
            interface RsaMd5DesCksumType extends CombineTypes<[_RsaMd5DesCksumType, sun.security.krb5.internal.crypto.CksumType]> {}
            interface _crc32$$static extends ClassLike {
              byte2crc32(data: byte[]): int;
              byte2crc32sum(seed: int, data: byte[], size: int): int;
              byte2crc32sum(seed: int, data: byte[]): int;
              byte2crc32sum(data: byte[]): int;
              byte2crc32sum_bytes(data: byte[]): byte[];
              byte2crc32sum_bytes(data: byte[], size: int): byte[];
              int2crc32(b: int): int;
              int2quad(input: long): byte[];
              printcrc32Table(): void;
              _CRC32_LENGTH: int;
              _DEBUG: boolean;
              _crc32Table: int[];
              new(): crc32;
            }
            let crc32: _crc32$$static;
            interface _crc32 {
              clone(): any;
              _engineDigest(): byte[];
              _engineDigest(buf: byte[], offset: int, len: int): int;
              _engineGetDigestLength(): int;
              _engineReset(): void;
              _engineUpdate(b: byte): void;
              _engineUpdate(input: byte[], offset: int, len: int): void;
              init(): void;
              _processData(data: byte[], off: int, len: int): void;
              _seed: int;
            }
            interface crc32 extends CombineTypes<[_crc32, java.lang.Cloneable, java.security.MessageDigestSpi]> {}
          }
          module ktab {
            interface _KeyTab$$static extends ClassLike {
              create(): KeyTab;
              create(name: string): KeyTab;
              _getDefaultTabName(): string;
              getInstance(s: string): KeyTab;
              getInstance(file: java.io.File): KeyTab;
              getInstance(): KeyTab;
              _getInstance0(s: string): KeyTab;
              normalize(name: string): string;
              _DEBUG: boolean;
              _defaultTabName: string;
              _map: java.util.Map<string,KeyTab>;
            }
            let KeyTab: _KeyTab$$static;
            interface _KeyTab {
              addEntry(service: PrincipalName, psswd: char[], kvno: int, append: boolean): void;
              addEntry(service: PrincipalName, salt: string, psswd: char[], kvno: int, append: boolean): void;
              addEntry(service: PrincipalName, encKeys: EncryptionKey[], kvno: int, append: boolean): void;
              createVersion(file: java.io.File): void;
              deleteEntries(service: PrincipalName, etype: int, kvno: int): int;
              findServiceEntry(service: PrincipalName): boolean;
              getEntries(): KeyTabEntry[];
              getOneName(): PrincipalName;
              isMissing(): boolean;
              isValid(): boolean;
              _load(kis: KeyTabInputStream): void;
              readServiceKeys(service: PrincipalName): EncryptionKey[];
              save(): void;
              tabName(): string;
              _entries: java.util.Vector<KeyTabEntry>;
              _isMissing: boolean;
              _isValid: boolean;
              _kt_vno: int;
              _lastModified: long;
              _tabName: string;
            }
            interface KeyTab extends CombineTypes<[_KeyTab, java.lang.Object, sun.security.krb5.internal.ktab.KeyTabConstants]> {}
            interface _KeyTabConstants$$static extends ClassLike {
              readonly KRB5_KT_VNO: int;
              readonly KRB5_KT_VNO_1: int;
              readonly keySize: int;
              readonly keyTypeSize: int;
              readonly keyVersionSize: int;
              readonly principalComponentSize: int;
              readonly principalSize: int;
              readonly principalTypeSize: int;
              readonly realmSize: int;
              readonly timestampSize: int;
            }
            let KeyTabConstants: _KeyTabConstants$$static;
            interface _KeyTabConstants {
            }
            interface KeyTabConstants extends CombineTypes<[_KeyTabConstants, java.lang.Object]> {}
            interface _KeyTabEntry$$static extends ClassLike {
              new(new_service: PrincipalName, new_realm: Realm, new_time: KerberosTime, new_keyVersion: int, new_keyType: int, new_keyblock: byte[]): KeyTabEntry;
            }
            let KeyTabEntry: _KeyTabEntry$$static;
            interface _KeyTabEntry {
              entryLength(): int;
              getKey(): EncryptionKey;
              getKeyString(): string;
              getService(): PrincipalName;
              getTimeStamp(): KerberosTime;
              _DEBUG: boolean;
              _keyType: int;
              _keyVersion: int;
              _keyblock: byte[];
              _realm: Realm;
              _service: PrincipalName;
              _timestamp: KerberosTime;
            }
            interface KeyTabEntry extends CombineTypes<[_KeyTabEntry, java.lang.Object, sun.security.krb5.internal.ktab.KeyTabConstants]> {}
            interface _KeyTabInputStream$$static extends ClassLike {
              new(is: java.io.InputStream): KeyTabInputStream;
            }
            let KeyTabInputStream: _KeyTabInputStream$$static;
            interface _KeyTabInputStream {
              _readEntry(entryLen: int, ktVersion: int): KeyTabEntry;
              _readEntryLength(): int;
              _readKey(length: int): byte[];
              _readName(): string;
              _readTimeStamp(): KerberosTime;
              _DEBUG: boolean;
              _index: int;
            }
            interface KeyTabInputStream extends CombineTypes<[_KeyTabInputStream, sun.security.krb5.internal.util.KrbDataInputStream, sun.security.krb5.internal.ktab.KeyTabConstants]> {}
            interface _KeyTabOutputStream$$static extends ClassLike {
              new(os: java.io.OutputStream): KeyTabOutputStream;
            }
            let KeyTabOutputStream: _KeyTabOutputStream$$static;
            interface _KeyTabOutputStream {
              writeEntry(entry: KeyTabEntry): void;
              writeVersion(num: int): void;
              _entry: KeyTabEntry;
              _keyType: int;
              _keyValue: byte[];
              version: int;
            }
            interface KeyTabOutputStream extends CombineTypes<[_KeyTabOutputStream, sun.security.krb5.internal.util.KrbDataOutputStream, sun.security.krb5.internal.ktab.KeyTabConstants]> {}
          }
          module rcache {
            interface _AuthList$$static extends ClassLike {
              new(lifespan: int): AuthList;
            }
            let AuthList: _AuthList$$static;
            interface _AuthList {
              isEmpty(): boolean;
              put(t: AuthTimeWithHash, currentTime: KerberosTime): void;
              toString(): string;
              _entries: java.util.LinkedList<AuthTimeWithHash>;
              _lifespan: int;
              _oldestTime: int;
            }
            interface AuthList extends CombineTypes<[_AuthList, java.lang.Object]> {}
            interface _AuthTime$$static extends ClassLike {
              readFrom(chan: java.nio.channels.SeekableByteChannel): AuthTime;
              _readStringWithLength(chan: java.nio.channels.SeekableByteChannel): string;
              new(client: string, server: string, ctime: int, cusec: int): AuthTime;
            }
            let AuthTime: _AuthTime$$static;
            interface _AuthTime {
              encode(withHash: boolean): byte[];
              _encode0(cstring: string, sstring: string): byte[];
              toString(): string;
              _client: string;
              _ctime: int;
              _cusec: int;
              _server: string;
            }
            interface AuthTime extends CombineTypes<[_AuthTime, java.lang.Object]> {}
            interface _AuthTimeWithHash$$static extends ClassLike {
              realAlg(alg: string): string;
              readonly DEFAULT_HASH_ALG: string;
              new(client: string, server: string, ctime: int, cusec: int, hashAlg: string, hash: string): AuthTimeWithHash;
            }
            let AuthTimeWithHash: _AuthTimeWithHash$$static;
            interface _AuthTimeWithHash {
              compareTo(other: AuthTimeWithHash): int;
              compareTo(a0: any): int;
              encode(withHash: boolean): byte[];
              equals(o: any): boolean;
              hashCode(): int;
              isSameIgnoresHash(old: AuthTime): boolean;
              sameTimeDiffHash(old: AuthTimeWithHash): boolean;
              toString(): string;
              _hash: string;
              _hashAlg: string;
            }
            interface AuthTimeWithHash extends CombineTypes<[_AuthTimeWithHash, AuthTime, java.lang.Comparable<AuthTimeWithHash>]> {}
            interface _DflCache$$static extends ClassLike {
              _defaultFile(server: string): string;
              _defaultPath(): string;
              _getFileName(source: string, server: string): java.nio.file.Path;
              _EXCESSREPS: int;
              _KRB5_RV_VNO: int;
              _uid: long;
              new(source: string): DflCache;
            }
            let DflCache: _DflCache$$static;
            interface _DflCache {
              checkAndStore(currTime: KerberosTime, time: AuthTimeWithHash): void;
              _checkAndStore0(currTime: KerberosTime, time: AuthTimeWithHash): void;
              _source: string;
            }
            interface DflCache extends CombineTypes<[_DflCache, sun.security.krb5.internal.ReplayCache]> {}
            interface _DflCache$Storage$$static extends ClassLike {
              _create(p: java.nio.file.Path): void;
              _createNoClose(p: java.nio.file.Path): java.nio.channels.SeekableByteChannel;
              _expunge(p: java.nio.file.Path, currTime: KerberosTime): void;
              _makeMine(p: java.nio.file.Path): void;
              _readHeader(chan: java.nio.channels.SeekableByteChannel): int;
            }
            let DflCache$Storage: _DflCache$Storage$$static;
            interface _DflCache$Storage {
              _append(at: AuthTimeWithHash): void;
              close(): void;
              _loadAndCheck(p: java.nio.file.Path, time: AuthTimeWithHash, currTime: KerberosTime): int;
              _chan: java.nio.channels.SeekableByteChannel;
            }
            interface DflCache$Storage extends CombineTypes<[_DflCache$Storage, java.io.Closeable, java.lang.Object]> {}
            interface _MemoryCache$$static extends ClassLike {
              _DEBUG: boolean;
              _lifespan: int;
              new(): MemoryCache;
            }
            let MemoryCache: _MemoryCache$$static;
            interface _MemoryCache {
              checkAndStore(currTime: KerberosTime, time: AuthTimeWithHash): void;
              toString(): string;
              _content: java.util.Map<string,AuthList>;
            }
            interface MemoryCache extends CombineTypes<[_MemoryCache, sun.security.krb5.internal.ReplayCache]> {}
          }
          module tools {
            interface _Kinit$$static extends ClassLike {
              main(args: string[]): void;
              _setOptions(flag: int, option: int, opt: KDCOptions): void;
              _DEBUG: boolean;
            }
            let Kinit: _Kinit$$static;
            interface _Kinit {
              _acquire(): void;
              _renew(): void;
              _options: KinitOptions;
            }
            interface Kinit extends CombineTypes<[_Kinit, java.lang.Object]> {}
            interface _KinitOptions$$static extends ClassLike {
              new(): KinitOptions;
              new(args: string[]): KinitOptions;
            }
            let KinitOptions: _KinitOptions$$static;
            interface _KinitOptions {
              getAddressOption(): boolean;
              _getDefaultPrincipal(): PrincipalName;
              getKDCRealm(): string;
              getPrincipal(): PrincipalName;
              _getTime(s: int): KerberosTime;
              keytabFileName(): string;
              _printHelp(): void;
              setKDCRealm(r: string): void;
              useKeytabFile(): boolean;
              _DEBUG: boolean;
              action: int;
              cachename: string;
              forwardable: short;
              _includeAddresses: boolean;
              keytab: boolean;
              keytab_file: string;
              _ktabName: string;
              lifetime: KerberosTime;
              _password: char[];
              _principal: PrincipalName;
              proxiable: short;
              realm: string;
              renewable_lifetime: KerberosTime;
              target_service: string;
              _useKeytab: boolean;
            }
            interface KinitOptions extends CombineTypes<[_KinitOptions, java.lang.Object]> {}
            interface _Klist$$static extends ClassLike {
              main(args: string[]): void;
              _DEBUG: boolean;
              new(): Klist;
            }
            let Klist: _Klist$$static;
            interface _Klist {
              _displayCache(): void;
              _displayMessage(target: string): void;
              _displayTab(): void;
              _format(kt: KerberosTime): string;
              _printHelp(): void;
              _processArgs(args: string[]): void;
              _action: char;
              _name: string;
              _options: char[];
              _target: any;
            }
            interface Klist extends CombineTypes<[_Klist, java.lang.Object]> {}
            interface _Ktab$$static extends ClassLike {
              main(args: string[]): void;
              new(): Ktab;
            }
            let Ktab: _Ktab$$static;
            interface _Ktab {
              _addEntry(): void;
              _deleteEntry(): void;
              _error(errors: string[]): void;
              _error(...errors: string[]): void;
              _listKt(): void;
              _printHelp(): void;
              _processArgs(args: string[]): void;
              _action: char;
              _append: boolean;
              _etype: int;
              _fopt: boolean;
              _name: string;
              _password: char[];
              _principal: string;
              _salt: string;
              _showEType: boolean;
              _showTime: boolean;
              _table: internal.ktab.KeyTab;
              _vAdd: int;
              _vDel: int;
            }
            interface Ktab extends CombineTypes<[_Ktab, java.lang.Object]> {}
          }
          module util {
            interface _KerberosFlags$$static extends ClassLike {
              _BITS_PER_UNIT: int;
              new(length: int): KerberosFlags;
              new(length: int, a: byte[]): KerberosFlags;
              new(bools: boolean[]): KerberosFlags;
            }
            let KerberosFlags: _KerberosFlags$$static;
            interface _KerberosFlags {
              asn1Encode(): byte[];
              get(index: int): boolean;
              set(index: int, value: boolean): void;
              toBooleanArray(): boolean[];
              toString(): string;
              _bits: security.util.BitArray;
            }
            interface KerberosFlags extends CombineTypes<[_KerberosFlags, java.lang.Object]> {}
            interface _KerberosString$$static extends ClassLike {
              readonly MSNAME: boolean;
              new(s: string): KerberosString;
              new(der: security.util.DerValue): KerberosString;
            }
            let KerberosString: _KerberosString$$static;
            interface _KerberosString {
              toDerValue(): security.util.DerValue;
              toString(): string;
              _s: string;
            }
            interface KerberosString extends CombineTypes<[_KerberosString, java.lang.Object]> {}
            interface _KrbDataInputStream$$static extends ClassLike {
              new(is: java.io.InputStream): KrbDataInputStream;
            }
            let KrbDataInputStream: _KrbDataInputStream$$static;
            interface _KrbDataInputStream {
              read(num: int): int;
              readLength4(): int;
              readVersion(): int;
              setNativeByteOrder(): void;
              _bigEndian: boolean;
            }
            interface KrbDataInputStream extends CombineTypes<[_KrbDataInputStream, java.io.BufferedInputStream]> {}
            interface _KrbDataOutputStream$$static extends ClassLike {
              new(os: java.io.OutputStream): KrbDataOutputStream;
            }
            let KrbDataOutputStream: _KrbDataOutputStream$$static;
            interface _KrbDataOutputStream {
              write16(num: int): void;
              write32(num: int): void;
              write8(num: int): void;
            }
            interface KrbDataOutputStream extends CombineTypes<[_KrbDataOutputStream, java.io.BufferedOutputStream]> {}
          }
          interface _APOptions$$static extends ClassLike {
            parse(data: security.util.DerInputStream, explicitTag: byte, optional: boolean): APOptions;
            new(): APOptions;
            new(oneBit: int): APOptions;
            new(size: int, data: byte[]): APOptions;
            new(data: boolean[]): APOptions;
            new(encoding: security.util.DerValue): APOptions;
          }
          let APOptions: _APOptions$$static;
          interface _APOptions {
          }
          interface APOptions extends CombineTypes<[_APOptions, sun.security.krb5.internal.util.KerberosFlags]> {}
          interface _APRep$$static extends ClassLike {
            new(new_encPart: EncryptedData): APRep;
            new(data: byte[]): APRep;
            new(encoding: security.util.DerValue): APRep;
          }
          let APRep: _APRep$$static;
          interface _APRep {
            asn1Encode(): byte[];
            _init(encoding: security.util.DerValue): void;
            encPart: EncryptedData;
            msgType: int;
            pvno: int;
          }
          interface APRep extends CombineTypes<[_APRep, java.lang.Object]> {}
          interface _APReq$$static extends ClassLike {
            new(new_apOptions: APOptions, new_ticket: Ticket, new_authenticator: EncryptedData): APReq;
            new(data: byte[]): APReq;
            new(encoding: security.util.DerValue): APReq;
          }
          let APReq: _APReq$$static;
          interface _APReq {
            asn1Encode(): byte[];
            _init(encoding: security.util.DerValue): void;
            apOptions: APOptions;
            authenticator: EncryptedData;
            msgType: int;
            pvno: int;
            ticket: Ticket;
          }
          interface APReq extends CombineTypes<[_APReq, java.lang.Object]> {}
          interface _ASRep$$static extends ClassLike {
            new(new_pAData: PAData[], new_cname: PrincipalName, new_ticket: Ticket, new_encPart: EncryptedData): ASRep;
            new(data: byte[]): ASRep;
            new(encoding: security.util.DerValue): ASRep;
          }
          let ASRep: _ASRep$$static;
          interface _ASRep {
            _init(encoding: security.util.DerValue): void;
          }
          interface ASRep extends CombineTypes<[_ASRep, sun.security.krb5.internal.KDCRep]> {}
          interface _ASReq$$static extends ClassLike {
            new(new_pAData: PAData[], new_reqBody: KDCReqBody): ASReq;
            new(data: byte[]): ASReq;
            new(encoding: security.util.DerValue): ASReq;
          }
          let ASReq: _ASReq$$static;
          interface _ASReq {
            _init(encoding: security.util.DerValue): void;
          }
          interface ASReq extends CombineTypes<[_ASReq, sun.security.krb5.internal.KDCReq]> {}
          interface _Authenticator$$static extends ClassLike {
            new(new_cname: PrincipalName, new_cksum: Checksum, new_cusec: int, new_ctime: KerberosTime, new_subKey: EncryptionKey, new_seqNumber: int, new_authorizationData: AuthorizationData): Authenticator;
            new(data: byte[]): Authenticator;
            new(encoding: security.util.DerValue): Authenticator;
          }
          let Authenticator: _Authenticator$$static;
          interface _Authenticator {
            asn1Encode(): byte[];
            getChecksum(): Checksum;
            getSeqNumber(): int;
            getSubKey(): EncryptionKey;
            _init(encoding: security.util.DerValue): void;
            authenticator_vno: int;
            authorizationData: AuthorizationData;
            _cksum: Checksum;
            cname: PrincipalName;
            ctime: KerberosTime;
            cusec: int;
            _seqNumber: int;
            _subKey: EncryptionKey;
          }
          interface Authenticator extends CombineTypes<[_Authenticator, java.lang.Object]> {}
          interface _AuthorizationData$$static extends ClassLike {
            parse(data: security.util.DerInputStream, explicitTag: byte, optional: boolean): AuthorizationData;
            new(new_entries: AuthorizationDataEntry[]): AuthorizationData;
            new(new_entry: AuthorizationDataEntry): AuthorizationData;
            new(der: security.util.DerValue): AuthorizationData;
          }
          let AuthorizationData: _AuthorizationData$$static;
          interface _AuthorizationData {
            asn1Encode(): byte[];
            clone(): any;
            count(): int;
            item(i: int): AuthorizationDataEntry;
            toString(): string;
            writeAuth(cos: internal.ccache.CCacheOutputStream): void;
            _entry: AuthorizationDataEntry[];
          }
          interface AuthorizationData extends CombineTypes<[_AuthorizationData, java.lang.Cloneable, java.lang.Object]> {}
          interface _AuthorizationDataEntry$$static extends ClassLike {
            new(new_adType: int, new_adData: byte[]): AuthorizationDataEntry;
            new(encoding: security.util.DerValue): AuthorizationDataEntry;
          }
          let AuthorizationDataEntry: _AuthorizationDataEntry$$static;
          interface _AuthorizationDataEntry {
            asn1Encode(): byte[];
            clone(): any;
            toString(): string;
            writeEntry(cos: internal.ccache.CCacheOutputStream): void;
            adData: byte[];
            adType: int;
          }
          interface AuthorizationDataEntry extends CombineTypes<[_AuthorizationDataEntry, java.lang.Cloneable, java.lang.Object]> {}
          interface _CredentialsUtil$$static extends ClassLike {
            acquireS4U2proxyCreds(backend: string, userCreds: Credentials, client: PrincipalName, middleTGT: Credentials): Credentials;
            acquireS4U2selfCreds(user: PrincipalName, middleTGT: Credentials): Credentials;
            acquireServiceCreds(service: string, initCreds: Credentials): Credentials;
            _getTGTforRealm(localRealm: string, serviceRealm: string, localTGT: Credentials, okAsDelegate: boolean[]): Credentials;
            _handleS4U2ProxyReferral(asCreds: Credentials, credsInOut: Credentials[], sname: PrincipalName): string;
            _handleS4U2SelfReferral(pas: PAData[], user: PrincipalName, newCreds: Credentials): void;
            _serviceCreds(service: PrincipalName, initCreds: Credentials): Credentials;
            _serviceCreds(options: KDCOptions, asCreds: Credentials, cname: PrincipalName, sname: PrincipalName, user: PrincipalName, additionalCreds: Credentials, extraPAs: PAData[], s4u2Type: CredentialsUtil$S4U2Type): Credentials;
            _serviceCredsReferrals(options: KDCOptions, asCreds: Credentials, cname: PrincipalName, sname: PrincipalName, s4u2Type: CredentialsUtil$S4U2Type, user: PrincipalName, additionalCreds: Credentials, extraPAs: PAData[]): Credentials;
            _serviceCredsSingle(options: KDCOptions, asCreds: Credentials, cname: PrincipalName, clientAlias: PrincipalName, refSname: PrincipalName, sname: PrincipalName, s4u2Type: CredentialsUtil$S4U2Type, user: PrincipalName, additionalCreds: Credentials, extraPAs: PAData[]): Credentials;
            _DEBUG: boolean;
            new(): CredentialsUtil;
          }
          let CredentialsUtil: _CredentialsUtil$$static;
          interface _CredentialsUtil {
          }
          interface CredentialsUtil extends CombineTypes<[_CredentialsUtil, java.lang.Object]> {}
          interface _CredentialsUtil$S4U2Type$$static extends ClassLike {
            valueOf(name: string): CredentialsUtil$S4U2Type;
            values(): CredentialsUtil$S4U2Type[];
            readonly NONE: CredentialsUtil$S4U2Type;
            readonly PROXY: CredentialsUtil$S4U2Type;
            readonly SELF: CredentialsUtil$S4U2Type;
          }
          let CredentialsUtil$S4U2Type: _CredentialsUtil$S4U2Type$$static;
          interface _CredentialsUtil$S4U2Type {
          }
          interface CredentialsUtil$S4U2Type extends CombineTypes<[_CredentialsUtil$S4U2Type]> {}
          interface _ETypeInfo$$static extends ClassLike {
            _TAG_TYPE: byte;
            _TAG_VALUE: byte;
            new(etype: int, salt: string): ETypeInfo;
            new(encoding: security.util.DerValue): ETypeInfo;
          }
          let ETypeInfo: _ETypeInfo$$static;
          interface _ETypeInfo {
            asn1Encode(): byte[];
            clone(): any;
            getEType(): int;
            getSalt(): string;
            _etype: int;
            _salt: string;
          }
          interface ETypeInfo extends CombineTypes<[_ETypeInfo, java.lang.Object]> {}
          interface _ETypeInfo2$$static extends ClassLike {
            _TAG_TYPE: byte;
            _TAG_VALUE1: byte;
            _TAG_VALUE2: byte;
            new(etype: int, salt: string, s2kparams: byte[]): ETypeInfo2;
            new(encoding: security.util.DerValue): ETypeInfo2;
          }
          let ETypeInfo2: _ETypeInfo2$$static;
          interface _ETypeInfo2 {
            asn1Encode(): byte[];
            clone(): any;
            getEType(): int;
            getParams(): byte[];
            getSalt(): string;
            _etype: int;
            _s2kparams: byte[];
            _saltStr: string;
          }
          interface ETypeInfo2 extends CombineTypes<[_ETypeInfo2, java.lang.Object]> {}
          interface _EncAPRepPart$$static extends ClassLike {
            new(new_ctime: KerberosTime, new_cusec: int, new_subKey: EncryptionKey, new_seqNumber: int): EncAPRepPart;
            new(data: byte[]): EncAPRepPart;
            new(encoding: security.util.DerValue): EncAPRepPart;
          }
          let EncAPRepPart: _EncAPRepPart$$static;
          interface _EncAPRepPart {
            asn1Encode(): byte[];
            getSeqNumber(): int;
            getSubKey(): EncryptionKey;
            _init(encoding: security.util.DerValue): void;
            ctime: KerberosTime;
            cusec: int;
            _seqNumber: int;
            _subKey: EncryptionKey;
          }
          interface EncAPRepPart extends CombineTypes<[_EncAPRepPart, java.lang.Object]> {}
          interface _EncASRepPart$$static extends ClassLike {
            new(new_key: EncryptionKey, new_lastReq: LastReq, new_nonce: int, new_keyExpiration: KerberosTime, new_flags: TicketFlags, new_authtime: KerberosTime, new_starttime: KerberosTime, new_endtime: KerberosTime, new_renewTill: KerberosTime, new_sname: PrincipalName, new_caddr: HostAddresses, new_pAData: PAData[]): EncASRepPart;
            new(data: byte[]): EncASRepPart;
            new(encoding: security.util.DerValue): EncASRepPart;
          }
          let EncASRepPart: _EncASRepPart$$static;
          interface _EncASRepPart {
            asn1Encode(): byte[];
            _init(encoding: security.util.DerValue): void;
          }
          interface EncASRepPart extends CombineTypes<[_EncASRepPart, sun.security.krb5.internal.EncKDCRepPart]> {}
          interface _EncKDCRepPart$$static extends ClassLike {
            new(new_key: EncryptionKey, new_lastReq: LastReq, new_nonce: int, new_keyExpiration: KerberosTime, new_flags: TicketFlags, new_authtime: KerberosTime, new_starttime: KerberosTime, new_endtime: KerberosTime, new_renewTill: KerberosTime, new_sname: PrincipalName, new_caddr: HostAddresses, new_pAData: PAData[], new_msgType: int): EncKDCRepPart;
            new(): EncKDCRepPart;
            new(data: byte[], rep_type: int): EncKDCRepPart;
            new(encoding: security.util.DerValue, rep_type: int): EncKDCRepPart;
          }
          let EncKDCRepPart: _EncKDCRepPart$$static;
          interface _EncKDCRepPart {
            asn1Encode(rep_type: int): byte[];
            _init(encoding: security.util.DerValue, rep_type: int): void;
            authtime: KerberosTime;
            caddr: HostAddresses;
            endtime: KerberosTime;
            flags: TicketFlags;
            key: EncryptionKey;
            keyExpiration: KerberosTime;
            lastReq: LastReq;
            msgType: int;
            nonce: int;
            pAData: PAData[];
            renewTill: KerberosTime;
            sname: PrincipalName;
            starttime: KerberosTime;
          }
          interface EncKDCRepPart extends CombineTypes<[_EncKDCRepPart, java.lang.Object]> {}
          interface _EncKrbCredPart$$static extends ClassLike {
            new(new_ticketInfo: KrbCredInfo[], new_timeStamp: KerberosTime, new_usec: int, new_nonce: int, new_sAddress: HostAddress, new_rAddress: HostAddresses): EncKrbCredPart;
            new(data: byte[]): EncKrbCredPart;
            new(encoding: security.util.DerValue): EncKrbCredPart;
          }
          let EncKrbCredPart: _EncKrbCredPart$$static;
          interface _EncKrbCredPart {
            asn1Encode(): byte[];
            _init(encoding: security.util.DerValue): void;
            _nonce: int;
            _rAddress: HostAddresses;
            _sAddress: HostAddress;
            ticketInfo: KrbCredInfo[];
            timeStamp: KerberosTime;
            _usec: int;
          }
          interface EncKrbCredPart extends CombineTypes<[_EncKrbCredPart, java.lang.Object]> {}
          interface _EncTGSRepPart$$static extends ClassLike {
            new(new_key: EncryptionKey, new_lastReq: LastReq, new_nonce: int, new_keyExpiration: KerberosTime, new_flags: TicketFlags, new_authtime: KerberosTime, new_starttime: KerberosTime, new_endtime: KerberosTime, new_renewTill: KerberosTime, new_sname: PrincipalName, new_caddr: HostAddresses, new_pAData: PAData[]): EncTGSRepPart;
            new(data: byte[]): EncTGSRepPart;
            new(encoding: security.util.DerValue): EncTGSRepPart;
          }
          let EncTGSRepPart: _EncTGSRepPart$$static;
          interface _EncTGSRepPart {
            asn1Encode(): byte[];
            _init(encoding: security.util.DerValue): void;
          }
          interface EncTGSRepPart extends CombineTypes<[_EncTGSRepPart, sun.security.krb5.internal.EncKDCRepPart]> {}
          interface _EncTicketPart$$static extends ClassLike {
            _getHexBytes(bytes: byte[], len: int): string;
            new(new_flags: TicketFlags, new_key: EncryptionKey, new_cname: PrincipalName, new_transited: TransitedEncoding, new_authtime: KerberosTime, new_starttime: KerberosTime, new_endtime: KerberosTime, new_renewTill: KerberosTime, new_caddr: HostAddresses, new_authorizationData: AuthorizationData): EncTicketPart;
            new(data: byte[]): EncTicketPart;
            new(encoding: security.util.DerValue): EncTicketPart;
          }
          let EncTicketPart: _EncTicketPart$$static;
          interface _EncTicketPart {
            asn1Encode(): byte[];
            _init(encoding: security.util.DerValue): void;
            authorizationData: AuthorizationData;
            authtime: KerberosTime;
            caddr: HostAddresses;
            cname: PrincipalName;
            endtime: KerberosTime;
            flags: TicketFlags;
            key: EncryptionKey;
            renewTill: KerberosTime;
            starttime: KerberosTime;
            transited: TransitedEncoding;
          }
          interface EncTicketPart extends CombineTypes<[_EncTicketPart, java.lang.Object]> {}
          interface _HostAddress$$static extends ClassLike {
            _getLocalInetAddress(): java.net.InetAddress;
            parse(data: security.util.DerInputStream, explicitTag: byte, optional: boolean): HostAddress;
            _DEBUG: boolean;
            _localInetAddress: java.net.InetAddress;
            new(): HostAddress;
            new(new_addrType: int, new_address: byte[]): HostAddress;
            new(inetAddress: java.net.InetAddress): HostAddress;
            new(encoding: security.util.DerValue): HostAddress;
          }
          let HostAddress: _HostAddress$$static;
          interface _HostAddress {
            asn1Encode(): byte[];
            clone(): any;
            equals(obj: any): boolean;
            _getAddrType(inetAddress: java.net.InetAddress): int;
            getInetAddress(): java.net.InetAddress;
            hashCode(): int;
            toString(): string;
            _addrType: int;
            _address: byte[];
            _hashCode: int;
          }
          interface HostAddress extends CombineTypes<[_HostAddress, java.lang.Cloneable, java.lang.Object]> {}
          interface _HostAddresses$$static extends ClassLike {
            getLocalAddresses(): HostAddresses;
            parse(data: security.util.DerInputStream, explicitTag: byte, optional: boolean): HostAddresses;
            _DEBUG: boolean;
            new(new_addresses: HostAddress[]): HostAddresses;
            new(): HostAddresses;
            new(serverPrincipal: PrincipalName): HostAddresses;
            new(encoding: security.util.DerValue): HostAddresses;
            new(inetAddresses: java.net.InetAddress[]): HostAddresses;
          }
          let HostAddresses: _HostAddresses$$static;
          interface _HostAddresses {
            asn1Encode(): byte[];
            clone(): any;
            equals(obj: any): boolean;
            getInetAddresses(): java.net.InetAddress[];
            hashCode(): int;
            inList(addr: HostAddress): boolean;
            toString(): string;
            writeAddrs(cos: internal.ccache.CCacheOutputStream): void;
            _addresses: HostAddress[];
            _hashCode: int;
          }
          interface HostAddresses extends CombineTypes<[_HostAddresses, java.lang.Cloneable, java.lang.Object]> {}
          interface _KDCOptions$$static extends ClassLike {
            parse(data: security.util.DerInputStream, explicitTag: byte, optional: boolean): KDCOptions;
            with(flags: int[]): KDCOptions;
            with(...flags: int[]): KDCOptions;
            readonly ALLOW_POSTDATE: int;
            readonly CANONICALIZE: int;
            readonly CNAME_IN_ADDL_TKT: int;
            readonly ENC_TKT_IN_SKEY: int;
            readonly FORWARDABLE: int;
            readonly FORWARDED: int;
            _KDC_OPT_FORWARDABLE: int;
            _KDC_OPT_PROXIABLE: int;
            _KDC_OPT_RENEWABLE_OK: int;
            readonly POSTDATED: int;
            readonly PROXIABLE: int;
            readonly PROXY: int;
            readonly RENEW: int;
            readonly RENEWABLE: int;
            readonly RENEWABLE_OK: int;
            readonly RESERVED: int;
            readonly UNUSED10: int;
            readonly UNUSED11: int;
            readonly UNUSED7: int;
            readonly UNUSED9: int;
            readonly VALIDATE: int;
            _names: string[];
            new(): KDCOptions;
            new(size: int, data: byte[]): KDCOptions;
            new(data: boolean[]): KDCOptions;
            new(encoding: security.util.DerValue): KDCOptions;
            new(options: byte[]): KDCOptions;
          }
          let KDCOptions: _KDCOptions$$static;
          interface _KDCOptions {
            get(option: int): boolean;
            set(option: int, value: boolean): void;
            _setDefault(): void;
            toString(): string;
            _DEBUG: boolean;
          }
          interface KDCOptions extends CombineTypes<[_KDCOptions, sun.security.krb5.internal.util.KerberosFlags]> {}
          interface _KDCRep$$static extends ClassLike {
            new(new_pAData: PAData[], new_cname: PrincipalName, new_ticket: Ticket, new_encPart: EncryptedData, req_type: int): KDCRep;
            new(): KDCRep;
            new(data: byte[], req_type: int): KDCRep;
            new(encoding: security.util.DerValue, req_type: int): KDCRep;
          }
          let KDCRep: _KDCRep$$static;
          interface _KDCRep {
            asn1Encode(): byte[];
            _init(encoding: security.util.DerValue, req_type: int): void;
            _DEBUG: boolean;
            cname: PrincipalName;
            encKDCRepPart: EncKDCRepPart;
            encPart: EncryptedData;
            _msgType: int;
            pAData: PAData[];
            _pvno: int;
            ticket: Ticket;
          }
          interface KDCRep extends CombineTypes<[_KDCRep, java.lang.Object]> {}
          interface _KDCReq$$static extends ClassLike {
            new(new_pAData: PAData[], new_reqBody: KDCReqBody, req_type: int): KDCReq;
            new(): KDCReq;
            new(data: byte[], req_type: int): KDCReq;
            new(der: security.util.DerValue, req_type: int): KDCReq;
          }
          let KDCReq: _KDCReq$$static;
          interface _KDCReq {
            asn1Encode(): byte[];
            _init(encoding: security.util.DerValue, req_type: int): void;
            _msgType: int;
            pAData: PAData[];
            _pvno: int;
            reqBody: KDCReqBody;
          }
          interface KDCReq extends CombineTypes<[_KDCReq, java.lang.Object]> {}
          interface _KDCReqBody$$static extends ClassLike {
            new(new_kdcOptions: KDCOptions, new_cname: PrincipalName, new_sname: PrincipalName, new_from: KerberosTime, new_till: KerberosTime, new_rtime: KerberosTime, new_nonce: int, new_eType: int[], new_addresses: HostAddresses, new_encAuthorizationData: EncryptedData, new_additionalTickets: Ticket[]): KDCReqBody;
            new(encoding: security.util.DerValue, msgType: int): KDCReqBody;
          }
          let KDCReqBody: _KDCReqBody$$static;
          interface _KDCReqBody {
            asn1Encode(msgType: int): byte[];
            getNonce(): int;
            _additionalTickets: Ticket[];
            addresses: HostAddresses;
            cname: PrincipalName;
            _eType: int[];
            _encAuthorizationData: EncryptedData;
            from: KerberosTime;
            kdcOptions: KDCOptions;
            _nonce: int;
            rtime: KerberosTime;
            sname: PrincipalName;
            till: KerberosTime;
          }
          interface KDCReqBody extends CombineTypes<[_KDCReqBody, java.lang.Object]> {}
          interface _KRBCred$$static extends ClassLike {
            new(new_tickets: Ticket[], new_encPart: EncryptedData): KRBCred;
            new(data: byte[]): KRBCred;
            new(encoding: security.util.DerValue): KRBCred;
          }
          let KRBCred: _KRBCred$$static;
          interface _KRBCred {
            asn1Encode(): byte[];
            _init(encoding: security.util.DerValue): void;
            encPart: EncryptedData;
            _msgType: int;
            _pvno: int;
            tickets: Ticket[];
          }
          interface KRBCred extends CombineTypes<[_KRBCred, java.lang.Object]> {}
          interface _KRBError$$static extends ClassLike {
            _isEqual(a: any, b: any): boolean;
            _DEBUG: boolean;
            _serialVersionUID: long;
            new(new_apOptions: APOptions, new_cTime: KerberosTime, new_cuSec: int, new_sTime: KerberosTime, new_suSec: int, new_errorCode: int, new_cname: PrincipalName, new_sname: PrincipalName, new_eText: string, new_eData: byte[]): KRBError;
            new(new_apOptions: APOptions, new_cTime: KerberosTime, new_cuSec: int, new_sTime: KerberosTime, new_suSec: int, new_errorCode: int, new_cname: PrincipalName, new_sname: PrincipalName, new_eText: string, new_eData: byte[], new_eCksum: Checksum): KRBError;
            new(data: byte[]): KRBError;
            new(encoding: security.util.DerValue): KRBError;
          }
          let KRBError: _KRBError$$static;
          interface _KRBError {
            asn1Encode(): byte[];
            equals(obj: any): boolean;
            getClientMicroSeconds(): int;
            getClientRealm(): Realm;
            getClientTime(): KerberosTime;
            getErrorCode(): int;
            getErrorString(): string;
            getPA(): PAData[];
            getServerMicroSeconds(): int;
            getServerTime(): KerberosTime;
            hashCode(): int;
            _init(encoding: security.util.DerValue): void;
            _parseEData(data: byte[]): void;
            _parsePAData(data: byte[]): void;
            _readObject(is: java.io.ObjectInputStream): void;
            _showDebug(): void;
            _writeObject(os: java.io.ObjectOutputStream): void;
            _cTime: KerberosTime;
            _cname: PrincipalName;
            _crealm: Realm;
            _cuSec: int;
            _eCksum: Checksum;
            _eData: byte[];
            _eText: string;
            _errorCode: int;
            _msgType: int;
            _pa: PAData[];
            _pvno: int;
            _sTime: KerberosTime;
            _sname: PrincipalName;
            _suSec: int;
          }
          interface KRBError extends CombineTypes<[_KRBError, java.lang.Object, java.io.Serializable]> {}
          interface _KdcErrException$$static extends ClassLike {
            _serialVersionUID: long;
            new(i: int): KdcErrException;
            new(i: int, s: string): KdcErrException;
          }
          let KdcErrException: _KdcErrException$$static;
          interface _KdcErrException {
          }
          interface KdcErrException extends CombineTypes<[_KdcErrException, sun.security.krb5.KrbException]> {}
          interface _KerberosTime$$static extends ClassLike {
            getDefaultSkew(): int;
            now(): KerberosTime;
            parse(data: security.util.DerInputStream, explicitTag: byte, optional: boolean): KerberosTime;
            _toKerberosTime(time: string): long;
            _DEBUG: boolean;
            _initMicro: long;
            _initMilli: long;
            new(time: long): KerberosTime;
            new(time: string): KerberosTime;
            new(time: java.util.Date): KerberosTime;
            new(instant: java.time.Instant): KerberosTime;
          }
          let KerberosTime: _KerberosTime$$static;
          interface _KerberosTime {
            asn1Encode(): byte[];
            equals(obj: any): boolean;
            getMicroSeconds(): int;
            getSeconds(): int;
            getTime(): long;
            greaterThan(time: KerberosTime): boolean;
            greaterThanWRTClockSkew(time: KerberosTime, clockSkew: int): boolean;
            greaterThanWRTClockSkew(time: KerberosTime): boolean;
            hashCode(): int;
            _inClockSkew(clockSkew: int): boolean;
            inClockSkew(): boolean;
            isZero(): boolean;
            toDate(): java.util.Date;
            toGeneralizedTimeString(): string;
            toString(): string;
            withMicroSeconds(usec: int): KerberosTime;
            _kerberosTime: long;
            _microSeconds: int;
          }
          interface KerberosTime extends CombineTypes<[_KerberosTime, java.lang.Object]> {}
          interface _Krb5$$static extends ClassLike {
            getErrorMessage(i: int): string;
            readonly ADDRTYPE_APPLETALK: int;
            readonly ADDRTYPE_ATM: int;
            readonly ADDRTYPE_BAN: int;
            readonly ADDRTYPE_CCITT: int;
            readonly ADDRTYPE_CHAOS: int;
            readonly ADDRTYPE_DATAKIT: int;
            readonly ADDRTYPE_DECNET: int;
            readonly ADDRTYPE_DLI: int;
            readonly ADDRTYPE_ECMA: int;
            readonly ADDRTYPE_FIREFOX: int;
            readonly ADDRTYPE_HYLINK: int;
            readonly ADDRTYPE_IMPLINK: int;
            readonly ADDRTYPE_INET: int;
            readonly ADDRTYPE_INET6: int;
            readonly ADDRTYPE_IPX: int;
            readonly ADDRTYPE_ISO: int;
            readonly ADDRTYPE_LAT: int;
            readonly ADDRTYPE_NETBIOS: int;
            readonly ADDRTYPE_PUP: int;
            readonly ADDRTYPE_SNA: int;
            readonly ADDRTYPE_UNIX: int;
            readonly ADDRTYPE_VOICEVIEW: int;
            readonly ADDRTYPE_XNS: int;
            readonly ADDR_LEN_APPLETALK: int;
            readonly ADDR_LEN_CHAOS: int;
            readonly ADDR_LEN_DECNET: int;
            readonly ADDR_LEN_INET: int;
            readonly ADDR_LEN_OSI: int;
            readonly ADDR_LEN_XNS: int;
            readonly API_INVALID_ARG: int;
            readonly AP_EMPTY_ADDRESSES_ALLOWED: boolean;
            readonly AP_OPTS_MAX: int;
            readonly AP_OPTS_MUTUAL_REQUIRED: int;
            readonly AP_OPTS_RESERVED: int;
            readonly AP_OPTS_USE_SESSION_KEY: int;
            readonly ASN1_BAD_CLASS: int;
            readonly ASN1_BAD_FORMAT: int;
            readonly ASN1_BAD_ID: int;
            readonly ASN1_BAD_LENGTH: int;
            readonly ASN1_BAD_TAG: int;
            readonly ASN1_BAD_TIMEFORMAT: int;
            readonly ASN1_BAD_TYPE: int;
            readonly ASN1_CANNOT_ENCODE: int;
            readonly ASN1_MISPLACED_FIELD: int;
            readonly ASN1_MISSING_FIELD: int;
            readonly ASN1_OVERFLOW: int;
            readonly ASN1_OVERRUN: int;
            readonly ASN1_PARSE_ERROR: int;
            readonly ASN1_TYPE_MISMATCH: int;
            readonly ASN1_UNSUPPORTED_TYPE: int;
            readonly ATT_CHALLENGE_RESPONSE: int;
            readonly AUTHNETICATOR_VNO: int;
            readonly BITSTRING_BAD_LENGTH: int;
            readonly BITSTRING_INDEX_OUT_OF_BOUNDS: int;
            readonly BITSTRING_SIZE_INVALID: int;
            readonly DEBUG: boolean;
            readonly DEFAULT_ALLOWABLE_CLOCKSKEW: int;
            readonly DEFAULT_FORWARDABLE_ALLOWED: boolean;
            readonly DEFAULT_MAXIMUM_RENEWABLE_LIFETIME: int;
            readonly DEFAULT_MAXIMUM_TICKET_LIFETIME: int;
            readonly DEFAULT_MINIMUM_LIFETIME: int;
            readonly DEFAULT_POSTDATE_ALLOWED: boolean;
            readonly DEFAULT_PROXIABLE_ALLOWED: boolean;
            readonly DEFAULT_RENEWABLE_ALLOWED: boolean;
            readonly DOMAIN_X500_COMPRESS: int;
            readonly KDC_DEFAULT_UDP_PREF_LIMIT: int;
            readonly KDC_ERR_BADOPTION: int;
            readonly KDC_ERR_BAD_PVNO: int;
            readonly KDC_ERR_CANNOT_POSTDATE: int;
            readonly KDC_ERR_CLIENT_NOTYET: int;
            readonly KDC_ERR_CLIENT_REVOKED: int;
            readonly KDC_ERR_C_OLD_MAST_KVNO: int;
            readonly KDC_ERR_C_PRINCIPAL_UNKNOWN: int;
            readonly KDC_ERR_ETYPE_NOSUPP: int;
            readonly KDC_ERR_KEY_EXPIRED: int;
            readonly KDC_ERR_NAME_EXP: int;
            readonly KDC_ERR_NEVER_VALID: int;
            readonly KDC_ERR_NONE: int;
            readonly KDC_ERR_NULL_KEY: int;
            readonly KDC_ERR_PADATA_TYPE_NOSUPP: int;
            readonly KDC_ERR_POLICY: int;
            readonly KDC_ERR_PREAUTH_FAILED: int;
            readonly KDC_ERR_PREAUTH_REQUIRED: int;
            readonly KDC_ERR_PRINCIPAL_NOT_UNIQUE: int;
            readonly KDC_ERR_SERVICE_EXP: int;
            readonly KDC_ERR_SERVICE_NOTYET: int;
            readonly KDC_ERR_SERVICE_REVOKED: int;
            readonly KDC_ERR_SUMTYPE_NOSUPP: int;
            readonly KDC_ERR_SVC_UNAVAILABLE: int;
            readonly KDC_ERR_S_OLD_MAST_KVNO: int;
            readonly KDC_ERR_S_PRINCIPAL_UNKNOWN: int;
            readonly KDC_ERR_TGT_REVOKED: int;
            readonly KDC_ERR_TRTYPE_NOSUPP: int;
            readonly KDC_HARD_UDP_LIMIT: int;
            readonly KDC_INET_DEFAULT_PORT: int;
            readonly KDC_OPTS_MAX: int;
            readonly KDC_RETRY_LIMIT: int;
            readonly KEYTYPE_AES: int;
            readonly KEYTYPE_ARCFOUR_HMAC: int;
            readonly KEYTYPE_DES: int;
            readonly KEYTYPE_DES3: int;
            readonly KEYTYPE_NULL: int;
            readonly KRB_AP_ERR_BADADDR: int;
            readonly KRB_AP_ERR_BADDIRECTION: int;
            readonly KRB_AP_ERR_BADKEYVER: int;
            readonly KRB_AP_ERR_BADMATCH: int;
            readonly KRB_AP_ERR_BADORDER: int;
            readonly KRB_AP_ERR_BADSEQ: int;
            readonly KRB_AP_ERR_BADVERSION: int;
            readonly KRB_AP_ERR_BAD_INTEGRITY: int;
            readonly KRB_AP_ERR_GEN_CRED: int;
            readonly KRB_AP_ERR_INAPP_CKSUM: int;
            readonly KRB_AP_ERR_METHOD: int;
            readonly KRB_AP_ERR_MODIFIED: int;
            readonly KRB_AP_ERR_MSG_TYPE: int;
            readonly KRB_AP_ERR_MUT_FAIL: int;
            readonly KRB_AP_ERR_NOKEY: int;
            readonly KRB_AP_ERR_NOREALM: int;
            readonly KRB_AP_ERR_NOT_US: int;
            readonly KRB_AP_ERR_REPEAT: int;
            readonly KRB_AP_ERR_REQ_OPTIONS: int;
            readonly KRB_AP_ERR_SKEW: int;
            readonly KRB_AP_ERR_TKT_EXPIRED: int;
            readonly KRB_AP_ERR_TKT_NYV: int;
            readonly KRB_AP_REP: int;
            readonly KRB_AP_REQ: int;
            readonly KRB_AS_REP: int;
            readonly KRB_AS_REQ: int;
            readonly KRB_AUTHENTICATOR: int;
            readonly KRB_CRED: int;
            readonly KRB_CRYPTO_NOT_SUPPORT: int;
            readonly KRB_ENC_AP_REP_PART: int;
            readonly KRB_ENC_AS_REP_PART: int;
            readonly KRB_ENC_KRB_CRED_PART: int;
            readonly KRB_ENC_KRB_PRIV_PART: int;
            readonly KRB_ENC_TGS_REP_PART: int;
            readonly KRB_ENC_TKT_PART: int;
            readonly KRB_ERROR: int;
            readonly KRB_ERR_FIELD_TOOLONG: int;
            readonly KRB_ERR_GENERIC: int;
            readonly KRB_ERR_RESPONSE_TOO_BIG: int;
            readonly KRB_ERR_WRONG_REALM: int;
            readonly KRB_FLAGS_MAX: int;
            readonly KRB_PRIV: int;
            readonly KRB_SAFE: int;
            readonly KRB_TGS_REP: int;
            readonly KRB_TGS_REQ: int;
            readonly KRB_TKT: int;
            readonly LRTYPE_NONE: int;
            readonly LRTYPE_TIME_OF_INITIAL_REQ: int;
            readonly LRTYPE_TIME_OF_INITIAL_TGT: int;
            readonly LRTYPE_TIME_OF_LAST_RENEWAL: int;
            readonly LRTYPE_TIME_OF_LAST_REQ: int;
            readonly LRTYPE_TIME_OF_NEWEST_TGT: int;
            readonly OSF_DCE: int;
            readonly PA_ENC_TIMESTAMP: int;
            readonly PA_ETYPE_INFO: int;
            readonly PA_ETYPE_INFO2: int;
            readonly PA_FOR_USER: int;
            readonly PA_PAC_OPTIONS: int;
            readonly PA_PW_SALT: int;
            readonly PA_REQ_ENC_PA_REP: int;
            readonly PA_TGS_REQ: int;
            readonly PVNO: int;
            readonly REALM_ILLCHAR: int;
            readonly REALM_NULL: int;
            readonly SESAME: int;
            readonly TICKET_VNO: int;
            readonly TKT_OPTS_DELEGATE: int;
            readonly TKT_OPTS_ENC_PA_REP: int;
            readonly TKT_OPTS_FORWARDABLE: int;
            readonly TKT_OPTS_FORWARDED: int;
            readonly TKT_OPTS_HW_AUTHENT: int;
            readonly TKT_OPTS_INITIAL: int;
            readonly TKT_OPTS_INVALID: int;
            readonly TKT_OPTS_MAX: int;
            readonly TKT_OPTS_MAY_POSTDATE: int;
            readonly TKT_OPTS_POSTDATED: int;
            readonly TKT_OPTS_PRE_AUTHENT: int;
            readonly TKT_OPTS_PROXIABLE: int;
            readonly TKT_OPTS_PROXY: int;
            readonly TKT_OPTS_RENEWABLE: int;
            readonly TKT_OPTS_RESERVED: int;
            _errMsgList: java.util.Hashtable<int,string>;
            new(): Krb5;
          }
          let Krb5: _Krb5$$static;
          interface _Krb5 {
          }
          interface Krb5 extends CombineTypes<[_Krb5, java.lang.Object]> {}
          interface _KrbApErrException$$static extends ClassLike {
            _serialVersionUID: long;
            new(i: int): KrbApErrException;
            new(i: int, s: string): KrbApErrException;
          }
          let KrbApErrException: _KrbApErrException$$static;
          interface _KrbApErrException {
          }
          interface KrbApErrException extends CombineTypes<[_KrbApErrException, sun.security.krb5.KrbException]> {}
          interface _KrbCredInfo$$static extends ClassLike {
            new(new_key: EncryptionKey, new_pname: PrincipalName, new_flags: TicketFlags, new_authtime: KerberosTime, new_starttime: KerberosTime, new_endtime: KerberosTime, new_renewTill: KerberosTime, new_sname: PrincipalName, new_caddr: HostAddresses): KrbCredInfo;
            new(encoding: security.util.DerValue): KrbCredInfo;
          }
          let KrbCredInfo: _KrbCredInfo$$static;
          interface _KrbCredInfo {
            asn1Encode(): byte[];
            clone(): any;
            authtime: KerberosTime;
            caddr: HostAddresses;
            endtime: KerberosTime;
            flags: TicketFlags;
            key: EncryptionKey;
            pname: PrincipalName;
            renewTill: KerberosTime;
            sname: PrincipalName;
            starttime: KerberosTime;
          }
          interface KrbCredInfo extends CombineTypes<[_KrbCredInfo, java.lang.Object]> {}
          interface _KrbErrException$$static extends ClassLike {
            _serialVersionUID: long;
            new(i: int): KrbErrException;
            new(i: int, s: string): KrbErrException;
          }
          let KrbErrException: _KrbErrException$$static;
          interface _KrbErrException {
          }
          interface KrbErrException extends CombineTypes<[_KrbErrException, sun.security.krb5.KrbException]> {}
          interface _LastReq$$static extends ClassLike {
            parse(data: security.util.DerInputStream, explicitTag: byte, optional: boolean): LastReq;
            new(entries: LastReqEntry[]): LastReq;
            new(encoding: security.util.DerValue): LastReq;
          }
          let LastReq: _LastReq$$static;
          interface _LastReq {
            asn1Encode(): byte[];
            _entry: LastReqEntry[];
          }
          interface LastReq extends CombineTypes<[_LastReq, java.lang.Object]> {}
          interface _LastReqEntry$$static extends ClassLike {
            new(Type: int, time: KerberosTime): LastReqEntry;
            new(encoding: security.util.DerValue): LastReqEntry;
          }
          let LastReqEntry: _LastReqEntry$$static;
          interface _LastReqEntry {
            asn1Encode(): byte[];
            clone(): any;
            _lrType: int;
            _lrValue: KerberosTime;
          }
          interface LastReqEntry extends CombineTypes<[_LastReqEntry, java.lang.Object]> {}
          interface _LocalSeqNumber$$static extends ClassLike {
            new(): LocalSeqNumber;
            new(start: int): LocalSeqNumber;
            new(start: int): LocalSeqNumber;
          }
          let LocalSeqNumber: _LocalSeqNumber$$static;
          interface _LocalSeqNumber {
            current(): int;
            init(start: int): void;
            next(): int;
            randInit(): void;
            step(): int;
            _lastSeqNumber: int;
          }
          interface LocalSeqNumber extends CombineTypes<[_LocalSeqNumber, sun.security.krb5.internal.SeqNumber, java.lang.Object]> {}
          interface _LoginOptions$$static extends ClassLike {
            readonly ALLOW_POSTDATE: int;
            readonly ENC_TKT_IN_SKEY: int;
            readonly FORWARDABLE: int;
            readonly MAX: int;
            readonly PROXIABLE: int;
            readonly RENEW: int;
            readonly RENEWABLE: int;
            readonly RENEWABLE_OK: int;
            readonly RESERVED: int;
            readonly VALIDATE: int;
            new(): LoginOptions;
          }
          let LoginOptions: _LoginOptions$$static;
          interface _LoginOptions {
          }
          interface LoginOptions extends CombineTypes<[_LoginOptions, sun.security.krb5.internal.KDCOptions]> {}
          interface _NetClient$$static extends ClassLike {
            getInstance(protocol: string, hostname: string, port: int, timeout: int): NetClient;
            new(): NetClient;
          }
          let NetClient: _NetClient$$static;
          interface _NetClient {
            close(): void;
            receive(): byte[];
            send(a0: byte[]): void;
          }
          interface NetClient extends CombineTypes<[_NetClient, java.lang.Object, java.lang.AutoCloseable]> {}
          interface _PAData$$static extends ClassLike {
            getPreferredEType(pas: PAData[], defaultEType: int): int;
            getSaltAndParams(eType: int, pas: PAData[]): PAData$SaltAndParams;
            parseSequence(data: security.util.DerInputStream, explicitTag: byte, optional: boolean): PAData[];
            _TAG_PATYPE: byte;
            _TAG_PAVALUE: byte;
            new(new_pADataType: int, new_pADataValue: byte[]): PAData;
            new(encoding: security.util.DerValue): PAData;
          }
          let PAData: _PAData$$static;
          interface _PAData {
            asn1Encode(): byte[];
            clone(): any;
            getType(): int;
            getValue(): byte[];
            toString(): string;
            _pADataType: int;
            _pADataValue: byte[];
          }
          interface PAData extends CombineTypes<[_PAData, java.lang.Object]> {}
          interface _PAData$SaltAndParams$$static extends ClassLike {
            new(s: string, p: byte[]): PAData$SaltAndParams;
          }
          let PAData$SaltAndParams: _PAData$SaltAndParams$$static;
          interface _PAData$SaltAndParams {
            readonly params: byte[];
            readonly salt: string;
          }
          interface PAData$SaltAndParams extends CombineTypes<[_PAData$SaltAndParams, java.lang.Object]> {}
          interface _PAEncTSEnc$$static extends ClassLike {
            new(new_pATimeStamp: KerberosTime, new_pAUSec: int): PAEncTSEnc;
            new(): PAEncTSEnc;
            new(encoding: security.util.DerValue): PAEncTSEnc;
          }
          let PAEncTSEnc: _PAEncTSEnc$$static;
          interface _PAEncTSEnc {
            asn1Encode(): byte[];
            pATimeStamp: KerberosTime;
            pAUSec: int;
          }
          interface PAEncTSEnc extends CombineTypes<[_PAEncTSEnc, java.lang.Object]> {}
          interface _PAForUserEnc$$static extends ClassLike {
            readonly AUTH_PACKAGE: string;
            new(name: PrincipalName, key: EncryptionKey): PAForUserEnc;
            new(encoding: security.util.DerValue, key: EncryptionKey): PAForUserEnc;
          }
          let PAForUserEnc: _PAForUserEnc$$static;
          interface _PAForUserEnc {
            asn1Encode(): byte[];
            getName(): PrincipalName;
            getS4UByteArray(): byte[];
            toString(): string;
            _key: EncryptionKey;
            readonly name: PrincipalName;
          }
          interface PAForUserEnc extends CombineTypes<[_PAForUserEnc, java.lang.Object]> {}
          interface _PaPacOptions$$static extends ClassLike {
            _BRANCH_AWARE: int;
            _CLAIMS: int;
            _FORWARD_TO_FULL_DC: int;
            _RESOURCE_BASED_CONSTRAINED_DELEGATION: int;
            new(): PaPacOptions;
            new(encoding: security.util.DerValue): PaPacOptions;
          }
          let PaPacOptions: _PaPacOptions$$static;
          interface _PaPacOptions {
            asn1Encode(): byte[];
            getBranchAware(): boolean;
            getClaims(): boolean;
            getForwardToFullDC(): boolean;
            getResourceBasedConstrainedDelegation(): boolean;
            setBranchAware(value: boolean): PaPacOptions;
            setClaims(value: boolean): PaPacOptions;
            setForwardToFullDC(value: boolean): PaPacOptions;
            setResourceBasedConstrainedDelegation(value: boolean): PaPacOptions;
            toString(): string;
            _flags: util.KerberosFlags;
          }
          interface PaPacOptions extends CombineTypes<[_PaPacOptions, java.lang.Object]> {}
          interface _ReferralsCache$$static extends ClassLike {
            _get(cname: PrincipalName, service: PrincipalName, user: PrincipalName, additionalCreds: Credentials, fromRealm: string): ReferralsCache$ReferralCacheEntry;
            _pruneExpired(k: ReferralsCache$ReferralCacheKey): void;
            _put(cname: PrincipalName, service: PrincipalName, user: PrincipalName, additionalCreds: Credentials, fromRealm: string, toRealm: string, creds: Credentials): void;
            _referralsMap: java.util.Map<ReferralsCache$ReferralCacheKey,java.util.Map<string,ReferralsCache$ReferralCacheEntry>>;
            _new(): ReferralsCache;
          }
          let ReferralsCache: _ReferralsCache$$static;
          interface _ReferralsCache {
          }
          interface ReferralsCache extends CombineTypes<[_ReferralsCache, java.lang.Object]> {}
          interface _ReferralsCache$ReferralCacheEntry$$static extends ClassLike {
            _new(creds: Credentials, toRealm: string): ReferralsCache$ReferralCacheEntry;
          }
          let ReferralsCache$ReferralCacheEntry: _ReferralsCache$ReferralCacheEntry$$static;
          interface _ReferralsCache$ReferralCacheEntry {
            _getCreds(): Credentials;
            _getToRealm(): string;
            _creds: Credentials;
            _toRealm: string;
          }
          interface ReferralsCache$ReferralCacheEntry extends CombineTypes<[_ReferralsCache$ReferralCacheEntry, java.lang.Object]> {}
          interface _ReferralsCache$ReferralCacheKey$$static extends ClassLike {
            _new(cname: PrincipalName, sname: PrincipalName, user: PrincipalName, userSvcTicket: Ticket): ReferralsCache$ReferralCacheKey;
          }
          let ReferralsCache$ReferralCacheKey: _ReferralsCache$ReferralCacheKey$$static;
          interface _ReferralsCache$ReferralCacheKey {
            equals(other: any): boolean;
            hashCode(): int;
            _cname: PrincipalName;
            _sname: PrincipalName;
            _user: PrincipalName;
            _userSvcTicketEnc: byte[];
          }
          interface ReferralsCache$ReferralCacheKey extends CombineTypes<[_ReferralsCache$ReferralCacheKey, java.lang.Object]> {}
          interface _ReplayCache$$static extends ClassLike {
            getInstance(type: string): ReplayCache;
            getInstance(): ReplayCache;
            new(): ReplayCache;
          }
          let ReplayCache: _ReplayCache$$static;
          interface _ReplayCache {
            checkAndStore(a0: KerberosTime, a1: internal.rcache.AuthTimeWithHash): void;
(a0: KerberosTime, a1: internal.rcache.AuthTimeWithHash): void;
          }
          interface ReplayCache extends CombineTypes<[_ReplayCache, java.lang.Object]> {}
          interface _SeqNumber$$static extends ClassLike {
          }
          let SeqNumber: _SeqNumber$$static;
          interface _SeqNumber {
            current(): int;
            init(a0: int): void;
            next(): int;
            randInit(): void;
            step(): int;
          }
          interface SeqNumber extends CombineTypes<[_SeqNumber, java.lang.Object]> {}
          interface _TCPClient$$static extends ClassLike {
            _intToNetworkByteOrder(num: int, buf: byte[], start: int, count: int): void;
            _networkByteOrderToInt(buf: byte[], start: int, count: int): int;
            _new(hostname: string, port: int, timeout: int): TCPClient;
          }
          let TCPClient: _TCPClient$$static;
          interface _TCPClient {
            close(): void;
            _readFully(inBuf: byte[], total: int): int;
            receive(): byte[];
            send(data: byte[]): void;
            _in: java.io.BufferedInputStream;
            _out: java.io.BufferedOutputStream;
            _tcpSocket: java.net.Socket;
          }
          interface TCPClient extends CombineTypes<[_TCPClient, sun.security.krb5.internal.NetClient]> {}
          interface _TGSRep$$static extends ClassLike {
            new(new_pAData: PAData[], new_cname: PrincipalName, new_ticket: Ticket, new_encPart: EncryptedData): TGSRep;
            new(data: byte[]): TGSRep;
            new(encoding: security.util.DerValue): TGSRep;
          }
          let TGSRep: _TGSRep$$static;
          interface _TGSRep {
            _init(encoding: security.util.DerValue): void;
          }
          interface TGSRep extends CombineTypes<[_TGSRep, sun.security.krb5.internal.KDCRep]> {}
          interface _TGSReq$$static extends ClassLike {
            new(new_pAData: PAData[], new_reqBody: KDCReqBody): TGSReq;
            new(data: byte[]): TGSReq;
            new(encoding: security.util.DerValue): TGSReq;
          }
          let TGSReq: _TGSReq$$static;
          interface _TGSReq {
            _init(encoding: security.util.DerValue): void;
          }
          interface TGSReq extends CombineTypes<[_TGSReq, sun.security.krb5.internal.KDCReq]> {}
          interface _Ticket$$static extends ClassLike {
            parse(data: security.util.DerInputStream, explicitTag: byte, optional: boolean): Ticket;
            new(new_sname: PrincipalName, new_encPart: EncryptedData): Ticket;
            new(data: byte[]): Ticket;
            new(encoding: security.util.DerValue): Ticket;
          }
          let Ticket: _Ticket$$static;
          interface _Ticket {
            asn1Encode(): byte[];
            clone(): any;
            _init(encoding: security.util.DerValue): void;
            encPart: EncryptedData;
            sname: PrincipalName;
            tkt_vno: int;
          }
          interface Ticket extends CombineTypes<[_Ticket, java.lang.Cloneable, java.lang.Object]> {}
          interface _TicketFlags$$static extends ClassLike {
            parse(data: security.util.DerInputStream, explicitTag: byte, optional: boolean): TicketFlags;
            new(): TicketFlags;
            new(flags: boolean[]): TicketFlags;
            new(size: int, data: byte[]): TicketFlags;
            new(encoding: security.util.DerValue): TicketFlags;
          }
          let TicketFlags: _TicketFlags$$static;
          interface _TicketFlags {
            clone(): any;
            match(options: LoginOptions): boolean;
            match(flags: TicketFlags): boolean;
            toString(): string;
          }
          interface TicketFlags extends CombineTypes<[_TicketFlags, sun.security.krb5.internal.util.KerberosFlags]> {}
          interface _TransitedEncoding$$static extends ClassLike {
            parse(data: security.util.DerInputStream, explicitTag: byte, optional: boolean): TransitedEncoding;
            new(type: int, cont: byte[]): TransitedEncoding;
            new(encoding: security.util.DerValue): TransitedEncoding;
          }
          let TransitedEncoding: _TransitedEncoding$$static;
          interface _TransitedEncoding {
            asn1Encode(): byte[];
            contents: byte[];
            trType: int;
          }
          interface TransitedEncoding extends CombineTypes<[_TransitedEncoding, java.lang.Object]> {}
          interface _UDPClient$$static extends ClassLike {
            _new(hostname: string, port: int, timeout: int): UDPClient;
          }
          let UDPClient: _UDPClient$$static;
          interface _UDPClient {
            close(): void;
            receive(): byte[];
            send(data: byte[]): void;
            _bufSize: int;
            _dgPacketIn: java.net.DatagramPacket;
            _dgSocket: java.net.DatagramSocket;
            _iaddr: java.net.InetAddress;
            _iport: int;
          }
          interface UDPClient extends CombineTypes<[_UDPClient, sun.security.krb5.internal.NetClient]> {}
        }
        interface _Asn1Exception$$static extends ClassLike {
          _serialVersionUID: long;
          new(i: int): Asn1Exception;
        }
        let Asn1Exception: _Asn1Exception$$static;
        interface _Asn1Exception {
        }
        interface Asn1Exception extends CombineTypes<[_Asn1Exception, sun.security.krb5.KrbException]> {}
        interface _Checksum$$static extends ClassLike {
          parse(data: security.util.DerInputStream, explicitTag: byte, optional: boolean): Checksum;
          readonly CKSUMTYPE_CRC32: int;
          readonly CKSUMTYPE_DES_MAC: int;
          readonly CKSUMTYPE_DES_MAC_K: int;
          readonly CKSUMTYPE_HMAC_MD5_ARCFOUR: int;
          readonly CKSUMTYPE_HMAC_SHA1_96_AES128: int;
          readonly CKSUMTYPE_HMAC_SHA1_96_AES256: int;
          readonly CKSUMTYPE_HMAC_SHA1_DES3_KD: int;
          readonly CKSUMTYPE_HMAC_SHA256_128_AES128: int;
          readonly CKSUMTYPE_HMAC_SHA384_192_AES256: int;
          readonly CKSUMTYPE_NULL: int;
          readonly CKSUMTYPE_RSA_MD4: int;
          readonly CKSUMTYPE_RSA_MD4_DES: int;
          readonly CKSUMTYPE_RSA_MD4_DES_K: int;
          readonly CKSUMTYPE_RSA_MD5: int;
          readonly CKSUMTYPE_RSA_MD5_DES: int;
          _DEBUG: boolean;
          new(data: byte[], new_cksumType: int): Checksum;
          new(new_cksumType: int, data: byte[], key: EncryptionKey, usage: int): Checksum;
          new(encoding: security.util.DerValue): Checksum;
        }
        let Checksum: _Checksum$$static;
        interface _Checksum {
          asn1Encode(): byte[];
          equals(obj: any): boolean;
          getBytes(): byte[];
          getType(): int;
          hashCode(): int;
          _isEqual(cksum: Checksum): boolean;
          verifyAnyChecksum(data: byte[], key: EncryptionKey, usage: int): boolean;
          _checksum: byte[];
          _cksumType: int;
        }
        interface Checksum extends CombineTypes<[_Checksum, java.lang.Object]> {}
        interface _Config$$static extends ClassLike {
          _checkRealm(mapRealm: string): string;
          duration(s: string): int;
          getInstance(): Config;
          getType(input: string): int;
          _getWindowsDirectory(a0: boolean): string;
          _isMacosLionOrBetter(): boolean;
          _readConfigFileLines(file: java.nio.file.Path, content: java.util.List<string>, dups: java.util.Set<java.nio.file.Path>): java.lang.Void;
          refresh(): void;
          _toStringInternal(prefix: string, obj: any, sb: Config$stringBuffer): void;
          _unquote(s: string): string;
          _BASE16_0: int;
          _BASE16_1: int;
          _BASE16_2: int;
          _BASE16_3: int;
          _DEBUG: boolean;
          readonly DISABLE_REFERRALS: boolean;
          readonly MAX_REFERRALS: int;
          _singleton: Config;
        }
        let Config: _Config$$static;
        interface _Config {
          defaultEtype(configName: string): int[];
          exists(keys: string[]): boolean;
          exists(...keys: string[]): boolean;
          _fileExists(name: string): boolean;
          _findMacosConfigFile(): string;
          get(keys: string[]): string;
          get(...keys: string[]): string;
          _get0(keys: string[]): any;
          _get0(...keys: string[]): any;
          getAll(keys: string[]): string;
          getAll(...keys: string[]): string;
          _getBase(i: int): int;
          getBooleanObject(keys: string[]): boolean;
          getBooleanObject(...keys: string[]): boolean;
          getDefaultRealm(): string;
          getIntValue(keys: string[]): int;
          getIntValue(...keys: string[]): int;
          _getJavaFileName(): string;
          _getKDCFromDNS(realm: string): string;
          getKDCList(realm: string): string;
          _getNativeFileName(): string;
          _getRealmFromDNS(): string;
          _getString0(keys: string[]): java.util.Vector<string>;
          _getString0(...keys: string[]): java.util.Vector<string>;
          listTable(): void;
          _loadConfigFile(fileName: string): java.util.List<string>;
          _parseIntValue(input: string): int;
          _parseStanzaTable(v: java.util.List<string>): java.util.Hashtable<string,any>;
          resetDefaultRealm(realm: string): void;
          toString(): string;
          useAddresses(): boolean;
          _useDNS(name: string, defaultValue: boolean): boolean;
          _useDNS_KDC(): boolean;
          _useDNS_Realm(): boolean;
          _defaultKDC: string;
          _defaultRealm: string;
          _stanzaTable: java.util.Hashtable<string,any>;
        }
        interface Config extends CombineTypes<[_Config, java.lang.Object]> {}
        interface _Config$FileExistsAction$$static extends ClassLike {
          new(fileName: string): Config$FileExistsAction;
        }
        let Config$FileExistsAction: _Config$FileExistsAction$$static;
        interface _Config$FileExistsAction {
          run(): boolean;
          run(): any;
          _fileName: string;
        }
        interface Config$FileExistsAction extends CombineTypes<[_Config$FileExistsAction, java.security.PrivilegedAction<boolean>, java.lang.Object]> {}
        interface _Confounder$$static extends ClassLike {
          bytes(size: int): byte[];
          intValue(): int;
          longValue(): long;
          _srand: java.security.SecureRandom;
        }
        let Confounder: _Confounder$$static;
        interface _Confounder {
        }
        interface Confounder extends CombineTypes<[_Confounder, java.lang.Object]> {}
        interface _Credentials$$static extends ClassLike {
          acquireDefaultCreds(): Credentials;
          _acquireDefaultNativeCreds(a0: int[]): Credentials;
          acquireS4U2proxyCreds(service: string, userCreds: Credentials, client: PrincipalName, middleTGT: Credentials): Credentials;
          acquireS4U2selfCreds(user: PrincipalName, middleTGT: Credentials): Credentials;
          acquireServiceCreds(service: string, initCreds: Credentials): Credentials;
          acquireTGTFromCache(princ: PrincipalName, ticketCache: string): Credentials;
          _date2kt(d: java.util.Date): krb5.internal.KerberosTime;
          _ensureLoaded(): void;
          printDebug(c: Credentials): void;
          _DEBUG: boolean;
          readonly S4U2PROXY_ACCEPT_NON_FORWARDABLE: boolean;
          _alreadyLoaded: boolean;
          _alreadyTried: boolean;
          new(new_ticket: krb5.internal.Ticket, new_client: PrincipalName, new_client_alias: PrincipalName, new_server: PrincipalName, new_server_alias: PrincipalName, new_key: EncryptionKey, new_flags: krb5.internal.TicketFlags, authTime: krb5.internal.KerberosTime, new_startTime: krb5.internal.KerberosTime, new_endTime: krb5.internal.KerberosTime, renewTill: krb5.internal.KerberosTime, cAddr: krb5.internal.HostAddresses, authzData: krb5.internal.AuthorizationData): Credentials;
          new(new_ticket: krb5.internal.Ticket, new_client: PrincipalName, new_client_alias: PrincipalName, new_server: PrincipalName, new_server_alias: PrincipalName, new_key: EncryptionKey, new_flags: krb5.internal.TicketFlags, authTime: krb5.internal.KerberosTime, new_startTime: krb5.internal.KerberosTime, new_endTime: krb5.internal.KerberosTime, renewTill: krb5.internal.KerberosTime, cAddr: krb5.internal.HostAddresses): Credentials;
          new(encoding: byte[], client: string, clientAlias: string, server: string, serverAlias: string, keyBytes: byte[], keyType: int, flags: boolean[], authTime: java.util.Date, startTime: java.util.Date, endTime: java.util.Date, renewTill: java.util.Date, cAddrs: java.net.InetAddress[]): Credentials;
        }
        let Credentials: _Credentials$$static;
        interface _Credentials {
          checkDelegate(): boolean;
          getAuthTime(): java.util.Date;
          getAuthzData(): krb5.internal.AuthorizationData;
          getClient(): PrincipalName;
          getClientAddresses(): java.net.InetAddress[];
          getClientAlias(): PrincipalName;
          getEncoded(): byte[];
          getEndTime(): java.util.Date;
          getFlags(): boolean[];
          getProxy(): Credentials;
          getRenewTill(): java.util.Date;
          getServer(): PrincipalName;
          getServerAlias(): PrincipalName;
          getSessionKey(): EncryptionKey;
          getStartTime(): java.util.Date;
          getTicket(): krb5.internal.Ticket;
          getTicketFlags(): krb5.internal.TicketFlags;
          isForwardable(): boolean;
          isRenewable(): boolean;
          renew(): Credentials;
          resetDelegate(): void;
          setProxy(proxy: Credentials): Credentials;
          toCCacheCreds(): krb5.internal.ccache.Credentials;
          toString(): string;
          _authTime: internal.KerberosTime;
          _authzData: internal.AuthorizationData;
          _cAddr: internal.HostAddresses;
          _client: PrincipalName;
          _clientAlias: PrincipalName;
          _endTime: internal.KerberosTime;
          _flags: internal.TicketFlags;
          _key: EncryptionKey;
          _proxy: Credentials;
          _renewTill: internal.KerberosTime;
          _server: PrincipalName;
          _serverAlias: PrincipalName;
          _startTime: internal.KerberosTime;
          _ticket: internal.Ticket;
        }
        interface Credentials extends CombineTypes<[_Credentials, java.lang.Object]> {}
        interface _EncryptedData$$static extends ClassLike {
          parse(data: security.util.DerInputStream, explicitTag: byte, optional: boolean): EncryptedData;
          readonly ETYPE_AES128_CTS_HMAC_SHA1_96: int;
          readonly ETYPE_AES128_CTS_HMAC_SHA256_128: int;
          readonly ETYPE_AES256_CTS_HMAC_SHA1_96: int;
          readonly ETYPE_AES256_CTS_HMAC_SHA384_192: int;
          readonly ETYPE_ARCFOUR_HMAC: int;
          readonly ETYPE_ARCFOUR_HMAC_EXP: int;
          readonly ETYPE_DES3_CBC_HMAC_SHA1_KD: int;
          readonly ETYPE_DES_CBC_CRC: int;
          readonly ETYPE_DES_CBC_MD4: int;
          readonly ETYPE_DES_CBC_MD5: int;
          readonly ETYPE_NULL: int;
          new(new_eType: int, new_kvno: int, new_cipher: byte[]): EncryptedData;
          new(key: EncryptionKey, plaintext: byte[], usage: int): EncryptedData;
        }
        let EncryptedData: _EncryptedData$$static;
        interface _EncryptedData {
          asn1Encode(): byte[];
          clone(): any;
          decrypt(key: EncryptionKey, usage: int): byte[];
          _decryptedData(): byte[];
          getBytes(): byte[];
          getEType(): int;
          getKeyVersionNumber(): int;
          reset(data: byte[]): byte[];
          _cipher: byte[];
          _eType: int;
          _kvno: int;
          _plain: byte[];
        }
        interface EncryptedData extends CombineTypes<[_EncryptedData, java.lang.Cloneable, java.lang.Object]> {}
        interface _EncryptionKey$$static extends ClassLike {
          acquireSecretKey(cname: PrincipalName, password: char[], etype: int, snp: krb5.internal.PAData$SaltAndParams): EncryptionKey;
          acquireSecretKey(password: char[], salt: string, etype: int, s2kparams: byte[]): EncryptionKey;
          acquireSecretKeys(princ: PrincipalName, keytab: string): EncryptionKey[];
          acquireSecretKeys(password: char[], salt: string): EncryptionKey[];
          findKey(etype: int, keys: EncryptionKey[]): EncryptionKey;
          findKey(etype: int, kvno: int, keys: EncryptionKey[]): EncryptionKey;
          parse(data: security.util.DerInputStream, explicitTag: byte, optional: boolean): EncryptionKey;
          _stringToKey(password: char[], salt: string, s2kparams: byte[], keyType: int): byte[];
          _versionMatches(v1: int, v2: int): boolean;
          _DEBUG: boolean;
          readonly NULL_KEY: EncryptionKey;
          new(keyValue: byte[], keyType: int, kvno: int): EncryptionKey;
          new(keyType: int, keyValue: byte[]): EncryptionKey;
          new(password: char[], salt: string, algorithm: string): EncryptionKey;
          new(key: EncryptionKey): EncryptionKey;
          new(encoding: security.util.DerValue): EncryptionKey;
        }
        let EncryptionKey: _EncryptionKey$$static;
        interface _EncryptionKey {
          asn1Encode(): byte[];
          clone(): any;
          destroy(): void;
          getBytes(): byte[];
          getEType(): int;
          getKeyVersionNumber(): int;
          toString(): string;
          writeKey(cos: krb5.internal.ccache.CCacheOutputStream): void;
          _keyType: int;
          _keyValue: byte[];
          _kvno: int;
        }
        interface EncryptionKey extends CombineTypes<[_EncryptionKey, java.lang.Cloneable, java.lang.Object]> {}
        interface _JavaxSecurityAuthKerberosAccess$$static extends ClassLike {
        }
        let JavaxSecurityAuthKerberosAccess: _JavaxSecurityAuthKerberosAccess$$static;
        interface _JavaxSecurityAuthKerberosAccess {
          kerberosTicketGetClientAlias(a0: javax.security.auth.kerberos.KerberosTicket): javax.security.auth.kerberos.KerberosPrincipal;
          kerberosTicketGetProxy(a0: javax.security.auth.kerberos.KerberosTicket): javax.security.auth.kerberos.KerberosTicket;
          kerberosTicketGetServerAlias(a0: javax.security.auth.kerberos.KerberosTicket): javax.security.auth.kerberos.KerberosPrincipal;
          kerberosTicketSetClientAlias(a0: javax.security.auth.kerberos.KerberosTicket, a1: javax.security.auth.kerberos.KerberosPrincipal): void;
          kerberosTicketSetProxy(a0: javax.security.auth.kerberos.KerberosTicket, a1: javax.security.auth.kerberos.KerberosTicket): void;
          kerberosTicketSetServerAlias(a0: javax.security.auth.kerberos.KerberosTicket, a1: javax.security.auth.kerberos.KerberosPrincipal): void;
          keyTabTakeSnapshot(a0: javax.security.auth.kerberos.KeyTab): krb5.internal.ktab.KeyTab;
        }
        interface JavaxSecurityAuthKerberosAccess extends CombineTypes<[_JavaxSecurityAuthKerberosAccess, java.lang.Object]> {}
        interface _KdcComm$$static extends ClassLike {
          initStatic(): void;
          _parsePositiveIntString(intString: string): int;
          _parseTimeString(s: string): int;
          _DEBUG: boolean;
          _badPolicy: KdcComm$BpType;
          _defaultKdcRetryLimit: int;
          _defaultKdcTimeout: int;
          _defaultUdpPrefLimit: int;
          _tryLessMaxRetries: int;
          _tryLessTimeout: int;
          new(realm: string): KdcComm;
        }
        let KdcComm: _KdcComm$$static;
        interface _KdcComm {
          _getRealmSpecificValue(realm: string, key: string, defValue: int): int;
          send(req: KrbKdcReq): byte[];
          _send(req: KrbKdcReq, useTCP: boolean): byte[];
          _send(req: KrbKdcReq, tempKdc: string, useTCP: boolean): byte[];
          _sendIfPossible(req: KrbKdcReq, tempKdc: string, useTCP: boolean): byte[];
          _realm: string;
        }
        interface KdcComm extends CombineTypes<[_KdcComm, java.lang.Object]> {}
        interface _KdcComm$BpType$$static extends ClassLike {
          valueOf(name: string): KdcComm$BpType;
          values(): KdcComm$BpType[];
          readonly NONE: KdcComm$BpType;
          readonly TRY_LAST: KdcComm$BpType;
          readonly TRY_LESS: KdcComm$BpType;
        }
        let KdcComm$BpType: _KdcComm$BpType$$static;
        interface _KdcComm$BpType {
        }
        interface KdcComm$BpType extends CombineTypes<[_KdcComm$BpType]> {}
        interface _KdcComm$KdcAccessibility$$static extends ClassLike {
          _addBad(kdc: string): void;
          _isBad(kdc: string): boolean;
          _list(kdcList: string): java.util.List<string>;
          _removeBad(kdc: string): void;
          _reset(): void;
          _bads: java.util.Set<string>;
          _new(): KdcComm$KdcAccessibility;
        }
        let KdcComm$KdcAccessibility: _KdcComm$KdcAccessibility$$static;
        interface _KdcComm$KdcAccessibility {
        }
        interface KdcComm$KdcAccessibility extends CombineTypes<[_KdcComm$KdcAccessibility, java.lang.Object]> {}
        interface _KdcComm$KdcCommunication$$static extends ClassLike {
          new(kdc: string, port: int, useTCP: boolean, timeout: int, retries: int, obuf: byte[]): KdcComm$KdcCommunication;
        }
        let KdcComm$KdcCommunication: _KdcComm$KdcCommunication$$static;
        interface _KdcComm$KdcCommunication {
          run(): byte[];
          run(): any;
          _kdc: string;
          _obuf: byte[];
          _port: int;
          _retries: int;
          _timeout: int;
          _useTCP: boolean;
        }
        interface KdcComm$KdcCommunication extends CombineTypes<[_KdcComm$KdcCommunication, java.security.PrivilegedExceptionAction<byte[]>, java.lang.Object]> {}
        interface _KerberosSecrets$$static extends ClassLike {
          getJavaxSecurityAuthKerberosAccess(): JavaxSecurityAuthKerberosAccess;
          setJavaxSecurityAuthKerberosAccess(jsaka: JavaxSecurityAuthKerberosAccess): void;
          _javaxSecurityAuthKerberosAccess: JavaxSecurityAuthKerberosAccess;
          new(): KerberosSecrets;
        }
        let KerberosSecrets: _KerberosSecrets$$static;
        interface _KerberosSecrets {
        }
        interface KerberosSecrets extends CombineTypes<[_KerberosSecrets, java.lang.Object]> {}
        interface _KrbApRep$$static extends ClassLike {
          new(incomingReq: KrbApReq, useSeqNumber: boolean, subKey: EncryptionKey): KrbApRep;
          new(message: byte[], tgtCreds: Credentials, outgoingReq: KrbApReq): KrbApRep;
        }
        let KrbApRep: _KrbApRep$$static;
        interface _KrbApRep {
          _authenticate(apReq: KrbApReq): void;
          _createMessage(key: EncryptionKey, ctime: krb5.internal.KerberosTime, cusec: int, subKey: EncryptionKey, seqNumber: krb5.internal.SeqNumber): void;
          getMessage(): byte[];
          getSeqNumber(): int;
          getSubKey(): EncryptionKey;
          _init(apReq: KrbApReq, subKey: EncryptionKey, seqNumber: krb5.internal.SeqNumber): void;
          _apRepMessg: internal.APRep;
          _encPart: internal.EncAPRepPart;
          _ibuf: byte[];
          _obuf: byte[];
        }
        interface KrbApRep extends CombineTypes<[_KrbApRep, java.lang.Object]> {}
        interface _KrbApReq$$static extends ClassLike {
          _checkPermittedEType(target: int): void;
          _DEBUG: boolean;
          _hexConst: char[];
          _rcache: internal.ReplayCache;
          new(tgsCred: Credentials, mutualRequired: boolean, useSubKey: boolean, useSeqNumber: boolean, cksum: Checksum): KrbApReq;
          new(message: byte[], cred: security.jgss.krb5.Krb5AcceptCredential, initiator: java.net.InetAddress): KrbApReq;
          _new(apOptions: krb5.internal.APOptions, ticket: krb5.internal.Ticket, key: EncryptionKey, cname: PrincipalName, cksum: Checksum, ctime: krb5.internal.KerberosTime, subKey: EncryptionKey, seqNumber: krb5.internal.SeqNumber, authorizationData: krb5.internal.AuthorizationData): KrbApReq;
        }
        let KrbApReq: _KrbApReq$$static;
        interface _KrbApReq {
          _authenticate(cred: security.jgss.krb5.Krb5AcceptCredential, initiator: java.net.InetAddress): void;
          _createMessage(apOptions: krb5.internal.APOptions, ticket: krb5.internal.Ticket, key: EncryptionKey, cname: PrincipalName, cksum: Checksum, ctime: krb5.internal.KerberosTime, subKey: EncryptionKey, seqNumber: krb5.internal.SeqNumber, authorizationData: krb5.internal.AuthorizationData, usage: int): void;
          _cusec(): int;
          _decode(): void;
          _decode(encoding: security.util.DerValue): void;
          _getAPOptions(): krb5.internal.APOptions;
          getChecksum(): Checksum;
          getClient(): PrincipalName;
          getCreds(): Credentials;
          _getCtime(): krb5.internal.KerberosTime;
          getMessage(): byte[];
          getMutualAuthRequired(): boolean;
          getSeqNumber(): int;
          getSubKey(): EncryptionKey;
          _init(options: krb5.internal.APOptions, tgs_creds: Credentials, cksum: Checksum, subKey: EncryptionKey, seqNumber: krb5.internal.SeqNumber, authorizationData: krb5.internal.AuthorizationData, usage: int): void;
          _init(apOptions: krb5.internal.APOptions, ticket: krb5.internal.Ticket, key: EncryptionKey, cname: PrincipalName, cksum: Checksum, ctime: krb5.internal.KerberosTime, subKey: EncryptionKey, seqNumber: krb5.internal.SeqNumber, authorizationData: krb5.internal.AuthorizationData, usage: int): void;
          _useSessionKey(): boolean;
          _apReqMessg: internal.APReq;
          _authenticator: internal.Authenticator;
          _creds: Credentials;
          _ctime: internal.KerberosTime;
          _cusec: int;
          _obuf: byte[];
        }
        interface KrbApReq extends CombineTypes<[_KrbApReq, java.lang.Object]> {}
        interface _KrbAsRep$$static extends ClassLike {
          _new(ibuf: byte[]): KrbAsRep;
        }
        let KrbAsRep: _KrbAsRep$$static;
        interface _KrbAsRep {
          _decrypt(dkey: EncryptionKey, asReq: KrbAsReq, cname: PrincipalName): void;
          _decryptUsingKeyTab(ktab: javax.security.auth.kerberos.KeyTab, asReq: KrbAsReq, cname: PrincipalName): void;
          _decryptUsingPassword(password: char[], asReq: KrbAsReq, cname: PrincipalName): void;
          _getCCreds(): krb5.internal.ccache.Credentials;
          _getCreds(): Credentials;
          _getPA(): krb5.internal.PAData[];
          _DEBUG: boolean;
          _creds: Credentials;
          _rep: internal.ASRep;
        }
        interface KrbAsRep extends CombineTypes<[_KrbAsRep, sun.security.krb5.KrbKdcRep]> {}
        interface _KrbAsReq$$static extends ClassLike {
          new(pakey: EncryptionKey, options: krb5.internal.KDCOptions, cname: PrincipalName, sname: PrincipalName, from: krb5.internal.KerberosTime, till: krb5.internal.KerberosTime, rtime: krb5.internal.KerberosTime, eTypes: int[], addresses: krb5.internal.HostAddresses, extraPAs: krb5.internal.PAData[]): KrbAsReq;
        }
        let KrbAsReq: _KrbAsReq$$static;
        interface _KrbAsReq {
          encoding(): byte[];
          _getMessage(): krb5.internal.ASReq;
          _DEBUG: boolean;
          _asReqMessg: internal.ASReq;
        }
        interface KrbAsReq extends CombineTypes<[_KrbAsReq, sun.security.krb5.KrbKdcReq]> {}
        interface _KrbAsReqBuilder$$static extends ClassLike {
          new(cname: PrincipalName, ktab: javax.security.auth.kerberos.KeyTab): KrbAsReqBuilder;
          new(cname: PrincipalName, pass: char[]): KrbAsReqBuilder;
        }
        let KrbAsReqBuilder: _KrbAsReqBuilder$$static;
        interface _KrbAsReqBuilder {
          action(): KrbAsReqBuilder;
          _build(key: EncryptionKey, referralsState: KrbAsReqBuilder$ReferralsState): KrbAsReq;
          _checkState(st: KrbAsReqBuilder$State, msg: string): void;
          destroy(): void;
          getCCreds(): krb5.internal.ccache.Credentials;
          getCreds(): Credentials;
          getKeys(isInitiator: boolean): EncryptionKey[];
          _init(cname: PrincipalName): void;
          _resolve(): KrbAsReqBuilder;
          _send(): KrbAsReqBuilder;
          setAddresses(addresses: krb5.internal.HostAddresses): void;
          setOptions(options: krb5.internal.KDCOptions): void;
          setRTime(rtime: krb5.internal.KerberosTime): void;
          setTarget(sname: PrincipalName): void;
          setTill(till: krb5.internal.KerberosTime): void;
          _addresses: internal.HostAddresses;
          _cname: PrincipalName;
          _from: internal.KerberosTime;
          _ktab: javax.security.auth.kerberos.KeyTab;
          _options: internal.KDCOptions;
          _paList: internal.PAData[];
          _password: char[];
          _refCname: PrincipalName;
          _rep: KrbAsRep;
          _req: KrbAsReq;
          _rtime: internal.KerberosTime;
          _sname: PrincipalName;
          _state: KrbAsReqBuilder$State;
          _till: internal.KerberosTime;
        }
        interface KrbAsReqBuilder extends CombineTypes<[_KrbAsReqBuilder, java.lang.Object]> {}
        interface _KrbAsReqBuilder$ReferralsState$$static extends ClassLike {
          _initStatic(): void;
          _canonicalizeConfig: boolean;
          _new(reqBuilder: KrbAsReqBuilder): KrbAsReqBuilder$ReferralsState;
        }
        let KrbAsReqBuilder$ReferralsState: _KrbAsReqBuilder$ReferralsState$$static;
        interface _KrbAsReqBuilder$ReferralsState {
          _handleError(ke: KrbException): boolean;
          _isEnabled(): boolean;
          _refreshComm(): boolean;
          _sendCanonicalize(): boolean;
          _updateStatus(): void;
          _count: int;
          _enabled: boolean;
          _isEnterpriseCname: boolean;
          _refreshComm: boolean;
          _reqBuilder: KrbAsReqBuilder;
          _sendCanonicalize: boolean;
        }
        interface KrbAsReqBuilder$ReferralsState extends CombineTypes<[_KrbAsReqBuilder$ReferralsState, java.lang.Object]> {}
        interface _KrbAsReqBuilder$State$$static extends ClassLike {
          valueOf(name: string): KrbAsReqBuilder$State;
          values(): KrbAsReqBuilder$State[];
          readonly DESTROYED: KrbAsReqBuilder$State;
          readonly INIT: KrbAsReqBuilder$State;
          readonly REQ_OK: KrbAsReqBuilder$State;
        }
        let KrbAsReqBuilder$State: _KrbAsReqBuilder$State$$static;
        interface _KrbAsReqBuilder$State {
        }
        interface KrbAsReqBuilder$State extends CombineTypes<[_KrbAsReqBuilder$State]> {}
        interface _KrbCred$$static extends ClassLike {
          _DEBUG: boolean;
          new(tgt: Credentials, serviceTicket: Credentials, key: EncryptionKey): KrbCred;
          new(asn1Message: byte[], key: EncryptionKey): KrbCred;
        }
        let KrbCred: _KrbCred$$static;
        interface _KrbCred {
          _createMessage(delegatedCreds: Credentials, key: EncryptionKey): krb5.internal.KRBCred;
          getDelegatedCreds(): Credentials[];
          getMessage(): byte[];
          _credMessg: internal.KRBCred;
          _creds: Credentials;
          _encPart: internal.EncKrbCredPart;
          _obuf: byte[];
          _ticket: internal.Ticket;
          _timeStamp: internal.KerberosTime;
        }
        interface KrbCred extends CombineTypes<[_KrbCred, java.lang.Object]> {}
        interface _KrbCryptoException$$static extends ClassLike {
          _serialVersionUID: long;
          new(s: string): KrbCryptoException;
        }
        let KrbCryptoException: _KrbCryptoException$$static;
        interface _KrbCryptoException {
        }
        interface KrbCryptoException extends CombineTypes<[_KrbCryptoException, sun.security.krb5.KrbException]> {}
        interface _KrbException$$static extends ClassLike {
          errorMessage(i: int): string;
          returnCodeSymbol(i: int): string;
          _serialVersionUID: long;
          new(s: string): KrbException;
          new(cause: java.lang.Throwable): KrbException;
          new(i: int): KrbException;
          new(i: int, s: string): KrbException;
          new(e: krb5.internal.KRBError): KrbException;
          new(e: krb5.internal.KRBError, s: string): KrbException;
        }
        let KrbException: _KrbException$$static;
        interface _KrbException {
          equals(obj: any): boolean;
          getError(): krb5.internal.KRBError;
          getMessage(): string;
          hashCode(): int;
          krbErrorMessage(): string;
          returnCode(): int;
          returnCodeMessage(): string;
          returnCodeSymbol(): string;
          toString(): string;
          _error: internal.KRBError;
          _returnCode: int;
        }
        interface KrbException extends CombineTypes<[_KrbException, java.lang.Exception]> {}
        interface _KrbKdcRep$$static extends ClassLike {
          _check(isAsReq: boolean, req: krb5.internal.KDCReq, rep: krb5.internal.KDCRep, replyKey: EncryptionKey): void;
          _new(): KrbKdcRep;
        }
        let KrbKdcRep: _KrbKdcRep$$static;
        interface _KrbKdcRep {
        }
        interface KrbKdcRep extends CombineTypes<[_KrbKdcRep, java.lang.Object]> {}
        interface _KrbKdcReq$$static extends ClassLike {
          _new(): KrbKdcReq;
        }
        let KrbKdcReq: _KrbKdcReq$$static;
        interface _KrbKdcReq {
          encoding(): byte[];
          _obuf: byte[];
        }
        interface KrbKdcReq extends CombineTypes<[_KrbKdcReq, java.lang.Object]> {}
        interface _KrbServiceLocator$$static extends ClassLike {
          _extractHostports(srvRecords: KrbServiceLocator$SrvRecord[]): string[];
          _getKerberosService(realmName: string): string[];
          _getKerberosService(realmName: string, protocol: string): string[];
          _selectHostport(srvRecords: KrbServiceLocator$SrvRecord[], head: int, tail: int): string;
          _SRV_RR: string;
          _SRV_RR_ATTR: string[];
          _SRV_TXT: string;
          _SRV_TXT_ATTR: string[];
          _random: java.util.Random;
        }
        let KrbServiceLocator: _KrbServiceLocator$$static;
        interface _KrbServiceLocator {
        }
        interface KrbServiceLocator extends CombineTypes<[_KrbServiceLocator, java.lang.Object]> {}
        interface _KrbServiceLocator$SrvRecord$$static extends ClassLike {
          _new(srvRecord: string): KrbServiceLocator$SrvRecord;
        }
        let KrbServiceLocator$SrvRecord: _KrbServiceLocator$SrvRecord$$static;
        interface _KrbServiceLocator$SrvRecord {
          compareTo(that: KrbServiceLocator$SrvRecord): int;
          compareTo(a0: any): int;
          _hostport: string;
          _priority: int;
          _sum: int;
          _weight: int;
        }
        interface KrbServiceLocator$SrvRecord extends CombineTypes<[_KrbServiceLocator$SrvRecord, java.lang.Comparable<KrbServiceLocator$SrvRecord>, java.lang.Object]> {}
        interface _KrbTgsRep$$static extends ClassLike {
          _isReferralSname(sname: PrincipalName): boolean;
          _new(ibuf: byte[], tgsReq: KrbTgsReq): KrbTgsRep;
        }
        let KrbTgsRep: _KrbTgsRep$$static;
        interface _KrbTgsRep {
          _getCreds(): Credentials;
          _setCredentials(): krb5.internal.ccache.Credentials;
          _additionalCreds: Credentials;
          _creds: Credentials;
          _rep: internal.TGSRep;
        }
        interface KrbTgsRep extends CombineTypes<[_KrbTgsRep, sun.security.krb5.KrbKdcRep]> {}
        interface _KrbTgsReq$$static extends ClassLike {
          new(options: krb5.internal.KDCOptions, asCreds: Credentials, cname: PrincipalName, clientAlias: PrincipalName, sname: PrincipalName, serverAlias: PrincipalName, additionalCreds: Credentials, extraPAs: krb5.internal.PAData[]): KrbTgsReq;
          _new(options: krb5.internal.KDCOptions, asCreds: Credentials, sname: PrincipalName, serverAlias: PrincipalName, from: krb5.internal.KerberosTime, till: krb5.internal.KerberosTime, rtime: krb5.internal.KerberosTime, eTypes: int[], addresses: krb5.internal.HostAddresses, authorizationData: krb5.internal.AuthorizationData, additionalCreds: Credentials, subKey: EncryptionKey): KrbTgsReq;
        }
        let KrbTgsReq: _KrbTgsReq$$static;
        interface _KrbTgsReq {
          _createRequest(kdc_options: krb5.internal.KDCOptions, ticket: krb5.internal.Ticket, key: EncryptionKey, ctime: krb5.internal.KerberosTime, cname: PrincipalName, sname: PrincipalName, from: krb5.internal.KerberosTime, till: krb5.internal.KerberosTime, rtime: krb5.internal.KerberosTime, eTypes: int[], addresses: krb5.internal.HostAddresses, authorizationData: krb5.internal.AuthorizationData, additionalCreds: Credentials, subKey: EncryptionKey, extraPAs: krb5.internal.PAData[]): krb5.internal.TGSReq;
          encoding(): byte[];
          _getAdditionalCreds(): Credentials;
          _getClientAlias(): PrincipalName;
          _getCtime(): krb5.internal.KerberosTime;
          _getMessage(): krb5.internal.TGSReq;
          _getServerAlias(): PrincipalName;
          sendAndGetCreds(): Credentials;
          _usedSubkey(): boolean;
          _additionalCreds: Credentials;
          _clientAlias: PrincipalName;
          _ctime: internal.KerberosTime;
          _princName: PrincipalName;
          _servName: PrincipalName;
          _serverAlias: PrincipalName;
          _tgsReqKey: EncryptionKey;
          _tgsReqMessg: internal.TGSReq;
          _useSubkey: boolean;
        }
        interface KrbTgsReq extends CombineTypes<[_KrbTgsReq, sun.security.krb5.KrbKdcReq]> {}
        interface _PrincipalName$$static extends ClassLike {
          _mapHostToRealm(name: string): string;
          parse(data: security.util.DerInputStream, explicitTag: byte, optional: boolean, realm: Realm): PrincipalName;
          _parseName(name: string): string[];
          tgsService(r1: string, r2: string): PrincipalName;
          _validateNameStrings(ns: string[]): void;
          readonly KRB_NT_ENTERPRISE: int;
          readonly KRB_NT_PRINCIPAL: int;
          readonly KRB_NT_SRV_HST: int;
          readonly KRB_NT_SRV_INST: int;
          readonly KRB_NT_SRV_XHST: int;
          readonly KRB_NT_UID: int;
          readonly KRB_NT_UNKNOWN: int;
          readonly NAME_COMPONENT_SEPARATOR: char;
          readonly NAME_COMPONENT_SEPARATOR_STR: string;
          readonly NAME_REALM_SEPARATOR: char;
          readonly NAME_REALM_SEPARATOR_STR: string;
          _NAME_STRINGS_OFFSET: long;
          readonly REALM_COMPONENT_SEPARATOR: char;
          readonly REALM_COMPONENT_SEPARATOR_STR: string;
          readonly TGS_DEFAULT_NT: int;
          readonly TGS_DEFAULT_SRV_NAME: string;
          _UNSAFE: jdk.internal.misc.Unsafe;
          new(nameType: int, nameStrings: string[], nameRealm: Realm): PrincipalName;
          new(nameParts: string[], realm: string): PrincipalName;
          new(encoding: security.util.DerValue, realm: Realm): PrincipalName;
          new(name: string, type: int, realm: string): PrincipalName;
          new(name: string, type: int): PrincipalName;
          new(name: string): PrincipalName;
          new(name: string, realm: string): PrincipalName;
        }
        let PrincipalName: _PrincipalName$$static;
        interface _PrincipalName {
          asn1Encode(): byte[];
          clone(): any;
          equals(o: any): boolean;
          getInstanceComponent(): string;
          getName(): string;
          getNameString(): string;
          getNameStrings(): string[];
          getNameType(): int;
          getPrincipalNameAsString(): string;
          getRealm(): Realm;
          getRealmAsString(): string;
          getRealmString(): string;
          getSalt(): string;
          hashCode(): int;
          isRealmDeduced(): boolean;
          match(pname: PrincipalName): boolean;
          toByteArray(): byte[][];
          toString(): string;
          writePrincipal(cos: krb5.internal.ccache.CCacheOutputStream): void;
          _nameRealm: Realm;
          _nameStrings: string[];
          _nameType: int;
          _realmDeduced: boolean;
          _salt: string;
        }
        interface PrincipalName extends CombineTypes<[_PrincipalName, java.lang.Cloneable, java.lang.Object]> {}
        interface _Realm$$static extends ClassLike {
          getDefault(): Realm;
          getRealmsList(cRealm: string, sRealm: string): string[];
          _isValidRealmString(name: string): boolean;
          parse(data: security.util.DerInputStream, explicitTag: byte, optional: boolean): Realm;
          _parseCapaths(cRealm: string, sRealm: string): string[];
          _parseHierarchy(cRealm: string, sRealm: string): string[];
          _parseRealm(name: string): string;
          parseRealmAtSeparator(name: string): string;
          parseRealmComponent(name: string): string;
          _subStringFrom(components: string[], from: int): string;
          readonly AUTODEDUCEREALM: boolean;
          new(name: string): Realm;
          new(encoding: security.util.DerValue): Realm;
        }
        let Realm: _Realm$$static;
        interface _Realm {
          asn1Encode(): byte[];
          clone(): any;
          equals(obj: any): boolean;
          hashCode(): int;
          toString(): string;
          _realm: string;
        }
        interface Realm extends CombineTypes<[_Realm, java.lang.Cloneable, java.lang.Object]> {}
        interface _RealmException$$static extends ClassLike {
          _serialVersionUID: long;
          new(i: int): RealmException;
          new(s: string): RealmException;
          new(i: int, s: string): RealmException;
          new(cause: java.lang.Throwable): RealmException;
        }
        let RealmException: _RealmException$$static;
        interface _RealmException {
        }
        interface RealmException extends CombineTypes<[_RealmException, sun.security.krb5.KrbException]> {}
        interface _SCDynamicStoreConfig$$static extends ClassLike {
          getConfig(): java.util.Hashtable<string,any>;
          _getKerberosConfig(): java.util.List<string>;
          _installNotificationCallback(): void;
          _v1(s: string): java.util.Vector<string>;
          _DEBUG: boolean;
          new(): SCDynamicStoreConfig;
        }
        let SCDynamicStoreConfig: _SCDynamicStoreConfig$$static;
        interface _SCDynamicStoreConfig {
        }
        interface SCDynamicStoreConfig extends CombineTypes<[_SCDynamicStoreConfig, java.lang.Object]> {}
      }
    }
  }
}
