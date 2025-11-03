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
      module tools {
        module jconsole {
          interface _JConsoleContext$$static extends ClassLike {
            readonly CONNECTION_STATE_PROPERTY: string;
          }
          let JConsoleContext: _JConsoleContext$$static;
          interface _JConsoleContext {
            addPropertyChangeListener(a0: java.beans.PropertyChangeListener): void;
            getConnectionState(): JConsoleContext$ConnectionState;
            getMBeanServerConnection(): javax.management.MBeanServerConnection;
            removePropertyChangeListener(a0: java.beans.PropertyChangeListener): void;
          }
          interface JConsoleContext extends CombineTypes<[_JConsoleContext, java.lang.Object]> {}
          interface _JConsoleContext$ConnectionState$$static extends ClassLike {
            valueOf(name: string): JConsoleContext$ConnectionState;
            values(): JConsoleContext$ConnectionState[];
            readonly CONNECTED: JConsoleContext$ConnectionState;
            readonly CONNECTING: JConsoleContext$ConnectionState;
            readonly DISCONNECTED: JConsoleContext$ConnectionState;
          }
          let JConsoleContext$ConnectionState: _JConsoleContext$ConnectionState$$static;
          interface _JConsoleContext$ConnectionState {
          }
          interface JConsoleContext$ConnectionState extends CombineTypes<[_JConsoleContext$ConnectionState]> {}
          interface _JConsolePlugin$$static extends ClassLike {
            _new(): JConsolePlugin;
          }
          let JConsolePlugin: _JConsolePlugin$$static;
          interface _JConsolePlugin {
            addContextPropertyChangeListener(listener: java.beans.PropertyChangeListener): void;
            dispose(): void;
            getContext(): JConsoleContext;
            getTabs(): java.util.Map<string,javax.swing.JPanel>;
            newSwingWorker(): javax.swing.SwingWorker<any,any>;
            removeContextPropertyChangeListener(listener: java.beans.PropertyChangeListener): void;
            setContext(context: JConsoleContext): void;
            _context: JConsoleContext;
            _listeners: java.util.List<java.beans.PropertyChangeListener>;
          }
          interface JConsolePlugin extends CombineTypes<[_JConsolePlugin, java.lang.Object]> {}
        }
      }
    }
  }
  module sun {
    module tools {
      module jconsole {
        module inspector {
          interface _IconManager$$static extends ClassLike {
            _getImage(img: string): javax.swing.ImageIcon;
            _getSmallIcon(icon: javax.swing.ImageIcon): javax.swing.ImageIcon;
            DEFAULT_XOBJECT: javax.swing.Icon;
            MBEAN: javax.swing.Icon;
            MBEANSERVERDELEGATE: javax.swing.Icon;
            new(): IconManager;
          }
          let IconManager: _IconManager$$static;
          interface _IconManager {
          }
          interface IconManager extends CombineTypes<[_IconManager, java.lang.Object]> {}
          interface _OperationEntry$$static extends ClassLike {
            new(operation: javax.management.MBeanOperationInfo, isCallable: boolean, button: javax.swing.JButton, xoperations: XOperations): OperationEntry;
          }
          let OperationEntry: _OperationEntry$$static;
          interface _OperationEntry {
            getParameters(): any[];
            getReturnType(): string;
            getSignature(): string[];
            _setPanel(isCallable: boolean, button: javax.swing.JButton, xoperations: XOperations): void;
            _inputs: XTextField[];
            _operation: javax.management.MBeanOperationInfo;
          }
          interface OperationEntry extends CombineTypes<[_OperationEntry, javax.swing.JPanel]> {}
          interface _TableSorter$$static extends ClassLike {
            new(): TableSorter;
            new(columnNames: any[], numRows: int): TableSorter;
          }
          let TableSorter: _TableSorter$$static;
          interface _TableSorter {
            addMouseListenerToHeaderInTable(table: javax.swing.JTable): void;
            addTableModelListener(l: javax.swing.event.TableModelListener): void;
            _compare(o1: any, o2: any): int;
            _compareG(s1: any, s2: any, isAscending: boolean): boolean;
            _compareS(s1: any, s2: any, isAscending: boolean): boolean;
            getIndexOfRow(row: int): int;
            _getRow(row: int): java.util.Vector<any>;
            mouseClicked(e: java.awt.event.MouseEvent): void;
            mouseEntered(e: java.awt.event.MouseEvent): void;
            mouseExited(e: java.awt.event.MouseEvent): void;
            mousePressed(e: java.awt.event.MouseEvent): void;
            mouseReleased(e: java.awt.event.MouseEvent): void;
            newDataAvailable(e: javax.swing.event.TableModelEvent): void;
            _quickSort(lo0: int, hi0: int, key: int, isAscending: boolean): void;
            _removeListeners(): void;
            removeTableModelListener(l: javax.swing.event.TableModelListener): void;
            _restoreListeners(): void;
            _setRow(data: java.util.Vector<any>, row: int): void;
            _sort(column: int, isAscending: boolean): void;
            sortByColumn(column: int): void;
            sortByColumn(column: int, ascending: boolean): void;
            _swap(i: int, j: int, column: int): void;
            _ascending: boolean;
            _columnModel: javax.swing.table.TableColumnModel;
            _evtListenerList: java.util.Vector<javax.swing.event.TableModelListener>;
            _invertedIndex: int[];
            _sortColumn: int;
            _tableView: javax.swing.JTable;
          }
          interface TableSorter extends CombineTypes<[_TableSorter, javax.swing.table.DefaultTableModel, java.awt.event.MouseListener]> {}
          interface _ThreadDialog$$static extends ClassLike {
            new(parentComponent: java.awt.Component, message: any, title: string, messageType: int): ThreadDialog;
          }
          let ThreadDialog: _ThreadDialog$$static;
          interface _ThreadDialog {
            run(): void;
            _message: any;
            _messageType: int;
            _parentComponent: java.awt.Component;
            _title: string;
          }
          interface ThreadDialog extends CombineTypes<[_ThreadDialog, java.lang.Object, java.lang.Runnable]> {}
          interface _Utils$$static extends ClassLike {
            canBeRenderedAsArray(elem: any): boolean;
            _createNumberFromStringValue(value: string): number;
            createObjectFromString(type: string, value: string): any;
            getActualException(e: java.lang.Throwable): java.lang.Throwable;
            getArrayClassName(name: string): string;
            getClass(className: string): java.lang.Class<any>;
            getDefaultValue(type: string): string;
            getParameters(inputs: XTextField[], params: string[]): any[];
            getReadableClassName(name: string): string;
            isEditableType(type: string): boolean;
            isSupportedArray(elem: any): boolean;
            isUniformCollection(c: java.util.Collection<any>, e: java.lang.Class<any>): boolean;
            newStringConstructor(type: string, param: string): any;
            _booleanTypes: java.util.Set<string>;
            _editableTypes: java.util.Set<string>;
            _extraEditableClasses: java.util.Set<java.lang.Class<any>>;
            _extraNumericalTypes: java.util.Set<string>;
            _numericalTypes: java.util.Set<string>;
            _primitiveMap: java.util.Map<string,java.lang.Class<any>>;
            _primitiveToWrapper: java.util.Map<string,java.lang.Class<any>>;
            _primitiveWrappers: java.util.Set<java.lang.Class<any>>;
            _primitives: java.util.Set<java.lang.Class<any>>;
            _tableNavigationKeys: java.util.Set<int>;
          }
          let Utils: _Utils$$static;
          interface _Utils {
          }
          interface Utils extends CombineTypes<[_Utils, java.lang.Object]> {}
          interface _Utils$CopyKeyAdapter$$static extends ClassLike {
            _defaultEditorKitCopyActionName: string;
            _transferHandlerCopyActionName: string;
            new(): Utils$CopyKeyAdapter;
          }
          let Utils$CopyKeyAdapter: _Utils$CopyKeyAdapter$$static;
          interface _Utils$CopyKeyAdapter {
            keyPressed(e: java.awt.event.KeyEvent): void;
            keyTyped(e: java.awt.event.KeyEvent): void;
          }
          interface Utils$CopyKeyAdapter extends CombineTypes<[_Utils$CopyKeyAdapter, java.awt.event.KeyAdapter]> {}
          interface _Utils$EditFocusAdapter$$static extends ClassLike {
            new(editor: javax.swing.CellEditor): Utils$EditFocusAdapter;
          }
          let Utils$EditFocusAdapter: _Utils$EditFocusAdapter$$static;
          interface _Utils$EditFocusAdapter {
            focusLost(e: java.awt.event.FocusEvent): void;
            _editor: javax.swing.CellEditor;
          }
          interface Utils$EditFocusAdapter extends CombineTypes<[_Utils$EditFocusAdapter, java.awt.event.FocusAdapter]> {}
          interface _Utils$ReadOnlyTableCellEditor$$static extends ClassLike {
            new(tf: javax.swing.JTextField): Utils$ReadOnlyTableCellEditor;
          }
          let Utils$ReadOnlyTableCellEditor: _Utils$ReadOnlyTableCellEditor$$static;
          interface _Utils$ReadOnlyTableCellEditor {
          }
          interface Utils$ReadOnlyTableCellEditor extends CombineTypes<[_Utils$ReadOnlyTableCellEditor, javax.swing.DefaultCellEditor]> {}
          interface _XArrayDataViewer$$static extends ClassLike {
            _htmlize(value: string): string;
            isViewableValue(value: any): boolean;
            loadArray(value: any): java.awt.Component;
          }
          let XArrayDataViewer: _XArrayDataViewer$$static;
          interface _XArrayDataViewer {
          }
          interface XArrayDataViewer extends CombineTypes<[_XArrayDataViewer, java.lang.Object]> {}
          interface _XDataViewer$$static extends ClassLike {
            createNotificationViewer(value: any): java.awt.Component;
            dispose(tab: MBeansTab): void;
            getActionLabel(type: int): string;
            getViewerType(data: any): int;
            isViewableValue(value: any): boolean;
            registerForMouseEvent(comp: java.awt.Component, mouseListener: java.awt.event.MouseListener): void;
            readonly ARRAY: int;
            readonly NOT_SUPPORTED: int;
            readonly NUMERIC: int;
            readonly OPEN: int;
            new(tab: MBeansTab): XDataViewer;
          }
          let XDataViewer: _XDataViewer$$static;
          interface _XDataViewer {
            createAttributeViewer(value: any, mbean: XMBean, attributeName: string, table: javax.swing.JTable): java.awt.Component;
            createOperationViewer(value: any, mbean: XMBean): java.awt.Component;
            _tab: MBeansTab;
          }
          interface XDataViewer extends CombineTypes<[_XDataViewer, java.lang.Object]> {}
          interface _XMBean$$static extends ClassLike {
            new(objectName: javax.management.ObjectName, mbeansTab: MBeansTab): XMBean;
          }
          let XMBean: _XMBean$$static;
          interface _XMBean {
            equals(obj: any): boolean;
            getAttribute(attributeName: string): any;
            getAttributes(attributeNames: string[]): javax.management.AttributeList;
            getAttributes(attributeNames: javax.management.MBeanAttributeInfo[]): javax.management.AttributeList;
            getIcon(): javax.swing.Icon;
            getMBeanInfo(): javax.management.MBeanInfo;
            _getMBeanServerConnection(): javax.management.MBeanServerConnection;
            getObjectName(): javax.management.ObjectName;
            _getSnapshotMBeanServerConnection(): ProxyClient$SnapshotMBeanServerConnection;
            getText(): string;
            hashCode(): int;
            invoke(operationName: string): any;
            invoke(operationName: string, params: any[], sig: string[]): any;
            isBroadcaster(): boolean;
            setAttribute(attribute: javax.management.Attribute): void;
            setIcon(icon: javax.swing.Icon): void;
            setText(text: string): void;
            toString(): string;
            _broadcaster: boolean;
            _broadcasterLock: any;
            _icon: javax.swing.Icon;
            _mbeanInfo: javax.management.MBeanInfo;
            _mbeanInfoLock: any;
            _mbeansTab: MBeansTab;
            _objectName: javax.management.ObjectName;
            _text: string;
          }
          interface XMBean extends CombineTypes<[_XMBean, java.lang.Object]> {}
          interface _XMBeanAttributes$$static extends ClassLike {
            _columnNames: string[];
            _editor: javax.swing.table.TableCellEditor;
            new(mbeansTab: MBeansTab): XMBeanAttributes;
          }
          let XMBeanAttributes: _XMBeanAttributes$$static;
          interface _XMBeanAttributes {
            _addTableData(tableModel: javax.swing.table.DefaultTableModel, mbean: XMBean, attributesInfo: javax.management.MBeanAttributeInfo[], attributes: java.util.HashMap<string,any>, unavailableAttributes: java.util.HashMap<string,any>, viewableAttributes: java.util.HashMap<string,any>): void;
            cancelCellEditing(): void;
            _collapse(attributeName: string, c: java.awt.Component): void;
            columnMarginChanged(e: javax.swing.event.ChangeEvent): void;
            _doLoadAttributes(mbean: XMBean, infoOrNull: javax.management.MBeanInfo): java.lang.Runnable;
            editCellAt(row: int, column: int, e: java.util.EventObject): boolean;
            emptyTable(): void;
            _emptyTable(model: javax.swing.table.DefaultTableModel): void;
            getCellRenderer(row: int, column: int): javax.swing.table.TableCellRenderer;
            getClassName(row: int): string;
            getRowCount(): int;
            getToolTip(row: int, column: int): string;
            getValue(row: int): any;
            getValueName(row: int): string;
            _getZoomedCell(mbean: XMBean, attribute: string, value: any): XMBeanAttributes$ZoomedCell;
            isAttributeViewable(row: int, col: int): boolean;
            isCellEditable(row: int, col: int): boolean;
            isCellError(row: int, col: int): boolean;
            isColumnEditable(column: int): boolean;
            isReadable(row: int): boolean;
            isTableEditable(): boolean;
            _isViewable(attribute: javax.management.Attribute): boolean;
            isWritable(row: int): boolean;
            loadAttributes(mbean: XMBean, mbeanInfo: javax.management.MBeanInfo): void;
            prepareRenderer(renderer: javax.swing.table.TableCellRenderer, row: int, column: int): java.awt.Component;
            refreshAttributes(): void;
            _refreshAttributes(stopCellEditing: boolean): void;
            _removeAttributes(): void;
            _setColumnEditors(): void;
            setTableValue(value: any, row: int): void;
            setValueAt(value: any, row: int, column: int): void;
            _sortRequested(column: int): void;
            stopCellEditing(): void;
            _updateColumnWidth(col1Width: int, col2Width: int): void;
            _updateRowHeight(obj: any, row: int): void;
            _updateZoomedCell(row: int, col: int): XMBeanAttributes$ZoomedCell;
            _LOGGER: java.lang.System$Logger;
            _attributes: java.util.HashMap<string,any>;
            _attributesInfo: javax.management.MBeanAttributeInfo[];
            _attributesListener: javax.swing.event.TableModelListener;
            _mbean: XMBean;
            _mbeanInfo: javax.management.MBeanInfo;
            _mbeansTab: MBeansTab;
            _mouseListener: XMBeanAttributes$AttributesMouseListener;
            _rowMinHeight: int;
            _unavailableAttributes: java.util.HashMap<string,any>;
            _valueCellEditor: javax.swing.table.TableCellEditor;
            _viewableAttributes: java.util.HashMap<string,any>;
            _viewersCache: java.util.WeakHashMap<XMBean,java.util.HashMap<string,XMBeanAttributes$ZoomedCell>>;
          }
          interface XMBeanAttributes extends CombineTypes<[_XMBeanAttributes, sun.tools.jconsole.inspector.XTable]> {}
          interface _XMBeanAttributes$AttributesListener$$static extends ClassLike {
            new(this$0: XMBeanAttributes, component: java.awt.Component): XMBeanAttributes$AttributesListener;
          }
          let XMBeanAttributes$AttributesListener: _XMBeanAttributes$AttributesListener$$static;
          interface _XMBeanAttributes$AttributesListener {
            _popupAndLog(ex: java.lang.Throwable, method: string, title: string): void;
            _setAttribute(attribute: javax.management.Attribute, method: string): void;
            tableChanged(e: javax.swing.event.TableModelEvent): void;
            _component: java.awt.Component;
            _this$0: XMBeanAttributes;
          }
          interface XMBeanAttributes$AttributesListener extends CombineTypes<[_XMBeanAttributes$AttributesListener, java.lang.Object, javax.swing.event.TableModelListener]> {}
          interface _XMBeanAttributes$AttributesMouseListener$$static extends ClassLike {
            _new(this$0: XMBeanAttributes): XMBeanAttributes$AttributesMouseListener;
          }
          let XMBeanAttributes$AttributesMouseListener: _XMBeanAttributes$AttributesMouseListener$$static;
          interface _XMBeanAttributes$AttributesMouseListener {
            mousePressed(e: java.awt.event.MouseEvent): void;
            _this$0: XMBeanAttributes;
          }
          interface XMBeanAttributes$AttributesMouseListener extends CombineTypes<[_XMBeanAttributes$AttributesMouseListener, java.awt.event.MouseAdapter]> {}
          interface _XMBeanAttributes$MaximizedCellRenderer$$static extends ClassLike {
            _new(comp: java.awt.Component): XMBeanAttributes$MaximizedCellRenderer;
          }
          let XMBeanAttributes$MaximizedCellRenderer: _XMBeanAttributes$MaximizedCellRenderer$$static;
          interface _XMBeanAttributes$MaximizedCellRenderer {
            getComponent(): java.awt.Component;
            getTableCellRendererComponent(table: javax.swing.JTable, value: any, isSelected: boolean, hasFocus: boolean, row: int, column: int): java.awt.Component;
            _comp: java.awt.Component;
          }
          interface XMBeanAttributes$MaximizedCellRenderer extends CombineTypes<[_XMBeanAttributes$MaximizedCellRenderer, javax.swing.table.DefaultTableCellRenderer]> {}
          interface _XMBeanAttributes$ValueCellEditor$$static extends ClassLike {
            _new(this$0: XMBeanAttributes): XMBeanAttributes$ValueCellEditor;
          }
          let XMBeanAttributes$ValueCellEditor: _XMBeanAttributes$ValueCellEditor$$static;
          interface _XMBeanAttributes$ValueCellEditor {
            getTableCellEditorComponent(table: javax.swing.JTable, value: any, isSelected: boolean, row: int, column: int): java.awt.Component;
            stopCellEditing(): boolean;
            _this$0: XMBeanAttributes;
          }
          interface XMBeanAttributes$ValueCellEditor extends CombineTypes<[_XMBeanAttributes$ValueCellEditor, sun.tools.jconsole.inspector.XTextFieldEditor]> {}
          interface _XMBeanAttributes$ZoomedCell$$static extends ClassLike {
            _new(value: any): XMBeanAttributes$ZoomedCell;
          }
          let XMBeanAttributes$ZoomedCell: _XMBeanAttributes$ZoomedCell$$static;
          interface _XMBeanAttributes$ZoomedCell {
            _getHeight(): int;
            _getMinHeight(): int;
            _getMinRenderer(): javax.swing.table.TableCellRenderer;
            _getRenderer(): javax.swing.table.TableCellRenderer;
            _getType(): int;
            _getValue(): any;
            _init(minRenderer: javax.swing.table.TableCellRenderer, maxComponent: java.awt.Component, minHeight: int): void;
            _isInited(): boolean;
            _isMaximized(): boolean;
            _maximize(): void;
            _minimize(): void;
            _reset(): void;
            _setValue(value: any): void;
            _switchState(): void;
            toString(): string;
            _init: boolean;
            _maxRenderer: XMBeanAttributes$MaximizedCellRenderer;
            _minHeight: int;
            _minRenderer: javax.swing.table.TableCellRenderer;
            _minimized: boolean;
            _type: int;
            _value: any;
          }
          interface XMBeanAttributes$ZoomedCell extends CombineTypes<[_XMBeanAttributes$ZoomedCell, java.lang.Object]> {}
          interface _XMBeanInfo$$static extends ClassLike {
            _editor: javax.swing.table.TableCellEditor;
            _lightYellow: java.awt.Color;
            _renderer: XMBeanInfo$MBeanInfoTableCellRenderer;
            new(): XMBeanInfo;
          }
          let XMBeanInfo: _XMBeanInfo$$static;
          interface _XMBeanInfo {
            _addDescriptor(desc: javax.management.Descriptor, text: string): void;
            addMBeanAttributeInfo(mbai: javax.management.MBeanAttributeInfo): void;
            _addMBeanConstructorInfo(mbci: javax.management.MBeanConstructorInfo, text: string): void;
            addMBeanInfo(mbean: XMBean, mbeanInfo: javax.management.MBeanInfo): void;
            addMBeanNotificationInfo(mbni: javax.management.MBeanNotificationInfo): void;
            addMBeanOperationInfo(mboi: javax.management.MBeanOperationInfo): void;
            _addMBeanParameterInfo(mbpi: javax.management.MBeanParameterInfo, text: string): void;
            emptyDescTable(): void;
            emptyInfoTable(): void;
            _NAME_COLUMN: int;
            _VALUE_COLUMN: int;
            _columnNames: string[];
            _descBorderPanel: javax.swing.JPanel;
            _descTable: javax.swing.JTable;
            _infoBorderPanel: javax.swing.JPanel;
            _infoTable: javax.swing.JTable;
          }
          interface XMBeanInfo extends CombineTypes<[_XMBeanInfo, javax.swing.JPanel]> {}
          interface _XMBeanInfo$MBeanInfoTableCellEditor$$static extends ClassLike {
            new(tf: javax.swing.JTextField): XMBeanInfo$MBeanInfoTableCellEditor;
          }
          let XMBeanInfo$MBeanInfoTableCellEditor: _XMBeanInfo$MBeanInfoTableCellEditor$$static;
          interface _XMBeanInfo$MBeanInfoTableCellEditor {
            getTableCellEditorComponent(table: javax.swing.JTable, value: any, isSelected: boolean, row: int, column: int): java.awt.Component;
          }
          interface XMBeanInfo$MBeanInfoTableCellEditor extends CombineTypes<[_XMBeanInfo$MBeanInfoTableCellEditor, sun.tools.jconsole.inspector.Utils$ReadOnlyTableCellEditor]> {}
          interface _XMBeanInfo$MBeanInfoTableCellRenderer$$static extends ClassLike {
          }
          let XMBeanInfo$MBeanInfoTableCellRenderer: _XMBeanInfo$MBeanInfoTableCellRenderer$$static;
          interface _XMBeanInfo$MBeanInfoTableCellRenderer {
            getTableCellRendererComponent(table: javax.swing.JTable, value: any, isSelected: boolean, hasFocus: boolean, row: int, column: int): java.awt.Component;
          }
          interface XMBeanInfo$MBeanInfoTableCellRenderer extends CombineTypes<[_XMBeanInfo$MBeanInfoTableCellRenderer, javax.swing.table.DefaultTableCellRenderer]> {}
          interface _XMBeanInfo$ReadOnlyDefaultTableModel$$static extends ClassLike {
          }
          let XMBeanInfo$ReadOnlyDefaultTableModel: _XMBeanInfo$ReadOnlyDefaultTableModel$$static;
          interface _XMBeanInfo$ReadOnlyDefaultTableModel {
            setValueAt(value: any, row: int, col: int): void;
          }
          interface XMBeanInfo$ReadOnlyDefaultTableModel extends CombineTypes<[_XMBeanInfo$ReadOnlyDefaultTableModel, javax.swing.table.DefaultTableModel]> {}
          interface _XMBeanInfo$TableRowDivider$$static extends ClassLike {
            new(tableRowDividerText: string): XMBeanInfo$TableRowDivider;
          }
          let XMBeanInfo$TableRowDivider: _XMBeanInfo$TableRowDivider$$static;
          interface _XMBeanInfo$TableRowDivider {
            toString(): string;
            _tableRowDividerText: string;
          }
          interface XMBeanInfo$TableRowDivider extends CombineTypes<[_XMBeanInfo$TableRowDivider, java.lang.Object]> {}
          interface _XMBeanNotifications$$static extends ClassLike {
            readonly NOTIFICATION_RECEIVED_EVENT: string;
            _columnNames: string[];
            _editor: javax.swing.table.TableCellEditor;
            new(): XMBeanNotifications;
          }
          let XMBeanNotifications: _XMBeanNotifications$$static;
          interface _XMBeanNotifications {
            addNotificationsListener(nl: javax.management.NotificationListener): void;
            cancelCellEditing(): void;
            clearCurrentNotifications(): boolean;
            disableNotifications(): void;
            _dispose(): void;
            emptyTable(): void;
            _fireNotificationReceived(listener: XMBeanNotifications$XMBeanNotificationsListener, mbean: XMBean, node: javax.swing.tree.DefaultMutableTreeNode, rowData: any[], received: long): void;
            getCellRenderer(row: int, column: int): javax.swing.table.TableCellRenderer;
            getReceivedNotifications(mbean: XMBean): long;
            _getUserDataCell(row: int, column: int): XMBeanNotifications$UserDataCell;
            handleNotification(notif: javax.management.Notification, handback: any): void;
            isCellEditable(row: int, col: int): boolean;
            isListenerRegistered(mbean: XMBean): boolean;
            isTableEditable(): boolean;
            loadNotifications(mbean: XMBean): void;
            prepareRenderer(renderer: javax.swing.table.TableCellRenderer, row: int, column: int): java.awt.Component;
            registerListener(node: javax.swing.tree.DefaultMutableTreeNode): void;
            removeNotificationsListener(nl: javax.management.NotificationListener): void;
            _setColumnEditors(): void;
            setValueAt(value: any, row: int, column: int): void;
            stopCellEditing(): void;
            _unregister(mbean: javax.management.ObjectName): boolean;
            unregisterListener(node: javax.swing.tree.DefaultMutableTreeNode): boolean;
            _updateModel(data: java.util.List<any[]>): void;
            _updateUserDataCell(row: int, col: int): void;
            _boldFont: java.awt.Font;
            _currentListener: XMBeanNotifications$XMBeanNotificationsListener;
            _enabled: boolean;
            _listeners: java.util.HashMap<javax.management.ObjectName,XMBeanNotifications$XMBeanNotificationsListener>;
            _mouseListener: XMBeanNotifications$NotifMouseListener;
            _normalFont: java.awt.Font;
            _notificationListenersList: java.util.List<javax.management.NotificationListener>;
            _rowMinHeight: int;
            _subscribed: boolean;
            _timeFormater: java.text.SimpleDateFormat;
            _userDataEditor: javax.swing.table.TableCellEditor;
          }
          interface XMBeanNotifications extends CombineTypes<[_XMBeanNotifications, javax.management.NotificationListener, javax.swing.JTable]> {}
          interface _XMBeanNotifications$NotifMouseListener$$static extends ClassLike {
            _new(this$0: XMBeanNotifications): XMBeanNotifications$NotifMouseListener;
          }
          let XMBeanNotifications$NotifMouseListener: _XMBeanNotifications$NotifMouseListener$$static;
          interface _XMBeanNotifications$NotifMouseListener {
            mousePressed(e: java.awt.event.MouseEvent): void;
            _this$0: XMBeanNotifications;
          }
          interface XMBeanNotifications$NotifMouseListener extends CombineTypes<[_XMBeanNotifications$NotifMouseListener, java.awt.event.MouseAdapter]> {}
          interface _XMBeanNotifications$UserDataCell$$static extends ClassLike {
            _new(userData: any, max: java.awt.Component): XMBeanNotifications$UserDataCell;
          }
          let XMBeanNotifications$UserDataCell: _XMBeanNotifications$UserDataCell$$static;
          interface _XMBeanNotifications$UserDataCell {
            _getHeight(): int;
            _getRenderer(): javax.swing.table.TableCellRenderer;
            _init(minRenderer: javax.swing.table.TableCellRenderer, minHeight: int): void;
            _isInited(): boolean;
            _isMaximized(): boolean;
            _maximize(): void;
            _minimize(): void;
            _switchState(): void;
            toString(): string;
            _init: boolean;
            _maxRenderer: XMBeanNotifications$UserDataCellRenderer;
            _minHeight: int;
            _minRenderer: javax.swing.table.TableCellRenderer;
            _minimized: boolean;
            _userData: any;
          }
          interface XMBeanNotifications$UserDataCell extends CombineTypes<[_XMBeanNotifications$UserDataCell, java.lang.Object]> {}
          interface _XMBeanNotifications$UserDataCellEditor$$static extends ClassLike {
            _new(this$0: XMBeanNotifications): XMBeanNotifications$UserDataCellEditor;
          }
          let XMBeanNotifications$UserDataCellEditor: _XMBeanNotifications$UserDataCellEditor$$static;
          interface _XMBeanNotifications$UserDataCellEditor {
            getTableCellEditorComponent(table: javax.swing.JTable, value: any, isSelected: boolean, row: int, column: int): java.awt.Component;
            stopCellEditing(): boolean;
            _this$0: XMBeanNotifications;
          }
          interface XMBeanNotifications$UserDataCellEditor extends CombineTypes<[_XMBeanNotifications$UserDataCellEditor, sun.tools.jconsole.inspector.XTextFieldEditor]> {}
          interface _XMBeanNotifications$UserDataCellRenderer$$static extends ClassLike {
            _new(comp: java.awt.Component): XMBeanNotifications$UserDataCellRenderer;
          }
          let XMBeanNotifications$UserDataCellRenderer: _XMBeanNotifications$UserDataCellRenderer$$static;
          interface _XMBeanNotifications$UserDataCellRenderer {
            getComponent(): java.awt.Component;
            getTableCellRendererComponent(table: javax.swing.JTable, value: any, isSelected: boolean, hasFocus: boolean, row: int, column: int): java.awt.Component;
            _comp: java.awt.Component;
          }
          interface XMBeanNotifications$UserDataCellRenderer extends CombineTypes<[_XMBeanNotifications$UserDataCellRenderer, javax.swing.table.DefaultTableCellRenderer]> {}
          interface _XMBeanNotifications$XMBeanNotificationsListener$$static extends ClassLike {
            new(this$0: XMBeanNotifications, notifications: XMBeanNotifications, xmbean: XMBean, node: javax.swing.tree.DefaultMutableTreeNode, columnNames: string[]): XMBeanNotifications$XMBeanNotificationsListener;
          }
          let XMBeanNotifications$XMBeanNotificationsListener: _XMBeanNotifications$XMBeanNotificationsListener$$static;
          interface _XMBeanNotifications$XMBeanNotificationsListener {
            clear(): void;
            getData(): java.util.List<any[]>;
            getReceivedNotifications(): long;
            handleNotification(n: javax.management.Notification, hb: any): void;
            isRegistered(): boolean;
            register(node: javax.swing.tree.DefaultMutableTreeNode): void;
            unregister(): void;
            _data: java.util.ArrayList<any[]>;
            _node: javax.swing.tree.DefaultMutableTreeNode;
            _notifications: XMBeanNotifications;
            _received: long;
            _this$0: XMBeanNotifications;
            _unregistered: boolean;
            _xmbean: XMBean;
          }
          interface XMBeanNotifications$XMBeanNotificationsListener extends CombineTypes<[_XMBeanNotifications$XMBeanNotificationsListener, javax.management.NotificationListener, java.lang.Object]> {}
          interface _XMBeanOperations$$static extends ClassLike {
            new(mbeansTab: MBeansTab): XMBeanOperations;
          }
          let XMBeanOperations: _XMBeanOperations$$static;
          interface _XMBeanOperations {
            _updateOperations(operations: javax.management.MBeanOperationInfo[]): javax.management.MBeanOperationInfo[];
          }
          interface XMBeanOperations extends CombineTypes<[_XMBeanOperations, sun.tools.jconsole.inspector.XOperations]> {}
          interface _XNodeInfo$$static extends ClassLike {
            new(type: XNodeInfo$Type, data: any, label: string, tooltip: string): XNodeInfo;
          }
          let XNodeInfo: _XNodeInfo$$static;
          interface _XNodeInfo {
            getData(): any;
            getLabel(): string;
            getToolTipText(): string;
            getType(): XNodeInfo$Type;
            toString(): string;
            _data: any;
            _label: string;
            _tooltip: string;
            _type: XNodeInfo$Type;
          }
          interface XNodeInfo extends CombineTypes<[_XNodeInfo, java.lang.Object]> {}
          interface _XNodeInfo$Type$$static extends ClassLike {
            valueOf(name: string): XNodeInfo$Type;
            values(): XNodeInfo$Type[];
            readonly ATTRIBUTE: XNodeInfo$Type;
            readonly ATTRIBUTES: XNodeInfo$Type;
            readonly MBEAN: XNodeInfo$Type;
            readonly NONMBEAN: XNodeInfo$Type;
            readonly NOTIFICATION: XNodeInfo$Type;
            readonly NOTIFICATIONS: XNodeInfo$Type;
            readonly OPERATION: XNodeInfo$Type;
            readonly OPERATIONS: XNodeInfo$Type;
          }
          let XNodeInfo$Type: _XNodeInfo$Type$$static;
          interface _XNodeInfo$Type {
          }
          interface XNodeInfo$Type extends CombineTypes<[_XNodeInfo$Type]> {}
          interface _XObject$$static extends ClassLike {
            hashCodeRepresentation(): boolean;
            useHashCodeRepresentation(useHashCodeRepresentation: boolean): void;
            readonly NULL_OBJECT: XObject;
            _useHashCodeRepresentation: boolean;
            new(object: any, icon: javax.swing.Icon): XObject;
            new(object: any): XObject;
          }
          let XObject: _XObject$$static;
          interface _XObject {
            equals(o: any): boolean;
            getObject(): any;
            hashCode(): int;
            setObject(object: any): void;
            _object: any;
          }
          interface XObject extends CombineTypes<[_XObject, javax.swing.JLabel]> {}
          interface _XOpenTypeViewer$$static extends ClassLike {
            isViewableValue(value: any): boolean;
            loadOpenType(value: any): java.awt.Component;
            _compositeNavigationSingle: string;
            _editor: javax.swing.table.TableCellEditor;
            _tabularNavigationSingle: string;
          }
          let XOpenTypeViewer: _XOpenTypeViewer$$static;
          interface _XOpenTypeViewer {
            actionPerformed(event: java.awt.event.ActionEvent): void;
            _setOpenType(data: XOpenTypeViewer$XOpenTypeData): void;
            _setupDisplay(data: XOpenTypeViewer$XOpenTypeData): void;
            _compositeLabel: javax.swing.JLabel;
            _container: javax.swing.JScrollPane;
            _current: XOpenTypeViewer$XOpenTypeData;
            _decr: javax.swing.JButton;
            _incr: javax.swing.JButton;
            _listener: XOpenTypeViewer$XOpenTypeDataListener;
            _prev: javax.swing.JButton;
            _tabularLabel: javax.swing.JLabel;
            _tabularNext: javax.swing.JButton;
            _tabularPrev: javax.swing.JButton;
          }
          interface XOpenTypeViewer extends CombineTypes<[_XOpenTypeViewer, java.awt.event.ActionListener, javax.swing.JPanel]> {}
          interface _XOpenTypeViewer$Navigatable$$static extends ClassLike {
          }
          let XOpenTypeViewer$Navigatable: _XOpenTypeViewer$Navigatable$$static;
          interface _XOpenTypeViewer$Navigatable {
            canDecrement(): boolean;
            canIncrement(): boolean;
            decrElement(): void;
            getElementCount(): int;
            getSelectedElementIndex(): int;
            incrElement(): void;
          }
          interface XOpenTypeViewer$Navigatable extends CombineTypes<[_XOpenTypeViewer$Navigatable, java.lang.Object]> {}
          interface _XOpenTypeViewer$TabularDataComparator$$static extends ClassLike {
            new(type: javax.management.openmbean.TabularType): XOpenTypeViewer$TabularDataComparator;
          }
          let XOpenTypeViewer$TabularDataComparator: _XOpenTypeViewer$TabularDataComparator$$static;
          interface _XOpenTypeViewer$TabularDataComparator {
            compare(o1: javax.management.openmbean.CompositeData, o2: javax.management.openmbean.CompositeData): int;
            compare(a0: any, a1: any): int;
            _indexNames: java.util.List<string>;
          }
          interface XOpenTypeViewer$TabularDataComparator extends CombineTypes<[_XOpenTypeViewer$TabularDataComparator, java.util.Comparator<javax.management.openmbean.CompositeData>, java.lang.Object]> {}
          interface _XOpenTypeViewer$XArrayData$$static extends ClassLike {
            _new(parent: XOpenTypeViewer$XOpenTypeData, type: javax.management.openmbean.ArrayType<any>, val: any): XOpenTypeViewer$XArrayData;
            _new(parent: XOpenTypeViewer$XOpenTypeData, dimension: int, elemType: javax.management.openmbean.OpenType<any>, val: any): XOpenTypeViewer$XArrayData;
          }
          let XOpenTypeViewer$XArrayData: _XOpenTypeViewer$XArrayData$$static;
          interface _XOpenTypeViewer$XArrayData {
            canDecrement(): boolean;
            canIncrement(): boolean;
            decrElement(): void;
            getElementCount(): int;
            getSelectedElementIndex(): int;
            incrElement(): void;
            _load(): void;
            _loadArray(): void;
            renderKey(key: string, comp: java.awt.Component): void;
            toString(): string;
            viewed(viewer: XOpenTypeViewer): void;
            _arrayColumns: string[];
            _boldFont: java.awt.Font;
            _currentIndex: int;
            _dimension: int;
            _elemType: javax.management.openmbean.OpenType<any>;
            _elements: javax.management.openmbean.CompositeData[];
            _isCompositeType: boolean;
            _isTabularType: boolean;
            _normalFont: java.awt.Font;
            _size: int;
            _val: any;
          }
          interface XOpenTypeViewer$XArrayData extends CombineTypes<[_XOpenTypeViewer$XArrayData, sun.tools.jconsole.inspector.XOpenTypeViewer$XViewedArrayData, sun.tools.jconsole.inspector.XOpenTypeViewer$XCompositeData]> {}
          interface _XOpenTypeViewer$XCompositeData$$static extends ClassLike {
            new(): XOpenTypeViewer$XCompositeData;
            new(parent: XOpenTypeViewer$XOpenTypeData): XOpenTypeViewer$XCompositeData;
            new(parent: XOpenTypeViewer$XOpenTypeData, composite: javax.management.openmbean.CompositeData): XOpenTypeViewer$XCompositeData;
          }
          let XOpenTypeViewer$XCompositeData: _XOpenTypeViewer$XCompositeData$$static;
          interface _XOpenTypeViewer$XCompositeData {
            _formatKey(key: string): any;
            _load(data: javax.management.openmbean.CompositeData): void;
            _loadCompositeData(data: javax.management.openmbean.CompositeData): void;
            toString(): string;
            viewed(viewer: XOpenTypeViewer): void;
            _columnNames: string[];
            _composite: javax.management.openmbean.CompositeData;
          }
          interface XOpenTypeViewer$XCompositeData extends CombineTypes<[_XOpenTypeViewer$XCompositeData, sun.tools.jconsole.inspector.XOpenTypeViewer$XOpenTypeData]> {}
          interface _XOpenTypeViewer$XOpenTypeData$$static extends ClassLike {
            _new(parent: XOpenTypeViewer$XOpenTypeData): XOpenTypeViewer$XOpenTypeData;
          }
          let XOpenTypeViewer$XOpenTypeData: _XOpenTypeViewer$XOpenTypeData$$static;
          interface _XOpenTypeViewer$XOpenTypeData {
            _emptyTable(): void;
            getCellRenderer(row: int, column: int): javax.swing.table.TableCellRenderer;
            getToolTip(row: int, col: int): string;
            getViewedParent(): XOpenTypeViewer$XOpenTypeData;
            _initTable(columnNames: string[]): void;
            _isClickableElement(obj: any): boolean;
            prepareRenderer(renderer: javax.swing.table.TableCellRenderer, row: int, column: int): java.awt.Component;
            renderKey(key: string, comp: java.awt.Component): void;
            setValueAt(value: any, row: int, col: int): void;
            _updateColumnWidth(): void;
            viewed(a0: XOpenTypeViewer): void;
(a0: XOpenTypeViewer): void;
            _boldFont: java.awt.Font;
            _col1Width: int;
            _col2Width: int;
            _init: boolean;
            _normalFont: java.awt.Font;
            _parent: XOpenTypeViewer$XOpenTypeData;
          }
          interface XOpenTypeViewer$XOpenTypeData extends CombineTypes<[_XOpenTypeViewer$XOpenTypeData, javax.swing.JTable]> {}
          interface _XOpenTypeViewer$XOpenTypeDataListener$$static extends ClassLike {
            _new(this$0: XOpenTypeViewer): XOpenTypeViewer$XOpenTypeDataListener;
          }
          let XOpenTypeViewer$XOpenTypeDataListener: _XOpenTypeViewer$XOpenTypeDataListener$$static;
          interface _XOpenTypeViewer$XOpenTypeDataListener {
            _getSelectedViewedOpenType(): XOpenTypeViewer$XOpenTypeData;
            mousePressed(e: java.awt.event.MouseEvent): void;
            _this$0: XOpenTypeViewer;
          }
          interface XOpenTypeViewer$XOpenTypeDataListener extends CombineTypes<[_XOpenTypeViewer$XOpenTypeDataListener, java.awt.event.MouseAdapter]> {}
          interface _XOpenTypeViewer$XTabularData$$static extends ClassLike {
            _accessFirstElement(tabular: javax.management.openmbean.TabularData): javax.management.openmbean.CompositeData;
            new(parent: XOpenTypeViewer$XOpenTypeData, tabular: javax.management.openmbean.TabularData): XOpenTypeViewer$XTabularData;
          }
          let XOpenTypeViewer$XTabularData: _XOpenTypeViewer$XTabularData$$static;
          interface _XOpenTypeViewer$XTabularData {
            canDecrement(): boolean;
            canIncrement(): boolean;
            decrElement(): void;
            getElementCount(): int;
            getSelectedElementIndex(): int;
            incrElement(): void;
            renderKey(key: string, comp: java.awt.Component): void;
            toString(): string;
            _currentIndex: int;
            _elements: any[];
            _italicFont: java.awt.Font;
            _normalFont: java.awt.Font;
            _size: int;
            _tabular: javax.management.openmbean.TabularData;
            _type: javax.management.openmbean.TabularType;
          }
          interface XOpenTypeViewer$XTabularData extends CombineTypes<[_XOpenTypeViewer$XTabularData, sun.tools.jconsole.inspector.XOpenTypeViewer$XViewedTabularData, sun.tools.jconsole.inspector.XOpenTypeViewer$XCompositeData]> {}
          interface _XOpenTypeViewer$XViewedArrayData$$static extends ClassLike {
          }
          let XOpenTypeViewer$XViewedArrayData: _XOpenTypeViewer$XViewedArrayData$$static;
          interface _XOpenTypeViewer$XViewedArrayData {
          }
          interface XOpenTypeViewer$XViewedArrayData extends CombineTypes<[_XOpenTypeViewer$XViewedArrayData, sun.tools.jconsole.inspector.XOpenTypeViewer$Navigatable, java.lang.Object]> {}
          interface _XOpenTypeViewer$XViewedTabularData$$static extends ClassLike {
          }
          let XOpenTypeViewer$XViewedTabularData: _XOpenTypeViewer$XViewedTabularData$$static;
          interface _XOpenTypeViewer$XViewedTabularData {
          }
          interface XOpenTypeViewer$XViewedTabularData extends CombineTypes<[_XOpenTypeViewer$XViewedTabularData, sun.tools.jconsole.inspector.XOpenTypeViewer$Navigatable, java.lang.Object]> {}
          interface _XOperations$$static extends ClassLike {
            readonly OPERATION_INVOCATION_EVENT: string;
            new(mbeansTab: MBeansTab): XOperations;
          }
          let XOperations: _XOperations$$static;
          interface _XOperations {
            actionPerformed(e: java.awt.event.ActionEvent): void;
            addOperationsListener(nl: javax.management.NotificationListener): void;
            _fireChangedNotification(type: string, source: any, handback: any): void;
            _isCallable(signature: javax.management.MBeanParameterInfo[]): boolean;
            loadOperations(mbean: XMBean, mbeanInfo: javax.management.MBeanInfo): void;
            _performInvokeRequest(button: javax.swing.JButton): void;
            removeOperations(): void;
            removeOperationsListener(nl: javax.management.NotificationListener): void;
            _updateOperations(a0: javax.management.MBeanOperationInfo[]): javax.management.MBeanOperationInfo[];
(a0: javax.management.MBeanOperationInfo[]): javax.management.MBeanOperationInfo[];
            _mbean: XMBean;
            _mbeanInfo: javax.management.MBeanInfo;
            _mbeansTab: MBeansTab;
            _notificationListenersList: java.util.List<javax.management.NotificationListener>;
            _operationEntryTable: java.util.Hashtable<javax.swing.JButton,OperationEntry>;
          }
          interface XOperations extends CombineTypes<[_XOperations, java.awt.event.ActionListener, javax.swing.JPanel]> {}
          interface _XPlotter$$static extends ClassLike {
            new(table: javax.swing.JTable, unit: Plotter$Unit): XPlotter;
          }
          let XPlotter: _XPlotter$$static;
          interface _XPlotter {
            addValues(time: long, a1: long[]): void;
            addValues(time: long, ...a1: long[]): void;
            _table: javax.swing.JTable;
          }
          interface XPlotter extends CombineTypes<[_XPlotter, sun.tools.jconsole.Plotter]> {}
          interface _XPlottingViewer$$static extends ClassLike {
            _dispose(tab: MBeansTab): void;
            isViewableValue(value: any): boolean;
            loadPlotting(mbean: XMBean, attributeName: string, value: any, table: javax.swing.JTable, tab: MBeansTab): java.awt.Component;
            _PLOTTER_DECIMALS: int;
            _plotterCache: java.util.HashMap<string,XPlottingViewer>;
            _timerCache: java.util.HashMap<string,java.util.Timer>;
          }
          let XPlottingViewer: _XPlottingViewer$$static;
          interface _XPlottingViewer {
            actionPerformed(evt: java.awt.event.ActionEvent): void;
            createPlotter(xmbean: XMBean, attributeName: string, key: string, table: javax.swing.JTable): Plotter;
            _setupDisplay(plotter: Plotter): void;
            _attributeName: string;
            _key: string;
            _plotButton: javax.swing.JButton;
            _tab: MBeansTab;
            _table: javax.swing.JTable;
          }
          interface XPlottingViewer extends CombineTypes<[_XPlottingViewer, java.awt.event.ActionListener, sun.tools.jconsole.PlotterPanel]> {}
          interface _XSheet$$static extends ClassLike {
            new(mbeansTab: MBeansTab): XSheet;
          }
          let XSheet: _XSheet$$static;
          interface _XSheet {
            actionPerformed(e: java.awt.event.ActionEvent): void;
            _clear(): void;
            _clearCurrentNotifications(): void;
            _clearNotifications(): void;
            _clearNotifications0(): void;
            _displayEmptyNode(): void;
            _displayMBeanAttributesNode(node: javax.swing.tree.DefaultMutableTreeNode): void;
            _displayMBeanNode(node: javax.swing.tree.DefaultMutableTreeNode): void;
            _displayMBeanNotificationsNode(node: javax.swing.tree.DefaultMutableTreeNode): void;
            _displayMBeanOperationsNode(node: javax.swing.tree.DefaultMutableTreeNode): void;
            _displayMetadataNode(node: javax.swing.tree.DefaultMutableTreeNode): void;
            displayNode(node: javax.swing.tree.DefaultMutableTreeNode): void;
            dispose(): void;
            handleNotification(e: javax.management.Notification, handback: any): void;
            isMBeanNode(node: javax.swing.tree.DefaultMutableTreeNode): boolean;
            _isSelectedNode(n: javax.swing.tree.DefaultMutableTreeNode, cn: javax.swing.tree.DefaultMutableTreeNode): boolean;
            _refreshAttributes(): void;
            _registerListener(): void;
            _setupScreen(): void;
            _showErrorDialog(message: any, title: string): void;
            _unregisterListener(): void;
            _updateNotifications(): void;
            _updateNotificationsNodeLabel(node: javax.swing.tree.DefaultMutableTreeNode, label: string): void;
            _updateReceivedNotifications(emitter: javax.swing.tree.DefaultMutableTreeNode, received: long, a2: boolean): void;
            _clearButton: javax.swing.JButton;
            _currentNode: javax.swing.tree.DefaultMutableTreeNode;
            _mainPanel: javax.swing.JPanel;
            _mbean: XMBean;
            _mbeanAttributes: XMBeanAttributes;
            _mbeanInfo: XMBeanInfo;
            _mbeanNotifications: XMBeanNotifications;
            _mbeanOperations: XMBeanOperations;
            _mbeansTab: MBeansTab;
            _refreshButton: javax.swing.JButton;
            _southPanel: javax.swing.JPanel;
            _subscribeButton: javax.swing.JButton;
            _unsubscribeButton: javax.swing.JButton;
          }
          interface XSheet extends CombineTypes<[_XSheet, javax.management.NotificationListener, java.awt.event.ActionListener, javax.swing.JPanel]> {}
          interface _XTable$$static extends ClassLike {
            _NAME_COLUMN: int;
            _VALUE_COLUMN: int;
            new(): XTable;
          }
          let XTable: _XTable$$static;
          interface _XTable {
            convertRowToIndex(row: int): int;
            emptyTable(): void;
            getCellRenderer(row: int, column: int): javax.swing.table.TableCellRenderer;
            getClassName(a0: int): string;
            _getDefaultColor(): java.awt.Color;
            _getEditableColor(): java.awt.Color;
            getSelectedIndex(): int;
            getToolTip(row: int, column: int): string;
            getValue(a0: int): any;
            getValueName(a0: int): string;
            isAttributeViewable(a0: int, a1: int): boolean;
            isCellDroppable(row: int, col: int): boolean;
            isCellEditable(row: int, col: int): boolean;
            isCellError(a0: int, a1: int): boolean;
            isColumnEditable(a0: int): boolean;
            isReadWrite(row: int): boolean;
            isReadable(a0: int): boolean;
            isTableEditable(): boolean;
            isWritable(a0: int): boolean;
            prepareRenderer(renderer: javax.swing.table.TableCellRenderer, row: int, column: int): java.awt.Component;
            setTableValue(a0: any, a1: int): void;
            _sortRequested(column: int): void;
            _boldFont: java.awt.Font;
            _defaultColor: java.awt.Color;
            _editableColor: java.awt.Color;
            _errorColor: java.awt.Color;
            _normalFont: java.awt.Font;
          }
          interface XTable extends CombineTypes<[_XTable, javax.swing.JTable]> {}
          interface _XTextField$$static extends ClassLike {
            getNullSelectionAllowed(): boolean;
            setNullSelectionAllowed(allowNullSelection: boolean): void;
            _COMPATIBLE_VALUE: int;
            _CURRENT_VALUE: int;
            _NULL_VALUE: int;
            _allowNullSelection: boolean;
            new(): XTextField;
            new(value: any): XTextField;
            new(value: any, colWidth: int): XTextField;
            new(value: any, expectedClass: java.lang.Class<any>, colWidth: int, isCallable: boolean, button: javax.swing.JButton, operation: XOperations): XTextField;
          }
          let XTextField: _XTextField$$static;
          interface _XTextField {
            actionPerformed(e: java.awt.event.ActionEvent): void;
            _buildJMenuItem(xobject: XObject, valueType: int): javax.swing.JMenuItem;
            changedUpdate(e: javax.swing.event.DocumentEvent): void;
            _clearObject(): void;
            getValue(): any;
            _init(value: any, expectedClass: java.lang.Class<any>): void;
            insertUpdate(e: javax.swing.event.DocumentEvent): void;
            removeUpdate(e: javax.swing.event.DocumentEvent): void;
            _setDefaultColors(): void;
            setHorizontalAlignment(h: int): void;
            _button: javax.swing.JButton;
            _operation: XOperations;
            _selectedObject: XObject;
            _textField: javax.swing.JTextField;
          }
          interface XTextField extends CombineTypes<[_XTextField, javax.swing.event.DocumentListener, java.awt.event.ActionListener, javax.swing.JPanel]> {}
          interface _XTextFieldEditor$$static extends ClassLike {
            new(): XTextFieldEditor;
          }
          let XTextFieldEditor: _XTextFieldEditor$$static;
          interface _XTextFieldEditor {
            actionPerformed(e: java.awt.event.ActionEvent): void;
            addCellEditorListener(listener: javax.swing.event.CellEditorListener): void;
            cancelCellEditing(): void;
            _dropSuccess(): void;
            _fireEditingCanceled(): void;
            _fireEditingStopped(): void;
            getCellEditorValue(): any;
            getTableCellEditorComponent(table: javax.swing.JTable, value: any, isSelected: boolean, row: int, column: int): java.awt.Component;
            isCellEditable(event: java.util.EventObject): boolean;
            removeCellEditorListener(listener: javax.swing.event.CellEditorListener): void;
            shouldSelectCell(event: java.util.EventObject): boolean;
            stopCellEditing(): boolean;
            _changeEvent: javax.swing.event.ChangeEvent;
            _editorFocusListener: java.awt.event.FocusListener;
            _evtListenerList: javax.swing.event.EventListenerList;
          }
          interface XTextFieldEditor extends CombineTypes<[_XTextFieldEditor, javax.swing.table.TableCellEditor, sun.tools.jconsole.inspector.XTextField]> {}
          interface _XTree$$static extends ClassLike {
            _extractKeyValuePairs(props: string, mbean: javax.management.ObjectName): java.util.Map<string,string>;
            _getKeyPropertyListString(mbean: javax.management.ObjectName): string;
            _getTreeViewValue(): boolean;
            _isTreeView(): boolean;
            _orderedKeyPropertyList: java.util.List<string>;
            _treeView: boolean;
            _treeViewInit: boolean;
            new(mbeansTab: MBeansTab): XTree;
            new(root: javax.swing.tree.TreeNode, mbeansTab: MBeansTab): XTree;
          }
          let XTree: _XTree$$static;
          interface _XTree {
            _addChildNode(parent: javax.swing.tree.DefaultMutableTreeNode, child: javax.swing.tree.DefaultMutableTreeNode, index: int): void;
            _addChildNode(parent: javax.swing.tree.DefaultMutableTreeNode, child: javax.swing.tree.DefaultMutableTreeNode): void;
            addMBeanToView(mbean: javax.management.ObjectName): void;
            _addMBeanToView(mbean: javax.management.ObjectName, xmbean: XMBean, dn: XTree$Dn): void;
            addMBeansToView(mbeans: java.util.Set<javax.management.ObjectName>): void;
            addMetadataNodes(node: javax.swing.tree.DefaultMutableTreeNode): void;
            _changeNodeValue(node: javax.swing.tree.DefaultMutableTreeNode, nodeValue: XNodeInfo): void;
            _createDnNode(dn: XTree$Dn, token: XTree$Token, xmbean: XMBean): javax.swing.tree.DefaultMutableTreeNode;
            _createDomainNode(dn: XTree$Dn, token: XTree$Token): javax.swing.tree.DefaultMutableTreeNode;
            _createNodeValue(xmbean: XMBean, token: XTree$Token): any;
            _createSubDnNode(dn: XTree$Dn, token: XTree$Token): javax.swing.tree.DefaultMutableTreeNode;
            hasMetadataNodes(node: javax.swing.tree.DefaultMutableTreeNode): boolean;
            _hasNonMetadataNodes(node: javax.swing.tree.DefaultMutableTreeNode): boolean;
            _isKeyValueView(): boolean;
            isMetadataNode(node: javax.swing.tree.DefaultMutableTreeNode): boolean;
            removeAll(): void;
            _removeChildNode(child: javax.swing.tree.DefaultMutableTreeNode): void;
            removeMBeanFromView(mbean: javax.management.ObjectName): void;
            _removeMetadataNodes(node: javax.swing.tree.DefaultMutableTreeNode): void;
            _removeParentFromView(dn: XTree$Dn, index: int, node: javax.swing.tree.DefaultMutableTreeNode): javax.swing.tree.DefaultMutableTreeNode;
            _keyValueView: boolean;
            _mbeansTab: MBeansTab;
            _nodes: java.util.Map<string,javax.swing.tree.DefaultMutableTreeNode>;
          }
          interface XTree extends CombineTypes<[_XTree, javax.swing.JTree]> {}
          interface _XTree$ComparableDefaultMutableTreeNode$$static extends ClassLike {
          }
          let XTree$ComparableDefaultMutableTreeNode: _XTree$ComparableDefaultMutableTreeNode$$static;
          interface _XTree$ComparableDefaultMutableTreeNode {
            compareTo(node: javax.swing.tree.DefaultMutableTreeNode): int;
            compareTo(a0: any): int;
          }
          interface XTree$ComparableDefaultMutableTreeNode extends CombineTypes<[_XTree$ComparableDefaultMutableTreeNode, java.lang.Comparable<javax.swing.tree.DefaultMutableTreeNode>, javax.swing.tree.DefaultMutableTreeNode]> {}
          interface _XTree$Dn$$static extends ClassLike {
            new(mbean: javax.management.ObjectName): XTree$Dn;
          }
          let XTree$Dn: _XTree$Dn$$static;
          interface _XTree$Dn {
            compareTo(dn: XTree$Dn): int;
            compareTo(a0: any): int;
            _computeHashDn(): void;
            getDomain(): string;
            getHashDn(): string;
            getHashKey(token: XTree$Token): string;
            getKeyPropertyList(): string;
            getObjectName(): javax.management.ObjectName;
            getToken(index: int): XTree$Token;
            getTokenCount(): int;
            toString(): string;
            _domain: string;
            _hashDn: string;
            _keyPropertyList: string;
            _mbean: javax.management.ObjectName;
            _tokens: java.util.List<XTree$Token>;
          }
          interface XTree$Dn extends CombineTypes<[_XTree$Dn, java.lang.Object, java.lang.Comparable<XTree$Dn>]> {}
          interface _XTree$MBeanInfoNodesSwingWorker$$static extends ClassLike {
            new(model: javax.swing.tree.DefaultTreeModel, node: javax.swing.tree.DefaultMutableTreeNode, mbean: XMBean): XTree$MBeanInfoNodesSwingWorker;
          }
          let XTree$MBeanInfoNodesSwingWorker: _XTree$MBeanInfoNodesSwingWorker$$static;
          interface _XTree$MBeanInfoNodesSwingWorker {
            _addMBeanInfoNodes(tree: javax.swing.tree.DefaultTreeModel, node: javax.swing.tree.DefaultMutableTreeNode, mbean: XMBean, mbeanInfo: javax.management.MBeanInfo, isBroadcaster: boolean): void;
            doInBackground(): any[];
            doInBackground(): any;
            _done(): void;
            _mbean: XMBean;
            _model: javax.swing.tree.DefaultTreeModel;
            _node: javax.swing.tree.DefaultMutableTreeNode;
          }
          interface XTree$MBeanInfoNodesSwingWorker extends CombineTypes<[_XTree$MBeanInfoNodesSwingWorker, javax.swing.SwingWorker<any[],java.lang.Void>]> {}
          interface _XTree$Token$$static extends ClassLike {
            new(tokenType: string, tokenValue: string): XTree$Token;
          }
          let XTree$Token: _XTree$Token$$static;
          interface _XTree$Token {
            _buildKeyValue(): void;
            getKey(): string;
            getTokenType(): string;
            getTokenValue(): string;
            getValue(): string;
            _key: string;
            _tokenType: string;
            _tokenValue: string;
            _value: string;
          }
          interface XTree$Token extends CombineTypes<[_XTree$Token, java.lang.Object]> {}
          interface _XTreeRenderer$$static extends ClassLike {
            new(): XTreeRenderer;
          }
          let XTreeRenderer: _XTreeRenderer$$static;
          interface _XTreeRenderer {
            getTreeCellRendererComponent(tree: javax.swing.JTree, value: any, selected: boolean, expanded: boolean, leaf: boolean, row: int, hasFocus: boolean): java.awt.Component;
          }
          interface XTreeRenderer extends CombineTypes<[_XTreeRenderer, javax.swing.tree.DefaultTreeCellRenderer]> {}
        }
        interface _AboutDialog$$static extends ClassLike {
          _browseUserGuide(jConsole: JConsole): void;
          _getAboutDialog(jConsole: JConsole): AboutDialog;
          _getOnlineDocUrl(): string;
          _isBrowseSupported(): boolean;
          _showAboutDialog(jConsole: JConsole): void;
          _aboutDialog: AboutDialog;
          _bgColor: java.awt.Color;
          _borderColor: java.awt.Color;
          _textColor: java.awt.Color;
          new(jConsole: JConsole): AboutDialog;
        }
        let AboutDialog: _AboutDialog$$static;
        interface _AboutDialog {
          _browse(urlStr: string): void;
          _createActions(): void;
          highlight(): void;
          removeHighlights(): void;
          showDialog(): void;
          _closeAction: javax.swing.Action;
          _helpLink: javax.swing.JEditorPane;
          _mastheadIcon: javax.swing.Icon;
          _statusBar: javax.swing.JLabel;
          _urlStr: string;
        }
        interface AboutDialog extends CombineTypes<[_AboutDialog, sun.tools.jconsole.InternalDialog]> {}
        interface _AboutDialog$HighlightPainter$$static extends ClassLike {
          new(): AboutDialog$HighlightPainter;
        }
        let AboutDialog$HighlightPainter: _AboutDialog$HighlightPainter$$static;
        interface _AboutDialog$HighlightPainter {
          paintLayer(g: java.awt.Graphics, offs0: int, offs1: int, bounds: java.awt.Shape, c: javax.swing.text.JTextComponent, view: javax.swing.text.View): java.awt.Shape;
        }
        interface AboutDialog$HighlightPainter extends CombineTypes<[_AboutDialog$HighlightPainter, javax.swing.text.DefaultHighlighter$DefaultHighlightPainter]> {}
        interface _AboutDialog$TPanel$$static extends ClassLike {
          _new(hgap: int, vgap: int): AboutDialog$TPanel;
        }
        let AboutDialog$TPanel: _AboutDialog$TPanel$$static;
        interface _AboutDialog$TPanel {
        }
        interface AboutDialog$TPanel extends CombineTypes<[_AboutDialog$TPanel, javax.swing.JPanel]> {}
        interface _BorderedComponent$$static extends ClassLike {
          _getImage(name: string): java.awt.Image;
          new(text: string): BorderedComponent;
          new(text: string, comp: javax.swing.JComponent): BorderedComponent;
          new(text: string, comp: javax.swing.JComponent, collapsible: boolean): BorderedComponent;
        }
        let BorderedComponent: _BorderedComponent$$static;
        interface _BorderedComponent {
          actionPerformed(ev: java.awt.event.ActionEvent): void;
          doLayout(): void;
          getMinimumSize(): java.awt.Dimension;
          setComponent(comp: javax.swing.JComponent): void;
          setValueLabel(str: string): void;
          _collapseIcon: javax.swing.Icon;
          _collapsed: boolean;
          _comp: javax.swing.JComponent;
          _expandIcon: javax.swing.Icon;
          _label: javax.swing.JLabel;
          _moreOrLessButton: javax.swing.JButton;
          _valueLabelStr: string;
        }
        interface BorderedComponent extends CombineTypes<[_BorderedComponent, java.awt.event.ActionListener, javax.swing.JPanel]> {}
        interface _BorderedComponent$ArrowIcon$$static extends ClassLike {
          new(direction: int, textLabel: javax.swing.JLabel): BorderedComponent$ArrowIcon;
        }
        let BorderedComponent$ArrowIcon: _BorderedComponent$ArrowIcon$$static;
        interface _BorderedComponent$ArrowIcon {
          getIconHeight(): int;
          getIconWidth(): int;
          paintIcon(c: java.awt.Component, g: java.awt.Graphics, x: int, y: int): void;
          _direction: int;
          _textLabel: javax.swing.JLabel;
        }
        interface BorderedComponent$ArrowIcon extends CombineTypes<[_BorderedComponent$ArrowIcon, java.lang.Object, javax.swing.Icon]> {}
        interface _BorderedComponent$FocusBorder$$static extends ClassLike {
          new(comp: java.awt.Component): BorderedComponent$FocusBorder;
        }
        let BorderedComponent$FocusBorder: _BorderedComponent$FocusBorder$$static;
        interface _BorderedComponent$FocusBorder {
          focusGained(e: java.awt.event.FocusEvent): void;
          focusLost(e: java.awt.event.FocusEvent): void;
          getBorderInsets(c: java.awt.Component, insets: java.awt.Insets): java.awt.Insets;
          paintBorder(c: java.awt.Component, g: java.awt.Graphics, x: int, y: int, width: int, height: int): void;
          _comp: java.awt.Component;
          _focusColor: java.awt.Color;
          _focusLostTemporarily: boolean;
        }
        interface BorderedComponent$FocusBorder extends CombineTypes<[_BorderedComponent$FocusBorder, java.awt.event.FocusListener, javax.swing.border.AbstractBorder]> {}
        interface _BorderedComponent$LabeledBorder$$static extends ClassLike {
          _computeIntersection(dest: java.awt.Rectangle, rx: int, ry: int, rw: int, rh: int): boolean;
          new(label: javax.swing.JComponent): BorderedComponent$LabeledBorder;
          new(border: javax.swing.border.Border): BorderedComponent$LabeledBorder;
          new(border: javax.swing.border.Border, label: javax.swing.JComponent): BorderedComponent$LabeledBorder;
        }
        let BorderedComponent$LabeledBorder: _BorderedComponent$LabeledBorder$$static;
        interface _BorderedComponent$LabeledBorder {
          getBorderInsets(c: java.awt.Component, insets: java.awt.Insets): java.awt.Insets;
          getLabel(): javax.swing.JComponent;
          getMinimumSize(c: java.awt.Component): java.awt.Dimension;
          paintBorder(c: java.awt.Component, g: java.awt.Graphics, x: int, y: int, width: int, height: int): void;
          setLabel(label: javax.swing.JComponent): void;
          _compLoc: java.awt.Point;
          _label: javax.swing.JComponent;
        }
        interface BorderedComponent$LabeledBorder extends CombineTypes<[_BorderedComponent$LabeledBorder, javax.swing.border.TitledBorder]> {}
        interface _ClassTab$$static extends ClassLike {
          getTabName(): string;
          _loadedPlotterColor: java.awt.Color;
          _loadedPlotterKey: string;
          _totalLoadedPlotterColor: java.awt.Color;
          _totalLoadedPlotterKey: string;
          new(vmPanel: VMPanel): ClassTab;
        }
        let ClassTab: _ClassTab$$static;
        interface _ClassTab {
          actionPerformed(ev: java.awt.event.ActionEvent): void;
          _getOverviewPanels(): OverviewPanel[];
          newSwingWorker(): javax.swing.SwingWorker<any,any>;
          _details: HTMLPane;
          _loadedClassesMeter: PlotterPanel;
          _overviewPanel: ClassTab$ClassOverviewPanel;
          _plotterListening: boolean;
          _timeComboBox: TimeComboBox;
          _verboseCheckBox: javax.swing.JCheckBox;
        }
        interface ClassTab extends CombineTypes<[_ClassTab, java.awt.event.ActionListener, sun.tools.jconsole.Tab]> {}
        interface _ClassTab$ClassOverviewPanel$$static extends ClassLike {
          _new(): ClassTab$ClassOverviewPanel;
        }
        let ClassTab$ClassOverviewPanel: _ClassTab$ClassOverviewPanel$$static;
        interface _ClassTab$ClassOverviewPanel {
          _updateClassInfo(total: long, a1: long): void;
        }
        interface ClassTab$ClassOverviewPanel extends CombineTypes<[_ClassTab$ClassOverviewPanel, sun.tools.jconsole.OverviewPanel]> {}
        interface _ConnectDialog$$static extends ClassLike {
          getLabelWidth(text: string): int;
          _COL_NAME: int;
          _COL_PID: int;
          _tmpLabel: javax.swing.JLabel;
          new(jConsole: JConsole): ConnectDialog;
        }
        let ConnectDialog: _ConnectDialog$$static;
        interface _ConnectDialog {
          changedUpdate(e: javax.swing.event.DocumentEvent): void;
          _createActions(): void;
          focusGained(e: java.awt.event.FocusEvent): void;
          focusLost(e: java.awt.event.FocusEvent): void;
          insertUpdate(e: javax.swing.event.DocumentEvent): void;
          itemStateChanged(ev: java.awt.event.ItemEvent): void;
          keyPressed(e: java.awt.event.KeyEvent): void;
          keyReleased(e: java.awt.event.KeyEvent): void;
          keyTyped(e: java.awt.event.KeyEvent): void;
          refresh(): void;
          removeUpdate(e: javax.swing.event.DocumentEvent): void;
          revalidate(): void;
          setConnectionParameters(url: string, host: string, port: int, userName: string, password: string, msg: string): void;
          setVisible(b: boolean): void;
          _updateButtonStates(): void;
          valueChanged(e: javax.swing.event.ListSelectionEvent): void;
          _cancelAction: javax.swing.Action;
          _cancelButton: javax.swing.JButton;
          _connectAction: javax.swing.Action;
          _connectButton: javax.swing.JButton;
          _disabledTableCellColor: java.awt.Color;
          _hintTextColor: java.awt.Color;
          _jConsole: JConsole;
          _localMessageLabel: javax.swing.JLabel;
          _localRadioButton: javax.swing.JRadioButton;
          _localTableScrollPane: javax.swing.JScrollPane;
          _mastheadIcon: javax.swing.Icon;
          _passwordTF: javax.swing.JTextField;
          _radioButtonPanel: javax.swing.JPanel;
          _remoteMessageLabel: javax.swing.JLabel;
          _remoteRadioButton: javax.swing.JRadioButton;
          _remoteTF: javax.swing.JTextField;
          _userNameTF: javax.swing.JTextField;
          _vmModel: ConnectDialog$ManagedVmTableModel;
          _vmTable: javax.swing.JTable;
        }
        interface ConnectDialog extends CombineTypes<[_ConnectDialog, java.awt.event.FocusListener, java.awt.event.KeyListener, javax.swing.event.DocumentListener, sun.tools.jconsole.InternalDialog, java.awt.event.ItemListener, javax.swing.event.ListSelectionListener]> {}
        interface _ConnectDialog$LocalTabJTable$$static extends ClassLike {
          new(a0: ConnectDialog, model: ConnectDialog$ManagedVmTableModel): ConnectDialog$LocalTabJTable;
        }
        let ConnectDialog$LocalTabJTable: _ConnectDialog$LocalTabJTable$$static;
        interface _ConnectDialog$LocalTabJTable {
          getCellRenderer(row: int, column: int): javax.swing.table.TableCellRenderer;
          getToolTipText(e: java.awt.event.MouseEvent): string;
          _rendererBorder: javax.swing.border.Border;
          _this$0: ConnectDialog;
          _vmModel: ConnectDialog$ManagedVmTableModel;
        }
        interface ConnectDialog$LocalTabJTable extends CombineTypes<[_ConnectDialog$LocalTabJTable, javax.swing.JTable]> {}
        interface _ConnectDialog$ManagedVmTableModel$$static extends ClassLike {
          _columnNames: string[];
          new(): ConnectDialog$ManagedVmTableModel;
        }
        let ConnectDialog$ManagedVmTableModel: _ConnectDialog$ManagedVmTableModel$$static;
        interface _ConnectDialog$ManagedVmTableModel {
          getColumnClass(column: int): java.lang.Class<any>;
          getColumnCount(): int;
          getColumnName(col: int): string;
          getRowCount(): int;
          getValueAt(row: int, col: int): any;
          refresh(): void;
          vmAt(pos: int): LocalVirtualMachine;
          _vmList: java.util.List<LocalVirtualMachine>;
        }
        interface ConnectDialog$ManagedVmTableModel extends CombineTypes<[_ConnectDialog$ManagedVmTableModel, javax.swing.table.AbstractTableModel]> {}
        interface _ConnectDialog$Padder$$static extends ClassLike {
          _getTextRectangle(button: javax.swing.AbstractButton): java.awt.Rectangle;
          _new(radioButton: javax.swing.JRadioButton): ConnectDialog$Padder;
        }
        let ConnectDialog$Padder: _ConnectDialog$Padder$$static;
        interface _ConnectDialog$Padder {
          getPreferredSize(): java.awt.Dimension;
          _radioButton: javax.swing.JRadioButton;
        }
        interface ConnectDialog$Padder extends CombineTypes<[_ConnectDialog$Padder, javax.swing.JPanel]> {}
        interface _CreateMBeanDialog$$static extends ClassLike {
          _HOTSPOT_MBEAN: string;
          _HOTSPOT_MBEAN_OBJECTNAME: string;
          new(jConsole: JConsole): CreateMBeanDialog;
        }
        let CreateMBeanDialog: _CreateMBeanDialog$$static;
        interface _CreateMBeanDialog {
          actionPerformed(ev: java.awt.event.ActionEvent): void;
          setVisible(b: boolean): void;
          _updateConnections(): void;
          _cancelButton: javax.swing.JButton;
          _connections: javax.swing.JComboBox<ProxyClient>;
          _createMBeanButton: javax.swing.JButton;
          _jConsole: JConsole;
          _unregisterMBeanButton: javax.swing.JButton;
        }
        interface CreateMBeanDialog extends CombineTypes<[_CreateMBeanDialog, java.awt.event.ActionListener, sun.tools.jconsole.InternalDialog]> {}
        interface _ExceptionSafePlugin$$static extends ClassLike {
          _ignoreExceptions: boolean;
          new(plugin: com.sun.tools.jconsole.JConsolePlugin): ExceptionSafePlugin;
        }
        let ExceptionSafePlugin: _ExceptionSafePlugin$$static;
        interface _ExceptionSafePlugin {
          dispose(): void;
          executeSwingWorker(sw: javax.swing.SwingWorker<any,any>): void;
          getTabs(): java.util.Map<string,javax.swing.JPanel>;
          _handleException(e: java.lang.Exception): void;
          newSwingWorker(): javax.swing.SwingWorker<any,any>;
          _showExceptionDialog(e: java.lang.Exception): void;
          _plugin: com.sun.tools.jconsole.JConsolePlugin;
        }
        interface ExceptionSafePlugin extends CombineTypes<[_ExceptionSafePlugin, com.sun.tools.jconsole.JConsolePlugin]> {}
        interface _Formatter$$static extends ClassLike {
          _formatBytes(v: long, a1: boolean): string;
          _formatBytes(v: long, a1: long): string;
          _formatBytes(v: long, a1: long, vMax: boolean): string;
          _formatClockTime(time: long): string;
          _formatDate(time: long): string;
          _formatDateTime(time: long): string;
          _formatKByteStrings(bytes: long[]): string[];
          _formatKByteStrings(...bytes: long[]): string[];
          _formatKBytes(bytes: long): string;
          _formatLong(value: long): string;
          _formatLongs(longs: long[]): string[];
          _formatLongs(...longs: long[]): string[];
          _formatNanoTime(t: long): string;
          _formatTime(t: long): string;
          _getDateTimeFormat(dtfStr: string): java.text.DateFormat;
          _justify(value: long, a1: int): string;
          _justify(str: string, size: int): string;
          _newRow(label: string, value: string): string;
          _newRow(label: string, value: string, columnPerRow: int): string;
          _newRow(label1: string, value1: string, label2: string, value2: string): string;
          _toExcelTime(time: long): double;
          _trimDouble(d: double): string;
          _DAY: long;
          _HOUR: long;
          _MINUTE: long;
          _SECOND: long;
          _cr: string;
          _dateDF: java.text.DateFormat;
          _decimalZero: string;
          _timeDF: java.text.DateFormat;
          _timeWithSecondsDF: java.text.DateFormat;
          _new(): Formatter;
        }
        let Formatter: _Formatter$$static;
        interface _Formatter {
        }
        interface Formatter extends CombineTypes<[_Formatter, java.lang.Object]> {}
        interface _HTMLPane$$static extends ClassLike {
          new(): HTMLPane;
        }
        let HTMLPane: _HTMLPane$$static;
        interface _HTMLPane {
          getHasSelection(): boolean;
          setHasSelection(b: boolean): void;
          setText(text: string): void;
          _hasSelection: boolean;
        }
        interface HTMLPane extends CombineTypes<[_HTMLPane, javax.swing.JEditorPane]> {}
        interface _InternalDialog$$static extends ClassLike {
          new(jConsole: JConsole, title: string, modal: boolean): InternalDialog;
        }
        let InternalDialog: _InternalDialog$$static;
        interface _InternalDialog {
          setLocationRelativeTo(c: java.awt.Component): void;
          _statusBar: javax.swing.JLabel;
        }
        interface InternalDialog extends CombineTypes<[_InternalDialog, javax.swing.JInternalFrame]> {}
        interface _InternalDialog$MastheadIcon$$static extends ClassLike {
          new(this$0: InternalDialog, title: string): InternalDialog$MastheadIcon;
        }
        let InternalDialog$MastheadIcon: _InternalDialog$MastheadIcon$$static;
        interface _InternalDialog$MastheadIcon {
          getIconHeight(): int;
          getIconWidth(): int;
          paintIcon(c: java.awt.Component, g: java.awt.Graphics, x: int, y: int): void;
          _font: java.awt.Font;
          _gap: int;
          _leftIcon: javax.swing.ImageIcon;
          _rightIcon: javax.swing.ImageIcon;
          _this$0: InternalDialog;
          _title: string;
        }
        interface InternalDialog$MastheadIcon extends CombineTypes<[_InternalDialog$MastheadIcon, java.lang.Object, javax.swing.Icon]> {}
        interface _JConsole$$static extends ClassLike {
          _dbgStackTrace(ex: java.lang.Exception): void;
          _fileToURL(file: java.io.File): java.net.URL;
          _getPlugins(): java.util.List<com.sun.tools.jconsole.JConsolePlugin>;
          _initEmptyPlugin(): void;
          _initPluginService(pluginPath: string): void;
          isDebug(): boolean;
          isLocalAttachAvailable(): boolean;
          _isValidRemoteString(txt: string): boolean;
          main(args: string[]): void;
          _mainInit(urls: java.util.List<string>, hostNames: java.util.List<string>, ports: java.util.List<int>, vmids: java.util.List<LocalVirtualMachine>, proxyClient: ProxyClient, noTile: boolean, hotspot: boolean): void;
          _pathToURLs(path: string): java.net.URL[];
          _updateLafValues(): void;
          _usage(): void;
          _IS_GTK: boolean;
          _IS_WIN: boolean;
          readonly ROOT_URL: string;
          _debug: boolean;
          _pluginPath: string;
          _pluginService: java.util.ServiceLoader<com.sun.tools.jconsole.JConsolePlugin>;
          _title: string;
          _updateInterval: int;
          new(hotspot: boolean): JConsole;
        }
        let JConsole: _JConsole$$static;
        interface _JConsole {
          actionPerformed(ev: java.awt.event.ActionEvent): void;
          _addFrame(vmPanel: VMPanel): VMInternalFrame;
          _addHost(hostName: string, port: int, userName: string, password: string): void;
          _addHost(hostName: string, port: int, userName: string, password: string, tile: boolean): void;
          _addProxyClient(proxyClient: ProxyClient, tile: boolean): void;
          _addUrl(url: string, userName: string, password: string, tile: boolean): void;
          _addVmid(lvm: LocalVirtualMachine): void;
          _addVmid(lvm: LocalVirtualMachine, tile: boolean): void;
          cascadeWindows(): void;
          _createMDI(): void;
          _errorMessage(ex: java.lang.Exception): string;
          _failed(ex: java.lang.Exception, url: string, userName: string, password: string): void;
          getDesktopPane(): javax.swing.JDesktopPane;
          getInternalFrames(): java.util.List<VMInternalFrame>;
          internalFrameActivated(e: javax.swing.event.InternalFrameEvent): void;
          internalFrameClosed(e: javax.swing.event.InternalFrameEvent): void;
          internalFrameClosing(e: javax.swing.event.InternalFrameEvent): void;
          internalFrameDeactivated(e: javax.swing.event.InternalFrameEvent): void;
          internalFrameDeiconified(e: javax.swing.event.InternalFrameEvent): void;
          internalFrameIconified(e: javax.swing.event.InternalFrameEvent): void;
          internalFrameOpened(e: javax.swing.event.InternalFrameEvent): void;
          _isProxyClientUsed(client: ProxyClient): boolean;
          _removeVMInternalFrame(vmIF: VMInternalFrame): void;
          _showConnectDialog(url: string, hostName: string, port: int, userName: string, password: string, msg: string): void;
          _showCreateMBeanDialog(): void;
          tileWindows(): void;
          _aboutMI: javax.swing.JMenuItem;
          _cascadeMI: javax.swing.JMenuItem;
          _connectButton: javax.swing.JButton;
          _connectDialog: ConnectDialog;
          _connectMI: javax.swing.JMenuItem;
          _createDialog: CreateMBeanDialog;
          _desktop: javax.swing.JDesktopPane;
          _exitMI: javax.swing.JMenuItem;
          _frameLoc: int;
          _hotspotMI: javax.swing.JMenuItem;
          _menuBar: javax.swing.JMenuBar;
          _minimizeAllMI: javax.swing.JMenuItem;
          _restoreAllMI: javax.swing.JMenuItem;
          _tileMI: javax.swing.JMenuItem;
          _userGuideMI: javax.swing.JMenuItem;
          _windowMenu: JConsole$WindowMenu;
          _windows: java.util.ArrayList<VMInternalFrame>;
        }
        interface JConsole extends CombineTypes<[_JConsole, java.awt.event.ActionListener, javax.swing.event.InternalFrameListener, javax.swing.JFrame]> {}
        interface _JConsole$FixedJRootPane$$static extends ClassLike {
        }
        let JConsole$FixedJRootPane: _JConsole$FixedJRootPane$$static;
        interface _JConsole$FixedJRootPane {
          revalidate(): void;
          updateUI(): void;
        }
        interface JConsole$FixedJRootPane extends CombineTypes<[_JConsole$FixedJRootPane, javax.swing.JRootPane]> {}
        interface _JConsole$WindowMenu$$static extends ClassLike {
          _new(a0: JConsole, text: string): JConsole$WindowMenu;
        }
        let JConsole$WindowMenu: _JConsole$WindowMenu$$static;
        interface _JConsole$WindowMenu {
          _add(vmIF: VMInternalFrame): void;
          _remove(vmIF: VMInternalFrame): void;
          _iconR: java.awt.Rectangle;
          _separatorPosition: int;
          _textR: java.awt.Rectangle;
          _this$0: JConsole;
          _viewR: java.awt.Rectangle;
          _windowMenuWindows: VMInternalFrame[];
        }
        interface JConsole$WindowMenu extends CombineTypes<[_JConsole$WindowMenu, javax.swing.JMenu]> {}
        interface _LabeledComponent$$static extends ClassLike {
          layout(container: java.awt.Container): void;
          new(text: string, comp: javax.swing.JComponent): LabeledComponent;
          new(text: string, mnemonic: int, comp: javax.swing.JComponent): LabeledComponent;
        }
        let LabeledComponent: _LabeledComponent$$static;
        interface _LabeledComponent {
          setLabel(str: string): void;
          setValueLabel(str: string): void;
          _updateLabel(): void;
          _comp: javax.swing.JComponent;
          _compoundStr: string;
          _label: javax.swing.JLabel;
          _labelStr: string;
          _rightPanel: javax.swing.JPanel;
          _valueLabelStr: string;
        }
        interface LabeledComponent extends CombineTypes<[_LabeledComponent, javax.swing.JPanel]> {}
        interface _LocalVirtualMachine$$static extends ClassLike {
          getAllVirtualMachines(): java.util.Map<int,LocalVirtualMachine>;
          _getAttachableVMs(map: java.util.Map<int,LocalVirtualMachine>): void;
          _getDisplayName(commandLine: string): string;
          getLocalVirtualMachine(vmid: int): LocalVirtualMachine;
          _getMonitoredVMs(map: java.util.Map<int,LocalVirtualMachine>): void;
          _LOCAL_CONNECTOR_ADDRESS_PROP: string;
          new(vmid: int, commandLine: string, canAttach: boolean, connectorAddress: string): LocalVirtualMachine;
        }
        let LocalVirtualMachine: _LocalVirtualMachine$$static;
        interface _LocalVirtualMachine {
          connectorAddress(): string;
          displayName(): string;
          isAttachable(): boolean;
          isManageable(): boolean;
          _loadManagementAgent(): void;
          startManagementAgent(): void;
          toString(): string;
          vmid(): int;
          _address: string;
          _commandLine: string;
          _displayName: string;
          _isAttachSupported: boolean;
          _vmid: int;
        }
        interface LocalVirtualMachine extends CombineTypes<[_LocalVirtualMachine, java.lang.Object]> {}
        interface _MBeansTab$$static extends ClassLike {
          getTabName(): string;
          new(vmPanel: VMPanel): MBeansTab;
        }
        let MBeansTab: _MBeansTab$$static;
        interface _MBeansTab {
          _buildMBeanServerView(): void;
          dispose(): void;
          getDataViewer(): jconsole.inspector.XDataViewer;
          getMBeanServerConnection(): javax.management.MBeanServerConnection;
          getSheet(): jconsole.inspector.XSheet;
          getSnapshotMBeanServerConnection(): ProxyClient$SnapshotMBeanServerConnection;
          getTree(): jconsole.inspector.XTree;
          getUpdateInterval(): int;
          handleNotification(notification: javax.management.Notification, handback: any): void;
          propertyChange(evt: java.beans.PropertyChangeEvent): void;
          _setupTab(): void;
          treeWillCollapse(e: javax.swing.event.TreeExpansionEvent): void;
          treeWillExpand(e: javax.swing.event.TreeExpansionEvent): void;
          update(): void;
          valueChanged(e: javax.swing.event.TreeSelectionEvent): void;
          _ml: java.awt.event.MouseListener;
          _sheet: inspector.XSheet;
          _tree: inspector.XTree;
          _viewer: inspector.XDataViewer;
        }
        interface MBeansTab extends CombineTypes<[_MBeansTab, javax.management.NotificationListener, javax.swing.event.TreeSelectionListener, java.beans.PropertyChangeListener, sun.tools.jconsole.Tab, javax.swing.event.TreeWillExpandListener]> {}
        interface _MaximizableInternalFrame$$static extends ClassLike {
          _WP_CLOSEBUTTON: any;
          _WP_MDICLOSEBUTTON: any;
          _WP_MDIMINBUTTON: any;
          _WP_MDIRESTOREBUTTON: any;
          _WP_MINBUTTON: any;
          _WP_RESTOREBUTTON: any;
          new(title: string, resizable: boolean, closable: boolean, maximizable: boolean, iconifiable: boolean): MaximizableInternalFrame;
        }
        let MaximizableInternalFrame: _MaximizableInternalFrame$$static;
        interface _MaximizableInternalFrame {
          _getMainFrame(): javax.swing.JFrame;
          _getMainMenuBar(): javax.swing.JMenuBar;
          _init(): void;
          setTitle(title: string): void;
          _updateButtonStates(): void;
          _updateFrame(): void;
          updateUI(): void;
          _enableActions: java.lang.reflect.Method;
          _isXP: boolean;
          _mainFrame: javax.swing.JFrame;
          _mainMenuBar: javax.swing.JMenuBar;
          _mainTitle: string;
          _normalBorder: javax.swing.border.Border;
          _pcl: java.beans.PropertyChangeListener;
          _setButtonIcons: java.lang.reflect.Method;
          _titlePane: javax.swing.JComponent;
        }
        interface MaximizableInternalFrame extends CombineTypes<[_MaximizableInternalFrame, javax.swing.JInternalFrame]> {}
        interface _MaximizableInternalFrame$FixedMenuBarLayout$$static extends ClassLike {
          new(target: java.awt.Container, axis: int): MaximizableInternalFrame$FixedMenuBarLayout;
        }
        let MaximizableInternalFrame$FixedMenuBarLayout: _MaximizableInternalFrame$FixedMenuBarLayout$$static;
        interface _MaximizableInternalFrame$FixedMenuBarLayout {
          layoutContainer(target: java.awt.Container): void;
        }
        interface MaximizableInternalFrame$FixedMenuBarLayout extends CombineTypes<[_MaximizableInternalFrame$FixedMenuBarLayout, javax.swing.BoxLayout]> {}
        interface _MaximizableInternalFrame$MDIButtonIcon$$static extends ClassLike {
          _new(icon: javax.swing.Icon): MaximizableInternalFrame$MDIButtonIcon;
        }
        let MaximizableInternalFrame$MDIButtonIcon: _MaximizableInternalFrame$MDIButtonIcon$$static;
        interface _MaximizableInternalFrame$MDIButtonIcon {
          getIconHeight(): int;
          getIconWidth(): int;
          paintIcon(c: java.awt.Component, g: java.awt.Graphics, x: int, y: int): void;
          _part: java.lang.reflect.Field;
          _windowsIcon: javax.swing.Icon;
        }
        interface MaximizableInternalFrame$MDIButtonIcon extends CombineTypes<[_MaximizableInternalFrame$MDIButtonIcon, java.lang.Object, javax.swing.Icon]> {}
        interface _MemoryPoolProxy$$static extends ClassLike {
          new(client: ProxyClient, poolName: javax.management.ObjectName): MemoryPoolProxy;
        }
        let MemoryPoolProxy: _MemoryPoolProxy$$static;
        interface _MemoryPoolProxy {
          getStat(): MemoryPoolStat;
          isCollectedMemoryPool(): boolean;
          _client: ProxyClient;
          _gcMBeans: java.util.Map<javax.management.ObjectName,long>;
          _lastGcInfo: com.sun.management.GcInfo;
          _pool: java.lang.management.MemoryPoolMXBean;
          _poolName: string;
        }
        interface MemoryPoolProxy extends CombineTypes<[_MemoryPoolProxy, java.lang.Object]> {}
        interface _MemoryPoolStat$$static extends ClassLike {
          _new(name: string, usageThreshold: long, a2: java.lang.management.MemoryUsage, usage: long, lastGcId: long, a5: long, lastGcStartTime: long, a7: java.lang.management.MemoryUsage, lastGcEndTime: java.lang.management.MemoryUsage): MemoryPoolStat;
        }
        let MemoryPoolStat: _MemoryPoolStat$$static;
        interface _MemoryPoolStat {
          getAfterGcUsage(): java.lang.management.MemoryUsage;
          getBeforeGcUsage(): java.lang.management.MemoryUsage;
          getCollectionUsageThreshold(): long;
          getLastGcEndTime(): long;
          getLastGcId(): long;
          getLastGcStartTime(): long;
          getPoolName(): string;
          getUsage(): java.lang.management.MemoryUsage;
          getUsageThreshold(): long;
          _afterGcUsage: java.lang.management.MemoryUsage;
          _beforeGcUsage: java.lang.management.MemoryUsage;
          _collectThreshold: long;
          _lastGcEndTime: long;
          _lastGcId: long;
          _lastGcStartTime: long;
          _poolName: string;
          _usage: java.lang.management.MemoryUsage;
          _usageThreshold: long;
        }
        interface MemoryPoolStat extends CombineTypes<[_MemoryPoolStat, java.lang.Object]> {}
        interface _MemoryTab$$static extends ClassLike {
          getTabName(): string;
          _committedColor: java.awt.Color;
          _committedKey: string;
          _maxColor: java.awt.Color;
          _maxKey: string;
          _thresholdColor: java.awt.Color;
          _thresholdKey: string;
          _usedColor: java.awt.Color;
          _usedKey: string;
          new(vmPanel: VMPanel): MemoryTab;
        }
        let MemoryTab: _MemoryTab$$static;
        interface _MemoryTab {
          actionPerformed(ev: java.awt.event.ActionEvent): void;
          _createPlotters(): void;
          _formatDetails(): string;
          gc(): void;
          _getOverviewPanels(): OverviewPanel[];
          itemStateChanged(ev: java.awt.event.ItemEvent): void;
          newSwingWorker(): javax.swing.SwingWorker<any,any>;
          _bottomPanel: javax.swing.JPanel;
          _details: HTMLPane;
          _gcButton: javax.swing.JButton;
          _heapPlotter: Plotter;
          _nonHeapPlotter: Plotter;
          _overviewPanel: MemoryTab$MemoryOverviewPanel;
          _plotterChoice: javax.swing.JComboBox<Plotter>;
          _plotterList: java.util.ArrayList<Plotter>;
          _plotterPanel: PlotterPanel;
          _poolChart: MemoryTab$PoolChart;
          _timeComboBox: TimeComboBox;
        }
        interface MemoryTab extends CombineTypes<[_MemoryTab, java.awt.event.ActionListener, sun.tools.jconsole.Tab, java.awt.event.ItemListener]> {}
        interface _MemoryTab$MemoryOverviewPanel$$static extends ClassLike {
          _new(): MemoryTab$MemoryOverviewPanel;
        }
        let MemoryTab$MemoryOverviewPanel: _MemoryTab$MemoryOverviewPanel$$static;
        interface _MemoryTab$MemoryOverviewPanel {
          _updateMemoryInfo(used: long, a1: long, committed: long): void;
        }
        interface MemoryTab$MemoryOverviewPanel extends CombineTypes<[_MemoryTab$MemoryOverviewPanel, sun.tools.jconsole.OverviewPanel]> {}
        interface _MemoryTab$PoolChart$$static extends ClassLike {
          new(a0: MemoryTab): MemoryTab$PoolChart;
        }
        let MemoryTab$PoolChart: _MemoryTab$PoolChart$$static;
        interface _MemoryTab$PoolChart {
          getAccessibleContext(): javax.accessibility.AccessibleContext;
          _getBarRect(poolPlotter: MemoryTab$PoolPlotter): java.awt.Rectangle;
          _getPlotter(e: java.awt.event.MouseEvent): Plotter;
          getPreferredSize(): java.awt.Dimension;
          getToolTipText(e: java.awt.event.MouseEvent): string;
          mouseClicked(e: java.awt.event.MouseEvent): void;
          mouseEntered(e: java.awt.event.MouseEvent): void;
          mouseExited(e: java.awt.event.MouseEvent): void;
          mousePressed(e: java.awt.event.MouseEvent): void;
          mouseReleased(e: java.awt.event.MouseEvent): void;
          paintComponent(g: java.awt.Graphics): void;
          _paintPoolBar(g: java.awt.Graphics, poolPlotter: MemoryTab$PoolPlotter): void;
          setValue(poolIndex: int, poolPlotter: MemoryTab$PoolPlotter, value: long, a3: long, threshold: long): void;
          _barGap: int;
          _barHeight: int;
          _barWidth: int;
          _bottomMargin: int;
          _greenBar: java.awt.Color;
          _greenBarBackground: java.awt.Color;
          _groupGap: int;
          _heapRect: java.awt.Rectangle;
          _height: int;
          _leftMargin: int;
          _nHeapPools: int;
          _nNonHeapPools: int;
          _nonHeapRect: java.awt.Rectangle;
          _poolPlotters: java.util.ArrayList<MemoryTab$PoolPlotter>;
          _redBarBackground: java.awt.Color;
          _rightMargin: int;
          _smallFont: java.awt.Font;
          _this$0: MemoryTab;
        }
        interface MemoryTab$PoolChart extends CombineTypes<[_MemoryTab$PoolChart, sun.tools.jconsole.BorderedComponent, javax.accessibility.Accessible, java.awt.event.MouseListener]> {}
        interface _MemoryTab$PoolChart$AccessiblePoolChart$$static extends ClassLike {
          _new(this$1: MemoryTab$PoolChart): MemoryTab$PoolChart$AccessiblePoolChart;
        }
        let MemoryTab$PoolChart$AccessiblePoolChart: _MemoryTab$PoolChart$AccessiblePoolChart$$static;
        interface _MemoryTab$PoolChart$AccessiblePoolChart {
          getAccessibleName(): string;
          _this$1: MemoryTab$PoolChart;
        }
        interface MemoryTab$PoolChart$AccessiblePoolChart extends CombineTypes<[_MemoryTab$PoolChart$AccessiblePoolChart, javax.swing.JPanel$AccessibleJPanel]> {}
        interface _MemoryTab$PoolPlotter$$static extends ClassLike {
          new(objectName: javax.management.ObjectName, name: string, isHeap: boolean): MemoryTab$PoolPlotter;
        }
        let MemoryTab$PoolPlotter: _MemoryTab$PoolPlotter$$static;
        interface _MemoryTab$PoolPlotter {
          toString(): string;
          _barX: int;
          _isHeap: boolean;
          _max: long;
          _name: string;
          _objectName: javax.management.ObjectName;
          _threshold: long;
          _value: long;
        }
        interface MemoryTab$PoolPlotter extends CombineTypes<[_MemoryTab$PoolPlotter, sun.tools.jconsole.Plotter]> {}
        interface _Messages$$static extends ClassLike {
          ACTION_CAPITALIZED: string;
          ACTION_INFO_CAPITALIZED: string;
          ALL: string;
          ARCHITECTURE: string;
          ATTRIBUTE: string;
          ATTRIBUTES: string;
          ATTRIBUTE_VALUE: string;
          ATTRIBUTE_VALUES: string;
          A_LOT_LESS_THAN: string;
          BLANK: string;
          BLOCKED_COUNT_WAITED_COUNT: string;
          BOOT_CLASS_PATH: string;
          BORDERED_COMPONENT_MORE_OR_LESS_BUTTON_TOOLTIP: string;
          _BUNDLE_NAME: string;
          CANCEL: string;
          CASCADE: string;
          CHART_COLON: string;
          CLASSES: string;
          CLASS_NAME: string;
          CLASS_PATH: string;
          CLASS_TAB_INFO_LABEL_FORMAT: string;
          CLASS_TAB_LOADED_CLASSES_PLOTTER_ACCESSIBLE_NAME: string;
          CLOSE: string;
          COLUMN_NAME: string;
          COLUMN_PID: string;
          COMMITTED: string;
          COMMITTED_MEMORY: string;
          COMMITTED_VIRTUAL_MEMORY: string;
          CONNECT: string;
          CONNECTED_PUNCTUATION_CLICK_TO_DISCONNECT_: string;
          CONNECTING_TO1: string;
          CONNECTING_TO2: string;
          CONNECTION: string;
          CONNECTION_FAILED: string;
          CONNECTION_FAILED1: string;
          CONNECTION_FAILED2: string;
          CONNECTION_FAILED_SSL1: string;
          CONNECTION_FAILED_SSL2: string;
          CONNECTION_LOST1: string;
          CONNECTION_NAME: string;
          CONNECTION_NAME__DISCONNECTED_: string;
          CONNECT_DIALOG_ACCESSIBLE_DESCRIPTION: string;
          CONNECT_DIALOG_CONNECT_BUTTON_TOOLTIP: string;
          CONNECT_DIALOG_MASTHEAD_ACCESSIBLE_NAME: string;
          CONNECT_DIALOG_MASTHEAD_TITLE: string;
          CONNECT_DIALOG_STATUS_BAR_ACCESSIBLE_NAME: string;
          CONNECT_DIALOG_TITLE: string;
          CONSTRUCTOR: string;
          CPU_USAGE: string;
          CPU_USAGE_FORMAT: string;
          CREATE: string;
          CURRENT_CLASSES_LOADED: string;
          CURRENT_HEAP_SIZE: string;
          CURRENT_VALUE: string;
          DAEMON_THREADS: string;
          DEADLOCK_TAB: string;
          DEADLOCK_TAB_N: string;
          DESCRIPTION: string;
          DESCRIPTOR: string;
          DETAILS: string;
          DETECT_DEADLOCK: string;
          DETECT_DEADLOCK_TOOLTIP: string;
          DIMENSION_IS_NOT_SUPPORTED_COLON: string;
          DISCARD_CHART: string;
          DISCONNECTED_PUNCTUATION_CLICK_TO_CONNECT_: string;
          DOUBLE_CLICK_TO_EXPAND_FORWARD_SLASH_COLLAPSE: string;
          DOUBLE_CLICK_TO_VISUALIZE: string;
          DURATION_DAYS_HOURS_MINUTES: string;
          DURATION_HOURS_MINUTES: string;
          DURATION_MINUTES: string;
          DURATION_SECONDS: string;
          EMPTY_ARRAY: string;
          ERROR: string;
          ERROR_COLON_MBEANS_ALREADY_EXIST: string;
          ERROR_COLON_MBEANS_DO_NOT_EXIST: string;
          EVENT: string;
          EXIT: string;
          EXPAND: string;
          FAIL_TO_LOAD_PLUGIN: string;
          FILE_CHOOSER_FILE_EXISTS_CANCEL_OPTION: string;
          FILE_CHOOSER_FILE_EXISTS_MESSAGE: string;
          FILE_CHOOSER_FILE_EXISTS_OK_OPTION: string;
          FILE_CHOOSER_FILE_EXISTS_TITLE: string;
          FILE_CHOOSER_SAVED_FILE: string;
          FILE_CHOOSER_SAVE_FAILED_MESSAGE: string;
          FILE_CHOOSER_SAVE_FAILED_TITLE: string;
          FIVE_MIN: string;
          FREE_PHYSICAL_MEMORY: string;
          FREE_SWAP_SPACE: string;
          GARBAGE_COLLECTOR: string;
          GC_INFO: string;
          GC_TIME: string;
          GC_TIME_DETAILS: string;
          GREATER_THAN: string;
          HEAP: string;
          HEAP_MEMORY_USAGE: string;
          HELP_ABOUT_DIALOG_ACCESSIBLE_DESCRIPTION: string;
          HELP_ABOUT_DIALOG_JAVA_VERSION: string;
          HELP_ABOUT_DIALOG_JCONSOLE_VERSION: string;
          HELP_ABOUT_DIALOG_MASTHEAD_ACCESSIBLE_NAME: string;
          HELP_ABOUT_DIALOG_MASTHEAD_TITLE: string;
          HELP_ABOUT_DIALOG_TITLE: string;
          HELP_ABOUT_DIALOG_USER_GUIDE_LINK_URL: string;
          HELP_MENU_ABOUT_TITLE: string;
          HELP_MENU_TITLE: string;
          HELP_MENU_USER_GUIDE_TITLE: string;
          HOTSPOT_MBEANS_DIALOG_ACCESSIBLE_DESCRIPTION: string;
          HOTSPOT_MBEANS_ELLIPSIS: string;
          IMPACT: string;
          INFO: string;
          INFO_CAPITALIZED: string;
          INSECURE: string;
          INVALID_PLUGIN_PATH: string;
          INVALID_URL: string;
          IS: string;
          JAVA_MONITORING___MANAGEMENT_CONSOLE: string;
          JCONSOLE_ACCESSIBLE_DESCRIPTION: string;
          JCONSOLE_COLON_: string;
          JCONSOLE_VERSION: string;
          JIT_COMPILER: string;
          KBYTES: string;
          LESS_THAN: string;
          LIBRARY_PATH: string;
          LIVE_THREADS: string;
          LOADED: string;
          LOCAL_PROCESS_COLON: string;
          MANAGEMENT_NOT_ENABLED: string;
          MANAGEMENT_WILL_BE_ENABLED: string;
          MANAGE_HOTSPOT_MBEANS_IN_COLON_: string;
          MASTHEAD_FONT: string;
          MAX: string;
          MAXIMUM_HEAP_SIZE: string;
          MBEANS: string;
          MBEANS_TAB_CLEAR_NOTIFICATIONS_BUTTON: string;
          MBEANS_TAB_CLEAR_NOTIFICATIONS_BUTTON_TOOLTIP: string;
          MBEANS_TAB_COMPOSITE_NAVIGATION_MULTIPLE: string;
          MBEANS_TAB_COMPOSITE_NAVIGATION_SINGLE: string;
          MBEANS_TAB_REFRESH_ATTRIBUTES_BUTTON: string;
          MBEANS_TAB_REFRESH_ATTRIBUTES_BUTTON_TOOLTIP: string;
          MBEANS_TAB_SUBSCRIBE_NOTIFICATIONS_BUTTON: string;
          MBEANS_TAB_SUBSCRIBE_NOTIFICATIONS_BUTTON_TOOLTIP: string;
          MBEANS_TAB_TABULAR_NAVIGATION_MULTIPLE: string;
          MBEANS_TAB_TABULAR_NAVIGATION_SINGLE: string;
          MBEANS_TAB_UNSUBSCRIBE_NOTIFICATIONS_BUTTON: string;
          MBEANS_TAB_UNSUBSCRIBE_NOTIFICATIONS_BUTTON_TOOLTIP: string;
          MBEAN_ATTRIBUTE_INFO: string;
          MBEAN_INFO: string;
          MBEAN_NOTIFICATION_INFO: string;
          MBEAN_OPERATION_INFO: string;
          MEMORY: string;
          MEMORY_POOL_LABEL: string;
          MEMORY_TAB_HEAP_PLOTTER_ACCESSIBLE_NAME: string;
          MEMORY_TAB_INFO_LABEL_FORMAT: string;
          MEMORY_TAB_NON_HEAP_PLOTTER_ACCESSIBLE_NAME: string;
          MEMORY_TAB_POOL_CHART_ABOVE_THRESHOLD: string;
          MEMORY_TAB_POOL_CHART_ACCESSIBLE_NAME: string;
          MEMORY_TAB_POOL_CHART_BELOW_THRESHOLD: string;
          MEMORY_TAB_POOL_PLOTTER_ACCESSIBLE_NAME: string;
          MESSAGE: string;
          METHOD_SUCCESSFULLY_INVOKED: string;
          MINIMIZE_ALL: string;
          MONITOR_LOCKED: string;
          NAME: string;
          NAME_AND_BUILD: string;
          NAME_STATE: string;
          NAME_STATE_LOCK_NAME: string;
          NAME_STATE_LOCK_NAME_LOCK_OWNER: string;
          NEW_CONNECTION_ELLIPSIS: string;
          NON_HEAP: string;
          NON_HEAP_MEMORY_USAGE: string;
          NOTIFICATION: string;
          NOTIFICATIONS: string;
          NOTIFICATION_BUFFER: string;
          NOTIF_TYPES: string;
          NO_DEADLOCK_DETECTED: string;
          NUMBER_OF_LOADED_CLASSES: string;
          NUMBER_OF_PROCESSORS: string;
          NUMBER_OF_THREADS: string;
          OBJECT_NAME: string;
          ONE_DAY: string;
          ONE_HOUR: string;
          ONE_MIN: string;
          ONE_MONTH: string;
          ONE_YEAR: string;
          OPERATING_SYSTEM: string;
          OPERATION: string;
          OPERATIONS: string;
          OPERATION_INVOCATION: string;
          OPERATION_RETURN_VALUE: string;
          OVERVIEW: string;
          OVERVIEW_PANEL_PLOTTER_ACCESSIBLE_NAME: string;
          PARAMETER: string;
          PASSWORD_ACCESSIBLE_NAME: string;
          PASSWORD_COLON_: string;
          PEAK: string;
          PERFORM_GC: string;
          PERFORM_GC_TOOLTIP: string;
          PLOT: string;
          PLOTTER_ACCESSIBLE_NAME: string;
          PLOTTER_ACCESSIBLE_NAME_KEY_AND_VALUE: string;
          PLOTTER_ACCESSIBLE_NAME_NO_DATA: string;
          PLOTTER_SAVE_AS_MENU_ITEM: string;
          PLOTTER_TIME_RANGE_MENU: string;
          PLUGIN_EXCEPTION_DIALOG_BUTTON_EXIT: string;
          PLUGIN_EXCEPTION_DIALOG_BUTTON_IGNORE: string;
          PLUGIN_EXCEPTION_DIALOG_BUTTON_OK: string;
          PLUGIN_EXCEPTION_DIALOG_MESSAGE: string;
          PLUGIN_EXCEPTION_DIALOG_TITLE: string;
          PROBLEM_ADDING_LISTENER: string;
          PROBLEM_DISPLAYING_MBEAN: string;
          PROBLEM_INVOKING: string;
          PROBLEM_REMOVING_LISTENER: string;
          PROBLEM_SETTING_ATTRIBUTE: string;
          PROCESS_CPU_TIME: string;
          READABLE: string;
          RECONNECT: string;
          REMOTE_PROCESS_COLON: string;
          REMOTE_PROCESS_TEXT_FIELD_ACCESSIBLE_NAME: string;
          REMOTE_TF_USAGE: string;
          RESTORE_ALL: string;
          RETURN_TYPE: string;
          SEQ_NUM: string;
          SEVEN_DAYS: string;
          SIX_HOURS: string;
          SIX_MONTHS: string;
          SIZE_BYTES: string;
          SIZE_GB: string;
          SIZE_KB: string;
          SIZE_MB: string;
          SOURCE: string;
          STACK_TRACE: string;
          SUMMARY_TAB_HEADER_DATE_TIME_FORMAT: string;
          SUMMARY_TAB_PENDING_FINALIZATION_LABEL: string;
          SUMMARY_TAB_PENDING_FINALIZATION_VALUE: string;
          SUMMARY_TAB_TAB_NAME: string;
          SUMMARY_TAB_VM_VERSION: string;
          TEN_MIN: string;
          THIRTY_MIN: string;
          THREADS: string;
          THREAD_TAB_INFO_LABEL_FORMAT: string;
          THREAD_TAB_INITIAL_STACK_TRACE_MESSAGE: string;
          THREAD_TAB_THREAD_INFO_ACCESSIBLE_NAME: string;
          THREAD_TAB_THREAD_PLOTTER_ACCESSIBLE_NAME: string;
          THREE_HOURS: string;
          THREE_MONTHS: string;
          THRESHOLD: string;
          TILE: string;
          TIME: string;
          TIME_RANGE_COLON: string;
          TIME_STAMP: string;
          TOTAL_CLASSES_LOADED: string;
          TOTAL_CLASSES_UNLOADED: string;
          TOTAL_COMPILE_TIME: string;
          TOTAL_LOADED: string;
          TOTAL_PHYSICAL_MEMORY: string;
          TOTAL_SWAP_SPACE: string;
          TOTAL_THREADS_STARTED: string;
          TWELVE_HOURS: string;
          TWO_HOURS: string;
          TYPE: string;
          UNAVAILABLE: string;
          UNKNOWN_CAPITALIZED: string;
          UNKNOWN_HOST: string;
          UNREGISTER: string;
          UPTIME: string;
          USAGE_THRESHOLD: string;
          USED: string;
          USERNAME_ACCESSIBLE_NAME: string;
          USERNAME_COLON_: string;
          USER_DATA: string;
          VALUE: string;
          VENDOR: string;
          VERBOSE_OUTPUT: string;
          VERBOSE_OUTPUT_TOOLTIP: string;
          VIEW: string;
          VIRTUAL_MACHINE: string;
          VISUALIZE: string;
          VMINTERNAL_FRAME_ACCESSIBLE_DESCRIPTION: string;
          VM_ARGUMENTS: string;
          WINDOW: string;
          WINDOWS: string;
          WRITABLE: string;
          ZZ_USAGE_TEXT: string;
          new(): Messages;
        }
        let Messages: _Messages$$static;
        interface _Messages {
        }
        interface Messages extends CombineTypes<[_Messages, java.lang.Object]> {}
        interface _OutputViewer$$static extends ClassLike {
          _append(s: string): void;
          _appendln(s: string): void;
          init(): void;
          _frame: javax.swing.JFrame;
          _ta: javax.swing.JTextArea;
          new(): OutputViewer;
        }
        let OutputViewer: _OutputViewer$$static;
        interface _OutputViewer {
        }
        interface OutputViewer extends CombineTypes<[_OutputViewer, java.lang.Object]> {}
        interface _OutputViewer$PipeListener$$static extends ClassLike {
          create(name: string): java.io.PrintStream;
        }
        let OutputViewer$PipeListener: _OutputViewer$PipeListener$$static;
        interface _OutputViewer$PipeListener {
          run(): void;
          _br: java.io.BufferedReader;
          _inPipe: java.io.PipedInputStream;
          _name: string;
          ps: java.io.PrintStream;
        }
        interface OutputViewer$PipeListener extends CombineTypes<[_OutputViewer$PipeListener, java.lang.Thread]> {}
        interface _OverviewPanel$$static extends ClassLike {
          _MINIMUM_PLOTTER_SIZE: java.awt.Dimension;
          _PLOTTER_COLOR: java.awt.Color;
          _PREFERRED_PLOTTER_SIZE: java.awt.Dimension;
          _VIEW_RANGE: int;
          new(title: string): OverviewPanel;
          new(title: string, plotterKey: string, plotterName: string, plotterUnit: Plotter$Unit): OverviewPanel;
        }
        let OverviewPanel: _OverviewPanel$$static;
        interface _OverviewPanel {
          getInfoLabel(): javax.swing.JLabel;
          _infoLabel: javax.swing.JLabel;
        }
        interface OverviewPanel extends CombineTypes<[_OverviewPanel, sun.tools.jconsole.PlotterPanel]> {}
        interface _OverviewTab$$static extends ClassLike {
          getTabName(): string;
          new(vmPanel: VMPanel): OverviewTab;
        }
        let OverviewTab: _OverviewTab$$static;
        interface _OverviewTab {
          newSwingWorker(): javax.swing.SwingWorker<any,any>;
          _gridPanel: javax.swing.JPanel;
          _timeComboBox: TimeComboBox;
        }
        interface OverviewTab extends CombineTypes<[_OverviewTab, sun.tools.jconsole.Tab]> {}
        interface _OverviewTab$AutoGridLayout$$static extends ClassLike {
          new(a0: OverviewTab, hGap: int, vGap: int): OverviewTab$AutoGridLayout;
        }
        let OverviewTab$AutoGridLayout: _OverviewTab$AutoGridLayout$$static;
        interface _OverviewTab$AutoGridLayout {
          minimumLayoutSize(parent: java.awt.Container): java.awt.Dimension;
          preferredLayoutSize(parent: java.awt.Container): java.awt.Dimension;
          _updateColumns(parent: java.awt.Container): void;
          _this$0: OverviewTab;
        }
        interface OverviewTab$AutoGridLayout extends CombineTypes<[_OverviewTab$AutoGridLayout, java.awt.GridLayout]> {}
        interface _Plotter$$static extends ClassLike {
          _extendArray(a1: any): any;
          _getDashedStroke(): java.awt.Stroke;
          _ARRAY_SIZE_INCREMENT: int;
          _DAY: long;
          _HOUR: long;
          _MINUTE: long;
          _SECOND: long;
          _bgColor: java.awt.Color;
          _dashedStroke: java.awt.Stroke;
          _defaultColor: java.awt.Color;
          _rangeNames: string[];
          _rangeValues: int[];
          new(): Plotter;
          new(unit: Plotter$Unit): Plotter;
          new(unit: Plotter$Unit, decimals: int): Plotter;
          new(unit: Plotter$Unit, decimals: int, displayLegend: boolean): Plotter;
        }
        let Plotter: _Plotter$$static;
        interface _Plotter {
          actionPerformed(ev: java.awt.event.ActionEvent): void;
          addValues(time: long, a1: long[]): void;
          addValues(time: long, ...a1: long[]): void;
          _calculateTickInterval(w: int, hGap: int, viewRangeMS: long): long;
          _checkLeftMargin(x: int): boolean;
          _checkRightMargin(w: int): boolean;
          createSequence(key: string, name: string, color: java.awt.Color, isPlotted: boolean): void;
          getAccessibleContext(): javax.accessibility.AccessibleContext;
          getComponentPopupMenu(): javax.swing.JPopupMenu;
          _getFormattedValue(v: long, a1: boolean): string;
          _getLastTimeStamp(): long;
          _getLastValue(key: string): long;
          _getSequence(key: string): Plotter$Sequence;
          _getSizeString(v: long, a1: long): string;
          _getValue(): long;
          _getValueStringSlot(slots: int[], y: int, h: int, i: int): int;
          getViewRange(): int;
          _normalizeMax(l: long): long;
          _normalizeMin(l: long): long;
          paintComponent(g: java.awt.Graphics): void;
          propertyChange(ev: java.beans.PropertyChangeEvent): void;
          _saveAs(): void;
          _saveDataToFile(file: java.io.File): void;
          setDecimals(decimals: int): void;
          setIsPlotted(key: string, isPlotted: boolean): void;
          setUnit(unit: Plotter$Unit): void;
          setUseDashedTransitions(key: string, b: boolean): void;
          setViewRange(minutes: int): void;
          _border: javax.swing.border.Border;
          _bottomMargin: int;
          _decimals: int;
          _decimalsMultiplier: double;
          _displayLegend: boolean;
          _leftMargin: int;
          _menuRBs: javax.swing.JRadioButtonMenuItem[];
          _popupMenu: javax.swing.JPopupMenu;
          _r: java.awt.Rectangle;
          _rightMargin: int;
          _saveAsMI: javax.swing.JMenuItem;
          _saveFC: javax.swing.JFileChooser;
          _seqs: java.util.ArrayList<Plotter$Sequence>;
          _smallFont: java.awt.Font;
          _timeRangeMenu: javax.swing.JMenu;
          _times: Plotter$TimeStamps;
          _topMargin: int;
          _unit: Plotter$Unit;
          _viewRange: int;
        }
        interface Plotter extends CombineTypes<[_Plotter, javax.swing.JComponent, java.awt.event.ActionListener, java.beans.PropertyChangeListener, javax.accessibility.Accessible]> {}
        interface _Plotter$AccessiblePlotter$$static extends ClassLike {
          _serialVersionUID: long;
          _new(this$0: Plotter): Plotter$AccessiblePlotter;
        }
        let Plotter$AccessiblePlotter: _Plotter$AccessiblePlotter$$static;
        interface _Plotter$AccessiblePlotter {
          getAccessibleName(): string;
          getAccessibleRole(): javax.accessibility.AccessibleRole;
          _this$0: Plotter;
        }
        interface Plotter$AccessiblePlotter extends CombineTypes<[_Plotter$AccessiblePlotter, javax.swing.JComponent$AccessibleJComponent]> {}
        interface _Plotter$SaveDataFileChooser$$static extends ClassLike {
          _serialVersionUID: long;
          _new(): Plotter$SaveDataFileChooser;
        }
        let Plotter$SaveDataFileChooser: _Plotter$SaveDataFileChooser$$static;
        interface _Plotter$SaveDataFileChooser {
          approveSelection(): void;
        }
        interface Plotter$SaveDataFileChooser extends CombineTypes<[_Plotter$SaveDataFileChooser, javax.swing.JFileChooser]> {}
        interface _Plotter$Sequence$$static extends ClassLike {
          new(key: string): Plotter$Sequence;
        }
        let Plotter$Sequence: _Plotter$Sequence$$static;
        interface _Plotter$Sequence {
          add(value: long): void;
          value(i: int): long;
          _color: java.awt.Color;
          _isPlotted: boolean;
          _key: string;
          _name: string;
          _size: int;
          _transitionStroke: java.awt.Stroke;
          _values: any;
        }
        interface Plotter$Sequence extends CombineTypes<[_Plotter$Sequence, java.lang.Object]> {}
        interface _Plotter$TimeStamps$$static extends ClassLike {
        }
        let Plotter$TimeStamps: _Plotter$TimeStamps$$static;
        interface _Plotter$TimeStamps {
          add(time: long): void;
          time(i: int): long;
          _indices: int[];
          _offsets: long[];
          _rtimes: int[];
          _size: int;
        }
        interface Plotter$TimeStamps extends CombineTypes<[_Plotter$TimeStamps, java.lang.Object]> {}
        interface _Plotter$Unit$$static extends ClassLike {
          valueOf(name: string): Plotter$Unit;
          values(): Plotter$Unit[];
          readonly BYTES: Plotter$Unit;
          readonly NONE: Plotter$Unit;
          readonly PERCENT: Plotter$Unit;
        }
        let Plotter$Unit: _Plotter$Unit$$static;
        interface _Plotter$Unit {
        }
        interface Plotter$Unit extends CombineTypes<[_Plotter$Unit]> {}
        interface _PlotterPanel$$static extends ClassLike {
          new(labelStr: string, unit: Plotter$Unit, collapsible: boolean): PlotterPanel;
          new(labelStr: string): PlotterPanel;
        }
        let PlotterPanel: _PlotterPanel$$static;
        interface _PlotterPanel {
          getAccessibleContext(): javax.accessibility.AccessibleContext;
          getComponentPopupMenu(): javax.swing.JPopupMenu;
          getPlotter(): Plotter;
          _init(): void;
          setPlotter(plotter: Plotter): void;
          _plotter: Plotter;
        }
        interface PlotterPanel extends CombineTypes<[_PlotterPanel, sun.tools.jconsole.BorderedComponent]> {}
        interface _PlotterPanel$AccessiblePlotterPanel$$static extends ClassLike {
          _new(this$0: PlotterPanel): PlotterPanel$AccessiblePlotterPanel;
        }
        let PlotterPanel$AccessiblePlotterPanel: _PlotterPanel$AccessiblePlotterPanel$$static;
        interface _PlotterPanel$AccessiblePlotterPanel {
          getAccessibleName(): string;
          _this$0: PlotterPanel;
        }
        interface PlotterPanel$AccessiblePlotterPanel extends CombineTypes<[_PlotterPanel$AccessiblePlotterPanel, javax.swing.JComponent$AccessibleJComponent]> {}
        interface _ProxyClient$$static extends ClassLike {
          _checkStub(stub: java.rmi.Remote, stubClass: java.lang.Class<java.rmi.Remote>): void;
          _getCacheKey(lvm: LocalVirtualMachine): string;
          _getCacheKey(url: string, userName: string, password: string): string;
          _getCacheKey(hostName: string, port: int, userName: string, password: string): string;
          getConnectionName(lvm: LocalVirtualMachine): string;
          getConnectionName(url: string, userName: string): string;
          getConnectionName(hostName: string, port: int, userName: string): string;
          getProxyClient(lvm: LocalVirtualMachine): ProxyClient;
          getProxyClient(url: string, userName: string, password: string): ProxyClient;
          getProxyClient(hostName: string, port: int, userName: string, password: string): ProxyClient;
          _HOTSPOT_DIAGNOSTIC_MXBEAN_NAME: string;
          _cache: java.util.Map<string,ProxyClient>;
          _rmiServerImplStubClass: java.lang.Class<java.rmi.Remote>;
          _rmiServerImplStubClassName: string;
          _sslRMIClientSocketFactory: javax.rmi.ssl.SslRMIClientSocketFactory;
        }
        let ProxyClient: _ProxyClient$$static;
        interface _ProxyClient {
          addPropertyChangeListener(listener: java.beans.PropertyChangeListener): void;
          addWeakPropertyChangeListener(listener: java.beans.PropertyChangeListener): void;
          _checkSslConfig(): void;
          _connect(requireSSL: boolean): void;
          connectionName(): string;
          disconnect(): void;
          findDeadlockedThreads(): long[];
          _flush(): void;
          getAttributes(name: javax.management.ObjectName, attributes: string[]): javax.management.AttributeList;
          getClassLoadingMXBean(): java.lang.management.ClassLoadingMXBean;
          getCompilationMXBean(): java.lang.management.CompilationMXBean;
          getConnectionState(): com.sun.tools.jconsole.JConsoleContext$ConnectionState;
          getDisplayName(): string;
          getDomains(): string[];
          getGarbageCollectorMXBeans(): java.util.Collection<java.lang.management.GarbageCollectorMXBean>;
          getHostName(): string;
          getHotSpotDiagnosticMXBean(): com.sun.management.HotSpotDiagnosticMXBean;
          getMBeanServerConnection(): javax.management.MBeanServerConnection;
          getMBeans(domain: string): java.util.Map<javax.management.ObjectName,javax.management.MBeanInfo>;
          getMXBean<T>(objName: javax.management.ObjectName, interfaceClass: java.lang.Class<T>): T;
          getMemoryMXBean(): java.lang.management.MemoryMXBean;
          getMemoryPoolProxies(): java.util.Collection<MemoryPoolProxy>;
          getOperatingSystemMXBean(): java.lang.management.OperatingSystemMXBean;
          getPassword(): string;
          getPort(): int;
          getRuntimeMXBean(): java.lang.management.RuntimeMXBean;
          getSnapshotMBeanServerConnection(): ProxyClient$SnapshotMBeanServerConnection;
          getSunOperatingSystemMXBean(): com.sun.management.OperatingSystemMXBean;
          getThreadMXBean(): java.lang.management.ThreadMXBean;
          getUrl(): string;
          getUserName(): string;
          getVmid(): int;
          _hasHotSpotDiagnosticMXBean(): boolean;
          _hasPlatformMXBeans(): boolean;
          invoke(name: javax.management.ObjectName, operationName: string, params: any[], signature: string[]): any;
          _isConnected(): boolean;
          isDead(): boolean;
          _isLockUsageSupported(): boolean;
          isRegistered(name: javax.management.ObjectName): boolean;
          isSslRmiRegistry(): boolean;
          isSslRmiStub(): boolean;
          isVmConnector(): boolean;
          markAsDead(): void;
          removePropertyChangeListener(listener: java.beans.PropertyChangeListener): void;
          setAttribute(name: javax.management.ObjectName, attribute: javax.management.Attribute): void;
          _setConnectionState(state: com.sun.tools.jconsole.JConsoleContext$ConnectionState): void;
          _setParameters(url: javax.management.remote.JMXServiceURL, userName: string, password: string): void;
          toString(): string;
          _tryConnect(requireRemoteSSL: boolean): void;
          _advancedUrl: string;
          _classLoadingMBean: java.lang.management.ClassLoadingMXBean;
          _compilationMBean: java.lang.management.CompilationMXBean;
          _connectionName: string;
          _connectionState: com.sun.tools.jconsole.JConsoleContext$ConnectionState;
          _displayName: string;
          _garbageCollectorMBeans: java.util.List<java.lang.management.GarbageCollectorMXBean>;
          _hasCompilationMXBean: boolean;
          _hasHotSpotDiagnosticMXBean: boolean;
          _hasPlatformMXBeans: boolean;
          _hostName: string;
          _hotspotDiagnosticMXBean: com.sun.management.HotSpotDiagnosticMXBean;
          _isDead: boolean;
          _jmxUrl: javax.management.remote.JMXServiceURL;
          _jmxc: javax.management.remote.JMXConnector;
          _lvm: LocalVirtualMachine;
          _mbsc: javax.management.MBeanServerConnection;
          _memoryMBean: java.lang.management.MemoryMXBean;
          _memoryPoolProxies: java.util.List<MemoryPoolProxy>;
          _operatingSystemMBean: java.lang.management.OperatingSystemMXBean;
          _password: string;
          _port: int;
          _propertyChangeSupport: javax.swing.event.SwingPropertyChangeSupport;
          _registryHostName: string;
          _registryPort: int;
          _runtimeMBean: java.lang.management.RuntimeMXBean;
          _server: ProxyClient$SnapshotMBeanServerConnection;
          _sslRegistry: boolean;
          _sslStub: boolean;
          _stub: javax.management.remote.rmi.RMIServer;
          _sunOperatingSystemMXBean: com.sun.management.OperatingSystemMXBean;
          _supportsLockUsage: boolean;
          _threadMBean: java.lang.management.ThreadMXBean;
          _userName: string;
          _vmConnector: boolean;
        }
        interface ProxyClient extends CombineTypes<[_ProxyClient, com.sun.tools.jconsole.JConsoleContext, java.lang.Object]> {}
        interface _ProxyClient$Snapshot$$static extends ClassLike {
          newSnapshot(mbsc: javax.management.MBeanServerConnection): ProxyClient$SnapshotMBeanServerConnection;
        }
        let ProxyClient$Snapshot: _ProxyClient$Snapshot$$static;
        interface _ProxyClient$Snapshot {
        }
        interface ProxyClient$Snapshot extends CombineTypes<[_ProxyClient$Snapshot, java.lang.Object]> {}
        interface _ProxyClient$SnapshotInvocationHandler$$static extends ClassLike {
          _newMap<K, V>(): java.util.Map<K,V>;
          _new(conn: javax.management.MBeanServerConnection): ProxyClient$SnapshotInvocationHandler;
        }
        let ProxyClient$SnapshotInvocationHandler: _ProxyClient$SnapshotInvocationHandler$$static;
        interface _ProxyClient$SnapshotInvocationHandler {
          _flush(): void;
          _getAttribute(objName: javax.management.ObjectName, attrName: string): any;
          _getAttributes(objName: javax.management.ObjectName, attrNames: string[]): javax.management.AttributeList;
          _getCachedAttributes(objName: javax.management.ObjectName, attrNames: java.util.Set<string>): ProxyClient$SnapshotInvocationHandler$NameValueMap;
          invoke(proxy: any, method: java.lang.reflect.Method, args: any[]): any;
          _cachedNames: java.util.Map<javax.management.ObjectName,java.util.Set<string>>;
          _cachedValues: java.util.Map<javax.management.ObjectName,ProxyClient$SnapshotInvocationHandler$NameValueMap>;
          _conn: javax.management.MBeanServerConnection;
        }
        interface ProxyClient$SnapshotInvocationHandler extends CombineTypes<[_ProxyClient$SnapshotInvocationHandler, java.lang.Object, java.lang.reflect.InvocationHandler]> {}
        interface _ProxyClient$SnapshotInvocationHandler$NameValueMap$$static extends ClassLike {
        }
        let ProxyClient$SnapshotInvocationHandler$NameValueMap: _ProxyClient$SnapshotInvocationHandler$NameValueMap$$static;
        interface _ProxyClient$SnapshotInvocationHandler$NameValueMap {
        }
        interface ProxyClient$SnapshotInvocationHandler$NameValueMap extends CombineTypes<[_ProxyClient$SnapshotInvocationHandler$NameValueMap, java.util.HashMap<string,any>]> {}
        interface _ProxyClient$SnapshotMBeanServerConnection$$static extends ClassLike {
        }
        let ProxyClient$SnapshotMBeanServerConnection: _ProxyClient$SnapshotMBeanServerConnection$$static;
        interface _ProxyClient$SnapshotMBeanServerConnection {
          flush(): void;
(): void;
        }
        interface ProxyClient$SnapshotMBeanServerConnection extends CombineTypes<[_ProxyClient$SnapshotMBeanServerConnection, javax.management.MBeanServerConnection, java.lang.Object]> {}
        interface _ProxyClient$WeakPCL$$static extends ClassLike {
          _new(a0: ProxyClient, referent: java.beans.PropertyChangeListener): ProxyClient$WeakPCL;
        }
        let ProxyClient$WeakPCL: _ProxyClient$WeakPCL$$static;
        interface _ProxyClient$WeakPCL {
          _dispose(): void;
          propertyChange(pce: java.beans.PropertyChangeEvent): void;
          _this$0: ProxyClient;
        }
        interface ProxyClient$WeakPCL extends CombineTypes<[_ProxyClient$WeakPCL, java.beans.PropertyChangeListener, java.lang.ref.WeakReference<java.beans.PropertyChangeListener>]> {}
        interface _Resources$$static extends ClassLike {
          _findMnemonicInt(s: string): int;
          format(pattern: string, arguments: any[]): string;
          format(pattern: string, ...arguments: any[]): string;
          _getMessage(rb: java.util.ResourceBundle, key: string): string;
          getMnemonicInt(message: string): int;
          initializeMessages(clazz: java.lang.Class<any>, rbName: string): void;
          _isWritableField(field: java.lang.reflect.Field): boolean;
          _lookupMnemonicInt(c: string): int;
          _removeMnemonicAmpersand(message: string): string;
          _replaceWithPlatformLineFeed(text: string): string;
          _setFieldValue(field: java.lang.reflect.Field, value: string): void;
          _MNEMONIC_LOOKUP: java.util.Map<string,int>;
        }
        let Resources: _Resources$$static;
        interface _Resources {
        }
        interface Resources extends CombineTypes<[_Resources, java.lang.Object]> {}
        interface _SheetDialog$$static extends ClassLike {
          _fixWrapping(message: any, maxWidth: int): any;
          _showOptionDialog(vmPanel: VMPanel, message: any, optionType: int, messageType: int, icon: javax.swing.Icon, options: any[], initialValue: any): javax.swing.JOptionPane;
          _iconR: java.awt.Rectangle;
          _textR: java.awt.Rectangle;
          _viewInsets: java.awt.Insets;
          _viewR: java.awt.Rectangle;
        }
        let SheetDialog: _SheetDialog$$static;
        interface _SheetDialog {
        }
        interface SheetDialog extends CombineTypes<[_SheetDialog, java.lang.Object]> {}
        interface _SheetDialog$SheetOptionPane$$static extends ClassLike {
          _bgColor: java.awt.Color;
          _comp: java.awt.Composite;
          _new(message: any, messageType: int, optionType: int, icon: javax.swing.Icon, options: any[], initialValue: any): SheetDialog$SheetOptionPane;
        }
        let SheetDialog$SheetOptionPane: _SheetDialog$SheetOptionPane$$static;
        interface _SheetDialog$SheetOptionPane {
          paint(g: java.awt.Graphics): void;
          setVisible(visible: boolean): void;
        }
        interface SheetDialog$SheetOptionPane extends CombineTypes<[_SheetDialog$SheetOptionPane, javax.swing.JOptionPane]> {}
        interface _SheetDialog$SlideAndFadeGlassPane$$static extends ClassLike {
          _new(): SheetDialog$SlideAndFadeGlassPane;
        }
        let SheetDialog$SlideAndFadeGlassPane: _SheetDialog$SlideAndFadeGlassPane$$static;
        interface _SheetDialog$SlideAndFadeGlassPane {
          _doSlide(): void;
          hide(optionPane: SheetDialog$SheetOptionPane): void;
          paint(g: java.awt.Graphics): void;
          setGrayLevel(gray: int): void;
          show(optionPane: SheetDialog$SheetOptionPane): void;
          _fade: int;
          _optionPane: SheetDialog$SheetOptionPane;
          _slideIn: boolean;
        }
        interface SheetDialog$SlideAndFadeGlassPane extends CombineTypes<[_SheetDialog$SlideAndFadeGlassPane, javax.swing.JPanel]> {}
        interface _SummaryTab$$static extends ClassLike {
          getTabName(): string;
          _CPU_DECIMALS: int;
          _cpuUsageKey: string;
          _endTable: string;
          _newDivider: string;
          _newLeftTable: string;
          _newRightTable: string;
          _newTable: string;
          new(vmPanel: VMPanel): SummaryTab;
        }
        let SummaryTab: _SummaryTab$$static;
        interface _SummaryTab {
          _append(str: string): void;
          _append(label: string, value: string): void;
          _append(label: string, value: string, columnPerRow: int): void;
          _formatSummary(): SummaryTab$Result;
          _getOverviewPanels(): OverviewPanel[];
          newSwingWorker(): javax.swing.SwingWorker<any,any>;
          _tryToGet(getters: java.util.function.LongSupplier[]): long;
          _tryToGet(...getters: java.util.function.LongSupplier[]): long;
          _buf: jconsole$stringBuilder;
          _headerDateTimeFormat: java.text.DateFormat;
          _info: HTMLPane;
          _overviewPanel: SummaryTab$CPUOverviewPanel;
          _pathSeparator: string;
        }
        interface SummaryTab extends CombineTypes<[_SummaryTab, sun.tools.jconsole.Tab]> {}
        interface _SummaryTab$CPUOverviewPanel$$static extends ClassLike {
          _new(): SummaryTab$CPUOverviewPanel;
        }
        let SummaryTab$CPUOverviewPanel: _SummaryTab$CPUOverviewPanel$$static;
        interface _SummaryTab$CPUOverviewPanel {
          updateCPUInfo(result: SummaryTab$Result): void;
          _prevProcessCpuTime: long;
          _prevUpTime: long;
        }
        interface SummaryTab$CPUOverviewPanel extends CombineTypes<[_SummaryTab$CPUOverviewPanel, sun.tools.jconsole.OverviewPanel]> {}
        interface _SummaryTab$Result$$static extends ClassLike {
        }
        let SummaryTab$Result: _SummaryTab$Result$$static;
        interface _SummaryTab$Result {
          _nCPUs: int;
          _processCpuTime: long;
          _summary: string;
          _timeStamp: long;
          _upTime: long;
        }
        interface SummaryTab$Result extends CombineTypes<[_SummaryTab$Result, java.lang.Object]> {}
        interface _Tab$$static extends ClassLike {
          new(vmPanel: VMPanel, name: string): Tab;
        }
        let Tab: _Tab$$static;
        interface _Tab {
          dispose(): void;
          _getOverviewPanels(): OverviewPanel[];
          getPreferredSize(): java.awt.Dimension;
          _getVMPanel(): VMPanel;
          newSwingWorker(): javax.swing.SwingWorker<any,any>;
          update(): void;
          workerAdd(job: java.lang.Runnable): void;
          _name: string;
          _prevSW: javax.swing.SwingWorker<any,any>;
          _vmPanel: VMPanel;
          _worker: Worker;
        }
        interface Tab extends CombineTypes<[_Tab, javax.swing.JPanel]> {}
        interface _ThreadTab$$static extends ClassLike {
          getTabName(): string;
          _peakColor: java.awt.Color;
          _peakKey: string;
          _thinEmptyBorder: javax.swing.border.Border;
          _threadCountColor: java.awt.Color;
          _threadCountKey: string;
          new(vmPanel: VMPanel): ThreadTab;
        }
        let ThreadTab: _ThreadTab$$static;
        interface _ThreadTab {
          actionPerformed(evt: java.awt.event.ActionEvent): void;
          changedUpdate(e: javax.swing.event.DocumentEvent): void;
          _detectDeadlock(): void;
          _doUpdate(): void;
          getDeadlockedThreadIds(): long[][];
          _getOverviewPanels(): OverviewPanel[];
          insertUpdate(e: javax.swing.event.DocumentEvent): void;
          newSwingWorker(): javax.swing.SwingWorker<any,any>;
          removeUpdate(e: javax.swing.event.DocumentEvent): void;
          valueChanged(ev: javax.swing.event.ListSelectionEvent): void;
          _filterTF: javax.swing.JTextField;
          _lastSelected: long;
          _listModel: javax.swing.DefaultListModel<long>;
          _messageLabel: javax.swing.JLabel;
          _nameCache: java.util.HashMap<long,string>;
          _oldThreads: long[];
          _overviewPanel: ThreadTab$ThreadOverviewPanel;
          _plotterListening: boolean;
          _threadListTabbedPane: javax.swing.JTabbedPane;
          _threadMeter: PlotterPanel;
          _threadsSplitPane: javax.swing.JSplitPane;
          _timeComboBox: TimeComboBox;
        }
        interface ThreadTab extends CombineTypes<[_ThreadTab, java.awt.event.ActionListener, javax.swing.event.DocumentListener, sun.tools.jconsole.Tab, javax.swing.event.ListSelectionListener]> {}
        interface _ThreadTab$PromptingTextField$$static extends ClassLike {
          new(prompt: string, columns: int): ThreadTab$PromptingTextField;
        }
        let ThreadTab$PromptingTextField: _ThreadTab$PromptingTextField$$static;
        interface _ThreadTab$PromptingTextField {
          focusGained(e: java.awt.event.FocusEvent): void;
          focusLost(e: java.awt.event.FocusEvent): void;
          getText(): string;
          revalidate(): void;
          _updateForeground(): void;
          _fg: java.awt.Color;
          _prompt: string;
          _promptRemoved: boolean;
        }
        interface ThreadTab$PromptingTextField extends CombineTypes<[_ThreadTab$PromptingTextField, java.awt.event.FocusListener, javax.swing.JTextField]> {}
        interface _ThreadTab$ThreadJList$$static extends ClassLike {
          _new(a0: javax.swing.DefaultListModel<long>, listModel: javax.swing.JTextArea): ThreadTab$ThreadJList;
        }
        let ThreadTab$ThreadJList: _ThreadTab$ThreadJList$$static;
        interface _ThreadTab$ThreadJList {
          getPreferredSize(): java.awt.Dimension;
          _textArea: javax.swing.JTextArea;
          _this$0: ThreadTab;
        }
        interface ThreadTab$ThreadJList extends CombineTypes<[_ThreadTab$ThreadJList, javax.swing.JList<long>]> {}
        interface _ThreadTab$ThreadOverviewPanel$$static extends ClassLike {
          _new(): ThreadTab$ThreadOverviewPanel;
        }
        let ThreadTab$ThreadOverviewPanel: _ThreadTab$ThreadOverviewPanel$$static;
        interface _ThreadTab$ThreadOverviewPanel {
          _updateThreadsInfo(tlCount: long, a1: long, tpCount: long, a3: long): void;
        }
        interface ThreadTab$ThreadOverviewPanel extends CombineTypes<[_ThreadTab$ThreadOverviewPanel, sun.tools.jconsole.OverviewPanel]> {}
        interface _TimeComboBox$$static extends ClassLike {
          new(plotterArray: Plotter[]): TimeComboBox;
          new(...plotterArray: Plotter[]): TimeComboBox;
        }
        let TimeComboBox: _TimeComboBox$$static;
        interface _TimeComboBox {
          addPlotter(plotter: Plotter): void;
          itemStateChanged(ev: java.awt.event.ItemEvent): void;
          propertyChange(ev: java.beans.PropertyChangeEvent): void;
          _selectValue(value: int): void;
          _plotters: java.util.ArrayList<Plotter>;
        }
        interface TimeComboBox extends CombineTypes<[_TimeComboBox, java.beans.PropertyChangeListener, java.awt.event.ItemListener, javax.swing.JComboBox<string>]> {}
        interface _Utilities$$static extends ClassLike {
          ensureContrast(c1: java.awt.Color, c2: java.awt.Color): java.awt.Color;
          getColorBrightness(c: java.awt.Color): double;
          newTableScrollPane(comp: javax.swing.JComponent): javax.swing.JScrollPane;
          setAccessibleDescription(comp: javax.accessibility.Accessible, description: string): void;
          setAccessibleName(comp: javax.accessibility.Accessible, name: string): void;
          _setColorBrightness(c: java.awt.Color, y: double): java.awt.Color;
          _setTabbedPaneTransparency(comp: javax.swing.JComponent, transparent: boolean): void;
          _setTransparency(comp: javax.swing.JComponent, transparent: boolean): void;
          updateTransparency(comp: javax.swing.JComponent): void;
          _windowsLaF: string;
          new(): Utilities;
        }
        let Utilities: _Utilities$$static;
        interface _Utilities {
        }
        interface Utilities extends CombineTypes<[_Utilities, java.lang.Object]> {}
        interface _Utilities$TableScrollPane$$static extends ClassLike {
          new(comp: javax.swing.JComponent): Utilities$TableScrollPane;
        }
        let Utilities$TableScrollPane: _Utilities$TableScrollPane$$static;
        interface _Utilities$TableScrollPane {
          _paintBorder(g: java.awt.Graphics): void;
        }
        interface Utilities$TableScrollPane extends CombineTypes<[_Utilities$TableScrollPane, javax.swing.JScrollPane]> {}
        interface _VMInternalFrame$$static extends ClassLike {
          new(vmPanel: VMPanel): VMInternalFrame;
        }
        let VMInternalFrame: _VMInternalFrame$$static;
        interface _VMInternalFrame {
          getPreferredSize(): java.awt.Dimension;
          getVMPanel(): VMPanel;
          _vmPanel: VMPanel;
        }
        interface VMInternalFrame extends CombineTypes<[_VMInternalFrame, sun.tools.jconsole.MaximizableInternalFrame]> {}
        interface _VMPanel$$static extends ClassLike {
          getTabInfos(): VMPanel$TabInfo[];
          _connectedIcon16: javax.swing.Icon;
          _connectedIcon24: javax.swing.Icon;
          _disconnectedIcon16: javax.swing.Icon;
          _disconnectedIcon24: javax.swing.Icon;
          _tabInfos: java.util.ArrayList<VMPanel$TabInfo>;
          _new(proxyClient: ProxyClient, updateInterval: int): VMPanel;
        }
        let VMPanel: _VMPanel$$static;
        interface _VMPanel {
          _addTab(tabInfo: VMPanel$TabInfo): void;
          cleanUp(): void;
          _closeOptionPane(): void;
          connect(): void;
          _createPluginTabs(): void;
          disconnect(): void;
          _fireConnectedChange(connected: boolean): void;
          getConnectionName(): string;
          getDisplayName(): string;
          _getFrame(): VMInternalFrame;
          getHostName(): string;
          getPassword(): string;
          getPort(): int;
          _getProxyClient(assertThread: boolean): ProxyClient;
          getProxyClient(): ProxyClient;
          _getTabs(): java.util.List<Tab>;
          getToolTipText(event: java.awt.event.MouseEvent): string;
          getUpdateInterval(): int;
          getUrl(): string;
          getUserName(): string;
          _insertTab(tabInfo: VMPanel$TabInfo, index: int): void;
          _instantiate(tabInfo: VMPanel$TabInfo): Tab;
          _isConnected(): boolean;
          _onConnecting(): void;
          _paintComponent(g: java.awt.Graphics): void;
          propertyChange(ev: java.beans.PropertyChangeEvent): void;
          removeTabAt(index: int): void;
          setUI(ui: javax.swing.plaf.TabbedPaneUI): void;
          _startUpdateTimer(): void;
          _update(): void;
          _updateFrameTitle(): void;
          _vmPanelDied(): void;
          _connectedIconBounds: java.awt.Rectangle;
          _everConnected: boolean;
          _hostName: string;
          _initialUpdate: boolean;
          _lockObject: any;
          _optionPane: javax.swing.JOptionPane;
          _password: string;
          _pluginTabsAdded: boolean;
          _plugins: java.util.Map<ExceptionSafePlugin,javax.swing.SwingWorker<any,any>>;
          _port: int;
          _progressBar: javax.swing.JProgressBar;
          _proxyClient: ProxyClient;
          _shouldUseSSL: boolean;
          _time0: long;
          _timer: java.util.Timer;
          _updateInterval: int;
          _url: string;
          _userDisconnected: boolean;
          _userName: string;
          _vmIF: VMInternalFrame;
          _wasConnected: boolean;
        }
        interface VMPanel extends CombineTypes<[_VMPanel, java.beans.PropertyChangeListener, javax.swing.JTabbedPane]> {}
        interface _VMPanel$TabInfo$$static extends ClassLike {
          _new(tabClass: java.lang.Class<Tab>, name: string, tabVisible: boolean): VMPanel$TabInfo;
        }
        let VMPanel$TabInfo: _VMPanel$TabInfo$$static;
        interface _VMPanel$TabInfo {
          _name: string;
          _tabClass: java.lang.Class<Tab>;
          _tabVisible: boolean;
        }
        interface VMPanel$TabInfo extends CombineTypes<[_VMPanel$TabInfo, java.lang.Object]> {}
        interface _VariableGridLayout$$static extends ClassLike {
          new(rows: int, cols: int, hgap: int, vgap: int, fillRows: boolean, fillColumns: boolean): VariableGridLayout;
        }
        let VariableGridLayout: _VariableGridLayout$$static;
        interface _VariableGridLayout {
          getFillColumn(c: javax.swing.JComponent): boolean;
          getFillRow(c: javax.swing.JComponent): boolean;
          layoutContainer(parent: java.awt.Container): void;
          preferredLayoutSize(parent: java.awt.Container): java.awt.Dimension;
          setFillColumn(c: javax.swing.JComponent, b: boolean): void;
          setFillRow(c: javax.swing.JComponent, b: boolean): void;
          _fillColumns: boolean;
          _fillRows: boolean;
        }
        interface VariableGridLayout extends CombineTypes<[_VariableGridLayout, java.awt.GridLayout]> {}
        interface _Version$$static extends ClassLike {
          _getVersion(): string;
          print(ps: java.io.PrintStream): void;
          printFullVersion(ps: java.io.PrintStream): void;
          _jconsole_version: string;
          new(): Version;
        }
        let Version: _Version$$static;
        interface _Version {
        }
        interface Version extends CombineTypes<[_Version, java.lang.Object]> {}
        interface _Worker$$static extends ClassLike {
          new(name: string): Worker;
        }
        let Worker: _Worker$$static;
        interface _Worker {
          add(job: java.lang.Runnable): void;
          queueFull(): boolean;
          run(): void;
          stopWorker(): void;
          _jobs: java.util.ArrayList<java.lang.Runnable>;
          _stopped: boolean;
        }
        interface Worker extends CombineTypes<[_Worker, java.lang.Thread]> {}
      }
    }
  }
}
