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
    module sql {
      interface _Array$$static extends ClassLike {
      }
      let Array: _Array$$static;
      interface _Array {
        free(): void;
        getArray(): any;
        getArray(a0: java.util.Map<string,java.lang.Class<any>>): any;
        getArray(a0: long, a1: int): any;
        getArray(a0: long, a1: int, a2: java.util.Map<string,java.lang.Class<any>>): any;
        getBaseType(): int;
        getBaseTypeName(): string;
        getResultSet(): ResultSet;
        getResultSet(a0: java.util.Map<string,java.lang.Class<any>>): ResultSet;
        getResultSet(a0: long, a1: int): ResultSet;
        getResultSet(a0: long, a1: int, a2: java.util.Map<string,java.lang.Class<any>>): ResultSet;
      }
      interface Array extends CombineTypes<[_Array, java.lang.Object]> {}
      interface _BatchUpdateException$$static extends ClassLike {
        _copyUpdateCount(uc: int[]): long[];
        _copyUpdateCount(uc: long[]): int[];
        _serialVersionUID: long;
        new(reason: string, SQLState: string, vendorCode: int, updateCounts: int[]): BatchUpdateException;
        new(reason: string, SQLState: string, updateCounts: int[]): BatchUpdateException;
        new(reason: string, updateCounts: int[]): BatchUpdateException;
        new(updateCounts: int[]): BatchUpdateException;
        new(): BatchUpdateException;
        new(cause: java.lang.Throwable): BatchUpdateException;
        new(updateCounts: int[], cause: java.lang.Throwable): BatchUpdateException;
        new(reason: string, updateCounts: int[], cause: java.lang.Throwable): BatchUpdateException;
        new(reason: string, SQLState: string, updateCounts: int[], cause: java.lang.Throwable): BatchUpdateException;
        new(reason: string, SQLState: string, vendorCode: int, updateCounts: int[], cause: java.lang.Throwable): BatchUpdateException;
        new(reason: string, SQLState: string, vendorCode: int, updateCounts: long[], cause: java.lang.Throwable): BatchUpdateException;
      }
      let BatchUpdateException: _BatchUpdateException$$static;
      interface _BatchUpdateException {
        getLargeUpdateCounts(): long[];
        getUpdateCounts(): int[];
        _readObject(s: java.io.ObjectInputStream): void;
        _writeObject(s: java.io.ObjectOutputStream): void;
        _longUpdateCounts: long[];
        _updateCounts: int[];
      }
      interface BatchUpdateException extends CombineTypes<[_BatchUpdateException, java.sql.SQLException]> {}
      interface _Blob$$static extends ClassLike {
      }
      let Blob: _Blob$$static;
      interface _Blob {
        free(): void;
        getBinaryStream(): java.io.InputStream;
        getBinaryStream(a0: long, a1: long): java.io.InputStream;
        getBytes(a0: long, a1: int): byte[];
        length(): long;
        position(a0: byte[], a1: long): long;
        position(a0: Blob, a1: long): long;
        setBinaryStream(a0: long): java.io.OutputStream;
        setBytes(a0: long, a1: byte[]): int;
        setBytes(a0: long, a1: byte[], a2: int, a3: int): int;
        truncate(a0: long): void;
      }
      interface Blob extends CombineTypes<[_Blob, java.lang.Object]> {}
      interface _CallableStatement$$static extends ClassLike {
      }
      let CallableStatement: _CallableStatement$$static;
      interface _CallableStatement {
        getArray(a0: int): Array;
        getArray(a0: string): Array;
        getBigDecimal(a0: int, a1: int): java.math.BigDecimal;
        getBigDecimal(a0: int): java.math.BigDecimal;
        getBigDecimal(a0: string): java.math.BigDecimal;
        getBlob(a0: int): Blob;
        getBlob(a0: string): Blob;
        getBoolean(a0: int): boolean;
        getBoolean(a0: string): boolean;
        getByte(a0: int): byte;
        getByte(a0: string): byte;
        getBytes(a0: int): byte[];
        getBytes(a0: string): byte[];
        getCharacterStream(a0: int): java.io.Reader;
        getCharacterStream(a0: string): java.io.Reader;
        getClob(a0: int): Clob;
        getClob(a0: string): Clob;
        getDate(a0: int): Date;
        getDate(a0: int, a1: java.util.Calendar): Date;
        getDate(a0: string): Date;
        getDate(a0: string, a1: java.util.Calendar): Date;
        getDouble(a0: int): double;
        getDouble(a0: string): double;
        getFloat(a0: int): float;
        getFloat(a0: string): float;
        getInt(a0: int): int;
        getInt(a0: string): int;
        getLong(a0: int): long;
        getLong(a0: string): long;
        getNCharacterStream(a0: int): java.io.Reader;
        getNCharacterStream(a0: string): java.io.Reader;
        getNClob(a0: int): NClob;
        getNClob(a0: string): NClob;
        getNString(a0: int): string;
        getNString(a0: string): string;
        getObject(a0: int): any;
        getObject(a0: int, a1: java.util.Map<string,java.lang.Class<any>>): any;
        getObject(a0: string): any;
        getObject(a0: string, a1: java.util.Map<string,java.lang.Class<any>>): any;
        getObject<T>(a0: int, a1: java.lang.Class<T>): T;
        getObject<T>(a0: string, a1: java.lang.Class<T>): T;
        getRef(a0: int): Ref;
        getRef(a0: string): Ref;
        getRowId(a0: int): RowId;
        getRowId(a0: string): RowId;
        getSQLXML(a0: int): SQLXML;
        getSQLXML(a0: string): SQLXML;
        getShort(a0: int): short;
        getShort(a0: string): short;
        getString(a0: int): string;
        getString(a0: string): string;
        getTime(a0: int): Time;
        getTime(a0: int, a1: java.util.Calendar): Time;
        getTime(a0: string): Time;
        getTime(a0: string, a1: java.util.Calendar): Time;
        getTimestamp(a0: int): Timestamp;
        getTimestamp(a0: int, a1: java.util.Calendar): Timestamp;
        getTimestamp(a0: string): Timestamp;
        getTimestamp(a0: string, a1: java.util.Calendar): Timestamp;
        getURL(a0: int): java.net.URL;
        getURL(a0: string): java.net.URL;
        registerOutParameter(a0: int, a1: int): void;
        registerOutParameter(a0: int, a1: int, a2: int): void;
        registerOutParameter(a0: int, a1: int, a2: string): void;
        registerOutParameter(a0: string, a1: int): void;
        registerOutParameter(a0: string, a1: int, a2: int): void;
        registerOutParameter(a0: string, a1: int, a2: string): void;
        registerOutParameter(parameterIndex: int, sqlType: SQLType): void;
        registerOutParameter(parameterIndex: int, sqlType: SQLType, scale: int): void;
        registerOutParameter(parameterIndex: int, sqlType: SQLType, typeName: string): void;
        registerOutParameter(parameterName: string, sqlType: SQLType): void;
        registerOutParameter(parameterName: string, sqlType: SQLType, scale: int): void;
        registerOutParameter(parameterName: string, sqlType: SQLType, typeName: string): void;
        setAsciiStream(a0: string, a1: java.io.InputStream, a2: int): void;
        setAsciiStream(a0: string, a1: java.io.InputStream, a2: long): void;
        setAsciiStream(a0: string, a1: java.io.InputStream): void;
        setBigDecimal(a0: string, a1: java.math.BigDecimal): void;
        setBinaryStream(a0: string, a1: java.io.InputStream, a2: int): void;
        setBinaryStream(a0: string, a1: java.io.InputStream, a2: long): void;
        setBinaryStream(a0: string, a1: java.io.InputStream): void;
        setBlob(a0: string, a1: java.io.InputStream, a2: long): void;
        setBlob(a0: string, a1: Blob): void;
        setBlob(a0: string, a1: java.io.InputStream): void;
        setBoolean(a0: string, a1: boolean): void;
        setByte(a0: string, a1: byte): void;
        setBytes(a0: string, a1: byte[]): void;
        setCharacterStream(a0: string, a1: java.io.Reader, a2: int): void;
        setCharacterStream(a0: string, a1: java.io.Reader, a2: long): void;
        setCharacterStream(a0: string, a1: java.io.Reader): void;
        setClob(a0: string, a1: java.io.Reader, a2: long): void;
        setClob(a0: string, a1: Clob): void;
        setClob(a0: string, a1: java.io.Reader): void;
        setDate(a0: string, a1: Date): void;
        setDate(a0: string, a1: Date, a2: java.util.Calendar): void;
        setDouble(a0: string, a1: double): void;
        setFloat(a0: string, a1: float): void;
        setInt(a0: string, a1: int): void;
        setLong(a0: string, a1: long): void;
        setNCharacterStream(a0: string, a1: java.io.Reader, a2: long): void;
        setNCharacterStream(a0: string, a1: java.io.Reader): void;
        setNClob(a0: string, a1: NClob): void;
        setNClob(a0: string, a1: java.io.Reader, a2: long): void;
        setNClob(a0: string, a1: java.io.Reader): void;
        setNString(a0: string, a1: string): void;
        setNull(a0: string, a1: int): void;
        setNull(a0: string, a1: int, a2: string): void;
        setObject(a0: string, a1: any, a2: int, a3: int): void;
        setObject(a0: string, a1: any, a2: int): void;
        setObject(a0: string, a1: any): void;
        setObject(parameterName: string, x: any, targetSqlType: SQLType, scaleOrLength: int): void;
        setObject(parameterName: string, x: any, targetSqlType: SQLType): void;
        setRowId(a0: string, a1: RowId): void;
        setSQLXML(a0: string, a1: SQLXML): void;
        setShort(a0: string, a1: short): void;
        setString(a0: string, a1: string): void;
        setTime(a0: string, a1: Time): void;
        setTime(a0: string, a1: Time, a2: java.util.Calendar): void;
        setTimestamp(a0: string, a1: Timestamp): void;
        setTimestamp(a0: string, a1: Timestamp, a2: java.util.Calendar): void;
        setURL(a0: string, a1: java.net.URL): void;
        wasNull(): boolean;
      }
      interface CallableStatement extends CombineTypes<[_CallableStatement, java.lang.Object, java.sql.PreparedStatement]> {}
      interface _ClientInfoStatus$$static extends ClassLike {
        valueOf(name: string): ClientInfoStatus;
        values(): ClientInfoStatus[];
        readonly REASON_UNKNOWN: ClientInfoStatus;
        readonly REASON_UNKNOWN_PROPERTY: ClientInfoStatus;
        readonly REASON_VALUE_INVALID: ClientInfoStatus;
        readonly REASON_VALUE_TRUNCATED: ClientInfoStatus;
      }
      let ClientInfoStatus: _ClientInfoStatus$$static;
      interface _ClientInfoStatus {
      }
      interface ClientInfoStatus extends CombineTypes<[_ClientInfoStatus]> {}
      interface _Clob$$static extends ClassLike {
      }
      let Clob: _Clob$$static;
      interface _Clob {
        free(): void;
        getAsciiStream(): java.io.InputStream;
        getCharacterStream(): java.io.Reader;
        getCharacterStream(a0: long, a1: long): java.io.Reader;
        getSubString(a0: long, a1: int): string;
        length(): long;
        position(a0: string, a1: long): long;
        position(a0: Clob, a1: long): long;
        setAsciiStream(a0: long): java.io.OutputStream;
        setCharacterStream(a0: long): java.io.Writer;
        setString(a0: long, a1: string): int;
        setString(a0: long, a1: string, a2: int, a3: int): int;
        truncate(a0: long): void;
      }
      interface Clob extends CombineTypes<[_Clob, java.lang.Object]> {}
      interface _Connection$$static extends ClassLike {
        readonly TRANSACTION_NONE: int;
        readonly TRANSACTION_READ_COMMITTED: int;
        readonly TRANSACTION_READ_UNCOMMITTED: int;
        readonly TRANSACTION_REPEATABLE_READ: int;
        readonly TRANSACTION_SERIALIZABLE: int;
      }
      let Connection: _Connection$$static;
      interface _Connection {
        abort(a0: java.util.concurrent.Executor): void;
        beginRequest(): void;
        clearWarnings(): void;
        close(): void;
        commit(): void;
        createArrayOf(a0: string, a1: any[]): Array;
        createBlob(): Blob;
        createClob(): Clob;
        createNClob(): NClob;
        createSQLXML(): SQLXML;
        createStatement(): Statement;
        createStatement(a0: int, a1: int): Statement;
        createStatement(a0: int, a1: int, a2: int): Statement;
        createStruct(a0: string, a1: any[]): Struct;
        endRequest(): void;
        getAutoCommit(): boolean;
        getCatalog(): string;
        getClientInfo(a0: string): string;
        getClientInfo(): java.util.Properties;
        getHoldability(): int;
        getMetaData(): DatabaseMetaData;
        getNetworkTimeout(): int;
        getSchema(): string;
        getTransactionIsolation(): int;
        getTypeMap(): java.util.Map<string,java.lang.Class<any>>;
        getWarnings(): SQLWarning;
        isClosed(): boolean;
        isReadOnly(): boolean;
        isValid(a0: int): boolean;
        nativeSQL(a0: string): string;
        prepareCall(a0: string): CallableStatement;
        prepareCall(a0: string, a1: int, a2: int): CallableStatement;
        prepareCall(a0: string, a1: int, a2: int, a3: int): CallableStatement;
        prepareStatement(a0: string): PreparedStatement;
        prepareStatement(a0: string, a1: int, a2: int): PreparedStatement;
        prepareStatement(a0: string, a1: int, a2: int, a3: int): PreparedStatement;
        prepareStatement(a0: string, a1: int): PreparedStatement;
        prepareStatement(a0: string, a1: int[]): PreparedStatement;
        prepareStatement(a0: string, a1: string[]): PreparedStatement;
        releaseSavepoint(a0: Savepoint): void;
        rollback(): void;
        rollback(a0: Savepoint): void;
        setAutoCommit(a0: boolean): void;
        setCatalog(a0: string): void;
        setClientInfo(a0: string, a1: string): void;
        setClientInfo(a0: java.util.Properties): void;
        setHoldability(a0: int): void;
        setNetworkTimeout(a0: java.util.concurrent.Executor, a1: int): void;
        setReadOnly(a0: boolean): void;
        setSavepoint(): Savepoint;
        setSavepoint(a0: string): Savepoint;
        setSchema(a0: string): void;
        setShardingKey(shardingKey: ShardingKey, superShardingKey: ShardingKey): void;
        setShardingKey(shardingKey: ShardingKey): void;
        setShardingKeyIfValid(shardingKey: ShardingKey, superShardingKey: ShardingKey, timeout: int): boolean;
        setShardingKeyIfValid(shardingKey: ShardingKey, timeout: int): boolean;
        setTransactionIsolation(a0: int): void;
        setTypeMap(a0: java.util.Map<string,java.lang.Class<any>>): void;
      }
      interface Connection extends CombineTypes<[_Connection, java.sql.Wrapper, java.lang.Object, java.lang.AutoCloseable]> {}
      interface _ConnectionBuilder$$static extends ClassLike {
      }
      let ConnectionBuilder: _ConnectionBuilder$$static;
      interface _ConnectionBuilder {
        build(): Connection;
        password(a0: string): ConnectionBuilder;
        shardingKey(a0: ShardingKey): ConnectionBuilder;
        superShardingKey(a0: ShardingKey): ConnectionBuilder;
        user(a0: string): ConnectionBuilder;
      }
      interface ConnectionBuilder extends CombineTypes<[_ConnectionBuilder, java.lang.Object]> {}
      interface _DataTruncation$$static extends ClassLike {
        _serialVersionUID: long;
        new(index: int, parameter: boolean, read: boolean, dataSize: int, transferSize: int): DataTruncation;
        new(index: int, parameter: boolean, read: boolean, dataSize: int, transferSize: int, cause: java.lang.Throwable): DataTruncation;
      }
      let DataTruncation: _DataTruncation$$static;
      interface _DataTruncation {
        getDataSize(): int;
        getIndex(): int;
        getParameter(): boolean;
        getRead(): boolean;
        getTransferSize(): int;
        _dataSize: int;
        _index: int;
        _parameter: boolean;
        _read: boolean;
        _transferSize: int;
      }
      interface DataTruncation extends CombineTypes<[_DataTruncation, java.sql.SQLWarning]> {}
      interface _DatabaseMetaData$$static extends ClassLike {
        readonly attributeNoNulls: short;
        readonly attributeNullable: short;
        readonly attributeNullableUnknown: short;
        readonly bestRowNotPseudo: int;
        readonly bestRowPseudo: int;
        readonly bestRowSession: int;
        readonly bestRowTemporary: int;
        readonly bestRowTransaction: int;
        readonly bestRowUnknown: int;
        readonly columnNoNulls: int;
        readonly columnNullable: int;
        readonly columnNullableUnknown: int;
        readonly functionColumnIn: int;
        readonly functionColumnInOut: int;
        readonly functionColumnOut: int;
        readonly functionColumnResult: int;
        readonly functionColumnUnknown: int;
        readonly functionNoNulls: int;
        readonly functionNoTable: int;
        readonly functionNullable: int;
        readonly functionNullableUnknown: int;
        readonly functionResultUnknown: int;
        readonly functionReturn: int;
        readonly functionReturnsTable: int;
        readonly importedKeyCascade: int;
        readonly importedKeyInitiallyDeferred: int;
        readonly importedKeyInitiallyImmediate: int;
        readonly importedKeyNoAction: int;
        readonly importedKeyNotDeferrable: int;
        readonly importedKeyRestrict: int;
        readonly importedKeySetDefault: int;
        readonly importedKeySetNull: int;
        readonly procedureColumnIn: int;
        readonly procedureColumnInOut: int;
        readonly procedureColumnOut: int;
        readonly procedureColumnResult: int;
        readonly procedureColumnReturn: int;
        readonly procedureColumnUnknown: int;
        readonly procedureNoNulls: int;
        readonly procedureNoResult: int;
        readonly procedureNullable: int;
        readonly procedureNullableUnknown: int;
        readonly procedureResultUnknown: int;
        readonly procedureReturnsResult: int;
        readonly sqlStateSQL: int;
        readonly sqlStateSQL99: int;
        readonly sqlStateXOpen: int;
        readonly tableIndexClustered: short;
        readonly tableIndexHashed: short;
        readonly tableIndexOther: short;
        readonly tableIndexStatistic: short;
        readonly typeNoNulls: int;
        readonly typeNullable: int;
        readonly typeNullableUnknown: int;
        readonly typePredBasic: int;
        readonly typePredChar: int;
        readonly typePredNone: int;
        readonly typeSearchable: int;
        readonly versionColumnNotPseudo: int;
        readonly versionColumnPseudo: int;
        readonly versionColumnUnknown: int;
      }
      let DatabaseMetaData: _DatabaseMetaData$$static;
      interface _DatabaseMetaData {
        allProceduresAreCallable(): boolean;
        allTablesAreSelectable(): boolean;
        autoCommitFailureClosesAllResultSets(): boolean;
        dataDefinitionCausesTransactionCommit(): boolean;
        dataDefinitionIgnoredInTransactions(): boolean;
        deletesAreDetected(a0: int): boolean;
        doesMaxRowSizeIncludeBlobs(): boolean;
        generatedKeyAlwaysReturned(): boolean;
        getAttributes(a0: string, a1: string, a2: string, a3: string): ResultSet;
        getBestRowIdentifier(a0: string, a1: string, a2: string, a3: int, a4: boolean): ResultSet;
        getCatalogSeparator(): string;
        getCatalogTerm(): string;
        getCatalogs(): ResultSet;
        getClientInfoProperties(): ResultSet;
        getColumnPrivileges(a0: string, a1: string, a2: string, a3: string): ResultSet;
        getColumns(a0: string, a1: string, a2: string, a3: string): ResultSet;
        getConnection(): Connection;
        getCrossReference(a0: string, a1: string, a2: string, a3: string, a4: string, a5: string): ResultSet;
        getDatabaseMajorVersion(): int;
        getDatabaseMinorVersion(): int;
        getDatabaseProductName(): string;
        getDatabaseProductVersion(): string;
        getDefaultTransactionIsolation(): int;
        getDriverMajorVersion(): int;
        getDriverMinorVersion(): int;
        getDriverName(): string;
        getDriverVersion(): string;
        getExportedKeys(a0: string, a1: string, a2: string): ResultSet;
        getExtraNameCharacters(): string;
        getFunctionColumns(a0: string, a1: string, a2: string, a3: string): ResultSet;
        getFunctions(a0: string, a1: string, a2: string): ResultSet;
        getIdentifierQuoteString(): string;
        getImportedKeys(a0: string, a1: string, a2: string): ResultSet;
        getIndexInfo(a0: string, a1: string, a2: string, a3: boolean, a4: boolean): ResultSet;
        getJDBCMajorVersion(): int;
        getJDBCMinorVersion(): int;
        getMaxBinaryLiteralLength(): int;
        getMaxCatalogNameLength(): int;
        getMaxCharLiteralLength(): int;
        getMaxColumnNameLength(): int;
        getMaxColumnsInGroupBy(): int;
        getMaxColumnsInIndex(): int;
        getMaxColumnsInOrderBy(): int;
        getMaxColumnsInSelect(): int;
        getMaxColumnsInTable(): int;
        getMaxConnections(): int;
        getMaxCursorNameLength(): int;
        getMaxIndexLength(): int;
        getMaxLogicalLobSize(): long;
        getMaxProcedureNameLength(): int;
        getMaxRowSize(): int;
        getMaxSchemaNameLength(): int;
        getMaxStatementLength(): int;
        getMaxStatements(): int;
        getMaxTableNameLength(): int;
        getMaxTablesInSelect(): int;
        getMaxUserNameLength(): int;
        getNumericFunctions(): string;
        getPrimaryKeys(a0: string, a1: string, a2: string): ResultSet;
        getProcedureColumns(a0: string, a1: string, a2: string, a3: string): ResultSet;
        getProcedureTerm(): string;
        getProcedures(a0: string, a1: string, a2: string): ResultSet;
        getPseudoColumns(a0: string, a1: string, a2: string, a3: string): ResultSet;
        getResultSetHoldability(): int;
        getRowIdLifetime(): RowIdLifetime;
        getSQLKeywords(): string;
        getSQLStateType(): int;
        getSchemaTerm(): string;
        getSchemas(): ResultSet;
        getSchemas(a0: string, a1: string): ResultSet;
        getSearchStringEscape(): string;
        getStringFunctions(): string;
        getSuperTables(a0: string, a1: string, a2: string): ResultSet;
        getSuperTypes(a0: string, a1: string, a2: string): ResultSet;
        getSystemFunctions(): string;
        getTablePrivileges(a0: string, a1: string, a2: string): ResultSet;
        getTableTypes(): ResultSet;
        getTables(a0: string, a1: string, a2: string, a3: string[]): ResultSet;
        getTimeDateFunctions(): string;
        getTypeInfo(): ResultSet;
        getUDTs(a0: string, a1: string, a2: string, a3: int[]): ResultSet;
        getURL(): string;
        getUserName(): string;
        getVersionColumns(a0: string, a1: string, a2: string): ResultSet;
        insertsAreDetected(a0: int): boolean;
        isCatalogAtStart(): boolean;
        isReadOnly(): boolean;
        locatorsUpdateCopy(): boolean;
        nullPlusNonNullIsNull(): boolean;
        nullsAreSortedAtEnd(): boolean;
        nullsAreSortedAtStart(): boolean;
        nullsAreSortedHigh(): boolean;
        nullsAreSortedLow(): boolean;
        othersDeletesAreVisible(a0: int): boolean;
        othersInsertsAreVisible(a0: int): boolean;
        othersUpdatesAreVisible(a0: int): boolean;
        ownDeletesAreVisible(a0: int): boolean;
        ownInsertsAreVisible(a0: int): boolean;
        ownUpdatesAreVisible(a0: int): boolean;
        storesLowerCaseIdentifiers(): boolean;
        storesLowerCaseQuotedIdentifiers(): boolean;
        storesMixedCaseIdentifiers(): boolean;
        storesMixedCaseQuotedIdentifiers(): boolean;
        storesUpperCaseIdentifiers(): boolean;
        storesUpperCaseQuotedIdentifiers(): boolean;
        supportsANSI92EntryLevelSQL(): boolean;
        supportsANSI92FullSQL(): boolean;
        supportsANSI92IntermediateSQL(): boolean;
        supportsAlterTableWithAddColumn(): boolean;
        supportsAlterTableWithDropColumn(): boolean;
        supportsBatchUpdates(): boolean;
        supportsCatalogsInDataManipulation(): boolean;
        supportsCatalogsInIndexDefinitions(): boolean;
        supportsCatalogsInPrivilegeDefinitions(): boolean;
        supportsCatalogsInProcedureCalls(): boolean;
        supportsCatalogsInTableDefinitions(): boolean;
        supportsColumnAliasing(): boolean;
        supportsConvert(): boolean;
        supportsConvert(a0: int, a1: int): boolean;
        supportsCoreSQLGrammar(): boolean;
        supportsCorrelatedSubqueries(): boolean;
        supportsDataDefinitionAndDataManipulationTransactions(): boolean;
        supportsDataManipulationTransactionsOnly(): boolean;
        supportsDifferentTableCorrelationNames(): boolean;
        supportsExpressionsInOrderBy(): boolean;
        supportsExtendedSQLGrammar(): boolean;
        supportsFullOuterJoins(): boolean;
        supportsGetGeneratedKeys(): boolean;
        supportsGroupBy(): boolean;
        supportsGroupByBeyondSelect(): boolean;
        supportsGroupByUnrelated(): boolean;
        supportsIntegrityEnhancementFacility(): boolean;
        supportsLikeEscapeClause(): boolean;
        supportsLimitedOuterJoins(): boolean;
        supportsMinimumSQLGrammar(): boolean;
        supportsMixedCaseIdentifiers(): boolean;
        supportsMixedCaseQuotedIdentifiers(): boolean;
        supportsMultipleOpenResults(): boolean;
        supportsMultipleResultSets(): boolean;
        supportsMultipleTransactions(): boolean;
        supportsNamedParameters(): boolean;
        supportsNonNullableColumns(): boolean;
        supportsOpenCursorsAcrossCommit(): boolean;
        supportsOpenCursorsAcrossRollback(): boolean;
        supportsOpenStatementsAcrossCommit(): boolean;
        supportsOpenStatementsAcrossRollback(): boolean;
        supportsOrderByUnrelated(): boolean;
        supportsOuterJoins(): boolean;
        supportsPositionedDelete(): boolean;
        supportsPositionedUpdate(): boolean;
        supportsRefCursors(): boolean;
        supportsResultSetConcurrency(a0: int, a1: int): boolean;
        supportsResultSetHoldability(a0: int): boolean;
        supportsResultSetType(a0: int): boolean;
        supportsSavepoints(): boolean;
        supportsSchemasInDataManipulation(): boolean;
        supportsSchemasInIndexDefinitions(): boolean;
        supportsSchemasInPrivilegeDefinitions(): boolean;
        supportsSchemasInProcedureCalls(): boolean;
        supportsSchemasInTableDefinitions(): boolean;
        supportsSelectForUpdate(): boolean;
        supportsSharding(): boolean;
        supportsStatementPooling(): boolean;
        supportsStoredFunctionsUsingCallSyntax(): boolean;
        supportsStoredProcedures(): boolean;
        supportsSubqueriesInComparisons(): boolean;
        supportsSubqueriesInExists(): boolean;
        supportsSubqueriesInIns(): boolean;
        supportsSubqueriesInQuantifieds(): boolean;
        supportsTableCorrelationNames(): boolean;
        supportsTransactionIsolationLevel(a0: int): boolean;
        supportsTransactions(): boolean;
        supportsUnion(): boolean;
        supportsUnionAll(): boolean;
        updatesAreDetected(a0: int): boolean;
        usesLocalFilePerTable(): boolean;
        usesLocalFiles(): boolean;
      }
      interface DatabaseMetaData extends CombineTypes<[_DatabaseMetaData, java.sql.Wrapper, java.lang.Object]> {}
      interface _Date$$static extends ClassLike {
        _formatDecimalInt(val: int, buf: char[], offset: int, len: int): void;
        valueOf(s: string): Date;
        valueOf(date: java.time.LocalDate): Date;
        _serialVersionUID: long;
        new(year: int, month: int, day: int): Date;
        new(date: long): Date;
      }
      let Date: _Date$$static;
      interface _Date {
        getHours(): int;
        getMinutes(): int;
        getSeconds(): int;
        setHours(i: int): void;
        setMinutes(i: int): void;
        setSeconds(i: int): void;
        setTime(date: long): void;
        toInstant(): java.time.Instant;
        toLocalDate(): java.time.LocalDate;
        toString(): string;
      }
      interface Date extends CombineTypes<[_Date, java.util.Date]> {}
      interface _Driver$$static extends ClassLike {
      }
      let Driver: _Driver$$static;
      interface _Driver {
        acceptsURL(a0: string): boolean;
        connect(a0: string, a1: java.util.Properties): Connection;
        getMajorVersion(): int;
        getMinorVersion(): int;
        getParentLogger(): java.util.logging.Logger;
        getPropertyInfo(a0: string, a1: java.util.Properties): DriverPropertyInfo[];
        jdbcCompliant(): boolean;
      }
      interface Driver extends CombineTypes<[_Driver, java.lang.Object]> {}
      interface _DriverAction$$static extends ClassLike {
      }
      let DriverAction: _DriverAction$$static;
      interface _DriverAction {
        deregister(): void;
(): void;
      }
      interface DriverAction extends CombineTypes<[_DriverAction, java.lang.Object]> {}
      interface _DriverInfo$$static extends ClassLike {
        _new(driver: Driver, action: DriverAction): DriverInfo;
      }
      let DriverInfo: _DriverInfo$$static;
      interface _DriverInfo {
        _action(): DriverAction;
        equals(other: any): boolean;
        hashCode(): int;
        toString(): string;
        _da: DriverAction;
        _driver: Driver;
      }
      interface DriverInfo extends CombineTypes<[_DriverInfo, java.lang.Object]> {}
      interface _DriverManager$$static extends ClassLike {
        deregisterDriver(driver: Driver): void;
        drivers(): java.util.stream.Stream<Driver>;
        _ensureDriversInitialized(): void;
        getConnection(url: string, info: java.util.Properties): Connection;
        getConnection(url: string, user: string, password: string): Connection;
        getConnection(url: string): Connection;
        _getConnection(url: string, info: java.util.Properties, caller: java.lang.Class<any>): Connection;
        getDriver(url: string): Driver;
        getDrivers(): java.util.Enumeration<Driver>;
        _getDrivers(callerClass: java.lang.Class<any>): java.util.List<Driver>;
        getLogStream(): java.io.PrintStream;
        getLogWriter(): java.io.PrintWriter;
        getLoginTimeout(): int;
        _isDriverAllowed(driver: Driver, caller: java.lang.Class<any>): boolean;
        _isDriverAllowed(driver: Driver, classLoader: java.lang.ClassLoader): boolean;
        println(message: string): void;
        registerDriver(driver: Driver): void;
        registerDriver(driver: Driver, da: DriverAction): void;
        setLogStream(out: java.io.PrintStream): void;
        setLogWriter(out: java.io.PrintWriter): void;
        setLoginTimeout(seconds: int): void;
        _DEREGISTER_DRIVER_PERMISSION: SQLPermission;
        _JDBC_DRIVERS_PROPERTY: string;
        _SET_LOG_PERMISSION: SQLPermission;
        _driversInitialized: boolean;
        _lockForInitDrivers: any;
        _logStream: java.io.PrintStream;
        _logSync: any;
        _logWriter: java.io.PrintWriter;
        _loginTimeout: int;
        _registeredDrivers: java.util.concurrent.CopyOnWriteArrayList<DriverInfo>;
      }
      let DriverManager: _DriverManager$$static;
      interface _DriverManager {
      }
      interface DriverManager extends CombineTypes<[_DriverManager, java.lang.Object]> {}
      interface _DriverPropertyInfo$$static extends ClassLike {
        new(name: string, value: string): DriverPropertyInfo;
      }
      let DriverPropertyInfo: _DriverPropertyInfo$$static;
      interface _DriverPropertyInfo {
        choices: string[];
        description: string;
        name: string;
        required: boolean;
        value: string;
      }
      interface DriverPropertyInfo extends CombineTypes<[_DriverPropertyInfo, java.lang.Object]> {}
      interface _JDBCType$$static extends ClassLike {
        valueOf(name: string): JDBCType;
        valueOf(type: int): JDBCType;
        values(): JDBCType[];
        readonly ARRAY: JDBCType;
        readonly BIGINT: JDBCType;
        readonly BINARY: JDBCType;
        readonly BIT: JDBCType;
        readonly BLOB: JDBCType;
        readonly BOOLEAN: JDBCType;
        readonly CHAR: JDBCType;
        readonly CLOB: JDBCType;
        readonly DATALINK: JDBCType;
        readonly DATE: JDBCType;
        readonly DECIMAL: JDBCType;
        readonly DISTINCT: JDBCType;
        readonly DOUBLE: JDBCType;
        readonly FLOAT: JDBCType;
        readonly INTEGER: JDBCType;
        readonly JAVA_OBJECT: JDBCType;
        readonly LONGNVARCHAR: JDBCType;
        readonly LONGVARBINARY: JDBCType;
        readonly LONGVARCHAR: JDBCType;
        readonly NCHAR: JDBCType;
        readonly NCLOB: JDBCType;
        readonly NULL: JDBCType;
        readonly NUMERIC: JDBCType;
        readonly NVARCHAR: JDBCType;
        readonly OTHER: JDBCType;
        readonly REAL: JDBCType;
        readonly REF: JDBCType;
        readonly REF_CURSOR: JDBCType;
        readonly ROWID: JDBCType;
        readonly SMALLINT: JDBCType;
        readonly SQLXML: JDBCType;
        readonly STRUCT: JDBCType;
        readonly TIME: JDBCType;
        readonly TIMESTAMP: JDBCType;
        readonly TIMESTAMP_WITH_TIMEZONE: JDBCType;
        readonly TIME_WITH_TIMEZONE: JDBCType;
        readonly TINYINT: JDBCType;
        readonly VARBINARY: JDBCType;
        readonly VARCHAR: JDBCType;
      }
      let JDBCType: _JDBCType$$static;
      interface _JDBCType {
        getName(): string;
        getVendor(): string;
        getVendorTypeNumber(): int;
        _type: int;
      }
      interface JDBCType extends CombineTypes<[_JDBCType, SQLType]> {}
      interface _NClob$$static extends ClassLike {
      }
      let NClob: _NClob$$static;
      interface _NClob {
      }
      interface NClob extends CombineTypes<[_NClob, java.lang.Object, java.sql.Clob]> {}
      interface _ParameterMetaData$$static extends ClassLike {
        readonly parameterModeIn: int;
        readonly parameterModeInOut: int;
        readonly parameterModeOut: int;
        readonly parameterModeUnknown: int;
        readonly parameterNoNulls: int;
        readonly parameterNullable: int;
        readonly parameterNullableUnknown: int;
      }
      let ParameterMetaData: _ParameterMetaData$$static;
      interface _ParameterMetaData {
        getParameterClassName(a0: int): string;
        getParameterCount(): int;
        getParameterMode(a0: int): int;
        getParameterType(a0: int): int;
        getParameterTypeName(a0: int): string;
        getPrecision(a0: int): int;
        getScale(a0: int): int;
        isNullable(a0: int): int;
        isSigned(a0: int): boolean;
      }
      interface ParameterMetaData extends CombineTypes<[_ParameterMetaData, java.sql.Wrapper, java.lang.Object]> {}
      interface _PreparedStatement$$static extends ClassLike {
      }
      let PreparedStatement: _PreparedStatement$$static;
      interface _PreparedStatement {
        addBatch(): void;
        clearParameters(): void;
        execute(): boolean;
        executeLargeUpdate(): long;
        executeQuery(): ResultSet;
        executeUpdate(): int;
        getMetaData(): ResultSetMetaData;
        getParameterMetaData(): ParameterMetaData;
        setArray(a0: int, a1: Array): void;
        setAsciiStream(a0: int, a1: java.io.InputStream, a2: int): void;
        setAsciiStream(a0: int, a1: java.io.InputStream, a2: long): void;
        setAsciiStream(a0: int, a1: java.io.InputStream): void;
        setBigDecimal(a0: int, a1: java.math.BigDecimal): void;
        setBinaryStream(a0: int, a1: java.io.InputStream, a2: int): void;
        setBinaryStream(a0: int, a1: java.io.InputStream, a2: long): void;
        setBinaryStream(a0: int, a1: java.io.InputStream): void;
        setBlob(a0: int, a1: Blob): void;
        setBlob(a0: int, a1: java.io.InputStream, a2: long): void;
        setBlob(a0: int, a1: java.io.InputStream): void;
        setBoolean(a0: int, a1: boolean): void;
        setByte(a0: int, a1: byte): void;
        setBytes(a0: int, a1: byte[]): void;
        setCharacterStream(a0: int, a1: java.io.Reader, a2: int): void;
        setCharacterStream(a0: int, a1: java.io.Reader, a2: long): void;
        setCharacterStream(a0: int, a1: java.io.Reader): void;
        setClob(a0: int, a1: Clob): void;
        setClob(a0: int, a1: java.io.Reader, a2: long): void;
        setClob(a0: int, a1: java.io.Reader): void;
        setDate(a0: int, a1: Date): void;
        setDate(a0: int, a1: Date, a2: java.util.Calendar): void;
        setDouble(a0: int, a1: double): void;
        setFloat(a0: int, a1: float): void;
        setInt(a0: int, a1: int): void;
        setLong(a0: int, a1: long): void;
        setNCharacterStream(a0: int, a1: java.io.Reader, a2: long): void;
        setNCharacterStream(a0: int, a1: java.io.Reader): void;
        setNClob(a0: int, a1: NClob): void;
        setNClob(a0: int, a1: java.io.Reader, a2: long): void;
        setNClob(a0: int, a1: java.io.Reader): void;
        setNString(a0: int, a1: string): void;
        setNull(a0: int, a1: int): void;
        setNull(a0: int, a1: int, a2: string): void;
        setObject(a0: int, a1: any, a2: int): void;
        setObject(a0: int, a1: any): void;
        setObject(a0: int, a1: any, a2: int, a3: int): void;
        setObject(parameterIndex: int, x: any, targetSqlType: SQLType, scaleOrLength: int): void;
        setObject(parameterIndex: int, x: any, targetSqlType: SQLType): void;
        setRef(a0: int, a1: Ref): void;
        setRowId(a0: int, a1: RowId): void;
        setSQLXML(a0: int, a1: SQLXML): void;
        setShort(a0: int, a1: short): void;
        setString(a0: int, a1: string): void;
        setTime(a0: int, a1: Time): void;
        setTime(a0: int, a1: Time, a2: java.util.Calendar): void;
        setTimestamp(a0: int, a1: Timestamp): void;
        setTimestamp(a0: int, a1: Timestamp, a2: java.util.Calendar): void;
        setURL(a0: int, a1: java.net.URL): void;
        setUnicodeStream(a0: int, a1: java.io.InputStream, a2: int): void;
      }
      interface PreparedStatement extends CombineTypes<[_PreparedStatement, java.sql.Statement, java.lang.Object]> {}
      interface _PseudoColumnUsage$$static extends ClassLike {
        valueOf(name: string): PseudoColumnUsage;
        values(): PseudoColumnUsage[];
        readonly NO_USAGE_RESTRICTIONS: PseudoColumnUsage;
        readonly SELECT_LIST_ONLY: PseudoColumnUsage;
        readonly USAGE_UNKNOWN: PseudoColumnUsage;
        readonly WHERE_CLAUSE_ONLY: PseudoColumnUsage;
      }
      let PseudoColumnUsage: _PseudoColumnUsage$$static;
      interface _PseudoColumnUsage {
      }
      interface PseudoColumnUsage extends CombineTypes<[_PseudoColumnUsage]> {}
      interface _Ref$$static extends ClassLike {
      }
      let Ref: _Ref$$static;
      interface _Ref {
        getBaseTypeName(): string;
        getObject(a0: java.util.Map<string,java.lang.Class<any>>): any;
        getObject(): any;
        setObject(a0: any): void;
      }
      interface Ref extends CombineTypes<[_Ref, java.lang.Object]> {}
      interface _ResultSet$$static extends ClassLike {
        readonly CLOSE_CURSORS_AT_COMMIT: int;
        readonly CONCUR_READ_ONLY: int;
        readonly CONCUR_UPDATABLE: int;
        readonly FETCH_FORWARD: int;
        readonly FETCH_REVERSE: int;
        readonly FETCH_UNKNOWN: int;
        readonly HOLD_CURSORS_OVER_COMMIT: int;
        readonly TYPE_FORWARD_ONLY: int;
        readonly TYPE_SCROLL_INSENSITIVE: int;
        readonly TYPE_SCROLL_SENSITIVE: int;
      }
      let ResultSet: _ResultSet$$static;
      interface _ResultSet {
        absolute(a0: int): boolean;
        afterLast(): void;
        beforeFirst(): void;
        cancelRowUpdates(): void;
        clearWarnings(): void;
        close(): void;
        deleteRow(): void;
        findColumn(a0: string): int;
        first(): boolean;
        getArray(a0: int): Array;
        getArray(a0: string): Array;
        getAsciiStream(a0: int): java.io.InputStream;
        getAsciiStream(a0: string): java.io.InputStream;
        getBigDecimal(a0: int, a1: int): java.math.BigDecimal;
        getBigDecimal(a0: string, a1: int): java.math.BigDecimal;
        getBigDecimal(a0: int): java.math.BigDecimal;
        getBigDecimal(a0: string): java.math.BigDecimal;
        getBinaryStream(a0: int): java.io.InputStream;
        getBinaryStream(a0: string): java.io.InputStream;
        getBlob(a0: int): Blob;
        getBlob(a0: string): Blob;
        getBoolean(a0: int): boolean;
        getBoolean(a0: string): boolean;
        getByte(a0: int): byte;
        getByte(a0: string): byte;
        getBytes(a0: int): byte[];
        getBytes(a0: string): byte[];
        getCharacterStream(a0: int): java.io.Reader;
        getCharacterStream(a0: string): java.io.Reader;
        getClob(a0: int): Clob;
        getClob(a0: string): Clob;
        getConcurrency(): int;
        getCursorName(): string;
        getDate(a0: int): Date;
        getDate(a0: string): Date;
        getDate(a0: int, a1: java.util.Calendar): Date;
        getDate(a0: string, a1: java.util.Calendar): Date;
        getDouble(a0: int): double;
        getDouble(a0: string): double;
        getFetchDirection(): int;
        getFetchSize(): int;
        getFloat(a0: int): float;
        getFloat(a0: string): float;
        getHoldability(): int;
        getInt(a0: int): int;
        getInt(a0: string): int;
        getLong(a0: int): long;
        getLong(a0: string): long;
        getMetaData(): ResultSetMetaData;
        getNCharacterStream(a0: int): java.io.Reader;
        getNCharacterStream(a0: string): java.io.Reader;
        getNClob(a0: int): NClob;
        getNClob(a0: string): NClob;
        getNString(a0: int): string;
        getNString(a0: string): string;
        getObject(a0: int): any;
        getObject(a0: string): any;
        getObject(a0: int, a1: java.util.Map<string,java.lang.Class<any>>): any;
        getObject(a0: string, a1: java.util.Map<string,java.lang.Class<any>>): any;
        getObject<T>(a0: int, a1: java.lang.Class<T>): T;
        getObject<T>(a0: string, a1: java.lang.Class<T>): T;
        getRef(a0: int): Ref;
        getRef(a0: string): Ref;
        getRow(): int;
        getRowId(a0: int): RowId;
        getRowId(a0: string): RowId;
        getSQLXML(a0: int): SQLXML;
        getSQLXML(a0: string): SQLXML;
        getShort(a0: int): short;
        getShort(a0: string): short;
        getStatement(): Statement;
        getString(a0: int): string;
        getString(a0: string): string;
        getTime(a0: int): Time;
        getTime(a0: string): Time;
        getTime(a0: int, a1: java.util.Calendar): Time;
        getTime(a0: string, a1: java.util.Calendar): Time;
        getTimestamp(a0: int): Timestamp;
        getTimestamp(a0: string): Timestamp;
        getTimestamp(a0: int, a1: java.util.Calendar): Timestamp;
        getTimestamp(a0: string, a1: java.util.Calendar): Timestamp;
        getType(): int;
        getURL(a0: int): java.net.URL;
        getURL(a0: string): java.net.URL;
        getUnicodeStream(a0: int): java.io.InputStream;
        getUnicodeStream(a0: string): java.io.InputStream;
        getWarnings(): SQLWarning;
        insertRow(): void;
        isAfterLast(): boolean;
        isBeforeFirst(): boolean;
        isClosed(): boolean;
        isFirst(): boolean;
        isLast(): boolean;
        last(): boolean;
        moveToCurrentRow(): void;
        moveToInsertRow(): void;
        next(): boolean;
        previous(): boolean;
        refreshRow(): void;
        relative(a0: int): boolean;
        rowDeleted(): boolean;
        rowInserted(): boolean;
        rowUpdated(): boolean;
        setFetchDirection(a0: int): void;
        setFetchSize(a0: int): void;
        updateArray(a0: int, a1: Array): void;
        updateArray(a0: string, a1: Array): void;
        updateAsciiStream(a0: int, a1: java.io.InputStream, a2: int): void;
        updateAsciiStream(a0: string, a1: java.io.InputStream, a2: int): void;
        updateAsciiStream(a0: int, a1: java.io.InputStream, a2: long): void;
        updateAsciiStream(a0: string, a1: java.io.InputStream, a2: long): void;
        updateAsciiStream(a0: int, a1: java.io.InputStream): void;
        updateAsciiStream(a0: string, a1: java.io.InputStream): void;
        updateBigDecimal(a0: int, a1: java.math.BigDecimal): void;
        updateBigDecimal(a0: string, a1: java.math.BigDecimal): void;
        updateBinaryStream(a0: int, a1: java.io.InputStream, a2: int): void;
        updateBinaryStream(a0: string, a1: java.io.InputStream, a2: int): void;
        updateBinaryStream(a0: int, a1: java.io.InputStream, a2: long): void;
        updateBinaryStream(a0: string, a1: java.io.InputStream, a2: long): void;
        updateBinaryStream(a0: int, a1: java.io.InputStream): void;
        updateBinaryStream(a0: string, a1: java.io.InputStream): void;
        updateBlob(a0: int, a1: Blob): void;
        updateBlob(a0: string, a1: Blob): void;
        updateBlob(a0: int, a1: java.io.InputStream, a2: long): void;
        updateBlob(a0: string, a1: java.io.InputStream, a2: long): void;
        updateBlob(a0: int, a1: java.io.InputStream): void;
        updateBlob(a0: string, a1: java.io.InputStream): void;
        updateBoolean(a0: int, a1: boolean): void;
        updateBoolean(a0: string, a1: boolean): void;
        updateByte(a0: int, a1: byte): void;
        updateByte(a0: string, a1: byte): void;
        updateBytes(a0: int, a1: byte[]): void;
        updateBytes(a0: string, a1: byte[]): void;
        updateCharacterStream(a0: int, a1: java.io.Reader, a2: int): void;
        updateCharacterStream(a0: string, a1: java.io.Reader, a2: int): void;
        updateCharacterStream(a0: int, a1: java.io.Reader, a2: long): void;
        updateCharacterStream(a0: string, a1: java.io.Reader, a2: long): void;
        updateCharacterStream(a0: int, a1: java.io.Reader): void;
        updateCharacterStream(a0: string, a1: java.io.Reader): void;
        updateClob(a0: int, a1: Clob): void;
        updateClob(a0: string, a1: Clob): void;
        updateClob(a0: int, a1: java.io.Reader, a2: long): void;
        updateClob(a0: string, a1: java.io.Reader, a2: long): void;
        updateClob(a0: int, a1: java.io.Reader): void;
        updateClob(a0: string, a1: java.io.Reader): void;
        updateDate(a0: int, a1: Date): void;
        updateDate(a0: string, a1: Date): void;
        updateDouble(a0: int, a1: double): void;
        updateDouble(a0: string, a1: double): void;
        updateFloat(a0: int, a1: float): void;
        updateFloat(a0: string, a1: float): void;
        updateInt(a0: int, a1: int): void;
        updateInt(a0: string, a1: int): void;
        updateLong(a0: int, a1: long): void;
        updateLong(a0: string, a1: long): void;
        updateNCharacterStream(a0: int, a1: java.io.Reader, a2: long): void;
        updateNCharacterStream(a0: string, a1: java.io.Reader, a2: long): void;
        updateNCharacterStream(a0: int, a1: java.io.Reader): void;
        updateNCharacterStream(a0: string, a1: java.io.Reader): void;
        updateNClob(a0: int, a1: NClob): void;
        updateNClob(a0: string, a1: NClob): void;
        updateNClob(a0: int, a1: java.io.Reader, a2: long): void;
        updateNClob(a0: string, a1: java.io.Reader, a2: long): void;
        updateNClob(a0: int, a1: java.io.Reader): void;
        updateNClob(a0: string, a1: java.io.Reader): void;
        updateNString(a0: int, a1: string): void;
        updateNString(a0: string, a1: string): void;
        updateNull(a0: int): void;
        updateNull(a0: string): void;
        updateObject(a0: int, a1: any, a2: int): void;
        updateObject(a0: int, a1: any): void;
        updateObject(a0: string, a1: any, a2: int): void;
        updateObject(a0: string, a1: any): void;
        updateObject(columnIndex: int, x: any, targetSqlType: SQLType, scaleOrLength: int): void;
        updateObject(columnLabel: string, x: any, targetSqlType: SQLType, scaleOrLength: int): void;
        updateObject(columnIndex: int, x: any, targetSqlType: SQLType): void;
        updateObject(columnLabel: string, x: any, targetSqlType: SQLType): void;
        updateRef(a0: int, a1: Ref): void;
        updateRef(a0: string, a1: Ref): void;
        updateRow(): void;
        updateRowId(a0: int, a1: RowId): void;
        updateRowId(a0: string, a1: RowId): void;
        updateSQLXML(a0: int, a1: SQLXML): void;
        updateSQLXML(a0: string, a1: SQLXML): void;
        updateShort(a0: int, a1: short): void;
        updateShort(a0: string, a1: short): void;
        updateString(a0: int, a1: string): void;
        updateString(a0: string, a1: string): void;
        updateTime(a0: int, a1: Time): void;
        updateTime(a0: string, a1: Time): void;
        updateTimestamp(a0: int, a1: Timestamp): void;
        updateTimestamp(a0: string, a1: Timestamp): void;
        wasNull(): boolean;
      }
      interface ResultSet extends CombineTypes<[_ResultSet, java.sql.Wrapper, java.lang.Object, java.lang.AutoCloseable]> {}
      interface _ResultSetMetaData$$static extends ClassLike {
        readonly columnNoNulls: int;
        readonly columnNullable: int;
        readonly columnNullableUnknown: int;
      }
      let ResultSetMetaData: _ResultSetMetaData$$static;
      interface _ResultSetMetaData {
        getCatalogName(a0: int): string;
        getColumnClassName(a0: int): string;
        getColumnCount(): int;
        getColumnDisplaySize(a0: int): int;
        getColumnLabel(a0: int): string;
        getColumnName(a0: int): string;
        getColumnType(a0: int): int;
        getColumnTypeName(a0: int): string;
        getPrecision(a0: int): int;
        getScale(a0: int): int;
        getSchemaName(a0: int): string;
        getTableName(a0: int): string;
        isAutoIncrement(a0: int): boolean;
        isCaseSensitive(a0: int): boolean;
        isCurrency(a0: int): boolean;
        isDefinitelyWritable(a0: int): boolean;
        isNullable(a0: int): int;
        isReadOnly(a0: int): boolean;
        isSearchable(a0: int): boolean;
        isSigned(a0: int): boolean;
        isWritable(a0: int): boolean;
      }
      interface ResultSetMetaData extends CombineTypes<[_ResultSetMetaData, java.sql.Wrapper, java.lang.Object]> {}
      interface _RowId$$static extends ClassLike {
      }
      let RowId: _RowId$$static;
      interface _RowId {
        equals(a0: any): boolean;
        getBytes(): byte[];
        hashCode(): int;
        toString(): string;
      }
      interface RowId extends CombineTypes<[_RowId, java.lang.Object]> {}
      interface _RowIdLifetime$$static extends ClassLike {
        valueOf(name: string): RowIdLifetime;
        values(): RowIdLifetime[];
        readonly ROWID_UNSUPPORTED: RowIdLifetime;
        readonly ROWID_VALID_FOREVER: RowIdLifetime;
        readonly ROWID_VALID_OTHER: RowIdLifetime;
        readonly ROWID_VALID_SESSION: RowIdLifetime;
        readonly ROWID_VALID_TRANSACTION: RowIdLifetime;
      }
      let RowIdLifetime: _RowIdLifetime$$static;
      interface _RowIdLifetime {
      }
      interface RowIdLifetime extends CombineTypes<[_RowIdLifetime]> {}
      interface _SQLClientInfoException$$static extends ClassLike {
        _serialVersionUID: long;
        new(): SQLClientInfoException;
        new(failedProperties: java.util.Map<string,ClientInfoStatus>): SQLClientInfoException;
        new(failedProperties: java.util.Map<string,ClientInfoStatus>, cause: java.lang.Throwable): SQLClientInfoException;
        new(reason: string, failedProperties: java.util.Map<string,ClientInfoStatus>): SQLClientInfoException;
        new(reason: string, failedProperties: java.util.Map<string,ClientInfoStatus>, cause: java.lang.Throwable): SQLClientInfoException;
        new(reason: string, SQLState: string, failedProperties: java.util.Map<string,ClientInfoStatus>): SQLClientInfoException;
        new(reason: string, SQLState: string, failedProperties: java.util.Map<string,ClientInfoStatus>, cause: java.lang.Throwable): SQLClientInfoException;
        new(reason: string, SQLState: string, vendorCode: int, failedProperties: java.util.Map<string,ClientInfoStatus>): SQLClientInfoException;
        new(reason: string, SQLState: string, vendorCode: int, failedProperties: java.util.Map<string,ClientInfoStatus>, cause: java.lang.Throwable): SQLClientInfoException;
      }
      let SQLClientInfoException: _SQLClientInfoException$$static;
      interface _SQLClientInfoException {
        getFailedProperties(): java.util.Map<string,ClientInfoStatus>;
        _failedProperties: java.util.Map<string,ClientInfoStatus>;
      }
      interface SQLClientInfoException extends CombineTypes<[_SQLClientInfoException, java.sql.SQLException]> {}
      interface _SQLData$$static extends ClassLike {
      }
      let SQLData: _SQLData$$static;
      interface _SQLData {
        getSQLTypeName(): string;
        readSQL(a0: SQLInput, a1: string): void;
        writeSQL(a0: SQLOutput): void;
      }
      interface SQLData extends CombineTypes<[_SQLData, java.lang.Object]> {}
      interface _SQLDataException$$static extends ClassLike {
        _serialVersionUID: long;
        new(): SQLDataException;
        new(reason: string): SQLDataException;
        new(reason: string, SQLState: string): SQLDataException;
        new(reason: string, SQLState: string, vendorCode: int): SQLDataException;
        new(cause: java.lang.Throwable): SQLDataException;
        new(reason: string, cause: java.lang.Throwable): SQLDataException;
        new(reason: string, SQLState: string, cause: java.lang.Throwable): SQLDataException;
        new(reason: string, SQLState: string, vendorCode: int, cause: java.lang.Throwable): SQLDataException;
      }
      let SQLDataException: _SQLDataException$$static;
      interface _SQLDataException {
      }
      interface SQLDataException extends CombineTypes<[_SQLDataException, java.sql.SQLNonTransientException]> {}
      interface _SQLException$$static extends ClassLike {
        _nextUpdater: java.util.concurrent.atomic.AtomicReferenceFieldUpdater<SQLException,SQLException>;
        _serialVersionUID: long;
        new(reason: string, SQLState: string, vendorCode: int): SQLException;
        new(reason: string, SQLState: string): SQLException;
        new(reason: string): SQLException;
        new(): SQLException;
        new(cause: java.lang.Throwable): SQLException;
        new(reason: string, cause: java.lang.Throwable): SQLException;
        new(reason: string, sqlState: string, cause: java.lang.Throwable): SQLException;
        new(reason: string, sqlState: string, vendorCode: int, cause: java.lang.Throwable): SQLException;
      }
      let SQLException: _SQLException$$static;
      interface _SQLException {
        getErrorCode(): int;
        getNextException(): SQLException;
        getSQLState(): string;
        iterator(): java.util.Iterator<java.lang.Throwable>;
        setNextException(ex: SQLException): void;
        _SQLState: string;
        _next: SQLException;
        _vendorCode: int;
      }
      interface SQLException extends CombineTypes<[_SQLException, java.lang.Iterable<java.lang.Throwable>, java.lang.Exception]> {}
      interface _SQLFeatureNotSupportedException$$static extends ClassLike {
        _serialVersionUID: long;
        new(): SQLFeatureNotSupportedException;
        new(reason: string): SQLFeatureNotSupportedException;
        new(reason: string, SQLState: string): SQLFeatureNotSupportedException;
        new(reason: string, SQLState: string, vendorCode: int): SQLFeatureNotSupportedException;
        new(cause: java.lang.Throwable): SQLFeatureNotSupportedException;
        new(reason: string, cause: java.lang.Throwable): SQLFeatureNotSupportedException;
        new(reason: string, SQLState: string, cause: java.lang.Throwable): SQLFeatureNotSupportedException;
        new(reason: string, SQLState: string, vendorCode: int, cause: java.lang.Throwable): SQLFeatureNotSupportedException;
      }
      let SQLFeatureNotSupportedException: _SQLFeatureNotSupportedException$$static;
      interface _SQLFeatureNotSupportedException {
      }
      interface SQLFeatureNotSupportedException extends CombineTypes<[_SQLFeatureNotSupportedException, java.sql.SQLNonTransientException]> {}
      interface _SQLInput$$static extends ClassLike {
      }
      let SQLInput: _SQLInput$$static;
      interface _SQLInput {
        readArray(): Array;
        readAsciiStream(): java.io.InputStream;
        readBigDecimal(): java.math.BigDecimal;
        readBinaryStream(): java.io.InputStream;
        readBlob(): Blob;
        readBoolean(): boolean;
        readByte(): byte;
        readBytes(): byte[];
        readCharacterStream(): java.io.Reader;
        readClob(): Clob;
        readDate(): Date;
        readDouble(): double;
        readFloat(): float;
        readInt(): int;
        readLong(): long;
        readNClob(): NClob;
        readNString(): string;
        readObject(): any;
        readObject<T>(type: java.lang.Class<T>): T;
        readRef(): Ref;
        readRowId(): RowId;
        readSQLXML(): SQLXML;
        readShort(): short;
        readString(): string;
        readTime(): Time;
        readTimestamp(): Timestamp;
        readURL(): java.net.URL;
        wasNull(): boolean;
      }
      interface SQLInput extends CombineTypes<[_SQLInput, java.lang.Object]> {}
      interface _SQLIntegrityConstraintViolationException$$static extends ClassLike {
        _serialVersionUID: long;
        new(): SQLIntegrityConstraintViolationException;
        new(reason: string): SQLIntegrityConstraintViolationException;
        new(reason: string, SQLState: string): SQLIntegrityConstraintViolationException;
        new(reason: string, SQLState: string, vendorCode: int): SQLIntegrityConstraintViolationException;
        new(cause: java.lang.Throwable): SQLIntegrityConstraintViolationException;
        new(reason: string, cause: java.lang.Throwable): SQLIntegrityConstraintViolationException;
        new(reason: string, SQLState: string, cause: java.lang.Throwable): SQLIntegrityConstraintViolationException;
        new(reason: string, SQLState: string, vendorCode: int, cause: java.lang.Throwable): SQLIntegrityConstraintViolationException;
      }
      let SQLIntegrityConstraintViolationException: _SQLIntegrityConstraintViolationException$$static;
      interface _SQLIntegrityConstraintViolationException {
      }
      interface SQLIntegrityConstraintViolationException extends CombineTypes<[_SQLIntegrityConstraintViolationException, java.sql.SQLNonTransientException]> {}
      interface _SQLInvalidAuthorizationSpecException$$static extends ClassLike {
        _serialVersionUID: long;
        new(): SQLInvalidAuthorizationSpecException;
        new(reason: string): SQLInvalidAuthorizationSpecException;
        new(reason: string, SQLState: string): SQLInvalidAuthorizationSpecException;
        new(reason: string, SQLState: string, vendorCode: int): SQLInvalidAuthorizationSpecException;
        new(cause: java.lang.Throwable): SQLInvalidAuthorizationSpecException;
        new(reason: string, cause: java.lang.Throwable): SQLInvalidAuthorizationSpecException;
        new(reason: string, SQLState: string, cause: java.lang.Throwable): SQLInvalidAuthorizationSpecException;
        new(reason: string, SQLState: string, vendorCode: int, cause: java.lang.Throwable): SQLInvalidAuthorizationSpecException;
      }
      let SQLInvalidAuthorizationSpecException: _SQLInvalidAuthorizationSpecException$$static;
      interface _SQLInvalidAuthorizationSpecException {
      }
      interface SQLInvalidAuthorizationSpecException extends CombineTypes<[_SQLInvalidAuthorizationSpecException, java.sql.SQLNonTransientException]> {}
      interface _SQLNonTransientConnectionException$$static extends ClassLike {
        _serialVersionUID: long;
        new(): SQLNonTransientConnectionException;
        new(reason: string): SQLNonTransientConnectionException;
        new(reason: string, SQLState: string): SQLNonTransientConnectionException;
        new(reason: string, SQLState: string, vendorCode: int): SQLNonTransientConnectionException;
        new(cause: java.lang.Throwable): SQLNonTransientConnectionException;
        new(reason: string, cause: java.lang.Throwable): SQLNonTransientConnectionException;
        new(reason: string, SQLState: string, cause: java.lang.Throwable): SQLNonTransientConnectionException;
        new(reason: string, SQLState: string, vendorCode: int, cause: java.lang.Throwable): SQLNonTransientConnectionException;
      }
      let SQLNonTransientConnectionException: _SQLNonTransientConnectionException$$static;
      interface _SQLNonTransientConnectionException {
      }
      interface SQLNonTransientConnectionException extends CombineTypes<[_SQLNonTransientConnectionException, java.sql.SQLNonTransientException]> {}
      interface _SQLNonTransientException$$static extends ClassLike {
        _serialVersionUID: long;
        new(): SQLNonTransientException;
        new(reason: string): SQLNonTransientException;
        new(reason: string, SQLState: string): SQLNonTransientException;
        new(reason: string, SQLState: string, vendorCode: int): SQLNonTransientException;
        new(cause: java.lang.Throwable): SQLNonTransientException;
        new(reason: string, cause: java.lang.Throwable): SQLNonTransientException;
        new(reason: string, SQLState: string, cause: java.lang.Throwable): SQLNonTransientException;
        new(reason: string, SQLState: string, vendorCode: int, cause: java.lang.Throwable): SQLNonTransientException;
      }
      let SQLNonTransientException: _SQLNonTransientException$$static;
      interface _SQLNonTransientException {
      }
      interface SQLNonTransientException extends CombineTypes<[_SQLNonTransientException, java.sql.SQLException]> {}
      interface _SQLOutput$$static extends ClassLike {
      }
      let SQLOutput: _SQLOutput$$static;
      interface _SQLOutput {
        writeArray(a0: Array): void;
        writeAsciiStream(a0: java.io.InputStream): void;
        writeBigDecimal(a0: java.math.BigDecimal): void;
        writeBinaryStream(a0: java.io.InputStream): void;
        writeBlob(a0: Blob): void;
        writeBoolean(a0: boolean): void;
        writeByte(a0: byte): void;
        writeBytes(a0: byte[]): void;
        writeCharacterStream(a0: java.io.Reader): void;
        writeClob(a0: Clob): void;
        writeDate(a0: Date): void;
        writeDouble(a0: double): void;
        writeFloat(a0: float): void;
        writeInt(a0: int): void;
        writeLong(a0: long): void;
        writeNClob(a0: NClob): void;
        writeNString(a0: string): void;
        writeObject(a0: SQLData): void;
        writeObject(x: any, targetSqlType: SQLType): void;
        writeRef(a0: Ref): void;
        writeRowId(a0: RowId): void;
        writeSQLXML(a0: SQLXML): void;
        writeShort(a0: short): void;
        writeString(a0: string): void;
        writeStruct(a0: Struct): void;
        writeTime(a0: Time): void;
        writeTimestamp(a0: Timestamp): void;
        writeURL(a0: java.net.URL): void;
      }
      interface SQLOutput extends CombineTypes<[_SQLOutput, java.lang.Object]> {}
      interface _SQLPermission$$static extends ClassLike {
        _serialVersionUID: long;
        new(name: string): SQLPermission;
        new(name: string, actions: string): SQLPermission;
      }
      let SQLPermission: _SQLPermission$$static;
      interface _SQLPermission {
      }
      interface SQLPermission extends CombineTypes<[_SQLPermission, java.security.BasicPermission]> {}
      interface _SQLRecoverableException$$static extends ClassLike {
        _serialVersionUID: long;
        new(): SQLRecoverableException;
        new(reason: string): SQLRecoverableException;
        new(reason: string, SQLState: string): SQLRecoverableException;
        new(reason: string, SQLState: string, vendorCode: int): SQLRecoverableException;
        new(cause: java.lang.Throwable): SQLRecoverableException;
        new(reason: string, cause: java.lang.Throwable): SQLRecoverableException;
        new(reason: string, SQLState: string, cause: java.lang.Throwable): SQLRecoverableException;
        new(reason: string, SQLState: string, vendorCode: int, cause: java.lang.Throwable): SQLRecoverableException;
      }
      let SQLRecoverableException: _SQLRecoverableException$$static;
      interface _SQLRecoverableException {
      }
      interface SQLRecoverableException extends CombineTypes<[_SQLRecoverableException, java.sql.SQLException]> {}
      interface _SQLSyntaxErrorException$$static extends ClassLike {
        _serialVersionUID: long;
        new(): SQLSyntaxErrorException;
        new(reason: string): SQLSyntaxErrorException;
        new(reason: string, SQLState: string): SQLSyntaxErrorException;
        new(reason: string, SQLState: string, vendorCode: int): SQLSyntaxErrorException;
        new(cause: java.lang.Throwable): SQLSyntaxErrorException;
        new(reason: string, cause: java.lang.Throwable): SQLSyntaxErrorException;
        new(reason: string, SQLState: string, cause: java.lang.Throwable): SQLSyntaxErrorException;
        new(reason: string, SQLState: string, vendorCode: int, cause: java.lang.Throwable): SQLSyntaxErrorException;
      }
      let SQLSyntaxErrorException: _SQLSyntaxErrorException$$static;
      interface _SQLSyntaxErrorException {
      }
      interface SQLSyntaxErrorException extends CombineTypes<[_SQLSyntaxErrorException, java.sql.SQLNonTransientException]> {}
      interface _SQLTimeoutException$$static extends ClassLike {
        _serialVersionUID: long;
        new(): SQLTimeoutException;
        new(reason: string): SQLTimeoutException;
        new(reason: string, SQLState: string): SQLTimeoutException;
        new(reason: string, SQLState: string, vendorCode: int): SQLTimeoutException;
        new(cause: java.lang.Throwable): SQLTimeoutException;
        new(reason: string, cause: java.lang.Throwable): SQLTimeoutException;
        new(reason: string, SQLState: string, cause: java.lang.Throwable): SQLTimeoutException;
        new(reason: string, SQLState: string, vendorCode: int, cause: java.lang.Throwable): SQLTimeoutException;
      }
      let SQLTimeoutException: _SQLTimeoutException$$static;
      interface _SQLTimeoutException {
      }
      interface SQLTimeoutException extends CombineTypes<[_SQLTimeoutException, java.sql.SQLTransientException]> {}
      interface _SQLTransactionRollbackException$$static extends ClassLike {
        _serialVersionUID: long;
        new(): SQLTransactionRollbackException;
        new(reason: string): SQLTransactionRollbackException;
        new(reason: string, SQLState: string): SQLTransactionRollbackException;
        new(reason: string, SQLState: string, vendorCode: int): SQLTransactionRollbackException;
        new(cause: java.lang.Throwable): SQLTransactionRollbackException;
        new(reason: string, cause: java.lang.Throwable): SQLTransactionRollbackException;
        new(reason: string, SQLState: string, cause: java.lang.Throwable): SQLTransactionRollbackException;
        new(reason: string, SQLState: string, vendorCode: int, cause: java.lang.Throwable): SQLTransactionRollbackException;
      }
      let SQLTransactionRollbackException: _SQLTransactionRollbackException$$static;
      interface _SQLTransactionRollbackException {
      }
      interface SQLTransactionRollbackException extends CombineTypes<[_SQLTransactionRollbackException, java.sql.SQLTransientException]> {}
      interface _SQLTransientConnectionException$$static extends ClassLike {
        _serialVersionUID: long;
        new(): SQLTransientConnectionException;
        new(reason: string): SQLTransientConnectionException;
        new(reason: string, SQLState: string): SQLTransientConnectionException;
        new(reason: string, SQLState: string, vendorCode: int): SQLTransientConnectionException;
        new(cause: java.lang.Throwable): SQLTransientConnectionException;
        new(reason: string, cause: java.lang.Throwable): SQLTransientConnectionException;
        new(reason: string, SQLState: string, cause: java.lang.Throwable): SQLTransientConnectionException;
        new(reason: string, SQLState: string, vendorCode: int, cause: java.lang.Throwable): SQLTransientConnectionException;
      }
      let SQLTransientConnectionException: _SQLTransientConnectionException$$static;
      interface _SQLTransientConnectionException {
      }
      interface SQLTransientConnectionException extends CombineTypes<[_SQLTransientConnectionException, java.sql.SQLTransientException]> {}
      interface _SQLTransientException$$static extends ClassLike {
        _serialVersionUID: long;
        new(): SQLTransientException;
        new(reason: string): SQLTransientException;
        new(reason: string, SQLState: string): SQLTransientException;
        new(reason: string, SQLState: string, vendorCode: int): SQLTransientException;
        new(cause: java.lang.Throwable): SQLTransientException;
        new(reason: string, cause: java.lang.Throwable): SQLTransientException;
        new(reason: string, SQLState: string, cause: java.lang.Throwable): SQLTransientException;
        new(reason: string, SQLState: string, vendorCode: int, cause: java.lang.Throwable): SQLTransientException;
      }
      let SQLTransientException: _SQLTransientException$$static;
      interface _SQLTransientException {
      }
      interface SQLTransientException extends CombineTypes<[_SQLTransientException, java.sql.SQLException]> {}
      interface _SQLType$$static extends ClassLike {
      }
      let SQLType: _SQLType$$static;
      interface _SQLType {
        getName(): string;
        getVendor(): string;
        getVendorTypeNumber(): int;
      }
      interface SQLType extends CombineTypes<[_SQLType, java.lang.Object]> {}
      interface _SQLWarning$$static extends ClassLike {
        _serialVersionUID: long;
        new(reason: string, SQLState: string, vendorCode: int): SQLWarning;
        new(reason: string, SQLState: string): SQLWarning;
        new(reason: string): SQLWarning;
        new(): SQLWarning;
        new(cause: java.lang.Throwable): SQLWarning;
        new(reason: string, cause: java.lang.Throwable): SQLWarning;
        new(reason: string, SQLState: string, cause: java.lang.Throwable): SQLWarning;
        new(reason: string, SQLState: string, vendorCode: int, cause: java.lang.Throwable): SQLWarning;
      }
      let SQLWarning: _SQLWarning$$static;
      interface _SQLWarning {
        getNextWarning(): SQLWarning;
        setNextWarning(w: SQLWarning): void;
      }
      interface SQLWarning extends CombineTypes<[_SQLWarning, java.sql.SQLException]> {}
      interface _SQLXML$$static extends ClassLike {
      }
      let SQLXML: _SQLXML$$static;
      interface _SQLXML {
        free(): void;
        getBinaryStream(): java.io.InputStream;
        getCharacterStream(): java.io.Reader;
        getSource<T>(a0: java.lang.Class<T>): T;
        getString(): string;
        setBinaryStream(): java.io.OutputStream;
        setCharacterStream(): java.io.Writer;
        setResult<T>(a0: java.lang.Class<T>): T;
        setString(a0: string): void;
      }
      interface SQLXML extends CombineTypes<[_SQLXML, java.lang.Object]> {}
      interface _Savepoint$$static extends ClassLike {
      }
      let Savepoint: _Savepoint$$static;
      interface _Savepoint {
        getSavepointId(): int;
        getSavepointName(): string;
      }
      interface Savepoint extends CombineTypes<[_Savepoint, java.lang.Object]> {}
      interface _ShardingKey$$static extends ClassLike {
      }
      let ShardingKey: _ShardingKey$$static;
      interface _ShardingKey {
      }
      interface ShardingKey extends CombineTypes<[_ShardingKey, java.lang.Object]> {}
      interface _ShardingKeyBuilder$$static extends ClassLike {
      }
      let ShardingKeyBuilder: _ShardingKeyBuilder$$static;
      interface _ShardingKeyBuilder {
        build(): ShardingKey;
        subkey(a0: any, a1: SQLType): ShardingKeyBuilder;
      }
      interface ShardingKeyBuilder extends CombineTypes<[_ShardingKeyBuilder, java.lang.Object]> {}
      interface _Statement$$static extends ClassLike {
        readonly CLOSE_ALL_RESULTS: int;
        readonly CLOSE_CURRENT_RESULT: int;
        readonly EXECUTE_FAILED: int;
        readonly KEEP_CURRENT_RESULT: int;
        readonly NO_GENERATED_KEYS: int;
        readonly RETURN_GENERATED_KEYS: int;
        readonly SUCCESS_NO_INFO: int;
      }
      let Statement: _Statement$$static;
      interface _Statement {
        addBatch(a0: string): void;
        cancel(): void;
        clearBatch(): void;
        clearWarnings(): void;
        close(): void;
        closeOnCompletion(): void;
        enquoteIdentifier(identifier: string, alwaysQuote: boolean): string;
        enquoteLiteral(val: string): string;
        enquoteNCharLiteral(val: string): string;
        execute(a0: string): boolean;
        execute(a0: string, a1: int): boolean;
        execute(a0: string, a1: int[]): boolean;
        execute(a0: string, a1: string[]): boolean;
        executeBatch(): int[];
        executeLargeBatch(): long[];
        executeLargeUpdate(sql: string): long;
        executeLargeUpdate(sql: string, autoGeneratedKeys: int): long;
        executeLargeUpdate(sql: string, columnIndexes: int[]): long;
        executeLargeUpdate(sql: string, columnNames: string[]): long;
        executeQuery(a0: string): ResultSet;
        executeUpdate(a0: string): int;
        executeUpdate(a0: string, a1: int): int;
        executeUpdate(a0: string, a1: int[]): int;
        executeUpdate(a0: string, a1: string[]): int;
        getConnection(): Connection;
        getFetchDirection(): int;
        getFetchSize(): int;
        getGeneratedKeys(): ResultSet;
        getLargeMaxRows(): long;
        getLargeUpdateCount(): long;
        getMaxFieldSize(): int;
        getMaxRows(): int;
        getMoreResults(): boolean;
        getMoreResults(a0: int): boolean;
        getQueryTimeout(): int;
        getResultSet(): ResultSet;
        getResultSetConcurrency(): int;
        getResultSetHoldability(): int;
        getResultSetType(): int;
        getUpdateCount(): int;
        getWarnings(): SQLWarning;
        isCloseOnCompletion(): boolean;
        isClosed(): boolean;
        isPoolable(): boolean;
        isSimpleIdentifier(identifier: string): boolean;
        setCursorName(a0: string): void;
        setEscapeProcessing(a0: boolean): void;
        setFetchDirection(a0: int): void;
        setFetchSize(a0: int): void;
        setLargeMaxRows(max: long): void;
        setMaxFieldSize(a0: int): void;
        setMaxRows(a0: int): void;
        setPoolable(a0: boolean): void;
        setQueryTimeout(a0: int): void;
      }
      interface Statement extends CombineTypes<[_Statement, java.sql.Wrapper, java.lang.Object, java.lang.AutoCloseable]> {}
      interface _Struct$$static extends ClassLike {
      }
      let Struct: _Struct$$static;
      interface _Struct {
        getAttributes(): any[];
        getAttributes(a0: java.util.Map<string,java.lang.Class<any>>): any[];
        getSQLTypeName(): string;
      }
      interface Struct extends CombineTypes<[_Struct, java.lang.Object]> {}
      interface _Time$$static extends ClassLike {
        valueOf(s: string): Time;
        valueOf(time: java.time.LocalTime): Time;
        _serialVersionUID: long;
        new(hour: int, minute: int, second: int): Time;
        new(time: long): Time;
      }
      let Time: _Time$$static;
      interface _Time {
        getDate(): int;
        getDay(): int;
        getMonth(): int;
        getYear(): int;
        setDate(i: int): void;
        setMonth(i: int): void;
        setTime(time: long): void;
        setYear(i: int): void;
        toInstant(): java.time.Instant;
        toLocalTime(): java.time.LocalTime;
        toString(): string;
      }
      interface Time extends CombineTypes<[_Time, java.util.Date]> {}
      interface _Timestamp$$static extends ClassLike {
        from(instant: java.time.Instant): Timestamp;
        valueOf(s: string): Timestamp;
        valueOf(dateTime: java.time.LocalDateTime): Timestamp;
        _MILLIS_PER_SECOND: int;
        _serialVersionUID: long;
        new(year: int, month: int, date: int, hour: int, minute: int, second: int, nano: int): Timestamp;
        new(time: long): Timestamp;
      }
      let Timestamp: _Timestamp$$static;
      interface _Timestamp {
        after(ts: Timestamp): boolean;
        before(ts: Timestamp): boolean;
        compareTo(ts: Timestamp): int;
        compareTo(o: java.util.Date): int;
        compareTo(a0: any): int;
        equals(ts: Timestamp): boolean;
        equals(ts: any): boolean;
        getNanos(): int;
        getTime(): long;
        hashCode(): int;
        setNanos(n: int): void;
        setTime(time: long): void;
        toInstant(): java.time.Instant;
        toLocalDateTime(): java.time.LocalDateTime;
        toString(): string;
        _nanos: int;
      }
      interface Timestamp extends CombineTypes<[_Timestamp, java.util.Date]> {}
      interface _Types$$static extends ClassLike {
        readonly ARRAY: int;
        readonly BIGINT: int;
        readonly BINARY: int;
        readonly BIT: int;
        readonly BLOB: int;
        readonly BOOLEAN: int;
        readonly CHAR: int;
        readonly CLOB: int;
        readonly DATALINK: int;
        readonly DATE: int;
        readonly DECIMAL: int;
        readonly DISTINCT: int;
        readonly DOUBLE: int;
        readonly FLOAT: int;
        readonly INTEGER: int;
        readonly JAVA_OBJECT: int;
        readonly LONGNVARCHAR: int;
        readonly LONGVARBINARY: int;
        readonly LONGVARCHAR: int;
        readonly NCHAR: int;
        readonly NCLOB: int;
        readonly NULL: int;
        readonly NUMERIC: int;
        readonly NVARCHAR: int;
        readonly OTHER: int;
        readonly REAL: int;
        readonly REF: int;
        readonly REF_CURSOR: int;
        readonly ROWID: int;
        readonly SMALLINT: int;
        readonly SQLXML: int;
        readonly STRUCT: int;
        readonly TIME: int;
        readonly TIMESTAMP: int;
        readonly TIMESTAMP_WITH_TIMEZONE: int;
        readonly TIME_WITH_TIMEZONE: int;
        readonly TINYINT: int;
        readonly VARBINARY: int;
        readonly VARCHAR: int;
      }
      let Types: _Types$$static;
      interface _Types {
      }
      interface Types extends CombineTypes<[_Types, java.lang.Object]> {}
      interface _Wrapper$$static extends ClassLike {
      }
      let Wrapper: _Wrapper$$static;
      interface _Wrapper {
        isWrapperFor(a0: java.lang.Class<any>): boolean;
        unwrap<T>(a0: java.lang.Class<T>): T;
      }
      interface Wrapper extends CombineTypes<[_Wrapper, java.lang.Object]> {}
    }
  }
  module javax {
    module sql {
      interface _CommonDataSource$$static extends ClassLike {
      }
      let CommonDataSource: _CommonDataSource$$static;
      interface _CommonDataSource {
        createShardingKeyBuilder(): java.sql.ShardingKeyBuilder;
        getLogWriter(): java.io.PrintWriter;
        getLoginTimeout(): int;
        getParentLogger(): java.util.logging.Logger;
        setLogWriter(a0: java.io.PrintWriter): void;
        setLoginTimeout(a0: int): void;
      }
      interface CommonDataSource extends CombineTypes<[_CommonDataSource, java.lang.Object]> {}
      interface _ConnectionEvent$$static extends ClassLike {
        _serialVersionUID: long;
        new(con: PooledConnection): ConnectionEvent;
        new(con: PooledConnection, ex: java.sql.SQLException): ConnectionEvent;
      }
      let ConnectionEvent: _ConnectionEvent$$static;
      interface _ConnectionEvent {
        getSQLException(): java.sql.SQLException;
        _ex: java.sql.SQLException;
      }
      interface ConnectionEvent extends CombineTypes<[_ConnectionEvent, java.util.EventObject]> {}
      interface _ConnectionEventListener$$static extends ClassLike {
      }
      let ConnectionEventListener: _ConnectionEventListener$$static;
      interface _ConnectionEventListener {
        connectionClosed(a0: ConnectionEvent): void;
        connectionErrorOccurred(a0: ConnectionEvent): void;
      }
      interface ConnectionEventListener extends CombineTypes<[_ConnectionEventListener, java.util.EventListener, java.lang.Object]> {}
      interface _ConnectionPoolDataSource$$static extends ClassLike {
      }
      let ConnectionPoolDataSource: _ConnectionPoolDataSource$$static;
      interface _ConnectionPoolDataSource {
        createPooledConnectionBuilder(): PooledConnectionBuilder;
        getLogWriter(): java.io.PrintWriter;
        getLoginTimeout(): int;
        getPooledConnection(): PooledConnection;
        getPooledConnection(a0: string, a1: string): PooledConnection;
        setLogWriter(a0: java.io.PrintWriter): void;
        setLoginTimeout(a0: int): void;
      }
      interface ConnectionPoolDataSource extends CombineTypes<[_ConnectionPoolDataSource, javax.sql.CommonDataSource, java.lang.Object]> {}
      interface _DataSource$$static extends ClassLike {
      }
      let DataSource: _DataSource$$static;
      interface _DataSource {
        createConnectionBuilder(): java.sql.ConnectionBuilder;
        getConnection(): java.sql.Connection;
        getConnection(a0: string, a1: string): java.sql.Connection;
        getLogWriter(): java.io.PrintWriter;
        getLoginTimeout(): int;
        setLogWriter(a0: java.io.PrintWriter): void;
        setLoginTimeout(a0: int): void;
      }
      interface DataSource extends CombineTypes<[_DataSource, java.sql.Wrapper, javax.sql.CommonDataSource, java.lang.Object]> {}
      interface _PooledConnection$$static extends ClassLike {
      }
      let PooledConnection: _PooledConnection$$static;
      interface _PooledConnection {
        addConnectionEventListener(a0: ConnectionEventListener): void;
        addStatementEventListener(a0: StatementEventListener): void;
        close(): void;
        getConnection(): java.sql.Connection;
        removeConnectionEventListener(a0: ConnectionEventListener): void;
        removeStatementEventListener(a0: StatementEventListener): void;
      }
      interface PooledConnection extends CombineTypes<[_PooledConnection, java.lang.Object]> {}
      interface _PooledConnectionBuilder$$static extends ClassLike {
      }
      let PooledConnectionBuilder: _PooledConnectionBuilder$$static;
      interface _PooledConnectionBuilder {
        build(): PooledConnection;
        password(a0: string): PooledConnectionBuilder;
        shardingKey(a0: java.sql.ShardingKey): PooledConnectionBuilder;
        superShardingKey(a0: java.sql.ShardingKey): PooledConnectionBuilder;
        user(a0: string): PooledConnectionBuilder;
      }
      interface PooledConnectionBuilder extends CombineTypes<[_PooledConnectionBuilder, java.lang.Object]> {}
      interface _RowSet$$static extends ClassLike {
      }
      let RowSet: _RowSet$$static;
      interface _RowSet {
        addRowSetListener(a0: RowSetListener): void;
        clearParameters(): void;
        execute(): void;
        getCommand(): string;
        getDataSourceName(): string;
        getEscapeProcessing(): boolean;
        getMaxFieldSize(): int;
        getMaxRows(): int;
        getPassword(): string;
        getQueryTimeout(): int;
        getTransactionIsolation(): int;
        getTypeMap(): java.util.Map<string,java.lang.Class<any>>;
        getUrl(): string;
        getUsername(): string;
        isReadOnly(): boolean;
        removeRowSetListener(a0: RowSetListener): void;
        setArray(a0: int, a1: java.sql.Array): void;
        setAsciiStream(a0: int, a1: java.io.InputStream, a2: int): void;
        setAsciiStream(a0: string, a1: java.io.InputStream, a2: int): void;
        setAsciiStream(a0: int, a1: java.io.InputStream): void;
        setAsciiStream(a0: string, a1: java.io.InputStream): void;
        setBigDecimal(a0: int, a1: java.math.BigDecimal): void;
        setBigDecimal(a0: string, a1: java.math.BigDecimal): void;
        setBinaryStream(a0: int, a1: java.io.InputStream, a2: int): void;
        setBinaryStream(a0: string, a1: java.io.InputStream, a2: int): void;
        setBinaryStream(a0: int, a1: java.io.InputStream): void;
        setBinaryStream(a0: string, a1: java.io.InputStream): void;
        setBlob(a0: int, a1: java.sql.Blob): void;
        setBlob(a0: int, a1: java.io.InputStream, a2: long): void;
        setBlob(a0: int, a1: java.io.InputStream): void;
        setBlob(a0: string, a1: java.io.InputStream, a2: long): void;
        setBlob(a0: string, a1: java.sql.Blob): void;
        setBlob(a0: string, a1: java.io.InputStream): void;
        setBoolean(a0: int, a1: boolean): void;
        setBoolean(a0: string, a1: boolean): void;
        setByte(a0: int, a1: byte): void;
        setByte(a0: string, a1: byte): void;
        setBytes(a0: int, a1: byte[]): void;
        setBytes(a0: string, a1: byte[]): void;
        setCharacterStream(a0: int, a1: java.io.Reader, a2: int): void;
        setCharacterStream(a0: string, a1: java.io.Reader, a2: int): void;
        setCharacterStream(a0: int, a1: java.io.Reader): void;
        setCharacterStream(a0: string, a1: java.io.Reader): void;
        setClob(a0: int, a1: java.sql.Clob): void;
        setClob(a0: int, a1: java.io.Reader, a2: long): void;
        setClob(a0: int, a1: java.io.Reader): void;
        setClob(a0: string, a1: java.io.Reader, a2: long): void;
        setClob(a0: string, a1: java.sql.Clob): void;
        setClob(a0: string, a1: java.io.Reader): void;
        setCommand(a0: string): void;
        setConcurrency(a0: int): void;
        setDataSourceName(a0: string): void;
        setDate(a0: int, a1: java.sql.Date): void;
        setDate(a0: int, a1: java.sql.Date, a2: java.util.Calendar): void;
        setDate(a0: string, a1: java.sql.Date): void;
        setDate(a0: string, a1: java.sql.Date, a2: java.util.Calendar): void;
        setDouble(a0: int, a1: double): void;
        setDouble(a0: string, a1: double): void;
        setEscapeProcessing(a0: boolean): void;
        setFloat(a0: int, a1: float): void;
        setFloat(a0: string, a1: float): void;
        setInt(a0: int, a1: int): void;
        setInt(a0: string, a1: int): void;
        setLong(a0: int, a1: long): void;
        setLong(a0: string, a1: long): void;
        setMaxFieldSize(a0: int): void;
        setMaxRows(a0: int): void;
        setNCharacterStream(a0: int, a1: java.io.Reader): void;
        setNCharacterStream(a0: int, a1: java.io.Reader, a2: long): void;
        setNCharacterStream(a0: string, a1: java.io.Reader, a2: long): void;
        setNCharacterStream(a0: string, a1: java.io.Reader): void;
        setNClob(a0: string, a1: java.sql.NClob): void;
        setNClob(a0: string, a1: java.io.Reader, a2: long): void;
        setNClob(a0: string, a1: java.io.Reader): void;
        setNClob(a0: int, a1: java.io.Reader, a2: long): void;
        setNClob(a0: int, a1: java.sql.NClob): void;
        setNClob(a0: int, a1: java.io.Reader): void;
        setNString(a0: int, a1: string): void;
        setNString(a0: string, a1: string): void;
        setNull(a0: int, a1: int): void;
        setNull(a0: string, a1: int): void;
        setNull(a0: int, a1: int, a2: string): void;
        setNull(a0: string, a1: int, a2: string): void;
        setObject(a0: int, a1: any, a2: int, a3: int): void;
        setObject(a0: string, a1: any, a2: int, a3: int): void;
        setObject(a0: int, a1: any, a2: int): void;
        setObject(a0: string, a1: any, a2: int): void;
        setObject(a0: string, a1: any): void;
        setObject(a0: int, a1: any): void;
        setPassword(a0: string): void;
        setQueryTimeout(a0: int): void;
        setReadOnly(a0: boolean): void;
        setRef(a0: int, a1: java.sql.Ref): void;
        setRowId(a0: int, a1: java.sql.RowId): void;
        setRowId(a0: string, a1: java.sql.RowId): void;
        setSQLXML(a0: int, a1: java.sql.SQLXML): void;
        setSQLXML(a0: string, a1: java.sql.SQLXML): void;
        setShort(a0: int, a1: short): void;
        setShort(a0: string, a1: short): void;
        setString(a0: int, a1: string): void;
        setString(a0: string, a1: string): void;
        setTime(a0: int, a1: java.sql.Time): void;
        setTime(a0: int, a1: java.sql.Time, a2: java.util.Calendar): void;
        setTime(a0: string, a1: java.sql.Time): void;
        setTime(a0: string, a1: java.sql.Time, a2: java.util.Calendar): void;
        setTimestamp(a0: int, a1: java.sql.Timestamp): void;
        setTimestamp(a0: string, a1: java.sql.Timestamp): void;
        setTimestamp(a0: int, a1: java.sql.Timestamp, a2: java.util.Calendar): void;
        setTimestamp(a0: string, a1: java.sql.Timestamp, a2: java.util.Calendar): void;
        setTransactionIsolation(a0: int): void;
        setType(a0: int): void;
        setTypeMap(a0: java.util.Map<string,java.lang.Class<any>>): void;
        setURL(a0: int, a1: java.net.URL): void;
        setUrl(a0: string): void;
        setUsername(a0: string): void;
      }
      interface RowSet extends CombineTypes<[_RowSet, java.sql.ResultSet, java.lang.Object]> {}
      interface _RowSetEvent$$static extends ClassLike {
        _serialVersionUID: long;
        new(source: RowSet): RowSetEvent;
      }
      let RowSetEvent: _RowSetEvent$$static;
      interface _RowSetEvent {
      }
      interface RowSetEvent extends CombineTypes<[_RowSetEvent, java.util.EventObject]> {}
      interface _RowSetInternal$$static extends ClassLike {
      }
      let RowSetInternal: _RowSetInternal$$static;
      interface _RowSetInternal {
        getConnection(): java.sql.Connection;
        getOriginal(): java.sql.ResultSet;
        getOriginalRow(): java.sql.ResultSet;
        getParams(): any[];
        setMetaData(a0: RowSetMetaData): void;
      }
      interface RowSetInternal extends CombineTypes<[_RowSetInternal, java.lang.Object]> {}
      interface _RowSetListener$$static extends ClassLike {
      }
      let RowSetListener: _RowSetListener$$static;
      interface _RowSetListener {
        cursorMoved(a0: RowSetEvent): void;
        rowChanged(a0: RowSetEvent): void;
        rowSetChanged(a0: RowSetEvent): void;
      }
      interface RowSetListener extends CombineTypes<[_RowSetListener, java.util.EventListener, java.lang.Object]> {}
      interface _RowSetMetaData$$static extends ClassLike {
      }
      let RowSetMetaData: _RowSetMetaData$$static;
      interface _RowSetMetaData {
        setAutoIncrement(a0: int, a1: boolean): void;
        setCaseSensitive(a0: int, a1: boolean): void;
        setCatalogName(a0: int, a1: string): void;
        setColumnCount(a0: int): void;
        setColumnDisplaySize(a0: int, a1: int): void;
        setColumnLabel(a0: int, a1: string): void;
        setColumnName(a0: int, a1: string): void;
        setColumnType(a0: int, a1: int): void;
        setColumnTypeName(a0: int, a1: string): void;
        setCurrency(a0: int, a1: boolean): void;
        setNullable(a0: int, a1: int): void;
        setPrecision(a0: int, a1: int): void;
        setScale(a0: int, a1: int): void;
        setSchemaName(a0: int, a1: string): void;
        setSearchable(a0: int, a1: boolean): void;
        setSigned(a0: int, a1: boolean): void;
        setTableName(a0: int, a1: string): void;
      }
      interface RowSetMetaData extends CombineTypes<[_RowSetMetaData, java.lang.Object, java.sql.ResultSetMetaData]> {}
      interface _RowSetReader$$static extends ClassLike {
      }
      let RowSetReader: _RowSetReader$$static;
      interface _RowSetReader {
        readData(a0: RowSetInternal): void;
(a0: RowSetInternal): void;
      }
      interface RowSetReader extends CombineTypes<[_RowSetReader, java.lang.Object]> {}
      interface _RowSetWriter$$static extends ClassLike {
      }
      let RowSetWriter: _RowSetWriter$$static;
      interface _RowSetWriter {
        writeData(a0: RowSetInternal): boolean;
(a0: RowSetInternal): boolean;
      }
      interface RowSetWriter extends CombineTypes<[_RowSetWriter, java.lang.Object]> {}
      interface _StatementEvent$$static extends ClassLike {
        _serialVersionUID: long;
        new(con: PooledConnection, statement: java.sql.PreparedStatement): StatementEvent;
        new(con: PooledConnection, statement: java.sql.PreparedStatement, exception: java.sql.SQLException): StatementEvent;
      }
      let StatementEvent: _StatementEvent$$static;
      interface _StatementEvent {
        getSQLException(): java.sql.SQLException;
        getStatement(): java.sql.PreparedStatement;
        _exception: java.sql.SQLException;
        _statement: java.sql.PreparedStatement;
      }
      interface StatementEvent extends CombineTypes<[_StatementEvent, java.util.EventObject]> {}
      interface _StatementEventListener$$static extends ClassLike {
      }
      let StatementEventListener: _StatementEventListener$$static;
      interface _StatementEventListener {
        statementClosed(a0: StatementEvent): void;
        statementErrorOccurred(a0: StatementEvent): void;
      }
      interface StatementEventListener extends CombineTypes<[_StatementEventListener, java.util.EventListener, java.lang.Object]> {}
      interface _XAConnection$$static extends ClassLike {
      }
      let XAConnection: _XAConnection$$static;
      interface _XAConnection {
        getXAResource(): javax.transaction.xa.XAResource;
(): javax.transaction.xa.XAResource;
      }
      interface XAConnection extends CombineTypes<[_XAConnection, java.lang.Object, javax.sql.PooledConnection]> {}
      interface _XAConnectionBuilder$$static extends ClassLike {
      }
      let XAConnectionBuilder: _XAConnectionBuilder$$static;
      interface _XAConnectionBuilder {
        build(): XAConnection;
        password(a0: string): XAConnectionBuilder;
        shardingKey(a0: java.sql.ShardingKey): XAConnectionBuilder;
        superShardingKey(a0: java.sql.ShardingKey): XAConnectionBuilder;
        user(a0: string): XAConnectionBuilder;
      }
      interface XAConnectionBuilder extends CombineTypes<[_XAConnectionBuilder, java.lang.Object]> {}
      interface _XADataSource$$static extends ClassLike {
      }
      let XADataSource: _XADataSource$$static;
      interface _XADataSource {
        createXAConnectionBuilder(): XAConnectionBuilder;
        getLogWriter(): java.io.PrintWriter;
        getLoginTimeout(): int;
        getXAConnection(): XAConnection;
        getXAConnection(a0: string, a1: string): XAConnection;
        setLogWriter(a0: java.io.PrintWriter): void;
        setLoginTimeout(a0: int): void;
      }
      interface XADataSource extends CombineTypes<[_XADataSource, javax.sql.CommonDataSource, java.lang.Object]> {}
    }
  }
}
