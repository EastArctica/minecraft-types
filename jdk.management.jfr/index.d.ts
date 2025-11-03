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
    module management {
      module jfr {
        module internal {
          interface _FlightRecorderMXBeanProvider$$static extends ClassLike {
            _getFlightRecorderMXBean(): FlightRecorderMXBean;
            setFlightRecorderMXBeanFactory(factory: java.util.concurrent.Callable<FlightRecorderMXBean>): void;
            _flightRecorderMXBean: FlightRecorderMXBean;
            _flightRecorderMXBeanFactory: java.util.concurrent.Callable<FlightRecorderMXBean>;
            new(): FlightRecorderMXBeanProvider;
          }
          let FlightRecorderMXBeanProvider: _FlightRecorderMXBeanProvider$$static;
          interface _FlightRecorderMXBeanProvider {
            getPlatformComponentList(): java.util.List<sun.management.spi.PlatformMBeanProvider$PlatformComponent<any>>;
          }
          interface FlightRecorderMXBeanProvider extends CombineTypes<[_FlightRecorderMXBeanProvider, sun.management.spi.PlatformMBeanProvider]> {}
          interface _FlightRecorderMXBeanProvider$SingleMBeanComponent$$static extends ClassLike {
            new(objectName: string, mbeanInterface: java.lang.Class<FlightRecorderMXBean>): FlightRecorderMXBeanProvider$SingleMBeanComponent;
          }
          let FlightRecorderMXBeanProvider$SingleMBeanComponent: _FlightRecorderMXBeanProvider$SingleMBeanComponent$$static;
          interface _FlightRecorderMXBeanProvider$SingleMBeanComponent {
            getObjectNamePattern(): string;
            mbeanInterfaceNames(): java.util.Set<string>;
            mbeanInterfaces(): java.util.Set<java.lang.Class<FlightRecorderMXBean>>;
            nameToMBeanMap(): java.util.Map<string,FlightRecorderMXBean>;
            _mbeanInterface: java.lang.Class<FlightRecorderMXBean>;
            _objectName: string;
          }
          interface FlightRecorderMXBeanProvider$SingleMBeanComponent extends CombineTypes<[_FlightRecorderMXBeanProvider$SingleMBeanComponent, sun.management.spi.PlatformMBeanProvider$PlatformComponent<FlightRecorderMXBean>, java.lang.Object]> {}
        }
        interface _ConfigurationInfo$$static extends ClassLike {
          _createMap(o: any): java.util.Map<string,string>;
          from(cd: javax.management.openmbean.CompositeData): ConfigurationInfo;
          _new(config: jdk.jfr.Configuration): ConfigurationInfo;
        }
        let ConfigurationInfo: _ConfigurationInfo$$static;
        interface _ConfigurationInfo {
          getContents(): string;
          getDescription(): string;
          getLabel(): string;
          getName(): string;
          getProvider(): string;
          getSettings(): java.util.Map<string,string>;
          toString(): string;
          _contents: string;
          _description: string;
          _label: string;
          _name: string;
          _provider: string;
          _settings: java.util.Map<string,string>;
        }
        interface ConfigurationInfo extends CombineTypes<[_ConfigurationInfo, java.lang.Object]> {}
        interface _DiskRepository$$static extends ClassLike {
          _CHECKPOINT_WITH_HEADER: byte;
          _COMPLETE_STATE: byte;
          _HEADER_FILE_DURATION: int;
          _HEADER_FILE_STATE_POSITION: int;
          _HEADER_SIZE: int;
          _HEADER_START_NANOS_POSITION: int;
          _MODIFYING_STATE: byte;
          new(path: java.nio.file.Path, deleteDirectory: boolean): DiskRepository;
        }
        let DiskRepository: _DiskRepository$$static;
        interface _DiskRepository {
          activateStreamBarrier(): jdk.jfr.internal.management.StreamBarrier;
          _addChunk(chunk: DiskRepository$DiskChunk): void;
          _cleanUpDeadChunk(maxCount: int): void;
          close(): void;
          complete(): void;
          _completePrevious(previous: DiskRepository$DiskChunk): void;
          _flush(): void;
          newDump(endTime: long): FileDump;
          _nextByte(inEvent: boolean): byte;
          _nextChunk(): DiskRepository$DiskChunk;
          onChunkComplete(endTimeNanos: long): void;
          _processCheckpointHeader(): void;
          _processEvent(): void;
          _processEventSize(): void;
          _processEventTypeId(): void;
          _processFlush(): void;
          _processInitialHeader(): void;
          _processNumericValueInEvent(): void;
          _removeOldestChunk(): void;
          setMaxAge(maxAge: java.time.Duration): void;
          setMaxSize(maxSize: long): void;
          _trimToAge(oldest: java.time.Instant): void;
          _trimToSize(): void;
          write(bytes: byte[]): void;
          _writeCheckpointHeader(): void;
          _writeInitialHeader(): void;
          _barrier: jdk.jfr.internal.management.StreamBarrier;
          _buffer: java.nio.ByteBuffer;
          _bufferIndex: int;
          _chunkFilename: jdk.jfr.internal.management.ChunkFilename;
          _chunks: java.util.Deque<DiskRepository$DiskChunk>;
          _currentByteArray: byte[];
          _currentChunk: DiskRepository$DiskChunk;
          _deadChunks: java.util.Deque<DiskRepository$DiskChunk>;
          _deleteDirectory: boolean;
          _directory: java.nio.file.Path;
          _eventFieldSize: int;
          _fileDumps: java.util.Deque<FileDump>;
          _index: int;
          _lastFlush: int;
          _longValueshift: int;
          _maxAge: java.time.Duration;
          _maxSize: long;
          _payLoadSize: long;
          _previousRAF: java.io.RandomAccessFile;
          _previousRAFstate: byte;
          _raf: java.io.RandomAccessFile;
          _size: long;
          _sizeShift: int;
          _state: DiskRepository$State;
          _typeId: long;
          _typeIdshift: int;
        }
        interface DiskRepository extends CombineTypes<[_DiskRepository, java.io.Closeable, java.lang.Object]> {}
        interface _DiskRepository$DiskChunk$$static extends ClassLike {
          _new(repository: DiskRepository, path: java.nio.file.Path, startNanos: long): DiskRepository$DiskChunk;
        }
        let DiskRepository$DiskChunk: _DiskRepository$DiskChunk$$static;
        interface _DiskRepository$DiskChunk {
          acquire(): void;
          _destroy(): void;
          isDead(): boolean;
          path(): java.nio.file.Path;
          release(): void;
          _endTime: java.time.Instant;
          _endTimeNanos: long;
          _path: java.nio.file.Path;
          _referenceCount: int;
          _repository: DiskRepository;
          _size: long;
          _startTimeNanos: long;
        }
        interface DiskRepository$DiskChunk extends CombineTypes<[_DiskRepository$DiskChunk, java.lang.Object]> {}
        interface _DiskRepository$State$$static extends ClassLike {
          valueOf(name: string): DiskRepository$State;
          values(): DiskRepository$State[];
          readonly CHECKPOINT_EVENT_DELTA: DiskRepository$State;
          readonly CHECKPOINT_EVENT_DURATION: DiskRepository$State;
          readonly CHECKPOINT_EVENT_FLUSH_TYPE: DiskRepository$State;
          readonly CHECKPOINT_EVENT_HEADER_BYTE_ARRAY_CONTENT: DiskRepository$State;
          readonly CHECKPOINT_EVENT_HEADER_BYTE_ARRAY_LENGTH: DiskRepository$State;
          readonly CHECKPOINT_EVENT_HEADER_ITEM_COUNT: DiskRepository$State;
          readonly CHECKPOINT_EVENT_HEADER_KEY: DiskRepository$State;
          readonly CHECKPOINT_EVENT_HEADER_TYPE: DiskRepository$State;
          readonly CHECKPOINT_EVENT_POOL_COUNT: DiskRepository$State;
          readonly CHECKPOINT_EVENT_TIMESTAMP: DiskRepository$State;
          readonly EVENT_PAYLOAD: DiskRepository$State;
          readonly EVENT_SIZE: DiskRepository$State;
          readonly EVENT_TYPE: DiskRepository$State;
          readonly HEADER: DiskRepository$State;
        }
        let DiskRepository$State: _DiskRepository$State$$static;
        interface _DiskRepository$State {
          next(): DiskRepository$State;
        }
        interface DiskRepository$State extends CombineTypes<[_DiskRepository$State]> {}
        interface _DownLoadThread$$static extends ClassLike {
          _new(stream: RemoteRecordingStream, name: string): DownLoadThread;
        }
        let DownLoadThread: _DownLoadThread$$static;
        interface _DownLoadThread {
          run(): void;
          _takeNap(): void;
          _diskRepository: DiskRepository;
          _endTime: java.time.Instant;
          _startTime: java.time.Instant;
          _stream: RemoteRecordingStream;
        }
        interface DownLoadThread extends CombineTypes<[_DownLoadThread, java.lang.Thread]> {}
        interface _EventTypeInfo$$static extends ClassLike {
          _createCategoryNames(array: any[]): java.util.List<string>;
          _createSettingDescriptors(settings: any): java.util.List<SettingDescriptorInfo>;
          _creatingSettingDescriptorInfos(eventType: jdk.jfr.EventType): java.util.List<SettingDescriptorInfo>;
          from(cd: javax.management.openmbean.CompositeData): EventTypeInfo;
          _new(eventType: jdk.jfr.EventType): EventTypeInfo;
        }
        let EventTypeInfo: _EventTypeInfo$$static;
        interface _EventTypeInfo {
          getCategoryNames(): java.util.List<string>;
          getDescription(): string;
          getId(): long;
          getLabel(): string;
          getName(): string;
          getSettingDescriptors(): java.util.List<SettingDescriptorInfo>;
          toString(): string;
          _categoryNames: java.util.List<string>;
          _description: string;
          _id: long;
          _label: string;
          _name: string;
          _settingDescriptors: java.util.List<SettingDescriptorInfo>;
        }
        interface EventTypeInfo extends CombineTypes<[_EventTypeInfo, java.lang.Object]> {}
        interface _FileDump$$static extends ClassLike {
          _new(stopTimeMillis: long): FileDump;
        }
        let FileDump: _FileDump$$static;
        interface _FileDump {
          add(dc: DiskRepository$DiskChunk): void;
          close(): void;
          isComplete(): boolean;
          _oldestChunk(): DiskRepository$DiskChunk;
          setComplete(): void;
          write(path: java.nio.file.Path): void;
          _chunks: java.util.Deque<DiskRepository$DiskChunk>;
          _complete: boolean;
          _stopTimeMillis: long;
        }
        interface FileDump extends CombineTypes<[_FileDump, java.lang.Object]> {}
        interface _FlightRecorderMXBean$$static extends ClassLike {
          readonly MXBEAN_NAME: string;
        }
        let FlightRecorderMXBean: _FlightRecorderMXBean$$static;
        interface _FlightRecorderMXBean {
          cloneRecording(a0: long, a1: boolean): long;
          closeRecording(a0: long): void;
          closeStream(a0: long): void;
          copyTo(a0: long, a1: string): void;
          getConfigurations(): java.util.List<ConfigurationInfo>;
          getEventTypes(): java.util.List<EventTypeInfo>;
          getRecordingOptions(a0: long): java.util.Map<string,string>;
          getRecordingSettings(a0: long): java.util.Map<string,string>;
          getRecordings(): java.util.List<RecordingInfo>;
          newRecording(): long;
          openStream(a0: long, a1: java.util.Map<string,string>): long;
          readStream(a0: long): byte[];
          setConfiguration(a0: long, a1: string): void;
          setPredefinedConfiguration(a0: long, a1: string): void;
          setRecordingOptions(a0: long, a1: java.util.Map<string,string>): void;
          setRecordingSettings(a0: long, a1: java.util.Map<string,string>): void;
          startRecording(a0: long): void;
          stopRecording(a0: long): boolean;
          takeSnapshot(): long;
        }
        interface FlightRecorderMXBean extends CombineTypes<[_FlightRecorderMXBean, java.lang.management.PlatformManagedObject, java.lang.Object]> {}
        interface _FlightRecorderMXBeanImpl$$static extends ClassLike {
          _createNotificationInfo(): javax.management.MBeanNotificationInfo[];
          _setOption<T, U>(options: java.util.Map<string,string>, name: string, defaultValue: string, converter: java.util.function.Function<string,U>, setter: java.util.function.Consumer<U>): void;
          _setOptionDestination(recording: jdk.jfr.Recording, destination: string): void;
          _validateOption<T, U>(options: java.util.Map<string,string>, name: string, validator: java.util.function.Function<string,U>): void;
          _ATTRIBUTE_RECORDINGS: string;
          _OPTIONS: java.util.List<string>;
          _OPTION_DESTINATION: string;
          _OPTION_DISK: string;
          _OPTION_DUMP_ON_EXIT: string;
          _OPTION_DURATION: string;
          _OPTION_MAX_AGE: string;
          _OPTION_MAX_SIZE: string;
          _OPTION_NAME: string;
          _new(): FlightRecorderMXBeanImpl;
        }
        let FlightRecorderMXBeanImpl: _FlightRecorderMXBeanImpl$$static;
        interface _FlightRecorderMXBeanImpl {
          addNotificationListener(listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, handback: any): void;
          cloneRecording(id: long, a1: boolean): long;
          closeRecording(id: long): void;
          closeStream(streamIdentifier: long): void;
          copyTo(recording: long, a1: string): void;
          _createNotification(recording: jdk.jfr.Recording): javax.management.Notification;
          getConfigurations(): java.util.List<ConfigurationInfo>;
          getEventTypes(): java.util.List<EventTypeInfo>;
          _getExistingRecording(id: long): jdk.jfr.Recording;
          getObjectName(): javax.management.ObjectName;
          _getRecorder(): jdk.jfr.FlightRecorder;
          _getRecording(id: long): jdk.jfr.Recording;
          getRecordingOptions(recording: long): java.util.Map<string,string>;
          getRecordingSettings(recording: long): java.util.Map<string,string>;
          getRecordings(): java.util.List<RecordingInfo>;
          newRecording(): long;
          openStream(id: long, a1: java.util.Map<string,string>): long;
          readStream(streamIdentifier: long): byte[];
          _removeListeners(p: java.util.function.Predicate<FlightRecorderMXBeanImpl$MXBeanListener>): void;
          removeNotificationListener(listener: javax.management.NotificationListener): void;
          removeNotificationListener(listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, handback: any): void;
          setConfiguration(recording: long, a1: string): void;
          setPredefinedConfiguration(recording: long, a1: string): void;
          setRecordingOptions(recording: long, a1: java.util.Map<string,string>): void;
          setRecordingSettings(recording: long, a1: java.util.Map<string,string>): void;
          startRecording(id: long): void;
          stopRecording(id: long): boolean;
          takeSnapshot(): long;
          _changes: java.util.Map<long,any>;
          _listeners: java.util.List<FlightRecorderMXBeanImpl$MXBeanListener>;
          _recorder: jdk.jfr.FlightRecorder;
          _sequenceNumber: java.util.concurrent.atomic.AtomicLong;
          _streamHandler: jdk.jfr.internal.management.StreamManager;
        }
        interface FlightRecorderMXBeanImpl extends CombineTypes<[_FlightRecorderMXBeanImpl, jdk.management.jfr.FlightRecorderMXBean, javax.management.StandardEmitterMBean, javax.management.NotificationEmitter]> {}
        interface _FlightRecorderMXBeanImpl$MXBeanListener$$static extends ClassLike {
          new(this$0: FlightRecorderMXBeanImpl, listener: javax.management.NotificationListener, filter: javax.management.NotificationFilter, handback: any): FlightRecorderMXBeanImpl$MXBeanListener;
        }
        let FlightRecorderMXBeanImpl$MXBeanListener: _FlightRecorderMXBeanImpl$MXBeanListener$$static;
        interface _FlightRecorderMXBeanImpl$MXBeanListener {
          recordingStateChanged(recording: jdk.jfr.Recording): void;
          _context: java.security.AccessControlContext;
          _filter: javax.management.NotificationFilter;
          _handback: any;
          _listener: javax.management.NotificationListener;
          _this$0: FlightRecorderMXBeanImpl;
        }
        interface FlightRecorderMXBeanImpl$MXBeanListener extends CombineTypes<[_FlightRecorderMXBeanImpl$MXBeanListener, jdk.jfr.FlightRecorderListener, java.lang.Object]> {}
        interface _MBeanUtils$$static extends ClassLike {
          _booleanValue(s: string): boolean;
          _checkControl(): void;
          _checkMonitor(): void;
          _createObjectName(): javax.management.ObjectName;
          destination(recording: jdk.jfr.Recording, destination: string): string;
          _duration(s: string): java.time.Duration;
          parseBlockSize(string: string, defaultSize: int): int;
          parseTimestamp(s: string, defaultValue: java.time.Instant): java.time.Instant;
          _size(s: string): long;
          _transformList<T, R>(source: java.util.List<T>, _function: java.util.function.Function<T,R>): java.util.List<R>;
          _control: java.security.Permission;
          _monitor: java.security.Permission;
          _new(): MBeanUtils;
        }
        let MBeanUtils: _MBeanUtils$$static;
        interface _MBeanUtils {
        }
        interface MBeanUtils extends CombineTypes<[_MBeanUtils, java.lang.Object]> {}
        interface _RecordingInfo$$static extends ClassLike {
          from(cd: javax.management.openmbean.CompositeData): RecordingInfo;
          _new(recording: jdk.jfr.Recording): RecordingInfo;
        }
        let RecordingInfo: _RecordingInfo$$static;
        interface _RecordingInfo {
          getDestination(): string;
          getDumpOnExit(): boolean;
          getDuration(): long;
          getId(): long;
          getMaxAge(): long;
          getMaxSize(): long;
          getName(): string;
          getSettings(): java.util.Map<string,string>;
          getSize(): long;
          getStartTime(): long;
          getState(): string;
          getStopTime(): long;
          isToDisk(): boolean;
          toString(): string;
          _destination: string;
          _dumpOnExit: boolean;
          _durationInSeconds: long;
          _id: long;
          _maxAge: long;
          _maxSize: long;
          _name: string;
          _settings: java.util.Map<string,string>;
          _size: long;
          _startTime: long;
          _state: string;
          _stopTime: long;
          _toDisk: boolean;
        }
        interface RecordingInfo extends CombineTypes<[_RecordingInfo, java.lang.Object]> {}
        interface _RemoteRecordingStream$$static extends ClassLike {
          _checkFileAccess(directory: java.nio.file.Path): void;
          _closeSilently(f: java.io.RandomAccessFile): void;
          _createProxy(connection: javax.management.MBeanServerConnection): FlightRecorderMXBean;
          _makeTempDirectory(): java.nio.file.Path;
          _ENABLED: string;
          _OBJECT_NAME: javax.management.ObjectName;
          new(connection: javax.management.MBeanServerConnection): RemoteRecordingStream;
          new(connection: javax.management.MBeanServerConnection, directory: java.nio.file.Path): RemoteRecordingStream;
        }
        let RemoteRecordingStream: _RemoteRecordingStream$$static;
        interface _RemoteRecordingStream {
          awaitTermination(timeout: java.time.Duration): void;
          awaitTermination(): void;
          close(): void;
          _configurations(mbean: FlightRecorderMXBean): java.util.List<jdk.jfr.Configuration>;
          _createRecording(): long;
          disable(name: string): jdk.jfr.EventSettings;
          dump(destination: java.nio.file.Path): void;
          enable(name: string): jdk.jfr.EventSettings;
          _ensureStartable(): void;
          _getRecordingInfo(infos: java.util.List<RecordingInfo>, id: long): RecordingInfo;
          _isClosed(): boolean;
          onClose(action: java.lang.Runnable): void;
          onError(action: java.util.function.Consumer<java.lang.Throwable>): void;
          onEvent(action: java.util.function.Consumer<jdk.jfr.consumer.RecordedEvent>): void;
          onEvent(eventName: string, action: java.util.function.Consumer<jdk.jfr.consumer.RecordedEvent>): void;
          onFlush(action: java.lang.Runnable): void;
          onMetadata(action: java.util.function.Consumer<jdk.jfr.consumer.MetadataEvent>): void;
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
          _startDownload(): void;
          stop(): boolean;
          _updateOnCompleteHandler(): void;
          _accessControllerContext: java.security.AccessControlContext;
          _closed: boolean;
          _creationTime: java.time.Instant;
          _endTime: java.time.Instant;
          _lock: any;
          _maxAge: java.time.Duration;
          _maxSize: long;
          _mbean: FlightRecorderMXBean;
          _path: java.nio.file.Path;
          _recordingId: long;
          _repository: DiskRepository;
          _startTime: java.time.Instant;
          _started: boolean;
          _stream: jdk.jfr.consumer.EventStream;
        }
        interface RemoteRecordingStream extends CombineTypes<[_RemoteRecordingStream, java.lang.Object, jdk.jfr.consumer.EventStream]> {}
        interface _RemoteRecordingStream$ChunkConsumer$$static extends ClassLike {
          _new(repository: DiskRepository): RemoteRecordingStream$ChunkConsumer;
        }
        let RemoteRecordingStream$ChunkConsumer: _RemoteRecordingStream$ChunkConsumer$$static;
        interface _RemoteRecordingStream$ChunkConsumer {
          accept(endNanos: long): void;
          accept(a0: any): void;
          _repository: DiskRepository;
        }
        interface RemoteRecordingStream$ChunkConsumer extends CombineTypes<[_RemoteRecordingStream$ChunkConsumer, java.util.function.Consumer<long>, java.lang.Object]> {}
        interface _RemoteRecordingStream$RemoteSettings$$static extends ClassLike {
          _new(mbean: FlightRecorderMXBean, recordingId: long): RemoteRecordingStream$RemoteSettings;
        }
        let RemoteRecordingStream$RemoteSettings: _RemoteRecordingStream$RemoteSettings$$static;
        interface _RemoteRecordingStream$RemoteSettings {
          _getEventSettings(): java.util.Map<string,string>;
          toMap(): java.util.Map<string,string>;
          with(name: string, value: string): void;
          _mbean: FlightRecorderMXBean;
          _recordingId: long;
        }
        interface RemoteRecordingStream$RemoteSettings extends CombineTypes<[_RemoteRecordingStream$RemoteSettings, java.lang.Object, jdk.jfr.internal.management.EventSettingsModifier]> {}
        interface _SettingDescriptorInfo$$static extends ClassLike {
          from(cd: javax.management.openmbean.CompositeData): SettingDescriptorInfo;
          _new(settingDescriptor: jdk.jfr.SettingDescriptor): SettingDescriptorInfo;
        }
        let SettingDescriptorInfo: _SettingDescriptorInfo$$static;
        interface _SettingDescriptorInfo {
          getContentType(): string;
          getDefaultValue(): string;
          getDescription(): string;
          getLabel(): string;
          getName(): string;
          getTypeName(): string;
          toString(): string;
          _contentType: string;
          _defaultValue: string;
          _description: string;
          _label: string;
          _name: string;
          _typeName: string;
        }
        interface SettingDescriptorInfo extends CombineTypes<[_SettingDescriptorInfo, java.lang.Object]> {}
        interface _Stringifier$$static extends ClassLike {
          _new(): Stringifier;
        }
        let Stringifier: _Stringifier$$static;
        interface _Stringifier {
          add(name: string, value: any): void;
          toString(): string;
          _first: boolean;
          _sb: jfr$stringBuilder;
        }
        interface Stringifier extends CombineTypes<[_Stringifier, java.lang.Object]> {}
      }
    }
  }
}
