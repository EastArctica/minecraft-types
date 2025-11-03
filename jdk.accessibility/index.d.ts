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
      module java {
        module accessibility {
          module internal {
            interface _AccessBridge$$static extends ClassLike {
              _addNativeWindowHandler(handler: AccessBridge$NativeWindowHandler): void;
              _initStatic(): void;
              _isSysWow(): boolean;
              _registerVirtualFrame(a: javax.accessibility.Accessible, nativeWindowHandle: int): void;
              _removeNativeWindowHandler(handler: AccessBridge$NativeWindowHandler): boolean;
              _revokeVirtualFrame(a: javax.accessibility.Accessible, nativeWindowHandle: int): void;
              _CARET_EVENTS: long;
              _CARET_UPATE_EVENTS: long;
              _FOCUS_EVENTS: long;
              _FOCUS_GAINED_EVENTS: long;
              _FOCUS_LOST_EVENTS: long;
              _MENU_CANCELED_EVENTS: long;
              _MENU_DESELECTED_EVENTS: long;
              _MENU_EVENTS: long;
              _MENU_SELECTED_EVENTS: long;
              _MOUSE_CLICKED_EVENTS: long;
              _MOUSE_ENTERED_EVENTS: long;
              _MOUSE_EVENTS: long;
              _MOUSE_EXITED_EVENTS: long;
              _MOUSE_PRESSED_EVENTS: long;
              _MOUSE_RELEASED_EVENTS: long;
              _POPUPMENU_CANCELED_EVENTS: long;
              _POPUPMENU_EVENTS: long;
              _POPUPMENU_WILL_BECOME_INVISIBLE_EVENTS: long;
              _POPUPMENU_WILL_BECOME_VISIBLE_EVENTS: long;
              _PROPERTY_ACTIVEDESCENDENT_CHANGE_EVENTS: long;
              _PROPERTY_CARET_CHANGE_EVENTS: long;
              _PROPERTY_CHANGE_EVENTS: long;
              _PROPERTY_CHILD_CHANGE_EVENTS: long;
              _PROPERTY_DESCRIPTION_CHANGE_EVENTS: long;
              _PROPERTY_EVENTS: long;
              _PROPERTY_NAME_CHANGE_EVENTS: long;
              _PROPERTY_SELECTION_CHANGE_EVENTS: long;
              _PROPERTY_STATE_CHANGE_EVENTS: long;
              _PROPERTY_TEXT_CHANGE_EVENTS: long;
              _PROPERTY_VALUE_CHANGE_EVENTS: long;
              _PROPERTY_VISIBLEDATA_CHANGE_EVENTS: long;
              _contextToWindowHandleMap: java.util.concurrent.ConcurrentHashMap<javax.accessibility.AccessibleContext,int>;
              _nativeWindowHandlers: java.util.Vector<AccessBridge$NativeWindowHandler>;
              _theAccessBridge: AccessBridge;
              _windowHandleToContextMap: java.util.concurrent.ConcurrentHashMap<int,javax.accessibility.AccessibleContext>;
              new(): AccessBridge;
            }
            let AccessBridge: _AccessBridge$$static;
            interface _AccessBridge {
              __getVisibleChild(ac: javax.accessibility.AccessibleContext, index: int): void;
              __getVisibleChild(acTable: javax.accessibility.AccessibleExtendedTable, index: int): void;
              __getVisibleChildrenCount(ac: javax.accessibility.AccessibleContext): void;
              __getVisibleChildrenCount(acTable: javax.accessibility.AccessibleExtendedTable): void;
              _activateAccessibleHyperlink(ac: javax.accessibility.AccessibleContext, link: javax.accessibility.AccessibleHyperlink): boolean;
              _addAccessibilityEventNotification(type: long): void;
              _addAccessibleSelectionFromContext(ac: javax.accessibility.AccessibleContext, i: int): void;
              _addJavaEventNotification(type: long): void;
              _caretUpdate(a0: javax.swing.event.CaretEvent, a1: javax.accessibility.AccessibleContext): void;
              _clearAccessibleSelectionFromContext(ac: javax.accessibility.AccessibleContext): void;
              _controlCode(keyStroke: javax.swing.KeyStroke): int;
              _debugString(debugStr: string): void;
              _decrementReference(o: any): void;
              _doAccessibleActions(ac: javax.accessibility.AccessibleContext, name: string): boolean;
              _expandStyleConstants(as: javax.swing.text.AttributeSet): string;
              _fKeyNumber(keyStroke: javax.swing.KeyStroke): int;
              _focusGained(a0: java.awt.event.FocusEvent, a1: javax.accessibility.AccessibleContext): void;
              _focusLost(a0: java.awt.event.FocusEvent, a1: javax.accessibility.AccessibleContext): void;
              _getAccelerator(ac: javax.accessibility.AccessibleContext): javax.swing.KeyStroke;
              _getAccessibleActionFromContext(ac: javax.accessibility.AccessibleContext): javax.accessibility.AccessibleAction;
              _getAccessibleActionName(ac: javax.accessibility.AccessibleContext, index: int): string;
              _getAccessibleActionsCount(ac: javax.accessibility.AccessibleContext): int;
              _getAccessibleAttributeSetAtIndexFromContext(ac: javax.accessibility.AccessibleContext, index: int): javax.swing.text.AttributeSet;
              _getAccessibleAttributesAtIndexFromContext(ac: javax.accessibility.AccessibleContext, index: int): string;
              _getAccessibleBoundsOnScreenFromContext(ac: javax.accessibility.AccessibleContext): java.awt.Rectangle;
              _getAccessibleCaretPositionFromContext(ac: javax.accessibility.AccessibleContext): int;
              _getAccessibleCharCountFromContext(ac: javax.accessibility.AccessibleContext): int;
              _getAccessibleChildFromContext(ac: javax.accessibility.AccessibleContext, index: int): javax.accessibility.AccessibleContext;
              _getAccessibleChildrenCountFromContext(ac: javax.accessibility.AccessibleContext): int;
              _getAccessibleComponentFromContext(ac: javax.accessibility.AccessibleContext): javax.accessibility.AccessibleComponent;
              _getAccessibleContextAt(x: int, y: int, parent: javax.accessibility.AccessibleContext): javax.accessibility.AccessibleContext;
              _getAccessibleContextAt_1(x: int, y: int, parent: javax.accessibility.AccessibleContext): javax.accessibility.AccessibleContext;
              _getAccessibleContextAt_2(x: int, y: int, parent: javax.accessibility.AccessibleContext): javax.accessibility.AccessibleContext;
              _getAccessibleContextWithFocus(): javax.accessibility.AccessibleContext;
              _getAccessibleDescriptionFromContext(ac: javax.accessibility.AccessibleContext): string;
              _getAccessibleHeightFromContext(ac: javax.accessibility.AccessibleContext): int;
              _getAccessibleHeightTextRectAtIndexFromContext(ac: javax.accessibility.AccessibleContext, index: int): int;
              _getAccessibleHyperlink(hypertext: javax.accessibility.AccessibleHypertext, i: int): javax.accessibility.AccessibleHyperlink;
              _getAccessibleHyperlinkCount(ac: javax.accessibility.AccessibleContext): int;
              _getAccessibleHyperlinkEndIndex(link: javax.accessibility.AccessibleHyperlink): int;
              _getAccessibleHyperlinkStartIndex(link: javax.accessibility.AccessibleHyperlink): int;
              _getAccessibleHyperlinkText(link: javax.accessibility.AccessibleHyperlink): string;
              _getAccessibleHyperlinkURL(link: javax.accessibility.AccessibleHyperlink): string;
              _getAccessibleHypertext(ac: javax.accessibility.AccessibleContext): javax.accessibility.AccessibleHypertext;
              _getAccessibleHypertextLinkIndex(hypertext: javax.accessibility.AccessibleHypertext, charIndex: int): int;
              _getAccessibleIconDescription(ac: javax.accessibility.AccessibleContext, index: int): string;
              _getAccessibleIconHeight(ac: javax.accessibility.AccessibleContext, index: int): int;
              _getAccessibleIconWidth(ac: javax.accessibility.AccessibleContext, index: int): int;
              _getAccessibleIconsCount(ac: javax.accessibility.AccessibleContext): int;
              _getAccessibleIndexAtPointFromContext(ac: javax.accessibility.AccessibleContext, x: int, y: int): int;
              _getAccessibleIndexInParentFromContext(ac: javax.accessibility.AccessibleContext): int;
              _getAccessibleKeyBindingChar(ac: javax.accessibility.AccessibleContext, index: int): char;
              _getAccessibleKeyBindingModifiers(ac: javax.accessibility.AccessibleContext, index: int): int;
              _getAccessibleKeyBindingsCount(ac: javax.accessibility.AccessibleContext): int;
              _getAccessibleLetterAtIndexFromContext(ac: javax.accessibility.AccessibleContext, index: int): string;
              _getAccessibleNameFromContext(ac: javax.accessibility.AccessibleContext): string;
              _getAccessibleParentFromContext(ac: javax.accessibility.AccessibleContext): javax.accessibility.AccessibleContext;
              _getAccessibleRelationCount(ac: javax.accessibility.AccessibleContext): int;
              _getAccessibleRelationKey(ac: javax.accessibility.AccessibleContext, i: int): string;
              _getAccessibleRelationTarget(ac: javax.accessibility.AccessibleContext, i: int, j: int): javax.accessibility.AccessibleContext;
              _getAccessibleRelationTargetCount(ac: javax.accessibility.AccessibleContext, i: int): int;
              _getAccessibleRoleStringFromContext(ac: javax.accessibility.AccessibleContext): string;
              _getAccessibleRoleStringFromContext_en_US(ac: javax.accessibility.AccessibleContext): string;
              _getAccessibleSelectionCountFromContext(ac: javax.accessibility.AccessibleContext): int;
              _getAccessibleSelectionFromContext(ac: javax.accessibility.AccessibleContext): javax.accessibility.AccessibleSelection;
              _getAccessibleSelectionFromContext(ac: javax.accessibility.AccessibleContext, i: int): javax.accessibility.AccessibleContext;
              _getAccessibleSentenceAtIndexFromContext(ac: javax.accessibility.AccessibleContext, index: int): string;
              _getAccessibleStatesStringFromContext(ac: javax.accessibility.AccessibleContext): string;
              _getAccessibleStatesStringFromContext_en_US(ac: javax.accessibility.AccessibleContext): string;
              _getAccessibleTableCellAccessibleContext(at: javax.accessibility.AccessibleTable, row: int, column: int): javax.accessibility.AccessibleContext;
              _getAccessibleTableCellColumnExtent(at: javax.accessibility.AccessibleTable, row: int, column: int): int;
              _getAccessibleTableCellIndex(at: javax.accessibility.AccessibleTable, row: int, column: int): int;
              _getAccessibleTableCellRowExtent(at: javax.accessibility.AccessibleTable, row: int, column: int): int;
              _getAccessibleTableColumn(at: javax.accessibility.AccessibleTable, index: int): int;
              _getAccessibleTableColumnCount(ac: javax.accessibility.AccessibleContext): int;
              _getAccessibleTableColumnDescription(at: javax.accessibility.AccessibleTable, column: int): javax.accessibility.AccessibleContext;
              _getAccessibleTableColumnHeader(ac: javax.accessibility.AccessibleContext): javax.accessibility.AccessibleTable;
              _getAccessibleTableColumnHeaderColumnCount(ac: javax.accessibility.AccessibleContext): int;
              _getAccessibleTableColumnHeaderRowCount(ac: javax.accessibility.AccessibleContext): int;
              _getAccessibleTableColumnSelectionCount(at: javax.accessibility.AccessibleTable): int;
              _getAccessibleTableColumnSelections(at: javax.accessibility.AccessibleTable, i: int): int;
              _getAccessibleTableFromContext(ac: javax.accessibility.AccessibleContext): javax.accessibility.AccessibleTable;
              _getAccessibleTableIndex(at: javax.accessibility.AccessibleTable, row: int, column: int): int;
              _getAccessibleTableRow(at: javax.accessibility.AccessibleTable, index: int): int;
              _getAccessibleTableRowCount(ac: javax.accessibility.AccessibleContext): int;
              _getAccessibleTableRowDescription(table: javax.accessibility.AccessibleTable, row: int): javax.accessibility.AccessibleContext;
              _getAccessibleTableRowHeader(ac: javax.accessibility.AccessibleContext): javax.accessibility.AccessibleTable;
              _getAccessibleTableRowHeaderColumnCount(ac: javax.accessibility.AccessibleContext): int;
              _getAccessibleTableRowHeaderRowCount(ac: javax.accessibility.AccessibleContext): int;
              _getAccessibleTableRowSelectionCount(at: javax.accessibility.AccessibleTable): int;
              _getAccessibleTableRowSelections(at: javax.accessibility.AccessibleTable, i: int): int;
              _getAccessibleTextFromContext(ac: javax.accessibility.AccessibleContext): javax.accessibility.AccessibleText;
              _getAccessibleTextLineLeftBoundsFromContext(ac: javax.accessibility.AccessibleContext, index: int): int;
              _getAccessibleTextLineRightBoundsFromContext(ac: javax.accessibility.AccessibleContext, index: int): int;
              _getAccessibleTextRangeFromContext(ac: javax.accessibility.AccessibleContext, start: int, end: int): string;
              _getAccessibleTextRectAtIndexFromContext(ac: javax.accessibility.AccessibleContext, index: int): java.awt.Rectangle;
              _getAccessibleTextSelectedTextFromContext(ac: javax.accessibility.AccessibleContext): string;
              _getAccessibleTextSelectionEndFromContext(ac: javax.accessibility.AccessibleContext): int;
              _getAccessibleTextSelectionStartFromContext(ac: javax.accessibility.AccessibleContext): int;
              _getAccessibleValueFromContext(ac: javax.accessibility.AccessibleContext): javax.accessibility.AccessibleValue;
              _getAccessibleWidthFromContext(ac: javax.accessibility.AccessibleContext): int;
              _getAccessibleWidthTextRectAtIndexFromContext(ac: javax.accessibility.AccessibleContext, index: int): int;
              _getAccessibleWordAtIndexFromContext(ac: javax.accessibility.AccessibleContext, index: int): string;
              _getAccessibleXcoordFromContext(ac: javax.accessibility.AccessibleContext): int;
              _getAccessibleXcoordTextRectAtIndexFromContext(ac: javax.accessibility.AccessibleContext, index: int): int;
              _getAccessibleYcoordFromContext(ac: javax.accessibility.AccessibleContext): int;
              _getAccessibleYcoordTextRectAtIndexFromContext(ac: javax.accessibility.AccessibleContext, index: int): int;
              _getActiveDescendent(ac: javax.accessibility.AccessibleContext): javax.accessibility.AccessibleContext;
              _getAlignmentFromAttributeSet(as: javax.swing.text.AttributeSet): int;
              _getBackgroundColorFromAttributeSet(as: javax.swing.text.AttributeSet): string;
              _getBidiLevelFromAttributeSet(as: javax.swing.text.AttributeSet): int;
              _getBoldFromAttributeSet(as: javax.swing.text.AttributeSet): boolean;
              _getCaretLocation(ac: javax.accessibility.AccessibleContext): java.awt.Rectangle;
              _getCaretLocationHeight(ac: javax.accessibility.AccessibleContext): int;
              _getCaretLocationWidth(ac: javax.accessibility.AccessibleContext): int;
              _getCaretLocationX(ac: javax.accessibility.AccessibleContext): int;
              _getCaretLocationY(ac: javax.accessibility.AccessibleContext): int;
              _getContextFromAccessibleTable(at: javax.accessibility.AccessibleTable): javax.accessibility.AccessibleContext;
              _getContextFromNativeWindowHandle(nativeHandle: int): javax.accessibility.AccessibleContext;
              _getCurrentAccessibleValueFromContext(ac: javax.accessibility.AccessibleContext): string;
              _getFirstLineIndentFromAttributeSet(as: javax.swing.text.AttributeSet): float;
              _getFontFamilyFromAttributeSet(as: javax.swing.text.AttributeSet): string;
              _getFontSizeFromAttributeSet(as: javax.swing.text.AttributeSet): int;
              _getForegroundColorFromAttributeSet(as: javax.swing.text.AttributeSet): string;
              _getInternalFrame(ac: javax.accessibility.AccessibleContext): javax.accessibility.AccessibleContext;
              _getItalicFromAttributeSet(as: javax.swing.text.AttributeSet): boolean;
              _getJAWSAccessibleName(ac: javax.accessibility.AccessibleContext): string;
              _getJavaVersionProperty(): string;
              _getKeyChar(keyStroke: javax.swing.KeyStroke): char;
              _getLeftIndentFromAttributeSet(as: javax.swing.text.AttributeSet): float;
              _getLineSpacingFromAttributeSet(as: javax.swing.text.AttributeSet): float;
              _getMaximumAccessibleValueFromContext(ac: javax.accessibility.AccessibleContext): string;
              _getMinimumAccessibleValueFromContext(ac: javax.accessibility.AccessibleContext): string;
              _getMnemonic(ac: javax.accessibility.AccessibleContext): javax.swing.KeyStroke;
              _getModifiers(keyStroke: javax.swing.KeyStroke): int;
              _getNativeWindowHandleFromContext(ac: javax.accessibility.AccessibleContext): int;
              _getObjectDepth(ac: javax.accessibility.AccessibleContext): int;
              _getParentWithRole(ac: javax.accessibility.AccessibleContext, roleName: string): javax.accessibility.AccessibleContext;
              _getParentWithRoleElseRoot(ac: javax.accessibility.AccessibleContext, roleName: string): javax.accessibility.AccessibleContext;
              _getRightIndentFromAttributeSet(as: javax.swing.text.AttributeSet): float;
              _getRootAccessibleContext(ac: javax.accessibility.AccessibleContext): javax.accessibility.AccessibleContext;
              _getSpaceAboveFromAttributeSet(as: javax.swing.text.AttributeSet): float;
              _getSpaceBelowFromAttributeSet(as: javax.swing.text.AttributeSet): float;
              _getStrikethroughFromAttributeSet(as: javax.swing.text.AttributeSet): boolean;
              _getSubscriptFromAttributeSet(as: javax.swing.text.AttributeSet): boolean;
              _getSuperscriptFromAttributeSet(as: javax.swing.text.AttributeSet): boolean;
              _getTopLevelObject(ac: javax.accessibility.AccessibleContext): javax.accessibility.AccessibleContext;
              _getUnderlineFromAttributeSet(as: javax.swing.text.AttributeSet): boolean;
              _getVirtualAccessibleNameFromContext(ac: javax.accessibility.AccessibleContext): string;
              _getVisibleChild(ac: javax.accessibility.AccessibleContext, index: int): javax.accessibility.AccessibleContext;
              _getVisibleChildrenCount(ac: javax.accessibility.AccessibleContext): int;
              _initAccessibleRoleMap(): void;
              _initHWNDcalls(): void;
              _isAccessibleChildSelectedFromContext(ac: javax.accessibility.AccessibleContext, i: int): boolean;
              _isAccessibleTableCellSelected(at: javax.accessibility.AccessibleTable, row: int, column: int): boolean;
              _isAccessibleTableColumnSelected(at: javax.accessibility.AccessibleTable, column: int): boolean;
              _isAccessibleTableRowSelected(at: javax.accessibility.AccessibleTable, row: int): boolean;
              _isJavaWindow(nativeHandle: int): boolean;
              _javaShutdown(): void;
              _jawtGetComponentFromNativeWindowHandle(a0: int): java.awt.Component;
              _jawtGetNativeWindowHandleFromComponent(a0: java.awt.Component): int;
              _menuCanceled(a0: javax.swing.event.MenuEvent, a1: javax.accessibility.AccessibleContext): void;
              _menuDeselected(a0: javax.swing.event.MenuEvent, a1: javax.accessibility.AccessibleContext): void;
              _menuSelected(a0: javax.swing.event.MenuEvent, a1: javax.accessibility.AccessibleContext): void;
              _mouseClicked(a0: java.awt.event.MouseEvent, a1: javax.accessibility.AccessibleContext): void;
              _mouseEntered(a0: java.awt.event.MouseEvent, a1: javax.accessibility.AccessibleContext): void;
              _mouseExited(a0: java.awt.event.MouseEvent, a1: javax.accessibility.AccessibleContext): void;
              _mousePressed(a0: java.awt.event.MouseEvent, a1: javax.accessibility.AccessibleContext): void;
              _mouseReleased(a0: java.awt.event.MouseEvent, a1: javax.accessibility.AccessibleContext): void;
              _popupMenuCanceled(a0: javax.swing.event.PopupMenuEvent, a1: javax.accessibility.AccessibleContext): void;
              _popupMenuWillBecomeInvisible(a0: javax.swing.event.PopupMenuEvent, a1: javax.accessibility.AccessibleContext): void;
              _popupMenuWillBecomeVisible(a0: javax.swing.event.PopupMenuEvent, a1: javax.accessibility.AccessibleContext): void;
              _propertyActiveDescendentChange(a0: java.beans.PropertyChangeEvent, a1: javax.accessibility.AccessibleContext, a2: javax.accessibility.AccessibleContext, a3: javax.accessibility.AccessibleContext): void;
              _propertyCaretChange(a0: java.beans.PropertyChangeEvent, a1: javax.accessibility.AccessibleContext, a2: int, a3: int): void;
              _propertyChildChange(a0: java.beans.PropertyChangeEvent, a1: javax.accessibility.AccessibleContext, a2: javax.accessibility.AccessibleContext, a3: javax.accessibility.AccessibleContext): void;
              _propertyDescriptionChange(a0: java.beans.PropertyChangeEvent, a1: javax.accessibility.AccessibleContext, a2: string, a3: string): void;
              _propertyNameChange(a0: java.beans.PropertyChangeEvent, a1: javax.accessibility.AccessibleContext, a2: string, a3: string): void;
              _propertySelectionChange(a0: java.beans.PropertyChangeEvent, a1: javax.accessibility.AccessibleContext): void;
              _propertyStateChange(a0: java.beans.PropertyChangeEvent, a1: javax.accessibility.AccessibleContext, a2: string, a3: string): void;
              _propertyTextChange(a0: java.beans.PropertyChangeEvent, a1: javax.accessibility.AccessibleContext): void;
              _propertyValueChange(a0: java.beans.PropertyChangeEvent, a1: javax.accessibility.AccessibleContext, a2: string, a3: string): void;
              _propertyVisibleDataChange(a0: java.beans.PropertyChangeEvent, a1: javax.accessibility.AccessibleContext): void;
              _removeAccessibilityEventNotification(type: long): void;
              _removeAccessibleSelectionFromContext(ac: javax.accessibility.AccessibleContext, i: int): void;
              _removeJavaEventNotification(type: long): void;
              _requestFocus(ac: javax.accessibility.AccessibleContext): boolean;
              _runDLL(): void;
              _saveContextToWindowHandleMapping(ac: javax.accessibility.AccessibleContext, nativeHandle: int): void;
              _selectAllAccessibleSelectionFromContext(ac: javax.accessibility.AccessibleContext): void;
              _selectTextRange(ac: javax.accessibility.AccessibleContext, startIndex: int, endIndex: int): boolean;
              _sendDebugString(a0: string): void;
              _setCaretPosition(ac: javax.accessibility.AccessibleContext, position: int): boolean;
              _setTextContents(ac: javax.accessibility.AccessibleContext, text: string): boolean;
              __currentVisibleIndex: int;
              __foundVisibleChild: boolean;
              __visibleChild: javax.accessibility.AccessibleContext;
              __visibleChildrenCount: int;
              _accessibleRoleMap: java.util.concurrent.ConcurrentHashMap<string,javax.accessibility.AccessibleRole>;
              _allAccessibleRoles: javax.accessibility.AccessibleRole[];
              _eventHandler: AccessBridge$EventHandler;
              _extendedVirtualNameSearchRoles: java.util.ArrayList<javax.accessibility.AccessibleRole>;
              _hashtab: java.util.concurrent.ConcurrentHashMap<javax.accessibility.AccessibleTable,javax.accessibility.AccessibleContext>;
              _hyperLinkContextMap: java.util.Map<javax.accessibility.AccessibleHyperlink,javax.accessibility.AccessibleContext>;
              _hyperTextContextMap: java.util.Map<javax.accessibility.AccessibleHypertext,javax.accessibility.AccessibleContext>;
              _javaGetComponentFromNativeWindowHandleMethod: java.lang.reflect.Method;
              _javaGetNativeWindowHandleFromComponentMethod: java.lang.reflect.Method;
              _noExtendedVirtualNameSearchParentRoles: java.util.ArrayList<javax.accessibility.AccessibleRole>;
              _references: AccessBridge$ObjectReferences;
              _toolkit: java.awt.Toolkit;
            }
            interface AccessBridge extends CombineTypes<[_AccessBridge, java.lang.Object]> {}
            interface _AccessBridge$AccessibilityGraphicsEnvironment$$static extends ClassLike {
              _clipRound(coordinate: double): int;
              _containsDeviceSpacePoint(config: java.awt.GraphicsConfiguration, x: double, a2: double): boolean;
              _containsUserSpacePoint(config: java.awt.GraphicsConfiguration, x: double, a2: double): boolean;
              getGraphicsConfigurationAtDevicePoint(x: double, a1: double): java.awt.GraphicsConfiguration;
              getGraphicsConfigurationAtDevicePoint(current: java.awt.GraphicsConfiguration, x: double, a2: double): java.awt.GraphicsConfiguration;
              getGraphicsConfigurationAtPoint(x: double, a1: double): java.awt.GraphicsConfiguration;
              getGraphicsConfigurationAtPoint(current: java.awt.GraphicsConfiguration, x: double, a2: double): java.awt.GraphicsConfiguration;
              toDeviceSpaceAbs(rect: java.awt.Rectangle): java.awt.Rectangle;
              toDeviceSpaceAbs(gc: java.awt.GraphicsConfiguration, x: int, y: int, w: int, h: int): java.awt.Rectangle;
              toUserSpace(x: int, y: int): java.awt.Point;
              toUserSpace(gc: java.awt.GraphicsConfiguration, x: int, y: int): java.awt.Point;
            }
            let AccessBridge$AccessibilityGraphicsEnvironment: _AccessBridge$AccessibilityGraphicsEnvironment$$static;
            interface _AccessBridge$AccessibilityGraphicsEnvironment {
            }
            interface AccessBridge$AccessibilityGraphicsEnvironment extends CombineTypes<[_AccessBridge$AccessibilityGraphicsEnvironment, java.awt.GraphicsEnvironment]> {}
            interface _AccessBridge$AccessibleJTreeNode$$static extends ClassLike {
              _new(a0: AccessBridge, t: javax.swing.JTree, p: javax.swing.tree.TreePath, ap: javax.accessibility.Accessible): AccessBridge$AccessibleJTreeNode;
            }
            let AccessBridge$AccessibleJTreeNode: _AccessBridge$AccessibleJTreeNode$$static;
            interface _AccessBridge$AccessibleJTreeNode {
              addAccessibleSelection(i: int): void;
              addFocusListener(l: java.awt.event.FocusListener): void;
              addPropertyChangeListener(l: java.beans.PropertyChangeListener): void;
              clearAccessibleSelection(): void;
              contains(p: java.awt.Point): boolean;
              doAccessibleAction(i: int): boolean;
              getAccessibleAction(): javax.accessibility.AccessibleAction;
              getAccessibleActionCount(): int;
              getAccessibleActionDescription(i: int): string;
              getAccessibleAt(p: java.awt.Point): javax.accessibility.Accessible;
              getAccessibleChild(i: int): javax.accessibility.Accessible;
              getAccessibleChildrenCount(): int;
              getAccessibleComponent(): javax.accessibility.AccessibleComponent;
              getAccessibleContext(): javax.accessibility.AccessibleContext;
              getAccessibleDescription(): string;
              getAccessibleIndexInParent(): int;
              getAccessibleName(): string;
              getAccessibleParent(): javax.accessibility.Accessible;
              getAccessibleRole(): javax.accessibility.AccessibleRole;
              getAccessibleSelection(): javax.accessibility.AccessibleSelection;
              getAccessibleSelection(i: int): javax.accessibility.Accessible;
              getAccessibleSelectionCount(): int;
              getAccessibleStateSet(): javax.accessibility.AccessibleStateSet;
              getAccessibleText(): javax.accessibility.AccessibleText;
              getAccessibleValue(): javax.accessibility.AccessibleValue;
              getBackground(): java.awt.Color;
              getBounds(): java.awt.Rectangle;
              _getChildTreePath(i: int): javax.swing.tree.TreePath;
              _getCurrentAccessibleContext(): javax.accessibility.AccessibleContext;
              _getCurrentComponent(): java.awt.Component;
              getCursor(): java.awt.Cursor;
              getFont(): java.awt.Font;
              getFontMetrics(f: java.awt.Font): java.awt.FontMetrics;
              getForeground(): java.awt.Color;
              getLocale(): java.util.Locale;
              getLocation(): java.awt.Point;
              _getLocationInJTree(): java.awt.Point;
              getLocationOnScreen(): java.awt.Point;
              getSize(): java.awt.Dimension;
              isAccessibleChildSelected(i: int): boolean;
              isEnabled(): boolean;
              isFocusTraversable(): boolean;
              isShowing(): boolean;
              isVisible(): boolean;
              removeAccessibleSelection(i: int): void;
              removeFocusListener(l: java.awt.event.FocusListener): void;
              removePropertyChangeListener(l: java.beans.PropertyChangeListener): void;
              requestFocus(): void;
              selectAllAccessibleSelection(): void;
              setAccessibleDescription(s: string): void;
              setAccessibleName(s: string): void;
              setBackground(c: java.awt.Color): void;
              setBounds(r: java.awt.Rectangle): void;
              setCursor(c: java.awt.Cursor): void;
              setEnabled(b: boolean): void;
              setFont(f: java.awt.Font): void;
              setForeground(c: java.awt.Color): void;
              setLocation(p: java.awt.Point): void;
              setSize(d: java.awt.Dimension): void;
              setVisible(b: boolean): void;
              _accessibleParent: javax.accessibility.Accessible;
              _index: int;
              _isLeaf: boolean;
              _obj: any;
              _path: javax.swing.tree.TreePath;
              _this$0: AccessBridge;
              _tree: javax.swing.JTree;
              _treeModel: javax.swing.tree.TreeModel;
            }
            interface AccessBridge$AccessibleJTreeNode extends CombineTypes<[_AccessBridge$AccessibleJTreeNode, javax.accessibility.AccessibleSelection, javax.accessibility.AccessibleAction, javax.accessibility.AccessibleContext, javax.accessibility.AccessibleComponent, javax.accessibility.Accessible]> {}
            interface _AccessBridge$DefaultNativeWindowHandler$$static extends ClassLike {
            }
            let AccessBridge$DefaultNativeWindowHandler: _AccessBridge$DefaultNativeWindowHandler$$static;
            interface _AccessBridge$DefaultNativeWindowHandler {
              getAccessibleFromNativeWindowHandle(nativeHandle: int): javax.accessibility.Accessible;
              _this$0: AccessBridge;
            }
            interface AccessBridge$DefaultNativeWindowHandler extends CombineTypes<[_AccessBridge$DefaultNativeWindowHandler, java.lang.Object, com.sun.java.accessibility.internal.AccessBridge$NativeWindowHandler]> {}
            interface _AccessBridge$EventHandler$$static extends ClassLike {
              _new(a0: AccessBridge, bridge: AccessBridge): AccessBridge$EventHandler;
            }
            let AccessBridge$EventHandler: _AccessBridge$EventHandler$$static;
            interface _AccessBridge$EventHandler {
              _addAccessibilityEventNotification(type: long): void;
              _addJavaEventNotification(type: long): void;
              caretUpdate(e: javax.swing.event.CaretEvent): void;
              focusGained(e: java.awt.event.FocusEvent): void;
              focusLost(e: java.awt.event.FocusEvent): void;
              _handleActiveDescendentEvent(e: java.beans.PropertyChangeEvent, ac: javax.accessibility.AccessibleContext): void;
              menuCanceled(e: javax.swing.event.MenuEvent): void;
              menuDeselected(e: javax.swing.event.MenuEvent): void;
              menuSelected(e: javax.swing.event.MenuEvent): void;
              mouseClicked(e: java.awt.event.MouseEvent): void;
              mouseEntered(e: java.awt.event.MouseEvent): void;
              mouseExited(e: java.awt.event.MouseEvent): void;
              mousePressed(e: java.awt.event.MouseEvent): void;
              mouseReleased(e: java.awt.event.MouseEvent): void;
              popupMenuCanceled(e: javax.swing.event.PopupMenuEvent): void;
              popupMenuWillBecomeInvisible(e: javax.swing.event.PopupMenuEvent): void;
              popupMenuWillBecomeVisible(e: javax.swing.event.PopupMenuEvent): void;
              _processFocusGained(): void;
              propertyChange(e: java.beans.PropertyChangeEvent): void;
              _removeAccessibilityEventNotification(type: long): void;
              _removeJavaEventNotification(type: long): void;
              stateChanged(e: javax.swing.event.ChangeEvent): void;
              windowActivated(e: java.awt.event.WindowEvent): void;
              windowClosed(e: java.awt.event.WindowEvent): void;
              windowClosing(e: java.awt.event.WindowEvent): void;
              windowDeactivated(e: java.awt.event.WindowEvent): void;
              windowDeiconified(e: java.awt.event.WindowEvent): void;
              windowIconified(e: java.awt.event.WindowEvent): void;
              windowOpened(e: java.awt.event.WindowEvent): void;
              _accessBridge: AccessBridge;
              _accessibilityEventMask: long;
              _javaEventMask: long;
              _prevAC: javax.accessibility.AccessibleContext;
              _stateChangeListenerAdded: boolean;
              _this$0: AccessBridge;
            }
            interface AccessBridge$EventHandler extends CombineTypes<[_AccessBridge$EventHandler, java.awt.event.FocusListener, java.beans.PropertyChangeListener, java.awt.event.WindowListener, java.lang.Object, javax.swing.event.CaretListener, javax.swing.event.PopupMenuListener, javax.swing.event.ChangeListener, java.awt.event.MouseListener, javax.swing.event.MenuListener]> {}
            interface _AccessBridge$InvocationUtils$$static extends ClassLike {
              invokeAndWait<T>(callable: java.util.concurrent.Callable<T>, accessibleTable: javax.accessibility.AccessibleExtendedTable): T;
              invokeAndWait<T>(callable: java.util.concurrent.Callable<T>, accessible: javax.accessibility.Accessible): T;
              invokeAndWait<T>(callable: java.util.concurrent.Callable<T>, component: java.awt.Component): T;
              invokeAndWait<T>(callable: java.util.concurrent.Callable<T>, accessibleContext: javax.accessibility.AccessibleContext): T;
              _invokeAndWait<T>(callable: java.util.concurrent.Callable<T>, targetAppContext: sun.awt.AppContext): T;
              _invokeAndWait(runnable: java.lang.Runnable, appContext: sun.awt.AppContext): void;
              registerAccessibleContext(accessibleContext: javax.accessibility.AccessibleContext, targetContext: sun.awt.AppContext): void;
              _updateAppContextMap<T>(accessibleContext: T, targetContext: sun.awt.AppContext): void;
            }
            let AccessBridge$InvocationUtils: _AccessBridge$InvocationUtils$$static;
            interface _AccessBridge$InvocationUtils {
            }
            interface AccessBridge$InvocationUtils extends CombineTypes<[_AccessBridge$InvocationUtils, java.lang.Object]> {}
            interface _AccessBridge$InvocationUtils$CallableWrapper$$static<T> extends ClassLike {
              _new(callable: java.util.concurrent.Callable<T>): AccessBridge$InvocationUtils$CallableWrapper<T>;
            }
            let AccessBridge$InvocationUtils$CallableWrapper: _AccessBridge$InvocationUtils$CallableWrapper$$static<T>;
            interface _AccessBridge$InvocationUtils$CallableWrapper<T> {
              _getResult(): T;
              run(): void;
              _callable: java.util.concurrent.Callable<T>;
              _e: java.lang.Exception;
              _object: T;
            }
            interface AccessBridge$InvocationUtils$CallableWrapper<T> extends CombineTypes<[_AccessBridge$InvocationUtils$CallableWrapper<T>, java.lang.Object, java.lang.Runnable]> {}
            interface _AccessBridge$NativeWindowHandler$$static extends ClassLike {
            }
            let AccessBridge$NativeWindowHandler: _AccessBridge$NativeWindowHandler$$static;
            interface _AccessBridge$NativeWindowHandler {
              getAccessibleFromNativeWindowHandle(a0: int): javax.accessibility.Accessible;
(a0: int): javax.accessibility.Accessible;
            }
            interface AccessBridge$NativeWindowHandler extends CombineTypes<[_AccessBridge$NativeWindowHandler, java.lang.Object]> {}
            interface _AccessBridge$ObjectReferences$$static extends ClassLike {
              _new(a0: AccessBridge): AccessBridge$ObjectReferences;
            }
            let AccessBridge$ObjectReferences: _AccessBridge$ObjectReferences$$static;
            interface _AccessBridge$ObjectReferences {
              _decrement(o: any): void;
              _dump(): string;
              _increment(o: any): void;
              _refs: java.util.concurrent.ConcurrentHashMap<any,AccessBridge$ObjectReferences$Reference>;
              _this$0: AccessBridge;
            }
            interface AccessBridge$ObjectReferences extends CombineTypes<[_AccessBridge$ObjectReferences, java.lang.Object]> {}
            interface _AccessBridge$ObjectReferences$Reference$$static extends ClassLike {
              _new(a0: AccessBridge$ObjectReferences, i: int): AccessBridge$ObjectReferences$Reference;
            }
            let AccessBridge$ObjectReferences$Reference: _AccessBridge$ObjectReferences$Reference$$static;
            interface _AccessBridge$ObjectReferences$Reference {
              toString(): string;
              _value: int;
            }
            interface AccessBridge$ObjectReferences$Reference extends CombineTypes<[_AccessBridge$ObjectReferences$Reference, java.lang.Object]> {}
            interface _AccessBridge$dllRunner$$static extends ClassLike {
            }
            let AccessBridge$dllRunner: _AccessBridge$dllRunner$$static;
            interface _AccessBridge$dllRunner {
              run(): void;
              _this$0: AccessBridge;
            }
            interface AccessBridge$dllRunner extends CombineTypes<[_AccessBridge$dllRunner, java.lang.Object, java.lang.Runnable]> {}
            interface _AccessBridge$shutdownHook$$static extends ClassLike {
            }
            let AccessBridge$shutdownHook: _AccessBridge$shutdownHook$$static;
            interface _AccessBridge$shutdownHook {
              run(): void;
              _this$0: AccessBridge;
            }
            interface AccessBridge$shutdownHook extends CombineTypes<[_AccessBridge$shutdownHook, java.lang.Object, java.lang.Runnable]> {}
            interface _ProviderImpl$$static extends ClassLike {
              new(): ProviderImpl;
            }
            let ProviderImpl: _ProviderImpl$$static;
            interface _ProviderImpl {
              activate(): void;
              getName(): string;
              _name: string;
            }
            interface ProviderImpl extends CombineTypes<[_ProviderImpl, javax.accessibility.AccessibilityProvider]> {}
          }
          module util {
            module internal {
              interface _ButtonTranslator$$static extends ClassLike {
                new(): ButtonTranslator;
              }
              let ButtonTranslator: _ButtonTranslator$$static;
              interface _ButtonTranslator {
                getAccessibleName(): string;
                getAccessibleRole(): javax.accessibility.AccessibleRole;
                setAccessibleName(s: string): void;
              }
              interface ButtonTranslator extends CombineTypes<[_ButtonTranslator, com.sun.java.accessibility.util.Translator]> {}
              interface _CheckboxTranslator$$static extends ClassLike {
                new(): CheckboxTranslator;
              }
              let CheckboxTranslator: _CheckboxTranslator$$static;
              interface _CheckboxTranslator {
                getAccessibleName(): string;
                getAccessibleRole(): javax.accessibility.AccessibleRole;
                getAccessibleStateSet(): javax.accessibility.AccessibleStateSet;
                setAccessibleName(s: string): void;
              }
              interface CheckboxTranslator extends CombineTypes<[_CheckboxTranslator, com.sun.java.accessibility.util.Translator]> {}
              interface _LabelTranslator$$static extends ClassLike {
                new(): LabelTranslator;
              }
              let LabelTranslator: _LabelTranslator$$static;
              interface _LabelTranslator {
                getAccessibleName(): string;
                getAccessibleRole(): javax.accessibility.AccessibleRole;
                setAccessibleName(s: string): void;
              }
              interface LabelTranslator extends CombineTypes<[_LabelTranslator, com.sun.java.accessibility.util.Translator]> {}
              interface _ListTranslator$$static extends ClassLike {
                new(): ListTranslator;
              }
              let ListTranslator: _ListTranslator$$static;
              interface _ListTranslator {
                getAccessibleRole(): javax.accessibility.AccessibleRole;
                getAccessibleStateSet(): javax.accessibility.AccessibleStateSet;
              }
              interface ListTranslator extends CombineTypes<[_ListTranslator, com.sun.java.accessibility.util.Translator]> {}
              interface _TextComponentTranslator$$static extends ClassLike {
                new(): TextComponentTranslator;
              }
              let TextComponentTranslator: _TextComponentTranslator$$static;
              interface _TextComponentTranslator {
                getAccessibleRole(): javax.accessibility.AccessibleRole;
              }
              interface TextComponentTranslator extends CombineTypes<[_TextComponentTranslator, com.sun.java.accessibility.util.Translator]> {}
            }
            interface _AWTEventMonitor$$static extends ClassLike {
              addActionListener(l: java.awt.event.ActionListener): void;
              addAdjustmentListener(l: java.awt.event.AdjustmentListener): void;
              addComponentListener(l: java.awt.event.ComponentListener): void;
              addContainerListener(l: java.awt.event.ContainerListener): void;
              addFocusListener(l: java.awt.event.FocusListener): void;
              addItemListener(l: java.awt.event.ItemListener): void;
              addKeyListener(l: java.awt.event.KeyListener): void;
              addMouseListener(l: java.awt.event.MouseListener): void;
              addMouseMotionListener(l: java.awt.event.MouseMotionListener): void;
              addTextListener(l: java.awt.event.TextListener): void;
              addWindowListener(l: java.awt.event.WindowListener): void;
              _checkInstallPermission(): void;
              getComponentWithFocus(): java.awt.Component;
              removeActionListener(l: java.awt.event.ActionListener): void;
              removeAdjustmentListener(l: java.awt.event.AdjustmentListener): void;
              removeComponentListener(l: java.awt.event.ComponentListener): void;
              removeContainerListener(l: java.awt.event.ContainerListener): void;
              removeFocusListener(l: java.awt.event.FocusListener): void;
              removeItemListener(l: java.awt.event.ItemListener): void;
              removeKeyListener(l: java.awt.event.KeyListener): void;
              removeMouseListener(l: java.awt.event.MouseListener): void;
              removeMouseMotionListener(l: java.awt.event.MouseMotionListener): void;
              removeTextListener(l: java.awt.event.TextListener): void;
              removeWindowListener(l: java.awt.event.WindowListener): void;
              _actionListener: java.awt.event.ActionListener;
              _adjustmentListener: java.awt.event.AdjustmentListener;
              _awtListener: AWTEventMonitor$AWTEventsListener;
              _componentListener: java.awt.event.ComponentListener;
              _componentWithFocus: java.awt.Component;
              _containerListener: java.awt.event.ContainerListener;
              _focusListener: java.awt.event.FocusListener;
              _itemListener: java.awt.event.ItemListener;
              _keyListener: java.awt.event.KeyListener;
              _mouseListener: java.awt.event.MouseListener;
              _mouseMotionListener: java.awt.event.MouseMotionListener;
              _textListener: java.awt.event.TextListener;
              _windowListener: java.awt.event.WindowListener;
              new(): AWTEventMonitor;
            }
            let AWTEventMonitor: _AWTEventMonitor$$static;
            interface _AWTEventMonitor {
            }
            interface AWTEventMonitor extends CombineTypes<[_AWTEventMonitor, java.lang.Object]> {}
            interface _AWTEventMonitor$AWTEventsListener$$static extends ClassLike {
              new(): AWTEventMonitor$AWTEventsListener;
            }
            let AWTEventMonitor$AWTEventsListener: _AWTEventMonitor$AWTEventsListener$$static;
            interface _AWTEventMonitor$AWTEventsListener {
              actionPerformed(e: java.awt.event.ActionEvent): void;
              adjustmentValueChanged(e: java.awt.event.AdjustmentEvent): void;
              componentAdded(e: java.awt.event.ContainerEvent): void;
              componentHidden(e: java.awt.event.ComponentEvent): void;
              componentMoved(e: java.awt.event.ComponentEvent): void;
              componentRemoved(e: java.awt.event.ContainerEvent): void;
              componentResized(e: java.awt.event.ComponentEvent): void;
              componentShown(e: java.awt.event.ComponentEvent): void;
              focusGained(e: java.awt.event.FocusEvent): void;
              focusLost(e: java.awt.event.FocusEvent): void;
              _initializeIntrospection(): boolean;
              _installListeners(): void;
              _installListeners(eventID: int): void;
              _installListeners(c: java.awt.Component): void;
              _installListeners(c: java.awt.Component, eventID: int): void;
              itemStateChanged(e: java.awt.event.ItemEvent): void;
              keyPressed(e: java.awt.event.KeyEvent): void;
              keyReleased(e: java.awt.event.KeyEvent): void;
              keyTyped(e: java.awt.event.KeyEvent): void;
              mouseClicked(e: java.awt.event.MouseEvent): void;
              mouseDragged(e: java.awt.event.MouseEvent): void;
              mouseEntered(e: java.awt.event.MouseEvent): void;
              mouseExited(e: java.awt.event.MouseEvent): void;
              mouseMoved(e: java.awt.event.MouseEvent): void;
              mousePressed(e: java.awt.event.MouseEvent): void;
              mouseReleased(e: java.awt.event.MouseEvent): void;
              _processFocusGained(): void;
              _removeListeners(eventID: int): void;
              _removeListeners(c: java.awt.Component): void;
              _removeListeners(c: java.awt.Component, eventID: int): void;
              stateChanged(e: javax.swing.event.ChangeEvent): void;
              textValueChanged(e: java.awt.event.TextEvent): void;
              topLevelWindowCreated(w: java.awt.Window): void;
              topLevelWindowDestroyed(w: java.awt.Window): void;
              windowActivated(e: java.awt.event.WindowEvent): void;
              windowClosed(e: java.awt.event.WindowEvent): void;
              windowClosing(e: java.awt.event.WindowEvent): void;
              windowDeactivated(e: java.awt.event.WindowEvent): void;
              windowDeiconified(e: java.awt.event.WindowEvent): void;
              windowIconified(e: java.awt.event.WindowEvent): void;
              windowOpened(e: java.awt.event.WindowEvent): void;
              _actionArgs: any[];
              _actionListeners: java.lang.Class<any>[];
              _addActionMethod: java.lang.reflect.Method;
              _addItemMethod: java.lang.reflect.Method;
              _addTextMethod: java.lang.reflect.Method;
              _addWindowMethod: java.lang.reflect.Method;
              _itemArgs: any[];
              _itemListeners: java.lang.Class<any>[];
              _removeActionMethod: java.lang.reflect.Method;
              _removeItemMethod: java.lang.reflect.Method;
              _removeTextMethod: java.lang.reflect.Method;
              _removeWindowMethod: java.lang.reflect.Method;
              _textArgs: any[];
              _textListeners: java.lang.Class<any>[];
              _windowArgs: any[];
              _windowListeners: java.lang.Class<any>[];
            }
            interface AWTEventMonitor$AWTEventsListener extends CombineTypes<[_AWTEventMonitor$AWTEventsListener, java.awt.event.FocusListener, java.awt.event.KeyListener, java.awt.event.ActionListener, java.awt.event.ItemListener, java.awt.event.AdjustmentListener, java.awt.event.ComponentListener, java.awt.event.ContainerListener, java.awt.event.MouseMotionListener, java.awt.event.WindowListener, java.lang.Object, java.awt.event.TextListener, javax.swing.event.ChangeListener, java.awt.event.MouseListener, com.sun.java.accessibility.util.TopLevelWindowListener]> {}
            interface _AccessibilityEventMonitor$$static extends ClassLike {
              addPropertyChangeListener(l: java.beans.PropertyChangeListener): void;
              removePropertyChangeListener(l: java.beans.PropertyChangeListener): void;
              _accessibilityListener: AccessibilityEventMonitor$AccessibilityEventListener;
              _listenerList: AccessibilityListenerList;
              new(): AccessibilityEventMonitor;
            }
            let AccessibilityEventMonitor: _AccessibilityEventMonitor$$static;
            interface _AccessibilityEventMonitor {
            }
            interface AccessibilityEventMonitor extends CombineTypes<[_AccessibilityEventMonitor, java.lang.Object]> {}
            interface _AccessibilityEventMonitor$AccessibilityEventListener$$static extends ClassLike {
              new(): AccessibilityEventMonitor$AccessibilityEventListener;
            }
            let AccessibilityEventMonitor$AccessibilityEventListener: _AccessibilityEventMonitor$AccessibilityEventListener$$static;
            interface _AccessibilityEventMonitor$AccessibilityEventListener {
              _installListeners(): void;
              _installListeners(a: javax.accessibility.Accessible): void;
              _installListeners(ac: javax.accessibility.AccessibleContext): void;
              propertyChange(e: java.beans.PropertyChangeEvent): void;
              _removeListeners(): void;
              _removeListeners(a: javax.accessibility.Accessible): void;
              _removeListeners(ac: javax.accessibility.AccessibleContext): void;
              topLevelWindowCreated(w: java.awt.Window): void;
              topLevelWindowDestroyed(w: java.awt.Window): void;
            }
            interface AccessibilityEventMonitor$AccessibilityEventListener extends CombineTypes<[_AccessibilityEventMonitor$AccessibilityEventListener, java.beans.PropertyChangeListener, java.lang.Object, com.sun.java.accessibility.util.TopLevelWindowListener]> {}
            interface _AccessibilityListenerList$$static extends ClassLike {
              _NULL_ARRAY: any[];
              new(): AccessibilityListenerList;
            }
            let AccessibilityListenerList: _AccessibilityListenerList$$static;
            interface _AccessibilityListenerList {
              add(t: java.lang.Class<java.util.EventListener>, l: java.util.EventListener): void;
              getListenerCount(): int;
              getListenerCount(t: java.lang.Class<java.util.EventListener>): int;
              getListenerList(): any[];
              remove(t: java.lang.Class<java.util.EventListener>, l: java.util.EventListener): void;
              toString(): string;
              _listenerList: any[];
            }
            interface AccessibilityListenerList extends CombineTypes<[_AccessibilityListenerList, java.lang.Object]> {}
            interface _ComponentEvtDispatchThread$$static extends ClassLike {
              new(name: string): ComponentEvtDispatchThread;
            }
            let ComponentEvtDispatchThread: _ComponentEvtDispatchThread$$static;
            interface _ComponentEvtDispatchThread {
              run(): void;
            }
            interface ComponentEvtDispatchThread extends CombineTypes<[_ComponentEvtDispatchThread, java.lang.Thread]> {}
            interface _EventID$$static extends ClassLike {
              readonly ACTION: int;
              readonly ADJUSTMENT: int;
              readonly ANCESTOR: int;
              readonly CARET: int;
              readonly CELLEDITOR: int;
              readonly CHANGE: int;
              readonly COLUMNMODEL: int;
              readonly COMPONENT: int;
              readonly CONTAINER: int;
              readonly DOCUMENT: int;
              readonly FOCUS: int;
              readonly INTERNALFRAME: int;
              readonly ITEM: int;
              readonly KEY: int;
              readonly LISTDATA: int;
              readonly LISTSELECTION: int;
              readonly MENU: int;
              readonly MOTION: int;
              readonly MOUSE: int;
              readonly POPUPMENU: int;
              readonly PROPERTYCHANGE: int;
              readonly TABLEMODEL: int;
              readonly TEXT: int;
              readonly TREEEXPANSION: int;
              readonly TREEMODEL: int;
              readonly TREESELECTION: int;
              readonly UNDOABLEEDIT: int;
              readonly VETOABLECHANGE: int;
              readonly WINDOW: int;
              new(): EventID;
            }
            let EventID: _EventID$$static;
            interface _EventID {
            }
            interface EventID extends CombineTypes<[_EventID, java.lang.Object]> {}
            interface _EventQueueMonitor$$static extends ClassLike {
              addGUIInitializedListener(l: GUIInitializedListener): void;
              _addTopLevelWindow(c: java.awt.Component): void;
              addTopLevelWindowListener(l: TopLevelWindowListener): void;
              getAccessibleAt(p: java.awt.Point): javax.accessibility.Accessible;
              _getComponentAt(c: java.awt.Container, p: java.awt.Point): java.awt.Component;
              getCurrentMousePosition(): java.awt.Point;
              _getShowingComponentAt(c: java.awt.Container, x: int, y: int): java.awt.Component;
              getTopLevelWindowWithFocus(): java.awt.Window;
              getTopLevelWindows(): java.awt.Window[];
              isGUIInitialized(): boolean;
              maybeInitialize(): void;
              _maybeNotifyAssistiveTechnologies(): void;
              _processEvent(theEvent: java.awt.AWTEvent): void;
              _queueComponentEvent(e: java.awt.event.ComponentEvent): void;
              removeGUIInitializedListener(l: GUIInitializedListener): void;
              _removeTopLevelWindow(w: java.awt.Window): void;
              removeTopLevelWindowListener(l: TopLevelWindowListener): void;
              _updateCurrentMousePosition(mouseEvent: java.awt.event.MouseEvent): void;
              _cedt: ComponentEvtDispatchThread;
              _componentEventQueue: EventQueueMonitorItem;
              _componentEventQueueLock: any;
              _currentMouseComponent: java.awt.Component;
              _currentMousePosition: java.awt.Point;
              _guiInitialized: boolean;
              _guiInitializedListener: GUIInitializedListener;
              _mouseMotionListener: java.awt.event.MouseMotionListener;
              _topLevelWindowListener: TopLevelWindowListener;
              _topLevelWindowWithFocus: java.awt.Window;
              _topLevelWindows: java.util.Vector<java.awt.Container>;
              new(): EventQueueMonitor;
            }
            let EventQueueMonitor: _EventQueueMonitor$$static;
            interface _EventQueueMonitor {
              eventDispatched(theEvent: java.awt.AWTEvent): void;
            }
            interface EventQueueMonitor extends CombineTypes<[_EventQueueMonitor, java.lang.Object, java.awt.event.AWTEventListener]> {}
            interface _EventQueueMonitorItem$$static extends ClassLike {
              _new(evt: java.awt.AWTEvent): EventQueueMonitorItem;
            }
            let EventQueueMonitorItem: _EventQueueMonitorItem$$static;
            interface _EventQueueMonitorItem {
              _event: java.awt.AWTEvent;
              _next: EventQueueMonitorItem;
            }
            interface EventQueueMonitorItem extends CombineTypes<[_EventQueueMonitorItem, java.lang.Object]> {}
            interface _GUIInitializedListener$$static extends ClassLike {
            }
            let GUIInitializedListener: _GUIInitializedListener$$static;
            interface _GUIInitializedListener {
              guiInitialized(): void;
(): void;
            }
            interface GUIInitializedListener extends CombineTypes<[_GUIInitializedListener, java.util.EventListener, java.lang.Object]> {}
            interface _GUIInitializedMulticaster$$static extends ClassLike {
              add(a: GUIInitializedListener, b: GUIInitializedListener): GUIInitializedListener;
              _addInternal(a: java.util.EventListener, b: java.util.EventListener): java.util.EventListener;
              remove(l: GUIInitializedListener, oldl: GUIInitializedListener): GUIInitializedListener;
              _removeInternal(l: java.util.EventListener, oldl: java.util.EventListener): java.util.EventListener;
              _new(a: java.util.EventListener, b: java.util.EventListener): GUIInitializedMulticaster;
            }
            let GUIInitializedMulticaster: _GUIInitializedMulticaster$$static;
            interface _GUIInitializedMulticaster {
              guiInitialized(): void;
            }
            interface GUIInitializedMulticaster extends CombineTypes<[_GUIInitializedMulticaster, com.sun.java.accessibility.util.GUIInitializedListener, java.awt.AWTEventMulticaster]> {}
            interface _SwingEventMonitor$$static extends ClassLike {
              addAncestorListener(l: javax.swing.event.AncestorListener): void;
              addCaretListener(l: javax.swing.event.CaretListener): void;
              addCellEditorListener(l: javax.swing.event.CellEditorListener): void;
              addChangeListener(l: javax.swing.event.ChangeListener): void;
              addColumnModelListener(l: javax.swing.event.TableColumnModelListener): void;
              addDocumentListener(l: javax.swing.event.DocumentListener): void;
              addInternalFrameListener(l: javax.swing.event.InternalFrameListener): void;
              addListDataListener(l: javax.swing.event.ListDataListener): void;
              addListSelectionListener(l: javax.swing.event.ListSelectionListener): void;
              addMenuListener(l: javax.swing.event.MenuListener): void;
              addPopupMenuListener(l: javax.swing.event.PopupMenuListener): void;
              addPropertyChangeListener(l: java.beans.PropertyChangeListener): void;
              addTableModelListener(l: javax.swing.event.TableModelListener): void;
              addTreeExpansionListener(l: javax.swing.event.TreeExpansionListener): void;
              addTreeModelListener(l: javax.swing.event.TreeModelListener): void;
              addTreeSelectionListener(l: javax.swing.event.TreeSelectionListener): void;
              addUndoableEditListener(l: javax.swing.event.UndoableEditListener): void;
              addVetoableChangeListener(l: java.beans.VetoableChangeListener): void;
              removeAncestorListener(l: javax.swing.event.AncestorListener): void;
              removeCaretListener(l: javax.swing.event.CaretListener): void;
              removeCellEditorListener(l: javax.swing.event.CellEditorListener): void;
              removeChangeListener(l: javax.swing.event.ChangeListener): void;
              removeColumnModelListener(l: javax.swing.event.TableColumnModelListener): void;
              removeDocumentListener(l: javax.swing.event.DocumentListener): void;
              removeInternalFrameListener(l: javax.swing.event.InternalFrameListener): void;
              removeListDataListener(l: javax.swing.event.ListDataListener): void;
              removeListSelectionListener(l: javax.swing.event.ListSelectionListener): void;
              removeMenuListener(l: javax.swing.event.MenuListener): void;
              removePopupMenuListener(l: javax.swing.event.PopupMenuListener): void;
              removePropertyChangeListener(l: java.beans.PropertyChangeListener): void;
              removeTableModelListener(l: javax.swing.event.TableModelListener): void;
              removeTreeExpansionListener(l: javax.swing.event.TreeExpansionListener): void;
              removeTreeModelListener(l: javax.swing.event.TreeModelListener): void;
              removeTreeSelectionListener(l: javax.swing.event.TreeSelectionListener): void;
              removeUndoableEditListener(l: javax.swing.event.UndoableEditListener): void;
              removeVetoableChangeListener(l: java.beans.VetoableChangeListener): void;
              _listenerList: javax.swing.event.EventListenerList;
              _swingListener: SwingEventMonitor$SwingEventListener;
              new(): SwingEventMonitor;
            }
            let SwingEventMonitor: _SwingEventMonitor$$static;
            interface _SwingEventMonitor {
            }
            interface SwingEventMonitor extends CombineTypes<[_SwingEventMonitor, com.sun.java.accessibility.util.AWTEventMonitor]> {}
            interface _SwingEventMonitor$SwingEventListener$$static extends ClassLike {
              new(): SwingEventMonitor$SwingEventListener;
            }
            let SwingEventMonitor$SwingEventListener: _SwingEventMonitor$SwingEventListener$$static;
            interface _SwingEventMonitor$SwingEventListener {
              ancestorAdded(e: javax.swing.event.AncestorEvent): void;
              ancestorMoved(e: javax.swing.event.AncestorEvent): void;
              ancestorRemoved(e: javax.swing.event.AncestorEvent): void;
              caretUpdate(e: javax.swing.event.CaretEvent): void;
              changedUpdate(e: javax.swing.event.DocumentEvent): void;
              columnAdded(e: javax.swing.event.TableColumnModelEvent): void;
              columnMarginChanged(e: javax.swing.event.ChangeEvent): void;
              columnMoved(e: javax.swing.event.TableColumnModelEvent): void;
              columnRemoved(e: javax.swing.event.TableColumnModelEvent): void;
              columnSelectionChanged(e: javax.swing.event.ListSelectionEvent): void;
              componentAdded(e: java.awt.event.ContainerEvent): void;
              componentRemoved(e: java.awt.event.ContainerEvent): void;
              contentsChanged(e: javax.swing.event.ListDataEvent): void;
              editingCanceled(e: javax.swing.event.ChangeEvent): void;
              editingStopped(e: javax.swing.event.ChangeEvent): void;
              _initializeIntrospection(): boolean;
              insertUpdate(e: javax.swing.event.DocumentEvent): void;
              _installListeners(c: java.awt.Component): void;
              _installListeners(c: java.awt.Component, eventID: int): void;
              internalFrameActivated(e: javax.swing.event.InternalFrameEvent): void;
              internalFrameClosed(e: javax.swing.event.InternalFrameEvent): void;
              internalFrameClosing(e: javax.swing.event.InternalFrameEvent): void;
              internalFrameDeactivated(e: javax.swing.event.InternalFrameEvent): void;
              internalFrameDeiconified(e: javax.swing.event.InternalFrameEvent): void;
              internalFrameIconified(e: javax.swing.event.InternalFrameEvent): void;
              internalFrameOpened(e: javax.swing.event.InternalFrameEvent): void;
              intervalAdded(e: javax.swing.event.ListDataEvent): void;
              intervalRemoved(e: javax.swing.event.ListDataEvent): void;
              menuCanceled(e: javax.swing.event.MenuEvent): void;
              menuDeselected(e: javax.swing.event.MenuEvent): void;
              menuSelected(e: javax.swing.event.MenuEvent): void;
              popupMenuCanceled(e: javax.swing.event.PopupMenuEvent): void;
              popupMenuWillBecomeInvisible(e: javax.swing.event.PopupMenuEvent): void;
              popupMenuWillBecomeVisible(e: javax.swing.event.PopupMenuEvent): void;
              propertyChange(e: java.beans.PropertyChangeEvent): void;
              _removeListeners(c: java.awt.Component): void;
              _removeListeners(c: java.awt.Component, eventID: int): void;
              removeUpdate(e: javax.swing.event.DocumentEvent): void;
              stateChanged(e: javax.swing.event.ChangeEvent): void;
              tableChanged(e: javax.swing.event.TableModelEvent): void;
              treeCollapsed(e: javax.swing.event.TreeExpansionEvent): void;
              treeExpanded(e: javax.swing.event.TreeExpansionEvent): void;
              treeNodesChanged(e: javax.swing.event.TreeModelEvent): void;
              treeNodesInserted(e: javax.swing.event.TreeModelEvent): void;
              treeNodesRemoved(e: javax.swing.event.TreeModelEvent): void;
              treeStructureChanged(e: javax.swing.event.TreeModelEvent): void;
              undoableEditHappened(e: javax.swing.event.UndoableEditEvent): void;
              valueChanged(e: javax.swing.event.ListSelectionEvent): void;
              valueChanged(e: javax.swing.event.TreeSelectionEvent): void;
              vetoableChange(e: java.beans.PropertyChangeEvent): void;
              _addCaretMethod: java.lang.reflect.Method;
              _addCellEditorMethod: java.lang.reflect.Method;
              _addChangeMethod: java.lang.reflect.Method;
              _addDocumentMethod: java.lang.reflect.Method;
              _addInternalFrameMethod: java.lang.reflect.Method;
              _addListSelectionMethod: java.lang.reflect.Method;
              _addMenuMethod: java.lang.reflect.Method;
              _addPopupMenuMethod: java.lang.reflect.Method;
              _addPropertyChangeMethod: java.lang.reflect.Method;
              _addTreeExpansionMethod: java.lang.reflect.Method;
              _addTreeSelectionMethod: java.lang.reflect.Method;
              _addUndoableEditMethod: java.lang.reflect.Method;
              _caretArgs: any[];
              _caretListeners: java.lang.Class<any>[];
              _cellEditorArgs: any[];
              _cellEditorListeners: java.lang.Class<any>[];
              _changeArgs: any[];
              _changeListeners: java.lang.Class<any>[];
              _documentArgs: any[];
              _documentListeners: java.lang.Class<any>[];
              _getCellEditorMethod: java.lang.reflect.Method;
              _getColumnModelMethod: java.lang.reflect.Method;
              _getDocumentMethod: java.lang.reflect.Method;
              _getModelMethod: java.lang.reflect.Method;
              _getPopupMenuMethod: java.lang.reflect.Method;
              _getSelectionModelMethod: java.lang.reflect.Method;
              _internalFrameArgs: any[];
              _internalFrameListeners: java.lang.Class<any>[];
              _listSelectionArgs: any[];
              _listSelectionListeners: java.lang.Class<any>[];
              _menuArgs: any[];
              _menuListeners: java.lang.Class<any>[];
              _nullArgs: any[];
              _nullClass: java.lang.Class<any>[];
              _popupMenuArgs: any[];
              _popupMenuListeners: java.lang.Class<any>[];
              _propertyChangeArgs: any[];
              _propertyChangeListeners: java.lang.Class<any>[];
              _removeCaretMethod: java.lang.reflect.Method;
              _removeCellEditorMethod: java.lang.reflect.Method;
              _removeChangeMethod: java.lang.reflect.Method;
              _removeDocumentMethod: java.lang.reflect.Method;
              _removeInternalFrameMethod: java.lang.reflect.Method;
              _removeListSelectionMethod: java.lang.reflect.Method;
              _removeMenuMethod: java.lang.reflect.Method;
              _removePopupMenuMethod: java.lang.reflect.Method;
              _removePropertyChangeMethod: java.lang.reflect.Method;
              _removeTreeExpansionMethod: java.lang.reflect.Method;
              _removeTreeSelectionMethod: java.lang.reflect.Method;
              _removeUndoableEditMethod: java.lang.reflect.Method;
              _treeExpansionArgs: any[];
              _treeExpansionListeners: java.lang.Class<any>[];
              _treeSelectionArgs: any[];
              _treeSelectionListeners: java.lang.Class<any>[];
              _undoableEditArgs: any[];
              _undoableEditListeners: java.lang.Class<any>[];
            }
            interface SwingEventMonitor$SwingEventListener extends CombineTypes<[_SwingEventMonitor$SwingEventListener, javax.swing.event.DocumentListener, javax.swing.event.UndoableEditListener, com.sun.java.accessibility.util.AWTEventMonitor$AWTEventsListener, javax.swing.event.CellEditorListener, javax.swing.event.CaretListener, javax.swing.event.PopupMenuListener, javax.swing.event.TreeModelListener, javax.swing.event.TableModelListener, javax.swing.event.MenuListener, javax.swing.event.ListDataListener, javax.swing.event.TableColumnModelListener, javax.swing.event.TreeSelectionListener, javax.swing.event.AncestorListener, java.beans.PropertyChangeListener, java.beans.VetoableChangeListener, javax.swing.event.InternalFrameListener, javax.swing.event.ChangeListener, javax.swing.event.ListSelectionListener, javax.swing.event.TreeExpansionListener]> {}
            interface _TopLevelWindowListener$$static extends ClassLike {
            }
            let TopLevelWindowListener: _TopLevelWindowListener$$static;
            interface _TopLevelWindowListener {
              topLevelWindowCreated(a0: java.awt.Window): void;
              topLevelWindowDestroyed(a0: java.awt.Window): void;
            }
            interface TopLevelWindowListener extends CombineTypes<[_TopLevelWindowListener, java.util.EventListener, java.lang.Object]> {}
            interface _TopLevelWindowMulticaster$$static extends ClassLike {
              add(a: TopLevelWindowListener, b: TopLevelWindowListener): TopLevelWindowListener;
              _addInternal(a: java.util.EventListener, b: java.util.EventListener): java.util.EventListener;
              remove(l: TopLevelWindowListener, oldl: TopLevelWindowListener): TopLevelWindowListener;
              _removeInternal(l: java.util.EventListener, oldl: java.util.EventListener): java.util.EventListener;
              _new(a: java.util.EventListener, b: java.util.EventListener): TopLevelWindowMulticaster;
            }
            let TopLevelWindowMulticaster: _TopLevelWindowMulticaster$$static;
            interface _TopLevelWindowMulticaster {
              topLevelWindowCreated(w: java.awt.Window): void;
              topLevelWindowDestroyed(w: java.awt.Window): void;
            }
            interface TopLevelWindowMulticaster extends CombineTypes<[_TopLevelWindowMulticaster, java.awt.AWTEventMulticaster, com.sun.java.accessibility.util.TopLevelWindowListener]> {}
            interface _Translator$$static extends ClassLike {
              getAccessible(o: any): javax.accessibility.Accessible;
              _getTranslatorClass(c: java.lang.Class<any>): java.lang.Class<any>;
              new(): Translator;
              new(o: any): Translator;
            }
            let Translator: _Translator$$static;
            interface _Translator {
              addFocusListener(l: java.awt.event.FocusListener): void;
              addPropertyChangeListener(l: java.beans.PropertyChangeListener): void;
              contains(p: java.awt.Point): boolean;
              equals(o: any): boolean;
              getAccessibleAt(p: java.awt.Point): javax.accessibility.Accessible;
              getAccessibleChild(i: int): javax.accessibility.Accessible;
              getAccessibleChildrenCount(): int;
              getAccessibleContext(): javax.accessibility.AccessibleContext;
              getAccessibleDescription(): string;
              getAccessibleIndexInParent(): int;
              getAccessibleName(): string;
              getAccessibleParent(): javax.accessibility.Accessible;
              getAccessibleRole(): javax.accessibility.AccessibleRole;
              getAccessibleStateSet(): javax.accessibility.AccessibleStateSet;
              getBackground(): java.awt.Color;
              getBounds(): java.awt.Rectangle;
              getCursor(): java.awt.Cursor;
              getFont(): java.awt.Font;
              getFontMetrics(f: java.awt.Font): java.awt.FontMetrics;
              getForeground(): java.awt.Color;
              getLocale(): java.util.Locale;
              getLocation(): java.awt.Point;
              getLocationOnScreen(): java.awt.Point;
              getSize(): java.awt.Dimension;
              getSource(): any;
              hashCode(): int;
              isEnabled(): boolean;
              isFocusTraversable(): boolean;
              isShowing(): boolean;
              isVisible(): boolean;
              removeFocusListener(l: java.awt.event.FocusListener): void;
              removePropertyChangeListener(l: java.beans.PropertyChangeListener): void;
              requestFocus(): void;
              setAccessibleDescription(s: string): void;
              setAccessibleName(s: string): void;
              setBackground(c: java.awt.Color): void;
              setBounds(r: java.awt.Rectangle): void;
              setCursor(c: java.awt.Cursor): void;
              setEnabled(b: boolean): void;
              setFont(f: java.awt.Font): void;
              setForeground(c: java.awt.Color): void;
              setLocation(p: java.awt.Point): void;
              setSize(d: java.awt.Dimension): void;
              setSource(o: any): void;
              setVisible(b: boolean): void;
              _source: any;
            }
            interface Translator extends CombineTypes<[_Translator, javax.accessibility.AccessibleContext, javax.accessibility.AccessibleComponent, javax.accessibility.Accessible]> {}
            interface __AccessibleState$$static extends ClassLike {
              readonly MANAGES_DESCENDANTS: _AccessibleState;
              _new(key: string): _AccessibleState;
            }
            let _AccessibleState: __AccessibleState$$static;
            interface __AccessibleState {
            }
            interface _AccessibleState extends CombineTypes<[__AccessibleState, javax.accessibility.AccessibleState]> {}
          }
        }
      }
    }
  }
}
