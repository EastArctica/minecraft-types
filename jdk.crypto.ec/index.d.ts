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
      module ec {
        module ed {
          interface _Ed25519Operations$$static extends ClassLike {
            _SEVEN: java.math.BigInteger;
            _TWO: java.math.BigInteger;
            new(d: security.util.math.ImmutableIntegerModuloP, baseX: java.math.BigInteger, baseY: java.math.BigInteger): Ed25519Operations;
          }
          let Ed25519Operations: _Ed25519Operations$$static;
          interface _Ed25519Operations {
            basePointMultiply(scalar: byte[]): ec.point.Point;
            decodeAffinePoint<T>(exception: java.util.function.Function<string,T>, xLSB: int, y: security.util.math.IntegerModuloP): ec.point.AffinePoint;
            _getNeutral(): ec.point.ExtendedHomogeneousPoint$Immutable;
            _getNeutral(): ec.point.ImmutablePoint;
            of(p: ec.point.AffinePoint): ec.point.ExtendedHomogeneousPoint$Immutable;
            of(a0: ec.point.AffinePoint): ec.point.ImmutablePoint;
            _setDouble(p: ec.point.MutablePoint, t1: security.util.math.MutableIntegerModuloP, t2: security.util.math.MutableIntegerModuloP): ec.point.MutablePoint;
            _setDouble(p: ec.point.ExtendedHomogeneousPoint$Mutable, t1: security.util.math.MutableIntegerModuloP, t2: security.util.math.MutableIntegerModuloP): ec.point.ExtendedHomogeneousPoint$Mutable;
            _setSum(p1: ec.point.MutablePoint, p2: ec.point.MutablePoint, t1: security.util.math.MutableIntegerModuloP, t2: security.util.math.MutableIntegerModuloP, t3: security.util.math.MutableIntegerModuloP): ec.point.MutablePoint;
            _setSum(p1: ec.point.ExtendedHomogeneousPoint$Mutable, p2: ec.point.ExtendedHomogeneousPoint$Mutable, t1: security.util.math.MutableIntegerModuloP, t2: security.util.math.MutableIntegerModuloP, t3: security.util.math.MutableIntegerModuloP): ec.point.ExtendedHomogeneousPoint$Mutable;
            _basePoint: ec.point.ExtendedHomogeneousPoint$Immutable;
            _d: security.util.math.ImmutableIntegerModuloP;
            _sizeMinus5: java.math.BigInteger;
            _two: security.util.math.SmallValue;
          }
          interface Ed25519Operations extends CombineTypes<[_Ed25519Operations, sun.security.ec.ed.EdECOperations]> {}
          interface _Ed448Operations$$static extends ClassLike {
            _FIVE: java.math.BigInteger;
            _THREE: java.math.BigInteger;
            _TWO: java.math.BigInteger;
            new(d: security.util.math.ImmutableIntegerModuloP, baseX: java.math.BigInteger, baseY: java.math.BigInteger): Ed448Operations;
          }
          let Ed448Operations: _Ed448Operations$$static;
          interface _Ed448Operations {
            basePointMultiply(scalar: byte[]): ec.point.Point;
            decodeAffinePoint<T>(exception: java.util.function.Function<string,T>, xLSB: int, y: security.util.math.IntegerModuloP): ec.point.AffinePoint;
            _getNeutral(): ec.point.ProjectivePoint$Immutable;
            _getNeutral(): ec.point.ImmutablePoint;
            of(p: ec.point.AffinePoint): ec.point.ProjectivePoint$Immutable;
            of(a0: ec.point.AffinePoint): ec.point.ImmutablePoint;
            _setDouble(p: ec.point.MutablePoint, t1: security.util.math.MutableIntegerModuloP, t2: security.util.math.MutableIntegerModuloP): ec.point.MutablePoint;
            _setDouble(p: ec.point.ProjectivePoint$Mutable, t1: security.util.math.MutableIntegerModuloP, t2: security.util.math.MutableIntegerModuloP): ec.point.ProjectivePoint$Mutable;
            _setSum(p1: ec.point.MutablePoint, p2: ec.point.MutablePoint, t1: security.util.math.MutableIntegerModuloP, t2: security.util.math.MutableIntegerModuloP, t3: security.util.math.MutableIntegerModuloP): ec.point.MutablePoint;
            _setSum(p1: ec.point.ProjectivePoint$Mutable, p2: ec.point.ProjectivePoint$Mutable, t1: security.util.math.MutableIntegerModuloP, t2: security.util.math.MutableIntegerModuloP, t3: security.util.math.MutableIntegerModuloP): ec.point.ProjectivePoint$Mutable;
            _basePoint: ec.point.ProjectivePoint$Immutable;
            _d: security.util.math.ImmutableIntegerModuloP;
            _sizeMinus3: java.math.BigInteger;
            _two: security.util.math.SmallValue;
          }
          interface Ed448Operations extends CombineTypes<[_Ed448Operations, sun.security.ec.ed.EdECOperations]> {}
          interface _EdDSAAlgorithmParameters$$static extends ClassLike {
            new(): EdDSAAlgorithmParameters;
          }
          let EdDSAAlgorithmParameters: _EdDSAAlgorithmParameters$$static;
          interface _EdDSAAlgorithmParameters {
            _engineGetEncoded(): byte[];
            _engineGetEncoded(format: string): byte[];
            _engineGetParameterSpec<T>(paramSpec: java.lang.Class<T>): T;
            _engineInit(paramSpec: java.security.spec.AlgorithmParameterSpec): void;
            _engineInit(params: byte[]): void;
            _engineInit(params: byte[], format: string): void;
            _engineToString(): string;
            _edspec: java.security.spec.EdDSAParameterSpec;
          }
          interface EdDSAAlgorithmParameters extends CombineTypes<[_EdDSAAlgorithmParameters, java.security.AlgorithmParametersSpi]> {}
          interface _EdDSAKeyFactory$$static extends ClassLike {
            new(): EdDSAKeyFactory;
            _new(paramSpec: java.security.spec.NamedParameterSpec): EdDSAKeyFactory;
          }
          let EdDSAKeyFactory: _EdDSAKeyFactory$$static;
          interface _EdDSAKeyFactory {
            _checkLockedParams<T>(exception: java.util.function.Function<string,T>, spec: java.security.spec.NamedParameterSpec): void;
            _checkLockedParams<T>(exception: java.util.function.Function<string,T>, params: EdDSAParameters): void;
            _engineGeneratePrivate(keySpec: java.security.spec.KeySpec): java.security.PrivateKey;
            _engineGeneratePublic(keySpec: java.security.spec.KeySpec): java.security.PublicKey;
            _engineGetKeySpec<T>(key: java.security.Key, keySpec: java.lang.Class<T>): T;
            _engineTranslateKey(key: java.security.Key): java.security.Key;
            _generatePrivateImpl(keySpec: java.security.spec.KeySpec): java.security.PrivateKey;
            _generatePublicImpl(keySpec: java.security.spec.KeySpec): java.security.PublicKey;
            _lockedParams: EdDSAParameters;
          }
          interface EdDSAKeyFactory extends CombineTypes<[_EdDSAKeyFactory, java.security.KeyFactorySpi]> {}
          interface _EdDSAKeyFactory$Ed25519$$static extends ClassLike {
            new(): EdDSAKeyFactory$Ed25519;
          }
          let EdDSAKeyFactory$Ed25519: _EdDSAKeyFactory$Ed25519$$static;
          interface _EdDSAKeyFactory$Ed25519 {
          }
          interface EdDSAKeyFactory$Ed25519 extends CombineTypes<[_EdDSAKeyFactory$Ed25519, sun.security.ec.ed.EdDSAKeyFactory]> {}
          interface _EdDSAKeyFactory$Ed448$$static extends ClassLike {
            new(): EdDSAKeyFactory$Ed448;
          }
          let EdDSAKeyFactory$Ed448: _EdDSAKeyFactory$Ed448$$static;
          interface _EdDSAKeyFactory$Ed448 {
          }
          interface EdDSAKeyFactory$Ed448 extends CombineTypes<[_EdDSAKeyFactory$Ed448, sun.security.ec.ed.EdDSAKeyFactory]> {}
          interface _EdDSAKeyPairGenerator$$static extends ClassLike {
            new(): EdDSAKeyPairGenerator;
          }
          let EdDSAKeyPairGenerator: _EdDSAKeyPairGenerator$$static;
          interface _EdDSAKeyPairGenerator {
            generateKeyPair(): java.security.KeyPair;
            initialize(keySize: int, random: java.security.SecureRandom): void;
            initialize(params: java.security.spec.AlgorithmParameterSpec, random: java.security.SecureRandom): void;
            _initializeImpl(params: EdDSAParameters, random: java.security.SecureRandom): void;
            _tryInitialize(paramSpec: java.security.spec.NamedParameterSpec): void;
            _lockedParams: EdDSAParameters;
            _ops: EdDSAOperations;
            _random: java.security.SecureRandom;
          }
          interface EdDSAKeyPairGenerator extends CombineTypes<[_EdDSAKeyPairGenerator, java.security.KeyPairGeneratorSpi]> {}
          interface _EdDSAKeyPairGenerator$Ed25519$$static extends ClassLike {
            new(): EdDSAKeyPairGenerator$Ed25519;
          }
          let EdDSAKeyPairGenerator$Ed25519: _EdDSAKeyPairGenerator$Ed25519$$static;
          interface _EdDSAKeyPairGenerator$Ed25519 {
          }
          interface EdDSAKeyPairGenerator$Ed25519 extends CombineTypes<[_EdDSAKeyPairGenerator$Ed25519, sun.security.ec.ed.EdDSAKeyPairGenerator]> {}
          interface _EdDSAKeyPairGenerator$Ed448$$static extends ClassLike {
            new(): EdDSAKeyPairGenerator$Ed448;
          }
          let EdDSAKeyPairGenerator$Ed448: _EdDSAKeyPairGenerator$Ed448$$static;
          interface _EdDSAKeyPairGenerator$Ed448 {
          }
          interface EdDSAKeyPairGenerator$Ed448 extends CombineTypes<[_EdDSAKeyPairGenerator$Ed448, sun.security.ec.ed.EdDSAKeyPairGenerator]> {}
          interface _EdDSAOperations$$static extends ClassLike {
            _asEdECPoint(p: ec.point.AffinePoint): java.security.spec.EdECPoint;
            _encode(length: int, p: ec.point.Point): byte[];
            _encode(length: int, p: ec.point.AffinePoint): byte[];
            _maskHighOrder(arr: byte[], bits: int): int;
            _prune(k: byte[], bits: int, logCofactor: int): void;
            new(params: EdDSAParameters): EdDSAOperations;
          }
          let EdDSAOperations: _EdDSAOperations$$static;
          interface _EdDSAOperations {
            computePublic(privateKey: byte[]): java.security.spec.EdECPoint;
            decodeAffinePoint<T>(exception: java.util.function.Function<string,T>, arr: byte[]): ec.point.AffinePoint;
            decodeAffinePoint<T>(exception: java.util.function.Function<string,T>, point: java.security.spec.EdECPoint): ec.point.AffinePoint;
            generatePrivate(random: java.security.SecureRandom): byte[];
            getParameters(): EdDSAParameters;
            _prune(arr: byte[]): void;
            sign(sigParams: java.security.spec.EdDSAParameterSpec, privateKey: byte[], message: byte[]): byte[];
            verify(sigParams: java.security.spec.EdDSAParameterSpec, affineA: ec.point.AffinePoint, publicKey: byte[], message: byte[], signature: byte[]): boolean;
            verify(sigParams: java.security.spec.EdDSAParameterSpec, publicKey: byte[], message: byte[], signature: byte[]): boolean;
            _params: EdDSAParameters;
          }
          interface EdDSAOperations extends CombineTypes<[_EdDSAOperations, java.lang.Object]> {}
          interface _EdDSAParameters$$static extends ClassLike {
            _dom2(sigParams: java.security.spec.EdDSAParameterSpec): byte[];
            _dom4(sigParams: java.security.spec.EdDSAParameterSpec): byte[];
            _domImpl(prefixStr: string, sigParams: java.security.spec.EdDSAParameterSpec): byte[];
            get<T>(exception: java.util.function.Function<string,T>, algId: security.x509.AlgorithmId): EdDSAParameters;
            get<T>(exception: java.util.function.Function<string,T>, params: java.security.spec.AlgorithmParameterSpec): EdDSAParameters;
            getBySize<T>(exception: java.util.function.Function<string,T>, size: int): EdDSAParameters;
            _namedParams: ParametersMap<EdDSAParameters>;
            _prefixStr25519: string;
            _prefixStr448: string;
            new(name: string, oid: security.util.ObjectIdentifier, field: security.util.math.IntegerFieldModuloP, orderField: security.util.math.IntegerFieldModuloP, d: security.util.math.ImmutableIntegerModuloP, edOps: EdECOperations, digester: EdDSAParameters$DigesterFactory, dom: java.util.function.Function<java.security.spec.EdDSAParameterSpec,byte[]>, keyLength: int, bits: int, logCofactor: int): EdDSAParameters;
          }
          let EdDSAParameters: _EdDSAParameters$$static;
          interface _EdDSAParameters {
            createDigester(): EdDSAParameters$Digester;
            createDigester(len: int): EdDSAParameters$Digester;
            digest(data: byte[][]): byte[];
            digest(...data: byte[][]): byte[];
            dom(sigParams: java.security.spec.EdDSAParameterSpec): byte[];
            getBits(): int;
            getD(): security.util.math.ImmutableIntegerModuloP;
            getEdOperations(): EdECOperations;
            getField(): security.util.math.IntegerFieldModuloP;
            getKeyLength(): int;
            getLogCofactor(): int;
            getName(): string;
            getOid(): security.util.ObjectIdentifier;
            getOrderField(): security.util.math.IntegerFieldModuloP;
            _bits: int;
            _d: security.util.math.ImmutableIntegerModuloP;
            _digester: EdDSAParameters$DigesterFactory;
            _dom: java.util.function.Function<java.security.spec.EdDSAParameterSpec,byte[]>;
            _edOperations: EdECOperations;
            _field: security.util.math.IntegerFieldModuloP;
            _keyLength: int;
            _logCofactor: int;
            _name: string;
            _oid: security.util.ObjectIdentifier;
            _orderField: security.util.math.IntegerFieldModuloP;
          }
          interface EdDSAParameters extends CombineTypes<[_EdDSAParameters, java.lang.Object]> {}
          interface _EdDSAParameters$Digester$$static extends ClassLike {
          }
          let EdDSAParameters$Digester: _EdDSAParameters$Digester$$static;
          interface _EdDSAParameters$Digester {
            digest(): byte[];
            update(a0: byte): void;
            update(a0: byte[], a1: int, a2: int): void;
          }
          interface EdDSAParameters$Digester extends CombineTypes<[_EdDSAParameters$Digester, java.lang.Object]> {}
          interface _EdDSAParameters$DigesterFactory$$static extends ClassLike {
          }
          let EdDSAParameters$DigesterFactory: _EdDSAParameters$DigesterFactory$$static;
          interface _EdDSAParameters$DigesterFactory {
            createDigester(): EdDSAParameters$Digester;
(): EdDSAParameters$Digester;
            createDigester(len: int): EdDSAParameters$Digester;
            digest(data: byte[][]): byte[];
            digest(...data: byte[][]): byte[];
          }
          interface EdDSAParameters$DigesterFactory extends CombineTypes<[_EdDSAParameters$DigesterFactory, java.lang.Object]> {}
          interface _EdDSAParameters$MessageDigester$$static extends ClassLike {
          }
          let EdDSAParameters$MessageDigester: _EdDSAParameters$MessageDigester$$static;
          interface _EdDSAParameters$MessageDigester {
            digest(): byte[];
            update(data: byte): void;
            update(data: byte[], off: int, len: int): void;
            _md: java.security.MessageDigest;
          }
          interface EdDSAParameters$MessageDigester extends CombineTypes<[_EdDSAParameters$MessageDigester, sun.security.ec.ed.EdDSAParameters$Digester, java.lang.Object]> {}
          interface _EdDSAParameters$SHA512DigesterFactory$$static extends ClassLike {
          }
          let EdDSAParameters$SHA512DigesterFactory: _EdDSAParameters$SHA512DigesterFactory$$static;
          interface _EdDSAParameters$SHA512DigesterFactory {
            createDigester(): EdDSAParameters$Digester;
          }
          interface EdDSAParameters$SHA512DigesterFactory extends CombineTypes<[_EdDSAParameters$SHA512DigesterFactory, java.lang.Object, sun.security.ec.ed.EdDSAParameters$DigesterFactory]> {}
          interface _EdDSAParameters$SHAKE256Digester$$static extends ClassLike {
            _new(len: int): EdDSAParameters$SHAKE256Digester;
          }
          let EdDSAParameters$SHAKE256Digester: _EdDSAParameters$SHAKE256Digester$$static;
          interface _EdDSAParameters$SHAKE256Digester {
            digest(): byte[];
            update(data: byte): void;
            update(data: byte[], off: int, len: int): void;
            _md: security.provider.SHAKE256;
          }
          interface EdDSAParameters$SHAKE256Digester extends CombineTypes<[_EdDSAParameters$SHAKE256Digester, sun.security.ec.ed.EdDSAParameters$Digester, java.lang.Object]> {}
          interface _EdDSAParameters$SHAKE256DigesterFactory$$static extends ClassLike {
          }
          let EdDSAParameters$SHAKE256DigesterFactory: _EdDSAParameters$SHAKE256DigesterFactory$$static;
          interface _EdDSAParameters$SHAKE256DigesterFactory {
            createDigester(): EdDSAParameters$Digester;
            createDigester(len: int): EdDSAParameters$Digester;
          }
          interface EdDSAParameters$SHAKE256DigesterFactory extends CombineTypes<[_EdDSAParameters$SHAKE256DigesterFactory, java.lang.Object, sun.security.ec.ed.EdDSAParameters$DigesterFactory]> {}
          interface _EdDSAPrivateKeyImpl$$static extends ClassLike {
            _serialVersionUID: long;
            _new(params: EdDSAParameters, h: byte[]): EdDSAPrivateKeyImpl;
            _new(encoded: byte[]): EdDSAPrivateKeyImpl;
          }
          let EdDSAPrivateKeyImpl: _EdDSAPrivateKeyImpl$$static;
          interface _EdDSAPrivateKeyImpl {
            _checkLength(params: EdDSAParameters): void;
            getAlgorithm(): string;
            getBytes(): java.util.Optional<byte[]>;
            getKey(): byte[];
            getParams(): java.security.spec.NamedParameterSpec;
            _readObject(stream: java.io.ObjectInputStream): void;
            _h: byte[];
            _paramSpec: java.security.spec.NamedParameterSpec;
          }
          interface EdDSAPrivateKeyImpl extends CombineTypes<[_EdDSAPrivateKeyImpl, sun.security.pkcs.PKCS8Key, java.security.interfaces.EdECPrivateKey]> {}
          interface _EdDSAPublicKeyImpl$$static extends ClassLike {
            _reverse(arr: byte[]): void;
            _swap(arr: byte[], i: int, j: int): void;
            _serialVersionUID: long;
            new(params: EdDSAParameters, point: java.security.spec.EdECPoint): EdDSAPublicKeyImpl;
            new(encoded: byte[]): EdDSAPublicKeyImpl;
          }
          let EdDSAPublicKeyImpl: _EdDSAPublicKeyImpl$$static;
          interface _EdDSAPublicKeyImpl {
            _checkLength(params: EdDSAParameters): void;
            getAlgorithm(): string;
            getEncodedPoint(): byte[];
            getParams(): java.security.spec.NamedParameterSpec;
            getPoint(): java.security.spec.EdECPoint;
            _readObject(stream: java.io.ObjectInputStream): void;
            _writeReplace(): any;
            _paramSpec: java.security.spec.NamedParameterSpec;
            _point: java.security.spec.EdECPoint;
          }
          interface EdDSAPublicKeyImpl extends CombineTypes<[_EdDSAPublicKeyImpl, sun.security.x509.X509Key, java.security.interfaces.EdECPublicKey]> {}
          interface _EdDSASignature$$static extends ClassLike {
            _checkContextLength(edDsaParams: java.security.spec.EdDSAParameterSpec): void;
            new(): EdDSASignature;
            _new(paramSpec: java.security.spec.NamedParameterSpec): EdDSASignature;
          }
          let EdDSASignature: _EdDSASignature$$static;
          interface _EdDSASignature {
            _checkLockedParams<T>(exception: java.util.function.Function<string,T>, params: EdDSAParameters): void;
            _engineGetParameter(param: string): any;
            _engineGetParameters(): java.security.AlgorithmParameters;
            _engineInitSign(privateKey: java.security.PrivateKey): void;
            _engineInitSign(privateKey: java.security.PrivateKey, random: java.security.SecureRandom): void;
            _engineInitVerify(publicKey: java.security.PublicKey): void;
            _engineSetParameter(param: string, value: any): void;
            _engineSetParameter(params: java.security.spec.AlgorithmParameterSpec): void;
            _engineSign(): byte[];
            _engineUpdate(b: byte): void;
            _engineUpdate(b: byte[], off: int, len: int): void;
            _engineVerify(sigBytes: byte[]): boolean;
            _ensureMessageInit(): void;
            _initImpl(params: EdDSAParameters): void;
            _initImpl(paramSpec: java.security.spec.NamedParameterSpec): void;
            _initMessage(): void;
            _lockedParams: EdDSAParameters;
            _message: EdDSASignature$MessageAccumulator;
            _ops: EdDSAOperations;
            _privateKey: byte[];
            _publicKeyBytes: byte[];
            _publicKeyPoint: ec.point.AffinePoint;
            _sigParams: java.security.spec.EdDSAParameterSpec;
          }
          interface EdDSASignature extends CombineTypes<[_EdDSASignature, java.security.SignatureSpi]> {}
          interface _EdDSASignature$DigestAccumulator$$static extends ClassLike {
            _new(digester: EdDSAParameters$Digester): EdDSASignature$DigestAccumulator;
          }
          let EdDSASignature$DigestAccumulator: _EdDSASignature$DigestAccumulator$$static;
          interface _EdDSASignature$DigestAccumulator {
            add(b: byte): void;
            add(data: byte[], off: int, len: int): void;
            getMessage(): byte[];
            _digester: EdDSAParameters$Digester;
          }
          interface EdDSASignature$DigestAccumulator extends CombineTypes<[_EdDSASignature$DigestAccumulator, java.lang.Object, sun.security.ec.ed.EdDSASignature$MessageAccumulator]> {}
          interface _EdDSASignature$Ed25519$$static extends ClassLike {
            new(): EdDSASignature$Ed25519;
          }
          let EdDSASignature$Ed25519: _EdDSASignature$Ed25519$$static;
          interface _EdDSASignature$Ed25519 {
          }
          interface EdDSASignature$Ed25519 extends CombineTypes<[_EdDSASignature$Ed25519, sun.security.ec.ed.EdDSASignature]> {}
          interface _EdDSASignature$Ed448$$static extends ClassLike {
            new(): EdDSASignature$Ed448;
          }
          let EdDSASignature$Ed448: _EdDSASignature$Ed448$$static;
          interface _EdDSASignature$Ed448 {
          }
          interface EdDSASignature$Ed448 extends CombineTypes<[_EdDSASignature$Ed448, sun.security.ec.ed.EdDSASignature]> {}
          interface _EdDSASignature$MemoryAccumulator$$static extends ClassLike {
          }
          let EdDSASignature$MemoryAccumulator: _EdDSASignature$MemoryAccumulator$$static;
          interface _EdDSASignature$MemoryAccumulator {
            add(b: byte): void;
            add(data: byte[], off: int, len: int): void;
            getMessage(): byte[];
            _message: java.io.ByteArrayOutputStream;
          }
          interface EdDSASignature$MemoryAccumulator extends CombineTypes<[_EdDSASignature$MemoryAccumulator, java.lang.Object, sun.security.ec.ed.EdDSASignature$MessageAccumulator]> {}
          interface _EdDSASignature$MessageAccumulator$$static extends ClassLike {
          }
          let EdDSASignature$MessageAccumulator: _EdDSASignature$MessageAccumulator$$static;
          interface _EdDSASignature$MessageAccumulator {
            add(a0: byte): void;
            add(a0: byte[], a1: int, a2: int): void;
            getMessage(): byte[];
          }
          interface EdDSASignature$MessageAccumulator extends CombineTypes<[_EdDSASignature$MessageAccumulator, java.lang.Object]> {}
          interface _EdECOperations$$static extends ClassLike {
            _bitAt(arr: byte[], index: int): int;
            new(): EdECOperations;
          }
          let EdECOperations: _EdECOperations$$static;
          interface _EdECOperations {
            basePointMultiply(a0: byte[]): ec.point.Point;
            decodeAffinePoint<T>(a0: java.util.function.Function<string,T>, a1: int, a2: security.util.math.IntegerModuloP): ec.point.AffinePoint;
            _getNeutral(): ec.point.ImmutablePoint;
            of(a0: ec.point.AffinePoint): ec.point.ImmutablePoint;
            _setDouble(a0: ec.point.MutablePoint, a1: security.util.math.MutableIntegerModuloP, a2: security.util.math.MutableIntegerModuloP): ec.point.MutablePoint;
            setProduct(p1: ec.point.MutablePoint, s: byte[]): ec.point.MutablePoint;
            setSum(p1: ec.point.MutablePoint, p2: ec.point.MutablePoint): ec.point.MutablePoint;
            _setSum(a0: ec.point.MutablePoint, a1: ec.point.MutablePoint, a2: security.util.math.MutableIntegerModuloP, a3: security.util.math.MutableIntegerModuloP, a4: security.util.math.MutableIntegerModuloP): ec.point.MutablePoint;
          }
          interface EdECOperations extends CombineTypes<[_EdECOperations, java.lang.Object]> {}
        }
        module point {
          interface _AffinePoint$$static extends ClassLike {
            fromECPoint(ecPoint: java.security.spec.ECPoint, field: security.util.math.IntegerFieldModuloP): AffinePoint;
            new(x: security.util.math.ImmutableIntegerModuloP, y: security.util.math.ImmutableIntegerModuloP): AffinePoint;
          }
          let AffinePoint: _AffinePoint$$static;
          interface _AffinePoint {
            equals(obj: any): boolean;
            getX(): security.util.math.ImmutableIntegerModuloP;
            getY(): security.util.math.ImmutableIntegerModuloP;
            hashCode(): int;
            toECPoint(): java.security.spec.ECPoint;
            toString(): string;
            _x: security.util.math.ImmutableIntegerModuloP;
            _y: security.util.math.ImmutableIntegerModuloP;
          }
          interface AffinePoint extends CombineTypes<[_AffinePoint, java.lang.Object]> {}
          interface _ExtendedHomogeneousPoint$$static<T> extends ClassLike {
            _affineEquals<T1, T2>(p1: ExtendedHomogeneousPoint<T1>, p2: ExtendedHomogeneousPoint<T2>): boolean;
            _new(x: T, y: T, t: T, z: T): ExtendedHomogeneousPoint<T>;
          }
          let ExtendedHomogeneousPoint: _ExtendedHomogeneousPoint$$static<T>;
          interface _ExtendedHomogeneousPoint<T> {
            affineEquals(p: Point): boolean;
            asAffine(): AffinePoint;
            fixed(): ExtendedHomogeneousPoint$Immutable;
            fixed(): ImmutablePoint;
            getField(): security.util.math.IntegerFieldModuloP;
            getT(): T;
            getX(): T;
            getY(): T;
            getZ(): T;
            mutable(): ExtendedHomogeneousPoint$Mutable;
            mutable(): MutablePoint;
            _t: T;
            _x: T;
            _y: T;
            _z: T;
          }
          interface ExtendedHomogeneousPoint<T> extends CombineTypes<[_ExtendedHomogeneousPoint<T>, java.lang.Object, Point]> {}
          interface _ExtendedHomogeneousPoint$Immutable$$static extends ClassLike {
            new(x: security.util.math.ImmutableIntegerModuloP, y: security.util.math.ImmutableIntegerModuloP, t: security.util.math.ImmutableIntegerModuloP, z: security.util.math.ImmutableIntegerModuloP): ExtendedHomogeneousPoint$Immutable;
          }
          let ExtendedHomogeneousPoint$Immutable: _ExtendedHomogeneousPoint$Immutable$$static;
          interface _ExtendedHomogeneousPoint$Immutable {
            fixed(): ImmutablePoint;
            mutable(): MutablePoint;
          }
          interface ExtendedHomogeneousPoint$Immutable extends CombineTypes<[_ExtendedHomogeneousPoint$Immutable, ImmutablePoint, ExtendedHomogeneousPoint<security.util.math.ImmutableIntegerModuloP>]> {}
          interface _ExtendedHomogeneousPoint$Mutable$$static extends ClassLike {
            new(x: security.util.math.MutableIntegerModuloP, y: security.util.math.MutableIntegerModuloP, t: security.util.math.MutableIntegerModuloP, z: security.util.math.MutableIntegerModuloP): ExtendedHomogeneousPoint$Mutable;
          }
          let ExtendedHomogeneousPoint$Mutable: _ExtendedHomogeneousPoint$Mutable$$static;
          interface _ExtendedHomogeneousPoint$Mutable {
            conditionalSet(p: Point, set: int): ExtendedHomogeneousPoint$Mutable;
            _conditionalSet<T>(ehp: ExtendedHomogeneousPoint<T>, set: int): ExtendedHomogeneousPoint$Mutable;
            conditionalSet(a0: Point, a1: int): MutablePoint;
            fixed(): ImmutablePoint;
            mutable(): MutablePoint;
            setValue(p: AffinePoint): ExtendedHomogeneousPoint$Mutable;
            setValue(p: Point): ExtendedHomogeneousPoint$Mutable;
            _setValue<T>(ehp: ExtendedHomogeneousPoint<T>): ExtendedHomogeneousPoint$Mutable;
            setValue(a0: Point): MutablePoint;
            setValue(a0: AffinePoint): MutablePoint;
          }
          interface ExtendedHomogeneousPoint$Mutable extends CombineTypes<[_ExtendedHomogeneousPoint$Mutable, ExtendedHomogeneousPoint<security.util.math.MutableIntegerModuloP>, MutablePoint]> {}
          interface _ImmutablePoint$$static extends ClassLike {
          }
          let ImmutablePoint: _ImmutablePoint$$static;
          interface _ImmutablePoint {
          }
          interface ImmutablePoint extends CombineTypes<[_ImmutablePoint, sun.security.ec.point.Point, java.lang.Object]> {}
          interface _MutablePoint$$static extends ClassLike {
          }
          let MutablePoint: _MutablePoint$$static;
          interface _MutablePoint {
            conditionalSet(a0: Point, a1: int): MutablePoint;
            setValue(a0: AffinePoint): MutablePoint;
            setValue(a0: Point): MutablePoint;
          }
          interface MutablePoint extends CombineTypes<[_MutablePoint, sun.security.ec.point.Point, java.lang.Object]> {}
          interface _Point$$static extends ClassLike {
          }
          let Point: _Point$$static;
          interface _Point {
            affineEquals(a0: Point): boolean;
            asAffine(): AffinePoint;
            fixed(): ImmutablePoint;
            getField(): security.util.math.IntegerFieldModuloP;
            mutable(): MutablePoint;
          }
          interface Point extends CombineTypes<[_Point, java.lang.Object]> {}
          interface _ProjectivePoint$$static<T> extends ClassLike {
            _affineEquals<T1, T2>(p1: ProjectivePoint<T1>, p2: ProjectivePoint<T2>): boolean;
            _new(x: T, y: T, z: T): ProjectivePoint<T>;
          }
          let ProjectivePoint: _ProjectivePoint$$static<T>;
          interface _ProjectivePoint<T> {
            affineEquals(p: Point): boolean;
            asAffine(): AffinePoint;
            fixed(): ProjectivePoint$Immutable;
            fixed(): ImmutablePoint;
            getField(): security.util.math.IntegerFieldModuloP;
            getX(): T;
            getY(): T;
            getZ(): T;
            mutable(): ProjectivePoint$Mutable;
            mutable(): MutablePoint;
            _x: T;
            _y: T;
            _z: T;
          }
          interface ProjectivePoint<T> extends CombineTypes<[_ProjectivePoint<T>, java.lang.Object, Point]> {}
          interface _ProjectivePoint$Immutable$$static extends ClassLike {
            new(x: security.util.math.ImmutableIntegerModuloP, y: security.util.math.ImmutableIntegerModuloP, z: security.util.math.ImmutableIntegerModuloP): ProjectivePoint$Immutable;
          }
          let ProjectivePoint$Immutable: _ProjectivePoint$Immutable$$static;
          interface _ProjectivePoint$Immutable {
            fixed(): ImmutablePoint;
            mutable(): MutablePoint;
          }
          interface ProjectivePoint$Immutable extends CombineTypes<[_ProjectivePoint$Immutable, ImmutablePoint, ProjectivePoint<security.util.math.ImmutableIntegerModuloP>]> {}
          interface _ProjectivePoint$Mutable$$static extends ClassLike {
            new(x: security.util.math.MutableIntegerModuloP, y: security.util.math.MutableIntegerModuloP, z: security.util.math.MutableIntegerModuloP): ProjectivePoint$Mutable;
            new(field: security.util.math.IntegerFieldModuloP): ProjectivePoint$Mutable;
          }
          let ProjectivePoint$Mutable: _ProjectivePoint$Mutable$$static;
          interface _ProjectivePoint$Mutable {
            conditionalSet(p: Point, set: int): ProjectivePoint$Mutable;
            _conditionalSet<T>(pp: ProjectivePoint<T>, set: int): ProjectivePoint$Mutable;
            conditionalSet(a0: Point, a1: int): MutablePoint;
            fixed(): ImmutablePoint;
            mutable(): MutablePoint;
            setValue(p: AffinePoint): ProjectivePoint$Mutable;
            setValue(p: Point): ProjectivePoint$Mutable;
            _setValue<T>(pp: ProjectivePoint<T>): ProjectivePoint$Mutable;
            setValue(a0: Point): MutablePoint;
            setValue(a0: AffinePoint): MutablePoint;
          }
          interface ProjectivePoint$Mutable extends CombineTypes<[_ProjectivePoint$Mutable, ProjectivePoint<security.util.math.MutableIntegerModuloP>, MutablePoint]> {}
        }
        interface _ECDHKeyAgreement$$static extends ClassLike {
          _deriveKeyImpl(priv: java.security.interfaces.ECPrivateKey, ops: ECOperations, pubKey: java.security.interfaces.ECPublicKey): byte[];
          _validate(ops: ECOperations, key: java.security.interfaces.ECPublicKey): void;
          _validateCoordinate(c: java.math.BigInteger, mod: java.math.BigInteger): void;
          new(): ECDHKeyAgreement;
        }
        let ECDHKeyAgreement: _ECDHKeyAgreement$$static;
        interface _ECDHKeyAgreement {
          _engineDoPhase(key: java.security.Key, lastPhase: boolean): java.security.Key;
          _engineGenerateSecret(): byte[];
          _engineGenerateSecret(sharedSecret: byte[], offset: int): int;
          _engineGenerateSecret(algorithm: string): javax.crypto.SecretKey;
          _engineInit(key: java.security.Key, random: java.security.SecureRandom): void;
          _engineInit(key: java.security.Key, params: java.security.spec.AlgorithmParameterSpec, random: java.security.SecureRandom): void;
          _init(key: java.security.Key): void;
          _privateKey: java.security.interfaces.ECPrivateKey;
          _privateKeyOps: ECOperations;
          _publicKey: java.security.interfaces.ECPublicKey;
          _secretLen: int;
        }
        interface ECDHKeyAgreement extends CombineTypes<[_ECDHKeyAgreement, javax.crypto.KeyAgreementSpi]> {}
        interface _ECDSAOperations$$static extends ClassLike {
          b2a(b: security.util.math.IntegerModuloP, orderField: security.util.math.IntegerFieldModuloP, temp1: byte[]): security.util.math.ImmutableIntegerModuloP;
          forParameters(ecParams: java.security.spec.ECParameterSpec): java.util.Optional<ECDSAOperations>;
          toAffinePoint(point: java.security.spec.ECPoint, field: security.util.math.IntegerFieldModuloP): ec.point.AffinePoint;
          new(ecOps: ECOperations, basePoint: java.security.spec.ECPoint): ECDSAOperations;
        }
        let ECDSAOperations: _ECDSAOperations$$static;
        interface _ECDSAOperations {
          basePointMultiply(scalar: byte[]): ec.point.AffinePoint;
          getEcOperations(): ECOperations;
          signDigest(privateKey: byte[], digest: byte[], seed: ECDSAOperations$Seed): byte[];
          signDigest(privateKey: byte[], digest: byte[], nonce: ECDSAOperations$Nonce): byte[];
          verifySignedDigest(digest: byte[], sig: byte[], pp: java.security.spec.ECPoint): boolean;
          _basePoint: point.AffinePoint;
          _ecOps: ECOperations;
        }
        interface ECDSAOperations extends CombineTypes<[_ECDSAOperations, java.lang.Object]> {}
        interface _ECDSAOperations$Nonce$$static extends ClassLike {
          new(nonceValue: byte[]): ECDSAOperations$Nonce;
        }
        let ECDSAOperations$Nonce: _ECDSAOperations$Nonce$$static;
        interface _ECDSAOperations$Nonce {
          getNonceValue(): byte[];
          _nonceValue: byte[];
        }
        interface ECDSAOperations$Nonce extends CombineTypes<[_ECDSAOperations$Nonce, java.lang.Object]> {}
        interface _ECDSAOperations$Seed$$static extends ClassLike {
          new(seedValue: byte[]): ECDSAOperations$Seed;
        }
        let ECDSAOperations$Seed: _ECDSAOperations$Seed$$static;
        interface _ECDSAOperations$Seed {
          getSeedValue(): byte[];
          _seedValue: byte[];
        }
        interface ECDSAOperations$Seed extends CombineTypes<[_ECDSAOperations$Seed, java.lang.Object]> {}
        interface _ECDSASignature$$static extends ClassLike {
          _new(): ECDSASignature;
          _new(p1363Format: boolean): ECDSASignature;
          _new(digestName: string): ECDSASignature;
          _new(digestName: string, p1363Format: boolean): ECDSASignature;
        }
        let ECDSASignature: _ECDSASignature$$static;
        interface _ECDSASignature {
          _engineGetParameter(param: string): any;
          _engineGetParameters(): java.security.AlgorithmParameters;
          _engineInitSign(privateKey: java.security.PrivateKey): void;
          _engineInitSign(privateKey: java.security.PrivateKey, random: java.security.SecureRandom): void;
          _engineInitVerify(publicKey: java.security.PublicKey): void;
          _engineSetParameter(param: string, value: any): void;
          _engineSetParameter(params: java.security.spec.AlgorithmParameterSpec): void;
          _engineSign(): byte[];
          _engineUpdate(b: byte): void;
          _engineUpdate(b: byte[], off: int, len: int): void;
          _engineUpdate(byteBuffer: java.nio.ByteBuffer): void;
          _engineVerify(signature: byte[]): boolean;
          _getDigestValue(): byte[];
          _resetDigest(): void;
          _signDigestImpl(ops: ECDSAOperations, seedBits: int, digest: byte[], priv: java.security.interfaces.ECPrivateKey, random: java.security.SecureRandom): byte[];
          _messageDigest: java.security.MessageDigest;
          _needsReset: boolean;
          _p1363Format: boolean;
          _privateKey: java.security.interfaces.ECPrivateKey;
          _publicKey: java.security.interfaces.ECPublicKey;
          _random: java.security.SecureRandom;
        }
        interface ECDSASignature extends CombineTypes<[_ECDSASignature, java.security.SignatureSpi]> {}
        interface _ECDSASignature$Raw$$static extends ClassLike {
          new(): ECDSASignature$Raw;
        }
        let ECDSASignature$Raw: _ECDSASignature$Raw$$static;
        interface _ECDSASignature$Raw {
        }
        interface ECDSASignature$Raw extends CombineTypes<[_ECDSASignature$Raw, sun.security.ec.ECDSASignature$RawECDSA]> {}
        interface _ECDSASignature$RawECDSA$$static extends ClassLike {
          _RAW_ECDSA_MAX: int;
          _new(p1363Format: boolean): ECDSASignature$RawECDSA;
        }
        let ECDSASignature$RawECDSA: _ECDSASignature$RawECDSA$$static;
        interface _ECDSASignature$RawECDSA {
          _engineUpdate(b: byte): void;
          _engineUpdate(b: byte[], off: int, len: int): void;
          _engineUpdate(byteBuffer: java.nio.ByteBuffer): void;
          _getDigestValue(): byte[];
          _resetDigest(): void;
          _offset: int;
          _precomputedDigest: byte[];
        }
        interface ECDSASignature$RawECDSA extends CombineTypes<[_ECDSASignature$RawECDSA, sun.security.ec.ECDSASignature]> {}
        interface _ECDSASignature$RawinP1363Format$$static extends ClassLike {
          new(): ECDSASignature$RawinP1363Format;
        }
        let ECDSASignature$RawinP1363Format: _ECDSASignature$RawinP1363Format$$static;
        interface _ECDSASignature$RawinP1363Format {
        }
        interface ECDSASignature$RawinP1363Format extends CombineTypes<[_ECDSASignature$RawinP1363Format, sun.security.ec.ECDSASignature$RawECDSA]> {}
        interface _ECDSASignature$SHA1$$static extends ClassLike {
          new(): ECDSASignature$SHA1;
        }
        let ECDSASignature$SHA1: _ECDSASignature$SHA1$$static;
        interface _ECDSASignature$SHA1 {
        }
        interface ECDSASignature$SHA1 extends CombineTypes<[_ECDSASignature$SHA1, sun.security.ec.ECDSASignature]> {}
        interface _ECDSASignature$SHA1inP1363Format$$static extends ClassLike {
          new(): ECDSASignature$SHA1inP1363Format;
        }
        let ECDSASignature$SHA1inP1363Format: _ECDSASignature$SHA1inP1363Format$$static;
        interface _ECDSASignature$SHA1inP1363Format {
        }
        interface ECDSASignature$SHA1inP1363Format extends CombineTypes<[_ECDSASignature$SHA1inP1363Format, sun.security.ec.ECDSASignature]> {}
        interface _ECDSASignature$SHA224$$static extends ClassLike {
          new(): ECDSASignature$SHA224;
        }
        let ECDSASignature$SHA224: _ECDSASignature$SHA224$$static;
        interface _ECDSASignature$SHA224 {
        }
        interface ECDSASignature$SHA224 extends CombineTypes<[_ECDSASignature$SHA224, sun.security.ec.ECDSASignature]> {}
        interface _ECDSASignature$SHA224inP1363Format$$static extends ClassLike {
          new(): ECDSASignature$SHA224inP1363Format;
        }
        let ECDSASignature$SHA224inP1363Format: _ECDSASignature$SHA224inP1363Format$$static;
        interface _ECDSASignature$SHA224inP1363Format {
        }
        interface ECDSASignature$SHA224inP1363Format extends CombineTypes<[_ECDSASignature$SHA224inP1363Format, sun.security.ec.ECDSASignature]> {}
        interface _ECDSASignature$SHA256$$static extends ClassLike {
          new(): ECDSASignature$SHA256;
        }
        let ECDSASignature$SHA256: _ECDSASignature$SHA256$$static;
        interface _ECDSASignature$SHA256 {
        }
        interface ECDSASignature$SHA256 extends CombineTypes<[_ECDSASignature$SHA256, sun.security.ec.ECDSASignature]> {}
        interface _ECDSASignature$SHA256inP1363Format$$static extends ClassLike {
          new(): ECDSASignature$SHA256inP1363Format;
        }
        let ECDSASignature$SHA256inP1363Format: _ECDSASignature$SHA256inP1363Format$$static;
        interface _ECDSASignature$SHA256inP1363Format {
        }
        interface ECDSASignature$SHA256inP1363Format extends CombineTypes<[_ECDSASignature$SHA256inP1363Format, sun.security.ec.ECDSASignature]> {}
        interface _ECDSASignature$SHA384$$static extends ClassLike {
          new(): ECDSASignature$SHA384;
        }
        let ECDSASignature$SHA384: _ECDSASignature$SHA384$$static;
        interface _ECDSASignature$SHA384 {
        }
        interface ECDSASignature$SHA384 extends CombineTypes<[_ECDSASignature$SHA384, sun.security.ec.ECDSASignature]> {}
        interface _ECDSASignature$SHA384inP1363Format$$static extends ClassLike {
          new(): ECDSASignature$SHA384inP1363Format;
        }
        let ECDSASignature$SHA384inP1363Format: _ECDSASignature$SHA384inP1363Format$$static;
        interface _ECDSASignature$SHA384inP1363Format {
        }
        interface ECDSASignature$SHA384inP1363Format extends CombineTypes<[_ECDSASignature$SHA384inP1363Format, sun.security.ec.ECDSASignature]> {}
        interface _ECDSASignature$SHA3_224$$static extends ClassLike {
          new(): ECDSASignature$SHA3_224;
        }
        let ECDSASignature$SHA3_224: _ECDSASignature$SHA3_224$$static;
        interface _ECDSASignature$SHA3_224 {
        }
        interface ECDSASignature$SHA3_224 extends CombineTypes<[_ECDSASignature$SHA3_224, sun.security.ec.ECDSASignature]> {}
        interface _ECDSASignature$SHA3_224inP1363Format$$static extends ClassLike {
          new(): ECDSASignature$SHA3_224inP1363Format;
        }
        let ECDSASignature$SHA3_224inP1363Format: _ECDSASignature$SHA3_224inP1363Format$$static;
        interface _ECDSASignature$SHA3_224inP1363Format {
        }
        interface ECDSASignature$SHA3_224inP1363Format extends CombineTypes<[_ECDSASignature$SHA3_224inP1363Format, sun.security.ec.ECDSASignature]> {}
        interface _ECDSASignature$SHA3_256$$static extends ClassLike {
          new(): ECDSASignature$SHA3_256;
        }
        let ECDSASignature$SHA3_256: _ECDSASignature$SHA3_256$$static;
        interface _ECDSASignature$SHA3_256 {
        }
        interface ECDSASignature$SHA3_256 extends CombineTypes<[_ECDSASignature$SHA3_256, sun.security.ec.ECDSASignature]> {}
        interface _ECDSASignature$SHA3_256inP1363Format$$static extends ClassLike {
          new(): ECDSASignature$SHA3_256inP1363Format;
        }
        let ECDSASignature$SHA3_256inP1363Format: _ECDSASignature$SHA3_256inP1363Format$$static;
        interface _ECDSASignature$SHA3_256inP1363Format {
        }
        interface ECDSASignature$SHA3_256inP1363Format extends CombineTypes<[_ECDSASignature$SHA3_256inP1363Format, sun.security.ec.ECDSASignature]> {}
        interface _ECDSASignature$SHA3_384$$static extends ClassLike {
          new(): ECDSASignature$SHA3_384;
        }
        let ECDSASignature$SHA3_384: _ECDSASignature$SHA3_384$$static;
        interface _ECDSASignature$SHA3_384 {
        }
        interface ECDSASignature$SHA3_384 extends CombineTypes<[_ECDSASignature$SHA3_384, sun.security.ec.ECDSASignature]> {}
        interface _ECDSASignature$SHA3_384inP1363Format$$static extends ClassLike {
          new(): ECDSASignature$SHA3_384inP1363Format;
        }
        let ECDSASignature$SHA3_384inP1363Format: _ECDSASignature$SHA3_384inP1363Format$$static;
        interface _ECDSASignature$SHA3_384inP1363Format {
        }
        interface ECDSASignature$SHA3_384inP1363Format extends CombineTypes<[_ECDSASignature$SHA3_384inP1363Format, sun.security.ec.ECDSASignature]> {}
        interface _ECDSASignature$SHA3_512$$static extends ClassLike {
          new(): ECDSASignature$SHA3_512;
        }
        let ECDSASignature$SHA3_512: _ECDSASignature$SHA3_512$$static;
        interface _ECDSASignature$SHA3_512 {
        }
        interface ECDSASignature$SHA3_512 extends CombineTypes<[_ECDSASignature$SHA3_512, sun.security.ec.ECDSASignature]> {}
        interface _ECDSASignature$SHA3_512inP1363Format$$static extends ClassLike {
          new(): ECDSASignature$SHA3_512inP1363Format;
        }
        let ECDSASignature$SHA3_512inP1363Format: _ECDSASignature$SHA3_512inP1363Format$$static;
        interface _ECDSASignature$SHA3_512inP1363Format {
        }
        interface ECDSASignature$SHA3_512inP1363Format extends CombineTypes<[_ECDSASignature$SHA3_512inP1363Format, sun.security.ec.ECDSASignature]> {}
        interface _ECDSASignature$SHA512$$static extends ClassLike {
          new(): ECDSASignature$SHA512;
        }
        let ECDSASignature$SHA512: _ECDSASignature$SHA512$$static;
        interface _ECDSASignature$SHA512 {
        }
        interface ECDSASignature$SHA512 extends CombineTypes<[_ECDSASignature$SHA512, sun.security.ec.ECDSASignature]> {}
        interface _ECDSASignature$SHA512inP1363Format$$static extends ClassLike {
          new(): ECDSASignature$SHA512inP1363Format;
        }
        let ECDSASignature$SHA512inP1363Format: _ECDSASignature$SHA512inP1363Format$$static;
        interface _ECDSASignature$SHA512inP1363Format {
        }
        interface ECDSASignature$SHA512inP1363Format extends CombineTypes<[_ECDSASignature$SHA512inP1363Format, sun.security.ec.ECDSASignature]> {}
        interface _ECKeyFactory$$static extends ClassLike {
          _checkKey(key: java.security.interfaces.ECKey): void;
          _getInstance(): java.security.KeyFactory;
          toECKey(key: java.security.Key): java.security.interfaces.ECKey;
          _instance: java.security.KeyFactory;
          new(): ECKeyFactory;
        }
        let ECKeyFactory: _ECKeyFactory$$static;
        interface _ECKeyFactory {
          _engineGeneratePrivate(keySpec: java.security.spec.KeySpec): java.security.PrivateKey;
          _engineGeneratePublic(keySpec: java.security.spec.KeySpec): java.security.PublicKey;
          _engineGetKeySpec<T>(key: java.security.Key, keySpec: java.lang.Class<T>): T;
          _engineTranslateKey(key: java.security.Key): java.security.Key;
          _implGeneratePrivate(keySpec: java.security.spec.KeySpec): java.security.PrivateKey;
          _implGeneratePublic(keySpec: java.security.spec.KeySpec): java.security.PublicKey;
          _implTranslatePrivateKey(key: java.security.PrivateKey): java.security.PrivateKey;
          _implTranslatePublicKey(key: java.security.PublicKey): java.security.PublicKey;
        }
        interface ECKeyFactory extends CombineTypes<[_ECKeyFactory, java.security.KeyFactorySpi]> {}
        interface _ECKeyPairGenerator$$static extends ClassLike {
          _ensureCurveIsSupported(ecSpec: java.security.spec.ECParameterSpec): void;
          _KEY_SIZE_MAX: int;
          _KEY_SIZE_MIN: int;
          new(): ECKeyPairGenerator;
        }
        let ECKeyPairGenerator: _ECKeyPairGenerator$$static;
        interface _ECKeyPairGenerator {
          _checkKeySize(keySize: int): void;
          generateKeyPair(): java.security.KeyPair;
          _generateKeyPairImpl(random: java.security.SecureRandom): java.util.Optional<java.security.KeyPair>;
          _generatePrivateScalar(random: java.security.SecureRandom, ecOps: ECOperations, seedSize: int): byte[];
          initialize(keySize: int, random: java.security.SecureRandom): void;
          initialize(params: java.security.spec.AlgorithmParameterSpec, random: java.security.SecureRandom): void;
          _keySize: int;
          _params: java.security.spec.AlgorithmParameterSpec;
          _random: java.security.SecureRandom;
        }
        interface ECKeyPairGenerator extends CombineTypes<[_ECKeyPairGenerator, java.security.KeyPairGeneratorSpi]> {}
        interface _ECOperations$$static extends ClassLike {
          allZero(arr: byte[]): boolean;
          forParameters(params: java.security.spec.ECParameterSpec): java.util.Optional<ECOperations>;
          _fields: java.util.Map<java.math.BigInteger,security.util.math.IntegerFieldModuloP>;
          _orderFields: java.util.Map<java.math.BigInteger,security.util.math.IntegerFieldModuloP>;
          _secp256r1Ops: ECOperations;
          new(b: security.util.math.IntegerModuloP, orderField: security.util.math.IntegerFieldModuloP): ECOperations;
        }
        let ECOperations: _ECOperations$$static;
        interface _ECOperations {
          checkOrder(point: java.security.spec.ECPoint): boolean;
          getField(): security.util.math.IntegerFieldModuloP;
          _getNeutral(): ec.point.ProjectivePoint$Immutable;
          getOrderField(): security.util.math.IntegerFieldModuloP;
          isNeutral(p: ec.point.Point): boolean;
          multiply(affineP: ec.point.AffinePoint, s: byte[]): ec.point.MutablePoint;
          multiply(ecPoint: java.security.spec.ECPoint, s: byte[]): ec.point.MutablePoint;
          _seedToScalar(seedBytes: byte[]): byte[];
          _setDouble(p: ec.point.ProjectivePoint$Mutable, t0: security.util.math.MutableIntegerModuloP, t1: security.util.math.MutableIntegerModuloP, t2: security.util.math.MutableIntegerModuloP, t3: security.util.math.MutableIntegerModuloP, t4: security.util.math.MutableIntegerModuloP): void;
          setSum(p: ec.point.MutablePoint, p2: ec.point.AffinePoint): void;
          _setSum(p: ec.point.ProjectivePoint$Mutable, p2: ec.point.AffinePoint, t0: security.util.math.MutableIntegerModuloP, t1: security.util.math.MutableIntegerModuloP, t2: security.util.math.MutableIntegerModuloP, t3: security.util.math.MutableIntegerModuloP, t4: security.util.math.MutableIntegerModuloP): void;
          _setSum(p: ec.point.ProjectivePoint$Mutable, p2: ec.point.ProjectivePoint$Mutable, t0: security.util.math.MutableIntegerModuloP, t1: security.util.math.MutableIntegerModuloP, t2: security.util.math.MutableIntegerModuloP, t3: security.util.math.MutableIntegerModuloP, t4: security.util.math.MutableIntegerModuloP): void;
          _b: security.util.math.ImmutableIntegerModuloP;
          _four: security.util.math.SmallValue;
          _neutral: point.ProjectivePoint$Immutable;
          _one: security.util.math.SmallValue;
          _orderField: security.util.math.IntegerFieldModuloP;
          _three: security.util.math.SmallValue;
          _two: security.util.math.SmallValue;
        }
        interface ECOperations extends CombineTypes<[_ECOperations, java.lang.Object]> {}
        interface _ECOperations$IntermediateValueException$$static extends ClassLike {
          _serialVersionUID: long;
          _new(): ECOperations$IntermediateValueException;
        }
        let ECOperations$IntermediateValueException: _ECOperations$IntermediateValueException$$static;
        interface _ECOperations$IntermediateValueException {
        }
        interface ECOperations$IntermediateValueException extends CombineTypes<[_ECOperations$IntermediateValueException, java.lang.Exception]> {}
        interface _ECOperations$PointMultiplier$$static extends ClassLike {
          _lookup(ips: ec.point.ProjectivePoint$Immutable[], index: int, result: ec.point.ProjectivePoint$Mutable): void;
          of(ecOps: ECOperations, affPoint: ec.point.AffinePoint): ECOperations$PointMultiplier;
          of(ecOps: ECOperations, ecPoint: java.security.spec.ECPoint): ECOperations$PointMultiplier;
          readonly multipliers: java.util.Map<java.security.spec.ECPoint,ECOperations$PointMultiplier>;
        }
        let ECOperations$PointMultiplier: _ECOperations$PointMultiplier$$static;
        interface _ECOperations$PointMultiplier {
          pointMultiply(a0: byte[]): ec.point.ProjectivePoint$Mutable;
(a0: byte[]): ec.point.ProjectivePoint$Mutable;
        }
        interface ECOperations$PointMultiplier extends CombineTypes<[_ECOperations$PointMultiplier, java.lang.Object]> {}
        interface _ECOperations$PointMultiplier$Default$$static extends ClassLike {
        }
        let ECOperations$PointMultiplier$Default: _ECOperations$PointMultiplier$Default$$static;
        interface _ECOperations$PointMultiplier$Default {
          _double4(p: ec.point.ProjectivePoint$Mutable, t0: security.util.math.MutableIntegerModuloP, t1: security.util.math.MutableIntegerModuloP, t2: security.util.math.MutableIntegerModuloP, t3: security.util.math.MutableIntegerModuloP, t4: security.util.math.MutableIntegerModuloP): void;
          pointMultiply(s: byte[]): ec.point.ProjectivePoint$Mutable;
          _affineP: point.AffinePoint;
          _ecOps: ECOperations;
        }
        interface ECOperations$PointMultiplier$Default extends CombineTypes<[_ECOperations$PointMultiplier$Default, sun.security.ec.ECOperations$PointMultiplier, java.lang.Object]> {}
        interface _ECOperations$PointMultiplier$Secp256R1GeneratorMultiplier$$static extends ClassLike {
          _bit(k: byte[], i: int): int;
          _generator: java.security.spec.ECPoint;
          _multiplier: ECOperations$PointMultiplier;
          _one: security.util.math.ImmutableIntegerModuloP;
          _zero: security.util.math.ImmutableIntegerModuloP;
          new(): ECOperations$PointMultiplier$Secp256R1GeneratorMultiplier;
        }
        let ECOperations$PointMultiplier$Secp256R1GeneratorMultiplier: _ECOperations$PointMultiplier$Secp256R1GeneratorMultiplier$$static;
        interface _ECOperations$PointMultiplier$Secp256R1GeneratorMultiplier {
          pointMultiply(s: byte[]): ec.point.ProjectivePoint$Mutable;
        }
        interface ECOperations$PointMultiplier$Secp256R1GeneratorMultiplier extends CombineTypes<[_ECOperations$PointMultiplier$Secp256R1GeneratorMultiplier, sun.security.ec.ECOperations$PointMultiplier, java.lang.Object]> {}
        interface _ECOperations$PointMultiplier$Secp256R1GeneratorMultiplier$P256$$static extends ClassLike {
          _verifyTables(base: java.math.BigInteger[]): void;
          _points: point.ProjectivePoint$Immutable[][];
        }
        let ECOperations$PointMultiplier$Secp256R1GeneratorMultiplier$P256: _ECOperations$PointMultiplier$Secp256R1GeneratorMultiplier$P256$$static;
        interface _ECOperations$PointMultiplier$Secp256R1GeneratorMultiplier$P256 {
        }
        interface ECOperations$PointMultiplier$Secp256R1GeneratorMultiplier$P256 extends CombineTypes<[_ECOperations$PointMultiplier$Secp256R1GeneratorMultiplier$P256, java.lang.Object]> {}
        interface _ECPrivateKeyImpl$$static extends ClassLike {
          _serialVersionUID: long;
          _new(encoded: byte[]): ECPrivateKeyImpl;
          _new(s: java.math.BigInteger, params: java.security.spec.ECParameterSpec): ECPrivateKeyImpl;
          _new(s: byte[], params: java.security.spec.ECParameterSpec): ECPrivateKeyImpl;
        }
        let ECPrivateKeyImpl: _ECPrivateKeyImpl$$static;
        interface _ECPrivateKeyImpl {
          calculatePublicKey(): java.security.PublicKey;
          getAlgorithm(): string;
          getArrayS(): byte[];
          _getArrayS0(): byte[];
          getParams(): java.security.spec.ECParameterSpec;
          getS(): java.math.BigInteger;
          _makeEncoding(s: byte[]): void;
          _makeEncoding(s: java.math.BigInteger): void;
          _parseKeyBits(): void;
          _readObject(stream: java.io.ObjectInputStream): void;
          _arrayS: byte[];
          _params: java.security.spec.ECParameterSpec;
          _s: java.math.BigInteger;
        }
        interface ECPrivateKeyImpl extends CombineTypes<[_ECPrivateKeyImpl, java.security.interfaces.ECPrivateKey, sun.security.pkcs.PKCS8Key]> {}
        interface _ECPublicKeyImpl$$static extends ClassLike {
          _serialVersionUID: long;
          _new(w: java.security.spec.ECPoint, params: java.security.spec.ECParameterSpec): ECPublicKeyImpl;
          _new(encoded: byte[]): ECPublicKeyImpl;
        }
        let ECPublicKeyImpl: _ECPublicKeyImpl$$static;
        interface _ECPublicKeyImpl {
          getAlgorithm(): string;
          getEncodedPublicValue(): byte[];
          getParams(): java.security.spec.ECParameterSpec;
          getW(): java.security.spec.ECPoint;
          _parseKeyBits(): void;
          _readObject(stream: java.io.ObjectInputStream): void;
          toString(): string;
          _writeReplace(): any;
          _params: java.security.spec.ECParameterSpec;
          _w: java.security.spec.ECPoint;
        }
        interface ECPublicKeyImpl extends CombineTypes<[_ECPublicKeyImpl, sun.security.x509.X509Key, java.security.interfaces.ECPublicKey]> {}
        interface _ParametersMap$$static<T> extends ClassLike {
          _apply<A, B>(func: java.util.function.Function<A,B>, a: A): java.util.function.Supplier<B>;
          new(): ParametersMap<T>;
        }
        let ParametersMap: _ParametersMap$$static<T>;
        interface _ParametersMap<T> {
          fix(): void;
          get<E>(exception: java.util.function.Function<string,E>, algId: security.x509.AlgorithmId): T;
          get<E>(exception: java.util.function.Function<string,E>, params: java.security.spec.AlgorithmParameterSpec): T;
          getByName(name: string): java.util.Optional<T>;
          getByOid(id: security.util.ObjectIdentifier): java.util.Optional<T>;
          getBySize(size: int): java.util.Optional<T>;
          getBySize<E>(exception: java.util.function.Function<string,E>, size: int): T;
          put(name: string, oid: security.util.ObjectIdentifier, size: int, params: T): void;
          _nameMap: java.util.Map<string,T>;
          _oidMap: java.util.Map<security.util.ObjectIdentifier,T>;
          _sizeMap: java.util.Map<int,T>;
        }
        interface ParametersMap<T> extends CombineTypes<[_ParametersMap<T>, java.lang.Object]> {}
        interface _SunEC$$static extends ClassLike {
          _serialVersionUID: long;
          new(): SunEC;
        }
        let SunEC: _SunEC$$static;
        interface _SunEC {
          _putEdDSAEntries(): void;
          _putEntries(): void;
          _putXDHEntries(): void;
        }
        interface SunEC extends CombineTypes<[_SunEC, java.security.Provider]> {}
        interface _SunEC$ProviderService$$static extends ClassLike {
          _new(p: java.security.Provider, type: string, algo: string, cn: string): SunEC$ProviderService;
          _new(p: java.security.Provider, type: string, algo: string, cn: string, aliases: java.util.List<string>, attrs: java.util.HashMap<string,string>): SunEC$ProviderService;
        }
        let SunEC$ProviderService: _SunEC$ProviderService$$static;
        interface _SunEC$ProviderService {
          newInstance(ctrParamObj: any): any;
        }
        interface SunEC$ProviderService extends CombineTypes<[_SunEC$ProviderService, java.security.Provider$Service]> {}
        interface _SunEC$ProviderServiceA$$static extends ClassLike {
          _new(p: java.security.Provider, type: string, algo: string, cn: string, attrs: java.util.HashMap<string,string>): SunEC$ProviderServiceA;
        }
        let SunEC$ProviderServiceA: _SunEC$ProviderServiceA$$static;
        interface _SunEC$ProviderServiceA {
        }
        interface SunEC$ProviderServiceA extends CombineTypes<[_SunEC$ProviderServiceA, sun.security.ec.SunEC$ProviderService]> {}
        interface _XDHKeyAgreement$$static extends ClassLike {
          _new(): XDHKeyAgreement;
          _new(paramSpec: java.security.spec.AlgorithmParameterSpec): XDHKeyAgreement;
        }
        let XDHKeyAgreement: _XDHKeyAgreement$$static;
        interface _XDHKeyAgreement {
          _allZero(arr: byte[]): boolean;
          _checkLockedParams<T>(exception: java.util.function.Function<string,T>, params: XECParameters): void;
          _engineDoPhase(key: java.security.Key, lastPhase: boolean): java.security.Key;
          _engineGenerateSecret(): byte[];
          _engineGenerateSecret(sharedSecret: byte[], offset: int): int;
          _engineGenerateSecret(algorithm: string): javax.crypto.SecretKey;
          _engineInit(key: java.security.Key, random: java.security.SecureRandom): void;
          _engineInit(key: java.security.Key, params: java.security.spec.AlgorithmParameterSpec, random: java.security.SecureRandom): void;
          _initImpl(key: java.security.Key): void;
          _lockedParams: XECParameters;
          _ops: XECOperations;
          _privateKey: byte[];
          _secret: byte[];
        }
        interface XDHKeyAgreement extends CombineTypes<[_XDHKeyAgreement, javax.crypto.KeyAgreementSpi]> {}
        interface _XDHKeyAgreement$X25519$$static extends ClassLike {
          new(): XDHKeyAgreement$X25519;
        }
        let XDHKeyAgreement$X25519: _XDHKeyAgreement$X25519$$static;
        interface _XDHKeyAgreement$X25519 {
        }
        interface XDHKeyAgreement$X25519 extends CombineTypes<[_XDHKeyAgreement$X25519, sun.security.ec.XDHKeyAgreement]> {}
        interface _XDHKeyAgreement$X448$$static extends ClassLike {
          new(): XDHKeyAgreement$X448;
        }
        let XDHKeyAgreement$X448: _XDHKeyAgreement$X448$$static;
        interface _XDHKeyAgreement$X448 {
        }
        interface XDHKeyAgreement$X448 extends CombineTypes<[_XDHKeyAgreement$X448, sun.security.ec.XDHKeyAgreement]> {}
        interface _XDHKeyFactory$$static extends ClassLike {
          _new(): XDHKeyFactory;
          _new(paramSpec: java.security.spec.AlgorithmParameterSpec): XDHKeyFactory;
        }
        let XDHKeyFactory: _XDHKeyFactory$$static;
        interface _XDHKeyFactory {
          _checkLockedParams<T>(exception: java.util.function.Function<string,T>, spec: java.security.spec.AlgorithmParameterSpec): void;
          _checkLockedParams<T>(exception: java.util.function.Function<string,T>, params: XECParameters): void;
          _engineGeneratePrivate(keySpec: java.security.spec.KeySpec): java.security.PrivateKey;
          _engineGeneratePublic(keySpec: java.security.spec.KeySpec): java.security.PublicKey;
          _engineGetKeySpec<T>(key: java.security.Key, keySpec: java.lang.Class<T>): T;
          _engineTranslateKey(key: java.security.Key): java.security.Key;
          _generatePrivateImpl(keySpec: java.security.spec.KeySpec): java.security.PrivateKey;
          _generatePublicImpl(keySpec: java.security.spec.KeySpec): java.security.PublicKey;
          _lockedParams: XECParameters;
        }
        interface XDHKeyFactory extends CombineTypes<[_XDHKeyFactory, java.security.KeyFactorySpi]> {}
        interface _XDHKeyFactory$X25519$$static extends ClassLike {
          new(): XDHKeyFactory$X25519;
        }
        let XDHKeyFactory$X25519: _XDHKeyFactory$X25519$$static;
        interface _XDHKeyFactory$X25519 {
        }
        interface XDHKeyFactory$X25519 extends CombineTypes<[_XDHKeyFactory$X25519, sun.security.ec.XDHKeyFactory]> {}
        interface _XDHKeyFactory$X448$$static extends ClassLike {
          new(): XDHKeyFactory$X448;
        }
        let XDHKeyFactory$X448: _XDHKeyFactory$X448$$static;
        interface _XDHKeyFactory$X448 {
        }
        interface XDHKeyFactory$X448 extends CombineTypes<[_XDHKeyFactory$X448, sun.security.ec.XDHKeyFactory]> {}
        interface _XDHKeyPairGenerator$$static extends ClassLike {
          _DEFAULT_PARAM_SPEC: java.security.spec.NamedParameterSpec;
          _new(): XDHKeyPairGenerator;
        }
        let XDHKeyPairGenerator: _XDHKeyPairGenerator$$static;
        interface _XDHKeyPairGenerator {
          generateKeyPair(): java.security.KeyPair;
          initialize(keySize: int, random: java.security.SecureRandom): void;
          initialize(params: java.security.spec.AlgorithmParameterSpec, random: java.security.SecureRandom): void;
          _initializeImpl(params: XECParameters, random: java.security.SecureRandom): void;
          _tryInitialize(paramSpec: java.security.spec.NamedParameterSpec): void;
          _lockedParams: XECParameters;
          _ops: XECOperations;
          _random: java.security.SecureRandom;
        }
        interface XDHKeyPairGenerator extends CombineTypes<[_XDHKeyPairGenerator, java.security.KeyPairGeneratorSpi]> {}
        interface _XDHKeyPairGenerator$X25519$$static extends ClassLike {
          new(): XDHKeyPairGenerator$X25519;
        }
        let XDHKeyPairGenerator$X25519: _XDHKeyPairGenerator$X25519$$static;
        interface _XDHKeyPairGenerator$X25519 {
        }
        interface XDHKeyPairGenerator$X25519 extends CombineTypes<[_XDHKeyPairGenerator$X25519, sun.security.ec.XDHKeyPairGenerator]> {}
        interface _XDHKeyPairGenerator$X448$$static extends ClassLike {
          new(): XDHKeyPairGenerator$X448;
        }
        let XDHKeyPairGenerator$X448: _XDHKeyPairGenerator$X448$$static;
        interface _XDHKeyPairGenerator$X448 {
        }
        interface XDHKeyPairGenerator$X448 extends CombineTypes<[_XDHKeyPairGenerator$X448, sun.security.ec.XDHKeyPairGenerator]> {}
        interface _XDHPrivateKeyImpl$$static extends ClassLike {
          _serialVersionUID: long;
          _new(params: XECParameters, k: byte[]): XDHPrivateKeyImpl;
          _new(encoded: byte[]): XDHPrivateKeyImpl;
        }
        let XDHPrivateKeyImpl: _XDHPrivateKeyImpl$$static;
        interface _XDHPrivateKeyImpl {
          calculatePublicKey(): java.security.PublicKey;
          _checkLength(params: XECParameters): void;
          getAlgorithm(): string;
          getK(): byte[];
          getParams(): java.security.spec.AlgorithmParameterSpec;
          getScalar(): java.util.Optional<byte[]>;
          _readObject(stream: java.io.ObjectInputStream): void;
          _k: byte[];
          _paramSpec: java.security.spec.NamedParameterSpec;
        }
        interface XDHPrivateKeyImpl extends CombineTypes<[_XDHPrivateKeyImpl, java.security.interfaces.XECPrivateKey, sun.security.pkcs.PKCS8Key]> {}
        interface _XDHPublicKeyImpl$$static extends ClassLike {
          _reverse(arr: byte[]): void;
          _swap(arr: byte[], i: int, j: int): void;
          _serialVersionUID: long;
          _new(params: XECParameters, u: java.math.BigInteger): XDHPublicKeyImpl;
          _new(encoded: byte[]): XDHPublicKeyImpl;
        }
        let XDHPublicKeyImpl: _XDHPublicKeyImpl$$static;
        interface _XDHPublicKeyImpl {
          _checkLength(params: XECParameters): void;
          getAlgorithm(): string;
          getParams(): java.security.spec.AlgorithmParameterSpec;
          getU(): java.math.BigInteger;
          _readObject(stream: java.io.ObjectInputStream): void;
          _writeReplace(): any;
          _paramSpec: java.security.spec.NamedParameterSpec;
          _u: java.math.BigInteger;
        }
        interface XDHPublicKeyImpl extends CombineTypes<[_XDHPublicKeyImpl, sun.security.x509.X509Key, java.security.interfaces.XECPublicKey]> {}
        interface _XECOperations$$static extends ClassLike {
          _cswap(swap: int, x1: security.util.math.MutableIntegerModuloP, x2: security.util.math.MutableIntegerModuloP): void;
          _getIntegerFieldModulo(p: java.math.BigInteger): security.util.math.IntegerFieldModuloP;
          _maskHighOrder(arr: byte[], bits: int): byte;
          _pruneK(k: byte[], bits: int, logCofactor: int): void;
          new(c: XECParameters): XECOperations;
        }
        let XECOperations: _XECOperations$$static;
        interface _XECOperations {
          _bitAt(arr: byte[], index: int): int;
          computePublic(k: byte[]): java.math.BigInteger;
          _decodeU(u: byte[], bits: int): security.util.math.ImmutableIntegerModuloP;
          _decodeU(u: byte[]): security.util.math.ImmutableIntegerModuloP;
          encodedPointMultiply(k: byte[], u: java.math.BigInteger): byte[];
          encodedPointMultiply(k: byte[], u: byte[]): byte[];
          generatePrivate(random: java.security.SecureRandom): byte[];
          getParameters(): XECParameters;
          _pointMultiply(k: byte[], u: security.util.math.ImmutableIntegerModuloP): security.util.math.IntegerModuloP;
          _pruneK(k: byte[]): void;
          _a24: security.util.math.SmallValue;
          _basePoint: security.util.math.ImmutableIntegerModuloP;
          _field: security.util.math.IntegerFieldModuloP;
          _one: security.util.math.ImmutableIntegerModuloP;
          _params: XECParameters;
          _zero: security.util.math.ImmutableIntegerModuloP;
        }
        interface XECOperations extends CombineTypes<[_XECOperations, java.lang.Object]> {}
        interface _XECParameters$$static extends ClassLike {
          _addParameters(bits: int, p: java.math.BigInteger, a24: int, basePoint: byte, logCofactor: int, koid: security.util.KnownOIDs, name: string): XECParameters;
          get<T>(exception: java.util.function.Function<string,T>, algId: security.x509.AlgorithmId): XECParameters;
          get<T>(exception: java.util.function.Function<string,T>, params: java.security.spec.AlgorithmParameterSpec): XECParameters;
          getBySize<T>(exception: java.util.function.Function<string,T>, size: int): XECParameters;
          _X25519: XECParameters;
          _X448: XECParameters;
          _namedParams: ParametersMap<XECParameters>;
          new(bits: int, p: java.math.BigInteger, a24: int, basePoint: byte, logCofactor: int, oid: security.util.ObjectIdentifier, name: string): XECParameters;
        }
        let XECParameters: _XECParameters$$static;
        interface _XECParameters {
          getA24(): int;
          getBasePoint(): byte;
          getBits(): int;
          getBytes(): int;
          getLogCofactor(): int;
          getName(): string;
          getOid(): security.util.ObjectIdentifier;
          getP(): java.math.BigInteger;
          _oidEquals(other: XECParameters): boolean;
          _a24: int;
          _basePoint: byte;
          _bits: int;
          _logCofactor: int;
          _name: string;
          _oid: security.util.ObjectIdentifier;
          _p: java.math.BigInteger;
        }
        interface XECParameters extends CombineTypes<[_XECParameters, java.lang.Object]> {}
      }
    }
  }
}
