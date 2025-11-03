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
      module rowset {
        module internal {
          interface _BaseRow$$static extends ClassLike {
            _serialVersionUID: long;
            new(): BaseRow;
          }
          let BaseRow: _BaseRow$$static;
          interface _BaseRow {
            getColumnObject(a0: int): any;
            getOrigRow(): any[];
            setColumnObject(a0: int, a1: any): void;
            _origVals: any[];
          }
          interface BaseRow extends CombineTypes<[_BaseRow, java.lang.Cloneable, java.lang.Object, java.io.Serializable]> {}
          interface _CachedRowSetReader$$static extends ClassLike {
            _serialVersionUID: long;
            new(): CachedRowSetReader;
          }
          let CachedRowSetReader: _CachedRowSetReader$$static;
          interface _CachedRowSetReader {
            connect(caller: javax.sql.RowSetInternal): java.sql.Connection;
            _decodeParams(params: any[], pstmt: java.sql.PreparedStatement): void;
            _getCloseConnection(): boolean;
            readData(caller: javax.sql.RowSetInternal): void;
            _readObject(ois: java.io.ObjectInputStream): void;
            reset(): boolean;
            setStartPosition(pos: int): void;
            _resBundle: JdbcRowSetResourceBundle;
            _startPosition: int;
            _userCon: boolean;
            _writerCalls: int;
          }
          interface CachedRowSetReader extends CombineTypes<[_CachedRowSetReader, java.lang.Object, javax.sql.RowSetReader, java.io.Serializable]> {}
          interface _CachedRowSetWriter$$static extends ClassLike {
            _serialVersionUID: long;
            new(): CachedRowSetWriter;
          }
          let CachedRowSetWriter: _CachedRowSetWriter$$static;
          interface _CachedRowSetWriter {
            _buildKeyDesc(crs: javax.sql.rowset.CachedRowSet): void;
            _buildTableName(dbmd: java.sql.DatabaseMetaData, catalog: string, schema: string, table: string): string;
            _buildWhereClause(whereClause: string, rs: java.sql.ResultSet): string;
            commit(): void;
            commit(crs: CachedRowSetImpl, updateRowset: boolean): void;
            _deleteOriginalRow(crs: javax.sql.rowset.CachedRowSet, crsRes: CachedRowSetImpl): boolean;
            getReader(): CachedRowSetReader;
            _initSQLStatements(caller: javax.sql.rowset.CachedRowSet): void;
            _insertNewRow(crs: javax.sql.rowset.CachedRowSet, pstmt: java.sql.PreparedStatement, crsRes: CachedRowSetImpl): boolean;
            _isPKNameValid(pk: string, rsmd: java.sql.ResultSetMetaData): boolean;
            _readObject(ois: java.io.ObjectInputStream): void;
            rollback(): void;
            rollback(s: java.sql.Savepoint): void;
            setReader(reader: CachedRowSetReader): void;
            _updateOriginalRow(crs: javax.sql.rowset.CachedRowSet): boolean;
            _updateResolvedConflictToDB(crs: javax.sql.rowset.CachedRowSet, con: java.sql.Connection): void;
            writeData(caller: javax.sql.RowSetInternal): boolean;
            _callerColumnCount: int;
            _callerMd: java.sql.ResultSetMetaData;
            _con: java.sql.Connection;
            _crsResolve: CachedRowSetImpl;
            _deleteCmd: string;
            _deleteWhere: string;
            _iChangedValsInDbAndCRS: int;
            _iChangedValsinDbOnly: int;
            _insertCmd: string;
            _keyCols: int[];
            _params: any[];
            _reader: CachedRowSetReader;
            _resBundle: JdbcRowSetResourceBundle;
            _selectCmd: string;
            _status: java.util.ArrayList<int>;
            _updateCmd: string;
            _updateWhere: string;
          }
          interface CachedRowSetWriter extends CombineTypes<[_CachedRowSetWriter, javax.sql.rowset.spi.TransactionalWriter, java.lang.Object, java.io.Serializable]> {}
          interface _InsertRow$$static extends ClassLike {
            _serialVersionUID: long;
            new(numCols: int): InsertRow;
          }
          let InsertRow: _InsertRow$$static;
          interface _InsertRow {
            getColumnObject(idx: int): any;
            initInsertRow(): void;
            isCompleteRow(RowSetMD: javax.sql.RowSetMetaData): boolean;
            _markColInserted(col: int): void;
            _readObject(ois: java.io.ObjectInputStream): void;
            setColumnObject(idx: int, val: any): void;
            _cols: int;
            _colsInserted: java.util.BitSet;
            _resBundle: JdbcRowSetResourceBundle;
          }
          interface InsertRow extends CombineTypes<[_InsertRow, java.lang.Cloneable, com.sun.rowset.internal.BaseRow, java.io.Serializable]> {}
          interface _Row$$static extends ClassLike {
            _serialVersionUID: long;
            new(numCols: int): Row;
            new(numCols: int, vals: any[]): Row;
          }
          let Row: _Row$$static;
          interface _Row {
            clearDeleted(): void;
            clearInserted(): void;
            clearUpdated(): void;
            getColUpdated(idx: int): boolean;
            getColumnObject(columnIndex: int): any;
            getCurrentRow(): BaseRow;
            getDeleted(): boolean;
            getInserted(): boolean;
            getUpdated(): boolean;
            initColumnObject(idx: int, val: any): void;
            moveCurrentToOrig(): void;
            _setColUpdated(idx: int): void;
            setColumnObject(idx: int, val: any): void;
            setDeleted(): void;
            setInserted(): void;
            setUpdated(): void;
            _colsChanged: java.util.BitSet;
            _currentVals: any[];
            _deleted: boolean;
            _inserted: boolean;
            _numCols: int;
            _updated: boolean;
          }
          interface Row extends CombineTypes<[_Row, java.lang.Cloneable, com.sun.rowset.internal.BaseRow, java.io.Serializable]> {}
          interface _SyncResolverImpl$$static extends ClassLike {
            _serialVersionUID: long;
            new(): SyncResolverImpl;
          }
          let SyncResolverImpl: _SyncResolverImpl$$static;
          interface _SyncResolverImpl {
            absolute(row: int): boolean;
            acceptChanges(): void;
            acceptChanges(con: java.sql.Connection): void;
            afterLast(): void;
            beforeFirst(): void;
            _buildCachedRow(): javax.sql.rowset.CachedRowSet;
            cancelRowUpdates(): void;
            clearWarnings(): void;
            _clone(): any;
            close(): void;
            columnUpdated(idx: int): boolean;
            columnUpdated(columnName: string): boolean;
            commit(): void;
            createCopy(): javax.sql.rowset.CachedRowSet;
            createCopyNoConstraints(): javax.sql.rowset.CachedRowSet;
            createCopySchema(): javax.sql.rowset.CachedRowSet;
            createShared(): javax.sql.RowSet;
            deleteRow(): void;
            execute(conn: java.sql.Connection): void;
            execute(): void;
            findColumn(columnName: string): int;
            first(): boolean;
            getArray(columnIndex: int): java.sql.Array;
            getArray(colName: string): java.sql.Array;
            getAsciiStream(columnIndex: int): java.io.InputStream;
            getAsciiStream(columnName: string): java.io.InputStream;
            getBigDecimal(columnIndex: int, scale: int): java.math.BigDecimal;
            getBigDecimal(columnName: string, scale: int): java.math.BigDecimal;
            getBigDecimal(columnIndex: int): java.math.BigDecimal;
            getBigDecimal(columnName: string): java.math.BigDecimal;
            getBinaryStream(columnIndex: int): java.io.InputStream;
            getBinaryStream(columnName: string): java.io.InputStream;
            getBlob(columnIndex: int): java.sql.Blob;
            getBlob(colName: string): java.sql.Blob;
            getBoolean(columnIndex: int): boolean;
            getBoolean(columnName: string): boolean;
            getByte(columnIndex: int): byte;
            getByte(columnName: string): byte;
            getBytes(columnIndex: int): byte[];
            getBytes(columnName: string): byte[];
            getCharacterStream(columnIndex: int): java.io.Reader;
            getCharacterStream(columnName: string): java.io.Reader;
            getClob(columnIndex: int): java.sql.Clob;
            getClob(colName: string): java.sql.Clob;
            getConflictValue(index: int): any;
            getConflictValue(columnName: string): any;
            getConnection(): java.sql.Connection;
            _getCurrentRow(): BaseRow;
            getCursorName(): string;
            getDate(columnIndex: int): java.sql.Date;
            getDate(columnName: string): java.sql.Date;
            getDate(columnIndex: int, cal: java.util.Calendar): java.sql.Date;
            getDate(columnName: string, cal: java.util.Calendar): java.sql.Date;
            getDouble(columnIndex: int): double;
            getDouble(columnName: string): double;
            getFloat(columnIndex: int): float;
            getFloat(columnName: string): float;
            getInt(columnIndex: int): int;
            getInt(columnName: string): int;
            getKeyColumns(): int[];
            getLong(columnIndex: int): long;
            getLong(columnName: string): long;
            getMatchColumnIndexes(): int[];
            getMatchColumnNames(): string[];
            getMetaData(): java.sql.ResultSetMetaData;
            getObject(columnIndex: int): any;
            getObject(columnName: string): any;
            getObject(columnIndex: int, map: java.util.Map<string,java.lang.Class<any>>): any;
            getObject(columnName: string, map: java.util.Map<string,java.lang.Class<any>>): any;
            getOriginal(): java.sql.ResultSet;
            getOriginalRow(): java.sql.ResultSet;
            getPageSize(): int;
            getRef(columnIndex: int): java.sql.Ref;
            getRef(colName: string): java.sql.Ref;
            getRow(): int;
            getRowSetWarnings(): javax.sql.rowset.RowSetWarning;
            getShort(columnIndex: int): short;
            getShort(columnName: string): short;
            getStatement(): java.sql.Statement;
            getStatus(): int;
            getString(columnIndex: int): string;
            getString(columnName: string): string;
            getSyncProvider(): javax.sql.rowset.spi.SyncProvider;
            getTableName(): string;
            getTime(columnIndex: int): java.sql.Time;
            getTime(columnName: string): java.sql.Time;
            getTime(columnIndex: int, cal: java.util.Calendar): java.sql.Time;
            getTime(columnName: string, cal: java.util.Calendar): java.sql.Time;
            getTimestamp(columnIndex: int): java.sql.Timestamp;
            getTimestamp(columnName: string): java.sql.Timestamp;
            getTimestamp(columnIndex: int, cal: java.util.Calendar): java.sql.Timestamp;
            getTimestamp(columnName: string, cal: java.util.Calendar): java.sql.Timestamp;
            getURL(columnIndex: int): java.net.URL;
            getURL(columnName: string): java.net.URL;
            getUnicodeStream(columnIndex: int): java.io.InputStream;
            getUnicodeStream(columnName: string): java.io.InputStream;
            getWarnings(): java.sql.SQLWarning;
            insertRow(): void;
            _internalFirst(): boolean;
            _internalLast(): boolean;
            _internalNext(): boolean;
            _internalPrevious(): boolean;
            isAfterLast(): boolean;
            isBeforeFirst(): boolean;
            isFirst(): boolean;
            isLast(): boolean;
            last(): boolean;
            moveToCurrentRow(): void;
            moveToInsertRow(): void;
            next(): boolean;
            nextConflict(): boolean;
            nextPage(): boolean;
            populate(data: java.sql.ResultSet): void;
            populate(data: java.sql.ResultSet, start: int): void;
            previous(): boolean;
            previousConflict(): boolean;
            previousPage(): boolean;
            _readObject(ois: java.io.ObjectInputStream): void;
            refreshRow(): void;
            relative(rows: int): boolean;
            release(): void;
            _removeCurrentRow(): void;
            restoreOriginal(): void;
            rollback(): void;
            rollback(s: java.sql.Savepoint): void;
            rowDeleted(): boolean;
            rowInserted(): boolean;
            rowSetPopulated(event: javax.sql.RowSetEvent, numRows: int): void;
            rowUpdated(): boolean;
            _setCachedRowSet(crs: javax.sql.rowset.CachedRowSet): void;
            _setCachedRowSetResolver(crs: javax.sql.rowset.CachedRowSet): void;
            _setCachedRowSetWriter(CRWriter: CachedRowSetWriter): void;
            setCommand(cmd: string): void;
            setKeyColumns(keys: int[]): void;
            setMatchColumn(columnIdxes: int[]): void;
            setMatchColumn(columnNames: string[]): void;
            setMatchColumn(columnIdx: int): void;
            setMatchColumn(columnName: string): void;
            setMetaData(md: javax.sql.RowSetMetaData): void;
            setOriginal(): void;
            setOriginalRow(): void;
            setPageSize(size: int): void;
            setResolvedValue(index: int, obj: any): void;
            setResolvedValue(columnName: string, obj: any): void;
            _setStatus(status: java.util.ArrayList): void;
            setSyncProvider(providerStr: string): void;
            setTableName(tabName: string): void;
            size(): int;
            toCollection(): java.util.Collection;
            toCollection(column: int): java.util.Collection;
            toCollection(column: string): java.util.Collection;
            undoDelete(): void;
            undoInsert(): void;
            undoUpdate(): void;
            unsetMatchColumn(columnIdxes: int[]): void;
            unsetMatchColumn(columnIdxes: string[]): void;
            unsetMatchColumn(columnIdx: int): void;
            unsetMatchColumn(columnName: string): void;
            updateArray(columnIndex: int, a: java.sql.Array): void;
            updateArray(columnName: string, a: java.sql.Array): void;
            updateAsciiStream(columnIndex: int, x: java.io.InputStream, length: int): void;
            updateAsciiStream(columnName: string, x: java.io.InputStream, length: int): void;
            updateBigDecimal(columnIndex: int, x: java.math.BigDecimal): void;
            updateBigDecimal(columnName: string, x: java.math.BigDecimal): void;
            updateBinaryStream(columnIndex: int, x: java.io.InputStream, length: int): void;
            updateBinaryStream(columnName: string, x: java.io.InputStream, length: int): void;
            updateBlob(columnIndex: int, b: java.sql.Blob): void;
            updateBlob(columnName: string, b: java.sql.Blob): void;
            updateBoolean(columnIndex: int, x: boolean): void;
            updateBoolean(columnName: string, x: boolean): void;
            updateByte(columnIndex: int, x: byte): void;
            updateByte(columnName: string, x: byte): void;
            updateBytes(columnIndex: int, x: byte[]): void;
            updateBytes(columnName: string, x: byte[]): void;
            updateCharacterStream(columnIndex: int, x: java.io.Reader, length: int): void;
            updateCharacterStream(columnName: string, reader: java.io.Reader, length: int): void;
            updateClob(columnIndex: int, c: java.sql.Clob): void;
            updateClob(columnName: string, c: java.sql.Clob): void;
            updateDate(columnIndex: int, x: java.sql.Date): void;
            updateDate(columnName: string, x: java.sql.Date): void;
            updateDouble(columnIndex: int, x: double): void;
            updateDouble(columnName: string, x: double): void;
            updateFloat(columnIndex: int, x: float): void;
            updateFloat(columnName: string, x: float): void;
            updateInt(columnIndex: int, x: int): void;
            updateInt(columnName: string, x: int): void;
            updateLong(columnIndex: int, x: long): void;
            updateLong(columnName: string, x: long): void;
            updateNCharacterStream(columnIndex: int, x: java.io.Reader, length: int): void;
            updateNCharacterStream(columnName: string, x: java.io.Reader, length: int): void;
            updateNull(columnIndex: int): void;
            updateNull(columnName: string): void;
            updateObject(columnIndex: int, x: any, scale: int): void;
            updateObject(columnIndex: int, x: any): void;
            updateObject(columnName: string, x: any, scale: int): void;
            updateObject(columnName: string, x: any): void;
            updateRef(columnIndex: int, ref: java.sql.Ref): void;
            updateRef(columnName: string, ref: java.sql.Ref): void;
            updateRow(): void;
            updateShort(columnIndex: int, x: short): void;
            updateShort(columnName: string, x: short): void;
            updateString(columnIndex: int, x: string): void;
            updateString(columnName: string, x: string): void;
            updateTime(columnIndex: int, x: java.sql.Time): void;
            updateTime(columnName: string, x: java.sql.Time): void;
            updateTimestamp(columnIndex: int, x: java.sql.Timestamp): void;
            updateTimestamp(columnName: string, x: java.sql.Timestamp): void;
            wasNull(): boolean;
            _writeData(row: javax.sql.rowset.CachedRowSet): void;
            _con: java.sql.Connection;
            _crsRes: CachedRowSetImpl;
            _crsSync: CachedRowSetImpl;
            _crw: CachedRowSetWriter;
            _resBundle: JdbcRowSetResourceBundle;
            _row: javax.sql.rowset.CachedRowSet;
            _rowStatus: int;
            _stats: java.util.ArrayList<any>;
            _sz: int;
          }
          interface SyncResolverImpl extends CombineTypes<[_SyncResolverImpl, javax.sql.rowset.spi.SyncResolver, com.sun.rowset.CachedRowSetImpl]> {}
          interface _WebRowSetXmlReader$$static extends ClassLike {
            _serialVersionUID: long;
            new(): WebRowSetXmlReader;
          }
          let WebRowSetXmlReader: _WebRowSetXmlReader$$static;
          interface _WebRowSetXmlReader {
            readData(caller: javax.sql.RowSetInternal): void;
            _readObject(ois: java.io.ObjectInputStream): void;
            readXML(caller: javax.sql.rowset.WebRowSet, reader: java.io.Reader): void;
            readXML(caller: javax.sql.rowset.WebRowSet, iStream: java.io.InputStream): void;
            _resBundle: JdbcRowSetResourceBundle;
          }
          interface WebRowSetXmlReader extends CombineTypes<[_WebRowSetXmlReader, javax.sql.rowset.spi.XmlReader, java.lang.Object, java.io.Serializable]> {}
          interface _WebRowSetXmlWriter$$static extends ClassLike {
            _serialVersionUID: long;
            new(): WebRowSetXmlWriter;
          }
          let WebRowSetXmlWriter: _WebRowSetXmlWriter$$static;
          interface _WebRowSetXmlWriter {
            _beginSection(tag: string): void;
            _beginTag(tag: string): void;
            _emptyTag(tag: string): void;
            _endHeader(): void;
            _endSection(tag: string): void;
            _endSection(): void;
            _endTag(tag: string): void;
            _getTag(): string;
            _processSpecialCharacters(s: string): string;
            _propBoolean(tag: string, b: boolean): void;
            _propInteger(tag: string, i: int): void;
            _propString(tag: string, s: string): void;
            _readObject(ois: java.io.ObjectInputStream): void;
            _setTag(tag: string): void;
            _startHeader(): void;
            _writeBigDecimal(bd: java.math.BigDecimal): void;
            _writeBoolean(b: boolean): void;
            _writeData(caller: javax.sql.rowset.WebRowSet): void;
            writeData(caller: javax.sql.RowSetInternal): boolean;
            _writeDouble(d: double): void;
            _writeEmptyString(): void;
            _writeFloat(f: float): void;
            _writeIndent(tabs: int): void;
            _writeInteger(i: int): void;
            _writeLong(l: long): void;
            _writeMetaData(caller: javax.sql.rowset.WebRowSet): void;
            _writeNull(): void;
            _writeProperties(caller: javax.sql.rowset.WebRowSet): void;
            _writeRowSet(caller: javax.sql.rowset.WebRowSet): void;
            _writeShort(s: short): void;
            _writeString(s: string): void;
            _writeStringData(s: string): void;
            _writeValue(idx: int, caller: javax.sql.RowSet): void;
            writeXML(caller: javax.sql.rowset.WebRowSet, wrt: java.io.Writer): void;
            writeXML(caller: javax.sql.rowset.WebRowSet, oStream: java.io.OutputStream): void;
            _resBundle: JdbcRowSetResourceBundle;
            _stack: java.util.Stack<string>;
            _writer: java.io.Writer;
          }
          interface WebRowSetXmlWriter extends CombineTypes<[_WebRowSetXmlWriter, javax.sql.rowset.spi.XmlWriter, java.lang.Object, java.io.Serializable]> {}
          interface _XmlErrorHandler$$static extends ClassLike {
            new(): XmlErrorHandler;
          }
          let XmlErrorHandler: _XmlErrorHandler$$static;
          interface _XmlErrorHandler {
            error(e: org.xml.sax.SAXParseException): void;
            fatalError(e: org.xml.sax.SAXParseException): void;
            warning(exception: org.xml.sax.SAXParseException): void;
            errorCounter: int;
          }
          interface XmlErrorHandler extends CombineTypes<[_XmlErrorHandler, org.xml.sax.helpers.DefaultHandler]> {}
          interface _XmlReaderContentHandler$$static extends ClassLike {
            _AutoIncrementTag: int;
            _CaseSensitiveTag: int;
            _CatalogNameTag: int;
            _ColTag: int;
            _ColumnCountTag: int;
            _ColumnDefinitionTag: int;
            _ColumnDisplaySizeTag: int;
            _ColumnIndexTag: int;
            _ColumnLabelTag: int;
            _ColumnNameTag: int;
            _ColumnPrecisionTag: int;
            _ColumnScaleTag: int;
            _ColumnTypeNameTag: int;
            _ColumnTypeTag: int;
            _CommandTag: int;
            _ConcurrencyTag: int;
            _CurrencyTag: int;
            _DATA: int;
            _DataSourceLock: int;
            _DatasourceTag: int;
            _DelTag: int;
            _EmptyStringTag: int;
            _EscapeProcessingTag: int;
            _FetchDirectionTag: int;
            _FetchSizeTag: int;
            _INITIAL: int;
            _InsDelTag: int;
            _InsTag: int;
            _IsolationLevelTag: int;
            _KeycolsTag: int;
            _METADATA: int;
            _MapTag: int;
            _MaxFieldSizeTag: int;
            _MaxRowsTag: int;
            _MetaNullTag: int;
            _MetaTableNameTag: int;
            _NullTag: int;
            _NullableTag: int;
            _PROPERTIES: int;
            _PropClassTag: int;
            _PropColumnTag: int;
            _PropNullTag: int;
            _PropTypeTag: int;
            _QueryTimeoutTag: int;
            _ReadOnlyTag: int;
            _RowTag: int;
            _RowsetTypeTag: int;
            _SchemaNameTag: int;
            _SearchableTag: int;
            _ShowDeletedTag: int;
            _SignedTag: int;
            _SyncProviderGradeTag: int;
            _SyncProviderNameTag: int;
            _SyncProviderTag: int;
            _SyncProviderVendorTag: int;
            _SyncProviderVersionTag: int;
            _TableNameTag: int;
            _UpdTag: int;
            _UrlTag: int;
            new(r: javax.sql.RowSet): XmlReaderContentHandler;
          }
          let XmlReaderContentHandler: _XmlReaderContentHandler$$static;
          interface _XmlReaderContentHandler {
            _applyUpdates(): void;
            characters(ch: char[], start: int, length: int): void;
            endDocument(): void;
            endElement(uri: string, lName: string, qName: string): void;
            error(e: org.xml.sax.SAXParseException): void;
            _getBigDecimalValue(s: string): java.math.BigDecimal;
            _getBinaryValue(s: string): byte[];
            _getBooleanValue(s: string): boolean;
            _getByteValue(s: string): byte;
            _getDateValue(s: string): java.sql.Date;
            _getDoubleValue(s: string): double;
            _getEmptyStringValue(): boolean;
            _getFloatValue(s: string): float;
            _getIntegerValue(s: string): int;
            _getLongValue(s: string): long;
            _getNullValue(): boolean;
            _getPresentRow(rs: WebRowSetImpl): Row;
            _getShortValue(s: string): short;
            _getState(): int;
            _getStringValue(s: string): string;
            _getTag(): int;
            _getTimeValue(s: string): java.sql.Time;
            _getTimestampValue(s: string): java.sql.Timestamp;
            _initMaps(): void;
            _insertValue(s: string): void;
            notationDecl(name: string, publicId: string, systemId: string): void;
            _setDataValue(ch: char[], start: int, len: int): void;
            _setEmptyStringValue(e: boolean): void;
            _setMetaDataValue(s: string): void;
            _setNullValue(n: boolean): void;
            _setPropertyValue(s: string): void;
            _setState(s: string): void;
            _setTag(t: int): void;
            startDocument(): void;
            startElement(uri: string, lName: string, qName: string, attributes: org.xml.sax.Attributes): void;
            unparsedEntityDecl(name: string, publicId: string, systemId: string, notationName: string): void;
            warning(err: org.xml.sax.SAXParseException): void;
            _Key_map: string;
            _Value_map: string;
            _colDef: string[];
            _colDefMap: java.util.HashMap<string,int>;
            _columnValue: string;
            _data: string[];
            _dataMap: java.util.HashMap<string,int>;
            _emptyStringVal: boolean;
            _idx: int;
            _keyCols: java.util.Vector<string>;
            _lastval: string;
            _md: javax.sql.RowSetMetaData;
            _metaDataValue: string;
            _nullVal: boolean;
            _propMap: java.util.HashMap<string,int>;
            _properties: string[];
            _propertyValue: string;
            _resBundle: JdbcRowSetResourceBundle;
            _rs: WebRowSetImpl;
            _state: int;
            _tag: int;
            _tempCommand: string;
            _tempStr: string;
            _tempUpdate: string;
            _typeMap: java.util.HashMap<string,java.lang.Class<any>>;
            _upd: any[];
            _updates: java.util.Vector<any[]>;
          }
          interface XmlReaderContentHandler extends CombineTypes<[_XmlReaderContentHandler, org.xml.sax.helpers.DefaultHandler]> {}
          interface _XmlResolver$$static extends ClassLike {
            new(): XmlResolver;
          }
          let XmlResolver: _XmlResolver$$static;
          interface _XmlResolver {
            resolveEntity(publicId: string, systemId: string): org.xml.sax.InputSource;
          }
          interface XmlResolver extends CombineTypes<[_XmlResolver, java.lang.Object, org.xml.sax.EntityResolver]> {}
        }
        module providers {
          interface _RIOptimisticProvider$$static extends ClassLike {
            _serialVersionUID: long;
            new(): RIOptimisticProvider;
          }
          let RIOptimisticProvider: _RIOptimisticProvider$$static;
          interface _RIOptimisticProvider {
            getDataSourceLock(): int;
            getProviderGrade(): int;
            getProviderID(): string;
            getRowSetReader(): javax.sql.RowSetReader;
            getRowSetWriter(): javax.sql.RowSetWriter;
            getVendor(): string;
            getVersion(): string;
            _readObject(ois: java.io.ObjectInputStream): void;
            setDataSourceLock(datasource_lock: int): void;
            supportsUpdatableView(): int;
            _providerID: string;
            _reader: rowset.internal.CachedRowSetReader;
            _resBundle: JdbcRowSetResourceBundle;
            _vendorName: string;
            _versionNumber: string;
            _writer: rowset.internal.CachedRowSetWriter;
          }
          interface RIOptimisticProvider extends CombineTypes<[_RIOptimisticProvider, javax.sql.rowset.spi.SyncProvider, java.io.Serializable]> {}
          interface _RIXMLProvider$$static extends ClassLike {
            new(): RIXMLProvider;
          }
          let RIXMLProvider: _RIXMLProvider$$static;
          interface _RIXMLProvider {
            getDataSourceLock(): int;
            getProviderGrade(): int;
            getProviderID(): string;
            getRowSetReader(): javax.sql.RowSetReader;
            getRowSetWriter(): javax.sql.RowSetWriter;
            getVendor(): string;
            getVersion(): string;
            getXmlReader(): javax.sql.rowset.spi.XmlReader;
            getXmlWriter(): javax.sql.rowset.spi.XmlWriter;
            setDataSourceLock(lock: int): void;
            setXmlReader(reader: javax.sql.rowset.spi.XmlReader): void;
            setXmlWriter(writer: javax.sql.rowset.spi.XmlWriter): void;
            supportsUpdatableView(): int;
            _providerID: string;
            _resBundle: JdbcRowSetResourceBundle;
            _vendorName: string;
            _versionNumber: string;
            _xmlReader: javax.sql.rowset.spi.XmlReader;
            _xmlWriter: javax.sql.rowset.spi.XmlWriter;
          }
          interface RIXMLProvider extends CombineTypes<[_RIXMLProvider, javax.sql.rowset.spi.SyncProvider]> {}
        }
        interface _CachedRowSetImpl$$static extends ClassLike {
          _serialVersionUID: long;
          new(): CachedRowSetImpl;
          new(env: java.util.Hashtable): CachedRowSetImpl;
        }
        let CachedRowSetImpl: _CachedRowSetImpl$$static;
        interface _CachedRowSetImpl {
          absolute(row: int): boolean;
          acceptChanges(): void;
          acceptChanges(con: java.sql.Connection): void;
          afterLast(): void;
          beforeFirst(): void;
          _buildTableName(command: string): string;
          cancelRowUpdates(): void;
          _checkCursor(): void;
          _checkIndex(idx: int): void;
          _checkTransactionalWriter(): void;
          clearWarnings(): void;
          _clone(): any;
          close(): void;
          columnUpdated(idx: int): boolean;
          columnUpdated(columnName: string): boolean;
          commit(): void;
          _convertBoolean(srcObj: any, srcType: int, trgType: int): any;
          _convertNumeric(srcObj: any, srcType: int, trgType: int): any;
          _convertTemporal(srcObj: any, srcType: int, trgType: int): any;
          createCopy(): javax.sql.rowset.CachedRowSet;
          createCopyNoConstraints(): javax.sql.rowset.CachedRowSet;
          createCopySchema(): javax.sql.rowset.CachedRowSet;
          createShared(): javax.sql.RowSet;
          deleteRow(): void;
          _establishTransactionalWriter(): void;
          execute(conn: java.sql.Connection): void;
          execute(): void;
          findColumn(columnName: string): int;
          first(): boolean;
          getArray(columnIndex: int): java.sql.Array;
          getArray(colName: string): java.sql.Array;
          getAsciiStream(columnIndex: int): java.io.InputStream;
          getAsciiStream(columnName: string): java.io.InputStream;
          getBigDecimal(columnIndex: int, scale: int): java.math.BigDecimal;
          getBigDecimal(columnName: string, scale: int): java.math.BigDecimal;
          getBigDecimal(columnIndex: int): java.math.BigDecimal;
          getBigDecimal(columnName: string): java.math.BigDecimal;
          getBinaryStream(columnIndex: int): java.io.InputStream;
          getBinaryStream(columnName: string): java.io.InputStream;
          getBlob(columnIndex: int): java.sql.Blob;
          getBlob(colName: string): java.sql.Blob;
          getBoolean(columnIndex: int): boolean;
          getBoolean(columnName: string): boolean;
          getByte(columnIndex: int): byte;
          getByte(columnName: string): byte;
          getBytes(columnIndex: int): byte[];
          getBytes(columnName: string): byte[];
          getCharacterStream(columnIndex: int): java.io.Reader;
          getCharacterStream(columnName: string): java.io.Reader;
          getClob(columnIndex: int): java.sql.Clob;
          getClob(colName: string): java.sql.Clob;
          _getColIdxByName(name: string): int;
          getConnection(): java.sql.Connection;
          _getCurrentRow(): rowset.internal.BaseRow;
          getCursorName(): string;
          getDate(columnIndex: int): java.sql.Date;
          getDate(columnName: string): java.sql.Date;
          getDate(columnIndex: int, cal: java.util.Calendar): java.sql.Date;
          getDate(columnName: string, cal: java.util.Calendar): java.sql.Date;
          getDouble(columnIndex: int): double;
          getDouble(columnName: string): double;
          getFloat(columnIndex: int): float;
          getFloat(columnName: string): float;
          getHoldability(): int;
          getInt(columnIndex: int): int;
          getInt(columnName: string): int;
          getKeyColumns(): int[];
          getLong(columnIndex: int): long;
          getLong(columnName: string): long;
          getMatchColumnIndexes(): int[];
          getMatchColumnNames(): string[];
          getMetaData(): java.sql.ResultSetMetaData;
          getNCharacterStream(columnIndex: int): java.io.Reader;
          getNCharacterStream(columnName: string): java.io.Reader;
          getNClob(i: int): java.sql.NClob;
          getNClob(colName: string): java.sql.NClob;
          getNString(columnIndex: int): string;
          getNString(columnName: string): string;
          getObject(columnIndex: int): any;
          getObject(columnName: string): any;
          getObject(columnIndex: int, map: java.util.Map<string,java.lang.Class<any>>): any;
          getObject(columnName: string, map: java.util.Map<string,java.lang.Class<any>>): any;
          getObject<T>(columnIndex: int, type: java.lang.Class<T>): T;
          getObject<T>(columnLabel: string, type: java.lang.Class<T>): T;
          getOriginal(): java.sql.ResultSet;
          getOriginalRow(): java.sql.ResultSet;
          getPageSize(): int;
          getRef(columnIndex: int): java.sql.Ref;
          getRef(colName: string): java.sql.Ref;
          getRow(): int;
          getRowId(columnIndex: int): java.sql.RowId;
          getRowId(columnName: string): java.sql.RowId;
          getRowSetWarnings(): javax.sql.rowset.RowSetWarning;
          getSQLXML(columnIndex: int): java.sql.SQLXML;
          getSQLXML(colName: string): java.sql.SQLXML;
          getShort(columnIndex: int): short;
          getShort(columnName: string): short;
          getStatement(): java.sql.Statement;
          getString(columnIndex: int): string;
          getString(columnName: string): string;
          getSyncProvider(): javax.sql.rowset.spi.SyncProvider;
          getTableName(): string;
          getTime(columnIndex: int): java.sql.Time;
          getTime(columnName: string): java.sql.Time;
          getTime(columnIndex: int, cal: java.util.Calendar): java.sql.Time;
          getTime(columnName: string, cal: java.util.Calendar): java.sql.Time;
          getTimestamp(columnIndex: int): java.sql.Timestamp;
          getTimestamp(columnName: string): java.sql.Timestamp;
          getTimestamp(columnIndex: int, cal: java.util.Calendar): java.sql.Timestamp;
          getTimestamp(columnName: string, cal: java.util.Calendar): java.sql.Timestamp;
          getURL(columnIndex: int): java.net.URL;
          getURL(columnName: string): java.net.URL;
          getUnicodeStream(columnIndex: int): java.io.InputStream;
          getUnicodeStream(columnName: string): java.io.InputStream;
          getWarnings(): java.sql.SQLWarning;
          _initContainer(): void;
          _initMetaData(md: javax.sql.rowset.RowSetMetaDataImpl, rsmd: java.sql.ResultSetMetaData): void;
          _initProperties(): void;
          insertRow(): void;
          _internalFirst(): boolean;
          _internalLast(): boolean;
          _internalNext(): boolean;
          _internalPrevious(): boolean;
          isAfterLast(): boolean;
          isBeforeFirst(): boolean;
          _isBinary(type: int): boolean;
          _isBoolean(type: int): boolean;
          isClosed(): boolean;
          isFirst(): boolean;
          isLast(): boolean;
          _isNumeric(type: int): boolean;
          _isString(type: int): boolean;
          _isTemporal(type: int): boolean;
          isWrapperFor(interfaces: java.lang.Class<any>): boolean;
          last(): boolean;
          _makeRowOriginal(row: rowset.internal.Row): void;
          moveToCurrentRow(): void;
          moveToInsertRow(): void;
          next(): boolean;
          nextPage(): boolean;
          populate(data: java.sql.ResultSet): void;
          populate(data: java.sql.ResultSet, start: int): void;
          previous(): boolean;
          previousPage(): boolean;
          _readObject(ois: java.io.ObjectInputStream): void;
          refreshRow(): void;
          relative(rows: int): boolean;
          release(): void;
          _removeCurrentRow(): void;
          restoreOriginal(): void;
          rollback(): void;
          rollback(s: java.sql.Savepoint): void;
          rowDeleted(): boolean;
          rowInserted(): boolean;
          rowSetPopulated(event: javax.sql.RowSetEvent, numRows: int): void;
          rowUpdated(): boolean;
          setAsciiStream(parameterName: string, x: java.io.InputStream, length: int): void;
          setAsciiStream(parameterName: string, x: java.io.InputStream): void;
          setBigDecimal(parameterName: string, x: java.math.BigDecimal): void;
          setBinaryStream(parameterName: string, x: java.io.InputStream, length: int): void;
          setBinaryStream(parameterName: string, x: java.io.InputStream): void;
          setBlob(parameterIndex: int, inputStream: java.io.InputStream, length: long): void;
          setBlob(parameterIndex: int, inputStream: java.io.InputStream): void;
          setBlob(parameterName: string, inputStream: java.io.InputStream, length: long): void;
          setBlob(parameterName: string, x: java.sql.Blob): void;
          setBlob(parameterName: string, inputStream: java.io.InputStream): void;
          setBoolean(parameterName: string, x: boolean): void;
          setByte(parameterName: string, x: byte): void;
          setBytes(parameterName: string, x: byte[]): void;
          setCharacterStream(parameterName: string, reader: java.io.Reader, length: int): void;
          setCharacterStream(parameterName: string, reader: java.io.Reader): void;
          setClob(parameterName: string, reader: java.io.Reader, length: long): void;
          setClob(parameterName: string, x: java.sql.Clob): void;
          setClob(parameterName: string, reader: java.io.Reader): void;
          setClob(parameterIndex: int, reader: java.io.Reader): void;
          setClob(parameterIndex: int, reader: java.io.Reader, length: long): void;
          setCommand(cmd: string): void;
          _setConnection(connection: java.sql.Connection): void;
          setDate(parameterName: string, x: java.sql.Date): void;
          setDate(parameterName: string, x: java.sql.Date, cal: java.util.Calendar): void;
          setDouble(parameterName: string, x: double): void;
          setFloat(parameterName: string, x: float): void;
          setInt(parameterName: string, x: int): void;
          setKeyColumns(keys: int[]): void;
          _setLastValueNull(value: boolean): void;
          setLong(parameterName: string, x: long): void;
          setMatchColumn(columnIdxes: int[]): void;
          setMatchColumn(columnNames: string[]): void;
          setMatchColumn(columnIdx: int): void;
          setMatchColumn(columnName: string): void;
          setMetaData(md: javax.sql.RowSetMetaData): void;
          setNCharacterStream(parameterIndex: int, value: java.io.Reader): void;
          setNCharacterStream(parameterIndex: int, value: java.io.Reader, length: long): void;
          setNCharacterStream(parameterName: string, value: java.io.Reader, length: long): void;
          setNCharacterStream(parameterName: string, value: java.io.Reader): void;
          setNClob(parameterName: string, value: java.sql.NClob): void;
          setNClob(parameterIndex: int, reader: java.io.Reader): void;
          setNClob(parameterName: string, reader: java.io.Reader, length: long): void;
          setNClob(parameterName: string, reader: java.io.Reader): void;
          setNClob(parameterIndex: int, reader: java.io.Reader, length: long): void;
          setNClob(parameterIndex: int, value: java.sql.NClob): void;
          setNString(parameterIndex: int, value: string): void;
          setNString(parameterName: string, value: string): void;
          setNull(parameterName: string, sqlType: int): void;
          setNull(parameterName: string, sqlType: int, typeName: string): void;
          setObject(parameterName: string, x: any, targetSqlType: int, scale: int): void;
          setObject(parameterName: string, x: any, targetSqlType: int): void;
          setObject(parameterName: string, x: any): void;
          setOriginal(): void;
          setOriginalRow(): void;
          setPageSize(size: int): void;
          setRowId(parameterIndex: int, x: java.sql.RowId): void;
          setRowId(parameterName: string, x: java.sql.RowId): void;
          setRowInserted(insertFlag: boolean): void;
          setSQLXML(parameterIndex: int, xmlObject: java.sql.SQLXML): void;
          setSQLXML(parameterName: string, xmlObject: java.sql.SQLXML): void;
          setShort(parameterName: string, x: short): void;
          setString(parameterName: string, x: string): void;
          setSyncProvider(providerStr: string): void;
          setTableName(tabName: string): void;
          setTime(parameterName: string, x: java.sql.Time): void;
          setTime(parameterName: string, x: java.sql.Time, cal: java.util.Calendar): void;
          setTimestamp(parameterName: string, x: java.sql.Timestamp, cal: java.util.Calendar): void;
          setTimestamp(parameterName: string, x: java.sql.Timestamp): void;
          setURL(parameterIndex: int, x: java.net.URL): void;
          size(): int;
          toCollection(): java.util.Collection<any>;
          toCollection(column: int): java.util.Collection<any>;
          toCollection(column: string): java.util.Collection<any>;
          undoDelete(): void;
          undoInsert(): void;
          undoUpdate(): void;
          unsetMatchColumn(columnIdxes: int[]): void;
          unsetMatchColumn(columnIdxes: string[]): void;
          unsetMatchColumn(columnIdx: int): void;
          unsetMatchColumn(columnName: string): void;
          unwrap<T>(iface: java.lang.Class<T>): T;
          updateArray(columnIndex: int, a: java.sql.Array): void;
          updateArray(columnName: string, a: java.sql.Array): void;
          updateAsciiStream(columnIndex: int, x: java.io.InputStream, length: int): void;
          updateAsciiStream(columnName: string, x: java.io.InputStream, length: int): void;
          updateAsciiStream(columnIndex: int, x: java.io.InputStream, length: long): void;
          updateAsciiStream(columnLabel: string, x: java.io.InputStream, length: long): void;
          updateAsciiStream(columnIndex: int, x: java.io.InputStream): void;
          updateAsciiStream(columnLabel: string, x: java.io.InputStream): void;
          updateBigDecimal(columnIndex: int, x: java.math.BigDecimal): void;
          updateBigDecimal(columnName: string, x: java.math.BigDecimal): void;
          updateBinaryStream(columnIndex: int, x: java.io.InputStream, length: int): void;
          updateBinaryStream(columnName: string, x: java.io.InputStream, length: int): void;
          updateBinaryStream(columnIndex: int, x: java.io.InputStream, length: long): void;
          updateBinaryStream(columnLabel: string, x: java.io.InputStream, length: long): void;
          updateBinaryStream(columnIndex: int, x: java.io.InputStream): void;
          updateBinaryStream(columnLabel: string, x: java.io.InputStream): void;
          updateBlob(columnIndex: int, b: java.sql.Blob): void;
          updateBlob(columnName: string, b: java.sql.Blob): void;
          updateBlob(columnIndex: int, inputStream: java.io.InputStream, length: long): void;
          updateBlob(columnLabel: string, inputStream: java.io.InputStream, length: long): void;
          updateBlob(columnIndex: int, inputStream: java.io.InputStream): void;
          updateBlob(columnLabel: string, inputStream: java.io.InputStream): void;
          updateBoolean(columnIndex: int, x: boolean): void;
          updateBoolean(columnName: string, x: boolean): void;
          updateByte(columnIndex: int, x: byte): void;
          updateByte(columnName: string, x: byte): void;
          updateBytes(columnIndex: int, x: byte[]): void;
          updateBytes(columnName: string, x: byte[]): void;
          updateCharacterStream(columnIndex: int, x: java.io.Reader, length: int): void;
          updateCharacterStream(columnName: string, reader: java.io.Reader, length: int): void;
          updateCharacterStream(columnIndex: int, x: java.io.Reader, length: long): void;
          updateCharacterStream(columnLabel: string, reader: java.io.Reader, length: long): void;
          updateCharacterStream(columnIndex: int, x: java.io.Reader): void;
          updateCharacterStream(columnLabel: string, reader: java.io.Reader): void;
          updateClob(columnIndex: int, c: java.sql.Clob): void;
          updateClob(columnName: string, c: java.sql.Clob): void;
          updateClob(columnIndex: int, reader: java.io.Reader, length: long): void;
          updateClob(columnLabel: string, reader: java.io.Reader, length: long): void;
          updateClob(columnIndex: int, reader: java.io.Reader): void;
          updateClob(columnLabel: string, reader: java.io.Reader): void;
          updateDate(columnIndex: int, x: java.sql.Date): void;
          updateDate(columnName: string, x: java.sql.Date): void;
          updateDouble(columnIndex: int, x: double): void;
          updateDouble(columnName: string, x: double): void;
          updateFloat(columnIndex: int, x: float): void;
          updateFloat(columnName: string, x: float): void;
          updateInt(columnIndex: int, x: int): void;
          updateInt(columnName: string, x: int): void;
          updateLong(columnIndex: int, x: long): void;
          updateLong(columnName: string, x: long): void;
          updateNCharacterStream(columnIndex: int, x: java.io.Reader, length: long): void;
          updateNCharacterStream(columnName: string, x: java.io.Reader, length: long): void;
          updateNCharacterStream(columnIndex: int, x: java.io.Reader): void;
          updateNCharacterStream(columnLabel: string, reader: java.io.Reader): void;
          updateNClob(columnIndex: int, nClob: java.sql.NClob): void;
          updateNClob(columnName: string, nClob: java.sql.NClob): void;
          updateNClob(columnIndex: int, reader: java.io.Reader, length: long): void;
          updateNClob(columnLabel: string, reader: java.io.Reader, length: long): void;
          updateNClob(columnIndex: int, reader: java.io.Reader): void;
          updateNClob(columnLabel: string, reader: java.io.Reader): void;
          updateNString(columnIndex: int, nString: string): void;
          updateNString(columnName: string, nString: string): void;
          updateNull(columnIndex: int): void;
          updateNull(columnName: string): void;
          updateObject(columnIndex: int, x: any, scale: int): void;
          updateObject(columnIndex: int, x: any): void;
          updateObject(columnName: string, x: any, scale: int): void;
          updateObject(columnName: string, x: any): void;
          updateRef(columnIndex: int, ref: java.sql.Ref): void;
          updateRef(columnName: string, ref: java.sql.Ref): void;
          updateRow(): void;
          updateRowId(columnIndex: int, x: java.sql.RowId): void;
          updateRowId(columnName: string, x: java.sql.RowId): void;
          updateSQLXML(columnIndex: int, xmlObject: java.sql.SQLXML): void;
          updateSQLXML(columnName: string, xmlObject: java.sql.SQLXML): void;
          updateShort(columnIndex: int, x: short): void;
          updateShort(columnName: string, x: short): void;
          updateString(columnIndex: int, x: string): void;
          updateString(columnName: string, x: string): void;
          updateTime(columnIndex: int, x: java.sql.Time): void;
          updateTime(columnName: string, x: java.sql.Time): void;
          updateTimestamp(columnIndex: int, x: java.sql.Timestamp): void;
          updateTimestamp(columnName: string, x: java.sql.Timestamp): void;
          wasNull(): boolean;
          _DEFAULT_SYNC_PROVIDER: string;
          _RSMD: java.sql.ResultSetMetaData;
          _RowSetMD: javax.sql.rowset.RowSetMetaDataImpl;
          _absolutePos: int;
          _callWithCon: boolean;
          _conn: java.sql.Connection;
          _crsReader: internal.CachedRowSetReader;
          _currentRow: int;
          _cursorPos: int;
          _dbmslocatorsUpdateCopy: boolean;
          _endPos: int;
          _iMatchColumn: int;
          _iMatchColumns: java.util.Vector<int>;
          _insertRow: internal.InsertRow;
          _keyCols: int[];
          _lastValueNull: boolean;
          _maxRowsreached: int;
          _numDeleted: int;
          _numRows: int;
          _onFirstPage: boolean;
          _onInsertRow: boolean;
          _onLastPage: boolean;
          _pageSize: int;
          _pagenotend: boolean;
          _populatecallcount: int;
          _prevEndPos: int;
          _provider: javax.sql.rowset.spi.SyncProvider;
          _resBundle: JdbcRowSetResourceBundle;
          _resultSet: java.sql.ResultSet;
          _rowSetReader: javax.sql.RowSetReader;
          _rowSetWriter: javax.sql.RowSetWriter;
          _rowsetWarning: javax.sql.rowset.RowSetWarning;
          _rvh: java.util.Vector<any>;
          _sqlwarn: java.sql.SQLWarning;
          _startPos: int;
          _startPrev: int;
          _strMatchColumn: string;
          _strMatchColumns: java.util.Vector<string>;
          _tWriter: javax.sql.rowset.spi.TransactionalWriter;
          _tXWriter: boolean;
          _tableName: string;
          _totalRows: int;
          _updateOnInsert: boolean;
        }
        interface CachedRowSetImpl extends CombineTypes<[_CachedRowSetImpl, java.lang.Cloneable, javax.sql.rowset.BaseRowSet, javax.sql.rowset.CachedRowSet, javax.sql.RowSet, javax.sql.RowSetInternal, java.io.Serializable]> {}
        interface _FilteredRowSetImpl$$static extends ClassLike {
          _serialVersionUID: long;
          new(): FilteredRowSetImpl;
          new(env: java.util.Hashtable): FilteredRowSetImpl;
        }
        let FilteredRowSetImpl: _FilteredRowSetImpl$$static;
        interface _FilteredRowSetImpl {
          absolute(rows: int): boolean;
          getFilter(): javax.sql.rowset.Predicate;
          insertRow(): void;
          _internalFirst(): boolean;
          _internalLast(): boolean;
          _internalNext(): boolean;
          _internalPrevious(): boolean;
          moveToInsertRow(): void;
          _readObject(ois: java.io.ObjectInputStream): void;
          relative(rows: int): boolean;
          setFilter(p: javax.sql.rowset.Predicate): void;
          updateAsciiStream(columnIndex: int, x: java.io.InputStream, length: int): void;
          updateAsciiStream(columnName: string, x: java.io.InputStream, length: int): void;
          updateBigDecimal(columnIndex: int, x: java.math.BigDecimal): void;
          updateBigDecimal(columnName: string, x: java.math.BigDecimal): void;
          updateBinaryStream(columnIndex: int, x: java.io.InputStream, length: int): void;
          updateBinaryStream(columnName: string, x: java.io.InputStream, length: int): void;
          updateBoolean(columnIndex: int, x: boolean): void;
          updateBoolean(columnName: string, x: boolean): void;
          updateByte(columnIndex: int, x: byte): void;
          updateByte(columnName: string, x: byte): void;
          updateBytes(columnIndex: int, x: byte[]): void;
          updateBytes(columnName: string, x: byte[]): void;
          updateCharacterStream(columnIndex: int, x: java.io.Reader, length: int): void;
          updateCharacterStream(columnName: string, reader: java.io.Reader, length: int): void;
          updateDate(columnIndex: int, x: java.sql.Date): void;
          updateDate(columnName: string, x: java.sql.Date): void;
          updateDouble(columnIndex: int, x: double): void;
          updateDouble(columnName: string, x: double): void;
          updateFloat(columnIndex: int, x: float): void;
          updateFloat(columnName: string, x: float): void;
          updateInt(columnIndex: int, x: int): void;
          updateInt(columnName: string, x: int): void;
          updateLong(columnIndex: int, x: long): void;
          updateLong(columnName: string, x: long): void;
          updateObject(columnIndex: int, x: any): void;
          updateObject(columnName: string, x: any): void;
          updateObject(columnIndex: int, x: any, scale: int): void;
          updateObject(columnName: string, x: any, scale: int): void;
          updateShort(columnIndex: int, x: short): void;
          updateShort(columnName: string, x: short): void;
          updateString(columnIndex: int, x: string): void;
          updateString(columnName: string, x: string): void;
          updateTime(columnIndex: int, x: java.sql.Time): void;
          updateTime(columnName: string, x: java.sql.Time): void;
          updateTimestamp(columnIndex: int, x: java.sql.Timestamp): void;
          updateTimestamp(columnName: string, x: java.sql.Timestamp): void;
          _onInsertRow: boolean;
          _p: javax.sql.rowset.Predicate;
        }
        interface FilteredRowSetImpl extends CombineTypes<[_FilteredRowSetImpl, java.lang.Cloneable, javax.sql.rowset.FilteredRowSet, com.sun.rowset.WebRowSetImpl, java.io.Serializable]> {}
        interface _JdbcRowSetImpl$$static extends ClassLike {
          _serialVersionUID: long;
          new(): JdbcRowSetImpl;
          new(con: java.sql.Connection): JdbcRowSetImpl;
          new(url: string, user: string, password: string): JdbcRowSetImpl;
          new(res: java.sql.ResultSet): JdbcRowSetImpl;
        }
        let JdbcRowSetImpl: _JdbcRowSetImpl$$static;
        interface _JdbcRowSetImpl {
          absolute(row: int): boolean;
          afterLast(): void;
          beforeFirst(): void;
          cancelRowUpdates(): void;
          _checkState(): void;
          _checkTypeConcurrency(): void;
          clearWarnings(): void;
          close(): void;
          commit(): void;
          _connect(): java.sql.Connection;
          _decodeParams(params: any[], ps: java.sql.PreparedStatement): void;
          deleteRow(): void;
          execute(): void;
          findColumn(columnName: string): int;
          first(): boolean;
          getArray(i: int): java.sql.Array;
          getArray(colName: string): java.sql.Array;
          getAsciiStream(columnIndex: int): java.io.InputStream;
          getAsciiStream(columnName: string): java.io.InputStream;
          getAutoCommit(): boolean;
          getBigDecimal(columnIndex: int, scale: int): java.math.BigDecimal;
          getBigDecimal(columnName: string, scale: int): java.math.BigDecimal;
          getBigDecimal(columnIndex: int): java.math.BigDecimal;
          getBigDecimal(columnName: string): java.math.BigDecimal;
          getBinaryStream(columnIndex: int): java.io.InputStream;
          getBinaryStream(columnName: string): java.io.InputStream;
          getBlob(i: int): java.sql.Blob;
          getBlob(colName: string): java.sql.Blob;
          getBoolean(columnIndex: int): boolean;
          getBoolean(columnName: string): boolean;
          getByte(columnIndex: int): byte;
          getByte(columnName: string): byte;
          getBytes(columnIndex: int): byte[];
          getBytes(columnName: string): byte[];
          getCharacterStream(columnIndex: int): java.io.Reader;
          getCharacterStream(columnName: string): java.io.Reader;
          getClob(i: int): java.sql.Clob;
          getClob(colName: string): java.sql.Clob;
          getConcurrency(): int;
          _getConnection(): java.sql.Connection;
          getCursorName(): string;
          getDatabaseMetaData(): java.sql.DatabaseMetaData;
          getDate(columnIndex: int): java.sql.Date;
          getDate(columnName: string): java.sql.Date;
          getDate(columnIndex: int, cal: java.util.Calendar): java.sql.Date;
          getDate(columnName: string, cal: java.util.Calendar): java.sql.Date;
          getDouble(columnIndex: int): double;
          getDouble(columnName: string): double;
          getFetchDirection(): int;
          getFloat(columnIndex: int): float;
          getFloat(columnName: string): float;
          getHoldability(): int;
          getInt(columnIndex: int): int;
          getInt(columnName: string): int;
          getLong(columnIndex: int): long;
          getLong(columnName: string): long;
          getMatchColumnIndexes(): int[];
          getMatchColumnNames(): string[];
          getMetaData(): java.sql.ResultSetMetaData;
          getNCharacterStream(columnIndex: int): java.io.Reader;
          getNCharacterStream(columnName: string): java.io.Reader;
          getNClob(i: int): java.sql.NClob;
          getNClob(colName: string): java.sql.NClob;
          getNString(columnIndex: int): string;
          getNString(columnName: string): string;
          getObject(columnIndex: int): any;
          getObject(columnName: string): any;
          getObject(i: int, map: java.util.Map<string,java.lang.Class<any>>): any;
          getObject(colName: string, map: java.util.Map<string,java.lang.Class<any>>): any;
          getObject<T>(columnIndex: int, type: java.lang.Class<T>): T;
          getObject<T>(columnLabel: string, type: java.lang.Class<T>): T;
          getParameterMetaData(): java.sql.ParameterMetaData;
          _getPreparedStatement(): java.sql.PreparedStatement;
          getRef(i: int): java.sql.Ref;
          getRef(colName: string): java.sql.Ref;
          _getResultSet(): java.sql.ResultSet;
          getRow(): int;
          getRowId(columnIndex: int): java.sql.RowId;
          getRowId(columnName: string): java.sql.RowId;
          getRowSetWarnings(): javax.sql.rowset.RowSetWarning;
          getSQLXML(columnIndex: int): java.sql.SQLXML;
          getSQLXML(colName: string): java.sql.SQLXML;
          getShort(columnIndex: int): short;
          getShort(columnName: string): short;
          getStatement(): java.sql.Statement;
          getString(columnIndex: int): string;
          getString(columnName: string): string;
          getTime(columnIndex: int): java.sql.Time;
          getTime(columnName: string): java.sql.Time;
          getTime(columnIndex: int, cal: java.util.Calendar): java.sql.Time;
          getTime(columnName: string, cal: java.util.Calendar): java.sql.Time;
          getTimestamp(columnIndex: int): java.sql.Timestamp;
          getTimestamp(columnName: string): java.sql.Timestamp;
          getTimestamp(columnIndex: int, cal: java.util.Calendar): java.sql.Timestamp;
          getTimestamp(columnName: string, cal: java.util.Calendar): java.sql.Timestamp;
          getType(): int;
          getURL(columnIndex: int): java.net.URL;
          getURL(columnName: string): java.net.URL;
          getUnicodeStream(columnIndex: int): java.io.InputStream;
          getUnicodeStream(columnName: string): java.io.InputStream;
          getWarnings(): java.sql.SQLWarning;
          _initMetaData(md: javax.sql.RowSetMetaData, rsmd: java.sql.ResultSetMetaData): void;
          insertRow(): void;
          isAfterLast(): boolean;
          isBeforeFirst(): boolean;
          isClosed(): boolean;
          isFirst(): boolean;
          isLast(): boolean;
          isWrapperFor(interfaces: java.lang.Class<any>): boolean;
          last(): boolean;
          moveToCurrentRow(): void;
          moveToInsertRow(): void;
          next(): boolean;
          _prepare(): java.sql.PreparedStatement;
          previous(): boolean;
          _readObject(ois: java.io.ObjectInputStream): void;
          refreshRow(): void;
          relative(rows: int): boolean;
          rollback(): void;
          rollback(s: java.sql.Savepoint): void;
          rowDeleted(): boolean;
          rowInserted(): boolean;
          rowUpdated(): boolean;
          setAsciiStream(parameterName: string, x: java.io.InputStream, length: int): void;
          setAsciiStream(parameterName: string, x: java.io.InputStream): void;
          setAutoCommit(autoCommit: boolean): void;
          setBigDecimal(parameterName: string, x: java.math.BigDecimal): void;
          setBinaryStream(parameterName: string, x: java.io.InputStream, length: int): void;
          setBinaryStream(parameterName: string, x: java.io.InputStream): void;
          setBlob(parameterIndex: int, inputStream: java.io.InputStream, length: long): void;
          setBlob(parameterIndex: int, inputStream: java.io.InputStream): void;
          setBlob(parameterName: string, inputStream: java.io.InputStream, length: long): void;
          setBlob(parameterName: string, x: java.sql.Blob): void;
          setBlob(parameterName: string, inputStream: java.io.InputStream): void;
          setBoolean(parameterName: string, x: boolean): void;
          setByte(parameterName: string, x: byte): void;
          setBytes(parameterName: string, x: byte[]): void;
          setCharacterStream(parameterName: string, reader: java.io.Reader, length: int): void;
          setCharacterStream(parameterName: string, reader: java.io.Reader): void;
          setClob(parameterName: string, reader: java.io.Reader, length: long): void;
          setClob(parameterName: string, x: java.sql.Clob): void;
          setClob(parameterName: string, reader: java.io.Reader): void;
          setClob(parameterIndex: int, reader: java.io.Reader): void;
          setClob(parameterIndex: int, reader: java.io.Reader, length: long): void;
          setCommand(command: string): void;
          setConcurrency(concur: int): void;
          _setConnection(connection: java.sql.Connection): void;
          setDataSourceName(dsName: string): void;
          setDate(parameterName: string, x: java.sql.Date): void;
          setDate(parameterName: string, x: java.sql.Date, cal: java.util.Calendar): void;
          setDouble(parameterName: string, x: double): void;
          setFetchDirection(direction: int): void;
          setFetchSize(rows: int): void;
          setFloat(parameterName: string, x: float): void;
          setInt(parameterName: string, x: int): void;
          setLong(parameterName: string, x: long): void;
          setMatchColumn(columnIdxes: int[]): void;
          setMatchColumn(columnNames: string[]): void;
          setMatchColumn(columnIdx: int): void;
          setMatchColumn(columnName: string): void;
          setNCharacterStream(parameterIndex: int, value: java.io.Reader): void;
          setNCharacterStream(parameterIndex: int, value: java.io.Reader, length: long): void;
          setNCharacterStream(parameterName: string, value: java.io.Reader, length: long): void;
          setNCharacterStream(parameterName: string, value: java.io.Reader): void;
          setNClob(parameterName: string, value: java.sql.NClob): void;
          setNClob(parameterIndex: int, reader: java.io.Reader): void;
          setNClob(parameterName: string, reader: java.io.Reader, length: long): void;
          setNClob(parameterName: string, reader: java.io.Reader): void;
          setNClob(parameterIndex: int, reader: java.io.Reader, length: long): void;
          setNClob(parameterIndex: int, value: java.sql.NClob): void;
          setNString(parameterIndex: int, value: string): void;
          setNString(parameterName: string, value: string): void;
          setNull(parameterName: string, sqlType: int): void;
          setNull(parameterName: string, sqlType: int, typeName: string): void;
          setObject(parameterName: string, x: any, targetSqlType: int, scale: int): void;
          setObject(parameterName: string, x: any, targetSqlType: int): void;
          setObject(parameterName: string, x: any): void;
          _setParams(): void;
          setPassword(password: string): void;
          _setPreparedStatement(preparedStatement: java.sql.PreparedStatement): void;
          _setProperties(ps: java.sql.PreparedStatement): void;
          _setResultSet(resultSet: java.sql.ResultSet): void;
          setRowId(parameterIndex: int, x: java.sql.RowId): void;
          setRowId(parameterName: string, x: java.sql.RowId): void;
          setSQLXML(parameterIndex: int, xmlObject: java.sql.SQLXML): void;
          setSQLXML(parameterName: string, xmlObject: java.sql.SQLXML): void;
          setShort(parameterName: string, x: short): void;
          setString(parameterName: string, x: string): void;
          setTime(parameterName: string, x: java.sql.Time): void;
          setTime(parameterName: string, x: java.sql.Time, cal: java.util.Calendar): void;
          setTimestamp(parameterName: string, x: java.sql.Timestamp, cal: java.util.Calendar): void;
          setTimestamp(parameterName: string, x: java.sql.Timestamp): void;
          setType(type: int): void;
          setURL(parameterIndex: int, x: java.net.URL): void;
          setUrl(url: string): void;
          setUsername(uname: string): void;
          unsetMatchColumn(columnIdxes: int[]): void;
          unsetMatchColumn(columnIdxes: string[]): void;
          unsetMatchColumn(columnIdx: int): void;
          unsetMatchColumn(columnName: string): void;
          unwrap<T>(iface: java.lang.Class<T>): T;
          updateArray(columnIndex: int, a: java.sql.Array): void;
          updateArray(columnName: string, a: java.sql.Array): void;
          updateAsciiStream(columnIndex: int, x: java.io.InputStream, length: int): void;
          updateAsciiStream(columnName: string, x: java.io.InputStream, length: int): void;
          updateAsciiStream(columnIndex: int, x: java.io.InputStream, length: long): void;
          updateAsciiStream(columnLabel: string, x: java.io.InputStream, length: long): void;
          updateAsciiStream(columnIndex: int, x: java.io.InputStream): void;
          updateAsciiStream(columnLabel: string, x: java.io.InputStream): void;
          updateBigDecimal(columnIndex: int, x: java.math.BigDecimal): void;
          updateBigDecimal(columnName: string, x: java.math.BigDecimal): void;
          updateBinaryStream(columnIndex: int, x: java.io.InputStream, length: int): void;
          updateBinaryStream(columnName: string, x: java.io.InputStream, length: int): void;
          updateBinaryStream(columnIndex: int, x: java.io.InputStream, length: long): void;
          updateBinaryStream(columnLabel: string, x: java.io.InputStream, length: long): void;
          updateBinaryStream(columnIndex: int, x: java.io.InputStream): void;
          updateBinaryStream(columnLabel: string, x: java.io.InputStream): void;
          updateBlob(columnIndex: int, b: java.sql.Blob): void;
          updateBlob(columnName: string, b: java.sql.Blob): void;
          updateBlob(columnIndex: int, inputStream: java.io.InputStream, length: long): void;
          updateBlob(columnLabel: string, inputStream: java.io.InputStream, length: long): void;
          updateBlob(columnIndex: int, inputStream: java.io.InputStream): void;
          updateBlob(columnLabel: string, inputStream: java.io.InputStream): void;
          updateBoolean(columnIndex: int, x: boolean): void;
          updateBoolean(columnName: string, x: boolean): void;
          updateByte(columnIndex: int, x: byte): void;
          updateByte(columnName: string, x: byte): void;
          updateBytes(columnIndex: int, x: byte[]): void;
          updateBytes(columnName: string, x: byte[]): void;
          updateCharacterStream(columnIndex: int, x: java.io.Reader, length: int): void;
          updateCharacterStream(columnName: string, reader: java.io.Reader, length: int): void;
          updateCharacterStream(columnIndex: int, x: java.io.Reader, length: long): void;
          updateCharacterStream(columnLabel: string, reader: java.io.Reader, length: long): void;
          updateCharacterStream(columnIndex: int, x: java.io.Reader): void;
          updateCharacterStream(columnLabel: string, reader: java.io.Reader): void;
          updateClob(columnIndex: int, c: java.sql.Clob): void;
          updateClob(columnName: string, c: java.sql.Clob): void;
          updateClob(columnIndex: int, reader: java.io.Reader, length: long): void;
          updateClob(columnLabel: string, reader: java.io.Reader, length: long): void;
          updateClob(columnIndex: int, reader: java.io.Reader): void;
          updateClob(columnLabel: string, reader: java.io.Reader): void;
          updateDate(columnIndex: int, x: java.sql.Date): void;
          updateDate(columnName: string, x: java.sql.Date): void;
          updateDouble(columnIndex: int, x: double): void;
          updateDouble(columnName: string, x: double): void;
          updateFloat(columnIndex: int, x: float): void;
          updateFloat(columnName: string, x: float): void;
          updateInt(columnIndex: int, x: int): void;
          updateInt(columnName: string, x: int): void;
          updateLong(columnIndex: int, x: long): void;
          updateLong(columnName: string, x: long): void;
          updateNCharacterStream(columnIndex: int, x: java.io.Reader, length: long): void;
          updateNCharacterStream(columnName: string, x: java.io.Reader, length: long): void;
          updateNCharacterStream(columnIndex: int, x: java.io.Reader): void;
          updateNCharacterStream(columnLabel: string, reader: java.io.Reader): void;
          updateNClob(columnIndex: int, nClob: java.sql.NClob): void;
          updateNClob(columnName: string, nClob: java.sql.NClob): void;
          updateNClob(columnIndex: int, reader: java.io.Reader, length: long): void;
          updateNClob(columnLabel: string, reader: java.io.Reader, length: long): void;
          updateNClob(columnIndex: int, reader: java.io.Reader): void;
          updateNClob(columnLabel: string, reader: java.io.Reader): void;
          updateNString(columnIndex: int, nString: string): void;
          updateNString(columnName: string, nString: string): void;
          updateNull(columnIndex: int): void;
          updateNull(columnName: string): void;
          updateObject(columnIndex: int, x: any, scale: int): void;
          updateObject(columnIndex: int, x: any): void;
          updateObject(columnName: string, x: any, scale: int): void;
          updateObject(columnName: string, x: any): void;
          updateRef(columnIndex: int, ref: java.sql.Ref): void;
          updateRef(columnName: string, ref: java.sql.Ref): void;
          updateRow(): void;
          updateRowId(columnIndex: int, x: java.sql.RowId): void;
          updateRowId(columnName: string, x: java.sql.RowId): void;
          updateSQLXML(columnIndex: int, xmlObject: java.sql.SQLXML): void;
          updateSQLXML(columnName: string, xmlObject: java.sql.SQLXML): void;
          updateShort(columnIndex: int, x: short): void;
          updateShort(columnName: string, x: short): void;
          updateString(columnIndex: int, x: string): void;
          updateString(columnName: string, x: string): void;
          updateTime(columnIndex: int, x: java.sql.Time): void;
          updateTime(columnName: string, x: java.sql.Time): void;
          updateTimestamp(columnIndex: int, x: java.sql.Timestamp): void;
          updateTimestamp(columnName: string, x: java.sql.Timestamp): void;
          wasNull(): boolean;
          _conn: java.sql.Connection;
          _iMatchColumns: java.util.Vector<int>;
          _ps: java.sql.PreparedStatement;
          _resBundle: JdbcRowSetResourceBundle;
          _resMD: java.sql.ResultSetMetaData;
          _rowsMD: javax.sql.rowset.RowSetMetaDataImpl;
          _rs: java.sql.ResultSet;
          _strMatchColumns: java.util.Vector<string>;
        }
        interface JdbcRowSetImpl extends CombineTypes<[_JdbcRowSetImpl, javax.sql.rowset.BaseRowSet, javax.sql.rowset.JdbcRowSet, javax.sql.rowset.Joinable]> {}
        interface _JdbcRowSetResourceBundle$$static extends ClassLike {
          getJdbcRowSetResourceBundle(): JdbcRowSetResourceBundle;
          _DOT: string;
          _PATH: string;
          _PROPERTIES: string;
          _SLASH: string;
          _UNDERSCORE: string;
          _fileName: string;
          _jpResBundle: JdbcRowSetResourceBundle;
          _serialVersionUID: long;
        }
        let JdbcRowSetResourceBundle: _JdbcRowSetResourceBundle$$static;
        interface _JdbcRowSetResourceBundle {
          getKeys(): java.util.Enumeration;
          handleGetObject(key: string): any;
          _propResBundle: java.util.PropertyResourceBundle;
        }
        interface JdbcRowSetResourceBundle extends CombineTypes<[_JdbcRowSetResourceBundle, java.lang.Object, java.io.Serializable]> {}
        interface _JoinRowSetImpl$$static extends ClassLike {
          _serialVersionUID: long;
          new(): JoinRowSetImpl;
        }
        let JoinRowSetImpl: _JoinRowSetImpl$$static;
        interface _JoinRowSetImpl {
          absolute(row: int): boolean;
          acceptChanges(): void;
          addRowSet(rowset: javax.sql.rowset.Joinable): void;
          addRowSet(rowset: javax.sql.RowSet, columnIdx: int): void;
          addRowSet(rowset: javax.sql.RowSet, columnName: string): void;
          addRowSet(rowset: javax.sql.RowSet[], columnIdx: int[]): void;
          addRowSet(rowset: javax.sql.RowSet[], columnName: string[]): void;
          addRowSetListener(listener: javax.sql.RowSetListener): void;
          afterLast(): void;
          beforeFirst(): void;
          cancelRowUpdates(): void;
          _checkforMatchColumn(rs: javax.sql.rowset.Joinable): boolean;
          clearWarnings(): void;
          close(): void;
          columnUpdated(indexColumn: int): boolean;
          createCopySchema(): javax.sql.rowset.CachedRowSet;
          _createWebRowSet(): javax.sql.rowset.WebRowSet;
          deleteRow(): void;
          execute(): void;
          execute(conn: java.sql.Connection): void;
          findColumn(columnName: string): int;
          first(): boolean;
          getArray(columnIndex: int): java.sql.Array;
          getArray(columnName: string): java.sql.Array;
          getAsciiStream(columnIndex: int): java.io.InputStream;
          getAsciiStream(columnName: string): java.io.InputStream;
          getBigDecimal(columnIndex: int, scale: int): java.math.BigDecimal;
          getBigDecimal(columnName: string, scale: int): java.math.BigDecimal;
          getBigDecimal(columnIndex: int): java.math.BigDecimal;
          getBigDecimal(columnName: string): java.math.BigDecimal;
          getBinaryStream(columnIndex: int): java.io.InputStream;
          getBinaryStream(columnName: string): java.io.InputStream;
          getBlob(columnIndex: int): java.sql.Blob;
          getBlob(columnName: string): java.sql.Blob;
          getBoolean(columnIndex: int): boolean;
          getBoolean(columnName: string): boolean;
          getByte(columnIndex: int): byte;
          getByte(columnName: string): byte;
          getBytes(columnIndex: int): byte[];
          getBytes(columnName: string): byte[];
          getCharacterStream(columnIndex: int): java.io.Reader;
          getCharacterStream(columnName: string): java.io.Reader;
          getClob(columnIndex: int): java.sql.Clob;
          getClob(columnName: string): java.sql.Clob;
          getCursorName(): string;
          getDate(columnIndex: int): java.sql.Date;
          getDate(columnName: string): java.sql.Date;
          getDate(columnIndex: int, cal: java.util.Calendar): java.sql.Date;
          getDate(columnName: string, cal: java.util.Calendar): java.sql.Date;
          getDouble(columnIndex: int): double;
          getDouble(columnName: string): double;
          getFloat(columnIndex: int): float;
          getFloat(columnName: string): float;
          getInt(columnIndex: int): int;
          getInt(columnName: string): int;
          getJoinType(): int;
          getKeyColumns(): int[];
          getLong(columnIndex: int): long;
          getLong(columnName: string): long;
          getMetaData(): java.sql.ResultSetMetaData;
          getObject(columnIndex: int): any;
          getObject(columnIndex: int, map: java.util.Map<string,java.lang.Class<any>>): any;
          getObject(columnName: string): any;
          getObject(columnName: string, map: java.util.Map<string,java.lang.Class<any>>): any;
          getOriginal(): java.sql.ResultSet;
          getOriginalRow(): java.sql.ResultSet;
          getRef(columnIndex: int): java.sql.Ref;
          getRef(columnName: string): java.sql.Ref;
          getRow(): int;
          getRowSetNames(): string[];
          getRowSets(): java.util.Collection;
          getShort(columnIndex: int): short;
          getShort(columnName: string): short;
          getStatement(): java.sql.Statement;
          getString(columnIndex: int): string;
          getString(columnName: string): string;
          getSyncProvider(): javax.sql.rowset.spi.SyncProvider;
          getTime(columnIndex: int): java.sql.Time;
          getTime(columnName: string): java.sql.Time;
          getTime(columnIndex: int, cal: java.util.Calendar): java.sql.Time;
          getTime(columnName: string, cal: java.util.Calendar): java.sql.Time;
          getTimestamp(columnIndex: int): java.sql.Timestamp;
          getTimestamp(columnName: string): java.sql.Timestamp;
          getTimestamp(columnIndex: int, cal: java.util.Calendar): java.sql.Timestamp;
          getTimestamp(columnName: string, cal: java.util.Calendar): java.sql.Timestamp;
          getURL(columnIndex: int): java.net.URL;
          getURL(columnName: string): java.net.URL;
          getUnicodeStream(columnIndex: int): java.io.InputStream;
          getUnicodeStream(columnName: string): java.io.InputStream;
          getWarnings(): java.sql.SQLWarning;
          getWhereClause(): string;
          _initJOIN(rowset: javax.sql.rowset.CachedRowSet): void;
          insertRow(): void;
          isAfterLast(): boolean;
          isBeforeFirst(): boolean;
          isFirst(): boolean;
          isLast(): boolean;
          last(): boolean;
          moveToCurrentRow(): void;
          moveToInsertRow(): void;
          next(): boolean;
          previous(): boolean;
          _readObject(ois: java.io.ObjectInputStream): void;
          readXml(reader: java.io.Reader): void;
          readXml(iStream: java.io.InputStream): void;
          refreshRow(): void;
          relative(rows: int): boolean;
          removeRowSetListener(listener: javax.sql.RowSetListener): void;
          rowDeleted(): boolean;
          rowInserted(): boolean;
          rowUpdated(): boolean;
          setJoinType(type: int): void;
          setKeyColumns(cols: int[]): void;
          setMetaData(md: javax.sql.RowSetMetaData): void;
          setOriginalRow(): void;
          setSyncProvider(providerStr: string): void;
          size(): int;
          supportsCrossJoin(): boolean;
          supportsFullJoin(): boolean;
          supportsInnerJoin(): boolean;
          supportsLeftOuterJoin(): boolean;
          supportsRightOuterJoin(): boolean;
          toCachedRowSet(): javax.sql.rowset.CachedRowSet;
          toCollection(): java.util.Collection<any>;
          toCollection(column: int): java.util.Collection<any>;
          toCollection(column: string): java.util.Collection<any>;
          updateArray(columnIndex: int, a: java.sql.Array): void;
          updateArray(columnName: string, a: java.sql.Array): void;
          updateAsciiStream(columnIndex: int, x: java.io.InputStream, length: int): void;
          updateAsciiStream(columnName: string, x: java.io.InputStream, length: int): void;
          updateBigDecimal(columnIndex: int, x: java.math.BigDecimal): void;
          updateBigDecimal(columnName: string, x: java.math.BigDecimal): void;
          updateBinaryStream(columnIndex: int, x: java.io.InputStream, length: int): void;
          updateBinaryStream(columnName: string, x: java.io.InputStream, length: int): void;
          updateBlob(columnIndex: int, b: java.sql.Blob): void;
          updateBlob(columnName: string, b: java.sql.Blob): void;
          updateBoolean(columnIndex: int, x: boolean): void;
          updateBoolean(columnName: string, x: boolean): void;
          updateByte(columnIndex: int, x: byte): void;
          updateByte(columnName: string, x: byte): void;
          updateBytes(columnIndex: int, x: byte[]): void;
          updateBytes(columnName: string, x: byte[]): void;
          updateCharacterStream(columnIndex: int, x: java.io.Reader, length: int): void;
          updateCharacterStream(columnName: string, x: java.io.Reader, length: int): void;
          updateClob(columnIndex: int, c: java.sql.Clob): void;
          updateClob(columnName: string, c: java.sql.Clob): void;
          updateDate(columnIndex: int, x: java.sql.Date): void;
          updateDate(columnName: string, x: java.sql.Date): void;
          updateDouble(columnIndex: int, x: double): void;
          updateDouble(columnName: string, x: double): void;
          updateFloat(columnIndex: int, x: float): void;
          updateFloat(columnName: string, x: float): void;
          updateInt(columnIndex: int, x: int): void;
          updateInt(columnName: string, x: int): void;
          updateLong(columnIndex: int, x: long): void;
          updateLong(columnName: string, x: long): void;
          updateNull(columnIndex: int): void;
          updateNull(columnName: string): void;
          updateObject(columnIndex: int, x: any, scale: int): void;
          updateObject(columnIndex: int, x: any): void;
          updateObject(columnName: string, x: any, scale: int): void;
          updateObject(columnName: string, x: any): void;
          updateRef(columnIndex: int, ref: java.sql.Ref): void;
          updateRef(columnName: string, ref: java.sql.Ref): void;
          updateRow(): void;
          updateShort(columnIndex: int, x: short): void;
          updateShort(columnName: string, x: short): void;
          updateString(columnIndex: int, x: string): void;
          updateString(columnName: string, x: string): void;
          updateTime(columnIndex: int, x: java.sql.Time): void;
          updateTime(columnName: string, x: java.sql.Time): void;
          updateTimestamp(columnIndex: int, x: java.sql.Timestamp): void;
          updateTimestamp(columnName: string, x: java.sql.Timestamp): void;
          wasNull(): boolean;
          writeXml(rs: java.sql.ResultSet, writer: java.io.Writer): void;
          writeXml(writer: java.io.Writer): void;
          writeXml(oStream: java.io.OutputStream): void;
          writeXml(rs: java.sql.ResultSet, oStream: java.io.OutputStream): void;
          _crsInternal: CachedRowSetImpl;
          _iMatchKey: int;
          _strMatchKey: string;
          _supportedJOINs: boolean[];
          _vecJoinType: java.util.Vector<int>;
          _vecRowSetsInJOIN: java.util.Vector<CachedRowSetImpl>;
          _vecTableNames: java.util.Vector<string>;
          _wrs: javax.sql.rowset.WebRowSet;
        }
        interface JoinRowSetImpl extends CombineTypes<[_JoinRowSetImpl, javax.sql.rowset.JoinRowSet, com.sun.rowset.WebRowSetImpl]> {}
        interface _RowSetFactoryImpl$$static extends ClassLike {
          new(): RowSetFactoryImpl;
        }
        let RowSetFactoryImpl: _RowSetFactoryImpl$$static;
        interface _RowSetFactoryImpl {
          createCachedRowSet(): javax.sql.rowset.CachedRowSet;
          createFilteredRowSet(): javax.sql.rowset.FilteredRowSet;
          createJdbcRowSet(): javax.sql.rowset.JdbcRowSet;
          createJoinRowSet(): javax.sql.rowset.JoinRowSet;
          createWebRowSet(): javax.sql.rowset.WebRowSet;
        }
        interface RowSetFactoryImpl extends CombineTypes<[_RowSetFactoryImpl, javax.sql.rowset.RowSetFactory, java.lang.Object]> {}
        interface _WebRowSetImpl$$static extends ClassLike {
          _serialVersionUID: long;
          new(): WebRowSetImpl;
          new(env: java.util.Hashtable): WebRowSetImpl;
        }
        let WebRowSetImpl: _WebRowSetImpl$$static;
        interface _WebRowSetImpl {
          _readObject(ois: java.io.ObjectInputStream): void;
          readXml(reader: java.io.Reader): void;
          readXml(iStream: java.io.InputStream): void;
          writeXml(rs: java.sql.ResultSet, writer: java.io.Writer): void;
          writeXml(writer: java.io.Writer): void;
          writeXml(oStream: java.io.OutputStream): void;
          writeXml(rs: java.sql.ResultSet, oStream: java.io.OutputStream): void;
          _curPosBfrWrite: int;
          _provider: javax.sql.rowset.spi.SyncProvider;
          _xmlReader: internal.WebRowSetXmlReader;
          _xmlWriter: internal.WebRowSetXmlWriter;
        }
        interface WebRowSetImpl extends CombineTypes<[_WebRowSetImpl, com.sun.rowset.CachedRowSetImpl, javax.sql.rowset.WebRowSet]> {}
      }
    }
  }
  module javax {
    module sql {
      module rowset {
        module serial {
          interface _SQLInputImpl$$static extends ClassLike {
            new(attributes: any[], map: java.util.Map<string,java.lang.Class<any>>): SQLInputImpl;
          }
          let SQLInputImpl: _SQLInputImpl$$static;
          interface _SQLInputImpl {
            _getNextAttribute(): any;
            readArray(): java.sql.Array;
            readAsciiStream(): java.io.InputStream;
            readBigDecimal(): java.math.BigDecimal;
            readBinaryStream(): java.io.InputStream;
            readBlob(): java.sql.Blob;
            readBoolean(): boolean;
            readByte(): byte;
            readBytes(): byte[];
            readCharacterStream(): java.io.Reader;
            readClob(): java.sql.Clob;
            readDate(): java.sql.Date;
            readDouble(): double;
            readFloat(): float;
            readInt(): int;
            readLong(): long;
            readNClob(): java.sql.NClob;
            readNString(): string;
            readObject(): any;
            readRef(): java.sql.Ref;
            readRowId(): java.sql.RowId;
            readSQLXML(): java.sql.SQLXML;
            readShort(): short;
            readString(): string;
            readTime(): java.sql.Time;
            readTimestamp(): java.sql.Timestamp;
            readURL(): java.net.URL;
            wasNull(): boolean;
            _attrib: any[];
            _idx: int;
            _lastValueWasNull: boolean;
            _map: java.util.Map<string,java.lang.Class<any>>;
          }
          interface SQLInputImpl extends CombineTypes<[_SQLInputImpl, java.sql.SQLInput, java.lang.Object]> {}
          interface _SQLOutputImpl$$static extends ClassLike {
            new(attributes: java.util.Vector<any>, map: java.util.Map<string,any>): SQLOutputImpl;
          }
          let SQLOutputImpl: _SQLOutputImpl$$static;
          interface _SQLOutputImpl {
            writeArray(x: java.sql.Array): void;
            writeAsciiStream(x: java.io.InputStream): void;
            writeBigDecimal(x: java.math.BigDecimal): void;
            writeBinaryStream(x: java.io.InputStream): void;
            writeBlob(x: java.sql.Blob): void;
            writeBoolean(x: boolean): void;
            writeByte(x: byte): void;
            writeBytes(x: byte[]): void;
            writeCharacterStream(x: java.io.Reader): void;
            writeClob(x: java.sql.Clob): void;
            writeDate(x: java.sql.Date): void;
            writeDouble(x: double): void;
            writeFloat(x: float): void;
            writeInt(x: int): void;
            writeLong(x: long): void;
            writeNClob(x: java.sql.NClob): void;
            writeNString(x: string): void;
            writeObject(x: java.sql.SQLData): void;
            writeRef(x: java.sql.Ref): void;
            writeRowId(x: java.sql.RowId): void;
            writeSQLXML(x: java.sql.SQLXML): void;
            writeShort(x: short): void;
            writeString(x: string): void;
            writeStruct(x: java.sql.Struct): void;
            writeTime(x: java.sql.Time): void;
            writeTimestamp(x: java.sql.Timestamp): void;
            writeURL(url: java.net.URL): void;
            _attribs: java.util.Vector;
            _map: java.util.Map;
          }
          interface SQLOutputImpl extends CombineTypes<[_SQLOutputImpl, java.sql.SQLOutput, java.lang.Object]> {}
          interface _SerialArray$$static extends ClassLike {
            _serialVersionUID: long;
            new(array: java.sql.Array, map: java.util.Map<string,java.lang.Class<any>>): SerialArray;
            new(array: java.sql.Array): SerialArray;
          }
          let SerialArray: _SerialArray$$static;
          interface _SerialArray {
            clone(): any;
            equals(obj: any): boolean;
            free(): void;
            getArray(): any;
            getArray(map: java.util.Map<string,java.lang.Class<any>>): any;
            getArray(index: long, a1: int): any;
            getArray(index: long, a1: int, count: java.util.Map<string,java.lang.Class<any>>): any;
            getBaseType(): int;
            getBaseTypeName(): string;
            getResultSet(index: long, a1: int): java.sql.ResultSet;
            getResultSet(map: java.util.Map<string,java.lang.Class<any>>): java.sql.ResultSet;
            getResultSet(): java.sql.ResultSet;
            getResultSet(index: long, a1: int, count: java.util.Map<string,java.lang.Class<any>>): java.sql.ResultSet;
            hashCode(): int;
            _isValid(): void;
            _readObject(s: java.io.ObjectInputStream): void;
            _writeObject(s: java.io.ObjectOutputStream): void;
            _baseType: int;
            _baseTypeName: string;
            _elements: any[];
            _len: int;
          }
          interface SerialArray extends CombineTypes<[_SerialArray, java.lang.Cloneable, java.lang.Object, java.sql.Array, java.io.Serializable]> {}
          interface _SerialBlob$$static extends ClassLike {
            _serialVersionUID: long;
            new(b: byte[]): SerialBlob;
            new(blob: java.sql.Blob): SerialBlob;
          }
          let SerialBlob: _SerialBlob$$static;
          interface _SerialBlob {
            clone(): any;
            equals(obj: any): boolean;
            free(): void;
            getBinaryStream(): java.io.InputStream;
            getBinaryStream(pos: long, a1: long): java.io.InputStream;
            getBytes(pos: long, a1: int): byte[];
            hashCode(): int;
            _isValid(): void;
            length(): long;
            position(pattern: byte[], start: long): long;
            position(pattern: java.sql.Blob, start: long): long;
            _readObject(s: java.io.ObjectInputStream): void;
            setBinaryStream(pos: long): java.io.OutputStream;
            setBytes(pos: long, a1: byte[]): int;
            setBytes(pos: long, a1: byte[], bytes: int, offset: int): int;
            truncate(length: long): void;
            _writeObject(s: java.io.ObjectOutputStream): void;
            _blob: java.sql.Blob;
            _buf: byte[];
            _len: long;
            _origLen: long;
          }
          interface SerialBlob extends CombineTypes<[_SerialBlob, java.lang.Cloneable, java.lang.Object, java.sql.Blob, java.io.Serializable]> {}
          interface _SerialClob$$static extends ClassLike {
            _serialVersionUID: long;
            new(ch: char[]): SerialClob;
            new(clob: java.sql.Clob): SerialClob;
          }
          let SerialClob: _SerialClob$$static;
          interface _SerialClob {
            clone(): any;
            equals(obj: any): boolean;
            free(): void;
            getAsciiStream(): java.io.InputStream;
            getCharacterStream(): java.io.Reader;
            getCharacterStream(pos: long, a1: long): java.io.Reader;
            getSubString(pos: long, a1: int): string;
            hashCode(): int;
            _isValid(): void;
            length(): long;
            position(searchStr: string, start: long): long;
            position(searchStr: java.sql.Clob, start: long): long;
            _readObject(s: java.io.ObjectInputStream): void;
            setAsciiStream(pos: long): java.io.OutputStream;
            setCharacterStream(pos: long): java.io.Writer;
            setString(pos: long, a1: string): int;
            setString(pos: long, a1: string, str: int, offset: int): int;
            truncate(length: long): void;
            _writeObject(s: java.io.ObjectOutputStream): void;
            _buf: char[];
            _clob: java.sql.Clob;
            _len: long;
            _origLen: long;
          }
          interface SerialClob extends CombineTypes<[_SerialClob, java.lang.Cloneable, java.lang.Object, java.sql.Clob, java.io.Serializable]> {}
          interface _SerialDatalink$$static extends ClassLike {
            _serialVersionUID: long;
            new(url: java.net.URL): SerialDatalink;
          }
          let SerialDatalink: _SerialDatalink$$static;
          interface _SerialDatalink {
            clone(): any;
            equals(obj: any): boolean;
            getDatalink(): java.net.URL;
            hashCode(): int;
            _baseType: int;
            _baseTypeName: string;
            _url: java.net.URL;
          }
          interface SerialDatalink extends CombineTypes<[_SerialDatalink, java.lang.Cloneable, java.lang.Object, java.io.Serializable]> {}
          interface _SerialException$$static extends ClassLike {
            _serialVersionUID: long;
            new(): SerialException;
            new(msg: string): SerialException;
          }
          let SerialException: _SerialException$$static;
          interface _SerialException {
          }
          interface SerialException extends CombineTypes<[_SerialException, java.sql.SQLException]> {}
          interface _SerialJavaObject$$static extends ClassLike {
            _hasStaticFields(fields: java.lang.reflect.Field[]): boolean;
            _serialVersionUID: long;
            new(obj: any): SerialJavaObject;
          }
          let SerialJavaObject: _SerialJavaObject$$static;
          interface _SerialJavaObject {
            clone(): any;
            equals(o: any): boolean;
            getFields(): java.lang.reflect.Field[];
            getObject(): any;
            hashCode(): int;
            _readObject(s: java.io.ObjectInputStream): void;
            _setWarning(e: RowSetWarning): void;
            _writeObject(s: java.io.ObjectOutputStream): void;
            _chain: java.util.Vector<RowSetWarning>;
            _fields: java.lang.reflect.Field[];
            _obj: any;
          }
          interface SerialJavaObject extends CombineTypes<[_SerialJavaObject, java.lang.Cloneable, java.lang.Object, java.io.Serializable]> {}
          interface _SerialRef$$static extends ClassLike {
            _serialVersionUID: long;
            new(ref: java.sql.Ref): SerialRef;
          }
          let SerialRef: _SerialRef$$static;
          interface _SerialRef {
            clone(): any;
            equals(obj: any): boolean;
            getBaseTypeName(): string;
            getObject(map: java.util.Map<string,java.lang.Class<any>>): any;
            getObject(): any;
            hashCode(): int;
            _readObject(s: java.io.ObjectInputStream): void;
            setObject(obj: any): void;
            _writeObject(s: java.io.ObjectOutputStream): void;
            _baseTypeName: string;
            _object: any;
            _reference: java.sql.Ref;
          }
          interface SerialRef extends CombineTypes<[_SerialRef, java.lang.Cloneable, java.lang.Object, java.sql.Ref, java.io.Serializable]> {}
          interface _SerialStruct$$static extends ClassLike {
            _serialVersionUID: long;
            new(_in: java.sql.Struct, map: java.util.Map<string,java.lang.Class<any>>): SerialStruct;
            new(_in: java.sql.SQLData, map: java.util.Map<string,java.lang.Class<any>>): SerialStruct;
          }
          let SerialStruct: _SerialStruct$$static;
          interface _SerialStruct {
            clone(): any;
            equals(obj: any): boolean;
            getAttributes(): any[];
            getAttributes(map: java.util.Map<string,java.lang.Class<any>>): any[];
            getSQLTypeName(): string;
            hashCode(): int;
            _mapToSerial(map: java.util.Map<string,java.lang.Class<any>>): void;
            _readObject(s: java.io.ObjectInputStream): void;
            _writeObject(s: java.io.ObjectOutputStream): void;
            _SQLTypeName: string;
            _attribs: any[];
          }
          interface SerialStruct extends CombineTypes<[_SerialStruct, java.lang.Cloneable, java.lang.Object, java.sql.Struct, java.io.Serializable]> {}
        }
        module spi {
          interface _ProviderImpl$$static extends ClassLike {
            _new(): ProviderImpl;
          }
          let ProviderImpl: _ProviderImpl$$static;
          interface _ProviderImpl {
            getClassname(): string;
            getDataSourceLock(): int;
            getIndex(): int;
            getProviderGrade(): int;
            getProviderID(): string;
            getRowSetReader(): RowSetReader;
            getRowSetWriter(): RowSetWriter;
            getVendor(): string;
            getVersion(): string;
            setClassname(classname: string): void;
            setDataSourceLock(param: int): void;
            setIndex(i: int): void;
            setVendor(vendor: string): void;
            setVersion(providerVer: string): void;
            supportsUpdatableView(): int;
            _className: string;
            _index: int;
            _vendorName: string;
            _ver: string;
          }
          interface ProviderImpl extends CombineTypes<[_ProviderImpl, javax.sql.rowset.spi.SyncProvider]> {}
          interface _SyncFactory$$static extends ClassLike {
            _enumerateBindings(bindings: javax.naming.NamingEnumeration<any>, properties: java.util.Properties): void;
            getInstance(providerID: string): SyncProvider;
            getLogger(): java.util.logging.Logger;
            _getPropertyNames(append: boolean): string[];
            _getPropertyNames(append: boolean, propertyIndex: string): string[];
            getRegisteredProviders(): java.util.Enumeration<SyncProvider>;
            getSyncFactory(): SyncFactory;
            _initJNDIContext(): void;
            _initMapIfNecessary(): void;
            _parseJNDIContext(): java.util.Properties;
            _parseProperties(p: java.util.Properties): void;
            registerProvider(providerID: string): void;
            setJNDIContext(ctx: javax.naming.Context): void;
            setLogger(logger: java.util.logging.Logger): void;
            setLogger(logger: java.util.logging.Logger, level: java.util.logging.Level): void;
            _showImpl(impl: ProviderImpl): void;
            unregisterProvider(providerID: string): void;
            _ROWSET_PROPERTIES: string;
            readonly ROWSET_SYNC_PROVIDER: string;
            readonly ROWSET_SYNC_PROVIDER_VERSION: string;
            readonly ROWSET_SYNC_VENDOR: string;
            _SET_SYNCFACTORY_PERMISSION: java.sql.SQLPermission;
            _colon: string;
            _debug: boolean;
            _ic: javax.naming.Context;
            _implementations: java.util.Hashtable<string,SyncProvider>;
            _lazyJNDICtxRefresh: boolean;
            _providerImplIndex: int;
            _rsLogger: java.util.logging.Logger;
            _strFileSep: string;
          }
          let SyncFactory: _SyncFactory$$static;
          interface _SyncFactory {
          }
          interface SyncFactory extends CombineTypes<[_SyncFactory, java.lang.Object]> {}
          interface _SyncFactory$SyncFactoryHolder$$static extends ClassLike {
            _factory: SyncFactory;
          }
          let SyncFactory$SyncFactoryHolder: _SyncFactory$SyncFactoryHolder$$static;
          interface _SyncFactory$SyncFactoryHolder {
          }
          interface SyncFactory$SyncFactoryHolder extends CombineTypes<[_SyncFactory$SyncFactoryHolder, java.lang.Object]> {}
          interface _SyncFactoryException$$static extends ClassLike {
            _serialVersionUID: long;
            new(): SyncFactoryException;
            new(msg: string): SyncFactoryException;
          }
          let SyncFactoryException: _SyncFactoryException$$static;
          interface _SyncFactoryException {
          }
          interface SyncFactoryException extends CombineTypes<[_SyncFactoryException, java.sql.SQLException]> {}
          interface _SyncProvider$$static extends ClassLike {
            readonly DATASOURCE_DB_LOCK: int;
            readonly DATASOURCE_NO_LOCK: int;
            readonly DATASOURCE_ROW_LOCK: int;
            readonly DATASOURCE_TABLE_LOCK: int;
            readonly GRADE_CHECK_ALL_AT_COMMIT: int;
            readonly GRADE_CHECK_MODIFIED_AT_COMMIT: int;
            readonly GRADE_LOCK_WHEN_LOADED: int;
            readonly GRADE_LOCK_WHEN_MODIFIED: int;
            readonly GRADE_NONE: int;
            readonly NONUPDATABLE_VIEW_SYNC: int;
            readonly UPDATABLE_VIEW_SYNC: int;
            new(): SyncProvider;
          }
          let SyncProvider: _SyncProvider$$static;
          interface _SyncProvider {
            getDataSourceLock(): int;
            getProviderGrade(): int;
            getProviderID(): string;
            getRowSetReader(): RowSetReader;
            getRowSetWriter(): RowSetWriter;
            getVendor(): string;
            getVersion(): string;
            setDataSourceLock(a0: int): void;
            supportsUpdatableView(): int;
          }
          interface SyncProvider extends CombineTypes<[_SyncProvider, java.lang.Object]> {}
          interface _SyncProviderException$$static extends ClassLike {
            _serialVersionUID: long;
            new(): SyncProviderException;
            new(msg: string): SyncProviderException;
            new(syncResolver: SyncResolver): SyncProviderException;
          }
          let SyncProviderException: _SyncProviderException$$static;
          interface _SyncProviderException {
            getSyncResolver(): SyncResolver;
            setSyncResolver(syncResolver: SyncResolver): void;
            _syncResolver: SyncResolver;
          }
          interface SyncProviderException extends CombineTypes<[_SyncProviderException, java.sql.SQLException]> {}
          interface _SyncResolver$$static extends ClassLike {
            readonly DELETE_ROW_CONFLICT: int;
            readonly INSERT_ROW_CONFLICT: int;
            readonly NO_ROW_CONFLICT: int;
            readonly UPDATE_ROW_CONFLICT: int;
          }
          let SyncResolver: _SyncResolver$$static;
          interface _SyncResolver {
            getConflictValue(a0: int): any;
            getConflictValue(a0: string): any;
            getStatus(): int;
            nextConflict(): boolean;
            previousConflict(): boolean;
            setResolvedValue(a0: int, a1: any): void;
            setResolvedValue(a0: string, a1: any): void;
          }
          interface SyncResolver extends CombineTypes<[_SyncResolver, javax.sql.RowSet, java.lang.Object]> {}
          interface _TransactionalWriter$$static extends ClassLike {
          }
          let TransactionalWriter: _TransactionalWriter$$static;
          interface _TransactionalWriter {
            commit(): void;
            rollback(): void;
            rollback(a0: java.sql.Savepoint): void;
          }
          interface TransactionalWriter extends CombineTypes<[_TransactionalWriter, javax.sql.RowSetWriter, java.lang.Object]> {}
          interface _XmlReader$$static extends ClassLike {
          }
          let XmlReader: _XmlReader$$static;
          interface _XmlReader {
            readXML(a0: WebRowSet, a1: java.io.Reader): void;
(a0: WebRowSet, a1: java.io.Reader): void;
          }
          interface XmlReader extends CombineTypes<[_XmlReader, java.lang.Object, javax.sql.RowSetReader]> {}
          interface _XmlWriter$$static extends ClassLike {
          }
          let XmlWriter: _XmlWriter$$static;
          interface _XmlWriter {
            writeXML(a0: WebRowSet, a1: java.io.Writer): void;
(a0: WebRowSet, a1: java.io.Writer): void;
          }
          interface XmlWriter extends CombineTypes<[_XmlWriter, javax.sql.RowSetWriter, java.lang.Object]> {}
        }
        interface _BaseRowSet$$static extends ClassLike {
          readonly ASCII_STREAM_PARAM: int;
          readonly BINARY_STREAM_PARAM: int;
          readonly UNICODE_STREAM_PARAM: int;
          _serialVersionUID: long;
          new(): BaseRowSet;
        }
        let BaseRowSet: _BaseRowSet$$static;
        interface _BaseRowSet {
          addRowSetListener(listener: RowSetListener): void;
          _checkParamIndex(idx: int): void;
          _checkforRowSetInterface(): void;
          clearParameters(): void;
          getCommand(): string;
          getConcurrency(): int;
          getDataSourceName(): string;
          getEscapeProcessing(): boolean;
          getFetchDirection(): int;
          getFetchSize(): int;
          getMaxFieldSize(): int;
          getMaxRows(): int;
          getParams(): any[];
          getPassword(): string;
          getQueryTimeout(): int;
          getShowDeleted(): boolean;
          getTransactionIsolation(): int;
          getType(): int;
          getTypeMap(): java.util.Map<string,java.lang.Class<any>>;
          getUrl(): string;
          getUsername(): string;
          _initParams(): void;
          isReadOnly(): boolean;
          _notifyCursorMoved(): void;
          _notifyRowChanged(): void;
          _notifyRowSetChanged(): void;
          removeRowSetListener(listener: RowSetListener): void;
          setArray(parameterIndex: int, array: java.sql.Array): void;
          setAsciiStream(parameterIndex: int, x: java.io.InputStream, length: int): void;
          setAsciiStream(parameterIndex: int, x: java.io.InputStream): void;
          setAsciiStream(parameterName: string, x: java.io.InputStream, length: int): void;
          setAsciiStream(parameterName: string, x: java.io.InputStream): void;
          setBigDecimal(parameterIndex: int, x: java.math.BigDecimal): void;
          setBigDecimal(parameterName: string, x: java.math.BigDecimal): void;
          setBinaryStream(parameterIndex: int, x: java.io.InputStream, length: int): void;
          setBinaryStream(parameterIndex: int, x: java.io.InputStream): void;
          setBinaryStream(parameterName: string, x: java.io.InputStream, length: int): void;
          setBinaryStream(parameterName: string, x: java.io.InputStream): void;
          setBlob(parameterIndex: int, x: java.sql.Blob): void;
          setBlob(parameterIndex: int, inputStream: java.io.InputStream, length: long): void;
          setBlob(parameterIndex: int, inputStream: java.io.InputStream): void;
          setBlob(parameterName: string, inputStream: java.io.InputStream, length: long): void;
          setBlob(parameterName: string, x: java.sql.Blob): void;
          setBlob(parameterName: string, inputStream: java.io.InputStream): void;
          setBoolean(parameterIndex: int, x: boolean): void;
          setBoolean(parameterName: string, x: boolean): void;
          setByte(parameterIndex: int, x: byte): void;
          setByte(parameterName: string, x: byte): void;
          setBytes(parameterIndex: int, x: byte[]): void;
          setBytes(parameterName: string, x: byte[]): void;
          setCharacterStream(parameterIndex: int, reader: java.io.Reader, length: int): void;
          setCharacterStream(parameterIndex: int, reader: java.io.Reader): void;
          setCharacterStream(parameterName: string, reader: java.io.Reader, length: int): void;
          setCharacterStream(parameterName: string, reader: java.io.Reader): void;
          setClob(parameterIndex: int, x: java.sql.Clob): void;
          setClob(parameterIndex: int, reader: java.io.Reader, length: long): void;
          setClob(parameterIndex: int, reader: java.io.Reader): void;
          setClob(parameterName: string, reader: java.io.Reader, length: long): void;
          setClob(parameterName: string, x: java.sql.Clob): void;
          setClob(parameterName: string, reader: java.io.Reader): void;
          setCommand(cmd: string): void;
          setConcurrency(concurrency: int): void;
          setDataSourceName(name: string): void;
          setDate(parameterIndex: int, x: java.sql.Date): void;
          setDate(parameterIndex: int, x: java.sql.Date, cal: java.util.Calendar): void;
          setDate(parameterName: string, x: java.sql.Date): void;
          setDate(parameterName: string, x: java.sql.Date, cal: java.util.Calendar): void;
          setDouble(parameterIndex: int, x: double): void;
          setDouble(parameterName: string, x: double): void;
          setEscapeProcessing(enable: boolean): void;
          setFetchDirection(direction: int): void;
          setFetchSize(rows: int): void;
          setFloat(parameterIndex: int, x: float): void;
          setFloat(parameterName: string, x: float): void;
          setInt(parameterIndex: int, x: int): void;
          setInt(parameterName: string, x: int): void;
          setLong(parameterIndex: int, x: long): void;
          setLong(parameterName: string, x: long): void;
          setMaxFieldSize(max: int): void;
          setMaxRows(max: int): void;
          setNCharacterStream(parameterIndex: int, value: java.io.Reader): void;
          setNCharacterStream(parameterIndex: int, value: java.io.Reader, length: long): void;
          setNCharacterStream(parameterName: string, value: java.io.Reader, length: long): void;
          setNCharacterStream(parameterName: string, value: java.io.Reader): void;
          setNClob(parameterName: string, value: java.sql.NClob): void;
          setNClob(parameterName: string, reader: java.io.Reader, length: long): void;
          setNClob(parameterName: string, reader: java.io.Reader): void;
          setNClob(parameterIndex: int, reader: java.io.Reader, length: long): void;
          setNClob(parameterIndex: int, value: java.sql.NClob): void;
          setNClob(parameterIndex: int, reader: java.io.Reader): void;
          setNString(parameterIndex: int, value: string): void;
          setNString(parameterName: string, value: string): void;
          setNull(parameterIndex: int, sqlType: int): void;
          setNull(parameterIndex: int, sqlType: int, typeName: string): void;
          setNull(parameterName: string, sqlType: int): void;
          setNull(parameterName: string, sqlType: int, typeName: string): void;
          setObject(parameterIndex: int, x: any, targetSqlType: int, scale: int): void;
          setObject(parameterIndex: int, x: any, targetSqlType: int): void;
          setObject(parameterIndex: int, x: any): void;
          setObject(parameterName: string, x: any, targetSqlType: int, scale: int): void;
          setObject(parameterName: string, x: any, targetSqlType: int): void;
          setObject(parameterName: string, x: any): void;
          setPassword(pass: string): void;
          setQueryTimeout(seconds: int): void;
          setReadOnly(value: boolean): void;
          setRef(parameterIndex: int, ref: java.sql.Ref): void;
          setRowId(parameterIndex: int, x: java.sql.RowId): void;
          setRowId(parameterName: string, x: java.sql.RowId): void;
          setSQLXML(parameterIndex: int, xmlObject: java.sql.SQLXML): void;
          setSQLXML(parameterName: string, xmlObject: java.sql.SQLXML): void;
          setShort(parameterIndex: int, x: short): void;
          setShort(parameterName: string, x: short): void;
          setShowDeleted(value: boolean): void;
          setString(parameterIndex: int, x: string): void;
          setString(parameterName: string, x: string): void;
          setTime(parameterIndex: int, x: java.sql.Time): void;
          setTime(parameterIndex: int, x: java.sql.Time, cal: java.util.Calendar): void;
          setTime(parameterName: string, x: java.sql.Time): void;
          setTime(parameterName: string, x: java.sql.Time, cal: java.util.Calendar): void;
          setTimestamp(parameterIndex: int, x: java.sql.Timestamp): void;
          setTimestamp(parameterIndex: int, x: java.sql.Timestamp, cal: java.util.Calendar): void;
          setTimestamp(parameterName: string, x: java.sql.Timestamp): void;
          setTimestamp(parameterName: string, x: java.sql.Timestamp, cal: java.util.Calendar): void;
          setTransactionIsolation(level: int): void;
          setType(type: int): void;
          setTypeMap(map: java.util.Map<string,java.lang.Class<any>>): void;
          setURL(parameterIndex: int, x: java.net.URL): void;
          setUnicodeStream(parameterIndex: int, x: java.io.InputStream, length: int): void;
          setUrl(url: string): void;
          setUsername(name: string): void;
          _URL: string;
          _asciiStream: java.io.InputStream;
          _binaryStream: java.io.InputStream;
          _charStream: java.io.Reader;
          _command: string;
          _concurrency: int;
          _dataSource: string;
          _escapeProcessing: boolean;
          _fetchDir: int;
          _fetchSize: int;
          _isolation: int;
          _listeners: java.util.Vector<RowSetListener>;
          _map: java.util.Map<string,java.lang.Class<any>>;
          _maxFieldSize: int;
          _maxRows: int;
          _params: java.util.Hashtable<int,any>;
          _password: string;
          _queryTimeout: int;
          _readOnly: boolean;
          _rowSetType: int;
          _showDeleted: boolean;
          _unicodeStream: java.io.InputStream;
          _username: string;
        }
        interface BaseRowSet extends CombineTypes<[_BaseRowSet, java.lang.Cloneable, java.lang.Object, java.io.Serializable]> {}
        interface _CachedRowSet$$static extends ClassLike {
          readonly COMMIT_ON_ACCEPT_CHANGES: boolean;
        }
        let CachedRowSet: _CachedRowSet$$static;
        interface _CachedRowSet {
          acceptChanges(): void;
          acceptChanges(a0: java.sql.Connection): void;
          columnUpdated(a0: int): boolean;
          columnUpdated(a0: string): boolean;
          commit(): void;
          createCopy(): CachedRowSet;
          createCopyNoConstraints(): CachedRowSet;
          createCopySchema(): CachedRowSet;
          createShared(): RowSet;
          execute(a0: java.sql.Connection): void;
          getKeyColumns(): int[];
          getOriginal(): java.sql.ResultSet;
          getOriginalRow(): java.sql.ResultSet;
          getPageSize(): int;
          getRowSetWarnings(): RowSetWarning;
          getShowDeleted(): boolean;
          getSyncProvider(): rowset.spi.SyncProvider;
          getTableName(): string;
          nextPage(): boolean;
          populate(a0: java.sql.ResultSet): void;
          populate(a0: java.sql.ResultSet, a1: int): void;
          previousPage(): boolean;
          release(): void;
          restoreOriginal(): void;
          rollback(): void;
          rollback(a0: java.sql.Savepoint): void;
          rowSetPopulated(a0: RowSetEvent, a1: int): void;
          setKeyColumns(a0: int[]): void;
          setMetaData(a0: RowSetMetaData): void;
          setOriginalRow(): void;
          setPageSize(a0: int): void;
          setShowDeleted(a0: boolean): void;
          setSyncProvider(a0: string): void;
          setTableName(a0: string): void;
          size(): int;
          toCollection(): java.util.Collection<any>;
          toCollection(a0: int): java.util.Collection<any>;
          toCollection(a0: string): java.util.Collection<any>;
          undoDelete(): void;
          undoInsert(): void;
          undoUpdate(): void;
        }
        interface CachedRowSet extends CombineTypes<[_CachedRowSet, javax.sql.RowSet, javax.sql.rowset.Joinable, java.lang.Object]> {}
        interface _FilteredRowSet$$static extends ClassLike {
        }
        let FilteredRowSet: _FilteredRowSet$$static;
        interface _FilteredRowSet {
          getFilter(): Predicate;
          setFilter(a0: Predicate): void;
        }
        interface FilteredRowSet extends CombineTypes<[_FilteredRowSet, java.lang.Object, javax.sql.rowset.WebRowSet]> {}
        interface _JdbcRowSet$$static extends ClassLike {
        }
        let JdbcRowSet: _JdbcRowSet$$static;
        interface _JdbcRowSet {
          commit(): void;
          getAutoCommit(): boolean;
          getRowSetWarnings(): RowSetWarning;
          getShowDeleted(): boolean;
          rollback(): void;
          rollback(a0: java.sql.Savepoint): void;
          setAutoCommit(a0: boolean): void;
          setShowDeleted(a0: boolean): void;
        }
        interface JdbcRowSet extends CombineTypes<[_JdbcRowSet, javax.sql.RowSet, javax.sql.rowset.Joinable, java.lang.Object]> {}
        interface _JoinRowSet$$static extends ClassLike {
          readonly CROSS_JOIN: int;
          readonly FULL_JOIN: int;
          readonly INNER_JOIN: int;
          readonly LEFT_OUTER_JOIN: int;
          readonly RIGHT_OUTER_JOIN: int;
        }
        let JoinRowSet: _JoinRowSet$$static;
        interface _JoinRowSet {
          addRowSet(a0: Joinable): void;
          addRowSet(a0: RowSet, a1: int): void;
          addRowSet(a0: RowSet, a1: string): void;
          addRowSet(a0: RowSet[], a1: int[]): void;
          addRowSet(a0: RowSet[], a1: string[]): void;
          getJoinType(): int;
          getRowSetNames(): string[];
          getRowSets(): java.util.Collection<any>;
          getWhereClause(): string;
          setJoinType(a0: int): void;
          supportsCrossJoin(): boolean;
          supportsFullJoin(): boolean;
          supportsInnerJoin(): boolean;
          supportsLeftOuterJoin(): boolean;
          supportsRightOuterJoin(): boolean;
          toCachedRowSet(): CachedRowSet;
        }
        interface JoinRowSet extends CombineTypes<[_JoinRowSet, java.lang.Object, javax.sql.rowset.WebRowSet]> {}
        interface _Joinable$$static extends ClassLike {
        }
        let Joinable: _Joinable$$static;
        interface _Joinable {
          getMatchColumnIndexes(): int[];
          getMatchColumnNames(): string[];
          setMatchColumn(a0: int): void;
          setMatchColumn(a0: int[]): void;
          setMatchColumn(a0: string): void;
          setMatchColumn(a0: string[]): void;
          unsetMatchColumn(a0: int): void;
          unsetMatchColumn(a0: int[]): void;
          unsetMatchColumn(a0: string): void;
          unsetMatchColumn(a0: string[]): void;
        }
        interface Joinable extends CombineTypes<[_Joinable, java.lang.Object]> {}
        interface _Predicate$$static extends ClassLike {
        }
        let Predicate: _Predicate$$static;
        interface _Predicate {
          evaluate(a0: RowSet): boolean;
          evaluate(a0: any, a1: int): boolean;
          evaluate(a0: any, a1: string): boolean;
        }
        interface Predicate extends CombineTypes<[_Predicate, java.lang.Object]> {}
        interface _RowSetFactory$$static extends ClassLike {
        }
        let RowSetFactory: _RowSetFactory$$static;
        interface _RowSetFactory {
          createCachedRowSet(): CachedRowSet;
          createFilteredRowSet(): FilteredRowSet;
          createJdbcRowSet(): JdbcRowSet;
          createJoinRowSet(): JoinRowSet;
          createWebRowSet(): WebRowSet;
        }
        interface RowSetFactory extends CombineTypes<[_RowSetFactory, java.lang.Object]> {}
        interface _RowSetMetaDataImpl$$static extends ClassLike {
          _serialVersionUID: long;
          new(): RowSetMetaDataImpl;
        }
        let RowSetMetaDataImpl: _RowSetMetaDataImpl$$static;
        interface _RowSetMetaDataImpl {
          _checkColRange(col: int): void;
          _checkColType(SQLType: int): void;
          getCatalogName(columnIndex: int): string;
          getColumnClassName(columnIndex: int): string;
          getColumnCount(): int;
          getColumnDisplaySize(columnIndex: int): int;
          getColumnLabel(columnIndex: int): string;
          getColumnName(columnIndex: int): string;
          getColumnType(columnIndex: int): int;
          getColumnTypeName(columnIndex: int): string;
          getPrecision(columnIndex: int): int;
          getScale(columnIndex: int): int;
          getSchemaName(columnIndex: int): string;
          getTableName(columnIndex: int): string;
          isAutoIncrement(columnIndex: int): boolean;
          isCaseSensitive(columnIndex: int): boolean;
          isCurrency(columnIndex: int): boolean;
          isDefinitelyWritable(columnIndex: int): boolean;
          isNullable(columnIndex: int): int;
          isReadOnly(columnIndex: int): boolean;
          isSearchable(columnIndex: int): boolean;
          isSigned(columnIndex: int): boolean;
          isWrapperFor(interfaces: java.lang.Class<any>): boolean;
          isWritable(columnIndex: int): boolean;
          setAutoIncrement(columnIndex: int, property: boolean): void;
          setCaseSensitive(columnIndex: int, property: boolean): void;
          setCatalogName(columnIndex: int, catalogName: string): void;
          setColumnCount(columnCount: int): void;
          setColumnDisplaySize(columnIndex: int, size: int): void;
          setColumnLabel(columnIndex: int, label: string): void;
          setColumnName(columnIndex: int, columnName: string): void;
          setColumnType(columnIndex: int, SQLType: int): void;
          setColumnTypeName(columnIndex: int, typeName: string): void;
          setCurrency(columnIndex: int, property: boolean): void;
          setNullable(columnIndex: int, property: int): void;
          setPrecision(columnIndex: int, precision: int): void;
          setScale(columnIndex: int, scale: int): void;
          setSchemaName(columnIndex: int, schemaName: string): void;
          setSearchable(columnIndex: int, property: boolean): void;
          setSigned(columnIndex: int, property: boolean): void;
          setTableName(columnIndex: int, tableName: string): void;
          unwrap<T>(iface: java.lang.Class<T>): T;
          _colCount: int;
          _colInfo: RowSetMetaDataImpl$ColInfo[];
        }
        interface RowSetMetaDataImpl extends CombineTypes<[_RowSetMetaDataImpl, javax.sql.RowSetMetaData, java.lang.Object, java.io.Serializable]> {}
        interface _RowSetMetaDataImpl$ColInfo$$static extends ClassLike {
          _serialVersionUID: long;
        }
        let RowSetMetaDataImpl$ColInfo: _RowSetMetaDataImpl$ColInfo$$static;
        interface _RowSetMetaDataImpl$ColInfo {
          autoIncrement: boolean;
          caseSensitive: boolean;
          catName: string;
          colPrecision: int;
          colScale: int;
          colType: int;
          colTypeName: string;
          columnDisplaySize: int;
          columnLabel: string;
          columnName: string;
          currency: boolean;
          nullable: int;
          readOnly: boolean;
          schemaName: string;
          searchable: boolean;
          signed: boolean;
          tableName: string;
          _this$0: RowSetMetaDataImpl;
          writable: boolean;
        }
        interface RowSetMetaDataImpl$ColInfo extends CombineTypes<[_RowSetMetaDataImpl$ColInfo, java.lang.Object, java.io.Serializable]> {}
        interface _RowSetProvider$$static extends ClassLike {
          _defaultRowSetFactory(): RowSetFactory;
          _getContextClassLoader(): java.lang.ClassLoader;
          _getFactoryClass(factoryClassName: string, cl: java.lang.ClassLoader, doFallback: boolean): java.lang.Class<any>;
          _getSystemProperty(propName: string): string;
          _loadViaServiceLoader(): RowSetFactory;
          newFactory(): RowSetFactory;
          newFactory(factoryClassName: string, cl: java.lang.ClassLoader): RowSetFactory;
          _trace(msg: string): void;
          _ROWSET_DEBUG_PROPERTY: string;
          _ROWSET_FACTORY_IMPL: string;
          _ROWSET_FACTORY_NAME: string;
          _debug: boolean;
          _new(): RowSetProvider;
        }
        let RowSetProvider: _RowSetProvider$$static;
        interface _RowSetProvider {
        }
        interface RowSetProvider extends CombineTypes<[_RowSetProvider, java.lang.Object]> {}
        interface _RowSetWarning$$static extends ClassLike {
          _serialVersionUID: long;
          new(reason: string): RowSetWarning;
          new(): RowSetWarning;
          new(reason: string, SQLState: string): RowSetWarning;
          new(reason: string, SQLState: string, vendorCode: int): RowSetWarning;
        }
        let RowSetWarning: _RowSetWarning$$static;
        interface _RowSetWarning {
          getNextWarning(): RowSetWarning;
          setNextWarning(warning: RowSetWarning): void;
        }
        interface RowSetWarning extends CombineTypes<[_RowSetWarning, java.sql.SQLException]> {}
        interface _WebRowSet$$static extends ClassLike {
          readonly PUBLIC_XML_SCHEMA: string;
          readonly SCHEMA_SYSTEM_ID: string;
        }
        let WebRowSet: _WebRowSet$$static;
        interface _WebRowSet {
          readXml(a0: java.io.Reader): void;
          readXml(a0: java.io.InputStream): void;
          writeXml(a0: java.sql.ResultSet, a1: java.io.Writer): void;
          writeXml(a0: java.sql.ResultSet, a1: java.io.OutputStream): void;
          writeXml(a0: java.io.Writer): void;
          writeXml(a0: java.io.OutputStream): void;
        }
        interface WebRowSet extends CombineTypes<[_WebRowSet, javax.sql.rowset.CachedRowSet, java.lang.Object]> {}
      }
    }
  }
}
