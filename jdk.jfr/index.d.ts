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
    module jfr {
      module consumer {
        interface _EventStream$$static extends ClassLike {
          openFile(file: java.nio.file.Path): EventStream;
          openRepository(): EventStream;
          openRepository(directory: java.nio.file.Path): EventStream;
        }
        let EventStream: _EventStream$$static;
        interface _EventStream {
          awaitTermination(a0: java.time.Duration): void;
          awaitTermination(): void;
          close(): void;
          onClose(a0: java.lang.Runnable): void;
          onError(a0: java.util.function.Consumer<java.lang.Throwable>): void;
          onEvent(a0: java.util.function.Consumer<RecordedEvent>): void;
          onEvent(a0: string, a1: java.util.function.Consumer<RecordedEvent>): void;
          onFlush(a0: java.lang.Runnable): void;
          onMetadata(action: java.util.function.Consumer<MetadataEvent>): void;
          remove(a0: any): boolean;
          setEndTime(a0: java.time.Instant): void;
          setOrdered(a0: boolean): void;
          setReuse(a0: boolean): void;
          setStartTime(a0: java.time.Instant): void;
          start(): void;
          startAsync(): void;
        }
        interface EventStream extends CombineTypes<[_EventStream, java.lang.Object, java.lang.AutoCloseable]> {}
        interface _MetadataEvent$$static extends ClassLike {
          _new(previous: java.util.List<EventType>, current: java.util.List<EventType>, configs: java.util.List<Configuration>): MetadataEvent;
        }
        let MetadataEvent: _MetadataEvent$$static;
        interface _MetadataEvent {
          _calculateDelta(): void;
          getAddedEventTypes(): java.util.List<EventType>;
          getConfigurations(): java.util.List<Configuration>;
          getEventTypes(): java.util.List<EventType>;
          getRemovedEventTypes(): java.util.List<EventType>;
          _added: java.util.List<EventType>;
          _configurations: java.util.List<Configuration>;
          _current: java.util.List<EventType>;
          _previous: java.util.List<EventType>;
          _removed: java.util.List<EventType>;
        }
        interface MetadataEvent extends CombineTypes<[_MetadataEvent, java.lang.Object]> {}
        interface _RecordedClass$$static extends ClassLike {
          _new(objectContext: jfr.internal.consumer.ObjectContext, id: long, a2: any[]): RecordedClass;
        }
        let RecordedClass: _RecordedClass$$static;
        interface _RecordedClass {
          getClassLoader(): RecordedClassLoader;
          getId(): long;
          getModifiers(): int;
          getName(): string;
          _uniqueId: long;
        }
        interface RecordedClass extends CombineTypes<[_RecordedClass, jdk.jfr.consumer.RecordedObject]> {}
        interface _RecordedClassLoader$$static extends ClassLike {
          _new(objectContext: jfr.internal.consumer.ObjectContext, id: long, a2: any[]): RecordedClassLoader;
        }
        let RecordedClassLoader: _RecordedClassLoader$$static;
        interface _RecordedClassLoader {
          getId(): long;
          getName(): string;
          getType(): RecordedClass;
          _uniqueId: long;
        }
        interface RecordedClassLoader extends CombineTypes<[_RecordedClassLoader, jdk.jfr.consumer.RecordedObject]> {}
        interface _RecordedEvent$$static extends ClassLike {
          _new(objectContext: jfr.internal.consumer.ObjectContext, values: any[], startTimeTicks: long, a3: long): RecordedEvent;
        }
        let RecordedEvent: _RecordedEvent$$static;
        interface _RecordedEvent {
          getDuration(): java.time.Duration;
          getEndTime(): java.time.Instant;
          _getEndTimeNanos(): long;
          getEventType(): EventType;
          getFields(): java.util.List<ValueDescriptor>;
          getStackTrace(): RecordedStackTrace;
          getStartTime(): java.time.Instant;
          _getStartTimeNanos(): long;
          getThread(): RecordedThread;
          _hasDuration(): boolean;
          _objectAt(index: int): any;
          _endTimeTicks: long;
          _startTimeTicks: long;
        }
        interface RecordedEvent extends CombineTypes<[_RecordedEvent, jdk.jfr.consumer.RecordedObject]> {}
        interface _RecordedFrame$$static extends ClassLike {
          _new(objectContext: jfr.internal.consumer.ObjectContext, values: any[]): RecordedFrame;
        }
        let RecordedFrame: _RecordedFrame$$static;
        interface _RecordedFrame {
          getBytecodeIndex(): int;
          getLineNumber(): int;
          getMethod(): RecordedMethod;
          getType(): string;
          isJavaFrame(): boolean;
        }
        interface RecordedFrame extends CombineTypes<[_RecordedFrame, jdk.jfr.consumer.RecordedObject]> {}
        interface _RecordedMethod$$static extends ClassLike {
          _new(objectContext: jfr.internal.consumer.ObjectContext, values: any[]): RecordedMethod;
        }
        let RecordedMethod: _RecordedMethod$$static;
        interface _RecordedMethod {
          getDescriptor(): string;
          getModifiers(): int;
          getName(): string;
          getType(): RecordedClass;
          isHidden(): boolean;
        }
        interface RecordedMethod extends CombineTypes<[_RecordedMethod, jdk.jfr.consumer.RecordedObject]> {}
        interface _RecordedObject$$static extends ClassLike {
          _newIllegalArgumentException(name: string, typeName: string): java.lang.IllegalArgumentException;
          _new(objectContext: jfr.internal.consumer.ObjectContext, objects: any[]): RecordedObject;
        }
        let RecordedObject: _RecordedObject$$static;
        interface _RecordedObject {
          getBoolean(name: string): boolean;
          getByte(name: string): byte;
          getChar(name: string): char;
          getClass(name: string): RecordedClass;
          getDouble(name: string): double;
          getDuration(name: string): java.time.Duration;
          _getDuration(timespan: long, a1: string): java.time.Duration;
          getFields(): java.util.List<ValueDescriptor>;
          getFloat(name: string): float;
          getInstant(name: string): java.time.Instant;
          _getInstant(timestamp: long, a1: string): java.time.Instant;
          getInt(name: string): int;
          getLong(name: string): long;
          _getOffsetDateTime(name: string): java.time.OffsetDateTime;
          getShort(name: string): short;
          getString(name: string): string;
          getThread(name: string): RecordedThread;
          _getTyped<T>(name: string, clazz: java.lang.Class<T>, defaultValue: T): T;
          _getTypedValue<T>(name: string, typeName: string): T;
          getValue<T>(name: string): T;
          _getValue(name: string, allowUnsigned: boolean): any;
          _getValueDescriptor(descriptors: java.util.List<ValueDescriptor>, name: string, leafType: string): ValueDescriptor;
          hasField(name: string): boolean;
          _isStackFrameType(typeName: string): boolean;
          _objectAt(index: int): any;
          _structifyArray(v: ValueDescriptor, array: any[], dimension: int): any[];
          toString(): string;
          _objectContext: jfr.internal.consumer.ObjectContext;
          _objects: any[];
        }
        interface RecordedObject extends CombineTypes<[_RecordedObject, java.lang.Object]> {}
        interface _RecordedObject$UnsignedValue$$static extends ClassLike {
        }
        let RecordedObject$UnsignedValue: _RecordedObject$UnsignedValue$$static;
        interface _RecordedObject$UnsignedValue {
          equals(o: any): boolean;
          hashCode(): int;
          toString(): string;
          value(): any;
        }
        interface RecordedObject$UnsignedValue extends CombineTypes<[_RecordedObject$UnsignedValue, java.lang.Record]> {}
        interface _RecordedStackTrace$$static extends ClassLike {
          _new(objectContext: jfr.internal.consumer.ObjectContext, values: any[]): RecordedStackTrace;
        }
        let RecordedStackTrace: _RecordedStackTrace$$static;
        interface _RecordedStackTrace {
          getFrames(): java.util.List<RecordedFrame>;
          isTruncated(): boolean;
        }
        interface RecordedStackTrace extends CombineTypes<[_RecordedStackTrace, jdk.jfr.consumer.RecordedObject]> {}
        interface _RecordedThread$$static extends ClassLike {
          _new(objectContext: jfr.internal.consumer.ObjectContext, id: long, a2: any[]): RecordedThread;
        }
        let RecordedThread: _RecordedThread$$static;
        interface _RecordedThread {
          getId(): long;
          getJavaName(): string;
          getJavaThreadId(): long;
          getOSName(): string;
          getOSThreadId(): long;
          getThreadGroup(): RecordedThreadGroup;
          isVirtual(): boolean;
          _uniqueId: long;
        }
        interface RecordedThread extends CombineTypes<[_RecordedThread, jdk.jfr.consumer.RecordedObject]> {}
        interface _RecordedThreadGroup$$static extends ClassLike {
          _new(objectContext: jfr.internal.consumer.ObjectContext, values: any[]): RecordedThreadGroup;
        }
        let RecordedThreadGroup: _RecordedThreadGroup$$static;
        interface _RecordedThreadGroup {
          getName(): string;
          getParent(): RecordedThreadGroup;
        }
        interface RecordedThreadGroup extends CombineTypes<[_RecordedThreadGroup, jdk.jfr.consumer.RecordedObject]> {}
        interface _RecordingFile$$static extends ClassLike {
          _aggregateEventTypeForChunk(ch: jfr.internal.consumer.ChunkHeader, previous: jfr.internal.MetadataDescriptor, types: java.util.List<EventType>, foundIds: java.util.HashSet<long>): jfr.internal.MetadataDescriptor;
          readAllEvents(path: java.nio.file.Path): java.util.List<RecordedEvent>;
          new(file: java.nio.file.Path): RecordingFile;
        }
        let RecordingFile: _RecordingFile$$static;
        interface _RecordingFile {
          _aggregateTypeForChunk(ch: jfr.internal.consumer.ChunkHeader, previous: jfr.internal.MetadataDescriptor, types: java.util.List<jfr.internal.Type>, foundIds: java.util.HashSet<long>): jfr.internal.MetadataDescriptor;
          close(): void;
          _createChunkParser(): jfr.internal.consumer.ChunkParser;
          _endChunkParser(): void;
          _ensureOpen(): void;
          _findNext(): void;
          _getFile(): java.io.File;
          hasMoreEvents(): boolean;
          _isLastEventInChunk(): boolean;
          _nextChunkParser(): jfr.internal.consumer.ChunkParser;
          readEvent(): RecordedEvent;
          readEventTypes(): java.util.List<EventType>;
          _readTypes(): java.util.List<jfr.internal.Type>;
          write(destination: java.nio.file.Path, filter: java.util.function.Predicate<RecordedEvent>): void;
          _chunkParser: jfr.internal.consumer.ChunkParser;
          _chunkWriter: jfr.internal.consumer.filter.ChunkWriter;
          _eof: boolean;
          _file: java.io.File;
          _input: jfr.internal.consumer.RecordingInput;
          _isLastEventInChunk: boolean;
          _nextEvent: RecordedEvent;
          _parserState: jfr.internal.consumer.ParserState;
        }
        interface RecordingFile extends CombineTypes<[_RecordingFile, java.io.Closeable, java.lang.Object]> {}
        interface _RecordingStream$$static extends ClassLike {
          new(): RecordingStream;
          new(configuration: Configuration): RecordingStream;
        }
        let RecordingStream: _RecordingStream$$static;
        interface _RecordingStream {
          awaitTermination(timeout: java.time.Duration): void;
          awaitTermination(): void;
          close(): void;
          _configurations(): java.util.List<Configuration>;
          disable(name: string): EventSettings;
          disable(eventClass: java.lang.Class<Event>): EventSettings;
          dump(destination: java.nio.file.Path): void;
          enable(name: string): EventSettings;
          enable(eventClass: java.lang.Class<Event>): EventSettings;
          onClose(action: java.lang.Runnable): void;
          onError(action: java.util.function.Consumer<java.lang.Throwable>): void;
          onEvent(eventName: string, action: java.util.function.Consumer<RecordedEvent>): void;
          onEvent(action: java.util.function.Consumer<RecordedEvent>): void;
          onFlush(action: java.lang.Runnable): void;
          onMetadata(action: java.util.function.Consumer<MetadataEvent>): void;
          remove(action: any): boolean;
          setEndTime(endTime: java.time.Instant): void;
          setMaxAge(maxAge: java.time.Duration): void;
          setMaxSize(maxSize: long): void;
          setOrdered(ordered: boolean): void;
          setReuse(reuse: boolean): void;
          setSettings(settings: java.util.Map<string,string>): void;
          setStartTime(startTime: java.time.Instant): void;
          start(): void;
          startAsync(): void;
          stop(): boolean;
          _updateOnCompleteHandler(): void;
          _creationTime: java.time.Instant;
          _directoryStream: jfr.internal.consumer.EventDirectoryStream;
          _maxAge: java.time.Duration;
          _maxSize: long;
          _recording: Recording;
        }
        interface RecordingStream extends CombineTypes<[_RecordingStream, java.lang.Object, java.lang.AutoCloseable, jdk.jfr.consumer.EventStream]> {}
        interface _RecordingStream$ChunkConsumer$$static extends ClassLike {
          _new(recording: Recording): RecordingStream$ChunkConsumer;
        }
        let RecordingStream$ChunkConsumer: _RecordingStream$ChunkConsumer$$static;
        interface _RecordingStream$ChunkConsumer {
          accept(endNanos: long): void;
          accept(a0: any): void;
          _recording: Recording;
        }
        interface RecordingStream$ChunkConsumer extends CombineTypes<[_RecordingStream$ChunkConsumer, java.util.function.Consumer<long>, java.lang.Object]> {}
      }
      module events {
        interface _AbstractBufferStatisticsEvent$$static extends ClassLike {
          _findPoolByName(name: string): jdk.internal.misc.VM$BufferPool;
          _new(bufferPool: jdk.internal.misc.VM$BufferPool): AbstractBufferStatisticsEvent;
        }
        let AbstractBufferStatisticsEvent: _AbstractBufferStatisticsEvent$$static;
        interface _AbstractBufferStatisticsEvent {
          _count: long;
          _memoryUsed: long;
          _totalCapacity: long;
        }
        interface AbstractBufferStatisticsEvent extends CombineTypes<[_AbstractBufferStatisticsEvent, jdk.jfr.events.AbstractJDKEvent]> {}
        interface _AbstractJDKEvent$$static extends ClassLike {
          _new(): AbstractJDKEvent;
        }
        let AbstractJDKEvent: _AbstractJDKEvent$$static;
        interface _AbstractJDKEvent {
        }
        interface AbstractJDKEvent extends CombineTypes<[_AbstractJDKEvent, jdk.jfr.Event]> {}
        interface _ActiveRecordingEvent$$static extends ClassLike {
          commit(timestamp: long, a1: long, duration: long, a3: string, id: string, a5: boolean, name: long, destination: long, disk: long, maxAge: long, a10: long): void;
          enabled(): boolean;
          new(): ActiveRecordingEvent;
        }
        let ActiveRecordingEvent: _ActiveRecordingEvent$$static;
        interface _ActiveRecordingEvent {
          destination: string;
          disk: boolean;
          flushInterval: long;
          id: long;
          maxAge: long;
          maxSize: long;
          name: string;
          recordingDuration: long;
          recordingStart: long;
        }
        interface ActiveRecordingEvent extends CombineTypes<[_ActiveRecordingEvent, jdk.jfr.events.AbstractJDKEvent]> {}
        interface _ActiveSettingEvent$$static extends ClassLike {
          commit(startTime: long, a1: long, duration: long, a3: string, id: string): void;
          enabled(): boolean;
          new(): ActiveSettingEvent;
        }
        let ActiveSettingEvent: _ActiveSettingEvent$$static;
        interface _ActiveSettingEvent {
          id: long;
          name: string;
          value: string;
        }
        interface ActiveSettingEvent extends CombineTypes<[_ActiveSettingEvent, jdk.jfr.events.AbstractJDKEvent]> {}
        interface _CertificateId$$static extends ClassLike {
        }
        let CertificateId: _CertificateId$$static;
        interface _CertificateId {
        }
        interface CertificateId extends CombineTypes<[_CertificateId, java.lang.annotation.Annotation, java.lang.Object]> {}
        interface _ContainerCPUThrottlingEvent$$static extends ClassLike {
          new(): ContainerCPUThrottlingEvent;
        }
        let ContainerCPUThrottlingEvent: _ContainerCPUThrottlingEvent$$static;
        interface _ContainerCPUThrottlingEvent {
          cpuElapsedSlices: long;
          cpuThrottledSlices: long;
          cpuThrottledTime: long;
        }
        interface ContainerCPUThrottlingEvent extends CombineTypes<[_ContainerCPUThrottlingEvent, jdk.jfr.events.AbstractJDKEvent]> {}
        interface _ContainerCPUUsageEvent$$static extends ClassLike {
          new(): ContainerCPUUsageEvent;
        }
        let ContainerCPUUsageEvent: _ContainerCPUUsageEvent$$static;
        interface _ContainerCPUUsageEvent {
          cpuSystemTime: long;
          cpuTime: long;
          cpuUserTime: long;
        }
        interface ContainerCPUUsageEvent extends CombineTypes<[_ContainerCPUUsageEvent, jdk.jfr.events.AbstractJDKEvent]> {}
        interface _ContainerConfigurationEvent$$static extends ClassLike {
          new(): ContainerConfigurationEvent;
        }
        let ContainerConfigurationEvent: _ContainerConfigurationEvent$$static;
        interface _ContainerConfigurationEvent {
          containerType: string;
          cpuQuota: long;
          cpuShares: long;
          cpuSlicePeriod: long;
          effectiveCpuCount: long;
          hostTotalMemory: long;
          memoryLimit: long;
          memorySoftLimit: long;
          swapMemoryLimit: long;
        }
        interface ContainerConfigurationEvent extends CombineTypes<[_ContainerConfigurationEvent, jdk.jfr.events.AbstractJDKEvent]> {}
        interface _ContainerIOUsageEvent$$static extends ClassLike {
          new(): ContainerIOUsageEvent;
        }
        let ContainerIOUsageEvent: _ContainerIOUsageEvent$$static;
        interface _ContainerIOUsageEvent {
          dataTransferred: long;
          serviceRequests: long;
        }
        interface ContainerIOUsageEvent extends CombineTypes<[_ContainerIOUsageEvent, jdk.jfr.events.AbstractJDKEvent]> {}
        interface _ContainerMemoryUsageEvent$$static extends ClassLike {
          new(): ContainerMemoryUsageEvent;
        }
        let ContainerMemoryUsageEvent: _ContainerMemoryUsageEvent$$static;
        interface _ContainerMemoryUsageEvent {
          memoryFailCount: long;
          memoryUsage: long;
          swapMemoryUsage: long;
        }
        interface ContainerMemoryUsageEvent extends CombineTypes<[_ContainerMemoryUsageEvent, jdk.jfr.events.AbstractJDKEvent]> {}
        interface _DeserializationEvent$$static extends ClassLike {
          new(): DeserializationEvent;
        }
        let DeserializationEvent: _DeserializationEvent$$static;
        interface _DeserializationEvent {
          arrayLength: int;
          bytesRead: long;
          depth: long;
          exceptionMessage: string;
          exceptionType: java.lang.Class<any>;
          filterConfigured: boolean;
          filterStatus: string;
          objectReferences: long;
          type: java.lang.Class<any>;
        }
        interface DeserializationEvent extends CombineTypes<[_DeserializationEvent, jdk.jfr.events.AbstractJDKEvent]> {}
        interface _DirectBufferStatisticsEvent$$static extends ClassLike {
          _DIRECT_BUFFER_POOL: jdk.internal.misc.VM$BufferPool;
          new(): DirectBufferStatisticsEvent;
        }
        let DirectBufferStatisticsEvent: _DirectBufferStatisticsEvent$$static;
        interface _DirectBufferStatisticsEvent {
          _maxCapacity: long;
        }
        interface DirectBufferStatisticsEvent extends CombineTypes<[_DirectBufferStatisticsEvent, jdk.jfr.events.AbstractBufferStatisticsEvent]> {}
        interface _ErrorThrownEvent$$static extends ClassLike {
          commit(start: long, a1: long, duration: string, a3: java.lang.Class<java.lang.Error>): void;
          new(): ErrorThrownEvent;
        }
        let ErrorThrownEvent: _ErrorThrownEvent$$static;
        interface _ErrorThrownEvent {
          message: string;
          thrownClass: java.lang.Class<any>;
        }
        interface ErrorThrownEvent extends CombineTypes<[_ErrorThrownEvent, jdk.jfr.events.AbstractJDKEvent]> {}
        interface _EventConfigurations$$static extends ClassLike {
          readonly ERROR_THROWN: jfr.internal.event.EventConfiguration;
          readonly EXCEPTION_THROWN: jfr.internal.event.EventConfiguration;
          readonly FILE_FORCE: jfr.internal.event.EventConfiguration;
          readonly FILE_READ: jfr.internal.event.EventConfiguration;
          readonly FILE_WRITE: jfr.internal.event.EventConfiguration;
          readonly SOCKET_READ: jfr.internal.event.EventConfiguration;
          readonly SOCKET_WRITE: jfr.internal.event.EventConfiguration;
          new(): EventConfigurations;
        }
        let EventConfigurations: _EventConfigurations$$static;
        interface _EventConfigurations {
        }
        interface EventConfigurations extends CombineTypes<[_EventConfigurations, java.lang.Object]> {}
        interface _ExceptionStatisticsEvent$$static extends ClassLike {
          new(): ExceptionStatisticsEvent;
        }
        let ExceptionStatisticsEvent: _ExceptionStatisticsEvent$$static;
        interface _ExceptionStatisticsEvent {
          throwables: long;
        }
        interface ExceptionStatisticsEvent extends CombineTypes<[_ExceptionStatisticsEvent, jdk.jfr.events.AbstractJDKEvent]> {}
        interface _ExceptionThrownEvent$$static extends ClassLike {
          commit(start: long, a1: long, duration: string, a3: java.lang.Class<java.lang.Throwable>): void;
          new(): ExceptionThrownEvent;
        }
        let ExceptionThrownEvent: _ExceptionThrownEvent$$static;
        interface _ExceptionThrownEvent {
          message: string;
          thrownClass: java.lang.Class<any>;
        }
        interface ExceptionThrownEvent extends CombineTypes<[_ExceptionThrownEvent, jdk.jfr.events.AbstractJDKEvent]> {}
        interface _FileForceEvent$$static extends ClassLike {
          commit(start: long, a1: long, duration: string, a3: boolean): void;
          new(): FileForceEvent;
        }
        let FileForceEvent: _FileForceEvent$$static;
        interface _FileForceEvent {
          metaData: boolean;
          path: string;
        }
        interface FileForceEvent extends CombineTypes<[_FileForceEvent, jdk.jfr.events.AbstractJDKEvent]> {}
        interface _FileReadEvent$$static extends ClassLike {
          commit(start: long, a1: long, duration: string, a3: long, path: boolean): void;
          new(): FileReadEvent;
        }
        let FileReadEvent: _FileReadEvent$$static;
        interface _FileReadEvent {
          bytesRead: long;
          endOfFile: boolean;
          path: string;
        }
        interface FileReadEvent extends CombineTypes<[_FileReadEvent, jdk.jfr.events.AbstractJDKEvent]> {}
        interface _FileWriteEvent$$static extends ClassLike {
          commit(start: long, a1: long, duration: string, a3: long): void;
          new(): FileWriteEvent;
        }
        let FileWriteEvent: _FileWriteEvent$$static;
        interface _FileWriteEvent {
          bytesWritten: long;
          path: string;
        }
        interface FileWriteEvent extends CombineTypes<[_FileWriteEvent, jdk.jfr.events.AbstractJDKEvent]> {}
        interface _InitialSecurityPropertyEvent$$static extends ClassLike {
          new(): InitialSecurityPropertyEvent;
        }
        let InitialSecurityPropertyEvent: _InitialSecurityPropertyEvent$$static;
        interface _InitialSecurityPropertyEvent {
          key: string;
          value: string;
        }
        interface InitialSecurityPropertyEvent extends CombineTypes<[_InitialSecurityPropertyEvent, jdk.jfr.events.AbstractJDKEvent]> {}
        interface _ProcessStartEvent$$static extends ClassLike {
          new(): ProcessStartEvent;
        }
        let ProcessStartEvent: _ProcessStartEvent$$static;
        interface _ProcessStartEvent {
          command: string;
          directory: string;
          pid: long;
        }
        interface ProcessStartEvent extends CombineTypes<[_ProcessStartEvent, jdk.jfr.events.AbstractJDKEvent]> {}
        interface _SecurityPropertyModificationEvent$$static extends ClassLike {
          new(): SecurityPropertyModificationEvent;
        }
        let SecurityPropertyModificationEvent: _SecurityPropertyModificationEvent$$static;
        interface _SecurityPropertyModificationEvent {
          key: string;
          value: string;
        }
        interface SecurityPropertyModificationEvent extends CombineTypes<[_SecurityPropertyModificationEvent, jdk.jfr.events.AbstractJDKEvent]> {}
        interface _SecurityProviderServiceEvent$$static extends ClassLike {
          new(): SecurityProviderServiceEvent;
        }
        let SecurityProviderServiceEvent: _SecurityProviderServiceEvent$$static;
        interface _SecurityProviderServiceEvent {
          algorithm: string;
          provider: string;
          type: string;
        }
        interface SecurityProviderServiceEvent extends CombineTypes<[_SecurityProviderServiceEvent, jdk.jfr.events.AbstractJDKEvent]> {}
        interface _SocketReadEvent$$static extends ClassLike {
          commit(start: long, a1: long, duration: string, a3: string, host: int, address: long, port: long, timeout: boolean): void;
          new(): SocketReadEvent;
        }
        let SocketReadEvent: _SocketReadEvent$$static;
        interface _SocketReadEvent {
          address: string;
          bytesRead: long;
          endOfStream: boolean;
          host: string;
          port: int;
          timeout: long;
        }
        interface SocketReadEvent extends CombineTypes<[_SocketReadEvent, jdk.jfr.events.AbstractJDKEvent]> {}
        interface _SocketWriteEvent$$static extends ClassLike {
          commit(start: long, a1: long, duration: string, a3: string, host: int, address: long): void;
          new(): SocketWriteEvent;
        }
        let SocketWriteEvent: _SocketWriteEvent$$static;
        interface _SocketWriteEvent {
          address: string;
          bytesWritten: long;
          host: string;
          port: int;
        }
        interface SocketWriteEvent extends CombineTypes<[_SocketWriteEvent, jdk.jfr.events.AbstractJDKEvent]> {}
        interface _TLSHandshakeEvent$$static extends ClassLike {
          new(): TLSHandshakeEvent;
        }
        let TLSHandshakeEvent: _TLSHandshakeEvent$$static;
        interface _TLSHandshakeEvent {
          certificateId: long;
          cipherSuite: string;
          peerHost: string;
          peerPort: int;
          protocolVersion: string;
        }
        interface TLSHandshakeEvent extends CombineTypes<[_TLSHandshakeEvent, jdk.jfr.events.AbstractJDKEvent]> {}
        interface _ThreadSleepEvent$$static extends ClassLike {
          new(): ThreadSleepEvent;
        }
        let ThreadSleepEvent: _ThreadSleepEvent$$static;
        interface _ThreadSleepEvent {
          time: long;
        }
        interface ThreadSleepEvent extends CombineTypes<[_ThreadSleepEvent, jdk.jfr.events.AbstractJDKEvent]> {}
        interface _VirtualThreadEndEvent$$static extends ClassLike {
          new(): VirtualThreadEndEvent;
        }
        let VirtualThreadEndEvent: _VirtualThreadEndEvent$$static;
        interface _VirtualThreadEndEvent {
          javaThreadId: long;
        }
        interface VirtualThreadEndEvent extends CombineTypes<[_VirtualThreadEndEvent, jdk.jfr.events.AbstractJDKEvent]> {}
        interface _VirtualThreadPinnedEvent$$static extends ClassLike {
          new(): VirtualThreadPinnedEvent;
        }
        let VirtualThreadPinnedEvent: _VirtualThreadPinnedEvent$$static;
        interface _VirtualThreadPinnedEvent {
        }
        interface VirtualThreadPinnedEvent extends CombineTypes<[_VirtualThreadPinnedEvent, jdk.jfr.events.AbstractJDKEvent]> {}
        interface _VirtualThreadStartEvent$$static extends ClassLike {
          new(): VirtualThreadStartEvent;
        }
        let VirtualThreadStartEvent: _VirtualThreadStartEvent$$static;
        interface _VirtualThreadStartEvent {
          javaThreadId: long;
        }
        interface VirtualThreadStartEvent extends CombineTypes<[_VirtualThreadStartEvent, jdk.jfr.events.AbstractJDKEvent]> {}
        interface _VirtualThreadSubmitFailedEvent$$static extends ClassLike {
          new(): VirtualThreadSubmitFailedEvent;
        }
        let VirtualThreadSubmitFailedEvent: _VirtualThreadSubmitFailedEvent$$static;
        interface _VirtualThreadSubmitFailedEvent {
          exceptionMessage: string;
          javaThreadId: long;
        }
        interface VirtualThreadSubmitFailedEvent extends CombineTypes<[_VirtualThreadSubmitFailedEvent, jdk.jfr.events.AbstractJDKEvent]> {}
        interface _X509CertificateEvent$$static extends ClassLike {
          new(): X509CertificateEvent;
        }
        let X509CertificateEvent: _X509CertificateEvent$$static;
        interface _X509CertificateEvent {
          algorithm: string;
          certificateId: long;
          issuer: string;
          keyLength: int;
          keyType: string;
          serialNumber: string;
          subject: string;
          validFrom: long;
          validUntil: long;
        }
        interface X509CertificateEvent extends CombineTypes<[_X509CertificateEvent, jdk.jfr.events.AbstractJDKEvent]> {}
        interface _X509ValidationEvent$$static extends ClassLike {
          new(): X509ValidationEvent;
        }
        let X509ValidationEvent: _X509ValidationEvent$$static;
        interface _X509ValidationEvent {
          certificateId: long;
          certificatePosition: int;
          validationCounter: long;
        }
        interface X509ValidationEvent extends CombineTypes<[_X509ValidationEvent, jdk.jfr.events.AbstractJDKEvent]> {}
      }
      module internal {
        module consumer {
          module filter {
            interface _CheckpointEvent$$static extends ClassLike {
              new(chunkWriter: ChunkWriter, startPosition: long): CheckpointEvent;
            }
            let CheckpointEvent: _CheckpointEvent$$static;
            interface _CheckpointEvent {
              addEntry(type: Type, id: long, a2: long, startPosition: long, a4: any): PoolEntry;
              getPools(): java.util.Collection<CheckpointPool>;
              getStartPosition(): long;
              toString(): string;
              touchedPools(): long;
              _chunkWriter: ChunkWriter;
              _pools: java.util.LinkedHashMap<long,CheckpointPool>;
              _startPosition: long;
            }
            interface CheckpointEvent extends CombineTypes<[_CheckpointEvent, java.lang.Object]> {}
            interface _CheckpointPool$$static extends ClassLike {
              new(typeId: long): CheckpointPool;
            }
            let CheckpointPool: _CheckpointPool$$static;
            interface _CheckpointPool {
              add(pe: PoolEntry): void;
              getEntries(): java.util.List<PoolEntry>;
              getTouchedCount(): long;
              getTypeId(): long;
              isTouched(): boolean;
              _entries: java.util.List<PoolEntry>;
              _typeId: long;
            }
            interface CheckpointPool extends CombineTypes<[_CheckpointPool, java.lang.Object]> {}
            interface _ChunkWriter$$static extends ClassLike {
              new(source: java.nio.file.Path, destination: java.nio.file.Path, filter: java.util.function.Predicate<jfr.consumer.RecordedEvent>): ChunkWriter;
            }
            let ChunkWriter: _ChunkWriter$$static;
            interface _ChunkWriter {
              accept(event: jfr.consumer.RecordedEvent): boolean;
              beginChunk(header: ChunkHeader): void;
              close(): void;
              endChunk(header: ChunkHeader): void;
              getInput(): RecordingInput;
              _getPool(type: Type): Constants;
              newCheckpointEvent(startPosition: long): CheckpointEvent;
              touch(object: any): void;
              _touchRef(ref: Reference): void;
              _updateHeader(size: long, a1: long, constantPosition: long): void;
              write(startPosition: long, a1: long): void;
              _write(event: CheckpointEvent, delta: long): void;
              _writeCheckpointEvents(before: long): void;
              writeEvent(startPosition: long, a1: long): void;
              _writeMetadataEvent(header: ChunkHeader): void;
              _checkpoints: java.util.Deque<CheckpointEvent>;
              _chunkComplete: boolean;
              _chunkStartPosition: long;
              _destination: java.nio.file.Path;
              _filter: java.util.function.Predicate<jfr.consumer.RecordedEvent>;
              _input: RecordingInput;
              _lastCheckpoint: long;
              _output: RecordingOutput;
              _pools: LongMap<Constants>;
            }
            interface ChunkWriter extends CombineTypes<[_ChunkWriter, java.io.Closeable, java.lang.Object]> {}
            interface _Constants$$static extends ClassLike {
              new(type: Type): Constants;
            }
            let Constants: _Constants$$static;
            interface _Constants {
              add(key: long, a1: PoolEntry): void;
              get(key: long): PoolEntry;
              toString(): string;
              _table: LongMap<PoolEntry>;
              _type: Type;
            }
            interface Constants extends CombineTypes<[_Constants, java.lang.Object]> {}
            interface _PoolEntry$$static extends ClassLike {
              _new(startPosition: long, a1: long, endPosition: Type, a3: long, type: any): PoolEntry;
            }
            let PoolEntry: _PoolEntry$$static;
            interface _PoolEntry {
              getEndPosition(): long;
              getId(): long;
              getReferences(): any;
              getStartPosition(): long;
              getType(): Type;
              isTouched(): boolean;
              toString(): string;
              touch(): void;
              _endPosition: long;
              _keyId: long;
              _references: any;
              _startPosition: long;
              _touched: boolean;
              _type: Type;
            }
            interface PoolEntry extends CombineTypes<[_PoolEntry, java.lang.Object]> {}
            interface _RecordingOutput$$static extends ClassLike {
              new(file: java.io.File): RecordingOutput;
            }
            let RecordingOutput: _RecordingOutput$$static;
            interface _RecordingOutput {
              close(): void;
              flush(): void;
              position(pos: long): void;
              position(): long;
              writeByte(value: byte): void;
              writeLong(v: long): void;
              writePaddedUnsignedInt(value: long): void;
              writeRawLong(v: long): void;
              _buffer: byte[];
              _bufferPosition: int;
              _file: java.io.RandomAccessFile;
              _position: long;
            }
            interface RecordingOutput extends CombineTypes<[_RecordingOutput, java.io.Closeable, java.lang.Object]> {}
          }
          interface _AbstractEventStream$$static extends ClassLike {
            _counter: java.util.concurrent.atomic.AtomicLong;
            _new(acc: java.security.AccessControlContext, configurations: java.util.List<Configuration>): AbstractEventStream;
          }
          let AbstractEventStream: _AbstractEventStream$$static;
          interface _AbstractEventStream {
            awaitTermination(): void;
            awaitTermination(timeout: java.time.Duration): void;
            close(): void;
            _closeParser(): void;
            _dispatcher(): Dispatcher;
            _execute(): void;
            _getFlushOperation(): java.lang.Runnable;
            _isClosed(): boolean;
            _isRecording(): boolean;
            _nextThreadName(): string;
            onClose(action: java.lang.Runnable): void;
            onError(action: java.util.function.Consumer<java.lang.Throwable>): void;
            onEvent(action: java.util.function.Consumer<jfr.consumer.RecordedEvent>): void;
            onEvent(eventName: string, action: java.util.function.Consumer<jfr.consumer.RecordedEvent>): void;
            onFlush(action: java.lang.Runnable): void;
            _onFlush(): void;
            onMetadata(action: java.util.function.Consumer<jfr.consumer.MetadataEvent>): void;
            _onMetadata(parser: ChunkParser): void;
            _parserState(): ParserState;
            _process(): void;
            remove(action: any): boolean;
            _run(accessControlContext: java.security.AccessControlContext): void;
            setCloseOnComplete(closeOnComplete: boolean): void;
            setDaemon(daemon: boolean): void;
            setEndTime(endTime: java.time.Instant): void;
            setOrdered(ordered: boolean): void;
            setReuse(reuse: boolean): void;
            setStartTime(startTime: java.time.Instant): void;
            start(): void;
            start(startNanos: long): void;
            startAsync(): void;
            startAsync(startNanos: long): void;
            _startInternal(startNanos: long): void;
            _accessControllerContext: java.security.AccessControlContext;
            _closeOnComplete: boolean;
            _configurations: java.util.List<Configuration>;
            _daemon: boolean;
            _dispatcher: Dispatcher;
            _flushOperation: java.lang.Runnable;
            _parserState: ParserState;
            _streamConfiguration: StreamConfiguration;
            _terminated: java.util.concurrent.CountDownLatch;
          }
          interface AbstractEventStream extends CombineTypes<[_AbstractEventStream, java.lang.Object, jdk.jfr.consumer.EventStream]> {}
          interface _ChunkHeader$$static extends ClassLike {
            _headerSize(): long;
            _verifyMagic(input: RecordingInput): void;
            readonly CHUNK_SIZE_POSITION: long;
            _DURATION_NANOS_POSITION: long;
            _FILE_MAGIC: byte[];
            _FILE_STATE_POSITION: long;
            _FLAG_BYTE_POSITION: long;
            readonly HEADER_SIZE: long;
            _MASK_FINAL_CHUNK: int;
            _METADATA_TYPE_ID: long;
            _UPDATING_CHUNK_HEADER: byte;
            new(input: RecordingInput): ChunkHeader;
          }
          let ChunkHeader: _ChunkHeader$$static;
          interface _ChunkHeader {
            awaitFinished(): void;
            getAbsoluteChunkStart(): long;
            getAbsoluteEventStart(): long;
            getChunkSize(): long;
            getConstantPoolPosition(): long;
            getDurationNanos(): long;
            getEnd(): long;
            getEventStart(): long;
            getInput(): RecordingInput;
            getLastNanos(): long;
            getMajor(): short;
            getMetadataPosition(): long;
            getMinor(): short;
            getSize(): long;
            getStartNanos(): long;
            getStartTicks(): long;
            getTicksPerSecond(): double;
            isFinalChunk(): boolean;
            isFinished(): boolean;
            isLastChunk(): boolean;
            nextHeader(): ChunkHeader;
            _readFileState(): byte;
            readMetadata(): MetadataDescriptor;
            readMetadata(previous: MetadataDescriptor): MetadataDescriptor;
            refresh(): void;
            _absoluteChunkEnd: long;
            _absoluteChunkStart: long;
            _absoluteEventStart: long;
            _chunkSize: long;
            _chunkStartNanos: long;
            _chunkStartTicks: long;
            _constantPoolPosition: long;
            _durationNanos: long;
            _finalChunk: boolean;
            _finished: boolean;
            _id: long;
            _input: RecordingInput;
            _major: short;
            _metadataPosition: long;
            _minor: short;
            _ticksPerSecond: long;
          }
          interface ChunkHeader extends CombineTypes<[_ChunkHeader, java.lang.Object]> {}
          interface _ChunkParser$$static extends ClassLike {
            _CONSTANT_POOL_TYPE_ID: long;
            readonly FLUSH_MARKER: jfr.consumer.RecordedEvent;
            new(input: RecordingInput, ps: ParserState): ChunkParser;
            new(input: RecordingInput, pc: ChunkParser$ParserConfiguration, ps: ParserState): ChunkParser;
          }
          let ChunkParser: _ChunkParser$$static;
          interface _ChunkParser {
            _awaitUpdatedHeader(absoluteChunkEnd: long, a1: long): boolean;
            close(): void;
            _fillConstantPools(abortCP: long): void;
            getChunkDuration(): long;
            getEndNanos(): long;
            getEventTypes(): java.util.List<EventType>;
            getHeader(): ChunkHeader;
            getLastFlush(): long;
            _getName(id: long): string;
            getPreviousEventTypes(): java.util.List<EventType>;
            getStartNanos(): long;
            getTypes(): java.util.Collection<Type>;
            hasStaleMetadata(): boolean;
            isChunkFinished(): boolean;
            isFinalChunk(): boolean;
            isLastChunk(): boolean;
            _logConstant(key: long, a1: any, v: boolean): void;
            newChunkParser(): ChunkParser;
            nextChunkParser(): ChunkParser;
            _parseFlushCheckpoint(): boolean;
            readEvent(): jfr.consumer.RecordedEvent;
            _readStreamingEvent(): jfr.consumer.RecordedEvent;
            resetCache(): void;
            setStaleMetadata(stale: boolean): void;
            _textify(o: any): string;
            _updateConfiguration(): void;
            _updateConfiguration(configuration: ChunkParser$ParserConfiguration, resetEventCache: boolean): void;
            _chunkFinished: boolean;
            _chunkHeader: ChunkHeader;
            _configuration: ChunkParser$ParserConfiguration;
            _constantLookups: LongMap<ConstantLookup>;
            _input: RecordingInput;
            _lastFlush: long;
            _metadata: MetadataDescriptor;
            _parserState: ParserState;
            _parsers: LongMap<Parser>;
            _previousMetadata: MetadataDescriptor;
            _staleMetadata: boolean;
            _timeConverter: TimeConverter;
            _typeMap: LongMap<Type>;
          }
          interface ChunkParser extends CombineTypes<[_ChunkParser, java.lang.Object]> {}
          interface _ChunkParser$CheckpointType$$static extends ClassLike {
            valueOf(name: string): ChunkParser$CheckpointType;
            values(): ChunkParser$CheckpointType[];
            readonly CHUNK_HEADER: ChunkParser$CheckpointType;
            readonly FLUSH: ChunkParser$CheckpointType;
            readonly STATICS: ChunkParser$CheckpointType;
            readonly THREAD: ChunkParser$CheckpointType;
          }
          let ChunkParser$CheckpointType: _ChunkParser$CheckpointType$$static;
          interface _ChunkParser$CheckpointType {
            _is(flags: int): boolean;
            _mask: int;
          }
          interface ChunkParser$CheckpointType extends CombineTypes<[_ChunkParser$CheckpointType]> {}
          interface _ChunkParser$ParserConfiguration$$static extends ClassLike {
            new(): ChunkParser$ParserConfiguration;
            new(filterStart: long, a1: long, filterEnd: boolean, a3: boolean, reuse: ParserFilter, ordered: consumer.filter.ChunkWriter): ChunkParser$ParserConfiguration;
          }
          let ChunkParser$ParserConfiguration: _ChunkParser$ParserConfiguration$$static;
          interface _ChunkParser$ParserConfiguration {
            chunkWriter(): consumer.filter.ChunkWriter;
            equals(o: any): boolean;
            filter(): ParserFilter;
            filterEnd(): long;
            filterStart(): long;
            hashCode(): int;
            ordered(): boolean;
            reuse(): boolean;
            toString(): string;
            _withRange(filterStart: long, a1: long): ChunkParser$ParserConfiguration;
          }
          interface ChunkParser$ParserConfiguration extends CombineTypes<[_ChunkParser$ParserConfiguration, java.lang.Record]> {}
          interface _CompositeParser$$static extends ClassLike {
            _parseReferences(input: RecordingInput, parsers: Parser[]): any;
            new(valueParsers: Parser[]): CompositeParser;
          }
          let CompositeParser: _CompositeParser$$static;
          interface _CompositeParser {
            parse(input: RecordingInput): any;
            parseReferences(input: RecordingInput): any;
            skip(input: RecordingInput): void;
            _parsers: Parser[];
          }
          interface CompositeParser extends CombineTypes<[_CompositeParser, jdk.jfr.internal.consumer.Parser]> {}
          interface _ConstantLookup$$static extends ClassLike {
            _new(current: ConstantMap, type: Type): ConstantLookup;
          }
          let ConstantLookup: _ConstantLookup$$static;
          interface _ConstantLookup {
            getCurrent(key: long): any;
            getCurrentResolved(key: long): any;
            getLatestPool(): ConstantMap;
            getPreviousResolved(key: long): any;
            getType(): Type;
            newPool(): void;
            _current: ConstantMap;
            _previous: ConstantMap;
            _type: Type;
          }
          interface ConstantLookup extends CombineTypes<[_ConstantLookup, java.lang.Object]> {}
          interface _ConstantMap$$static extends ClassLike {
            _resolve(o: any): any;
            readonly EMPTY: ConstantMap;
            _RESOLUTION_FINISHED: int;
            _RESOLUTION_STARTED: int;
            _new(factory: ObjectFactory<any>, type: Type): ConstantMap;
          }
          let ConstantMap: _ConstantMap$$static;
          interface _ConstantMap {
            _get(id: long): any;
            getName(): string;
            getObjects(): LongMap<any>;
            getResolved(id: long): any;
            getType(): Type;
            put(key: long, a1: any): void;
            putResolved(id: long, a1: any): void;
            resolve(): void;
            setAllResolved(allResolved: boolean): void;
            setResolved(): void;
            setResolving(): void;
            _allResolved: boolean;
            _factory: ObjectFactory<any>;
            _objects: LongMap<any>;
            _resolving: boolean;
            _type: Type;
          }
          interface ConstantMap extends CombineTypes<[_ConstantMap, java.lang.Object]> {}
          interface _Dispatcher$$static extends ClassLike {
            _buildFilter(dispatchers: Dispatcher$EventDispatcher[]): ParserFilter;
            new(c: StreamConfiguration): Dispatcher;
          }
          let Dispatcher: _Dispatcher$$static;
          interface _Dispatcher {
            _defaultErrorHandler(e: java.lang.Throwable): void;
            _dispatch(event: jfr.consumer.RecordedEvent): void;
            _handleError(e: java.lang.Throwable): void;
            hasMetadataHandler(): boolean;
            runCloseActions(): void;
            runFlushActions(): void;
            runMetadataActions(event: jfr.consumer.MetadataEvent): void;
            toString(): string;
            _cacheDispatchers: Dispatcher$EventDispatcher[];
            _cacheEventType: EventType;
            _closeActions: java.lang.Runnable[];
            _dispatcherLookup: LongMap<Dispatcher$EventDispatcher[]>;
            _dispatchers: Dispatcher$EventDispatcher[];
            _endNanos: long;
            _endTime: java.time.Instant;
            _errorActions: java.util.function.Consumer<java.lang.Throwable>[];
            _flushActions: java.lang.Runnable[];
            _metadataActions: java.util.function.Consumer<jfr.consumer.MetadataEvent>[];
            _parserConfiguration: ChunkParser$ParserConfiguration;
            _startNanos: long;
            _startTime: java.time.Instant;
          }
          interface Dispatcher extends CombineTypes<[_Dispatcher, java.lang.Object]> {}
          interface _Dispatcher$EventDispatcher$$static extends ClassLike {
            _NO_DISPATCHERS: Dispatcher$EventDispatcher[];
            new(eventName: string, action: java.util.function.Consumer<jfr.consumer.RecordedEvent>): Dispatcher$EventDispatcher;
          }
          let Dispatcher$EventDispatcher: _Dispatcher$EventDispatcher$$static;
          interface _Dispatcher$EventDispatcher {
            _accepts(eventType: EventType): boolean;
            getAction(): java.util.function.Consumer<jfr.consumer.RecordedEvent>;
            _offer(event: jfr.consumer.RecordedEvent): void;
            _action: java.util.function.Consumer<jfr.consumer.RecordedEvent>;
            _eventName: string;
          }
          interface Dispatcher$EventDispatcher extends CombineTypes<[_Dispatcher$EventDispatcher, java.lang.Object]> {}
          interface _EventDirectoryStream$$static extends ClassLike {
            _EVENT_COMPARATOR: java.util.Comparator<jfr.consumer.RecordedEvent>;
            new(acc: java.security.AccessControlContext, p: java.nio.file.Path, fileAccess: FileAccess, recording: PlatformRecording, configurations: java.util.List<Configuration>, allowSubDirectories: boolean): EventDirectoryStream;
          }
          let EventDirectoryStream: _EventDirectoryStream$$static;
          interface _EventDirectoryStream {
            activateStreamBarrier(): internal.management.StreamBarrier;
            close(): void;
            _isLastChunk(): boolean;
            _isRecording(): boolean;
            _onComplete(epochNanos: long): void;
            _process(): void;
            _processOrdered(c: Dispatcher): void;
            _processRecursionSafe(): void;
            _processUnordered(c: Dispatcher): boolean;
            setChunkCompleteHandler(handler: java.util.function.Consumer<long>): void;
            start(): void;
            startAsync(): void;
            _barrier: internal.management.StreamBarrier;
            _currentChunkStartNanos: long;
            _currentParser: ChunkParser;
            _fileAccess: FileAccess;
            _onCompleteHandler: java.util.function.Consumer<long>;
            _recording: PlatformRecording;
            _repositoryFiles: RepositoryFiles;
            _sortedCache: jfr.consumer.RecordedEvent[];
            _threadExclusionLevel: int;
          }
          interface EventDirectoryStream extends CombineTypes<[_EventDirectoryStream, jdk.jfr.internal.consumer.AbstractEventStream]> {}
          interface _EventFileStream$$static extends ClassLike {
            _EVENT_COMPARATOR: java.util.Comparator<jfr.consumer.RecordedEvent>;
            new(acc: java.security.AccessControlContext, file: java.nio.file.Path): EventFileStream;
          }
          let EventFileStream: _EventFileStream$$static;
          interface _EventFileStream {
            close(): void;
            _dispatchOrdered(c: Dispatcher, index: int): void;
            _isRecording(): boolean;
            _process(): void;
            _processOrdered(c: Dispatcher): void;
            _processUnordered(c: Dispatcher): void;
            start(): void;
            startAsync(): void;
            _cacheSorted: jfr.consumer.RecordedEvent[];
            _currentParser: ChunkParser;
            _input: RecordingInput;
          }
          interface EventFileStream extends CombineTypes<[_EventFileStream, jdk.jfr.internal.consumer.AbstractEventStream]> {}
          interface _EventLog$$static extends ClassLike {
            _ensureSystemEventLookup(): void;
            _isLogging(): boolean;
            _isSystemEvent(event: jfr.consumer.RecordedEvent): boolean;
            _log(event: jfr.consumer.RecordedEvent): void;
            _log(event: jfr.consumer.RecordedEvent, stackDepth: int, level: LogLevel, system: boolean): void;
            shouldLog(): boolean;
            start(): void;
            stop(): void;
            update(): void;
            _logStream: jfr.consumer.EventStream;
            _logWriter: EventLog$LogWriter;
            _prettyWriter: internal.tool.PrettyWriter;
            _systemEventLookup: java.util.Set<long>;
            new(): EventLog;
          }
          let EventLog: _EventLog$$static;
          interface _EventLog {
          }
          interface EventLog extends CombineTypes<[_EventLog, java.lang.Object]> {}
          interface _EventLog$LogWriter$$static extends ClassLike {
          }
          let EventLog$LogWriter: _EventLog$LogWriter$$static;
          interface _EventLog$LogWriter {
            close(): void;
            flush(): void;
            setLevel(level: LogLevel): void;
            setSystem(system: boolean): void;
            write(buffer: char[], off: int, len: int): void;
            _builder: consumer$stringBuilder;
            _level: LogLevel;
            _system: boolean;
          }
          interface EventLog$LogWriter extends CombineTypes<[_EventLog$LogWriter, java.io.Writer]> {}
          interface _EventParser$$static extends ClassLike {
            _PRIVATE_ACCESS: JdkJfrConsumer;
            _new(timeConverter: TimeConverter, type: EventType, parsers: Parser[]): EventParser;
          }
          let EventParser: _EventParser$$static;
          interface _EventParser {
            _cachedEvent(): jfr.consumer.RecordedEvent;
            getEventType(): EventType;
            _hasReuse(): boolean;
            isEnabled(): boolean;
            parse(input: RecordingInput): jfr.consumer.RecordedEvent;
            parse(a0: RecordingInput): any;
            parseReferences(input: RecordingInput): any;
            resetCache(): void;
            setEnabled(enabled: boolean): void;
            setFilterEnd(filterEnd: long): void;
            setFilterStart(filterStart: long): void;
            setOrdered(ordered: boolean): void;
            setReuse(reuse: boolean): void;
            setThresholdNanos(thresholdNanos: long): void;
            skip(input: RecordingInput): void;
            _cacheIndex: int;
            _cached: jfr.consumer.RecordedEvent[];
            _enabled: boolean;
            _eventType: EventType;
            _filterEnd: long;
            _filterStart: long;
            _hasDuration: boolean;
            _length: int;
            _objectContext: ObjectContext;
            _ordered: boolean;
            _parsers: Parser[];
            _startIndex: int;
            _thresholdNanos: long;
            _timeConverter: TimeConverter;
            _unorderedEvent: jfr.consumer.RecordedEvent;
            _valueDescriptors: java.util.List<ValueDescriptor>;
          }
          interface EventParser extends CombineTypes<[_EventParser, jdk.jfr.internal.consumer.Parser]> {}
          interface _FileAccess$$static extends ClassLike {
            readonly UNPRIVILEGED: FileAccess;
            new(): FileAccess;
          }
          let FileAccess: _FileAccess$$static;
          interface _FileAccess {
            exists(a0: java.nio.file.Path): boolean;
            fileSize(a0: java.nio.file.Path): long;
            getAbsolutePath(a0: java.io.File): string;
            getLastModified(a0: java.nio.file.Path): java.nio.file.attribute.FileTime;
            isDirectory(a0: java.nio.file.Path): boolean;
            length(a0: java.io.File): long;
            newDirectoryStream(a0: java.nio.file.Path): java.nio.file.DirectoryStream<java.nio.file.Path>;
            openRAF(a0: java.io.File, a1: string): java.io.RandomAccessFile;
          }
          interface FileAccess extends CombineTypes<[_FileAccess, java.lang.Object]> {}
          interface _FileAccess$UnPrivileged$$static extends ClassLike {
          }
          let FileAccess$UnPrivileged: _FileAccess$UnPrivileged$$static;
          interface _FileAccess$UnPrivileged {
            exists(p: java.nio.file.Path): boolean;
            fileSize(p: java.nio.file.Path): long;
            getAbsolutePath(f: java.io.File): string;
            getLastModified(p: java.nio.file.Path): java.nio.file.attribute.FileTime;
            isDirectory(p: java.nio.file.Path): boolean;
            length(f: java.io.File): long;
            newDirectoryStream(dir: java.nio.file.Path): java.nio.file.DirectoryStream<java.nio.file.Path>;
            openRAF(f: java.io.File, mode: string): java.io.RandomAccessFile;
          }
          interface FileAccess$UnPrivileged extends CombineTypes<[_FileAccess$UnPrivileged, jdk.jfr.internal.consumer.FileAccess]> {}
          interface _FinishedStream$$static extends ClassLike {
            new(is: java.io.InputStream, blockSize: int): FinishedStream;
          }
          let FinishedStream: _FinishedStream$$static;
          interface _FinishedStream {
            close(): void;
            read(): byte[];
            _buffer: byte[];
            _inputStream: java.io.BufferedInputStream;
          }
          interface FinishedStream extends CombineTypes<[_FinishedStream, jdk.jfr.internal.management.EventByteStream]> {}
          interface _JdkJfrConsumer$$static extends ClassLike {
            _forceInitialization(): void;
            instance(): JdkJfrConsumer;
            setAccess(access: JdkJfrConsumer): void;
            _instance: JdkJfrConsumer;
            new(): JdkJfrConsumer;
          }
          let JdkJfrConsumer: _JdkJfrConsumer$$static;
          interface _JdkJfrConsumer {
            eventComparator(): java.util.Comparator<jfr.consumer.RecordedEvent>;
            eventValues(a0: jfr.consumer.RecordedEvent): any[];
            getOffsetDataTime(a0: jfr.consumer.RecordedObject, a1: string): any;
            isLastEventInChunk(a0: jfr.consumer.RecordingFile): boolean;
            newMetadataEvent(a0: java.util.List<EventType>, a1: java.util.List<EventType>, a2: java.util.List<Configuration>): jfr.consumer.MetadataEvent;
            newRecordedClass(a0: ObjectContext, a1: long, a2: any[]): jfr.consumer.RecordedClass;
            newRecordedClassLoader(a0: ObjectContext, a1: long, a2: any[]): jfr.consumer.RecordedClassLoader;
            newRecordedEvent(a0: ObjectContext, a1: any[], a2: long, a3: long): jfr.consumer.RecordedEvent;
            newRecordedFrame(a0: ObjectContext, a1: any[]): jfr.consumer.RecordedFrame;
            newRecordedMethod(a0: ObjectContext, a1: any[]): jfr.consumer.RecordedMethod;
            newRecordedStackTrace(a0: ObjectContext, a1: any[]): jfr.consumer.RecordedStackTrace;
            newRecordedThread(a0: ObjectContext, a1: long, a2: any[]): jfr.consumer.RecordedThread;
            newRecordedThreadGroup(a0: ObjectContext, a1: any[]): jfr.consumer.RecordedThreadGroup;
            readTypes(a0: jfr.consumer.RecordingFile): java.util.List<Type>;
            setEndTicks(a0: jfr.consumer.RecordedEvent, a1: long): void;
            setStartTicks(a0: jfr.consumer.RecordedEvent, a1: long): void;
          }
          interface JdkJfrConsumer extends CombineTypes<[_JdkJfrConsumer, java.lang.Object]> {}
          interface _ObjectContext$$static extends ClassLike {
            _new(eventType: EventType, fields: java.util.List<ValueDescriptor>, timeConverter: TimeConverter): ObjectContext;
          }
          let ObjectContext: _ObjectContext$$static;
          interface _ObjectContext {
            buildContextLookup(fields: java.util.List<ValueDescriptor>): java.util.Map<ValueDescriptor,ObjectContext>;
            convertTimespan(ticks: long): long;
            convertTimestamp(ticks: long): long;
            getInstance(descriptor: ValueDescriptor): ObjectContext;
            getZoneOffset(): java.time.ZoneId;
            _contextLookup: java.util.Map<ValueDescriptor,ObjectContext>;
            readonly eventType: EventType;
            readonly fields: java.util.List<ValueDescriptor>;
            _timeConverter: TimeConverter;
          }
          interface ObjectContext extends CombineTypes<[_ObjectContext, java.lang.Object]> {}
          interface _ObjectFactory$$static<T> extends ClassLike {
            _create(type: Type, timeConverter: TimeConverter): ObjectFactory<any>;
            _createClassFactory(type: Type, timeConverter: TimeConverter): ObjectFactory<jfr.consumer.RecordedClass>;
            _createClassLoaderFactory(type: Type, timeConverter: TimeConverter): ObjectFactory<any>;
            _createFrameFactory(type: Type, timeConverter: TimeConverter): ObjectFactory<jfr.consumer.RecordedFrame>;
            _createMethodFactory(type: Type, timeConverter: TimeConverter): ObjectFactory<jfr.consumer.RecordedMethod>;
            _createStackTraceFactory(type: Type, timeConverter: TimeConverter): ObjectFactory<jfr.consumer.RecordedStackTrace>;
            _createThreadFactory(type: Type, timeConverter: TimeConverter): ObjectFactory<jfr.consumer.RecordedThread>;
            _createdThreadGroupFactory(type: Type, timeConverter: TimeConverter): ObjectFactory<jfr.consumer.RecordedThreadGroup>;
            _PRIVATE_ACCESS: JdkJfrConsumer;
            readonly STACK_FRAME_VERSION_1: string;
            readonly STACK_FRAME_VERSION_2: string;
            _TYPE_PREFIX_VERSION_1: string;
            _TYPE_PREFIX_VERSION_2: string;
          }
          let ObjectFactory: _ObjectFactory$$static<T>;
          interface _ObjectFactory<T> {
            _createObject(id: long, a1: any): T;
            _createTyped(a0: ObjectContext, a1: long, a2: any[]): T;
(a0: ObjectContext, a1: long, a2: any[]): T;
            _objectContext: ObjectContext;
          }
          interface ObjectFactory<T> extends CombineTypes<[_ObjectFactory<T>, java.lang.Object]> {}
          interface _OngoingStream$$static extends ClassLike {
            _EMPTY_ARRAY: byte[];
            _HEADER_FILE_STATE_POSITION: int;
            _HEADER_SIZE: int;
            _MODIFYING_STATE: byte;
            new(recording: Recording, blockSize: int, startTimeNanos: long, a3: long): OngoingStream;
          }
          let OngoingStream: _OngoingStream$$static;
          interface _OngoingStream {
            close(): void;
            _closeInput(): void;
            _ensureInput(): boolean;
            _ensurePath(): boolean;
            _isRecordingClosed(): boolean;
            read(): byte[];
            _readBytes(): byte[];
            _readBytes(size: int): byte[];
            _readNonHeader(size: int): byte[];
            _readWithHeader(size: int): byte[];
            _takeNap(): void;
            _blockSize: int;
            _endTimeNanos: long;
            _first: boolean;
            _header: ChunkHeader;
            _headerBytes: byte[];
            _input: RecordingInput;
            _path: java.nio.file.Path;
            _position: long;
            _recording: Recording;
            _repositoryFiles: RepositoryFiles;
            _startTimeNanos: long;
          }
          interface OngoingStream extends CombineTypes<[_OngoingStream, jdk.jfr.internal.management.EventByteStream]> {}
          interface _Parser$$static extends ClassLike {
            _new(): Parser;
          }
          let Parser: _Parser$$static;
          interface _Parser {
            parse(a0: RecordingInput): any;
            parseReferences(input: RecordingInput): any;
            skip(a0: RecordingInput): void;
          }
          interface Parser extends CombineTypes<[_Parser, java.lang.Object]> {}
          interface _ParserFactory$$static extends ClassLike {
            new(metadata: MetadataDescriptor, constantLookups: LongMap<ConstantLookup>, timeConverter: TimeConverter): ParserFactory;
          }
          let ParserFactory: _ParserFactory$$static;
          interface _ParserFactory {
            _createCompositeParser(type: Type, event: boolean): CompositeParser;
            _createEventParser(eventType: EventType): EventParser;
            _createParser(v: ValueDescriptor, event: boolean): Parser;
            _createPrimitiveParser(type: Type, event: boolean): Parser;
            getParsers(): LongMap<Parser>;
            getTypeMap(): LongMap<Type>;
            _registerParserType(t: Type, parser: Parser): Parser;
            _constantLookups: LongMap<ConstantLookup>;
            _parsers: LongMap<Parser>;
            _timeConverter: TimeConverter;
            _types: LongMap<Type>;
          }
          interface ParserFactory extends CombineTypes<[_ParserFactory, java.lang.Object]> {}
          interface _ParserFactory$ArrayParser$$static extends ClassLike {
            new(elementParser: Parser): ParserFactory$ArrayParser;
          }
          let ParserFactory$ArrayParser: _ParserFactory$ArrayParser$$static;
          interface _ParserFactory$ArrayParser {
            parse(input: RecordingInput): any;
            parseReferences(input: RecordingInput): any;
            skip(input: RecordingInput): void;
            _elementParser: Parser;
          }
          interface ParserFactory$ArrayParser extends CombineTypes<[_ParserFactory$ArrayParser, jdk.jfr.internal.consumer.Parser]> {}
          interface _ParserFactory$BooleanParser$$static extends ClassLike {
          }
          let ParserFactory$BooleanParser: _ParserFactory$BooleanParser$$static;
          interface _ParserFactory$BooleanParser {
            parse(input: RecordingInput): any;
            skip(input: RecordingInput): void;
          }
          interface ParserFactory$BooleanParser extends CombineTypes<[_ParserFactory$BooleanParser, jdk.jfr.internal.consumer.Parser]> {}
          interface _ParserFactory$ByteParser$$static extends ClassLike {
          }
          let ParserFactory$ByteParser: _ParserFactory$ByteParser$$static;
          interface _ParserFactory$ByteParser {
            parse(input: RecordingInput): any;
            skip(input: RecordingInput): void;
          }
          interface ParserFactory$ByteParser extends CombineTypes<[_ParserFactory$ByteParser, jdk.jfr.internal.consumer.Parser]> {}
          interface _ParserFactory$CharacterParser$$static extends ClassLike {
          }
          let ParserFactory$CharacterParser: _ParserFactory$CharacterParser$$static;
          interface _ParserFactory$CharacterParser {
            parse(input: RecordingInput): any;
            skip(input: RecordingInput): void;
          }
          interface ParserFactory$CharacterParser extends CombineTypes<[_ParserFactory$CharacterParser, jdk.jfr.internal.consumer.Parser]> {}
          interface _ParserFactory$ConstantValueParser$$static extends ClassLike {
            _new(lookup: ConstantLookup): ParserFactory$ConstantValueParser;
          }
          let ParserFactory$ConstantValueParser: _ParserFactory$ConstantValueParser$$static;
          interface _ParserFactory$ConstantValueParser {
            parse(input: RecordingInput): any;
            parseReferences(input: RecordingInput): any;
            skip(input: RecordingInput): void;
            _lookup: ConstantLookup;
          }
          interface ParserFactory$ConstantValueParser extends CombineTypes<[_ParserFactory$ConstantValueParser, jdk.jfr.internal.consumer.Parser]> {}
          interface _ParserFactory$DoubleParser$$static extends ClassLike {
          }
          let ParserFactory$DoubleParser: _ParserFactory$DoubleParser$$static;
          interface _ParserFactory$DoubleParser {
            parse(input: RecordingInput): any;
            skip(input: RecordingInput): void;
          }
          interface ParserFactory$DoubleParser extends CombineTypes<[_ParserFactory$DoubleParser, jdk.jfr.internal.consumer.Parser]> {}
          interface _ParserFactory$EventValueConstantParser$$static extends ClassLike {
            _new(lookup: ConstantLookup): ParserFactory$EventValueConstantParser;
          }
          let ParserFactory$EventValueConstantParser: _ParserFactory$EventValueConstantParser$$static;
          interface _ParserFactory$EventValueConstantParser {
            parse(input: RecordingInput): any;
            parseReferences(input: RecordingInput): any;
            skip(input: RecordingInput): void;
            _lastKey: long;
            _lastReferenceKey: long;
            _lastReferenceValue: any;
            _lastValue: any;
            _lookup: ConstantLookup;
          }
          interface ParserFactory$EventValueConstantParser extends CombineTypes<[_ParserFactory$EventValueConstantParser, jdk.jfr.internal.consumer.Parser]> {}
          interface _ParserFactory$FloatParser$$static extends ClassLike {
          }
          let ParserFactory$FloatParser: _ParserFactory$FloatParser$$static;
          interface _ParserFactory$FloatParser {
            parse(input: RecordingInput): any;
            skip(input: RecordingInput): void;
          }
          interface ParserFactory$FloatParser extends CombineTypes<[_ParserFactory$FloatParser, jdk.jfr.internal.consumer.Parser]> {}
          interface _ParserFactory$IntegerParser$$static extends ClassLike {
          }
          let ParserFactory$IntegerParser: _ParserFactory$IntegerParser$$static;
          interface _ParserFactory$IntegerParser {
            parse(input: RecordingInput): any;
            skip(input: RecordingInput): void;
            _last: int;
            _lastIntegergObject: int;
          }
          interface ParserFactory$IntegerParser extends CombineTypes<[_ParserFactory$IntegerParser, jdk.jfr.internal.consumer.Parser]> {}
          interface _ParserFactory$LongParser$$static extends ClassLike {
          }
          let ParserFactory$LongParser: _ParserFactory$LongParser$$static;
          interface _ParserFactory$LongParser {
            parse(input: RecordingInput): any;
            skip(input: RecordingInput): void;
            _last: long;
            _lastLongObject: any;
          }
          interface ParserFactory$LongParser extends CombineTypes<[_ParserFactory$LongParser, jdk.jfr.internal.consumer.Parser]> {}
          interface _ParserFactory$ShortParser$$static extends ClassLike {
          }
          let ParserFactory$ShortParser: _ParserFactory$ShortParser$$static;
          interface _ParserFactory$ShortParser {
            parse(input: RecordingInput): any;
            skip(input: RecordingInput): void;
          }
          interface ParserFactory$ShortParser extends CombineTypes<[_ParserFactory$ShortParser, jdk.jfr.internal.consumer.Parser]> {}
          interface _ParserFilter$$static extends ClassLike {
            readonly ACCEPT_ALL: ParserFilter;
            new(): ParserFilter;
          }
          let ParserFilter: _ParserFilter$$static;
          interface _ParserFilter {
            getThreshold(eventName: string): long;
            setThreshold(eventName: string, nanos: long): void;
            toString(): string;
            _acceptAll: boolean;
            _thresholds: java.util.Map<string,long>;
          }
          interface ParserFilter extends CombineTypes<[_ParserFilter, java.lang.Object]> {}
          interface _ParserState$$static extends ClassLike {
            new(): ParserState;
          }
          let ParserState: _ParserState$$static;
          interface _ParserState {
            close(): void;
            isClosed(): boolean;
            _closed: boolean;
          }
          interface ParserState extends CombineTypes<[_ParserState, java.lang.Object]> {}
          interface _RecordingInput$$static extends ClassLike {
            _DEFAULT_BLOCK_SIZE: int;
            _new(f: java.io.File, fileAccess: FileAccess, blockSize: int): RecordingInput;
            new(f: java.io.File, fileAccess: FileAccess): RecordingInput;
          }
          let RecordingInput: _RecordingInput$$static;
          interface _RecordingInput {
            _calculateBlockStart(newPosition: long): long;
            close(): void;
            getFileSize(): long;
            getFilename(): string;
            _initialize(f: java.io.File): void;
            pollWait(): void;
            position(): long;
            position(newPosition: long): void;
            _positionPhysical(position: long): void;
            readBoolean(): boolean;
            readByte(): byte;
            readChar(): char;
            readDouble(): double;
            readFloat(): float;
            readFully(dest: byte[], offset: int, length: int): void;
            readFully(dst: byte[]): void;
            readInt(): int;
            readLine(): string;
            readLong(): long;
            _readLongSlow(): long;
            _readPhysicalByte(): byte;
            _readPhysicalLong(): long;
            _readRawInt(): int;
            _readRawLong(): long;
            _readRawShort(): short;
            readShort(): short;
            readUTF(): string;
            readUnsignedByte(): int;
            readUnsignedShort(): int;
            require(minimumBytes: int, errorMessage: string): void;
            setFile(path: java.nio.file.Path): void;
            setStreamed(): void;
            setValidSize(size: long): void;
            _size(): long;
            skipBytes(n: int): int;
            _trimToFileSize(position: long): long;
            _blockSize: int;
            _currentBlock: RecordingInput$Block;
            _file: java.io.RandomAccessFile;
            _fileAccess: FileAccess;
            _filename: string;
            _pollCount: long;
            _position: long;
            _previousBlock: RecordingInput$Block;
            _size: long;
          }
          interface RecordingInput extends CombineTypes<[_RecordingInput, java.io.DataInput, java.lang.Object, java.lang.AutoCloseable]> {}
          interface _RecordingInput$Block$$static extends ClassLike {
          }
          let RecordingInput$Block: _RecordingInput$Block$$static;
          interface _RecordingInput$Block {
            _contains(position: long): boolean;
            get(position: long): byte;
            read(file: java.io.RandomAccessFile, amount: int): void;
            reset(): void;
            _blockPosition: long;
            _blockPositionEnd: long;
            _bytes: byte[];
          }
          interface RecordingInput$Block extends CombineTypes<[_RecordingInput$Block, java.lang.Object]> {}
          interface _Reference$$static extends ClassLike {
            new(pool: ConstantMap, key: long): Reference;
          }
          let Reference: _Reference$$static;
          interface _Reference {
            equals(o: any): boolean;
            hashCode(): int;
            key(): long;
            pool(): ConstantMap;
            _resolve(): any;
            toString(): string;
            type(): Type;
          }
          interface Reference extends CombineTypes<[_Reference, java.lang.Record]> {}
          interface _RepositoryFiles$$static extends ClassLike {
            _isRepository(filename: string): boolean;
            notifyNewFile(): void;
            _DIRECTORY_PATTERN: string;
            _WAIT_OBJECT: any;
            new(fileAccess: FileAccess, repository: java.nio.file.Path, allowSubDirectory: boolean): RepositoryFiles;
          }
          let RepositoryFiles: _RepositoryFiles$$static;
          interface _RepositoryFiles {
            _close(): void;
            _findSubDirectory(repoPath: java.nio.file.Path): java.nio.file.Path;
            firstPath(startTimeNanos: long, a1: boolean): java.nio.file.Path;
            _getLastModified(p: java.nio.file.Path): java.nio.file.attribute.FileTime;
            _getTimestamp(p: java.nio.file.Path): long;
            hasFixedPath(): boolean;
            lastPath(wait: boolean): java.nio.file.Path;
            _nap(): void;
            nextPath(startTimeNanos: long, a1: boolean): java.nio.file.Path;
            _path(timestamp: long, a1: boolean): java.nio.file.Path;
            _readStartTime(p: java.nio.file.Path): long;
            _updatePaths(wait: boolean): boolean;
            _updatePaths(): boolean;
            _allowSubDirectory: boolean;
            _closed: boolean;
            _fileAccess: FileAccess;
            _pathLookup: java.util.Map<java.nio.file.Path,long>;
            _pathSet: java.util.NavigableMap<long,java.nio.file.Path>;
            _repository: java.nio.file.Path;
            _waitObject: any;
          }
          interface RepositoryFiles extends CombineTypes<[_RepositoryFiles, java.lang.Object]> {}
          interface _StreamConfiguration$$static extends ClassLike {
            _new(): StreamConfiguration;
          }
          let StreamConfiguration: _StreamConfiguration$$static;
          interface _StreamConfiguration {
            addCloseAction(action: java.lang.Runnable): void;
            addErrorAction(action: java.util.function.Consumer<java.lang.Throwable>): void;
            addEventAction(name: string, consumer: java.util.function.Consumer<jfr.consumer.RecordedEvent>): void;
            addEventAction(action: java.util.function.Consumer<jfr.consumer.RecordedEvent>): void;
            addFlushAction(action: java.lang.Runnable): void;
            addMetadataAction(action: java.util.function.Consumer<jfr.consumer.MetadataEvent>): void;
            hasChanged(): boolean;
            remove(action: any): boolean;
            setChanged(changed: boolean): void;
            setEndTime(endTime: java.time.Instant): void;
            setOrdered(ordered: boolean): void;
            setReuse(reuse: boolean): void;
            setStartNanos(startNanos: long): void;
            setStartTime(startTime: java.time.Instant): void;
            setStarted(started: boolean): void;
            _changed: boolean;
            _closeActions: java.util.List<java.lang.Runnable>;
            _endNanos: long;
            _endTime: java.time.Instant;
            _errorActions: java.util.List<java.util.function.Consumer<java.lang.Throwable>>;
            _eventActions: java.util.List<Dispatcher$EventDispatcher>;
            _flushActions: java.util.List<java.lang.Runnable>;
            _metadataActions: java.util.List<java.util.function.Consumer<jfr.consumer.MetadataEvent>>;
            _ordered: boolean;
            _reuse: boolean;
            _startNanos: long;
            _startTime: java.time.Instant;
            _started: boolean;
          }
          interface StreamConfiguration extends CombineTypes<[_StreamConfiguration, java.lang.Object]> {}
          interface _StringParser$$static extends ClassLike {
            new(stringLookup: ConstantLookup, event: boolean): StringParser;
          }
          let StringParser: _StringParser$$static;
          interface _StringParser {
            parse(input: RecordingInput): any;
            parseReferences(input: RecordingInput): any;
            skip(input: RecordingInput): void;
            _charArrayParser: StringParser$CharArrayParser;
            _event: boolean;
            _latin1parser: StringParser$CharsetParser;
            _stringLookup: ConstantLookup;
            _utf8parser: StringParser$CharsetParser;
          }
          interface StringParser extends CombineTypes<[_StringParser, jdk.jfr.internal.consumer.Parser]> {}
          interface _StringParser$CharArrayParser$$static extends ClassLike {
          }
          let StringParser$CharArrayParser: _StringParser$CharArrayParser$$static;
          interface _StringParser$CharArrayParser {
            _ensureSize(size: int): void;
            parse(input: RecordingInput): any;
            skip(input: RecordingInput): void;
            _buffer: char[];
            _lastSize: int;
            _lastString: string;
          }
          interface StringParser$CharArrayParser extends CombineTypes<[_StringParser$CharArrayParser, jdk.jfr.internal.consumer.Parser]> {}
          interface _StringParser$CharsetParser$$static extends ClassLike {
            _new(charset: java.nio.charset.Charset): StringParser$CharsetParser;
          }
          let StringParser$CharsetParser: _StringParser$CharsetParser$$static;
          interface _StringParser$CharsetParser {
            _ensureSize(size: int): void;
            parse(input: RecordingInput): any;
            skip(input: RecordingInput): void;
            _buffer: byte[];
            _charset: java.nio.charset.Charset;
            _lastSize: int;
            _lastString: string;
          }
          interface StringParser$CharsetParser extends CombineTypes<[_StringParser$CharsetParser, jdk.jfr.internal.consumer.Parser]> {}
          interface _StringParser$Encoding$$static extends ClassLike {
            valueOf(name: string): StringParser$Encoding;
            values(): StringParser$Encoding[];
            readonly CHAR_ARRAY: StringParser$Encoding;
            readonly CONSTANT_POOL: StringParser$Encoding;
            readonly EMPTY_STRING: StringParser$Encoding;
            readonly LATIN1_BYTE_ARRAY: StringParser$Encoding;
            readonly NULL: StringParser$Encoding;
            readonly UT8_BYTE_ARRAY: StringParser$Encoding;
          }
          let StringParser$Encoding: _StringParser$Encoding$$static;
          interface _StringParser$Encoding {
            byteValue(): byte;
            is(value: byte): boolean;
            _byteValue: byte;
          }
          interface StringParser$Encoding extends CombineTypes<[_StringParser$Encoding]> {}
          interface _TimeConverter$$static extends ClassLike {
            _new(chunkHeader: ChunkHeader, offset: int): TimeConverter;
          }
          let TimeConverter: _TimeConverter$$static;
          interface _TimeConverter {
            convertTimespan(ticks: long): long;
            convertTimestamp(ticks: long): long;
            getZoneOffset(): java.time.ZoneOffset;
            _zoneOfSet(offset: int): java.time.ZoneOffset;
            _divisor: double;
            _startNanos: long;
            _startTicks: long;
            _zoneOffset: java.time.ZoneOffset;
          }
          interface TimeConverter extends CombineTypes<[_TimeConverter, java.lang.Object]> {}
        }
        module dcmd {
          interface _AbstractDCmd$$static extends ClassLike {
            _expandFilename(filename: string): string;
            _quoteIfNeeded(text: string): string;
            _new(): AbstractDCmd;
          }
          let AbstractDCmd: _AbstractDCmd$$static;
          interface _AbstractDCmd {
            _exampleDirectory(): string;
            _exampleFilename(): string;
            _exampleRepository(): string;
            _execute(a0: ArgumentParser): void;
            execute(source: string, arg: string, delimiter: char): string[];
            _findRecording(name: string): Recording;
            _findRecordingById(id: int): Recording;
            _findRecordingByName(name: string): Recording;
            getArgumentInfos(): Argument[];
            _getFlightRecorder(): FlightRecorder;
            _getOutput(): internal.util.Output;
            getPid(): string;
            _getRecordings(): java.util.List<Recording>;
            _getResult(): string[];
            _logWarning(message: string): void;
            _makeGenerated(recording: Recording, directory: java.nio.file.Path): SecuritySupport$SafePath;
            _print(s: string): void;
            _print(s: string, args: any[]): void;
            _print(s: string, ...args: any[]): void;
            _printBytes(bytes: long): void;
            printHelp(): string[];
            _printHelpText(): void;
            _printPath(path: SecuritySupport$SafePath): void;
            _printPath(path: java.nio.file.Path): void;
            _printTimespan(timespan: java.time.Duration, separator: string): void;
            _println(): void;
            _println(s: string, args: any[]): void;
            _println(s: string, ...args: any[]): void;
            _reportOperationComplete(actionPrefix: string, name: string, file: SecuritySupport$SafePath): void;
            _resolvePath(recording: Recording, filename: string): SecuritySupport$SafePath;
            _output: internal.util.Output$LinePrinter;
            _source: string;
          }
          interface AbstractDCmd extends CombineTypes<[_AbstractDCmd, java.lang.Object]> {}
          interface _Argument$$static extends ClassLike {
            _new(name: string, description: string, type: string, mandatory: boolean, option: boolean, defaultValue: string, allowMultiple: boolean): Argument;
          }
          let Argument: _Argument$$static;
          interface _Argument {
            allowMultiple(): boolean;
            defaultValue(): string;
            description(): string;
            equals(o: any): boolean;
            hashCode(): int;
            mandatory(): boolean;
            name(): string;
            option(): boolean;
            toString(): string;
            type(): string;
          }
          interface Argument extends CombineTypes<[_Argument, java.lang.Record]> {}
          interface _ArgumentParser$$static extends ClassLike {
            _new(arguments: Argument[], text: string, delimiter: char): ArgumentParser;
          }
          let ArgumentParser: _ArgumentParser$$static;
          interface _ArgumentParser {
            _accept(c: char): boolean;
            _addOption(key: string, value: string): void;
            _atEnd(): boolean;
            _checkConflict(): void;
            checkMandatory(): boolean;
            _checkSpelling(excludeSet: java.util.Set<string>): void;
            _checkSpellingError(name: string): void;
            _checkUnknownArguments(): void;
            _currentChar(): char;
            _diff(a: string, b: string): int;
            _eatDelimiter(): void;
            _getExtendedOptions(): java.util.Map<string,any>;
            _getOption<T>(name: string): T;
            _getOptions(): java.util.Map<string,any>;
            _hasArgumentsLeft(): boolean;
            _hasExtendedOptions(): boolean;
            _inSequence(longer: string, shorter: string): boolean;
            _indexOfUnit(text: string): int;
            _lastChar(): char;
            _nextArgument(): Argument;
            parse(): java.util.Map<string,any>;
            _parseBoolean(name: string, text: string): boolean;
            _parseLong(name: string, text: string): long;
            _parseMemorySize(name: string, text: string): any;
            _parseNanotime(name: string, text: string): any;
            _readText(abortChars: string): string;
            _value(name: string, type: string, text: string): any;
            _argumentIndex: int;
            _arguments: Argument[];
            _builder: dcmd$stringBuilder;
            _conflictedOptions: java.util.List<string>;
            _delimiter: char;
            _extendedOptions: java.util.Map<string,any>;
            _keyValueDelimiter: string;
            _options: java.util.Map<string,any>;
            _position: int;
            _text: string;
            _valueDelimiter: string;
          }
          interface ArgumentParser extends CombineTypes<[_ArgumentParser, java.lang.Object]> {}
          interface _DCmdCheck$$static extends ClassLike {
            _sortByEventPath(events: java.util.Collection<EventType>): java.util.List<EventType>;
            _new(): DCmdCheck;
          }
          let DCmdCheck: _DCmdCheck$$static;
          interface _DCmdCheck {
            _execute(parser: ArgumentParser): void;
            getArgumentInfos(): Argument[];
            _printGeneral(recording: Recording): void;
            printHelp(): string[];
            _printRecording(recording: Recording, verbose: boolean): void;
            _printSettings(recording: Recording): void;
          }
          interface DCmdCheck extends CombineTypes<[_DCmdCheck, jdk.jfr.internal.dcmd.AbstractDCmd]> {}
          interface _DCmdConfigure$$static extends ClassLike {
            _new(): DCmdConfigure;
          }
          let DCmdConfigure: _DCmdConfigure$$static;
          interface _DCmdConfigure {
            execute(verbose: boolean, repositoryPath: string, dumpPath: string, stackDepth: int, globalBufferCount: long, globalBufferSize: long, threadBufferSize: long, memorySize: long, maxChunkSize: long, preserveRepository: boolean): string[];
            _execute(parser: ArgumentParser): void;
            getArgumentInfos(): Argument[];
            _printDumpPath(): void;
            _printGlobalBufferCount(): void;
            _printGlobalBufferSize(): void;
            printHelp(): string[];
            _printMaxChunkSize(): void;
            _printMemorySize(): void;
            _printPreserveRepository(): void;
            _printRepositoryPath(): void;
            _printStackDepth(): void;
            _printThreadBufferSize(): void;
          }
          interface DCmdConfigure extends CombineTypes<[_DCmdConfigure, jdk.jfr.internal.dcmd.AbstractDCmd]> {}
          interface _DCmdDump$$static extends ClassLike {
            _new(): DCmdDump;
          }
          let DCmdDump: _DCmdDump$$static;
          interface _DCmdDump {
            dump(recorder: PlatformRecorder, recording: Recording, name: string, filename: string, maxSize: long, pathToGcRoots: boolean, beginTime: java.time.Instant, endTime: java.time.Instant): void;
            execute(parser: ArgumentParser): void;
            getArgumentInfos(): Argument[];
            _newSnapShot(recorder: PlatformRecorder, recording: Recording, pathToGcRoots: boolean): PlatformRecording;
            _parseTime(time: string, parameter: string): java.time.Instant;
            printHelp(): string[];
          }
          interface DCmdDump extends CombineTypes<[_DCmdDump, jdk.jfr.internal.dcmd.AbstractDCmd]> {}
          interface _DCmdException$$static extends ClassLike {
            _format(message: string, args: any[]): string;
            _format(message: string, ...args: any[]): string;
            _serialVersionUID: long;
            new(format: string, args: any[]): DCmdException;
            new(format: string, ...args: any[]): DCmdException;
            new(cause: java.lang.Throwable, format: string, args: any[]): DCmdException;
            new(cause: java.lang.Throwable, format: string, ...args: any[]): DCmdException;
          }
          let DCmdException: _DCmdException$$static;
          interface _DCmdException {
          }
          interface DCmdException extends CombineTypes<[_DCmdException, java.lang.Exception]> {}
          interface _DCmdQuery$$static extends ClassLike {
            new(): DCmdQuery;
          }
          let DCmdQuery: _DCmdQuery$$static;
          interface _DCmdQuery {
            _execute(parser: ArgumentParser): void;
            getArgumentInfos(): Argument[];
            _getExamples(): string;
            _getOptions(): string;
            getPid(): string;
            printHelp(): string[];
            _stripQuotes(text: string): string;
          }
          interface DCmdQuery extends CombineTypes<[_DCmdQuery, jdk.jfr.internal.dcmd.AbstractDCmd]> {}
          interface _DCmdStart$$static extends ClassLike {
            _jfcOptions(): string;
            _new(): DCmdStart;
          }
          let DCmdStart: _DCmdStart$$static;
          interface _DCmdStart {
            _configureExtended(settings: string[], parser: ArgumentParser): java.util.LinkedHashMap<string,string>;
            _configureStandard(settings: string[]): java.util.LinkedHashMap<string,string>;
            execute(parser: ArgumentParser): void;
            getArgumentInfos(): Argument[];
            _hasJDKEvents(settings: java.util.Map<string,string>): boolean;
            _initializeWithForcedInstrumentation(settings: java.util.Map<string,string>): void;
            printHelp(): string[];
          }
          interface DCmdStart extends CombineTypes<[_DCmdStart, jdk.jfr.internal.dcmd.AbstractDCmd]> {}
          interface _DCmdStop$$static extends ClassLike {
            _new(): DCmdStop;
          }
          let DCmdStop: _DCmdStop$$static;
          interface _DCmdStop {
            _execute(parser: ArgumentParser): void;
            getArgumentInfos(): Argument[];
            printHelp(): string[];
          }
          interface DCmdStop extends CombineTypes<[_DCmdStop, jdk.jfr.internal.dcmd.AbstractDCmd]> {}
          interface _DCmdView$$static extends ClassLike {
            new(): DCmdView;
          }
          let DCmdView: _DCmdView$$static;
          interface _DCmdView {
            _execute(parser: ArgumentParser): void;
            getArgumentInfos(): Argument[];
            getExamples(): string;
            getOptions(): string;
            getPid(): string;
            printHelp(): string[];
          }
          interface DCmdView extends CombineTypes<[_DCmdView, jdk.jfr.internal.dcmd.AbstractDCmd]> {}
          interface _QueryRecording$$static extends ClassLike {
            new(configuration: internal.query.Configuration, parser: ArgumentParser): QueryRecording;
          }
          let QueryRecording: _QueryRecording$$static;
          interface _QueryRecording {
            _acquireChunks(startTime: java.time.Instant): java.util.List<RepositoryChunk>;
            close(): void;
            _currentChunk(): RepositoryChunk;
            _determineStreamStart(maxSize: long, startTime: java.time.Instant): java.time.Instant;
            getStream(): jfr.consumer.EventStream;
            _makeStream(startTime: java.time.Instant): jfr.consumer.EventStream;
            _releaseChunks(): void;
            _valueOf(truncate: string): internal.query.Configuration$Truncate;
            _DEFAULT_MAX_AGE: long;
            _DEFAULT_MAX_SIZE: long;
            _chunks: java.util.List<RepositoryChunk>;
            _endTime: java.time.Instant;
            _eventStream: jfr.consumer.EventStream;
            _recorder: PlatformRecorder;
          }
          interface QueryRecording extends CombineTypes<[_QueryRecording, java.lang.Object, java.lang.AutoCloseable]> {}
        }
        module event {
          interface _EventConfiguration$$static extends ClassLike {
            duration(startTime: long): long;
            timestamp(): long;
          }
          let EventConfiguration: _EventConfiguration$$static;
          interface _EventConfiguration {
            getEventControl(): EventControl;
            getEventType(): EventType;
            getId(): long;
            getPlatformEventType(): PlatformEventType;
            getSetting(index: int): SettingControl;
            isEnabled(): boolean;
            isRegistered(): boolean;
            shouldCommit(duration: long): boolean;
            _eventControl: EventControl;
            _eventType: EventType;
            _platformEventType: PlatformEventType;
            _settings: SettingControl[];
          }
          interface EventConfiguration extends CombineTypes<[_EventConfiguration, java.lang.Object]> {}
          interface _EventWriter$$static extends ClassLike {
            _makePaddedInt(v: int): int;
            _MAX_EVENT_SIZE: long;
            _jvm: JVM;
            _unsafe: jdk.internal.misc.Unsafe;
          }
          let EventWriter: _EventWriter$$static;
          interface _EventWriter {
            beginEvent(configuration: EventConfiguration, typeId: long): boolean;
            endEvent(): boolean;
            _flush(): void;
            _flush(usedSize: int, requestedSize: int): void;
            _isValidForSize(requestedSize: int): boolean;
            putBoolean(i: boolean): void;
            putByte(i: byte): void;
            putChar(v: char): void;
            putClass(aClass: java.lang.Class<any>): void;
            putDouble(i: double): void;
            putEventThread(): void;
            putFloat(i: float): void;
            putInt(v: int): void;
            putLong(v: long): void;
            putShort(v: short): void;
            putStackTrace(): void;
            putString(s: string): void;
            _putStringValue(s: string): void;
            putThread(athread: java.lang.Thread): void;
            _putUncheckedByte(i: byte): void;
            _putUncheckedChar(v: char): void;
            _putUncheckedInt(v: int): void;
            _putUncheckedLong(v: long): void;
            _reserveEventSizeField(): void;
            reset(): void;
            _usedSize(): int;
            _currentPosition: long;
            _eventType: PlatformEventType;
            _excluded: boolean;
            _largeSize: boolean;
            _maxPosition: long;
            _startPosition: long;
            _threadID: long;
            _valid: boolean;
          }
          interface EventWriter extends CombineTypes<[_EventWriter, java.lang.Object]> {}
        }
        module instrument {
          interface _ConstructorTracerWriter$$static extends ClassLike {
            _generateBytes(clz: java.lang.Class<any>, oldBytes: byte[]): byte[];
          }
          let ConstructorTracerWriter: _ConstructorTracerWriter$$static;
          interface _ConstructorTracerWriter {
            _isConstructor(name: string): boolean;
            _takesStringParameter(desc: string): boolean;
            visitMethod(access: int, name: string, desc: string, signature: string, exceptions: string[]): jdk.internal.org.objectweb.asm.MethodVisitor;
            _noUseInputParameter: ConstructorWriter;
            _useInputParameter: ConstructorWriter;
          }
          interface ConstructorTracerWriter extends CombineTypes<[_ConstructorTracerWriter, jdk.internal.org.objectweb.asm.ClassVisitor]> {}
          interface _ConstructorWriter$$static extends ClassLike {
            _new(classToChange: java.lang.Class<any>, useInputParameter: boolean): ConstructorWriter;
          }
          let ConstructorWriter: _ConstructorWriter$$static;
          interface _ConstructorWriter {
            _noInput(): void;
            setMethodVisitor(mv: jdk.internal.org.objectweb.asm.MethodVisitor): void;
            _useInput(): void;
            visitInsn(opcode: int): void;
            _fullClassName: string;
            _shortClassName: string;
            _useInputParameter: boolean;
          }
          interface ConstructorWriter extends CombineTypes<[_ConstructorWriter, jdk.internal.org.objectweb.asm.MethodVisitor]> {}
          interface _FileChannelImplInstrumentor$$static extends ClassLike {
          }
          let FileChannelImplInstrumentor: _FileChannelImplInstrumentor$$static;
          interface _FileChannelImplInstrumentor {
            force(metaData: boolean): void;
            read(dst: java.nio.ByteBuffer): int;
            read(dst: java.nio.ByteBuffer, position: long): int;
            read(dsts: java.nio.ByteBuffer[], offset: int, length: int): long;
            write(src: java.nio.ByteBuffer): int;
            write(src: java.nio.ByteBuffer, position: long): int;
            write(srcs: java.nio.ByteBuffer[], offset: int, length: int): long;
            _path: string;
          }
          interface FileChannelImplInstrumentor extends CombineTypes<[_FileChannelImplInstrumentor, java.lang.Object]> {}
          interface _FileInputStreamInstrumentor$$static extends ClassLike {
          }
          let FileInputStreamInstrumentor: _FileInputStreamInstrumentor$$static;
          interface _FileInputStreamInstrumentor {
            read(): int;
            read(b: byte[]): int;
            read(b: byte[], off: int, len: int): int;
            _path: string;
          }
          interface FileInputStreamInstrumentor extends CombineTypes<[_FileInputStreamInstrumentor, java.lang.Object]> {}
          interface _FileOutputStreamInstrumentor$$static extends ClassLike {
          }
          let FileOutputStreamInstrumentor: _FileOutputStreamInstrumentor$$static;
          interface _FileOutputStreamInstrumentor {
            write(b: int): void;
            write(b: byte[]): void;
            write(b: byte[], off: int, len: int): void;
            _path: string;
          }
          interface FileOutputStreamInstrumentor extends CombineTypes<[_FileOutputStreamInstrumentor, java.lang.Object]> {}
          interface _JDKEvents$$static extends ClassLike {
            addInstrumentation(): void;
            _emitContainerCPUThrottling(): void;
            _emitContainerCPUUsage(): void;
            _emitContainerConfiguration(): void;
            _emitContainerIOUsage(): void;
            _emitContainerMemoryUsage(): void;
            _emitDirectBufferStatistics(): void;
            _emitExceptionStatistics(): void;
            _emitInitialSecurityProperties(): void;
            initialize(): void;
            _initializeContainerEvents(): void;
            remove(): void;
            retransformCallback(klass: java.lang.Class<any>, oldBytes: byte[]): byte[];
            _containerMetrics: jdk.internal.platform.Metrics;
            _emitContainerCPUThrottling: java.lang.Runnable;
            _emitContainerCPUUsage: java.lang.Runnable;
            _emitContainerConfiguration: java.lang.Runnable;
            _emitContainerIOUsage: java.lang.Runnable;
            _emitContainerMemoryUsage: java.lang.Runnable;
            _emitDirectBufferStatistics: java.lang.Runnable;
            _emitExceptionStatistics: java.lang.Runnable;
            _emitInitialSecurityProperties: java.lang.Runnable;
            _eventClasses: java.lang.Class<any>[];
            _initializationTriggered: boolean;
            _instrumentationClasses: java.lang.Class<any>[];
            _jvm: JVM;
            _mirrorEventClasses: java.lang.Class<any>[];
            _targetClasses: java.lang.Class<any>[];
            new(): JDKEvents;
          }
          let JDKEvents: _JDKEvents$$static;
          interface _JDKEvents {
          }
          interface JDKEvents extends CombineTypes<[_JDKEvents, java.lang.Object]> {}
          interface _JIClassInstrumentation$$static extends ClassLike {
            _getOriginalClassBytes(clazz: java.lang.Class<any>): byte[];
            _new(instrumentor: java.lang.Class<any>, target: java.lang.Class<any>, old_target_bytes: byte[]): JIClassInstrumentation;
          }
          let JIClassInstrumentation: _JIClassInstrumentation$$static;
          interface _JIClassInstrumentation {
            getNewBytes(): byte[];
            _makeBytecode(): byte[];
            _instrClassReader: jdk.internal.org.objectweb.asm.ClassReader;
            _instrumentor: java.lang.Class<any>;
            _instrumentorName: string;
            _newBytes: byte[];
            _targetClassReader: jdk.internal.org.objectweb.asm.ClassReader;
            _targetName: string;
          }
          interface JIClassInstrumentation extends CombineTypes<[_JIClassInstrumentation, java.lang.Object]> {}
          interface _JIInliner$$static extends ClassLike {
            _new(api: int, cv: jdk.internal.org.objectweb.asm.ClassVisitor, targetClassName: string, instrumentationClassName: string, targetClassReader: jdk.internal.org.objectweb.asm.ClassReader, instrumentationMethods: java.util.List<java.lang.reflect.Method>): JIInliner;
          }
          let JIInliner: _JIInliner$$static;
          interface _JIInliner {
            _findTargetMethodNode(name: string, desc: string): jdk.internal.org.objectweb.asm.tree.MethodNode;
            _isInstrumentationMethod(name: string, desc: string): boolean;
            visitMethod(access: int, name: string, desc: string, signature: string, exceptions: string[]): jdk.internal.org.objectweb.asm.MethodVisitor;
            _instrumentationClassName: string;
            _instrumentationMethods: java.util.List<java.lang.reflect.Method>;
            _targetClassName: string;
            _targetClassNode: jdk.internal.org.objectweb.asm.tree.ClassNode;
          }
          interface JIInliner extends CombineTypes<[_JIInliner, jdk.internal.org.objectweb.asm.ClassVisitor]> {}
          interface _JIInstrumentationMethod$$static extends ClassLike {
          }
          let JIInstrumentationMethod: _JIInstrumentationMethod$$static;
          interface _JIInstrumentationMethod {
          }
          interface JIInstrumentationMethod extends CombineTypes<[_JIInstrumentationMethod, java.lang.annotation.Annotation, java.lang.Object]> {}
          interface _JIInstrumentationTarget$$static extends ClassLike {
          }
          let JIInstrumentationTarget: _JIInstrumentationTarget$$static;
          interface _JIInstrumentationTarget {
            value(): string;
(): string;
          }
          interface JIInstrumentationTarget extends CombineTypes<[_JIInstrumentationTarget, java.lang.annotation.Annotation, java.lang.Object]> {}
          interface _JIMethodCallInliner$$static extends ClassLike {
            new(access: int, desc: string, mv: jdk.internal.org.objectweb.asm.MethodVisitor, inlineTarget: jdk.internal.org.objectweb.asm.tree.MethodNode, oldClass: string, newClass: string): JIMethodCallInliner;
          }
          let JIMethodCallInliner: _JIMethodCallInliner$$static;
          interface _JIMethodCallInliner {
            _shouldBeInlined(owner: string, name: string, desc: string): boolean;
            visitMaxs(stack: int, locals: int): void;
            visitMethodInsn(opcode: int, owner: string, name: string, desc: string, itf: boolean): void;
            visitTryCatchBlock(start: jdk.internal.org.objectweb.asm.Label, end: jdk.internal.org.objectweb.asm.Label, handler: jdk.internal.org.objectweb.asm.Label, type: string): void;
            _blocks: java.util.List<JIMethodCallInliner$CatchBlock>;
            _inlineTarget: jdk.internal.org.objectweb.asm.tree.MethodNode;
            _inlining: boolean;
            _newClass: string;
            _oldClass: string;
          }
          interface JIMethodCallInliner extends CombineTypes<[_JIMethodCallInliner, jdk.internal.org.objectweb.asm.commons.LocalVariablesSorter]> {}
          interface _JIMethodCallInliner$CatchBlock$$static extends ClassLike {
            _new(start: jdk.internal.org.objectweb.asm.Label, end: jdk.internal.org.objectweb.asm.Label, handler: jdk.internal.org.objectweb.asm.Label, type: string): JIMethodCallInliner$CatchBlock;
          }
          let JIMethodCallInliner$CatchBlock: _JIMethodCallInliner$CatchBlock$$static;
          interface _JIMethodCallInliner$CatchBlock {
            _end: jdk.internal.org.objectweb.asm.Label;
            _handler: jdk.internal.org.objectweb.asm.Label;
            _start: jdk.internal.org.objectweb.asm.Label;
            _type: string;
          }
          interface JIMethodCallInliner$CatchBlock extends CombineTypes<[_JIMethodCallInliner$CatchBlock, java.lang.Object]> {}
          interface _JIMethodInliningAdapter$$static extends ClassLike {
            new(mv: jdk.internal.org.objectweb.asm.commons.LocalVariablesSorter, end: jdk.internal.org.objectweb.asm.Label, acc: int, desc: string, remapper: jdk.internal.org.objectweb.asm.commons.Remapper): JIMethodInliningAdapter;
          }
          let JIMethodInliningAdapter: _JIMethodInliningAdapter$$static;
          interface _JIMethodInliningAdapter {
            _isStatic(acc: int): boolean;
            _newLocalMapping(type: jdk.internal.org.objectweb.asm.Type): int;
            visitInsn(opcode: int): void;
            visitMaxs(stack: int, locals: int): void;
            _end: jdk.internal.org.objectweb.asm.Label;
            _lvs: jdk.internal.org.objectweb.asm.commons.LocalVariablesSorter;
          }
          interface JIMethodInliningAdapter extends CombineTypes<[_JIMethodInliningAdapter, jdk.internal.org.objectweb.asm.commons.RemappingMethodAdapter]> {}
          interface _JIMethodMergeAdapter$$static extends ClassLike {
            new(cv: jdk.internal.org.objectweb.asm.ClassVisitor, cn: jdk.internal.org.objectweb.asm.tree.ClassNode, methodFilter: java.util.List<java.lang.reflect.Method>, typeMappings: JITypeMapping[]): JIMethodMergeAdapter;
          }
          let JIMethodMergeAdapter: _JIMethodMergeAdapter$$static;
          interface _JIMethodMergeAdapter {
            _methodInFilter(name: string, desc: string): boolean;
            visit(version: int, access: int, name: string, signature: string, superName: string, interfaces: string[]): void;
            visitEnd(): void;
            visitMethod(access: int, name: string, desc: string, signature: string, exceptions: string[]): jdk.internal.org.objectweb.asm.MethodVisitor;
            _cn: jdk.internal.org.objectweb.asm.tree.ClassNode;
            _methodFilter: java.util.List<java.lang.reflect.Method>;
            _typeMap: java.util.Map<string,string>;
          }
          interface JIMethodMergeAdapter extends CombineTypes<[_JIMethodMergeAdapter, jdk.internal.org.objectweb.asm.ClassVisitor]> {}
          interface _JITypeMapping$$static extends ClassLike {
          }
          let JITypeMapping: _JITypeMapping$$static;
          interface _JITypeMapping {
            from(): string;
            to(): string;
          }
          interface JITypeMapping extends CombineTypes<[_JITypeMapping, java.lang.annotation.Annotation, java.lang.Object]> {}
          interface _RandomAccessFileInstrumentor$$static extends ClassLike {
          }
          let RandomAccessFileInstrumentor: _RandomAccessFileInstrumentor$$static;
          interface _RandomAccessFileInstrumentor {
            read(): int;
            read(b: byte[]): int;
            read(b: byte[], off: int, len: int): int;
            write(b: int): void;
            write(b: byte[]): void;
            write(b: byte[], off: int, len: int): void;
            _path: string;
          }
          interface RandomAccessFileInstrumentor extends CombineTypes<[_RandomAccessFileInstrumentor, java.lang.Object]> {}
          interface _SocketChannelImplInstrumentor$$static extends ClassLike {
          }
          let SocketChannelImplInstrumentor: _SocketChannelImplInstrumentor$$static;
          interface _SocketChannelImplInstrumentor {
            getRemoteAddress(): java.net.SocketAddress;
            read(dst: java.nio.ByteBuffer): int;
            read(dsts: java.nio.ByteBuffer[], offset: int, length: int): long;
            write(buf: java.nio.ByteBuffer): int;
            write(srcs: java.nio.ByteBuffer[], offset: int, length: int): long;
          }
          interface SocketChannelImplInstrumentor extends CombineTypes<[_SocketChannelImplInstrumentor, java.lang.Object]> {}
          interface _SocketInputStreamInstrumentor$$static extends ClassLike {
          }
          let SocketInputStreamInstrumentor: _SocketInputStreamInstrumentor$$static;
          interface _SocketInputStreamInstrumentor {
            read(b: byte[], off: int, length: int): int;
            _parent: java.net.Socket;
          }
          interface SocketInputStreamInstrumentor extends CombineTypes<[_SocketInputStreamInstrumentor, java.lang.Object]> {}
          interface _SocketOutputStreamInstrumentor$$static extends ClassLike {
          }
          let SocketOutputStreamInstrumentor: _SocketOutputStreamInstrumentor$$static;
          interface _SocketOutputStreamInstrumentor {
            write(b: byte[], off: int, len: int): void;
            _parent: java.net.Socket;
          }
          interface SocketOutputStreamInstrumentor extends CombineTypes<[_SocketOutputStreamInstrumentor, java.lang.Object]> {}
          interface _ThrowableTracer$$static extends ClassLike {
            numThrowables(): long;
            traceError(e: java.lang.Error, message: string): void;
            traceThrowable(t: java.lang.Throwable, message: string): void;
            _numThrowables: java.util.concurrent.atomic.AtomicLong;
            new(): ThrowableTracer;
          }
          let ThrowableTracer: _ThrowableTracer$$static;
          interface _ThrowableTracer {
          }
          interface ThrowableTracer extends CombineTypes<[_ThrowableTracer, java.lang.Object]> {}
        }
        module jfc {
          module model {
            interface _AbortException$$static extends ClassLike {
              _serialVersionUID: long;
              new(): AbortException;
            }
            let AbortException: _AbortException$$static;
            interface _AbortException {
            }
            interface AbortException extends CombineTypes<[_AbortException, java.lang.Exception]> {}
            interface _Constraint$$static extends ClassLike {
              any(type: java.lang.Class<XmlElement>): Constraint;
              atLeast(type: java.lang.Class<XmlElement>, min: int): Constraint;
              _new(type: java.lang.Class<XmlElement>, min: int, max: int): Constraint;
            }
            let Constraint: _Constraint$$static;
            interface _Constraint {
              equals(o: any): boolean;
              hashCode(): int;
              max(): int;
              min(): int;
              toString(): string;
              type(): java.lang.Class<XmlElement>;
            }
            interface Constraint extends CombineTypes<[_Constraint, java.lang.Record]> {}
            interface _ControlElement$$static extends ClassLike {
            }
            let ControlElement: _ControlElement$$static;
            interface _ControlElement {
              getName(): string;
(): string;
            }
            interface ControlElement extends CombineTypes<[_ControlElement, java.lang.Object]> {}
            interface _JFCModel$$static extends ClassLike {
              create(file: SecuritySupport$SafePath, logger: java.util.function.Consumer<string>): JFCModel;
              new(reader: java.io.Reader, logger: java.util.function.Consumer<string>): JFCModel;
              new(logger: java.util.function.Consumer<string>): JFCModel;
            }
            let JFCModel: _JFCModel$$static;
            interface _JFCModel {
              _add(control: ControlElement): void;
              _addControls(): void;
              configure(name: string, value: string): void;
              configure(ui: UserInterface): void;
              getConfiguration(): XmlConfiguration;
              _getControlElements(name: string): java.util.List<ControlElement>;
              getInputs(): java.util.List<XmlInput>;
              getSettings(): java.util.LinkedHashMap<string,string>;
              parse(file: SecuritySupport$SafePath): void;
              saveToFile(path: SecuritySupport$SafePath): void;
              setLabel(label: string): void;
              _wireConditions(): void;
              _wireExpression(parent: XmlElement, element: XmlElement): void;
              _wireSettings(logger: java.util.function.Consumer<string>): void;
              _wireTest(test: XmlTest): void;
              _configuration: XmlConfiguration;
              _controls: java.util.Map<string,java.util.List<ControlElement>>;
              _logger: java.util.function.Consumer<string>;
            }
            interface JFCModel extends CombineTypes<[_JFCModel, java.lang.Object]> {}
            interface _JFCModelException$$static extends ClassLike {
              _serialVersionUID: long;
              new(errorMessage: string): JFCModelException;
            }
            let JFCModelException: _JFCModelException$$static;
            interface _JFCModelException {
            }
            interface JFCModelException extends CombineTypes<[_JFCModelException, java.lang.Exception]> {}
            interface _Parser$$static extends ClassLike {
              _parse(reader: java.io.Reader): XmlConfiguration;
              _new(): Parser;
            }
            let Parser: _Parser$$static;
            interface _Parser {
            }
            interface Parser extends CombineTypes<[_Parser, java.lang.Object]> {}
            interface _Parser$ConfigurationHandler$$static extends ClassLike {
            }
            let Parser$ConfigurationHandler: _Parser$ConfigurationHandler$$static;
            interface _Parser$ConfigurationHandler {
              _addAttributes(element: XmlElement, attributes: jdk.internal.org.xml.sax.Attributes): void;
              characters(ch: char[], start: int, length: int): void;
              endElement(uri: string, localName: string, qName: string): void;
              startElement(uri: string, localName: string, qName: string, attributes: jdk.internal.org.xml.sax.Attributes): void;
              _buffer: model$stringBuilder;
              _configuration: XmlConfiguration;
              _stack: java.util.Deque<XmlElement>;
            }
            interface Parser$ConfigurationHandler extends CombineTypes<[_Parser$ConfigurationHandler, jdk.internal.org.xml.sax.helpers.DefaultHandler]> {}
            interface _PrettyPrinter$$static extends ClassLike {
              _new(out: java.io.PrintWriter): PrettyPrinter;
            }
            let PrettyPrinter: _PrettyPrinter$$static;
            interface _PrettyPrinter {
              _prettyPrint(indent: string, element: XmlElement): void;
              _print(configuration: XmlConfiguration): void;
              _printAttributes(attributes: java.util.Map<string,string>): void;
              _printComment(indent: string, element: XmlElement): void;
              _printHeader(): void;
              _out: java.io.PrintWriter;
            }
            interface PrettyPrinter extends CombineTypes<[_PrettyPrinter, java.lang.Object]> {}
            interface _Result$$static extends ClassLike {
              of(value: string): Result;
              _new(value: string): Result;
            }
            let Result: _Result$$static;
            interface _Result {
              equals(o: any): boolean;
              hashCode(): int;
              isFalse(): boolean;
              isNull(): boolean;
              isTrue(): boolean;
              toString(): string;
              value(): string;
            }
            interface Result extends CombineTypes<[_Result, java.lang.Record]> {}
            interface _SettingsLog$$static extends ClassLike {
              enable(): void;
              flush(): void;
              _log(setting: XmlSetting, value: string): void;
              _enabled: boolean;
              _settings: java.util.Map<string,string>;
              new(): SettingsLog;
            }
            let SettingsLog: _SettingsLog$$static;
            interface _SettingsLog {
            }
            interface SettingsLog extends CombineTypes<[_SettingsLog, java.lang.Object]> {}
            interface _UserInterface$$static extends ClassLike {
              new(): UserInterface;
            }
            let UserInterface: _UserInterface$$static;
            interface _UserInterface {
              println(): void;
              println(text: string): void;
              readLine(): string;
            }
            interface UserInterface extends CombineTypes<[_UserInterface, java.lang.Object]> {}
            interface _Utilities$$static extends ClassLike {
              _addCharacter(s: Utilities$stringBuilder, c: char): void;
              _checkValid(value: string, valid: any[]): void;
              _checkValid(value: string, ...valid: any[]): void;
              _elementName(type: java.lang.Class<XmlElement>): string;
              _escapeAll(text: string): string;
              _instantiate(type: java.lang.Class<XmlElement>): XmlElement;
              _parseForUnit(s: string, unit: string): string;
              _parseTimespan(s: string): string;
              _UNITS: string[];
              new(): Utilities;
            }
            let Utilities: _Utilities$$static;
            interface _Utilities {
            }
            interface Utilities extends CombineTypes<[_Utilities, java.lang.Object]> {}
            interface _XmlAnd$$static extends ClassLike {
              _new(): XmlAnd;
            }
            let XmlAnd: _XmlAnd$$static;
            interface _XmlAnd {
              _evaluate(): Result;
              _isEntity(): boolean;
            }
            interface XmlAnd extends CombineTypes<[_XmlAnd, jdk.jfr.internal.jfc.model.XmlExpression]> {}
            interface _XmlCondition$$static extends ClassLike {
              _new(): XmlCondition;
            }
            let XmlCondition: _XmlCondition$$static;
            interface _XmlCondition {
              _attributes(): java.util.List<string>;
              _evaluate(): Result;
              getFalseValue(): Result;
              getName(): string;
              getTrueValue(): Result;
              _validateChildConstraints(): void;
            }
            interface XmlCondition extends CombineTypes<[_XmlCondition, jdk.jfr.internal.jfc.model.ControlElement, jdk.jfr.internal.jfc.model.XmlExpression]> {}
            interface _XmlConfiguration$$static extends ClassLike {
              _new(): XmlConfiguration;
            }
            let XmlConfiguration: _XmlConfiguration$$static;
            interface _XmlConfiguration {
              _attributes(): java.util.List<string>;
              _comment(): string;
              _constraints(): java.util.List<Constraint>;
              getControls(): java.util.List<XmlControl>;
              getDescription(): java.util.Optional<string>;
              _getEvent(eventName: string, add: boolean): XmlEvent;
              getEvents(): java.util.List<XmlEvent>;
              getLabel(): java.util.Optional<string>;
              getProvider(): java.util.Optional<string>;
              getVersion(): java.util.Optional<string>;
              _validateAttributes(): void;
            }
            interface XmlConfiguration extends CombineTypes<[_XmlConfiguration, jdk.jfr.internal.jfc.model.XmlElement]> {}
            interface _XmlControl$$static extends ClassLike {
              _new(): XmlControl;
            }
            let XmlControl: _XmlControl$$static;
            interface _XmlControl {
              _comment(): string;
              _constraints(): java.util.List<Constraint>;
              getConditions(): java.util.List<XmlCondition>;
              getControlElements(): java.util.List<ControlElement>;
              getInputs(): java.util.List<XmlInput>;
            }
            interface XmlControl extends CombineTypes<[_XmlControl, jdk.jfr.internal.jfc.model.XmlElement]> {}
            interface _XmlElement$$static extends ClassLike {
              _new(): XmlElement;
            }
            let XmlElement: _XmlElement$$static;
            interface _XmlElement {
              _addChild(element: XmlElement): void;
              _addListener(listener: XmlElement): void;
              _addProducer(producer: XmlElement): void;
              _attribute(name: string): string;
              _attributes(): java.util.List<string>;
              _comment(): string;
              _constraints(): java.util.List<Constraint>;
              _count(type: java.lang.Class<XmlElement>): int;
              _createChild(name: string): XmlElement;
              _elements<T>(type: java.lang.Class<T>): java.util.List<T>;
              _evaluate(): Result;
              _getAttributes(): java.util.Map<string,string>;
              _getChildren(): java.util.List<XmlElement>;
              _getContent(): string;
              _getElementName(): string;
              _getParent(): XmlElement;
              _getProducers(): java.util.List<XmlElement>;
              _hasContent(): boolean;
              _instantiate(name: string): XmlElement;
              _isEntity(): boolean;
              _notifyListeners(): void;
              _onChange(): void;
              _optional(name: string): java.util.Optional<string>;
              _setAttribute(key: string, value: string): void;
              _setContent(content: string): void;
              _validate(): void;
              _validateAttributes(): void;
              _validateChildConstraints(): void;
              _validateChildren(): void;
              _validateConstraint(c: Constraint): void;
              _attributes: java.util.Map<string,string>;
              _content: string;
              _elementName: string;
              _elements: java.util.List<XmlElement>;
              _listeners: java.util.List<XmlElement>;
              _parent: XmlElement;
              _producers: java.util.List<XmlElement>;
            }
            interface XmlElement extends CombineTypes<[_XmlElement, java.lang.Object]> {}
            interface _XmlEvent$$static extends ClassLike {
              _new(): XmlEvent;
            }
            let XmlEvent: _XmlEvent$$static;
            interface _XmlEvent {
              _attributes(): java.util.List<string>;
              _constraints(): java.util.List<Constraint>;
              getName(): string;
              _getSetting(settingName: string, add: boolean): XmlSetting;
              getSettings(): java.util.List<XmlSetting>;
            }
            interface XmlEvent extends CombineTypes<[_XmlEvent, jdk.jfr.internal.jfc.model.XmlElement]> {}
            interface _XmlExpression$$static extends ClassLike {
              _new(): XmlExpression;
            }
            let XmlExpression: _XmlExpression$$static;
            interface _XmlExpression {
              _constraints(): java.util.List<Constraint>;
              getExpressions(): java.util.List<XmlExpression>;
              _validateChildConstraints(): void;
            }
            interface XmlExpression extends CombineTypes<[_XmlExpression, jdk.jfr.internal.jfc.model.XmlElement]> {}
            interface _XmlFlag$$static extends ClassLike {
              _new(): XmlFlag;
            }
            let XmlFlag: _XmlFlag$$static;
            interface _XmlFlag {
              configure(value: string): void;
              configure(ui: UserInterface): void;
              _evaluate(): Result;
              getOptionSyntax(): string;
              _read(ui: UserInterface, defaultValue: Result): boolean;
            }
            interface XmlFlag extends CombineTypes<[_XmlFlag, jdk.jfr.internal.jfc.model.XmlInput]> {}
            interface _XmlInput$$static extends ClassLike {
              new(): XmlInput;
            }
            let XmlInput: _XmlInput$$static;
            interface _XmlInput {
              _attributes(): java.util.List<string>;
              _configure(a0: UserInterface): void;
              _configure(a0: string): void;
              getContentType(): java.util.Optional<string>;
              getLabel(): string;
              getName(): string;
              getOptionSyntax(): string;
            }
            interface XmlInput extends CombineTypes<[_XmlInput, jdk.jfr.internal.jfc.model.XmlElement, jdk.jfr.internal.jfc.model.ControlElement]> {}
            interface _XmlNot$$static extends ClassLike {
              _new(): XmlNot;
            }
            let XmlNot: _XmlNot$$static;
            interface _XmlNot {
              _evaluate(): Result;
              _isEntity(): boolean;
              _validateChildConstraints(): void;
            }
            interface XmlNot extends CombineTypes<[_XmlNot, jdk.jfr.internal.jfc.model.XmlExpression]> {}
            interface _XmlOption$$static extends ClassLike {
              _new(): XmlOption;
            }
            let XmlOption: _XmlOption$$static;
            interface _XmlOption {
              _attributes(): java.util.List<string>;
              getLabel(): string;
              getName(): string;
              _isEntity(): boolean;
            }
            interface XmlOption extends CombineTypes<[_XmlOption, jdk.jfr.internal.jfc.model.XmlElement]> {}
            interface _XmlOr$$static extends ClassLike {
              _new(): XmlOr;
            }
            let XmlOr: _XmlOr$$static;
            interface _XmlOr {
              _evaluate(): Result;
              _isEntity(): boolean;
            }
            interface XmlOr extends CombineTypes<[_XmlOr, jdk.jfr.internal.jfc.model.XmlExpression]> {}
            interface _XmlSelection$$static extends ClassLike {
              _new(): XmlSelection;
            }
            let XmlSelection: _XmlSelection$$static;
            interface _XmlSelection {
              _attributes(): java.util.List<string>;
              configure(value: string): void;
              configure(ui: UserInterface): void;
              _constraints(): java.util.List<Constraint>;
              _evaluate(): Result;
              getDefault(): string;
              getOptionSyntax(): string;
              getOptions(): java.util.List<XmlOption>;
              _getSelected(): XmlOption;
            }
            interface XmlSelection extends CombineTypes<[_XmlSelection, jdk.jfr.internal.jfc.model.XmlInput]> {}
            interface _XmlSetting$$static extends ClassLike {
              _new(): XmlSetting;
            }
            let XmlSetting: _XmlSetting$$static;
            interface _XmlSetting {
              _attributes(): java.util.List<string>;
              _evaluate(): Result;
              getControl(): java.util.Optional<string>;
              getFullName(): string;
              getName(): string;
              isEntity(): boolean;
              onChange(): void;
              _setContent(value: string): void;
            }
            interface XmlSetting extends CombineTypes<[_XmlSetting, jdk.jfr.internal.jfc.model.XmlElement]> {}
            interface _XmlTest$$static extends ClassLike {
              _new(): XmlTest;
            }
            let XmlTest: _XmlTest$$static;
            interface _XmlTest {
              _attributes(): java.util.List<string>;
              _evaluate(): Result;
              getName(): string;
              getOperator(): string;
              getValue(): string;
              _isEntity(): boolean;
              _validateAttributes(): void;
              _validateChildConstraints(): void;
            }
            interface XmlTest extends CombineTypes<[_XmlTest, jdk.jfr.internal.jfc.model.XmlExpression]> {}
            interface _XmlText$$static extends ClassLike {
              _new(): XmlText;
            }
            let XmlText: _XmlText$$static;
            interface _XmlText {
              configure(value: string): void;
              configure(ui: UserInterface): void;
              _evaluate(): Result;
              getOptionSyntax(): string;
              _isTimespan(): boolean;
              _readInput(ui: UserInterface): boolean;
            }
            interface XmlText extends CombineTypes<[_XmlText, jdk.jfr.internal.jfc.model.XmlInput]> {}
          }
          interface _JFC$$static extends ClassLike {
            create(name: string, reader: java.io.Reader): Configuration;
            createKnown(name: string): Configuration;
            createSafePath(path: string): SecuritySupport$SafePath;
            _exceptionToVerb(e: java.lang.Exception): string;
            formatException(prefix: string, e: java.lang.Exception, input: string): string;
            getConfigurations(): java.util.List<Configuration>;
            _getKnownConfigurations(): java.util.List<JFC$KnownConfiguration>;
            getPredefined(name: string): Configuration;
            nameFromPath(file: java.nio.file.Path): string;
            newReader(sf: SecuritySupport$SafePath): java.io.Reader;
            _nullSafeFileName(file: java.nio.file.Path): string;
            _read(source: java.io.InputStream, initialSize: int): byte[];
            _readContent(source: java.io.InputStream): string;
            _BUFFER_SIZE: int;
            _MAXIMUM_FILE_SIZE: int;
            _MAX_BUFFER_SIZE: int;
            _knownConfigurations: java.util.List<JFC$KnownConfiguration>;
          }
          let JFC: _JFC$$static;
          interface _JFC {
          }
          interface JFC extends CombineTypes<[_JFC, java.lang.Object]> {}
          interface _JFC$KnownConfiguration$$static extends ClassLike {
            _readContent(knownPath: SecuritySupport$SafePath): string;
            new(knownPath: SecuritySupport$SafePath): JFC$KnownConfiguration;
          }
          let JFC$KnownConfiguration: _JFC$KnownConfiguration$$static;
          interface _JFC$KnownConfiguration {
            getConfigurationFile(): Configuration;
            getName(): string;
            isNamed(name: string): boolean;
            _configuration: Configuration;
            _content: string;
            _filename: string;
            _name: string;
            _path: SecuritySupport$SafePath;
          }
          interface JFC$KnownConfiguration extends CombineTypes<[_JFC$KnownConfiguration, java.lang.Object]> {}
          interface _JFCParser$$static extends ClassLike {
            createConfiguration(name: string, reader: java.io.Reader): Configuration;
            createConfiguration(name: string, content: string): Configuration;
            _parseXML(content: string, ch: JFCParserHandler): void;
            _readContent(r: java.io.Reader): string;
            _FILE_EXTENSION: string;
            _MAXIMUM_FILE_SIZE: int;
            _new(): JFCParser;
          }
          let JFCParser: _JFCParser$$static;
          interface _JFCParser {
          }
          interface JFCParser extends CombineTypes<[_JFCParser, java.lang.Object]> {}
          interface _JFCParserHandler$$static extends ClassLike {
            _ATTRIBUTE_DESCRIPTION: string;
            _ATTRIBUTE_LABEL: string;
            _ATTRIBUTE_NAME: string;
            _ATTRIBUTE_PROVIDER: string;
            _ATTRIBUTE_VERSION: string;
            _ELEMENT_CONFIGURATION: string;
            _ELEMENT_EVENT_TYPE: string;
            _ELEMENT_SETTING: string;
            _new(): JFCParserHandler;
          }
          let JFCParserHandler: _JFCParserHandler$$static;
          interface _JFCParserHandler {
            characters(ch: char[], start: int, length: int): void;
            endElement(uri: string, localName: string, qName: string): void;
            _getOptional(attributes: jdk.internal.org.xml.sax.Attributes, name: string, defaultValue: string): string;
            startElement(uri: string, localName: string, qName: string, attributes: jdk.internal.org.xml.sax.Attributes): void;
            _currentCharacters: jfc$stringBuilder;
            _currentEventName: string;
            _currentSettingsName: string;
            _description: string;
            _label: string;
            _provider: string;
            _settings: java.util.Map<string,string>;
          }
          interface JFCParserHandler extends CombineTypes<[_JFCParserHandler, jdk.internal.org.xml.sax.helpers.DefaultHandler]> {}
        }
        module management {
          interface _ChunkFilename$$static extends ClassLike {
            newPriviliged(directory: java.nio.file.Path): ChunkFilename;
            newUnpriviliged(directory: java.nio.file.Path): ChunkFilename;
            _FILE_EXTENSION: string;
            _MAX_CHUNK_NAMES: int;
          }
          let ChunkFilename: _ChunkFilename$$static;
          interface _ChunkFilename {
            _makeExtendedName(filename: string, counter: int): string;
            next(time: java.time.LocalDateTime): string;
            _counter: int;
            _directory: java.nio.file.Path;
            _fileAcess: internal.consumer.FileAccess;
            _lastPath: java.nio.file.Path;
          }
          interface ChunkFilename extends CombineTypes<[_ChunkFilename, java.lang.Object]> {}
          interface _EventByteStream$$static extends ClassLike {
            newFinishedStream(is: java.io.InputStream, blockSize: int): EventByteStream;
            newOngoingStream(recording: Recording, blockSize: int, startTimeNanos: long, a3: long): EventByteStream;
            readonly NAME: string;
            _idCounter: java.util.concurrent.atomic.AtomicLong;
            new(): EventByteStream;
          }
          let EventByteStream: _EventByteStream$$static;
          interface _EventByteStream {
            getId(): long;
            getLastTouched(): long;
            read(): byte[];
(): byte[];
            _touch(): void;
            _identifier: long;
            _time: long;
          }
          interface EventByteStream extends CombineTypes<[_EventByteStream, java.io.Closeable, java.lang.Object]> {}
          interface _EventSettingsModifier$$static extends ClassLike {
          }
          let EventSettingsModifier: _EventSettingsModifier$$static;
          interface _EventSettingsModifier {
            toMap(): java.util.Map<string,string>;
            with(a0: string, a1: string): void;
          }
          interface EventSettingsModifier extends CombineTypes<[_EventSettingsModifier, java.lang.Object]> {}
          interface _ManagementSupport$$static extends ClassLike {
            activateStreamBarrier(stream: jfr.consumer.EventStream): StreamBarrier;
            checkSetDestination(recording: Recording, destination: string): void;
            epochNanosToInstant(epochNanos: long): java.time.Instant;
            formatTimespan(dValue: java.time.Duration, separation: string): string;
            getDestinationOriginalText(recording: Recording): string;
            getEventTypes(): java.util.List<EventType>;
            getStartTimeNanos(recording: Recording): long;
            logDebug(message: string): void;
            logError(message: string): void;
            newConfiguration(name: string, label: string, description: string, provider: string, settings: java.util.Map<string,string>, contents: string): Configuration;
            newEventDirectoryStream(acc: java.security.AccessControlContext, directory: java.nio.file.Path, confs: java.util.List<Configuration>): jfr.consumer.EventStream;
            newEventSettings(esm: EventSettingsModifier): EventSettings;
            parseTimespan(s: string): long;
            removePath(recording: Recording, path: java.nio.file.Path): void;
            setCloseOnComplete(stream: jfr.consumer.EventStream, closeOnComplete: boolean): void;
            setOnChunkCompleteHandler(stream: jfr.consumer.EventStream, consumer: java.util.function.Consumer<long>): void;
            new(): ManagementSupport;
          }
          let ManagementSupport: _ManagementSupport$$static;
          interface _ManagementSupport {
          }
          interface ManagementSupport extends CombineTypes<[_ManagementSupport, java.lang.Object]> {}
          interface _StreamBarrier$$static extends ClassLike {
            new(): StreamBarrier;
          }
          let StreamBarrier: _StreamBarrier$$static;
          interface _StreamBarrier {
            activate(): void;
            check(): void;
            close(): void;
            getStreamEnd(): long;
            hasStreamEnd(): boolean;
            setStreamEnd(timestamp: long): void;
            _activated: boolean;
            _end: long;
          }
          interface StreamBarrier extends CombineTypes<[_StreamBarrier, java.io.Closeable, java.lang.Object]> {}
          interface _StreamCleanupTask$$static extends ClassLike {
            _new(streamManager: StreamManager, stream: EventByteStream): StreamCleanupTask;
          }
          let StreamCleanupTask: _StreamCleanupTask$$static;
          interface _StreamCleanupTask {
            run(): void;
            _manager: StreamManager;
            _stream: EventByteStream;
          }
          interface StreamCleanupTask extends CombineTypes<[_StreamCleanupTask, java.util.TimerTask]> {}
          interface _StreamManager$$static extends ClassLike {
            readonly DEFAULT_BLOCK_SIZE: int;
            readonly TIME_OUT: long;
            new(): StreamManager;
          }
          let StreamManager: _StreamManager$$static;
          interface _StreamManager {
            create(is: java.io.InputStream, blockSize: int): EventByteStream;
            createOngoing(recording: Recording, blockSize: int, startTime: java.time.Instant, endTime: java.time.Instant): EventByteStream;
            destroy(stream: EventByteStream): void;
            getStream(streamIdentifer: long): EventByteStream;
            scheduleAbort(s: EventByteStream, when: long): void;
            _streams: java.util.Map<long,EventByteStream>;
            _timer: java.util.Timer;
          }
          interface StreamManager extends CombineTypes<[_StreamManager, java.lang.Object]> {}
        }
        module periodic {
          interface _Batch$$static extends ClassLike {
            new(period: long): Batch;
          }
          let Batch: _Batch$$static;
          interface _Batch {
            add(task: PeriodicTask): void;
            clear(): void;
            getDelta(): long;
            getPeriod(): long;
            getTasks(): java.util.List<PeriodicTask>;
            isEmpty(): boolean;
            setDelta(delta: long): void;
            _delta: long;
            _period: long;
            _tasks: java.util.List<PeriodicTask>;
          }
          interface Batch extends CombineTypes<[_Batch, java.lang.Object]> {}
          interface _BatchManager$$static extends ClassLike {
            _new(): BatchManager;
          }
          let BatchManager: _BatchManager$$static;
          interface _BatchManager {
            _activeSortedTasks(unsorted: java.util.List<PeriodicTask>): java.util.List<PeriodicTask>;
            _findBatch(period: long, a1: Batch): Batch;
            getBatches(): java.util.List<Batch>;
            getIteration(): long;
            _groupTasksIntoBatches(tasks: java.util.List<PeriodicTask>): void;
            _logBatches(): void;
            _logTrace(text: string): void;
            refresh(iteration: long, a1: java.util.List<PeriodicTask>): void;
            _batches: java.util.List<Batch>;
            _iteration: long;
          }
          interface BatchManager extends CombineTypes<[_BatchManager, java.lang.Object]> {}
          interface _EventTask$$static extends ClassLike {
            new(eventType: PlatformEventType, lookupKey: LookupKey): EventTask;
          }
          let EventTask: _EventTask$$static;
          interface _EventTask {
            _fetchPeriod(): long;
            getEventType(): PlatformEventType;
            isSchedulable(): boolean;
            _eventType: PlatformEventType;
          }
          interface EventTask extends CombineTypes<[_EventTask, jdk.jfr.internal.periodic.PeriodicTask]> {}
          interface _FlushTask$$static extends ClassLike {
            new(): FlushTask;
          }
          let FlushTask: _FlushTask$$static;
          interface _FlushTask {
            execute(timestamp: long, a1: PeriodicType): void;
            _fetchPeriod(): long;
            isSchedulable(): boolean;
            setInterval(millis: long): void;
            _flushInterval: long;
          }
          interface FlushTask extends CombineTypes<[_FlushTask, jdk.jfr.internal.periodic.PeriodicTask]> {}
          interface _JDKEventTask$$static extends ClassLike {
            new(eventClass: java.lang.Class<Event>, runnable: java.lang.Runnable): JDKEventTask;
          }
          let JDKEventTask: _JDKEventTask$$static;
          interface _JDKEventTask {
            execute(timestamp: long, a1: PeriodicType): void;
          }
          interface JDKEventTask extends CombineTypes<[_JDKEventTask, jdk.jfr.internal.periodic.JavaEventTask]> {}
          interface _JVMEventTask$$static extends ClassLike {
            _lock: java.util.concurrent.locks.Lock;
            new(eventType: PlatformEventType): JVMEventTask;
          }
          let JVMEventTask: _JVMEventTask$$static;
          interface _JVMEventTask {
            execute(timestamp: long, a1: PeriodicType): void;
          }
          interface JVMEventTask extends CombineTypes<[_JVMEventTask, jdk.jfr.internal.periodic.EventTask]> {}
          interface _JavaEventTask$$static extends ClassLike {
            _toPlatformEventType(eventClass: java.lang.Class<Event>): PlatformEventType;
            new(eventClass: java.lang.Class<Event>, runnable: java.lang.Runnable): JavaEventTask;
          }
          let JavaEventTask: _JavaEventTask$$static;
          interface _JavaEventTask {
            _getRunnable(): java.lang.Runnable;
            _runnable: java.lang.Runnable;
          }
          interface JavaEventTask extends CombineTypes<[_JavaEventTask, jdk.jfr.internal.periodic.EventTask]> {}
          interface _LookupKey$$static extends ClassLike {
            new(object: any): LookupKey;
          }
          let LookupKey: _LookupKey$$static;
          interface _LookupKey {
            equals(that: any): boolean;
            hashCode(): int;
            _object: any;
          }
          interface LookupKey extends CombineTypes<[_LookupKey, java.lang.Object]> {}
          interface _PeriodicEvents$$static extends ClassLike {
            addJDKEvent(eventClass: java.lang.Class<Event>, runnable: java.lang.Runnable): void;
            addJVMEvent(eventType: PlatformEventType): void;
            addUserEvent(acc: java.security.AccessControlContext, eventClass: java.lang.Class<Event>, runnable: java.lang.Runnable): void;
            doChunkBegin(): void;
            doChunkEnd(): void;
            doPeriodic(): long;
            removeEvent(runnable: java.lang.Runnable): boolean;
            setChanged(): void;
            setFlushInterval(millis: long): void;
            _batchManager: BatchManager;
            _flushTask: FlushTask;
            _lastTimeMillis: long;
            _settingsIteration: java.util.concurrent.atomic.AtomicLong;
            _taskRepository: TaskRepository;
            new(): PeriodicEvents;
          }
          let PeriodicEvents: _PeriodicEvents$$static;
          interface _PeriodicEvents {
          }
          interface PeriodicEvents extends CombineTypes<[_PeriodicEvents, java.lang.Object]> {}
          interface _PeriodicTask$$static extends ClassLike {
            new(lookupKey: LookupKey, name: string): PeriodicTask;
          }
          let PeriodicTask: _PeriodicTask$$static;
          interface _PeriodicTask {
            execute(a0: long, a1: PeriodicType): void;
            _fetchPeriod(): long;
            getBatch(): Batch;
            getLookupKey(): LookupKey;
            getName(): string;
            getPeriod(): long;
            isSchedulable(): boolean;
            _logChunk(periodicType: PeriodicType): void;
            _logInterval(trace: boolean, action: string): void;
            run(timestamp: long, a1: PeriodicType): void;
            setBatch(batch: Batch): void;
            shouldRun(): boolean;
            tick(): void;
            updatePeriod(): void;
            _batch: Batch;
            _counter: long;
            _lookupKey: LookupKey;
            _name: string;
            _period: long;
          }
          interface PeriodicTask extends CombineTypes<[_PeriodicTask, java.lang.Object]> {}
          interface _PeriodicType$$static extends ClassLike {
            valueOf(name: string): PeriodicType;
            values(): PeriodicType[];
            readonly BEGIN_CHUNK: PeriodicType;
            readonly END_CHUNK: PeriodicType;
            readonly INTERVAL: PeriodicType;
          }
          let PeriodicType: _PeriodicType$$static;
          interface _PeriodicType {
          }
          interface PeriodicType extends CombineTypes<[_PeriodicType]> {}
          interface _TaskRepository$$static extends ClassLike {
            _new(): TaskRepository;
          }
          let TaskRepository: _TaskRepository$$static;
          interface _TaskRepository {
            add(task: EventTask): void;
            getTasks(): java.util.List<EventTask>;
            _logTask(action: string, type: PlatformEventType): void;
            removeTask(r: java.lang.Runnable): boolean;
            _cache: java.util.List<EventTask>;
            _lookup: java.util.Map<LookupKey,EventTask>;
          }
          interface TaskRepository extends CombineTypes<[_TaskRepository, java.lang.Object]> {}
          interface _UserEventTask$$static extends ClassLike {
            new(controlContext: java.security.AccessControlContext, eventClass: java.lang.Class<Event>, runnable: java.lang.Runnable): UserEventTask;
          }
          let UserEventTask: _UserEventTask$$static;
          interface _UserEventTask {
            execute(timestamp: long, a1: PeriodicType): void;
            _execute(): void;
            _controlContext: java.security.AccessControlContext;
          }
          interface UserEventTask extends CombineTypes<[_UserEventTask, jdk.jfr.internal.periodic.JavaEventTask]> {}
        }
        module query {
          interface _Aggregator$$static extends ClassLike {
            valueOf(name: string): Aggregator;
            values(): Aggregator[];
            readonly AVERAGE: Aggregator;
            readonly COUNT: Aggregator;
            readonly DIFFERENCE: Aggregator;
            readonly FIRST: Aggregator;
            readonly LAST: Aggregator;
            readonly LAST_BATCH: Aggregator;
            readonly LIST: Aggregator;
            readonly MAXIMUM: Aggregator;
            readonly MEDIAN: Aggregator;
            readonly MINIMUM: Aggregator;
            readonly MISSING: Aggregator;
            readonly P90: Aggregator;
            readonly P95: Aggregator;
            readonly P99: Aggregator;
            readonly P999: Aggregator;
            readonly STANDARD_DEVIATION: Aggregator;
            readonly SUM: Aggregator;
            readonly UNIQUE: Aggregator;
          }
          let Aggregator: _Aggregator$$static;
          interface _Aggregator {
            readonly name: string;
          }
          interface Aggregator extends CombineTypes<[_Aggregator]> {}
          interface _Configuration$$static extends ClassLike {
            readonly MAX_PREFERRED_WIDTH: int;
            readonly MIN_PREFERRED_WIDTH: int;
            readonly PREFERRED_WIDTH: int;
            new(): Configuration;
          }
          let Configuration: _Configuration$$static;
          interface _Configuration {
            cellHeight: int;
            endTime: java.time.Instant;
            output: internal.util.Output;
            startTime: java.time.Instant;
            title: string;
            truncate: Configuration$Truncate;
            verbose: boolean;
            verboseHeaders: boolean;
            verboseTitle: boolean;
            width: int;
          }
          interface Configuration extends CombineTypes<[_Configuration, java.lang.Object]> {}
          interface _Configuration$Truncate$$static extends ClassLike {
            valueOf(name: string): Configuration$Truncate;
            values(): Configuration$Truncate[];
            readonly BEGINNING: Configuration$Truncate;
            readonly END: Configuration$Truncate;
          }
          let Configuration$Truncate: _Configuration$Truncate$$static;
          interface _Configuration$Truncate {
          }
          interface Configuration$Truncate extends CombineTypes<[_Configuration$Truncate]> {}
          interface _Field$$static extends ClassLike {
            new(type: FilteredType, name: string): Field;
          }
          let Field: _Field$$static;
          interface _Field {
            toString(): string;
            _aggregator: Aggregator;
            _alignLeft: boolean;
            _bits: boolean;
            _bytes: boolean;
            _cellHeight: int;
            _dataType: string;
            fixedWidth: boolean;
            _fractionalType: boolean;
            _frequency: boolean;
            _grouper: Query$Grouper;
            _index: int;
            _integralType: boolean;
            _label: string;
            _last: java.time.Instant;
            _lexicalSort: boolean;
            _memoryAddress: boolean;
            missingText: string;
            _name: string;
            _normalized: boolean;
            _orderer: Query$OrderElement;
            _percentage: boolean;
            _sourceFields: java.util.List<Field>;
            _timespan: boolean;
            _timestamp: boolean;
            _truncate: Configuration$Truncate;
            _type: FilteredType;
            _valueGetter: java.util.function.Function<jfr.consumer.RecordedEvent,any>;
            _visible: boolean;
          }
          interface Field extends CombineTypes<[_Field, java.lang.Object]> {}
          interface _FieldBuilder$$static extends ClassLike {
            configureAggregator(field: Field): void;
            _createKnownTypes(): java.util.Set<string>;
            createWildcardFields(eventTypes: java.util.List<EventType>, types: java.util.List<FilteredType>): java.util.List<Field>;
            _createWildcardFields(eventTypes: java.util.List<EventType>, type: FilteredType): java.util.List<Field>;
            _hasDuration(type: FilteredType): boolean;
            _makeLabel(v: ValueDescriptor, hasDuration: boolean): string;
            _valueGetter(name: string): java.util.function.Function<jfr.consumer.RecordedEvent,any>;
            _KNOWN_TYPES: java.util.Set<string>;
            new(eventTypes: java.util.List<EventType>, type: FilteredType, fieldName: string): FieldBuilder;
          }
          let FieldBuilder: _FieldBuilder$$static;
          interface _FieldBuilder {
            build(): java.util.List<Field>;
            _configureCustomFrame(condition: java.util.function.Predicate<jfr.consumer.RecordedFrame>): void;
            _configureDataAmount(): void;
            _configureEventType(retriever: java.util.function.Function<jfr.consumer.RecordedEvent,any>): void;
            _configureEventTypeIdField(): void;
            _configureFrequency(): void;
            _configureKnownType(): void;
            _configureMemoryAddress(): void;
            _configureNotInitFrameField(): void;
            _configureNumericTypes(): void;
            _configurePercentage(): void;
            _configureSyntheticFields(): boolean;
            _configureTime(): void;
            _configureTopApplicationFrameField(): void;
            _configureTopFrameField(): void;
            _createEventTypeLookup(): java.util.Map<long,string>;
            _hasDuration(): boolean;
            _descriptor: ValueDescriptor;
            _eventTypes: java.util.List<EventType>;
            _field: Field;
            _fieldName: string;
          }
          interface FieldBuilder extends CombineTypes<[_FieldBuilder, java.lang.Object]> {}
          interface _FieldFormatter$$static extends ClassLike {
            format(field: Field, object: any): string;
            _format(field: Field, object: any, compact: boolean): string;
            formatCompact(field: Field, object: any): string;
            _hasFormatting(s: string): boolean;
            _isFormatting(c: char): boolean;
            _stripFormatting(text: string): string;
            new(): FieldFormatter;
          }
          let FieldFormatter: _FieldFormatter$$static;
          interface _FieldFormatter {
          }
          interface FieldFormatter extends CombineTypes<[_FieldFormatter, java.lang.Object]> {}
          interface _FilteredType$$static extends ClassLike {
            new(type: EventType): FilteredType;
          }
          let FilteredType: _FilteredType$$static;
          interface _FilteredType {
            addFilter(filter: FilteredType$Filter): void;
            equals(object: any): boolean;
            getField(name: string): ValueDescriptor;
            getFields(): java.util.List<ValueDescriptor>;
            getFilters(): java.util.List<FilteredType$Filter>;
            getLabel(): string;
            getName(): string;
            getSimpleName(): string;
            hashCode(): int;
            isExperimental(): boolean;
            toString(): string;
            _eventType: EventType;
            _filters: java.util.List<FilteredType$Filter>;
            _simpleName: string;
          }
          interface FilteredType extends CombineTypes<[_FilteredType, java.lang.Object]> {}
          interface _FilteredType$Filter$$static extends ClassLike {
            new(field: Field, value: string): FilteredType$Filter;
          }
          let FilteredType$Filter: _FilteredType$Filter$$static;
          interface _FilteredType$Filter {
            equals(object: any): boolean;
            field(): Field;
            hashCode(): int;
            toString(): string;
            value(): string;
          }
          interface FilteredType$Filter extends CombineTypes<[_FilteredType$Filter, java.lang.Record]> {}
          interface _FormRenderer$$static extends ClassLike {
            _determineWidth(configuration: Configuration): int;
            _LABEL_SUFFIX: string;
            new(configuration: Configuration, table: Table): FormRenderer;
          }
          let FormRenderer: _FormRenderer$$static;
          interface _FormRenderer {
            getWidth(): int;
            render(): void;
            _renderField(field: Field): void;
            _configuration: Configuration;
            _out: internal.util.Output;
            _table: Table;
            _width: int;
          }
          interface FormRenderer extends CombineTypes<[_FormRenderer, java.lang.Object]> {}
          interface _Function$$static extends ClassLike {
            create(field: Field): Function;
            _createPercentile(field: Field, percentile: double): Function;
            _new(): Function;
          }
          let Function: _Function$$static;
          interface _Function {
            add(a0: any): void;
            result(): any;
          }
          interface Function extends CombineTypes<[_Function, java.lang.Object]> {}
          interface _Function$Average$$static extends ClassLike {
          }
          let Function$Average: _Function$Average$$static;
          interface _Function$Average {
            add(value: any): void;
            result(): any;
            _count: long;
            _total: double;
          }
          interface Function$Average extends CombineTypes<[_Function$Average, jdk.jfr.internal.query.Function]> {}
          interface _Function$AverageDuration$$static extends ClassLike {
          }
          let Function$AverageDuration: _Function$AverageDuration$$static;
          interface _Function$AverageDuration {
            add(value: any): void;
            result(): any;
            _count: int;
            _nanos: long;
            _seconds: long;
          }
          interface Function$AverageDuration extends CombineTypes<[_Function$AverageDuration, jdk.jfr.internal.query.Function]> {}
          interface _Function$Count$$static extends ClassLike {
          }
          let Function$Count: _Function$Count$$static;
          interface _Function$Count {
            add(value: any): void;
            result(): any;
            _count: long;
          }
          interface Function$Count extends CombineTypes<[_Function$Count, jdk.jfr.internal.query.Function]> {}
          interface _Function$Difference$$static extends ClassLike {
          }
          let Function$Difference: _Function$Difference$$static;
          interface _Function$Difference {
            add(value: any): void;
            _isIntegral(number: number): boolean;
            result(): any;
            _first: number;
            _last: number;
          }
          interface Function$Difference extends CombineTypes<[_Function$Difference, jdk.jfr.internal.query.Function]> {}
          interface _Function$First$$static extends ClassLike {
            _firstObject: any;
          }
          let Function$First: _Function$First$$static;
          interface _Function$First {
            add(value: any): void;
            result(): any;
            _first: any;
          }
          interface Function$First extends CombineTypes<[_Function$First, jdk.jfr.internal.query.Function]> {}
          interface _Function$FirstNonNull$$static extends ClassLike {
          }
          let Function$FirstNonNull: _Function$FirstNonNull$$static;
          interface _Function$FirstNonNull {
            add(value: any): void;
            result(): any;
            _first: any;
          }
          interface Function$FirstNonNull extends CombineTypes<[_Function$FirstNonNull, jdk.jfr.internal.query.Function]> {}
          interface _Function$Last$$static extends ClassLike {
            _lastObject: any;
          }
          let Function$Last: _Function$Last$$static;
          interface _Function$Last {
            add(value: any): void;
            result(): any;
            _last: any;
          }
          interface Function$Last extends CombineTypes<[_Function$Last, jdk.jfr.internal.query.Function]> {}
          interface _Function$LastBatch$$static extends ClassLike {
            new(field: Field): Function$LastBatch;
          }
          let Function$LastBatch: _Function$LastBatch$$static;
          interface _Function$LastBatch {
            add(value: any): void;
            result(): any;
            setTime(timestamp: java.time.Instant): void;
            valid(): boolean;
            _field: Field;
            _last: Function$Last;
            _timestamp: java.time.Instant;
          }
          interface Function$LastBatch extends CombineTypes<[_Function$LastBatch, jdk.jfr.internal.query.Function]> {}
          interface _Function$List$$static extends ClassLike {
          }
          let Function$List: _Function$List$$static;
          interface _Function$List {
            add(value: any): void;
            result(): any;
            _list: java.util.ArrayList<any>;
          }
          interface Function$List extends CombineTypes<[_Function$List, jdk.jfr.internal.query.Function]> {}
          interface _Function$Maximum$$static extends ClassLike {
          }
          let Function$Maximum: _Function$Maximum$$static;
          interface _Function$Maximum {
            add(value: any): void;
            result(): any;
            _maximum: java.lang.Comparable<java.lang.Comparable>;
          }
          interface Function$Maximum extends CombineTypes<[_Function$Maximum, jdk.jfr.internal.query.Function]> {}
          interface _Function$Median$$static extends ClassLike {
          }
          let Function$Median: _Function$Median$$static;
          interface _Function$Median {
            add(value: any): void;
            result(): any;
            _comparables: java.util.List<java.lang.Comparable>;
          }
          interface Function$Median extends CombineTypes<[_Function$Median, jdk.jfr.internal.query.Function]> {}
          interface _Function$Minimum$$static extends ClassLike {
          }
          let Function$Minimum: _Function$Minimum$$static;
          interface _Function$Minimum {
            add(value: any): void;
            result(): any;
            _minimum: java.lang.Comparable<java.lang.Comparable>;
          }
          interface Function$Minimum extends CombineTypes<[_Function$Minimum, jdk.jfr.internal.query.Function]> {}
          interface _Function$Null$$static extends ClassLike {
          }
          let Function$Null: _Function$Null$$static;
          interface _Function$Null {
            add(value: any): void;
            result(): any;
          }
          interface Function$Null extends CombineTypes<[_Function$Null, jdk.jfr.internal.query.Function]> {}
          interface _Function$Percentile$$static extends ClassLike {
            _new(percentile: double): Function$Percentile;
          }
          let Function$Percentile: _Function$Percentile$$static;
          interface _Function$Percentile {
            add(value: any): void;
            result(): any;
            _numbers: java.util.List<number>;
            _percentile: double;
          }
          interface Function$Percentile extends CombineTypes<[_Function$Percentile, jdk.jfr.internal.query.Function]> {}
          interface _Function$StandardDeviation$$static extends ClassLike {
          }
          let Function$StandardDeviation: _Function$StandardDeviation$$static;
          interface _Function$StandardDeviation {
            add(value: any): void;
            result(): any;
            _sum(): double;
            _values: java.util.List<number>;
          }
          interface Function$StandardDeviation extends CombineTypes<[_Function$StandardDeviation, jdk.jfr.internal.query.Function]> {}
          interface _Function$SumDouble$$static extends ClassLike {
          }
          let Function$SumDouble: _Function$SumDouble$$static;
          interface _Function$SumDouble {
            add(value: any): void;
            result(): any;
            _hasValue: boolean;
            _sum: double;
          }
          interface Function$SumDouble extends CombineTypes<[_Function$SumDouble, jdk.jfr.internal.query.Function]> {}
          interface _Function$SumDuration$$static extends ClassLike {
          }
          let Function$SumDuration: _Function$SumDuration$$static;
          interface _Function$SumDuration {
            add(value: any): void;
            result(): any;
            _hasValue: boolean;
            _nanos: long;
            _seconds: long;
          }
          interface Function$SumDuration extends CombineTypes<[_Function$SumDuration, jdk.jfr.internal.query.Function]> {}
          interface _Function$SumLong$$static extends ClassLike {
          }
          let Function$SumLong: _Function$SumLong$$static;
          interface _Function$SumLong {
            add(value: any): void;
            result(): any;
            _hasValue: boolean;
            _sum: long;
          }
          interface Function$SumLong extends CombineTypes<[_Function$SumLong, jdk.jfr.internal.query.Function]> {}
          interface _Function$TimeDifference$$static extends ClassLike {
          }
          let Function$TimeDifference: _Function$TimeDifference$$static;
          interface _Function$TimeDifference {
            add(value: any): void;
            result(): any;
            _first: java.time.Instant;
            _last: java.time.Instant;
          }
          interface Function$TimeDifference extends CombineTypes<[_Function$TimeDifference, jdk.jfr.internal.query.Function]> {}
          interface _Function$TimespanFunction$$static extends ClassLike {
            _new(_function: Function): Function$TimespanFunction;
          }
          let Function$TimespanFunction: _Function$TimespanFunction$$static;
          interface _Function$TimespanFunction {
            add(value: any): void;
            result(): any;
            _function: Function;
          }
          interface Function$TimespanFunction extends CombineTypes<[_Function$TimespanFunction, jdk.jfr.internal.query.Function]> {}
          interface _Function$Unique$$static extends ClassLike {
          }
          let Function$Unique: _Function$Unique$$static;
          interface _Function$Unique {
            add(value: any): void;
            result(): any;
            _unique: java.util.Set<any>;
          }
          interface Function$Unique extends CombineTypes<[_Function$Unique, jdk.jfr.internal.query.Function]> {}
          interface _Histogram$$static extends ClassLike {
            _makeKey(object: any): any;
            _new(): Histogram;
          }
          let Histogram: _Histogram$$static;
          interface _Histogram {
            add(e: jfr.consumer.RecordedEvent, type: FilteredType, sourceFields: java.util.List<Field>): void;
            addFields(fields: java.util.List<Field>): void;
            _createFunctions(): Function[];
            toRows(): java.util.List<Row>;
            _fields: java.util.List<Field>;
            _keyFunctionsMap: java.util.Map<Histogram$LookupKey,Function[]>;
          }
          interface Histogram extends CombineTypes<[_Histogram, java.lang.Object]> {}
          interface _Histogram$LookupKey$$static extends ClassLike {
          }
          let Histogram$LookupKey: _Histogram$LookupKey$$static;
          interface _Histogram$LookupKey {
            add(o: any): void;
            equals(object: any): boolean;
            hashCode(): int;
            _keys: any;
          }
          interface Histogram$LookupKey extends CombineTypes<[_Histogram$LookupKey, java.lang.Object]> {}
          interface _Histogram$MethodEquality$$static extends ClassLike {
            new(method: jfr.consumer.RecordedMethod): Histogram$MethodEquality;
          }
          let Histogram$MethodEquality: _Histogram$MethodEquality$$static;
          interface _Histogram$MethodEquality {
            equals(object: any): boolean;
            hashCode(): int;
            _classId: long;
            _descriptor: string;
            _methodName: string;
          }
          interface Histogram$MethodEquality extends CombineTypes<[_Histogram$MethodEquality, java.lang.Object]> {}
          interface _Query$$static extends ClassLike {
            new(text: string): Query;
          }
          let Query: _Query$$static;
          interface _Query {
            toString(): string;
            _column: java.util.List<string>;
            _format: java.util.List<Query$Formatter>;
            _from: java.util.List<Query$Source>;
            _groupBy: java.util.List<Query$Grouper>;
            _limit: int;
            _orderBy: java.util.List<Query$OrderElement>;
            _select: java.util.List<Query$Expression>;
            _where: java.util.List<Query$Condition>;
          }
          interface Query extends CombineTypes<[_Query, java.lang.Object]> {}
          interface _Query$Condition$$static extends ClassLike {
            _new(field: string, value: string): Query$Condition;
          }
          let Query$Condition: _Query$Condition$$static;
          interface _Query$Condition {
            equals(o: any): boolean;
            field(): string;
            hashCode(): int;
            toString(): string;
            value(): string;
          }
          interface Query$Condition extends CombineTypes<[_Query$Condition, java.lang.Record]> {}
          interface _Query$Expression$$static extends ClassLike {
            _new(name: string, alias: java.util.Optional<string>, aggregator: Aggregator): Query$Expression;
          }
          let Query$Expression: _Query$Expression$$static;
          interface _Query$Expression {
            aggregator(): Aggregator;
            alias(): java.util.Optional<string>;
            equals(o: any): boolean;
            hashCode(): int;
            name(): string;
            toString(): string;
          }
          interface Query$Expression extends CombineTypes<[_Query$Expression, java.lang.Record]> {}
          interface _Query$Formatter$$static extends ClassLike {
            _new(properties: java.util.List<Query$Property>): Query$Formatter;
          }
          let Query$Formatter: _Query$Formatter$$static;
          interface _Query$Formatter {
            equals(o: any): boolean;
            hashCode(): int;
            properties(): java.util.List<Query$Property>;
            toString(): string;
          }
          interface Query$Formatter extends CombineTypes<[_Query$Formatter, java.lang.Record]> {}
          interface _Query$Grouper$$static extends ClassLike {
            _new(field: string): Query$Grouper;
          }
          let Query$Grouper: _Query$Grouper$$static;
          interface _Query$Grouper {
            equals(o: any): boolean;
            field(): string;
            hashCode(): int;
            toString(): string;
          }
          interface Query$Grouper extends CombineTypes<[_Query$Grouper, java.lang.Record]> {}
          interface _Query$OrderElement$$static extends ClassLike {
            _new(name: string, order: Query$SortOrder): Query$OrderElement;
          }
          let Query$OrderElement: _Query$OrderElement$$static;
          interface _Query$OrderElement {
            equals(o: any): boolean;
            hashCode(): int;
            name(): string;
            order(): Query$SortOrder;
            toString(): string;
          }
          interface Query$OrderElement extends CombineTypes<[_Query$OrderElement, java.lang.Record]> {}
          interface _Query$Property$$static extends ClassLike {
            _new(name: string, style: java.util.function.Consumer<Field>): Query$Property;
          }
          let Query$Property: _Query$Property$$static;
          interface _Query$Property {
            equals(o: any): boolean;
            hashCode(): int;
            name(): string;
            style(): java.util.function.Consumer<Field>;
            toString(): string;
          }
          interface Query$Property extends CombineTypes<[_Query$Property, java.lang.Record]> {}
          interface _Query$SortOrder$$static extends ClassLike {
            valueOf(name: string): Query$SortOrder;
            values(): Query$SortOrder[];
            readonly ASCENDING: Query$SortOrder;
            readonly DESCENDING: Query$SortOrder;
            readonly NONE: Query$SortOrder;
          }
          let Query$SortOrder: _Query$SortOrder$$static;
          interface _Query$SortOrder {
          }
          interface Query$SortOrder extends CombineTypes<[_Query$SortOrder]> {}
          interface _Query$Source$$static extends ClassLike {
            _new(name: string, alias: java.util.Optional<string>): Query$Source;
          }
          let Query$Source: _Query$Source$$static;
          interface _Query$Source {
            alias(): java.util.Optional<string>;
            equals(o: any): boolean;
            hashCode(): int;
            name(): string;
            toString(): string;
          }
          interface Query$Source extends CombineTypes<[_Query$Source, java.lang.Record]> {}
          interface _Query$Where$$static extends ClassLike {
            _new(conditions: java.util.List<Query$Condition>): Query$Where;
          }
          let Query$Where: _Query$Where$$static;
          interface _Query$Where {
            conditions(): java.util.List<Query$Condition>;
            equals(o: any): boolean;
            hashCode(): int;
            toString(): string;
          }
          interface Query$Where extends CombineTypes<[_Query$Where, java.lang.Record]> {}
          interface _QueryExecutor$$static extends ClassLike {
            new(stream: jfr.consumer.EventStream): QueryExecutor;
            new(stream: jfr.consumer.EventStream, query: Query): QueryExecutor;
            new(stream: jfr.consumer.EventStream, queries: java.util.List<Query>): QueryExecutor;
          }
          let QueryExecutor: _QueryExecutor$$static;
          interface _QueryExecutor {
            _addQueryRuns(): void;
            getEventTypes(): java.util.List<EventType>;
            _onMetadata(e: jfr.consumer.MetadataEvent): void;
            run(): java.util.List<QueryRun>;
            _eventTypes: java.util.List<EventType>;
            _queryRuns: java.util.List<QueryRun>;
            _stream: jfr.consumer.EventStream;
          }
          interface QueryExecutor extends CombineTypes<[_QueryExecutor, java.lang.Object]> {}
          interface _QueryParser$$static extends ClassLike {
            _SEPARATORS: char[];
            new(text: string): QueryParser;
          }
          let QueryParser: _QueryParser$$static;
          interface _QueryParser {
            _aggregator(): Query$Expression;
            _alias(): java.util.Optional<string>;
            _cellHeight(height: string): java.util.function.Consumer<Field>;
            close(): void;
            column(): java.util.List<string>;
            _condition(): Query$Condition;
            _eventField(): string;
            _expression(): Query$Expression;
            format(): java.util.List<Query$Formatter>;
            _formatter(): Query$Formatter;
            from(): java.util.List<Query$Source>;
            groupBy(): java.util.List<Query$Grouper>;
            _grouper(): Query$Grouper;
            limit(): int;
            _missing(missing: string): java.util.function.Consumer<Field>;
            orderBy(): java.util.List<Query$OrderElement>;
            _orderer(): Query$OrderElement;
            position(): int;
            _property(): Query$Property;
            select(): java.util.List<Query$Expression>;
            _sortOrder(): Query$SortOrder;
            _source(): Query$Source;
            _symbol(): string;
            _text(): string;
            _type(): string;
            where(): java.util.List<Query$Condition>;
            _tokenizer: internal.util.Tokenizer;
          }
          interface QueryParser extends CombineTypes<[_QueryParser, java.lang.Object, java.lang.AutoCloseable]> {}
          interface _QueryPrinter$$static extends ClassLike {
            getGrammarText(): string;
            new(configuration: Configuration, stream: jfr.consumer.EventStream): QueryPrinter;
          }
          let QueryPrinter: _QueryPrinter$$static;
          interface _QueryPrinter {
            execute(query: string): void;
            _isExperimental(t: EventType): boolean;
            _printFields(type: EventType, allTypes: java.util.List<EventType>): void;
            _relations(type: EventType): java.util.List<string>;
            _showEvents(queryText: string): boolean;
            _showFields(text: string): boolean;
            _showQuery(query: string): void;
            _configuration: Configuration;
            _out: internal.util.Output;
            _stopWatch: internal.util.StopWatch;
            _stream: jfr.consumer.EventStream;
          }
          interface QueryPrinter extends CombineTypes<[_QueryPrinter, java.lang.Object]> {}
          interface _QueryResolver$$static extends ClassLike {
            _unknownEventType(eventTypes: java.util.List<EventType>, name: string): string;
            _unknownField(name: string, types: java.util.List<FilteredType>): string;
            new(query: Query, eventTypes: java.util.List<EventType>): QueryResolver;
          }
          let QueryResolver: _QueryResolver$$static;
          interface _QueryResolver {
            _addField(name: string, types: java.util.List<FilteredType>): Field;
            _applyColumn(): void;
            _applyFormat(): void;
            getFromTypes(): java.util.List<FilteredType>;
            resolve(): java.util.List<Field>;
            _resolveEventType(name: string): java.util.List<EventType>;
            _resolveFields(name: string, types: java.util.List<FilteredType>): java.util.List<Field>;
            _resolveFrom(): void;
            _resolveGroupBy(): void;
            _resolveOrderBy(): void;
            _resolveSelect(): void;
            _resolveWhere(): void;
            _column: java.util.List<string>;
            _eventTypes: java.util.List<EventType>;
            _fieldAliases: java.util.Map<string,Field>;
            _format: java.util.List<Query$Formatter>;
            _from: java.util.List<Query$Source>;
            _fromTypes: java.util.List<FilteredType>;
            _groupBy: java.util.List<Query$Grouper>;
            _orderBy: java.util.List<Query$OrderElement>;
            _resultFields: java.util.List<Field>;
            _select: java.util.List<Query$Expression>;
            _typeAliases: java.util.Map<string,FilteredType>;
            _where: java.util.List<Query$Condition>;
          }
          interface QueryResolver extends CombineTypes<[_QueryResolver, java.lang.Object]> {}
          interface _QueryResolver$QueryException$$static extends ClassLike {
            new(message: string): QueryResolver$QueryException;
          }
          let QueryResolver$QueryException: _QueryResolver$QueryException$$static;
          interface _QueryResolver$QueryException {
          }
          interface QueryResolver$QueryException extends CombineTypes<[_QueryResolver$QueryException, java.lang.Exception]> {}
          interface _QueryResolver$QuerySyntaxException$$static extends ClassLike {
            new(message: string): QueryResolver$QuerySyntaxException;
          }
          let QueryResolver$QuerySyntaxException: _QueryResolver$QuerySyntaxException$$static;
          interface _QueryResolver$QuerySyntaxException {
          }
          interface QueryResolver$QuerySyntaxException extends CombineTypes<[_QueryResolver$QuerySyntaxException, jdk.jfr.internal.query.QueryResolver$QueryException]> {}
          interface _QueryRun$$static extends ClassLike {
            new(stream: jfr.consumer.EventStream, query: Query): QueryRun;
          }
          let QueryRun: _QueryRun$$static;
          interface _QueryRun {
            _addEventListeners(): void;
            complete(): void;
            getMetadataErrors(): java.util.List<string>;
            getQuery(): Query;
            getSyntaxErrors(): java.util.List<string>;
            getTable(): Table;
            _groupByTypeDescriptor(): java.util.LinkedHashMap<FilteredType,java.util.List<Field>>;
            _onMetadata(e: jfr.consumer.MetadataEvent): void;
            _histogram: Histogram;
            _metadataErrors: java.util.List<string>;
            _query: Query;
            _stream: jfr.consumer.EventStream;
            _syntaxErrors: java.util.List<string>;
            _table: Table;
          }
          interface QueryRun extends CombineTypes<[_QueryRun, java.lang.Object]> {}
          interface _Row$$static extends ClassLike {
            new(size: int): Row;
          }
          let Row: _Row$$static;
          interface _Row {
            getText(index: int): string;
            getValue(index: int): any;
            putText(index: int, text: string): void;
            putValue(index: int, o: any): void;
            toString(): string;
            _texts: string[];
            _values: any[];
          }
          interface Row extends CombineTypes<[_Row, java.lang.Object]> {}
          interface _Table$$static extends ClassLike {
            _new(): Table;
          }
          let Table: _Table$$static;
          interface _Table {
            add(event: jfr.consumer.RecordedEvent, sourceFields: java.util.List<Field>): void;
            _addFields(fields: java.util.List<Field>): void;
            _addRows(rows: java.util.List<Row>): void;
            _getFields(): java.util.List<Field>;
            _getRows(): java.util.List<Row>;
            _isEmpty(): boolean;
            _fields: java.util.List<Field>;
            _rows: java.util.List<Row>;
          }
          interface Table extends CombineTypes<[_Table, java.lang.Object]> {}
          interface _TableCell$$static extends ClassLike {
            _COLUMN_SEPARATOR: string;
            _ELLIPSIS: string;
            _ELLIPSIS_LENGTH: int;
            _MINIMAL_CELL_WIDTH: int;
            new(field: Field, cellHeight: int, truncate: Configuration$Truncate): TableCell;
          }
          let TableCell: _TableCell$$static;
          interface _TableCell {
            _add(text: string): void;
            _addAligned(text: string): void;
            addLine(text: string): void;
            clear(): void;
            getContentSize(): int;
            getContentWidth(): int;
            getHeight(): int;
            getLines(): java.util.List<string>;
            getPreferredWidth(): int;
            getText(rowIndex: int): string;
            setContent(text: string): void;
            setPreferredWidth(width: int): void;
            _truncate(text: string, size: int): string;
            _cellHeight: int;
            _field: Field;
            _lines: java.util.List<string>;
            _preferredWidth: int;
            _truncate: Configuration$Truncate;
            _width: int;
          }
          interface TableCell extends CombineTypes<[_TableCell, java.lang.Object]> {}
          interface _TableRenderer$$static extends ClassLike {
            new(configuration: Configuration, table: Table, query: Query): TableRenderer;
          }
          let TableRenderer: _TableRenderer$$static;
          interface _TableRenderer {
            _calculateNormalization(): double[];
            _createTableCell(field: Field): TableCell;
            _createTableCells(table: Table): java.util.List<TableCell>;
            _determineTableWidth(): int;
            _distribute(condition: java.util.function.Predicate<TableCell>): void;
            _fieldName(field: Field): string;
            _formatRow(): void;
            getWidth(): long;
            _isEmpty(): boolean;
            _isExperimental(): boolean;
            _printHeaderRow(): void;
            _printHeaderRowSeparators(): void;
            _printRow(action: java.util.function.Function<TableCell,string>): void;
            _printRow(): void;
            _printRows(): void;
            _printTitle(): void;
            render(): void;
            _setCellContent(cell: TableCell, row: Row, columnIndex: int): void;
            _setColumnWidths(): void;
            _setPreferredHeaderWidths(): void;
            _setRowWidths(): void;
            _setStackTrace(cell: TableCell, s: jfr.consumer.RecordedStackTrace): void;
            _sortRows(): void;
            _tooManyColumns(): boolean;
            _configuration: Configuration;
            _out: internal.util.Output;
            _preferredWidth: int;
            _query: Query;
            _table: Table;
            _tableCells: java.util.List<TableCell>;
            _width: int;
          }
          interface TableRenderer extends CombineTypes<[_TableRenderer, java.lang.Object]> {}
          interface _TableSorter$$static extends ClassLike {
            new(table: Table, query: Query): TableSorter;
          }
          let TableSorter: _TableSorter$$static;
          interface _TableSorter {
            _determineSortOrder(field: Field): Query$SortOrder;
            sort(): void;
            _sort(field: Field, order: Query$SortOrder): void;
            _sortAggregators(): boolean;
            _sortDefault(): void;
            _sortGroupBy(): boolean;
            _sortLeftMost(): void;
            _sortOrderBy(): void;
            _sortPredicate(predicate: java.util.function.Predicate<Field>): boolean;
            _query: Query;
            _table: Table;
          }
          interface TableSorter extends CombineTypes<[_TableSorter, java.lang.Object]> {}
          interface _TableSorter$ColumnComparator$$static extends ClassLike {
            new(field: Field, order: Query$SortOrder): TableSorter$ColumnComparator;
          }
          let TableSorter$ColumnComparator: _TableSorter$ColumnComparator$$static;
          interface _TableSorter$ColumnComparator {
            compare(rowA: Row, rowB: Row): int;
            compare(a0: any, a1: any): int;
            _compareObjects(a: any, b: any): int;
            _determineSortOrder(field: Field, order: Query$SortOrder): Query$SortOrder;
            _sortOrderToFactor(order: Query$SortOrder): int;
            _factor: int;
            _index: int;
            _lexical: boolean;
          }
          interface TableSorter$ColumnComparator extends CombineTypes<[_TableSorter$ColumnComparator, java.util.Comparator<Row>, java.lang.Object]> {}
          interface _ViewFile$$static extends ClassLike {
            getDefault(): ViewFile;
            new(text: string): ViewFile;
          }
          let ViewFile: _ViewFile$$static;
          interface _ViewFile {
            _createView(fullName: string): ViewFile$ViewConfiguration;
            getViewConfigurations(): java.util.List<ViewFile$ViewConfiguration>;
            _parse(text: string): java.util.List<ViewFile$ViewConfiguration>;
            _configurations: java.util.List<ViewFile$ViewConfiguration>;
          }
          interface ViewFile extends CombineTypes<[_ViewFile, java.lang.Object]> {}
          interface _ViewFile$ViewConfiguration$$static extends ClassLike {
            _new(name: string, category: string, properties: java.util.Map<string,string>): ViewFile$ViewConfiguration;
          }
          let ViewFile$ViewConfiguration: _ViewFile$ViewConfiguration$$static;
          interface _ViewFile$ViewConfiguration {
            category(): string;
            equals(o: any): boolean;
            _get(key: string): string;
            getForm(): string;
            getLabel(): string;
            getTable(): string;
            hashCode(): int;
            name(): string;
            properties(): java.util.Map<string,string>;
            query(): string;
            toString(): string;
          }
          interface ViewFile$ViewConfiguration extends CombineTypes<[_ViewFile$ViewConfiguration, java.lang.Record]> {}
          interface _ViewPrinter$$static extends ClassLike {
            getAvailableViews(): java.util.List<string>;
            _getViewList(selection: string): java.util.List<string>;
            new(configuration: Configuration, stream: jfr.consumer.EventStream): ViewPrinter;
          }
          let ViewPrinter: _ViewPrinter$$static;
          interface _ViewPrinter {
            execute(text: string): void;
            _nextText(tokenizer: internal.util.Tokenizer): string;
            _printQuery(lb: ViewPrinter$LineBuilder, query: string): void;
            _printTimespan(): void;
            _printView(section: ViewFile$ViewConfiguration, queryRun: QueryRun): void;
            _printViewTypeRelation(views: java.util.List<ViewFile$ViewConfiguration>, eventTypes: java.util.List<EventType>): void;
            _showEventType(eventType: string): boolean;
            _showViews(text: string): boolean;
            _configuration: Configuration;
            _out: internal.util.Output;
            _stopWatch: internal.util.StopWatch;
            _stream: jfr.consumer.EventStream;
          }
          interface ViewPrinter extends CombineTypes<[_ViewPrinter, java.lang.Object]> {}
          interface _ViewPrinter$LineBuilder$$static extends ClassLike {
            _new(out: internal.util.Output, width: long): ViewPrinter$LineBuilder;
          }
          let ViewPrinter$LineBuilder: _ViewPrinter$LineBuilder$$static;
          interface _ViewPrinter$LineBuilder {
            append(text: string): void;
            close(): void;
            _print(s: string): void;
            _out: internal.util.Output;
            _position: int;
            _width: long;
          }
          interface ViewPrinter$LineBuilder extends CombineTypes<[_ViewPrinter$LineBuilder, java.io.Closeable, java.lang.Object]> {}
        }
        module settings {
          interface _BooleanValue$$static extends ClassLike {
            valueOf(defaultValue: string): BooleanValue;
          }
          let BooleanValue: _BooleanValue$$static;
          interface _BooleanValue {
            getBoolean(): boolean;
            getValue(): string;
            setValue(value: string): void;
            union(values: java.util.Set<string>): string;
            _booleanValue: boolean;
            _value: string;
          }
          interface BooleanValue extends CombineTypes<[_BooleanValue, java.lang.Object]> {}
          interface _CutoffSetting$$static extends ClassLike {
            parseValueSafe(value: string): long;
            new(eventType: PlatformEventType): CutoffSetting;
          }
          let CutoffSetting: _CutoffSetting$$static;
          interface _CutoffSetting {
            combine(values: java.util.Set<string>): string;
            getValue(): string;
            setValue(value: string): void;
            _eventType: PlatformEventType;
            _value: string;
          }
          interface CutoffSetting extends CombineTypes<[_CutoffSetting, jdk.jfr.internal.settings.JDKSettingControl]> {}
          interface _EnabledSetting$$static extends ClassLike {
            new(eventType: PlatformEventType, defaultValue: string): EnabledSetting;
          }
          let EnabledSetting: _EnabledSetting$$static;
          interface _EnabledSetting {
            combine(values: java.util.Set<string>): string;
            getValue(): string;
            setValue(value: string): void;
            _booleanValue: BooleanValue;
            _eventType: PlatformEventType;
          }
          interface EnabledSetting extends CombineTypes<[_EnabledSetting, jdk.jfr.internal.settings.JDKSettingControl]> {}
          interface _JDKSettingControl$$static extends ClassLike {
            new(): JDKSettingControl;
          }
          let JDKSettingControl: _JDKSettingControl$$static;
          interface _JDKSettingControl {
          }
          interface JDKSettingControl extends CombineTypes<[_JDKSettingControl, jdk.jfr.SettingControl]> {}
          interface _PeriodSetting$$static extends ClassLike {
            isType(typeId: long): boolean;
            readonly BEGIN_CHUNK: string;
            readonly END_CHUNK: string;
            readonly EVERY_CHUNK: string;
            readonly NAME: string;
            _typeId: long;
            new(eventType: PlatformEventType): PeriodSetting;
          }
          let PeriodSetting: _PeriodSetting$$static;
          interface _PeriodSetting {
            combine(values: java.util.Set<string>): string;
            getValue(): string;
            setValue(value: string): void;
            _eventType: PlatformEventType;
            _value: string;
          }
          interface PeriodSetting extends CombineTypes<[_PeriodSetting, jdk.jfr.internal.settings.JDKSettingControl]> {}
          interface _StackTraceSetting$$static extends ClassLike {
            isType(typeId: long): boolean;
            _typeId: long;
            new(eventType: PlatformEventType, defaultValue: string): StackTraceSetting;
          }
          let StackTraceSetting: _StackTraceSetting$$static;
          interface _StackTraceSetting {
            combine(values: java.util.Set<string>): string;
            getValue(): string;
            setValue(value: string): void;
            _booleanValue: BooleanValue;
            _eventType: PlatformEventType;
          }
          interface StackTraceSetting extends CombineTypes<[_StackTraceSetting, jdk.jfr.internal.settings.JDKSettingControl]> {}
          interface _ThresholdSetting$$static extends ClassLike {
            isType(typeId: long): boolean;
            _typeId: long;
            new(eventType: PlatformEventType): ThresholdSetting;
          }
          let ThresholdSetting: _ThresholdSetting$$static;
          interface _ThresholdSetting {
            combine(values: java.util.Set<string>): string;
            getValue(): string;
            setValue(value: string): void;
            _eventType: PlatformEventType;
            _value: string;
          }
          interface ThresholdSetting extends CombineTypes<[_ThresholdSetting, jdk.jfr.internal.settings.JDKSettingControl]> {}
          interface _ThrottleSetting$$static extends ClassLike {
            _parseValueSafe(s: string): long;
            _OFF: long;
            new(eventType: PlatformEventType): ThrottleSetting;
          }
          let ThrottleSetting: _ThrottleSetting$$static;
          interface _ThrottleSetting {
            combine(values: java.util.Set<string>): string;
            getValue(): string;
            setValue(s: string): void;
            _eventType: PlatformEventType;
            _value: string;
          }
          interface ThrottleSetting extends CombineTypes<[_ThrottleSetting, jdk.jfr.internal.settings.JDKSettingControl]> {}
        }
        module test {
          interface _WhiteBox$$static extends ClassLike {
            getSkipBFS(): boolean;
            getWriteAllObjectSamples(): boolean;
            setSkipBFS(skip: boolean): void;
            setWriteAllObjectSamples(writeAllSamples: boolean): void;
            _skipBFS: boolean;
            _writeAllObjectSamples: boolean;
            new(): WhiteBox;
          }
          let WhiteBox: _WhiteBox$$static;
          interface _WhiteBox {
          }
          interface WhiteBox extends CombineTypes<[_WhiteBox, java.lang.Object]> {}
        }
        module tool {
          interface _Assemble$$static extends ClassLike {
            _new(): Assemble;
          }
          let Assemble: _Assemble$$static;
          interface _Assemble {
            displayOptionUsage(stream: java.io.PrintStream): void;
            execute(options: java.util.Deque<string>): void;
            getDescription(): string;
            getName(): string;
            getOptionSyntax(): java.util.List<string>;
            _listJFRFiles(path: java.nio.file.Path): java.util.List<java.nio.file.Path>;
            _transferTo(sourceFiles: java.util.List<java.nio.file.Path>, output: java.nio.file.Path, out: java.nio.channels.FileChannel): void;
          }
          interface Assemble extends CombineTypes<[_Assemble, jdk.jfr.internal.tool.Command]> {}
          interface _Command$$static extends ClassLike {
            _buildAlias(c: Command): string;
            checkCommonError(options: java.util.Deque<string>, typo: string, correct: string): void;
            _createCommands(): java.util.List<Command>;
            _displayAvailableCommands(stream: java.io.PrintStream): void;
            _displayCommand(stream: java.io.PrintStream, c: Command): void;
            _displayHelp(): void;
            getCommands(): java.util.List<Command>;
            _quoteCharacter(): char;
            valueOf(commandName: string): Command;
            _COMMANDS: java.util.List<Command>;
            _HELP: Command;
            readonly title: string;
            _new(): Command;
          }
          let Command: _Command$$static;
          interface _Command {
            _acceptFilterOption(options: java.util.Deque<string>, expected: string): boolean;
            _acceptInt(options: java.util.Deque<string>, text: string): int;
            _acceptOption(options: java.util.Deque<string>, expected: string): boolean;
            _acceptSwitch(options: java.util.Deque<string>, expected: string): boolean;
            _couldNotReadError(p: java.nio.file.Path, e: java.io.IOException): void;
            displayOptionUsage(stream: java.io.PrintStream): void;
            _displayUsage(stream: java.io.PrintStream): void;
            _ensureAccess(path: java.nio.file.Path): void;
            _ensureFileDoesNotExist(file: java.nio.file.Path): java.nio.file.Path;
            _ensureFileExtension(path: java.nio.file.Path, extension: string): void;
            _ensureMaxArgumentCount(options: java.util.Deque<string>, maxCount: int): void;
            _ensureMinArgumentCount(options: java.util.Deque<string>, minCount: int): void;
            execute(a0: java.util.Deque<string>): void;
            _getAliases(): java.util.List<string>;
            getDescription(): string;
            _getDirectory(pathText: string): java.nio.file.Path;
            _getJFRInputFile(options: java.util.Deque<string>): java.nio.file.Path;
            getName(): string;
            getNames(): java.util.List<string>;
            getOptionSyntax(): java.util.List<string>;
            _getTitle(): string;
            _matches(command: string): boolean;
            _print(text: string): void;
            _println(): void;
            _println(text: string): void;
            _warnForWildcardExpansion(option: string, filter: string): void;
          }
          interface Command extends CombineTypes<[_Command, java.lang.Object]> {}
          interface _Configure$$static extends ClassLike {
            _filename(ui: internal.jfc.model.UserInterface, file: SecuritySupport$SafePath): SecuritySupport$SafePath;
            _new(): Configure;
          }
          let Configure: _Configure$$static;
          interface _Configure {
            _acceptKeyValue(options: java.util.Deque<string>): boolean;
            _configure(interactive: boolean, log: boolean, output: SecuritySupport$SafePath, options: java.util.Map<string,string>): void;
            displayOptionUsage(stream: java.io.PrintStream): void;
            _displayParameters(stream: java.io.PrintStream, name: string): void;
            _ensureInputFiles(): void;
            execute(options: java.util.Deque<string>): void;
            getDescription(): string;
            getName(): string;
            getOptionSyntax(): java.util.List<string>;
            _getTitle(): string;
            _makeJFCPath(file: string): SecuritySupport$SafePath;
            _inputFiles: java.util.List<string>;
          }
          interface Configure extends CombineTypes<[_Configure, jdk.jfr.internal.tool.Command]> {}
          interface _Disassemble$$static extends ClassLike {
            _new(): Disassemble;
          }
          let Disassemble: _Disassemble$$static;
          interface _Disassemble {
            _combineChunkSizes(sizes: java.util.List<long>, maxChunks: int, maxSize: long): java.util.List<long>;
            displayOptionUsage(stream: java.io.PrintStream): void;
            execute(options: java.util.Deque<string>): void;
            _findChunkSizes(p: java.nio.file.Path): java.util.List<long>;
            getDescription(): string;
            getName(): string;
            getOptionSyntax(): java.util.List<string>;
            _readBytes(stream: java.io.InputStream, count: int): byte[];
            _splitFile(directory: java.nio.file.Path, file: java.nio.file.Path, splitPositions: java.util.List<long>): void;
          }
          interface Disassemble extends CombineTypes<[_Disassemble, jdk.jfr.internal.tool.Command]> {}
          interface _EventPrintWriter$$static extends ClassLike {
            _EVENT_THREAD_FIELD: string;
            _PRIVATE_ACCESS: internal.consumer.JdkJfrConsumer;
            _STACK_TRACE_FIELD: string;
            _new(p: java.io.PrintWriter): EventPrintWriter;
          }
          let EventPrintWriter: _EventPrintWriter$$static;
          interface _EventPrintWriter {
            _acceptEvent(event: jfr.consumer.RecordedEvent): boolean;
            _determineValueType(v: ValueDescriptor): EventPrintWriter$ValueType;
            _getStackDepth(): int;
            _getUnsigned(object: jfr.consumer.RecordedObject, name: string): any;
            _getValue(object: jfr.consumer.RecordedObject, v: ValueDescriptor): any;
            _isLateField(name: string): boolean;
            _print(a0: java.util.List<jfr.consumer.RecordedEvent>): void;
(a0: java.util.List<jfr.consumer.RecordedEvent>): void;
            _print(source: java.nio.file.Path): void;
            _printBegin(): void;
            _printEnd(): void;
            setEventFilter(eventFilter: java.util.function.Predicate<EventType>): void;
            setStackDepth(stackDepth: int): void;
            _eventFilter: java.util.function.Predicate<EventType>;
            _stackDepth: int;
            _typeOfValues: java.util.Map<ValueDescriptor,EventPrintWriter$ValueType>;
          }
          interface EventPrintWriter extends CombineTypes<[_EventPrintWriter, jdk.jfr.internal.tool.StructuredWriter]> {}
          interface _EventPrintWriter$ValueType$$static extends ClassLike {
            valueOf(name: string): EventPrintWriter$ValueType;
            values(): EventPrintWriter$ValueType[];
            readonly OTHER: EventPrintWriter$ValueType;
            readonly TIMESPAN: EventPrintWriter$ValueType;
            readonly TIMESTAMP: EventPrintWriter$ValueType;
            readonly UNSIGNED: EventPrintWriter$ValueType;
          }
          let EventPrintWriter$ValueType: _EventPrintWriter$ValueType$$static;
          interface _EventPrintWriter$ValueType {
          }
          interface EventPrintWriter$ValueType extends CombineTypes<[_EventPrintWriter$ValueType]> {}
          interface _Filters$$static extends ClassLike {
            _acronymify(multipleWords: string): string;
            _createCache<T, X>(filter: java.util.function.Predicate<T>, cacheFunction: java.util.function.Function<T,X>): java.util.function.Predicate<T>;
            _createCategoryFilter(filterText: string, types: java.util.List<EventType>): java.util.function.Predicate<EventType>;
            _createEventTypeFilter(filterText: string, types: java.util.List<EventType>): java.util.function.Predicate<EventType>;
            _createThreadFilter(filterText: string): java.util.function.Predicate<jfr.consumer.RecordedThread>;
            _explodeFilter(filter: string): java.util.List<string>;
            _fromEventType(filter: java.util.function.Predicate<EventType>): java.util.function.Predicate<jfr.consumer.RecordedEvent>;
            _fromRecordedThread(filter: java.util.function.Predicate<jfr.consumer.RecordedThread>): java.util.function.Predicate<jfr.consumer.RecordedEvent>;
            _match(text: string, filter: string): boolean;
            matchAny<T>(filters: java.util.List<java.util.function.Predicate<T>>): java.util.function.Predicate<T>;
            _unknownEventType(f: java.util.function.Predicate<EventType>, types: java.util.List<EventType>): boolean;
            new(): Filters;
          }
          let Filters: _Filters$$static;
          interface _Filters {
          }
          interface Filters extends CombineTypes<[_Filters, java.lang.Object]> {}
          interface _Help$$static extends ClassLike {
            _new(): Help;
          }
          let Help: _Help$$static;
          interface _Help {
            displayOptionUsage(stream: java.io.PrintStream): void;
            execute(options: java.util.Deque<string>): void;
            _getAliases(): java.util.List<string>;
            getDescription(): string;
            getName(): string;
            getOptionSyntax(): java.util.List<string>;
          }
          interface Help extends CombineTypes<[_Help, jdk.jfr.internal.tool.Command]> {}
          interface _JSONWriter$$static extends ClassLike {
            new(writer: java.io.PrintWriter): JSONWriter;
          }
          let JSONWriter: _JSONWriter$$static;
          interface _JSONWriter {
            _print(events: java.util.List<jfr.consumer.RecordedEvent>): void;
            _printArray(v: ValueDescriptor, array: any[]): void;
            _printArrayBegin(): void;
            _printArrayEnd(): void;
            _printBegin(): void;
            _printDataStructureName(text: string): void;
            _printEnd(): void;
            _printEscaped(text: string): void;
            _printEscaped(c: char): void;
            _printEvent(event: jfr.consumer.RecordedEvent): void;
            _printIfNull(value: any): boolean;
            _printNewDataStructure(first: boolean, arrayElement: boolean, name: string): void;
            _printNull(): void;
            printObject(object: jfr.consumer.RecordedObject): void;
            _printObjectBegin(): void;
            _printObjectEnd(): void;
            _printValue(first: boolean, arrayElement: boolean, name: string, value: any): void;
            _printValueDescriptor(first: boolean, arrayElement: boolean, vd: ValueDescriptor, value: any): void;
            _first: boolean;
          }
          interface JSONWriter extends CombineTypes<[_JSONWriter, jdk.jfr.internal.tool.EventPrintWriter]> {}
          interface _Main$$static extends ClassLike {
            main(args: string[]): void;
            main(...args: string[]): void;
            _EXIT_FAILED: int;
            _EXIT_OK: int;
            _EXIT_WRONG_ARGUMENTS: int;
            new(): Main;
          }
          let Main: _Main$$static;
          interface _Main {
          }
          interface Main extends CombineTypes<[_Main, java.lang.Object]> {}
          interface _Metadata$$static extends ClassLike {
            _acceptSingleOption(options: java.util.Deque<string>, expected: string): boolean;
            _PRIVATE_ACCESS: internal.consumer.JdkJfrConsumer;
            _new(): Metadata;
          }
          let Metadata: _Metadata$$static;
          interface _Metadata {
            displayOptionUsage(stream: java.io.PrintStream): void;
            execute(options: java.util.Deque<string>): void;
            _findTypes(file: java.nio.file.Path): java.util.List<Type>;
            getDescription(): string;
            getName(): string;
            getOptionSyntax(): java.util.List<string>;
            _getOptionalJFRInputFile(options: java.util.Deque<string>): java.nio.file.Path;
            _getTitle(): string;
          }
          interface Metadata extends CombineTypes<[_Metadata, jdk.jfr.internal.tool.Command]> {}
          interface _Metadata$TypeComparator$$static extends ClassLike {
          }
          let Metadata$TypeComparator: _Metadata$TypeComparator$$static;
          interface _Metadata$TypeComparator {
            compare(t1: Type, t2: Type): int;
            compare(a0: any, a1: any): int;
            _groupValue(t: Type): int;
          }
          interface Metadata$TypeComparator extends CombineTypes<[_Metadata$TypeComparator, java.util.Comparator<Type>, java.lang.Object]> {}
          interface _PrettyWriter$$static extends ClassLike {
            _TIME_FORMAT: java.time.format.DateTimeFormatter;
            _TYPE_OLD_OBJECT: string;
            _ZERO: long;
            new(destination: java.io.PrintWriter): PrettyWriter;
          }
          let PrettyWriter: _PrettyWriter$$static;
          interface _PrettyWriter {
            _decodeDescriptors(descriptor: string, arraySize: string): java.util.List<string>;
            _formatMethod(m: jfr.consumer.RecordedMethod): string;
            _isZeroDuration(event: jfr.consumer.RecordedEvent, name: string): boolean;
            _makeSimpleType(typeName: string): string;
            _print(events: java.util.List<jfr.consumer.RecordedEvent>): void;
            print(event: jfr.consumer.RecordedEvent): void;
            print(struct: jfr.consumer.RecordedObject, postFix: string): void;
            _printAnnotation(a: AnnotationElement): void;
            _printAnnotations(commentIndex: int, annotations: java.util.List<AnnotationElement>): void;
            _printArray(array: any[]): void;
            _printClass(clazz: jfr.consumer.RecordedClass, postFix: string): void;
            _printClassLoader(cl: jfr.consumer.RecordedClassLoader, postFix: string): void;
            _printCommentRef(commentIndex: int, typeId: long): void;
            _printField(commentIndex: int, v: ValueDescriptor, first: boolean): void;
            _printFieldValue(struct: jfr.consumer.RecordedObject, v: ValueDescriptor): void;
            _printFormatted(field: ValueDescriptor, value: any): boolean;
            _printJavaFrame(f: jfr.consumer.RecordedFrame, postFix: string): void;
            _printObject(object: jfr.consumer.RecordedObject, arraySize: long): void;
            _printOldObject(object: jfr.consumer.RecordedObject): void;
            _printReferenceChain(object: jfr.consumer.RecordedObject): void;
            _printStackTrace(stackTrace: jfr.consumer.RecordedStackTrace): void;
            _printThread(thread: jfr.consumer.RecordedThread, postFix: string): void;
            printType(t: Type): void;
            _printValue(value: any, field: ValueDescriptor, postFix: string): void;
            _quoteIfNeeded(o: any): string;
            setLineSeparator(a0: string): void;
            setShowIds(showIds: boolean): void;
            setStackDepth(a0: int): void;
            _textify(o: any): string;
            _currentEvent: jfr.consumer.RecordedEvent;
            _showIds: boolean;
          }
          interface PrettyWriter extends CombineTypes<[_PrettyWriter, jdk.jfr.internal.tool.EventPrintWriter]> {}
          interface _Print$$static extends ClassLike {
            _acceptFormatterOption(options: java.util.Deque<string>, eventWriter: EventPrintWriter, expected: string): boolean;
            _new(): Print;
          }
          let Print: _Print$$static;
          interface _Print {
            displayOptionUsage(stream: java.io.PrintStream): void;
            execute(options: java.util.Deque<string>): void;
            getDescription(): string;
            getName(): string;
            getOptionSyntax(): java.util.List<string>;
            _getTitle(): string;
          }
          interface Print extends CombineTypes<[_Print, jdk.jfr.internal.tool.Command]> {}
          interface _Query$$static extends ClassLike {
            _new(): Query;
          }
          let Query: _Query$$static;
          interface _Query {
            displayOptionUsage(p: java.io.PrintStream): void;
            execute(options: java.util.Deque<string>): void;
            getDescription(): string;
            getName(): string;
            getOptionSyntax(): java.util.List<string>;
          }
          interface Query extends CombineTypes<[_Query, jdk.jfr.internal.tool.Command]> {}
          interface _Scrub$$static extends ClassLike {
            _new(): Scrub;
          }
          let Scrub: _Scrub$$static;
          interface _Scrub {
            _createFilter(options: java.util.Deque<string>, types: java.util.List<EventType>): java.util.function.Predicate<jfr.consumer.RecordedEvent>;
            displayOptionUsage(stream: java.io.PrintStream): void;
            _ensureUsableOutput(input: java.nio.file.Path, output: java.nio.file.Path): void;
            execute(options: java.util.Deque<string>): void;
            getDescription(): string;
            getName(): string;
            getOptionSyntax(): java.util.List<string>;
            _getTitle(): string;
          }
          interface Scrub extends CombineTypes<[_Scrub, jdk.jfr.internal.tool.Command]> {}
          interface _StructuredWriter$$static extends ClassLike {
            _new(p: java.io.PrintWriter): StructuredWriter;
          }
          let StructuredWriter: _StructuredWriter$$static;
          interface _StructuredWriter {
            flush(hard: boolean): void;
            _getColumn(): int;
            indent(): void;
            print(texts: string[]): void;
            print(...texts: string[]): void;
            print(text: string): void;
            print(c: char): void;
            print(value: int): void;
            printAsString(o: any): void;
            printIndent(): void;
            println(): void;
            println(text: string): void;
            retract(): void;
            setLineSeparator(lineSeparator: string): void;
            _updateIndent(): void;
            _builder: tool$stringBuilder;
            _column: int;
            _first: boolean;
            _indent: int;
            _indention: string;
            _lineSeparator: string;
            _out: java.io.PrintWriter;
          }
          interface StructuredWriter extends CombineTypes<[_StructuredWriter, java.lang.Object]> {}
          interface _Summary$$static extends ClassLike {
            _new(): Summary;
          }
          let Summary: _Summary$$static;
          interface _Summary {
            displayOptionUsage(stream: java.io.PrintStream): void;
            execute(options: java.util.Deque<string>): void;
            getDescription(): string;
            getName(): string;
            getOptionSyntax(): java.util.List<string>;
            _printInformation(p: java.nio.file.Path): void;
            _DATE_FORMAT: java.time.format.DateTimeFormatter;
          }
          interface Summary extends CombineTypes<[_Summary, jdk.jfr.internal.tool.Command]> {}
          interface _Summary$Statistics$$static extends ClassLike {
            _new(name: string): Summary$Statistics;
          }
          let Summary$Statistics: _Summary$Statistics$$static;
          interface _Summary$Statistics {
            _count: long;
            _name: string;
            _size: long;
          }
          interface Summary$Statistics extends CombineTypes<[_Summary$Statistics, java.lang.Object]> {}
          interface _UserDataException$$static extends ClassLike {
            _serialVersionUID: long;
            new(errorMessage: string): UserDataException;
          }
          let UserDataException: _UserDataException$$static;
          interface _UserDataException {
          }
          interface UserDataException extends CombineTypes<[_UserDataException, java.lang.Exception]> {}
          interface _UserSyntaxException$$static extends ClassLike {
            _serialVersionUID: long;
            new(errorMessage: string): UserSyntaxException;
          }
          let UserSyntaxException: _UserSyntaxException$$static;
          interface _UserSyntaxException {
          }
          interface UserSyntaxException extends CombineTypes<[_UserSyntaxException, java.lang.Exception]> {}
          interface _Version$$static extends ClassLike {
            _new(): Version;
          }
          let Version: _Version$$static;
          interface _Version {
            execute(options: java.util.Deque<string>): void;
            _getAliases(): java.util.List<string>;
            getDescription(): string;
            getName(): string;
          }
          interface Version extends CombineTypes<[_Version, jdk.jfr.internal.tool.Command]> {}
          interface _View$$static extends ClassLike {
            new(): View;
          }
          let View: _View$$static;
          interface _View {
            displayOptionUsage(stream: java.io.PrintStream): void;
            execute(options: java.util.Deque<string>): void;
            getDescription(): string;
            getName(): string;
            getNames(): java.util.List;
            getOptionSyntax(): java.util.List<string>;
            _getTitle(): string;
          }
          interface View extends CombineTypes<[_View, jdk.jfr.internal.tool.Command]> {}
          interface _XMLWriter$$static extends ClassLike {
            new(destination: java.io.PrintWriter): XMLWriter;
          }
          let XMLWriter: _XMLWriter$$static;
          interface _XMLWriter {
            _print(events: java.util.List<jfr.consumer.RecordedEvent>): void;
            _printArray(v: ValueDescriptor, array: any[]): void;
            _printAttribute(name: string, value: string): void;
            _printBegin(): void;
            _printBeginElement(elementName: string, name: string, value: any, index: int): boolean;
            _printEnd(): void;
            _printEndElement(elementName: string): void;
            _printEscaped(text: string): void;
            _printEscaped(c: char): void;
            _printEvent(event: jfr.consumer.RecordedEvent): void;
            printObject(struct: jfr.consumer.RecordedObject): void;
            _printValueDescriptor(vd: ValueDescriptor, value: any, index: int): void;
          }
          interface XMLWriter extends CombineTypes<[_XMLWriter, jdk.jfr.internal.tool.EventPrintWriter]> {}
        }
        module util {
          interface _Columnizer$$static extends ClassLike {
            new(texts: java.util.List<string>, columnCount: int): Columnizer;
          }
          let Columnizer: _Columnizer$$static;
          interface _Columnizer {
            toString(): string;
            _columns: java.util.List<Columnizer$Column>;
          }
          interface Columnizer extends CombineTypes<[_Columnizer, java.lang.Object]> {}
          interface _Columnizer$Column$$static extends ClassLike {
          }
          let Columnizer$Column: _Columnizer$Column$$static;
          interface _Columnizer$Column {
            add(text: string): void;
            _entries: java.util.List<string>;
            _maxWidth: int;
          }
          interface Columnizer$Column extends CombineTypes<[_Columnizer$Column, java.lang.Object]> {}
          interface _Matcher$$static extends ClassLike {
            match(text: string, pattern: string): boolean;
            new(): Matcher;
          }
          let Matcher: _Matcher$$static;
          interface _Matcher {
          }
          interface Matcher extends CombineTypes<[_Matcher, java.lang.Object]> {}
          interface _Output$$static extends ClassLike {
          }
          let Output: _Output$$static;
          interface _Output {
            print(a0: string): void;
            print(a0: string, a1: any[]): void;
            print(a0: string, ...a1: any[]): void;
            print(a0: char): void;
            println(): void;
            println(s: string, args: any[]): void;
            println(s: string, ...args: any[]): void;
          }
          interface Output extends CombineTypes<[_Output, java.lang.Object]> {}
          interface _Output$BufferedPrinter$$static extends ClassLike {
            new(out: java.io.PrintStream): Output$BufferedPrinter;
          }
          let Output$BufferedPrinter: _Output$BufferedPrinter$$static;
          interface _Output$BufferedPrinter {
            flush(): void;
            _flushCheck(): void;
            print(s: string): void;
            print(s: string, args: any[]): void;
            print(s: string, ...args: any[]): void;
            print(c: char): void;
            println(): void;
            _buffer: util$stringBuilder;
            _out: java.io.PrintStream;
          }
          interface Output$BufferedPrinter extends CombineTypes<[_Output$BufferedPrinter, java.lang.Object, jdk.jfr.internal.util.Output]> {}
          interface _Output$LinePrinter$$static extends ClassLike {
            new(): Output$LinePrinter;
          }
          let Output$LinePrinter: _Output$LinePrinter$$static;
          interface _Output$LinePrinter {
            getLines(): java.util.List<string>;
            print(s: string): void;
            print(s: string, args: any[]): void;
            print(s: string, ...args: any[]): void;
            print(c: char): void;
            println(): void;
            _currentLine: util$stringBuilder;
            _lines: java.util.List<string>;
          }
          interface Output$LinePrinter extends CombineTypes<[_Output$LinePrinter, java.lang.Object, jdk.jfr.internal.util.Output]> {}
          interface _SpellChecker$$static extends ClassLike {
            check(name: string, alternatives: java.util.List<string>): string;
            _diff(a: string, b: string): int;
            _inSequence(longer: string, shorter: string): boolean;
            new(): SpellChecker;
          }
          let SpellChecker: _SpellChecker$$static;
          interface _SpellChecker {
          }
          interface SpellChecker extends CombineTypes<[_SpellChecker, java.lang.Object]> {}
          interface _StopWatch$$static extends ClassLike {
            new(): StopWatch;
          }
          let StopWatch: _StopWatch$$static;
          interface _StopWatch {
            beginAggregation(): void;
            beginFormatting(): void;
            beginQueryValidation(): void;
            beginTask(name: string): void;
            finish(): void;
            toString(): string;
            _timings: java.util.List<StopWatch$Timing>;
          }
          interface StopWatch extends CombineTypes<[_StopWatch, java.lang.Object]> {}
          interface _StopWatch$Timing$$static extends ClassLike {
          }
          let StopWatch$Timing: _StopWatch$Timing$$static;
          interface _StopWatch$Timing {
            equals(o: any): boolean;
            hashCode(): int;
            name(): string;
            start(): java.time.Instant;
            toString(): string;
          }
          interface StopWatch$Timing extends CombineTypes<[_StopWatch$Timing, java.lang.Record]> {}
          interface _Tokenizer$$static extends ClassLike {
            new(text: string, separators: char[]): Tokenizer;
            new(text: string, ...separators: char[]): Tokenizer;
          }
          let Tokenizer: _Tokenizer$$static;
          interface _Tokenizer {
            accept(match: string): boolean;
            accept(matches: string[]): boolean;
            accept(...matches: string[]): boolean;
            acceptAny(matches: string[]): boolean;
            acceptAny(...matches: string[]): boolean;
            close(): void;
            expect(expected: string): void;
            _findNext(c: char): int;
            getPosition(): int;
            hasNext(): boolean;
            _isQuoteCharacter(c: char): boolean;
            _isSeparator(c: char): boolean;
            next(): string;
            peekChar(): char;
            skipLine(): void;
            _skipWhitespace(): void;
            _index: int;
            _separators: char[];
            _text: string;
          }
          interface Tokenizer extends CombineTypes<[_Tokenizer, java.lang.Object, java.lang.AutoCloseable]> {}
          interface _UserDataException$$static extends ClassLike {
            _serialVersionUID: long;
            new(errorMessage: string): UserDataException;
          }
          let UserDataException: _UserDataException$$static;
          interface _UserDataException {
          }
          interface UserDataException extends CombineTypes<[_UserDataException, java.lang.Exception]> {}
          interface _UserSyntaxException$$static extends ClassLike {
            _serialVersionUID: long;
            new(errorMessage: string): UserSyntaxException;
          }
          let UserSyntaxException: _UserSyntaxException$$static;
          interface _UserSyntaxException {
          }
          interface UserSyntaxException extends CombineTypes<[_UserSyntaxException, java.lang.Exception]> {}
          interface _ValueFormatter$$static extends ClassLike {
            _countLength(value: long): int;
            _decodeDescriptors(descriptor: string, arraySize: string): java.util.List<string>;
            formatBits(bits: long): string;
            formatBitsPerSecond(bits: long): string;
            formatBytes(bytes: long): string;
            formatBytesCompact(bytes: long): string;
            formatBytesPerSecond(bytes: long): string;
            formatClass(clazz: jfr.consumer.RecordedClass): string;
            _formatDataAmount(formatter: string, amount: long): string;
            formatDuration(d: java.time.Duration): string;
            formatMethod(m: jfr.consumer.RecordedMethod, compact: boolean): string;
            formatNumber(n: number): string;
            _formatPositiveDuration(d: java.time.Duration): string;
            formatTimestamp(instant: java.time.Instant): string;
            _roundDuration(d: java.time.Duration): java.time.Duration;
            _roundPositiveDuration(d: java.time.Duration): java.time.Duration;
            _BASE: int;
            _DATE_FORMAT: java.time.format.DateTimeFormatter;
            _DAY: java.time.Duration;
            _DISPLAY_NANO_DIGIT: int;
            _HOUR: java.time.Duration;
            _MICRO_SECOND: java.time.Duration;
            _MILL_SIGNIFICANT_FIGURES: int;
            _MINUTE: java.time.Duration;
            _NANO_SIGNIFICANT_FIGURES: int;
            _NUMBER_FORMAT: java.text.NumberFormat;
            _SECOND: java.time.Duration;
            new(): ValueFormatter;
          }
          let ValueFormatter: _ValueFormatter$$static;
          interface _ValueFormatter {
          }
          interface ValueFormatter extends CombineTypes<[_ValueFormatter, java.lang.Object]> {}
        }
        interface _ASMToolkit$$static extends ClassLike {
          getDescriptor(typeName: string): string;
          getInternalName(className: string): string;
          logASM(className: string, bytes: byte[]): void;
          toType(v: ValueDescriptor): jdk.internal.org.objectweb.asm.Type;
          _TYPE_CLASS: jdk.internal.org.objectweb.asm.Type;
          readonly TYPE_STRING: jdk.internal.org.objectweb.asm.Type;
          _TYPE_THREAD: jdk.internal.org.objectweb.asm.Type;
          _new(): ASMToolkit;
        }
        let ASMToolkit: _ASMToolkit$$static;
        interface _ASMToolkit {
        }
        interface ASMToolkit extends CombineTypes<[_ASMToolkit, java.lang.Object]> {}
        interface _AnnotationConstruct$$static extends ClassLike {
          new(elements: java.util.List<AnnotationElement>): AnnotationConstruct;
          new(): AnnotationConstruct;
        }
        let AnnotationConstruct: _AnnotationConstruct$$static;
        interface _AnnotationConstruct {
          getAnnotation<T>(clazz: java.lang.Class<java.lang.annotation.Annotation>): T;
          _getAnnotationElement(clazz: java.lang.Class<java.lang.annotation.Annotation>): AnnotationElement;
          getDescription(): string;
          getLabel(): string;
          getUnmodifiableAnnotationElements(): java.util.List<AnnotationElement>;
          hasUnsigned(): boolean;
          setAnnotationElements(elements: java.util.List<AnnotationElement>): void;
          _annotationElements: java.util.List<AnnotationElement>;
          _unsignedFlag: byte;
        }
        interface AnnotationConstruct extends CombineTypes<[_AnnotationConstruct, java.lang.Object]> {}
        interface _AnnotationConstruct$AnnotationInvocationHandler$$static extends ClassLike {
          _new(a: AnnotationElement): AnnotationConstruct$AnnotationInvocationHandler;
        }
        let AnnotationConstruct$AnnotationInvocationHandler: _AnnotationConstruct$AnnotationInvocationHandler$$static;
        interface _AnnotationConstruct$AnnotationInvocationHandler {
          invoke(proxy: any, method: java.lang.reflect.Method, args: any[]): any;
          _annotationElement: AnnotationElement;
        }
        interface AnnotationConstruct$AnnotationInvocationHandler extends CombineTypes<[_AnnotationConstruct$AnnotationInvocationHandler, java.lang.Object, java.lang.reflect.InvocationHandler]> {}
        interface _Bits$$static extends ClassLike {
          _int0(x: int): byte;
          _int1(x: int): byte;
          _int2(x: int): byte;
          _int3(x: int): byte;
          _isAddressAligned(a: long, a1: int): boolean;
          _long0(x: long): byte;
          _long1(x: long): byte;
          _long2(x: long): byte;
          _long3(x: long): byte;
          _long4(x: long): byte;
          _long5(x: long): byte;
          _long6(x: long): byte;
          _long7(x: long): byte;
          _putByte_(a: long, a1: byte): void;
          putDouble(a: long, a1: double): int;
          _putDoubleBigEndianUnaligned(a: long, a1: double): void;
          _putDouble_(a: long, a1: double): void;
          putFloat(a: long, a1: float): int;
          _putFloatBigEndianUnaligned(a: long, a1: float): void;
          _putFloat_(a: long, a1: float): void;
          putInt(a: long, a1: int): int;
          _putIntBigEndianUnaligned(a: long, a1: int): void;
          _putInt_(a: long, a1: int): void;
          _putLongBigEndianUnaligned(a: long, a1: long): void;
          _swap(x: int): int;
          _swap(x: long): long;
          _swap(x: float): float;
          _swap(x: double): double;
          _bigEndian: boolean;
          _unalignedAccess: boolean;
          _unsafe: jdk.internal.misc.Unsafe;
        }
        let Bits: _Bits$$static;
        interface _Bits {
        }
        interface Bits extends CombineTypes<[_Bits, java.lang.Object]> {}
        interface _ChunkInputStream$$static extends ClassLike {
          _new(chunks: java.util.List<RepositoryChunk>): ChunkInputStream;
        }
        let ChunkInputStream: _ChunkInputStream$$static;
        interface _ChunkInputStream {
          available(): int;
          close(): void;
          _nextChunk(): boolean;
          _nextStream(): boolean;
          read(): int;
          _chunks: java.util.Iterator<RepositoryChunk>;
          _currentChunk: RepositoryChunk;
          _stream: java.io.InputStream;
          _unstreamedSize: long;
        }
        interface ChunkInputStream extends CombineTypes<[_ChunkInputStream, java.io.InputStream]> {}
        interface _ChunksChannel$$static extends ClassLike {
          new(chunks: java.util.List<RepositoryChunk>): ChunksChannel;
        }
        let ChunksChannel: _ChunksChannel$$static;
        interface _ChunksChannel {
          close(): void;
          isOpen(): boolean;
          _nextChannel(): boolean;
          _nextChunk(): boolean;
          read(dst: java.nio.ByteBuffer): int;
          transferTo(out: java.nio.channels.FileChannel): long;
          _channel: java.nio.channels.ReadableByteChannel;
          _chunks: java.util.Iterator<RepositoryChunk>;
          _current: RepositoryChunk;
        }
        interface ChunksChannel extends CombineTypes<[_ChunksChannel, java.nio.channels.ReadableByteChannel, java.lang.Object]> {}
        interface _Control$$static extends ClassLike {
          _CACHE_SIZE: int;
          new(delegate: SettingControl, defaultValue: string): Control;
        }
        let Control: _Control$$static;
        interface _Control {
          _apply(values: java.util.Set<string>): void;
          _apply(value: string): void;
          combine(values: java.util.Set<string>): string;
          _findCombine(values: java.util.Set<string>): string;
          _getDefaultValue(): string;
          _getLastValue(): string;
          _getSettingControl(): SettingControl;
          getValue(): string;
          _isType(clazz: java.lang.Class<SettingControl>): boolean;
          _setDefault(): void;
          setValue(value: string): void;
          _cachedUnions: java.util.Set<any>[];
          _cachedValues: string[];
          _context: java.security.AccessControlContext;
          _defaultValue: string;
          _delegate: SettingControl;
          _lastValue: string;
        }
        interface Control extends CombineTypes<[_Control, java.lang.Object]> {}
        interface _Cutoff$$static extends ClassLike {
          readonly INFINITY: string;
          readonly NAME: string;
        }
        let Cutoff: _Cutoff$$static;
        interface _Cutoff {
          value(): string;
(): string;
        }
        interface Cutoff extends CombineTypes<[_Cutoff, java.lang.annotation.Annotation, java.lang.Object]> {}
        interface _EventClassBuilder$$static extends ClassLike {
          _DEFAULT_CONSTRUCTOR: jdk.internal.org.objectweb.asm.commons.Method;
          _SET_METHOD: jdk.internal.org.objectweb.asm.commons.Method;
          _TYPE_EVENT: jdk.internal.org.objectweb.asm.Type;
          _TYPE_IOBE: jdk.internal.org.objectweb.asm.Type;
          _idCounter: java.util.concurrent.atomic.AtomicLong;
          new(annotationElements: java.util.List<AnnotationElement>, fields: java.util.List<ValueDescriptor>): EventClassBuilder;
        }
        let EventClassBuilder: _EventClassBuilder$$static;
        interface _EventClassBuilder {
          build(): java.lang.Class<Event>;
          _buildClassInfo(): void;
          _buildConstructor(): void;
          _buildFields(): void;
          _buildSetMethod(): void;
          _endClass(): void;
          _annotationElements: java.util.List<AnnotationElement>;
          _classWriter: jdk.internal.org.objectweb.asm.ClassWriter;
          _fields: java.util.List<ValueDescriptor>;
          _fullClassName: string;
          _type: jdk.internal.org.objectweb.asm.Type;
        }
        interface EventClassBuilder extends CombineTypes<[_EventClassBuilder, java.lang.Object]> {}
        interface _EventControl$$static extends ClassLike {
          _defineCutoff(type: PlatformEventType): Control;
          _defineEnabled(type: PlatformEventType): Control;
          _definePeriod(type: PlatformEventType): Control;
          _defineStackTrace(type: PlatformEventType): Control;
          _defineThreshold(type: PlatformEventType): Control;
          _defineThrottle(type: PlatformEventType): Control;
          _remove(type: PlatformEventType, aes: java.util.List<AnnotationElement>, clazz: java.lang.Class<java.lang.annotation.Annotation>): void;
          _FIELD_SETTING_PREFIX: string;
          _TYPE_CUTOFF: Type;
          _TYPE_ENABLED: Type;
          _TYPE_PERIOD: Type;
          _TYPE_STACK_TRACE: Type;
          _TYPE_THRESHOLD: Type;
          _TYPE_THROTTLE: Type;
          _new(eventType: PlatformEventType): EventControl;
          _new(es: PlatformEventType, eventClass: java.lang.Class<jdk.internal.event.Event>): EventControl;
        }
        let EventControl: _EventControl$$static;
        interface _EventControl {
          _addControl(name: string, control: Control): void;
          _defineSetting(settingsClass: java.lang.Class<SettingControl>, method: java.lang.reflect.Method, eventType: PlatformEventType, settingName: string): void;
          _defineSettings(eventClass: java.lang.Class<any>): void;
          _disable(): void;
          getEventType(): PlatformEventType;
          getNamedControls(): java.util.ArrayList<EventControl$NamedControl>;
          getSettingControls(): java.util.List<SettingControl>;
          getSettingsId(): string;
          _hasControl(name: string): boolean;
          _instantiateSettingControl(settingControlClass: java.lang.Class<SettingControl>): SettingControl;
          _writeActiveSettingEvent(timestamp: long): void;
          _idName: string;
          _namedControls: java.util.ArrayList<EventControl$NamedControl>;
          _settingControls: java.util.ArrayList<SettingControl>;
          _type: PlatformEventType;
        }
        interface EventControl extends CombineTypes<[_EventControl, java.lang.Object]> {}
        interface _EventControl$NamedControl$$static extends ClassLike {
          _new(name: string, control: Control): EventControl$NamedControl;
        }
        let EventControl$NamedControl: _EventControl$NamedControl$$static;
        interface _EventControl$NamedControl {
          control(): Control;
          equals(o: any): boolean;
          hashCode(): int;
          name(): string;
          toString(): string;
        }
        interface EventControl$NamedControl extends CombineTypes<[_EventControl$NamedControl, java.lang.Record]> {}
        interface _EventInstrumentation$$static extends ClassLike {
          _annotationValue<T>(classNode: jdk.internal.org.objectweb.asm.tree.ClassNode, typeDescriptor: string, type: java.lang.Class<any>): T;
          _buildFieldInfos(superClass: java.lang.Class<any>, classNode: jdk.internal.org.objectweb.asm.tree.ClassNode): java.util.List<EventInstrumentation$FieldInfo>;
          _buildSettingInfos(superClass: java.lang.Class<any>, classNode: jdk.internal.org.objectweb.asm.tree.ClassNode): java.util.List<EventInstrumentation$SettingInfo>;
          findStaticCommitMethod(classNode: jdk.internal.org.objectweb.asm.tree.ClassNode, fields: java.util.List<EventInstrumentation$FieldInfo>): jdk.internal.org.objectweb.asm.commons.Method;
          _invokeStatic(methodVisitor: jdk.internal.org.objectweb.asm.MethodVisitor, className: string, m: jdk.internal.org.objectweb.asm.commons.Method): void;
          _invokeVirtual(methodVisitor: jdk.internal.org.objectweb.asm.MethodVisitor, className: string, m: jdk.internal.org.objectweb.asm.commons.Method): void;
          isValidField(access: int, className: string): boolean;
          _ANNOTATION_ENABLED_DESCRIPTOR: string;
          _ANNOTATION_NAME_DESCRIPTOR: string;
          _ANNOTATION_REGISTERED_DESCRIPTOR: string;
          readonly FIELD_DURATION: string;
          _FIELD_EVENT_CONFIGURATION: string;
          readonly FIELD_EVENT_THREAD: string;
          readonly FIELD_STACK_TRACE: string;
          _FIELD_START_TIME: string;
          _METHOD_BEGIN: jdk.internal.org.objectweb.asm.commons.Method;
          _METHOD_COMMIT: jdk.internal.org.objectweb.asm.commons.Method;
          _METHOD_DURATION: jdk.internal.org.objectweb.asm.commons.Method;
          _METHOD_ENABLED: jdk.internal.org.objectweb.asm.commons.Method;
          _METHOD_END: jdk.internal.org.objectweb.asm.commons.Method;
          _METHOD_EVENT_CONFIGURATION_GET_SETTING: jdk.internal.org.objectweb.asm.commons.Method;
          _METHOD_EVENT_CONFIGURATION_SHOULD_COMMIT: jdk.internal.org.objectweb.asm.commons.Method;
          _METHOD_EVENT_SHOULD_COMMIT: jdk.internal.org.objectweb.asm.commons.Method;
          _METHOD_GET_EVENT_WRITER_KEY: jdk.internal.org.objectweb.asm.commons.Method;
          _METHOD_IS_ENABLED: jdk.internal.org.objectweb.asm.commons.Method;
          _METHOD_RESET: jdk.internal.org.objectweb.asm.commons.Method;
          _METHOD_SHOULD_COMMIT_LONG: jdk.internal.org.objectweb.asm.commons.Method;
          _METHOD_TIME_STAMP: jdk.internal.org.objectweb.asm.commons.Method;
          _TYPE_EVENT_CONFIGURATION: jdk.internal.org.objectweb.asm.Type;
          _TYPE_EVENT_CONFIGURATION_DESCRIPTOR: string;
          _TYPE_EVENT_WRITER: jdk.internal.org.objectweb.asm.Type;
          _TYPE_EVENT_WRITER_FACTORY: jdk.internal.org.objectweb.asm.Type;
          _TYPE_OBJECT_DESCRIPTOR: string;
          _TYPE_SETTING_CONTROL: jdk.internal.org.objectweb.asm.Type;
          _TYPE_SETTING_DEFINITION_DESCRIPTOR: string;
          _new(superClass: java.lang.Class<any>, bytes: byte[], id: long, a3: boolean, isJDK: boolean): EventInstrumentation;
        }
        let EventInstrumentation: _EventInstrumentation$$static;
        interface _EventInstrumentation {
          buildInstrumented(): byte[];
          buildUninstrumented(): byte[];
          _createClassNode(bytes: byte[]): jdk.internal.org.objectweb.asm.tree.ClassNode;
          getClassName(): string;
          _getEventConfiguration(methodVisitor: jdk.internal.org.objectweb.asm.MethodVisitor): void;
          getEventName(): string;
          _getEventWriter(mv: jdk.internal.org.objectweb.asm.MethodVisitor): void;
          _getInternalClassName(): string;
          _getMethodNode(method: jdk.internal.org.objectweb.asm.commons.Method): jdk.internal.org.objectweb.asm.tree.MethodNode;
          _hasStaticMethod(method: jdk.internal.org.objectweb.asm.commons.Method): boolean;
          _hasUntypedConfiguration(): boolean;
          _invokeVirtual(methodVisitor: jdk.internal.org.objectweb.asm.MethodVisitor, type: jdk.internal.org.objectweb.asm.Type, method: jdk.internal.org.objectweb.asm.commons.Method): void;
          _isEnabled(): boolean;
          _isRegistered(): boolean;
          _makeInstrumented(): void;
          _makeUninstrumented(): void;
          _toByteArray(): byte[];
          _updateEnabledMethod(method: jdk.internal.org.objectweb.asm.commons.Method): void;
          _updateExistingWithEmptyVoidMethod(voidMethod: jdk.internal.org.objectweb.asm.commons.Method): void;
          _updateExistingWithReturnFalse(voidMethod: jdk.internal.org.objectweb.asm.commons.Method): void;
          _updateIfStaticMethodExists(method: jdk.internal.org.objectweb.asm.commons.Method, code: java.util.function.Consumer<jdk.internal.org.objectweb.asm.MethodVisitor>): void;
          _updateMethod(method: jdk.internal.org.objectweb.asm.commons.Method, code: java.util.function.Consumer<jdk.internal.org.objectweb.asm.MethodVisitor>): void;
          _visitMethod(mv: jdk.internal.org.objectweb.asm.MethodVisitor, opcode: int, type: jdk.internal.org.objectweb.asm.Type, method: jdk.internal.org.objectweb.asm.commons.Method): void;
          _classNode: jdk.internal.org.objectweb.asm.tree.ClassNode;
          _eventName: string;
          _eventTypeId: long;
          _fieldInfos: java.util.List<EventInstrumentation$FieldInfo>;
          _guardEventConfiguration: boolean;
          _isJDK: boolean;
          _settingInfos: java.util.List<EventInstrumentation$SettingInfo>;
          _staticCommitMethod: jdk.internal.org.objectweb.asm.commons.Method;
          _superClass: java.lang.Class<any>;
          _untypedEventConfiguration: boolean;
        }
        interface EventInstrumentation extends CombineTypes<[_EventInstrumentation, java.lang.Object]> {}
        interface _EventInstrumentation$FieldInfo$$static extends ClassLike {
          _new(name: string, descriptor: string): EventInstrumentation$FieldInfo;
        }
        let EventInstrumentation$FieldInfo: _EventInstrumentation$FieldInfo$$static;
        interface _EventInstrumentation$FieldInfo {
          descriptor(): string;
          equals(o: any): boolean;
          hashCode(): int;
          name(): string;
          toString(): string;
        }
        interface EventInstrumentation$FieldInfo extends CombineTypes<[_EventInstrumentation$FieldInfo, java.lang.Record]> {}
        interface _EventInstrumentation$SettingInfo$$static extends ClassLike {
          _new(paramType: jdk.internal.org.objectweb.asm.Type, methodName: string): EventInstrumentation$SettingInfo;
        }
        let EventInstrumentation$SettingInfo: _EventInstrumentation$SettingInfo$$static;
        interface _EventInstrumentation$SettingInfo {
          equals(o: any): boolean;
          hashCode(): int;
          methodName(): string;
          paramType(): jdk.internal.org.objectweb.asm.Type;
          toString(): string;
        }
        interface EventInstrumentation$SettingInfo extends CombineTypes<[_EventInstrumentation$SettingInfo, java.lang.Record]> {}
        interface _EventWriterFactoryRecipe$$static extends ClassLike {
          getEventWriter(key: long): internal.event.EventWriter;
          _KEY: long;
          new(): EventWriterFactoryRecipe;
        }
        let EventWriterFactoryRecipe: _EventWriterFactoryRecipe$$static;
        interface _EventWriterFactoryRecipe {
        }
        interface EventWriterFactoryRecipe extends CombineTypes<[_EventWriterFactoryRecipe, java.lang.Object]> {}
        interface _EventWriterKey$$static extends ClassLike {
          block(): void;
          _createKey(): long;
          ensureEventWriterFactory(): void;
          getKey(): long;
          _match(bytes: byte[], offset: int, text: string): boolean;
          _mixMurmur64(z: long): long;
          _replace(bytes: byte[], match: string, replacement: string): byte[];
          _KEY: long;
          _loaded: boolean;
          _logged: boolean;
          new(): EventWriterKey;
        }
        let EventWriterKey: _EventWriterKey$$static;
        interface _EventWriterKey {
        }
        interface EventWriterKey extends CombineTypes<[_EventWriterKey, java.lang.Object]> {}
        interface _EventWriterMethod$$static extends ClassLike {
          lookupMethod(field: EventInstrumentation$FieldInfo): EventWriterMethod;
          valueOf(name: string): EventWriterMethod;
          values(): EventWriterMethod[];
          readonly BEGIN_EVENT: EventWriterMethod;
          readonly END_EVENT: EventWriterMethod;
          readonly PUT_BOOLEAN: EventWriterMethod;
          readonly PUT_BYTE: EventWriterMethod;
          readonly PUT_CHAR: EventWriterMethod;
          readonly PUT_CLASS: EventWriterMethod;
          readonly PUT_DOUBLE: EventWriterMethod;
          readonly PUT_EVENT_THREAD: EventWriterMethod;
          readonly PUT_FLOAT: EventWriterMethod;
          readonly PUT_INT: EventWriterMethod;
          readonly PUT_LONG: EventWriterMethod;
          readonly PUT_SHORT: EventWriterMethod;
          readonly PUT_STACK_TRACE: EventWriterMethod;
          readonly PUT_STRING: EventWriterMethod;
          readonly PUT_THREAD: EventWriterMethod;
        }
        let EventWriterMethod: _EventWriterMethod$$static;
        interface _EventWriterMethod {
          asASM(): jdk.internal.org.objectweb.asm.commons.Method;
          _asmMethod: jdk.internal.org.objectweb.asm.commons.Method;
          _typeDescriptor: string;
        }
        interface EventWriterMethod extends CombineTypes<[_EventWriterMethod]> {}
        interface _FilePurger$$static extends ClassLike {
          add(p: SecuritySupport$SafePath): void;
          _delete(p: SecuritySupport$SafePath): boolean;
          purge(): void;
          _removeOldest(): void;
          _paths: java.util.Set<SecuritySupport$SafePath>;
          _new(): FilePurger;
        }
        let FilePurger: _FilePurger$$static;
        interface _FilePurger {
        }
        interface FilePurger extends CombineTypes<[_FilePurger, java.lang.Object]> {}
        interface _JVM$$static extends ClassLike {
          addStringConstant(a0: long, a1: string): boolean;
          commit(a0: long): long;
          counterTime(): long;
          emitDataLoss(a0: long): void;
          flush(a0: internal.event.EventWriter, a1: int, a2: int): void;
          getClassId(a0: java.lang.Class<any>): long;
          getEventWriter(): internal.event.EventWriter;
          getJVM(): JVM;
          log(a0: int, a1: int, a2: string): void;
          logEvent(a0: int, a1: string[], a2: boolean): void;
          newEventWriter(): internal.event.EventWriter;
          _registerNatives(): void;
          subscribeLogLevel(a0: LogTag, a1: int): void;
          readonly CHUNK_ROTATION_MONITOR: any;
          _RESERVED_CLASS_ID_LIMIT: long;
          _jvm: JVM;
        }
        let JVM: _JVM$$static;
        interface _JVM {
          abort(a0: string): void;
          beginRecording(): void;
          createFailedNativeJFR(): boolean;
          _createJFR(a0: boolean): boolean;
          createNativeJFR(): void;
          _destroyJFR(): boolean;
          destroyNativeJFR(): boolean;
          emitEvent(a0: long, a1: long, a2: long): boolean;
          emitOldObjectSamples(a0: long, a1: boolean, a2: boolean): void;
          endRecording(): void;
          exclude(a0: java.lang.Thread): void;
          flush(): void;
          getAllEventClasses(): java.util.List<java.lang.Class<jdk.internal.event.Event>>;
          getAllowedToDoEventRetransforms(): boolean;
          getChunkStartNanos(): long;
          getConfiguration(a0: java.lang.Class<jdk.internal.event.Event>): any;
          getDumpPath(): string;
          getPid(): string;
          getStackTraceId(a0: int): long;
          getThreadId(a0: java.lang.Thread): long;
          getTicksFrequency(): long;
          getTimeConversionFactor(): double;
          getTypeId(a0: java.lang.Class<any>): long;
          getTypeId(a0: string): long;
          getUnloadedEventClassCount(): long;
          hasNativeJFR(): boolean;
          hostTotalMemory(): long;
          include(a0: java.lang.Thread): void;
          isAvailable(): boolean;
          isContainerized(): boolean;
          isExcluded(a0: java.lang.Thread): boolean;
          isExcluded(a0: java.lang.Class<jdk.internal.event.Event>): boolean;
          isInstrumented(a0: java.lang.Class<jdk.internal.event.Event>): boolean;
          isRecording(): boolean;
          markChunkFinal(): void;
          retransformClasses(a0: java.lang.Class<any>[]): void;
          setCompressedIntegers(a0: boolean): void;
          setConfiguration(a0: java.lang.Class<jdk.internal.event.Event>, a1: internal.event.EventConfiguration): boolean;
          setCutoff(a0: long, a1: long): boolean;
          setDumpPath(a0: string): void;
          setEnabled(a0: long, a1: boolean): void;
          setFileNotification(a0: long): void;
          setForceInstrumentation(a0: boolean): void;
          setGlobalBufferCount(a0: long): void;
          setGlobalBufferSize(a0: long): void;
          setMemorySize(a0: long): void;
          setMethodSamplingPeriod(a0: long, a1: long): void;
          setOutput(a0: string): void;
          setRepositoryLocation(a0: string): void;
          setStackDepth(a0: int): void;
          setStackTraceEnabled(a0: long, a1: boolean): void;
          setThreadBufferSize(a0: long): void;
          setThreshold(a0: long, a1: long): boolean;
          setThrottle(a0: long, a1: long, a2: long): boolean;
          shouldRotateDisk(): boolean;
          storeMetadataDescriptor(a0: byte[]): void;
          uncaughtException(a0: java.lang.Thread, a1: java.lang.Throwable): void;
          _nativeOK: boolean;
        }
        interface JVM extends CombineTypes<[_JVM, java.lang.Object]> {}
        interface _JVM$ChunkRotationMonitor$$static extends ClassLike {
        }
        let JVM$ChunkRotationMonitor: _JVM$ChunkRotationMonitor$$static;
        interface _JVM$ChunkRotationMonitor {
        }
        interface JVM$ChunkRotationMonitor extends CombineTypes<[_JVM$ChunkRotationMonitor, java.lang.Object]> {}
        interface _JVMSupport$$static extends ClassLike {
          _checkAvailability(): boolean;
          ensureWithIOException(): void;
          ensureWithIllegalStateException(): void;
          ensureWithInternalError(): void;
          isNotAvailable(): boolean;
          tryToInitializeJVM(): void;
          _UNSUPPORTED_VM_MESSAGE: string;
          _notAvailable: boolean;
          new(): JVMSupport;
        }
        let JVMSupport: _JVMSupport$$static;
        interface _JVMSupport {
        }
        interface JVMSupport extends CombineTypes<[_JVMSupport, java.lang.Object]> {}
        interface _JVMUpcalls$$static extends ClassLike {
          _bytesForEagerInstrumentation(traceId: long, a1: boolean, forceInstrumentation: boolean, bootClassLoader: java.lang.Class<any>, superClass: byte[]): byte[];
          _createRecorderThread(systemThreadGroup: java.lang.ThreadGroup, contextClassLoader: java.lang.ClassLoader): java.lang.Thread;
          _onRetransform(traceId: long, a1: boolean, dummy1: boolean, dummy2: java.lang.Class<any>, clazz: byte[]): byte[];
          _unhideInternalTypes(): void;
          _new(): JVMUpcalls;
        }
        let JVMUpcalls: _JVMUpcalls$$static;
        interface _JVMUpcalls {
        }
        interface JVMUpcalls extends CombineTypes<[_JVMUpcalls, java.lang.Object]> {}
        interface _LogLevel$$static extends ClassLike {
          valueOf(name: string): LogLevel;
          values(): LogLevel[];
          readonly DEBUG: LogLevel;
          readonly ERROR: LogLevel;
          readonly INFO: LogLevel;
          readonly TRACE: LogLevel;
          readonly WARN: LogLevel;
        }
        let LogLevel: _LogLevel$$static;
        interface _LogLevel {
          _level: int;
        }
        interface LogLevel extends CombineTypes<[_LogLevel]> {}
        interface _LogTag$$static extends ClassLike {
          valueOf(name: string): LogTag;
          values(): LogTag[];
          readonly JFR: LogTag;
          readonly JFR_DCMD: LogTag;
          readonly JFR_EVENT: LogTag;
          readonly JFR_METADATA: LogTag;
          readonly JFR_PERIODIC: LogTag;
          readonly JFR_SETTING: LogTag;
          readonly JFR_START: LogTag;
          readonly JFR_SYSTEM: LogTag;
          readonly JFR_SYSTEM_BYTECODE: LogTag;
          readonly JFR_SYSTEM_EVENT: LogTag;
          readonly JFR_SYSTEM_METADATA: LogTag;
          readonly JFR_SYSTEM_PARSER: LogTag;
          readonly JFR_SYSTEM_PERIODIC: LogTag;
          readonly JFR_SYSTEM_SETTING: LogTag;
          readonly JFR_SYSTEM_STREAMING: LogTag;
          readonly JFR_SYSTEM_THROTTLE: LogTag;
        }
        let LogTag: _LogTag$$static;
        interface _LogTag {
          level(): LogLevel;
          _id: int;
          _tagSetLevel: int;
        }
        interface LogTag extends CombineTypes<[_LogTag]> {}
        interface _Logger$$static extends ClassLike {
          log(logTag: LogTag, logLevel: LogLevel, message: string): void;
          logEvent(logLevel: LogLevel, lines: string[], system: boolean): void;
          _logInternal(logTag: LogTag, logLevel: LogLevel, message: string): void;
          shouldLog(tag: LogTag, level: LogLevel): boolean;
          _MAX_EVENT_SIZE: int;
          _MAX_SIZE: int;
          new(): Logger;
        }
        let Logger: _Logger$$static;
        interface _Logger {
        }
        interface Logger extends CombineTypes<[_Logger, java.lang.Object]> {}
        interface _LongMap$$static<T> extends ClassLike {
          _tableSizeFor(cap: int): int;
          _DEFAULT_SIZE: int;
          _EMPTY_KEYS: long[];
          _EMPTY_OBJECTS: any[];
          _MAXIMUM_CAPACITY: int;
          _NULL_OBJECT: any;
          new(): LongMap<T>;
          new(markBits: int): LongMap<T>;
        }
        let LongMap: _LongMap$$static<T>;
        interface _LongMap<T> {
          _bitSetIndex(tableIndex: int, bitIndex: int): int;
          claimBits(): void;
          clearId(id: long, a1: int): void;
          clearId(id: long): void;
          expand(size: int): void;
          forEach(consumer: java.util.function.Consumer<T>): void;
          forEachKey(keyTraverser: java.util.function.LongConsumer): void;
          get(id: long): T;
          getAt(tableIndex: int): T;
          hasKey(id: long): boolean;
          _index(id: long): int;
          _initialize(capacity: int): void;
          isSetId(id: long, a1: int): boolean;
          put(id: long, a1: T): void;
          setId(id: long, a1: int): void;
          size(): int;
          _tableIndexOf(id: long): int;
          toString(): string;
          _bitCount: int;
          _bitSet: java.util.BitSet;
          _count: int;
          _keys: long[];
          _objects: T[];
          _shift: int;
        }
        interface LongMap<T> extends CombineTypes<[_LongMap<T>, java.lang.Object]> {}
        interface _MetadataDescriptor$$static extends ClassLike {
          _prettyPrintXML(sb: java.lang.Appendable, indent: string, e: MetadataDescriptor$Element): void;
          read(input: internal.consumer.RecordingInput): MetadataDescriptor;
          _write(types: java.util.List<Type>, output: java.io.DataOutput): void;
          _ATTRIBUTE_CONSTANT_POOL: string;
          _ATTRIBUTE_DEFAULT_VALUE: string;
          _ATTRIBUTE_DIMENSION: string;
          _ATTRIBUTE_DST: string;
          _ATTRIBUTE_GMT_OFFSET: string;
          _ATTRIBUTE_ID: string;
          _ATTRIBUTE_LOCALE: string;
          _ATTRIBUTE_NAME: string;
          _ATTRIBUTE_SIMPLE_TYPE: string;
          _ATTRIBUTE_SUPER_TYPE: string;
          _ATTRIBUTE_TYPE_ID: string;
          _ELEMENT_ANNOTATION: string;
          _ELEMENT_FIELD: string;
          _ELEMENT_SETTING: string;
          _ELEMENT_TYPE: string;
          _new(): MetadataDescriptor;
        }
        let MetadataDescriptor: _MetadataDescriptor$$static;
        interface _MetadataDescriptor {
          getDST(): int;
          getEventTypes(): java.util.List<EventType>;
          getGMTOffset(): int;
          getLocale(): string;
          getTypes(): java.util.Collection<Type>;
          toString(): string;
          _dst: long;
          _eventTypes: java.util.List<EventType>;
          _gmtOffset: long;
          _locale: string;
          metadataId: long;
          _root: MetadataDescriptor$Element;
          _types: java.util.Collection<Type>;
        }
        interface MetadataDescriptor extends CombineTypes<[_MetadataDescriptor, java.lang.Object]> {}
        interface _MetadataDescriptor$Attribute$$static extends ClassLike {
          _new(name: string, value: string): MetadataDescriptor$Attribute;
        }
        let MetadataDescriptor$Attribute: _MetadataDescriptor$Attribute$$static;
        interface _MetadataDescriptor$Attribute {
          equals(o: any): boolean;
          hashCode(): int;
          name(): string;
          toString(): string;
          value(): string;
        }
        interface MetadataDescriptor$Attribute extends CombineTypes<[_MetadataDescriptor$Attribute, java.lang.Record]> {}
        interface _MetadataDescriptor$Element$$static extends ClassLike {
          _new(name: string): MetadataDescriptor$Element;
        }
        let MetadataDescriptor$Element: _MetadataDescriptor$Element$$static;
        interface _MetadataDescriptor$Element {
          _add(element: MetadataDescriptor$Element): void;
          addArrayAttribute(element: MetadataDescriptor$Element, name: string, value: any): void;
          _addAttribute(name: string, value: any): void;
          _attribute(name: string): string;
          _attribute(name: string, defaultValue: long): long;
          _attribute(name: string, defaultValue: string): string;
          _elements(names: string[]): java.util.List<MetadataDescriptor$Element>;
          _elements(...names: string[]): java.util.List<MetadataDescriptor$Element>;
          _longValue(name: string): long;
          _newChild(name: string): MetadataDescriptor$Element;
          toString(): string;
          _attributes: java.util.List<MetadataDescriptor$Attribute>;
          _elements: java.util.List<MetadataDescriptor$Element>;
          _name: string;
        }
        interface MetadataDescriptor$Element extends CombineTypes<[_MetadataDescriptor$Element, java.lang.Object]> {}
        interface _MetadataLoader$$static extends ClassLike {
          createTypes(): java.util.List<Type>;
          _new(dis: java.io.DataInputStream): MetadataLoader;
        }
        let MetadataLoader: _MetadataLoader$$static;
        interface _MetadataLoader {
          _addFields(lookup: java.util.Map<string,Type>, relationMap: java.util.Map<string,AnnotationElement>): void;
          _buildCategorySegments(category: string): string[];
          _buildRelationMap(typeMap: java.util.Map<string,Type>): java.util.Map<string,AnnotationElement>;
          _buildTypeMap(): java.util.Map<string,Type>;
          _buildTypes(): java.util.List<Type>;
          _createAnnotationClass(type: string): java.lang.Class<java.lang.annotation.Annotation>;
          _createAnnotationElements(annotation: string): java.util.List<AnnotationElement>;
          _newAnnotation(type: Type, value: any): AnnotationElement;
          _CATEGORY_TYPE: Type;
          _DESCRIPTION_TYPE: Type;
          _DISABLED: AnnotationElement;
          _ENABLED: AnnotationElement;
          _EXPERIMENTAL: AnnotationElement;
          _LABEL_TYPE: Type;
          _PERIOD_TYPE: Type;
          _RELATIONAL: AnnotationElement;
          _SMALL_TEMP_LIST: java.util.List<any>;
          _STACK_TRACE: AnnotationElement;
          _THRESHOLD: AnnotationElement;
          _TRANSITION_FROM: AnnotationElement;
          _TRANSITION_TO: AnnotationElement;
          _UNSIGNED: AnnotationElement;
          _anotationElements: java.util.Map<string,java.util.List<AnnotationElement>>;
          _categories: java.util.Map<string,AnnotationElement>;
          _types: java.util.List<MetadataLoader$TypeElement>;
        }
        interface MetadataLoader extends CombineTypes<[_MetadataLoader, java.lang.Object]> {}
        interface _MetadataLoader$FieldElement$$static extends ClassLike {
          new(dis: java.io.DataInputStream): MetadataLoader$FieldElement;
        }
        let MetadataLoader$FieldElement: _MetadataLoader$FieldElement$$static;
        interface _MetadataLoader$FieldElement {
          _annotations: string;
          _array: boolean;
          _constantPool: boolean;
          _description: string;
          _experimental: boolean;
          _label: string;
          _name: string;
          _relation: string;
          _transition: string;
          _typeName: string;
          _unsigned: boolean;
        }
        interface MetadataLoader$FieldElement extends CombineTypes<[_MetadataLoader$FieldElement, java.lang.Object]> {}
        interface _MetadataLoader$TypeElement$$static extends ClassLike {
          new(dis: java.io.DataInputStream): MetadataLoader$TypeElement;
        }
        let MetadataLoader$TypeElement: _MetadataLoader$TypeElement$$static;
        interface _MetadataLoader$TypeElement {
          _category: string;
          _cutoff: boolean;
          _description: string;
          _experimental: boolean;
          _fields: java.util.List<MetadataLoader$FieldElement>;
          _id: long;
          _internal: boolean;
          _isEvent: boolean;
          _isRelation: boolean;
          _label: string;
          _name: string;
          _period: string;
          _stackTrace: boolean;
          _startTime: boolean;
          _thread: boolean;
          _throttle: boolean;
        }
        interface MetadataLoader$TypeElement extends CombineTypes<[_MetadataLoader$TypeElement, java.lang.Object]> {}
        interface _MetadataReader$$static extends ClassLike {
          new(input: internal.consumer.RecordingInput): MetadataReader;
        }
        let MetadataReader: _MetadataReader$$static;
        interface _MetadataReader {
          _annotateTypes(metadata: MetadataDescriptor$Element): void;
          _buildEvenTypes(): void;
          _createElement(): MetadataDescriptor$Element;
          _declareTypes(metadata: MetadataDescriptor$Element): void;
          _defineTypes(metadata: MetadataDescriptor$Element): void;
          getDescriptor(): MetadataDescriptor;
          _getType(attribute: string, element: MetadataDescriptor$Element): Type;
          _makeAnnotation(annotationElement: MetadataDescriptor$Element): AnnotationElement;
          _objectify(typeName: string, text: string): any;
          _readInt(): int;
          _readString(): string;
          _descriptor: MetadataDescriptor;
          _input: java.io.DataInput;
          _pool: java.util.List<string>;
          _types: java.util.Map<long,Type>;
        }
        interface MetadataReader extends CombineTypes<[_MetadataReader, java.lang.Object]> {}
        interface _MetadataRepository$$static extends ClassLike {
          _getEventConfigurations(): java.util.List<internal.event.EventConfiguration>;
          getInstance(): MetadataRepository;
          _unhideInternalTypes(): void;
          _instance: MetadataRepository;
          _jvm: JVM;
          new(): MetadataRepository;
        }
        let MetadataRepository: _MetadataRepository$$static;
        interface _MetadataRepository {
          _disableEvents(): void;
          _findMirrorType(eventClass: java.lang.Class<jdk.internal.event.Event>): PlatformEventType;
          flush(): void;
          _getBinaryRepresentation(): byte[];
          _getConfiguration(eventClass: java.lang.Class<jdk.internal.event.Event>, ensureInitialized: boolean): internal.event.EventConfiguration;
          getEventControls(): java.util.List<EventControl>;
          getEventType(eventClass: java.lang.Class<jdk.internal.event.Event>): EventType;
          getRegisteredEventTypes(): java.util.List<EventType>;
          getVisibleTypes(): java.util.List<Type>;
          _initializeJVMEventTypes(): void;
          _isEnabled(eventName: string): boolean;
          _makeConfiguration(eventClass: java.lang.Class<jdk.internal.event.Event>, pEventType: PlatformEventType, dynamicAnnotations: java.util.List<AnnotationElement>, dynamicFields: java.util.List<ValueDescriptor>): internal.event.EventConfiguration;
          _newEventConfiguration(eventType: EventType, ec: EventControl): internal.event.EventConfiguration;
          register(eventClass: java.lang.Class<jdk.internal.event.Event>): EventType;
          register(eventClass: java.lang.Class<jdk.internal.event.Event>, dynamicAnnotations: java.util.List<AnnotationElement>, dynamicFields: java.util.List<ValueDescriptor>): EventType;
          registerMirror(eventClass: java.lang.Class<Event>): void;
          _setOutput(filename: string): java.time.Instant;
          setSettings(list: java.util.List<java.util.Map<string,string>>, writeSettingEvents: boolean): void;
          _setStaleMetadata(): void;
          _setUnregistered(): void;
          _storeDescriptorInJVM(): void;
          unregister(eventClass: java.lang.Class<Event>): void;
          _unregisterUnloaded(): void;
          _cachedEventConfigurationConstructor: java.lang.reflect.Constructor<event.EventConfiguration>;
          _lastUnloaded: long;
          _mirrors: java.util.Map<string,java.lang.Class<Event>>;
          _nativeControls: java.util.List<EventControl>;
          _nativeEventTypes: java.util.List<EventType>;
          _settingsManager: SettingsManager;
          _staleMetadata: boolean;
          _unregistered: boolean;
        }
        interface MetadataRepository extends CombineTypes<[_MetadataRepository, java.lang.Object]> {}
        interface _MetadataWriter$$static extends ClassLike {
          new(descriptor: MetadataDescriptor): MetadataWriter;
        }
        let MetadataWriter: _MetadataWriter$$static;
        interface _MetadataWriter {
          _buildStringPool(element: MetadataDescriptor$Element, pool: java.util.Set<string>): void;
          _makeAnnotation(entity: MetadataDescriptor$Element, annotation: AnnotationElement): void;
          _makeFieldElement(typeElement: MetadataDescriptor$Element, v: ValueDescriptor): void;
          _makeSettingElement(typeElement: MetadataDescriptor$Element, s: SettingDescriptor): void;
          _makeTypeElement(root: MetadataDescriptor$Element, type: Type): void;
          _write(output: java.io.DataOutput, element: MetadataDescriptor$Element, lookup: java.util.HashMap<string,int>): void;
          writeBinary(output: java.io.DataOutput): void;
          _writeInt(out: java.io.DataOutput, v: int): void;
          _writeString(out: java.io.DataOutput, s: string): void;
          _metadata: MetadataDescriptor$Element;
          _root: MetadataDescriptor$Element;
        }
        interface MetadataWriter extends CombineTypes<[_MetadataWriter, java.lang.Object]> {}
        interface _MirrorEvent$$static extends ClassLike {
        }
        let MirrorEvent: _MirrorEvent$$static;
        interface _MirrorEvent {
          className(): string;
          module(): string;
        }
        interface MirrorEvent extends CombineTypes<[_MirrorEvent, java.lang.annotation.Annotation, java.lang.Object]> {}
        interface _OldObjectSample$$static extends ClassLike {
          createSettingsForSnapshot(recording: PlatformRecording, pathToGcRoots: boolean): java.util.Map<string,string>;
          emit(recording: PlatformRecording): void;
          emit(recordings: java.util.List<PlatformRecording>, pathToGcRoots: boolean): void;
          emit(ticks: long): void;
          _isEnabled(r: PlatformRecording): boolean;
          updateSettingPathToGcRoots(s: java.util.Map<string,string>, pathToGcRoots: boolean): void;
          _EVENT_NAME: string;
          _OLD_OBJECT_CUTOFF: string;
          _OLD_OBJECT_ENABLED: string;
          new(): OldObjectSample;
        }
        let OldObjectSample: _OldObjectSample$$static;
        interface _OldObjectSample {
        }
        interface OldObjectSample extends CombineTypes<[_OldObjectSample, java.lang.Object]> {}
        interface _Options$$static extends ClassLike {
          _ensureInitialized(): void;
          getDumpPath(): SecuritySupport$SafePath;
          getGlobalBufferCount(): long;
          getGlobalBufferSize(): long;
          getMaxChunkSize(): long;
          getMemorySize(): long;
          getPreserveRepository(): boolean;
          getStackDepth(): int;
          getThreadBufferSize(): long;
          _getWaitInterval(): long;
          _reset(): void;
          setDumpPath(path: SecuritySupport$SafePath): void;
          setGlobalBufferCount(globalBufCount: long): void;
          setGlobalBufferSize(globalBufsize: long): void;
          setMaxChunkSize(max: long): void;
          setMemorySize(memSize: long): void;
          setPreserveRepository(preserve: boolean): void;
          setStackDepth(stackTraceDepth: int): void;
          setThreadBufferSize(threadBufSize: long): void;
          _DEFAULT_DUMP_PATH: SecuritySupport$SafePath;
          _DEFAULT_GLOBAL_BUFFER_COUNT: long;
          _DEFAULT_GLOBAL_BUFFER_SIZE: long;
          _DEFAULT_MAX_CHUNK_SIZE: long;
          _DEFAULT_MEMORY_SIZE: long;
          _DEFAULT_PRESERVE_REPOSITORY: boolean;
          _DEFAULT_STACK_DEPTH: int;
          _DEFAULT_THREAD_BUFFER_SIZE: long;
          _MIN_MAX_CHUNKSIZE: long;
          _WAIT_INTERVAL: long;
          _globalBufferCount: long;
          _globalBufferSize: long;
          _jvm: JVM;
          _maxChunkSize: long;
          _memorySize: long;
          _preserveRepository: boolean;
          _stackDepth: int;
          _threadBufferSize: long;
          new(): Options;
        }
        let Options: _Options$$static;
        interface _Options {
        }
        interface Options extends CombineTypes<[_Options, java.lang.Object]> {}
        interface _PlatformEventType$$static extends ClassLike {
          _isExceptionEvent(name: string): boolean;
          _isUsingConfiguration(name: string): boolean;
          _stackTraceOffset(name: string, isJDK: boolean): int;
          _new(name: string, id: long, a2: boolean, isJDK: boolean): PlatformEventType;
        }
        let PlatformEventType: _PlatformEventType$$static;
        interface _PlatformEventType {
          add(settingDescriptor: SettingDescriptor): void;
          getAllSettings(): java.util.List<SettingDescriptor>;
          getPeriod(): long;
          getSettings(): java.util.List<SettingDescriptor>;
          getStackTraceEnabled(): boolean;
          getStackTraceOffset(): int;
          getThresholdTicks(): long;
          hasCutoff(): boolean;
          hasDuration(): boolean;
          hasEventHook(): boolean;
          hasPeriod(): boolean;
          hasStackTrace(): boolean;
          hasThrottle(): boolean;
          isBeginChunk(): boolean;
          isChunkTime(): boolean;
          isCommittable(): boolean;
          isEnabled(): boolean;
          isEndChunk(): boolean;
          isInstrumented(): boolean;
          isJDK(): boolean;
          isJVM(): boolean;
          isLargeSize(): boolean;
          isMarkedForInstrumentation(): boolean;
          isMethodSampling(): boolean;
          isRegistered(): boolean;
          isSystem(): boolean;
          markForInstrumentation(markForInstrumentation: boolean): void;
          setCutoff(cutoffNanos: long): void;
          setEnabled(enabled: boolean): void;
          setEventHook(hasHook: boolean): void;
          setHasCutoff(hasCutoff: boolean): void;
          setHasDuration(hasDuration: boolean): void;
          setHasPeriod(hasPeriod: boolean): void;
          setHasStackTrace(hasStackTrace: boolean): void;
          setHasThrottle(hasThrottle: boolean): void;
          setInstrumented(): void;
          setLargeSize(): void;
          setPeriod(periodMillis: long, a1: boolean, beginChunk: boolean): void;
          setRegistered(registered: boolean): boolean;
          setStackTraceEnabled(stackTraceEnabled: boolean): void;
          setThreshold(thresholdNanos: long): void;
          setThrottle(eventSampleSize: long, a1: long): void;
          _updateCommittable(): void;
          _beginChunk: boolean;
          _committable: boolean;
          _dynamicSettings: boolean;
          _enabled: boolean;
          _endChunk: boolean;
          _hasCutoff: boolean;
          _hasDuration: boolean;
          _hasHook: boolean;
          _hasPeriod: boolean;
          _hasStackTrace: boolean;
          _hasThrottle: boolean;
          _isInstrumented: boolean;
          _isJDK: boolean;
          _isJVM: boolean;
          _isMethodSampling: boolean;
          _largeSize: boolean;
          _markForInstrumentation: boolean;
          _period: long;
          _registered: boolean;
          _settings: java.util.List<SettingDescriptor>;
          _stackTraceEnabled: boolean;
          _stackTraceOffset: int;
          _thresholdTicks: long;
        }
        interface PlatformEventType extends CombineTypes<[_PlatformEventType, jdk.jfr.internal.Type]> {}
        interface _PlatformRecorder$$static extends ClassLike {
          addListener(changeListener: FlightRecorderListener): void;
          _createTimer(): java.util.Timer;
          _getListeners(): java.util.List<FlightRecorderListener>;
          notifyRecorderInitialized(recorder: FlightRecorder): void;
          removeListener(changeListener: FlightRecorderListener): boolean;
          _changeListeners: java.util.List<SecuritySupport$SecureRecorderListener>;
          _jvm: JVM;
          new(): PlatformRecorder;
        }
        let PlatformRecorder: _PlatformRecorder$$static;
        interface _PlatformRecorder {
          _destroy(): void;
          _disableEvents(): void;
          _dumpMemoryToDestination(recording: PlatformRecording): java.time.Instant;
          _fillWithDiskChunks(target: PlatformRecording): void;
          fillWithRecordedData(target: PlatformRecording, pathToGcRoots: boolean): void;
          _finish(recording: PlatformRecording): void;
          _finishChunk(chunk: RepositoryChunk, time: java.time.Instant, ignoreMe: PlatformRecording): void;
          getCurrentChunk(): RepositoryChunk;
          getRecordings(): java.util.List<PlatformRecording>;
          _getRunningRecordings(): java.util.List<PlatformRecording>;
          _getTimer(): java.util.Timer;
          _isToDisk(): boolean;
          makeChunkList(startTime: java.time.Instant, endTime: java.time.Instant): java.util.List<RepositoryChunk>;
          migrate(repo: SecuritySupport$SafePath): void;
          _newCopy(r: PlatformRecording, stop: boolean): Recording;
          newRecording(settings: java.util.Map<string,string>): PlatformRecording;
          _newRecording(settings: java.util.Map<string,string>, id: long): PlatformRecording;
          newTemporaryRecording(): PlatformRecording;
          _periodicTask(): void;
          _rotateDisk(): void;
          _setInShutDown(): void;
          _setRunPeriodicTask(runPeriodicTask: boolean): void;
          _start(recording: PlatformRecording): long;
          _startDiskMonitor(): void;
          _stop(recording: PlatformRecording): void;
          _takeNap(duration: long): void;
          _updateSettings(writeSettingEvents: boolean): void;
          _updateSettingsButIgnoreRecording(ignoreMe: PlatformRecording, writeSettingEvents: boolean): void;
          _writeMetaEvents(): void;
          _currentChunk: RepositoryChunk;
          _inShutdown: boolean;
          _recordingCounter: long;
          _recordings: java.util.ArrayList<PlatformRecording>;
          _repository: Repository;
          _runPeriodicTask: boolean;
          _shutdownHook: java.lang.Thread;
          _timer: java.util.Timer;
        }
        interface PlatformRecorder extends CombineTypes<[_PlatformRecorder, java.lang.Object]> {}
        interface _PlatformRecording$$static extends ClassLike {
          _reduceFromBeginning(maxSize: long, input: java.util.List<RepositoryChunk>): java.util.List<RepositoryChunk>;
          _reduceFromEnd(maxSize: long, input: java.util.List<RepositoryChunk>): java.util.List<RepositoryChunk>;
          _removeAfter(time: java.time.Instant, input: java.util.List<RepositoryChunk>): java.util.List<RepositoryChunk>;
          _removeBefore(time: java.time.Instant, input: java.util.List<RepositoryChunk>): java.util.List<RepositoryChunk>;
          _new(recorder: PlatformRecorder, id: long): PlatformRecording;
        }
        let PlatformRecording: _PlatformRecording$$static;
        interface _PlatformRecording {
          _add(c: RepositoryChunk): void;
          _added(c: RepositoryChunk): void;
          _appendChunk(chunk: RepositoryChunk): void;
          checkSetDestination(userSuppliedPath: WriteableUserPath): void;
          _clearDestination(): void;
          close(): void;
          _createStartTask(): java.util.TimerTask;
          _createStopTask(): java.util.TimerTask;
          dump(writeableUserPath: WriteableUserPath): void;
          dumpStopped(userPath: WriteableUserPath): void;
          _ensureNotClosed(): void;
          _ensureOkForSchedule(): void;
          filter(begin: java.time.Instant, end: java.time.Instant, maxSize: long): void;
          getChunks(): java.util.List<RepositoryChunk>;
          getDestination(): WriteableUserPath;
          getDumpOnExit(): boolean;
          getDumpOnExitDirectory(): SecuritySupport$SafePath;
          getDuration(): java.time.Duration;
          getFinalChunkStartNanos(): long;
          getFlushInterval(): java.time.Duration;
          getId(): long;
          getMaxAge(): java.time.Duration;
          getMaxSize(): long;
          getName(): string;
          getNoDestinationDumpOnExitAccessControlContext(): java.security.AccessControlContext;
          getRecording(): Recording;
          getSettings(): java.util.Map<string,string>;
          getSize(): long;
          getStartNanos(): long;
          getStartTime(): java.time.Instant;
          getState(): RecordingState;
          getStopTime(): java.time.Instant;
          getStreamIntervalMillis(): long;
          isToDisk(): boolean;
          newCopy(stop: boolean): Recording;
          newSnapshotClone(reason: string, pathToGcRoots: boolean): PlatformRecording;
          _notifyIfStateChanged(newState: RecordingState, oldState: RecordingState): void;
          open(start: java.time.Instant, end: java.time.Instant): java.io.InputStream;
          removeBefore(timestamp: java.time.Instant): void;
          _removeNonExistantPaths(): void;
          removePath(path: SecuritySupport$SafePath): void;
          _removed(c: RepositoryChunk): void;
          scheduleStart(delay: java.time.Duration): void;
          _scheduleStart(startTime: java.time.Instant): void;
          setConfiguration(c: Configuration): void;
          setDestination(userSuppliedPath: WriteableUserPath): void;
          setDumpOnExit(dumpOnExit: boolean): void;
          setDumpOnExitDirectory(directory: SecuritySupport$SafePath): void;
          setDuration(duration: java.time.Duration): void;
          setFinalStartnanos(chunkStartNanos: long): void;
          setFlushInterval(interval: java.time.Duration): void;
          _setInternalDuration(duration: java.time.Duration): void;
          setMaxAge(maxAge: java.time.Duration): void;
          setMaxSize(maxSize: long): void;
          setName(name: string): void;
          setRecording(recording: Recording): void;
          setSetting(id: string, value: string): void;
          setSettings(settings: java.util.Map<string,string>): void;
          _setSettings(settings: java.util.Map<string,string>, update: boolean): void;
          _setShouldWriteActiveRecordingEvent(shouldWrite: boolean): void;
          _setStartTime(startTime: java.time.Instant): void;
          _setState(state: RecordingState): void;
          _setStopTask(stopTask: java.util.TimerTask): void;
          _setStopTime(timeStamp: java.time.Instant): void;
          setToDisk(toDisk: boolean): void;
          _shouldWriteMetadataEvent(): boolean;
          start(): long;
          stop(reason: string): boolean;
          toString(): string;
          _transferChunks(userPath: WriteableUserPath): void;
          _transferChunksWithRetry(userPath: WriteableUserPath): void;
          _trimToAge(oldest: java.time.Instant): void;
          _trimToSize(): void;
          _updateTimer(): void;
          _chunks: java.util.LinkedList<RepositoryChunk>;
          _destination: WriteableUserPath;
          _dumpOnExit: boolean;
          _dumpOnExitDirectory: SecuritySupport$SafePath;
          _duration: java.time.Duration;
          _finalStartChunkNanos: long;
          _flushInterval: java.time.Duration;
          _id: long;
          _maxAge: java.time.Duration;
          _maxSize: long;
          _name: string;
          _noDestinationDumpOnExitAccessControlContext: java.security.AccessControlContext;
          _recorder: PlatformRecorder;
          _recording: Recording;
          _settings: java.util.Map<string,string>;
          _shouldWriteActiveRecordingEvent: boolean;
          _size: long;
          _startNanos: long;
          _startTask: java.util.TimerTask;
          _startTime: java.time.Instant;
          _state: RecordingState;
          _stopTask: java.util.TimerTask;
          _stopTime: java.time.Instant;
          _toDisk: boolean;
        }
        interface PlatformRecording extends CombineTypes<[_PlatformRecording, java.lang.Object, java.lang.AutoCloseable]> {}
        interface _PrivateAccess$$static extends ClassLike {
          getInstance(): PrivateAccess;
          setPrivateAccess(pa: PrivateAccess): void;
          _instance: PrivateAccess;
          new(): PrivateAccess;
        }
        let PrivateAccess: _PrivateAccess$$static;
        interface _PrivateAccess {
          getContext(a0: SettingControl): java.security.AccessControlContext;
          getFieldName(a0: ValueDescriptor): string;
          getPlatformEventType(a0: EventType): PlatformEventType;
          getPlatformRecorder(): PlatformRecorder;
          getPlatformRecording(a0: Recording): PlatformRecording;
          getType(a0: any): Type;
          isConstantPool(a0: ValueDescriptor): boolean;
          isUnsigned(a0: ValueDescriptor): boolean;
          isVisible(a0: EventType): boolean;
          newAnnotation(a0: Type, a1: java.util.List<any>, a2: boolean): AnnotationElement;
          newConfiguration(a0: string, a1: string, a2: string, a3: string, a4: java.util.Map<string,string>, a5: string): Configuration;
          newEventSettings(a0: internal.management.EventSettingsModifier): EventSettings;
          newEventType(a0: PlatformEventType): EventType;
          newSettingDescriptor(a0: Type, a1: string, a2: string, a3: java.util.List<AnnotationElement>): SettingDescriptor;
          newValueDescriptor(a0: string, a1: Type, a2: java.util.List<AnnotationElement>, a3: int, a4: boolean, a5: string): ValueDescriptor;
          newValueDescriptor(a0: java.lang.Class<any>, a1: string): ValueDescriptor;
          setAnnotations(a0: ValueDescriptor, a1: java.util.List<AnnotationElement>): void;
          setAnnotations(a0: SettingDescriptor, a1: java.util.List<AnnotationElement>): void;
        }
        interface PrivateAccess extends CombineTypes<[_PrivateAccess, java.lang.Object]> {}
        interface _Repository$$static extends ClassLike {
          _createRealBasePath(safePath: SecuritySupport$SafePath): SecuritySupport$SafePath;
          _createRepository(basePath: SecuritySupport$SafePath): SecuritySupport$SafePath;
          getRepository(): Repository;
          _tryToUseAsRepository(path: SecuritySupport$SafePath): boolean;
          _JFR_REPOSITORY_LOCATION_PROPERTY: string;
          _MAX_REPO_CREATION_RETRIES: int;
          _instance: Repository;
          _jvm: JVM;
        }
        let Repository: _Repository$$static;
        interface _Repository {
          _clear(): void;
          ensureRepository(): void;
          getBaseLocation(): SecuritySupport$SafePath;
          getRepositoryPath(): SecuritySupport$SafePath;
          _newChunk(): RepositoryChunk;
          setBasePath(baseLocation: SecuritySupport$SafePath): void;
          _baseLocation: SecuritySupport$SafePath;
          _chunkFilename: management.ChunkFilename;
          _cleanupDirectories: java.util.Set<SecuritySupport$SafePath>;
          _repository: SecuritySupport$SafePath;
        }
        interface Repository extends CombineTypes<[_Repository, java.lang.Object]> {}
        interface _RepositoryChunk$$static extends ClassLike {
          _END_TIME_COMPARATOR: java.util.Comparator<RepositoryChunk>;
          _new(path: SecuritySupport$SafePath): RepositoryChunk;
        }
        let RepositoryChunk: _RepositoryChunk$$static;
        interface _RepositoryChunk {
          _delete(f: SecuritySupport$SafePath): void;
          _destroy(): void;
          _finish(endTime: java.time.Instant): boolean;
          getCurrentFileSize(): long;
          getEndTime(): java.time.Instant;
          getFile(): SecuritySupport$SafePath;
          getSize(): long;
          getStartTime(): java.time.Instant;
          inInterval(startTime: java.time.Instant, endTime: java.time.Instant): boolean;
          isFinished(): boolean;
          _isMissingFile(): boolean;
          _newChannel(): java.nio.channels.ReadableByteChannel;
          release(): void;
          setStartTime(timestamp: java.time.Instant): void;
          toString(): string;
          use(): void;
          _chunkFile: SecuritySupport$SafePath;
          _endTime: java.time.Instant;
          _refCount: int;
          _size: long;
          _startTime: java.time.Instant;
          _unFinishedRAF: java.io.RandomAccessFile;
        }
        interface RepositoryChunk extends CombineTypes<[_RepositoryChunk, java.lang.Object]> {}
        interface _SecuritySupport$$static extends ClassLike {
          _addEventsExport(clazz: java.lang.Class<any>): void;
          _addInstrumentExport(clazz: java.lang.Class<any>): void;
          _addInternalEventExport(clazz: java.lang.Class<any>): void;
          _addReadEdge(clazz: java.lang.Class<any>): void;
          _clearDirectory(safePath: SecuritySupport$SafePath): void;
          _createDirectories(safePath: SecuritySupport$SafePath): SecuritySupport$SafePath;
          _createRandomAccessFile(path: SecuritySupport$SafePath): java.io.RandomAccessFile;
          _createRecorderThread(systemThreadGroup: java.lang.ThreadGroup, contextClassLoader: java.lang.ClassLoader): java.lang.Thread;
          createThreadWitNoPermissions(threadName: string, runnable: java.lang.Runnable): java.lang.Thread;
          _defineClass(lookupClass: java.lang.Class<any>, bytes: byte[]): java.lang.Class<any>;
          _delete(localPath: SecuritySupport$SafePath): void;
          _doPrivileged(_function: java.lang.Runnable, perms: java.security.Permission[]): void;
          _doPrivileged(_function: java.lang.Runnable, ...perms: java.security.Permission[]): void;
          _doPrivileged(_function: java.lang.Runnable): void;
          _doPrivilegedIOWithReturn<U>(_function: java.util.concurrent.Callable<U>): U;
          _doPrivilegedWithReturn<T>(_function: SecuritySupport$CallableWithoutCheckException<T>, perms: java.security.Permission[]): T;
          _doPrivilegedWithReturn<T>(_function: SecuritySupport$CallableWithoutCheckException<T>, ...perms: java.security.Permission[]): T;
          _doPriviligedIO(_function: SecuritySupport$RunnableWithCheckedException): void;
          _ensureClassIsInitialized(clazz: java.lang.Class<any>): void;
          _existDirectory(directory: SecuritySupport$SafePath): boolean;
          exists(safePath: SecuritySupport$SafePath): boolean;
          getAbsolutePath(path: SecuritySupport$SafePath): SecuritySupport$SafePath;
          _getBooleanProperty(propertyName: string): boolean;
          getFileSize(safePath: SecuritySupport$SafePath): long;
          _getPathInProperty(prop: string, subPath: string): SecuritySupport$SafePath;
          getPredefinedJFCFiles(): java.util.List<SecuritySupport$SafePath>;
          getResourceAsStream(name: string): java.io.InputStream;
          isDirectory(safePath: SecuritySupport$SafePath): boolean;
          _isWritable(safePath: SecuritySupport$SafePath): boolean;
          _makeVisibleToJFR(clazz: java.lang.Class<any>): void;
          _newFileChannelToRead(safePath: SecuritySupport$SafePath): java.nio.channels.ReadableByteChannel;
          newFileInputStream(safePath: SecuritySupport$SafePath): java.io.InputStream;
          newFileReader(safePath: SecuritySupport$SafePath): java.io.Reader;
          registerEvent(eventClass: java.lang.Class<jdk.internal.event.Event>): void;
          registerMirror(eventClass: java.lang.Class<Event>): void;
          _registerShutdownHook(shutdownHook: java.lang.Thread): void;
          _setAccessible(method: java.lang.reflect.Method): void;
          _setAccessible(constructor: java.lang.reflect.Constructor<any>): void;
          setDaemonThread(t: java.lang.Thread, daemon: boolean): void;
          setProperty(propertyName: string, value: string): void;
          _setUncaughtExceptionHandler(thread: java.lang.Thread, eh: java.lang.Thread$UncaughtExceptionHandler): void;
          _toRealPath(safePath: SecuritySupport$SafePath, options: java.nio.file.LinkOption[]): SecuritySupport$SafePath;
          _toRealPath(safePath: SecuritySupport$SafePath, ...options: java.nio.file.LinkOption[]): SecuritySupport$SafePath;
          _JAVA_IO_TMPDIR: SecuritySupport$SafePath;
          readonly JFC_DIRECTORY: SecuritySupport$SafePath;
          _JFR_MODULE: java.lang.Module;
          _LOOKUP: java.lang.invoke.MethodHandles$Lookup;
          readonly PRIVILEGED: consumer.FileAccess;
          new(): SecuritySupport;
        }
        let SecuritySupport: _SecuritySupport$$static;
        interface _SecuritySupport {
        }
        interface SecuritySupport extends CombineTypes<[_SecuritySupport, java.lang.Object]> {}
        interface _SecuritySupport$CallableWithoutCheckException$$static<T> extends ClassLike {
        }
        let SecuritySupport$CallableWithoutCheckException: _SecuritySupport$CallableWithoutCheckException$$static<T>;
        interface _SecuritySupport$CallableWithoutCheckException<T> {
          call(): T;
(): T;
        }
        interface SecuritySupport$CallableWithoutCheckException<T> extends CombineTypes<[_SecuritySupport$CallableWithoutCheckException<T>, java.lang.Object]> {}
        interface _SecuritySupport$DirectoryCleaner$$static extends ClassLike {
        }
        let SecuritySupport$DirectoryCleaner: _SecuritySupport$DirectoryCleaner$$static;
        interface _SecuritySupport$DirectoryCleaner {
          postVisitDirectory(dir: java.nio.file.Path, exc: java.io.IOException): java.nio.file.FileVisitResult;
          postVisitDirectory(a0: any, a1: java.io.IOException): java.nio.file.FileVisitResult;
          visitFile(path: java.nio.file.Path, attrs: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
          visitFile(a0: any, a1: java.nio.file.attribute.BasicFileAttributes): java.nio.file.FileVisitResult;
        }
        interface SecuritySupport$DirectoryCleaner extends CombineTypes<[_SecuritySupport$DirectoryCleaner, java.nio.file.SimpleFileVisitor<java.nio.file.Path>]> {}
        interface _SecuritySupport$Privileged$$static extends ClassLike {
        }
        let SecuritySupport$Privileged: _SecuritySupport$Privileged$$static;
        interface _SecuritySupport$Privileged {
          exists(p: java.nio.file.Path): boolean;
          fileSize(p: java.nio.file.Path): long;
          getAbsolutePath(f: java.io.File): string;
          getLastModified(p: java.nio.file.Path): java.nio.file.attribute.FileTime;
          isDirectory(p: java.nio.file.Path): boolean;
          length(f: java.io.File): long;
          newDirectoryStream(directory: java.nio.file.Path): java.nio.file.DirectoryStream<java.nio.file.Path>;
          openRAF(f: java.io.File, mode: string): java.io.RandomAccessFile;
        }
        interface SecuritySupport$Privileged extends CombineTypes<[_SecuritySupport$Privileged, jdk.jfr.internal.consumer.FileAccess]> {}
        interface _SecuritySupport$RunnableWithCheckedException$$static extends ClassLike {
        }
        let SecuritySupport$RunnableWithCheckedException: _SecuritySupport$RunnableWithCheckedException$$static;
        interface _SecuritySupport$RunnableWithCheckedException {
          run(): void;
(): void;
        }
        interface SecuritySupport$RunnableWithCheckedException extends CombineTypes<[_SecuritySupport$RunnableWithCheckedException, java.lang.Object]> {}
        interface _SecuritySupport$SafePath$$static extends ClassLike {
          new(p: java.nio.file.Path): SecuritySupport$SafePath;
          new(path: string): SecuritySupport$SafePath;
        }
        let SecuritySupport$SafePath: _SecuritySupport$SafePath$$static;
        interface _SecuritySupport$SafePath {
          compareTo(that: SecuritySupport$SafePath): int;
          compareTo(a0: any): int;
          equals(other: any): boolean;
          hashCode(): int;
          toFile(): java.io.File;
          toPath(): java.nio.file.Path;
          toString(): string;
          _path: java.nio.file.Path;
          _text: string;
        }
        interface SecuritySupport$SafePath extends CombineTypes<[_SecuritySupport$SafePath, java.lang.Comparable<SecuritySupport$SafePath>, java.lang.Object]> {}
        interface _SecuritySupport$SecureRecorderListener$$static extends ClassLike {
          _new(context: java.security.AccessControlContext, changeListener: FlightRecorderListener): SecuritySupport$SecureRecorderListener;
        }
        let SecuritySupport$SecureRecorderListener: _SecuritySupport$SecureRecorderListener$$static;
        interface _SecuritySupport$SecureRecorderListener {
          getChangeListener(): FlightRecorderListener;
          recorderInitialized(recorder: FlightRecorder): void;
          recordingStateChanged(recording: Recording): void;
          _changeListener: FlightRecorderListener;
          _context: java.security.AccessControlContext;
        }
        interface SecuritySupport$SecureRecorderListener extends CombineTypes<[_SecuritySupport$SecureRecorderListener, jdk.jfr.FlightRecorderListener, java.lang.Object]> {}
        interface _SettingsManager$$static extends ClassLike {
          _new(): SettingsManager;
        }
        let SettingsManager: _SettingsManager$$static;
        interface _SettingsManager {
          _createSettingsMap(activeSettings: java.util.List<java.util.Map<string,string>>): java.util.Map<string,SettingsManager$InternalSetting>;
          _getInternalSetting(ec: EventControl): SettingsManager$InternalSetting;
          _isEnabled(eventName: string): boolean;
          _makeInternalSettings(rec: java.util.Map<string,string>): java.util.Collection<SettingsManager$InternalSetting>;
          _setEventControl(ec: EventControl, writeSettingEvents: boolean, timestamp: long): void;
          _setSettings(activeSettings: java.util.List<java.util.Map<string,string>>, writeSettingEvents: boolean): void;
          toString(): string;
          updateRetransform(eventClasses: java.util.List<java.lang.Class<jdk.internal.event.Event>>): void;
          _availableSettings: java.util.Map<string,SettingsManager$InternalSetting>;
        }
        interface SettingsManager extends CombineTypes<[_SettingsManager, java.lang.Object]> {}
        interface _SettingsManager$InternalSetting$$static extends ClassLike {
          new(settingsId: string): SettingsManager$InternalSetting;
        }
        let SettingsManager$InternalSetting: _SettingsManager$InternalSetting$$static;
        interface _SettingsManager$InternalSetting {
          add(attribute: string, value: string): void;
          add(enabled: SettingsManager$InternalSetting): void;
          _addToMap(map: java.util.Map<string,java.util.Set<string>>, attribute: string, value: string): void;
          finish(): void;
          getSettingsId(): string;
          getValues(key: string): java.util.Set<string>;
          isEnabled(): boolean;
          toString(): string;
          _allMap: java.util.Map<string,java.util.Set<string>>;
          _enabled: boolean;
          _enabledMap: java.util.Map<string,java.util.Set<string>>;
          _identifier: string;
        }
        interface SettingsManager$InternalSetting extends CombineTypes<[_SettingsManager$InternalSetting, java.lang.Object]> {}
        interface _ShutdownHook$$static extends ClassLike {
          _new(recorder: PlatformRecorder): ShutdownHook;
        }
        let ShutdownHook: _ShutdownHook$$static;
        interface _ShutdownHook {
          _dump(recording: PlatformRecording): void;
          _makeDumpOnExitPath(recording: PlatformRecording): WriteableUserPath;
          run(): void;
          _recorder: PlatformRecorder;
          _tlabDummyObject: any;
        }
        interface ShutdownHook extends CombineTypes<[_ShutdownHook, java.lang.Object, java.lang.Runnable]> {}
        interface _ShutdownHook$ExceptionHandler$$static extends ClassLike {
          _new(): ShutdownHook$ExceptionHandler;
        }
        let ShutdownHook$ExceptionHandler: _ShutdownHook$ExceptionHandler$$static;
        interface _ShutdownHook$ExceptionHandler {
          uncaughtException(t: java.lang.Thread, e: java.lang.Throwable): void;
        }
        interface ShutdownHook$ExceptionHandler extends CombineTypes<[_ShutdownHook$ExceptionHandler, java.lang.Thread$UncaughtExceptionHandler, java.lang.Object]> {}
        interface _StringPool$$static extends ClassLike {
          addString(s: string): long;
          _ensureCurrentGeneration(s: string, lsid: long): long;
          _externalSid(internalSid: long): long;
          _isCurrentGeneration(internalSid: long): boolean;
          _nextInternalSid(): long;
          _preCache(s: string): boolean;
          _reset(): void;
          _storeString(s: string): long;
          _updateInternalSid(internalSid: long): long;
          _DO_NOT_POOL: long;
          readonly MAX_LIMIT: int;
          _MAX_SIZE: int;
          _MAX_SIZE_UTF16: long;
          readonly MIN_LIMIT: int;
          _PRECACHE_THRESHOLD: int;
          _SID_MASK: long;
          _cache: java.util.concurrent.ConcurrentHashMap<string,long>;
          _currentSizeUTF16: long;
          _generation: short;
          _preCache: string[];
          _preCacheMask: int;
          _preCacheOld: int;
          _sidIdx: java.util.concurrent.atomic.AtomicLong;
          new(): StringPool;
        }
        let StringPool: _StringPool$$static;
        interface _StringPool {
        }
        interface StringPool extends CombineTypes<[_StringPool, java.lang.Object]> {}
        interface _Throttle$$static extends ClassLike {
          readonly DEFAULT: string;
          readonly NAME: string;
        }
        let Throttle: _Throttle$$static;
        interface _Throttle {
          value(): string;
(): string;
        }
        interface Throttle extends CombineTypes<[_Throttle, java.lang.annotation.Annotation, java.lang.Object]> {}
        interface _Type$$static extends ClassLike {
          _createKnownType(clazz: java.lang.Class<any>): Type;
          _createKnownType(name: string, clazz: java.lang.Class<any>): Type;
          getKnownType(typeName: string): Type;
          getKnownType(clazz: java.lang.Class<any>): Type;
          _getKnownTypes(): java.util.Collection<Type>;
          getTypeId(clazz: java.lang.Class<any>): long;
          _isDefinedByJVM(id: long): boolean;
          _isKnownType(type: java.lang.Class<any>): boolean;
          isValidJavaFieldType(name: string): boolean;
          _BOOLEAN: Type;
          _BYTE: Type;
          _CHAR: Type;
          _CLASS: Type;
          _DOUBLE: Type;
          readonly EVENT_NAME_PREFIX: string;
          _FLOAT: Type;
          _INT: Type;
          _LONG: Type;
          readonly SETTINGS_PREFIX: string;
          _SHORT: Type;
          _STACK_TRACE: Type;
          _STRING: Type;
          readonly SUPER_TYPE_ANNOTATION: string;
          readonly SUPER_TYPE_EVENT: string;
          readonly SUPER_TYPE_SETTING: string;
          _THREAD: Type;
          readonly TYPES_PREFIX: string;
          _knownTypes: java.util.Map<Type,java.lang.Class<any>>;
          new(javaTypeName: string, superType: string, typeId: long): Type;
          _new(javaTypeName: string, superType: string, typeId: long, a3: boolean): Type;
        }
        let Type: _Type$$static;
        interface _Type {
          add(valueDescriptor: ValueDescriptor): void;
          _calculateSimpleType(): boolean;
          compareTo(that: Type): int;
          compareTo(a0: any): int;
          equals(object: any): boolean;
          getAnnotation<T>(clazz: java.lang.Class<java.lang.annotation.Annotation>): T;
          getAnnotationElements(): java.util.List<AnnotationElement>;
          getDescription(): string;
          getField(name: string): ValueDescriptor;
          getFields(): java.util.List<ValueDescriptor>;
          getId(): long;
          getLabel(): string;
          getLogName(): string;
          getName(): string;
          getRemove(): boolean;
          getSuperType(): string;
          hashCode(): int;
          indexOf(name: string): int;
          isDefinedByJVM(): boolean;
          isInternal(): boolean;
          isSimpleType(): boolean;
          isVisible(): boolean;
          _log(action: string, logTag: LogTag, level: LogLevel): void;
          _setAnnotations(annotations: java.util.List<AnnotationElement>): void;
          setId(id: long): void;
          setInternal(internal: boolean): void;
          setRemove(remove: boolean): void;
          setVisible(visible: boolean): void;
          toString(): string;
          _trimFields(): void;
          _typeText(): string;
          _annos: AnnotationConstruct;
          _fields: java.util.List<ValueDescriptor>;
          _id: long;
          _internal: boolean;
          _name: string;
          _remove: boolean;
          _simpleType: boolean;
          _superType: string;
          _visible: boolean;
        }
        interface Type extends CombineTypes<[_Type, java.lang.Object, java.lang.Comparable<Type>]> {}
        interface _TypeLibrary$$static extends ClassLike {
          _addAnnotations(clazz: java.lang.Class<any>, type: Type, dynamicAnnotations: java.util.List<AnnotationElement>): void;
          _addFields(type: Type, requestable: boolean, hasDuration: boolean, hasThread: boolean, hasStackTrace: boolean, hasCutoff: boolean): void;
          addImplicitFields(type: Type, requestable: boolean, hasDuration: boolean, hasThread: boolean, hasStackTrace: boolean, hasCutoff: boolean): void;
          addType(type: Type): void;
          addTypes(ts: java.util.List<Type>): void;
          _addUserFields(clazz: java.lang.Class<any>, type: Type, dynamicFields: java.util.List<ValueDescriptor>): void;
          clearUnregistered(): boolean;
          createAnnotation(annotation: java.lang.annotation.Annotation): AnnotationElement;
          createAnnotationType(a: java.lang.Class<java.lang.annotation.Annotation>): Type;
          _createDurationField(): ValueDescriptor;
          _createField(field: java.lang.reflect.Field): ValueDescriptor;
          _createStackTraceField(): ValueDescriptor;
          _createStandardAnnotations(name: string, description: string): java.util.List<AnnotationElement>;
          _createStartTimeField(): ValueDescriptor;
          _createThreadField(): ValueDescriptor;
          createType(clazz: java.lang.Class<any>): Type;
          createType(clazz: java.lang.Class<any>, dynamicAnnotations: java.util.List<AnnotationElement>, dynamicFields: java.util.List<ValueDescriptor>): Type;
          _defineType(clazz: java.lang.Class<any>, superType: string, eventType: boolean): Type;
          _getType(clazz: java.lang.Class<any>): Type;
          getTypes(): java.util.Collection<Type>;
          getVisibleTypes(): java.util.List<Type>;
          initialize(): void;
          _invokeAnnotation(annotation: java.lang.annotation.Annotation, methodName: string): any;
          _isDefined(clazz: java.lang.Class<any>): boolean;
          removeType(id: long): void;
          _resolveRepeatedAnnotations(annotations: java.lang.annotation.Annotation[]): java.util.List<java.lang.annotation.Annotation>;
          _shouldPersist(a: java.lang.Class<java.lang.annotation.Annotation>): boolean;
          _visitAnnotations(typeQ: java.util.Queue<Type>, aes: java.util.List<AnnotationElement>): void;
          _visitReachable(rootSet: java.util.Collection<Type>, p: java.util.function.Predicate<Type>, c: java.util.function.Consumer<Type>): void;
          _DURATION_FIELD: ValueDescriptor;
          _STACK_TRACE_FIELD: ValueDescriptor;
          _START_TIME_FIELD: ValueDescriptor;
          _THREAD_FIELD: ValueDescriptor;
          _implicitFieldTypes: boolean;
          _initialized: boolean;
          _types: java.util.Map<long,Type>;
        }
        let TypeLibrary: _TypeLibrary$$static;
        interface _TypeLibrary {
        }
        interface TypeLibrary extends CombineTypes<[_TypeLibrary, java.lang.Object]> {}
        interface _Utils$$static extends ClassLike {
          _appendPadded(text: Utils$stringBuilder, number: int, separator: boolean): void;
          _awaitUniqueTimestamp(): void;
          checkAccessFlightRecorder(): void;
          checkRegisterPermission(): void;
          _countLength(value: long): int;
          ensureInitialized(eventClass: java.lang.Class<jdk.internal.event.Event>): void;
          ensureJavaIdentifier(name: string): void;
          ensureValidEventSubclass(eventClass: java.lang.Class<any>): void;
          epochNanosToInstant(epochNanos: long): java.time.Instant;
          formatBits(bits: long): string;
          formatBitsPerSecond(bits: long): string;
          formatBytes(bytes: long): string;
          formatBytesCompact(bytes: long): string;
          formatBytesPerSecond(bytes: long): string;
          _formatDataAmount(formatter: string, amount: long): string;
          formatDateTime(time: java.time.LocalDateTime): string;
          formatDuration(d: java.time.Duration): string;
          _formatPositiveDuration(d: java.time.Duration): string;
          formatTimespan(dValue: java.time.Duration, separation: string): string;
          _getAnnotation(a: java.lang.annotation.Annotation): java.util.List<java.lang.annotation.Annotation>;
          _getAnnotationValues(a: java.lang.annotation.Annotation, valueMethod: java.lang.reflect.Method): java.util.List<java.lang.annotation.Annotation>;
          _getAnnotations(clazz: java.lang.Class<any>): java.util.List<java.lang.annotation.Annotation>;
          getChunkStartNanos(): long;
          getConfiguration(eventClass: java.lang.Class<jdk.internal.event.Event>): internal.event.EventConfiguration;
          getValidType(type: java.lang.Class<any>, name: string): Type;
          _getValueMethod(annotated: java.lang.Class<any>): java.lang.reflect.Method;
          _getVisibleEventFields(clazz: java.lang.Class<any>): java.util.List<java.lang.reflect.Field>;
          _isAfter(stateToTest: RecordingState, b: RecordingState): boolean;
          _isBefore(stateToTest: RecordingState, b: RecordingState): boolean;
          isSettingVisible(c: Control, hasEventHook: boolean): boolean;
          isSettingVisible(typeId: long, a1: boolean): boolean;
          _isState(stateToTest: RecordingState, states: RecordingState[]): boolean;
          _isState(stateToTest: RecordingState, ...states: RecordingState[]): boolean;
          _isSupportedType(type: java.lang.Class<any>): boolean;
          makeFilename(recording: Recording): string;
          makePrimitiveArray(typeName: string, values: java.util.List<any>): any;
          makeSimpleName(type: EventType): string;
          makeSimpleName(qualified: string): string;
          _nanosToTicks(nanos: long): long;
          notifyFlush(): void;
          _parseThrottleString(s: string, value: boolean): string;
          parseThrottleTimeUnit(s: string): long;
          parseThrottleValue(s: string): long;
          parseTimespan(s: string): long;
          parseTimespanWithInfinity(s: string): long;
          _roundDuration(d: java.time.Duration): java.time.Duration;
          _roundPositiveDuration(d: java.time.Duration): java.time.Duration;
          sanitizeNullFreeList<T>(elements: java.util.List<T>, clazz: java.lang.Class<T>): java.util.List<T>;
          sanitizeNullFreeStringMap(settings: java.util.Map<string,string>): java.util.Map<string,string>;
          _setConfiguration(eventClass: java.lang.Class<jdk.internal.event.Event>, configuration: internal.event.EventConfiguration): void;
          shouldInstrument(isJDK: boolean, name: string): boolean;
          takeNap(millis: long): void;
          _throwThrottleNumberFormatException(s: string): void;
          timeToNanos(timestamp: java.time.Instant): long;
          touch(dumpFile: java.nio.file.Path): void;
          unboxType(t: java.lang.Class<any>): java.lang.Class<any>;
          upgradeLegacyJDKEvent(eventName: string): string;
          validJavaIdentifier(identifier: string, defaultIdentifier: string): string;
          validTypeName(typeName: string, defaultTypeName: string): string;
          verifyMirror(mirror: java.lang.Class<any>, real: java.lang.Class<any>): void;
          waitFlush(timeOut: long): void;
          readonly ACCESS_FLIGHT_RECORDER: string;
          _BASE: int;
          _DAY: java.time.Duration;
          _DISPLAY_NANO_DIGIT: int;
          readonly EVENTS_PACKAGE_NAME: string;
          readonly EVENT_PACKAGE_NAME: string;
          _HOUR: java.time.Duration;
          _INFINITY: string;
          readonly INSTRUMENT_PACKAGE_NAME: string;
          _LEGACY_EVENT_NAME_PREFIX: string;
          _MICRO_SECOND: java.time.Duration;
          _MILL_SIGNIFICANT_FIGURES: int;
          _MINUTE: java.time.Duration;
          _NANO_SIGNIFICANT_FIGURES: int;
          _OFF: string;
          readonly REGISTER_EVENT: string;
          _SECOND: java.time.Duration;
          _THROTTLE_OFF: long;
          _flushObject: any;
          _lastTimestamp: java.time.Instant;
          new(): Utils;
        }
        let Utils: _Utils$$static;
        interface _Utils {
        }
        interface Utils extends CombineTypes<[_Utils, java.lang.Object]> {}
        interface _Utils$ThrottleUnit$$static extends ClassLike {
          _asMillis(s: string): long;
          _normalizeValueAsMillis(value: long, a1: string): long;
          _parse(s: string): Utils$ThrottleUnit;
          _unit(s: string): Utils$ThrottleUnit;
          _value(s: string): Utils$ThrottleUnit;
          valueOf(name: string): Utils$ThrottleUnit;
          values(): Utils$ThrottleUnit[];
          readonly DAY: Utils$ThrottleUnit;
          readonly HOUR: Utils$ThrottleUnit;
          readonly MICROSECONDS: Utils$ThrottleUnit;
          readonly MILLISECONDS: Utils$ThrottleUnit;
          readonly MINUTES: Utils$ThrottleUnit;
          readonly NANOSECONDS: Utils$ThrottleUnit;
          readonly SECONDS: Utils$ThrottleUnit;
        }
        let Utils$ThrottleUnit: _Utils$ThrottleUnit$$static;
        interface _Utils$ThrottleUnit {
          _factor: long;
          _millis: long;
          _text: string;
        }
        interface Utils$ThrottleUnit extends CombineTypes<[_Utils$ThrottleUnit]> {}
        interface _Utils$TimespanUnit$$static extends ClassLike {
          valueOf(name: string): Utils$TimespanUnit;
          values(): Utils$TimespanUnit[];
          readonly DAYS: Utils$TimespanUnit;
          readonly HOURS: Utils$TimespanUnit;
          readonly MICROSECONDS: Utils$TimespanUnit;
          readonly MILLISECONDS: Utils$TimespanUnit;
          readonly MINUTES: Utils$TimespanUnit;
          readonly NANOSECONDS: Utils$TimespanUnit;
          readonly SECONDS: Utils$TimespanUnit;
        }
        let Utils$TimespanUnit: _Utils$TimespanUnit$$static;
        interface _Utils$TimespanUnit {
          _amount: long;
          _text: string;
        }
        interface Utils$TimespanUnit extends CombineTypes<[_Utils$TimespanUnit]> {}
        interface _WriteableUserPath$$static extends ClassLike {
          new(path: java.nio.file.Path): WriteableUserPath;
        }
        let WriteableUserPath: _WriteableUserPath$$static;
        interface _WriteableUserPath {
          doPrivilegedIO(_function: java.util.concurrent.Callable<any>): void;
          getOriginalText(): string;
          getPotentiallyMaliciousOriginal(): java.nio.file.Path;
          getReal(): java.nio.file.Path;
          getRealPathText(): string;
          _controlContext: java.security.AccessControlContext;
          _inPrivileged: boolean;
          _original: java.nio.file.Path;
          _originalText: string;
          _real: java.nio.file.Path;
          _realPathText: string;
        }
        interface WriteableUserPath extends CombineTypes<[_WriteableUserPath, java.lang.Object]> {}
      }
      module snippets {
        module consumer {
          interface _Snippets$$static extends ClassLike {
            new(): Snippets;
          }
          let Snippets: _Snippets$$static;
          interface _Snippets {
            _EventStreamOverview(): void;
            _RecordedObjectGetValue(): void;
            _RecordingFileOverview(): void;
            _RecordingStreamConstructor(): void;
            _RecordingStreamOverview(): void;
            _RecordingStreamSetSettings(): void;
            _RecordingStreamStartAsync(): void;
            _RecordingStreamStop(): void;
            _testFoo(): void;
          }
          interface Snippets extends CombineTypes<[_Snippets, java.lang.Object]> {}
          interface _Snippets$EventStreamMetadata$$static extends ClassLike {
            main(args: string[]): void;
            main(...args: string[]): void;
            _count: long;
            _new(this$0: Snippets): Snippets$EventStreamMetadata;
          }
          let Snippets$EventStreamMetadata: _Snippets$EventStreamMetadata$$static;
          interface _Snippets$EventStreamMetadata {
          }
          interface Snippets$EventStreamMetadata extends CombineTypes<[_Snippets$EventStreamMetadata, java.lang.Object]> {}
          interface _Snippets$PackageOverview$$static extends ClassLike {
            main(args: string[]): void;
            _new(this$0: Snippets): Snippets$PackageOverview;
          }
          let Snippets$PackageOverview: _Snippets$PackageOverview$$static;
          interface _Snippets$PackageOverview {
          }
          interface Snippets$PackageOverview extends CombineTypes<[_Snippets$PackageOverview, java.lang.Object]> {}
        }
        interface _Snippets$$static extends ClassLike {
          _listCPUs(): java.util.List<Snippets$CPU>;
          main(args: string[]): void;
          main(...args: string[]): void;
          new(): Snippets;
        }
        let Snippets: _Snippets$$static;
        interface _Snippets {
          _AnnotationElementOverview(): void;
          _EventFactoryOverview(): void;
          _EventSettingOverview(): void;
          _EventTypeOverview(): void;
          _FlightRecorderTakeSnapshot(): void;
          _PeriodOverview(): void;
          _RecordingnOverview(): void;
          _SettingControlOverview3(): void;
          _printTemperaturesInCelsius(file: java.nio.file.Path): void;
          update(): void;
        }
        interface Snippets extends CombineTypes<[_Snippets, java.lang.Object]> {}
        interface _Snippets$CPU$$static extends ClassLike {
          _new(id: string, temperature: float): Snippets$CPU;
        }
        let Snippets$CPU: _Snippets$CPU$$static;
        interface _Snippets$CPU {
          equals(o: any): boolean;
          hashCode(): int;
          id(): string;
          temperature(): float;
          toString(): string;
        }
        interface Snippets$CPU extends CombineTypes<[_Snippets$CPU, java.lang.Record]> {}
        interface _Snippets$CPUEvent$$static extends ClassLike {
          new(): Snippets$CPUEvent;
        }
        let Snippets$CPUEvent: _Snippets$CPUEvent$$static;
        interface _Snippets$CPUEvent {
          _id: string;
          _temperature: float;
        }
        interface Snippets$CPUEvent extends CombineTypes<[_Snippets$CPUEvent, jdk.jfr.Event]> {}
        interface _Snippets$ConfigurationOverview$$static extends ClassLike {
          main(args: string[]): void;
          main(...args: string[]): void;
          _new(): Snippets$ConfigurationOverview;
        }
        let Snippets$ConfigurationOverview: _Snippets$ConfigurationOverview$$static;
        interface _Snippets$ConfigurationOverview {
        }
        interface Snippets$ConfigurationOverview extends CombineTypes<[_Snippets$ConfigurationOverview, java.lang.Object]> {}
        interface _Snippets$Example$$static extends ClassLike {
          main(args: string[]): void;
          main(...args: string[]): void;
          new(this$0: Snippets): Snippets$Example;
        }
        let Snippets$Example: _Snippets$Example$$static;
        interface _Snippets$Example {
        }
        interface Snippets$Example extends CombineTypes<[_Snippets$Example, java.lang.Object]> {}
        interface _Snippets$Example$HelloWorld$$static extends ClassLike {
          _new(): Snippets$Example$HelloWorld;
        }
        let Snippets$Example$HelloWorld: _Snippets$Example$HelloWorld$$static;
        interface _Snippets$Example$HelloWorld {
          _message: string;
        }
        interface Snippets$Example$HelloWorld extends CombineTypes<[_Snippets$Example$HelloWorld, jdk.jfr.Event]> {}
        interface _Snippets$ExampleServlet$$static extends ClassLike {
          _new(this$0: Snippets): Snippets$ExampleServlet;
        }
        let Snippets$ExampleServlet: _Snippets$ExampleServlet$$static;
        interface _Snippets$ExampleServlet {
          _doGet(req: Snippets$HttpServletRequest, resp: Snippets$HttpServletResponse): void;
          _doPost(req: Snippets$HttpServletRequest, resp: Snippets$HttpServletResponse): void;
          _this$0: Snippets;
        }
        interface Snippets$ExampleServlet extends CombineTypes<[_Snippets$ExampleServlet, jdk.jfr.snippets.Snippets$HttpServlet]> {}
        interface _Snippets$HTTPGetRequest$$static extends ClassLike {
          _new(this$0: Snippets): Snippets$HTTPGetRequest;
        }
        let Snippets$HTTPGetRequest: _Snippets$HTTPGetRequest$$static;
        interface _Snippets$HTTPGetRequest {
        }
        interface Snippets$HTTPGetRequest extends CombineTypes<[_Snippets$HTTPGetRequest, jdk.jfr.snippets.Snippets$HTTPRequest]> {}
        interface _Snippets$HTTPPostRequest$$static extends ClassLike {
          _new(this$0: Snippets): Snippets$HTTPPostRequest;
        }
        let Snippets$HTTPPostRequest: _Snippets$HTTPPostRequest$$static;
        interface _Snippets$HTTPPostRequest {
        }
        interface Snippets$HTTPPostRequest extends CombineTypes<[_Snippets$HTTPPostRequest, jdk.jfr.snippets.Snippets$HTTPRequest]> {}
        interface _Snippets$HTTPRequest$$static extends ClassLike {
          _new(this$0: Snippets): Snippets$HTTPRequest;
        }
        let Snippets$HTTPRequest: _Snippets$HTTPRequest$$static;
        interface _Snippets$HTTPRequest {
          _uriFilter(regExp: Snippets$RegExpControl): boolean;
          _uri: string;
        }
        interface Snippets$HTTPRequest extends CombineTypes<[_Snippets$HTTPRequest, jdk.jfr.Event]> {}
        interface _Snippets$HelloWorld$$static extends ClassLike {
          _new(this$0: Snippets): Snippets$HelloWorld;
        }
        let Snippets$HelloWorld: _Snippets$HelloWorld$$static;
        interface _Snippets$HelloWorld {
          filter(regExp: Snippets$RegExpControl): boolean;
          _message: string;
        }
        interface Snippets$HelloWorld extends CombineTypes<[_Snippets$HelloWorld, jdk.jfr.Event]> {}
        interface _Snippets$HttpServlet$$static extends ClassLike {
          _new(this$0: Snippets): Snippets$HttpServlet;
        }
        let Snippets$HttpServlet: _Snippets$HttpServlet$$static;
        interface _Snippets$HttpServlet {
        }
        interface Snippets$HttpServlet extends CombineTypes<[_Snippets$HttpServlet, java.lang.Object]> {}
        interface _Snippets$HttpServletRequest$$static extends ClassLike {
          _new(this$0: Snippets): Snippets$HttpServletRequest;
        }
        let Snippets$HttpServletRequest: _Snippets$HttpServletRequest$$static;
        interface _Snippets$HttpServletRequest {
          getRequestURI(): string;
        }
        interface Snippets$HttpServletRequest extends CombineTypes<[_Snippets$HttpServletRequest, java.lang.Object]> {}
        interface _Snippets$HttpServletResponse$$static extends ClassLike {
          _new(this$0: Snippets): Snippets$HttpServletResponse;
        }
        let Snippets$HttpServletResponse: _Snippets$HttpServletResponse$$static;
        interface _Snippets$HttpServletResponse {
        }
        interface Snippets$HttpServletResponse extends CombineTypes<[_Snippets$HttpServletResponse, java.lang.Object]> {}
        interface _Snippets$ImageRender$$static extends ClassLike {
          new(this$0: Snippets): Snippets$ImageRender;
        }
        let Snippets$ImageRender: _Snippets$ImageRender$$static;
        interface _Snippets$ImageRender {
          _colorDepth: int;
          _height: long;
          _memorySize: long;
          _width: long;
        }
        interface Snippets$ImageRender extends CombineTypes<[_Snippets$ImageRender, jdk.jfr.Event]> {}
        interface _Snippets$OrderEvent$$static extends ClassLike {
          _new(this$0: Snippets): Snippets$OrderEvent;
        }
        let Snippets$OrderEvent: _Snippets$OrderEvent$$static;
        interface _Snippets$OrderEvent {
          _orderDate: long;
          _orderId: long;
        }
        interface Snippets$OrderEvent extends CombineTypes<[_Snippets$OrderEvent, jdk.jfr.Event]> {}
        interface _Snippets$OrderId$$static extends ClassLike {
        }
        let Snippets$OrderId: _Snippets$OrderId$$static;
        interface _Snippets$OrderId {
        }
        interface Snippets$OrderId extends CombineTypes<[_Snippets$OrderId, java.lang.annotation.Annotation, java.lang.Object]> {}
        interface _Snippets$OrderLineEvent$$static extends ClassLike {
          _new(this$0: Snippets): Snippets$OrderLineEvent;
        }
        let Snippets$OrderLineEvent: _Snippets$OrderLineEvent$$static;
        interface _Snippets$OrderLineEvent {
          _orderId: long;
          _product: string;
          _quantity: long;
        }
        interface Snippets$OrderLineEvent extends CombineTypes<[_Snippets$OrderLineEvent, jdk.jfr.Event]> {}
        interface _Snippets$RegExpControl$$static extends ClassLike {
          _new(this$0: Snippets): Snippets$RegExpControl;
        }
        let Snippets$RegExpControl: _Snippets$RegExpControl$$static;
        interface _Snippets$RegExpControl {
          combine(values: java.util.Set<string>): string;
          getValue(): string;
          matches(s: string): boolean;
          setValue(value: string): void;
          _pattern: java.util.regex.Pattern;
        }
        interface Snippets$RegExpControl extends CombineTypes<[_Snippets$RegExpControl, jdk.jfr.SettingControl]> {}
        interface _Snippets$RollbackSetting$$static extends ClassLike {
          new(): Snippets$RollbackSetting;
        }
        let Snippets$RollbackSetting: _Snippets$RollbackSetting$$static;
        interface _Snippets$RollbackSetting {
          combine(values: java.util.Set<string>): string;
          getValue(): string;
          setValue(settingValue: string): void;
          shouldEmit(): boolean;
          _value: boolean;
        }
        interface Snippets$RollbackSetting extends CombineTypes<[_Snippets$RollbackSetting, jdk.jfr.SettingControl]> {}
        interface _Snippets$Severity$$static extends ClassLike {
        }
        let Snippets$Severity: _Snippets$Severity$$static;
        interface _Snippets$Severity {
          value(): int;
(): int;
        }
        interface Snippets$Severity extends CombineTypes<[_Snippets$Severity, java.lang.annotation.Annotation, java.lang.Object]> {}
        interface _Snippets$StopWatchEvent$$static extends ClassLike {
          new(): Snippets$StopWatchEvent;
        }
        let Snippets$StopWatchEvent: _Snippets$StopWatchEvent$$static;
        interface _Snippets$StopWatchEvent {
        }
        interface Snippets$StopWatchEvent extends CombineTypes<[_Snippets$StopWatchEvent, jdk.jfr.Event]> {}
        interface _Snippets$Temperature$$static extends ClassLike {
          readonly CELSIUS: string;
          readonly FAHRENEHIT: string;
          readonly KELVIN: string;
        }
        let Snippets$Temperature: _Snippets$Temperature$$static;
        interface _Snippets$Temperature {
          value(): string;
(): string;
        }
        interface Snippets$Temperature extends CombineTypes<[_Snippets$Temperature, java.lang.annotation.Annotation, java.lang.Object]> {}
        interface _Snippets$TransactionBlocked$$static extends ClassLike {
          _new(this$0: Snippets): Snippets$TransactionBlocked;
        }
        let Snippets$TransactionBlocked: _Snippets$TransactionBlocked$$static;
        interface _Snippets$TransactionBlocked {
          _transactionId1: long;
          _transactionId2: long;
        }
        interface Snippets$TransactionBlocked extends CombineTypes<[_Snippets$TransactionBlocked, jdk.jfr.Event]> {}
        interface _Snippets$TransactionEvent$$static extends ClassLike {
          new(): Snippets$TransactionEvent;
        }
        let Snippets$TransactionEvent: _Snippets$TransactionEvent$$static;
        interface _Snippets$TransactionEvent {
          rollback(rollbackSetting: Snippets$RollbackSetting): boolean;
          _context: string;
          _rollback: boolean;
        }
        interface Snippets$TransactionEvent extends CombineTypes<[_Snippets$TransactionEvent, jdk.jfr.Event]> {}
        interface _Snippets$TransactionId$$static extends ClassLike {
        }
        let Snippets$TransactionId: _Snippets$TransactionId$$static;
        interface _Snippets$TransactionId {
        }
        interface Snippets$TransactionId extends CombineTypes<[_Snippets$TransactionId, java.lang.annotation.Annotation, java.lang.Object]> {}
        interface _Snippets$ValueDsecriptorOverview$$static extends ClassLike {
          _new(): Snippets$ValueDsecriptorOverview;
        }
        let Snippets$ValueDsecriptorOverview: _Snippets$ValueDsecriptorOverview$$static;
        interface _Snippets$ValueDsecriptorOverview {
          _findTypes(typeMap: java.util.Map<string,java.util.List<ValueDescriptor>>, typeName: string, fields: java.util.List<ValueDescriptor>): void;
          _printTypes(): void;
        }
        interface Snippets$ValueDsecriptorOverview extends CombineTypes<[_Snippets$ValueDsecriptorOverview, java.lang.Object]> {}
      }
      interface _AnnotationElement$$static extends ClassLike {
        _checkType(type: java.lang.Class<any>): void;
        _isKnownJFRAnnotation(annotationType: java.lang.Class<java.lang.annotation.Annotation>): boolean;
        _new(type: jfr.internal.Type, objects: java.util.List<any>, boot: boolean): AnnotationElement;
        new(annotationType: java.lang.Class<java.lang.annotation.Annotation>, values: java.util.Map<string,any>): AnnotationElement;
        new(annotationType: java.lang.Class<java.lang.annotation.Annotation>, value: any): AnnotationElement;
        new(annotationType: java.lang.Class<java.lang.annotation.Annotation>): AnnotationElement;
      }
      let AnnotationElement: _AnnotationElement$$static;
      interface _AnnotationElement {
        getAnnotation<A>(annotationType: java.lang.Class<java.lang.annotation.Annotation>): A;
        getAnnotationElements(): java.util.List<AnnotationElement>;
        _getType(): jfr.internal.Type;
        getTypeId(): long;
        getTypeName(): string;
        getValue(name: string): any;
        getValueDescriptors(): java.util.List<ValueDescriptor>;
        getValues(): java.util.List<any>;
        hasValue(name: string): boolean;
        _isInBoot(): boolean;
        _annotationValues: java.util.List<any>;
        _inBootClassLoader: boolean;
        _type: internal.Type;
      }
      interface AnnotationElement extends CombineTypes<[_AnnotationElement, java.lang.Object]> {}
      interface _BooleanFlag$$static extends ClassLike {
      }
      let BooleanFlag: _BooleanFlag$$static;
      interface _BooleanFlag {
      }
      interface BooleanFlag extends CombineTypes<[_BooleanFlag, java.lang.annotation.Annotation, java.lang.Object]> {}
      interface _Category$$static extends ClassLike {
      }
      let Category: _Category$$static;
      interface _Category {
        value(): string[];
(): string[];
      }
      interface Category extends CombineTypes<[_Category, java.lang.annotation.Annotation, java.lang.Object]> {}
      interface _Configuration$$static extends ClassLike {
        create(path: java.nio.file.Path): Configuration;
        create(reader: java.io.Reader): Configuration;
        getConfiguration(name: string): Configuration;
        getConfigurations(): java.util.List<Configuration>;
        _new(name: string, label: string, description: string, provider: string, settings: java.util.Map<string,string>, contents: string): Configuration;
      }
      let Configuration: _Configuration$$static;
      interface _Configuration {
        getContents(): string;
        getDescription(): string;
        getLabel(): string;
        getName(): string;
        getProvider(): string;
        getSettings(): java.util.Map<string,string>;
        _contents: string;
        _description: string;
        _label: string;
        _name: string;
        _provider: string;
        _settings: java.util.Map<string,string>;
      }
      interface Configuration extends CombineTypes<[_Configuration, java.lang.Object]> {}
      interface _ContentType$$static extends ClassLike {
      }
      let ContentType: _ContentType$$static;
      interface _ContentType {
      }
      interface ContentType extends CombineTypes<[_ContentType, java.lang.annotation.Annotation, java.lang.Object]> {}
      interface _DataAmount$$static extends ClassLike {
        readonly BITS: string;
        readonly BYTES: string;
      }
      let DataAmount: _DataAmount$$static;
      interface _DataAmount {
        value(): string;
(): string;
      }
      interface DataAmount extends CombineTypes<[_DataAmount, java.lang.annotation.Annotation, java.lang.Object]> {}
      interface _Description$$static extends ClassLike {
      }
      let Description: _Description$$static;
      interface _Description {
        value(): string;
(): string;
      }
      interface Description extends CombineTypes<[_Description, java.lang.annotation.Annotation, java.lang.Object]> {}
      interface _Enabled$$static extends ClassLike {
        readonly NAME: string;
      }
      let Enabled: _Enabled$$static;
      interface _Enabled {
        value(): boolean;
(): boolean;
      }
      interface Enabled extends CombineTypes<[_Enabled, java.lang.annotation.Annotation, java.lang.Object]> {}
      interface _Event$$static extends ClassLike {
        _new(): Event;
      }
      let Event: _Event$$static;
      interface _Event {
        begin(): void;
        commit(): void;
        end(): void;
        isEnabled(): boolean;
        set(index: int, value: any): void;
        shouldCommit(): boolean;
      }
      interface Event extends CombineTypes<[_Event, jdk.internal.event.Event]> {}
      interface _EventFactory$$static extends ClassLike {
        create(annotationElements: java.util.List<AnnotationElement>, fields: java.util.List<ValueDescriptor>): EventFactory;
        _REGISTERED_ID: long;
      }
      let EventFactory: _EventFactory$$static;
      interface _EventFactory {
        getEventType(): EventType;
        newEvent(): Event;
        register(): void;
        unregister(): void;
        _constructorHandle: java.lang.invoke.MethodHandle;
        _eventClass: java.lang.Class<Event>;
        _sanitizedAnnotation: java.util.List<AnnotationElement>;
        _sanitizedFields: java.util.List<ValueDescriptor>;
      }
      interface EventFactory extends CombineTypes<[_EventFactory, java.lang.Object]> {}
      interface _EventSettings$$static extends ClassLike {
        _new(): EventSettings;
      }
      let EventSettings: _EventSettings$$static;
      interface _EventSettings {
        _toMap(): java.util.Map<string,string>;
        with(a0: string, a1: string): EventSettings;
        withPeriod(duration: java.time.Duration): EventSettings;
        withStackTrace(): EventSettings;
        withThreshold(duration: java.time.Duration): EventSettings;
        withoutStackTrace(): EventSettings;
        withoutThreshold(): EventSettings;
      }
      interface EventSettings extends CombineTypes<[_EventSettings, java.lang.Object]> {}
      interface _EventSettings$DelegatedEventSettings$$static extends ClassLike {
        _new(modifier: jfr.internal.management.EventSettingsModifier): EventSettings$DelegatedEventSettings;
      }
      let EventSettings$DelegatedEventSettings: _EventSettings$DelegatedEventSettings$$static;
      interface _EventSettings$DelegatedEventSettings {
        _toMap(): java.util.Map<string,string>;
        with(name: string, value: string): EventSettings;
        _delegate: internal.management.EventSettingsModifier;
      }
      interface EventSettings$DelegatedEventSettings extends CombineTypes<[_EventSettings$DelegatedEventSettings, jdk.jfr.EventSettings]> {}
      interface _EventType$$static extends ClassLike {
        getEventType(eventClass: java.lang.Class<Event>): EventType;
        _UNCATEGORIZED: java.util.List<string>;
        _UNKNOWN: string;
        _new(platformEventType: jfr.internal.PlatformEventType): EventType;
      }
      let EventType: _EventType$$static;
      interface _EventType {
        getAnnotation<A>(annotationClass: java.lang.Class<A>): A;
        getAnnotationElements(): java.util.List<AnnotationElement>;
        getCategoryNames(): java.util.List<string>;
        getDescription(): string;
        getField(name: string): ValueDescriptor;
        getFields(): java.util.List<ValueDescriptor>;
        getId(): long;
        getLabel(): string;
        getName(): string;
        _getPlatformEventType(): jfr.internal.PlatformEventType;
        getSettingDescriptors(): java.util.List<SettingDescriptor>;
        _getType(): jfr.internal.Type;
        isEnabled(): boolean;
        _isVisible(): boolean;
        _cache: java.util.Map<string,ValueDescriptor>;
        _label: string;
        _platformEventType: internal.PlatformEventType;
      }
      interface EventType extends CombineTypes<[_EventType, java.lang.Object]> {}
      interface _Experimental$$static extends ClassLike {
      }
      let Experimental: _Experimental$$static;
      interface _Experimental {
      }
      interface Experimental extends CombineTypes<[_Experimental, java.lang.annotation.Annotation, java.lang.Object]> {}
      interface _FlightRecorder$$static extends ClassLike {
        addListener(changeListener: FlightRecorderListener): void;
        addPeriodicEvent(eventClass: java.lang.Class<Event>, hook: java.lang.Runnable): void;
        getFlightRecorder(): FlightRecorder;
        isAvailable(): boolean;
        isInitialized(): boolean;
        register(eventClass: java.lang.Class<Event>): void;
        removeListener(changeListener: FlightRecorderListener): boolean;
        removePeriodicEvent(hook: java.lang.Runnable): boolean;
        unregister(eventClass: java.lang.Class<Event>): void;
        _initialized: boolean;
        _platformRecorder: FlightRecorder;
      }
      let FlightRecorder: _FlightRecorder$$static;
      interface _FlightRecorder {
        getEventTypes(): java.util.List<EventType>;
        _getInternal(): jfr.internal.PlatformRecorder;
        getRecordings(): java.util.List<Recording>;
        takeSnapshot(): Recording;
        _internal: internal.PlatformRecorder;
      }
      interface FlightRecorder extends CombineTypes<[_FlightRecorder, java.lang.Object]> {}
      interface _FlightRecorderListener$$static extends ClassLike {
      }
      let FlightRecorderListener: _FlightRecorderListener$$static;
      interface _FlightRecorderListener {
        recorderInitialized(recorder: FlightRecorder): void;
        recordingStateChanged(recording: Recording): void;
      }
      interface FlightRecorderListener extends CombineTypes<[_FlightRecorderListener, java.lang.Object]> {}
      interface _FlightRecorderPermission$$static extends ClassLike {
        new(name: string): FlightRecorderPermission;
      }
      let FlightRecorderPermission: _FlightRecorderPermission$$static;
      interface _FlightRecorderPermission {
      }
      interface FlightRecorderPermission extends CombineTypes<[_FlightRecorderPermission, java.security.BasicPermission]> {}
      interface _FlightRecorderPermission$InternalAccess$$static extends ClassLike {
      }
      let FlightRecorderPermission$InternalAccess: _FlightRecorderPermission$InternalAccess$$static;
      interface _FlightRecorderPermission$InternalAccess {
        getContext(settingControl: SettingControl): java.security.AccessControlContext;
        getFieldName(v: ValueDescriptor): string;
        getPlatformEventType(eventType: EventType): jfr.internal.PlatformEventType;
        getPlatformRecorder(): jfr.internal.PlatformRecorder;
        getPlatformRecording(r: Recording): jfr.internal.PlatformRecording;
        getType(o: any): jfr.internal.Type;
        isConstantPool(v: ValueDescriptor): boolean;
        isUnsigned(v: ValueDescriptor): boolean;
        isVisible(t: EventType): boolean;
        newAnnotation(annotationType: jfr.internal.Type, values: java.util.List<any>, boot: boolean): AnnotationElement;
        newConfiguration(name: string, label: string, description: string, provider: string, settings: java.util.Map<string,string>, contents: string): Configuration;
        newEventSettings(esm: jfr.internal.management.EventSettingsModifier): EventSettings;
        newEventType(platformEventType: jfr.internal.PlatformEventType): EventType;
        newSettingDescriptor(type: jfr.internal.Type, name: string, defaultValue: string, annotations: java.util.List<AnnotationElement>): SettingDescriptor;
        newValueDescriptor(name: string, fieldType: jfr.internal.Type, annos: java.util.List<AnnotationElement>, dimension: int, constantPool: boolean, fieldName: string): ValueDescriptor;
        newValueDescriptor(type: java.lang.Class<any>, name: string): ValueDescriptor;
        setAnnotations(v: ValueDescriptor, a: java.util.List<AnnotationElement>): void;
        setAnnotations(s: SettingDescriptor, a: java.util.List<AnnotationElement>): void;
      }
      interface FlightRecorderPermission$InternalAccess extends CombineTypes<[_FlightRecorderPermission$InternalAccess, jdk.jfr.internal.PrivateAccess]> {}
      interface _Frequency$$static extends ClassLike {
      }
      let Frequency: _Frequency$$static;
      interface _Frequency {
      }
      interface Frequency extends CombineTypes<[_Frequency, java.lang.annotation.Annotation, java.lang.Object]> {}
      interface _Label$$static extends ClassLike {
      }
      let Label: _Label$$static;
      interface _Label {
        value(): string;
(): string;
      }
      interface Label extends CombineTypes<[_Label, java.lang.annotation.Annotation, java.lang.Object]> {}
      interface _MemoryAddress$$static extends ClassLike {
      }
      let MemoryAddress: _MemoryAddress$$static;
      interface _MemoryAddress {
      }
      interface MemoryAddress extends CombineTypes<[_MemoryAddress, java.lang.annotation.Annotation, java.lang.Object]> {}
      interface _MetadataDefinition$$static extends ClassLike {
      }
      let MetadataDefinition: _MetadataDefinition$$static;
      interface _MetadataDefinition {
      }
      interface MetadataDefinition extends CombineTypes<[_MetadataDefinition, java.lang.annotation.Annotation, java.lang.Object]> {}
      interface _Name$$static extends ClassLike {
      }
      let Name: _Name$$static;
      interface _Name {
        value(): string;
(): string;
      }
      interface Name extends CombineTypes<[_Name, java.lang.annotation.Annotation, java.lang.Object]> {}
      interface _Percentage$$static extends ClassLike {
      }
      let Percentage: _Percentage$$static;
      interface _Percentage {
      }
      interface Percentage extends CombineTypes<[_Percentage, java.lang.annotation.Annotation, java.lang.Object]> {}
      interface _Period$$static extends ClassLike {
        readonly NAME: string;
      }
      let Period: _Period$$static;
      interface _Period {
        value(): string;
(): string;
      }
      interface Period extends CombineTypes<[_Period, java.lang.annotation.Annotation, java.lang.Object]> {}
      interface _Recording$$static extends ClassLike {
        new(settings: java.util.Map<string,string>): Recording;
        new(): Recording;
        new(configuration: Configuration): Recording;
      }
      let Recording: _Recording$$static;
      interface _Recording {
        close(): void;
        copy(stop: boolean): Recording;
        disable(name: string): EventSettings;
        disable(eventClass: java.lang.Class<Event>): EventSettings;
        dump(destination: java.nio.file.Path): void;
        enable(name: string): EventSettings;
        enable(eventClass: java.lang.Class<Event>): EventSettings;
        getDestination(): java.nio.file.Path;
        getDumpOnExit(): boolean;
        getDuration(): java.time.Duration;
        _getFlushInterval(): java.time.Duration;
        getId(): long;
        _getInternal(): jfr.internal.PlatformRecording;
        getMaxAge(): java.time.Duration;
        getMaxSize(): long;
        getName(): string;
        getSettings(): java.util.Map<string,string>;
        getSize(): long;
        getStartTime(): java.time.Instant;
        getState(): RecordingState;
        getStopTime(): java.time.Instant;
        getStream(start: java.time.Instant, end: java.time.Instant): java.io.InputStream;
        isToDisk(): boolean;
        scheduleStart(delay: java.time.Duration): void;
        setDestination(destination: java.nio.file.Path): void;
        setDumpOnExit(dumpOnExit: boolean): void;
        setDuration(duration: java.time.Duration): void;
        setMaxAge(maxAge: java.time.Duration): void;
        setMaxSize(maxSize: long): void;
        setName(name: string): void;
        _setSetting(id: string, value: string): void;
        setSettings(settings: java.util.Map<string,string>): void;
        setToDisk(disk: boolean): void;
        start(): void;
        stop(): boolean;
        _internal: internal.PlatformRecording;
      }
      interface Recording extends CombineTypes<[_Recording, java.io.Closeable, java.lang.Object]> {}
      interface _Recording$RecordingSettings$$static extends ClassLike {
        _new(r: Recording, identifier: string): Recording$RecordingSettings;
        _new(r: Recording, eventClass: java.lang.Class<Event>): Recording$RecordingSettings;
      }
      let Recording$RecordingSettings: _Recording$RecordingSettings$$static;
      interface _Recording$RecordingSettings {
        toMap(): java.util.Map<string,string>;
        with(name: string, value: string): EventSettings;
        _identifier: string;
        _recording: Recording;
      }
      interface Recording$RecordingSettings extends CombineTypes<[_Recording$RecordingSettings, jdk.jfr.EventSettings]> {}
      interface _RecordingState$$static extends ClassLike {
        valueOf(name: string): RecordingState;
        values(): RecordingState[];
        readonly CLOSED: RecordingState;
        readonly DELAYED: RecordingState;
        readonly NEW: RecordingState;
        readonly RUNNING: RecordingState;
        readonly STOPPED: RecordingState;
      }
      let RecordingState: _RecordingState$$static;
      interface _RecordingState {
      }
      interface RecordingState extends CombineTypes<[_RecordingState]> {}
      interface _Registered$$static extends ClassLike {
      }
      let Registered: _Registered$$static;
      interface _Registered {
        value(): boolean;
(): boolean;
      }
      interface Registered extends CombineTypes<[_Registered, java.lang.annotation.Annotation, java.lang.Object]> {}
      interface _Relational$$static extends ClassLike {
      }
      let Relational: _Relational$$static;
      interface _Relational {
      }
      interface Relational extends CombineTypes<[_Relational, java.lang.annotation.Annotation, java.lang.Object]> {}
      interface _SettingControl$$static extends ClassLike {
        _new(): SettingControl;
      }
      let SettingControl: _SettingControl$$static;
      interface _SettingControl {
        combine(a0: java.util.Set<string>): string;
        _getContext(): java.security.AccessControlContext;
        getValue(): string;
        setValue(a0: string): void;
        _context: java.security.AccessControlContext;
        _initialized: boolean;
      }
      interface SettingControl extends CombineTypes<[_SettingControl, java.lang.Object]> {}
      interface _SettingDefinition$$static extends ClassLike {
      }
      let SettingDefinition: _SettingDefinition$$static;
      interface _SettingDefinition {
      }
      interface SettingDefinition extends CombineTypes<[_SettingDefinition, java.lang.annotation.Annotation, java.lang.Object]> {}
      interface _SettingDescriptor$$static extends ClassLike {
        _new(type: jfr.internal.Type, name: string, defaultValue: string, annotations: java.util.List<AnnotationElement>): SettingDescriptor;
      }
      let SettingDescriptor: _SettingDescriptor$$static;
      interface _SettingDescriptor {
        getAnnotation<A>(annotationType: java.lang.Class<A>): A;
        getAnnotationElements(): java.util.List<AnnotationElement>;
        getContentType(): string;
        getDefaultValue(): string;
        getDescription(): string;
        getLabel(): string;
        getName(): string;
        _getType(): jfr.internal.Type;
        getTypeId(): long;
        getTypeName(): string;
        _setAnnotations(as: java.util.List<AnnotationElement>): void;
        _annotationConstruct: internal.AnnotationConstruct;
        _defaultValue: string;
        _name: string;
        _type: internal.Type;
      }
      interface SettingDescriptor extends CombineTypes<[_SettingDescriptor, java.lang.Object]> {}
      interface _StackTrace$$static extends ClassLike {
        readonly NAME: string;
      }
      let StackTrace: _StackTrace$$static;
      interface _StackTrace {
        value(): boolean;
(): boolean;
      }
      interface StackTrace extends CombineTypes<[_StackTrace, java.lang.annotation.Annotation, java.lang.Object]> {}
      interface _Threshold$$static extends ClassLike {
        readonly NAME: string;
      }
      let Threshold: _Threshold$$static;
      interface _Threshold {
        value(): string;
(): string;
      }
      interface Threshold extends CombineTypes<[_Threshold, java.lang.annotation.Annotation, java.lang.Object]> {}
      interface _Timespan$$static extends ClassLike {
        readonly MICROSECONDS: string;
        readonly MILLISECONDS: string;
        readonly NANOSECONDS: string;
        readonly SECONDS: string;
        readonly TICKS: string;
      }
      let Timespan: _Timespan$$static;
      interface _Timespan {
        value(): string;
(): string;
      }
      interface Timespan extends CombineTypes<[_Timespan, java.lang.annotation.Annotation, java.lang.Object]> {}
      interface _Timestamp$$static extends ClassLike {
        readonly MILLISECONDS_SINCE_EPOCH: string;
        readonly TICKS: string;
      }
      let Timestamp: _Timestamp$$static;
      interface _Timestamp {
        value(): string;
(): string;
      }
      interface Timestamp extends CombineTypes<[_Timestamp, java.lang.annotation.Annotation, java.lang.Object]> {}
      interface _TransitionFrom$$static extends ClassLike {
      }
      let TransitionFrom: _TransitionFrom$$static;
      interface _TransitionFrom {
      }
      interface TransitionFrom extends CombineTypes<[_TransitionFrom, java.lang.annotation.Annotation, java.lang.Object]> {}
      interface _TransitionTo$$static extends ClassLike {
      }
      let TransitionTo: _TransitionTo$$static;
      interface _TransitionTo {
      }
      interface TransitionTo extends CombineTypes<[_TransitionTo, java.lang.annotation.Annotation, java.lang.Object]> {}
      interface _Unsigned$$static extends ClassLike {
      }
      let Unsigned: _Unsigned$$static;
      interface _Unsigned {
      }
      interface Unsigned extends CombineTypes<[_Unsigned, java.lang.annotation.Annotation, java.lang.Object]> {}
      interface _ValueDescriptor$$static extends ClassLike {
        _UNKNOWN: string;
        _new(type: jfr.internal.Type, name: string, annotations: java.util.List<AnnotationElement>, dimension: int, constantPool: boolean, fieldName: string): ValueDescriptor;
        new(type: java.lang.Class<any>, name: string): ValueDescriptor;
        new(type: java.lang.Class<any>, name: string, annotations: java.util.List<AnnotationElement>): ValueDescriptor;
        _new(type: java.lang.Class<any>, name: string, annotations: java.util.List<AnnotationElement>, allowArray: boolean): ValueDescriptor;
      }
      let ValueDescriptor: _ValueDescriptor$$static;
      interface _ValueDescriptor {
        getAnnotation<A>(annotationType: java.lang.Class<A>): A;
        getAnnotationElements(): java.util.List<AnnotationElement>;
        getContentType(): string;
        getDescription(): string;
        getFields(): java.util.List<ValueDescriptor>;
        _getJavaFieldName(): string;
        getLabel(): string;
        getName(): string;
        _getType(): jfr.internal.Type;
        getTypeId(): long;
        getTypeName(): string;
        isArray(): boolean;
        _isConstantPool(): boolean;
        _isUnsigned(): boolean;
        _setAnnotations(anno: java.util.List<AnnotationElement>): void;
        _annotationConstruct: internal.AnnotationConstruct;
        _constantPool: boolean;
        _contentType: string;
        _isArray: boolean;
        _javaFieldName: string;
        _label: string;
        _name: string;
        _type: internal.Type;
      }
      interface ValueDescriptor extends CombineTypes<[_ValueDescriptor, java.lang.Object]> {}
    }
  }
}
