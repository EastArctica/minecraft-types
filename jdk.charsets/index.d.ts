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
    module nio {
      module cs {
        module ext {
          interface _AbstractCharsetProvider$$static extends ClassLike {
            _remove<K, V>(m: java.util.Map<K,V>, name: K): void;
            _new(): AbstractCharsetProvider;
            _new(pkgPrefixName: string): AbstractCharsetProvider;
          }
          let AbstractCharsetProvider: _AbstractCharsetProvider$$static;
          interface _AbstractCharsetProvider {
            aliases(charsetName: string): string[];
            _canonicalize(charsetName: string): string;
            _charset(name: string, className: string, aliases: string[]): void;
            charsetForName(charsetName: string): java.nio.charset.Charset;
            charsets(): java.util.Iterator<java.nio.charset.Charset>;
            _deleteCharset(name: string, aliases: string[]): void;
            _hasCharset(name: string): boolean;
            _init(): void;
            _lookup(csn: string): java.nio.charset.Charset;
            _aliasMap: java.util.Map<string,string>;
            _aliasNameMap: java.util.Map<string,string[]>;
            _cache: java.util.Map<string,java.lang.ref.SoftReference<java.nio.charset.Charset>>;
            _classMap: java.util.Map<string,string>;
            _packagePrefix: string;
          }
          interface AbstractCharsetProvider extends CombineTypes<[_AbstractCharsetProvider, java.nio.charset.spi.CharsetProvider]> {}
          interface _Big5$$static extends ClassLike {
            new(): Big5;
          }
          let Big5: _Big5$$static;
          interface _Big5 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface Big5 extends CombineTypes<[_Big5, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _Big5$DecodeHolder$$static extends ClassLike {
            readonly b2c: char[][];
            readonly b2cSB: char[];
            _b2cSBStr: string;
            _b2cStr: string[];
            new(): Big5$DecodeHolder;
          }
          let Big5$DecodeHolder: _Big5$DecodeHolder$$static;
          interface _Big5$DecodeHolder {
          }
          interface Big5$DecodeHolder extends CombineTypes<[_Big5$DecodeHolder, java.lang.Object]> {}
          interface _Big5$EncodeHolder$$static extends ClassLike {
            readonly c2b: char[];
            readonly c2bIndex: char[];
            new(): Big5$EncodeHolder;
          }
          let Big5$EncodeHolder: _Big5$EncodeHolder$$static;
          interface _Big5$EncodeHolder {
          }
          interface Big5$EncodeHolder extends CombineTypes<[_Big5$EncodeHolder, java.lang.Object]> {}
          interface _Big5_HKSCS$$static extends ClassLike {
            new(): Big5_HKSCS;
          }
          let Big5_HKSCS: _Big5_HKSCS$$static;
          interface _Big5_HKSCS {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface Big5_HKSCS extends CombineTypes<[_Big5_HKSCS, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _Big5_HKSCS$Decoder$$static extends ClassLike {
            _b2cBmp: char[][];
            _b2cSupp: char[][];
            _big5: DoubleByte$Decoder;
          }
          let Big5_HKSCS$Decoder: _Big5_HKSCS$Decoder$$static;
          interface _Big5_HKSCS$Decoder {
          }
          interface Big5_HKSCS$Decoder extends CombineTypes<[_Big5_HKSCS$Decoder, sun.nio.cs.HKSCS$Decoder]> {}
          interface _Big5_HKSCS$Encoder$$static extends ClassLike {
            _big5: DoubleByte$Encoder;
            _c2bBmp: char[][];
            _c2bSupp: char[][];
          }
          let Big5_HKSCS$Encoder: _Big5_HKSCS$Encoder$$static;
          interface _Big5_HKSCS$Encoder {
          }
          interface Big5_HKSCS$Encoder extends CombineTypes<[_Big5_HKSCS$Encoder, sun.nio.cs.HKSCS$Encoder]> {}
          interface _Big5_HKSCS_2001$$static extends ClassLike {
            new(): Big5_HKSCS_2001;
          }
          let Big5_HKSCS_2001: _Big5_HKSCS_2001$$static;
          interface _Big5_HKSCS_2001 {
            contains(cs: java.nio.charset.Charset): boolean;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface Big5_HKSCS_2001 extends CombineTypes<[_Big5_HKSCS_2001, java.nio.charset.Charset]> {}
          interface _Big5_HKSCS_2001$Decoder$$static extends ClassLike {
            _b2cBmp: char[][];
            _b2cSupp: char[][];
            _big5: DoubleByte$Decoder;
          }
          let Big5_HKSCS_2001$Decoder: _Big5_HKSCS_2001$Decoder$$static;
          interface _Big5_HKSCS_2001$Decoder {
          }
          interface Big5_HKSCS_2001$Decoder extends CombineTypes<[_Big5_HKSCS_2001$Decoder, sun.nio.cs.HKSCS$Decoder]> {}
          interface _Big5_HKSCS_2001$Encoder$$static extends ClassLike {
            _big5: DoubleByte$Encoder;
            _c2bBmp: char[][];
            _c2bSupp: char[][];
          }
          let Big5_HKSCS_2001$Encoder: _Big5_HKSCS_2001$Encoder$$static;
          interface _Big5_HKSCS_2001$Encoder {
          }
          interface Big5_HKSCS_2001$Encoder extends CombineTypes<[_Big5_HKSCS_2001$Encoder, sun.nio.cs.HKSCS$Encoder]> {}
          interface _Big5_Solaris$$static extends ClassLike {
            new(): Big5_Solaris;
          }
          let Big5_Solaris: _Big5_Solaris$$static;
          interface _Big5_Solaris {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface Big5_Solaris extends CombineTypes<[_Big5_Solaris, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _Big5_Solaris$Holder$$static extends ClassLike {
            _b2c: char[][];
            _b2cSB: char[];
            _c2b: char[];
            _c2bIndex: char[];
          }
          let Big5_Solaris$Holder: _Big5_Solaris$Holder$$static;
          interface _Big5_Solaris$Holder {
          }
          interface Big5_Solaris$Holder extends CombineTypes<[_Big5_Solaris$Holder, java.lang.Object]> {}
          interface _EUC_CN$$static extends ClassLike {
            new(): EUC_CN;
          }
          let EUC_CN: _EUC_CN$$static;
          interface _EUC_CN {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface EUC_CN extends CombineTypes<[_EUC_CN, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _EUC_CN$DecodeHolder$$static extends ClassLike {
            readonly b2c: char[][];
            readonly b2cSB: char[];
            _b2cSBStr: string;
            _b2cStr: string[];
            new(): EUC_CN$DecodeHolder;
          }
          let EUC_CN$DecodeHolder: _EUC_CN$DecodeHolder$$static;
          interface _EUC_CN$DecodeHolder {
          }
          interface EUC_CN$DecodeHolder extends CombineTypes<[_EUC_CN$DecodeHolder, java.lang.Object]> {}
          interface _EUC_CN$EncodeHolder$$static extends ClassLike {
            readonly c2b: char[];
            readonly c2bIndex: char[];
            new(): EUC_CN$EncodeHolder;
          }
          let EUC_CN$EncodeHolder: _EUC_CN$EncodeHolder$$static;
          interface _EUC_CN$EncodeHolder {
          }
          interface EUC_CN$EncodeHolder extends CombineTypes<[_EUC_CN$EncodeHolder, java.lang.Object]> {}
          interface _EUC_JP$$static extends ClassLike {
            _JLA: jdk.internal.access.JavaLangAccess;
            new(): EUC_JP;
          }
          let EUC_JP: _EUC_JP$$static;
          interface _EUC_JP {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface EUC_JP extends CombineTypes<[_EUC_JP, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _EUC_JP$Decoder$$static extends ClassLike {
            readonly DEC0201: SingleByte$Decoder;
            readonly DEC0208: DoubleByte$Decoder;
            readonly DEC0212: DoubleByte$Decoder;
            _new(cs: java.nio.charset.Charset): EUC_JP$Decoder;
            _new(cs: java.nio.charset.Charset, avgCpb: float, maxCpb: float, dec0201: SingleByte$Decoder, dec0208: DoubleByte$Decoder, dec0212: DoubleByte$Decoder): EUC_JP$Decoder;
          }
          let EUC_JP$Decoder: _EUC_JP$Decoder$$static;
          interface _EUC_JP$Decoder {
            _decodeArrayLoop(src: java.nio.ByteBuffer, dst: java.nio.CharBuffer): java.nio.charset.CoderResult;
            _decodeBufferLoop(src: java.nio.ByteBuffer, dst: java.nio.CharBuffer): java.nio.charset.CoderResult;
            _decodeDouble(byte1: int, byte2: int): char;
            decodeLoop(src: java.nio.ByteBuffer, dst: java.nio.CharBuffer): java.nio.charset.CoderResult;
            implFlush(out: java.nio.CharBuffer): java.nio.charset.CoderResult;
            implReset(): void;
            _dec0201: SingleByte$Decoder;
            _dec0208: DoubleByte$Decoder;
            _dec0212: DoubleByte$Decoder;
          }
          interface EUC_JP$Decoder extends CombineTypes<[_EUC_JP$Decoder, sun.nio.cs.DelegatableDecoder, java.nio.charset.CharsetDecoder]> {}
          interface _EUC_JP$Encoder$$static extends ClassLike {
            _ENC0201: SingleByte$Encoder;
            _ENC0208: DoubleByte$Encoder;
            _ENC0212: DoubleByte$Encoder;
            _new(cs: java.nio.charset.Charset): EUC_JP$Encoder;
            _new(cs: java.nio.charset.Charset, avgBpc: float, maxBpc: float, enc0201: SingleByte$Encoder, enc0208: DoubleByte$Encoder, enc0212: DoubleByte$Encoder): EUC_JP$Encoder;
          }
          let EUC_JP$Encoder: _EUC_JP$Encoder$$static;
          interface _EUC_JP$Encoder {
            canEncode(c: char): boolean;
            _encodeArrayLoop(src: java.nio.CharBuffer, dst: java.nio.ByteBuffer): java.nio.charset.CoderResult;
            _encodeBufferLoop(src: java.nio.CharBuffer, dst: java.nio.ByteBuffer): java.nio.charset.CoderResult;
            _encodeDouble(ch: char): int;
            _encodeLoop(src: java.nio.CharBuffer, dst: java.nio.ByteBuffer): java.nio.charset.CoderResult;
            _encodeSingle(inputChar: char, outputByte: byte[]): int;
            _enc0201: SingleByte$Encoder;
            _enc0208: DoubleByte$Encoder;
            _enc0212: DoubleByte$Encoder;
            _sgp: Surrogate$Parser;
          }
          interface EUC_JP$Encoder extends CombineTypes<[_EUC_JP$Encoder, java.nio.charset.CharsetEncoder]> {}
          interface _EUC_JP_LINUX$$static extends ClassLike {
            new(): EUC_JP_LINUX;
          }
          let EUC_JP_LINUX: _EUC_JP_LINUX$$static;
          interface _EUC_JP_LINUX {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface EUC_JP_LINUX extends CombineTypes<[_EUC_JP_LINUX, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _EUC_JP_LINUX$Decoder$$static extends ClassLike {
          }
          let EUC_JP_LINUX$Decoder: _EUC_JP_LINUX$Decoder$$static;
          interface _EUC_JP_LINUX$Decoder {
          }
          interface EUC_JP_LINUX$Decoder extends CombineTypes<[_EUC_JP_LINUX$Decoder, sun.nio.cs.ext.EUC_JP$Decoder]> {}
          interface _EUC_JP_LINUX$Encoder$$static extends ClassLike {
          }
          let EUC_JP_LINUX$Encoder: _EUC_JP_LINUX$Encoder$$static;
          interface _EUC_JP_LINUX$Encoder {
          }
          interface EUC_JP_LINUX$Encoder extends CombineTypes<[_EUC_JP_LINUX$Encoder, sun.nio.cs.ext.EUC_JP$Encoder]> {}
          interface _EUC_JP_Open$$static extends ClassLike {
            new(): EUC_JP_Open;
          }
          let EUC_JP_Open: _EUC_JP_Open$$static;
          interface _EUC_JP_Open {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface EUC_JP_Open extends CombineTypes<[_EUC_JP_Open, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _EUC_JP_Open$Decoder$$static extends ClassLike {
            _DEC0208_Solaris: DoubleByte$Decoder;
            _DEC0212_Solaris: DoubleByte$Decoder;
          }
          let EUC_JP_Open$Decoder: _EUC_JP_Open$Decoder$$static;
          interface _EUC_JP_Open$Decoder {
            _decodeDouble(byte1: int, byte2: int): char;
          }
          interface EUC_JP_Open$Decoder extends CombineTypes<[_EUC_JP_Open$Decoder, sun.nio.cs.ext.EUC_JP$Decoder]> {}
          interface _EUC_JP_Open$Encoder$$static extends ClassLike {
            _ENC0208_Solaris: DoubleByte$Encoder;
            _ENC0212_Solaris: DoubleByte$Encoder;
          }
          let EUC_JP_Open$Encoder: _EUC_JP_Open$Encoder$$static;
          interface _EUC_JP_Open$Encoder {
            _encodeDouble(ch: char): int;
          }
          interface EUC_JP_Open$Encoder extends CombineTypes<[_EUC_JP_Open$Encoder, sun.nio.cs.ext.EUC_JP$Encoder]> {}
          interface _EUC_KR$$static extends ClassLike {
            new(): EUC_KR;
          }
          let EUC_KR: _EUC_KR$$static;
          interface _EUC_KR {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface EUC_KR extends CombineTypes<[_EUC_KR, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _EUC_KR$DecodeHolder$$static extends ClassLike {
            readonly b2c: char[][];
            readonly b2cSB: char[];
            _b2cSBStr: string;
            _b2cStr: string[];
            new(): EUC_KR$DecodeHolder;
          }
          let EUC_KR$DecodeHolder: _EUC_KR$DecodeHolder$$static;
          interface _EUC_KR$DecodeHolder {
          }
          interface EUC_KR$DecodeHolder extends CombineTypes<[_EUC_KR$DecodeHolder, java.lang.Object]> {}
          interface _EUC_KR$EncodeHolder$$static extends ClassLike {
            readonly c2b: char[];
            readonly c2bIndex: char[];
            new(): EUC_KR$EncodeHolder;
          }
          let EUC_KR$EncodeHolder: _EUC_KR$EncodeHolder$$static;
          interface _EUC_KR$EncodeHolder {
          }
          interface EUC_KR$EncodeHolder extends CombineTypes<[_EUC_KR$EncodeHolder, java.lang.Object]> {}
          interface _EUC_TW$$static extends ClassLike {
            _SS2: int;
            new(): EUC_TW;
          }
          let EUC_TW: _EUC_TW$$static;
          interface _EUC_TW {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface EUC_TW extends CombineTypes<[_EUC_TW, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _EUC_TW$Decoder$$static extends ClassLike {
            _decode(b1: int, b2: int, p: int, c1: char[], c2: char[]): char[];
            decodeSingleOrReplace(b1: int, b2: int, p: int, replace: char): char;
            _isLegalDB(b: int): boolean;
            _b1Max: int;
            _b1Min: int;
            _b2Max: int;
            _b2Min: int;
            _b2c: string[];
            _b2cIsSupp: byte[];
            _cnspToIndex: byte[];
            _dbSegSize: int;
            new(cs: java.nio.charset.Charset): EUC_TW$Decoder;
          }
          let EUC_TW$Decoder: _EUC_TW$Decoder$$static;
          interface _EUC_TW$Decoder {
            _decodeArrayLoop(src: java.nio.ByteBuffer, dst: java.nio.CharBuffer): java.nio.charset.CoderResult;
            _decodeBufferLoop(src: java.nio.ByteBuffer, dst: java.nio.CharBuffer): java.nio.charset.CoderResult;
            _decodeLoop(src: java.nio.ByteBuffer, dst: java.nio.CharBuffer): java.nio.charset.CoderResult;
            toUnicode(b1: int, b2: int, p: int): char[];
            _c1: char[];
            _c2: char[];
          }
          interface EUC_TW$Decoder extends CombineTypes<[_EUC_TW$Decoder, java.nio.charset.CharsetDecoder]> {}
          interface _EUC_TW$Encoder$$static extends ClassLike {
            _encode(hi: char, low: char, bb: byte[]): int;
            _encode(c: char, bb: byte[]): int;
            _c2b: char[];
            _c2bIndex: char[];
            _c2bPlane: byte[];
            _c2bSupp: char[];
            _c2bSuppIndex: char[];
            new(cs: java.nio.charset.Charset): EUC_TW$Encoder;
          }
          let EUC_TW$Encoder: _EUC_TW$Encoder$$static;
          interface _EUC_TW$Encoder {
            canEncode(c: char): boolean;
            canEncode(cs: EUC_TW$Encoder$charSequence): boolean;
            _encodeArrayLoop(src: java.nio.CharBuffer, dst: java.nio.ByteBuffer): java.nio.charset.CoderResult;
            _encodeBufferLoop(src: java.nio.CharBuffer, dst: java.nio.ByteBuffer): java.nio.charset.CoderResult;
            _encodeLoop(src: java.nio.CharBuffer, dst: java.nio.ByteBuffer): java.nio.charset.CoderResult;
            toEUC(hi: char, low: char, bb: byte[]): int;
            toEUC(c: char, bb: byte[]): int;
            _bb: byte[];
          }
          interface EUC_TW$Encoder extends CombineTypes<[_EUC_TW$Encoder, java.nio.charset.CharsetEncoder]> {}
          interface _EUC_TWMapping$$static extends ClassLike {
            _C2BSIZE: int;
            _C2BSUPPSIZE: int;
            _b1Max: int;
            _b1Min: int;
            _b2Max: int;
            _b2Min: int;
            _b2c: string[];
            _b2cIsSuppStr: string;
            _c2bIndex: char[];
            _c2bSuppIndex: char[];
            _new(): EUC_TWMapping;
          }
          let EUC_TWMapping: _EUC_TWMapping$$static;
          interface _EUC_TWMapping {
          }
          interface EUC_TWMapping extends CombineTypes<[_EUC_TWMapping, java.lang.Object]> {}
          interface _ExtendedCharsets$$static extends ClassLike {
            aliasesFor(charsetName: string): string[];
            _instance: ExtendedCharsets;
            new(): ExtendedCharsets;
          }
          let ExtendedCharsets: _ExtendedCharsets$$static;
          interface _ExtendedCharsets {
          }
          interface ExtendedCharsets extends CombineTypes<[_ExtendedCharsets, sun.nio.cs.ext.AbstractCharsetProvider]> {}
          interface _HKSCS2001Mapping$$static extends ClassLike {
            _b2cBmpStr: string[];
            _b2cSuppStr: string[];
            _pua: string;
            _new(): HKSCS2001Mapping;
          }
          let HKSCS2001Mapping: _HKSCS2001Mapping$$static;
          interface _HKSCS2001Mapping {
          }
          interface HKSCS2001Mapping extends CombineTypes<[_HKSCS2001Mapping, java.lang.Object]> {}
          interface _IBM037$$static extends ClassLike {
            new(): IBM037;
          }
          let IBM037: _IBM037$$static;
          interface _IBM037 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM037 extends CombineTypes<[_IBM037, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM037$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM037$Holder: _IBM037$Holder$$static;
          interface _IBM037$Holder {
          }
          interface IBM037$Holder extends CombineTypes<[_IBM037$Holder, java.lang.Object]> {}
          interface _IBM1006$$static extends ClassLike {
            new(): IBM1006;
          }
          let IBM1006: _IBM1006$$static;
          interface _IBM1006 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM1006 extends CombineTypes<[_IBM1006, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM1006$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM1006$Holder: _IBM1006$Holder$$static;
          interface _IBM1006$Holder {
          }
          interface IBM1006$Holder extends CombineTypes<[_IBM1006$Holder, java.lang.Object]> {}
          interface _IBM1025$$static extends ClassLike {
            new(): IBM1025;
          }
          let IBM1025: _IBM1025$$static;
          interface _IBM1025 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM1025 extends CombineTypes<[_IBM1025, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM1025$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM1025$Holder: _IBM1025$Holder$$static;
          interface _IBM1025$Holder {
          }
          interface IBM1025$Holder extends CombineTypes<[_IBM1025$Holder, java.lang.Object]> {}
          interface _IBM1026$$static extends ClassLike {
            new(): IBM1026;
          }
          let IBM1026: _IBM1026$$static;
          interface _IBM1026 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM1026 extends CombineTypes<[_IBM1026, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM1026$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM1026$Holder: _IBM1026$Holder$$static;
          interface _IBM1026$Holder {
          }
          interface IBM1026$Holder extends CombineTypes<[_IBM1026$Holder, java.lang.Object]> {}
          interface _IBM1046$$static extends ClassLike {
            new(): IBM1046;
          }
          let IBM1046: _IBM1046$$static;
          interface _IBM1046 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM1046 extends CombineTypes<[_IBM1046, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM1046$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM1046$Holder: _IBM1046$Holder$$static;
          interface _IBM1046$Holder {
          }
          interface IBM1046$Holder extends CombineTypes<[_IBM1046$Holder, java.lang.Object]> {}
          interface _IBM1047$$static extends ClassLike {
            new(): IBM1047;
          }
          let IBM1047: _IBM1047$$static;
          interface _IBM1047 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM1047 extends CombineTypes<[_IBM1047, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM1047$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM1047$Holder: _IBM1047$Holder$$static;
          interface _IBM1047$Holder {
          }
          interface IBM1047$Holder extends CombineTypes<[_IBM1047$Holder, java.lang.Object]> {}
          interface _IBM1097$$static extends ClassLike {
            new(): IBM1097;
          }
          let IBM1097: _IBM1097$$static;
          interface _IBM1097 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM1097 extends CombineTypes<[_IBM1097, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM1097$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM1097$Holder: _IBM1097$Holder$$static;
          interface _IBM1097$Holder {
          }
          interface IBM1097$Holder extends CombineTypes<[_IBM1097$Holder, java.lang.Object]> {}
          interface _IBM1098$$static extends ClassLike {
            new(): IBM1098;
          }
          let IBM1098: _IBM1098$$static;
          interface _IBM1098 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM1098 extends CombineTypes<[_IBM1098, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM1098$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM1098$Holder: _IBM1098$Holder$$static;
          interface _IBM1098$Holder {
          }
          interface IBM1098$Holder extends CombineTypes<[_IBM1098$Holder, java.lang.Object]> {}
          interface _IBM1112$$static extends ClassLike {
            new(): IBM1112;
          }
          let IBM1112: _IBM1112$$static;
          interface _IBM1112 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM1112 extends CombineTypes<[_IBM1112, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM1112$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM1112$Holder: _IBM1112$Holder$$static;
          interface _IBM1112$Holder {
          }
          interface IBM1112$Holder extends CombineTypes<[_IBM1112$Holder, java.lang.Object]> {}
          interface _IBM1122$$static extends ClassLike {
            new(): IBM1122;
          }
          let IBM1122: _IBM1122$$static;
          interface _IBM1122 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM1122 extends CombineTypes<[_IBM1122, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM1122$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM1122$Holder: _IBM1122$Holder$$static;
          interface _IBM1122$Holder {
          }
          interface IBM1122$Holder extends CombineTypes<[_IBM1122$Holder, java.lang.Object]> {}
          interface _IBM1123$$static extends ClassLike {
            new(): IBM1123;
          }
          let IBM1123: _IBM1123$$static;
          interface _IBM1123 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM1123 extends CombineTypes<[_IBM1123, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM1123$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM1123$Holder: _IBM1123$Holder$$static;
          interface _IBM1123$Holder {
          }
          interface IBM1123$Holder extends CombineTypes<[_IBM1123$Holder, java.lang.Object]> {}
          interface _IBM1124$$static extends ClassLike {
            new(): IBM1124;
          }
          let IBM1124: _IBM1124$$static;
          interface _IBM1124 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM1124 extends CombineTypes<[_IBM1124, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM1124$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM1124$Holder: _IBM1124$Holder$$static;
          interface _IBM1124$Holder {
          }
          interface IBM1124$Holder extends CombineTypes<[_IBM1124$Holder, java.lang.Object]> {}
          interface _IBM1129$$static extends ClassLike {
            new(): IBM1129;
          }
          let IBM1129: _IBM1129$$static;
          interface _IBM1129 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM1129 extends CombineTypes<[_IBM1129, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM1129$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM1129$Holder: _IBM1129$Holder$$static;
          interface _IBM1129$Holder {
          }
          interface IBM1129$Holder extends CombineTypes<[_IBM1129$Holder, java.lang.Object]> {}
          interface _IBM1140$$static extends ClassLike {
            new(): IBM1140;
          }
          let IBM1140: _IBM1140$$static;
          interface _IBM1140 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM1140 extends CombineTypes<[_IBM1140, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM1140$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM1140$Holder: _IBM1140$Holder$$static;
          interface _IBM1140$Holder {
          }
          interface IBM1140$Holder extends CombineTypes<[_IBM1140$Holder, java.lang.Object]> {}
          interface _IBM1141$$static extends ClassLike {
            new(): IBM1141;
          }
          let IBM1141: _IBM1141$$static;
          interface _IBM1141 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM1141 extends CombineTypes<[_IBM1141, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM1141$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM1141$Holder: _IBM1141$Holder$$static;
          interface _IBM1141$Holder {
          }
          interface IBM1141$Holder extends CombineTypes<[_IBM1141$Holder, java.lang.Object]> {}
          interface _IBM1142$$static extends ClassLike {
            new(): IBM1142;
          }
          let IBM1142: _IBM1142$$static;
          interface _IBM1142 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM1142 extends CombineTypes<[_IBM1142, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM1142$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM1142$Holder: _IBM1142$Holder$$static;
          interface _IBM1142$Holder {
          }
          interface IBM1142$Holder extends CombineTypes<[_IBM1142$Holder, java.lang.Object]> {}
          interface _IBM1143$$static extends ClassLike {
            new(): IBM1143;
          }
          let IBM1143: _IBM1143$$static;
          interface _IBM1143 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM1143 extends CombineTypes<[_IBM1143, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM1143$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM1143$Holder: _IBM1143$Holder$$static;
          interface _IBM1143$Holder {
          }
          interface IBM1143$Holder extends CombineTypes<[_IBM1143$Holder, java.lang.Object]> {}
          interface _IBM1144$$static extends ClassLike {
            new(): IBM1144;
          }
          let IBM1144: _IBM1144$$static;
          interface _IBM1144 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM1144 extends CombineTypes<[_IBM1144, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM1144$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM1144$Holder: _IBM1144$Holder$$static;
          interface _IBM1144$Holder {
          }
          interface IBM1144$Holder extends CombineTypes<[_IBM1144$Holder, java.lang.Object]> {}
          interface _IBM1145$$static extends ClassLike {
            new(): IBM1145;
          }
          let IBM1145: _IBM1145$$static;
          interface _IBM1145 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM1145 extends CombineTypes<[_IBM1145, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM1145$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM1145$Holder: _IBM1145$Holder$$static;
          interface _IBM1145$Holder {
          }
          interface IBM1145$Holder extends CombineTypes<[_IBM1145$Holder, java.lang.Object]> {}
          interface _IBM1146$$static extends ClassLike {
            new(): IBM1146;
          }
          let IBM1146: _IBM1146$$static;
          interface _IBM1146 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM1146 extends CombineTypes<[_IBM1146, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM1146$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM1146$Holder: _IBM1146$Holder$$static;
          interface _IBM1146$Holder {
          }
          interface IBM1146$Holder extends CombineTypes<[_IBM1146$Holder, java.lang.Object]> {}
          interface _IBM1147$$static extends ClassLike {
            new(): IBM1147;
          }
          let IBM1147: _IBM1147$$static;
          interface _IBM1147 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM1147 extends CombineTypes<[_IBM1147, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM1147$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM1147$Holder: _IBM1147$Holder$$static;
          interface _IBM1147$Holder {
          }
          interface IBM1147$Holder extends CombineTypes<[_IBM1147$Holder, java.lang.Object]> {}
          interface _IBM1148$$static extends ClassLike {
            new(): IBM1148;
          }
          let IBM1148: _IBM1148$$static;
          interface _IBM1148 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM1148 extends CombineTypes<[_IBM1148, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM1148$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM1148$Holder: _IBM1148$Holder$$static;
          interface _IBM1148$Holder {
          }
          interface IBM1148$Holder extends CombineTypes<[_IBM1148$Holder, java.lang.Object]> {}
          interface _IBM1149$$static extends ClassLike {
            new(): IBM1149;
          }
          let IBM1149: _IBM1149$$static;
          interface _IBM1149 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM1149 extends CombineTypes<[_IBM1149, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM1149$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM1149$Holder: _IBM1149$Holder$$static;
          interface _IBM1149$Holder {
          }
          interface IBM1149$Holder extends CombineTypes<[_IBM1149$Holder, java.lang.Object]> {}
          interface _IBM1166$$static extends ClassLike {
            new(): IBM1166;
          }
          let IBM1166: _IBM1166$$static;
          interface _IBM1166 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM1166 extends CombineTypes<[_IBM1166, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM1166$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM1166$Holder: _IBM1166$Holder$$static;
          interface _IBM1166$Holder {
          }
          interface IBM1166$Holder extends CombineTypes<[_IBM1166$Holder, java.lang.Object]> {}
          interface _IBM1364$$static extends ClassLike {
            new(): IBM1364;
          }
          let IBM1364: _IBM1364$$static;
          interface _IBM1364 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM1364 extends CombineTypes<[_IBM1364, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM1364$DecodeHolder$$static extends ClassLike {
            readonly b2c: char[][];
            readonly b2cSB: char[];
            _b2cSBStr: string;
            _b2cStr: string[];
            new(): IBM1364$DecodeHolder;
          }
          let IBM1364$DecodeHolder: _IBM1364$DecodeHolder$$static;
          interface _IBM1364$DecodeHolder {
          }
          interface IBM1364$DecodeHolder extends CombineTypes<[_IBM1364$DecodeHolder, java.lang.Object]> {}
          interface _IBM1364$EncodeHolder$$static extends ClassLike {
            readonly c2b: char[];
            readonly c2bIndex: char[];
            new(): IBM1364$EncodeHolder;
          }
          let IBM1364$EncodeHolder: _IBM1364$EncodeHolder$$static;
          interface _IBM1364$EncodeHolder {
          }
          interface IBM1364$EncodeHolder extends CombineTypes<[_IBM1364$EncodeHolder, java.lang.Object]> {}
          interface _IBM1381$$static extends ClassLike {
            new(): IBM1381;
          }
          let IBM1381: _IBM1381$$static;
          interface _IBM1381 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM1381 extends CombineTypes<[_IBM1381, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM1381$DecodeHolder$$static extends ClassLike {
            readonly b2c: char[][];
            readonly b2cSB: char[];
            _b2cSBStr: string;
            _b2cStr: string[];
            new(): IBM1381$DecodeHolder;
          }
          let IBM1381$DecodeHolder: _IBM1381$DecodeHolder$$static;
          interface _IBM1381$DecodeHolder {
          }
          interface IBM1381$DecodeHolder extends CombineTypes<[_IBM1381$DecodeHolder, java.lang.Object]> {}
          interface _IBM1381$EncodeHolder$$static extends ClassLike {
            readonly c2b: char[];
            readonly c2bIndex: char[];
            new(): IBM1381$EncodeHolder;
          }
          let IBM1381$EncodeHolder: _IBM1381$EncodeHolder$$static;
          interface _IBM1381$EncodeHolder {
          }
          interface IBM1381$EncodeHolder extends CombineTypes<[_IBM1381$EncodeHolder, java.lang.Object]> {}
          interface _IBM1383$$static extends ClassLike {
            new(): IBM1383;
          }
          let IBM1383: _IBM1383$$static;
          interface _IBM1383 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM1383 extends CombineTypes<[_IBM1383, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM1383$DecodeHolder$$static extends ClassLike {
            readonly b2c: char[][];
            readonly b2cSB: char[];
            _b2cSBStr: string;
            _b2cStr: string[];
            new(): IBM1383$DecodeHolder;
          }
          let IBM1383$DecodeHolder: _IBM1383$DecodeHolder$$static;
          interface _IBM1383$DecodeHolder {
          }
          interface IBM1383$DecodeHolder extends CombineTypes<[_IBM1383$DecodeHolder, java.lang.Object]> {}
          interface _IBM1383$EncodeHolder$$static extends ClassLike {
            readonly c2b: char[];
            readonly c2bIndex: char[];
            new(): IBM1383$EncodeHolder;
          }
          let IBM1383$EncodeHolder: _IBM1383$EncodeHolder$$static;
          interface _IBM1383$EncodeHolder {
          }
          interface IBM1383$EncodeHolder extends CombineTypes<[_IBM1383$EncodeHolder, java.lang.Object]> {}
          interface _IBM273$$static extends ClassLike {
            new(): IBM273;
          }
          let IBM273: _IBM273$$static;
          interface _IBM273 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM273 extends CombineTypes<[_IBM273, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM273$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM273$Holder: _IBM273$Holder$$static;
          interface _IBM273$Holder {
          }
          interface IBM273$Holder extends CombineTypes<[_IBM273$Holder, java.lang.Object]> {}
          interface _IBM277$$static extends ClassLike {
            new(): IBM277;
          }
          let IBM277: _IBM277$$static;
          interface _IBM277 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM277 extends CombineTypes<[_IBM277, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM277$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM277$Holder: _IBM277$Holder$$static;
          interface _IBM277$Holder {
          }
          interface IBM277$Holder extends CombineTypes<[_IBM277$Holder, java.lang.Object]> {}
          interface _IBM278$$static extends ClassLike {
            new(): IBM278;
          }
          let IBM278: _IBM278$$static;
          interface _IBM278 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM278 extends CombineTypes<[_IBM278, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM278$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM278$Holder: _IBM278$Holder$$static;
          interface _IBM278$Holder {
          }
          interface IBM278$Holder extends CombineTypes<[_IBM278$Holder, java.lang.Object]> {}
          interface _IBM280$$static extends ClassLike {
            new(): IBM280;
          }
          let IBM280: _IBM280$$static;
          interface _IBM280 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM280 extends CombineTypes<[_IBM280, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM280$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM280$Holder: _IBM280$Holder$$static;
          interface _IBM280$Holder {
          }
          interface IBM280$Holder extends CombineTypes<[_IBM280$Holder, java.lang.Object]> {}
          interface _IBM284$$static extends ClassLike {
            new(): IBM284;
          }
          let IBM284: _IBM284$$static;
          interface _IBM284 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM284 extends CombineTypes<[_IBM284, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM284$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM284$Holder: _IBM284$Holder$$static;
          interface _IBM284$Holder {
          }
          interface IBM284$Holder extends CombineTypes<[_IBM284$Holder, java.lang.Object]> {}
          interface _IBM285$$static extends ClassLike {
            new(): IBM285;
          }
          let IBM285: _IBM285$$static;
          interface _IBM285 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM285 extends CombineTypes<[_IBM285, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM285$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM285$Holder: _IBM285$Holder$$static;
          interface _IBM285$Holder {
          }
          interface IBM285$Holder extends CombineTypes<[_IBM285$Holder, java.lang.Object]> {}
          interface _IBM290$$static extends ClassLike {
            new(): IBM290;
          }
          let IBM290: _IBM290$$static;
          interface _IBM290 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM290 extends CombineTypes<[_IBM290, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM290$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM290$Holder: _IBM290$Holder$$static;
          interface _IBM290$Holder {
          }
          interface IBM290$Holder extends CombineTypes<[_IBM290$Holder, java.lang.Object]> {}
          interface _IBM29626C$$static extends ClassLike {
            new(): IBM29626C;
          }
          let IBM29626C: _IBM29626C$$static;
          interface _IBM29626C {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM29626C extends CombineTypes<[_IBM29626C, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM29626C$Decoder$$static extends ClassLike {
            _DEC0201: SingleByte$Decoder;
            _DEC0208: DoubleByte$Decoder;
            _DEC0212: DoubleByte$Decoder;
            _G2_b: string;
            _G2_c: string;
            _G3_b: string;
            _G3_c: string;
            _g1_c: string;
            _ibm943: DoubleByte$Encoder;
            _new(cs: java.nio.charset.Charset): IBM29626C$Decoder;
            _new(cs: java.nio.charset.Charset, avgCpb: float, maxCpb: float, dec0201: SingleByte$Decoder, dec0208: DoubleByte$Decoder, dec0212: DoubleByte$Decoder): IBM29626C$Decoder;
          }
          let IBM29626C$Decoder: _IBM29626C$Decoder$$static;
          interface _IBM29626C$Decoder {
            _decodeArrayLoop(src: java.nio.ByteBuffer, dst: java.nio.CharBuffer): java.nio.charset.CoderResult;
            _decodeBufferLoop(src: java.nio.ByteBuffer, dst: java.nio.CharBuffer): java.nio.charset.CoderResult;
            _decodeDouble(byte1: int, byte2: int): char;
            _decodeDoubleG3(byte1: int, byte2: int): char;
            decodeLoop(src: java.nio.ByteBuffer, dst: java.nio.CharBuffer): java.nio.charset.CoderResult;
            _decodeSingle(b: int): char;
            _decodeUDC(byte1: int, byte2: int, offset: int): char;
            implFlush(out: java.nio.CharBuffer): java.nio.charset.CoderResult;
            implReset(): void;
            _dec0201: SingleByte$Decoder;
            _dec0208: DoubleByte$Decoder;
            _dec0212: DoubleByte$Decoder;
          }
          interface IBM29626C$Decoder extends CombineTypes<[_IBM29626C$Decoder, sun.nio.cs.DelegatableDecoder, java.nio.charset.CharsetDecoder]> {}
          interface _IBM29626C$Encoder$$static extends ClassLike {
            _ENC0201: SingleByte$Encoder;
            _ENC0208: DoubleByte$Encoder;
            _ENC0212: DoubleByte$Encoder;
            _G1_c: string;
            _G2_b: string;
            _G2_c: string;
            _G3_b: string;
            _G3_c: string;
            _ibm943: DoubleByte$Encoder;
            _new(cs: java.nio.charset.Charset): IBM29626C$Encoder;
            _new(cs: java.nio.charset.Charset, avgBpc: float, maxBpc: float, enc0201: SingleByte$Encoder, enc0208: DoubleByte$Encoder, enc0212: DoubleByte$Encoder): IBM29626C$Encoder;
          }
          let IBM29626C$Encoder: _IBM29626C$Encoder$$static;
          interface _IBM29626C$Encoder {
            canEncode(c: char): boolean;
            _encodeArrayLoop(src: java.nio.CharBuffer, dst: java.nio.ByteBuffer): java.nio.charset.CoderResult;
            _encodeBufferLoop(src: java.nio.CharBuffer, dst: java.nio.ByteBuffer): java.nio.charset.CoderResult;
            _encodeDouble(ch: char): int;
            _encodeLoop(src: java.nio.CharBuffer, dst: java.nio.ByteBuffer): java.nio.charset.CoderResult;
            _encodeSingle(inputChar: char, outputByte: byte[]): int;
            _encodeUDC(ch: char): int;
            _enc0201: SingleByte$Encoder;
            _enc0208: DoubleByte$Encoder;
            _enc0212: DoubleByte$Encoder;
            _sgp: Surrogate$Parser;
          }
          interface IBM29626C$Encoder extends CombineTypes<[_IBM29626C$Encoder, java.nio.charset.CharsetEncoder]> {}
          interface _IBM297$$static extends ClassLike {
            new(): IBM297;
          }
          let IBM297: _IBM297$$static;
          interface _IBM297 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM297 extends CombineTypes<[_IBM297, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM297$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM297$Holder: _IBM297$Holder$$static;
          interface _IBM297$Holder {
          }
          interface IBM297$Holder extends CombineTypes<[_IBM297$Holder, java.lang.Object]> {}
          interface _IBM300$$static extends ClassLike {
            new(): IBM300;
          }
          let IBM300: _IBM300$$static;
          interface _IBM300 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM300 extends CombineTypes<[_IBM300, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM300$DecodeHolder$$static extends ClassLike {
            readonly b2c: char[][];
            readonly b2cSB: char[];
            _b2cSBStr: string;
            _b2cStr: string[];
            new(): IBM300$DecodeHolder;
          }
          let IBM300$DecodeHolder: _IBM300$DecodeHolder$$static;
          interface _IBM300$DecodeHolder {
          }
          interface IBM300$DecodeHolder extends CombineTypes<[_IBM300$DecodeHolder, java.lang.Object]> {}
          interface _IBM300$EncodeHolder$$static extends ClassLike {
            readonly c2b: char[];
            readonly c2bIndex: char[];
            new(): IBM300$EncodeHolder;
          }
          let IBM300$EncodeHolder: _IBM300$EncodeHolder$$static;
          interface _IBM300$EncodeHolder {
          }
          interface IBM300$EncodeHolder extends CombineTypes<[_IBM300$EncodeHolder, java.lang.Object]> {}
          interface _IBM33722$$static extends ClassLike {
            new(): IBM33722;
          }
          let IBM33722: _IBM33722$$static;
          interface _IBM33722 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM33722 extends CombineTypes<[_IBM33722, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM33722$Decoder$$static extends ClassLike {
            _SS2: int;
            _SS3: int;
            _byteToCharTable: string;
            _mappingTableG1: string;
            _mappingTableG2: string;
            _mappingTableG3: string;
            new(cs: java.nio.charset.Charset): IBM33722$Decoder;
          }
          let IBM33722$Decoder: _IBM33722$Decoder$$static;
          interface _IBM33722$Decoder {
            _decodeArrayLoop(src: java.nio.ByteBuffer, dst: java.nio.CharBuffer): java.nio.charset.CoderResult;
            _decodeBufferLoop(src: java.nio.ByteBuffer, dst: java.nio.CharBuffer): java.nio.charset.CoderResult;
            _decodeLoop(src: java.nio.ByteBuffer, dst: java.nio.CharBuffer): java.nio.charset.CoderResult;
          }
          interface IBM33722$Decoder extends CombineTypes<[_IBM33722$Decoder, java.nio.charset.CharsetDecoder]> {}
          interface _IBM33722$Encoder$$static extends ClassLike {
            _index1: short[];
            _index2: string;
            _index2a: string;
            _index2b: string;
            new(cs: java.nio.charset.Charset): IBM33722$Encoder;
          }
          let IBM33722$Encoder: _IBM33722$Encoder$$static;
          interface _IBM33722$Encoder {
          }
          interface IBM33722$Encoder extends CombineTypes<[_IBM33722$Encoder, sun.nio.cs.ext.SimpleEUCEncoder]> {}
          interface _IBM420$$static extends ClassLike {
            new(): IBM420;
          }
          let IBM420: _IBM420$$static;
          interface _IBM420 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM420 extends CombineTypes<[_IBM420, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM420$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM420$Holder: _IBM420$Holder$$static;
          interface _IBM420$Holder {
          }
          interface IBM420$Holder extends CombineTypes<[_IBM420$Holder, java.lang.Object]> {}
          interface _IBM424$$static extends ClassLike {
            new(): IBM424;
          }
          let IBM424: _IBM424$$static;
          interface _IBM424 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM424 extends CombineTypes<[_IBM424, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM424$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM424$Holder: _IBM424$Holder$$static;
          interface _IBM424$Holder {
          }
          interface IBM424$Holder extends CombineTypes<[_IBM424$Holder, java.lang.Object]> {}
          interface _IBM500$$static extends ClassLike {
            new(): IBM500;
          }
          let IBM500: _IBM500$$static;
          interface _IBM500 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM500 extends CombineTypes<[_IBM500, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM500$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM500$Holder: _IBM500$Holder$$static;
          interface _IBM500$Holder {
          }
          interface IBM500$Holder extends CombineTypes<[_IBM500$Holder, java.lang.Object]> {}
          interface _IBM833$$static extends ClassLike {
            new(): IBM833;
          }
          let IBM833: _IBM833$$static;
          interface _IBM833 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM833 extends CombineTypes<[_IBM833, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM833$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM833$Holder: _IBM833$Holder$$static;
          interface _IBM833$Holder {
          }
          interface IBM833$Holder extends CombineTypes<[_IBM833$Holder, java.lang.Object]> {}
          interface _IBM834$$static extends ClassLike {
            new(): IBM834;
          }
          let IBM834: _IBM834$$static;
          interface _IBM834 {
            contains(cs: java.nio.charset.Charset): boolean;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM834 extends CombineTypes<[_IBM834, java.nio.charset.Charset]> {}
          interface _IBM834$Encoder$$static extends ClassLike {
            new(cs: java.nio.charset.Charset): IBM834$Encoder;
          }
          let IBM834$Encoder: _IBM834$Encoder$$static;
          interface _IBM834$Encoder {
            encodeChar(ch: char): int;
            isLegalReplacement(repl: byte[]): boolean;
          }
          interface IBM834$Encoder extends CombineTypes<[_IBM834$Encoder, sun.nio.cs.DoubleByte$Encoder_DBCSONLY]> {}
          interface _IBM838$$static extends ClassLike {
            new(): IBM838;
          }
          let IBM838: _IBM838$$static;
          interface _IBM838 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM838 extends CombineTypes<[_IBM838, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM838$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM838$Holder: _IBM838$Holder$$static;
          interface _IBM838$Holder {
          }
          interface IBM838$Holder extends CombineTypes<[_IBM838$Holder, java.lang.Object]> {}
          interface _IBM856$$static extends ClassLike {
            new(): IBM856;
          }
          let IBM856: _IBM856$$static;
          interface _IBM856 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM856 extends CombineTypes<[_IBM856, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM856$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM856$Holder: _IBM856$Holder$$static;
          interface _IBM856$Holder {
          }
          interface IBM856$Holder extends CombineTypes<[_IBM856$Holder, java.lang.Object]> {}
          interface _IBM860$$static extends ClassLike {
            new(): IBM860;
          }
          let IBM860: _IBM860$$static;
          interface _IBM860 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM860 extends CombineTypes<[_IBM860, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM860$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM860$Holder: _IBM860$Holder$$static;
          interface _IBM860$Holder {
          }
          interface IBM860$Holder extends CombineTypes<[_IBM860$Holder, java.lang.Object]> {}
          interface _IBM861$$static extends ClassLike {
            new(): IBM861;
          }
          let IBM861: _IBM861$$static;
          interface _IBM861 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM861 extends CombineTypes<[_IBM861, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM861$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM861$Holder: _IBM861$Holder$$static;
          interface _IBM861$Holder {
          }
          interface IBM861$Holder extends CombineTypes<[_IBM861$Holder, java.lang.Object]> {}
          interface _IBM863$$static extends ClassLike {
            new(): IBM863;
          }
          let IBM863: _IBM863$$static;
          interface _IBM863 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM863 extends CombineTypes<[_IBM863, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM863$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM863$Holder: _IBM863$Holder$$static;
          interface _IBM863$Holder {
          }
          interface IBM863$Holder extends CombineTypes<[_IBM863$Holder, java.lang.Object]> {}
          interface _IBM864$$static extends ClassLike {
            new(): IBM864;
          }
          let IBM864: _IBM864$$static;
          interface _IBM864 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM864 extends CombineTypes<[_IBM864, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM864$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM864$Holder: _IBM864$Holder$$static;
          interface _IBM864$Holder {
          }
          interface IBM864$Holder extends CombineTypes<[_IBM864$Holder, java.lang.Object]> {}
          interface _IBM865$$static extends ClassLike {
            new(): IBM865;
          }
          let IBM865: _IBM865$$static;
          interface _IBM865 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM865 extends CombineTypes<[_IBM865, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM865$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM865$Holder: _IBM865$Holder$$static;
          interface _IBM865$Holder {
          }
          interface IBM865$Holder extends CombineTypes<[_IBM865$Holder, java.lang.Object]> {}
          interface _IBM868$$static extends ClassLike {
            new(): IBM868;
          }
          let IBM868: _IBM868$$static;
          interface _IBM868 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM868 extends CombineTypes<[_IBM868, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM868$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM868$Holder: _IBM868$Holder$$static;
          interface _IBM868$Holder {
          }
          interface IBM868$Holder extends CombineTypes<[_IBM868$Holder, java.lang.Object]> {}
          interface _IBM869$$static extends ClassLike {
            new(): IBM869;
          }
          let IBM869: _IBM869$$static;
          interface _IBM869 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM869 extends CombineTypes<[_IBM869, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM869$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM869$Holder: _IBM869$Holder$$static;
          interface _IBM869$Holder {
          }
          interface IBM869$Holder extends CombineTypes<[_IBM869$Holder, java.lang.Object]> {}
          interface _IBM870$$static extends ClassLike {
            new(): IBM870;
          }
          let IBM870: _IBM870$$static;
          interface _IBM870 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM870 extends CombineTypes<[_IBM870, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM870$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM870$Holder: _IBM870$Holder$$static;
          interface _IBM870$Holder {
          }
          interface IBM870$Holder extends CombineTypes<[_IBM870$Holder, java.lang.Object]> {}
          interface _IBM871$$static extends ClassLike {
            new(): IBM871;
          }
          let IBM871: _IBM871$$static;
          interface _IBM871 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM871 extends CombineTypes<[_IBM871, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM871$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM871$Holder: _IBM871$Holder$$static;
          interface _IBM871$Holder {
          }
          interface IBM871$Holder extends CombineTypes<[_IBM871$Holder, java.lang.Object]> {}
          interface _IBM875$$static extends ClassLike {
            new(): IBM875;
          }
          let IBM875: _IBM875$$static;
          interface _IBM875 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM875 extends CombineTypes<[_IBM875, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM875$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM875$Holder: _IBM875$Holder$$static;
          interface _IBM875$Holder {
          }
          interface IBM875$Holder extends CombineTypes<[_IBM875$Holder, java.lang.Object]> {}
          interface _IBM918$$static extends ClassLike {
            new(): IBM918;
          }
          let IBM918: _IBM918$$static;
          interface _IBM918 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM918 extends CombineTypes<[_IBM918, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM918$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM918$Holder: _IBM918$Holder$$static;
          interface _IBM918$Holder {
          }
          interface IBM918$Holder extends CombineTypes<[_IBM918$Holder, java.lang.Object]> {}
          interface _IBM921$$static extends ClassLike {
            new(): IBM921;
          }
          let IBM921: _IBM921$$static;
          interface _IBM921 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM921 extends CombineTypes<[_IBM921, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM921$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM921$Holder: _IBM921$Holder$$static;
          interface _IBM921$Holder {
          }
          interface IBM921$Holder extends CombineTypes<[_IBM921$Holder, java.lang.Object]> {}
          interface _IBM922$$static extends ClassLike {
            new(): IBM922;
          }
          let IBM922: _IBM922$$static;
          interface _IBM922 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM922 extends CombineTypes<[_IBM922, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM922$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM922$Holder: _IBM922$Holder$$static;
          interface _IBM922$Holder {
          }
          interface IBM922$Holder extends CombineTypes<[_IBM922$Holder, java.lang.Object]> {}
          interface _IBM930$$static extends ClassLike {
            new(): IBM930;
          }
          let IBM930: _IBM930$$static;
          interface _IBM930 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM930 extends CombineTypes<[_IBM930, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM930$DecodeHolder$$static extends ClassLike {
            readonly b2c: char[][];
            readonly b2cSB: char[];
            _b2cSBStr: string;
            _b2cStr: string[];
            new(): IBM930$DecodeHolder;
          }
          let IBM930$DecodeHolder: _IBM930$DecodeHolder$$static;
          interface _IBM930$DecodeHolder {
          }
          interface IBM930$DecodeHolder extends CombineTypes<[_IBM930$DecodeHolder, java.lang.Object]> {}
          interface _IBM930$EncodeHolder$$static extends ClassLike {
            readonly c2b: char[];
            readonly c2bIndex: char[];
            new(): IBM930$EncodeHolder;
          }
          let IBM930$EncodeHolder: _IBM930$EncodeHolder$$static;
          interface _IBM930$EncodeHolder {
          }
          interface IBM930$EncodeHolder extends CombineTypes<[_IBM930$EncodeHolder, java.lang.Object]> {}
          interface _IBM933$$static extends ClassLike {
            new(): IBM933;
          }
          let IBM933: _IBM933$$static;
          interface _IBM933 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM933 extends CombineTypes<[_IBM933, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM933$DecodeHolder$$static extends ClassLike {
            readonly b2c: char[][];
            readonly b2cSB: char[];
            _b2cSBStr: string;
            _b2cStr: string[];
            new(): IBM933$DecodeHolder;
          }
          let IBM933$DecodeHolder: _IBM933$DecodeHolder$$static;
          interface _IBM933$DecodeHolder {
          }
          interface IBM933$DecodeHolder extends CombineTypes<[_IBM933$DecodeHolder, java.lang.Object]> {}
          interface _IBM933$EncodeHolder$$static extends ClassLike {
            readonly c2b: char[];
            readonly c2bIndex: char[];
            new(): IBM933$EncodeHolder;
          }
          let IBM933$EncodeHolder: _IBM933$EncodeHolder$$static;
          interface _IBM933$EncodeHolder {
          }
          interface IBM933$EncodeHolder extends CombineTypes<[_IBM933$EncodeHolder, java.lang.Object]> {}
          interface _IBM935$$static extends ClassLike {
            new(): IBM935;
          }
          let IBM935: _IBM935$$static;
          interface _IBM935 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM935 extends CombineTypes<[_IBM935, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM935$DecodeHolder$$static extends ClassLike {
            readonly b2c: char[][];
            readonly b2cSB: char[];
            _b2cSBStr: string;
            _b2cStr: string[];
            new(): IBM935$DecodeHolder;
          }
          let IBM935$DecodeHolder: _IBM935$DecodeHolder$$static;
          interface _IBM935$DecodeHolder {
          }
          interface IBM935$DecodeHolder extends CombineTypes<[_IBM935$DecodeHolder, java.lang.Object]> {}
          interface _IBM935$EncodeHolder$$static extends ClassLike {
            readonly c2b: char[];
            readonly c2bIndex: char[];
            new(): IBM935$EncodeHolder;
          }
          let IBM935$EncodeHolder: _IBM935$EncodeHolder$$static;
          interface _IBM935$EncodeHolder {
          }
          interface IBM935$EncodeHolder extends CombineTypes<[_IBM935$EncodeHolder, java.lang.Object]> {}
          interface _IBM937$$static extends ClassLike {
            new(): IBM937;
          }
          let IBM937: _IBM937$$static;
          interface _IBM937 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM937 extends CombineTypes<[_IBM937, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM937$DecodeHolder$$static extends ClassLike {
            readonly b2c: char[][];
            readonly b2cSB: char[];
            _b2cSBStr: string;
            _b2cStr: string[];
            new(): IBM937$DecodeHolder;
          }
          let IBM937$DecodeHolder: _IBM937$DecodeHolder$$static;
          interface _IBM937$DecodeHolder {
          }
          interface IBM937$DecodeHolder extends CombineTypes<[_IBM937$DecodeHolder, java.lang.Object]> {}
          interface _IBM937$EncodeHolder$$static extends ClassLike {
            readonly c2b: char[];
            readonly c2bIndex: char[];
            new(): IBM937$EncodeHolder;
          }
          let IBM937$EncodeHolder: _IBM937$EncodeHolder$$static;
          interface _IBM937$EncodeHolder {
          }
          interface IBM937$EncodeHolder extends CombineTypes<[_IBM937$EncodeHolder, java.lang.Object]> {}
          interface _IBM939$$static extends ClassLike {
            new(): IBM939;
          }
          let IBM939: _IBM939$$static;
          interface _IBM939 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM939 extends CombineTypes<[_IBM939, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM939$DecodeHolder$$static extends ClassLike {
            readonly b2c: char[][];
            readonly b2cSB: char[];
            _b2cSBStr: string;
            _b2cStr: string[];
            new(): IBM939$DecodeHolder;
          }
          let IBM939$DecodeHolder: _IBM939$DecodeHolder$$static;
          interface _IBM939$DecodeHolder {
          }
          interface IBM939$DecodeHolder extends CombineTypes<[_IBM939$DecodeHolder, java.lang.Object]> {}
          interface _IBM939$EncodeHolder$$static extends ClassLike {
            readonly c2b: char[];
            readonly c2bIndex: char[];
            new(): IBM939$EncodeHolder;
          }
          let IBM939$EncodeHolder: _IBM939$EncodeHolder$$static;
          interface _IBM939$EncodeHolder {
          }
          interface IBM939$EncodeHolder extends CombineTypes<[_IBM939$EncodeHolder, java.lang.Object]> {}
          interface _IBM942$$static extends ClassLike {
            new(): IBM942;
          }
          let IBM942: _IBM942$$static;
          interface _IBM942 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM942 extends CombineTypes<[_IBM942, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM942$DecodeHolder$$static extends ClassLike {
            readonly b2c: char[][];
            readonly b2cSB: char[];
            _b2cSBStr: string;
            _b2cStr: string[];
            new(): IBM942$DecodeHolder;
          }
          let IBM942$DecodeHolder: _IBM942$DecodeHolder$$static;
          interface _IBM942$DecodeHolder {
          }
          interface IBM942$DecodeHolder extends CombineTypes<[_IBM942$DecodeHolder, java.lang.Object]> {}
          interface _IBM942$EncodeHolder$$static extends ClassLike {
            readonly c2b: char[];
            readonly c2bIndex: char[];
            new(): IBM942$EncodeHolder;
          }
          let IBM942$EncodeHolder: _IBM942$EncodeHolder$$static;
          interface _IBM942$EncodeHolder {
          }
          interface IBM942$EncodeHolder extends CombineTypes<[_IBM942$EncodeHolder, java.lang.Object]> {}
          interface _IBM942C$$static extends ClassLike {
            new(): IBM942C;
          }
          let IBM942C: _IBM942C$$static;
          interface _IBM942C {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM942C extends CombineTypes<[_IBM942C, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM942C$Holder$$static extends ClassLike {
            _b2cSB: char[];
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM942C$Holder: _IBM942C$Holder$$static;
          interface _IBM942C$Holder {
          }
          interface IBM942C$Holder extends CombineTypes<[_IBM942C$Holder, java.lang.Object]> {}
          interface _IBM943$$static extends ClassLike {
            new(): IBM943;
          }
          let IBM943: _IBM943$$static;
          interface _IBM943 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM943 extends CombineTypes<[_IBM943, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM943$DecodeHolder$$static extends ClassLike {
            readonly b2c: char[][];
            readonly b2cSB: char[];
            _b2cSBStr: string;
            _b2cStr: string[];
            new(): IBM943$DecodeHolder;
          }
          let IBM943$DecodeHolder: _IBM943$DecodeHolder$$static;
          interface _IBM943$DecodeHolder {
          }
          interface IBM943$DecodeHolder extends CombineTypes<[_IBM943$DecodeHolder, java.lang.Object]> {}
          interface _IBM943$EncodeHolder$$static extends ClassLike {
            readonly c2b: char[];
            readonly c2bIndex: char[];
            new(): IBM943$EncodeHolder;
          }
          let IBM943$EncodeHolder: _IBM943$EncodeHolder$$static;
          interface _IBM943$EncodeHolder {
          }
          interface IBM943$EncodeHolder extends CombineTypes<[_IBM943$EncodeHolder, java.lang.Object]> {}
          interface _IBM943C$$static extends ClassLike {
            new(): IBM943C;
          }
          let IBM943C: _IBM943C$$static;
          interface _IBM943C {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM943C extends CombineTypes<[_IBM943C, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM943C$Holder$$static extends ClassLike {
            _b2cSB: char[];
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM943C$Holder: _IBM943C$Holder$$static;
          interface _IBM943C$Holder {
          }
          interface IBM943C$Holder extends CombineTypes<[_IBM943C$Holder, java.lang.Object]> {}
          interface _IBM948$$static extends ClassLike {
            new(): IBM948;
          }
          let IBM948: _IBM948$$static;
          interface _IBM948 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM948 extends CombineTypes<[_IBM948, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM948$DecodeHolder$$static extends ClassLike {
            readonly b2c: char[][];
            readonly b2cSB: char[];
            _b2cSBStr: string;
            _b2cStr: string[];
            new(): IBM948$DecodeHolder;
          }
          let IBM948$DecodeHolder: _IBM948$DecodeHolder$$static;
          interface _IBM948$DecodeHolder {
          }
          interface IBM948$DecodeHolder extends CombineTypes<[_IBM948$DecodeHolder, java.lang.Object]> {}
          interface _IBM948$EncodeHolder$$static extends ClassLike {
            readonly c2b: char[];
            readonly c2bIndex: char[];
            new(): IBM948$EncodeHolder;
          }
          let IBM948$EncodeHolder: _IBM948$EncodeHolder$$static;
          interface _IBM948$EncodeHolder {
          }
          interface IBM948$EncodeHolder extends CombineTypes<[_IBM948$EncodeHolder, java.lang.Object]> {}
          interface _IBM949$$static extends ClassLike {
            new(): IBM949;
          }
          let IBM949: _IBM949$$static;
          interface _IBM949 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM949 extends CombineTypes<[_IBM949, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM949$DecodeHolder$$static extends ClassLike {
            readonly b2c: char[][];
            readonly b2cSB: char[];
            _b2cSBStr: string;
            _b2cStr: string[];
            new(): IBM949$DecodeHolder;
          }
          let IBM949$DecodeHolder: _IBM949$DecodeHolder$$static;
          interface _IBM949$DecodeHolder {
          }
          interface IBM949$DecodeHolder extends CombineTypes<[_IBM949$DecodeHolder, java.lang.Object]> {}
          interface _IBM949$EncodeHolder$$static extends ClassLike {
            readonly c2b: char[];
            readonly c2bIndex: char[];
            new(): IBM949$EncodeHolder;
          }
          let IBM949$EncodeHolder: _IBM949$EncodeHolder$$static;
          interface _IBM949$EncodeHolder {
          }
          interface IBM949$EncodeHolder extends CombineTypes<[_IBM949$EncodeHolder, java.lang.Object]> {}
          interface _IBM949C$$static extends ClassLike {
            new(): IBM949C;
          }
          let IBM949C: _IBM949C$$static;
          interface _IBM949C {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM949C extends CombineTypes<[_IBM949C, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM949C$Holder$$static extends ClassLike {
            _b2cSB: char[];
            _c2b: char[];
            _c2bIndex: char[];
          }
          let IBM949C$Holder: _IBM949C$Holder$$static;
          interface _IBM949C$Holder {
          }
          interface IBM949C$Holder extends CombineTypes<[_IBM949C$Holder, java.lang.Object]> {}
          interface _IBM950$$static extends ClassLike {
            new(): IBM950;
          }
          let IBM950: _IBM950$$static;
          interface _IBM950 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM950 extends CombineTypes<[_IBM950, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM950$DecodeHolder$$static extends ClassLike {
            readonly b2c: char[][];
            readonly b2cSB: char[];
            _b2cSBStr: string;
            _b2cStr: string[];
            new(): IBM950$DecodeHolder;
          }
          let IBM950$DecodeHolder: _IBM950$DecodeHolder$$static;
          interface _IBM950$DecodeHolder {
          }
          interface IBM950$DecodeHolder extends CombineTypes<[_IBM950$DecodeHolder, java.lang.Object]> {}
          interface _IBM950$EncodeHolder$$static extends ClassLike {
            readonly c2b: char[];
            readonly c2bIndex: char[];
            new(): IBM950$EncodeHolder;
          }
          let IBM950$EncodeHolder: _IBM950$EncodeHolder$$static;
          interface _IBM950$EncodeHolder {
          }
          interface IBM950$EncodeHolder extends CombineTypes<[_IBM950$EncodeHolder, java.lang.Object]> {}
          interface _IBM964$$static extends ClassLike {
            new(): IBM964;
          }
          let IBM964: _IBM964$$static;
          interface _IBM964 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM964 extends CombineTypes<[_IBM964, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM964$Decoder$$static extends ClassLike {
            _byteToCharTable: string;
            _mappingTableG1: string;
            _mappingTableG2a2: string;
            _mappingTableG2ac: string;
            _mappingTableG2ad: string;
            new(cs: java.nio.charset.Charset): IBM964$Decoder;
          }
          let IBM964$Decoder: _IBM964$Decoder$$static;
          interface _IBM964$Decoder {
            _decodeArrayLoop(src: java.nio.ByteBuffer, dst: java.nio.CharBuffer): java.nio.charset.CoderResult;
            _decodeBufferLoop(src: java.nio.ByteBuffer, dst: java.nio.CharBuffer): java.nio.charset.CoderResult;
            _decodeLoop(src: java.nio.ByteBuffer, dst: java.nio.CharBuffer): java.nio.charset.CoderResult;
            _SS2: int;
            _SS3: int;
            _mappingTableG2: string;
          }
          interface IBM964$Decoder extends CombineTypes<[_IBM964$Decoder, java.nio.charset.CharsetDecoder]> {}
          interface _IBM964$Encoder$$static extends ClassLike {
            _index1: short[];
            _index2: string;
            _index2a: string;
            _index2b: string;
            _index2c: string;
            new(cs: java.nio.charset.Charset): IBM964$Encoder;
          }
          let IBM964$Encoder: _IBM964$Encoder$$static;
          interface _IBM964$Encoder {
          }
          interface IBM964$Encoder extends CombineTypes<[_IBM964$Encoder, sun.nio.cs.ext.SimpleEUCEncoder]> {}
          interface _IBM970$$static extends ClassLike {
            new(): IBM970;
          }
          let IBM970: _IBM970$$static;
          interface _IBM970 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface IBM970 extends CombineTypes<[_IBM970, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _IBM970$DecodeHolder$$static extends ClassLike {
            readonly b2c: char[][];
            readonly b2cSB: char[];
            _b2cSBStr: string;
            _b2cStr: string[];
            new(): IBM970$DecodeHolder;
          }
          let IBM970$DecodeHolder: _IBM970$DecodeHolder$$static;
          interface _IBM970$DecodeHolder {
          }
          interface IBM970$DecodeHolder extends CombineTypes<[_IBM970$DecodeHolder, java.lang.Object]> {}
          interface _IBM970$EncodeHolder$$static extends ClassLike {
            readonly c2b: char[];
            readonly c2bIndex: char[];
            new(): IBM970$EncodeHolder;
          }
          let IBM970$EncodeHolder: _IBM970$EncodeHolder$$static;
          interface _IBM970$EncodeHolder {
          }
          interface IBM970$EncodeHolder extends CombineTypes<[_IBM970$EncodeHolder, java.lang.Object]> {}
          interface _ISCII91$$static extends ClassLike {
            _HALANT_CHAR: char;
            _NO_CHAR: byte;
            _NUKTA_CHAR: char;
            _directMapTable: char[];
            _encoderMappingTable: byte[];
            new(): ISCII91;
          }
          let ISCII91: _ISCII91$$static;
          interface _ISCII91 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface ISCII91 extends CombineTypes<[_ISCII91, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _ISCII91$Decoder$$static extends ClassLike {
            _INVALID_CHAR: char;
            _ZWJ_CHAR: char;
            _ZWNJ_CHAR: char;
          }
          let ISCII91$Decoder: _ISCII91$Decoder$$static;
          interface _ISCII91$Decoder {
            _decodeArrayLoop(src: java.nio.ByteBuffer, dst: java.nio.CharBuffer): java.nio.charset.CoderResult;
            _decodeBufferLoop(src: java.nio.ByteBuffer, dst: java.nio.CharBuffer): java.nio.charset.CoderResult;
            _decodeLoop(src: java.nio.ByteBuffer, dst: java.nio.CharBuffer): java.nio.charset.CoderResult;
            _implFlush(out: java.nio.CharBuffer): java.nio.charset.CoderResult;
            _contextChar: char;
            _needFlushing: boolean;
          }
          interface ISCII91$Decoder extends CombineTypes<[_ISCII91$Decoder, java.nio.charset.CharsetDecoder]> {}
          interface _ISCII91$Encoder$$static extends ClassLike {
            _NO_CHAR: byte;
          }
          let ISCII91$Encoder: _ISCII91$Encoder$$static;
          interface _ISCII91$Encoder {
            canEncode(ch: char): boolean;
            _encodeArrayLoop(src: java.nio.CharBuffer, dst: java.nio.ByteBuffer): java.nio.charset.CoderResult;
            _encodeBufferLoop(src: java.nio.CharBuffer, dst: java.nio.ByteBuffer): java.nio.charset.CoderResult;
            _encodeLoop(src: java.nio.CharBuffer, dst: java.nio.ByteBuffer): java.nio.charset.CoderResult;
            _sgp: Surrogate$Parser;
          }
          interface ISCII91$Encoder extends CombineTypes<[_ISCII91$Encoder, java.nio.charset.CharsetEncoder]> {}
          interface _ISO2022$$static extends ClassLike {
            new(csname: string, aliases: string[]): ISO2022;
          }
          let ISO2022: _ISO2022$$static;
          interface _ISO2022 {
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface ISO2022 extends CombineTypes<[_ISO2022, java.nio.charset.Charset]> {}
          interface _ISO2022$Encoder$$static extends ClassLike {
            _ISO_ESC: byte;
            _ISO_SI: byte;
            _ISO_SO: byte;
            _ISO_SS2_7: byte;
            _ISO_SS3_7: byte;
            readonly PLANE2: byte;
            readonly PLANE3: byte;
            readonly SS2: byte;
            _new(cs: java.nio.charset.Charset): ISO2022$Encoder;
          }
          let ISO2022$Encoder: _ISO2022$Encoder$$static;
          interface _ISO2022$Encoder {
            canEncode(c: char): boolean;
            _encodeArrayLoop(src: java.nio.CharBuffer, dst: java.nio.ByteBuffer): java.nio.charset.CoderResult;
            _encodeBufferLoop(src: java.nio.CharBuffer, dst: java.nio.ByteBuffer): java.nio.charset.CoderResult;
            _encodeLoop(src: java.nio.CharBuffer, dst: java.nio.ByteBuffer): java.nio.charset.CoderResult;
            _implReset(): void;
            _unicodeToNative(unicode: char, ebyte: byte[]): int;
            _ISOEncoder: java.nio.charset.CharsetEncoder;
            _SODesDefined: boolean;
            _SODesig: byte[];
            _SS2DesDefined: boolean;
            _SS2Desig: byte[];
            _SS3DesDefined: boolean;
            _SS3Desig: byte[];
            _maximumDesignatorLength: byte;
            _newSODesDefined: boolean;
            _newSS2DesDefined: boolean;
            _newSS3DesDefined: boolean;
            _newshiftout: boolean;
            _sgp: Surrogate$Parser;
            _shiftout: boolean;
          }
          interface ISO2022$Encoder extends CombineTypes<[_ISO2022$Encoder, java.nio.charset.CharsetEncoder]> {}
          interface _ISO2022_CN$$static extends ClassLike {
            _ISO_ESC: byte;
            _ISO_SI: byte;
            _ISO_SO: byte;
            _ISO_SS2_7: byte;
            _ISO_SS3_7: byte;
            _MSB: byte;
            _REPLACE_CHAR: char;
            _SODesigCNS: byte;
            _SODesigGB: byte;
            new(): ISO2022_CN;
          }
          let ISO2022_CN: _ISO2022_CN$$static;
          interface _ISO2022_CN {
            canEncode(): boolean;
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface ISO2022_CN extends CombineTypes<[_ISO2022_CN, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _ISO2022_CN$Decoder$$static extends ClassLike {
            _GB2312: DoubleByte$Decoder;
            _new(cs: java.nio.charset.Charset): ISO2022_CN$Decoder;
          }
          let ISO2022_CN$Decoder: _ISO2022_CN$Decoder$$static;
          interface _ISO2022_CN$Decoder {
            _SODecode(byte1: byte, byte2: byte, SOD: byte): char;
            _cnsDecode(byte1: byte, byte2: byte, SS: byte): char;
            _decodeArrayLoop(src: java.nio.ByteBuffer, dst: java.nio.CharBuffer): java.nio.charset.CoderResult;
            _decodeBufferLoop(src: java.nio.ByteBuffer, dst: java.nio.CharBuffer): java.nio.charset.CoderResult;
            _decodeLoop(src: java.nio.ByteBuffer, dst: java.nio.CharBuffer): java.nio.charset.CoderResult;
            _implReset(): void;
            _currentSODesig: byte;
            _shiftOut: boolean;
          }
          interface ISO2022_CN$Decoder extends CombineTypes<[_ISO2022_CN$Decoder, java.nio.charset.CharsetDecoder]> {}
          interface _ISO2022_CN_CNS$$static extends ClassLike {
            new(): ISO2022_CN_CNS;
          }
          let ISO2022_CN_CNS: _ISO2022_CN_CNS$$static;
          interface _ISO2022_CN_CNS {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface ISO2022_CN_CNS extends CombineTypes<[_ISO2022_CN_CNS, sun.nio.cs.HistoricallyNamedCharset, sun.nio.cs.ext.ISO2022]> {}
          interface _ISO2022_CN_CNS$Encoder$$static extends ClassLike {
            _SOD: byte[];
            _SS2D: byte[];
            _SS3D: byte[];
            _cns: java.nio.charset.Charset;
            new(cs: java.nio.charset.Charset): ISO2022_CN_CNS$Encoder;
          }
          let ISO2022_CN_CNS$Encoder: _ISO2022_CN_CNS$Encoder$$static;
          interface _ISO2022_CN_CNS$Encoder {
            canEncode(c: char): boolean;
            isLegalReplacement(repl: byte[]): boolean;
            _bb: byte[];
          }
          interface ISO2022_CN_CNS$Encoder extends CombineTypes<[_ISO2022_CN_CNS$Encoder, sun.nio.cs.ext.ISO2022$Encoder]> {}
          interface _ISO2022_CN_GB$$static extends ClassLike {
            new(): ISO2022_CN_GB;
          }
          let ISO2022_CN_GB: _ISO2022_CN_GB$$static;
          interface _ISO2022_CN_GB {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface ISO2022_CN_GB extends CombineTypes<[_ISO2022_CN_GB, sun.nio.cs.HistoricallyNamedCharset, sun.nio.cs.ext.ISO2022]> {}
          interface _ISO2022_CN_GB$Encoder$$static extends ClassLike {
            _SOD: byte[];
            _gb2312: java.nio.charset.Charset;
            new(cs: java.nio.charset.Charset): ISO2022_CN_GB$Encoder;
          }
          let ISO2022_CN_GB$Encoder: _ISO2022_CN_GB$Encoder$$static;
          interface _ISO2022_CN_GB$Encoder {
            isLegalReplacement(repl: byte[]): boolean;
          }
          interface ISO2022_CN_GB$Encoder extends CombineTypes<[_ISO2022_CN_GB$Encoder, sun.nio.cs.ext.ISO2022$Encoder]> {}
          interface _ISO2022_JP$$static extends ClassLike {
            _ASCII: int;
            _ESC: int;
            _JISX0201_1976: int;
            _JISX0201_1976_KANA: int;
            _JISX0208_1978: int;
            _JISX0208_1983: int;
            _JISX0212_1990: int;
            _SHIFTOUT: int;
            _SI: int;
            _SO: int;
            new(): ISO2022_JP;
            _new(canonicalName: string, aliases: string[]): ISO2022_JP;
          }
          let ISO2022_JP: _ISO2022_JP$$static;
          interface _ISO2022_JP {
            contains(cs: java.nio.charset.Charset): boolean;
            _doSBKANA(): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface ISO2022_JP extends CombineTypes<[_ISO2022_JP, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _ISO2022_JP$Decoder$$static extends ClassLike {
            _DEC0208: DoubleByte$Decoder;
            _new(cs: java.nio.charset.Charset, dec0208: DoubleByte$Decoder, dec0212: DoubleByte$Decoder): ISO2022_JP$Decoder;
          }
          let ISO2022_JP$Decoder: _ISO2022_JP$Decoder$$static;
          interface _ISO2022_JP$Decoder {
            _decodeArrayLoop(src: java.nio.ByteBuffer, dst: java.nio.CharBuffer): java.nio.charset.CoderResult;
            _decodeBufferLoop(src: java.nio.ByteBuffer, dst: java.nio.CharBuffer): java.nio.charset.CoderResult;
            decodeLoop(src: java.nio.ByteBuffer, dst: java.nio.CharBuffer): java.nio.charset.CoderResult;
            implFlush(out: java.nio.CharBuffer): java.nio.charset.CoderResult;
            implReset(): void;
            _currentState: int;
            _dec0208: DoubleByte$Decoder;
            _dec0212: DoubleByte$Decoder;
            _previousState: int;
          }
          interface ISO2022_JP$Decoder extends CombineTypes<[_ISO2022_JP$Decoder, sun.nio.cs.DelegatableDecoder, java.nio.charset.CharsetDecoder]> {}
          interface _ISO2022_JP$Encoder$$static extends ClassLike {
            _ENC0208: DoubleByte$Encoder;
            _repl: byte[];
            _new(cs: java.nio.charset.Charset, enc0208: DoubleByte$Encoder, enc0212: DoubleByte$Encoder, doSBKANA: boolean): ISO2022_JP$Encoder;
          }
          let ISO2022_JP$Encoder: _ISO2022_JP$Encoder$$static;
          interface _ISO2022_JP$Encoder {
            canEncode(c: char): boolean;
            _encodeArrayLoop(src: java.nio.CharBuffer, dst: java.nio.ByteBuffer): java.nio.charset.CoderResult;
            _encodeBufferLoop(src: java.nio.CharBuffer, dst: java.nio.ByteBuffer): java.nio.charset.CoderResult;
            _encodeLoop(src: java.nio.CharBuffer, dst: java.nio.ByteBuffer): java.nio.charset.CoderResult;
            _encodeSingle(inputChar: char): int;
            _implFlush(out: java.nio.ByteBuffer): java.nio.charset.CoderResult;
            _implReplaceWith(newReplacement: byte[]): void;
            _implReset(): void;
            _currentMode: int;
            _doSBKANA: boolean;
            _enc0208: DoubleByte$Encoder;
            _enc0212: DoubleByte$Encoder;
            _replaceMode: int;
            _sgp: Surrogate$Parser;
          }
          interface ISO2022_JP$Encoder extends CombineTypes<[_ISO2022_JP$Encoder, java.nio.charset.CharsetEncoder]> {}
          interface _ISO2022_JP_2$$static extends ClassLike {
            new(): ISO2022_JP_2;
          }
          let ISO2022_JP_2: _ISO2022_JP_2$$static;
          interface _ISO2022_JP_2 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface ISO2022_JP_2 extends CombineTypes<[_ISO2022_JP_2, sun.nio.cs.ext.ISO2022_JP]> {}
          interface _ISO2022_JP_2$CoderHolder$$static extends ClassLike {
            _DEC0212: DoubleByte$Decoder;
            _ENC0212: DoubleByte$Encoder;
          }
          let ISO2022_JP_2$CoderHolder: _ISO2022_JP_2$CoderHolder$$static;
          interface _ISO2022_JP_2$CoderHolder {
          }
          interface ISO2022_JP_2$CoderHolder extends CombineTypes<[_ISO2022_JP_2$CoderHolder, java.lang.Object]> {}
          interface _ISO2022_KR$$static extends ClassLike {
            new(): ISO2022_KR;
          }
          let ISO2022_KR: _ISO2022_KR$$static;
          interface _ISO2022_KR {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface ISO2022_KR extends CombineTypes<[_ISO2022_KR, sun.nio.cs.HistoricallyNamedCharset, sun.nio.cs.ext.ISO2022]> {}
          interface _ISO2022_KR$Decoder$$static extends ClassLike {
            _ISO_ESC: byte;
            _ISO_SI: byte;
            _ISO_SO: byte;
            _ISO_SS2_7: byte;
            _ISO_SS3_7: byte;
            _KSC5601: DoubleByte$Decoder;
            _MSB: byte;
            _REPLACE_CHAR: char;
            _SOD: byte[];
            _SOFlag: byte;
            _SS2Flag: byte;
            _SS3Flag: byte;
            _minDesignatorLength: byte;
          }
          let ISO2022_KR$Decoder: _ISO2022_KR$Decoder$$static;
          interface _ISO2022_KR$Decoder {
            _decode(byte1: byte, byte2: byte, shiftFlag: byte): char;
            _decodeArrayLoop(src: java.nio.ByteBuffer, dst: java.nio.CharBuffer): java.nio.charset.CoderResult;
            _decodeBufferLoop(src: java.nio.ByteBuffer, dst: java.nio.CharBuffer): java.nio.charset.CoderResult;
            _decodeLoop(src: java.nio.ByteBuffer, dst: java.nio.CharBuffer): java.nio.charset.CoderResult;
            _findDesig(_in: byte[], sp: int, sl: int): boolean;
            _findDesigBuf(_in: java.nio.ByteBuffer): boolean;
            _implReset(): void;
            _shiftout: boolean;
          }
          interface ISO2022_KR$Decoder extends CombineTypes<[_ISO2022_KR$Decoder, java.nio.charset.CharsetDecoder]> {}
          interface _ISO2022_KR$Encoder$$static extends ClassLike {
            _SOD: byte[];
            new(cs: java.nio.charset.Charset): ISO2022_KR$Encoder;
          }
          let ISO2022_KR$Encoder: _ISO2022_KR$Encoder$$static;
          interface _ISO2022_KR$Encoder {
            canEncode(c: char): boolean;
          }
          interface ISO2022_KR$Encoder extends CombineTypes<[_ISO2022_KR$Encoder, sun.nio.cs.ext.ISO2022$Encoder]> {}
          interface _ISO2022_KR$Holder$$static extends ClassLike {
            _ksc5601_cs: java.nio.charset.Charset;
          }
          let ISO2022_KR$Holder: _ISO2022_KR$Holder$$static;
          interface _ISO2022_KR$Holder {
          }
          interface ISO2022_KR$Holder extends CombineTypes<[_ISO2022_KR$Holder, java.lang.Object]> {}
          interface _ISO_8859_11$$static extends ClassLike {
            new(): ISO_8859_11;
          }
          let ISO_8859_11: _ISO_8859_11$$static;
          interface _ISO_8859_11 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface ISO_8859_11 extends CombineTypes<[_ISO_8859_11, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _ISO_8859_11$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let ISO_8859_11$Holder: _ISO_8859_11$Holder$$static;
          interface _ISO_8859_11$Holder {
          }
          interface ISO_8859_11$Holder extends CombineTypes<[_ISO_8859_11$Holder, java.lang.Object]> {}
          interface _ISO_8859_3$$static extends ClassLike {
            new(): ISO_8859_3;
          }
          let ISO_8859_3: _ISO_8859_3$$static;
          interface _ISO_8859_3 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface ISO_8859_3 extends CombineTypes<[_ISO_8859_3, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _ISO_8859_3$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let ISO_8859_3$Holder: _ISO_8859_3$Holder$$static;
          interface _ISO_8859_3$Holder {
          }
          interface ISO_8859_3$Holder extends CombineTypes<[_ISO_8859_3$Holder, java.lang.Object]> {}
          interface _ISO_8859_6$$static extends ClassLike {
            new(): ISO_8859_6;
          }
          let ISO_8859_6: _ISO_8859_6$$static;
          interface _ISO_8859_6 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface ISO_8859_6 extends CombineTypes<[_ISO_8859_6, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _ISO_8859_6$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let ISO_8859_6$Holder: _ISO_8859_6$Holder$$static;
          interface _ISO_8859_6$Holder {
          }
          interface ISO_8859_6$Holder extends CombineTypes<[_ISO_8859_6$Holder, java.lang.Object]> {}
          interface _ISO_8859_8$$static extends ClassLike {
            new(): ISO_8859_8;
          }
          let ISO_8859_8: _ISO_8859_8$$static;
          interface _ISO_8859_8 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface ISO_8859_8 extends CombineTypes<[_ISO_8859_8, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _ISO_8859_8$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let ISO_8859_8$Holder: _ISO_8859_8$Holder$$static;
          interface _ISO_8859_8$Holder {
          }
          interface ISO_8859_8$Holder extends CombineTypes<[_ISO_8859_8$Holder, java.lang.Object]> {}
          interface _JISAutoDetect$$static extends ClassLike {
            _looksLikeJapanese(cb: java.nio.CharBuffer): boolean;
            _EUCJP_KANA1_MASK: int;
            _EUCJP_KANA2_MASK: int;
            _EUCJP_MASK: int;
            _SJIS1B_MASK: int;
            _SJIS2B_MASK: int;
            new(): JISAutoDetect;
          }
          let JISAutoDetect: _JISAutoDetect$$static;
          interface _JISAutoDetect {
            canEncode(): boolean;
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface JISAutoDetect extends CombineTypes<[_JISAutoDetect, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _JISAutoDetect$Decoder$$static extends ClassLike {
            _copyLeadingASCII(src: java.nio.ByteBuffer, dst: java.nio.CharBuffer): void;
            _getSJISName(): string;
            _isPlainASCII(b: byte): boolean;
            _EUCJPName: string;
            _SJISName: string;
            new(cs: java.nio.charset.Charset): JISAutoDetect$Decoder;
          }
          let JISAutoDetect$Decoder: _JISAutoDetect$Decoder$$static;
          interface _JISAutoDetect$Decoder {
            _decodeLoop(decoder: DelegatableDecoder, src: java.nio.ByteBuffer, dst: java.nio.CharBuffer): java.nio.charset.CoderResult;
            _decodeLoop(src: java.nio.ByteBuffer, dst: java.nio.CharBuffer): java.nio.charset.CoderResult;
            detectedCharset(): java.nio.charset.Charset;
            _implFlush(out: java.nio.CharBuffer): java.nio.charset.CoderResult;
            _implReset(): void;
            isAutoDetecting(): boolean;
            isCharsetDetected(): boolean;
            _detectedDecoder: DelegatableDecoder;
          }
          interface JISAutoDetect$Decoder extends CombineTypes<[_JISAutoDetect$Decoder, java.nio.charset.CharsetDecoder]> {}
          interface _JIS_X_0208$$static extends ClassLike {
            new(): JIS_X_0208;
          }
          let JIS_X_0208: _JIS_X_0208$$static;
          interface _JIS_X_0208 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface JIS_X_0208 extends CombineTypes<[_JIS_X_0208, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _JIS_X_0208$DecodeHolder$$static extends ClassLike {
            readonly b2c: char[][];
            readonly b2cSB: char[];
            _b2cSBStr: string;
            _b2cStr: string[];
            new(): JIS_X_0208$DecodeHolder;
          }
          let JIS_X_0208$DecodeHolder: _JIS_X_0208$DecodeHolder$$static;
          interface _JIS_X_0208$DecodeHolder {
          }
          interface JIS_X_0208$DecodeHolder extends CombineTypes<[_JIS_X_0208$DecodeHolder, java.lang.Object]> {}
          interface _JIS_X_0208$EncodeHolder$$static extends ClassLike {
            readonly c2b: char[];
            readonly c2bIndex: char[];
            new(): JIS_X_0208$EncodeHolder;
          }
          let JIS_X_0208$EncodeHolder: _JIS_X_0208$EncodeHolder$$static;
          interface _JIS_X_0208$EncodeHolder {
          }
          interface JIS_X_0208$EncodeHolder extends CombineTypes<[_JIS_X_0208$EncodeHolder, java.lang.Object]> {}
          interface _JIS_X_0208_MS5022X$$static extends ClassLike {
            new(): JIS_X_0208_MS5022X;
          }
          let JIS_X_0208_MS5022X: _JIS_X_0208_MS5022X$$static;
          interface _JIS_X_0208_MS5022X {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface JIS_X_0208_MS5022X extends CombineTypes<[_JIS_X_0208_MS5022X, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _JIS_X_0208_MS5022X$DecodeHolder$$static extends ClassLike {
            readonly b2c: char[][];
            readonly b2cSB: char[];
            _b2cSBStr: string;
            _b2cStr: string[];
            new(): JIS_X_0208_MS5022X$DecodeHolder;
          }
          let JIS_X_0208_MS5022X$DecodeHolder: _JIS_X_0208_MS5022X$DecodeHolder$$static;
          interface _JIS_X_0208_MS5022X$DecodeHolder {
          }
          interface JIS_X_0208_MS5022X$DecodeHolder extends CombineTypes<[_JIS_X_0208_MS5022X$DecodeHolder, java.lang.Object]> {}
          interface _JIS_X_0208_MS5022X$EncodeHolder$$static extends ClassLike {
            readonly c2b: char[];
            readonly c2bIndex: char[];
            new(): JIS_X_0208_MS5022X$EncodeHolder;
          }
          let JIS_X_0208_MS5022X$EncodeHolder: _JIS_X_0208_MS5022X$EncodeHolder$$static;
          interface _JIS_X_0208_MS5022X$EncodeHolder {
          }
          interface JIS_X_0208_MS5022X$EncodeHolder extends CombineTypes<[_JIS_X_0208_MS5022X$EncodeHolder, java.lang.Object]> {}
          interface _JIS_X_0208_MS932$$static extends ClassLike {
            new(): JIS_X_0208_MS932;
          }
          let JIS_X_0208_MS932: _JIS_X_0208_MS932$$static;
          interface _JIS_X_0208_MS932 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface JIS_X_0208_MS932 extends CombineTypes<[_JIS_X_0208_MS932, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _JIS_X_0208_MS932$DecodeHolder$$static extends ClassLike {
            readonly b2c: char[][];
            readonly b2cSB: char[];
            _b2cSBStr: string;
            _b2cStr: string[];
            new(): JIS_X_0208_MS932$DecodeHolder;
          }
          let JIS_X_0208_MS932$DecodeHolder: _JIS_X_0208_MS932$DecodeHolder$$static;
          interface _JIS_X_0208_MS932$DecodeHolder {
          }
          interface JIS_X_0208_MS932$DecodeHolder extends CombineTypes<[_JIS_X_0208_MS932$DecodeHolder, java.lang.Object]> {}
          interface _JIS_X_0208_MS932$EncodeHolder$$static extends ClassLike {
            readonly c2b: char[];
            readonly c2bIndex: char[];
            new(): JIS_X_0208_MS932$EncodeHolder;
          }
          let JIS_X_0208_MS932$EncodeHolder: _JIS_X_0208_MS932$EncodeHolder$$static;
          interface _JIS_X_0208_MS932$EncodeHolder {
          }
          interface JIS_X_0208_MS932$EncodeHolder extends CombineTypes<[_JIS_X_0208_MS932$EncodeHolder, java.lang.Object]> {}
          interface _JIS_X_0208_Solaris$$static extends ClassLike {
            new(): JIS_X_0208_Solaris;
          }
          let JIS_X_0208_Solaris: _JIS_X_0208_Solaris$$static;
          interface _JIS_X_0208_Solaris {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface JIS_X_0208_Solaris extends CombineTypes<[_JIS_X_0208_Solaris, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _JIS_X_0208_Solaris$DecodeHolder$$static extends ClassLike {
            readonly b2c: char[][];
            readonly b2cSB: char[];
            _b2cSBStr: string;
            _b2cStr: string[];
            new(): JIS_X_0208_Solaris$DecodeHolder;
          }
          let JIS_X_0208_Solaris$DecodeHolder: _JIS_X_0208_Solaris$DecodeHolder$$static;
          interface _JIS_X_0208_Solaris$DecodeHolder {
          }
          interface JIS_X_0208_Solaris$DecodeHolder extends CombineTypes<[_JIS_X_0208_Solaris$DecodeHolder, java.lang.Object]> {}
          interface _JIS_X_0208_Solaris$EncodeHolder$$static extends ClassLike {
            readonly c2b: char[];
            readonly c2bIndex: char[];
            new(): JIS_X_0208_Solaris$EncodeHolder;
          }
          let JIS_X_0208_Solaris$EncodeHolder: _JIS_X_0208_Solaris$EncodeHolder$$static;
          interface _JIS_X_0208_Solaris$EncodeHolder {
          }
          interface JIS_X_0208_Solaris$EncodeHolder extends CombineTypes<[_JIS_X_0208_Solaris$EncodeHolder, java.lang.Object]> {}
          interface _JIS_X_0212$$static extends ClassLike {
            new(): JIS_X_0212;
          }
          let JIS_X_0212: _JIS_X_0212$$static;
          interface _JIS_X_0212 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface JIS_X_0212 extends CombineTypes<[_JIS_X_0212, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _JIS_X_0212$DecodeHolder$$static extends ClassLike {
            readonly b2c: char[][];
            readonly b2cSB: char[];
            _b2cSBStr: string;
            _b2cStr: string[];
            new(): JIS_X_0212$DecodeHolder;
          }
          let JIS_X_0212$DecodeHolder: _JIS_X_0212$DecodeHolder$$static;
          interface _JIS_X_0212$DecodeHolder {
          }
          interface JIS_X_0212$DecodeHolder extends CombineTypes<[_JIS_X_0212$DecodeHolder, java.lang.Object]> {}
          interface _JIS_X_0212$EncodeHolder$$static extends ClassLike {
            readonly c2b: char[];
            readonly c2bIndex: char[];
            new(): JIS_X_0212$EncodeHolder;
          }
          let JIS_X_0212$EncodeHolder: _JIS_X_0212$EncodeHolder$$static;
          interface _JIS_X_0212$EncodeHolder {
          }
          interface JIS_X_0212$EncodeHolder extends CombineTypes<[_JIS_X_0212$EncodeHolder, java.lang.Object]> {}
          interface _JIS_X_0212_MS5022X$$static extends ClassLike {
            new(): JIS_X_0212_MS5022X;
          }
          let JIS_X_0212_MS5022X: _JIS_X_0212_MS5022X$$static;
          interface _JIS_X_0212_MS5022X {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface JIS_X_0212_MS5022X extends CombineTypes<[_JIS_X_0212_MS5022X, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _JIS_X_0212_MS5022X$DecodeHolder$$static extends ClassLike {
            readonly b2c: char[][];
            readonly b2cSB: char[];
            _b2cSBStr: string;
            _b2cStr: string[];
            new(): JIS_X_0212_MS5022X$DecodeHolder;
          }
          let JIS_X_0212_MS5022X$DecodeHolder: _JIS_X_0212_MS5022X$DecodeHolder$$static;
          interface _JIS_X_0212_MS5022X$DecodeHolder {
          }
          interface JIS_X_0212_MS5022X$DecodeHolder extends CombineTypes<[_JIS_X_0212_MS5022X$DecodeHolder, java.lang.Object]> {}
          interface _JIS_X_0212_MS5022X$EncodeHolder$$static extends ClassLike {
            readonly c2b: char[];
            readonly c2bIndex: char[];
            new(): JIS_X_0212_MS5022X$EncodeHolder;
          }
          let JIS_X_0212_MS5022X$EncodeHolder: _JIS_X_0212_MS5022X$EncodeHolder$$static;
          interface _JIS_X_0212_MS5022X$EncodeHolder {
          }
          interface JIS_X_0212_MS5022X$EncodeHolder extends CombineTypes<[_JIS_X_0212_MS5022X$EncodeHolder, java.lang.Object]> {}
          interface _JIS_X_0212_Solaris$$static extends ClassLike {
            new(): JIS_X_0212_Solaris;
          }
          let JIS_X_0212_Solaris: _JIS_X_0212_Solaris$$static;
          interface _JIS_X_0212_Solaris {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface JIS_X_0212_Solaris extends CombineTypes<[_JIS_X_0212_Solaris, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _JIS_X_0212_Solaris$DecodeHolder$$static extends ClassLike {
            readonly b2c: char[][];
            readonly b2cSB: char[];
            _b2cSBStr: string;
            _b2cStr: string[];
            new(): JIS_X_0212_Solaris$DecodeHolder;
          }
          let JIS_X_0212_Solaris$DecodeHolder: _JIS_X_0212_Solaris$DecodeHolder$$static;
          interface _JIS_X_0212_Solaris$DecodeHolder {
          }
          interface JIS_X_0212_Solaris$DecodeHolder extends CombineTypes<[_JIS_X_0212_Solaris$DecodeHolder, java.lang.Object]> {}
          interface _JIS_X_0212_Solaris$EncodeHolder$$static extends ClassLike {
            readonly c2b: char[];
            readonly c2bIndex: char[];
            new(): JIS_X_0212_Solaris$EncodeHolder;
          }
          let JIS_X_0212_Solaris$EncodeHolder: _JIS_X_0212_Solaris$EncodeHolder$$static;
          interface _JIS_X_0212_Solaris$EncodeHolder {
          }
          interface JIS_X_0212_Solaris$EncodeHolder extends CombineTypes<[_JIS_X_0212_Solaris$EncodeHolder, java.lang.Object]> {}
          interface _MS50220$$static extends ClassLike {
            new(): MS50220;
            _new(canonicalName: string, aliases: string[]): MS50220;
          }
          let MS50220: _MS50220$$static;
          interface _MS50220 {
            contains(cs: java.nio.charset.Charset): boolean;
            _doSBKANA(): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface MS50220 extends CombineTypes<[_MS50220, sun.nio.cs.ext.ISO2022_JP]> {}
          interface _MS50220$Holder$$static extends ClassLike {
            _DEC0208: DoubleByte$Decoder;
            _DEC0212: DoubleByte$Decoder;
            _ENC0208: DoubleByte$Encoder;
            _ENC0212: DoubleByte$Encoder;
          }
          let MS50220$Holder: _MS50220$Holder$$static;
          interface _MS50220$Holder {
          }
          interface MS50220$Holder extends CombineTypes<[_MS50220$Holder, java.lang.Object]> {}
          interface _MS50221$$static extends ClassLike {
            new(): MS50221;
          }
          let MS50221: _MS50221$$static;
          interface _MS50221 {
            contains(cs: java.nio.charset.Charset): boolean;
            _doSBKANA(): boolean;
            historicalName(): string;
          }
          interface MS50221 extends CombineTypes<[_MS50221, sun.nio.cs.ext.MS50220]> {}
          interface _MS932_0213$$static extends ClassLike {
            new(): MS932_0213;
          }
          let MS932_0213: _MS932_0213$$static;
          interface _MS932_0213 {
            contains(cs: java.nio.charset.Charset): boolean;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface MS932_0213 extends CombineTypes<[_MS932_0213, java.nio.charset.Charset]> {}
          interface _MS932_0213$Decoder$$static extends ClassLike {
            _decMS932: DoubleByte$Decoder;
            _new(cs: java.nio.charset.Charset): MS932_0213$Decoder;
          }
          let MS932_0213$Decoder: _MS932_0213$Decoder$$static;
          interface _MS932_0213$Decoder {
            _decodeDouble(b1: int, b2: int): char;
          }
          interface MS932_0213$Decoder extends CombineTypes<[_MS932_0213$Decoder, sun.nio.cs.ext.SJIS_0213$Decoder]> {}
          interface _MS932_0213$Encoder$$static extends ClassLike {
            _encMS932: DoubleByte$Encoder;
            _new(cs: java.nio.charset.Charset): MS932_0213$Encoder;
          }
          let MS932_0213$Encoder: _MS932_0213$Encoder$$static;
          interface _MS932_0213$Encoder {
            _encodeChar(ch: char): int;
          }
          interface MS932_0213$Encoder extends CombineTypes<[_MS932_0213$Encoder, sun.nio.cs.ext.SJIS_0213$Encoder]> {}
          interface _MSISO2022JP$$static extends ClassLike {
            new(): MSISO2022JP;
          }
          let MSISO2022JP: _MSISO2022JP$$static;
          interface _MSISO2022JP {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface MSISO2022JP extends CombineTypes<[_MSISO2022JP, sun.nio.cs.ext.ISO2022_JP]> {}
          interface _MSISO2022JP$CoderHolder$$static extends ClassLike {
            _DEC0208: DoubleByte$Decoder;
            _ENC0208: DoubleByte$Encoder;
          }
          let MSISO2022JP$CoderHolder: _MSISO2022JP$CoderHolder$$static;
          interface _MSISO2022JP$CoderHolder {
          }
          interface MSISO2022JP$CoderHolder extends CombineTypes<[_MSISO2022JP$CoderHolder, java.lang.Object]> {}
          interface _MacArabic$$static extends ClassLike {
            new(): MacArabic;
          }
          let MacArabic: _MacArabic$$static;
          interface _MacArabic {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface MacArabic extends CombineTypes<[_MacArabic, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _MacArabic$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let MacArabic$Holder: _MacArabic$Holder$$static;
          interface _MacArabic$Holder {
          }
          interface MacArabic$Holder extends CombineTypes<[_MacArabic$Holder, java.lang.Object]> {}
          interface _MacCentralEurope$$static extends ClassLike {
            new(): MacCentralEurope;
          }
          let MacCentralEurope: _MacCentralEurope$$static;
          interface _MacCentralEurope {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface MacCentralEurope extends CombineTypes<[_MacCentralEurope, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _MacCentralEurope$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let MacCentralEurope$Holder: _MacCentralEurope$Holder$$static;
          interface _MacCentralEurope$Holder {
          }
          interface MacCentralEurope$Holder extends CombineTypes<[_MacCentralEurope$Holder, java.lang.Object]> {}
          interface _MacCroatian$$static extends ClassLike {
            new(): MacCroatian;
          }
          let MacCroatian: _MacCroatian$$static;
          interface _MacCroatian {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface MacCroatian extends CombineTypes<[_MacCroatian, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _MacCroatian$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let MacCroatian$Holder: _MacCroatian$Holder$$static;
          interface _MacCroatian$Holder {
          }
          interface MacCroatian$Holder extends CombineTypes<[_MacCroatian$Holder, java.lang.Object]> {}
          interface _MacCyrillic$$static extends ClassLike {
            new(): MacCyrillic;
          }
          let MacCyrillic: _MacCyrillic$$static;
          interface _MacCyrillic {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface MacCyrillic extends CombineTypes<[_MacCyrillic, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _MacCyrillic$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let MacCyrillic$Holder: _MacCyrillic$Holder$$static;
          interface _MacCyrillic$Holder {
          }
          interface MacCyrillic$Holder extends CombineTypes<[_MacCyrillic$Holder, java.lang.Object]> {}
          interface _MacDingbat$$static extends ClassLike {
            new(): MacDingbat;
          }
          let MacDingbat: _MacDingbat$$static;
          interface _MacDingbat {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface MacDingbat extends CombineTypes<[_MacDingbat, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _MacDingbat$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let MacDingbat$Holder: _MacDingbat$Holder$$static;
          interface _MacDingbat$Holder {
          }
          interface MacDingbat$Holder extends CombineTypes<[_MacDingbat$Holder, java.lang.Object]> {}
          interface _MacGreek$$static extends ClassLike {
            new(): MacGreek;
          }
          let MacGreek: _MacGreek$$static;
          interface _MacGreek {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface MacGreek extends CombineTypes<[_MacGreek, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _MacGreek$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let MacGreek$Holder: _MacGreek$Holder$$static;
          interface _MacGreek$Holder {
          }
          interface MacGreek$Holder extends CombineTypes<[_MacGreek$Holder, java.lang.Object]> {}
          interface _MacHebrew$$static extends ClassLike {
            new(): MacHebrew;
          }
          let MacHebrew: _MacHebrew$$static;
          interface _MacHebrew {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface MacHebrew extends CombineTypes<[_MacHebrew, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _MacHebrew$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let MacHebrew$Holder: _MacHebrew$Holder$$static;
          interface _MacHebrew$Holder {
          }
          interface MacHebrew$Holder extends CombineTypes<[_MacHebrew$Holder, java.lang.Object]> {}
          interface _MacIceland$$static extends ClassLike {
            new(): MacIceland;
          }
          let MacIceland: _MacIceland$$static;
          interface _MacIceland {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface MacIceland extends CombineTypes<[_MacIceland, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _MacIceland$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let MacIceland$Holder: _MacIceland$Holder$$static;
          interface _MacIceland$Holder {
          }
          interface MacIceland$Holder extends CombineTypes<[_MacIceland$Holder, java.lang.Object]> {}
          interface _MacRoman$$static extends ClassLike {
            new(): MacRoman;
          }
          let MacRoman: _MacRoman$$static;
          interface _MacRoman {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface MacRoman extends CombineTypes<[_MacRoman, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _MacRoman$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let MacRoman$Holder: _MacRoman$Holder$$static;
          interface _MacRoman$Holder {
          }
          interface MacRoman$Holder extends CombineTypes<[_MacRoman$Holder, java.lang.Object]> {}
          interface _MacRomania$$static extends ClassLike {
            new(): MacRomania;
          }
          let MacRomania: _MacRomania$$static;
          interface _MacRomania {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface MacRomania extends CombineTypes<[_MacRomania, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _MacRomania$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let MacRomania$Holder: _MacRomania$Holder$$static;
          interface _MacRomania$Holder {
          }
          interface MacRomania$Holder extends CombineTypes<[_MacRomania$Holder, java.lang.Object]> {}
          interface _MacSymbol$$static extends ClassLike {
            new(): MacSymbol;
          }
          let MacSymbol: _MacSymbol$$static;
          interface _MacSymbol {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface MacSymbol extends CombineTypes<[_MacSymbol, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _MacSymbol$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let MacSymbol$Holder: _MacSymbol$Holder$$static;
          interface _MacSymbol$Holder {
          }
          interface MacSymbol$Holder extends CombineTypes<[_MacSymbol$Holder, java.lang.Object]> {}
          interface _MacThai$$static extends ClassLike {
            new(): MacThai;
          }
          let MacThai: _MacThai$$static;
          interface _MacThai {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface MacThai extends CombineTypes<[_MacThai, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _MacThai$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let MacThai$Holder: _MacThai$Holder$$static;
          interface _MacThai$Holder {
          }
          interface MacThai$Holder extends CombineTypes<[_MacThai$Holder, java.lang.Object]> {}
          interface _MacTurkish$$static extends ClassLike {
            new(): MacTurkish;
          }
          let MacTurkish: _MacTurkish$$static;
          interface _MacTurkish {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface MacTurkish extends CombineTypes<[_MacTurkish, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _MacTurkish$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let MacTurkish$Holder: _MacTurkish$Holder$$static;
          interface _MacTurkish$Holder {
          }
          interface MacTurkish$Holder extends CombineTypes<[_MacTurkish$Holder, java.lang.Object]> {}
          interface _MacUkraine$$static extends ClassLike {
            new(): MacUkraine;
          }
          let MacUkraine: _MacUkraine$$static;
          interface _MacUkraine {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface MacUkraine extends CombineTypes<[_MacUkraine, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _MacUkraine$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let MacUkraine$Holder: _MacUkraine$Holder$$static;
          interface _MacUkraine$Holder {
          }
          interface MacUkraine$Holder extends CombineTypes<[_MacUkraine$Holder, java.lang.Object]> {}
          interface _PCK$$static extends ClassLike {
            new(): PCK;
          }
          let PCK: _PCK$$static;
          interface _PCK {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface PCK extends CombineTypes<[_PCK, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _PCK$DecodeHolder$$static extends ClassLike {
            readonly b2c: char[][];
            readonly b2cSB: char[];
            _b2cSBStr: string;
            _b2cStr: string[];
            new(): PCK$DecodeHolder;
          }
          let PCK$DecodeHolder: _PCK$DecodeHolder$$static;
          interface _PCK$DecodeHolder {
          }
          interface PCK$DecodeHolder extends CombineTypes<[_PCK$DecodeHolder, java.lang.Object]> {}
          interface _PCK$EncodeHolder$$static extends ClassLike {
            readonly c2b: char[];
            readonly c2bIndex: char[];
            new(): PCK$EncodeHolder;
          }
          let PCK$EncodeHolder: _PCK$EncodeHolder$$static;
          interface _PCK$EncodeHolder {
          }
          interface PCK$EncodeHolder extends CombineTypes<[_PCK$EncodeHolder, java.lang.Object]> {}
          interface _SJIS_0213$$static extends ClassLike {
            new(): SJIS_0213;
          }
          let SJIS_0213: _SJIS_0213$$static;
          interface _SJIS_0213 {
            contains(cs: java.nio.charset.Charset): boolean;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface SJIS_0213 extends CombineTypes<[_SJIS_0213, java.nio.charset.Charset]> {}
          interface _SJIS_0213$Decoder$$static extends ClassLike {
            _UNMAPPABLE: char;
            _new(cs: java.nio.charset.Charset): SJIS_0213$Decoder;
          }
          let SJIS_0213$Decoder: _SJIS_0213$Decoder$$static;
          interface _SJIS_0213$Decoder {
            _decodeArrayLoop(src: java.nio.ByteBuffer, dst: java.nio.CharBuffer): java.nio.charset.CoderResult;
            _decodeBufferLoop(src: java.nio.ByteBuffer, dst: java.nio.CharBuffer): java.nio.charset.CoderResult;
            _decodeDouble(b1: int, b2: int): char;
            _decodeDoubleEx(b1: int, b2: int): char[];
            _decodeLoop(src: java.nio.ByteBuffer, dst: java.nio.CharBuffer): java.nio.charset.CoderResult;
            _decodeSingle(b: int): char;
            _cc: char[];
            _comp: CharsetMapping$Entry;
          }
          interface SJIS_0213$Decoder extends CombineTypes<[_SJIS_0213$Decoder, java.nio.charset.CharsetDecoder]> {}
          interface _SJIS_0213$Encoder$$static extends ClassLike {
            _MAX_SINGLEBYTE: int;
            _UNMAPPABLE: int;
            _new(cs: java.nio.charset.Charset): SJIS_0213$Encoder;
          }
          let SJIS_0213$Encoder: _SJIS_0213$Encoder$$static;
          interface _SJIS_0213$Encoder {
            canEncode(c: char): boolean;
            _encodeArrayLoop(src: java.nio.CharBuffer, dst: java.nio.ByteBuffer): java.nio.charset.CoderResult;
            _encodeBufferLoop(src: java.nio.CharBuffer, dst: java.nio.ByteBuffer): java.nio.charset.CoderResult;
            _encodeChar(ch: char): int;
            _encodeComposite(base: char, cc: char): int;
            _encodeLoop(src: java.nio.CharBuffer, dst: java.nio.ByteBuffer): java.nio.charset.CoderResult;
            _encodeSurrogate(hi: char, lo: char): int;
            _implFlush(dst: java.nio.ByteBuffer): java.nio.charset.CoderResult;
            _implReset(): void;
            _isCompositeBase(ch: char): boolean;
            _comp: CharsetMapping$Entry;
            _leftoverBase: char;
          }
          interface SJIS_0213$Encoder extends CombineTypes<[_SJIS_0213$Encoder, java.nio.charset.CharsetEncoder]> {}
          interface _SJIS_0213$Holder$$static extends ClassLike {
            _mapping: CharsetMapping;
          }
          let SJIS_0213$Holder: _SJIS_0213$Holder$$static;
          interface _SJIS_0213$Holder {
          }
          interface SJIS_0213$Holder extends CombineTypes<[_SJIS_0213$Holder, java.lang.Object]> {}
          interface _SimpleEUCEncoder$$static extends ClassLike {
            _new(cs: java.nio.charset.Charset): SimpleEUCEncoder;
          }
          let SimpleEUCEncoder: _SimpleEUCEncoder$$static;
          interface _SimpleEUCEncoder {
            canEncode(ch: char): boolean;
            encode(inputChar: char): byte;
            _encodeArrayLoop(src: java.nio.CharBuffer, dst: java.nio.ByteBuffer): java.nio.charset.CoderResult;
            _encodeBufferLoop(src: java.nio.CharBuffer, dst: java.nio.ByteBuffer): java.nio.charset.CoderResult;
            _encodeLoop(src: java.nio.CharBuffer, dst: java.nio.ByteBuffer): java.nio.charset.CoderResult;
            _index1: short[];
            _index2: string;
            _index2a: string;
            _index2b: string;
            _index2c: string;
            _mask1: int;
            _mask2: int;
            _outputByte: byte[];
            _sgp: Surrogate$Parser;
            _shift: int;
          }
          interface SimpleEUCEncoder extends CombineTypes<[_SimpleEUCEncoder, java.nio.charset.CharsetEncoder]> {}
          interface _TIS_620$$static extends ClassLike {
            new(): TIS_620;
          }
          let TIS_620: _TIS_620$$static;
          interface _TIS_620 {
            contains(cs: java.nio.charset.Charset): boolean;
            historicalName(): string;
            newDecoder(): java.nio.charset.CharsetDecoder;
            newEncoder(): java.nio.charset.CharsetEncoder;
          }
          interface TIS_620 extends CombineTypes<[_TIS_620, sun.nio.cs.HistoricallyNamedCharset, java.nio.charset.Charset]> {}
          interface _TIS_620$Holder$$static extends ClassLike {
            _b2c: char[];
            _b2cTable: string;
            _c2b: char[];
            _c2bIndex: char[];
          }
          let TIS_620$Holder: _TIS_620$Holder$$static;
          interface _TIS_620$Holder {
          }
          interface TIS_620$Holder extends CombineTypes<[_TIS_620$Holder, java.lang.Object]> {}
        }
      }
    }
  }
}
