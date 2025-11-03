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
  module org {
    module w3c {
      module dom {
        module css {
          interface _CSS2Properties$$static extends ClassLike {
          }
          let CSS2Properties: _CSS2Properties$$static;
          interface _CSS2Properties {
            getAzimuth(): string;
            getBackground(): string;
            getBackgroundAttachment(): string;
            getBackgroundColor(): string;
            getBackgroundImage(): string;
            getBackgroundPosition(): string;
            getBackgroundRepeat(): string;
            getBorder(): string;
            getBorderBottom(): string;
            getBorderBottomColor(): string;
            getBorderBottomStyle(): string;
            getBorderBottomWidth(): string;
            getBorderCollapse(): string;
            getBorderColor(): string;
            getBorderLeft(): string;
            getBorderLeftColor(): string;
            getBorderLeftStyle(): string;
            getBorderLeftWidth(): string;
            getBorderRight(): string;
            getBorderRightColor(): string;
            getBorderRightStyle(): string;
            getBorderRightWidth(): string;
            getBorderSpacing(): string;
            getBorderStyle(): string;
            getBorderTop(): string;
            getBorderTopColor(): string;
            getBorderTopStyle(): string;
            getBorderTopWidth(): string;
            getBorderWidth(): string;
            getBottom(): string;
            getCaptionSide(): string;
            getClear(): string;
            getClip(): string;
            getColor(): string;
            getContent(): string;
            getCounterIncrement(): string;
            getCounterReset(): string;
            getCssFloat(): string;
            getCue(): string;
            getCueAfter(): string;
            getCueBefore(): string;
            getCursor(): string;
            getDirection(): string;
            getDisplay(): string;
            getElevation(): string;
            getEmptyCells(): string;
            getFont(): string;
            getFontFamily(): string;
            getFontSize(): string;
            getFontSizeAdjust(): string;
            getFontStretch(): string;
            getFontStyle(): string;
            getFontVariant(): string;
            getFontWeight(): string;
            getHeight(): string;
            getLeft(): string;
            getLetterSpacing(): string;
            getLineHeight(): string;
            getListStyle(): string;
            getListStyleImage(): string;
            getListStylePosition(): string;
            getListStyleType(): string;
            getMargin(): string;
            getMarginBottom(): string;
            getMarginLeft(): string;
            getMarginRight(): string;
            getMarginTop(): string;
            getMarkerOffset(): string;
            getMarks(): string;
            getMaxHeight(): string;
            getMaxWidth(): string;
            getMinHeight(): string;
            getMinWidth(): string;
            getOrphans(): string;
            getOutline(): string;
            getOutlineColor(): string;
            getOutlineStyle(): string;
            getOutlineWidth(): string;
            getOverflow(): string;
            getPadding(): string;
            getPaddingBottom(): string;
            getPaddingLeft(): string;
            getPaddingRight(): string;
            getPaddingTop(): string;
            getPage(): string;
            getPageBreakAfter(): string;
            getPageBreakBefore(): string;
            getPageBreakInside(): string;
            getPause(): string;
            getPauseAfter(): string;
            getPauseBefore(): string;
            getPitch(): string;
            getPitchRange(): string;
            getPlayDuring(): string;
            getPosition(): string;
            getQuotes(): string;
            getRichness(): string;
            getRight(): string;
            getSize(): string;
            getSpeak(): string;
            getSpeakHeader(): string;
            getSpeakNumeral(): string;
            getSpeakPunctuation(): string;
            getSpeechRate(): string;
            getStress(): string;
            getTableLayout(): string;
            getTextAlign(): string;
            getTextDecoration(): string;
            getTextIndent(): string;
            getTextShadow(): string;
            getTextTransform(): string;
            getTop(): string;
            getUnicodeBidi(): string;
            getVerticalAlign(): string;
            getVisibility(): string;
            getVoiceFamily(): string;
            getVolume(): string;
            getWhiteSpace(): string;
            getWidows(): string;
            getWidth(): string;
            getWordSpacing(): string;
            getZIndex(): string;
            setAzimuth(a0: string): void;
            setBackground(a0: string): void;
            setBackgroundAttachment(a0: string): void;
            setBackgroundColor(a0: string): void;
            setBackgroundImage(a0: string): void;
            setBackgroundPosition(a0: string): void;
            setBackgroundRepeat(a0: string): void;
            setBorder(a0: string): void;
            setBorderBottom(a0: string): void;
            setBorderBottomColor(a0: string): void;
            setBorderBottomStyle(a0: string): void;
            setBorderBottomWidth(a0: string): void;
            setBorderCollapse(a0: string): void;
            setBorderColor(a0: string): void;
            setBorderLeft(a0: string): void;
            setBorderLeftColor(a0: string): void;
            setBorderLeftStyle(a0: string): void;
            setBorderLeftWidth(a0: string): void;
            setBorderRight(a0: string): void;
            setBorderRightColor(a0: string): void;
            setBorderRightStyle(a0: string): void;
            setBorderRightWidth(a0: string): void;
            setBorderSpacing(a0: string): void;
            setBorderStyle(a0: string): void;
            setBorderTop(a0: string): void;
            setBorderTopColor(a0: string): void;
            setBorderTopStyle(a0: string): void;
            setBorderTopWidth(a0: string): void;
            setBorderWidth(a0: string): void;
            setBottom(a0: string): void;
            setCaptionSide(a0: string): void;
            setClear(a0: string): void;
            setClip(a0: string): void;
            setColor(a0: string): void;
            setContent(a0: string): void;
            setCounterIncrement(a0: string): void;
            setCounterReset(a0: string): void;
            setCssFloat(a0: string): void;
            setCue(a0: string): void;
            setCueAfter(a0: string): void;
            setCueBefore(a0: string): void;
            setCursor(a0: string): void;
            setDirection(a0: string): void;
            setDisplay(a0: string): void;
            setElevation(a0: string): void;
            setEmptyCells(a0: string): void;
            setFont(a0: string): void;
            setFontFamily(a0: string): void;
            setFontSize(a0: string): void;
            setFontSizeAdjust(a0: string): void;
            setFontStretch(a0: string): void;
            setFontStyle(a0: string): void;
            setFontVariant(a0: string): void;
            setFontWeight(a0: string): void;
            setHeight(a0: string): void;
            setLeft(a0: string): void;
            setLetterSpacing(a0: string): void;
            setLineHeight(a0: string): void;
            setListStyle(a0: string): void;
            setListStyleImage(a0: string): void;
            setListStylePosition(a0: string): void;
            setListStyleType(a0: string): void;
            setMargin(a0: string): void;
            setMarginBottom(a0: string): void;
            setMarginLeft(a0: string): void;
            setMarginRight(a0: string): void;
            setMarginTop(a0: string): void;
            setMarkerOffset(a0: string): void;
            setMarks(a0: string): void;
            setMaxHeight(a0: string): void;
            setMaxWidth(a0: string): void;
            setMinHeight(a0: string): void;
            setMinWidth(a0: string): void;
            setOrphans(a0: string): void;
            setOutline(a0: string): void;
            setOutlineColor(a0: string): void;
            setOutlineStyle(a0: string): void;
            setOutlineWidth(a0: string): void;
            setOverflow(a0: string): void;
            setPadding(a0: string): void;
            setPaddingBottom(a0: string): void;
            setPaddingLeft(a0: string): void;
            setPaddingRight(a0: string): void;
            setPaddingTop(a0: string): void;
            setPage(a0: string): void;
            setPageBreakAfter(a0: string): void;
            setPageBreakBefore(a0: string): void;
            setPageBreakInside(a0: string): void;
            setPause(a0: string): void;
            setPauseAfter(a0: string): void;
            setPauseBefore(a0: string): void;
            setPitch(a0: string): void;
            setPitchRange(a0: string): void;
            setPlayDuring(a0: string): void;
            setPosition(a0: string): void;
            setQuotes(a0: string): void;
            setRichness(a0: string): void;
            setRight(a0: string): void;
            setSize(a0: string): void;
            setSpeak(a0: string): void;
            setSpeakHeader(a0: string): void;
            setSpeakNumeral(a0: string): void;
            setSpeakPunctuation(a0: string): void;
            setSpeechRate(a0: string): void;
            setStress(a0: string): void;
            setTableLayout(a0: string): void;
            setTextAlign(a0: string): void;
            setTextDecoration(a0: string): void;
            setTextIndent(a0: string): void;
            setTextShadow(a0: string): void;
            setTextTransform(a0: string): void;
            setTop(a0: string): void;
            setUnicodeBidi(a0: string): void;
            setVerticalAlign(a0: string): void;
            setVisibility(a0: string): void;
            setVoiceFamily(a0: string): void;
            setVolume(a0: string): void;
            setWhiteSpace(a0: string): void;
            setWidows(a0: string): void;
            setWidth(a0: string): void;
            setWordSpacing(a0: string): void;
            setZIndex(a0: string): void;
          }
          interface CSS2Properties extends CombineTypes<[_CSS2Properties, java.lang.Object]> {}
          interface _CSSCharsetRule$$static extends ClassLike {
          }
          let CSSCharsetRule: _CSSCharsetRule$$static;
          interface _CSSCharsetRule {
            getEncoding(): string;
            setEncoding(a0: string): void;
          }
          interface CSSCharsetRule extends CombineTypes<[_CSSCharsetRule, java.lang.Object, org.w3c.dom.css.CSSRule]> {}
          interface _CSSFontFaceRule$$static extends ClassLike {
          }
          let CSSFontFaceRule: _CSSFontFaceRule$$static;
          interface _CSSFontFaceRule {
            getStyle(): CSSStyleDeclaration;
(): CSSStyleDeclaration;
          }
          interface CSSFontFaceRule extends CombineTypes<[_CSSFontFaceRule, java.lang.Object, org.w3c.dom.css.CSSRule]> {}
          interface _CSSImportRule$$static extends ClassLike {
          }
          let CSSImportRule: _CSSImportRule$$static;
          interface _CSSImportRule {
            getHref(): string;
            getMedia(): dom.stylesheets.MediaList;
            getStyleSheet(): CSSStyleSheet;
          }
          interface CSSImportRule extends CombineTypes<[_CSSImportRule, java.lang.Object, org.w3c.dom.css.CSSRule]> {}
          interface _CSSMediaRule$$static extends ClassLike {
          }
          let CSSMediaRule: _CSSMediaRule$$static;
          interface _CSSMediaRule {
            deleteRule(a0: int): void;
            getCssRules(): CSSRuleList;
            getMedia(): dom.stylesheets.MediaList;
            insertRule(a0: string, a1: int): int;
          }
          interface CSSMediaRule extends CombineTypes<[_CSSMediaRule, java.lang.Object, org.w3c.dom.css.CSSRule]> {}
          interface _CSSPageRule$$static extends ClassLike {
          }
          let CSSPageRule: _CSSPageRule$$static;
          interface _CSSPageRule {
            getSelectorText(): string;
            getStyle(): CSSStyleDeclaration;
            setSelectorText(a0: string): void;
          }
          interface CSSPageRule extends CombineTypes<[_CSSPageRule, java.lang.Object, org.w3c.dom.css.CSSRule]> {}
          interface _CSSPrimitiveValue$$static extends ClassLike {
            readonly CSS_ATTR: short;
            readonly CSS_CM: short;
            readonly CSS_COUNTER: short;
            readonly CSS_DEG: short;
            readonly CSS_DIMENSION: short;
            readonly CSS_EMS: short;
            readonly CSS_EXS: short;
            readonly CSS_GRAD: short;
            readonly CSS_HZ: short;
            readonly CSS_IDENT: short;
            readonly CSS_IN: short;
            readonly CSS_KHZ: short;
            readonly CSS_MM: short;
            readonly CSS_MS: short;
            readonly CSS_NUMBER: short;
            readonly CSS_PC: short;
            readonly CSS_PERCENTAGE: short;
            readonly CSS_PT: short;
            readonly CSS_PX: short;
            readonly CSS_RAD: short;
            readonly CSS_RECT: short;
            readonly CSS_RGBCOLOR: short;
            readonly CSS_S: short;
            readonly CSS_STRING: short;
            readonly CSS_UNKNOWN: short;
            readonly CSS_URI: short;
          }
          let CSSPrimitiveValue: _CSSPrimitiveValue$$static;
          interface _CSSPrimitiveValue {
            getCounterValue(): Counter;
            getFloatValue(a0: short): float;
            getPrimitiveType(): short;
            getRGBColorValue(): RGBColor;
            getRectValue(): Rect;
            getStringValue(): string;
            setFloatValue(a0: short, a1: float): void;
            setStringValue(a0: short, a1: string): void;
          }
          interface CSSPrimitiveValue extends CombineTypes<[_CSSPrimitiveValue, java.lang.Object, org.w3c.dom.css.CSSValue]> {}
          interface _CSSRule$$static extends ClassLike {
            readonly CHARSET_RULE: short;
            readonly FONT_FACE_RULE: short;
            readonly IMPORT_RULE: short;
            readonly MEDIA_RULE: short;
            readonly PAGE_RULE: short;
            readonly STYLE_RULE: short;
            readonly UNKNOWN_RULE: short;
          }
          let CSSRule: _CSSRule$$static;
          interface _CSSRule {
            getCssText(): string;
            getParentRule(): CSSRule;
            getParentStyleSheet(): CSSStyleSheet;
            getType(): short;
            setCssText(a0: string): void;
          }
          interface CSSRule extends CombineTypes<[_CSSRule, java.lang.Object]> {}
          interface _CSSRuleList$$static extends ClassLike {
          }
          let CSSRuleList: _CSSRuleList$$static;
          interface _CSSRuleList {
            getLength(): int;
            item(a0: int): CSSRule;
          }
          interface CSSRuleList extends CombineTypes<[_CSSRuleList, java.lang.Object]> {}
          interface _CSSStyleDeclaration$$static extends ClassLike {
          }
          let CSSStyleDeclaration: _CSSStyleDeclaration$$static;
          interface _CSSStyleDeclaration {
            getCssText(): string;
            getLength(): int;
            getParentRule(): CSSRule;
            getPropertyCSSValue(a0: string): CSSValue;
            getPropertyPriority(a0: string): string;
            getPropertyValue(a0: string): string;
            item(a0: int): string;
            removeProperty(a0: string): string;
            setCssText(a0: string): void;
            setProperty(a0: string, a1: string, a2: string): void;
          }
          interface CSSStyleDeclaration extends CombineTypes<[_CSSStyleDeclaration, java.lang.Object]> {}
          interface _CSSStyleRule$$static extends ClassLike {
          }
          let CSSStyleRule: _CSSStyleRule$$static;
          interface _CSSStyleRule {
            getSelectorText(): string;
            getStyle(): CSSStyleDeclaration;
            setSelectorText(a0: string): void;
          }
          interface CSSStyleRule extends CombineTypes<[_CSSStyleRule, java.lang.Object, org.w3c.dom.css.CSSRule]> {}
          interface _CSSStyleSheet$$static extends ClassLike {
          }
          let CSSStyleSheet: _CSSStyleSheet$$static;
          interface _CSSStyleSheet {
            deleteRule(a0: int): void;
            getCssRules(): CSSRuleList;
            getOwnerRule(): CSSRule;
            insertRule(a0: string, a1: int): int;
          }
          interface CSSStyleSheet extends CombineTypes<[_CSSStyleSheet, org.w3c.dom.stylesheets.StyleSheet, java.lang.Object]> {}
          interface _CSSUnknownRule$$static extends ClassLike {
          }
          let CSSUnknownRule: _CSSUnknownRule$$static;
          interface _CSSUnknownRule {
          }
          interface CSSUnknownRule extends CombineTypes<[_CSSUnknownRule, java.lang.Object, org.w3c.dom.css.CSSRule]> {}
          interface _CSSValue$$static extends ClassLike {
            readonly CSS_CUSTOM: short;
            readonly CSS_INHERIT: short;
            readonly CSS_PRIMITIVE_VALUE: short;
            readonly CSS_VALUE_LIST: short;
          }
          let CSSValue: _CSSValue$$static;
          interface _CSSValue {
            getCssText(): string;
            getCssValueType(): short;
            setCssText(a0: string): void;
          }
          interface CSSValue extends CombineTypes<[_CSSValue, java.lang.Object]> {}
          interface _CSSValueList$$static extends ClassLike {
          }
          let CSSValueList: _CSSValueList$$static;
          interface _CSSValueList {
            getLength(): int;
            item(a0: int): CSSValue;
          }
          interface CSSValueList extends CombineTypes<[_CSSValueList, java.lang.Object, org.w3c.dom.css.CSSValue]> {}
          interface _Counter$$static extends ClassLike {
          }
          let Counter: _Counter$$static;
          interface _Counter {
            getIdentifier(): string;
            getListStyle(): string;
            getSeparator(): string;
          }
          interface Counter extends CombineTypes<[_Counter, java.lang.Object]> {}
          interface _DOMImplementationCSS$$static extends ClassLike {
          }
          let DOMImplementationCSS: _DOMImplementationCSS$$static;
          interface _DOMImplementationCSS {
            createCSSStyleSheet(a0: string, a1: string): CSSStyleSheet;
(a0: string, a1: string): CSSStyleSheet;
          }
          interface DOMImplementationCSS extends CombineTypes<[_DOMImplementationCSS, java.lang.Object, org.w3c.dom.DOMImplementation]> {}
          interface _DocumentCSS$$static extends ClassLike {
          }
          let DocumentCSS: _DocumentCSS$$static;
          interface _DocumentCSS {
            getOverrideStyle(a0: Element, a1: string): CSSStyleDeclaration;
(a0: Element, a1: string): CSSStyleDeclaration;
          }
          interface DocumentCSS extends CombineTypes<[_DocumentCSS, org.w3c.dom.stylesheets.DocumentStyle, java.lang.Object]> {}
          interface _ElementCSSInlineStyle$$static extends ClassLike {
          }
          let ElementCSSInlineStyle: _ElementCSSInlineStyle$$static;
          interface _ElementCSSInlineStyle {
            getStyle(): CSSStyleDeclaration;
(): CSSStyleDeclaration;
          }
          interface ElementCSSInlineStyle extends CombineTypes<[_ElementCSSInlineStyle, java.lang.Object]> {}
          interface _RGBColor$$static extends ClassLike {
          }
          let RGBColor: _RGBColor$$static;
          interface _RGBColor {
            getBlue(): CSSPrimitiveValue;
            getGreen(): CSSPrimitiveValue;
            getRed(): CSSPrimitiveValue;
          }
          interface RGBColor extends CombineTypes<[_RGBColor, java.lang.Object]> {}
          interface _Rect$$static extends ClassLike {
          }
          let Rect: _Rect$$static;
          interface _Rect {
            getBottom(): CSSPrimitiveValue;
            getLeft(): CSSPrimitiveValue;
            getRight(): CSSPrimitiveValue;
            getTop(): CSSPrimitiveValue;
          }
          interface Rect extends CombineTypes<[_Rect, java.lang.Object]> {}
          interface _ViewCSS$$static extends ClassLike {
          }
          let ViewCSS: _ViewCSS$$static;
          interface _ViewCSS {
            getComputedStyle(a0: Element, a1: string): CSSStyleDeclaration;
(a0: Element, a1: string): CSSStyleDeclaration;
          }
          interface ViewCSS extends CombineTypes<[_ViewCSS, org.w3c.dom.views.AbstractView, java.lang.Object]> {}
        }
        module html {
          interface _HTMLAnchorElement$$static extends ClassLike {
          }
          let HTMLAnchorElement: _HTMLAnchorElement$$static;
          interface _HTMLAnchorElement {
            blur(): void;
            focus(): void;
            getAccessKey(): string;
            getCharset(): string;
            getCoords(): string;
            getHref(): string;
            getHreflang(): string;
            getName(): string;
            getRel(): string;
            getRev(): string;
            getShape(): string;
            getTabIndex(): int;
            getTarget(): string;
            getType(): string;
            setAccessKey(a0: string): void;
            setCharset(a0: string): void;
            setCoords(a0: string): void;
            setHref(a0: string): void;
            setHreflang(a0: string): void;
            setName(a0: string): void;
            setRel(a0: string): void;
            setRev(a0: string): void;
            setShape(a0: string): void;
            setTabIndex(a0: int): void;
            setTarget(a0: string): void;
            setType(a0: string): void;
          }
          interface HTMLAnchorElement extends CombineTypes<[_HTMLAnchorElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLAppletElement$$static extends ClassLike {
          }
          let HTMLAppletElement: _HTMLAppletElement$$static;
          interface _HTMLAppletElement {
            getAlign(): string;
            getAlt(): string;
            getArchive(): string;
            getCode(): string;
            getCodeBase(): string;
            getHeight(): string;
            getHspace(): string;
            getName(): string;
            getObject(): string;
            getVspace(): string;
            getWidth(): string;
            setAlign(a0: string): void;
            setAlt(a0: string): void;
            setArchive(a0: string): void;
            setCode(a0: string): void;
            setCodeBase(a0: string): void;
            setHeight(a0: string): void;
            setHspace(a0: string): void;
            setName(a0: string): void;
            setObject(a0: string): void;
            setVspace(a0: string): void;
            setWidth(a0: string): void;
          }
          interface HTMLAppletElement extends CombineTypes<[_HTMLAppletElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLAreaElement$$static extends ClassLike {
          }
          let HTMLAreaElement: _HTMLAreaElement$$static;
          interface _HTMLAreaElement {
            getAccessKey(): string;
            getAlt(): string;
            getCoords(): string;
            getHref(): string;
            getNoHref(): boolean;
            getShape(): string;
            getTabIndex(): int;
            getTarget(): string;
            setAccessKey(a0: string): void;
            setAlt(a0: string): void;
            setCoords(a0: string): void;
            setHref(a0: string): void;
            setNoHref(a0: boolean): void;
            setShape(a0: string): void;
            setTabIndex(a0: int): void;
            setTarget(a0: string): void;
          }
          interface HTMLAreaElement extends CombineTypes<[_HTMLAreaElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLBRElement$$static extends ClassLike {
          }
          let HTMLBRElement: _HTMLBRElement$$static;
          interface _HTMLBRElement {
            getClear(): string;
            setClear(a0: string): void;
          }
          interface HTMLBRElement extends CombineTypes<[_HTMLBRElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLBaseElement$$static extends ClassLike {
          }
          let HTMLBaseElement: _HTMLBaseElement$$static;
          interface _HTMLBaseElement {
            getHref(): string;
            getTarget(): string;
            setHref(a0: string): void;
            setTarget(a0: string): void;
          }
          interface HTMLBaseElement extends CombineTypes<[_HTMLBaseElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLBaseFontElement$$static extends ClassLike {
          }
          let HTMLBaseFontElement: _HTMLBaseFontElement$$static;
          interface _HTMLBaseFontElement {
            getColor(): string;
            getFace(): string;
            getSize(): string;
            setColor(a0: string): void;
            setFace(a0: string): void;
            setSize(a0: string): void;
          }
          interface HTMLBaseFontElement extends CombineTypes<[_HTMLBaseFontElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLBodyElement$$static extends ClassLike {
          }
          let HTMLBodyElement: _HTMLBodyElement$$static;
          interface _HTMLBodyElement {
            getALink(): string;
            getBackground(): string;
            getBgColor(): string;
            getLink(): string;
            getText(): string;
            getVLink(): string;
            setALink(a0: string): void;
            setBackground(a0: string): void;
            setBgColor(a0: string): void;
            setLink(a0: string): void;
            setText(a0: string): void;
            setVLink(a0: string): void;
          }
          interface HTMLBodyElement extends CombineTypes<[_HTMLBodyElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLButtonElement$$static extends ClassLike {
          }
          let HTMLButtonElement: _HTMLButtonElement$$static;
          interface _HTMLButtonElement {
            getAccessKey(): string;
            getDisabled(): boolean;
            getForm(): HTMLFormElement;
            getName(): string;
            getTabIndex(): int;
            getType(): string;
            getValue(): string;
            setAccessKey(a0: string): void;
            setDisabled(a0: boolean): void;
            setName(a0: string): void;
            setTabIndex(a0: int): void;
            setValue(a0: string): void;
          }
          interface HTMLButtonElement extends CombineTypes<[_HTMLButtonElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLCollection$$static extends ClassLike {
          }
          let HTMLCollection: _HTMLCollection$$static;
          interface _HTMLCollection {
            getLength(): int;
            item(a0: int): Node;
            namedItem(a0: string): Node;
          }
          interface HTMLCollection extends CombineTypes<[_HTMLCollection, java.lang.Object]> {}
          interface _HTMLDListElement$$static extends ClassLike {
          }
          let HTMLDListElement: _HTMLDListElement$$static;
          interface _HTMLDListElement {
            getCompact(): boolean;
            setCompact(a0: boolean): void;
          }
          interface HTMLDListElement extends CombineTypes<[_HTMLDListElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLDOMImplementation$$static extends ClassLike {
          }
          let HTMLDOMImplementation: _HTMLDOMImplementation$$static;
          interface _HTMLDOMImplementation {
            createHTMLDocument(a0: string): HTMLDocument;
(a0: string): HTMLDocument;
          }
          interface HTMLDOMImplementation extends CombineTypes<[_HTMLDOMImplementation, java.lang.Object, org.w3c.dom.DOMImplementation]> {}
          interface _HTMLDirectoryElement$$static extends ClassLike {
          }
          let HTMLDirectoryElement: _HTMLDirectoryElement$$static;
          interface _HTMLDirectoryElement {
            getCompact(): boolean;
            setCompact(a0: boolean): void;
          }
          interface HTMLDirectoryElement extends CombineTypes<[_HTMLDirectoryElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLDivElement$$static extends ClassLike {
          }
          let HTMLDivElement: _HTMLDivElement$$static;
          interface _HTMLDivElement {
            getAlign(): string;
            setAlign(a0: string): void;
          }
          interface HTMLDivElement extends CombineTypes<[_HTMLDivElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLDocument$$static extends ClassLike {
          }
          let HTMLDocument: _HTMLDocument$$static;
          interface _HTMLDocument {
            close(): void;
            getAnchors(): HTMLCollection;
            getApplets(): HTMLCollection;
            getBody(): HTMLElement;
            getCookie(): string;
            getDomain(): string;
            getElementsByName(a0: string): NodeList;
            getForms(): HTMLCollection;
            getImages(): HTMLCollection;
            getLinks(): HTMLCollection;
            getReferrer(): string;
            getTitle(): string;
            getURL(): string;
            open(): void;
            setBody(a0: HTMLElement): void;
            setCookie(a0: string): void;
            setTitle(a0: string): void;
            write(a0: string): void;
            writeln(a0: string): void;
          }
          interface HTMLDocument extends CombineTypes<[_HTMLDocument, org.w3c.dom.Document, java.lang.Object]> {}
          interface _HTMLElement$$static extends ClassLike {
          }
          let HTMLElement: _HTMLElement$$static;
          interface _HTMLElement {
            getClassName(): string;
            getDir(): string;
            getId(): string;
            getLang(): string;
            getTitle(): string;
            setClassName(a0: string): void;
            setDir(a0: string): void;
            setId(a0: string): void;
            setLang(a0: string): void;
            setTitle(a0: string): void;
          }
          interface HTMLElement extends CombineTypes<[_HTMLElement, org.w3c.dom.Element, java.lang.Object]> {}
          interface _HTMLFieldSetElement$$static extends ClassLike {
          }
          let HTMLFieldSetElement: _HTMLFieldSetElement$$static;
          interface _HTMLFieldSetElement {
            getForm(): HTMLFormElement;
(): HTMLFormElement;
          }
          interface HTMLFieldSetElement extends CombineTypes<[_HTMLFieldSetElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLFontElement$$static extends ClassLike {
          }
          let HTMLFontElement: _HTMLFontElement$$static;
          interface _HTMLFontElement {
            getColor(): string;
            getFace(): string;
            getSize(): string;
            setColor(a0: string): void;
            setFace(a0: string): void;
            setSize(a0: string): void;
          }
          interface HTMLFontElement extends CombineTypes<[_HTMLFontElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLFormElement$$static extends ClassLike {
          }
          let HTMLFormElement: _HTMLFormElement$$static;
          interface _HTMLFormElement {
            getAcceptCharset(): string;
            getAction(): string;
            getElements(): HTMLCollection;
            getEnctype(): string;
            getLength(): int;
            getMethod(): string;
            getName(): string;
            getTarget(): string;
            reset(): void;
            setAcceptCharset(a0: string): void;
            setAction(a0: string): void;
            setEnctype(a0: string): void;
            setMethod(a0: string): void;
            setName(a0: string): void;
            setTarget(a0: string): void;
            submit(): void;
          }
          interface HTMLFormElement extends CombineTypes<[_HTMLFormElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLFrameElement$$static extends ClassLike {
          }
          let HTMLFrameElement: _HTMLFrameElement$$static;
          interface _HTMLFrameElement {
            getContentDocument(): Document;
            getFrameBorder(): string;
            getLongDesc(): string;
            getMarginHeight(): string;
            getMarginWidth(): string;
            getName(): string;
            getNoResize(): boolean;
            getScrolling(): string;
            getSrc(): string;
            setFrameBorder(a0: string): void;
            setLongDesc(a0: string): void;
            setMarginHeight(a0: string): void;
            setMarginWidth(a0: string): void;
            setName(a0: string): void;
            setNoResize(a0: boolean): void;
            setScrolling(a0: string): void;
            setSrc(a0: string): void;
          }
          interface HTMLFrameElement extends CombineTypes<[_HTMLFrameElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLFrameSetElement$$static extends ClassLike {
          }
          let HTMLFrameSetElement: _HTMLFrameSetElement$$static;
          interface _HTMLFrameSetElement {
            getCols(): string;
            getRows(): string;
            setCols(a0: string): void;
            setRows(a0: string): void;
          }
          interface HTMLFrameSetElement extends CombineTypes<[_HTMLFrameSetElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLHRElement$$static extends ClassLike {
          }
          let HTMLHRElement: _HTMLHRElement$$static;
          interface _HTMLHRElement {
            getAlign(): string;
            getNoShade(): boolean;
            getSize(): string;
            getWidth(): string;
            setAlign(a0: string): void;
            setNoShade(a0: boolean): void;
            setSize(a0: string): void;
            setWidth(a0: string): void;
          }
          interface HTMLHRElement extends CombineTypes<[_HTMLHRElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLHeadElement$$static extends ClassLike {
          }
          let HTMLHeadElement: _HTMLHeadElement$$static;
          interface _HTMLHeadElement {
            getProfile(): string;
            setProfile(a0: string): void;
          }
          interface HTMLHeadElement extends CombineTypes<[_HTMLHeadElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLHeadingElement$$static extends ClassLike {
          }
          let HTMLHeadingElement: _HTMLHeadingElement$$static;
          interface _HTMLHeadingElement {
            getAlign(): string;
            setAlign(a0: string): void;
          }
          interface HTMLHeadingElement extends CombineTypes<[_HTMLHeadingElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLHtmlElement$$static extends ClassLike {
          }
          let HTMLHtmlElement: _HTMLHtmlElement$$static;
          interface _HTMLHtmlElement {
            getVersion(): string;
            setVersion(a0: string): void;
          }
          interface HTMLHtmlElement extends CombineTypes<[_HTMLHtmlElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLIFrameElement$$static extends ClassLike {
          }
          let HTMLIFrameElement: _HTMLIFrameElement$$static;
          interface _HTMLIFrameElement {
            getAlign(): string;
            getContentDocument(): Document;
            getFrameBorder(): string;
            getHeight(): string;
            getLongDesc(): string;
            getMarginHeight(): string;
            getMarginWidth(): string;
            getName(): string;
            getScrolling(): string;
            getSrc(): string;
            getWidth(): string;
            setAlign(a0: string): void;
            setFrameBorder(a0: string): void;
            setHeight(a0: string): void;
            setLongDesc(a0: string): void;
            setMarginHeight(a0: string): void;
            setMarginWidth(a0: string): void;
            setName(a0: string): void;
            setScrolling(a0: string): void;
            setSrc(a0: string): void;
            setWidth(a0: string): void;
          }
          interface HTMLIFrameElement extends CombineTypes<[_HTMLIFrameElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLImageElement$$static extends ClassLike {
          }
          let HTMLImageElement: _HTMLImageElement$$static;
          interface _HTMLImageElement {
            getAlign(): string;
            getAlt(): string;
            getBorder(): string;
            getHeight(): string;
            getHspace(): string;
            getIsMap(): boolean;
            getLongDesc(): string;
            getLowSrc(): string;
            getName(): string;
            getSrc(): string;
            getUseMap(): string;
            getVspace(): string;
            getWidth(): string;
            setAlign(a0: string): void;
            setAlt(a0: string): void;
            setBorder(a0: string): void;
            setHeight(a0: string): void;
            setHspace(a0: string): void;
            setIsMap(a0: boolean): void;
            setLongDesc(a0: string): void;
            setLowSrc(a0: string): void;
            setName(a0: string): void;
            setSrc(a0: string): void;
            setUseMap(a0: string): void;
            setVspace(a0: string): void;
            setWidth(a0: string): void;
          }
          interface HTMLImageElement extends CombineTypes<[_HTMLImageElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLInputElement$$static extends ClassLike {
          }
          let HTMLInputElement: _HTMLInputElement$$static;
          interface _HTMLInputElement {
            blur(): void;
            click(): void;
            focus(): void;
            getAccept(): string;
            getAccessKey(): string;
            getAlign(): string;
            getAlt(): string;
            getChecked(): boolean;
            getDefaultChecked(): boolean;
            getDefaultValue(): string;
            getDisabled(): boolean;
            getForm(): HTMLFormElement;
            getMaxLength(): int;
            getName(): string;
            getReadOnly(): boolean;
            getSize(): string;
            getSrc(): string;
            getTabIndex(): int;
            getType(): string;
            getUseMap(): string;
            getValue(): string;
            select(): void;
            setAccept(a0: string): void;
            setAccessKey(a0: string): void;
            setAlign(a0: string): void;
            setAlt(a0: string): void;
            setChecked(a0: boolean): void;
            setDefaultChecked(a0: boolean): void;
            setDefaultValue(a0: string): void;
            setDisabled(a0: boolean): void;
            setMaxLength(a0: int): void;
            setName(a0: string): void;
            setReadOnly(a0: boolean): void;
            setSize(a0: string): void;
            setSrc(a0: string): void;
            setTabIndex(a0: int): void;
            setUseMap(a0: string): void;
            setValue(a0: string): void;
          }
          interface HTMLInputElement extends CombineTypes<[_HTMLInputElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLIsIndexElement$$static extends ClassLike {
          }
          let HTMLIsIndexElement: _HTMLIsIndexElement$$static;
          interface _HTMLIsIndexElement {
            getForm(): HTMLFormElement;
            getPrompt(): string;
            setPrompt(a0: string): void;
          }
          interface HTMLIsIndexElement extends CombineTypes<[_HTMLIsIndexElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLLIElement$$static extends ClassLike {
          }
          let HTMLLIElement: _HTMLLIElement$$static;
          interface _HTMLLIElement {
            getType(): string;
            getValue(): int;
            setType(a0: string): void;
            setValue(a0: int): void;
          }
          interface HTMLLIElement extends CombineTypes<[_HTMLLIElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLLabelElement$$static extends ClassLike {
          }
          let HTMLLabelElement: _HTMLLabelElement$$static;
          interface _HTMLLabelElement {
            getAccessKey(): string;
            getForm(): HTMLFormElement;
            getHtmlFor(): string;
            setAccessKey(a0: string): void;
            setHtmlFor(a0: string): void;
          }
          interface HTMLLabelElement extends CombineTypes<[_HTMLLabelElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLLegendElement$$static extends ClassLike {
          }
          let HTMLLegendElement: _HTMLLegendElement$$static;
          interface _HTMLLegendElement {
            getAccessKey(): string;
            getAlign(): string;
            getForm(): HTMLFormElement;
            setAccessKey(a0: string): void;
            setAlign(a0: string): void;
          }
          interface HTMLLegendElement extends CombineTypes<[_HTMLLegendElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLLinkElement$$static extends ClassLike {
          }
          let HTMLLinkElement: _HTMLLinkElement$$static;
          interface _HTMLLinkElement {
            getCharset(): string;
            getDisabled(): boolean;
            getHref(): string;
            getHreflang(): string;
            getMedia(): string;
            getRel(): string;
            getRev(): string;
            getTarget(): string;
            getType(): string;
            setCharset(a0: string): void;
            setDisabled(a0: boolean): void;
            setHref(a0: string): void;
            setHreflang(a0: string): void;
            setMedia(a0: string): void;
            setRel(a0: string): void;
            setRev(a0: string): void;
            setTarget(a0: string): void;
            setType(a0: string): void;
          }
          interface HTMLLinkElement extends CombineTypes<[_HTMLLinkElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLMapElement$$static extends ClassLike {
          }
          let HTMLMapElement: _HTMLMapElement$$static;
          interface _HTMLMapElement {
            getAreas(): HTMLCollection;
            getName(): string;
            setName(a0: string): void;
          }
          interface HTMLMapElement extends CombineTypes<[_HTMLMapElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLMenuElement$$static extends ClassLike {
          }
          let HTMLMenuElement: _HTMLMenuElement$$static;
          interface _HTMLMenuElement {
            getCompact(): boolean;
            setCompact(a0: boolean): void;
          }
          interface HTMLMenuElement extends CombineTypes<[_HTMLMenuElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLMetaElement$$static extends ClassLike {
          }
          let HTMLMetaElement: _HTMLMetaElement$$static;
          interface _HTMLMetaElement {
            getContent(): string;
            getHttpEquiv(): string;
            getName(): string;
            getScheme(): string;
            setContent(a0: string): void;
            setHttpEquiv(a0: string): void;
            setName(a0: string): void;
            setScheme(a0: string): void;
          }
          interface HTMLMetaElement extends CombineTypes<[_HTMLMetaElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLModElement$$static extends ClassLike {
          }
          let HTMLModElement: _HTMLModElement$$static;
          interface _HTMLModElement {
            getCite(): string;
            getDateTime(): string;
            setCite(a0: string): void;
            setDateTime(a0: string): void;
          }
          interface HTMLModElement extends CombineTypes<[_HTMLModElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLOListElement$$static extends ClassLike {
          }
          let HTMLOListElement: _HTMLOListElement$$static;
          interface _HTMLOListElement {
            getCompact(): boolean;
            getStart(): int;
            getType(): string;
            setCompact(a0: boolean): void;
            setStart(a0: int): void;
            setType(a0: string): void;
          }
          interface HTMLOListElement extends CombineTypes<[_HTMLOListElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLObjectElement$$static extends ClassLike {
          }
          let HTMLObjectElement: _HTMLObjectElement$$static;
          interface _HTMLObjectElement {
            getAlign(): string;
            getArchive(): string;
            getBorder(): string;
            getCode(): string;
            getCodeBase(): string;
            getCodeType(): string;
            getContentDocument(): Document;
            getData(): string;
            getDeclare(): boolean;
            getForm(): HTMLFormElement;
            getHeight(): string;
            getHspace(): string;
            getName(): string;
            getStandby(): string;
            getTabIndex(): int;
            getType(): string;
            getUseMap(): string;
            getVspace(): string;
            getWidth(): string;
            setAlign(a0: string): void;
            setArchive(a0: string): void;
            setBorder(a0: string): void;
            setCode(a0: string): void;
            setCodeBase(a0: string): void;
            setCodeType(a0: string): void;
            setData(a0: string): void;
            setDeclare(a0: boolean): void;
            setHeight(a0: string): void;
            setHspace(a0: string): void;
            setName(a0: string): void;
            setStandby(a0: string): void;
            setTabIndex(a0: int): void;
            setType(a0: string): void;
            setUseMap(a0: string): void;
            setVspace(a0: string): void;
            setWidth(a0: string): void;
          }
          interface HTMLObjectElement extends CombineTypes<[_HTMLObjectElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLOptGroupElement$$static extends ClassLike {
          }
          let HTMLOptGroupElement: _HTMLOptGroupElement$$static;
          interface _HTMLOptGroupElement {
            getDisabled(): boolean;
            getLabel(): string;
            setDisabled(a0: boolean): void;
            setLabel(a0: string): void;
          }
          interface HTMLOptGroupElement extends CombineTypes<[_HTMLOptGroupElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLOptionElement$$static extends ClassLike {
          }
          let HTMLOptionElement: _HTMLOptionElement$$static;
          interface _HTMLOptionElement {
            getDefaultSelected(): boolean;
            getDisabled(): boolean;
            getForm(): HTMLFormElement;
            getIndex(): int;
            getLabel(): string;
            getSelected(): boolean;
            getText(): string;
            getValue(): string;
            setDefaultSelected(a0: boolean): void;
            setDisabled(a0: boolean): void;
            setLabel(a0: string): void;
            setSelected(a0: boolean): void;
            setValue(a0: string): void;
          }
          interface HTMLOptionElement extends CombineTypes<[_HTMLOptionElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLParagraphElement$$static extends ClassLike {
          }
          let HTMLParagraphElement: _HTMLParagraphElement$$static;
          interface _HTMLParagraphElement {
            getAlign(): string;
            setAlign(a0: string): void;
          }
          interface HTMLParagraphElement extends CombineTypes<[_HTMLParagraphElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLParamElement$$static extends ClassLike {
          }
          let HTMLParamElement: _HTMLParamElement$$static;
          interface _HTMLParamElement {
            getName(): string;
            getType(): string;
            getValue(): string;
            getValueType(): string;
            setName(a0: string): void;
            setType(a0: string): void;
            setValue(a0: string): void;
            setValueType(a0: string): void;
          }
          interface HTMLParamElement extends CombineTypes<[_HTMLParamElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLPreElement$$static extends ClassLike {
          }
          let HTMLPreElement: _HTMLPreElement$$static;
          interface _HTMLPreElement {
            getWidth(): int;
            setWidth(a0: int): void;
          }
          interface HTMLPreElement extends CombineTypes<[_HTMLPreElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLQuoteElement$$static extends ClassLike {
          }
          let HTMLQuoteElement: _HTMLQuoteElement$$static;
          interface _HTMLQuoteElement {
            getCite(): string;
            setCite(a0: string): void;
          }
          interface HTMLQuoteElement extends CombineTypes<[_HTMLQuoteElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLScriptElement$$static extends ClassLike {
          }
          let HTMLScriptElement: _HTMLScriptElement$$static;
          interface _HTMLScriptElement {
            getCharset(): string;
            getDefer(): boolean;
            getEvent(): string;
            getHtmlFor(): string;
            getSrc(): string;
            getText(): string;
            getType(): string;
            setCharset(a0: string): void;
            setDefer(a0: boolean): void;
            setEvent(a0: string): void;
            setHtmlFor(a0: string): void;
            setSrc(a0: string): void;
            setText(a0: string): void;
            setType(a0: string): void;
          }
          interface HTMLScriptElement extends CombineTypes<[_HTMLScriptElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLSelectElement$$static extends ClassLike {
          }
          let HTMLSelectElement: _HTMLSelectElement$$static;
          interface _HTMLSelectElement {
            add(a0: HTMLElement, a1: HTMLElement): void;
            blur(): void;
            focus(): void;
            getDisabled(): boolean;
            getForm(): HTMLFormElement;
            getLength(): int;
            getMultiple(): boolean;
            getName(): string;
            getOptions(): HTMLCollection;
            getSelectedIndex(): int;
            getSize(): int;
            getTabIndex(): int;
            getType(): string;
            getValue(): string;
            remove(a0: int): void;
            setDisabled(a0: boolean): void;
            setMultiple(a0: boolean): void;
            setName(a0: string): void;
            setSelectedIndex(a0: int): void;
            setSize(a0: int): void;
            setTabIndex(a0: int): void;
            setValue(a0: string): void;
          }
          interface HTMLSelectElement extends CombineTypes<[_HTMLSelectElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLStyleElement$$static extends ClassLike {
          }
          let HTMLStyleElement: _HTMLStyleElement$$static;
          interface _HTMLStyleElement {
            getDisabled(): boolean;
            getMedia(): string;
            getType(): string;
            setDisabled(a0: boolean): void;
            setMedia(a0: string): void;
            setType(a0: string): void;
          }
          interface HTMLStyleElement extends CombineTypes<[_HTMLStyleElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLTableCaptionElement$$static extends ClassLike {
          }
          let HTMLTableCaptionElement: _HTMLTableCaptionElement$$static;
          interface _HTMLTableCaptionElement {
            getAlign(): string;
            setAlign(a0: string): void;
          }
          interface HTMLTableCaptionElement extends CombineTypes<[_HTMLTableCaptionElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLTableCellElement$$static extends ClassLike {
          }
          let HTMLTableCellElement: _HTMLTableCellElement$$static;
          interface _HTMLTableCellElement {
            getAbbr(): string;
            getAlign(): string;
            getAxis(): string;
            getBgColor(): string;
            getCellIndex(): int;
            getCh(): string;
            getChOff(): string;
            getColSpan(): int;
            getHeaders(): string;
            getHeight(): string;
            getNoWrap(): boolean;
            getRowSpan(): int;
            getScope(): string;
            getVAlign(): string;
            getWidth(): string;
            setAbbr(a0: string): void;
            setAlign(a0: string): void;
            setAxis(a0: string): void;
            setBgColor(a0: string): void;
            setCh(a0: string): void;
            setChOff(a0: string): void;
            setColSpan(a0: int): void;
            setHeaders(a0: string): void;
            setHeight(a0: string): void;
            setNoWrap(a0: boolean): void;
            setRowSpan(a0: int): void;
            setScope(a0: string): void;
            setVAlign(a0: string): void;
            setWidth(a0: string): void;
          }
          interface HTMLTableCellElement extends CombineTypes<[_HTMLTableCellElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLTableColElement$$static extends ClassLike {
          }
          let HTMLTableColElement: _HTMLTableColElement$$static;
          interface _HTMLTableColElement {
            getAlign(): string;
            getCh(): string;
            getChOff(): string;
            getSpan(): int;
            getVAlign(): string;
            getWidth(): string;
            setAlign(a0: string): void;
            setCh(a0: string): void;
            setChOff(a0: string): void;
            setSpan(a0: int): void;
            setVAlign(a0: string): void;
            setWidth(a0: string): void;
          }
          interface HTMLTableColElement extends CombineTypes<[_HTMLTableColElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLTableElement$$static extends ClassLike {
          }
          let HTMLTableElement: _HTMLTableElement$$static;
          interface _HTMLTableElement {
            createCaption(): HTMLElement;
            createTFoot(): HTMLElement;
            createTHead(): HTMLElement;
            deleteCaption(): void;
            deleteRow(a0: int): void;
            deleteTFoot(): void;
            deleteTHead(): void;
            getAlign(): string;
            getBgColor(): string;
            getBorder(): string;
            getCaption(): HTMLTableCaptionElement;
            getCellPadding(): string;
            getCellSpacing(): string;
            getFrame(): string;
            getRows(): HTMLCollection;
            getRules(): string;
            getSummary(): string;
            getTBodies(): HTMLCollection;
            getTFoot(): HTMLTableSectionElement;
            getTHead(): HTMLTableSectionElement;
            getWidth(): string;
            insertRow(a0: int): HTMLElement;
            setAlign(a0: string): void;
            setBgColor(a0: string): void;
            setBorder(a0: string): void;
            setCaption(a0: HTMLTableCaptionElement): void;
            setCellPadding(a0: string): void;
            setCellSpacing(a0: string): void;
            setFrame(a0: string): void;
            setRules(a0: string): void;
            setSummary(a0: string): void;
            setTFoot(a0: HTMLTableSectionElement): void;
            setTHead(a0: HTMLTableSectionElement): void;
            setWidth(a0: string): void;
          }
          interface HTMLTableElement extends CombineTypes<[_HTMLTableElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLTableRowElement$$static extends ClassLike {
          }
          let HTMLTableRowElement: _HTMLTableRowElement$$static;
          interface _HTMLTableRowElement {
            deleteCell(a0: int): void;
            getAlign(): string;
            getBgColor(): string;
            getCells(): HTMLCollection;
            getCh(): string;
            getChOff(): string;
            getRowIndex(): int;
            getSectionRowIndex(): int;
            getVAlign(): string;
            insertCell(a0: int): HTMLElement;
            setAlign(a0: string): void;
            setBgColor(a0: string): void;
            setCh(a0: string): void;
            setChOff(a0: string): void;
            setVAlign(a0: string): void;
          }
          interface HTMLTableRowElement extends CombineTypes<[_HTMLTableRowElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLTableSectionElement$$static extends ClassLike {
          }
          let HTMLTableSectionElement: _HTMLTableSectionElement$$static;
          interface _HTMLTableSectionElement {
            deleteRow(a0: int): void;
            getAlign(): string;
            getCh(): string;
            getChOff(): string;
            getRows(): HTMLCollection;
            getVAlign(): string;
            insertRow(a0: int): HTMLElement;
            setAlign(a0: string): void;
            setCh(a0: string): void;
            setChOff(a0: string): void;
            setVAlign(a0: string): void;
          }
          interface HTMLTableSectionElement extends CombineTypes<[_HTMLTableSectionElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLTextAreaElement$$static extends ClassLike {
          }
          let HTMLTextAreaElement: _HTMLTextAreaElement$$static;
          interface _HTMLTextAreaElement {
            blur(): void;
            focus(): void;
            getAccessKey(): string;
            getCols(): int;
            getDefaultValue(): string;
            getDisabled(): boolean;
            getForm(): HTMLFormElement;
            getName(): string;
            getReadOnly(): boolean;
            getRows(): int;
            getTabIndex(): int;
            getType(): string;
            getValue(): string;
            select(): void;
            setAccessKey(a0: string): void;
            setCols(a0: int): void;
            setDefaultValue(a0: string): void;
            setDisabled(a0: boolean): void;
            setName(a0: string): void;
            setReadOnly(a0: boolean): void;
            setRows(a0: int): void;
            setTabIndex(a0: int): void;
            setValue(a0: string): void;
          }
          interface HTMLTextAreaElement extends CombineTypes<[_HTMLTextAreaElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLTitleElement$$static extends ClassLike {
          }
          let HTMLTitleElement: _HTMLTitleElement$$static;
          interface _HTMLTitleElement {
            getText(): string;
            setText(a0: string): void;
          }
          interface HTMLTitleElement extends CombineTypes<[_HTMLTitleElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
          interface _HTMLUListElement$$static extends ClassLike {
          }
          let HTMLUListElement: _HTMLUListElement$$static;
          interface _HTMLUListElement {
            getCompact(): boolean;
            getType(): string;
            setCompact(a0: boolean): void;
            setType(a0: string): void;
          }
          interface HTMLUListElement extends CombineTypes<[_HTMLUListElement, org.w3c.dom.html.HTMLElement, java.lang.Object]> {}
        }
        module stylesheets {
          interface _DocumentStyle$$static extends ClassLike {
          }
          let DocumentStyle: _DocumentStyle$$static;
          interface _DocumentStyle {
            getStyleSheets(): StyleSheetList;
(): StyleSheetList;
          }
          interface DocumentStyle extends CombineTypes<[_DocumentStyle, java.lang.Object]> {}
          interface _LinkStyle$$static extends ClassLike {
          }
          let LinkStyle: _LinkStyle$$static;
          interface _LinkStyle {
            getSheet(): StyleSheet;
(): StyleSheet;
          }
          interface LinkStyle extends CombineTypes<[_LinkStyle, java.lang.Object]> {}
          interface _MediaList$$static extends ClassLike {
          }
          let MediaList: _MediaList$$static;
          interface _MediaList {
            appendMedium(a0: string): void;
            deleteMedium(a0: string): void;
            getLength(): int;
            getMediaText(): string;
            item(a0: int): string;
            setMediaText(a0: string): void;
          }
          interface MediaList extends CombineTypes<[_MediaList, java.lang.Object]> {}
          interface _StyleSheet$$static extends ClassLike {
          }
          let StyleSheet: _StyleSheet$$static;
          interface _StyleSheet {
            getDisabled(): boolean;
            getHref(): string;
            getMedia(): MediaList;
            getOwnerNode(): Node;
            getParentStyleSheet(): StyleSheet;
            getTitle(): string;
            getType(): string;
            setDisabled(a0: boolean): void;
          }
          interface StyleSheet extends CombineTypes<[_StyleSheet, java.lang.Object]> {}
          interface _StyleSheetList$$static extends ClassLike {
          }
          let StyleSheetList: _StyleSheetList$$static;
          interface _StyleSheetList {
            getLength(): int;
            item(a0: int): StyleSheet;
          }
          interface StyleSheetList extends CombineTypes<[_StyleSheetList, java.lang.Object]> {}
        }
        module xpath {
          interface _XPathEvaluator$$static extends ClassLike {
          }
          let XPathEvaluator: _XPathEvaluator$$static;
          interface _XPathEvaluator {
            createExpression(a0: string, a1: XPathNSResolver): XPathExpression;
            createNSResolver(a0: Node): XPathNSResolver;
            evaluate(a0: string, a1: Node, a2: XPathNSResolver, a3: short, a4: any): any;
          }
          interface XPathEvaluator extends CombineTypes<[_XPathEvaluator, java.lang.Object]> {}
          interface _XPathException$$static extends ClassLike {
            readonly INVALID_EXPRESSION_ERR: short;
            readonly TYPE_ERR: short;
            _serialVersionUID: long;
            new(code: short, message: string): XPathException;
          }
          let XPathException: _XPathException$$static;
          interface _XPathException {
            code: short;
          }
          interface XPathException extends CombineTypes<[_XPathException, java.lang.RuntimeException]> {}
          interface _XPathExpression$$static extends ClassLike {
          }
          let XPathExpression: _XPathExpression$$static;
          interface _XPathExpression {
            evaluate(a0: Node, a1: short, a2: any): any;
(a0: Node, a1: short, a2: any): any;
          }
          interface XPathExpression extends CombineTypes<[_XPathExpression, java.lang.Object]> {}
          interface _XPathNSResolver$$static extends ClassLike {
          }
          let XPathNSResolver: _XPathNSResolver$$static;
          interface _XPathNSResolver {
            lookupNamespaceURI(a0: string): string;
(a0: string): string;
          }
          interface XPathNSResolver extends CombineTypes<[_XPathNSResolver, java.lang.Object]> {}
          interface _XPathNamespace$$static extends ClassLike {
            readonly XPATH_NAMESPACE_NODE: short;
          }
          let XPathNamespace: _XPathNamespace$$static;
          interface _XPathNamespace {
            getOwnerElement(): Element;
(): Element;
          }
          interface XPathNamespace extends CombineTypes<[_XPathNamespace, org.w3c.dom.Node, java.lang.Object]> {}
          interface _XPathResult$$static extends ClassLike {
            readonly ANY_TYPE: short;
            readonly ANY_UNORDERED_NODE_TYPE: short;
            readonly BOOLEAN_TYPE: short;
            readonly FIRST_ORDERED_NODE_TYPE: short;
            readonly NUMBER_TYPE: short;
            readonly ORDERED_NODE_ITERATOR_TYPE: short;
            readonly ORDERED_NODE_SNAPSHOT_TYPE: short;
            readonly STRING_TYPE: short;
            readonly UNORDERED_NODE_ITERATOR_TYPE: short;
            readonly UNORDERED_NODE_SNAPSHOT_TYPE: short;
          }
          let XPathResult: _XPathResult$$static;
          interface _XPathResult {
            getBooleanValue(): boolean;
            getInvalidIteratorState(): boolean;
            getNumberValue(): double;
            getResultType(): short;
            getSingleNodeValue(): Node;
            getSnapshotLength(): int;
            getStringValue(): string;
            iterateNext(): Node;
            snapshotItem(a0: int): Node;
          }
          interface XPathResult extends CombineTypes<[_XPathResult, java.lang.Object]> {}
        }
      }
    }
  }
}
