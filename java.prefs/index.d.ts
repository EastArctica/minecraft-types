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
    module util {
      module prefs {
        interface _AbstractPreferences$$static extends ClassLike {
          _startEventDispatchThreadIfNecessary(): void;
          _CODE_POINT_U0000: int;
          _EMPTY_ABSTRACT_PREFS_ARRAY: AbstractPreferences[];
          _EMPTY_STRING_ARRAY: string[];
          _eventDispatchThread: java.lang.Thread;
          _eventQueue: List<EventObject>;
          _new(parent: AbstractPreferences, name: string): AbstractPreferences;
        }
        let AbstractPreferences: _AbstractPreferences$$static;
        interface _AbstractPreferences {
          absolutePath(): string;
          addNodeChangeListener(ncl: NodeChangeListener): void;
          addPreferenceChangeListener(pcl: PreferenceChangeListener): void;
          _cachedChildren(): AbstractPreferences[];
          _childSpi(a0: string): AbstractPreferences;
          childrenNames(): string[];
          _childrenNamesSpi(): string[];
          clear(): void;
          _enqueueNodeAddedEvent(child: Preferences): void;
          _enqueueNodeRemovedEvent(child: Preferences): void;
          _enqueuePreferenceChangeEvent(key: string, newValue: string): void;
          exportNode(os: java.io.OutputStream): void;
          exportSubtree(os: java.io.OutputStream): void;
          flush(): void;
          _flush2(): void;
          _flushSpi(): void;
          get(key: string, def: string): string;
          getBoolean(key: string, def: boolean): boolean;
          getByteArray(key: string, def: byte[]): byte[];
          _getChild(nodeName: string): AbstractPreferences;
          getDouble(key: string, def: double): double;
          getFloat(key: string, def: float): float;
          getInt(key: string, def: int): int;
          getLong(key: string, def: long): long;
          _getSpi(a0: string): string;
          _isRemoved(): boolean;
          isUserNode(): boolean;
          keys(): string[];
          _keysSpi(): string[];
          name(): string;
          node(path: string): Preferences;
          _node(path: StringTokenizer): Preferences;
          nodeExists(path: string): boolean;
          _nodeExists(path: StringTokenizer): boolean;
          _nodeListeners(): NodeChangeListener[];
          parent(): Preferences;
          _prefListeners(): PreferenceChangeListener[];
          put(key: string, value: string): void;
          putBoolean(key: string, value: boolean): void;
          putByteArray(key: string, value: byte[]): void;
          putDouble(key: string, value: double): void;
          putFloat(key: string, value: float): void;
          putInt(key: string, value: int): void;
          putLong(key: string, value: long): void;
          _putSpi(a0: string, a1: string): void;
          remove(key: string): void;
          removeNode(): void;
          _removeNode2(): void;
          removeNodeChangeListener(ncl: NodeChangeListener): void;
          _removeNodeSpi(): void;
          removePreferenceChangeListener(pcl: PreferenceChangeListener): void;
          _removeSpi(a0: string): void;
          sync(): void;
          _sync2(): void;
          _syncSpi(): void;
          toString(): string;
          _absolutePath: string;
          _kidCache: Map<string,AbstractPreferences>;
          _lock: any;
          _name: string;
          _newNode: boolean;
          _nodeListeners: NodeChangeListener[];
          _parent: AbstractPreferences;
          _prefListeners: PreferenceChangeListener[];
          _removed: boolean;
          _root: AbstractPreferences;
        }
        interface AbstractPreferences extends CombineTypes<[_AbstractPreferences, java.util.prefs.Preferences]> {}
        interface _AbstractPreferences$EventDispatchThread$$static extends ClassLike {
        }
        let AbstractPreferences$EventDispatchThread: _AbstractPreferences$EventDispatchThread$$static;
        interface _AbstractPreferences$EventDispatchThread {
          run(): void;
        }
        interface AbstractPreferences$EventDispatchThread extends CombineTypes<[_AbstractPreferences$EventDispatchThread, java.lang.Thread]> {}
        interface _AbstractPreferences$NodeAddedEvent$$static extends ClassLike {
          _serialVersionUID: long;
          _new(parent: Preferences, child: Preferences): AbstractPreferences$NodeAddedEvent;
        }
        let AbstractPreferences$NodeAddedEvent: _AbstractPreferences$NodeAddedEvent$$static;
        interface _AbstractPreferences$NodeAddedEvent {
        }
        interface AbstractPreferences$NodeAddedEvent extends CombineTypes<[_AbstractPreferences$NodeAddedEvent, java.util.prefs.NodeChangeEvent]> {}
        interface _AbstractPreferences$NodeRemovedEvent$$static extends ClassLike {
          _serialVersionUID: long;
          _new(parent: Preferences, child: Preferences): AbstractPreferences$NodeRemovedEvent;
        }
        let AbstractPreferences$NodeRemovedEvent: _AbstractPreferences$NodeRemovedEvent$$static;
        interface _AbstractPreferences$NodeRemovedEvent {
        }
        interface AbstractPreferences$NodeRemovedEvent extends CombineTypes<[_AbstractPreferences$NodeRemovedEvent, java.util.prefs.NodeChangeEvent]> {}
        interface _BackingStoreException$$static extends ClassLike {
          _serialVersionUID: long;
          new(s: string): BackingStoreException;
          new(cause: java.lang.Throwable): BackingStoreException;
        }
        let BackingStoreException: _BackingStoreException$$static;
        interface _BackingStoreException {
        }
        interface BackingStoreException extends CombineTypes<[_BackingStoreException, java.lang.Exception]> {}
        interface _Base64$$static extends ClassLike {
          _altBase64ToByteArray(s: string): byte[];
          _base64ToByteArray(s: string): byte[];
          _base64ToByteArray(s: string, alternate: boolean): byte[];
          _base64toInt(c: char, alphaToInt: byte[]): int;
          _byteArrayToAltBase64(a: byte[]): string;
          _byteArrayToBase64(a: byte[]): string;
          _byteArrayToBase64(a: byte[], alternate: boolean): string;
          main(args: string[]): void;
          _altBase64ToInt: byte[];
          _base64ToInt: byte[];
          _intToAltBase64: char[];
          _intToBase64: char[];
          _new(): Base64;
        }
        let Base64: _Base64$$static;
        interface _Base64 {
        }
        interface Base64 extends CombineTypes<[_Base64, java.lang.Object]> {}
        interface _InvalidPreferencesFormatException$$static extends ClassLike {
          _serialVersionUID: long;
          new(cause: java.lang.Throwable): InvalidPreferencesFormatException;
          new(message: string): InvalidPreferencesFormatException;
          new(message: string, cause: java.lang.Throwable): InvalidPreferencesFormatException;
        }
        let InvalidPreferencesFormatException: _InvalidPreferencesFormatException$$static;
        interface _InvalidPreferencesFormatException {
        }
        interface InvalidPreferencesFormatException extends CombineTypes<[_InvalidPreferencesFormatException, java.lang.Exception]> {}
        interface _NodeChangeEvent$$static extends ClassLike {
          _serialVersionUID: long;
          new(parent: Preferences, child: Preferences): NodeChangeEvent;
        }
        let NodeChangeEvent: _NodeChangeEvent$$static;
        interface _NodeChangeEvent {
          getChild(): Preferences;
          getParent(): Preferences;
          _readObject(_in: java.io.ObjectInputStream): void;
          _writeObject(out: java.io.ObjectOutputStream): void;
          _child: Preferences;
        }
        interface NodeChangeEvent extends CombineTypes<[_NodeChangeEvent, java.util.EventObject]> {}
        interface _NodeChangeListener$$static extends ClassLike {
        }
        let NodeChangeListener: _NodeChangeListener$$static;
        interface _NodeChangeListener {
          childAdded(a0: NodeChangeEvent): void;
          childRemoved(a0: NodeChangeEvent): void;
        }
        interface NodeChangeListener extends CombineTypes<[_NodeChangeListener, java.util.EventListener, java.lang.Object]> {}
        interface _PreferenceChangeEvent$$static extends ClassLike {
          _serialVersionUID: long;
          new(node: Preferences, key: string, newValue: string): PreferenceChangeEvent;
        }
        let PreferenceChangeEvent: _PreferenceChangeEvent$$static;
        interface _PreferenceChangeEvent {
          getKey(): string;
          getNewValue(): string;
          getNode(): Preferences;
          _readObject(_in: java.io.ObjectInputStream): void;
          _writeObject(out: java.io.ObjectOutputStream): void;
          _key: string;
          _newValue: string;
        }
        interface PreferenceChangeEvent extends CombineTypes<[_PreferenceChangeEvent, java.util.EventObject]> {}
        interface _PreferenceChangeListener$$static extends ClassLike {
        }
        let PreferenceChangeListener: _PreferenceChangeListener$$static;
        interface _PreferenceChangeListener {
          preferenceChange(a0: PreferenceChangeEvent): void;
(a0: PreferenceChangeEvent): void;
        }
        interface PreferenceChangeListener extends CombineTypes<[_PreferenceChangeListener, java.util.EventListener, java.lang.Object]> {}
        interface _Preferences$$static extends ClassLike {
          _factory(): PreferencesFactory;
          _factory1(): PreferencesFactory;
          importPreferences(is: java.io.InputStream): void;
          _nodeName(c: java.lang.Class<any>): string;
          systemNodeForPackage(c: java.lang.Class<any>): Preferences;
          systemRoot(): Preferences;
          userNodeForPackage(c: java.lang.Class<any>): Preferences;
          userRoot(): Preferences;
          readonly MAX_KEY_LENGTH: int;
          readonly MAX_NAME_LENGTH: int;
          readonly MAX_VALUE_LENGTH: int;
          _factory: PreferencesFactory;
          _prefsPerm: java.security.Permission;
          _new(): Preferences;
        }
        let Preferences: _Preferences$$static;
        interface _Preferences {
          absolutePath(): string;
          addNodeChangeListener(a0: NodeChangeListener): void;
          addPreferenceChangeListener(a0: PreferenceChangeListener): void;
          childrenNames(): string[];
          clear(): void;
          exportNode(a0: java.io.OutputStream): void;
          exportSubtree(a0: java.io.OutputStream): void;
          flush(): void;
          get(a0: string, a1: string): string;
          getBoolean(a0: string, a1: boolean): boolean;
          getByteArray(a0: string, a1: byte[]): byte[];
          getDouble(a0: string, a1: double): double;
          getFloat(a0: string, a1: float): float;
          getInt(a0: string, a1: int): int;
          getLong(a0: string, a1: long): long;
          isUserNode(): boolean;
          keys(): string[];
          name(): string;
          node(a0: string): Preferences;
          nodeExists(a0: string): boolean;
          parent(): Preferences;
          put(a0: string, a1: string): void;
          putBoolean(a0: string, a1: boolean): void;
          putByteArray(a0: string, a1: byte[]): void;
          putDouble(a0: string, a1: double): void;
          putFloat(a0: string, a1: float): void;
          putInt(a0: string, a1: int): void;
          putLong(a0: string, a1: long): void;
          remove(a0: string): void;
          removeNode(): void;
          removeNodeChangeListener(a0: NodeChangeListener): void;
          removePreferenceChangeListener(a0: PreferenceChangeListener): void;
          sync(): void;
          toString(): string;
        }
        interface Preferences extends CombineTypes<[_Preferences, java.lang.Object]> {}
        interface _PreferencesFactory$$static extends ClassLike {
        }
        let PreferencesFactory: _PreferencesFactory$$static;
        interface _PreferencesFactory {
          systemRoot(): Preferences;
          userRoot(): Preferences;
        }
        interface PreferencesFactory extends CombineTypes<[_PreferencesFactory, java.lang.Object]> {}
        interface _WindowsPreferences$$static extends ClassLike {
          _WindowsRegCloseKey(a0: long): int;
          _WindowsRegCreateKeyEx(a0: long, a1: byte[]): long[];
          _WindowsRegCreateKeyEx1(hKey: long, a1: byte[]): long[];
          _WindowsRegDeleteKey(a0: long, a1: byte[]): int;
          _WindowsRegDeleteValue(a0: long, a1: byte[]): int;
          _WindowsRegEnumKeyEx(a0: long, a1: int, a2: int): byte[];
          _WindowsRegEnumKeyEx1(hKey: long, a1: int, subKeyIndex: int): byte[];
          _WindowsRegEnumValue(a0: long, a1: int, a2: int): byte[];
          _WindowsRegEnumValue1(hKey: long, a1: int, valueIndex: int): byte[];
          _WindowsRegFlushKey(a0: long): int;
          _WindowsRegFlushKey1(hKey: long): int;
          _WindowsRegOpenKey(a0: long, a1: byte[], a2: int): long[];
          _WindowsRegOpenKey1(hKey: long, a1: byte[], subKey: int): long[];
          _WindowsRegQueryInfoKey(a0: long): long[];
          _WindowsRegQueryInfoKey1(hKey: long): long[];
          _WindowsRegQueryValueEx(a0: long, a1: byte[]): byte[];
          _WindowsRegSetValueEx(a0: long, a1: byte[], a2: byte[]): int;
          _WindowsRegSetValueEx1(hKey: long, a1: byte[], valueName: byte[]): int;
          _byteArrayToString(array: byte[]): string;
          _getSystemRoot(): Preferences;
          _getUserRoot(): Preferences;
          _loadPrefsLib(): void;
          _logger(): sun.util.logging.PlatformLogger;
          _stringToByteArray(str: string): byte[];
          _toJavaAlt64Name(windowsName: string): string;
          _toJavaName(windowsNameArray: byte[]): string;
          _toJavaValueString(windowsNameArray: byte[]): string;
          _toWindowsAlt64Name(javaName: string): byte[];
          _toWindowsName(javaName: string): byte[];
          _toWindowsValueString(javaName: string): byte[];
          _DELETE: int;
          _DISPOSITION: int;
          _ERROR_ACCESS_DENIED: int;
          _ERROR_CODE: int;
          _ERROR_FILE_NOT_FOUND: int;
          _ERROR_SUCCESS: int;
          _HKEY_CURRENT_USER: int;
          _HKEY_LOCAL_MACHINE: int;
          _INIT_SLEEP_TIME: int;
          _KEY_ALL_ACCESS: int;
          _KEY_CREATE_SUB_KEY: int;
          _KEY_ENUMERATE_SUB_KEYS: int;
          _KEY_QUERY_VALUE: int;
          _KEY_READ: int;
          _KEY_SET_VALUE: int;
          _KEY_WRITE: int;
          _MAX_ATTEMPTS: int;
          _MAX_KEY_LENGTH: int;
          _MAX_VALUE_NAME_LENGTH: int;
          _MAX_WINDOWS_PATH_LENGTH: int;
          _NATIVE_HANDLE: int;
          _NULL_NATIVE_HANDLE: int;
          _REG_CREATED_NEW_KEY: int;
          _REG_OPENED_EXISTING_KEY: int;
          _SUBKEYS_NUMBER: int;
          _SYSTEM_ROOT_NATIVE_HANDLE: int;
          _USER_ROOT_NATIVE_HANDLE: int;
          _VALUES_NUMBER: int;
          _WINDOWS_ROOT_PATH: byte[];
          _logger: sun.util.logging.PlatformLogger;
          _systemRoot: Preferences;
          _userRoot: Preferences;
        }
        let WindowsPreferences: _WindowsPreferences$$static;
        interface _WindowsPreferences {
          _childSpi(name: string): AbstractPreferences;
          _childrenNamesSpi(): string[];
          _closeKey(nativeHandle: long): void;
          flush(): void;
          _flushSpi(): void;
          _getSpi(javaName: string): string;
          _keysSpi(): string[];
          _openKey(securityMask: int): long;
          _openKey(mask1: int, mask2: int): long;
          _openKey(windowsAbsolutePath: byte[], mask1: int, mask2: int): long;
          _openKey(nativeHandle: long, a1: byte[], windowsRelativePath: int, mask1: int): long;
          _putSpi(javaName: string, value: string): void;
          removeNodeSpi(): void;
          _removeSpi(key: string): void;
          _rootNativeHandle(): long;
          sync(): void;
          _syncSpi(): void;
          _windowsAbsolutePath(): byte[];
          _isBackingStoreAvailable: boolean;
        }
        interface WindowsPreferences extends CombineTypes<[_WindowsPreferences, java.util.prefs.AbstractPreferences]> {}
        interface _WindowsPreferencesFactory$$static extends ClassLike {
          _new(): WindowsPreferencesFactory;
        }
        let WindowsPreferencesFactory: _WindowsPreferencesFactory$$static;
        interface _WindowsPreferencesFactory {
          systemRoot(): Preferences;
          userRoot(): Preferences;
        }
        interface WindowsPreferencesFactory extends CombineTypes<[_WindowsPreferencesFactory, java.util.prefs.PreferencesFactory, java.lang.Object]> {}
        interface _XmlSupport$$static extends ClassLike {
          _ImportPrefs(prefsNode: Preferences, map: org.w3c.dom.Element): void;
          _ImportSubtree(prefsNode: Preferences, xmlNode: org.w3c.dom.Element): void;
          _createPrefsDoc(qname: string): org.w3c.dom.Document;
          _export(os: java.io.OutputStream, p: Preferences, subTree: boolean): void;
          _exportMap(os: java.io.OutputStream, map: Map<string,string>): void;
          _importMap(is: java.io.InputStream, m: Map<string,string>): void;
          _importPreferences(is: java.io.InputStream): void;
          _loadPrefsDoc(_in: java.io.InputStream): org.w3c.dom.Document;
          _putPreferencesInXml(elt: org.w3c.dom.Element, doc: org.w3c.dom.Document, prefs: Preferences, subTree: boolean): void;
          _writeDoc(doc: org.w3c.dom.Document, out: java.io.OutputStream): void;
          _EXTERNAL_XML_VERSION: string;
          _MAP_XML_VERSION: string;
          _PREFS_DTD: string;
          _PREFS_DTD_URI: string;
          _new(): XmlSupport;
        }
        let XmlSupport: _XmlSupport$$static;
        interface _XmlSupport {
        }
        interface XmlSupport extends CombineTypes<[_XmlSupport, java.lang.Object]> {}
        interface _XmlSupport$EH$$static extends ClassLike {
        }
        let XmlSupport$EH: _XmlSupport$EH$$static;
        interface _XmlSupport$EH {
          error(x: org.xml.sax.SAXParseException): void;
          fatalError(x: org.xml.sax.SAXParseException): void;
          warning(x: org.xml.sax.SAXParseException): void;
        }
        interface XmlSupport$EH extends CombineTypes<[_XmlSupport$EH, org.xml.sax.ErrorHandler, java.lang.Object]> {}
        interface _XmlSupport$Resolver$$static extends ClassLike {
        }
        let XmlSupport$Resolver: _XmlSupport$Resolver$$static;
        interface _XmlSupport$Resolver {
          resolveEntity(pid: string, sid: string): org.xml.sax.InputSource;
        }
        interface XmlSupport$Resolver extends CombineTypes<[_XmlSupport$Resolver, java.lang.Object, org.xml.sax.EntityResolver]> {}
      }
    }
  }
}
