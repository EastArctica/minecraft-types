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
    module tools {
      module jimage {
        module resources {
          interface _jimage$$static extends ClassLike {
            new(): jimage;
          }
          let jimage: _jimage$$static;
          interface _jimage {
            _getContents(): any[][];
          }
          interface jimage extends CombineTypes<[_jimage, java.util.ListResourceBundle]> {}
        }
        interface _JImageTask$$static extends ClassLike {
          _COMPRESSEDSIZE_WIDTH: int;
          _EXIT_ABNORMAL: int;
          _EXIT_CMDERR: int;
          _EXIT_ERROR: int;
          _EXIT_OK: int;
          _JRT_FILE_SYSTEM: java.nio.file.FileSystem;
          _OFFSET_WIDTH: int;
          _OPTION_HELPER: tools.jlink.internal.TaskHelper$OptionsHelper<JImageTask>;
          _PROGNAME: string;
          _RECOGNIZED_OPTIONS: tools.jlink.internal.TaskHelper$Option<any>[];
          _SIZE_WIDTH: int;
          _TASK_HELPER: tools.jlink.internal.TaskHelper;
          _new(): JImageTask;
        }
        let JImageTask: _JImageTask$$static;
        interface _JImageTask {
          _extract(reader: jdk.internal.jimage.BasicImageReader, name: string, location: jdk.internal.jimage.ImageLocation): void;
          _info(file: java.io.File, reader: jdk.internal.jimage.BasicImageReader): void;
          _iterate(jimageAction: JImageTask$JImageAction, moduleAction: JImageTask$ModuleAction, resourceAction: JImageTask$ResourceAction): void;
          _list(reader: jdk.internal.jimage.BasicImageReader, name: string, location: jdk.internal.jimage.ImageLocation): void;
          _listModule(reader: jdk.internal.jimage.BasicImageReader, oldModule: string, newModule: string): void;
          _listTitle(file: java.io.File, reader: jdk.internal.jimage.BasicImageReader): void;
          _pad(string: string, width: int, justifyRight: boolean): string;
          _pad(string: string, width: int): string;
          _pad(value: long, a1: int): string;
          _print(name: string, location: jdk.internal.jimage.ImageLocation): void;
          _print(reader: jdk.internal.jimage.BasicImageReader, name: string): void;
          _processInclude(include: string): void;
          _run(args: string[]): int;
          _run(): boolean;
          _setLog(out: java.io.PrintWriter): void;
          _trimModule(name: string): string;
          _verify(reader: jdk.internal.jimage.BasicImageReader, name: string, location: jdk.internal.jimage.ImageLocation): void;
          _includePredicates: java.util.List<java.util.function.Predicate<string>>;
          _log: java.io.PrintWriter;
          _options: JImageTask$OptionsValues;
        }
        interface JImageTask extends CombineTypes<[_JImageTask, java.lang.Object]> {}
        interface _JImageTask$JImageAction$$static extends ClassLike {
        }
        let JImageTask$JImageAction: _JImageTask$JImageAction$$static;
        interface _JImageTask$JImageAction {
          apply(a0: java.io.File, a1: jdk.internal.jimage.BasicImageReader): void;
(a0: java.io.File, a1: jdk.internal.jimage.BasicImageReader): void;
        }
        interface JImageTask$JImageAction extends CombineTypes<[_JImageTask$JImageAction, java.lang.Object]> {}
        interface _JImageTask$ModuleAction$$static extends ClassLike {
        }
        let JImageTask$ModuleAction: _JImageTask$ModuleAction$$static;
        interface _JImageTask$ModuleAction {
          apply(a0: jdk.internal.jimage.BasicImageReader, a1: string, a2: string): void;
(a0: jdk.internal.jimage.BasicImageReader, a1: string, a2: string): void;
        }
        interface JImageTask$ModuleAction extends CombineTypes<[_JImageTask$ModuleAction, java.lang.Object]> {}
        interface _JImageTask$OptionsValues$$static extends ClassLike {
          _new(): JImageTask$OptionsValues;
        }
        let JImageTask$OptionsValues: _JImageTask$OptionsValues$$static;
        interface _JImageTask$OptionsValues {
          _directory: string;
          _fullVersion: boolean;
          _help: boolean;
          _include: string;
          _jimages: java.util.List<java.io.File>;
          _task: JImageTask$Task;
          _verbose: boolean;
          _version: boolean;
        }
        interface JImageTask$OptionsValues extends CombineTypes<[_JImageTask$OptionsValues, java.lang.Object]> {}
        interface _JImageTask$ResourceAction$$static extends ClassLike {
        }
        let JImageTask$ResourceAction: _JImageTask$ResourceAction$$static;
        interface _JImageTask$ResourceAction {
          apply(a0: jdk.internal.jimage.BasicImageReader, a1: string, a2: jdk.internal.jimage.ImageLocation): void;
(a0: jdk.internal.jimage.BasicImageReader, a1: string, a2: jdk.internal.jimage.ImageLocation): void;
        }
        interface JImageTask$ResourceAction extends CombineTypes<[_JImageTask$ResourceAction, java.lang.Object]> {}
        interface _JImageTask$Task$$static extends ClassLike {
          valueOf(name: string): JImageTask$Task;
          values(): JImageTask$Task[];
          readonly EXTRACT: JImageTask$Task;
          readonly INFO: JImageTask$Task;
          readonly LIST: JImageTask$Task;
          readonly VERIFY: JImageTask$Task;
        }
        let JImageTask$Task: _JImageTask$Task$$static;
        interface _JImageTask$Task {
        }
        interface JImageTask$Task extends CombineTypes<[_JImageTask$Task]> {}
        interface _Main$$static extends ClassLike {
          main(args: string[]): void;
          run(args: string[], out: java.io.PrintWriter): int;
          new(): Main;
        }
        let Main: _Main$$static;
        interface _Main {
        }
        interface Main extends CombineTypes<[_Main, java.lang.Object]> {}
      }
      module jlink {
        module builder {
          interface _DefaultImageBuilder$$static extends ClassLike {
            _forEachPath(dir: java.nio.file.Path, matcher: java.util.function.BiPredicate<java.nio.file.Path,java.nio.file.attribute.BasicFileAttributes>, consumer: java.util.function.Consumer<java.nio.file.Path>): void;
            _patchScripts(img: jlink.internal.ExecutableImage, args: java.util.List<string>): void;
            readonly BIN_DIRNAME: string;
            readonly CONF_DIRNAME: string;
            readonly INCLUDE_DIRNAME: string;
            readonly LEGAL_DIRNAME: string;
            readonly LIB_DIRNAME: string;
            readonly MAN_DIRNAME: string;
            new(root: java.nio.file.Path, launchers: java.util.Map<string,string>): DefaultImageBuilder;
          }
          let DefaultImageBuilder: _DefaultImageBuilder$$static;
          interface _DefaultImageBuilder {
            _accept(file: jlink.plugin.ResourcePoolEntry): void;
            _checkDuplicateResources(pool: jlink.plugin.ResourcePool): void;
            _checkResourcePool(pool: jlink.plugin.ResourcePool): void;
            _entryToFileName(entry: jlink.plugin.ResourcePoolEntry): string;
            _entryToImagePath(entry: jlink.plugin.ResourcePoolEntry): java.nio.file.Path;
            getExecutableImage(): jlink.internal.ExecutableImage;
            getJImageOutputStream(): java.io.DataOutputStream;
            getTargetPlatform(): jlink.internal.Platform;
            _isWindows(): boolean;
            _nativeDir(filename: string): string;
            _prepareApplicationFiles(imageContent: jlink.plugin.ResourcePool): void;
            _setExecutable(file: java.nio.file.Path): void;
            _setReadOnly(file: java.nio.file.Path): void;
            storeFiles(files: jlink.plugin.ResourcePool): void;
            _writeEntry(_in: java.io.InputStream, dstFile: java.nio.file.Path): void;
            _writeSymLinkEntry(dstFile: java.nio.file.Path, target: java.nio.file.Path): void;
            _launchers: java.util.Map<string,string>;
            _mdir: java.nio.file.Path;
            _modules: java.util.Set<string>;
            _platform: jlink.internal.Platform;
            _root: java.nio.file.Path;
          }
          interface DefaultImageBuilder extends CombineTypes<[_DefaultImageBuilder, jdk.tools.jlink.builder.ImageBuilder, java.lang.Object]> {}
          interface _DefaultImageBuilder$DefaultExecutableImage$$static extends ClassLike {
            _createArgs(home: java.nio.file.Path): java.util.List<string>;
            _new(home: java.nio.file.Path, modules: java.util.Set<string>, p: jlink.internal.Platform): DefaultImageBuilder$DefaultExecutableImage;
          }
          let DefaultImageBuilder$DefaultExecutableImage: _DefaultImageBuilder$DefaultExecutableImage$$static;
          interface _DefaultImageBuilder$DefaultExecutableImage {
            getExecutionArgs(): java.util.List<string>;
            getHome(): java.nio.file.Path;
            getModules(): java.util.Set<string>;
            getTargetPlatform(): jlink.internal.Platform;
            storeLaunchArgs(args: java.util.List<string>): void;
            _args: java.util.List<string>;
            _home: java.nio.file.Path;
            _modules: java.util.Set<string>;
            _platform: jlink.internal.Platform;
          }
          interface DefaultImageBuilder$DefaultExecutableImage extends CombineTypes<[_DefaultImageBuilder$DefaultExecutableImage, jdk.tools.jlink.internal.ExecutableImage, java.lang.Object]> {}
          interface _ImageBuilder$$static extends ClassLike {
          }
          let ImageBuilder: _ImageBuilder$$static;
          interface _ImageBuilder {
            getExecutableImage(): jlink.internal.ExecutableImage;
            getJImageOutputStream(): java.io.DataOutputStream;
            getTargetPlatform(): jlink.internal.Platform;
            storeFiles(content: jlink.plugin.ResourcePool, release: java.util.Properties): void;
            storeFiles(content: jlink.plugin.ResourcePool): void;
          }
          interface ImageBuilder extends CombineTypes<[_ImageBuilder, java.lang.Object]> {}
        }
        module internal {
          module plugins {
            interface _AbstractPlugin$$static extends ClassLike {
              _DESCRIPTION: string;
              _USAGE: string;
              _standardPluginsBundle: java.util.ResourceBundle;
              _new(name: string): AbstractPlugin;
              _new(name: string, bundle: java.util.ResourceBundle): AbstractPlugin;
            }
            let AbstractPlugin: _AbstractPlugin$$static;
            interface _AbstractPlugin {
              _dumpClassFile(path: string, buf: byte[]): void;
              getArgumentsDescription(): string;
              getDescription(): string;
              _getMessage(key: string, args: any[]): string;
              _getMessage(key: string, ...args: any[]): string;
              getName(): string;
              getUsage(): string;
              _newClassReader(path: string, resource: jlink.plugin.ResourcePoolEntry, options: jdk.internal.classfile.Classfile$Option[]): jdk.internal.classfile.ClassModel;
              _newClassReader(path: string, resource: jlink.plugin.ResourcePoolEntry, ...options: jdk.internal.classfile.Classfile$Option[]): jdk.internal.classfile.ClassModel;
              _newClassReader(path: string, buf: byte[], options: jdk.internal.classfile.Classfile$Option[]): jdk.internal.classfile.ClassModel;
              _newClassReader(path: string, buf: byte[], ...options: jdk.internal.classfile.Classfile$Option[]): jdk.internal.classfile.ClassModel;
              _name: string;
              _pluginsBundle: java.util.ResourceBundle;
            }
            interface AbstractPlugin extends CombineTypes<[_AbstractPlugin, jdk.tools.jlink.plugin.Plugin, java.lang.Object]> {}
            interface _AddOptionsPlugin$$static extends ClassLike {
              new(): AddOptionsPlugin;
            }
            let AddOptionsPlugin: _AddOptionsPlugin$$static;
            interface _AddOptionsPlugin {
              configure(a0: java.util.Map): void;
              getType(): jlink.plugin.Plugin$Category;
              hasArguments(): boolean;
              hasRawArgument(): boolean;
              transform(a0: jlink.plugin.ResourcePool, a1: jlink.plugin.ResourcePoolBuilder): jlink.plugin.ResourcePool;
            }
            interface AddOptionsPlugin extends CombineTypes<[_AddOptionsPlugin, jdk.tools.jlink.internal.plugins.AddResourcePlugin]> {}
            interface _AddResourcePlugin$$static extends ClassLike {
              _new(name: string, p: string): AddResourcePlugin;
            }
            let AddResourcePlugin: _AddResourcePlugin$$static;
            interface _AddResourcePlugin {
              configure(config: java.util.Map<string,string>): void;
              getType(): jlink.plugin.Plugin$Category;
              hasArguments(): boolean;
              hasRawArgument(): boolean;
              transform(_in: jlink.plugin.ResourcePool, out: jlink.plugin.ResourcePoolBuilder): jlink.plugin.ResourcePool;
              _path: string;
              _value: string;
            }
            interface AddResourcePlugin extends CombineTypes<[_AddResourcePlugin, jdk.tools.jlink.internal.plugins.AbstractPlugin]> {}
            interface _CDSPlugin$$static extends ClassLike {
              _NAME: string;
              new(): CDSPlugin;
            }
            let CDSPlugin: _CDSPlugin$$static;
            interface _CDSPlugin {
              _generateCDSArchive(image: ExecutableImage, noCoops: boolean): void;
              getType(): jlink.plugin.Plugin$Category;
              _javaExecutableName(): string;
              process(image: ExecutableImage): java.util.List<string>;
              transform(_in: jlink.plugin.ResourcePool, out: jlink.plugin.ResourcePoolBuilder): jlink.plugin.ResourcePool;
              _runtimePlatform: Platform;
              _targetPlatform: Platform;
            }
            interface CDSPlugin extends CombineTypes<[_CDSPlugin, jdk.tools.jlink.internal.plugins.AbstractPlugin, jdk.tools.jlink.internal.PostProcessor]> {}
            interface _DefaultCompressPlugin$$static extends ClassLike {
              readonly FILTER: string;
              readonly LEVEL_0: string;
              readonly LEVEL_1: string;
              readonly LEVEL_2: string;
              new(): DefaultCompressPlugin;
            }
            let DefaultCompressPlugin: _DefaultCompressPlugin$$static;
            interface _DefaultCompressPlugin {
              configure(config: java.util.Map<string,string>): void;
              getType(): jlink.plugin.Plugin$Category;
              hasArguments(): boolean;
              previsit(resources: jlink.plugin.ResourcePool, strings: StringTable): void;
              transform(_in: jlink.plugin.ResourcePool, out: jlink.plugin.ResourcePoolBuilder): jlink.plugin.ResourcePool;
              _ss: StringSharingPlugin;
              _zip: ZipPlugin;
            }
            interface DefaultCompressPlugin extends CombineTypes<[_DefaultCompressPlugin, jdk.tools.jlink.internal.ResourcePrevisitor, jdk.tools.jlink.internal.plugins.AbstractPlugin]> {}
            interface _DefaultStripDebugPlugin$$static extends ClassLike {
              _EXCLUDE_DEBUGINFO: string;
              _STRIP_NATIVE_DEBUG_PLUGIN: string;
              new(): DefaultStripDebugPlugin;
              new(javaStripPlugin: jlink.plugin.Plugin, nativeStripPluginFact: DefaultStripDebugPlugin$NativePluginFactory): DefaultStripDebugPlugin;
            }
            let DefaultStripDebugPlugin: _DefaultStripDebugPlugin$$static;
            interface _DefaultStripDebugPlugin {
              transform(_in: jlink.plugin.ResourcePool, out: jlink.plugin.ResourcePoolBuilder): jlink.plugin.ResourcePool;
              _javaStripPlugin: jlink.plugin.Plugin;
              _stripNativePluginFactory: DefaultStripDebugPlugin$NativePluginFactory;
            }
            interface DefaultStripDebugPlugin extends CombineTypes<[_DefaultStripDebugPlugin, jdk.tools.jlink.internal.plugins.AbstractPlugin]> {}
            interface _DefaultStripDebugPlugin$DefaultNativePluginFactory$$static extends ClassLike {
            }
            let DefaultStripDebugPlugin$DefaultNativePluginFactory: _DefaultStripDebugPlugin$DefaultNativePluginFactory$$static;
            interface _DefaultStripDebugPlugin$DefaultNativePluginFactory {
              create(): jlink.plugin.Plugin;
            }
            interface DefaultStripDebugPlugin$DefaultNativePluginFactory extends CombineTypes<[_DefaultStripDebugPlugin$DefaultNativePluginFactory, java.lang.Object, jdk.tools.jlink.internal.plugins.DefaultStripDebugPlugin$NativePluginFactory]> {}
            interface _DefaultStripDebugPlugin$NativePluginFactory$$static extends ClassLike {
            }
            let DefaultStripDebugPlugin$NativePluginFactory: _DefaultStripDebugPlugin$NativePluginFactory$$static;
            interface _DefaultStripDebugPlugin$NativePluginFactory {
              create(): jlink.plugin.Plugin;
(): jlink.plugin.Plugin;
            }
            interface DefaultStripDebugPlugin$NativePluginFactory extends CombineTypes<[_DefaultStripDebugPlugin$NativePluginFactory, java.lang.Object]> {}
            interface _ExcludeFilesPlugin$$static extends ClassLike {
              new(): ExcludeFilesPlugin;
            }
            let ExcludeFilesPlugin: _ExcludeFilesPlugin$$static;
            interface _ExcludeFilesPlugin {
              configure(config: java.util.Map<string,string>): void;
              getType(): jlink.plugin.Plugin$Category;
              hasArguments(): boolean;
              transform(_in: jlink.plugin.ResourcePool, out: jlink.plugin.ResourcePoolBuilder): jlink.plugin.ResourcePool;
              _predicate: java.util.function.Predicate<string>;
            }
            interface ExcludeFilesPlugin extends CombineTypes<[_ExcludeFilesPlugin, jdk.tools.jlink.internal.plugins.AbstractPlugin]> {}
            interface _ExcludeJmodSectionPlugin$$static extends ClassLike {
              readonly INCLUDE_HEADER_FILES: string;
              readonly MAN_PAGES: string;
              new(): ExcludeJmodSectionPlugin;
            }
            let ExcludeJmodSectionPlugin: _ExcludeJmodSectionPlugin$$static;
            interface _ExcludeJmodSectionPlugin {
              configure(config: java.util.Map<string,string>): void;
              getType(): jlink.plugin.Plugin$Category;
              hasArguments(): boolean;
              transform(_in: jlink.plugin.ResourcePool, out: jlink.plugin.ResourcePoolBuilder): jlink.plugin.ResourcePool;
              _filters: java.util.Set<jlink.plugin.ResourcePoolEntry$Type>;
            }
            interface ExcludeJmodSectionPlugin extends CombineTypes<[_ExcludeJmodSectionPlugin, jdk.tools.jlink.internal.plugins.AbstractPlugin]> {}
            interface _ExcludePlugin$$static extends ClassLike {
              new(): ExcludePlugin;
            }
            let ExcludePlugin: _ExcludePlugin$$static;
            interface _ExcludePlugin {
              configure(config: java.util.Map<string,string>): void;
              getType(): jlink.plugin.Plugin$Category;
              hasArguments(): boolean;
              transform(_in: jlink.plugin.ResourcePool, out: jlink.plugin.ResourcePoolBuilder): jlink.plugin.ResourcePool;
              _predicate: java.util.function.Predicate<string>;
            }
            interface ExcludePlugin extends CombineTypes<[_ExcludePlugin, jdk.tools.jlink.internal.plugins.AbstractPlugin]> {}
            interface _ExcludeVMPlugin$$static extends ClassLike {
              _jvmlibs(module: jlink.plugin.ResourcePoolModule): string[];
              _ALL: string;
              _CLIENT: string;
              _JVM_CFG: string;
              _MINIMAL: string;
              _SERVER: string;
              new(): ExcludeVMPlugin;
            }
            let ExcludeVMPlugin: _ExcludeVMPlugin$$static;
            interface _ExcludeVMPlugin {
              configure(config: java.util.Map<string,string>): void;
              getType(): jlink.plugin.Plugin$Category;
              _getVMs(javaBase: jlink.plugin.ResourcePoolModule, jvmlibs: string[]): java.util.List<jlink.plugin.ResourcePoolEntry>;
              _handleJvmCfgFile(orig: jlink.plugin.ResourcePoolEntry, existing: java.util.TreeSet<ExcludeVMPlugin$Jvm>, removed: java.util.TreeSet<ExcludeVMPlugin$Jvm>): jlink.plugin.ResourcePoolEntry;
              hasArguments(): boolean;
              _isRemoved(file: jlink.plugin.ResourcePoolEntry): boolean;
              transform(_in: jlink.plugin.ResourcePool, out: jlink.plugin.ResourcePoolBuilder): jlink.plugin.ResourcePool;
              _keepAll: boolean;
              _predicate: java.util.function.Predicate<string>;
              _target: ExcludeVMPlugin$Jvm;
            }
            interface ExcludeVMPlugin extends CombineTypes<[_ExcludeVMPlugin, jdk.tools.jlink.internal.plugins.AbstractPlugin]> {}
            interface _ExcludeVMPlugin$Jvm$$static extends ClassLike {
              valueOf(name: string): ExcludeVMPlugin$Jvm;
              values(): ExcludeVMPlugin$Jvm[];
              readonly CLIENT: ExcludeVMPlugin$Jvm;
              readonly MINIMAL: ExcludeVMPlugin$Jvm;
              readonly SERVER: ExcludeVMPlugin$Jvm;
            }
            let ExcludeVMPlugin$Jvm: _ExcludeVMPlugin$Jvm$$static;
            interface _ExcludeVMPlugin$Jvm {
              _getEfficience(): int;
              _getName(): string;
              _efficience: int;
              _name: string;
            }
            interface ExcludeVMPlugin$Jvm extends CombineTypes<[_ExcludeVMPlugin$Jvm]> {}
            interface _ExcludeVMPlugin$JvmComparator$$static extends ClassLike {
            }
            let ExcludeVMPlugin$JvmComparator: _ExcludeVMPlugin$JvmComparator$$static;
            interface _ExcludeVMPlugin$JvmComparator {
              compare(o1: ExcludeVMPlugin$Jvm, o2: ExcludeVMPlugin$Jvm): int;
              compare(a0: any, a1: any): int;
            }
            interface ExcludeVMPlugin$JvmComparator extends CombineTypes<[_ExcludeVMPlugin$JvmComparator, java.util.Comparator<ExcludeVMPlugin$Jvm>, java.lang.Object]> {}
            interface _GenerateJLIClassesPlugin$$static extends ClassLike {
              _BASIC_FORMS_HOLDER_ENTRY: string;
              _DEFAULT_TRACE_FILE: string;
              _DELEGATING_METHOD_HOLDER_ENTRY: string;
              _DIRECT_METHOD_HOLDER_ENTRY: string;
              _INVOKERS_HOLDER_ENTRY: string;
              _JLIA: jdk.internal.access.JavaLangInvokeAccess;
              new(): GenerateJLIClassesPlugin;
            }
            let GenerateJLIClassesPlugin: _GenerateJLIClassesPlugin$$static;
            interface _GenerateJLIClassesPlugin {
              configure(config: java.util.Map<string,string>): void;
              _fileLines(file: java.io.File): java.util.stream.Stream<string>;
              getState(): java.util.Set<jlink.plugin.Plugin$State>;
              hasArguments(): boolean;
              initialize(_in: jlink.plugin.ResourcePool): void;
              transform(_in: jlink.plugin.ResourcePool, out: jlink.plugin.ResourcePoolBuilder): jlink.plugin.ResourcePool;
              _mainArgument: string;
              _traceFileStream: java.util.stream.Stream<string>;
            }
            interface GenerateJLIClassesPlugin extends CombineTypes<[_GenerateJLIClassesPlugin, jdk.tools.jlink.internal.plugins.AbstractPlugin]> {}
            interface _IncludeLocalesPlugin$$static extends ClassLike {
              _localeToTags(loc: java.util.Locale): java.util.stream.Stream<string>;
              _tagToLocale(tag: string): java.util.Locale;
              _CLDR_ADAPTER: sun.util.locale.provider.ResourceBundleBasedAdapter;
              _CLDR_PARENT_LOCALES: java.util.Map<java.util.Locale,string[]>;
              _EQUIV_MAP: java.util.Map<string,java.util.List<string>>;
              _INCLUDE_LOCALE_FILES: java.util.List<string>;
              _LOCALEDATA_PACKAGES: java.util.Set<string>;
              _LOCALE_BUILDER: java.util.Locale$Builder;
              _METAINFONAME: string;
              _META_FILES: java.util.List<string>;
              _MODULENAME: string;
              _jaJPJP: java.util.Locale;
              _jaJPJPTag: string;
              _noNONY: java.util.Locale;
              _noNONYTag: string;
              _thTHTH: java.util.Locale;
              _thTHTHTag: string;
              new(): IncludeLocalesPlugin;
            }
            let IncludeLocalesPlugin: _IncludeLocalesPlugin$$static;
            interface _IncludeLocalesPlugin {
              configure(config: java.util.Map<string,string>): void;
              _filterLocales(locales: java.util.List<java.util.Locale>): java.util.List<string>;
              _filterOutUnsupportedTags(b: byte[]): boolean;
              getType(): jlink.plugin.Plugin$Category;
              hasArguments(): boolean;
              _includeLocaleFilePatterns(tag: string): java.util.List<string>;
              _includeLocaleFiles(localeStr: string): java.util.List<string>;
              previsit(resources: jlink.plugin.ResourcePool, strings: StringTable): void;
              _stripUnsupportedLocales(bytes: byte[]): boolean;
              transform(_in: jlink.plugin.ResourcePool, out: jlink.plugin.ResourcePoolBuilder): jlink.plugin.ResourcePool;
              _available: java.util.List<java.util.Locale>;
              _filtered: java.util.List<string>;
              _predicate: java.util.function.Predicate<string>;
              _priorityList: java.util.List<java.util.Locale$LanguageRange>;
              _userParam: string;
            }
            interface IncludeLocalesPlugin extends CombineTypes<[_IncludeLocalesPlugin, jdk.tools.jlink.internal.ResourcePrevisitor, jdk.tools.jlink.internal.plugins.AbstractPlugin]> {}
            interface _LegalNoticeFilePlugin$$static extends ClassLike {
              _ERROR_IF_NOT_SAME_CONTENT: string;
              new(): LegalNoticeFilePlugin;
            }
            let LegalNoticeFilePlugin: _LegalNoticeFilePlugin$$static;
            interface _LegalNoticeFilePlugin {
              configure(config: java.util.Map<string,string>): void;
              _dedupLegalNoticeEntry(entry: jlink.plugin.ResourcePoolEntry): void;
              getState(): java.util.Set<jlink.plugin.Plugin$State>;
              getType(): jlink.plugin.Plugin$Category;
              hasArguments(): boolean;
              transform(_in: jlink.plugin.ResourcePool, out: jlink.plugin.ResourcePoolBuilder): jlink.plugin.ResourcePool;
              _errorIfNotSameContent: boolean;
              _licenseOrNotice: java.util.Map<string,java.util.List<jlink.plugin.ResourcePoolEntry>>;
            }
            interface LegalNoticeFilePlugin extends CombineTypes<[_LegalNoticeFilePlugin, jdk.tools.jlink.internal.plugins.AbstractPlugin]> {}
            interface _OrderResourcesPlugin$$static extends ClassLike {
              _compare(wrapper1: OrderResourcesPlugin$SortWrapper, wrapper2: OrderResourcesPlugin$SortWrapper): int;
              _JRT_FILE_SYSTEM: java.nio.file.FileSystem;
              new(): OrderResourcesPlugin;
            }
            let OrderResourcesPlugin: _OrderResourcesPlugin$$static;
            interface _OrderResourcesPlugin {
              configure(config: java.util.Map<string,string>): void;
              _getOrdinal(resource: jlink.plugin.ResourcePoolEntry): int;
              getType(): jlink.plugin.Plugin$Category;
              hasArguments(): boolean;
              _stripModule(path: string): string;
              transform(_in: jlink.plugin.ResourcePool, out: jlink.plugin.ResourcePoolBuilder): jlink.plugin.ResourcePool;
              _filters: java.util.List<java.util.function.ToIntFunction<string>>;
              _orderedPaths: java.util.Map<string,int>;
            }
            interface OrderResourcesPlugin extends CombineTypes<[_OrderResourcesPlugin, jdk.tools.jlink.internal.plugins.AbstractPlugin]> {}
            interface _OrderResourcesPlugin$SortWrapper$$static extends ClassLike {
              _new(resource: jlink.plugin.ResourcePoolEntry, ordinal: int): OrderResourcesPlugin$SortWrapper;
            }
            let OrderResourcesPlugin$SortWrapper: _OrderResourcesPlugin$SortWrapper$$static;
            interface _OrderResourcesPlugin$SortWrapper {
              _getOrdinal(): int;
              _getPath(): string;
              _getResource(): jlink.plugin.ResourcePoolEntry;
              _ordinal: int;
              _resource: jlink.plugin.ResourcePoolEntry;
            }
            interface OrderResourcesPlugin$SortWrapper extends CombineTypes<[_OrderResourcesPlugin$SortWrapper, java.lang.Object]> {}
            interface _PluginsResourceBundle$$static extends ClassLike {
              getArgument(name: string, args: any[]): string;
              getArgument(name: string, ...args: any[]): string;
              getDescription(name: string): string;
              getMessage(key: string, args: any[]): string;
              getMessage(key: string, ...args: any[]): string;
              getMessage(bundle: java.util.ResourceBundle, key: string, args: any[]): string;
              getMessage(bundle: java.util.ResourceBundle, key: string, ...args: any[]): string;
              getOption(name: string, option: string): string;
              getUsage(name: string): string;
              _ARGUMENT: string;
              _DESCRIPTION: string;
              _USAGE: string;
              _pluginsBundle: java.util.ResourceBundle;
            }
            let PluginsResourceBundle: _PluginsResourceBundle$$static;
            interface _PluginsResourceBundle {
            }
            interface PluginsResourceBundle extends CombineTypes<[_PluginsResourceBundle, java.lang.Object]> {}
            interface _ReleaseInfoPlugin$$static extends ClassLike {
              _parseVersion(v: java.lang.module.ModuleDescriptor$Version): string;
              _quote(str: string): string;
              readonly KEYS: string;
              new(): ReleaseInfoPlugin;
            }
            let ReleaseInfoPlugin: _ReleaseInfoPlugin$$static;
            interface _ReleaseInfoPlugin {
              configure(config: java.util.Map<string,string>): void;
              getState(): java.util.Set<jlink.plugin.Plugin$State>;
              getType(): jlink.plugin.Plugin$Category;
              hasArguments(): boolean;
              _releaseFileContent(): byte[];
              transform(_in: jlink.plugin.ResourcePool, out: jlink.plugin.ResourcePoolBuilder): jlink.plugin.ResourcePool;
              _release: java.util.Map<string,string>;
            }
            interface ReleaseInfoPlugin extends CombineTypes<[_ReleaseInfoPlugin, jdk.tools.jlink.internal.plugins.AbstractPlugin]> {}
            interface _ResourceFilter$$static extends ClassLike {
              excludeFilter(patterns: java.util.List<string>): ResourceFilter;
              excludeFilter(patterns: string): ResourceFilter;
              includeFilter(patterns: java.util.List<string>): ResourceFilter;
              includeFilter(patterns: string): ResourceFilter;
              _EMPTY_LIST: java.util.List<string>;
            }
            let ResourceFilter: _ResourceFilter$$static;
            interface _ResourceFilter {
              test(name: string): boolean;
              test(a0: any): boolean;
              _include: boolean;
              _matchers: java.util.List<java.nio.file.PathMatcher>;
              _otherwise: boolean;
            }
            interface ResourceFilter extends CombineTypes<[_ResourceFilter, java.lang.Object, java.util.function.Predicate<string>]> {}
            interface _SaveJlinkArgfilesPlugin$$static extends ClassLike {
              _readArgfile(argfile: string): string;
              new(): SaveJlinkArgfilesPlugin;
            }
            let SaveJlinkArgfilesPlugin: _SaveJlinkArgfilesPlugin$$static;
            interface _SaveJlinkArgfilesPlugin {
              configure(config: java.util.Map<string,string>): void;
              getType(): jlink.plugin.Plugin$Category;
              hasArguments(): boolean;
              hasRawArgument(): boolean;
              transform(_in: jlink.plugin.ResourcePool, out: jlink.plugin.ResourcePoolBuilder): jlink.plugin.ResourcePool;
              _argfiles: java.util.List<string>;
            }
            interface SaveJlinkArgfilesPlugin extends CombineTypes<[_SaveJlinkArgfilesPlugin, jdk.tools.jlink.internal.plugins.AbstractPlugin]> {}
            interface _StringSharingPlugin$$static extends ClassLike {
              _SIZES: int[];
              new(): StringSharingPlugin;
              _new(predicate: java.util.function.Predicate<string>): StringSharingPlugin;
            }
            let StringSharingPlugin: _StringSharingPlugin$$static;
            interface _StringSharingPlugin {
              configure(config: java.util.Map<string,string>): void;
              getType(): jlink.plugin.Plugin$Category;
              hasArguments(): boolean;
              previsit(resources: jlink.plugin.ResourcePool, strings: StringTable): void;
              transform(_in: jlink.plugin.ResourcePool, result: jlink.plugin.ResourcePoolBuilder): jlink.plugin.ResourcePool;
              _predicate: java.util.function.Predicate<string>;
            }
            interface StringSharingPlugin extends CombineTypes<[_StringSharingPlugin, jdk.tools.jlink.internal.ResourcePrevisitor, jdk.tools.jlink.internal.plugins.AbstractPlugin]> {}
            interface _StringSharingPlugin$CompactCPHelper$$static extends ClassLike {
            }
            let StringSharingPlugin$CompactCPHelper: _StringSharingPlugin$CompactCPHelper$$static;
            interface _StringSharingPlugin$CompactCPHelper {
              _optimize(resource: jlink.plugin.ResourcePoolEntry, resources: jlink.plugin.ResourcePoolBuilder, strings: StringTable, descriptorIndexes: java.util.Set<int>, content: byte[]): byte[];
              transform(resource: jlink.plugin.ResourcePoolEntry, out: jlink.plugin.ResourcePoolBuilder, strings: StringTable): byte[];
              _writeDescriptorReference(out: java.io.DataOutputStream, indexes: java.util.List<int>): void;
              _writeUTF8Reference(out: java.io.DataOutputStream, index: int): void;
            }
            interface StringSharingPlugin$CompactCPHelper extends CombineTypes<[_StringSharingPlugin$CompactCPHelper, java.lang.Object]> {}
            interface _StringSharingPlugin$CompactCPHelper$DescriptorsScanner$$static extends ClassLike {
            }
            let StringSharingPlugin$CompactCPHelper$DescriptorsScanner: _StringSharingPlugin$CompactCPHelper$DescriptorsScanner$$static;
            interface _StringSharingPlugin$CompactCPHelper$DescriptorsScanner {
              _scan(): java.util.Set<int>;
              _scanAnnotation(annotation: com.sun.tools.classfile.Annotation, utf8Descriptors: java.util.Set<int>): void;
              _scanAttributes(attributes: com.sun.tools.classfile.Attributes, utf8Descriptors: java.util.Set<int>): void;
              _scanConstantPool(utf8Descriptors: java.util.Set<int>): void;
              _scanElementValue(value: com.sun.tools.classfile.Annotation$element_value, utf8Descriptors: java.util.Set<int>): void;
              _scanFields(utf8Descriptors: java.util.Set<int>): void;
              _scanMethods(utf8Descriptors: java.util.Set<int>): void;
              _cf: com.sun.tools.classfile.ClassFile;
            }
            interface StringSharingPlugin$CompactCPHelper$DescriptorsScanner extends CombineTypes<[_StringSharingPlugin$CompactCPHelper$DescriptorsScanner, java.lang.Object]> {}
            interface _StripJavaDebugAttributesPlugin$$static extends ClassLike {
              new(): StripJavaDebugAttributesPlugin;
              _new(predicate: java.util.function.Predicate<string>): StripJavaDebugAttributesPlugin;
            }
            let StripJavaDebugAttributesPlugin: _StripJavaDebugAttributesPlugin$$static;
            interface _StripJavaDebugAttributesPlugin {
              transform(_in: jlink.plugin.ResourcePool, out: jlink.plugin.ResourcePoolBuilder): jlink.plugin.ResourcePool;
              _predicate: java.util.function.Predicate<string>;
            }
            interface StripJavaDebugAttributesPlugin extends CombineTypes<[_StripJavaDebugAttributesPlugin, jdk.tools.jlink.internal.plugins.AbstractPlugin]> {}
            interface _StripNativeCommandsPlugin$$static extends ClassLike {
              new(): StripNativeCommandsPlugin;
            }
            let StripNativeCommandsPlugin: _StripNativeCommandsPlugin$$static;
            interface _StripNativeCommandsPlugin {
              getType(): jlink.plugin.Plugin$Category;
              transform(_in: jlink.plugin.ResourcePool, out: jlink.plugin.ResourcePoolBuilder): jlink.plugin.ResourcePool;
            }
            interface StripNativeCommandsPlugin extends CombineTypes<[_StripNativeCommandsPlugin, jdk.tools.jlink.internal.plugins.AbstractPlugin]> {}
            interface _SystemModulesPlugin$$static extends ClassLike {
              _finderOf(moduleInfos: java.util.Collection<SystemModulesPlugin$ModuleInfo>): java.lang.module.ModuleFinder;
              _sorted<T>(c: java.util.Collection<T>): java.util.List<T>;
              _ALL_SYSTEM_MODULES_CLASSNAME: string;
              _CD_ALL_SYSTEM_MODULES: java.lang.constant.ClassDesc;
              _CD_SYSTEM_MODULES: java.lang.constant.ClassDesc;
              _CD_SYSTEM_MODULES_MAP: java.lang.constant.ClassDesc;
              _CLASSFILE_VERSION: int;
              _DEFAULT_SYSTEM_MODULES_CLASSNAME: string;
              _SYSTEM_MODULES_CLASS_PREFIX: string;
              _SYSTEM_MODULES_MAP_CLASSNAME: string;
              new(): SystemModulesPlugin;
            }
            let SystemModulesPlugin: _SystemModulesPlugin$$static;
            interface _SystemModulesPlugin {
              configure(config: java.util.Map<string,string>): void;
              _genSystemModulesClass(moduleInfos: java.util.List<SystemModulesPlugin$ModuleInfo>, cf: java.lang.module.Configuration, className: string, out: jlink.plugin.ResourcePoolBuilder): string;
              _genSystemModulesClasses(moduleInfos: java.util.List<SystemModulesPlugin$ModuleInfo>, out: jlink.plugin.ResourcePoolBuilder): java.util.Set<string>;
              _genSystemModulesMapClass(allSystemModules: java.lang.constant.ClassDesc, defaultSystemModules: java.lang.constant.ClassDesc, map: java.util.Map<string,string>, out: jlink.plugin.ResourcePoolBuilder): string;
              getState(): java.util.Set<jlink.plugin.Plugin$State>;
              hasArguments(): boolean;
              _resolve(finder: java.lang.module.ModuleFinder, roots: java.util.Set<string>): java.lang.module.Configuration;
              _sublist(moduleInfos: java.util.List<SystemModulesPlugin$ModuleInfo>, cf: java.lang.module.Configuration): java.util.List<SystemModulesPlugin$ModuleInfo>;
              transform(_in: jlink.plugin.ResourcePool, out: jlink.plugin.ResourcePoolBuilder): jlink.plugin.ResourcePool;
              _transformModuleInfos(_in: jlink.plugin.ResourcePool, out: jlink.plugin.ResourcePoolBuilder): java.util.List<SystemModulesPlugin$ModuleInfo>;
              _enabled: boolean;
              _moduleDescriptorsPerMethod: int;
            }
            interface SystemModulesPlugin extends CombineTypes<[_SystemModulesPlugin, jdk.tools.jlink.internal.plugins.AbstractPlugin]> {}
            interface _SystemModulesPlugin$ModuleInfo$$static extends ClassLike {
              _new(bytes: byte[], packages: java.util.Set<string>): SystemModulesPlugin$ModuleInfo;
            }
            let SystemModulesPlugin$ModuleInfo: _SystemModulesPlugin$ModuleInfo$$static;
            interface _SystemModulesPlugin$ModuleInfo {
              _descriptor(): java.lang.module.ModuleDescriptor;
              _getBytes(): byte[];
              _getInputStream(): java.io.InputStream;
              _hasModulePackages(): boolean;
              _moduleName(): string;
              _moduleResolution(): jdk.internal.module.ModuleResolution;
              _packages(): java.util.Set<string>;
              _recordedHashes(): jdk.internal.module.ModuleHashes;
              _shouldRewrite(): boolean;
              _target(): jdk.internal.module.ModuleTarget;
              _validateNames(): void;
              _validatePackages(): void;
              _addModulePackages: boolean;
              _attrs: jdk.internal.module.ModuleInfo$Attributes;
              _bais: java.io.ByteArrayInputStream;
              _descriptor: java.lang.module.ModuleDescriptor;
              _packages: java.util.Set<string>;
            }
            interface SystemModulesPlugin$ModuleInfo extends CombineTypes<[_SystemModulesPlugin$ModuleInfo, java.lang.Object]> {}
            interface _SystemModulesPlugin$ModuleInfo$ModuleInfoRewriter$$static extends ClassLike {
              _new(_in: java.io.InputStream): SystemModulesPlugin$ModuleInfo$ModuleInfoRewriter;
            }
            let SystemModulesPlugin$ModuleInfo$ModuleInfoRewriter: _SystemModulesPlugin$ModuleInfo$ModuleInfoRewriter$$static;
            interface _SystemModulesPlugin$ModuleInfo$ModuleInfoRewriter {
              _addModulePackages(packages: java.util.Set<string>): void;
              _getBytes(): byte[];
              _extender: jdk.internal.module.ModuleInfoExtender;
            }
            interface SystemModulesPlugin$ModuleInfo$ModuleInfoRewriter extends CombineTypes<[_SystemModulesPlugin$ModuleInfo$ModuleInfoRewriter, java.io.ByteArrayOutputStream]> {}
            interface _SystemModulesPlugin$SystemModulesClassGenerator$$static extends ClassLike {
              _CD_EXPORTS_MODIFIER: java.lang.constant.ClassDesc;
              _CD_MODULE_BUILDER: java.lang.constant.ClassDesc;
              _CD_MODULE_DESCRIPTOR: java.lang.constant.ClassDesc;
              _CD_MODULE_HASHES: java.lang.constant.ClassDesc;
              _CD_MODULE_RESOLUTION: java.lang.constant.ClassDesc;
              _CD_MODULE_TARGET: java.lang.constant.ClassDesc;
              _CD_OPENS_MODIFIER: java.lang.constant.ClassDesc;
              _CD_REQUIRES_MODIFIER: java.lang.constant.ClassDesc;
              _MAX_LOCAL_VARS: int;
              new(className: string, moduleInfos: java.util.List<SystemModulesPlugin$ModuleInfo>, moduleDescriptorsPerMethod: int): SystemModulesPlugin$SystemModulesClassGenerator;
            }
            let SystemModulesPlugin$SystemModulesClassGenerator: _SystemModulesPlugin$SystemModulesClassGenerator$$static;
            interface _SystemModulesPlugin$SystemModulesClassGenerator {
              _dedups(md: java.lang.module.ModuleDescriptor): void;
              genClassBytes(cf: java.lang.module.Configuration): byte[];
              _genConstructor(clb: jdk.internal.classfile.ClassBuilder): void;
              _genHasSplitPackages(clb: jdk.internal.classfile.ClassBuilder): void;
              _genImmutableSet(cob: jdk.internal.classfile.CodeBuilder, set: java.util.Set<string>): void;
              _genIncubatorModules(clb: jdk.internal.classfile.ClassBuilder): void;
              _genModuleDescriptorsMethod(clb: jdk.internal.classfile.ClassBuilder): void;
              _genModuleHashesMethod(clb: jdk.internal.classfile.ClassBuilder): void;
              _genModuleReads(clb: jdk.internal.classfile.ClassBuilder, cf: java.lang.module.Configuration): void;
              _genModuleResolutionsMethod(clb: jdk.internal.classfile.ClassBuilder): void;
              _genModuleTargetsMethod(clb: jdk.internal.classfile.ClassBuilder): void;
              _generate(clb: jdk.internal.classfile.ClassBuilder, methodName: string, map: java.util.Map<string,java.util.Set<string>>, dedup: boolean): void;
              _getNextLocalVar(): int;
              _BUILDER_VAR: int;
              _DEDUP_LIST_VAR: int;
              _MD_VAR: int;
              _MH_VAR: int;
              _MT_VAR: int;
              _classDesc: java.lang.constant.ClassDesc;
              _dedupSetBuilder: SystemModulesPlugin$SystemModulesClassGenerator$DedupSetBuilder;
              _moduleDescriptorsPerMethod: int;
              _moduleInfos: java.util.List<SystemModulesPlugin$ModuleInfo>;
              _nextLocalVar: int;
            }
            interface SystemModulesPlugin$SystemModulesClassGenerator extends CombineTypes<[_SystemModulesPlugin$SystemModulesClassGenerator, java.lang.Object]> {}
            interface _SystemModulesPlugin$SystemModulesClassGenerator$DedupSetBuilder$$static extends ClassLike {
              _new(localVarSupplier: java.util.function.IntSupplier): SystemModulesPlugin$SystemModulesClassGenerator$DedupSetBuilder;
            }
            let SystemModulesPlugin$SystemModulesClassGenerator$DedupSetBuilder: _SystemModulesPlugin$SystemModulesClassGenerator$DedupSetBuilder$$static;
            interface _SystemModulesPlugin$SystemModulesClassGenerator$DedupSetBuilder {
              _exportsModifiers(mods: java.util.Set<java.lang.module.ModuleDescriptor$Exports$Modifier>): void;
              _indexOfExportsModifiers(cob: jdk.internal.classfile.CodeBuilder, mods: java.util.Set<java.lang.module.ModuleDescriptor$Exports$Modifier>): int;
              _indexOfOpensModifiers(cob: jdk.internal.classfile.CodeBuilder, mods: java.util.Set<java.lang.module.ModuleDescriptor$Opens$Modifier>): int;
              _indexOfRequiresModifiers(cob: jdk.internal.classfile.CodeBuilder, mods: java.util.Set<java.lang.module.ModuleDescriptor$Requires$Modifier>): int;
              _indexOfStringSet(cob: jdk.internal.classfile.CodeBuilder, names: java.util.Set<string>): int;
              _newStringSet(cob: jdk.internal.classfile.CodeBuilder, names: java.util.Set<string>): int;
              _opensModifiers(mods: java.util.Set<java.lang.module.ModuleDescriptor$Opens$Modifier>): void;
              _requiresModifiers(mods: java.util.Set<java.lang.module.ModuleDescriptor$Requires$Modifier>): void;
              _stringSet(strings: java.util.Set<string>): void;
              _enumSetVar: int;
              _exportsModifiersSets: java.util.Map<java.util.Set<java.lang.module.ModuleDescriptor$Exports$Modifier>,SystemModulesPlugin$SystemModulesClassGenerator$EnumSetBuilder<java.lang.module.ModuleDescriptor$Exports$Modifier>>;
              _localVarSupplier: java.util.function.IntSupplier;
              _opensModifiersSets: java.util.Map<java.util.Set<java.lang.module.ModuleDescriptor$Opens$Modifier>,SystemModulesPlugin$SystemModulesClassGenerator$EnumSetBuilder<java.lang.module.ModuleDescriptor$Opens$Modifier>>;
              _requiresModifiersSets: java.util.Map<java.util.Set<java.lang.module.ModuleDescriptor$Requires$Modifier>,SystemModulesPlugin$SystemModulesClassGenerator$EnumSetBuilder<java.lang.module.ModuleDescriptor$Requires$Modifier>>;
              _stringSetVar: int;
              _stringSets: java.util.Map<java.util.Set<string>,SystemModulesPlugin$SystemModulesClassGenerator$SetBuilder<string>>;
            }
            interface SystemModulesPlugin$SystemModulesClassGenerator$DedupSetBuilder extends CombineTypes<[_SystemModulesPlugin$SystemModulesClassGenerator$DedupSetBuilder, java.lang.Object]> {}
            interface _SystemModulesPlugin$SystemModulesClassGenerator$EnumSetBuilder$$static<T> extends ClassLike {
              _new(modifiers: java.util.Set<T>, classDesc: java.lang.constant.ClassDesc, defaultVarIndex: int, nextLocalVar: java.util.function.IntSupplier): SystemModulesPlugin$SystemModulesClassGenerator$EnumSetBuilder<T>;
            }
            let SystemModulesPlugin$SystemModulesClassGenerator$EnumSetBuilder: _SystemModulesPlugin$SystemModulesClassGenerator$EnumSetBuilder$$static<T>;
            interface _SystemModulesPlugin$SystemModulesClassGenerator$EnumSetBuilder<T> {
              _visitElement(t: T, cob: jdk.internal.classfile.CodeBuilder): void;
              _classDesc: java.lang.constant.ClassDesc;
            }
            interface SystemModulesPlugin$SystemModulesClassGenerator$EnumSetBuilder<T> extends CombineTypes<[_SystemModulesPlugin$SystemModulesClassGenerator$EnumSetBuilder<T>, SystemModulesPlugin$SystemModulesClassGenerator$SetBuilder<T>]> {}
            interface _SystemModulesPlugin$SystemModulesClassGenerator$ModuleDescriptorBuilder$$static extends ClassLike {
              _CD_EXPORTS: java.lang.constant.ClassDesc;
              _CD_OPENS: java.lang.constant.ClassDesc;
              _CD_PROVIDES: java.lang.constant.ClassDesc;
              _CD_REQUIRES: java.lang.constant.ClassDesc;
              _MTD_BOOLEAN: java.lang.constant.MethodTypeDesc;
              _MTD_EXPORTS_ARRAY: java.lang.constant.MethodTypeDesc;
              _MTD_EXPORTS_MODIFIER_SET_STRING: java.lang.constant.MethodTypeDesc;
              _MTD_EXPORTS_MODIFIER_SET_STRING_SET: java.lang.constant.MethodTypeDesc;
              _MTD_OPENS_ARRAY: java.lang.constant.MethodTypeDesc;
              _MTD_OPENS_MODIFIER_SET_STRING: java.lang.constant.MethodTypeDesc;
              _MTD_OPENS_MODIFIER_SET_STRING_SET: java.lang.constant.MethodTypeDesc;
              _MTD_PROVIDES_ARRAY: java.lang.constant.MethodTypeDesc;
              _MTD_PROVIDES_STRING_LIST: java.lang.constant.MethodTypeDesc;
              _MTD_REQUIRES_ARRAY: java.lang.constant.MethodTypeDesc;
              _MTD_REQUIRES_SET_STRING: java.lang.constant.MethodTypeDesc;
              _MTD_REQUIRES_SET_STRING_STRING: java.lang.constant.MethodTypeDesc;
              _MTD_SET: java.lang.constant.MethodTypeDesc;
              _MTD_STRING: java.lang.constant.MethodTypeDesc;
              _new(this$0: jdk.internal.classfile.CodeBuilder, cob: java.lang.module.ModuleDescriptor, md: java.util.Set<string>, packages: int): SystemModulesPlugin$SystemModulesClassGenerator$ModuleDescriptorBuilder;
            }
            let SystemModulesPlugin$SystemModulesClassGenerator$ModuleDescriptorBuilder: _SystemModulesPlugin$SystemModulesClassGenerator$ModuleDescriptorBuilder$$static;
            interface _SystemModulesPlugin$SystemModulesClassGenerator$ModuleDescriptorBuilder {
              _build(): void;
              _exports(exports: java.util.Set<java.lang.module.ModuleDescriptor$Exports>): void;
              _invokeBuilderMethod(methodName: string, value: string): void;
              _mainClass(cn: string): void;
              _newBuilder(): void;
              _newExports(ms: java.util.Set<java.lang.module.ModuleDescriptor$Exports$Modifier>, pn: string, targets: java.util.Set<string>): void;
              _newOpens(ms: java.util.Set<java.lang.module.ModuleDescriptor$Opens$Modifier>, pn: string, targets: java.util.Set<string>): void;
              _newProvides(service: string, providers: java.util.List<string>): void;
              _newRequires(mods: java.util.Set<java.lang.module.ModuleDescriptor$Requires$Modifier>, name: string, compiledVersion: string): void;
              _opens(opens: java.util.Set<java.lang.module.ModuleDescriptor$Opens>): void;
              _packages(packages: java.util.Set<string>): void;
              _provides(provides: java.util.Collection<java.lang.module.ModuleDescriptor$Provides>): void;
              _putModuleDescriptor(): void;
              _requires(requires: java.util.Set<java.lang.module.ModuleDescriptor$Requires>): void;
              _setModuleBit(methodName: string, value: boolean): void;
              _uses(uses: java.util.Set<string>): void;
              _version(v: java.lang.module.ModuleDescriptor$Version): void;
              _cob: jdk.internal.classfile.CodeBuilder;
              _index: int;
              _md: java.lang.module.ModuleDescriptor;
              _packages: java.util.Set<string>;
              _this$0: SystemModulesPlugin$SystemModulesClassGenerator;
            }
            interface SystemModulesPlugin$SystemModulesClassGenerator$ModuleDescriptorBuilder extends CombineTypes<[_SystemModulesPlugin$SystemModulesClassGenerator$ModuleDescriptorBuilder, java.lang.Object]> {}
            interface _SystemModulesPlugin$SystemModulesClassGenerator$ModuleHashesBuilder$$static extends ClassLike {
              _MODULE_HASHES_BUILDER: java.lang.constant.ClassDesc;
              _STRING_BYTE_ARRAY_SIG: java.lang.constant.MethodTypeDesc;
              _new(this$0: SystemModulesPlugin$SystemModulesClassGenerator, hashes: jdk.internal.module.ModuleHashes, index: int, cob: jdk.internal.classfile.CodeBuilder): SystemModulesPlugin$SystemModulesClassGenerator$ModuleHashesBuilder;
            }
            let SystemModulesPlugin$SystemModulesClassGenerator$ModuleHashesBuilder: _SystemModulesPlugin$SystemModulesClassGenerator$ModuleHashesBuilder$$static;
            interface _SystemModulesPlugin$SystemModulesClassGenerator$ModuleHashesBuilder {
              _build(): void;
              _hashForModule(name: string, hash: byte[]): void;
              _newModuleHashesBuilder(): void;
              _pushModuleHashes(): void;
              _cob: jdk.internal.classfile.CodeBuilder;
              _index: int;
              _recordedHashes: jdk.internal.module.ModuleHashes;
            }
            interface SystemModulesPlugin$SystemModulesClassGenerator$ModuleHashesBuilder extends CombineTypes<[_SystemModulesPlugin$SystemModulesClassGenerator$ModuleHashesBuilder, java.lang.Object]> {}
            interface _SystemModulesPlugin$SystemModulesClassGenerator$SetBuilder$$static<T> extends ClassLike {
              _new(elements: java.util.Set<T>, defaultVarIndex: int, nextLocalVar: java.util.function.IntSupplier): SystemModulesPlugin$SystemModulesClassGenerator$SetBuilder<T>;
            }
            let SystemModulesPlugin$SystemModulesClassGenerator$SetBuilder: _SystemModulesPlugin$SystemModulesClassGenerator$SetBuilder$$static<T>;
            interface _SystemModulesPlugin$SystemModulesClassGenerator$SetBuilder<T> {
              _build(cob: jdk.internal.classfile.CodeBuilder): int;
              _generateSetOf(cob: jdk.internal.classfile.CodeBuilder, index: int): void;
              _increment(): void;
              _visitElement(element: T, cob: jdk.internal.classfile.CodeBuilder): void;
              _defaultVarIndex: int;
              _elements: java.util.Set<T>;
              _localVarIndex: int;
              _nextLocalVar: java.util.function.IntSupplier;
              _refCount: int;
            }
            interface SystemModulesPlugin$SystemModulesClassGenerator$SetBuilder<T> extends CombineTypes<[_SystemModulesPlugin$SystemModulesClassGenerator$SetBuilder<T>, java.lang.Object]> {}
            interface _VendorBugURLPlugin$$static extends ClassLike {
              new(): VendorBugURLPlugin;
            }
            let VendorBugURLPlugin: _VendorBugURLPlugin$$static;
            interface _VendorBugURLPlugin {
              configure(a0: java.util.Map): void;
              getType(): jlink.plugin.Plugin$Category;
              hasArguments(): boolean;
              hasRawArgument(): boolean;
              transform(a0: jlink.plugin.ResourcePool, a1: jlink.plugin.ResourcePoolBuilder): jlink.plugin.ResourcePool;
            }
            interface VendorBugURLPlugin extends CombineTypes<[_VendorBugURLPlugin, jdk.tools.jlink.internal.plugins.VersionPropsPlugin]> {}
            interface _VendorVMBugURLPlugin$$static extends ClassLike {
              new(): VendorVMBugURLPlugin;
            }
            let VendorVMBugURLPlugin: _VendorVMBugURLPlugin$$static;
            interface _VendorVMBugURLPlugin {
              configure(a0: java.util.Map): void;
              getType(): jlink.plugin.Plugin$Category;
              hasArguments(): boolean;
              hasRawArgument(): boolean;
              transform(a0: jlink.plugin.ResourcePool, a1: jlink.plugin.ResourcePoolBuilder): jlink.plugin.ResourcePool;
            }
            interface VendorVMBugURLPlugin extends CombineTypes<[_VendorVMBugURLPlugin, jdk.tools.jlink.internal.plugins.VersionPropsPlugin]> {}
            interface _VendorVersionPlugin$$static extends ClassLike {
              new(): VendorVersionPlugin;
            }
            let VendorVersionPlugin: _VendorVersionPlugin$$static;
            interface _VendorVersionPlugin {
              configure(a0: java.util.Map): void;
              getType(): jlink.plugin.Plugin$Category;
              hasArguments(): boolean;
              hasRawArgument(): boolean;
              transform(a0: jlink.plugin.ResourcePool, a1: jlink.plugin.ResourcePoolBuilder): jlink.plugin.ResourcePool;
            }
            interface VendorVersionPlugin extends CombineTypes<[_VendorVersionPlugin, jdk.tools.jlink.internal.plugins.VersionPropsPlugin]> {}
            interface _VersionPropsPlugin$$static extends ClassLike {
              _VERSION_PROPS_CLASS: string;
              _new(field: string, option: string): VersionPropsPlugin;
              _new(field: string): VersionPropsPlugin;
            }
            let VersionPropsPlugin: _VersionPropsPlugin$$static;
            interface _VersionPropsPlugin {
              configure(config: java.util.Map<string,string>): void;
              getType(): jlink.plugin.Plugin$Category;
              hasArguments(): boolean;
              hasRawArgument(): boolean;
              _redefine(path: string, classFile: byte[]): byte[];
              transform(_in: jlink.plugin.ResourcePool, out: jlink.plugin.ResourcePoolBuilder): jlink.plugin.ResourcePool;
              _field: string;
              _redefined: boolean;
              _value: string;
            }
            interface VersionPropsPlugin extends CombineTypes<[_VersionPropsPlugin, jdk.tools.jlink.internal.plugins.AbstractPlugin]> {}
            interface _ZipPlugin$$static extends ClassLike {
              _compress(bytesIn: byte[], compressionLevel: int): byte[];
              _DEFAULT_COMPRESSION: int;
              new(): ZipPlugin;
              _new(patterns: string[]): ZipPlugin;
              _new(predicate: java.util.function.Predicate<string>): ZipPlugin;
              _new(predicate: java.util.function.Predicate<string>, compressionLevel: int): ZipPlugin;
            }
            let ZipPlugin: _ZipPlugin$$static;
            interface _ZipPlugin {
              configure(config: java.util.Map<string,string>): void;
              getType(): jlink.plugin.Plugin$Category;
              hasArguments(): boolean;
              transform(_in: jlink.plugin.ResourcePool, out: jlink.plugin.ResourcePoolBuilder): jlink.plugin.ResourcePool;
              _compressionLevel: int;
              _predicate: java.util.function.Predicate<string>;
            }
            interface ZipPlugin extends CombineTypes<[_ZipPlugin, jdk.tools.jlink.internal.plugins.AbstractPlugin]> {}
          }
          interface _AbstractResourcePoolEntry$$static extends ClassLike {
            _new(module: string, path: string, type: jlink.plugin.ResourcePoolEntry$Type): AbstractResourcePoolEntry;
          }
          let AbstractResourcePoolEntry: _AbstractResourcePoolEntry$$static;
          interface _AbstractResourcePoolEntry {
            equals(other: any): boolean;
            hashCode(): int;
            moduleName(): string;
            path(): string;
            toString(): string;
            type(): jlink.plugin.ResourcePoolEntry$Type;
            _module: string;
            _path: string;
            _type: jlink.plugin.ResourcePoolEntry$Type;
          }
          interface AbstractResourcePoolEntry extends CombineTypes<[_AbstractResourcePoolEntry, java.lang.Object, jdk.tools.jlink.plugin.ResourcePoolEntry]> {}
          interface _Archive$$static extends ClassLike {
          }
          let Archive: _Archive$$static;
          interface _Archive {
            close(): void;
            entries(): java.util.stream.Stream<Archive$Entry>;
            getPath(): java.nio.file.Path;
            moduleName(): string;
            open(): void;
          }
          interface Archive extends CombineTypes<[_Archive, java.lang.Object]> {}
          interface _Archive$Entry$$static extends ClassLike {
            new(archive: Archive, path: string, name: string, type: Archive$Entry$EntryType): Archive$Entry;
          }
          let Archive$Entry: _Archive$Entry$$static;
          interface _Archive$Entry {
            archive(): Archive;
            getResourcePoolEntryName(): string;
            name(): string;
            size(): long;
            stream(): java.io.InputStream;
            toString(): string;
            type(): Archive$Entry$EntryType;
            _archive: Archive;
            _name: string;
            _path: string;
            _type: Archive$Entry$EntryType;
          }
          interface Archive$Entry extends CombineTypes<[_Archive$Entry, java.lang.Object]> {}
          interface _Archive$Entry$EntryType$$static extends ClassLike {
            valueOf(name: string): Archive$Entry$EntryType;
            values(): Archive$Entry$EntryType[];
            readonly CLASS_OR_RESOURCE: Archive$Entry$EntryType;
            readonly CONFIG: Archive$Entry$EntryType;
            readonly HEADER_FILE: Archive$Entry$EntryType;
            readonly LEGAL_NOTICE: Archive$Entry$EntryType;
            readonly MAN_PAGE: Archive$Entry$EntryType;
            readonly MODULE_NAME: Archive$Entry$EntryType;
            readonly NATIVE_CMD: Archive$Entry$EntryType;
            readonly NATIVE_LIB: Archive$Entry$EntryType;
            readonly SERVICE: Archive$Entry$EntryType;
          }
          let Archive$Entry$EntryType: _Archive$Entry$EntryType$$static;
          interface _Archive$Entry$EntryType {
          }
          interface Archive$Entry$EntryType extends CombineTypes<[_Archive$Entry$EntryType]> {}
          interface _ArchiveEntryResourcePoolEntry$$static extends ClassLike {
            _getImageFileType(entry: Archive$Entry): jlink.plugin.ResourcePoolEntry$Type;
            _new(module: string, path: string, entry: Archive$Entry): ArchiveEntryResourcePoolEntry;
          }
          let ArchiveEntryResourcePoolEntry: _ArchiveEntryResourcePoolEntry$$static;
          interface _ArchiveEntryResourcePoolEntry {
            content(): java.io.InputStream;
            contentLength(): long;
            _entry: Archive$Entry;
          }
          interface ArchiveEntryResourcePoolEntry extends CombineTypes<[_ArchiveEntryResourcePoolEntry, jdk.tools.jlink.internal.AbstractResourcePoolEntry]> {}
          interface _BasicImageWriter$$static extends ClassLike {
            readonly MODULES_IMAGE_NAME: string;
            new(): BasicImageWriter;
            new(byteOrder: java.nio.ByteOrder): BasicImageWriter;
          }
          let BasicImageWriter: _BasicImageWriter$$static;
          interface _BasicImageWriter {
            addLocation(fullname: string, contentOffset: long, a2: long, compressedSize: long): void;
            addString(string: string): int;
            _find(key: string): ImageLocationWriter;
            _generatePerfectHash(): void;
            getByteOrder(): java.nio.ByteOrder;
            getBytes(): byte[];
            _getLocations(): ImageLocationWriter[];
            _getLocationsCount(): int;
            getString(offset: int): string;
            _prepareHeaderBytes(): void;
            _prepareLocationBytes(): void;
            _prepareOffsetBytes(): void;
            _prepareRedirectBytes(): void;
            _prepareStringBytes(): void;
            _prepareTableBytes(): void;
            _allIndexStream: jdk.internal.jimage.ImageStream;
            _byteOrder: java.nio.ByteOrder;
            _headerStream: jdk.internal.jimage.ImageStream;
            _input: java.util.List<ImageLocationWriter>;
            _length: int;
            _locationOffsetStream: jdk.internal.jimage.ImageStream;
            _locationStream: jdk.internal.jimage.ImageStream;
            _locations: ImageLocationWriter[];
            _redirect: int[];
            _redirectStream: jdk.internal.jimage.ImageStream;
            _strings: ImageStringsWriter;
          }
          interface BasicImageWriter extends CombineTypes<[_BasicImageWriter, java.lang.Object]> {}
          interface _ByteArrayResourcePoolEntry$$static extends ClassLike {
            _new(module: string, path: string, type: jlink.plugin.ResourcePoolEntry$Type, buffer: byte[]): ByteArrayResourcePoolEntry;
          }
          let ByteArrayResourcePoolEntry: _ByteArrayResourcePoolEntry$$static;
          interface _ByteArrayResourcePoolEntry {
            content(): java.io.InputStream;
            contentBytes(): byte[];
            contentLength(): long;
            write(out: java.io.OutputStream): void;
            _buffer: byte[];
          }
          interface ByteArrayResourcePoolEntry extends CombineTypes<[_ByteArrayResourcePoolEntry, jdk.tools.jlink.internal.AbstractResourcePoolEntry]> {}
          interface _DirArchive$$static extends ClassLike {
            _getPathName(path: java.nio.file.Path): string;
            _noopConsumer: java.util.function.Consumer<string>;
            new(dirPath: java.nio.file.Path, moduleName: string): DirArchive;
            new(dirPath: java.nio.file.Path, moduleName: string, log: java.util.function.Consumer<string>): DirArchive;
          }
          let DirArchive: _DirArchive$$static;
          interface _DirArchive {
            close(): void;
            entries(): java.util.stream.Stream<Archive$Entry>;
            equals(obj: any): boolean;
            getPath(): java.nio.file.Path;
            hashCode(): int;
            moduleName(): string;
            open(): void;
            _toEntry(p: java.nio.file.Path): Archive$Entry;
            _chop: int;
            _dirPath: java.nio.file.Path;
            _log: java.util.function.Consumer<string>;
            _moduleName: string;
            _open: java.util.List<java.io.InputStream>;
          }
          interface DirArchive extends CombineTypes<[_DirArchive, jdk.tools.jlink.internal.Archive, java.lang.Object]> {}
          interface _DirArchive$FileEntry$$static extends ClassLike {
            _new(a0: DirArchive, path: java.nio.file.Path, name: string): DirArchive$FileEntry;
          }
          let DirArchive$FileEntry: _DirArchive$FileEntry$$static;
          interface _DirArchive$FileEntry {
            size(): long;
            stream(): java.io.InputStream;
            _path: java.nio.file.Path;
            _size: long;
            _this$0: DirArchive;
          }
          interface DirArchive$FileEntry extends CombineTypes<[_DirArchive$FileEntry, jdk.tools.jlink.internal.Archive$Entry]> {}
          interface _ExecutableImage$$static extends ClassLike {
          }
          let ExecutableImage: _ExecutableImage$$static;
          interface _ExecutableImage {
            getExecutionArgs(): java.util.List<string>;
            getHome(): java.nio.file.Path;
            getModules(): java.util.Set<string>;
            getTargetPlatform(): Platform;
            storeLaunchArgs(a0: java.util.List<string>): void;
          }
          interface ExecutableImage extends CombineTypes<[_ExecutableImage, java.lang.Object]> {}
          interface _ImageFileCreator$$static extends ClassLike {
            create(archives: java.util.Set<Archive>, plugins: ImagePluginStack): ExecutableImage;
            create(archives: java.util.Set<Archive>, byteOrder: java.nio.ByteOrder): ExecutableImage;
            create(archives: java.util.Set<Archive>, byteOrder: java.nio.ByteOrder, plugins: ImagePluginStack): ExecutableImage;
            _createPoolManager(archives: java.util.Set<Archive>, entriesForModule: java.util.Map<string,java.util.List<Archive$Entry>>, byteOrder: java.nio.ByteOrder, writer: BasicImageWriter): ResourcePoolManager;
            _generateJImage(allContent: ResourcePoolManager, writer: BasicImageWriter, pluginSupport: ImagePluginStack, out: java.io.DataOutputStream): jlink.plugin.ResourcePool;
            recreateJimage(jimageFile: java.nio.file.Path, archives: java.util.Set<Archive>, pluginSupport: ImagePluginStack): void;
            resourceName(path: string): string;
            splitPath(path: string): string[];
            toPackage(name: string): string;
            _toPackage(name: string, log: boolean): string;
          }
          let ImageFileCreator: _ImageFileCreator$$static;
          interface _ImageFileCreator {
            _readAllEntries(archives: java.util.Set<Archive>): void;
            _writeImage(archives: java.util.Set<Archive>, byteOrder: java.nio.ByteOrder): void;
            _entriesForModule: java.util.Map<string,java.util.List<Archive$Entry>>;
            _plugins: ImagePluginStack;
          }
          interface ImageFileCreator extends CombineTypes<[_ImageFileCreator, java.lang.Object]> {}
          interface _ImageLocationWriter$$static extends ClassLike {
            _newLocation(fullName: string, strings: ImageStringsWriter, contentOffset: long, a3: long, compressedSize: long): ImageLocationWriter;
          }
          let ImageLocationWriter: _ImageLocationWriter$$static;
          interface _ImageLocationWriter {
            _addAttribute(kind: int, value: long): ImageLocationWriter;
            _addAttribute(kind: int, value: string): ImageLocationWriter;
            equals(obj: any): boolean;
            _getLocationOffset(): int;
            hashCode(): int;
            _hashCode(seed: int): int;
            _writeTo(stream: jdk.internal.jimage.ImageStream): void;
            _locationOffset: int;
          }
          interface ImageLocationWriter extends CombineTypes<[_ImageLocationWriter, jdk.internal.jimage.ImageLocation]> {}
          interface _ImagePluginConfiguration$$static extends ClassLike {
            parseConfiguration(pluginsConfiguration: Jlink$PluginsConfiguration): ImagePluginStack;
            _CATEGORIES_ORDER: java.util.List<jlink.plugin.Plugin$Category>;
          }
          let ImagePluginConfiguration: _ImagePluginConfiguration$$static;
          interface _ImagePluginConfiguration {
          }
          interface ImagePluginConfiguration extends CombineTypes<[_ImagePluginConfiguration, java.lang.Object]> {}
          interface _ImagePluginStack$$static extends ClassLike {
            new(): ImagePluginStack;
            new(imageBuilder: jlink.builder.ImageBuilder, plugins: java.util.List<jlink.plugin.Plugin>, lastSorter: jlink.plugin.Plugin): ImagePluginStack;
            new(imageBuilder: jlink.builder.ImageBuilder, plugins: java.util.List<jlink.plugin.Plugin>, lastSorter: jlink.plugin.Plugin, validate: boolean): ImagePluginStack;
          }
          let ImagePluginStack: _ImagePluginStack$$static;
          interface _ImagePluginStack {
            getExecutableImage(): ExecutableImage;
            getImageBuilder(): jlink.builder.ImageBuilder;
            getJImageFileOutputStream(): java.io.DataOutputStream;
            operate(provider: ImagePluginStack$ImageProvider): void;
            storeFiles(original: jlink.plugin.ResourcePool, transformed: jlink.plugin.ResourcePool, writer: BasicImageWriter): void;
            visitResources(resources: ResourcePoolManager): jlink.plugin.ResourcePool;
            _imageBuilder: jlink.builder.ImageBuilder;
            _lastSorter: jlink.plugin.Plugin;
            _plugins: java.util.List<jlink.plugin.Plugin>;
            _resourcePrevisitors: java.util.List<ResourcePrevisitor>;
            _validate: boolean;
          }
          interface ImagePluginStack extends CombineTypes<[_ImagePluginStack, java.lang.Object]> {}
          interface _ImagePluginStack$CheckOrderResourcePoolManager$$static extends ClassLike {
            new(order: java.nio.ByteOrder, orderedList: java.util.List<jlink.plugin.ResourcePoolEntry>, table: StringTable): ImagePluginStack$CheckOrderResourcePoolManager;
          }
          let ImagePluginStack$CheckOrderResourcePoolManager: _ImagePluginStack$CheckOrderResourcePoolManager$$static;
          interface _ImagePluginStack$CheckOrderResourcePoolManager {
            add(resource: jlink.plugin.ResourcePoolEntry): void;
            _currentIndex: int;
            _orderedList: java.util.List<jlink.plugin.ResourcePoolEntry>;
          }
          interface ImagePluginStack$CheckOrderResourcePoolManager extends CombineTypes<[_ImagePluginStack$CheckOrderResourcePoolManager, jdk.tools.jlink.internal.ResourcePoolManager]> {}
          interface _ImagePluginStack$ImageProvider$$static extends ClassLike {
          }
          let ImagePluginStack$ImageProvider: _ImagePluginStack$ImageProvider$$static;
          interface _ImagePluginStack$ImageProvider {
            retrieve(a0: ImagePluginStack): ExecutableImage;
(a0: ImagePluginStack): ExecutableImage;
          }
          interface ImagePluginStack$ImageProvider extends CombineTypes<[_ImagePluginStack$ImageProvider, java.lang.Object]> {}
          interface _ImagePluginStack$LastPoolManager$$static extends ClassLike {
            _new(pool: jlink.plugin.ResourcePool): ImagePluginStack$LastPoolManager;
          }
          let ImagePluginStack$LastPoolManager: _ImagePluginStack$LastPoolManager$$static;
          interface _ImagePluginStack$LastPoolManager {
            add(resource: jlink.plugin.ResourcePoolEntry): void;
            byteOrder(): java.nio.ByteOrder;
            contains(res: jlink.plugin.ResourcePoolEntry): boolean;
            entries(): java.util.stream.Stream<jlink.plugin.ResourcePoolEntry>;
            entryCount(): int;
            findEntry(path: string): java.util.Optional<jlink.plugin.ResourcePoolEntry>;
            findEntryInContext(path: string, context: jlink.plugin.ResourcePoolEntry): java.util.Optional<jlink.plugin.ResourcePoolEntry>;
            findModule(name: string): java.util.Optional<jlink.plugin.ResourcePoolModule>;
            _getUncompressed(res: jlink.plugin.ResourcePoolEntry): jlink.plugin.ResourcePoolEntry;
            isEmpty(): boolean;
            moduleCount(): int;
            modules(): java.util.stream.Stream<jlink.plugin.ResourcePoolModule>;
            _content: java.util.Collection<jlink.plugin.ResourcePoolEntry>;
            _decompressor: jdk.internal.jimage.decompressor.Decompressor;
            _pool: jlink.plugin.ResourcePool;
          }
          interface ImagePluginStack$LastPoolManager extends CombineTypes<[_ImagePluginStack$LastPoolManager, jdk.tools.jlink.internal.ResourcePoolManager]> {}
          interface _ImagePluginStack$LastPoolManager$LastModule$$static extends ClassLike {
            _new(a0: ImagePluginStack$LastPoolManager, module: jlink.plugin.ResourcePoolModule): ImagePluginStack$LastPoolManager$LastModule;
          }
          let ImagePluginStack$LastPoolManager$LastModule: _ImagePluginStack$LastPoolManager$LastModule$$static;
          interface _ImagePluginStack$LastPoolManager$LastModule {
            descriptor(): java.lang.module.ModuleDescriptor;
            entries(): java.util.stream.Stream<jlink.plugin.ResourcePoolEntry>;
            entryCount(): int;
            findEntry(path: string): java.util.Optional<jlink.plugin.ResourcePoolEntry>;
            _initModuleAttributes(): void;
            name(): string;
            packages(): java.util.Set<string>;
            targetPlatform(): string;
            toString(): string;
            _descriptor: java.lang.module.ModuleDescriptor;
            _module: jlink.plugin.ResourcePoolModule;
            _target: jdk.internal.module.ModuleTarget;
            _this$0: ImagePluginStack$LastPoolManager;
          }
          interface ImagePluginStack$LastPoolManager$LastModule extends CombineTypes<[_ImagePluginStack$LastPoolManager$LastModule, jdk.tools.jlink.plugin.ResourcePoolModule, java.lang.Object]> {}
          interface _ImagePluginStack$OrderedResourcePoolManager$$static extends ClassLike {
            new(order: java.nio.ByteOrder, table: StringTable): ImagePluginStack$OrderedResourcePoolManager;
          }
          let ImagePluginStack$OrderedResourcePoolManager: _ImagePluginStack$OrderedResourcePoolManager$$static;
          interface _ImagePluginStack$OrderedResourcePoolManager {
            add(resource: jlink.plugin.ResourcePoolEntry): void;
            _getOrderedList(): java.util.List<jlink.plugin.ResourcePoolEntry>;
            resourcePool(): jlink.plugin.ResourcePool;
            _orderedList: java.util.List<jlink.plugin.ResourcePoolEntry>;
            _poolImpl: ResourcePoolManager$ResourcePoolImpl;
          }
          interface ImagePluginStack$OrderedResourcePoolManager extends CombineTypes<[_ImagePluginStack$OrderedResourcePoolManager, jdk.tools.jlink.internal.ResourcePoolManager]> {}
          interface _ImagePluginStack$OrderedResourcePoolManager$OrderedResourcePool$$static extends ClassLike {
            _new(this$0: ImagePluginStack$OrderedResourcePoolManager): ImagePluginStack$OrderedResourcePoolManager$OrderedResourcePool;
          }
          let ImagePluginStack$OrderedResourcePoolManager$OrderedResourcePool: _ImagePluginStack$OrderedResourcePoolManager$OrderedResourcePool$$static;
          interface _ImagePluginStack$OrderedResourcePoolManager$OrderedResourcePool {
            _getOrderedList(): java.util.List<jlink.plugin.ResourcePoolEntry>;
            _this$0: ImagePluginStack$OrderedResourcePoolManager;
          }
          interface ImagePluginStack$OrderedResourcePoolManager$OrderedResourcePool extends CombineTypes<[_ImagePluginStack$OrderedResourcePoolManager$OrderedResourcePool, jdk.tools.jlink.internal.ResourcePoolManager$ResourcePoolImpl]> {}
          interface _ImagePluginStack$PreVisitStrings$$static extends ClassLike {
          }
          let ImagePluginStack$PreVisitStrings: _ImagePluginStack$PreVisitStrings$$static;
          interface _ImagePluginStack$PreVisitStrings {
            addString(str: string): int;
            _getSortedStrings(): java.util.List<string>;
            getString(id: int): string;
            _currentid: int;
            _reverseMap: java.util.Map<int,string>;
            _stringsMap: java.util.Map<string,int>;
            _stringsUsage: java.util.Map<string,int>;
          }
          interface ImagePluginStack$PreVisitStrings extends CombineTypes<[_ImagePluginStack$PreVisitStrings, java.lang.Object, jdk.tools.jlink.internal.StringTable]> {}
          interface _ImageResourcesTree$$static extends ClassLike {
            isTreeInfoResource(path: string): boolean;
            new(offset: long, a1: BasicImageWriter, writer: java.util.List<string>): ImageResourcesTree;
          }
          let ImageResourcesTree: _ImageResourcesTree$$static;
          interface _ImageResourcesTree {
            addContent(out: java.io.DataOutputStream): void;
            _adder: ImageResourcesTree$LocationsAdder;
            _paths: java.util.List<string>;
          }
          interface ImageResourcesTree extends CombineTypes<[_ImageResourcesTree, java.lang.Object]> {}
          interface _ImageResourcesTree$LocationsAdder$$static extends ClassLike {
            _new(tree: ImageResourcesTree$Tree, offset: long, a2: BasicImageWriter): ImageResourcesTree$LocationsAdder;
          }
          let ImageResourcesTree$LocationsAdder: _ImageResourcesTree$LocationsAdder$$static;
          interface _ImageResourcesTree$LocationsAdder {
            _addLocations(current: ImageResourcesTree$Node): int;
            _computeContent(): java.util.List<byte[]>;
            _computeContent(current: ImageResourcesTree$Node, outLocations: java.util.Map<string,ImageLocationWriter>): int;
            _content: java.util.List<byte[]>;
            _offset: long;
            _tree: ImageResourcesTree$Tree;
            _writer: BasicImageWriter;
          }
          interface ImageResourcesTree$LocationsAdder extends CombineTypes<[_ImageResourcesTree$LocationsAdder, java.lang.Object]> {}
          interface _ImageResourcesTree$Node$$static extends ClassLike {
            _buildPath(item: ImageResourcesTree$Node): string;
          }
          let ImageResourcesTree$Node: _ImageResourcesTree$Node$$static;
          interface _ImageResourcesTree$Node {
            getChildren(name: string): ImageResourcesTree$Node;
            getName(): string;
            getPath(): string;
            _children: java.util.Map<string,ImageResourcesTree$Node>;
            _loc: ImageLocationWriter;
            _name: string;
            _parent: ImageResourcesTree$Node;
          }
          interface ImageResourcesTree$Node extends CombineTypes<[_ImageResourcesTree$Node, java.lang.Object]> {}
          interface _ImageResourcesTree$PackageNode$$static extends ClassLike {
            _new(name: string, parent: ImageResourcesTree$Node): ImageResourcesTree$PackageNode;
          }
          let ImageResourcesTree$PackageNode: _ImageResourcesTree$PackageNode$$static;
          interface _ImageResourcesTree$PackageNode {
            _addReference(name: string, isEmpty: boolean): void;
            _validate(): void;
            _references: java.util.Map<string,ImageResourcesTree$PackageNode$PackageReference>;
          }
          interface ImageResourcesTree$PackageNode extends CombineTypes<[_ImageResourcesTree$PackageNode, jdk.tools.jlink.internal.ImageResourcesTree$Node]> {}
          interface _ImageResourcesTree$PackageNode$PackageReference$$static extends ClassLike {
            _new(name: string, isEmpty: boolean): ImageResourcesTree$PackageNode$PackageReference;
          }
          let ImageResourcesTree$PackageNode$PackageReference: _ImageResourcesTree$PackageNode$PackageReference$$static;
          interface _ImageResourcesTree$PackageNode$PackageReference {
            toString(): string;
            _isEmpty: boolean;
            _name: string;
          }
          interface ImageResourcesTree$PackageNode$PackageReference extends CombineTypes<[_ImageResourcesTree$PackageNode$PackageReference, java.lang.Object]> {}
          interface _ImageResourcesTree$ResourceNode$$static extends ClassLike {
            new(name: string, parent: ImageResourcesTree$Node): ImageResourcesTree$ResourceNode;
          }
          let ImageResourcesTree$ResourceNode: _ImageResourcesTree$ResourceNode$$static;
          interface _ImageResourcesTree$ResourceNode {
          }
          interface ImageResourcesTree$ResourceNode extends CombineTypes<[_ImageResourcesTree$ResourceNode, jdk.tools.jlink.internal.ImageResourcesTree$Node]> {}
          interface _ImageResourcesTree$Tree$$static extends ClassLike {
          }
          let ImageResourcesTree$Tree: _ImageResourcesTree$Tree$$static;
          interface _ImageResourcesTree$Tree {
            _buildTree(): void;
            getMap(): java.util.Map<string,ImageResourcesTree$Node>;
            getModule(node: ImageResourcesTree$Node): string;
            getRoot(): ImageResourcesTree$Node;
            removeRadical(node: ImageResourcesTree$Node): string;
            _removeRadical(path: string, str: string): string;
            toPackageName(node: ImageResourcesTree$Node): string;
            toResourceName(node: ImageResourcesTree$Node): string;
            _directAccess: java.util.Map<string,ImageResourcesTree$Node>;
            _modules: ImageResourcesTree$Node;
            _packages: ImageResourcesTree$Node;
            _paths: java.util.List<string>;
            _root: ImageResourcesTree$Node;
          }
          interface ImageResourcesTree$Tree extends CombineTypes<[_ImageResourcesTree$Tree, java.lang.Object]> {}
          interface _ImageStringsWriter$$static extends ClassLike {
            _EMPTY_OFFSET: int;
            _NOT_FOUND: int;
            _new(): ImageStringsWriter;
          }
          let ImageStringsWriter: _ImageStringsWriter$$static;
          interface _ImageStringsWriter {
            add(string: string): int;
            _addString(string: string): int;
            _find(string: string): int;
            get(offset: int): string;
            _getCount(): int;
            _getSize(): int;
            _getStream(): jdk.internal.jimage.ImageStream;
            _stream: jdk.internal.jimage.ImageStream;
            _stringToOffsetMap: java.util.HashMap<string,int>;
          }
          interface ImageStringsWriter extends CombineTypes<[_ImageStringsWriter, java.lang.Object, jdk.internal.jimage.ImageStrings]> {}
          interface _JarArchive$$static extends ClassLike {
            _new(mn: string, file: java.nio.file.Path, version: java.lang.Runtime$Version): JarArchive;
          }
          let JarArchive: _JarArchive$$static;
          interface _JarArchive {
            close(): void;
            entries(): java.util.stream.Stream<Archive$Entry>;
            equals(obj: any): boolean;
            _getFileName(a0: string): string;
            _getJarFile(): java.util.jar.JarFile;
            getPath(): java.nio.file.Path;
            hashCode(): int;
            moduleName(): string;
            open(): void;
            _toEntry(a0: java.util.zip.ZipEntry): Archive$Entry;
            _toEntryType(a0: string): Archive$Entry$EntryType;
            _file: java.nio.file.Path;
            _jarFile: java.util.jar.JarFile;
            _moduleName: string;
            _version: java.lang.Runtime$Version;
          }
          interface JarArchive extends CombineTypes<[_JarArchive, jdk.tools.jlink.internal.Archive, java.lang.Object]> {}
          interface _JarArchive$JarEntry$$static extends ClassLike {
            _new(this$0: JarArchive, path: string, name: string, type: Archive$Entry$EntryType, file: java.util.zip.ZipFile, entry: java.util.zip.ZipEntry): JarArchive$JarEntry;
          }
          let JarArchive$JarEntry: _JarArchive$JarEntry$$static;
          interface _JarArchive$JarEntry {
            size(): long;
            stream(): java.io.InputStream;
            _entry: java.util.zip.ZipEntry;
            _file: java.util.zip.ZipFile;
            _size: long;
          }
          interface JarArchive$JarEntry extends CombineTypes<[_JarArchive$JarEntry, jdk.tools.jlink.internal.Archive$Entry]> {}
          interface _Jlink$$static extends ClassLike {
            newPlugin(name: string, configuration: java.util.Map<string,string>, pluginsLayer: java.lang.ModuleLayer): jlink.plugin.Plugin;
            new(): Jlink;
          }
          let Jlink: _Jlink$$static;
          interface _Jlink {
            _addAutoEnabledPlugins(pluginsConfig: Jlink$PluginsConfiguration): Jlink$PluginsConfiguration;
            build(config: Jlink$JlinkConfiguration): void;
            build(config: Jlink$JlinkConfiguration, pluginsConfig: Jlink$PluginsConfiguration): void;
          }
          interface Jlink extends CombineTypes<[_Jlink, java.lang.Object]> {}
          interface _Jlink$JlinkConfiguration$$static extends ClassLike {
            new(output: java.nio.file.Path, modules: java.util.Set<string>, endian: java.nio.ByteOrder, finder: java.lang.module.ModuleFinder): Jlink$JlinkConfiguration;
          }
          let Jlink$JlinkConfiguration: _Jlink$JlinkConfiguration$$static;
          interface _Jlink$JlinkConfiguration {
            finder(): java.lang.module.ModuleFinder;
            getByteOrder(): java.nio.ByteOrder;
            getModules(): java.util.Set<string>;
            getOutput(): java.nio.file.Path;
            resolve(): java.lang.module.Configuration;
            resolveAndBind(): java.lang.module.Configuration;
            toString(): string;
            _endian: java.nio.ByteOrder;
            _finder: java.lang.module.ModuleFinder;
            _modules: java.util.Set<string>;
            _output: java.nio.file.Path;
          }
          interface Jlink$JlinkConfiguration extends CombineTypes<[_Jlink$JlinkConfiguration, java.lang.Object]> {}
          interface _Jlink$PluginsConfiguration$$static extends ClassLike {
            new(): Jlink$PluginsConfiguration;
            new(plugins: java.util.List<jlink.plugin.Plugin>): Jlink$PluginsConfiguration;
            new(plugins: java.util.List<jlink.plugin.Plugin>, imageBuilder: jlink.builder.ImageBuilder, lastSorterPluginName: string): Jlink$PluginsConfiguration;
          }
          let Jlink$PluginsConfiguration: _Jlink$PluginsConfiguration$$static;
          interface _Jlink$PluginsConfiguration {
            getImageBuilder(): jlink.builder.ImageBuilder;
            getLastSorterPluginName(): string;
            getPlugins(): java.util.List<jlink.plugin.Plugin>;
            toString(): string;
            _imageBuilder: jlink.builder.ImageBuilder;
            _lastSorterPluginName: string;
            _plugins: java.util.List<jlink.plugin.Plugin>;
          }
          interface Jlink$PluginsConfiguration extends CombineTypes<[_Jlink$PluginsConfiguration, java.lang.Object]> {}
          interface _JlinkPermission$$static extends ClassLike {
            _serialVersionUID: long;
            new(name: string): JlinkPermission;
          }
          let JlinkPermission: _JlinkPermission$$static;
          interface _JlinkPermission {
          }
          interface JlinkPermission extends CombineTypes<[_JlinkPermission, java.security.BasicPermission]> {}
          interface _JlinkTask$$static extends ClassLike {
            createImage(config: Jlink$JlinkConfiguration, plugins: Jlink$PluginsConfiguration): void;
            _createImageProvider(config: Jlink$JlinkConfiguration, retainModulesPath: java.nio.file.Path, ignoreSigning: boolean, bindService: boolean, verbose: boolean, log: java.io.PrintWriter): ImagePluginStack$ImageProvider;
            _deleteDirectory(dir: java.nio.file.Path): void;
            getDefaultModulePath(): java.nio.file.Path;
            limitFinder(finder: java.lang.module.ModuleFinder, roots: java.util.Set<string>, otherMods: java.util.Set<string>): java.lang.module.ModuleFinder;
            newModuleFinder(paths: java.util.List<java.nio.file.Path>, limitMods: java.util.Set<string>, roots: java.util.Set<string>): java.lang.module.ModuleFinder;
            _printProviders(log: java.io.PrintWriter, header: string, modules: java.util.Set<java.lang.module.ModuleReference>): void;
            _printProviders(log: java.io.PrintWriter, header: string, modules: java.util.Set<java.lang.module.ModuleReference>, serviceToUses: java.util.Map<string,java.util.Set<string>>): void;
            _toPathLocation(m: java.lang.module.ResolvedModule): java.nio.file.Path;
            _uses(modules: java.util.Set<java.lang.module.ModuleReference>): java.util.Map<string,java.util.Set<string>>;
            _ALL_MODULE_PATH: string;
            readonly DEBUG: boolean;
            _EXIT_ABNORMAL: int;
            _EXIT_CMDERR: int;
            _EXIT_ERROR: int;
            _EXIT_OK: int;
            _EXIT_SYSERR: int;
            _IGNORE_SIGNING_DEFAULT: boolean;
            readonly OPTIONS_RESOURCE: string;
            _PROGNAME: string;
            _optionsHelper: TaskHelper$OptionsHelper<JlinkTask>;
            _recognizedOptions: TaskHelper$Option<any>[];
            _taskHelper: TaskHelper;
            new(): JlinkTask;
          }
          let JlinkTask: _JlinkTask$$static;
          interface _JlinkTask {
            _cleanupOutput(dir: java.nio.file.Path): void;
            _createImage(config: Jlink$JlinkConfiguration): void;
            _getSaveOpts(): string;
            _initJlinkConfig(): Jlink$JlinkConfiguration;
            _run(args: string[]): int;
            _setLog(out: java.io.PrintWriter, err: java.io.PrintWriter): void;
            _suggestProviders(config: Jlink$JlinkConfiguration, args: java.util.List<string>): void;
            _log: java.io.PrintWriter;
            _options: JlinkTask$OptionsValues;
          }
          interface JlinkTask extends CombineTypes<[_JlinkTask, java.lang.Object]> {}
          interface _JlinkTask$ImageHelper$$static extends ClassLike {
            _findModuleName(modInfoPath: java.nio.file.Path): string;
            _new(cf: java.lang.module.Configuration, modsPaths: java.util.Map<string,java.nio.file.Path>, order: java.nio.ByteOrder, packagedModulesPath: java.nio.file.Path, ignoreSigning: boolean): JlinkTask$ImageHelper;
          }
          let JlinkTask$ImageHelper: _JlinkTask$ImageHelper$$static;
          interface _JlinkTask$ImageHelper {
            _newArchive(module: string, path: java.nio.file.Path): Archive;
            retrieve(stack: ImagePluginStack): ExecutableImage;
            _archives: java.util.Set<Archive>;
            _ignoreSigning: boolean;
            _order: java.nio.ByteOrder;
            _packagedModulesPath: java.nio.file.Path;
            _version: java.lang.Runtime$Version;
          }
          interface JlinkTask$ImageHelper extends CombineTypes<[_JlinkTask$ImageHelper, jdk.tools.jlink.internal.ImagePluginStack$ImageProvider, java.lang.Object]> {}
          interface _JlinkTask$OptionsValues$$static extends ClassLike {
            _new(): JlinkTask$OptionsValues;
          }
          let JlinkTask$OptionsValues: _JlinkTask$OptionsValues$$static;
          interface _JlinkTask$OptionsValues {
            _addMods: java.util.Set<string>;
            _bindServices: boolean;
            _endian: java.nio.ByteOrder;
            _fullVersion: boolean;
            _help: boolean;
            _ignoreSigning: boolean;
            _launchers: java.util.Map<string,string>;
            _limitMods: java.util.Set<string>;
            _modulePath: java.util.List<java.nio.file.Path>;
            _output: java.nio.file.Path;
            _packagedModulesPath: java.nio.file.Path;
            _saveoptsfile: string;
            _suggestProviders: boolean;
            _verbose: boolean;
            _version: boolean;
          }
          interface JlinkTask$OptionsValues extends CombineTypes<[_JlinkTask$OptionsValues, java.lang.Object]> {}
          interface _JmodArchive$$static extends ClassLike {
            _JMOD_EXT: string;
            new(mn: string, jmod: java.nio.file.Path): JmodArchive;
          }
          let JmodArchive: _JmodArchive$$static;
          interface _JmodArchive {
            close(): void;
            _ensureOpen(): void;
            entries(): java.util.stream.Stream<Archive$Entry>;
            equals(obj: any): boolean;
            getPath(): java.nio.file.Path;
            hashCode(): int;
            moduleName(): string;
            open(): void;
            _toEntry(entry: jdk.internal.jmod.JmodFile$Entry): Archive$Entry;
            _toEntryType(section: jdk.internal.jmod.JmodFile$Section): Archive$Entry$EntryType;
            _file: java.nio.file.Path;
            _jmodFile: jdk.internal.jmod.JmodFile;
            _moduleName: string;
          }
          interface JmodArchive extends CombineTypes<[_JmodArchive, jdk.tools.jlink.internal.Archive, java.lang.Object]> {}
          interface _JmodArchive$JmodEntry$$static extends ClassLike {
            _new(this$0: JmodArchive, path: string, name: string, type: Archive$Entry$EntryType, entry: jdk.internal.jmod.JmodFile$Entry): JmodArchive$JmodEntry;
          }
          let JmodArchive$JmodEntry: _JmodArchive$JmodEntry$$static;
          interface _JmodArchive$JmodEntry {
            size(): long;
            stream(): java.io.InputStream;
            _entry: jdk.internal.jmod.JmodFile$Entry;
            _this$0: JmodArchive;
          }
          interface JmodArchive$JmodEntry extends CombineTypes<[_JmodArchive$JmodEntry, jdk.tools.jlink.internal.Archive$Entry]> {}
          interface _Main$$static extends ClassLike {
            main(args: string[]): void;
            main(...args: string[]): void;
            run(out: java.io.PrintWriter, err: java.io.PrintWriter, args: string[]): int;
            run(out: java.io.PrintWriter, err: java.io.PrintWriter, ...args: string[]): int;
            new(): Main;
          }
          let Main: _Main$$static;
          interface _Main {
          }
          interface Main extends CombineTypes<[_Main, java.lang.Object]> {}
          interface _Main$JlinkToolProvider$$static extends ClassLike {
            new(): Main$JlinkToolProvider;
          }
          let Main$JlinkToolProvider: _Main$JlinkToolProvider$$static;
          interface _Main$JlinkToolProvider {
            description(): java.util.Optional<string>;
            name(): string;
            run(out: java.io.PrintWriter, err: java.io.PrintWriter, args: string[]): int;
            run(out: java.io.PrintWriter, err: java.io.PrintWriter, ...args: string[]): int;
          }
          interface Main$JlinkToolProvider extends CombineTypes<[_Main$JlinkToolProvider, java.lang.Object, java.util.spi.ToolProvider]> {}
          interface _ModularJarArchive$$static extends ClassLike {
            _JAR_EXT: string;
            new(mn: string, jmod: java.nio.file.Path, version: java.lang.Runtime$Version): ModularJarArchive;
          }
          let ModularJarArchive: _ModularJarArchive$$static;
          interface _ModularJarArchive {
            _getFileName(entryName: string): string;
            _toEntry(ze: java.util.zip.ZipEntry): Archive$Entry;
            _toEntryType(section: string): Archive$Entry$EntryType;
          }
          interface ModularJarArchive extends CombineTypes<[_ModularJarArchive, jdk.tools.jlink.internal.JarArchive]> {}
          interface _ModuleSorter$$static extends ClassLike {
            new(moduleView: jlink.plugin.ResourcePoolModuleView): ModuleSorter;
          }
          let ModuleSorter: _ModuleSorter$$static;
          interface _ModuleSorter {
            _addModule(module: jlink.plugin.ResourcePoolModule): ModuleSorter;
            _addNode(module: jlink.plugin.ResourcePoolModule): void;
            _build(): void;
            _readModuleDescriptor(module: jlink.plugin.ResourcePoolModule): java.lang.module.ModuleDescriptor;
            sorted(): java.util.stream.Stream<jlink.plugin.ResourcePoolModule>;
            _visit(node: jlink.plugin.ResourcePoolModule, visited: java.util.Set<jlink.plugin.ResourcePoolModule>, done: java.util.Set<jlink.plugin.ResourcePoolModule>): void;
            _graph: java.util.Map<jlink.plugin.ResourcePoolModule,java.util.Set<jlink.plugin.ResourcePoolModule>>;
            _moduleView: jlink.plugin.ResourcePoolModuleView;
            _result: java.util.List<jlink.plugin.ResourcePoolModule>;
          }
          interface ModuleSorter extends CombineTypes<[_ModuleSorter, java.lang.Object]> {}
          interface _PathResourcePoolEntry$$static extends ClassLike {
            new(module: string, path: string, type: jlink.plugin.ResourcePoolEntry$Type, file: java.nio.file.Path): PathResourcePoolEntry;
          }
          let PathResourcePoolEntry: _PathResourcePoolEntry$$static;
          interface _PathResourcePoolEntry {
            content(): java.io.InputStream;
            contentLength(): long;
            equals(a0: any): boolean;
            hashCode(): int;
            toString(): string;
            _file: java.nio.file.Path;
          }
          interface PathResourcePoolEntry extends CombineTypes<[_PathResourcePoolEntry, jdk.tools.jlink.internal.AbstractResourcePoolEntry]> {}
          interface _PerfectHashBuilder$$static<E> extends ClassLike {
            _RETRY_LIMIT: int;
            new(entryComponent: java.lang.Class<any>, bucketComponent: java.lang.Class<any>): PerfectHashBuilder<E>;
          }
          let PerfectHashBuilder: _PerfectHashBuilder$$static<E>;
          interface _PerfectHashBuilder<E> {
            _collidedEntries(bucket: PerfectHashBuilder$Bucket<E>, count: int): boolean;
            _createBuckets(): PerfectHashBuilder$Bucket<E>[];
            generate(): void;
            getCount(): int;
            getOrder(): PerfectHashBuilder$Entry<E>[];
            getRedirect(): int[];
            put(key: string, value: E): PerfectHashBuilder$Entry<E>;
            put(entry: PerfectHashBuilder$Entry<E>): PerfectHashBuilder$Entry<E>;
            _bucketComponent: java.lang.Class<any>;
            _count: int;
            _entryComponent: java.lang.Class<any>;
            _map: java.util.Map<string,PerfectHashBuilder$Entry<E>>;
            _order: PerfectHashBuilder$Entry<E>[];
            _redirect: int[];
          }
          interface PerfectHashBuilder<E> extends CombineTypes<[_PerfectHashBuilder<E>, java.lang.Object]> {}
          interface _PerfectHashBuilder$Bucket$$static<E> extends ClassLike {
            _new(): PerfectHashBuilder$Bucket<E>;
          }
          let PerfectHashBuilder$Bucket: _PerfectHashBuilder$Bucket$$static<E>;
          interface _PerfectHashBuilder$Bucket<E> {
            _add(entry: PerfectHashBuilder$Entry<E>): void;
            compareTo(o: PerfectHashBuilder$Bucket<E>): int;
            compareTo(a0: any): int;
            equals(obj: any): boolean;
            _getFirst(): PerfectHashBuilder$Entry<E>;
            _getList(): java.util.List<PerfectHashBuilder$Entry<E>>;
            _getSize(): int;
            hashCode(): int;
            _list: java.util.List<PerfectHashBuilder$Entry<E>>;
          }
          interface PerfectHashBuilder$Bucket<E> extends CombineTypes<[_PerfectHashBuilder$Bucket<E>, java.lang.Object, java.lang.Comparable<PerfectHashBuilder$Bucket<E>>]> {}
          interface _PerfectHashBuilder$Entry$$static<E> extends ClassLike {
            _new(): PerfectHashBuilder$Entry<E>;
            _new(key: string, value: E): PerfectHashBuilder$Entry<E>;
          }
          let PerfectHashBuilder$Entry: _PerfectHashBuilder$Entry$$static<E>;
          interface _PerfectHashBuilder$Entry<E> {
            equals(other: any): boolean;
            _getKey(): string;
            _getValue(): E;
            _hashCode(seed: int): int;
            hashCode(): int;
            _key: string;
            _value: E;
          }
          interface PerfectHashBuilder$Entry<E> extends CombineTypes<[_PerfectHashBuilder$Entry<E>, java.lang.Object]> {}
          interface _Platform$$static extends ClassLike {
            parsePlatform(platformString: string): Platform;
            runtime(): Platform;
            new(os: jdk.internal.util.OperatingSystem, arch: jdk.internal.util.Architecture): Platform;
          }
          let Platform: _Platform$$static;
          interface _Platform {
            arch(): jdk.internal.util.Architecture;
            equals(o: any): boolean;
            hashCode(): int;
            os(): jdk.internal.util.OperatingSystem;
            toString(): string;
          }
          interface Platform extends CombineTypes<[_Platform, java.lang.Record]> {}
          interface _PluginRepository$$static extends ClassLike {
            getPlugin(name: string, pluginsLayer: java.lang.ModuleLayer): jlink.plugin.Plugin;
            _getPlugin<T>(clazz: java.lang.Class<T>, name: string, pluginsLayer: java.lang.ModuleLayer): T;
            getPlugins(pluginsLayer: java.lang.ModuleLayer): java.util.List<jlink.plugin.Plugin>;
            _getPlugins<T>(clazz: java.lang.Class<T>, pluginsLayer: java.lang.ModuleLayer): java.util.List<T>;
            newPlugin(config: java.util.Map<string,string>, name: string, pluginsLayer: java.lang.ModuleLayer): jlink.plugin.Plugin;
            registerPlugin(plugin: jlink.plugin.Plugin): void;
            unregisterPlugin(name: string): void;
            _registeredPlugins: java.util.Map<string,jlink.plugin.Plugin>;
          }
          let PluginRepository: _PluginRepository$$static;
          interface _PluginRepository {
          }
          interface PluginRepository extends CombineTypes<[_PluginRepository, java.lang.Object]> {}
          interface _PostProcessor$$static extends ClassLike {
          }
          let PostProcessor: _PostProcessor$$static;
          interface _PostProcessor {
            process(a0: ExecutableImage): java.util.List<string>;
(a0: ExecutableImage): java.util.List<string>;
          }
          interface PostProcessor extends CombineTypes<[_PostProcessor, java.lang.Object]> {}
          interface _ResourcePoolConfiguration$$static extends ClassLike {
            _allModRefs(pool: jlink.plugin.ResourcePool): java.util.Map<string,java.lang.module.ModuleReference>;
            _checkPackages(pool: jlink.plugin.ResourcePool): void;
            _descriptorOf(mod: jlink.plugin.ResourcePoolModule): java.lang.module.ModuleDescriptor;
            _moduleReference(desc: java.lang.module.ModuleDescriptor): java.lang.module.ModuleReference;
            _validate(pool: jlink.plugin.ResourcePool): java.lang.module.Configuration;
          }
          let ResourcePoolConfiguration: _ResourcePoolConfiguration$$static;
          interface _ResourcePoolConfiguration {
          }
          interface ResourcePoolConfiguration extends CombineTypes<[_ResourcePoolConfiguration, java.lang.Object]> {}
          interface _ResourcePoolEntryFactory$$static extends ClassLike {
            create(path: string, type: jlink.plugin.ResourcePoolEntry$Type, content: byte[]): jlink.plugin.ResourcePoolEntry;
            create(path: string, type: jlink.plugin.ResourcePoolEntry$Type, file: java.nio.file.Path): jlink.plugin.ResourcePoolEntry;
            create(original: jlink.plugin.ResourcePoolEntry, content: byte[]): jlink.plugin.ResourcePoolEntry;
            create(original: jlink.plugin.ResourcePoolEntry, file: java.nio.file.Path): jlink.plugin.ResourcePoolEntry;
            createSymbolicLink(path: string, type: jlink.plugin.ResourcePoolEntry$Type, target: jlink.plugin.ResourcePoolEntry): jlink.plugin.ResourcePoolEntry;
            _moduleFrom(path: string): string;
          }
          let ResourcePoolEntryFactory: _ResourcePoolEntryFactory$$static;
          interface _ResourcePoolEntryFactory {
          }
          interface ResourcePoolEntryFactory extends CombineTypes<[_ResourcePoolEntryFactory, java.lang.Object]> {}
          interface _ResourcePoolManager$$static extends ClassLike {
            isNamedPackageResource(path: string): boolean;
            newCompressedResource(original: jlink.plugin.ResourcePoolEntry, compressed: java.nio.ByteBuffer, plugin: string, pluginConfig: string, strings: StringTable, order: java.nio.ByteOrder): ResourcePoolManager$CompressedModuleData;
            _readModuleAttributes(mod: jlink.plugin.ResourcePoolModule): jdk.internal.module.ModuleInfo$Attributes;
            new(): ResourcePoolManager;
            new(order: java.nio.ByteOrder): ResourcePoolManager;
            new(order: java.nio.ByteOrder, table: StringTable): ResourcePoolManager;
          }
          let ResourcePoolManager: _ResourcePoolManager$$static;
          interface _ResourcePoolManager {
            add(data: jlink.plugin.ResourcePoolEntry): void;
            byteOrder(): java.nio.ByteOrder;
            contains(data: jlink.plugin.ResourcePoolEntry): boolean;
            entries(): java.util.stream.Stream<jlink.plugin.ResourcePoolEntry>;
            entryCount(): int;
            findEntry(path: string): java.util.Optional<jlink.plugin.ResourcePoolEntry>;
            findEntryInContext(path: string, context: jlink.plugin.ResourcePoolEntry): java.util.Optional<jlink.plugin.ResourcePoolEntry>;
            findModule(name: string): java.util.Optional<jlink.plugin.ResourcePoolModule>;
            getStringTable(): StringTable;
            isEmpty(): boolean;
            moduleCount(): int;
            moduleView(): jlink.plugin.ResourcePoolModuleView;
            modules(): java.util.stream.Stream<jlink.plugin.ResourcePoolModule>;
            resourcePool(): jlink.plugin.ResourcePool;
            resourcePoolBuilder(): jlink.plugin.ResourcePoolBuilder;
            _moduleViewImpl: jlink.plugin.ResourcePoolModuleView;
            _modules: java.util.Map<string,jlink.plugin.ResourcePoolModule>;
            _order: java.nio.ByteOrder;
            _poolBuilderImpl: jlink.plugin.ResourcePoolBuilder;
            _poolImpl: jlink.plugin.ResourcePool;
            _resources: java.util.Map<string,jlink.plugin.ResourcePoolEntry>;
            _table: StringTable;
          }
          interface ResourcePoolManager extends CombineTypes<[_ResourcePoolManager, java.lang.Object]> {}
          interface _ResourcePoolManager$CompressedModuleData$$static extends ClassLike {
          }
          let ResourcePoolManager$CompressedModuleData: _ResourcePoolManager$CompressedModuleData$$static;
          interface _ResourcePoolManager$CompressedModuleData {
            content(): java.io.InputStream;
            contentBytes(): byte[];
            contentLength(): long;
            equals(other: any): boolean;
            getUncompressedSize(): long;
            hashCode(): int;
            toString(): string;
            write(a0: java.io.OutputStream): void;
            _uncompressed_size: long;
          }
          interface ResourcePoolManager$CompressedModuleData extends CombineTypes<[_ResourcePoolManager$CompressedModuleData, jdk.tools.jlink.internal.ByteArrayResourcePoolEntry]> {}
          interface _ResourcePoolManager$ResourcePoolBuilderImpl$$static extends ClassLike {
            _new(this$0: ResourcePoolManager): ResourcePoolManager$ResourcePoolBuilderImpl;
          }
          let ResourcePoolManager$ResourcePoolBuilderImpl: _ResourcePoolManager$ResourcePoolBuilderImpl$$static;
          interface _ResourcePoolManager$ResourcePoolBuilderImpl {
            add(data: jlink.plugin.ResourcePoolEntry): void;
            build(): jlink.plugin.ResourcePool;
            _built: boolean;
            _this$0: ResourcePoolManager;
          }
          interface ResourcePoolManager$ResourcePoolBuilderImpl extends CombineTypes<[_ResourcePoolManager$ResourcePoolBuilderImpl, java.lang.Object, jdk.tools.jlink.plugin.ResourcePoolBuilder]> {}
          interface _ResourcePoolManager$ResourcePoolImpl$$static extends ClassLike {
            new(this$0: ResourcePoolManager): ResourcePoolManager$ResourcePoolImpl;
          }
          let ResourcePoolManager$ResourcePoolImpl: _ResourcePoolManager$ResourcePoolImpl$$static;
          interface _ResourcePoolManager$ResourcePoolImpl {
            byteOrder(): java.nio.ByteOrder;
            contains(data: jlink.plugin.ResourcePoolEntry): boolean;
            entries(): java.util.stream.Stream<jlink.plugin.ResourcePoolEntry>;
            entryCount(): int;
            findEntry(path: string): java.util.Optional<jlink.plugin.ResourcePoolEntry>;
            findEntryInContext(path: string, context: jlink.plugin.ResourcePoolEntry): java.util.Optional<jlink.plugin.ResourcePoolEntry>;
            getStringTable(): StringTable;
            isEmpty(): boolean;
            moduleView(): jlink.plugin.ResourcePoolModuleView;
            _this$0: ResourcePoolManager;
          }
          interface ResourcePoolManager$ResourcePoolImpl extends CombineTypes<[_ResourcePoolManager$ResourcePoolImpl, jdk.tools.jlink.plugin.ResourcePool, java.lang.Object]> {}
          interface _ResourcePoolManager$ResourcePoolModuleImpl$$static extends ClassLike {
          }
          let ResourcePoolManager$ResourcePoolModuleImpl: _ResourcePoolManager$ResourcePoolModuleImpl$$static;
          interface _ResourcePoolManager$ResourcePoolModuleImpl {
            descriptor(): java.lang.module.ModuleDescriptor;
            entries(): java.util.stream.Stream<jlink.plugin.ResourcePoolEntry>;
            entryCount(): int;
            findEntry(path: string): java.util.Optional<jlink.plugin.ResourcePoolEntry>;
            _initModuleAttributes(): void;
            name(): string;
            packages(): java.util.Set<string>;
            targetPlatform(): string;
            toString(): string;
            _descriptor: java.lang.module.ModuleDescriptor;
            _moduleContent: java.util.Map<string,jlink.plugin.ResourcePoolEntry>;
            _name: string;
            _target: jdk.internal.module.ModuleTarget;
          }
          interface ResourcePoolManager$ResourcePoolModuleImpl extends CombineTypes<[_ResourcePoolManager$ResourcePoolModuleImpl, jdk.tools.jlink.plugin.ResourcePoolModule, java.lang.Object]> {}
          interface _ResourcePoolManager$ResourcePoolModuleViewImpl$$static extends ClassLike {
            _new(this$0: ResourcePoolManager): ResourcePoolManager$ResourcePoolModuleViewImpl;
          }
          let ResourcePoolManager$ResourcePoolModuleViewImpl: _ResourcePoolManager$ResourcePoolModuleViewImpl$$static;
          interface _ResourcePoolManager$ResourcePoolModuleViewImpl {
            findModule(name: string): java.util.Optional<jlink.plugin.ResourcePoolModule>;
            moduleCount(): int;
            modules(): java.util.stream.Stream<jlink.plugin.ResourcePoolModule>;
            _this$0: ResourcePoolManager;
          }
          interface ResourcePoolManager$ResourcePoolModuleViewImpl extends CombineTypes<[_ResourcePoolManager$ResourcePoolModuleViewImpl, jdk.tools.jlink.plugin.ResourcePoolModuleView, java.lang.Object]> {}
          interface _ResourcePrevisitor$$static extends ClassLike {
          }
          let ResourcePrevisitor: _ResourcePrevisitor$$static;
          interface _ResourcePrevisitor {
            previsit(a0: jlink.plugin.ResourcePool, a1: StringTable): void;
(a0: jlink.plugin.ResourcePool, a1: StringTable): void;
          }
          interface ResourcePrevisitor extends CombineTypes<[_ResourcePrevisitor, java.lang.Object]> {}
          interface _StringTable$$static extends ClassLike {
          }
          let StringTable: _StringTable$$static;
          interface _StringTable {
            addString(a0: string): int;
            getString(a0: int): string;
          }
          interface StringTable extends CombineTypes<[_StringTable, java.lang.Object]> {}
          interface _SymLinkResourcePoolEntry$$static extends ClassLike {
            new(module: string, path: string, type: jlink.plugin.ResourcePoolEntry$Type, target: jlink.plugin.ResourcePoolEntry): SymLinkResourcePoolEntry;
          }
          let SymLinkResourcePoolEntry: _SymLinkResourcePoolEntry$$static;
          interface _SymLinkResourcePoolEntry {
            content(): java.io.InputStream;
            contentLength(): long;
            equals(a0: any): boolean;
            hashCode(): int;
            linkedTarget(): jlink.plugin.ResourcePoolEntry;
            toString(): string;
            _target: jlink.plugin.ResourcePoolEntry;
          }
          interface SymLinkResourcePoolEntry extends CombineTypes<[_SymLinkResourcePoolEntry, jdk.tools.jlink.internal.AbstractResourcePoolEntry]> {}
          interface _TaskHelper$$static extends ClassLike {
            _showsPlugin(plugin: jlink.plugin.Plugin): boolean;
            readonly JIMAGE_BUNDLE: string;
            readonly JLINK_BUNDLE: string;
            new(path: string): TaskHelper;
          }
          let TaskHelper: _TaskHelper$$static;
          interface _TaskHelper {
            getMessage(key: string, args: any[]): string;
            getMessage(key: string, ...args: any[]): string;
            getPluginsConfig(output: java.nio.file.Path, launchers: java.util.Map<string,string>): Jlink$PluginsConfiguration;
            newBadArgs(key: string, args: any[]): TaskHelper$BadArgs;
            newBadArgs(key: string, ...args: any[]): TaskHelper$BadArgs;
            newOptionsHelper<T>(clazz: java.lang.Class<T>, options: TaskHelper$Option<any>[]): TaskHelper$OptionsHelper<T>;
            reportError(key: string, args: any[]): void;
            reportError(key: string, ...args: any[]): void;
            reportUnknownError(message: string): void;
            setLog(log: java.io.PrintWriter): void;
            showVersion(full: boolean): void;
            version(key: string): string;
            warning(key: string, args: any[]): void;
            warning(key: string, ...args: any[]): void;
            _bundleHelper: TaskHelper$ResourceBundleHelper;
            _log: java.io.PrintWriter;
            _pluginOptions: TaskHelper$PluginsHelper;
          }
          interface TaskHelper extends CombineTypes<[_TaskHelper, java.lang.Object]> {}
          interface _TaskHelper$BadArgs$$static extends ClassLike {
            _serialVersionUID: long;
          }
          let TaskHelper$BadArgs: _TaskHelper$BadArgs$$static;
          interface _TaskHelper$BadArgs {
            showUsage(b: boolean): TaskHelper$BadArgs;
            readonly args: any[];
            readonly key: string;
            showUsage: boolean;
            _this$0: TaskHelper;
          }
          interface TaskHelper$BadArgs extends CombineTypes<[_TaskHelper$BadArgs, java.lang.Exception]> {}
          interface _TaskHelper$Option$$static<T> extends ClassLike {
            new(hasArg: boolean, processing: TaskHelper$Option$Processing<T>, hidden: boolean, name: string, shortname: string, shortname2: string, isTerminal: boolean): TaskHelper$Option<T>;
            new(hasArg: boolean, processing: TaskHelper$Option$Processing<T>, hidden: boolean, name: string, shortname: string, isTerminal: boolean): TaskHelper$Option<T>;
            new(hasArg: boolean, processing: TaskHelper$Option$Processing<T>, name: string, shortname: string, isTerminal: boolean): TaskHelper$Option<T>;
            new(hasArg: boolean, processing: TaskHelper$Option$Processing<T>, name: string, shortname: string, shortname2: string): TaskHelper$Option<T>;
            new(hasArg: boolean, processing: TaskHelper$Option$Processing<T>, name: string, shortname: string): TaskHelper$Option<T>;
            new(hasArg: boolean, processing: TaskHelper$Option$Processing<T>, hidden: boolean, name: string): TaskHelper$Option<T>;
            new(hasArg: boolean, processing: TaskHelper$Option$Processing<T>, name: string): TaskHelper$Option<T>;
          }
          let TaskHelper$Option: _TaskHelper$Option$$static<T>;
          interface _TaskHelper$Option<T> {
            compareTo(object: any): int;
            getName(): string;
            getShortname(): string;
            ignoreRest(): boolean;
            isHidden(): boolean;
            isTerminal(): boolean;
            matches(opt: string): boolean;
            _process(task: T, opt: string, arg: string): void;
            resourceName(): string;
            resourcePrefix(): string;
            _hasArg: boolean;
            _hidden: boolean;
            _name: string;
            _processing: TaskHelper$Option$Processing<T>;
            _shortname: string;
            _shortname2: string;
            _terminalOption: boolean;
          }
          interface TaskHelper$Option<T> extends CombineTypes<[_TaskHelper$Option<T>, java.lang.Comparable<T>, java.lang.Object]> {}
          interface _TaskHelper$Option$Processing$$static<T> extends ClassLike {
          }
          let TaskHelper$Option$Processing: _TaskHelper$Option$Processing$$static<T>;
          interface _TaskHelper$Option$Processing<T> {
            process(a0: T, a1: string, a2: string): void;
(a0: T, a1: string, a2: string): void;
          }
          interface TaskHelper$Option$Processing<T> extends CombineTypes<[_TaskHelper$Option$Processing<T>, java.lang.Object]> {}
          interface _TaskHelper$OptionsHelper$$static<T> extends ClassLike {
            _new(this$0: java.util.List<TaskHelper$Option<T>>): TaskHelper$OptionsHelper<T>;
          }
          let TaskHelper$OptionsHelper: _TaskHelper$OptionsHelper$$static<T>;
          interface _TaskHelper$OptionsHelper<T> {
            _getDefaults(): string;
            _getInputCommand(): string[];
            _getOption(name: string): TaskHelper$Option<T>;
            getPluginsLayer(): java.lang.ModuleLayer;
            handleOptions(task: T, args: string[]): java.util.List<string>;
            listPlugins(): void;
            shouldListPlugins(): boolean;
            showHelp(progName: string): void;
            _showPlugin(plugin: jlink.plugin.Plugin, log: java.io.PrintWriter): void;
            _command: string[];
            _defaults: string;
            _options: java.util.List<TaskHelper$Option<T>>;
            _this$0: TaskHelper;
          }
          interface TaskHelper$OptionsHelper<T> extends CombineTypes<[_TaskHelper$OptionsHelper<T>, java.lang.Object]> {}
          interface _TaskHelper$PluginOption$$static extends ClassLike {
            new(hasArg: boolean, processing: TaskHelper$Option$Processing<TaskHelper$PluginsHelper>, hidden: boolean, name: string, shortname: string): TaskHelper$PluginOption;
            new(hasArg: boolean, processing: TaskHelper$Option$Processing<TaskHelper$PluginsHelper>, hidden: boolean, name: string): TaskHelper$PluginOption;
          }
          let TaskHelper$PluginOption: _TaskHelper$PluginOption$$static;
          interface _TaskHelper$PluginOption {
            resourcePrefix(): string;
          }
          interface TaskHelper$PluginOption extends CombineTypes<[_TaskHelper$PluginOption, TaskHelper$Option<TaskHelper$PluginsHelper>]> {}
          interface _TaskHelper$PluginsHelper$$static extends ClassLike {
            _STRIP_NATIVE_DEBUG_SYMBOLS_NAME: string;
          }
          let TaskHelper$PluginsHelper: _TaskHelper$PluginsHelper$$static;
          interface _TaskHelper$PluginsHelper {
            _addArgumentMap(plugin: jlink.plugin.Plugin): java.util.Map<string,string>;
            _addEmptyArgumentMap(plugin: jlink.plugin.Plugin): void;
            _addOrderedPluginOptions(plugin: jlink.plugin.Plugin, optionsSeen: java.util.Set<string>): void;
            _argListFor(plugin: jlink.plugin.Plugin): java.util.List<java.util.Map<string,string>>;
            _getOption(name: string): TaskHelper$PluginOption;
            _getPluginsConfig(output: java.nio.file.Path, launchers: java.util.Map<string,string>): Jlink$PluginsConfiguration;
            _lastSorter: string;
            _listPlugins: boolean;
            _mainOptions: java.util.List<TaskHelper$PluginOption>;
            _pluginToMaps: java.util.Map<jlink.plugin.Plugin,java.util.List<java.util.Map<string,string>>>;
            _plugins: java.util.List<jlink.plugin.Plugin>;
            _pluginsLayer: java.lang.ModuleLayer;
            _pluginsOptions: java.util.List<TaskHelper$PluginOption>;
            _this$0: TaskHelper;
          }
          interface TaskHelper$PluginsHelper extends CombineTypes<[_TaskHelper$PluginsHelper, java.lang.Object]> {}
          interface _TaskHelper$ResourceBundleHelper$$static extends ClassLike {
            _new(path: string): TaskHelper$ResourceBundleHelper;
          }
          let TaskHelper$ResourceBundleHelper: _TaskHelper$ResourceBundleHelper$$static;
          interface _TaskHelper$ResourceBundleHelper {
            _getMessage(key: string, args: any[]): string;
            _getMessage(key: string, ...args: any[]): string;
            _bundle: java.util.ResourceBundle;
            _pluginBundle: java.util.ResourceBundle;
          }
          interface TaskHelper$ResourceBundleHelper extends CombineTypes<[_TaskHelper$ResourceBundleHelper, java.lang.Object]> {}
          interface _Utils$$static extends ClassLike {
            getJRTFSPath(first: string, more: string[]): java.nio.file.Path;
            getJRTFSPath(first: string, ...more: string[]): java.nio.file.Path;
            getJRTFSPathMatcher(pattern: string): java.nio.file.PathMatcher;
            getPathMatcher(fs: java.nio.file.FileSystem, pattern: string): java.nio.file.PathMatcher;
            getSortedPlugins(plugins: java.util.List<jlink.plugin.Plugin>): java.util.List<jlink.plugin.Plugin>;
            isAutoEnabled(prov: jlink.plugin.Plugin): boolean;
            isBuiltin(prov: jlink.plugin.Plugin): boolean;
            isDisabled(prov: jlink.plugin.Plugin): boolean;
            isFunctional(prov: jlink.plugin.Plugin): boolean;
            jrtFileSystem(): java.nio.file.FileSystem;
            parseList(arguments: string): java.util.List<string>;
            _JRT_FILE_SYSTEM: java.nio.file.FileSystem;
            _THIS_MODULE: java.lang.Module;
          }
          let Utils: _Utils$$static;
          interface _Utils {
          }
          interface Utils extends CombineTypes<[_Utils, java.lang.Object]> {}
        }
        module plugin {
          interface _Plugin$$static extends ClassLike {
          }
          let Plugin: _Plugin$$static;
          interface _Plugin {
            configure(config: java.util.Map<string,string>): void;
            getArgumentsDescription(): string;
            getDescription(): string;
            getName(): string;
            getOption(): string;
            getState(): java.util.Set<Plugin$State>;
            getStateDescription(): string;
            getType(): Plugin$Category;
            getUsage(): string;
            hasArguments(): boolean;
            hasRawArgument(): boolean;
            transform(a0: ResourcePool, a1: ResourcePoolBuilder): ResourcePool;
(a0: ResourcePool, a1: ResourcePoolBuilder): ResourcePool;
          }
          interface Plugin extends CombineTypes<[_Plugin, java.lang.Object]> {}
          interface _Plugin$Category$$static extends ClassLike {
            valueOf(name: string): Plugin$Category;
            values(): Plugin$Category[];
            readonly ADDER: Plugin$Category;
            readonly COMPRESSOR: Plugin$Category;
            readonly FILTER: Plugin$Category;
            readonly METAINFO_ADDER: Plugin$Category;
            readonly MODULEINFO_TRANSFORMER: Plugin$Category;
            readonly PACKAGER: Plugin$Category;
            readonly PROCESSOR: Plugin$Category;
            readonly SORTER: Plugin$Category;
            readonly TRANSFORMER: Plugin$Category;
            readonly VERIFIER: Plugin$Category;
          }
          let Plugin$Category: _Plugin$Category$$static;
          interface _Plugin$Category {
            getName(): string;
            _name: string;
          }
          interface Plugin$Category extends CombineTypes<[_Plugin$Category]> {}
          interface _Plugin$State$$static extends ClassLike {
            valueOf(name: string): Plugin$State;
            values(): Plugin$State[];
            readonly AUTO_ENABLED: Plugin$State;
            readonly DISABLED: Plugin$State;
            readonly FUNCTIONAL: Plugin$State;
          }
          let Plugin$State: _Plugin$State$$static;
          interface _Plugin$State {
          }
          interface Plugin$State extends CombineTypes<[_Plugin$State]> {}
          interface _PluginException$$static extends ClassLike {
            _serialVersionUID: long;
            new(): PluginException;
            new(ex: java.lang.Throwable): PluginException;
            new(msg: string): PluginException;
            new(msg: string, thr: java.lang.Throwable): PluginException;
          }
          let PluginException: _PluginException$$static;
          interface _PluginException {
          }
          interface PluginException extends CombineTypes<[_PluginException, java.lang.RuntimeException]> {}
          interface _ResourcePool$$static extends ClassLike {
          }
          let ResourcePool: _ResourcePool$$static;
          interface _ResourcePool {
            byteOrder(): java.nio.ByteOrder;
            contains(a0: ResourcePoolEntry): boolean;
            entries(): java.util.stream.Stream<ResourcePoolEntry>;
            entryCount(): int;
            findEntry(a0: string): java.util.Optional<ResourcePoolEntry>;
            findEntryInContext(a0: string, a1: ResourcePoolEntry): java.util.Optional<ResourcePoolEntry>;
            isEmpty(): boolean;
            moduleView(): ResourcePoolModuleView;
            transformAndCopy(transform: java.util.function.Function<ResourcePoolEntry,ResourcePoolEntry>, outBuilder: ResourcePoolBuilder): void;
          }
          interface ResourcePool extends CombineTypes<[_ResourcePool, java.lang.Object]> {}
          interface _ResourcePoolBuilder$$static extends ClassLike {
          }
          let ResourcePoolBuilder: _ResourcePoolBuilder$$static;
          interface _ResourcePoolBuilder {
            add(a0: ResourcePoolEntry): void;
            build(): ResourcePool;
          }
          interface ResourcePoolBuilder extends CombineTypes<[_ResourcePoolBuilder, java.lang.Object]> {}
          interface _ResourcePoolEntry$$static extends ClassLike {
            create(path: string, type: ResourcePoolEntry$Type, content: byte[]): ResourcePoolEntry;
            create(path: string, content: byte[]): ResourcePoolEntry;
            create(path: string, type: ResourcePoolEntry$Type, file: java.nio.file.Path): ResourcePoolEntry;
            create(path: string, file: java.nio.file.Path): ResourcePoolEntry;
            createSymLink(path: string, type: ResourcePoolEntry$Type, target: ResourcePoolEntry): ResourcePoolEntry;
          }
          let ResourcePoolEntry: _ResourcePoolEntry$$static;
          interface _ResourcePoolEntry {
            content(): java.io.InputStream;
            contentBytes(): byte[];
            contentLength(): long;
            copyWithContent(content: byte[]): ResourcePoolEntry;
            copyWithContent(file: java.nio.file.Path): ResourcePoolEntry;
            linkedTarget(): ResourcePoolEntry;
            moduleName(): string;
            path(): string;
            type(): ResourcePoolEntry$Type;
            write(out: java.io.OutputStream): void;
          }
          interface ResourcePoolEntry extends CombineTypes<[_ResourcePoolEntry, java.lang.Object]> {}
          interface _ResourcePoolEntry$Type$$static extends ClassLike {
            valueOf(name: string): ResourcePoolEntry$Type;
            values(): ResourcePoolEntry$Type[];
            readonly CLASS_OR_RESOURCE: ResourcePoolEntry$Type;
            readonly CONFIG: ResourcePoolEntry$Type;
            readonly HEADER_FILE: ResourcePoolEntry$Type;
            readonly LEGAL_NOTICE: ResourcePoolEntry$Type;
            readonly MAN_PAGE: ResourcePoolEntry$Type;
            readonly NATIVE_CMD: ResourcePoolEntry$Type;
            readonly NATIVE_LIB: ResourcePoolEntry$Type;
            readonly TOP: ResourcePoolEntry$Type;
          }
          let ResourcePoolEntry$Type: _ResourcePoolEntry$Type$$static;
          interface _ResourcePoolEntry$Type {
          }
          interface ResourcePoolEntry$Type extends CombineTypes<[_ResourcePoolEntry$Type]> {}
          interface _ResourcePoolModule$$static extends ClassLike {
          }
          let ResourcePoolModule: _ResourcePoolModule$$static;
          interface _ResourcePoolModule {
            descriptor(): java.lang.module.ModuleDescriptor;
            entries(): java.util.stream.Stream<ResourcePoolEntry>;
            entryCount(): int;
            findEntry(a0: string): java.util.Optional<ResourcePoolEntry>;
            name(): string;
            packages(): java.util.Set<string>;
            targetPlatform(): string;
          }
          interface ResourcePoolModule extends CombineTypes<[_ResourcePoolModule, java.lang.Object]> {}
          interface _ResourcePoolModuleView$$static extends ClassLike {
          }
          let ResourcePoolModuleView: _ResourcePoolModuleView$$static;
          interface _ResourcePoolModuleView {
            findModule(a0: string): java.util.Optional<ResourcePoolModule>;
            findModule(entry: ResourcePoolEntry): java.util.Optional<ResourcePoolModule>;
            moduleCount(): int;
            modules(): java.util.stream.Stream<ResourcePoolModule>;
          }
          interface ResourcePoolModuleView extends CombineTypes<[_ResourcePoolModuleView, java.lang.Object]> {}
        }
        module resources {
          interface _jlink$$static extends ClassLike {
            new(): jlink;
          }
          let jlink: _jlink$$static;
          interface _jlink {
            _getContents(): any[][];
          }
          interface jlink extends CombineTypes<[_jlink, java.util.ListResourceBundle]> {}
          interface _jlink_de$$static extends ClassLike {
            new(): jlink_de;
          }
          let jlink_de: _jlink_de$$static;
          interface _jlink_de {
            _getContents(): any[][];
          }
          interface jlink_de extends CombineTypes<[_jlink_de, java.util.ListResourceBundle]> {}
          interface _jlink_ja$$static extends ClassLike {
            new(): jlink_ja;
          }
          let jlink_ja: _jlink_ja$$static;
          interface _jlink_ja {
            _getContents(): any[][];
          }
          interface jlink_ja extends CombineTypes<[_jlink_ja, java.util.ListResourceBundle]> {}
          interface _jlink_zh_CN$$static extends ClassLike {
            new(): jlink_zh_CN;
          }
          let jlink_zh_CN: _jlink_zh_CN$$static;
          interface _jlink_zh_CN {
            _getContents(): any[][];
          }
          interface jlink_zh_CN extends CombineTypes<[_jlink_zh_CN, java.util.ListResourceBundle]> {}
          interface _plugins$$static extends ClassLike {
            new(): plugins;
          }
          let plugins: _plugins$$static;
          interface _plugins {
            _getContents(): any[][];
          }
          interface plugins extends CombineTypes<[_plugins, java.util.ListResourceBundle]> {}
          interface _plugins_de$$static extends ClassLike {
            new(): plugins_de;
          }
          let plugins_de: _plugins_de$$static;
          interface _plugins_de {
            _getContents(): any[][];
          }
          interface plugins_de extends CombineTypes<[_plugins_de, java.util.ListResourceBundle]> {}
          interface _plugins_ja$$static extends ClassLike {
            new(): plugins_ja;
          }
          let plugins_ja: _plugins_ja$$static;
          interface _plugins_ja {
            _getContents(): any[][];
          }
          interface plugins_ja extends CombineTypes<[_plugins_ja, java.util.ListResourceBundle]> {}
          interface _plugins_zh_CN$$static extends ClassLike {
            new(): plugins_zh_CN;
          }
          let plugins_zh_CN: _plugins_zh_CN$$static;
          interface _plugins_zh_CN {
            _getContents(): any[][];
          }
          interface plugins_zh_CN extends CombineTypes<[_plugins_zh_CN, java.util.ListResourceBundle]> {}
        }
      }
      module jmod {
        module resources {
          interface _jmod$$static extends ClassLike {
            new(): jmod;
          }
          let jmod: _jmod$$static;
          interface _jmod {
            _getContents(): any[][];
          }
          interface jmod extends CombineTypes<[_jmod, java.util.ListResourceBundle]> {}
          interface _jmod_de$$static extends ClassLike {
            new(): jmod_de;
          }
          let jmod_de: _jmod_de$$static;
          interface _jmod_de {
            _getContents(): any[][];
          }
          interface jmod_de extends CombineTypes<[_jmod_de, java.util.ListResourceBundle]> {}
          interface _jmod_ja$$static extends ClassLike {
            new(): jmod_ja;
          }
          let jmod_ja: _jmod_ja$$static;
          interface _jmod_ja {
            _getContents(): any[][];
          }
          interface jmod_ja extends CombineTypes<[_jmod_ja, java.util.ListResourceBundle]> {}
          interface _jmod_zh_CN$$static extends ClassLike {
            new(): jmod_zh_CN;
          }
          let jmod_zh_CN: _jmod_zh_CN$$static;
          interface _jmod_zh_CN {
            _getContents(): any[][];
          }
          interface jmod_zh_CN extends CombineTypes<[_jmod_zh_CN, java.util.ListResourceBundle]> {}
        }
        interface _JmodOutputStream$$static extends ClassLike {
          _newOutputStream(file: java.nio.file.Path, date: java.time.LocalDateTime, compressLevel: int): JmodOutputStream;
        }
        let JmodOutputStream: _JmodOutputStream$$static;
        interface _JmodOutputStream {
          close(): void;
          contains(section: jdk.internal.jmod.JmodFile$Section, path: string): boolean;
          _newEntry(section: jdk.internal.jmod.JmodFile$Section, path: string): java.util.zip.ZipEntry;
          write(b: int): void;
          writeEntry(_in: java.io.InputStream, section: jdk.internal.jmod.JmodFile$Section, name: string): void;
          writeEntry(bytes: byte[], section: jdk.internal.jmod.JmodFile$Section, path: string): void;
          writeEntry(_in: java.io.InputStream, e: jdk.internal.jmod.JmodFile$Entry): void;
          _date: java.time.LocalDateTime;
          _entries: java.util.Map<jdk.internal.jmod.JmodFile$Section,java.util.Set<string>>;
          _zos: java.util.zip.ZipOutputStream;
        }
        interface JmodOutputStream extends CombineTypes<[_JmodOutputStream, java.io.OutputStream, java.lang.AutoCloseable]> {}
        interface _JmodTask$$static extends ClassLike {
          _getLastElement<E>(list: java.util.List<E>): E;
          _getMessage(key: string, args: any[]): string;
          _getMessage(key: string, ...args: any[]): string;
          _isValidJavaIdentifier(mainClass: string): boolean;
          _jmodTempFilePath(target: java.nio.file.Path): java.nio.file.Path;
          _toLowerCaseString<T>(c: java.util.Collection<T>): string;
          _toString<T>(c: java.util.Collection<T>): string;
          _CMD_FILENAME: string;
          _CWD: java.nio.file.Path;
          _DATE_MAX: java.time.ZonedDateTime;
          _DATE_MIN: java.time.ZonedDateTime;
          _EXIT_ABNORMAL: int;
          _EXIT_CMDERR: int;
          _EXIT_ERROR: int;
          _EXIT_OK: int;
          _EXIT_SYSERR: int;
          _MODULE_INFO: string;
          _PROGNAME: string;
          new(): JmodTask;
        }
        let JmodTask: _JmodTask$$static;
        interface _JmodTask {
          _create(): boolean;
          _describe(): boolean;
          _describeModule(md: java.lang.module.ModuleDescriptor, target: jdk.internal.module.ModuleTarget, hashes: jdk.internal.module.ModuleHashes): void;
          _extract(): boolean;
          _handleOptions(args: string[]): void;
          _hashModules(): boolean;
          _list(): boolean;
          _reportError(message: string): void;
          run(args: string[]): int;
          _setLog(out: java.io.PrintWriter, err: java.io.PrintWriter): void;
          _showHelp(): void;
          _showUsageSummary(): void;
          _showVersion(): void;
          _toHex(ba: byte[]): string;
          _version(): string;
          _warning(key: string, args: any[]): void;
          _warning(key: string, ...args: any[]): void;
          _options: JmodTask$Options;
          _out: java.io.PrintWriter;
          _parser: jdk.internal.joptsimple.OptionParser;
        }
        interface JmodTask extends CombineTypes<[_JmodTask, java.lang.Object]> {}
        interface _JmodTask$AbstractPathConverter$$static extends ClassLike {
          _new(): JmodTask$AbstractPathConverter;
        }
        let JmodTask$AbstractPathConverter: _JmodTask$AbstractPathConverter$$static;
        interface _JmodTask$AbstractPathConverter {
          convert(value: string): java.util.List<java.nio.file.Path>;
          convert(a0: string): any;
          _toPath(a0: string): java.nio.file.Path;
(a0: string): java.nio.file.Path;
          valuePattern(): string;
          valueType(): java.lang.Class<java.util.List<java.nio.file.Path>>;
        }
        interface JmodTask$AbstractPathConverter extends CombineTypes<[_JmodTask$AbstractPathConverter, java.lang.Object, jdk.internal.joptsimple.ValueConverter<java.util.List<java.nio.file.Path>>]> {}
        interface _JmodTask$ClassPathConverter$$static extends ClassLike {
          _INSTANCE: jdk.internal.joptsimple.ValueConverter<java.util.List<java.nio.file.Path>>;
          _new(): JmodTask$ClassPathConverter;
        }
        let JmodTask$ClassPathConverter: _JmodTask$ClassPathConverter$$static;
        interface _JmodTask$ClassPathConverter {
          toPath(value: string): java.nio.file.Path;
        }
        interface JmodTask$ClassPathConverter extends CombineTypes<[_JmodTask$ClassPathConverter, jdk.tools.jmod.JmodTask$AbstractPathConverter]> {}
        interface _JmodTask$CommandException$$static extends ClassLike {
          _getMessageOrKey(key: string, args: any[]): string;
          _getMessageOrKey(key: string, ...args: any[]): string;
          _serialVersionUID: long;
          _new(key: string, args: any[]): JmodTask$CommandException;
          _new(key: string, ...args: any[]): JmodTask$CommandException;
        }
        let JmodTask$CommandException: _JmodTask$CommandException$$static;
        interface _JmodTask$CommandException {
          _showUsage(b: boolean): JmodTask$CommandException;
          _showUsage: boolean;
        }
        interface JmodTask$CommandException extends CombineTypes<[_JmodTask$CommandException, java.lang.RuntimeException]> {}
        interface _JmodTask$CompLevelConverter$$static extends ClassLike {
          _new(): JmodTask$CompLevelConverter;
        }
        let JmodTask$CompLevelConverter: _JmodTask$CompLevelConverter$$static;
        interface _JmodTask$CompLevelConverter {
          convert(value: string): int;
          convert(a0: string): any;
          valuePattern(): string;
          valueType(): java.lang.Class<int>;
        }
        interface JmodTask$CompLevelConverter extends CombineTypes<[_JmodTask$CompLevelConverter, java.lang.Object, jdk.internal.joptsimple.ValueConverter<int>]> {}
        interface _JmodTask$DateConverter$$static extends ClassLike {
          _new(): JmodTask$DateConverter;
        }
        let JmodTask$DateConverter: _JmodTask$DateConverter$$static;
        interface _JmodTask$DateConverter {
          convert(value: string): java.time.LocalDateTime;
          convert(a0: string): any;
          valuePattern(): string;
          valueType(): java.lang.Class<java.time.LocalDateTime>;
        }
        interface JmodTask$DateConverter extends CombineTypes<[_JmodTask$DateConverter, jdk.internal.joptsimple.ValueConverter<java.time.LocalDateTime>, java.lang.Object]> {}
        interface _JmodTask$DirPathConverter$$static extends ClassLike {
          _INSTANCE: jdk.internal.joptsimple.ValueConverter<java.util.List<java.nio.file.Path>>;
          _new(): JmodTask$DirPathConverter;
        }
        let JmodTask$DirPathConverter: _JmodTask$DirPathConverter$$static;
        interface _JmodTask$DirPathConverter {
          toPath(value: string): java.nio.file.Path;
        }
        interface JmodTask$DirPathConverter extends CombineTypes<[_JmodTask$DirPathConverter, jdk.tools.jmod.JmodTask$AbstractPathConverter]> {}
        interface _JmodTask$ExtractDirPathConverter$$static extends ClassLike {
          _new(): JmodTask$ExtractDirPathConverter;
        }
        let JmodTask$ExtractDirPathConverter: _JmodTask$ExtractDirPathConverter$$static;
        interface _JmodTask$ExtractDirPathConverter {
          convert(value: string): java.nio.file.Path;
          convert(a0: string): any;
          valuePattern(): string;
          valueType(): java.lang.Class<java.nio.file.Path>;
        }
        interface JmodTask$ExtractDirPathConverter extends CombineTypes<[_JmodTask$ExtractDirPathConverter, jdk.internal.joptsimple.ValueConverter<java.nio.file.Path>, java.lang.Object]> {}
        interface _JmodTask$Hasher$$static extends ClassLike {
          _new(a0: JmodTask, name: string, finder: java.lang.module.ModuleFinder): JmodTask$Hasher;
        }
        let JmodTask$Hasher: _JmodTask$Hasher$$static;
        interface _JmodTask$Hasher {
          _computeHashes(): java.util.Map<string,jdk.internal.module.ModuleHashes>;
          _moduleToPath(name: string): java.nio.file.Path;
          _recordHashes(_in: java.io.InputStream, out: java.io.OutputStream, hashes: jdk.internal.module.ModuleHashes): void;
          _updateJmodFile(target: java.nio.file.Path, tempTarget: java.nio.file.Path, moduleHashes: jdk.internal.module.ModuleHashes): void;
          _updateModularJar(target: java.nio.file.Path, tempTarget: java.nio.file.Path, moduleHashes: jdk.internal.module.ModuleHashes): void;
          _updateModuleInfo(name: string, moduleHashes: jdk.internal.module.ModuleHashes): void;
          _configuration: java.lang.module.Configuration;
          _hashesBuilder: jdk.internal.module.ModuleHashesBuilder;
          _moduleName: string;
          _modules: java.util.Set<string>;
          _this$0: JmodTask;
        }
        interface JmodTask$Hasher extends CombineTypes<[_JmodTask$Hasher, java.lang.Object]> {}
        interface _JmodTask$JmodFileWriter$$static extends ClassLike {
          _new(a0: JmodTask): JmodTask$JmodFileWriter;
        }
        let JmodTask$JmodFileWriter: _JmodTask$JmodFileWriter$$static;
        interface _JmodTask$JmodFileWriter {
          _computeHashes(descriptor: java.lang.module.ModuleDescriptor): jdk.internal.module.ModuleHashes;
          _findPackages(classpath: java.util.List<java.nio.file.Path>): java.util.Set<string>;
          _findPackages(dir: java.nio.file.Path): java.util.Set<string>;
          _findPackages(jf: java.util.jar.JarFile): java.util.Set<string>;
          _isResource(name: string): boolean;
          _matches(path: java.nio.file.Path, matchers: java.util.List<java.nio.file.PathMatcher>): boolean;
          _newModuleInfoSupplier(): java.util.function.Supplier<java.io.InputStream>;
          _processClasses(out: JmodOutputStream, classpaths: java.util.List<java.nio.file.Path>): void;
          _processSection(out: JmodOutputStream, section: jdk.internal.jmod.JmodFile$Section, paths: java.util.List<java.nio.file.Path>): void;
          _processSection(out: JmodOutputStream, section: jdk.internal.jmod.JmodFile$Section, path: java.nio.file.Path): void;
          _toPackageName(path: java.nio.file.Path): string;
          _toPackageName(entry: java.util.zip.ZipEntry): string;
          _validatePackages(descriptor: java.lang.module.ModuleDescriptor, packages: java.util.Set<string>): void;
          _write(out: JmodOutputStream): void;
          _writeModuleInfo(out: JmodOutputStream, packages: java.util.Set<string>): void;
          _classpath: java.util.List<java.nio.file.Path>;
          _cmds: java.util.List<java.nio.file.Path>;
          _configs: java.util.List<java.nio.file.Path>;
          _excludes: java.util.List<java.nio.file.PathMatcher>;
          _headerFiles: java.util.List<java.nio.file.Path>;
          _legalNotices: java.util.List<java.nio.file.Path>;
          _libs: java.util.List<java.nio.file.Path>;
          _mainClass: string;
          _manPages: java.util.List<java.nio.file.Path>;
          _moduleResolution: jdk.internal.module.ModuleResolution;
          _moduleVersion: java.lang.module.ModuleDescriptor$Version;
          _targetPlatform: string;
          _this$0: JmodTask;
        }
        interface JmodTask$JmodFileWriter extends CombineTypes<[_JmodTask$JmodFileWriter, java.lang.Object]> {}
        interface _JmodTask$JmodFileWriter$JarEntryConsumer$$static extends ClassLike {
          _new(this$1: JmodTask$JmodFileWriter, out: JmodOutputStream, jarfile: java.util.jar.JarFile): JmodTask$JmodFileWriter$JarEntryConsumer;
        }
        let JmodTask$JmodFileWriter$JarEntryConsumer: _JmodTask$JmodFileWriter$JarEntryConsumer$$static;
        interface _JmodTask$JmodFileWriter$JarEntryConsumer {
          accept(je: java.util.jar.JarEntry): void;
          accept(a0: any): void;
          test(je: java.util.jar.JarEntry): boolean;
          test(a0: any): boolean;
          _jarfile: java.util.jar.JarFile;
          _out: JmodOutputStream;
          _this$1: JmodTask$JmodFileWriter;
        }
        interface JmodTask$JmodFileWriter$JarEntryConsumer extends CombineTypes<[_JmodTask$JmodFileWriter$JarEntryConsumer, java.util.function.Predicate<java.util.jar.JarEntry>, java.lang.Object, java.util.function.Consumer<java.util.jar.JarEntry>]> {}
        interface _JmodTask$JmodHelpFormatter$$static extends ClassLike {
        }
        let JmodTask$JmodHelpFormatter: _JmodTask$JmodHelpFormatter$$static;
        interface _JmodTask$JmodHelpFormatter {
          format(options: java.util.Map<string,jdk.internal.joptsimple.OptionDescriptor>): string;
          _opts: JmodTask$Options;
        }
        interface JmodTask$JmodHelpFormatter extends CombineTypes<[_JmodTask$JmodHelpFormatter, jdk.internal.joptsimple.BuiltinHelpFormatter]> {}
        interface _JmodTask$Mode$$static extends ClassLike {
          valueOf(name: string): JmodTask$Mode;
          values(): JmodTask$Mode[];
          readonly CREATE: JmodTask$Mode;
          readonly DESCRIBE: JmodTask$Mode;
          readonly EXTRACT: JmodTask$Mode;
          readonly HASH: JmodTask$Mode;
          readonly LIST: JmodTask$Mode;
        }
        let JmodTask$Mode: _JmodTask$Mode$$static;
        interface _JmodTask$Mode {
        }
        interface JmodTask$Mode extends CombineTypes<[_JmodTask$Mode]> {}
        interface _JmodTask$ModuleVersionConverter$$static extends ClassLike {
          _new(): JmodTask$ModuleVersionConverter;
        }
        let JmodTask$ModuleVersionConverter: _JmodTask$ModuleVersionConverter$$static;
        interface _JmodTask$ModuleVersionConverter {
          convert(value: string): java.lang.module.ModuleDescriptor$Version;
          convert(a0: string): any;
          valuePattern(): string;
          valueType(): java.lang.Class<java.lang.module.ModuleDescriptor$Version>;
        }
        interface JmodTask$ModuleVersionConverter extends CombineTypes<[_JmodTask$ModuleVersionConverter, jdk.internal.joptsimple.ValueConverter<java.lang.module.ModuleDescriptor$Version>, java.lang.Object]> {}
        interface _JmodTask$Options$$static extends ClassLike {
          _new(): JmodTask$Options;
        }
        let JmodTask$Options: _JmodTask$Options$$static;
        interface _JmodTask$Options {
          _classpath: java.util.List<java.nio.file.Path>;
          _cmds: java.util.List<java.nio.file.Path>;
          _compressLevel: int;
          _configs: java.util.List<java.nio.file.Path>;
          _date: java.time.LocalDateTime;
          _dryrun: boolean;
          _excludes: java.util.List<java.nio.file.PathMatcher>;
          _extractDir: java.nio.file.Path;
          _headerFiles: java.util.List<java.nio.file.Path>;
          _help: boolean;
          _helpExtra: boolean;
          _jmodFile: java.nio.file.Path;
          _legalNotices: java.util.List<java.nio.file.Path>;
          _libs: java.util.List<java.nio.file.Path>;
          _mainClass: string;
          _manPages: java.util.List<java.nio.file.Path>;
          _mode: JmodTask$Mode;
          _moduleFinder: java.lang.module.ModuleFinder;
          _moduleResolution: jdk.internal.module.ModuleResolution;
          _moduleVersion: java.lang.module.ModuleDescriptor$Version;
          _modulesToHash: java.util.regex.Pattern;
          _targetPlatform: string;
          _version: boolean;
        }
        interface JmodTask$Options extends CombineTypes<[_JmodTask$Options, java.lang.Object]> {}
        interface _JmodTask$PathMatcherConverter$$static extends ClassLike {
          _new(): JmodTask$PathMatcherConverter;
        }
        let JmodTask$PathMatcherConverter: _JmodTask$PathMatcherConverter$$static;
        interface _JmodTask$PathMatcherConverter {
          convert(pattern: string): java.nio.file.PathMatcher;
          convert(a0: string): any;
          valuePattern(): string;
          valueType(): java.lang.Class<java.nio.file.PathMatcher>;
        }
        interface JmodTask$PathMatcherConverter extends CombineTypes<[_JmodTask$PathMatcherConverter, jdk.internal.joptsimple.ValueConverter<java.nio.file.PathMatcher>, java.lang.Object]> {}
        interface _JmodTask$PatternConverter$$static extends ClassLike {
          _new(): JmodTask$PatternConverter;
        }
        let JmodTask$PatternConverter: _JmodTask$PatternConverter$$static;
        interface _JmodTask$PatternConverter {
          convert(value: string): java.util.regex.Pattern;
          convert(a0: string): any;
          valuePattern(): string;
          valueType(): java.lang.Class<java.util.regex.Pattern>;
        }
        interface JmodTask$PatternConverter extends CombineTypes<[_JmodTask$PatternConverter, jdk.internal.joptsimple.ValueConverter<java.util.regex.Pattern>, java.lang.Object]> {}
        interface _JmodTask$ResourceBundleHelper$$static extends ClassLike {
          _bundle: java.util.ResourceBundle;
        }
        let JmodTask$ResourceBundleHelper: _JmodTask$ResourceBundleHelper$$static;
        interface _JmodTask$ResourceBundleHelper {
        }
        interface JmodTask$ResourceBundleHelper extends CombineTypes<[_JmodTask$ResourceBundleHelper, java.lang.Object]> {}
        interface _JmodTask$WarnIfResolvedReasonConverter$$static extends ClassLike {
          _new(): JmodTask$WarnIfResolvedReasonConverter;
        }
        let JmodTask$WarnIfResolvedReasonConverter: _JmodTask$WarnIfResolvedReasonConverter$$static;
        interface _JmodTask$WarnIfResolvedReasonConverter {
          convert(value: string): jdk.internal.module.ModuleResolution;
          convert(a0: string): any;
          valuePattern(): string;
          valueType(): java.lang.Class<jdk.internal.module.ModuleResolution>;
        }
        interface JmodTask$WarnIfResolvedReasonConverter extends CombineTypes<[_JmodTask$WarnIfResolvedReasonConverter, jdk.internal.joptsimple.ValueConverter<jdk.internal.module.ModuleResolution>, java.lang.Object]> {}
        interface _Main$$static extends ClassLike {
          main(args: string[]): void;
          main(...args: string[]): void;
          run(out: java.io.PrintWriter, err: java.io.PrintWriter, args: string[]): int;
          run(out: java.io.PrintWriter, err: java.io.PrintWriter, ...args: string[]): int;
          new(): Main;
        }
        let Main: _Main$$static;
        interface _Main {
        }
        interface Main extends CombineTypes<[_Main, java.lang.Object]> {}
        interface _Main$JmodToolProvider$$static extends ClassLike {
          new(): Main$JmodToolProvider;
        }
        let Main$JmodToolProvider: _Main$JmodToolProvider$$static;
        interface _Main$JmodToolProvider {
          description(): java.util.Optional<string>;
          name(): string;
          run(out: java.io.PrintWriter, err: java.io.PrintWriter, args: string[]): int;
          run(out: java.io.PrintWriter, err: java.io.PrintWriter, ...args: string[]): int;
        }
        interface Main$JmodToolProvider extends CombineTypes<[_Main$JmodToolProvider, java.lang.Object, java.util.spi.ToolProvider]> {}
      }
    }
  }
}
