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
        module sasl {
          module digest {
            interface _DigestMD5Base$$static extends ClassLike {
              _addDesParity(input: byte[], offset: int, len: int): byte[];
              _extractDirective(key: string, value: byte[], keyTable: string[], valueTable: byte[][], realmChoices: java.util.List<byte[]>, realmIndex: int): void;
              _generateNonce(): byte[];
              _getPlatformCiphers(): byte[];
              _isLws(b: byte): boolean;
              _makeDesKeys(input: byte[], desStrength: string): javax.crypto.SecretKey;
              _needEscape(str: string): boolean;
              _needEscape(ch: char): boolean;
              _nonceCountToHex(count: int): string;
              _parseDirectives(buf: byte[], keyTable: string[], realmChoices: java.util.List<byte[]>, realmIndex: int): byte[][];
              _quotedStringValue(str: string): string;
              _setParityBit(key: byte[]): void;
              _skipLws(buf: byte[], start: int): int;
              _writeQuotedStringValue(out: java.io.ByteArrayOutputStream, buf: byte[]): void;
              _CIPHER_MASKS: byte[];
              _CIPHER_TOKENS: string[];
              _DEFAULT_MAXBUF: int;
              _DES: int;
              _DES3: int;
              _DES_3_STRENGTH: byte;
              _DES_STRENGTH: byte;
              _DI_CLASS_NAME: string;
              _DP_CLASS_NAME: string;
              _EMPTY_BYTE_ARRAY: byte[];
              _ENCODED_NONCE_SIZE: int;
              _JCE_CIPHER_NAME: string[];
              _MASK: java.math.BigInteger;
              _MAX_CHALLENGE_LENGTH: int;
              _MAX_RESPONSE_LENGTH: int;
              _RAW_NONCE_SIZE: int;
              _RC4: int;
              _RC4_40: int;
              _RC4_40_STRENGTH: byte;
              _RC4_56: int;
              _RC4_56_STRENGTH: byte;
              _RC4_STRENGTH: byte;
              _SECURITY_LAYER_MARKER: string;
              _UNSET: byte;
              _pem_array: char[];
              _new(props: java.util.Map<string,any>, className: string, firstStep: int, digestUri: string, cbh: javax.security.auth.callback.CallbackHandler): DigestMD5Base;
            }
            let DigestMD5Base: _DigestMD5Base$$static;
            interface _DigestMD5Base {
              _binaryToHex(digest: byte[]): byte[];
              dispose(): void;
              _generateResponseValue(authMethod: string, digestUriValue: string, qopValue: string, usernameValue: string, realmValue: string, passwdValue: char[], nonceValue: byte[], cNonceValue: byte[], nonceCount: int, authzidValue: byte[]): byte[];
              getMechanismName(): string;
              getNegotiatedProperty(propName: string): any;
              _stringToByte_8859_1(str: string): byte[];
              unwrap(incoming: byte[], start: int, len: int): byte[];
              wrap(outgoing: byte[], start: int, len: int): byte[];
              _H_A1: byte[];
              _authzid: string;
              _cbh: javax.security.auth.callback.CallbackHandler;
              _digestUri: string;
              _encoding: java.nio.charset.Charset;
              _negotiatedCipher: string;
              _negotiatedQop: string;
              _negotiatedRealm: string;
              _negotiatedStrength: string;
              _nonce: byte[];
              _secCtx: SecurityCtx;
              _step: int;
              _useUTF8: boolean;
            }
            interface DigestMD5Base extends CombineTypes<[_DigestMD5Base, com.sun.security.sasl.util.AbstractSaslImpl]> {}
            interface _DigestMD5Base$DigestIntegrity$$static extends ClassLike {
              _CLIENT_INT_MAGIC: string;
              _SVR_INT_MAGIC: string;
              _new(this$0: DigestMD5Base, clientMode: boolean): DigestMD5Base$DigestIntegrity;
            }
            let DigestMD5Base$DigestIntegrity: _DigestMD5Base$DigestIntegrity$$static;
            interface _DigestMD5Base$DigestIntegrity {
              _generateIntegrityKeyPair(clientMode: boolean): void;
              _getHMAC(Ki: byte[], seqnum: byte[], msg: byte[], start: int, len: int): byte[];
              _incrementSeqNum(): void;
              unwrap(incoming: byte[], start: int, len: int): byte[];
              wrap(outgoing: byte[], start: int, len: int): byte[];
              _messageType: byte[];
              _myKi: byte[];
              _mySeqNum: int;
              _peerKi: byte[];
              _peerSeqNum: int;
              _sequenceNum: byte[];
              _this$0: DigestMD5Base;
            }
            interface DigestMD5Base$DigestIntegrity extends CombineTypes<[_DigestMD5Base$DigestIntegrity, java.lang.Object, com.sun.security.sasl.digest.SecurityCtx]> {}
            interface _DigestMD5Base$DigestPrivacy$$static extends ClassLike {
              _CLIENT_CONF_MAGIC: string;
              _SVR_CONF_MAGIC: string;
              _new(this$0: DigestMD5Base, clientMode: boolean): DigestMD5Base$DigestPrivacy;
            }
            let DigestMD5Base$DigestPrivacy: _DigestMD5Base$DigestPrivacy$$static;
            interface _DigestMD5Base$DigestPrivacy {
              _generatePrivacyKeyPair(clientMode: boolean): void;
              unwrap(incoming: byte[], start: int, len: int): byte[];
              wrap(outgoing: byte[], start: int, len: int): byte[];
              _decCipher: javax.crypto.Cipher;
              _encCipher: javax.crypto.Cipher;
              _this$0: DigestMD5Base;
            }
            interface DigestMD5Base$DigestPrivacy extends CombineTypes<[_DigestMD5Base$DigestPrivacy, com.sun.security.sasl.digest.DigestMD5Base$DigestIntegrity, com.sun.security.sasl.digest.SecurityCtx]> {}
            interface _DigestMD5Client$$static extends ClassLike {
              _getNonceCount(nonceValue: byte[]): int;
              _ALGORITHM: int;
              _CHARSET: int;
              _CIPHER: int;
              _CIPHER_PROPERTY: string;
              _DIRECTIVE_KEY: string[];
              _MAXBUF: int;
              _MY_CLASS_NAME: string;
              _NONCE: int;
              _QOP: int;
              _REALM: int;
              _RESPONSE_AUTH: int;
              _STALE: int;
              _new(authzid: string, protocol: string, serverName: string, props: java.util.Map<string,any>, cbh: javax.security.auth.callback.CallbackHandler): DigestMD5Client;
            }
            let DigestMD5Client: _DigestMD5Client$$static;
            interface _DigestMD5Client {
              _checkQopSupport(qopInChallenge: byte[], ciphersInChallenge: byte[]): void;
              _checkStrengthSupport(ciphersInChallenge: byte[]): void;
              _clearPassword(): void;
              evaluateChallenge(challengeData: byte[]): byte[];
              _findCipherAndStrength(supportedCiphers: byte[], tokens: string[]): string;
              _generateClientResponse(charset: byte[]): byte[];
              hasInitialResponse(): boolean;
              _processChallenge(challengeVal: byte[][], realmChoices: java.util.List<byte[]>): void;
              _validateResponseValue(fromServer: byte[]): void;
              _authzidBytes: byte[];
              _cnonce: byte[];
              _nonceCount: int;
              _passwd: char[];
              _specifiedCipher: string;
              _username: string;
            }
            interface DigestMD5Client extends CombineTypes<[_DigestMD5Client, javax.security.sasl.SaslClient, com.sun.security.sasl.digest.DigestMD5Base]> {}
            interface _DigestMD5Server$$static extends ClassLike {
              _uriMatches(thisUri: string, incomingUri: string): boolean;
              _ALGORITHM_DIRECTIVE: string;
              _AUTHZID: int;
              _AUTH_PARAM: int;
              _CHARSET: int;
              _CIPHER: int;
              _CNONCE: int;
              _DIGEST_URI: int;
              _DIRECTIVE_KEY: string[];
              _MAXBUF: int;
              _MY_CLASS_NAME: string;
              _NONCE: int;
              _NONCE_COUNT: int;
              _NONCE_COUNT_VALUE: int;
              _QOP: int;
              _REALM: int;
              _REALM_PROPERTY: string;
              _RESPONSE: int;
              _USERNAME: int;
              _UTF8_DIRECTIVE: string;
              _UTF8_PROPERTY: string;
              _new(protocol: string, serverName: string, props: java.util.Map<string,any>, cbh: javax.security.auth.callback.CallbackHandler): DigestMD5Server;
            }
            let DigestMD5Server: _DigestMD5Server$$static;
            interface _DigestMD5Server {
              evaluateResponse(response: byte[]): byte[];
              _generateChallenge(realms: java.util.List<string>, qopStr: string, cipherStr: string): byte[];
              _generateResponseAuth(username: string, passwd: char[], cnonce: byte[], nonceCount: int, authzidBytes: byte[]): byte[];
              getAuthorizationID(): string;
              _validateClientResponse(responseVal: byte[][]): byte[];
              _myCiphers: byte[];
              _serverRealms: java.util.List<string>;
              _specifiedQops: string;
            }
            interface DigestMD5Server extends CombineTypes<[_DigestMD5Server, com.sun.security.sasl.digest.DigestMD5Base, javax.security.sasl.SaslServer]> {}
            interface _FactoryImpl$$static extends ClassLike {
              _DIGEST_MD5: int;
              _mechPolicies: int[];
              _myMechs: string[];
              new(): FactoryImpl;
            }
            let FactoryImpl: _FactoryImpl$$static;
            interface _FactoryImpl {
              createSaslClient(mechs: string[], authorizationId: string, protocol: string, serverName: string, props: java.util.Map<string,any>, cbh: javax.security.auth.callback.CallbackHandler): javax.security.sasl.SaslClient;
              createSaslServer(mech: string, protocol: string, serverName: string, props: java.util.Map<string,any>, cbh: javax.security.auth.callback.CallbackHandler): javax.security.sasl.SaslServer;
              getMechanismNames(env: java.util.Map<string,any>): string[];
            }
            interface FactoryImpl extends CombineTypes<[_FactoryImpl, javax.security.sasl.SaslServerFactory, java.lang.Object, javax.security.sasl.SaslClientFactory]> {}
            interface _SecurityCtx$$static extends ClassLike {
            }
            let SecurityCtx: _SecurityCtx$$static;
            interface _SecurityCtx {
              unwrap(a0: byte[], a1: int, a2: int): byte[];
              wrap(a0: byte[], a1: int, a2: int): byte[];
            }
            interface SecurityCtx extends CombineTypes<[_SecurityCtx, java.lang.Object]> {}
          }
          module ntlm {
            interface _FactoryImpl$$static extends ClassLike {
              _mechPolicies: int[];
              _myMechs: string[];
              new(): FactoryImpl;
            }
            let FactoryImpl: _FactoryImpl$$static;
            interface _FactoryImpl {
              createSaslClient(mechs: string[], authorizationId: string, protocol: string, serverName: string, props: java.util.Map<string,any>, cbh: javax.security.auth.callback.CallbackHandler): javax.security.sasl.SaslClient;
              createSaslServer(mech: string, protocol: string, serverName: string, props: java.util.Map<string,any>, cbh: javax.security.auth.callback.CallbackHandler): javax.security.sasl.SaslServer;
              getMechanismNames(env: java.util.Map<string,any>): string[];
            }
            interface FactoryImpl extends CombineTypes<[_FactoryImpl, javax.security.sasl.SaslServerFactory, java.lang.Object, javax.security.sasl.SaslClientFactory]> {}
            interface _NTLMClient$$static extends ClassLike {
              _NTLM_DOMAIN: string;
              _NTLM_HOSTNAME: string;
              _NTLM_RANDOM: string;
              _NTLM_VERSION: string;
              _new(mech: string, authzid: string, protocol: string, serverName: string, props: java.util.Map<string,any>, cbh: javax.security.auth.callback.CallbackHandler): NTLMClient;
            }
            let NTLMClient: _NTLMClient$$static;
            interface _NTLMClient {
              dispose(): void;
              evaluateChallenge(challenge: byte[]): byte[];
              getMechanismName(): string;
              getNegotiatedProperty(propName: string): any;
              hasInitialResponse(): boolean;
              isComplete(): boolean;
              unwrap(incoming: byte[], offset: int, len: int): byte[];
              wrap(outgoing: byte[], offset: int, len: int): byte[];
              _client: security.ntlm.Client;
              _mech: string;
              _random: java.util.Random;
              _step: int;
            }
            interface NTLMClient extends CombineTypes<[_NTLMClient, javax.security.sasl.SaslClient, java.lang.Object]> {}
            interface _NTLMServer$$static extends ClassLike {
              _NTLM_DOMAIN: string;
              _NTLM_HOSTNAME: string;
              _NTLM_RANDOM: string;
              _NTLM_VERSION: string;
              _new(mech: string, protocol: string, serverName: string, props: java.util.Map<string,any>, cbh: javax.security.auth.callback.CallbackHandler): NTLMServer;
            }
            let NTLMServer: _NTLMServer$$static;
            interface _NTLMServer {
              dispose(): void;
              evaluateResponse(response: byte[]): byte[];
              getAuthorizationID(): string;
              getMechanismName(): string;
              getNegotiatedProperty(propName: string): any;
              isComplete(): boolean;
              unwrap(incoming: byte[], offset: int, len: int): byte[];
              wrap(outgoing: byte[], offset: int, len: int): byte[];
              _authzId: string;
              _hostname: string;
              _mech: string;
              _nonce: byte[];
              _random: java.util.Random;
              _server: security.ntlm.Server;
              _step: int;
              _target: string;
            }
            interface NTLMServer extends CombineTypes<[_NTLMServer, java.lang.Object, javax.security.sasl.SaslServer]> {}
          }
          module util {
            interface _AbstractSaslImpl$$static extends ClassLike {
              _combineMasks(_in: byte[]): byte;
              _findPreferredMask(pref: byte, _in: byte[]): byte;
              _intToNetworkByteOrder(num: int, buf: byte[], start: int, count: int): void;
              _networkByteOrderToInt(buf: byte[], start: int, count: int): int;
              _parseProp(propName: string, propVal: string, vals: string[], masks: byte[], tokens: string[], ignore: boolean): byte[];
              _parseQop(qop: string): byte[];
              _parseQop(qop: string, saveTokens: string[], ignore: boolean): byte[];
              _parseStrength(strength: string): byte[];
              _traceOutput(srcClass: string, srcMethod: string, traceTag: string, output: byte[]): void;
              _traceOutput(srcClass: string, srcMethod: string, traceTag: string, output: byte[], offset: int, len: int): void;
              _DEFAULT_QOP: byte[];
              _DEFAULT_STRENGTH: byte[];
              _HIGH_STRENGTH: byte;
              _INTEGRITY_ONLY_PROTECTION: byte;
              _LOW_STRENGTH: byte;
              _MAX_SEND_BUF: string;
              _MEDIUM_STRENGTH: byte;
              _NO_PROTECTION: byte;
              _PRIVACY_PROTECTION: byte;
              _QOP_MASKS: byte[];
              _QOP_TOKENS: string[];
              _SASL_LOGGER_NAME: string;
              _STRENGTH_MASKS: byte[];
              _STRENGTH_TOKENS: string[];
              _logger: java.util.logging.Logger;
              _new(props: java.util.Map<string,any>, className: string): AbstractSaslImpl;
            }
            let AbstractSaslImpl: _AbstractSaslImpl$$static;
            interface _AbstractSaslImpl {
              getNegotiatedProperty(propName: string): any;
              isComplete(): boolean;
              _allQop: byte;
              _completed: boolean;
              _integrity: boolean;
              _myClassName: string;
              _privacy: boolean;
              _qop: byte[];
              _rawSendSize: int;
              _recvMaxBufSize: int;
              _sendMaxBufSize: int;
              _strength: byte[];
            }
            interface AbstractSaslImpl extends CombineTypes<[_AbstractSaslImpl, java.lang.Object]> {}
            interface _PolicyUtils$$static extends ClassLike {
              checkPolicy(flags: int, props: java.util.Map<string,any>): boolean;
              filterMechs(mechs: string[], policies: int[], props: java.util.Map<string,any>): string[];
              readonly FORWARD_SECRECY: int;
              readonly NOACTIVE: int;
              readonly NOANONYMOUS: int;
              readonly NODICTIONARY: int;
              readonly NOPLAINTEXT: int;
              readonly PASS_CREDENTIALS: int;
            }
            let PolicyUtils: _PolicyUtils$$static;
            interface _PolicyUtils {
            }
            interface PolicyUtils extends CombineTypes<[_PolicyUtils, java.lang.Object]> {}
          }
          interface _ClientFactoryImpl$$static extends ClassLike {
            _CRAMMD5: int;
            _EXTERNAL: int;
            _PLAIN: int;
            _mechPolicies: int[];
            _myMechs: string[];
            new(): ClientFactoryImpl;
          }
          let ClientFactoryImpl: _ClientFactoryImpl$$static;
          interface _ClientFactoryImpl {
            createSaslClient(mechs: string[], authorizationId: string, protocol: string, serverName: string, props: java.util.Map<string,any>, cbh: javax.security.auth.callback.CallbackHandler): javax.security.sasl.SaslClient;
            getMechanismNames(props: java.util.Map<string,any>): string[];
            _getUserInfo(prefix: string, authorizationId: string, cbh: javax.security.auth.callback.CallbackHandler): any[];
          }
          interface ClientFactoryImpl extends CombineTypes<[_ClientFactoryImpl, java.lang.Object, javax.security.sasl.SaslClientFactory]> {}
          interface _CramMD5Base$$static extends ClassLike {
            _HMAC_MD5(key: byte[], text: byte[]): string;
            _initLogger(): void;
            _MD5_BLOCKSIZE: int;
            _SASL_LOGGER_NAME: string;
            _logger: java.util.logging.Logger;
            _new(): CramMD5Base;
          }
          let CramMD5Base: _CramMD5Base$$static;
          interface _CramMD5Base {
            _clearPassword(): void;
            dispose(): void;
            _finalize(): void;
            getMechanismName(): string;
            getNegotiatedProperty(propName: string): any;
            isComplete(): boolean;
            unwrap(incoming: byte[], offset: int, len: int): byte[];
            wrap(outgoing: byte[], offset: int, len: int): byte[];
            _aborted: boolean;
            _completed: boolean;
            _pw: byte[];
          }
          interface CramMD5Base extends CombineTypes<[_CramMD5Base, java.lang.Object]> {}
          interface _CramMD5Client$$static extends ClassLike {
            _new(authID: string, pw: byte[]): CramMD5Client;
          }
          let CramMD5Client: _CramMD5Client$$static;
          interface _CramMD5Client {
            evaluateChallenge(challengeData: byte[]): byte[];
            hasInitialResponse(): boolean;
            _username: string;
          }
          interface CramMD5Client extends CombineTypes<[_CramMD5Client, javax.security.sasl.SaslClient, com.sun.security.sasl.CramMD5Base]> {}
          interface _CramMD5Server$$static extends ClassLike {
            _new(protocol: string, serverFqdn: string, props: java.util.Map<string,any>, cbh: javax.security.auth.callback.CallbackHandler): CramMD5Server;
          }
          let CramMD5Server: _CramMD5Server$$static;
          interface _CramMD5Server {
            evaluateResponse(responseData: byte[]): byte[];
            getAuthorizationID(): string;
            _authzid: string;
            _cbh: javax.security.auth.callback.CallbackHandler;
            _challengeData: byte[];
            _fqdn: string;
          }
          interface CramMD5Server extends CombineTypes<[_CramMD5Server, javax.security.sasl.SaslServer, com.sun.security.sasl.CramMD5Base]> {}
          interface _ExternalClient$$static extends ClassLike {
            _new(authorizationID: string): ExternalClient;
          }
          let ExternalClient: _ExternalClient$$static;
          interface _ExternalClient {
            dispose(): void;
            evaluateChallenge(challengeData: byte[]): byte[];
            getMechanismName(): string;
            getNegotiatedProperty(propName: string): any;
            hasInitialResponse(): boolean;
            isComplete(): boolean;
            unwrap(incoming: byte[], offset: int, len: int): byte[];
            wrap(outgoing: byte[], offset: int, len: int): byte[];
            _completed: boolean;
            _username: byte[];
          }
          interface ExternalClient extends CombineTypes<[_ExternalClient, javax.security.sasl.SaslClient, java.lang.Object]> {}
          interface _PlainClient$$static extends ClassLike {
            _SEP: byte;
            _new(authorizationID: string, authenticationID: string, pw: byte[]): PlainClient;
          }
          let PlainClient: _PlainClient$$static;
          interface _PlainClient {
            _clearPassword(): void;
            dispose(): void;
            evaluateChallenge(challengeData: byte[]): byte[];
            _finalize(): void;
            getMechanismName(): string;
            getNegotiatedProperty(propName: string): any;
            hasInitialResponse(): boolean;
            isComplete(): boolean;
            unwrap(incoming: byte[], offset: int, len: int): byte[];
            wrap(outgoing: byte[], offset: int, len: int): byte[];
            _authenticationID: string;
            _authorizationID: string;
            _completed: boolean;
            _pw: byte[];
          }
          interface PlainClient extends CombineTypes<[_PlainClient, javax.security.sasl.SaslClient, java.lang.Object]> {}
          interface _Provider$$static extends ClassLike {
            _info: string;
            _serialVersionUID: long;
            new(): Provider;
          }
          let Provider: _Provider$$static;
          interface _Provider {
          }
          interface Provider extends CombineTypes<[_Provider, java.security.Provider]> {}
          interface _Provider$ProviderService$$static extends ClassLike {
            _new(p: java.security.Provider, type: string, algo: string, cn: string): Provider$ProviderService;
          }
          let Provider$ProviderService: _Provider$ProviderService$$static;
          interface _Provider$ProviderService {
            newInstance(ctrParamObj: any): any;
          }
          interface Provider$ProviderService extends CombineTypes<[_Provider$ProviderService, java.security.Provider$Service]> {}
          interface _ServerFactoryImpl$$static extends ClassLike {
            _CRAMMD5: int;
            _mechPolicies: int[];
            _myMechs: string[];
            new(): ServerFactoryImpl;
          }
          let ServerFactoryImpl: _ServerFactoryImpl$$static;
          interface _ServerFactoryImpl {
            createSaslServer(mech: string, protocol: string, serverName: string, props: java.util.Map<string,any>, cbh: javax.security.auth.callback.CallbackHandler): javax.security.sasl.SaslServer;
            getMechanismNames(props: java.util.Map<string,any>): string[];
          }
          interface ServerFactoryImpl extends CombineTypes<[_ServerFactoryImpl, javax.security.sasl.SaslServerFactory, java.lang.Object]> {}
        }
      }
    }
  }
  module javax {
    module security {
      module sasl {
        interface _AuthenticationException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): AuthenticationException;
          new(detail: string): AuthenticationException;
          new(detail: string, ex: java.lang.Throwable): AuthenticationException;
        }
        let AuthenticationException: _AuthenticationException$$static;
        interface _AuthenticationException {
        }
        interface AuthenticationException extends CombineTypes<[_AuthenticationException, javax.security.sasl.SaslException]> {}
        interface _AuthorizeCallback$$static extends ClassLike {
          _serialVersionUID: long;
          new(authnID: string, authzID: string): AuthorizeCallback;
        }
        let AuthorizeCallback: _AuthorizeCallback$$static;
        interface _AuthorizeCallback {
          getAuthenticationID(): string;
          getAuthorizationID(): string;
          getAuthorizedID(): string;
          isAuthorized(): boolean;
          setAuthorized(ok: boolean): void;
          setAuthorizedID(id: string): void;
          _authenticationID: string;
          _authorizationID: string;
          _authorized: boolean;
          _authorizedID: string;
        }
        interface AuthorizeCallback extends CombineTypes<[_AuthorizeCallback, java.lang.Object, javax.security.auth.callback.Callback, java.io.Serializable]> {}
        interface _RealmCallback$$static extends ClassLike {
          _serialVersionUID: long;
          new(prompt: string): RealmCallback;
          new(prompt: string, defaultRealmInfo: string): RealmCallback;
        }
        let RealmCallback: _RealmCallback$$static;
        interface _RealmCallback {
        }
        interface RealmCallback extends CombineTypes<[_RealmCallback, javax.security.auth.callback.TextInputCallback]> {}
        interface _RealmChoiceCallback$$static extends ClassLike {
          _serialVersionUID: long;
          new(prompt: string, choices: string[], defaultChoice: int, multiple: boolean): RealmChoiceCallback;
        }
        let RealmChoiceCallback: _RealmChoiceCallback$$static;
        interface _RealmChoiceCallback {
        }
        interface RealmChoiceCallback extends CombineTypes<[_RealmChoiceCallback, javax.security.auth.callback.ChoiceCallback]> {}
        interface _Sasl$$static extends ClassLike {
          createSaslClient(mechanisms: string[], authorizationId: string, protocol: string, serverName: string, props: java.util.Map<string,any>, cbh: security.auth.callback.CallbackHandler): SaslClient;
          createSaslServer(mechanism: string, protocol: string, serverName: string, props: java.util.Map<string,any>, cbh: security.auth.callback.CallbackHandler): SaslServer;
          _getFactories(serviceName: string): java.util.Set<any>;
          getSaslClientFactories(): java.util.Enumeration<SaslClientFactory>;
          getSaslServerFactories(): java.util.Enumeration<SaslServerFactory>;
          _isDisabled(name: string): boolean;
          _loadFactory(service: java.security.Provider$Service): any;
          readonly BOUND_SERVER_NAME: string;
          readonly CREDENTIALS: string;
          readonly MAX_BUFFER: string;
          readonly POLICY_FORWARD_SECRECY: string;
          readonly POLICY_NOACTIVE: string;
          readonly POLICY_NOANONYMOUS: string;
          readonly POLICY_NODICTIONARY: string;
          readonly POLICY_NOPLAINTEXT: string;
          readonly POLICY_PASS_CREDENTIALS: string;
          readonly QOP: string;
          readonly RAW_SEND_SIZE: string;
          readonly REUSE: string;
          _SASL_LOGGER_NAME: string;
          readonly SERVER_AUTH: string;
          readonly STRENGTH: string;
          _disabledMechanisms: java.util.List<string>;
          _logger: java.util.logging.Logger;
        }
        let Sasl: _Sasl$$static;
        interface _Sasl {
        }
        interface Sasl extends CombineTypes<[_Sasl, java.lang.Object]> {}
        interface _SaslClient$$static extends ClassLike {
        }
        let SaslClient: _SaslClient$$static;
        interface _SaslClient {
          dispose(): void;
          evaluateChallenge(a0: byte[]): byte[];
          getMechanismName(): string;
          getNegotiatedProperty(a0: string): any;
          hasInitialResponse(): boolean;
          isComplete(): boolean;
          unwrap(a0: byte[], a1: int, a2: int): byte[];
          wrap(a0: byte[], a1: int, a2: int): byte[];
        }
        interface SaslClient extends CombineTypes<[_SaslClient, java.lang.Object]> {}
        interface _SaslClientFactory$$static extends ClassLike {
        }
        let SaslClientFactory: _SaslClientFactory$$static;
        interface _SaslClientFactory {
          createSaslClient(a0: string[], a1: string, a2: string, a3: string, a4: java.util.Map<string,any>, a5: security.auth.callback.CallbackHandler): SaslClient;
          getMechanismNames(a0: java.util.Map<string,any>): string[];
        }
        interface SaslClientFactory extends CombineTypes<[_SaslClientFactory, java.lang.Object]> {}
        interface _SaslException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): SaslException;
          new(detail: string): SaslException;
          new(detail: string, ex: java.lang.Throwable): SaslException;
        }
        let SaslException: _SaslException$$static;
        interface _SaslException {
          getCause(): java.lang.Throwable;
          initCause(cause: java.lang.Throwable): java.lang.Throwable;
          toString(): string;
          __exception: java.lang.Throwable;
        }
        interface SaslException extends CombineTypes<[_SaslException, java.io.IOException]> {}
        interface _SaslServer$$static extends ClassLike {
        }
        let SaslServer: _SaslServer$$static;
        interface _SaslServer {
          dispose(): void;
          evaluateResponse(a0: byte[]): byte[];
          getAuthorizationID(): string;
          getMechanismName(): string;
          getNegotiatedProperty(a0: string): any;
          isComplete(): boolean;
          unwrap(a0: byte[], a1: int, a2: int): byte[];
          wrap(a0: byte[], a1: int, a2: int): byte[];
        }
        interface SaslServer extends CombineTypes<[_SaslServer, java.lang.Object]> {}
        interface _SaslServerFactory$$static extends ClassLike {
        }
        let SaslServerFactory: _SaslServerFactory$$static;
        interface _SaslServerFactory {
          createSaslServer(a0: string, a1: string, a2: string, a3: java.util.Map<string,any>, a4: security.auth.callback.CallbackHandler): SaslServer;
          getMechanismNames(a0: java.util.Map<string,any>): string[];
        }
        interface SaslServerFactory extends CombineTypes<[_SaslServerFactory, java.lang.Object]> {}
      }
    }
  }
}
