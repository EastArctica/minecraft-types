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
      module security {
        module jgss {
          interface _AuthorizationDataEntry$$static extends ClassLike {
            new(type: int, data: byte[]): AuthorizationDataEntry;
          }
          let AuthorizationDataEntry: _AuthorizationDataEntry$$static;
          interface _AuthorizationDataEntry {
            getData(): byte[];
            getType(): int;
            toString(): string;
            _data: byte[];
            _type: int;
          }
          interface AuthorizationDataEntry extends CombineTypes<[_AuthorizationDataEntry, java.lang.Object]> {}
          interface _ExtendedGSSContext$$static extends ClassLike {
          }
          let ExtendedGSSContext: _ExtendedGSSContext$$static;
          interface _ExtendedGSSContext {
            getDelegPolicyState(): boolean;
            inquireSecContext(a0: InquireType): any;
            requestDelegPolicy(a0: boolean): void;
          }
          interface ExtendedGSSContext extends CombineTypes<[_ExtendedGSSContext, java.lang.Object, org.ietf.jgss.GSSContext]> {}
          interface _ExtendedGSSContextImpl$$static extends ClassLike {
            new(old: sun.security.jgss.GSSContextImpl): ExtendedGSSContextImpl;
          }
          let ExtendedGSSContextImpl: _ExtendedGSSContextImpl$$static;
          interface _ExtendedGSSContextImpl {
            inquireSecContext(type: InquireType): any;
          }
          interface ExtendedGSSContextImpl extends CombineTypes<[_ExtendedGSSContextImpl, sun.security.jgss.GSSContextImpl, com.sun.security.jgss.ExtendedGSSContext]> {}
          interface _ExtendedGSSCredential$$static extends ClassLike {
          }
          let ExtendedGSSCredential: _ExtendedGSSCredential$$static;
          interface _ExtendedGSSCredential {
            impersonate(a0: org.ietf.jgss.GSSName): org.ietf.jgss.GSSCredential;
(a0: org.ietf.jgss.GSSName): org.ietf.jgss.GSSCredential;
          }
          interface ExtendedGSSCredential extends CombineTypes<[_ExtendedGSSCredential, org.ietf.jgss.GSSCredential, java.lang.Object]> {}
          interface _ExtendedGSSCredentialImpl$$static extends ClassLike {
            new(old: sun.security.jgss.GSSCredentialImpl): ExtendedGSSCredentialImpl;
          }
          let ExtendedGSSCredentialImpl: _ExtendedGSSCredentialImpl$$static;
          interface _ExtendedGSSCredentialImpl {
          }
          interface ExtendedGSSCredentialImpl extends CombineTypes<[_ExtendedGSSCredentialImpl, com.sun.security.jgss.ExtendedGSSCredential, sun.security.jgss.GSSCredentialImpl]> {}
          interface _Extender$$static extends ClassLike {
            _new(): Extender;
          }
          let Extender: _Extender$$static;
          interface _Extender {
            wrap(cred: org.ietf.jgss.GSSCredential): org.ietf.jgss.GSSCredential;
            wrap(ctxt: org.ietf.jgss.GSSContext): org.ietf.jgss.GSSContext;
          }
          interface Extender extends CombineTypes<[_Extender, sun.security.jgss.JgssExtender]> {}
          interface _GSSUtil$$static extends ClassLike {
            createSubject(principals: org.ietf.jgss.GSSName, credentials: org.ietf.jgss.GSSCredential): javax.security.auth.Subject;
          }
          let GSSUtil: _GSSUtil$$static;
          interface _GSSUtil {
          }
          interface GSSUtil extends CombineTypes<[_GSSUtil, java.lang.Object]> {}
          interface _InquireSecContextPermission$$static extends ClassLike {
            _serialVersionUID: long;
            new(name: string): InquireSecContextPermission;
          }
          let InquireSecContextPermission: _InquireSecContextPermission$$static;
          interface _InquireSecContextPermission {
          }
          interface InquireSecContextPermission extends CombineTypes<[_InquireSecContextPermission, java.security.BasicPermission]> {}
          interface _InquireType$$static extends ClassLike {
            valueOf(name: string): InquireType;
            values(): InquireType[];
            readonly KRB5_GET_AUTHTIME: InquireType;
            readonly KRB5_GET_AUTHZ_DATA: InquireType;
            readonly KRB5_GET_KRB_CRED: InquireType;
            readonly KRB5_GET_SESSION_KEY: InquireType;
            readonly KRB5_GET_SESSION_KEY_EX: InquireType;
            readonly KRB5_GET_TKT_FLAGS: InquireType;
          }
          let InquireType: _InquireType$$static;
          interface _InquireType {
          }
          interface InquireType extends CombineTypes<[_InquireType]> {}
        }
        module sasl {
          module gsskerb {
            interface _FactoryImpl$$static extends ClassLike {
              _GSS_KERB_V5: int;
              _mechPolicies: int[];
              _myMechs: string[];
              new(): FactoryImpl;
            }
            let FactoryImpl: _FactoryImpl$$static;
            interface _FactoryImpl {
              createSaslClient(mechs: string[], authorizationId: string, protocol: string, serverName: string, props: java.util.Map<string,any>, cbh: javax.security.auth.callback.CallbackHandler): javax.security.sasl.SaslClient;
              createSaslServer(mech: string, protocol: string, serverName: string, props: java.util.Map<string,any>, cbh: javax.security.auth.callback.CallbackHandler): javax.security.sasl.SaslServer;
              getMechanismNames(props: java.util.Map<string,any>): string[];
            }
            interface FactoryImpl extends CombineTypes<[_FactoryImpl, javax.security.sasl.SaslServerFactory, java.lang.Object, javax.security.sasl.SaslClientFactory]> {}
            interface _GssKrb5Base$$static extends ClassLike {
              _EMPTY: byte[];
              _JGSS_QOP: int;
              _KRB5_OID: org.ietf.jgss.Oid;
              _KRB5_OID_STR: string;
              _new(props: java.util.Map<string,any>, className: string): GssKrb5Base;
            }
            let GssKrb5Base: _GssKrb5Base$$static;
            interface _GssKrb5Base {
              _checkMessageProp(label: string, msgProp: org.ietf.jgss.MessageProp): void;
              dispose(): void;
              _finalize(): void;
              getMechanismName(): string;
              getNegotiatedProperty(propName: string): any;
              unwrap(incoming: byte[], start: int, len: int): byte[];
              wrap(outgoing: byte[], start: int, len: int): byte[];
              _secCtx: org.ietf.jgss.GSSContext;
            }
            interface GssKrb5Base extends CombineTypes<[_GssKrb5Base, com.sun.security.sasl.util.AbstractSaslImpl]> {}
            interface _GssKrb5Client$$static extends ClassLike {
              _MY_CLASS_NAME: string;
              _new(authzID: string, protocol: string, serverName: string, props: java.util.Map<string,any>, cbh: javax.security.auth.callback.CallbackHandler): GssKrb5Client;
            }
            let GssKrb5Client: _GssKrb5Client$$static;
            interface _GssKrb5Client {
              _doFinalHandshake(challengeData: byte[]): byte[];
              evaluateChallenge(challengeData: byte[]): byte[];
              hasInitialResponse(): boolean;
              _authzID: byte[];
              _finalHandshake: boolean;
            }
            interface GssKrb5Client extends CombineTypes<[_GssKrb5Client, javax.security.sasl.SaslClient, com.sun.security.sasl.gsskerb.GssKrb5Base]> {}
            interface _GssKrb5Server$$static extends ClassLike {
              _MY_CLASS_NAME: string;
              _new(protocol: string, serverName: string, props: java.util.Map<string,any>, cbh: javax.security.auth.callback.CallbackHandler): GssKrb5Server;
            }
            let GssKrb5Server: _GssKrb5Server$$static;
            interface _GssKrb5Server {
              _doHandshake1(responseData: byte[]): byte[];
              _doHandshake2(responseData: byte[]): byte[];
              evaluateResponse(responseData: byte[]): byte[];
              getAuthorizationID(): string;
              getNegotiatedProperty(propName: string): any;
              _authzid: string;
              _cbh: javax.security.auth.callback.CallbackHandler;
              _handshakeStage: int;
              _me: string;
              _peer: string;
              _protocolSaved: string;
            }
            interface GssKrb5Server extends CombineTypes<[_GssKrb5Server, javax.security.sasl.SaslServer, com.sun.security.sasl.gsskerb.GssKrb5Base]> {}
            interface _JdkSASL$$static extends ClassLike {
              _info: string;
              _serialVersionUID: long;
              new(): JdkSASL;
            }
            let JdkSASL: _JdkSASL$$static;
            interface _JdkSASL {
            }
            interface JdkSASL extends CombineTypes<[_JdkSASL, java.security.Provider]> {}
            interface _JdkSASL$ProviderService$$static extends ClassLike {
              _new(p: java.security.Provider, type: string, algo: string, cn: string): JdkSASL$ProviderService;
            }
            let JdkSASL$ProviderService: _JdkSASL$ProviderService$$static;
            interface _JdkSASL$ProviderService {
              newInstance(ctrParamObj: any): any;
            }
            interface JdkSASL$ProviderService extends CombineTypes<[_JdkSASL$ProviderService, java.security.Provider$Service]> {}
          }
        }
      }
    }
  }
}
