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
    module nio {
      module zipfs {
        interface _ByteArrayChannel$$static extends ClassLike {
          _hugeCapacity(minCapacity: int): int;
          _MAX_ARRAY_SIZE: int;
          _new(sz: int, readonly: boolean): ByteArrayChannel;
          _new(buf: byte[], readonly: boolean): ByteArrayChannel;
        }
        let ByteArrayChannel: _ByteArrayChannel$$static;
        interface _ByteArrayChannel {
          _beginRead(): void;
          _beginWrite(): void;
          close(): void;
          _endRead(): void;
          _endWrite(): void;
          _ensureCapacity(minCapacity: int): void;
          _ensureOpen(): void;
          _grow(minCapacity: int): void;
          isOpen(): boolean;
          position(): long;
          position(pos: long): java.nio.channels.SeekableByteChannel;
          read(dst: java.nio.ByteBuffer): int;
          size(): long;
          toByteArray(): byte[];
          truncate(size: long): java.nio.channels.SeekableByteChannel;
          write(src: java.nio.ByteBuffer): int;
          _buf: byte[];
          _closed: boolean;
          _last: int;
          _pos: int;
          _readonly: boolean;
          _rwlock: java.util.concurrent.locks.ReadWriteLock;
        }
        interface ByteArrayChannel extends CombineTypes<[_ByteArrayChannel, java.nio.channels.SeekableByteChannel, java.lang.Object]> {}
        interface _ZipCoder$$static extends ClassLike {
          get(csn: string): ZipCoder;
          _utf8: ZipCoder;
        }
        let ZipCoder: _ZipCoder$$static;
        interface _ZipCoder {
          _decoder(): java.nio.charset.CharsetDecoder;
          _encoder(): java.nio.charset.CharsetEncoder;
          _getBytes(s: string): byte[];
          _isUTF8(): boolean;
          _toString(ba: byte[]): string;
          _cs: java.nio.charset.Charset;
          _decTL: java.lang.ThreadLocal<java.nio.charset.CharsetDecoder>;
          _encTL: java.lang.ThreadLocal<java.nio.charset.CharsetEncoder>;
        }
        interface ZipCoder extends CombineTypes<[_ZipCoder, java.lang.Object]> {}
        interface _ZipCoder$UTF8$$static extends ClassLike {
          _new(): ZipCoder$UTF8;
        }
        let ZipCoder$UTF8: _ZipCoder$UTF8$$static;
        interface _ZipCoder$UTF8 {
          _getBytes(s: string): byte[];
          _toString(ba: byte[]): string;
        }
        interface ZipCoder$UTF8 extends CombineTypes<[_ZipCoder$UTF8, jdk.nio.zipfs.ZipCoder]> {}
        interface _ZipConstants$$static extends ClassLike {
          _CENATT(b: byte[], pos: int): int;
          _CENATX(b: byte[], pos: int): long;
          _CENATX_PERMS(b: byte[], pos: int): int;
          _CENCOM(b: byte[], pos: int): int;
          _CENCRC(b: byte[], pos: int): long;
          _CENDSK(b: byte[], pos: int): int;
          _CENEXT(b: byte[], pos: int): int;
          _CENFLG(b: byte[], pos: int): int;
          _CENHOW(b: byte[], pos: int): int;
          _CENLEN(b: byte[], pos: int): long;
          _CENNAM(b: byte[], pos: int): int;
          _CENOFF(b: byte[], pos: int): long;
          _CENSIG(b: byte[], pos: int): long;
          _CENSIZ(b: byte[], pos: int): long;
          _CENTIM(b: byte[], pos: int): long;
          _CENVEM(b: byte[], pos: int): int;
          _CENVEM_FA(b: byte[], pos: int): int;
          _CENVER(b: byte[], pos: int): int;
          _CH(b: byte[], n: int): int;
          _ENDCOM(b: byte[]): int;
          _ENDCOM(b: byte[], off: int): int;
          _ENDOFF(b: byte[]): long;
          _ENDSIZ(b: byte[]): long;
          _ENDSUB(b: byte[]): int;
          _ENDTOT(b: byte[]): int;
          _EXTCRC(b: byte[]): long;
          _EXTLEN(b: byte[]): long;
          _EXTSIZ(b: byte[]): long;
          _LG(b: byte[], n: int): long;
          _LL(b: byte[], n: int): long;
          _LOCCRC(b: byte[]): long;
          _LOCEXT(b: byte[]): int;
          _LOCFLG(b: byte[]): int;
          _LOCHOW(b: byte[]): int;
          _LOCLEN(b: byte[]): long;
          _LOCNAM(b: byte[]): int;
          _LOCSIG(b: byte[]): long;
          _LOCSIZ(b: byte[]): long;
          _LOCTIM(b: byte[]): long;
          _LOCVER(b: byte[]): int;
          _SH(b: byte[], n: int): int;
          _ZIP64_ENDOFF(b: byte[]): long;
          _ZIP64_ENDSIZ(b: byte[]): long;
          _ZIP64_ENDTOD(b: byte[]): long;
          _ZIP64_ENDTOT(b: byte[]): long;
          _ZIP64_LOCOFF(b: byte[]): long;
          _cenSigAt(b: byte[], n: int): boolean;
          _end64SigAt(b: byte[], n: int): boolean;
          _endSigAt(b: byte[], n: int): boolean;
          _extSigAt(b: byte[], n: int): boolean;
          _getSig(b: byte[], n: int): long;
          _locSigAt(b: byte[], n: int): boolean;
          _locator64SigAt(b: byte[], n: int): boolean;
          _pkSigAt(b: byte[], n: int, b1: int, b2: int): boolean;
          _CENATT: int;
          _CENATX: int;
          _CENCOM: int;
          _CENCRC: int;
          _CENDSK: int;
          _CENEXT: int;
          _CENFLG: int;
          _CENHDR: int;
          _CENHOW: int;
          _CENLEN: int;
          _CENNAM: int;
          _CENOFF: int;
          _CENSIG: long;
          _CENSIZ: int;
          _CENTIM: int;
          _CENVEM: int;
          _CENVER: int;
          _ENDCOM: int;
          _ENDHDR: int;
          _ENDOFF: int;
          _ENDSIG: long;
          _ENDSIZ: int;
          _ENDSUB: int;
          _ENDTOT: int;
          _END_MAXLEN: long;
          _EXTCRC: int;
          _EXTHDR: int;
          _EXTID_EFS: int;
          _EXTID_EXTT: int;
          _EXTID_NTFS: int;
          _EXTID_UNIX: int;
          _EXTID_ZIP64: int;
          _EXTLEN: int;
          _EXTSIG: long;
          _EXTSIZ: int;
          _FILE_ATTRIBUTES_UNIX: int;
          _FLAG_DATADESCR: int;
          _FLAG_ENCRYPTED: int;
          _FLAG_USE_UTF8: int;
          _LOCCRC: int;
          _LOCEXT: int;
          _LOCFLG: int;
          _LOCHDR: int;
          _LOCHOW: int;
          _LOCLEN: int;
          _LOCNAM: int;
          _LOCSIG: long;
          _LOCSIZ: int;
          _LOCTIM: int;
          _LOCVER: int;
          _METHOD_AES: int;
          _METHOD_BZIP2: int;
          _METHOD_DEFLATED: int;
          _METHOD_DEFLATED64: int;
          _METHOD_LZ77: int;
          _METHOD_LZMA: int;
          _METHOD_STORED: int;
          _READBLOCKSZ: int;
          _VERSION_MADE_BY_BASE_UNIX: int;
          _ZIP64_ENDDSK: int;
          _ZIP64_ENDEXT: int;
          _ZIP64_ENDHDR: int;
          _ZIP64_ENDLEN: int;
          _ZIP64_ENDNMD: int;
          _ZIP64_ENDOFF: int;
          _ZIP64_ENDSIG: long;
          _ZIP64_ENDSIZ: int;
          _ZIP64_ENDTOD: int;
          _ZIP64_ENDTOT: int;
          _ZIP64_ENDVEM: int;
          _ZIP64_ENDVER: int;
          _ZIP64_EXTCRC: int;
          _ZIP64_EXTHDR: int;
          _ZIP64_EXTID: int;
          _ZIP64_EXTLEN: int;
          _ZIP64_EXTSIZ: int;
          _ZIP64_LOCDSK: int;
          _ZIP64_LOCHDR: int;
          _ZIP64_LOCOFF: int;
          _ZIP64_LOCSIG: long;
          _ZIP64_LOCTOT: int;
          _ZIP64_MINVAL: long;
          _ZIP64_MINVAL32: int;
          _new(): ZipConstants;
        }
        let ZipConstants: _ZipConstants$$static;
        interface _ZipConstants {
        }
        interface ZipConstants extends CombineTypes<[_ZipConstants, java.lang.Object]> {}
        interface _ZipDirectoryStream$$static extends ClassLike {
          _new(dir: ZipPath, filter: java.nio.file.DirectoryStream$Filter<java.nio.file.Path>): ZipDirectoryStream;
        }
        let ZipDirectoryStream: _ZipDirectoryStream$$static;
        interface _ZipDirectoryStream {
          close(): void;
          iterator(): java.util.Iterator<java.nio.file.Path>;
          _dir: ZipPath;
          _filter: java.nio.file.DirectoryStream$Filter<java.nio.file.Path>;
          _isClosed: boolean;
          _itr: java.util.Iterator<java.nio.file.Path>;
          _zipfs: ZipFileSystem;
        }
        interface ZipDirectoryStream extends CombineTypes<[_ZipDirectoryStream, java.nio.file.DirectoryStream<java.nio.file.Path>, java.lang.Object]> {}
        interface _ZipFileAttributeView$$static extends ClassLike {
          _new(path: ZipPath, isZipView: boolean): ZipFileAttributeView;
        }
        let ZipFileAttributeView: _ZipFileAttributeView$$static;
        interface _ZipFileAttributeView {
          _attribute(id: ZipFileAttributeView$AttrID, zfas: ZipFileAttributes): any;
          name(): string;
          readAttributes(): java.nio.file.attribute.BasicFileAttributes;
          _readAttributes(attributes: string): java.util.Map<string,any>;
          _setAttribute(attribute: string, value: any): void;
          setPermissions(perms: java.util.Set<java.nio.file.attribute.PosixFilePermission>): void;
          setTimes(lastModifiedTime: java.nio.file.attribute.FileTime, lastAccessTime: java.nio.file.attribute.FileTime, createTime: java.nio.file.attribute.FileTime): void;
          _isZipView: boolean;
          _path: ZipPath;
        }
        interface ZipFileAttributeView extends CombineTypes<[_ZipFileAttributeView, java.nio.file.attribute.BasicFileAttributeView, java.lang.Object]> {}
        interface _ZipFileAttributeView$AttrID$$static extends ClassLike {
          valueOf(name: string): ZipFileAttributeView$AttrID;
          values(): ZipFileAttributeView$AttrID[];
          readonly compressedSize: ZipFileAttributeView$AttrID;
          readonly crc: ZipFileAttributeView$AttrID;
          readonly creationTime: ZipFileAttributeView$AttrID;
          readonly fileKey: ZipFileAttributeView$AttrID;
          readonly group: ZipFileAttributeView$AttrID;
          readonly isDirectory: ZipFileAttributeView$AttrID;
          readonly isOther: ZipFileAttributeView$AttrID;
          readonly isRegularFile: ZipFileAttributeView$AttrID;
          readonly isSymbolicLink: ZipFileAttributeView$AttrID;
          readonly lastAccessTime: ZipFileAttributeView$AttrID;
          readonly lastModifiedTime: ZipFileAttributeView$AttrID;
          readonly method: ZipFileAttributeView$AttrID;
          readonly owner: ZipFileAttributeView$AttrID;
          readonly permissions: ZipFileAttributeView$AttrID;
          readonly size: ZipFileAttributeView$AttrID;
        }
        let ZipFileAttributeView$AttrID: _ZipFileAttributeView$AttrID$$static;
        interface _ZipFileAttributeView$AttrID {
        }
        interface ZipFileAttributeView$AttrID extends CombineTypes<[_ZipFileAttributeView$AttrID]> {}
        interface _ZipFileAttributes$$static extends ClassLike {
        }
        let ZipFileAttributes: _ZipFileAttributes$$static;
        interface _ZipFileAttributes {
          comment(): byte[];
          compressedSize(): long;
          crc(): long;
          extra(): byte[];
          method(): int;
          storedPermissions(): java.util.Optional<java.util.Set<java.nio.file.attribute.PosixFilePermission>>;
        }
        interface ZipFileAttributes extends CombineTypes<[_ZipFileAttributes, java.lang.Object, java.nio.file.attribute.BasicFileAttributes]> {}
        interface _ZipFileStore$$static extends ClassLike {
          _new(zpath: ZipPath): ZipFileStore;
        }
        let ZipFileStore: _ZipFileStore$$static;
        interface _ZipFileStore {
          getAttribute(attribute: string): any;
          getFileStoreAttributeView<V>(type: java.lang.Class<V>): V;
          getTotalSpace(): long;
          getUnallocatedSpace(): long;
          getUsableSpace(): long;
          isReadOnly(): boolean;
          name(): string;
          supportsFileAttributeView(type: java.lang.Class<java.nio.file.attribute.FileAttributeView>): boolean;
          supportsFileAttributeView(name: string): boolean;
          type(): string;
          _zfs: ZipFileSystem;
        }
        interface ZipFileStore extends CombineTypes<[_ZipFileStore, java.nio.file.FileStore]> {}
        interface _ZipFileStore$ZipFileStoreAttributes$$static extends ClassLike {
          _new(fileStore: ZipFileStore): ZipFileStore$ZipFileStoreAttributes;
        }
        let ZipFileStore$ZipFileStoreAttributes: _ZipFileStore$ZipFileStoreAttributes$$static;
        interface _ZipFileStore$ZipFileStoreAttributes {
          _totalSpace(): long;
          _unallocatedSpace(): long;
          _usableSpace(): long;
          _fstore: java.nio.file.FileStore;
          _size: long;
        }
        interface ZipFileStore$ZipFileStoreAttributes extends CombineTypes<[_ZipFileStore$ZipFileStoreAttributes, java.lang.Object]> {}
        interface _ZipFileSystem$$static extends ClassLike {
          _getParent(path: byte[]): byte[];
          _getParentOff(path: byte[]): int;
          _isTrue(env: java.util.Map<string,any>, name: string): boolean;
          _COMPRESSION_METHOD_DEFLATED: string;
          _COMPRESSION_METHOD_STORED: string;
          _DEFAULT_PERMISSIONS: java.util.Set<java.nio.file.attribute.PosixFilePermission>;
          _GLOB_SYNTAX: string;
          _PROPERTY_COMPRESSION_METHOD: string;
          _PROPERTY_DEFAULT_GROUP: string;
          _PROPERTY_DEFAULT_OWNER: string;
          _PROPERTY_DEFAULT_PERMISSIONS: string;
          _PROPERTY_MULTI_RELEASE: string;
          _PROPERTY_POSIX: string;
          _PROPERTY_RELEASE_VERSION: string;
          _REGEX_SYNTAX: string;
          _ROOTPATH: byte[];
          _isWindows: boolean;
          _new(provider: ZipFileSystemProvider, zfpath: java.nio.file.Path, env: java.util.Map<string,any>): ZipFileSystem;
        }
        let ZipFileSystem: _ZipFileSystem$$static;
        interface _ZipFileSystem {
          _beginRead(): void;
          _beginWrite(): void;
          _buildNodeTree(): void;
          _checkAccess(path: byte[]): void;
          _checkEncoding(a: byte[]): void;
          _checkOptions(options: java.util.Set<java.nio.file.OpenOption>): void;
          _checkParents(path: byte[]): void;
          _checkUTF8(a: byte[]): void;
          _checkWritable(): void;
          close(): void;
          _copyFile(deletesrc: boolean, src: byte[], dst: byte[], options: java.nio.file.CopyOption[]): void;
          _copyFile(deletesrc: boolean, src: byte[], dst: byte[], ...options: java.nio.file.CopyOption[]): void;
          _copyLOCEntry(e: ZipFileSystem$Entry, updateHeader: boolean, os: java.io.OutputStream, written: long, a4: byte[]): long;
          _createDirectory(dir: byte[], attrs: java.nio.file.attribute.FileAttribute<any>[]): void;
          _createDirectory(dir: byte[], ...attrs: java.nio.file.attribute.FileAttribute<any>[]): void;
          _createTempFileInSameDirectoryAs(path: java.nio.file.Path): java.nio.file.Path;
          _createVersionedLinks(version: int): void;
          deleteFile(path: byte[], failIfNotExists: boolean): void;
          _endRead(): void;
          _endWrite(): void;
          _ensureOpen(): void;
          _exists(path: byte[]): boolean;
          _finalize(): void;
          _findEND(): ZipFileSystem$END;
          _getBytes(name: string): byte[];
          _getDefaultCompressionMethod(env: java.util.Map<string,any>): int;
          _getDeflater(): java.util.zip.Deflater;
          _getEntry(path: byte[]): ZipFileSystem$Entry;
          _getFileAttributes(path: byte[]): ZipFileAttributes;
          _getFileStore(path: ZipPath): java.nio.file.FileStore;
          getFileStores(): java.lang.Iterable<java.nio.file.FileStore>;
          _getInflater(): java.util.zip.Inflater;
          _getInode(path: byte[]): ZipFileSystem$IndexNode;
          _getInputStream(e: ZipFileSystem$Entry): java.io.InputStream;
          _getOrCreateInode(path: byte[], isdir: boolean): ZipFileSystem$IndexNode;
          _getOutputStream(e: ZipFileSystem$Entry): java.io.OutputStream;
          getPath(first: string, more: string[]): ZipPath;
          getPath(first: string, ...more: string[]): ZipPath;
          getPath(a0: string, a1: string[]): java.nio.file.Path;
          getPathMatcher(syntaxAndInput: string): java.nio.file.PathMatcher;
          _getPosixAttributes(path: java.nio.file.Path): java.nio.file.attribute.PosixFileAttributes;
          _getRootDir(): ZipPath;
          getRootDirectories(): java.lang.Iterable<java.nio.file.Path>;
          _getRootName(inode: ZipFileSystem$IndexNode, prefix: ZipFileSystem$IndexNode): byte[];
          getSeparator(): string;
          _getString(name: byte[]): string;
          _getTempPathForEntry(path: byte[]): java.nio.file.Path;
          getUserPrincipalLookupService(): java.nio.file.attribute.UserPrincipalLookupService;
          _getVersion(inode: ZipFileSystem$IndexNode, metaInfVersions: ZipFileSystem$IndexNode): int;
          _getVersionMap(version: int, metaInfVersions: ZipFileSystem$IndexNode): java.util.TreeMap<int,ZipFileSystem$IndexNode>;
          _getZipFile(): java.nio.file.Path;
          _initCEN(): byte[];
          _initGroup(zfpath: java.nio.file.Path, env: java.util.Map<string,any>): java.nio.file.attribute.GroupPrincipal;
          _initOwner(zfpath: java.nio.file.Path, env: java.util.Map<string,any>): java.nio.file.attribute.UserPrincipal;
          _initPermissions(env: java.util.Map<string,any>): java.util.Set<java.nio.file.attribute.PosixFilePermission>;
          _initializeReleaseVersion(env: java.util.Map<string,any>): void;
          _isDirectory(path: byte[]): boolean;
          _isMultiReleaseJar(): boolean;
          isOpen(): boolean;
          isReadOnly(): boolean;
          _iteratorOf(dir: ZipPath, filter: java.nio.file.DirectoryStream$Filter<java.nio.file.Path>): java.util.Iterator<java.nio.file.Path>;
          _lookupPath(resolvedPath: byte[]): byte[];
          _makeParentDirs(node: ZipFileSystem$IndexNode, root: ZipFileSystem$IndexNode): void;
          _newByteChannel(path: byte[], options: java.util.Set<java.nio.file.OpenOption>, attrs: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.SeekableByteChannel;
          _newByteChannel(path: byte[], options: java.util.Set<java.nio.file.OpenOption>, ...attrs: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.SeekableByteChannel;
          _newFileChannel(path: byte[], options: java.util.Set<java.nio.file.OpenOption>, attrs: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.FileChannel;
          _newFileChannel(path: byte[], options: java.util.Set<java.nio.file.OpenOption>, ...attrs: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.FileChannel;
          _newInputStream(path: byte[]): java.io.InputStream;
          _newOutputStream(path: byte[], options: java.nio.file.OpenOption[]): java.io.OutputStream;
          _newOutputStream(path: byte[], ...options: java.nio.file.OpenOption[]): java.io.OutputStream;
          newWatchService(): java.nio.file.WatchService;
          provider(): java.nio.file.spi.FileSystemProvider;
          _readFullyAt(buf: byte[], off: int, len: long, a3: long): long;
          _readFullyAt(bb: java.nio.ByteBuffer, pos: long): long;
          _releaseDeflater(def: java.util.zip.Deflater): void;
          _releaseInflater(inf: java.util.zip.Inflater): void;
          _removeFromTree(inode: ZipFileSystem$IndexNode): void;
          _removeTempPathForEntry(path: java.nio.file.Path): void;
          _setGroup(path: byte[], group: java.nio.file.attribute.GroupPrincipal): void;
          _setOwner(path: byte[], owner: java.nio.file.attribute.UserPrincipal): void;
          _setPermissions(path: byte[], perms: java.util.Set<java.nio.file.attribute.PosixFilePermission>): void;
          _setReadOnly(): void;
          _setTimes(path: byte[], mtime: java.nio.file.attribute.FileTime, atime: java.nio.file.attribute.FileTime, ctime: java.nio.file.attribute.FileTime): void;
          supportedFileAttributeViews(): java.util.Set<string>;
          _sync(): void;
          toString(): string;
          _update(e: ZipFileSystem$Entry): void;
          _updateDelete(inode: ZipFileSystem$IndexNode): void;
          _walk(inode: ZipFileSystem$IndexNode, consumer: java.util.function.Consumer<ZipFileSystem$IndexNode>): void;
          _writeEntry(e: ZipFileSystem$Entry, os: java.io.OutputStream): long;
          _writeTo(e: ZipFileSystem$Entry, os: java.io.OutputStream): void;
          _LOOKUPKEY: ZipFileSystem$IndexNode;
          _MAX_FLATER: int;
          _cen: byte[];
          _ch: java.nio.channels.SeekableByteChannel;
          _defaultCompressionMethod: int;
          _defaultGroup: java.nio.file.attribute.GroupPrincipal;
          _defaultOwner: java.nio.file.attribute.UserPrincipal;
          _defaultPermissions: java.util.Set<java.nio.file.attribute.PosixFilePermission>;
          _deflaters: java.util.List<java.util.zip.Deflater>;
          _end: ZipFileSystem$END;
          _entryLookup: java.util.function.Function<byte[],byte[]>;
          _forceEnd64: boolean;
          _hasUpdate: boolean;
          _inflaters: java.util.List<java.util.zip.Inflater>;
          _inodes: java.util.LinkedHashMap<ZipFileSystem$IndexNode,ZipFileSystem$IndexNode>;
          _isOpen: boolean;
          _locpos: long;
          _noExtt: boolean;
          _provider: ZipFileSystemProvider;
          _readOnly: boolean;
          _rootdir: ZipPath;
          _rwlock: java.util.concurrent.locks.ReadWriteLock;
          _streams: java.util.Set<java.io.InputStream>;
          _supportPosix: boolean;
          _supportedFileAttributeViews: java.util.Set<string>;
          _tempFileCreationThreshold: int;
          _tmppaths: java.util.Set<java.nio.file.Path>;
          _useTempFile: boolean;
          _zc: ZipCoder;
          _zfpath: java.nio.file.Path;
          _zfsDefaultTimeStamp: long;
        }
        interface ZipFileSystem extends CombineTypes<[_ZipFileSystem, java.nio.file.FileSystem]> {}
        interface _ZipFileSystem$DeflatingEntryOutputStream$$static extends ClassLike {
          _new(a0: ZipFileSystem, e: ZipFileSystem$Entry, os: java.io.OutputStream): ZipFileSystem$DeflatingEntryOutputStream;
        }
        let ZipFileSystem$DeflatingEntryOutputStream: _ZipFileSystem$DeflatingEntryOutputStream$$static;
        interface _ZipFileSystem$DeflatingEntryOutputStream {
          close(): void;
          write(b: byte[], off: int, len: int): void;
          _crc: java.util.zip.CRC32;
          _e: ZipFileSystem$Entry;
          _isClosed: boolean;
          _this$0: ZipFileSystem;
        }
        interface ZipFileSystem$DeflatingEntryOutputStream extends CombineTypes<[_ZipFileSystem$DeflatingEntryOutputStream, java.util.zip.DeflaterOutputStream]> {}
        interface _ZipFileSystem$END$$static extends ClassLike {
          _new(): ZipFileSystem$END;
        }
        let ZipFileSystem$END: _ZipFileSystem$END$$static;
        interface _ZipFileSystem$END {
          _write(os: java.io.OutputStream, offset: long, a2: boolean): void;
          _cenlen: long;
          _cenoff: long;
          _centot: int;
          _endpos: long;
        }
        interface ZipFileSystem$END extends CombineTypes<[_ZipFileSystem$END, java.lang.Object]> {}
        interface _ZipFileSystem$Entry$$static extends ClassLike {
          _isZip64ExtBlockSizeValid(blockSize: int): boolean;
          _CEN: int;
          _COPY: int;
          _FILECH: int;
          _NEW: int;
          _new(name: byte[], isdir: boolean, method: int): ZipFileSystem$Entry;
          _new(name: byte[], type: int, isdir: boolean, method: int, attrs: java.nio.file.attribute.FileAttribute<any>[]): ZipFileSystem$Entry;
          _new(name: byte[], type: int, isdir: boolean, method: int, ...attrs: java.nio.file.attribute.FileAttribute<any>[]): ZipFileSystem$Entry;
          _new(name: byte[], file: java.nio.file.Path, type: int, attrs: java.nio.file.attribute.FileAttribute<any>[]): ZipFileSystem$Entry;
          _new(name: byte[], file: java.nio.file.Path, type: int, ...attrs: java.nio.file.attribute.FileAttribute<any>[]): ZipFileSystem$Entry;
          _new(e: ZipFileSystem$Entry, type: int, compressionMethod: int): ZipFileSystem$Entry;
          _new(e: ZipFileSystem$Entry, type: int): ZipFileSystem$Entry;
          _new(zipfs: ZipFileSystem, inode: ZipFileSystem$IndexNode): ZipFileSystem$Entry;
        }
        let ZipFileSystem$Entry: _ZipFileSystem$Entry$$static;
        interface _ZipFileSystem$Entry {
          comment(): byte[];
          compressedSize(): long;
          crc(): long;
          creationTime(): java.nio.file.attribute.FileTime;
          extra(): byte[];
          fileKey(): any;
          isDirectory(): boolean;
          isOther(): boolean;
          isRegularFile(): boolean;
          isSymbolicLink(): boolean;
          lastAccessTime(): java.nio.file.attribute.FileTime;
          lastModifiedTime(): java.nio.file.attribute.FileTime;
          method(): int;
          _readCEN(zipfs: ZipFileSystem, inode: ZipFileSystem$IndexNode): void;
          _readExtra(zipfs: ZipFileSystem): void;
          _readLocEXTT(zipfs: ZipFileSystem): void;
          size(): long;
          storedPermissions(): java.util.Optional<java.util.Set<java.nio.file.attribute.PosixFilePermission>>;
          toString(): string;
          _version(zip64: boolean): int;
          _versionMadeBy(version: int): int;
          _writeCEN(os: java.io.OutputStream): int;
          _writeEXT(os: java.io.OutputStream): int;
          _writeLOC(os: java.io.OutputStream): int;
          _atime: long;
          _bytes: byte[];
          _comment: byte[];
          _crc: long;
          _csize: long;
          _ctime: long;
          _extra: byte[];
          _file: java.nio.file.Path;
          _flag: int;
          _locoff: long;
          _method: int;
          _mtime: long;
          _posixPerms: int;
          _size: long;
          _type: int;
          _version: int;
        }
        interface ZipFileSystem$Entry extends CombineTypes<[_ZipFileSystem$Entry, jdk.nio.zipfs.ZipFileSystem$IndexNode, jdk.nio.zipfs.ZipFileAttributes]> {}
        interface _ZipFileSystem$EntryInputStream$$static extends ClassLike {
          _new(a0: ZipFileSystem, e: ZipFileSystem$Entry): ZipFileSystem$EntryInputStream;
        }
        let ZipFileSystem$EntryInputStream: _ZipFileSystem$EntryInputStream$$static;
        interface _ZipFileSystem$EntryInputStream {
          available(): int;
          close(): void;
          _initDataPos(): void;
          read(b: byte[], off: int, len: int): int;
          read(): int;
          skip(n: long): long;
          _pos: long;
          _rem: long;
          _this$0: ZipFileSystem;
        }
        interface ZipFileSystem$EntryInputStream extends CombineTypes<[_ZipFileSystem$EntryInputStream, java.io.InputStream]> {}
        interface _ZipFileSystem$EntryOutputChannel$$static extends ClassLike {
          _new(a0: ZipFileSystem, e: ZipFileSystem$Entry): ZipFileSystem$EntryOutputChannel;
        }
        let ZipFileSystem$EntryOutputChannel: _ZipFileSystem$EntryOutputChannel$$static;
        interface _ZipFileSystem$EntryOutputChannel {
          close(): void;
          _e: ZipFileSystem$Entry;
          _this$0: ZipFileSystem;
        }
        interface ZipFileSystem$EntryOutputChannel extends CombineTypes<[_ZipFileSystem$EntryOutputChannel, jdk.nio.zipfs.ByteArrayChannel]> {}
        interface _ZipFileSystem$EntryOutputStream$$static extends ClassLike {
          _new(a0: ZipFileSystem, e: ZipFileSystem$Entry, os: java.io.OutputStream): ZipFileSystem$EntryOutputStream;
        }
        let ZipFileSystem$EntryOutputStream: _ZipFileSystem$EntryOutputStream$$static;
        interface _ZipFileSystem$EntryOutputStream {
          close(): void;
          write(b: int): void;
          write(b: byte[], off: int, len: int): void;
          _e: ZipFileSystem$Entry;
          _isClosed: boolean;
          _this$0: ZipFileSystem;
          _written: long;
        }
        interface ZipFileSystem$EntryOutputStream extends CombineTypes<[_ZipFileSystem$EntryOutputStream, java.io.FilterOutputStream]> {}
        interface _ZipFileSystem$EntryOutputStreamCRC32$$static extends ClassLike {
          _new(a0: ZipFileSystem, e: ZipFileSystem$Entry, os: java.io.OutputStream): ZipFileSystem$EntryOutputStreamCRC32;
        }
        let ZipFileSystem$EntryOutputStreamCRC32: _ZipFileSystem$EntryOutputStreamCRC32$$static;
        interface _ZipFileSystem$EntryOutputStreamCRC32 {
          close(): void;
          write(b: int): void;
          write(b: byte[], off: int, len: int): void;
          _crc: java.util.zip.CRC32;
          _e: ZipFileSystem$Entry;
          _isClosed: boolean;
          _written: long;
        }
        interface ZipFileSystem$EntryOutputStreamCRC32 extends CombineTypes<[_ZipFileSystem$EntryOutputStreamCRC32, java.io.FilterOutputStream]> {}
        interface _ZipFileSystem$EntryOutputStreamDef$$static extends ClassLike {
          _new(a0: ZipFileSystem, e: ZipFileSystem$Entry, os: java.io.OutputStream): ZipFileSystem$EntryOutputStreamDef;
        }
        let ZipFileSystem$EntryOutputStreamDef: _ZipFileSystem$EntryOutputStreamDef$$static;
        interface _ZipFileSystem$EntryOutputStreamDef {
          close(): void;
          write(b: byte[], off: int, len: int): void;
          _crc: java.util.zip.CRC32;
          _e: ZipFileSystem$Entry;
          _isClosed: boolean;
          _this$0: ZipFileSystem;
        }
        interface ZipFileSystem$EntryOutputStreamDef extends CombineTypes<[_ZipFileSystem$EntryOutputStreamDef, java.util.zip.DeflaterOutputStream]> {}
        interface _ZipFileSystem$FileRolloverOutputStream$$static extends ClassLike {
        }
        let ZipFileSystem$FileRolloverOutputStream: _ZipFileSystem$FileRolloverOutputStream$$static;
        interface _ZipFileSystem$FileRolloverOutputStream {
          close(): void;
          flush(): void;
          _toByteArray(): byte[];
          _transferToFile(): void;
          write(b: int): void;
          write(b: byte[]): void;
          write(b: byte[], off: int, len: int): void;
          _writeToFile(b: int): void;
          _writeToFile(b: byte[], off: int, len: int): void;
          _baos: java.io.ByteArrayOutputStream;
          _entry: ZipFileSystem$Entry;
          _this$0: ZipFileSystem;
          _tmpFileOS: java.io.OutputStream;
          _totalWritten: long;
        }
        interface ZipFileSystem$FileRolloverOutputStream extends CombineTypes<[_ZipFileSystem$FileRolloverOutputStream, java.io.OutputStream]> {}
        interface _ZipFileSystem$IndexNode$$static extends ClassLike {
          _keyOf(name: byte[]): ZipFileSystem$IndexNode;
          _cachedKey: java.lang.ThreadLocal<ZipFileSystem$IndexNode>;
          _new(): ZipFileSystem$IndexNode;
          _new(name: byte[], isdir: boolean): ZipFileSystem$IndexNode;
          _new(name: byte[], pos: int): ZipFileSystem$IndexNode;
          _new(cen: byte[], pos: int, nlen: int): ZipFileSystem$IndexNode;
        }
        let ZipFileSystem$IndexNode: _ZipFileSystem$IndexNode$$static;
        interface _ZipFileSystem$IndexNode {
          _as(name: byte[]): ZipFileSystem$IndexNode;
          equals(other: any): boolean;
          hashCode(): int;
          _isDir(): boolean;
          _name(name: byte[]): void;
          _nameAsString(): string;
          _normalize(path: byte[]): byte[];
          _normalize(path: byte[], off: int): byte[];
          _pathHasDotOrDotDot(): boolean;
          toString(): string;
          _child: ZipFileSystem$IndexNode;
          _hashcode: int;
          _isdir: boolean;
          _name: byte[];
          _pos: int;
          _sibling: ZipFileSystem$IndexNode;
        }
        interface ZipFileSystem$IndexNode extends CombineTypes<[_ZipFileSystem$IndexNode, java.lang.Object]> {}
        interface _ZipFileSystem$ParentLookup$$static extends ClassLike {
          _new(): ZipFileSystem$ParentLookup;
        }
        let ZipFileSystem$ParentLookup: _ZipFileSystem$ParentLookup$$static;
        interface _ZipFileSystem$ParentLookup {
          _as(name: byte[], len: int): ZipFileSystem$ParentLookup;
          equals(other: any): boolean;
          _name(name: byte[], len: int): void;
          _len: int;
        }
        interface ZipFileSystem$ParentLookup extends CombineTypes<[_ZipFileSystem$ParentLookup, jdk.nio.zipfs.ZipFileSystem$IndexNode]> {}
        interface _ZipFileSystem$PosixEntry$$static extends ClassLike {
          _new(this$0: ZipFileSystem, name: byte[], isdir: boolean, method: int): ZipFileSystem$PosixEntry;
          _new(this$0: byte[], name: int, type: boolean, isdir: int, method: java.nio.file.attribute.FileAttribute<any>[]): ZipFileSystem$PosixEntry;
          _new(this$0: byte[], name: int, type: boolean, isdir: int, ...method: java.nio.file.attribute.FileAttribute<any>[]): ZipFileSystem$PosixEntry;
          _new(this$0: byte[], name: java.nio.file.Path, file: int, type: java.nio.file.attribute.FileAttribute<any>[]): ZipFileSystem$PosixEntry;
          _new(this$0: byte[], name: java.nio.file.Path, file: int, ...type: java.nio.file.attribute.FileAttribute<any>[]): ZipFileSystem$PosixEntry;
          _new(this$0: ZipFileSystem, e: ZipFileSystem$PosixEntry, type: int, compressionMethod: int): ZipFileSystem$PosixEntry;
          _new(this$0: ZipFileSystem, e: ZipFileSystem$PosixEntry, type: int): ZipFileSystem$PosixEntry;
          _new(this$0: ZipFileSystem, zipfs: ZipFileSystem, inode: ZipFileSystem$IndexNode): ZipFileSystem$PosixEntry;
        }
        let ZipFileSystem$PosixEntry: _ZipFileSystem$PosixEntry$$static;
        interface _ZipFileSystem$PosixEntry {
          group(): java.nio.file.attribute.GroupPrincipal;
          owner(): java.nio.file.attribute.UserPrincipal;
          permissions(): java.util.Set<java.nio.file.attribute.PosixFilePermission>;
          _group: java.nio.file.attribute.GroupPrincipal;
          _owner: java.nio.file.attribute.UserPrincipal;
          _this$0: ZipFileSystem;
        }
        interface ZipFileSystem$PosixEntry extends CombineTypes<[_ZipFileSystem$PosixEntry, jdk.nio.zipfs.ZipFileSystem$Entry, java.nio.file.attribute.PosixFileAttributes]> {}
        interface _ZipFileSystemProvider$$static extends ClassLike {
          _toZipPath(path: java.nio.file.Path): ZipPath;
          new(): ZipFileSystemProvider;
        }
        let ZipFileSystemProvider: _ZipFileSystemProvider$$static;
        interface _ZipFileSystemProvider {
          checkAccess(path: java.nio.file.Path, modes: java.nio.file.AccessMode[]): void;
          checkAccess(path: java.nio.file.Path, ...modes: java.nio.file.AccessMode[]): void;
          copy(src: java.nio.file.Path, target: java.nio.file.Path, options: java.nio.file.CopyOption[]): void;
          copy(src: java.nio.file.Path, target: java.nio.file.Path, ...options: java.nio.file.CopyOption[]): void;
          createDirectory(path: java.nio.file.Path, attrs: java.nio.file.attribute.FileAttribute<any>[]): void;
          createDirectory(path: java.nio.file.Path, ...attrs: java.nio.file.attribute.FileAttribute<any>[]): void;
          delete(path: java.nio.file.Path): void;
          _ensureFile(path: java.nio.file.Path): boolean;
          exists(path: java.nio.file.Path, options: java.nio.file.LinkOption[]): boolean;
          exists(path: java.nio.file.Path, ...options: java.nio.file.LinkOption[]): boolean;
          getFileAttributeView<V>(path: java.nio.file.Path, type: java.lang.Class<V>, options: java.nio.file.LinkOption[]): V;
          getFileAttributeView<V>(path: java.nio.file.Path, type: java.lang.Class<V>, ...options: java.nio.file.LinkOption[]): V;
          getFileStore(path: java.nio.file.Path): java.nio.file.FileStore;
          getFileSystem(uri: java.net.URI): java.nio.file.FileSystem;
          getPath(uri: java.net.URI): java.nio.file.Path;
          getScheme(): string;
          _getZipFileSystem(path: java.nio.file.Path, env: java.util.Map<string,any>): ZipFileSystem;
          isHidden(path: java.nio.file.Path): boolean;
          isSameFile(path: java.nio.file.Path, other: java.nio.file.Path): boolean;
          move(src: java.nio.file.Path, target: java.nio.file.Path, options: java.nio.file.CopyOption[]): void;
          move(src: java.nio.file.Path, target: java.nio.file.Path, ...options: java.nio.file.CopyOption[]): void;
          newAsynchronousFileChannel(path: java.nio.file.Path, options: java.util.Set<java.nio.file.OpenOption>, exec: java.util.concurrent.ExecutorService, attrs: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.AsynchronousFileChannel;
          newAsynchronousFileChannel(path: java.nio.file.Path, options: java.util.Set<java.nio.file.OpenOption>, exec: java.util.concurrent.ExecutorService, ...attrs: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.AsynchronousFileChannel;
          newByteChannel(path: java.nio.file.Path, options: java.util.Set<java.nio.file.OpenOption>, attrs: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.SeekableByteChannel;
          newByteChannel(path: java.nio.file.Path, options: java.util.Set<java.nio.file.OpenOption>, ...attrs: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.SeekableByteChannel;
          newDirectoryStream(path: java.nio.file.Path, filter: java.nio.file.DirectoryStream$Filter<java.nio.file.Path>): java.nio.file.DirectoryStream<java.nio.file.Path>;
          newFileChannel(path: java.nio.file.Path, options: java.util.Set<java.nio.file.OpenOption>, attrs: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.FileChannel;
          newFileChannel(path: java.nio.file.Path, options: java.util.Set<java.nio.file.OpenOption>, ...attrs: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.FileChannel;
          newFileSystem(uri: java.net.URI, env: java.util.Map<string,any>): java.nio.file.FileSystem;
          newFileSystem(path: java.nio.file.Path, env: java.util.Map<string,any>): java.nio.file.FileSystem;
          newInputStream(path: java.nio.file.Path, options: java.nio.file.OpenOption[]): java.io.InputStream;
          newInputStream(path: java.nio.file.Path, ...options: java.nio.file.OpenOption[]): java.io.InputStream;
          newOutputStream(path: java.nio.file.Path, options: java.nio.file.OpenOption[]): java.io.OutputStream;
          newOutputStream(path: java.nio.file.Path, ...options: java.nio.file.OpenOption[]): java.io.OutputStream;
          readAttributes<A>(path: java.nio.file.Path, type: java.lang.Class<A>, options: java.nio.file.LinkOption[]): A;
          readAttributes<A>(path: java.nio.file.Path, type: java.lang.Class<A>, ...options: java.nio.file.LinkOption[]): A;
          readAttributes(path: java.nio.file.Path, attributes: string, options: java.nio.file.LinkOption[]): java.util.Map<string,any>;
          readAttributes(path: java.nio.file.Path, attributes: string, ...options: java.nio.file.LinkOption[]): java.util.Map<string,any>;
          readAttributesIfExists<A>(path: java.nio.file.Path, type: java.lang.Class<A>, options: java.nio.file.LinkOption[]): A;
          readAttributesIfExists<A>(path: java.nio.file.Path, type: java.lang.Class<A>, ...options: java.nio.file.LinkOption[]): A;
          readSymbolicLink(link: java.nio.file.Path): java.nio.file.Path;
          _removeFileSystem(zfpath: java.nio.file.Path, zfs: ZipFileSystem): void;
          setAttribute(path: java.nio.file.Path, attribute: string, value: any, options: java.nio.file.LinkOption[]): void;
          setAttribute(path: java.nio.file.Path, attribute: string, value: any, ...options: java.nio.file.LinkOption[]): void;
          _uriToPath(uri: java.net.URI): java.nio.file.Path;
          _filesystems: java.util.Map<java.nio.file.Path,ZipFileSystem>;
        }
        interface ZipFileSystemProvider extends CombineTypes<[_ZipFileSystemProvider, java.nio.file.spi.FileSystemProvider]> {}
        interface _ZipInfo$$static extends ClassLike {
          _locoff(cen: byte[], pos: int): long;
          main(args: string[]): void;
          _print(fmt: string, objs: any[]): void;
          _print(fmt: string, ...objs: any[]): void;
          _printCEN(cen: byte[], off: int): void;
          _printExtra(extra: byte[], off: int, len: int): void;
          _printLOC(loc: byte[]): void;
          new(): ZipInfo;
        }
        let ZipInfo: _ZipInfo$$static;
        interface _ZipInfo {
        }
        interface ZipInfo extends CombineTypes<[_ZipInfo, java.lang.Object]> {}
        interface _ZipPath$$static extends ClassLike {
          _decode(c: char): int;
          _decodeUri(s: string): string;
          _new(zfs: ZipFileSystem, path: byte[]): ZipPath;
          _new(zfs: ZipFileSystem, path: byte[], normalized: boolean): ZipPath;
          _new(zfs: ZipFileSystem, path: string): ZipPath;
        }
        let ZipPath: _ZipPath$$static;
        interface _ZipPath {
          _checkAccess(modes: java.nio.file.AccessMode[]): void;
          _checkAccess(...modes: java.nio.file.AccessMode[]): void;
          _checkPath(path: java.nio.file.Path): ZipPath;
          compareTo(other: java.nio.file.Path): int;
          compareTo(a0: any): int;
          _copy(target: ZipPath, options: java.nio.file.CopyOption[]): void;
          _copy(target: ZipPath, ...options: java.nio.file.CopyOption[]): void;
          _copyToTarget(target: ZipPath, options: java.nio.file.CopyOption[]): void;
          _copyToTarget(target: ZipPath, ...options: java.nio.file.CopyOption[]): void;
          _createDirectory(attrs: java.nio.file.attribute.FileAttribute<any>[]): void;
          _createDirectory(...attrs: java.nio.file.attribute.FileAttribute<any>[]): void;
          _delete(): void;
          _deleteIfExists(): void;
          endsWith(other: java.nio.file.Path): boolean;
          endsWith(other: string): boolean;
          equals(obj: any): boolean;
          _equalsNameAt(other: ZipPath, index: int): boolean;
          _exists(): boolean;
          _getFileAttributeView<V>(type: java.lang.Class<V>): V;
          _getFileAttributeView(type: string): ZipFileAttributeView;
          getFileName(): ZipPath;
          getFileName(): java.nio.file.Path;
          _getFileStore(): java.nio.file.FileStore;
          getFileSystem(): ZipFileSystem;
          getFileSystem(): java.nio.file.FileSystem;
          getName(index: int): ZipPath;
          getName(a0: int): java.nio.file.Path;
          getNameCount(): int;
          getParent(): ZipPath;
          getParent(): java.nio.file.Path;
          _getRealPath(): string;
          _getResolved(): byte[];
          _getResolvedPath(): byte[];
          getRoot(): ZipPath;
          getRoot(): java.nio.file.Path;
          hashCode(): int;
          _initOffsets(): void;
          isAbsolute(): boolean;
          _isHidden(): boolean;
          _isSameFile(other: java.nio.file.Path): boolean;
          iterator(): java.util.Iterator<java.nio.file.Path>;
          _move(target: ZipPath, options: java.nio.file.CopyOption[]): void;
          _move(target: ZipPath, ...options: java.nio.file.CopyOption[]): void;
          _newByteChannel(options: java.util.Set<java.nio.file.OpenOption>, attrs: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.SeekableByteChannel;
          _newByteChannel(options: java.util.Set<java.nio.file.OpenOption>, ...attrs: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.SeekableByteChannel;
          _newDirectoryStream(filter: java.nio.file.DirectoryStream$Filter<java.nio.file.Path>): java.nio.file.DirectoryStream<java.nio.file.Path>;
          _newFileChannel(options: java.util.Set<java.nio.file.OpenOption>, attrs: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.FileChannel;
          _newFileChannel(options: java.util.Set<java.nio.file.OpenOption>, ...attrs: java.nio.file.attribute.FileAttribute<any>[]): java.nio.channels.FileChannel;
          _newInputStream(options: java.nio.file.OpenOption[]): java.io.InputStream;
          _newInputStream(...options: java.nio.file.OpenOption[]): java.io.InputStream;
          _newOutputStream(options: java.nio.file.OpenOption[]): java.io.OutputStream;
          _newOutputStream(...options: java.nio.file.OpenOption[]): java.io.OutputStream;
          normalize(): java.nio.file.Path;
          _normalize(path: byte[]): byte[];
          _normalize(path: byte[], off: int): byte[];
          _normalize(path: string): byte[];
          _normalize(path: string, off: int, len: int): byte[];
          _readAttributes(): ZipFileAttributes;
          _readAttributes<A>(type: java.lang.Class<A>): A;
          _readAttributes(attributes: string, options: java.nio.file.LinkOption[]): java.util.Map<string,any>;
          _readAttributes(attributes: string, ...options: java.nio.file.LinkOption[]): java.util.Map<string,any>;
          _readAttributesIfExists(): ZipFileAttributes;
          register(watcher: java.nio.file.WatchService, events: java.nio.file.WatchEvent$Kind<any>[], modifiers: java.nio.file.WatchEvent$Modifier[]): java.nio.file.WatchKey;
          register(watcher: java.nio.file.WatchService, events: java.nio.file.WatchEvent$Kind<any>[], ...modifiers: java.nio.file.WatchEvent$Modifier[]): java.nio.file.WatchKey;
          register(watcher: java.nio.file.WatchService, events: java.nio.file.WatchEvent$Kind<any>[]): java.nio.file.WatchKey;
          register(watcher: java.nio.file.WatchService, ...events: java.nio.file.WatchEvent$Kind<any>[]): java.nio.file.WatchKey;
          relativize(other: java.nio.file.Path): java.nio.file.Path;
          resolve(other: java.nio.file.Path): ZipPath;
          _resolve(opath: byte[]): ZipPath;
          resolve(other: string): ZipPath;
          resolve(a0: string): java.nio.file.Path;
          resolve(a0: java.nio.file.Path): java.nio.file.Path;
          _resolve0(): byte[];
          resolveSibling(other: java.nio.file.Path): java.nio.file.Path;
          resolveSibling(other: string): java.nio.file.Path;
          _setAttribute(attribute: string, value: any, options: java.nio.file.LinkOption[]): void;
          _setAttribute(attribute: string, value: any, ...options: java.nio.file.LinkOption[]): void;
          _setGroup(group: java.nio.file.attribute.GroupPrincipal): void;
          _setOwner(owner: java.nio.file.attribute.UserPrincipal): void;
          _setPermissions(perms: java.util.Set<java.nio.file.attribute.PosixFilePermission>): void;
          _setTimes(mtime: java.nio.file.attribute.FileTime, atime: java.nio.file.attribute.FileTime, ctime: java.nio.file.attribute.FileTime): void;
          startsWith(other: java.nio.file.Path): boolean;
          startsWith(other: string): boolean;
          subpath(beginIndex: int, endIndex: int): ZipPath;
          subpath(a0: int, a1: int): java.nio.file.Path;
          toAbsolutePath(): ZipPath;
          toAbsolutePath(): java.nio.file.Path;
          toFile(): java.io.File;
          toRealPath(options: java.nio.file.LinkOption[]): ZipPath;
          toRealPath(...options: java.nio.file.LinkOption[]): ZipPath;
          toRealPath(a0: java.nio.file.LinkOption[]): java.nio.file.Path;
          toString(): string;
          toUri(): java.net.URI;
          _hashcode: int;
          _offsets: int[];
          _path: byte[];
          _resolved: byte[];
          _zfs: ZipFileSystem;
        }
        interface ZipPath extends CombineTypes<[_ZipPath, java.lang.Object, java.nio.file.Path]> {}
        interface _ZipPosixFileAttributeView$$static extends ClassLike {
          _new(path: ZipPath, owner: boolean): ZipPosixFileAttributeView;
        }
        let ZipPosixFileAttributeView: _ZipPosixFileAttributeView$$static;
        interface _ZipPosixFileAttributeView {
          _attribute(id: ZipFileAttributeView$AttrID, zfas: ZipFileAttributes): any;
          getOwner(): java.nio.file.attribute.UserPrincipal;
          name(): string;
          readAttributes(): java.nio.file.attribute.PosixFileAttributes;
          readAttributes(): java.nio.file.attribute.BasicFileAttributes;
          setGroup(group: java.nio.file.attribute.GroupPrincipal): void;
          setOwner(owner: java.nio.file.attribute.UserPrincipal): void;
          _isOwnerView: boolean;
        }
        interface ZipPosixFileAttributeView extends CombineTypes<[_ZipPosixFileAttributeView, jdk.nio.zipfs.ZipFileAttributeView, java.nio.file.attribute.PosixFileAttributeView]> {}
        interface _ZipUtils$$static extends ClassLike {
          dosToJavaTime(dtime: long): long;
          _isGlobMeta(c: char): boolean;
          _isRegexMeta(c: char): boolean;
          javaToDosTime(time: long): long;
          javaToUnixTime(time: long): long;
          javaToWinTime(time: long): long;
          _next(glob: string, i: int): char;
          _overflowDosToJavaTime(year: int, month: int, day: int, hour: int, minute: int, second: int): long;
          _permToFlag(perm: java.nio.file.attribute.PosixFilePermission): int;
          _permsToFlags(perms: java.util.Set<java.nio.file.attribute.PosixFilePermission>): int;
          toDirectoryPath(dir: byte[]): byte[];
          toRegexPattern(globPattern: string): string;
          unixToJavaTime(utime: long): long;
          winToJavaTime(wtime: long): long;
          writeBytes(os: java.io.OutputStream, b: byte[]): void;
          writeBytes(os: java.io.OutputStream, b: byte[], off: int, len: int): void;
          writeInt(os: java.io.OutputStream, v: long): void;
          writeLong(os: java.io.OutputStream, v: long): void;
          writeShort(os: java.io.OutputStream, v: int): void;
          _EOL: char;
          _POSIX_GROUP_EXECUTE: int;
          _POSIX_GROUP_READ: int;
          _POSIX_GROUP_WRITE: int;
          _POSIX_OTHER_EXECUTE: int;
          _POSIX_OTHER_READ: int;
          _POSIX_OTHER_WRITE: int;
          _POSIX_USER_EXECUTE: int;
          _POSIX_USER_READ: int;
          _POSIX_USER_WRITE: int;
          _WINDOWS_EPOCH_IN_MICROSECONDS: long;
          _globMetaChars: string;
          _regexMetaChars: string;
          _new(): ZipUtils;
        }
        let ZipUtils: _ZipUtils$$static;
        interface _ZipUtils {
        }
        interface ZipUtils extends CombineTypes<[_ZipUtils, java.lang.Object]> {}
      }
    }
  }
}
