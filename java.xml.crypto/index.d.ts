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
      module org {
        module apache {
          module xml {
            module internal {
              module security {
                module algorithms {
                  module implementations {
                    interface _ECDSAUtils$$static extends ClassLike {
                      convertASN1toXMLDSIG(asn1Bytes: byte[], rawLen: int): byte[];
                      convertXMLDSIGtoASN1(xmldsigBytes: byte[]): byte[];
                      decodePoint(encodedBytes: byte[], elliptiCcurve: java.security.spec.EllipticCurve): java.security.spec.ECPoint;
                      encodePoint(ecPoint: java.security.spec.ECPoint, ellipticCurve: java.security.spec.EllipticCurve): byte[];
                      getECCurveDefinition(oid: string): ECDSAUtils$ECCurveDefinition;
                      getOIDFromPublicKey(ecPublicKey: java.security.interfaces.ECPublicKey): string;
                      stripLeadingZeros(bytes: byte[]): byte[];
                      _ecCurveDefinitions: java.util.List<ECDSAUtils$ECCurveDefinition>;
                    }
                    let ECDSAUtils: _ECDSAUtils$$static;
                    interface _ECDSAUtils {
                    }
                    interface ECDSAUtils extends CombineTypes<[_ECDSAUtils, java.lang.Object]> {}
                    interface _ECDSAUtils$ECCurveDefinition$$static extends ClassLike {
                      new(name: string, oid: string, field: string, a: string, b: string, x: string, y: string, n: string, h: int): ECDSAUtils$ECCurveDefinition;
                    }
                    let ECDSAUtils$ECCurveDefinition: _ECDSAUtils$ECCurveDefinition$$static;
                    interface _ECDSAUtils$ECCurveDefinition {
                      equals(field: java.math.BigInteger, a: java.math.BigInteger, b: java.math.BigInteger, x: java.math.BigInteger, y: java.math.BigInteger, n: java.math.BigInteger, h: int): string;
                      getA(): string;
                      getB(): string;
                      getField(): string;
                      getH(): int;
                      getN(): string;
                      getName(): string;
                      getOid(): string;
                      getX(): string;
                      getY(): string;
                      _a: string;
                      _b: string;
                      _field: string;
                      _h: int;
                      _n: string;
                      _name: string;
                      _oid: string;
                      _x: string;
                      _y: string;
                    }
                    interface ECDSAUtils$ECCurveDefinition extends CombineTypes<[_ECDSAUtils$ECCurveDefinition, java.lang.Object]> {}
                    interface _IntegrityHmac$$static extends ClassLike {
                      _LOG: org.slf4j.internal.Logger;
                      new(): IntegrityHmac;
                      new(provider: java.security.Provider): IntegrityHmac;
                    }
                    let IntegrityHmac: _IntegrityHmac$$static;
                    interface _IntegrityHmac {
                      _engineAddContextToElement(element: org.w3c.dom.Element): void;
                      _engineGetContextFromElement(element: org.w3c.dom.Element): void;
                      _engineGetJCEAlgorithmString(): string;
                      _engineGetJCEProviderName(): string;
                      _engineInitSign(secretKey: java.security.Key): void;
                      _engineInitSign(secretKey: java.security.Key, algorithmParameterSpec: java.security.spec.AlgorithmParameterSpec): void;
                      _engineInitSign(secretKey: java.security.Key, secureRandom: java.security.SecureRandom): void;
                      _engineInitVerify(secretKey: java.security.Key): void;
                      _engineSetHMACOutputLength(length: int): void;
                      _engineSetParameter(params: java.security.spec.AlgorithmParameterSpec): void;
                      _engineSign(): byte[];
                      _engineUpdate(input: byte[]): void;
                      _engineUpdate(input: byte): void;
                      _engineUpdate(buf: byte[], offset: int, len: int): void;
                      _engineVerify(signature: byte[]): boolean;
                      _getDigestLength(): int;
(): int;
                      _hmacOutputLength: IntegrityHmac$HMACOutputLength;
                      _macAlgorithm: javax.crypto.Mac;
                    }
                    interface IntegrityHmac extends CombineTypes<[_IntegrityHmac, com.sun.org.apache.xml.internal.security.algorithms.SignatureAlgorithmSpi]> {}
                    interface _IntegrityHmac$HMACOutputLength$$static extends ClassLike {
                      _MAX_LENGTH: int;
                      _MIN_LENGTH: int;
                      new(length: int): IntegrityHmac$HMACOutputLength;
                    }
                    let IntegrityHmac$HMACOutputLength: _IntegrityHmac$HMACOutputLength$$static;
                    interface _IntegrityHmac$HMACOutputLength {
                      _length: int;
                    }
                    interface IntegrityHmac$HMACOutputLength extends CombineTypes<[_IntegrityHmac$HMACOutputLength, java.lang.Object]> {}
                    interface _IntegrityHmac$IntegrityHmacMD5$$static extends ClassLike {
                      new(): IntegrityHmac$IntegrityHmacMD5;
                      new(provider: java.security.Provider): IntegrityHmac$IntegrityHmacMD5;
                    }
                    let IntegrityHmac$IntegrityHmacMD5: _IntegrityHmac$IntegrityHmacMD5$$static;
                    interface _IntegrityHmac$IntegrityHmacMD5 {
                      engineGetURI(): string;
                      _getDigestLength(): int;
                    }
                    interface IntegrityHmac$IntegrityHmacMD5 extends CombineTypes<[_IntegrityHmac$IntegrityHmacMD5, com.sun.org.apache.xml.internal.security.algorithms.implementations.IntegrityHmac]> {}
                    interface _IntegrityHmac$IntegrityHmacRIPEMD160$$static extends ClassLike {
                      new(): IntegrityHmac$IntegrityHmacRIPEMD160;
                      new(provider: java.security.Provider): IntegrityHmac$IntegrityHmacRIPEMD160;
                    }
                    let IntegrityHmac$IntegrityHmacRIPEMD160: _IntegrityHmac$IntegrityHmacRIPEMD160$$static;
                    interface _IntegrityHmac$IntegrityHmacRIPEMD160 {
                      engineGetURI(): string;
                      _getDigestLength(): int;
                    }
                    interface IntegrityHmac$IntegrityHmacRIPEMD160 extends CombineTypes<[_IntegrityHmac$IntegrityHmacRIPEMD160, com.sun.org.apache.xml.internal.security.algorithms.implementations.IntegrityHmac]> {}
                    interface _IntegrityHmac$IntegrityHmacSHA1$$static extends ClassLike {
                      new(): IntegrityHmac$IntegrityHmacSHA1;
                      new(provider: java.security.Provider): IntegrityHmac$IntegrityHmacSHA1;
                    }
                    let IntegrityHmac$IntegrityHmacSHA1: _IntegrityHmac$IntegrityHmacSHA1$$static;
                    interface _IntegrityHmac$IntegrityHmacSHA1 {
                      engineGetURI(): string;
                      _getDigestLength(): int;
                    }
                    interface IntegrityHmac$IntegrityHmacSHA1 extends CombineTypes<[_IntegrityHmac$IntegrityHmacSHA1, com.sun.org.apache.xml.internal.security.algorithms.implementations.IntegrityHmac]> {}
                    interface _IntegrityHmac$IntegrityHmacSHA224$$static extends ClassLike {
                      new(): IntegrityHmac$IntegrityHmacSHA224;
                      new(provider: java.security.Provider): IntegrityHmac$IntegrityHmacSHA224;
                    }
                    let IntegrityHmac$IntegrityHmacSHA224: _IntegrityHmac$IntegrityHmacSHA224$$static;
                    interface _IntegrityHmac$IntegrityHmacSHA224 {
                      engineGetURI(): string;
                      _getDigestLength(): int;
                    }
                    interface IntegrityHmac$IntegrityHmacSHA224 extends CombineTypes<[_IntegrityHmac$IntegrityHmacSHA224, com.sun.org.apache.xml.internal.security.algorithms.implementations.IntegrityHmac]> {}
                    interface _IntegrityHmac$IntegrityHmacSHA256$$static extends ClassLike {
                      new(): IntegrityHmac$IntegrityHmacSHA256;
                      new(provider: java.security.Provider): IntegrityHmac$IntegrityHmacSHA256;
                    }
                    let IntegrityHmac$IntegrityHmacSHA256: _IntegrityHmac$IntegrityHmacSHA256$$static;
                    interface _IntegrityHmac$IntegrityHmacSHA256 {
                      engineGetURI(): string;
                      _getDigestLength(): int;
                    }
                    interface IntegrityHmac$IntegrityHmacSHA256 extends CombineTypes<[_IntegrityHmac$IntegrityHmacSHA256, com.sun.org.apache.xml.internal.security.algorithms.implementations.IntegrityHmac]> {}
                    interface _IntegrityHmac$IntegrityHmacSHA384$$static extends ClassLike {
                      new(): IntegrityHmac$IntegrityHmacSHA384;
                      new(provider: java.security.Provider): IntegrityHmac$IntegrityHmacSHA384;
                    }
                    let IntegrityHmac$IntegrityHmacSHA384: _IntegrityHmac$IntegrityHmacSHA384$$static;
                    interface _IntegrityHmac$IntegrityHmacSHA384 {
                      engineGetURI(): string;
                      _getDigestLength(): int;
                    }
                    interface IntegrityHmac$IntegrityHmacSHA384 extends CombineTypes<[_IntegrityHmac$IntegrityHmacSHA384, com.sun.org.apache.xml.internal.security.algorithms.implementations.IntegrityHmac]> {}
                    interface _IntegrityHmac$IntegrityHmacSHA512$$static extends ClassLike {
                      new(): IntegrityHmac$IntegrityHmacSHA512;
                      new(provider: java.security.Provider): IntegrityHmac$IntegrityHmacSHA512;
                    }
                    let IntegrityHmac$IntegrityHmacSHA512: _IntegrityHmac$IntegrityHmacSHA512$$static;
                    interface _IntegrityHmac$IntegrityHmacSHA512 {
                      engineGetURI(): string;
                      _getDigestLength(): int;
                    }
                    interface IntegrityHmac$IntegrityHmacSHA512 extends CombineTypes<[_IntegrityHmac$IntegrityHmacSHA512, com.sun.org.apache.xml.internal.security.algorithms.implementations.IntegrityHmac]> {}
                    interface _SignatureBaseRSA$$static extends ClassLike {
                      _LOG: org.slf4j.internal.Logger;
                      new(): SignatureBaseRSA;
                      new(provider: java.security.Provider): SignatureBaseRSA;
                    }
                    let SignatureBaseRSA: _SignatureBaseRSA$$static;
                    interface _SignatureBaseRSA {
                      _engineGetJCEAlgorithmString(): string;
                      _engineGetJCEProviderName(): string;
                      _engineInitSign(privateKey: java.security.Key, secureRandom: java.security.SecureRandom): void;
                      _engineInitSign(privateKey: java.security.Key): void;
                      _engineInitSign(signingKey: java.security.Key, algorithmParameterSpec: java.security.spec.AlgorithmParameterSpec): void;
                      _engineInitVerify(publicKey: java.security.Key): void;
                      _engineSetHMACOutputLength(HMACOutputLength: int): void;
                      _engineSetParameter(params: java.security.spec.AlgorithmParameterSpec): void;
                      _engineSign(): byte[];
                      _engineUpdate(input: byte[]): void;
                      _engineUpdate(input: byte): void;
                      _engineUpdate(buf: byte[], offset: int, len: int): void;
                      _engineVerify(signature: byte[]): boolean;
                      _getSignature(provider: java.security.Provider, algorithmID: string): java.security.Signature;
                      _signatureAlgorithm: java.security.Signature;
                    }
                    interface SignatureBaseRSA extends CombineTypes<[_SignatureBaseRSA, com.sun.org.apache.xml.internal.security.algorithms.SignatureAlgorithmSpi]> {}
                    interface _SignatureBaseRSA$SignatureBaseRSAPSS$$static extends ClassLike {
                      new(): SignatureBaseRSA$SignatureBaseRSAPSS;
                      new(provider: java.security.Provider): SignatureBaseRSA$SignatureBaseRSAPSS;
                    }
                    let SignatureBaseRSA$SignatureBaseRSAPSS: _SignatureBaseRSA$SignatureBaseRSAPSS$$static;
                    interface _SignatureBaseRSA$SignatureBaseRSAPSS {
                      _getPSSParameterSpec(): java.security.spec.PSSParameterSpec;
(): java.security.spec.PSSParameterSpec;
                      _getSignature(provider: java.security.Provider, algorithmID: string): java.security.Signature;
                    }
                    interface SignatureBaseRSA$SignatureBaseRSAPSS extends CombineTypes<[_SignatureBaseRSA$SignatureBaseRSAPSS, com.sun.org.apache.xml.internal.security.algorithms.implementations.SignatureBaseRSA]> {}
                    interface _SignatureBaseRSA$SignatureRSAMD5$$static extends ClassLike {
                      new(): SignatureBaseRSA$SignatureRSAMD5;
                      new(provider: java.security.Provider): SignatureBaseRSA$SignatureRSAMD5;
                    }
                    let SignatureBaseRSA$SignatureRSAMD5: _SignatureBaseRSA$SignatureRSAMD5$$static;
                    interface _SignatureBaseRSA$SignatureRSAMD5 {
                      engineGetURI(): string;
                    }
                    interface SignatureBaseRSA$SignatureRSAMD5 extends CombineTypes<[_SignatureBaseRSA$SignatureRSAMD5, com.sun.org.apache.xml.internal.security.algorithms.implementations.SignatureBaseRSA]> {}
                    interface _SignatureBaseRSA$SignatureRSARIPEMD160$$static extends ClassLike {
                      new(): SignatureBaseRSA$SignatureRSARIPEMD160;
                      new(provider: java.security.Provider): SignatureBaseRSA$SignatureRSARIPEMD160;
                    }
                    let SignatureBaseRSA$SignatureRSARIPEMD160: _SignatureBaseRSA$SignatureRSARIPEMD160$$static;
                    interface _SignatureBaseRSA$SignatureRSARIPEMD160 {
                      engineGetURI(): string;
                    }
                    interface SignatureBaseRSA$SignatureRSARIPEMD160 extends CombineTypes<[_SignatureBaseRSA$SignatureRSARIPEMD160, com.sun.org.apache.xml.internal.security.algorithms.implementations.SignatureBaseRSA]> {}
                    interface _SignatureBaseRSA$SignatureRSASHA1$$static extends ClassLike {
                      new(): SignatureBaseRSA$SignatureRSASHA1;
                      new(provider: java.security.Provider): SignatureBaseRSA$SignatureRSASHA1;
                    }
                    let SignatureBaseRSA$SignatureRSASHA1: _SignatureBaseRSA$SignatureRSASHA1$$static;
                    interface _SignatureBaseRSA$SignatureRSASHA1 {
                      engineGetURI(): string;
                    }
                    interface SignatureBaseRSA$SignatureRSASHA1 extends CombineTypes<[_SignatureBaseRSA$SignatureRSASHA1, com.sun.org.apache.xml.internal.security.algorithms.implementations.SignatureBaseRSA]> {}
                    interface _SignatureBaseRSA$SignatureRSASHA1MGF1$$static extends ClassLike {
                      _SHA1_MGF1_PARAMS: java.security.spec.PSSParameterSpec;
                      new(): SignatureBaseRSA$SignatureRSASHA1MGF1;
                      new(provider: java.security.Provider): SignatureBaseRSA$SignatureRSASHA1MGF1;
                    }
                    let SignatureBaseRSA$SignatureRSASHA1MGF1: _SignatureBaseRSA$SignatureRSASHA1MGF1$$static;
                    interface _SignatureBaseRSA$SignatureRSASHA1MGF1 {
                      engineGetURI(): string;
                      getPSSParameterSpec(): java.security.spec.PSSParameterSpec;
                    }
                    interface SignatureBaseRSA$SignatureRSASHA1MGF1 extends CombineTypes<[_SignatureBaseRSA$SignatureRSASHA1MGF1, com.sun.org.apache.xml.internal.security.algorithms.implementations.SignatureBaseRSA$SignatureBaseRSAPSS]> {}
                    interface _SignatureBaseRSA$SignatureRSASHA224$$static extends ClassLike {
                      new(): SignatureBaseRSA$SignatureRSASHA224;
                      new(provider: java.security.Provider): SignatureBaseRSA$SignatureRSASHA224;
                    }
                    let SignatureBaseRSA$SignatureRSASHA224: _SignatureBaseRSA$SignatureRSASHA224$$static;
                    interface _SignatureBaseRSA$SignatureRSASHA224 {
                      engineGetURI(): string;
                    }
                    interface SignatureBaseRSA$SignatureRSASHA224 extends CombineTypes<[_SignatureBaseRSA$SignatureRSASHA224, com.sun.org.apache.xml.internal.security.algorithms.implementations.SignatureBaseRSA]> {}
                    interface _SignatureBaseRSA$SignatureRSASHA224MGF1$$static extends ClassLike {
                      _SHA224_MGF1_PARAMS: java.security.spec.PSSParameterSpec;
                      new(): SignatureBaseRSA$SignatureRSASHA224MGF1;
                      new(provider: java.security.Provider): SignatureBaseRSA$SignatureRSASHA224MGF1;
                    }
                    let SignatureBaseRSA$SignatureRSASHA224MGF1: _SignatureBaseRSA$SignatureRSASHA224MGF1$$static;
                    interface _SignatureBaseRSA$SignatureRSASHA224MGF1 {
                      engineGetURI(): string;
                      getPSSParameterSpec(): java.security.spec.PSSParameterSpec;
                    }
                    interface SignatureBaseRSA$SignatureRSASHA224MGF1 extends CombineTypes<[_SignatureBaseRSA$SignatureRSASHA224MGF1, com.sun.org.apache.xml.internal.security.algorithms.implementations.SignatureBaseRSA$SignatureBaseRSAPSS]> {}
                    interface _SignatureBaseRSA$SignatureRSASHA256$$static extends ClassLike {
                      new(): SignatureBaseRSA$SignatureRSASHA256;
                      new(provider: java.security.Provider): SignatureBaseRSA$SignatureRSASHA256;
                    }
                    let SignatureBaseRSA$SignatureRSASHA256: _SignatureBaseRSA$SignatureRSASHA256$$static;
                    interface _SignatureBaseRSA$SignatureRSASHA256 {
                      engineGetURI(): string;
                    }
                    interface SignatureBaseRSA$SignatureRSASHA256 extends CombineTypes<[_SignatureBaseRSA$SignatureRSASHA256, com.sun.org.apache.xml.internal.security.algorithms.implementations.SignatureBaseRSA]> {}
                    interface _SignatureBaseRSA$SignatureRSASHA256MGF1$$static extends ClassLike {
                      _SHA256_MGF1_PARAMS: java.security.spec.PSSParameterSpec;
                      new(): SignatureBaseRSA$SignatureRSASHA256MGF1;
                      new(provider: java.security.Provider): SignatureBaseRSA$SignatureRSASHA256MGF1;
                    }
                    let SignatureBaseRSA$SignatureRSASHA256MGF1: _SignatureBaseRSA$SignatureRSASHA256MGF1$$static;
                    interface _SignatureBaseRSA$SignatureRSASHA256MGF1 {
                      engineGetURI(): string;
                      getPSSParameterSpec(): java.security.spec.PSSParameterSpec;
                    }
                    interface SignatureBaseRSA$SignatureRSASHA256MGF1 extends CombineTypes<[_SignatureBaseRSA$SignatureRSASHA256MGF1, com.sun.org.apache.xml.internal.security.algorithms.implementations.SignatureBaseRSA$SignatureBaseRSAPSS]> {}
                    interface _SignatureBaseRSA$SignatureRSASHA384$$static extends ClassLike {
                      new(): SignatureBaseRSA$SignatureRSASHA384;
                      new(provider: java.security.Provider): SignatureBaseRSA$SignatureRSASHA384;
                    }
                    let SignatureBaseRSA$SignatureRSASHA384: _SignatureBaseRSA$SignatureRSASHA384$$static;
                    interface _SignatureBaseRSA$SignatureRSASHA384 {
                      engineGetURI(): string;
                    }
                    interface SignatureBaseRSA$SignatureRSASHA384 extends CombineTypes<[_SignatureBaseRSA$SignatureRSASHA384, com.sun.org.apache.xml.internal.security.algorithms.implementations.SignatureBaseRSA]> {}
                    interface _SignatureBaseRSA$SignatureRSASHA384MGF1$$static extends ClassLike {
                      _SHA384_MGF1_PARAMS: java.security.spec.PSSParameterSpec;
                      new(): SignatureBaseRSA$SignatureRSASHA384MGF1;
                      new(provider: java.security.Provider): SignatureBaseRSA$SignatureRSASHA384MGF1;
                    }
                    let SignatureBaseRSA$SignatureRSASHA384MGF1: _SignatureBaseRSA$SignatureRSASHA384MGF1$$static;
                    interface _SignatureBaseRSA$SignatureRSASHA384MGF1 {
                      engineGetURI(): string;
                      getPSSParameterSpec(): java.security.spec.PSSParameterSpec;
                    }
                    interface SignatureBaseRSA$SignatureRSASHA384MGF1 extends CombineTypes<[_SignatureBaseRSA$SignatureRSASHA384MGF1, com.sun.org.apache.xml.internal.security.algorithms.implementations.SignatureBaseRSA$SignatureBaseRSAPSS]> {}
                    interface _SignatureBaseRSA$SignatureRSASHA3_224MGF1$$static extends ClassLike {
                      _SHA3_224_MGF1_PARAMS: java.security.spec.PSSParameterSpec;
                      new(): SignatureBaseRSA$SignatureRSASHA3_224MGF1;
                      new(provider: java.security.Provider): SignatureBaseRSA$SignatureRSASHA3_224MGF1;
                    }
                    let SignatureBaseRSA$SignatureRSASHA3_224MGF1: _SignatureBaseRSA$SignatureRSASHA3_224MGF1$$static;
                    interface _SignatureBaseRSA$SignatureRSASHA3_224MGF1 {
                      engineGetURI(): string;
                      getPSSParameterSpec(): java.security.spec.PSSParameterSpec;
                    }
                    interface SignatureBaseRSA$SignatureRSASHA3_224MGF1 extends CombineTypes<[_SignatureBaseRSA$SignatureRSASHA3_224MGF1, com.sun.org.apache.xml.internal.security.algorithms.implementations.SignatureBaseRSA$SignatureBaseRSAPSS]> {}
                    interface _SignatureBaseRSA$SignatureRSASHA3_256MGF1$$static extends ClassLike {
                      _SHA3_256_MGF1_PARAMS: java.security.spec.PSSParameterSpec;
                      new(): SignatureBaseRSA$SignatureRSASHA3_256MGF1;
                      new(provider: java.security.Provider): SignatureBaseRSA$SignatureRSASHA3_256MGF1;
                    }
                    let SignatureBaseRSA$SignatureRSASHA3_256MGF1: _SignatureBaseRSA$SignatureRSASHA3_256MGF1$$static;
                    interface _SignatureBaseRSA$SignatureRSASHA3_256MGF1 {
                      engineGetURI(): string;
                      getPSSParameterSpec(): java.security.spec.PSSParameterSpec;
                    }
                    interface SignatureBaseRSA$SignatureRSASHA3_256MGF1 extends CombineTypes<[_SignatureBaseRSA$SignatureRSASHA3_256MGF1, com.sun.org.apache.xml.internal.security.algorithms.implementations.SignatureBaseRSA$SignatureBaseRSAPSS]> {}
                    interface _SignatureBaseRSA$SignatureRSASHA3_384MGF1$$static extends ClassLike {
                      _SHA3_384_MGF1_PARAMS: java.security.spec.PSSParameterSpec;
                      new(): SignatureBaseRSA$SignatureRSASHA3_384MGF1;
                      new(provider: java.security.Provider): SignatureBaseRSA$SignatureRSASHA3_384MGF1;
                    }
                    let SignatureBaseRSA$SignatureRSASHA3_384MGF1: _SignatureBaseRSA$SignatureRSASHA3_384MGF1$$static;
                    interface _SignatureBaseRSA$SignatureRSASHA3_384MGF1 {
                      engineGetURI(): string;
                      getPSSParameterSpec(): java.security.spec.PSSParameterSpec;
                    }
                    interface SignatureBaseRSA$SignatureRSASHA3_384MGF1 extends CombineTypes<[_SignatureBaseRSA$SignatureRSASHA3_384MGF1, com.sun.org.apache.xml.internal.security.algorithms.implementations.SignatureBaseRSA$SignatureBaseRSAPSS]> {}
                    interface _SignatureBaseRSA$SignatureRSASHA3_512MGF1$$static extends ClassLike {
                      _SHA3_512_MGF1_PARAMS: java.security.spec.PSSParameterSpec;
                      new(): SignatureBaseRSA$SignatureRSASHA3_512MGF1;
                      new(provider: java.security.Provider): SignatureBaseRSA$SignatureRSASHA3_512MGF1;
                    }
                    let SignatureBaseRSA$SignatureRSASHA3_512MGF1: _SignatureBaseRSA$SignatureRSASHA3_512MGF1$$static;
                    interface _SignatureBaseRSA$SignatureRSASHA3_512MGF1 {
                      engineGetURI(): string;
                      getPSSParameterSpec(): java.security.spec.PSSParameterSpec;
                    }
                    interface SignatureBaseRSA$SignatureRSASHA3_512MGF1 extends CombineTypes<[_SignatureBaseRSA$SignatureRSASHA3_512MGF1, com.sun.org.apache.xml.internal.security.algorithms.implementations.SignatureBaseRSA$SignatureBaseRSAPSS]> {}
                    interface _SignatureBaseRSA$SignatureRSASHA512$$static extends ClassLike {
                      new(): SignatureBaseRSA$SignatureRSASHA512;
                      new(provider: java.security.Provider): SignatureBaseRSA$SignatureRSASHA512;
                    }
                    let SignatureBaseRSA$SignatureRSASHA512: _SignatureBaseRSA$SignatureRSASHA512$$static;
                    interface _SignatureBaseRSA$SignatureRSASHA512 {
                      engineGetURI(): string;
                    }
                    interface SignatureBaseRSA$SignatureRSASHA512 extends CombineTypes<[_SignatureBaseRSA$SignatureRSASHA512, com.sun.org.apache.xml.internal.security.algorithms.implementations.SignatureBaseRSA]> {}
                    interface _SignatureBaseRSA$SignatureRSASHA512MGF1$$static extends ClassLike {
                      _SHA512_MGF1_PARAMS: java.security.spec.PSSParameterSpec;
                      new(): SignatureBaseRSA$SignatureRSASHA512MGF1;
                      new(provider: java.security.Provider): SignatureBaseRSA$SignatureRSASHA512MGF1;
                    }
                    let SignatureBaseRSA$SignatureRSASHA512MGF1: _SignatureBaseRSA$SignatureRSASHA512MGF1$$static;
                    interface _SignatureBaseRSA$SignatureRSASHA512MGF1 {
                      engineGetURI(): string;
                      getPSSParameterSpec(): java.security.spec.PSSParameterSpec;
                    }
                    interface SignatureBaseRSA$SignatureRSASHA512MGF1 extends CombineTypes<[_SignatureBaseRSA$SignatureRSASHA512MGF1, com.sun.org.apache.xml.internal.security.algorithms.implementations.SignatureBaseRSA$SignatureBaseRSAPSS]> {}
                    interface _SignatureBaseRSA$SignatureRSASSAPSS$$static extends ClassLike {
                      new(): SignatureBaseRSA$SignatureRSASSAPSS;
                      new(provider: java.security.Provider): SignatureBaseRSA$SignatureRSASSAPSS;
                    }
                    let SignatureBaseRSA$SignatureRSASSAPSS: _SignatureBaseRSA$SignatureRSASSAPSS$$static;
                    interface _SignatureBaseRSA$SignatureRSASSAPSS {
                      _engineAddContextToElement(element: org.w3c.dom.Element): void;
                      _engineGetContextFromElement(element: org.w3c.dom.Element): void;
                      engineGetURI(): string;
                      _engineSetParameter(params: java.security.spec.AlgorithmParameterSpec): void;
                      _pssParameterSpec: java.security.spec.PSSParameterSpec;
                    }
                    interface SignatureBaseRSA$SignatureRSASSAPSS extends CombineTypes<[_SignatureBaseRSA$SignatureRSASSAPSS, com.sun.org.apache.xml.internal.security.algorithms.implementations.SignatureBaseRSA]> {}
                    interface _SignatureBaseRSA$SignatureRSASSAPSS$DigestAlgorithm$$static extends ClassLike {
                      fromDigestAlgorithm(digestAlgorithm: string): SignatureBaseRSA$SignatureRSASSAPSS$DigestAlgorithm;
                      fromXmlDigestAlgorithm(xmlDigestAlgorithm: string): SignatureBaseRSA$SignatureRSASSAPSS$DigestAlgorithm;
                      valueOf(name: string): SignatureBaseRSA$SignatureRSASSAPSS$DigestAlgorithm;
                      values(): SignatureBaseRSA$SignatureRSASSAPSS$DigestAlgorithm[];
                      readonly SHA224: SignatureBaseRSA$SignatureRSASSAPSS$DigestAlgorithm;
                      readonly SHA256: SignatureBaseRSA$SignatureRSASSAPSS$DigestAlgorithm;
                      readonly SHA384: SignatureBaseRSA$SignatureRSASSAPSS$DigestAlgorithm;
                      readonly SHA3_224: SignatureBaseRSA$SignatureRSASSAPSS$DigestAlgorithm;
                      readonly SHA3_256: SignatureBaseRSA$SignatureRSASSAPSS$DigestAlgorithm;
                      readonly SHA3_384: SignatureBaseRSA$SignatureRSASSAPSS$DigestAlgorithm;
                      readonly SHA3_512: SignatureBaseRSA$SignatureRSASSAPSS$DigestAlgorithm;
                      readonly SHA512: SignatureBaseRSA$SignatureRSASSAPSS$DigestAlgorithm;
                    }
                    let SignatureBaseRSA$SignatureRSASSAPSS$DigestAlgorithm: _SignatureBaseRSA$SignatureRSASSAPSS$DigestAlgorithm$$static;
                    interface _SignatureBaseRSA$SignatureRSASSAPSS$DigestAlgorithm {
                      getDigestAlgorithm(): string;
                      getSaltLength(): int;
                      getXmlDigestAlgorithm(): string;
                      _digestAlgorithm: string;
                      _saltLength: int;
                      _xmlDigestAlgorithm: string;
                    }
                    interface SignatureBaseRSA$SignatureRSASSAPSS$DigestAlgorithm extends CombineTypes<[_SignatureBaseRSA$SignatureRSASSAPSS$DigestAlgorithm]> {}
                    interface _SignatureDSA$$static extends ClassLike {
                      _LOG: org.slf4j.internal.Logger;
                      readonly URI: string;
                      new(): SignatureDSA;
                      new(provider: java.security.Provider): SignatureDSA;
                    }
                    let SignatureDSA: _SignatureDSA$$static;
                    interface _SignatureDSA {
                      _engineGetJCEAlgorithmString(): string;
                      _engineGetJCEProviderName(): string;
                      _engineGetURI(): string;
                      _engineInitSign(privateKey: java.security.Key, secureRandom: java.security.SecureRandom): void;
                      _engineInitSign(privateKey: java.security.Key): void;
                      _engineInitSign(signingKey: java.security.Key, algorithmParameterSpec: java.security.spec.AlgorithmParameterSpec): void;
                      _engineInitVerify(publicKey: java.security.Key): void;
                      _engineSetHMACOutputLength(HMACOutputLength: int): void;
                      _engineSetParameter(params: java.security.spec.AlgorithmParameterSpec): void;
                      _engineSign(): byte[];
                      _engineUpdate(input: byte[]): void;
                      _engineUpdate(input: byte): void;
                      _engineUpdate(buf: byte[], offset: int, len: int): void;
                      _engineVerify(signature: byte[]): boolean;
                      _signatureAlgorithm: java.security.Signature;
                      _size: int;
                    }
                    interface SignatureDSA extends CombineTypes<[_SignatureDSA, com.sun.org.apache.xml.internal.security.algorithms.SignatureAlgorithmSpi]> {}
                    interface _SignatureDSA$SHA256$$static extends ClassLike {
                      new(): SignatureDSA$SHA256;
                      new(provider: java.security.Provider): SignatureDSA$SHA256;
                    }
                    let SignatureDSA$SHA256: _SignatureDSA$SHA256$$static;
                    interface _SignatureDSA$SHA256 {
                      engineGetURI(): string;
                    }
                    interface SignatureDSA$SHA256 extends CombineTypes<[_SignatureDSA$SHA256, com.sun.org.apache.xml.internal.security.algorithms.implementations.SignatureDSA]> {}
                    interface _SignatureECDSA$$static extends ClassLike {
                      convertASN1toXMLDSIG(asn1Bytes: byte[], rawLen: int): byte[];
                      convertXMLDSIGtoASN1(xmldsigBytes: byte[]): byte[];
                      _LOG: org.slf4j.internal.Logger;
                      new(): SignatureECDSA;
                      new(provider: java.security.Provider): SignatureECDSA;
                    }
                    let SignatureECDSA: _SignatureECDSA$$static;
                    interface _SignatureECDSA {
                      _engineGetJCEAlgorithmString(): string;
                      _engineGetJCEProviderName(): string;
                      _engineInitSign(privateKey: java.security.Key, secureRandom: java.security.SecureRandom): void;
                      _engineInitSign(privateKey: java.security.Key): void;
                      _engineInitSign(signingKey: java.security.Key, algorithmParameterSpec: java.security.spec.AlgorithmParameterSpec): void;
                      _engineInitVerify(publicKey: java.security.Key): void;
                      _engineSetHMACOutputLength(HMACOutputLength: int): void;
                      _engineSetParameter(params: java.security.spec.AlgorithmParameterSpec): void;
                      _engineSign(): byte[];
                      _engineUpdate(input: byte[]): void;
                      _engineUpdate(input: byte): void;
                      _engineUpdate(buf: byte[], offset: int, len: int): void;
                      _engineVerify(signature: byte[]): boolean;
                      _signIntLen: int;
                      _signatureAlgorithm: java.security.Signature;
                    }
                    interface SignatureECDSA extends CombineTypes<[_SignatureECDSA, com.sun.org.apache.xml.internal.security.algorithms.SignatureAlgorithmSpi]> {}
                    interface _SignatureECDSA$SignatureECDSARIPEMD160$$static extends ClassLike {
                      new(): SignatureECDSA$SignatureECDSARIPEMD160;
                      new(provider: java.security.Provider): SignatureECDSA$SignatureECDSARIPEMD160;
                    }
                    let SignatureECDSA$SignatureECDSARIPEMD160: _SignatureECDSA$SignatureECDSARIPEMD160$$static;
                    interface _SignatureECDSA$SignatureECDSARIPEMD160 {
                      engineGetURI(): string;
                    }
                    interface SignatureECDSA$SignatureECDSARIPEMD160 extends CombineTypes<[_SignatureECDSA$SignatureECDSARIPEMD160, com.sun.org.apache.xml.internal.security.algorithms.implementations.SignatureECDSA]> {}
                    interface _SignatureECDSA$SignatureECDSASHA1$$static extends ClassLike {
                      new(): SignatureECDSA$SignatureECDSASHA1;
                      new(provider: java.security.Provider): SignatureECDSA$SignatureECDSASHA1;
                    }
                    let SignatureECDSA$SignatureECDSASHA1: _SignatureECDSA$SignatureECDSASHA1$$static;
                    interface _SignatureECDSA$SignatureECDSASHA1 {
                      engineGetURI(): string;
                    }
                    interface SignatureECDSA$SignatureECDSASHA1 extends CombineTypes<[_SignatureECDSA$SignatureECDSASHA1, com.sun.org.apache.xml.internal.security.algorithms.implementations.SignatureECDSA]> {}
                    interface _SignatureECDSA$SignatureECDSASHA224$$static extends ClassLike {
                      new(): SignatureECDSA$SignatureECDSASHA224;
                      new(provider: java.security.Provider): SignatureECDSA$SignatureECDSASHA224;
                    }
                    let SignatureECDSA$SignatureECDSASHA224: _SignatureECDSA$SignatureECDSASHA224$$static;
                    interface _SignatureECDSA$SignatureECDSASHA224 {
                      engineGetURI(): string;
                    }
                    interface SignatureECDSA$SignatureECDSASHA224 extends CombineTypes<[_SignatureECDSA$SignatureECDSASHA224, com.sun.org.apache.xml.internal.security.algorithms.implementations.SignatureECDSA]> {}
                    interface _SignatureECDSA$SignatureECDSASHA256$$static extends ClassLike {
                      new(): SignatureECDSA$SignatureECDSASHA256;
                      new(provider: java.security.Provider): SignatureECDSA$SignatureECDSASHA256;
                    }
                    let SignatureECDSA$SignatureECDSASHA256: _SignatureECDSA$SignatureECDSASHA256$$static;
                    interface _SignatureECDSA$SignatureECDSASHA256 {
                      engineGetURI(): string;
                    }
                    interface SignatureECDSA$SignatureECDSASHA256 extends CombineTypes<[_SignatureECDSA$SignatureECDSASHA256, com.sun.org.apache.xml.internal.security.algorithms.implementations.SignatureECDSA]> {}
                    interface _SignatureECDSA$SignatureECDSASHA384$$static extends ClassLike {
                      new(): SignatureECDSA$SignatureECDSASHA384;
                      new(provider: java.security.Provider): SignatureECDSA$SignatureECDSASHA384;
                    }
                    let SignatureECDSA$SignatureECDSASHA384: _SignatureECDSA$SignatureECDSASHA384$$static;
                    interface _SignatureECDSA$SignatureECDSASHA384 {
                      engineGetURI(): string;
                    }
                    interface SignatureECDSA$SignatureECDSASHA384 extends CombineTypes<[_SignatureECDSA$SignatureECDSASHA384, com.sun.org.apache.xml.internal.security.algorithms.implementations.SignatureECDSA]> {}
                    interface _SignatureECDSA$SignatureECDSASHA512$$static extends ClassLike {
                      new(): SignatureECDSA$SignatureECDSASHA512;
                      new(provider: java.security.Provider): SignatureECDSA$SignatureECDSASHA512;
                    }
                    let SignatureECDSA$SignatureECDSASHA512: _SignatureECDSA$SignatureECDSASHA512$$static;
                    interface _SignatureECDSA$SignatureECDSASHA512 {
                      engineGetURI(): string;
                    }
                    interface SignatureECDSA$SignatureECDSASHA512 extends CombineTypes<[_SignatureECDSA$SignatureECDSASHA512, com.sun.org.apache.xml.internal.security.algorithms.implementations.SignatureECDSA]> {}
                    interface _SignatureEDDSA$$static extends ClassLike {
                      _LOG: org.slf4j.internal.Logger;
                      new(): SignatureEDDSA;
                      new(provider: java.security.Provider): SignatureEDDSA;
                    }
                    let SignatureEDDSA: _SignatureEDDSA$$static;
                    interface _SignatureEDDSA {
                      _engineGetJCEAlgorithmString(): string;
                      _engineGetJCEProviderName(): string;
                      _engineInitSign(privateKey: java.security.Key, secureRandom: java.security.SecureRandom): void;
                      _engineInitSign(privateKey: java.security.Key): void;
                      _engineInitSign(signingKey: java.security.Key, algorithmParameterSpec: java.security.spec.AlgorithmParameterSpec): void;
                      _engineInitVerify(publicKey: java.security.Key): void;
                      _engineSetHMACOutputLength(HMACOutputLength: int): void;
                      _engineSetParameter(params: java.security.spec.AlgorithmParameterSpec): void;
                      _engineSign(): byte[];
                      _engineUpdate(input: byte[]): void;
                      _engineUpdate(input: byte): void;
                      _engineUpdate(buf: byte[], offset: int, len: int): void;
                      _engineVerify(signature: byte[]): boolean;
                      _signatureAlgorithm: java.security.Signature;
                    }
                    interface SignatureEDDSA extends CombineTypes<[_SignatureEDDSA, com.sun.org.apache.xml.internal.security.algorithms.SignatureAlgorithmSpi]> {}
                    interface _SignatureEDDSA$SignatureEd25519$$static extends ClassLike {
                      new(): SignatureEDDSA$SignatureEd25519;
                      new(provider: java.security.Provider): SignatureEDDSA$SignatureEd25519;
                    }
                    let SignatureEDDSA$SignatureEd25519: _SignatureEDDSA$SignatureEd25519$$static;
                    interface _SignatureEDDSA$SignatureEd25519 {
                      engineGetURI(): string;
                    }
                    interface SignatureEDDSA$SignatureEd25519 extends CombineTypes<[_SignatureEDDSA$SignatureEd25519, com.sun.org.apache.xml.internal.security.algorithms.implementations.SignatureEDDSA]> {}
                    interface _SignatureEDDSA$SignatureEd448$$static extends ClassLike {
                      new(): SignatureEDDSA$SignatureEd448;
                      new(provider: java.security.Provider): SignatureEDDSA$SignatureEd448;
                    }
                    let SignatureEDDSA$SignatureEd448: _SignatureEDDSA$SignatureEd448$$static;
                    interface _SignatureEDDSA$SignatureEd448 {
                      engineGetURI(): string;
                    }
                    interface SignatureEDDSA$SignatureEd448 extends CombineTypes<[_SignatureEDDSA$SignatureEd448, com.sun.org.apache.xml.internal.security.algorithms.implementations.SignatureEDDSA]> {}
                  }
                  interface _Algorithm$$static extends ClassLike {
                    new(doc: org.w3c.dom.Document, algorithmURI: string): Algorithm;
                    new(element: org.w3c.dom.Element, baseURI: string): Algorithm;
                  }
                  let Algorithm: _Algorithm$$static;
                  interface _Algorithm {
                    getAlgorithmURI(): string;
                    _setAlgorithmURI(algorithmURI: string): void;
                  }
                  interface Algorithm extends CombineTypes<[_Algorithm, com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy]> {}
                  interface _ClassLoaderUtils$$static extends ClassLike {
                    _loadClass(className: string, callingClass: java.lang.Class<any>): java.lang.Class<any>;
                    _loadClass2(className: string, callingClass: java.lang.Class<any>): java.lang.Class<any>;
                    _LOG: org.slf4j.internal.Logger;
                  }
                  let ClassLoaderUtils: _ClassLoaderUtils$$static;
                  interface _ClassLoaderUtils {
                  }
                  interface ClassLoaderUtils extends CombineTypes<[_ClassLoaderUtils, java.lang.Object]> {}
                  interface _JCEMapper$$static extends ClassLike {
                    _getAlgorithm(algorithmURI: string): JCEMapper$Algorithm;
                    getAlgorithmClassFromURI(algorithmURI: string): string;
                    getIVLengthFromURI(algorithmURI: string): int;
                    getJCEKeyAlgorithmFromURI(algorithmURI: string): string;
                    getJCEProviderFromURI(algorithmURI: string): string;
                    getKeyLengthFromURI(algorithmURI: string): int;
                    getProviderId(): string;
                    register(id: string, algorithm: JCEMapper$Algorithm): void;
                    registerDefaultAlgorithms(): void;
                    setProviderId(provider: string): void;
                    setThreadSpecificProviderName(threadSpecificProviderName: string): void;
                    translateURItoJCEID(algorithmURI: string): string;
                    _LOG: org.slf4j.internal.Logger;
                    _algorithmsMap: java.util.Map<string,JCEMapper$Algorithm>;
                    _globalProviderName: string;
                    _threadSpecificProviderName: java.lang.ThreadLocal<string>;
                    new(): JCEMapper;
                  }
                  let JCEMapper: _JCEMapper$$static;
                  interface _JCEMapper {
                  }
                  interface JCEMapper extends CombineTypes<[_JCEMapper, java.lang.Object]> {}
                  interface _JCEMapper$Algorithm$$static extends ClassLike {
                    new(el: org.w3c.dom.Element): JCEMapper$Algorithm;
                    new(requiredKey: string, jceName: string): JCEMapper$Algorithm;
                    new(requiredKey: string, jceName: string, algorithmClass: string): JCEMapper$Algorithm;
                    new(requiredKey: string, jceName: string, keyLength: int): JCEMapper$Algorithm;
                    new(requiredKey: string, jceName: string, algorithmClass: string, keyLength: int, ivLength: int): JCEMapper$Algorithm;
                    new(requiredKey: string, jceName: string, algorithmClass: string, keyLength: int, ivLength: int, jceProvider: string): JCEMapper$Algorithm;
                  }
                  let JCEMapper$Algorithm: _JCEMapper$Algorithm$$static;
                  interface _JCEMapper$Algorithm {
                    _algorithmClass: string;
                    _ivLength: int;
                    _jceName: string;
                    _jceProvider: string;
                    _keyLength: int;
                    _requiredKey: string;
                  }
                  interface JCEMapper$Algorithm extends CombineTypes<[_JCEMapper$Algorithm, java.lang.Object]> {}
                  interface _MessageDigestAlgorithm$$static extends ClassLike {
                    _getDigestInstance(algorithmURI: string): java.security.MessageDigest;
                    getInstance(doc: org.w3c.dom.Document, algorithmURI: string): MessageDigestAlgorithm;
                    isEqual(digesta: byte[], digestb: byte[]): boolean;
                    readonly ALGO_ID_DIGEST_NOT_RECOMMENDED_MD5: string;
                    readonly ALGO_ID_DIGEST_RIPEMD160: string;
                    readonly ALGO_ID_DIGEST_SHA1: string;
                    readonly ALGO_ID_DIGEST_SHA224: string;
                    readonly ALGO_ID_DIGEST_SHA256: string;
                    readonly ALGO_ID_DIGEST_SHA384: string;
                    readonly ALGO_ID_DIGEST_SHA3_224: string;
                    readonly ALGO_ID_DIGEST_SHA3_256: string;
                    readonly ALGO_ID_DIGEST_SHA3_384: string;
                    readonly ALGO_ID_DIGEST_SHA3_512: string;
                    readonly ALGO_ID_DIGEST_SHA512: string;
                    readonly ALGO_ID_DIGEST_WHIRLPOOL: string;
                  }
                  let MessageDigestAlgorithm: _MessageDigestAlgorithm$$static;
                  interface _MessageDigestAlgorithm {
                    digest(): byte[];
                    digest(input: byte[]): byte[];
                    digest(buf: byte[], offset: int, len: int): int;
                    getAlgorithm(): java.security.MessageDigest;
                    getBaseLocalName(): string;
                    getBaseNamespace(): string;
                    getDigestLength(): int;
                    getJCEAlgorithmString(): string;
                    getJCEProvider(): java.security.Provider;
                    reset(): void;
                    update(input: byte[]): void;
                    update(input: byte): void;
                    update(buf: byte[], offset: int, len: int): void;
                    _algorithm: java.security.MessageDigest;
                  }
                  interface MessageDigestAlgorithm extends CombineTypes<[_MessageDigestAlgorithm, com.sun.org.apache.xml.internal.security.algorithms.Algorithm]> {}
                  interface _SignatureAlgorithm$$static extends ClassLike {
                    _getSignatureAlgorithmSpi(algorithmURI: string, provider: java.security.Provider): SignatureAlgorithmSpi;
                    register(algorithmURI: string, implementingClass: string): void;
                    register(algorithmURI: string, implementingClass: java.lang.Class<SignatureAlgorithmSpi>): void;
                    registerDefaultAlgorithms(): void;
                    _LOG: org.slf4j.internal.Logger;
                    _algorithmHash: java.util.Map<string,java.lang.Class<SignatureAlgorithmSpi>>;
                    new(doc: org.w3c.dom.Document, algorithmURI: string): SignatureAlgorithm;
                    new(doc: org.w3c.dom.Document, algorithmURI: string, provider: java.security.Provider): SignatureAlgorithm;
                    new(doc: org.w3c.dom.Document, algorithmURI: string, provider: java.security.Provider, parameterSpec: java.security.spec.AlgorithmParameterSpec): SignatureAlgorithm;
                    new(doc: org.w3c.dom.Document, algorithmURI: string, hmacOutputLength: int): SignatureAlgorithm;
                    new(doc: org.w3c.dom.Document, algorithmURI: string, hmacOutputLength: int, provider: java.security.Provider): SignatureAlgorithm;
                    new(element: org.w3c.dom.Element, baseURI: string): SignatureAlgorithm;
                    new(element: org.w3c.dom.Element, baseURI: string, provider: java.security.Provider): SignatureAlgorithm;
                    new(element: org.w3c.dom.Element, baseURI: string, secureValidation: boolean): SignatureAlgorithm;
                    new(element: org.w3c.dom.Element, baseURI: string, secureValidation: boolean, provider: java.security.Provider): SignatureAlgorithm;
                  }
                  let SignatureAlgorithm: _SignatureAlgorithm$$static;
                  interface _SignatureAlgorithm {
                    getBaseLocalName(): string;
                    getBaseNamespace(): string;
                    getJCEAlgorithmString(): string;
                    getJCEProviderName(): string;
                    getURI(): string;
                    initSign(signingKey: java.security.Key): void;
                    initSign(signingKey: java.security.Key, secureRandom: java.security.SecureRandom): void;
                    initSign(signingKey: java.security.Key, algorithmParameterSpec: java.security.spec.AlgorithmParameterSpec): void;
                    initVerify(verificationKey: java.security.Key): void;
                    setParameter(params: java.security.spec.AlgorithmParameterSpec): void;
                    sign(): byte[];
                    update(input: byte[]): void;
                    update(input: byte): void;
                    update(buf: byte[], offset: int, len: int): void;
                    verify(signature: byte[]): boolean;
                    _algorithmURI: string;
                    _signatureAlgorithmSpi: SignatureAlgorithmSpi;
                  }
                  interface SignatureAlgorithm extends CombineTypes<[_SignatureAlgorithm, com.sun.org.apache.xml.internal.security.algorithms.Algorithm]> {}
                  interface _SignatureAlgorithmSpi$$static extends ClassLike {
                    _engineInitSign(privateKey: java.security.Key, secureRandom: java.security.SecureRandom, signatureAlgorithm: java.security.Signature): void;
                    _engineInitVerify(publicKey: java.security.Key, signatureAlgorithm: java.security.Signature): void;
                    new(): SignatureAlgorithmSpi;
                  }
                  let SignatureAlgorithmSpi: _SignatureAlgorithmSpi$$static;
                  interface _SignatureAlgorithmSpi {
                    _engineAddContextToElement(element: org.w3c.dom.Element): void;
                    _engineGetContextFromElement(element: org.w3c.dom.Element): void;
                    _engineGetJCEAlgorithmString(): string;
                    _engineGetJCEProviderName(): string;
                    _engineGetURI(): string;
                    _engineInitSign(a0: java.security.Key): void;
                    _engineInitSign(a0: java.security.Key, a1: java.security.SecureRandom): void;
                    _engineInitSign(a0: java.security.Key, a1: java.security.spec.AlgorithmParameterSpec): void;
                    _engineInitVerify(a0: java.security.Key): void;
                    _engineSetHMACOutputLength(a0: int): void;
                    _engineSetParameter(a0: java.security.spec.AlgorithmParameterSpec): void;
                    _engineSign(): byte[];
                    _engineUpdate(a0: byte[]): void;
                    _engineUpdate(a0: byte): void;
                    _engineUpdate(a0: byte[], a1: int, a2: int): void;
                    _engineVerify(a0: byte[]): boolean;
                  }
                  interface SignatureAlgorithmSpi extends CombineTypes<[_SignatureAlgorithmSpi, java.lang.Object]> {}
                }
                module c14n {
                  module helper {
                    interface _AttrCompare$$static extends ClassLike {
                      _ATTR0_BEFORE_ATTR1: int;
                      _ATTR1_BEFORE_ATTR0: int;
                      _XMLNS: string;
                      _serialVersionUID: long;
                      new(): AttrCompare;
                    }
                    let AttrCompare: _AttrCompare$$static;
                    interface _AttrCompare {
                      compare(attr0: org.w3c.dom.Attr, attr1: org.w3c.dom.Attr): int;
                      compare(a0: any, a1: any): int;
                    }
                    interface AttrCompare extends CombineTypes<[_AttrCompare, java.util.Comparator<org.w3c.dom.Attr>, java.lang.Object, java.io.Serializable]> {}
                    interface _C14nHelper$$static extends ClassLike {
                      namespaceIsAbsolute(namespace: org.w3c.dom.Attr): boolean;
                      namespaceIsAbsolute(namespaceValue: string): boolean;
                      namespaceIsRelative(namespace: org.w3c.dom.Attr): boolean;
                      namespaceIsRelative(namespaceValue: string): boolean;
                    }
                    let C14nHelper: _C14nHelper$$static;
                    interface _C14nHelper {
                    }
                    interface C14nHelper extends CombineTypes<[_C14nHelper, java.lang.Object]> {}
                  }
                  module implementations {
                    interface _Canonicalizer11_OmitComments$$static extends ClassLike {
                      new(): Canonicalizer11_OmitComments;
                    }
                    let Canonicalizer11_OmitComments: _Canonicalizer11_OmitComments$$static;
                    interface _Canonicalizer11_OmitComments {
                      engineGetURI(): string;
                    }
                    interface Canonicalizer11_OmitComments extends CombineTypes<[_Canonicalizer11_OmitComments, com.sun.org.apache.xml.internal.security.c14n.implementations.Canonicalizer20010315]> {}
                    interface _Canonicalizer11_WithComments$$static extends ClassLike {
                      new(): Canonicalizer11_WithComments;
                    }
                    let Canonicalizer11_WithComments: _Canonicalizer11_WithComments$$static;
                    interface _Canonicalizer11_WithComments {
                      engineGetURI(): string;
                    }
                    interface Canonicalizer11_WithComments extends CombineTypes<[_Canonicalizer11_WithComments, com.sun.org.apache.xml.internal.security.c14n.implementations.Canonicalizer20010315]> {}
                    interface _Canonicalizer20010315$$static extends ClassLike {
                      new(includeComments: boolean): Canonicalizer20010315;
                      new(includeComments: boolean, c14n11: boolean): Canonicalizer20010315;
                    }
                    let Canonicalizer20010315: _Canonicalizer20010315$$static;
                    interface _Canonicalizer20010315 {
                      _circumventBugIfNeeded(input: security.signature.XMLSignatureInput): void;
                      engineCanonicalizeSubTree(rootNode: org.w3c.dom.Node, inclusiveNamespaces: string, writer: java.io.OutputStream): void;
                      engineCanonicalizeSubTree(rootNode: org.w3c.dom.Node, inclusiveNamespaces: string, propagateDefaultNamespace: boolean, writer: java.io.OutputStream): void;
                      engineCanonicalizeXPathNodeSet(xpathNodeSet: java.util.Set<org.w3c.dom.Node>, inclusiveNamespaces: string, writer: java.io.OutputStream): void;
                      _handleParent(e: org.w3c.dom.Element, ns: NameSpaceSymbTable): void;
                      _outputAttributes(element: org.w3c.dom.Element, ns: NameSpaceSymbTable, cache: java.util.Map<string,byte[]>, writer: java.io.OutputStream): void;
                      _outputAttributesSubtree(element: org.w3c.dom.Element, ns: NameSpaceSymbTable, cache: java.util.Map<string,byte[]>, writer: java.io.OutputStream): void;
                      _c14n11: boolean;
                      _firstCall: boolean;
                      _xmlattrStack: XmlAttrStack;
                    }
                    interface Canonicalizer20010315 extends CombineTypes<[_Canonicalizer20010315, com.sun.org.apache.xml.internal.security.c14n.implementations.CanonicalizerBase]> {}
                    interface _Canonicalizer20010315Excl$$static extends ClassLike {
                      new(includeComments: boolean): Canonicalizer20010315Excl;
                    }
                    let Canonicalizer20010315Excl: _Canonicalizer20010315Excl$$static;
                    interface _Canonicalizer20010315Excl {
                      _circumventBugIfNeeded(input: security.signature.XMLSignatureInput): void;
                      engineCanonicalize(rootNode: security.signature.XMLSignatureInput, inclusiveNamespaces: string, writer: java.io.OutputStream, secureValidation: boolean): void;
                      engineCanonicalizeSubTree(rootNode: org.w3c.dom.Node, writer: java.io.OutputStream): void;
                      engineCanonicalizeSubTree(rootNode: org.w3c.dom.Node, inclusiveNamespaces: string, writer: java.io.OutputStream): void;
                      engineCanonicalizeSubTree(rootNode: org.w3c.dom.Node, inclusiveNamespaces: string, propagateDefaultNamespace: boolean, writer: java.io.OutputStream): void;
                      engineCanonicalizeSubTree(rootNode: org.w3c.dom.Node, inclusiveNamespaces: string, excl: org.w3c.dom.Node, writer: java.io.OutputStream): void;
                      engineCanonicalizeXPathNodeSet(xpathNodeSet: java.util.Set<org.w3c.dom.Node>, inclusiveNamespaces: string, writer: java.io.OutputStream): void;
                      _outputAttributes(element: org.w3c.dom.Element, ns: NameSpaceSymbTable, cache: java.util.Map<string,byte[]>, writer: java.io.OutputStream): void;
                      _outputAttributesSubtree(element: org.w3c.dom.Element, ns: NameSpaceSymbTable, cache: java.util.Map<string,byte[]>, writer: java.io.OutputStream): void;
                      _inclusiveNSSet: java.util.SortedSet<string>;
                      _propagateDefaultNamespace: boolean;
                    }
                    interface Canonicalizer20010315Excl extends CombineTypes<[_Canonicalizer20010315Excl, com.sun.org.apache.xml.internal.security.c14n.implementations.CanonicalizerBase]> {}
                    interface _Canonicalizer20010315ExclOmitComments$$static extends ClassLike {
                      new(): Canonicalizer20010315ExclOmitComments;
                    }
                    let Canonicalizer20010315ExclOmitComments: _Canonicalizer20010315ExclOmitComments$$static;
                    interface _Canonicalizer20010315ExclOmitComments {
                      engineGetURI(): string;
                    }
                    interface Canonicalizer20010315ExclOmitComments extends CombineTypes<[_Canonicalizer20010315ExclOmitComments, com.sun.org.apache.xml.internal.security.c14n.implementations.Canonicalizer20010315Excl]> {}
                    interface _Canonicalizer20010315ExclWithComments$$static extends ClassLike {
                      new(): Canonicalizer20010315ExclWithComments;
                    }
                    let Canonicalizer20010315ExclWithComments: _Canonicalizer20010315ExclWithComments$$static;
                    interface _Canonicalizer20010315ExclWithComments {
                      engineGetURI(): string;
                    }
                    interface Canonicalizer20010315ExclWithComments extends CombineTypes<[_Canonicalizer20010315ExclWithComments, com.sun.org.apache.xml.internal.security.c14n.implementations.Canonicalizer20010315Excl]> {}
                    interface _Canonicalizer20010315OmitComments$$static extends ClassLike {
                      new(): Canonicalizer20010315OmitComments;
                    }
                    let Canonicalizer20010315OmitComments: _Canonicalizer20010315OmitComments$$static;
                    interface _Canonicalizer20010315OmitComments {
                      engineGetURI(): string;
                    }
                    interface Canonicalizer20010315OmitComments extends CombineTypes<[_Canonicalizer20010315OmitComments, com.sun.org.apache.xml.internal.security.c14n.implementations.Canonicalizer20010315]> {}
                    interface _Canonicalizer20010315WithComments$$static extends ClassLike {
                      new(): Canonicalizer20010315WithComments;
                    }
                    let Canonicalizer20010315WithComments: _Canonicalizer20010315WithComments$$static;
                    interface _Canonicalizer20010315WithComments {
                      engineGetURI(): string;
                    }
                    interface Canonicalizer20010315WithComments extends CombineTypes<[_Canonicalizer20010315WithComments, com.sun.org.apache.xml.internal.security.c14n.implementations.Canonicalizer20010315]> {}
                    interface _CanonicalizerBase$$static extends ClassLike {
                      _outputAttrToWriter(name: string, value: string, writer: java.io.OutputStream, cache: java.util.Map<string,byte[]>): void;
                      _outputTextToWriter(text: string, writer: java.io.OutputStream): void;
                      _AMP: byte[];
                      _BEGIN_COMM: byte[];
                      _BEGIN_PI: byte[];
                      _COMPARE: c14n.helper.AttrCompare;
                      _END_COMM: byte[];
                      _END_PI: byte[];
                      _END_TAG: byte[];
                      _EQUALS_STR: byte[];
                      _GT: byte[];
                      _LT: byte[];
                      _NODE_AFTER_DOCUMENT_ELEMENT: int;
                      _NODE_BEFORE_DOCUMENT_ELEMENT: int;
                      _NODE_NOT_BEFORE_OR_AFTER_DOCUMENT_ELEMENT: int;
                      _QUOT: byte[];
                      _X9: byte[];
                      _XA: byte[];
                      _XD: byte[];
                      readonly XML: string;
                      readonly XMLNS: string;
                      readonly XMLNS_URI: string;
                      readonly XML_LANG_URI: string;
                      _new(includeComments: boolean): CanonicalizerBase;
                    }
                    let CanonicalizerBase: _CanonicalizerBase$$static;
                    interface _CanonicalizerBase {
                      _canonicalizeSubTree(currentNode: org.w3c.dom.Node, ns: NameSpaceSymbTable, endnode: org.w3c.dom.Node, documentLevel: int, excludeNode: org.w3c.dom.Node, writer: java.io.OutputStream): void;
                      _canonicalizeXPathNodeSet(currentNode: org.w3c.dom.Node, endnode: org.w3c.dom.Node, writer: java.io.OutputStream): void;
                      _circumventBugIfNeeded(a0: security.signature.XMLSignatureInput): void;
                      engineCanonicalize(input: security.signature.XMLSignatureInput, writer: java.io.OutputStream, secureValidation: boolean): void;
                      engineCanonicalizeSubTree(rootNode: org.w3c.dom.Node, writer: java.io.OutputStream): void;
                      _engineCanonicalizeSubTree(rootNode: org.w3c.dom.Node, excludeNode: org.w3c.dom.Node, writer: java.io.OutputStream): void;
                      engineCanonicalizeXPathNodeSet(xpathNodeSet: java.util.Set<org.w3c.dom.Node>, writer: java.io.OutputStream): void;
                      _engineCanonicalizeXPathNodeSetInternal(doc: org.w3c.dom.Node, writer: java.io.OutputStream): void;
                      _getNullNode(ownerDocument: org.w3c.dom.Document): org.w3c.dom.Attr;
                      _getParentNameSpaces(el: org.w3c.dom.Element, ns: NameSpaceSymbTable): void;
                      _handleParent(e: org.w3c.dom.Element, ns: NameSpaceSymbTable): void;
                      _isVisible(currentNode: org.w3c.dom.Node): boolean;
                      _isVisibleDO(currentNode: org.w3c.dom.Node, level: int): int;
                      _isVisibleInt(currentNode: org.w3c.dom.Node): int;
                      _outputAttributes(a0: org.w3c.dom.Element, a1: NameSpaceSymbTable, a2: java.util.Map<string,byte[]>, a3: java.io.OutputStream): void;
                      _outputAttributesSubtree(a0: org.w3c.dom.Element, a1: NameSpaceSymbTable, a2: java.util.Map<string,byte[]>, a3: java.io.OutputStream): void;
                      _outputCommentToWriter(currentComment: org.w3c.dom.Comment, writer: java.io.OutputStream, position: int): void;
                      _outputPItoWriter(currentPI: org.w3c.dom.ProcessingInstruction, writer: java.io.OutputStream, position: int): void;
                      _includeComments: boolean;
                      _nodeFilter: java.util.List<security.signature.NodeFilter>;
                      _nullNode: org.w3c.dom.Attr;
                      _xpathNodeSet: java.util.Set<org.w3c.dom.Node>;
                    }
                    interface CanonicalizerBase extends CombineTypes<[_CanonicalizerBase, com.sun.org.apache.xml.internal.security.c14n.CanonicalizerSpi]> {}
                    interface _CanonicalizerPhysical$$static extends ClassLike {
                      new(): CanonicalizerPhysical;
                    }
                    let CanonicalizerPhysical: _CanonicalizerPhysical$$static;
                    interface _CanonicalizerPhysical {
                      _circumventBugIfNeeded(input: security.signature.XMLSignatureInput): void;
                      engineCanonicalizeSubTree(rootNode: org.w3c.dom.Node, inclusiveNamespaces: string, writer: java.io.OutputStream): void;
                      engineCanonicalizeSubTree(rootNode: org.w3c.dom.Node, inclusiveNamespaces: string, propagateDefaultNamespace: boolean, writer: java.io.OutputStream): void;
                      engineCanonicalizeXPathNodeSet(xpathNodeSet: java.util.Set<org.w3c.dom.Node>, inclusiveNamespaces: string, writer: java.io.OutputStream): void;
                      engineGetURI(): string;
                      _handleParent(e: org.w3c.dom.Element, ns: NameSpaceSymbTable): void;
                      _outputAttributes(element: org.w3c.dom.Element, ns: NameSpaceSymbTable, cache: java.util.Map<string,byte[]>, writer: java.io.OutputStream): void;
                      _outputAttributesSubtree(element: org.w3c.dom.Element, ns: NameSpaceSymbTable, cache: java.util.Map<string,byte[]>, writer: java.io.OutputStream): void;
                      _outputCommentToWriter(currentComment: org.w3c.dom.Comment, writer: java.io.OutputStream, position: int): void;
                      _outputPItoWriter(currentPI: org.w3c.dom.ProcessingInstruction, writer: java.io.OutputStream, position: int): void;
                    }
                    interface CanonicalizerPhysical extends CombineTypes<[_CanonicalizerPhysical, com.sun.org.apache.xml.internal.security.c14n.implementations.CanonicalizerBase]> {}
                    interface _NameSpaceSymbEntry$$static extends ClassLike {
                      _new(name: string, n: org.w3c.dom.Attr, rendered: boolean, prefix: string): NameSpaceSymbEntry;
                    }
                    let NameSpaceSymbEntry: _NameSpaceSymbEntry$$static;
                    interface _NameSpaceSymbEntry {
                      clone(): NameSpaceSymbEntry;
                      clone(): any;
                      _lastrendered: string;
                      _n: org.w3c.dom.Attr;
                      _prefix: string;
                      _rendered: boolean;
                      _uri: string;
                    }
                    interface NameSpaceSymbEntry extends CombineTypes<[_NameSpaceSymbEntry, java.lang.Cloneable, java.lang.Object]> {}
                    interface _NameSpaceSymbTable$$static extends ClassLike {
                      _LOG: org.slf4j.internal.Logger;
                      _XMLNS: string;
                      _initialMap: SymbMap;
                      new(): NameSpaceSymbTable;
                    }
                    let NameSpaceSymbTable: _NameSpaceSymbTable$$static;
                    interface _NameSpaceSymbTable {
                      addMapping(prefix: string, uri: string, n: org.w3c.dom.Attr): boolean;
                      addMappingAndRender(prefix: string, uri: string, n: org.w3c.dom.Attr): org.w3c.dom.Node;
                      getLevel(): int;
                      getMapping(prefix: string): org.w3c.dom.Attr;
                      getMappingWithoutRendered(prefix: string): org.w3c.dom.Attr;
                      getUnrenderedNodes(result: java.util.Collection<org.w3c.dom.Attr>): void;
                      _needsClone(): void;
                      outputNodePop(): void;
                      outputNodePush(): void;
                      pop(): void;
                      push(): void;
                      removeMapping(prefix: string): void;
                      removeMappingIfNotRender(prefix: string): void;
                      removeMappingIfRender(prefix: string): boolean;
                      _cloned: boolean;
                      _level: java.util.List<SymbMap>;
                      _symb: SymbMap;
                    }
                    interface NameSpaceSymbTable extends CombineTypes<[_NameSpaceSymbTable, java.lang.Object]> {}
                    interface _SymbMap$$static extends ClassLike {
                      _new(): SymbMap;
                    }
                    let SymbMap: _SymbMap$$static;
                    interface _SymbMap {
                      clone(): SymbMap;
                      clone(): any;
                      _entrySet(): java.util.List<NameSpaceSymbEntry>;
                      _get(key: string): NameSpaceSymbEntry;
                      _index(obj: any): int;
                      _put(key: string, value: NameSpaceSymbEntry): void;
                      _rehash(newCapacity: int): void;
                      _entries: NameSpaceSymbEntry[];
                      _free: int;
                      _keys: string[];
                    }
                    interface SymbMap extends CombineTypes<[_SymbMap, java.lang.Cloneable, java.lang.Object]> {}
                    interface _UtfHelpper$$static extends ClassLike {
                      getStringInUtf8(str: string): byte[];
                      writeByte(str: string, out: java.io.OutputStream, cache: java.util.Map<string,byte[]>): void;
                      writeCodePointToUtf8(c: int, out: java.io.OutputStream): void;
                      writeStringToUtf8(str: string, out: java.io.OutputStream): void;
                      _OLD_UTF8: boolean;
                    }
                    let UtfHelpper: _UtfHelpper$$static;
                    interface _UtfHelpper {
                    }
                    interface UtfHelpper extends CombineTypes<[_UtfHelpper, java.lang.Object]> {}
                    interface _XmlAttrStack$$static extends ClassLike {
                      _joinURI(baseURI: string, relativeURI: string): string;
                      _printStep(step: string, output: string, input: string): void;
                      _removeDotSegments(path: string): string;
                      _LOG: org.slf4j.internal.Logger;
                      new(c14n11: boolean): XmlAttrStack;
                    }
                    let XmlAttrStack: _XmlAttrStack$$static;
                    interface _XmlAttrStack {
                      _addXmlnsAttr(n: org.w3c.dom.Attr): void;
                      _getXmlnsAttr(col: java.util.Collection<org.w3c.dom.Attr>): void;
                      _push(level: int): void;
                      _c14n11: boolean;
                      _cur: XmlAttrStack$XmlsStackElement;
                      _currentLevel: int;
                      _lastlevel: int;
                      _levels: java.util.List<XmlAttrStack$XmlsStackElement>;
                    }
                    interface XmlAttrStack extends CombineTypes<[_XmlAttrStack, java.lang.Object]> {}
                    interface _XmlAttrStack$XmlsStackElement$$static extends ClassLike {
                    }
                    let XmlAttrStack$XmlsStackElement: _XmlAttrStack$XmlsStackElement$$static;
                    interface _XmlAttrStack$XmlsStackElement {
                      _level: int;
                      _nodes: java.util.List<org.w3c.dom.Attr>;
                      _rendered: boolean;
                    }
                    interface XmlAttrStack$XmlsStackElement extends CombineTypes<[_XmlAttrStack$XmlsStackElement, java.lang.Object]> {}
                  }
                  interface _CanonicalizationException$$static extends ClassLike {
                    _serialVersionUID: long;
                    new(): CanonicalizationException;
                    new(ex: java.lang.Exception): CanonicalizationException;
                    new(msgID: string): CanonicalizationException;
                    new(msgID: string, exArgs: any[]): CanonicalizationException;
                    new(originalException: java.lang.Exception, msgID: string): CanonicalizationException;
                    new(msgID: string, originalException: java.lang.Exception): CanonicalizationException;
                    new(originalException: java.lang.Exception, msgID: string, exArgs: any[]): CanonicalizationException;
                    new(msgID: string, exArgs: any[], originalException: java.lang.Exception): CanonicalizationException;
                  }
                  let CanonicalizationException: _CanonicalizationException$$static;
                  interface _CanonicalizationException {
                  }
                  interface CanonicalizationException extends CombineTypes<[_CanonicalizationException, com.sun.org.apache.xml.internal.security.exceptions.XMLSecurityException]> {}
                  interface _Canonicalizer$$static extends ClassLike {
                    getInstance(algorithmURI: string): Canonicalizer;
                    register(algorithmURI: string, implementingClass: string): void;
                    register(algorithmURI: string, implementingClass: java.lang.Class<CanonicalizerSpi>): void;
                    registerDefaultAlgorithms(): void;
                    readonly ALGO_ID_C14N11_OMIT_COMMENTS: string;
                    readonly ALGO_ID_C14N11_WITH_COMMENTS: string;
                    readonly ALGO_ID_C14N_EXCL_OMIT_COMMENTS: string;
                    readonly ALGO_ID_C14N_EXCL_WITH_COMMENTS: string;
                    readonly ALGO_ID_C14N_OMIT_COMMENTS: string;
                    readonly ALGO_ID_C14N_PHYSICAL: string;
                    readonly ALGO_ID_C14N_WITH_COMMENTS: string;
                    readonly ENCODING: string;
                    readonly XPATH_C14N_WITH_COMMENTS_SINGLE_NODE: string;
                    _canonicalizerHash: java.util.Map<string,java.lang.Class<CanonicalizerSpi>>;
                  }
                  let Canonicalizer: _Canonicalizer$$static;
                  interface _Canonicalizer {
                    canonicalize(inputBytes: byte[], writer: java.io.OutputStream, secureValidation: boolean): void;
                    canonicalizeSubtree(node: org.w3c.dom.Node, writer: java.io.OutputStream): void;
                    canonicalizeSubtree(node: org.w3c.dom.Node, inclusiveNamespaces: string, writer: java.io.OutputStream): void;
                    canonicalizeSubtree(node: org.w3c.dom.Node, inclusiveNamespaces: string, propagateDefaultNamespace: boolean, writer: java.io.OutputStream): void;
                    canonicalizeXPathNodeSet(xpathNodeSet: java.util.Set<org.w3c.dom.Node>, writer: java.io.OutputStream): void;
                    canonicalizeXPathNodeSet(xpathNodeSet: java.util.Set<org.w3c.dom.Node>, inclusiveNamespaces: string, writer: java.io.OutputStream): void;
                    _canonicalizerSpi: CanonicalizerSpi;
                  }
                  interface Canonicalizer extends CombineTypes<[_Canonicalizer, java.lang.Object]> {}
                  interface _CanonicalizerSpi$$static extends ClassLike {
                    new(): CanonicalizerSpi;
                  }
                  let CanonicalizerSpi: _CanonicalizerSpi$$static;
                  interface _CanonicalizerSpi {
                    engineCanonicalize(inputBytes: byte[], writer: java.io.OutputStream, secureValidation: boolean): void;
                    engineCanonicalizeSubTree(a0: org.w3c.dom.Node, a1: java.io.OutputStream): void;
                    engineCanonicalizeSubTree(a0: org.w3c.dom.Node, a1: string, a2: java.io.OutputStream): void;
                    engineCanonicalizeSubTree(a0: org.w3c.dom.Node, a1: string, a2: boolean, a3: java.io.OutputStream): void;
                    engineCanonicalizeXPathNodeSet(a0: java.util.Set<org.w3c.dom.Node>, a1: java.io.OutputStream): void;
                    engineCanonicalizeXPathNodeSet(a0: java.util.Set<org.w3c.dom.Node>, a1: string, a2: java.io.OutputStream): void;
                    engineGetURI(): string;
                  }
                  interface CanonicalizerSpi extends CombineTypes<[_CanonicalizerSpi, java.lang.Object]> {}
                  interface _ClassLoaderUtils$$static extends ClassLike {
                    _loadClass(className: string, callingClass: java.lang.Class<any>): java.lang.Class<any>;
                    _loadClass2(className: string, callingClass: java.lang.Class<any>): java.lang.Class<any>;
                    _LOG: org.slf4j.internal.Logger;
                  }
                  let ClassLoaderUtils: _ClassLoaderUtils$$static;
                  interface _ClassLoaderUtils {
                  }
                  interface ClassLoaderUtils extends CombineTypes<[_ClassLoaderUtils, java.lang.Object]> {}
                  interface _InvalidCanonicalizerException$$static extends ClassLike {
                    _serialVersionUID: long;
                    new(): InvalidCanonicalizerException;
                    new(msgID: string): InvalidCanonicalizerException;
                    new(msgID: string, exArgs: any[]): InvalidCanonicalizerException;
                    new(originalException: java.lang.Exception, msgID: string): InvalidCanonicalizerException;
                    new(msgID: string, originalException: java.lang.Exception): InvalidCanonicalizerException;
                    new(originalException: java.lang.Exception, msgID: string, exArgs: any[]): InvalidCanonicalizerException;
                    new(msgID: string, exArgs: any[], originalException: java.lang.Exception): InvalidCanonicalizerException;
                  }
                  let InvalidCanonicalizerException: _InvalidCanonicalizerException$$static;
                  interface _InvalidCanonicalizerException {
                  }
                  interface InvalidCanonicalizerException extends CombineTypes<[_InvalidCanonicalizerException, com.sun.org.apache.xml.internal.security.exceptions.XMLSecurityException]> {}
                }
                module exceptions {
                  interface _AlgorithmAlreadyRegisteredException$$static extends ClassLike {
                    _serialVersionUID: long;
                    new(): AlgorithmAlreadyRegisteredException;
                    new(msgID: string): AlgorithmAlreadyRegisteredException;
                    new(msgID: string, exArgs: any[]): AlgorithmAlreadyRegisteredException;
                    new(originalException: java.lang.Exception, msgID: string): AlgorithmAlreadyRegisteredException;
                    new(msgID: string, originalException: java.lang.Exception): AlgorithmAlreadyRegisteredException;
                    new(originalException: java.lang.Exception, msgID: string, exArgs: any[]): AlgorithmAlreadyRegisteredException;
                    new(msgID: string, exArgs: any[], originalException: java.lang.Exception): AlgorithmAlreadyRegisteredException;
                  }
                  let AlgorithmAlreadyRegisteredException: _AlgorithmAlreadyRegisteredException$$static;
                  interface _AlgorithmAlreadyRegisteredException {
                  }
                  interface AlgorithmAlreadyRegisteredException extends CombineTypes<[_AlgorithmAlreadyRegisteredException, com.sun.org.apache.xml.internal.security.exceptions.XMLSecurityException]> {}
                  interface _Base64DecodingException$$static extends ClassLike {
                    _serialVersionUID: long;
                    new(): Base64DecodingException;
                    new(msgID: string): Base64DecodingException;
                    new(msgID: string, exArgs: any[]): Base64DecodingException;
                    new(originalException: java.lang.Exception, msgID: string): Base64DecodingException;
                    new(msgID: string, originalException: java.lang.Exception): Base64DecodingException;
                    new(originalException: java.lang.Exception, msgID: string, exArgs: any[]): Base64DecodingException;
                    new(msgID: string, exArgs: any[], originalException: java.lang.Exception): Base64DecodingException;
                  }
                  let Base64DecodingException: _Base64DecodingException$$static;
                  interface _Base64DecodingException {
                  }
                  interface Base64DecodingException extends CombineTypes<[_Base64DecodingException, com.sun.org.apache.xml.internal.security.exceptions.XMLSecurityException]> {}
                  interface _XMLSecurityException$$static extends ClassLike {
                    _serialVersionUID: long;
                    new(): XMLSecurityException;
                    new(msgID: string): XMLSecurityException;
                    new(msgID: string, exArgs: any[]): XMLSecurityException;
                    new(originalException: java.lang.Exception): XMLSecurityException;
                    new(originalException: java.lang.Exception, msgID: string): XMLSecurityException;
                    new(msgID: string, originalException: java.lang.Exception): XMLSecurityException;
                    new(originalException: java.lang.Exception, msgID: string, exArgs: any[]): XMLSecurityException;
                    new(msgID: string, exArgs: any[], originalException: java.lang.Exception): XMLSecurityException;
                  }
                  let XMLSecurityException: _XMLSecurityException$$static;
                  interface _XMLSecurityException {
                    getMsgID(): string;
                    getOriginalException(): java.lang.Exception;
                    printStackTrace(): void;
                    toString(): string;
                    _msgID: string;
                  }
                  interface XMLSecurityException extends CombineTypes<[_XMLSecurityException, java.lang.Exception]> {}
                }
                module keys {
                  module content {
                    module keyvalues {
                      interface _DSAKeyValue$$static extends ClassLike {
                        new(element: org.w3c.dom.Element, baseURI: string): DSAKeyValue;
                        new(doc: org.w3c.dom.Document, P: java.math.BigInteger, Q: java.math.BigInteger, G: java.math.BigInteger, Y: java.math.BigInteger): DSAKeyValue;
                        new(doc: org.w3c.dom.Document, key: java.security.Key): DSAKeyValue;
                      }
                      let DSAKeyValue: _DSAKeyValue$$static;
                      interface _DSAKeyValue {
                        getBaseLocalName(): string;
                        getPublicKey(): java.security.PublicKey;
                      }
                      interface DSAKeyValue extends CombineTypes<[_DSAKeyValue, com.sun.org.apache.xml.internal.security.keys.content.keyvalues.KeyValueContent, com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy]> {}
                      interface _ECKeyValue$$static extends ClassLike {
                        _bigInt(s: string): java.math.BigInteger;
                        _decodePoint(data: byte[], curve: java.security.spec.EllipticCurve): java.security.spec.ECPoint;
                        _encodePoint(point: java.security.spec.ECPoint, curve: java.security.spec.EllipticCurve): byte[];
                        _getCurveOid(params: java.security.spec.ECParameterSpec): string;
                        _getECParameterSpec(oid: string): java.security.spec.ECParameterSpec;
                        _getFirstChildElement(node: org.w3c.dom.Node): org.w3c.dom.Element;
                        _getNextSiblingElement(node: org.w3c.dom.Node, localName: string, namespaceURI: string): org.w3c.dom.Element;
                        _getNextSiblingElement(node: org.w3c.dom.Node): org.w3c.dom.Element;
                        _initializeCurve(name: string, oid: string, sfield: string, a: string, b: string, x: string, y: string, n: string, h: int): ECKeyValue$Curve;
                        _matchCurve(params: java.security.spec.ECParameterSpec, curve: ECKeyValue$Curve): boolean;
                        _trimZeroes(b: byte[]): byte[];
                        _verifyElement(elem: org.w3c.dom.Element, localName: string, namespaceURI: string): org.w3c.dom.Element;
                        _SECP256R1: ECKeyValue$Curve;
                        _SECP384R1: ECKeyValue$Curve;
                        _SECP521R1: ECKeyValue$Curve;
                        new(element: org.w3c.dom.Element, baseURI: string): ECKeyValue;
                        new(doc: org.w3c.dom.Document, key: java.security.Key): ECKeyValue;
                      }
                      let ECKeyValue: _ECKeyValue$$static;
                      interface _ECKeyValue {
                        getBaseLocalName(): string;
                        getPublicKey(): java.security.PublicKey;
                      }
                      interface ECKeyValue extends CombineTypes<[_ECKeyValue, com.sun.org.apache.xml.internal.security.keys.content.keyvalues.KeyValueContent, com.sun.org.apache.xml.internal.security.utils.Signature11ElementProxy]> {}
                      interface _ECKeyValue$Curve$$static extends ClassLike {
                        _new(name: string, oid: string, curve: java.security.spec.EllipticCurve, g: java.security.spec.ECPoint, n: java.math.BigInteger, h: int): ECKeyValue$Curve;
                      }
                      let ECKeyValue$Curve: _ECKeyValue$Curve$$static;
                      interface _ECKeyValue$Curve {
                        _getName(): string;
                        _getObjectId(): string;
                        _name: string;
                        _oid: string;
                      }
                      interface ECKeyValue$Curve extends CombineTypes<[_ECKeyValue$Curve, java.security.spec.ECParameterSpec]> {}
                      interface _KeyValueContent$$static extends ClassLike {
                      }
                      let KeyValueContent: _KeyValueContent$$static;
                      interface _KeyValueContent {
                        getPublicKey(): java.security.PublicKey;
(): java.security.PublicKey;
                      }
                      interface KeyValueContent extends CombineTypes<[_KeyValueContent, java.lang.Object]> {}
                      interface _RSAKeyValue$$static extends ClassLike {
                        new(element: org.w3c.dom.Element, baseURI: string): RSAKeyValue;
                        new(doc: org.w3c.dom.Document, modulus: java.math.BigInteger, exponent: java.math.BigInteger): RSAKeyValue;
                        new(doc: org.w3c.dom.Document, key: java.security.Key): RSAKeyValue;
                      }
                      let RSAKeyValue: _RSAKeyValue$$static;
                      interface _RSAKeyValue {
                        getBaseLocalName(): string;
                        getPublicKey(): java.security.PublicKey;
                      }
                      interface RSAKeyValue extends CombineTypes<[_RSAKeyValue, com.sun.org.apache.xml.internal.security.keys.content.keyvalues.KeyValueContent, com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy]> {}
                    }
                    module x509 {
                      interface _XMLX509CRL$$static extends ClassLike {
                        new(element: org.w3c.dom.Element, baseURI: string): XMLX509CRL;
                        new(doc: org.w3c.dom.Document, crlBytes: byte[]): XMLX509CRL;
                      }
                      let XMLX509CRL: _XMLX509CRL$$static;
                      interface _XMLX509CRL {
                        getBaseLocalName(): string;
                        getCRLBytes(): byte[];
                      }
                      interface XMLX509CRL extends CombineTypes<[_XMLX509CRL, com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy, com.sun.org.apache.xml.internal.security.keys.content.x509.XMLX509DataContent]> {}
                      interface _XMLX509Certificate$$static extends ClassLike {
                        readonly JCA_CERT_ID: string;
                        new(element: org.w3c.dom.Element, baseURI: string): XMLX509Certificate;
                        new(doc: org.w3c.dom.Document, certificateBytes: byte[]): XMLX509Certificate;
                        new(doc: org.w3c.dom.Document, x509certificate: java.security.cert.X509Certificate): XMLX509Certificate;
                      }
                      let XMLX509Certificate: _XMLX509Certificate$$static;
                      interface _XMLX509Certificate {
                        equals(obj: any): boolean;
                        getBaseLocalName(): string;
                        getCertificateBytes(): byte[];
                        getPublicKey(): java.security.PublicKey;
                        getX509Certificate(): java.security.cert.X509Certificate;
                        hashCode(): int;
                      }
                      interface XMLX509Certificate extends CombineTypes<[_XMLX509Certificate, com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy, com.sun.org.apache.xml.internal.security.keys.content.x509.XMLX509DataContent]> {}
                      interface _XMLX509DataContent$$static extends ClassLike {
                      }
                      let XMLX509DataContent: _XMLX509DataContent$$static;
                      interface _XMLX509DataContent {
                      }
                      interface XMLX509DataContent extends CombineTypes<[_XMLX509DataContent, java.lang.Object]> {}
                      interface _XMLX509Digest$$static extends ClassLike {
                        getDigestBytesFromCert(cert: java.security.cert.X509Certificate, algorithmURI: string): byte[];
                        new(element: org.w3c.dom.Element, baseURI: string): XMLX509Digest;
                        new(doc: org.w3c.dom.Document, digestBytes: byte[], algorithmURI: string): XMLX509Digest;
                        new(doc: org.w3c.dom.Document, x509certificate: java.security.cert.X509Certificate, algorithmURI: string): XMLX509Digest;
                      }
                      let XMLX509Digest: _XMLX509Digest$$static;
                      interface _XMLX509Digest {
                        getAlgorithm(): string;
                        getAlgorithmAttr(): org.w3c.dom.Attr;
                        getBaseLocalName(): string;
                        getDigestBytes(): byte[];
                      }
                      interface XMLX509Digest extends CombineTypes<[_XMLX509Digest, com.sun.org.apache.xml.internal.security.utils.Signature11ElementProxy, com.sun.org.apache.xml.internal.security.keys.content.x509.XMLX509DataContent]> {}
                      interface _XMLX509IssuerSerial$$static extends ClassLike {
                        _LOG: org.slf4j.internal.Logger;
                        new(element: org.w3c.dom.Element, baseURI: string): XMLX509IssuerSerial;
                        new(doc: org.w3c.dom.Document, x509IssuerName: string, x509SerialNumber: java.math.BigInteger): XMLX509IssuerSerial;
                        new(doc: org.w3c.dom.Document, x509IssuerName: string, x509SerialNumber: string): XMLX509IssuerSerial;
                        new(doc: org.w3c.dom.Document, x509IssuerName: string, x509SerialNumber: int): XMLX509IssuerSerial;
                        new(doc: org.w3c.dom.Document, x509certificate: java.security.cert.X509Certificate): XMLX509IssuerSerial;
                      }
                      let XMLX509IssuerSerial: _XMLX509IssuerSerial$$static;
                      interface _XMLX509IssuerSerial {
                        equals(obj: any): boolean;
                        getBaseLocalName(): string;
                        getIssuerName(): string;
                        getSerialNumber(): java.math.BigInteger;
                        getSerialNumberInteger(): int;
                        hashCode(): int;
                      }
                      interface XMLX509IssuerSerial extends CombineTypes<[_XMLX509IssuerSerial, com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy, com.sun.org.apache.xml.internal.security.keys.content.x509.XMLX509DataContent]> {}
                      interface _XMLX509SKI$$static extends ClassLike {
                        getSKIBytesFromCert(cert: java.security.cert.X509Certificate): byte[];
                        _LOG: org.slf4j.internal.Logger;
                        readonly SKI_OID: string;
                        new(doc: org.w3c.dom.Document, skiBytes: byte[]): XMLX509SKI;
                        new(doc: org.w3c.dom.Document, x509certificate: java.security.cert.X509Certificate): XMLX509SKI;
                        new(element: org.w3c.dom.Element, baseURI: string): XMLX509SKI;
                      }
                      let XMLX509SKI: _XMLX509SKI$$static;
                      interface _XMLX509SKI {
                        equals(obj: any): boolean;
                        getBaseLocalName(): string;
                        getSKIBytes(): byte[];
                        hashCode(): int;
                      }
                      interface XMLX509SKI extends CombineTypes<[_XMLX509SKI, com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy, com.sun.org.apache.xml.internal.security.keys.content.x509.XMLX509DataContent]> {}
                      interface _XMLX509SubjectName$$static extends ClassLike {
                        new(element: org.w3c.dom.Element, baseURI: string): XMLX509SubjectName;
                        new(doc: org.w3c.dom.Document, X509SubjectNameString: string): XMLX509SubjectName;
                        new(doc: org.w3c.dom.Document, x509certificate: java.security.cert.X509Certificate): XMLX509SubjectName;
                      }
                      let XMLX509SubjectName: _XMLX509SubjectName$$static;
                      interface _XMLX509SubjectName {
                        equals(obj: any): boolean;
                        getBaseLocalName(): string;
                        getSubjectName(): string;
                        hashCode(): int;
                      }
                      interface XMLX509SubjectName extends CombineTypes<[_XMLX509SubjectName, com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy, com.sun.org.apache.xml.internal.security.keys.content.x509.XMLX509DataContent]> {}
                    }
                    interface _DEREncodedKeyValue$$static extends ClassLike {
                      _supportedKeyTypes: string[];
                      new(element: org.w3c.dom.Element, baseURI: string): DEREncodedKeyValue;
                      new(doc: org.w3c.dom.Document, publicKey: java.security.PublicKey): DEREncodedKeyValue;
                      new(doc: org.w3c.dom.Document, encodedKey: byte[]): DEREncodedKeyValue;
                    }
                    let DEREncodedKeyValue: _DEREncodedKeyValue$$static;
                    interface _DEREncodedKeyValue {
                      getBaseLocalName(): string;
                      _getEncodedDER(publicKey: java.security.PublicKey): byte[];
                      getId(): string;
                      getPublicKey(): java.security.PublicKey;
                      setId(id: string): void;
                    }
                    interface DEREncodedKeyValue extends CombineTypes<[_DEREncodedKeyValue, com.sun.org.apache.xml.internal.security.keys.content.KeyInfoContent, com.sun.org.apache.xml.internal.security.utils.Signature11ElementProxy]> {}
                    interface _KeyInfoContent$$static extends ClassLike {
                    }
                    let KeyInfoContent: _KeyInfoContent$$static;
                    interface _KeyInfoContent {
                    }
                    interface KeyInfoContent extends CombineTypes<[_KeyInfoContent, java.lang.Object]> {}
                    interface _KeyInfoReference$$static extends ClassLike {
                      new(element: org.w3c.dom.Element, baseURI: string): KeyInfoReference;
                      new(doc: org.w3c.dom.Document, uri: string): KeyInfoReference;
                    }
                    let KeyInfoReference: _KeyInfoReference$$static;
                    interface _KeyInfoReference {
                      getBaseLocalName(): string;
                      getId(): string;
                      getURI(): string;
                      getURIAttr(): org.w3c.dom.Attr;
                      setId(id: string): void;
                    }
                    interface KeyInfoReference extends CombineTypes<[_KeyInfoReference, com.sun.org.apache.xml.internal.security.keys.content.KeyInfoContent, com.sun.org.apache.xml.internal.security.utils.Signature11ElementProxy]> {}
                    interface _KeyName$$static extends ClassLike {
                      new(element: org.w3c.dom.Element, baseURI: string): KeyName;
                      new(doc: org.w3c.dom.Document, keyName: string): KeyName;
                    }
                    let KeyName: _KeyName$$static;
                    interface _KeyName {
                      getBaseLocalName(): string;
                      getKeyName(): string;
                    }
                    interface KeyName extends CombineTypes<[_KeyName, com.sun.org.apache.xml.internal.security.keys.content.KeyInfoContent, com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy]> {}
                    interface _KeyValue$$static extends ClassLike {
                      new(doc: org.w3c.dom.Document, dsaKeyValue: content.keyvalues.DSAKeyValue): KeyValue;
                      new(doc: org.w3c.dom.Document, rsaKeyValue: content.keyvalues.RSAKeyValue): KeyValue;
                      new(doc: org.w3c.dom.Document, unknownKeyValue: org.w3c.dom.Element): KeyValue;
                      new(doc: org.w3c.dom.Document, pk: java.security.PublicKey): KeyValue;
                      new(element: org.w3c.dom.Element, baseURI: string): KeyValue;
                    }
                    let KeyValue: _KeyValue$$static;
                    interface _KeyValue {
                      getBaseLocalName(): string;
                      getPublicKey(): java.security.PublicKey;
                    }
                    interface KeyValue extends CombineTypes<[_KeyValue, com.sun.org.apache.xml.internal.security.keys.content.KeyInfoContent, com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy]> {}
                    interface _MgmtData$$static extends ClassLike {
                      new(element: org.w3c.dom.Element, baseURI: string): MgmtData;
                      new(doc: org.w3c.dom.Document, mgmtData: string): MgmtData;
                    }
                    let MgmtData: _MgmtData$$static;
                    interface _MgmtData {
                      getBaseLocalName(): string;
                      getMgmtData(): string;
                    }
                    interface MgmtData extends CombineTypes<[_MgmtData, com.sun.org.apache.xml.internal.security.keys.content.KeyInfoContent, com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy]> {}
                    interface _PGPData$$static extends ClassLike {
                      new(element: org.w3c.dom.Element, baseURI: string): PGPData;
                    }
                    let PGPData: _PGPData$$static;
                    interface _PGPData {
                      getBaseLocalName(): string;
                    }
                    interface PGPData extends CombineTypes<[_PGPData, com.sun.org.apache.xml.internal.security.keys.content.KeyInfoContent, com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy]> {}
                    interface _RetrievalMethod$$static extends ClassLike {
                      readonly TYPE_DSA: string;
                      readonly TYPE_MGMT: string;
                      readonly TYPE_PGP: string;
                      readonly TYPE_RAWX509: string;
                      readonly TYPE_RSA: string;
                      readonly TYPE_SPKI: string;
                      readonly TYPE_X509: string;
                      new(element: org.w3c.dom.Element, baseURI: string): RetrievalMethod;
                      new(doc: org.w3c.dom.Document, URI: string, transforms: security.transforms.Transforms, Type: string): RetrievalMethod;
                    }
                    let RetrievalMethod: _RetrievalMethod$$static;
                    interface _RetrievalMethod {
                      getBaseLocalName(): string;
                      getTransforms(): security.transforms.Transforms;
                      getType(): string;
                      getURI(): string;
                      getURIAttr(): org.w3c.dom.Attr;
                    }
                    interface RetrievalMethod extends CombineTypes<[_RetrievalMethod, com.sun.org.apache.xml.internal.security.keys.content.KeyInfoContent, com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy]> {}
                    interface _SPKIData$$static extends ClassLike {
                      new(element: org.w3c.dom.Element, baseURI: string): SPKIData;
                    }
                    let SPKIData: _SPKIData$$static;
                    interface _SPKIData {
                      getBaseLocalName(): string;
                    }
                    interface SPKIData extends CombineTypes<[_SPKIData, com.sun.org.apache.xml.internal.security.keys.content.KeyInfoContent, com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy]> {}
                    interface _X509Data$$static extends ClassLike {
                      _LOG: org.slf4j.internal.Logger;
                      new(doc: org.w3c.dom.Document): X509Data;
                      new(element: org.w3c.dom.Element, baseURI: string): X509Data;
                    }
                    let X509Data: _X509Data$$static;
                    interface _X509Data {
                      add(xmlX509IssuerSerial: content.x509.XMLX509IssuerSerial): void;
                      add(xmlX509SKI: content.x509.XMLX509SKI): void;
                      add(xmlX509SubjectName: content.x509.XMLX509SubjectName): void;
                      add(xmlX509Certificate: content.x509.XMLX509Certificate): void;
                      add(xmlX509CRL: content.x509.XMLX509CRL): void;
                      add(xmlX509Digest: content.x509.XMLX509Digest): void;
                      addCRL(crlBytes: byte[]): void;
                      addCertificate(x509certificate: java.security.cert.X509Certificate): void;
                      addCertificate(x509certificateBytes: byte[]): void;
                      addDigest(x509certificate: java.security.cert.X509Certificate, algorithmURI: string): void;
                      addDigest(x509CertificateDigestBytes: byte[], algorithmURI: string): void;
                      addIssuerSerial(X509IssuerName: string, X509SerialNumber: java.math.BigInteger): void;
                      addIssuerSerial(X509IssuerName: string, X509SerialNumber: string): void;
                      addIssuerSerial(X509IssuerName: string, X509SerialNumber: int): void;
                      addSKI(skiBytes: byte[]): void;
                      addSKI(x509certificate: java.security.cert.X509Certificate): void;
                      addSubjectName(subjectName: string): void;
                      addSubjectName(x509certificate: java.security.cert.X509Certificate): void;
                      addUnknownElement(element: org.w3c.dom.Element): void;
                      containsCRL(): boolean;
                      containsCertificate(): boolean;
                      containsDigest(): boolean;
                      containsIssuerSerial(): boolean;
                      containsSKI(): boolean;
                      containsSubjectName(): boolean;
                      containsUnknownElement(): boolean;
                      getBaseLocalName(): string;
                      itemCRL(i: int): content.x509.XMLX509CRL;
                      itemCertificate(i: int): content.x509.XMLX509Certificate;
                      itemDigest(i: int): content.x509.XMLX509Digest;
                      itemIssuerSerial(i: int): content.x509.XMLX509IssuerSerial;
                      itemSKI(i: int): content.x509.XMLX509SKI;
                      itemSubjectName(i: int): content.x509.XMLX509SubjectName;
                      itemUnknownElement(i: int): org.w3c.dom.Element;
                      lengthCRL(): int;
                      lengthCertificate(): int;
                      lengthDigest(): int;
                      lengthIssuerSerial(): int;
                      lengthSKI(): int;
                      lengthSubjectName(): int;
                      lengthUnknownElement(): int;
                    }
                    interface X509Data extends CombineTypes<[_X509Data, com.sun.org.apache.xml.internal.security.keys.content.KeyInfoContent, com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy]> {}
                  }
                  module keyresolver {
                    module implementations {
                      interface _DEREncodedKeyValueResolver$$static extends ClassLike {
                        _LOG: org.slf4j.internal.Logger;
                        new(): DEREncodedKeyValueResolver;
                      }
                      let DEREncodedKeyValueResolver: _DEREncodedKeyValueResolver$$static;
                      interface _DEREncodedKeyValueResolver {
                        _engineCanResolve(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver): boolean;
                        engineLookupAndResolvePrivateKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.PrivateKey;
                        _engineResolvePrivateKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.PrivateKey;
                        _engineResolvePublicKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.PublicKey;
                        _engineResolveSecretKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): javax.crypto.SecretKey;
                        _engineResolveX509Certificate(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.cert.X509Certificate;
                      }
                      interface DEREncodedKeyValueResolver extends CombineTypes<[_DEREncodedKeyValueResolver, com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi]> {}
                      interface _DSAKeyValueResolver$$static extends ClassLike {
                        _LOG: org.slf4j.internal.Logger;
                        new(): DSAKeyValueResolver;
                      }
                      let DSAKeyValueResolver: _DSAKeyValueResolver$$static;
                      interface _DSAKeyValueResolver {
                        _engineCanResolve(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver): boolean;
                        _engineResolvePrivateKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.PrivateKey;
                        _engineResolvePublicKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.PublicKey;
                        _engineResolveSecretKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): javax.crypto.SecretKey;
                        _engineResolveX509Certificate(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.cert.X509Certificate;
                      }
                      interface DSAKeyValueResolver extends CombineTypes<[_DSAKeyValueResolver, com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi]> {}
                      interface _ECKeyValueResolver$$static extends ClassLike {
                        _LOG: org.slf4j.internal.Logger;
                        new(): ECKeyValueResolver;
                      }
                      let ECKeyValueResolver: _ECKeyValueResolver$$static;
                      interface _ECKeyValueResolver {
                        _engineCanResolve(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver): boolean;
                        _engineResolvePrivateKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.PrivateKey;
                        _engineResolvePublicKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.PublicKey;
                        _engineResolveSecretKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): javax.crypto.SecretKey;
                        _engineResolveX509Certificate(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.cert.X509Certificate;
                      }
                      interface ECKeyValueResolver extends CombineTypes<[_ECKeyValueResolver, com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi]> {}
                      interface _KeyInfoReferenceResolver$$static extends ClassLike {
                        _LOG: org.slf4j.internal.Logger;
                        new(): KeyInfoReferenceResolver;
                      }
                      let KeyInfoReferenceResolver: _KeyInfoReferenceResolver$$static;
                      interface _KeyInfoReferenceResolver {
                        _engineCanResolve(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver): boolean;
                        engineResolvePrivateKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.PrivateKey;
                        _engineResolvePublicKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.PublicKey;
                        _engineResolveSecretKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): javax.crypto.SecretKey;
                        _engineResolveX509Certificate(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.cert.X509Certificate;
                        _obtainReferenceElement(resource: security.signature.XMLSignatureInput, secureValidation: boolean): org.w3c.dom.Element;
                        _resolveInput(uri: org.w3c.dom.Attr, baseURI: string, secureValidation: boolean): security.signature.XMLSignatureInput;
                        _resolveReferentKeyInfo(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): KeyInfo;
                        _validateReference(referentElement: org.w3c.dom.Element, secureValidation: boolean): void;
                      }
                      interface KeyInfoReferenceResolver extends CombineTypes<[_KeyInfoReferenceResolver, com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi]> {}
                      interface _PrivateKeyResolver$$static extends ClassLike {
                        _LOG: org.slf4j.internal.Logger;
                        new(keyStore: java.security.KeyStore, password: char[]): PrivateKeyResolver;
                      }
                      let PrivateKeyResolver: _PrivateKeyResolver$$static;
                      interface _PrivateKeyResolver {
                        _engineCanResolve(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver): boolean;
                        engineResolvePrivateKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.PrivateKey;
                        _engineResolvePublicKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.PublicKey;
                        _engineResolveSecretKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): javax.crypto.SecretKey;
                        _engineResolveX509Certificate(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.cert.X509Certificate;
                        _resolveX509Certificate(x509Cert: keys.content.x509.XMLX509Certificate): java.security.PrivateKey;
                        _resolveX509Data(element: org.w3c.dom.Element, baseURI: string): java.security.PrivateKey;
                        _resolveX509IssuerSerial(x509Serial: keys.content.x509.XMLX509IssuerSerial): java.security.PrivateKey;
                        _resolveX509SKI(x509SKI: keys.content.x509.XMLX509SKI): java.security.PrivateKey;
                        _resolveX509SubjectName(x509SubjectName: keys.content.x509.XMLX509SubjectName): java.security.PrivateKey;
                        _keyStore: java.security.KeyStore;
                        _password: char[];
                      }
                      interface PrivateKeyResolver extends CombineTypes<[_PrivateKeyResolver, com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi]> {}
                      interface _RSAKeyValueResolver$$static extends ClassLike {
                        _LOG: org.slf4j.internal.Logger;
                        new(): RSAKeyValueResolver;
                      }
                      let RSAKeyValueResolver: _RSAKeyValueResolver$$static;
                      interface _RSAKeyValueResolver {
                        _engineCanResolve(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver): boolean;
                        _engineResolvePrivateKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.PrivateKey;
                        _engineResolvePublicKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.PublicKey;
                        _engineResolveSecretKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): javax.crypto.SecretKey;
                        _engineResolveX509Certificate(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.cert.X509Certificate;
                      }
                      interface RSAKeyValueResolver extends CombineTypes<[_RSAKeyValueResolver, com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi]> {}
                      interface _RetrievalMethodResolver$$static extends ClassLike {
                        _getDocumentElement(set: java.util.Set<org.w3c.dom.Node>): org.w3c.dom.Element;
                        _getRawCertificate(resource: security.signature.XMLSignatureInput): java.security.cert.X509Certificate;
                        _obtainReferenceElement(resource: security.signature.XMLSignatureInput, secureValidation: boolean): org.w3c.dom.Element;
                        _resolveCertificate(e: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.cert.X509Certificate;
                        _resolveInput(rm: keys.content.RetrievalMethod, baseURI: string, secureValidation: boolean): security.signature.XMLSignatureInput;
                        _resolveKey(e: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.PublicKey;
                        _LOG: org.slf4j.internal.Logger;
                        new(): RetrievalMethodResolver;
                      }
                      let RetrievalMethodResolver: _RetrievalMethodResolver$$static;
                      interface _RetrievalMethodResolver {
                        _engineCanResolve(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver): boolean;
                        _engineResolvePrivateKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.PrivateKey;
                        _engineResolvePublicKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.PublicKey;
                        engineResolveSecretKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): javax.crypto.SecretKey;
                        _engineResolveX509Certificate(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.cert.X509Certificate;
                      }
                      interface RetrievalMethodResolver extends CombineTypes<[_RetrievalMethodResolver, com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi]> {}
                      interface _SecretKeyResolver$$static extends ClassLike {
                        _LOG: org.slf4j.internal.Logger;
                        new(keyStore: java.security.KeyStore, password: char[]): SecretKeyResolver;
                      }
                      let SecretKeyResolver: _SecretKeyResolver$$static;
                      interface _SecretKeyResolver {
                        _engineCanResolve(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver): boolean;
                        _engineResolvePrivateKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.PrivateKey;
                        _engineResolvePublicKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.PublicKey;
                        _engineResolveSecretKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): javax.crypto.SecretKey;
                        _engineResolveX509Certificate(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.cert.X509Certificate;
                        _keyStore: java.security.KeyStore;
                        _password: char[];
                      }
                      interface SecretKeyResolver extends CombineTypes<[_SecretKeyResolver, com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi]> {}
                      interface _SingleKeyResolver$$static extends ClassLike {
                        new(keyName: string, publicKey: java.security.PublicKey): SingleKeyResolver;
                        new(keyName: string, privateKey: java.security.PrivateKey): SingleKeyResolver;
                        new(keyName: string, secretKey: javax.crypto.SecretKey): SingleKeyResolver;
                      }
                      let SingleKeyResolver: _SingleKeyResolver$$static;
                      interface _SingleKeyResolver {
                        _engineCanResolve(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver): boolean;
                        engineResolvePrivateKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.PrivateKey;
                        _engineResolvePublicKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.PublicKey;
                        _engineResolveSecretKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): javax.crypto.SecretKey;
                        _engineResolveX509Certificate(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.cert.X509Certificate;
                        _keyName: string;
                        _privateKey: java.security.PrivateKey;
                        _publicKey: java.security.PublicKey;
                        _secretKey: javax.crypto.SecretKey;
                      }
                      interface SingleKeyResolver extends CombineTypes<[_SingleKeyResolver, com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi]> {}
                      interface _X509CertificateResolver$$static extends ClassLike {
                        _LOG: org.slf4j.internal.Logger;
                        new(): X509CertificateResolver;
                      }
                      let X509CertificateResolver: _X509CertificateResolver$$static;
                      interface _X509CertificateResolver {
                        _engineCanResolve(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver): boolean;
                        _engineResolvePrivateKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.PrivateKey;
                        _engineResolvePublicKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.PublicKey;
                        _engineResolveSecretKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): javax.crypto.SecretKey;
                        _engineResolveX509Certificate(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.cert.X509Certificate;
                      }
                      interface X509CertificateResolver extends CombineTypes<[_X509CertificateResolver, com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi]> {}
                      interface _X509DigestResolver$$static extends ClassLike {
                        _LOG: org.slf4j.internal.Logger;
                        new(): X509DigestResolver;
                      }
                      let X509DigestResolver: _X509DigestResolver$$static;
                      interface _X509DigestResolver {
                        _checkStorage(storage: keys.storage.StorageResolver): void;
                        _engineCanResolve(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver): boolean;
                        _engineResolvePrivateKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.PrivateKey;
                        _engineResolvePublicKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.PublicKey;
                        _engineResolveSecretKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): javax.crypto.SecretKey;
                        _engineResolveX509Certificate(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.cert.X509Certificate;
                        _resolveCertificate(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver): java.security.cert.X509Certificate;
                      }
                      interface X509DigestResolver extends CombineTypes<[_X509DigestResolver, com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi]> {}
                      interface _X509IssuerSerialResolver$$static extends ClassLike {
                        _LOG: org.slf4j.internal.Logger;
                        new(): X509IssuerSerialResolver;
                      }
                      let X509IssuerSerialResolver: _X509IssuerSerialResolver$$static;
                      interface _X509IssuerSerialResolver {
                        _engineCanResolve(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver): boolean;
                        _engineResolvePrivateKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.PrivateKey;
                        _engineResolvePublicKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.PublicKey;
                        _engineResolveSecretKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): javax.crypto.SecretKey;
                        _engineResolveX509Certificate(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.cert.X509Certificate;
                      }
                      interface X509IssuerSerialResolver extends CombineTypes<[_X509IssuerSerialResolver, com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi]> {}
                      interface _X509SKIResolver$$static extends ClassLike {
                        _LOG: org.slf4j.internal.Logger;
                        new(): X509SKIResolver;
                      }
                      let X509SKIResolver: _X509SKIResolver$$static;
                      interface _X509SKIResolver {
                        _engineCanResolve(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver): boolean;
                        _engineResolvePrivateKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.PrivateKey;
                        _engineResolvePublicKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.PublicKey;
                        _engineResolveSecretKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): javax.crypto.SecretKey;
                        _engineResolveX509Certificate(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.cert.X509Certificate;
                      }
                      interface X509SKIResolver extends CombineTypes<[_X509SKIResolver, com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi]> {}
                      interface _X509SubjectNameResolver$$static extends ClassLike {
                        _LOG: org.slf4j.internal.Logger;
                        new(): X509SubjectNameResolver;
                      }
                      let X509SubjectNameResolver: _X509SubjectNameResolver$$static;
                      interface _X509SubjectNameResolver {
                        _engineCanResolve(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver): boolean;
                        _engineResolvePrivateKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.PrivateKey;
                        _engineResolvePublicKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.PublicKey;
                        _engineResolveSecretKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): javax.crypto.SecretKey;
                        _engineResolveX509Certificate(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.cert.X509Certificate;
                      }
                      interface X509SubjectNameResolver extends CombineTypes<[_X509SubjectNameResolver, com.sun.org.apache.xml.internal.security.keys.keyresolver.KeyResolverSpi]> {}
                    }
                    interface _ClassLoaderUtils$$static extends ClassLike {
                      _loadClass(className: string, callingClass: java.lang.Class<any>): java.lang.Class<any>;
                      _loadClass2(className: string, callingClass: java.lang.Class<any>): java.lang.Class<any>;
                      _LOG: org.slf4j.internal.Logger;
                    }
                    let ClassLoaderUtils: _ClassLoaderUtils$$static;
                    interface _ClassLoaderUtils {
                    }
                    interface ClassLoaderUtils extends CombineTypes<[_ClassLoaderUtils, java.lang.Object]> {}
                    interface _KeyResolver$$static extends ClassLike {
                      getPublicKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.PublicKey;
                      getX509Certificate(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.cert.X509Certificate;
                      iterator(): java.util.Iterator<KeyResolverSpi>;
                      length(): int;
                      register(className: string): void;
                      register(keyResolverSpi: KeyResolverSpi, start: boolean): void;
                      registerAtStart(className: string): void;
                      registerClassNames(classNames: java.util.List<string>): void;
                      registerDefaultResolvers(): void;
                      _LOG: org.slf4j.internal.Logger;
                      _defaultResolversAdded: java.util.concurrent.atomic.AtomicBoolean;
                      _resolverList: java.util.List<KeyResolverSpi>;
                      new(): KeyResolver;
                    }
                    let KeyResolver: _KeyResolver$$static;
                    interface _KeyResolver {
                    }
                    interface KeyResolver extends CombineTypes<[_KeyResolver, java.lang.Object]> {}
                    interface _KeyResolver$ResolverIterator$$static extends ClassLike {
                      new(list: java.util.List<KeyResolverSpi>): KeyResolver$ResolverIterator;
                    }
                    let KeyResolver$ResolverIterator: _KeyResolver$ResolverIterator$$static;
                    interface _KeyResolver$ResolverIterator {
                      hasNext(): boolean;
                      next(): KeyResolverSpi;
                      next(): any;
                      remove(): void;
                      _it: java.util.Iterator<KeyResolverSpi>;
                      _res: java.util.List<KeyResolverSpi>;
                    }
                    interface KeyResolver$ResolverIterator extends CombineTypes<[_KeyResolver$ResolverIterator, java.lang.Object, java.util.Iterator<KeyResolverSpi>]> {}
                    interface _KeyResolverException$$static extends ClassLike {
                      _serialVersionUID: long;
                      new(): KeyResolverException;
                      new(ex: java.lang.Exception): KeyResolverException;
                      new(msgID: string): KeyResolverException;
                      new(msgID: string, exArgs: any[]): KeyResolverException;
                      new(originalException: java.lang.Exception, msgID: string): KeyResolverException;
                      new(msgID: string, originalException: java.lang.Exception): KeyResolverException;
                      new(originalException: java.lang.Exception, msgID: string, exArgs: any[]): KeyResolverException;
                      new(msgID: string, exArgs: any[], originalException: java.lang.Exception): KeyResolverException;
                    }
                    let KeyResolverException: _KeyResolverException$$static;
                    interface _KeyResolverException {
                    }
                    interface KeyResolverException extends CombineTypes<[_KeyResolverException, com.sun.org.apache.xml.internal.security.exceptions.XMLSecurityException]> {}
                    interface _KeyResolverSpi$$static extends ClassLike {
                      _getDocFromBytes(bytes: byte[], secureValidation: boolean): org.w3c.dom.Element;
                      new(): KeyResolverSpi;
                    }
                    let KeyResolverSpi: _KeyResolverSpi$$static;
                    interface _KeyResolverSpi {
                      _engineCanResolve(a0: org.w3c.dom.Element, a1: string, a2: keys.storage.StorageResolver): boolean;
                      engineLookupAndResolvePrivateKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.PrivateKey;
                      engineLookupAndResolvePublicKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.PublicKey;
                      engineLookupAndResolveSecretKey(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): javax.crypto.SecretKey;
                      engineLookupResolveX509Certificate(element: org.w3c.dom.Element, baseURI: string, storage: keys.storage.StorageResolver, secureValidation: boolean): java.security.cert.X509Certificate;
                      _engineResolvePrivateKey(a0: org.w3c.dom.Element, a1: string, a2: keys.storage.StorageResolver, a3: boolean): java.security.PrivateKey;
                      _engineResolvePublicKey(a0: org.w3c.dom.Element, a1: string, a2: keys.storage.StorageResolver, a3: boolean): java.security.PublicKey;
                      _engineResolveSecretKey(a0: org.w3c.dom.Element, a1: string, a2: keys.storage.StorageResolver, a3: boolean): javax.crypto.SecretKey;
                      _engineResolveX509Certificate(a0: org.w3c.dom.Element, a1: string, a2: keys.storage.StorageResolver, a3: boolean): java.security.cert.X509Certificate;
                    }
                    interface KeyResolverSpi extends CombineTypes<[_KeyResolverSpi, java.lang.Object]> {}
                  }
                  module storage {
                    module implementations {
                      interface _KeyStoreResolver$$static extends ClassLike {
                        _LOG: org.slf4j.internal.Logger;
                        new(keyStore: java.security.KeyStore): KeyStoreResolver;
                      }
                      let KeyStoreResolver: _KeyStoreResolver$$static;
                      interface _KeyStoreResolver {
                        getIterator(): java.util.Iterator<java.security.cert.Certificate>;
                        _keyStore: java.security.KeyStore;
                      }
                      interface KeyStoreResolver extends CombineTypes<[_KeyStoreResolver, com.sun.org.apache.xml.internal.security.keys.storage.StorageResolverSpi]> {}
                      interface _KeyStoreResolver$KeyStoreIterator$$static extends ClassLike {
                        new(keyStore: java.security.KeyStore): KeyStoreResolver$KeyStoreIterator;
                      }
                      let KeyStoreResolver$KeyStoreIterator: _KeyStoreResolver$KeyStoreIterator$$static;
                      interface _KeyStoreResolver$KeyStoreIterator {
                        hasNext(): boolean;
                        next(): java.security.cert.Certificate;
                        next(): any;
                        remove(): void;
                        _certs: java.util.List<java.security.cert.Certificate>;
                        _i: int;
                      }
                      interface KeyStoreResolver$KeyStoreIterator extends CombineTypes<[_KeyStoreResolver$KeyStoreIterator, java.util.Iterator<java.security.cert.Certificate>, java.lang.Object]> {}
                      interface _SingleCertificateResolver$$static extends ClassLike {
                        new(x509cert: java.security.cert.X509Certificate): SingleCertificateResolver;
                      }
                      let SingleCertificateResolver: _SingleCertificateResolver$$static;
                      interface _SingleCertificateResolver {
                        getIterator(): java.util.Iterator<java.security.cert.Certificate>;
                        _certificate: java.security.cert.X509Certificate;
                      }
                      interface SingleCertificateResolver extends CombineTypes<[_SingleCertificateResolver, com.sun.org.apache.xml.internal.security.keys.storage.StorageResolverSpi]> {}
                      interface _SingleCertificateResolver$InternalIterator$$static extends ClassLike {
                        new(x509cert: java.security.cert.X509Certificate): SingleCertificateResolver$InternalIterator;
                      }
                      let SingleCertificateResolver$InternalIterator: _SingleCertificateResolver$InternalIterator$$static;
                      interface _SingleCertificateResolver$InternalIterator {
                        hasNext(): boolean;
                        next(): java.security.cert.Certificate;
                        next(): any;
                        remove(): void;
                        _alreadyReturned: boolean;
                        _certificate: java.security.cert.X509Certificate;
                      }
                      interface SingleCertificateResolver$InternalIterator extends CombineTypes<[_SingleCertificateResolver$InternalIterator, java.util.Iterator<java.security.cert.Certificate>, java.lang.Object]> {}
                    }
                    interface _StorageResolver$$static extends ClassLike {
                      _LOG: org.slf4j.internal.Logger;
                      new(resolver: StorageResolverSpi): StorageResolver;
                      new(keyStore: java.security.KeyStore): StorageResolver;
                      new(x509certificate: java.security.cert.X509Certificate): StorageResolver;
                    }
                    let StorageResolver: _StorageResolver$$static;
                    interface _StorageResolver {
                      add(resolver: StorageResolverSpi): void;
                      add(keyStore: java.security.KeyStore): void;
                      add(x509certificate: java.security.cert.X509Certificate): void;
                      getIterator(): java.util.Iterator<java.security.cert.Certificate>;
                      _storageResolvers: java.util.List<StorageResolverSpi>;
                    }
                    interface StorageResolver extends CombineTypes<[_StorageResolver, java.lang.Object]> {}
                    interface _StorageResolver$StorageResolverIterator$$static extends ClassLike {
                      new(resolvers: java.util.Iterator<StorageResolverSpi>): StorageResolver$StorageResolverIterator;
                    }
                    let StorageResolver$StorageResolverIterator: _StorageResolver$StorageResolverIterator$$static;
                    interface _StorageResolver$StorageResolverIterator {
                      _findNextResolver(): java.util.Iterator<java.security.cert.Certificate>;
                      hasNext(): boolean;
                      next(): java.security.cert.Certificate;
                      next(): any;
                      remove(): void;
                      _currentResolver: java.util.Iterator<java.security.cert.Certificate>;
                      _resolvers: java.util.Iterator<StorageResolverSpi>;
                    }
                    interface StorageResolver$StorageResolverIterator extends CombineTypes<[_StorageResolver$StorageResolverIterator, java.util.Iterator<java.security.cert.Certificate>, java.lang.Object]> {}
                    interface _StorageResolverException$$static extends ClassLike {
                      _serialVersionUID: long;
                      new(): StorageResolverException;
                      new(ex: java.lang.Exception): StorageResolverException;
                      new(msgID: string): StorageResolverException;
                      new(msgID: string, exArgs: any[]): StorageResolverException;
                      new(originalException: java.lang.Exception, msgID: string): StorageResolverException;
                      new(msgID: string, originalException: java.lang.Exception): StorageResolverException;
                      new(originalException: java.lang.Exception, msgID: string, exArgs: any[]): StorageResolverException;
                      new(msgID: string, exArgs: any[], originalException: java.lang.Exception): StorageResolverException;
                    }
                    let StorageResolverException: _StorageResolverException$$static;
                    interface _StorageResolverException {
                    }
                    interface StorageResolverException extends CombineTypes<[_StorageResolverException, com.sun.org.apache.xml.internal.security.exceptions.XMLSecurityException]> {}
                    interface _StorageResolverSpi$$static extends ClassLike {
                      new(): StorageResolverSpi;
                    }
                    let StorageResolverSpi: _StorageResolverSpi$$static;
                    interface _StorageResolverSpi {
                      getIterator(): java.util.Iterator<java.security.cert.Certificate>;
(): java.util.Iterator<java.security.cert.Certificate>;
                    }
                    interface StorageResolverSpi extends CombineTypes<[_StorageResolverSpi, java.lang.Object]> {}
                  }
                  interface _KeyInfo$$static extends ClassLike {
                    _LOG: org.slf4j.internal.Logger;
                    _nullList: java.util.List<storage.StorageResolver>;
                    new(doc: org.w3c.dom.Document): KeyInfo;
                    new(element: org.w3c.dom.Element, baseURI: string): KeyInfo;
                  }
                  let KeyInfo: _KeyInfo$$static;
                  interface _KeyInfo {
                    add(keyname: keys.content.KeyName): void;
                    add(dsakeyvalue: keys.content.keyvalues.DSAKeyValue): void;
                    add(rsakeyvalue: keys.content.keyvalues.RSAKeyValue): void;
                    add(pk: java.security.PublicKey): void;
                    add(keyvalue: keys.content.KeyValue): void;
                    add(mgmtdata: keys.content.MgmtData): void;
                    add(pgpdata: keys.content.PGPData): void;
                    add(retrievalmethod: keys.content.RetrievalMethod): void;
                    add(spkidata: keys.content.SPKIData): void;
                    add(x509data: keys.content.X509Data): void;
                    add(derEncodedKeyValue: keys.content.DEREncodedKeyValue): void;
                    add(keyInfoReference: keys.content.KeyInfoReference): void;
                    addDEREncodedKeyValue(pk: java.security.PublicKey): void;
                    addKeyInfoReference(URI: string): void;
                    addKeyName(keynameString: string): void;
                    addKeyValue(pk: java.security.PublicKey): void;
                    addKeyValue(unknownKeyValueElement: org.w3c.dom.Element): void;
                    addMgmtData(mgmtdata: string): void;
                    addRetrievalMethod(uri: string, transforms: security.transforms.Transforms, Type: string): void;
                    addStorageResolver(storageResolver: keys.storage.StorageResolver): void;
                    addUnknownElement(element: org.w3c.dom.Element): void;
                    _applyCurrentResolver(uri: string, keyResolver: keys.keyresolver.KeyResolverSpi): java.security.cert.X509Certificate;
                    containsDEREncodedKeyValue(): boolean;
                    containsKeyInfoReference(): boolean;
                    containsKeyName(): boolean;
                    containsKeyValue(): boolean;
                    containsMgmtData(): boolean;
                    containsPGPData(): boolean;
                    containsRetrievalMethod(): boolean;
                    containsSPKIData(): boolean;
                    containsUnknownElement(): boolean;
                    containsX509Data(): boolean;
                    getBaseLocalName(): string;
                    getId(): string;
                    getPrivateKey(): java.security.PrivateKey;
                    _getPrivateKeyFromInternalResolvers(): java.security.PrivateKey;
                    _getPrivateKeyFromStaticResolvers(): java.security.PrivateKey;
                    getPublicKey(): java.security.PublicKey;
                    _getPublicKeyFromInternalResolvers(): java.security.PublicKey;
                    _getPublicKeyFromStaticResolvers(): java.security.PublicKey;
                    getSecretKey(): javax.crypto.SecretKey;
                    _getSecretKeyFromInternalResolvers(): javax.crypto.SecretKey;
                    _getSecretKeyFromStaticResolvers(): javax.crypto.SecretKey;
                    getX509Certificate(): java.security.cert.X509Certificate;
                    _getX509CertificateFromInternalResolvers(): java.security.cert.X509Certificate;
                    _getX509CertificateFromStaticResolvers(): java.security.cert.X509Certificate;
                    isEmpty(): boolean;
                    itemDEREncodedKeyValue(i: int): keys.content.DEREncodedKeyValue;
                    _itemInternalKeyResolver(i: int): keys.keyresolver.KeyResolverSpi;
                    itemKeyInfoReference(i: int): keys.content.KeyInfoReference;
                    itemKeyName(i: int): keys.content.KeyName;
                    itemKeyValue(i: int): keys.content.KeyValue;
                    itemMgmtData(i: int): keys.content.MgmtData;
                    itemPGPData(i: int): keys.content.PGPData;
                    itemRetrievalMethod(i: int): keys.content.RetrievalMethod;
                    itemSPKIData(i: int): keys.content.SPKIData;
                    itemUnknownElement(i: int): org.w3c.dom.Element;
                    itemX509Data(i: int): keys.content.X509Data;
                    lengthDEREncodedKeyValue(): int;
                    _lengthInternalKeyResolver(): int;
                    lengthKeyInfoReference(): int;
                    lengthKeyName(): int;
                    lengthKeyValue(): int;
                    lengthMgmtData(): int;
                    lengthPGPData(): int;
                    lengthRetrievalMethod(): int;
                    lengthSPKIData(): int;
                    lengthUnknownElement(): int;
                    lengthX509Data(): int;
                    registerInternalKeyResolver(realKeyResolver: keys.keyresolver.KeyResolverSpi): void;
                    setId(id: string): void;
                    setSecureValidation(secureValidation: boolean): void;
                    _internalKeyResolvers: java.util.List<keyresolver.KeyResolverSpi>;
                    _secureValidation: boolean;
                    _storageResolvers: java.util.List<storage.StorageResolver>;
                    _x509Datas: java.util.List<content.X509Data>;
                  }
                  interface KeyInfo extends CombineTypes<[_KeyInfo, com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy]> {}
                }
                module parser {
                  interface _XMLParser$$static extends ClassLike {
                  }
                  let XMLParser: _XMLParser$$static;
                  interface _XMLParser {
                    parse(a0: java.io.InputStream, a1: boolean): org.w3c.dom.Document;
(a0: java.io.InputStream, a1: boolean): org.w3c.dom.Document;
                  }
                  interface XMLParser extends CombineTypes<[_XMLParser, java.lang.Object]> {}
                  interface _XMLParserException$$static extends ClassLike {
                    _serialVersionUID: long;
                    new(): XMLParserException;
                    new(msgID: string): XMLParserException;
                    new(msgID: string, exArgs: any[]): XMLParserException;
                    new(originalException: java.lang.Exception, msgID: string): XMLParserException;
                    new(originalException: java.lang.Exception, msgID: string, exArgs: any[]): XMLParserException;
                  }
                  let XMLParserException: _XMLParserException$$static;
                  interface _XMLParserException {
                  }
                  interface XMLParserException extends CombineTypes<[_XMLParserException, com.sun.org.apache.xml.internal.security.exceptions.XMLSecurityException]> {}
                  interface _XMLParserImpl$$static extends ClassLike {
                    _createDocumentBuilder(disallowDocTypeDeclarations: boolean): javax.xml.parsers.DocumentBuilder;
                    _getClassLoader(clazz: java.lang.Class<any>): java.lang.ClassLoader;
                    _getContextClassLoader(): java.lang.ClassLoader;
                    _getDocumentBuilder(disallowDocTypeDeclarations: boolean, queue: java.util.Queue<javax.xml.parsers.DocumentBuilder>): javax.xml.parsers.DocumentBuilder;
                    _getDocumentBuilderQueue(disallowDocTypeDeclarations: boolean, loader: java.lang.ClassLoader): java.util.Queue<javax.xml.parsers.DocumentBuilder>;
                    _repoolDocumentBuilder(db: javax.xml.parsers.DocumentBuilder, queue: java.util.Queue<javax.xml.parsers.DocumentBuilder>): void;
                    _DOCUMENT_BUILDERS: java.util.Map<java.lang.ClassLoader,java.util.Queue<javax.xml.parsers.DocumentBuilder>>;
                    _DOCUMENT_BUILDERS_DISALLOW_DOCTYPE: java.util.Map<java.lang.ClassLoader,java.util.Queue<javax.xml.parsers.DocumentBuilder>>;
                    _parserPoolSize: int;
                    new(): XMLParserImpl;
                  }
                  let XMLParserImpl: _XMLParserImpl$$static;
                  interface _XMLParserImpl {
                    parse(inputStream: java.io.InputStream, disallowDocTypeDeclarations: boolean): org.w3c.dom.Document;
                  }
                  interface XMLParserImpl extends CombineTypes<[_XMLParserImpl, java.lang.Object, com.sun.org.apache.xml.internal.security.parser.XMLParser]> {}
                }
                module signature {
                  module reference {
                    interface _ReferenceData$$static extends ClassLike {
                    }
                    let ReferenceData: _ReferenceData$$static;
                    interface _ReferenceData {
                    }
                    interface ReferenceData extends CombineTypes<[_ReferenceData, java.lang.Object]> {}
                    interface _ReferenceNodeSetData$$static extends ClassLike {
                    }
                    let ReferenceNodeSetData: _ReferenceNodeSetData$$static;
                    interface _ReferenceNodeSetData {
                      iterator(): java.util.Iterator<org.w3c.dom.Node>;
(): java.util.Iterator<org.w3c.dom.Node>;
                    }
                    interface ReferenceNodeSetData extends CombineTypes<[_ReferenceNodeSetData, com.sun.org.apache.xml.internal.security.signature.reference.ReferenceData, java.lang.Object]> {}
                    interface _ReferenceOctetStreamData$$static extends ClassLike {
                      new(octetStream: java.io.InputStream): ReferenceOctetStreamData;
                      new(octetStream: java.io.InputStream, uri: string, mimeType: string): ReferenceOctetStreamData;
                    }
                    let ReferenceOctetStreamData: _ReferenceOctetStreamData$$static;
                    interface _ReferenceOctetStreamData {
                      getMimeType(): string;
                      getOctetStream(): java.io.InputStream;
                      getURI(): string;
                      _mimeType: string;
                      _octetStream: java.io.InputStream;
                      _uri: string;
                    }
                    interface ReferenceOctetStreamData extends CombineTypes<[_ReferenceOctetStreamData, com.sun.org.apache.xml.internal.security.signature.reference.ReferenceData, java.lang.Object]> {}
                    interface _ReferenceSubTreeData$$static extends ClassLike {
                      new(root: org.w3c.dom.Node, excludeComments: boolean): ReferenceSubTreeData;
                    }
                    let ReferenceSubTreeData: _ReferenceSubTreeData$$static;
                    interface _ReferenceSubTreeData {
                      excludeComments(): boolean;
                      getRoot(): org.w3c.dom.Node;
                      iterator(): java.util.Iterator<org.w3c.dom.Node>;
                      _excludeComments: boolean;
                      _root: org.w3c.dom.Node;
                    }
                    interface ReferenceSubTreeData extends CombineTypes<[_ReferenceSubTreeData, com.sun.org.apache.xml.internal.security.signature.reference.ReferenceNodeSetData, java.lang.Object]> {}
                    interface _ReferenceSubTreeData$DelayedNodeIterator$$static extends ClassLike {
                      _new(root: org.w3c.dom.Node, excludeComments: boolean): ReferenceSubTreeData$DelayedNodeIterator;
                    }
                    let ReferenceSubTreeData$DelayedNodeIterator: _ReferenceSubTreeData$DelayedNodeIterator$$static;
                    interface _ReferenceSubTreeData$DelayedNodeIterator {
                      _dereferenceSameDocumentURI(node: org.w3c.dom.Node): java.util.List<org.w3c.dom.Node>;
                      hasNext(): boolean;
                      next(): org.w3c.dom.Node;
                      next(): any;
                      _nodeSetMinusCommentNodes(node: org.w3c.dom.Node, nodeSet: java.util.List<org.w3c.dom.Node>, prevSibling: org.w3c.dom.Node): void;
                      remove(): void;
                      _li: java.util.ListIterator<org.w3c.dom.Node>;
                      _nodeSet: java.util.List<org.w3c.dom.Node>;
                      _root: org.w3c.dom.Node;
                      _withComments: boolean;
                    }
                    interface ReferenceSubTreeData$DelayedNodeIterator extends CombineTypes<[_ReferenceSubTreeData$DelayedNodeIterator, java.util.Iterator<org.w3c.dom.Node>, java.lang.Object]> {}
                  }
                  interface _InvalidDigestValueException$$static extends ClassLike {
                    _serialVersionUID: long;
                    new(): InvalidDigestValueException;
                    new(msgID: string): InvalidDigestValueException;
                    new(msgID: string, exArgs: any[]): InvalidDigestValueException;
                    new(originalException: java.lang.Exception, msgID: string): InvalidDigestValueException;
                    new(msgID: string, originalException: java.lang.Exception): InvalidDigestValueException;
                    new(originalException: java.lang.Exception, msgID: string, exArgs: any[]): InvalidDigestValueException;
                    new(msgID: string, exArgs: any[], originalException: java.lang.Exception): InvalidDigestValueException;
                  }
                  let InvalidDigestValueException: _InvalidDigestValueException$$static;
                  interface _InvalidDigestValueException {
                  }
                  interface InvalidDigestValueException extends CombineTypes<[_InvalidDigestValueException, com.sun.org.apache.xml.internal.security.signature.XMLSignatureException]> {}
                  interface _InvalidSignatureValueException$$static extends ClassLike {
                    _serialVersionUID: long;
                    new(): InvalidSignatureValueException;
                    new(msgID: string): InvalidSignatureValueException;
                    new(msgID: string, exArgs: any[]): InvalidSignatureValueException;
                    new(originalException: java.lang.Exception, msgID: string): InvalidSignatureValueException;
                    new(msgID: string, originalException: java.lang.Exception): InvalidSignatureValueException;
                    new(originalException: java.lang.Exception, msgID: string, exArgs: any[]): InvalidSignatureValueException;
                    new(msgID: string, exArgs: any[], originalException: java.lang.Exception): InvalidSignatureValueException;
                  }
                  let InvalidSignatureValueException: _InvalidSignatureValueException$$static;
                  interface _InvalidSignatureValueException {
                  }
                  interface InvalidSignatureValueException extends CombineTypes<[_InvalidSignatureValueException, com.sun.org.apache.xml.internal.security.signature.XMLSignatureException]> {}
                  interface _Manifest$$static extends ClassLike {
                    _LOG: org.slf4j.internal.Logger;
                    readonly MAXIMUM_REFERENCE_COUNT: int;
                    _referenceCount: int;
                    new(doc: org.w3c.dom.Document): Manifest;
                    new(element: org.w3c.dom.Element, baseURI: string): Manifest;
                    new(element: org.w3c.dom.Element, baseURI: string, secureValidation: boolean): Manifest;
                  }
                  let Manifest: _Manifest$$static;
                  interface _Manifest {
                    addDocument(baseURI: string, referenceURI: string, transforms: security.transforms.Transforms, digestURI: string, referenceId: string, referenceType: string): void;
                    addResourceResolver(resolver: security.utils.resolver.ResourceResolverSpi): void;
                    generateDigestValues(): void;
                    getBaseLocalName(): string;
                    getId(): string;
                    getLength(): int;
                    getPerManifestResolvers(): java.util.List<security.utils.resolver.ResourceResolverSpi>;
                    getReferencedContentAfterTransformsItem(i: int): XMLSignatureInput;
                    getReferencedContentBeforeTransformsItem(i: int): XMLSignatureInput;
                    getResolverProperties(): java.util.Map<string,string>;
                    getResolverProperty(key: string): string;
                    getSignedContentItem(i: int): byte[];
                    getSignedContentLength(): int;
                    getVerificationResult(index: int): boolean;
                    getVerificationResults(): java.util.List<VerifiedReference>;
                    isSecureValidation(): boolean;
                    item(i: int): Reference;
                    setId(Id: string): void;
                    setResolverProperty(key: string, value: string): void;
                    verifyReferences(): boolean;
                    verifyReferences(followManifests: boolean): boolean;
                    _perManifestResolvers: java.util.List<security.utils.resolver.ResourceResolverSpi>;
                    _references: java.util.List<Reference>;
                    _referencesEl: org.w3c.dom.Element[];
                    _resolverProperties: java.util.Map<string,string>;
                    _secureValidation: boolean;
                    _verificationResults: java.util.List<VerifiedReference>;
                  }
                  interface Manifest extends CombineTypes<[_Manifest, com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy]> {}
                  interface _MissingResourceFailureException$$static extends ClassLike {
                    _serialVersionUID: long;
                    new(reference: Reference, msgID: string): MissingResourceFailureException;
                    new(msgID: string, reference: Reference): MissingResourceFailureException;
                    new(reference: Reference, msgID: string, exArgs: any[]): MissingResourceFailureException;
                    new(msgID: string, exArgs: any[], reference: Reference): MissingResourceFailureException;
                    new(originalException: java.lang.Exception, reference: Reference, msgID: string): MissingResourceFailureException;
                    new(msgID: string, originalException: java.lang.Exception, reference: Reference): MissingResourceFailureException;
                    new(originalException: java.lang.Exception, reference: Reference, msgID: string, exArgs: any[]): MissingResourceFailureException;
                    new(msgID: string, exArgs: any[], originalException: java.lang.Exception, reference: Reference): MissingResourceFailureException;
                  }
                  let MissingResourceFailureException: _MissingResourceFailureException$$static;
                  interface _MissingResourceFailureException {
                    getReference(): Reference;
                    setReference(reference: Reference): void;
                    _uninitializedReference: Reference;
                  }
                  interface MissingResourceFailureException extends CombineTypes<[_MissingResourceFailureException, com.sun.org.apache.xml.internal.security.signature.XMLSignatureException]> {}
                  interface _NodeFilter$$static extends ClassLike {
                  }
                  let NodeFilter: _NodeFilter$$static;
                  interface _NodeFilter {
                    isNodeInclude(a0: org.w3c.dom.Node): int;
                    isNodeIncludeDO(a0: org.w3c.dom.Node, a1: int): int;
                  }
                  interface NodeFilter extends CombineTypes<[_NodeFilter, java.lang.Object]> {}
                  interface _ObjectContainer$$static extends ClassLike {
                    new(doc: org.w3c.dom.Document): ObjectContainer;
                    new(element: org.w3c.dom.Element, baseURI: string): ObjectContainer;
                  }
                  let ObjectContainer: _ObjectContainer$$static;
                  interface _ObjectContainer {
                    appendChild(node: org.w3c.dom.Node): org.w3c.dom.Node;
                    getBaseLocalName(): string;
                    getEncoding(): string;
                    getId(): string;
                    getMimeType(): string;
                    setEncoding(Encoding: string): void;
                    setId(Id: string): void;
                    setMimeType(MimeType: string): void;
                  }
                  interface ObjectContainer extends CombineTypes<[_ObjectContainer, com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy]> {}
                  interface _Reference$$static extends ClassLike {
                    _LOG: org.slf4j.internal.Logger;
                    readonly MANIFEST_URI: string;
                    readonly MAXIMUM_TRANSFORM_COUNT: int;
                    readonly OBJECT_URI: string;
                    _TRANSFORM_ALGORITHMS: java.util.Set<string>;
                    _useC14N11: boolean;
                    _new(doc: org.w3c.dom.Document, baseURI: string, referenceURI: string, manifest: Manifest, transforms: security.transforms.Transforms, messageDigestAlgorithm: string): Reference;
                    _new(element: org.w3c.dom.Element, baseURI: string, manifest: Manifest): Reference;
                    _new(element: org.w3c.dom.Element, baseURI: string, manifest: Manifest, secureValidation: boolean): Reference;
                  }
                  let Reference: _Reference$$static;
                  interface _Reference {
                    _cacheDereferencedElement(input: XMLSignatureInput): void;
                    _calculateDigest(validating: boolean): byte[];
                    _dereferenceURIandPerformTransforms(os: java.io.OutputStream): XMLSignatureInput;
                    generateDigestValue(): void;
                    getBaseLocalName(): string;
                    _getContentsAfterTransformation(input: XMLSignatureInput, os: java.io.OutputStream): XMLSignatureInput;
                    getContentsAfterTransformation(): XMLSignatureInput;
                    getContentsBeforeTransformation(): XMLSignatureInput;
                    getDigestValue(): byte[];
                    getHTMLRepresentation(): string;
                    getId(): string;
                    getMessageDigestAlgorithm(): security.algorithms.MessageDigestAlgorithm;
                    getNodesetBeforeFirstCanonicalization(): XMLSignatureInput;
                    _getPreCalculatedDigest(input: XMLSignatureInput): byte[];
                    getReferenceData(): signature.reference.ReferenceData;
                    getReferencedBytes(): byte[];
                    getTransforms(): security.transforms.Transforms;
                    getTransformsOutput(): XMLSignatureInput;
                    getType(): string;
                    getURI(): string;
                    _setDigestValueElement(digestValue: byte[]): void;
                    setId(id: string): void;
                    setType(type: string): void;
                    setURI(uri: string): void;
                    typeIsReferenceToManifest(): boolean;
                    typeIsReferenceToObject(): boolean;
                    verify(): boolean;
                    _digestMethodElem: org.w3c.dom.Element;
                    _digestValueElement: org.w3c.dom.Element;
                    _manifest: Manifest;
                    _referenceData: reference.ReferenceData;
                    _secureValidation: boolean;
                    _transforms: security.transforms.Transforms;
                    _transformsOutput: XMLSignatureInput;
                  }
                  interface Reference extends CombineTypes<[_Reference, com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy]> {}
                  interface _ReferenceNotInitializedException$$static extends ClassLike {
                    _serialVersionUID: long;
                    new(): ReferenceNotInitializedException;
                    new(ex: java.lang.Exception): ReferenceNotInitializedException;
                    new(msgID: string): ReferenceNotInitializedException;
                    new(msgID: string, exArgs: any[]): ReferenceNotInitializedException;
                    new(originalException: java.lang.Exception, msgID: string): ReferenceNotInitializedException;
                    new(msgID: string, originalException: java.lang.Exception): ReferenceNotInitializedException;
                    new(originalException: java.lang.Exception, msgID: string, exArgs: any[]): ReferenceNotInitializedException;
                    new(msgID: string, exArgs: any[], originalException: java.lang.Exception): ReferenceNotInitializedException;
                  }
                  let ReferenceNotInitializedException: _ReferenceNotInitializedException$$static;
                  interface _ReferenceNotInitializedException {
                  }
                  interface ReferenceNotInitializedException extends CombineTypes<[_ReferenceNotInitializedException, com.sun.org.apache.xml.internal.security.signature.XMLSignatureException]> {}
                  interface _SignatureProperties$$static extends ClassLike {
                    new(doc: org.w3c.dom.Document): SignatureProperties;
                    new(element: org.w3c.dom.Element, baseURI: string): SignatureProperties;
                  }
                  let SignatureProperties: _SignatureProperties$$static;
                  interface _SignatureProperties {
                    addSignatureProperty(sp: SignatureProperty): void;
                    getBaseLocalName(): string;
                    getId(): string;
                    getLength(): int;
                    item(i: int): SignatureProperty;
                    setId(Id: string): void;
                  }
                  interface SignatureProperties extends CombineTypes<[_SignatureProperties, com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy]> {}
                  interface _SignatureProperty$$static extends ClassLike {
                    new(doc: org.w3c.dom.Document, target: string): SignatureProperty;
                    new(doc: org.w3c.dom.Document, target: string, id: string): SignatureProperty;
                    new(element: org.w3c.dom.Element, baseURI: string): SignatureProperty;
                  }
                  let SignatureProperty: _SignatureProperty$$static;
                  interface _SignatureProperty {
                    appendChild(node: org.w3c.dom.Node): org.w3c.dom.Node;
                    getBaseLocalName(): string;
                    getId(): string;
                    getTarget(): string;
                    setId(id: string): void;
                    setTarget(target: string): void;
                  }
                  interface SignatureProperty extends CombineTypes<[_SignatureProperty, com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy]> {}
                  interface _SignedInfo$$static extends ClassLike {
                    new(doc: org.w3c.dom.Document): SignedInfo;
                    new(doc: org.w3c.dom.Document, signatureMethodURI: string, canonicalizationMethodURI: string): SignedInfo;
                    new(doc: org.w3c.dom.Document, signatureMethodURI: string, canonicalizationMethodURI: string, provider: java.security.Provider): SignedInfo;
                    new(doc: org.w3c.dom.Document, signatureMethodURI: string, hMACOutputLength: int, canonicalizationMethodURI: string): SignedInfo;
                    new(doc: org.w3c.dom.Document, signatureMethodURI: string, hMACOutputLength: int, canonicalizationMethodURI: string, provider: java.security.Provider, spec: java.security.spec.AlgorithmParameterSpec): SignedInfo;
                    new(doc: org.w3c.dom.Document, signatureMethodElem: org.w3c.dom.Element, canonicalizationMethodElem: org.w3c.dom.Element): SignedInfo;
                    new(doc: org.w3c.dom.Document, signatureMethodElem: org.w3c.dom.Element, canonicalizationMethodElem: org.w3c.dom.Element, provider: java.security.Provider): SignedInfo;
                    new(element: org.w3c.dom.Element, baseURI: string): SignedInfo;
                    new(element: org.w3c.dom.Element, baseURI: string, secureValidation: boolean): SignedInfo;
                    new(element: org.w3c.dom.Element, baseURI: string, secureValidation: boolean, provider: java.security.Provider): SignedInfo;
                  }
                  let SignedInfo: _SignedInfo$$static;
                  interface _SignedInfo {
                    createSecretKey(secretKeyBytes: byte[]): javax.crypto.SecretKey;
                    getBaseLocalName(): string;
                    getCanonicalizationMethodURI(): string;
                    getCanonicalizedOctetStream(): byte[];
                    getInclusiveNamespaces(): string;
                    getSignatureAlgorithm(): security.algorithms.SignatureAlgorithm;
                    getSignatureMethodElement(): org.w3c.dom.Element;
                    getSignatureMethodURI(): string;
                    signInOctetStream(os: java.io.OutputStream): void;
                    verify(): boolean;
                    verify(followManifests: boolean): boolean;
                    _c14nMethod: org.w3c.dom.Element;
                    _c14nizedBytes: byte[];
                    _signatureAlgorithm: security.algorithms.SignatureAlgorithm;
                    _signatureMethod: org.w3c.dom.Element;
                  }
                  interface SignedInfo extends CombineTypes<[_SignedInfo, com.sun.org.apache.xml.internal.security.signature.Manifest]> {}
                  interface _VerifiedReference$$static extends ClassLike {
                    new(valid: boolean, uri: string, manifestReferences: java.util.List<VerifiedReference>): VerifiedReference;
                  }
                  let VerifiedReference: _VerifiedReference$$static;
                  interface _VerifiedReference {
                    getManifestReferences(): java.util.List<VerifiedReference>;
                    getUri(): string;
                    isValid(): boolean;
                    _manifestReferences: java.util.List<VerifiedReference>;
                    _uri: string;
                    _valid: boolean;
                  }
                  interface VerifiedReference extends CombineTypes<[_VerifiedReference, java.lang.Object]> {}
                  interface _XMLSignature$$static extends ClassLike {
                    readonly ALGO_ID_MAC_HMAC_NOT_RECOMMENDED_MD5: string;
                    readonly ALGO_ID_MAC_HMAC_RIPEMD160: string;
                    readonly ALGO_ID_MAC_HMAC_SHA1: string;
                    readonly ALGO_ID_MAC_HMAC_SHA224: string;
                    readonly ALGO_ID_MAC_HMAC_SHA256: string;
                    readonly ALGO_ID_MAC_HMAC_SHA384: string;
                    readonly ALGO_ID_MAC_HMAC_SHA512: string;
                    readonly ALGO_ID_SIGNATURE_DSA: string;
                    readonly ALGO_ID_SIGNATURE_DSA_SHA256: string;
                    readonly ALGO_ID_SIGNATURE_ECDSA_RIPEMD160: string;
                    readonly ALGO_ID_SIGNATURE_ECDSA_SHA1: string;
                    readonly ALGO_ID_SIGNATURE_ECDSA_SHA224: string;
                    readonly ALGO_ID_SIGNATURE_ECDSA_SHA256: string;
                    readonly ALGO_ID_SIGNATURE_ECDSA_SHA384: string;
                    readonly ALGO_ID_SIGNATURE_ECDSA_SHA512: string;
                    readonly ALGO_ID_SIGNATURE_EDDSA_ED25519: string;
                    readonly ALGO_ID_SIGNATURE_EDDSA_ED448: string;
                    readonly ALGO_ID_SIGNATURE_NOT_RECOMMENDED_RSA_MD5: string;
                    readonly ALGO_ID_SIGNATURE_RSA: string;
                    readonly ALGO_ID_SIGNATURE_RSA_PSS: string;
                    readonly ALGO_ID_SIGNATURE_RSA_RIPEMD160: string;
                    readonly ALGO_ID_SIGNATURE_RSA_SHA1: string;
                    readonly ALGO_ID_SIGNATURE_RSA_SHA1_MGF1: string;
                    readonly ALGO_ID_SIGNATURE_RSA_SHA224: string;
                    readonly ALGO_ID_SIGNATURE_RSA_SHA224_MGF1: string;
                    readonly ALGO_ID_SIGNATURE_RSA_SHA256: string;
                    readonly ALGO_ID_SIGNATURE_RSA_SHA256_MGF1: string;
                    readonly ALGO_ID_SIGNATURE_RSA_SHA384: string;
                    readonly ALGO_ID_SIGNATURE_RSA_SHA384_MGF1: string;
                    readonly ALGO_ID_SIGNATURE_RSA_SHA3_224_MGF1: string;
                    readonly ALGO_ID_SIGNATURE_RSA_SHA3_256_MGF1: string;
                    readonly ALGO_ID_SIGNATURE_RSA_SHA3_384_MGF1: string;
                    readonly ALGO_ID_SIGNATURE_RSA_SHA3_512_MGF1: string;
                    readonly ALGO_ID_SIGNATURE_RSA_SHA512: string;
                    readonly ALGO_ID_SIGNATURE_RSA_SHA512_MGF1: string;
                    _LOG: org.slf4j.internal.Logger;
                    _MODE_SIGN: int;
                    _MODE_VERIFY: int;
                    new(doc: org.w3c.dom.Document, baseURI: string, signatureMethodURI: string): XMLSignature;
                    new(doc: org.w3c.dom.Document, baseURI: string, signatureMethodURI: string, provider: java.security.Provider): XMLSignature;
                    new(doc: org.w3c.dom.Document, baseURI: string, signatureMethodURI: string, hmacOutputLength: int): XMLSignature;
                    new(doc: org.w3c.dom.Document, baseURI: string, signatureMethodURI: string, hmacOutputLength: int, provider: java.security.Provider): XMLSignature;
                    new(doc: org.w3c.dom.Document, baseURI: string, signatureMethodURI: string, canonicalizationMethodURI: string): XMLSignature;
                    new(doc: org.w3c.dom.Document, baseURI: string, signatureMethodURI: string, canonicalizationMethodURI: string, provider: java.security.Provider): XMLSignature;
                    new(doc: org.w3c.dom.Document, baseURI: string, signatureMethodURI: string, hmacOutputLength: int, canonicalizationMethodURI: string): XMLSignature;
                    new(doc: org.w3c.dom.Document, baseURI: string, signatureMethodURI: string, hmacOutputLength: int, canonicalizationMethodURI: string, provider: java.security.Provider, spec: java.security.spec.AlgorithmParameterSpec): XMLSignature;
                    new(doc: org.w3c.dom.Document, baseURI: string, signatureMethodElem: org.w3c.dom.Element, canonicalizationMethodElem: org.w3c.dom.Element): XMLSignature;
                    new(doc: org.w3c.dom.Document, baseURI: string, signatureMethodElem: org.w3c.dom.Element, canonicalizationMethodElem: org.w3c.dom.Element, provider: java.security.Provider): XMLSignature;
                    new(element: org.w3c.dom.Element, baseURI: string): XMLSignature;
                    new(element: org.w3c.dom.Element, baseURI: string, provider: java.security.Provider): XMLSignature;
                    new(element: org.w3c.dom.Element, baseURI: string, secureValidation: boolean): XMLSignature;
                    new(element: org.w3c.dom.Element, baseURI: string, secureValidation: boolean, provider: java.security.Provider): XMLSignature;
                  }
                  let XMLSignature: _XMLSignature$$static;
                  interface _XMLSignature {
                    addDocument(referenceURI: string, trans: security.transforms.Transforms, digestURI: string, referenceId: string, referenceType: string): void;
                    addDocument(referenceURI: string, trans: security.transforms.Transforms, digestURI: string): void;
                    addDocument(referenceURI: string, trans: security.transforms.Transforms): void;
                    addDocument(referenceURI: string): void;
                    addKeyInfo(cert: java.security.cert.X509Certificate): void;
                    addKeyInfo(pk: java.security.PublicKey): void;
                    addResourceResolver(resolver: security.utils.resolver.ResourceResolverSpi): void;
                    appendObject(object: ObjectContainer): void;
                    checkSignatureValue(cert: java.security.cert.X509Certificate): boolean;
                    checkSignatureValue(pk: java.security.Key): boolean;
                    createSecretKey(secretKeyBytes: byte[]): javax.crypto.SecretKey;
                    getBaseLocalName(): string;
                    getId(): string;
                    getKeyInfo(): security.keys.KeyInfo;
                    getObjectItem(i: int): ObjectContainer;
                    getObjectLength(): int;
                    getSignatureValue(): byte[];
                    getSignedInfo(): SignedInfo;
                    setFollowNestedManifests(followManifests: boolean): void;
                    setId(id: string): void;
                    _setSignatureValueElement(bytes: byte[]): void;
                    sign(signingKey: java.security.Key): void;
                    _followManifestsDuringValidation: boolean;
                    _keyInfo: security.keys.KeyInfo;
                    _signatureValueElement: org.w3c.dom.Element;
                    _signedInfo: SignedInfo;
                    _state: int;
                  }
                  interface XMLSignature extends CombineTypes<[_XMLSignature, com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy]> {}
                  interface _XMLSignatureException$$static extends ClassLike {
                    _serialVersionUID: long;
                    new(): XMLSignatureException;
                    new(ex: java.lang.Exception): XMLSignatureException;
                    new(msgID: string): XMLSignatureException;
                    new(msgID: string, exArgs: any[]): XMLSignatureException;
                    new(originalException: java.lang.Exception, msgID: string): XMLSignatureException;
                    new(msgID: string, originalException: java.lang.Exception): XMLSignatureException;
                    new(originalException: java.lang.Exception, msgID: string, exArgs: any[]): XMLSignatureException;
                    new(msgID: string, exArgs: any[], originalException: java.lang.Exception): XMLSignatureException;
                  }
                  let XMLSignatureException: _XMLSignatureException$$static;
                  interface _XMLSignatureException {
                  }
                  interface XMLSignatureException extends CombineTypes<[_XMLSignatureException, com.sun.org.apache.xml.internal.security.exceptions.XMLSecurityException]> {}
                  interface _XMLSignatureInput$$static extends ClassLike {
                    new(inputOctets: byte[]): XMLSignatureInput;
                    new(inputOctetStream: java.io.InputStream): XMLSignatureInput;
                    new(rootNode: org.w3c.dom.Node): XMLSignatureInput;
                    new(inputNodeSet: java.util.Set<org.w3c.dom.Node>): XMLSignatureInput;
                    new(preCalculatedDigest: string): XMLSignatureInput;
                  }
                  let XMLSignatureInput: _XMLSignatureInput$$static;
                  interface _XMLSignatureInput {
                    addNodeFilter(filter: NodeFilter): void;
                    _convertToNodes(): void;
                    getBytes(): byte[];
                    _getBytesFromInputStream(): byte[];
                    getExcludeNode(): org.w3c.dom.Node;
                    getHTMLRepresentation(): string;
                    getHTMLRepresentation(inclusiveNamespaces: java.util.Set<string>): string;
                    getInputNodeSet(): java.util.Set<org.w3c.dom.Node>;
                    getMIMEType(): string;
                    getNodeFilters(): java.util.List<NodeFilter>;
                    getNodeSet(): java.util.Set<org.w3c.dom.Node>;
                    getNodeSet(circumvent: boolean): java.util.Set<org.w3c.dom.Node>;
                    getOctetStream(): java.io.InputStream;
                    getOctetStreamReal(): java.io.InputStream;
                    getPreCalculatedDigest(): string;
                    getSourceURI(): string;
                    getSubNode(): org.w3c.dom.Node;
                    isByteArray(): boolean;
                    isElement(): boolean;
                    isExcludeComments(): boolean;
                    isInitialized(): boolean;
                    isNeedsToBeExpanded(): boolean;
                    isNodeSet(): boolean;
                    isOctetStream(): boolean;
                    isOutputStreamSet(): boolean;
                    isPreCalculatedDigest(): boolean;
                    isSecureValidation(): boolean;
                    setExcludeComments(excludeComments: boolean): void;
                    setExcludeNode(excludeNode: org.w3c.dom.Node): void;
                    setMIMEType(mimeType: string): void;
                    setNeedsToBeExpanded(needsToBeExpanded: boolean): void;
                    setNodeSet(b: boolean): void;
                    setOutputStream(os: java.io.OutputStream): void;
                    setSecureValidation(secureValidation: boolean): void;
                    setSourceURI(sourceURI: string): void;
                    toString(): string;
                    updateOutputStream(diOs: java.io.OutputStream): void;
                    updateOutputStream(diOs: java.io.OutputStream, c14n11: boolean): void;
                    _bytes: byte[];
                    _excludeComments: boolean;
                    _excludeNode: org.w3c.dom.Node;
                    _inputNodeSet: java.util.Set<org.w3c.dom.Node>;
                    _inputOctetStreamProxy: java.io.InputStream;
                    _isNodeSet: boolean;
                    _mimeType: string;
                    _needsToBeExpanded: boolean;
                    _nodeFilters: java.util.List<NodeFilter>;
                    _outputStream: java.io.OutputStream;
                    _preCalculatedDigest: string;
                    _secureValidation: boolean;
                    _sourceURI: string;
                    _subNode: org.w3c.dom.Node;
                  }
                  interface XMLSignatureInput extends CombineTypes<[_XMLSignatureInput, java.lang.Object]> {}
                  interface _XMLSignatureInputDebugger$$static extends ClassLike {
                    _ATTR_COMPARE: security.c14n.helper.AttrCompare;
                    _HTMLExcludePrefix: string;
                    _HTMLExcludedInclusiveNamespacePrefix: string;
                    _HTMLIncludeOrExcludeSuffix: string;
                    _HTMLIncludePrefix: string;
                    _HTMLIncludedInclusiveNamespacePrefix: string;
                    _HTMLPrefix: string;
                    _HTMLSuffix: string;
                    _NODE_AFTER_DOCUMENT_ELEMENT: int;
                    _NODE_BEFORE_DOCUMENT_ELEMENT: int;
                    _NODE_NOT_BEFORE_OR_AFTER_DOCUMENT_ELEMENT: int;
                    new(xmlSignatureInput: XMLSignatureInput): XMLSignatureInputDebugger;
                    new(xmlSignatureInput: XMLSignatureInput, inclusiveNamespace: java.util.Set<string>): XMLSignatureInputDebugger;
                  }
                  let XMLSignatureInputDebugger: _XMLSignatureInputDebugger$$static;
                  interface _XMLSignatureInputDebugger {
                    _canonicalizeXPathNodeSet(currentNode: org.w3c.dom.Node): void;
                    getHTMLRepresentation(): string;
                    _getPositionRelativeToDocumentElement(currentNode: org.w3c.dom.Node): int;
                    _outputAttrToWriter(name: string, value: string): void;
                    _outputCommentToWriter(currentComment: org.w3c.dom.Comment): void;
                    _outputPItoWriter(currentPI: org.w3c.dom.ProcessingInstruction): void;
                    _outputTextToWriter(text: string): void;
                    _inclusiveNamespaces: java.util.Set<string>;
                    _writer: java.io.Writer;
                    _xpathNodeSet: java.util.Set<org.w3c.dom.Node>;
                  }
                  interface XMLSignatureInputDebugger extends CombineTypes<[_XMLSignatureInputDebugger, java.lang.Object]> {}
                }
                module transforms {
                  module implementations {
                    interface _FuncHere$$static extends ClassLike {
                      _serialVersionUID: long;
                      new(): FuncHere;
                    }
                    let FuncHere: _FuncHere$$static;
                    interface _FuncHere {
                      execute(xctxt: apache.xpath.internal.XPathContext): apache.xpath.internal.objects.XObject;
                      fixupVariables(vars: java.util.List<internal.utils.QName>, globalsSize: int): void;
                    }
                    interface FuncHere extends CombineTypes<[_FuncHere, com.sun.org.apache.xpath.internal.functions.Function]> {}
                    interface _TransformBase64Decode$$static extends ClassLike {
                      new(): TransformBase64Decode;
                    }
                    let TransformBase64Decode: _TransformBase64Decode$$static;
                    interface _TransformBase64Decode {
                      _engineGetURI(): string;
                      _enginePerformTransform(input: security.signature.XMLSignatureInput, os: java.io.OutputStream, transformElement: org.w3c.dom.Element, baseURI: string, secureValidation: boolean): security.signature.XMLSignatureInput;
                      _traverseElement(node: org.w3c.dom.Element, sb: TransformBase64Decode$stringBuilder): void;
                    }
                    interface TransformBase64Decode extends CombineTypes<[_TransformBase64Decode, com.sun.org.apache.xml.internal.security.transforms.TransformSpi]> {}
                    interface _TransformC14N$$static extends ClassLike {
                      new(): TransformC14N;
                    }
                    let TransformC14N: _TransformC14N$$static;
                    interface _TransformC14N {
                      _engineGetURI(): string;
                      _enginePerformTransform(input: security.signature.XMLSignatureInput, os: java.io.OutputStream, transformElement: org.w3c.dom.Element, baseURI: string, secureValidation: boolean): security.signature.XMLSignatureInput;
                      _getCanonicalizer(): security.c14n.implementations.Canonicalizer20010315;
                    }
                    interface TransformC14N extends CombineTypes<[_TransformC14N, com.sun.org.apache.xml.internal.security.transforms.TransformSpi]> {}
                    interface _TransformC14N11$$static extends ClassLike {
                      new(): TransformC14N11;
                    }
                    let TransformC14N11: _TransformC14N11$$static;
                    interface _TransformC14N11 {
                      _engineGetURI(): string;
                      _getCanonicalizer(): security.c14n.implementations.Canonicalizer20010315;
                    }
                    interface TransformC14N11 extends CombineTypes<[_TransformC14N11, com.sun.org.apache.xml.internal.security.transforms.implementations.TransformC14N]> {}
                    interface _TransformC14N11_WithComments$$static extends ClassLike {
                      new(): TransformC14N11_WithComments;
                    }
                    let TransformC14N11_WithComments: _TransformC14N11_WithComments$$static;
                    interface _TransformC14N11_WithComments {
                      _engineGetURI(): string;
                      _getCanonicalizer(): security.c14n.implementations.Canonicalizer20010315;
                    }
                    interface TransformC14N11_WithComments extends CombineTypes<[_TransformC14N11_WithComments, com.sun.org.apache.xml.internal.security.transforms.implementations.TransformC14N]> {}
                    interface _TransformC14NExclusive$$static extends ClassLike {
                      new(): TransformC14NExclusive;
                    }
                    let TransformC14NExclusive: _TransformC14NExclusive$$static;
                    interface _TransformC14NExclusive {
                      _engineGetURI(): string;
                      _enginePerformTransform(input: security.signature.XMLSignatureInput, os: java.io.OutputStream, transformElement: org.w3c.dom.Element, baseURI: string, secureValidation: boolean): security.signature.XMLSignatureInput;
                      _getCanonicalizer(): security.c14n.implementations.Canonicalizer20010315Excl;
                      _length(element: org.w3c.dom.Element, namespace: string, localname: string): int;
                    }
                    interface TransformC14NExclusive extends CombineTypes<[_TransformC14NExclusive, com.sun.org.apache.xml.internal.security.transforms.TransformSpi]> {}
                    interface _TransformC14NExclusiveWithComments$$static extends ClassLike {
                      new(): TransformC14NExclusiveWithComments;
                    }
                    let TransformC14NExclusiveWithComments: _TransformC14NExclusiveWithComments$$static;
                    interface _TransformC14NExclusiveWithComments {
                      _engineGetURI(): string;
                      _getCanonicalizer(): security.c14n.implementations.Canonicalizer20010315Excl;
                    }
                    interface TransformC14NExclusiveWithComments extends CombineTypes<[_TransformC14NExclusiveWithComments, com.sun.org.apache.xml.internal.security.transforms.implementations.TransformC14NExclusive]> {}
                    interface _TransformC14NWithComments$$static extends ClassLike {
                      new(): TransformC14NWithComments;
                    }
                    let TransformC14NWithComments: _TransformC14NWithComments$$static;
                    interface _TransformC14NWithComments {
                      _engineGetURI(): string;
                      _getCanonicalizer(): security.c14n.implementations.Canonicalizer20010315;
                    }
                    interface TransformC14NWithComments extends CombineTypes<[_TransformC14NWithComments, com.sun.org.apache.xml.internal.security.transforms.implementations.TransformC14N]> {}
                    interface _TransformEnvelopedSignature$$static extends ClassLike {
                      _searchSignatureElement(signatureElement: org.w3c.dom.Node): org.w3c.dom.Node;
                      new(): TransformEnvelopedSignature;
                    }
                    let TransformEnvelopedSignature: _TransformEnvelopedSignature$$static;
                    interface _TransformEnvelopedSignature {
                      _engineGetURI(): string;
                      _enginePerformTransform(input: security.signature.XMLSignatureInput, os: java.io.OutputStream, transformElement: org.w3c.dom.Element, baseURI: string, secureValidation: boolean): security.signature.XMLSignatureInput;
                    }
                    interface TransformEnvelopedSignature extends CombineTypes<[_TransformEnvelopedSignature, com.sun.org.apache.xml.internal.security.transforms.TransformSpi]> {}
                    interface _TransformEnvelopedSignature$EnvelopedNodeFilter$$static extends ClassLike {
                      _new(n: org.w3c.dom.Node): TransformEnvelopedSignature$EnvelopedNodeFilter;
                    }
                    let TransformEnvelopedSignature$EnvelopedNodeFilter: _TransformEnvelopedSignature$EnvelopedNodeFilter$$static;
                    interface _TransformEnvelopedSignature$EnvelopedNodeFilter {
                      isNodeInclude(n: org.w3c.dom.Node): int;
                      isNodeIncludeDO(n: org.w3c.dom.Node, level: int): int;
                      _exclude: org.w3c.dom.Node;
                    }
                    interface TransformEnvelopedSignature$EnvelopedNodeFilter extends CombineTypes<[_TransformEnvelopedSignature$EnvelopedNodeFilter, java.lang.Object, com.sun.org.apache.xml.internal.security.signature.NodeFilter]> {}
                    interface _TransformXPath$$static extends ClassLike {
                      _HEREFUNC: boolean;
                      new(): TransformXPath;
                    }
                    let TransformXPath: _TransformXPath$$static;
                    interface _TransformXPath {
                      _engineGetURI(): string;
                      _enginePerformTransform(input: security.signature.XMLSignatureInput, os: java.io.OutputStream, transformElement: org.w3c.dom.Element, baseURI: string, secureValidation: boolean): security.signature.XMLSignatureInput;
                      _getXPathFactory(): security.utils.XPathFactory;
                      _needsCircumvent(str: string): boolean;
                    }
                    interface TransformXPath extends CombineTypes<[_TransformXPath, com.sun.org.apache.xml.internal.security.transforms.TransformSpi]> {}
                    interface _TransformXPath$XPathNodeFilter$$static extends ClassLike {
                      _new(xpathElement: org.w3c.dom.Element, xpathnode: org.w3c.dom.Node, str: string, xPathAPI: security.utils.XPathAPI): TransformXPath$XPathNodeFilter;
                    }
                    let TransformXPath$XPathNodeFilter: _TransformXPath$XPathNodeFilter$$static;
                    interface _TransformXPath$XPathNodeFilter {
                      isNodeInclude(currentNode: org.w3c.dom.Node): int;
                      isNodeIncludeDO(n: org.w3c.dom.Node, level: int): int;
                      _str: string;
                      _xPathAPI: security.utils.XPathAPI;
                      _xpathElement: org.w3c.dom.Element;
                      _xpathnode: org.w3c.dom.Node;
                    }
                    interface TransformXPath$XPathNodeFilter extends CombineTypes<[_TransformXPath$XPathNodeFilter, java.lang.Object, com.sun.org.apache.xml.internal.security.signature.NodeFilter]> {}
                    interface _TransformXPath2Filter$$static extends ClassLike {
                      new(): TransformXPath2Filter;
                    }
                    let TransformXPath2Filter: _TransformXPath2Filter$$static;
                    interface _TransformXPath2Filter {
                      _engineGetURI(): string;
                      _enginePerformTransform(input: security.signature.XMLSignatureInput, os: java.io.OutputStream, transformElement: org.w3c.dom.Element, baseURI: string, secureValidation: boolean): security.signature.XMLSignatureInput;
                    }
                    interface TransformXPath2Filter extends CombineTypes<[_TransformXPath2Filter, com.sun.org.apache.xml.internal.security.transforms.TransformSpi]> {}
                    interface _TransformXSLT$$static extends ClassLike {
                      _LOG: org.slf4j.internal.Logger;
                      _XSLTSTYLESHEET: string;
                      _XSLTSpecNS: string;
                      _defaultXSLTSpecNSprefix: string;
                      new(): TransformXSLT;
                    }
                    let TransformXSLT: _TransformXSLT$$static;
                    interface _TransformXSLT {
                      _engineGetURI(): string;
                      _enginePerformTransform(input: security.signature.XMLSignatureInput, baos: java.io.OutputStream, transformElement: org.w3c.dom.Element, baseURI: string, secureValidation: boolean): security.signature.XMLSignatureInput;
                    }
                    interface TransformXSLT extends CombineTypes<[_TransformXSLT, com.sun.org.apache.xml.internal.security.transforms.TransformSpi]> {}
                    interface _XPath2NodeFilter$$static extends ClassLike {
                      _convertNodeListToSet(l: java.util.List<org.w3c.dom.NodeList>): java.util.Set<org.w3c.dom.Node>;
                      _inList(currentNode: org.w3c.dom.Node, nodeList: java.util.Set<org.w3c.dom.Node>): boolean;
                      _rooted(currentNode: org.w3c.dom.Node, nodeList: java.util.Set<org.w3c.dom.Node>): boolean;
                      _new(unionNodes: java.util.List<org.w3c.dom.NodeList>, subtractNodes: java.util.List<org.w3c.dom.NodeList>, intersectNodes: java.util.List<org.w3c.dom.NodeList>): XPath2NodeFilter;
                    }
                    let XPath2NodeFilter: _XPath2NodeFilter$$static;
                    interface _XPath2NodeFilter {
                      isNodeInclude(currentNode: org.w3c.dom.Node): int;
                      isNodeIncludeDO(n: org.w3c.dom.Node, level: int): int;
                      _hasIntersectFilter: boolean;
                      _hasSubtractFilter: boolean;
                      _hasUnionFilter: boolean;
                      _inIntersect: int;
                      _inSubtract: int;
                      _inUnion: int;
                      _intersectNodes: java.util.Set<org.w3c.dom.Node>;
                      _subtractNodes: java.util.Set<org.w3c.dom.Node>;
                      _unionNodes: java.util.Set<org.w3c.dom.Node>;
                    }
                    interface XPath2NodeFilter extends CombineTypes<[_XPath2NodeFilter, java.lang.Object, com.sun.org.apache.xml.internal.security.signature.NodeFilter]> {}
                  }
                  module params {
                    interface _InclusiveNamespaces$$static extends ClassLike {
                      prefixStr2Set(inclusiveNamespaces: string): java.util.SortedSet<string>;
                      readonly ExclusiveCanonicalizationNamespace: string;
                      readonly _ATT_EC_PREFIXLIST: string;
                      readonly _TAG_EC_INCLUSIVENAMESPACES: string;
                      new(doc: org.w3c.dom.Document, prefixList: string): InclusiveNamespaces;
                      new(doc: org.w3c.dom.Document, prefixes: java.util.Set<string>): InclusiveNamespaces;
                      new(element: org.w3c.dom.Element, baseURI: string): InclusiveNamespaces;
                    }
                    let InclusiveNamespaces: _InclusiveNamespaces$$static;
                    interface _InclusiveNamespaces {
                      getBaseLocalName(): string;
                      getBaseNamespace(): string;
                      getInclusiveNamespaces(): string;
                    }
                    interface InclusiveNamespaces extends CombineTypes<[_InclusiveNamespaces, com.sun.org.apache.xml.internal.security.utils.ElementProxy, com.sun.org.apache.xml.internal.security.transforms.TransformParam]> {}
                    interface _XPath2FilterContainer$$static extends ClassLike {
                      newInstance(element: org.w3c.dom.Element, baseURI: string): XPath2FilterContainer;
                      newInstanceIntersect(doc: org.w3c.dom.Document, xpath2filter: string): XPath2FilterContainer;
                      newInstanceSubtract(doc: org.w3c.dom.Document, xpath2filter: string): XPath2FilterContainer;
                      newInstanceUnion(doc: org.w3c.dom.Document, xpath2filter: string): XPath2FilterContainer;
                      newInstances(doc: org.w3c.dom.Document, params: string[][]): org.w3c.dom.NodeList;
                      readonly INTERSECT: string;
                      readonly SUBTRACT: string;
                      readonly UNION: string;
                      readonly XPathFilter2NS: string;
                      __ATT_FILTER: string;
                      __ATT_FILTER_VALUE_INTERSECT: string;
                      __ATT_FILTER_VALUE_SUBTRACT: string;
                      __ATT_FILTER_VALUE_UNION: string;
                      readonly _TAG_XPATH2: string;
                    }
                    let XPath2FilterContainer: _XPath2FilterContainer$$static;
                    interface _XPath2FilterContainer {
                      getBaseLocalName(): string;
                      getBaseNamespace(): string;
                      getXPathFilterStr(): string;
                      getXPathFilterTextNode(): org.w3c.dom.Node;
                      isIntersect(): boolean;
                      isSubtract(): boolean;
                      isUnion(): boolean;
                    }
                    interface XPath2FilterContainer extends CombineTypes<[_XPath2FilterContainer, com.sun.org.apache.xml.internal.security.utils.ElementProxy, com.sun.org.apache.xml.internal.security.transforms.TransformParam]> {}
                    interface _XPathContainer$$static extends ClassLike {
                      new(doc: org.w3c.dom.Document): XPathContainer;
                    }
                    let XPathContainer: _XPathContainer$$static;
                    interface _XPathContainer {
                      getBaseLocalName(): string;
                      getXPath(): string;
                      setXPath(xpath: string): void;
                    }
                    interface XPathContainer extends CombineTypes<[_XPathContainer, com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy, com.sun.org.apache.xml.internal.security.transforms.TransformParam]> {}
                  }
                  interface _ClassLoaderUtils$$static extends ClassLike {
                    _loadClass(className: string, callingClass: java.lang.Class<any>): java.lang.Class<any>;
                    _loadClass2(className: string, callingClass: java.lang.Class<any>): java.lang.Class<any>;
                    _LOG: org.slf4j.internal.Logger;
                  }
                  let ClassLoaderUtils: _ClassLoaderUtils$$static;
                  interface _ClassLoaderUtils {
                  }
                  interface ClassLoaderUtils extends CombineTypes<[_ClassLoaderUtils, java.lang.Object]> {}
                  interface _InvalidTransformException$$static extends ClassLike {
                    _serialVersionUID: long;
                    new(): InvalidTransformException;
                    new(msgId: string): InvalidTransformException;
                    new(msgId: string, exArgs: any[]): InvalidTransformException;
                    new(originalException: java.lang.Exception, msgId: string): InvalidTransformException;
                    new(msgID: string, originalException: java.lang.Exception): InvalidTransformException;
                    new(originalException: java.lang.Exception, msgId: string, exArgs: any[]): InvalidTransformException;
                    new(msgID: string, exArgs: any[], originalException: java.lang.Exception): InvalidTransformException;
                  }
                  let InvalidTransformException: _InvalidTransformException$$static;
                  interface _InvalidTransformException {
                  }
                  interface InvalidTransformException extends CombineTypes<[_InvalidTransformException, com.sun.org.apache.xml.internal.security.exceptions.XMLSecurityException]> {}
                  interface _Transform$$static extends ClassLike {
                    register(algorithmURI: string, implementingClass: string): void;
                    register(algorithmURI: string, implementingClass: java.lang.Class<TransformSpi>): void;
                    registerDefaultAlgorithms(): void;
                    _LOG: org.slf4j.internal.Logger;
                    _transformSpiHash: java.util.Map<string,TransformSpi>;
                    new(doc: org.w3c.dom.Document, algorithmURI: string): Transform;
                    new(doc: org.w3c.dom.Document, algorithmURI: string, contextChild: org.w3c.dom.Element): Transform;
                    new(doc: org.w3c.dom.Document, algorithmURI: string, contextNodes: org.w3c.dom.NodeList): Transform;
                    new(element: org.w3c.dom.Element, baseURI: string): Transform;
                  }
                  let Transform: _Transform$$static;
                  interface _Transform {
                    getBaseLocalName(): string;
                    getURI(): string;
                    _initializeTransform(algorithmURI: string): TransformSpi;
                    performTransform(input: security.signature.XMLSignatureInput, secureValidation: boolean): security.signature.XMLSignatureInput;
                    performTransform(input: security.signature.XMLSignatureInput, os: java.io.OutputStream, secureValidation: boolean): security.signature.XMLSignatureInput;
                    _transformSpi: TransformSpi;
                  }
                  interface Transform extends CombineTypes<[_Transform, com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy]> {}
                  interface _TransformParam$$static extends ClassLike {
                  }
                  let TransformParam: _TransformParam$$static;
                  interface _TransformParam {
                  }
                  interface TransformParam extends CombineTypes<[_TransformParam, java.lang.Object]> {}
                  interface _TransformSpi$$static extends ClassLike {
                    new(): TransformSpi;
                  }
                  let TransformSpi: _TransformSpi$$static;
                  interface _TransformSpi {
                    _engineGetURI(): string;
                    _enginePerformTransform(a0: security.signature.XMLSignatureInput, a1: java.io.OutputStream, a2: org.w3c.dom.Element, a3: string, a4: boolean): security.signature.XMLSignatureInput;
                  }
                  interface TransformSpi extends CombineTypes<[_TransformSpi, java.lang.Object]> {}
                  interface _TransformationException$$static extends ClassLike {
                    _serialVersionUID: long;
                    new(): TransformationException;
                    new(ex: java.lang.Exception): TransformationException;
                    new(msgID: string): TransformationException;
                    new(msgID: string, exArgs: any[]): TransformationException;
                    new(originalException: java.lang.Exception, msgID: string): TransformationException;
                    new(msgID: string, originalException: java.lang.Exception): TransformationException;
                    new(originalException: java.lang.Exception, msgID: string, exArgs: any[]): TransformationException;
                    new(msgID: string, exArgs: any[], originalException: java.lang.Exception): TransformationException;
                  }
                  let TransformationException: _TransformationException$$static;
                  interface _TransformationException {
                  }
                  interface TransformationException extends CombineTypes<[_TransformationException, com.sun.org.apache.xml.internal.security.exceptions.XMLSecurityException]> {}
                  interface _Transforms$$static extends ClassLike {
                    _LOG: org.slf4j.internal.Logger;
                    readonly TRANSFORM_BASE64_DECODE: string;
                    readonly TRANSFORM_C14N11_OMIT_COMMENTS: string;
                    readonly TRANSFORM_C14N11_WITH_COMMENTS: string;
                    readonly TRANSFORM_C14N_EXCL_OMIT_COMMENTS: string;
                    readonly TRANSFORM_C14N_EXCL_WITH_COMMENTS: string;
                    readonly TRANSFORM_C14N_OMIT_COMMENTS: string;
                    readonly TRANSFORM_C14N_WITH_COMMENTS: string;
                    readonly TRANSFORM_ENVELOPED_SIGNATURE: string;
                    readonly TRANSFORM_XPATH: string;
                    readonly TRANSFORM_XPATH2FILTER: string;
                    readonly TRANSFORM_XPOINTER: string;
                    readonly TRANSFORM_XSLT: string;
                    _new(): Transforms;
                    new(doc: org.w3c.dom.Document): Transforms;
                    new(element: org.w3c.dom.Element, baseURI: string): Transforms;
                  }
                  let Transforms: _Transforms$$static;
                  interface _Transforms {
                    addTransform(transformURI: string): void;
                    addTransform(transformURI: string, contextElement: org.w3c.dom.Element): void;
                    addTransform(transformURI: string, contextNodes: org.w3c.dom.NodeList): void;
                    _addTransform(transform: Transform): void;
                    _checkSecureValidation(transform: Transform): void;
                    getBaseLocalName(): string;
                    getLength(): int;
                    _initTransforms(): void;
                    item(i: int): Transform;
                    performTransforms(xmlSignatureInput: security.signature.XMLSignatureInput): security.signature.XMLSignatureInput;
                    performTransforms(xmlSignatureInput: security.signature.XMLSignatureInput, os: java.io.OutputStream): security.signature.XMLSignatureInput;
                    setSecureValidation(secureValidation: boolean): void;
                    _secureValidation: boolean;
                    _transformsElement: org.w3c.dom.Element[];
                  }
                  interface Transforms extends CombineTypes<[_Transforms, com.sun.org.apache.xml.internal.security.utils.SignatureElementProxy]> {}
                }
                module utils {
                  module resolver {
                    module implementations {
                      interface _ResolverAnonymous$$static extends ClassLike {
                        new(filename: string): ResolverAnonymous;
                        new(resourcePath: java.nio.file.Path): ResolverAnonymous;
                      }
                      let ResolverAnonymous: _ResolverAnonymous$$static;
                      interface _ResolverAnonymous {
                        engineCanResolveURI(context: ResourceResolverContext): boolean;
                        engineResolveURI(context: ResourceResolverContext): security.signature.XMLSignatureInput;
                        _resourcePath: java.nio.file.Path;
                      }
                      interface ResolverAnonymous extends CombineTypes<[_ResolverAnonymous, com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolverSpi]> {}
                      interface _ResolverDirectHTTP$$static extends ClassLike {
                        _getNewURI(uri: string, baseURI: string): java.net.URI;
                        _HttpBasicPass: int;
                        _HttpBasicUser: int;
                        _HttpProxyHost: int;
                        _HttpProxyPass: int;
                        _HttpProxyPort: int;
                        _HttpProxyUser: int;
                        _LOG: org.slf4j.internal.Logger;
                        _properties: string[];
                        new(): ResolverDirectHTTP;
                        new(resolverProperties: java.util.Map<string,string>): ResolverDirectHTTP;
                      }
                      let ResolverDirectHTTP: _ResolverDirectHTTP$$static;
                      interface _ResolverDirectHTTP {
                        engineCanResolveURI(context: ResourceResolverContext): boolean;
                        engineResolveURI(context: ResourceResolverContext): security.signature.XMLSignatureInput;
                        _getProperty(context: ResourceResolverContext, propertyName: string): string;
                        _openConnection(url: java.net.URL, context: ResourceResolverContext): java.net.URLConnection;
                        _resolverProperties: java.util.Map<string,string>;
                      }
                      interface ResolverDirectHTTP extends CombineTypes<[_ResolverDirectHTTP, com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolverSpi]> {}
                      interface _ResolverFragment$$static extends ClassLike {
                        _LOG: org.slf4j.internal.Logger;
                        new(): ResolverFragment;
                      }
                      let ResolverFragment: _ResolverFragment$$static;
                      interface _ResolverFragment {
                        engineCanResolveURI(context: ResourceResolverContext): boolean;
                        engineResolveURI(context: ResourceResolverContext): security.signature.XMLSignatureInput;
                      }
                      interface ResolverFragment extends CombineTypes<[_ResolverFragment, com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolverSpi]> {}
                      interface _ResolverLocalFilesystem$$static extends ClassLike {
                        _getNewURI(uri: string, baseURI: string): java.net.URI;
                        _LOG: org.slf4j.internal.Logger;
                        new(): ResolverLocalFilesystem;
                      }
                      let ResolverLocalFilesystem: _ResolverLocalFilesystem$$static;
                      interface _ResolverLocalFilesystem {
                        engineCanResolveURI(context: ResourceResolverContext): boolean;
                        engineResolveURI(context: ResourceResolverContext): security.signature.XMLSignatureInput;
                      }
                      interface ResolverLocalFilesystem extends CombineTypes<[_ResolverLocalFilesystem, com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolverSpi]> {}
                      interface _ResolverXPointer$$static extends ClassLike {
                        _getXPointerId(uri: string): string;
                        _isXPointerId(uri: string): boolean;
                        _isXPointerSlash(uri: string): boolean;
                        _LOG: org.slf4j.internal.Logger;
                        _XP: string;
                        _XP_LENGTH: int;
                        new(): ResolverXPointer;
                      }
                      let ResolverXPointer: _ResolverXPointer$$static;
                      interface _ResolverXPointer {
                        engineCanResolveURI(context: ResourceResolverContext): boolean;
                        engineResolveURI(context: ResourceResolverContext): security.signature.XMLSignatureInput;
                      }
                      interface ResolverXPointer extends CombineTypes<[_ResolverXPointer, com.sun.org.apache.xml.internal.security.utils.resolver.ResourceResolverSpi]> {}
                    }
                    interface _ClassLoaderUtils$$static extends ClassLike {
                      _loadClass(className: string, callingClass: java.lang.Class<any>): java.lang.Class<any>;
                      _loadClass2(className: string, callingClass: java.lang.Class<any>): java.lang.Class<any>;
                      _LOG: org.slf4j.internal.Logger;
                    }
                    let ClassLoaderUtils: _ClassLoaderUtils$$static;
                    interface _ClassLoaderUtils {
                    }
                    interface ClassLoaderUtils extends CombineTypes<[_ClassLoaderUtils, java.lang.Object]> {}
                    interface _ResourceResolver$$static extends ClassLike {
                      register(className: string): void;
                      register(resourceResolverSpi: ResourceResolverSpi, start: boolean): void;
                      registerAtStart(className: string): void;
                      registerClassNames(classNames: java.util.List<string>): void;
                      registerDefaultResolvers(): void;
                      resolve(context: ResourceResolverContext): security.signature.XMLSignatureInput;
                      resolve(individualResolvers: java.util.List<ResourceResolverSpi>, context: ResourceResolverContext): security.signature.XMLSignatureInput;
                      _LOG: org.slf4j.internal.Logger;
                      _defaultResolversAdded: java.util.concurrent.atomic.AtomicBoolean;
                      _resolverList: java.util.List<ResourceResolverSpi>;
                      new(): ResourceResolver;
                    }
                    let ResourceResolver: _ResourceResolver$$static;
                    interface _ResourceResolver {
                    }
                    interface ResourceResolver extends CombineTypes<[_ResourceResolver, java.lang.Object]> {}
                    interface _ResourceResolverContext$$static extends ClassLike {
                      new(attr: org.w3c.dom.Attr, baseUri: string, secureValidation: boolean): ResourceResolverContext;
                      new(attr: org.w3c.dom.Attr, baseUri: string, secureValidation: boolean, properties: java.util.Map<string,string>): ResourceResolverContext;
                    }
                    let ResourceResolverContext: _ResourceResolverContext$$static;
                    interface _ResourceResolverContext {
                      getProperties(): java.util.Map<string,string>;
                      readonly attr: org.w3c.dom.Attr;
                      readonly baseUri: string;
                      _properties: java.util.Map<string,string>;
                      readonly secureValidation: boolean;
                      readonly uriToResolve: string;
                    }
                    interface ResourceResolverContext extends CombineTypes<[_ResourceResolverContext, java.lang.Object]> {}
                    interface _ResourceResolverException$$static extends ClassLike {
                      _serialVersionUID: long;
                      new(msgID: string, uri: string, baseURI: string): ResourceResolverException;
                      new(msgID: string, exArgs: any[], uri: string, baseURI: string): ResourceResolverException;
                      new(originalException: java.lang.Exception, uri: string, baseURI: string, msgID: string): ResourceResolverException;
                      new(msgID: string, originalException: java.lang.Exception, uri: string, baseURI: string): ResourceResolverException;
                      new(originalException: java.lang.Exception, uri: string, baseURI: string, msgID: string, exArgs: any[]): ResourceResolverException;
                      new(msgID: string, exArgs: any[], originalException: java.lang.Exception, uri: string, baseURI: string): ResourceResolverException;
                    }
                    let ResourceResolverException: _ResourceResolverException$$static;
                    interface _ResourceResolverException {
                      getURI(): string;
                      getbaseURI(): string;
                      setURI(uri: string): void;
                      setbaseURI(baseURI: string): void;
                      _baseURI: string;
                      _uri: string;
                    }
                    interface ResourceResolverException extends CombineTypes<[_ResourceResolverException, com.sun.org.apache.xml.internal.security.exceptions.XMLSecurityException]> {}
                    interface _ResourceResolverSpi$$static extends ClassLike {
                      new(): ResourceResolverSpi;
                    }
                    let ResourceResolverSpi: _ResourceResolverSpi$$static;
                    interface _ResourceResolverSpi {
                      engineCanResolveURI(a0: ResourceResolverContext): boolean;
                      engineResolveURI(a0: ResourceResolverContext): security.signature.XMLSignatureInput;
                    }
                    interface ResourceResolverSpi extends CombineTypes<[_ResourceResolverSpi, java.lang.Object]> {}
                  }
                  interface _Base64$$static extends ClassLike {
                    decode(element: org.w3c.dom.Element): byte[];
                    decode(base64: byte[]): byte[];
                    decode(reader: java.io.BufferedReader): byte[];
                    decode(encoded: string): byte[];
                    decode(base64Data: string, os: java.io.OutputStream): void;
                    decode(base64Data: byte[], os: java.io.OutputStream): void;
                    _decode(base64Data: byte[], os: java.io.OutputStream, len: int): void;
                    decode(is: java.io.InputStream, os: java.io.OutputStream): void;
                    decodeBigIntegerFromElement(element: org.w3c.dom.Element): java.math.BigInteger;
                    decodeBigIntegerFromText(text: org.w3c.dom.Text): java.math.BigInteger;
                    _decodeInternal(base64Data: byte[], len: int): byte[];
                    encode(big: java.math.BigInteger): string;
                    encode(big: java.math.BigInteger, bitlen: int): byte[];
                    encode(binaryData: byte[]): string;
                    encode(binaryData: byte[], length: int): string;
                    encodeToElement(doc: org.w3c.dom.Document, localName: string, bytes: byte[]): org.w3c.dom.Element;
                    fillElementWithBigInteger(element: org.w3c.dom.Element, biginteger: java.math.BigInteger): void;
                    _getBytes(big: java.math.BigInteger, bitlen: int): byte[];
                    _getBytesInternal(s: string, result: byte[]): int;
                    _isPad(octet: byte): boolean;
                    _isWhiteSpace(octet: byte): boolean;
                    _removeWhiteSpace(data: byte[]): int;
                    readonly BASE64DEFAULTLENGTH: int;
                    _BASELENGTH: int;
                    _EIGHTBIT: int;
                    _FOURBYTE: int;
                    _LOOKUPLENGTH: int;
                    _PAD: char;
                    _SIGN: int;
                    _SIXTEENBIT: int;
                    _TWENTYFOURBITGROUP: int;
                    _base64Alphabet: byte[];
                    _lookUpBase64Alphabet: char[];
                  }
                  let Base64: _Base64$$static;
                  interface _Base64 {
                  }
                  interface Base64 extends CombineTypes<[_Base64, java.lang.Object]> {}
                  interface _ClassLoaderUtils$$static extends ClassLike {
                    _loadClass(className: string, callingClass: java.lang.Class<any>): java.lang.Class<any>;
                    _loadClass2(className: string, callingClass: java.lang.Class<any>): java.lang.Class<any>;
                    _LOG: org.slf4j.internal.Logger;
                  }
                  let ClassLoaderUtils: _ClassLoaderUtils$$static;
                  interface _ClassLoaderUtils {
                  }
                  interface ClassLoaderUtils extends CombineTypes<[_ClassLoaderUtils, java.lang.Object]> {}
                  interface _Constants$$static extends ClassLike {
                    readonly ALGO_ID_DIGEST_SHA1: string;
                    readonly ALGO_ID_SIGNATURE_ECDSA_CERTICOM: string;
                    readonly MoreAlgorithmsSpecNS: string;
                    readonly NamespaceSpecNS: string;
                    readonly SIGNATURESPECIFICATION_URL: string;
                    readonly SignatureSpec11NS: string;
                    readonly SignatureSpecNS: string;
                    readonly XML_DSIG_NS_MORE_07_05: string;
                    readonly XML_LANG_SPACE_SpecNS: string;
                    readonly _ATT_ALGORITHM: string;
                    readonly _ATT_ENCODING: string;
                    readonly _ATT_ID: string;
                    readonly _ATT_MIMETYPE: string;
                    readonly _ATT_TARGET: string;
                    readonly _ATT_TYPE: string;
                    readonly _ATT_URI: string;
                    readonly _TAG_CANONICALIZATIONMETHOD: string;
                    readonly _TAG_DERENCODEDKEYVALUE: string;
                    readonly _TAG_DIGESTMETHOD: string;
                    readonly _TAG_DIGESTVALUE: string;
                    readonly _TAG_DSAKEYVALUE: string;
                    readonly _TAG_ECKEYVALUE: string;
                    readonly _TAG_EXPONENT: string;
                    readonly _TAG_G: string;
                    readonly _TAG_HMACOUTPUTLENGTH: string;
                    readonly _TAG_J: string;
                    readonly _TAG_KEYINFO: string;
                    readonly _TAG_KEYINFOREFERENCE: string;
                    readonly _TAG_KEYNAME: string;
                    readonly _TAG_KEYVALUE: string;
                    readonly _TAG_MANIFEST: string;
                    readonly _TAG_METHODS: string;
                    readonly _TAG_MGF: string;
                    readonly _TAG_MGMTDATA: string;
                    readonly _TAG_MODULUS: string;
                    readonly _TAG_OBJECT: string;
                    readonly _TAG_P: string;
                    readonly _TAG_PGENCOUNTER: string;
                    readonly _TAG_PGPDATA: string;
                    readonly _TAG_PGPKEYID: string;
                    readonly _TAG_PGPKEYPACKET: string;
                    readonly _TAG_Q: string;
                    readonly _TAG_RAWX509CERTIFICATE: string;
                    readonly _TAG_REFERENCE: string;
                    readonly _TAG_RETRIEVALMETHOD: string;
                    readonly _TAG_RSAKEYVALUE: string;
                    readonly _TAG_RSAPSSPARAMS: string;
                    readonly _TAG_SALTLENGTH: string;
                    readonly _TAG_SEED: string;
                    readonly _TAG_SIGNATURE: string;
                    readonly _TAG_SIGNATUREMETHOD: string;
                    readonly _TAG_SIGNATUREPROPERTIES: string;
                    readonly _TAG_SIGNATUREPROPERTY: string;
                    readonly _TAG_SIGNATUREVALUE: string;
                    readonly _TAG_SIGNEDINFO: string;
                    readonly _TAG_SPKIDATA: string;
                    readonly _TAG_SPKISEXP: string;
                    readonly _TAG_TRAILERFIELD: string;
                    readonly _TAG_TRANSFORM: string;
                    readonly _TAG_TRANSFORMS: string;
                    readonly _TAG_X509CERTIFICATE: string;
                    readonly _TAG_X509CRL: string;
                    readonly _TAG_X509DATA: string;
                    readonly _TAG_X509DIGEST: string;
                    readonly _TAG_X509ISSUERNAME: string;
                    readonly _TAG_X509ISSUERSERIAL: string;
                    readonly _TAG_X509SERIALNUMBER: string;
                    readonly _TAG_X509SKI: string;
                    readonly _TAG_X509SUBJECTNAME: string;
                    readonly _TAG_XPATH: string;
                    readonly _TAG_Y: string;
                    readonly configurationFile: string;
                    readonly configurationFileNew: string;
                    readonly exceptionMessagesResourceBundleBase: string;
                    readonly exceptionMessagesResourceBundleDir: string;
                  }
                  let Constants: _Constants$$static;
                  interface _Constants {
                  }
                  interface Constants extends CombineTypes<[_Constants, java.lang.Object]> {}
                  interface _DOMNamespaceContext$$static extends ClassLike {
                    new(context: org.w3c.dom.Node): DOMNamespaceContext;
                  }
                  let DOMNamespaceContext: _DOMNamespaceContext$$static;
                  interface _DOMNamespaceContext {
                    getNamespaceURI(prefix: string): string;
                    getPrefix(namespaceURI: string): string;
                    getPrefixes(namespaceURI: string): java.util.Iterator<string>;
                    setContext(context: org.w3c.dom.Node): void;
                    _context: org.w3c.dom.Node;
                  }
                  interface DOMNamespaceContext extends CombineTypes<[_DOMNamespaceContext, java.lang.Object, javax.xml.namespace.NamespaceContext]> {}
                  interface _DigesterOutputStream$$static extends ClassLike {
                    _LOG: org.slf4j.internal.Logger;
                    new(mda: security.algorithms.MessageDigestAlgorithm): DigesterOutputStream;
                  }
                  let DigesterOutputStream: _DigesterOutputStream$$static;
                  interface _DigesterOutputStream {
                    getDigestValue(): byte[];
                    write(arg0: byte[]): void;
                    write(arg0: int): void;
                    write(arg0: byte[], arg1: int, arg2: int): void;
                    _mda: security.algorithms.MessageDigestAlgorithm;
                  }
                  interface DigesterOutputStream extends CombineTypes<[_DigesterOutputStream, java.io.ByteArrayOutputStream]> {}
                  interface _ElementProxy$$static extends ClassLike {
                    createElementForFamily(doc: org.w3c.dom.Document, namespace: string, localName: string): org.w3c.dom.Element;
                    getDefaultPrefix(namespace: string): string;
                    registerDefaultPrefixes(): void;
                    setDefaultPrefix(namespace: string, prefix: string): void;
                    _setNamespacePrefix(namespace: string, prefix: string): void;
                    _LOG: org.slf4j.internal.Logger;
                    _prefixMappings: java.util.Map<string,string>;
                    new(): ElementProxy;
                    new(doc: org.w3c.dom.Document): ElementProxy;
                    new(element: org.w3c.dom.Element, baseURI: string): ElementProxy;
                  }
                  let ElementProxy: _ElementProxy$$static;
                  interface _ElementProxy {
                    addBase64Element(bytes: byte[], localname: string): void;
                    addBase64Text(bytes: byte[]): void;
                    addBigIntegerElement(bi: java.math.BigInteger, localname: string): void;
                    _addReturnToSelf(): void;
                    addText(text: string): void;
                    addTextElement(text: string, localname: string): void;
                    _appendOther(parent: org.w3c.dom.Element, toAppend: org.w3c.dom.Node): void;
                    _appendSelf(toAppend: ElementProxy): void;
                    _appendSelf(toAppend: org.w3c.dom.Node): void;
                    _createElementForFamilyLocal(namespace: string, localName: string): org.w3c.dom.Element;
                    _createText(text: string): org.w3c.dom.Text;
                    getBaseLocalName(): string;
                    getBaseNamespace(): string;
                    getBaseURI(): string;
                    getBigIntegerFromChildElement(localname: string, namespace: string): java.math.BigInteger;
                    getBytesFromTextChild(): byte[];
                    getDocument(): org.w3c.dom.Document;
                    getElement(): org.w3c.dom.Element;
                    getElementPlusReturns(): org.w3c.dom.NodeList;
                    _getFirstChild(): org.w3c.dom.Node;
                    _getLocalAttribute(attrName: string): string;
                    getTextFromChildElement(localname: string, namespace: string): string;
                    getTextFromTextChild(): string;
                    _guaranteeThatElementInCorrectSpace(): void;
                    length(namespace: string, localname: string): int;
                    _setDocument(doc: org.w3c.dom.Document): void;
                    setElement(element: org.w3c.dom.Element, baseURI: string): void;
                    _setElement(elem: org.w3c.dom.Element): void;
                    _setLocalAttribute(attrName: string, value: string): void;
                    _setLocalIdAttribute(attrName: string, value: string): void;
                    setXPathNamespaceContext(prefix: string, uri: string): void;
                    _baseURI: string;
                    _wrappedDoc: org.w3c.dom.Document;
                    _wrappedElement: org.w3c.dom.Element;
                  }
                  interface ElementProxy extends CombineTypes<[_ElementProxy, java.lang.Object]> {}
                  interface _EncryptionConstants$$static extends ClassLike {
                    readonly ALGO_ID_AUTHENTICATION_XMLSIGNATURE: string;
                    readonly ALGO_ID_BLOCKCIPHER_AES128: string;
                    readonly ALGO_ID_BLOCKCIPHER_AES128_GCM: string;
                    readonly ALGO_ID_BLOCKCIPHER_AES192: string;
                    readonly ALGO_ID_BLOCKCIPHER_AES192_GCM: string;
                    readonly ALGO_ID_BLOCKCIPHER_AES256: string;
                    readonly ALGO_ID_BLOCKCIPHER_AES256_GCM: string;
                    readonly ALGO_ID_BLOCKCIPHER_CAMELLIA128: string;
                    readonly ALGO_ID_BLOCKCIPHER_CAMELLIA192: string;
                    readonly ALGO_ID_BLOCKCIPHER_CAMELLIA256: string;
                    readonly ALGO_ID_BLOCKCIPHER_SEED128: string;
                    readonly ALGO_ID_BLOCKCIPHER_TRIPLEDES: string;
                    readonly ALGO_ID_C14N_OMITCOMMENTS: string;
                    readonly ALGO_ID_C14N_WITHCOMMENTS: string;
                    readonly ALGO_ID_ENCODING_BASE64: string;
                    readonly ALGO_ID_KEYAGREEMENT_DH: string;
                    readonly ALGO_ID_KEYTRANSPORT_RSA15: string;
                    readonly ALGO_ID_KEYTRANSPORT_RSAOAEP: string;
                    readonly ALGO_ID_KEYTRANSPORT_RSAOAEP_11: string;
                    readonly ALGO_ID_KEYWRAP_AES128: string;
                    readonly ALGO_ID_KEYWRAP_AES192: string;
                    readonly ALGO_ID_KEYWRAP_AES256: string;
                    readonly ALGO_ID_KEYWRAP_CAMELLIA128: string;
                    readonly ALGO_ID_KEYWRAP_CAMELLIA192: string;
                    readonly ALGO_ID_KEYWRAP_CAMELLIA256: string;
                    readonly ALGO_ID_KEYWRAP_SEED128: string;
                    readonly ALGO_ID_KEYWRAP_TRIPLEDES: string;
                    readonly ENCRYPTIONSPECIFICATION_URL: string;
                    readonly EncryptionSpec11NS: string;
                    readonly EncryptionSpecNS: string;
                    readonly MGF1_SHA1: string;
                    readonly MGF1_SHA224: string;
                    readonly MGF1_SHA256: string;
                    readonly MGF1_SHA384: string;
                    readonly MGF1_SHA512: string;
                    readonly TYPE_CONTENT: string;
                    readonly TYPE_ELEMENT: string;
                    readonly TYPE_MEDIATYPE: string;
                    readonly _ATT_ALGORITHM: string;
                    readonly _ATT_ENCODING: string;
                    readonly _ATT_ID: string;
                    readonly _ATT_MIMETYPE: string;
                    readonly _ATT_RECIPIENT: string;
                    readonly _ATT_TARGET: string;
                    readonly _ATT_TYPE: string;
                    readonly _ATT_URI: string;
                    readonly _TAG_AGREEMENTMETHOD: string;
                    readonly _TAG_CARRIEDKEYNAME: string;
                    readonly _TAG_CIPHERDATA: string;
                    readonly _TAG_CIPHERREFERENCE: string;
                    readonly _TAG_CIPHERVALUE: string;
                    readonly _TAG_DATAREFERENCE: string;
                    readonly _TAG_ENCRYPTEDDATA: string;
                    readonly _TAG_ENCRYPTEDKEY: string;
                    readonly _TAG_ENCRYPTIONMETHOD: string;
                    readonly _TAG_ENCRYPTIONPROPERTIES: string;
                    readonly _TAG_ENCRYPTIONPROPERTY: string;
                    readonly _TAG_KA_NONCE: string;
                    readonly _TAG_KEYREFERENCE: string;
                    readonly _TAG_KEYSIZE: string;
                    readonly _TAG_MGF: string;
                    readonly _TAG_OAEPPARAMS: string;
                    readonly _TAG_ORIGINATORKEYINFO: string;
                    readonly _TAG_RECIPIENTKEYINFO: string;
                    readonly _TAG_REFERENCELIST: string;
                    readonly _TAG_TRANSFORMS: string;
                  }
                  let EncryptionConstants: _EncryptionConstants$$static;
                  interface _EncryptionConstants {
                  }
                  interface EncryptionConstants extends CombineTypes<[_EncryptionConstants, java.lang.Object]> {}
                  interface _HelperNodeList$$static extends ClassLike {
                    new(): HelperNodeList;
                    new(allNodesMustHaveSameParent: boolean): HelperNodeList;
                  }
                  let HelperNodeList: _HelperNodeList$$static;
                  interface _HelperNodeList {
                    appendChild(node: org.w3c.dom.Node): void;
                    getLength(): int;
                    getOwnerDocument(): org.w3c.dom.Document;
                    item(index: int): org.w3c.dom.Node;
                    _allNodesMustHaveSameParent: boolean;
                    _nodes: java.util.List<org.w3c.dom.Node>;
                  }
                  interface HelperNodeList extends CombineTypes<[_HelperNodeList, org.w3c.dom.NodeList, java.lang.Object]> {}
                  interface _I18n$$static extends ClassLike {
                    getExceptionMessage(msgID: string): string;
                    getExceptionMessage(msgID: string, originalException: java.lang.Exception): string;
                    getExceptionMessage(msgID: string, exArgs: any[]): string;
                    init(languageCode: string, countryCode: string): void;
                    init(resourceBundle: java.util.ResourceBundle): void;
                    translate(message: string, args: any[]): string;
                    translate(message: string): string;
                    readonly NOT_INITIALIZED_MSG: string;
                    _alreadyInitialized: boolean;
                    _resourceBundle: java.util.ResourceBundle;
                  }
                  let I18n: _I18n$$static;
                  interface _I18n {
                  }
                  interface I18n extends CombineTypes<[_I18n, java.lang.Object]> {}
                  interface _IdResolver$$static extends ClassLike {
                    getElementById(doc: org.w3c.dom.Document, id: string): org.w3c.dom.Element;
                    registerElementById(element: org.w3c.dom.Element, id: org.w3c.dom.Attr): void;
                  }
                  let IdResolver: _IdResolver$$static;
                  interface _IdResolver {
                  }
                  interface IdResolver extends CombineTypes<[_IdResolver, java.lang.Object]> {}
                  interface _IgnoreAllErrorHandler$$static extends ClassLike {
                    _getProperty(name: string): boolean;
                    _LOG: org.slf4j.internal.Logger;
                    _throwExceptions: boolean;
                    _warnOnExceptions: boolean;
                    new(): IgnoreAllErrorHandler;
                  }
                  let IgnoreAllErrorHandler: _IgnoreAllErrorHandler$$static;
                  interface _IgnoreAllErrorHandler {
                    error(ex: org.xml.sax.SAXParseException): void;
                    fatalError(ex: org.xml.sax.SAXParseException): void;
                    warning(ex: org.xml.sax.SAXParseException): void;
                  }
                  interface IgnoreAllErrorHandler extends CombineTypes<[_IgnoreAllErrorHandler, org.xml.sax.ErrorHandler, java.lang.Object]> {}
                  interface _JDKXPathAPI$$static extends ClassLike {
                    _new(): JDKXPathAPI;
                  }
                  let JDKXPathAPI: _JDKXPathAPI$$static;
                  interface _JDKXPathAPI {
                    clear(): void;
                    evaluate(contextNode: org.w3c.dom.Node, xpathnode: org.w3c.dom.Node, str: string, namespaceNode: org.w3c.dom.Node): boolean;
                    selectNodeList(contextNode: org.w3c.dom.Node, xpathnode: org.w3c.dom.Node, str: string, namespaceNode: org.w3c.dom.Node): org.w3c.dom.NodeList;
                    _xpathExpression: javax.xml.xpath.XPathExpression;
                    _xpathStr: string;
                    _xpf: javax.xml.xpath.XPathFactory;
                  }
                  interface JDKXPathAPI extends CombineTypes<[_JDKXPathAPI, com.sun.org.apache.xml.internal.security.utils.XPathAPI, java.lang.Object]> {}
                  interface _JDKXPathFactory$$static extends ClassLike {
                    new(): JDKXPathFactory;
                  }
                  let JDKXPathFactory: _JDKXPathFactory$$static;
                  interface _JDKXPathFactory {
                    newXPathAPI(): XPathAPI;
                  }
                  interface JDKXPathFactory extends CombineTypes<[_JDKXPathFactory, com.sun.org.apache.xml.internal.security.utils.XPathFactory]> {}
                  interface _JavaUtils$$static extends ClassLike {
                    checkRegisterPermission(): void;
                    convertDsaASN1toXMLDSIG(asn1Bytes: byte[], size: int): byte[];
                    convertDsaXMLDSIGtoASN1(xmldsigBytes: byte[], size: int): byte[];
                    getBytesFromFile(fileName: string): byte[];
                    getBytesFromStream(inputStream: java.io.InputStream): byte[];
                    newInstanceWithEmptyConstructor<T>(clazz: java.lang.Class<T>): T;
                    writeBytesToFilename(filename: string, bytes: byte[]): void;
                    _LOG: org.slf4j.internal.Logger;
                    _REGISTER_PERMISSION: java.security.SecurityPermission;
                  }
                  let JavaUtils: _JavaUtils$$static;
                  interface _JavaUtils {
                  }
                  interface JavaUtils extends CombineTypes<[_JavaUtils, java.lang.Object]> {}
                  interface _RFC2253Parser$$static extends ClassLike {
                    _changeLess32toRFC(string: string): string;
                    _changeLess32toXML(string: string): string;
                    _changeWStoRFC(string: string): string;
                    _changeWStoXML(string: string): string;
                    _countQuotes(s: string, i: int, j: int): int;
                    normalize(dn: string): string;
                    normalize(dn: string, toXml: boolean): string;
                    _normalizeAT(str: string): string;
                    _normalizeV(str: string, toXml: boolean): string;
                    _parseATAV(str: string, toXml: boolean): string;
                    _parseRDN(str: string, toXml: boolean): string;
                    _removeWSandReplace(str: string, symbol: string, replace: string): string;
                    _removeWhiteSpace(str: string, symbol: string): string;
                    rfc2253toXMLdsig(dn: string): string;
                    _rfctoXML(string: string): string;
                    _semicolonToComma(str: string): string;
                    _trim(str: string): string;
                    xmldsigtoRFC2253(dn: string): string;
                    _xmltoRFC(string: string): string;
                    new(): RFC2253Parser;
                  }
                  let RFC2253Parser: _RFC2253Parser$$static;
                  interface _RFC2253Parser {
                  }
                  interface RFC2253Parser extends CombineTypes<[_RFC2253Parser, java.lang.Object]> {}
                  interface _Signature11ElementProxy$$static extends ClassLike {
                    _new(): Signature11ElementProxy;
                    new(doc: org.w3c.dom.Document): Signature11ElementProxy;
                    new(element: org.w3c.dom.Element, baseURI: string): Signature11ElementProxy;
                  }
                  let Signature11ElementProxy: _Signature11ElementProxy$$static;
                  interface _Signature11ElementProxy {
                    getBaseNamespace(): string;
                  }
                  interface Signature11ElementProxy extends CombineTypes<[_Signature11ElementProxy, com.sun.org.apache.xml.internal.security.utils.ElementProxy]> {}
                  interface _SignatureElementProxy$$static extends ClassLike {
                    _new(): SignatureElementProxy;
                    new(doc: org.w3c.dom.Document): SignatureElementProxy;
                    new(element: org.w3c.dom.Element, baseURI: string): SignatureElementProxy;
                  }
                  let SignatureElementProxy: _SignatureElementProxy$$static;
                  interface _SignatureElementProxy {
                    getBaseNamespace(): string;
                  }
                  interface SignatureElementProxy extends CombineTypes<[_SignatureElementProxy, com.sun.org.apache.xml.internal.security.utils.ElementProxy]> {}
                  interface _SignerOutputStream$$static extends ClassLike {
                    _LOG: org.slf4j.internal.Logger;
                    new(sa: security.algorithms.SignatureAlgorithm): SignerOutputStream;
                  }
                  let SignerOutputStream: _SignerOutputStream$$static;
                  interface _SignerOutputStream {
                    write(arg0: byte[]): void;
                    write(arg0: int): void;
                    write(arg0: byte[], arg1: int, arg2: int): void;
                    _sa: security.algorithms.SignatureAlgorithm;
                  }
                  interface SignerOutputStream extends CombineTypes<[_SignerOutputStream, java.io.ByteArrayOutputStream]> {}
                  interface _UnsyncBufferedOutputStream$$static extends ClassLike {
                    new(out: java.io.OutputStream): UnsyncBufferedOutputStream;
                    new(out: java.io.OutputStream, size: int): UnsyncBufferedOutputStream;
                  }
                  let UnsyncBufferedOutputStream: _UnsyncBufferedOutputStream$$static;
                  interface _UnsyncBufferedOutputStream {
                    flush(): void;
                    _flushInternal(): void;
                    write(bytes: byte[], offset: int, length: int): void;
                    write(oneByte: int): void;
                    _buffer: byte[];
                    _count: int;
                  }
                  interface UnsyncBufferedOutputStream extends CombineTypes<[_UnsyncBufferedOutputStream, java.io.FilterOutputStream]> {}
                  interface _UnsyncByteArrayOutputStream$$static extends ClassLike {
                    _INITIAL_SIZE: int;
                    _VM_ARRAY_INDEX_MAX_VALUE: int;
                    new(): UnsyncByteArrayOutputStream;
                  }
                  let UnsyncByteArrayOutputStream: _UnsyncByteArrayOutputStream$$static;
                  interface _UnsyncByteArrayOutputStream {
                    _expandSize(newPos: int): void;
                    reset(): void;
                    toByteArray(): byte[];
                    write(arg0: byte[]): void;
                    write(arg0: byte[], arg1: int, arg2: int): void;
                    write(arg0: int): void;
                    writeTo(out: java.io.OutputStream): void;
                    _buf: byte[];
                    _pos: int;
                    _size: int;
                  }
                  interface UnsyncByteArrayOutputStream extends CombineTypes<[_UnsyncByteArrayOutputStream, java.io.OutputStream]> {}
                  interface _XMLUtils$$static extends ClassLike {
                    addReturnBeforeChild(e: org.w3c.dom.Element, child: org.w3c.dom.Node): void;
                    addReturnToElement(e: org.w3c.dom.Element): void;
                    addReturnToElement(doc: org.w3c.dom.Document, nl: HelperNodeList): void;
                    circumventBug2650(doc: org.w3c.dom.Document): void;
                    _circumventBug2650internal(node: org.w3c.dom.Node): void;
                    convertNodelistToSet(xpathNodeSet: org.w3c.dom.NodeList): java.util.Set<org.w3c.dom.Node>;
                    createElementInEncryption11Space(doc: org.w3c.dom.Document, elementName: string): org.w3c.dom.Element;
                    createElementInEncryptionSpace(doc: org.w3c.dom.Document, elementName: string): org.w3c.dom.Element;
                    createElementInSignature11Space(doc: org.w3c.dom.Document, elementName: string): org.w3c.dom.Element;
                    createElementInSignatureSpace(doc: org.w3c.dom.Document, elementName: string): org.w3c.dom.Element;
                    decode(encodedString: string): byte[];
                    decode(encodedBytes: byte[]): byte[];
                    elementIsInEncryption11Space(element: org.w3c.dom.Element, localName: string): boolean;
                    elementIsInEncryptionSpace(element: org.w3c.dom.Element, localName: string): boolean;
                    elementIsInSignature11Space(element: org.w3c.dom.Element, localName: string): boolean;
                    elementIsInSignatureSpace(element: org.w3c.dom.Element, localName: string): boolean;
                    encodeToString(bytes: byte[]): string;
                    excludeNodeFromSet(signatureElement: org.w3c.dom.Node, inputSet: java.util.Set<org.w3c.dom.Node>): java.util.Set<org.w3c.dom.Node>;
                    getBytes(big: java.math.BigInteger, bitlen: int): byte[];
                    getFullTextChildrenFromNode(node: org.w3c.dom.Node): string;
                    getNextElement(el: org.w3c.dom.Node): org.w3c.dom.Element;
                    getOwnerDocument(node: org.w3c.dom.Node): org.w3c.dom.Document;
                    getOwnerDocument(xpathNodeSet: java.util.Set<org.w3c.dom.Node>): org.w3c.dom.Document;
                    getSet(rootNode: org.w3c.dom.Node, result: java.util.Set<org.w3c.dom.Node>, exclude: org.w3c.dom.Node, comments: boolean): void;
                    _getSetRec(rootNode: org.w3c.dom.Node, result: java.util.Set<org.w3c.dom.Node>, exclude: org.w3c.dom.Node, comments: boolean): void;
                    getStrFromNode(xpathnode: org.w3c.dom.Node): string;
                    ignoreLineBreaks(): boolean;
                    isDescendantOrSelf(ctx: org.w3c.dom.Node, descendantOrSelf: org.w3c.dom.Node): boolean;
                    isIgnoreLineBreaks(): boolean;
                    outputDOM(contextNode: org.w3c.dom.Node, outputFile: java.io.File): void;
                    outputDOM(contextNode: org.w3c.dom.Node, os: java.io.OutputStream): void;
                    outputDOM(contextNode: org.w3c.dom.Node, os: java.io.OutputStream, addPreamble: boolean): void;
                    outputDOMc14nWithComments(contextNode: org.w3c.dom.Node, os: java.io.OutputStream): void;
                    protectAgainstWrappingAttack(startNode: org.w3c.dom.Node, value: string): boolean;
                    protectAgainstWrappingAttack(startNode: org.w3c.dom.Node, knownElement: org.w3c.dom.Element, value: string): boolean;
                    read(file: java.io.File, disallowDocTypeDeclarations: boolean): org.w3c.dom.Document;
                    read(inputStream: java.io.InputStream, disallowDocTypeDeclarations: boolean): org.w3c.dom.Document;
                    readResource(name: string, loader: java.lang.ClassLoader, disallowDocTypeDeclarations: boolean): org.w3c.dom.Document;
                    selectDs11Node(sibling: org.w3c.dom.Node, nodeName: string, number: int): org.w3c.dom.Element;
                    selectDs11Nodes(sibling: org.w3c.dom.Node, nodeName: string): org.w3c.dom.Element[];
                    selectDsNode(sibling: org.w3c.dom.Node, nodeName: string, number: int): org.w3c.dom.Element;
                    selectDsNodes(sibling: org.w3c.dom.Node, nodeName: string): org.w3c.dom.Element[];
                    selectNode(sibling: org.w3c.dom.Node, uri: string, nodeName: string, number: int): org.w3c.dom.Element;
                    selectNodes(sibling: org.w3c.dom.Node, uri: string, nodeName: string): org.w3c.dom.Element[];
                    selectXencNode(sibling: org.w3c.dom.Node, nodeName: string, number: int): org.w3c.dom.Element;
                    setDs11Prefix(prefix: string): void;
                    setDsPrefix(prefix: string): void;
                    setXenc11Prefix(prefix: string): void;
                    setXencPrefix(prefix: string): void;
                    _LOG: org.slf4j.internal.Logger;
                    _ds11Prefix: string;
                    _dsPrefix: string;
                    _ignoreLineBreaks: boolean;
                    _xenc11Prefix: string;
                    _xencPrefix: string;
                    _xmlParserImpl: security.parser.XMLParser;
                  }
                  let XMLUtils: _XMLUtils$$static;
                  interface _XMLUtils {
                  }
                  interface XMLUtils extends CombineTypes<[_XMLUtils, java.lang.Object]> {}
                  interface _XPathAPI$$static extends ClassLike {
                  }
                  let XPathAPI: _XPathAPI$$static;
                  interface _XPathAPI {
                    clear(): void;
                    evaluate(a0: org.w3c.dom.Node, a1: org.w3c.dom.Node, a2: string, a3: org.w3c.dom.Node): boolean;
                    selectNodeList(a0: org.w3c.dom.Node, a1: org.w3c.dom.Node, a2: string, a3: org.w3c.dom.Node): org.w3c.dom.NodeList;
                  }
                  interface XPathAPI extends CombineTypes<[_XPathAPI, java.lang.Object]> {}
                  interface _XPathFactory$$static extends ClassLike {
                    newInstance(): XPathFactory;
                    _xalanInstalled: boolean;
                    new(): XPathFactory;
                  }
                  let XPathFactory: _XPathFactory$$static;
                  interface _XPathFactory {
                    newXPathAPI(): XPathAPI;
(): XPathAPI;
                  }
                  interface XPathFactory extends CombineTypes<[_XPathFactory, java.lang.Object]> {}
                  interface _XalanXPathAPI$$static extends ClassLike {
                    _fixupFunctionTable(): void;
                    isInstalled(): boolean;
                    _LOG: org.slf4j.internal.Logger;
                    _funcTable: apache.xpath.internal.compiler.FunctionTable;
                    _installed: boolean;
                    _new(): XalanXPathAPI;
                  }
                  let XalanXPathAPI: _XalanXPathAPI$$static;
                  interface _XalanXPathAPI {
                    clear(): void;
                    _createXPath(str: string, prefixResolver: internal.utils.PrefixResolver): apache.xpath.internal.XPath;
                    _eval(contextNode: org.w3c.dom.Node, xpathnode: org.w3c.dom.Node, str: string, namespaceNode: org.w3c.dom.Node): apache.xpath.internal.objects.XObject;
                    evaluate(contextNode: org.w3c.dom.Node, xpathnode: org.w3c.dom.Node, str: string, namespaceNode: org.w3c.dom.Node): boolean;
                    selectNodeList(contextNode: org.w3c.dom.Node, xpathnode: org.w3c.dom.Node, str: string, namespaceNode: org.w3c.dom.Node): org.w3c.dom.NodeList;
                    _context: apache.xpath.internal.XPathContext;
                    _xpath: apache.xpath.internal.XPath;
                    _xpathStr: string;
                  }
                  interface XalanXPathAPI extends CombineTypes<[_XalanXPathAPI, com.sun.org.apache.xml.internal.security.utils.XPathAPI, java.lang.Object]> {}
                  interface _XalanXPathFactory$$static extends ClassLike {
                    new(): XalanXPathFactory;
                  }
                  let XalanXPathFactory: _XalanXPathFactory$$static;
                  interface _XalanXPathFactory {
                    newXPathAPI(): XPathAPI;
                  }
                  interface XalanXPathFactory extends CombineTypes<[_XalanXPathFactory, com.sun.org.apache.xml.internal.security.utils.XPathFactory]> {}
                }
                interface _Init$$static extends ClassLike {
                  _dynamicInit(): void;
                  _fileInit(is: java.io.InputStream): void;
                  getResource(resourceName: string, callingClass: java.lang.Class<any>): java.net.URL;
                  _getResourceAsStream(resourceName: string, callingClass: java.lang.Class<any>): java.io.InputStream;
                  _getResources(resourceName: string, callingClass: java.lang.Class<any>): java.util.List<java.net.URL>;
                  init(): void;
                  isInitialized(): boolean;
                  readonly CONF_NS: string;
                  _LOG: org.slf4j.internal.Logger;
                  _alreadyInitialized: boolean;
                  new(): Init;
                }
                let Init: _Init$$static;
                interface _Init {
                }
                interface Init extends CombineTypes<[_Init, java.lang.Object]> {}
              }
            }
          }
        }
        module slf4j {
          module internal {
            interface _Logger$$static extends ClassLike {
              _addIndex(s: string): string;
              _WALKER: java.lang.StackWalker;
              new(name: string): Logger;
            }
            let Logger: _Logger$$static;
            interface _Logger {
              debug(s: string): void;
              debug(s: string, e: java.lang.Throwable): void;
              debug(s: string, o: any[]): void;
              debug(s: string, ...o: any[]): void;
              error(s: string): void;
              error(s: string, e: java.lang.Throwable): void;
              error(s: string, o: any[]): void;
              error(s: string, ...o: any[]): void;
              isDebugEnabled(): boolean;
              isTraceEnabled(): boolean;
              _log0(level: java.util.logging.Level, s: string): void;
              _log0(level: java.util.logging.Level, s: string, e: java.lang.Throwable): void;
              _log0(level: java.util.logging.Level, s: string, o: any[]): void;
              _log0(level: java.util.logging.Level, s: string, ...o: any[]): void;
              trace(s: string): void;
              warn(s: string): void;
              warn(s: string, e: java.lang.Throwable): void;
              warn(s: string, o: any[]): void;
              warn(s: string, ...o: any[]): void;
              _impl: java.util.logging.Logger;
            }
            interface Logger extends CombineTypes<[_Logger, java.lang.Object]> {}
            interface _LoggerFactory$$static extends ClassLike {
              getLogger(clazz: java.lang.Class<any>): Logger;
              new(): LoggerFactory;
            }
            let LoggerFactory: _LoggerFactory$$static;
            interface _LoggerFactory {
            }
            interface LoggerFactory extends CombineTypes<[_LoggerFactory, java.lang.Object]> {}
          }
        }
      }
    }
  }
  module javax {
    module xml {
      module crypto {
        module dom {
          interface _DOMCryptoContext$$static extends ClassLike {
            _new(): DOMCryptoContext;
          }
          let DOMCryptoContext: _DOMCryptoContext$$static;
          interface _DOMCryptoContext {
            get(key: any): any;
            getBaseURI(): string;
            getDefaultNamespacePrefix(): string;
            getElementById(idValue: string): org.w3c.dom.Element;
            getKeySelector(): KeySelector;
            getNamespacePrefix(namespaceURI: string, defaultPrefix: string): string;
            getProperty(name: string): any;
            getURIDereferencer(): URIDereferencer;
            iterator(): java.util.Iterator<java.util.Map$Entry<string,org.w3c.dom.Element>>;
            put(key: any, value: any): any;
            putNamespacePrefix(namespaceURI: string, prefix: string): string;
            setBaseURI(baseURI: string): void;
            setDefaultNamespacePrefix(defaultPrefix: string): void;
            setIdAttributeNS(element: org.w3c.dom.Element, namespaceURI: string, localName: string): void;
            setKeySelector(ks: KeySelector): void;
            setProperty(name: string, value: any): any;
            setURIDereferencer(dereferencer: URIDereferencer): void;
            _baseURI: string;
            _defaultPrefix: string;
            _dereferencer: URIDereferencer;
            _idMap: java.util.HashMap<string,org.w3c.dom.Element>;
            _ks: KeySelector;
            _nsMap: java.util.HashMap<string,string>;
            _objMap: java.util.HashMap<any,any>;
            _propMap: java.util.HashMap<string,any>;
          }
          interface DOMCryptoContext extends CombineTypes<[_DOMCryptoContext, java.lang.Object, javax.xml.crypto.XMLCryptoContext]> {}
          interface _DOMStructure$$static extends ClassLike {
            new(node: org.w3c.dom.Node): DOMStructure;
          }
          let DOMStructure: _DOMStructure$$static;
          interface _DOMStructure {
            getNode(): org.w3c.dom.Node;
            isFeatureSupported(feature: string): boolean;
            _node: org.w3c.dom.Node;
          }
          interface DOMStructure extends CombineTypes<[_DOMStructure, java.lang.Object, javax.xml.crypto.XMLStructure]> {}
          interface _DOMURIReference$$static extends ClassLike {
          }
          let DOMURIReference: _DOMURIReference$$static;
          interface _DOMURIReference {
            getHere(): org.w3c.dom.Node;
(): org.w3c.dom.Node;
          }
          interface DOMURIReference extends CombineTypes<[_DOMURIReference, javax.xml.crypto.URIReference, java.lang.Object]> {}
        }
        module dsig {
          module dom {
            interface _DOMSignContext$$static extends ClassLike {
              new(signingKey: java.security.Key, parent: org.w3c.dom.Node): DOMSignContext;
              new(signingKey: java.security.Key, parent: org.w3c.dom.Node, nextSibling: org.w3c.dom.Node): DOMSignContext;
              new(ks: KeySelector, parent: org.w3c.dom.Node): DOMSignContext;
              new(ks: KeySelector, parent: org.w3c.dom.Node, nextSibling: org.w3c.dom.Node): DOMSignContext;
            }
            let DOMSignContext: _DOMSignContext$$static;
            interface _DOMSignContext {
              getNextSibling(): org.w3c.dom.Node;
              getParent(): org.w3c.dom.Node;
              setNextSibling(nextSibling: org.w3c.dom.Node): void;
              setParent(parent: org.w3c.dom.Node): void;
              _nextSibling: org.w3c.dom.Node;
              _parent: org.w3c.dom.Node;
            }
            interface DOMSignContext extends CombineTypes<[_DOMSignContext, javax.xml.crypto.dom.DOMCryptoContext, javax.xml.crypto.dsig.XMLSignContext]> {}
            interface _DOMValidateContext$$static extends ClassLike {
              new(ks: KeySelector, node: org.w3c.dom.Node): DOMValidateContext;
              new(validatingKey: java.security.Key, node: org.w3c.dom.Node): DOMValidateContext;
            }
            let DOMValidateContext: _DOMValidateContext$$static;
            interface _DOMValidateContext {
              getNode(): org.w3c.dom.Node;
              _init(node: org.w3c.dom.Node, ks: KeySelector): void;
              setNode(node: org.w3c.dom.Node): void;
              _node: org.w3c.dom.Node;
            }
            interface DOMValidateContext extends CombineTypes<[_DOMValidateContext, javax.xml.crypto.dom.DOMCryptoContext, javax.xml.crypto.dsig.XMLValidateContext]> {}
          }
          module keyinfo {
            interface _KeyInfo$$static extends ClassLike {
            }
            let KeyInfo: _KeyInfo$$static;
            interface _KeyInfo {
              getContent(): java.util.List<XMLStructure>;
              getId(): string;
              marshal(a0: XMLStructure, a1: XMLCryptoContext): void;
            }
            interface KeyInfo extends CombineTypes<[_KeyInfo, java.lang.Object, javax.xml.crypto.XMLStructure]> {}
            interface _KeyInfoFactory$$static extends ClassLike {
              getInstance(mechanismType: string): KeyInfoFactory;
              getInstance(mechanismType: string, provider: java.security.Provider): KeyInfoFactory;
              getInstance(mechanismType: string, provider: string): KeyInfoFactory;
              getInstance(): KeyInfoFactory;
              _new(): KeyInfoFactory;
            }
            let KeyInfoFactory: _KeyInfoFactory$$static;
            interface _KeyInfoFactory {
              getMechanismType(): string;
              getProvider(): java.security.Provider;
              getURIDereferencer(): URIDereferencer;
              isFeatureSupported(a0: string): boolean;
              newKeyInfo(a0: java.util.List<XMLStructure>): KeyInfo;
              newKeyInfo(a0: java.util.List<XMLStructure>, a1: string): KeyInfo;
              newKeyName(a0: string): KeyName;
              newKeyValue(a0: java.security.PublicKey): KeyValue;
              newPGPData(a0: byte[]): PGPData;
              newPGPData(a0: byte[], a1: byte[], a2: java.util.List<XMLStructure>): PGPData;
              newPGPData(a0: byte[], a1: java.util.List<XMLStructure>): PGPData;
              newRetrievalMethod(a0: string): RetrievalMethod;
              newRetrievalMethod(a0: string, a1: string, a2: java.util.List<Transform>): RetrievalMethod;
              newX509Data(a0: java.util.List<any>): X509Data;
              newX509IssuerSerial(a0: string, a1: java.math.BigInteger): X509IssuerSerial;
              unmarshalKeyInfo(a0: XMLStructure): KeyInfo;
              _mechanismType: string;
              _provider: java.security.Provider;
            }
            interface KeyInfoFactory extends CombineTypes<[_KeyInfoFactory, java.lang.Object]> {}
            interface _KeyName$$static extends ClassLike {
            }
            let KeyName: _KeyName$$static;
            interface _KeyName {
              getName(): string;
(): string;
            }
            interface KeyName extends CombineTypes<[_KeyName, java.lang.Object, javax.xml.crypto.XMLStructure]> {}
            interface _KeyValue$$static extends ClassLike {
              readonly DSA_TYPE: string;
              readonly EC_TYPE: string;
              readonly RSA_TYPE: string;
            }
            let KeyValue: _KeyValue$$static;
            interface _KeyValue {
              getPublicKey(): java.security.PublicKey;
(): java.security.PublicKey;
            }
            interface KeyValue extends CombineTypes<[_KeyValue, java.lang.Object, javax.xml.crypto.XMLStructure]> {}
            interface _PGPData$$static extends ClassLike {
              readonly TYPE: string;
            }
            let PGPData: _PGPData$$static;
            interface _PGPData {
              getExternalElements(): java.util.List<XMLStructure>;
              getKeyId(): byte[];
              getKeyPacket(): byte[];
            }
            interface PGPData extends CombineTypes<[_PGPData, java.lang.Object, javax.xml.crypto.XMLStructure]> {}
            interface _RetrievalMethod$$static extends ClassLike {
            }
            let RetrievalMethod: _RetrievalMethod$$static;
            interface _RetrievalMethod {
              dereference(a0: XMLCryptoContext): Data;
              getTransforms(): java.util.List<Transform>;
              getURI(): string;
            }
            interface RetrievalMethod extends CombineTypes<[_RetrievalMethod, javax.xml.crypto.URIReference, java.lang.Object, javax.xml.crypto.XMLStructure]> {}
            interface _X509Data$$static extends ClassLike {
              readonly RAW_X509_CERTIFICATE_TYPE: string;
              readonly TYPE: string;
            }
            let X509Data: _X509Data$$static;
            interface _X509Data {
              getContent(): java.util.List<any>;
(): java.util.List<any>;
            }
            interface X509Data extends CombineTypes<[_X509Data, java.lang.Object, javax.xml.crypto.XMLStructure]> {}
            interface _X509IssuerSerial$$static extends ClassLike {
            }
            let X509IssuerSerial: _X509IssuerSerial$$static;
            interface _X509IssuerSerial {
              getIssuerName(): string;
              getSerialNumber(): java.math.BigInteger;
            }
            interface X509IssuerSerial extends CombineTypes<[_X509IssuerSerial, java.lang.Object, javax.xml.crypto.XMLStructure]> {}
          }
          module spec {
            interface _C14NMethodParameterSpec$$static extends ClassLike {
            }
            let C14NMethodParameterSpec: _C14NMethodParameterSpec$$static;
            interface _C14NMethodParameterSpec {
            }
            interface C14NMethodParameterSpec extends CombineTypes<[_C14NMethodParameterSpec, java.lang.Object, javax.xml.crypto.dsig.spec.TransformParameterSpec]> {}
            interface _DigestMethodParameterSpec$$static extends ClassLike {
            }
            let DigestMethodParameterSpec: _DigestMethodParameterSpec$$static;
            interface _DigestMethodParameterSpec {
            }
            interface DigestMethodParameterSpec extends CombineTypes<[_DigestMethodParameterSpec, java.lang.Object, java.security.spec.AlgorithmParameterSpec]> {}
            interface _ExcC14NParameterSpec$$static extends ClassLike {
              readonly DEFAULT: string;
              new(): ExcC14NParameterSpec;
              new(prefixList: java.util.List<string>): ExcC14NParameterSpec;
            }
            let ExcC14NParameterSpec: _ExcC14NParameterSpec$$static;
            interface _ExcC14NParameterSpec {
              getPrefixList(): java.util.List<string>;
              _prefixList: java.util.List<string>;
            }
            interface ExcC14NParameterSpec extends CombineTypes<[_ExcC14NParameterSpec, javax.xml.crypto.dsig.spec.C14NMethodParameterSpec, java.lang.Object]> {}
            interface _HMACParameterSpec$$static extends ClassLike {
              new(outputLength: int): HMACParameterSpec;
            }
            let HMACParameterSpec: _HMACParameterSpec$$static;
            interface _HMACParameterSpec {
              getOutputLength(): int;
              _outputLength: int;
            }
            interface HMACParameterSpec extends CombineTypes<[_HMACParameterSpec, java.lang.Object, javax.xml.crypto.dsig.spec.SignatureMethodParameterSpec]> {}
            interface _RSAPSSParameterSpec$$static extends ClassLike {
              new(spec: java.security.spec.PSSParameterSpec): RSAPSSParameterSpec;
            }
            let RSAPSSParameterSpec: _RSAPSSParameterSpec$$static;
            interface _RSAPSSParameterSpec {
              getPSSParameterSpec(): java.security.spec.PSSParameterSpec;
              _spec: java.security.spec.PSSParameterSpec;
            }
            interface RSAPSSParameterSpec extends CombineTypes<[_RSAPSSParameterSpec, java.lang.Object, javax.xml.crypto.dsig.spec.SignatureMethodParameterSpec]> {}
            interface _SignatureMethodParameterSpec$$static extends ClassLike {
            }
            let SignatureMethodParameterSpec: _SignatureMethodParameterSpec$$static;
            interface _SignatureMethodParameterSpec {
            }
            interface SignatureMethodParameterSpec extends CombineTypes<[_SignatureMethodParameterSpec, java.lang.Object, java.security.spec.AlgorithmParameterSpec]> {}
            interface _TransformParameterSpec$$static extends ClassLike {
            }
            let TransformParameterSpec: _TransformParameterSpec$$static;
            interface _TransformParameterSpec {
            }
            interface TransformParameterSpec extends CombineTypes<[_TransformParameterSpec, java.lang.Object, java.security.spec.AlgorithmParameterSpec]> {}
            interface _XPathFilter2ParameterSpec$$static extends ClassLike {
              new(xPathList: java.util.List<XPathType>): XPathFilter2ParameterSpec;
            }
            let XPathFilter2ParameterSpec: _XPathFilter2ParameterSpec$$static;
            interface _XPathFilter2ParameterSpec {
              getXPathList(): java.util.List<XPathType>;
              _xPathList: java.util.List<XPathType>;
            }
            interface XPathFilter2ParameterSpec extends CombineTypes<[_XPathFilter2ParameterSpec, java.lang.Object, javax.xml.crypto.dsig.spec.TransformParameterSpec]> {}
            interface _XPathFilterParameterSpec$$static extends ClassLike {
              new(xPath: string): XPathFilterParameterSpec;
              new(xPath: string, namespaceMap: java.util.Map<string,string>): XPathFilterParameterSpec;
            }
            let XPathFilterParameterSpec: _XPathFilterParameterSpec$$static;
            interface _XPathFilterParameterSpec {
              getNamespaceMap(): java.util.Map<string,string>;
              getXPath(): string;
              _nsMap: java.util.Map<string,string>;
              _xPath: string;
            }
            interface XPathFilterParameterSpec extends CombineTypes<[_XPathFilterParameterSpec, java.lang.Object, javax.xml.crypto.dsig.spec.TransformParameterSpec]> {}
            interface _XPathType$$static extends ClassLike {
              new(expression: string, filter: XPathType$Filter): XPathType;
              new(expression: string, filter: XPathType$Filter, namespaceMap: java.util.Map<string,string>): XPathType;
            }
            let XPathType: _XPathType$$static;
            interface _XPathType {
              getExpression(): string;
              getFilter(): XPathType$Filter;
              getNamespaceMap(): java.util.Map<string,string>;
              _expression: string;
              _filter: XPathType$Filter;
              _nsMap: java.util.Map<string,string>;
            }
            interface XPathType extends CombineTypes<[_XPathType, java.lang.Object]> {}
            interface _XPathType$Filter$$static extends ClassLike {
              readonly INTERSECT: XPathType$Filter;
              readonly SUBTRACT: XPathType$Filter;
              readonly UNION: XPathType$Filter;
            }
            let XPathType$Filter: _XPathType$Filter$$static;
            interface _XPathType$Filter {
              toString(): string;
              _operation: string;
            }
            interface XPathType$Filter extends CombineTypes<[_XPathType$Filter, java.lang.Object]> {}
            interface _XSLTTransformParameterSpec$$static extends ClassLike {
              new(stylesheet: XMLStructure): XSLTTransformParameterSpec;
            }
            let XSLTTransformParameterSpec: _XSLTTransformParameterSpec$$static;
            interface _XSLTTransformParameterSpec {
              getStylesheet(): XMLStructure;
              _stylesheet: XMLStructure;
            }
            interface XSLTTransformParameterSpec extends CombineTypes<[_XSLTTransformParameterSpec, java.lang.Object, javax.xml.crypto.dsig.spec.TransformParameterSpec]> {}
          }
          interface _CanonicalizationMethod$$static extends ClassLike {
            readonly EXCLUSIVE: string;
            readonly EXCLUSIVE_WITH_COMMENTS: string;
            readonly INCLUSIVE: string;
            readonly INCLUSIVE_11: string;
            readonly INCLUSIVE_11_WITH_COMMENTS: string;
            readonly INCLUSIVE_WITH_COMMENTS: string;
          }
          let CanonicalizationMethod: _CanonicalizationMethod$$static;
          interface _CanonicalizationMethod {
            getParameterSpec(): java.security.spec.AlgorithmParameterSpec;
(): java.security.spec.AlgorithmParameterSpec;
          }
          interface CanonicalizationMethod extends CombineTypes<[_CanonicalizationMethod, javax.xml.crypto.dsig.Transform, java.lang.Object]> {}
          interface _DigestMethod$$static extends ClassLike {
            readonly RIPEMD160: string;
            readonly SHA1: string;
            readonly SHA224: string;
            readonly SHA256: string;
            readonly SHA384: string;
            readonly SHA3_224: string;
            readonly SHA3_256: string;
            readonly SHA3_384: string;
            readonly SHA3_512: string;
            readonly SHA512: string;
          }
          let DigestMethod: _DigestMethod$$static;
          interface _DigestMethod {
            getParameterSpec(): java.security.spec.AlgorithmParameterSpec;
(): java.security.spec.AlgorithmParameterSpec;
          }
          interface DigestMethod extends CombineTypes<[_DigestMethod, java.lang.Object, javax.xml.crypto.AlgorithmMethod, javax.xml.crypto.XMLStructure]> {}
          interface _Manifest$$static extends ClassLike {
            readonly TYPE: string;
          }
          let Manifest: _Manifest$$static;
          interface _Manifest {
            getId(): string;
            getReferences(): java.util.List<Reference>;
          }
          interface Manifest extends CombineTypes<[_Manifest, java.lang.Object, javax.xml.crypto.XMLStructure]> {}
          interface _Reference$$static extends ClassLike {
          }
          let Reference: _Reference$$static;
          interface _Reference {
            getCalculatedDigestValue(): byte[];
            getDereferencedData(): Data;
            getDigestInputStream(): java.io.InputStream;
            getDigestMethod(): DigestMethod;
            getDigestValue(): byte[];
            getId(): string;
            getTransforms(): java.util.List<Transform>;
            validate(a0: XMLValidateContext): boolean;
          }
          interface Reference extends CombineTypes<[_Reference, javax.xml.crypto.URIReference, java.lang.Object, javax.xml.crypto.XMLStructure]> {}
          interface _SignatureMethod$$static extends ClassLike {
            readonly DSA_SHA1: string;
            readonly DSA_SHA256: string;
            readonly ECDSA_SHA1: string;
            readonly ECDSA_SHA224: string;
            readonly ECDSA_SHA256: string;
            readonly ECDSA_SHA384: string;
            readonly ECDSA_SHA512: string;
            readonly ED25519: string;
            readonly ED448: string;
            readonly HMAC_SHA1: string;
            readonly HMAC_SHA224: string;
            readonly HMAC_SHA256: string;
            readonly HMAC_SHA384: string;
            readonly HMAC_SHA512: string;
            readonly RSA_PSS: string;
            readonly RSA_SHA1: string;
            readonly RSA_SHA224: string;
            readonly RSA_SHA256: string;
            readonly RSA_SHA384: string;
            readonly RSA_SHA512: string;
            readonly SHA1_RSA_MGF1: string;
            readonly SHA224_RSA_MGF1: string;
            readonly SHA256_RSA_MGF1: string;
            readonly SHA384_RSA_MGF1: string;
            readonly SHA512_RSA_MGF1: string;
          }
          let SignatureMethod: _SignatureMethod$$static;
          interface _SignatureMethod {
            getParameterSpec(): java.security.spec.AlgorithmParameterSpec;
(): java.security.spec.AlgorithmParameterSpec;
          }
          interface SignatureMethod extends CombineTypes<[_SignatureMethod, java.lang.Object, javax.xml.crypto.AlgorithmMethod, javax.xml.crypto.XMLStructure]> {}
          interface _SignatureProperties$$static extends ClassLike {
            readonly TYPE: string;
          }
          let SignatureProperties: _SignatureProperties$$static;
          interface _SignatureProperties {
            getId(): string;
            getProperties(): java.util.List<SignatureProperty>;
          }
          interface SignatureProperties extends CombineTypes<[_SignatureProperties, java.lang.Object, javax.xml.crypto.XMLStructure]> {}
          interface _SignatureProperty$$static extends ClassLike {
          }
          let SignatureProperty: _SignatureProperty$$static;
          interface _SignatureProperty {
            getContent(): java.util.List<XMLStructure>;
            getId(): string;
            getTarget(): string;
          }
          interface SignatureProperty extends CombineTypes<[_SignatureProperty, java.lang.Object, javax.xml.crypto.XMLStructure]> {}
          interface _SignedInfo$$static extends ClassLike {
          }
          let SignedInfo: _SignedInfo$$static;
          interface _SignedInfo {
            getCanonicalizationMethod(): CanonicalizationMethod;
            getCanonicalizedData(): java.io.InputStream;
            getId(): string;
            getReferences(): java.util.List<Reference>;
            getSignatureMethod(): SignatureMethod;
          }
          interface SignedInfo extends CombineTypes<[_SignedInfo, java.lang.Object, javax.xml.crypto.XMLStructure]> {}
          interface _Transform$$static extends ClassLike {
            readonly BASE64: string;
            readonly ENVELOPED: string;
            readonly XPATH: string;
            readonly XPATH2: string;
            readonly XSLT: string;
          }
          let Transform: _Transform$$static;
          interface _Transform {
            getParameterSpec(): java.security.spec.AlgorithmParameterSpec;
            transform(a0: Data, a1: XMLCryptoContext): Data;
            transform(a0: Data, a1: XMLCryptoContext, a2: java.io.OutputStream): Data;
          }
          interface Transform extends CombineTypes<[_Transform, java.lang.Object, javax.xml.crypto.AlgorithmMethod, javax.xml.crypto.XMLStructure]> {}
          interface _TransformException$$static extends ClassLike {
            _serialVersionUID: long;
            new(): TransformException;
            new(message: string): TransformException;
            new(message: string, cause: java.lang.Throwable): TransformException;
            new(cause: java.lang.Throwable): TransformException;
          }
          let TransformException: _TransformException$$static;
          interface _TransformException {
            getCause(): java.lang.Throwable;
            printStackTrace(): void;
            printStackTrace(s: java.io.PrintStream): void;
            printStackTrace(s: java.io.PrintWriter): void;
            _cause: java.lang.Throwable;
          }
          interface TransformException extends CombineTypes<[_TransformException, java.lang.Exception]> {}
          interface _TransformService$$static extends ClassLike {
            getInstance(algorithm: string, mechanismType: string): TransformService;
            getInstance(algorithm: string, mechanismType: string, provider: java.security.Provider): TransformService;
            getInstance(algorithm: string, mechanismType: string, provider: string): TransformService;
            _new(): TransformService;
          }
          let TransformService: _TransformService$$static;
          interface _TransformService {
            getAlgorithm(): string;
            getMechanismType(): string;
            getProvider(): java.security.Provider;
            init(a0: dsig.spec.TransformParameterSpec): void;
            init(a0: XMLStructure, a1: XMLCryptoContext): void;
            marshalParams(a0: XMLStructure, a1: XMLCryptoContext): void;
            _algorithm: string;
            _mechanism: string;
            _provider: java.security.Provider;
          }
          interface TransformService extends CombineTypes<[_TransformService, javax.xml.crypto.dsig.Transform, java.lang.Object]> {}
          interface _TransformService$MechanismMapEntry$$static extends ClassLike {
            _new(algorithm: string, mechanism: string): TransformService$MechanismMapEntry;
          }
          let TransformService$MechanismMapEntry: _TransformService$MechanismMapEntry$$static;
          interface _TransformService$MechanismMapEntry {
            equals(o: any): boolean;
            getKey(): string;
            getKey(): any;
            getValue(): string;
            getValue(): any;
            hashCode(): int;
            setValue(value: string): string;
            setValue(a0: any): any;
            _algorithm: string;
            _key: string;
            _mechanism: string;
          }
          interface TransformService$MechanismMapEntry extends CombineTypes<[_TransformService$MechanismMapEntry, java.lang.Object, java.util.Map$Entry<string,string>]> {}
          interface _XMLObject$$static extends ClassLike {
            readonly TYPE: string;
          }
          let XMLObject: _XMLObject$$static;
          interface _XMLObject {
            getContent(): java.util.List<XMLStructure>;
            getEncoding(): string;
            getId(): string;
            getMimeType(): string;
          }
          interface XMLObject extends CombineTypes<[_XMLObject, java.lang.Object, javax.xml.crypto.XMLStructure]> {}
          interface _XMLSignContext$$static extends ClassLike {
          }
          let XMLSignContext: _XMLSignContext$$static;
          interface _XMLSignContext {
          }
          interface XMLSignContext extends CombineTypes<[_XMLSignContext, java.lang.Object, javax.xml.crypto.XMLCryptoContext]> {}
          interface _XMLSignature$$static extends ClassLike {
            readonly XMLNS: string;
          }
          let XMLSignature: _XMLSignature$$static;
          interface _XMLSignature {
            getId(): string;
            getKeyInfo(): dsig.keyinfo.KeyInfo;
            getKeySelectorResult(): KeySelectorResult;
            getObjects(): java.util.List<XMLObject>;
            getSignatureValue(): XMLSignature$SignatureValue;
            getSignedInfo(): SignedInfo;
            sign(a0: XMLSignContext): void;
            validate(a0: XMLValidateContext): boolean;
          }
          interface XMLSignature extends CombineTypes<[_XMLSignature, java.lang.Object, javax.xml.crypto.XMLStructure]> {}
          interface _XMLSignature$SignatureValue$$static extends ClassLike {
          }
          let XMLSignature$SignatureValue: _XMLSignature$SignatureValue$$static;
          interface _XMLSignature$SignatureValue {
            getId(): string;
            getValue(): byte[];
            validate(a0: XMLValidateContext): boolean;
          }
          interface XMLSignature$SignatureValue extends CombineTypes<[_XMLSignature$SignatureValue, java.lang.Object, javax.xml.crypto.XMLStructure]> {}
          interface _XMLSignatureException$$static extends ClassLike {
            _serialVersionUID: long;
            new(): XMLSignatureException;
            new(message: string): XMLSignatureException;
            new(message: string, cause: java.lang.Throwable): XMLSignatureException;
            new(cause: java.lang.Throwable): XMLSignatureException;
          }
          let XMLSignatureException: _XMLSignatureException$$static;
          interface _XMLSignatureException {
            getCause(): java.lang.Throwable;
            printStackTrace(): void;
            printStackTrace(s: java.io.PrintStream): void;
            printStackTrace(s: java.io.PrintWriter): void;
            _cause: java.lang.Throwable;
          }
          interface XMLSignatureException extends CombineTypes<[_XMLSignatureException, java.lang.Exception]> {}
          interface _XMLSignatureFactory$$static extends ClassLike {
            getInstance(mechanismType: string): XMLSignatureFactory;
            getInstance(mechanismType: string, provider: java.security.Provider): XMLSignatureFactory;
            getInstance(mechanismType: string, provider: string): XMLSignatureFactory;
            getInstance(): XMLSignatureFactory;
            _new(): XMLSignatureFactory;
          }
          let XMLSignatureFactory: _XMLSignatureFactory$$static;
          interface _XMLSignatureFactory {
            getKeyInfoFactory(): dsig.keyinfo.KeyInfoFactory;
            getMechanismType(): string;
            getProvider(): java.security.Provider;
            getURIDereferencer(): URIDereferencer;
            isFeatureSupported(a0: string): boolean;
            newCanonicalizationMethod(a0: string, a1: dsig.spec.C14NMethodParameterSpec): CanonicalizationMethod;
            newCanonicalizationMethod(a0: string, a1: XMLStructure): CanonicalizationMethod;
            newDigestMethod(a0: string, a1: dsig.spec.DigestMethodParameterSpec): DigestMethod;
            newManifest(a0: java.util.List<Reference>): Manifest;
            newManifest(a0: java.util.List<Reference>, a1: string): Manifest;
            newReference(a0: string, a1: DigestMethod): Reference;
            newReference(a0: string, a1: DigestMethod, a2: java.util.List<Transform>, a3: string, a4: string): Reference;
            newReference(a0: string, a1: DigestMethod, a2: java.util.List<Transform>, a3: string, a4: string, a5: byte[]): Reference;
            newReference(a0: string, a1: DigestMethod, a2: java.util.List<Transform>, a3: Data, a4: java.util.List<Transform>, a5: string, a6: string): Reference;
            newSignatureMethod(a0: string, a1: dsig.spec.SignatureMethodParameterSpec): SignatureMethod;
            newSignatureProperties(a0: java.util.List<SignatureProperty>, a1: string): SignatureProperties;
            newSignatureProperty(a0: java.util.List<XMLStructure>, a1: string, a2: string): SignatureProperty;
            newSignedInfo(a0: CanonicalizationMethod, a1: SignatureMethod, a2: java.util.List<Reference>): SignedInfo;
            newSignedInfo(a0: CanonicalizationMethod, a1: SignatureMethod, a2: java.util.List<Reference>, a3: string): SignedInfo;
            newTransform(a0: string, a1: dsig.spec.TransformParameterSpec): Transform;
            newTransform(a0: string, a1: XMLStructure): Transform;
            newXMLObject(a0: java.util.List<XMLStructure>, a1: string, a2: string, a3: string): XMLObject;
            newXMLSignature(a0: SignedInfo, a1: dsig.keyinfo.KeyInfo): XMLSignature;
            newXMLSignature(a0: SignedInfo, a1: dsig.keyinfo.KeyInfo, a2: java.util.List<XMLObject>, a3: string, a4: string): XMLSignature;
            unmarshalXMLSignature(a0: XMLValidateContext): XMLSignature;
            unmarshalXMLSignature(a0: XMLStructure): XMLSignature;
            _mechanismType: string;
            _provider: java.security.Provider;
          }
          interface XMLSignatureFactory extends CombineTypes<[_XMLSignatureFactory, java.lang.Object]> {}
          interface _XMLValidateContext$$static extends ClassLike {
          }
          let XMLValidateContext: _XMLValidateContext$$static;
          interface _XMLValidateContext {
          }
          interface XMLValidateContext extends CombineTypes<[_XMLValidateContext, java.lang.Object, javax.xml.crypto.XMLCryptoContext]> {}
        }
        interface _AlgorithmMethod$$static extends ClassLike {
        }
        let AlgorithmMethod: _AlgorithmMethod$$static;
        interface _AlgorithmMethod {
          getAlgorithm(): string;
          getParameterSpec(): java.security.spec.AlgorithmParameterSpec;
        }
        interface AlgorithmMethod extends CombineTypes<[_AlgorithmMethod, java.lang.Object]> {}
        interface _Data$$static extends ClassLike {
        }
        let Data: _Data$$static;
        interface _Data {
        }
        interface Data extends CombineTypes<[_Data, java.lang.Object]> {}
        interface _KeySelector$$static extends ClassLike {
          singletonKeySelector(key: java.security.Key): KeySelector;
          _new(): KeySelector;
        }
        let KeySelector: _KeySelector$$static;
        interface _KeySelector {
          select(a0: crypto.dsig.keyinfo.KeyInfo, a1: KeySelector$Purpose, a2: AlgorithmMethod, a3: XMLCryptoContext): KeySelectorResult;
(a0: crypto.dsig.keyinfo.KeyInfo, a1: KeySelector$Purpose, a2: AlgorithmMethod, a3: XMLCryptoContext): KeySelectorResult;
        }
        interface KeySelector extends CombineTypes<[_KeySelector, java.lang.Object]> {}
        interface _KeySelector$Purpose$$static extends ClassLike {
          readonly DECRYPT: KeySelector$Purpose;
          readonly ENCRYPT: KeySelector$Purpose;
          readonly SIGN: KeySelector$Purpose;
          readonly VERIFY: KeySelector$Purpose;
        }
        let KeySelector$Purpose: _KeySelector$Purpose$$static;
        interface _KeySelector$Purpose {
          toString(): string;
          _name: string;
        }
        interface KeySelector$Purpose extends CombineTypes<[_KeySelector$Purpose, java.lang.Object]> {}
        interface _KeySelector$SingletonKeySelector$$static extends ClassLike {
          _new(key: java.security.Key): KeySelector$SingletonKeySelector;
        }
        let KeySelector$SingletonKeySelector: _KeySelector$SingletonKeySelector$$static;
        interface _KeySelector$SingletonKeySelector {
          select(keyInfo: crypto.dsig.keyinfo.KeyInfo, purpose: KeySelector$Purpose, method: AlgorithmMethod, context: XMLCryptoContext): KeySelectorResult;
          _key: java.security.Key;
        }
        interface KeySelector$SingletonKeySelector extends CombineTypes<[_KeySelector$SingletonKeySelector, javax.xml.crypto.KeySelector]> {}
        interface _KeySelectorException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): KeySelectorException;
          new(message: string): KeySelectorException;
          new(message: string, cause: java.lang.Throwable): KeySelectorException;
          new(cause: java.lang.Throwable): KeySelectorException;
        }
        let KeySelectorException: _KeySelectorException$$static;
        interface _KeySelectorException {
          getCause(): java.lang.Throwable;
          printStackTrace(): void;
          printStackTrace(s: java.io.PrintStream): void;
          printStackTrace(s: java.io.PrintWriter): void;
          _cause: java.lang.Throwable;
        }
        interface KeySelectorException extends CombineTypes<[_KeySelectorException, java.lang.Exception]> {}
        interface _KeySelectorResult$$static extends ClassLike {
        }
        let KeySelectorResult: _KeySelectorResult$$static;
        interface _KeySelectorResult {
          getKey(): java.security.Key;
(): java.security.Key;
        }
        interface KeySelectorResult extends CombineTypes<[_KeySelectorResult, java.lang.Object]> {}
        interface _MarshalException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): MarshalException;
          new(message: string): MarshalException;
          new(message: string, cause: java.lang.Throwable): MarshalException;
          new(cause: java.lang.Throwable): MarshalException;
        }
        let MarshalException: _MarshalException$$static;
        interface _MarshalException {
          getCause(): java.lang.Throwable;
          printStackTrace(): void;
          printStackTrace(s: java.io.PrintStream): void;
          printStackTrace(s: java.io.PrintWriter): void;
          _cause: java.lang.Throwable;
        }
        interface MarshalException extends CombineTypes<[_MarshalException, java.lang.Exception]> {}
        interface _NoSuchMechanismException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): NoSuchMechanismException;
          new(message: string): NoSuchMechanismException;
          new(message: string, cause: java.lang.Throwable): NoSuchMechanismException;
          new(cause: java.lang.Throwable): NoSuchMechanismException;
        }
        let NoSuchMechanismException: _NoSuchMechanismException$$static;
        interface _NoSuchMechanismException {
          getCause(): java.lang.Throwable;
          printStackTrace(): void;
          printStackTrace(s: java.io.PrintStream): void;
          printStackTrace(s: java.io.PrintWriter): void;
          _cause: java.lang.Throwable;
        }
        interface NoSuchMechanismException extends CombineTypes<[_NoSuchMechanismException, java.lang.RuntimeException]> {}
        interface _NodeSetData$$static<T> extends ClassLike {
        }
        let NodeSetData: _NodeSetData$$static<T>;
        interface _NodeSetData<T> {
          iterator(): java.util.Iterator<T>;
(): java.util.Iterator<T>;
        }
        interface NodeSetData<T> extends CombineTypes<[_NodeSetData<T>, java.lang.Iterable<T>, java.lang.Object, Data]> {}
        interface _OctetStreamData$$static extends ClassLike {
          new(octetStream: java.io.InputStream): OctetStreamData;
          new(octetStream: java.io.InputStream, uri: string, mimeType: string): OctetStreamData;
        }
        let OctetStreamData: _OctetStreamData$$static;
        interface _OctetStreamData {
          getMimeType(): string;
          getOctetStream(): java.io.InputStream;
          getURI(): string;
          _mimeType: string;
          _octetStream: java.io.InputStream;
          _uri: string;
        }
        interface OctetStreamData extends CombineTypes<[_OctetStreamData, javax.xml.crypto.Data, java.lang.Object]> {}
        interface _URIDereferencer$$static extends ClassLike {
        }
        let URIDereferencer: _URIDereferencer$$static;
        interface _URIDereferencer {
          dereference(a0: URIReference, a1: XMLCryptoContext): Data;
(a0: URIReference, a1: XMLCryptoContext): Data;
        }
        interface URIDereferencer extends CombineTypes<[_URIDereferencer, java.lang.Object]> {}
        interface _URIReference$$static extends ClassLike {
        }
        let URIReference: _URIReference$$static;
        interface _URIReference {
          getType(): string;
          getURI(): string;
        }
        interface URIReference extends CombineTypes<[_URIReference, java.lang.Object]> {}
        interface _URIReferenceException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): URIReferenceException;
          new(message: string): URIReferenceException;
          new(message: string, cause: java.lang.Throwable): URIReferenceException;
          new(message: string, cause: java.lang.Throwable, uriReference: URIReference): URIReferenceException;
          new(cause: java.lang.Throwable): URIReferenceException;
        }
        let URIReferenceException: _URIReferenceException$$static;
        interface _URIReferenceException {
          getCause(): java.lang.Throwable;
          getURIReference(): URIReference;
          printStackTrace(): void;
          printStackTrace(s: java.io.PrintStream): void;
          printStackTrace(s: java.io.PrintWriter): void;
          _cause: java.lang.Throwable;
          _uriReference: URIReference;
        }
        interface URIReferenceException extends CombineTypes<[_URIReferenceException, java.lang.Exception]> {}
        interface _XMLCryptoContext$$static extends ClassLike {
        }
        let XMLCryptoContext: _XMLCryptoContext$$static;
        interface _XMLCryptoContext {
          get(a0: any): any;
          getBaseURI(): string;
          getDefaultNamespacePrefix(): string;
          getKeySelector(): KeySelector;
          getNamespacePrefix(a0: string, a1: string): string;
          getProperty(a0: string): any;
          getURIDereferencer(): URIDereferencer;
          put(a0: any, a1: any): any;
          putNamespacePrefix(a0: string, a1: string): string;
          setBaseURI(a0: string): void;
          setDefaultNamespacePrefix(a0: string): void;
          setKeySelector(a0: KeySelector): void;
          setProperty(a0: string, a1: any): any;
          setURIDereferencer(a0: URIDereferencer): void;
        }
        interface XMLCryptoContext extends CombineTypes<[_XMLCryptoContext, java.lang.Object]> {}
        interface _XMLStructure$$static extends ClassLike {
        }
        let XMLStructure: _XMLStructure$$static;
        interface _XMLStructure {
          isFeatureSupported(a0: string): boolean;
(a0: string): boolean;
        }
        interface XMLStructure extends CombineTypes<[_XMLStructure, java.lang.Object]> {}
      }
    }
  }
  module org {
    module jcp {
      module xml {
        module dsig {
          module internal {
            module dom {
              interface _AbstractDOMSignatureMethod$$static extends ClassLike {
                _new(): AbstractDOMSignatureMethod;
              }
              let AbstractDOMSignatureMethod: _AbstractDOMSignatureMethod$$static;
              interface _AbstractDOMSignatureMethod {
                _checkParams(params: javax.xml.crypto.dsig.spec.SignatureMethodParameterSpec): void;
                equals(o: any): boolean;
                _getAlgorithmType(): AbstractDOMSignatureMethod$Type;
                _getJCAAlgorithm(): string;
                hashCode(): int;
                marshal(parent: org.w3c.dom.Node, dsPrefix: string, context: javax.xml.crypto.dom.DOMCryptoContext): void;
                _marshalParams(parent: org.w3c.dom.Element, paramsPrefix: string): void;
                _paramsEqual(spec: java.security.spec.AlgorithmParameterSpec): boolean;
                _sign(a0: java.security.Key, a1: javax.xml.crypto.dsig.SignedInfo, a2: javax.xml.crypto.dsig.XMLSignContext): byte[];
                _unmarshalParams(paramsElem: org.w3c.dom.Element): javax.xml.crypto.dsig.spec.SignatureMethodParameterSpec;
                _verify(a0: java.security.Key, a1: javax.xml.crypto.dsig.SignedInfo, a2: byte[], a3: javax.xml.crypto.dsig.XMLValidateContext): boolean;
              }
              interface AbstractDOMSignatureMethod extends CombineTypes<[_AbstractDOMSignatureMethod, javax.xml.crypto.dsig.SignatureMethod, org.jcp.xml.dsig.internal.dom.DOMStructure]> {}
              interface _AbstractDOMSignatureMethod$Type$$static extends ClassLike {
                valueOf(name: string): AbstractDOMSignatureMethod$Type;
                values(): AbstractDOMSignatureMethod$Type[];
                readonly DSA: AbstractDOMSignatureMethod$Type;
                readonly ECDSA: AbstractDOMSignatureMethod$Type;
                readonly EDDSA: AbstractDOMSignatureMethod$Type;
                readonly HMAC: AbstractDOMSignatureMethod$Type;
                readonly RSA: AbstractDOMSignatureMethod$Type;
              }
              let AbstractDOMSignatureMethod$Type: _AbstractDOMSignatureMethod$Type$$static;
              interface _AbstractDOMSignatureMethod$Type {
              }
              interface AbstractDOMSignatureMethod$Type extends CombineTypes<[_AbstractDOMSignatureMethod$Type]> {}
              interface _ApacheCanonicalizer$$static extends ClassLike {
                _LOG: com.sun.org.slf4j.internal.Logger;
                new(): ApacheCanonicalizer;
              }
              let ApacheCanonicalizer: _ApacheCanonicalizer$$static;
              interface _ApacheCanonicalizer {
                canonicalize(data: javax.xml.crypto.Data, xc: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.Data;
                canonicalize(data: javax.xml.crypto.Data, xc: javax.xml.crypto.XMLCryptoContext, os: java.io.OutputStream): javax.xml.crypto.Data;
                _getC14nBytes(outputStream: java.io.OutputStream, isByteArrayOutputStream: boolean): byte[];
                getParameterSpec(): java.security.spec.AlgorithmParameterSpec;
                init(parent: javax.xml.crypto.XMLStructure, context: javax.xml.crypto.XMLCryptoContext): void;
                isFeatureSupported(feature: string): boolean;
                marshalParams(parent: javax.xml.crypto.XMLStructure, context: javax.xml.crypto.XMLCryptoContext): void;
                transform(data: javax.xml.crypto.Data, xc: javax.xml.crypto.XMLCryptoContext, os: java.io.OutputStream): javax.xml.crypto.Data;
                _apacheTransform: com.sun.org.apache.xml.internal.security.transforms.Transform;
                _canonicalizer: com.sun.org.apache.xml.internal.security.c14n.Canonicalizer;
                _inclusiveNamespaces: string;
                _ownerDoc: org.w3c.dom.Document;
                _params: javax.xml.crypto.dsig.spec.C14NMethodParameterSpec;
                _transformElem: org.w3c.dom.Element;
              }
              interface ApacheCanonicalizer extends CombineTypes<[_ApacheCanonicalizer, javax.xml.crypto.dsig.TransformService]> {}
              interface _ApacheData$$static extends ClassLike {
              }
              let ApacheData: _ApacheData$$static;
              interface _ApacheData {
                getXMLSignatureInput(): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput;
(): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput;
              }
              interface ApacheData extends CombineTypes<[_ApacheData, javax.xml.crypto.Data, java.lang.Object]> {}
              interface _ApacheNodeSetData$$static extends ClassLike {
                new(xi: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput): ApacheNodeSetData;
              }
              let ApacheNodeSetData: _ApacheNodeSetData$$static;
              interface _ApacheNodeSetData {
                _getNodeSet(nodeFilters: java.util.List<com.sun.org.apache.xml.internal.security.signature.NodeFilter>): java.util.Set<org.w3c.dom.Node>;
                getXMLSignatureInput(): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput;
                iterator(): java.util.Iterator<org.w3c.dom.Node>;
                _xi: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput;
              }
              interface ApacheNodeSetData extends CombineTypes<[_ApacheNodeSetData, ApacheData, javax.xml.crypto.NodeSetData<org.w3c.dom.Node>, java.lang.Object]> {}
              interface _ApacheOctetStreamData$$static extends ClassLike {
                new(xi: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput): ApacheOctetStreamData;
              }
              let ApacheOctetStreamData: _ApacheOctetStreamData$$static;
              interface _ApacheOctetStreamData {
                getXMLSignatureInput(): com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput;
                _xi: com.sun.org.apache.xml.internal.security.signature.XMLSignatureInput;
              }
              interface ApacheOctetStreamData extends CombineTypes<[_ApacheOctetStreamData, javax.xml.crypto.OctetStreamData, org.jcp.xml.dsig.internal.dom.ApacheData]> {}
              interface _ApacheTransform$$static extends ClassLike {
                _LOG: com.sun.org.slf4j.internal.Logger;
                new(): ApacheTransform;
              }
              let ApacheTransform: _ApacheTransform$$static;
              interface _ApacheTransform {
                getParameterSpec(): java.security.spec.AlgorithmParameterSpec;
                init(parent: javax.xml.crypto.XMLStructure, context: javax.xml.crypto.XMLCryptoContext): void;
                isFeatureSupported(feature: string): boolean;
                marshalParams(parent: javax.xml.crypto.XMLStructure, context: javax.xml.crypto.XMLCryptoContext): void;
                transform(data: javax.xml.crypto.Data, xc: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.Data;
                transform(data: javax.xml.crypto.Data, xc: javax.xml.crypto.XMLCryptoContext, os: java.io.OutputStream): javax.xml.crypto.Data;
                _transformIt(data: javax.xml.crypto.Data, xc: javax.xml.crypto.XMLCryptoContext, os: java.io.OutputStream): javax.xml.crypto.Data;
                _ownerDoc: org.w3c.dom.Document;
                _params: javax.xml.crypto.dsig.spec.TransformParameterSpec;
                _transform: com.sun.org.apache.xml.internal.security.transforms.Transform;
                _transformElem: org.w3c.dom.Element;
              }
              interface ApacheTransform extends CombineTypes<[_ApacheTransform, javax.xml.crypto.dsig.TransformService]> {}
              interface _DOMBase64Transform$$static extends ClassLike {
                new(): DOMBase64Transform;
              }
              let DOMBase64Transform: _DOMBase64Transform$$static;
              interface _DOMBase64Transform {
                init(params: javax.xml.crypto.dsig.spec.TransformParameterSpec): void;
              }
              interface DOMBase64Transform extends CombineTypes<[_DOMBase64Transform, org.jcp.xml.dsig.internal.dom.ApacheTransform]> {}
              interface _DOMCanonicalXMLC14N11Method$$static extends ClassLike {
                readonly C14N_11: string;
                readonly C14N_11_WITH_COMMENTS: string;
                new(): DOMCanonicalXMLC14N11Method;
              }
              let DOMCanonicalXMLC14N11Method: _DOMCanonicalXMLC14N11Method$$static;
              interface _DOMCanonicalXMLC14N11Method {
                init(params: javax.xml.crypto.dsig.spec.TransformParameterSpec): void;
                transform(data: javax.xml.crypto.Data, xc: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.Data;
              }
              interface DOMCanonicalXMLC14N11Method extends CombineTypes<[_DOMCanonicalXMLC14N11Method, org.jcp.xml.dsig.internal.dom.ApacheCanonicalizer]> {}
              interface _DOMCanonicalXMLC14NMethod$$static extends ClassLike {
                new(): DOMCanonicalXMLC14NMethod;
              }
              let DOMCanonicalXMLC14NMethod: _DOMCanonicalXMLC14NMethod$$static;
              interface _DOMCanonicalXMLC14NMethod {
                init(params: javax.xml.crypto.dsig.spec.TransformParameterSpec): void;
                transform(data: javax.xml.crypto.Data, xc: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.Data;
              }
              interface DOMCanonicalXMLC14NMethod extends CombineTypes<[_DOMCanonicalXMLC14NMethod, org.jcp.xml.dsig.internal.dom.ApacheCanonicalizer]> {}
              interface _DOMCanonicalizationMethod$$static extends ClassLike {
                _isC14Nalg(alg: string): boolean;
                _C14N_ALGORITHMS: java.util.Set<string>;
                new(spi: javax.xml.crypto.dsig.TransformService): DOMCanonicalizationMethod;
                new(cmElem: org.w3c.dom.Element, context: javax.xml.crypto.XMLCryptoContext, provider: java.security.Provider): DOMCanonicalizationMethod;
              }
              let DOMCanonicalizationMethod: _DOMCanonicalizationMethod$$static;
              interface _DOMCanonicalizationMethod {
                canonicalize(data: javax.xml.crypto.Data, xc: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.Data;
                canonicalize(data: javax.xml.crypto.Data, xc: javax.xml.crypto.XMLCryptoContext, os: java.io.OutputStream): javax.xml.crypto.Data;
                equals(o: any): boolean;
                hashCode(): int;
              }
              interface DOMCanonicalizationMethod extends CombineTypes<[_DOMCanonicalizationMethod, javax.xml.crypto.dsig.CanonicalizationMethod, org.jcp.xml.dsig.internal.dom.DOMTransform]> {}
              interface _DOMCryptoBinary$$static extends ClassLike {
                new(bigNum: java.math.BigInteger): DOMCryptoBinary;
                new(cbNode: org.w3c.dom.Node): DOMCryptoBinary;
              }
              let DOMCryptoBinary: _DOMCryptoBinary$$static;
              interface _DOMCryptoBinary {
                getBigNum(): java.math.BigInteger;
                marshal(parent: org.w3c.dom.Node, prefix: string, context: javax.xml.crypto.dom.DOMCryptoContext): void;
                _bigNum: java.math.BigInteger;
                _value: string;
              }
              interface DOMCryptoBinary extends CombineTypes<[_DOMCryptoBinary, org.jcp.xml.dsig.internal.dom.DOMStructure]> {}
              interface _DOMDigestMethod$$static extends ClassLike {
                _unmarshal(dmElem: org.w3c.dom.Element): javax.xml.crypto.dsig.DigestMethod;
                _SHA224: string;
                _SHA384: string;
                _SHA3_224: string;
                _SHA3_256: string;
                _SHA3_384: string;
                _SHA3_512: string;
                _WHIRLPOOL: string;
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMDigestMethod;
                _new(dmElem: org.w3c.dom.Element): DOMDigestMethod;
              }
              let DOMDigestMethod: _DOMDigestMethod$$static;
              interface _DOMDigestMethod {
                _checkParams(params: javax.xml.crypto.dsig.spec.DigestMethodParameterSpec): void;
                equals(o: any): boolean;
                _getMessageDigestAlgorithm(): string;
(): string;
                getParameterSpec(): java.security.spec.AlgorithmParameterSpec;
                hashCode(): int;
                marshal(parent: org.w3c.dom.Node, prefix: string, context: javax.xml.crypto.dom.DOMCryptoContext): void;
                _marshalParams(parent: org.w3c.dom.Element, prefix: string): void;
                _unmarshalParams(paramsElem: org.w3c.dom.Element): javax.xml.crypto.dsig.spec.DigestMethodParameterSpec;
                _params: javax.xml.crypto.dsig.spec.DigestMethodParameterSpec;
              }
              interface DOMDigestMethod extends CombineTypes<[_DOMDigestMethod, javax.xml.crypto.dsig.DigestMethod, org.jcp.xml.dsig.internal.dom.DOMStructure]> {}
              interface _DOMDigestMethod$RIPEMD160$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMDigestMethod$RIPEMD160;
                _new(dmElem: org.w3c.dom.Element): DOMDigestMethod$RIPEMD160;
              }
              let DOMDigestMethod$RIPEMD160: _DOMDigestMethod$RIPEMD160$$static;
              interface _DOMDigestMethod$RIPEMD160 {
                getAlgorithm(): string;
                _getMessageDigestAlgorithm(): string;
              }
              interface DOMDigestMethod$RIPEMD160 extends CombineTypes<[_DOMDigestMethod$RIPEMD160, org.jcp.xml.dsig.internal.dom.DOMDigestMethod]> {}
              interface _DOMDigestMethod$SHA1$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMDigestMethod$SHA1;
                _new(dmElem: org.w3c.dom.Element): DOMDigestMethod$SHA1;
              }
              let DOMDigestMethod$SHA1: _DOMDigestMethod$SHA1$$static;
              interface _DOMDigestMethod$SHA1 {
                getAlgorithm(): string;
                _getMessageDigestAlgorithm(): string;
              }
              interface DOMDigestMethod$SHA1 extends CombineTypes<[_DOMDigestMethod$SHA1, org.jcp.xml.dsig.internal.dom.DOMDigestMethod]> {}
              interface _DOMDigestMethod$SHA224$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMDigestMethod$SHA224;
                _new(dmElem: org.w3c.dom.Element): DOMDigestMethod$SHA224;
              }
              let DOMDigestMethod$SHA224: _DOMDigestMethod$SHA224$$static;
              interface _DOMDigestMethod$SHA224 {
                getAlgorithm(): string;
                _getMessageDigestAlgorithm(): string;
              }
              interface DOMDigestMethod$SHA224 extends CombineTypes<[_DOMDigestMethod$SHA224, org.jcp.xml.dsig.internal.dom.DOMDigestMethod]> {}
              interface _DOMDigestMethod$SHA256$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMDigestMethod$SHA256;
                _new(dmElem: org.w3c.dom.Element): DOMDigestMethod$SHA256;
              }
              let DOMDigestMethod$SHA256: _DOMDigestMethod$SHA256$$static;
              interface _DOMDigestMethod$SHA256 {
                getAlgorithm(): string;
                _getMessageDigestAlgorithm(): string;
              }
              interface DOMDigestMethod$SHA256 extends CombineTypes<[_DOMDigestMethod$SHA256, org.jcp.xml.dsig.internal.dom.DOMDigestMethod]> {}
              interface _DOMDigestMethod$SHA384$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMDigestMethod$SHA384;
                _new(dmElem: org.w3c.dom.Element): DOMDigestMethod$SHA384;
              }
              let DOMDigestMethod$SHA384: _DOMDigestMethod$SHA384$$static;
              interface _DOMDigestMethod$SHA384 {
                getAlgorithm(): string;
                _getMessageDigestAlgorithm(): string;
              }
              interface DOMDigestMethod$SHA384 extends CombineTypes<[_DOMDigestMethod$SHA384, org.jcp.xml.dsig.internal.dom.DOMDigestMethod]> {}
              interface _DOMDigestMethod$SHA3_224$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMDigestMethod$SHA3_224;
                _new(dmElem: org.w3c.dom.Element): DOMDigestMethod$SHA3_224;
              }
              let DOMDigestMethod$SHA3_224: _DOMDigestMethod$SHA3_224$$static;
              interface _DOMDigestMethod$SHA3_224 {
                getAlgorithm(): string;
                _getMessageDigestAlgorithm(): string;
              }
              interface DOMDigestMethod$SHA3_224 extends CombineTypes<[_DOMDigestMethod$SHA3_224, org.jcp.xml.dsig.internal.dom.DOMDigestMethod]> {}
              interface _DOMDigestMethod$SHA3_256$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMDigestMethod$SHA3_256;
                _new(dmElem: org.w3c.dom.Element): DOMDigestMethod$SHA3_256;
              }
              let DOMDigestMethod$SHA3_256: _DOMDigestMethod$SHA3_256$$static;
              interface _DOMDigestMethod$SHA3_256 {
                getAlgorithm(): string;
                _getMessageDigestAlgorithm(): string;
              }
              interface DOMDigestMethod$SHA3_256 extends CombineTypes<[_DOMDigestMethod$SHA3_256, org.jcp.xml.dsig.internal.dom.DOMDigestMethod]> {}
              interface _DOMDigestMethod$SHA3_384$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMDigestMethod$SHA3_384;
                _new(dmElem: org.w3c.dom.Element): DOMDigestMethod$SHA3_384;
              }
              let DOMDigestMethod$SHA3_384: _DOMDigestMethod$SHA3_384$$static;
              interface _DOMDigestMethod$SHA3_384 {
                getAlgorithm(): string;
                _getMessageDigestAlgorithm(): string;
              }
              interface DOMDigestMethod$SHA3_384 extends CombineTypes<[_DOMDigestMethod$SHA3_384, org.jcp.xml.dsig.internal.dom.DOMDigestMethod]> {}
              interface _DOMDigestMethod$SHA3_512$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMDigestMethod$SHA3_512;
                _new(dmElem: org.w3c.dom.Element): DOMDigestMethod$SHA3_512;
              }
              let DOMDigestMethod$SHA3_512: _DOMDigestMethod$SHA3_512$$static;
              interface _DOMDigestMethod$SHA3_512 {
                getAlgorithm(): string;
                _getMessageDigestAlgorithm(): string;
              }
              interface DOMDigestMethod$SHA3_512 extends CombineTypes<[_DOMDigestMethod$SHA3_512, org.jcp.xml.dsig.internal.dom.DOMDigestMethod]> {}
              interface _DOMDigestMethod$SHA512$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMDigestMethod$SHA512;
                _new(dmElem: org.w3c.dom.Element): DOMDigestMethod$SHA512;
              }
              let DOMDigestMethod$SHA512: _DOMDigestMethod$SHA512$$static;
              interface _DOMDigestMethod$SHA512 {
                getAlgorithm(): string;
                _getMessageDigestAlgorithm(): string;
              }
              interface DOMDigestMethod$SHA512 extends CombineTypes<[_DOMDigestMethod$SHA512, org.jcp.xml.dsig.internal.dom.DOMDigestMethod]> {}
              interface _DOMDigestMethod$WHIRLPOOL$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMDigestMethod$WHIRLPOOL;
                _new(dmElem: org.w3c.dom.Element): DOMDigestMethod$WHIRLPOOL;
              }
              let DOMDigestMethod$WHIRLPOOL: _DOMDigestMethod$WHIRLPOOL$$static;
              interface _DOMDigestMethod$WHIRLPOOL {
                getAlgorithm(): string;
                _getMessageDigestAlgorithm(): string;
              }
              interface DOMDigestMethod$WHIRLPOOL extends CombineTypes<[_DOMDigestMethod$WHIRLPOOL, org.jcp.xml.dsig.internal.dom.DOMDigestMethod]> {}
              interface _DOMEnvelopedTransform$$static extends ClassLike {
                new(): DOMEnvelopedTransform;
              }
              let DOMEnvelopedTransform: _DOMEnvelopedTransform$$static;
              interface _DOMEnvelopedTransform {
                init(params: javax.xml.crypto.dsig.spec.TransformParameterSpec): void;
              }
              interface DOMEnvelopedTransform extends CombineTypes<[_DOMEnvelopedTransform, org.jcp.xml.dsig.internal.dom.ApacheTransform]> {}
              interface _DOMExcC14NMethod$$static extends ClassLike {
                new(): DOMExcC14NMethod;
              }
              let DOMExcC14NMethod: _DOMExcC14NMethod$$static;
              interface _DOMExcC14NMethod {
                getParameterSpecPrefixList(paramSpec: javax.xml.crypto.dsig.spec.ExcC14NParameterSpec): java.util.List<string>;
                getParamsNSURI(): string;
                init(params: javax.xml.crypto.dsig.spec.TransformParameterSpec): void;
                init(parent: javax.xml.crypto.XMLStructure, context: javax.xml.crypto.XMLCryptoContext): void;
                marshalParams(parent: javax.xml.crypto.XMLStructure, context: javax.xml.crypto.XMLCryptoContext): void;
                transform(data: javax.xml.crypto.Data, xc: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.Data;
                _unmarshalParams(paramsElem: org.w3c.dom.Element): void;
              }
              interface DOMExcC14NMethod extends CombineTypes<[_DOMExcC14NMethod, org.jcp.xml.dsig.internal.dom.ApacheCanonicalizer]> {}
              interface _DOMHMACSignatureMethod$$static extends ClassLike {
                _DOM_SIGNATURE_PROVIDER: string;
                _HMAC_RIPEMD160: string;
                _HMAC_SHA224: string;
                _HMAC_SHA256: string;
                _HMAC_SHA384: string;
                _HMAC_SHA512: string;
                _LOG: com.sun.org.slf4j.internal.Logger;
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMHMACSignatureMethod;
                _new(smElem: org.w3c.dom.Element): DOMHMACSignatureMethod;
              }
              let DOMHMACSignatureMethod: _DOMHMACSignatureMethod$$static;
              interface _DOMHMACSignatureMethod {
                _checkParams(params: javax.xml.crypto.dsig.spec.SignatureMethodParameterSpec): void;
                equals(a0: any): boolean;
                _getAlgorithmType(): AbstractDOMSignatureMethod$Type;
                _getDigestLength(): int;
(): int;
                getParameterSpec(): java.security.spec.AlgorithmParameterSpec;
                hashCode(): int;
                marshal(a0: org.w3c.dom.Node, a1: string, a2: javax.xml.crypto.dom.DOMCryptoContext): void;
                _marshalParams(parent: org.w3c.dom.Element, prefix: string): void;
                _paramsEqual(spec: java.security.spec.AlgorithmParameterSpec): boolean;
                _sign(key: java.security.Key, si: javax.xml.crypto.dsig.SignedInfo, context: javax.xml.crypto.dsig.XMLSignContext): byte[];
                _unmarshalParams(paramsElem: org.w3c.dom.Element): javax.xml.crypto.dsig.spec.SignatureMethodParameterSpec;
                _verify(key: java.security.Key, si: javax.xml.crypto.dsig.SignedInfo, sig: byte[], context: javax.xml.crypto.dsig.XMLValidateContext): boolean;
                _hmac: javax.crypto.Mac;
                _outputLength: int;
                _outputLengthSet: boolean;
                _params: javax.xml.crypto.dsig.spec.SignatureMethodParameterSpec;
              }
              interface DOMHMACSignatureMethod extends CombineTypes<[_DOMHMACSignatureMethod, org.jcp.xml.dsig.internal.dom.AbstractDOMSignatureMethod]> {}
              interface _DOMHMACSignatureMethod$RIPEMD160$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMHMACSignatureMethod$RIPEMD160;
                _new(dmElem: org.w3c.dom.Element): DOMHMACSignatureMethod$RIPEMD160;
              }
              let DOMHMACSignatureMethod$RIPEMD160: _DOMHMACSignatureMethod$RIPEMD160$$static;
              interface _DOMHMACSignatureMethod$RIPEMD160 {
                getAlgorithm(): string;
                _getDigestLength(): int;
                _getJCAAlgorithm(): string;
              }
              interface DOMHMACSignatureMethod$RIPEMD160 extends CombineTypes<[_DOMHMACSignatureMethod$RIPEMD160, org.jcp.xml.dsig.internal.dom.DOMHMACSignatureMethod]> {}
              interface _DOMHMACSignatureMethod$SHA1$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMHMACSignatureMethod$SHA1;
                _new(dmElem: org.w3c.dom.Element): DOMHMACSignatureMethod$SHA1;
              }
              let DOMHMACSignatureMethod$SHA1: _DOMHMACSignatureMethod$SHA1$$static;
              interface _DOMHMACSignatureMethod$SHA1 {
                getAlgorithm(): string;
                _getDigestLength(): int;
                _getJCAAlgorithm(): string;
              }
              interface DOMHMACSignatureMethod$SHA1 extends CombineTypes<[_DOMHMACSignatureMethod$SHA1, org.jcp.xml.dsig.internal.dom.DOMHMACSignatureMethod]> {}
              interface _DOMHMACSignatureMethod$SHA224$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMHMACSignatureMethod$SHA224;
                _new(dmElem: org.w3c.dom.Element): DOMHMACSignatureMethod$SHA224;
              }
              let DOMHMACSignatureMethod$SHA224: _DOMHMACSignatureMethod$SHA224$$static;
              interface _DOMHMACSignatureMethod$SHA224 {
                getAlgorithm(): string;
                _getDigestLength(): int;
                _getJCAAlgorithm(): string;
              }
              interface DOMHMACSignatureMethod$SHA224 extends CombineTypes<[_DOMHMACSignatureMethod$SHA224, org.jcp.xml.dsig.internal.dom.DOMHMACSignatureMethod]> {}
              interface _DOMHMACSignatureMethod$SHA256$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMHMACSignatureMethod$SHA256;
                _new(dmElem: org.w3c.dom.Element): DOMHMACSignatureMethod$SHA256;
              }
              let DOMHMACSignatureMethod$SHA256: _DOMHMACSignatureMethod$SHA256$$static;
              interface _DOMHMACSignatureMethod$SHA256 {
                getAlgorithm(): string;
                _getDigestLength(): int;
                _getJCAAlgorithm(): string;
              }
              interface DOMHMACSignatureMethod$SHA256 extends CombineTypes<[_DOMHMACSignatureMethod$SHA256, org.jcp.xml.dsig.internal.dom.DOMHMACSignatureMethod]> {}
              interface _DOMHMACSignatureMethod$SHA384$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMHMACSignatureMethod$SHA384;
                _new(dmElem: org.w3c.dom.Element): DOMHMACSignatureMethod$SHA384;
              }
              let DOMHMACSignatureMethod$SHA384: _DOMHMACSignatureMethod$SHA384$$static;
              interface _DOMHMACSignatureMethod$SHA384 {
                getAlgorithm(): string;
                _getDigestLength(): int;
                _getJCAAlgorithm(): string;
              }
              interface DOMHMACSignatureMethod$SHA384 extends CombineTypes<[_DOMHMACSignatureMethod$SHA384, org.jcp.xml.dsig.internal.dom.DOMHMACSignatureMethod]> {}
              interface _DOMHMACSignatureMethod$SHA512$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMHMACSignatureMethod$SHA512;
                _new(dmElem: org.w3c.dom.Element): DOMHMACSignatureMethod$SHA512;
              }
              let DOMHMACSignatureMethod$SHA512: _DOMHMACSignatureMethod$SHA512$$static;
              interface _DOMHMACSignatureMethod$SHA512 {
                getAlgorithm(): string;
                _getDigestLength(): int;
                _getJCAAlgorithm(): string;
              }
              interface DOMHMACSignatureMethod$SHA512 extends CombineTypes<[_DOMHMACSignatureMethod$SHA512, org.jcp.xml.dsig.internal.dom.DOMHMACSignatureMethod]> {}
              interface _DOMKeyInfo$$static extends ClassLike {
                getContent(ki: javax.xml.crypto.dsig.keyinfo.KeyInfo): java.util.List<javax.xml.crypto.XMLStructure>;
                new(content: java.util.List<javax.xml.crypto.XMLStructure>, id: string): DOMKeyInfo;
                new(kiElem: org.w3c.dom.Element, context: javax.xml.crypto.XMLCryptoContext, provider: java.security.Provider): DOMKeyInfo;
              }
              let DOMKeyInfo: _DOMKeyInfo$$static;
              interface _DOMKeyInfo {
                equals(o: any): boolean;
                getContent(): java.util.List<javax.xml.crypto.XMLStructure>;
                getId(): string;
                hashCode(): int;
                marshal(parent: javax.xml.crypto.XMLStructure, context: javax.xml.crypto.XMLCryptoContext): void;
                marshal(parent: org.w3c.dom.Node, dsPrefix: string, context: javax.xml.crypto.dom.DOMCryptoContext): void;
                marshal(parent: org.w3c.dom.Node, nextSibling: org.w3c.dom.Node, dsPrefix: string, context: javax.xml.crypto.dom.DOMCryptoContext): void;
                _marshal(parent: org.w3c.dom.Node, kiElem: org.w3c.dom.Element, nextSibling: org.w3c.dom.Node, dsPrefix: string, context: javax.xml.crypto.dom.DOMCryptoContext): void;
                _id: string;
                _keyInfoTypes: java.util.List<javax.xml.crypto.XMLStructure>;
              }
              interface DOMKeyInfo extends CombineTypes<[_DOMKeyInfo, org.jcp.xml.dsig.internal.dom.DOMStructure, javax.xml.crypto.dsig.keyinfo.KeyInfo]> {}
              interface _DOMKeyInfoFactory$$static extends ClassLike {
                new(): DOMKeyInfoFactory;
              }
              let DOMKeyInfoFactory: _DOMKeyInfoFactory$$static;
              interface _DOMKeyInfoFactory {
                getURIDereferencer(): javax.xml.crypto.URIDereferencer;
                isFeatureSupported(feature: string): boolean;
                newKeyInfo(content: java.util.List): javax.xml.crypto.dsig.keyinfo.KeyInfo;
                newKeyInfo(content: java.util.List, id: string): javax.xml.crypto.dsig.keyinfo.KeyInfo;
                newKeyName(name: string): javax.xml.crypto.dsig.keyinfo.KeyName;
                newKeyValue(key: java.security.PublicKey): javax.xml.crypto.dsig.keyinfo.KeyValue;
                newPGPData(keyId: byte[]): javax.xml.crypto.dsig.keyinfo.PGPData;
                newPGPData(keyId: byte[], keyPacket: byte[], other: java.util.List): javax.xml.crypto.dsig.keyinfo.PGPData;
                newPGPData(keyPacket: byte[], other: java.util.List): javax.xml.crypto.dsig.keyinfo.PGPData;
                newRetrievalMethod(uri: string): javax.xml.crypto.dsig.keyinfo.RetrievalMethod;
                newRetrievalMethod(uri: string, type: string, transforms: java.util.List): javax.xml.crypto.dsig.keyinfo.RetrievalMethod;
                newX509Data(content: java.util.List): javax.xml.crypto.dsig.keyinfo.X509Data;
                newX509IssuerSerial(issuerName: string, serialNumber: java.math.BigInteger): javax.xml.crypto.dsig.keyinfo.X509IssuerSerial;
                unmarshalKeyInfo(xmlStructure: javax.xml.crypto.XMLStructure): javax.xml.crypto.dsig.keyinfo.KeyInfo;
              }
              interface DOMKeyInfoFactory extends CombineTypes<[_DOMKeyInfoFactory, javax.xml.crypto.dsig.keyinfo.KeyInfoFactory]> {}
              interface _DOMKeyInfoFactory$UnmarshalContext$$static extends ClassLike {
                _new(): DOMKeyInfoFactory$UnmarshalContext;
              }
              let DOMKeyInfoFactory$UnmarshalContext: _DOMKeyInfoFactory$UnmarshalContext$$static;
              interface _DOMKeyInfoFactory$UnmarshalContext {
              }
              interface DOMKeyInfoFactory$UnmarshalContext extends CombineTypes<[_DOMKeyInfoFactory$UnmarshalContext, javax.xml.crypto.dom.DOMCryptoContext]> {}
              interface _DOMKeyName$$static extends ClassLike {
                new(name: string): DOMKeyName;
                new(knElem: org.w3c.dom.Element): DOMKeyName;
              }
              let DOMKeyName: _DOMKeyName$$static;
              interface _DOMKeyName {
                equals(obj: any): boolean;
                getName(): string;
                hashCode(): int;
                marshal(parent: org.w3c.dom.Node, dsPrefix: string, context: javax.xml.crypto.dom.DOMCryptoContext): void;
                _name: string;
              }
              interface DOMKeyName extends CombineTypes<[_DOMKeyName, javax.xml.crypto.dsig.keyinfo.KeyName, org.jcp.xml.dsig.internal.dom.DOMStructure]> {}
              interface _DOMKeyValue$$static<K> extends ClassLike {
                _bigInt(s: string): java.math.BigInteger;
                decode(elem: org.w3c.dom.Element): java.math.BigInteger;
                _generatePublicKey(kf: java.security.KeyFactory, keyspec: java.security.spec.KeySpec): java.security.PublicKey;
                _unmarshal(kvElem: org.w3c.dom.Element): javax.xml.crypto.dsig.keyinfo.KeyValue;
                _XMLDSIG_11_XMLNS: string;
                new(key: K): DOMKeyValue<K>;
                new(kvtElem: org.w3c.dom.Element): DOMKeyValue<K>;
              }
              let DOMKeyValue: _DOMKeyValue$$static<K>;
              interface _DOMKeyValue<K> {
                equals(obj: any): boolean;
                getPublicKey(): java.security.PublicKey;
                hashCode(): int;
                marshal(parent: org.w3c.dom.Node, dsPrefix: string, context: javax.xml.crypto.dom.DOMCryptoContext): void;
                _marshalPublicKey(a0: org.w3c.dom.Node, a1: org.w3c.dom.Document, a2: string, a3: javax.xml.crypto.dom.DOMCryptoContext): void;
                _unmarshalKeyValue(a0: org.w3c.dom.Element): K;
                _publicKey: K;
              }
              interface DOMKeyValue<K> extends CombineTypes<[_DOMKeyValue<K>, DOMStructure, javax.xml.crypto.dsig.keyinfo.KeyValue]> {}
              interface _DOMKeyValue$DSA$$static extends ClassLike {
                _new(key: java.security.interfaces.DSAPublicKey): DOMKeyValue$DSA;
                _new(elem: org.w3c.dom.Element): DOMKeyValue$DSA;
              }
              let DOMKeyValue$DSA: _DOMKeyValue$DSA$$static;
              interface _DOMKeyValue$DSA {
                _marshalPublicKey(parent: org.w3c.dom.Node, doc: org.w3c.dom.Document, dsPrefix: string, context: javax.xml.crypto.dom.DOMCryptoContext): void;
                _unmarshalKeyValue(kvtElem: org.w3c.dom.Element): java.security.interfaces.DSAPublicKey;
                _unmarshalKeyValue(a0: org.w3c.dom.Element): java.security.PublicKey;
                _dsakf: java.security.KeyFactory;
                _g: DOMCryptoBinary;
                _p: DOMCryptoBinary;
                _q: DOMCryptoBinary;
                _y: DOMCryptoBinary;
              }
              interface DOMKeyValue$DSA extends CombineTypes<[_DOMKeyValue$DSA, DOMKeyValue<java.security.interfaces.DSAPublicKey>]> {}
              interface _DOMKeyValue$EC$$static extends ClassLike {
                _decodePoint(data: byte[], curve: java.security.spec.EllipticCurve): java.security.spec.ECPoint;
                _encodePoint(point: java.security.spec.ECPoint, curve: java.security.spec.EllipticCurve): byte[];
                _getCurveOid(params: java.security.spec.ECParameterSpec): string;
                _getECParameterSpec(oid: string): java.security.spec.ECParameterSpec;
                _initializeCurve(name: string, oid: string, sfield: string, a: string, b: string, x: string, y: string, n: string, h: int): DOMKeyValue$EC$Curve;
                _matchCurve(params: java.security.spec.ECParameterSpec, curve: DOMKeyValue$EC$Curve): boolean;
                _trimZeroes(b: byte[]): byte[];
                _SECP256R1: DOMKeyValue$EC$Curve;
                _SECP384R1: DOMKeyValue$EC$Curve;
                _SECP521R1: DOMKeyValue$EC$Curve;
                _new(ecKey: java.security.interfaces.ECPublicKey): DOMKeyValue$EC;
                _new(dmElem: org.w3c.dom.Element): DOMKeyValue$EC;
              }
              let DOMKeyValue$EC: _DOMKeyValue$EC$$static;
              interface _DOMKeyValue$EC {
                _marshalPublicKey(parent: org.w3c.dom.Node, doc: org.w3c.dom.Document, dsPrefix: string, context: javax.xml.crypto.dom.DOMCryptoContext): void;
                _unmarshalKeyValue(kvtElem: org.w3c.dom.Element): java.security.interfaces.ECPublicKey;
                _unmarshalKeyValue(a0: org.w3c.dom.Element): java.security.PublicKey;
                _ecParams: java.security.spec.ECParameterSpec;
                _ecPublicKey: byte[];
                _eckf: java.security.KeyFactory;
              }
              interface DOMKeyValue$EC extends CombineTypes<[_DOMKeyValue$EC, DOMKeyValue<java.security.interfaces.ECPublicKey>]> {}
              interface _DOMKeyValue$EC$Curve$$static extends ClassLike {
                _new(name: string, oid: string, curve: java.security.spec.EllipticCurve, g: java.security.spec.ECPoint, n: java.math.BigInteger, h: int): DOMKeyValue$EC$Curve;
              }
              let DOMKeyValue$EC$Curve: _DOMKeyValue$EC$Curve$$static;
              interface _DOMKeyValue$EC$Curve {
                _getName(): string;
                _getObjectId(): string;
                _name: string;
                _oid: string;
              }
              interface DOMKeyValue$EC$Curve extends CombineTypes<[_DOMKeyValue$EC$Curve, java.security.spec.ECParameterSpec]> {}
              interface _DOMKeyValue$RSA$$static extends ClassLike {
                _new(key: java.security.interfaces.RSAPublicKey): DOMKeyValue$RSA;
                _new(elem: org.w3c.dom.Element): DOMKeyValue$RSA;
              }
              let DOMKeyValue$RSA: _DOMKeyValue$RSA$$static;
              interface _DOMKeyValue$RSA {
                _marshalPublicKey(parent: org.w3c.dom.Node, doc: org.w3c.dom.Document, dsPrefix: string, context: javax.xml.crypto.dom.DOMCryptoContext): void;
                _unmarshalKeyValue(kvtElem: org.w3c.dom.Element): java.security.interfaces.RSAPublicKey;
                _unmarshalKeyValue(a0: org.w3c.dom.Element): java.security.PublicKey;
                _exponent: DOMCryptoBinary;
                _modulus: DOMCryptoBinary;
                _rsakf: java.security.KeyFactory;
              }
              interface DOMKeyValue$RSA extends CombineTypes<[_DOMKeyValue$RSA, DOMKeyValue<java.security.interfaces.RSAPublicKey>]> {}
              interface _DOMKeyValue$Unknown$$static extends ClassLike {
                _new(elem: org.w3c.dom.Element): DOMKeyValue$Unknown;
              }
              let DOMKeyValue$Unknown: _DOMKeyValue$Unknown$$static;
              interface _DOMKeyValue$Unknown {
                _marshalPublicKey(parent: org.w3c.dom.Node, doc: org.w3c.dom.Document, dsPrefix: string, context: javax.xml.crypto.dom.DOMCryptoContext): void;
                _unmarshalKeyValue(kvElem: org.w3c.dom.Element): java.security.PublicKey;
                _externalPublicKey: javax.xml.crypto.dom.DOMStructure;
              }
              interface DOMKeyValue$Unknown extends CombineTypes<[_DOMKeyValue$Unknown, DOMKeyValue<java.security.PublicKey>]> {}
              interface _DOMManifest$$static extends ClassLike {
                getManifestReferences(mf: javax.xml.crypto.dsig.Manifest): java.util.List<javax.xml.crypto.dsig.Reference>;
                new(references: java.util.List<javax.xml.crypto.dsig.Reference>, id: string): DOMManifest;
                new(manElem: org.w3c.dom.Element, context: javax.xml.crypto.XMLCryptoContext, provider: java.security.Provider): DOMManifest;
              }
              let DOMManifest: _DOMManifest$$static;
              interface _DOMManifest {
                equals(o: any): boolean;
                getId(): string;
                getReferences(): java.util.List<javax.xml.crypto.dsig.Reference>;
                hashCode(): int;
                marshal(parent: org.w3c.dom.Node, dsPrefix: string, context: javax.xml.crypto.dom.DOMCryptoContext): void;
                _id: string;
                _references: java.util.List<javax.xml.crypto.dsig.Reference>;
              }
              interface DOMManifest extends CombineTypes<[_DOMManifest, javax.xml.crypto.dsig.Manifest, org.jcp.xml.dsig.internal.dom.DOMStructure]> {}
              interface _DOMPGPData$$static extends ClassLike {
                new(keyPacket: byte[], other: java.util.List<javax.xml.crypto.XMLStructure>): DOMPGPData;
                new(keyId: byte[], keyPacket: byte[], other: java.util.List<javax.xml.crypto.XMLStructure>): DOMPGPData;
                new(pdElem: org.w3c.dom.Element): DOMPGPData;
              }
              let DOMPGPData: _DOMPGPData$$static;
              interface _DOMPGPData {
                _checkKeyPacket(keyPacket: byte[]): void;
                getExternalElements(): java.util.List<javax.xml.crypto.XMLStructure>;
                getKeyId(): byte[];
                getKeyPacket(): byte[];
                marshal(parent: org.w3c.dom.Node, dsPrefix: string, context: javax.xml.crypto.dom.DOMCryptoContext): void;
                _externalElements: java.util.List<javax.xml.crypto.XMLStructure>;
                _keyId: byte[];
                _keyPacket: byte[];
              }
              interface DOMPGPData extends CombineTypes<[_DOMPGPData, javax.xml.crypto.dsig.keyinfo.PGPData, org.jcp.xml.dsig.internal.dom.DOMStructure]> {}
              interface _DOMRSAPSSSignatureMethod$$static extends ClassLike {
                _validateDigestAlgorithm(input: string): com.sun.org.apache.xml.internal.security.algorithms.implementations.SignatureBaseRSA$SignatureRSASSAPSS$DigestAlgorithm;
                _DEFAULT_PSS_SPEC: javax.xml.crypto.dsig.spec.RSAPSSParameterSpec;
                _DOM_SIGNATURE_PROVIDER: string;
                _LOG: com.sun.org.slf4j.internal.Logger;
                _RSA_PSS: string;
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMRSAPSSSignatureMethod;
                _new(smElem: org.w3c.dom.Element): DOMRSAPSSSignatureMethod;
              }
              let DOMRSAPSSSignatureMethod: _DOMRSAPSSSignatureMethod$$static;
              interface _DOMRSAPSSSignatureMethod {
                _checkParams(params: javax.xml.crypto.dsig.spec.SignatureMethodParameterSpec): void;
                equals(a0: any): boolean;
                getParameterSpec(): java.security.spec.AlgorithmParameterSpec;
                hashCode(): int;
                marshal(a0: org.w3c.dom.Node, a1: string, a2: javax.xml.crypto.dom.DOMCryptoContext): void;
                _marshalParams(parent: org.w3c.dom.Element, prefix: string): void;
                _paramsEqual(spec: java.security.spec.AlgorithmParameterSpec): boolean;
                _sign(key: java.security.Key, si: javax.xml.crypto.dsig.SignedInfo, context: javax.xml.crypto.dsig.XMLSignContext): byte[];
                _unmarshalParams(paramsElem: org.w3c.dom.Element): javax.xml.crypto.dsig.spec.SignatureMethodParameterSpec;
                _verify(key: java.security.Key, si: javax.xml.crypto.dsig.SignedInfo, sig: byte[], context: javax.xml.crypto.dsig.XMLValidateContext): boolean;
                _params: javax.xml.crypto.dsig.spec.SignatureMethodParameterSpec;
                _signature: java.security.Signature;
                _spec: java.security.spec.PSSParameterSpec;
              }
              interface DOMRSAPSSSignatureMethod extends CombineTypes<[_DOMRSAPSSSignatureMethod, org.jcp.xml.dsig.internal.dom.AbstractDOMSignatureMethod]> {}
              interface _DOMRSAPSSSignatureMethod$RSAPSS$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMRSAPSSSignatureMethod$RSAPSS;
                _new(dmElem: org.w3c.dom.Element): DOMRSAPSSSignatureMethod$RSAPSS;
              }
              let DOMRSAPSSSignatureMethod$RSAPSS: _DOMRSAPSSSignatureMethod$RSAPSS$$static;
              interface _DOMRSAPSSSignatureMethod$RSAPSS {
                getAlgorithm(): string;
                _getAlgorithmType(): AbstractDOMSignatureMethod$Type;
                _getJCAAlgorithm(): string;
              }
              interface DOMRSAPSSSignatureMethod$RSAPSS extends CombineTypes<[_DOMRSAPSSSignatureMethod$RSAPSS, org.jcp.xml.dsig.internal.dom.DOMRSAPSSSignatureMethod]> {}
              interface _DOMReference$$static extends ClassLike {
                _copyDerefData(dereferencedData: javax.xml.crypto.Data): javax.xml.crypto.Data;
                _LOG: com.sun.org.slf4j.internal.Logger;
                readonly MAXIMUM_TRANSFORM_COUNT: int;
                _useC14N11: boolean;
                new(uri: string, type: string, dm: javax.xml.crypto.dsig.DigestMethod, transforms: java.util.List<javax.xml.crypto.dsig.Transform>, id: string, provider: java.security.Provider): DOMReference;
                new(uri: string, type: string, dm: javax.xml.crypto.dsig.DigestMethod, appliedTransforms: java.util.List<javax.xml.crypto.dsig.Transform>, result: javax.xml.crypto.Data, transforms: java.util.List<javax.xml.crypto.dsig.Transform>, id: string, provider: java.security.Provider): DOMReference;
                new(uri: string, type: string, dm: javax.xml.crypto.dsig.DigestMethod, appliedTransforms: java.util.List<javax.xml.crypto.dsig.Transform>, result: javax.xml.crypto.Data, transforms: java.util.List<javax.xml.crypto.dsig.Transform>, id: string, digestValue: byte[], provider: java.security.Provider): DOMReference;
                new(refElem: org.w3c.dom.Element, context: javax.xml.crypto.XMLCryptoContext, provider: java.security.Provider): DOMReference;
              }
              let DOMReference: _DOMReference$$static;
              interface _DOMReference {
                _dereference(context: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.Data;
                digest(signContext: javax.xml.crypto.dsig.XMLSignContext): void;
                equals(o: any): boolean;
                getCalculatedDigestValue(): byte[];
                getDereferencedData(): javax.xml.crypto.Data;
                getDigestInputStream(): java.io.InputStream;
                getDigestMethod(): javax.xml.crypto.dsig.DigestMethod;
                getDigestValue(): byte[];
                getHere(): org.w3c.dom.Node;
                getId(): string;
                getTransforms(): java.util.List<javax.xml.crypto.dsig.Transform>;
                getType(): string;
                getURI(): string;
                hashCode(): int;
                _isDigested(): boolean;
                marshal(parent: org.w3c.dom.Node, dsPrefix: string, context: javax.xml.crypto.dom.DOMCryptoContext): void;
                _transform(dereferencedData: javax.xml.crypto.Data, context: javax.xml.crypto.XMLCryptoContext): byte[];
                validate(validateContext: javax.xml.crypto.dsig.XMLValidateContext): boolean;
                _allTransforms: java.util.List<javax.xml.crypto.dsig.Transform>;
                _appliedTransformData: javax.xml.crypto.Data;
                _calcDigestValue: byte[];
                _derefData: javax.xml.crypto.Data;
                _digestMethod: javax.xml.crypto.dsig.DigestMethod;
                _digestValue: byte[];
                _digested: boolean;
                _dis: java.io.InputStream;
                _here: org.w3c.dom.Attr;
                _id: string;
                _md: java.security.MessageDigest;
                _provider: java.security.Provider;
                _refElem: org.w3c.dom.Element;
                _transforms: java.util.List<javax.xml.crypto.dsig.Transform>;
                _type: string;
                _uri: string;
                _validated: boolean;
                _validationStatus: boolean;
              }
              interface DOMReference extends CombineTypes<[_DOMReference, javax.xml.crypto.dsig.Reference, org.jcp.xml.dsig.internal.dom.DOMStructure, javax.xml.crypto.dom.DOMURIReference]> {}
              interface _DOMRetrievalMethod$$static extends ClassLike {
                new(uri: string, type: string, transforms: java.util.List<javax.xml.crypto.dsig.Transform>): DOMRetrievalMethod;
                new(rmElem: org.w3c.dom.Element, context: javax.xml.crypto.XMLCryptoContext, provider: java.security.Provider): DOMRetrievalMethod;
              }
              let DOMRetrievalMethod: _DOMRetrievalMethod$$static;
              interface _DOMRetrievalMethod {
                dereference(context: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.Data;
                dereferenceAsXMLStructure(context: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.XMLStructure;
                equals(obj: any): boolean;
                getHere(): org.w3c.dom.Node;
                getTransforms(): java.util.List<javax.xml.crypto.dsig.Transform>;
                getType(): string;
                getURI(): string;
                hashCode(): int;
                marshal(parent: org.w3c.dom.Node, dsPrefix: string, context: javax.xml.crypto.dom.DOMCryptoContext): void;
                _here: org.w3c.dom.Attr;
                _transforms: java.util.List<javax.xml.crypto.dsig.Transform>;
                _type: string;
                _uri: string;
              }
              interface DOMRetrievalMethod extends CombineTypes<[_DOMRetrievalMethod, javax.xml.crypto.dsig.keyinfo.RetrievalMethod, org.jcp.xml.dsig.internal.dom.DOMStructure, javax.xml.crypto.dom.DOMURIReference]> {}
              interface _DOMSignatureMethod$$static extends ClassLike {
                _checkKeySize(context: javax.xml.crypto.XMLCryptoContext, key: java.security.Key): void;
                _unmarshal(smElem: org.w3c.dom.Element): javax.xml.crypto.dsig.SignatureMethod;
                _DOM_SIGNATURE_PROVIDER: string;
                _DSA_SHA256: string;
                _ECDSA_RIPEMD160: string;
                _ECDSA_SHA1: string;
                _ECDSA_SHA224: string;
                _ECDSA_SHA256: string;
                _ECDSA_SHA384: string;
                _ECDSA_SHA512: string;
                _ED25519: string;
                _ED448: string;
                _LOG: com.sun.org.slf4j.internal.Logger;
                _RSA_RIPEMD160: string;
                _RSA_RIPEMD160_MGF1: string;
                _RSA_SHA1_MGF1: string;
                _RSA_SHA224: string;
                _RSA_SHA224_MGF1: string;
                _RSA_SHA256: string;
                _RSA_SHA256_MGF1: string;
                _RSA_SHA384: string;
                _RSA_SHA384_MGF1: string;
                _RSA_SHA3_224_MGF1: string;
                _RSA_SHA3_256_MGF1: string;
                _RSA_SHA3_384_MGF1: string;
                _RSA_SHA3_512_MGF1: string;
                _RSA_SHA512: string;
                _RSA_SHA512_MGF1: string;
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMSignatureMethod;
                _new(smElem: org.w3c.dom.Element): DOMSignatureMethod;
              }
              let DOMSignatureMethod: _DOMSignatureMethod$$static;
              interface _DOMSignatureMethod {
                equals(a0: any): boolean;
                getParameterSpec(): java.security.spec.AlgorithmParameterSpec;
                _getSignature(p: java.security.Provider): java.security.Signature;
                hashCode(): int;
                marshal(a0: org.w3c.dom.Node, a1: string, a2: javax.xml.crypto.dom.DOMCryptoContext): void;
                _postSignFormat(a0: java.security.Key, a1: byte[]): byte[];
                _preVerifyFormat(a0: java.security.Key, a1: byte[]): byte[];
                _sign(key: java.security.Key, si: javax.xml.crypto.dsig.SignedInfo, context: javax.xml.crypto.dsig.XMLSignContext): byte[];
                _verify(key: java.security.Key, si: javax.xml.crypto.dsig.SignedInfo, sig: byte[], context: javax.xml.crypto.dsig.XMLValidateContext): boolean;
                _params: javax.xml.crypto.dsig.spec.SignatureMethodParameterSpec;
                _signature: java.security.Signature;
              }
              interface DOMSignatureMethod extends CombineTypes<[_DOMSignatureMethod, org.jcp.xml.dsig.internal.dom.AbstractDOMSignatureMethod]> {}
              interface _DOMSignatureMethod$AbstractDSASignatureMethod$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMSignatureMethod$AbstractDSASignatureMethod;
                _new(dmElem: org.w3c.dom.Element): DOMSignatureMethod$AbstractDSASignatureMethod;
              }
              let DOMSignatureMethod$AbstractDSASignatureMethod: _DOMSignatureMethod$AbstractDSASignatureMethod$$static;
              interface _DOMSignatureMethod$AbstractDSASignatureMethod {
                _getAlgorithmType(): AbstractDOMSignatureMethod$Type;
                _postSignFormat(key: java.security.Key, sig: byte[]): byte[];
                _preVerifyFormat(key: java.security.Key, sig: byte[]): byte[];
              }
              interface DOMSignatureMethod$AbstractDSASignatureMethod extends CombineTypes<[_DOMSignatureMethod$AbstractDSASignatureMethod, org.jcp.xml.dsig.internal.dom.DOMSignatureMethod$AbstractP1363FormatSignatureMethod]> {}
              interface _DOMSignatureMethod$AbstractECDSASignatureMethod$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMSignatureMethod$AbstractECDSASignatureMethod;
                _new(dmElem: org.w3c.dom.Element): DOMSignatureMethod$AbstractECDSASignatureMethod;
              }
              let DOMSignatureMethod$AbstractECDSASignatureMethod: _DOMSignatureMethod$AbstractECDSASignatureMethod$$static;
              interface _DOMSignatureMethod$AbstractECDSASignatureMethod {
                _getAlgorithmType(): AbstractDOMSignatureMethod$Type;
                _postSignFormat(key: java.security.Key, sig: byte[]): byte[];
                _preVerifyFormat(key: java.security.Key, sig: byte[]): byte[];
              }
              interface DOMSignatureMethod$AbstractECDSASignatureMethod extends CombineTypes<[_DOMSignatureMethod$AbstractECDSASignatureMethod, org.jcp.xml.dsig.internal.dom.DOMSignatureMethod$AbstractP1363FormatSignatureMethod]> {}
              interface _DOMSignatureMethod$AbstractEDDSASignatureMethod$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMSignatureMethod$AbstractEDDSASignatureMethod;
                _new(dmElem: org.w3c.dom.Element): DOMSignatureMethod$AbstractEDDSASignatureMethod;
              }
              let DOMSignatureMethod$AbstractEDDSASignatureMethod: _DOMSignatureMethod$AbstractEDDSASignatureMethod$$static;
              interface _DOMSignatureMethod$AbstractEDDSASignatureMethod {
                _getAlgorithmType(): AbstractDOMSignatureMethod$Type;
                _postSignFormat(key: java.security.Key, sig: byte[]): byte[];
                _preVerifyFormat(key: java.security.Key, sig: byte[]): byte[];
              }
              interface DOMSignatureMethod$AbstractEDDSASignatureMethod extends CombineTypes<[_DOMSignatureMethod$AbstractEDDSASignatureMethod, org.jcp.xml.dsig.internal.dom.DOMSignatureMethod]> {}
              interface _DOMSignatureMethod$AbstractP1363FormatSignatureMethod$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMSignatureMethod$AbstractP1363FormatSignatureMethod;
                _new(dmElem: org.w3c.dom.Element): DOMSignatureMethod$AbstractP1363FormatSignatureMethod;
              }
              let DOMSignatureMethod$AbstractP1363FormatSignatureMethod: _DOMSignatureMethod$AbstractP1363FormatSignatureMethod$$static;
              interface _DOMSignatureMethod$AbstractP1363FormatSignatureMethod {
                _getJCAFallbackAlgorithm(): string;
(): string;
                _getSignature(p: java.security.Provider): java.security.Signature;
                _asn1: boolean;
              }
              interface DOMSignatureMethod$AbstractP1363FormatSignatureMethod extends CombineTypes<[_DOMSignatureMethod$AbstractP1363FormatSignatureMethod, org.jcp.xml.dsig.internal.dom.DOMSignatureMethod]> {}
              interface _DOMSignatureMethod$AbstractRSAPSSSignatureMethod$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMSignatureMethod$AbstractRSAPSSSignatureMethod;
                _new(dmElem: org.w3c.dom.Element): DOMSignatureMethod$AbstractRSAPSSSignatureMethod;
              }
              let DOMSignatureMethod$AbstractRSAPSSSignatureMethod: _DOMSignatureMethod$AbstractRSAPSSSignatureMethod$$static;
              interface _DOMSignatureMethod$AbstractRSAPSSSignatureMethod {
                getPSSParameterSpec(): java.security.spec.PSSParameterSpec;
(): java.security.spec.PSSParameterSpec;
                _getSignature(p: java.security.Provider): java.security.Signature;
              }
              interface DOMSignatureMethod$AbstractRSAPSSSignatureMethod extends CombineTypes<[_DOMSignatureMethod$AbstractRSAPSSSignatureMethod, org.jcp.xml.dsig.internal.dom.DOMSignatureMethod$AbstractRSASignatureMethod]> {}
              interface _DOMSignatureMethod$AbstractRSASignatureMethod$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMSignatureMethod$AbstractRSASignatureMethod;
                _new(dmElem: org.w3c.dom.Element): DOMSignatureMethod$AbstractRSASignatureMethod;
              }
              let DOMSignatureMethod$AbstractRSASignatureMethod: _DOMSignatureMethod$AbstractRSASignatureMethod$$static;
              interface _DOMSignatureMethod$AbstractRSASignatureMethod {
                _getAlgorithmType(): AbstractDOMSignatureMethod$Type;
                _postSignFormat(key: java.security.Key, sig: byte[]): byte[];
                _preVerifyFormat(key: java.security.Key, sig: byte[]): byte[];
              }
              interface DOMSignatureMethod$AbstractRSASignatureMethod extends CombineTypes<[_DOMSignatureMethod$AbstractRSASignatureMethod, org.jcp.xml.dsig.internal.dom.DOMSignatureMethod]> {}
              interface _DOMSignatureMethod$EDDSA_ED25519$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMSignatureMethod$EDDSA_ED25519;
                _new(dmElem: org.w3c.dom.Element): DOMSignatureMethod$EDDSA_ED25519;
              }
              let DOMSignatureMethod$EDDSA_ED25519: _DOMSignatureMethod$EDDSA_ED25519$$static;
              interface _DOMSignatureMethod$EDDSA_ED25519 {
                getAlgorithm(): string;
                _getJCAAlgorithm(): string;
              }
              interface DOMSignatureMethod$EDDSA_ED25519 extends CombineTypes<[_DOMSignatureMethod$EDDSA_ED25519, org.jcp.xml.dsig.internal.dom.DOMSignatureMethod$AbstractEDDSASignatureMethod]> {}
              interface _DOMSignatureMethod$EDDSA_ED448$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMSignatureMethod$EDDSA_ED448;
                _new(dmElem: org.w3c.dom.Element): DOMSignatureMethod$EDDSA_ED448;
              }
              let DOMSignatureMethod$EDDSA_ED448: _DOMSignatureMethod$EDDSA_ED448$$static;
              interface _DOMSignatureMethod$EDDSA_ED448 {
                getAlgorithm(): string;
                _getJCAAlgorithm(): string;
              }
              interface DOMSignatureMethod$EDDSA_ED448 extends CombineTypes<[_DOMSignatureMethod$EDDSA_ED448, org.jcp.xml.dsig.internal.dom.DOMSignatureMethod$AbstractEDDSASignatureMethod]> {}
              interface _DOMSignatureMethod$RIPEMD160withECDSA$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMSignatureMethod$RIPEMD160withECDSA;
                _new(dmElem: org.w3c.dom.Element): DOMSignatureMethod$RIPEMD160withECDSA;
              }
              let DOMSignatureMethod$RIPEMD160withECDSA: _DOMSignatureMethod$RIPEMD160withECDSA$$static;
              interface _DOMSignatureMethod$RIPEMD160withECDSA {
                getAlgorithm(): string;
                _getJCAAlgorithm(): string;
                _getJCAFallbackAlgorithm(): string;
              }
              interface DOMSignatureMethod$RIPEMD160withECDSA extends CombineTypes<[_DOMSignatureMethod$RIPEMD160withECDSA, org.jcp.xml.dsig.internal.dom.DOMSignatureMethod$AbstractECDSASignatureMethod]> {}
              interface _DOMSignatureMethod$RIPEMD160withRSA$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMSignatureMethod$RIPEMD160withRSA;
                _new(dmElem: org.w3c.dom.Element): DOMSignatureMethod$RIPEMD160withRSA;
              }
              let DOMSignatureMethod$RIPEMD160withRSA: _DOMSignatureMethod$RIPEMD160withRSA$$static;
              interface _DOMSignatureMethod$RIPEMD160withRSA {
                getAlgorithm(): string;
                _getJCAAlgorithm(): string;
              }
              interface DOMSignatureMethod$RIPEMD160withRSA extends CombineTypes<[_DOMSignatureMethod$RIPEMD160withRSA, org.jcp.xml.dsig.internal.dom.DOMSignatureMethod$AbstractRSASignatureMethod]> {}
              interface _DOMSignatureMethod$RIPEMD160withRSAandMGF1$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMSignatureMethod$RIPEMD160withRSAandMGF1;
                _new(dmElem: org.w3c.dom.Element): DOMSignatureMethod$RIPEMD160withRSAandMGF1;
              }
              let DOMSignatureMethod$RIPEMD160withRSAandMGF1: _DOMSignatureMethod$RIPEMD160withRSAandMGF1$$static;
              interface _DOMSignatureMethod$RIPEMD160withRSAandMGF1 {
                getAlgorithm(): string;
                _getJCAAlgorithm(): string;
              }
              interface DOMSignatureMethod$RIPEMD160withRSAandMGF1 extends CombineTypes<[_DOMSignatureMethod$RIPEMD160withRSAandMGF1, org.jcp.xml.dsig.internal.dom.DOMSignatureMethod$AbstractRSASignatureMethod]> {}
              interface _DOMSignatureMethod$SHA1withDSA$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMSignatureMethod$SHA1withDSA;
                _new(dmElem: org.w3c.dom.Element): DOMSignatureMethod$SHA1withDSA;
              }
              let DOMSignatureMethod$SHA1withDSA: _DOMSignatureMethod$SHA1withDSA$$static;
              interface _DOMSignatureMethod$SHA1withDSA {
                getAlgorithm(): string;
                _getJCAAlgorithm(): string;
                _getJCAFallbackAlgorithm(): string;
              }
              interface DOMSignatureMethod$SHA1withDSA extends CombineTypes<[_DOMSignatureMethod$SHA1withDSA, org.jcp.xml.dsig.internal.dom.DOMSignatureMethod$AbstractDSASignatureMethod]> {}
              interface _DOMSignatureMethod$SHA1withECDSA$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMSignatureMethod$SHA1withECDSA;
                _new(dmElem: org.w3c.dom.Element): DOMSignatureMethod$SHA1withECDSA;
              }
              let DOMSignatureMethod$SHA1withECDSA: _DOMSignatureMethod$SHA1withECDSA$$static;
              interface _DOMSignatureMethod$SHA1withECDSA {
                getAlgorithm(): string;
                _getJCAAlgorithm(): string;
                _getJCAFallbackAlgorithm(): string;
              }
              interface DOMSignatureMethod$SHA1withECDSA extends CombineTypes<[_DOMSignatureMethod$SHA1withECDSA, org.jcp.xml.dsig.internal.dom.DOMSignatureMethod$AbstractECDSASignatureMethod]> {}
              interface _DOMSignatureMethod$SHA1withRSA$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMSignatureMethod$SHA1withRSA;
                _new(dmElem: org.w3c.dom.Element): DOMSignatureMethod$SHA1withRSA;
              }
              let DOMSignatureMethod$SHA1withRSA: _DOMSignatureMethod$SHA1withRSA$$static;
              interface _DOMSignatureMethod$SHA1withRSA {
                getAlgorithm(): string;
                _getJCAAlgorithm(): string;
              }
              interface DOMSignatureMethod$SHA1withRSA extends CombineTypes<[_DOMSignatureMethod$SHA1withRSA, org.jcp.xml.dsig.internal.dom.DOMSignatureMethod$AbstractRSASignatureMethod]> {}
              interface _DOMSignatureMethod$SHA1withRSAandMGF1$$static extends ClassLike {
                _SHA1_MGF1_PARAMS: java.security.spec.PSSParameterSpec;
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMSignatureMethod$SHA1withRSAandMGF1;
                _new(dmElem: org.w3c.dom.Element): DOMSignatureMethod$SHA1withRSAandMGF1;
              }
              let DOMSignatureMethod$SHA1withRSAandMGF1: _DOMSignatureMethod$SHA1withRSAandMGF1$$static;
              interface _DOMSignatureMethod$SHA1withRSAandMGF1 {
                getAlgorithm(): string;
                _getJCAAlgorithm(): string;
                getPSSParameterSpec(): java.security.spec.PSSParameterSpec;
              }
              interface DOMSignatureMethod$SHA1withRSAandMGF1 extends CombineTypes<[_DOMSignatureMethod$SHA1withRSAandMGF1, org.jcp.xml.dsig.internal.dom.DOMSignatureMethod$AbstractRSAPSSSignatureMethod]> {}
              interface _DOMSignatureMethod$SHA224withECDSA$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMSignatureMethod$SHA224withECDSA;
                _new(dmElem: org.w3c.dom.Element): DOMSignatureMethod$SHA224withECDSA;
              }
              let DOMSignatureMethod$SHA224withECDSA: _DOMSignatureMethod$SHA224withECDSA$$static;
              interface _DOMSignatureMethod$SHA224withECDSA {
                getAlgorithm(): string;
                _getJCAAlgorithm(): string;
                _getJCAFallbackAlgorithm(): string;
              }
              interface DOMSignatureMethod$SHA224withECDSA extends CombineTypes<[_DOMSignatureMethod$SHA224withECDSA, org.jcp.xml.dsig.internal.dom.DOMSignatureMethod$AbstractECDSASignatureMethod]> {}
              interface _DOMSignatureMethod$SHA224withRSA$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMSignatureMethod$SHA224withRSA;
                _new(dmElem: org.w3c.dom.Element): DOMSignatureMethod$SHA224withRSA;
              }
              let DOMSignatureMethod$SHA224withRSA: _DOMSignatureMethod$SHA224withRSA$$static;
              interface _DOMSignatureMethod$SHA224withRSA {
                getAlgorithm(): string;
                _getJCAAlgorithm(): string;
              }
              interface DOMSignatureMethod$SHA224withRSA extends CombineTypes<[_DOMSignatureMethod$SHA224withRSA, org.jcp.xml.dsig.internal.dom.DOMSignatureMethod$AbstractRSASignatureMethod]> {}
              interface _DOMSignatureMethod$SHA224withRSAandMGF1$$static extends ClassLike {
                _SHA224_MGF1_PARAMS: java.security.spec.PSSParameterSpec;
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMSignatureMethod$SHA224withRSAandMGF1;
                _new(dmElem: org.w3c.dom.Element): DOMSignatureMethod$SHA224withRSAandMGF1;
              }
              let DOMSignatureMethod$SHA224withRSAandMGF1: _DOMSignatureMethod$SHA224withRSAandMGF1$$static;
              interface _DOMSignatureMethod$SHA224withRSAandMGF1 {
                getAlgorithm(): string;
                _getJCAAlgorithm(): string;
                getPSSParameterSpec(): java.security.spec.PSSParameterSpec;
              }
              interface DOMSignatureMethod$SHA224withRSAandMGF1 extends CombineTypes<[_DOMSignatureMethod$SHA224withRSAandMGF1, org.jcp.xml.dsig.internal.dom.DOMSignatureMethod$AbstractRSAPSSSignatureMethod]> {}
              interface _DOMSignatureMethod$SHA256withDSA$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMSignatureMethod$SHA256withDSA;
                _new(dmElem: org.w3c.dom.Element): DOMSignatureMethod$SHA256withDSA;
              }
              let DOMSignatureMethod$SHA256withDSA: _DOMSignatureMethod$SHA256withDSA$$static;
              interface _DOMSignatureMethod$SHA256withDSA {
                getAlgorithm(): string;
                _getJCAAlgorithm(): string;
                _getJCAFallbackAlgorithm(): string;
              }
              interface DOMSignatureMethod$SHA256withDSA extends CombineTypes<[_DOMSignatureMethod$SHA256withDSA, org.jcp.xml.dsig.internal.dom.DOMSignatureMethod$AbstractDSASignatureMethod]> {}
              interface _DOMSignatureMethod$SHA256withECDSA$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMSignatureMethod$SHA256withECDSA;
                _new(dmElem: org.w3c.dom.Element): DOMSignatureMethod$SHA256withECDSA;
              }
              let DOMSignatureMethod$SHA256withECDSA: _DOMSignatureMethod$SHA256withECDSA$$static;
              interface _DOMSignatureMethod$SHA256withECDSA {
                getAlgorithm(): string;
                _getJCAAlgorithm(): string;
                _getJCAFallbackAlgorithm(): string;
              }
              interface DOMSignatureMethod$SHA256withECDSA extends CombineTypes<[_DOMSignatureMethod$SHA256withECDSA, org.jcp.xml.dsig.internal.dom.DOMSignatureMethod$AbstractECDSASignatureMethod]> {}
              interface _DOMSignatureMethod$SHA256withRSA$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMSignatureMethod$SHA256withRSA;
                _new(dmElem: org.w3c.dom.Element): DOMSignatureMethod$SHA256withRSA;
              }
              let DOMSignatureMethod$SHA256withRSA: _DOMSignatureMethod$SHA256withRSA$$static;
              interface _DOMSignatureMethod$SHA256withRSA {
                getAlgorithm(): string;
                _getJCAAlgorithm(): string;
              }
              interface DOMSignatureMethod$SHA256withRSA extends CombineTypes<[_DOMSignatureMethod$SHA256withRSA, org.jcp.xml.dsig.internal.dom.DOMSignatureMethod$AbstractRSASignatureMethod]> {}
              interface _DOMSignatureMethod$SHA256withRSAandMGF1$$static extends ClassLike {
                _SHA256_MGF1_PARAMS: java.security.spec.PSSParameterSpec;
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMSignatureMethod$SHA256withRSAandMGF1;
                _new(dmElem: org.w3c.dom.Element): DOMSignatureMethod$SHA256withRSAandMGF1;
              }
              let DOMSignatureMethod$SHA256withRSAandMGF1: _DOMSignatureMethod$SHA256withRSAandMGF1$$static;
              interface _DOMSignatureMethod$SHA256withRSAandMGF1 {
                getAlgorithm(): string;
                _getJCAAlgorithm(): string;
                getPSSParameterSpec(): java.security.spec.PSSParameterSpec;
              }
              interface DOMSignatureMethod$SHA256withRSAandMGF1 extends CombineTypes<[_DOMSignatureMethod$SHA256withRSAandMGF1, org.jcp.xml.dsig.internal.dom.DOMSignatureMethod$AbstractRSAPSSSignatureMethod]> {}
              interface _DOMSignatureMethod$SHA384withECDSA$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMSignatureMethod$SHA384withECDSA;
                _new(dmElem: org.w3c.dom.Element): DOMSignatureMethod$SHA384withECDSA;
              }
              let DOMSignatureMethod$SHA384withECDSA: _DOMSignatureMethod$SHA384withECDSA$$static;
              interface _DOMSignatureMethod$SHA384withECDSA {
                getAlgorithm(): string;
                _getJCAAlgorithm(): string;
                _getJCAFallbackAlgorithm(): string;
              }
              interface DOMSignatureMethod$SHA384withECDSA extends CombineTypes<[_DOMSignatureMethod$SHA384withECDSA, org.jcp.xml.dsig.internal.dom.DOMSignatureMethod$AbstractECDSASignatureMethod]> {}
              interface _DOMSignatureMethod$SHA384withRSA$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMSignatureMethod$SHA384withRSA;
                _new(dmElem: org.w3c.dom.Element): DOMSignatureMethod$SHA384withRSA;
              }
              let DOMSignatureMethod$SHA384withRSA: _DOMSignatureMethod$SHA384withRSA$$static;
              interface _DOMSignatureMethod$SHA384withRSA {
                getAlgorithm(): string;
                _getJCAAlgorithm(): string;
              }
              interface DOMSignatureMethod$SHA384withRSA extends CombineTypes<[_DOMSignatureMethod$SHA384withRSA, org.jcp.xml.dsig.internal.dom.DOMSignatureMethod$AbstractRSASignatureMethod]> {}
              interface _DOMSignatureMethod$SHA384withRSAandMGF1$$static extends ClassLike {
                _SHA384_MGF1_PARAMS: java.security.spec.PSSParameterSpec;
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMSignatureMethod$SHA384withRSAandMGF1;
                _new(dmElem: org.w3c.dom.Element): DOMSignatureMethod$SHA384withRSAandMGF1;
              }
              let DOMSignatureMethod$SHA384withRSAandMGF1: _DOMSignatureMethod$SHA384withRSAandMGF1$$static;
              interface _DOMSignatureMethod$SHA384withRSAandMGF1 {
                getAlgorithm(): string;
                _getJCAAlgorithm(): string;
                getPSSParameterSpec(): java.security.spec.PSSParameterSpec;
              }
              interface DOMSignatureMethod$SHA384withRSAandMGF1 extends CombineTypes<[_DOMSignatureMethod$SHA384withRSAandMGF1, org.jcp.xml.dsig.internal.dom.DOMSignatureMethod$AbstractRSAPSSSignatureMethod]> {}
              interface _DOMSignatureMethod$SHA3_224withRSAandMGF1$$static extends ClassLike {
                _SHA3_224_MGF1_PARAMS: java.security.spec.PSSParameterSpec;
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMSignatureMethod$SHA3_224withRSAandMGF1;
                _new(dmElem: org.w3c.dom.Element): DOMSignatureMethod$SHA3_224withRSAandMGF1;
              }
              let DOMSignatureMethod$SHA3_224withRSAandMGF1: _DOMSignatureMethod$SHA3_224withRSAandMGF1$$static;
              interface _DOMSignatureMethod$SHA3_224withRSAandMGF1 {
                getAlgorithm(): string;
                _getJCAAlgorithm(): string;
                getPSSParameterSpec(): java.security.spec.PSSParameterSpec;
              }
              interface DOMSignatureMethod$SHA3_224withRSAandMGF1 extends CombineTypes<[_DOMSignatureMethod$SHA3_224withRSAandMGF1, org.jcp.xml.dsig.internal.dom.DOMSignatureMethod$AbstractRSAPSSSignatureMethod]> {}
              interface _DOMSignatureMethod$SHA3_256withRSAandMGF1$$static extends ClassLike {
                _SHA3_256_MGF1_PARAMS: java.security.spec.PSSParameterSpec;
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMSignatureMethod$SHA3_256withRSAandMGF1;
                _new(dmElem: org.w3c.dom.Element): DOMSignatureMethod$SHA3_256withRSAandMGF1;
              }
              let DOMSignatureMethod$SHA3_256withRSAandMGF1: _DOMSignatureMethod$SHA3_256withRSAandMGF1$$static;
              interface _DOMSignatureMethod$SHA3_256withRSAandMGF1 {
                getAlgorithm(): string;
                _getJCAAlgorithm(): string;
                getPSSParameterSpec(): java.security.spec.PSSParameterSpec;
              }
              interface DOMSignatureMethod$SHA3_256withRSAandMGF1 extends CombineTypes<[_DOMSignatureMethod$SHA3_256withRSAandMGF1, org.jcp.xml.dsig.internal.dom.DOMSignatureMethod$AbstractRSAPSSSignatureMethod]> {}
              interface _DOMSignatureMethod$SHA3_384withRSAandMGF1$$static extends ClassLike {
                _SHA3_384_MGF1_PARAMS: java.security.spec.PSSParameterSpec;
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMSignatureMethod$SHA3_384withRSAandMGF1;
                _new(dmElem: org.w3c.dom.Element): DOMSignatureMethod$SHA3_384withRSAandMGF1;
              }
              let DOMSignatureMethod$SHA3_384withRSAandMGF1: _DOMSignatureMethod$SHA3_384withRSAandMGF1$$static;
              interface _DOMSignatureMethod$SHA3_384withRSAandMGF1 {
                getAlgorithm(): string;
                _getJCAAlgorithm(): string;
                getPSSParameterSpec(): java.security.spec.PSSParameterSpec;
              }
              interface DOMSignatureMethod$SHA3_384withRSAandMGF1 extends CombineTypes<[_DOMSignatureMethod$SHA3_384withRSAandMGF1, org.jcp.xml.dsig.internal.dom.DOMSignatureMethod$AbstractRSAPSSSignatureMethod]> {}
              interface _DOMSignatureMethod$SHA3_512withRSAandMGF1$$static extends ClassLike {
                _SHA3_512_MGF1_PARAMS: java.security.spec.PSSParameterSpec;
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMSignatureMethod$SHA3_512withRSAandMGF1;
                _new(dmElem: org.w3c.dom.Element): DOMSignatureMethod$SHA3_512withRSAandMGF1;
              }
              let DOMSignatureMethod$SHA3_512withRSAandMGF1: _DOMSignatureMethod$SHA3_512withRSAandMGF1$$static;
              interface _DOMSignatureMethod$SHA3_512withRSAandMGF1 {
                getAlgorithm(): string;
                _getJCAAlgorithm(): string;
                getPSSParameterSpec(): java.security.spec.PSSParameterSpec;
              }
              interface DOMSignatureMethod$SHA3_512withRSAandMGF1 extends CombineTypes<[_DOMSignatureMethod$SHA3_512withRSAandMGF1, org.jcp.xml.dsig.internal.dom.DOMSignatureMethod$AbstractRSAPSSSignatureMethod]> {}
              interface _DOMSignatureMethod$SHA512withECDSA$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMSignatureMethod$SHA512withECDSA;
                _new(dmElem: org.w3c.dom.Element): DOMSignatureMethod$SHA512withECDSA;
              }
              let DOMSignatureMethod$SHA512withECDSA: _DOMSignatureMethod$SHA512withECDSA$$static;
              interface _DOMSignatureMethod$SHA512withECDSA {
                getAlgorithm(): string;
                _getJCAAlgorithm(): string;
                _getJCAFallbackAlgorithm(): string;
              }
              interface DOMSignatureMethod$SHA512withECDSA extends CombineTypes<[_DOMSignatureMethod$SHA512withECDSA, org.jcp.xml.dsig.internal.dom.DOMSignatureMethod$AbstractECDSASignatureMethod]> {}
              interface _DOMSignatureMethod$SHA512withRSA$$static extends ClassLike {
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMSignatureMethod$SHA512withRSA;
                _new(dmElem: org.w3c.dom.Element): DOMSignatureMethod$SHA512withRSA;
              }
              let DOMSignatureMethod$SHA512withRSA: _DOMSignatureMethod$SHA512withRSA$$static;
              interface _DOMSignatureMethod$SHA512withRSA {
                getAlgorithm(): string;
                _getJCAAlgorithm(): string;
              }
              interface DOMSignatureMethod$SHA512withRSA extends CombineTypes<[_DOMSignatureMethod$SHA512withRSA, org.jcp.xml.dsig.internal.dom.DOMSignatureMethod$AbstractRSASignatureMethod]> {}
              interface _DOMSignatureMethod$SHA512withRSAandMGF1$$static extends ClassLike {
                _SHA512_MGF1_PARAMS: java.security.spec.PSSParameterSpec;
                _new(params: java.security.spec.AlgorithmParameterSpec): DOMSignatureMethod$SHA512withRSAandMGF1;
                _new(dmElem: org.w3c.dom.Element): DOMSignatureMethod$SHA512withRSAandMGF1;
              }
              let DOMSignatureMethod$SHA512withRSAandMGF1: _DOMSignatureMethod$SHA512withRSAandMGF1$$static;
              interface _DOMSignatureMethod$SHA512withRSAandMGF1 {
                getAlgorithm(): string;
                _getJCAAlgorithm(): string;
                getPSSParameterSpec(): java.security.spec.PSSParameterSpec;
              }
              interface DOMSignatureMethod$SHA512withRSAandMGF1 extends CombineTypes<[_DOMSignatureMethod$SHA512withRSAandMGF1, org.jcp.xml.dsig.internal.dom.DOMSignatureMethod$AbstractRSAPSSSignatureMethod]> {}
              interface _DOMSignatureProperties$$static extends ClassLike {
                new(properties: java.util.List<javax.xml.crypto.dsig.SignatureProperty>, id: string): DOMSignatureProperties;
                new(propsElem: org.w3c.dom.Element): DOMSignatureProperties;
              }
              let DOMSignatureProperties: _DOMSignatureProperties$$static;
              interface _DOMSignatureProperties {
                equals(o: any): boolean;
                getId(): string;
                getProperties(): java.util.List<javax.xml.crypto.dsig.SignatureProperty>;
                hashCode(): int;
                marshal(parent: org.w3c.dom.Node, dsPrefix: string, context: javax.xml.crypto.dom.DOMCryptoContext): void;
                _id: string;
                _properties: java.util.List<javax.xml.crypto.dsig.SignatureProperty>;
              }
              interface DOMSignatureProperties extends CombineTypes<[_DOMSignatureProperties, org.jcp.xml.dsig.internal.dom.DOMStructure, javax.xml.crypto.dsig.SignatureProperties]> {}
              interface _DOMSignatureProperty$$static extends ClassLike {
                new(content: java.util.List<javax.xml.crypto.XMLStructure>, target: string, id: string): DOMSignatureProperty;
                new(propElem: org.w3c.dom.Element): DOMSignatureProperty;
              }
              let DOMSignatureProperty: _DOMSignatureProperty$$static;
              interface _DOMSignatureProperty {
                equals(o: any): boolean;
                getContent(): java.util.List<javax.xml.crypto.XMLStructure>;
                getId(): string;
                getTarget(): string;
                hashCode(): int;
                marshal(parent: org.w3c.dom.Node, dsPrefix: string, context: javax.xml.crypto.dom.DOMCryptoContext): void;
                _content: java.util.List<javax.xml.crypto.XMLStructure>;
                _id: string;
                _target: string;
              }
              interface DOMSignatureProperty extends CombineTypes<[_DOMSignatureProperty, javax.xml.crypto.dsig.SignatureProperty, org.jcp.xml.dsig.internal.dom.DOMStructure]> {}
              interface _DOMSignedInfo$$static extends ClassLike {
                getSignedInfoReferences(si: javax.xml.crypto.dsig.SignedInfo): java.util.List<javax.xml.crypto.dsig.Reference>;
                _LOG: com.sun.org.slf4j.internal.Logger;
                new(cm: javax.xml.crypto.dsig.CanonicalizationMethod, sm: javax.xml.crypto.dsig.SignatureMethod, references: java.util.List<javax.xml.crypto.dsig.Reference>): DOMSignedInfo;
                new(cm: javax.xml.crypto.dsig.CanonicalizationMethod, sm: javax.xml.crypto.dsig.SignatureMethod, references: java.util.List<javax.xml.crypto.dsig.Reference>, id: string): DOMSignedInfo;
                new(siElem: org.w3c.dom.Element, context: javax.xml.crypto.XMLCryptoContext, provider: java.security.Provider): DOMSignedInfo;
              }
              let DOMSignedInfo: _DOMSignedInfo$$static;
              interface _DOMSignedInfo {
                canonicalize(context: javax.xml.crypto.XMLCryptoContext, bos: java.io.ByteArrayOutputStream): void;
                equals(o: any): boolean;
                getCanonicalizationMethod(): javax.xml.crypto.dsig.CanonicalizationMethod;
                getCanonicalizedData(): java.io.InputStream;
                getId(): string;
                getReferences(): java.util.List<javax.xml.crypto.dsig.Reference>;
                getSignatureMethod(): javax.xml.crypto.dsig.SignatureMethod;
                hashCode(): int;
                marshal(parent: org.w3c.dom.Node, dsPrefix: string, context: javax.xml.crypto.dom.DOMCryptoContext): void;
                _canonData: java.io.InputStream;
                _canonicalizationMethod: javax.xml.crypto.dsig.CanonicalizationMethod;
                _id: string;
                _localSiElem: org.w3c.dom.Element;
                _ownerDoc: org.w3c.dom.Document;
                _references: java.util.List<javax.xml.crypto.dsig.Reference>;
                _signatureMethod: javax.xml.crypto.dsig.SignatureMethod;
              }
              interface DOMSignedInfo extends CombineTypes<[_DOMSignedInfo, javax.xml.crypto.dsig.SignedInfo, org.jcp.xml.dsig.internal.dom.DOMStructure]> {}
              interface _DOMStructure$$static extends ClassLike {
                new(): DOMStructure;
              }
              let DOMStructure: _DOMStructure$$static;
              interface _DOMStructure {
                _equalsContent(content: java.util.List<javax.xml.crypto.XMLStructure>, otherContent: java.util.List<javax.xml.crypto.XMLStructure>): boolean;
                isFeatureSupported(feature: string): boolean;
                marshal(a0: org.w3c.dom.Node, a1: string, a2: javax.xml.crypto.dom.DOMCryptoContext): void;
(a0: org.w3c.dom.Node, a1: string, a2: javax.xml.crypto.dom.DOMCryptoContext): void;
              }
              interface DOMStructure extends CombineTypes<[_DOMStructure, java.lang.Object, javax.xml.crypto.XMLStructure]> {}
              interface _DOMSubTreeData$$static extends ClassLike {
                new(root: org.w3c.dom.Node, excludeComments: boolean): DOMSubTreeData;
              }
              let DOMSubTreeData: _DOMSubTreeData$$static;
              interface _DOMSubTreeData {
                excludeComments(): boolean;
                getRoot(): org.w3c.dom.Node;
                iterator(): java.util.Iterator<org.w3c.dom.Node>;
                _excludeComments: boolean;
                _root: org.w3c.dom.Node;
              }
              interface DOMSubTreeData extends CombineTypes<[_DOMSubTreeData, javax.xml.crypto.NodeSetData<org.w3c.dom.Node>, java.lang.Object]> {}
              interface _DOMSubTreeData$DelayedNodeIterator$$static extends ClassLike {
                _new(root: org.w3c.dom.Node, excludeComments: boolean): DOMSubTreeData$DelayedNodeIterator;
              }
              let DOMSubTreeData$DelayedNodeIterator: _DOMSubTreeData$DelayedNodeIterator$$static;
              interface _DOMSubTreeData$DelayedNodeIterator {
                _dereferenceSameDocumentURI(node: org.w3c.dom.Node): java.util.List<org.w3c.dom.Node>;
                hasNext(): boolean;
                next(): org.w3c.dom.Node;
                next(): any;
                _nodeSetMinusCommentNodes(node: org.w3c.dom.Node, nodeSet: java.util.List<org.w3c.dom.Node>, prevSibling: org.w3c.dom.Node): void;
                remove(): void;
                _li: java.util.ListIterator<org.w3c.dom.Node>;
                _nodeSet: java.util.List<org.w3c.dom.Node>;
                _root: org.w3c.dom.Node;
                _withComments: boolean;
              }
              interface DOMSubTreeData$DelayedNodeIterator extends CombineTypes<[_DOMSubTreeData$DelayedNodeIterator, java.util.Iterator<org.w3c.dom.Node>, java.lang.Object]> {}
              interface _DOMTransform$$static extends ClassLike {
                new(spi: javax.xml.crypto.dsig.TransformService): DOMTransform;
                new(transElem: org.w3c.dom.Element, context: javax.xml.crypto.XMLCryptoContext, provider: java.security.Provider): DOMTransform;
              }
              let DOMTransform: _DOMTransform$$static;
              interface _DOMTransform {
                equals(o: any): boolean;
                getAlgorithm(): string;
                getParameterSpec(): java.security.spec.AlgorithmParameterSpec;
                hashCode(): int;
                marshal(parent: org.w3c.dom.Node, dsPrefix: string, context: javax.xml.crypto.dom.DOMCryptoContext): void;
                transform(data: javax.xml.crypto.Data, xc: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.Data;
                transform(data: javax.xml.crypto.Data, xc: javax.xml.crypto.XMLCryptoContext, os: java.io.OutputStream): javax.xml.crypto.Data;
                _transform(data: javax.xml.crypto.Data, xc: javax.xml.crypto.XMLCryptoContext, context: javax.xml.crypto.dsig.dom.DOMSignContext): javax.xml.crypto.Data;
                _spi: javax.xml.crypto.dsig.TransformService;
              }
              interface DOMTransform extends CombineTypes<[_DOMTransform, javax.xml.crypto.dsig.Transform, org.jcp.xml.dsig.internal.dom.DOMStructure]> {}
              interface _DOMURIDereferencer$$static extends ClassLike {
                _INSTANCE: javax.xml.crypto.URIDereferencer;
              }
              let DOMURIDereferencer: _DOMURIDereferencer$$static;
              interface _DOMURIDereferencer {
                dereference(uriRef: javax.xml.crypto.URIReference, context: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.Data;
              }
              interface DOMURIDereferencer extends CombineTypes<[_DOMURIDereferencer, javax.xml.crypto.URIDereferencer, java.lang.Object]> {}
              interface _DOMUtils$$static extends ClassLike {
                appendChild(parent: org.w3c.dom.Node, child: org.w3c.dom.Node): void;
                createElement(doc: org.w3c.dom.Document, tag: string, nsURI: string, prefix: string): org.w3c.dom.Element;
                getAttributeValue(elem: org.w3c.dom.Element, name: string): string;
                getFirstChildElement(node: org.w3c.dom.Node): org.w3c.dom.Element;
                getFirstChildElement(node: org.w3c.dom.Node, localName: string, namespaceURI: string): org.w3c.dom.Element;
                getIdAttributeValue<N>(elem: org.w3c.dom.Element, name: string): string;
                getLastChildElement(node: org.w3c.dom.Node): org.w3c.dom.Element;
                getNSPrefix(context: javax.xml.crypto.XMLCryptoContext, nsURI: string): string;
                getNextSiblingElement(node: org.w3c.dom.Node): org.w3c.dom.Element;
                getNextSiblingElement(node: org.w3c.dom.Node, localName: string, namespaceURI: string): org.w3c.dom.Element;
                getOwnerDocument(node: org.w3c.dom.Node): org.w3c.dom.Document;
                getQNameString(prefix: string, localName: string): string;
                getSignaturePrefix(context: javax.xml.crypto.XMLCryptoContext): string;
                isNamespace(node: org.w3c.dom.Node): boolean;
                nodesEqual(thisNode: org.w3c.dom.Node, otherNode: org.w3c.dom.Node): boolean;
                paramsEqual(spec1: java.security.spec.AlgorithmParameterSpec, spec2: java.security.spec.AlgorithmParameterSpec): boolean;
                _paramsEqual(spec1: javax.xml.crypto.dsig.spec.XPathFilter2ParameterSpec, spec2: javax.xml.crypto.dsig.spec.XPathFilter2ParameterSpec): boolean;
                _paramsEqual(spec1: javax.xml.crypto.dsig.spec.ExcC14NParameterSpec, spec2: javax.xml.crypto.dsig.spec.ExcC14NParameterSpec): boolean;
                _paramsEqual(spec1: javax.xml.crypto.dsig.spec.XPathFilterParameterSpec, spec2: javax.xml.crypto.dsig.spec.XPathFilterParameterSpec): boolean;
                _paramsEqual(spec1: javax.xml.crypto.dsig.spec.XSLTTransformParameterSpec, spec2: javax.xml.crypto.dsig.spec.XSLTTransformParameterSpec): boolean;
                removeAllChildren(node: org.w3c.dom.Node): void;
                setAttribute(elem: org.w3c.dom.Element, name: string, value: string): void;
                setAttributeID(elem: org.w3c.dom.Element, name: string, value: string): void;
                _verifyElement(elem: org.w3c.dom.Element, localName: string, namespaceURI: string): org.w3c.dom.Element;
              }
              let DOMUtils: _DOMUtils$$static;
              interface _DOMUtils {
              }
              interface DOMUtils extends CombineTypes<[_DOMUtils, java.lang.Object]> {}
              interface _DOMX509Data$$static extends ClassLike {
                new(content: java.util.List<any>): DOMX509Data;
                new(xdElem: org.w3c.dom.Element): DOMX509Data;
              }
              let DOMX509Data: _DOMX509Data$$static;
              interface _DOMX509Data {
                equals(o: any): boolean;
                getContent(): java.util.List<any>;
                hashCode(): int;
                marshal(parent: org.w3c.dom.Node, dsPrefix: string, context: javax.xml.crypto.dom.DOMCryptoContext): void;
                _marshalCRL(crl: java.security.cert.X509CRL, parent: org.w3c.dom.Node, doc: org.w3c.dom.Document, dsPrefix: string): void;
                _marshalCert(cert: java.security.cert.X509Certificate, parent: org.w3c.dom.Node, doc: org.w3c.dom.Document, dsPrefix: string): void;
                _marshalSKI(skid: byte[], parent: org.w3c.dom.Node, doc: org.w3c.dom.Document, dsPrefix: string): void;
                _marshalSubjectName(name: string, parent: org.w3c.dom.Node, doc: org.w3c.dom.Document, dsPrefix: string): void;
                _unmarshalBase64Binary(elem: org.w3c.dom.Element): java.io.ByteArrayInputStream;
                _unmarshalX509CRL(elem: org.w3c.dom.Element): java.security.cert.X509CRL;
                _unmarshalX509Certificate(elem: org.w3c.dom.Element): java.security.cert.X509Certificate;
                _cf: java.security.cert.CertificateFactory;
                _content: java.util.List<any>;
              }
              interface DOMX509Data extends CombineTypes<[_DOMX509Data, javax.xml.crypto.dsig.keyinfo.X509Data, org.jcp.xml.dsig.internal.dom.DOMStructure]> {}
              interface _DOMX509IssuerSerial$$static extends ClassLike {
                new(issuerName: string, serialNumber: java.math.BigInteger): DOMX509IssuerSerial;
                new(isElem: org.w3c.dom.Element): DOMX509IssuerSerial;
              }
              let DOMX509IssuerSerial: _DOMX509IssuerSerial$$static;
              interface _DOMX509IssuerSerial {
                equals(obj: any): boolean;
                getIssuerName(): string;
                getSerialNumber(): java.math.BigInteger;
                hashCode(): int;
                marshal(parent: org.w3c.dom.Node, dsPrefix: string, context: javax.xml.crypto.dom.DOMCryptoContext): void;
                _issuerName: string;
                _serialNumber: java.math.BigInteger;
              }
              interface DOMX509IssuerSerial extends CombineTypes<[_DOMX509IssuerSerial, javax.xml.crypto.dsig.keyinfo.X509IssuerSerial, org.jcp.xml.dsig.internal.dom.DOMStructure]> {}
              interface _DOMXMLObject$$static extends ClassLike {
                new(content: java.util.List<javax.xml.crypto.XMLStructure>, id: string, mimeType: string, encoding: string): DOMXMLObject;
                new(objElem: org.w3c.dom.Element, context: javax.xml.crypto.XMLCryptoContext, provider: java.security.Provider): DOMXMLObject;
              }
              let DOMXMLObject: _DOMXMLObject$$static;
              interface _DOMXMLObject {
                equals(o: any): boolean;
                getContent(): java.util.List<javax.xml.crypto.XMLStructure>;
                getEncoding(): string;
                getId(): string;
                getMimeType(): string;
                hashCode(): int;
                marshal(parent: org.w3c.dom.Node, dsPrefix: string, context: javax.xml.crypto.dom.DOMCryptoContext): void;
                _content: java.util.List<javax.xml.crypto.XMLStructure>;
                _encoding: string;
                _id: string;
                _mimeType: string;
                _objectElem: org.w3c.dom.Element;
              }
              interface DOMXMLObject extends CombineTypes<[_DOMXMLObject, org.jcp.xml.dsig.internal.dom.DOMStructure, javax.xml.crypto.dsig.XMLObject]> {}
              interface _DOMXMLSignature$$static extends ClassLike {
                _LOG: com.sun.org.slf4j.internal.Logger;
                new(si: javax.xml.crypto.dsig.SignedInfo, ki: javax.xml.crypto.dsig.keyinfo.KeyInfo, objs: java.util.List<javax.xml.crypto.dsig.XMLObject>, id: string, signatureValueId: string): DOMXMLSignature;
                new(sigElem: org.w3c.dom.Element, context: javax.xml.crypto.XMLCryptoContext, provider: java.security.Provider): DOMXMLSignature;
              }
              let DOMXMLSignature: _DOMXMLSignature$$static;
              interface _DOMXMLSignature {
                _digestReference(ref: DOMReference, signContext: javax.xml.crypto.dsig.XMLSignContext): void;
                equals(o: any): boolean;
                getId(): string;
                getKeyInfo(): javax.xml.crypto.dsig.keyinfo.KeyInfo;
                getKeySelectorResult(): javax.xml.crypto.KeySelectorResult;
                getObjects(): java.util.List<javax.xml.crypto.dsig.XMLObject>;
                getSignatureValue(): javax.xml.crypto.dsig.XMLSignature$SignatureValue;
                getSignedInfo(): javax.xml.crypto.dsig.SignedInfo;
                hashCode(): int;
                marshal(parent: org.w3c.dom.Node, dsPrefix: string, context: javax.xml.crypto.dom.DOMCryptoContext): void;
                marshal(parent: org.w3c.dom.Node, nextSibling: org.w3c.dom.Node, dsPrefix: string, context: javax.xml.crypto.dom.DOMCryptoContext): void;
                sign(signContext: javax.xml.crypto.dsig.XMLSignContext): void;
                validate(vc: javax.xml.crypto.dsig.XMLValidateContext): boolean;
                _id: string;
                _ki: javax.xml.crypto.dsig.keyinfo.KeyInfo;
                _ksr: javax.xml.crypto.KeySelectorResult;
                _localSigElem: org.w3c.dom.Element;
                _objects: java.util.List<javax.xml.crypto.dsig.XMLObject>;
                _ownerDoc: org.w3c.dom.Document;
                _si: javax.xml.crypto.dsig.SignedInfo;
                _sigElem: org.w3c.dom.Element;
                _signatureIdMap: java.util.Map<string,javax.xml.crypto.XMLStructure>;
                _sv: javax.xml.crypto.dsig.XMLSignature$SignatureValue;
                _validated: boolean;
                _validationStatus: boolean;
              }
              interface DOMXMLSignature extends CombineTypes<[_DOMXMLSignature, org.jcp.xml.dsig.internal.dom.DOMStructure, javax.xml.crypto.dsig.XMLSignature]> {}
              interface _DOMXMLSignature$DOMSignatureValue$$static extends ClassLike {
                _new(this$0: DOMXMLSignature, id: string): DOMXMLSignature$DOMSignatureValue;
                _new(this$0: DOMXMLSignature, sigValueElem: org.w3c.dom.Element): DOMXMLSignature$DOMSignatureValue;
              }
              let DOMXMLSignature$DOMSignatureValue: _DOMXMLSignature$DOMSignatureValue$$static;
              interface _DOMXMLSignature$DOMSignatureValue {
                equals(o: any): boolean;
                getEncodedValue(): string;
                getId(): string;
                getValue(): byte[];
                hashCode(): int;
                marshal(parent: org.w3c.dom.Node, dsPrefix: string, context: javax.xml.crypto.dom.DOMCryptoContext): void;
                _setValue(value: byte[]): void;
                validate(validateContext: javax.xml.crypto.dsig.XMLValidateContext): boolean;
                _id: string;
                _sigValueElem: org.w3c.dom.Element;
                _this$0: DOMXMLSignature;
                _validated: boolean;
                _validationStatus: boolean;
                _value: byte[];
                _valueBase64: string;
              }
              interface DOMXMLSignature$DOMSignatureValue extends CombineTypes<[_DOMXMLSignature$DOMSignatureValue, javax.xml.crypto.dsig.XMLSignature$SignatureValue, org.jcp.xml.dsig.internal.dom.DOMStructure]> {}
              interface _DOMXMLSignatureFactory$$static extends ClassLike {
                new(): DOMXMLSignatureFactory;
              }
              let DOMXMLSignatureFactory: _DOMXMLSignatureFactory$$static;
              interface _DOMXMLSignatureFactory {
                getURIDereferencer(): javax.xml.crypto.URIDereferencer;
                isFeatureSupported(feature: string): boolean;
                newCanonicalizationMethod(algorithm: string, params: javax.xml.crypto.dsig.spec.C14NMethodParameterSpec): javax.xml.crypto.dsig.CanonicalizationMethod;
                newCanonicalizationMethod(algorithm: string, params: javax.xml.crypto.XMLStructure): javax.xml.crypto.dsig.CanonicalizationMethod;
                newDigestMethod(algorithm: string, params: javax.xml.crypto.dsig.spec.DigestMethodParameterSpec): javax.xml.crypto.dsig.DigestMethod;
                newManifest(references: java.util.List): javax.xml.crypto.dsig.Manifest;
                newManifest(references: java.util.List, id: string): javax.xml.crypto.dsig.Manifest;
                newReference(uri: string, dm: javax.xml.crypto.dsig.DigestMethod): javax.xml.crypto.dsig.Reference;
                newReference(uri: string, dm: javax.xml.crypto.dsig.DigestMethod, transforms: java.util.List, type: string, id: string): javax.xml.crypto.dsig.Reference;
                newReference(uri: string, dm: javax.xml.crypto.dsig.DigestMethod, appliedTransforms: java.util.List, result: javax.xml.crypto.Data, transforms: java.util.List, type: string, id: string): javax.xml.crypto.dsig.Reference;
                newReference(uri: string, dm: javax.xml.crypto.dsig.DigestMethod, transforms: java.util.List, type: string, id: string, digestValue: byte[]): javax.xml.crypto.dsig.Reference;
                newSignatureMethod(algorithm: string, params: javax.xml.crypto.dsig.spec.SignatureMethodParameterSpec): javax.xml.crypto.dsig.SignatureMethod;
                newSignatureProperties(props: java.util.List, id: string): javax.xml.crypto.dsig.SignatureProperties;
                newSignatureProperty(info: java.util.List, target: string, id: string): javax.xml.crypto.dsig.SignatureProperty;
                newSignedInfo(cm: javax.xml.crypto.dsig.CanonicalizationMethod, sm: javax.xml.crypto.dsig.SignatureMethod, references: java.util.List): javax.xml.crypto.dsig.SignedInfo;
                newSignedInfo(cm: javax.xml.crypto.dsig.CanonicalizationMethod, sm: javax.xml.crypto.dsig.SignatureMethod, references: java.util.List, id: string): javax.xml.crypto.dsig.SignedInfo;
                newTransform(algorithm: string, params: javax.xml.crypto.dsig.spec.TransformParameterSpec): javax.xml.crypto.dsig.Transform;
                newTransform(algorithm: string, params: javax.xml.crypto.XMLStructure): javax.xml.crypto.dsig.Transform;
                newXMLObject(content: java.util.List, id: string, mimeType: string, encoding: string): javax.xml.crypto.dsig.XMLObject;
                newXMLSignature(si: javax.xml.crypto.dsig.SignedInfo, ki: javax.xml.crypto.dsig.keyinfo.KeyInfo): javax.xml.crypto.dsig.XMLSignature;
                newXMLSignature(si: javax.xml.crypto.dsig.SignedInfo, ki: javax.xml.crypto.dsig.keyinfo.KeyInfo, objects: java.util.List, id: string, signatureValueId: string): javax.xml.crypto.dsig.XMLSignature;
                _unmarshal(node: org.w3c.dom.Node, context: javax.xml.crypto.XMLCryptoContext): javax.xml.crypto.dsig.XMLSignature;
                unmarshalXMLSignature(context: javax.xml.crypto.dsig.XMLValidateContext): javax.xml.crypto.dsig.XMLSignature;
                unmarshalXMLSignature(xmlStructure: javax.xml.crypto.XMLStructure): javax.xml.crypto.dsig.XMLSignature;
              }
              interface DOMXMLSignatureFactory extends CombineTypes<[_DOMXMLSignatureFactory, javax.xml.crypto.dsig.XMLSignatureFactory]> {}
              interface _DOMXMLSignatureFactory$UnmarshalContext$$static extends ClassLike {
                _new(): DOMXMLSignatureFactory$UnmarshalContext;
              }
              let DOMXMLSignatureFactory$UnmarshalContext: _DOMXMLSignatureFactory$UnmarshalContext$$static;
              interface _DOMXMLSignatureFactory$UnmarshalContext {
              }
              interface DOMXMLSignatureFactory$UnmarshalContext extends CombineTypes<[_DOMXMLSignatureFactory$UnmarshalContext, javax.xml.crypto.dom.DOMCryptoContext]> {}
              interface _DOMXPathFilter2Transform$$static extends ClassLike {
                new(): DOMXPathFilter2Transform;
              }
              let DOMXPathFilter2Transform: _DOMXPathFilter2Transform$$static;
              interface _DOMXPathFilter2Transform {
                init(params: javax.xml.crypto.dsig.spec.TransformParameterSpec): void;
                init(parent: javax.xml.crypto.XMLStructure, context: javax.xml.crypto.XMLCryptoContext): void;
                marshalParams(parent: javax.xml.crypto.XMLStructure, context: javax.xml.crypto.XMLCryptoContext): void;
                _unmarshalParams(curXPathElem: org.w3c.dom.Element): void;
              }
              interface DOMXPathFilter2Transform extends CombineTypes<[_DOMXPathFilter2Transform, org.jcp.xml.dsig.internal.dom.ApacheTransform]> {}
              interface _DOMXPathTransform$$static extends ClassLike {
                new(): DOMXPathTransform;
              }
              let DOMXPathTransform: _DOMXPathTransform$$static;
              interface _DOMXPathTransform {
                init(params: javax.xml.crypto.dsig.spec.TransformParameterSpec): void;
                init(parent: javax.xml.crypto.XMLStructure, context: javax.xml.crypto.XMLCryptoContext): void;
                marshalParams(parent: javax.xml.crypto.XMLStructure, context: javax.xml.crypto.XMLCryptoContext): void;
                _unmarshalParams(paramsElem: org.w3c.dom.Element): void;
              }
              interface DOMXPathTransform extends CombineTypes<[_DOMXPathTransform, org.jcp.xml.dsig.internal.dom.ApacheTransform]> {}
              interface _DOMXSLTTransform$$static extends ClassLike {
                new(): DOMXSLTTransform;
              }
              let DOMXSLTTransform: _DOMXSLTTransform$$static;
              interface _DOMXSLTTransform {
                init(params: javax.xml.crypto.dsig.spec.TransformParameterSpec): void;
                init(parent: javax.xml.crypto.XMLStructure, context: javax.xml.crypto.XMLCryptoContext): void;
                marshalParams(parent: javax.xml.crypto.XMLStructure, context: javax.xml.crypto.XMLCryptoContext): void;
                _unmarshalParams(sheet: org.w3c.dom.Element): void;
              }
              interface DOMXSLTTransform extends CombineTypes<[_DOMXSLTTransform, org.jcp.xml.dsig.internal.dom.ApacheTransform]> {}
              interface _Policy$$static extends ClassLike {
                disabledAlgs(): java.util.Set<java.net.URI>;
                disabledReferenceUriSchemes(): java.util.Set<string>;
                _error(entry: string): void;
                _initialize(): void;
                maxReferences(): int;
                maxTransforms(): int;
                minKeySize(type: string): int;
                restrictAlg(alg: string): boolean;
                restrictDuplicateIds(): boolean;
                restrictKey(type: string, size: int): boolean;
                restrictNumReferences(numRefs: int): boolean;
                restrictNumTransforms(numTrans: int): boolean;
                restrictReferenceUriScheme(uri: string): boolean;
                restrictRetrievalMethodLoops(): boolean;
                _disallowedAlgs: java.util.Set<java.net.URI>;
                _disallowedRefUriSchemes: java.util.Set<string>;
                _maxRefs: int;
                _maxTrans: int;
                _minKeyMap: java.util.Map<string,int>;
                _noDuplicateIds: boolean;
                _noRMLoops: boolean;
              }
              let Policy: _Policy$$static;
              interface _Policy {
              }
              interface Policy extends CombineTypes<[_Policy, java.lang.Object]> {}
              interface _Utils$$static extends ClassLike {
                _getBoolean(xc: javax.xml.crypto.XMLCryptoContext, name: string): boolean;
                parseIdFromSameDocumentURI(uri: string): string;
                _privilegedGetProperty(theProp: string): string;
                readBytesFromStream(is: java.io.InputStream): byte[];
                sameDocumentURI(uri: string): boolean;
                _secureValidation(xc: javax.xml.crypto.XMLCryptoContext): boolean;
                _toNodeSet(i: java.util.Iterator<any>): java.util.Set<org.w3c.dom.Node>;
                _LOG: com.sun.org.slf4j.internal.Logger;
                _SECVAL_PROP_NAME: string;
                _SECVAL_SYSPROP: boolean;
                _SECVAL_SYSPROP_SET: boolean;
              }
              let Utils: _Utils$$static;
              interface _Utils {
              }
              interface Utils extends CombineTypes<[_Utils, java.lang.Object]> {}
              interface _XMLDSigRI$$static extends ClassLike {
                _INFO: string;
                _VER: string;
                _serialVersionUID: long;
                new(): XMLDSigRI;
              }
              let XMLDSigRI: _XMLDSigRI$$static;
              interface _XMLDSigRI {
              }
              interface XMLDSigRI extends CombineTypes<[_XMLDSigRI, java.security.Provider]> {}
              interface _XMLDSigRI$ProviderService$$static extends ClassLike {
                _new(p: java.security.Provider, type: string, algo: string, cn: string): XMLDSigRI$ProviderService;
                _new(p: java.security.Provider, type: string, algo: string, cn: string, aliases: string[]): XMLDSigRI$ProviderService;
                _new(p: java.security.Provider, type: string, algo: string, cn: string, aliases: string[], attrs: java.util.Map<string,string>): XMLDSigRI$ProviderService;
              }
              let XMLDSigRI$ProviderService: _XMLDSigRI$ProviderService$$static;
              interface _XMLDSigRI$ProviderService {
                newInstance(ctrParamObj: any): any;
              }
              interface XMLDSigRI$ProviderService extends CombineTypes<[_XMLDSigRI$ProviderService, java.security.Provider$Service]> {}
            }
            interface _DigesterOutputStream$$static extends ClassLike {
              _LOG: com.sun.org.slf4j.internal.Logger;
              new(md: java.security.MessageDigest): DigesterOutputStream;
              new(md: java.security.MessageDigest, buffer: boolean): DigesterOutputStream;
            }
            let DigesterOutputStream: _DigesterOutputStream$$static;
            interface _DigesterOutputStream {
              close(): void;
              getDigestValue(): byte[];
              getInputStream(): java.io.InputStream;
              write(input: int): void;
              write(input: byte[], offset: int, len: int): void;
              _bos: com.sun.org.apache.xml.internal.security.utils.UnsyncByteArrayOutputStream;
              _buffer: boolean;
              _md: java.security.MessageDigest;
            }
            interface DigesterOutputStream extends CombineTypes<[_DigesterOutputStream, java.io.OutputStream]> {}
            interface _MacOutputStream$$static extends ClassLike {
              new(mac: javax.crypto.Mac): MacOutputStream;
            }
            let MacOutputStream: _MacOutputStream$$static;
            interface _MacOutputStream {
              write(arg0: int): void;
              write(arg0: byte[], arg1: int, arg2: int): void;
              _mac: javax.crypto.Mac;
            }
            interface MacOutputStream extends CombineTypes<[_MacOutputStream, java.io.ByteArrayOutputStream]> {}
            interface _SignerOutputStream$$static extends ClassLike {
              new(sig: java.security.Signature): SignerOutputStream;
            }
            let SignerOutputStream: _SignerOutputStream$$static;
            interface _SignerOutputStream {
              write(arg0: int): void;
              write(arg0: byte[], arg1: int, arg2: int): void;
              _sig: java.security.Signature;
            }
            interface SignerOutputStream extends CombineTypes<[_SignerOutputStream, java.io.ByteArrayOutputStream]> {}
          }
        }
      }
    }
  }
}
