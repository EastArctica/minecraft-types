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
  module jdk {
    module security {
      module jarsigner {
        interface _JarSigner$$static extends ClassLike {
          _JUZFA: jdk.internal.access.JavaUtilZipFileAccess;
        }
        let JarSigner: _JarSigner$$static;
        interface _JarSigner {
          getDigestAlgorithm(): string;
          _getDigestAttributes(ze: java.util.zip.ZipEntry, zf: java.util.zip.ZipFile, digests: java.security.MessageDigest[]): java.util.jar.Attributes;
          _getDigests(ze: java.util.zip.ZipEntry, zf: java.util.zip.ZipFile, digests: java.security.MessageDigest[]): string[];
          _getManifestFile(zf: java.util.zip.ZipFile): java.util.zip.ZipEntry;
          getProperty(key: string): string;
          getSignatureAlgorithm(): string;
          getSignerName(): string;
          getTsa(): java.net.URI;
          sign(file: java.util.zip.ZipFile, os: java.io.OutputStream): void;
          _sign0(zipFile: java.util.zip.ZipFile, os: java.io.OutputStream): void;
          _updateDigests(ze: java.util.zip.ZipEntry, zf: java.util.zip.ZipFile, digests: java.security.MessageDigest[], mf: java.util.jar.Manifest): void;
          _writeBytes(zf: java.util.zip.ZipFile, ze: java.util.zip.ZipEntry, os: java.util.zip.ZipOutputStream): void;
          _writeEntry(zf: java.util.zip.ZipFile, os: java.util.zip.ZipOutputStream, ze: java.util.zip.ZipEntry): void;
          _certChain: java.security.cert.X509Certificate[];
          _digestProvider: java.security.Provider;
          _digestalg: string[];
          _extraAttrsDetected: boolean;
          _handler: java.util.function.BiConsumer<string,string>;
          _internalsf: boolean;
          _privateKey: java.security.PrivateKey;
          _sectionsonly: boolean;
          _sigProvider: java.security.Provider;
          _sigalg: string;
          _signerName: string;
          _tSADigestAlg: string;
          _tSAPolicyID: string;
          _tsaUrl: java.net.URI;
        }
        interface JarSigner extends CombineTypes<[_JarSigner, java.lang.Object]> {}
        interface _JarSigner$Builder$$static extends ClassLike {
          getDefaultDigestAlgorithm(): string;
          getDefaultSignatureAlgorithm(key: java.security.PrivateKey): string;
          _parseBoolean(name: string, value: string): boolean;
          new(entry: java.security.KeyStore$PrivateKeyEntry): JarSigner$Builder;
          new(privateKey: java.security.PrivateKey, certPath: java.security.cert.CertPath): JarSigner$Builder;
        }
        let JarSigner$Builder: _JarSigner$Builder$$static;
        interface _JarSigner$Builder {
          build(): JarSigner;
          digestAlgorithm(algorithm: string): JarSigner$Builder;
          digestAlgorithm(algorithm: string, provider: java.security.Provider): JarSigner$Builder;
          eventHandler(handler: java.util.function.BiConsumer<string,string>): JarSigner$Builder;
          setProperty(key: string, value: string): JarSigner$Builder;
          signatureAlgorithm(algorithm: string): JarSigner$Builder;
          signatureAlgorithm(algorithm: string, provider: java.security.Provider): JarSigner$Builder;
          signerName(name: string): JarSigner$Builder;
          tsa(uri: java.net.URI): JarSigner$Builder;
          _certChain: java.security.cert.X509Certificate[];
          _digestProvider: java.security.Provider;
          _digestalg: string[];
          _handler: java.util.function.BiConsumer<string,string>;
          _internalsf: boolean;
          _privateKey: java.security.PrivateKey;
          _sectionsonly: boolean;
          _sigProvider: java.security.Provider;
          _sigalg: string;
          _signerName: string;
          _tSADigestAlg: string;
          _tSAPolicyID: string;
          _tsaUrl: java.net.URI;
        }
        interface JarSigner$Builder extends CombineTypes<[_JarSigner$Builder, java.lang.Object]> {}
        interface _JarSigner$SignatureFile$$static extends ClassLike {
          _getBaseSignatureFilesName(baseName: string): string;
          new(digests: java.security.MessageDigest[], mf: java.util.jar.Manifest, md: sun.security.util.ManifestDigester, baseName: string, sectionsonly: boolean): JarSigner$SignatureFile;
        }
        let JarSigner$SignatureFile: _JarSigner$SignatureFile$$static;
        interface _JarSigner$SignatureFile {
          getBlockName(privateKey: java.security.PrivateKey): string;
          getMetaName(): string;
          write(out: java.io.OutputStream): void;
          _baseName: string;
          _sf: java.util.jar.Manifest;
        }
        interface JarSigner$SignatureFile extends CombineTypes<[_JarSigner$SignatureFile, java.lang.Object]> {}
        interface _JarSignerException$$static extends ClassLike {
          _serialVersionUID: long;
          new(message: string, cause: java.lang.Throwable): JarSignerException;
        }
        let JarSignerException: _JarSignerException$$static;
        interface _JarSignerException {
        }
        interface JarSignerException extends CombineTypes<[_JarSignerException, java.lang.RuntimeException]> {}
      }
    }
  }
  module sun {
    module security {
      module tools {
        module jarsigner {
          interface _Main$$static extends ClassLike {
            _checkWeakAlg(alg: string, cpcp: security.provider.certpath.CertPathConstraintsParameters): string;
            _checkWeakKey(key: java.security.PublicKey, cpcp: security.provider.certpath.CertPathConstraintsParameters): string;
            _doPrintVersion(): void;
            _fullusage(): void;
            _getPass(modifier: string, arg: string): char[];
            main(args: string[]): void;
            _usage(): void;
            _usageNoArg(): void;
            _CERTPATH_DISABLED_CHECK: security.util.DisabledAlgorithmConstraints;
            _DIGEST_PRIMITIVE_SET: java.util.Set<java.security.CryptoPrimitive>;
            _IN_KEYSTORE: int;
            _JAR_DISABLED_CHECK: security.util.DisabledAlgorithmConstraints;
            _JUZFA: jdk.internal.access.JavaUtilZipFileAccess;
            _LEGACY_CHECK: security.util.DisabledAlgorithmConstraints;
            _NONE: string;
            _NOT_ALIAS: int;
            _ONE_YEAR: long;
            _P11KEYSTORE: string;
            _SIGNED_BY_ALIAS: int;
            _SIG_PRIMITIVE_SET: java.util.Set<java.security.CryptoPrimitive>;
            _SIX_MONTHS: long;
            _SOME_ALIASES_NOT_FOUND: int;
            _VERSION: string;
            _collator: java.text.Collator;
            _expiredTimeForm: java.text.MessageFormat;
            _expiringTimeForm: java.text.MessageFormat;
            _extraAttrsDetected: boolean;
            _notYetTimeForm: java.text.MessageFormat;
            _rb: java.util.ResourceBundle;
            _signTimeForm: java.text.MessageFormat;
            _validityTimeForm: java.text.MessageFormat;
            new(): Main;
          }
          let Main: _Main$$static;
          interface _Main {
            _certsAndTSInfo(tab1: string, tab2: string, certs: java.util.List<java.security.cert.Certificate>, ts: java.security.Timestamp): string;
            _checkCertUsage(userCert: java.security.cert.X509Certificate, bad: boolean[]): void;
            _checkWeakSign(alg: string, primitiveSet: java.util.Set<java.security.CryptoPrimitive>, tsa: boolean, jcp: security.util.JarConstraintsParameters): void;
            _checkWeakSign(key: java.security.PrivateKey, jcp: security.util.JarConstraintsParameters): void;
            _displayMessagesAndResult(isSigning: boolean): void;
            _error(message: string): void;
            _error(message: string, e: java.lang.Throwable): void;
            _findTrustAnchor(chain: java.util.List<java.security.cert.X509Certificate>): java.security.cert.TrustAnchor;
            _getAliasInfo(alias: string): void;
            _getPass(prompt: string): char[];
            _getTsaCert(alias: string): java.security.cert.X509Certificate;
            _inKeyStore(signers: java.security.CodeSigner[]): int;
            _inKeyStoreForOneSigner(signer: java.security.CodeSigner): int;
            _loadKeyStore(keyStoreName: string, prompt: boolean): void;
            _parseArgs(args: string[]): string[];
            _printCert(isTsCert: boolean, tab: string, c: java.security.cert.Certificate, timestamp: java.util.Date, checkUsage: boolean, cpcp: security.provider.certpath.CertPathConstraintsParameters): string;
            _printTimestamp(tab: string, timestamp: java.security.Timestamp): string;
            run(args: string[]): void;
            _signJar(jarName: string, alias: string): void;
            _signatureRelated(name: string): boolean;
            _signerInfo(signer: java.security.CodeSigner, tab: string): string;
            _validateCertChain(variant: string, certs: java.util.List<java.security.cert.Certificate>, parameter: java.security.Timestamp): void;
            _verifyJar(jarName: string): void;
            _verifyWithWeak(alg: string, primitiveSet: java.util.Set<java.security.CryptoPrimitive>, tsa: boolean, jcp: security.util.JarConstraintsParameters, algParams: java.security.AlgorithmParameters): string;
            _verifyWithWeak(key: java.security.PublicKey, jcp: security.util.JarConstraintsParameters): string;
            _alias: string;
            _aliasNotInStore: boolean;
            _allAliasesFound: boolean;
            _altCertChain: string;
            _badExtendedKeyUsage: boolean;
            _badKeyUsage: boolean;
            _badNetscapeCertType: boolean;
            _cacheForInKS: java.util.Map<java.security.CodeSigner,int>;
            _cacheForSignerInfo: java.util.Map<java.security.CodeSigner,string>;
            _certChain: java.security.cert.X509Certificate[];
            _chainNotValidated: boolean;
            _chainNotValidatedReason: java.lang.Throwable;
            _ckaliases: java.util.List<string>;
            _debug: boolean;
            _digestalg: string;
            _disabledAlg: int;
            _disabledAlgFound: boolean;
            _expireDate: java.util.Date;
            _externalSF: boolean;
            _hasExpiredCert: boolean;
            _hasExpiredTsaCert: boolean;
            _hasExpiringCert: boolean;
            _hasExpiringTsaCert: boolean;
            _hasNonexistentEntries: boolean;
            _hasTimestampBlock: boolean;
            _hasUnsignedEntry: boolean;
            _jarfile: string;
            _keypass: char[];
            _keystore: string;
            _legacyAlg: int;
            _legacyDigestAlg: string;
            _legacySigAlg: string;
            _legacyTsaDigestAlg: string;
            _noTimestamp: boolean;
            _notSignedByAlias: boolean;
            _notYetValidCert: boolean;
            _nullStream: boolean;
            _pathlist: string;
            _pkixParameters: java.security.cert.PKIXBuilderParameters;
            _privateKey: java.security.PrivateKey;
            _protectedPath: boolean;
            _providerArgs: java.util.HashMap<string,string>;
            _providerClasses: java.util.List<string>;
            _providerName: string;
            _providers: java.util.List<string>;
            _revocationCheck: boolean;
            _showcerts: boolean;
            _sigalg: string;
            _sigfile: string;
            _signManifest: boolean;
            _signedjar: string;
            _signerSelfSigned: boolean;
            _store: java.security.KeyStore;
            _storeHash: java.util.Hashtable<java.security.cert.Certificate,string>;
            _storepass: char[];
            _storetype: string;
            _strict: boolean;
            _tSADigestAlg: string;
            _tSAPolicyID: string;
            _token: boolean;
            _trustedCerts: java.util.Set<java.security.cert.X509Certificate>;
            _tsaAlias: string;
            _tsaChainNotValidated: boolean;
            _tsaChainNotValidatedReason: java.lang.Throwable;
            _tsaExpireDate: java.util.Date;
            _tsaUrl: string;
            _verbose: string;
            _verify: boolean;
            _version: boolean;
            _weakPublicKey: java.security.PublicKey;
            _zipFile: java.util.zip.ZipFile;
          }
          interface Main extends CombineTypes<[_Main, java.lang.Object]> {}
          interface _Resources$$static extends ClassLike {
            _contents: any[][];
            new(): Resources;
          }
          let Resources: _Resources$$static;
          interface _Resources {
            getContents(): any[][];
          }
          interface Resources extends CombineTypes<[_Resources, java.util.ListResourceBundle]> {}
          interface _Resources_de$$static extends ClassLike {
            _contents: any[][];
            new(): Resources_de;
          }
          let Resources_de: _Resources_de$$static;
          interface _Resources_de {
            getContents(): any[][];
          }
          interface Resources_de extends CombineTypes<[_Resources_de, java.util.ListResourceBundle]> {}
          interface _Resources_ja$$static extends ClassLike {
            _contents: any[][];
            new(): Resources_ja;
          }
          let Resources_ja: _Resources_ja$$static;
          interface _Resources_ja {
            getContents(): any[][];
          }
          interface Resources_ja extends CombineTypes<[_Resources_ja, java.util.ListResourceBundle]> {}
          interface _Resources_zh_CN$$static extends ClassLike {
            _contents: any[][];
            new(): Resources_zh_CN;
          }
          let Resources_zh_CN: _Resources_zh_CN$$static;
          interface _Resources_zh_CN {
            getContents(): any[][];
          }
          interface Resources_zh_CN extends CombineTypes<[_Resources_zh_CN, java.util.ListResourceBundle]> {}
        }
      }
    }
    module tools {
      module jar {
        module resources {
          interface _jar$$static extends ClassLike {
            new(): jar;
          }
          let jar: _jar$$static;
          interface _jar {
            _getContents(): any[][];
          }
          interface jar extends CombineTypes<[_jar, java.util.ListResourceBundle]> {}
          interface _jar_de$$static extends ClassLike {
            new(): jar_de;
          }
          let jar_de: _jar_de$$static;
          interface _jar_de {
            _getContents(): any[][];
          }
          interface jar_de extends CombineTypes<[_jar_de, java.util.ListResourceBundle]> {}
          interface _jar_es$$static extends ClassLike {
            new(): jar_es;
          }
          let jar_es: _jar_es$$static;
          interface _jar_es {
            _getContents(): any[][];
          }
          interface jar_es extends CombineTypes<[_jar_es, java.util.ListResourceBundle]> {}
          interface _jar_fr$$static extends ClassLike {
            new(): jar_fr;
          }
          let jar_fr: _jar_fr$$static;
          interface _jar_fr {
            _getContents(): any[][];
          }
          interface jar_fr extends CombineTypes<[_jar_fr, java.util.ListResourceBundle]> {}
          interface _jar_it$$static extends ClassLike {
            new(): jar_it;
          }
          let jar_it: _jar_it$$static;
          interface _jar_it {
            _getContents(): any[][];
          }
          interface jar_it extends CombineTypes<[_jar_it, java.util.ListResourceBundle]> {}
          interface _jar_ja$$static extends ClassLike {
            new(): jar_ja;
          }
          let jar_ja: _jar_ja$$static;
          interface _jar_ja {
            _getContents(): any[][];
          }
          interface jar_ja extends CombineTypes<[_jar_ja, java.util.ListResourceBundle]> {}
          interface _jar_ko$$static extends ClassLike {
            new(): jar_ko;
          }
          let jar_ko: _jar_ko$$static;
          interface _jar_ko {
            _getContents(): any[][];
          }
          interface jar_ko extends CombineTypes<[_jar_ko, java.util.ListResourceBundle]> {}
          interface _jar_pt_BR$$static extends ClassLike {
            new(): jar_pt_BR;
          }
          let jar_pt_BR: _jar_pt_BR$$static;
          interface _jar_pt_BR {
            _getContents(): any[][];
          }
          interface jar_pt_BR extends CombineTypes<[_jar_pt_BR, java.util.ListResourceBundle]> {}
          interface _jar_sv$$static extends ClassLike {
            new(): jar_sv;
          }
          let jar_sv: _jar_sv$$static;
          interface _jar_sv {
            _getContents(): any[][];
          }
          interface jar_sv extends CombineTypes<[_jar_sv, java.util.ListResourceBundle]> {}
          interface _jar_zh_CN$$static extends ClassLike {
            new(): jar_zh_CN;
          }
          let jar_zh_CN: _jar_zh_CN$$static;
          interface _jar_zh_CN {
            _getContents(): any[][];
          }
          interface jar_zh_CN extends CombineTypes<[_jar_zh_CN, java.util.ListResourceBundle]> {}
          interface _jar_zh_HK$$static extends ClassLike {
            new(): jar_zh_HK;
          }
          let jar_zh_HK: _jar_zh_HK$$static;
          interface _jar_zh_HK {
            _getContents(): any[][];
          }
          interface jar_zh_HK extends CombineTypes<[_jar_zh_HK, java.util.ListResourceBundle]> {}
          interface _jar_zh_TW$$static extends ClassLike {
            new(): jar_zh_TW;
          }
          let jar_zh_TW: _jar_zh_TW$$static;
          interface _jar_zh_TW {
            _getContents(): any[][];
          }
          interface jar_zh_TW extends CombineTypes<[_jar_zh_TW, java.util.ListResourceBundle]> {}
        }
        interface _FingerPrint$$static extends ClassLike {
          _getClassAttributes(bytes: byte[]): FingerPrint$ClassAttributes;
          _MD: java.security.MessageDigest;
          _cafeBabe: byte[];
          new(basename: string, entryName: string, mrversion: int, bytes: byte[]): FingerPrint;
        }
        let FingerPrint: _FingerPrint$$static;
        interface _FingerPrint {
          basename(): string;
          className(): string;
          entryName(): string;
          _isCafeBabe(bytes: byte[]): boolean;
          isClass(): boolean;
          isCompatibleVersion(that: FingerPrint): boolean;
          _isEqual(sha1_1: byte[], sha1_2: byte[]): boolean;
          isIdentical(that: FingerPrint): boolean;
          isNestedClass(): boolean;
          isPublicClass(): boolean;
          isSameAPI(that: FingerPrint): boolean;
          mrversion(): int;
          outerClassName(): string;
          _sha1(entry: byte[]): byte[];
          _sha1(entry: byte[], offset: int): byte[];
          _attrs: FingerPrint$ClassAttributes;
          _basename: string;
          _entryName: string;
          _isClassEntry: boolean;
          _mrversion: int;
          _sha1: byte[];
        }
        interface FingerPrint extends CombineTypes<[_FingerPrint, java.lang.Object]> {}
        interface _FingerPrint$ClassAttributes$$static extends ClassLike {
          _isPublic(access: jdk.internal.classfile.AccessFlags): boolean;
          new(access: jdk.internal.classfile.AccessFlags, name: string, superName: string, majorVersion: int): FingerPrint$ClassAttributes;
        }
        let FingerPrint$ClassAttributes: _FingerPrint$ClassAttributes$$static;
        interface _FingerPrint$ClassAttributes {
          accept(cle: jdk.internal.classfile.ClassElement): void;
          accept(a0: any): void;
          equals(that: any): boolean;
          hashCode(): int;
          _access: int;
          _fields: java.util.Set<FingerPrint$Field>;
          _majorVersion: int;
          _maybeNestedClass: boolean;
          _methods: java.util.Set<FingerPrint$Method>;
          _name: string;
          _outerClassName: string;
          _publicClass: boolean;
          _superName: string;
        }
        interface FingerPrint$ClassAttributes extends CombineTypes<[_FingerPrint$ClassAttributes, java.lang.Object, java.util.function.Consumer<jdk.internal.classfile.ClassElement>]> {}
        interface _FingerPrint$Field$$static extends ClassLike {
          _new(access: int, name: string, desc: string): FingerPrint$Field;
        }
        let FingerPrint$Field: _FingerPrint$Field$$static;
        interface _FingerPrint$Field {
          equals(that: any): boolean;
          hashCode(): int;
          _access: int;
          _desc: string;
          _name: string;
        }
        interface FingerPrint$Field extends CombineTypes<[_FingerPrint$Field, java.lang.Object]> {}
        interface _FingerPrint$Method$$static extends ClassLike {
          _new(access: int, name: string, desc: string, exceptions: java.util.Set<string>): FingerPrint$Method;
        }
        let FingerPrint$Method: _FingerPrint$Method$$static;
        interface _FingerPrint$Method {
          equals(that: any): boolean;
          hashCode(): int;
          _access: int;
          _desc: string;
          _exceptions: java.util.Set<string>;
          _name: string;
        }
        interface FingerPrint$Method extends CombineTypes<[_FingerPrint$Method, java.lang.Object]> {}
        interface _GNUStyleOptions$$static extends ClassLike {
          _getOption(name: string): GNUStyleOptions$Option;
          _parseOptions(jartool: Main, args: string[]): int;
          _printCompatHelp(out: java.io.PrintWriter): void;
          _printHelp(out: java.io.PrintWriter): void;
          _printHelp0(out: java.io.PrintWriter, printExtra: boolean): void;
          _printHelpExtra(out: java.io.PrintWriter): void;
          _printUsageTryHelp(out: java.io.PrintWriter): void;
          _printVersion(out: java.io.PrintWriter): void;
          _DATE_MAX: java.time.ZonedDateTime;
          _DATE_MIN: java.time.ZonedDateTime;
          _recognizedOptions: GNUStyleOptions$Option[];
          _new(): GNUStyleOptions;
        }
        let GNUStyleOptions: _GNUStyleOptions$$static;
        interface _GNUStyleOptions {
        }
        interface GNUStyleOptions extends CombineTypes<[_GNUStyleOptions, java.lang.Object]> {}
        interface _GNUStyleOptions$BadArgs$$static extends ClassLike {
          _serialVersionUID: long;
          _new(key: string, arg: string): GNUStyleOptions$BadArgs;
          _new(key: string): GNUStyleOptions$BadArgs;
        }
        let GNUStyleOptions$BadArgs: _GNUStyleOptions$BadArgs$$static;
        interface _GNUStyleOptions$BadArgs {
          _showUsage(b: boolean): GNUStyleOptions$BadArgs;
          _showUsage: boolean;
        }
        interface GNUStyleOptions$BadArgs extends CombineTypes<[_GNUStyleOptions$BadArgs, java.lang.Exception]> {}
        interface _GNUStyleOptions$Option$$static extends ClassLike {
          _new(hasArg: boolean, type: GNUStyleOptions$OptionType, aliases: string[]): GNUStyleOptions$Option;
          _new(hasArg: boolean, type: GNUStyleOptions$OptionType, ...aliases: string[]): GNUStyleOptions$Option;
          _new(hasArg: boolean, argIsOptional: boolean, type: GNUStyleOptions$OptionType, aliases: string[]): GNUStyleOptions$Option;
          _new(hasArg: boolean, argIsOptional: boolean, type: GNUStyleOptions$OptionType, ...aliases: string[]): GNUStyleOptions$Option;
        }
        let GNUStyleOptions$Option: _GNUStyleOptions$Option$$static;
        interface _GNUStyleOptions$Option {
          _isExtra(): boolean;
          _isHidden(): boolean;
          _matches(opt: string): boolean;
          _process(a0: Main, a1: string, a2: string): void;
(a0: Main, a1: string, a2: string): void;
          _aliases: string[];
          _argIsOptional: boolean;
          _hasArg: boolean;
          _type: GNUStyleOptions$OptionType;
        }
        interface GNUStyleOptions$Option extends CombineTypes<[_GNUStyleOptions$Option, java.lang.Object]> {}
        interface _GNUStyleOptions$OptionType$$static extends ClassLike {
          valueOf(name: string): GNUStyleOptions$OptionType;
          values(): GNUStyleOptions$OptionType[];
          readonly ANY: GNUStyleOptions$OptionType;
          readonly CREATE: GNUStyleOptions$OptionType;
          readonly CREATE_UPDATE: GNUStyleOptions$OptionType;
          readonly CREATE_UPDATE_INDEX: GNUStyleOptions$OptionType;
          readonly EXTRACT: GNUStyleOptions$OptionType;
          readonly MAIN_OPERATION: GNUStyleOptions$OptionType;
          readonly OTHER: GNUStyleOptions$OptionType;
        }
        let GNUStyleOptions$OptionType: _GNUStyleOptions$OptionType$$static;
        interface _GNUStyleOptions$OptionType {
          _name: string;
        }
        interface GNUStyleOptions$OptionType extends CombineTypes<[_GNUStyleOptions$OptionType]> {}
        interface _JarException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): JarException;
          new(s: string): JarException;
        }
        let JarException: _JarException$$static;
        interface _JarException {
        }
        interface JarException extends CombineTypes<[_JarException, java.io.IOException]> {}
        interface _JarIndex$$static extends ClassLike {
          _INDEX_NAME: string;
          _metaInfFilenames: boolean;
          new(files: string[]): JarIndex;
        }
        let JarIndex: _JarIndex$$static;
        interface _JarIndex {
          _add(fileName: string, jarName: string): void;
          _addMapping(jarItem: string, jarName: string): void;
          _addToList(key: string, value: string, t: java.util.HashMap<string,java.util.List<string>>): void;
          _parseJars(files: string[]): void;
          write(out: java.io.OutputStream): void;
          _indexMap: java.util.HashMap<string,java.util.List<string>>;
          _jarFiles: string[];
          _jarMap: java.util.HashMap<string,java.util.List<string>>;
        }
        interface JarIndex extends CombineTypes<[_JarIndex, java.lang.Object]> {}
        interface _JarToolProvider$$static extends ClassLike {
          new(): JarToolProvider;
        }
        let JarToolProvider: _JarToolProvider$$static;
        interface _JarToolProvider {
          description(): java.util.Optional<string>;
          name(): string;
          run(out: java.io.PrintWriter, err: java.io.PrintWriter, args: string[]): int;
          run(out: java.io.PrintWriter, err: java.io.PrintWriter, ...args: string[]): int;
        }
        interface JarToolProvider extends CombineTypes<[_JarToolProvider, java.lang.Object, java.util.spi.ToolProvider]> {}
        interface _Main$$static extends ClassLike {
          _createTempFileInSameDirectoryAs(file: java.io.File): java.io.File;
          _formatMsg(key: string, arg: string): string;
          _formatMsg2(key: string, arg: string, arg1: string): string;
          _getMsg(key: string): string;
          _intVersionFromEntry(entry: Main$ModuleInfoEntry): int;
          _isModuleInfoEntry(name: string): boolean;
          _isWinDriveLetter(c: char): boolean;
          main(args: string[]): void;
          _toBinaryName(classname: string): string;
          _toHex(ba: byte[]): string;
          _toLowerCaseString<T>(set: java.util.Collection<T>): string;
          _toPackageName(path: string): string;
          _toString<T>(set: java.util.Collection<T>): string;
          _toVersionedName(name: string, version: int): string;
          _versionFromEntryName(name: string): string;
          _BASE_VERSION: int;
          _ENTRYNAME_COMPARATOR: java.util.Comparator<string>;
          _ENTRY_COMPARATOR: java.util.Comparator<java.util.zip.ZipEntry>;
          _MANIFEST_DIR: string;
          _MODULE_INFO: string;
          _VERSION: string;
          _VERSIONS_DIR: string;
          _VERSIONS_DIR_LENGTH: int;
          _rsrc: java.util.ResourceBundle;
          _useExtractionTime: boolean;
          new(out: java.io.PrintStream, err: java.io.PrintStream, program: string): Main;
          new(out: java.io.PrintWriter, err: java.io.PrintWriter, program: string): Main;
        }
        let Main: _Main$$static;
        interface _Main {
          _addCreatedBy(m: java.util.jar.Manifest): void;
          _addExtendedModuleAttributes(moduleInfos: java.util.Map<string,Main$ModuleInfoEntry>, packages: java.util.Set<string>): void;
          _addFile(zos: java.util.zip.ZipOutputStream, entry: Main$Entry): void;
          _addIndex(index: JarIndex, zos: java.util.zip.ZipOutputStream): void;
          _addMainClass(m: java.util.jar.Manifest, mainApp: string): void;
          _addMultiRelease(m: java.util.jar.Manifest): void;
          _addPackageIfNamed(packages: java.util.Set<string>, name: string): void;
          _addVersion(m: java.util.jar.Manifest): void;
          _checkModuleInfo(moduleInfoEntry: Main$ModuleInfoEntry, entries: java.util.Set<string>): boolean;
          _copy(from: java.io.InputStream, to: java.io.OutputStream): void;
          _copy(from: java.io.File, to: java.io.OutputStream): void;
          _copy(from: java.io.InputStream, to: java.io.File): void;
          _crc32File(e: java.util.zip.ZipEntry, f: java.io.File): void;
          _crc32Manifest(e: java.util.zip.ZipEntry, m: java.util.jar.Manifest): void;
          _crc32ModuleInfo(e: java.util.zip.ZipEntry, bytes: byte[]): void;
          _create(out: java.io.OutputStream, manifest: java.util.jar.Manifest): void;
          _createTemporaryFile(tmpbase: string, suffix: string): java.io.File;
          _describeModule(zipFile: java.util.zip.ZipFile): boolean;
          _describeModule(entryInputStream: java.io.InputStream, uriString: string): void;
          _describeModule(md: java.lang.module.ModuleDescriptor, target: jdk.internal.module.ModuleTarget, hashes: jdk.internal.module.ModuleHashes, uriString: string): void;
          _describeModuleFromEntries(infos: Main$ModuleInfoEntry[]): boolean;
          _describeModuleFromStream(fis: java.io.FileInputStream): boolean;
          _dumpIndex(rootjar: string, index: JarIndex): void;
          _equalsIgnoreCase(s: string, upper: string): boolean;
          _error(s: string): void;
          _expand(): void;
          _expand(dir: java.io.File, files: string[], cpaths: java.util.Set<string>, version: int): void;
          _extendedInfoBytes(md: java.lang.module.ModuleDescriptor, miBytes: byte[], packages: java.util.Set<string>): byte[];
          _extract(_in: java.io.InputStream, files: string[]): void;
          _extract(fname: string, files: string[]): void;
          _extractFile(is: java.io.InputStream, e: java.util.zip.ZipEntry): java.util.zip.ZipEntry;
          _fatalError(e: java.lang.Exception): void;
          _fatalError(s: string): void;
          _filesMapToFiles(filesMap: java.util.Map<int,string[]>): string[];
          _filesToEntryNames(fileEntries: java.util.Map$Entry<int,string[]>): java.util.stream.Stream<string>;
          _genIndex(rootjar: string, files: string[]): void;
          _getJarPath(jar: string): java.util.List<string>;
          _isAmbiguousMainClass(m: java.util.jar.Manifest): boolean;
          _lessThanEqualReleaseValue(entry: Main$ModuleInfoEntry): boolean;
          _list(_in: java.io.InputStream, files: string[]): void;
          _list(fname: string, files: string[]): void;
          _newDirSet(): java.util.Set<java.util.zip.ZipEntry>;
          _output(s: string): void;
          _parseArgs(args: string[]): boolean;
          _printEntry(e: java.util.zip.ZipEntry, files: string[]): void;
          _printEntry(e: java.util.zip.ZipEntry): void;
          _replaceFSC(filesMap: java.util.Map<int,string[]>): void;
          run(args: string[]): boolean;
          _safeName(name: string): string;
          _setZipEntryTime(e: java.util.zip.ZipEntry): void;
          _setZipEntryTime(e: java.util.zip.ZipEntry, origTime: long): void;
          _toEntryName(name: string, cpaths: java.util.Set<string>, isDir: boolean): string;
          _toUpperCaseASCII(c: char): char;
          _update(_in: java.io.InputStream, out: java.io.OutputStream, newManifest: java.io.InputStream, moduleInfos: java.util.Map<string,Main$ModuleInfoEntry>, jarIndex: JarIndex): boolean;
          _updateLastModifiedTime(zes: java.util.Set<java.util.zip.ZipEntry>): void;
          _updateManifest(m: java.util.jar.Manifest, zos: java.util.zip.ZipOutputStream): boolean;
          _updateModuleInfo(moduleInfos: java.util.Map<string,Main$ModuleInfoEntry>, zos: java.util.zip.ZipOutputStream): void;
          _usageError(s: string): void;
          _validateAndClose(tmpfile: java.io.File): void;
          _validateJar(file: java.io.File): boolean;
          _warn(s: string): void;
          _Mflag: boolean;
          _cflag: boolean;
          _copyBuf: byte[];
          _date: java.time.LocalDateTime;
          _dflag: boolean;
          _ename: string;
          _entries: java.util.Set<Main$Entry>;
          _entryMap: java.util.Map<string,Main$Entry>;
          _err: java.io.PrintWriter;
          _filesMap: java.util.Map<int,string[]>;
          _flag0: boolean;
          _fname: string;
          _iflag: boolean;
          _info: java.util.function.Consumer<java.io.PrintWriter>;
          _isMultiRelease: boolean;
          _jarPaths: java.util.HashSet<string>;
          _kflag: boolean;
          _mname: string;
          _moduleFinder: java.lang.module.ModuleFinder;
          _moduleInfos: java.util.Map<string,Main$ModuleInfoEntry>;
          _moduleResolution: jdk.internal.module.ModuleResolution;
          _moduleVersion: java.lang.module.ModuleDescriptor$Version;
          _modulesToHash: java.util.regex.Pattern;
          _ok: boolean;
          _out: java.io.PrintWriter;
          _pathsMap: java.util.Map<int,java.util.Set<string>>;
          _pflag: boolean;
          _program: string;
          _releaseValue: int;
          _rootjar: string;
          _suppressDeprecateMsg: boolean;
          _tflag: boolean;
          _uflag: boolean;
          _validate: boolean;
          _vflag: boolean;
          _xflag: boolean;
          _zname: string;
        }
        interface Main extends CombineTypes<[_Main, java.lang.Object]> {}
        interface _Main$CRC32OutputStream$$static extends ClassLike {
          _new(): Main$CRC32OutputStream;
        }
        let Main$CRC32OutputStream: _Main$CRC32OutputStream$$static;
        interface _Main$CRC32OutputStream {
          updateEntry(e: java.util.zip.ZipEntry): void;
          write(r: int): void;
          write(b: byte[], off: int, len: int): void;
          _crc: java.util.zip.CRC32;
          _n: long;
        }
        interface Main$CRC32OutputStream extends CombineTypes<[_Main$CRC32OutputStream, java.io.OutputStream]> {}
        interface _Main$Entry$$static extends ClassLike {
          _new(file: java.io.File, name: string, isDir: boolean): Main$Entry;
        }
        let Main$Entry: _Main$Entry$$static;
        interface _Main$Entry {
          equals(o: any): boolean;
          hashCode(): int;
          _file: java.io.File;
          _isDir: boolean;
          _name: string;
        }
        interface Main$Entry extends CombineTypes<[_Main$Entry, java.lang.Object]> {}
        interface _Main$Hasher$$static extends ClassLike {
          _new(a0: Main, descriptor: java.lang.module.ModuleDescriptor, fname: string): Main$Hasher;
        }
        let Main$Hasher: _Main$Hasher$$static;
        interface _Main$Hasher {
          _computeHashes(name: string): jdk.internal.module.ModuleHashes;
          _finder: java.lang.module.ModuleFinder;
          _hashesBuilder: jdk.internal.module.ModuleHashesBuilder;
          _modules: java.util.Set<string>;
          _this$0: Main;
        }
        interface Main$Hasher extends CombineTypes<[_Main$Hasher, java.lang.Object]> {}
        interface _Main$ModuleInfoEntry$$static extends ClassLike {
        }
        let Main$ModuleInfoEntry: _Main$ModuleInfoEntry$$static;
        interface _Main$ModuleInfoEntry {
          bytes(): java.io.InputStream;
          getLastModifiedTime(): java.nio.file.attribute.FileTime;
          name(): string;
          readAllBytes(): byte[];
          uriString(): java.util.Optional<string>;
        }
        interface Main$ModuleInfoEntry extends CombineTypes<[_Main$ModuleInfoEntry, java.lang.Object]> {}
        interface _Main$StreamedModuleInfoEntry$$static extends ClassLike {
          _new(name: string, bytes: byte[], lastModifiedTime: java.nio.file.attribute.FileTime): Main$StreamedModuleInfoEntry;
        }
        let Main$StreamedModuleInfoEntry: _Main$StreamedModuleInfoEntry$$static;
        interface _Main$StreamedModuleInfoEntry {
          bytes(): java.io.InputStream;
          getLastModifiedTime(): java.nio.file.attribute.FileTime;
          name(): string;
          readAllBytes(): byte[];
          uriString(): java.util.Optional<string>;
          _bytes: byte[];
          _lastModifiedTime: java.nio.file.attribute.FileTime;
          _name: string;
        }
        interface Main$StreamedModuleInfoEntry extends CombineTypes<[_Main$StreamedModuleInfoEntry, sun.tools.jar.Main$ModuleInfoEntry, java.lang.Object]> {}
        interface _Main$ZipFileModuleInfoEntry$$static extends ClassLike {
          _new(zipFile: java.util.zip.ZipFile, entry: java.util.zip.ZipEntry): Main$ZipFileModuleInfoEntry;
        }
        let Main$ZipFileModuleInfoEntry: _Main$ZipFileModuleInfoEntry$$static;
        interface _Main$ZipFileModuleInfoEntry {
          bytes(): java.io.InputStream;
          getLastModifiedTime(): java.nio.file.attribute.FileTime;
          name(): string;
          uriString(): java.util.Optional<string>;
          _entry: java.util.zip.ZipEntry;
          _zipFile: java.util.zip.ZipFile;
        }
        interface Main$ZipFileModuleInfoEntry extends CombineTypes<[_Main$ZipFileModuleInfoEntry, sun.tools.jar.Main$ModuleInfoEntry, java.lang.Object]> {}
        interface _Validator$$static extends ClassLike {
          _className(entryName: string): string;
          _isPlatformModule(name: string): boolean;
          _validate(main: Main, zf: java.util.zip.ZipFile): boolean;
        }
        let Validator: _Validator$$static;
        interface _Validator {
          _checkClassName(fp: FingerPrint): boolean;
          _checkModuleDescriptor(miName: string): void;
          _checkNestedClass(fp: FingerPrint, outerClasses: java.util.Map<string,FingerPrint>): boolean;
          _error(msg: string): void;
          _errorAndInvalid(msg: string): void;
          _getFingerPrint(ze: java.util.zip.ZipEntry): FingerPrint;
          _isConcealed(className: string): boolean;
          _sameNameFingerPrint(fp1: FingerPrint, fp2: FingerPrint): FingerPrint;
          _validate(): boolean;
          validateBase(fps: java.util.Map<string,FingerPrint>): void;
          validateVersioned(fps: java.util.Map<string,FingerPrint>): void;
          _warn(msg: string): void;
          _classes: java.util.Map<string,FingerPrint>;
          _concealedPkgs: java.util.Set<string>;
          _isValid: boolean;
          _main: Main;
          _md: java.lang.module.ModuleDescriptor;
          _mdName: string;
          _zf: java.util.zip.ZipFile;
        }
        interface Validator extends CombineTypes<[_Validator, java.lang.Object]> {}
        interface _Validator$InvalidJarException$$static extends ClassLike {
          _serialVersionUID: long;
          _new(msg: string): Validator$InvalidJarException;
        }
        let Validator$InvalidJarException: _Validator$InvalidJarException$$static;
        interface _Validator$InvalidJarException {
        }
        interface Validator$InvalidJarException extends CombineTypes<[_Validator$InvalidJarException, java.lang.RuntimeException]> {}
      }
    }
  }
}
