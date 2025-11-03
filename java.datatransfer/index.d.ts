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
  module java {
    module awt {
      module datatransfer {
        interface _Clipboard$$static extends ClassLike {
          new(name: string): Clipboard;
        }
        let Clipboard: _Clipboard$$static;
        interface _Clipboard {
          addFlavorListener(listener: FlavorListener): void;
          _fireFlavorsChanged(): void;
          _getAvailableDataFlavorSet(): java.util.Set<DataFlavor>;
          getAvailableDataFlavors(): DataFlavor[];
          getContents(requestor: any): Transferable;
          getData(flavor: DataFlavor): any;
          getFlavorListeners(): FlavorListener[];
          getName(): string;
          isDataFlavorAvailable(flavor: DataFlavor): boolean;
          removeFlavorListener(listener: FlavorListener): void;
          setContents(contents: Transferable, owner: ClipboardOwner): void;
          _contents: Transferable;
          _currentDataFlavors: java.util.Set<DataFlavor>;
          _flavorListeners: java.util.Set<FlavorListener>;
          _name: string;
          _owner: ClipboardOwner;
        }
        interface Clipboard extends CombineTypes<[_Clipboard, java.lang.Object]> {}
        interface _ClipboardOwner$$static extends ClassLike {
        }
        let ClipboardOwner: _ClipboardOwner$$static;
        interface _ClipboardOwner {
          lostOwnership(a0: Clipboard, a1: Transferable): void;
(a0: Clipboard, a1: Transferable): void;
        }
        interface ClipboardOwner extends CombineTypes<[_ClipboardOwner, java.lang.Object]> {}
        interface _DataFlavor$$static extends ClassLike {
          _createConstant(rc: java.lang.Class<any>, prn: string): DataFlavor;
          _createConstant(mt: string, prn: string): DataFlavor;
          getTextPlainUnicodeFlavor(): DataFlavor;
          _initHtml(htmlFlavorType: string): DataFlavor;
          selectBestTextFlavor(availableFlavors: DataFlavor[]): DataFlavor;
          _tryToLoadClass(className: string, fallback: java.lang.ClassLoader): java.lang.Class<any>;
          readonly allHtmlFlavor: DataFlavor;
          readonly fragmentHtmlFlavor: DataFlavor;
          readonly imageFlavor: DataFlavor;
          readonly javaFileListFlavor: DataFlavor;
          readonly javaJVMLocalObjectMimeType: string;
          readonly javaRemoteObjectMimeType: string;
          readonly javaSerializedObjectMimeType: string;
          readonly plainTextFlavor: DataFlavor;
          readonly selectionHtmlFlavor: DataFlavor;
          _serialVersionUID: long;
          readonly stringFlavor: DataFlavor;
          new(): DataFlavor;
          new(representationClass: java.lang.Class<any>, humanPresentableName: string): DataFlavor;
          new(mimeType: string, humanPresentableName: string): DataFlavor;
          new(mimeType: string, humanPresentableName: string, classLoader: java.lang.ClassLoader): DataFlavor;
          new(mimeType: string): DataFlavor;
        }
        let DataFlavor: _DataFlavor$$static;
        interface _DataFlavor {
          clone(): any;
          equals(o: any): boolean;
          equals(that: DataFlavor): boolean;
          equals(s: string): boolean;
          getDefaultRepresentationClass(): java.lang.Class<any>;
          getDefaultRepresentationClassAsString(): string;
          getHumanPresentableName(): string;
          getMimeType(): string;
          getParameter(paramName: string): string;
          getPrimaryType(): string;
          getReaderForText(transferable: Transferable): java.io.Reader;
          getRepresentationClass(): java.lang.Class<any>;
          getSubType(): string;
          hashCode(): int;
          _initialize(mimeType: string, humanPresentableName: string, classLoader: java.lang.ClassLoader): void;
          isFlavorJavaFileListType(): boolean;
          isFlavorRemoteObjectType(): boolean;
          isFlavorSerializedObjectType(): boolean;
          isFlavorTextType(): boolean;
          isMimeTypeEqual(mimeType: string): boolean;
          isMimeTypeEqual(dataFlavor: DataFlavor): boolean;
          _isMimeTypeEqual(mtype: MimeType): boolean;
          isMimeTypeSerializedObject(): boolean;
          isRepresentationClassByteBuffer(): boolean;
          isRepresentationClassCharBuffer(): boolean;
          isRepresentationClassInputStream(): boolean;
          isRepresentationClassReader(): boolean;
          isRepresentationClassRemote(): boolean;
          isRepresentationClassSerializable(): boolean;
          _isStandardTextRepresentationClass(): boolean;
          match(that: DataFlavor): boolean;
          _normalizeMimeType(mimeType: string): string;
          _normalizeMimeTypeParameter(parameterName: string, parameterValue: string): string;
          _paramString(): string;
          readExternal(is: java.io.ObjectInput): void;
          setHumanPresentableName(humanPresentableName: string): void;
          toString(): string;
          writeExternal(os: java.io.ObjectOutput): void;
          _atom: int;
          _humanPresentableName: string;
          _mimeType: MimeType;
          _representationClass: java.lang.Class<any>;
        }
        interface DataFlavor extends CombineTypes<[_DataFlavor, java.lang.Cloneable, java.io.Externalizable, java.lang.Object]> {}
        interface _FlavorEvent$$static extends ClassLike {
          _serialVersionUID: long;
          new(source: Clipboard): FlavorEvent;
        }
        let FlavorEvent: _FlavorEvent$$static;
        interface _FlavorEvent {
        }
        interface FlavorEvent extends CombineTypes<[_FlavorEvent, java.util.EventObject]> {}
        interface _FlavorListener$$static extends ClassLike {
        }
        let FlavorListener: _FlavorListener$$static;
        interface _FlavorListener {
          flavorsChanged(a0: FlavorEvent): void;
(a0: FlavorEvent): void;
        }
        interface FlavorListener extends CombineTypes<[_FlavorListener, java.util.EventListener, java.lang.Object]> {}
        interface _FlavorMap$$static extends ClassLike {
        }
        let FlavorMap: _FlavorMap$$static;
        interface _FlavorMap {
          getFlavorsForNatives(a0: string[]): java.util.Map<string,DataFlavor>;
          getNativesForFlavors(a0: DataFlavor[]): java.util.Map<DataFlavor,string>;
        }
        interface FlavorMap extends CombineTypes<[_FlavorMap, java.lang.Object]> {}
        interface _FlavorTable$$static extends ClassLike {
        }
        let FlavorTable: _FlavorTable$$static;
        interface _FlavorTable {
          getFlavorsForNative(a0: string): java.util.List<DataFlavor>;
          getNativesForFlavor(a0: DataFlavor): java.util.List<string>;
        }
        interface FlavorTable extends CombineTypes<[_FlavorTable, java.awt.datatransfer.FlavorMap, java.lang.Object]> {}
        interface _MimeType$$static extends ClassLike {
          _isTokenChar(c: char): boolean;
          _TSPECIALS: string;
          _serialVersionUID: long;
          new(): MimeType;
          new(rawdata: string): MimeType;
          new(primary: string, sub: string): MimeType;
          new(primary: string, sub: string, mtpl: MimeTypeParameterList): MimeType;
        }
        let MimeType: _MimeType$$static;
        interface _MimeType {
          clone(): any;
          equals(thatObject: any): boolean;
          getBaseType(): string;
          getParameter(name: string): string;
          getParameters(): MimeTypeParameterList;
          getPrimaryType(): string;
          getSubType(): string;
          hashCode(): int;
          _isValidToken(s: string): boolean;
          match(type: MimeType): boolean;
          match(rawdata: string): boolean;
          _parse(rawdata: string): void;
          readExternal(_in: java.io.ObjectInput): void;
          removeParameter(name: string): void;
          setParameter(name: string, value: string): void;
          toString(): string;
          writeExternal(out: java.io.ObjectOutput): void;
          _parameters: MimeTypeParameterList;
          _primaryType: string;
          _subType: string;
        }
        interface MimeType extends CombineTypes<[_MimeType, java.lang.Cloneable, java.io.Externalizable, java.lang.Object]> {}
        interface _MimeTypeParameterList$$static extends ClassLike {
          _isTokenChar(c: char): boolean;
          _quote(value: string): string;
          _skipWhiteSpace(rawdata: string, i: int): int;
          _unquote(value: string): string;
          _TSPECIALS: string;
          new(): MimeTypeParameterList;
          new(rawdata: string): MimeTypeParameterList;
        }
        let MimeTypeParameterList: _MimeTypeParameterList$$static;
        interface _MimeTypeParameterList {
          clone(): any;
          equals(thatObject: any): boolean;
          get(name: string): string;
          getNames(): java.util.Enumeration<string>;
          hashCode(): int;
          isEmpty(): boolean;
          _parse(rawdata: string): void;
          remove(name: string): void;
          set(name: string, value: string): void;
          size(): int;
          toString(): string;
          _parameters: java.util.Hashtable<string,string>;
        }
        interface MimeTypeParameterList extends CombineTypes<[_MimeTypeParameterList, java.lang.Cloneable, java.lang.Object]> {}
        interface _MimeTypeParseException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): MimeTypeParseException;
          new(s: string): MimeTypeParseException;
        }
        let MimeTypeParseException: _MimeTypeParseException$$static;
        interface _MimeTypeParseException {
        }
        interface MimeTypeParseException extends CombineTypes<[_MimeTypeParseException, java.lang.Exception]> {}
        interface _StringSelection$$static extends ClassLike {
          _PLAIN_TEXT: int;
          _STRING: int;
          _flavors: DataFlavor[];
          new(data: string): StringSelection;
        }
        let StringSelection: _StringSelection$$static;
        interface _StringSelection {
          getTransferData(flavor: DataFlavor): any;
          getTransferDataFlavors(): DataFlavor[];
          isDataFlavorSupported(flavor: DataFlavor): boolean;
          lostOwnership(clipboard: Clipboard, contents: Transferable): void;
          _data: string;
        }
        interface StringSelection extends CombineTypes<[_StringSelection, java.awt.datatransfer.ClipboardOwner, java.awt.datatransfer.Transferable, java.lang.Object]> {}
        interface _SystemFlavorMap$$static extends ClassLike {
          _convertMimeTypeToDataFlavors(baseType: string): java.util.Set<DataFlavor>;
          decodeDataFlavor(nat: string): DataFlavor;
          decodeJavaMIMEType(nat: string): string;
          encodeDataFlavor(flav: DataFlavor): string;
          encodeJavaMIMEType(mimeType: string): string;
          getDefaultFlavorMap(): FlavorMap;
          _handleHtmlMimeTypes(baseType: string, mimeType: string): java.util.LinkedHashSet<string>;
          isJavaMIMEType(str: string): boolean;
          _loadConvert(theString: string): string;
          _ENCODED_TEXT_CLASSES: string[];
          _FLAVOR_MAP_KEY: any;
          _HTML_TEXT_BASE_TYPE: string;
          _JavaMIME: string;
          _TEXT_PLAIN_BASE_TYPE: string;
          _UNICODE_TEXT_CLASSES: string[];
          _htmlDocumentTypes: string[];
        }
        let SystemFlavorMap: _SystemFlavorMap$$static;
        interface _SystemFlavorMap {
          addFlavorForUnencodedNative(nat: string, flav: DataFlavor): void;
          addUnencodedNativeForFlavor(flav: DataFlavor, nat: string): void;
          _flavorToNativeLookup(flav: DataFlavor, synthesize: boolean): java.util.LinkedHashSet<string>;
          _getFlavorToNative(): java.util.Map<DataFlavor,java.util.LinkedHashSet<string>>;
          getFlavorsForNative(nat: string): java.util.List<DataFlavor>;
          getFlavorsForNatives(natives: string[]): java.util.Map<string,DataFlavor>;
          _getNativeToFlavor(): java.util.Map<string,java.util.LinkedHashSet<DataFlavor>>;
          getNativesForFlavor(flav: DataFlavor): java.util.List<string>;
          getNativesForFlavors(flavors: DataFlavor[]): java.util.Map<DataFlavor,string>;
          _getTextTypeToNative(): java.util.Map<string,java.util.LinkedHashSet<string>>;
          _initSystemFlavorMap(): void;
          _nativeToFlavorLookup(nat: string): java.util.LinkedHashSet<DataFlavor>;
          setFlavorsForNative(nat: string, flavors: DataFlavor[]): void;
          setNativesForFlavor(flav: DataFlavor, natives: string[]): void;
          _store<H, L>(hashed: H, listed: L, map: java.util.Map<H,java.util.LinkedHashSet<L>>): void;
          _disabledMappingGenerationKeys: java.util.Set<any>;
          _flavorToNative: java.util.Map<DataFlavor,java.util.LinkedHashSet<string>>;
          _flavorsForNativeCache: SystemFlavorMap$SoftCache<string,DataFlavor>;
          _isMapInitialized: boolean;
          _nativeToFlavor: java.util.Map<string,java.util.LinkedHashSet<DataFlavor>>;
          _nativesForFlavorCache: SystemFlavorMap$SoftCache<DataFlavor,string>;
          _textTypeToNative: java.util.Map<string,java.util.LinkedHashSet<string>>;
        }
        interface SystemFlavorMap extends CombineTypes<[_SystemFlavorMap, java.awt.datatransfer.FlavorTable, java.awt.datatransfer.FlavorMap, java.lang.Object]> {}
        interface _SystemFlavorMap$SoftCache$$static<K,V> extends ClassLike {
        }
        let SystemFlavorMap$SoftCache: _SystemFlavorMap$SoftCache$$static<K,V>;
        interface _SystemFlavorMap$SoftCache<K,V> {
          check(key: K): java.util.LinkedHashSet<V>;
          put(key: K, value: java.util.LinkedHashSet<V>): void;
          remove(key: K): void;
          _cache: java.util.Map<K,java.lang.ref.SoftReference<java.util.LinkedHashSet<V>>>;
        }
        interface SystemFlavorMap$SoftCache<K,V> extends CombineTypes<[_SystemFlavorMap$SoftCache<K,V>, java.lang.Object]> {}
        interface _Transferable$$static extends ClassLike {
        }
        let Transferable: _Transferable$$static;
        interface _Transferable {
          getTransferData(a0: DataFlavor): any;
          getTransferDataFlavors(): DataFlavor[];
          isDataFlavorSupported(a0: DataFlavor): boolean;
        }
        interface Transferable extends CombineTypes<[_Transferable, java.lang.Object]> {}
        interface _UnsupportedFlavorException$$static extends ClassLike {
          _serialVersionUID: long;
          new(flavor: DataFlavor): UnsupportedFlavorException;
        }
        let UnsupportedFlavorException: _UnsupportedFlavorException$$static;
        interface _UnsupportedFlavorException {
        }
        interface UnsupportedFlavorException extends CombineTypes<[_UnsupportedFlavorException, java.lang.Exception]> {}
      }
    }
  }
  module sun {
    module datatransfer {
      interface _DataFlavorUtil$$static extends ClassLike {
        canonicalName(encoding: string): string;
        _compareIndices<T>(indexMap: java.util.Map<T,int>, obj1: T, obj2: T, fallbackIndex: int): int;
        doesSubtypeSupportCharset(flavor: java.awt.datatransfer.DataFlavor): boolean;
        doesSubtypeSupportCharset(subType: string, charset: string): boolean;
        _getCharsetComparator(): java.util.Comparator<string>;
        getDataFlavorComparator(): java.util.Comparator<java.awt.datatransfer.DataFlavor>;
        getDesktopService(): DesktopDatatransferService;
        getIndexOrderComparator(indexMap: java.util.Map<long,int>): java.util.Comparator<long>;
        getTextCharset(flavor: java.awt.datatransfer.DataFlavor): string;
        getTextFlavorComparator(): java.util.Comparator<java.awt.datatransfer.DataFlavor>;
        _isEncodingSupported(encoding: string): boolean;
        isFlavorCharsetTextType(flavor: java.awt.datatransfer.DataFlavor): boolean;
        isFlavorNoncharsetTextType(flavor: java.awt.datatransfer.DataFlavor): boolean;
        standardEncodings(): java.util.Set<string>;
        _textMIMESubtypeCharsetSupport: java.util.Map<string,boolean>;
      }
      let DataFlavorUtil: _DataFlavorUtil$$static;
      interface _DataFlavorUtil {
      }
      interface DataFlavorUtil extends CombineTypes<[_DataFlavorUtil, java.lang.Object]> {}
      interface _DataFlavorUtil$CharsetComparator$$static extends ClassLike {
        _getEncoding(charset: string): string;
        _DEFAULT_CHARSET_INDEX: int;
        _INSTANCE: DataFlavorUtil$CharsetComparator;
        _OTHER_CHARSET_INDEX: int;
        _UNSUPPORTED_CHARSET: string;
        _UNSUPPORTED_CHARSET_INDEX: int;
        _WORST_CHARSET_INDEX: int;
        _charsets: java.util.Map<string,int>;
      }
      let DataFlavorUtil$CharsetComparator: _DataFlavorUtil$CharsetComparator$$static;
      interface _DataFlavorUtil$CharsetComparator {
        compare(charset1: string, charset2: string): int;
        compare(a0: any, a1: any): int;
      }
      interface DataFlavorUtil$CharsetComparator extends CombineTypes<[_DataFlavorUtil$CharsetComparator, java.lang.Object, java.util.Comparator<string>]> {}
      interface _DataFlavorUtil$DataFlavorComparator$$static extends ClassLike {
        _INSTANCE: DataFlavorUtil$DataFlavorComparator;
        _UNKNOWN_OBJECT_LOSES: int;
        _UNKNOWN_OBJECT_WINS: int;
        _decodedTextRepresentations: java.util.Map<java.lang.Class<any>,int>;
        _encodedTextRepresentations: java.util.Map<java.lang.Class<any>,int>;
        _exactTypes: java.util.Map<string,int>;
        _nonTextRepresentations: java.util.Map<java.lang.Class<any>,int>;
        _primaryTypes: java.util.Map<string,int>;
        _textTypes: java.util.Map<string,int>;
      }
      let DataFlavorUtil$DataFlavorComparator: _DataFlavorUtil$DataFlavorComparator$$static;
      interface _DataFlavorUtil$DataFlavorComparator {
        compare(flavor1: java.awt.datatransfer.DataFlavor, flavor2: java.awt.datatransfer.DataFlavor): int;
        compare(a0: any, a1: any): int;
      }
      interface DataFlavorUtil$DataFlavorComparator extends CombineTypes<[_DataFlavorUtil$DataFlavorComparator, java.lang.Object, java.util.Comparator<java.awt.datatransfer.DataFlavor>]> {}
      interface _DataFlavorUtil$DefaultDesktopDatatransferService$$static extends ClassLike {
        _getDesktopService(): DesktopDatatransferService;
        _INSTANCE: DesktopDatatransferService;
      }
      let DataFlavorUtil$DefaultDesktopDatatransferService: _DataFlavorUtil$DefaultDesktopDatatransferService$$static;
      interface _DataFlavorUtil$DefaultDesktopDatatransferService {
        getDefaultUnicodeEncoding(): string;
        getFlavorMap(supplier: java.util.function.Supplier<java.awt.datatransfer.FlavorMap>): java.awt.datatransfer.FlavorMap;
        getPlatformMappingsForFlavor(df: java.awt.datatransfer.DataFlavor): java.util.LinkedHashSet<string>;
        getPlatformMappingsForNative(nat: string): java.util.LinkedHashSet<java.awt.datatransfer.DataFlavor>;
        invokeOnEventThread(r: java.lang.Runnable): void;
        isDesktopPresent(): boolean;
        registerTextFlavorProperties(nat: string, charset: string, eoln: string, terminators: string): void;
        _flavorMap: java.awt.datatransfer.FlavorMap;
      }
      interface DataFlavorUtil$DefaultDesktopDatatransferService extends CombineTypes<[_DataFlavorUtil$DefaultDesktopDatatransferService, sun.datatransfer.DesktopDatatransferService, java.lang.Object]> {}
      interface _DataFlavorUtil$IndexOrderComparator$$static extends ClassLike {
        _FALLBACK_INDEX: int;
        new(indexMap: java.util.Map<long,int>): DataFlavorUtil$IndexOrderComparator;
      }
      let DataFlavorUtil$IndexOrderComparator: _DataFlavorUtil$IndexOrderComparator$$static;
      interface _DataFlavorUtil$IndexOrderComparator {
        compare(obj1: long, obj2: long): int;
        compare(a0: any, a1: any): int;
        _indexMap: java.util.Map<long,int>;
      }
      interface DataFlavorUtil$IndexOrderComparator extends CombineTypes<[_DataFlavorUtil$IndexOrderComparator, java.util.Comparator<long>, java.lang.Object]> {}
      interface _DataFlavorUtil$RMI$$static extends ClassLike {
        _getClass(name: string): java.lang.Class<any>;
        _getConstructor(c: java.lang.Class<any>, types: java.lang.Class<any>[]): java.lang.reflect.Constructor<any>;
        _getConstructor(c: java.lang.Class<any>, ...types: java.lang.Class<any>[]): java.lang.reflect.Constructor<any>;
        getMarshalledObject(obj: any): any;
        _getMethod(c: java.lang.Class<any>, name: string, types: java.lang.Class<any>[]): java.lang.reflect.Method;
        _getMethod(c: java.lang.Class<any>, name: string, ...types: java.lang.Class<any>[]): java.lang.reflect.Method;
        isRemote(c: java.lang.Class<any>): boolean;
        newMarshalledObject(obj: any): any;
        _remoteClass(): java.lang.Class<any>;
        _marshallCtor: java.lang.reflect.Constructor<any>;
        _marshallGet: java.lang.reflect.Method;
        _marshallObjectClass: java.lang.Class<any>;
        _remoteClass: java.lang.Class<any>;
        new(): DataFlavorUtil$RMI;
      }
      let DataFlavorUtil$RMI: _DataFlavorUtil$RMI$$static;
      interface _DataFlavorUtil$RMI {
      }
      interface DataFlavorUtil$RMI extends CombineTypes<[_DataFlavorUtil$RMI, java.lang.Object]> {}
      interface _DataFlavorUtil$StandardEncodingsHolder$$static extends ClassLike {
        _load(): java.util.SortedSet<string>;
        _standardEncodings: java.util.SortedSet<string>;
      }
      let DataFlavorUtil$StandardEncodingsHolder: _DataFlavorUtil$StandardEncodingsHolder$$static;
      interface _DataFlavorUtil$StandardEncodingsHolder {
      }
      interface DataFlavorUtil$StandardEncodingsHolder extends CombineTypes<[_DataFlavorUtil$StandardEncodingsHolder, java.lang.Object]> {}
      interface _DataFlavorUtil$TextFlavorComparator$$static extends ClassLike {
        _INSTANCE: DataFlavorUtil$TextFlavorComparator;
      }
      let DataFlavorUtil$TextFlavorComparator: _DataFlavorUtil$TextFlavorComparator$$static;
      interface _DataFlavorUtil$TextFlavorComparator {
        compare(flavor1: java.awt.datatransfer.DataFlavor, flavor2: java.awt.datatransfer.DataFlavor): int;
        compare(a0: any, a1: any): int;
      }
      interface DataFlavorUtil$TextFlavorComparator extends CombineTypes<[_DataFlavorUtil$TextFlavorComparator, sun.datatransfer.DataFlavorUtil$DataFlavorComparator]> {}
      interface _DesktopDatatransferService$$static extends ClassLike {
      }
      let DesktopDatatransferService: _DesktopDatatransferService$$static;
      interface _DesktopDatatransferService {
        getDefaultUnicodeEncoding(): string;
        getFlavorMap(a0: java.util.function.Supplier<java.awt.datatransfer.FlavorMap>): java.awt.datatransfer.FlavorMap;
        getPlatformMappingsForFlavor(a0: java.awt.datatransfer.DataFlavor): java.util.LinkedHashSet<string>;
        getPlatformMappingsForNative(a0: string): java.util.LinkedHashSet<java.awt.datatransfer.DataFlavor>;
        invokeOnEventThread(a0: java.lang.Runnable): void;
        isDesktopPresent(): boolean;
        registerTextFlavorProperties(a0: string, a1: string, a2: string, a3: string): void;
      }
      interface DesktopDatatransferService extends CombineTypes<[_DesktopDatatransferService, java.lang.Object]> {}
    }
  }
}
