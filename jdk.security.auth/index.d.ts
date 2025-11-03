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
        module auth {
          module callback {
            interface _TextCallbackHandler$$static extends ClassLike {
              new(): TextCallbackHandler;
            }
            let TextCallbackHandler: _TextCallbackHandler$$static;
            interface _TextCallbackHandler {
              handle(callbacks: javax.security.auth.callback.Callback[]): void;
              _consoleHandler: javax.security.auth.callback.CallbackHandler;
            }
            interface TextCallbackHandler extends CombineTypes<[_TextCallbackHandler, javax.security.auth.callback.CallbackHandler, java.lang.Object]> {}
          }
          module login {
            interface _ConfigFile$$static extends ClassLike {
              new(): ConfigFile;
              new(uri: java.net.URI): ConfigFile;
            }
            let ConfigFile: _ConfigFile$$static;
            interface _ConfigFile {
              getAppConfigurationEntry(applicationName: string): javax.security.auth.login.AppConfigurationEntry[];
              refresh(): void;
              _spi: sun.security.provider.ConfigFile$Spi;
            }
            interface ConfigFile extends CombineTypes<[_ConfigFile, javax.security.auth.login.Configuration]> {}
          }
          module module {
            interface _Crypt$$static extends ClassLike {
              main(arg: string[]): void;
              _FP: byte[];
              _IP: byte[];
              _P: byte[];
              _PC1_C: byte[];
              _PC1_D: byte[];
              _PC2_C: byte[];
              _PC2_D: byte[];
              _S: byte[][];
              _e2: byte[];
              _shifts: byte[];
              new(): Crypt;
            }
            let Crypt: _Crypt$$static;
            interface _Crypt {
              crypt(pw: byte[], salt: byte[]): byte[];
              _encrypt(block: byte[], fake: int): void;
              _setkey(key: byte[]): void;
              _C: byte[];
              _D: byte[];
              _E: byte[];
              _KS: byte[];
              _L: byte[];
              _f: byte[];
              _preS: byte[];
              _tempL: byte[];
            }
            interface Crypt extends CombineTypes<[_Crypt, java.lang.Object]> {}
            interface _JndiLoginModule$$static extends ClassLike {
              _CRYPT: string;
              _GROUP_ID: string;
              _NAME: string;
              _PWD: string;
              _USER_GID: string;
              _USER_PWD: string;
              _USER_UID: string;
              new(): JndiLoginModule;
            }
            let JndiLoginModule: _JndiLoginModule$$static;
            interface _JndiLoginModule {
              abort(): boolean;
              _attemptAuthentication(getPasswdFromSharedState: boolean): void;
              _cleanState(): void;
              commit(): boolean;
              _getUsernamePassword(getPasswdFromSharedState: boolean): void;
              initialize(subject: javax.security.auth.Subject, callbackHandler: javax.security.auth.callback.CallbackHandler, sharedState: java.util.Map<string,any>, options: java.util.Map<string,any>): void;
              login(): boolean;
              logout(): boolean;
              _verifyPassword(encryptedPassword: string, password: string): boolean;
              _GIDPrincipal: UnixNumericGroupPrincipal;
              readonly GROUP_PROVIDER: string;
              _UIDPrincipal: UnixNumericUserPrincipal;
              readonly USER_PROVIDER: string;
              _callbackHandler: javax.security.auth.callback.CallbackHandler;
              _clearPass: boolean;
              _commitSucceeded: boolean;
              _ctx: javax.naming.directory.DirContext;
              _debug: boolean;
              _groupProvider: string;
              _options: java.util.Map<string,any>;
              _password: char[];
              _sharedState: java.util.Map<string,any>;
              _storePass: boolean;
              _strongDebug: boolean;
              _subject: javax.security.auth.Subject;
              _succeeded: boolean;
              _supplementaryGroups: java.util.LinkedList<UnixNumericGroupPrincipal>;
              _tryFirstPass: boolean;
              _useFirstPass: boolean;
              _userPrincipal: UnixPrincipal;
              _userProvider: string;
              _username: string;
            }
            interface JndiLoginModule extends CombineTypes<[_JndiLoginModule, javax.security.auth.spi.LoginModule, java.lang.Object]> {}
            interface _KeyStoreLoginModule$$static extends ClassLike {
              _newURL(spec: string): java.net.URL;
              _AUTHENTICATED: int;
              _INITIALIZED: int;
              _LOGGED_IN: int;
              _NONE: string;
              _NORMAL: int;
              _P11KEYSTORE: string;
              _PROTECTED_PATH: int;
              _TOKEN: int;
              _UNINITIALIZED: int;
              _bannerCallback: javax.security.auth.callback.TextOutputCallback;
              new(): KeyStoreLoginModule;
            }
            let KeyStoreLoginModule: _KeyStoreLoginModule$$static;
            interface _KeyStoreLoginModule {
              abort(): boolean;
              _checkAlias(): void;
              _checkKeyPass(): void;
              _checkStorePass(): void;
              commit(): boolean;
              _commitInternal(): boolean;
              _debugPrint(message: string): void;
              _getAliasAndPasswords(env: int): void;
              _getKeyStoreInfo(): void;
              initialize(subject: javax.security.auth.Subject, callbackHandler: javax.security.auth.callback.CallbackHandler, sharedState: java.util.Map<string,any>, options: java.util.Map<string,any>): void;
              login(): boolean;
              logout(): boolean;
              _logoutInternal(): void;
              _processOptions(): void;
              _prompt(aliasCallback: javax.security.auth.callback.NameCallback, storePassCallback: javax.security.auth.callback.PasswordCallback, keyPassCallback: javax.security.auth.callback.PasswordCallback): void;
              _saveAlias(cb: javax.security.auth.callback.NameCallback): void;
              _saveKeyPass(c: javax.security.auth.callback.PasswordCallback): void;
              _saveStorePass(c: javax.security.auth.callback.PasswordCallback): void;
              _callbackHandler: javax.security.auth.callback.CallbackHandler;
              _certP: java.security.cert.CertPath;
              _confirmationCallback: javax.security.auth.callback.ConfirmationCallback;
              _debug: boolean;
              _fromKeyStore: java.security.cert.Certificate[];
              _keyStore: java.security.KeyStore;
              _keyStoreAlias: string;
              _keyStorePassword: char[];
              _keyStorePasswordURL: string;
              _keyStoreProvider: string;
              _keyStoreType: string;
              _keyStoreURL: string;
              _nullStream: boolean;
              _options: java.util.Map<string,any>;
              _principal: javax.security.auth.x500.X500Principal;
              _privateCredential: javax.security.auth.x500.X500PrivateCredential;
              _privateKeyPassword: char[];
              _privateKeyPasswordURL: string;
              _protectedPath: boolean;
              _sharedState: java.util.Map<string,any>;
              _status: int;
              _subject: javax.security.auth.Subject;
              _token: boolean;
            }
            interface KeyStoreLoginModule extends CombineTypes<[_KeyStoreLoginModule, javax.security.auth.spi.LoginModule, java.lang.Object]> {}
            interface _Krb5LoginModule$$static extends ClassLike {
              _isCurrent(creds: sun.security.krb5.Credentials): boolean;
              _isOld(creds: sun.security.krb5.Credentials): boolean;
              _NAME: string;
              _PWD: string;
              new(): Krb5LoginModule;
            }
            let Krb5LoginModule: _Krb5LoginModule$$static;
            interface _Krb5LoginModule {
              abort(): boolean;
              _attemptAuthentication(getPasswdFromSharedState: boolean): void;
              _cleanKerberosCred(): void;
              _cleanState(): void;
              commit(): boolean;
              initialize(subject: javax.security.auth.Subject, callbackHandler: javax.security.auth.callback.CallbackHandler, sharedState: java.util.Map<string,any>, options: java.util.Map<string,any>): void;
              login(): boolean;
              logout(): boolean;
              _promptForName(getPasswdFromSharedState: boolean): void;
              _promptForPass(getPasswdFromSharedState: boolean): void;
              _renewCredentials(creds: sun.security.krb5.Credentials): sun.security.krb5.Credentials;
              _validateConfiguration(): void;
              _callbackHandler: javax.security.auth.callback.CallbackHandler;
              _clearPass: boolean;
              _commitSucceeded: boolean;
              _cred: sun.security.krb5.Credentials;
              _debug: boolean;
              _doNotPrompt: boolean;
              _encKeys: sun.security.krb5.EncryptionKey[];
              _isInitiator: boolean;
              _kerbClientPrinc: javax.security.auth.kerberos.KerberosPrincipal;
              _kerbKeys: javax.security.auth.kerberos.KerberosKey[];
              _kerbTicket: javax.security.auth.kerberos.KerberosTicket;
              _keyTabName: string;
              _krb5PrincName: module$stringBuffer;
              _ktab: javax.security.auth.kerberos.KeyTab;
              _options: java.util.Map<string,any>;
              _password: char[];
              _princName: string;
              _principal: sun.security.krb5.PrincipalName;
              _refreshKrb5Config: boolean;
              _renewTGT: boolean;
              _sharedState: java.util.Map<string,any>;
              _storeKey: boolean;
              _storePass: boolean;
              _subject: javax.security.auth.Subject;
              _succeeded: boolean;
              _ticketCacheName: string;
              _tryFirstPass: boolean;
              _unboundServer: boolean;
              _useFirstPass: boolean;
              _useKeyTab: boolean;
              _useTicketCache: boolean;
              _username: string;
            }
            interface Krb5LoginModule extends CombineTypes<[_Krb5LoginModule, javax.security.auth.spi.LoginModule, java.lang.Object]> {}
            interface _LdapLoginModule$$static extends ClassLike {
              _AUTHC_IDENTITY: string;
              _AUTHZ_IDENTITY: string;
              _PASSWORD_KEY: string;
              _USERNAME_KEY: string;
              _USERNAME_PATTERN: java.util.regex.Pattern;
              _USERNAME_TOKEN: string;
              _USER_FILTER: string;
              _USER_PROVIDER: string;
              new(): LdapLoginModule;
            }
            let LdapLoginModule: _LdapLoginModule$$static;
            interface _LdapLoginModule {
              abort(): boolean;
              _attemptAuthentication(getPasswdFromSharedState: boolean): void;
              _cleanState(): void;
              commit(): boolean;
              _escapeUsernameChars(): string;
              _findUserDN(ctx: javax.naming.ldap.LdapContext): string;
              _getUsernamePassword(getPasswdFromSharedState: boolean): void;
              initialize(subject: javax.security.auth.Subject, callbackHandler: javax.security.auth.callback.CallbackHandler, sharedState: java.util.Map<string,any>, options: java.util.Map<string,any>): void;
              login(): boolean;
              logout(): boolean;
              _replaceUsernameToken(matcher: java.util.regex.Matcher, string: string, username: string): string;
              _authFirst: boolean;
              _authOnly: boolean;
              _authcIdentity: string;
              _authzIdentity: string;
              _authzIdentityAttr: string;
              _authzPrincipal: UserPrincipal;
              _callbackHandler: javax.security.auth.callback.CallbackHandler;
              _clearPass: boolean;
              _commitSucceeded: boolean;
              _constraints: javax.naming.directory.SearchControls;
              _ctx: javax.naming.ldap.LdapContext;
              _debug: boolean;
              _filterMatcher: java.util.regex.Matcher;
              _identityMatcher: java.util.regex.Matcher;
              _ldapEnvironment: java.util.Hashtable<string,any>;
              _ldapPrincipal: LdapPrincipal;
              _options: java.util.Map<string,any>;
              _password: char[];
              _sharedState: java.util.Map<string,any>;
              _storePass: boolean;
              _subject: javax.security.auth.Subject;
              _succeeded: boolean;
              _tryFirstPass: boolean;
              _useFirstPass: boolean;
              _useSSL: boolean;
              _userFilter: string;
              _userPrincipal: UserPrincipal;
              _userProvider: string;
              _username: string;
            }
            interface LdapLoginModule extends CombineTypes<[_LdapLoginModule, javax.security.auth.spi.LoginModule, java.lang.Object]> {}
            interface _NTLoginModule$$static extends ClassLike {
              new(): NTLoginModule;
            }
            let NTLoginModule: _NTLoginModule$$static;
            interface _NTLoginModule {
              abort(): boolean;
              commit(): boolean;
              initialize(subject: javax.security.auth.Subject, callbackHandler: javax.security.auth.callback.CallbackHandler, sharedState: java.util.Map<string,any>, options: java.util.Map<string,any>): void;
              login(): boolean;
              logout(): boolean;
              _callbackHandler: javax.security.auth.callback.CallbackHandler;
              _commitSucceeded: boolean;
              _debug: boolean;
              _debugNative: boolean;
              _domainSID: NTSidDomainPrincipal;
              _groups: NTSidGroupPrincipal[];
              _iToken: NTNumericCredential;
              _ntSystem: NTSystem;
              _options: java.util.Map<string,any>;
              _primaryGroup: NTSidPrimaryGroupPrincipal;
              _sharedState: java.util.Map<string,any>;
              _subject: javax.security.auth.Subject;
              _succeeded: boolean;
              _userDomain: NTDomainPrincipal;
              _userPrincipal: NTUserPrincipal;
              _userSID: NTSidUserPrincipal;
            }
            interface NTLoginModule extends CombineTypes<[_NTLoginModule, javax.security.auth.spi.LoginModule, java.lang.Object]> {}
            interface _NTSystem$$static extends ClassLike {
              new(): NTSystem;
              _new(debug: boolean): NTSystem;
            }
            let NTSystem: _NTSystem$$static;
            interface _NTSystem {
              _getCurrent(a0: boolean): void;
              getDomain(): string;
              getDomainSID(): string;
              getGroupIDs(): string[];
              getImpersonationToken(): long;
              _getImpersonationToken0(): long;
              getName(): string;
              getPrimaryGroupID(): string;
              getUserSID(): string;
              _loadNative(): void;
              _domain: string;
              _domainSID: string;
              _groupIDs: string[];
              _impersonationToken: long;
              _primaryGroupID: string;
              _userName: string;
              _userSID: string;
            }
            interface NTSystem extends CombineTypes<[_NTSystem, java.lang.Object]> {}
            interface _UnixLoginModule$$static extends ClassLike {
              new(): UnixLoginModule;
            }
            let UnixLoginModule: _UnixLoginModule$$static;
            interface _UnixLoginModule {
              abort(): boolean;
              commit(): boolean;
              initialize(subject: javax.security.auth.Subject, callbackHandler: javax.security.auth.callback.CallbackHandler, sharedState: java.util.Map<string,any>, options: java.util.Map<string,any>): void;
              login(): boolean;
              logout(): boolean;
              _GIDPrincipal: UnixNumericGroupPrincipal;
              _UIDPrincipal: UnixNumericUserPrincipal;
              _callbackHandler: javax.security.auth.callback.CallbackHandler;
              _commitSucceeded: boolean;
              _debug: boolean;
              _options: java.util.Map<string,any>;
              _sharedState: java.util.Map<string,any>;
              _ss: UnixSystem;
              _subject: javax.security.auth.Subject;
              _succeeded: boolean;
              _supplementaryGroups: java.util.LinkedList<UnixNumericGroupPrincipal>;
              _userPrincipal: UnixPrincipal;
            }
            interface UnixLoginModule extends CombineTypes<[_UnixLoginModule, javax.security.auth.spi.LoginModule, java.lang.Object]> {}
            interface _UnixSystem$$static extends ClassLike {
              new(): UnixSystem;
            }
            let UnixSystem: _UnixSystem$$static;
            interface _UnixSystem {
              getGid(): long;
              getGroups(): long[];
              getUid(): long;
              _getUnixInfo(): void;
              getUsername(): string;
              _gid: long;
              _groups: long[];
              _uid: long;
              _username: string;
            }
            interface UnixSystem extends CombineTypes<[_UnixSystem, java.lang.Object]> {}
          }
          interface _LdapPrincipal$$static extends ClassLike {
            _serialVersionUID: long;
            new(name: string): LdapPrincipal;
          }
          let LdapPrincipal: _LdapPrincipal$$static;
          interface _LdapPrincipal {
            equals(object: any): boolean;
            _getLdapName(name: string): javax.naming.ldap.LdapName;
            getName(): string;
            hashCode(): int;
            _readObject(stream: java.io.ObjectInputStream): void;
            toString(): string;
            _name: javax.naming.ldap.LdapName;
            _nameString: string;
          }
          interface LdapPrincipal extends CombineTypes<[_LdapPrincipal, java.security.Principal, java.lang.Object, java.io.Serializable]> {}
          interface _NTDomainPrincipal$$static extends ClassLike {
            _serialVersionUID: long;
            new(name: string): NTDomainPrincipal;
          }
          let NTDomainPrincipal: _NTDomainPrincipal$$static;
          interface _NTDomainPrincipal {
            equals(o: any): boolean;
            getName(): string;
            hashCode(): int;
            _readObject(stream: java.io.ObjectInputStream): void;
            toString(): string;
            _name: string;
          }
          interface NTDomainPrincipal extends CombineTypes<[_NTDomainPrincipal, java.security.Principal, java.lang.Object, java.io.Serializable]> {}
          interface _NTNumericCredential$$static extends ClassLike {
            new(token: long): NTNumericCredential;
          }
          let NTNumericCredential: _NTNumericCredential$$static;
          interface _NTNumericCredential {
            equals(o: any): boolean;
            getToken(): long;
            hashCode(): int;
            toString(): string;
            _impersonationToken: long;
          }
          interface NTNumericCredential extends CombineTypes<[_NTNumericCredential, java.lang.Object]> {}
          interface _NTSid$$static extends ClassLike {
            _serialVersionUID: long;
            new(stringSid: string): NTSid;
          }
          let NTSid: _NTSid$$static;
          interface _NTSid {
            equals(o: any): boolean;
            getName(): string;
            hashCode(): int;
            _readObject(stream: java.io.ObjectInputStream): void;
            toString(): string;
            _sid: string;
          }
          interface NTSid extends CombineTypes<[_NTSid, java.security.Principal, java.lang.Object, java.io.Serializable]> {}
          interface _NTSidDomainPrincipal$$static extends ClassLike {
            _serialVersionUID: long;
            new(name: string): NTSidDomainPrincipal;
          }
          let NTSidDomainPrincipal: _NTSidDomainPrincipal$$static;
          interface _NTSidDomainPrincipal {
            equals(o: any): boolean;
            toString(): string;
          }
          interface NTSidDomainPrincipal extends CombineTypes<[_NTSidDomainPrincipal, com.sun.security.auth.NTSid]> {}
          interface _NTSidGroupPrincipal$$static extends ClassLike {
            _serialVersionUID: long;
            new(name: string): NTSidGroupPrincipal;
          }
          let NTSidGroupPrincipal: _NTSidGroupPrincipal$$static;
          interface _NTSidGroupPrincipal {
            equals(o: any): boolean;
            toString(): string;
          }
          interface NTSidGroupPrincipal extends CombineTypes<[_NTSidGroupPrincipal, com.sun.security.auth.NTSid]> {}
          interface _NTSidPrimaryGroupPrincipal$$static extends ClassLike {
            _serialVersionUID: long;
            new(name: string): NTSidPrimaryGroupPrincipal;
          }
          let NTSidPrimaryGroupPrincipal: _NTSidPrimaryGroupPrincipal$$static;
          interface _NTSidPrimaryGroupPrincipal {
            equals(o: any): boolean;
            toString(): string;
          }
          interface NTSidPrimaryGroupPrincipal extends CombineTypes<[_NTSidPrimaryGroupPrincipal, com.sun.security.auth.NTSid]> {}
          interface _NTSidUserPrincipal$$static extends ClassLike {
            _serialVersionUID: long;
            new(name: string): NTSidUserPrincipal;
          }
          let NTSidUserPrincipal: _NTSidUserPrincipal$$static;
          interface _NTSidUserPrincipal {
            equals(o: any): boolean;
            toString(): string;
          }
          interface NTSidUserPrincipal extends CombineTypes<[_NTSidUserPrincipal, com.sun.security.auth.NTSid]> {}
          interface _NTUserPrincipal$$static extends ClassLike {
            _serialVersionUID: long;
            new(name: string): NTUserPrincipal;
          }
          let NTUserPrincipal: _NTUserPrincipal$$static;
          interface _NTUserPrincipal {
            equals(o: any): boolean;
            getName(): string;
            hashCode(): int;
            _readObject(stream: java.io.ObjectInputStream): void;
            toString(): string;
            _name: string;
          }
          interface NTUserPrincipal extends CombineTypes<[_NTUserPrincipal, java.security.Principal, java.lang.Object, java.io.Serializable]> {}
          interface _PrincipalComparator$$static extends ClassLike {
          }
          let PrincipalComparator: _PrincipalComparator$$static;
          interface _PrincipalComparator {
            implies(a0: javax.security.auth.Subject): boolean;
(a0: javax.security.auth.Subject): boolean;
          }
          interface PrincipalComparator extends CombineTypes<[_PrincipalComparator, java.lang.Object]> {}
          interface _UnixNumericGroupPrincipal$$static extends ClassLike {
            _serialVersionUID: long;
            new(name: string, primaryGroup: boolean): UnixNumericGroupPrincipal;
            new(name: long, a1: boolean): UnixNumericGroupPrincipal;
          }
          let UnixNumericGroupPrincipal: _UnixNumericGroupPrincipal$$static;
          interface _UnixNumericGroupPrincipal {
            equals(o: any): boolean;
            getName(): string;
            hashCode(): int;
            isPrimaryGroup(): boolean;
            longValue(): long;
            _readObject(stream: java.io.ObjectInputStream): void;
            toString(): string;
            _name: string;
            _primaryGroup: boolean;
          }
          interface UnixNumericGroupPrincipal extends CombineTypes<[_UnixNumericGroupPrincipal, java.security.Principal, java.lang.Object, java.io.Serializable]> {}
          interface _UnixNumericUserPrincipal$$static extends ClassLike {
            _serialVersionUID: long;
            new(name: string): UnixNumericUserPrincipal;
            new(name: long): UnixNumericUserPrincipal;
          }
          let UnixNumericUserPrincipal: _UnixNumericUserPrincipal$$static;
          interface _UnixNumericUserPrincipal {
            equals(o: any): boolean;
            getName(): string;
            hashCode(): int;
            longValue(): long;
            _readObject(stream: java.io.ObjectInputStream): void;
            toString(): string;
            _name: string;
          }
          interface UnixNumericUserPrincipal extends CombineTypes<[_UnixNumericUserPrincipal, java.security.Principal, java.lang.Object, java.io.Serializable]> {}
          interface _UnixPrincipal$$static extends ClassLike {
            _serialVersionUID: long;
            new(name: string): UnixPrincipal;
          }
          let UnixPrincipal: _UnixPrincipal$$static;
          interface _UnixPrincipal {
            equals(o: any): boolean;
            getName(): string;
            hashCode(): int;
            _readObject(stream: java.io.ObjectInputStream): void;
            toString(): string;
            _name: string;
          }
          interface UnixPrincipal extends CombineTypes<[_UnixPrincipal, java.security.Principal, java.lang.Object, java.io.Serializable]> {}
          interface _UserPrincipal$$static extends ClassLike {
            _serialVersionUID: long;
            new(name: string): UserPrincipal;
          }
          let UserPrincipal: _UserPrincipal$$static;
          interface _UserPrincipal {
            equals(object: any): boolean;
            getName(): string;
            hashCode(): int;
            _readObject(stream: java.io.ObjectInputStream): void;
            toString(): string;
            _name: string;
          }
          interface UserPrincipal extends CombineTypes<[_UserPrincipal, java.security.Principal, java.lang.Object, java.io.Serializable]> {}
        }
      }
    }
  }
}
