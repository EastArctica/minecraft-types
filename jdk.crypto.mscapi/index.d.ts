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
      module mscapi {
        interface _CKey$$static extends ClassLike {
          _cleanUp(a0: long, a1: long): void;
          _generateECBlob(k: java.security.Key): byte[];
          _getContainerName(a0: long): string;
          _getKeyType(a0: long): string;
          _serialVersionUID: long;
          _new(algorithm: string, handles: CKey$NativeHandles, keyLength: int, isPublic: boolean): CKey;
        }
        let CKey: _CKey$$static;
        interface _CKey {
          getAlgorithm(): string;
          getHCryptKey(): long;
          getHCryptProvider(): long;
          length(): int;
          toString(): string;
          _algorithm: string;
          _handles: CKey$NativeHandles;
          _isPublic: boolean;
          _keyLength: int;
        }
        interface CKey extends CombineTypes<[_CKey, java.security.Key, sun.security.util.Length, java.lang.Object]> {}
        interface _CKey$NativeHandles$$static extends ClassLike {
          new(hCryptProv: long, a1: long): CKey$NativeHandles;
        }
        let CKey$NativeHandles: _CKey$NativeHandles$$static;
        interface _CKey$NativeHandles {
          _finalize(): void;
          _hCryptKey: long;
          _hCryptProv: long;
        }
        interface CKey$NativeHandles extends CombineTypes<[_CKey$NativeHandles, java.lang.Object]> {}
        interface _CKeyPair$$static extends ClassLike {
          _new(alg: string, hCryptProv: long, a2: long, hCryptKey: int): CKeyPair;
        }
        let CKeyPair: _CKeyPair$$static;
        interface _CKeyPair {
          getPrivate(): CPrivateKey;
          getPublic(): CPublicKey;
          _privateKey: CPrivateKey;
          _publicKey: CPublicKey;
        }
        interface CKeyPair extends CombineTypes<[_CKeyPair, java.lang.Object]> {}
        interface _CKeyPairGenerator$$static extends ClassLike {
          new(keyAlg: string): CKeyPairGenerator;
        }
        let CKeyPairGenerator: _CKeyPairGenerator$$static;
        interface _CKeyPairGenerator {
          _keyAlg: string;
        }
        interface CKeyPairGenerator extends CombineTypes<[_CKeyPairGenerator, java.security.KeyPairGeneratorSpi]> {}
        interface _CKeyPairGenerator$RSA$$static extends ClassLike {
          _generateCKeyPair(a0: string, a1: int, a2: string): CKeyPair;
          _KEY_SIZE_MAX: int;
          _KEY_SIZE_MIN: int;
          new(): CKeyPairGenerator$RSA;
        }
        let CKeyPairGenerator$RSA: _CKeyPairGenerator$RSA$$static;
        interface _CKeyPairGenerator$RSA {
          generateKeyPair(): java.security.KeyPair;
          initialize(keySize: int, random: java.security.SecureRandom): void;
          initialize(params: java.security.spec.AlgorithmParameterSpec, random: java.security.SecureRandom): void;
          _keySize: int;
        }
        interface CKeyPairGenerator$RSA extends CombineTypes<[_CKeyPairGenerator$RSA, sun.security.mscapi.CKeyPairGenerator]> {}
        interface _CKeyStore$$static extends ClassLike {
          _KEYSTORE_COMPATIBILITY_MODE_PROP: string;
          _LOCATION_CURRENTUSER: int;
          _LOCATION_LOCALMACHINE: int;
          _debug: security.util.Debug;
          _new(storeName: string, storeLocation: int): CKeyStore;
        }
        let CKeyStore: _CKeyStore$$static;
        interface _CKeyStore {
          _destroyKeyContainer(a0: string): void;
          engineAliases(): java.util.Enumeration<string>;
          engineContainsAlias(alias: string): boolean;
          engineDeleteEntry(alias: string): void;
          engineGetCertificate(alias: string): java.security.cert.Certificate;
          engineGetCertificateAlias(cert: java.security.cert.Certificate): string;
          engineGetCertificateChain(alias: string): java.security.cert.Certificate[];
          engineGetCreationDate(alias: string): java.util.Date;
          engineGetKey(alias: string, password: char[]): java.security.Key;
          engineIsCertificateEntry(alias: string): boolean;
          engineIsKeyEntry(alias: string): boolean;
          engineLoad(stream: java.io.InputStream, password: char[]): void;
          engineSetCertificateEntry(alias: string, cert: java.security.cert.Certificate): void;
          engineSetKeyEntry(alias: string, key: java.security.Key, password: char[], chain: java.security.cert.Certificate[]): void;
          engineSetKeyEntry(alias: string, key: byte[], chain: java.security.cert.Certificate[]): void;
          engineSize(): int;
          engineStore(stream: java.io.OutputStream, password: char[]): void;
          _generateCertificate(data: byte[], certCollection: java.util.Collection<java.security.cert.Certificate>): void;
          _generateCertificateChain(alias: string, certCollection: java.util.Collection<java.security.cert.Certificate>): void;
          _generateKeyAndCertificateChain(isRSA: boolean, alias: string, hCryptProv: long, a3: long, hCryptKey: int, a5: java.util.Collection<java.security.cert.Certificate>): void;
          _generateRSAPrivateKeyBlob(a0: int, a1: byte[], a2: byte[], a3: byte[], a4: byte[], a5: byte[], a6: byte[], a7: byte[], a8: byte[]): byte[];
          _getLocation(): int;
          _getName(): string;
          _loadKeysOrCertificateChains(a0: string, a1: int): void;
          _removeCertificate(a0: string, a1: string, a2: byte[], a3: int): void;
          _removeCngKey(a0: long): void;
          _storeCertificate(a0: string, a1: string, a2: byte[], a3: int, a4: long, a5: long): void;
          _storePrivateKey(a0: string, a1: byte[], a2: string, a3: int): CPrivateKey;
          _storeWithUniqueAlias(alias: string, entry: CKeyStore$KeyEntry): void;
          _certificateFactory: java.security.cert.CertificateFactory;
          _entries: java.util.Map<string,CKeyStore$KeyEntry>;
          _keyStoreCompatibilityMode: boolean;
          _storeLocation: int;
          _storeName: string;
        }
        interface CKeyStore extends CombineTypes<[_CKeyStore, java.security.KeyStoreSpi]> {}
        interface _CKeyStore$KeyEntry$$static extends ClassLike {
          _new(this$0: CKeyStore, key: CKey, chain: java.security.cert.X509Certificate[]): CKeyStore$KeyEntry;
          _new(this$0: CKeyStore, alias: string, key: CKey, chain: java.security.cert.X509Certificate[]): CKeyStore$KeyEntry;
        }
        let CKeyStore$KeyEntry: _CKeyStore$KeyEntry$$static;
        interface _CKeyStore$KeyEntry {
          delete(): void;
          _getAlias(): string;
          _getCertificateChain(): java.security.cert.X509Certificate[];
          _getPrivateKey(): CKey;
          _setAlias(alias: string): void;
          _setCertificateChain(chain: java.security.cert.X509Certificate[]): void;
          _setRSAPrivateKey(k: java.security.Key): void;
          _alias: string;
          _certChain: java.security.cert.X509Certificate[];
          _privateKey: CKey;
          _this$0: CKeyStore;
        }
        interface CKeyStore$KeyEntry extends CombineTypes<[_CKeyStore$KeyEntry, java.lang.Object]> {}
        interface _CKeyStore$MY$$static extends ClassLike {
          new(): CKeyStore$MY;
        }
        let CKeyStore$MY: _CKeyStore$MY$$static;
        interface _CKeyStore$MY {
          engineAliases(): java.util.Enumeration;
          engineContainsAlias(a0: string): boolean;
          engineDeleteEntry(a0: string): void;
          engineGetCertificate(a0: string): java.security.cert.Certificate;
          engineGetCertificateAlias(a0: java.security.cert.Certificate): string;
          engineGetCertificateChain(a0: string): java.security.cert.Certificate[];
          engineGetCreationDate(a0: string): java.util.Date;
          engineGetKey(a0: string, a1: char[]): java.security.Key;
          engineIsCertificateEntry(a0: string): boolean;
          engineIsKeyEntry(a0: string): boolean;
          engineLoad(a0: java.io.InputStream, a1: char[]): void;
          engineSetCertificateEntry(a0: string, a1: java.security.cert.Certificate): void;
          engineSetKeyEntry(a0: string, a1: byte[], a2: java.security.cert.Certificate[]): void;
          engineSetKeyEntry(a0: string, a1: java.security.Key, a2: char[], a3: java.security.cert.Certificate[]): void;
          engineSize(): int;
          engineStore(a0: java.io.OutputStream, a1: char[]): void;
        }
        interface CKeyStore$MY extends CombineTypes<[_CKeyStore$MY, sun.security.mscapi.CKeyStore]> {}
        interface _CKeyStore$MYLocalMachine$$static extends ClassLike {
          new(): CKeyStore$MYLocalMachine;
        }
        let CKeyStore$MYLocalMachine: _CKeyStore$MYLocalMachine$$static;
        interface _CKeyStore$MYLocalMachine {
          engineAliases(): java.util.Enumeration;
          engineContainsAlias(a0: string): boolean;
          engineDeleteEntry(a0: string): void;
          engineGetCertificate(a0: string): java.security.cert.Certificate;
          engineGetCertificateAlias(a0: java.security.cert.Certificate): string;
          engineGetCertificateChain(a0: string): java.security.cert.Certificate[];
          engineGetCreationDate(a0: string): java.util.Date;
          engineGetKey(a0: string, a1: char[]): java.security.Key;
          engineIsCertificateEntry(a0: string): boolean;
          engineIsKeyEntry(a0: string): boolean;
          engineLoad(a0: java.io.InputStream, a1: char[]): void;
          engineSetCertificateEntry(a0: string, a1: java.security.cert.Certificate): void;
          engineSetKeyEntry(a0: string, a1: byte[], a2: java.security.cert.Certificate[]): void;
          engineSetKeyEntry(a0: string, a1: java.security.Key, a2: char[], a3: java.security.cert.Certificate[]): void;
          engineSize(): int;
          engineStore(a0: java.io.OutputStream, a1: char[]): void;
        }
        interface CKeyStore$MYLocalMachine extends CombineTypes<[_CKeyStore$MYLocalMachine, sun.security.mscapi.CKeyStore]> {}
        interface _CKeyStore$ROOT$$static extends ClassLike {
          new(): CKeyStore$ROOT;
        }
        let CKeyStore$ROOT: _CKeyStore$ROOT$$static;
        interface _CKeyStore$ROOT {
          engineAliases(): java.util.Enumeration;
          engineContainsAlias(a0: string): boolean;
          engineDeleteEntry(a0: string): void;
          engineGetCertificate(a0: string): java.security.cert.Certificate;
          engineGetCertificateAlias(a0: java.security.cert.Certificate): string;
          engineGetCertificateChain(a0: string): java.security.cert.Certificate[];
          engineGetCreationDate(a0: string): java.util.Date;
          engineGetKey(a0: string, a1: char[]): java.security.Key;
          engineIsCertificateEntry(a0: string): boolean;
          engineIsKeyEntry(a0: string): boolean;
          engineLoad(a0: java.io.InputStream, a1: char[]): void;
          engineSetCertificateEntry(a0: string, a1: java.security.cert.Certificate): void;
          engineSetKeyEntry(a0: string, a1: byte[], a2: java.security.cert.Certificate[]): void;
          engineSetKeyEntry(a0: string, a1: java.security.Key, a2: char[], a3: java.security.cert.Certificate[]): void;
          engineSize(): int;
          engineStore(a0: java.io.OutputStream, a1: char[]): void;
        }
        interface CKeyStore$ROOT extends CombineTypes<[_CKeyStore$ROOT, sun.security.mscapi.CKeyStore]> {}
        interface _CKeyStore$ROOTLocalMachine$$static extends ClassLike {
          new(): CKeyStore$ROOTLocalMachine;
        }
        let CKeyStore$ROOTLocalMachine: _CKeyStore$ROOTLocalMachine$$static;
        interface _CKeyStore$ROOTLocalMachine {
          engineAliases(): java.util.Enumeration;
          engineContainsAlias(a0: string): boolean;
          engineDeleteEntry(a0: string): void;
          engineGetCertificate(a0: string): java.security.cert.Certificate;
          engineGetCertificateAlias(a0: java.security.cert.Certificate): string;
          engineGetCertificateChain(a0: string): java.security.cert.Certificate[];
          engineGetCreationDate(a0: string): java.util.Date;
          engineGetKey(a0: string, a1: char[]): java.security.Key;
          engineIsCertificateEntry(a0: string): boolean;
          engineIsKeyEntry(a0: string): boolean;
          engineLoad(a0: java.io.InputStream, a1: char[]): void;
          engineSetCertificateEntry(a0: string, a1: java.security.cert.Certificate): void;
          engineSetKeyEntry(a0: string, a1: byte[], a2: java.security.cert.Certificate[]): void;
          engineSetKeyEntry(a0: string, a1: java.security.Key, a2: char[], a3: java.security.cert.Certificate[]): void;
          engineSize(): int;
          engineStore(a0: java.io.OutputStream, a1: char[]): void;
        }
        interface CKeyStore$ROOTLocalMachine extends CombineTypes<[_CKeyStore$ROOTLocalMachine, sun.security.mscapi.CKeyStore]> {}
        interface _CPrivateKey$$static extends ClassLike {
          _of(alg: string, hCryptProv: long, a2: long, hCryptKey: int): CPrivateKey;
          of(alg: string, handles: CKey$NativeHandles, keyLength: int): CPrivateKey;
          _serialVersionUID: long;
        }
        let CPrivateKey: _CPrivateKey$$static;
        interface _CPrivateKey {
          getEncoded(): byte[];
          getFormat(): string;
          _readObject(stream: java.io.ObjectInputStream): void;
          _writeObject(out: java.io.ObjectOutputStream): void;
        }
        interface CPrivateKey extends CombineTypes<[_CPrivateKey, java.security.PrivateKey, sun.security.mscapi.CKey]> {}
        interface _CPublicKey$$static extends ClassLike {
          _of(alg: string, hCryptProv: long, a2: long, hCryptKey: int): CPublicKey;
          of(alg: string, handles: CKey$NativeHandles, keyLength: int): CPublicKey;
          _serialVersionUID: long;
          _new(alg: string, handles: CKey$NativeHandles, keyLength: int): CPublicKey;
        }
        let CPublicKey: _CPublicKey$$static;
        interface _CPublicKey {
          getAlgorithm(): string;
          getFormat(): string;
          getHCryptKey(): long;
          getHCryptProvider(): long;
          _getPublicKeyBlob(a0: long, a1: long): byte[];
          length(): int;
          _readObject(stream: java.io.ObjectInputStream): void;
          toString(): string;
          _writeReplace(): any;
          _encoding: byte[];
        }
        interface CPublicKey extends CombineTypes<[_CPublicKey, sun.security.mscapi.CKey, java.security.PublicKey]> {}
        interface _CPublicKey$CECPublicKey$$static extends ClassLike {
          _serialVersionUID: long;
          _new(handles: CKey$NativeHandles, keyLength: int): CPublicKey$CECPublicKey;
        }
        let CPublicKey$CECPublicKey: _CPublicKey$CECPublicKey$$static;
        interface _CPublicKey$CECPublicKey {
          getAlgorithm(): string;
          getEncoded(): byte[];
          getHCryptKey(): long;
          getHCryptProvider(): long;
          getParams(): java.security.spec.ECParameterSpec;
          getW(): java.security.spec.ECPoint;
          length(): int;
          toString(): string;
          _w: java.security.spec.ECPoint;
        }
        interface CPublicKey$CECPublicKey extends CombineTypes<[_CPublicKey$CECPublicKey, java.security.interfaces.ECPublicKey, sun.security.mscapi.CPublicKey]> {}
        interface _CPublicKey$CRSAPublicKey$$static extends ClassLike {
          _serialVersionUID: long;
          _new(handles: CKey$NativeHandles, keyLength: int): CPublicKey$CRSAPublicKey;
        }
        let CPublicKey$CRSAPublicKey: _CPublicKey$CRSAPublicKey$$static;
        interface _CPublicKey$CRSAPublicKey {
          getAlgorithm(): string;
          getEncoded(): byte[];
          _getExponent(a0: byte[]): byte[];
          getHCryptKey(): long;
          getHCryptProvider(): long;
          getModulus(): java.math.BigInteger;
          _getModulus(a0: byte[]): byte[];
          getPublicExponent(): java.math.BigInteger;
          length(): int;
          toString(): string;
          _exponent: java.math.BigInteger;
          _modulus: java.math.BigInteger;
        }
        interface CPublicKey$CRSAPublicKey extends CombineTypes<[_CPublicKey$CRSAPublicKey, java.security.interfaces.RSAPublicKey, sun.security.mscapi.CPublicKey]> {}
        interface _CRSACipher$$static extends ClassLike {
          _cngEncryptDecrypt(a0: int[], a1: byte[], a2: int, a3: long, a4: boolean): byte[];
          _constructKey(encodedKey: byte[], encodedKeyAlgorithm: string, keyType: int): java.security.Key;
          _constructPrivateKey(encodedKey: byte[], encodedKeyAlgorithm: string): java.security.PrivateKey;
          _constructPublicKey(encodedKey: byte[], encodedKeyAlgorithm: string): java.security.PublicKey;
          _constructSecretKey(encodedKey: byte[], encodedKeyAlgorithm: string): javax.crypto.SecretKey;
          _encryptDecrypt(a0: int[], a1: byte[], a2: int, a3: long, a4: boolean): byte[];
          _B0: byte[];
          _ERROR_INVALID_PARAMETER: int;
          _MODE_DECRYPT: int;
          _MODE_ENCRYPT: int;
          _MODE_SIGN: int;
          _MODE_VERIFY: int;
          _NTE_INVALID_PARAMETER: int;
          _PAD_PKCS1: string;
          _PAD_PKCS1_LENGTH: int;
          new(): CRSACipher;
        }
        let CRSACipher: _CRSACipher$$static;
        interface _CRSACipher {
          _doFinal(): byte[];
          _encryptDecrypt(data: byte[], dataSize: int, key: CKey, doEncrypt: boolean): byte[];
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
          _engineSetPadding(paddingName: string): void;
          _engineUnwrap(wrappedKey: byte[], algorithm: string, type: int): java.security.Key;
          _engineUpdate(_in: byte[], inOfs: int, inLen: int): byte[];
          _engineUpdate(_in: byte[], inOfs: int, inLen: int, out: byte[], outOfs: int): int;
          _engineWrap(key: java.security.Key): byte[];
          _init(opmode: int, key: java.security.Key): void;
          _update(_in: byte[], inOfs: int, inLen: int): void;
          _bufOfs: int;
          _buffer: byte[];
          _forTlsPremasterSecret: boolean;
          _mode: int;
          _outputSize: int;
          _paddingLength: int;
          _paddingType: string;
          _privateKey: CKey;
          _publicKey: CKey;
          _random: java.security.SecureRandom;
          _spec: java.security.spec.AlgorithmParameterSpec;
        }
        interface CRSACipher extends CombineTypes<[_CRSACipher, javax.crypto.CipherSpi]> {}
        interface _CSignature$$static extends ClassLike {
          _convertEndianArray(byteArray: byte[]): byte[];
          _importECPublicKey(a0: string, a1: byte[], a2: int): CPublicKey;
          _importPublicKey(a0: string, a1: byte[], a2: int): CPublicKey;
          _signCngHash(a0: int, a1: byte[], a2: int, a3: int, a4: string, a5: long, a6: long): byte[];
          _signHash(a0: boolean, a1: byte[], a2: int, a3: string, a4: long, a5: long): byte[];
          _verifyCngSignedHash(a0: int, a1: byte[], a2: int, a3: byte[], a4: int, a5: int, a6: string, a7: long, a8: long): boolean;
          _verifySignedHash(a0: byte[], a1: int, a2: string, a3: byte[], a4: int, a5: long, a6: long): boolean;
          _new(keyName: string, digestName: string): CSignature;
        }
        let CSignature: _CSignature$$static;
        interface _CSignature {
          _engineGetParameter(param: string): any;
          _engineGetParameters(): java.security.AlgorithmParameters;
          _engineSetParameter(param: string, value: any): void;
          _engineSetParameter(params: java.security.spec.AlgorithmParameterSpec): void;
          _engineUpdate(b: byte): void;
          _engineUpdate(b: byte[], off: int, len: int): void;
          _engineUpdate(input: java.nio.ByteBuffer): void;
          _getDigestValue(): byte[];
          _resetDigest(): void;
          _setDigestName(name: string): void;
          _keyAlgorithm: string;
          _messageDigest: java.security.MessageDigest;
          _messageDigestAlgorithm: string;
          _needsReset: boolean;
          _privateKey: CPrivateKey;
          _publicKey: CPublicKey;
        }
        interface CSignature extends CombineTypes<[_CSignature, java.security.SignatureSpi]> {}
        interface _CSignature$ECDSA$$static extends ClassLike {
          new(messageDigestAlgorithm: string): CSignature$ECDSA;
        }
        let CSignature$ECDSA: _CSignature$ECDSA$$static;
        interface _CSignature$ECDSA {
          _engineInitSign(key: java.security.PrivateKey): void;
          _engineInitVerify(key: java.security.PublicKey): void;
          _engineSign(): byte[];
          _engineVerify(sigBytes: byte[]): boolean;
        }
        interface CSignature$ECDSA extends CombineTypes<[_CSignature$ECDSA, sun.security.mscapi.CSignature]> {}
        interface _CSignature$MD2withRSA$$static extends ClassLike {
          new(): CSignature$MD2withRSA;
        }
        let CSignature$MD2withRSA: _CSignature$MD2withRSA$$static;
        interface _CSignature$MD2withRSA {
        }
        interface CSignature$MD2withRSA extends CombineTypes<[_CSignature$MD2withRSA, sun.security.mscapi.CSignature$RSA]> {}
        interface _CSignature$MD5withRSA$$static extends ClassLike {
          new(): CSignature$MD5withRSA;
        }
        let CSignature$MD5withRSA: _CSignature$MD5withRSA$$static;
        interface _CSignature$MD5withRSA {
        }
        interface CSignature$MD5withRSA extends CombineTypes<[_CSignature$MD5withRSA, sun.security.mscapi.CSignature$RSA]> {}
        interface _CSignature$NONEwithRSA$$static extends ClassLike {
          _RAW_RSA_MAX: int;
          new(): CSignature$NONEwithRSA;
        }
        let CSignature$NONEwithRSA: _CSignature$NONEwithRSA$$static;
        interface _CSignature$NONEwithRSA {
          _engineUpdate(b: byte): void;
          _engineUpdate(b: byte[], off: int, len: int): void;
          _engineUpdate(byteBuffer: java.nio.ByteBuffer): void;
          _getDigestValue(): byte[];
          _resetDigest(): void;
          _offset: int;
          _precomputedDigest: byte[];
        }
        interface CSignature$NONEwithRSA extends CombineTypes<[_CSignature$NONEwithRSA, sun.security.mscapi.CSignature$RSA]> {}
        interface _CSignature$PSS$$static extends ClassLike {
          new(): CSignature$PSS;
        }
        let CSignature$PSS: _CSignature$PSS$$static;
        interface _CSignature$PSS {
          _engineGetParameters(): java.security.AlgorithmParameters;
          _engineInitSign(key: java.security.PrivateKey): void;
          _engineInitVerify(key: java.security.PublicKey): void;
          _engineSetParameter(params: java.security.spec.AlgorithmParameterSpec): void;
          _engineSign(): byte[];
          _engineUpdate(b: byte): void;
          _engineUpdate(b: byte[], off: int, len: int): void;
          _engineUpdate(input: java.nio.ByteBuffer): void;
          _engineVerify(sigBytes: byte[]): boolean;
          _ensureInit(): void;
          _validateSigParams(p: java.security.spec.AlgorithmParameterSpec): java.security.spec.PSSParameterSpec;
          _fallbackSignature: java.security.Signature;
          _pssParams: java.security.spec.PSSParameterSpec;
        }
        interface CSignature$PSS extends CombineTypes<[_CSignature$PSS, sun.security.mscapi.CSignature$RSA]> {}
        interface _CSignature$RSA$$static extends ClassLike {
          _generatePublicKeyBlob(a0: int, a1: byte[], a2: byte[]): byte[];
          new(digestAlgorithm: string): CSignature$RSA;
        }
        let CSignature$RSA: _CSignature$RSA$$static;
        interface _CSignature$RSA {
          _engineInitSign(key: java.security.PrivateKey): void;
          _engineInitVerify(key: java.security.PublicKey): void;
          _engineSign(): byte[];
          _engineVerify(sigBytes: byte[]): boolean;
        }
        interface CSignature$RSA extends CombineTypes<[_CSignature$RSA, sun.security.mscapi.CSignature]> {}
        interface _CSignature$SHA1withECDSA$$static extends ClassLike {
          new(): CSignature$SHA1withECDSA;
        }
        let CSignature$SHA1withECDSA: _CSignature$SHA1withECDSA$$static;
        interface _CSignature$SHA1withECDSA {
        }
        interface CSignature$SHA1withECDSA extends CombineTypes<[_CSignature$SHA1withECDSA, sun.security.mscapi.CSignature$ECDSA]> {}
        interface _CSignature$SHA1withRSA$$static extends ClassLike {
          new(): CSignature$SHA1withRSA;
        }
        let CSignature$SHA1withRSA: _CSignature$SHA1withRSA$$static;
        interface _CSignature$SHA1withRSA {
        }
        interface CSignature$SHA1withRSA extends CombineTypes<[_CSignature$SHA1withRSA, sun.security.mscapi.CSignature$RSA]> {}
        interface _CSignature$SHA224withECDSA$$static extends ClassLike {
          new(): CSignature$SHA224withECDSA;
        }
        let CSignature$SHA224withECDSA: _CSignature$SHA224withECDSA$$static;
        interface _CSignature$SHA224withECDSA {
        }
        interface CSignature$SHA224withECDSA extends CombineTypes<[_CSignature$SHA224withECDSA, sun.security.mscapi.CSignature$ECDSA]> {}
        interface _CSignature$SHA256withECDSA$$static extends ClassLike {
          new(): CSignature$SHA256withECDSA;
        }
        let CSignature$SHA256withECDSA: _CSignature$SHA256withECDSA$$static;
        interface _CSignature$SHA256withECDSA {
        }
        interface CSignature$SHA256withECDSA extends CombineTypes<[_CSignature$SHA256withECDSA, sun.security.mscapi.CSignature$ECDSA]> {}
        interface _CSignature$SHA256withRSA$$static extends ClassLike {
          new(): CSignature$SHA256withRSA;
        }
        let CSignature$SHA256withRSA: _CSignature$SHA256withRSA$$static;
        interface _CSignature$SHA256withRSA {
        }
        interface CSignature$SHA256withRSA extends CombineTypes<[_CSignature$SHA256withRSA, sun.security.mscapi.CSignature$RSA]> {}
        interface _CSignature$SHA384withECDSA$$static extends ClassLike {
          new(): CSignature$SHA384withECDSA;
        }
        let CSignature$SHA384withECDSA: _CSignature$SHA384withECDSA$$static;
        interface _CSignature$SHA384withECDSA {
        }
        interface CSignature$SHA384withECDSA extends CombineTypes<[_CSignature$SHA384withECDSA, sun.security.mscapi.CSignature$ECDSA]> {}
        interface _CSignature$SHA384withRSA$$static extends ClassLike {
          new(): CSignature$SHA384withRSA;
        }
        let CSignature$SHA384withRSA: _CSignature$SHA384withRSA$$static;
        interface _CSignature$SHA384withRSA {
        }
        interface CSignature$SHA384withRSA extends CombineTypes<[_CSignature$SHA384withRSA, sun.security.mscapi.CSignature$RSA]> {}
        interface _CSignature$SHA512withECDSA$$static extends ClassLike {
          new(): CSignature$SHA512withECDSA;
        }
        let CSignature$SHA512withECDSA: _CSignature$SHA512withECDSA$$static;
        interface _CSignature$SHA512withECDSA {
        }
        interface CSignature$SHA512withECDSA extends CombineTypes<[_CSignature$SHA512withECDSA, sun.security.mscapi.CSignature$ECDSA]> {}
        interface _CSignature$SHA512withRSA$$static extends ClassLike {
          new(): CSignature$SHA512withRSA;
        }
        let CSignature$SHA512withRSA: _CSignature$SHA512withRSA$$static;
        interface _CSignature$SHA512withRSA {
        }
        interface CSignature$SHA512withRSA extends CombineTypes<[_CSignature$SHA512withRSA, sun.security.mscapi.CSignature$RSA]> {}
        interface _PRNG$$static extends ClassLike {
          _generateSeed(a0: long, a1: int, a2: byte[]): byte[];
          _getContext(): long;
          _releaseContext(a0: long): void;
          _CLEANER: java.lang.ref.Cleaner;
          _serialVersionUID: long;
          new(): PRNG;
        }
        let PRNG: _PRNG$$static;
        interface _PRNG {
          _engineGenerateSeed(numBytes: int): byte[];
          _engineNextBytes(bytes: byte[]): void;
          _engineSetSeed(seed: byte[]): void;
          _readObject(s: java.io.ObjectInputStream): void;
          _ctxt: long;
        }
        interface PRNG extends CombineTypes<[_PRNG, java.security.SecureRandomSpi, java.io.Serializable]> {}
        interface _PRNG$State$$static extends ClassLike {
          _new(ctxt: long): PRNG$State;
        }
        let PRNG$State: _PRNG$State$$static;
        interface _PRNG$State {
          run(): void;
          _ctxt: long;
        }
        interface PRNG$State extends CombineTypes<[_PRNG$State, java.lang.Object, java.lang.Runnable]> {}
        interface _SunMSCAPI$$static extends ClassLike {
          _INFO: string;
          _serialVersionUID: long;
          new(): SunMSCAPI;
        }
        let SunMSCAPI: _SunMSCAPI$$static;
        interface _SunMSCAPI {
        }
        interface SunMSCAPI extends CombineTypes<[_SunMSCAPI, java.security.Provider]> {}
        interface _SunMSCAPI$ProviderService$$static extends ClassLike {
          _new(p: java.security.Provider, type: string, algo: string, cn: string): SunMSCAPI$ProviderService;
          _new(p: java.security.Provider, type: string, algo: string, cn: string, aliases: java.util.List<string>, attrs: java.util.HashMap<string,string>): SunMSCAPI$ProviderService;
        }
        let SunMSCAPI$ProviderService: _SunMSCAPI$ProviderService$$static;
        interface _SunMSCAPI$ProviderService {
          newInstance(ctrParamObj: any): any;
        }
        interface SunMSCAPI$ProviderService extends CombineTypes<[_SunMSCAPI$ProviderService, java.security.Provider$Service]> {}
        interface _SunMSCAPI$ProviderServiceA$$static extends ClassLike {
          _new(p: java.security.Provider, type: string, algo: string, cn: string, attrs: java.util.HashMap<string,string>): SunMSCAPI$ProviderServiceA;
        }
        let SunMSCAPI$ProviderServiceA: _SunMSCAPI$ProviderServiceA$$static;
        interface _SunMSCAPI$ProviderServiceA {
        }
        interface SunMSCAPI$ProviderServiceA extends CombineTypes<[_SunMSCAPI$ProviderServiceA, sun.security.mscapi.SunMSCAPI$ProviderService]> {}
      }
    }
  }
}
