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
    module security {
      module pkcs11 {
        module wrapper {
          interface _CK_AES_CTR_PARAMS$$static extends ClassLike {
            new(cb: byte[]): CK_AES_CTR_PARAMS;
          }
          let CK_AES_CTR_PARAMS: _CK_AES_CTR_PARAMS$$static;
          interface _CK_AES_CTR_PARAMS {
            toString(): string;
            _cb: byte[];
            _ulCounterBits: long;
          }
          interface CK_AES_CTR_PARAMS extends CombineTypes<[_CK_AES_CTR_PARAMS, java.lang.Object]> {}
          interface _CK_ATTRIBUTE$$static extends ClassLike {
            readonly DECRYPT_NULL: CK_ATTRIBUTE;
            readonly DECRYPT_TRUE: CK_ATTRIBUTE;
            readonly DERIVE_TRUE: CK_ATTRIBUTE;
            readonly ENCRYPT_NULL: CK_ATTRIBUTE;
            readonly ENCRYPT_TRUE: CK_ATTRIBUTE;
            readonly EXTRACTABLE_TRUE: CK_ATTRIBUTE;
            readonly SENSITIVE_FALSE: CK_ATTRIBUTE;
            readonly SIGN_RECOVER_TRUE: CK_ATTRIBUTE;
            readonly SIGN_TRUE: CK_ATTRIBUTE;
            readonly TOKEN_FALSE: CK_ATTRIBUTE;
            readonly UNWRAP_NULL: CK_ATTRIBUTE;
            readonly UNWRAP_TRUE: CK_ATTRIBUTE;
            readonly VERIFY_RECOVER_TRUE: CK_ATTRIBUTE;
            readonly VERIFY_TRUE: CK_ATTRIBUTE;
            readonly WRAP_NULL: CK_ATTRIBUTE;
            readonly WRAP_TRUE: CK_ATTRIBUTE;
            new(): CK_ATTRIBUTE;
            new(type: long): CK_ATTRIBUTE;
            new(type: long, a1: any): CK_ATTRIBUTE;
            new(type: long, a1: boolean): CK_ATTRIBUTE;
            new(type: long, a1: long): CK_ATTRIBUTE;
            new(type: long, a1: java.math.BigInteger): CK_ATTRIBUTE;
          }
          let CK_ATTRIBUTE: _CK_ATTRIBUTE$$static;
          interface _CK_ATTRIBUTE {
            getBigInteger(): java.math.BigInteger;
            getBoolean(): boolean;
            getByteArray(): byte[];
            getCharArray(): char[];
            getLong(): long;
            toString(): string;
            pValue: any;
            type: long;
          }
          interface CK_ATTRIBUTE extends CombineTypes<[_CK_ATTRIBUTE, java.lang.Object]> {}
          interface _CK_CCM_PARAMS$$static extends ClassLike {
            new(tagLen: int, iv: byte[], aad: byte[], dataLen: int): CK_CCM_PARAMS;
          }
          let CK_CCM_PARAMS: _CK_CCM_PARAMS$$static;
          interface _CK_CCM_PARAMS {
            toString(): string;
            _aad: byte[];
            _dataLen: long;
            _macLen: long;
            _nonce: byte[];
          }
          interface CK_CCM_PARAMS extends CombineTypes<[_CK_CCM_PARAMS, java.lang.Object]> {}
          interface _CK_CREATEMUTEX$$static extends ClassLike {
          }
          let CK_CREATEMUTEX: _CK_CREATEMUTEX$$static;
          interface _CK_CREATEMUTEX {
            CK_CREATEMUTEX(): any;
(): any;
          }
          interface CK_CREATEMUTEX extends CombineTypes<[_CK_CREATEMUTEX, java.lang.Object]> {}
          interface _CK_C_INITIALIZE_ARGS$$static extends ClassLike {
            new(): CK_C_INITIALIZE_ARGS;
          }
          let CK_C_INITIALIZE_ARGS: _CK_C_INITIALIZE_ARGS$$static;
          interface _CK_C_INITIALIZE_ARGS {
            CreateMutex: CK_CREATEMUTEX;
            DestroyMutex: CK_DESTROYMUTEX;
            LockMutex: CK_LOCKMUTEX;
            UnlockMutex: CK_UNLOCKMUTEX;
            flags: long;
            pReserved: any;
          }
          interface CK_C_INITIALIZE_ARGS extends CombineTypes<[_CK_C_INITIALIZE_ARGS, java.lang.Object]> {}
          interface _CK_DATE$$static extends ClassLike {
            new(year: char[], month: char[], day: char[]): CK_DATE;
          }
          let CK_DATE: _CK_DATE$$static;
          interface _CK_DATE {
            clone(): any;
            toString(): string;
            day: char[];
            month: char[];
            year: char[];
          }
          interface CK_DATE extends CombineTypes<[_CK_DATE, java.lang.Cloneable, java.lang.Object]> {}
          interface _CK_DESTROYMUTEX$$static extends ClassLike {
          }
          let CK_DESTROYMUTEX: _CK_DESTROYMUTEX$$static;
          interface _CK_DESTROYMUTEX {
            CK_DESTROYMUTEX(a0: any): void;
(a0: any): void;
          }
          interface CK_DESTROYMUTEX extends CombineTypes<[_CK_DESTROYMUTEX, java.lang.Object]> {}
          interface _CK_ECDH1_DERIVE_PARAMS$$static extends ClassLike {
            new(kdf: long, a1: byte[], pSharedData: byte[]): CK_ECDH1_DERIVE_PARAMS;
          }
          let CK_ECDH1_DERIVE_PARAMS: _CK_ECDH1_DERIVE_PARAMS$$static;
          interface _CK_ECDH1_DERIVE_PARAMS {
            toString(): string;
            kdf: long;
            pPublicData: byte[];
            pSharedData: byte[];
          }
          interface CK_ECDH1_DERIVE_PARAMS extends CombineTypes<[_CK_ECDH1_DERIVE_PARAMS, java.lang.Object]> {}
          interface _CK_ECDH2_DERIVE_PARAMS$$static extends ClassLike {
            new(): CK_ECDH2_DERIVE_PARAMS;
          }
          let CK_ECDH2_DERIVE_PARAMS: _CK_ECDH2_DERIVE_PARAMS$$static;
          interface _CK_ECDH2_DERIVE_PARAMS {
            toString(): string;
            hPrivateData: long;
            kdf: long;
            pPublicData: byte[];
            pPublicData2: byte[];
            pSharedData: byte[];
            ulPrivateDataLen: long;
          }
          interface CK_ECDH2_DERIVE_PARAMS extends CombineTypes<[_CK_ECDH2_DERIVE_PARAMS, java.lang.Object]> {}
          interface _CK_GCM_PARAMS$$static extends ClassLike {
            new(tagLenInBits: int, iv: byte[], aad: byte[]): CK_GCM_PARAMS;
          }
          let CK_GCM_PARAMS: _CK_GCM_PARAMS$$static;
          interface _CK_GCM_PARAMS {
            toString(): string;
            _aad: byte[];
            _iv: byte[];
            _tagBits: long;
          }
          interface CK_GCM_PARAMS extends CombineTypes<[_CK_GCM_PARAMS, java.lang.Object]> {}
          interface _CK_INFO$$static extends ClassLike {
            new(cryptoVer: CK_VERSION, vendor: char[], flags: long, a3: char[], libDesc: CK_VERSION): CK_INFO;
          }
          let CK_INFO: _CK_INFO$$static;
          interface _CK_INFO {
            toString(): string;
            cryptokiVersion: CK_VERSION;
            flags: long;
            libraryDescription: char[];
            libraryVersion: CK_VERSION;
            manufacturerID: char[];
          }
          interface CK_INFO extends CombineTypes<[_CK_INFO, java.lang.Object]> {}
          interface _CK_LOCKMUTEX$$static extends ClassLike {
          }
          let CK_LOCKMUTEX: _CK_LOCKMUTEX$$static;
          interface _CK_LOCKMUTEX {
            CK_LOCKMUTEX(a0: any): void;
(a0: any): void;
          }
          interface CK_LOCKMUTEX extends CombineTypes<[_CK_LOCKMUTEX, java.lang.Object]> {}
          interface _CK_MECHANISM$$static extends ClassLike {
            new(mechanism: long): CK_MECHANISM;
            new(mechanism: long, a1: byte[]): CK_MECHANISM;
            new(mechanism: long, a1: java.math.BigInteger): CK_MECHANISM;
            new(mechanism: long, a1: CK_VERSION): CK_MECHANISM;
            new(mechanism: long, a1: CK_SSL3_MASTER_KEY_DERIVE_PARAMS): CK_MECHANISM;
            new(mechanism: long, a1: CK_TLS12_MASTER_KEY_DERIVE_PARAMS): CK_MECHANISM;
            new(mechanism: long, a1: CK_SSL3_KEY_MAT_PARAMS): CK_MECHANISM;
            new(mechanism: long, a1: CK_TLS12_KEY_MAT_PARAMS): CK_MECHANISM;
            new(mechanism: long, a1: CK_TLS_PRF_PARAMS): CK_MECHANISM;
            new(mechanism: long, a1: CK_TLS_MAC_PARAMS): CK_MECHANISM;
            new(mechanism: long, a1: CK_ECDH1_DERIVE_PARAMS): CK_MECHANISM;
            new(mechanism: long, a1: long): CK_MECHANISM;
            new(mechanism: long, a1: CK_AES_CTR_PARAMS): CK_MECHANISM;
            new(mechanism: long, a1: CK_GCM_PARAMS): CK_MECHANISM;
            new(mechanism: long, a1: CK_CCM_PARAMS): CK_MECHANISM;
            new(mechanism: long, a1: CK_SALSA20_CHACHA20_POLY1305_PARAMS): CK_MECHANISM;
            new(mechanism: long, a1: CK_PBE_PARAMS): CK_MECHANISM;
            new(mechanism: long, a1: CK_PKCS5_PBKD2_PARAMS): CK_MECHANISM;
            new(mechanism: long, a1: CK_PKCS5_PBKD2_PARAMS2): CK_MECHANISM;
          }
          let CK_MECHANISM: _CK_MECHANISM$$static;
          interface _CK_MECHANISM {
            freeHandle(): void;
            _init(mechanism: long, a1: any): void;
            setParameter(params: CK_RSA_PKCS_PSS_PARAMS): void;
            toString(): string;
            mechanism: long;
            _pHandle: long;
            pParameter: any;
          }
          interface CK_MECHANISM extends CombineTypes<[_CK_MECHANISM, java.lang.Object]> {}
          interface _CK_MECHANISM_INFO$$static extends ClassLike {
            new(minKeySize: long, a1: long, maxKeySize: long): CK_MECHANISM_INFO;
          }
          let CK_MECHANISM_INFO: _CK_MECHANISM_INFO$$static;
          interface _CK_MECHANISM_INFO {
            toString(): string;
            flags: long;
            readonly iMaxKeySize: int;
            readonly iMinKeySize: int;
            ulMaxKeySize: long;
            ulMinKeySize: long;
          }
          interface CK_MECHANISM_INFO extends CombineTypes<[_CK_MECHANISM_INFO, java.lang.Object]> {}
          interface _CK_NOTIFY$$static extends ClassLike {
          }
          let CK_NOTIFY: _CK_NOTIFY$$static;
          interface _CK_NOTIFY {
            CK_NOTIFY(a0: long, a1: long, a2: any): void;
(a0: long, a1: long, a2: any): void;
          }
          interface CK_NOTIFY extends CombineTypes<[_CK_NOTIFY, java.lang.Object]> {}
          interface _CK_PBE_PARAMS$$static extends ClassLike {
            new(pPassword: char[], pSalt: byte[], ulIteration: long): CK_PBE_PARAMS;
          }
          let CK_PBE_PARAMS: _CK_PBE_PARAMS$$static;
          interface _CK_PBE_PARAMS {
            toString(): string;
            pInitVector: byte[];
            pPassword: char[];
            pSalt: byte[];
            ulIteration: long;
          }
          interface CK_PBE_PARAMS extends CombineTypes<[_CK_PBE_PARAMS, java.lang.Object]> {}
          interface _CK_PKCS5_PBKD2_PARAMS$$static extends ClassLike {
            new(pPassword: char[], pSalt: byte[], iterations: long, a3: long): CK_PKCS5_PBKD2_PARAMS;
          }
          let CK_PKCS5_PBKD2_PARAMS: _CK_PKCS5_PBKD2_PARAMS$$static;
          interface _CK_PKCS5_PBKD2_PARAMS {
            toString(): string;
            iterations: long;
            pPassword: char[];
            pPrfData: byte[];
            pSaltSourceData: byte[];
            prf: long;
            saltSource: long;
          }
          interface CK_PKCS5_PBKD2_PARAMS extends CombineTypes<[_CK_PKCS5_PBKD2_PARAMS, java.lang.Object]> {}
          interface _CK_PKCS5_PBKD2_PARAMS2$$static extends ClassLike {
            new(pPassword: char[], pSalt: byte[], iterations: long, a3: long): CK_PKCS5_PBKD2_PARAMS2;
          }
          let CK_PKCS5_PBKD2_PARAMS2: _CK_PKCS5_PBKD2_PARAMS2$$static;
          interface _CK_PKCS5_PBKD2_PARAMS2 {
            toString(): string;
            iterations: long;
            pPassword: char[];
            pPrfData: byte[];
            pSaltSourceData: byte[];
            prf: long;
            saltSource: long;
          }
          interface CK_PKCS5_PBKD2_PARAMS2 extends CombineTypes<[_CK_PKCS5_PBKD2_PARAMS2, java.lang.Object]> {}
          interface _CK_RSA_PKCS_OAEP_PARAMS$$static extends ClassLike {
            new(): CK_RSA_PKCS_OAEP_PARAMS;
          }
          let CK_RSA_PKCS_OAEP_PARAMS: _CK_RSA_PKCS_OAEP_PARAMS$$static;
          interface _CK_RSA_PKCS_OAEP_PARAMS {
            toString(): string;
            hashAlg: long;
            mgf: long;
            pSourceData: byte[];
            source: long;
          }
          interface CK_RSA_PKCS_OAEP_PARAMS extends CombineTypes<[_CK_RSA_PKCS_OAEP_PARAMS, java.lang.Object]> {}
          interface _CK_RSA_PKCS_PSS_PARAMS$$static extends ClassLike {
            new(hashAlg: string, mgfAlg: string, mgfHash: string, sLen: int): CK_RSA_PKCS_PSS_PARAMS;
          }
          let CK_RSA_PKCS_PSS_PARAMS: _CK_RSA_PKCS_PSS_PARAMS$$static;
          interface _CK_RSA_PKCS_PSS_PARAMS {
            equals(o: any): boolean;
            hashCode(): int;
            toString(): string;
            _hashAlg: long;
            _mgf: long;
            _sLen: long;
          }
          interface CK_RSA_PKCS_PSS_PARAMS extends CombineTypes<[_CK_RSA_PKCS_PSS_PARAMS, java.lang.Object]> {}
          interface _CK_SALSA20_CHACHA20_POLY1305_PARAMS$$static extends ClassLike {
            new(nonce: byte[], aad: byte[]): CK_SALSA20_CHACHA20_POLY1305_PARAMS;
          }
          let CK_SALSA20_CHACHA20_POLY1305_PARAMS: _CK_SALSA20_CHACHA20_POLY1305_PARAMS$$static;
          interface _CK_SALSA20_CHACHA20_POLY1305_PARAMS {
            toString(): string;
            _aad: byte[];
            _nonce: byte[];
          }
          interface CK_SALSA20_CHACHA20_POLY1305_PARAMS extends CombineTypes<[_CK_SALSA20_CHACHA20_POLY1305_PARAMS, java.lang.Object]> {}
          interface _CK_SESSION_INFO$$static extends ClassLike {
            new(slotID: long, a1: long, state: long, a3: long): CK_SESSION_INFO;
          }
          let CK_SESSION_INFO: _CK_SESSION_INFO$$static;
          interface _CK_SESSION_INFO {
            toString(): string;
            flags: long;
            slotID: long;
            state: long;
            ulDeviceError: long;
          }
          interface CK_SESSION_INFO extends CombineTypes<[_CK_SESSION_INFO, java.lang.Object]> {}
          interface _CK_SLOT_INFO$$static extends ClassLike {
            new(slotDesc: char[], vendor: char[], flags: long, a3: CK_VERSION, hwVer: CK_VERSION): CK_SLOT_INFO;
          }
          let CK_SLOT_INFO: _CK_SLOT_INFO$$static;
          interface _CK_SLOT_INFO {
            toString(): string;
            firmwareVersion: CK_VERSION;
            flags: long;
            hardwareVersion: CK_VERSION;
            manufacturerID: char[];
            slotDescription: char[];
          }
          interface CK_SLOT_INFO extends CombineTypes<[_CK_SLOT_INFO, java.lang.Object]> {}
          interface _CK_SSL3_KEY_MAT_OUT$$static extends ClassLike {
            new(): CK_SSL3_KEY_MAT_OUT;
          }
          let CK_SSL3_KEY_MAT_OUT: _CK_SSL3_KEY_MAT_OUT$$static;
          interface _CK_SSL3_KEY_MAT_OUT {
            toString(): string;
            hClientKey: long;
            hClientMacSecret: long;
            hServerKey: long;
            hServerMacSecret: long;
            pIVClient: byte[];
            pIVServer: byte[];
          }
          interface CK_SSL3_KEY_MAT_OUT extends CombineTypes<[_CK_SSL3_KEY_MAT_OUT, java.lang.Object]> {}
          interface _CK_SSL3_KEY_MAT_PARAMS$$static extends ClassLike {
            new(macSize: int, keySize: int, ivSize: int, _export: boolean, random: CK_SSL3_RANDOM_DATA): CK_SSL3_KEY_MAT_PARAMS;
          }
          let CK_SSL3_KEY_MAT_PARAMS: _CK_SSL3_KEY_MAT_PARAMS$$static;
          interface _CK_SSL3_KEY_MAT_PARAMS {
            toString(): string;
            RandomInfo: CK_SSL3_RANDOM_DATA;
            bIsExport: boolean;
            pReturnedKeyMaterial: CK_SSL3_KEY_MAT_OUT;
            ulIVSizeInBits: long;
            ulKeySizeInBits: long;
            ulMacSizeInBits: long;
          }
          interface CK_SSL3_KEY_MAT_PARAMS extends CombineTypes<[_CK_SSL3_KEY_MAT_PARAMS, java.lang.Object]> {}
          interface _CK_SSL3_MASTER_KEY_DERIVE_PARAMS$$static extends ClassLike {
            new(random: CK_SSL3_RANDOM_DATA, version: CK_VERSION): CK_SSL3_MASTER_KEY_DERIVE_PARAMS;
          }
          let CK_SSL3_MASTER_KEY_DERIVE_PARAMS: _CK_SSL3_MASTER_KEY_DERIVE_PARAMS$$static;
          interface _CK_SSL3_MASTER_KEY_DERIVE_PARAMS {
            toString(): string;
            RandomInfo: CK_SSL3_RANDOM_DATA;
            pVersion: CK_VERSION;
          }
          interface CK_SSL3_MASTER_KEY_DERIVE_PARAMS extends CombineTypes<[_CK_SSL3_MASTER_KEY_DERIVE_PARAMS, java.lang.Object]> {}
          interface _CK_SSL3_RANDOM_DATA$$static extends ClassLike {
            new(clientRandom: byte[], serverRandom: byte[]): CK_SSL3_RANDOM_DATA;
          }
          let CK_SSL3_RANDOM_DATA: _CK_SSL3_RANDOM_DATA$$static;
          interface _CK_SSL3_RANDOM_DATA {
            toString(): string;
            pClientRandom: byte[];
            pServerRandom: byte[];
          }
          interface CK_SSL3_RANDOM_DATA extends CombineTypes<[_CK_SSL3_RANDOM_DATA, java.lang.Object]> {}
          interface _CK_TLS12_KEY_MAT_PARAMS$$static extends ClassLike {
            new(macSize: int, keySize: int, ivSize: int, _export: boolean, random: CK_SSL3_RANDOM_DATA, prfHashMechanism: long): CK_TLS12_KEY_MAT_PARAMS;
          }
          let CK_TLS12_KEY_MAT_PARAMS: _CK_TLS12_KEY_MAT_PARAMS$$static;
          interface _CK_TLS12_KEY_MAT_PARAMS {
            toString(): string;
            RandomInfo: CK_SSL3_RANDOM_DATA;
            bIsExport: boolean;
            pReturnedKeyMaterial: CK_SSL3_KEY_MAT_OUT;
            prfHashMechanism: long;
            ulIVSizeInBits: long;
            ulKeySizeInBits: long;
            ulMacSizeInBits: long;
          }
          interface CK_TLS12_KEY_MAT_PARAMS extends CombineTypes<[_CK_TLS12_KEY_MAT_PARAMS, java.lang.Object]> {}
          interface _CK_TLS12_MASTER_KEY_DERIVE_PARAMS$$static extends ClassLike {
            new(random: CK_SSL3_RANDOM_DATA, version: CK_VERSION, prfHashMechanism: long): CK_TLS12_MASTER_KEY_DERIVE_PARAMS;
          }
          let CK_TLS12_MASTER_KEY_DERIVE_PARAMS: _CK_TLS12_MASTER_KEY_DERIVE_PARAMS$$static;
          interface _CK_TLS12_MASTER_KEY_DERIVE_PARAMS {
            RandomInfo: CK_SSL3_RANDOM_DATA;
            pVersion: CK_VERSION;
            prfHashMechanism: long;
          }
          interface CK_TLS12_MASTER_KEY_DERIVE_PARAMS extends CombineTypes<[_CK_TLS12_MASTER_KEY_DERIVE_PARAMS, java.lang.Object]> {}
          interface _CK_TLS_MAC_PARAMS$$static extends ClassLike {
            new(prfMechanism: long, a1: long, ulMacLength: long): CK_TLS_MAC_PARAMS;
          }
          let CK_TLS_MAC_PARAMS: _CK_TLS_MAC_PARAMS$$static;
          interface _CK_TLS_MAC_PARAMS {
            prfMechanism: long;
            ulMacLength: long;
            ulServerOrClient: long;
          }
          interface CK_TLS_MAC_PARAMS extends CombineTypes<[_CK_TLS_MAC_PARAMS, java.lang.Object]> {}
          interface _CK_TLS_PRF_PARAMS$$static extends ClassLike {
            new(pSeed: byte[], pLabel: byte[], pOutput: byte[]): CK_TLS_PRF_PARAMS;
          }
          let CK_TLS_PRF_PARAMS: _CK_TLS_PRF_PARAMS$$static;
          interface _CK_TLS_PRF_PARAMS {
            pLabel: byte[];
            pOutput: byte[];
            pSeed: byte[];
          }
          interface CK_TLS_PRF_PARAMS extends CombineTypes<[_CK_TLS_PRF_PARAMS, java.lang.Object]> {}
          interface _CK_TOKEN_INFO$$static extends ClassLike {
            new(label: char[], vendor: char[], model: char[], serialNo: char[], flags: long, a5: long, sessionMax: long, a7: long, session: long, a9: long, rwSessionMax: long, a11: long, rwSession: long, a13: long, pinLenMax: long, a15: CK_VERSION, pinLenMin: CK_VERSION, a17: char[]): CK_TOKEN_INFO;
          }
          let CK_TOKEN_INFO: _CK_TOKEN_INFO$$static;
          interface _CK_TOKEN_INFO {
            toString(): string;
            firmwareVersion: CK_VERSION;
            flags: long;
            hardwareVersion: CK_VERSION;
            label: char[];
            manufacturerID: char[];
            model: char[];
            serialNumber: char[];
            ulFreePrivateMemory: long;
            ulFreePublicMemory: long;
            ulMaxPinLen: long;
            ulMaxRwSessionCount: long;
            ulMaxSessionCount: long;
            ulMinPinLen: long;
            ulRwSessionCount: long;
            ulSessionCount: long;
            ulTotalPrivateMemory: long;
            ulTotalPublicMemory: long;
            utcTime: char[];
          }
          interface CK_TOKEN_INFO extends CombineTypes<[_CK_TOKEN_INFO, java.lang.Object]> {}
          interface _CK_UNLOCKMUTEX$$static extends ClassLike {
          }
          let CK_UNLOCKMUTEX: _CK_UNLOCKMUTEX$$static;
          interface _CK_UNLOCKMUTEX {
            CK_UNLOCKMUTEX(a0: any): void;
(a0: any): void;
          }
          interface CK_UNLOCKMUTEX extends CombineTypes<[_CK_UNLOCKMUTEX, java.lang.Object]> {}
          interface _CK_VERSION$$static extends ClassLike {
            new(major: int, minor: int): CK_VERSION;
          }
          let CK_VERSION: _CK_VERSION$$static;
          interface _CK_VERSION {
            toString(): string;
            major: byte;
            minor: byte;
          }
          interface CK_VERSION extends CombineTypes<[_CK_VERSION, java.lang.Object]> {}
          interface _CK_X9_42_DH1_DERIVE_PARAMS$$static extends ClassLike {
            new(): CK_X9_42_DH1_DERIVE_PARAMS;
          }
          let CK_X9_42_DH1_DERIVE_PARAMS: _CK_X9_42_DH1_DERIVE_PARAMS$$static;
          interface _CK_X9_42_DH1_DERIVE_PARAMS {
            toString(): string;
            kdf: long;
            pOtherInfo: byte[];
            pPublicData: byte[];
          }
          interface CK_X9_42_DH1_DERIVE_PARAMS extends CombineTypes<[_CK_X9_42_DH1_DERIVE_PARAMS, java.lang.Object]> {}
          interface _CK_X9_42_DH2_DERIVE_PARAMS$$static extends ClassLike {
            new(): CK_X9_42_DH2_DERIVE_PARAMS;
          }
          let CK_X9_42_DH2_DERIVE_PARAMS: _CK_X9_42_DH2_DERIVE_PARAMS$$static;
          interface _CK_X9_42_DH2_DERIVE_PARAMS {
            toString(): string;
            hPrivateData: long;
            kdf: long;
            pOtherInfo: byte[];
            pPublicData: byte[];
            pPublicData2: byte[];
            ulPrivateDataLen: long;
          }
          interface CK_X9_42_DH2_DERIVE_PARAMS extends CombineTypes<[_CK_X9_42_DH2_DERIVE_PARAMS, java.lang.Object]> {}
          interface _Constants$$static extends ClassLike {
            readonly INDENT: string;
            readonly NEWLINE: string;
            new(): Constants;
          }
          let Constants: _Constants$$static;
          interface _Constants {
          }
          interface Constants extends CombineTypes<[_Constants, java.lang.Object]> {}
          interface _Functions$$static extends ClassLike {
            _addAttribute(id: long, a1: string): void;
            _addHashMech(id: long, a1: string[]): void;
            _addHashMech(id: long, ...a1: string[]): void;
            _addKeyType(id: long, a1: string): void;
            _addMGF(id: long, a1: string): void;
            _addMapping(nameMap: java.util.Map<int,string>, idMap: java.util.Map<string,int>, id: long, a3: string): void;
            _addMech(id: long, a1: string): void;
            _addObjectClass(id: long, a1: string): void;
            _addParamSources(id: long, a1: string): void;
            _addPrf(id: long, a1: string): void;
            _equals(array1: char[], array2: char[]): boolean;
            equals(date1: CK_DATE, date2: CK_DATE): boolean;
            getAttributeId(name: string): long;
            getAttributeName(id: long): string;
            getHashMechId(name: string): long;
            getId(idMap: java.util.Map<string,int>, name: string): long;
            getKeyId(name: string): long;
            getKeyName(id: long): string;
            getLength(value: byte[]): int;
            getMGFId(name: string): long;
            getMGFName(id: long): string;
            getMechanismId(name: string): long;
            getMechanismName(id: long): string;
            _getName(nameMap: java.util.Map<int,string>, id: long): string;
            getObjectClassId(name: string): long;
            getObjectClassName(id: long): string;
            getParamSourcesId(name: string): long;
            getParamSourcesName(id: long): string;
            getPrfId(name: string): long;
            getPrfName(id: long): string;
            hashCode(array: byte[]): int;
            hashCode(array: char[]): int;
            hashCode(date: CK_DATE): int;
            mechanismInfoFlagsToString(flags: long): string;
            sessionInfoFlagsToString(flags: long): string;
            sessionStateToString(state: long): string;
            slotInfoFlagsToString(flags: long): string;
            toBinaryString(value: long): string;
            toBinaryString(value: byte[]): string;
            toFullHexString(value: long): string;
            toFullHexString(value: int): string;
            toHexString(value: long): string;
            toHexString(value: byte[]): string;
            tokenInfoFlagsToString(flags: long): string;
            _HEX_DIGITS: char[];
            _attributeIds: java.util.Map<string,int>;
            _attributeNames: java.util.Map<int,string>;
            _hashMechIds: java.util.Map<string,long>;
            _keyIds: java.util.Map<string,int>;
            _keyNames: java.util.Map<int,string>;
            _mechIds: java.util.Map<string,int>;
            _mechNames: java.util.Map<int,string>;
            _mechanismInfoFlags: Functions$Flags;
            _mgfIds: java.util.Map<string,int>;
            _mgfNames: java.util.Map<int,string>;
            _objectClassIds: java.util.Map<string,int>;
            _objectClassNames: java.util.Map<int,string>;
            _paramSourcesIds: java.util.Map<string,int>;
            _paramSourcesNames: java.util.Map<int,string>;
            _prfIds: java.util.Map<string,int>;
            _prfNames: java.util.Map<int,string>;
            _sessionInfoFlags: Functions$Flags;
            _slotInfoFlags: Functions$Flags;
            _tokenInfoFlags: Functions$Flags;
            new(): Functions;
          }
          let Functions: _Functions$$static;
          interface _Functions {
          }
          interface Functions extends CombineTypes<[_Functions, java.lang.Object]> {}
          interface _Functions$Flags$$static extends ClassLike {
            _new(flagIds: long[], flagNames: string[]): Functions$Flags;
          }
          let Functions$Flags: _Functions$Flags$$static;
          interface _Functions$Flags {
            _toString(val: long): string;
            _flagIds: long[];
            _flagNames: string[];
          }
          interface Functions$Flags extends CombineTypes<[_Functions$Flags, java.lang.Object]> {}
          interface _PKCS11$$static extends ClassLike {
            _disconnect(a0: long): void;
            _finalizeLibrary(): void;
            freeMechanism(a0: long): long;
            getInstance(pkcs11ModulePath: string, functionList: string, pInitArgs: CK_C_INITIALIZE_ARGS, omitInitialize: boolean): PKCS11;
            _initializeLibrary(a0: boolean): void;
            loadNative(): void;
            _releaserFor(pNativeData: long): java.lang.Runnable;
            _PKCS11_WRAPPER: string;
            _moduleMap: java.util.Map<string,PKCS11>;
            _new(pkcs11ModulePath: string, functionList: string): PKCS11;
          }
          let PKCS11: _PKCS11$$static;
          interface _PKCS11 {
            C_CloseSession(a0: long): void;
            C_CopyObject(a0: long, a1: long, a2: CK_ATTRIBUTE[]): long;
            C_CreateObject(a0: long, a1: CK_ATTRIBUTE[]): long;
            C_Decrypt(a0: long, a1: long, a2: byte[], a3: int, a4: int, a5: long, a6: byte[], a7: int, a8: int): int;
            C_DecryptFinal(a0: long, a1: long, a2: byte[], a3: int, a4: int): int;
            C_DecryptInit(a0: long, a1: CK_MECHANISM, a2: long): void;
            C_DecryptUpdate(a0: long, a1: long, a2: byte[], a3: int, a4: int, a5: long, a6: byte[], a7: int, a8: int): int;
            C_DeriveKey(a0: long, a1: CK_MECHANISM, a2: long, a3: CK_ATTRIBUTE[]): long;
            C_DestroyObject(a0: long, a1: long): void;
            C_DigestFinal(a0: long, a1: byte[], a2: int, a3: int): int;
            C_DigestInit(a0: long, a1: CK_MECHANISM): void;
            C_DigestKey(a0: long, a1: long): void;
            C_DigestSingle(a0: long, a1: CK_MECHANISM, a2: byte[], a3: int, a4: int, a5: byte[], a6: int, a7: int): int;
            C_DigestUpdate(a0: long, a1: long, a2: byte[], a3: int, a4: int): void;
            C_Encrypt(a0: long, a1: long, a2: byte[], a3: int, a4: int, a5: long, a6: byte[], a7: int, a8: int): int;
            C_EncryptFinal(a0: long, a1: long, a2: byte[], a3: int, a4: int): int;
            C_EncryptInit(a0: long, a1: CK_MECHANISM, a2: long): void;
            C_EncryptUpdate(a0: long, a1: long, a2: byte[], a3: int, a4: int, a5: long, a6: byte[], a7: int, a8: int): int;
            C_Finalize(a0: any): void;
            C_FindObjects(a0: long, a1: long): long[];
            C_FindObjectsFinal(a0: long): void;
            C_FindObjectsInit(a0: long, a1: CK_ATTRIBUTE[]): void;
            C_GCMDecryptInitWithRetry(a0: long, a1: CK_MECHANISM, a2: long, a3: boolean): void;
            C_GCMEncryptInitWithRetry(a0: long, a1: CK_MECHANISM, a2: long, a3: boolean): void;
            C_GenerateKey(a0: long, a1: CK_MECHANISM, a2: CK_ATTRIBUTE[]): long;
            C_GenerateKeyPair(a0: long, a1: CK_MECHANISM, a2: CK_ATTRIBUTE[], a3: CK_ATTRIBUTE[]): long[];
            C_GenerateRandom(a0: long, a1: byte[]): void;
            C_GetAttributeValue(a0: long, a1: long, a2: CK_ATTRIBUTE[]): void;
            C_GetInfo(): CK_INFO;
            C_GetMechanismInfo(a0: long, a1: long): CK_MECHANISM_INFO;
            C_GetMechanismList(a0: long): long[];
            C_GetOperationState(a0: long): byte[];
            C_GetSessionInfo(a0: long): CK_SESSION_INFO;
            C_GetSlotInfo(a0: long): CK_SLOT_INFO;
            C_GetSlotList(a0: boolean): long[];
            C_GetTokenInfo(a0: long): CK_TOKEN_INFO;
            _C_Initialize(a0: any): void;
            C_Login(a0: long, a1: long, a2: char[]): void;
            C_Logout(a0: long): void;
            C_OpenSession(a0: long, a1: long, a2: any, a3: CK_NOTIFY): long;
            C_SeedRandom(a0: long, a1: byte[]): void;
            C_SessionCancel(a0: long, a1: long): void;
            C_SetAttributeValue(a0: long, a1: long, a2: CK_ATTRIBUTE[]): void;
            C_SetOperationState(a0: long, a1: byte[], a2: long, a3: long): void;
            C_Sign(a0: long, a1: byte[]): byte[];
            C_SignFinal(a0: long, a1: int): byte[];
            C_SignInit(a0: long, a1: CK_MECHANISM, a2: long): void;
            C_SignRecover(a0: long, a1: byte[], a2: int, a3: int, a4: byte[], a5: int, a6: int): int;
            C_SignRecoverInit(a0: long, a1: CK_MECHANISM, a2: long): void;
            C_SignUpdate(a0: long, a1: long, a2: byte[], a3: int, a4: int): void;
            C_UnwrapKey(a0: long, a1: CK_MECHANISM, a2: long, a3: byte[], a4: CK_ATTRIBUTE[]): long;
            C_Verify(a0: long, a1: byte[], a2: byte[]): void;
            C_VerifyFinal(a0: long, a1: byte[]): void;
            C_VerifyInit(a0: long, a1: CK_MECHANISM, a2: long): void;
            C_VerifyRecover(a0: long, a1: byte[], a2: int, a3: int, a4: byte[], a5: int, a6: int): int;
            C_VerifyRecoverInit(a0: long, a1: CK_MECHANISM, a2: long): void;
            C_VerifyUpdate(a0: long, a1: long, a2: byte[], a3: int, a4: int): void;
            C_WrapKey(a0: long, a1: CK_MECHANISM, a2: long, a3: long): byte[];
            _connect(a0: string, a1: string): CK_VERSION;
            createNativeKey(a0: long, a1: byte[], a2: long, a3: CK_MECHANISM): long;
            getNativeKeyInfo(a0: long, a1: long, a2: long, a3: CK_MECHANISM): byte[];
            getVersion(): CK_VERSION;
            toString(): string;
            _pNativeData: long;
            _pkcs11ModulePath: string;
            _version: CK_VERSION;
          }
          interface PKCS11 extends CombineTypes<[_PKCS11, java.lang.Object]> {}
          interface _PKCS11$SynchronizedPKCS11$$static extends ClassLike {
            _new(pkcs11ModulePath: string, functionList: string): PKCS11$SynchronizedPKCS11;
          }
          let PKCS11$SynchronizedPKCS11: _PKCS11$SynchronizedPKCS11$$static;
          interface _PKCS11$SynchronizedPKCS11 {
            C_CloseSession(hSession: long): void;
            C_CopyObject(hSession: long, a1: long, hObject: CK_ATTRIBUTE[]): long;
            C_CreateObject(hSession: long, a1: CK_ATTRIBUTE[]): long;
            C_Decrypt(hSession: long, a1: long, directIn: byte[], a3: int, _in: int, inOfs: long, inLen: byte[], directOut: int, a8: int): int;
            C_DecryptFinal(hSession: long, a1: long, directOut: byte[], a3: int, out: int): int;
            C_DecryptInit(hSession: long, a1: CK_MECHANISM, pMechanism: long): void;
            C_DecryptUpdate(hSession: long, a1: long, directIn: byte[], a3: int, _in: int, inOfs: long, inLen: byte[], directOut: int, a8: int): int;
            C_DeriveKey(hSession: long, a1: CK_MECHANISM, pMechanism: long, hBaseKey: CK_ATTRIBUTE[]): long;
            C_DestroyObject(hSession: long, a1: long): void;
            C_DigestFinal(hSession: long, a1: byte[], pDigest: int, digestOfs: int): int;
            C_DigestInit(hSession: long, a1: CK_MECHANISM): void;
            C_DigestKey(hSession: long, a1: long): void;
            C_DigestSingle(hSession: long, a1: CK_MECHANISM, pMechanism: byte[], _in: int, inOfs: int, inLen: byte[], digest: int, digestOfs: int): int;
            C_DigestUpdate(hSession: long, a1: long, directIn: byte[], a3: int, _in: int): void;
            C_Encrypt(hSession: long, a1: long, directIn: byte[], a3: int, _in: int, inOfs: long, inLen: byte[], directOut: int, a8: int): int;
            C_EncryptFinal(hSession: long, a1: long, directOut: byte[], a3: int, out: int): int;
            C_EncryptInit(hSession: long, a1: CK_MECHANISM, pMechanism: long): void;
            C_EncryptUpdate(hSession: long, a1: long, directIn: byte[], a3: int, _in: int, inOfs: long, inLen: byte[], directOut: int, a8: int): int;
            C_Finalize(pReserved: any): void;
            C_FindObjects(hSession: long, a1: long): long[];
            C_FindObjectsFinal(hSession: long): void;
            C_FindObjectsInit(hSession: long, a1: CK_ATTRIBUTE[]): void;
            C_GenerateKey(hSession: long, a1: CK_MECHANISM, pMechanism: CK_ATTRIBUTE[]): long;
            C_GenerateKeyPair(hSession: long, a1: CK_MECHANISM, pMechanism: CK_ATTRIBUTE[], pPublicKeyTemplate: CK_ATTRIBUTE[]): long[];
            C_GenerateRandom(hSession: long, a1: byte[]): void;
            C_GetAttributeValue(hSession: long, a1: long, hObject: CK_ATTRIBUTE[]): void;
            C_GetInfo(): CK_INFO;
            C_GetMechanismInfo(slotID: long, a1: long): CK_MECHANISM_INFO;
            C_GetMechanismList(slotID: long): long[];
            C_GetSessionInfo(hSession: long): CK_SESSION_INFO;
            C_GetSlotInfo(slotID: long): CK_SLOT_INFO;
            C_GetSlotList(tokenPresent: boolean): long[];
            C_GetTokenInfo(slotID: long): CK_TOKEN_INFO;
            _C_Initialize(pInitArgs: any): void;
            C_Login(hSession: long, a1: long, userType: char[]): void;
            C_Logout(hSession: long): void;
            C_OpenSession(slotID: long, a1: long, flags: any, a3: CK_NOTIFY): long;
            C_SeedRandom(hSession: long, a1: byte[]): void;
            C_SessionCancel(hSession: long, a1: long): void;
            C_SetAttributeValue(hSession: long, a1: long, hObject: CK_ATTRIBUTE[]): void;
            C_Sign(hSession: long, a1: byte[]): byte[];
            C_SignFinal(hSession: long, a1: int): byte[];
            C_SignInit(hSession: long, a1: CK_MECHANISM, pMechanism: long): void;
            C_SignRecover(hSession: long, a1: byte[], _in: int, inOfs: int, inLen: byte[], out: int, outOufs: int): int;
            C_SignRecoverInit(hSession: long, a1: CK_MECHANISM, pMechanism: long): void;
            C_SignUpdate(hSession: long, a1: long, directIn: byte[], a3: int, _in: int): void;
            C_UnwrapKey(hSession: long, a1: CK_MECHANISM, pMechanism: long, hUnwrappingKey: byte[], a4: CK_ATTRIBUTE[]): long;
            C_Verify(hSession: long, a1: byte[], pData: byte[]): void;
            C_VerifyFinal(hSession: long, a1: byte[]): void;
            C_VerifyInit(hSession: long, a1: CK_MECHANISM, pMechanism: long): void;
            C_VerifyRecover(hSession: long, a1: byte[], _in: int, inOfs: int, inLen: byte[], out: int, outOufs: int): int;
            C_VerifyRecoverInit(hSession: long, a1: CK_MECHANISM, pMechanism: long): void;
            C_VerifyUpdate(hSession: long, a1: long, directIn: byte[], a3: int, _in: int): void;
            C_WrapKey(hSession: long, a1: CK_MECHANISM, pMechanism: long, hWrappingKey: long): byte[];
          }
          interface PKCS11$SynchronizedPKCS11 extends CombineTypes<[_PKCS11$SynchronizedPKCS11, sun.security.pkcs11.wrapper.PKCS11]> {}
          interface _PKCS11Constants$$static extends ClassLike {
            readonly CKA_AC_ISSUER: long;
            readonly CKA_ALLOWED_MECHANISMS: long;
            readonly CKA_ALWAYS_AUTHENTICATE: long;
            readonly CKA_ALWAYS_SENSITIVE: long;
            readonly CKA_APPLICATION: long;
            readonly CKA_ATTR_TYPES: long;
            readonly CKA_AUTH_PIN_FLAGS: long;
            readonly CKA_BASE: long;
            readonly CKA_BITS_PER_PIXEL: long;
            readonly CKA_CERTIFICATE_CATEGORY: long;
            readonly CKA_CERTIFICATE_TYPE: long;
            readonly CKA_CHAR_COLUMNS: long;
            readonly CKA_CHAR_ROWS: long;
            readonly CKA_CHAR_SETS: long;
            readonly CKA_CHECK_VALUE: long;
            readonly CKA_CLASS: long;
            readonly CKA_COEFFICIENT: long;
            readonly CKA_COLOR: long;
            readonly CKA_COPYABLE: long;
            readonly CKA_DECRYPT: long;
            readonly CKA_DEFAULT_CMS_ATTRIBUTES: long;
            readonly CKA_DERIVE: long;
            readonly CKA_DERIVE_TEMPLATE: long;
            readonly CKA_DESTROYABLE: long;
            readonly CKA_ECDSA_PARAMS: long;
            readonly CKA_EC_PARAMS: long;
            readonly CKA_EC_POINT: long;
            readonly CKA_ENCODING_METHODS: long;
            readonly CKA_ENCRYPT: long;
            readonly CKA_END_DATE: long;
            readonly CKA_EXPONENT_1: long;
            readonly CKA_EXPONENT_2: long;
            readonly CKA_EXTRACTABLE: long;
            readonly CKA_GOST28147_PARAMS: long;
            readonly CKA_GOSTR3410_PARAMS: long;
            readonly CKA_GOSTR3411_PARAMS: long;
            readonly CKA_HASH_OF_ISSUER_PUBLIC_KEY: long;
            readonly CKA_HASH_OF_SUBJECT_PUBLIC_KEY: long;
            readonly CKA_HAS_RESET: long;
            readonly CKA_HW_FEATURE_TYPE: long;
            readonly CKA_ID: long;
            readonly CKA_ISSUER: long;
            readonly CKA_JAVA_MIDP_SECURITY_DOMAIN: long;
            readonly CKA_KEY_GEN_MECHANISM: long;
            readonly CKA_KEY_TYPE: long;
            readonly CKA_LABEL: long;
            readonly CKA_LOCAL: long;
            readonly CKA_MECHANISM_TYPE: long;
            readonly CKA_MIME_TYPES: long;
            readonly CKA_MODIFIABLE: long;
            readonly CKA_MODULUS: long;
            readonly CKA_MODULUS_BITS: long;
            readonly CKA_NAME_HASH_ALGORITHM: long;
            readonly CKA_NETSCAPE_BASE: long;
            readonly CKA_NETSCAPE_CERT_MD5_HASH: long;
            readonly CKA_NETSCAPE_CERT_SHA1_HASH: long;
            readonly CKA_NETSCAPE_DB: long;
            readonly CKA_NETSCAPE_TRUST_BASE: long;
            readonly CKA_NETSCAPE_TRUST_CLIENT_AUTH: long;
            readonly CKA_NETSCAPE_TRUST_CODE_SIGNING: long;
            readonly CKA_NETSCAPE_TRUST_EMAIL_PROTECTION: long;
            readonly CKA_NETSCAPE_TRUST_SERVER_AUTH: long;
            readonly CKA_NEVER_EXTRACTABLE: long;
            readonly CKA_OBJECT_ID: long;
            readonly CKA_OTP_CHALLENGE_REQUIREMENT: long;
            readonly CKA_OTP_COUNTER: long;
            readonly CKA_OTP_COUNTER_REQUIREMENT: long;
            readonly CKA_OTP_FORMAT: long;
            readonly CKA_OTP_LENGTH: long;
            readonly CKA_OTP_PIN_REQUIREMENT: long;
            readonly CKA_OTP_SERVICE_IDENTIFIER: long;
            readonly CKA_OTP_SERVICE_LOGO: long;
            readonly CKA_OTP_SERVICE_LOGO_TYPE: long;
            readonly CKA_OTP_TIME: long;
            readonly CKA_OTP_TIME_INTERVAL: long;
            readonly CKA_OTP_TIME_REQUIREMENT: long;
            readonly CKA_OTP_USER_FRIENDLY_MODE: long;
            readonly CKA_OTP_USER_IDENTIFIER: long;
            readonly CKA_OWNER: long;
            readonly CKA_PIXEL_X: long;
            readonly CKA_PIXEL_Y: long;
            readonly CKA_PRIME: long;
            readonly CKA_PRIME_1: long;
            readonly CKA_PRIME_2: long;
            readonly CKA_PRIME_BITS: long;
            readonly CKA_PRIVATE: long;
            readonly CKA_PRIVATE_EXPONENT: long;
            readonly CKA_PROFILE_ID: long;
            readonly CKA_PUBLIC_EXPONENT: long;
            readonly CKA_PUBLIC_KEY_INFO: long;
            readonly CKA_REQUIRED_CMS_ATTRIBUTES: long;
            readonly CKA_RESET_ON_INIT: long;
            readonly CKA_RESOLUTION: long;
            readonly CKA_SECONDARY_AUTH: long;
            readonly CKA_SENSITIVE: long;
            readonly CKA_SERIAL_NUMBER: long;
            readonly CKA_SIGN: long;
            readonly CKA_SIGN_RECOVER: long;
            readonly CKA_START_DATE: long;
            readonly CKA_SUBJECT: long;
            readonly CKA_SUBPRIME: long;
            readonly CKA_SUB_PRIME_BITS: long;
            readonly CKA_SUPPORTED_CMS_ATTRIBUTES: long;
            readonly CKA_TOKEN: long;
            readonly CKA_TRUSTED: long;
            readonly CKA_UNIQUE_ID: long;
            readonly CKA_UNWRAP: long;
            readonly CKA_UNWRAP_TEMPLATE: long;
            readonly CKA_URL: long;
            readonly CKA_VALUE: long;
            readonly CKA_VALUE_BITS: long;
            readonly CKA_VALUE_LEN: long;
            readonly CKA_VENDOR_DEFINED: long;
            readonly CKA_VERIFY: long;
            readonly CKA_VERIFY_RECOVER: long;
            readonly CKA_WRAP: long;
            readonly CKA_WRAP_TEMPLATE: long;
            readonly CKA_WRAP_WITH_TRUSTED: long;
            readonly CKA_X2RATCHET_BAG: long;
            readonly CKA_X2RATCHET_BAGSIZE: long;
            readonly CKA_X2RATCHET_BOBS1STMSG: long;
            readonly CKA_X2RATCHET_CKR: long;
            readonly CKA_X2RATCHET_CKS: long;
            readonly CKA_X2RATCHET_DHP: long;
            readonly CKA_X2RATCHET_DHR: long;
            readonly CKA_X2RATCHET_DHS: long;
            readonly CKA_X2RATCHET_HKR: long;
            readonly CKA_X2RATCHET_HKS: long;
            readonly CKA_X2RATCHET_ISALICE: long;
            readonly CKA_X2RATCHET_NHKR: long;
            readonly CKA_X2RATCHET_NHKS: long;
            readonly CKA_X2RATCHET_NR: long;
            readonly CKA_X2RATCHET_NS: long;
            readonly CKA_X2RATCHET_PNS: long;
            readonly CKA_X2RATCHET_RK: long;
            readonly CKC_VENDOR_DEFINED: long;
            readonly CKC_WTLS: long;
            readonly CKC_X_509: long;
            readonly CKC_X_509_ATTR_CERT: long;
            readonly CKD_NULL: long;
            readonly CKD_SHA1_KDF: long;
            readonly CKF_ARRAY_ATTRIBUTE: long;
            readonly CKF_CLOCK_ON_TOKEN: long;
            readonly CKF_DECRYPT: long;
            readonly CKF_DERIVE: long;
            readonly CKF_DIGEST: long;
            readonly CKF_DONT_BLOCK: long;
            readonly CKF_DUAL_CRYPTO_OPERATIONS: long;
            readonly CKF_EC_COMPRESS: long;
            readonly CKF_EC_CURVENAME: long;
            readonly CKF_EC_ECPARAMETERS: long;
            readonly CKF_EC_F_2M: long;
            readonly CKF_EC_F_P: long;
            readonly CKF_EC_NAMEDCURVE: long;
            readonly CKF_EC_OID: long;
            readonly CKF_EC_UNCOMPRESS: long;
            readonly CKF_ENCRYPT: long;
            readonly CKF_EXTENSION: long;
            readonly CKF_FIND_OBJECTS: long;
            readonly CKF_GENERATE: long;
            readonly CKF_GENERATE_KEY_PAIR: long;
            readonly CKF_HW: long;
            readonly CKF_HW_SLOT: long;
            readonly CKF_LIBRARY_CANT_CREATE_OS_THREADS: long;
            readonly CKF_LOGIN_REQUIRED: long;
            readonly CKF_MESSAGE_DECRYPT: long;
            readonly CKF_MESSAGE_ENCRYPT: long;
            readonly CKF_MESSAGE_SIGN: long;
            readonly CKF_MESSAGE_VERIFY: long;
            readonly CKF_MULTI_MESSAGE: long;
            readonly CKF_OS_LOCKING_OK: long;
            readonly CKF_PROTECTED_AUTHENTICATION_PATH: long;
            readonly CKF_REMOVABLE_DEVICE: long;
            readonly CKF_RESTORE_KEY_NOT_NEEDED: long;
            readonly CKF_RNG: long;
            readonly CKF_RW_SESSION: long;
            readonly CKF_SECONDARY_AUTHENTICATION: long;
            readonly CKF_SERIAL_SESSION: long;
            readonly CKF_SIGN: long;
            readonly CKF_SIGN_RECOVER: long;
            readonly CKF_SO_PIN_COUNT_LOW: long;
            readonly CKF_SO_PIN_FINAL_TRY: long;
            readonly CKF_SO_PIN_LOCKED: long;
            readonly CKF_SO_PIN_TO_BE_CHANGED: long;
            readonly CKF_TOKEN_INITIALIZED: long;
            readonly CKF_TOKEN_PRESENT: long;
            readonly CKF_UNWRAP: long;
            readonly CKF_USER_PIN_COUNT_LOW: long;
            readonly CKF_USER_PIN_FINAL_TRY: long;
            readonly CKF_USER_PIN_INITIALIZED: long;
            readonly CKF_USER_PIN_LOCKED: long;
            readonly CKF_USER_PIN_TO_BE_CHANGED: long;
            readonly CKF_VERIFY: long;
            readonly CKF_VERIFY_RECOVER: long;
            readonly CKF_WRAP: long;
            readonly CKF_WRITE_PROTECTED: long;
            readonly CKG_MGF1_SHA1: long;
            readonly CKG_MGF1_SHA224: long;
            readonly CKG_MGF1_SHA256: long;
            readonly CKG_MGF1_SHA384: long;
            readonly CKG_MGF1_SHA3_224: long;
            readonly CKG_MGF1_SHA3_256: long;
            readonly CKG_MGF1_SHA3_384: long;
            readonly CKG_MGF1_SHA3_512: long;
            readonly CKG_MGF1_SHA512: long;
            readonly CKK_ACTI: long;
            readonly CKK_AES: long;
            readonly CKK_AES_XTS: long;
            readonly CKK_ARIA: long;
            readonly CKK_BATON: long;
            readonly CKK_BLAKE2B_160_HMAC: long;
            readonly CKK_BLAKE2B_256_HMAC: long;
            readonly CKK_BLAKE2B_384_HMAC: long;
            readonly CKK_BLAKE2B_512_HMAC: long;
            readonly CKK_BLOWFISH: long;
            readonly CKK_CAMELLIA: long;
            readonly CKK_CAST: long;
            readonly CKK_CAST128: long;
            readonly CKK_CAST3: long;
            readonly CKK_CAST5: long;
            readonly CKK_CDMF: long;
            readonly CKK_CHACHA20: long;
            readonly CKK_DES: long;
            readonly CKK_DES2: long;
            readonly CKK_DES3: long;
            readonly CKK_DH: long;
            readonly CKK_DSA: long;
            readonly CKK_EC: long;
            readonly CKK_ECDSA: long;
            readonly CKK_EC_EDWARDS: long;
            readonly CKK_EC_MONTGOMERY: long;
            readonly CKK_GENERIC_SECRET: long;
            readonly CKK_GOST28147: long;
            readonly CKK_GOSTR3410: long;
            readonly CKK_GOSTR3411: long;
            readonly CKK_HKDF: long;
            readonly CKK_HOTP: long;
            readonly CKK_IDEA: long;
            readonly CKK_JUNIPER: long;
            readonly CKK_KEA: long;
            readonly CKK_MD5_HMAC: long;
            readonly CKK_POLY1305: long;
            readonly CKK_RC2: long;
            readonly CKK_RC4: long;
            readonly CKK_RC5: long;
            readonly CKK_RIPEMD128_HMAC: long;
            readonly CKK_RIPEMD160_HMAC: long;
            readonly CKK_RSA: long;
            readonly CKK_SALSA20: long;
            readonly CKK_SECURID: long;
            readonly CKK_SEED: long;
            readonly CKK_SHA224_HMAC: long;
            readonly CKK_SHA256_HMAC: long;
            readonly CKK_SHA384_HMAC: long;
            readonly CKK_SHA3_224_HMAC: long;
            readonly CKK_SHA3_256_HMAC: long;
            readonly CKK_SHA3_384_HMAC: long;
            readonly CKK_SHA3_512_HMAC: long;
            readonly CKK_SHA512_224_HMAC: long;
            readonly CKK_SHA512_256_HMAC: long;
            readonly CKK_SHA512_HMAC: long;
            readonly CKK_SHA512_T_HMAC: long;
            readonly CKK_SHA_1_HMAC: long;
            readonly CKK_SKIPJACK: long;
            readonly CKK_TWOFISH: long;
            readonly CKK_VENDOR_DEFINED: long;
            readonly CKK_X2RATCHET: long;
            readonly CKK_X9_42_DH: long;
            readonly CKM_ACTI: long;
            readonly CKM_ACTI_KEY_GEN: long;
            readonly CKM_AES_CBC: long;
            readonly CKM_AES_CBC_ENCRYPT_DATA: long;
            readonly CKM_AES_CBC_PAD: long;
            readonly CKM_AES_CCM: long;
            readonly CKM_AES_CFB1: long;
            readonly CKM_AES_CFB128: long;
            readonly CKM_AES_CFB64: long;
            readonly CKM_AES_CFB8: long;
            readonly CKM_AES_CMAC: long;
            readonly CKM_AES_CMAC_GENERAL: long;
            readonly CKM_AES_CTR: long;
            readonly CKM_AES_CTS: long;
            readonly CKM_AES_ECB: long;
            readonly CKM_AES_ECB_ENCRYPT_DATA: long;
            readonly CKM_AES_GCM: long;
            readonly CKM_AES_GMAC: long;
            readonly CKM_AES_KEY_GEN: long;
            readonly CKM_AES_KEY_WRAP: long;
            readonly CKM_AES_KEY_WRAP_KWP: long;
            readonly CKM_AES_KEY_WRAP_PAD: long;
            readonly CKM_AES_MAC: long;
            readonly CKM_AES_MAC_GENERAL: long;
            readonly CKM_AES_OFB: long;
            readonly CKM_AES_XCBC_MAC: long;
            readonly CKM_AES_XCBC_MAC_96: long;
            readonly CKM_AES_XTS: long;
            readonly CKM_AES_XTS_KEY_GEN: long;
            readonly CKM_ARIA_CBC: long;
            readonly CKM_ARIA_CBC_ENCRYPT_DATA: long;
            readonly CKM_ARIA_CBC_PAD: long;
            readonly CKM_ARIA_ECB: long;
            readonly CKM_ARIA_ECB_ENCRYPT_DATA: long;
            readonly CKM_ARIA_KEY_GEN: long;
            readonly CKM_ARIA_MAC: long;
            readonly CKM_ARIA_MAC_GENERAL: long;
            readonly CKM_BATON_CBC128: long;
            readonly CKM_BATON_COUNTER: long;
            readonly CKM_BATON_ECB128: long;
            readonly CKM_BATON_ECB96: long;
            readonly CKM_BATON_KEY_GEN: long;
            readonly CKM_BATON_SHUFFLE: long;
            readonly CKM_BATON_WRAP: long;
            readonly CKM_BLAKE2B_160: long;
            readonly CKM_BLAKE2B_160_HMAC: long;
            readonly CKM_BLAKE2B_160_HMAC_GENERAL: long;
            readonly CKM_BLAKE2B_160_KEY_DERIVE: long;
            readonly CKM_BLAKE2B_160_KEY_GEN: long;
            readonly CKM_BLAKE2B_256: long;
            readonly CKM_BLAKE2B_256_HMAC: long;
            readonly CKM_BLAKE2B_256_HMAC_GENERAL: long;
            readonly CKM_BLAKE2B_256_KEY_DERIVE: long;
            readonly CKM_BLAKE2B_256_KEY_GEN: long;
            readonly CKM_BLAKE2B_384: long;
            readonly CKM_BLAKE2B_384_HMAC: long;
            readonly CKM_BLAKE2B_384_HMAC_GENERAL: long;
            readonly CKM_BLAKE2B_384_KEY_DERIVE: long;
            readonly CKM_BLAKE2B_384_KEY_GEN: long;
            readonly CKM_BLAKE2B_512: long;
            readonly CKM_BLAKE2B_512_HMAC: long;
            readonly CKM_BLAKE2B_512_HMAC_GENERAL: long;
            readonly CKM_BLAKE2B_512_KEY_DERIVE: long;
            readonly CKM_BLAKE2B_512_KEY_GEN: long;
            readonly CKM_BLOWFISH_CBC: long;
            readonly CKM_BLOWFISH_CBC_PAD: long;
            readonly CKM_BLOWFISH_KEY_GEN: long;
            readonly CKM_CAMELLIA_CBC: long;
            readonly CKM_CAMELLIA_CBC_ENCRYPT_DATA: long;
            readonly CKM_CAMELLIA_CBC_PAD: long;
            readonly CKM_CAMELLIA_CTR: long;
            readonly CKM_CAMELLIA_ECB: long;
            readonly CKM_CAMELLIA_ECB_ENCRYPT_DATA: long;
            readonly CKM_CAMELLIA_KEY_GEN: long;
            readonly CKM_CAMELLIA_MAC: long;
            readonly CKM_CAMELLIA_MAC_GENERAL: long;
            readonly CKM_CAST128_CBC: long;
            readonly CKM_CAST128_CBC_PAD: long;
            readonly CKM_CAST128_ECB: long;
            readonly CKM_CAST128_KEY_GEN: long;
            readonly CKM_CAST128_MAC: long;
            readonly CKM_CAST128_MAC_GENERAL: long;
            readonly CKM_CAST3_CBC: long;
            readonly CKM_CAST3_CBC_PAD: long;
            readonly CKM_CAST3_ECB: long;
            readonly CKM_CAST3_KEY_GEN: long;
            readonly CKM_CAST3_MAC: long;
            readonly CKM_CAST3_MAC_GENERAL: long;
            readonly CKM_CAST5_CBC: long;
            readonly CKM_CAST5_CBC_PAD: long;
            readonly CKM_CAST5_ECB: long;
            readonly CKM_CAST5_KEY_GEN: long;
            readonly CKM_CAST5_MAC: long;
            readonly CKM_CAST5_MAC_GENERAL: long;
            readonly CKM_CAST_CBC: long;
            readonly CKM_CAST_CBC_PAD: long;
            readonly CKM_CAST_ECB: long;
            readonly CKM_CAST_KEY_GEN: long;
            readonly CKM_CAST_MAC: long;
            readonly CKM_CAST_MAC_GENERAL: long;
            readonly CKM_CDMF_CBC: long;
            readonly CKM_CDMF_CBC_PAD: long;
            readonly CKM_CDMF_ECB: long;
            readonly CKM_CDMF_KEY_GEN: long;
            readonly CKM_CDMF_MAC: long;
            readonly CKM_CDMF_MAC_GENERAL: long;
            readonly CKM_CHACHA20: long;
            readonly CKM_CHACHA20_KEY_GEN: long;
            readonly CKM_CHACHA20_POLY1305: long;
            readonly CKM_CMS_SIG: long;
            readonly CKM_CONCATENATE_BASE_AND_DATA: long;
            readonly CKM_CONCATENATE_BASE_AND_KEY: long;
            readonly CKM_CONCATENATE_DATA_AND_BASE: long;
            readonly CKM_DES2_KEY_GEN: long;
            readonly CKM_DES3_CBC: long;
            readonly CKM_DES3_CBC_ENCRYPT_DATA: long;
            readonly CKM_DES3_CBC_PAD: long;
            readonly CKM_DES3_CMAC: long;
            readonly CKM_DES3_CMAC_GENERAL: long;
            readonly CKM_DES3_ECB: long;
            readonly CKM_DES3_ECB_ENCRYPT_DATA: long;
            readonly CKM_DES3_KEY_GEN: long;
            readonly CKM_DES3_MAC: long;
            readonly CKM_DES3_MAC_GENERAL: long;
            readonly CKM_DES_CBC: long;
            readonly CKM_DES_CBC_ENCRYPT_DATA: long;
            readonly CKM_DES_CBC_PAD: long;
            readonly CKM_DES_CFB64: long;
            readonly CKM_DES_CFB8: long;
            readonly CKM_DES_ECB: long;
            readonly CKM_DES_ECB_ENCRYPT_DATA: long;
            readonly CKM_DES_KEY_GEN: long;
            readonly CKM_DES_MAC: long;
            readonly CKM_DES_MAC_GENERAL: long;
            readonly CKM_DES_OFB64: long;
            readonly CKM_DES_OFB8: long;
            readonly CKM_DH_PKCS_DERIVE: long;
            readonly CKM_DH_PKCS_KEY_PAIR_GEN: long;
            readonly CKM_DH_PKCS_PARAMETER_GEN: long;
            readonly CKM_DSA: long;
            readonly CKM_DSA_FIPS_G_GEN: long;
            readonly CKM_DSA_KEY_PAIR_GEN: long;
            readonly CKM_DSA_PARAMETER_GEN: long;
            readonly CKM_DSA_PROBABLISTIC_PARAMETER_GEN: long;
            readonly CKM_DSA_SHA1: long;
            readonly CKM_DSA_SHA224: long;
            readonly CKM_DSA_SHA256: long;
            readonly CKM_DSA_SHA384: long;
            readonly CKM_DSA_SHA3_224: long;
            readonly CKM_DSA_SHA3_256: long;
            readonly CKM_DSA_SHA3_384: long;
            readonly CKM_DSA_SHA3_512: long;
            readonly CKM_DSA_SHA512: long;
            readonly CKM_DSA_SHAWE_TAYLOR_PARAMETER_GEN: long;
            readonly CKM_ECDH1_COFACTOR_DERIVE: long;
            readonly CKM_ECDH1_DERIVE: long;
            readonly CKM_ECDH_AES_KEY_WRAP: long;
            readonly CKM_ECDSA: long;
            readonly CKM_ECDSA_KEY_PAIR_GEN: long;
            readonly CKM_ECDSA_SHA1: long;
            readonly CKM_ECDSA_SHA224: long;
            readonly CKM_ECDSA_SHA256: long;
            readonly CKM_ECDSA_SHA384: long;
            readonly CKM_ECDSA_SHA3_224: long;
            readonly CKM_ECDSA_SHA3_256: long;
            readonly CKM_ECDSA_SHA3_384: long;
            readonly CKM_ECDSA_SHA3_512: long;
            readonly CKM_ECDSA_SHA512: long;
            readonly CKM_ECMQV_DERIVE: long;
            readonly CKM_EC_EDWARDS_KEY_PAIR_GEN: long;
            readonly CKM_EC_KEY_PAIR_GEN: long;
            readonly CKM_EC_KEY_PAIR_GEN_W_EXTRA_BITS: long;
            readonly CKM_EC_MONTGOMERY_KEY_PAIR_GEN: long;
            readonly CKM_EDDSA: long;
            readonly CKM_EXTRACT_KEY_FROM_KEY: long;
            readonly CKM_FASTHASH: long;
            readonly CKM_FORTEZZA_TIMESTAMP: long;
            readonly CKM_GENERIC_SECRET_KEY_GEN: long;
            readonly CKM_GOST28147: long;
            readonly CKM_GOST28147_ECB: long;
            readonly CKM_GOST28147_KEY_GEN: long;
            readonly CKM_GOST28147_KEY_WRAP: long;
            readonly CKM_GOST28147_MAC: long;
            readonly CKM_GOSTR3410: long;
            readonly CKM_GOSTR3410_DERIVE: long;
            readonly CKM_GOSTR3410_KEY_PAIR_GEN: long;
            readonly CKM_GOSTR3410_KEY_WRAP: long;
            readonly CKM_GOSTR3410_WITH_GOSTR3411: long;
            readonly CKM_GOSTR3411: long;
            readonly CKM_GOSTR3411_HMAC: long;
            readonly CKM_HKDF_DATA: long;
            readonly CKM_HKDF_DERIVE: long;
            readonly CKM_HKDF_KEY_GEN: long;
            readonly CKM_HOTP: long;
            readonly CKM_HOTP_KEY_GEN: long;
            readonly CKM_IDEA_CBC: long;
            readonly CKM_IDEA_CBC_PAD: long;
            readonly CKM_IDEA_ECB: long;
            readonly CKM_IDEA_KEY_GEN: long;
            readonly CKM_IDEA_MAC: long;
            readonly CKM_IDEA_MAC_GENERAL: long;
            readonly CKM_JUNIPER_CBC128: long;
            readonly CKM_JUNIPER_COUNTER: long;
            readonly CKM_JUNIPER_ECB128: long;
            readonly CKM_JUNIPER_KEY_GEN: long;
            readonly CKM_JUNIPER_SHUFFLE: long;
            readonly CKM_JUNIPER_WRAP: long;
            readonly CKM_KEA_DERIVE: long;
            readonly CKM_KEA_KEY_DERIVE: long;
            readonly CKM_KEA_KEY_PAIR_GEN: long;
            readonly CKM_KEY_WRAP_LYNKS: long;
            readonly CKM_KEY_WRAP_SET_OAEP: long;
            readonly CKM_KIP_DERIVE: long;
            readonly CKM_KIP_MAC: long;
            readonly CKM_KIP_WRAP: long;
            readonly CKM_MD2: long;
            readonly CKM_MD2_HMAC: long;
            readonly CKM_MD2_HMAC_GENERAL: long;
            readonly CKM_MD2_KEY_DERIVATION: long;
            readonly CKM_MD2_RSA_PKCS: long;
            readonly CKM_MD5: long;
            readonly CKM_MD5_HMAC: long;
            readonly CKM_MD5_HMAC_GENERAL: long;
            readonly CKM_MD5_KEY_DERIVATION: long;
            readonly CKM_MD5_RSA_PKCS: long;
            readonly CKM_NSS_PKCS12_PBE_SHA224_HMAC_KEY_GEN: long;
            readonly CKM_NSS_PKCS12_PBE_SHA256_HMAC_KEY_GEN: long;
            readonly CKM_NSS_PKCS12_PBE_SHA384_HMAC_KEY_GEN: long;
            readonly CKM_NSS_PKCS12_PBE_SHA512_HMAC_KEY_GEN: long;
            readonly CKM_NSS_TLS_PRF_GENERAL: long;
            readonly CKM_NULL: long;
            readonly CKM_PBA_SHA1_WITH_SHA1_HMAC: long;
            readonly CKM_PBE_MD2_DES_CBC: long;
            readonly CKM_PBE_MD5_CAST128_CBC: long;
            readonly CKM_PBE_MD5_CAST3_CBC: long;
            readonly CKM_PBE_MD5_CAST5_CBC: long;
            readonly CKM_PBE_MD5_CAST_CBC: long;
            readonly CKM_PBE_MD5_DES_CBC: long;
            readonly CKM_PBE_SHA1_CAST128_CBC: long;
            readonly CKM_PBE_SHA1_CAST5_CBC: long;
            readonly CKM_PBE_SHA1_DES2_EDE_CBC: long;
            readonly CKM_PBE_SHA1_DES3_EDE_CBC: long;
            readonly CKM_PBE_SHA1_RC2_128_CBC: long;
            readonly CKM_PBE_SHA1_RC2_40_CBC: long;
            readonly CKM_PBE_SHA1_RC4_128: long;
            readonly CKM_PBE_SHA1_RC4_40: long;
            readonly CKM_PKCS5_PBKD2: long;
            readonly CKM_POLY1305: long;
            readonly CKM_POLY1305_KEY_GEN: long;
            readonly CKM_RC2_CBC: long;
            readonly CKM_RC2_CBC_PAD: long;
            readonly CKM_RC2_ECB: long;
            readonly CKM_RC2_KEY_GEN: long;
            readonly CKM_RC2_MAC: long;
            readonly CKM_RC2_MAC_GENERAL: long;
            readonly CKM_RC4: long;
            readonly CKM_RC4_KEY_GEN: long;
            readonly CKM_RC5_CBC: long;
            readonly CKM_RC5_CBC_PAD: long;
            readonly CKM_RC5_ECB: long;
            readonly CKM_RC5_KEY_GEN: long;
            readonly CKM_RC5_MAC: long;
            readonly CKM_RC5_MAC_GENERAL: long;
            readonly CKM_RIPEMD128: long;
            readonly CKM_RIPEMD128_HMAC: long;
            readonly CKM_RIPEMD128_HMAC_GENERAL: long;
            readonly CKM_RIPEMD128_RSA_PKCS: long;
            readonly CKM_RIPEMD160: long;
            readonly CKM_RIPEMD160_HMAC: long;
            readonly CKM_RIPEMD160_HMAC_GENERAL: long;
            readonly CKM_RIPEMD160_RSA_PKCS: long;
            readonly CKM_RSA_9796: long;
            readonly CKM_RSA_AES_KEY_WRAP: long;
            readonly CKM_RSA_PKCS: long;
            readonly CKM_RSA_PKCS_KEY_PAIR_GEN: long;
            readonly CKM_RSA_PKCS_OAEP: long;
            readonly CKM_RSA_PKCS_OAEP_TPM_1_1: long;
            readonly CKM_RSA_PKCS_PSS: long;
            readonly CKM_RSA_PKCS_TPM_1_1: long;
            readonly CKM_RSA_X9_31: long;
            readonly CKM_RSA_X9_31_KEY_PAIR_GEN: long;
            readonly CKM_RSA_X_509: long;
            readonly CKM_SALSA20: long;
            readonly CKM_SALSA20_KEY_GEN: long;
            readonly CKM_SALSA20_POLY1305: long;
            readonly CKM_SECURID: long;
            readonly CKM_SECURID_KEY_GEN: long;
            readonly CKM_SEED_CBC: long;
            readonly CKM_SEED_CBC_ENCRYPT_DATA: long;
            readonly CKM_SEED_CBC_PAD: long;
            readonly CKM_SEED_ECB: long;
            readonly CKM_SEED_ECB_ENCRYPT_DATA: long;
            readonly CKM_SEED_KEY_GEN: long;
            readonly CKM_SEED_MAC: long;
            readonly CKM_SEED_MAC_GENERAL: long;
            readonly CKM_SHA1_KEY_DERIVATION: long;
            readonly CKM_SHA1_RSA_PKCS: long;
            readonly CKM_SHA1_RSA_PKCS_PSS: long;
            readonly CKM_SHA1_RSA_X9_31: long;
            readonly CKM_SHA224: long;
            readonly CKM_SHA224_HMAC: long;
            readonly CKM_SHA224_HMAC_GENERAL: long;
            readonly CKM_SHA224_KEY_DERIVATION: long;
            readonly CKM_SHA224_KEY_GEN: long;
            readonly CKM_SHA224_RSA_PKCS: long;
            readonly CKM_SHA224_RSA_PKCS_PSS: long;
            readonly CKM_SHA256: long;
            readonly CKM_SHA256_HMAC: long;
            readonly CKM_SHA256_HMAC_GENERAL: long;
            readonly CKM_SHA256_KEY_DERIVATION: long;
            readonly CKM_SHA256_KEY_GEN: long;
            readonly CKM_SHA256_RSA_PKCS: long;
            readonly CKM_SHA256_RSA_PKCS_PSS: long;
            readonly CKM_SHA384: long;
            readonly CKM_SHA384_HMAC: long;
            readonly CKM_SHA384_HMAC_GENERAL: long;
            readonly CKM_SHA384_KEY_DERIVATION: long;
            readonly CKM_SHA384_KEY_GEN: long;
            readonly CKM_SHA384_RSA_PKCS: long;
            readonly CKM_SHA384_RSA_PKCS_PSS: long;
            readonly CKM_SHA3_224: long;
            readonly CKM_SHA3_224_HMAC: long;
            readonly CKM_SHA3_224_HMAC_GENERAL: long;
            readonly CKM_SHA3_224_KEY_DERIVATION: long;
            readonly CKM_SHA3_224_KEY_GEN: long;
            readonly CKM_SHA3_224_RSA_PKCS: long;
            readonly CKM_SHA3_224_RSA_PKCS_PSS: long;
            readonly CKM_SHA3_256: long;
            readonly CKM_SHA3_256_HMAC: long;
            readonly CKM_SHA3_256_HMAC_GENERAL: long;
            readonly CKM_SHA3_256_KEY_DERIVATION: long;
            readonly CKM_SHA3_256_KEY_GEN: long;
            readonly CKM_SHA3_256_RSA_PKCS: long;
            readonly CKM_SHA3_256_RSA_PKCS_PSS: long;
            readonly CKM_SHA3_384: long;
            readonly CKM_SHA3_384_HMAC: long;
            readonly CKM_SHA3_384_HMAC_GENERAL: long;
            readonly CKM_SHA3_384_KEY_DERIVATION: long;
            readonly CKM_SHA3_384_KEY_GEN: long;
            readonly CKM_SHA3_384_RSA_PKCS: long;
            readonly CKM_SHA3_384_RSA_PKCS_PSS: long;
            readonly CKM_SHA3_512: long;
            readonly CKM_SHA3_512_HMAC: long;
            readonly CKM_SHA3_512_HMAC_GENERAL: long;
            readonly CKM_SHA3_512_KEY_DERIVATION: long;
            readonly CKM_SHA3_512_KEY_GEN: long;
            readonly CKM_SHA3_512_RSA_PKCS: long;
            readonly CKM_SHA3_512_RSA_PKCS_PSS: long;
            readonly CKM_SHA512: long;
            readonly CKM_SHA512_224: long;
            readonly CKM_SHA512_224_HMAC: long;
            readonly CKM_SHA512_224_HMAC_GENERAL: long;
            readonly CKM_SHA512_224_KEY_DERIVATION: long;
            readonly CKM_SHA512_224_KEY_GEN: long;
            readonly CKM_SHA512_256: long;
            readonly CKM_SHA512_256_HMAC: long;
            readonly CKM_SHA512_256_HMAC_GENERAL: long;
            readonly CKM_SHA512_256_KEY_DERIVATION: long;
            readonly CKM_SHA512_256_KEY_GEN: long;
            readonly CKM_SHA512_HMAC: long;
            readonly CKM_SHA512_HMAC_GENERAL: long;
            readonly CKM_SHA512_KEY_DERIVATION: long;
            readonly CKM_SHA512_KEY_GEN: long;
            readonly CKM_SHA512_RSA_PKCS: long;
            readonly CKM_SHA512_RSA_PKCS_PSS: long;
            readonly CKM_SHA512_T: long;
            readonly CKM_SHA512_T_HMAC: long;
            readonly CKM_SHA512_T_HMAC_GENERAL: long;
            readonly CKM_SHA512_T_KEY_DERIVATION: long;
            readonly CKM_SHA512_T_KEY_GEN: long;
            readonly CKM_SHAKE_128_KEY_DERIVATION: long;
            readonly CKM_SHAKE_256_KEY_DERIVATION: long;
            readonly CKM_SHA_1: long;
            readonly CKM_SHA_1_HMAC: long;
            readonly CKM_SHA_1_HMAC_GENERAL: long;
            readonly CKM_SHA_1_KEY_GEN: long;
            readonly CKM_SKIPJACK_CBC64: long;
            readonly CKM_SKIPJACK_CFB16: long;
            readonly CKM_SKIPJACK_CFB32: long;
            readonly CKM_SKIPJACK_CFB64: long;
            readonly CKM_SKIPJACK_CFB8: long;
            readonly CKM_SKIPJACK_ECB64: long;
            readonly CKM_SKIPJACK_KEY_GEN: long;
            readonly CKM_SKIPJACK_OFB64: long;
            readonly CKM_SKIPJACK_PRIVATE_WRAP: long;
            readonly CKM_SKIPJACK_RELAYX: long;
            readonly CKM_SKIPJACK_WRAP: long;
            readonly CKM_SP800_108_COUNTER_KDF: long;
            readonly CKM_SP800_108_DOUBLE_PIPELINE_KDF: long;
            readonly CKM_SP800_108_FEEDBACK_KDF: long;
            readonly CKM_SSL3_KEY_AND_MAC_DERIVE: long;
            readonly CKM_SSL3_MASTER_KEY_DERIVE: long;
            readonly CKM_SSL3_MASTER_KEY_DERIVE_DH: long;
            readonly CKM_SSL3_MD5_MAC: long;
            readonly CKM_SSL3_PRE_MASTER_KEY_GEN: long;
            readonly CKM_SSL3_SHA1_MAC: long;
            readonly CKM_TLS10_MAC_CLIENT: long;
            readonly CKM_TLS10_MAC_SERVER: long;
            readonly CKM_TLS12_KDF: long;
            readonly CKM_TLS12_KEY_AND_MAC_DERIVE: long;
            readonly CKM_TLS12_KEY_SAFE_DERIVE: long;
            readonly CKM_TLS12_MAC: long;
            readonly CKM_TLS12_MASTER_KEY_DERIVE: long;
            readonly CKM_TLS12_MASTER_KEY_DERIVE_DH: long;
            readonly CKM_TLS_KDF: long;
            readonly CKM_TLS_KEY_AND_MAC_DERIVE: long;
            readonly CKM_TLS_MAC: long;
            readonly CKM_TLS_MASTER_KEY_DERIVE: long;
            readonly CKM_TLS_MASTER_KEY_DERIVE_DH: long;
            readonly CKM_TLS_PRE_MASTER_KEY_GEN: long;
            readonly CKM_TLS_PRF: long;
            readonly CKM_TWOFISH_CBC: long;
            readonly CKM_TWOFISH_CBC_PAD: long;
            readonly CKM_TWOFISH_KEY_GEN: long;
            readonly CKM_VENDOR_DEFINED: long;
            readonly CKM_WTLS_CLIENT_KEY_AND_MAC_DERIVE: long;
            readonly CKM_WTLS_MASTER_KEY_DERIVE: long;
            readonly CKM_WTLS_MASTER_KEY_DERIVE_DH_ECC: long;
            readonly CKM_WTLS_PRE_MASTER_KEY_GEN: long;
            readonly CKM_WTLS_PRF: long;
            readonly CKM_WTLS_SERVER_KEY_AND_MAC_DERIVE: long;
            readonly CKM_X2RATCHET_DECRYPT: long;
            readonly CKM_X2RATCHET_ENCRYPT: long;
            readonly CKM_X2RATCHET_INITIALIZE: long;
            readonly CKM_X2RATCHET_RESPOND: long;
            readonly CKM_X3DH_INITIALIZE: long;
            readonly CKM_X3DH_RESPOND: long;
            readonly CKM_X9_42_DH_DERIVE: long;
            readonly CKM_X9_42_DH_HYBRID_DERIVE: long;
            readonly CKM_X9_42_DH_KEY_PAIR_GEN: long;
            readonly CKM_X9_42_DH_PARAMETER_GEN: long;
            readonly CKM_X9_42_MQV_DERIVE: long;
            readonly CKM_XEDDSA: long;
            readonly CKM_XOR_BASE_AND_DATA: long;
            readonly CKN_SURRENDER: long;
            readonly CKO_CERTIFICATE: long;
            readonly CKO_DATA: long;
            readonly CKO_DOMAIN_PARAMETERS: long;
            readonly CKO_HW_FEATURE: long;
            readonly CKO_MECHANISM: long;
            readonly CKO_NETSCAPE_TRUST: long;
            readonly CKO_OTP_KEY: long;
            readonly CKO_PRIVATE_KEY: long;
            readonly CKO_PROFILE: long;
            readonly CKO_PUBLIC_KEY: long;
            readonly CKO_SECRET_KEY: long;
            readonly CKO_VENDOR_DEFINED: long;
            readonly CKP_PKCS5_PBKD2_HMAC_GOSTR3411: long;
            readonly CKP_PKCS5_PBKD2_HMAC_SHA1: long;
            readonly CKP_PKCS5_PBKD2_HMAC_SHA224: long;
            readonly CKP_PKCS5_PBKD2_HMAC_SHA256: long;
            readonly CKP_PKCS5_PBKD2_HMAC_SHA384: long;
            readonly CKP_PKCS5_PBKD2_HMAC_SHA512: long;
            readonly CKP_PKCS5_PBKD2_HMAC_SHA512_224: long;
            readonly CKP_PKCS5_PBKD2_HMAC_SHA512_256: long;
            readonly CKS_RO_PUBLIC_SESSION: long;
            readonly CKS_RO_USER_FUNCTIONS: long;
            readonly CKS_RW_PUBLIC_SESSION: long;
            readonly CKS_RW_SO_FUNCTIONS: long;
            readonly CKS_RW_USER_FUNCTIONS: long;
            readonly CKT_NETSCAPE_MUST_VERIFY: long;
            readonly CKT_NETSCAPE_TRUSTED: long;
            readonly CKT_NETSCAPE_TRUSTED_DELEGATOR: long;
            readonly CKT_NETSCAPE_TRUST_UNKNOWN: long;
            readonly CKT_NETSCAPE_UNTRUSTED: long;
            readonly CKT_NETSCAPE_VALID: long;
            readonly CKT_NETSCAPE_VALID_DELEGATOR: long;
            readonly CKU_SO: long;
            readonly CKU_USER: long;
            readonly CKZ_DATA_SPECIFIED: long;
            readonly CKZ_SALT_SPECIFIED: long;
            readonly CK_EFFECTIVELY_INFINITE: long;
            readonly CK_INVALID_HANDLE: long;
            readonly CK_UNAVAILABLE_INFORMATION: long;
            readonly FALSE: boolean;
            readonly NULL_PTR: any;
            readonly PCKK_ANY: long;
            readonly PCKK_HMAC: long;
            readonly PCKK_SSLMAC: long;
            readonly PCKK_TLSMASTER: long;
            readonly PCKK_TLSPREMASTER: long;
            readonly PCKK_TLSRSAPREMASTER: long;
            readonly PCKM_KEYSTORE: long;
            readonly PCKM_SECURERANDOM: long;
            readonly PCKO_ANY: long;
            readonly TRUE: boolean;
          }
          let PKCS11Constants: _PKCS11Constants$$static;
          interface _PKCS11Constants {
          }
          interface PKCS11Constants extends CombineTypes<[_PKCS11Constants, java.lang.Object]> {}
          interface _PKCS11Exception$$static extends ClassLike {
            _lookup(errorCode: long): string;
            _serialVersionUID: long;
            new(errorCode: long, a1: string): PKCS11Exception;
          }
          let PKCS11Exception: _PKCS11Exception$$static;
          interface _PKCS11Exception {
            getErrorCode(): long;
            getMessage(): string;
            match(errorEnum: PKCS11Exception$RV): boolean;
            _errorCode: long;
            _errorMsg: string;
          }
          interface PKCS11Exception extends CombineTypes<[_PKCS11Exception, java.lang.Exception]> {}
          interface _PKCS11Exception$RV$$static extends ClassLike {
            valueOf(name: string): PKCS11Exception$RV;
            values(): PKCS11Exception$RV[];
            readonly CKR_ACTION_PROHIBITED: PKCS11Exception$RV;
            readonly CKR_AEAD_DECRYPT_FAILED: PKCS11Exception$RV;
            readonly CKR_ARGUMENTS_BAD: PKCS11Exception$RV;
            readonly CKR_ATTRIBUTE_READ_ONLY: PKCS11Exception$RV;
            readonly CKR_ATTRIBUTE_SENSITIVE: PKCS11Exception$RV;
            readonly CKR_ATTRIBUTE_TYPE_INVALID: PKCS11Exception$RV;
            readonly CKR_ATTRIBUTE_VALUE_INVALID: PKCS11Exception$RV;
            readonly CKR_BUFFER_TOO_SMALL: PKCS11Exception$RV;
            readonly CKR_CANCEL: PKCS11Exception$RV;
            readonly CKR_CANT_LOCK: PKCS11Exception$RV;
            readonly CKR_CRYPTOKI_ALREADY_INITIALIZED: PKCS11Exception$RV;
            readonly CKR_CRYPTOKI_NOT_INITIALIZED: PKCS11Exception$RV;
            readonly CKR_CURVE_NOT_SUPPORTED: PKCS11Exception$RV;
            readonly CKR_DATA_INVALID: PKCS11Exception$RV;
            readonly CKR_DATA_LEN_RANGE: PKCS11Exception$RV;
            readonly CKR_DEVICE_ERROR: PKCS11Exception$RV;
            readonly CKR_DEVICE_MEMORY: PKCS11Exception$RV;
            readonly CKR_DEVICE_REMOVED: PKCS11Exception$RV;
            readonly CKR_DOMAIN_PARAMS_INVALID: PKCS11Exception$RV;
            readonly CKR_ENCRYPTED_DATA_INVALID: PKCS11Exception$RV;
            readonly CKR_ENCRYPTED_DATA_LEN_RANGE: PKCS11Exception$RV;
            readonly CKR_EXCEEDED_MAX_ITERATIONS: PKCS11Exception$RV;
            readonly CKR_FIPS_SELF_TEST_FAILED: PKCS11Exception$RV;
            readonly CKR_FUNCTION_CANCELED: PKCS11Exception$RV;
            readonly CKR_FUNCTION_FAILED: PKCS11Exception$RV;
            readonly CKR_FUNCTION_NOT_PARALLEL: PKCS11Exception$RV;
            readonly CKR_FUNCTION_NOT_SUPPORTED: PKCS11Exception$RV;
            readonly CKR_FUNCTION_REJECTED: PKCS11Exception$RV;
            readonly CKR_GENERAL_ERROR: PKCS11Exception$RV;
            readonly CKR_HOST_MEMORY: PKCS11Exception$RV;
            readonly CKR_INFORMATION_SENSITIVE: PKCS11Exception$RV;
            readonly CKR_KEY_CHANGED: PKCS11Exception$RV;
            readonly CKR_KEY_FUNCTION_NOT_PERMITTED: PKCS11Exception$RV;
            readonly CKR_KEY_HANDLE_INVALID: PKCS11Exception$RV;
            readonly CKR_KEY_INDIGESTIBLE: PKCS11Exception$RV;
            readonly CKR_KEY_NEEDED: PKCS11Exception$RV;
            readonly CKR_KEY_NOT_NEEDED: PKCS11Exception$RV;
            readonly CKR_KEY_NOT_WRAPPABLE: PKCS11Exception$RV;
            readonly CKR_KEY_SIZE_RANGE: PKCS11Exception$RV;
            readonly CKR_KEY_TYPE_INCONSISTENT: PKCS11Exception$RV;
            readonly CKR_KEY_UNEXTRACTABLE: PKCS11Exception$RV;
            readonly CKR_LIBRARY_LOAD_FAILED: PKCS11Exception$RV;
            readonly CKR_MECHANISM_INVALID: PKCS11Exception$RV;
            readonly CKR_MECHANISM_PARAM_INVALID: PKCS11Exception$RV;
            readonly CKR_MUTEX_BAD: PKCS11Exception$RV;
            readonly CKR_MUTEX_NOT_LOCKED: PKCS11Exception$RV;
            readonly CKR_NEED_TO_CREATE_THREADS: PKCS11Exception$RV;
            readonly CKR_NEW_PIN_MODE: PKCS11Exception$RV;
            readonly CKR_NEXT_OTP: PKCS11Exception$RV;
            readonly CKR_NO_EVENT: PKCS11Exception$RV;
            readonly CKR_OBJECT_HANDLE_INVALID: PKCS11Exception$RV;
            readonly CKR_OK: PKCS11Exception$RV;
            readonly CKR_OPERATION_ACTIVE: PKCS11Exception$RV;
            readonly CKR_OPERATION_CANCEL_FAILED: PKCS11Exception$RV;
            readonly CKR_OPERATION_NOT_INITIALIZED: PKCS11Exception$RV;
            readonly CKR_PIN_EXPIRED: PKCS11Exception$RV;
            readonly CKR_PIN_INCORRECT: PKCS11Exception$RV;
            readonly CKR_PIN_INVALID: PKCS11Exception$RV;
            readonly CKR_PIN_LEN_RANGE: PKCS11Exception$RV;
            readonly CKR_PIN_LOCKED: PKCS11Exception$RV;
            readonly CKR_PIN_TOO_WEAK: PKCS11Exception$RV;
            readonly CKR_PUBLIC_KEY_INVALID: PKCS11Exception$RV;
            readonly CKR_RANDOM_NO_RNG: PKCS11Exception$RV;
            readonly CKR_RANDOM_SEED_NOT_SUPPORTED: PKCS11Exception$RV;
            readonly CKR_SAVED_STATE_INVALID: PKCS11Exception$RV;
            readonly CKR_SESSION_CLOSED: PKCS11Exception$RV;
            readonly CKR_SESSION_COUNT: PKCS11Exception$RV;
            readonly CKR_SESSION_EXISTS: PKCS11Exception$RV;
            readonly CKR_SESSION_HANDLE_INVALID: PKCS11Exception$RV;
            readonly CKR_SESSION_PARALLEL_NOT_SUPPORTED: PKCS11Exception$RV;
            readonly CKR_SESSION_READ_ONLY: PKCS11Exception$RV;
            readonly CKR_SESSION_READ_ONLY_EXISTS: PKCS11Exception$RV;
            readonly CKR_SESSION_READ_WRITE_SO_EXISTS: PKCS11Exception$RV;
            readonly CKR_SIGNATURE_INVALID: PKCS11Exception$RV;
            readonly CKR_SIGNATURE_LEN_RANGE: PKCS11Exception$RV;
            readonly CKR_SLOT_ID_INVALID: PKCS11Exception$RV;
            readonly CKR_STATE_UNSAVEABLE: PKCS11Exception$RV;
            readonly CKR_TEMPLATE_INCOMPLETE: PKCS11Exception$RV;
            readonly CKR_TEMPLATE_INCONSISTENT: PKCS11Exception$RV;
            readonly CKR_TOKEN_NOT_PRESENT: PKCS11Exception$RV;
            readonly CKR_TOKEN_NOT_RECOGNIZED: PKCS11Exception$RV;
            readonly CKR_TOKEN_RESOURCE_EXCEEDED: PKCS11Exception$RV;
            readonly CKR_TOKEN_WRITE_PROTECTED: PKCS11Exception$RV;
            readonly CKR_UNWRAPPING_KEY_HANDLE_INVALID: PKCS11Exception$RV;
            readonly CKR_UNWRAPPING_KEY_SIZE_RANGE: PKCS11Exception$RV;
            readonly CKR_UNWRAPPING_KEY_TYPE_INCONSISTENT: PKCS11Exception$RV;
            readonly CKR_USER_ALREADY_LOGGED_IN: PKCS11Exception$RV;
            readonly CKR_USER_ANOTHER_ALREADY_LOGGED_IN: PKCS11Exception$RV;
            readonly CKR_USER_NOT_LOGGED_IN: PKCS11Exception$RV;
            readonly CKR_USER_PIN_NOT_INITIALIZED: PKCS11Exception$RV;
            readonly CKR_USER_TOO_MANY_TYPES: PKCS11Exception$RV;
            readonly CKR_USER_TYPE_INVALID: PKCS11Exception$RV;
            readonly CKR_VENDOR_DEFINED: PKCS11Exception$RV;
            readonly CKR_WRAPPED_KEY_INVALID: PKCS11Exception$RV;
            readonly CKR_WRAPPED_KEY_LEN_RANGE: PKCS11Exception$RV;
            readonly CKR_WRAPPING_KEY_HANDLE_INVALID: PKCS11Exception$RV;
            readonly CKR_WRAPPING_KEY_SIZE_RANGE: PKCS11Exception$RV;
            readonly CKR_WRAPPING_KEY_TYPE_INCONSISTENT: PKCS11Exception$RV;
          }
          let PKCS11Exception$RV: _PKCS11Exception$RV$$static;
          interface _PKCS11Exception$RV {
            _value: long;
          }
          interface PKCS11Exception$RV extends CombineTypes<[_PKCS11Exception$RV]> {}
          interface _PKCS11Exception$RV_VENDOR$$static extends ClassLike {
            valueOf(name: string): PKCS11Exception$RV_VENDOR;
            values(): PKCS11Exception$RV_VENDOR[];
            readonly CKR_NSS_CERTDB_FAILED: PKCS11Exception$RV_VENDOR;
            readonly CKR_NSS_KEYDB_FAILED: PKCS11Exception$RV_VENDOR;
          }
          let PKCS11Exception$RV_VENDOR: _PKCS11Exception$RV_VENDOR$$static;
          interface _PKCS11Exception$RV_VENDOR {
            _value: long;
          }
          interface PKCS11Exception$RV_VENDOR extends CombineTypes<[_PKCS11Exception$RV_VENDOR]> {}
          interface _PKCS11RuntimeException$$static extends ClassLike {
            _serialVersionUID: long;
            new(): PKCS11RuntimeException;
            new(message: string): PKCS11RuntimeException;
            new(encapsulatedException: java.lang.Exception): PKCS11RuntimeException;
            new(message: string, encapsulatedException: java.lang.Exception): PKCS11RuntimeException;
          }
          let PKCS11RuntimeException: _PKCS11RuntimeException$$static;
          interface _PKCS11RuntimeException {
          }
          interface PKCS11RuntimeException extends CombineTypes<[_PKCS11RuntimeException, java.lang.RuntimeException]> {}
        }
        interface _Config$$static extends ClassLike {
          _expand(s: string): string;
          _isByteArray(val: string): boolean;
          _isNumber(s: string): boolean;
          _CK_A0: wrapper.CK_ATTRIBUTE[];
          _DEBUG: boolean;
          _ERR_HALT: int;
          _ERR_IGNORE_ALL: int;
          _ERR_IGNORE_LIB: int;
          _osArch: string;
          _osName: string;
          _staticAllowSingleThreadedModules: boolean;
          _new(fn: string): Config;
        }
        let Config: _Config$$static;
        interface _Config {
          _checkDup(keyword: string): void;
          _decodeAttributeName(name: string): long;
          _decodeAttributeValue(id: long, a1: string): pkcs11.wrapper.CK_ATTRIBUTE;
          _decodeByteArray(str: string): byte[];
          _decodeNumber(str: string): int;
          _excLine(msg: string): ConfigurationException;
          _excLine(msg: string, e: java.lang.Throwable): ConfigurationException;
          _excToken(msg: string): ConfigurationException;
          _getAllowLegacy(): boolean;
          _getAllowSingleThreadedModules(): boolean;
          _getDescription(): string;
          _getDestroyTokenAfterLogout(): boolean;
          _getExplicitCancel(): boolean;
          _getFileName(): string;
          _getFunctionList(): string;
          _getHandleStartupErrors(): int;
          _getInsertionCheckInterval(): int;
          _getKeyStoreCompatibilityMode(): boolean;
          _getLibrary(): string;
          _getName(): string;
          _getNssArgs(): string;
          _getNssDbMode(): Secmod$DbMode;
          _getNssLibraryDirectory(): string;
          _getNssModule(): string;
          getNssNetscapeDbWorkaround(): boolean;
          _getNssOptimizeSpace(): boolean;
          _getNssSecmodDirectory(): string;
          _getNssUseSecmod(): boolean;
          _getNssUseSecmodTrust(): boolean;
          _getOmitInitialize(): boolean;
          _getResourceCleanerLongInterval(): int;
          _getResourceCleanerShortInterval(): int;
          _getShowInfo(): boolean;
          _getSlotID(): int;
          _getSlotListIndex(): int;
          _getTemplateManager(): TemplateManager;
          _getUseEcX963Encoding(): boolean;
          _isCloseBraces(token: int): boolean;
          _isEnabled(m: long): boolean;
          _nextToken(): int;
          _parse(): void;
          _parseAttributes(keyword: string): void;
          _parseBoolean(): boolean;
          _parseBooleanEntry(keyword: string): boolean;
          _parseComma(): void;
          _parseDescription(keyword: string): void;
          _parseDisabledMechanisms(keyword: string): void;
          _parseEnabledMechanisms(keyword: string): void;
          _parseEquals(): void;
          _parseHandleStartupErrors(keyword: string): void;
          _parseIntegerEntry(keyword: string): int;
          _parseKeyAlgorithm(): long;
          _parseLibrary(keyword: string): string;
          _parseLine(): string;
          _parseMechanism(mech: string): long;
          _parseMechanisms(keyword: string): java.util.Set<long>;
          _parseNSSArgs(keyword: string): void;
          _parseObjectClass(): long;
          _parseOpenBraces(): void;
          _parseOperation(): string;
          _parseSlotID(keyword: string): void;
          _parseSlotListIndex(keyword: string): void;
          _parseStringEntry(keyword: string): string;
          _parseWord(): string;
          _setCompatibilityAttributes(): void;
          _setupTokenizer(): void;
          _allowLegacy: boolean;
          _allowSingleThreadedModules: boolean;
          _description: string;
          _destroyTokenAfterLogout: boolean;
          _disabledMechanisms: java.util.Set<long>;
          _enabledMechanisms: java.util.Set<long>;
          _explicitCancel: boolean;
          _filename: string;
          _functionList: string;
          _handleStartupErrors: int;
          _insertionCheckInterval: int;
          _keyStoreCompatibilityMode: boolean;
          _library: string;
          _name: string;
          _nssArgs: string;
          _nssDbMode: Secmod$DbMode;
          _nssLibraryDirectory: string;
          _nssModule: string;
          _nssNetscapeDbWorkaround: boolean;
          _nssOptimizeSpace: boolean;
          _nssSecmodDirectory: string;
          _nssUseSecmod: boolean;
          _nssUseSecmodTrust: boolean;
          _omitInitialize: boolean;
          _parsedKeywords: java.util.Set<string>;
          _reader: java.io.Reader;
          _resourceCleanerLongInterval: int;
          _resourceCleanerShortInterval: int;
          _showInfo: boolean;
          _slotID: int;
          _slotListIndex: int;
          _st: java.io.StreamTokenizer;
          _templateManager: TemplateManager;
          _useEcX963Encoding: boolean;
        }
        interface Config extends CombineTypes<[_Config, java.lang.Object]> {}
        interface _ConfigurationException$$static extends ClassLike {
          _serialVersionUID: long;
          _new(msg: string): ConfigurationException;
          _new(msg: string, e: java.lang.Throwable): ConfigurationException;
        }
        let ConfigurationException: _ConfigurationException$$static;
        interface _ConfigurationException {
        }
        interface ConfigurationException extends CombineTypes<[_ConfigurationException, java.io.IOException]> {}
        interface _ConstructKeys$$static extends ClassLike {
          _constructKey(encoding: byte[], keyAlgorithm: string, keyType: int): java.security.Key;
          _constructPrivateKey(encodedKey: byte[], encodedKeyAlgorithm: string): java.security.PrivateKey;
          _constructPublicKey(encodedKey: byte[], encodedKeyAlgorithm: string): java.security.PublicKey;
          _constructSecretKey(encodedKey: byte[], encodedKeyAlgorithm: string): javax.crypto.SecretKey;
          _new(): ConstructKeys;
        }
        let ConstructKeys: _ConstructKeys$$static;
        interface _ConstructKeys {
        }
        interface ConstructKeys extends CombineTypes<[_ConstructKeys, java.lang.Object]> {}
        interface _KeyCache$$static extends ClassLike {
          _new(): KeyCache;
        }
        let KeyCache: _KeyCache$$static;
        interface _KeyCache {
          _clear(): void;
          _get(key: java.security.Key): P11Key;
          _put(key: java.security.Key, p11Key: P11Key): void;
          _cacheReference: java.lang.ref.WeakReference<java.util.Map<java.security.Key,P11Key>>;
          _strongCache: security.util.Cache<KeyCache$IdentityWrapper,P11Key>;
        }
        interface KeyCache extends CombineTypes<[_KeyCache, java.lang.Object]> {}
        interface _KeyCache$IdentityWrapper$$static extends ClassLike {
          _new(obj: any): KeyCache$IdentityWrapper;
        }
        let KeyCache$IdentityWrapper: _KeyCache$IdentityWrapper$$static;
        interface _KeyCache$IdentityWrapper {
          equals(o: any): boolean;
          hashCode(): int;
          _obj: any;
        }
        interface KeyCache$IdentityWrapper extends CombineTypes<[_KeyCache$IdentityWrapper, java.lang.Object]> {}
        interface _NativeKeyHolder$$static extends ClassLike {
          _createNativeKeyWrapper(token: Token): void;
          _decWrapperKeyRef(): void;
          _deleteNativeKeyWrapper(): void;
          _nativeKeyWrapperKeyID: long;
          _nativeKeyWrapperMechanism: wrapper.CK_MECHANISM;
          _nativeKeyWrapperRefCount: long;
          _nativeKeyWrapperSession: Session;
          _new(p11Key: P11Key, keyID: long, a2: Session, keySession: boolean, extractKeyInfo: boolean): NativeKeyHolder;
        }
        let NativeKeyHolder: _NativeKeyHolder$$static;
        interface _NativeKeyHolder {
          _getKeyID(): long;
          _releaseKeyID(): void;
          _keyID: long;
          _nativeKeyInfo: byte[];
          _p11Key: P11Key;
          _ref: SessionKeyRef;
          _refCount: int;
          _wrapperKeyUsed: boolean;
        }
        interface NativeKeyHolder extends CombineTypes<[_NativeKeyHolder, java.lang.Object]> {}
        interface _P11AEADCipher$$static extends ClassLike {
          _NIO_ACCESS: jdk.internal.access.JavaNioAccess;
          _new(token: Token, algorithm: string, mechanism: long): P11AEADCipher;
        }
        let P11AEADCipher: _P11AEADCipher$$static;
        interface _P11AEADCipher {
          _cancelOperation(): void;
          _doFinalLength(inLen: int): int;
          _engineDoFinal(_in: byte[], inOfs: int, inLen: int): byte[];
          _engineDoFinal(_in: byte[], inOfs: int, inLen: int, out: byte[], outOfs: int): int;
          _engineDoFinal(inBuffer: java.nio.ByteBuffer, outBuffer: java.nio.ByteBuffer): int;
          _engineGetBlockSize(): int;
          _engineGetIV(): byte[];
          _engineGetKeySize(key: java.security.Key): int;
          _engineGetOutputSize(inputLen: int): int;
          _engineGetParameters(): java.security.AlgorithmParameters;
          _engineInit(opmode: int, key: java.security.Key, sr: java.security.SecureRandom): void;
          _engineInit(opmode: int, key: java.security.Key, params: java.security.spec.AlgorithmParameterSpec, sr: java.security.SecureRandom): void;
          _engineInit(opmode: int, key: java.security.Key, params: java.security.AlgorithmParameters, sr: java.security.SecureRandom): void;
          _engineSetMode(mode: string): void;
          _engineSetPadding(padding: string): void;
          _engineUnwrap(wrappedKey: byte[], wrappedKeyAlgorithm: string, wrappedKeyType: int): java.security.Key;
          _engineUpdate(_in: byte[], inOfs: int, inLen: int): byte[];
          _engineUpdate(_in: byte[], inOfs: int, inLen: int, out: byte[], outOfs: int): int;
          _engineUpdate(inBuffer: java.nio.ByteBuffer, outBuffer: java.nio.ByteBuffer): int;
          _engineUpdateAAD(src: byte[], srcOfs: int, srcLen: int): void;
          _engineUpdateAAD(src: java.nio.ByteBuffer): void;
          _engineWrap(key: java.security.Key): byte[];
          _ensureInitialized(): void;
          _handleException(e: pkcs11.wrapper.PKCS11Exception): void;
          _implDoFinal(_in: byte[], inOfs: int, inLen: int, out: byte[], outOfs: int, outLen: int): int;
          _implDoFinal(inBuffer: java.nio.ByteBuffer, outBuffer: java.nio.ByteBuffer): int;
          _implInit(opmode: int, key: java.security.Key, iv: byte[], tagLen: int, sr: java.security.SecureRandom): void;
          _implUpdate(_in: byte[], inOfs: int, inLen: int): int;
          _implUpdate(inBuf: java.nio.ByteBuffer): int;
          _initialize(): void;
          _reset(doCancel: boolean): void;
          _aadBuffer: java.io.ByteArrayOutputStream;
          _dataBuffer: java.io.ByteArrayOutputStream;
          _encrypt: boolean;
          _fixedKeySize: int;
          _initialized: boolean;
          _iv: byte[];
          _lastEncIv: byte[];
          _lastEncKey: P11Key;
          _mechanism: long;
          _p11Key: P11Key;
          _random: java.security.SecureRandom;
          _requireReinit: boolean;
          _session: Session;
          _tagLen: int;
          _token: Token;
          _type: P11AEADCipher$Transformation;
          _updateCalled: boolean;
        }
        interface P11AEADCipher extends CombineTypes<[_P11AEADCipher, javax.crypto.CipherSpi]> {}
        interface _P11AEADCipher$Transformation$$static extends ClassLike {
          valueOf(name: string): P11AEADCipher$Transformation;
          values(): P11AEADCipher$Transformation[];
          readonly AES_GCM: P11AEADCipher$Transformation;
          readonly CHACHA20_POLY1305: P11AEADCipher$Transformation;
        }
        let P11AEADCipher$Transformation: _P11AEADCipher$Transformation$$static;
        interface _P11AEADCipher$Transformation {
          _defIvLen: int;
          _defTagLen: int;
          _keyAlgo: string;
          _mode: string;
          _padding: string;
        }
        interface P11AEADCipher$Transformation extends CombineTypes<[_P11AEADCipher$Transformation]> {}
        interface _P11Cipher$$static extends ClassLike {
          _MODE_CBC: int;
          _MODE_CTR: int;
          _MODE_ECB: int;
          _NIO_ACCESS: jdk.internal.access.JavaNioAccess;
          _PAD_NONE: int;
          _PAD_PKCS5: int;
          _new(token: Token, algorithm: string, mechanism: long): P11Cipher;
        }
        let P11Cipher: _P11Cipher$$static;
        interface _P11Cipher {
          _bufferInputBytes(_in: byte[], inOfs: int, len: int): void;
          _bufferInputBytes(inBuffer: java.nio.ByteBuffer, len: int): void;
          _cancelOperation(): void;
          _doFinalLength(inLen: int): int;
          _engineDoFinal(_in: byte[], inOfs: int, inLen: int): byte[];
          _engineDoFinal(_in: byte[], inOfs: int, inLen: int, out: byte[], outOfs: int): int;
          _engineDoFinal(inBuffer: java.nio.ByteBuffer, outBuffer: java.nio.ByteBuffer): int;
          _engineGetBlockSize(): int;
          _engineGetIV(): byte[];
          _engineGetKeySize(key: java.security.Key): int;
          _engineGetOutputSize(inputLen: int): int;
          _engineGetParameters(): java.security.AlgorithmParameters;
          _engineInit(opmode: int, key: java.security.Key, random: java.security.SecureRandom): void;
          _engineInit(opmode: int, key: java.security.Key, params: java.security.spec.AlgorithmParameterSpec, random: java.security.SecureRandom): void;
          _engineInit(opmode: int, key: java.security.Key, params: java.security.AlgorithmParameters, random: java.security.SecureRandom): void;
          _engineSetMode(mode: string): void;
          _engineSetPadding(padding: string): void;
          _engineUnwrap(wrappedKey: byte[], wrappedKeyAlgorithm: string, wrappedKeyType: int): java.security.Key;
          _engineUpdate(_in: byte[], inOfs: int, inLen: int): byte[];
          _engineUpdate(_in: byte[], inOfs: int, inLen: int, out: byte[], outOfs: int): int;
          _engineUpdate(inBuffer: java.nio.ByteBuffer, outBuffer: java.nio.ByteBuffer): int;
          _engineWrap(key: java.security.Key): byte[];
          _ensureInitialized(): void;
          _handleException(e: pkcs11.wrapper.PKCS11Exception): void;
          _implDoFinal(out: byte[], outOfs: int, outLen: int): int;
          _implDoFinal(outBuffer: java.nio.ByteBuffer): int;
          _implInit(opmode: int, key: java.security.Key, iv: byte[], random: java.security.SecureRandom): void;
          _implUpdate(_in: byte[], inOfs: int, inLen: int, out: byte[], outOfs: int, outLen: int): int;
          _implUpdate(inBuffer: java.nio.ByteBuffer, outBuffer: java.nio.ByteBuffer): int;
          _initialize(): void;
          _parseMode(mode: string): int;
          _reset(doCancel: boolean): void;
          _updateLength(inLen: int): int;
          _algorithm: string;
          _blockMode: int;
          _blockSize: int;
          _bytesBuffered: int;
          _encrypt: boolean;
          _fixedKeySize: int;
          _initialized: boolean;
          _iv: byte[];
          _keyAlgorithm: string;
          _mechanism: long;
          _p11Key: P11Key;
          _padBuffer: byte[];
          _padBufferLen: int;
          _paddingObj: P11Cipher$Padding;
          _paddingType: int;
          _reqBlockUpdates: boolean;
          _session: Session;
          _token: Token;
        }
        interface P11Cipher extends CombineTypes<[_P11Cipher, javax.crypto.CipherSpi]> {}
        interface _P11Cipher$PKCS5Padding$$static extends ClassLike {
          _new(blockSize: int): P11Cipher$PKCS5Padding;
        }
        let P11Cipher$PKCS5Padding: _P11Cipher$PKCS5Padding$$static;
        interface _P11Cipher$PKCS5Padding {
          setPaddingBytes(paddingBuffer: byte[], startOff: int, padLen: int): int;
          unpad(paddedData: byte[], len: int): int;
          _blockSize: int;
        }
        interface P11Cipher$PKCS5Padding extends CombineTypes<[_P11Cipher$PKCS5Padding, sun.security.pkcs11.P11Cipher$Padding, java.lang.Object]> {}
        interface _P11Cipher$Padding$$static extends ClassLike {
        }
        let P11Cipher$Padding: _P11Cipher$Padding$$static;
        interface _P11Cipher$Padding {
          setPaddingBytes(a0: byte[], a1: int, a2: int): int;
          unpad(a0: byte[], a1: int): int;
        }
        interface P11Cipher$Padding extends CombineTypes<[_P11Cipher$Padding, java.lang.Object]> {}
        interface _P11DHKeyFactory$$static extends ClassLike {
          _new(token: Token, algorithm: string): P11DHKeyFactory;
        }
        let P11DHKeyFactory: _P11DHKeyFactory$$static;
        interface _P11DHKeyFactory {
          _engineGeneratePrivate(keySpec: java.security.spec.KeySpec): java.security.PrivateKey;
          _engineGeneratePublic(keySpec: java.security.spec.KeySpec): java.security.PublicKey;
          _generatePrivate(x: java.math.BigInteger, p: java.math.BigInteger, g: java.math.BigInteger): java.security.PrivateKey;
          _generatePublic(y: java.math.BigInteger, p: java.math.BigInteger, g: java.math.BigInteger): java.security.PublicKey;
          _implGetPrivateKeySpec<T>(key: P11Key, keySpec: java.lang.Class<T>, session: Session[]): T;
          _implGetPublicKeySpec<T>(key: P11Key, keySpec: java.lang.Class<T>, session: Session[]): T;
          _implGetSoftwareFactory(): java.security.KeyFactory;
          _implTranslatePrivateKey(key: java.security.PrivateKey): java.security.PrivateKey;
          _implTranslatePublicKey(key: java.security.PublicKey): java.security.PublicKey;
        }
        interface P11DHKeyFactory extends CombineTypes<[_P11DHKeyFactory, sun.security.pkcs11.P11KeyFactory]> {}
        interface _P11DSAKeyFactory$$static extends ClassLike {
          _new(token: Token, algorithm: string): P11DSAKeyFactory;
        }
        let P11DSAKeyFactory: _P11DSAKeyFactory$$static;
        interface _P11DSAKeyFactory {
          _engineGeneratePrivate(keySpec: java.security.spec.KeySpec): java.security.PrivateKey;
          _engineGeneratePublic(keySpec: java.security.spec.KeySpec): java.security.PublicKey;
          _generatePrivate(x: java.math.BigInteger, p: java.math.BigInteger, q: java.math.BigInteger, g: java.math.BigInteger): java.security.PrivateKey;
          _generatePublic(y: java.math.BigInteger, p: java.math.BigInteger, q: java.math.BigInteger, g: java.math.BigInteger): java.security.PublicKey;
          _implGetPrivateKeySpec<T>(key: P11Key, keySpec: java.lang.Class<T>, session: Session[]): T;
          _implGetPublicKeySpec<T>(key: P11Key, keySpec: java.lang.Class<T>, session: Session[]): T;
          _implGetSoftwareFactory(): java.security.KeyFactory;
          _implTranslatePrivateKey(key: java.security.PrivateKey): java.security.PrivateKey;
          _implTranslatePublicKey(key: java.security.PublicKey): java.security.PublicKey;
        }
        interface P11DSAKeyFactory extends CombineTypes<[_P11DSAKeyFactory, sun.security.pkcs11.P11KeyFactory]> {}
        interface _P11Digest$$static extends ClassLike {
          _BUFFER_SIZE: int;
          _NIO_ACCESS: jdk.internal.access.JavaNioAccess;
          _S_BLANK: int;
          _S_BUFFERED: int;
          _S_INIT: int;
          _new(token: Token, algorithm: string, mechanism: long): P11Digest;
        }
        let P11Digest: _P11Digest$$static;
        interface _P11Digest {
          clone(): any;
          _engineDigest(): byte[];
          _engineDigest(digest: byte[], ofs: int, len: int): int;
          _engineGetDigestLength(): int;
          _engineReset(): void;
          _engineUpdate(_in: byte): void;
          _engineUpdate(_in: byte[], ofs: int, len: int): void;
          engineUpdate(key: javax.crypto.SecretKey): void;
          _engineUpdate(byteBuffer: java.nio.ByteBuffer): void;
          _fetchSession(): void;
          _algorithm: string;
          _bufOfs: int;
          _buffer: byte[];
          _digestLength: int;
          _mechanism: wrapper.CK_MECHANISM;
          _session: Session;
          _state: int;
          _token: Token;
        }
        interface P11Digest extends CombineTypes<[_P11Digest, java.lang.Cloneable, sun.security.util.MessageDigestSpi2, java.security.MessageDigestSpi]> {}
        interface _P11ECDHKeyAgreement$$static extends ClassLike {
          _new(token: Token, algorithm: string, mechanism: long): P11ECDHKeyAgreement;
        }
        let P11ECDHKeyAgreement: _P11ECDHKeyAgreement$$static;
        interface _P11ECDHKeyAgreement {
          _engineDoPhase(key: java.security.Key, lastPhase: boolean): java.security.Key;
          _engineGenerateSecret(): byte[];
          _engineGenerateSecret(sharedSecret: byte[], offset: int): int;
          _engineGenerateSecret(algorithm: string): javax.crypto.SecretKey;
          _engineInit(key: java.security.Key, random: java.security.SecureRandom): void;
          _engineInit(key: java.security.Key, params: java.security.spec.AlgorithmParameterSpec, random: java.security.SecureRandom): void;
          _nativeGenerateSecret(algorithm: string): javax.crypto.SecretKey;
          _algorithm: string;
          _mechanism: long;
          _privateKey: P11Key;
          _publicValue: byte[];
          _secretLen: int;
          _token: Token;
        }
        interface P11ECDHKeyAgreement extends CombineTypes<[_P11ECDHKeyAgreement, javax.crypto.KeyAgreementSpi]> {}
        interface _P11ECKeyFactory$$static extends ClassLike {
          _decodeParameters(params: byte[]): java.security.spec.ECParameterSpec;
          _decodePoint(encoded: byte[], curve: java.security.spec.EllipticCurve): java.security.spec.ECPoint;
          _encodeParameters(params: java.security.spec.ECParameterSpec): byte[];
          _getECParameterSpec(name: string): java.security.spec.ECParameterSpec;
          _getECParameterSpec(keySize: int): java.security.spec.ECParameterSpec;
          _getECParameterSpec(spec: java.security.spec.ECParameterSpec): java.security.spec.ECParameterSpec;
          _getEncodedPublicValue(key: java.security.PublicKey): byte[];
          _getSunECProvider(): java.security.Provider;
          _sunECprovider: java.security.Provider;
          _new(token: Token, algorithm: string): P11ECKeyFactory;
        }
        let P11ECKeyFactory: _P11ECKeyFactory$$static;
        interface _P11ECKeyFactory {
          _engineGeneratePrivate(keySpec: java.security.spec.KeySpec): java.security.PrivateKey;
          _engineGeneratePublic(keySpec: java.security.spec.KeySpec): java.security.PublicKey;
          _generatePrivate(s: java.math.BigInteger, params: java.security.spec.ECParameterSpec): java.security.PrivateKey;
          _generatePublic(point: java.security.spec.ECPoint, params: java.security.spec.ECParameterSpec): java.security.PublicKey;
          _implGetPrivateKeySpec<T>(key: P11Key, keySpec: java.lang.Class<T>, session: Session[]): T;
          _implGetPublicKeySpec<T>(key: P11Key, keySpec: java.lang.Class<T>, session: Session[]): T;
          _implGetSoftwareFactory(): java.security.KeyFactory;
          _implTranslatePrivateKey(key: java.security.PrivateKey): java.security.PrivateKey;
          _implTranslatePublicKey(key: java.security.PublicKey): java.security.PublicKey;
        }
        interface P11ECKeyFactory extends CombineTypes<[_P11ECKeyFactory, sun.security.pkcs11.P11KeyFactory]> {}
        interface _P11Key$$static extends ClassLike {
          _drainRefQueue(): boolean;
          _getAttributes(session: Session, keyID: long, a2: pkcs11.wrapper.CK_ATTRIBUTE[], knownAttributes: pkcs11.wrapper.CK_ATTRIBUTE[]): pkcs11.wrapper.CK_ATTRIBUTE[];
          _masterSecretKey(session: Session, keyID: long, a2: string, algorithm: int, keyLength: pkcs11.wrapper.CK_ATTRIBUTE[], attrs: int, major: int): javax.crypto.SecretKey;
          _pbeKey(session: Session, keyID: long, a2: string, algorithm: int, keyLength: pkcs11.wrapper.CK_ATTRIBUTE[], attrs: char[], password: byte[], salt: int): javax.crypto.SecretKey;
          _privateKey(session: Session, keyID: long, a2: string, algorithm: int, keyLength: pkcs11.wrapper.CK_ATTRIBUTE[]): java.security.PrivateKey;
          _publicKey(session: Session, keyID: long, a2: string, algorithm: int, keyLength: pkcs11.wrapper.CK_ATTRIBUTE[]): java.security.PublicKey;
          _secretKey(session: Session, keyID: long, a2: string, algorithm: int, keyLength: pkcs11.wrapper.CK_ATTRIBUTE[]): javax.crypto.SecretKey;
          _A0: wrapper.CK_ATTRIBUTE[];
          _DISABLE_NATIVE_KEYS_EXTRACTION: boolean;
          _PRIVATE: string;
          _PUBLIC: string;
          _SECRET: string;
          _serialVersionUID: long;
          _new(type: string, session: Session, keyID: long, a3: string, algorithm: int, keyLength: pkcs11.wrapper.CK_ATTRIBUTE[]): P11Key;
        }
        let P11Key: _P11Key$$static;
        interface _P11Key {
          equals(obj: any): boolean;
          _fetchAttributes(attrs: pkcs11.wrapper.CK_ATTRIBUTE[]): pkcs11.wrapper.CK_ATTRIBUTE[];
          _fetchAttributesAsInts(attrs: pkcs11.wrapper.CK_ATTRIBUTE[]): java.math.BigInteger[];
          getAlgorithm(): string;
          getEncoded(): byte[];
          _getEncodedInternal(): byte[];
(): byte[];
          getKeyID(): long;
          hashCode(): int;
          _isPrivate(): boolean;
          _isPublic(): boolean;
          _isSecret(): boolean;
          length(): int;
          _readObject(stream: java.io.ObjectInputStream): void;
          releaseKeyID(): void;
          toString(): string;
          _writeReplace(): any;
          _algorithm: string;
          _extractable: boolean;
          _isNSS: boolean;
          _keyIDHolder: NativeKeyHolder;
          _keyLength: int;
          _sensitive: boolean;
          _token: Token;
          _tokenObject: boolean;
          _type: string;
        }
        interface P11Key extends CombineTypes<[_P11Key, java.security.Key, sun.security.util.Length, java.lang.Object]> {}
        interface _P11Key$P11DHPrivateKey$$static extends ClassLike {
          _serialVersionUID: long;
          _new(session: Session, keyID: long, a2: string, algorithm: int, keyLength: pkcs11.wrapper.CK_ATTRIBUTE[]): P11Key$P11DHPrivateKey;
        }
        let P11Key$P11DHPrivateKey: _P11Key$P11DHPrivateKey$$static;
        interface _P11Key$P11DHPrivateKey {
          equals(obj: any): boolean;
          _fetchValues(): void;
          _getEncodedInternal(): byte[];
          getFormat(): string;
          getParams(): javax.crypto.spec.DHParameterSpec;
          getX(): java.math.BigInteger;
          hashCode(): int;
          _x: java.math.BigInteger;
        }
        interface P11Key$P11DHPrivateKey extends CombineTypes<[_P11Key$P11DHPrivateKey, javax.crypto.interfaces.DHPrivateKey, sun.security.pkcs11.P11Key$P11DHPrivateKeyInternal]> {}
        interface _P11Key$P11DHPrivateKeyInternal$$static extends ClassLike {
          _of(session: Session, keyID: long, a2: string, algorithm: int, keyLength: pkcs11.wrapper.CK_ATTRIBUTE[], attrs: boolean): P11Key$P11DHPrivateKeyInternal;
          _serialVersionUID: long;
        }
        let P11Key$P11DHPrivateKeyInternal: _P11Key$P11DHPrivateKeyInternal$$static;
        interface _P11Key$P11DHPrivateKeyInternal {
          _fetchValues(): void;
          getParams(): javax.crypto.spec.DHParameterSpec;
          _params: javax.crypto.spec.DHParameterSpec;
        }
        interface P11Key$P11DHPrivateKeyInternal extends CombineTypes<[_P11Key$P11DHPrivateKeyInternal, sun.security.pkcs11.P11Key$P11PrivateKey]> {}
        interface _P11Key$P11DHPublicKey$$static extends ClassLike {
          _serialVersionUID: long;
          _new(session: Session, keyID: long, a2: string, algorithm: int, keyLength: pkcs11.wrapper.CK_ATTRIBUTE[]): P11Key$P11DHPublicKey;
        }
        let P11Key$P11DHPublicKey: _P11Key$P11DHPublicKey$$static;
        interface _P11Key$P11DHPublicKey {
          equals(obj: any): boolean;
          _fetchValues(): void;
          _getEncodedInternal(): byte[];
          getFormat(): string;
          getParams(): javax.crypto.spec.DHParameterSpec;
          getY(): java.math.BigInteger;
          hashCode(): int;
          toString(): string;
          _params: javax.crypto.spec.DHParameterSpec;
          _y: java.math.BigInteger;
        }
        interface P11Key$P11DHPublicKey extends CombineTypes<[_P11Key$P11DHPublicKey, sun.security.pkcs11.P11Key$P11PublicKey, javax.crypto.interfaces.DHPublicKey]> {}
        interface _P11Key$P11DSAPrivateKey$$static extends ClassLike {
          _serialVersionUID: long;
          _new(session: Session, keyID: long, a2: string, algorithm: int, keyLength: pkcs11.wrapper.CK_ATTRIBUTE[]): P11Key$P11DSAPrivateKey;
        }
        let P11Key$P11DSAPrivateKey: _P11Key$P11DSAPrivateKey$$static;
        interface _P11Key$P11DSAPrivateKey {
          _fetchValues(): void;
          _getEncodedInternal(): byte[];
          getFormat(): string;
          getParams(): java.security.interfaces.DSAParams;
          getX(): java.math.BigInteger;
          _x: java.math.BigInteger;
        }
        interface P11Key$P11DSAPrivateKey extends CombineTypes<[_P11Key$P11DSAPrivateKey, java.security.interfaces.DSAPrivateKey, sun.security.pkcs11.P11Key$P11DSAPrivateKeyInternal]> {}
        interface _P11Key$P11DSAPrivateKeyInternal$$static extends ClassLike {
          _of(session: Session, keyID: long, a2: string, algorithm: int, keyLength: pkcs11.wrapper.CK_ATTRIBUTE[], attrs: boolean): P11Key$P11DSAPrivateKeyInternal;
          _serialVersionUID: long;
        }
        let P11Key$P11DSAPrivateKeyInternal: _P11Key$P11DSAPrivateKeyInternal$$static;
        interface _P11Key$P11DSAPrivateKeyInternal {
          _fetchValues(): void;
          _getParams(): java.security.interfaces.DSAParams;
          _params: java.security.interfaces.DSAParams;
        }
        interface P11Key$P11DSAPrivateKeyInternal extends CombineTypes<[_P11Key$P11DSAPrivateKeyInternal, sun.security.pkcs11.P11Key$P11PrivateKey]> {}
        interface _P11Key$P11DSAPublicKey$$static extends ClassLike {
          _serialVersionUID: long;
          _new(session: Session, keyID: long, a2: string, algorithm: int, keyLength: pkcs11.wrapper.CK_ATTRIBUTE[]): P11Key$P11DSAPublicKey;
        }
        let P11Key$P11DSAPublicKey: _P11Key$P11DSAPublicKey$$static;
        interface _P11Key$P11DSAPublicKey {
          _fetchValues(): void;
          _getEncodedInternal(): byte[];
          getFormat(): string;
          getParams(): java.security.interfaces.DSAParams;
          getY(): java.math.BigInteger;
          toString(): string;
          _params: java.security.interfaces.DSAParams;
          _y: java.math.BigInteger;
        }
        interface P11Key$P11DSAPublicKey extends CombineTypes<[_P11Key$P11DSAPublicKey, sun.security.pkcs11.P11Key$P11PublicKey, java.security.interfaces.DSAPublicKey]> {}
        interface _P11Key$P11ECPrivateKey$$static extends ClassLike {
          _serialVersionUID: long;
          _new(session: Session, keyID: long, a2: string, algorithm: int, keyLength: pkcs11.wrapper.CK_ATTRIBUTE[]): P11Key$P11ECPrivateKey;
        }
        let P11Key$P11ECPrivateKey: _P11Key$P11ECPrivateKey$$static;
        interface _P11Key$P11ECPrivateKey {
          _fetchValues(): void;
          _getEncodedInternal(): byte[];
          getFormat(): string;
          getParams(): java.security.spec.ECParameterSpec;
          getS(): java.math.BigInteger;
          _s: java.math.BigInteger;
        }
        interface P11Key$P11ECPrivateKey extends CombineTypes<[_P11Key$P11ECPrivateKey, sun.security.pkcs11.P11Key$P11ECPrivateKeyInternal, java.security.interfaces.ECPrivateKey]> {}
        interface _P11Key$P11ECPrivateKeyInternal$$static extends ClassLike {
          _of(session: Session, keyID: long, a2: string, algorithm: int, keyLength: pkcs11.wrapper.CK_ATTRIBUTE[], attrs: boolean): P11Key$P11ECPrivateKeyInternal;
          _serialVersionUID: long;
        }
        let P11Key$P11ECPrivateKeyInternal: _P11Key$P11ECPrivateKeyInternal$$static;
        interface _P11Key$P11ECPrivateKeyInternal {
          _fetchValues(): void;
          _getParams(): java.security.spec.ECParameterSpec;
          _params: java.security.spec.ECParameterSpec;
        }
        interface P11Key$P11ECPrivateKeyInternal extends CombineTypes<[_P11Key$P11ECPrivateKeyInternal, sun.security.pkcs11.P11Key$P11PrivateKey]> {}
        interface _P11Key$P11ECPublicKey$$static extends ClassLike {
          _serialVersionUID: long;
          _new(session: Session, keyID: long, a2: string, algorithm: int, keyLength: pkcs11.wrapper.CK_ATTRIBUTE[]): P11Key$P11ECPublicKey;
        }
        let P11Key$P11ECPublicKey: _P11Key$P11ECPublicKey$$static;
        interface _P11Key$P11ECPublicKey {
          _fetchValues(): void;
          _getEncodedInternal(): byte[];
          getFormat(): string;
          getParams(): java.security.spec.ECParameterSpec;
          getW(): java.security.spec.ECPoint;
          toString(): string;
          _params: java.security.spec.ECParameterSpec;
          _w: java.security.spec.ECPoint;
        }
        interface P11Key$P11ECPublicKey extends CombineTypes<[_P11Key$P11ECPublicKey, sun.security.pkcs11.P11Key$P11PublicKey, java.security.interfaces.ECPublicKey]> {}
        interface _P11Key$P11PBEKey$$static extends ClassLike {
          _serialVersionUID: long;
          _new(session: Session, keyID: long, a2: string, algorithm: int, keyLength: pkcs11.wrapper.CK_ATTRIBUTE[], attributes: char[], password: byte[], salt: int): P11Key$P11PBEKey;
        }
        let P11Key$P11PBEKey: _P11Key$P11PBEKey$$static;
        interface _P11Key$P11PBEKey {
          _clearPassword(): void;
          getIterationCount(): int;
          getPassword(): char[];
          getSalt(): byte[];
          _iterationCount: int;
          _password: char[];
          _salt: byte[];
        }
        interface P11Key$P11PBEKey extends CombineTypes<[_P11Key$P11PBEKey, sun.security.pkcs11.P11Key$P11SecretKey, javax.crypto.interfaces.PBEKey]> {}
        interface _P11Key$P11PrivateKey$$static extends ClassLike {
          _serialVersionUID: long;
          _new(session: Session, keyID: long, a2: string, algorithm: int, keyLength: pkcs11.wrapper.CK_ATTRIBUTE[]): P11Key$P11PrivateKey;
        }
        let P11Key$P11PrivateKey: _P11Key$P11PrivateKey$$static;
        interface _P11Key$P11PrivateKey {
          _getEncodedInternal(): byte[];
          getFormat(): string;
          _encoded: byte[];
        }
        interface P11Key$P11PrivateKey extends CombineTypes<[_P11Key$P11PrivateKey, sun.security.pkcs11.P11Key, java.security.PrivateKey]> {}
        interface _P11Key$P11PublicKey$$static extends ClassLike {
          _serialVersionUID: long;
          _new(session: Session, keyID: long, a2: string, algorithm: int, keyLength: pkcs11.wrapper.CK_ATTRIBUTE[]): P11Key$P11PublicKey;
        }
        let P11Key$P11PublicKey: _P11Key$P11PublicKey$$static;
        interface _P11Key$P11PublicKey {
          _encoded: byte[];
        }
        interface P11Key$P11PublicKey extends CombineTypes<[_P11Key$P11PublicKey, sun.security.pkcs11.P11Key, java.security.PublicKey]> {}
        interface _P11Key$P11RSAPrivateKey$$static extends ClassLike {
          _serialVersionUID: long;
        }
        let P11Key$P11RSAPrivateKey: _P11Key$P11RSAPrivateKey$$static;
        interface _P11Key$P11RSAPrivateKey {
          getCrtCoefficient(): java.math.BigInteger;
          _getEncodedInternal(): byte[];
          getFormat(): string;
          getModulus(): java.math.BigInteger;
          getPrimeExponentP(): java.math.BigInteger;
          getPrimeExponentQ(): java.math.BigInteger;
          getPrimeP(): java.math.BigInteger;
          getPrimeQ(): java.math.BigInteger;
          getPrivateExponent(): java.math.BigInteger;
          getPublicExponent(): java.math.BigInteger;
          _coeff: java.math.BigInteger;
          _d: java.math.BigInteger;
          _e: java.math.BigInteger;
          _p: java.math.BigInteger;
          _pe: java.math.BigInteger;
          _q: java.math.BigInteger;
          _qe: java.math.BigInteger;
        }
        interface P11Key$P11RSAPrivateKey extends CombineTypes<[_P11Key$P11RSAPrivateKey, sun.security.pkcs11.P11Key$P11RSAPrivateKeyInternal, java.security.interfaces.RSAPrivateCrtKey]> {}
        interface _P11Key$P11RSAPrivateKeyInternal$$static extends ClassLike {
          _asCRT(session: Session, keyID: long, a2: string, algorithm: int, keyLength: pkcs11.wrapper.CK_ATTRIBUTE[]): P11Key$P11RSAPrivateKeyInternal;
          _asNonCRT(session: Session, keyID: long, a2: string, algorithm: int, keyLength: pkcs11.wrapper.CK_ATTRIBUTE[]): P11Key$P11RSAPrivateKeyInternal;
          _of(session: Session, keyID: long, a2: string, algorithm: int, keyLength: pkcs11.wrapper.CK_ATTRIBUTE[], attrs: boolean): P11Key$P11RSAPrivateKeyInternal;
          _tryFetchAttributes(session: Session, keyID: long, a2: long[]): pkcs11.wrapper.CK_ATTRIBUTE[];
          _tryFetchAttributes(session: Session, keyID: long, ...a2: long[]): pkcs11.wrapper.CK_ATTRIBUTE[];
          _serialVersionUID: long;
        }
        let P11Key$P11RSAPrivateKeyInternal: _P11Key$P11RSAPrivateKeyInternal$$static;
        interface _P11Key$P11RSAPrivateKeyInternal {
          _fetchValues(): void;
          getModulus(): java.math.BigInteger;
          _n: java.math.BigInteger;
        }
        interface P11Key$P11RSAPrivateKeyInternal extends CombineTypes<[_P11Key$P11RSAPrivateKeyInternal, sun.security.pkcs11.P11Key$P11PrivateKey]> {}
        interface _P11Key$P11RSAPrivateNonCRTKey$$static extends ClassLike {
          _serialVersionUID: long;
          _new(session: Session, keyID: long, a2: string, algorithm: int, keyLength: pkcs11.wrapper.CK_ATTRIBUTE[], attrs: java.math.BigInteger, n: java.math.BigInteger): P11Key$P11RSAPrivateNonCRTKey;
        }
        let P11Key$P11RSAPrivateNonCRTKey: _P11Key$P11RSAPrivateNonCRTKey$$static;
        interface _P11Key$P11RSAPrivateNonCRTKey {
          _getEncodedInternal(): byte[];
          getFormat(): string;
          getModulus(): java.math.BigInteger;
          getPrivateExponent(): java.math.BigInteger;
          _d: java.math.BigInteger;
        }
        interface P11Key$P11RSAPrivateNonCRTKey extends CombineTypes<[_P11Key$P11RSAPrivateNonCRTKey, sun.security.pkcs11.P11Key$P11RSAPrivateKeyInternal, java.security.interfaces.RSAPrivateKey]> {}
        interface _P11Key$P11RSAPublicKey$$static extends ClassLike {
          _serialVersionUID: long;
          _new(session: Session, keyID: long, a2: string, algorithm: int, keyLength: pkcs11.wrapper.CK_ATTRIBUTE[]): P11Key$P11RSAPublicKey;
        }
        let P11Key$P11RSAPublicKey: _P11Key$P11RSAPublicKey$$static;
        interface _P11Key$P11RSAPublicKey {
          _fetchValues(): void;
          _getEncodedInternal(): byte[];
          getFormat(): string;
          getModulus(): java.math.BigInteger;
          getPublicExponent(): java.math.BigInteger;
          toString(): string;
          _e: java.math.BigInteger;
          _n: java.math.BigInteger;
        }
        interface P11Key$P11RSAPublicKey extends CombineTypes<[_P11Key$P11RSAPublicKey, sun.security.pkcs11.P11Key$P11PublicKey, java.security.interfaces.RSAPublicKey]> {}
        interface _P11Key$P11SecretKey$$static extends ClassLike {
          _serialVersionUID: long;
          _new(session: Session, keyID: long, a2: string, algorithm: int, keyLength: pkcs11.wrapper.CK_ATTRIBUTE[]): P11Key$P11SecretKey;
        }
        let P11Key$P11SecretKey: _P11Key$P11SecretKey$$static;
        interface _P11Key$P11SecretKey {
          _getEncodedInternal(): byte[];
          getFormat(): string;
          _encoded: byte[];
        }
        interface P11Key$P11SecretKey extends CombineTypes<[_P11Key$P11SecretKey, sun.security.pkcs11.P11Key, javax.crypto.SecretKey]> {}
        interface _P11Key$P11TlsMasterSecretKey$$static extends ClassLike {
          _serialVersionUID: long;
          _new(session: Session, keyID: long, a2: string, algorithm: int, keyLength: pkcs11.wrapper.CK_ATTRIBUTE[], attrs: int, major: int): P11Key$P11TlsMasterSecretKey;
        }
        let P11Key$P11TlsMasterSecretKey: _P11Key$P11TlsMasterSecretKey$$static;
        interface _P11Key$P11TlsMasterSecretKey {
          getMajorVersion(): int;
          getMinorVersion(): int;
          _majorVersion: int;
          _minorVersion: int;
        }
        interface P11Key$P11TlsMasterSecretKey extends CombineTypes<[_P11Key$P11TlsMasterSecretKey, sun.security.internal.interfaces.TlsMasterSecret, sun.security.pkcs11.P11Key$P11SecretKey]> {}
        interface _P11KeyAgreement$$static extends ClassLike {
          _new(token: Token, algorithm: string, mechanism: long): P11KeyAgreement;
        }
        let P11KeyAgreement: _P11KeyAgreement$$static;
        interface _P11KeyAgreement {
          _engineDoPhase(key: java.security.Key, lastPhase: boolean): java.security.Key;
          _engineGenerateSecret(): byte[];
          _engineGenerateSecret(sharedSecret: byte[], offset: int): int;
          _engineGenerateSecret(algorithm: string): javax.crypto.SecretKey;
          _engineInit(key: java.security.Key, random: java.security.SecureRandom): void;
          _engineInit(key: java.security.Key, params: java.security.spec.AlgorithmParameterSpec, random: java.security.SecureRandom): void;
          _nativeGenerateSecret(algorithm: string): javax.crypto.SecretKey;
          _algorithm: string;
          _mechanism: long;
          _multiPartyAgreement: javax.crypto.KeyAgreement;
          _privateKey: P11Key;
          _publicValue: java.math.BigInteger;
          _secretLen: int;
          _token: Token;
        }
        interface P11KeyAgreement extends CombineTypes<[_P11KeyAgreement, javax.crypto.KeyAgreementSpi]> {}
        interface _P11KeyAgreement$AllowKDF$$static extends ClassLike {
          _getValue(): boolean;
          _VALUE: boolean;
        }
        let P11KeyAgreement$AllowKDF: _P11KeyAgreement$AllowKDF$$static;
        interface _P11KeyAgreement$AllowKDF {
        }
        interface P11KeyAgreement$AllowKDF extends CombineTypes<[_P11KeyAgreement$AllowKDF, java.lang.Object]> {}
        interface _P11KeyFactory$$static extends ClassLike {
          _addKeyType(name: string, id: long): void;
          _convertKey(token: Token, key: java.security.Key, algorithm: string): P11Key;
          _getPKCS11KeyType(algorithm: string): long;
          _keyTypes: java.util.Map<string,long>;
          _new(token: Token, algorithm: string): P11KeyFactory;
        }
        let P11KeyFactory: _P11KeyFactory$$static;
        interface _P11KeyFactory {
          _engineGetKeySpec<T>(key: java.security.Key, keySpec: java.lang.Class<T>): T;
          _engineTranslateKey(key: java.security.Key): java.security.Key;
          _implGetPrivateKeySpec<T>(a0: P11Key, a1: java.lang.Class<T>, a2: Session[]): T;
          _implGetPublicKeySpec<T>(a0: P11Key, a1: java.lang.Class<T>, a2: Session[]): T;
          _implGetSoftwareFactory(): java.security.KeyFactory;
          _implTranslatePrivateKey(a0: java.security.PrivateKey): java.security.PrivateKey;
          _implTranslatePublicKey(a0: java.security.PublicKey): java.security.PublicKey;
          _algorithm: string;
          _token: Token;
        }
        interface P11KeyFactory extends CombineTypes<[_P11KeyFactory, java.security.KeyFactorySpi]> {}
        interface _P11KeyGenerator$$static extends ClassLike {
          _adjustKeySize(ks: int, mi: pkcs11.wrapper.CK_MECHANISM_INFO): int;
          _checkKeySize(keyGenMech: long, a1: int, keySize: Token): int;
          _checkKeySize(keyGenMech: long, a1: int, keySize: pkcs11.wrapper.CK_MECHANISM_INFO): int;
          _getSupportedRange(token: Token, mech: long): pkcs11.wrapper.CK_MECHANISM_INFO;
          _new(token: Token, algorithm: string, mechanism: long): P11KeyGenerator;
        }
        let P11KeyGenerator: _P11KeyGenerator$$static;
        interface _P11KeyGenerator {
          _engineGenerateKey(): javax.crypto.SecretKey;
          _engineInit(random: java.security.SecureRandom): void;
          _engineInit(params: java.security.spec.AlgorithmParameterSpec, random: java.security.SecureRandom): void;
          _engineInit(keySize: int, random: java.security.SecureRandom): void;
          _setDefault(): void;
          _algorithm: string;
          _keySize: int;
          _keyType: long;
          _mechanism: long;
          _range: wrapper.CK_MECHANISM_INFO;
          _significantKeySize: int;
          _supportBothKeySizes: boolean;
          _token: Token;
        }
        interface P11KeyGenerator extends CombineTypes<[_P11KeyGenerator, javax.crypto.KeyGeneratorSpi]> {}
        interface _P11KeyPairGenerator$$static extends ClassLike {
          _new(token: Token, algorithm: string, mechanism: long): P11KeyPairGenerator;
        }
        let P11KeyPairGenerator: _P11KeyPairGenerator$$static;
        interface _P11KeyPairGenerator {
          _checkKeySize(keySize: int, params: java.security.spec.AlgorithmParameterSpec): void;
          generateKeyPair(): java.security.KeyPair;
          initialize(keySize: int, random: java.security.SecureRandom): void;
          initialize(params: java.security.spec.AlgorithmParameterSpec, random: java.security.SecureRandom): void;
          _algorithm: string;
          _keySize: int;
          _maxKeySize: int;
          _mechanism: long;
          _minKeySize: int;
          _params: java.security.spec.AlgorithmParameterSpec;
          _random: java.security.SecureRandom;
          _rsaPublicExponent: java.math.BigInteger;
          _token: Token;
        }
        interface P11KeyPairGenerator extends CombineTypes<[_P11KeyPairGenerator, java.security.KeyPairGeneratorSpi]> {}
        interface _P11KeyStore$$static extends ClassLike {
          _addAttribute(attrs: pkcs11.wrapper.CK_ATTRIBUTE[], attr: pkcs11.wrapper.CK_ATTRIBUTE): pkcs11.wrapper.CK_ATTRIBUTE[];
          _findObjects(session: Session, attrs: pkcs11.wrapper.CK_ATTRIBUTE[]): long[];
          _getID(bytes: byte[]): string;
          _getIDNullSafe(bytes: byte[]): string;
          _ALIAS_SEP: string;
          _ATTR_CLASS_CERT: wrapper.CK_ATTRIBUTE;
          _ATTR_CLASS_PKEY: wrapper.CK_ATTRIBUTE;
          _ATTR_CLASS_SKEY: wrapper.CK_ATTRIBUTE;
          _ATTR_PRIVATE_TRUE: wrapper.CK_ATTRIBUTE;
          _ATTR_SKEY_TOKEN_TRUE: wrapper.CK_ATTRIBUTE;
          _ATTR_TOKEN_TRUE: wrapper.CK_ATTRIBUTE;
          _ATTR_TRUSTED_TRUE: wrapper.CK_ATTRIBUTE;
          _ATTR_X509_CERT_TYPE: wrapper.CK_ATTRIBUTE;
          _CKA_TRUSTED_SUPPORTED: boolean;
          _FINDOBJECTS_MAX: long;
          _LONG0: long[];
          _NO_HANDLE: long;
          _NSS_TEST: boolean;
          _debug: security.util.Debug;
          _new(token: Token): P11KeyStore;
        }
        let P11KeyStore: _P11KeyStore$$static;
        interface _P11KeyStore {
          _checkWrite(): void;
          _deleteEntry(alias: string): boolean;
          _destroyCert(cka_id: byte[]): boolean;
          _destroyChain(cka_id: byte[]): boolean;
          _destroyPkey(cka_id: byte[]): boolean;
          _destroySkey(alias: string): boolean;
          _dumpTokenMap(debug: security.util.Debug): void;
          engineAliases(): java.util.Enumeration<string>;
          engineContainsAlias(alias: string): boolean;
          engineDeleteEntry(alias: string): void;
          engineEntryInstanceOf(alias: string, entryClass: java.lang.Class<java.security.KeyStore$Entry>): boolean;
          engineGetCertificate(alias: string): java.security.cert.Certificate;
          engineGetCertificateAlias(cert: java.security.cert.Certificate): string;
          engineGetCertificateChain(alias: string): java.security.cert.Certificate[];
          engineGetCreationDate(alias: string): java.util.Date;
          engineGetEntry(alias: string, protParam: java.security.KeyStore$ProtectionParameter): java.security.KeyStore$Entry;
          engineGetKey(alias: string, password: char[]): java.security.Key;
          engineIsCertificateEntry(alias: string): boolean;
          engineIsKeyEntry(alias: string): boolean;
          engineLoad(stream: java.io.InputStream, password: char[]): void;
          engineLoad(param: java.security.KeyStore$LoadStoreParameter): void;
          engineSetCertificateEntry(alias: string, cert: java.security.cert.Certificate): void;
          engineSetEntry(alias: string, entry: java.security.KeyStore$Entry, protParam: java.security.KeyStore$ProtectionParameter): void;
          engineSetKeyEntry(alias: string, key: java.security.Key, password: char[], chain: java.security.cert.Certificate[]): void;
          engineSetKeyEntry(alias: string, key: byte[], chain: java.security.cert.Certificate[]): void;
          engineSize(): int;
          engineStore(stream: java.io.OutputStream, password: char[]): void;
          engineStore(param: java.security.KeyStore$LoadStoreParameter): void;
          _getID(alias: string, cert: java.security.cert.X509Certificate): string;
          _getIdAttributes(privateKey: java.security.PrivateKey, publicKey: java.security.PublicKey, id: boolean, netscapeDb: boolean): pkcs11.wrapper.CK_ATTRIBUTE[];
          _getRsaPrivKeyAttrs(alias: string, key: java.security.interfaces.RSAPrivateKey, subject: javax.security.auth.x500.X500Principal): pkcs11.wrapper.CK_ATTRIBUTE[];
          _getTokenObject(session: Session, type: pkcs11.wrapper.CK_ATTRIBUTE, cka_id: byte[], cka_label: string): P11KeyStore$THandle;
          _loadCert(session: Session, oHandle: long): java.security.cert.X509Certificate;
          _loadChain(session: Session, endCert: java.security.cert.X509Certificate): java.security.cert.X509Certificate[];
          _loadPkey(session: Session, oHandle: long): java.security.PrivateKey;
          _loadSkey(session: Session, oHandle: long): javax.crypto.SecretKey;
          _login(handler: javax.security.auth.callback.CallbackHandler): void;
          _mapCerts(matchedCerts: java.util.ArrayList<P11KeyStore$AliasInfo>, certMap: java.util.HashMap<string,java.util.HashSet<P11KeyStore$AliasInfo>>): boolean;
          _mapLabels(): boolean;
          _mapPrivateKeys(pkeyIDs: java.util.ArrayList<byte[]>, certMap: java.util.HashMap<string,java.util.HashSet<P11KeyStore$AliasInfo>>): java.util.ArrayList<P11KeyStore$AliasInfo>;
          _mapSecretKeys(sKeyMap: java.util.HashMap<string,P11KeyStore$AliasInfo>): void;
          _mapTrustedCert(certLabel: string, aliasInfo: P11KeyStore$AliasInfo, infoSet: java.util.HashSet<P11KeyStore$AliasInfo>): boolean;
          _storeCaCerts(chain: java.security.cert.X509Certificate[], start: int): void;
          _storeCert(alias: string, cert: java.security.cert.X509Certificate): void;
          _storeChain(alias: string, chain: java.security.cert.X509Certificate[]): void;
          _storePkey(alias: string, pke: java.security.KeyStore$PrivateKeyEntry): void;
          _storeSkey(alias: string, ske: java.security.KeyStore$SecretKeyEntry): void;
          _updateP11Pkey(alias: string, attribute: pkcs11.wrapper.CK_ATTRIBUTE, key: P11Key): void;
          _updatePkey(alias: string, cka_id: byte[], chain: java.security.cert.X509Certificate[], replaceCert: boolean): void;
          _aliasMap: java.util.HashMap<string,P11KeyStore$AliasInfo>;
          _nssTrustType: Secmod$TrustType;
          _token: Token;
          _useSecmodTrust: boolean;
          _writeDisabled: boolean;
        }
        interface P11KeyStore extends CombineTypes<[_P11KeyStore, java.security.KeyStoreSpi]> {}
        interface _P11KeyStore$AliasInfo$$static extends ClassLike {
          new(label: string): P11KeyStore$AliasInfo;
          new(label: string, id: byte[], trusted: boolean, cert: java.security.cert.X509Certificate): P11KeyStore$AliasInfo;
        }
        let P11KeyStore$AliasInfo: _P11KeyStore$AliasInfo$$static;
        interface _P11KeyStore$AliasInfo {
          toString(): string;
          _cert: java.security.cert.X509Certificate;
          _chain: java.security.cert.X509Certificate[];
          _id: byte[];
          _label: string;
          _matched: boolean;
          _trusted: boolean;
          _type: wrapper.CK_ATTRIBUTE;
        }
        interface P11KeyStore$AliasInfo extends CombineTypes<[_P11KeyStore$AliasInfo, java.lang.Object]> {}
        interface _P11KeyStore$PasswordCallbackHandler$$static extends ClassLike {
          _releaserFor(password: char[]): java.lang.Runnable;
        }
        let P11KeyStore$PasswordCallbackHandler: _P11KeyStore$PasswordCallbackHandler$$static;
        interface _P11KeyStore$PasswordCallbackHandler {
          handle(callbacks: javax.security.auth.callback.Callback[]): void;
          _password: char[];
        }
        interface P11KeyStore$PasswordCallbackHandler extends CombineTypes<[_P11KeyStore$PasswordCallbackHandler, javax.security.auth.callback.CallbackHandler, java.lang.Object]> {}
        interface _P11KeyStore$THandle$$static extends ClassLike {
        }
        let P11KeyStore$THandle: _P11KeyStore$THandle$$static;
        interface _P11KeyStore$THandle {
          _handle: long;
          _type: wrapper.CK_ATTRIBUTE;
        }
        interface P11KeyStore$THandle extends CombineTypes<[_P11KeyStore$THandle, java.lang.Object]> {}
        interface _P11KeyWrapCipher$$static extends ClassLike {
          _BLK_SIZE: int;
          _NIO_ACCESS: jdk.internal.access.JavaNioAccess;
          _new(token: Token, algorithm: string, mechanism: long): P11KeyWrapCipher;
        }
        let P11KeyWrapCipher: _P11KeyWrapCipher$$static;
        interface _P11KeyWrapCipher {
          _cancelOperation(): void;
          _doFinalLength(inLen: int): int;
          _engineDoFinal(_in: byte[], inOfs: int, inLen: int): byte[];
          _engineDoFinal(_in: byte[], inOfs: int, inLen: int, out: byte[], outOfs: int): int;
          _engineDoFinal(inBuffer: java.nio.ByteBuffer, outBuffer: java.nio.ByteBuffer): int;
          _engineGetBlockSize(): int;
          _engineGetIV(): byte[];
          _engineGetKeySize(key: java.security.Key): int;
          _engineGetOutputSize(inputLen: int): int;
          _engineGetParameters(): java.security.AlgorithmParameters;
          _engineInit(opmode: int, key: java.security.Key, sr: java.security.SecureRandom): void;
          _engineInit(opmode: int, key: java.security.Key, params: java.security.spec.AlgorithmParameterSpec, sr: java.security.SecureRandom): void;
          _engineInit(opmode: int, key: java.security.Key, params: java.security.AlgorithmParameters, sr: java.security.SecureRandom): void;
          _engineSetMode(mode: string): void;
          _engineSetPadding(padding: string): void;
          _engineUnwrap(wrappedKey: byte[], wrappedKeyAlgo: string, wrappedKeyType: int): java.security.Key;
          _engineUpdate(_in: byte[], inOfs: int, inLen: int): byte[];
          _engineUpdate(_in: byte[], inOfs: int, inLen: int, out: byte[], outOfs: int): int;
          _engineUpdate(inBuffer: java.nio.ByteBuffer, outBuffer: java.nio.ByteBuffer): int;
          _engineWrap(tbwKey: java.security.Key): byte[];
          _ensureInitialized(): void;
          _handleEncException(msg: string, e: pkcs11.wrapper.PKCS11Exception): void;
          _implDoFinal(_in: byte[], inOfs: int, inLen: int, out: byte[], outOfs: int, outLen: int): int;
          _implDoFinal(inBuffer: java.nio.ByteBuffer, outBuffer: java.nio.ByteBuffer): int;
          _implInit(opmode: int, key: java.security.Key, iv: byte[], sr: java.security.SecureRandom): void;
          _implUpdate(_in: byte[], inOfs: int, inLen: int): int;
          _implUpdate(inBuf: java.nio.ByteBuffer): int;
          _initialize(): void;
          _reset(doCancel: boolean): void;
          _dataBuffer: java.io.ByteArrayOutputStream;
          _fixedKeySize: int;
          _initialized: boolean;
          _iv: byte[];
          _mechanism: long;
          _opmode: int;
          _p11Key: P11Key;
          _random: java.security.SecureRandom;
          _session: Session;
          _token: Token;
          _type: P11KeyWrapCipher$KeyWrapType;
        }
        interface P11KeyWrapCipher extends CombineTypes<[_P11KeyWrapCipher, javax.crypto.CipherSpi]> {}
        interface _P11KeyWrapCipher$KeyWrapType$$static extends ClassLike {
          valueOf(name: string): P11KeyWrapCipher$KeyWrapType;
          values(): P11KeyWrapCipher$KeyWrapType[];
          readonly KWP_NOPADDING: P11KeyWrapCipher$KeyWrapType;
          readonly KW_NOPADDING: P11KeyWrapCipher$KeyWrapType;
          readonly KW_PKCS5PADDING: P11KeyWrapCipher$KeyWrapType;
        }
        let P11KeyWrapCipher$KeyWrapType: _P11KeyWrapCipher$KeyWrapType$$static;
        interface _P11KeyWrapCipher$KeyWrapType {
          _defIv: byte[];
          _mode: string;
          _padding: string;
        }
        interface P11KeyWrapCipher$KeyWrapType extends CombineTypes<[_P11KeyWrapCipher$KeyWrapType]> {}
        interface _P11Mac$$static extends ClassLike {
          _NIO_ACCESS: jdk.internal.access.JavaNioAccess;
          _new(token: Token, algorithm: string, mechanism: long): P11Mac;
        }
        let P11Mac: _P11Mac$$static;
        interface _P11Mac {
          _cancelOperation(): void;
          _engineDoFinal(): byte[];
          _engineGetMacLength(): int;
          _engineInit(key: java.security.Key, params: java.security.spec.AlgorithmParameterSpec): void;
          _engineReset(): void;
          _engineUpdate(input: byte): void;
          _engineUpdate(b: byte[], ofs: int, len: int): void;
          _engineUpdate(byteBuffer: java.nio.ByteBuffer): void;
          _ensureInitialized(): void;
          _initialize(): void;
          _reset(doCancel: boolean): void;
          _algorithm: string;
          _ckMechanism: wrapper.CK_MECHANISM;
          _initialized: boolean;
          _macLength: int;
          _oneByte: byte[];
          _p11Key: P11Key;
          _session: Session;
          _svcPbeKi: P11SecretKeyFactory$PBEKeyInfo;
          _token: Token;
        }
        interface P11Mac extends CombineTypes<[_P11Mac, javax.crypto.MacSpi]> {}
        interface _P11PBECipher$$static extends ClassLike {
          _new(token: Token, pbeAlg: string, cipherMech: long): P11PBECipher;
        }
        let P11PBECipher: _P11PBECipher$$static;
        interface _P11PBECipher {
          _engineDoFinal(input: byte[], inputOffset: int, inputLen: int): byte[];
          _engineDoFinal(input: byte[], inputOffset: int, inputLen: int, output: byte[], outputOffset: int): int;
          _engineGetBlockSize(): int;
          _engineGetIV(): byte[];
          _engineGetKeySize(key: java.security.Key): int;
          _engineGetOutputSize(inputLen: int): int;
          _engineGetParameters(): java.security.AlgorithmParameters;
          _engineInit(opmode: int, key: java.security.Key, random: java.security.SecureRandom): void;
          _engineInit(opmode: int, key: java.security.Key, params: java.security.spec.AlgorithmParameterSpec, random: java.security.SecureRandom): void;
          _engineInit(opmode: int, key: java.security.Key, params: java.security.AlgorithmParameters, random: java.security.SecureRandom): void;
          _engineSetMode(mode: string): void;
          _engineSetPadding(padding: string): void;
          _engineUpdate(input: byte[], inputOffset: int, inputLen: int): byte[];
          _engineUpdate(input: byte[], inputOffset: int, inputLen: int, output: byte[], outputOffset: int): int;
          _blkSize: int;
          _cipher: P11Cipher;
          _pbeAlg: string;
          _pbes2Params: security.util.PBEUtil$PBES2Params;
          _svcPbeKi: P11SecretKeyFactory$PBEKeyInfo;
          _token: Token;
        }
        interface P11PBECipher extends CombineTypes<[_P11PBECipher, javax.crypto.CipherSpi]> {}
        interface _P11PSSSignature$$static extends ClassLike {
          _genDefaultParams(digestAlg: string, key: P11Key): java.security.spec.PSSParameterSpec;
          _isDigestEqual(stdAlg: string, givenAlg: string): boolean;
          _toStdName(givenDigestAlg: string): string;
          _DEBUG: boolean;
          _DIGEST_LENGTHS: java.util.Hashtable<string,int>;
          _KEY_ALGO: string;
          _M_SIGN: int;
          _M_VERIFY: int;
          _NIO_ACCESS: jdk.internal.access.JavaNioAccess;
          _T_DIGEST: int;
          _T_UPDATE: int;
          _new(token: Token, algorithm: string, mechId: long): P11PSSSignature;
        }
        let P11PSSSignature: _P11PSSSignature$$static;
        interface _P11PSSSignature {
          _cancelOperation(): void;
          _checkKeySize(key: java.security.Key): void;
          _engineGetParameter(param: string): any;
          _engineGetParameters(): java.security.AlgorithmParameters;
          _engineInitSign(privateKey: java.security.PrivateKey): void;
          _engineInitVerify(publicKey: java.security.PublicKey): void;
          _engineSetParameter(param: string, value: any): void;
          _engineSetParameter(params: java.security.spec.AlgorithmParameterSpec): void;
          _engineSign(): byte[];
          _engineUpdate(b: byte): void;
          _engineUpdate(b: byte[], ofs: int, len: int): void;
          _engineUpdate(byteBuffer: java.nio.ByteBuffer): void;
          _engineVerify(signature: byte[]): boolean;
          _ensureInitialized(): void;
          _initialize(): void;
          _reset(doCancel: boolean): void;
          _setSigParams(p: java.security.spec.AlgorithmParameterSpec): void;
          _algorithm: string;
          _buffer: byte[];
          _bytesProcessed: int;
          _initialized: boolean;
          _isActive: boolean;
          _md: java.security.MessageDigest;
          _mdAlg: string;
          _mechanism: wrapper.CK_MECHANISM;
          _mode: int;
          _p11Key: P11Key;
          _session: Session;
          _sigParams: java.security.spec.PSSParameterSpec;
          _token: Token;
          _type: int;
        }
        interface P11PSSSignature extends CombineTypes<[_P11PSSSignature, java.security.SignatureSpi]> {}
        interface _P11RSACipher$$static extends ClassLike {
          _polishPreMasterSecretKey(token: Token, session: Session, failover: java.lang.Exception, unwrappedKey: javax.crypto.SecretKey, clientVersion: int, serverVersion: int): javax.crypto.SecretKey;
          _B0: byte[];
          _MODE_DECRYPT: int;
          _MODE_ENCRYPT: int;
          _MODE_SIGN: int;
          _MODE_VERIFY: int;
          _PAD_NONE: int;
          _PAD_PKCS1: int;
          _PKCS1_MIN_PADDING_LENGTH: int;
          _new(token: Token, algorithm: string, mechanism: long): P11RSACipher;
        }
        let P11RSACipher: _P11RSACipher$$static;
        interface _P11RSACipher {
          _cancelOperation(): void;
          _doFinal(): byte[];
          _engineDoFinal(_in: byte[], inOfs: int, inLen: int): byte[];
          _engineDoFinal(_in: byte[], inOfs: int, inLen: int, out: byte[], outOfs: int): int;
          _engineGetBlockSize(): int;
          _engineGetIV(): byte[];
          _engineGetKeySize(key: java.security.Key): int;
          _engineGetOutputSize(inputLen: int): int;
          _engineGetParameters(): java.security.AlgorithmParameters;
          _engineInit(opmode: int, key: java.security.Key, random: java.security.SecureRandom): void;
          _engineInit(opmode: int, key: java.security.Key, params: java.security.spec.AlgorithmParameterSpec, random: java.security.SecureRandom): void;
          _engineInit(opmode: int, key: java.security.Key, params: java.security.AlgorithmParameters, random: java.security.SecureRandom): void;
          _engineSetMode(mode: string): void;
          _engineSetPadding(padding: string): void;
          _engineUnwrap(wrappedKey: byte[], algorithm: string, type: int): java.security.Key;
          _engineUpdate(_in: byte[], inOfs: int, inLen: int): byte[];
          _engineUpdate(_in: byte[], inOfs: int, inLen: int, out: byte[], outOfs: int): int;
          _engineWrap(key: java.security.Key): byte[];
          _ensureInitialized(): void;
          _implDoFinal(out: byte[], outOfs: int, outLen: int): int;
          _implInit(opmode: int, key: java.security.Key): void;
          _implUpdate(_in: byte[], inOfs: int, inLen: int): void;
          _initialize(): void;
          _reset(doCancel: boolean): void;
          _algorithm: string;
          _bufOfs: int;
          _buffer: byte[];
          _initialized: boolean;
          _maxInputSize: int;
          _mechanism: long;
          _mode: int;
          _outputSize: int;
          _p11Key: P11Key;
          _padType: int;
          _random: java.security.SecureRandom;
          _session: Session;
          _spec: java.security.spec.AlgorithmParameterSpec;
          _token: Token;
        }
        interface P11RSACipher extends CombineTypes<[_P11RSACipher, javax.crypto.CipherSpi]> {}
        interface _P11RSAKeyFactory$$static extends ClassLike {
          _new(token: Token, algorithm: string): P11RSAKeyFactory;
        }
        let P11RSAKeyFactory: _P11RSAKeyFactory$$static;
        interface _P11RSAKeyFactory {
          _engineGeneratePrivate(keySpec: java.security.spec.KeySpec): java.security.PrivateKey;
          _engineGeneratePublic(keySpec: java.security.spec.KeySpec): java.security.PublicKey;
          _generatePrivate(n: java.math.BigInteger, d: java.math.BigInteger): java.security.PrivateKey;
          _generatePrivate(n: java.math.BigInteger, e: java.math.BigInteger, d: java.math.BigInteger, p: java.math.BigInteger, q: java.math.BigInteger, pe: java.math.BigInteger, qe: java.math.BigInteger, coeff: java.math.BigInteger): java.security.PrivateKey;
          _generatePublic(n: java.math.BigInteger, e: java.math.BigInteger): java.security.PublicKey;
          _implGetPrivateKeySpec<T>(key: P11Key, keySpec: java.lang.Class<T>, session: Session[]): T;
          _implGetPublicKeySpec<T>(key: P11Key, keySpec: java.lang.Class<T>, session: Session[]): T;
          _implGetSoftwareFactory(): java.security.KeyFactory;
          _implTranslatePrivateKey(key: java.security.PrivateKey): java.security.PrivateKey;
          _implTranslatePublicKey(key: java.security.PublicKey): java.security.PublicKey;
        }
        interface P11RSAKeyFactory extends CombineTypes<[_P11RSAKeyFactory, sun.security.pkcs11.P11KeyFactory]> {}
        interface _P11SecretKeyFactory$$static extends ClassLike {
          _convertKey(token: Token, key: java.security.Key, svcAlgo: string): P11Key;
          _convertKey(token: Token, key: java.security.Key, svcAlgo: string, extraAttrs: pkcs11.wrapper.CK_ATTRIBUTE[]): P11Key;
          _createKey(token: Token, encoded: byte[], algorithm: string, keyType: long, a4: pkcs11.wrapper.CK_ATTRIBUTE[]): P11Key;
          _derivePBEKey(token: Token, keySpec: javax.crypto.spec.PBEKeySpec, pbeKi: P11SecretKeyFactory$PBEKeyInfo): P11Key$P11PBEKey;
          _fixDESParity(key: byte[], offset: int): void;
          _getKeyInfo(algo: string): P11SecretKeyFactory$KeyInfo;
          _getKeyType(algorithm: string): long;
          _getPBEKeyInfo(algo: string): P11SecretKeyFactory$PBEKeyInfo;
          _getPKCS11KeyType(algorithm: string): long;
          _getPbeKeySpec(pbeKey: javax.crypto.interfaces.PBEKey): javax.crypto.spec.PBEKeySpec;
          _putKeyInfo(ki: P11SecretKeyFactory$KeyInfo): void;
          _HMAC: P11SecretKeyFactory$KeyInfo;
          _SSLMAC: P11SecretKeyFactory$KeyInfo;
          _keyInfo: java.util.Map<string,P11SecretKeyFactory$KeyInfo>;
          _new(token: Token, algorithm: string): P11SecretKeyFactory;
        }
        let P11SecretKeyFactory: _P11SecretKeyFactory$$static;
        interface _P11SecretKeyFactory {
          _engineGenerateSecret(keySpec: java.security.spec.KeySpec): javax.crypto.SecretKey;
          _engineGetKeySpec(key: javax.crypto.SecretKey, keySpec: java.lang.Class<any>): java.security.spec.KeySpec;
          _engineTranslateKey(key: javax.crypto.SecretKey): javax.crypto.SecretKey;
          _generateDESSecret(keyBytes: byte[], desAlgo: string): javax.crypto.SecretKey;
          _getKeyBytes(key: javax.crypto.SecretKey): byte[];
          _algorithm: string;
          _svcPbeKi: P11SecretKeyFactory$PBEKeyInfo;
          _token: Token;
        }
        interface P11SecretKeyFactory extends CombineTypes<[_P11SecretKeyFactory, javax.crypto.SecretKeyFactorySpi]> {}
        interface _P11SecretKeyFactory$AESPBEKeyInfo$$static extends ClassLike {
          _attr: wrapper.CK_ATTRIBUTE[];
          _new(algo: string, prfMech: long, a2: int): P11SecretKeyFactory$AESPBEKeyInfo;
        }
        let P11SecretKeyFactory$AESPBEKeyInfo: _P11SecretKeyFactory$AESPBEKeyInfo$$static;
        interface _P11SecretKeyFactory$AESPBEKeyInfo {
        }
        interface P11SecretKeyFactory$AESPBEKeyInfo extends CombineTypes<[_P11SecretKeyFactory$AESPBEKeyInfo, sun.security.pkcs11.P11SecretKeyFactory$PBEKeyInfo]> {}
        interface _P11SecretKeyFactory$KeyInfo$$static extends ClassLike {
          _checkUse(ki: P11SecretKeyFactory$KeyInfo, si: P11SecretKeyFactory$KeyInfo): boolean;
          _new(algo: string, keyType: long): P11SecretKeyFactory$KeyInfo;
        }
        let P11SecretKeyFactory$KeyInfo: _P11SecretKeyFactory$KeyInfo$$static;
        interface _P11SecretKeyFactory$KeyInfo {
          readonly algo: string;
          readonly keyType: long;
        }
        interface P11SecretKeyFactory$KeyInfo extends CombineTypes<[_P11SecretKeyFactory$KeyInfo, java.lang.Object]> {}
        interface _P11SecretKeyFactory$P12MacPBEKeyInfo$$static extends ClassLike {
          _attr: wrapper.CK_ATTRIBUTE[];
          _new(algo: string, kdfMech: long, a2: int): P11SecretKeyFactory$P12MacPBEKeyInfo;
        }
        let P11SecretKeyFactory$P12MacPBEKeyInfo: _P11SecretKeyFactory$P12MacPBEKeyInfo$$static;
        interface _P11SecretKeyFactory$P12MacPBEKeyInfo {
        }
        interface P11SecretKeyFactory$P12MacPBEKeyInfo extends CombineTypes<[_P11SecretKeyFactory$P12MacPBEKeyInfo, sun.security.pkcs11.P11SecretKeyFactory$PBEKeyInfo]> {}
        interface _P11SecretKeyFactory$PBEKeyInfo$$static extends ClassLike {
          readonly INVALID_PRF: long;
          _new(algo: string, kdfMech: long, a2: long, prfMech: long, a4: int, keyType: pkcs11.wrapper.CK_ATTRIBUTE[]): P11SecretKeyFactory$PBEKeyInfo;
        }
        let P11SecretKeyFactory$PBEKeyInfo: _P11SecretKeyFactory$PBEKeyInfo$$static;
        interface _P11SecretKeyFactory$PBEKeyInfo {
          readonly extraAttrs: wrapper.CK_ATTRIBUTE[];
          readonly kdfMech: long;
          readonly keyLen: int;
          readonly prfMech: long;
        }
        interface P11SecretKeyFactory$PBEKeyInfo extends CombineTypes<[_P11SecretKeyFactory$PBEKeyInfo, sun.security.pkcs11.P11SecretKeyFactory$KeyInfo]> {}
        interface _P11SecretKeyFactory$PBKDF2KeyInfo$$static extends ClassLike {
          _attr: wrapper.CK_ATTRIBUTE[];
          _new(algo: string, prfMech: long): P11SecretKeyFactory$PBKDF2KeyInfo;
        }
        let P11SecretKeyFactory$PBKDF2KeyInfo: _P11SecretKeyFactory$PBKDF2KeyInfo$$static;
        interface _P11SecretKeyFactory$PBKDF2KeyInfo {
        }
        interface P11SecretKeyFactory$PBKDF2KeyInfo extends CombineTypes<[_P11SecretKeyFactory$PBKDF2KeyInfo, sun.security.pkcs11.P11SecretKeyFactory$PBEKeyInfo]> {}
        interface _P11SecureRandom$$static extends ClassLike {
          _IBUFFER_SIZE: int;
          _MAX_IBUFFER_TIME: long;
          _serialVersionUID: long;
          _new(token: Token): P11SecureRandom;
        }
        let P11SecureRandom: _P11SecureRandom$$static;
        interface _P11SecureRandom {
          _engineGenerateSeed(numBytes: int): byte[];
          _engineNextBytes(bytes: byte[]): void;
          _engineSetSeed(seed: byte[]): void;
          _implNextBytes(bytes: byte[]): void;
          _mix(b: byte[]): void;
          _readObject(_in: java.io.ObjectInputStream): void;
          _buffered: int;
          _iBuffer: byte[];
          _ibuffered: int;
          _lastRead: long;
          _mixBuffer: byte[];
          _mixRandom: java.security.SecureRandom;
          _token: Token;
        }
        interface P11SecureRandom extends CombineTypes<[_P11SecureRandom, java.security.SecureRandomSpi]> {}
        interface _P11Signature$$static extends ClassLike {
          _asn1ToDSA(sig: byte[], sigLen: int): byte[];
          _asn1ToECDSA(sig: byte[]): byte[];
          _dsaToASN1(signature: byte[]): byte[];
          _getDigestEnum(algorithm: string): security.util.KnownOIDs;
          _toByteArray(bi: java.math.BigInteger, len: int): byte[];
          _M_SIGN: int;
          _M_VERIFY: int;
          _NIO_ACCESS: jdk.internal.access.JavaNioAccess;
          _RAW_ECDSA_MAX: int;
          _T_DIGEST: int;
          _T_RAW: int;
          _T_UPDATE: int;
          _new(token: Token, algorithm: string, mechanism: long): P11Signature;
        }
        let P11Signature: _P11Signature$$static;
        interface _P11Signature {
          _cancelOperation(): void;
          _checkKeySize(keyAlgo: string, key: java.security.Key): void;
          _checkRSAKeyLength(len: int): void;
          _encodeSignature(digest: byte[]): byte[];
          _engineGetParameter(param: string): any;
          _engineGetParameters(): java.security.AlgorithmParameters;
          _engineInitSign(privateKey: java.security.PrivateKey): void;
          _engineInitVerify(publicKey: java.security.PublicKey): void;
          _engineSetParameter(param: string, value: any): void;
          _engineSetParameter(params: java.security.spec.AlgorithmParameterSpec): void;
          _engineSign(): byte[];
          _engineUpdate(b: byte): void;
          _engineUpdate(b: byte[], ofs: int, len: int): void;
          _engineUpdate(byteBuffer: java.nio.ByteBuffer): void;
          _engineVerify(signature: byte[]): boolean;
          _ensureInitialized(): void;
          _initialize(): void;
          _pkcs1Pad(data: byte[]): byte[];
          _reset(doCancel: boolean): void;
          _algorithm: string;
          _buffer: byte[];
          _bytesProcessed: int;
          _digestOID: security.util.ObjectIdentifier;
          _initialized: boolean;
          _keyAlgorithm: string;
          _md: java.security.MessageDigest;
          _mechanism: long;
          _mode: int;
          _p11Key: P11Key;
          _p1363Format: boolean;
          _session: Session;
          _sigLen: int;
          _token: Token;
          _type: int;
        }
        interface P11Signature extends CombineTypes<[_P11Signature, java.security.SignatureSpi]> {}
        interface _P11TlsKeyMaterialGenerator$$static extends ClassLike {
          _MSG: string;
          _new(token: Token, algorithm: string, mechanism: long): P11TlsKeyMaterialGenerator;
        }
        let P11TlsKeyMaterialGenerator: _P11TlsKeyMaterialGenerator$$static;
        interface _P11TlsKeyMaterialGenerator {
          _engineGenerateKey(): javax.crypto.SecretKey;
          _engineInit(random: java.security.SecureRandom): void;
          _engineInit(params: java.security.spec.AlgorithmParameterSpec, random: java.security.SecureRandom): void;
          _engineInit(keysize: int, random: java.security.SecureRandom): void;
          _algorithm: string;
          _mechanism: long;
          _p11Key: P11Key;
          _spec: security.internal.spec.TlsKeyMaterialParameterSpec;
          _supportSSLv3: boolean;
          _tlsVersion: int;
          _token: Token;
        }
        interface P11TlsKeyMaterialGenerator extends CombineTypes<[_P11TlsKeyMaterialGenerator, javax.crypto.KeyGeneratorSpi]> {}
        interface _P11TlsMasterSecretGenerator$$static extends ClassLike {
          _MSG: string;
          _new(token: Token, algorithm: string, mechanism: long): P11TlsMasterSecretGenerator;
        }
        let P11TlsMasterSecretGenerator: _P11TlsMasterSecretGenerator$$static;
        interface _P11TlsMasterSecretGenerator {
          _engineGenerateKey(): javax.crypto.SecretKey;
          _engineInit(random: java.security.SecureRandom): void;
          _engineInit(params: java.security.spec.AlgorithmParameterSpec, random: java.security.SecureRandom): void;
          _engineInit(keysize: int, random: java.security.SecureRandom): void;
          _algorithm: string;
          _ckVersion: wrapper.CK_VERSION;
          _mechanism: long;
          _p11Key: P11Key;
          _spec: security.internal.spec.TlsMasterSecretParameterSpec;
          _supportSSLv3: boolean;
          _tlsVersion: int;
          _token: Token;
        }
        interface P11TlsMasterSecretGenerator extends CombineTypes<[_P11TlsMasterSecretGenerator, javax.crypto.KeyGeneratorSpi]> {}
        interface _P11TlsPrfGenerator$$static extends ClassLike {
          _MSG: string;
          _NULL_KEY: javax.crypto.SecretKey;
          _new(token: Token, algorithm: string, mechanism: long): P11TlsPrfGenerator;
        }
        let P11TlsPrfGenerator: _P11TlsPrfGenerator$$static;
        interface _P11TlsPrfGenerator {
          _engineGenerateKey(): javax.crypto.SecretKey;
          _engineInit(random: java.security.SecureRandom): void;
          _engineInit(params: java.security.spec.AlgorithmParameterSpec, random: java.security.SecureRandom): void;
          _engineInit(keysize: int, random: java.security.SecureRandom): void;
          _algorithm: string;
          _mechanism: long;
          _p11Key: P11Key;
          _spec: security.internal.spec.TlsPrfParameterSpec;
          _token: Token;
        }
        interface P11TlsPrfGenerator extends CombineTypes<[_P11TlsPrfGenerator, javax.crypto.KeyGeneratorSpi]> {}
        interface _P11TlsRsaPremasterSecretGenerator$$static extends ClassLike {
          _MSG: string;
          _new(token: Token, algorithm: string, mechanism: long): P11TlsRsaPremasterSecretGenerator;
        }
        let P11TlsRsaPremasterSecretGenerator: _P11TlsRsaPremasterSecretGenerator$$static;
        interface _P11TlsRsaPremasterSecretGenerator {
          _engineGenerateKey(): javax.crypto.SecretKey;
          _engineInit(random: java.security.SecureRandom): void;
          _engineInit(params: java.security.spec.AlgorithmParameterSpec, random: java.security.SecureRandom): void;
          _engineInit(keysize: int, random: java.security.SecureRandom): void;
          _algorithm: string;
          _mechanism: long;
          _spec: security.internal.spec.TlsRsaPremasterSecretParameterSpec;
          _supportSSLv3: boolean;
          _token: Token;
        }
        interface P11TlsRsaPremasterSecretGenerator extends CombineTypes<[_P11TlsRsaPremasterSecretGenerator, javax.crypto.KeyGeneratorSpi]> {}
        interface _P11Util$$static extends ClassLike {
          _concat(b1: byte[], b2: byte[]): byte[];
          _concat(b1: long[], b2: long[]): long[];
          _convert(input: byte[], offset: int, len: int): byte[];
          _encodePassword(password: char[], cs: java.nio.charset.Charset, nullTermBytes: int): char[];
          getMagnitude(bi: java.math.BigInteger): byte[];
          _getProvider(p: java.security.Provider, providerName: string, className: string): java.security.Provider;
          _getSunJceProvider(): java.security.Provider;
          _getSunProvider(): java.security.Provider;
          _getSunRsaSignProvider(): java.security.Provider;
          _isNSS(token: Token): boolean;
          _sha1(data: byte[]): byte[];
          _subarray(b: byte[], ofs: int, len: int): byte[];
          _toString(b: byte[]): string;
          _trySessionCancel(token: Token, session: Session, flags: long): boolean;
          _LOCK: any;
          readonly cleaner: java.lang.ref.Cleaner;
          _hexDigits: char[];
          _sun: java.security.Provider;
          _sunJce: java.security.Provider;
          _sunRsaSign: java.security.Provider;
        }
        let P11Util: _P11Util$$static;
        interface _P11Util {
        }
        interface P11Util extends CombineTypes<[_P11Util, java.lang.Object]> {}
        interface _Secmod$$static extends ClassLike {
          _getDigest(cert: java.security.cert.X509Certificate, algorithm: string): byte[];
          getInstance(): Secmod;
          _getTrust(provider: SunPKCS11): java.util.Map<Secmod$Bytes,Secmod$TrustAttributes>;
          _nssGetLibraryHandle(a0: string): long;
          _nssGetModuleList(a0: long, a1: string): any;
          _nssInitialize(a0: string, a1: long, a2: string, a3: boolean): boolean;
          _nssLoadLibrary(a0: string): long;
          _nssVersionCheck(a0: long, a1: string): boolean;
          _DEBUG: boolean;
          _FIPS_SLOT_ID: int;
          _INSTANCE: Secmod;
          _NETSCAPE_SLOT_ID: int;
          _NSS_LIB_NAME: string;
          _PRIVATE_KEY_SLOT_ID: int;
          _SOFTTOKEN_LIB_NAME: string;
          _TEMPLATE_CRYPTO: string;
          _TEMPLATE_EXTERNAL: string;
          _TEMPLATE_FIPS: string;
          _TEMPLATE_KEYSTORE: string;
          _TEMPLATE_TRUSTANCHOR: string;
          _TRUST_LIB_NAME: string;
        }
        let Secmod: _Secmod$$static;
        interface _Secmod {
          _fetchVersions(): void;
          _getConfigDir(): string;
          _getLibDir(): string;
          getModule(type: Secmod$ModuleType): Secmod$Module;
          _getModuleTrust(type: Secmod$ModuleType, bytes: Secmod$Bytes): Secmod$TrustAttributes;
          getModules(): java.util.List<Secmod$Module>;
          initialize(configDir: string, nssLibDir: string): void;
          initialize(dbMode: Secmod$DbMode, configDir: string, nssLibDir: string): void;
          initialize(dbMode: Secmod$DbMode, configDir: string, nssLibDir: string, nssOptimizeSpace: boolean): void;
          isInitialized(): boolean;
          _isLoaded(): boolean;
          _isTrusted(cert: java.security.cert.X509Certificate, trustType: Secmod$TrustType): boolean;
          _configDir: string;
          _modules: java.util.List<Secmod$Module>;
          _nssHandle: long;
          _nssLibDir: string;
          _supported: boolean;
        }
        interface Secmod extends CombineTypes<[_Secmod, java.lang.Object]> {}
        interface _Secmod$Bytes$$static extends ClassLike {
          _new(b: byte[]): Secmod$Bytes;
        }
        let Secmod$Bytes: _Secmod$Bytes$$static;
        interface _Secmod$Bytes {
          equals(o: any): boolean;
          hashCode(): int;
          _b: byte[];
        }
        interface Secmod$Bytes extends CombineTypes<[_Secmod$Bytes, java.lang.Object]> {}
        interface _Secmod$DbMode$$static extends ClassLike {
          valueOf(name: string): Secmod$DbMode;
          values(): Secmod$DbMode[];
          readonly NO_DB: Secmod$DbMode;
          readonly READ_ONLY: Secmod$DbMode;
          readonly READ_WRITE: Secmod$DbMode;
        }
        let Secmod$DbMode: _Secmod$DbMode$$static;
        interface _Secmod$DbMode {
          _functionName: string;
        }
        interface Secmod$DbMode extends CombineTypes<[_Secmod$DbMode]> {}
        interface _Secmod$KeyStoreLoadParameter$$static extends ClassLike {
          new(trustType: Secmod$TrustType, password: char[]): Secmod$KeyStoreLoadParameter;
          new(trustType: Secmod$TrustType, prot: java.security.KeyStore$ProtectionParameter): Secmod$KeyStoreLoadParameter;
        }
        let Secmod$KeyStoreLoadParameter: _Secmod$KeyStoreLoadParameter$$static;
        interface _Secmod$KeyStoreLoadParameter {
          getProtectionParameter(): java.security.KeyStore$ProtectionParameter;
          getTrustType(): Secmod$TrustType;
          _protection: java.security.KeyStore$ProtectionParameter;
          _trustType: Secmod$TrustType;
        }
        interface Secmod$KeyStoreLoadParameter extends CombineTypes<[_Secmod$KeyStoreLoadParameter, java.security.KeyStore$LoadStoreParameter, java.lang.Object]> {}
        interface _Secmod$Module$$static extends ClassLike {
          _new(libraryDir: string, libraryName: string, commonName: string, slotIndex: int, slotId: int): Secmod$Module;
        }
        let Secmod$Module: _Secmod$Module$$static;
        interface _Secmod$Module {
          getConfiguration(): string;
          getLibraryName(): string;
          getProvider(): java.security.Provider;
          _getTrust(hash: Secmod$Bytes): Secmod$TrustAttributes;
          getType(): Secmod$ModuleType;
          _hasInitializedProvider(): boolean;
          _initConfiguration(): void;
          _newProvider(): SunPKCS11;
          setConfiguration(config: string): void;
          _setProvider(p: SunPKCS11): void;
          _setTrust(token: Token, cert: java.security.cert.X509Certificate): void;
          toString(): string;
          _commonName: string;
          _config: string;
          _libraryName: string;
          _provider: SunPKCS11;
          _slot: int;
          _trust: java.util.Map<Secmod$Bytes,Secmod$TrustAttributes>;
          _type: Secmod$ModuleType;
        }
        interface Secmod$Module extends CombineTypes<[_Secmod$Module, java.lang.Object]> {}
        interface _Secmod$ModuleType$$static extends ClassLike {
          valueOf(name: string): Secmod$ModuleType;
          values(): Secmod$ModuleType[];
          readonly CRYPTO: Secmod$ModuleType;
          readonly EXTERNAL: Secmod$ModuleType;
          readonly FIPS: Secmod$ModuleType;
          readonly KEYSTORE: Secmod$ModuleType;
          readonly TRUSTANCHOR: Secmod$ModuleType;
        }
        let Secmod$ModuleType: _Secmod$ModuleType$$static;
        interface _Secmod$ModuleType {
        }
        interface Secmod$ModuleType extends CombineTypes<[_Secmod$ModuleType]> {}
        interface _Secmod$TrustAttributes$$static extends ClassLike {
          _new(token: Token, cert: java.security.cert.X509Certificate, bytes: Secmod$Bytes, trustValue: long): Secmod$TrustAttributes;
          _new(token: Token, session: Session, handle: long): Secmod$TrustAttributes;
        }
        let Secmod$TrustAttributes: _Secmod$TrustAttributes$$static;
        interface _Secmod$TrustAttributes {
          _getHash(): Secmod$Bytes;
          _isTrusted(type: Secmod$TrustType): boolean;
          _isTrusted(l: long): boolean;
          _clientAuth: long;
          _codeSigning: long;
          _emailProtection: long;
          _handle: long;
          _serverAuth: long;
          _shaHash: byte[];
        }
        interface Secmod$TrustAttributes extends CombineTypes<[_Secmod$TrustAttributes, java.lang.Object]> {}
        interface _Secmod$TrustType$$static extends ClassLike {
          valueOf(name: string): Secmod$TrustType;
          values(): Secmod$TrustType[];
          readonly ALL: Secmod$TrustType;
          readonly CLIENT_AUTH: Secmod$TrustType;
          readonly CODE_SIGNING: Secmod$TrustType;
          readonly EMAIL_PROTECTION: Secmod$TrustType;
          readonly SERVER_AUTH: Secmod$TrustType;
        }
        let Secmod$TrustType: _Secmod$TrustType$$static;
        interface _Secmod$TrustType {
        }
        interface Secmod$TrustType extends CombineTypes<[_Secmod$TrustType]> {}
        interface _Session$$static extends ClassLike {
          _drainRefQueue(): boolean;
          _MAX_IDLE_TIME: long;
          _new(token: Token, id: long): Session;
        }
        let Session: _Session$$static;
        interface _Session {
          _addObject(): void;
          _close(): void;
          _close(checkObjCtr: boolean): void;
          compareTo(other: Session): int;
          compareTo(a0: any): int;
          _hasObjects(): boolean;
          _id(): long;
          _isLive(currentTime: long): boolean;
          _kill(): void;
          _removeObject(): void;
          _createdObjects: java.util.concurrent.atomic.AtomicInteger;
          _id: long;
          _lastAccess: long;
          _sessionRef: SessionRef;
          _token: Token;
        }
        interface Session extends CombineTypes<[_Session, java.lang.Object, java.lang.Comparable<Session>]> {}
        interface _SessionKeyRef$$static extends ClassLike {
          _refQueue: java.lang.ref.ReferenceQueue<P11Key>;
          _refSet: java.util.Set<SessionKeyRef>;
          _new(p11Key: P11Key, keyID: long, a2: boolean, wrapperKeyUsed: Session): SessionKeyRef;
        }
        let SessionKeyRef: _SessionKeyRef$$static;
        interface _SessionKeyRef {
          _dispose(): void;
          _registerNativeKey(newKeyID: long, a1: Session): void;
          _removeNativeKey(): void;
          _updateNativeKey(newKeyID: long, a1: Session): void;
          _keyID: long;
          _session: Session;
          _wrapperKeyUsed: boolean;
        }
        interface SessionKeyRef extends CombineTypes<[_SessionKeyRef, java.lang.ref.PhantomReference<P11Key>]> {}
        interface _SessionManager$$static extends ClassLike {
          _DEFAULT_MAX_SESSIONS: int;
          _debug: security.util.Debug;
          _new(token: Token): SessionManager;
        }
        let SessionManager: _SessionManager$$static;
        interface _SessionManager {
          _clearPools(): void;
          _closeSession(session: Session): void;
          _demoteObjSession(session: Session): void;
          _ensureValid(session: Session): Session;
          _getObjSession(): Session;
          _getOpSession(): Session;
          _killSession(session: Session): Session;
          _lowMaxSessions(): boolean;
          _openSession(): Session;
          _releaseSession(session: Session): Session;
          _activeSessions: java.util.concurrent.atomic.AtomicInteger;
          _maxActiveSessions: int;
          _maxActiveSessionsLock: any;
          _maxSessions: int;
          _objSessions: SessionManager$Pool;
          _opSessions: SessionManager$Pool;
          _openSessionFlags: long;
          _token: Token;
        }
        interface SessionManager extends CombineTypes<[_SessionManager, java.lang.Object]> {}
        interface _SessionManager$Pool$$static extends ClassLike {
          _new(mgr: SessionManager, obj: boolean): SessionManager$Pool;
        }
        let SessionManager$Pool: _SessionManager$Pool$$static;
        interface _SessionManager$Pool {
          _closeAll(): void;
          _free(): void;
          _poll(): Session;
          _release(session: Session): void;
          _remove(session: Session): boolean;
          _SESSION_MAX: int;
          _closed: boolean;
          _mgr: SessionManager;
          _pool: java.util.AbstractQueue<Session>;
        }
        interface SessionManager$Pool extends CombineTypes<[_SessionManager$Pool, java.lang.Object]> {}
        interface _SessionRef$$static extends ClassLike {
          _REF_LIST: java.util.Set<SessionRef>;
          _REF_QUEUE: java.lang.ref.ReferenceQueue<Session>;
          _new(session: Session, id: long, a2: Token): SessionRef;
        }
        let SessionRef: _SessionRef$$static;
        interface _SessionRef {
          compareTo(other: SessionRef): int;
          compareTo(a0: any): int;
          _dispose(): void;
          _id: long;
          _token: Token;
        }
        interface SessionRef extends CombineTypes<[_SessionRef, java.lang.ref.PhantomReference<Session>, java.lang.Comparable<SessionRef>]> {}
        interface _SunPKCS11$$static extends ClassLike {
          _checkNull<T>(obj: T): T;
          _d(type: string, algorithm: string, className: string, m: int[]): void;
          _d(type: string, algorithm: string, className: string, aliases: java.util.List<string>, m: int[]): void;
          _d(type: string, algorithm: string, className: string, m: int[], requiredMechs: int[]): void;
          _dA(type: string, algorithm: string, className: string, m: int[]): void;
          _dA(type: string, algorithm: string, className: string, m: int[], requiredMechs: int[]): void;
          _m(m1: long): int[];
          _m(m1: long, a1: long): int[];
          _m(m1: long, a1: long, m2: long): int[];
          _m(m1: long, a1: long, m2: long, a3: long): int[];
          _register(d: SunPKCS11$Descriptor): void;
          _toString(longs: long[]): string;
          _AGP: string;
          _CIP: string;
          _KA: string;
          _KF: string;
          _KG: string;
          _KPG: string;
          _KS: string;
          _MAC: string;
          _MD: string;
          _SIG: string;
          _SKF: string;
          _SR: string;
          _cleaner: SunPKCS11$NativeResourceCleaner;
          _debug: security.util.Debug;
          _descriptors: java.util.Map<int,java.util.List<SunPKCS11$Descriptor>>;
          _serialVersionUID: long;
          new(): SunPKCS11;
          _new(c: Config): SunPKCS11;
        }
        let SunPKCS11: _SunPKCS11$$static;
        interface _SunPKCS11 {
          configure(configArg: string): java.security.Provider;
          _createCleaner(): void;
          _createPoller(): void;
          _destroyPoller(): void;
          equals(obj: any): boolean;
          _getCallbackHandler(handler: javax.security.auth.callback.CallbackHandler): javax.security.auth.callback.CallbackHandler;
          _getToken(): Token;
          _hasValidToken(): boolean;
          hashCode(): int;
          _initToken(slotInfo: pkcs11.wrapper.CK_SLOT_INFO): void;
          isConfigured(): boolean;
          login(subject: javax.security.auth.Subject, handler: javax.security.auth.callback.CallbackHandler): void;
          logout(): void;
          _readObject(stream: java.io.ObjectInputStream): void;
          setCallbackHandler(handler: javax.security.auth.callback.CallbackHandler): void;
          _uninitToken(token: Token): void;
          _writeReplace(): any;
          _LOCK_HANDLER: any;
          _config: Config;
          _nssModule: Secmod$Module;
          _nssUseSecmodTrust: boolean;
          _p11: wrapper.PKCS11;
          _pHandler: javax.security.auth.callback.CallbackHandler;
          _poller: SunPKCS11$TokenPoller;
          _removable: boolean;
          _slotID: long;
          _token: Token;
        }
        interface SunPKCS11 extends CombineTypes<[_SunPKCS11, java.security.AuthProvider]> {}
        interface _SunPKCS11$Descriptor$$static extends ClassLike {
        }
        let SunPKCS11$Descriptor: _SunPKCS11$Descriptor$$static;
        interface _SunPKCS11$Descriptor {
          _service(token: Token, mechanism: int): SunPKCS11$P11Service;
          toString(): string;
          _algorithm: string;
          _aliases: java.util.List<string>;
          _className: string;
          _mechanisms: int[];
          _requiredMechs: int[];
          _type: string;
        }
        interface SunPKCS11$Descriptor extends CombineTypes<[_SunPKCS11$Descriptor, java.lang.Object]> {}
        interface _SunPKCS11$NativeResourceCleaner$$static extends ClassLike {
        }
        let SunPKCS11$NativeResourceCleaner: _SunPKCS11$NativeResourceCleaner$$static;
        interface _SunPKCS11$NativeResourceCleaner {
          run(): void;
          _count: int;
          _keyRefFound: boolean;
          _sessRefFound: boolean;
          _sleepMillis: long;
          _this$0: SunPKCS11;
        }
        interface SunPKCS11$NativeResourceCleaner extends CombineTypes<[_SunPKCS11$NativeResourceCleaner, java.lang.Object, java.lang.Runnable]> {}
        interface _SunPKCS11$P11Service$$static extends ClassLike {
          _new(token: Token, type: string, algorithm: string, className: string, al: java.util.List<string>, mechanism: long): SunPKCS11$P11Service;
        }
        let SunPKCS11$P11Service: _SunPKCS11$P11Service$$static;
        interface _SunPKCS11$P11Service {
          _isLocalKey(key: java.security.Key): boolean;
          newInstance(param: any): any;
          newInstance0(param: any): any;
          supportsParameter(param: any): boolean;
          toString(): string;
          _mechanism: long;
          _token: Token;
        }
        interface SunPKCS11$P11Service extends CombineTypes<[_SunPKCS11$P11Service, java.security.Provider$Service]> {}
        interface _SunPKCS11$SunPKCS11Rep$$static extends ClassLike {
          _serialVersionUID: long;
          _new(provider: SunPKCS11): SunPKCS11$SunPKCS11Rep;
        }
        let SunPKCS11$SunPKCS11Rep: _SunPKCS11$SunPKCS11Rep$$static;
        interface _SunPKCS11$SunPKCS11Rep {
          _readResolve(): any;
          _configName: string;
          _providerName: string;
        }
        interface SunPKCS11$SunPKCS11Rep extends CombineTypes<[_SunPKCS11$SunPKCS11Rep, java.lang.Object, java.io.Serializable]> {}
        interface _SunPKCS11$TokenPoller$$static extends ClassLike {
        }
        let SunPKCS11$TokenPoller: _SunPKCS11$TokenPoller$$static;
        interface _SunPKCS11$TokenPoller {
          _disable(): void;
          run(): void;
          _enabled: boolean;
          _provider: SunPKCS11;
        }
        interface SunPKCS11$TokenPoller extends CombineTypes<[_SunPKCS11$TokenPoller, java.lang.Object, java.lang.Runnable]> {}
        interface _TemplateManager$$static extends ClassLike {
          _DEBUG: boolean;
          _O_ANY: string;
          _O_GENERATE: string;
          _O_IMPORT: string;
          _new(): TemplateManager;
        }
        let TemplateManager: _TemplateManager$$static;
        interface _TemplateManager {
          _addTemplate(op: string, objectClass: long, a2: long, keyAlgorithm: pkcs11.wrapper.CK_ATTRIBUTE[]): void;
          _buildCompositeTemplate(key: TemplateManager$TemplateKey): TemplateManager$Template;
          _getAttributes(op: string, type: long, a2: long, alg: pkcs11.wrapper.CK_ATTRIBUTE[]): pkcs11.wrapper.CK_ATTRIBUTE[];
          _getTemplate(key: TemplateManager$TemplateKey): TemplateManager$Template;
          _compositeTemplates: java.util.Map<TemplateManager$TemplateKey,TemplateManager$Template>;
          _primitiveTemplates: java.util.List<TemplateManager$KeyAndTemplate>;
        }
        interface TemplateManager extends CombineTypes<[_TemplateManager, java.lang.Object]> {}
        interface _TemplateManager$KeyAndTemplate$$static extends ClassLike {
          _new(key: TemplateManager$TemplateKey, template: TemplateManager$Template): TemplateManager$KeyAndTemplate;
        }
        let TemplateManager$KeyAndTemplate: _TemplateManager$KeyAndTemplate$$static;
        interface _TemplateManager$KeyAndTemplate {
          _key: TemplateManager$TemplateKey;
          _template: TemplateManager$Template;
        }
        interface TemplateManager$KeyAndTemplate extends CombineTypes<[_TemplateManager$KeyAndTemplate, java.lang.Object]> {}
        interface _TemplateManager$Template$$static extends ClassLike {
          _combine(attrs1: pkcs11.wrapper.CK_ATTRIBUTE[], attrs2: pkcs11.wrapper.CK_ATTRIBUTE[]): pkcs11.wrapper.CK_ATTRIBUTE[];
          _A0: wrapper.CK_ATTRIBUTE[];
          _new(): TemplateManager$Template;
          _new(attributes: pkcs11.wrapper.CK_ATTRIBUTE[]): TemplateManager$Template;
        }
        let TemplateManager$Template: _TemplateManager$Template$$static;
        interface _TemplateManager$Template {
          _add(template: TemplateManager$Template): void;
          _getAttributes(attrs: pkcs11.wrapper.CK_ATTRIBUTE[]): pkcs11.wrapper.CK_ATTRIBUTE[];
          toString(): string;
          _attributes: wrapper.CK_ATTRIBUTE[];
        }
        interface TemplateManager$Template extends CombineTypes<[_TemplateManager$Template, java.lang.Object]> {}
        interface _TemplateManager$TemplateKey$$static extends ClassLike {
          _new(operation: string, keyType: long, a2: long): TemplateManager$TemplateKey;
        }
        let TemplateManager$TemplateKey: _TemplateManager$TemplateKey$$static;
        interface _TemplateManager$TemplateKey {
          _appliesTo(key: TemplateManager$TemplateKey): boolean;
          equals(obj: any): boolean;
          hashCode(): int;
          toString(): string;
          _keyAlgorithm: long;
          _keyType: long;
          _operation: string;
        }
        interface TemplateManager$TemplateKey extends CombineTypes<[_TemplateManager$TemplateKey, java.lang.Object]> {}
        interface _Token$$static extends ClassLike {
          _CHECK_INTERVAL: long;
          _CHECK_LOCK: any;
          _INVALID_MECH: wrapper.CK_MECHANISM_INFO;
          _serialVersionUID: long;
          _serializedTokens: java.util.List<java.lang.ref.Reference<Token>>;
          _new(provider: SunPKCS11): Token;
        }
        let Token: _Token$$static;
        interface _Token {
          _destroy(): void;
          _ensureLoggedIn(session: Session): void;
          _ensureValid(): void;
          _getAttributes(op: string, type: long, a2: long, alg: pkcs11.wrapper.CK_ATTRIBUTE[]): pkcs11.wrapper.CK_ATTRIBUTE[];
          _getKeyFactory(algorithm: string): P11KeyFactory;
          _getKeyStore(): P11KeyStore;
          _getMechanismInfo(mechanism: long): pkcs11.wrapper.CK_MECHANISM_INFO;
          _getObjSession(): Session;
          _getOpSession(): Session;
          _getRandom(): P11SecureRandom;
          _getTokenId(): byte[];
          _isLoggedIn(session: Session): boolean;
          _isLoggedInNow(session: Session): boolean;
          _isPresent(sessionID: long): boolean;
          _isValid(): boolean;
          _isWriteProtected(): boolean;
          _killSession(session: Session): Session;
          _readObject(stream: java.io.ObjectInputStream): void;
          _releaseSession(session: Session): Session;
          _supportsRawSecretKeyImport(): boolean;
          _writeReplace(): any;
          _config: Config;
          _dhFactory: P11KeyFactory;
          _dsaFactory: P11KeyFactory;
          _ecFactory: P11KeyFactory;
          _explicitCancel: boolean;
          _keyStore: P11KeyStore;
          _lastLoginCheck: long;
          _lastPresentCheck: long;
          _loggedIn: boolean;
          _mechInfoMap: java.util.Map<long,wrapper.CK_MECHANISM_INFO>;
          _p11: wrapper.PKCS11;
          _privateCache: KeyCache;
          _provider: SunPKCS11;
          _removable: boolean;
          _rsaFactory: P11KeyFactory;
          _secretCache: KeyCache;
          _secureRandom: P11SecureRandom;
          _sessionManager: SessionManager;
          _supportsRawSecretKeyImport: boolean;
          _templateManager: TemplateManager;
          _tokenId: byte[];
          _tokenInfo: wrapper.CK_TOKEN_INFO;
          _valid: boolean;
          _writeProtected: boolean;
        }
        interface Token extends CombineTypes<[_Token, java.lang.Object, java.io.Serializable]> {}
        interface _Token$TokenRep$$static extends ClassLike {
          _serialVersionUID: long;
          _new(token: Token): Token$TokenRep;
        }
        let Token$TokenRep: _Token$TokenRep$$static;
        interface _Token$TokenRep {
          _readResolve(): any;
          _tokenId: byte[];
        }
        interface Token$TokenRep extends CombineTypes<[_Token$TokenRep, java.lang.Object, java.io.Serializable]> {}
      }
    }
  }
}
