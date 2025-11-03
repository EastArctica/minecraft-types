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
    module javadoc {
      module doclet {
        interface _Doclet$$static extends ClassLike {
        }
        let Doclet: _Doclet$$static;
        interface _Doclet {
          getName(): string;
          getSupportedOptions(): java.util.Set<Doclet$Option>;
          getSupportedSourceVersion(): javax.lang.model.SourceVersion;
          init(a0: java.util.Locale, a1: Reporter): void;
          run(a0: DocletEnvironment): boolean;
        }
        interface Doclet extends CombineTypes<[_Doclet, java.lang.Object]> {}
        interface _Doclet$Option$$static extends ClassLike {
        }
        let Doclet$Option: _Doclet$Option$$static;
        interface _Doclet$Option {
          getArgumentCount(): int;
          getDescription(): string;
          getKind(): Doclet$Option$Kind;
          getNames(): java.util.List<string>;
          getParameters(): string;
          process(a0: string, a1: java.util.List<string>): boolean;
        }
        interface Doclet$Option extends CombineTypes<[_Doclet$Option, java.lang.Object]> {}
        interface _Doclet$Option$Kind$$static extends ClassLike {
          valueOf(name: string): Doclet$Option$Kind;
          values(): Doclet$Option$Kind[];
          readonly EXTENDED: Doclet$Option$Kind;
          readonly OTHER: Doclet$Option$Kind;
          readonly STANDARD: Doclet$Option$Kind;
        }
        let Doclet$Option$Kind: _Doclet$Option$Kind$$static;
        interface _Doclet$Option$Kind {
        }
        interface Doclet$Option$Kind extends CombineTypes<[_Doclet$Option$Kind]> {}
        interface _DocletEnvironment$$static extends ClassLike {
        }
        let DocletEnvironment: _DocletEnvironment$$static;
        interface _DocletEnvironment {
          getDocTrees(): com.sun.source.util.DocTrees;
          getElementUtils(): javax.lang.model.util.Elements;
          getFileKind(a0: javax.lang.model.element.TypeElement): javax.tools.JavaFileObject$Kind;
          getIncludedElements(): java.util.Set<javax.lang.model.element.Element>;
          getJavaFileManager(): javax.tools.JavaFileManager;
          getModuleMode(): DocletEnvironment$ModuleMode;
          getSourceVersion(): javax.lang.model.SourceVersion;
          getSpecifiedElements(): java.util.Set<javax.lang.model.element.Element>;
          getTypeUtils(): javax.lang.model.util.Types;
          isIncluded(a0: javax.lang.model.element.Element): boolean;
          isSelected(a0: javax.lang.model.element.Element): boolean;
        }
        interface DocletEnvironment extends CombineTypes<[_DocletEnvironment, java.lang.Object]> {}
        interface _DocletEnvironment$ModuleMode$$static extends ClassLike {
          valueOf(name: string): DocletEnvironment$ModuleMode;
          values(): DocletEnvironment$ModuleMode[];
          readonly ALL: DocletEnvironment$ModuleMode;
          readonly API: DocletEnvironment$ModuleMode;
        }
        let DocletEnvironment$ModuleMode: _DocletEnvironment$ModuleMode$$static;
        interface _DocletEnvironment$ModuleMode {
        }
        interface DocletEnvironment$ModuleMode extends CombineTypes<[_DocletEnvironment$ModuleMode]> {}
        interface _Reporter$$static extends ClassLike {
        }
        let Reporter: _Reporter$$static;
        interface _Reporter {
          getDiagnosticWriter(): java.io.PrintWriter;
          getStandardWriter(): java.io.PrintWriter;
          print(a0: javax.tools.Diagnostic$Kind, a1: string): void;
          print(a0: javax.tools.Diagnostic$Kind, a1: com.sun.source.util.DocTreePath, a2: string): void;
          print(kind: javax.tools.Diagnostic$Kind, path: com.sun.source.util.DocTreePath, start: int, pos: int, end: int, message: string): void;
          print(a0: javax.tools.Diagnostic$Kind, a1: javax.lang.model.element.Element, a2: string): void;
          print(kind: javax.tools.Diagnostic$Kind, file: javax.tools.FileObject, start: int, pos: int, end: int, message: string): void;
        }
        interface Reporter extends CombineTypes<[_Reporter, java.lang.Object]> {}
        interface _StandardDoclet$$static extends ClassLike {
          new(): StandardDoclet;
        }
        let StandardDoclet: _StandardDoclet$$static;
        interface _StandardDoclet {
          getLocale(): java.util.Locale;
          getName(): string;
          getReporter(): Reporter;
          getSupportedOptions(): java.util.Set<Doclet$Option>;
          getSupportedSourceVersion(): javax.lang.model.SourceVersion;
          init(locale: java.util.Locale, reporter: Reporter): void;
          run(docEnv: DocletEnvironment): boolean;
          _htmlDoclet: javadoc.internal.doclets.formats.html.HtmlDoclet;
        }
        interface StandardDoclet extends CombineTypes<[_StandardDoclet, jdk.javadoc.doclet.Doclet, java.lang.Object]> {}
        interface _Taglet$$static extends ClassLike {
        }
        let Taglet: _Taglet$$static;
        interface _Taglet {
          getAllowedLocations(): java.util.Set<Taglet$Location>;
          getName(): string;
          init(env: DocletEnvironment, doclet: Doclet): void;
          isBlockTag(): boolean;
          isInlineTag(): boolean;
          toString(a0: java.util.List<com.sun.source.doctree.DocTree>, a1: javax.lang.model.element.Element): string;
        }
        interface Taglet extends CombineTypes<[_Taglet, java.lang.Object]> {}
        interface _Taglet$Location$$static extends ClassLike {
          valueOf(name: string): Taglet$Location;
          values(): Taglet$Location[];
          readonly CONSTRUCTOR: Taglet$Location;
          readonly FIELD: Taglet$Location;
          readonly METHOD: Taglet$Location;
          readonly MODULE: Taglet$Location;
          readonly OVERVIEW: Taglet$Location;
          readonly PACKAGE: Taglet$Location;
          readonly TYPE: Taglet$Location;
        }
        let Taglet$Location: _Taglet$Location$$static;
        interface _Taglet$Location {
        }
        interface Taglet$Location extends CombineTypes<[_Taglet$Location]> {}
      }
      module internal {
        module api {
          interface _JavadocTaskImpl$$static extends ClassLike {
            _nullCheck<T>(items: java.lang.Iterable<T>): java.lang.Iterable<T>;
            new(context: com.sun.tools.javac.util.Context, docletClass: java.lang.Class<any>, options: java.lang.Iterable<string>, fileObjects: java.lang.Iterable<javax.tools.JavaFileObject>): JavadocTaskImpl;
          }
          let JavadocTaskImpl: _JavadocTaskImpl$$static;
          interface _JavadocTaskImpl {
            addModules(moduleNames: java.lang.Iterable<string>): void;
            call(): boolean;
            call(): any;
            _initContext(): void;
            setLocale(locale: java.util.Locale): void;
            _addModules: java.util.List<string>;
            _context: com.sun.tools.javac.util.Context;
            _docletClass: java.lang.Class<any>;
            _fileObjects: java.lang.Iterable<javax.tools.JavaFileObject>;
            _locale: java.util.Locale;
            _options: java.lang.Iterable<string>;
            _used: java.util.concurrent.atomic.AtomicBoolean;
          }
          interface JavadocTaskImpl extends CombineTypes<[_JavadocTaskImpl, javax.tools.DocumentationTool$DocumentationTask, java.lang.Object]> {}
          interface _JavadocTool$$static extends ClassLike {
            new(): JavadocTool;
          }
          let JavadocTool: _JavadocTool$$static;
          interface _JavadocTool {
            getSourceVersions(): java.util.Set<javax.lang.model.SourceVersion>;
            getStandardFileManager(diagnosticListener: javax.tools.DiagnosticListener<javax.tools.JavaFileObject>, locale: java.util.Locale, charset: java.nio.charset.Charset): javax.tools.StandardJavaFileManager;
            getTask(out: java.io.Writer, fileManager: javax.tools.JavaFileManager, diagnosticListener: javax.tools.DiagnosticListener<javax.tools.JavaFileObject>, docletClass: java.lang.Class<any>, options: java.lang.Iterable<string>, compilationUnits: java.lang.Iterable<javax.tools.JavaFileObject>): javax.tools.DocumentationTool$DocumentationTask;
            getTask(out: java.io.Writer, fileManager: javax.tools.JavaFileManager, diagnosticListener: javax.tools.DiagnosticListener<javax.tools.JavaFileObject>, docletClass: java.lang.Class<any>, options: java.lang.Iterable<string>, compilationUnits: java.lang.Iterable<javax.tools.JavaFileObject>, context: com.sun.tools.javac.util.Context): javax.tools.DocumentationTool$DocumentationTask;
            isSupportedOption(option: string): int;
            name(): string;
            run(_in: java.io.InputStream, out: java.io.OutputStream, err: java.io.OutputStream, arguments: string[]): int;
            run(_in: java.io.InputStream, out: java.io.OutputStream, err: java.io.OutputStream, ...arguments: string[]): int;
          }
          interface JavadocTool extends CombineTypes<[_JavadocTool, javax.tools.DocumentationTool, java.lang.Object]> {}
        }
        module doclets {
          module formats {
            module html {
              module markup {
                interface _BodyContents$$static extends ClassLike {
                  new(): BodyContents;
                }
                let BodyContents: _BodyContents$$static;
                interface _BodyContents {
                  addMainContent(content: doclets.toolkit.Content): BodyContents;
                  isEmpty(): boolean;
                  setFooter(footer: HtmlTree): BodyContents;
                  setHeader(header: HtmlTree): BodyContents;
                  _toContent(): doclets.toolkit.Content;
                  write(out: java.io.Writer, newline: string, atNewline: boolean): boolean;
                  _footer: HtmlTree;
                  _header: HtmlTree;
                  _mainContents: java.util.List<doclets.toolkit.Content>;
                }
                interface BodyContents extends CombineTypes<[_BodyContents, jdk.javadoc.internal.doclets.toolkit.Content]> {}
                interface _Comment$$static extends ClassLike {
                  new(comment: string): Comment;
                }
                let Comment: _Comment$$static;
                interface _Comment {
                  isEmpty(): boolean;
                  write(out: java.io.Writer, newline: string, atNewline: boolean): boolean;
                  _commentText: string;
                }
                interface Comment extends CombineTypes<[_Comment, jdk.javadoc.internal.doclets.toolkit.Content]> {}
                interface _ContentBuilder$$static extends ClassLike {
                  new(): ContentBuilder;
                  new(contents: doclets.toolkit.Content[]): ContentBuilder;
                  new(...contents: doclets.toolkit.Content[]): ContentBuilder;
                }
                let ContentBuilder: _ContentBuilder$$static;
                interface _ContentBuilder {
                  add(content: doclets.toolkit.Content): ContentBuilder;
                  add(text: ContentBuilder$charSequence): ContentBuilder;
                  add(a0: ContentBuilder$charSequence): doclets.toolkit.Content;
                  add(a0: doclets.toolkit.Content): doclets.toolkit.Content;
                  charCount(): int;
                  _ensureMutableContents(): void;
                  isEmpty(): boolean;
                  write(writer: java.io.Writer, newline: string, atNewline: boolean): boolean;
                  _contents: java.util.List<doclets.toolkit.Content>;
                }
                interface ContentBuilder extends CombineTypes<[_ContentBuilder, jdk.javadoc.internal.doclets.toolkit.Content]> {}
                interface _DocType$$static extends ClassLike {
                  valueOf(name: string): DocType;
                  values(): DocType[];
                  readonly HTML5: DocType;
                }
                let DocType: _DocType$$static;
                interface _DocType {
                  readonly text: string;
                }
                interface DocType extends CombineTypes<[_DocType]> {}
                interface _Entity$$static extends ClassLike {
                  _escapeHtmlChars(s: Entity$charSequence): string;
                  _escapeHtmlChars(s: Entity$charSequence, sb: Entity$stringBuilder): void;
                  _escapeHtmlChars(s: string, start: int, sb: Entity$stringBuilder): void;
                  of(name: Entity$charSequence): Entity;
                  readonly AMPERSAND: Entity;
                  readonly GREATER_THAN: Entity;
                  readonly LESS_THAN: Entity;
                  readonly NO_BREAK_SPACE: Entity;
                }
                let Entity: _Entity$$static;
                interface _Entity {
                  charCount(): int;
                  isEmpty(): boolean;
                  write(writer: java.io.Writer, newline: string, atNewline: boolean): boolean;
                  readonly text: string;
                }
                interface Entity extends CombineTypes<[_Entity, jdk.javadoc.internal.doclets.toolkit.Content]> {}
                interface _Head$$static extends ClassLike {
                  new(path: doclets.toolkit.util.DocPath, docletVersion: java.lang.Runtime$Version, generatedDate: java.time.ZonedDateTime): Head;
                }
                let Head: _Head$$static;
                interface _Head {
                  addContent(contents: doclets.toolkit.Content[]): Head;
                  addContent(...contents: doclets.toolkit.Content[]): Head;
                  addDefaultScript(addDefaultScript: boolean): Head;
                  addKeywords(keywords: java.util.List<string>): Head;
                  addScript(script: Script): Head;
                  _addScriptElement(head: HtmlTree, filePath: doclets.toolkit.util.DocPath): void;
                  _addScripts(head: HtmlTree): void;
                  _addStylesheet(head: HtmlTree, stylesheet: doclets.toolkit.util.DocPath): void;
                  _addStylesheets(head: HtmlTree): void;
                  _getGeneratedBy(timestamp: boolean, buildDate: java.time.ZonedDateTime): Comment;
                  isEmpty(): boolean;
                  setAdditionalScripts(scripts: java.util.List<doclets.toolkit.util.DocPath>): Head;
                  setCanonicalLink(link: doclets.toolkit.util.DocPath): void;
                  setCharset(charset: string): Head;
                  setDescription(description: string): Head;
                  setGenerator(generator: string): Head;
                  setIndex(index: boolean, mainBodyScript: Script): Head;
                  setStylesheets(main: doclets.toolkit.util.DocPath, additional: java.util.List<doclets.toolkit.util.DocPath>): Head;
                  setTimestamp(timestamp: boolean): Head;
                  setTitle(title: string): Head;
                  _toContent(): doclets.toolkit.Content;
                  write(out: java.io.Writer, newline: string, atNewline: boolean): boolean;
                  _addDefaultScript: boolean;
                  _additionalScripts: java.util.List<doclets.toolkit.util.DocPath>;
                  _additionalStylesheets: java.util.List<doclets.toolkit.util.DocPath>;
                  _canonicalLink: doclets.toolkit.util.DocPath;
                  _charset: string;
                  _description: string;
                  _docletVersion: java.lang.Runtime$Version;
                  _extraContent: java.util.List<doclets.toolkit.Content>;
                  _generatedDate: java.time.ZonedDateTime;
                  _generator: string;
                  _index: boolean;
                  _keywords: java.util.List<string>;
                  _mainBodyScript: Script;
                  _mainStylesheet: doclets.toolkit.util.DocPath;
                  _pathToRoot: doclets.toolkit.util.DocPath;
                  _scripts: java.util.List<Script>;
                  _showTimestamp: boolean;
                  _title: string;
                }
                interface Head extends CombineTypes<[_Head, jdk.javadoc.internal.doclets.toolkit.Content]> {}
                interface _HtmlAttr$$static extends ClassLike {
                  valueOf(name: string): HtmlAttr;
                  values(): HtmlAttr[];
                  readonly ALT: HtmlAttr;
                  readonly ARIA_CONTROLS: HtmlAttr;
                  readonly ARIA_EXPANDED: HtmlAttr;
                  readonly ARIA_LABEL: HtmlAttr;
                  readonly ARIA_LABELLEDBY: HtmlAttr;
                  readonly ARIA_ORIENTATION: HtmlAttr;
                  readonly ARIA_SELECTED: HtmlAttr;
                  readonly CHECKED: HtmlAttr;
                  readonly CLASS: HtmlAttr;
                  readonly CLEAR: HtmlAttr;
                  readonly COLS: HtmlAttr;
                  readonly CONTENT: HtmlAttr;
                  readonly DATA_COPIED: HtmlAttr;
                  readonly DISABLED: HtmlAttr;
                  readonly FOR: HtmlAttr;
                  readonly HREF: HtmlAttr;
                  readonly HTTP_EQUIV: HtmlAttr;
                  readonly ID: HtmlAttr;
                  readonly LANG: HtmlAttr;
                  readonly NAME: HtmlAttr;
                  readonly ONCLICK: HtmlAttr;
                  readonly ONKEYDOWN: HtmlAttr;
                  readonly ONLOAD: HtmlAttr;
                  readonly PLACEHOLDER: HtmlAttr;
                  readonly REL: HtmlAttr;
                  readonly ROLE: HtmlAttr;
                  readonly ROWS: HtmlAttr;
                  readonly SCOPE: HtmlAttr;
                  readonly SCROLLING: HtmlAttr;
                  readonly SRC: HtmlAttr;
                  readonly STYLE: HtmlAttr;
                  readonly SUMMARY: HtmlAttr;
                  readonly TABINDEX: HtmlAttr;
                  readonly TARGET: HtmlAttr;
                  readonly TITLE: HtmlAttr;
                  readonly TYPE: HtmlAttr;
                  readonly VALUE: HtmlAttr;
                  readonly WIDTH: HtmlAttr;
                }
                let HtmlAttr: _HtmlAttr$$static;
                interface _HtmlAttr {
                  toString(): string;
                  _value: string;
                }
                interface HtmlAttr extends CombineTypes<[_HtmlAttr]> {}
                interface _HtmlAttr$Role$$static extends ClassLike {
                  valueOf(name: string): HtmlAttr$Role;
                  values(): HtmlAttr$Role[];
                  readonly BANNER: HtmlAttr$Role;
                  readonly CONTENTINFO: HtmlAttr$Role;
                  readonly MAIN: HtmlAttr$Role;
                  readonly NAVIGATION: HtmlAttr$Role;
                  readonly REGION: HtmlAttr$Role;
                }
                let HtmlAttr$Role: _HtmlAttr$Role$$static;
                interface _HtmlAttr$Role {
                  toString(): string;
                  _role: string;
                }
                interface HtmlAttr$Role extends CombineTypes<[_HtmlAttr$Role]> {}
                interface _HtmlDocument$$static extends ClassLike {
                  new(html: doclets.toolkit.Content): HtmlDocument;
                }
                let HtmlDocument: _HtmlDocument$$static;
                interface _HtmlDocument {
                  toString(): string;
                  write(docFile: doclets.toolkit.util.DocFile): void;
                  _write(writer: java.io.Writer, newline: string): void;
                  _docContent: doclets.toolkit.Content;
                  _docType: DocType;
                }
                interface HtmlDocument extends CombineTypes<[_HtmlDocument, java.lang.Object]> {}
                interface _HtmlId$$static extends ClassLike {
                  of(name: string): HtmlId;
                }
                let HtmlId: _HtmlId$$static;
                interface _HtmlId {
                  name(): string;
(): string;
                }
                interface HtmlId extends CombineTypes<[_HtmlId, java.lang.Object]> {}
                interface _HtmlStyle$$static extends ClassLike {
                  valueOf(name: string): HtmlStyle;
                  values(): HtmlStyle[];
                  readonly aboutLanguage: HtmlStyle;
                  readonly activeTableTab: HtmlStyle;
                  readonly allClassesIndexPage: HtmlStyle;
                  readonly allPackagesIndexPage: HtmlStyle;
                  readonly annotations: HtmlStyle;
                  readonly block: HtmlStyle;
                  readonly blockList: HtmlStyle;
                  readonly bold: HtmlStyle;
                  readonly caption: HtmlStyle;
                  readonly checkboxes: HtmlStyle;
                  readonly circle: HtmlStyle;
                  readonly classDeclarationPage: HtmlStyle;
                  readonly classDescription: HtmlStyle;
                  readonly classUsePage: HtmlStyle;
                  readonly classUses: HtmlStyle;
                  readonly colConstructorName: HtmlStyle;
                  readonly colFirst: HtmlStyle;
                  readonly colLast: HtmlStyle;
                  readonly colPlain: HtmlStyle;
                  readonly colSecond: HtmlStyle;
                  readonly colSummaryItemName: HtmlStyle;
                  readonly constantDetails: HtmlStyle;
                  readonly constantsSummary: HtmlStyle;
                  readonly constantsSummaryPage: HtmlStyle;
                  readonly constructorDetails: HtmlStyle;
                  readonly constructorSummary: HtmlStyle;
                  readonly contentsList: HtmlStyle;
                  readonly copy: HtmlStyle;
                  readonly deprecatedInReleasePage: HtmlStyle;
                  readonly deprecatedLabel: HtmlStyle;
                  readonly deprecatedListPage: HtmlStyle;
                  readonly deprecationBlock: HtmlStyle;
                  readonly deprecationComment: HtmlStyle;
                  readonly descriptionFromTypeLabel: HtmlStyle;
                  readonly detail: HtmlStyle;
                  readonly details: HtmlStyle;
                  readonly detailsList: HtmlStyle;
                  readonly detailsTable: HtmlStyle;
                  readonly docFilePage: HtmlStyle;
                  readonly elementName: HtmlStyle;
                  readonly evenRowColor: HtmlStyle;
                  readonly exceptions: HtmlStyle;
                  readonly extendsImplements: HtmlStyle;
                  readonly externalLink: HtmlStyle;
                  readonly externalSpecsPage: HtmlStyle;
                  readonly fieldDetails: HtmlStyle;
                  readonly fieldSummary: HtmlStyle;
                  readonly flexBox: HtmlStyle;
                  readonly flexContent: HtmlStyle;
                  readonly flexHeader: HtmlStyle;
                  readonly fourColumnSummary: HtmlStyle;
                  readonly header: HtmlStyle;
                  readonly helpFootnote: HtmlStyle;
                  readonly helpNote: HtmlStyle;
                  readonly helpPage: HtmlStyle;
                  readonly helpSection: HtmlStyle;
                  readonly helpSectionList: HtmlStyle;
                  readonly helpSubTOC: HtmlStyle;
                  readonly helpTOC: HtmlStyle;
                  readonly hierarchy: HtmlStyle;
                  readonly highlighted: HtmlStyle;
                  readonly horizontal: HtmlStyle;
                  readonly implementationLabel: HtmlStyle;
                  readonly index: HtmlStyle;
                  readonly indexPage: HtmlStyle;
                  readonly indexRedirectPage: HtmlStyle;
                  readonly inheritance: HtmlStyle;
                  readonly inheritedList: HtmlStyle;
                  readonly invalidTag: HtmlStyle;
                  readonly italic: HtmlStyle;
                  readonly legalCopy: HtmlStyle;
                  readonly memberDetails: HtmlStyle;
                  readonly memberList: HtmlStyle;
                  readonly memberNameLink: HtmlStyle;
                  readonly memberSignature: HtmlStyle;
                  readonly memberSummary: HtmlStyle;
                  readonly methodDetails: HtmlStyle;
                  readonly methodSummary: HtmlStyle;
                  readonly modifiers: HtmlStyle;
                  readonly moduleDeclarationPage: HtmlStyle;
                  readonly moduleDescription: HtmlStyle;
                  readonly moduleIndexPage: HtmlStyle;
                  readonly moduleLabelInPackage: HtmlStyle;
                  readonly moduleLabelInType: HtmlStyle;
                  readonly moduleSignature: HtmlStyle;
                  readonly modulesSummary: HtmlStyle;
                  readonly nameValue: HtmlStyle;
                  readonly navBarCell1Rev: HtmlStyle;
                  readonly navBarToggleIcon: HtmlStyle;
                  readonly navList: HtmlStyle;
                  readonly navListSearch: HtmlStyle;
                  readonly nestedClassSummary: HtmlStyle;
                  readonly newApiListPage: HtmlStyle;
                  readonly notes: HtmlStyle;
                  readonly oddRowColor: HtmlStyle;
                  readonly packageDeclarationPage: HtmlStyle;
                  readonly packageDescription: HtmlStyle;
                  readonly packageHierarchyLabel: HtmlStyle;
                  readonly packageIndexPage: HtmlStyle;
                  readonly packageLabelInType: HtmlStyle;
                  readonly packageSignature: HtmlStyle;
                  readonly packageTreePage: HtmlStyle;
                  readonly packageUsePage: HtmlStyle;
                  readonly packageUses: HtmlStyle;
                  readonly packages: HtmlStyle;
                  readonly packagesSummary: HtmlStyle;
                  readonly pageSearchDetails: HtmlStyle;
                  readonly pageSearchInfo: HtmlStyle;
                  readonly parameters: HtmlStyle;
                  readonly permits: HtmlStyle;
                  readonly permitsNote: HtmlStyle;
                  readonly previewBlock: HtmlStyle;
                  readonly previewComment: HtmlStyle;
                  readonly previewFeatureList: HtmlStyle;
                  readonly previewLabel: HtmlStyle;
                  readonly previewListPage: HtmlStyle;
                  readonly propertyDetails: HtmlStyle;
                  readonly propertySummary: HtmlStyle;
                  readonly refList: HtmlStyle;
                  readonly returnType: HtmlStyle;
                  readonly searchPage: HtmlStyle;
                  readonly searchTagLink: HtmlStyle;
                  readonly searchTagResult: HtmlStyle;
                  readonly serializedClassDetails: HtmlStyle;
                  readonly serializedFormPage: HtmlStyle;
                  readonly serializedPackageContainer: HtmlStyle;
                  readonly servicesSummary: HtmlStyle;
                  readonly skipNav: HtmlStyle;
                  readonly snippet: HtmlStyle;
                  readonly snippetContainer: HtmlStyle;
                  readonly snippetCopy: HtmlStyle;
                  readonly sourceContainer: HtmlStyle;
                  readonly sourceLineNo: HtmlStyle;
                  readonly sourcePage: HtmlStyle;
                  readonly subNav: HtmlStyle;
                  readonly subNavList: HtmlStyle;
                  readonly subNavListSmall: HtmlStyle;
                  readonly subTitle: HtmlStyle;
                  readonly summary: HtmlStyle;
                  readonly summaryList: HtmlStyle;
                  readonly summaryTable: HtmlStyle;
                  readonly systemPropertiesPage: HtmlStyle;
                  readonly tableHeader: HtmlStyle;
                  readonly tableTab: HtmlStyle;
                  readonly tableTabs: HtmlStyle;
                  readonly tagList: HtmlStyle;
                  readonly tagListLong: HtmlStyle;
                  readonly threeColumnReleaseSummary: HtmlStyle;
                  readonly threeColumnSummary: HtmlStyle;
                  readonly title: HtmlStyle;
                  readonly topNav: HtmlStyle;
                  readonly treePage: HtmlStyle;
                  readonly twoColumnSummary: HtmlStyle;
                  readonly typeNameLabel: HtmlStyle;
                  readonly typeNameLink: HtmlStyle;
                  readonly typeParameters: HtmlStyle;
                  readonly typeParametersLong: HtmlStyle;
                  readonly typeSignature: HtmlStyle;
                  readonly verticalSeparator: HtmlStyle;
                }
                let HtmlStyle: _HtmlStyle$$static;
                interface _HtmlStyle {
                  cssName(): string;
                  _cssName: string;
                }
                interface HtmlStyle extends CombineTypes<[_HtmlStyle]> {}
                interface _HtmlTree$$static extends ClassLike {
                  A(ref: string, body: doclets.toolkit.Content): HtmlTree;
                  A(ref: java.net.URI, body: doclets.toolkit.Content): HtmlTree;
                  CAPTION(body: doclets.toolkit.Content): HtmlTree;
                  CODE(body: doclets.toolkit.Content): HtmlTree;
                  DD(body: doclets.toolkit.Content): HtmlTree;
                  DETAILS(): HtmlTree;
                  DETAILS(style: HtmlStyle): HtmlTree;
                  DIV(style: HtmlStyle): HtmlTree;
                  DIV(style: HtmlStyle, body: doclets.toolkit.Content): HtmlTree;
                  DIV(body: doclets.toolkit.Content): HtmlTree;
                  DL(style: HtmlStyle): HtmlTree;
                  DL(style: HtmlStyle, body: doclets.toolkit.Content): HtmlTree;
                  DT(body: doclets.toolkit.Content): HtmlTree;
                  FOOTER(): HtmlTree;
                  HEADER(): HtmlTree;
                  HEADING(headingTag: TagName, body: doclets.toolkit.Content): HtmlTree;
                  HEADING(headingTag: TagName, style: HtmlStyle, body: doclets.toolkit.Content): HtmlTree;
                  HEADING_TITLE(headingTag: TagName, style: HtmlStyle, body: doclets.toolkit.Content): HtmlTree;
                  HEADING_TITLE(headingTag: TagName, body: doclets.toolkit.Content): HtmlTree;
                  HTML(lang: string, head: doclets.toolkit.Content, body: doclets.toolkit.Content): HtmlTree;
                  INPUT(type: string, id: HtmlId): HtmlTree;
                  LABEL(forLabel: string, body: doclets.toolkit.Content): HtmlTree;
                  LI(body: doclets.toolkit.Content): HtmlTree;
                  LI(style: HtmlStyle, body: doclets.toolkit.Content): HtmlTree;
                  LINK(rel: string, type: string, href: string, title: string): HtmlTree;
                  MAIN(): HtmlTree;
                  MAIN(body: doclets.toolkit.Content): HtmlTree;
                  META(httpEquiv: string, content: string, charset: string): HtmlTree;
                  META(name: string, content: string): HtmlTree;
                  NAV(): HtmlTree;
                  NOSCRIPT(body: doclets.toolkit.Content): HtmlTree;
                  P(body: doclets.toolkit.Content): HtmlTree;
                  P(style: HtmlStyle, body: doclets.toolkit.Content): HtmlTree;
                  PRE(body: doclets.toolkit.Content): HtmlTree;
                  SCRIPT(src: string): HtmlTree;
                  SECTION(style: HtmlStyle): HtmlTree;
                  SECTION(style: HtmlStyle, body: doclets.toolkit.Content): HtmlTree;
                  SMALL(body: doclets.toolkit.Content): HtmlTree;
                  SPAN(body: doclets.toolkit.Content): HtmlTree;
                  SPAN(styleClass: HtmlStyle): HtmlTree;
                  SPAN(styleClass: HtmlStyle, body: doclets.toolkit.Content): HtmlTree;
                  SPAN(id: HtmlId, style: HtmlStyle, body: doclets.toolkit.Content): HtmlTree;
                  SPAN_ID(id: HtmlId, body: doclets.toolkit.Content): HtmlTree;
                  SUMMARY(body: doclets.toolkit.Content): HtmlTree;
                  SUP(body: doclets.toolkit.Content): HtmlTree;
                  TD(style: HtmlStyle, body: doclets.toolkit.Content): HtmlTree;
                  TH(style: HtmlStyle, scope: string, body: doclets.toolkit.Content): HtmlTree;
                  TH(scope: string, body: doclets.toolkit.Content): HtmlTree;
                  TITLE(body: string): HtmlTree;
                  UL(style: HtmlStyle): HtmlTree;
                  UL(style: HtmlStyle, first: doclets.toolkit.Content, more: doclets.toolkit.Content[]): HtmlTree;
                  UL(style: HtmlStyle, first: doclets.toolkit.Content, ...more: doclets.toolkit.Content[]): HtmlTree;
                  UL<T>(style: HtmlStyle, items: java.util.Collection<T>, mapper: java.util.function.Function<T,doclets.toolkit.Content>): HtmlTree;
                  _bitSet(s: string): java.util.BitSet;
                  _bitSet(from: char, to: char): java.util.BitSet;
                  _bitSet(sets: java.util.BitSet[]): java.util.BitSet;
                  _bitSet(...sets: java.util.BitSet[]): java.util.BitSet;
                  _checkHeading(headingTag: TagName): TagName;
                  encodeURL(url: string): string;
                  _stripHtml(body: doclets.toolkit.Content): string;
                  readonly MAIN_CHARS: java.util.BitSet;
                  readonly QUERY_FRAGMENT_CHARS: java.util.BitSet;
                  new(tagName: TagName): HtmlTree;
                }
                let HtmlTree: _HtmlTree$$static;
                interface _HtmlTree {
                  add(content: doclets.toolkit.Content): HtmlTree;
                  add(stringContent: HtmlTree$charSequence): HtmlTree;
                  add(list: java.util.List<doclets.toolkit.Content>): HtmlTree;
                  add(a0: HtmlTree$charSequence): doclets.toolkit.Content;
                  add(a0: doclets.toolkit.Content): doclets.toolkit.Content;
                  addAll<T>(items: java.util.Collection<T>, mapper: java.util.function.Function<T,doclets.toolkit.Content>): HtmlTree;
                  addAll(a0: java.util.Collection, a1: java.util.function.Function): doclets.toolkit.Content;
                  addStyle(style: HtmlStyle): HtmlTree;
                  addStyle(style: string): HtmlTree;
                  addUnchecked(content: doclets.toolkit.Content): HtmlTree;
                  charCount(): int;
                  hasAttr(attrName: HtmlAttr): boolean;
                  hasAttrs(): boolean;
                  hasContent(): boolean;
                  isDiscardable(): boolean;
                  isEmpty(): boolean;
                  isInline(): boolean;
                  isVoid(): boolean;
                  put(attrName: HtmlAttr, attrValue: string): HtmlTree;
                  setId(id: HtmlId): HtmlTree;
                  setRole(role: HtmlAttr$Role): HtmlTree;
                  setStyle(style: HtmlStyle): HtmlTree;
                  setTitle(body: doclets.toolkit.Content): HtmlTree;
                  write(out: java.io.Writer, newline: string, atNewline: boolean): boolean;
                  _attrs: java.util.Map<HtmlAttr,string>;
                  _content: java.util.List<doclets.toolkit.Content>;
                  readonly tagName: TagName;
                }
                interface HtmlTree extends CombineTypes<[_HtmlTree, jdk.javadoc.internal.doclets.toolkit.Content]> {}
                interface _Links$$static extends ClassLike {
                  new(file: doclets.toolkit.util.DocPath): Links;
                }
                let Links: _Links$$static;
                interface _Links {
                  createExternalLink(link: doclets.toolkit.util.DocLink, label: doclets.toolkit.Content): doclets.toolkit.Content;
                  createLink(id: HtmlId, label: doclets.toolkit.Content): doclets.toolkit.Content;
                  createLink(id: HtmlId, label: doclets.toolkit.Content, link: boolean): doclets.toolkit.Content;
                  createLink(id: HtmlId, label: doclets.toolkit.Content, title: string): doclets.toolkit.Content;
                  createLink(path: doclets.toolkit.util.DocPath, label: string): doclets.toolkit.Content;
                  createLink(path: doclets.toolkit.util.DocPath, label: doclets.toolkit.Content): doclets.toolkit.Content;
                  createLink(path: doclets.toolkit.util.DocPath, label: doclets.toolkit.Content, style: HtmlStyle, title: string): doclets.toolkit.Content;
                  createLink(path: doclets.toolkit.util.DocPath, label: doclets.toolkit.Content, title: string): doclets.toolkit.Content;
                  createLink(link: doclets.toolkit.util.DocLink, label: doclets.toolkit.Content): doclets.toolkit.Content;
                  createLink(link: doclets.toolkit.util.DocLink, label: doclets.toolkit.Content, title: string): doclets.toolkit.Content;
                  createLink(link: doclets.toolkit.util.DocLink, label: doclets.toolkit.Content, style: HtmlStyle, title: string): doclets.toolkit.Content;
                  createLink(link: doclets.toolkit.util.DocLink, label: doclets.toolkit.Content, style: HtmlStyle, title: string, isExternal: boolean): doclets.toolkit.Content;
                  _file: doclets.toolkit.util.DocPath;
                }
                interface Links extends CombineTypes<[_Links, java.lang.Object]> {}
                interface _RawHtml$$static extends ClassLike {
                  cdata(body: string): RawHtml;
                  _charCount(htmlText: RawHtml$charSequence): int;
                  comment(body: string): RawHtml;
                  endElement(name: RawHtml$charSequence): RawHtml;
                  of(rawHtml: RawHtml$charSequence): RawHtml;
                  _section(prefix: string, body: string, suffix: string): RawHtml;
                  startElement(name: RawHtml$charSequence, attrs: doclets.toolkit.Content, selfClosing: boolean): RawHtml;
                }
                let RawHtml: _RawHtml$$static;
                interface _RawHtml {
                  isEmpty(): boolean;
                  toString(): string;
                  write(out: java.io.Writer, newline: string, atNewline: boolean): boolean;
                  _rawHtmlContent: string;
                }
                interface RawHtml extends CombineTypes<[_RawHtml, jdk.javadoc.internal.doclets.toolkit.Content]> {}
                interface _RawHtml$State$$static extends ClassLike {
                  valueOf(name: string): RawHtml$State;
                  values(): RawHtml$State[];
                  readonly ENTITY: RawHtml$State;
                  readonly STRING: RawHtml$State;
                  readonly TAG: RawHtml$State;
                  readonly TEXT: RawHtml$State;
                }
                let RawHtml$State: _RawHtml$State$$static;
                interface _RawHtml$State {
                }
                interface RawHtml$State extends CombineTypes<[_RawHtml$State]> {}
                interface _Script$$static extends ClassLike {
                  stringLiteral(s: Script$charSequence): string;
                  stringLiteral(s: Script$charSequence, quoteChar: char): string;
                  new(): Script;
                  new(code: string): Script;
                }
                let Script: _Script$$static;
                interface _Script {
                  append(code: Script$charSequence): Script;
                  appendStringLiteral(text: Script$charSequence): Script;
                  appendStringLiteral(text: Script$charSequence, quoteChar: char): Script;
                  asContent(): doclets.toolkit.Content;
                  _sb: markup$stringBuilder;
                }
                interface Script extends CombineTypes<[_Script, java.lang.Object]> {}
                interface _Script$ScriptContent$$static extends ClassLike {
                  _new(sb: Script$ScriptContent$stringBuilder): Script$ScriptContent;
                }
                let Script$ScriptContent: _Script$ScriptContent$$static;
                interface _Script$ScriptContent {
                  add(code: Script$ScriptContent$charSequence): Script$ScriptContent;
                  add(a0: Script$ScriptContent$charSequence): doclets.toolkit.Content;
                  isEmpty(): boolean;
                  write(writer: java.io.Writer, newline: string, atNewline: boolean): boolean;
                  _sb: markup$stringBuilder;
                }
                interface Script$ScriptContent extends CombineTypes<[_Script$ScriptContent, jdk.javadoc.internal.doclets.toolkit.Content]> {}
                interface _TagName$$static extends ClassLike {
                  valueOf(name: string): TagName;
                  values(): TagName[];
                  readonly A: TagName;
                  readonly BLOCKQUOTE: TagName;
                  readonly BODY: TagName;
                  readonly BR: TagName;
                  readonly BUTTON: TagName;
                  readonly CAPTION: TagName;
                  readonly CODE: TagName;
                  readonly DD: TagName;
                  readonly DETAILS: TagName;
                  readonly DIV: TagName;
                  readonly DL: TagName;
                  readonly DT: TagName;
                  readonly EM: TagName;
                  readonly FOOTER: TagName;
                  readonly FORM: TagName;
                  readonly H1: TagName;
                  readonly H2: TagName;
                  readonly H3: TagName;
                  readonly H4: TagName;
                  readonly H5: TagName;
                  readonly H6: TagName;
                  readonly HEAD: TagName;
                  readonly HEADER: TagName;
                  readonly HR: TagName;
                  readonly HTML: TagName;
                  readonly I: TagName;
                  readonly IMG: TagName;
                  readonly INPUT: TagName;
                  readonly LABEL: TagName;
                  readonly LI: TagName;
                  readonly LINK: TagName;
                  readonly LISTING: TagName;
                  readonly MAIN: TagName;
                  readonly MENU: TagName;
                  readonly META: TagName;
                  readonly NAV: TagName;
                  readonly NOSCRIPT: TagName;
                  readonly OL: TagName;
                  readonly P: TagName;
                  readonly PRE: TagName;
                  readonly SCRIPT: TagName;
                  readonly SECTION: TagName;
                  readonly SMALL: TagName;
                  readonly SPAN: TagName;
                  readonly STRONG: TagName;
                  readonly SUB: TagName;
                  readonly SUMMARY: TagName;
                  readonly SUP: TagName;
                  readonly TABLE: TagName;
                  readonly TBODY: TagName;
                  readonly TD: TagName;
                  readonly TH: TagName;
                  readonly THEAD: TagName;
                  readonly TITLE: TagName;
                  readonly TR: TagName;
                  readonly UL: TagName;
                  readonly WBR: TagName;
                }
                let TagName: _TagName$$static;
                interface _TagName {
                  toString(): string;
                  readonly value: string;
                }
                interface TagName extends CombineTypes<[_TagName]> {}
                interface _Text$$static extends ClassLike {
                  _charCount(cs: Text$charSequence): int;
                  _checkNewlines(cs: Text$charSequence): boolean;
                  normalizeNewlines(text: Text$charSequence): Text$charSequence;
                  of(content: Text$charSequence): Text;
                  readonly EMPTY: Text;
                  readonly NL: string;
                }
                let Text: _Text$$static;
                interface _Text {
                  charCount(): int;
                  isEmpty(): boolean;
                  toString(): string;
                  write(out: java.io.Writer, newline: string, atNewline: boolean): boolean;
                  _string: string;
                }
                interface Text extends CombineTypes<[_Text, jdk.javadoc.internal.doclets.toolkit.Content]> {}
                interface _TextBuilder$$static extends ClassLike {
                  new(): TextBuilder;
                  new(initialContent: TextBuilder$charSequence): TextBuilder;
                }
                let TextBuilder: _TextBuilder$$static;
                interface _TextBuilder {
                  add(strContent: TextBuilder$charSequence): TextBuilder;
                  add(a0: TextBuilder$charSequence): doclets.toolkit.Content;
                  charCount(): int;
                  isEmpty(): boolean;
                  toString(): string;
                  write(out: java.io.Writer, newline: string, atNewline: boolean): boolean;
                  _stringBuilder: markup$stringBuilder;
                }
                interface TextBuilder extends CombineTypes<[_TextBuilder, jdk.javadoc.internal.doclets.toolkit.Content]> {}
              }
              module resources {
                interface _standard$$static extends ClassLike {
                  new(): standard;
                }
                let standard: _standard$$static;
                interface _standard {
                  _getContents(): any[][];
                }
                interface standard extends CombineTypes<[_standard, java.util.ListResourceBundle]> {}
                interface _standard_de$$static extends ClassLike {
                  new(): standard_de;
                }
                let standard_de: _standard_de$$static;
                interface _standard_de {
                  _getContents(): any[][];
                }
                interface standard_de extends CombineTypes<[_standard_de, java.util.ListResourceBundle]> {}
                interface _standard_ja$$static extends ClassLike {
                  new(): standard_ja;
                }
                let standard_ja: _standard_ja$$static;
                interface _standard_ja {
                  _getContents(): any[][];
                }
                interface standard_ja extends CombineTypes<[_standard_ja, java.util.ListResourceBundle]> {}
                interface _standard_zh_CN$$static extends ClassLike {
                  new(): standard_zh_CN;
                }
                let standard_zh_CN: _standard_zh_CN$$static;
                interface _standard_zh_CN {
                  _getContents(): any[][];
                }
                interface standard_zh_CN extends CombineTypes<[_standard_zh_CN, java.util.ListResourceBundle]> {}
              }
              interface _AbstractExecutableMemberWriter$$static extends ClassLike {
                new(writer: SubWriterHolderWriter, typeElement: javax.lang.model.element.TypeElement): AbstractExecutableMemberWriter;
                new(writer: SubWriterHolderWriter): AbstractExecutableMemberWriter;
              }
              let AbstractExecutableMemberWriter: _AbstractExecutableMemberWriter$$static;
              interface _AbstractExecutableMemberWriter {
                _addInheritedSummaryLink(te: javax.lang.model.element.TypeElement, member: javax.lang.model.element.Element, target: doclets.toolkit.Content): void;
                _addParam(param: javax.lang.model.element.VariableElement, paramType: javax.lang.model.type.TypeMirror, isVarArg: boolean, target: doclets.toolkit.Content): void;
                _addParameters(member: javax.lang.model.element.ExecutableElement, target: doclets.toolkit.Content): void;
                _addReceiver(member: javax.lang.model.element.ExecutableElement, rcvrType: javax.lang.model.type.TypeMirror, target: doclets.toolkit.Content): void;
                _addSummaryLink(context: HtmlLinkInfo$Kind, te: javax.lang.model.element.TypeElement, member: javax.lang.model.element.Element, target: doclets.toolkit.Content): void;
                _getExceptions(member: javax.lang.model.element.ExecutableElement): doclets.toolkit.Content;
                _getParameters(member: javax.lang.model.element.ExecutableElement, includeAnnotations: boolean): doclets.toolkit.Content;
                _getSummaryLink(member: javax.lang.model.element.Element): doclets.toolkit.Content;
                _getTypeParameters(member: javax.lang.model.element.ExecutableElement): doclets.toolkit.Content;
                _implementsMethodInIntfac(method: javax.lang.model.element.ExecutableElement, intfacs: java.util.List<javax.lang.model.element.TypeElement>): javax.lang.model.element.TypeElement;
                _isAnnotatedReceiver(receiverType: javax.lang.model.type.TypeMirror): boolean;
              }
              interface AbstractExecutableMemberWriter extends CombineTypes<[_AbstractExecutableMemberWriter, jdk.javadoc.internal.doclets.formats.html.AbstractMemberWriter]> {}
              interface _AbstractMemberWriter$$static extends ClassLike {
                new(writer: SubWriterHolderWriter, typeElement: javax.lang.model.element.TypeElement): AbstractMemberWriter;
                new(writer: SubWriterHolderWriter): AbstractMemberWriter;
              }
              let AbstractMemberWriter: _AbstractMemberWriter$$static;
              interface _AbstractMemberWriter {
                _addComment(member: javax.lang.model.element.Element, content: doclets.toolkit.Content): void;
                _addDeprecatedInfo(member: javax.lang.model.element.Element, target: doclets.toolkit.Content): void;
                addInheritedMemberSummary(tElement: javax.lang.model.element.TypeElement, nestedClass: javax.lang.model.element.Element, isFirst: boolean, isLast: boolean, content: doclets.toolkit.Content): void;
                addInheritedSummaryLabel(a0: javax.lang.model.element.TypeElement, a1: doclets.toolkit.Content): void;
                _addInheritedSummaryLink(a0: javax.lang.model.element.TypeElement, a1: javax.lang.model.element.Element, a2: doclets.toolkit.Content): void;
                addMemberSummary(tElement: javax.lang.model.element.TypeElement, member: javax.lang.model.element.Element, firstSentenceTrees: java.util.List<com.sun.source.doctree.DocTree>): void;
                _addModifiers(member: javax.lang.model.element.Element, target: doclets.toolkit.Content): void;
                _addModifiersAndType(member: javax.lang.model.element.Element, type: javax.lang.model.type.TypeMirror, target: doclets.toolkit.Content): void;
                _addPreviewInfo(member: javax.lang.model.element.Element, content: doclets.toolkit.Content): void;
                addSummaryLabel(a0: doclets.toolkit.Content): void;
                _addSummaryLink(typeElement: javax.lang.model.element.TypeElement, member: javax.lang.model.element.Element, content: doclets.toolkit.Content): void;
                _addSummaryLink(a0: HtmlLinkInfo$Kind, a1: javax.lang.model.element.TypeElement, a2: javax.lang.model.element.Element, a3: doclets.toolkit.Content): void;
                _addSummaryType(a0: javax.lang.model.element.Element, a1: doclets.toolkit.Content): void;
                _addUseInfo(members: java.util.List<javax.lang.model.element.Element>, heading: doclets.toolkit.Content, content: doclets.toolkit.Content): void;
                _createSummaryTable(): Table<javax.lang.model.element.Element>;
                getInheritedSummaryHeader(tElement: javax.lang.model.element.TypeElement): doclets.toolkit.Content;
                getInheritedSummaryLinks(): doclets.toolkit.Content;
                getMember(memberContent: doclets.toolkit.Content): doclets.toolkit.Content;
                getMemberList(): doclets.toolkit.Content;
                getMemberListItem(memberContent: doclets.toolkit.Content): doclets.toolkit.Content;
                _getSummaryLink(a0: javax.lang.model.element.Element): doclets.toolkit.Content;
                _getSummaryTable(): Table<javax.lang.model.element.Element>;
                getSummaryTable(tElement: javax.lang.model.element.TypeElement): doclets.toolkit.Content;
                getSummaryTableHeader(a0: javax.lang.model.element.Element): TableHeader;
                _name(member: javax.lang.model.element.Element): string;
                _serialWarning(e: javax.lang.model.element.Element, key: string, a1: string, a2: string): void;
                _configuration: HtmlConfiguration;
                _contents: Contents;
                _htmlIds: HtmlIds;
                _links: markup.Links;
                _options: HtmlOptions;
                _resources: doclets.toolkit.Resources;
                _summaryTable: Table<javax.lang.model.element.Element>;
                _typeElement: javax.lang.model.element.TypeElement;
                _utils: doclets.toolkit.util.Utils;
                _writer: SubWriterHolderWriter;
              }
              interface AbstractMemberWriter extends CombineTypes<[_AbstractMemberWriter, jdk.javadoc.internal.doclets.toolkit.MemberSummaryWriter, jdk.javadoc.internal.doclets.toolkit.MemberWriter, java.lang.Object]> {}
              interface _AbstractOverviewIndexWriter$$static extends ClassLike {
                new(configuration: HtmlConfiguration, filename: doclets.toolkit.util.DocPath): AbstractOverviewIndexWriter;
              }
              let AbstractOverviewIndexWriter: _AbstractOverviewIndexWriter$$static;
              interface _AbstractOverviewIndexWriter {
                _addConfigurationTitle(target: doclets.toolkit.Content): void;
                _addIndex(a0: doclets.toolkit.Content): void;
(a0: doclets.toolkit.Content): void;
                _addOverviewComment(content: doclets.toolkit.Content): void;
                _addOverviewHeader(target: doclets.toolkit.Content): void;
                _addOverviewTags(content: doclets.toolkit.Content): void;
                _buildOverviewIndexFile(title: string, description: string): void;
                isIndexable(): boolean;
              }
              interface AbstractOverviewIndexWriter extends CombineTypes<[_AbstractOverviewIndexWriter, jdk.javadoc.internal.doclets.formats.html.HtmlDocletWriter]> {}
              interface _AbstractTreeWriter$$static extends ClassLike {
                _new(configuration: HtmlConfiguration, filename: doclets.toolkit.util.DocPath, classTree: doclets.toolkit.util.ClassTree): AbstractTreeWriter;
              }
              let AbstractTreeWriter: _AbstractTreeWriter$$static;
              interface _AbstractTreeWriter {
                _addExtendsImplements(parent: javax.lang.model.element.TypeElement, typeElement: javax.lang.model.element.TypeElement, content: doclets.toolkit.Content): void;
                _addLevelInfo(parent: javax.lang.model.element.TypeElement, collection: java.util.Collection<javax.lang.model.element.TypeElement>, hierarchy: doclets.toolkit.util.ClassTree$Hierarchy, content: doclets.toolkit.Content): void;
                _addPartialInfo(typeElement: javax.lang.model.element.TypeElement, content: doclets.toolkit.Content): void;
                _addTree(hierarchy: doclets.toolkit.util.ClassTree$Hierarchy, heading: string, content: doclets.toolkit.Content): void;
                _classTree: doclets.toolkit.util.ClassTree;
              }
              interface AbstractTreeWriter extends CombineTypes<[_AbstractTreeWriter, jdk.javadoc.internal.doclets.formats.html.HtmlDocletWriter]> {}
              interface _AllClassesIndexWriter$$static extends ClassLike {
                generate(configuration: HtmlConfiguration, indexBuilder: doclets.toolkit.util.IndexBuilder): void;
                _generate(configuration: HtmlConfiguration, indexBuilder: doclets.toolkit.util.IndexBuilder, fileName: doclets.toolkit.util.DocPath): void;
                new(configuration: HtmlConfiguration, filename: doclets.toolkit.util.DocPath, indexBuilder: doclets.toolkit.util.IndexBuilder): AllClassesIndexWriter;
              }
              let AllClassesIndexWriter: _AllClassesIndexWriter$$static;
              interface _AllClassesIndexWriter {
                _addContents(target: doclets.toolkit.Content): void;
                _addTableRow(table: Table<javax.lang.model.element.TypeElement>, klass: javax.lang.model.element.TypeElement): void;
                _buildAllClassesFile(): void;
                _indexBuilder: doclets.toolkit.util.IndexBuilder;
              }
              interface AllClassesIndexWriter extends CombineTypes<[_AllClassesIndexWriter, jdk.javadoc.internal.doclets.formats.html.HtmlDocletWriter]> {}
              interface _AllPackagesIndexWriter$$static extends ClassLike {
                generate(configuration: HtmlConfiguration): void;
                _generate(configuration: HtmlConfiguration, fileName: doclets.toolkit.util.DocPath): void;
                new(configuration: HtmlConfiguration, filename: doclets.toolkit.util.DocPath): AllPackagesIndexWriter;
              }
              let AllPackagesIndexWriter: _AllPackagesIndexWriter$$static;
              interface _AllPackagesIndexWriter {
                _addPackages(target: doclets.toolkit.Content): void;
                _buildAllPackagesFile(): void;
              }
              interface AllPackagesIndexWriter extends CombineTypes<[_AllPackagesIndexWriter, jdk.javadoc.internal.doclets.formats.html.HtmlDocletWriter]> {}
              interface _AnnotationTypeMemberWriterImpl$$static extends ClassLike {
                new(writer: SubWriterHolderWriter): AnnotationTypeMemberWriterImpl;
                new(writer: SubWriterHolderWriter, annotationType: javax.lang.model.element.TypeElement, kind: AnnotationTypeMemberWriterImpl$Kind): AnnotationTypeMemberWriterImpl;
              }
              let AnnotationTypeMemberWriterImpl: _AnnotationTypeMemberWriterImpl$$static;
              interface _AnnotationTypeMemberWriterImpl {
                addAnnotationDetailsMarker(memberDetails: doclets.toolkit.Content): void;
                addComments(member: javax.lang.model.element.Element, annotationContent: doclets.toolkit.Content): void;
                addDefaultValueInfo(member: javax.lang.model.element.Element, annotationContent: doclets.toolkit.Content): void;
                addDeprecated(member: javax.lang.model.element.Element, target: doclets.toolkit.Content): void;
                addInheritedSummaryLabel(typeElement: javax.lang.model.element.TypeElement, content: doclets.toolkit.Content): void;
                _addInheritedSummaryLink(typeElement: javax.lang.model.element.TypeElement, member: javax.lang.model.element.Element, target: doclets.toolkit.Content): void;
                addPreview(member: javax.lang.model.element.Element, content: doclets.toolkit.Content): void;
                addSummary(summariesList: doclets.toolkit.Content, content: doclets.toolkit.Content): void;
                addSummaryLabel(content: doclets.toolkit.Content): void;
                _addSummaryLink(context: HtmlLinkInfo$Kind, typeElement: javax.lang.model.element.TypeElement, member: javax.lang.model.element.Element, content: doclets.toolkit.Content): void;
                _addSummaryType(member: javax.lang.model.element.Element, content: doclets.toolkit.Content): void;
                addTags(member: javax.lang.model.element.Element, annotationContent: doclets.toolkit.Content): void;
                _createSummaryTable(): Table<javax.lang.model.element.Element>;
                getAnnotationDetails(annotationDetailsHeader: doclets.toolkit.Content, annotationDetails: doclets.toolkit.Content): doclets.toolkit.Content;
                getAnnotationDetailsHeader(): doclets.toolkit.Content;
                getAnnotationHeaderContent(member: javax.lang.model.element.Element): doclets.toolkit.Content;
                _getCaption(): doclets.toolkit.Content;
                getMemberHeader(): doclets.toolkit.Content;
                getMemberSummaryHeader(typeElement: javax.lang.model.element.TypeElement, content: doclets.toolkit.Content): doclets.toolkit.Content;
                getSignature(member: javax.lang.model.element.Element): doclets.toolkit.Content;
                _getSummaryLink(member: javax.lang.model.element.Element): doclets.toolkit.Content;
                getSummaryTableHeader(member: javax.lang.model.element.Element): TableHeader;
                _getType(member: javax.lang.model.element.Element): javax.lang.model.type.TypeMirror;
                _selectComment(c1: html.markup.Comment, c2: html.markup.Comment): html.markup.Comment;
                _kind: AnnotationTypeMemberWriterImpl$Kind;
              }
              interface AnnotationTypeMemberWriterImpl extends CombineTypes<[_AnnotationTypeMemberWriterImpl, jdk.javadoc.internal.doclets.toolkit.MemberSummaryWriter, jdk.javadoc.internal.doclets.formats.html.AbstractMemberWriter, jdk.javadoc.internal.doclets.toolkit.AnnotationTypeMemberWriter]> {}
              interface _AnnotationTypeMemberWriterImpl$Kind$$static extends ClassLike {
                valueOf(name: string): AnnotationTypeMemberWriterImpl$Kind;
                values(): AnnotationTypeMemberWriterImpl$Kind[];
                readonly ANY: AnnotationTypeMemberWriterImpl$Kind;
                readonly OPTIONAL: AnnotationTypeMemberWriterImpl$Kind;
                readonly REQUIRED: AnnotationTypeMemberWriterImpl$Kind;
              }
              let AnnotationTypeMemberWriterImpl$Kind: _AnnotationTypeMemberWriterImpl$Kind$$static;
              interface _AnnotationTypeMemberWriterImpl$Kind {
              }
              interface AnnotationTypeMemberWriterImpl$Kind extends CombineTypes<[_AnnotationTypeMemberWriterImpl$Kind]> {}
              interface _ClassUseWriter$$static extends ClassLike {
                generate(configuration: HtmlConfiguration, classTree: doclets.toolkit.util.ClassTree): void;
                generate(configuration: HtmlConfiguration, mapper: doclets.toolkit.util.ClassUseMapper, typeElement: javax.lang.model.element.TypeElement): void;
                new(configuration: HtmlConfiguration, mapper: doclets.toolkit.util.ClassUseMapper, filename: doclets.toolkit.util.DocPath, typeElement: javax.lang.model.element.TypeElement): ClassUseWriter;
              }
              let ClassUseWriter: _ClassUseWriter$$static;
              interface _ClassUseWriter {
                _addClassList(content: doclets.toolkit.Content): void;
                _addClassUse(content: doclets.toolkit.Content): void;
                _addClassUse(pkg: javax.lang.model.element.PackageElement, content: doclets.toolkit.Content): void;
                _addPackageAnnotationList(content: doclets.toolkit.Content): void;
                _addPackageList(content: doclets.toolkit.Content): void;
                _addPackageUse(pkg: javax.lang.model.element.PackageElement, table: Table<any>): void;
                _generateClassUseFile(): void;
                _getClassUseHeader(): html.markup.HtmlTree;
                _getNavBar(pageMode: Navigation$PageMode, element: javax.lang.model.element.Element): Navigation;
                _pkgDivide(classMap: java.util.Map<javax.lang.model.element.TypeElement,java.util.List<javax.lang.model.element.Element>>): java.util.Map<javax.lang.model.element.PackageElement,java.util.List<javax.lang.model.element.Element>>;
                _classSubWriter: NestedClassWriterImpl;
                _constrSubWriter: ConstructorWriterImpl;
                _fieldSubWriter: FieldWriterImpl;
                _methodSubWriter: MethodWriterImpl;
                _pkgSet: java.util.SortedSet<javax.lang.model.element.PackageElement>;
                _pkgToClassAnnotations: java.util.Map<javax.lang.model.element.PackageElement,java.util.List<javax.lang.model.element.Element>>;
                _pkgToClassTypeParameter: java.util.Map<javax.lang.model.element.PackageElement,java.util.List<javax.lang.model.element.Element>>;
                _pkgToConstructorAnnotations: java.util.Map<javax.lang.model.element.PackageElement,java.util.List<javax.lang.model.element.Element>>;
                _pkgToConstructorArgTypeParameter: java.util.Map<javax.lang.model.element.PackageElement,java.util.List<javax.lang.model.element.Element>>;
                _pkgToConstructorArgs: java.util.Map<javax.lang.model.element.PackageElement,java.util.List<javax.lang.model.element.Element>>;
                _pkgToConstructorParameterAnnotations: java.util.Map<javax.lang.model.element.PackageElement,java.util.List<javax.lang.model.element.Element>>;
                _pkgToConstructorThrows: java.util.Map<javax.lang.model.element.PackageElement,java.util.List<javax.lang.model.element.Element>>;
                _pkgToField: java.util.Map<javax.lang.model.element.PackageElement,java.util.List<javax.lang.model.element.Element>>;
                _pkgToFieldAnnotations: java.util.Map<javax.lang.model.element.PackageElement,java.util.List<javax.lang.model.element.Element>>;
                _pkgToFieldTypeParameter: java.util.Map<javax.lang.model.element.PackageElement,java.util.List<javax.lang.model.element.Element>>;
                _pkgToImplementingClass: java.util.Map<javax.lang.model.element.PackageElement,java.util.List<javax.lang.model.element.Element>>;
                _pkgToMethodAnnotations: java.util.Map<javax.lang.model.element.PackageElement,java.util.List<javax.lang.model.element.Element>>;
                _pkgToMethodArgTypeParameter: java.util.Map<javax.lang.model.element.PackageElement,java.util.List<javax.lang.model.element.Element>>;
                _pkgToMethodArgs: java.util.Map<javax.lang.model.element.PackageElement,java.util.List<javax.lang.model.element.Element>>;
                _pkgToMethodParameterAnnotations: java.util.Map<javax.lang.model.element.PackageElement,java.util.List<javax.lang.model.element.Element>>;
                _pkgToMethodReturn: java.util.Map<javax.lang.model.element.PackageElement,java.util.List<javax.lang.model.element.Element>>;
                _pkgToMethodReturnTypeParameter: java.util.Map<javax.lang.model.element.PackageElement,java.util.List<javax.lang.model.element.Element>>;
                _pkgToMethodThrows: java.util.Map<javax.lang.model.element.PackageElement,java.util.List<javax.lang.model.element.Element>>;
                _pkgToMethodTypeParameter: java.util.Map<javax.lang.model.element.PackageElement,java.util.List<javax.lang.model.element.Element>>;
                _pkgToPackageAnnotations: java.util.Set<javax.lang.model.element.PackageElement>;
                _pkgToSubclass: java.util.Map<javax.lang.model.element.PackageElement,java.util.List<javax.lang.model.element.Element>>;
                _pkgToSubinterface: java.util.Map<javax.lang.model.element.PackageElement,java.util.List<javax.lang.model.element.Element>>;
                _typeElement: javax.lang.model.element.TypeElement;
              }
              interface ClassUseWriter extends CombineTypes<[_ClassUseWriter, jdk.javadoc.internal.doclets.formats.html.SubWriterHolderWriter]> {}
              interface _ClassWriterImpl$$static extends ClassLike {
                _suppressImplementingSet: java.util.Set<string>;
                _suppressSubtypesSet: java.util.Set<string>;
                new(configuration: HtmlConfiguration, typeElement: javax.lang.model.element.TypeElement, classTree: doclets.toolkit.util.ClassTree): ClassWriterImpl;
              }
              let ClassWriterImpl: _ClassWriterImpl$$static;
              interface _ClassWriterImpl {
                addClassDeprecationInfo(classInfo: doclets.toolkit.Content): void;
                addClassDescription(classInfo: doclets.toolkit.Content): void;
                addClassSignature(classInfo: doclets.toolkit.Content): void;
                addClassTagInfo(classInfo: doclets.toolkit.Content): void;
                addClassTree(target: doclets.toolkit.Content): void;
                addFooter(): void;
                addFunctionalInterfaceInfo(target: doclets.toolkit.Content): void;
                addImplementedInterfacesInfo(target: doclets.toolkit.Content): void;
                addInterfaceUsageInfo(target: doclets.toolkit.Content): void;
                addNestedClassInfo(target: doclets.toolkit.Content): void;
                addParamInfo(target: doclets.toolkit.Content): void;
                _addPreviewInfo(content: doclets.toolkit.Content): void;
                addSubClassInfo(target: doclets.toolkit.Content): void;
                addSubInterfacesInfo(target: doclets.toolkit.Content): void;
                addSuperInterfacesInfo(target: doclets.toolkit.Content): void;
                getClassContentHeader(): doclets.toolkit.Content;
                _getClassHelperContent(type: javax.lang.model.type.TypeMirror): doclets.toolkit.Content;
                getClassInfo(classInfo: doclets.toolkit.Content): doclets.toolkit.Content;
                _getClassInheritanceTreeContent(type: javax.lang.model.type.TypeMirror): doclets.toolkit.Content;
                _getClassLinks(context: HtmlLinkInfo$Kind, list: java.util.Collection<any>): doclets.toolkit.Content;
                _getCurrentPageElement(): javax.lang.model.element.TypeElement;
                getHeader(header: string): doclets.toolkit.Content;
                getMemberDetails(content: doclets.toolkit.Content): doclets.toolkit.Content;
                _getNavBar(pageMode: Navigation$PageMode, element: javax.lang.model.element.Element): Navigation;
                getTypeElement(): javax.lang.model.element.TypeElement;
                isFunctionalInterface(): boolean;
                isIndexable(): boolean;
                printDocument(content: doclets.toolkit.Content): void;
                _classTree: doclets.toolkit.util.ClassTree;
                _typeElement: javax.lang.model.element.TypeElement;
              }
              interface ClassWriterImpl extends CombineTypes<[_ClassWriterImpl, jdk.javadoc.internal.doclets.toolkit.ClassWriter, jdk.javadoc.internal.doclets.formats.html.SubWriterHolderWriter]> {}
              interface _ConstantsSummaryWriterImpl$$static extends ClassLike {
                new(configuration: HtmlConfiguration): ConstantsSummaryWriterImpl;
              }
              let ConstantsSummaryWriterImpl: _ConstantsSummaryWriterImpl$$static;
              interface _ConstantsSummaryWriterImpl {
                addClassConstant(fromClassConstant: doclets.toolkit.Content): void;
                addConstantMembers(typeElement: javax.lang.model.element.TypeElement, fields: java.util.Collection<javax.lang.model.element.VariableElement>, target: doclets.toolkit.Content): void;
                addConstantSummaries(content: doclets.toolkit.Content): void;
                addContentsList(content: doclets.toolkit.Content): void;
                addFooter(): void;
                addLinkToPackageContent(abbrevPackageName: string, content: doclets.toolkit.Content): void;
                addPackageGroup(abbrevPackageName: string, toContent: doclets.toolkit.Content): void;
                getClassConstantHeader(): doclets.toolkit.Content;
                getConstantSummaries(): doclets.toolkit.Content;
                getContentsHeader(): doclets.toolkit.Content;
                getHeader(): doclets.toolkit.Content;
                _getNameColumn(member: javax.lang.model.element.VariableElement): doclets.toolkit.Content;
                _getTypeColumn(member: javax.lang.model.element.VariableElement): doclets.toolkit.Content;
                _getValue(member: javax.lang.model.element.VariableElement): doclets.toolkit.Content;
                printDocument(content: doclets.toolkit.Content): void;
                _bodyContents: markup.BodyContents;
                _constantsTableHeader: TableHeader;
                _currentTypeElement: javax.lang.model.element.TypeElement;
                _hasConstants: boolean;
                _summarySection: markup.HtmlTree;
              }
              interface ConstantsSummaryWriterImpl extends CombineTypes<[_ConstantsSummaryWriterImpl, jdk.javadoc.internal.doclets.formats.html.HtmlDocletWriter, jdk.javadoc.internal.doclets.toolkit.ConstantsSummaryWriter]> {}
              interface _ConstructorWriterImpl$$static extends ClassLike {
                new(writer: SubWriterHolderWriter, typeElement: javax.lang.model.element.TypeElement): ConstructorWriterImpl;
                new(writer: SubWriterHolderWriter): ConstructorWriterImpl;
              }
              let ConstructorWriterImpl: _ConstructorWriterImpl$$static;
              interface _ConstructorWriterImpl {
                addComments(constructor: javax.lang.model.element.ExecutableElement, constructorContent: doclets.toolkit.Content): void;
                addDeprecated(constructor: javax.lang.model.element.ExecutableElement, constructorContent: doclets.toolkit.Content): void;
                addInheritedSummaryLabel(typeElement: javax.lang.model.element.TypeElement, content: doclets.toolkit.Content): void;
                addPreview(constructor: javax.lang.model.element.ExecutableElement, content: doclets.toolkit.Content): void;
                addSummary(summariesList: doclets.toolkit.Content, content: doclets.toolkit.Content): void;
                addSummaryLabel(content: doclets.toolkit.Content): void;
                _addSummaryType(member: javax.lang.model.element.Element, content: doclets.toolkit.Content): void;
                addTags(constructor: javax.lang.model.element.ExecutableElement, constructorContent: doclets.toolkit.Content): void;
                _createSummaryTable(): Table<javax.lang.model.element.Element>;
                getConstructorDetails(memberDetailsHeader: doclets.toolkit.Content, memberDetails: doclets.toolkit.Content): doclets.toolkit.Content;
                getConstructorDetailsHeader(content: doclets.toolkit.Content): doclets.toolkit.Content;
                getConstructorHeaderContent(constructor: javax.lang.model.element.ExecutableElement): doclets.toolkit.Content;
                getMemberHeader(): doclets.toolkit.Content;
                getMemberSummaryHeader(typeElement: javax.lang.model.element.TypeElement, content: doclets.toolkit.Content): doclets.toolkit.Content;
                getSignature(constructor: javax.lang.model.element.ExecutableElement): doclets.toolkit.Content;
                getSummaryTableHeader(member: javax.lang.model.element.Element): TableHeader;
                setFoundNonPubConstructor(foundNonPubConstructor: boolean): void;
                _foundNonPubConstructor: boolean;
              }
              interface ConstructorWriterImpl extends CombineTypes<[_ConstructorWriterImpl, jdk.javadoc.internal.doclets.toolkit.MemberSummaryWriter, jdk.javadoc.internal.doclets.formats.html.AbstractExecutableMemberWriter, jdk.javadoc.internal.doclets.toolkit.ConstructorWriter]> {}
              interface _Contents$$static extends ClassLike {
                _new(configuration: HtmlConfiguration): Contents;
              }
              let Contents: _Contents$$static;
              interface _Contents {
                getContent(key: string): doclets.toolkit.Content;
                getContent(key: string, o0: any): doclets.toolkit.Content;
                getContent(key: string, o0: any, o1: any): doclets.toolkit.Content;
                getContent(key: string, o0: any, o1: any, o2: any): doclets.toolkit.Content;
                getNavLinkLabelContent(kind: doclets.toolkit.util.VisibleMemberTable$Kind): doclets.toolkit.Content;
                _getNonBreakResource(key: string): doclets.toolkit.Content;
                getNonBreakString(text: string): doclets.toolkit.Content;
                join(separator: doclets.toolkit.Content, items: java.util.Collection<doclets.toolkit.Content>): doclets.toolkit.Content;
                readonly allClassesAndInterfacesLabel: doclets.toolkit.Content;
                readonly allImplementedInterfacesLabel: doclets.toolkit.Content;
                readonly allModulesLabel: doclets.toolkit.Content;
                readonly allPackagesLabel: doclets.toolkit.Content;
                readonly allSuperinterfacesLabel: doclets.toolkit.Content;
                readonly also: doclets.toolkit.Content;
                readonly annotateTypeOptionalMemberSummaryLabel: doclets.toolkit.Content;
                readonly annotateTypeRequiredMemberSummaryLabel: doclets.toolkit.Content;
                readonly annotationType: doclets.toolkit.Content;
                readonly annotationTypeDetailsLabel: doclets.toolkit.Content;
                readonly annotationTypeMemberDetail: doclets.toolkit.Content;
                readonly annotationTypeOptionalMemberLabel: doclets.toolkit.Content;
                readonly annotationTypeRequiredMemberLabel: doclets.toolkit.Content;
                readonly annotationTypes: doclets.toolkit.Content;
                readonly annotationtypes: doclets.toolkit.Content;
                readonly classLabel: doclets.toolkit.Content;
                readonly classes: doclets.toolkit.Content;
                readonly constantFieldLabel: doclets.toolkit.Content;
                readonly constantsSummaryTitle: doclets.toolkit.Content;
                readonly constructorDetailsLabel: doclets.toolkit.Content;
                readonly constructorLabel: doclets.toolkit.Content;
                readonly constructorSummaryLabel: doclets.toolkit.Content;
                readonly constructors: doclets.toolkit.Content;
                readonly contentsHeading: doclets.toolkit.Content;
                readonly defaultPackageLabel: doclets.toolkit.Content;
                readonly default_: doclets.toolkit.Content;
                readonly deprecatedAPI: doclets.toolkit.Content;
                readonly deprecatedForRemovalPhrase: doclets.toolkit.Content;
                readonly deprecatedLabel: doclets.toolkit.Content;
                readonly deprecatedPhrase: doclets.toolkit.Content;
                readonly descriptionFromClassLabel: doclets.toolkit.Content;
                readonly descriptionFromInterfaceLabel: doclets.toolkit.Content;
                readonly descriptionLabel: doclets.toolkit.Content;
                readonly detailLabel: doclets.toolkit.Content;
                readonly enclosingClassLabel: doclets.toolkit.Content;
                readonly enclosingInterfaceLabel: doclets.toolkit.Content;
                readonly enumConstantDetailLabel: doclets.toolkit.Content;
                readonly enumConstantLabel: doclets.toolkit.Content;
                readonly enumConstantSummary: doclets.toolkit.Content;
                readonly enum_: doclets.toolkit.Content;
                readonly enums: doclets.toolkit.Content;
                readonly exceptionClass: doclets.toolkit.Content;
                readonly exceptionClasses: doclets.toolkit.Content;
                readonly exportedTo: doclets.toolkit.Content;
                readonly externalSpecifications: doclets.toolkit.Content;
                readonly fieldDetailsLabel: doclets.toolkit.Content;
                readonly fieldLabel: doclets.toolkit.Content;
                readonly fieldSummaryLabel: doclets.toolkit.Content;
                readonly fields: doclets.toolkit.Content;
                readonly fromLabel: doclets.toolkit.Content;
                readonly functionalInterface: doclets.toolkit.Content;
                readonly functionalInterfaceMessage: doclets.toolkit.Content;
                readonly helpLabel: doclets.toolkit.Content;
                readonly helpSubNavLabel: doclets.toolkit.Content;
                readonly hierarchyForAllPackages: doclets.toolkit.Content;
                readonly implementation: doclets.toolkit.Content;
                readonly implementingClassesLabel: doclets.toolkit.Content;
                readonly inClass: doclets.toolkit.Content;
                readonly inInterface: doclets.toolkit.Content;
                readonly indexLabel: doclets.toolkit.Content;
                readonly interfaceLabel: doclets.toolkit.Content;
                readonly interfaces: doclets.toolkit.Content;
                readonly methodDetailLabel: doclets.toolkit.Content;
                readonly methodLabel: doclets.toolkit.Content;
                readonly methodSummary: doclets.toolkit.Content;
                readonly methods: doclets.toolkit.Content;
                readonly modifierAndTypeLabel: doclets.toolkit.Content;
                readonly modifierLabel: doclets.toolkit.Content;
                readonly moduleLabel: doclets.toolkit.Content;
                readonly moduleSubNavLabel: doclets.toolkit.Content;
                readonly module_: doclets.toolkit.Content;
                readonly modulesLabel: doclets.toolkit.Content;
                readonly navAnnotationTypeMember: doclets.toolkit.Content;
                readonly navAnnotationTypeOptionalMember: doclets.toolkit.Content;
                readonly navAnnotationTypeRequiredMember: doclets.toolkit.Content;
                readonly navClassesAndInterfaces: doclets.toolkit.Content;
                readonly navConstructor: doclets.toolkit.Content;
                readonly navDescription: doclets.toolkit.Content;
                readonly navEnum: doclets.toolkit.Content;
                readonly navField: doclets.toolkit.Content;
                readonly navHelpNavigation: doclets.toolkit.Content;
                readonly navHelpPages: doclets.toolkit.Content;
                _navLinkLabels: java.util.EnumMap<doclets.toolkit.util.VisibleMemberTable$Kind,doclets.toolkit.Content>;
                readonly navMethod: doclets.toolkit.Content;
                readonly navModules: doclets.toolkit.Content;
                readonly navNested: doclets.toolkit.Content;
                readonly navPackages: doclets.toolkit.Content;
                readonly navProperty: doclets.toolkit.Content;
                readonly navServices: doclets.toolkit.Content;
                readonly nestedClassSummary: doclets.toolkit.Content;
                readonly newAPI: doclets.toolkit.Content;
                readonly newLabel: doclets.toolkit.Content;
                readonly noScriptMessage: doclets.toolkit.Content;
                readonly openModuleLabel: doclets.toolkit.Content;
                readonly openedTo: doclets.toolkit.Content;
                readonly overridesLabel: doclets.toolkit.Content;
                readonly overviewLabel: doclets.toolkit.Content;
                readonly packageHierarchies: doclets.toolkit.Content;
                readonly packageLabel: doclets.toolkit.Content;
                readonly packageSubNavLabel: doclets.toolkit.Content;
                readonly packageSummaryLabel: doclets.toolkit.Content;
                readonly package_: doclets.toolkit.Content;
                readonly packagesLabel: doclets.toolkit.Content;
                readonly parameters: doclets.toolkit.Content;
                readonly previewAPI: doclets.toolkit.Content;
                readonly previewLabel: doclets.toolkit.Content;
                readonly previewMark: doclets.toolkit.Content;
                readonly previewPhrase: doclets.toolkit.Content;
                readonly properties: doclets.toolkit.Content;
                readonly propertyDetailsLabel: doclets.toolkit.Content;
                readonly propertyLabel: doclets.toolkit.Content;
                readonly propertySummaryLabel: doclets.toolkit.Content;
                readonly recordComponents: doclets.toolkit.Content;
                readonly records: doclets.toolkit.Content;
                readonly referencedIn: doclets.toolkit.Content;
                readonly relatedPackages: doclets.toolkit.Content;
                _resources: doclets.toolkit.Resources;
                readonly returns: doclets.toolkit.Content;
                readonly seeAlso: doclets.toolkit.Content;
                readonly serializedForm: doclets.toolkit.Content;
                readonly servicesLabel: doclets.toolkit.Content;
                readonly specificationLabel: doclets.toolkit.Content;
                readonly specifiedByLabel: doclets.toolkit.Content;
                readonly subclassesLabel: doclets.toolkit.Content;
                readonly subinterfacesLabel: doclets.toolkit.Content;
                readonly summaryLabel: doclets.toolkit.Content;
                readonly systemPropertiesLabel: doclets.toolkit.Content;
                readonly systemPropertiesSummaryLabel: doclets.toolkit.Content;
                readonly throws_: doclets.toolkit.Content;
                readonly treeLabel: doclets.toolkit.Content;
                readonly typeLabel: doclets.toolkit.Content;
                readonly typeParameters: doclets.toolkit.Content;
                readonly useLabel: doclets.toolkit.Content;
                readonly valueLabel: doclets.toolkit.Content;
              }
              interface Contents extends CombineTypes<[_Contents, java.lang.Object]> {}
              interface _DeprecatedListWriter$$static extends ClassLike {
                generate(configuration: HtmlConfiguration): void;
                _TERMINALLY_DEPRECATED_KEY: string;
                new(configuration: HtmlConfiguration, filename: doclets.toolkit.util.DocPath): DeprecatedListWriter;
              }
              let DeprecatedListWriter: _DeprecatedListWriter$$static;
              interface _DeprecatedListWriter {
                _addComments(e: javax.lang.model.element.Element, desc: doclets.toolkit.Content): void;
                _addContentSelectors(target: doclets.toolkit.Content): void;
                _addExtraIndexLink(target: doclets.toolkit.Content): void;
                _addExtraSection(content: doclets.toolkit.Content): void;
                _addTableTabs(table: Table<javax.lang.model.element.Element>, headingKey: string): void;
                _getColumnStyles(): html.markup.HtmlStyle[];
                _getExtraContent(element: javax.lang.model.element.Element): doclets.toolkit.Content;
                _getReleaseCheckbox(name: string, index: int): doclets.toolkit.Content;
                _getTableCaption(headingKey: string): doclets.toolkit.Content;
                _getTableHeader(headerKey: string): TableHeader;
              }
              interface DeprecatedListWriter extends CombineTypes<[_DeprecatedListWriter, SummaryListWriter<doclets.toolkit.util.DeprecatedAPIListBuilder>]> {}
              interface _DocFilesHandlerImpl$$static extends ClassLike {
                new(configuration: HtmlConfiguration, element: javax.lang.model.element.Element): DocFilesHandlerImpl;
              }
              let DocFilesHandlerImpl: _DocFilesHandlerImpl$$static;
              interface _DocFilesHandlerImpl {
                _copyDirectory(srcdir: doclets.toolkit.util.DocFile, dstDocPath: doclets.toolkit.util.DocPath, first: boolean): void;
                copyDocFiles(): void;
                _getLocalHeaderTags(dtrees: java.util.List<com.sun.source.doctree.DocTree>): java.util.List<com.sun.source.doctree.DocTree>;
                getStylesheets(): java.util.List<doclets.toolkit.util.DocPath>;
                _getWindowTitle(docletWriter: HtmlDocletWriter, element: javax.lang.model.element.Element): string;
                _handleHtmlFile(srcfile: doclets.toolkit.util.DocFile, dstPath: doclets.toolkit.util.DocPath): void;
                _isValidFilename(f: doclets.toolkit.util.DocFile): boolean;
                readonly configuration: HtmlConfiguration;
                readonly element: javax.lang.model.element.Element;
                readonly location: javax.tools.JavaFileManager$Location;
                _options: HtmlOptions;
                readonly source: doclets.toolkit.util.DocPath;
              }
              interface DocFilesHandlerImpl extends CombineTypes<[_DocFilesHandlerImpl, jdk.javadoc.internal.doclets.toolkit.DocFilesHandler, java.lang.Object]> {}
              interface _DocFilesHandlerImpl$DocFileWriter$$static extends ClassLike {
                new(configuration: HtmlConfiguration, path: doclets.toolkit.util.DocPath, e: javax.lang.model.element.Element, pkg: javax.lang.model.element.PackageElement): DocFilesHandlerImpl$DocFileWriter;
              }
              let DocFilesHandlerImpl$DocFileWriter: _DocFilesHandlerImpl$DocFileWriter$$static;
              interface _DocFilesHandlerImpl$DocFileWriter {
                _getNavBar(pageMode: Navigation$PageMode, element: javax.lang.model.element.Element): Navigation;
                isIndexable(): boolean;
                _pkg: javax.lang.model.element.PackageElement;
              }
              interface DocFilesHandlerImpl$DocFileWriter extends CombineTypes<[_DocFilesHandlerImpl$DocFileWriter, jdk.javadoc.internal.doclets.formats.html.HtmlDocletWriter]> {}
              interface _EnumConstantWriterImpl$$static extends ClassLike {
                new(writer: SubWriterHolderWriter, typeElement: javax.lang.model.element.TypeElement): EnumConstantWriterImpl;
                new(writer: SubWriterHolderWriter): EnumConstantWriterImpl;
              }
              let EnumConstantWriterImpl: _EnumConstantWriterImpl$$static;
              interface _EnumConstantWriterImpl {
                addComments(enumConstant: javax.lang.model.element.VariableElement, enumConstants: doclets.toolkit.Content): void;
                addDeprecated(enumConstant: javax.lang.model.element.VariableElement, content: doclets.toolkit.Content): void;
                addInheritedSummaryLabel(typeElement: javax.lang.model.element.TypeElement, content: doclets.toolkit.Content): void;
                _addInheritedSummaryLink(typeElement: javax.lang.model.element.TypeElement, member: javax.lang.model.element.Element, target: doclets.toolkit.Content): void;
                addPreview(enumConstant: javax.lang.model.element.VariableElement, content: doclets.toolkit.Content): void;
                addSummary(summariesList: doclets.toolkit.Content, content: doclets.toolkit.Content): void;
                addSummaryLabel(content: doclets.toolkit.Content): void;
                _addSummaryLink(context: HtmlLinkInfo$Kind, typeElement: javax.lang.model.element.TypeElement, member: javax.lang.model.element.Element, content: doclets.toolkit.Content): void;
                _addSummaryType(member: javax.lang.model.element.Element, content: doclets.toolkit.Content): void;
                addTags(enumConstant: javax.lang.model.element.VariableElement, content: doclets.toolkit.Content): void;
                _createSummaryTable(): Table<javax.lang.model.element.Element>;
                getEnumConstantsDetails(memberDetailsHeader: doclets.toolkit.Content, content: doclets.toolkit.Content): doclets.toolkit.Content;
                getEnumConstantsDetailsHeader(typeElement: javax.lang.model.element.TypeElement, memberDetails: doclets.toolkit.Content): doclets.toolkit.Content;
                getEnumConstantsHeader(enumConstant: javax.lang.model.element.VariableElement, enumConstantsDetails: doclets.toolkit.Content): doclets.toolkit.Content;
                getMemberHeader(): doclets.toolkit.Content;
                getMemberSummaryHeader(typeElement: javax.lang.model.element.TypeElement, content: doclets.toolkit.Content): doclets.toolkit.Content;
                getSignature(enumConstant: javax.lang.model.element.VariableElement): doclets.toolkit.Content;
                _getSummaryLink(member: javax.lang.model.element.Element): doclets.toolkit.Content;
                getSummaryTableHeader(member: javax.lang.model.element.Element): TableHeader;
              }
              interface EnumConstantWriterImpl extends CombineTypes<[_EnumConstantWriterImpl, jdk.javadoc.internal.doclets.toolkit.MemberSummaryWriter, jdk.javadoc.internal.doclets.formats.html.AbstractMemberWriter, jdk.javadoc.internal.doclets.toolkit.EnumConstantWriter]> {}
              interface _ExternalSpecsWriter$$static extends ClassLike {
                _find(s: string, start: int, p: java.util.function.Predicate<ExternalSpecsWriter$character>): int;
                generate(configuration: HtmlConfiguration): void;
                _generate(configuration: HtmlConfiguration, fileName: doclets.toolkit.util.DocPath): void;
                new(configuration: HtmlConfiguration, filename: doclets.toolkit.util.DocPath): ExternalSpecsWriter;
              }
              let ExternalSpecsWriter: _ExternalSpecsWriter$$static;
              interface _ExternalSpecsWriter {
                _addExternalSpecs(content: doclets.toolkit.Content): void;
                _buildExternalSpecsPage(): void;
                _checkUniqueItems(): void;
                _createLink(i: doclets.toolkit.util.IndexItem): doclets.toolkit.Content;
                _createSpecLink(i: doclets.toolkit.util.IndexItem): doclets.toolkit.Content;
                _getSpecURI(i: doclets.toolkit.util.IndexItem): java.net.URI;
                _getTitleComparator(): java.util.Comparator<string>;
                _groupExternalSpecs(): java.util.Map<string,java.util.List<doclets.toolkit.util.IndexItem>>;
                _report(ii: doclets.toolkit.util.IndexItem, key: string, args: any[]): void;
                _report(ii: doclets.toolkit.util.IndexItem, key: string, ...args: any[]): void;
                _navBar: Navigation;
                _titles: java.util.Map<javax.lang.model.element.Element,string>;
              }
              interface ExternalSpecsWriter extends CombineTypes<[_ExternalSpecsWriter, jdk.javadoc.internal.doclets.formats.html.HtmlDocletWriter]> {}
              interface _FieldWriterImpl$$static extends ClassLike {
                new(writer: SubWriterHolderWriter, typeElement: javax.lang.model.element.TypeElement): FieldWriterImpl;
                new(writer: SubWriterHolderWriter): FieldWriterImpl;
              }
              let FieldWriterImpl: _FieldWriterImpl$$static;
              interface _FieldWriterImpl {
                addComments(field: javax.lang.model.element.VariableElement, fieldContent: doclets.toolkit.Content): void;
                addDeprecated(field: javax.lang.model.element.VariableElement, fieldContent: doclets.toolkit.Content): void;
                addInheritedSummaryLabel(typeElement: javax.lang.model.element.TypeElement, content: doclets.toolkit.Content): void;
                _addInheritedSummaryLink(typeElement: javax.lang.model.element.TypeElement, member: javax.lang.model.element.Element, target: doclets.toolkit.Content): void;
                addPreview(field: javax.lang.model.element.VariableElement, content: doclets.toolkit.Content): void;
                addSummary(summariesList: doclets.toolkit.Content, content: doclets.toolkit.Content): void;
                addSummaryLabel(content: doclets.toolkit.Content): void;
                _addSummaryLink(context: HtmlLinkInfo$Kind, typeElement: javax.lang.model.element.TypeElement, member: javax.lang.model.element.Element, content: doclets.toolkit.Content): void;
                _addSummaryType(member: javax.lang.model.element.Element, content: doclets.toolkit.Content): void;
                addTags(field: javax.lang.model.element.VariableElement, fieldContent: doclets.toolkit.Content): void;
                _createSummaryTable(): Table<javax.lang.model.element.Element>;
                getFieldDetails(memberDetailsHeaderContent: doclets.toolkit.Content, memberContent: doclets.toolkit.Content): doclets.toolkit.Content;
                getFieldDetailsHeader(content: doclets.toolkit.Content): doclets.toolkit.Content;
                getFieldHeaderContent(field: javax.lang.model.element.VariableElement): doclets.toolkit.Content;
                getMemberHeader(): doclets.toolkit.Content;
                getMemberSummaryHeader(typeElement: javax.lang.model.element.TypeElement, content: doclets.toolkit.Content): doclets.toolkit.Content;
                getSignature(field: javax.lang.model.element.VariableElement): doclets.toolkit.Content;
                _getSummaryLink(member: javax.lang.model.element.Element): doclets.toolkit.Content;
                getSummaryTableHeader(member: javax.lang.model.element.Element): TableHeader;
              }
              interface FieldWriterImpl extends CombineTypes<[_FieldWriterImpl, jdk.javadoc.internal.doclets.toolkit.MemberSummaryWriter, jdk.javadoc.internal.doclets.formats.html.AbstractMemberWriter, jdk.javadoc.internal.doclets.toolkit.FieldWriter]> {}
              interface _Headings$$static extends ClassLike {
                _CONTENT_HEADING: markup.TagName;
                _PAGE_TITLE_HEADING: markup.TagName;
                _SUB_HEADING: markup.TagName;
                _new(): Headings;
              }
              let Headings: _Headings$$static;
              interface _Headings {
              }
              interface Headings extends CombineTypes<[_Headings, java.lang.Object]> {}
              interface _Headings$ConstantsSummary$$static extends ClassLike {
                _PACKAGE_HEADING: markup.TagName;
                _new(): Headings$ConstantsSummary;
              }
              let Headings$ConstantsSummary: _Headings$ConstantsSummary$$static;
              interface _Headings$ConstantsSummary {
              }
              interface Headings$ConstantsSummary extends CombineTypes<[_Headings$ConstantsSummary, java.lang.Object]> {}
              interface _Headings$IndexFrames$$static extends ClassLike {
                _MODULE_HEADING: markup.TagName;
                _PACKAGE_HEADING: markup.TagName;
                _new(): Headings$IndexFrames;
              }
              let Headings$IndexFrames: _Headings$IndexFrames$$static;
              interface _Headings$IndexFrames {
              }
              interface Headings$IndexFrames extends CombineTypes<[_Headings$IndexFrames, java.lang.Object]> {}
              interface _Headings$ModuleDeclaration$$static extends ClassLike {
                _SUMMARY_HEADING: markup.TagName;
                _new(): Headings$ModuleDeclaration;
              }
              let Headings$ModuleDeclaration: _Headings$ModuleDeclaration$$static;
              interface _Headings$ModuleDeclaration {
              }
              interface Headings$ModuleDeclaration extends CombineTypes<[_Headings$ModuleDeclaration, java.lang.Object]> {}
              interface _Headings$SerializedForm$$static extends ClassLike {
                _CLASS_HEADING: markup.TagName;
                _CLASS_SUBHEADING: markup.TagName;
                _MEMBER_HEADING: markup.TagName;
                _PACKAGE_HEADING: markup.TagName;
                _new(): Headings$SerializedForm;
              }
              let Headings$SerializedForm: _Headings$SerializedForm$$static;
              interface _Headings$SerializedForm {
              }
              interface Headings$SerializedForm extends CombineTypes<[_Headings$SerializedForm, java.lang.Object]> {}
              interface _Headings$TypeDeclaration$$static extends ClassLike {
                _DETAILS_HEADING: markup.TagName;
                _INHERITED_SUMMARY_HEADING: markup.TagName;
                _MEMBER_HEADING: markup.TagName;
                _SUMMARY_HEADING: markup.TagName;
                _new(): Headings$TypeDeclaration;
              }
              let Headings$TypeDeclaration: _Headings$TypeDeclaration$$static;
              interface _Headings$TypeDeclaration {
              }
              interface Headings$TypeDeclaration extends CombineTypes<[_Headings$TypeDeclaration, java.lang.Object]> {}
              interface _Headings$TypeUse$$static extends ClassLike {
                _SUMMARY_HEADING: markup.TagName;
                _new(): Headings$TypeUse;
              }
              let Headings$TypeUse: _Headings$TypeUse$$static;
              interface _Headings$TypeUse {
              }
              interface Headings$TypeUse extends CombineTypes<[_Headings$TypeUse, java.lang.Object]> {}
              interface _HelpWriter$$static extends ClassLike {
                generate(configuration: HtmlConfiguration): void;
                new(configuration: HtmlConfiguration, filename: doclets.toolkit.util.DocPath): HelpWriter;
              }
              let HelpWriter: _HelpWriter$$static;
              interface _HelpWriter {
                _addHelpFileContents(content: doclets.toolkit.Content): void;
                _generateHelpFile(): void;
                _getContent(key: string): doclets.toolkit.Content;
                _getContent(key: string, arg: any): doclets.toolkit.Content;
                _getContent(key: string, arg1: any, arg2: any): doclets.toolkit.Content;
                _getNavBar(pageMode: Navigation$PageMode, element: javax.lang.model.element.Element): Navigation;
                _getNavigationSection(mainTOC: html.markup.HtmlTree): doclets.toolkit.Content;
                _getPageKindSection(mainTOC: html.markup.HtmlTree): doclets.toolkit.Content;
                _newHelpSection(headingContent: doclets.toolkit.Content, toc: html.markup.HtmlTree, id: html.markup.HtmlId): html.markup.HtmlTree;
                _newHelpSection(headingContent: doclets.toolkit.Content, pm: Navigation$PageMode, toc: html.markup.HtmlTree): html.markup.HtmlTree;
                _newHelpSectionList(first: doclets.toolkit.Content, rest: doclets.toolkit.Content[]): html.markup.HtmlTree;
                _newHelpSectionList(first: doclets.toolkit.Content, ...rest: doclets.toolkit.Content[]): html.markup.HtmlTree;
                _SEARCH_EXAMPLES: string[][];
                _allClassesLink: doclets.toolkit.Content;
                _allPackagesLink: doclets.toolkit.Content;
                _indexLink: doclets.toolkit.Content;
                _overviewLink: doclets.toolkit.Content;
              }
              interface HelpWriter extends CombineTypes<[_HelpWriter, jdk.javadoc.internal.doclets.formats.html.HtmlDocletWriter]> {}
              interface _HtmlConfiguration$$static extends ClassLike {
                readonly HTML_DEFAULT_CHARSET: string;
                new(doclet: javadoc.doclet.Doclet, locale: java.util.Locale, reporter: javadoc.doclet.Reporter): HtmlConfiguration;
              }
              let HtmlConfiguration: _HtmlConfiguration$$static;
              interface _HtmlConfiguration {
                _checkForDeprecation(): boolean;
                finishOptionSettings(): boolean;
                _finishOptionSettings0(): boolean;
                getAdditionalScripts(): java.util.List<doclets.toolkit.util.DocPath>;
                getAdditionalStylesheets(): java.util.List<doclets.toolkit.util.DocPath>;
                getBuildDate(): java.time.ZonedDateTime;
                getContents(): Contents;
                getDocResources(): doclets.toolkit.Resources;
                getDocletVersion(): java.lang.Runtime$Version;
                getFileManager(): javax.tools.JavaFileManager;
                getLocale(): java.util.Locale;
                getMainStylesheet(): doclets.toolkit.util.DocPath;
                getMessages(): doclets.toolkit.Messages;
                getOptions(): HtmlOptions;
                getOptions(): doclets.toolkit.BaseOptions;
                getOverviewPath(): javax.tools.JavaFileObject;
                _getValidClass(classes: java.util.List<javax.lang.model.element.TypeElement>): javax.lang.model.element.TypeElement;
                getWriterFactory(): doclets.toolkit.WriterFactory;
                _initConfiguration(docEnv: javadoc.doclet.DocletEnvironment, resourceKeyMapper: java.util.function.Function<string,string>): void;
                _setCreateOverview(): void;
                _setTopFile(): void;
                _buildDate: java.time.ZonedDateTime;
                readonly conditionalPages: java.util.Set<HtmlConfiguration$ConditionalPage>;
                contents: Contents;
                currentTypeElement: javax.lang.model.element.TypeElement;
                _deprecatedAPIListBuilder: doclets.toolkit.util.DeprecatedAPIListBuilder;
                docPaths: doclets.toolkit.util.DocPaths;
                readonly docResources: doclets.toolkit.Resources;
                _docletVersion: java.lang.Runtime$Version;
                htmlIds: HtmlIds;
                localStylesheetMap: java.util.Map<javax.lang.model.element.Element,java.util.List<doclets.toolkit.util.DocPath>>;
                _mainIndex: HtmlIndexBuilder;
                _messages: doclets.toolkit.Messages;
                _newAPIPageBuilder: doclets.toolkit.util.NewAPIBuilder;
                _options: HtmlOptions;
                _previewAPIListBuilder: doclets.toolkit.util.PreviewAPIListBuilder;
                topFile: doclets.toolkit.util.DocPath;
              }
              interface HtmlConfiguration extends CombineTypes<[_HtmlConfiguration, jdk.javadoc.internal.doclets.toolkit.BaseConfiguration]> {}
              interface _HtmlConfiguration$ConditionalPage$$static extends ClassLike {
                valueOf(name: string): HtmlConfiguration$ConditionalPage;
                values(): HtmlConfiguration$ConditionalPage[];
                readonly CONSTANT_VALUES: HtmlConfiguration$ConditionalPage;
                readonly DEPRECATED: HtmlConfiguration$ConditionalPage;
                readonly EXTERNAL_SPECS: HtmlConfiguration$ConditionalPage;
                readonly NEW: HtmlConfiguration$ConditionalPage;
                readonly PREVIEW: HtmlConfiguration$ConditionalPage;
                readonly SERIALIZED_FORM: HtmlConfiguration$ConditionalPage;
                readonly SYSTEM_PROPERTIES: HtmlConfiguration$ConditionalPage;
              }
              let HtmlConfiguration$ConditionalPage: _HtmlConfiguration$ConditionalPage$$static;
              interface _HtmlConfiguration$ConditionalPage {
              }
              interface HtmlConfiguration$ConditionalPage extends CombineTypes<[_HtmlConfiguration$ConditionalPage]> {}
              interface _HtmlDoclet$$static extends ClassLike {
                _DOCLET_RESOURCES: doclets.toolkit.util.DocPath;
                new(initiatingDoclet: javadoc.doclet.Doclet): HtmlDoclet;
              }
              let HtmlDoclet: _HtmlDoclet$$static;
              interface _HtmlDoclet {
                _copyJqueryFiles(): void;
                _copyLegalFiles(includeJQuery: boolean): void;
                generateClassFiles(classTree: doclets.toolkit.util.ClassTree): void;
                _generateClassFiles(typeElems: java.util.SortedSet<javax.lang.model.element.TypeElement>, classTree: doclets.toolkit.util.ClassTree): void;
                _generateModuleFiles(): void;
                _generateOtherFiles(classTree: doclets.toolkit.util.ClassTree): void;
                _generatePackageFiles(classTree: doclets.toolkit.util.ClassTree): void;
                getConfiguration(): HtmlConfiguration;
                getConfiguration(): doclets.toolkit.BaseConfiguration;
                getName(): string;
                _getResourceKeyMapper(docEnv: javadoc.doclet.DocletEnvironment): java.util.function.Function<string,string>;
                getSupportedOptions(): java.util.Set<javadoc.doclet.Doclet$Option>;
                init(locale: java.util.Locale, reporter: javadoc.doclet.Reporter): void;
                _performCopy(filename: string, targetPath: doclets.toolkit.util.DocPath): void;
                _configuration: HtmlConfiguration;
                _initiatingDoclet: javadoc.doclet.Doclet;
                _messages: doclets.toolkit.Messages;
              }
              interface HtmlDoclet extends CombineTypes<[_HtmlDoclet, jdk.javadoc.internal.doclets.toolkit.AbstractDoclet]> {}
              interface _HtmlDocletWriter$$static extends ClassLike {
                _getDescription(prefix: string, elem: javax.lang.model.element.Element): string;
                _getGenerator(clazz: java.lang.Class<any>): string;
                _getLastHelper(l: java.util.List<javax.lang.model.element.Name>): javax.lang.model.element.Name;
                _removeLastHelper(l: java.util.List<javax.lang.model.element.Name>): javax.lang.model.element.Name;
                _docrootPattern: java.util.regex.Pattern;
                new(configuration: HtmlConfiguration, path: doclets.toolkit.util.DocPath): HtmlDocletWriter;
              }
              let HtmlDocletWriter: _HtmlDocletWriter$$static;
              interface _HtmlDocletWriter {
                _addAnnotations(annotationDoc: javax.lang.model.element.TypeElement, linkInfo: HtmlLinkInfo, annotation: html.markup.ContentBuilder, map: java.util.Map<javax.lang.model.element.ExecutableElement,javax.lang.model.element.AnnotationValue>, linkBreak: boolean): void;
                _addCommentTags(element: javax.lang.model.element.Element, tags: java.util.List<com.sun.source.doctree.DocTree>, depr: boolean, first: boolean, inSummary: boolean, target: doclets.toolkit.Content): void;
                addInlineComment(element: javax.lang.model.element.Element, tag: com.sun.source.doctree.DocTree, target: doclets.toolkit.Content): void;
                addInlineComment(element: javax.lang.model.element.Element, target: doclets.toolkit.Content): void;
                addInlineDeprecatedComment(e: javax.lang.model.element.Element, tag: com.sun.source.doctree.DeprecatedTree, target: doclets.toolkit.Content): void;
                _addMethodInfo(method: javax.lang.model.element.ExecutableElement, dl: doclets.toolkit.Content): void;
                addPreQualifiedClassLink(context: HtmlLinkInfo$Kind, typeElement: javax.lang.model.element.TypeElement, target: doclets.toolkit.Content): void;
                addPreQualifiedClassLink(context: HtmlLinkInfo$Kind, typeElement: javax.lang.model.element.TypeElement, style: html.markup.HtmlStyle, target: doclets.toolkit.Content): void;
                addPreQualifiedStrongClassLink(context: HtmlLinkInfo$Kind, typeElement: javax.lang.model.element.TypeElement, content: doclets.toolkit.Content): void;
                addPreviewComment(element: javax.lang.model.element.Element, firstSentenceTags: java.util.List<com.sun.source.doctree.DocTree>, target: doclets.toolkit.Content): void;
                addPreviewInfo(forWhat: javax.lang.model.element.Element, target: doclets.toolkit.Content): void;
                addPreviewSummary(forWhat: javax.lang.model.element.Element, target: doclets.toolkit.Content): void;
                addSrcLink(element: javax.lang.model.element.Element, label: doclets.toolkit.Content, target: doclets.toolkit.Content): void;
                addSummaryComment(element: javax.lang.model.element.Element, target: doclets.toolkit.Content): void;
                addSummaryComment(element: javax.lang.model.element.Element, firstSentenceTags: java.util.List<com.sun.source.doctree.DocTree>, target: doclets.toolkit.Content): void;
                addSummaryDeprecatedComment(element: javax.lang.model.element.Element, tag: com.sun.source.doctree.DeprecatedTree, target: doclets.toolkit.Content): void;
                _addTagsInfo(e: javax.lang.model.element.Element, content: doclets.toolkit.Content): void;
                _annotationValueToContent(annotationValue: javax.lang.model.element.AnnotationValue): doclets.toolkit.Content;
                commentTagsToContent(element: javax.lang.model.element.Element, tags: java.util.List<com.sun.source.doctree.DocTree>, isFirstSentence: boolean): doclets.toolkit.Content;
                commentTagsToContent(element: javax.lang.model.element.Element, trees: java.util.List<com.sun.source.doctree.DocTree>, isFirstSentence: boolean, inSummary: boolean): doclets.toolkit.Content;
                commentTagsToContent(element: javax.lang.model.element.Element, trees: java.util.List<com.sun.source.doctree.DocTree>, context: TagletWriterImpl$Context): doclets.toolkit.Content;
                _createSectionIdAndIndex(node: com.sun.source.doctree.StartElementTree, trees: java.util.List<com.sun.source.doctree.DocTree>, attrs: doclets.toolkit.Content, element: javax.lang.model.element.Element, context: TagletWriterImpl$Context): void;
                _equalsIgnoreCase(name: javax.lang.model.element.Name, s: string): boolean;
                _getAnnotationInfo(element: javax.lang.model.element.Element, lineBreak: boolean): doclets.toolkit.Content;
                _getAnnotationInfo(descList: java.util.List<javax.lang.model.element.AnnotationMirror>, lineBreak: boolean): doclets.toolkit.Content;
                getAnnotations(descList: java.util.List<javax.lang.model.element.AnnotationMirror>, lineBreak: boolean): java.util.List<doclets.toolkit.Content>;
                _getBlockTagOutput(element: javax.lang.model.element.Element): doclets.toolkit.Content;
                _getBlockTagOutput(element: javax.lang.model.element.Element, taglets: java.util.List<doclets.toolkit.taglets.Taglet>): doclets.toolkit.Content;
                getBody(title: string): html.markup.HtmlTree;
                getBodyStyle(): html.markup.HtmlStyle;
                getCrossClassLink(classElement: javax.lang.model.element.TypeElement, refMemName: string, label: doclets.toolkit.Content, style: html.markup.HtmlStyle, code: boolean): doclets.toolkit.Content;
                getCrossModuleLink(element: javax.lang.model.element.ModuleElement): doclets.toolkit.util.DocLink;
                getCrossPackageLink(element: javax.lang.model.element.PackageElement): doclets.toolkit.util.DocLink;
                _getCurrentPageElement(): javax.lang.model.element.TypeElement;
                getDeprecatedPhrase(e: javax.lang.model.element.Element): doclets.toolkit.Content;
                getDocLink(context: HtmlLinkInfo$Kind, element: javax.lang.model.element.Element, label: HtmlDocletWriter$charSequence): doclets.toolkit.Content;
                getDocLink(context: HtmlLinkInfo$Kind, typeElement: javax.lang.model.element.TypeElement, element: javax.lang.model.element.Element, label: HtmlDocletWriter$charSequence): doclets.toolkit.Content;
                getDocLink(context: HtmlLinkInfo$Kind, typeElement: javax.lang.model.element.TypeElement, element: javax.lang.model.element.Element, label: HtmlDocletWriter$charSequence, style: html.markup.HtmlStyle): doclets.toolkit.Content;
                getDocLink(context: HtmlLinkInfo$Kind, typeElement: javax.lang.model.element.TypeElement, element: javax.lang.model.element.Element, label: HtmlDocletWriter$charSequence, isProperty: boolean): doclets.toolkit.Content;
                getDocLink(context: HtmlLinkInfo$Kind, typeElement: javax.lang.model.element.TypeElement, element: javax.lang.model.element.Element, label: doclets.toolkit.Content, style: html.markup.HtmlStyle, isProperty: boolean): doclets.toolkit.Content;
                getEnclosingPackageName(te: javax.lang.model.element.TypeElement): string;
                getFooter(): html.markup.HtmlTree;
                _getHeader(pageMode: Navigation$PageMode): html.markup.HtmlTree;
                _getHeader(pageMode: Navigation$PageMode, element: javax.lang.model.element.Element): html.markup.HtmlTree;
                _getIdAttributeValue(node: com.sun.source.doctree.StartElementTree): java.util.Optional<string>;
                _getInlineTagOutput(element: javax.lang.model.element.Element, tree: com.sun.source.doctree.DocTree, context: TagletWriterImpl$Context): doclets.toolkit.Content;
                getLink(linkInfo: HtmlLinkInfo): doclets.toolkit.Content;
                _getLocalStylesheets(element: javax.lang.model.element.Element): java.util.List<doclets.toolkit.util.DocPath>;
                getLocalizedPackageName(packageElement: javax.lang.model.element.PackageElement): doclets.toolkit.Content;
                getModuleLink(mdle: javax.lang.model.element.ModuleElement, label: doclets.toolkit.Content): doclets.toolkit.Content;
                getModuleLink(mdle: javax.lang.model.element.ModuleElement, label: doclets.toolkit.Content, fragment: string): doclets.toolkit.Content;
                _getModuleStylesheets(pkgElement: javax.lang.model.element.PackageElement): java.util.List<doclets.toolkit.util.DocPath>;
                _getNavBar(pageMode: Navigation$PageMode, element: javax.lang.model.element.Element): Navigation;
                _getNavLinkToOverviewTree(label: string): doclets.toolkit.Content;
                getPackageLabel(packageName: HtmlDocletWriter$charSequence): doclets.toolkit.Content;
                getPackageLink(packageElement: javax.lang.model.element.PackageElement, label: doclets.toolkit.Content): doclets.toolkit.Content;
                getPackageLink(packageElement: javax.lang.model.element.PackageElement, label: doclets.toolkit.Content, fragment: string): doclets.toolkit.Content;
                _getPackageTableHeader(): TableHeader;
                getPreQualifiedClassLink(context: HtmlLinkInfo$Kind, typeElement: javax.lang.model.element.TypeElement): doclets.toolkit.Content;
                _getPreviewNotes(el: javax.lang.model.element.TypeElement): java.util.List<doclets.toolkit.Content>;
                getQualifiedClassLink(context: HtmlLinkInfo$Kind, element: javax.lang.model.element.Element): doclets.toolkit.Content;
                _getStylesheets(element: javax.lang.model.element.Element): java.util.List<doclets.toolkit.util.DocPath>;
                getTagletWriterInstance(isFirstSentence: boolean): doclets.toolkit.taglets.TagletWriter;
                getTagletWriterInstance(context: TagletWriterImpl$Context): TagletWriterImpl;
                getTypeParameterLinks(linkInfo: HtmlLinkInfo): doclets.toolkit.Content;
                getWindowTitle(title: string): string;
                _hasSerializationOverviewTags(field: javax.lang.model.element.VariableElement): boolean;
                _ignoreNonInlineTag(dtree: com.sun.source.doctree.DocTree, openTags: java.util.List<javax.lang.model.element.Name>): boolean;
                _inSamePackage(element: javax.lang.model.element.Element): boolean;
                _invalidTagOutput(summary: string, detail: java.util.Optional<doclets.toolkit.Content>): doclets.toolkit.Content;
                _isAnnotationArray(pairs: java.util.Map<javax.lang.model.element.ExecutableElement,javax.lang.model.element.AnnotationValue>): boolean;
                isIndexable(): boolean;
                _pathString(te: javax.lang.model.element.TypeElement, name: doclets.toolkit.util.DocPath): doclets.toolkit.util.DocPath;
                _pathString(packageElement: javax.lang.model.element.PackageElement, name: doclets.toolkit.util.DocPath): doclets.toolkit.util.DocPath;
                printHtmlDocument(metakeywords: java.util.List<string>, description: string, body: doclets.toolkit.Content): void;
                printHtmlDocument(metakeywords: java.util.List<string>, description: string, localStylesheets: java.util.List<doclets.toolkit.util.DocPath>, body: doclets.toolkit.Content): void;
                printHtmlDocument(metakeywords: java.util.List<string>, description: string, extraHeadContent: doclets.toolkit.Content, localStylesheets: java.util.List<doclets.toolkit.util.DocPath>, body: doclets.toolkit.Content): void;
                _redirectRelativeLinks(element: javax.lang.model.element.Element, tt: com.sun.source.doctree.TextTree): string;
                replaceDocRootDir(htmlstr: string): string;
                resolveExternalSpecURI(specURI: java.net.URI): java.net.URI;
                _shouldRedirectRelativeLinks(element: javax.lang.model.element.Element): boolean;
                _withLinks(key: string, className: string, elements: java.util.Set<javax.lang.model.element.TypeElement>): doclets.toolkit.Content;
                _withPreviewFeatures(key: string, className: string, featureName: string, features: java.util.List<string>): doclets.toolkit.Content;
                _commentRemoved: boolean;
                _comparators: doclets.toolkit.util.Comparators;
                readonly configuration: HtmlConfiguration;
                _contents: Contents;
                _docPaths: doclets.toolkit.util.DocPaths;
                readonly filename: doclets.toolkit.util.DocPath;
                _headingIds: java.util.Set<string>;
                _htmlIds: HtmlIds;
                _indexAnchorTable: java.util.Map<string,int>;
                _isAnnotationDocumented: boolean;
                _isContainerDocumented: boolean;
                _links: markup.Links;
                _mainBodyScript: markup.Script;
                _messages: doclets.toolkit.Messages;
                _options: HtmlOptions;
                readonly path: doclets.toolkit.util.DocPath;
                readonly pathToRoot: doclets.toolkit.util.DocPath;
                _resources: doclets.toolkit.Resources;
                _utils: doclets.toolkit.util.Utils;
                _winTitle: string;
              }
              interface HtmlDocletWriter extends CombineTypes<[_HtmlDocletWriter, java.lang.Object]> {}
              interface _HtmlIds$$static extends ClassLike {
                _forIndexChar(character: char): html.markup.HtmlId;
                _forLine(lineNumber: int): html.markup.HtmlId;
                _forMemberSummary(kind: doclets.toolkit.util.VisibleMemberTable$Kind): html.markup.HtmlId;
                _forParam(paramName: string): html.markup.HtmlId;
                _forSummaryKind(kind: doclets.toolkit.util.SummaryAPIListBuilder$SummaryElementKind): html.markup.HtmlId;
                forTab(tableId: html.markup.HtmlId, tabIndex: int): html.markup.HtmlId;
                forTabPanel(tableId: html.markup.HtmlId): html.markup.HtmlId;
                _forText(text: string, counts: java.util.Map<string,int>): html.markup.HtmlId;
                _ALL_CLASSES_TABLE: markup.HtmlId;
                _ALL_MODULES_TABLE: markup.HtmlId;
                _ALL_PACKAGES_TABLE: markup.HtmlId;
                _ANNOTATION_TYPE_ELEMENT_DETAIL: markup.HtmlId;
                _ANNOTATION_TYPE_OPTIONAL_ELEMENT_SUMMARY: markup.HtmlId;
                _ANNOTATION_TYPE_REQUIRED_ELEMENT_SUMMARY: markup.HtmlId;
                _CLASS_DESCRIPTION: markup.HtmlId;
                _CLASS_SUMMARY: markup.HtmlId;
                _CONSTRUCTOR_DETAIL: markup.HtmlId;
                _CONSTRUCTOR_SUMMARY: markup.HtmlId;
                _ENUM_CONSTANTS_INHERITANCE: string;
                _ENUM_CONSTANT_DETAIL: markup.HtmlId;
                _ENUM_CONSTANT_SUMMARY: markup.HtmlId;
                _EXTERNAL_SPECS: markup.HtmlId;
                _FIELDS_INHERITANCE: string;
                _FIELD_DETAIL: markup.HtmlId;
                _FIELD_SUMMARY: markup.HtmlId;
                _FOR_REMOVAL: markup.HtmlId;
                _HELP_NAVIGATION: markup.HtmlId;
                _HELP_PAGES: markup.HtmlId;
                _METHODS_INHERITANCE: string;
                _METHOD_DETAIL: markup.HtmlId;
                _METHOD_SUMMARY: markup.HtmlId;
                _METHOD_SUMMARY_TABLE: markup.HtmlId;
                _MODULES: markup.HtmlId;
                _MODULE_DESCRIPTION: markup.HtmlId;
                _NAVBAR_SUB_LIST: markup.HtmlId;
                _NAVBAR_TOGGLE_BUTTON: markup.HtmlId;
                _NAVBAR_TOP: markup.HtmlId;
                _NAVBAR_TOP_FIRSTROW: markup.HtmlId;
                _NESTED_CLASSES_INHERITANCE: string;
                _NESTED_CLASS_SUMMARY: markup.HtmlId;
                _PACKAGES: markup.HtmlId;
                _PACKAGE_DESCRIPTION: markup.HtmlId;
                _PACKAGE_SUMMARY_TABLE: markup.HtmlId;
                _PROPERTIES_INHERITANCE: string;
                _PROPERTY_DETAIL: markup.HtmlId;
                _PROPERTY_SUMMARY: markup.HtmlId;
                _RELATED_PACKAGE_SUMMARY: markup.HtmlId;
                _RESET_BUTTON: markup.HtmlId;
                _SEARCH_INPUT: markup.HtmlId;
                _SERVICES: markup.HtmlId;
                _SKIP_NAVBAR_TOP: markup.HtmlId;
                _UNNAMED_PACKAGE_ANCHOR: markup.HtmlId;
                _new(configuration: HtmlConfiguration): HtmlIds;
              }
              let HtmlIds: _HtmlIds$$static;
              interface _HtmlIds {
                _forClass(element: javax.lang.model.element.TypeElement): html.markup.HtmlId;
                _forErasure(executableElement: javax.lang.model.element.ExecutableElement): html.markup.HtmlId;
                forHeading(headingText: HtmlIds$charSequence, headingIds: java.util.Set<string>): html.markup.HtmlId;
                _forInherited(prefix: string, element: javax.lang.model.element.TypeElement): html.markup.HtmlId;
                _forInheritedClasses(element: javax.lang.model.element.TypeElement): html.markup.HtmlId;
                _forInheritedEnumConstants(element: javax.lang.model.element.TypeElement): html.markup.HtmlId;
                _forInheritedFields(element: javax.lang.model.element.TypeElement): html.markup.HtmlId;
                _forInheritedMethods(element: javax.lang.model.element.TypeElement): html.markup.HtmlId;
                _forInheritedProperties(element: javax.lang.model.element.TypeElement): html.markup.HtmlId;
                _forMember(element: javax.lang.model.element.ExecutableElement): html.markup.HtmlId;
                _forMember(typeElement: javax.lang.model.element.TypeElement, member: javax.lang.model.element.ExecutableElement): html.markup.HtmlId;
                _forMember(element: javax.lang.model.element.VariableElement): html.markup.HtmlId;
                _forMember(typeElement: javax.lang.model.element.TypeElement, member: javax.lang.model.element.VariableElement): html.markup.HtmlId;
                _forPackage(element: javax.lang.model.element.PackageElement): html.markup.HtmlId;
                _forPackageName(pkgName: string): html.markup.HtmlId;
                forPage(page: Navigation$PageMode): html.markup.HtmlId;
                forPreviewSection(el: javax.lang.model.element.Element): html.markup.HtmlId;
                _forProperty(element: javax.lang.model.element.ExecutableElement): html.markup.HtmlId;
                _configuration: HtmlConfiguration;
                _utils: doclets.toolkit.util.Utils;
              }
              interface HtmlIds extends CombineTypes<[_HtmlIds, java.lang.Object]> {}
              interface _HtmlIndexBuilder$$static extends ClassLike {
                _new(configuration: HtmlConfiguration): HtmlIndexBuilder;
              }
              let HtmlIndexBuilder: _HtmlIndexBuilder$$static;
              interface _HtmlIndexBuilder {
                _addContainingInfo(item: doclets.toolkit.util.IndexItem, addModuleInfo: boolean): void;
                addElements(): void;
                _createSearchIndexFile(searchIndexJS: doclets.toolkit.util.DocPath, indexItems: java.util.SortedSet<doclets.toolkit.util.IndexItem>, varName: string): void;
                createSearchIndexFiles(): void;
                _configuration: HtmlConfiguration;
                _htmlIds: HtmlIds;
                _resources: doclets.toolkit.Resources;
                _utils: doclets.toolkit.util.Utils;
              }
              interface HtmlIndexBuilder extends CombineTypes<[_HtmlIndexBuilder, jdk.javadoc.internal.doclets.toolkit.util.IndexBuilder]> {}
              interface _HtmlLinkFactory$$static extends ClassLike {
                new(writer: HtmlDocletWriter): HtmlLinkFactory;
              }
              let HtmlLinkFactory: _HtmlLinkFactory$$static;
              interface _HtmlLinkFactory {
                _getBoundsLinkInfo(linkInfo: HtmlLinkInfo, bound: javax.lang.model.type.TypeMirror): HtmlLinkInfo;
                _getClassLink(linkInfo: HtmlLinkInfo): doclets.toolkit.Content;
                _getClassToolTip(typeElement: javax.lang.model.element.TypeElement, isTypeLink: boolean): string;
                getLink(linkInfo: HtmlLinkInfo): doclets.toolkit.Content;
                _getPath(linkInfo: HtmlLinkInfo): doclets.toolkit.util.DocPath;
                getTypeAnnotationLinks(linkInfo: HtmlLinkInfo): doclets.toolkit.Content;
                _getTypeParameterLinks(linkInfo: HtmlLinkInfo): doclets.toolkit.Content;
                _newContent(): doclets.toolkit.Content;
                _docPaths: doclets.toolkit.util.DocPaths;
                _m_writer: HtmlDocletWriter;
                _utils: doclets.toolkit.util.Utils;
              }
              interface HtmlLinkFactory extends CombineTypes<[_HtmlLinkFactory, java.lang.Object]> {}
              interface _HtmlLinkInfo$$static extends ClassLike {
                new(configuration: HtmlConfiguration, context: HtmlLinkInfo$Kind, ee: javax.lang.model.element.ExecutableElement): HtmlLinkInfo;
                new(configuration: HtmlConfiguration, context: HtmlLinkInfo$Kind, typeElement: javax.lang.model.element.TypeElement): HtmlLinkInfo;
                new(configuration: HtmlConfiguration, context: HtmlLinkInfo$Kind, type: javax.lang.model.type.TypeMirror): HtmlLinkInfo;
              }
              let HtmlLinkInfo: _HtmlLinkInfo$$static;
              interface _HtmlLinkInfo {
                addLineBreakOpportunitiesInTypeParameters(addLineBreakOpportunities: boolean): HtmlLinkInfo;
                addLineBreakOpportunitiesInTypeParameters(): boolean;
                addLineBreaksInTypeParameters(addLineBreaksInTypeParameters: boolean): HtmlLinkInfo;
                addLineBreaksInTypeParameters(): boolean;
                forType(type: javax.lang.model.type.TypeMirror): HtmlLinkInfo;
                fragment(fragment: string): HtmlLinkInfo;
                getClassLinkLabel(configuration: doclets.toolkit.BaseConfiguration): doclets.toolkit.Content;
                getContext(): HtmlLinkInfo$Kind;
                getExecutableElement(): javax.lang.model.element.ExecutableElement;
                getFragment(): string;
                getLabel(): doclets.toolkit.Content;
                getStyle(): html.markup.HtmlStyle;
                getTargetMember(): javax.lang.model.element.Element;
                getType(): javax.lang.model.type.TypeMirror;
                getTypeElement(): javax.lang.model.element.TypeElement;
                isLinkable(): boolean;
                isSkipPreview(): boolean;
                isVarArg(): boolean;
                label(label: HtmlLinkInfo$charSequence): HtmlLinkInfo;
                label(label: doclets.toolkit.Content): HtmlLinkInfo;
                linkToSelf(linkToSelf: boolean): HtmlLinkInfo;
                linkToSelf(): boolean;
                linkTypeParameters(): boolean;
                _newContent(): doclets.toolkit.Content;
                _setContext(c: HtmlLinkInfo$Kind): void;
                setTypeElement(typeElement: javax.lang.model.element.TypeElement): void;
                showTypeBounds(showTypeBounds: boolean): void;
                showTypeBounds(): boolean;
                showTypeParameterAnnotations(showTypeParameterAnnotations: boolean): HtmlLinkInfo;
                showTypeParameterAnnotations(): boolean;
                showTypeParameters(): boolean;
                skipPreview(skipPreview: boolean): HtmlLinkInfo;
                style(style: html.markup.HtmlStyle): HtmlLinkInfo;
                targetMember(el: javax.lang.model.element.Element): HtmlLinkInfo;
                toString(): string;
                varargs(varargs: boolean): HtmlLinkInfo;
                _addLineBreakOpportunitiesInTypeParameters: boolean;
                _addLineBreaksInTypeParameters: boolean;
                _configuration: HtmlConfiguration;
                _context: HtmlLinkInfo$Kind;
                _executableElement: javax.lang.model.element.ExecutableElement;
                _fragment: string;
                _isVarArg: boolean;
                _label: doclets.toolkit.Content;
                _linkToSelf: boolean;
                _linkTypeParameters: boolean;
                _showTypeBounds: boolean;
                _showTypeParameterAnnotations: boolean;
                _skipPreview: boolean;
                _style: markup.HtmlStyle;
                _targetMember: javax.lang.model.element.Element;
                _type: javax.lang.model.type.TypeMirror;
                _typeElement: javax.lang.model.element.TypeElement;
              }
              interface HtmlLinkInfo extends CombineTypes<[_HtmlLinkInfo, java.lang.Object]> {}
              interface _HtmlLinkInfo$Kind$$static extends ClassLike {
                valueOf(name: string): HtmlLinkInfo$Kind;
                values(): HtmlLinkInfo$Kind[];
                readonly LINK_TYPE_PARAMS: HtmlLinkInfo$Kind;
                readonly LINK_TYPE_PARAMS_AND_BOUNDS: HtmlLinkInfo$Kind;
                readonly PLAIN: HtmlLinkInfo$Kind;
                readonly SHOW_PREVIEW: HtmlLinkInfo$Kind;
                readonly SHOW_TYPE_PARAMS: HtmlLinkInfo$Kind;
                readonly SHOW_TYPE_PARAMS_AND_BOUNDS: HtmlLinkInfo$Kind;
                readonly SHOW_TYPE_PARAMS_IN_LABEL: HtmlLinkInfo$Kind;
              }
              let HtmlLinkInfo$Kind: _HtmlLinkInfo$Kind$$static;
              interface _HtmlLinkInfo$Kind {
              }
              interface HtmlLinkInfo$Kind extends CombineTypes<[_HtmlLinkInfo$Kind]> {}
              interface _HtmlOptions$$static extends ClassLike {
                _new(config: HtmlConfiguration): HtmlOptions;
              }
              let HtmlOptions: _HtmlOptions$$static;
              interface _HtmlOptions {
                _additionalScripts(): java.util.List<string>;
                _additionalStylesheets(): java.util.List<string>;
                _bottom(): string;
                _charset(): string;
                classUse(): boolean;
                createIndex(): boolean;
                createOverview(): boolean;
                createTree(): boolean;
                _docTitle(): string;
                _doclintOpts(): java.util.List<string>;
                _docrootParent(): string;
                getSupportedOptions(): java.util.Set<doclets.toolkit.BaseOptions$Option>;
                _header(): string;
                helpFile(): string;
                legalNotices(): string;
                noDeprecatedList(): boolean;
                noExternalSpecsPage(): boolean;
                noHelp(): boolean;
                noNavbar(): boolean;
                _noOverview(): boolean;
                _overviewPath(): string;
                _packagesHeader(): string;
                _setCharset(charset: string): void;
                setCreateOverview(createOverview: boolean): void;
                splitIndex(): boolean;
                _stylesheetFile(): string;
                _top(): string;
                _validateOptions(): boolean;
                _windowTitle(): string;
                _additionalScripts: java.util.List<string>;
                _additionalStylesheets: java.util.List<string>;
                _bottom: string;
                _charset: string;
                _classUse: boolean;
                _config: HtmlConfiguration;
                _createIndex: boolean;
                _createOverview: boolean;
                _createTree: boolean;
                _docTitle: string;
                _doclintOpts: java.util.List<string>;
                _docrootParent: string;
                _header: string;
                _helpFile: string;
                _legalNotices: string;
                _noDeprecatedList: boolean;
                _noExternalSpecsPage: boolean;
                _noHelp: boolean;
                _noNavbar: boolean;
                _noOverview: boolean;
                _overviewPath: string;
                _packagesHeader: string;
                _splitIndex: boolean;
                _stylesheetFile: string;
                _top: string;
                _windowTitle: string;
              }
              interface HtmlOptions extends CombineTypes<[_HtmlOptions, jdk.javadoc.internal.doclets.toolkit.BaseOptions]> {}
              interface _HtmlSerialFieldWriter$$static extends ClassLike {
                new(writer: SubWriterHolderWriter, typeElement: javax.lang.model.element.TypeElement): HtmlSerialFieldWriter;
              }
              let HtmlSerialFieldWriter: _HtmlSerialFieldWriter$$static;
              interface _HtmlSerialFieldWriter {
                addMemberDeprecatedInfo(field: javax.lang.model.element.VariableElement, content: doclets.toolkit.Content): void;
                addMemberDescription(field: javax.lang.model.element.VariableElement, content: doclets.toolkit.Content): void;
                addMemberDescription(field: javax.lang.model.element.VariableElement, serialFieldTag: com.sun.source.doctree.SerialFieldTree, content: doclets.toolkit.Content): void;
                addMemberHeader(fieldType: javax.lang.model.type.TypeMirror, fieldName: string, content: doclets.toolkit.Content): void;
                addMemberTags(field: javax.lang.model.element.VariableElement, content: doclets.toolkit.Content): void;
                getFieldsContentHeader(isLastContent: boolean): doclets.toolkit.Content;
                getSerializableFields(heading: string, source: doclets.toolkit.Content): doclets.toolkit.Content;
                getSerializableFieldsHeader(): doclets.toolkit.Content;
                members(te: javax.lang.model.element.TypeElement): java.util.SortedSet<javax.lang.model.element.VariableElement>;
                shouldPrintOverview(field: javax.lang.model.element.VariableElement): boolean;
              }
              interface HtmlSerialFieldWriter extends CombineTypes<[_HtmlSerialFieldWriter, jdk.javadoc.internal.doclets.formats.html.FieldWriterImpl, jdk.javadoc.internal.doclets.toolkit.SerializedFormWriter$SerialFieldWriter]> {}
              interface _HtmlSerialMethodWriter$$static extends ClassLike {
                new(writer: SubWriterHolderWriter, typeElement: javax.lang.model.element.TypeElement): HtmlSerialMethodWriter;
              }
              let HtmlSerialMethodWriter: _HtmlSerialMethodWriter$$static;
              interface _HtmlSerialMethodWriter {
                addDeprecatedMemberInfo(member: javax.lang.model.element.ExecutableElement, methodsContent: doclets.toolkit.Content): void;
                addMemberDescription(member: javax.lang.model.element.ExecutableElement, methodsContent: doclets.toolkit.Content): void;
                addMemberHeader(member: javax.lang.model.element.ExecutableElement, methodsContent: doclets.toolkit.Content): void;
                addMemberTags(member: javax.lang.model.element.ExecutableElement, methodsContent: doclets.toolkit.Content): void;
                getMethodsContentHeader(isLastContent: boolean): doclets.toolkit.Content;
                getNoCustomizationMsg(msg: string): doclets.toolkit.Content;
                getSerializableMethods(heading: string, source: doclets.toolkit.Content): doclets.toolkit.Content;
                getSerializableMethodsHeader(): doclets.toolkit.Content;
              }
              interface HtmlSerialMethodWriter extends CombineTypes<[_HtmlSerialMethodWriter, jdk.javadoc.internal.doclets.formats.html.MethodWriterImpl, jdk.javadoc.internal.doclets.toolkit.SerializedFormWriter$SerialMethodWriter]> {}
              interface _IndexRedirectWriter$$static extends ClassLike {
                generate(configuration: HtmlConfiguration): void;
                generate(configuration: HtmlConfiguration, fileName: doclets.toolkit.util.DocPath, target: doclets.toolkit.util.DocPath): void;
              }
              let IndexRedirectWriter: _IndexRedirectWriter$$static;
              interface _IndexRedirectWriter {
                _generateIndexFile(): void;
                _target: doclets.toolkit.util.DocPath;
              }
              interface IndexRedirectWriter extends CombineTypes<[_IndexRedirectWriter, jdk.javadoc.internal.doclets.formats.html.HtmlDocletWriter]> {}
              interface _IndexWriter$$static extends ClassLike {
                generate(configuration: HtmlConfiguration): void;
                _new(configuration: HtmlConfiguration, path: doclets.toolkit.util.DocPath): IndexWriter;
              }
              let IndexWriter: _IndexWriter$$static;
              interface _IndexWriter {
                _addClassInfo(te: javax.lang.model.element.TypeElement, content: doclets.toolkit.Content): void;
                _addComment(element: javax.lang.model.element.Element, content: doclets.toolkit.Content): void;
                _addContents(ch: char, items: java.util.SortedSet<doclets.toolkit.util.IndexItem>, content: doclets.toolkit.Content): void;
                _addDescription(indexItem: doclets.toolkit.util.IndexItem, dl: doclets.toolkit.Content): void;
                _addElementDescription(item: doclets.toolkit.util.IndexItem, target: doclets.toolkit.Content): void;
                _addHeading(ch: char, content: doclets.toolkit.Content): void;
                _addLinksForIndexes(allFirstCharacters: java.util.List<IndexWriter$character>, content: doclets.toolkit.Content): void;
                _addMemberDesc(member: javax.lang.model.element.Element, enclosing: javax.lang.model.element.TypeElement, content: doclets.toolkit.Content): void;
                _addTagDescription(item: doclets.toolkit.util.IndexItem, target: doclets.toolkit.Content): void;
                _generateIndexFile(allFirstCharacters: java.util.List<IndexWriter$character>, displayFirstCharacters: java.util.List<IndexWriter$character>): void;
                _getVerticalSeparator(): doclets.toolkit.Content;
                _mainIndex: doclets.toolkit.util.IndexBuilder;
                _splitIndex: boolean;
              }
              interface IndexWriter extends CombineTypes<[_IndexWriter, jdk.javadoc.internal.doclets.formats.html.HtmlDocletWriter]> {}
              interface _MarkerComments$$static extends ClassLike {
                readonly END_OF_CLASS_DATA: markup.Comment;
                readonly END_OF_TOP_NAVBAR: markup.Comment;
                readonly START_OF_ANNOTATION_INTERFACE_DETAILS: markup.Comment;
                readonly START_OF_ANNOTATION_INTERFACE_OPTIONAL_MEMBER_SUMMARY: markup.Comment;
                readonly START_OF_ANNOTATION_INTERFACE_REQUIRED_MEMBER_SUMMARY: markup.Comment;
                readonly START_OF_ANNOTATION_TYPE_DETAILS: markup.Comment;
                readonly START_OF_ANNOTATION_TYPE_OPTIONAL_MEMBER_SUMMARY: markup.Comment;
                readonly START_OF_ANNOTATION_TYPE_REQUIRED_MEMBER_SUMMARY: markup.Comment;
                readonly START_OF_CLASS_DATA: markup.Comment;
                readonly START_OF_CONSTRUCTOR_DETAILS: markup.Comment;
                readonly START_OF_CONSTRUCTOR_SUMMARY: markup.Comment;
                readonly START_OF_ENUM_CONSTANT_DETAILS: markup.Comment;
                readonly START_OF_ENUM_CONSTANT_SUMMARY: markup.Comment;
                readonly START_OF_FIELD_DETAILS: markup.Comment;
                readonly START_OF_FIELD_SUMMARY: markup.Comment;
                readonly START_OF_METHOD_DETAILS: markup.Comment;
                readonly START_OF_METHOD_SUMMARY: markup.Comment;
                readonly START_OF_MODULES_SUMMARY: markup.Comment;
                readonly START_OF_MODULE_DESCRIPTION: markup.Comment;
                readonly START_OF_NESTED_CLASS_SUMMARY: markup.Comment;
                readonly START_OF_PACKAGES_SUMMARY: markup.Comment;
                readonly START_OF_PROPERTY_DETAILS: markup.Comment;
                readonly START_OF_PROPERTY_SUMMARY: markup.Comment;
                readonly START_OF_SERVICES_SUMMARY: markup.Comment;
                readonly START_OF_TOP_NAVBAR: markup.Comment;
                new(): MarkerComments;
              }
              let MarkerComments: _MarkerComments$$static;
              interface _MarkerComments {
              }
              interface MarkerComments extends CombineTypes<[_MarkerComments, java.lang.Object]> {}
              interface _MethodWriterImpl$$static extends ClassLike {
                _addImplementsInfo(writer: HtmlDocletWriter, method: javax.lang.model.element.ExecutableElement, methods: java.util.Collection<javax.lang.model.element.ExecutableElement>, dl: doclets.toolkit.Content): void;
                _addOverridden(writer: HtmlDocletWriter, overriddenType: javax.lang.model.type.TypeMirror, method: javax.lang.model.element.ExecutableElement, dl: doclets.toolkit.Content): void;
                new(writer: SubWriterHolderWriter, typeElement: javax.lang.model.element.TypeElement): MethodWriterImpl;
                new(writer: SubWriterHolderWriter): MethodWriterImpl;
              }
              let MethodWriterImpl: _MethodWriterImpl$$static;
              interface _MethodWriterImpl {
                addComments(holderType: javax.lang.model.type.TypeMirror, method: javax.lang.model.element.ExecutableElement, methodContent: doclets.toolkit.Content): void;
                addDeprecated(method: javax.lang.model.element.ExecutableElement, methodContent: doclets.toolkit.Content): void;
                addInheritedSummaryLabel(typeElement: javax.lang.model.element.TypeElement, content: doclets.toolkit.Content): void;
                addPreview(method: javax.lang.model.element.ExecutableElement, content: doclets.toolkit.Content): void;
                addSummary(summariesList: doclets.toolkit.Content, content: doclets.toolkit.Content): void;
                addSummaryLabel(content: doclets.toolkit.Content): void;
                _addSummaryType(member: javax.lang.model.element.Element, content: doclets.toolkit.Content): void;
                addTags(method: javax.lang.model.element.ExecutableElement, methodContent: doclets.toolkit.Content): void;
                _createSummaryTable(): Table<javax.lang.model.element.Element>;
                getMemberHeader(): doclets.toolkit.Content;
                getMemberSummaryHeader(typeElement: javax.lang.model.element.TypeElement, target: doclets.toolkit.Content): doclets.toolkit.Content;
                getMethodDetails(methodDetailsHeader: doclets.toolkit.Content, methodDetails: doclets.toolkit.Content): doclets.toolkit.Content;
                getMethodDetailsHeader(content: doclets.toolkit.Content): doclets.toolkit.Content;
                getMethodHeader(method: javax.lang.model.element.ExecutableElement): doclets.toolkit.Content;
                _getReturnType(method: javax.lang.model.element.ExecutableElement): doclets.toolkit.Content;
                getSignature(method: javax.lang.model.element.ExecutableElement): doclets.toolkit.Content;
                getSummaryTableHeader(member: javax.lang.model.element.Element): TableHeader;
              }
              interface MethodWriterImpl extends CombineTypes<[_MethodWriterImpl, jdk.javadoc.internal.doclets.toolkit.MemberSummaryWriter, jdk.javadoc.internal.doclets.formats.html.AbstractExecutableMemberWriter, jdk.javadoc.internal.doclets.toolkit.MethodWriter]> {}
              interface _ModuleIndexWriter$$static extends ClassLike {
                generate(configuration: HtmlConfiguration): void;
                new(configuration: HtmlConfiguration, filename: doclets.toolkit.util.DocPath): ModuleIndexWriter;
              }
              let ModuleIndexWriter: _ModuleIndexWriter$$static;
              interface _ModuleIndexWriter {
                _addIndex(target: doclets.toolkit.Content): void;
                _modules: java.util.SortedSet<javax.lang.model.element.ModuleElement>;
              }
              interface ModuleIndexWriter extends CombineTypes<[_ModuleIndexWriter, jdk.javadoc.internal.doclets.formats.html.AbstractOverviewIndexWriter]> {}
              interface _ModuleWriterImpl$$static extends ClassLike {
                new(configuration: HtmlConfiguration, mdle: javax.lang.model.element.ModuleElement): ModuleWriterImpl;
              }
              let ModuleWriterImpl: _ModuleWriterImpl$$static;
              interface _ModuleWriterImpl {
                addDeprecationInfo(div: doclets.toolkit.Content): void;
                addIndirectPackages(table: Table<any>, ip: java.util.Map<javax.lang.model.element.ModuleElement,java.util.SortedSet<javax.lang.model.element.PackageElement>>): void;
                addModuleContent(source: doclets.toolkit.Content): void;
                addModuleDescription(moduleContent: doclets.toolkit.Content): void;
                addModuleFooter(): void;
                addModuleSignature(moduleContent: doclets.toolkit.Content): void;
                _addModulesList(mdleMap: java.util.Map<javax.lang.model.element.ModuleElement,doclets.toolkit.Content>, table: Table<any>): void;
                addModulesSummary(summariesList: doclets.toolkit.Content): void;
                addPackageDeprecationInfo(li: doclets.toolkit.Content, pkg: javax.lang.model.element.PackageElement): void;
                addPackageSummary(li: html.markup.HtmlTree): void;
                addPackagesSummary(summariesList: doclets.toolkit.Content): void;
                addProvidesList(table: Table<any>): void;
                addServicesSummary(summariesList: doclets.toolkit.Content): void;
                addSummaryHeader(startMarker: doclets.toolkit.Content, heading: doclets.toolkit.Content, target: doclets.toolkit.Content): void;
                addUsesList(table: Table<any>): void;
                computeModulesData(): void;
                display(section: java.util.Set<javax.lang.model.element.Element>): boolean;
                display(section: java.util.Map<javax.lang.model.element.Element,any>): boolean;
                _displayServiceDirective(typeElement: javax.lang.model.element.TypeElement, tagsMap: java.util.Map<javax.lang.model.element.TypeElement,doclets.toolkit.Content>): boolean;
                _displayServices(typeElements: java.util.Set<javax.lang.model.element.TypeElement>, tagsMap: java.util.Map<javax.lang.model.element.TypeElement,doclets.toolkit.Content>): boolean;
                getContentHeader(): doclets.toolkit.Content;
                getModuleHeader(heading: string): doclets.toolkit.Content;
                _getNavBar(pageMode: Navigation$PageMode, element: javax.lang.model.element.Element): Navigation;
                _getPackageExportOpensTo(modules: java.util.Set<javax.lang.model.element.ModuleElement>): doclets.toolkit.Content;
                getSummariesList(): doclets.toolkit.Content;
                getSummary(source: doclets.toolkit.Content): doclets.toolkit.Content;
                _getTable2(caption: doclets.toolkit.Content, tableHeader: TableHeader): Table<any>;
                _getTable3(caption: doclets.toolkit.Content, tableHeader: TableHeader): Table<any>;
                _isConcealed(e: javax.lang.model.element.Element): boolean;
                _isExported(e: javax.lang.model.element.Element): boolean;
                isIndexable(): boolean;
                _isOpened(e: javax.lang.model.element.Element): boolean;
                printDocument(content: doclets.toolkit.Content): void;
                shouldDocument(element: javax.lang.model.element.Element): boolean;
                _bodyContents: markup.BodyContents;
                _indirectModules: java.util.Map<javax.lang.model.element.ModuleElement,doclets.toolkit.Content>;
                _indirectOpenPackages: java.util.Map<javax.lang.model.element.ModuleElement,java.util.SortedSet<javax.lang.model.element.PackageElement>>;
                _indirectPackages: java.util.Map<javax.lang.model.element.ModuleElement,java.util.SortedSet<javax.lang.model.element.PackageElement>>;
                _mdle: javax.lang.model.element.ModuleElement;
                _moduleMode: javadoc.doclet.DocletEnvironment$ModuleMode;
                _packages: java.util.Map<javax.lang.model.element.PackageElement,ModuleWriterImpl$PackageEntry>;
                _provides: java.util.Map<javax.lang.model.element.TypeElement,java.util.SortedSet<javax.lang.model.element.TypeElement>>;
                _providesTrees: java.util.Map<javax.lang.model.element.TypeElement,doclets.toolkit.Content>;
                _requires: java.util.Map<javax.lang.model.element.ModuleElement,doclets.toolkit.Content>;
                _uses: java.util.SortedSet<javax.lang.model.element.TypeElement>;
                _usesTrees: java.util.Map<javax.lang.model.element.TypeElement,doclets.toolkit.Content>;
              }
              interface ModuleWriterImpl extends CombineTypes<[_ModuleWriterImpl, jdk.javadoc.internal.doclets.formats.html.HtmlDocletWriter, jdk.javadoc.internal.doclets.toolkit.ModuleSummaryWriter]> {}
              interface _ModuleWriterImpl$PackageEntry$$static extends ClassLike {
                _new(this$0: ModuleWriterImpl): ModuleWriterImpl$PackageEntry;
              }
              let ModuleWriterImpl$PackageEntry: _ModuleWriterImpl$PackageEntry$$static;
              interface _ModuleWriterImpl$PackageEntry {
                _exportedTo: java.util.Set<javax.lang.model.element.ModuleElement>;
                _openedTo: java.util.Set<javax.lang.model.element.ModuleElement>;
              }
              interface ModuleWriterImpl$PackageEntry extends CombineTypes<[_ModuleWriterImpl$PackageEntry, java.lang.Object]> {}
              interface _Navigation$$static extends ClassLike {
                new(element: javax.lang.model.element.Element, configuration: HtmlConfiguration, page: Navigation$PageMode, path: doclets.toolkit.util.DocPath): Navigation;
              }
              let Navigation: _Navigation$$static;
              interface _Navigation {
                _addActivePageLink(target: doclets.toolkit.Content, label: doclets.toolkit.Content, display: boolean): void;
                _addContentToList(listContents: java.util.List<doclets.toolkit.Content>, source: doclets.toolkit.Content): void;
                _addDeprecatedLink(target: doclets.toolkit.Content): void;
                _addDetailLinks(target: doclets.toolkit.Content, nested: boolean): void;
                _addHelpLink(target: doclets.toolkit.Content): void;
                _addIndexLink(target: doclets.toolkit.Content): void;
                _addItemToList(list: doclets.toolkit.Content, item: doclets.toolkit.Content): void;
                _addListToNav(listContents: java.util.List<doclets.toolkit.Content>, target: doclets.toolkit.Content): void;
                _addMainNavLinks(target: doclets.toolkit.Content): void;
                _addModuleLink(target: doclets.toolkit.Content): void;
                _addModuleOfElementLink(target: doclets.toolkit.Content): void;
                _addNewLink(target: doclets.toolkit.Content): void;
                _addOverviewLink(target: doclets.toolkit.Content): void;
                _addPackageLink(target: doclets.toolkit.Content): void;
                _addPackageOfElementLink(target: doclets.toolkit.Content): void;
                _addPackageSummaryLink(target: doclets.toolkit.Content): void;
                _addPageLabel(target: doclets.toolkit.Content, label: doclets.toolkit.Content, display: boolean): void;
                _addPreviewLink(target: doclets.toolkit.Content): void;
                _addSearch(target: doclets.toolkit.Content): void;
                _addSummaryLinks(target: doclets.toolkit.Content, nested: boolean): void;
                _addTreeLink(target: doclets.toolkit.Content): void;
                _addTypeDetailLink(kind: doclets.toolkit.util.VisibleMemberTable$Kind, link: boolean, listContents: java.util.List<doclets.toolkit.Content>): void;
                getContent(): doclets.toolkit.Content;
                setNavLinkClass(navLinkClass: doclets.toolkit.Content): Navigation;
                setNavLinkModule(navLinkModule: doclets.toolkit.Content): Navigation;
                setNavLinkPackage(navLinkPackage: doclets.toolkit.Content): Navigation;
                setSubNavLinks(subNavLinks: Navigation$SubNavLinks): Navigation;
                setUserHeader(userHeader: doclets.toolkit.Content): Navigation;
                _configuration: HtmlConfiguration;
                _contents: Contents;
                _documentedPage: Navigation$PageMode;
                _element: javax.lang.model.element.Element;
                _htmlIds: HtmlIds;
                _links: markup.Links;
                _navLinkClass: doclets.toolkit.Content;
                _navLinkModule: doclets.toolkit.Content;
                _navLinkPackage: doclets.toolkit.Content;
                _options: HtmlOptions;
                _path: doclets.toolkit.util.DocPath;
                _pathToRoot: doclets.toolkit.util.DocPath;
                _rowListTitle: string;
                _searchLabel: doclets.toolkit.Content;
                _searchPlaceholder: string;
                _subNavLinks: Navigation$SubNavLinks;
                _userHeader: doclets.toolkit.Content;
              }
              interface Navigation extends CombineTypes<[_Navigation, java.lang.Object]> {}
              interface _Navigation$PageMode$$static extends ClassLike {
                valueOf(name: string): Navigation$PageMode;
                values(): Navigation$PageMode[];
                readonly ALL_CLASSES: Navigation$PageMode;
                readonly ALL_PACKAGES: Navigation$PageMode;
                readonly CLASS: Navigation$PageMode;
                readonly CONSTANT_VALUES: Navigation$PageMode;
                readonly DEPRECATED: Navigation$PageMode;
                readonly DOC_FILE: Navigation$PageMode;
                readonly EXTERNAL_SPECS: Navigation$PageMode;
                readonly HELP: Navigation$PageMode;
                readonly INDEX: Navigation$PageMode;
                readonly MODULE: Navigation$PageMode;
                readonly NEW: Navigation$PageMode;
                readonly OVERVIEW: Navigation$PageMode;
                readonly PACKAGE: Navigation$PageMode;
                readonly PREVIEW: Navigation$PageMode;
                readonly SEARCH: Navigation$PageMode;
                readonly SERIALIZED_FORM: Navigation$PageMode;
                readonly SYSTEM_PROPERTIES: Navigation$PageMode;
                readonly TREE: Navigation$PageMode;
                readonly USE: Navigation$PageMode;
              }
              let Navigation$PageMode: _Navigation$PageMode$$static;
              interface _Navigation$PageMode {
              }
              interface Navigation$PageMode extends CombineTypes<[_Navigation$PageMode]> {}
              interface _Navigation$SubNavLinks$$static extends ClassLike {
              }
              let Navigation$SubNavLinks: _Navigation$SubNavLinks$$static;
              interface _Navigation$SubNavLinks {
                getSubNavLinks(): java.util.List<doclets.toolkit.Content>;
(): java.util.List<doclets.toolkit.Content>;
              }
              interface Navigation$SubNavLinks extends CombineTypes<[_Navigation$SubNavLinks, java.lang.Object]> {}
              interface _NestedClassWriterImpl$$static extends ClassLike {
                new(writer: SubWriterHolderWriter, typeElement: javax.lang.model.element.TypeElement): NestedClassWriterImpl;
                new(writer: SubWriterHolderWriter): NestedClassWriterImpl;
              }
              let NestedClassWriterImpl: _NestedClassWriterImpl$$static;
              interface _NestedClassWriterImpl {
                addInheritedSummaryLabel(typeElement: javax.lang.model.element.TypeElement, content: doclets.toolkit.Content): void;
                _addInheritedSummaryLink(typeElement: javax.lang.model.element.TypeElement, member: javax.lang.model.element.Element, target: doclets.toolkit.Content): void;
                addSummary(summariesList: doclets.toolkit.Content, content: doclets.toolkit.Content): void;
                addSummaryLabel(content: doclets.toolkit.Content): void;
                _addSummaryLink(context: HtmlLinkInfo$Kind, typeElement: javax.lang.model.element.TypeElement, member: javax.lang.model.element.Element, content: doclets.toolkit.Content): void;
                _addSummaryLink(typeElement: javax.lang.model.element.TypeElement, member: javax.lang.model.element.Element, content: doclets.toolkit.Content): void;
                _addSummaryType(member: javax.lang.model.element.Element, content: doclets.toolkit.Content): void;
                _createSummaryTable(): Table<javax.lang.model.element.Element>;
                getMemberSummaryHeader(typeElement: javax.lang.model.element.TypeElement, content: doclets.toolkit.Content): doclets.toolkit.Content;
                _getSummaryLink(member: javax.lang.model.element.Element): doclets.toolkit.Content;
                getSummaryTableHeader(member: javax.lang.model.element.Element): TableHeader;
              }
              interface NestedClassWriterImpl extends CombineTypes<[_NestedClassWriterImpl, jdk.javadoc.internal.doclets.toolkit.MemberSummaryWriter, jdk.javadoc.internal.doclets.formats.html.AbstractMemberWriter]> {}
              interface _NewAPIListWriter$$static extends ClassLike {
                generate(configuration: HtmlConfiguration): void;
                _getHeading(configuration: HtmlConfiguration): string;
                new(configuration: HtmlConfiguration, filename: doclets.toolkit.util.DocPath): NewAPIListWriter;
              }
              let NewAPIListWriter: _NewAPIListWriter$$static;
              interface _NewAPIListWriter {
                _addComments(e: javax.lang.model.element.Element, desc: doclets.toolkit.Content): void;
                _addContentSelectors(content: doclets.toolkit.Content): void;
                _addTableTabs(table: Table<javax.lang.model.element.Element>, headingKey: string): void;
                _getColumnStyles(): html.markup.HtmlStyle[];
                _getExtraContent(element: javax.lang.model.element.Element): doclets.toolkit.Content;
                _getSinceTree(element: javax.lang.model.element.Element): java.util.List<com.sun.source.doctree.DocTree>;
                _getTableCaption(headingKey: string): doclets.toolkit.Content;
                _getTableHeader(headerKey: string): TableHeader;
              }
              interface NewAPIListWriter extends CombineTypes<[_NewAPIListWriter, SummaryListWriter<doclets.toolkit.util.NewAPIBuilder>]> {}
              interface _PackageIndexWriter$$static extends ClassLike {
                generate(configuration: HtmlConfiguration): void;
                new(configuration: HtmlConfiguration, filename: doclets.toolkit.util.DocPath): PackageIndexWriter;
              }
              let PackageIndexWriter: _PackageIndexWriter$$static;
              interface _PackageIndexWriter {
                _addIndex(target: doclets.toolkit.Content): void;
                _packages: java.util.SortedSet<javax.lang.model.element.PackageElement>;
              }
              interface PackageIndexWriter extends CombineTypes<[_PackageIndexWriter, jdk.javadoc.internal.doclets.formats.html.AbstractOverviewIndexWriter]> {}
              interface _PackageTreeWriter$$static extends ClassLike {
                generate(configuration: HtmlConfiguration, pkg: javax.lang.model.element.PackageElement, noDeprecated: boolean): void;
                new(configuration: HtmlConfiguration, path: doclets.toolkit.util.DocPath, packageElement: javax.lang.model.element.PackageElement): PackageTreeWriter;
              }
              let PackageTreeWriter: _PackageTreeWriter$$static;
              interface _PackageTreeWriter {
                _addLinkToAllPackages(target: doclets.toolkit.Content): void;
                _generatePackageTreeFile(): void;
                _getNavBar(pageMode: Navigation$PageMode, element: javax.lang.model.element.Element): Navigation;
                _getPackageTreeHeader(): html.markup.HtmlTree;
                _bodyContents: markup.BodyContents;
                _packageElement: javax.lang.model.element.PackageElement;
              }
              interface PackageTreeWriter extends CombineTypes<[_PackageTreeWriter, jdk.javadoc.internal.doclets.formats.html.AbstractTreeWriter]> {}
              interface _PackageUseWriter$$static extends ClassLike {
                generate(configuration: HtmlConfiguration, mapper: doclets.toolkit.util.ClassUseMapper, pkgElement: javax.lang.model.element.PackageElement): void;
                new(configuration: HtmlConfiguration, mapper: doclets.toolkit.util.ClassUseMapper, filename: doclets.toolkit.util.DocPath, pkgElement: javax.lang.model.element.PackageElement): PackageUseWriter;
              }
              let PackageUseWriter: _PackageUseWriter$$static;
              interface _PackageUseWriter {
                _addClassList(content: doclets.toolkit.Content): void;
                _addPackageList(content: doclets.toolkit.Content): void;
                _addPackageUse(content: doclets.toolkit.Content): void;
                _generatePackageUseFile(): void;
                _getBody(): html.markup.HtmlTree;
                _getNavBar(pageMode: Navigation$PageMode, element: javax.lang.model.element.Element): Navigation;
                _packageElement: javax.lang.model.element.PackageElement;
                _usingPackageToUsedClasses: java.util.SortedMap<string,java.util.Set<javax.lang.model.element.TypeElement>>;
              }
              interface PackageUseWriter extends CombineTypes<[_PackageUseWriter, jdk.javadoc.internal.doclets.formats.html.SubWriterHolderWriter]> {}
              interface _PackageWriterImpl$$static extends ClassLike {
                _MAX_SIBLING_PACKAGES: int;
                _MAX_SUBPACKAGES: int;
                new(configuration: HtmlConfiguration, packageElement: javax.lang.model.element.PackageElement): PackageWriterImpl;
              }
              let PackageWriterImpl: _PackageWriterImpl$$static;
              interface _PackageWriterImpl {
                addAllClassesAndInterfacesSummary(target: doclets.toolkit.Content): void;
                addDeprecationInfo(div: doclets.toolkit.Content): void;
                addPackageContent(packageContent: doclets.toolkit.Content): void;
                addPackageDescription(packageContent: doclets.toolkit.Content): void;
                addPackageFooter(): void;
                addPackageSignature(packageContent: doclets.toolkit.Content): void;
                addPackageSummary(packages: java.util.List<javax.lang.model.element.PackageElement>, label: doclets.toolkit.Content, tableHeader: TableHeader, summaryContent: doclets.toolkit.Content, showModules: boolean): void;
                addPackageTags(packageContent: doclets.toolkit.Content): void;
                addRelatedPackagesSummary(summaryContent: doclets.toolkit.Content): void;
                _computePackageData(): void;
                _filterClasses(types: java.util.SortedSet<javax.lang.model.element.TypeElement>): java.util.SortedSet<javax.lang.model.element.TypeElement>;
                _filterPackages(filter: java.util.function.Predicate<javax.lang.model.element.PackageElement>): java.util.List<javax.lang.model.element.PackageElement>;
                _findRelatedPackages(): java.util.List<javax.lang.model.element.PackageElement>;
                getContentHeader(): doclets.toolkit.Content;
                _getNavBar(pageMode: Navigation$PageMode, element: javax.lang.model.element.Element): Navigation;
                getPackageHeader(): doclets.toolkit.Content;
                getPackageSummary(summaryContent: doclets.toolkit.Content): doclets.toolkit.Content;
                getSummariesList(): doclets.toolkit.Content;
                _hasRelatedPackagesInOtherModules(relatedPackages: java.util.List<javax.lang.model.element.PackageElement>): boolean;
                isIndexable(): boolean;
                printDocument(content: doclets.toolkit.Content): void;
                _allClasses: java.util.SortedSet<javax.lang.model.element.TypeElement>;
                _bodyContents: markup.BodyContents;
                _packageElement: javax.lang.model.element.PackageElement;
                _relatedPackages: java.util.List<javax.lang.model.element.PackageElement>;
                _section: markup.HtmlTree;
              }
              interface PackageWriterImpl extends CombineTypes<[_PackageWriterImpl, jdk.javadoc.internal.doclets.toolkit.PackageSummaryWriter, jdk.javadoc.internal.doclets.formats.html.HtmlDocletWriter]> {}
              interface _PreviewListWriter$$static extends ClassLike {
                generate(configuration: HtmlConfiguration): void;
                new(configuration: HtmlConfiguration, filename: doclets.toolkit.util.DocPath): PreviewListWriter;
              }
              let PreviewListWriter: _PreviewListWriter$$static;
              interface _PreviewListWriter {
                _addComments(e: javax.lang.model.element.Element, desc: doclets.toolkit.Content): void;
                _addContentSelectors(target: doclets.toolkit.Content): void;
                _addTableTabs(table: Table<javax.lang.model.element.Element>, headingKey: string): void;
                _getColumnStyles(): html.markup.HtmlStyle[];
                _getExtraContent(element: javax.lang.model.element.Element): doclets.toolkit.Content;
                _getTableHeader(headerKey: string): TableHeader;
              }
              interface PreviewListWriter extends CombineTypes<[_PreviewListWriter, SummaryListWriter<doclets.toolkit.util.PreviewAPIListBuilder>]> {}
              interface _PropertyWriterImpl$$static extends ClassLike {
                new(writer: SubWriterHolderWriter, typeElement: javax.lang.model.element.TypeElement): PropertyWriterImpl;
              }
              let PropertyWriterImpl: _PropertyWriterImpl$$static;
              interface _PropertyWriterImpl {
                addComments(property: javax.lang.model.element.ExecutableElement, propertyContent: doclets.toolkit.Content): void;
                addDeprecated(property: javax.lang.model.element.ExecutableElement, propertyContent: doclets.toolkit.Content): void;
                addInheritedSummaryLabel(typeElement: javax.lang.model.element.TypeElement, content: doclets.toolkit.Content): void;
                _addInheritedSummaryLink(typeElement: javax.lang.model.element.TypeElement, member: javax.lang.model.element.Element, target: doclets.toolkit.Content): void;
                addPreview(property: javax.lang.model.element.ExecutableElement, content: doclets.toolkit.Content): void;
                addSummary(summariesList: doclets.toolkit.Content, content: doclets.toolkit.Content): void;
                addSummaryLabel(content: doclets.toolkit.Content): void;
                _addSummaryLink(context: HtmlLinkInfo$Kind, typeElement: javax.lang.model.element.TypeElement, member: javax.lang.model.element.Element, content: doclets.toolkit.Content): void;
                _addSummaryType(member: javax.lang.model.element.Element, content: doclets.toolkit.Content): void;
                addTags(property: javax.lang.model.element.ExecutableElement, propertyContent: doclets.toolkit.Content): void;
                _createSummaryTable(): Table<javax.lang.model.element.Element>;
                getMemberSummaryHeader(typeElement: javax.lang.model.element.TypeElement, content: doclets.toolkit.Content): doclets.toolkit.Content;
                getPropertyDetails(memberDetailsHeader: doclets.toolkit.Content, memberDetails: doclets.toolkit.Content): doclets.toolkit.Content;
                getPropertyDetailsHeader(memberDetails: doclets.toolkit.Content): doclets.toolkit.Content;
                getPropertyHeaderContent(property: javax.lang.model.element.ExecutableElement): doclets.toolkit.Content;
                getSignature(property: javax.lang.model.element.ExecutableElement): doclets.toolkit.Content;
                _getSummaryLink(member: javax.lang.model.element.Element): doclets.toolkit.Content;
                getSummaryTableHeader(member: javax.lang.model.element.Element): TableHeader;
              }
              interface PropertyWriterImpl extends CombineTypes<[_PropertyWriterImpl, jdk.javadoc.internal.doclets.toolkit.MemberSummaryWriter, jdk.javadoc.internal.doclets.formats.html.AbstractMemberWriter, jdk.javadoc.internal.doclets.toolkit.PropertyWriter]> {}
              interface _SearchWriter$$static extends ClassLike {
                generate(configuration: HtmlConfiguration): void;
                new(configuration: HtmlConfiguration, filename: doclets.toolkit.util.DocPath): SearchWriter;
              }
              let SearchWriter: _SearchWriter$$static;
              interface _SearchWriter {
                _addSearchFileContents(contentTree: doclets.toolkit.Content): void;
                _generateSearchFile(): void;
              }
              interface SearchWriter extends CombineTypes<[_SearchWriter, jdk.javadoc.internal.doclets.formats.html.HtmlDocletWriter]> {}
              interface _SerializedFormWriterImpl$$static extends ClassLike {
                new(configuration: HtmlConfiguration): SerializedFormWriterImpl;
              }
              let SerializedFormWriterImpl: _SerializedFormWriterImpl$$static;
              interface _SerializedFormWriterImpl {
                addFooter(): void;
                addPackageSerialized(serializedSummaries: doclets.toolkit.Content, packageSerialized: doclets.toolkit.Content): void;
                addSerialUIDInfo(header: string, serialUID: string, target: doclets.toolkit.Content): void;
                addSerializedContent(source: doclets.toolkit.Content): void;
                getClassContentHeader(): doclets.toolkit.Content;
                getClassHeader(typeElement: javax.lang.model.element.TypeElement): doclets.toolkit.Content;
                getClassSerializedHeader(): doclets.toolkit.Content;
                getHeader(header: string): doclets.toolkit.Content;
                getPackageHeader(packageElement: javax.lang.model.element.PackageElement): doclets.toolkit.Content;
                getPackageSerializedHeader(): doclets.toolkit.Content;
                getSerialFieldWriter(typeElement: javax.lang.model.element.TypeElement): doclets.toolkit.SerializedFormWriter$SerialFieldWriter;
                getSerialMethodWriter(typeElement: javax.lang.model.element.TypeElement): doclets.toolkit.SerializedFormWriter$SerialMethodWriter;
                getSerialUIDInfoHeader(): doclets.toolkit.Content;
                getSerializedSummariesHeader(): doclets.toolkit.Content;
                isVisibleClass(typeElement: javax.lang.model.element.TypeElement): boolean;
                printDocument(source: doclets.toolkit.Content): void;
                _visibleClasses: java.util.Set<javax.lang.model.element.TypeElement>;
              }
              interface SerializedFormWriterImpl extends CombineTypes<[_SerializedFormWriterImpl, jdk.javadoc.internal.doclets.formats.html.SubWriterHolderWriter, jdk.javadoc.internal.doclets.toolkit.SerializedFormWriter]> {}
              interface _Signatures$$static extends ClassLike {
                getModuleSignature(mdle: javax.lang.model.element.ModuleElement, moduleWriter: ModuleWriterImpl): doclets.toolkit.Content;
                getPackageSignature(pkg: javax.lang.model.element.PackageElement, pkgWriter: PackageWriterImpl): doclets.toolkit.Content;
                new(): Signatures;
              }
              let Signatures: _Signatures$$static;
              interface _Signatures {
              }
              interface Signatures extends CombineTypes<[_Signatures, java.lang.Object]> {}
              interface _Signatures$MemberSignature$$static extends ClassLike {
                _RETURN_TYPE_MAX_LINE_LENGTH: int;
                _TYPE_PARAMS_MAX_INLINE_LENGTH: int;
                _new(element: javax.lang.model.element.Element, memberWriter: AbstractMemberWriter): Signatures$MemberSignature;
              }
              let Signatures$MemberSignature: _Signatures$MemberSignature$$static;
              interface _Signatures$MemberSignature {
                _appendModifiers(target: doclets.toolkit.Content): void;
                _appendParametersAndExceptions(target: doclets.toolkit.Content, lastLineSeparator: int): void;
                _appendTypeParameters(target: doclets.toolkit.Content, lastLineSeparator: int): int;
                _setAnnotations(content: doclets.toolkit.Content): Signatures$MemberSignature;
                _setExceptions(content: doclets.toolkit.Content): Signatures$MemberSignature;
                _setParameters(content: doclets.toolkit.Content): Signatures$MemberSignature;
                _setReturnType(returnType: doclets.toolkit.Content): Signatures$MemberSignature;
                _setType(type: javax.lang.model.type.TypeMirror): Signatures$MemberSignature;
                _setTypeParameters(typeParameters: doclets.toolkit.Content): Signatures$MemberSignature;
                _toContent(): doclets.toolkit.Content;
                _annotations: doclets.toolkit.Content;
                _element: javax.lang.model.element.Element;
                _exceptions: doclets.toolkit.Content;
                _memberWriter: AbstractMemberWriter;
                _parameters: doclets.toolkit.Content;
                _returnType: doclets.toolkit.Content;
                _typeParameters: doclets.toolkit.Content;
                _utils: doclets.toolkit.util.Utils;
              }
              interface Signatures$MemberSignature extends CombineTypes<[_Signatures$MemberSignature, java.lang.Object]> {}
              interface _Signatures$TypeSignature$$static extends ClassLike {
                _previewModifiers: java.util.Set<string>;
                _new(typeElement: javax.lang.model.element.TypeElement, writer: HtmlDocletWriter): Signatures$TypeSignature;
              }
              let Signatures$TypeSignature: _Signatures$TypeSignature$$static;
              interface _Signatures$TypeSignature {
                _getModifiers(): java.util.List<string>;
                _getRecordComponents(): doclets.toolkit.Content;
                _markPreviewModifiers(modifiers: java.util.List<string>): doclets.toolkit.Content;
                setModifiers(modifiers: doclets.toolkit.Content): Signatures$TypeSignature;
                toContent(): doclets.toolkit.Content;
                _configuration: HtmlConfiguration;
                _modifiers: doclets.toolkit.Content;
                _typeElement: javax.lang.model.element.TypeElement;
                _utils: doclets.toolkit.util.Utils;
                _writer: HtmlDocletWriter;
              }
              interface Signatures$TypeSignature extends CombineTypes<[_Signatures$TypeSignature, java.lang.Object]> {}
              interface _SourceToHTMLConverter$$static extends ClassLike {
                _addBlankLines(pre: doclets.toolkit.Content): void;
                _addLineNo(pre: doclets.toolkit.Content, lineno: int): void;
                convertRoot(configuration: HtmlConfiguration, outputdir: doclets.toolkit.util.DocPath): void;
                getAnchorName(utils: doclets.toolkit.util.Utils, e: javax.lang.model.element.Element): html.markup.HtmlId;
                _getHeader(): doclets.toolkit.Content;
                _NEW_LINE: string;
                _NUM_BLANK_LINES: int;
              }
              let SourceToHTMLConverter: _SourceToHTMLConverter$$static;
              interface _SourceToHTMLConverter {
                _addLine(pre: html.markup.HtmlTree, line: string, currentLineNo: int): void;
                addStyleSheetProperties(head: doclets.toolkit.Content): void;
                _addStylesheets(head: doclets.toolkit.Content): void;
                convertClass(te: javax.lang.model.element.TypeElement, outputdir: doclets.toolkit.util.DocPath): void;
                convertModule(mdl: javax.lang.model.element.ModuleElement, outputdir: doclets.toolkit.util.DocPath): void;
                convertPackage(pkg: javax.lang.model.element.PackageElement, outputdir: doclets.toolkit.util.DocPath): void;
                _generate(): void;
                _writeToFile(body: doclets.toolkit.Content, path: doclets.toolkit.util.DocPath, te: javax.lang.model.element.TypeElement): void;
                _configuration: HtmlConfiguration;
                _messages: doclets.toolkit.Messages;
                _options: HtmlOptions;
                _outputdir: doclets.toolkit.util.DocPath;
                _relativePath: doclets.toolkit.util.DocPath;
                _resources: doclets.toolkit.Resources;
                _utils: doclets.toolkit.util.Utils;
              }
              interface SourceToHTMLConverter extends CombineTypes<[_SourceToHTMLConverter, java.lang.Object]> {}
              interface _SubWriterHolderWriter$$static extends ClassLike {
                new(configuration: HtmlConfiguration, filename: doclets.toolkit.util.DocPath): SubWriterHolderWriter;
              }
              let SubWriterHolderWriter: _SubWriterHolderWriter$$static;
              interface _SubWriterHolderWriter {
                addAnnotationContent(source: doclets.toolkit.Content): void;
                addClassContent(source: doclets.toolkit.Content): void;
                _addIndexComment(member: javax.lang.model.element.Element, content: doclets.toolkit.Content): void;
                _addIndexComment(member: javax.lang.model.element.Element, firstSentenceTags: java.util.List<com.sun.source.doctree.DocTree>, tdSummaryContent: doclets.toolkit.Content): void;
                addInheritedMemberSummary(mw: AbstractMemberWriter, typeElement: javax.lang.model.element.TypeElement, member: javax.lang.model.element.Element, isFirst: boolean, linksContent: doclets.toolkit.Content): void;
                addInheritedSummaryHeader(mw: AbstractMemberWriter, typeElement: javax.lang.model.element.TypeElement, inheritedContent: doclets.toolkit.Content): void;
                addSummary(style: html.markup.HtmlStyle, htmlId: html.markup.HtmlId, target: doclets.toolkit.Content, source: doclets.toolkit.Content): void;
                addSummaryHeader(mw: AbstractMemberWriter, memberContent: doclets.toolkit.Content): void;
                addSummaryLinkComment(member: javax.lang.model.element.Element, content: doclets.toolkit.Content): void;
                addSummaryLinkComment(member: javax.lang.model.element.Element, firstSentenceTags: java.util.List<com.sun.source.doctree.DocTree>, tdSummaryContent: doclets.toolkit.Content): void;
                getContentHeader(): doclets.toolkit.Content;
                getDetailsList(): doclets.toolkit.Content;
                getDetailsListItem(content: doclets.toolkit.Content): doclets.toolkit.Content;
                getMember(content: doclets.toolkit.Content): doclets.toolkit.Content;
                getMember(id: html.markup.HtmlId, style: html.markup.HtmlStyle, source: doclets.toolkit.Content): doclets.toolkit.Content;
                getMemberDetailsContent(content: doclets.toolkit.Content): doclets.toolkit.Content;
                getMemberHeader(): doclets.toolkit.Content;
                getMemberInherited(): doclets.toolkit.Content;
                getMemberList(): doclets.toolkit.Content;
                getMemberListItem(member: doclets.toolkit.Content): doclets.toolkit.Content;
                getMemberSummary(memberContent: doclets.toolkit.Content): doclets.toolkit.Content;
                getSummariesList(): doclets.toolkit.Content;
                getSummariesListItem(content: doclets.toolkit.Content): doclets.toolkit.Content;
                _bodyContents: markup.BodyContents;
              }
              interface SubWriterHolderWriter extends CombineTypes<[_SubWriterHolderWriter, jdk.javadoc.internal.doclets.formats.html.HtmlDocletWriter]> {}
              interface _SummaryListWriter$$static<B> extends ClassLike {
                new(configuration: HtmlConfiguration, filename: doclets.toolkit.util.DocPath, builder: B): SummaryListWriter<B>;
              }
              let SummaryListWriter: _SummaryListWriter$$static<B>;
              interface _SummaryListWriter<B> {
                _addComments(e: javax.lang.model.element.Element, desc: doclets.toolkit.Content): void;
                _addContentSelectors(a0: doclets.toolkit.Content): void;
                _addExtraIndexLink(target: doclets.toolkit.Content): void;
                _addExtraSection(target: doclets.toolkit.Content): void;
                _addIndexLink(id: html.markup.HtmlId, headingKey: string, content: doclets.toolkit.Content): void;
                _addSummaryAPI(apiList: java.util.SortedSet<javax.lang.model.element.Element>, id: html.markup.HtmlId, headingKey: string, headerKey: string, content: doclets.toolkit.Content): void;
                _addTableTabs(a0: Table<javax.lang.model.element.Element>, a1: string): void;
                _generateSummaryListFile(pageMode: Navigation$PageMode, description: string, headContent: doclets.toolkit.Content, titleKey: string): void;
                _getColumnStyles(): html.markup.HtmlStyle[];
                getContentsList(): doclets.toolkit.Content;
                _getExtraContent(a0: javax.lang.model.element.Element): doclets.toolkit.Content;
                getHeader(pageMode: Navigation$PageMode, titleKey: string): html.markup.HtmlTree;
                _getHeaderKey(kind: doclets.toolkit.util.SummaryAPIListBuilder$SummaryElementKind): string;
                _getHeadingKey(kind: doclets.toolkit.util.SummaryAPIListBuilder$SummaryElementKind): string;
                _getSummaryLink(e: javax.lang.model.element.Element): doclets.toolkit.Content;
                _getTableCaption(headingKey: string): doclets.toolkit.Content;
                _getTableHeader(headerKey: string): TableHeader;
                _builder: B;
              }
              interface SummaryListWriter<B> extends CombineTypes<[_SummaryListWriter<B>, SubWriterHolderWriter]> {}
              interface _SystemPropertiesWriter$$static extends ClassLike {
                generate(configuration: HtmlConfiguration): void;
                _generate(configuration: HtmlConfiguration, fileName: doclets.toolkit.util.DocPath): void;
                new(configuration: HtmlConfiguration, filename: doclets.toolkit.util.DocPath): SystemPropertiesWriter;
              }
              let SystemPropertiesWriter: _SystemPropertiesWriter$$static;
              interface _SystemPropertiesWriter {
                _addSystemProperties(target: doclets.toolkit.Content): void;
                _buildSystemPropertiesPage(): void;
                _createLink(i: doclets.toolkit.util.IndexItem): doclets.toolkit.Content;
                _groupSystemProperties(): java.util.Map<string,java.util.List<doclets.toolkit.util.IndexItem>>;
                _titles: java.util.Map<javax.lang.model.element.Element,string>;
              }
              interface SystemPropertiesWriter extends CombineTypes<[_SystemPropertiesWriter, jdk.javadoc.internal.doclets.formats.html.HtmlDocletWriter]> {}
              interface _Table$$static<T> extends ClassLike {
                new(tableStyle: html.markup.HtmlStyle): Table<T>;
              }
              let Table: _Table$$static<T>;
              interface _Table<T> {
                addRow(contents: doclets.toolkit.Content[]): void;
                addRow(...contents: doclets.toolkit.Content[]): void;
                addRow(contents: java.util.List<doclets.toolkit.Content>): void;
                addRow(item: T, contents: doclets.toolkit.Content[]): void;
                addRow(item: T, ...contents: doclets.toolkit.Content[]): void;
                addRow(item: T, contents: java.util.List<doclets.toolkit.Content>): void;
                addTab(label: doclets.toolkit.Content, predicate: java.util.function.Predicate<T>): Table<T>;
                _createTab(tabId: html.markup.HtmlId, style: html.markup.HtmlStyle, defaultTab: boolean, tabLabel: doclets.toolkit.Content): html.markup.HtmlTree;
                _getCaption(title: doclets.toolkit.Content): html.markup.HtmlTree;
                _getTableBody(): doclets.toolkit.Content;
                isEmpty(): boolean;
                setAlwaysShowDefaultTab(showDefaultTab: boolean): Table<T>;
                setCaption(captionContent: doclets.toolkit.Content): Table<T>;
                setColumnStyles(styles: html.markup.HtmlStyle[]): Table<T>;
                setColumnStyles(...styles: html.markup.HtmlStyle[]): Table<T>;
                setColumnStyles(styles: java.util.List<html.markup.HtmlStyle>): Table<T>;
                setDefaultTab(label: doclets.toolkit.Content): Table<T>;
                setGridStyle(gridStyle: html.markup.HtmlStyle): Table<T>;
                setHeader(header: TableHeader): Table<T>;
                setId(id: html.markup.HtmlId): Table<T>;
                setRenderTabs(renderTabs: boolean): Table<T>;
                _toContent(): doclets.toolkit.Content;
                write(out: java.io.Writer, newline: string, atNewline: boolean): boolean;
                _alwaysShowDefaultTab: boolean;
                _bodyRows: java.util.List<doclets.toolkit.Content>;
                _caption: doclets.toolkit.Content;
                _columnStyles: java.util.List<markup.HtmlStyle>;
                _defaultTab: doclets.toolkit.Content;
                _gridStyle: markup.HtmlStyle;
                _header: TableHeader;
                _id: markup.HtmlId;
                _occurringTabs: java.util.Set<Table$Tab<T>>;
                _renderTabs: boolean;
                _tableStyle: markup.HtmlStyle;
                _tabs: java.util.List<Table$Tab<T>>;
              }
              interface Table<T> extends CombineTypes<[_Table<T>, doclets.toolkit.Content]> {}
              interface _Table$Tab$$static<T> extends ClassLike {
                _new(label: doclets.toolkit.Content, predicate: java.util.function.Predicate<T>, index: int): Table$Tab<T>;
              }
              let Table$Tab: _Table$Tab$$static<T>;
              interface _Table$Tab<T> {
                equals(o: any): boolean;
                hashCode(): int;
                index(): int;
                label(): doclets.toolkit.Content;
                predicate(): java.util.function.Predicate<T>;
                toString(): string;
              }
              interface Table$Tab<T> extends CombineTypes<[_Table$Tab<T>, java.lang.Record]> {}
              interface _TableHeader$$static extends ClassLike {
                new(contents: Contents, colHeaderKeys: string[]): TableHeader;
                new(contents: Contents, ...colHeaderKeys: string[]): TableHeader;
                new(headerCellContents: doclets.toolkit.Content[]): TableHeader;
                new(...headerCellContents: doclets.toolkit.Content[]): TableHeader;
                new(headerCellContents: java.util.List<doclets.toolkit.Content>): TableHeader;
              }
              let TableHeader: _TableHeader$$static;
              interface _TableHeader {
                isEmpty(): boolean;
                sortable(sortable: boolean[]): TableHeader;
                sortable(...sortable: boolean[]): TableHeader;
                styles(styles: html.markup.HtmlStyle[]): TableHeader;
                styles(...styles: html.markup.HtmlStyle[]): TableHeader;
                styles(styles: java.util.List<html.markup.HtmlStyle>): TableHeader;
                _toContent(): doclets.toolkit.Content;
                write(out: java.io.Writer, newline: string, atNewline: boolean): boolean;
                _cellContents: java.util.List<doclets.toolkit.Content>;
                _sortable: boolean[];
                _styles: java.util.List<markup.HtmlStyle>;
              }
              interface TableHeader extends CombineTypes<[_TableHeader, jdk.javadoc.internal.doclets.toolkit.Content]> {}
              interface _TagletWriterImpl$$static extends ClassLike {
                _TAG_LIST_ITEM_MAX_INLINE_LENGTH: int;
                new(htmlWriter: HtmlDocletWriter, isFirstSentence: boolean): TagletWriterImpl;
                new(htmlWriter: HtmlDocletWriter, isFirstSentence: boolean, inSummary: boolean): TagletWriterImpl;
                new(htmlWriter: HtmlDocletWriter, context: TagletWriterImpl$Context): TagletWriterImpl;
              }
              let TagletWriterImpl: _TagletWriterImpl$$static;
              interface _TagletWriterImpl {
                _codeTagOutput(element: javax.lang.model.element.Element, tag: com.sun.source.doctree.LiteralTree): doclets.toolkit.Content;
                commentTagsToOutput(holder: com.sun.source.doctree.DocTree, tags: java.util.List<com.sun.source.doctree.DocTree>): doclets.toolkit.Content;
                commentTagsToOutput(element: javax.lang.model.element.Element, tags: java.util.List<com.sun.source.doctree.DocTree>): doclets.toolkit.Content;
                commentTagsToOutput(holder: javax.lang.model.element.Element, holderTag: com.sun.source.doctree.DocTree, tags: java.util.List<com.sun.source.doctree.DocTree>, isFirstSentence: boolean): doclets.toolkit.Content;
                configuration(): doclets.toolkit.BaseConfiguration;
                _createAnchorAndSearchIndex(element: javax.lang.model.element.Element, tagText: string, desc: string, tree: com.sun.source.doctree.DocTree): doclets.toolkit.Content;
                _createAnchorAndSearchIndex(element: javax.lang.model.element.Element, tagText: string, tagContent: doclets.toolkit.Content, desc: string, tree: com.sun.source.doctree.DocTree): doclets.toolkit.Content;
                deprecatedTagOutput(element: javax.lang.model.element.Element): doclets.toolkit.Content;
                _extractText(c: doclets.toolkit.Content): string;
                _getCurrentPageElement(): javax.lang.model.element.TypeElement;
                getDocRootOutput(): doclets.toolkit.Content;
                _getExternalSpecContent(holder: javax.lang.model.element.Element, docTree: com.sun.source.doctree.DocTree, url: string, searchText: string, title: doclets.toolkit.Content): doclets.toolkit.Content;
                _getHolderName(element: javax.lang.model.element.Element): string;
                _getHolderName(de: doclets.toolkit.DocletElement): string;
                getHtmlWriter(): HtmlDocletWriter;
                getLinkedElement(referer: javax.lang.model.element.Element, signature: string): javax.lang.model.element.Element;
                getOutputInstance(): doclets.toolkit.Content;
                getParamHeader(kind: doclets.toolkit.taglets.ParamTaglet$ParamKind): doclets.toolkit.Content;
                getThrowsHeader(): doclets.toolkit.Content;
                _indexTagOutput(element: javax.lang.model.element.Element, tag: com.sun.source.doctree.IndexTree): doclets.toolkit.Content;
                _invalidTagOutput(summary: string, detail: java.util.Optional<string>): doclets.toolkit.Content;
                _isLongOrHasComma(c: doclets.toolkit.Content): boolean;
                _linkSeeReferenceOutput(holder: javax.lang.model.element.Element, refTree: com.sun.source.doctree.DocTree, refSignature: string, ref: javax.lang.model.element.Element, isLinkPlain: boolean, label: doclets.toolkit.Content, reportWarning: java.util.function.BiConsumer<string,any[]>): doclets.toolkit.Content;
                linkTagOutput(element: javax.lang.model.element.Element, tag: com.sun.source.doctree.LinkTree): doclets.toolkit.Content;
                _literalTagOutput(element: javax.lang.model.element.Element, tag: com.sun.source.doctree.LiteralTree): doclets.toolkit.Content;
                paramTagOutput(element: javax.lang.model.element.Element, paramTag: com.sun.source.doctree.ParamTree, paramName: string): doclets.toolkit.Content;
                _plainOrCode(plain: boolean, body: doclets.toolkit.Content): doclets.toolkit.Content;
                returnTagOutput(element: javax.lang.model.element.Element, returnTag: com.sun.source.doctree.ReturnTree, inline: boolean): doclets.toolkit.Content;
                seeTagOutput(holder: javax.lang.model.element.Element, seeTags: java.util.List<com.sun.source.doctree.SeeTree>): doclets.toolkit.Content;
                _seeTagOutput(element: javax.lang.model.element.Element, seeTag: com.sun.source.doctree.SeeTree): doclets.toolkit.Content;
                simpleBlockTagOutput(element: javax.lang.model.element.Element, simpleTags: java.util.List<com.sun.source.doctree.DocTree>, header: string): doclets.toolkit.Content;
                _snippetTagOutput(element: javax.lang.model.element.Element, tag: com.sun.source.doctree.SnippetTree, content: doclets.toolkit.taglets.snippet.StyledText, id: string, lang: string): doclets.toolkit.Content;
                specTagOutput(holder: javax.lang.model.element.Element, specTags: java.util.List<com.sun.source.doctree.SpecTree>): doclets.toolkit.Content;
                _specTagToContent(holder: javax.lang.model.element.Element, specTree: com.sun.source.doctree.SpecTree): doclets.toolkit.Content;
                _systemPropertyTagOutput(element: javax.lang.model.element.Element, tag: com.sun.source.doctree.SystemPropertyTree): doclets.toolkit.Content;
                _textOf(trees: java.util.List<com.sun.source.doctree.DocTree>): string;
                _throwsTagOutput(element: javax.lang.model.element.Element, throwsTag: com.sun.source.doctree.ThrowsTree, substituteType: javax.lang.model.type.TypeMirror): doclets.toolkit.Content;
                throwsTagOutput(throwsType: javax.lang.model.type.TypeMirror, content: java.util.Optional<doclets.toolkit.Content>): doclets.toolkit.Content;
                valueTagOutput(field: javax.lang.model.element.VariableElement, constantVal: string, includeLink: boolean): doclets.toolkit.Content;
                _configuration: HtmlConfiguration;
                _contents: Contents;
                _context: TagletWriterImpl$Context;
                _htmlWriter: HtmlDocletWriter;
                _messages: doclets.toolkit.Messages;
                _options: HtmlOptions;
                _resources: doclets.toolkit.Resources;
                _utils: doclets.toolkit.util.Utils;
              }
              interface TagletWriterImpl extends CombineTypes<[_TagletWriterImpl, jdk.javadoc.internal.doclets.toolkit.taglets.TagletWriter]> {}
              interface _TagletWriterImpl$Context$$static extends ClassLike {
                _new(isFirstSentence: boolean, inSummary: boolean): TagletWriterImpl$Context;
              }
              let TagletWriterImpl$Context: _TagletWriterImpl$Context$$static;
              interface _TagletWriterImpl$Context {
                _within(tree: com.sun.source.doctree.DocTree): TagletWriterImpl$Context;
                _inSummary: boolean;
                _inTags: java.util.Set<com.sun.source.doctree.DocTree$Kind>;
                _isFirstSentence: boolean;
              }
              interface TagletWriterImpl$Context extends CombineTypes<[_TagletWriterImpl$Context, java.lang.Object]> {}
              interface _TreeWriter$$static extends ClassLike {
                generate(configuration: HtmlConfiguration, classTree: doclets.toolkit.util.ClassTree): void;
                new(configuration: HtmlConfiguration, filename: doclets.toolkit.util.DocPath, classTree: doclets.toolkit.util.ClassTree): TreeWriter;
              }
              let TreeWriter: _TreeWriter$$static;
              interface _TreeWriter {
                _addPackageTreeLinks(content: doclets.toolkit.Content): void;
                generateTreeFile(): void;
                _getBody(): html.markup.HtmlTree;
                _isUnnamedPackage(): boolean;
                _bodyContents: markup.BodyContents;
                _classesOnly: boolean;
                _packages: java.util.SortedSet<javax.lang.model.element.PackageElement>;
              }
              interface TreeWriter extends CombineTypes<[_TreeWriter, jdk.javadoc.internal.doclets.formats.html.AbstractTreeWriter]> {}
              interface _WriterFactoryImpl$$static extends ClassLike {
                new(configuration: HtmlConfiguration): WriterFactoryImpl;
              }
              let WriterFactoryImpl: _WriterFactoryImpl$$static;
              interface _WriterFactoryImpl {
                getAnnotationTypeMemberWriter(classWriter: doclets.toolkit.ClassWriter): AnnotationTypeMemberWriterImpl;
                getAnnotationTypeMemberWriter(a0: doclets.toolkit.ClassWriter): doclets.toolkit.AnnotationTypeMemberWriter;
                getAnnotationTypeOptionalMemberWriter(classWriter: doclets.toolkit.ClassWriter): AnnotationTypeMemberWriterImpl;
                getAnnotationTypeOptionalMemberWriter(a0: doclets.toolkit.ClassWriter): doclets.toolkit.AnnotationTypeMemberWriter;
                getAnnotationTypeRequiredMemberWriter(classWriter: doclets.toolkit.ClassWriter): AnnotationTypeMemberWriterImpl;
                getAnnotationTypeRequiredMemberWriter(a0: doclets.toolkit.ClassWriter): doclets.toolkit.AnnotationTypeMemberWriter;
                getClassWriter(typeElement: javax.lang.model.element.TypeElement, classTree: doclets.toolkit.util.ClassTree): doclets.toolkit.ClassWriter;
                getConstantsSummaryWriter(): doclets.toolkit.ConstantsSummaryWriter;
                getConstructorWriter(classWriter: doclets.toolkit.ClassWriter): ConstructorWriterImpl;
                getConstructorWriter(a0: doclets.toolkit.ClassWriter): doclets.toolkit.ConstructorWriter;
                getDocFilesHandler(element: javax.lang.model.element.Element): doclets.toolkit.DocFilesHandler;
                getEnumConstantWriter(classWriter: doclets.toolkit.ClassWriter): EnumConstantWriterImpl;
                getEnumConstantWriter(a0: doclets.toolkit.ClassWriter): doclets.toolkit.EnumConstantWriter;
                getFieldWriter(classWriter: doclets.toolkit.ClassWriter): FieldWriterImpl;
                getFieldWriter(a0: doclets.toolkit.ClassWriter): doclets.toolkit.FieldWriter;
                getMemberSummaryWriter(classWriter: doclets.toolkit.ClassWriter, memberType: doclets.toolkit.util.VisibleMemberTable$Kind): doclets.toolkit.MemberSummaryWriter;
                getMethodWriter(classWriter: doclets.toolkit.ClassWriter): MethodWriterImpl;
                getMethodWriter(a0: doclets.toolkit.ClassWriter): doclets.toolkit.MethodWriter;
                getModuleSummaryWriter(mdle: javax.lang.model.element.ModuleElement): doclets.toolkit.ModuleSummaryWriter;
                getPackageSummaryWriter(packageElement: javax.lang.model.element.PackageElement): doclets.toolkit.PackageSummaryWriter;
                getPropertyWriter(classWriter: doclets.toolkit.ClassWriter): PropertyWriterImpl;
                getPropertyWriter(a0: doclets.toolkit.ClassWriter): doclets.toolkit.PropertyWriter;
                getSerializedFormWriter(): doclets.toolkit.SerializedFormWriter;
                _configuration: HtmlConfiguration;
              }
              interface WriterFactoryImpl extends CombineTypes<[_WriterFactoryImpl, jdk.javadoc.internal.doclets.toolkit.WriterFactory, java.lang.Object]> {}
            }
          }
          module toolkit {
            module builders {
              interface _AbstractBuilder$$static extends ClassLike {
                new(c: AbstractBuilder$Context): AbstractBuilder;
              }
              let AbstractBuilder: _AbstractBuilder$$static;
              interface _AbstractBuilder {
                build(): void;
(): void;
                _builderFactory: BuilderFactory;
                _configuration: BaseConfiguration;
                _containingPackagesSeen: java.util.Set<javax.lang.model.element.PackageElement>;
                _messages: Messages;
                _options: BaseOptions;
                _resources: Resources;
                _utils: toolkit.util.Utils;
              }
              interface AbstractBuilder extends CombineTypes<[_AbstractBuilder, java.lang.Object]> {}
              interface _AbstractBuilder$Context$$static extends ClassLike {
                _new(configuration: BaseConfiguration, containingPackagesSeen: java.util.Set<javax.lang.model.element.PackageElement>): AbstractBuilder$Context;
              }
              let AbstractBuilder$Context: _AbstractBuilder$Context$$static;
              interface _AbstractBuilder$Context {
                _configuration: BaseConfiguration;
                _containingPackagesSeen: java.util.Set<javax.lang.model.element.PackageElement>;
              }
              interface AbstractBuilder$Context extends CombineTypes<[_AbstractBuilder$Context, java.lang.Object]> {}
              interface _AbstractMemberBuilder$$static extends ClassLike {
                new(context: AbstractBuilder$Context, typeElement: javax.lang.model.element.TypeElement): AbstractMemberBuilder;
              }
              let AbstractMemberBuilder: _AbstractMemberBuilder$$static;
              interface _AbstractMemberBuilder {
                build(): void;
                build(a0: Content): void;
                _getVisibleMembers(kind: toolkit.util.VisibleMemberTable$Kind): java.util.List<javax.lang.model.element.Element>;
                hasMembersToDocument(): boolean;
                _typeElement: javax.lang.model.element.TypeElement;
                _visibleMemberTable: toolkit.util.VisibleMemberTable;
              }
              interface AbstractMemberBuilder extends CombineTypes<[_AbstractMemberBuilder, jdk.javadoc.internal.doclets.toolkit.builders.AbstractBuilder]> {}
              interface _AnnotationTypeMemberBuilder$$static extends ClassLike {
                getInstance(context: AbstractBuilder$Context, typeElement: javax.lang.model.element.TypeElement, writer: AnnotationTypeMemberWriter): AnnotationTypeMemberBuilder;
                _new(context: AbstractBuilder$Context, typeElement: javax.lang.model.element.TypeElement, writer: AnnotationTypeMemberWriter): AnnotationTypeMemberBuilder;
              }
              let AnnotationTypeMemberBuilder: _AnnotationTypeMemberBuilder$$static;
              interface _AnnotationTypeMemberBuilder {
                build(target: Content): void;
                _buildAnnotationTypeMember(target: Content): void;
                _buildAnnotationTypeMemberChildren(annotationContent: Content): void;
                _buildDefaultValueInfo(annotationContent: Content): void;
                _buildDeprecationInfo(annotationContent: Content): void;
                _buildMemberComments(annotationContent: Content): void;
                _buildPreviewInfo(annotationContent: Content): void;
                _buildSignature(target: Content): void;
                _buildTagInfo(annotationContent: Content): void;
                getWriter(): AnnotationTypeMemberWriter;
                hasMembersToDocument(): boolean;
                _currentMember: javax.lang.model.element.Element;
                _members: java.util.List<javax.lang.model.element.Element>;
                _writer: AnnotationTypeMemberWriter;
              }
              interface AnnotationTypeMemberBuilder extends CombineTypes<[_AnnotationTypeMemberBuilder, jdk.javadoc.internal.doclets.toolkit.builders.AbstractMemberBuilder]> {}
              interface _BuilderFactory$$static extends ClassLike {
                new(configuration: BaseConfiguration): BuilderFactory;
              }
              let BuilderFactory: _BuilderFactory$$static;
              interface _BuilderFactory {
                getAnnotationTypeMemberBuilder(classWriter: ClassWriter): AbstractMemberBuilder;
                getClassBuilder(typeElement: javax.lang.model.element.TypeElement, classTree: toolkit.util.ClassTree): AbstractBuilder;
                getConstantsSummaryBuilder(): AbstractBuilder;
                getConstructorBuilder(classWriter: ClassWriter): AbstractMemberBuilder;
                getEnumConstantsBuilder(classWriter: ClassWriter): AbstractMemberBuilder;
                getFieldBuilder(classWriter: ClassWriter): AbstractMemberBuilder;
                getMemberSummaryBuilder(classWriter: ClassWriter): MemberSummaryBuilder;
                getMethodBuilder(classWriter: ClassWriter): AbstractMemberBuilder;
                getModuleSummaryBuilder(mdle: javax.lang.model.element.ModuleElement): AbstractBuilder;
                getPackageSummaryBuilder(pkg: javax.lang.model.element.PackageElement): AbstractBuilder;
                getPropertyBuilder(classWriter: ClassWriter): AbstractMemberBuilder;
                getSerializedFormBuilder(): AbstractBuilder;
                _context: AbstractBuilder$Context;
                _writerFactory: WriterFactory;
              }
              interface BuilderFactory extends CombineTypes<[_BuilderFactory, java.lang.Object]> {}
              interface _ClassBuilder$$static extends ClassLike {
                getInstance(context: AbstractBuilder$Context, typeElement: javax.lang.model.element.TypeElement, writer: ClassWriter): ClassBuilder;
              }
              let ClassBuilder: _ClassBuilder$$static;
              interface _ClassBuilder {
                build(): void;
                _buildAnnotationTypeMemberDetails(target: Content): void;
                _buildClassDescription(target: Content): void;
                _buildClassDoc(): void;
                _buildClassInfo(target: Content): void;
                _buildClassSignature(target: Content): void;
                _buildClassTagInfo(target: Content): void;
                _buildClassTree(classContent: Content): void;
                _buildConstructorDetails(detailsList: Content): void;
                _buildDeprecationInfo(target: Content): void;
                _buildEnumConstantsDetails(detailsList: Content): void;
                _buildFieldDetails(detailsList: Content): void;
                _buildFunctionalInterfaceInfo(target: Content): void;
                _buildImplementedInterfacesInfo(target: Content): void;
                _buildInterfaceUsageInfo(target: Content): void;
                _buildMemberDetails(classContent: Content): void;
                _buildMemberSummary(classContent: Content): void;
                _buildMethodDetails(detailsList: Content): void;
                _buildNestedClassInfo(target: Content): void;
                _buildParamInfo(target: Content): void;
                buildPropertyDetails(detailsList: Content): void;
                _buildSubClassInfo(target: Content): void;
                _buildSubInterfacesInfo(target: Content): void;
                _buildSuperInterfacesInfo(target: Content): void;
                _copyDocFiles(): void;
                _setEnumDocumentation(elem: javax.lang.model.element.TypeElement): void;
                _setRecordDocumentation(elem: javax.lang.model.element.TypeElement): void;
                _typeElement: javax.lang.model.element.TypeElement;
                _utils: toolkit.util.Utils;
                _writer: ClassWriter;
              }
              interface ClassBuilder extends CombineTypes<[_ClassBuilder, jdk.javadoc.internal.doclets.toolkit.builders.AbstractBuilder]> {}
              interface _ConstantsSummaryBuilder$$static extends ClassLike {
                getInstance(context: AbstractBuilder$Context): ConstantsSummaryBuilder;
                _MAX_CONSTANT_VALUE_INDEX_LENGTH: int;
              }
              let ConstantsSummaryBuilder: _ConstantsSummaryBuilder$$static;
              interface _ConstantsSummaryBuilder {
                build(): void;
                _buildClassConstantSummary(): void;
                _buildConstantMembers(target: Content): void;
                _buildConstantSummaries(): void;
                _buildConstantSummary(): void;
                _buildContents(): void;
                _buildPackageHeader(target: Content): void;
                getAbbrevPackageName(pkg: javax.lang.model.element.PackageElement): string;
                _hasConstantField(pkg: javax.lang.model.element.PackageElement): boolean;
                _hasConstantField(typeElement: javax.lang.model.element.TypeElement): boolean;
                _currentClass: javax.lang.model.element.TypeElement;
                _currentPackage: javax.lang.model.element.PackageElement;
                _packageGroupHeadings: java.util.Set<string>;
                _typeElementsWithConstFields: java.util.Set<javax.lang.model.element.TypeElement>;
                _writer: ConstantsSummaryWriter;
              }
              interface ConstantsSummaryBuilder extends CombineTypes<[_ConstantsSummaryBuilder, jdk.javadoc.internal.doclets.toolkit.builders.AbstractBuilder]> {}
              interface _ConstantsSummaryBuilder$ConstantFieldBuilder$$static extends ClassLike {
                new(a0: ConstantsSummaryBuilder, typeElement: javax.lang.model.element.TypeElement): ConstantsSummaryBuilder$ConstantFieldBuilder;
              }
              let ConstantsSummaryBuilder$ConstantFieldBuilder: _ConstantsSummaryBuilder$ConstantFieldBuilder$$static;
              interface _ConstantsSummaryBuilder$ConstantFieldBuilder {
                _buildMembersSummary(target: Content): void;
                _members(): java.util.SortedSet<javax.lang.model.element.VariableElement>;
                _this$0: ConstantsSummaryBuilder;
                _typeElement: javax.lang.model.element.TypeElement;
              }
              interface ConstantsSummaryBuilder$ConstantFieldBuilder extends CombineTypes<[_ConstantsSummaryBuilder$ConstantFieldBuilder, java.lang.Object]> {}
              interface _ConstructorBuilder$$static extends ClassLike {
                getInstance(context: AbstractBuilder$Context, typeElement: javax.lang.model.element.TypeElement, writer: ConstructorWriter): ConstructorBuilder;
              }
              let ConstructorBuilder: _ConstructorBuilder$$static;
              interface _ConstructorBuilder {
                build(target: Content): void;
                _buildConstructorComments(constructorContent: Content): void;
                _buildConstructorDoc(target: Content): void;
                _buildDeprecationInfo(constructorContent: Content): void;
                _buildPreviewInfo(constructorContent: Content): void;
                _buildSignature(constructorContent: Content): void;
                _buildTagInfo(constructorContent: Content): void;
                getWriter(): ConstructorWriter;
                hasMembersToDocument(): boolean;
                _constructors: java.util.List<javax.lang.model.element.Element>;
                _currentConstructor: javax.lang.model.element.ExecutableElement;
                _writer: ConstructorWriter;
              }
              interface ConstructorBuilder extends CombineTypes<[_ConstructorBuilder, jdk.javadoc.internal.doclets.toolkit.builders.AbstractMemberBuilder]> {}
              interface _EnumConstantBuilder$$static extends ClassLike {
                getInstance(context: AbstractBuilder$Context, typeElement: javax.lang.model.element.TypeElement, writer: EnumConstantWriter): EnumConstantBuilder;
              }
              let EnumConstantBuilder: _EnumConstantBuilder$$static;
              interface _EnumConstantBuilder {
                build(target: Content): void;
                _buildDeprecationInfo(target: Content): void;
                _buildEnumConstant(target: Content): void;
                _buildEnumConstantComments(target: Content): void;
                _buildPreviewInfo(target: Content): void;
                _buildSignature(target: Content): void;
                _buildTagInfo(target: Content): void;
                getWriter(): EnumConstantWriter;
                hasMembersToDocument(): boolean;
                _currentElement: javax.lang.model.element.VariableElement;
                _enumConstants: java.util.List<javax.lang.model.element.Element>;
                _writer: EnumConstantWriter;
              }
              interface EnumConstantBuilder extends CombineTypes<[_EnumConstantBuilder, jdk.javadoc.internal.doclets.toolkit.builders.AbstractMemberBuilder]> {}
              interface _FieldBuilder$$static extends ClassLike {
                getInstance(context: AbstractBuilder$Context, typeElement: javax.lang.model.element.TypeElement, writer: FieldWriter): FieldBuilder;
              }
              let FieldBuilder: _FieldBuilder$$static;
              interface _FieldBuilder {
                build(target: Content): void;
                _buildDeprecationInfo(fieldContent: Content): void;
                _buildFieldComments(fieldContent: Content): void;
                _buildFieldDoc(target: Content): void;
                _buildPreviewInfo(fieldContent: Content): void;
                _buildSignature(fieldContent: Content): void;
                _buildTagInfo(fieldContent: Content): void;
                getWriter(): FieldWriter;
                hasMembersToDocument(): boolean;
                _currentElement: javax.lang.model.element.VariableElement;
                _fields: java.util.List<javax.lang.model.element.Element>;
                _writer: FieldWriter;
              }
              interface FieldBuilder extends CombineTypes<[_FieldBuilder, jdk.javadoc.internal.doclets.toolkit.builders.AbstractMemberBuilder]> {}
              interface _MemberSummaryBuilder$$static extends ClassLike {
                getInstance(classWriter: ClassWriter, context: AbstractBuilder$Context): MemberSummaryBuilder;
              }
              let MemberSummaryBuilder: _MemberSummaryBuilder$$static;
              interface _MemberSummaryBuilder {
                _addSummary(writer: MemberSummaryWriter, kind: toolkit.util.VisibleMemberTable$Kind, showInheritedSummary: boolean, summariesList: Content): void;
                _addSummaryFootNote(inheritedClass: javax.lang.model.element.TypeElement, inheritedMembers: java.lang.Iterable<javax.lang.model.element.Element>, links: Content, writer: MemberSummaryWriter): void;
                _asSortedSet(members: java.util.Collection<javax.lang.model.element.Element>): java.util.SortedSet<javax.lang.model.element.Element>;
                _buildAnnotationTypeOptionalMemberSummary(summariesList: Content): void;
                _buildAnnotationTypeRequiredMemberSummary(summariesList: Content): void;
                _buildConstructorsSummary(summariesList: Content): void;
                _buildEnumConstantsSummary(summariesList: Content): void;
                _buildFieldsSummary(summariesList: Content): void;
                _buildInheritedSummary(writer: MemberSummaryWriter, kind: toolkit.util.VisibleMemberTable$Kind, targets: java.util.LinkedList<Content>): void;
                _buildMethodsSummary(summariesList: Content): void;
                _buildNestedClassesSummary(summariesList: Content): void;
                _buildPropertiesSummary(summariesList: Content): void;
                _buildSummary(writer: MemberSummaryWriter, kind: toolkit.util.VisibleMemberTable$Kind, summaryTreeList: java.util.LinkedList<Content>): void;
                getMemberSummaryWriter(kind: toolkit.util.VisibleMemberTable$Kind): MemberSummaryWriter;
                getVisibleMemberTable(): toolkit.util.VisibleMemberTable;
                members(kind: toolkit.util.VisibleMemberTable$Kind): java.util.SortedSet<javax.lang.model.element.Element>;
                _comparator: java.util.Comparator<javax.lang.model.element.Element>;
                _memberSummaryWriters: java.util.EnumMap<toolkit.util.VisibleMemberTable$Kind,MemberSummaryWriter>;
                _pHelper: MemberSummaryBuilder$PropertyHelper;
              }
              interface MemberSummaryBuilder extends CombineTypes<[_MemberSummaryBuilder, jdk.javadoc.internal.doclets.toolkit.builders.AbstractMemberBuilder]> {}
              interface _MemberSummaryBuilder$PropertyHelper$$static extends ClassLike {
                _new(builder: MemberSummaryBuilder): MemberSummaryBuilder$PropertyHelper;
              }
              let MemberSummaryBuilder$PropertyHelper: _MemberSummaryBuilder$PropertyHelper$$static;
              interface _MemberSummaryBuilder$PropertyHelper {
                _addToPropertiesMap(propertyMethod: javax.lang.model.element.ExecutableElement, field: javax.lang.model.element.VariableElement, getter: javax.lang.model.element.ExecutableElement, setter: javax.lang.model.element.ExecutableElement): void;
                _addToPropertiesMap(propertyMethod: javax.lang.model.element.Element, commentSource: javax.lang.model.element.Element): void;
                _computeProperties(): void;
                getPropertyElement(element: javax.lang.model.element.Element): javax.lang.model.element.Element;
                _builder: MemberSummaryBuilder;
                _classPropertiesMap: java.util.Map<javax.lang.model.element.Element,javax.lang.model.element.Element>;
              }
              interface MemberSummaryBuilder$PropertyHelper extends CombineTypes<[_MemberSummaryBuilder$PropertyHelper, java.lang.Object]> {}
              interface _MethodBuilder$$static extends ClassLike {
                getInstance(context: AbstractBuilder$Context, typeElement: javax.lang.model.element.TypeElement, writer: MethodWriter): MethodBuilder;
              }
              let MethodBuilder: _MethodBuilder$$static;
              interface _MethodBuilder {
                build(target: Content): void;
                _buildDeprecationInfo(methodContent: Content): void;
                _buildMethodComments(methodContent: Content): void;
                _buildMethodDoc(detailsList: Content): void;
                _buildPreviewInfo(methodContent: Content): void;
                _buildSignature(methodContent: Content): void;
                _buildTagInfo(methodContent: Content): void;
                getWriter(): MethodWriter;
                hasMembersToDocument(): boolean;
                _currentMethod: javax.lang.model.element.ExecutableElement;
                _methods: java.util.List<javax.lang.model.element.Element>;
                _writer: MethodWriter;
              }
              interface MethodBuilder extends CombineTypes<[_MethodBuilder, jdk.javadoc.internal.doclets.toolkit.builders.AbstractMemberBuilder]> {}
              interface _ModuleSummaryBuilder$$static extends ClassLike {
                getInstance(context: AbstractBuilder$Context, mdle: javax.lang.model.element.ModuleElement, moduleWriter: ModuleSummaryWriter): ModuleSummaryBuilder;
              }
              let ModuleSummaryBuilder: _ModuleSummaryBuilder$$static;
              interface _ModuleSummaryBuilder {
                build(): void;
                _buildContent(): void;
                _buildModuleDescription(moduleContent: Content): void;
                _buildModuleDoc(): void;
                _buildModulesSummary(summariesList: Content): void;
                _buildPackagesSummary(summariesList: Content): void;
                _buildServicesSummary(summariesList: Content): void;
                _buildSummary(target: Content): void;
                _mdle: javax.lang.model.element.ModuleElement;
                _moduleWriter: ModuleSummaryWriter;
              }
              interface ModuleSummaryBuilder extends CombineTypes<[_ModuleSummaryBuilder, jdk.javadoc.internal.doclets.toolkit.builders.AbstractBuilder]> {}
              interface _PackageSummaryBuilder$$static extends ClassLike {
                getInstance(context: AbstractBuilder$Context, pkg: javax.lang.model.element.PackageElement, packageWriter: PackageSummaryWriter): PackageSummaryBuilder;
              }
              let PackageSummaryBuilder: _PackageSummaryBuilder$$static;
              interface _PackageSummaryBuilder {
                build(): void;
                _buildAllClassesAndInterfacesSummary(summariesList: Content): void;
                _buildContent(): void;
                _buildPackageDescription(packageContent: Content): void;
                _buildPackageDoc(): void;
                _buildPackageTags(packageContent: Content): void;
                _buildRelatedPackagesSummary(summariesList: Content): void;
                _buildSummary(packageContent: Content): void;
                _packageElement: javax.lang.model.element.PackageElement;
                _packageWriter: PackageSummaryWriter;
              }
              interface PackageSummaryBuilder extends CombineTypes<[_PackageSummaryBuilder, jdk.javadoc.internal.doclets.toolkit.builders.AbstractBuilder]> {}
              interface _PropertyBuilder$$static extends ClassLike {
                getInstance(context: AbstractBuilder$Context, typeElement: javax.lang.model.element.TypeElement, writer: PropertyWriter): PropertyBuilder;
              }
              let PropertyBuilder: _PropertyBuilder$$static;
              interface _PropertyBuilder {
                build(target: Content): void;
                _buildDeprecationInfo(propertyContent: Content): void;
                _buildPreviewInfo(propertyContent: Content): void;
                _buildPropertyComments(propertyContent: Content): void;
                _buildPropertyDoc(detailsList: Content): void;
                _buildSignature(propertyContent: Content): void;
                _buildTagInfo(propertyContent: Content): void;
                getWriter(): PropertyWriter;
                hasMembersToDocument(): boolean;
                _currentProperty: javax.lang.model.element.ExecutableElement;
                _properties: java.util.List<javax.lang.model.element.Element>;
                _writer: PropertyWriter;
              }
              interface PropertyBuilder extends CombineTypes<[_PropertyBuilder, jdk.javadoc.internal.doclets.toolkit.builders.AbstractMemberBuilder]> {}
              interface _SerializedFormBuilder$$static extends ClassLike {
                getInstance(context: AbstractBuilder$Context): SerializedFormBuilder;
                _serialClassInclude(utils: toolkit.util.Utils, te: javax.lang.model.element.TypeElement): boolean;
                _serialDocInclude(utils: toolkit.util.Utils, element: javax.lang.model.element.Element): boolean;
                serialInclude(utils: toolkit.util.Utils, element: javax.lang.model.element.Element): boolean;
                _SERIAL_VERSION_UID: string;
                _SERIAL_VERSION_UID_HEADER: string;
              }
              let SerializedFormBuilder: _SerializedFormBuilder$$static;
              interface _SerializedFormBuilder {
                build(): void;
                _buildClassContent(target: Content): void;
                _buildClassSerializedForm(target: Content): void;
                _buildDeprecatedMethodInfo(methodsContent: Content): void;
                _buildFieldDeprecationInfo(fieldsContent: Content): void;
                _buildFieldHeader(classContent: Content): void;
                _buildFieldInfo(fieldsContent: Content): void;
                buildFieldSerializationOverview(typeElement: javax.lang.model.element.TypeElement, classContent: Content): void;
                _buildFieldSubHeader(fieldsContent: Content): void;
                _buildMethodDescription(methodsContent: Content): void;
                _buildMethodInfo(methodsContent: Content): void;
                _buildMethodSubHeader(methodsContent: Content): void;
                _buildMethodTags(methodsContent: Content): void;
                _buildPackageHeader(target: Content): void;
                _buildPackageSerializedForm(target: Content): void;
                _buildSerialFieldTagsInfo(target: Content): void;
                _buildSerialUIDInfo(target: Content): void;
                _buildSerializableFields(target: Content): void;
                _buildSerializableMethods(target: Content): void;
                _buildSerializedForm(): void;
                _buildSerializedFormSummaries(): void;
                _serialClassFoundToDocument(classes: java.util.SortedSet<javax.lang.model.element.TypeElement>): boolean;
                _currentMember: javax.lang.model.element.Element;
                _currentPackage: javax.lang.model.element.PackageElement;
                _currentTypeElement: javax.lang.model.element.TypeElement;
                _fieldWriter: SerializedFormWriter$SerialFieldWriter;
                _methodWriter: SerializedFormWriter$SerialMethodWriter;
                _writer: SerializedFormWriter;
              }
              interface SerializedFormBuilder extends CombineTypes<[_SerializedFormBuilder, jdk.javadoc.internal.doclets.toolkit.builders.AbstractBuilder]> {}
            }
            module resources {
              interface _doclets$$static extends ClassLike {
                new(): doclets;
              }
              let doclets: _doclets$$static;
              interface _doclets {
                _getContents(): any[][];
              }
              interface doclets extends CombineTypes<[_doclets, java.util.ListResourceBundle]> {}
              interface _doclets_de$$static extends ClassLike {
                new(): doclets_de;
              }
              let doclets_de: _doclets_de$$static;
              interface _doclets_de {
                _getContents(): any[][];
              }
              interface doclets_de extends CombineTypes<[_doclets_de, java.util.ListResourceBundle]> {}
              interface _doclets_ja$$static extends ClassLike {
                new(): doclets_ja;
              }
              let doclets_ja: _doclets_ja$$static;
              interface _doclets_ja {
                _getContents(): any[][];
              }
              interface doclets_ja extends CombineTypes<[_doclets_ja, java.util.ListResourceBundle]> {}
              interface _doclets_zh_CN$$static extends ClassLike {
                new(): doclets_zh_CN;
              }
              let doclets_zh_CN: _doclets_zh_CN$$static;
              interface _doclets_zh_CN {
                _getContents(): any[][];
              }
              interface doclets_zh_CN extends CombineTypes<[_doclets_zh_CN, java.util.ListResourceBundle]> {}
            }
            module taglets {
              module snippet {
                interface _Action$$static extends ClassLike {
                }
                let Action: _Action$$static;
                interface _Action {
                  perform(): void;
(): void;
                }
                interface Action extends CombineTypes<[_Action, java.lang.Object]> {}
                interface _AddStyle$$static extends ClassLike {
                  new(style: Style, pattern: java.util.regex.Pattern, text: StyledText): AddStyle;
                }
                let AddStyle: _AddStyle$$static;
                interface _AddStyle {
                  perform(): void;
                  _pattern: java.util.regex.Pattern;
                  _style: Style;
                  _text: StyledText;
                }
                interface AddStyle extends CombineTypes<[_AddStyle, java.lang.Object, jdk.javadoc.internal.doclets.toolkit.taglets.snippet.Action]> {}
                interface _Attribute$$static extends ClassLike {
                }
                let Attribute: _Attribute$$static;
                interface _Attribute {
                  _name(): string;
                  _nameStartPosition(): int;
                  _name: string;
                  _nameStartPosition: int;
                }
                interface Attribute extends CombineTypes<[_Attribute, java.lang.Object]> {}
                interface _Attribute$Valued$$static extends ClassLike {
                  _new(name: string, value: string, namePosition: int, valueStartPosition: int): Attribute$Valued;
                }
                let Attribute$Valued: _Attribute$Valued$$static;
                interface _Attribute$Valued {
                  _value(): string;
                  valueStartPosition(): int;
                  _value: string;
                  _valueStartPosition: int;
                }
                interface Attribute$Valued extends CombineTypes<[_Attribute$Valued, jdk.javadoc.internal.doclets.toolkit.taglets.snippet.Attribute]> {}
                interface _Attribute$Valueless$$static extends ClassLike {
                  _new(name: string, nameStartPosition: int): Attribute$Valueless;
                }
                let Attribute$Valueless: _Attribute$Valueless$$static;
                interface _Attribute$Valueless {
                }
                interface Attribute$Valueless extends CombineTypes<[_Attribute$Valueless, jdk.javadoc.internal.doclets.toolkit.taglets.snippet.Attribute]> {}
                interface _Attributes$$static extends ClassLike {
                  new(attributes: java.util.Collection<Attribute>): Attributes;
                }
                let Attributes: _Attributes$$static;
                interface _Attributes {
                  get<T>(name: string, type: java.lang.Class<T>): java.util.Optional<T>;
                  _attributes: java.util.Map<string,java.util.List<Attribute>>;
                }
                interface Attributes extends CombineTypes<[_Attributes, java.lang.Object]> {}
                interface _Bookmark$$static extends ClassLike {
                  new(name: string, text: StyledText): Bookmark;
                }
                let Bookmark: _Bookmark$$static;
                interface _Bookmark {
                  perform(): void;
                  _name: string;
                  _text: StyledText;
                }
                interface Bookmark extends CombineTypes<[_Bookmark, java.lang.Object, jdk.javadoc.internal.doclets.toolkit.taglets.snippet.Action]> {}
                interface _MarkupParser$$static extends ClassLike {
                  _EOI: int;
                  new(resources: Resources): MarkupParser;
                }
                let MarkupParser: _MarkupParser$$static;
                interface _MarkupParser {
                  _addPendingText(b: MarkupParser$stringBuilder, textStart: int, textEnd: int): void;
                  _attrs(): java.util.List<Attribute>;
                  _isIdentifierStart(ch: char): boolean;
                  _isUnquotedAttrValueTerminator(ch: char): boolean;
                  _nextChar(): void;
                  parse(input: string): java.util.List<Parser$Tag>;
                  _parse(): java.util.List<Parser$Tag>;
                  _readAttributeName(): string;
                  _readIdentifier(): string;
                  _readTag(): Parser$Tag;
                  _readTags(): java.util.List<Parser$Tag>;
                  _skipWhitespace(): void;
                  _bp: int;
                  _buf: char[];
                  _buflen: int;
                  _ch: char;
                  _resources: Resources;
                }
                interface MarkupParser extends CombineTypes<[_MarkupParser, java.lang.Object]> {}
                interface _MarkupParser$ValueKind$$static extends ClassLike {
                  valueOf(name: string): MarkupParser$ValueKind;
                  values(): MarkupParser$ValueKind[];
                  readonly DOUBLE_QUOTED: MarkupParser$ValueKind;
                  readonly EMPTY: MarkupParser$ValueKind;
                  readonly SINGLE_QUOTED: MarkupParser$ValueKind;
                  readonly UNQUOTED: MarkupParser$ValueKind;
                }
                let MarkupParser$ValueKind: _MarkupParser$ValueKind$$static;
                interface _MarkupParser$ValueKind {
                }
                interface MarkupParser$ValueKind extends CombineTypes<[_MarkupParser$ValueKind]> {}
                interface _ParseException$$static extends ClassLike {
                  _serialVersionUID: long;
                  new(messageSupplier: java.util.function.Supplier<string>, position: int): ParseException;
                }
                let ParseException: _ParseException$$static;
                interface _ParseException {
                  getPosition(): int;
                  _index: int;
                }
                interface ParseException extends CombineTypes<[_ParseException, java.lang.Exception]> {}
                interface _Parser$$static extends ClassLike {
                  _forEachLine(s: string, consumer: Parser$LineConsumer): void;
                  _JAVA_COMMENT: java.util.regex.Pattern;
                  _PROPERTIES_COMMENT: java.util.regex.Pattern;
                  new(resources: Resources): Parser;
                }
                let Parser: _Parser$$static;
                interface _Parser {
                  _append(text: StyledText, style: java.util.Set<Style>, s: Parser$charSequence): void;
                  _completeTag(start: Parser$Tag, end: Parser$Tag): void;
                  _createRegexPattern(substring: java.util.Optional<Attribute$Valued>, regex: java.util.Optional<Attribute$Valued>, offset: int): java.util.regex.Pattern;
                  _createRegexPattern(substring: java.util.Optional<Attribute$Valued>, regex: java.util.Optional<Attribute$Valued>, defaultRegex: string, offset: int): java.util.regex.Pattern;
                  _newParseException(pos: int, key: string, args: any[]): ParseException;
                  _newParseException(pos: int, key: string, ...args: any[]): ParseException;
                  parse(diags: SnippetTaglet$Diags, language: java.util.Optional<SnippetTaglet$Language>, source: string): Parser$Result;
                  _parse(diags: SnippetTaglet$Diags, commentPattern: java.util.regex.Pattern, source: string): Parser$Result;
                  _processTag(t: Parser$Tag): void;
                  _markupParser: MarkupParser;
                  _regions: Parser$Regions;
                  _resources: Resources;
                  _tags: java.util.Queue<Parser$Tag>;
                }
                interface Parser extends CombineTypes<[_Parser, java.lang.Object]> {}
                interface _Parser$LineConsumer$$static extends ClassLike {
                }
                let Parser$LineConsumer: _Parser$LineConsumer$$static;
                interface _Parser$LineConsumer {
                  accept(a0: int, a1: string): void;
(a0: int, a1: string): void;
                }
                interface Parser$LineConsumer extends CombineTypes<[_Parser$LineConsumer, java.lang.Object]> {}
                interface _Parser$Regions$$static extends ClassLike {
                  new(): Parser$Regions;
                }
                let Parser$Regions: _Parser$Regions$$static;
                interface _Parser$Regions {
                  _addAnonymous(i: Parser$Tag): void;
                  _addNamed(name: string, i: Parser$Tag): boolean;
                  _clear(): void;
                  _isEmpty(): boolean;
                  _removeLast(): java.util.Optional<Parser$Tag>;
                  _removeNamed(name: string): java.util.Optional<Parser$Tag>;
                  _tags: java.util.ArrayList<java.util.Map$Entry<java.util.Optional<string>,Parser$Tag>>;
                }
                interface Parser$Regions extends CombineTypes<[_Parser$Regions, java.lang.Object]> {}
                interface _Parser$Result$$static extends ClassLike {
                  new(text: StyledText, actions: java.util.Queue<Action>): Parser$Result;
                }
                let Parser$Result: _Parser$Result$$static;
                interface _Parser$Result {
                  actions(): java.util.Queue<Action>;
                  equals(o: any): boolean;
                  hashCode(): int;
                  text(): StyledText;
                  toString(): string;
                }
                interface Parser$Result extends CombineTypes<[_Parser$Result, java.lang.Record]> {}
                interface _Parser$Tag$$static extends ClassLike {
                  _new(): Parser$Tag;
                }
                let Parser$Tag: _Parser$Tag$$static;
                interface _Parser$Tag {
                  _attributes(): java.util.List<Attribute>;
                  _end(): int;
                  _name(): string;
                  _start(): int;
                  toString(): string;
                  _appliesToNextLine: boolean;
                  _attributes: java.util.List<Attribute>;
                  _end: int;
                  _lineSourceOffset: int;
                  _markupLineOffset: int;
                  _name: string;
                  _nameLineOffset: int;
                  _start: int;
                }
                interface Parser$Tag extends CombineTypes<[_Parser$Tag, java.lang.Object]> {}
                interface _Replace$$static extends ClassLike {
                  new(replacement: string, pattern: java.util.regex.Pattern, text: StyledText): Replace;
                }
                let Replace: _Replace$$static;
                interface _Replace {
                  perform(): void;
                  _pattern: java.util.regex.Pattern;
                  _replacement: string;
                  _text: StyledText;
                }
                interface Replace extends CombineTypes<[_Replace, java.lang.Object, jdk.javadoc.internal.doclets.toolkit.taglets.snippet.Action]> {}
                interface _Style$$static extends ClassLike {
                }
                let Style: _Style$$static;
                interface _Style {
                }
                interface Style extends CombineTypes<[_Style, java.lang.Object]> {}
                interface _Style$Link$$static extends ClassLike {
                  new(target: string): Style$Link;
                }
                let Style$Link: _Style$Link$$static;
                interface _Style$Link {
                  equals(o: any): boolean;
                  hashCode(): int;
                  target(): string;
                  toString(): string;
                }
                interface Style$Link extends CombineTypes<[_Style$Link, java.lang.Record, jdk.javadoc.internal.doclets.toolkit.taglets.snippet.Style]> {}
                interface _Style$Markup$$static extends ClassLike {
                  new(): Style$Markup;
                }
                let Style$Markup: _Style$Markup$$static;
                interface _Style$Markup {
                  equals(o: any): boolean;
                  hashCode(): int;
                  toString(): string;
                }
                interface Style$Markup extends CombineTypes<[_Style$Markup, java.lang.Record, jdk.javadoc.internal.doclets.toolkit.taglets.snippet.Style]> {}
                interface _Style$Name$$static extends ClassLike {
                  new(name: string): Style$Name;
                }
                let Style$Name: _Style$Name$$static;
                interface _Style$Name {
                  equals(o: any): boolean;
                  hashCode(): int;
                  name(): string;
                  toString(): string;
                }
                interface Style$Name extends CombineTypes<[_Style$Name, java.lang.Record, jdk.javadoc.internal.doclets.toolkit.taglets.snippet.Style]> {}
                interface _StyledText$$static extends ClassLike {
                  new(): StyledText;
                }
                let StyledText: _StyledText$$static;
                interface _StyledText {
                  addStyle(additionalStyles: java.util.Set<Style>): void;
                  _addStyle(start: int, end: int, additionalStyles: java.util.Set<Style>): void;
                  append(styles: java.util.Set<Style>, sequence: StyledText$charSequence): StyledText;
                  append(fragment: StyledText): StyledText;
                  asCharSequence(): StyledText$charSequence;
                  bookmark(name: string): void;
                  _bookmark(name: string, start: int, end: int): void;
                  consumeBy(consumer: StyledText$Consumer): void;
                  _consumeBy(consumer: StyledText$Consumer, start: int, end: int): void;
                  getBookmarkedText(bookmark: string): StyledText;
                  _init(): void;
                  length(): int;
                  replace(styles: java.util.Set<Style>, plaintext: StyledText$charSequence): void;
                  _replace(start: int, end: int, styles: java.util.Set<Style>, plaintext: StyledText$charSequence): void;
                  subText(start: int, end: int): StyledText;
                  _update(start: int, end: int, newLength: int, text: StyledText$SubText): void;
                  _bookmarks: java.util.Map<string,StyledText>;
                  _chars: snippet$stringBuilder;
                  _styles: StyledText$Styles;
                  _subtexts: java.util.List<java.lang.ref.WeakReference<StyledText$SubText>>;
                }
                interface StyledText extends CombineTypes<[_StyledText, java.lang.Object]> {}
                interface _StyledText$Consumer$$static extends ClassLike {
                }
                let StyledText$Consumer: _StyledText$Consumer$$static;
                interface _StyledText$Consumer {
                  consume(a0: java.util.Set<Style>, a1: StyledText$Consumer$charSequence): void;
(a0: java.util.Set<Style>, a1: StyledText$Consumer$charSequence): void;
                }
                interface StyledText$Consumer extends CombineTypes<[_StyledText$Consumer, java.lang.Object]> {}
                interface _StyledText$Styles$$static extends ClassLike {
                }
                let StyledText$Styles: _StyledText$Styles$$static;
                interface _StyledText$Styles {
                  _add(fromIndex: int, toIndex: int, additional: java.util.Set<Style>): void;
                  _consumeBy(consumer: StyledText$Consumer, seq: StyledText$Styles$charSequence, start: int, end: int): void;
                  _delete(fromIndex: int, toIndex: int): void;
                  _insert(fromIndex: int, length: int, s: java.util.Set<Style>): void;
                  _sum(a: java.util.Set<Style>, b: java.util.Set<Style>): java.util.Set<Style>;
                  _list: java.util.ArrayList<java.util.Set<Style>>;
                }
                interface StyledText$Styles extends CombineTypes<[_StyledText$Styles, java.lang.Object]> {}
                interface _StyledText$SubText$$static extends ClassLike {
                }
                let StyledText$SubText: _StyledText$SubText$$static;
                interface _StyledText$SubText {
                  addStyle(additionalStyles: java.util.Set<Style>): void;
                  asCharSequence(): StyledText$SubText$charSequence;
                  bookmark(name: string): void;
                  consumeBy(consumer: StyledText$Consumer): void;
                  getBookmarkedText(bookmark: string): StyledText;
                  _init(): void;
                  length(): int;
                  replace(styles: java.util.Set<Style>, plaintext: StyledText$SubText$charSequence): void;
                  subText(start: int, end: int): StyledText;
                  _end: int;
                  _start: int;
                  _this$0: StyledText;
                }
                interface StyledText$SubText extends CombineTypes<[_StyledText$SubText, jdk.javadoc.internal.doclets.toolkit.taglets.snippet.StyledText]> {}
              }
              interface _BaseTaglet$$static extends ClassLike {
                _new(tagKind: com.sun.source.doctree.DocTree$Kind, inline: boolean, sites: java.util.Set<javadoc.doclet.Taglet$Location>): BaseTaglet;
                _new(name: string, inline: boolean, sites: java.util.Set<javadoc.doclet.Taglet$Location>): BaseTaglet;
              }
              let BaseTaglet: _BaseTaglet$$static;
              interface _BaseTaglet {
                accepts(tree: com.sun.source.doctree.DocTree): boolean;
                getAllBlockTagOutput(holder: javax.lang.model.element.Element, writer: TagletWriter): Content;
                getAllowedLocations(): java.util.Set<javadoc.doclet.Taglet$Location>;
                getInlineTagOutput(element: javax.lang.model.element.Element, tag: com.sun.source.doctree.DocTree, writer: TagletWriter): Content;
                getName(): string;
                getTagKind(): com.sun.source.doctree.DocTree$Kind;
                inConstructor(): boolean;
                inField(): boolean;
                inMethod(): boolean;
                inModule(): boolean;
                inOverview(): boolean;
                inPackage(): boolean;
                inType(): boolean;
                isInlineTag(): boolean;
                _inline: boolean;
                _name: string;
                _sites: java.util.Set<javadoc.doclet.Taglet$Location>;
                _tagKind: com.sun.source.doctree.DocTree$Kind;
              }
              interface BaseTaglet extends CombineTypes<[_BaseTaglet, jdk.javadoc.internal.doclets.toolkit.taglets.Taglet, java.lang.Object]> {}
              interface _CodeTaglet$$static extends ClassLike {
                _new(): CodeTaglet;
              }
              let CodeTaglet: _CodeTaglet$$static;
              interface _CodeTaglet {
                getInlineTagOutput(element: javax.lang.model.element.Element, tag: com.sun.source.doctree.DocTree, writer: TagletWriter): Content;
              }
              interface CodeTaglet extends CombineTypes<[_CodeTaglet, jdk.javadoc.internal.doclets.toolkit.taglets.BaseTaglet]> {}
              interface _DeprecatedTaglet$$static extends ClassLike {
                new(): DeprecatedTaglet;
              }
              let DeprecatedTaglet: _DeprecatedTaglet$$static;
              interface _DeprecatedTaglet {
                getAllBlockTagOutput(holder: javax.lang.model.element.Element, writer: TagletWriter): Content;
              }
              interface DeprecatedTaglet extends CombineTypes<[_DeprecatedTaglet, jdk.javadoc.internal.doclets.toolkit.taglets.BaseTaglet]> {}
              interface _DocRootTaglet$$static extends ClassLike {
                new(): DocRootTaglet;
              }
              let DocRootTaglet: _DocRootTaglet$$static;
              interface _DocRootTaglet {
                getInlineTagOutput(holder: javax.lang.model.element.Element, tag: com.sun.source.doctree.DocTree, writer: TagletWriter): Content;
              }
              interface DocRootTaglet extends CombineTypes<[_DocRootTaglet, jdk.javadoc.internal.doclets.toolkit.taglets.BaseTaglet]> {}
              interface _IndexTaglet$$static extends ClassLike {
                _new(): IndexTaglet;
              }
              let IndexTaglet: _IndexTaglet$$static;
              interface _IndexTaglet {
                getInlineTagOutput(element: javax.lang.model.element.Element, tag: com.sun.source.doctree.DocTree, writer: TagletWriter): Content;
              }
              interface IndexTaglet extends CombineTypes<[_IndexTaglet, jdk.javadoc.internal.doclets.toolkit.taglets.BaseTaglet]> {}
              interface _InheritDocTaglet$$static extends ClassLike {
                _extractMainDescription(m: javax.lang.model.element.ExecutableElement, extractFirstSentenceOnly: boolean, utils: toolkit.util.Utils): java.util.Optional<InheritDocTaglet$Documentation>;
                new(): InheritDocTaglet;
              }
              let InheritDocTaglet: _InheritDocTaglet$$static;
              interface _InheritDocTaglet {
                getInlineTagOutput(e: javax.lang.model.element.Element, inheritDoc: com.sun.source.doctree.DocTree, tagletWriter: TagletWriter): Content;
                _retrieveInheritedDocumentation(writer: TagletWriter, method: javax.lang.model.element.ExecutableElement, inheritDoc: com.sun.source.doctree.DocTree, isFirstSentence: boolean): Content;
              }
              interface InheritDocTaglet extends CombineTypes<[_InheritDocTaglet, jdk.javadoc.internal.doclets.toolkit.taglets.BaseTaglet]> {}
              interface _InheritDocTaglet$Documentation$$static extends ClassLike {
              }
              let InheritDocTaglet$Documentation: _InheritDocTaglet$Documentation$$static;
              interface _InheritDocTaglet$Documentation {
                equals(o: any): boolean;
                hashCode(): int;
                mainDescription(): java.util.List<com.sun.source.doctree.DocTree>;
                method(): javax.lang.model.element.ExecutableElement;
                toString(): string;
              }
              interface InheritDocTaglet$Documentation extends CombineTypes<[_InheritDocTaglet$Documentation, java.lang.Record]> {}
              interface _InheritableTaglet$$static extends ClassLike {
              }
              let InheritableTaglet: _InheritableTaglet$$static;
              interface _InheritableTaglet {
                inherit(a0: javax.lang.model.element.Element, a1: com.sun.source.doctree.DocTree, a2: boolean, a3: BaseConfiguration): InheritableTaglet$Output;
(a0: javax.lang.model.element.Element, a1: com.sun.source.doctree.DocTree, a2: boolean, a3: BaseConfiguration): InheritableTaglet$Output;
              }
              interface InheritableTaglet extends CombineTypes<[_InheritableTaglet, jdk.javadoc.internal.doclets.toolkit.taglets.Taglet, java.lang.Object]> {}
              interface _InheritableTaglet$Output$$static extends ClassLike {
                new(holderTag: com.sun.source.doctree.DocTree, holder: javax.lang.model.element.Element, inlineTags: java.util.List<com.sun.source.doctree.DocTree>, isValidInheritDocTag: boolean): InheritableTaglet$Output;
              }
              let InheritableTaglet$Output: _InheritableTaglet$Output$$static;
              interface _InheritableTaglet$Output {
                equals(o: any): boolean;
                hashCode(): int;
                holder(): javax.lang.model.element.Element;
                holderTag(): com.sun.source.doctree.DocTree;
                inlineTags(): java.util.List<com.sun.source.doctree.DocTree>;
                isValidInheritDocTag(): boolean;
                toString(): string;
              }
              interface InheritableTaglet$Output extends CombineTypes<[_InheritableTaglet$Output, java.lang.Record]> {}
              interface _LiteralTaglet$$static extends ClassLike {
                _new(): LiteralTaglet;
              }
              let LiteralTaglet: _LiteralTaglet$$static;
              interface _LiteralTaglet {
                getInlineTagOutput(e: javax.lang.model.element.Element, tag: com.sun.source.doctree.DocTree, writer: TagletWriter): Content;
              }
              interface LiteralTaglet extends CombineTypes<[_LiteralTaglet, jdk.javadoc.internal.doclets.toolkit.taglets.BaseTaglet]> {}
              interface _ParamTaglet$$static extends ClassLike {
                _extract(utils: toolkit.util.Utils, method: javax.lang.model.element.ExecutableElement, position: int, typeParam: boolean): java.util.Optional<ParamTaglet$Documentation>;
                _mapNameToPosition(utils: toolkit.util.Utils, params: java.util.List<javax.lang.model.element.Element>): java.util.Map<string,int>;
                new(): ParamTaglet;
              }
              let ParamTaglet: _ParamTaglet$$static;
              interface _ParamTaglet {
                _convertParam(e: javax.lang.model.element.Element, kind: ParamTaglet$ParamKind, writer: TagletWriter, paramTag: com.sun.source.doctree.ParamTree, name: string, isFirstParam: boolean): Content;
                _convertParams(e: javax.lang.model.element.Element, kind: ParamTaglet$ParamKind, tags: java.util.List<com.sun.source.doctree.ParamTree>, parameters: java.util.List<javax.lang.model.element.Element>, writer: TagletWriter): Content;
                getAllBlockTagOutput(holder: javax.lang.model.element.Element, writer: TagletWriter): Content;
                _getInheritedTagletOutput(kind: ParamTaglet$ParamKind, holder: javax.lang.model.element.Element, writer: TagletWriter, param: javax.lang.model.element.Element, position: int, isFirst: boolean): Content;
                inherit(owner: javax.lang.model.element.Element, tag: com.sun.source.doctree.DocTree, isFirstSentence: boolean, configuration: BaseConfiguration): InheritableTaglet$Output;
              }
              interface ParamTaglet extends CombineTypes<[_ParamTaglet, jdk.javadoc.internal.doclets.toolkit.taglets.BaseTaglet, jdk.javadoc.internal.doclets.toolkit.taglets.InheritableTaglet]> {}
              interface _ParamTaglet$Documentation$$static extends ClassLike {
              }
              let ParamTaglet$Documentation: _ParamTaglet$Documentation$$static;
              interface _ParamTaglet$Documentation {
                equals(o: any): boolean;
                hashCode(): int;
                method(): javax.lang.model.element.ExecutableElement;
                paramTree(): com.sun.source.doctree.ParamTree;
                toString(): string;
              }
              interface ParamTaglet$Documentation extends CombineTypes<[_ParamTaglet$Documentation, java.lang.Record]> {}
              interface _ParamTaglet$ParamKind$$static extends ClassLike {
                valueOf(name: string): ParamTaglet$ParamKind;
                values(): ParamTaglet$ParamKind[];
                readonly PARAMETER: ParamTaglet$ParamKind;
                readonly RECORD_COMPONENT: ParamTaglet$ParamKind;
                readonly TYPE_PARAMETER: ParamTaglet$ParamKind;
              }
              let ParamTaglet$ParamKind: _ParamTaglet$ParamKind$$static;
              interface _ParamTaglet$ParamKind {
              }
              interface ParamTaglet$ParamKind extends CombineTypes<[_ParamTaglet$ParamKind]> {}
              interface _ReturnTaglet$$static extends ClassLike {
                _extract(utils: toolkit.util.Utils, method: javax.lang.model.element.ExecutableElement): java.util.Optional<ReturnTaglet$Documentation>;
                new(): ReturnTaglet;
              }
              let ReturnTaglet: _ReturnTaglet$$static;
              interface _ReturnTaglet {
                getAllBlockTagOutput(holder: javax.lang.model.element.Element, writer: TagletWriter): Content;
                getInlineTagOutput(element: javax.lang.model.element.Element, tag: com.sun.source.doctree.DocTree, writer: TagletWriter): Content;
                inherit(owner: javax.lang.model.element.Element, tag: com.sun.source.doctree.DocTree, isFirstSentence: boolean, configuration: BaseConfiguration): InheritableTaglet$Output;
                isBlockTag(): boolean;
              }
              interface ReturnTaglet extends CombineTypes<[_ReturnTaglet, jdk.javadoc.internal.doclets.toolkit.taglets.BaseTaglet, jdk.javadoc.internal.doclets.toolkit.taglets.InheritableTaglet]> {}
              interface _ReturnTaglet$Documentation$$static extends ClassLike {
              }
              let ReturnTaglet$Documentation: _ReturnTaglet$Documentation$$static;
              interface _ReturnTaglet$Documentation {
                equals(o: any): boolean;
                hashCode(): int;
                method(): javax.lang.model.element.ExecutableElement;
                returnTree(): com.sun.source.doctree.ReturnTree;
                toString(): string;
              }
              interface ReturnTaglet$Documentation extends CombineTypes<[_ReturnTaglet$Documentation, java.lang.Record]> {}
              interface _SeeTaglet$$static extends ClassLike {
                _extract(utils: toolkit.util.Utils, method: javax.lang.model.element.ExecutableElement): java.util.Optional<SeeTaglet$Documentation>;
                new(): SeeTaglet;
              }
              let SeeTaglet: _SeeTaglet$$static;
              interface _SeeTaglet {
                getAllBlockTagOutput(holder: javax.lang.model.element.Element, writer: TagletWriter): Content;
                inherit(owner: javax.lang.model.element.Element, tag: com.sun.source.doctree.DocTree, isFirstSentence: boolean, configuration: BaseConfiguration): InheritableTaglet$Output;
              }
              interface SeeTaglet extends CombineTypes<[_SeeTaglet, jdk.javadoc.internal.doclets.toolkit.taglets.BaseTaglet, jdk.javadoc.internal.doclets.toolkit.taglets.InheritableTaglet]> {}
              interface _SeeTaglet$Documentation$$static extends ClassLike {
              }
              let SeeTaglet$Documentation: _SeeTaglet$Documentation$$static;
              interface _SeeTaglet$Documentation {
                equals(o: any): boolean;
                hashCode(): int;
                method(): javax.lang.model.element.ExecutableElement;
                seeTrees(): java.util.List<com.sun.source.doctree.SeeTree>;
                toString(): string;
              }
              interface SeeTaglet$Documentation extends CombineTypes<[_SeeTaglet$Documentation, java.lang.Record]> {}
              interface _SimpleTaglet$$static extends ClassLike {
                _getLocations(locations: string): java.util.Set<javadoc.doclet.Taglet$Location>;
                _isEnabled(locations: string): boolean;
                new(tagName: string, header: string, locations: string): SimpleTaglet;
                new(tagKind: com.sun.source.doctree.DocTree$Kind, header: string, locations: java.util.Set<javadoc.doclet.Taglet$Location>): SimpleTaglet;
                new(tagName: string, header: string, locations: java.util.Set<javadoc.doclet.Taglet$Location>): SimpleTaglet;
                new(tagName: string, header: string, locations: java.util.Set<javadoc.doclet.Taglet$Location>, enabled: boolean): SimpleTaglet;
                new(tagKind: com.sun.source.doctree.DocTree$Kind, header: string, locations: java.util.Set<javadoc.doclet.Taglet$Location>, enabled: boolean): SimpleTaglet;
              }
              let SimpleTaglet: _SimpleTaglet$$static;
              interface _SimpleTaglet {
                _extractFirst(m: javax.lang.model.element.ExecutableElement, utils: toolkit.util.Utils): java.util.Optional<SimpleTaglet$Documentation>;
                getAllBlockTagOutput(holder: javax.lang.model.element.Element, writer: TagletWriter): Content;
                inherit(owner: javax.lang.model.element.Element, tag: com.sun.source.doctree.DocTree, isFirstSentence: boolean, configuration: BaseConfiguration): InheritableTaglet$Output;
                _enabled: boolean;
                _header: string;
              }
              interface SimpleTaglet extends CombineTypes<[_SimpleTaglet, jdk.javadoc.internal.doclets.toolkit.taglets.BaseTaglet, jdk.javadoc.internal.doclets.toolkit.taglets.InheritableTaglet]> {}
              interface _SimpleTaglet$Documentation$$static extends ClassLike {
                _new(tag: com.sun.source.doctree.DocTree, description: java.util.List<com.sun.source.doctree.DocTree>, method: javax.lang.model.element.ExecutableElement): SimpleTaglet$Documentation;
              }
              let SimpleTaglet$Documentation: _SimpleTaglet$Documentation$$static;
              interface _SimpleTaglet$Documentation {
                description(): java.util.List<com.sun.source.doctree.DocTree>;
                equals(o: any): boolean;
                hashCode(): int;
                method(): javax.lang.model.element.ExecutableElement;
                tag(): com.sun.source.doctree.DocTree;
                toString(): string;
              }
              interface SimpleTaglet$Documentation extends CombineTypes<[_SimpleTaglet$Documentation, java.lang.Record]> {}
              interface _SnippetTaglet$$static extends ClassLike {
                _diff(inline: string, external: string): string;
                _getPackageElement(e: javax.lang.model.element.Element, utils: toolkit.util.Utils): javax.lang.model.element.PackageElement;
                _stringValueOf(at: com.sun.source.doctree.AttributeTree): string;
                _toDisplayForm(source: taglets.snippet.StyledText): taglets.snippet.StyledText;
                new(): SnippetTaglet;
              }
              let SnippetTaglet: _SnippetTaglet$$static;
              interface _SnippetTaglet {
                _badSnippet(writer: TagletWriter, details: java.util.Optional<string>): Content;
                _error(writer: TagletWriter, holder: javax.lang.model.element.Element, tag: com.sun.source.doctree.DocTree, key: string, args: any[]): void;
                _error(writer: TagletWriter, holder: javax.lang.model.element.Element, tag: com.sun.source.doctree.DocTree, key: string, ...args: any[]): void;
                _generateContent(holder: javax.lang.model.element.Element, tag: com.sun.source.doctree.DocTree, writer: TagletWriter): Content;
                getInlineTagOutput(holder: javax.lang.model.element.Element, tag: com.sun.source.doctree.DocTree, writer: TagletWriter): Content;
                _languageFromFileName(fileName: string): string;
                _parse(resources: Resources, diags: SnippetTaglet$Diags, language: java.util.Optional<SnippetTaglet$Language>, content: string): taglets.snippet.StyledText;
              }
              interface SnippetTaglet extends CombineTypes<[_SnippetTaglet, jdk.javadoc.internal.doclets.toolkit.taglets.BaseTaglet]> {}
              interface _SnippetTaglet$BadSnippetException$$static extends ClassLike {
                _serialVersionUID: long;
                _new(tag: com.sun.source.doctree.DocTree, key: string, args: any[]): SnippetTaglet$BadSnippetException;
                _new(tag: com.sun.source.doctree.DocTree, key: string, ...args: any[]): SnippetTaglet$BadSnippetException;
              }
              let SnippetTaglet$BadSnippetException: _SnippetTaglet$BadSnippetException$$static;
              interface _SnippetTaglet$BadSnippetException {
                _args(): any[];
                _key(): string;
                _tag(): com.sun.source.doctree.DocTree;
                _args: any[];
                _key: string;
                _tag: com.sun.source.doctree.DocTree;
              }
              interface SnippetTaglet$BadSnippetException extends CombineTypes<[_SnippetTaglet$BadSnippetException, java.lang.Exception]> {}
              interface _SnippetTaglet$Diags$$static extends ClassLike {
              }
              let SnippetTaglet$Diags: _SnippetTaglet$Diags$$static;
              interface _SnippetTaglet$Diags {
                warn(a0: string, a1: int): void;
(a0: string, a1: int): void;
              }
              interface SnippetTaglet$Diags extends CombineTypes<[_SnippetTaglet$Diags, java.lang.Object]> {}
              interface _SnippetTaglet$Language$$static extends ClassLike {
                of(identifier: string): java.util.Optional<SnippetTaglet$Language>;
                valueOf(name: string): SnippetTaglet$Language;
                values(): SnippetTaglet$Language[];
                readonly JAVA: SnippetTaglet$Language;
                readonly PROPERTIES: SnippetTaglet$Language;
                _languages: java.util.Map<string,SnippetTaglet$Language>;
              }
              let SnippetTaglet$Language: _SnippetTaglet$Language$$static;
              interface _SnippetTaglet$Language {
                getIdentifier(): string;
                _identifier: string;
              }
              interface SnippetTaglet$Language extends CombineTypes<[_SnippetTaglet$Language]> {}
              interface _SpecTaglet$$static extends ClassLike {
                _extract(utils: toolkit.util.Utils, method: javax.lang.model.element.ExecutableElement): java.util.Optional<SpecTaglet$Documentation>;
                new(): SpecTaglet;
              }
              let SpecTaglet: _SpecTaglet$$static;
              interface _SpecTaglet {
                getAllBlockTagOutput(holder: javax.lang.model.element.Element, writer: TagletWriter): Content;
                inherit(owner: javax.lang.model.element.Element, tag: com.sun.source.doctree.DocTree, isFirstSentence: boolean, configuration: BaseConfiguration): InheritableTaglet$Output;
              }
              interface SpecTaglet extends CombineTypes<[_SpecTaglet, jdk.javadoc.internal.doclets.toolkit.taglets.BaseTaglet, jdk.javadoc.internal.doclets.toolkit.taglets.InheritableTaglet]> {}
              interface _SpecTaglet$Documentation$$static extends ClassLike {
              }
              let SpecTaglet$Documentation: _SpecTaglet$Documentation$$static;
              interface _SpecTaglet$Documentation {
                equals(o: any): boolean;
                hashCode(): int;
                method(): javax.lang.model.element.ExecutableElement;
                specTrees(): java.util.List<com.sun.source.doctree.SpecTree>;
                toString(): string;
              }
              interface SpecTaglet$Documentation extends CombineTypes<[_SpecTaglet$Documentation, java.lang.Record]> {}
              interface _SummaryTaglet$$static extends ClassLike {
                new(): SummaryTaglet;
              }
              let SummaryTaglet: _SummaryTaglet$$static;
              interface _SummaryTaglet {
                getInlineTagOutput(holder: javax.lang.model.element.Element, tag: com.sun.source.doctree.DocTree, writer: TagletWriter): Content;
              }
              interface SummaryTaglet extends CombineTypes<[_SummaryTaglet, jdk.javadoc.internal.doclets.toolkit.taglets.BaseTaglet]> {}
              interface _SystemPropertyTaglet$$static extends ClassLike {
                _new(): SystemPropertyTaglet;
              }
              let SystemPropertyTaglet: _SystemPropertyTaglet$$static;
              interface _SystemPropertyTaglet {
                getInlineTagOutput(element: javax.lang.model.element.Element, tag: com.sun.source.doctree.DocTree, writer: TagletWriter): Content;
              }
              interface SystemPropertyTaglet extends CombineTypes<[_SystemPropertyTaglet, jdk.javadoc.internal.doclets.toolkit.taglets.BaseTaglet]> {}
              interface _Taglet$$static extends ClassLike {
              }
              let Taglet: _Taglet$$static;
              interface _Taglet {
                getAllBlockTagOutput(a0: javax.lang.model.element.Element, a1: TagletWriter): Content;
                getAllowedLocations(): java.util.Set<javadoc.doclet.Taglet$Location>;
                getInlineTagOutput(a0: javax.lang.model.element.Element, a1: com.sun.source.doctree.DocTree, a2: TagletWriter): Content;
                getName(): string;
                inConstructor(): boolean;
                inField(): boolean;
                inMethod(): boolean;
                inModule(): boolean;
                inOverview(): boolean;
                inPackage(): boolean;
                inType(): boolean;
                isBlockTag(): boolean;
                isInlineTag(): boolean;
              }
              interface Taglet extends CombineTypes<[_Taglet, java.lang.Object]> {}
              interface _Taglet$UnsupportedTagletOperationException$$static extends ClassLike {
                _serialVersionUID: long;
                new(message: string): Taglet$UnsupportedTagletOperationException;
              }
              let Taglet$UnsupportedTagletOperationException: _Taglet$UnsupportedTagletOperationException$$static;
              interface _Taglet$UnsupportedTagletOperationException {
              }
              interface Taglet$UnsupportedTagletOperationException extends CombineTypes<[_Taglet$UnsupportedTagletOperationException, java.lang.UnsupportedOperationException]> {}
              interface _TagletManager$$static extends ClassLike {
                new(configuration: BaseConfiguration): TagletManager;
              }
              let TagletManager: _TagletManager$$static;
              interface _TagletManager {
                addCustomTag(classname: string, fileManager: javax.tools.JavaFileManager): void;
                addNewSimpleCustomTag(tagName: string, header: string, locations: string): void;
                _addStandardTaglet(taglet: Taglet): void;
                _addStandardTaglet(taglet: Taglet, alias: com.sun.source.doctree.DocTree$Kind): void;
                _checkTagName(name: string): void;
                checkTags(element: javax.lang.model.element.Element, trees: java.lang.Iterable<com.sun.source.doctree.DocTree>): void;
                _format(b: boolean, s: string): string;
                getAllTagletNames(): java.util.Set<string>;
                getBlockTaglets(e: javax.lang.model.element.Element): java.util.List<Taglet>;
                _getInlineTaglets(): java.util.Map<string,Taglet>;
                getSerializedFormTaglets(): java.util.List<Taglet>;
                _getTaglet(name: string): Taglet;
                _initJavaFXTaglets(): void;
                _initStandardTaglets(): void;
                initTagletPath(fileManager: javax.tools.JavaFileManager): void;
                _initTaglets(): void;
                isKnownCustomTag(tagName: string): boolean;
                loadTaglets(fileManager: javax.tools.JavaFileManager): void;
                printReport(): void;
                _printReportHelper(noticeKey: string, names: java.util.Set<string>): void;
                _printTagMisuseWarn(ch: toolkit.util.CommentHelper, taglet: Taglet, tag: com.sun.source.doctree.DocTree, holderType: string): void;
                _registerTaglet(instance: javadoc.doclet.Taglet): void;
                _seenTag(name: string): void;
                _showTaglets(out: java.io.PrintStream): void;
                _allTaglets: java.util.LinkedHashMap<string,Taglet>;
                _blockTagletsByLocation: java.util.Map<javadoc.doclet.Taglet$Location,java.util.List<Taglet>>;
                _configuration: BaseConfiguration;
                _docEnv: javadoc.doclet.DocletEnvironment;
                _doclet: javadoc.doclet.Doclet;
                _inlineTags: java.util.Map<string,Taglet>;
                _javafx: boolean;
                _messages: Messages;
                _nosince: boolean;
                _overriddenStandardTags: java.util.Set<string>;
                _potentiallyConflictingTags: java.util.Set<string>;
                _resources: Resources;
                _serializedFormTags: java.util.List<Taglet>;
                _showTaglets: boolean;
                _showauthor: boolean;
                _showversion: boolean;
                _standardTags: java.util.Set<string>;
                _standardTagsLowercase: java.util.Set<string>;
                _tagletPath: string;
                _unseenCustomTags: java.util.Set<string>;
                _utils: toolkit.util.Utils;
              }
              interface TagletManager extends CombineTypes<[_TagletManager, java.lang.Object]> {}
              interface _TagletWriter$$static extends ClassLike {
                _new(isFirstSentence: boolean): TagletWriter;
              }
              let TagletWriter: _TagletWriter$$static;
              interface _TagletWriter {
                _codeTagOutput(a0: javax.lang.model.element.Element, a1: com.sun.source.doctree.LiteralTree): Content;
                commentTagsToOutput(a0: com.sun.source.doctree.DocTree, a1: java.util.List<com.sun.source.doctree.DocTree>): Content;
                commentTagsToOutput(a0: javax.lang.model.element.Element, a1: java.util.List<com.sun.source.doctree.DocTree>): Content;
                commentTagsToOutput(a0: javax.lang.model.element.Element, a1: com.sun.source.doctree.DocTree, a2: java.util.List<com.sun.source.doctree.DocTree>, a3: boolean): Content;
                configuration(): BaseConfiguration;
                _deprecatedTagOutput(a0: javax.lang.model.element.Element): Content;
                getBlockTagOutput(tagletManager: TagletManager, element: javax.lang.model.element.Element, taglets: java.util.List<Taglet>): Content;
                _getCurrentPageElement(): javax.lang.model.element.TypeElement;
                _getDocRootOutput(): Content;
                getInlineTagOutput(holder: javax.lang.model.element.Element, tagletManager: TagletManager, inlineTag: com.sun.source.doctree.DocTree): Content;
                getOutputInstance(): Content;
                _getParamHeader(a0: ParamTaglet$ParamKind): Content;
                _getThrowsHeader(): Content;
                _indexTagOutput(a0: javax.lang.model.element.Element, a1: com.sun.source.doctree.IndexTree): Content;
                _invalidTagOutput(a0: string, a1: java.util.Optional<string>): Content;
                _linkTagOutput(a0: javax.lang.model.element.Element, a1: com.sun.source.doctree.LinkTree): Content;
                _literalTagOutput(a0: javax.lang.model.element.Element, a1: com.sun.source.doctree.LiteralTree): Content;
                _paramTagOutput(a0: javax.lang.model.element.Element, a1: com.sun.source.doctree.ParamTree, a2: string): Content;
                _returnTagOutput(a0: javax.lang.model.element.Element, a1: com.sun.source.doctree.ReturnTree, a2: boolean): Content;
                _seeTagOutput(a0: javax.lang.model.element.Element, a1: java.util.List<com.sun.source.doctree.SeeTree>): Content;
                _simpleBlockTagOutput(a0: javax.lang.model.element.Element, a1: java.util.List<com.sun.source.doctree.DocTree>, a2: string): Content;
                _snippetTagOutput(a0: javax.lang.model.element.Element, a1: com.sun.source.doctree.SnippetTree, a2: taglets.snippet.StyledText, a3: string, a4: string): Content;
                _specTagOutput(a0: javax.lang.model.element.Element, a1: java.util.List<com.sun.source.doctree.SpecTree>): Content;
                _systemPropertyTagOutput(a0: javax.lang.model.element.Element, a1: com.sun.source.doctree.SystemPropertyTree): Content;
                _throwsTagOutput(a0: javax.lang.model.type.TypeMirror, a1: java.util.Optional<Content>): Content;
                _valueTagOutput(a0: javax.lang.model.element.VariableElement, a1: string, a2: boolean): Content;
                _isFirstSentence: boolean;
              }
              interface TagletWriter extends CombineTypes<[_TagletWriter, java.lang.Object]> {}
              interface _ThrowsTaglet$$static extends ClassLike {
                _detailedDescriptionOf(e: javax.lang.model.element.Element): string;
                _diagnosticDescriptionOf(e: javax.lang.model.element.Element): string;
                _indexOfInheritDoc(tag: com.sun.source.doctree.ThrowsTree, holder: javax.lang.model.element.ExecutableElement): int;
                _newAssertionError(objects: any[]): java.lang.AssertionError;
                _newAssertionError(...objects: any[]): java.lang.AssertionError;
                _toExceptionTags(holder: javax.lang.model.element.ExecutableElement, tags: java.util.List<com.sun.source.doctree.ThrowsTree>): java.util.Map<com.sun.source.doctree.ThrowsTree,javax.lang.model.element.ExecutableElement>;
                _toResult(target: javax.lang.model.element.Element, holder: javax.lang.model.element.ExecutableElement, tags: java.util.List<com.sun.source.doctree.ThrowsTree>): toolkit.util.DocFinder$Result<java.util.Map<com.sun.source.doctree.ThrowsTree,javax.lang.model.element.ExecutableElement>>;
                new(configuration: BaseConfiguration): ThrowsTaglet;
              }
              let ThrowsTaglet: _ThrowsTaglet$$static;
              interface _ThrowsTaglet {
                _expandShallowly(exceptionType: javax.lang.model.element.Element, holder: javax.lang.model.element.ExecutableElement): java.util.Map<com.sun.source.doctree.ThrowsTree,javax.lang.model.element.ExecutableElement>;
                _findByTypeElement(targetExceptionType: javax.lang.model.element.Element, executable: javax.lang.model.element.ExecutableElement): java.util.List<com.sun.source.doctree.ThrowsTree>;
                getAllBlockTagOutput(holder: javax.lang.model.element.Element, writer: TagletWriter): Content;
                _getAllBlockTagOutput0(holder: javax.lang.model.element.Element, writer: TagletWriter): Content;
                _getExceptionType(tag: com.sun.source.doctree.ThrowsTree, holder: javax.lang.model.element.ExecutableElement): javax.lang.model.element.Element;
                _getSubstitutedThrownTypes(types: javax.lang.model.util.Types, declaredThrownTypes: java.util.List<javax.lang.model.type.TypeMirror>, instantiatedThrownTypes: java.util.List<javax.lang.model.type.TypeMirror>): java.util.Map<javax.lang.model.type.TypeMirror,javax.lang.model.type.TypeMirror>;
                inherit(owner: javax.lang.model.element.Element, tag: com.sun.source.doctree.DocTree, isFirstSentence: boolean, configuration: BaseConfiguration): InheritableTaglet$Output;
                _outputAnExceptionTagDeeply(exceptionSection: ThrowsTaglet$ExceptionSectionBuilder, originalExceptionElement: javax.lang.model.element.Element, tag: com.sun.source.doctree.ThrowsTree, holder: javax.lang.model.element.ExecutableElement, alreadyDocumentedExceptions: java.util.Set<javax.lang.model.type.TypeMirror>, typeSubstitutions: java.util.Map<javax.lang.model.type.TypeMirror,javax.lang.model.type.TypeMirror>, writer: TagletWriter): void;
                _outputAnExceptionTagDeeply(exceptionSection: ThrowsTaglet$ExceptionSectionBuilder, originalExceptionElement: javax.lang.model.element.Element, tag: com.sun.source.doctree.ThrowsTree, holder: javax.lang.model.element.ExecutableElement, beginNewEntry: boolean, alreadyDocumentedExceptions: java.util.Set<javax.lang.model.type.TypeMirror>, typeSubstitutions: java.util.Map<javax.lang.model.type.TypeMirror,javax.lang.model.type.TypeMirror>, writer: TagletWriter): void;
                _configuration: BaseConfiguration;
                _utils: toolkit.util.Utils;
              }
              interface ThrowsTaglet extends CombineTypes<[_ThrowsTaglet, jdk.javadoc.internal.doclets.toolkit.taglets.BaseTaglet, jdk.javadoc.internal.doclets.toolkit.taglets.InheritableTaglet]> {}
              interface _ThrowsTaglet$ExceptionSectionBuilder$$static extends ClassLike {
                _new(writer: TagletWriter): ThrowsTaglet$ExceptionSectionBuilder;
              }
              let ThrowsTaglet$ExceptionSectionBuilder: _ThrowsTaglet$ExceptionSectionBuilder$$static;
              interface _ThrowsTaglet$ExceptionSectionBuilder {
                _beginEntry(exceptionType: javax.lang.model.type.TypeMirror): void;
                _build(): Content;
                _continueEntry(c: Content): void;
                _debugEntryBegun(): boolean;
                endEntry(): void;
                _began: boolean;
                _current: doclets.formats.html.markup.ContentBuilder;
                _exceptionType: javax.lang.model.type.TypeMirror;
                _headerAdded: boolean;
                _result: Content;
                _writer: TagletWriter;
              }
              interface ThrowsTaglet$ExceptionSectionBuilder extends CombineTypes<[_ThrowsTaglet$ExceptionSectionBuilder, java.lang.Object]> {}
              interface _ThrowsTaglet$Failure$$static extends ClassLike {
                _new(tag: com.sun.source.doctree.DocTree, holder: javax.lang.model.element.ExecutableElement): ThrowsTaglet$Failure;
              }
              let ThrowsTaglet$Failure: _ThrowsTaglet$Failure$$static;
              interface _ThrowsTaglet$Failure {
                _holder(): javax.lang.model.element.ExecutableElement;
                _tag(): com.sun.source.doctree.DocTree;
                _holder: javax.lang.model.element.ExecutableElement;
                _tag: com.sun.source.doctree.DocTree;
              }
              interface ThrowsTaglet$Failure extends CombineTypes<[_ThrowsTaglet$Failure, java.lang.Exception]> {}
              interface _ThrowsTaglet$Failure$ExceptionTypeNotFound$$static extends ClassLike {
                _new(tag: com.sun.source.doctree.ThrowsTree, holder: javax.lang.model.element.ExecutableElement): ThrowsTaglet$Failure$ExceptionTypeNotFound;
              }
              let ThrowsTaglet$Failure$ExceptionTypeNotFound: _ThrowsTaglet$Failure$ExceptionTypeNotFound$$static;
              interface _ThrowsTaglet$Failure$ExceptionTypeNotFound {
                _tag(): com.sun.source.doctree.ThrowsTree;
                _tag(): com.sun.source.doctree.DocTree;
              }
              interface ThrowsTaglet$Failure$ExceptionTypeNotFound extends CombineTypes<[_ThrowsTaglet$Failure$ExceptionTypeNotFound, jdk.javadoc.internal.doclets.toolkit.taglets.ThrowsTaglet$Failure]> {}
              interface _ThrowsTaglet$Failure$Invalid$$static extends ClassLike {
                new(tag: com.sun.source.doctree.DocTree, holder: javax.lang.model.element.ExecutableElement): ThrowsTaglet$Failure$Invalid;
              }
              let ThrowsTaglet$Failure$Invalid: _ThrowsTaglet$Failure$Invalid$$static;
              interface _ThrowsTaglet$Failure$Invalid {
              }
              interface ThrowsTaglet$Failure$Invalid extends CombineTypes<[_ThrowsTaglet$Failure$Invalid, jdk.javadoc.internal.doclets.toolkit.taglets.ThrowsTaglet$Failure]> {}
              interface _ThrowsTaglet$Failure$NotExceptionType$$static extends ClassLike {
                new(tag: com.sun.source.doctree.ThrowsTree, holder: javax.lang.model.element.ExecutableElement, type: javax.lang.model.element.Element): ThrowsTaglet$Failure$NotExceptionType;
              }
              let ThrowsTaglet$Failure$NotExceptionType: _ThrowsTaglet$Failure$NotExceptionType$$static;
              interface _ThrowsTaglet$Failure$NotExceptionType {
                _tag(): com.sun.source.doctree.ThrowsTree;
                _tag(): com.sun.source.doctree.DocTree;
                _type(): javax.lang.model.element.Element;
                _type: javax.lang.model.element.Element;
              }
              interface ThrowsTaglet$Failure$NotExceptionType extends CombineTypes<[_ThrowsTaglet$Failure$NotExceptionType, jdk.javadoc.internal.doclets.toolkit.taglets.ThrowsTaglet$Failure]> {}
              interface _ThrowsTaglet$Failure$Undocumented$$static extends ClassLike {
                new(tag: com.sun.source.doctree.DocTree, holder: javax.lang.model.element.ExecutableElement, exceptionElement: javax.lang.model.element.Element): ThrowsTaglet$Failure$Undocumented;
              }
              let ThrowsTaglet$Failure$Undocumented: _ThrowsTaglet$Failure$Undocumented$$static;
              interface _ThrowsTaglet$Failure$Undocumented {
                _exceptionElement: javax.lang.model.element.Element;
              }
              interface ThrowsTaglet$Failure$Undocumented extends CombineTypes<[_ThrowsTaglet$Failure$Undocumented, jdk.javadoc.internal.doclets.toolkit.taglets.ThrowsTaglet$Failure]> {}
              interface _ThrowsTaglet$Failure$UnsupportedTypeParameter$$static extends ClassLike {
                new(element: javax.lang.model.element.Element, tag: com.sun.source.doctree.ThrowsTree, holder: javax.lang.model.element.ExecutableElement): ThrowsTaglet$Failure$UnsupportedTypeParameter;
              }
              let ThrowsTaglet$Failure$UnsupportedTypeParameter: _ThrowsTaglet$Failure$UnsupportedTypeParameter$$static;
              interface _ThrowsTaglet$Failure$UnsupportedTypeParameter {
                _tag(): com.sun.source.doctree.ThrowsTree;
                _tag(): com.sun.source.doctree.DocTree;
                _element: javax.lang.model.element.Element;
              }
              interface ThrowsTaglet$Failure$UnsupportedTypeParameter extends CombineTypes<[_ThrowsTaglet$Failure$UnsupportedTypeParameter, jdk.javadoc.internal.doclets.toolkit.taglets.ThrowsTaglet$Failure]> {}
              interface _UserTaglet$$static extends ClassLike {
                new(t: javadoc.doclet.Taglet): UserTaglet;
              }
              let UserTaglet: _UserTaglet$$static;
              interface _UserTaglet {
                getAllBlockTagOutput(holder: javax.lang.model.element.Element, writer: TagletWriter): Content;
                getAllowedLocations(): java.util.Set<javadoc.doclet.Taglet$Location>;
                getInlineTagOutput(element: javax.lang.model.element.Element, tag: com.sun.source.doctree.DocTree, writer: TagletWriter): Content;
                getName(): string;
                inConstructor(): boolean;
                inField(): boolean;
                inMethod(): boolean;
                inModule(): boolean;
                inOverview(): boolean;
                inPackage(): boolean;
                inType(): boolean;
                isBlockTag(): boolean;
                isInlineTag(): boolean;
                _userTaglet: javadoc.doclet.Taglet;
              }
              interface UserTaglet extends CombineTypes<[_UserTaglet, jdk.javadoc.internal.doclets.toolkit.taglets.Taglet, java.lang.Object]> {}
              interface _ValueTaglet$$static extends ClassLike {
                new(): ValueTaglet;
              }
              let ValueTaglet: _ValueTaglet$$static;
              interface _ValueTaglet {
                getInlineTagOutput(holder: javax.lang.model.element.Element, tag: com.sun.source.doctree.DocTree, writer: TagletWriter): Content;
                _getVariableElement(holder: javax.lang.model.element.Element, config: BaseConfiguration, tag: com.sun.source.doctree.DocTree): javax.lang.model.element.VariableElement;
              }
              interface ValueTaglet extends CombineTypes<[_ValueTaglet, jdk.javadoc.internal.doclets.toolkit.taglets.BaseTaglet]> {}
            }
            module util {
              interface _ClassTree$$static extends ClassLike {
                new(configuration: BaseConfiguration): ClassTree;
                new(classesSet: java.util.SortedSet<javax.lang.model.element.TypeElement>, configuration: BaseConfiguration): ClassTree;
              }
              let ClassTree: _ClassTree$$static;
              interface _ClassTree {
                annotationInterfaces(): ClassTree$Hierarchy;
                _buildTree(typeElements: java.lang.Iterable<javax.lang.model.element.TypeElement>): void;
                classes(): ClassTree$Hierarchy;
                enumClasses(): ClassTree$Hierarchy;
                hierarchy(typeElement: javax.lang.model.element.TypeElement): ClassTree$Hierarchy;
                implementingClasses(typeElement: javax.lang.model.element.TypeElement): java.util.SortedSet<javax.lang.model.element.TypeElement>;
                interfaces(): ClassTree$Hierarchy;
                _processInterface(typeElement: javax.lang.model.element.TypeElement): void;
                _processType(typeElement: javax.lang.model.element.TypeElement, hierarchy: ClassTree$Hierarchy): void;
                recordClasses(): ClassTree$Hierarchy;
                subClasses(typeElement: javax.lang.model.element.TypeElement): java.util.SortedSet<javax.lang.model.element.TypeElement>;
                subInterfaces(typeElement: javax.lang.model.element.TypeElement): java.util.SortedSet<javax.lang.model.element.TypeElement>;
                _configuration: BaseConfiguration;
                _hierarchies: java.util.Map<ClassTree$HierarchyKind,ClassTree$Hierarchy>;
                _implementingClasses: ClassTree$SubtypeMap;
                _utils: Utils;
              }
              interface ClassTree extends CombineTypes<[_ClassTree, java.lang.Object]> {}
              interface _ClassTree$Hierarchy$$static extends ClassLike {
                _new(comparator: java.util.Comparator<javax.lang.model.element.Element>): ClassTree$Hierarchy;
              }
              let ClassTree$Hierarchy: _ClassTree$Hierarchy$$static;
              interface _ClassTree$Hierarchy {
                allSubtypes(typeElement: javax.lang.model.element.TypeElement): java.util.SortedSet<javax.lang.model.element.TypeElement>;
                roots(): java.util.SortedSet<javax.lang.model.element.TypeElement>;
                subtypes(typeElement: javax.lang.model.element.TypeElement): java.util.SortedSet<javax.lang.model.element.TypeElement>;
                _comparator: java.util.Comparator<javax.lang.model.element.Element>;
                _roots: java.util.SortedSet<javax.lang.model.element.TypeElement>;
                _subtypes: ClassTree$SubtypeMap;
              }
              interface ClassTree$Hierarchy extends CombineTypes<[_ClassTree$Hierarchy, java.lang.Object]> {}
              interface _ClassTree$HierarchyKind$$static extends ClassLike {
                valueOf(name: string): ClassTree$HierarchyKind;
                values(): ClassTree$HierarchyKind[];
                readonly ANNOTATION_INTERFACES: ClassTree$HierarchyKind;
                readonly CLASSES: ClassTree$HierarchyKind;
                readonly ENUM_CLASSES: ClassTree$HierarchyKind;
                readonly INTERFACES: ClassTree$HierarchyKind;
                readonly RECORD_CLASSES: ClassTree$HierarchyKind;
              }
              let ClassTree$HierarchyKind: _ClassTree$HierarchyKind$$static;
              interface _ClassTree$HierarchyKind {
              }
              interface ClassTree$HierarchyKind extends CombineTypes<[_ClassTree$HierarchyKind]> {}
              interface _ClassTree$SubtypeMap$$static extends ClassLike {
                _new(comparator: java.util.Comparator<javax.lang.model.element.Element>): ClassTree$SubtypeMap;
              }
              let ClassTree$SubtypeMap: _ClassTree$SubtypeMap$$static;
              interface _ClassTree$SubtypeMap {
                _addSubtype(typeElement: javax.lang.model.element.TypeElement, subtype: javax.lang.model.element.TypeElement): boolean;
                _getSubtypes(typeElement: javax.lang.model.element.TypeElement): java.util.SortedSet<javax.lang.model.element.TypeElement>;
                _comparator: java.util.Comparator<javax.lang.model.element.Element>;
              }
              interface ClassTree$SubtypeMap extends CombineTypes<[_ClassTree$SubtypeMap, java.util.HashMap<javax.lang.model.element.TypeElement,java.util.SortedSet<javax.lang.model.element.TypeElement>>]> {}
              interface _ClassUseMapper$$static extends ClassLike {
                new(configuration: BaseConfiguration, classTree: ClassTree): ClassUseMapper;
              }
              let ClassUseMapper: _ClassUseMapper$$static;
              interface _ClassUseMapper {
                _add<T>(map: java.util.Map<javax.lang.model.element.TypeElement,java.util.List<T>>, te: javax.lang.model.element.TypeElement, ref: T): void;
                _addAll(map: java.util.Map<javax.lang.model.element.TypeElement,java.util.List<javax.lang.model.element.TypeElement>>, te: javax.lang.model.element.TypeElement, refs: java.util.Collection<javax.lang.model.element.TypeElement>): void;
                _addTypeParameterToMap<T>(map: java.util.Map<javax.lang.model.element.TypeElement,java.util.List<T>>, type: javax.lang.model.type.TypeMirror, holder: T): void;
                _classSet(te: javax.lang.model.element.TypeElement): java.util.Set<javax.lang.model.element.TypeElement>;
                _implementingClasses(te: javax.lang.model.element.TypeElement): java.util.Collection<javax.lang.model.element.TypeElement>;
                _mapAnnotations<T>(map: java.util.Map<javax.lang.model.element.TypeElement,java.util.List<T>>, e: javax.lang.model.element.Element, holder: T): void;
                _mapExecutable(ee: javax.lang.model.element.ExecutableElement): void;
                _mapTypeParameters<T>(map: java.util.Map<javax.lang.model.element.TypeElement,java.util.List<T>>, element: javax.lang.model.element.Element, holder: T): void;
                _mapTypeParameters<T>(map: java.util.Map<javax.lang.model.element.TypeElement,java.util.List<T>>, aType: javax.lang.model.type.TypeMirror, holder: T): void;
                _packageSet(te: javax.lang.model.element.TypeElement): java.util.Set<javax.lang.model.element.PackageElement>;
                _refList<T>(map: java.util.Map<javax.lang.model.element.TypeElement,java.util.List<T>>, element: javax.lang.model.element.TypeElement): java.util.List<T>;
                _subclasses(te: javax.lang.model.element.TypeElement): java.util.Collection<javax.lang.model.element.TypeElement>;
                _subinterfaces(te: javax.lang.model.element.TypeElement): java.util.Collection<javax.lang.model.element.TypeElement>;
                readonly annotationToField: java.util.Map<javax.lang.model.element.TypeElement,java.util.List<javax.lang.model.element.VariableElement>>;
                readonly classToClass: java.util.Map<javax.lang.model.element.TypeElement,java.util.Set<javax.lang.model.element.TypeElement>>;
                readonly classToClassAnnotations: java.util.Map<javax.lang.model.element.TypeElement,java.util.List<javax.lang.model.element.TypeElement>>;
                readonly classToClassTypeParam: java.util.Map<javax.lang.model.element.TypeElement,java.util.List<javax.lang.model.element.TypeElement>>;
                readonly classToConstructorAnnotations: java.util.Map<javax.lang.model.element.TypeElement,java.util.List<javax.lang.model.element.ExecutableElement>>;
                readonly classToConstructorArgTypeParam: java.util.Map<javax.lang.model.element.TypeElement,java.util.List<javax.lang.model.element.ExecutableElement>>;
                readonly classToConstructorArgs: java.util.Map<javax.lang.model.element.TypeElement,java.util.List<javax.lang.model.element.ExecutableElement>>;
                readonly classToConstructorParamAnnotation: java.util.Map<javax.lang.model.element.TypeElement,java.util.List<javax.lang.model.element.ExecutableElement>>;
                readonly classToConstructorThrows: java.util.Map<javax.lang.model.element.TypeElement,java.util.List<javax.lang.model.element.ExecutableElement>>;
                readonly classToField: java.util.Map<javax.lang.model.element.TypeElement,java.util.List<javax.lang.model.element.VariableElement>>;
                readonly classToFieldTypeParam: java.util.Map<javax.lang.model.element.TypeElement,java.util.List<javax.lang.model.element.VariableElement>>;
                classToImplementingClass: java.util.Map<javax.lang.model.element.TypeElement,java.util.List<javax.lang.model.element.TypeElement>>;
                readonly classToMethodAnnotations: java.util.Map<javax.lang.model.element.TypeElement,java.util.List<javax.lang.model.element.ExecutableElement>>;
                readonly classToMethodArgTypeParam: java.util.Map<javax.lang.model.element.TypeElement,java.util.List<javax.lang.model.element.ExecutableElement>>;
                readonly classToMethodArgs: java.util.Map<javax.lang.model.element.TypeElement,java.util.List<javax.lang.model.element.ExecutableElement>>;
                readonly classToMethodParamAnnotation: java.util.Map<javax.lang.model.element.TypeElement,java.util.List<javax.lang.model.element.ExecutableElement>>;
                readonly classToMethodReturn: java.util.Map<javax.lang.model.element.TypeElement,java.util.List<javax.lang.model.element.ExecutableElement>>;
                readonly classToMethodReturnTypeParam: java.util.Map<javax.lang.model.element.TypeElement,java.util.List<javax.lang.model.element.ExecutableElement>>;
                readonly classToMethodThrows: java.util.Map<javax.lang.model.element.TypeElement,java.util.List<javax.lang.model.element.ExecutableElement>>;
                readonly classToMethodTypeParam: java.util.Map<javax.lang.model.element.TypeElement,java.util.List<javax.lang.model.element.ExecutableElement>>;
                readonly classToPackage: java.util.Map<javax.lang.model.element.TypeElement,java.util.Set<javax.lang.model.element.PackageElement>>;
                readonly classToPackageAnnotations: java.util.Map<javax.lang.model.element.TypeElement,java.util.List<javax.lang.model.element.PackageElement>>;
                readonly classToSubclass: java.util.Map<javax.lang.model.element.TypeElement,java.util.List<javax.lang.model.element.TypeElement>>;
                readonly classToSubinterface: java.util.Map<javax.lang.model.element.TypeElement,java.util.List<javax.lang.model.element.TypeElement>>;
                _classTree: ClassTree;
                _comparators: Comparators;
                _docEnv: javadoc.doclet.DocletEnvironment;
                _elementUtils: javax.lang.model.util.Elements;
                _typeUtils: javax.lang.model.util.Types;
                _utils: Utils;
              }
              interface ClassUseMapper extends CombineTypes<[_ClassUseMapper, java.lang.Object]> {}
              interface _CommentHelper$$static extends ClassLike {
                _normalizeSignature(sig: string): string;
                new(configuration: BaseConfiguration, element: javax.lang.model.element.Element, path: com.sun.source.util.TreePath, dcTree: com.sun.source.doctree.DocCommentTree): CommentHelper;
              }
              let CommentHelper: _CommentHelper$$static;
              interface _CommentHelper {
                getBody(dtree: com.sun.source.doctree.DocTree): java.util.List<com.sun.source.doctree.DocTree>;
                getDescription(dtree: com.sun.source.doctree.DocTree): java.util.List<com.sun.source.doctree.DocTree>;
                getDocTreePath(dtree: com.sun.source.doctree.DocTree): com.sun.source.util.DocTreePath;
                _getElement(rtree: com.sun.source.doctree.ReferenceTree): javax.lang.model.element.Element;
                getException(tt: com.sun.source.doctree.ThrowsTree): javax.lang.model.element.Element;
                getFirstSentenceTrees(body: java.util.List<com.sun.source.doctree.DocTree>): java.util.List<com.sun.source.doctree.DocTree>;
                _getInheritedDocTreePath(dtree: com.sun.source.doctree.DocTree, ee: javax.lang.model.element.ExecutableElement): com.sun.source.util.DocTreePath;
                getName(dtree: com.sun.source.doctree.DocTree): com.sun.source.doctree.IdentifierTree;
                getParameterName(p: com.sun.source.doctree.ParamTree): string;
                getReference(dtree: com.sun.source.doctree.DocTree): java.util.List<com.sun.source.doctree.DocTree>;
                getReferencedClass(e: javax.lang.model.element.Element): javax.lang.model.element.TypeElement;
                getReferencedElement(dtree: com.sun.source.doctree.DocTree): javax.lang.model.element.Element;
                getReferencedFragment(signature: string): string;
                getReferencedMember(dtree: com.sun.source.doctree.DocTree): javax.lang.model.element.Element;
                getReferencedMember(e: javax.lang.model.element.Element): javax.lang.model.element.Element;
                getReferencedModule(e: javax.lang.model.element.Element): javax.lang.model.element.ModuleElement;
                getReferencedModuleName(signature: string): string;
                getReferencedPackage(e: javax.lang.model.element.Element): javax.lang.model.element.PackageElement;
                getReferencedSignature(dtree: com.sun.source.doctree.DocTree): string;
                getReferencedType(dtree: com.sun.source.doctree.DocTree): javax.lang.model.type.TypeMirror;
                getServiceType(dtree: com.sun.source.doctree.DocTree): javax.lang.model.element.TypeElement;
                getTagName(dtree: com.sun.source.doctree.DocTree): string;
                getTags(dtree: com.sun.source.doctree.DocTree): java.util.List<com.sun.source.doctree.DocTree>;
                getType(rtree: com.sun.source.doctree.ReferenceTree): javax.lang.model.type.TypeMirror;
                getType(dtree: com.sun.source.doctree.DocTree): com.sun.source.doctree.ReferenceTree;
                toString(): string;
                _configuration: BaseConfiguration;
                readonly dcTree: com.sun.source.doctree.DocCommentTree;
                readonly element: javax.lang.model.element.Element;
                readonly path: com.sun.source.util.TreePath;
              }
              interface CommentHelper extends CombineTypes<[_CommentHelper, java.lang.Object]> {}
              interface _CommentHelper$ReferenceDocTreeVisitor$$static<R> extends ClassLike {
              }
              let CommentHelper$ReferenceDocTreeVisitor: _CommentHelper$ReferenceDocTreeVisitor$$static<R>;
              interface _CommentHelper$ReferenceDocTreeVisitor<R> {
                _defaultAction(node: com.sun.source.doctree.DocTree, p: java.lang.Void): R;
                _defaultAction(a0: com.sun.source.doctree.DocTree, a1: any): any;
                visitLink(node: com.sun.source.doctree.LinkTree, p: java.lang.Void): R;
                visitLink(a0: com.sun.source.doctree.LinkTree, a1: any): any;
                visitProvides(node: com.sun.source.doctree.ProvidesTree, p: java.lang.Void): R;
                visitProvides(a0: com.sun.source.doctree.ProvidesTree, a1: any): any;
                visitSee(node: com.sun.source.doctree.SeeTree, p: java.lang.Void): R;
                visitSee(a0: com.sun.source.doctree.SeeTree, a1: any): any;
                visitSerialField(node: com.sun.source.doctree.SerialFieldTree, p: java.lang.Void): R;
                visitSerialField(a0: com.sun.source.doctree.SerialFieldTree, a1: any): any;
                visitUses(node: com.sun.source.doctree.UsesTree, p: java.lang.Void): R;
                visitUses(a0: com.sun.source.doctree.UsesTree, a1: any): any;
                visitValue(node: com.sun.source.doctree.ValueTree, p: java.lang.Void): R;
                visitValue(a0: com.sun.source.doctree.ValueTree, a1: any): any;
              }
              interface CommentHelper$ReferenceDocTreeVisitor<R> extends CombineTypes<[_CommentHelper$ReferenceDocTreeVisitor<R>, com.sun.source.util.SimpleDocTreeVisitor<R,java.lang.Void>]> {}
              interface _Comparators$$static extends ClassLike {
                _new(utils: Utils): Comparators;
              }
              let Comparators: _Comparators$$static;
              interface _Comparators {
                getIndexElementKey(element: javax.lang.model.element.Element): string;
                makeAllClassesComparator(): java.util.Comparator<javax.lang.model.element.Element>;
                makeClassUseComparator(): java.util.Comparator<javax.lang.model.element.Element>;
                makeGeneralPurposeComparator(): java.util.Comparator<javax.lang.model.element.Element>;
                makeIndexElementComparator(): java.util.Comparator<javax.lang.model.element.Element>;
                makeModuleComparator(): java.util.Comparator<javax.lang.model.element.Element>;
                makeOverrideUseComparator(): java.util.Comparator<javax.lang.model.element.Element>;
                makePackageComparator(): java.util.Comparator<javax.lang.model.element.Element>;
                makeSerialFieldTreeComparator(): java.util.Comparator<com.sun.source.doctree.SerialFieldTree>;
                makeSummaryComparator(): java.util.Comparator<javax.lang.model.element.Element>;
                makeTypeMirrorClassUseComparator(): java.util.Comparator<javax.lang.model.type.TypeMirror>;
                makeTypeMirrorIndexUseComparator(): java.util.Comparator<javax.lang.model.type.TypeMirror>;
                _allClassesComparator: java.util.Comparator<javax.lang.model.element.Element>;
                _classUseComparator: java.util.Comparator<javax.lang.model.element.Element>;
                _indexUseComparator: java.util.Comparator<javax.lang.model.element.Element>;
                _moduleComparator: java.util.Comparator<javax.lang.model.element.Element>;
                _overrideUseComparator: java.util.Comparator<javax.lang.model.element.Element>;
                _packageComparator: java.util.Comparator<javax.lang.model.element.Element>;
                _serialFieldTreeComparator: java.util.Comparator<com.sun.source.doctree.SerialFieldTree>;
                _summaryComparator: java.util.Comparator<javax.lang.model.element.Element>;
                _typeMirrorClassUseComparator: java.util.Comparator<javax.lang.model.type.TypeMirror>;
                _typeMirrorIndexUseComparator: java.util.Comparator<javax.lang.model.type.TypeMirror>;
                _utils: Utils;
              }
              interface Comparators extends CombineTypes<[_Comparators, java.lang.Object]> {}
              interface _Comparators$ElementComparator$$static extends ClassLike {
                new(a0: Comparators): Comparators$ElementComparator;
              }
              let Comparators$ElementComparator: _Comparators$ElementComparator$$static;
              interface _Comparators$ElementComparator {
                _compareElementKinds(e1: javax.lang.model.element.Element, e2: javax.lang.model.element.Element): int;
                _compareFullyQualifiedNames(e1: javax.lang.model.element.Element, e2: javax.lang.model.element.Element): int;
                _compareModuleNames(e1: javax.lang.model.element.Element, e2: javax.lang.model.element.Element): int;
                _compareNames(e1: javax.lang.model.element.Element, e2: javax.lang.model.element.Element): int;
                _compareParameters(caseSensitive: boolean, params1: java.util.List<javax.lang.model.element.VariableElement>, params2: java.util.List<javax.lang.model.element.VariableElement>): int;
                _compareParameters(e1: javax.lang.model.element.Element, e2: javax.lang.model.element.Element): int;
                _getFullyQualifiedName(e: javax.lang.model.element.Element): string;
                _getKindIndex(e: javax.lang.model.element.Element): int;
                _getParametersAsString(params: java.util.List<javax.lang.model.element.VariableElement>): string;
                _getTypeCode(t: javax.lang.model.type.TypeMirror): string;
                _hasParameters(e: javax.lang.model.element.Element): boolean;
                _this$0: Comparators;
              }
              interface Comparators$ElementComparator extends CombineTypes<[_Comparators$ElementComparator, java.lang.Object, java.util.Comparator<javax.lang.model.element.Element>]> {}
              interface _DeprecatedAPIListBuilder$$static extends ClassLike {
                new(configuration: BaseConfiguration, since: java.util.List<string>): DeprecatedAPIListBuilder;
              }
              let DeprecatedAPIListBuilder: _DeprecatedAPIListBuilder$$static;
              interface _DeprecatedAPIListBuilder {
                getForRemoval(): java.util.SortedSet<javax.lang.model.element.Element>;
                _handleElement(e: javax.lang.model.element.Element): void;
                _forRemoval: java.util.SortedSet<javax.lang.model.element.Element>;
                _foundReleases: java.util.Set<string>;
                readonly releases: java.util.List<string>;
              }
              interface DeprecatedAPIListBuilder extends CombineTypes<[_DeprecatedAPIListBuilder, jdk.javadoc.internal.doclets.toolkit.util.SummaryAPIListBuilder]> {}
              interface _DocFile$$static extends ClassLike {
                createFileForDirectory(configuration: BaseConfiguration, file: string): DocFile;
                createFileForInput(configuration: BaseConfiguration, file: string): DocFile;
                createFileForInput(configuration: BaseConfiguration, file: java.nio.file.Path): DocFile;
                createFileForOutput(configuration: BaseConfiguration, path: DocPath): DocFile;
                list(configuration: BaseConfiguration, location: javax.tools.JavaFileManager$Location, path: DocPath): java.lang.Iterable<DocFile>;
                _read(inFile: DocFile, input: java.io.InputStream, buf: byte[]): int;
                _readResource(docPath: DocPath, _in: java.io.InputStream, buf: byte[]): int;
                _readResourceLine(docPath: DocPath, _in: java.io.BufferedReader): string;
                _write(outFile: DocFile, out: java.io.OutputStream, buf: byte[], len: int): void;
                _write(outFile: DocFile, out: java.io.Writer, text: string): void;
                readonly PLATFORM_LINE_SEPARATOR: string;
                _replacePtn: java.util.regex.Pattern;
                _new(): DocFile;
                _new(location: javax.tools.JavaFileManager$Location, path: DocPath): DocFile;
              }
              let DocFile: _DocFile$$static;
              interface _DocFile {
                canRead(): boolean;
                canWrite(): boolean;
                copyFile(fromFile: DocFile): void;
                copyResource(resource: DocPath, overwrite: boolean, replaceNewLine: boolean): void;
                copyResource(resource: DocPath, resources: Resources): void;
                _copyResource(resource: DocPath, replaceNewLine: boolean, resources: Resources): void;
                exists(): boolean;
                getFileObject(): javax.tools.FileObject;
                getName(): string;
                getPath(): string;
                isAbsolute(): boolean;
                isDirectory(): boolean;
                isFile(): boolean;
                isSameFile(a0: DocFile): boolean;
                list(): java.lang.Iterable<DocFile>;
                _localize(line: string, resources: Resources): string;
                mkdirs(): boolean;
                openInputStream(): java.io.InputStream;
                openOutputStream(): java.io.OutputStream;
                openWriter(): java.io.Writer;
                resolve(a0: DocPath): DocFile;
                resolve(a0: string): DocFile;
                resolveAgainst(a0: javax.tools.JavaFileManager$Location): DocFile;
                _location: javax.tools.JavaFileManager$Location;
                _path: DocPath;
              }
              interface DocFile extends CombineTypes<[_DocFile, java.lang.Object]> {}
              interface _DocFileFactory$$static extends ClassLike {
                getFactory(configuration: BaseConfiguration): DocFileFactory;
                _new(configuration: BaseConfiguration): DocFileFactory;
              }
              let DocFileFactory: _DocFileFactory$$static;
              interface _DocFileFactory {
                _createFileForDirectory(a0: string): DocFile;
                _createFileForInput(a0: string): DocFile;
                _createFileForInput(a0: java.nio.file.Path): DocFile;
                _createFileForOutput(a0: DocPath): DocFile;
                _list(a0: javax.tools.JavaFileManager$Location, a1: DocPath): java.lang.Iterable<DocFile>;
                setDestDir(a0: string): void;
                _configuration: BaseConfiguration;
              }
              interface DocFileFactory extends CombineTypes<[_DocFileFactory, java.lang.Object]> {}
              interface _DocFileIOException$$static extends ClassLike {
                _serialVersionUID: long;
                new(fileName: DocFile, mode: DocFileIOException$Mode, cause: java.io.IOException): DocFileIOException;
              }
              let DocFileIOException: _DocFileIOException$$static;
              interface _DocFileIOException {
                readonly fileName: DocFile;
                readonly mode: DocFileIOException$Mode;
              }
              interface DocFileIOException extends CombineTypes<[_DocFileIOException, jdk.javadoc.internal.doclets.toolkit.DocletException]> {}
              interface _DocFileIOException$Mode$$static extends ClassLike {
                valueOf(name: string): DocFileIOException$Mode;
                values(): DocFileIOException$Mode[];
                readonly READ: DocFileIOException$Mode;
                readonly WRITE: DocFileIOException$Mode;
              }
              let DocFileIOException$Mode: _DocFileIOException$Mode$$static;
              interface _DocFileIOException$Mode {
              }
              interface DocFileIOException$Mode extends CombineTypes<[_DocFileIOException$Mode]> {}
              interface _DocFinder$$static extends ClassLike {
                _CONTINUE: DocFinder$Result<any>;
                _SKIP: DocFinder$Result<any>;
                _new(overriddenMethodLookup: java.util.function.Function<javax.lang.model.element.ExecutableElement,javax.lang.model.element.ExecutableElement>, implementedMethodsLookup: java.util.function.BiFunction<javax.lang.model.element.ExecutableElement,javax.lang.model.element.ExecutableElement,java.lang.Iterable<javax.lang.model.element.ExecutableElement>>): DocFinder;
              }
              let DocFinder: _DocFinder$$static;
              interface _DocFinder {
                _methodsOverriddenBy(method: javax.lang.model.element.ExecutableElement): java.util.Iterator<javax.lang.model.element.ExecutableElement>;
                search<T, X>(method: javax.lang.model.element.ExecutableElement, criterion: DocFinder$Criterion<T,X>): DocFinder$Result<T>;
                search<T, X>(method: javax.lang.model.element.ExecutableElement, includeMethod: boolean, criterion: DocFinder$Criterion<T,X>): DocFinder$Result<T>;
                _search0<T, X>(method: javax.lang.model.element.ExecutableElement, includeMethodInSearch: boolean, throwExceptionIfDoesNotOverride: boolean, criterion: DocFinder$Criterion<T,X>): DocFinder$Result<T>;
                trySearch<T, X>(method: javax.lang.model.element.ExecutableElement, criterion: DocFinder$Criterion<T,X>): DocFinder$Result<T>;
                _implementedMethodsLookup: java.util.function.BiFunction<javax.lang.model.element.ExecutableElement,javax.lang.model.element.ExecutableElement,java.lang.Iterable<javax.lang.model.element.ExecutableElement>>;
                _overriddenMethodLookup: java.util.function.Function<javax.lang.model.element.ExecutableElement,javax.lang.model.element.ExecutableElement>;
              }
              interface DocFinder extends CombineTypes<[_DocFinder, java.lang.Object]> {}
              interface _DocFinder$Concluded$$static<T> extends ClassLike {
                _new(value: T): DocFinder$Concluded<T>;
              }
              let DocFinder$Concluded: _DocFinder$Concluded$$static<T>;
              interface _DocFinder$Concluded<T> {
                equals(o: any): boolean;
                hashCode(): int;
                toOptional(): java.util.Optional<T>;
                toString(): string;
                value(): T;
              }
              interface DocFinder$Concluded<T> extends CombineTypes<[_DocFinder$Concluded<T>, DocFinder$Result$Conclude<T>, java.lang.Record]> {}
              interface _DocFinder$Continued$$static<T> extends ClassLike {
              }
              let DocFinder$Continued: _DocFinder$Continued$$static<T>;
              interface _DocFinder$Continued<T> {
                equals(o: any): boolean;
                hashCode(): int;
                toString(): string;
              }
              interface DocFinder$Continued<T> extends CombineTypes<[_DocFinder$Continued<T>, DocFinder$Result$Continue<T>, java.lang.Record]> {}
              interface _DocFinder$Criterion$$static<T,X> extends ClassLike {
              }
              let DocFinder$Criterion: _DocFinder$Criterion$$static<T,X>;
              interface _DocFinder$Criterion<T,X> {
                apply(a0: javax.lang.model.element.ExecutableElement): DocFinder$Result<T>;
(a0: javax.lang.model.element.ExecutableElement): DocFinder$Result<T>;
              }
              interface DocFinder$Criterion<T,X> extends CombineTypes<[_DocFinder$Criterion<T,X>, java.lang.Object]> {}
              interface _DocFinder$NoOverriddenMethodsFound$$static extends ClassLike {
              }
              let DocFinder$NoOverriddenMethodsFound: _DocFinder$NoOverriddenMethodsFound$$static;
              interface _DocFinder$NoOverriddenMethodsFound {
              }
              interface DocFinder$NoOverriddenMethodsFound extends CombineTypes<[_DocFinder$NoOverriddenMethodsFound, java.lang.Exception]> {}
              interface _DocFinder$Result$$static<T> extends ClassLike {
                CONCLUDE<T>(value: T): DocFinder$Result<T>;
                CONTINUE<T>(): DocFinder$Result<T>;
                SKIP<T>(): DocFinder$Result<T>;
                fromOptional<T>(optional: java.util.Optional<T>): DocFinder$Result<T>;
              }
              let DocFinder$Result: _DocFinder$Result$$static<T>;
              interface _DocFinder$Result<T> {
                toOptional(): java.util.Optional<T>;
              }
              interface DocFinder$Result<T> extends CombineTypes<[_DocFinder$Result<T>, java.lang.Object]> {}
              interface _DocFinder$Result$Conclude$$static<T> extends ClassLike {
              }
              let DocFinder$Result$Conclude: _DocFinder$Result$Conclude$$static<T>;
              interface _DocFinder$Result$Conclude<T> {
                value(): T;
(): T;
              }
              interface DocFinder$Result$Conclude<T> extends CombineTypes<[_DocFinder$Result$Conclude<T>, java.lang.Object, DocFinder$Result<T>]> {}
              interface _DocFinder$Result$Continue$$static<T> extends ClassLike {
              }
              let DocFinder$Result$Continue: _DocFinder$Result$Continue$$static<T>;
              interface _DocFinder$Result$Continue<T> {
              }
              interface DocFinder$Result$Continue<T> extends CombineTypes<[_DocFinder$Result$Continue<T>, java.lang.Object, DocFinder$Result<T>]> {}
              interface _DocFinder$Result$Skip$$static<T> extends ClassLike {
              }
              let DocFinder$Result$Skip: _DocFinder$Result$Skip$$static<T>;
              interface _DocFinder$Result$Skip<T> {
              }
              interface DocFinder$Result$Skip<T> extends CombineTypes<[_DocFinder$Result$Skip<T>, java.lang.Object, DocFinder$Result<T>]> {}
              interface _DocFinder$Skipped$$static<T> extends ClassLike {
              }
              let DocFinder$Skipped: _DocFinder$Skipped$$static<T>;
              interface _DocFinder$Skipped<T> {
                equals(o: any): boolean;
                hashCode(): int;
                toString(): string;
              }
              interface DocFinder$Skipped<T> extends CombineTypes<[_DocFinder$Skipped<T>, java.lang.Record, DocFinder$Result$Skip<T>]> {}
              interface _DocLink$$static extends ClassLike {
                fragment(fragment: string): DocLink;
                _isEmpty(s: string): boolean;
                new(path: DocPath): DocLink;
                new(path: DocPath, fragment: string): DocLink;
                new(path: string, fragment: string): DocLink;
              }
              let DocLink: _DocLink$$static;
              interface _DocLink {
                _isAbsoluteURL(path: DocPath): boolean;
                relativizeAgainst(base: DocPath): DocLink;
                toString(): string;
                withFragment(fragment: string): DocLink;
                _fragment: string;
                _path: DocPath;
              }
              interface DocLink extends CombineTypes<[_DocLink, java.lang.Object]> {}
              interface _DocPath$$static extends ClassLike {
                create(p: string): DocPath;
                _normalize(path: string): java.util.List<string>;
                _normalize(parts: java.util.List<string>): java.util.List<string>;
                readonly empty: DocPath;
                readonly parent: DocPath;
                _new(p: string): DocPath;
              }
              let DocPath: _DocPath$$static;
              interface _DocPath {
                basename(): DocPath;
                equals(other: any): boolean;
                fragment(fragment: string): DocLink;
                getPath(): string;
                hashCode(): int;
                invert(): DocPath;
                isEmpty(): boolean;
                normalize(): DocPath;
                parent(): DocPath;
                relativize(other: DocPath): DocPath;
                resolve(p: string): DocPath;
                resolve(p: DocPath): DocPath;
                _path: string;
              }
              interface DocPath extends CombineTypes<[_DocPath, java.lang.Object]> {}
              interface _DocPaths$$static extends ClassLike {
                forModule(mdle: javax.lang.model.element.ModuleElement): DocPath;
                forRoot(pkgElement: javax.lang.model.element.PackageElement): DocPath;
                indexN(n: int): DocPath;
                readonly ALLCLASSES_INDEX: DocPath;
                readonly ALLPACKAGES_INDEX: DocPath;
                readonly CLASS_USE: DocPath;
                readonly CLIPBOARD_SVG: DocPath;
                readonly CONSTANT_VALUES: DocPath;
                readonly DEPRECATED_LIST: DocPath;
                readonly DOC_FILES: DocPath;
                readonly DOT_DOT: DocPath;
                readonly ELEMENT_LIST: DocPath;
                readonly EXTERNAL_SPECS: DocPath;
                readonly GLASS_IMG: DocPath;
                readonly HELP_DOC: DocPath;
                readonly INDEX: DocPath;
                readonly INDEX_ALL: DocPath;
                readonly INDEX_FILES: DocPath;
                readonly JAVASCRIPT: DocPath;
                readonly JQUERY_JS: DocPath;
                readonly JQUERY_UI_CSS: DocPath;
                readonly JQUERY_UI_JS: DocPath;
                readonly LEGAL: DocPath;
                readonly LINK_SVG: DocPath;
                readonly MEMBER_SEARCH_INDEX_JS: DocPath;
                readonly MODULE_SEARCH_INDEX_JS: DocPath;
                readonly NEW_LIST: DocPath;
                readonly OVERVIEW_SUMMARY: DocPath;
                readonly OVERVIEW_TREE: DocPath;
                readonly PACKAGE_LIST: DocPath;
                readonly PACKAGE_SEARCH_INDEX_JS: DocPath;
                readonly PACKAGE_SUMMARY: DocPath;
                readonly PACKAGE_TREE: DocPath;
                readonly PACKAGE_USE: DocPath;
                readonly PREVIEW_LIST: DocPath;
                readonly RESOURCES: DocPath;
                readonly SCRIPT_DIR: DocPath;
                readonly SEARCH_JS: DocPath;
                readonly SEARCH_JS_TEMPLATE: DocPath;
                readonly SEARCH_PAGE: DocPath;
                readonly SEARCH_PAGE_JS: DocPath;
                readonly SERIALIZED_FORM: DocPath;
                readonly SOURCE_OUTPUT: DocPath;
                readonly STYLESHEET: DocPath;
                readonly SYSTEM_PROPERTIES: DocPath;
                readonly TAG_SEARCH_INDEX_JS: DocPath;
                readonly TYPE_SEARCH_INDEX_JS: DocPath;
                readonly X_IMG: DocPath;
                new(utils: Utils): DocPaths;
              }
              let DocPaths: _DocPaths$$static;
              interface _DocPaths {
                _createModulePath(mdle: javax.lang.model.element.ModuleElement, path: string): DocPath;
                _createModulePath(moduleName: string, path: string): DocPath;
                forClass(typeElement: javax.lang.model.element.TypeElement): DocPath;
                forName(typeElement: javax.lang.model.element.TypeElement): DocPath;
                forPackage(typeElement: javax.lang.model.element.TypeElement): DocPath;
                forPackage(pkgElement: javax.lang.model.element.PackageElement): DocPath;
                modulePath(mdle: javax.lang.model.element.ModuleElement, path: string): DocPath;
                moduleSummary(mdle: javax.lang.model.element.ModuleElement): DocPath;
                moduleSummary(mdleName: string): DocPath;
                relativePath(from: javax.lang.model.element.PackageElement, to: javax.lang.model.element.PackageElement): DocPath;
                _moduleSeparator: string;
                _utils: Utils;
              }
              interface DocPaths extends CombineTypes<[_DocPaths, java.lang.Object]> {}
              interface _DocletConstants$$static extends ClassLike {
                readonly DEFAULT_ELEMENT_NAME: string;
                readonly MODULE_PREFIX: string;
                new(): DocletConstants;
              }
              let DocletConstants: _DocletConstants$$static;
              interface _DocletConstants {
              }
              interface DocletConstants extends CombineTypes<[_DocletConstants, java.lang.Object]> {}
              interface _ElementListWriter$$static extends ClassLike {
                generate(configuration: BaseConfiguration): void;
                new(configuration: BaseConfiguration): ElementListWriter;
              }
              let ElementListWriter: _ElementListWriter$$static;
              interface _ElementListWriter {
                _generateElementListFile(docEnv: javadoc.doclet.DocletEnvironment): void;
                _configuration: BaseConfiguration;
                _file: DocFile;
                _options: BaseOptions;
                _utils: Utils;
              }
              interface ElementListWriter extends CombineTypes<[_ElementListWriter, java.lang.Object]> {}
              interface _Extern$$static extends ClassLike {
                new(configuration: BaseConfiguration): Extern;
              }
              let Extern: _Extern$$static;
              interface _Extern {
                _adjustEndFileSeparator(url: string): string;
                _checkLinkCompatibility(packageName: string, moduleName: string, path: string, showDiagnostic: boolean): string;
                checkPlatformLinks(linkPlatformProperties: string, reporter: javadoc.doclet.Reporter): void;
                _findElementItem(element: javax.lang.model.element.Element): Extern$Item;
                _getCustomPlatformDocs(version: int, linkPlatformProperties: string): string;
                _getDefaultPlatformDocs(version: int): string;
                getExternalLink(element: javax.lang.model.element.Element, relativepath: DocPath, filename: string): DocLink;
                getExternalLink(element: javax.lang.model.element.Element, relativepath: DocPath, filename: string, memberName: string): DocLink;
                _getOldFormHtmlName(name: string): string;
                _getPlatformElementList(version: int): DocPath;
                _getSourceVersionNumber(): int;
                isExternal(element: javax.lang.model.element.Element): boolean;
                isModule(elementName: string): boolean;
                _isOldFormPlatformDocs(version: int): boolean;
                _isPrerelease(sourceVersion: int): boolean;
                isUrl(urlCandidate: string): boolean;
                link(url: string, reporter: javadoc.doclet.Reporter): boolean;
                link(url: string, elemlisturl: string, reporter: javadoc.doclet.Reporter): boolean;
                _link(url: string, elemlisturl: string, reporter: javadoc.doclet.Reporter, linkoffline: boolean): boolean;
                _open(url: java.net.URL): java.io.InputStream;
                _printModularityMismatchDiagnostic(key: string, arg: any): void;
                _readElementList(file: DocFile, path: string, isOldFormDoc: boolean): void;
                _readElementList(input: java.io.InputStream, path: string, relative: boolean, platformVersion: int, isOldFormDoc: boolean): void;
                _readElementListFromFile(path: string, elemListPath: DocFile): void;
                _readElementListFromURL(urlpath: string, elemlisturlpath: java.net.URL): void;
                _readPackageListFromURL(urlpath: string, elemlisturlpath: java.net.URL): void;
                _toURL(url: string): java.net.URL;
                _configuration: BaseConfiguration;
                _linkoffline: boolean;
                _moduleItems: java.util.Map<string,Extern$Item>;
                _packageItems: java.util.Map<string,java.util.Map<string,Extern$Item>>;
                _resources: Resources;
                _utils: Utils;
              }
              interface Extern extends CombineTypes<[_Extern, java.lang.Object]> {}
              interface _Extern$Fault$$static extends ClassLike {
                _serialVersionUID: long;
                _new(msg: string, cause: java.lang.Exception): Extern$Fault;
              }
              let Extern$Fault: _Extern$Fault$$static;
              interface _Extern$Fault {
              }
              interface Extern$Fault extends CombineTypes<[_Extern$Fault, java.lang.Exception]> {}
              interface _Extern$Item$$static extends ClassLike {
                _new(elementName: string, path: DocPath, relative: boolean, useOldFormId: boolean): Extern$Item;
              }
              let Extern$Item: _Extern$Item$$static;
              interface _Extern$Item {
                toString(): string;
                _elementName: string;
                _path: DocPath;
                _relative: boolean;
                _useOldFormId: boolean;
              }
              interface Extern$Item extends CombineTypes<[_Extern$Item, java.lang.Object]> {}
              interface _Group$$static extends ClassLike {
                new(configuration: BaseConfiguration): Group;
              }
              let Group: _Group$$static;
              interface _Group {
                checkModuleGroups(groupname: string, moduleNameFormList: string): boolean;
                checkPackageGroups(groupname: string, pkgNameFormList: string): boolean;
                _foundGroupFormat(map: java.util.Map<string,any>, elementFormat: string): boolean;
                getGroupList(): java.util.List<string>;
                _getModuleList(map: java.util.Map<string,java.util.SortedSet<javax.lang.model.element.ModuleElement>>, groupname: string): java.util.SortedSet<javax.lang.model.element.ModuleElement>;
                _getPkgList(map: java.util.Map<string,java.util.SortedSet<javax.lang.model.element.PackageElement>>, groupname: string): java.util.SortedSet<javax.lang.model.element.PackageElement>;
                groupModules(modules: java.util.Set<javax.lang.model.element.ModuleElement>): java.util.Map<string,java.util.SortedSet<javax.lang.model.element.ModuleElement>>;
                groupPackages(packages: java.util.Set<javax.lang.model.element.PackageElement>): java.util.Map<string,java.util.SortedSet<javax.lang.model.element.PackageElement>>;
                _initMessages(): void;
                _regExpGroupName(elementName: string): string;
                _configuration: BaseConfiguration;
                _elementNameGroupMap: java.util.Map<string,string>;
                _groupList: java.util.List<string>;
                _messages: Messages;
                _regExpGroupMap: java.util.Map<string,string>;
                _sortedRegExpList: java.util.List<string>;
              }
              interface Group extends CombineTypes<[_Group, java.lang.Object]> {}
              interface _Group$MapKeyComparator$$static extends ClassLike {
              }
              let Group$MapKeyComparator: _Group$MapKeyComparator$$static;
              interface _Group$MapKeyComparator {
                compare(key1: string, key2: string): int;
                compare(a0: any, a1: any): int;
              }
              interface Group$MapKeyComparator extends CombineTypes<[_Group$MapKeyComparator, java.lang.Object, java.util.Comparator<string>]> {}
              interface _IndexBuilder$$static extends ClassLike {
                _keyCharacter(s: string): IndexBuilder$character;
                new(configuration: BaseConfiguration, noDeprecated: boolean): IndexBuilder;
                new(configuration: BaseConfiguration, noDeprecated: boolean, classesOnly: boolean): IndexBuilder;
              }
              let IndexBuilder: _IndexBuilder$$static;
              interface _IndexBuilder {
                add(item: IndexItem): void;
                addElements(): void;
                getFirstCharacters(): java.util.List<IndexBuilder$character>;
                _getIndexItemKey(ii: IndexItem): string;
                getItems(key: IndexBuilder$character): java.util.SortedSet<IndexItem>;
                getItems(cat: IndexItem$Category): java.util.SortedSet<IndexItem>;
                getItems(kind: com.sun.source.doctree.DocTree$Kind): java.util.SortedSet<IndexItem>;
                _indexMembers(te: javax.lang.model.element.TypeElement): void;
                _indexMembers(typeElement: javax.lang.model.element.TypeElement, members: java.lang.Iterable<javax.lang.model.element.Element>): void;
                _indexModules(): void;
                _indexPackage(packageElement: javax.lang.model.element.PackageElement): void;
                _indexTypeElements(elements: java.lang.Iterable<javax.lang.model.element.TypeElement>): void;
                _makeClassComparator(): java.util.Comparator<IndexItem>;
                makeGenericSearchIndexComparator(): java.util.Comparator<IndexItem>;
                _makeIndexComparator(): java.util.Comparator<IndexItem>;
                makeTypeSearchIndexComparator(): java.util.Comparator<IndexItem>;
                _shouldIndex(element: javax.lang.model.element.Element): boolean;
                _classesOnly: boolean;
                _configuration: BaseConfiguration;
                _itemsByCategory: java.util.Map<IndexItem$Category,java.util.SortedSet<IndexItem>>;
                _itemsByFirstChar: java.util.Map<util$character,java.util.SortedSet<IndexItem>>;
                _mainComparator: java.util.Comparator<IndexItem>;
                _noDeprecated: boolean;
                _utils: Utils;
              }
              interface IndexBuilder extends CombineTypes<[_IndexBuilder, java.lang.Object]> {}
              interface _IndexItem$$static extends ClassLike {
                of(moduleElement: javax.lang.model.element.ModuleElement, utils: Utils): IndexItem;
                of(packageElement: javax.lang.model.element.PackageElement, utils: Utils): IndexItem;
                of(typeElement: javax.lang.model.element.TypeElement, utils: Utils): IndexItem;
                of(typeElement: javax.lang.model.element.TypeElement, member: javax.lang.model.element.Element, utils: Utils): IndexItem;
                of(element: javax.lang.model.element.Element, docTree: com.sun.source.doctree.DocTree, label: string, holder: string, description: string, link: DocLink): IndexItem;
                of(category: IndexItem$Category, label: string, path: DocPath): IndexItem;
              }
              let IndexItem: _IndexItem$$static;
              interface _IndexItem {
                _escapeQuotes(s: string): string;
                getCategory(): IndexItem$Category;
                _getCategory(docTree: com.sun.source.doctree.DocTree): IndexItem$Category;
                _getCategory(element: javax.lang.model.element.Element): IndexItem$Category;
                getContainingTypeElement(): javax.lang.model.element.TypeElement;
                getDescription(): string;
                getDocTree(): com.sun.source.doctree.DocTree;
                getElement(): javax.lang.model.element.Element;
                getFullyQualifiedLabel(utils: Utils): string;
                getHolder(): string;
                getLabel(): string;
                getSimpleName(): string;
                getUrl(): string;
                isElementItem(): boolean;
                isKind(kind: com.sun.source.doctree.DocTree$Kind): boolean;
                isTagItem(): boolean;
                setContainingClass(c: string): IndexItem;
                setContainingModule(m: string): IndexItem;
                setContainingPackage(p: string): IndexItem;
                setUrl(u: string): IndexItem;
                toJSON(): string;
                _containingClass: string;
                _containingModule: string;
                _containingPackage: string;
                _element: javax.lang.model.element.Element;
                _label: string;
                _url: string;
              }
              interface IndexItem extends CombineTypes<[_IndexItem, java.lang.Object]> {}
              interface _IndexItem$Category$$static extends ClassLike {
                valueOf(name: string): IndexItem$Category;
                values(): IndexItem$Category[];
                readonly MEMBERS: IndexItem$Category;
                readonly MODULES: IndexItem$Category;
                readonly PACKAGES: IndexItem$Category;
                readonly TAGS: IndexItem$Category;
                readonly TYPES: IndexItem$Category;
              }
              let IndexItem$Category: _IndexItem$Category$$static;
              interface _IndexItem$Category {
              }
              interface IndexItem$Category extends CombineTypes<[_IndexItem$Category]> {}
              interface _InternalException$$static extends ClassLike {
                _serialVersionUID: long;
                new(message: string, cause: java.lang.Throwable): InternalException;
              }
              let InternalException: _InternalException$$static;
              interface _InternalException {
              }
              interface InternalException extends CombineTypes<[_InternalException, jdk.javadoc.internal.doclets.toolkit.DocletException]> {}
              interface _JavaScriptScanner$$static extends ClassLike {
                new(): JavaScriptScanner;
              }
              let JavaScriptScanner: _JavaScriptScanner$$static;
              interface _JavaScriptScanner {
                scan(tree: com.sun.source.doctree.DocCommentTree, p: com.sun.source.util.TreePath, f: java.util.function.Consumer<com.sun.source.util.DocTreePath>): java.lang.Void;
                visitAttribute(tree: com.sun.source.doctree.AttributeTree, f: java.util.function.Consumer<com.sun.source.util.DocTreePath>): java.lang.Void;
                visitAttribute(a0: com.sun.source.doctree.AttributeTree, a1: any): any;
                visitStartElement(tree: com.sun.source.doctree.StartElementTree, f: java.util.function.Consumer<com.sun.source.util.DocTreePath>): java.lang.Void;
                visitStartElement(a0: com.sun.source.doctree.StartElementTree, a1: any): any;
              }
              interface JavaScriptScanner extends CombineTypes<[_JavaScriptScanner, com.sun.source.util.DocTreePathScanner<java.lang.Void,java.util.function.Consumer<com.sun.source.util.DocTreePath>>]> {}
              interface _JavaScriptScanner$Fault$$static extends ClassLike {
                _serialVersionUID: long;
                new(): JavaScriptScanner$Fault;
              }
              let JavaScriptScanner$Fault: _JavaScriptScanner$Fault$$static;
              interface _JavaScriptScanner$Fault {
              }
              interface JavaScriptScanner$Fault extends CombineTypes<[_JavaScriptScanner$Fault, java.lang.RuntimeException]> {}
              interface _MetaKeywords$$static extends ClassLike {
                new(configuration: BaseConfiguration): MetaKeywords;
              }
              let MetaKeywords: _MetaKeywords$$static;
              interface _MetaKeywords {
                _getClassKeyword(typeElement: javax.lang.model.element.TypeElement): java.util.List<string>;
                _getMemberKeywords(members: java.util.List<javax.lang.model.element.Element>): java.util.List<string>;
                getMetaKeywords(typeElement: javax.lang.model.element.TypeElement): java.util.List<string>;
                getMetaKeywords(packageElement: javax.lang.model.element.PackageElement): java.util.List<string>;
                getMetaKeywordsForModule(mdle: javax.lang.model.element.ModuleElement): java.util.List<string>;
                getOverviewMetaKeywords(title: string, docTitle: string): java.util.List<string>;
                _options: BaseOptions;
                _resources: Resources;
                _utils: Utils;
              }
              interface MetaKeywords extends CombineTypes<[_MetaKeywords, java.lang.Object]> {}
              interface _NewAPIBuilder$$static extends ClassLike {
                _isNewAPI(e: javax.lang.model.element.Element, utils: Utils, releases: java.util.List<string>): boolean;
                new(configuration: BaseConfiguration, releases: java.util.List<string>): NewAPIBuilder;
              }
              let NewAPIBuilder: _NewAPIBuilder$$static;
              interface _NewAPIBuilder {
                readonly releases: java.util.List<string>;
              }
              interface NewAPIBuilder extends CombineTypes<[_NewAPIBuilder, jdk.javadoc.internal.doclets.toolkit.util.SummaryAPIListBuilder]> {}
              interface _PreviewAPIListBuilder$$static extends ClassLike {
                new(configuration: BaseConfiguration): PreviewAPIListBuilder;
              }
              let PreviewAPIListBuilder: _PreviewAPIListBuilder$$static;
              interface _PreviewAPIListBuilder {
                getJEP(e: javax.lang.model.element.Element): PreviewAPIListBuilder$JEP;
                getJEPs(): java.util.Set<PreviewAPIListBuilder$JEP>;
                _handleElement(e: javax.lang.model.element.Element): void;
                _elementJeps: java.util.Map<javax.lang.model.element.Element,PreviewAPIListBuilder$JEP>;
                _jeps: java.util.Map<string,PreviewAPIListBuilder$JEP>;
              }
              interface PreviewAPIListBuilder extends CombineTypes<[_PreviewAPIListBuilder, jdk.javadoc.internal.doclets.toolkit.util.SummaryAPIListBuilder]> {}
              interface _PreviewAPIListBuilder$JEP$$static extends ClassLike {
                new(number: int, title: string, status: string): PreviewAPIListBuilder$JEP;
              }
              let PreviewAPIListBuilder$JEP: _PreviewAPIListBuilder$JEP$$static;
              interface _PreviewAPIListBuilder$JEP {
                compareTo(o: PreviewAPIListBuilder$JEP): int;
                compareTo(a0: any): int;
                equals(o: any): boolean;
                hashCode(): int;
                number(): int;
                status(): string;
                title(): string;
                toString(): string;
              }
              interface PreviewAPIListBuilder$JEP extends CombineTypes<[_PreviewAPIListBuilder$JEP, java.lang.Comparable<PreviewAPIListBuilder$JEP>, java.lang.Record]> {}
              interface _ResourceIOException$$static extends ClassLike {
                _serialVersionUID: long;
                new(resource: DocPath, cause: java.io.IOException): ResourceIOException;
              }
              let ResourceIOException: _ResourceIOException$$static;
              interface _ResourceIOException {
                readonly resource: DocPath;
              }
              interface ResourceIOException extends CombineTypes<[_ResourceIOException, jdk.javadoc.internal.doclets.toolkit.DocletException]> {}
              interface _SimpleDocletException$$static extends ClassLike {
                _serialVersionUID: long;
                new(message: string): SimpleDocletException;
                new(message: string, cause: java.lang.Throwable): SimpleDocletException;
              }
              let SimpleDocletException: _SimpleDocletException$$static;
              interface _SimpleDocletException {
              }
              interface SimpleDocletException extends CombineTypes<[_SimpleDocletException, jdk.javadoc.internal.doclets.toolkit.DocletException]> {}
              interface _StandardDocFileFactory$$static extends ClassLike {
                _newFile(dir: java.nio.file.Path, path: string): java.nio.file.Path;
                new(configuration: BaseConfiguration): StandardDocFileFactory;
              }
              let StandardDocFileFactory: _StandardDocFileFactory$$static;
              interface _StandardDocFileFactory {
                createFileForDirectory(file: string): DocFile;
                createFileForInput(file: string): DocFile;
                createFileForInput(file: java.nio.file.Path): DocFile;
                createFileForOutput(path: DocPath): DocFile;
                _getDestDir(): java.nio.file.Path;
                _list(location: javax.tools.JavaFileManager$Location, path: DocPath): java.lang.Iterable<DocFile>;
                setDestDir(destDirName: string): void;
                _destDir: java.nio.file.Path;
                _fileManager: javax.tools.StandardJavaFileManager;
              }
              interface StandardDocFileFactory extends CombineTypes<[_StandardDocFileFactory, jdk.javadoc.internal.doclets.toolkit.util.DocFileFactory]> {}
              interface _StandardDocFileFactory$StandardDocFile$$static extends ClassLike {
                _new(this$0: StandardDocFileFactory, file: java.nio.file.Path): StandardDocFileFactory$StandardDocFile;
                _new(this$0: StandardDocFileFactory, location: javax.tools.JavaFileManager$Location, path: DocPath): StandardDocFileFactory$StandardDocFile;
              }
              let StandardDocFileFactory$StandardDocFile: _StandardDocFileFactory$StandardDocFile$$static;
              interface _StandardDocFileFactory$StandardDocFile {
                canRead(): boolean;
                canWrite(): boolean;
                exists(): boolean;
                getFileObject(): javax.tools.FileObject;
                _getFileObjectForOutput(path: DocPath): javax.tools.FileObject;
                _getJavaFileObjectForInput(file: java.nio.file.Path): javax.tools.JavaFileObject;
                getName(): string;
                getPath(): string;
                isAbsolute(): boolean;
                isDirectory(): boolean;
                isFile(): boolean;
                isSameFile(other: DocFile): boolean;
                list(): java.lang.Iterable<DocFile>;
                mkdirs(): boolean;
                openInputStream(): java.io.InputStream;
                openOutputStream(): java.io.OutputStream;
                openWriter(): java.io.Writer;
                resolve(p: DocPath): DocFile;
                resolve(p: string): DocFile;
                resolveAgainst(locn: javax.tools.JavaFileManager$Location): DocFile;
                toString(): string;
                _file: java.nio.file.Path;
                _this$0: StandardDocFileFactory;
              }
              interface StandardDocFileFactory$StandardDocFile extends CombineTypes<[_StandardDocFileFactory$StandardDocFile, jdk.javadoc.internal.doclets.toolkit.util.DocFile]> {}
              interface _SummaryAPIListBuilder$$static extends ClassLike {
                new(configuration: BaseConfiguration, belongsToSummary: java.util.function.Predicate<javax.lang.model.element.Element>): SummaryAPIListBuilder;
              }
              let SummaryAPIListBuilder: _SummaryAPIListBuilder$$static;
              interface _SummaryAPIListBuilder {
                _buildSummaryAPIInfo(): void;
                _composeSummaryList(sset: java.util.SortedSet<javax.lang.model.element.Element>, members: java.util.List<javax.lang.model.element.Element>): void;
                _createSummarySet(): java.util.SortedSet<javax.lang.model.element.Element>;
                getSet(kind: SummaryAPIListBuilder$SummaryElementKind): java.util.SortedSet<javax.lang.model.element.Element>;
                _handleElement(e: javax.lang.model.element.Element): void;
                hasDocumentation(kind: SummaryAPIListBuilder$SummaryElementKind): boolean;
                isEmpty(): boolean;
                _belongsToSummary: java.util.function.Predicate<javax.lang.model.element.Element>;
                _configuration: BaseConfiguration;
                _summaryMap: java.util.Map<SummaryAPIListBuilder$SummaryElementKind,java.util.SortedSet<javax.lang.model.element.Element>>;
                _utils: Utils;
              }
              interface SummaryAPIListBuilder extends CombineTypes<[_SummaryAPIListBuilder, java.lang.Object]> {}
              interface _SummaryAPIListBuilder$SummaryElementKind$$static extends ClassLike {
                valueOf(name: string): SummaryAPIListBuilder$SummaryElementKind;
                values(): SummaryAPIListBuilder$SummaryElementKind[];
                readonly ANNOTATION_TYPE: SummaryAPIListBuilder$SummaryElementKind;
                readonly ANNOTATION_TYPE_MEMBER: SummaryAPIListBuilder$SummaryElementKind;
                readonly CLASS: SummaryAPIListBuilder$SummaryElementKind;
                readonly CONSTRUCTOR: SummaryAPIListBuilder$SummaryElementKind;
                readonly ENUM: SummaryAPIListBuilder$SummaryElementKind;
                readonly ENUM_CONSTANT: SummaryAPIListBuilder$SummaryElementKind;
                readonly EXCEPTION_CLASS: SummaryAPIListBuilder$SummaryElementKind;
                readonly FIELD: SummaryAPIListBuilder$SummaryElementKind;
                readonly INTERFACE: SummaryAPIListBuilder$SummaryElementKind;
                readonly METHOD: SummaryAPIListBuilder$SummaryElementKind;
                readonly MODULE: SummaryAPIListBuilder$SummaryElementKind;
                readonly PACKAGE: SummaryAPIListBuilder$SummaryElementKind;
                readonly RECORD_CLASS: SummaryAPIListBuilder$SummaryElementKind;
              }
              let SummaryAPIListBuilder$SummaryElementKind: _SummaryAPIListBuilder$SummaryElementKind$$static;
              interface _SummaryAPIListBuilder$SummaryElementKind {
              }
              interface SummaryAPIListBuilder$SummaryElementKind extends CombineTypes<[_SummaryAPIListBuilder$SummaryElementKind]> {}
              interface _TypeElementCatalog$$static extends ClassLike {
                new(typeElements: java.lang.Iterable<javax.lang.model.element.TypeElement>, config: BaseConfiguration): TypeElementCatalog;
                new(config: BaseConfiguration): TypeElementCatalog;
              }
              let TypeElementCatalog: _TypeElementCatalog$$static;
              interface _TypeElementCatalog {
                addTypeElement(typeElement: javax.lang.model.element.TypeElement): void;
                _addTypeElement(typeElement: javax.lang.model.element.TypeElement, map: java.util.Map<javax.lang.model.element.PackageElement,java.util.SortedSet<javax.lang.model.element.TypeElement>>): void;
                allClasses(packageElement: javax.lang.model.element.PackageElement): java.util.SortedSet<javax.lang.model.element.TypeElement>;
                allUnnamedClasses(): java.util.SortedSet<javax.lang.model.element.TypeElement>;
                packages(): java.util.SortedSet<javax.lang.model.element.PackageElement>;
                _allClasses: java.util.Map<javax.lang.model.element.PackageElement,java.util.SortedSet<javax.lang.model.element.TypeElement>>;
                _comparator: java.util.Comparator<javax.lang.model.element.Element>;
                _configuration: BaseConfiguration;
                _packageSet: java.util.SortedSet<javax.lang.model.element.PackageElement>;
                _utils: Utils;
              }
              interface TypeElementCatalog extends CombineTypes<[_TypeElementCatalog, java.lang.Object]> {}
              interface _UncheckedDocletException$$static extends ClassLike {
                _serialVersionUID: long;
                new(de: DocletException): UncheckedDocletException;
              }
              let UncheckedDocletException: _UncheckedDocletException$$static;
              interface _UncheckedDocletException {
                initCause(cause: java.lang.Throwable): java.lang.Throwable;
              }
              interface UncheckedDocletException extends CombineTypes<[_UncheckedDocletException, java.lang.Error]> {}
              interface _Utils$$static extends ClassLike {
                toLowerCase(s: string): string;
                new(c: BaseConfiguration): Utils;
              }
              let Utils: _Utils$$static;
              interface _Utils {
                _addSuperInterfaces(type: javax.lang.model.type.TypeMirror, results: java.util.Set<javax.lang.model.type.TypeMirror>, visited: java.util.Set<javax.lang.model.element.Element>): void;
                _annotation2Classes(am: javax.lang.model.element.AnnotationMirror): java.util.Collection<javax.lang.model.element.TypeElement>;
                _annotationValue2Classes(value: javax.lang.model.element.AnnotationValue): java.util.Collection<javax.lang.model.element.TypeElement>;
                _annotations2Classes(annotated: javax.lang.model.AnnotatedConstruct): java.util.Collection<javax.lang.model.element.TypeElement>;
                asInstantiatedFieldType(site: javax.lang.model.element.TypeElement, ve: javax.lang.model.element.VariableElement): javax.lang.model.type.TypeMirror;
                asInstantiatedMethodType(site: javax.lang.model.element.TypeElement, ee: javax.lang.model.element.ExecutableElement): javax.lang.model.type.ExecutableType;
                asTypeElement(t: javax.lang.model.type.TypeMirror): javax.lang.model.element.TypeElement;
                checkJavaScriptInOption(name: string, value: string): void;
                _checkType(te: javax.lang.model.element.TypeElement): boolean;
                compareStrings(s1: string, s2: string): int;
                _compareStrings(caseSensitive: boolean, s1: string, s2: string): int;
                constantValueExpression(ve: javax.lang.model.element.VariableElement): string;
                containingModule(e: javax.lang.model.element.Element): javax.lang.model.element.ModuleElement;
                containingPackage(e: javax.lang.model.element.Element): javax.lang.model.element.PackageElement;
                declaredUsingPreviewAPIs(el: javax.lang.model.element.Element): Utils$PreviewSummary;
                _defaultLocation(): javax.tools.JavaFileManager$Location;
                definesSerializableFields(aclass: javax.lang.model.element.TypeElement): boolean;
                docFinder(): DocFinder;
                elementFlags(el: javax.lang.model.element.Element): java.util.Set<Utils$ElementFlag>;
                filterOutPrivateClasses(classlist: java.lang.Iterable<javax.lang.model.element.TypeElement>, javafx: boolean): java.util.SortedSet<javax.lang.model.element.TypeElement>;
                findClass(element: javax.lang.model.element.Element, className: string): javax.lang.model.element.TypeElement;
                findClassInPackageElement(pkg: javax.lang.model.element.PackageElement, className: string): javax.lang.model.element.TypeElement;
                flatSignature(e: javax.lang.model.element.ExecutableElement, site: javax.lang.model.element.TypeElement): string;
                getAllClasses(pkg: javax.lang.model.element.PackageElement): java.util.SortedSet<javax.lang.model.element.TypeElement>;
                getAllClassesUnfiltered(pkg: javax.lang.model.element.PackageElement): java.util.SortedSet<javax.lang.model.element.TypeElement>;
                getAllInterfaces(te: javax.lang.model.element.TypeElement): java.util.Set<javax.lang.model.type.TypeMirror>;
                _getAllItems<T>(e: javax.lang.model.element.Element, kind: javax.lang.model.element.ElementKind, clazz: java.lang.Class<T>): java.util.List<T>;
                _getAnnotationElement(e: javax.lang.model.element.Element, annotationType: javax.lang.model.type.TypeMirror, annotationElementName: string): any;
                getAnnotationMembers(te: javax.lang.model.element.TypeElement): java.util.List<javax.lang.model.element.Element>;
                getBlockTags(element: javax.lang.model.element.Element): java.util.List<com.sun.source.doctree.DocTree>;
                getBlockTags(dcTree: com.sun.source.doctree.DocCommentTree): java.util.List<com.sun.source.doctree.DocTree>;
                getBlockTags(element: javax.lang.model.element.Element, filter: java.util.function.Predicate<com.sun.source.doctree.DocTree>): java.util.List<com.sun.source.doctree.DocTree>;
                getBlockTags<T>(element: javax.lang.model.element.Element, filter: java.util.function.Predicate<com.sun.source.doctree.DocTree>, tClass: java.lang.Class<T>): java.util.List<T>;
                getBlockTags(element: javax.lang.model.element.Element, kind: com.sun.source.doctree.DocTree$Kind): java.util.List<com.sun.source.doctree.DocTree>;
                getBlockTags<T>(element: javax.lang.model.element.Element, kind: com.sun.source.doctree.DocTree$Kind, tClass: java.lang.Class<T>): java.util.List<T>;
                getBlockTags(element: javax.lang.model.element.Element, taglet: toolkit.taglets.Taglet): java.util.List<com.sun.source.doctree.DocTree>;
                getBody(element: javax.lang.model.element.Element): java.util.List<com.sun.source.doctree.DocTree>;
                getBounds(tpe: javax.lang.model.element.TypeParameterElement): java.util.List<javax.lang.model.type.TypeMirror>;
                getClasses(e: javax.lang.model.element.Element): java.util.List<javax.lang.model.element.TypeElement>;
                getCommentHelper(element: javax.lang.model.element.Element): CommentHelper;
                getComponentType(t: javax.lang.model.type.TypeMirror): javax.lang.model.type.TypeMirror;
                getConstructors(te: javax.lang.model.element.TypeElement): java.util.List<javax.lang.model.element.ExecutableElement>;
                getDeclaredType(enclosing: javax.lang.model.element.TypeElement, target: javax.lang.model.type.TypeMirror): javax.lang.model.type.TypeMirror;
                getDeclaredType(values: java.util.Collection<javax.lang.model.type.TypeMirror>, enclosing: javax.lang.model.element.TypeElement, target: javax.lang.model.type.TypeMirror): javax.lang.model.type.TypeMirror;
                getDependentModules(mdle: javax.lang.model.element.ModuleElement): java.util.Map<javax.lang.model.element.ModuleElement,string>;
                getDeprecatedSince(e: javax.lang.model.element.Element): string;
                getDeprecatedTrees(element: javax.lang.model.element.Element): java.util.List<com.sun.source.doctree.DeprecatedTree>;
                getDeprecatedType(): javax.lang.model.type.TypeMirror;
                getDimension(t: javax.lang.model.type.TypeMirror): string;
                _getDocCommentInfo(element: javax.lang.model.element.Element): CommentUtils$DocCommentInfo;
                _getDocCommentInfo0(element: javax.lang.model.element.Element): CommentUtils$DocCommentInfo;
                getDocCommentTree(element: javax.lang.model.element.Element): com.sun.source.doctree.DocCommentTree;
                getDocCommentTree0(element: javax.lang.model.element.Element): com.sun.source.doctree.DocCommentTree;
                _getDocumentedItems<T>(e: javax.lang.model.element.Element, kind: javax.lang.model.element.ElementKind, clazz: java.lang.Class<T>): java.util.List<T>;
                getEnclosedTypeElements(pkg: javax.lang.model.element.PackageElement): java.lang.Iterable<javax.lang.model.element.TypeElement>;
                getEnclosingTypeElement(e: javax.lang.model.element.Element): javax.lang.model.element.TypeElement;
                getEnumConstants(te: javax.lang.model.element.TypeElement): java.util.List<javax.lang.model.element.VariableElement>;
                getExternalizableType(): javax.lang.model.type.TypeMirror;
                getFields(te: javax.lang.model.element.TypeElement): java.util.List<javax.lang.model.element.VariableElement>;
                getFieldsUnfiltered(te: javax.lang.model.element.TypeElement): java.util.List<javax.lang.model.element.VariableElement>;
                getFileObject(te: javax.lang.model.element.TypeElement): javax.tools.FileObject;
                getFirstSentenceTrees(element: javax.lang.model.element.Element): java.util.List<com.sun.source.doctree.DocTree>;
                getFirstVisibleSuperClass(type: javax.lang.model.type.TypeMirror): javax.lang.model.type.TypeMirror;
                getFirstVisibleSuperClass(te: javax.lang.model.element.TypeElement): javax.lang.model.type.TypeMirror;
                getFirstVisibleSuperClassAsTypeElement(te: javax.lang.model.element.TypeElement): javax.lang.model.element.TypeElement;
                getFullBody(element: javax.lang.model.element.Element): java.util.List<com.sun.source.doctree.DocTree>;
                getFullyQualifiedName(e: javax.lang.model.element.Element): string;
                getFullyQualifiedName(e: javax.lang.model.element.Element, outer: boolean): string;
                getFunctionalInterface(): javax.lang.model.type.TypeMirror;
                getHTMLTitle(element: javax.lang.model.element.Element): string;
                _getItems<T>(e: javax.lang.model.element.Element, all: boolean, select: java.util.function.Predicate<javax.lang.model.element.Element>, clazz: java.lang.Class<T>): java.util.List<T>;
                _getItems0<T>(e: javax.lang.model.element.Element, all: boolean, select: java.util.function.Predicate<javax.lang.model.element.Element>, clazz: java.lang.Class<T>): java.util.List<T>;
                getLineNumber(e: javax.lang.model.element.Element): long;
                getLocationForModule(mdle: javax.lang.model.element.ModuleElement): javax.tools.JavaFileManager$Location;
                getLocationForPackage(pd: javax.lang.model.element.PackageElement): javax.tools.JavaFileManager$Location;
                getMethods(te: javax.lang.model.element.TypeElement): java.util.List<javax.lang.model.element.ExecutableElement>;
                getModifiers(rd: javax.lang.model.element.ModuleElement$RequiresDirective): string;
                getModuleName(mdle: javax.lang.model.element.ModuleElement): string;
                getModulePackageMap(): java.util.Map<javax.lang.model.element.ModuleElement,java.util.Set<javax.lang.model.element.PackageElement>>;
                getObjectType(): javax.lang.model.type.TypeMirror;
                getPackageName(pkg: javax.lang.model.element.PackageElement): string;
                getParamTrees(element: javax.lang.model.element.Element): java.util.List<com.sun.source.doctree.ParamTree>;
                _getParamTrees(element: javax.lang.model.element.Element, isTypeParameters: boolean): java.util.List<com.sun.source.doctree.ParamTree>;
                getPreamble(element: javax.lang.model.element.Element): java.util.List<com.sun.source.doctree.DocTree>;
                getPreviewFeature(e: javax.lang.model.element.Element): any;
                getPropertyLabel(name: string): string;
                getPropertyName(name: string): string;
                getProvidesTrees(element: javax.lang.model.element.Element): java.util.List<com.sun.source.doctree.ProvidesTree>;
                getQualifiedTypeName(t: javax.lang.model.type.TypeMirror): string;
                getReturnTrees(element: javax.lang.model.element.Element): java.util.List<com.sun.source.doctree.ReturnTree>;
                getReturnType(site: javax.lang.model.element.TypeElement, ee: javax.lang.model.element.ExecutableElement): javax.lang.model.type.TypeMirror;
                getSeeTrees(element: javax.lang.model.element.Element): java.util.List<com.sun.source.doctree.SeeTree>;
                getSerialDataTrees(member: javax.lang.model.element.ExecutableElement): java.util.List<com.sun.source.doctree.SerialDataTree>;
                getSerialFieldTrees(field: javax.lang.model.element.VariableElement): java.util.List<com.sun.source.doctree.SerialFieldTree>;
                getSerialTrees(element: javax.lang.model.element.Element): java.util.List<com.sun.source.doctree.SerialTree>;
                getSerializableType(): javax.lang.model.type.TypeMirror;
                getSimpleName(e: javax.lang.model.element.Element): string;
                _getSimpleName0(e: javax.lang.model.element.Element): string;
                getSpecTrees(element: javax.lang.model.element.Element): java.util.List<com.sun.source.doctree.SpecTree>;
                getSymbol(signature: string): javax.lang.model.type.TypeMirror;
                getThrowableType(): javax.lang.model.type.TypeMirror;
                getThrowsTrees(element: javax.lang.model.element.Element): java.util.List<com.sun.source.doctree.ThrowsTree>;
                getTreePath(e: javax.lang.model.element.Element): com.sun.source.util.TreePath;
                getTypeElementKindName(te: javax.lang.model.element.TypeElement, lowerCaseOnly: boolean): string;
                getTypeElementsAsSortedSet(typeElements: java.lang.Iterable<javax.lang.model.element.TypeElement>): java.util.SortedSet<javax.lang.model.element.TypeElement>;
                getTypeName(t: javax.lang.model.type.TypeMirror, fullyQualified: boolean): string;
                getTypeParamTrees(element: javax.lang.model.element.Element): java.util.List<com.sun.source.doctree.ParamTree>;
                getTypeSignature(t: javax.lang.model.type.TypeMirror, qualifiedName: boolean, noTypeParameters: boolean): string;
                getUsesTrees(element: javax.lang.model.element.Element): java.util.List<com.sun.source.doctree.UsesTree>;
                hasBlockTag(element: javax.lang.model.element.Element, kind: com.sun.source.doctree.DocTree$Kind): boolean;
                hasBlockTag(element: javax.lang.model.element.Element, kind: com.sun.source.doctree.DocTree$Kind, tagName: string): boolean;
                _hasBlockTagUnchecked(element: javax.lang.model.element.Element, kind: com.sun.source.doctree.DocTree$Kind): boolean;
                hasDocCommentTree(element: javax.lang.model.element.Element): boolean;
                hasHiddenTag(e: javax.lang.model.element.Element): boolean;
                _hasNoPreviewAnnotation(el: javax.lang.model.element.Element): boolean;
                ignoreBounds(bound: javax.lang.model.type.TypeMirror): boolean;
                _implementedMethods(originalMethod: javax.lang.model.element.ExecutableElement, m: javax.lang.model.element.ExecutableElement): java.lang.Iterable<javax.lang.model.element.ExecutableElement>;
                isAbstract(e: javax.lang.model.element.Element): boolean;
                isAnnotated(e: javax.lang.model.type.TypeMirror): boolean;
                isAnnotationInterface(e: javax.lang.model.element.Element): boolean;
                isArrayType(t: javax.lang.model.type.TypeMirror): boolean;
                isCanonicalRecordConstructor(ee: javax.lang.model.element.ExecutableElement): boolean;
                isClass(e: javax.lang.model.element.Element): boolean;
                _isClassOrInterface(el: javax.lang.model.element.Element): boolean;
                isConstructor(e: javax.lang.model.element.Element): boolean;
                isCoreClass(e: javax.lang.model.element.TypeElement): boolean;
                isDeclaredType(t: javax.lang.model.type.TypeMirror): boolean;
                isDefault(e: javax.lang.model.element.Element): boolean;
                isDeprecated(e: javax.lang.model.element.Element): boolean;
                isDeprecatedForRemoval(e: javax.lang.model.element.Element): boolean;
                isDocumentedAnnotation(annotation: javax.lang.model.element.TypeElement): boolean;
                isEnclosingPackageIncluded(te: javax.lang.model.element.TypeElement): boolean;
                isEnum(e: javax.lang.model.element.Element): boolean;
                isExecutableElement(e: javax.lang.model.element.Element): boolean;
                isExternalizable(e: javax.lang.model.element.TypeElement): boolean;
                isField(e: javax.lang.model.element.Element): boolean;
                isFinal(e: javax.lang.model.element.Element): boolean;
                isFunctionalInterface(amirror: javax.lang.model.element.AnnotationMirror): boolean;
                isGenericType(type: javax.lang.model.type.TypeMirror): boolean;
                isIncluded(e: javax.lang.model.element.Element): boolean;
                isInterface(e: javax.lang.model.element.Element): boolean;
                isLinkable(typeElem: javax.lang.model.element.TypeElement): boolean;
                isLinkable(typeElem: javax.lang.model.element.TypeElement, elem: javax.lang.model.element.Element): boolean;
                isMethod(e: javax.lang.model.element.Element): boolean;
                isModule(e: javax.lang.model.element.Element): boolean;
                isNonThrowableClass(te: javax.lang.model.element.TypeElement): boolean;
                isOverviewElement(e: javax.lang.model.element.Element): boolean;
                isPackage(e: javax.lang.model.element.Element): boolean;
                isPackagePrivate(e: javax.lang.model.element.Element): boolean;
                isPlainInterface(e: javax.lang.model.element.Element): boolean;
                isPreviewAPI(el: javax.lang.model.element.Element): boolean;
                isPrivate(e: javax.lang.model.element.Element): boolean;
                isProperty(name: string): boolean;
                isProtected(e: javax.lang.model.element.Element): boolean;
                isPublic(e: javax.lang.model.element.Element): boolean;
                isRecord(e: javax.lang.model.element.TypeElement): boolean;
                isReflectivePreviewAPI(el: javax.lang.model.element.Element): boolean;
                isSerializable(e: javax.lang.model.element.TypeElement): boolean;
                isSimpleOverride(m: javax.lang.model.element.ExecutableElement): boolean;
                isSpecified(e: javax.lang.model.element.Element): boolean;
                isStatic(e: javax.lang.model.element.Element): boolean;
                isThrowable(te: javax.lang.model.element.TypeElement): boolean;
                isTypeElement(e: javax.lang.model.element.Element): boolean;
                isTypeParameterElement(e: javax.lang.model.element.Element): boolean;
                isTypeVariable(t: javax.lang.model.type.TypeMirror): boolean;
                isUndocumentedEnclosure(enclosingTypeElement: javax.lang.model.element.TypeElement): boolean;
                isVariableElement(e: javax.lang.model.element.Element): boolean;
                isVoid(t: javax.lang.model.type.TypeMirror): boolean;
                makeSignature(e: javax.lang.model.element.ExecutableElement, site: javax.lang.model.element.TypeElement, full: boolean): string;
                makeSignature(e: javax.lang.model.element.ExecutableElement, site: javax.lang.model.element.TypeElement, full: boolean, ignoreTypeParameters: boolean): string;
                _newDocFinder(): DocFinder;
                _noSameTypes(results: java.util.Set<javax.lang.model.type.TypeMirror>): boolean;
                overriddenMethod(method: javax.lang.model.element.ExecutableElement): Utils$OverrideInfo;
                previewLanguageFeaturesUsed(e: javax.lang.model.element.Element): java.util.Set<Utils$DeclarationPreviewLanguageFeatures>;
                propertyName(e: javax.lang.model.element.ExecutableElement): string;
                _recursiveGetItems<T>(list: java.util.Collection<T>, e: javax.lang.model.element.Element, all: boolean, filter: java.util.function.Predicate<javax.lang.model.element.Element>, clazz: java.lang.Class<T>): void;
                removeCommentHelper(element: javax.lang.model.element.Element): void;
                replaceTabs(text: string): string;
                serializableFields(aclass: javax.lang.model.element.TypeElement): java.util.SortedSet<javax.lang.model.element.VariableElement>;
                serializationMethods(aclass: javax.lang.model.element.TypeElement): java.util.SortedSet<javax.lang.model.element.ExecutableElement>;
                setPreviewFlagProvider(provider: Utils$PreviewFlagProvider): Utils$PreviewFlagProvider;
                shouldDocument(e: javax.lang.model.element.Element): boolean;
                _shouldInstantiate(site: javax.lang.model.element.TypeElement, e: javax.lang.model.element.Element): boolean;
                signature(e: javax.lang.model.element.ExecutableElement, site: javax.lang.model.element.TypeElement): string;
                _types2Classes(types: java.util.List<javax.lang.model.type.TypeMirror>): java.util.Collection<javax.lang.model.element.TypeElement>;
                _cachedClasses: java.util.HashMap<javax.lang.model.element.Element,java.util.SortedSet<javax.lang.model.element.TypeElement>>;
                _commentHelperCache: Utils$CommentHelperCache;
                readonly comparators: Comparators;
                readonly configuration: BaseConfiguration;
                _cve: Utils$ConstantValueExpression;
                _dcTreeCache: java.util.Map<javax.lang.model.element.Element,CommentUtils$DocCommentInfo>;
                _docFinder: DocFinder;
                readonly docTrees: com.sun.source.util.DocTrees;
                readonly elementUtils: javax.lang.model.util.Elements;
                _javaScriptScanner: JavaScriptScanner;
                _kindNameMap: java.util.Map<string,string>;
                _modulePackageMap: java.util.Map<javax.lang.model.element.ModuleElement,java.util.Set<javax.lang.model.element.PackageElement>>;
                _nameCache: java.util.Map<javax.lang.model.element.Element,string>;
                _options: BaseOptions;
                _previewFlagProvider: Utils$PreviewFlagProvider;
                _resources: Resources;
                _secondaryCollator: Utils$DocCollator;
                _shouldDocumentVisitor: javax.lang.model.util.SimpleElementVisitor14<boolean,java.lang.Void>;
                _snvisitor: javax.lang.model.util.SimpleElementVisitor14<string,java.lang.Void>;
                _specifiedVisitor: javax.lang.model.util.SimpleElementVisitor14<boolean,java.lang.Void>;
                _symtab: java.util.Map<string,javax.lang.model.type.TypeMirror>;
                _tertiaryCollator: Utils$DocCollator;
                readonly typeUtils: javax.lang.model.util.Types;
              }
              interface Utils extends CombineTypes<[_Utils, java.lang.Object]> {}
              interface _Utils$CommentHelperCache$$static extends ClassLike {
                new(utils: Utils): Utils$CommentHelperCache;
              }
              let Utils$CommentHelperCache: _Utils$CommentHelperCache$$static;
              interface _Utils$CommentHelperCache {
                computeIfAbsent(key: javax.lang.model.element.Element): CommentHelper;
                get(key: javax.lang.model.element.Element): CommentHelper;
                put(key: javax.lang.model.element.Element, value: CommentHelper): CommentHelper;
                remove(key: javax.lang.model.element.Element): CommentHelper;
                _map: java.util.Map<javax.lang.model.element.Element,java.lang.ref.SoftReference<CommentHelper>>;
                _utils: Utils;
              }
              interface Utils$CommentHelperCache extends CombineTypes<[_Utils$CommentHelperCache, java.lang.Object]> {}
              interface _Utils$ConstantValueExpression$$static extends ClassLike {
              }
              let Utils$ConstantValueExpression: _Utils$ConstantValueExpression$$static;
              interface _Utils$ConstantValueExpression {
                _defaultAction(e: javax.lang.model.type.TypeMirror, val: any): string;
                _defaultAction(a0: javax.lang.model.type.TypeMirror, a1: any): any;
                _isPrintableAscii(c: char): boolean;
                _sourceChar(c: char, buf: Utils$ConstantValueExpression$stringBuilder): void;
                _sourceForm(v: double, a1: char): string;
                _sourceForm(s: string): string;
                _unicodeEscape(c: char, buf: Utils$ConstantValueExpression$stringBuilder): void;
                visitPrimitiveAsBoolean(t: javax.lang.model.type.PrimitiveType, val: any): string;
                visitPrimitiveAsBoolean(a0: javax.lang.model.type.PrimitiveType, a1: any): any;
                visitPrimitiveAsByte(t: javax.lang.model.type.PrimitiveType, val: any): string;
                visitPrimitiveAsByte(a0: javax.lang.model.type.PrimitiveType, a1: any): any;
                visitPrimitiveAsChar(t: javax.lang.model.type.PrimitiveType, val: any): string;
                visitPrimitiveAsChar(a0: javax.lang.model.type.PrimitiveType, a1: any): any;
                visitPrimitiveAsDouble(t: javax.lang.model.type.PrimitiveType, val: any): string;
                visitPrimitiveAsDouble(a0: javax.lang.model.type.PrimitiveType, a1: any): any;
                visitPrimitiveAsFloat(t: javax.lang.model.type.PrimitiveType, val: any): string;
                visitPrimitiveAsFloat(a0: javax.lang.model.type.PrimitiveType, a1: any): any;
                visitPrimitiveAsLong(t: javax.lang.model.type.PrimitiveType, val: any): string;
                visitPrimitiveAsLong(a0: javax.lang.model.type.PrimitiveType, a1: any): any;
              }
              interface Utils$ConstantValueExpression extends CombineTypes<[_Utils$ConstantValueExpression, javax.lang.model.util.TypeKindVisitor9<string,any>]> {}
              interface _Utils$DeclarationPreviewLanguageFeatures$$static extends ClassLike {
                valueOf(name: string): Utils$DeclarationPreviewLanguageFeatures;
                values(): Utils$DeclarationPreviewLanguageFeatures[];
                readonly NONE: Utils$DeclarationPreviewLanguageFeatures;
              }
              let Utils$DeclarationPreviewLanguageFeatures: _Utils$DeclarationPreviewLanguageFeatures$$static;
              interface _Utils$DeclarationPreviewLanguageFeatures {
                readonly features: java.util.List<string>;
              }
              interface Utils$DeclarationPreviewLanguageFeatures extends CombineTypes<[_Utils$DeclarationPreviewLanguageFeatures]> {}
              interface _Utils$DocCollator$$static extends ClassLike {
              }
              let Utils$DocCollator: _Utils$DocCollator$$static;
              interface _Utils$DocCollator {
                compare(s1: string, s2: string): int;
                _createCollator(locale: java.util.Locale): java.text.Collator;
                _getKey(s: string): java.text.CollationKey;
                _MAX_SIZE: int;
                _instance: java.text.Collator;
                _keys: java.util.Map<string,java.text.CollationKey>;
              }
              interface Utils$DocCollator extends CombineTypes<[_Utils$DocCollator, java.lang.Object]> {}
              interface _Utils$ElementFlag$$static extends ClassLike {
                valueOf(name: string): Utils$ElementFlag;
                values(): Utils$ElementFlag[];
                readonly DEPRECATED: Utils$ElementFlag;
                readonly PREVIEW: Utils$ElementFlag;
              }
              let Utils$ElementFlag: _Utils$ElementFlag$$static;
              interface _Utils$ElementFlag {
              }
              interface Utils$ElementFlag extends CombineTypes<[_Utils$ElementFlag]> {}
              interface _Utils$OverrideInfo$$static extends ClassLike {
                new(overriddenMethod: javax.lang.model.element.ExecutableElement, overriddenMethodOwner: javax.lang.model.type.DeclaredType): Utils$OverrideInfo;
              }
              let Utils$OverrideInfo: _Utils$OverrideInfo$$static;
              interface _Utils$OverrideInfo {
                equals(o: any): boolean;
                hashCode(): int;
                overriddenMethod(): javax.lang.model.element.ExecutableElement;
                overriddenMethodOwner(): javax.lang.model.type.DeclaredType;
                toString(): string;
              }
              interface Utils$OverrideInfo extends CombineTypes<[_Utils$OverrideInfo, java.lang.Record]> {}
              interface _Utils$Pair$$static<K,L> extends ClassLike {
                new(first: K, second: L): Utils$Pair<K,L>;
              }
              let Utils$Pair: _Utils$Pair$$static<K,L>;
              interface _Utils$Pair<K,L> {
                toString(): string;
                readonly first: K;
                readonly second: L;
              }
              interface Utils$Pair<K,L> extends CombineTypes<[_Utils$Pair<K,L>, java.lang.Object]> {}
              interface _Utils$PreviewFlagProvider$$static extends ClassLike {
              }
              let Utils$PreviewFlagProvider: _Utils$PreviewFlagProvider$$static;
              interface _Utils$PreviewFlagProvider {
                isPreview(a0: javax.lang.model.element.Element): boolean;
(a0: javax.lang.model.element.Element): boolean;
              }
              interface Utils$PreviewFlagProvider extends CombineTypes<[_Utils$PreviewFlagProvider, java.lang.Object]> {}
              interface _Utils$PreviewSummary$$static extends ClassLike {
                new(previewAPI: java.util.Set<javax.lang.model.element.TypeElement>, reflectivePreviewAPI: java.util.Set<javax.lang.model.element.TypeElement>, declaredUsingPreviewFeature: java.util.Set<javax.lang.model.element.TypeElement>): Utils$PreviewSummary;
              }
              let Utils$PreviewSummary: _Utils$PreviewSummary$$static;
              interface _Utils$PreviewSummary {
                toString(): string;
                readonly declaredUsingPreviewFeature: java.util.Set<javax.lang.model.element.TypeElement>;
                readonly previewAPI: java.util.Set<javax.lang.model.element.TypeElement>;
                readonly reflectivePreviewAPI: java.util.Set<javax.lang.model.element.TypeElement>;
              }
              interface Utils$PreviewSummary extends CombineTypes<[_Utils$PreviewSummary, java.lang.Object]> {}
              interface _VisibleMemberCache$$static extends ClassLike {
                new(configuration: BaseConfiguration): VisibleMemberCache;
              }
              let VisibleMemberCache: _VisibleMemberCache$$static;
              interface _VisibleMemberCache {
                getVisibleMemberTable(te: javax.lang.model.element.TypeElement): VisibleMemberTable;
                _cache: java.util.Map<javax.lang.model.element.TypeElement,VisibleMemberTable>;
                _configuration: BaseConfiguration;
              }
              interface VisibleMemberCache extends CombineTypes<[_VisibleMemberCache, java.lang.Object]> {}
              interface _VisibleMemberTable$$static extends ClassLike {
                _putAllIsNonReplacing<K, V>(dst: java.util.Map<K,V>, src: java.util.Map<K,V>): boolean;
                _new(typeElement: javax.lang.model.element.TypeElement, configuration: BaseConfiguration, mcache: VisibleMemberCache): VisibleMemberTable;
              }
              let VisibleMemberTable: _VisibleMemberTable$$static;
              interface _VisibleMemberTable {
                _addDocumentedAnnotations(annotations: java.util.Set<javax.lang.model.element.AnnotationMirror>, annotationMirrors: java.util.List<javax.lang.model.element.AnnotationMirror>): void;
                _allowInheritedMembers(e: javax.lang.model.element.Element, kind: VisibleMemberTable$Kind, lmt: VisibleMemberTable$LocalMemberTable): boolean;
                _allowInheritedMethod(inheritedMethod: javax.lang.model.element.ExecutableElement, overriddenByTable: java.util.Map<javax.lang.model.element.ExecutableElement,java.util.List<javax.lang.model.element.ExecutableElement>>, lmt: VisibleMemberTable$LocalMemberTable): boolean;
                _computeParents(): void;
                _computeVisibleFieldsAndInnerClasses(lmt: VisibleMemberTable$LocalMemberTable, kind: VisibleMemberTable$Kind): void;
                _computeVisibleMembers(): void;
                _computeVisibleMembers(lmt: VisibleMemberTable$LocalMemberTable, kind: VisibleMemberTable$Kind): void;
                _computeVisibleMethods(lmt: VisibleMemberTable$LocalMemberTable): void;
                _computeVisibleProperties(lmt: VisibleMemberTable$LocalMemberTable): void;
                _ensureInitialized(): void;
                equals(obj: any): boolean;
                _getAllSuperclasses(): java.util.Set<VisibleMemberTable>;
                _getAllSuperinterfaces(): java.util.List<VisibleMemberTable>;
                getAllVisibleMembers(kind: VisibleMemberTable$Kind): java.util.List<javax.lang.model.element.Element>;
                _getDocumentedAnnotations(element: javax.lang.model.element.ExecutableElement): java.util.Set<javax.lang.model.element.AnnotationMirror>;
                getImplementedMethodHolder(method: javax.lang.model.element.ExecutableElement, implementedMethod: javax.lang.model.element.ExecutableElement): javax.lang.model.type.TypeMirror;
                getImplementedMethods(method: javax.lang.model.element.ExecutableElement): java.util.List<javax.lang.model.element.ExecutableElement>;
                _getImplementedMethodsFinder(method: javax.lang.model.element.ExecutableElement): VisibleMemberTable$ImplementedMethods;
                getMembers(kind: VisibleMemberTable$Kind): java.util.List<javax.lang.model.element.Element>;
                getOverriddenMethod(e: javax.lang.model.element.ExecutableElement): javax.lang.model.element.ExecutableElement;
                getPropertyField(ee: javax.lang.model.element.ExecutableElement): javax.lang.model.element.VariableElement;
                getPropertyGetter(ee: javax.lang.model.element.ExecutableElement): javax.lang.model.element.ExecutableElement;
                getPropertyMethod(ee: javax.lang.model.element.ExecutableElement): javax.lang.model.element.ExecutableElement;
                getPropertySetter(ee: javax.lang.model.element.ExecutableElement): javax.lang.model.element.ExecutableElement;
                getVisibleMembers(kind: VisibleMemberTable$Kind, p: java.util.function.Predicate<javax.lang.model.element.Element>): java.util.List<javax.lang.model.element.Element>;
                getVisibleMembers(kind: VisibleMemberTable$Kind): java.util.List<javax.lang.model.element.Element>;
                getVisibleTypeElements(): java.util.Set<javax.lang.model.element.TypeElement>;
                hasVisibleMembers(): boolean;
                hasVisibleMembers(kind: VisibleMemberTable$Kind): boolean;
                hashCode(): int;
                _isAccessible(e: javax.lang.model.element.Element): boolean;
                _isDeclaredInInterface(e: javax.lang.model.element.ExecutableElement): boolean;
                _isMemberHidden(inheritedMember: javax.lang.model.element.Element, kind: VisibleMemberTable$Kind, lmt: VisibleMemberTable$LocalMemberTable): boolean;
                _isNotSimpleOverride(e: javax.lang.model.element.ExecutableElement): boolean;
                _mustDocument(e: javax.lang.model.element.Element): boolean;
                _overridingSignatureChanged(method: javax.lang.model.element.ExecutableElement, overriddenMethod: javax.lang.model.element.ExecutableElement): boolean;
                _allSuperclasses: java.util.Set<VisibleMemberTable>;
                _allSuperinterfaces: java.util.List<VisibleMemberTable>;
                _config: BaseConfiguration;
                _implementMethodsFinders: java.util.Map<javax.lang.model.element.ExecutableElement,java.lang.ref.SoftReference<VisibleMemberTable$ImplementedMethods>>;
                _mcache: VisibleMemberCache;
                _options: BaseOptions;
                _overriddenMethodTable: java.util.Map<javax.lang.model.element.ExecutableElement,VisibleMemberTable$OverrideInfo>;
                _parent: javax.lang.model.element.TypeElement;
                _parents: java.util.Set<VisibleMemberTable>;
                _propertyMap: java.util.Map<javax.lang.model.element.ExecutableElement,VisibleMemberTable$PropertyMembers>;
                _te: javax.lang.model.element.TypeElement;
                _utils: Utils;
                _visibleMembers: java.util.Map<VisibleMemberTable$Kind,java.util.List<javax.lang.model.element.Element>>;
              }
              interface VisibleMemberTable extends CombineTypes<[_VisibleMemberTable, java.lang.Object]> {}
              interface _VisibleMemberTable$ImplementedMethods$$static extends ClassLike {
                new(a0: VisibleMemberTable, implementer: javax.lang.model.element.ExecutableElement): VisibleMemberTable$ImplementedMethods;
              }
              let VisibleMemberTable$ImplementedMethods: _VisibleMemberTable$ImplementedMethods$$static;
              interface _VisibleMemberTable$ImplementedMethods {
                _findImplementedMethod(te: javax.lang.model.element.TypeElement, implementer: javax.lang.model.element.ExecutableElement): javax.lang.model.element.ExecutableElement;
                _getImplementedMethods(): java.util.Collection<javax.lang.model.element.ExecutableElement>;
                _getMethodHolder(ee: javax.lang.model.element.ExecutableElement): javax.lang.model.type.TypeMirror;
                _interfaces: java.util.Map<javax.lang.model.element.ExecutableElement,javax.lang.model.type.TypeMirror>;
                _this$0: VisibleMemberTable;
              }
              interface VisibleMemberTable$ImplementedMethods extends CombineTypes<[_VisibleMemberTable$ImplementedMethods, java.lang.Object]> {}
              interface _VisibleMemberTable$Kind$$static extends ClassLike {
                forDetailsOf(kind: javax.lang.model.element.ElementKind): java.util.Set<VisibleMemberTable$Kind>;
                forSummariesOf(kind: javax.lang.model.element.ElementKind): java.util.Set<VisibleMemberTable$Kind>;
                valueOf(name: string): VisibleMemberTable$Kind;
                values(): VisibleMemberTable$Kind[];
                readonly ANNOTATION_TYPE_MEMBER: VisibleMemberTable$Kind;
                readonly ANNOTATION_TYPE_MEMBER_OPTIONAL: VisibleMemberTable$Kind;
                readonly ANNOTATION_TYPE_MEMBER_REQUIRED: VisibleMemberTable$Kind;
                readonly CONSTRUCTORS: VisibleMemberTable$Kind;
                readonly ENUM_CONSTANTS: VisibleMemberTable$Kind;
                readonly FIELDS: VisibleMemberTable$Kind;
                readonly METHODS: VisibleMemberTable$Kind;
                readonly NESTED_CLASSES: VisibleMemberTable$Kind;
                readonly PROPERTIES: VisibleMemberTable$Kind;
                _annotationDetailSet: java.util.EnumSet<VisibleMemberTable$Kind>;
                _annotationSummarySet: java.util.EnumSet<VisibleMemberTable$Kind>;
                _defaultDetailSet: java.util.EnumSet<VisibleMemberTable$Kind>;
                _defaultSummarySet: java.util.EnumSet<VisibleMemberTable$Kind>;
                _enumDetailSet: java.util.EnumSet<VisibleMemberTable$Kind>;
                _enumSummarySet: java.util.EnumSet<VisibleMemberTable$Kind>;
              }
              let VisibleMemberTable$Kind: _VisibleMemberTable$Kind$$static;
              interface _VisibleMemberTable$Kind {
              }
              interface VisibleMemberTable$Kind extends CombineTypes<[_VisibleMemberTable$Kind]> {}
              interface _VisibleMemberTable$LocalMemberTable$$static extends ClassLike {
                _new(a0: VisibleMemberTable): VisibleMemberTable$LocalMemberTable;
              }
              let VisibleMemberTable$LocalMemberTable: _VisibleMemberTable$LocalMemberTable$$static;
              interface _VisibleMemberTable$LocalMemberTable {
                _addMember(e: javax.lang.model.element.Element, kind: VisibleMemberTable$Kind): void;
                _getMembers(simpleName: javax.lang.model.element.Name, kind: VisibleMemberTable$Kind): java.util.List<javax.lang.model.element.Element>;
                _getMembers<T>(simpleName: javax.lang.model.element.Name, kind: VisibleMemberTable$Kind, clazz: java.lang.Class<T>): java.util.List<T>;
                _getOrderedMembers(kind: VisibleMemberTable$Kind): java.util.List<javax.lang.model.element.Element>;
                _getPropertyMethods(simpleName: javax.lang.model.element.Name): java.util.List<javax.lang.model.element.ExecutableElement>;
                _sealList<K, V>(unusedKey: K, v: java.util.List<V>): java.util.List<V>;
                _namedMembers: java.util.Map<VisibleMemberTable$Kind,java.util.Map<javax.lang.model.element.Name,java.util.List<javax.lang.model.element.Element>>>;
                _orderedMembers: java.util.Map<VisibleMemberTable$Kind,java.util.List<javax.lang.model.element.Element>>;
                _this$0: VisibleMemberTable;
              }
              interface VisibleMemberTable$LocalMemberTable extends CombineTypes<[_VisibleMemberTable$LocalMemberTable, java.lang.Object]> {}
              interface _VisibleMemberTable$OverrideInfo$$static extends ClassLike {
              }
              let VisibleMemberTable$OverrideInfo: _VisibleMemberTable$OverrideInfo$$static;
              interface _VisibleMemberTable$OverrideInfo {
                equals(o: any): boolean;
                hashCode(): int;
                overriddenMethod(): javax.lang.model.element.ExecutableElement;
                simpleOverride(): boolean;
                toString(): string;
              }
              interface VisibleMemberTable$OverrideInfo extends CombineTypes<[_VisibleMemberTable$OverrideInfo, java.lang.Record]> {}
              interface _VisibleMemberTable$PropertyMembers$$static extends ClassLike {
              }
              let VisibleMemberTable$PropertyMembers: _VisibleMemberTable$PropertyMembers$$static;
              interface _VisibleMemberTable$PropertyMembers {
                equals(o: any): boolean;
                field(): javax.lang.model.element.VariableElement;
                getter(): javax.lang.model.element.ExecutableElement;
                hashCode(): int;
                propertyMethod(): javax.lang.model.element.ExecutableElement;
                setter(): javax.lang.model.element.ExecutableElement;
                toString(): string;
              }
              interface VisibleMemberTable$PropertyMembers extends CombineTypes<[_VisibleMemberTable$PropertyMembers, java.lang.Record]> {}
            }
            interface _AbstractDoclet$$static extends ClassLike {
              _TOOLKIT_DOCLET_NAME: string;
              new(): AbstractDoclet;
            }
            let AbstractDoclet: _AbstractDoclet$$static;
            interface _AbstractDoclet {
              _dumpStack(enabled: boolean, t: java.lang.Throwable): void;
              _generateClassFiles(a0: java.util.SortedSet<javax.lang.model.element.TypeElement>, a1: toolkit.util.ClassTree): void;
              _generateClassFiles(classTree: toolkit.util.ClassTree): void;
              _generateModuleFiles(): void;
              _generateOtherFiles(classTree: toolkit.util.ClassTree): void;
              _generatePackageFiles(a0: toolkit.util.ClassTree): void;
              getConfiguration(): BaseConfiguration;
              _getResourceKeyMapper(docEnv: javadoc.doclet.DocletEnvironment): java.util.function.Function<string,string>;
              getSupportedSourceVersion(): javax.lang.model.SourceVersion;
              _isValidDoclet(): boolean;
              _reportInternalError(t: java.lang.Throwable): void;
              run(docEnv: javadoc.doclet.DocletEnvironment): boolean;
              _startGeneration(): void;
              _configuration: BaseConfiguration;
              _messages: Messages;
              _utils: util.Utils;
            }
            interface AbstractDoclet extends CombineTypes<[_AbstractDoclet, jdk.javadoc.doclet.Doclet, java.lang.Object]> {}
            interface _AnnotationTypeMemberWriter$$static extends ClassLike {
            }
            let AnnotationTypeMemberWriter: _AnnotationTypeMemberWriter$$static;
            interface _AnnotationTypeMemberWriter {
              addAnnotationDetailsMarker(a0: Content): void;
              addComments(a0: javax.lang.model.element.Element, a1: Content): void;
              addDefaultValueInfo(a0: javax.lang.model.element.Element, a1: Content): void;
              addDeprecated(a0: javax.lang.model.element.Element, a1: Content): void;
              addPreview(a0: javax.lang.model.element.Element, a1: Content): void;
              addTags(a0: javax.lang.model.element.Element, a1: Content): void;
              getAnnotationDetails(a0: Content, a1: Content): Content;
              getAnnotationDetailsHeader(): Content;
              getAnnotationHeaderContent(a0: javax.lang.model.element.Element): Content;
              getMemberHeader(): Content;
              getSignature(a0: javax.lang.model.element.Element): Content;
            }
            interface AnnotationTypeMemberWriter extends CombineTypes<[_AnnotationTypeMemberWriter, jdk.javadoc.internal.doclets.toolkit.MemberWriter, java.lang.Object]> {}
            interface _BaseConfiguration$$static extends ClassLike {
              _sharedResourceBundleName: string;
              new(doclet: javadoc.doclet.Doclet, locale: java.util.Locale, reporter: javadoc.doclet.Reporter): BaseConfiguration;
            }
            let BaseConfiguration: _BaseConfiguration$$static;
            interface _BaseConfiguration {
              finishOptionSettings(): boolean;
              _finishOptionSettings0(): boolean;
              getBuilderFactory(): toolkit.builders.BuilderFactory;
              getClassName(te: javax.lang.model.element.TypeElement): string;
              getDocResources(): Resources;
              getDocletVersion(): java.lang.Runtime$Version;
              getFileManager(): javax.tools.JavaFileManager;
              getIncludedModuleElements(): java.util.Set<javax.lang.model.element.ModuleElement>;
              getIncludedPackageElements(): java.util.Set<javax.lang.model.element.PackageElement>;
              getIncludedTypeElements(): java.util.Set<javax.lang.model.element.TypeElement>;
              getLocale(): java.util.Locale;
              getMessages(): Messages;
              getOptions(): BaseOptions;
              getOverviewPath(): javax.tools.JavaFileObject;
              getReporter(): javadoc.doclet.Reporter;
              getSpecifiedModuleElements(): java.util.Set<javax.lang.model.element.ModuleElement>;
              getSpecifiedPackageElements(): java.util.Set<javax.lang.model.element.PackageElement>;
              getSpecifiedTypeElements(): java.util.Set<javax.lang.model.element.TypeElement>;
              getVisibleMemberTable(te: javax.lang.model.element.TypeElement): toolkit.util.VisibleMemberTable;
              getWriterFactory(): WriterFactory;
              _initConfiguration(docEnv: javadoc.doclet.DocletEnvironment, resourceKeyMapper: java.util.function.Function<string,string>): void;
              _initDestDirectory(): void;
              initDocLint(opts: java.util.List<string>, customTagNames: java.util.Set<string>): void;
              _initModules(): void;
              _initPackages(): void;
              _initTagletManager(customTagStrs: java.util.Set<java.util.List<string>>): void;
              isAllowScriptInComments(): boolean;
              _isDocLintGroupEnabled(group: internal.doclint.Messages$Group): boolean;
              isDocLintReferenceGroupEnabled(): boolean;
              isDocLintSyntaxGroupEnabled(): boolean;
              isGeneratedDoc(te: javax.lang.model.element.TypeElement): boolean;
              isJavaFXMode(): boolean;
              runDocLint(path: com.sun.source.util.TreePath): void;
              setOptions(): boolean;
              shouldExcludeDocFileDir(docfilesubdir: string): boolean;
              shouldExcludeQualifier(qualifier: string): boolean;
              _tokenize(s: string, maxTokens: int): java.util.List<string>;
              _builderFactory: builders.BuilderFactory;
              cmtUtils: CommentUtils;
              docEnv: javadoc.doclet.DocletEnvironment;
              docFileFactory: util.DocFileFactory;
              readonly doclet: javadoc.doclet.Doclet;
              _doclint: internal.doclint.DocLint;
              extern: util.Extern;
              readonly group: util.Group;
              _includedModuleElements: java.util.Set<javax.lang.model.element.ModuleElement>;
              _includedPackageElements: java.util.Set<javax.lang.model.element.PackageElement>;
              _includedTypeElements: java.util.Set<javax.lang.model.element.TypeElement>;
              _initialized: boolean;
              readonly locale: java.util.Locale;
              metakeywords: util.MetaKeywords;
              modulePackages: java.util.SortedMap<javax.lang.model.element.ModuleElement,java.util.Set<javax.lang.model.element.PackageElement>>;
              modules: java.util.SortedSet<javax.lang.model.element.ModuleElement>;
              overviewElement: OverviewElement;
              packages: java.util.SortedSet<javax.lang.model.element.PackageElement>;
              propertyUtils: PropertyUtils;
              readonly reporter: javadoc.doclet.Reporter;
              _shouldCheck: java.util.Map<com.sun.source.tree.CompilationUnitTree,boolean>;
              showModules: boolean;
              sourcepath: string;
              _specifiedModuleElements: java.util.Set<javax.lang.model.element.ModuleElement>;
              _specifiedPackageElements: java.util.Set<javax.lang.model.element.PackageElement>;
              _specifiedTypeElements: java.util.Set<javax.lang.model.element.TypeElement>;
              tagletManager: taglets.TagletManager;
              typeElementCatalog: util.TypeElementCatalog;
              utils: util.Utils;
              _visibleMemberCache: util.VisibleMemberCache;
              workArounds: WorkArounds;
            }
            interface BaseConfiguration extends CombineTypes<[_BaseConfiguration, java.lang.Object]> {}
            interface _BaseConfiguration$Splitter$$static extends ClassLike {
              _new(docEnv: javadoc.doclet.DocletEnvironment, included: boolean): BaseConfiguration$Splitter;
            }
            let BaseConfiguration$Splitter: _BaseConfiguration$Splitter$$static;
            interface _BaseConfiguration$Splitter {
              _mset: java.util.Set<javax.lang.model.element.ModuleElement>;
              _pset: java.util.Set<javax.lang.model.element.PackageElement>;
              _tset: java.util.Set<javax.lang.model.element.TypeElement>;
            }
            interface BaseConfiguration$Splitter extends CombineTypes<[_BaseConfiguration$Splitter, java.lang.Object]> {}
            interface _BaseOptions$$static extends ClassLike {
              _addTrailingFileSep(path: string): string;
              readonly DEFAULT_TAB_STOP_LENGTH: int;
              _new(config: BaseConfiguration): BaseOptions;
            }
            let BaseOptions: _BaseOptions$$static;
            interface _BaseOptions {
              _allowScriptInComments(): boolean;
              _checkOutputFileEncoding(docencoding: string): boolean;
              copyDocfileSubdirs(): boolean;
              _customTagStrs(): java.util.LinkedHashSet<java.util.List<string>>;
              date(): java.time.ZonedDateTime;
              _destDirName(): string;
              _disableJavaFxStrictChecks(): boolean;
              docEncoding(): string;
              _docFileDestDirName(): string;
              _dumpOnError(): boolean;
              encoding(): string;
              _excludedDocFileDirs(): java.util.Set<string>;
              _excludedQualifiers(): java.util.Set<string>;
              _generalValidOptions(): boolean;
              getSupportedOptions(): java.util.Set<BaseOptions$Option>;
              _groupPairs(): java.util.List<toolkit.util.Utils$Pair<string,string>>;
              javafx(): boolean;
              keywords(): boolean;
              _linkList(): java.util.List<string>;
              linkModularityMismatch(): BaseOptions$ModularityMismatchPolicy;
              _linkOfflineList(): java.util.List<toolkit.util.Utils$Pair<string,string>>;
              _linkPlatformProperties(): string;
              linkSource(): boolean;
              noComment(): boolean;
              noDeprecated(): boolean;
              noPlatformLinks(): boolean;
              noSince(): boolean;
              noTimestamp(): boolean;
              _quiet(): boolean;
              serialWarn(): boolean;
              setDocEncoding(docEncoding: string): void;
              setJavaFX(javafx: boolean): void;
              showAuthor(): boolean;
              showTaglets(): boolean;
              showVersion(): boolean;
              since(): java.util.List<string>;
              sinceLabel(): string;
              snippetPath(): string;
              sourceTabSize(): int;
              specBaseURI(): java.net.URI;
              summarizeOverriddenMethods(): boolean;
              tagletPath(): string;
              _allowScriptInComments: boolean;
              _config: BaseConfiguration;
              _copyDocfileSubdirs: boolean;
              _customTagStrs: java.util.LinkedHashSet<java.util.List<string>>;
              _date: java.time.ZonedDateTime;
              _destDirName: string;
              _disableJavaFxStrictChecks: boolean;
              _docEncoding: string;
              _docFileDestDirName: string;
              _dumpOnError: boolean;
              _encoding: string;
              _excludedDocFileDirs: java.util.Set<string>;
              _excludedQualifiers: java.util.Set<string>;
              _groupPairs: java.util.List<util.Utils$Pair<string,string>>;
              _javafx: boolean;
              _keywords: boolean;
              _linkList: java.util.List<string>;
              _linkModularityMismatch: BaseOptions$ModularityMismatchPolicy;
              _linkOfflineList: java.util.List<util.Utils$Pair<string,string>>;
              _linkPlatformProperties: string;
              _linkSource: boolean;
              _noComment: boolean;
              _noDeprecated: boolean;
              _noPlatformLinks: boolean;
              _noSince: boolean;
              _noTimestamp: boolean;
              _quiet: boolean;
              _serialWarn: boolean;
              _showAuthor: boolean;
              _showTaglets: boolean;
              _showVersion: boolean;
              _since: java.util.List<string>;
              _sinceLabel: string;
              _snippetPath: string;
              _sourceTabSize: int;
              _specBaseURI: java.net.URI;
              _summarizeOverriddenMethods: boolean;
              _tagletPath: string;
            }
            interface BaseOptions extends CombineTypes<[_BaseOptions, java.lang.Object]> {}
            interface _BaseOptions$Hidden$$static extends ClassLike {
              new(resources: Resources, name: string, argCount: int): BaseOptions$Hidden;
              new(resources: Resources, name: string): BaseOptions$Hidden;
            }
            let BaseOptions$Hidden: _BaseOptions$Hidden$$static;
            interface _BaseOptions$Hidden {
              getKind(): javadoc.doclet.Doclet$Option$Kind;
            }
            interface BaseOptions$Hidden extends CombineTypes<[_BaseOptions$Hidden, jdk.javadoc.internal.doclets.toolkit.BaseOptions$Option]> {}
            interface _BaseOptions$ModularityMismatchPolicy$$static extends ClassLike {
              valueOf(name: string): BaseOptions$ModularityMismatchPolicy;
              values(): BaseOptions$ModularityMismatchPolicy[];
              readonly INFO: BaseOptions$ModularityMismatchPolicy;
              readonly WARN: BaseOptions$ModularityMismatchPolicy;
            }
            let BaseOptions$ModularityMismatchPolicy: _BaseOptions$ModularityMismatchPolicy$$static;
            interface _BaseOptions$ModularityMismatchPolicy {
            }
            interface BaseOptions$ModularityMismatchPolicy extends CombineTypes<[_BaseOptions$ModularityMismatchPolicy]> {}
            interface _BaseOptions$Option$$static extends ClassLike {
              _new(resources: Resources, name: string, argCount: int): BaseOptions$Option;
              _new(resources: Resources, keyBase: string, name: string, argCount: int): BaseOptions$Option;
              _new(resources: Resources, name: string): BaseOptions$Option;
            }
            let BaseOptions$Option: _BaseOptions$Option$$static;
            interface _BaseOptions$Option {
              compareTo(that: BaseOptions$Option): int;
              compareTo(a0: any): int;
              getArgumentCount(): int;
              getDescription(): string;
              getKind(): javadoc.doclet.Doclet$Option$Kind;
              getNames(): java.util.List<string>;
              _getOptionsMessage(resources: Resources, key: string): string;
              getParameters(): string;
              matches(option: string): boolean;
              toString(): string;
              _argCount: int;
              _description: string;
              _names: string[];
              _parameters: string;
            }
            interface BaseOptions$Option extends CombineTypes<[_BaseOptions$Option, javadoc.doclet.Doclet$Option, java.lang.Object, java.lang.Comparable<BaseOptions$Option>]> {}
            interface _BaseOptions$XOption$$static extends ClassLike {
              new(resources: Resources, prefix: string, name: string, argCount: int): BaseOptions$XOption;
              new(resources: Resources, name: string, argCount: int): BaseOptions$XOption;
              new(resources: Resources, name: string): BaseOptions$XOption;
            }
            let BaseOptions$XOption: _BaseOptions$XOption$$static;
            interface _BaseOptions$XOption {
              getKind(): javadoc.doclet.Doclet$Option$Kind;
            }
            interface BaseOptions$XOption extends CombineTypes<[_BaseOptions$XOption, jdk.javadoc.internal.doclets.toolkit.BaseOptions$Option]> {}
            interface _ClassWriter$$static extends ClassLike {
            }
            let ClassWriter: _ClassWriter$$static;
            interface _ClassWriter {
              addClassContent(a0: Content): void;
              addClassDeprecationInfo(a0: Content): void;
              addClassDescription(a0: Content): void;
              addClassSignature(a0: Content): void;
              addClassTagInfo(a0: Content): void;
              addClassTree(a0: Content): void;
              addFooter(): void;
              addFunctionalInterfaceInfo(a0: Content): void;
              addImplementedInterfacesInfo(a0: Content): void;
              addInterfaceUsageInfo(a0: Content): void;
              addNestedClassInfo(a0: Content): void;
              addParamInfo(a0: Content): void;
              addSubClassInfo(a0: Content): void;
              addSubInterfacesInfo(a0: Content): void;
              addSuperInterfacesInfo(a0: Content): void;
              getClassContentHeader(): Content;
              getClassInfo(a0: Content): Content;
              getDetailsList(): Content;
              getDetailsListItem(a0: Content): Content;
              getHeader(a0: string): Content;
              getMemberDetails(a0: Content): Content;
              getMemberSummary(a0: Content): Content;
              getSummariesList(): Content;
              getSummariesListItem(a0: Content): Content;
              getTypeElement(): javax.lang.model.element.TypeElement;
              printDocument(a0: Content): void;
            }
            interface ClassWriter extends CombineTypes<[_ClassWriter, java.lang.Object]> {}
            interface _CommentUtils$$static extends ClassLike {
              _new(configuration: BaseConfiguration): CommentUtils;
            }
            let CommentUtils: _CommentUtils$$static;
            interface _CommentUtils {
              _add(contents: java.util.List<com.sun.source.doctree.DocTree>, resourceKey: string): void;
              getComment(key: string, o0: any): java.util.List<com.sun.source.doctree.DocTree>;
              getComment(key: string, o0: any, o1: any, o2: any): java.util.List<com.sun.source.doctree.DocTree>;
              getHtmlCommentInfo(e: javax.lang.model.element.Element): CommentUtils$DocCommentInfo;
              getSyntheticCommentInfo(e: javax.lang.model.element.Element): CommentUtils$DocCommentInfo;
              _hasParamForComponent(elem: javax.lang.model.element.TypeElement, component: javax.lang.model.element.Name): boolean;
              makeCodeTree(text: string): com.sun.source.doctree.LiteralTree;
              _makeDescriptionWithComponent(key: string, elem: javax.lang.model.element.TypeElement, component: javax.lang.model.element.Name): java.util.List<com.sun.source.doctree.DocTree>;
              _makeDescriptionWithName(key: string, name: javax.lang.model.element.Name): java.util.List<com.sun.source.doctree.DocTree>;
              makeFirstSentenceTree(content: string): java.util.List<com.sun.source.doctree.DocTree>;
              makeParamTree(name: javax.lang.model.element.Name, description: java.util.List<com.sun.source.doctree.DocTree>): com.sun.source.doctree.ParamTree;
              makePropertyDescriptionTree(content: java.util.List<com.sun.source.doctree.DocTree>): java.util.List<com.sun.source.doctree.DocTree>;
              makeReturnTree(description: java.util.List<com.sun.source.doctree.DocTree>): com.sun.source.doctree.ReturnTree;
              makeSeeTree(sig: string, e: javax.lang.model.element.Element): com.sun.source.doctree.DocTree;
              makeTextTree(content: string): com.sun.source.doctree.TextTree;
              makeTextTreeForResource(key: string): com.sun.source.doctree.TextTree;
              _parse(s: string): java.util.List<com.sun.source.doctree.DocTree>;
              parse(uri: java.net.URI, text: string): com.sun.source.doctree.DocCommentTree;
              setDocCommentInfo(element: javax.lang.model.element.Element, dci: CommentUtils$DocCommentInfo): CommentUtils$DocCommentInfo;
              setDocCommentTree(element: javax.lang.model.element.Element, fullBody: java.util.List<com.sun.source.doctree.DocTree>, blockTags: java.util.List<com.sun.source.doctree.DocTree>): CommentUtils$DocCommentInfo;
              setEnumValueOfTree(ee: javax.lang.model.element.ExecutableElement): void;
              setEnumValuesTree(ee: javax.lang.model.element.ExecutableElement): void;
              setRecordAccessorTree(ee: javax.lang.model.element.ExecutableElement): void;
              setRecordConstructorTree(ee: javax.lang.model.element.ExecutableElement): void;
              setRecordEqualsTree(ee: javax.lang.model.element.ExecutableElement): void;
              setRecordFieldTree(ve: javax.lang.model.element.VariableElement): void;
              setRecordHashCodeTree(ee: javax.lang.model.element.ExecutableElement): void;
              setRecordToStringTree(ee: javax.lang.model.element.ExecutableElement): void;
              updatePropertyMethodComment(member: javax.lang.model.element.ExecutableElement, property: javax.lang.model.element.Element): void;
              _configuration: BaseConfiguration;
              _dcInfoMap: java.util.HashMap<javax.lang.model.element.Element,CommentUtils$DocCommentInfo>;
              _elementUtils: javax.lang.model.util.Elements;
              _resources: Resources;
              _treeFactory: com.sun.source.util.DocTreeFactory;
              _trees: com.sun.source.util.DocTrees;
              _utils: util.Utils;
            }
            interface CommentUtils extends CombineTypes<[_CommentUtils, java.lang.Object]> {}
            interface _CommentUtils$DocCommentInfo$$static extends ClassLike {
              new(treePath: com.sun.source.util.TreePath, dcTree: com.sun.source.doctree.DocCommentTree): CommentUtils$DocCommentInfo;
            }
            let CommentUtils$DocCommentInfo: _CommentUtils$DocCommentInfo$$static;
            interface _CommentUtils$DocCommentInfo {
              readonly dcTree: com.sun.source.doctree.DocCommentTree;
              readonly treePath: com.sun.source.util.TreePath;
            }
            interface CommentUtils$DocCommentInfo extends CombineTypes<[_CommentUtils$DocCommentInfo, java.lang.Object]> {}
            interface _ConstantsSummaryWriter$$static extends ClassLike {
            }
            let ConstantsSummaryWriter: _ConstantsSummaryWriter$$static;
            interface _ConstantsSummaryWriter {
              addClassConstant(a0: Content): void;
              addConstantMembers(a0: javax.lang.model.element.TypeElement, a1: java.util.Collection<javax.lang.model.element.VariableElement>, a2: Content): void;
              addConstantSummaries(a0: Content): void;
              addContentsList(a0: Content): void;
              addFooter(): void;
              addLinkToPackageContent(a0: string, a1: Content): void;
              addPackageGroup(a0: string, a1: Content): void;
              getClassConstantHeader(): Content;
              getConstantSummaries(): Content;
              getContentsHeader(): Content;
              getHeader(): Content;
              printDocument(a0: Content): void;
            }
            interface ConstantsSummaryWriter extends CombineTypes<[_ConstantsSummaryWriter, java.lang.Object]> {}
            interface _ConstructorWriter$$static extends ClassLike {
            }
            let ConstructorWriter: _ConstructorWriter$$static;
            interface _ConstructorWriter {
              addComments(a0: javax.lang.model.element.ExecutableElement, a1: Content): void;
              addDeprecated(a0: javax.lang.model.element.ExecutableElement, a1: Content): void;
              addPreview(a0: javax.lang.model.element.ExecutableElement, a1: Content): void;
              addTags(a0: javax.lang.model.element.ExecutableElement, a1: Content): void;
              getConstructorDetails(a0: Content, a1: Content): Content;
              getConstructorDetailsHeader(a0: Content): Content;
              getConstructorHeaderContent(a0: javax.lang.model.element.ExecutableElement): Content;
              getMemberHeader(): Content;
              getSignature(a0: javax.lang.model.element.ExecutableElement): Content;
              setFoundNonPubConstructor(a0: boolean): void;
            }
            interface ConstructorWriter extends CombineTypes<[_ConstructorWriter, jdk.javadoc.internal.doclets.toolkit.MemberWriter, java.lang.Object]> {}
            interface _Content$$static extends ClassLike {
              new(): Content;
            }
            let Content: _Content$$static;
            interface _Content {
              add(content: Content): Content;
              add(stringContent: Content$charSequence): Content;
              addAll<T>(items: java.util.Collection<T>, mapper: java.util.function.Function<T,Content>): Content;
              charCount(): int;
              isDiscardable(): boolean;
              isEmpty(): boolean;
              toString(): string;
              write(a0: java.io.Writer, a1: string, a2: boolean): boolean;
            }
            interface Content extends CombineTypes<[_Content, java.lang.Object]> {}
            interface _DocFileElement$$static extends ClassLike {
              new(utils: toolkit.util.Utils, element: javax.lang.model.element.Element, fo: javax.tools.FileObject): DocFileElement;
            }
            let DocFileElement: _DocFileElement$$static;
            interface _DocFileElement {
              getFileObject(): javax.tools.FileObject;
              getPackageElement(): javax.lang.model.element.PackageElement;
              getSubKind(): DocletElement$Kind;
              _fo: javax.tools.FileObject;
              _packageElement: javax.lang.model.element.PackageElement;
            }
            interface DocFileElement extends CombineTypes<[_DocFileElement, jdk.javadoc.internal.doclets.toolkit.DocletElement, java.lang.Object]> {}
            interface _DocFilesHandler$$static extends ClassLike {
            }
            let DocFilesHandler: _DocFilesHandler$$static;
            interface _DocFilesHandler {
              copyDocFiles(): void;
              getStylesheets(): java.util.List<toolkit.util.DocPath>;
            }
            interface DocFilesHandler extends CombineTypes<[_DocFilesHandler, java.lang.Object]> {}
            interface _DocletElement$$static extends ClassLike {
            }
            let DocletElement: _DocletElement$$static;
            interface _DocletElement {
              accept<R, P>(v: javax.lang.model.element.ElementVisitor<R,P>, p: P): R;
              asType(): javax.lang.model.type.TypeMirror;
              getAnnotation<A>(annotationType: java.lang.Class<A>): A;
              getAnnotationMirrors(): java.util.List<javax.lang.model.element.AnnotationMirror>;
              getAnnotationsByType<A>(annotationType: java.lang.Class<A>): A[];
              getEnclosedElements(): java.util.List<javax.lang.model.element.Element>;
              getEnclosingElement(): javax.lang.model.element.Element;
              getFileObject(): javax.tools.FileObject;
              getKind(): javax.lang.model.element.ElementKind;
              getModifiers(): java.util.Set<javax.lang.model.element.Modifier>;
              getPackageElement(): javax.lang.model.element.PackageElement;
              getSimpleName(): javax.lang.model.element.Name;
              getSubKind(): DocletElement$Kind;
            }
            interface DocletElement extends CombineTypes<[_DocletElement, java.lang.Object, javax.lang.model.element.Element]> {}
            interface _DocletElement$Kind$$static extends ClassLike {
              valueOf(name: string): DocletElement$Kind;
              values(): DocletElement$Kind[];
              readonly DOCFILE: DocletElement$Kind;
              readonly OVERVIEW: DocletElement$Kind;
            }
            let DocletElement$Kind: _DocletElement$Kind$$static;
            interface _DocletElement$Kind {
            }
            interface DocletElement$Kind extends CombineTypes<[_DocletElement$Kind]> {}
            interface _DocletException$$static extends ClassLike {
              _serialVersionUID: long;
              _new(message: string): DocletException;
              _new(message: string, cause: java.lang.Throwable): DocletException;
            }
            let DocletException: _DocletException$$static;
            interface _DocletException {
            }
            interface DocletException extends CombineTypes<[_DocletException, java.lang.Exception]> {}
            interface _EnumConstantWriter$$static extends ClassLike {
            }
            let EnumConstantWriter: _EnumConstantWriter$$static;
            interface _EnumConstantWriter {
              addComments(a0: javax.lang.model.element.VariableElement, a1: Content): void;
              addDeprecated(a0: javax.lang.model.element.VariableElement, a1: Content): void;
              addPreview(a0: javax.lang.model.element.VariableElement, a1: Content): void;
              addTags(a0: javax.lang.model.element.VariableElement, a1: Content): void;
              getEnumConstantsDetails(a0: Content, a1: Content): Content;
              getEnumConstantsDetailsHeader(a0: javax.lang.model.element.TypeElement, a1: Content): Content;
              getEnumConstantsHeader(a0: javax.lang.model.element.VariableElement, a1: Content): Content;
              getMemberHeader(): Content;
              getSignature(a0: javax.lang.model.element.VariableElement): Content;
            }
            interface EnumConstantWriter extends CombineTypes<[_EnumConstantWriter, jdk.javadoc.internal.doclets.toolkit.MemberWriter, java.lang.Object]> {}
            interface _FieldWriter$$static extends ClassLike {
            }
            let FieldWriter: _FieldWriter$$static;
            interface _FieldWriter {
              addComments(a0: javax.lang.model.element.VariableElement, a1: Content): void;
              addDeprecated(a0: javax.lang.model.element.VariableElement, a1: Content): void;
              addPreview(a0: javax.lang.model.element.VariableElement, a1: Content): void;
              addTags(a0: javax.lang.model.element.VariableElement, a1: Content): void;
              getFieldDetails(a0: Content, a1: Content): Content;
              getFieldDetailsHeader(a0: Content): Content;
              getFieldHeaderContent(a0: javax.lang.model.element.VariableElement): Content;
              getMemberHeader(): Content;
              getSignature(a0: javax.lang.model.element.VariableElement): Content;
            }
            interface FieldWriter extends CombineTypes<[_FieldWriter, jdk.javadoc.internal.doclets.toolkit.MemberWriter, java.lang.Object]> {}
            interface _MemberSummaryWriter$$static extends ClassLike {
            }
            let MemberSummaryWriter: _MemberSummaryWriter$$static;
            interface _MemberSummaryWriter {
              addInheritedMemberSummary(a0: javax.lang.model.element.TypeElement, a1: javax.lang.model.element.Element, a2: boolean, a3: boolean, a4: Content): void;
              addMemberSummary(a0: javax.lang.model.element.TypeElement, a1: javax.lang.model.element.Element, a2: java.util.List<com.sun.source.doctree.DocTree>): void;
              addSummary(a0: Content, a1: Content): void;
              getInheritedSummaryHeader(a0: javax.lang.model.element.TypeElement): Content;
              getInheritedSummaryLinks(): Content;
              getMember(a0: Content): Content;
              getMemberSummaryHeader(a0: javax.lang.model.element.TypeElement, a1: Content): Content;
              getSummaryTable(a0: javax.lang.model.element.TypeElement): Content;
            }
            interface MemberSummaryWriter extends CombineTypes<[_MemberSummaryWriter, java.lang.Object]> {}
            interface _MemberWriter$$static extends ClassLike {
            }
            let MemberWriter: _MemberWriter$$static;
            interface _MemberWriter {
              getMemberList(): Content;
              getMemberListItem(a0: Content): Content;
            }
            interface MemberWriter extends CombineTypes<[_MemberWriter, java.lang.Object]> {}
            interface _Messages$$static extends ClassLike {
              new(configuration: BaseConfiguration, resources: Resources): Messages;
            }
            let Messages: _Messages$$static;
            interface _Messages {
              error(key: string, args: any[]): void;
              error(key: string, ...args: any[]): void;
              error(path: com.sun.source.util.DocTreePath, key: string, args: any[]): void;
              error(path: com.sun.source.util.DocTreePath, key: string, ...args: any[]): void;
              error(path: com.sun.source.util.DocTreePath, start: int, pos: int, end: int, key: string, args: any[]): void;
              error(path: com.sun.source.util.DocTreePath, start: int, pos: int, end: int, key: string, ...args: any[]): void;
              error(fo: javax.tools.FileObject, start: int, pos: int, end: int, key: string, args: any[]): void;
              error(fo: javax.tools.FileObject, start: int, pos: int, end: int, key: string, ...args: any[]): void;
              error(e: javax.lang.model.element.Element, key: string, args: any[]): void;
              error(e: javax.lang.model.element.Element, key: string, ...args: any[]): void;
              getResources(): Resources;
              notice(key: string, args: any[]): void;
              notice(key: string, ...args: any[]): void;
              _report(k: javax.tools.Diagnostic$Kind, msg: string): void;
              _report(k: javax.tools.Diagnostic$Kind, p: com.sun.source.util.DocTreePath, msg: string): void;
              _report(k: javax.tools.Diagnostic$Kind, e: javax.lang.model.element.Element, msg: string): void;
              _report(k: javax.tools.Diagnostic$Kind, fo: javax.tools.FileObject, start: int, pos: int, end: int, msg: string): void;
              _report(k: javax.tools.Diagnostic$Kind, path: com.sun.source.util.DocTreePath, start: int, pos: int, end: int, msg: string): void;
              warning(key: string, args: any[]): void;
              warning(key: string, ...args: any[]): void;
              warning(path: com.sun.source.util.DocTreePath, key: string, args: any[]): void;
              warning(path: com.sun.source.util.DocTreePath, key: string, ...args: any[]): void;
              warning(path: com.sun.source.util.DocTreePath, start: int, pos: int, end: int, key: string, args: any[]): void;
              warning(path: com.sun.source.util.DocTreePath, start: int, pos: int, end: int, key: string, ...args: any[]): void;
              warning(e: javax.lang.model.element.Element, key: string, args: any[]): void;
              warning(e: javax.lang.model.element.Element, key: string, ...args: any[]): void;
              warning(fo: javax.tools.FileObject, start: int, pos: int, end: int, key: string, args: any[]): void;
              warning(fo: javax.tools.FileObject, start: int, pos: int, end: int, key: string, ...args: any[]): void;
              _configuration: BaseConfiguration;
              _reporter: javadoc.doclet.Reporter;
              _resources: Resources;
            }
            interface Messages extends CombineTypes<[_Messages, java.lang.Object]> {}
            interface _MethodWriter$$static extends ClassLike {
            }
            let MethodWriter: _MethodWriter$$static;
            interface _MethodWriter {
              addComments(a0: javax.lang.model.type.TypeMirror, a1: javax.lang.model.element.ExecutableElement, a2: Content): void;
              addDeprecated(a0: javax.lang.model.element.ExecutableElement, a1: Content): void;
              addPreview(a0: javax.lang.model.element.ExecutableElement, a1: Content): void;
              addTags(a0: javax.lang.model.element.ExecutableElement, a1: Content): void;
              getMemberHeader(): Content;
              getMethodDetails(a0: Content, a1: Content): Content;
              getMethodDetailsHeader(a0: Content): Content;
              getMethodHeader(a0: javax.lang.model.element.ExecutableElement): Content;
              getSignature(a0: javax.lang.model.element.ExecutableElement): Content;
            }
            interface MethodWriter extends CombineTypes<[_MethodWriter, jdk.javadoc.internal.doclets.toolkit.MemberWriter, java.lang.Object]> {}
            interface _ModuleSummaryWriter$$static extends ClassLike {
            }
            let ModuleSummaryWriter: _ModuleSummaryWriter$$static;
            interface _ModuleSummaryWriter {
              addModuleContent(a0: Content): void;
              addModuleDescription(a0: Content): void;
              addModuleFooter(): void;
              addModuleSignature(a0: Content): void;
              addModulesSummary(a0: Content): void;
              addPackagesSummary(a0: Content): void;
              addServicesSummary(a0: Content): void;
              getContentHeader(): Content;
              getModuleHeader(a0: string): Content;
              getSummariesList(): Content;
              getSummary(a0: Content): Content;
              printDocument(a0: Content): void;
            }
            interface ModuleSummaryWriter extends CombineTypes<[_ModuleSummaryWriter, java.lang.Object]> {}
            interface _NestedClassWriter$$static extends ClassLike {
            }
            let NestedClassWriter: _NestedClassWriter$$static;
            interface _NestedClassWriter {
            }
            interface NestedClassWriter extends CombineTypes<[_NestedClassWriter, java.lang.Object]> {}
            interface _OverviewElement$$static extends ClassLike {
              new(pkg: javax.lang.model.element.PackageElement, fo: javax.tools.FileObject): OverviewElement;
            }
            let OverviewElement: _OverviewElement$$static;
            interface _OverviewElement {
              getFileObject(): javax.tools.FileObject;
              getPackageElement(): javax.lang.model.element.PackageElement;
              getSubKind(): DocletElement$Kind;
              _fo: javax.tools.FileObject;
              _pkg: javax.lang.model.element.PackageElement;
            }
            interface OverviewElement extends CombineTypes<[_OverviewElement, jdk.javadoc.internal.doclets.toolkit.DocletElement, java.lang.Object]> {}
            interface _PackageSummaryWriter$$static extends ClassLike {
            }
            let PackageSummaryWriter: _PackageSummaryWriter$$static;
            interface _PackageSummaryWriter {
              addAllClassesAndInterfacesSummary(a0: Content): void;
              addPackageContent(a0: Content): void;
              addPackageDescription(a0: Content): void;
              addPackageFooter(): void;
              addPackageSignature(a0: Content): void;
              addPackageTags(a0: Content): void;
              addRelatedPackagesSummary(a0: Content): void;
              getContentHeader(): Content;
              getPackageHeader(): Content;
              getPackageSummary(a0: Content): Content;
              getSummariesList(): Content;
              printDocument(a0: Content): void;
            }
            interface PackageSummaryWriter extends CombineTypes<[_PackageSummaryWriter, java.lang.Object]> {}
            interface _PropertyUtils$$static extends ClassLike {
              _new(configuration: BaseConfiguration): PropertyUtils;
            }
            let PropertyUtils: _PropertyUtils$$static;
            interface _PropertyUtils {
              getBaseName(propertyMethod: javax.lang.model.element.ExecutableElement): string;
              getGetName(propertyMethod: javax.lang.model.element.ExecutableElement): string;
              getIsName(propertyMethod: javax.lang.model.element.ExecutableElement): string;
              getSetName(propertyMethod: javax.lang.model.element.ExecutableElement): string;
              hasIsMethod(propertyMethod: javax.lang.model.element.ExecutableElement): boolean;
              isPropertyMethod(propertyMethod: javax.lang.model.element.ExecutableElement): boolean;
              isValidSetterMethod(setterMethod: javax.lang.model.element.ExecutableElement): boolean;
              _fxMethodPatterns: java.util.regex.Pattern;
              _javafx: boolean;
              _jbObservableType: javax.lang.model.type.TypeMirror;
              _typeUtils: javax.lang.model.util.Types;
            }
            interface PropertyUtils extends CombineTypes<[_PropertyUtils, java.lang.Object]> {}
            interface _PropertyWriter$$static extends ClassLike {
            }
            let PropertyWriter: _PropertyWriter$$static;
            interface _PropertyWriter {
              addComments(a0: javax.lang.model.element.ExecutableElement, a1: Content): void;
              addDeprecated(a0: javax.lang.model.element.ExecutableElement, a1: Content): void;
              addPreview(a0: javax.lang.model.element.ExecutableElement, a1: Content): void;
              addTags(a0: javax.lang.model.element.ExecutableElement, a1: Content): void;
              getPropertyDetails(a0: Content, a1: Content): Content;
              getPropertyDetailsHeader(a0: Content): Content;
              getPropertyHeaderContent(a0: javax.lang.model.element.ExecutableElement): Content;
              getSignature(a0: javax.lang.model.element.ExecutableElement): Content;
            }
            interface PropertyWriter extends CombineTypes<[_PropertyWriter, jdk.javadoc.internal.doclets.toolkit.MemberWriter, java.lang.Object]> {}
            interface _Resources$$static extends ClassLike {
              new(locale: java.util.Locale, commonBundleName: string, docletBundleName: string): Resources;
            }
            let Resources: _Resources$$static;
            interface _Resources {
              getText(key: string): string;
              getText(key: string, args: any[]): string;
              getText(key: string, ...args: any[]): string;
              setKeyMapper(mapper: java.util.function.Function<string,string>): void;
              _commonBundle: java.util.ResourceBundle;
              _docletBundle: java.util.ResourceBundle;
              _mapper: java.util.function.Function<string,string>;
            }
            interface Resources extends CombineTypes<[_Resources, java.lang.Object]> {}
            interface _SerializedFormWriter$$static extends ClassLike {
            }
            let SerializedFormWriter: _SerializedFormWriter$$static;
            interface _SerializedFormWriter {
              addFooter(): void;
              addPackageSerialized(a0: Content, a1: Content): void;
              addSerialUIDInfo(a0: string, a1: string, a2: Content): void;
              addSerializedContent(a0: Content): void;
              getClassContentHeader(): Content;
              getClassHeader(a0: javax.lang.model.element.TypeElement): Content;
              getClassSerializedHeader(): Content;
              getHeader(a0: string): Content;
              getMember(a0: Content): Content;
              getPackageHeader(a0: javax.lang.model.element.PackageElement): Content;
              getPackageSerializedHeader(): Content;
              getSerialFieldWriter(a0: javax.lang.model.element.TypeElement): SerializedFormWriter$SerialFieldWriter;
              getSerialMethodWriter(a0: javax.lang.model.element.TypeElement): SerializedFormWriter$SerialMethodWriter;
              getSerialUIDInfoHeader(): Content;
              getSerializedSummariesHeader(): Content;
              printDocument(a0: Content): void;
            }
            interface SerializedFormWriter extends CombineTypes<[_SerializedFormWriter, java.lang.Object]> {}
            interface _SerializedFormWriter$SerialFieldWriter$$static extends ClassLike {
            }
            let SerializedFormWriter$SerialFieldWriter: _SerializedFormWriter$SerialFieldWriter$$static;
            interface _SerializedFormWriter$SerialFieldWriter {
              addMemberDeprecatedInfo(a0: javax.lang.model.element.VariableElement, a1: Content): void;
              addMemberDescription(a0: javax.lang.model.element.VariableElement, a1: Content): void;
              addMemberDescription(a0: javax.lang.model.element.VariableElement, a1: com.sun.source.doctree.SerialFieldTree, a2: Content): void;
              addMemberHeader(a0: javax.lang.model.type.TypeMirror, a1: string, a2: Content): void;
              addMemberTags(a0: javax.lang.model.element.VariableElement, a1: Content): void;
              getFieldsContentHeader(a0: boolean): Content;
              getSerializableFields(a0: string, a1: Content): Content;
              getSerializableFieldsHeader(): Content;
              shouldPrintOverview(a0: javax.lang.model.element.VariableElement): boolean;
            }
            interface SerializedFormWriter$SerialFieldWriter extends CombineTypes<[_SerializedFormWriter$SerialFieldWriter, java.lang.Object]> {}
            interface _SerializedFormWriter$SerialMethodWriter$$static extends ClassLike {
            }
            let SerializedFormWriter$SerialMethodWriter: _SerializedFormWriter$SerialMethodWriter$$static;
            interface _SerializedFormWriter$SerialMethodWriter {
              addDeprecatedMemberInfo(a0: javax.lang.model.element.ExecutableElement, a1: Content): void;
              addMemberDescription(a0: javax.lang.model.element.ExecutableElement, a1: Content): void;
              addMemberHeader(a0: javax.lang.model.element.ExecutableElement, a1: Content): void;
              addMemberTags(a0: javax.lang.model.element.ExecutableElement, a1: Content): void;
              getMethodsContentHeader(a0: boolean): Content;
              getNoCustomizationMsg(a0: string): Content;
              getSerializableMethods(a0: string, a1: Content): Content;
              getSerializableMethodsHeader(): Content;
            }
            interface SerializedFormWriter$SerialMethodWriter extends CombineTypes<[_SerializedFormWriter$SerialMethodWriter, java.lang.Object]> {}
            interface _WorkArounds$$static extends ClassLike {
              new(configuration: BaseConfiguration): WorkArounds;
            }
            let WorkArounds: _WorkArounds$$static;
            interface _WorkArounds {
              accessInternalAPI(): boolean;
              definesSerializableFields(typeElem: javax.lang.model.element.TypeElement): boolean;
              getElementToTreePath(): java.util.Map<javax.lang.model.element.Element,com.sun.source.util.TreePath>;
              _getJavaFileObject(packageElement: javax.lang.model.element.PackageElement): javax.tools.FileObject;
              getJepInfo(feature: string): java.util.Map<javax.lang.model.element.ExecutableElement,javax.lang.model.element.AnnotationValue>;
              getLocationForModule(mdle: javax.lang.model.element.ModuleElement): javax.tools.JavaFileManager$Location;
              getSerializableFields(typeElem: javax.lang.model.element.TypeElement): java.util.SortedSet<javax.lang.model.element.VariableElement>;
              getSerializationMethods(typeElem: javax.lang.model.element.TypeElement): java.util.SortedSet<javax.lang.model.element.ExecutableElement>;
              _getSerializedForm(typeElem: javax.lang.model.element.TypeElement): WorkArounds$NewSerializedForm;
              isDeprecated0(e: javax.lang.model.element.Element): boolean;
              isMandated(aDesc: javax.lang.model.element.AnnotationMirror): boolean;
              isPreviewAPI(el: javax.lang.model.element.Element): boolean;
              isReflectivePreviewAPI(el: javax.lang.model.element.Element): boolean;
              searchClass(klass: javax.lang.model.element.TypeElement, className: string): javax.lang.model.element.TypeElement;
              readonly configuration: BaseConfiguration;
              readonly elementUtils: javax.lang.model.util.Elements;
              readonly javacTypes: com.sun.tools.javac.code.Types;
              _serializedForms: java.util.Map<javax.lang.model.element.TypeElement,WorkArounds$NewSerializedForm>;
              readonly toolEnv: internal.tool.ToolEnvironment;
              readonly typeUtils: javax.lang.model.util.Types;
              readonly utils: util.Utils;
            }
            interface WorkArounds extends CombineTypes<[_WorkArounds, java.lang.Object]> {}
            interface _WorkArounds$NewSerializedForm$$static extends ClassLike {
              _READOBJECT: string;
              _READOBJECTNODATA: string;
              _READRESOLVE: string;
              _SERIALIZABLE_FIELDS: string;
              _WRITEOBJECT: string;
              _WRITEREPLACE: string;
              _new(utils: toolkit.util.Utils, elements: javax.lang.model.util.Elements, te: javax.lang.model.element.TypeElement): WorkArounds$NewSerializedForm;
            }
            let WorkArounds$NewSerializedForm: _WorkArounds$NewSerializedForm$$static;
            interface _WorkArounds$NewSerializedForm {
              _addMethodIfExist(def: com.sun.tools.javac.code.Symbol$ClassSymbol, methodName: string): void;
              _computeDefaultSerializableFields(te: com.sun.tools.javac.code.Symbol$ClassSymbol): void;
              findMethod(te: javax.lang.model.element.TypeElement, methodName: string, paramTypes: java.util.List<string>): javax.lang.model.element.ExecutableElement;
              _getDefinedSerializableFields(def: com.sun.tools.javac.code.Symbol$ClassSymbol): com.sun.tools.javac.code.Symbol$VarSymbol;
              _definesSerializableFields: boolean;
              _elements: javax.lang.model.util.Elements;
              _fields: java.util.SortedSet<javax.lang.model.element.VariableElement>;
              _methods: java.util.SortedSet<javax.lang.model.element.ExecutableElement>;
              _utils: util.Utils;
            }
            interface WorkArounds$NewSerializedForm extends CombineTypes<[_WorkArounds$NewSerializedForm, java.lang.Object]> {}
            interface _WriterFactory$$static extends ClassLike {
            }
            let WriterFactory: _WriterFactory$$static;
            interface _WriterFactory {
              getAnnotationTypeMemberWriter(a0: ClassWriter): AnnotationTypeMemberWriter;
              getAnnotationTypeOptionalMemberWriter(a0: ClassWriter): AnnotationTypeMemberWriter;
              getAnnotationTypeRequiredMemberWriter(a0: ClassWriter): AnnotationTypeMemberWriter;
              getClassWriter(a0: javax.lang.model.element.TypeElement, a1: toolkit.util.ClassTree): ClassWriter;
              getConstantsSummaryWriter(): ConstantsSummaryWriter;
              getConstructorWriter(a0: ClassWriter): ConstructorWriter;
              getDocFilesHandler(a0: javax.lang.model.element.Element): DocFilesHandler;
              getEnumConstantWriter(a0: ClassWriter): EnumConstantWriter;
              getFieldWriter(a0: ClassWriter): FieldWriter;
              getMemberSummaryWriter(a0: ClassWriter, a1: toolkit.util.VisibleMemberTable$Kind): MemberSummaryWriter;
              getMethodWriter(a0: ClassWriter): MethodWriter;
              getModuleSummaryWriter(a0: javax.lang.model.element.ModuleElement): ModuleSummaryWriter;
              getPackageSummaryWriter(a0: javax.lang.model.element.PackageElement): PackageSummaryWriter;
              getPropertyWriter(a0: ClassWriter): PropertyWriter;
              getSerializedFormWriter(): SerializedFormWriter;
            }
            interface WriterFactory extends CombineTypes<[_WriterFactory, java.lang.Object]> {}
          }
        }
        module doclint {
          module resources {
            interface _doclint$$static extends ClassLike {
              new(): doclint;
            }
            let doclint: _doclint$$static;
            interface _doclint {
              _getContents(): any[][];
            }
            interface doclint extends CombineTypes<[_doclint, java.util.ListResourceBundle]> {}
            interface _doclint_de$$static extends ClassLike {
              new(): doclint_de;
            }
            let doclint_de: _doclint_de$$static;
            interface _doclint_de {
              _getContents(): any[][];
            }
            interface doclint_de extends CombineTypes<[_doclint_de, java.util.ListResourceBundle]> {}
            interface _doclint_ja$$static extends ClassLike {
              new(): doclint_ja;
            }
            let doclint_ja: _doclint_ja$$static;
            interface _doclint_ja {
              _getContents(): any[][];
            }
            interface doclint_ja extends CombineTypes<[_doclint_ja, java.util.ListResourceBundle]> {}
            interface _doclint_zh_CN$$static extends ClassLike {
              new(): doclint_zh_CN;
            }
            let doclint_zh_CN: _doclint_zh_CN$$static;
            interface _doclint_zh_CN {
              _getContents(): any[][];
            }
            interface doclint_zh_CN extends CombineTypes<[_doclint_zh_CN, java.util.ListResourceBundle]> {}
          }
          interface _Checker$$static extends ClassLike {
            _docRoot: java.util.regex.Pattern;
            _validId: java.util.regex.Pattern;
            _validNumber: java.util.regex.Pattern;
            _new(env: Env): Checker;
          }
          let Checker: _Checker$$static;
          interface _Checker {
            _checkAllowsText(tree: com.sun.source.doctree.DocTree): void;
            _checkAnchor(name: string): boolean;
            _checkHeading(tree: com.sun.source.doctree.StartElementTree, tag: HtmlTag): void;
            _checkParamsDocumented(list: java.util.List<javax.lang.model.element.Element>): void;
            _checkStructure(tree: com.sun.source.doctree.StartElementTree, t: HtmlTag): void;
            _checkTagStack(): void;
            _checkThrowsDeclared(tree: com.sun.source.doctree.ReferenceTree, t: javax.lang.model.type.TypeMirror, list: java.util.List<javax.lang.model.type.TypeMirror>): void;
            _checkThrowsDocumented(list: java.util.List<javax.lang.model.type.TypeMirror>): void;
            _checkURI(tree: com.sun.source.doctree.AttributeTree, uri: string): void;
            _checkUnknownTag(tree: com.sun.source.doctree.DocTree, tagName: string): void;
            _getAttrValue(tree: com.sun.source.doctree.AttributeTree): string;
            _getEnclosingPackageOrClass(e: javax.lang.model.element.Element): javax.lang.model.element.Element;
            _getHeadingRank(tag: HtmlTag): int;
            _getParentKind(): com.sun.source.doctree.DocTree$Kind;
            _hasNonWhitespace(tree: com.sun.source.doctree.TextTree): boolean;
            _isAnonymous(): boolean;
            _isCanonicalRecordConstructor(ee: javax.lang.model.element.ExecutableElement): boolean;
            _isCheckedException(t: javax.lang.model.type.TypeMirror): boolean;
            _isConstant(e: javax.lang.model.element.Element): boolean;
            _isDeclaredType(): boolean;
            _isDefaultConstructor(): boolean;
            _isExecutable(): boolean;
            _isNormalClass(p: com.sun.source.util.TreePath): boolean;
            _isRecordComponentOrField(): boolean;
            _isSelfClosingAllowed(tag: HtmlTag): boolean;
            _isSynthetic(): boolean;
            _isThrowable(tm: javax.lang.model.type.TypeMirror): boolean;
            _markEnclosingTag(flag: Checker$Flag): void;
            _pseudoElement(p: com.sun.source.util.TreePath): boolean;
            _reportBadReference(tree: com.sun.source.doctree.ReferenceTree): void;
            _reportMissing(code: string, args: any[]): void;
            _reportMissing(code: string, ...args: any[]): void;
            _reportReference(code: string, args: any[]): void;
            _reportReference(code: string, ...args: any[]): void;
            scan(tree: com.sun.source.doctree.DocCommentTree, p: com.sun.source.util.TreePath): java.lang.Void;
            _toString(p: com.sun.source.util.TreePath): string;
            _toString(p: com.sun.source.util.TreePath, sb: Checker$stringBuilder): void;
            visitAttribute(tree: com.sun.source.doctree.AttributeTree, ignore: java.lang.Void): java.lang.Void;
            visitAttribute(a0: com.sun.source.doctree.AttributeTree, a1: any): any;
            visitAuthor(tree: com.sun.source.doctree.AuthorTree, ignore: java.lang.Void): java.lang.Void;
            visitAuthor(a0: com.sun.source.doctree.AuthorTree, a1: any): any;
            visitDocComment(tree: com.sun.source.doctree.DocCommentTree, ignore: java.lang.Void): java.lang.Void;
            visitDocComment(a0: com.sun.source.doctree.DocCommentTree, a1: any): any;
            visitDocRoot(tree: com.sun.source.doctree.DocRootTree, ignore: java.lang.Void): java.lang.Void;
            visitDocRoot(a0: com.sun.source.doctree.DocRootTree, a1: any): any;
            visitEndElement(tree: com.sun.source.doctree.EndElementTree, ignore: java.lang.Void): java.lang.Void;
            visitEndElement(a0: com.sun.source.doctree.EndElementTree, a1: any): any;
            visitEntity(tree: com.sun.source.doctree.EntityTree, ignore: java.lang.Void): java.lang.Void;
            visitEntity(a0: com.sun.source.doctree.EntityTree, a1: any): any;
            visitErroneous(tree: com.sun.source.doctree.ErroneousTree, ignore: java.lang.Void): java.lang.Void;
            visitErroneous(a0: com.sun.source.doctree.ErroneousTree, a1: any): any;
            visitEscape(tree: com.sun.source.doctree.EscapeTree, ignore: java.lang.Void): java.lang.Void;
            visitEscape(a0: com.sun.source.doctree.EscapeTree, a1: any): any;
            visitIndex(tree: com.sun.source.doctree.IndexTree, ignore: java.lang.Void): java.lang.Void;
            visitIndex(a0: com.sun.source.doctree.IndexTree, a1: any): any;
            visitInheritDoc(tree: com.sun.source.doctree.InheritDocTree, ignore: java.lang.Void): java.lang.Void;
            visitInheritDoc(a0: com.sun.source.doctree.InheritDocTree, a1: any): any;
            visitLink(tree: com.sun.source.doctree.LinkTree, ignore: java.lang.Void): java.lang.Void;
            visitLink(a0: com.sun.source.doctree.LinkTree, a1: any): any;
            visitLiteral(tree: com.sun.source.doctree.LiteralTree, ignore: java.lang.Void): java.lang.Void;
            visitLiteral(a0: com.sun.source.doctree.LiteralTree, a1: any): any;
            visitParam(tree: com.sun.source.doctree.ParamTree, ignore: java.lang.Void): java.lang.Void;
            visitParam(a0: com.sun.source.doctree.ParamTree, a1: any): any;
            visitProvides(tree: com.sun.source.doctree.ProvidesTree, ignore: java.lang.Void): java.lang.Void;
            visitProvides(a0: com.sun.source.doctree.ProvidesTree, a1: any): any;
            visitReference(tree: com.sun.source.doctree.ReferenceTree, ignore: java.lang.Void): java.lang.Void;
            visitReference(a0: com.sun.source.doctree.ReferenceTree, a1: any): any;
            visitReturn(tree: com.sun.source.doctree.ReturnTree, ignore: java.lang.Void): java.lang.Void;
            visitReturn(a0: com.sun.source.doctree.ReturnTree, a1: any): any;
            visitSerialData(tree: com.sun.source.doctree.SerialDataTree, ignore: java.lang.Void): java.lang.Void;
            visitSerialData(a0: com.sun.source.doctree.SerialDataTree, a1: any): any;
            visitSerialField(tree: com.sun.source.doctree.SerialFieldTree, ignore: java.lang.Void): java.lang.Void;
            visitSerialField(a0: com.sun.source.doctree.SerialFieldTree, a1: any): any;
            visitSince(tree: com.sun.source.doctree.SinceTree, ignore: java.lang.Void): java.lang.Void;
            visitSince(a0: com.sun.source.doctree.SinceTree, a1: any): any;
            visitStartElement(tree: com.sun.source.doctree.StartElementTree, ignore: java.lang.Void): java.lang.Void;
            visitStartElement(a0: com.sun.source.doctree.StartElementTree, a1: any): any;
            visitSummary(tree: com.sun.source.doctree.SummaryTree, aVoid: java.lang.Void): java.lang.Void;
            visitSummary(a0: com.sun.source.doctree.SummaryTree, a1: any): any;
            visitSystemProperty(tree: com.sun.source.doctree.SystemPropertyTree, ignore: java.lang.Void): java.lang.Void;
            visitSystemProperty(a0: com.sun.source.doctree.SystemPropertyTree, a1: any): any;
            visitText(tree: com.sun.source.doctree.TextTree, ignore: java.lang.Void): java.lang.Void;
            visitText(a0: com.sun.source.doctree.TextTree, a1: any): any;
            visitThrows(tree: com.sun.source.doctree.ThrowsTree, ignore: java.lang.Void): java.lang.Void;
            visitThrows(a0: com.sun.source.doctree.ThrowsTree, a1: any): any;
            visitUnknownBlockTag(tree: com.sun.source.doctree.UnknownBlockTagTree, ignore: java.lang.Void): java.lang.Void;
            visitUnknownBlockTag(a0: com.sun.source.doctree.UnknownBlockTagTree, a1: any): any;
            visitUnknownInlineTag(tree: com.sun.source.doctree.UnknownInlineTagTree, ignore: java.lang.Void): java.lang.Void;
            visitUnknownInlineTag(a0: com.sun.source.doctree.UnknownInlineTagTree, a1: any): any;
            visitUses(tree: com.sun.source.doctree.UsesTree, ignore: java.lang.Void): java.lang.Void;
            visitUses(a0: com.sun.source.doctree.UsesTree, a1: any): any;
            visitValue(tree: com.sun.source.doctree.ValueTree, ignore: java.lang.Void): java.lang.Void;
            visitValue(a0: com.sun.source.doctree.ValueTree, a1: any): any;
            visitVersion(tree: com.sun.source.doctree.VersionTree, ignore: java.lang.Void): java.lang.Void;
            visitVersion(a0: com.sun.source.doctree.VersionTree, a1: any): any;
            _warnIfEmpty(tsi: Checker$TagStackItem, endTree: com.sun.source.doctree.DocTree): void;
            _warnIfEmpty(tree: com.sun.source.doctree.DocTree, list: java.util.List<com.sun.source.doctree.DocTree>): void;
            _currHeadingTag: HtmlTag;
            _env: Env;
            _foundAnchors: java.util.Map<javax.lang.model.element.Element,java.util.Set<string>>;
            _foundInheritDoc: boolean;
            _foundParams: java.util.Set<javax.lang.model.element.Element>;
            _foundReturn: boolean;
            _foundThrows: java.util.Set<javax.lang.model.type.TypeMirror>;
            _hasNonWhitespaceText: boolean;
            _implicitHeadingRank: int;
            _inIndex: boolean;
            _inLink: boolean;
            _inSummary: boolean;
            _tagStack: java.util.Deque<Checker$TagStackItem>;
          }
          interface Checker extends CombineTypes<[_Checker, com.sun.source.util.DocTreePathScanner<java.lang.Void,java.lang.Void>]> {}
          interface _Checker$Flag$$static extends ClassLike {
            valueOf(name: string): Checker$Flag;
            values(): Checker$Flag[];
            readonly HAS_ELEMENT: Checker$Flag;
            readonly HAS_HEADING: Checker$Flag;
            readonly HAS_INLINE_TAG: Checker$Flag;
            readonly HAS_TEXT: Checker$Flag;
            readonly REPORTED_BAD_INLINE: Checker$Flag;
            readonly TABLE_HAS_CAPTION: Checker$Flag;
            readonly TABLE_IS_PRESENTATION: Checker$Flag;
          }
          let Checker$Flag: _Checker$Flag$$static;
          interface _Checker$Flag {
          }
          interface Checker$Flag extends CombineTypes<[_Checker$Flag]> {}
          interface _Checker$TagStackItem$$static extends ClassLike {
            _new(tree: com.sun.source.doctree.DocTree, tag: HtmlTag): Checker$TagStackItem;
          }
          let Checker$TagStackItem: _Checker$TagStackItem$$static;
          interface _Checker$TagStackItem {
            toString(): string;
            _attrs: java.util.Set<HtmlTag$Attr>;
            _flags: java.util.Set<Checker$Flag>;
            _tag: HtmlTag;
            _tree: com.sun.source.doctree.DocTree;
          }
          interface Checker$TagStackItem extends CombineTypes<[_Checker$TagStackItem, java.lang.Object]> {}
          interface _DocLint$$static extends ClassLike {
            main(args: string[]): void;
            main(...args: string[]): void;
            readonly SEPARATOR: string;
            _STATS: string;
            readonly XCHECK_PACKAGE: string;
            readonly XCUSTOM_TAGS_PREFIX: string;
            readonly XMSGS_CUSTOM_PREFIX: string;
            readonly XMSGS_OPTION: string;
            new(): DocLint;
          }
          let DocLint: _DocLint$$static;
          interface _DocLint {
            getName(): string;
            init(task: com.sun.source.util.JavacTask, args: string[]): void;
            init(task: com.sun.source.util.JavacTask, ...args: string[]): void;
            init(task: com.sun.source.util.JavacTask, args: string[], addTaskListener: boolean): void;
            init(trees: com.sun.source.util.DocTrees, elements: javax.lang.model.util.Elements, types: javax.lang.model.util.Types, args: string[]): void;
            init(trees: com.sun.source.util.DocTrees, elements: javax.lang.model.util.Elements, types: javax.lang.model.util.Types, ...args: string[]): void;
            isGroupEnabled(group: Messages$Group, accessKind: Env$AccessKind): boolean;
            isValidOption(opt: string): boolean;
            _localize(code: string, args: any[]): string;
            _localize(code: string, ...args: any[]): string;
            _processArgs(args: string[]): void;
            _processArgs(...args: string[]): void;
            _processArgs(env: Env, args: string[]): void;
            _processArgs(env: Env, ...args: string[]): void;
            reportStats(out: java.io.PrintWriter): void;
            run(args: string[]): void;
            run(...args: string[]): void;
            run(out: java.io.PrintWriter, args: string[]): void;
            run(out: java.io.PrintWriter, ...args: string[]): void;
            scan(p: com.sun.source.util.TreePath): void;
            shouldCheck(unit: com.sun.source.tree.CompilationUnitTree): boolean;
            _showHelp(out: java.io.PrintWriter): void;
            _splitPath(path: string): java.util.List<java.io.File>;
            _checker: Checker;
            _env: Env;
            _javacBootClassPath: java.util.List<java.io.File>;
            _javacClassPath: java.util.List<java.io.File>;
            _javacFiles: java.util.List<java.io.File>;
            _javacOpts: java.util.List<string>;
            _javacSourcePath: java.util.List<java.io.File>;
            _needHelp: boolean;
          }
          interface DocLint extends CombineTypes<[_DocLint, com.sun.tools.doclint.DocLint]> {}
          interface _DocLint$BadArgs$$static extends ClassLike {
            _serialVersionUID: long;
            _new(this$0: DocLint, code: string, args: any[]): DocLint$BadArgs;
            _new(this$0: DocLint, code: string, ...args: any[]): DocLint$BadArgs;
          }
          let DocLint$BadArgs: _DocLint$BadArgs$$static;
          interface _DocLint$BadArgs {
            _args: any[];
            _code: string;
            _this$0: DocLint;
          }
          interface DocLint$BadArgs extends CombineTypes<[_DocLint$BadArgs, java.lang.Exception]> {}
          interface _DocLint$DeclScanner$$static extends ClassLike {
            new(env: Env): DocLint$DeclScanner;
          }
          let DocLint$DeclScanner: _DocLint$DeclScanner$$static;
          interface _DocLint$DeclScanner {
            visitBlock(tree: com.sun.source.tree.BlockTree, ignore: java.lang.Void): java.lang.Void;
            visitBlock(a0: com.sun.source.tree.BlockTree, a1: any): any;
            visitClass(tree: com.sun.source.tree.ClassTree, ignore: java.lang.Void): java.lang.Void;
            visitClass(a0: com.sun.source.tree.ClassTree, a1: any): any;
            visitCompilationUnit(node: com.sun.source.tree.CompilationUnitTree, p: java.lang.Void): java.lang.Void;
            visitCompilationUnit(a0: com.sun.source.tree.CompilationUnitTree, a1: any): any;
            _visitDecl(a0: com.sun.source.tree.Tree, a1: javax.lang.model.element.Name): void;
(a0: com.sun.source.tree.Tree, a1: javax.lang.model.element.Name): void;
            visitLambdaExpression(tree: com.sun.source.tree.LambdaExpressionTree, ignore: java.lang.Void): java.lang.Void;
            visitLambdaExpression(a0: com.sun.source.tree.LambdaExpressionTree, a1: any): any;
            visitMethod(tree: com.sun.source.tree.MethodTree, ignore: java.lang.Void): java.lang.Void;
            visitMethod(a0: com.sun.source.tree.MethodTree, a1: any): any;
            visitModule(tree: com.sun.source.tree.ModuleTree, ignore: java.lang.Void): java.lang.Void;
            visitModule(a0: com.sun.source.tree.ModuleTree, a1: any): any;
            visitPackage(tree: com.sun.source.tree.PackageTree, ignore: java.lang.Void): java.lang.Void;
            visitPackage(a0: com.sun.source.tree.PackageTree, a1: any): any;
            visitVariable(tree: com.sun.source.tree.VariableTree, ignore: java.lang.Void): java.lang.Void;
            visitVariable(a0: com.sun.source.tree.VariableTree, a1: any): any;
            _env: Env;
          }
          interface DocLint$DeclScanner extends CombineTypes<[_DocLint$DeclScanner, com.sun.source.util.TreePathScanner<java.lang.Void,java.lang.Void>]> {}
          interface _Env$$static extends ClassLike {
            _validatePackages(packages: string): boolean;
            _new(): Env;
          }
          let Env: _Env$$static;
          interface _Env {
            _getAccessKind(): Env$AccessKind;
            _getPos(p: com.sun.source.util.TreePath): long;
            _getStartPos(p: com.sun.source.util.TreePath): long;
            _getSuppressWarningsValue(e: javax.lang.model.element.Element): java.util.List<string>;
            _getSuppressedGroups(e: javax.lang.model.element.Element): java.util.Set<Messages$Group>;
            _init(task: com.sun.source.util.JavacTask): void;
            _init(trees: com.sun.source.util.DocTrees, elements: javax.lang.model.util.Elements, types: javax.lang.model.util.Types): void;
            _initTypes(): void;
            _min<T>(item1: T, item2: T): T;
            _setCheckPackages(packages: string): void;
            _setCurrent(path: com.sun.source.util.TreePath, comment: com.sun.source.doctree.DocCommentTree): void;
            _setCustomTags(cTags: string): void;
            _shouldCheck(unit: com.sun.source.tree.CompilationUnitTree): boolean;
            _suppressWarnings(g: Messages$Group): boolean;
            _suppressWarnings(e: javax.lang.model.element.Element, g: Messages$Group): boolean;
            _currAccess: Env$AccessKind;
            _currDocComment: com.sun.source.doctree.DocCommentTree;
            _currElement: javax.lang.model.element.Element;
            _currOverriddenMethods: java.util.Set<javax.lang.model.element.ExecutableElement>;
            _currPath: com.sun.source.util.TreePath;
            _customTags: java.util.Set<string>;
            _elements: javax.lang.model.util.Elements;
            _excludePackages: java.util.Set<java.util.regex.Pattern>;
            _includePackages: java.util.Set<java.util.regex.Pattern>;
            _java_lang_Error: javax.lang.model.type.TypeMirror;
            _java_lang_RuntimeException: javax.lang.model.type.TypeMirror;
            _java_lang_SuppressWarnings: javax.lang.model.type.TypeMirror;
            _java_lang_Throwable: javax.lang.model.type.TypeMirror;
            _java_lang_Void: javax.lang.model.type.TypeMirror;
            _messages: Messages;
            _strictReferenceChecks: boolean;
            _suppressWarnings: java.util.Map<javax.lang.model.element.Element,java.util.Set<Messages$Group>>;
            _trees: com.sun.source.util.DocTrees;
            _types: javax.lang.model.util.Types;
          }
          interface Env extends CombineTypes<[_Env, java.lang.Object]> {}
          interface _Env$AccessKind$$static extends ClassLike {
            _accepts(opt: string): boolean;
            _of(mods: java.util.Set<javax.lang.model.element.Modifier>): Env$AccessKind;
            valueOf(name: string): Env$AccessKind;
            values(): Env$AccessKind[];
            readonly PACKAGE: Env$AccessKind;
            readonly PRIVATE: Env$AccessKind;
            readonly PROTECTED: Env$AccessKind;
            readonly PUBLIC: Env$AccessKind;
          }
          let Env$AccessKind: _Env$AccessKind$$static;
          interface _Env$AccessKind {
          }
          interface Env$AccessKind extends CombineTypes<[_Env$AccessKind]> {}
          interface _HtmlTag$$static extends ClassLike {
            _attrs(k: HtmlTag$AttrKind, attrs: HtmlTag$Attr[]): HtmlTag$AttrMap;
            _attrs(k: HtmlTag$AttrKind, ...attrs: HtmlTag$Attr[]): HtmlTag$AttrMap;
            get(tagName: javax.lang.model.element.Name): HtmlTag;
            valueOf(name: string): HtmlTag;
            values(): HtmlTag[];
            readonly A: HtmlTag;
            readonly ABBR: HtmlTag;
            readonly ACRONYM: HtmlTag;
            readonly ADDRESS: HtmlTag;
            readonly ARTICLE: HtmlTag;
            readonly ASIDE: HtmlTag;
            readonly B: HtmlTag;
            readonly BDI: HtmlTag;
            readonly BIG: HtmlTag;
            readonly BLOCKQUOTE: HtmlTag;
            readonly BODY: HtmlTag;
            readonly BR: HtmlTag;
            readonly CAPTION: HtmlTag;
            readonly CENTER: HtmlTag;
            readonly CITE: HtmlTag;
            readonly CODE: HtmlTag;
            readonly COL: HtmlTag;
            readonly COLGROUP: HtmlTag;
            readonly DD: HtmlTag;
            readonly DEL: HtmlTag;
            readonly DFN: HtmlTag;
            readonly DIV: HtmlTag;
            readonly DL: HtmlTag;
            readonly DT: HtmlTag;
            readonly EM: HtmlTag;
            readonly FIGCAPTION: HtmlTag;
            readonly FIGURE: HtmlTag;
            readonly FONT: HtmlTag;
            readonly FOOTER: HtmlTag;
            readonly FRAME: HtmlTag;
            readonly FRAMESET: HtmlTag;
            readonly H1: HtmlTag;
            readonly H2: HtmlTag;
            readonly H3: HtmlTag;
            readonly H4: HtmlTag;
            readonly H5: HtmlTag;
            readonly H6: HtmlTag;
            readonly HEAD: HtmlTag;
            readonly HEADER: HtmlTag;
            readonly HR: HtmlTag;
            readonly HTML: HtmlTag;
            readonly I: HtmlTag;
            readonly IFRAME: HtmlTag;
            readonly IMG: HtmlTag;
            readonly INS: HtmlTag;
            readonly KBD: HtmlTag;
            readonly LI: HtmlTag;
            readonly LINK: HtmlTag;
            readonly MAIN: HtmlTag;
            readonly MARK: HtmlTag;
            readonly MENU: HtmlTag;
            readonly META: HtmlTag;
            readonly NAV: HtmlTag;
            readonly NOFRAMES: HtmlTag;
            readonly NOSCRIPT: HtmlTag;
            readonly OL: HtmlTag;
            readonly P: HtmlTag;
            readonly PRE: HtmlTag;
            readonly Q: HtmlTag;
            readonly S: HtmlTag;
            readonly SAMP: HtmlTag;
            readonly SCRIPT: HtmlTag;
            readonly SECTION: HtmlTag;
            readonly SMALL: HtmlTag;
            readonly SPAN: HtmlTag;
            readonly STRIKE: HtmlTag;
            readonly STRONG: HtmlTag;
            readonly STYLE: HtmlTag;
            readonly SUB: HtmlTag;
            readonly SUP: HtmlTag;
            readonly TABLE: HtmlTag;
            readonly TBODY: HtmlTag;
            readonly TD: HtmlTag;
            readonly TEMPLATE: HtmlTag;
            readonly TFOOT: HtmlTag;
            readonly TH: HtmlTag;
            readonly THEAD: HtmlTag;
            readonly TIME: HtmlTag;
            readonly TITLE: HtmlTag;
            readonly TR: HtmlTag;
            readonly TT: HtmlTag;
            readonly U: HtmlTag;
            readonly UL: HtmlTag;
            readonly VAR: HtmlTag;
            readonly WBR: HtmlTag;
            _index: java.util.Map<string,HtmlTag>;
          }
          let HtmlTag: _HtmlTag$$static;
          interface _HtmlTag {
            accepts(t: HtmlTag): boolean;
            acceptsText(): boolean;
            getAttr(attrName: javax.lang.model.element.Name): HtmlTag$Attr;
            getAttrKind(attrName: javax.lang.model.element.Name): HtmlTag$AttrKind;
            getText(): string;
            _attrs: java.util.Map<HtmlTag$Attr,HtmlTag$AttrKind>;
            readonly blockType: HtmlTag$BlockType;
            readonly elemKind: HtmlTag$ElemKind;
            readonly endKind: HtmlTag$EndKind;
            readonly flags: java.util.Set<HtmlTag$Flag>;
          }
          interface HtmlTag extends CombineTypes<[_HtmlTag]> {}
          interface _HtmlTag$Attr$$static extends ClassLike {
            valueOf(name: string): HtmlTag$Attr;
            values(): HtmlTag$Attr[];
            readonly ABBR: HtmlTag$Attr;
            readonly ALIGN: HtmlTag$Attr;
            readonly ALINK: HtmlTag$Attr;
            readonly ALT: HtmlTag$Attr;
            readonly ARIA_ACTIVEDESCENDANT: HtmlTag$Attr;
            readonly ARIA_CONTROLS: HtmlTag$Attr;
            readonly ARIA_DESCRIBEDBY: HtmlTag$Attr;
            readonly ARIA_EXPANDED: HtmlTag$Attr;
            readonly ARIA_LABEL: HtmlTag$Attr;
            readonly ARIA_LABELLEDBY: HtmlTag$Attr;
            readonly ARIA_LEVEL: HtmlTag$Attr;
            readonly ARIA_MULTISELECTABLE: HtmlTag$Attr;
            readonly ARIA_OWNS: HtmlTag$Attr;
            readonly ARIA_POSINSET: HtmlTag$Attr;
            readonly ARIA_READONLY: HtmlTag$Attr;
            readonly ARIA_REQUIRED: HtmlTag$Attr;
            readonly ARIA_SELECTED: HtmlTag$Attr;
            readonly ARIA_SETSIZE: HtmlTag$Attr;
            readonly ARIA_SORT: HtmlTag$Attr;
            readonly AXIS: HtmlTag$Attr;
            readonly BACKGROUND: HtmlTag$Attr;
            readonly BGCOLOR: HtmlTag$Attr;
            readonly BORDER: HtmlTag$Attr;
            readonly CELLPADDING: HtmlTag$Attr;
            readonly CELLSPACING: HtmlTag$Attr;
            readonly CHAR: HtmlTag$Attr;
            readonly CHAROFF: HtmlTag$Attr;
            readonly CHARSET: HtmlTag$Attr;
            readonly CITE: HtmlTag$Attr;
            readonly CLASS: HtmlTag$Attr;
            readonly CLEAR: HtmlTag$Attr;
            readonly COLOR: HtmlTag$Attr;
            readonly COLSPAN: HtmlTag$Attr;
            readonly COMPACT: HtmlTag$Attr;
            readonly COORDS: HtmlTag$Attr;
            readonly CROSSORIGIN: HtmlTag$Attr;
            readonly DATETIME: HtmlTag$Attr;
            readonly FACE: HtmlTag$Attr;
            readonly FRAME: HtmlTag$Attr;
            readonly FRAMEBORDER: HtmlTag$Attr;
            readonly HEADERS: HtmlTag$Attr;
            readonly HEIGHT: HtmlTag$Attr;
            readonly HREF: HtmlTag$Attr;
            readonly HSPACE: HtmlTag$Attr;
            readonly ID: HtmlTag$Attr;
            readonly LINK: HtmlTag$Attr;
            readonly LONGDESC: HtmlTag$Attr;
            readonly MARGINHEIGHT: HtmlTag$Attr;
            readonly MARGINWIDTH: HtmlTag$Attr;
            readonly NAME: HtmlTag$Attr;
            readonly NOSHADE: HtmlTag$Attr;
            readonly NOWRAP: HtmlTag$Attr;
            readonly PROFILE: HtmlTag$Attr;
            readonly REV: HtmlTag$Attr;
            readonly REVERSED: HtmlTag$Attr;
            readonly ROLE: HtmlTag$Attr;
            readonly ROWSPAN: HtmlTag$Attr;
            readonly RULES: HtmlTag$Attr;
            readonly SCHEME: HtmlTag$Attr;
            readonly SCOPE: HtmlTag$Attr;
            readonly SCROLLING: HtmlTag$Attr;
            readonly SHAPE: HtmlTag$Attr;
            readonly SIZE: HtmlTag$Attr;
            readonly SPACE: HtmlTag$Attr;
            readonly SRC: HtmlTag$Attr;
            readonly START: HtmlTag$Attr;
            readonly STYLE: HtmlTag$Attr;
            readonly SUMMARY: HtmlTag$Attr;
            readonly TARGET: HtmlTag$Attr;
            readonly TEXT: HtmlTag$Attr;
            readonly TYPE: HtmlTag$Attr;
            readonly VALIGN: HtmlTag$Attr;
            readonly VALUE: HtmlTag$Attr;
            readonly VERSION: HtmlTag$Attr;
            readonly VLINK: HtmlTag$Attr;
            readonly VSPACE: HtmlTag$Attr;
            readonly WIDTH: HtmlTag$Attr;
            _index: java.util.Map<string,HtmlTag$Attr>;
          }
          let HtmlTag$Attr: _HtmlTag$Attr$$static;
          interface _HtmlTag$Attr {
            getText(): string;
            _name: string;
          }
          interface HtmlTag$Attr extends CombineTypes<[_HtmlTag$Attr]> {}
          interface _HtmlTag$AttrKind$$static extends ClassLike {
            valueOf(name: string): HtmlTag$AttrKind;
            values(): HtmlTag$AttrKind[];
            readonly HTML4: HtmlTag$AttrKind;
            readonly INVALID: HtmlTag$AttrKind;
            readonly OBSOLETE: HtmlTag$AttrKind;
            readonly OK: HtmlTag$AttrKind;
          }
          let HtmlTag$AttrKind: _HtmlTag$AttrKind$$static;
          interface _HtmlTag$AttrKind {
          }
          interface HtmlTag$AttrKind extends CombineTypes<[_HtmlTag$AttrKind]> {}
          interface _HtmlTag$AttrMap$$static extends ClassLike {
            _serialVersionUID: long;
            _new(): HtmlTag$AttrMap;
          }
          let HtmlTag$AttrMap: _HtmlTag$AttrMap$$static;
          interface _HtmlTag$AttrMap {
          }
          interface HtmlTag$AttrMap extends CombineTypes<[_HtmlTag$AttrMap, java.util.EnumMap<HtmlTag$Attr,HtmlTag$AttrKind>]> {}
          interface _HtmlTag$BlockType$$static extends ClassLike {
            valueOf(name: string): HtmlTag$BlockType;
            values(): HtmlTag$BlockType[];
            readonly BLOCK: HtmlTag$BlockType;
            readonly INLINE: HtmlTag$BlockType;
            readonly LIST_ITEM: HtmlTag$BlockType;
            readonly OTHER: HtmlTag$BlockType;
            readonly TABLE_ITEM: HtmlTag$BlockType;
          }
          let HtmlTag$BlockType: _HtmlTag$BlockType$$static;
          interface _HtmlTag$BlockType {
          }
          interface HtmlTag$BlockType extends CombineTypes<[_HtmlTag$BlockType]> {}
          interface _HtmlTag$ElemKind$$static extends ClassLike {
            valueOf(name: string): HtmlTag$ElemKind;
            values(): HtmlTag$ElemKind[];
            readonly HTML4: HtmlTag$ElemKind;
            readonly INVALID: HtmlTag$ElemKind;
            readonly OBSOLETE: HtmlTag$ElemKind;
            readonly OK: HtmlTag$ElemKind;
          }
          let HtmlTag$ElemKind: _HtmlTag$ElemKind$$static;
          interface _HtmlTag$ElemKind {
          }
          interface HtmlTag$ElemKind extends CombineTypes<[_HtmlTag$ElemKind]> {}
          interface _HtmlTag$EndKind$$static extends ClassLike {
            valueOf(name: string): HtmlTag$EndKind;
            values(): HtmlTag$EndKind[];
            readonly NONE: HtmlTag$EndKind;
            readonly OPTIONAL: HtmlTag$EndKind;
            readonly REQUIRED: HtmlTag$EndKind;
          }
          let HtmlTag$EndKind: _HtmlTag$EndKind$$static;
          interface _HtmlTag$EndKind {
          }
          interface HtmlTag$EndKind extends CombineTypes<[_HtmlTag$EndKind]> {}
          interface _HtmlTag$Flag$$static extends ClassLike {
            valueOf(name: string): HtmlTag$Flag;
            values(): HtmlTag$Flag[];
            readonly ACCEPTS_BLOCK: HtmlTag$Flag;
            readonly ACCEPTS_INLINE: HtmlTag$Flag;
            readonly EXPECT_CONTENT: HtmlTag$Flag;
            readonly NO_NEST: HtmlTag$Flag;
          }
          let HtmlTag$Flag: _HtmlTag$Flag$$static;
          interface _HtmlTag$Flag {
          }
          interface HtmlTag$Flag extends CombineTypes<[_HtmlTag$Flag]> {}
          interface _Messages$$static extends ClassLike {
            _new(env: Env): Messages;
          }
          let Messages: _Messages$$static;
          interface _Messages {
            _error(group: Messages$Group, tree: com.sun.source.doctree.DocTree, code: string, args: any[]): void;
            _error(group: Messages$Group, tree: com.sun.source.doctree.DocTree, code: string, ...args: any[]): void;
            _isEnabled(group: Messages$Group, ak: Env$AccessKind): boolean;
            _localize(code: string, args: any[]): string;
            _localize(code: string, ...args: any[]): string;
            _report(group: Messages$Group, dkind: javax.tools.Diagnostic$Kind, tree: com.sun.source.doctree.DocTree, code: string, args: any[]): void;
            _report(group: Messages$Group, dkind: javax.tools.Diagnostic$Kind, tree: com.sun.source.doctree.DocTree, code: string, ...args: any[]): void;
            _report(group: Messages$Group, dkind: javax.tools.Diagnostic$Kind, tree: com.sun.source.tree.Tree, code: string, args: any[]): void;
            _report(group: Messages$Group, dkind: javax.tools.Diagnostic$Kind, tree: com.sun.source.tree.Tree, code: string, ...args: any[]): void;
            _reportStats(out: java.io.PrintWriter): void;
            _setOptions(opts: string): void;
            _setStatsEnabled(b: boolean): void;
            _warning(group: Messages$Group, tree: com.sun.source.doctree.DocTree, code: string, args: any[]): void;
            _warning(group: Messages$Group, tree: com.sun.source.doctree.DocTree, code: string, ...args: any[]): void;
            _bundle: java.util.ResourceBundle;
            _env: Env;
            _options: Messages$Options;
            _stats: Messages$Stats;
          }
          interface Messages extends CombineTypes<[_Messages, java.lang.Object]> {}
          interface _Messages$Group$$static extends ClassLike {
            _accepts(opt: string): boolean;
            valueOf(name: string): Messages$Group;
            values(): Messages$Group[];
            readonly ACCESSIBILITY: Messages$Group;
            readonly HTML: Messages$Group;
            readonly MISSING: Messages$Group;
            readonly REFERENCE: Messages$Group;
            readonly SYNTAX: Messages$Group;
          }
          let Messages$Group: _Messages$Group$$static;
          interface _Messages$Group {
            _notOptName(): string;
            _optName(): string;
          }
          interface Messages$Group extends CombineTypes<[_Messages$Group]> {}
          interface _Messages$Options$$static extends ClassLike {
            _isValidOption(opt: string): boolean;
            _isValidOptions(opts: string): boolean;
            _ALL: string;
            _new(stats: Messages$Stats): Messages$Options;
          }
          let Messages$Options: _Messages$Options$$static;
          interface _Messages$Options {
            _isEnabled(g: Messages$Group, access: Env$AccessKind): boolean;
            _setOption(arg: string): void;
            _setOption(opt: string, ak: Env$AccessKind): void;
            _setOptions(opts: string): void;
            _map: java.util.Map<string,Env$AccessKind>;
            _stats: Messages$Stats;
          }
          interface Messages$Options extends CombineTypes<[_Messages$Options, java.lang.Object]> {}
          interface _Messages$Stats$$static extends ClassLike {
            readonly NO_CODE: string;
            readonly OPT: string;
            _new(bundle: java.util.ResourceBundle): Messages$Stats;
          }
          let Messages$Stats: _Messages$Stats$$static;
          interface _Messages$Stats {
            _record(g: Messages$Group, dkind: javax.tools.Diagnostic$Kind, code: string): void;
            _report(out: java.io.PrintWriter): void;
            _setEnabled(b: boolean): void;
            _bundle: java.util.ResourceBundle;
            _codeCounts: java.util.Map<string,int>;
            _dkindCounts: int[];
            _groupCounts: int[];
          }
          interface Messages$Stats extends CombineTypes<[_Messages$Stats, java.lang.Object]> {}
          interface _Messages$Stats$Table$$static extends ClassLike {
            _DECREASING: java.util.Comparator<int>;
          }
          let Messages$Stats$Table: _Messages$Stats$Table$$static;
          interface _Messages$Stats$Table {
            _print(out: java.io.PrintWriter): void;
            _put(label: string, n: int): void;
            _map: java.util.TreeMap<int,java.util.Set<string>>;
          }
          interface Messages$Stats$Table extends CombineTypes<[_Messages$Stats$Table, java.lang.Object]> {}
        }
        module tool {
          module resources {
            interface _javadoc$$static extends ClassLike {
              new(): javadoc;
            }
            let javadoc: _javadoc$$static;
            interface _javadoc {
              _getContents(): any[][];
            }
            interface javadoc extends CombineTypes<[_javadoc, java.util.ListResourceBundle]> {}
            interface _javadoc_de$$static extends ClassLike {
              new(): javadoc_de;
            }
            let javadoc_de: _javadoc_de$$static;
            interface _javadoc_de {
              _getContents(): any[][];
            }
            interface javadoc_de extends CombineTypes<[_javadoc_de, java.util.ListResourceBundle]> {}
            interface _javadoc_ja$$static extends ClassLike {
              new(): javadoc_ja;
            }
            let javadoc_ja: _javadoc_ja$$static;
            interface _javadoc_ja {
              _getContents(): any[][];
            }
            interface javadoc_ja extends CombineTypes<[_javadoc_ja, java.util.ListResourceBundle]> {}
            interface _javadoc_zh_CN$$static extends ClassLike {
              new(): javadoc_zh_CN;
            }
            let javadoc_zh_CN: _javadoc_zh_CN$$static;
            interface _javadoc_zh_CN {
              _getContents(): any[][];
            }
            interface javadoc_zh_CN extends CombineTypes<[_javadoc_zh_CN, java.util.ListResourceBundle]> {}
            interface _version$$static extends ClassLike {
              new(): version;
            }
            let version: _version$$static;
            interface _version {
              _getContents(): any[][];
            }
            interface version extends CombineTypes<[_version, java.util.ListResourceBundle]> {}
          }
          interface _AccessKind$$static extends ClassLike {
            valueOf(name: string): AccessKind;
            values(): AccessKind[];
            readonly PACKAGE: AccessKind;
            readonly PRIVATE: AccessKind;
            readonly PROTECTED: AccessKind;
            readonly PUBLIC: AccessKind;
          }
          let AccessKind: _AccessKind$$static;
          interface _AccessKind {
          }
          interface AccessKind extends CombineTypes<[_AccessKind]> {}
          interface _DocEnvImpl$$static extends ClassLike {
            new(toolEnv: ToolEnvironment, etable: ElementsTable): DocEnvImpl;
          }
          let DocEnvImpl: _DocEnvImpl$$static;
          interface _DocEnvImpl {
            getDocTrees(): com.sun.source.util.DocTrees;
            getElementUtils(): javax.lang.model.util.Elements;
            getFileKind(type: javax.lang.model.element.TypeElement): javax.tools.JavaFileObject$Kind;
            getIncludedElements(): java.util.Set<javax.lang.model.element.Element>;
            getJavaFileManager(): javax.tools.JavaFileManager;
            getModuleMode(): javadoc.doclet.DocletEnvironment$ModuleMode;
            getSourceVersion(): javax.lang.model.SourceVersion;
            getSpecifiedElements(): java.util.Set<javax.lang.model.element.Element>;
            getTypeUtils(): javax.lang.model.util.Types;
            isIncluded(e: javax.lang.model.element.Element): boolean;
            isSelected(e: javax.lang.model.element.Element): boolean;
            readonly etable: ElementsTable;
            readonly toolEnv: ToolEnvironment;
          }
          interface DocEnvImpl extends CombineTypes<[_DocEnvImpl, jdk.javadoc.doclet.DocletEnvironment, java.lang.Object]> {}
          interface _ElementsTable$$static extends ClassLike {
            _new(context: com.sun.tools.javac.util.Context, options: ToolOptions): ElementsTable;
          }
          let ElementsTable: _ElementsTable$$static;
          interface _ElementsTable {
            _addAllClasses(list: java.util.Collection<javax.lang.model.element.TypeElement>, typeElement: javax.lang.model.element.TypeElement, filtered: boolean): void;
            _addAllClasses(list: java.util.Collection<javax.lang.model.element.TypeElement>, pkg: javax.lang.model.element.PackageElement): void;
            _addFilesForParser(result: java.util.Collection<javax.tools.JavaFileObject>, collection: java.util.Collection<ElementsTable$ModulePackage>, recurse: boolean): void;
            _addPackagesFromLocations(packageLocn: javax.tools.JavaFileManager$Location, modpkg: ElementsTable$ModulePackage): void;
            _analyze(): void;
            _classTrees(classTrees: com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCCompilationUnit>): ElementsTable;
            _computeModulePackages(): java.util.Set<javax.lang.model.element.PackageElement>;
            _computeSpecifiedModules(): void;
            _computeSpecifiedPackages(): void;
            _computeSpecifiedTypes(): void;
            _computeSubpackages(): void;
            _findModuleOfPackageName(packageName: string): com.sun.tools.javac.code.Symbol$ModuleSymbol;
            _fmList(location: javax.tools.JavaFileManager$Location, packagename: string, kinds: java.util.Set<javax.tools.JavaFileObject$Kind>, recurse: boolean): java.lang.Iterable<javax.tools.JavaFileObject>;
            _getAllModulePackages(mdle: javax.lang.model.element.ModuleElement): java.util.Set<javax.lang.model.element.PackageElement>;
            _getEntry(name: string): ElementsTable$Entry;
            _getEntry(modpkg: ElementsTable$ModulePackage): ElementsTable$Entry;
            _getFiles(modpkg: ElementsTable$ModulePackage, recurse: boolean): java.util.List<javax.tools.JavaFileObject>;
            _getFilesToParse(): java.util.List<javax.tools.JavaFileObject>;
            getIncludedElements(): java.util.Set<javax.lang.model.element.Element>;
            _getLocation(modpkg: ElementsTable$ModulePackage): java.util.List<javax.tools.JavaFileManager$Location>;
            _getModuleLocation(locations: java.util.List<javax.tools.JavaFileManager$Location>, msymName: string): java.util.List<javax.tools.JavaFileManager$Location>;
            _getModuleLocation(location: javax.tools.JavaFileManager$Location, msymName: string): javax.tools.JavaFileManager$Location;
            getModuleMode(): javadoc.doclet.DocletEnvironment$ModuleMode;
            _getModuleName(location: javax.tools.JavaFileManager$Location): string;
            _getModuleRequires(mdle: javax.lang.model.element.ModuleElement, onlyTransitive: boolean): java.util.Set<javax.lang.model.element.ModuleElement>;
            _getPackageName(name: string): string;
            _getPackagesToParse(): java.lang.Iterable<ElementsTable$ModulePackage>;
            _getSimpleName(name: string): string;
            getSpecifiedElements(): java.util.Set<javax.lang.model.element.Element>;
            _haveModuleSources(mdle: javax.lang.model.element.ModuleElement): boolean;
            _initializeIncludedSets(expandedModulePackages: java.util.Set<javax.lang.model.element.PackageElement>): void;
            isIncluded(e: javax.lang.model.element.Element): boolean;
            _isMandated(mdle: javax.lang.model.element.ModuleElement, rd: javax.lang.model.element.ModuleElement$RequiresDirective): boolean;
            isSelected(e: javax.lang.model.element.Element): boolean;
            _isTypeElementSelected(te: javax.lang.model.element.TypeElement): boolean;
            _packages(packageNames: java.util.Collection<string>): ElementsTable;
            _sanityCheckSourcePathModules(moduleNames: java.util.List<string>): void;
            _scanSpecifiedItems(): ElementsTable;
            _setClassArgList(classList: java.util.List<string>): ElementsTable;
            _setClassDeclList(classesDecList: java.util.List<com.sun.tools.javac.tree.JCTree$JCClassDecl>): ElementsTable;
            _accessFilter: ElementsTable$ModifierFilter;
            _classArgList: java.util.List<string>;
            _classDecList: java.util.List<com.sun.tools.javac.tree.JCTree$JCClassDecl>;
            _classTreeList: com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCCompilationUnit>;
            _cmdLinePackages: java.util.Set<ElementsTable$ModulePackage>;
            _compiler: com.sun.tools.javac.main.JavaCompiler;
            _entries: java.util.Map<string,ElementsTable$Entry>;
            _excludePackages: java.util.Set<ElementsTable$ModulePackage>;
            _expandRequires: AccessKind;
            _fm: javax.tools.JavaFileManager;
            _haveModuleSourcesCache: java.util.Map<com.sun.tools.javac.code.Symbol$ModuleSymbol,boolean>;
            _haveSourceLocationWithModule: boolean;
            _includedElements: java.util.Set<javax.lang.model.element.Element>;
            _includedModuleElements: java.util.Set<javax.lang.model.element.ModuleElement>;
            _includedPackageElements: java.util.Set<javax.lang.model.element.PackageElement>;
            _includedTypeElements: java.util.Set<javax.lang.model.element.TypeElement>;
            _includedVisitor: ElementsTable$IncludedVisitor;
            _locations: java.util.List<javax.tools.JavaFileManager$Location>;
            _log: JavadocLog;
            _modules: com.sun.tools.javac.comp.Modules;
            _names: com.sun.tools.javac.util.Names;
            _options: ToolOptions;
            _sourceKinds: java.util.Set<javax.tools.JavaFileObject$Kind>;
            _specifiedElements: java.util.Set<javax.lang.model.element.Element>;
            _specifiedModuleElements: java.util.Set<javax.lang.model.element.ModuleElement>;
            _specifiedPackageElements: java.util.Set<javax.lang.model.element.PackageElement>;
            _specifiedTypeElements: java.util.Set<javax.lang.model.element.TypeElement>;
            _subPackages: java.util.Set<ElementsTable$ModulePackage>;
            _syms: com.sun.tools.javac.code.Symtab;
            _toolEnv: ToolEnvironment;
            _visibleElementVisitor: javax.lang.model.util.SimpleElementVisitor14<boolean,java.lang.Void>;
            _warnedNoSources: java.util.Set<javax.lang.model.element.ModuleElement>;
            _xclasses: boolean;
          }
          interface ElementsTable extends CombineTypes<[_ElementsTable, java.lang.Object]> {}
          interface _ElementsTable$Entry$$static extends ClassLike {
            _new(this$0: ElementsTable, modpkg: ElementsTable$ModulePackage): ElementsTable$Entry;
            _new(this$0: ElementsTable, name: string): ElementsTable$Entry;
          }
          let ElementsTable$Entry: _ElementsTable$Entry$$static;
          interface _ElementsTable$Entry {
            _isExcluded(): boolean;
            toString(): string;
            _excluded: boolean;
            _files: com.sun.tools.javac.util.List<javax.tools.JavaFileObject>;
            _modpkg: ElementsTable$ModulePackage;
          }
          interface ElementsTable$Entry extends CombineTypes<[_ElementsTable$Entry, java.lang.Object]> {}
          interface _ElementsTable$IncludedVisitor$$static extends ClassLike {
            new(a0: ElementsTable): ElementsTable$IncludedVisitor;
          }
          let ElementsTable$IncludedVisitor: _ElementsTable$IncludedVisitor$$static;
          interface _ElementsTable$IncludedVisitor {
            defaultAction(e: javax.lang.model.element.Element, p: java.lang.Void): boolean;
            defaultAction(a0: javax.lang.model.element.Element, a1: any): any;
            visitModule(e: javax.lang.model.element.ModuleElement, p: java.lang.Void): boolean;
            visitModule(a0: javax.lang.model.element.ModuleElement, a1: any): any;
            visitPackage(e: javax.lang.model.element.PackageElement, p: java.lang.Void): boolean;
            visitPackage(a0: javax.lang.model.element.PackageElement, a1: any): any;
            visitType(e: javax.lang.model.element.TypeElement, p: java.lang.Void): boolean;
            visitType(a0: javax.lang.model.element.TypeElement, a1: any): any;
            visitUnknown(e: javax.lang.model.element.Element, p: java.lang.Void): boolean;
            visitUnknown(a0: javax.lang.model.element.Element, a1: any): any;
            _includedCache: java.util.Set<javax.lang.model.element.Element>;
            _this$0: ElementsTable;
          }
          interface ElementsTable$IncludedVisitor extends CombineTypes<[_ElementsTable$IncludedVisitor, javax.lang.model.util.SimpleElementVisitor14<boolean,java.lang.Void>]> {}
          interface _ElementsTable$ModifierFilter$$static extends ClassLike {
            _getFilterSet(accessValue: AccessKind): java.util.EnumSet<AccessKind>;
            _ALLOWED_KINDS: java.util.EnumSet<javax.lang.model.element.ElementKind>;
            _new(options: ToolOptions): ElementsTable$ModifierFilter;
          }
          let ElementsTable$ModifierFilter: _ElementsTable$ModifierFilter$$static;
          interface _ElementsTable$ModifierFilter {
            checkModifier(e: javax.lang.model.element.Element): boolean;
            getAccessValue(kind: javax.lang.model.element.ElementKind): AccessKind;
            _getAllowedKind(kind: javax.lang.model.element.ElementKind): javax.lang.model.element.ElementKind;
            _accessMap: java.util.EnumMap<javax.lang.model.element.ElementKind,AccessKind>;
            _filterMap: java.util.EnumMap<javax.lang.model.element.ElementKind,java.util.EnumSet<AccessKind>>;
          }
          interface ElementsTable$ModifierFilter extends CombineTypes<[_ElementsTable$ModifierFilter, java.lang.Object]> {}
          interface _ElementsTable$ModulePackage$$static extends ClassLike {
            _new(modulename: string, packagename: string): ElementsTable$ModulePackage;
            _new(msym: javax.lang.model.element.ModuleElement, packagename: string): ElementsTable$ModulePackage;
            _new(name: string): ElementsTable$ModulePackage;
          }
          let ElementsTable$ModulePackage: _ElementsTable$ModulePackage$$static;
          interface _ElementsTable$ModulePackage {
            equals(obj: any): boolean;
            _hasModule(): boolean;
            hashCode(): int;
            toString(): string;
            readonly moduleName: string;
            readonly packageName: string;
          }
          interface ElementsTable$ModulePackage extends CombineTypes<[_ElementsTable$ModulePackage, java.lang.Object]> {}
          interface _IllegalOptionValue$$static extends ClassLike {
            _serialVersionUID: long;
            _new(method: java.lang.Runnable, message: string): IllegalOptionValue;
          }
          let IllegalOptionValue: _IllegalOptionValue$$static;
          interface _IllegalOptionValue {
          }
          interface IllegalOptionValue extends CombineTypes<[_IllegalOptionValue, jdk.javadoc.internal.tool.OptionException]> {}
          interface _JavadocClassFinder$$static extends ClassLike {
            instance(context: com.sun.tools.javac.util.Context): JavadocClassFinder;
            preRegister(context: com.sun.tools.javac.util.Context): void;
            new(context: com.sun.tools.javac.util.Context): JavadocClassFinder;
          }
          let JavadocClassFinder: _JavadocClassFinder$$static;
          interface _JavadocClassFinder {
            _extraFileActions(pack: com.sun.tools.javac.code.Symbol$PackageSymbol, fo: javax.tools.JavaFileObject): void;
            _getPackageFileKinds(): java.util.EnumSet<javax.tools.JavaFileObject$Kind>;
            _all: java.util.EnumSet<javax.tools.JavaFileObject$Kind>;
            _jctrees: com.sun.tools.javac.api.JavacTrees;
            _noSource: java.util.EnumSet<javax.tools.JavaFileObject$Kind>;
            _toolEnv: ToolEnvironment;
            _trees: com.sun.tools.javac.api.JavacTrees;
          }
          interface JavadocClassFinder extends CombineTypes<[_JavadocClassFinder, com.sun.tools.javac.code.ClassFinder]> {}
          interface _JavadocEnter$$static extends ClassLike {
            instance(context: com.sun.tools.javac.util.Context): JavadocEnter;
            preRegister(context: com.sun.tools.javac.util.Context): void;
            _new(context: com.sun.tools.javac.util.Context): JavadocEnter;
          }
          let JavadocEnter: _JavadocEnter$$static;
          interface _JavadocEnter {
            _duplicateClass(pos: com.sun.tools.javac.util.JCDiagnostic$DiagnosticPosition, c: com.sun.tools.javac.code.Symbol$ClassSymbol): void;
            main(trees: com.sun.tools.javac.util.List<com.sun.tools.javac.tree.JCTree$JCCompilationUnit>): void;
            visitClassDef(tree: com.sun.tools.javac.tree.JCTree$JCClassDecl): void;
            visitTopLevel(tree: com.sun.tools.javac.tree.JCTree$JCCompilationUnit): void;
            _compiler: com.sun.tools.javac.main.JavaCompiler;
            _log: JavadocLog;
            _toolEnv: ToolEnvironment;
          }
          interface JavadocEnter extends CombineTypes<[_JavadocEnter, com.sun.tools.javac.comp.Enter]> {}
          interface _JavadocLog$$static extends ClassLike {
            _createPrintWriter(ps: java.io.PrintStream, autoflush: boolean): java.io.PrintWriter;
            instance0(context: com.sun.tools.javac.util.Context): JavadocLog;
            preRegister(context: com.sun.tools.javac.util.Context, programName: string): void;
            preRegister(context: com.sun.tools.javac.util.Context, programName: string, outWriter: java.io.PrintWriter, errWriter: java.io.PrintWriter): void;
            new(context: com.sun.tools.javac.util.Context, programName: string): JavadocLog;
            new(context: com.sun.tools.javac.util.Context, programName: string, outWriter: java.io.PrintWriter, errWriter: java.io.PrintWriter): JavadocLog;
          }
          let JavadocLog: _JavadocLog$$static;
          interface _JavadocLog {
            _createDiagnosticPosition(tree: com.sun.tools.javac.tree.JCTree, start: int, pos: int, end: int): com.sun.tools.javac.util.JCDiagnostic$DiagnosticPosition;
            _getDiagnosticFlags(kind: javax.tools.Diagnostic$Kind): java.util.Set<com.sun.tools.javac.util.JCDiagnostic$DiagnosticFlag>;
            _getDiagnosticPosition(path: com.sun.source.util.DocTreePath): com.sun.tools.javac.util.JCDiagnostic$DiagnosticPosition;
            _getDiagnosticPosition(element: javax.lang.model.element.Element): com.sun.tools.javac.util.JCDiagnostic$DiagnosticPosition;
            _getDiagnosticSource(path: com.sun.source.util.DocTreePath): com.sun.tools.javac.util.DiagnosticSource;
            _getDiagnosticSource(element: javax.lang.model.element.Element): com.sun.tools.javac.util.DiagnosticSource;
            _getDiagnosticSource(fo: javax.tools.JavaFileObject): com.sun.tools.javac.util.DiagnosticSource;
            _getDiagnosticType(kind: javax.tools.Diagnostic$Kind): com.sun.tools.javac.util.JCDiagnostic$DiagnosticType;
            getDiagnosticWriter(): java.io.PrintWriter;
            _getSourcePositions(): com.sun.source.util.DocSourcePositions;
            getStandardWriter(): java.io.PrintWriter;
            _getText(key: string, args: any[]): string;
            _getText(key: string, ...args: any[]): string;
            _getToolEnv(): ToolEnvironment;
            hasErrors(): boolean;
            hasWarnings(): boolean;
            print(kind: javax.tools.Diagnostic$Kind, message: string): void;
            print(kind: javax.tools.Diagnostic$Kind, path: com.sun.source.util.DocTreePath, message: string): void;
            print(kind: javax.tools.Diagnostic$Kind, path: com.sun.source.util.DocTreePath, start: int, pos: int, end: int, message: string): void;
            print(kind: javax.tools.Diagnostic$Kind, element: javax.lang.model.element.Element, message: string): void;
            print(kind: javax.tools.Diagnostic$Kind, file: javax.tools.FileObject, start: int, pos: int, end: int, message: string): void;
            _printCount(count: int, singleKey: string, pluralKey: string): void;
            printError(message: string): void;
            printError(path: com.sun.source.util.DocTreePath, message: string): void;
            printError(element: javax.lang.model.element.Element, message: string): void;
            printErrorUsingKey(key: string, args: any[]): void;
            printErrorUsingKey(key: string, ...args: any[]): void;
            printErrorWarningCounts(): void;
            printNote(message: string): void;
            printNoteUsingKey(key: string, args: any[]): void;
            printNoteUsingKey(key: string, ...args: any[]): void;
            printWarning(message: string): void;
            printWarning(path: com.sun.source.util.DocTreePath, message: string): void;
            printWarning(element: javax.lang.model.element.Element, message: string): void;
            printWarningUsingKey(key: string, args: any[]): void;
            printWarningUsingKey(key: string, ...args: any[]): void;
            printWarningUsingKey(element: javax.lang.model.element.Element, key: string, args: any[]): void;
            printWarningUsingKey(element: javax.lang.model.element.Element, key: string, ...args: any[]): void;
            _report(kind: javax.tools.Diagnostic$Kind, ds: com.sun.tools.javac.util.DiagnosticSource, dp: com.sun.tools.javac.util.JCDiagnostic$DiagnosticPosition, message: string): void;
            _report(dt: com.sun.tools.javac.util.JCDiagnostic$DiagnosticType, ds: com.sun.tools.javac.util.DiagnosticSource, dp: com.sun.tools.javac.util.JCDiagnostic$DiagnosticPosition, message: string): void;
            _report(dt: com.sun.tools.javac.util.JCDiagnostic$DiagnosticType, flags: java.util.Set<com.sun.tools.javac.util.JCDiagnostic$DiagnosticFlag>, ds: com.sun.tools.javac.util.DiagnosticSource, dp: com.sun.tools.javac.util.JCDiagnostic$DiagnosticPosition, message: string): void;
            setLocale(locale: java.util.Locale): void;
            _context: com.sun.tools.javac.util.Context;
            _diagSourceCache: java.util.LinkedHashMap<javax.tools.JavaFileObject,java.lang.ref.SoftReference<com.sun.tools.javac.util.DiagnosticSource>>;
            _javadocDiags: com.sun.tools.javac.util.JCDiagnostic$Factory;
            _locale: java.util.Locale;
            _messages: com.sun.tools.javac.util.JavacMessages;
            _programName: string;
            _sourcePositions: com.sun.source.util.DocSourcePositions;
            _toolEnv: ToolEnvironment;
          }
          interface JavadocLog extends CombineTypes<[_JavadocLog, com.sun.tools.javac.util.Log, jdk.javadoc.doclet.Reporter]> {}
          interface _JavadocLog$WrappingJavaFileObject$$static extends ClassLike {
            _new(a0: JavadocLog, fo: javax.tools.FileObject): JavadocLog$WrappingJavaFileObject;
          }
          let JavadocLog$WrappingJavaFileObject: _JavadocLog$WrappingJavaFileObject$$static;
          interface _JavadocLog$WrappingJavaFileObject {
            getAccessLevel(): javax.lang.model.element.Modifier;
            getKind(): javax.tools.JavaFileObject$Kind;
            getNestingKind(): javax.lang.model.element.NestingKind;
            isNameCompatible(simpleName: string, kind: javax.tools.JavaFileObject$Kind): boolean;
          }
          interface JavadocLog$WrappingJavaFileObject extends CombineTypes<[_JavadocLog$WrappingJavaFileObject, javax.tools.JavaFileObject, javax.tools.ForwardingFileObject<javax.tools.FileObject>]> {}
          interface _JavadocMemberEnter$$static extends ClassLike {
            _containsNonConstantExpression(tree: com.sun.tools.javac.tree.JCTree$JCExpression): boolean;
            instance0(context: com.sun.tools.javac.util.Context): JavadocMemberEnter;
            _isParameter(_var: com.sun.tools.javac.code.Symbol$VarSymbol): boolean;
            preRegister(context: com.sun.tools.javac.util.Context): void;
            _new(context: com.sun.tools.javac.util.Context): JavadocMemberEnter;
          }
          let JavadocMemberEnter: _JavadocMemberEnter$$static;
          interface _JavadocMemberEnter {
            visitMethodDef(tree: com.sun.tools.javac.tree.JCTree$JCMethodDecl): void;
            visitVarDef(tree: com.sun.tools.javac.tree.JCTree$JCVariableDecl): void;
            _toolEnv: ToolEnvironment;
          }
          interface JavadocMemberEnter extends CombineTypes<[_JavadocMemberEnter, com.sun.tools.javac.comp.MemberEnter]> {}
          interface _JavadocMemberEnter$MaybeConstantExpressionScanner$$static extends ClassLike {
          }
          let JavadocMemberEnter$MaybeConstantExpressionScanner: _JavadocMemberEnter$MaybeConstantExpressionScanner$$static;
          interface _JavadocMemberEnter$MaybeConstantExpressionScanner {
            containsNonConstantExpression(tree: com.sun.tools.javac.tree.JCTree$JCExpression): boolean;
            scan(tree: com.sun.tools.javac.tree.JCTree): void;
            visitBinary(tree: com.sun.tools.javac.tree.JCTree$JCBinary): void;
            visitConditional(tree: com.sun.tools.javac.tree.JCTree$JCConditional): void;
            visitIdent(tree: com.sun.tools.javac.tree.JCTree$JCIdent): void;
            visitLiteral(tree: com.sun.tools.javac.tree.JCTree$JCLiteral): void;
            visitParens(tree: com.sun.tools.javac.tree.JCTree$JCParens): void;
            visitSelect(tree: com.sun.tools.javac.tree.JCTree$JCFieldAccess): void;
            visitTree(tree: com.sun.tools.javac.tree.JCTree): void;
            visitTypeCast(tree: com.sun.tools.javac.tree.JCTree$JCTypeCast): void;
            visitTypeIdent(tree: com.sun.tools.javac.tree.JCTree$JCPrimitiveTypeTree): void;
            visitUnary(tree: com.sun.tools.javac.tree.JCTree$JCUnary): void;
            _maybeConstantExpr: boolean;
          }
          interface JavadocMemberEnter$MaybeConstantExpressionScanner extends CombineTypes<[_JavadocMemberEnter$MaybeConstantExpressionScanner, com.sun.tools.javac.tree.JCTree$Visitor]> {}
          interface _JavadocTodo$$static extends ClassLike {
            preRegister(context: com.sun.tools.javac.util.Context): void;
            _new(context: com.sun.tools.javac.util.Context): JavadocTodo;
          }
          let JavadocTodo: _JavadocTodo$$static;
          interface _JavadocTodo {
            append(e: com.sun.tools.javac.comp.Env<com.sun.tools.javac.comp.AttrContext>): void;
            offer(e: com.sun.tools.javac.comp.Env<com.sun.tools.javac.comp.AttrContext>): boolean;
            offer(a0: any): boolean;
          }
          interface JavadocTodo extends CombineTypes<[_JavadocTodo, com.sun.tools.javac.comp.Todo]> {}
          interface _JavadocTool$$static extends ClassLike {
            isValidClassName(s: string): boolean;
            make0(context: com.sun.tools.javac.util.Context): JavadocTool;
            _surrogatesSupported(): boolean;
            _surrogatesSupported: boolean;
            _new(context: com.sun.tools.javac.util.Context): JavadocTool;
          }
          let JavadocTool: _JavadocTool$$static;
          interface _JavadocTool {
            getEnvironment(toolOptions: ToolOptions, javaNames: java.util.List<string>, fileObjects: java.lang.Iterable<javax.tools.JavaFileObject>): javadoc.doclet.DocletEnvironment;
            _isRegularFile(s: string): boolean;
            _isValidPackageName(s: string): boolean;
            _isValidPackageName0(s: string): boolean;
            _keepComments(): boolean;
            _listClasses(trees: java.util.List<com.sun.tools.javac.tree.JCTree$JCCompilationUnit>): java.util.List<com.sun.tools.javac.tree.JCTree$JCClassDecl>;
            _parse(files: java.lang.Iterable<javax.tools.JavaFileObject>, trees: com.sun.tools.javac.util.ListBuffer<com.sun.tools.javac.tree.JCTree$JCCompilationUnit>, trace: boolean): void;
            _dcfh: com.sun.tools.javac.code.DeferredCompletionFailureHandler;
            _javadocEnter: com.sun.tools.javac.comp.Enter;
            _javadocFinder: com.sun.tools.javac.code.ClassFinder;
            _log: JavadocLog;
            _toolEnv: ToolEnvironment;
            _uniquefiles: java.util.Set<javax.tools.JavaFileObject>;
          }
          interface JavadocTool extends CombineTypes<[_JavadocTool, com.sun.tools.javac.main.JavaCompiler]> {}
          interface _JavadocToolProvider$$static extends ClassLike {
            new(): JavadocToolProvider;
          }
          let JavadocToolProvider: _JavadocToolProvider$$static;
          interface _JavadocToolProvider {
            description(): java.util.Optional<string>;
            name(): string;
            run(out: java.io.PrintWriter, err: java.io.PrintWriter, args: string[]): int;
            run(out: java.io.PrintWriter, err: java.io.PrintWriter, ...args: string[]): int;
          }
          interface JavadocToolProvider extends CombineTypes<[_JavadocToolProvider, java.lang.Object, java.util.spi.ToolProvider]> {}
          interface _Main$$static extends ClassLike {
            execute(args: string[]): int;
            execute(...args: string[]): int;
            execute(args: string[], writer: java.io.PrintWriter): int;
            execute(args: string[], outWriter: java.io.PrintWriter, errWriter: java.io.PrintWriter): int;
            main(args: string[]): void;
            main(...args: string[]): void;
            new(): Main;
          }
          let Main: _Main$$static;
          interface _Main {
            run(args: string[]): Main$Result;
            run(...args: string[]): Main$Result;
            setFileManager(fileManager: javax.tools.StandardJavaFileManager): Main;
            setStreams(outWriter: java.io.PrintWriter, errWriter: java.io.PrintWriter): Main;
            _errWriter: java.io.PrintWriter;
            _fileManager: javax.tools.StandardJavaFileManager;
            _outWriter: java.io.PrintWriter;
          }
          interface Main extends CombineTypes<[_Main, java.lang.Object]> {}
          interface _Main$Result$$static extends ClassLike {
            valueOf(name: string): Main$Result;
            values(): Main$Result[];
            readonly ABNORMAL: Main$Result;
            readonly CMDERR: Main$Result;
            readonly ERROR: Main$Result;
            readonly OK: Main$Result;
            readonly SYSERR: Main$Result;
          }
          let Main$Result: _Main$Result$$static;
          interface _Main$Result {
            isOK(): boolean;
            toString(): string;
            readonly exitCode: int;
          }
          interface Main$Result extends CombineTypes<[_Main$Result]> {}
          interface _OptionException$$static extends ClassLike {
            _serialVersionUID: long;
            new(result: Main$Result, method: java.lang.Runnable, message: string): OptionException;
            new(result: Main$Result, method: java.lang.Runnable): OptionException;
          }
          let OptionException: _OptionException$$static;
          interface _OptionException {
            readonly m: java.lang.Runnable;
            readonly message: string;
            readonly result: Main$Result;
          }
          interface OptionException extends CombineTypes<[_OptionException, java.lang.Exception]> {}
          interface _Start$$static extends ClassLike {
            _getSupportedOptionsOf(doclet: javadoc.doclet.Doclet): java.util.Set<javadoc.doclet.Doclet$Option>;
            _COMPACT_FORMAT: string;
            _DEFAULT_MAX_LINE_LENGTH: int;
            _DEFAULT_SYNOPSIS_WIDTH: int;
            _LARGE_INDENT: string;
            _ProgramName: string;
            _SMALL_INDENT: string;
            _new(): Start;
            _new(outWriter: java.io.PrintWriter, errWriter: java.io.PrintWriter): Start;
            _new(context: com.sun.tools.javac.util.Context, programName: string, outWriter: java.io.PrintWriter, errWriter: java.io.PrintWriter, docletName: string, classLoader: java.lang.ClassLoader): Start;
            new(context: com.sun.tools.javac.util.Context): Start;
          }
          let Start: _Start$$static;
          interface _Start {
            _begin(argv: string[]): Main$Result;
            _begin(...argv: string[]): Main$Result;
            begin(docletClass: java.lang.Class<any>, options: java.lang.Iterable<string>, fileObjects: java.lang.Iterable<javax.tools.JavaFileObject>): boolean;
            _begin(options: java.util.List<string>, fileObjects: java.lang.Iterable<javax.tools.JavaFileObject>): Main$Result;
            _checkOneArg(args: java.util.List<string>, index: int): void;
            _consumeDocletOption(idx: int, args: java.util.List<string>, isToolOption: boolean): int;
            _dumpStack(t: java.lang.Throwable): void;
            _dumpStack(enabled: boolean, t: java.lang.Throwable): void;
            _error(key: string, args: any[]): void;
            _error(key: string, ...args: any[]): void;
            _getLocale(localeName: string): java.util.Locale;
            _getToolOptions(): ToolOptions;
            _isEmpty<T>(iter: java.lang.Iterable<T>): boolean;
            _loadDocletClass(docletName: string, classLoader: java.lang.ClassLoader): java.lang.Class<any>;
            _matches(names: java.util.List<string>, arg: string): boolean;
            _matches(option: javadoc.doclet.Doclet$Option, arg: string): boolean;
            _parseAndExecute(argList: java.util.List<string>, fileObjects: java.lang.Iterable<javax.tools.JavaFileObject>): Main$Result;
            _parseArgs(args: java.util.List<string>, javaNames: java.util.List<string>): boolean;
            _preprocess(argv: java.util.List<string>): javadoc.doclet.Doclet;
            _reportInternalError(t: java.lang.Throwable): void;
            _showDocletOption(option: javadoc.doclet.Doclet$Option): void;
            _showDocletOptions(kind: javadoc.doclet.Doclet$Option$Kind): void;
            _showLines(message: string): void;
            _showLinesUsingKey(key: string, args: any[]): void;
            _showLinesUsingKey(key: string, ...args: any[]): void;
            _showOption(names: java.util.List<string>, parameters: string, description: string): void;
            _showToolOption(option: ToolOptions$ToolOption): void;
            _showToolOptions(kind: ToolOptions$ToolOption$Kind): void;
            _showUsage(): void;
            _showUsage(headerKey: string, kind: ToolOptions$ToolOption$Kind, footerKey: string): void;
            _showVersion(labelKey: string, value: string): void;
            _toolVersion(): java.lang.Runtime$Version;
            _apiMode: boolean;
            _classLoader: java.lang.ClassLoader;
            _context: com.sun.tools.javac.util.Context;
            _doclet: javadoc.doclet.Doclet;
            _docletClass: java.lang.Class<any>;
            _docletName: string;
            _docletOptions: java.util.Set<javadoc.doclet.Doclet$Option>;
            _fileManager: javax.tools.JavaFileManager;
            _locale: java.util.Locale;
            _log: JavadocLog;
            _options: ToolOptions;
          }
          interface Start extends CombineTypes<[_Start, java.lang.Object]> {}
          interface _ToolEnvironment$$static extends ClassLike {
            instance(context: com.sun.tools.javac.util.Context): ToolEnvironment;
            _ToolEnvKey: com.sun.tools.javac.util.Context$Key<ToolEnvironment>;
            _new(context: com.sun.tools.javac.util.Context): ToolEnvironment;
          }
          let ToolEnvironment: _ToolEnvironment$$static;
          interface _ToolEnvironment {
            getEnv(tsym: com.sun.tools.javac.code.Symbol$ClassSymbol): com.sun.tools.javac.comp.Env<com.sun.tools.javac.comp.AttrContext>;
            getFileKind(te: javax.lang.model.element.TypeElement): javax.tools.JavaFileObject$Kind;
            _getTreePath(tree: com.sun.tools.javac.tree.JCTree$JCCompilationUnit): com.sun.source.util.TreePath;
            _getTreePath(toplevel: com.sun.tools.javac.tree.JCTree$JCCompilationUnit, tree: com.sun.tools.javac.tree.JCTree$JCPackageDecl): com.sun.source.util.TreePath;
            _getTreePath(toplevel: com.sun.tools.javac.tree.JCTree$JCCompilationUnit, tree: com.sun.tools.javac.tree.JCTree$JCClassDecl): com.sun.source.util.TreePath;
            _getTreePath(toplevel: com.sun.tools.javac.tree.JCTree$JCCompilationUnit, cdecl: com.sun.tools.javac.tree.JCTree$JCClassDecl, tree: com.sun.tools.javac.tree.JCTree): com.sun.source.util.TreePath;
            getTypes(): com.sun.tools.javac.code.Types;
            initialize(options: ToolOptions): void;
            _isSynthetic(sym: com.sun.tools.javac.code.Symbol): boolean;
            _isUnnamed(sym: com.sun.tools.javac.code.Symbol): boolean;
            loadClass(name: string): javax.lang.model.element.TypeElement;
            printInfo(key: string, args: any[]): void;
            printInfo(key: string, ...args: any[]): void;
            _setElementToTreePath(e: javax.lang.model.element.Element, tree: com.sun.source.util.TreePath): void;
            _chk: com.sun.tools.javac.comp.Check;
            readonly context: com.sun.tools.javac.util.Context;
            _docClasses: boolean;
            _docEnv: DocEnvImpl;
            readonly docTrees: com.sun.source.util.DocTrees;
            readonly elementToTreePath: java.util.Map<javax.lang.model.element.Element,com.sun.source.util.TreePath>;
            readonly elements: javax.lang.model.util.Elements;
            _enter: com.sun.tools.javac.comp.Enter;
            _fileManager: javax.tools.JavaFileManager;
            _finder: com.sun.tools.javac.code.ClassFinder;
            _ignoreSourceErrors: boolean;
            _log: JavadocLog;
            _names: com.sun.tools.javac.util.Names;
            _quiet: boolean;
            readonly source: com.sun.tools.javac.code.Source;
            readonly syms: com.sun.tools.javac.code.Symtab;
            _treePaths: java.util.WeakHashMap<com.sun.tools.javac.tree.JCTree,com.sun.source.util.TreePath>;
            _types: com.sun.tools.javac.code.Types;
            readonly typeutils: com.sun.tools.javac.model.JavacTypes;
          }
          interface ToolEnvironment extends CombineTypes<[_ToolEnvironment, java.lang.Object]> {}
          interface _ToolException$$static extends ClassLike {
            _serialVersionUID: long;
            _new(result: Main$Result, message: string): ToolException;
            _new(result: Main$Result, message: string, cause: java.lang.Throwable): ToolException;
          }
          let ToolException: _ToolException$$static;
          interface _ToolException {
            _message: string;
            _result: Main$Result;
          }
          interface ToolException extends CombineTypes<[_ToolException, java.lang.Exception]> {}
          interface _ToolOptions$$static extends ClassLike {
            isSupportedOption(option: string): int;
            _AT: string;
            _DOCLET: string;
            _DOCLET_PATH: string;
            _DUMP_ON_ERROR: string;
            _J: string;
            _LOCALE: string;
            _new(context: com.sun.tools.javac.util.Context, log: JavadocLog, showHelper: ToolOptions$ShowHelper): ToolOptions;
          }
          let ToolOptions: _ToolOptions$$static;
          interface _ToolOptions {
            _breakIterator(): boolean;
            _compilerOptions(): com.sun.tools.javac.util.Options;
            _dumpOnError(): boolean;
            _excludes(): java.util.List<string>;
            _expandRequires(): AccessKind;
            _fileManagerOptions(): java.util.Map<com.sun.tools.javac.main.Option,string>;
            _getAccessValue(arg: string): AccessKind;
            _getOption(arg: string): ToolOptions$ToolOption;
            _getOptionHelper(): com.sun.tools.javac.main.OptionHelper;
            getSupportedOptions(): java.util.List<ToolOptions$ToolOption>;
            _ignoreSourceErrors(): boolean;
            _illegalOptionValue(arg: string): IllegalOptionValue;
            _modules(): java.util.List<string>;
            _processCompilerOption(option: com.sun.tools.javac.main.Option, opt: string): void;
            _processCompilerOption(option: com.sun.tools.javac.main.Option, opt: string, arg: string): void;
            _quiet(): boolean;
            _rejectWarnings(): boolean;
            _setAccess(accessValue: AccessKind): void;
            _setAccessDefault(): void;
            _setDumpOnError(v: boolean): void;
            _setExpandRequires(arg: string): void;
            _setShowMembersAccess(arg: string): void;
            _setShowModuleContents(arg: string): void;
            _setShowPackageAccess(arg: string): void;
            _setShowTypesAccess(arg: string): void;
            _setSimpleAccessOption(arg: string): void;
            _setSimpleFilter(arg: string): void;
            _setVerbose(): void;
            _showMembersAccess(): AccessKind;
            _showModuleContents(): AccessKind;
            _showPackagesAccess(): AccessKind;
            _showTypesAccess(): AccessKind;
            _subpackages(): java.util.List<string>;
            _verbose(): boolean;
            _xclasses(): boolean;
            _breakIterator: boolean;
            _compOpts: com.sun.tools.javac.util.Options;
            _compilerOptionHelper: com.sun.tools.javac.main.OptionHelper;
            _dumpOnError: boolean;
            _excludes: java.util.List<string>;
            _expandRequires: AccessKind;
            _fileManagerOpts: java.util.Map<com.sun.tools.javac.main.Option,string>;
            _ignoreSourceErrors: boolean;
            _log: JavadocLog;
            _modules: java.util.List<string>;
            _quiet: boolean;
            _rejectWarnings: boolean;
            _showHelper: ToolOptions$ShowHelper;
            _showMembersAccess: AccessKind;
            _showModuleContents: AccessKind;
            _showPackagesAccess: AccessKind;
            _showTypesAccess: AccessKind;
            _subpackages: java.util.List<string>;
            _supportedOptions: java.util.List<ToolOptions$ToolOption>;
            _verbose: boolean;
            _xclasses: boolean;
          }
          interface ToolOptions extends CombineTypes<[_ToolOptions, java.lang.Object]> {}
          interface _ToolOptions$ShowHelper$$static extends ClassLike {
          }
          let ToolOptions$ShowHelper: _ToolOptions$ShowHelper$$static;
          interface _ToolOptions$ShowHelper {
            Xusage(): void;
            fullVersion(): void;
            usage(): void;
            version(): void;
          }
          interface ToolOptions$ShowHelper extends CombineTypes<[_ToolOptions$ShowHelper, java.lang.Object]> {}
          interface _ToolOptions$ToolOption$$static extends ClassLike {
            _new(opt: string, kind: ToolOptions$ToolOption$Kind): ToolOptions$ToolOption;
            _new(names: string, kind: ToolOptions$ToolOption$Kind, hasArg: boolean): ToolOptions$ToolOption;
          }
          let ToolOptions$ToolOption: _ToolOptions$ToolOption$$static;
          interface _ToolOptions$ToolOption {
            _getDescription(log: JavadocLog): string;
            _getKey(optionName: string, suffix: string): string;
            _getNames(): java.util.List<string>;
            _getParameters(log: JavadocLog): string;
            _process(arg: string): void;
            _process(): void;
            _hasArg: boolean;
            _hasSuffix: boolean;
            _kind: ToolOptions$ToolOption$Kind;
            _names: java.util.List<string>;
            _primaryName: string;
          }
          interface ToolOptions$ToolOption extends CombineTypes<[_ToolOptions$ToolOption, java.lang.Object]> {}
          interface _ToolOptions$ToolOption$Kind$$static extends ClassLike {
            valueOf(name: string): ToolOptions$ToolOption$Kind;
            values(): ToolOptions$ToolOption$Kind[];
            readonly EXTENDED: ToolOptions$ToolOption$Kind;
            readonly HIDDEN: ToolOptions$ToolOption$Kind;
            readonly STANDARD: ToolOptions$ToolOption$Kind;
          }
          let ToolOptions$ToolOption$Kind: _ToolOptions$ToolOption$Kind$$static;
          interface _ToolOptions$ToolOption$Kind {
          }
          interface ToolOptions$ToolOption$Kind extends CombineTypes<[_ToolOptions$ToolOption$Kind]> {}
        }
        interface _Versions$$static extends ClassLike {
          fullVersionStringOf(v: java.lang.Runtime$Version): string;
          javadocVersion(): java.lang.Runtime$Version;
          shortVersionStringOf(v: java.lang.Runtime$Version): string;
        }
        let Versions: _Versions$$static;
        interface _Versions {
        }
        interface Versions extends CombineTypes<[_Versions, java.lang.Object]> {}
      }
    }
  }
}
