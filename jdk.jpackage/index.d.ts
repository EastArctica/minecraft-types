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
    module jpackage {
      module internal {
        module resources {
          interface _ResourceLocator$$static extends ClassLike {
            new(): ResourceLocator;
          }
          let ResourceLocator: _ResourceLocator$$static;
          interface _ResourceLocator {
          }
          interface ResourceLocator extends CombineTypes<[_ResourceLocator, java.lang.Object]> {}
        }
        interface _AbstractAppImageBuilder$$static extends ClassLike {
          createIconResource(defaultIconName: string, iconParam: BundlerParamInfo<java.nio.file.Path>, params: java.util.Map<string,any>, mainParams: java.util.Map<string,any>): OverridableResource;
          _getLauncherIconType(params: java.util.Map<string,any>): AbstractAppImageBuilder$IconType;
          new(root: java.nio.file.Path): AbstractAppImageBuilder;
        }
        let AbstractAppImageBuilder: _AbstractAppImageBuilder$$static;
        interface _AbstractAppImageBuilder {
          _copyApplication(params: java.util.Map<string,any>): void;
          _getAppLayout(): ApplicationLayout;
          getResourceAsStream(name: string): java.io.InputStream;
          prepareApplicationFiles(a0: java.util.Map<string,any>): void;
(a0: java.util.Map<string,any>): void;
          _writeCfgFile(params: java.util.Map<string,any>): void;
          _appLayout: ApplicationLayout;
          _root: java.nio.file.Path;
        }
        interface AbstractAppImageBuilder extends CombineTypes<[_AbstractAppImageBuilder, java.lang.Object]> {}
        interface _AbstractAppImageBuilder$IconType$$static extends ClassLike {
          valueOf(name: string): AbstractAppImageBuilder$IconType;
          values(): AbstractAppImageBuilder$IconType[];
          readonly CustomIcon: AbstractAppImageBuilder$IconType;
          readonly DefaultOrResourceDirIcon: AbstractAppImageBuilder$IconType;
          readonly NoIcon: AbstractAppImageBuilder$IconType;
        }
        let AbstractAppImageBuilder$IconType: _AbstractAppImageBuilder$IconType$$static;
        interface _AbstractAppImageBuilder$IconType {
        }
        interface AbstractAppImageBuilder$IconType extends CombineTypes<[_AbstractAppImageBuilder$IconType]> {}
        interface _AbstractBundler$$static extends ClassLike {
          _IMAGES_ROOT: BundlerParamInfo<java.nio.file.Path>;
          _new(): AbstractBundler;
        }
        let AbstractBundler: _AbstractBundler$$static;
        interface _AbstractBundler {
          cleanup(params: java.util.Map<string,any>): void;
          toString(): string;
        }
        interface AbstractBundler extends CombineTypes<[_AbstractBundler, jdk.jpackage.internal.Bundler, java.lang.Object]> {}
        interface _AddLauncherArguments$$static extends ClassLike {
          _merge(original: java.util.Map<string,any>, additional: java.util.Map<string,any>, exclude: string[]): java.util.Map<string,any>;
          _merge(original: java.util.Map<string,any>, additional: java.util.Map<string,any>, ...exclude: string[]): java.util.Map<string,any>;
          _new(name: string, filename: string): AddLauncherArguments;
        }
        let AddLauncherArguments: _AddLauncherArguments$$static;
        interface _AddLauncherArguments {
          _getLauncherMap(): java.util.Map<string,any>;
          _getOptionValue(option: Arguments$CLIOptions): string;
          _initLauncherMap(): void;
          _allArgs: java.util.Map<string,string>;
          _bundleParams: java.util.Map<string,any>;
          _filename: string;
          _name: string;
        }
        interface AddLauncherArguments extends CombineTypes<[_AddLauncherArguments, java.lang.Object]> {}
        interface _AppImageBundler$$static extends ClassLike {
          _new(): AppImageBundler;
        }
        let AppImageBundler: _AppImageBundler$$static;
        interface _AppImageBundler {
          _createAppBundle(params: java.util.Map<string,any>, outputDirectory: java.nio.file.Path): java.nio.file.Path;
          _createRoot(params: java.util.Map<string,any>, outputDirectory: java.nio.file.Path): java.nio.file.Path;
          execute(params: java.util.Map<string,any>, outputParentDir: java.nio.file.Path): java.nio.file.Path;
          getBundleType(): string;
          getID(): string;
          getName(): string;
          isDefault(): boolean;
          _isDependentTask(): boolean;
          _setAppImageSupplier(v: java.util.function.Function<java.nio.file.Path,AbstractAppImageBuilder>): AppImageBundler;
          _setDependentTask(v: boolean): AppImageBundler;
          _setParamsValidator(v: AppImageBundler$ParamsValidator): AppImageBundler;
          supported(runtimeInstaller: boolean): boolean;
          validate(params: java.util.Map<string,any>): boolean;
          _appImageSupplier: java.util.function.Function<java.nio.file.Path,AbstractAppImageBuilder>;
          _dependentTask: boolean;
          _paramsValidator: AppImageBundler$ParamsValidator;
        }
        interface AppImageBundler extends CombineTypes<[_AppImageBundler, jdk.jpackage.internal.AbstractBundler]> {}
        interface _AppImageBundler$ParamsValidator$$static extends ClassLike {
        }
        let AppImageBundler$ParamsValidator: _AppImageBundler$ParamsValidator$$static;
        interface _AppImageBundler$ParamsValidator {
          validate(a0: java.util.Map<string,any>): void;
(a0: java.util.Map<string,any>): void;
        }
        interface AppImageBundler$ParamsValidator extends CombineTypes<[_AppImageBundler$ParamsValidator, java.lang.Object]> {}
        interface _AppImageFile$$static extends ClassLike {
          _addLauncherInfo(xml: javax.xml.stream.XMLStreamWriter, li: AppImageFile$LauncherInfo): void;
          extractAppName(appImageDir: java.nio.file.Path): string;
          extractMainClass(appImageDir: java.nio.file.Path): string;
          _getLaunchers(appImageDir: java.nio.file.Path, params: java.util.Map<string,any>): java.util.List<AppImageFile$LauncherInfo>;
          getPathInAppImage(appImageDir: java.nio.file.Path): java.nio.file.Path;
          getPlatform(): string;
          getVersion(): string;
          load(appImageDir: java.nio.file.Path): AppImageFile;
          readXml(appImageDir: java.nio.file.Path): org.w3c.dom.Document;
          _save(appImageDir: java.nio.file.Path, params: java.util.Map<string,any>): void;
          _save(appImageDir: java.nio.file.Path, params: java.util.Map<string,any>, appImage: AppImageFile): void;
          _xpathQueryNullable(xPath: javax.xml.xpath.XPath, xpathExpr: string, xml: org.w3c.dom.Document): string;
          _FILENAME: string;
          _PLATFORM_LABELS: java.util.Map<jdk.internal.util.OperatingSystem,string>;
        }
        let AppImageFile: _AppImageFile$$static;
        interface _AppImageFile {
          copyAsSigned(): AppImageFile;
          _getAddLaunchers(): java.util.List<AppImageFile$LauncherInfo>;
          _getAppVersion(): string;
          _getLauncherName(): string;
          _getMainClass(): string;
          isAppStore(): boolean;
          isSigned(): boolean;
          _save(appImageDir: java.nio.file.Path): void;
          _addLauncherInfos: java.util.List<AppImageFile$LauncherInfo>;
          _appStore: boolean;
          _appVersion: string;
          _creatorPlatform: string;
          _creatorVersion: string;
          _launcherName: string;
          _mainClass: string;
          _signed: boolean;
        }
        interface AppImageFile extends CombineTypes<[_AppImageFile, java.lang.Object]> {}
        interface _AppImageFile$LauncherInfo$$static extends ClassLike {
        }
        let AppImageFile$LauncherInfo: _AppImageFile$LauncherInfo$$static;
        interface _AppImageFile$LauncherInfo {
          _getAttribute(item: org.w3c.dom.Node, attr: string): string;
          getName(): string;
          isMenu(): boolean;
          isService(): boolean;
          isShortcut(): boolean;
          _menu: boolean;
          _name: string;
          _service: boolean;
          _shortcut: boolean;
        }
        interface AppImageFile$LauncherInfo extends CombineTypes<[_AppImageFile$LauncherInfo, java.lang.Object]> {}
        interface _ApplicationLayout$$static extends ClassLike {
          javaRuntime(): ApplicationLayout;
          _linuxAppImage(): ApplicationLayout;
          linuxUsrTreePackageImage(prefix: java.nio.file.Path, packageName: string): ApplicationLayout;
          _macAppImage(): ApplicationLayout;
          platformAppImage(): ApplicationLayout;
          _windowsAppImage(): ApplicationLayout;
          _new(paths: java.util.Map<any,java.nio.file.Path>): ApplicationLayout;
        }
        let ApplicationLayout: _ApplicationLayout$$static;
        interface _ApplicationLayout {
          appDirectory(): java.nio.file.Path;
          appModsDirectory(): java.nio.file.Path;
          contentDirectory(): java.nio.file.Path;
          destktopIntegrationDirectory(): java.nio.file.Path;
          launchersDirectory(): java.nio.file.Path;
          pathGroup(): PathGroup;
          resolveAt(root: java.nio.file.Path): ApplicationLayout;
          resolveAt(a0: java.nio.file.Path): any;
          runtimeDirectory(): java.nio.file.Path;
          runtimeHomeDirectory(): java.nio.file.Path;
          _data: PathGroup;
        }
        interface ApplicationLayout extends CombineTypes<[_ApplicationLayout, java.lang.Object, PathGroup$Facade<ApplicationLayout>]> {}
        interface _ApplicationLayout$PathRole$$static extends ClassLike {
          valueOf(name: string): ApplicationLayout$PathRole;
          values(): ApplicationLayout$PathRole[];
          readonly APP: ApplicationLayout$PathRole;
          readonly CONTENT: ApplicationLayout$PathRole;
          readonly DESKTOP: ApplicationLayout$PathRole;
          readonly LAUNCHERS: ApplicationLayout$PathRole;
          readonly LINUX_APPLAUNCHER_LIB: ApplicationLayout$PathRole;
          readonly MODULES: ApplicationLayout$PathRole;
          readonly RUNTIME: ApplicationLayout$PathRole;
          readonly RUNTIME_HOME: ApplicationLayout$PathRole;
        }
        let ApplicationLayout$PathRole: _ApplicationLayout$PathRole$$static;
        interface _ApplicationLayout$PathRole {
        }
        interface ApplicationLayout$PathRole extends CombineTypes<[_ApplicationLayout$PathRole]> {}
        interface _Arguments$$static extends ClassLike {
          _getArgumentList(inputString: string): java.util.List<string>;
          _getPropertiesFromFile(filename: string): java.util.Map<string,string>;
          _putUnlessNull(params: java.util.Map<string,any>, param: string, value: any): void;
          _toCLIOption(arg: string): Arguments$CLIOptions;
          _unquoteIfNeeded(_in: string): string;
          _FA_CONTENT_TYPE: string;
          _FA_DESCRIPTION: string;
          _FA_EXTENSIONS: string;
          _FA_ICON: string;
          _I18N: java.util.ResourceBundle;
          readonly MAC_CFBUNDLETYPEROLE: string;
          readonly MAC_LSDOCINPLACE: string;
          readonly MAC_LSHANDLERRANK: string;
          readonly MAC_LSTYPEISPACKAGE: string;
          readonly MAC_NSDOCUMENTCLASS: string;
          readonly MAC_NSEXPORTABLETYPES: string;
          readonly MAC_NSSTORETYPEKEY: string;
          readonly MAC_UIDOCBROWSER: string;
          readonly MAC_UTTYPECONFORMSTO: string;
          _argIds: java.util.Map<string,Arguments$CLIOptions>;
          _argShortIds: java.util.Map<string,Arguments$CLIOptions>;
          _instance: java.lang.InheritableThreadLocal<Arguments>;
          _pattern: java.util.regex.Pattern;
          new(args: string[]): Arguments;
        }
        let Arguments: _Arguments$$static;
        interface _Arguments {
          _generateBundle(params: java.util.Map<string,any>): void;
          _getPlatformBundler(): Bundler;
          processArguments(): boolean;
          _validateArguments(): void;
          _addLaunchers: java.util.List<AddLauncherArguments>;
          _allOptions: java.util.List<Arguments$CLIOptions>;
          _argList: java.util.List<string>;
          _buildRoot: string;
          _deployParams: DeployParams;
          _hasMainClass: boolean;
          _hasMainJar: boolean;
          _hasMainModule: boolean;
          _input: string;
          _mainJarPath: string;
          _output: java.nio.file.Path;
          _pos: int;
          _runtimeInstaller: boolean;
          userProvidedBuildRoot: boolean;
        }
        interface Arguments extends CombineTypes<[_Arguments, java.lang.Object]> {}
        interface _Arguments$CLIOptions$$static extends ClassLike {
          context(): Arguments;
          _getArg(): string;
          _hasNextArg(): boolean;
          _nextArg(): void;
          _popArg(): string;
          _setOptionValue(option: string, value: any): void;
          valueOf(name: string): Arguments$CLIOptions;
          values(): Arguments$CLIOptions[];
          readonly ABOUT_URL: Arguments$CLIOptions;
          readonly ADD_LAUNCHER: Arguments$CLIOptions;
          readonly ADD_MODULES: Arguments$CLIOptions;
          readonly APPCLASS: Arguments$CLIOptions;
          readonly APP_CONTENT: Arguments$CLIOptions;
          readonly ARGUMENTS: Arguments$CLIOptions;
          readonly COPYRIGHT: Arguments$CLIOptions;
          readonly DESCRIPTION: Arguments$CLIOptions;
          readonly DMG_CONTENT: Arguments$CLIOptions;
          readonly FILE_ASSOCIATIONS: Arguments$CLIOptions;
          readonly ICON: Arguments$CLIOptions;
          readonly INPUT: Arguments$CLIOptions;
          readonly INSTALL_DIR: Arguments$CLIOptions;
          readonly JAVA_OPTIONS: Arguments$CLIOptions;
          readonly JLINK_OPTIONS: Arguments$CLIOptions;
          readonly LAUNCHER_AS_SERVICE: Arguments$CLIOptions;
          readonly LICENSE_FILE: Arguments$CLIOptions;
          readonly LINUX_BUNDLE_NAME: Arguments$CLIOptions;
          readonly LINUX_CATEGORY: Arguments$CLIOptions;
          readonly LINUX_DEB_MAINTAINER: Arguments$CLIOptions;
          readonly LINUX_MENU_GROUP: Arguments$CLIOptions;
          readonly LINUX_PACKAGE_DEPENDENCIES: Arguments$CLIOptions;
          readonly LINUX_RPM_LICENSE_TYPE: Arguments$CLIOptions;
          readonly LINUX_SHORTCUT_HINT: Arguments$CLIOptions;
          readonly MAC_APP_STORE: Arguments$CLIOptions;
          readonly MAC_BUNDLE_IDENTIFIER: Arguments$CLIOptions;
          readonly MAC_BUNDLE_NAME: Arguments$CLIOptions;
          readonly MAC_BUNDLE_SIGNING_PREFIX: Arguments$CLIOptions;
          readonly MAC_CATEGORY: Arguments$CLIOptions;
          readonly MAC_ENTITLEMENTS: Arguments$CLIOptions;
          readonly MAC_SIGN: Arguments$CLIOptions;
          readonly MAC_SIGNING_KEYCHAIN: Arguments$CLIOptions;
          readonly MAC_SIGNING_KEY_NAME: Arguments$CLIOptions;
          readonly MAIN_JAR: Arguments$CLIOptions;
          readonly MODULE: Arguments$CLIOptions;
          readonly MODULE_PATH: Arguments$CLIOptions;
          readonly NAME: Arguments$CLIOptions;
          readonly OUTPUT: Arguments$CLIOptions;
          readonly PACKAGE_TYPE: Arguments$CLIOptions;
          readonly PREDEFINED_APP_IMAGE: Arguments$CLIOptions;
          readonly PREDEFINED_RUNTIME_IMAGE: Arguments$CLIOptions;
          readonly RELEASE: Arguments$CLIOptions;
          readonly RESOURCE_DIR: Arguments$CLIOptions;
          readonly TEMP_ROOT: Arguments$CLIOptions;
          readonly VENDOR: Arguments$CLIOptions;
          readonly VERBOSE: Arguments$CLIOptions;
          readonly VERSION: Arguments$CLIOptions;
          readonly WIN_CONSOLE_HINT: Arguments$CLIOptions;
          readonly WIN_DIR_CHOOSER: Arguments$CLIOptions;
          readonly WIN_HELP_URL: Arguments$CLIOptions;
          readonly WIN_MENU_GROUP: Arguments$CLIOptions;
          readonly WIN_MENU_HINT: Arguments$CLIOptions;
          readonly WIN_PER_USER_INSTALLATION: Arguments$CLIOptions;
          readonly WIN_SHORTCUT_HINT: Arguments$CLIOptions;
          readonly WIN_SHORTCUT_PROMPT: Arguments$CLIOptions;
          readonly WIN_UPDATE_URL: Arguments$CLIOptions;
          readonly WIN_UPGRADE_UUID: Arguments$CLIOptions;
          _argContext: Arguments;
        }
        let Arguments$CLIOptions: _Arguments$CLIOptions$$static;
        interface _Arguments$CLIOptions {
          _defaultAction(): void;
          _execute(): void;
          getId(): string;
          _getIdWithPrefix(): string;
          _getShortIdWithPrefix(): string;
          _action: java.lang.Runnable;
          _category: Arguments$OptionCategories;
          _id: string;
          _shortId: string;
        }
        interface Arguments$CLIOptions extends CombineTypes<[_Arguments$CLIOptions]> {}
        interface _Arguments$OptionCategories$$static extends ClassLike {
          valueOf(name: string): Arguments$OptionCategories;
          values(): Arguments$OptionCategories[];
          readonly MODULAR: Arguments$OptionCategories;
          readonly PLATFORM_LINUX: Arguments$OptionCategories;
          readonly PLATFORM_MAC: Arguments$OptionCategories;
          readonly PLATFORM_WIN: Arguments$OptionCategories;
          readonly PROPERTY: Arguments$OptionCategories;
        }
        let Arguments$OptionCategories: _Arguments$OptionCategories$$static;
        interface _Arguments$OptionCategories {
        }
        interface Arguments$OptionCategories extends CombineTypes<[_Arguments$OptionCategories]> {}
        interface _BasicBundlers$$static extends ClassLike {
          new(): BasicBundlers;
        }
        let BasicBundlers: _BasicBundlers$$static;
        interface _BasicBundlers {
          getBundlers(): java.util.Collection<Bundler>;
          getBundlers(type: string): java.util.Collection<Bundler>;
          loadBundlersFromServices(cl: java.lang.ClassLoader): void;
          _bundlers: java.util.Collection<Bundler>;
          _defaultsLoaded: boolean;
        }
        interface BasicBundlers extends CombineTypes<[_BasicBundlers, java.lang.Object, jdk.jpackage.internal.Bundlers]> {}
        interface _BundleParams$$static extends ClassLike {
          new(): BundleParams;
          new(params: java.util.Map<string,any>): BundleParams;
        }
        let BundleParams: _BundleParams$$static;
        interface _BundleParams {
          addAllBundleParams(params: java.util.Map<string,any>): void;
          getBundleParamsAsMap(): java.util.Map<string,any>;
          getName(): string;
          _putUnlessNull(param: string, value: any): void;
          _params: java.util.Map<string,any>;
        }
        interface BundleParams extends CombineTypes<[_BundleParams, java.lang.Object]> {}
        interface _Bundler$$static extends ClassLike {
        }
        let Bundler: _Bundler$$static;
        interface _Bundler {
          cleanup(a0: java.util.Map<string,any>): void;
          execute(a0: java.util.Map<string,any>, a1: java.nio.file.Path): java.nio.file.Path;
          getBundleType(): string;
          getID(): string;
          getName(): string;
          isDefault(): boolean;
          supported(a0: boolean): boolean;
          validate(a0: java.util.Map<string,any>): boolean;
        }
        interface Bundler extends CombineTypes<[_Bundler, java.lang.Object]> {}
        interface _BundlerParamInfo$$static<T> extends ClassLike {
          _new(): BundlerParamInfo<T>;
        }
        let BundlerParamInfo: _BundlerParamInfo$$static<T>;
        interface _BundlerParamInfo<T> {
          _fetchFrom(params: java.util.Map<string,any>): T;
          _fetchFrom(params: java.util.Map<string,any>, invokeDefault: boolean): T;
          _getDefaultValueFunction(): java.util.function.Function<java.util.Map<string,any>,T>;
          _getID(): string;
          _getIsDefaultValue(): boolean;
          _getStringConverter(): java.util.function.BiFunction<string,java.util.Map<string,any>,T>;
          _getValueType(): java.lang.Class<T>;
          _defaultValueFunction: java.util.function.Function<java.util.Map<string,any>,T>;
          _id: string;
          _isDefaultValue: boolean;
          _stringConverter: java.util.function.BiFunction<string,java.util.Map<string,any>,T>;
          _valueType: java.lang.Class<T>;
        }
        interface BundlerParamInfo<T> extends CombineTypes<[_BundlerParamInfo<T>, java.lang.Object]> {}
        interface _Bundlers$$static extends ClassLike {
          createBundlersInstance(): Bundlers;
          createBundlersInstance(servicesClassLoader: java.lang.ClassLoader): Bundlers;
        }
        let Bundlers: _Bundlers$$static;
        interface _Bundlers {
          getBundlers(): java.util.Collection<Bundler>;
          getBundlers(a0: string): java.util.Collection<Bundler>;
          loadBundlersFromServices(a0: java.lang.ClassLoader): void;
        }
        interface Bundlers extends CombineTypes<[_Bundlers, java.lang.Object]> {}
        interface _CLIHelp$$static extends ClassLike {
          showHelp(noArgs: boolean): void;
          _I18N: java.util.ResourceBundle;
          new(): CLIHelp;
        }
        let CLIHelp: _CLIHelp$$static;
        interface _CLIHelp {
        }
        interface CLIHelp extends CombineTypes<[_CLIHelp, java.lang.Object]> {}
        interface _CfgFile$$static extends ClassLike {
          _SECTION_TAG: any;
          _new(): CfgFile;
        }
        let CfgFile: _CfgFile$$static;
        interface _CfgFile {
          _create(appImage: java.nio.file.Path): void;
          _createAppCfgLayout(): ApplicationLayout;
          _initFromParams(params: java.util.Map<string,any>): CfgFile;
          _appLayout: ApplicationLayout;
          _arguments: java.util.List<string>;
          _javaOptions: java.util.List<string>;
          _launcherData: LauncherData;
          _launcherName: string;
          _version: string;
        }
        interface CfgFile extends CombineTypes<[_CfgFile, java.lang.Object]> {}
        interface _ConfigException$$static extends ClassLike {
          _serialVersionUID: long;
          new(msg: string, advice: string): ConfigException;
          new(msg: string, advice: string, cause: java.lang.Exception): ConfigException;
          new(cause: java.lang.Exception): ConfigException;
        }
        let ConfigException: _ConfigException$$static;
        interface _ConfigException {
          getAdvice(): string;
          _advice: string;
        }
        interface ConfigException extends CombineTypes<[_ConfigException, java.lang.Exception]> {}
        interface _DeployParams$$static extends ClassLike {
          _validateName(s: string, forApp: boolean): void;
          _multi_args: java.util.Set<string>;
          new(): DeployParams;
        }
        let DeployParams: _DeployParams$$static;
        interface _DeployParams {
          addBundleArgument(key: string, value: any): void;
          _expandFileset(root: java.nio.file.Path): java.util.List<java.nio.file.Path>;
          _getBundleParams(): BundleParams;
          _getTargetFormat(): string;
          _isTargetAppImage(): boolean;
          setOutput(output: java.nio.file.Path): void;
          _setTargetFormat(t: string): void;
          toString(): string;
          validate(): void;
          _bundlerArguments: java.util.Map<string,any>;
          _outdir: java.nio.file.Path;
          _targetFormat: string;
        }
        interface DeployParams extends CombineTypes<[_DeployParams, java.lang.Object]> {}
        interface _DeployParams$Template$$static extends ClassLike {
          _new(_in: java.nio.file.Path, out: java.nio.file.Path): DeployParams$Template;
        }
        let DeployParams$Template: _DeployParams$Template$$static;
        interface _DeployParams$Template {
          _in: java.nio.file.Path;
          _out: java.nio.file.Path;
        }
        interface DeployParams$Template extends CombineTypes<[_DeployParams$Template, java.lang.Object]> {}
        interface _DottedVersion$$static extends ClassLike {
          _greedy(version: string): DottedVersion;
          _lazy(version: string): DottedVersion;
          _parseVersionString(version: string, greedy: boolean): java.math.BigInteger[];
          _DIGITS: java.util.regex.Pattern;
          _new(version: string): DottedVersion;
        }
        let DottedVersion: _DottedVersion$$static;
        interface _DottedVersion {
          compareTo(o: string): int;
          compareTo(a0: any): int;
          _getComponents(): java.math.BigInteger[];
          toString(): string;
          _components: java.math.BigInteger[];
          _greedy: boolean;
          _value: string;
        }
        interface DottedVersion extends CombineTypes<[_DottedVersion, java.lang.Comparable<string>, java.lang.Object]> {}
        interface _Enquoter$$static extends ClassLike {
          _forPropertyValues(): Enquoter;
          _forShellLiterals(): Enquoter;
          _forShellLiterals(quoteChar: char): Enquoter;
          _PREPEND_BACKSLASH: java.util.function.BiConsumer<int,internal$stringBuilder>;
          _QUOTE_IF_WHITESPACES: java.util.function.Predicate<string>;
        }
        let Enquoter: _Enquoter$$static;
        interface _Enquoter {
          _applyTo(v: string): string;
          _setEnquotePredicate(v: java.util.function.Predicate<string>): Enquoter;
          _setEscaper(v: java.util.function.BiConsumer<int,Enquoter$stringBuilder>): Enquoter;
          _setQuoteChar(chr: char): Enquoter;
          _beginQuoteChr: int;
          _endQuoteChr: int;
          _escaper: java.util.function.BiConsumer<int,internal$stringBuilder>;
          _needQuotes: java.util.function.Predicate<string>;
        }
        interface Enquoter extends CombineTypes<[_Enquoter, java.lang.Object]> {}
        interface _ExecutableRebrander$$static extends ClassLike {
          _getFixedFileVersion(value: string): string;
          _iconSwap(a0: long, a1: string): int;
          _iconSwapWrapper(resourceLock: long, a1: string): void;
          _lockResource(a0: string): long;
          _unlockResource(a0: long): void;
          _validateValueAndPut(data: java.util.Map<string,string>, key: string, param: BundlerParamInfo<string>, params: java.util.Map<string,any>): void;
          _versionSwap(a0: long, a1: string[]): int;
          _versionSwapWrapper(resourceLock: long, a1: string[], executableProperties: string): void;
          _I18N: java.util.ResourceBundle;
          _INSTALLER_PROPERTIES_RESOURE_DIR_ID: string;
          _INSTALLER_PROPERTIES_TEMPLATE: string;
          _LAUNCHER_PROPERTIES_TEMPLATE: string;
          _new(): ExecutableRebrander;
        }
        let ExecutableRebrander: _ExecutableRebrander$$static;
        interface _ExecutableRebrander {
          _addAction(action: ExecutableRebrander$UpdateResourceAction): ExecutableRebrander;
          _createSubstituteData(params: java.util.Map<string,any>): java.util.Map<string,string>;
          _rebrandExecutable(params: java.util.Map<string,any>, icon: java.nio.file.Path, resourceSupplier: java.util.function.Supplier<OverridableResource>, target: java.nio.file.Path): void;
          _rebrandExecutable(params: java.util.Map<string,any>, target: java.nio.file.Path, action: ExecutableRebrander$UpdateResourceAction): void;
          _rebrandInstaller(params: java.util.Map<string,any>, target: java.nio.file.Path): void;
          _rebrandLauncher(params: java.util.Map<string,any>, icon: java.nio.file.Path, target: java.nio.file.Path): void;
          _rebrandProperties(resourceLock: long, a1: OverridableResource, properties: java.util.Map<string,string>, data: java.nio.file.Path): void;
          _extraActions: java.util.List<ExecutableRebrander$UpdateResourceAction>;
        }
        interface ExecutableRebrander extends CombineTypes<[_ExecutableRebrander, java.lang.Object]> {}
        interface _ExecutableRebrander$UpdateResourceAction$$static extends ClassLike {
        }
        let ExecutableRebrander$UpdateResourceAction: _ExecutableRebrander$UpdateResourceAction$$static;
        interface _ExecutableRebrander$UpdateResourceAction {
          editResource(a0: long): void;
(a0: long): void;
        }
        interface ExecutableRebrander$UpdateResourceAction extends CombineTypes<[_ExecutableRebrander$UpdateResourceAction, java.lang.Object]> {}
        interface _Executor$$static extends ClassLike {
          _createLogMessage(pb: java.lang.ProcessBuilder, quiet: boolean): string;
          _of(cmdline: string[]): Executor;
          _of(...cmdline: string[]): Executor;
          _of(pb: java.lang.ProcessBuilder): Executor;
          readonly INFINITE_TIMEOUT: int;
          _new(): Executor;
        }
        let Executor: _Executor$$static;
        interface _Executor {
          _execute(): int;
          _executeExpectSuccess(): Executor;
          _getOutput(): java.util.List<string>;
          _saveOutput(v: boolean): Executor;
          _setCommandLine(cmdline: string[]): Executor;
          _setCommandLine(...cmdline: string[]): Executor;
          _setOutputConsumer(v: java.util.function.Consumer<java.util.stream.Stream<string>>): Executor;
          _setProcessBuilder(v: java.lang.ProcessBuilder): Executor;
          _setQuiet(v: boolean): Executor;
          _setTimeout(v: long): Executor;
          _setWriteOutputToFile(v: boolean): Executor;
          _waitForProcess(p: java.lang.Process): int;
          _output: java.util.List<string>;
          _outputConsumer: java.util.function.Consumer<java.util.stream.Stream<string>>;
          _pb: java.lang.ProcessBuilder;
          _quietCommand: boolean;
          _saveOutput: boolean;
          _timeout: long;
          _writeOutputToFile: boolean;
        }
        interface Executor extends CombineTypes<[_Executor, java.lang.Object]> {}
        interface _FileAssociation$$static extends ClassLike {
          _fetchFrom(params: java.util.Map<string,any>): java.util.List<FileAssociation>;
          _verify(associations: java.util.List<FileAssociation>): void;
          _new(): FileAssociation;
        }
        let FileAssociation: _FileAssociation$$static;
        interface _FileAssociation {
          _verify(): void;
          _description: string;
          _extensions: java.util.List<string>;
          _iconPath: java.nio.file.Path;
          _launcherPath: java.nio.file.Path;
          _mimeTypes: java.util.List<string>;
        }
        interface FileAssociation extends CombineTypes<[_FileAssociation, java.lang.Object]> {}
        interface _I18N$$static extends ClassLike {
          _getString(key: string): string;
          _PLATFORM: java.util.ResourceBundle;
          _SHARED: java.util.ResourceBundle;
          _new(): I18N;
        }
        let I18N: _I18N$$static;
        interface _I18N {
        }
        interface I18N extends CombineTypes<[_I18N, java.lang.Object]> {}
        interface _IOUtils$$static extends ClassLike {
          addSuffix(path: java.nio.file.Path, suffix: string): java.nio.file.Path;
          copyFile(sourceFile: java.nio.file.Path, destFile: java.nio.file.Path): void;
          copyRecursive(src: java.nio.file.Path, dest: java.nio.file.Path, options: java.nio.file.CopyOption[]): void;
          copyRecursive(src: java.nio.file.Path, dest: java.nio.file.Path, ...options: java.nio.file.CopyOption[]): void;
          copyRecursive(src: java.nio.file.Path, dest: java.nio.file.Path, excludes: java.util.List<string>, options: java.nio.file.CopyOption[]): void;
          copyRecursive(src: java.nio.file.Path, dest: java.nio.file.Path, excludes: java.util.List<string>, ...options: java.nio.file.CopyOption[]): void;
          createXml(dstFile: java.nio.file.Path, xmlConsumer: IOUtils$XmlConsumer): void;
          deleteRecursive(directory: java.nio.file.Path): void;
          exec(pb: java.lang.ProcessBuilder): void;
          exec(pb: java.lang.ProcessBuilder, timeout: long): void;
          exec(pb: java.lang.ProcessBuilder, writeOutputToFile: boolean): void;
          _exec(pb: java.lang.ProcessBuilder, testForPresenceOnly: boolean, consumer: java.io.PrintStream): void;
          _exec(pb: java.lang.ProcessBuilder, testForPresenceOnly: boolean, consumer: java.io.PrintStream, writeOutputToFile: boolean, timeout: long): void;
          _exec(pb: java.lang.ProcessBuilder, testForPresenceOnly: boolean, consumer: java.io.PrintStream, writeOutputToFile: boolean, timeout: long, a5: boolean): void;
          exists(path: java.nio.file.Path): boolean;
          getFileName(p: java.nio.file.Path): java.nio.file.Path;
          getPID(p: java.lang.Process): long;
          getParent(p: java.nio.file.Path): java.nio.file.Path;
          getProcessOutput(result: java.util.List<string>, args: string[]): int;
          getProcessOutput(result: java.util.List<string>, ...args: string[]): int;
          getSuffix(path: java.nio.file.Path): string;
          initDocumentBuilder(): javax.xml.parsers.DocumentBuilder;
          initDocumentBuilderFactory(): javax.xml.parsers.DocumentBuilderFactory;
          mergeXmls(xml: javax.xml.stream.XMLStreamWriter, sources: java.util.Collection<javax.xml.transform.Source>): void;
          replaceSuffix(path: java.nio.file.Path, suffix: string): java.nio.file.Path;
          run(launcher: string, paramFile: java.nio.file.Path): void;
          _writableOutputDir(outdir: java.nio.file.Path): void;
          new(): IOUtils;
        }
        let IOUtils: _IOUtils$$static;
        interface _IOUtils {
        }
        interface IOUtils extends CombineTypes<[_IOUtils, java.lang.Object]> {}
        interface _IOUtils$PrettyPrintHandler$$static extends ClassLike {
          _repeat(d: int, s: string): string;
          _EOL: string;
          _INDENT: string;
          _new(target: javax.xml.stream.XMLStreamWriter): IOUtils$PrettyPrintHandler;
        }
        let IOUtils$PrettyPrintHandler: _IOUtils$PrettyPrintHandler$$static;
        interface _IOUtils$PrettyPrintHandler {
          invoke(proxy: any, method: java.lang.reflect.Method, args: any[]): any;
          _depth: int;
          _hasChildElement: java.util.Map<int,boolean>;
          _target: javax.xml.stream.XMLStreamWriter;
        }
        interface IOUtils$PrettyPrintHandler extends CombineTypes<[_IOUtils$PrettyPrintHandler, java.lang.Object, java.lang.reflect.InvocationHandler]> {}
        interface _IOUtils$SkipDocumentHandler$$static extends ClassLike {
          _new(target: javax.xml.stream.XMLStreamWriter): IOUtils$SkipDocumentHandler;
        }
        let IOUtils$SkipDocumentHandler: _IOUtils$SkipDocumentHandler$$static;
        interface _IOUtils$SkipDocumentHandler {
          invoke(proxy: any, method: java.lang.reflect.Method, args: any[]): any;
          _target: javax.xml.stream.XMLStreamWriter;
        }
        interface IOUtils$SkipDocumentHandler extends CombineTypes<[_IOUtils$SkipDocumentHandler, java.lang.Object, java.lang.reflect.InvocationHandler]> {}
        interface _IOUtils$XmlConsumer$$static extends ClassLike {
        }
        let IOUtils$XmlConsumer: _IOUtils$XmlConsumer$$static;
        interface _IOUtils$XmlConsumer {
          accept(a0: javax.xml.stream.XMLStreamWriter): void;
(a0: javax.xml.stream.XMLStreamWriter): void;
        }
        interface IOUtils$XmlConsumer extends CombineTypes<[_IOUtils$XmlConsumer, java.lang.Object]> {}
        interface _InstallableFile$$static extends ClassLike {
          _new(srcPath: java.nio.file.Path, installPath: java.nio.file.Path): InstallableFile;
        }
        let InstallableFile: _InstallableFile$$static;
        interface _InstallableFile {
          _applyToApplicationLayouts(src: ApplicationLayout, install: ApplicationLayout): void;
          _excludeFromApplicationLayout(layout: ApplicationLayout): void;
          _installPath(): java.nio.file.Path;
          _srcPath(): java.nio.file.Path;
          _installPath: java.nio.file.Path;
          _srcPath: java.nio.file.Path;
        }
        interface InstallableFile extends CombineTypes<[_InstallableFile, java.lang.Object]> {}
        interface _JLinkBundlerHelper$$static extends ClassLike {
          _createModuleFinder(modulePath: java.util.Collection<java.nio.file.Path>): java.lang.module.ModuleFinder;
          _createModuleList(paths: java.util.List<java.nio.file.Path>, addModules: java.util.Set<string>, limitModules: java.util.Set<string>): java.util.Set<string>;
          _execute(params: java.util.Map<string,any>, outputDir: java.nio.file.Path): void;
          _exportsAPI(descriptor: java.lang.module.ModuleDescriptor): boolean;
          _getDefaultModules(paths: java.util.Collection<java.nio.file.Path>, addModules: java.util.Collection<string>): java.util.Set<string>;
          _getPathList(pathList: java.util.List<java.nio.file.Path>): string;
          _getStringList(strings: java.util.Set<string>): string;
          _runJLink(output: java.nio.file.Path, modulePath: java.util.List<java.nio.file.Path>, modules: java.util.Set<string>, limitModules: java.util.Set<string>, options: java.util.List<string>): void;
          _ALL_DEFAULT: string;
          _ALL_MODULE_PATH: string;
          _new(): JLinkBundlerHelper;
        }
        let JLinkBundlerHelper: _JLinkBundlerHelper$$static;
        interface _JLinkBundlerHelper {
        }
        interface JLinkBundlerHelper extends CombineTypes<[_JLinkBundlerHelper, java.lang.Object]> {}
        interface _JLinkBundlerHelper$LazyLoad$$static extends ClassLike {
          _JLINK_TOOL: java.util.spi.ToolProvider;
        }
        let JLinkBundlerHelper$LazyLoad: _JLinkBundlerHelper$LazyLoad$$static;
        interface _JLinkBundlerHelper$LazyLoad {
        }
        interface JLinkBundlerHelper$LazyLoad extends CombineTypes<[_JLinkBundlerHelper$LazyLoad, java.lang.Object]> {}
        interface _JPackageToolProvider$$static extends ClassLike {
          new(): JPackageToolProvider;
        }
        let JPackageToolProvider: _JPackageToolProvider$$static;
        interface _JPackageToolProvider {
          description(): java.util.Optional<string>;
          name(): string;
          run(out: java.io.PrintWriter, err: java.io.PrintWriter, args: string[]): int;
          run(out: java.io.PrintWriter, err: java.io.PrintWriter, ...args: string[]): int;
        }
        interface JPackageToolProvider extends CombineTypes<[_JPackageToolProvider, java.lang.Object, java.util.spi.ToolProvider]> {}
        interface _LauncherAsService$$static extends ClassLike {
          _new(name: string, mainParams: java.util.Map<string,any>, resource: OverridableResource): LauncherAsService;
        }
        let LauncherAsService: _LauncherAsService$$static;
        interface _LauncherAsService {
          _getDescription(): string;
          _getName(): string;
          _getResource(): OverridableResource;
          _description: string;
          _name: string;
          _resource: OverridableResource;
        }
        interface LauncherAsService extends CombineTypes<[_LauncherAsService, java.lang.Object]> {}
        interface _LauncherData$$static extends ClassLike {
          _create(params: java.util.Map<string,any>): LauncherData;
          _createModular(mainModule: string, params: java.util.Map<string,any>): LauncherData;
          _createNonModular(params: java.util.Map<string,any>): LauncherData;
          _getMainClass(params: java.util.Map<string,any>): string;
          _getMainJarName(params: java.util.Map<string,any>): java.nio.file.Path;
          _getMainModule(params: java.util.Map<string,any>): string;
          _getModulePath(params: java.util.Map<string,any>): java.util.List<java.nio.file.Path>;
          _getPathListParameter(paramName: string, params: java.util.Map<string,any>): java.util.List<java.nio.file.Path>;
          _getPathParam<T>(paramName: string, func: java.util.function.Supplier<T>): T;
          _getPathParam(params: java.util.Map<string,any>, paramName: string): java.nio.file.Path;
          _getStringParam(params: java.util.Map<string,any>, paramName: string): string;
        }
        let LauncherData: _LauncherData$$static;
        interface _LauncherData {
          _classPath(): java.util.List<java.nio.file.Path>;
          _getAppVersion(): string;
          _initClasspath(params: java.util.Map<string,any>): void;
          _isClassNameFromMainJar(): boolean;
          _isModular(): boolean;
          _mainJarName(): java.nio.file.Path;
          _moduleName(): string;
          _modulePath(): java.util.List<java.nio.file.Path>;
          _packageName(): string;
          _qualifiedClassName(): string;
          _verifyIsModular(isModular: boolean): void;
          _classPath: java.util.List<java.nio.file.Path>;
          _jarMainClass: string;
          _mainJarName: java.nio.file.Path;
          _moduleInfo: LauncherData$ModuleInfo;
          _modulePath: java.util.List<java.nio.file.Path>;
          _qualifiedClassName: string;
        }
        interface LauncherData extends CombineTypes<[_LauncherData, java.lang.Object]> {}
        interface _LauncherData$ModuleInfo$$static extends ClassLike {
          _fromCookedRuntime(moduleName: string, cookedRuntime: java.nio.file.Path): LauncherData$ModuleInfo;
          _fromModuleDescriptor(md: java.lang.module.ModuleDescriptor): LauncherData$ModuleInfo;
        }
        let LauncherData$ModuleInfo: _LauncherData$ModuleInfo$$static;
        interface _LauncherData$ModuleInfo {
          _mainClass: string;
          _name: string;
          _version: string;
        }
        interface LauncherData$ModuleInfo extends CombineTypes<[_LauncherData$ModuleInfo, java.lang.Object]> {}
        interface _Log$$static extends ClassLike {
          error(msg: string): void;
          fatalError(msg: string): void;
          flush(): void;
          info(msg: string): void;
          isVerbose(): boolean;
          setPrintWriter(out: java.io.PrintWriter, err: java.io.PrintWriter): void;
          setVerbose(): void;
          verbose(msg: string): void;
          verbose(t: java.lang.Throwable): void;
          verbose(strings: java.util.List<string>, out: java.util.List<string>, ret: int, pid: long): void;
          _instance: java.lang.InheritableThreadLocal<Log$Logger>;
          new(): Log;
        }
        let Log: _Log$$static;
        interface _Log {
        }
        interface Log extends CombineTypes<[_Log, java.lang.Object]> {}
        interface _Log$Logger$$static extends ClassLike {
          new(): Log$Logger;
        }
        let Log$Logger: _Log$Logger$$static;
        interface _Log$Logger {
          _addTimestamp(msg: string): string;
          error(msg: string): void;
          fatalError(msg: string): void;
          flush(): void;
          info(msg: string): void;
          isVerbose(): boolean;
          setPrintWriter(out: java.io.PrintWriter, err: java.io.PrintWriter): void;
          setVerbose(): void;
          verbose(t: java.lang.Throwable): void;
          verbose(msg: string): void;
          verbose(strings: java.util.List<string>, output: java.util.List<string>, returnCode: int, pid: long): void;
          _err: java.io.PrintWriter;
          _out: java.io.PrintWriter;
          _verbose: boolean;
        }
        interface Log$Logger extends CombineTypes<[_Log$Logger, java.lang.Object]> {}
        interface _MsiVersion$$static extends ClassLike {
          _of(value: string): DottedVersion;
          _new(): MsiVersion;
        }
        let MsiVersion: _MsiVersion$$static;
        interface _MsiVersion {
        }
        interface MsiVersion extends CombineTypes<[_MsiVersion, java.lang.Object]> {}
        interface _OverridableResource$$static extends ClassLike {
          _createResource(defaultName: string, params: java.util.Map<string,any>): OverridableResource;
          _readDefault(resourceName: string): java.io.InputStream;
          _substitute(lines: java.util.stream.Stream<string>, substitutionData: java.util.Map<string,string>): java.util.stream.Stream<string>;
          _toPath(v: java.io.File): java.nio.file.Path;
          _new(defaultName: string): OverridableResource;
        }
        let OverridableResource: _OverridableResource$$static;
        interface _OverridableResource {
          _addSubstitutionDataEntry(key: string, value: string): OverridableResource;
          _getDefaultName(): string;
          _getExternalPath(): java.nio.file.Path;
          _getHandler(sourceType: OverridableResource$Source): OverridableResource$SourceHandler;
          _getPrintableCategory(): string;
          _getPublicName(): java.nio.file.Path;
          _getResourceDir(): java.nio.file.Path;
          _processResourceStream(rawResource: java.io.InputStream, dest: OverridableResource$ResourceConsumer): void;
          _saveInFolder(folderPath: java.nio.file.Path): OverridableResource$Source;
          _saveToFile(dest: java.nio.file.Path): OverridableResource$Source;
          _saveToFile(dest: java.io.File): OverridableResource$Source;
          _saveToStream(dest: java.io.OutputStream): OverridableResource$Source;
          _sendToConsumer(consumer: OverridableResource$ResourceConsumer): OverridableResource$Source;
          _setCategory(v: string): OverridableResource;
          _setExternal(v: java.nio.file.Path): OverridableResource;
          _setExternal(v: java.io.File): OverridableResource;
          _setLogPublicName(v: java.nio.file.Path): OverridableResource;
          _setLogPublicName(v: string): OverridableResource;
          _setPublicName(v: java.nio.file.Path): OverridableResource;
          _setPublicName(v: string): OverridableResource;
          _setResourceDir(v: java.nio.file.Path): OverridableResource;
          _setResourceDir(v: java.io.File): OverridableResource;
          _setSourceOrder(v: OverridableResource$Source[]): OverridableResource;
          _setSourceOrder(...v: OverridableResource$Source[]): OverridableResource;
          _setSubstitutionData(v: java.util.Map<string,string>): OverridableResource;
          _useDefault(dest: OverridableResource$ResourceConsumer): boolean;
          _useExternal(dest: OverridableResource$ResourceConsumer): boolean;
          _useResourceDir(dest: OverridableResource$ResourceConsumer): boolean;
          _category: string;
          _defaultName: string;
          _externalPath: java.nio.file.Path;
          _logPublicName: java.nio.file.Path;
          _publicName: java.nio.file.Path;
          _resourceDir: java.nio.file.Path;
          _sources: java.util.List<java.util.Map$Entry<OverridableResource$Source,OverridableResource$SourceHandler>>;
          _substitutionData: java.util.Map<string,string>;
        }
        interface OverridableResource extends CombineTypes<[_OverridableResource, java.lang.Object]> {}
        interface _OverridableResource$ResourceConsumer$$static extends ClassLike {
        }
        let OverridableResource$ResourceConsumer: _OverridableResource$ResourceConsumer$$static;
        interface _OverridableResource$ResourceConsumer {
          consume(a0: java.io.InputStream): void;
          publicName(): java.nio.file.Path;
        }
        interface OverridableResource$ResourceConsumer extends CombineTypes<[_OverridableResource$ResourceConsumer, java.lang.Object]> {}
        interface _OverridableResource$Source$$static extends ClassLike {
          valueOf(name: string): OverridableResource$Source;
          values(): OverridableResource$Source[];
          readonly DefaultResource: OverridableResource$Source;
          readonly External: OverridableResource$Source;
          readonly ResourceDir: OverridableResource$Source;
        }
        let OverridableResource$Source: _OverridableResource$Source$$static;
        interface _OverridableResource$Source {
        }
        interface OverridableResource$Source extends CombineTypes<[_OverridableResource$Source]> {}
        interface _OverridableResource$SourceHandler$$static extends ClassLike {
        }
        let OverridableResource$SourceHandler: _OverridableResource$SourceHandler$$static;
        interface _OverridableResource$SourceHandler {
          apply(a0: OverridableResource$ResourceConsumer): boolean;
(a0: OverridableResource$ResourceConsumer): boolean;
        }
        interface OverridableResource$SourceHandler extends CombineTypes<[_OverridableResource$SourceHandler, java.lang.Object]> {}
        interface _PackageFile$$static extends ClassLike {
          getPathInAppImage(appImageDir: java.nio.file.Path): java.nio.file.Path;
          _FILENAME: string;
          _new(packageName: string): PackageFile;
        }
        let PackageFile: _PackageFile$$static;
        interface _PackageFile {
          _save(appLayout: ApplicationLayout): void;
          _packageName: string;
        }
        interface PackageFile extends CombineTypes<[_PackageFile, java.lang.Object]> {}
        interface _PackagerException$$static extends ClassLike {
          _bundle: java.util.ResourceBundle;
          _serialVersionUID: long;
          new(cause: java.lang.Throwable): PackagerException;
          new(key: string, cause: java.lang.Throwable): PackagerException;
          new(key: string): PackagerException;
          new(key: string, arguments: string[]): PackagerException;
          new(key: string, ...arguments: string[]): PackagerException;
          new(cause: java.lang.Throwable, key: string, arguments: string[]): PackagerException;
          new(cause: java.lang.Throwable, key: string, ...arguments: string[]): PackagerException;
        }
        let PackagerException: _PackagerException$$static;
        interface _PackagerException {
        }
        interface PackagerException extends CombineTypes<[_PackagerException, java.lang.Exception]> {}
        interface _PathGroup$$static extends ClassLike {
          _copy(src: PathGroup, dst: PathGroup, handler: PathGroup$TransformHandler, move: boolean): void;
          _copy(move: boolean, entries: java.util.List<java.util.Map$Entry<java.nio.file.Path,java.nio.file.Path>>, excludePaths: java.util.List<java.nio.file.Path>, handler: PathGroup$TransformHandler): void;
          _normalizedPath(v: java.nio.file.Path): java.util.Map$Entry<java.nio.file.Path,java.nio.file.Path>;
          _new(paths: java.util.Map<any,java.nio.file.Path>): PathGroup;
        }
        let PathGroup: _PathGroup$$static;
        interface _PathGroup {
          _copy(dst: PathGroup): void;
          _getPath(id: any): java.nio.file.Path;
          _move(dst: PathGroup): void;
          _normalizedPaths(): java.util.List<java.util.Map$Entry<java.nio.file.Path,java.nio.file.Path>>;
          _paths(): java.util.List<java.nio.file.Path>;
          _resolveAt(root: java.nio.file.Path): PathGroup;
          _roots(): java.util.List<java.nio.file.Path>;
          _setPath(id: any, path: java.nio.file.Path): void;
          _sizeInBytes(): long;
          _transform(dst: PathGroup, handler: PathGroup$TransformHandler): void;
          _entries: java.util.Map<any,java.nio.file.Path>;
        }
        interface PathGroup extends CombineTypes<[_PathGroup, java.lang.Object]> {}
        interface _PathGroup$Facade$$static<T> extends ClassLike {
        }
        let PathGroup$Facade: _PathGroup$Facade$$static<T>;
        interface _PathGroup$Facade<T> {
          copy(dst: PathGroup$Facade<T>): void;
          move(dst: PathGroup$Facade<T>): void;
          pathGroup(): PathGroup;
          paths(): java.util.Collection<java.nio.file.Path>;
          resolveAt(a0: java.nio.file.Path): T;
          roots(): java.util.List<java.nio.file.Path>;
          sizeInBytes(): long;
          transform(dst: PathGroup$Facade<T>, handler: PathGroup$TransformHandler): void;
        }
        interface PathGroup$Facade<T> extends CombineTypes<[_PathGroup$Facade<T>, java.lang.Object]> {}
        interface _PathGroup$TransformHandler$$static extends ClassLike {
        }
        let PathGroup$TransformHandler: _PathGroup$TransformHandler$$static;
        interface _PathGroup$TransformHandler {
          copyFile(a0: java.nio.file.Path, a1: java.nio.file.Path): void;
          createDirectory(a0: java.nio.file.Path): void;
        }
        interface PathGroup$TransformHandler extends CombineTypes<[_PathGroup$TransformHandler, java.lang.Object]> {}
        interface _PlatformPackage$$static extends ClassLike {
        }
        let PlatformPackage: _PlatformPackage$$static;
        interface _PlatformPackage {
          installedApplicationLayout(): ApplicationLayout;
          name(): string;
          sourceApplicationLayout(): ApplicationLayout;
          sourceRoot(): java.nio.file.Path;
        }
        interface PlatformPackage extends CombineTypes<[_PlatformPackage, java.lang.Object]> {}
        interface _RetryExecutor$$static extends ClassLike {
          _retryOnKnownErrorMessage(v: string): RetryExecutor;
          new(): RetryExecutor;
        }
        let RetryExecutor: _RetryExecutor$$static;
        interface _RetryExecutor {
          abort(): void;
          execute(cmdline: string[]): void;
          execute(pb: java.lang.ProcessBuilder): void;
          _executeLoop(execSupplier: java.util.function.Supplier<Executor>): void;
          getOutput(): java.util.List<string>;
          isAborted(): boolean;
          saveOutput(v: boolean): RetryExecutor;
          setAttemptTimeoutMillis(v: int): RetryExecutor;
          setExecutorInitializer(v: java.util.function.Consumer<Executor>): RetryExecutor;
          setMaxAttemptsCount(v: int): RetryExecutor;
          setWriteOutputToFile(v: boolean): RetryExecutor;
          _aborted: boolean;
          _attempts: int;
          _executorInitializer: java.util.function.Consumer<Executor>;
          _output: java.util.List<string>;
          _saveOutput: boolean;
          _timeoutMillis: int;
          _writeOutputToFile: boolean;
        }
        interface RetryExecutor extends CombineTypes<[_RetryExecutor, java.lang.Object]> {}
        interface _ScriptRunner$$static extends ClassLike {
          _scriptSuffix(): string;
          _shell(): string;
          _new(): ScriptRunner;
        }
        let ScriptRunner: _ScriptRunner$$static;
        interface _ScriptRunner {
          _addEnvironment(v: java.util.Map<string,string>): ScriptRunner;
          run(params: java.util.Map<string,any>): void;
          _setDirectory(v: java.nio.file.Path): ScriptRunner;
          _setEnvironmentVariable(envVarName: string, envVarValue: string): ScriptRunner;
          _setResourceCategoryId(v: string): ScriptRunner;
          _setScriptNameSuffix(v: string): ScriptRunner;
          _directory: java.nio.file.Path;
          _environment: java.util.Map<string,string>;
          _resourceCategoryId: string;
          _scriptNameSuffix: string;
        }
        interface ScriptRunner extends CombineTypes<[_ScriptRunner, java.lang.Object]> {}
        interface _StandardBundlerParam$$static<T> extends ClassLike {
          _copyPredefinedRuntimeImage(params: java.util.Map<string,any>, appLayout: ApplicationLayout): void;
          _findPathOfModule(modulePath: java.util.List<java.nio.file.Path>, moduleName: string): java.nio.file.Path;
          _getDefaultAppVersion(params: java.util.Map<string,any>): string;
          _getDefaultModulePath(): java.util.List<java.nio.file.Path>;
          _getPredefinedAppImage(params: java.util.Map<string,any>): java.nio.file.Path;
          _hasPredefinedAppImage(params: java.util.Map<string,any>): boolean;
          _isRuntimeInstaller(params: java.util.Map<string,any>): boolean;
          _ABOUT_URL: StandardBundlerParam<string>;
          _ADD_LAUNCHERS: StandardBundlerParam<java.util.List<java.util.Map<string,any>>>;
          _ADD_MODULES: BundlerParamInfo<java.util.Set<string>>;
          _APP_CONTENT: StandardBundlerParam<java.util.List<string>>;
          _APP_NAME: StandardBundlerParam<string>;
          _APP_STORE: StandardBundlerParam<boolean>;
          _ARGUMENTS: StandardBundlerParam<java.util.List<string>>;
          readonly CONFIG_ROOT: StandardBundlerParam<java.nio.file.Path>;
          _COPYRIGHT: StandardBundlerParam<string>;
          _DEFAULT_JLINK_OPTIONS: string[];
          _DEFAULT_RELEASE: string;
          _DEFAULT_VERSION: string;
          _DESCRIPTION: StandardBundlerParam<string>;
          _DMG_CONTENT: BundlerParamInfo<java.util.List<string>>;
          _FA_CONTENT_TYPE: StandardBundlerParam<java.util.List<string>>;
          _FA_DESCRIPTION: StandardBundlerParam<string>;
          _FA_EXTENSIONS: StandardBundlerParam<java.util.List<string>>;
          _FA_ICON: StandardBundlerParam<java.nio.file.Path>;
          _FILE_ASSOCIATIONS: StandardBundlerParam<java.util.List<java.util.Map<string,any>>>;
          _ICON: StandardBundlerParam<java.nio.file.Path>;
          _INSTALLER_NAME: StandardBundlerParam<string>;
          _INSTALL_DIR: BundlerParamInfo<string>;
          _JAVABASEJMOD: string;
          _JAVA_OPTIONS: StandardBundlerParam<java.util.List<string>>;
          _JLINK_OPTIONS: StandardBundlerParam<java.util.List<string>>;
          _LAUNCHER_AS_SERVICE: StandardBundlerParam<boolean>;
          _LAUNCHER_DATA: StandardBundlerParam<LauncherData>;
          readonly LICENSE_FILE: StandardBundlerParam<string>;
          _LIMIT_MODULES: BundlerParamInfo<java.util.Set<string>>;
          _MAIN_CLASS: StandardBundlerParam<string>;
          _MAIN_JAR: StandardBundlerParam<java.nio.file.Path>;
          _MENU_HINT: StandardBundlerParam<boolean>;
          _MODULE: BundlerParamInfo<string>;
          _MODULE_PATH: BundlerParamInfo<java.util.List<java.nio.file.Path>>;
          _NAME: StandardBundlerParam<string>;
          _PREDEFINED_APP_IMAGE: StandardBundlerParam<java.nio.file.Path>;
          _PREDEFINED_RUNTIME_IMAGE: StandardBundlerParam<java.nio.file.Path>;
          _RELEASE: StandardBundlerParam<string>;
          _RESOURCE_DIR: StandardBundlerParam<java.nio.file.Path>;
          _SHORTCUT_HINT: StandardBundlerParam<boolean>;
          _SIGN_BUNDLE: StandardBundlerParam<boolean>;
          _SOURCE_DIR: StandardBundlerParam<java.nio.file.Path>;
          _TEMP_ROOT: StandardBundlerParam<java.nio.file.Path>;
          _VENDOR: StandardBundlerParam<string>;
          _VERBOSE: StandardBundlerParam<boolean>;
          _VERSION: StandardBundlerParam<string>;
          _new(id: string, valueType: java.lang.Class<T>, defaultValueFunction: java.util.function.Function<java.util.Map<string,any>,T>, stringConverter: java.util.function.BiFunction<string,java.util.Map<string,any>,T>): StandardBundlerParam<T>;
        }
        let StandardBundlerParam: _StandardBundlerParam$$static<T>;
        interface _StandardBundlerParam<T> {
        }
        interface StandardBundlerParam<T> extends CombineTypes<[_StandardBundlerParam<T>, BundlerParamInfo<T>]> {}
        interface _ToolValidator$$static extends ClassLike {
          _new(tool: string): ToolValidator;
          _new(toolPath: java.nio.file.Path): ToolValidator;
        }
        let ToolValidator: _ToolValidator$$static;
        interface _ToolValidator {
          _setCommandLine(args: string[]): ToolValidator;
          _setCommandLine(...args: string[]): ToolValidator;
          _setMinimalVersion(v: java.lang.Comparable<string>): ToolValidator;
          _setToolNotFoundErrorHandler(v: java.util.function.BiFunction<string,java.io.IOException,ConfigException>): ToolValidator;
          _setToolOldVersionErrorHandler(v: java.util.function.BiFunction<string,string,ConfigException>): ToolValidator;
          _setVersionParser(v: java.util.function.Function<java.util.stream.Stream<string>,string>): ToolValidator;
          _validate(): ConfigException;
          _args: java.util.List<string>;
          _minimalVersion: java.lang.Comparable<string>;
          _toolNotFoundErrorHandler: java.util.function.BiFunction<string,java.io.IOException,ConfigException>;
          _toolOldVersionErrorHandler: java.util.function.BiFunction<string,string,ConfigException>;
          _toolPath: java.nio.file.Path;
          _versionParser: java.util.function.Function<java.util.stream.Stream<string>,string>;
        }
        interface ToolValidator extends CombineTypes<[_ToolValidator, java.lang.Object]> {}
        interface _ValidOptions$$static extends ClassLike {
          _checkIfImageSupported(arg: Arguments$CLIOptions): boolean;
          _checkIfInstallerSupported(arg: Arguments$CLIOptions): boolean;
          _checkIfSigningSupported(arg: Arguments$CLIOptions): boolean;
          _checkIfSupported(arg: Arguments$CLIOptions): boolean;
          _put(key: string, value: ValidOptions$USE): java.util.EnumSet<ValidOptions$USE>;
          _put(key: string, value: java.util.EnumSet<ValidOptions$USE>): java.util.EnumSet<ValidOptions$USE>;
          _options: java.util.HashMap<string,java.util.EnumSet<ValidOptions$USE>>;
          _new(): ValidOptions;
        }
        let ValidOptions: _ValidOptions$$static;
        interface _ValidOptions {
        }
        interface ValidOptions extends CombineTypes<[_ValidOptions, java.lang.Object]> {}
        interface _ValidOptions$USE$$static extends ClassLike {
          valueOf(name: string): ValidOptions$USE;
          values(): ValidOptions$USE[];
          readonly ALL: ValidOptions$USE;
          readonly INSTALL: ValidOptions$USE;
          readonly LAUNCHER: ValidOptions$USE;
          readonly SIGN: ValidOptions$USE;
        }
        let ValidOptions$USE: _ValidOptions$USE$$static;
        interface _ValidOptions$USE {
        }
        interface ValidOptions$USE extends CombineTypes<[_ValidOptions$USE]> {}
        interface _WinAppBundler$$static extends ClassLike {
          new(): WinAppBundler;
        }
        let WinAppBundler: _WinAppBundler$$static;
        interface _WinAppBundler {
          cleanup(a0: java.util.Map): void;
          toString(): string;
        }
        interface WinAppBundler extends CombineTypes<[_WinAppBundler, jdk.jpackage.internal.AppImageBundler]> {}
        interface _WinExeBundler$$static extends ClassLike {
          _embedMSI(a0: long, a1: string): int;
          readonly EXE_IMAGE_DIR: BundlerParamInfo<java.nio.file.Path>;
          _EXE_WRAPPER_NAME: string;
          new(): WinExeBundler;
        }
        let WinExeBundler: _WinExeBundler$$static;
        interface _WinExeBundler {
          _buildEXE(params: java.util.Map<string,any>, msi: java.nio.file.Path, outdir: java.nio.file.Path): java.nio.file.Path;
          bundle(params: java.util.Map<string,any>, outdir: java.nio.file.Path): java.nio.file.Path;
          cleanup(a0: java.util.Map): void;
          execute(params: java.util.Map<string,any>, outputParentDir: java.nio.file.Path): java.nio.file.Path;
          getBundleType(): string;
          getID(): string;
          getName(): string;
          isDefault(): boolean;
          supported(platformInstaller: boolean): boolean;
          toString(): string;
          validate(params: java.util.Map<string,any>): boolean;
          _msiBundler: WinMsiBundler;
        }
        interface WinExeBundler extends CombineTypes<[_WinExeBundler, jdk.jpackage.internal.AbstractBundler]> {}
        interface _WinMsiBundler$$static extends ClassLike {
          _createNameUUID(prefix: string, params: java.util.Map<string,any>, components: java.util.List<StandardBundlerParam<string>>): java.util.UUID;
          _ensureByMutationFileIsRTF(f: java.nio.file.Path): void;
          _getCultureFromWxlFile(wxlPath: java.nio.file.Path): string;
          _getProductCode(params: java.util.Map<string,any>): java.util.UUID;
          _getUpgradeCode(params: java.util.Map<string,any>): java.util.UUID;
          _getWxlFilesFromDir(params: java.util.Map<string,any>, pathParam: StandardBundlerParam<java.nio.file.Path>): java.util.List<java.nio.file.Path>;
          _initServiceInstallerResource(params: java.util.Map<string,any>): OverridableResource;
          _HELP_URL: BundlerParamInfo<string>;
          _INSTALLER_FILE_NAME: BundlerParamInfo<string>;
          readonly MSI_IMAGE_DIR: BundlerParamInfo<java.nio.file.Path>;
          readonly MSI_SYSTEM_WIDE: StandardBundlerParam<boolean>;
          readonly PRODUCT_VERSION: StandardBundlerParam<string>;
          _SERVICE_INSTALLER: StandardBundlerParam<InstallableFile>;
          _UPDATE_URL: BundlerParamInfo<string>;
          _UPGRADE_UUID: BundlerParamInfo<string>;
          readonly WIN_APP_IMAGE: BundlerParamInfo<java.nio.file.Path>;
          new(): WinMsiBundler;
        }
        let WinMsiBundler: _WinMsiBundler$$static;
        interface _WinMsiBundler {
          _buildMSI(params: java.util.Map<string,any>, wixVars: java.util.Map<string,string>, outdir: java.nio.file.Path): java.nio.file.Path;
          cleanup(a0: java.util.Map): void;
          execute(params: java.util.Map<string,any>, outputParentDir: java.nio.file.Path): java.nio.file.Path;
          _getAppImageSizeKb(params: java.util.Map<string,any>): long;
          getBundleType(): string;
          getID(): string;
          getName(): string;
          isDefault(): boolean;
          _prepareMainProjectFile(params: java.util.Map<string,any>): java.util.Map<string,string>;
          _prepareProto(params: java.util.Map<string,any>): void;
          supported(platformInstaller: boolean): boolean;
          toString(): string;
          validate(params: java.util.Map<string,any>): boolean;
          _appImageBundler: AppImageBundler;
          _installerIcon: java.nio.file.Path;
          _wixFragments: java.util.List<WixFragmentBuilder>;
          _wixToolset: java.util.Map<WixTool,WixTool$ToolInfo>;
        }
        interface WinMsiBundler extends CombineTypes<[_WinMsiBundler, jdk.jpackage.internal.AbstractBundler]> {}
        interface _WindowsAppImageBuilder$$static extends ClassLike {
          _getLauncherName(params: java.util.Map<string,any>): string;
          getLauncherResourceName(params: java.util.Map<string,any>): string;
          readonly CONSOLE_HINT: StandardBundlerParam<boolean>;
          _I18N: java.util.ResourceBundle;
          readonly ICON_ICO: BundlerParamInfo<java.nio.file.Path>;
          _TEMPLATE_APP_ICON: string;
          _new(imageOutDir: java.nio.file.Path): WindowsAppImageBuilder;
        }
        let WindowsAppImageBuilder: _WindowsAppImageBuilder$$static;
        interface _WindowsAppImageBuilder {
          _createLauncherForEntryPoint(params: java.util.Map<string,any>, mainParams: java.util.Map<string,any>): void;
          prepareApplicationFiles(params: java.util.Map<string,any>): void;
          _writeEntry(_in: java.io.InputStream, dstFile: java.nio.file.Path): void;
        }
        interface WindowsAppImageBuilder extends CombineTypes<[_WindowsAppImageBuilder, jdk.jpackage.internal.AbstractAppImageBuilder]> {}
        interface _WindowsDefender$$static extends ClassLike {
          _getUserTempDirectory(): string;
          _isDirectoryInExclusionPath(dir: string): boolean;
          _isThereAPotentialWindowsDefenderIssue(dir: string): boolean;
        }
        let WindowsDefender: _WindowsDefender$$static;
        interface _WindowsDefender {
        }
        interface WindowsDefender extends CombineTypes<[_WindowsDefender, java.lang.Object]> {}
        interface _WindowsRegistry$$static extends ClassLike {
          _closeRegistryKey(a0: long): void;
          comparePaths(a0: string, a1: string): boolean;
          _enumRegistryValue(a0: long, a1: int): string;
          _openRegistryKey(a0: int, a1: string): long;
          _readDisableRealtimeMonitoring(): boolean;
          _readDwordValue(a0: int, a1: string, a2: string, a3: int): int;
          _readExclusionsPaths(): java.util.List<string>;
          _HKEY_LOCAL_MACHINE: int;
        }
        let WindowsRegistry: _WindowsRegistry$$static;
        interface _WindowsRegistry {
        }
        interface WindowsRegistry extends CombineTypes<[_WindowsRegistry, java.lang.Object]> {}
        interface _WixAppImageFragmentBuilder$$static extends ClassLike {
          _addComponentGroup(xml: javax.xml.stream.XMLStreamWriter, id: string, componentIds: java.util.List<string>): void;
          _addExeSuffixToPath(path: java.nio.file.Path): java.nio.file.Path;
          _createNameUUID(str: string): java.util.UUID;
          _createNameUUID(path: java.nio.file.Path, role: string): java.util.UUID;
          _throwInvalidPathException(v: java.nio.file.Path): java.lang.IllegalArgumentException;
          _toWixPath(path: java.nio.file.Path): string;
          _DESKTOP_PATH: java.nio.file.Path;
          _INSTALLDIR: java.nio.file.Path;
          _KNOWN_DIRS: java.util.Set<java.nio.file.Path>;
          _LOCAL_PROGRAM_FILES: java.nio.file.Path;
          _MENU_GROUP: StandardBundlerParam<string>;
          _PROGRAM_FILES: java.nio.file.Path;
          _PROGRAM_MENU_PATH: java.nio.file.Path;
          _ROOT_DIRS: java.util.Set<java.nio.file.Path>;
          _SYSTEM_DIRS: java.util.Set<java.nio.file.Path>;
          _TARGETDIR: java.nio.file.Path;
          _USER_PROFILE_DIRS: java.util.Set<java.nio.file.Path>;
          _WINDOWS_INSTALL_DIR: BundlerParamInfo<string>;
          _new(): WixAppImageFragmentBuilder;
        }
        let WixAppImageFragmentBuilder: _WixAppImageFragmentBuilder$$static;
        interface _WixAppImageFragmentBuilder {
          _addComponent(xml: javax.xml.stream.XMLStreamWriter, path: java.nio.file.Path, role: WixAppImageFragmentBuilder$Component, xmlConsumer: IOUtils$XmlConsumer): string;
          _addDirectoryCleaner(xml: javax.xml.stream.XMLStreamWriter, path: java.nio.file.Path): string;
          _addDirectoryHierarchy(xml: javax.xml.stream.XMLStreamWriter): java.util.List<string>;
          _addFaComponentGroup(xml: javax.xml.stream.XMLStreamWriter): void;
          _addFaComponents(xml: javax.xml.stream.XMLStreamWriter, fa: FileAssociation): java.util.List<string>;
          _addFilesComponentGroup(xml: javax.xml.stream.XMLStreamWriter): void;
          _addFilesToConfigRoot(): void;
          _addIcons(xml: javax.xml.stream.XMLStreamWriter): void;
          _addRegistryKeyPath(xml: javax.xml.stream.XMLStreamWriter, path: java.nio.file.Path): void;
          _addRegistryKeyPath(xml: javax.xml.stream.XMLStreamWriter, path: java.nio.file.Path, nameAttr: java.util.function.Supplier<string>, valueAttr: java.util.function.Supplier<string>): void;
          _addRemoveDirectoryComponent(xml: javax.xml.stream.XMLStreamWriter, path: java.nio.file.Path): string;
          _addRootBranch(xml: javax.xml.stream.XMLStreamWriter, path: java.nio.file.Path): java.util.List<string>;
          _addServiceConfigs(xml: javax.xml.stream.XMLStreamWriter): java.util.List<string>;
          _addShortcutComponent(xml: javax.xml.stream.XMLStreamWriter, launcherPath: java.nio.file.Path, folder: WixAppImageFragmentBuilder$ShortcutsFolder): string;
          _addShortcutComponentGroup(xml: javax.xml.stream.XMLStreamWriter): void;
          _getFragmentWriters(): java.util.Collection<IOUtils$XmlConsumer>;
          _getInstalledFaIcoPath(fa: FileAssociation): java.nio.file.Path;
          _initFileAssociations(params: java.util.Map<string,any>): void;
          _initFromParams(params: java.util.Map<string,any>): void;
          _normalizeFileAssociation(fa: FileAssociation): void;
          _appImage: ApplicationLayout;
          _associations: java.util.List<FileAssociation>;
          _defaultedMimes: java.util.Set<string>;
          _installDir: java.nio.file.Path;
          _installedAppImage: ApplicationLayout;
          _launchers: java.util.List<AppImageFile$LauncherInfo>;
          _launchersAsServices: java.util.List<WixLauncherAsService>;
          _programMenuFolderName: string;
          _registryKeyPath: string;
          _removeFolderItems: java.util.Map<java.nio.file.Path,int>;
          _serviceInstaller: InstallableFile;
          _shortcutFolders: java.util.Set<WixAppImageFragmentBuilder$ShortcutsFolder>;
          _systemWide: boolean;
        }
        interface WixAppImageFragmentBuilder extends CombineTypes<[_WixAppImageFragmentBuilder, jdk.jpackage.internal.WixFragmentBuilder]> {}
        interface _WixAppImageFragmentBuilder$Component$$static extends ClassLike {
          _cfg(): WixAppImageFragmentBuilder$Component$Config;
          _startElement(xml: javax.xml.stream.XMLStreamWriter, componentId: string, componentGuid: string): void;
          valueOf(name: string): WixAppImageFragmentBuilder$Component;
          values(): WixAppImageFragmentBuilder$Component[];
          readonly CreateFolder: WixAppImageFragmentBuilder$Component;
          readonly File: WixAppImageFragmentBuilder$Component;
          readonly ProgId: WixAppImageFragmentBuilder$Component;
          readonly RemoveFolder: WixAppImageFragmentBuilder$Component;
          readonly Shortcut: WixAppImageFragmentBuilder$Component;
        }
        let WixAppImageFragmentBuilder$Component: _WixAppImageFragmentBuilder$Component$$static;
        interface _WixAppImageFragmentBuilder$Component {
          _guidOf(path: java.nio.file.Path): java.util.UUID;
          _idOf(path: java.nio.file.Path): string;
          _isFile(): boolean;
          _isRegistryKeyPath(): boolean;
          _cfg: WixAppImageFragmentBuilder$Component$Config;
          _id: WixAppImageFragmentBuilder$Id;
        }
        interface WixAppImageFragmentBuilder$Component extends CombineTypes<[_WixAppImageFragmentBuilder$Component]> {}
        interface _WixAppImageFragmentBuilder$Component$Config$$static extends ClassLike {
        }
        let WixAppImageFragmentBuilder$Component$Config: _WixAppImageFragmentBuilder$Component$Config$$static;
        interface _WixAppImageFragmentBuilder$Component$Config {
          _file(): WixAppImageFragmentBuilder$Component$Config;
          _withRegistryKeyPath(): WixAppImageFragmentBuilder$Component$Config;
          _isFile: boolean;
          _withRegistryKeyPath: boolean;
        }
        interface WixAppImageFragmentBuilder$Component$Config extends CombineTypes<[_WixAppImageFragmentBuilder$Component$Config, java.lang.Object]> {}
        interface _WixAppImageFragmentBuilder$Id$$static extends ClassLike {
          _of(path: java.nio.file.Path, prefix: string, role: string): string;
          _of(path: java.nio.file.Path, prefix: string): string;
          valueOf(name: string): WixAppImageFragmentBuilder$Id;
          values(): WixAppImageFragmentBuilder$Id[];
          readonly CreateFolder: WixAppImageFragmentBuilder$Id;
          readonly File: WixAppImageFragmentBuilder$Id;
          readonly Folder: WixAppImageFragmentBuilder$Id;
          readonly Icon: WixAppImageFragmentBuilder$Id;
          readonly ProgId: WixAppImageFragmentBuilder$Id;
          readonly RemoveFolder: WixAppImageFragmentBuilder$Id;
          readonly Shortcut: WixAppImageFragmentBuilder$Id;
        }
        let WixAppImageFragmentBuilder$Id: _WixAppImageFragmentBuilder$Id$$static;
        interface _WixAppImageFragmentBuilder$Id {
          _of(path: java.nio.file.Path): string;
          _prefix: string;
        }
        interface WixAppImageFragmentBuilder$Id extends CombineTypes<[_WixAppImageFragmentBuilder$Id]> {}
        interface _WixAppImageFragmentBuilder$ShortcutsFolder$$static extends ClassLike {
          valueOf(name: string): WixAppImageFragmentBuilder$ShortcutsFolder;
          values(): WixAppImageFragmentBuilder$ShortcutsFolder[];
          readonly Desktop: WixAppImageFragmentBuilder$ShortcutsFolder;
          readonly ProgramMenu: WixAppImageFragmentBuilder$ShortcutsFolder;
        }
        let WixAppImageFragmentBuilder$ShortcutsFolder: _WixAppImageFragmentBuilder$ShortcutsFolder$$static;
        interface _WixAppImageFragmentBuilder$ShortcutsFolder {
          _getPath(outer: WixAppImageFragmentBuilder): java.nio.file.Path;
          _getWixVariableName(): string;
          _requested(params: java.util.Map<string,any>): boolean;
          _bundlerParam: StandardBundlerParam<boolean>;
          _property: string;
          _root: java.nio.file.Path;
          _wixVariableName: string;
        }
        interface WixAppImageFragmentBuilder$ShortcutsFolder extends CombineTypes<[_WixAppImageFragmentBuilder$ShortcutsFolder]> {}
        interface _WixFragmentBuilder$$static extends ClassLike {
          _createWixSource(file: java.nio.file.Path, xmlConsumer: IOUtils$XmlConsumer): void;
          _is64Bit(): boolean;
          _new(): WixFragmentBuilder;
        }
        let WixFragmentBuilder: _WixFragmentBuilder$$static;
        interface _WixFragmentBuilder {
          _addFilesToConfigRoot(): void;
          _addResource(resource: OverridableResource, saveAsName: string): void;
          _configureWixPipeline(wixPipeline: WixPipeline): void;
          _defineWixVariable(variableName: string): void;
          _getConfigRoot(): java.nio.file.Path;
          _getFragmentWriters(): java.util.Collection<IOUtils$XmlConsumer>;
(): java.util.Collection<IOUtils$XmlConsumer>;
          _getWixVersion(): DottedVersion;
          _initFromParams(params: java.util.Map<string,any>): void;
          _logWixFeatures(): void;
          _setOutputFileName(v: string): void;
          _setWixVariable(variableName: string, variableValue: string): void;
          _setWixVersion(v: DottedVersion): void;
          _additionalResources: java.util.List<WixFragmentBuilder$ResourceWithName>;
          _configRoot: java.nio.file.Path;
          _fragmentResource: OverridableResource;
          _outputFileName: string;
          _wixVariables: WixVariables;
          _wixVersion: DottedVersion;
        }
        interface WixFragmentBuilder extends CombineTypes<[_WixFragmentBuilder, java.lang.Object]> {}
        interface _WixFragmentBuilder$ResourceWithName$$static extends ClassLike {
          _new(resource: OverridableResource, saveAsName: string): WixFragmentBuilder$ResourceWithName;
        }
        let WixFragmentBuilder$ResourceWithName: _WixFragmentBuilder$ResourceWithName$$static;
        interface _WixFragmentBuilder$ResourceWithName {
          _resource: OverridableResource;
          _saveAsName: string;
        }
        interface WixFragmentBuilder$ResourceWithName extends CombineTypes<[_WixFragmentBuilder$ResourceWithName, java.lang.Object]> {}
        interface _WixFragmentBuilder$WixPreprocessorEscaper$$static extends ClassLike {
          _new(target: javax.xml.stream.XMLStreamWriter): WixFragmentBuilder$WixPreprocessorEscaper;
        }
        let WixFragmentBuilder$WixPreprocessorEscaper: _WixFragmentBuilder$WixPreprocessorEscaper$$static;
        interface _WixFragmentBuilder$WixPreprocessorEscaper {
          _escape(str: WixFragmentBuilder$WixPreprocessorEscaper$charSequence): string;
          invoke(proxy: any, method: java.lang.reflect.Method, args: any[]): any;
          _dollarPattern: java.util.regex.Pattern;
          _target: javax.xml.stream.XMLStreamWriter;
        }
        interface WixFragmentBuilder$WixPreprocessorEscaper extends CombineTypes<[_WixFragmentBuilder$WixPreprocessorEscaper, java.lang.Object, java.lang.reflect.InvocationHandler]> {}
        interface _WixLauncherAsService$$static extends ClassLike {
          _new(name: string, mainParams: java.util.Map<string,any>): WixLauncherAsService;
        }
        let WixLauncherAsService: _WixLauncherAsService$$static;
        interface _WixLauncherAsService {
          _addSubstitutionDataEntry(name: string, value: string): WixLauncherAsService;
          _setLauncherInstallPath(v: string): WixLauncherAsService;
          _setLauncherInstallPathId(v: string): WixLauncherAsService;
          _setPublicName(r: OverridableResource): OverridableResource;
          _writeResource(resource: OverridableResource, xml: javax.xml.stream.XMLStreamWriter): void;
          _writeServiceConfig(xml: javax.xml.stream.XMLStreamWriter): void;
          _writeServiceInstall(xml: javax.xml.stream.XMLStreamWriter): void;
          _serviceConfigResource: OverridableResource;
        }
        interface WixLauncherAsService extends CombineTypes<[_WixLauncherAsService, jdk.jpackage.internal.LauncherAsService]> {}
        interface _WixPipeline$$static extends ClassLike {
          _new(): WixPipeline;
        }
        let WixPipeline: _WixPipeline$$static;
        interface _WixPipeline {
          _addLightOptions(v: string[]): WixPipeline;
          _addLightOptions(...v: string[]): WixPipeline;
          _addSource(source: java.nio.file.Path, wixVariables: java.util.Map<string,string>): WixPipeline;
          _buildMsi(msi: java.nio.file.Path): void;
          _compile(wixSource: WixPipeline$WixSource): java.nio.file.Path;
          _execute(cmdline: java.util.List<string>): void;
          _setToolset(v: java.util.Map<WixTool,java.nio.file.Path>): WixPipeline;
          _setWixObjDir(v: java.nio.file.Path): WixPipeline;
          _setWixVariables(v: java.util.Map<string,string>): WixPipeline;
          _setWorkDir(v: java.nio.file.Path): WixPipeline;
          _lightOptions: java.util.List<string>;
          _sources: java.util.List<WixPipeline$WixSource>;
          _toolset: java.util.Map<WixTool,java.nio.file.Path>;
          _wixObjDir: java.nio.file.Path;
          _wixVariables: java.util.Map<string,string>;
          _workDir: java.nio.file.Path;
        }
        interface WixPipeline extends CombineTypes<[_WixPipeline, java.lang.Object]> {}
        interface _WixPipeline$WixSource$$static extends ClassLike {
        }
        let WixPipeline$WixSource: _WixPipeline$WixSource$$static;
        interface _WixPipeline$WixSource {
          _source: java.nio.file.Path;
          _variables: java.util.Map<string,string>;
        }
        interface WixPipeline$WixSource extends CombineTypes<[_WixPipeline$WixSource, java.lang.Object]> {}
        interface _WixTool$$static extends ClassLike {
          _createToolValidator(toolPath: java.nio.file.Path, versionCtnr: string[]): java.util.function.Supplier<ConfigException>;
          _findWixInstallDirs(): java.util.List<java.nio.file.Path>;
          _getEnvVariableAsPath(envVar: string): java.nio.file.Path;
          _getSystemDir(envVar: string, knownDir: string): java.nio.file.Path;
          _toolset(): java.util.Map<WixTool,WixTool$ToolInfo>;
          valueOf(name: string): WixTool;
          values(): WixTool[];
          readonly Candle: WixTool;
          readonly Light: WixTool;
          _MINIMAL_VERSION: DottedVersion;
        }
        let WixTool: _WixTool$$static;
        interface _WixTool {
          _find(): WixTool$ToolInfo;
        }
        interface WixTool extends CombineTypes<[_WixTool]> {}
        interface _WixTool$ToolInfo$$static extends ClassLike {
          _new(path: java.nio.file.Path, version: string): WixTool$ToolInfo;
        }
        let WixTool$ToolInfo: _WixTool$ToolInfo$$static;
        interface _WixTool$ToolInfo {
          _path: java.nio.file.Path;
          _version: DottedVersion;
        }
        interface WixTool$ToolInfo extends CombineTypes<[_WixTool$ToolInfo, java.lang.Object]> {}
        interface _WixUiFragmentBuilder$$static extends ClassLike {
          _buildPublish(): WixUiFragmentBuilder$PublishBuilder;
          _buildPublish(publish: WixUiFragmentBuilder$Publish): WixUiFragmentBuilder$PublishBuilder;
          _writePublishDialogPair(xml: javax.xml.stream.XMLStreamWriter, publish: WixUiFragmentBuilder$Publish, dialogPair: WixUiFragmentBuilder$DialogPair): void;
          _INSTALLDIR_CHOOSER: BundlerParamInfo<boolean>;
          _SHORTCUT_PROMPT: StandardBundlerParam<boolean>;
          _new(): WixUiFragmentBuilder;
        }
        let WixUiFragmentBuilder: _WixUiFragmentBuilder$$static;
        interface _WixUiFragmentBuilder {
          _addFilesToConfigRoot(): void;
          _addUI(xml: javax.xml.stream.XMLStreamWriter): void;
          _configureWixPipeline(wixPipeline: WixPipeline): void;
          _dialogSequenceForWixUI_InstallDir(): java.util.List<WixUiFragmentBuilder$Dialog>;
          _getFragmentWriters(): java.util.Collection<IOUtils$XmlConsumer>;
          _getUI(): WixUiFragmentBuilder$UI;
          _initFromParams(params: java.util.Map<string,any>): void;
          _customDialogs: java.util.List<WixUiFragmentBuilder$CustomDialog>;
          _withCustomActionsDll: boolean;
          _withInstallDirChooserDlg: boolean;
          _withLicenseDlg: boolean;
          _withShortcutPromptDlg: boolean;
        }
        interface WixUiFragmentBuilder extends CombineTypes<[_WixUiFragmentBuilder, jdk.jpackage.internal.WixFragmentBuilder]> {}
        interface _WixUiFragmentBuilder$CustomDialog$$static extends ClassLike {
          _new(a0: java.util.Map<string,any>, params: string, category: string): WixUiFragmentBuilder$CustomDialog;
        }
        let WixUiFragmentBuilder$CustomDialog: _WixUiFragmentBuilder$CustomDialog$$static;
        interface _WixUiFragmentBuilder$CustomDialog {
          _addToWixPipeline(wixPipeline: WixPipeline): void;
          _this$0: WixUiFragmentBuilder;
          _wixVariables: WixVariables;
          _wxsFileName: string;
        }
        interface WixUiFragmentBuilder$CustomDialog extends CombineTypes<[_WixUiFragmentBuilder$CustomDialog, java.lang.Object]> {}
        interface _WixUiFragmentBuilder$Dialog$$static extends ClassLike {
          _createPair(firstId: WixUiFragmentBuilder$Dialog, secondId: WixUiFragmentBuilder$Dialog, nextBuilders: java.util.List<WixUiFragmentBuilder$PublishBuilder>, prevBuilders: java.util.List<WixUiFragmentBuilder$PublishBuilder>): java.util.Map<WixUiFragmentBuilder$DialogPair,java.util.List<WixUiFragmentBuilder$Publish>>;
          _createPair(firstId: WixUiFragmentBuilder$Dialog, secondId: WixUiFragmentBuilder$Dialog, builders: java.util.List<WixUiFragmentBuilder$PublishBuilder>): java.util.Map<WixUiFragmentBuilder$DialogPair,java.util.List<WixUiFragmentBuilder$Publish>>;
          _createPairsForWixUI_InstallDir(): java.util.Map<WixUiFragmentBuilder$DialogPair,java.util.List<WixUiFragmentBuilder$Publish>>;
          valueOf(name: string): WixUiFragmentBuilder$Dialog;
          values(): WixUiFragmentBuilder$Dialog[];
          readonly InstallDirDlg: WixUiFragmentBuilder$Dialog;
          readonly ShortcutPromptDlg: WixUiFragmentBuilder$Dialog;
          readonly WixUI_LicenseAgreementDlg: WixUiFragmentBuilder$Dialog;
          readonly WixUI_VerifyReadyDlg: WixUiFragmentBuilder$Dialog;
          readonly WixUI_WelcomeDlg: WixUiFragmentBuilder$Dialog;
        }
        let WixUiFragmentBuilder$Dialog: _WixUiFragmentBuilder$Dialog$$static;
        interface _WixUiFragmentBuilder$Dialog {
          _id: string;
        }
        interface WixUiFragmentBuilder$Dialog extends CombineTypes<[_WixUiFragmentBuilder$Dialog]> {}
        interface _WixUiFragmentBuilder$DialogPair$$static extends ClassLike {
          _new(first: WixUiFragmentBuilder$Dialog, second: WixUiFragmentBuilder$Dialog): WixUiFragmentBuilder$DialogPair;
          _new(firstId: string, secondId: string): WixUiFragmentBuilder$DialogPair;
        }
        let WixUiFragmentBuilder$DialogPair: _WixUiFragmentBuilder$DialogPair$$static;
        interface _WixUiFragmentBuilder$DialogPair {
          equals(obj: any): boolean;
          _flip(): WixUiFragmentBuilder$DialogPair;
          hashCode(): int;
          _firstId: string;
          _secondId: string;
        }
        interface WixUiFragmentBuilder$DialogPair extends CombineTypes<[_WixUiFragmentBuilder$DialogPair, java.lang.Object]> {}
        interface _WixUiFragmentBuilder$Publish$$static extends ClassLike {
          _new(control: string, condition: string, order: int): WixUiFragmentBuilder$Publish;
        }
        let WixUiFragmentBuilder$Publish: _WixUiFragmentBuilder$Publish$$static;
        interface _WixUiFragmentBuilder$Publish {
          _condition: string;
          _control: string;
          _order: int;
        }
        interface WixUiFragmentBuilder$Publish extends CombineTypes<[_WixUiFragmentBuilder$Publish, java.lang.Object]> {}
        interface _WixUiFragmentBuilder$PublishBuilder$$static extends ClassLike {
          _new(): WixUiFragmentBuilder$PublishBuilder;
          _new(publish: WixUiFragmentBuilder$Publish): WixUiFragmentBuilder$PublishBuilder;
        }
        let WixUiFragmentBuilder$PublishBuilder: _WixUiFragmentBuilder$PublishBuilder$$static;
        interface _WixUiFragmentBuilder$PublishBuilder {
          back(): WixUiFragmentBuilder$PublishBuilder;
          condition(v: string): WixUiFragmentBuilder$PublishBuilder;
          control(v: string): WixUiFragmentBuilder$PublishBuilder;
          _create(): WixUiFragmentBuilder$Publish;
          next(): WixUiFragmentBuilder$PublishBuilder;
          order(v: int): WixUiFragmentBuilder$PublishBuilder;
          _condition: string;
          _control: string;
          _order: int;
        }
        interface WixUiFragmentBuilder$PublishBuilder extends CombineTypes<[_WixUiFragmentBuilder$PublishBuilder, java.lang.Object]> {}
        interface _WixUiFragmentBuilder$UI$$static extends ClassLike {
          valueOf(name: string): WixUiFragmentBuilder$UI;
          values(): WixUiFragmentBuilder$UI[];
          readonly InstallDir: WixUiFragmentBuilder$UI;
          readonly Minimal: WixUiFragmentBuilder$UI;
        }
        let WixUiFragmentBuilder$UI: _WixUiFragmentBuilder$UI$$static;
        interface _WixUiFragmentBuilder$UI {
          _write(outer: WixUiFragmentBuilder, xml: javax.xml.stream.XMLStreamWriter): void;
          _dialogIdsSupplier: java.util.function.Function<WixUiFragmentBuilder,java.util.List<WixUiFragmentBuilder$Dialog>>;
          _dialogPairsSupplier: java.util.function.Supplier<java.util.Map<WixUiFragmentBuilder$DialogPair,java.util.List<WixUiFragmentBuilder$Publish>>>;
          _wixUIRef: string;
        }
        interface WixUiFragmentBuilder$UI extends CombineTypes<[_WixUiFragmentBuilder$UI]> {}
        interface _WixVariables$$static extends ClassLike {
          _new(): WixVariables;
        }
        let WixVariables: _WixVariables$$static;
        interface _WixVariables {
          _defineWixVariable(variableName: string): void;
          _getValues(): java.util.Map<string,string>;
          _setWixVariable(variableName: string, variableValue: string): void;
          _values: java.util.Map<string,string>;
        }
        interface WixVariables extends CombineTypes<[_WixVariables, java.lang.Object]> {}
      }
      module main {
        interface _Main$$static extends ClassLike {
          main(args: string[]): void;
          main(...args: string[]): void;
          readonly I18N: java.util.ResourceBundle;
          new(): Main;
        }
        let Main: _Main$$static;
        interface _Main {
          execute(out: java.io.PrintWriter, err: java.io.PrintWriter, args: string[]): int;
          execute(out: java.io.PrintWriter, err: java.io.PrintWriter, ...args: string[]): int;
          _hasHelp(args: string[]): boolean;
          _hasVersion(args: string[]): boolean;
        }
        interface Main extends CombineTypes<[_Main, java.lang.Object]> {}
      }
    }
  }
}
