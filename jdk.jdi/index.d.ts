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
      module jdi {
        module connect {
          module spi {
            interface _ClosedConnectionException$$static extends ClassLike {
              _serialVersionUID: long;
              new(): ClosedConnectionException;
              new(message: string): ClosedConnectionException;
            }
            let ClosedConnectionException: _ClosedConnectionException$$static;
            interface _ClosedConnectionException {
            }
            interface ClosedConnectionException extends CombineTypes<[_ClosedConnectionException, java.io.IOException]> {}
            interface _Connection$$static extends ClassLike {
              new(): Connection;
            }
            let Connection: _Connection$$static;
            interface _Connection {
              close(): void;
              isOpen(): boolean;
              readPacket(): byte[];
              writePacket(a0: byte[]): void;
            }
            interface Connection extends CombineTypes<[_Connection, java.lang.Object]> {}
            interface _TransportService$$static extends ClassLike {
              new(): TransportService;
            }
            let TransportService: _TransportService$$static;
            interface _TransportService {
              accept(a0: TransportService$ListenKey, a1: long, a2: long): Connection;
              attach(a0: string, a1: long, a2: long): Connection;
              capabilities(): TransportService$Capabilities;
              description(): string;
              name(): string;
              startListening(a0: string): TransportService$ListenKey;
              startListening(): TransportService$ListenKey;
              stopListening(a0: TransportService$ListenKey): void;
            }
            interface TransportService extends CombineTypes<[_TransportService, java.lang.Object]> {}
            interface _TransportService$Capabilities$$static extends ClassLike {
              new(): TransportService$Capabilities;
            }
            let TransportService$Capabilities: _TransportService$Capabilities$$static;
            interface _TransportService$Capabilities {
              supportsAcceptTimeout(): boolean;
              supportsAttachTimeout(): boolean;
              supportsHandshakeTimeout(): boolean;
              supportsMultipleConnections(): boolean;
            }
            interface TransportService$Capabilities extends CombineTypes<[_TransportService$Capabilities, java.lang.Object]> {}
            interface _TransportService$ListenKey$$static extends ClassLike {
              new(): TransportService$ListenKey;
            }
            let TransportService$ListenKey: _TransportService$ListenKey$$static;
            interface _TransportService$ListenKey {
              address(): string;
(): string;
            }
            interface TransportService$ListenKey extends CombineTypes<[_TransportService$ListenKey, java.lang.Object]> {}
          }
          interface _AttachingConnector$$static extends ClassLike {
          }
          let AttachingConnector: _AttachingConnector$$static;
          interface _AttachingConnector {
            attach(a0: java.util.Map<string,Connector$Argument>): VirtualMachine;
(a0: java.util.Map<string,Connector$Argument>): VirtualMachine;
          }
          interface AttachingConnector extends CombineTypes<[_AttachingConnector, java.lang.Object, com.sun.jdi.connect.Connector]> {}
          interface _Connector$$static extends ClassLike {
          }
          let Connector: _Connector$$static;
          interface _Connector {
            defaultArguments(): java.util.Map<string,Connector$Argument>;
            description(): string;
            name(): string;
            transport(): Transport;
          }
          interface Connector extends CombineTypes<[_Connector, java.lang.Object]> {}
          interface _Connector$Argument$$static extends ClassLike {
          }
          let Connector$Argument: _Connector$Argument$$static;
          interface _Connector$Argument {
            description(): string;
            isValid(a0: string): boolean;
            label(): string;
            mustSpecify(): boolean;
            name(): string;
            setValue(a0: string): void;
            value(): string;
          }
          interface Connector$Argument extends CombineTypes<[_Connector$Argument, java.lang.Object, java.io.Serializable]> {}
          interface _Connector$BooleanArgument$$static extends ClassLike {
          }
          let Connector$BooleanArgument: _Connector$BooleanArgument$$static;
          interface _Connector$BooleanArgument {
            booleanValue(): boolean;
            isValid(a0: string): boolean;
            setValue(a0: boolean): void;
            stringValueOf(a0: boolean): string;
          }
          interface Connector$BooleanArgument extends CombineTypes<[_Connector$BooleanArgument, com.sun.jdi.connect.Connector$Argument, java.lang.Object]> {}
          interface _Connector$IntegerArgument$$static extends ClassLike {
          }
          let Connector$IntegerArgument: _Connector$IntegerArgument$$static;
          interface _Connector$IntegerArgument {
            intValue(): int;
            isValid(a0: string): boolean;
            isValid(a0: int): boolean;
            max(): int;
            min(): int;
            setValue(a0: int): void;
            stringValueOf(a0: int): string;
          }
          interface Connector$IntegerArgument extends CombineTypes<[_Connector$IntegerArgument, com.sun.jdi.connect.Connector$Argument, java.lang.Object]> {}
          interface _Connector$SelectedArgument$$static extends ClassLike {
          }
          let Connector$SelectedArgument: _Connector$SelectedArgument$$static;
          interface _Connector$SelectedArgument {
            choices(): java.util.List<string>;
            isValid(a0: string): boolean;
          }
          interface Connector$SelectedArgument extends CombineTypes<[_Connector$SelectedArgument, com.sun.jdi.connect.Connector$Argument, java.lang.Object]> {}
          interface _Connector$StringArgument$$static extends ClassLike {
          }
          let Connector$StringArgument: _Connector$StringArgument$$static;
          interface _Connector$StringArgument {
            isValid(a0: string): boolean;
(a0: string): boolean;
          }
          interface Connector$StringArgument extends CombineTypes<[_Connector$StringArgument, com.sun.jdi.connect.Connector$Argument, java.lang.Object]> {}
          interface _IllegalConnectorArgumentsException$$static extends ClassLike {
            _serialVersionUID: long;
            new(s: string, name: string): IllegalConnectorArgumentsException;
            new(s: string, names: java.util.List<string>): IllegalConnectorArgumentsException;
          }
          let IllegalConnectorArgumentsException: _IllegalConnectorArgumentsException$$static;
          interface _IllegalConnectorArgumentsException {
            argumentNames(): java.util.List<string>;
            _names: java.util.List<string>;
          }
          interface IllegalConnectorArgumentsException extends CombineTypes<[_IllegalConnectorArgumentsException, java.lang.Exception]> {}
          interface _LaunchingConnector$$static extends ClassLike {
          }
          let LaunchingConnector: _LaunchingConnector$$static;
          interface _LaunchingConnector {
            launch(a0: java.util.Map<string,Connector$Argument>): VirtualMachine;
(a0: java.util.Map<string,Connector$Argument>): VirtualMachine;
          }
          interface LaunchingConnector extends CombineTypes<[_LaunchingConnector, java.lang.Object, com.sun.jdi.connect.Connector]> {}
          interface _ListeningConnector$$static extends ClassLike {
          }
          let ListeningConnector: _ListeningConnector$$static;
          interface _ListeningConnector {
            accept(a0: java.util.Map<string,Connector$Argument>): VirtualMachine;
            startListening(a0: java.util.Map<string,Connector$Argument>): string;
            stopListening(a0: java.util.Map<string,Connector$Argument>): void;
            supportsMultipleConnections(): boolean;
          }
          interface ListeningConnector extends CombineTypes<[_ListeningConnector, java.lang.Object, com.sun.jdi.connect.Connector]> {}
          interface _Transport$$static extends ClassLike {
          }
          let Transport: _Transport$$static;
          interface _Transport {
            name(): string;
(): string;
          }
          interface Transport extends CombineTypes<[_Transport, java.lang.Object]> {}
          interface _TransportTimeoutException$$static extends ClassLike {
            _serialVersionUID: long;
            new(): TransportTimeoutException;
            new(message: string): TransportTimeoutException;
          }
          let TransportTimeoutException: _TransportTimeoutException$$static;
          interface _TransportTimeoutException {
          }
          interface TransportTimeoutException extends CombineTypes<[_TransportTimeoutException, java.io.IOException]> {}
          interface _VMStartException$$static extends ClassLike {
            _serialVersionUID: long;
            new(process: java.lang.Process): VMStartException;
            new(message: string, process: java.lang.Process): VMStartException;
          }
          let VMStartException: _VMStartException$$static;
          interface _VMStartException {
            process(): java.lang.Process;
            _process: java.lang.Process;
          }
          interface VMStartException extends CombineTypes<[_VMStartException, java.lang.Exception]> {}
        }
        module event {
          interface _AccessWatchpointEvent$$static extends ClassLike {
          }
          let AccessWatchpointEvent: _AccessWatchpointEvent$$static;
          interface _AccessWatchpointEvent {
          }
          interface AccessWatchpointEvent extends CombineTypes<[_AccessWatchpointEvent, com.sun.jdi.event.WatchpointEvent, java.lang.Object]> {}
          interface _BreakpointEvent$$static extends ClassLike {
          }
          let BreakpointEvent: _BreakpointEvent$$static;
          interface _BreakpointEvent {
          }
          interface BreakpointEvent extends CombineTypes<[_BreakpointEvent, java.lang.Object, com.sun.jdi.event.LocatableEvent]> {}
          interface _ClassPrepareEvent$$static extends ClassLike {
          }
          let ClassPrepareEvent: _ClassPrepareEvent$$static;
          interface _ClassPrepareEvent {
            referenceType(): ReferenceType;
            thread(): ThreadReference;
          }
          interface ClassPrepareEvent extends CombineTypes<[_ClassPrepareEvent, com.sun.jdi.event.Event, java.lang.Object]> {}
          interface _ClassUnloadEvent$$static extends ClassLike {
          }
          let ClassUnloadEvent: _ClassUnloadEvent$$static;
          interface _ClassUnloadEvent {
            className(): string;
            classSignature(): string;
          }
          interface ClassUnloadEvent extends CombineTypes<[_ClassUnloadEvent, com.sun.jdi.event.Event, java.lang.Object]> {}
          interface _Event$$static extends ClassLike {
          }
          let Event: _Event$$static;
          interface _Event {
            request(): jdi.request.EventRequest;
(): jdi.request.EventRequest;
          }
          interface Event extends CombineTypes<[_Event, com.sun.jdi.Mirror, java.lang.Object]> {}
          interface _EventIterator$$static extends ClassLike {
          }
          let EventIterator: _EventIterator$$static;
          interface _EventIterator {
            nextEvent(): Event;
(): Event;
          }
          interface EventIterator extends CombineTypes<[_EventIterator, java.lang.Object, java.util.Iterator<Event>]> {}
          interface _EventQueue$$static extends ClassLike {
          }
          let EventQueue: _EventQueue$$static;
          interface _EventQueue {
            remove(): EventSet;
            remove(a0: long): EventSet;
          }
          interface EventQueue extends CombineTypes<[_EventQueue, com.sun.jdi.Mirror, java.lang.Object]> {}
          interface _EventSet$$static extends ClassLike {
          }
          let EventSet: _EventSet$$static;
          interface _EventSet {
            eventIterator(): EventIterator;
            resume(): void;
            suspendPolicy(): int;
          }
          interface EventSet extends CombineTypes<[_EventSet, java.util.Set<Event>, java.lang.Object, Mirror]> {}
          interface _ExceptionEvent$$static extends ClassLike {
          }
          let ExceptionEvent: _ExceptionEvent$$static;
          interface _ExceptionEvent {
            catchLocation(): Location;
            exception(): ObjectReference;
          }
          interface ExceptionEvent extends CombineTypes<[_ExceptionEvent, java.lang.Object, com.sun.jdi.event.LocatableEvent]> {}
          interface _LocatableEvent$$static extends ClassLike {
          }
          let LocatableEvent: _LocatableEvent$$static;
          interface _LocatableEvent {
            thread(): ThreadReference;
(): ThreadReference;
          }
          interface LocatableEvent extends CombineTypes<[_LocatableEvent, com.sun.jdi.event.Event, com.sun.jdi.Locatable, java.lang.Object]> {}
          interface _MethodEntryEvent$$static extends ClassLike {
          }
          let MethodEntryEvent: _MethodEntryEvent$$static;
          interface _MethodEntryEvent {
            method(): Method;
(): Method;
          }
          interface MethodEntryEvent extends CombineTypes<[_MethodEntryEvent, java.lang.Object, com.sun.jdi.event.LocatableEvent]> {}
          interface _MethodExitEvent$$static extends ClassLike {
          }
          let MethodExitEvent: _MethodExitEvent$$static;
          interface _MethodExitEvent {
            method(): Method;
            returnValue(): Value;
          }
          interface MethodExitEvent extends CombineTypes<[_MethodExitEvent, java.lang.Object, com.sun.jdi.event.LocatableEvent]> {}
          interface _ModificationWatchpointEvent$$static extends ClassLike {
          }
          let ModificationWatchpointEvent: _ModificationWatchpointEvent$$static;
          interface _ModificationWatchpointEvent {
            valueToBe(): Value;
(): Value;
          }
          interface ModificationWatchpointEvent extends CombineTypes<[_ModificationWatchpointEvent, com.sun.jdi.event.WatchpointEvent, java.lang.Object]> {}
          interface _MonitorContendedEnterEvent$$static extends ClassLike {
          }
          let MonitorContendedEnterEvent: _MonitorContendedEnterEvent$$static;
          interface _MonitorContendedEnterEvent {
            monitor(): ObjectReference;
            thread(): ThreadReference;
          }
          interface MonitorContendedEnterEvent extends CombineTypes<[_MonitorContendedEnterEvent, java.lang.Object, com.sun.jdi.event.LocatableEvent]> {}
          interface _MonitorContendedEnteredEvent$$static extends ClassLike {
          }
          let MonitorContendedEnteredEvent: _MonitorContendedEnteredEvent$$static;
          interface _MonitorContendedEnteredEvent {
            monitor(): ObjectReference;
            thread(): ThreadReference;
          }
          interface MonitorContendedEnteredEvent extends CombineTypes<[_MonitorContendedEnteredEvent, java.lang.Object, com.sun.jdi.event.LocatableEvent]> {}
          interface _MonitorWaitEvent$$static extends ClassLike {
          }
          let MonitorWaitEvent: _MonitorWaitEvent$$static;
          interface _MonitorWaitEvent {
            monitor(): ObjectReference;
            thread(): ThreadReference;
            timeout(): long;
          }
          interface MonitorWaitEvent extends CombineTypes<[_MonitorWaitEvent, java.lang.Object, com.sun.jdi.event.LocatableEvent]> {}
          interface _MonitorWaitedEvent$$static extends ClassLike {
          }
          let MonitorWaitedEvent: _MonitorWaitedEvent$$static;
          interface _MonitorWaitedEvent {
            monitor(): ObjectReference;
            thread(): ThreadReference;
            timedout(): boolean;
          }
          interface MonitorWaitedEvent extends CombineTypes<[_MonitorWaitedEvent, java.lang.Object, com.sun.jdi.event.LocatableEvent]> {}
          interface _StepEvent$$static extends ClassLike {
          }
          let StepEvent: _StepEvent$$static;
          interface _StepEvent {
          }
          interface StepEvent extends CombineTypes<[_StepEvent, java.lang.Object, com.sun.jdi.event.LocatableEvent]> {}
          interface _ThreadDeathEvent$$static extends ClassLike {
          }
          let ThreadDeathEvent: _ThreadDeathEvent$$static;
          interface _ThreadDeathEvent {
            thread(): ThreadReference;
(): ThreadReference;
          }
          interface ThreadDeathEvent extends CombineTypes<[_ThreadDeathEvent, com.sun.jdi.event.Event, java.lang.Object]> {}
          interface _ThreadStartEvent$$static extends ClassLike {
          }
          let ThreadStartEvent: _ThreadStartEvent$$static;
          interface _ThreadStartEvent {
            thread(): ThreadReference;
(): ThreadReference;
          }
          interface ThreadStartEvent extends CombineTypes<[_ThreadStartEvent, com.sun.jdi.event.Event, java.lang.Object]> {}
          interface _VMDeathEvent$$static extends ClassLike {
          }
          let VMDeathEvent: _VMDeathEvent$$static;
          interface _VMDeathEvent {
          }
          interface VMDeathEvent extends CombineTypes<[_VMDeathEvent, com.sun.jdi.event.Event, java.lang.Object]> {}
          interface _VMDisconnectEvent$$static extends ClassLike {
          }
          let VMDisconnectEvent: _VMDisconnectEvent$$static;
          interface _VMDisconnectEvent {
          }
          interface VMDisconnectEvent extends CombineTypes<[_VMDisconnectEvent, com.sun.jdi.event.Event, java.lang.Object]> {}
          interface _VMStartEvent$$static extends ClassLike {
          }
          let VMStartEvent: _VMStartEvent$$static;
          interface _VMStartEvent {
            thread(): ThreadReference;
(): ThreadReference;
          }
          interface VMStartEvent extends CombineTypes<[_VMStartEvent, com.sun.jdi.event.Event, java.lang.Object]> {}
          interface _WatchpointEvent$$static extends ClassLike {
          }
          let WatchpointEvent: _WatchpointEvent$$static;
          interface _WatchpointEvent {
            field(): Field;
            object(): ObjectReference;
            valueCurrent(): Value;
          }
          interface WatchpointEvent extends CombineTypes<[_WatchpointEvent, java.lang.Object, com.sun.jdi.event.LocatableEvent]> {}
        }
        module request {
          interface _AccessWatchpointRequest$$static extends ClassLike {
          }
          let AccessWatchpointRequest: _AccessWatchpointRequest$$static;
          interface _AccessWatchpointRequest {
          }
          interface AccessWatchpointRequest extends CombineTypes<[_AccessWatchpointRequest, com.sun.jdi.request.WatchpointRequest, java.lang.Object]> {}
          interface _BreakpointRequest$$static extends ClassLike {
          }
          let BreakpointRequest: _BreakpointRequest$$static;
          interface _BreakpointRequest {
            addInstanceFilter(a0: ObjectReference): void;
            addThreadFilter(a0: ThreadReference): void;
            location(): Location;
          }
          interface BreakpointRequest extends CombineTypes<[_BreakpointRequest, com.sun.jdi.Locatable, com.sun.jdi.request.EventRequest, java.lang.Object]> {}
          interface _ClassPrepareRequest$$static extends ClassLike {
          }
          let ClassPrepareRequest: _ClassPrepareRequest$$static;
          interface _ClassPrepareRequest {
            addClassExclusionFilter(a0: string): void;
            addClassFilter(a0: ReferenceType): void;
            addClassFilter(a0: string): void;
            addSourceNameFilter(a0: string): void;
          }
          interface ClassPrepareRequest extends CombineTypes<[_ClassPrepareRequest, com.sun.jdi.request.EventRequest, java.lang.Object]> {}
          interface _ClassUnloadRequest$$static extends ClassLike {
          }
          let ClassUnloadRequest: _ClassUnloadRequest$$static;
          interface _ClassUnloadRequest {
            addClassExclusionFilter(a0: string): void;
            addClassFilter(a0: string): void;
          }
          interface ClassUnloadRequest extends CombineTypes<[_ClassUnloadRequest, com.sun.jdi.request.EventRequest, java.lang.Object]> {}
          interface _DuplicateRequestException$$static extends ClassLike {
            _serialVersionUID: long;
            new(): DuplicateRequestException;
            new(s: string): DuplicateRequestException;
          }
          let DuplicateRequestException: _DuplicateRequestException$$static;
          interface _DuplicateRequestException {
          }
          interface DuplicateRequestException extends CombineTypes<[_DuplicateRequestException, java.lang.RuntimeException]> {}
          interface _EventRequest$$static extends ClassLike {
            readonly SUSPEND_ALL: int;
            readonly SUSPEND_EVENT_THREAD: int;
            readonly SUSPEND_NONE: int;
          }
          let EventRequest: _EventRequest$$static;
          interface _EventRequest {
            addCountFilter(a0: int): void;
            disable(): void;
            enable(): void;
            getProperty(a0: any): any;
            isEnabled(): boolean;
            putProperty(a0: any, a1: any): void;
            setEnabled(a0: boolean): void;
            setSuspendPolicy(a0: int): void;
            suspendPolicy(): int;
          }
          interface EventRequest extends CombineTypes<[_EventRequest, com.sun.jdi.Mirror, java.lang.Object]> {}
          interface _EventRequestManager$$static extends ClassLike {
          }
          let EventRequestManager: _EventRequestManager$$static;
          interface _EventRequestManager {
            accessWatchpointRequests(): java.util.List<AccessWatchpointRequest>;
            breakpointRequests(): java.util.List<BreakpointRequest>;
            classPrepareRequests(): java.util.List<ClassPrepareRequest>;
            classUnloadRequests(): java.util.List<ClassUnloadRequest>;
            createAccessWatchpointRequest(a0: Field): AccessWatchpointRequest;
            createBreakpointRequest(a0: Location): BreakpointRequest;
            createClassPrepareRequest(): ClassPrepareRequest;
            createClassUnloadRequest(): ClassUnloadRequest;
            createExceptionRequest(a0: ReferenceType, a1: boolean, a2: boolean): ExceptionRequest;
            createMethodEntryRequest(): MethodEntryRequest;
            createMethodExitRequest(): MethodExitRequest;
            createModificationWatchpointRequest(a0: Field): ModificationWatchpointRequest;
            createMonitorContendedEnterRequest(): MonitorContendedEnterRequest;
            createMonitorContendedEnteredRequest(): MonitorContendedEnteredRequest;
            createMonitorWaitRequest(): MonitorWaitRequest;
            createMonitorWaitedRequest(): MonitorWaitedRequest;
            createStepRequest(a0: ThreadReference, a1: int, a2: int): StepRequest;
            createThreadDeathRequest(): ThreadDeathRequest;
            createThreadStartRequest(): ThreadStartRequest;
            createVMDeathRequest(): VMDeathRequest;
            deleteAllBreakpoints(): void;
            deleteEventRequest(a0: EventRequest): void;
            deleteEventRequests(a0: java.util.List<EventRequest>): void;
            exceptionRequests(): java.util.List<ExceptionRequest>;
            methodEntryRequests(): java.util.List<MethodEntryRequest>;
            methodExitRequests(): java.util.List<MethodExitRequest>;
            modificationWatchpointRequests(): java.util.List<ModificationWatchpointRequest>;
            monitorContendedEnterRequests(): java.util.List<MonitorContendedEnterRequest>;
            monitorContendedEnteredRequests(): java.util.List<MonitorContendedEnteredRequest>;
            monitorWaitRequests(): java.util.List<MonitorWaitRequest>;
            monitorWaitedRequests(): java.util.List<MonitorWaitedRequest>;
            stepRequests(): java.util.List<StepRequest>;
            threadDeathRequests(): java.util.List<ThreadDeathRequest>;
            threadStartRequests(): java.util.List<ThreadStartRequest>;
            vmDeathRequests(): java.util.List<VMDeathRequest>;
          }
          interface EventRequestManager extends CombineTypes<[_EventRequestManager, com.sun.jdi.Mirror, java.lang.Object]> {}
          interface _ExceptionRequest$$static extends ClassLike {
          }
          let ExceptionRequest: _ExceptionRequest$$static;
          interface _ExceptionRequest {
            addClassExclusionFilter(a0: string): void;
            addClassFilter(a0: ReferenceType): void;
            addClassFilter(a0: string): void;
            addInstanceFilter(a0: ObjectReference): void;
            addThreadFilter(a0: ThreadReference): void;
            exception(): ReferenceType;
            notifyCaught(): boolean;
            notifyUncaught(): boolean;
          }
          interface ExceptionRequest extends CombineTypes<[_ExceptionRequest, com.sun.jdi.request.EventRequest, java.lang.Object]> {}
          interface _InvalidRequestStateException$$static extends ClassLike {
            _serialVersionUID: long;
            new(): InvalidRequestStateException;
            new(s: string): InvalidRequestStateException;
          }
          let InvalidRequestStateException: _InvalidRequestStateException$$static;
          interface _InvalidRequestStateException {
          }
          interface InvalidRequestStateException extends CombineTypes<[_InvalidRequestStateException, java.lang.RuntimeException]> {}
          interface _MethodEntryRequest$$static extends ClassLike {
          }
          let MethodEntryRequest: _MethodEntryRequest$$static;
          interface _MethodEntryRequest {
            addClassExclusionFilter(a0: string): void;
            addClassFilter(a0: ReferenceType): void;
            addClassFilter(a0: string): void;
            addInstanceFilter(a0: ObjectReference): void;
            addThreadFilter(a0: ThreadReference): void;
          }
          interface MethodEntryRequest extends CombineTypes<[_MethodEntryRequest, com.sun.jdi.request.EventRequest, java.lang.Object]> {}
          interface _MethodExitRequest$$static extends ClassLike {
          }
          let MethodExitRequest: _MethodExitRequest$$static;
          interface _MethodExitRequest {
            addClassExclusionFilter(a0: string): void;
            addClassFilter(a0: ReferenceType): void;
            addClassFilter(a0: string): void;
            addInstanceFilter(a0: ObjectReference): void;
            addThreadFilter(a0: ThreadReference): void;
          }
          interface MethodExitRequest extends CombineTypes<[_MethodExitRequest, com.sun.jdi.request.EventRequest, java.lang.Object]> {}
          interface _ModificationWatchpointRequest$$static extends ClassLike {
          }
          let ModificationWatchpointRequest: _ModificationWatchpointRequest$$static;
          interface _ModificationWatchpointRequest {
          }
          interface ModificationWatchpointRequest extends CombineTypes<[_ModificationWatchpointRequest, com.sun.jdi.request.WatchpointRequest, java.lang.Object]> {}
          interface _MonitorContendedEnterRequest$$static extends ClassLike {
          }
          let MonitorContendedEnterRequest: _MonitorContendedEnterRequest$$static;
          interface _MonitorContendedEnterRequest {
            addClassExclusionFilter(a0: string): void;
            addClassFilter(a0: ReferenceType): void;
            addClassFilter(a0: string): void;
            addInstanceFilter(a0: ObjectReference): void;
            addThreadFilter(a0: ThreadReference): void;
          }
          interface MonitorContendedEnterRequest extends CombineTypes<[_MonitorContendedEnterRequest, com.sun.jdi.request.EventRequest, java.lang.Object]> {}
          interface _MonitorContendedEnteredRequest$$static extends ClassLike {
          }
          let MonitorContendedEnteredRequest: _MonitorContendedEnteredRequest$$static;
          interface _MonitorContendedEnteredRequest {
            addClassExclusionFilter(a0: string): void;
            addClassFilter(a0: ReferenceType): void;
            addClassFilter(a0: string): void;
            addInstanceFilter(a0: ObjectReference): void;
            addThreadFilter(a0: ThreadReference): void;
          }
          interface MonitorContendedEnteredRequest extends CombineTypes<[_MonitorContendedEnteredRequest, com.sun.jdi.request.EventRequest, java.lang.Object]> {}
          interface _MonitorWaitRequest$$static extends ClassLike {
          }
          let MonitorWaitRequest: _MonitorWaitRequest$$static;
          interface _MonitorWaitRequest {
            addClassExclusionFilter(a0: string): void;
            addClassFilter(a0: ReferenceType): void;
            addClassFilter(a0: string): void;
            addInstanceFilter(a0: ObjectReference): void;
            addThreadFilter(a0: ThreadReference): void;
          }
          interface MonitorWaitRequest extends CombineTypes<[_MonitorWaitRequest, com.sun.jdi.request.EventRequest, java.lang.Object]> {}
          interface _MonitorWaitedRequest$$static extends ClassLike {
          }
          let MonitorWaitedRequest: _MonitorWaitedRequest$$static;
          interface _MonitorWaitedRequest {
            addClassExclusionFilter(a0: string): void;
            addClassFilter(a0: ReferenceType): void;
            addClassFilter(a0: string): void;
            addInstanceFilter(a0: ObjectReference): void;
            addThreadFilter(a0: ThreadReference): void;
          }
          interface MonitorWaitedRequest extends CombineTypes<[_MonitorWaitedRequest, com.sun.jdi.request.EventRequest, java.lang.Object]> {}
          interface _StepRequest$$static extends ClassLike {
            readonly STEP_INTO: int;
            readonly STEP_LINE: int;
            readonly STEP_MIN: int;
            readonly STEP_OUT: int;
            readonly STEP_OVER: int;
          }
          let StepRequest: _StepRequest$$static;
          interface _StepRequest {
            addClassExclusionFilter(a0: string): void;
            addClassFilter(a0: ReferenceType): void;
            addClassFilter(a0: string): void;
            addInstanceFilter(a0: ObjectReference): void;
            depth(): int;
            size(): int;
            thread(): ThreadReference;
          }
          interface StepRequest extends CombineTypes<[_StepRequest, com.sun.jdi.request.EventRequest, java.lang.Object]> {}
          interface _ThreadDeathRequest$$static extends ClassLike {
          }
          let ThreadDeathRequest: _ThreadDeathRequest$$static;
          interface _ThreadDeathRequest {
            addPlatformThreadsOnlyFilter(): void;
            addThreadFilter(a0: ThreadReference): void;
(a0: ThreadReference): void;
          }
          interface ThreadDeathRequest extends CombineTypes<[_ThreadDeathRequest, com.sun.jdi.request.EventRequest, java.lang.Object]> {}
          interface _ThreadStartRequest$$static extends ClassLike {
          }
          let ThreadStartRequest: _ThreadStartRequest$$static;
          interface _ThreadStartRequest {
            addPlatformThreadsOnlyFilter(): void;
            addThreadFilter(a0: ThreadReference): void;
(a0: ThreadReference): void;
          }
          interface ThreadStartRequest extends CombineTypes<[_ThreadStartRequest, com.sun.jdi.request.EventRequest, java.lang.Object]> {}
          interface _VMDeathRequest$$static extends ClassLike {
          }
          let VMDeathRequest: _VMDeathRequest$$static;
          interface _VMDeathRequest {
          }
          interface VMDeathRequest extends CombineTypes<[_VMDeathRequest, com.sun.jdi.request.EventRequest, java.lang.Object]> {}
          interface _WatchpointRequest$$static extends ClassLike {
          }
          let WatchpointRequest: _WatchpointRequest$$static;
          interface _WatchpointRequest {
            addClassExclusionFilter(a0: string): void;
            addClassFilter(a0: ReferenceType): void;
            addClassFilter(a0: string): void;
            addInstanceFilter(a0: ObjectReference): void;
            addThreadFilter(a0: ThreadReference): void;
            field(): Field;
          }
          interface WatchpointRequest extends CombineTypes<[_WatchpointRequest, com.sun.jdi.request.EventRequest, java.lang.Object]> {}
        }
        interface _AbsentInformationException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): AbsentInformationException;
          new(s: string): AbsentInformationException;
        }
        let AbsentInformationException: _AbsentInformationException$$static;
        interface _AbsentInformationException {
        }
        interface AbsentInformationException extends CombineTypes<[_AbsentInformationException, java.lang.Exception]> {}
        interface _Accessible$$static extends ClassLike {
        }
        let Accessible: _Accessible$$static;
        interface _Accessible {
          isPackagePrivate(): boolean;
          isPrivate(): boolean;
          isProtected(): boolean;
          isPublic(): boolean;
          modifiers(): int;
        }
        interface Accessible extends CombineTypes<[_Accessible, java.lang.Object]> {}
        interface _ArrayReference$$static extends ClassLike {
        }
        let ArrayReference: _ArrayReference$$static;
        interface _ArrayReference {
          getValue(a0: int): Value;
          getValues(): java.util.List<Value>;
          getValues(a0: int, a1: int): java.util.List<Value>;
          length(): int;
          setValue(a0: int, a1: Value): void;
          setValues(a0: java.util.List<Value>): void;
          setValues(a0: int, a1: java.util.List<Value>, a2: int, a3: int): void;
        }
        interface ArrayReference extends CombineTypes<[_ArrayReference, java.lang.Object, com.sun.jdi.ObjectReference]> {}
        interface _ArrayType$$static extends ClassLike {
        }
        let ArrayType: _ArrayType$$static;
        interface _ArrayType {
          componentSignature(): string;
          componentType(): Type;
          componentTypeName(): string;
          newInstance(a0: int): ArrayReference;
        }
        interface ArrayType extends CombineTypes<[_ArrayType, com.sun.jdi.ReferenceType, java.lang.Object]> {}
        interface _BooleanType$$static extends ClassLike {
        }
        let BooleanType: _BooleanType$$static;
        interface _BooleanType {
        }
        interface BooleanType extends CombineTypes<[_BooleanType, java.lang.Object, com.sun.jdi.PrimitiveType]> {}
        interface _BooleanValue$$static extends ClassLike {
        }
        let BooleanValue: _BooleanValue$$static;
        interface _BooleanValue {
          equals(a0: any): boolean;
          hashCode(): int;
          value(): boolean;
        }
        interface BooleanValue extends CombineTypes<[_BooleanValue, com.sun.jdi.PrimitiveValue, java.lang.Object]> {}
        interface _Bootstrap$$static extends ClassLike {
          virtualMachineManager(): VirtualMachineManager;
          new(): Bootstrap;
        }
        let Bootstrap: _Bootstrap$$static;
        interface _Bootstrap {
        }
        interface Bootstrap extends CombineTypes<[_Bootstrap, java.lang.Object]> {}
        interface _ByteType$$static extends ClassLike {
        }
        let ByteType: _ByteType$$static;
        interface _ByteType {
        }
        interface ByteType extends CombineTypes<[_ByteType, java.lang.Object, com.sun.jdi.PrimitiveType]> {}
        interface _ByteValue$$static extends ClassLike {
        }
        let ByteValue: _ByteValue$$static;
        interface _ByteValue {
          equals(a0: any): boolean;
          hashCode(): int;
          value(): byte;
        }
        interface ByteValue extends CombineTypes<[_ByteValue, java.lang.Comparable<ByteValue>, java.lang.Object, PrimitiveValue]> {}
        interface _CharType$$static extends ClassLike {
        }
        let CharType: _CharType$$static;
        interface _CharType {
        }
        interface CharType extends CombineTypes<[_CharType, java.lang.Object, com.sun.jdi.PrimitiveType]> {}
        interface _CharValue$$static extends ClassLike {
        }
        let CharValue: _CharValue$$static;
        interface _CharValue {
          equals(a0: any): boolean;
          hashCode(): int;
          value(): char;
        }
        interface CharValue extends CombineTypes<[_CharValue, java.lang.Object, java.lang.Comparable<CharValue>, PrimitiveValue]> {}
        interface _ClassLoaderReference$$static extends ClassLike {
        }
        let ClassLoaderReference: _ClassLoaderReference$$static;
        interface _ClassLoaderReference {
          definedClasses(): java.util.List<ReferenceType>;
          visibleClasses(): java.util.List<ReferenceType>;
        }
        interface ClassLoaderReference extends CombineTypes<[_ClassLoaderReference, java.lang.Object, com.sun.jdi.ObjectReference]> {}
        interface _ClassNotLoadedException$$static extends ClassLike {
          _serialVersionUID: long;
          new(className: string): ClassNotLoadedException;
          new(className: string, message: string): ClassNotLoadedException;
        }
        let ClassNotLoadedException: _ClassNotLoadedException$$static;
        interface _ClassNotLoadedException {
          className(): string;
          _className: string;
        }
        interface ClassNotLoadedException extends CombineTypes<[_ClassNotLoadedException, java.lang.Exception]> {}
        interface _ClassNotPreparedException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): ClassNotPreparedException;
          new(s: string): ClassNotPreparedException;
        }
        let ClassNotPreparedException: _ClassNotPreparedException$$static;
        interface _ClassNotPreparedException {
        }
        interface ClassNotPreparedException extends CombineTypes<[_ClassNotPreparedException, java.lang.RuntimeException]> {}
        interface _ClassObjectReference$$static extends ClassLike {
        }
        let ClassObjectReference: _ClassObjectReference$$static;
        interface _ClassObjectReference {
          reflectedType(): ReferenceType;
(): ReferenceType;
        }
        interface ClassObjectReference extends CombineTypes<[_ClassObjectReference, java.lang.Object, com.sun.jdi.ObjectReference]> {}
        interface _ClassType$$static extends ClassLike {
          readonly INVOKE_SINGLE_THREADED: int;
        }
        let ClassType: _ClassType$$static;
        interface _ClassType {
          allInterfaces(): java.util.List<InterfaceType>;
          concreteMethodByName(a0: string, a1: string): Method;
          interfaces(): java.util.List<InterfaceType>;
          invokeMethod(a0: ThreadReference, a1: Method, a2: java.util.List<Value>, a3: int): Value;
          isEnum(): boolean;
          newInstance(a0: ThreadReference, a1: Method, a2: java.util.List<Value>, a3: int): ObjectReference;
          setValue(a0: Field, a1: Value): void;
          subclasses(): java.util.List<ClassType>;
          superclass(): ClassType;
        }
        interface ClassType extends CombineTypes<[_ClassType, com.sun.jdi.ReferenceType, java.lang.Object]> {}
        interface _DoubleType$$static extends ClassLike {
        }
        let DoubleType: _DoubleType$$static;
        interface _DoubleType {
        }
        interface DoubleType extends CombineTypes<[_DoubleType, java.lang.Object, com.sun.jdi.PrimitiveType]> {}
        interface _DoubleValue$$static extends ClassLike {
        }
        let DoubleValue: _DoubleValue$$static;
        interface _DoubleValue {
          equals(a0: any): boolean;
          hashCode(): int;
          value(): double;
        }
        interface DoubleValue extends CombineTypes<[_DoubleValue, java.lang.Object, java.lang.Comparable<DoubleValue>, PrimitiveValue]> {}
        interface _Field$$static extends ClassLike {
        }
        let Field: _Field$$static;
        interface _Field {
          equals(a0: any): boolean;
          hashCode(): int;
          isEnumConstant(): boolean;
          isTransient(): boolean;
          isVolatile(): boolean;
          type(): Type;
          typeName(): string;
        }
        interface Field extends CombineTypes<[_Field, java.lang.Comparable<Field>, java.lang.Object, TypeComponent]> {}
        interface _FloatType$$static extends ClassLike {
        }
        let FloatType: _FloatType$$static;
        interface _FloatType {
        }
        interface FloatType extends CombineTypes<[_FloatType, java.lang.Object, com.sun.jdi.PrimitiveType]> {}
        interface _FloatValue$$static extends ClassLike {
        }
        let FloatValue: _FloatValue$$static;
        interface _FloatValue {
          equals(a0: any): boolean;
          hashCode(): int;
          value(): float;
        }
        interface FloatValue extends CombineTypes<[_FloatValue, java.lang.Comparable<FloatValue>, java.lang.Object, PrimitiveValue]> {}
        interface _IncompatibleThreadStateException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): IncompatibleThreadStateException;
          new(s: string): IncompatibleThreadStateException;
        }
        let IncompatibleThreadStateException: _IncompatibleThreadStateException$$static;
        interface _IncompatibleThreadStateException {
        }
        interface IncompatibleThreadStateException extends CombineTypes<[_IncompatibleThreadStateException, java.lang.Exception]> {}
        interface _InconsistentDebugInfoException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): InconsistentDebugInfoException;
          new(s: string): InconsistentDebugInfoException;
        }
        let InconsistentDebugInfoException: _InconsistentDebugInfoException$$static;
        interface _InconsistentDebugInfoException {
        }
        interface InconsistentDebugInfoException extends CombineTypes<[_InconsistentDebugInfoException, java.lang.RuntimeException]> {}
        interface _IntegerType$$static extends ClassLike {
        }
        let IntegerType: _IntegerType$$static;
        interface _IntegerType {
        }
        interface IntegerType extends CombineTypes<[_IntegerType, java.lang.Object, com.sun.jdi.PrimitiveType]> {}
        interface _IntegerValue$$static extends ClassLike {
        }
        let IntegerValue: _IntegerValue$$static;
        interface _IntegerValue {
          equals(a0: any): boolean;
          hashCode(): int;
          value(): int;
        }
        interface IntegerValue extends CombineTypes<[_IntegerValue, java.lang.Object, java.lang.Comparable<IntegerValue>, PrimitiveValue]> {}
        interface _InterfaceType$$static extends ClassLike {
        }
        let InterfaceType: _InterfaceType$$static;
        interface _InterfaceType {
          implementors(): java.util.List<ClassType>;
          invokeMethod(thread: ThreadReference, method: Method, arguments: java.util.List<Value>, options: int): Value;
          subinterfaces(): java.util.List<InterfaceType>;
          superinterfaces(): java.util.List<InterfaceType>;
        }
        interface InterfaceType extends CombineTypes<[_InterfaceType, com.sun.jdi.ReferenceType, java.lang.Object]> {}
        interface _InternalException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): InternalException;
          new(s: string): InternalException;
          new(errorCode: int): InternalException;
          new(s: string, errorCode: int): InternalException;
        }
        let InternalException: _InternalException$$static;
        interface _InternalException {
          errorCode(): int;
          _errorCode: int;
        }
        interface InternalException extends CombineTypes<[_InternalException, java.lang.RuntimeException]> {}
        interface _InvalidCodeIndexException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): InvalidCodeIndexException;
          new(s: string): InvalidCodeIndexException;
        }
        let InvalidCodeIndexException: _InvalidCodeIndexException$$static;
        interface _InvalidCodeIndexException {
        }
        interface InvalidCodeIndexException extends CombineTypes<[_InvalidCodeIndexException, java.lang.RuntimeException]> {}
        interface _InvalidLineNumberException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): InvalidLineNumberException;
          new(s: string): InvalidLineNumberException;
        }
        let InvalidLineNumberException: _InvalidLineNumberException$$static;
        interface _InvalidLineNumberException {
        }
        interface InvalidLineNumberException extends CombineTypes<[_InvalidLineNumberException, java.lang.RuntimeException]> {}
        interface _InvalidModuleException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): InvalidModuleException;
          new(msg: string): InvalidModuleException;
        }
        let InvalidModuleException: _InvalidModuleException$$static;
        interface _InvalidModuleException {
        }
        interface InvalidModuleException extends CombineTypes<[_InvalidModuleException, java.lang.RuntimeException]> {}
        interface _InvalidStackFrameException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): InvalidStackFrameException;
          new(s: string): InvalidStackFrameException;
        }
        let InvalidStackFrameException: _InvalidStackFrameException$$static;
        interface _InvalidStackFrameException {
        }
        interface InvalidStackFrameException extends CombineTypes<[_InvalidStackFrameException, java.lang.RuntimeException]> {}
        interface _InvalidTypeException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): InvalidTypeException;
          new(s: string): InvalidTypeException;
        }
        let InvalidTypeException: _InvalidTypeException$$static;
        interface _InvalidTypeException {
        }
        interface InvalidTypeException extends CombineTypes<[_InvalidTypeException, java.lang.Exception]> {}
        interface _InvocationException$$static extends ClassLike {
          _serialVersionUID: long;
          new(exception: ObjectReference): InvocationException;
        }
        let InvocationException: _InvocationException$$static;
        interface _InvocationException {
          exception(): ObjectReference;
          _exception: ObjectReference;
        }
        interface InvocationException extends CombineTypes<[_InvocationException, java.lang.Exception]> {}
        interface _JDIPermission$$static extends ClassLike {
          _serialVersionUID: long;
          new(name: string): JDIPermission;
          new(name: string, actions: string): JDIPermission;
        }
        let JDIPermission: _JDIPermission$$static;
        interface _JDIPermission {
        }
        interface JDIPermission extends CombineTypes<[_JDIPermission, java.security.BasicPermission]> {}
        interface _LocalVariable$$static extends ClassLike {
        }
        let LocalVariable: _LocalVariable$$static;
        interface _LocalVariable {
          equals(a0: any): boolean;
          genericSignature(): string;
          hashCode(): int;
          isArgument(): boolean;
          isVisible(a0: StackFrame): boolean;
          name(): string;
          signature(): string;
          type(): Type;
          typeName(): string;
        }
        interface LocalVariable extends CombineTypes<[_LocalVariable, java.lang.Comparable<LocalVariable>, java.lang.Object, Mirror]> {}
        interface _Locatable$$static extends ClassLike {
        }
        let Locatable: _Locatable$$static;
        interface _Locatable {
          location(): Location;
(): Location;
        }
        interface Locatable extends CombineTypes<[_Locatable, java.lang.Object]> {}
        interface _Location$$static extends ClassLike {
        }
        let Location: _Location$$static;
        interface _Location {
          codeIndex(): long;
          declaringType(): ReferenceType;
          equals(a0: any): boolean;
          hashCode(): int;
          lineNumber(): int;
          lineNumber(a0: string): int;
          method(): Method;
          sourceName(): string;
          sourceName(a0: string): string;
          sourcePath(): string;
          sourcePath(a0: string): string;
        }
        interface Location extends CombineTypes<[_Location, java.lang.Comparable<Location>, java.lang.Object, Mirror]> {}
        interface _LongType$$static extends ClassLike {
        }
        let LongType: _LongType$$static;
        interface _LongType {
        }
        interface LongType extends CombineTypes<[_LongType, java.lang.Object, com.sun.jdi.PrimitiveType]> {}
        interface _LongValue$$static extends ClassLike {
        }
        let LongValue: _LongValue$$static;
        interface _LongValue {
          equals(a0: any): boolean;
          hashCode(): int;
          value(): long;
        }
        interface LongValue extends CombineTypes<[_LongValue, java.lang.Object, PrimitiveValue, java.lang.Comparable<LongValue>]> {}
        interface _Method$$static extends ClassLike {
        }
        let Method: _Method$$static;
        interface _Method {
          allLineLocations(): java.util.List<Location>;
          allLineLocations(a0: string, a1: string): java.util.List<Location>;
          argumentTypeNames(): java.util.List<string>;
          argumentTypes(): java.util.List<Type>;
          arguments(): java.util.List<LocalVariable>;
          bytecodes(): byte[];
          equals(a0: any): boolean;
          hashCode(): int;
          isAbstract(): boolean;
          isBridge(): boolean;
          isConstructor(): boolean;
          isDefault(): boolean;
          isNative(): boolean;
          isObsolete(): boolean;
          isStaticInitializer(): boolean;
          isSynchronized(): boolean;
          isVarArgs(): boolean;
          location(): Location;
          locationOfCodeIndex(a0: long): Location;
          locationsOfLine(a0: int): java.util.List<Location>;
          locationsOfLine(a0: string, a1: string, a2: int): java.util.List<Location>;
          returnType(): Type;
          returnTypeName(): string;
          variables(): java.util.List<LocalVariable>;
          variablesByName(a0: string): java.util.List<LocalVariable>;
        }
        interface Method extends CombineTypes<[_Method, java.lang.Comparable<Method>, java.lang.Object, TypeComponent, Locatable]> {}
        interface _Mirror$$static extends ClassLike {
        }
        let Mirror: _Mirror$$static;
        interface _Mirror {
          toString(): string;
          virtualMachine(): VirtualMachine;
        }
        interface Mirror extends CombineTypes<[_Mirror, java.lang.Object]> {}
        interface _ModuleReference$$static extends ClassLike {
        }
        let ModuleReference: _ModuleReference$$static;
        interface _ModuleReference {
          classLoader(): ClassLoaderReference;
          name(): string;
        }
        interface ModuleReference extends CombineTypes<[_ModuleReference, java.lang.Object, com.sun.jdi.ObjectReference]> {}
        interface _MonitorInfo$$static extends ClassLike {
        }
        let MonitorInfo: _MonitorInfo$$static;
        interface _MonitorInfo {
          monitor(): ObjectReference;
          stackDepth(): int;
          thread(): ThreadReference;
        }
        interface MonitorInfo extends CombineTypes<[_MonitorInfo, com.sun.jdi.Mirror, java.lang.Object]> {}
        interface _NativeMethodException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): NativeMethodException;
          new(message: string): NativeMethodException;
        }
        let NativeMethodException: _NativeMethodException$$static;
        interface _NativeMethodException {
        }
        interface NativeMethodException extends CombineTypes<[_NativeMethodException, com.sun.jdi.OpaqueFrameException]> {}
        interface _ObjectCollectedException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): ObjectCollectedException;
          new(s: string): ObjectCollectedException;
        }
        let ObjectCollectedException: _ObjectCollectedException$$static;
        interface _ObjectCollectedException {
        }
        interface ObjectCollectedException extends CombineTypes<[_ObjectCollectedException, java.lang.RuntimeException]> {}
        interface _ObjectReference$$static extends ClassLike {
          readonly INVOKE_NONVIRTUAL: int;
          readonly INVOKE_SINGLE_THREADED: int;
        }
        let ObjectReference: _ObjectReference$$static;
        interface _ObjectReference {
          disableCollection(): void;
          enableCollection(): void;
          entryCount(): int;
          equals(a0: any): boolean;
          getValue(a0: Field): Value;
          getValues(a0: java.util.List<Field>): java.util.Map<Field,Value>;
          hashCode(): int;
          invokeMethod(a0: ThreadReference, a1: Method, a2: java.util.List<Value>, a3: int): Value;
          isCollected(): boolean;
          owningThread(): ThreadReference;
          referenceType(): ReferenceType;
          referringObjects(a0: long): java.util.List<ObjectReference>;
          setValue(a0: Field, a1: Value): void;
          uniqueID(): long;
          waitingThreads(): java.util.List<ThreadReference>;
        }
        interface ObjectReference extends CombineTypes<[_ObjectReference, java.lang.Object, com.sun.jdi.Value]> {}
        interface _OpaqueFrameException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): OpaqueFrameException;
          new(message: string): OpaqueFrameException;
        }
        let OpaqueFrameException: _OpaqueFrameException$$static;
        interface _OpaqueFrameException {
        }
        interface OpaqueFrameException extends CombineTypes<[_OpaqueFrameException, java.lang.RuntimeException]> {}
        interface _PathSearchingVirtualMachine$$static extends ClassLike {
        }
        let PathSearchingVirtualMachine: _PathSearchingVirtualMachine$$static;
        interface _PathSearchingVirtualMachine {
          baseDirectory(): string;
          bootClassPath(): java.util.List<string>;
          classPath(): java.util.List<string>;
        }
        interface PathSearchingVirtualMachine extends CombineTypes<[_PathSearchingVirtualMachine, com.sun.jdi.VirtualMachine, java.lang.Object]> {}
        interface _PrimitiveType$$static extends ClassLike {
        }
        let PrimitiveType: _PrimitiveType$$static;
        interface _PrimitiveType {
        }
        interface PrimitiveType extends CombineTypes<[_PrimitiveType, com.sun.jdi.Type, java.lang.Object]> {}
        interface _PrimitiveValue$$static extends ClassLike {
        }
        let PrimitiveValue: _PrimitiveValue$$static;
        interface _PrimitiveValue {
          booleanValue(): boolean;
          byteValue(): byte;
          charValue(): char;
          doubleValue(): double;
          floatValue(): float;
          intValue(): int;
          longValue(): long;
          shortValue(): short;
        }
        interface PrimitiveValue extends CombineTypes<[_PrimitiveValue, java.lang.Object, com.sun.jdi.Value]> {}
        interface _ReferenceType$$static extends ClassLike {
        }
        let ReferenceType: _ReferenceType$$static;
        interface _ReferenceType {
          allFields(): java.util.List<Field>;
          allLineLocations(): java.util.List<Location>;
          allLineLocations(a0: string, a1: string): java.util.List<Location>;
          allMethods(): java.util.List<Method>;
          availableStrata(): java.util.List<string>;
          classLoader(): ClassLoaderReference;
          classObject(): ClassObjectReference;
          constantPool(): byte[];
          constantPoolCount(): int;
          defaultStratum(): string;
          equals(a0: any): boolean;
          failedToInitialize(): boolean;
          fieldByName(a0: string): Field;
          fields(): java.util.List<Field>;
          genericSignature(): string;
          getValue(a0: Field): Value;
          getValues(a0: java.util.List<Field>): java.util.Map<Field,Value>;
          hashCode(): int;
          instances(a0: long): java.util.List<ObjectReference>;
          isAbstract(): boolean;
          isFinal(): boolean;
          isInitialized(): boolean;
          isPrepared(): boolean;
          isStatic(): boolean;
          isVerified(): boolean;
          locationsOfLine(a0: int): java.util.List<Location>;
          locationsOfLine(a0: string, a1: string, a2: int): java.util.List<Location>;
          majorVersion(): int;
          methods(): java.util.List<Method>;
          methodsByName(a0: string): java.util.List<Method>;
          methodsByName(a0: string, a1: string): java.util.List<Method>;
          minorVersion(): int;
          module(): ModuleReference;
          name(): string;
          nestedTypes(): java.util.List<ReferenceType>;
          sourceDebugExtension(): string;
          sourceName(): string;
          sourceNames(a0: string): java.util.List<string>;
          sourcePaths(a0: string): java.util.List<string>;
          visibleFields(): java.util.List<Field>;
          visibleMethods(): java.util.List<Method>;
        }
        interface ReferenceType extends CombineTypes<[_ReferenceType, Type, java.lang.Comparable<ReferenceType>, java.lang.Object, Accessible]> {}
        interface _ShortType$$static extends ClassLike {
        }
        let ShortType: _ShortType$$static;
        interface _ShortType {
        }
        interface ShortType extends CombineTypes<[_ShortType, java.lang.Object, com.sun.jdi.PrimitiveType]> {}
        interface _ShortValue$$static extends ClassLike {
        }
        let ShortValue: _ShortValue$$static;
        interface _ShortValue {
          equals(a0: any): boolean;
          hashCode(): int;
          value(): short;
        }
        interface ShortValue extends CombineTypes<[_ShortValue, java.lang.Object, java.lang.Comparable<ShortValue>, PrimitiveValue]> {}
        interface _StackFrame$$static extends ClassLike {
        }
        let StackFrame: _StackFrame$$static;
        interface _StackFrame {
          getArgumentValues(): java.util.List<Value>;
          getValue(a0: LocalVariable): Value;
          getValues(a0: java.util.List<LocalVariable>): java.util.Map<LocalVariable,Value>;
          location(): Location;
          setValue(a0: LocalVariable, a1: Value): void;
          thisObject(): ObjectReference;
          thread(): ThreadReference;
          visibleVariableByName(a0: string): LocalVariable;
          visibleVariables(): java.util.List<LocalVariable>;
        }
        interface StackFrame extends CombineTypes<[_StackFrame, com.sun.jdi.Mirror, com.sun.jdi.Locatable, java.lang.Object]> {}
        interface _StringReference$$static extends ClassLike {
        }
        let StringReference: _StringReference$$static;
        interface _StringReference {
          value(): string;
(): string;
        }
        interface StringReference extends CombineTypes<[_StringReference, java.lang.Object, com.sun.jdi.ObjectReference]> {}
        interface _ThreadGroupReference$$static extends ClassLike {
        }
        let ThreadGroupReference: _ThreadGroupReference$$static;
        interface _ThreadGroupReference {
          name(): string;
          parent(): ThreadGroupReference;
          resume(): void;
          suspend(): void;
          threadGroups(): java.util.List<ThreadGroupReference>;
          threads(): java.util.List<ThreadReference>;
        }
        interface ThreadGroupReference extends CombineTypes<[_ThreadGroupReference, java.lang.Object, com.sun.jdi.ObjectReference]> {}
        interface _ThreadReference$$static extends ClassLike {
          readonly THREAD_STATUS_MONITOR: int;
          readonly THREAD_STATUS_NOT_STARTED: int;
          readonly THREAD_STATUS_RUNNING: int;
          readonly THREAD_STATUS_SLEEPING: int;
          readonly THREAD_STATUS_UNKNOWN: int;
          readonly THREAD_STATUS_WAIT: int;
          readonly THREAD_STATUS_ZOMBIE: int;
        }
        let ThreadReference: _ThreadReference$$static;
        interface _ThreadReference {
          currentContendedMonitor(): ObjectReference;
          forceEarlyReturn(a0: Value): void;
          frame(a0: int): StackFrame;
          frameCount(): int;
          frames(): java.util.List<StackFrame>;
          frames(a0: int, a1: int): java.util.List<StackFrame>;
          interrupt(): void;
          isAtBreakpoint(): boolean;
          isSuspended(): boolean;
          isVirtual(): boolean;
          name(): string;
          ownedMonitors(): java.util.List<ObjectReference>;
          ownedMonitorsAndFrames(): java.util.List<MonitorInfo>;
          popFrames(a0: StackFrame): void;
          resume(): void;
          status(): int;
          stop(a0: ObjectReference): void;
          suspend(): void;
          suspendCount(): int;
          threadGroup(): ThreadGroupReference;
        }
        interface ThreadReference extends CombineTypes<[_ThreadReference, java.lang.Object, com.sun.jdi.ObjectReference]> {}
        interface _Type$$static extends ClassLike {
        }
        let Type: _Type$$static;
        interface _Type {
          name(): string;
          signature(): string;
        }
        interface Type extends CombineTypes<[_Type, com.sun.jdi.Mirror, java.lang.Object]> {}
        interface _TypeComponent$$static extends ClassLike {
        }
        let TypeComponent: _TypeComponent$$static;
        interface _TypeComponent {
          declaringType(): ReferenceType;
          genericSignature(): string;
          isFinal(): boolean;
          isStatic(): boolean;
          isSynthetic(): boolean;
          name(): string;
          signature(): string;
        }
        interface TypeComponent extends CombineTypes<[_TypeComponent, com.sun.jdi.Accessible, com.sun.jdi.Mirror, java.lang.Object]> {}
        interface _VMCannotBeModifiedException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): VMCannotBeModifiedException;
          new(s: string): VMCannotBeModifiedException;
        }
        let VMCannotBeModifiedException: _VMCannotBeModifiedException$$static;
        interface _VMCannotBeModifiedException {
        }
        interface VMCannotBeModifiedException extends CombineTypes<[_VMCannotBeModifiedException, java.lang.UnsupportedOperationException]> {}
        interface _VMDisconnectedException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): VMDisconnectedException;
          new(message: string): VMDisconnectedException;
        }
        let VMDisconnectedException: _VMDisconnectedException$$static;
        interface _VMDisconnectedException {
        }
        interface VMDisconnectedException extends CombineTypes<[_VMDisconnectedException, java.lang.RuntimeException]> {}
        interface _VMMismatchException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): VMMismatchException;
          new(s: string): VMMismatchException;
        }
        let VMMismatchException: _VMMismatchException$$static;
        interface _VMMismatchException {
        }
        interface VMMismatchException extends CombineTypes<[_VMMismatchException, java.lang.RuntimeException]> {}
        interface _VMOutOfMemoryException$$static extends ClassLike {
          _serialVersionUID: long;
          new(): VMOutOfMemoryException;
          new(s: string): VMOutOfMemoryException;
        }
        let VMOutOfMemoryException: _VMOutOfMemoryException$$static;
        interface _VMOutOfMemoryException {
        }
        interface VMOutOfMemoryException extends CombineTypes<[_VMOutOfMemoryException, java.lang.RuntimeException]> {}
        interface _Value$$static extends ClassLike {
        }
        let Value: _Value$$static;
        interface _Value {
          type(): Type;
(): Type;
        }
        interface Value extends CombineTypes<[_Value, com.sun.jdi.Mirror, java.lang.Object]> {}
        interface _VirtualMachine$$static extends ClassLike {
          readonly TRACE_ALL: int;
          readonly TRACE_EVENTS: int;
          readonly TRACE_NONE: int;
          readonly TRACE_OBJREFS: int;
          readonly TRACE_RECEIVES: int;
          readonly TRACE_REFTYPES: int;
          readonly TRACE_SENDS: int;
        }
        let VirtualMachine: _VirtualMachine$$static;
        interface _VirtualMachine {
          allClasses(): java.util.List<ReferenceType>;
          allModules(): java.util.List<ModuleReference>;
          allThreads(): java.util.List<ThreadReference>;
          canAddMethod(): boolean;
          canBeModified(): boolean;
          canForceEarlyReturn(): boolean;
          canGetBytecodes(): boolean;
          canGetClassFileVersion(): boolean;
          canGetConstantPool(): boolean;
          canGetCurrentContendedMonitor(): boolean;
          canGetInstanceInfo(): boolean;
          canGetMethodReturnValues(): boolean;
          canGetModuleInfo(): boolean;
          canGetMonitorFrameInfo(): boolean;
          canGetMonitorInfo(): boolean;
          canGetOwnedMonitorInfo(): boolean;
          canGetSourceDebugExtension(): boolean;
          canGetSyntheticAttribute(): boolean;
          canPopFrames(): boolean;
          canRedefineClasses(): boolean;
          canRequestMonitorEvents(): boolean;
          canRequestVMDeathEvent(): boolean;
          canUnrestrictedlyRedefineClasses(): boolean;
          canUseInstanceFilters(): boolean;
          canUseSourceNameFilters(): boolean;
          canWatchFieldAccess(): boolean;
          canWatchFieldModification(): boolean;
          classesByName(a0: string): java.util.List<ReferenceType>;
          description(): string;
          dispose(): void;
          eventQueue(): jdi.event.EventQueue;
          eventRequestManager(): jdi.request.EventRequestManager;
          exit(a0: int): void;
          getDefaultStratum(): string;
          instanceCounts(a0: java.util.List<ReferenceType>): long[];
          mirrorOf(a0: boolean): BooleanValue;
          mirrorOf(a0: byte): ByteValue;
          mirrorOf(a0: char): CharValue;
          mirrorOf(a0: short): ShortValue;
          mirrorOf(a0: int): IntegerValue;
          mirrorOf(a0: long): LongValue;
          mirrorOf(a0: float): FloatValue;
          mirrorOf(a0: double): DoubleValue;
          mirrorOf(a0: string): StringReference;
          mirrorOfVoid(): VoidValue;
          name(): string;
          process(): java.lang.Process;
          redefineClasses(a0: java.util.Map<ReferenceType,byte[]>): void;
          resume(): void;
          setDebugTraceMode(a0: int): void;
          setDefaultStratum(a0: string): void;
          suspend(): void;
          topLevelThreadGroups(): java.util.List<ThreadGroupReference>;
          version(): string;
        }
        interface VirtualMachine extends CombineTypes<[_VirtualMachine, com.sun.jdi.Mirror, java.lang.Object]> {}
        interface _VirtualMachineManager$$static extends ClassLike {
        }
        let VirtualMachineManager: _VirtualMachineManager$$static;
        interface _VirtualMachineManager {
          allConnectors(): java.util.List<jdi.connect.Connector>;
          attachingConnectors(): java.util.List<jdi.connect.AttachingConnector>;
          connectedVirtualMachines(): java.util.List<VirtualMachine>;
          createVirtualMachine(a0: jdi.connect.spi.Connection, a1: java.lang.Process): VirtualMachine;
          createVirtualMachine(a0: jdi.connect.spi.Connection): VirtualMachine;
          defaultConnector(): jdi.connect.LaunchingConnector;
          launchingConnectors(): java.util.List<jdi.connect.LaunchingConnector>;
          listeningConnectors(): java.util.List<jdi.connect.ListeningConnector>;
          majorInterfaceVersion(): int;
          minorInterfaceVersion(): int;
        }
        interface VirtualMachineManager extends CombineTypes<[_VirtualMachineManager, java.lang.Object]> {}
        interface _VoidType$$static extends ClassLike {
        }
        let VoidType: _VoidType$$static;
        interface _VoidType {
        }
        interface VoidType extends CombineTypes<[_VoidType, com.sun.jdi.Type, java.lang.Object]> {}
        interface _VoidValue$$static extends ClassLike {
        }
        let VoidValue: _VoidValue$$static;
        interface _VoidValue {
          equals(a0: any): boolean;
          hashCode(): int;
        }
        interface VoidValue extends CombineTypes<[_VoidValue, java.lang.Object, com.sun.jdi.Value]> {}
      }
      module tools {
        module example {
          module debug {
            module expr {
              interface _ASCII_UCodeESC_CharStream$$static extends ClassLike {
                _hexval(c: char): int;
                readonly staticFlag: boolean;
                new(dstream: java.io.InputStream, startline: int, startcolumn: int, buffersize: int): ASCII_UCodeESC_CharStream;
                new(dstream: java.io.InputStream, startline: int, startcolumn: int): ASCII_UCodeESC_CharStream;
              }
              let ASCII_UCodeESC_CharStream: _ASCII_UCodeESC_CharStream$$static;
              interface _ASCII_UCodeESC_CharStream {
                _AdjustBuffSize(): void;
                BeginToken(): char;
                Done(): void;
                _ExpandBuff(wrapAround: boolean): void;
                _FillBuff(): void;
                GetImage(): string;
                GetSuffix(len: int): char[];
                ReInit(dstream: java.io.InputStream, startline: int, startcolumn: int, buffersize: int): void;
                ReInit(dstream: java.io.InputStream, startline: int, startcolumn: int): void;
                _ReadByte(): byte;
                _UpdateLineColumn(c: char): void;
                adjustBeginLineColumn(newLine: int, newCol: int): void;
                backup(amount: int): void;
                getBeginColumn(): int;
                getBeginLine(): int;
                getColumn(): int;
                getEndColumn(): int;
                getEndLine(): int;
                getLine(): int;
                readChar(): char;
                _available: int;
                _bufcolumn: int[];
                _buffer: char[];
                _bufline: int[];
                bufpos: int;
                _bufsize: int;
                _column: int;
                _inBuf: int;
                _inputStream: java.io.InputStream;
                _line: int;
                _maxNextCharInd: int;
                _nextCharBuf: byte[];
                _nextCharInd: int;
                _prevCharIsCR: boolean;
                _prevCharIsLF: boolean;
                _tokenBegin: int;
              }
              interface ASCII_UCodeESC_CharStream extends CombineTypes<[_ASCII_UCodeESC_CharStream, java.lang.Object]> {}
              interface _ExpressionParser$$static extends ClassLike {
                evaluate(expr: string, vm: sun.jdi.VirtualMachine, frameGetter: ExpressionParser$GetFrame): sun.jdi.Value;
                getMassagedValue(): sun.jdi.Value;
                _jj_la1_init_0(): void;
                _jj_la1_init_1(): void;
                _jj_la1_init_2(): void;
                _jj_la1_init_3(): void;
                main(args: string[]): void;
                _jj_la1_0: int[];
                _jj_la1_1: int[];
                _jj_la1_2: int[];
                _jj_la1_3: int[];
                _lastFrameGetter: ExpressionParser$GetFrame;
                _lastLValue: LValue;
                new(stream: java.io.InputStream): ExpressionParser;
                new(stream: java.io.InputStream, encoding: string): ExpressionParser;
                new(stream: java.io.Reader): ExpressionParser;
                new(tm: ExpressionParserTokenManager): ExpressionParser;
              }
              let ExpressionParser: _ExpressionParser$$static;
              interface _ExpressionParser {
                AdditiveExpression(): void;
                AllocationExpression(): void;
                AndExpression(): void;
                ArgumentList(argList: java.util.List<sun.jdi.Value>): void;
                Arguments(): java.util.List<sun.jdi.Value>;
                ArrayDimensions(): void;
                Assignment(): void;
                AssignmentOperator(): void;
                BooleanLiteral(): void;
                CastExpression(): void;
                CastLookahead(): void;
                ConditionalAndExpression(): void;
                ConditionalExpression(): void;
                ConditionalOrExpression(): void;
                EqualityExpression(): void;
                ExclusiveOrExpression(): void;
                Expression(): void;
                InclusiveOrExpression(): void;
                InstanceOfExpression(): void;
                Literal(): void;
                MultiplicativeExpression(): void;
                Name(): string;
                NameList(): void;
                NullLiteral(): void;
                PostfixExpression(): void;
                PreDecrementExpression(): void;
                PreIncrementExpression(): void;
                PrimaryExpression(): void;
                PrimaryPrefix(): void;
                PrimarySuffix(): void;
                PrimitiveType(): void;
                ReInit(stream: java.io.InputStream): void;
                ReInit(stream: java.io.InputStream, encoding: string): void;
                ReInit(stream: java.io.Reader): void;
                ReInit(tm: ExpressionParserTokenManager): void;
                RelationalExpression(): void;
                ShiftExpression(): void;
                Type(): void;
                UnaryExpression(): void;
                UnaryExpressionNotPlusMinus(): void;
                disable_tracing(): void;
                enable_tracing(): void;
                generateParseException(): ParseException;
                getNextToken(): Token;
                getToken(index: int): Token;
                _jj_2_1(xla: int): boolean;
                _jj_2_2(xla: int): boolean;
                _jj_2_3(xla: int): boolean;
                _jj_2_4(xla: int): boolean;
                _jj_2_5(xla: int): boolean;
                _jj_2_6(xla: int): boolean;
                _jj_2_7(xla: int): boolean;
                _jj_2_8(xla: int): boolean;
                _jj_2_9(xla: int): boolean;
                _jj_3R_100(): boolean;
                _jj_3R_101(): boolean;
                _jj_3R_102(): boolean;
                _jj_3R_103(): boolean;
                _jj_3R_104(): boolean;
                _jj_3R_105(): boolean;
                _jj_3R_106(): boolean;
                _jj_3R_20(): boolean;
                _jj_3R_21(): boolean;
                _jj_3R_22(): boolean;
                _jj_3R_23(): boolean;
                _jj_3R_24(): boolean;
                _jj_3R_25(): boolean;
                _jj_3R_26(): boolean;
                _jj_3R_27(): boolean;
                _jj_3R_28(): boolean;
                _jj_3R_29(): boolean;
                _jj_3R_30(): boolean;
                _jj_3R_31(): boolean;
                _jj_3R_32(): boolean;
                _jj_3R_33(): boolean;
                _jj_3R_34(): boolean;
                _jj_3R_35(): boolean;
                _jj_3R_36(): boolean;
                _jj_3R_37(): boolean;
                _jj_3R_38(): boolean;
                _jj_3R_39(): boolean;
                _jj_3R_40(): boolean;
                _jj_3R_41(): boolean;
                _jj_3R_42(): boolean;
                _jj_3R_43(): boolean;
                _jj_3R_44(): boolean;
                _jj_3R_45(): boolean;
                _jj_3R_46(): boolean;
                _jj_3R_47(): boolean;
                _jj_3R_48(): boolean;
                _jj_3R_49(): boolean;
                _jj_3R_50(): boolean;
                _jj_3R_51(): boolean;
                _jj_3R_52(): boolean;
                _jj_3R_53(): boolean;
                _jj_3R_54(): boolean;
                _jj_3R_55(): boolean;
                _jj_3R_56(): boolean;
                _jj_3R_57(): boolean;
                _jj_3R_58(): boolean;
                _jj_3R_59(): boolean;
                _jj_3R_60(): boolean;
                _jj_3R_61(): boolean;
                _jj_3R_62(): boolean;
                _jj_3R_63(): boolean;
                _jj_3R_64(): boolean;
                _jj_3R_65(): boolean;
                _jj_3R_66(): boolean;
                _jj_3R_67(): boolean;
                _jj_3R_68(): boolean;
                _jj_3R_69(): boolean;
                _jj_3R_70(): boolean;
                _jj_3R_71(): boolean;
                _jj_3R_72(): boolean;
                _jj_3R_73(): boolean;
                _jj_3R_74(): boolean;
                _jj_3R_75(): boolean;
                _jj_3R_76(): boolean;
                _jj_3R_77(): boolean;
                _jj_3R_78(): boolean;
                _jj_3R_79(): boolean;
                _jj_3R_80(): boolean;
                _jj_3R_81(): boolean;
                _jj_3R_82(): boolean;
                _jj_3R_83(): boolean;
                _jj_3R_84(): boolean;
                _jj_3R_85(): boolean;
                _jj_3R_86(): boolean;
                _jj_3R_87(): boolean;
                _jj_3R_88(): boolean;
                _jj_3R_89(): boolean;
                _jj_3R_90(): boolean;
                _jj_3R_91(): boolean;
                _jj_3R_92(): boolean;
                _jj_3R_93(): boolean;
                _jj_3R_94(): boolean;
                _jj_3R_95(): boolean;
                _jj_3R_96(): boolean;
                _jj_3R_97(): boolean;
                _jj_3R_98(): boolean;
                _jj_3R_99(): boolean;
                _jj_3_1(): boolean;
                _jj_3_2(): boolean;
                _jj_3_3(): boolean;
                _jj_3_4(): boolean;
                _jj_3_5(): boolean;
                _jj_3_6(): boolean;
                _jj_3_7(): boolean;
                _jj_3_8(): boolean;
                _jj_3_9(): boolean;
                _jj_add_error_token(kind: int, pos: int): void;
                _jj_consume_token(kind: int): Token;
                _jj_ntk(): int;
                _jj_rescan_token(): void;
                _jj_save(index: int, xla: int): void;
                _jj_scan_token(kind: int): boolean;
                _peek(): LValue;
                _pop(): LValue;
                _push(lval: LValue): void;
                _frameGetter: ExpressionParser$GetFrame;
                _jj_2_rtns: ExpressionParser$JJCalls[];
                _jj_endpos: int;
                _jj_expentries: java.util.List<int[]>;
                _jj_expentry: int[];
                _jj_gc: int;
                _jj_gen: int;
                _jj_input_stream: JavaCharStream;
                _jj_kind: int;
                _jj_la: int;
                _jj_la1: int[];
                _jj_lastpos: Token;
                _jj_lasttokens: int[];
                _jj_ls: ExpressionParser$LookaheadSuccess;
                jj_nt: Token;
                _jj_ntk: int;
                _jj_rescan: boolean;
                _jj_scanpos: Token;
                _stack: java.util.Stack<LValue>;
                token: Token;
                token_source: ExpressionParserTokenManager;
                _vm: sun.jdi.VirtualMachine;
              }
              interface ExpressionParser extends CombineTypes<[_ExpressionParser, com.sun.tools.example.debug.expr.ExpressionParserConstants, java.lang.Object]> {}
              interface _ExpressionParser$GetFrame$$static extends ClassLike {
              }
              let ExpressionParser$GetFrame: _ExpressionParser$GetFrame$$static;
              interface _ExpressionParser$GetFrame {
                get(): sun.jdi.StackFrame;
(): sun.jdi.StackFrame;
              }
              interface ExpressionParser$GetFrame extends CombineTypes<[_ExpressionParser$GetFrame, java.lang.Object]> {}
              interface _ExpressionParser$JJCalls$$static extends ClassLike {
                _new(): ExpressionParser$JJCalls;
              }
              let ExpressionParser$JJCalls: _ExpressionParser$JJCalls$$static;
              interface _ExpressionParser$JJCalls {
                _arg: int;
                _first: Token;
                _gen: int;
                _next: ExpressionParser$JJCalls;
              }
              interface ExpressionParser$JJCalls extends CombineTypes<[_ExpressionParser$JJCalls, java.lang.Object]> {}
              interface _ExpressionParser$LookaheadSuccess$$static extends ClassLike {
              }
              let ExpressionParser$LookaheadSuccess: _ExpressionParser$LookaheadSuccess$$static;
              interface _ExpressionParser$LookaheadSuccess {
              }
              interface ExpressionParser$LookaheadSuccess extends CombineTypes<[_ExpressionParser$LookaheadSuccess, java.lang.Error]> {}
              interface _ExpressionParserConstants$$static extends ClassLike {
                readonly ABSTRACT: int;
                readonly ANDASSIGN: int;
                readonly ASSIGN: int;
                readonly BANG: int;
                readonly BIT_AND: int;
                readonly BIT_OR: int;
                readonly BOOLEAN: int;
                readonly BREAK: int;
                readonly BYTE: int;
                readonly CASE: int;
                readonly CATCH: int;
                readonly CHAR: int;
                readonly CHARACTER_LITERAL: int;
                readonly CLASS: int;
                readonly COLON: int;
                readonly COMMA: int;
                readonly CONST: int;
                readonly CONTINUE: int;
                readonly DECIMAL_LITERAL: int;
                readonly DECR: int;
                readonly DEFAULT: int;
                readonly DIGIT: int;
                readonly DO: int;
                readonly DOT: int;
                readonly DOUBLE: int;
                readonly ELSE: int;
                readonly EOF: int;
                readonly EQ: int;
                readonly EXPONENT: int;
                readonly EXTENDS: int;
                readonly FALSE: int;
                readonly FINAL: int;
                readonly FINALLY: int;
                readonly FLOAT: int;
                readonly FLOATING_POINT_LITERAL: int;
                readonly FOR: int;
                readonly FORMAL_COMMENT: int;
                readonly GE: int;
                readonly GOTO: int;
                readonly GT: int;
                readonly HEX_LITERAL: int;
                readonly HOOK: int;
                readonly IDENTIFIER: int;
                readonly IF: int;
                readonly IMPLEMENTS: int;
                readonly IMPORT: int;
                readonly INCR: int;
                readonly INSTANCEOF: int;
                readonly INT: int;
                readonly INTEGER_LITERAL: int;
                readonly INTERFACE: int;
                readonly LBRACE: int;
                readonly LBRACKET: int;
                readonly LE: int;
                readonly LETTER: int;
                readonly LONG: int;
                readonly LPAREN: int;
                readonly LSHIFT: int;
                readonly LSHIFTASSIGN: int;
                readonly LT: int;
                readonly MINUS: int;
                readonly MINUSASSIGN: int;
                readonly MULTI_LINE_COMMENT: int;
                readonly NATIVE: int;
                readonly NE: int;
                readonly NEW: int;
                readonly NULL: int;
                readonly OCTAL_LITERAL: int;
                readonly ORASSIGN: int;
                readonly PACKAGE: int;
                readonly PLUS: int;
                readonly PLUSASSIGN: int;
                readonly PRIVATE: int;
                readonly PROTECTED: int;
                readonly PUBLIC: int;
                readonly RBRACE: int;
                readonly RBRACKET: int;
                readonly REM: int;
                readonly REMASSIGN: int;
                readonly RETURN: int;
                readonly RPAREN: int;
                readonly RSIGNEDSHIFT: int;
                readonly RSIGNEDSHIFTASSIGN: int;
                readonly RUNSIGNEDSHIFT: int;
                readonly RUNSIGNEDSHIFTASSIGN: int;
                readonly SC_AND: int;
                readonly SC_OR: int;
                readonly SEMICOLON: int;
                readonly SHORT: int;
                readonly SINGLE_LINE_COMMENT: int;
                readonly SLASH: int;
                readonly SLASHASSIGN: int;
                readonly STAR: int;
                readonly STARASSIGN: int;
                readonly STATIC: int;
                readonly STRING_LITERAL: int;
                readonly SUPER: int;
                readonly SWITCH: int;
                readonly SYNCHRONIZED: int;
                readonly THIS: int;
                readonly THROW: int;
                readonly THROWS: int;
                readonly TILDE: int;
                readonly TRANSIENT: int;
                readonly TRUE: int;
                readonly TRY: int;
                readonly VOID: int;
                readonly VOLATILE: int;
                readonly WHILE: int;
                readonly XOR: int;
                readonly XORASSIGN: int;
                readonly _DEFAULT: int;
                readonly tokenImage: string[];
              }
              let ExpressionParserConstants: _ExpressionParserConstants$$static;
              interface _ExpressionParserConstants {
              }
              interface ExpressionParserConstants extends CombineTypes<[_ExpressionParserConstants, java.lang.Object]> {}
              interface _ExpressionParserTokenManager$$static extends ClassLike {
                _jjCanMove_0(hiByte: int, i1: int, i2: int, l1: long, a4: long): boolean;
                _jjCanMove_1(hiByte: int, i1: int, i2: int, l1: long, a4: long): boolean;
                _jjbitVec0: long[];
                _jjbitVec2: long[];
                _jjbitVec3: long[];
                _jjbitVec4: long[];
                _jjbitVec5: long[];
                _jjbitVec6: long[];
                _jjbitVec7: long[];
                _jjbitVec8: long[];
                _jjnextStates: int[];
                readonly jjstrLiteralImages: string[];
                _jjtoSkip: long[];
                _jjtoSpecial: long[];
                _jjtoToken: long[];
                readonly lexStateNames: string[];
                new(stream: JavaCharStream): ExpressionParserTokenManager;
                new(stream: JavaCharStream, lexState: int): ExpressionParserTokenManager;
              }
              let ExpressionParserTokenManager: _ExpressionParserTokenManager$$static;
              interface _ExpressionParserTokenManager {
                ReInit(stream: JavaCharStream): void;
                ReInit(stream: JavaCharStream, lexState: int): void;
                _ReInitRounds(): void;
                SwitchTo(lexState: int): void;
                getNextToken(): Token;
                _jjAddStates(start: int, end: int): void;
                _jjCheckNAdd(state: int): void;
                _jjCheckNAddStates(start: int, end: int): void;
                _jjCheckNAddTwoStates(state1: int, state2: int): void;
                _jjFillToken(): Token;
                _jjMoveNfa_0(startState: int, curPos: int): int;
                _jjMoveStringLiteralDfa0_0(): int;
                _jjMoveStringLiteralDfa10_0(old0: long, a1: long): int;
                _jjMoveStringLiteralDfa11_0(old0: long, a1: long): int;
                _jjMoveStringLiteralDfa1_0(active0: long, a1: long): int;
                _jjMoveStringLiteralDfa2_0(old0: long, a1: long, active0: long, a3: long): int;
                _jjMoveStringLiteralDfa3_0(old0: long, a1: long, active0: long, a3: long): int;
                _jjMoveStringLiteralDfa4_0(old0: long, a1: long, active0: long, a3: long): int;
                _jjMoveStringLiteralDfa5_0(old0: long, a1: long): int;
                _jjMoveStringLiteralDfa6_0(old0: long, a1: long): int;
                _jjMoveStringLiteralDfa7_0(old0: long, a1: long): int;
                _jjMoveStringLiteralDfa8_0(old0: long, a1: long): int;
                _jjMoveStringLiteralDfa9_0(old0: long, a1: long): int;
                _jjStartNfaWithStates_0(pos: int, kind: int, state: int): int;
                _jjStartNfa_0(pos: int, active0: long, a2: long): int;
                _jjStopAtPos(pos: int, kind: int): int;
                _jjStopStringLiteralDfa_0(pos: int, active0: long, a2: long): int;
                setDebugStream(ds: java.io.PrintStream): void;
                _curChar: char;
                _curLexState: int;
                debugStream: java.io.PrintStream;
                _defaultLexState: int;
                _input_stream: JavaCharStream;
                _jjmatchedKind: int;
                _jjmatchedPos: int;
                _jjnewStateCnt: int;
                _jjround: int;
                _jjrounds: int[];
                _jjstateSet: int[];
              }
              interface ExpressionParserTokenManager extends CombineTypes<[_ExpressionParserTokenManager, com.sun.tools.example.debug.expr.ExpressionParserConstants, java.lang.Object]> {}
              interface _JavaCharStream$$static extends ClassLike {
                _hexval(c: char): int;
                readonly staticFlag: boolean;
                new(dstream: java.io.Reader, startline: int, startcolumn: int, buffersize: int): JavaCharStream;
                new(dstream: java.io.Reader, startline: int, startcolumn: int): JavaCharStream;
                new(dstream: java.io.Reader): JavaCharStream;
                new(dstream: java.io.InputStream, encoding: string, startline: int, startcolumn: int, buffersize: int): JavaCharStream;
                new(dstream: java.io.InputStream, startline: int, startcolumn: int, buffersize: int): JavaCharStream;
                new(dstream: java.io.InputStream, encoding: string, startline: int, startcolumn: int): JavaCharStream;
                new(dstream: java.io.InputStream, startline: int, startcolumn: int): JavaCharStream;
                new(dstream: java.io.InputStream, encoding: string): JavaCharStream;
                new(dstream: java.io.InputStream): JavaCharStream;
              }
              let JavaCharStream: _JavaCharStream$$static;
              interface _JavaCharStream {
                _AdjustBuffSize(): void;
                BeginToken(): char;
                Done(): void;
                _ExpandBuff(wrapAround: boolean): void;
                _FillBuff(): void;
                GetImage(): string;
                GetSuffix(len: int): char[];
                ReInit(dstream: java.io.Reader, startline: int, startcolumn: int, buffersize: int): void;
                ReInit(dstream: java.io.Reader, startline: int, startcolumn: int): void;
                ReInit(dstream: java.io.Reader): void;
                ReInit(dstream: java.io.InputStream, encoding: string, startline: int, startcolumn: int, buffersize: int): void;
                ReInit(dstream: java.io.InputStream, startline: int, startcolumn: int, buffersize: int): void;
                ReInit(dstream: java.io.InputStream, encoding: string, startline: int, startcolumn: int): void;
                ReInit(dstream: java.io.InputStream, startline: int, startcolumn: int): void;
                ReInit(dstream: java.io.InputStream, encoding: string): void;
                ReInit(dstream: java.io.InputStream): void;
                _ReadByte(): char;
                _UpdateLineColumn(c: char): void;
                adjustBeginLineColumn(newLine: int, newCol: int): void;
                backup(amount: int): void;
                getBeginColumn(): int;
                getBeginLine(): int;
                getColumn(): int;
                getEndColumn(): int;
                getEndLine(): int;
                getLine(): int;
                _getTabSize(i: int): int;
                readChar(): char;
                _setTabSize(i: int): void;
                _available: int;
                _bufcolumn: int[];
                _buffer: char[];
                _bufline: int[];
                bufpos: int;
                _bufsize: int;
                _column: int;
                _inBuf: int;
                _inputStream: java.io.Reader;
                _line: int;
                _maxNextCharInd: int;
                _nextCharBuf: char[];
                _nextCharInd: int;
                _prevCharIsCR: boolean;
                _prevCharIsLF: boolean;
                _tabSize: int;
                _tokenBegin: int;
              }
              interface JavaCharStream extends CombineTypes<[_JavaCharStream, java.lang.Object]> {}
              interface _LValue$$static extends ClassLike {
                _argumentsMatch(argTypes: java.util.List<sun.jdi.Type>, arguments: java.util.List<sun.jdi.Value>): int;
                _booleanOperation(vm: sun.jdi.VirtualMachine, token: Token, rightL: LValue, leftL: LValue): LValue;
                _fieldByName(refType: sun.jdi.ReferenceType, name: string, kind: int): sun.jdi.Field;
                _isArrayAssignableTo(fromType: sun.jdi.ArrayType, toType: sun.jdi.Type): boolean;
                _isAssignableTo(fromType: sun.jdi.Type, toType: sun.jdi.Type): boolean;
                _isComponentAssignable(fromType: sun.jdi.Type, toType: sun.jdi.Type): boolean;
                _make(vm: sun.jdi.VirtualMachine, val: boolean): LValue;
                _make(vm: sun.jdi.VirtualMachine, val: byte): LValue;
                _make(vm: sun.jdi.VirtualMachine, val: char): LValue;
                _make(vm: sun.jdi.VirtualMachine, val: short): LValue;
                _make(vm: sun.jdi.VirtualMachine, val: int): LValue;
                _make(vm: sun.jdi.VirtualMachine, val: long): LValue;
                _make(vm: sun.jdi.VirtualMachine, val: float): LValue;
                _make(vm: sun.jdi.VirtualMachine, val: double): LValue;
                _make(vm: sun.jdi.VirtualMachine, val: string): LValue;
                _makeBoolean(vm: sun.jdi.VirtualMachine, token: Token): LValue;
                _makeByte(vm: sun.jdi.VirtualMachine, token: Token): LValue;
                _makeCharacter(vm: sun.jdi.VirtualMachine, token: Token): LValue;
                _makeDouble(vm: sun.jdi.VirtualMachine, token: Token): LValue;
                _makeFloat(vm: sun.jdi.VirtualMachine, token: Token): LValue;
                _makeInteger(vm: sun.jdi.VirtualMachine, token: Token): LValue;
                _makeLong(vm: sun.jdi.VirtualMachine, token: Token): LValue;
                _makeName(vm: sun.jdi.VirtualMachine, frameGetter: ExpressionParser$GetFrame, name: string): LValue;
                _makeNewObject(vm: sun.jdi.VirtualMachine, frameGetter: ExpressionParser$GetFrame, className: string, arguments: java.util.List<sun.jdi.Value>): LValue;
                _makeNull(vm: sun.jdi.VirtualMachine, token: Token): LValue;
                _makeShort(vm: sun.jdi.VirtualMachine, token: Token): LValue;
                _makeString(vm: sun.jdi.VirtualMachine, token: Token): LValue;
                _makeThisObject(vm: sun.jdi.VirtualMachine, frameGetter: ExpressionParser$GetFrame, token: Token): LValue;
                _methodsByName(refType: sun.jdi.ReferenceType, name: string, kind: int): java.util.List<sun.jdi.Method>;
                _nFields(lval: LValue, izer: java.util.StringTokenizer, thread: sun.jdi.ThreadReference): LValue;
                _operation(vm: sun.jdi.VirtualMachine, token: Token, rightL: LValue, leftL: LValue, frameGetter: ExpressionParser$GetFrame): LValue;
                _operation(vm: sun.jdi.VirtualMachine, token: Token, rightL: LValue, frameGetter: ExpressionParser$GetFrame): LValue;
                _resolveOverload(overloads: java.util.List<sun.jdi.Method>, arguments: java.util.List<sun.jdi.Value>): sun.jdi.Method;
                _stringValue(lval: LValue, frameGetter: ExpressionParser$GetFrame): string;
                _ASSIGNABLE: int;
                _DIFFERENT: int;
                _INSTANCE: int;
                _SAME: int;
                _STATIC: int;
                _primitiveTypeNames: java.util.List<string>;
                _new(): LValue;
              }
              let LValue: _LValue$$static;
              interface _LValue {
                _arrayElementLValue(lval: LValue): LValue;
                _getMassagedValue(frameGetter: ExpressionParser$GetFrame): sun.jdi.Value;
                _getValue(): sun.jdi.Value;
                _interiorGetValue(): sun.jdi.Value;
                _invokeWith(a0: java.util.List<sun.jdi.Value>): void;
                _memberLValue(frameGetter: ExpressionParser$GetFrame, fieldName: string): LValue;
                _memberLValue(fieldName: string, thread: sun.jdi.ThreadReference): LValue;
                _setValue(value: sun.jdi.Value): void;
                _setValue(lval: LValue): void;
                _setValue0(a0: sun.jdi.Value): void;
                toString(): string;
                _jdiValue: sun.jdi.Value;
              }
              interface LValue extends CombineTypes<[_LValue, java.lang.Object]> {}
              interface _LValue$LValueArrayElement$$static extends ClassLike {
                _new(value: sun.jdi.Value, index: int): LValue$LValueArrayElement;
              }
              let LValue$LValueArrayElement: _LValue$LValueArrayElement$$static;
              interface _LValue$LValueArrayElement {
                _getValue(): sun.jdi.Value;
                _invokeWith(arguments: java.util.List<sun.jdi.Value>): void;
                _setValue0(val: sun.jdi.Value): void;
                _array: sun.jdi.ArrayReference;
                _index: int;
              }
              interface LValue$LValueArrayElement extends CombineTypes<[_LValue$LValueArrayElement, com.sun.tools.example.debug.expr.LValue]> {}
              interface _LValue$LValueArrayLength$$static extends ClassLike {
                _new(value: sun.jdi.ArrayReference): LValue$LValueArrayLength;
              }
              let LValue$LValueArrayLength: _LValue$LValueArrayLength$$static;
              interface _LValue$LValueArrayLength {
                _getValue(): sun.jdi.Value;
                _invokeWith(arguments: java.util.List<sun.jdi.Value>): void;
                _setValue0(value: sun.jdi.Value): void;
                _arrayRef: sun.jdi.ArrayReference;
              }
              interface LValue$LValueArrayLength extends CombineTypes<[_LValue$LValueArrayLength, com.sun.tools.example.debug.expr.LValue]> {}
              interface _LValue$LValueConstant$$static extends ClassLike {
                _new(value: sun.jdi.Value): LValue$LValueConstant;
              }
              let LValue$LValueConstant: _LValue$LValueConstant$$static;
              interface _LValue$LValueConstant {
                _getValue(): sun.jdi.Value;
                _invokeWith(arguments: java.util.List<sun.jdi.Value>): void;
                _setValue0(val: sun.jdi.Value): void;
                _value: sun.jdi.Value;
              }
              interface LValue$LValueConstant extends CombineTypes<[_LValue$LValueConstant, com.sun.tools.example.debug.expr.LValue]> {}
              interface _LValue$LValueInstanceMember$$static extends ClassLike {
                _new(value: sun.jdi.Value, memberName: string, thread: sun.jdi.ThreadReference): LValue$LValueInstanceMember;
              }
              let LValue$LValueInstanceMember: _LValue$LValueInstanceMember$$static;
              interface _LValue$LValueInstanceMember {
                _getValue(): sun.jdi.Value;
                _invokeWith(arguments: java.util.List<sun.jdi.Value>): void;
                _setValue0(val: sun.jdi.Value): void;
                _matchingField: sun.jdi.Field;
                _matchingMethod: sun.jdi.Method;
                _methodArguments: java.util.List<sun.jdi.Value>;
                _obj: sun.jdi.ObjectReference;
                _overloads: java.util.List<sun.jdi.Method>;
                _thread: sun.jdi.ThreadReference;
              }
              interface LValue$LValueInstanceMember extends CombineTypes<[_LValue$LValueInstanceMember, com.sun.tools.example.debug.expr.LValue]> {}
              interface _LValue$LValueLocal$$static extends ClassLike {
                _new(frame: sun.jdi.StackFrame, _var: sun.jdi.LocalVariable): LValue$LValueLocal;
              }
              let LValue$LValueLocal: _LValue$LValueLocal$$static;
              interface _LValue$LValueLocal {
                _getValue(): sun.jdi.Value;
                _invokeWith(arguments: java.util.List<sun.jdi.Value>): void;
                _setValue0(val: sun.jdi.Value): void;
                _frame: sun.jdi.StackFrame;
                _var: sun.jdi.LocalVariable;
              }
              interface LValue$LValueLocal extends CombineTypes<[_LValue$LValueLocal, com.sun.tools.example.debug.expr.LValue]> {}
              interface _LValue$LValueStaticMember$$static extends ClassLike {
                _new(refType: sun.jdi.ReferenceType, memberName: string, thread: sun.jdi.ThreadReference): LValue$LValueStaticMember;
              }
              let LValue$LValueStaticMember: _LValue$LValueStaticMember$$static;
              interface _LValue$LValueStaticMember {
                _getValue(): sun.jdi.Value;
                _invokeWith(arguments: java.util.List<sun.jdi.Value>): void;
                _setValue0(val: sun.jdi.Value): void;
                _matchingField: sun.jdi.Field;
                _matchingMethod: sun.jdi.Method;
                _methodArguments: java.util.List<sun.jdi.Value>;
                _overloads: java.util.List<sun.jdi.Method>;
                _refType: sun.jdi.ReferenceType;
                _thread: sun.jdi.ThreadReference;
              }
              interface LValue$LValueStaticMember extends CombineTypes<[_LValue$LValueStaticMember, com.sun.tools.example.debug.expr.LValue]> {}
              interface _ParseException$$static extends ClassLike {
                _add_escapes(str: string): string;
                _initialise(currentToken: Token, expectedTokenSequences: int[][], tokenImage: string[]): string;
                _serialVersionUID: long;
                new(currentTokenVal: Token, expectedTokenSequencesVal: int[][], tokenImageVal: string[]): ParseException;
                new(): ParseException;
                new(message: string): ParseException;
              }
              let ParseException: _ParseException$$static;
              interface _ParseException {
                currentToken: Token;
                _eol: string;
                expectedTokenSequences: int[][];
                tokenImage: string[];
              }
              interface ParseException extends CombineTypes<[_ParseException, java.lang.Exception]> {}
              interface _Token$$static extends ClassLike {
                newToken(ofKind: int, image: string): Token;
                newToken(ofKind: int): Token;
                _serialVersionUID: long;
                new(): Token;
                new(kind: int): Token;
                new(kind: int, image: string): Token;
              }
              let Token: _Token$$static;
              interface _Token {
                getValue(): any;
                toString(): string;
                beginColumn: int;
                beginLine: int;
                endColumn: int;
                endLine: int;
                image: string;
                kind: int;
                next: Token;
                specialToken: Token;
              }
              interface Token extends CombineTypes<[_Token, java.lang.Object, java.io.Serializable]> {}
              interface _TokenMgrError$$static extends ClassLike {
                _LexicalError(EOFSeen: boolean, lexState: int, errorLine: int, errorColumn: int, errorAfter: string, curChar: char): string;
                _addEscapes(str: string): string;
                _INVALID_LEXICAL_STATE: int;
                _LEXICAL_ERROR: int;
                _LOOP_DETECTED: int;
                _STATIC_LEXER_ERROR: int;
                _serialVersionUID: long;
                new(): TokenMgrError;
                new(message: string, reason: int): TokenMgrError;
                new(EOFSeen: boolean, lexState: int, errorLine: int, errorColumn: int, errorAfter: string, curChar: char, reason: int): TokenMgrError;
              }
              let TokenMgrError: _TokenMgrError$$static;
              interface _TokenMgrError {
                getMessage(): string;
                _errorCode: int;
              }
              interface TokenMgrError extends CombineTypes<[_TokenMgrError, java.lang.Error]> {}
            }
            module tty {
              interface _AccessWatchpointSpec$$static extends ClassLike {
                _new(refSpec: ReferenceTypeSpec, fieldId: string): AccessWatchpointSpec;
              }
              let AccessWatchpointSpec: _AccessWatchpointSpec$$static;
              interface _AccessWatchpointSpec {
                _resolveEventRequest(refType: sun.jdi.ReferenceType): sun.jdi.request.EventRequest;
                toString(): string;
              }
              interface AccessWatchpointSpec extends CombineTypes<[_AccessWatchpointSpec, com.sun.tools.example.debug.tty.WatchpointSpec]> {}
              interface _AmbiguousMethodException$$static extends ClassLike {
                _serialVersionUID: long;
                new(): AmbiguousMethodException;
                new(s: string): AmbiguousMethodException;
              }
              let AmbiguousMethodException: _AmbiguousMethodException$$static;
              interface _AmbiguousMethodException {
              }
              interface AmbiguousMethodException extends CombineTypes<[_AmbiguousMethodException, java.lang.Exception]> {}
              interface _BreakpointSpec$$static extends ClassLike {
                readonly locationTokenDelimiter: string;
                _new(refSpec: ReferenceTypeSpec, lineNumber: int, threadFilter: sun.jdi.ThreadReference): BreakpointSpec;
                _new(refSpec: ReferenceTypeSpec, methodId: string, threadFilter: sun.jdi.ThreadReference, methodArgs: java.util.List<string>): BreakpointSpec;
              }
              let BreakpointSpec: _BreakpointSpec$$static;
              interface _BreakpointSpec {
                _compareArgTypes(method: sun.jdi.Method, nameList: java.util.List<string>): boolean;
                equals(obj: any): boolean;
                _errorMessageFor(e: java.lang.Exception): string;
                _findMatchingMethod(refType: sun.jdi.ReferenceType): sun.jdi.Method;
                hashCode(): int;
                _isMethodBreakpoint(): boolean;
                _isValidMethodName(s: string): boolean;
                _lineNumber(): int;
                _location(refType: sun.jdi.ReferenceType): sun.jdi.Location;
                _methodArgs(): java.util.List<string>;
                _methodName(): string;
                _normalizeArgTypeName(name: string): string;
                _resolveEventRequest(refType: sun.jdi.ReferenceType): sun.jdi.request.EventRequest;
                toString(): string;
                _lineNumber: int;
                _methodArgs: java.util.List<string>;
                _methodId: string;
                _threadFilter: sun.jdi.ThreadReference;
              }
              interface BreakpointSpec extends CombineTypes<[_BreakpointSpec, com.sun.tools.example.debug.tty.EventRequestSpec]> {}
              interface _Commands$$static extends ClassLike {
                _locationString(loc: sun.jdi.Location): string;
                _LIST_LINE_LOOKBEHIND: int;
                _methodTraceCommand: string;
                _new(): Commands;
              }
              let Commands: _Commands$$static;
              interface _Commands {
                _allThreads(group: sun.jdi.ThreadGroupReference): java.util.List<sun.jdi.ThreadReference>;
                _clearPreviousStep(thread: sun.jdi.ThreadReference): void;
                _commandBytecodes(t: java.util.StringTokenizer): void;
                _commandCatchException(t: java.util.StringTokenizer): void;
                _commandClass(t: java.util.StringTokenizer): void;
                _commandClasses(): void;
                _commandClasspath(t: java.util.StringTokenizer): void;
                _commandClear(t: java.util.StringTokenizer): void;
                _commandConnectors(vmm: sun.jdi.VirtualMachineManager): void;
                _commandCont(): void;
                _commandDbgTrace(t: java.util.StringTokenizer): void;
                _commandDisableGC(t: java.util.StringTokenizer): void;
                _commandDown(t: java.util.StringTokenizer): void;
                _commandEnableGC(t: java.util.StringTokenizer): void;
                _commandExclude(t: java.util.StringTokenizer): void;
                _commandExtension(t: java.util.StringTokenizer): void;
                _commandFields(t: java.util.StringTokenizer): void;
                _commandGC(): void;
                _commandIgnoreException(t: java.util.StringTokenizer): void;
                _commandInterrupt(t: java.util.StringTokenizer): void;
                _commandKill(t: java.util.StringTokenizer): void;
                _commandLines(t: java.util.StringTokenizer): void;
                _commandList(t: java.util.StringTokenizer, lineHint: int): int;
                _commandLoad(t: java.util.StringTokenizer): void;
                _commandLocals(): void;
                _commandLock(t: java.util.StringTokenizer): void;
                _commandMemory(): void;
                _commandMethods(t: java.util.StringTokenizer): void;
                _commandNext(): void;
                _commandPopFrames(t: java.util.StringTokenizer, reenter: boolean): void;
                _commandPrint(t: java.util.StringTokenizer, dumpObject: boolean): void;
                _commandRedefine(t: java.util.StringTokenizer): void;
                _commandResume(t: java.util.StringTokenizer): void;
                _commandRun(t: java.util.StringTokenizer): void;
                _commandSave(t: java.util.StringTokenizer): void;
                _commandSet(t: java.util.StringTokenizer): void;
                _commandStep(t: java.util.StringTokenizer): void;
                _commandStepi(): void;
                _commandStop(t: java.util.StringTokenizer): void;
                _commandSuspend(t: java.util.StringTokenizer): void;
                _commandThread(t: java.util.StringTokenizer): void;
                _commandThreadGroup(t: java.util.StringTokenizer): void;
                _commandThreadGroups(): void;
                _commandThreadlocks(t: java.util.StringTokenizer): void;
                _commandThreads(t: java.util.StringTokenizer): void;
                _commandTrace(t: java.util.StringTokenizer): void;
                _commandUntrace(t: java.util.StringTokenizer): void;
                _commandUnwatch(t: java.util.StringTokenizer): void;
                _commandUp(t: java.util.StringTokenizer): void;
                _commandUse(t: java.util.StringTokenizer): void;
                _commandVersion(debuggerName: string, vmm: sun.jdi.VirtualMachineManager): void;
                _commandWatch(t: java.util.StringTokenizer): void;
                _commandWhere(t: java.util.StringTokenizer, showPC: boolean): void;
                _doDisableGC(t: java.util.StringTokenizer): void;
                _doEnableGC(t: java.util.StringTokenizer): void;
                _doGetThread(idToken: string): ThreadInfo;
                _doKill(thread: sun.jdi.ThreadReference, t: java.util.StringTokenizer): void;
                _doKillThread(threadToKill: sun.jdi.ThreadReference, tokenizer: java.util.StringTokenizer): void;
                _doLock(t: java.util.StringTokenizer): void;
                _doPrint(t: java.util.StringTokenizer, dumpObject: boolean): void;
                _doSave(t: java.util.StringTokenizer): void;
                _dump(obj: sun.jdi.ObjectReference, refType: sun.jdi.ReferenceType, refTypeBase: sun.jdi.ReferenceType): void;
                _dumpFrame(frameNumber: int, showPC: boolean, frame: sun.jdi.StackFrame): void;
                _dumpStack(threadInfo: ThreadInfo, showPC: boolean): void;
                _evaluate(expr: string): sun.jdi.Value;
                _getStringValue(): string;
                _listBreakpoints(): void;
                _listCaughtExceptions(): void;
                _parseBreakpointSpec(t: java.util.StringTokenizer, next_token: string, threadFilter: sun.jdi.ThreadReference, usageMessage: string): BreakpointSpec;
                _parseExceptionSpec(t: java.util.StringTokenizer): EventRequestSpec;
                _parseWatchpointSpec(t: java.util.StringTokenizer): java.util.List<WatchpointSpec>;
                _printBreakpointCommandUsage(usageMessage: string): void;
                _printThreadGroup(tg: sun.jdi.ThreadGroupReference): void;
                _printThreadLockInfo(threadInfo: ThreadInfo): void;
                _printVar(_var: sun.jdi.LocalVariable, value: sun.jdi.Value): void;
                _resolveNow(spec: EventRequestSpec): void;
                _turnOnExitTrace(threadInfo: ThreadInfo, suspendPolicy: int): void;
                _typedName(method: sun.jdi.Method): string;
              }
              interface Commands extends CombineTypes<[_Commands, java.lang.Object]> {}
              interface _Commands$AsyncExecution$$static extends ClassLike {
                _new(): Commands$AsyncExecution;
              }
              let Commands$AsyncExecution: _Commands$AsyncExecution$$static;
              interface _Commands$AsyncExecution {
                _action(): void;
(): void;
                _execute(): void;
              }
              interface Commands$AsyncExecution extends CombineTypes<[_Commands$AsyncExecution, java.lang.Object]> {}
              interface _Env$$static extends ClassLike {
                _addExcludes(request: sun.jdi.request.StepRequest): void;
                _addExcludes(request: sun.jdi.request.MethodEntryRequest): void;
                _addExcludes(request: sun.jdi.request.MethodExitRequest): void;
                _atExitMethod(): sun.jdi.Method;
                _connection(): VMConnection;
                _description(ref: sun.jdi.ObjectReference): string;
                _excludes(): java.util.List<string>;
                _excludesString(): string;
                _getReferenceTypeFromToken(idToken: string): sun.jdi.ReferenceType;
                _getSaveKeys(): java.util.Set<string>;
                _getSavedValue(key: string): sun.jdi.Value;
                _getSourcePath(): string;
                _init(connectSpec: string, openNow: boolean, flags: int, trackVthreads: boolean, extraOptions: string): void;
                _setAtExitMethod(mmm: sun.jdi.Method): void;
                _setExcludes(excludeString: string): void;
                _setSavedValue(key: string, value: sun.jdi.Value): void;
                _setSourcePath(srcPath: string): void;
                _setSourcePath(srcList: java.util.List<string>): void;
                _setTraceFlags(flags: int): void;
                _shutdown(): void;
                _shutdown(message: string): void;
                _sourceLine(location: sun.jdi.Location, lineNumber: int): string;
                _sourceReader(location: sun.jdi.Location): java.io.BufferedReader;
                _vm(): sun.jdi.VirtualMachine;
                _SOURCE_CACHE_SIZE: int;
                _atExitMethod: sun.jdi.Method;
                _connection: VMConnection;
                _excludes: java.util.List<string>;
                _savedValues: java.util.HashMap<string,sun.jdi.Value>;
                _sourceCache: java.util.List<Env$SourceCode>;
                _sourceMapper: SourceMapper;
                _specList: EventRequestSpecList;
                _new(): Env;
              }
              let Env: _Env$$static;
              interface _Env {
              }
              interface Env extends CombineTypes<[_Env, java.lang.Object]> {}
              interface _Env$SourceCode$$static extends ClassLike {
                _new(fileName: string, reader: java.io.BufferedReader): Env$SourceCode;
              }
              let Env$SourceCode: _Env$SourceCode$$static;
              interface _Env$SourceCode {
                _fileName(): string;
                _sourceLine(number: int): string;
                _fileName: string;
                _sourceLines: java.util.List<string>;
              }
              interface Env$SourceCode extends CombineTypes<[_Env$SourceCode, java.lang.Object]> {}
              interface _EventHandler$$static extends ClassLike {
                _new(notifier: EventNotifier, stopOnVMStart: boolean, trackVthreads: boolean): EventHandler;
              }
              let EventHandler: _EventHandler$$static;
              interface _EventHandler {
                _breakpointEvent(event: sun.jdi.event.Event): boolean;
                _classPrepareEvent(event: sun.jdi.event.Event): boolean;
                _classUnloadEvent(event: sun.jdi.event.Event): boolean;
                _eventThread(event: sun.jdi.event.Event): sun.jdi.ThreadReference;
                _exceptionEvent(event: sun.jdi.event.Event): boolean;
                _fieldWatchEvent(event: sun.jdi.event.Event): boolean;
                _handleDisconnectedException(): void;
                _handleEvent(event: sun.jdi.event.Event): boolean;
                _handleExitEvent(event: sun.jdi.event.Event): boolean;
                _methodEntryEvent(event: sun.jdi.event.Event): boolean;
                _methodExitEvent(event: sun.jdi.event.Event): boolean;
                run(): void;
                _setCurrentThread(set: sun.jdi.event.EventSet): void;
                _setCurrentThread(thread: sun.jdi.ThreadReference): void;
                _shutdown(): void;
                _stepEvent(event: sun.jdi.event.Event): boolean;
                _threadDeathEvent(event: sun.jdi.event.Event): boolean;
                _threadStartEvent(event: sun.jdi.event.Event): boolean;
                vmDeathEvent(event: sun.jdi.event.Event): boolean;
                vmDisconnectEvent(event: sun.jdi.event.Event): boolean;
                _vmStartEvent(event: sun.jdi.event.Event): boolean;
                _completed: boolean;
                _connected: boolean;
                _notifier: EventNotifier;
                _shutdownMessageKey: string;
                _stopOnVMStart: boolean;
                _thread: java.lang.Thread;
                _trackVthreads: boolean;
                _vmDied: boolean;
              }
              interface EventHandler extends CombineTypes<[_EventHandler, java.lang.Object, java.lang.Runnable]> {}
              interface _EventNotifier$$static extends ClassLike {
              }
              let EventNotifier: _EventNotifier$$static;
              interface _EventNotifier {
                breakpointEvent(a0: sun.jdi.event.BreakpointEvent): void;
                classPrepareEvent(a0: sun.jdi.event.ClassPrepareEvent): void;
                classUnloadEvent(a0: sun.jdi.event.ClassUnloadEvent): void;
                exceptionEvent(a0: sun.jdi.event.ExceptionEvent): void;
                fieldWatchEvent(a0: sun.jdi.event.WatchpointEvent): void;
                methodEntryEvent(a0: sun.jdi.event.MethodEntryEvent): void;
                methodExitEvent(a0: sun.jdi.event.MethodExitEvent): boolean;
                receivedEvent(a0: sun.jdi.event.Event): void;
                stepEvent(a0: sun.jdi.event.StepEvent): void;
                threadDeathEvent(a0: sun.jdi.event.ThreadDeathEvent): void;
                threadStartEvent(a0: sun.jdi.event.ThreadStartEvent): void;
                vmDeathEvent(a0: sun.jdi.event.VMDeathEvent): void;
                vmDisconnectEvent(a0: sun.jdi.event.VMDisconnectEvent): void;
                vmInterrupted(): void;
                vmStartEvent(a0: sun.jdi.event.VMStartEvent): void;
              }
              interface EventNotifier extends CombineTypes<[_EventNotifier, java.lang.Object]> {}
              interface _EventRequestSpec$$static extends ClassLike {
                _new(refSpec: ReferenceTypeSpec): EventRequestSpec;
              }
              let EventRequestSpec: _EventRequestSpec$$static;
              interface _EventRequestSpec {
                _errorMessageFor(e: java.lang.Exception): string;
                _isJavaIdentifier(s: string): boolean;
                _isResolved(): boolean;
                _remove(): void;
                _resolve(event: sun.jdi.event.ClassPrepareEvent): sun.jdi.request.EventRequest;
                _resolveAgainstPreparedClasses(): sun.jdi.request.EventRequest;
                _resolveEagerly(): sun.jdi.request.EventRequest;
                _resolveEventRequest(a0: sun.jdi.ReferenceType): sun.jdi.request.EventRequest;
(a0: sun.jdi.ReferenceType): sun.jdi.request.EventRequest;
                _resolved(): sun.jdi.request.EventRequest;
                _prepareRequest: sun.jdi.request.ClassPrepareRequest;
                _refSpec: ReferenceTypeSpec;
                _resolved: sun.jdi.request.EventRequest;
                _suspendPolicy: int;
              }
              interface EventRequestSpec extends CombineTypes<[_EventRequestSpec, java.lang.Object]> {}
              interface _EventRequestSpecList$$static extends ClassLike {
                _statusError: int;
                _statusResolved: int;
                _statusUnresolved: int;
                _new(): EventRequestSpecList;
              }
              let EventRequestSpecList: _EventRequestSpecList$$static;
              interface _EventRequestSpecList {
                _addEagerlyResolve(spec: EventRequestSpec): boolean;
                _createAccessWatchpoint(classPattern: string, fieldId: string): WatchpointSpec;
                _createBreakpoint(classPattern: string, line: int, threadFilter: sun.jdi.ThreadReference): BreakpointSpec;
                _createBreakpoint(classPattern: string, methodId: string, threadFilter: sun.jdi.ThreadReference, methodArgs: java.util.List<string>): BreakpointSpec;
                _createExceptionCatch(classPattern: string, notifyCaught: boolean, notifyUncaught: boolean): EventRequestSpec;
                _createModificationWatchpoint(classPattern: string, fieldId: string): WatchpointSpec;
                _delete(proto: EventRequestSpec): boolean;
                _eventRequestSpecs(): java.util.List<EventRequestSpec>;
                _resolve(event: sun.jdi.event.ClassPrepareEvent): boolean;
                _resolveAll(): void;
                _eventRequestSpecs: java.util.List<EventRequestSpec>;
              }
              interface EventRequestSpecList extends CombineTypes<[_EventRequestSpecList, java.lang.Object]> {}
              interface _ExceptionSpec$$static extends ClassLike {
                _new(refSpec: ReferenceTypeSpec, notifyCaught: boolean, notifyUncaught: boolean): ExceptionSpec;
              }
              let ExceptionSpec: _ExceptionSpec$$static;
              interface _ExceptionSpec {
                equals(obj: any): boolean;
                hashCode(): int;
                notifyCaught(): boolean;
                notifyUncaught(): boolean;
                _resolveEventRequest(refType: sun.jdi.ReferenceType): sun.jdi.request.EventRequest;
                toString(): string;
                _notifyCaught: boolean;
                _notifyUncaught: boolean;
              }
              interface ExceptionSpec extends CombineTypes<[_ExceptionSpec, com.sun.tools.example.debug.tty.EventRequestSpec]> {}
              interface _LineNotFoundException$$static extends ClassLike {
                _serialVersionUID: long;
                new(): LineNotFoundException;
                new(s: string): LineNotFoundException;
              }
              let LineNotFoundException: _LineNotFoundException$$static;
              interface _LineNotFoundException {
              }
              interface LineNotFoundException extends CombineTypes<[_LineNotFoundException, java.lang.Exception]> {}
              interface _MalformedMemberNameException$$static extends ClassLike {
                _serialVersionUID: long;
                new(): MalformedMemberNameException;
                new(s: string): MalformedMemberNameException;
              }
              let MalformedMemberNameException: _MalformedMemberNameException$$static;
              interface _MalformedMemberNameException {
              }
              interface MalformedMemberNameException extends CombineTypes<[_MalformedMemberNameException, java.lang.Exception]> {}
              interface _MessageOutput$$static extends ClassLike {
                _fatalError(messageKey: string): void;
                _format(key: string): string;
                _format(key: string, argument: string): string;
                _format(key: string, arguments: any[]): string;
                _lnprint(key: string): void;
                _lnprint(key: string, argument: string): void;
                _lnprint(key: string, arguments: any[]): void;
                _print(key: string): void;
                _print(key: string, argument: string): void;
                _printDirect(line: string): void;
                _printDirect(c: char): void;
                _printDirectln(line: string): void;
                _printException(key: string, e: java.lang.Exception): void;
                _printPrompt(): void;
                _printPrompt(simple: boolean): void;
                _println(): void;
                _println(key: string): void;
                _println(key: string, argument: string): void;
                _println(key: string, arguments: any[]): void;
                _messageFormat: java.text.MessageFormat;
                _textResources: java.util.ResourceBundle;
                new(): MessageOutput;
              }
              let MessageOutput: _MessageOutput$$static;
              interface _MessageOutput {
              }
              interface MessageOutput extends CombineTypes<[_MessageOutput, java.lang.Object]> {}
              interface _ModificationWatchpointSpec$$static extends ClassLike {
                _new(refSpec: ReferenceTypeSpec, fieldId: string): ModificationWatchpointSpec;
              }
              let ModificationWatchpointSpec: _ModificationWatchpointSpec$$static;
              interface _ModificationWatchpointSpec {
                _resolveEventRequest(refType: sun.jdi.ReferenceType): sun.jdi.request.EventRequest;
                toString(): string;
              }
              interface ModificationWatchpointSpec extends CombineTypes<[_ModificationWatchpointSpec, com.sun.tools.example.debug.tty.WatchpointSpec]> {}
              interface _PatternReferenceTypeSpec$$static extends ClassLike {
                _new(classId: string): PatternReferenceTypeSpec;
              }
              let PatternReferenceTypeSpec: _PatternReferenceTypeSpec$$static;
              interface _PatternReferenceTypeSpec {
                _checkClassName(className: string): void;
                createPrepareRequest(): sun.jdi.request.ClassPrepareRequest;
                equals(obj: any): boolean;
                hashCode(): int;
                _isJavaIdentifier(s: string): boolean;
                isUnique(): boolean;
                _isUnqualifiedName(s: string): boolean;
                matches(refType: sun.jdi.ReferenceType): boolean;
                toString(): string;
                _classId: string;
                _stem: string;
              }
              interface PatternReferenceTypeSpec extends CombineTypes<[_PatternReferenceTypeSpec, com.sun.tools.example.debug.tty.ReferenceTypeSpec, java.lang.Object]> {}
              interface _ReferenceTypeSpec$$static extends ClassLike {
              }
              let ReferenceTypeSpec: _ReferenceTypeSpec$$static;
              interface _ReferenceTypeSpec {
                createPrepareRequest(): sun.jdi.request.ClassPrepareRequest;
                equals(a0: any): boolean;
                hashCode(): int;
                matches(a0: sun.jdi.ReferenceType): boolean;
              }
              interface ReferenceTypeSpec extends CombineTypes<[_ReferenceTypeSpec, java.lang.Object]> {}
              interface _SourceMapper$$static extends ClassLike {
                _new(sourcepath: java.util.List<string>): SourceMapper;
                _new(sourcepath: string): SourceMapper;
              }
              let SourceMapper: _SourceMapper$$static;
              interface _SourceMapper {
                _getSourcePath(): string;
                _sourceFile(loc: sun.jdi.Location): java.io.File;
                _sourceReader(loc: sun.jdi.Location): java.io.BufferedReader;
                _dirs: string[];
              }
              interface SourceMapper extends CombineTypes<[_SourceMapper, java.lang.Object]> {}
              interface _TTY$$static extends ClassLike {
                _addArgument(string: string, argument: string): string;
                _addressToSocketArgs(address: string): string;
                _hasWhitespace(string: string): boolean;
                main(argv: string[]): void;
                _supportsSharedMemory(): boolean;
                _usage(): void;
                _usageError(messageKey: string): void;
                _usageError(messageKey: string, argument: string): void;
                _LIST_RESET: java.util.Set<string>;
                _REPEATABLE: java.util.Set<string>;
                _commandList: string[][];
                _progname: string;
                _trackVthreads: boolean;
                new(): TTY;
              }
              let TTY: _TTY$$static;
              interface _TTY {
                breakpointEvent(be: sun.jdi.event.BreakpointEvent): void;
                classPrepareEvent(e: sun.jdi.event.ClassPrepareEvent): void;
                classUnloadEvent(e: sun.jdi.event.ClassUnloadEvent): void;
                _doRepeat(t: java.util.StringTokenizer): void;
                exceptionEvent(ee: sun.jdi.event.ExceptionEvent): void;
                _executeCommand(t: java.util.StringTokenizer): string;
                fieldWatchEvent(fwe: sun.jdi.event.WatchpointEvent): void;
                _help(): void;
                _isCommand(key: string): int;
                _isDisconnectCmd(ii: int): boolean;
                _isReadOnlyCmd(ii: int): boolean;
                isShuttingDown(): boolean;
                methodEntryEvent(me: sun.jdi.event.MethodEntryEvent): void;
                methodExitEvent(me: sun.jdi.event.MethodExitEvent): boolean;
                _monitorCommand(t: java.util.StringTokenizer): void;
                _printBaseLocation(threadName: string, loc: sun.jdi.Location): void;
                _printBreakpointLocation(be: sun.jdi.event.BreakpointEvent): void;
                _printCurrentLocation(): void;
                _printLocationOfEvent(theEvent: sun.jdi.event.LocatableEvent): void;
                _printLocationWithSourceLine(threadName: string, loc: sun.jdi.Location): void;
                _readCommand(t: java.util.StringTokenizer): void;
                _readCommandFile(f: java.io.File): boolean;
                _readStartupCommandFile(dir: string, fname: string, canonPath: string): string;
                receivedEvent(event: sun.jdi.event.Event): void;
                setShuttingDown(s: boolean): void;
                stepEvent(se: sun.jdi.event.StepEvent): void;
                threadDeathEvent(e: sun.jdi.event.ThreadDeathEvent): void;
                threadStartEvent(e: sun.jdi.event.ThreadStartEvent): void;
                _unmonitorCommand(t: java.util.StringTokenizer): void;
                vmDeathEvent(e: sun.jdi.event.VMDeathEvent): void;
                vmDisconnectEvent(e: sun.jdi.event.VMDisconnectEvent): void;
                vmInterrupted(): void;
                vmStartEvent(se: sun.jdi.event.VMStartEvent): void;
                _handler: EventHandler;
                _monitorCommands: java.util.List<string>;
                _monitorCount: int;
                _nextListTarget: int;
                _repeat: boolean;
                _shuttingDown: boolean;
              }
              interface TTY extends CombineTypes<[_TTY, java.lang.Object, com.sun.tools.example.debug.tty.EventNotifier]> {}
              interface _TTYResources$$static extends ClassLike {
                new(): TTYResources;
              }
              let TTYResources: _TTYResources$$static;
              interface _TTYResources {
                getContents(): any[][];
              }
              interface TTYResources extends CombineTypes<[_TTYResources, java.util.ListResourceBundle]> {}
              interface _TTYResources_de$$static extends ClassLike {
                new(): TTYResources_de;
              }
              let TTYResources_de: _TTYResources_de$$static;
              interface _TTYResources_de {
                getContents(): any[][];
              }
              interface TTYResources_de extends CombineTypes<[_TTYResources_de, java.util.ListResourceBundle]> {}
              interface _TTYResources_ja$$static extends ClassLike {
                new(): TTYResources_ja;
              }
              let TTYResources_ja: _TTYResources_ja$$static;
              interface _TTYResources_ja {
                getContents(): any[][];
              }
              interface TTYResources_ja extends CombineTypes<[_TTYResources_ja, java.util.ListResourceBundle]> {}
              interface _TTYResources_zh_CN$$static extends ClassLike {
                new(): TTYResources_zh_CN;
              }
              let TTYResources_zh_CN: _TTYResources_zh_CN$$static;
              interface _TTYResources_zh_CN {
                getContents(): any[][];
              }
              interface TTYResources_zh_CN extends CombineTypes<[_TTYResources_zh_CN, java.util.ListResourceBundle]> {}
              interface _ThreadGroupIterator$$static extends ClassLike {
                _find(name: string): sun.jdi.ThreadGroupReference;
                _new(tgl: java.util.List<sun.jdi.ThreadGroupReference>): ThreadGroupIterator;
                _new(tg: sun.jdi.ThreadGroupReference): ThreadGroupIterator;
                _new(): ThreadGroupIterator;
              }
              let ThreadGroupIterator: _ThreadGroupIterator$$static;
              interface _ThreadGroupIterator {
                hasNext(): boolean;
                next(): sun.jdi.ThreadGroupReference;
                next(): any;
                nextThreadGroup(): sun.jdi.ThreadGroupReference;
                _push(tgl: java.util.List<sun.jdi.ThreadGroupReference>): void;
                remove(): void;
                _top(): java.util.Iterator<sun.jdi.ThreadGroupReference>;
                _stack: java.util.Stack<java.util.Iterator<sun.jdi.ThreadGroupReference>>;
              }
              interface ThreadGroupIterator extends CombineTypes<[_ThreadGroupIterator, java.lang.Object, java.util.Iterator<sun.jdi.ThreadGroupReference>]> {}
              interface _ThreadInfo$$static extends ClassLike {
                _addThread(thread: sun.jdi.ThreadReference): boolean;
                _getCurrentThreadInfo(): ThreadInfo;
                _getThreadInfo(id: long): ThreadInfo;
                _getThreadInfo(tr: sun.jdi.ThreadReference): ThreadInfo;
                _getThreadInfo(idToken: string): ThreadInfo;
                _group(): sun.jdi.ThreadGroupReference;
                _initThreads(): void;
                _invalidateAll(): void;
                _removeThread(thread: sun.jdi.ThreadReference): void;
                _setCurrentThread(tr: sun.jdi.ThreadReference): void;
                _setCurrentThreadInfo(tinfo: ThreadInfo): void;
                _setThreadGroup(tg: sun.jdi.ThreadGroupReference): void;
                _threads(): java.util.List<ThreadInfo>;
                _vthreads(): java.util.List<ThreadInfo>;
                _current: ThreadInfo;
                _gotInitialThreads: boolean;
                _group: sun.jdi.ThreadGroupReference;
                _threads: java.util.List<ThreadInfo>;
                _vthreads: java.util.List<ThreadInfo>;
              }
              let ThreadInfo: _ThreadInfo$$static;
              interface _ThreadInfo {
                _assureSuspended(): void;
                _down(nFrames: int): void;
                _getCurrentFrame(): sun.jdi.StackFrame;
                _getCurrentFrameIndex(): int;
                _getStack(): java.util.List<sun.jdi.StackFrame>;
                _getThread(): sun.jdi.ThreadReference;
                _invalidate(): void;
                _setCurrentFrameIndex(nFrame: int): void;
                _up(nFrames: int): void;
                _currentFrameIndex: int;
                _thread: sun.jdi.ThreadReference;
              }
              interface ThreadInfo extends CombineTypes<[_ThreadInfo, java.lang.Object]> {}
              interface _ThreadIterator$$static extends ClassLike {
                _new(tg: sun.jdi.ThreadGroupReference): ThreadIterator;
                _new(): ThreadIterator;
              }
              let ThreadIterator: _ThreadIterator$$static;
              interface _ThreadIterator {
                hasNext(): boolean;
                next(): sun.jdi.ThreadReference;
                next(): any;
                nextThread(): sun.jdi.ThreadReference;
                remove(): void;
                _it: java.util.Iterator<sun.jdi.ThreadReference>;
                _tgi: ThreadGroupIterator;
                _vthreadIter: java.util.Iterator<ThreadInfo>;
              }
              interface ThreadIterator extends CombineTypes<[_ThreadIterator, java.util.Iterator<sun.jdi.ThreadReference>, java.lang.Object]> {}
              interface _VMConnection$$static extends ClassLike {
                _hasWhitespace(string: string): boolean;
                _isCharWhitespace(arr: char[], pos: int): boolean;
                _isEnclosed(value: string, enclosingChar: string): boolean;
                _isLastChar(arr: char[], pos: int): boolean;
                _isNextCharWhitespace(arr: char[], curr_pos: int): boolean;
                _isPreviousCharWhitespace(arr: char[], curr_pos: int): boolean;
                _splitStringAtNonEnclosedWhiteSpace(value: string): java.util.List<string>;
                _new(connectSpec: string, traceFlags: int, trackVthreads: boolean, extraOptions: string): VMConnection;
              }
              let VMConnection: _VMConnection$$static;
              interface _VMConnection {
                _attachTarget(): sun.jdi.VirtualMachine;
                _connectorArg(name: string): string;
                _displayRemoteOutput(stream: java.io.InputStream): void;
                disposeVM(): void;
                _dumpFailedLaunchInfo(process: java.lang.Process): void;
                _dumpStream(stream: java.io.InputStream): void;
                _findConnector(name: string): sun.jdi.connect.Connector;
                _isLaunch(): boolean;
                _isOpen(): boolean;
                _launchTarget(): sun.jdi.VirtualMachine;
                _listenTarget(): sun.jdi.VirtualMachine;
                _notifyOutputComplete(): void;
                _open(): sun.jdi.VirtualMachine;
                _parseConnectorArgs(connector: sun.jdi.connect.Connector, argString: string, extraOptions: string): java.util.Map<string,sun.jdi.connect.Connector$Argument>;
                _resolveEventRequests(): void;
                _setConnectorArg(name: string, value: string): boolean;
                _setEventRequests(vm: sun.jdi.VirtualMachine): void;
                setTraceFlags(flags: int): void;
                vm(): sun.jdi.VirtualMachine;
                _waitOutputComplete(): void;
                _connector: sun.jdi.connect.Connector;
                _connectorArgs: java.util.Map<string,sun.jdi.connect.Connector$Argument>;
                _outputCompleteCount: int;
                _process: java.lang.Process;
                _traceFlags: int;
                _trackVthreads: boolean;
                _vm: sun.jdi.VirtualMachine;
              }
              interface VMConnection extends CombineTypes<[_VMConnection, java.lang.Object]> {}
              interface _VMNotConnectedException$$static extends ClassLike {
                _serialVersionUID: long;
                new(): VMNotConnectedException;
                new(s: string): VMNotConnectedException;
              }
              let VMNotConnectedException: _VMNotConnectedException$$static;
              interface _VMNotConnectedException {
              }
              interface VMNotConnectedException extends CombineTypes<[_VMNotConnectedException, java.lang.RuntimeException]> {}
              interface _WatchpointSpec$$static extends ClassLike {
                _new(refSpec: ReferenceTypeSpec, fieldId: string): WatchpointSpec;
              }
              let WatchpointSpec: _WatchpointSpec$$static;
              interface _WatchpointSpec {
                equals(obj: any): boolean;
                _errorMessageFor(e: java.lang.Exception): string;
                hashCode(): int;
                _fieldId: string;
              }
              interface WatchpointSpec extends CombineTypes<[_WatchpointSpec, com.sun.tools.example.debug.tty.EventRequestSpec]> {}
            }
          }
        }
        module jdi {
          module resources {
            interface _jdi$$static extends ClassLike {
              new(): jdi;
            }
            let jdi: _jdi$$static;
            interface _jdi {
              _getContents(): any[][];
            }
            interface jdi extends CombineTypes<[_jdi, java.util.ListResourceBundle]> {}
            interface _jdi_de$$static extends ClassLike {
              new(): jdi_de;
            }
            let jdi_de: _jdi_de$$static;
            interface _jdi_de {
              _getContents(): any[][];
            }
            interface jdi_de extends CombineTypes<[_jdi_de, java.util.ListResourceBundle]> {}
            interface _jdi_ja$$static extends ClassLike {
              new(): jdi_ja;
            }
            let jdi_ja: _jdi_ja$$static;
            interface _jdi_ja {
              _getContents(): any[][];
            }
            interface jdi_ja extends CombineTypes<[_jdi_ja, java.util.ListResourceBundle]> {}
            interface _jdi_zh_CN$$static extends ClassLike {
              new(): jdi_zh_CN;
            }
            let jdi_zh_CN: _jdi_zh_CN$$static;
            interface _jdi_zh_CN {
              _getContents(): any[][];
            }
            interface jdi_zh_CN extends CombineTypes<[_jdi_zh_CN, java.util.ListResourceBundle]> {}
          }
          interface _AbstractLauncher$$static extends ClassLike {
            _new(): AbstractLauncher;
          }
          let AbstractLauncher: _AbstractLauncher$$static;
          interface _AbstractLauncher {
            description(): string;
            launch(a0: java.util.Map<string,sun.jdi.connect.Connector$Argument>): sun.jdi.VirtualMachine;
            _launch(commandArray: string[], address: string, listenKey: sun.jdi.connect.spi.TransportService$ListenKey, ts: sun.jdi.connect.spi.TransportService): sun.jdi.VirtualMachine;
            name(): string;
            _tokenizeCommand(command: string, quote: char): string[];
            _grp: java.lang.ThreadGroup;
          }
          interface AbstractLauncher extends CombineTypes<[_AbstractLauncher, com.sun.tools.jdi.ConnectorImpl, com.sun.jdi.connect.LaunchingConnector]> {}
          interface _AbstractLauncher$Helper$$static extends ClassLike {
            _new(a0: AbstractLauncher, commandArray: string[], address: string, listenKey: sun.jdi.connect.spi.TransportService$ListenKey, ts: sun.jdi.connect.spi.TransportService): AbstractLauncher$Helper;
          }
          let AbstractLauncher$Helper: _AbstractLauncher$Helper$$static;
          interface _AbstractLauncher$Helper {
            _acceptConnection(): java.lang.Thread;
            _commandString(): string;
            _connection(): sun.jdi.connect.spi.Connection;
            _launchAndAccept(): void;
            _monitorTarget(): java.lang.Thread;
            _notifyOfAcceptException(acceptException: java.io.IOException): void;
            _notifyOfConnection(connection: sun.jdi.connect.spi.Connection): void;
            _notifyOfExit(): void;
            _process(): java.lang.Process;
            _acceptException: java.io.IOException;
            _address: string;
            _commandArray: string[];
            _connection: sun.jdi.connect.spi.Connection;
            _exited: boolean;
            _listenKey: sun.jdi.connect.spi.TransportService$ListenKey;
            _process: java.lang.Process;
            _this$0: AbstractLauncher;
            _ts: sun.jdi.connect.spi.TransportService;
          }
          interface AbstractLauncher$Helper extends CombineTypes<[_AbstractLauncher$Helper, java.lang.Object]> {}
          interface _ArrayReferenceImpl$$static extends ClassLike {
            _cast<T>(x: any): T;
            _new(aVm: sun.jdi.VirtualMachine, aRef: long): ArrayReferenceImpl;
          }
          let ArrayReferenceImpl: _ArrayReferenceImpl$$static;
          interface _ArrayReferenceImpl {
            _arrayType(): ArrayTypeImpl;
            getValue(index: int): sun.jdi.Value;
            getValues(): java.util.List<sun.jdi.Value>;
            getValues(index: int, length: int): java.util.List<sun.jdi.Value>;
            _invokableReferenceType(method: sun.jdi.Method): ClassTypeImpl;
            length(): int;
            setValue(index: int, value: sun.jdi.Value): void;
            setValues(values: java.util.List<sun.jdi.Value>): void;
            setValues(index: int, values: java.util.List<sun.jdi.Value>, srcIndex: int, length: int): void;
            toString(): string;
            _typeValueKey(): byte;
            _validateArrayAccess(index: int, length: int): void;
            _validateAssignment(destination: ValueContainer): void;
            _length: int;
          }
          interface ArrayReferenceImpl extends CombineTypes<[_ArrayReferenceImpl, com.sun.tools.jdi.ObjectReferenceImpl, com.sun.jdi.ArrayReference]> {}
          interface _ArrayReferenceImpl$Component$$static extends ClassLike {
            _new(this$0: ArrayReferenceImpl): ArrayReferenceImpl$Component;
          }
          let ArrayReferenceImpl$Component: _ArrayReferenceImpl$Component$$static;
          interface _ArrayReferenceImpl$Component {
            findType(signature: string): sun.jdi.Type;
            signature(): string;
            type(): sun.jdi.Type;
            typeName(): string;
            _this$0: ArrayReferenceImpl;
          }
          interface ArrayReferenceImpl$Component extends CombineTypes<[_ArrayReferenceImpl$Component, com.sun.tools.jdi.ValueContainer, java.lang.Object]> {}
          interface _ArrayTypeImpl$$static extends ClassLike {
            _isComponentAssignable(destination: sun.jdi.Type, source: sun.jdi.Type): boolean;
            _new(aVm: sun.jdi.VirtualMachine, aRef: long): ArrayTypeImpl;
          }
          let ArrayTypeImpl: _ArrayTypeImpl$$static;
          interface _ArrayTypeImpl {
            _addVisibleMethods(map: java.util.Map<string,sun.jdi.Method>, seenInterfaces: java.util.Set<sun.jdi.InterfaceType>): void;
            allMethods(): java.util.List<sun.jdi.Method>;
            componentSignature(): string;
            componentType(): sun.jdi.Type;
            componentTypeName(): string;
            failedToInitialize(): boolean;
            _getModifiers(): void;
            _inheritedTypes(): java.util.List<sun.jdi.ReferenceType>;
            isAbstract(): boolean;
            _isAssignableTo(destType: sun.jdi.ReferenceType): boolean;
            isFinal(): boolean;
            isInitialized(): boolean;
            isPrepared(): boolean;
            isStatic(): boolean;
            isVerified(): boolean;
            newInstance(length: int): sun.jdi.ArrayReference;
            toString(): string;
            _type(): sun.jdi.Type;
          }
          interface ArrayTypeImpl extends CombineTypes<[_ArrayTypeImpl, com.sun.tools.jdi.ReferenceTypeImpl, com.sun.jdi.ArrayType]> {}
          interface _BaseLineInfo$$static extends ClassLike {
            _new(lineNumber: int, declaringType: ReferenceTypeImpl): BaseLineInfo;
          }
          let BaseLineInfo: _BaseLineInfo$$static;
          interface _BaseLineInfo {
            liLineNumber(): int;
            liSourceName(): string;
            liSourcePath(): string;
            liStratum(): string;
            _declaringType: ReferenceTypeImpl;
            _lineNumber: int;
          }
          interface BaseLineInfo extends CombineTypes<[_BaseLineInfo, java.lang.Object, com.sun.tools.jdi.LineInfo]> {}
          interface _BooleanTypeImpl$$static extends ClassLike {
            _new(vm: sun.jdi.VirtualMachine): BooleanTypeImpl;
          }
          let BooleanTypeImpl: _BooleanTypeImpl$$static;
          interface _BooleanTypeImpl {
            _convert(value: sun.jdi.PrimitiveValue): sun.jdi.PrimitiveValue;
            signature(): string;
            toString(): string;
          }
          interface BooleanTypeImpl extends CombineTypes<[_BooleanTypeImpl, com.sun.tools.jdi.PrimitiveTypeImpl, com.sun.jdi.BooleanType]> {}
          interface _BooleanValueImpl$$static extends ClassLike {
            _new(aVm: sun.jdi.VirtualMachine, aValue: boolean): BooleanValueImpl;
          }
          let BooleanValueImpl: _BooleanValueImpl$$static;
          interface _BooleanValueImpl {
            booleanValue(): boolean;
            byteValue(): byte;
            charValue(): char;
            doubleValue(): double;
            equals(obj: any): boolean;
            floatValue(): float;
            hashCode(): int;
            intValue(): int;
            longValue(): long;
            shortValue(): short;
            toString(): string;
            type(): sun.jdi.Type;
            _typeValueKey(): byte;
            value(): boolean;
            _value: boolean;
          }
          interface BooleanValueImpl extends CombineTypes<[_BooleanValueImpl, com.sun.jdi.BooleanValue, com.sun.tools.jdi.PrimitiveValueImpl]> {}
          interface _ByteTypeImpl$$static extends ClassLike {
            _new(vm: sun.jdi.VirtualMachine): ByteTypeImpl;
          }
          let ByteTypeImpl: _ByteTypeImpl$$static;
          interface _ByteTypeImpl {
            _convert(value: sun.jdi.PrimitiveValue): sun.jdi.PrimitiveValue;
            signature(): string;
            toString(): string;
          }
          interface ByteTypeImpl extends CombineTypes<[_ByteTypeImpl, com.sun.tools.jdi.PrimitiveTypeImpl, com.sun.jdi.ByteType]> {}
          interface _ByteValueImpl$$static extends ClassLike {
            _new(aVm: sun.jdi.VirtualMachine, aValue: byte): ByteValueImpl;
          }
          let ByteValueImpl: _ByteValueImpl$$static;
          interface _ByteValueImpl {
            booleanValue(): boolean;
            byteValue(): byte;
            charValue(): char;
            _checkedCharValue(): char;
            compareTo(obj: sun.jdi.ByteValue): int;
            compareTo(a0: any): int;
            doubleValue(): double;
            equals(obj: any): boolean;
            floatValue(): float;
            hashCode(): int;
            intValue(): int;
            longValue(): long;
            shortValue(): short;
            toString(): string;
            type(): sun.jdi.Type;
            _typeValueKey(): byte;
            value(): byte;
            _value: byte;
          }
          interface ByteValueImpl extends CombineTypes<[_ByteValueImpl, com.sun.jdi.ByteValue, com.sun.tools.jdi.PrimitiveValueImpl]> {}
          interface _CharTypeImpl$$static extends ClassLike {
            _new(vm: sun.jdi.VirtualMachine): CharTypeImpl;
          }
          let CharTypeImpl: _CharTypeImpl$$static;
          interface _CharTypeImpl {
            _convert(value: sun.jdi.PrimitiveValue): sun.jdi.PrimitiveValue;
            signature(): string;
            toString(): string;
          }
          interface CharTypeImpl extends CombineTypes<[_CharTypeImpl, com.sun.jdi.CharType, com.sun.tools.jdi.PrimitiveTypeImpl]> {}
          interface _CharValueImpl$$static extends ClassLike {
            _new(aVm: sun.jdi.VirtualMachine, aValue: char): CharValueImpl;
          }
          let CharValueImpl: _CharValueImpl$$static;
          interface _CharValueImpl {
            booleanValue(): boolean;
            byteValue(): byte;
            charValue(): char;
            _checkedByteValue(): byte;
            _checkedShortValue(): short;
            compareTo(obj: sun.jdi.CharValue): int;
            compareTo(a0: any): int;
            doubleValue(): double;
            equals(obj: any): boolean;
            floatValue(): float;
            hashCode(): int;
            intValue(): int;
            longValue(): long;
            shortValue(): short;
            toString(): string;
            type(): sun.jdi.Type;
            _typeValueKey(): byte;
            value(): char;
            _value: char;
          }
          interface CharValueImpl extends CombineTypes<[_CharValueImpl, com.sun.jdi.CharValue, com.sun.tools.jdi.PrimitiveValueImpl]> {}
          interface _ClassLoaderReferenceImpl$$static extends ClassLike {
            _new(aVm: sun.jdi.VirtualMachine, ref: long): ClassLoaderReferenceImpl;
          }
          let ClassLoaderReferenceImpl: _ClassLoaderReferenceImpl$$static;
          interface _ClassLoaderReferenceImpl {
            definedClasses(): java.util.List<sun.jdi.ReferenceType>;
            _description(): string;
            _findType(signature: string): sun.jdi.Type;
            _newCache(): ObjectReferenceImpl$Cache;
            _typeValueKey(): byte;
            visibleClasses(): java.util.List<sun.jdi.ReferenceType>;
          }
          interface ClassLoaderReferenceImpl extends CombineTypes<[_ClassLoaderReferenceImpl, com.sun.tools.jdi.ObjectReferenceImpl, com.sun.jdi.ClassLoaderReference]> {}
          interface _ClassLoaderReferenceImpl$Cache$$static extends ClassLike {
          }
          let ClassLoaderReferenceImpl$Cache: _ClassLoaderReferenceImpl$Cache$$static;
          interface _ClassLoaderReferenceImpl$Cache {
            _visibleClasses: java.util.List<sun.jdi.ReferenceType>;
          }
          interface ClassLoaderReferenceImpl$Cache extends CombineTypes<[_ClassLoaderReferenceImpl$Cache, com.sun.tools.jdi.ObjectReferenceImpl$Cache]> {}
          interface _ClassObjectReferenceImpl$$static extends ClassLike {
            _new(vm: sun.jdi.VirtualMachine, ref: long): ClassObjectReferenceImpl;
          }
          let ClassObjectReferenceImpl: _ClassObjectReferenceImpl$$static;
          interface _ClassObjectReferenceImpl {
            reflectedType(): sun.jdi.ReferenceType;
            toString(): string;
            _typeValueKey(): byte;
            _reflectedType: sun.jdi.ReferenceType;
          }
          interface ClassObjectReferenceImpl extends CombineTypes<[_ClassObjectReferenceImpl, com.sun.jdi.ClassObjectReference, com.sun.tools.jdi.ObjectReferenceImpl]> {}
          interface _ClassTypeImpl$$static extends ClassLike {
            _new(aVm: sun.jdi.VirtualMachine, aRef: long): ClassTypeImpl;
          }
          let ClassTypeImpl: _ClassTypeImpl$$static;
          interface _ClassTypeImpl {
            allInterfaces(): java.util.List<sun.jdi.InterfaceType>;
            _canInvoke(method: sun.jdi.Method): boolean;
            concreteMethodByName(name: string, signature: string): sun.jdi.Method;
            _getInvokeMethodSender(thread: ThreadReferenceImpl, method: MethodImpl, args: ValueImpl[], options: int): CommandSender;
            interfaces(): java.util.List<sun.jdi.InterfaceType>;
            isEnum(): boolean;
            newInstance(threadIntf: sun.jdi.ThreadReference, methodIntf: sun.jdi.Method, origArguments: java.util.List<sun.jdi.Value>, options: int): sun.jdi.ObjectReference;
            _sendNewInstanceCommand(thread: ThreadReferenceImpl, method: MethodImpl, args: ValueImpl[], options: int): PacketStream;
            setValue(field: sun.jdi.Field, value: sun.jdi.Value): void;
            subclasses(): java.util.List<sun.jdi.ClassType>;
            superclass(): sun.jdi.ClassType;
            toString(): string;
            _validateConstructorInvocation(method: sun.jdi.Method): void;
            _waitForReply(stream: PacketStream): InvokableTypeImpl$InvocationResult;
            _cachedSuperclass: boolean;
            _interfaces: java.util.List<sun.jdi.InterfaceType>;
            _superclass: sun.jdi.ClassType;
          }
          interface ClassTypeImpl extends CombineTypes<[_ClassTypeImpl, com.sun.tools.jdi.InvokableTypeImpl, com.sun.jdi.ClassType]> {}
          interface _ClassTypeImpl$IResult$$static extends ClassLike {
            new(rslt: JDWP$ClassType$InvokeMethod): ClassTypeImpl$IResult;
          }
          let ClassTypeImpl$IResult: _ClassTypeImpl$IResult$$static;
          interface _ClassTypeImpl$IResult {
            getException(): ObjectReferenceImpl;
            getResult(): ValueImpl;
            _rslt: JDWP$ClassType$InvokeMethod;
          }
          interface ClassTypeImpl$IResult extends CombineTypes<[_ClassTypeImpl$IResult, java.lang.Object, com.sun.tools.jdi.InvokableTypeImpl$InvocationResult]> {}
          interface _CommandSender$$static extends ClassLike {
          }
          let CommandSender: _CommandSender$$static;
          interface _CommandSender {
            send(): PacketStream;
(): PacketStream;
          }
          interface CommandSender extends CombineTypes<[_CommandSender, java.lang.Object]> {}
          interface _ConcreteMethodImpl$$static extends ClassLike {
            _new(vm: sun.jdi.VirtualMachine, declaringType: ReferenceTypeImpl, ref: long, a3: string, name: string, signature: string, genericSignature: int): ConcreteMethodImpl;
          }
          let ConcreteMethodImpl: _ConcreteMethodImpl$$static;
          interface _ConcreteMethodImpl {
            _allLineLocations(stratum: SDE$Stratum, sourceName: string): java.util.List<sun.jdi.Location>;
            _argSlotCount(): int;
            arguments(): java.util.List<sun.jdi.LocalVariable>;
            bytecodes(): byte[];
            _codeIndexToLineInfo(stratum: SDE$Stratum, codeIndex: long): LineInfo;
            _getBaseLocations(): ConcreteMethodImpl$SoftLocationXRefs;
            _getLocations(stratum: SDE$Stratum): ConcreteMethodImpl$SoftLocationXRefs;
            _getVariables(): java.util.List<sun.jdi.LocalVariable>;
            _getVariables1(): java.util.List<sun.jdi.LocalVariable>;
            _getVariables1_4(): java.util.List<sun.jdi.LocalVariable>;
            location(): sun.jdi.Location;
            locationOfCodeIndex(codeIndex: long): sun.jdi.Location;
            _locationsOfLine(stratum: SDE$Stratum, sourceName: string, lineNumber: int): java.util.List<sun.jdi.Location>;
            _sourceNameFilter(list: java.util.List<sun.jdi.Location>, stratum: SDE$Stratum, sourceName: string): java.util.List<sun.jdi.Location>;
            variables(): java.util.List<sun.jdi.LocalVariable>;
            variablesByName(name: string): java.util.List<sun.jdi.LocalVariable>;
            _absentVariableInformation: boolean;
            _argSlotCount: int;
            _bytecodesRef: java.lang.ref.SoftReference<byte[]>;
            _firstIndex: long;
            _lastIndex: long;
            _location: sun.jdi.Location;
            _softBaseLocationXRefsRef: java.lang.ref.SoftReference<ConcreteMethodImpl$SoftLocationXRefs>;
            _softOtherLocationXRefsRef: java.lang.ref.SoftReference<ConcreteMethodImpl$SoftLocationXRefs>;
            _variablesRef: java.lang.ref.SoftReference<java.util.List<sun.jdi.LocalVariable>>;
          }
          interface ConcreteMethodImpl extends CombineTypes<[_ConcreteMethodImpl, com.sun.tools.jdi.MethodImpl]> {}
          interface _ConcreteMethodImpl$SoftLocationXRefs$$static extends ClassLike {
            _new(stratumID: string, lineMapper: java.util.Map<int,java.util.List<sun.jdi.Location>>, lineLocations: java.util.List<sun.jdi.Location>, lowestLine: int, highestLine: int): ConcreteMethodImpl$SoftLocationXRefs;
          }
          let ConcreteMethodImpl$SoftLocationXRefs: _ConcreteMethodImpl$SoftLocationXRefs$$static;
          interface _ConcreteMethodImpl$SoftLocationXRefs {
            _highestLine: int;
            _lineLocations: java.util.List<sun.jdi.Location>;
            _lineMapper: java.util.Map<int,java.util.List<sun.jdi.Location>>;
            _lowestLine: int;
            _stratumID: string;
          }
          interface ConcreteMethodImpl$SoftLocationXRefs extends CombineTypes<[_ConcreteMethodImpl$SoftLocationXRefs, java.lang.Object]> {}
          interface _ConnectorImpl$$static extends ClassLike {
            _falseString: string;
            _trueString: string;
            _new(): ConnectorImpl;
          }
          let ConnectorImpl: _ConnectorImpl$$static;
          interface _ConnectorImpl {
            _addBooleanArgument(name: string, label: string, description: string, defaultValue: boolean, mustSpecify: boolean): void;
            _addIntegerArgument(name: string, label: string, description: string, defaultValue: string, mustSpecify: boolean, min: int, max: int): void;
            _addSelectedArgument(name: string, label: string, description: string, defaultValue: string, mustSpecify: boolean, list: java.util.List<string>): void;
            _addStringArgument(name: string, label: string, description: string, defaultValue: string, mustSpecify: boolean): void;
            _argument(name: string, arguments: java.util.Map<string,sun.jdi.connect.Connector$Argument>): ConnectorImpl$ArgumentImpl;
            defaultArguments(): java.util.Map<string,sun.jdi.connect.Connector$Argument>;
            _getString(key: string): string;
            toString(): string;
            _defaultArguments: java.util.Map<string,sun.jdi.connect.Connector$Argument>;
            _messages: java.util.ResourceBundle;
          }
          interface ConnectorImpl extends CombineTypes<[_ConnectorImpl, java.lang.Object, com.sun.jdi.connect.Connector]> {}
          interface _ConnectorImpl$ArgumentImpl$$static extends ClassLike {
            _new(name: string, label: string, description: string, value: string, mustSpecify: boolean): ConnectorImpl$ArgumentImpl;
          }
          let ConnectorImpl$ArgumentImpl: _ConnectorImpl$ArgumentImpl$$static;
          interface _ConnectorImpl$ArgumentImpl {
            clone(): any;
            description(): string;
            equals(obj: any): boolean;
            hashCode(): int;
            isValid(a0: string): boolean;
(a0: string): boolean;
            label(): string;
            mustSpecify(): boolean;
            name(): string;
            setValue(value: string): void;
            toString(): string;
            value(): string;
            _description: string;
            _label: string;
            _mustSpecify: boolean;
            _name: string;
            _value: string;
          }
          interface ConnectorImpl$ArgumentImpl extends CombineTypes<[_ConnectorImpl$ArgumentImpl, com.sun.jdi.connect.Connector$Argument, java.lang.Cloneable, java.lang.Object]> {}
          interface _ConnectorImpl$BooleanArgumentImpl$$static extends ClassLike {
            _serialVersionUID: long;
            _new(this$0: ConnectorImpl, name: string, label: string, description: string, value: boolean, mustSpecify: boolean): ConnectorImpl$BooleanArgumentImpl;
          }
          let ConnectorImpl$BooleanArgumentImpl: _ConnectorImpl$BooleanArgumentImpl$$static;
          interface _ConnectorImpl$BooleanArgumentImpl {
            booleanValue(): boolean;
            isValid(value: string): boolean;
            setValue(value: boolean): void;
            stringValueOf(value: boolean): string;
            _this$0: ConnectorImpl;
          }
          interface ConnectorImpl$BooleanArgumentImpl extends CombineTypes<[_ConnectorImpl$BooleanArgumentImpl, com.sun.jdi.connect.Connector$BooleanArgument, com.sun.tools.jdi.ConnectorImpl$ArgumentImpl]> {}
          interface _ConnectorImpl$IntegerArgumentImpl$$static extends ClassLike {
            _serialVersionUID: long;
            _new(name: string, label: string, description: string, value: string, mustSpecify: boolean, min: int, max: int): ConnectorImpl$IntegerArgumentImpl;
          }
          let ConnectorImpl$IntegerArgumentImpl: _ConnectorImpl$IntegerArgumentImpl$$static;
          interface _ConnectorImpl$IntegerArgumentImpl {
            intValue(): int;
            isValid(value: string): boolean;
            isValid(value: int): boolean;
            max(): int;
            min(): int;
            setValue(value: int): void;
            stringValueOf(value: int): string;
            _max: int;
            _min: int;
          }
          interface ConnectorImpl$IntegerArgumentImpl extends CombineTypes<[_ConnectorImpl$IntegerArgumentImpl, com.sun.tools.jdi.ConnectorImpl$ArgumentImpl, com.sun.jdi.connect.Connector$IntegerArgument]> {}
          interface _ConnectorImpl$SelectedArgumentImpl$$static extends ClassLike {
            _serialVersionUID: long;
            _new(name: string, label: string, description: string, value: string, mustSpecify: boolean, choices: java.util.List<string>): ConnectorImpl$SelectedArgumentImpl;
          }
          let ConnectorImpl$SelectedArgumentImpl: _ConnectorImpl$SelectedArgumentImpl$$static;
          interface _ConnectorImpl$SelectedArgumentImpl {
            choices(): java.util.List<string>;
            isValid(value: string): boolean;
            _choices: java.util.List<string>;
          }
          interface ConnectorImpl$SelectedArgumentImpl extends CombineTypes<[_ConnectorImpl$SelectedArgumentImpl, com.sun.tools.jdi.ConnectorImpl$ArgumentImpl, com.sun.jdi.connect.Connector$SelectedArgument]> {}
          interface _ConnectorImpl$StringArgumentImpl$$static extends ClassLike {
            _serialVersionUID: long;
            _new(name: string, label: string, description: string, value: string, mustSpecify: boolean): ConnectorImpl$StringArgumentImpl;
          }
          let ConnectorImpl$StringArgumentImpl: _ConnectorImpl$StringArgumentImpl$$static;
          interface _ConnectorImpl$StringArgumentImpl {
            isValid(value: string): boolean;
          }
          interface ConnectorImpl$StringArgumentImpl extends CombineTypes<[_ConnectorImpl$StringArgumentImpl, com.sun.tools.jdi.ConnectorImpl$ArgumentImpl, com.sun.jdi.connect.Connector$StringArgument]> {}
          interface _DoubleTypeImpl$$static extends ClassLike {
            _new(vm: sun.jdi.VirtualMachine): DoubleTypeImpl;
          }
          let DoubleTypeImpl: _DoubleTypeImpl$$static;
          interface _DoubleTypeImpl {
            _convert(value: sun.jdi.PrimitiveValue): sun.jdi.PrimitiveValue;
            signature(): string;
            toString(): string;
          }
          interface DoubleTypeImpl extends CombineTypes<[_DoubleTypeImpl, com.sun.jdi.DoubleType, com.sun.tools.jdi.PrimitiveTypeImpl]> {}
          interface _DoubleValueImpl$$static extends ClassLike {
            _new(aVm: sun.jdi.VirtualMachine, aValue: double): DoubleValueImpl;
          }
          let DoubleValueImpl: _DoubleValueImpl$$static;
          interface _DoubleValueImpl {
            booleanValue(): boolean;
            byteValue(): byte;
            charValue(): char;
            _checkedByteValue(): byte;
            _checkedCharValue(): char;
            _checkedFloatValue(): float;
            _checkedIntValue(): int;
            _checkedLongValue(): long;
            _checkedShortValue(): short;
            compareTo(obj: sun.jdi.DoubleValue): int;
            compareTo(a0: any): int;
            doubleValue(): double;
            equals(obj: any): boolean;
            floatValue(): float;
            hashCode(): int;
            intValue(): int;
            longValue(): long;
            shortValue(): short;
            toString(): string;
            type(): sun.jdi.Type;
            _typeValueKey(): byte;
            value(): double;
            _value: double;
          }
          interface DoubleValueImpl extends CombineTypes<[_DoubleValueImpl, com.sun.jdi.DoubleValue, com.sun.tools.jdi.PrimitiveValueImpl]> {}
          interface _EventDestination$$static extends ClassLike {
            valueOf(name: string): EventDestination;
            values(): EventDestination[];
            readonly CLIENT_EVENT: EventDestination;
            readonly INTERNAL_EVENT: EventDestination;
            readonly UNKNOWN_EVENT: EventDestination;
          }
          let EventDestination: _EventDestination$$static;
          interface _EventDestination {
          }
          interface EventDestination extends CombineTypes<[_EventDestination]> {}
          interface _EventQueueImpl$$static extends ClassLike {
            _new(vm: sun.jdi.VirtualMachine, target: TargetVM): EventQueueImpl;
          }
          let EventQueueImpl: _EventQueueImpl$$static;
          interface _EventQueueImpl {
            _close(): void;
            _enqueue(eventSet: sun.jdi.event.EventSet): void;
            equals(obj: any): boolean;
            hashCode(): int;
            remove(): sun.jdi.event.EventSet;
            remove(timeout: long): sun.jdi.event.EventSet;
            _removeInternal(): sun.jdi.event.EventSet;
            _removeUnfiltered(timeout: long): EventSetImpl;
            _shouldWait(timerThread: EventQueueImpl$TimerThread): boolean;
            _size(): int;
            _startTimerThread(timeout: long): EventQueueImpl$TimerThread;
            virtualMachine(): sun.jdi.VirtualMachine;
            _closed: boolean;
            _eventSets: java.util.LinkedList<sun.jdi.event.EventSet>;
            _target: TargetVM;
          }
          interface EventQueueImpl extends CombineTypes<[_EventQueueImpl, com.sun.jdi.event.EventQueue, com.sun.tools.jdi.MirrorImpl]> {}
          interface _EventQueueImpl$TimerThread$$static extends ClassLike {
            _new(a0: EventQueueImpl, timeout: long): EventQueueImpl$TimerThread;
          }
          let EventQueueImpl$TimerThread: _EventQueueImpl$TimerThread$$static;
          interface _EventQueueImpl$TimerThread {
            run(): void;
            _timedOut(): boolean;
            _this$0: EventQueueImpl;
            _timedOut: boolean;
            _timeout: long;
          }
          interface EventQueueImpl$TimerThread extends CombineTypes<[_EventQueueImpl$TimerThread, java.lang.Thread]> {}
          interface _EventRequestManagerImpl$$static extends ClassLike {
            _JDItoJDWPSuspendPolicy(jdiPolicy: int): byte;
            _JDWPtoJDISuspendPolicy(jdwpPolicy: byte): int;
            _methodExitEventCmd: int;
            _new(vm: sun.jdi.VirtualMachine): EventRequestManagerImpl;
          }
          let EventRequestManagerImpl: _EventRequestManagerImpl$$static;
          interface _EventRequestManagerImpl {
            accessWatchpointRequests(): java.util.List<sun.jdi.request.AccessWatchpointRequest>;
            breakpointRequests(): java.util.List<sun.jdi.request.BreakpointRequest>;
            classPrepareRequests(): java.util.List<sun.jdi.request.ClassPrepareRequest>;
            classUnloadRequests(): java.util.List<sun.jdi.request.ClassUnloadRequest>;
            createAccessWatchpointRequest(field: sun.jdi.Field): sun.jdi.request.AccessWatchpointRequest;
            createBreakpointRequest(location: sun.jdi.Location): sun.jdi.request.BreakpointRequest;
            createClassPrepareRequest(): sun.jdi.request.ClassPrepareRequest;
            createClassUnloadRequest(): sun.jdi.request.ClassUnloadRequest;
            createExceptionRequest(refType: sun.jdi.ReferenceType, notifyCaught: boolean, notifyUncaught: boolean): sun.jdi.request.ExceptionRequest;
            createMethodEntryRequest(): sun.jdi.request.MethodEntryRequest;
            createMethodExitRequest(): sun.jdi.request.MethodExitRequest;
            createModificationWatchpointRequest(field: sun.jdi.Field): sun.jdi.request.ModificationWatchpointRequest;
            createMonitorContendedEnterRequest(): sun.jdi.request.MonitorContendedEnterRequest;
            createMonitorContendedEnteredRequest(): sun.jdi.request.MonitorContendedEnteredRequest;
            createMonitorWaitRequest(): sun.jdi.request.MonitorWaitRequest;
            createMonitorWaitedRequest(): sun.jdi.request.MonitorWaitedRequest;
            createStepRequest(thread: sun.jdi.ThreadReference, size: int, depth: int): sun.jdi.request.StepRequest;
            createThreadDeathRequest(): sun.jdi.request.ThreadDeathRequest;
            createThreadStartRequest(): sun.jdi.request.ThreadStartRequest;
            createVMDeathRequest(): sun.jdi.request.VMDeathRequest;
            deleteAllBreakpoints(): void;
            deleteEventRequest(eventRequest: sun.jdi.request.EventRequest): void;
            deleteEventRequests(eventRequests: java.util.List<sun.jdi.request.EventRequest>): void;
            equals(obj: any): boolean;
            exceptionRequests(): java.util.List<sun.jdi.request.ExceptionRequest>;
            hashCode(): int;
            methodEntryRequests(): java.util.List<sun.jdi.request.MethodEntryRequest>;
            methodExitRequests(): java.util.List<sun.jdi.request.MethodExitRequest>;
            modificationWatchpointRequests(): java.util.List<sun.jdi.request.ModificationWatchpointRequest>;
            monitorContendedEnterRequests(): java.util.List<sun.jdi.request.MonitorContendedEnterRequest>;
            monitorContendedEnteredRequests(): java.util.List<sun.jdi.request.MonitorContendedEnteredRequest>;
            monitorWaitRequests(): java.util.List<sun.jdi.request.MonitorWaitRequest>;
            monitorWaitedRequests(): java.util.List<sun.jdi.request.MonitorWaitedRequest>;
            _request(eventCmd: int, requestId: int): sun.jdi.request.EventRequest;
            _requestList(eventCmd: int): java.util.List<sun.jdi.request.EventRequest>;
            stepRequests(): java.util.List<sun.jdi.request.StepRequest>;
            threadDeathRequests(): java.util.List<sun.jdi.request.ThreadDeathRequest>;
            threadStartRequests(): java.util.List<sun.jdi.request.ThreadStartRequest>;
            _unmodifiableRequestList(eventCmd: int): java.util.List<sun.jdi.request.EventRequest>;
            vmDeathRequests(): java.util.List<sun.jdi.request.VMDeathRequest>;
            _requestLists: java.util.List<sun.jdi.request.EventRequest>[];
          }
          interface EventRequestManagerImpl extends CombineTypes<[_EventRequestManagerImpl, com.sun.jdi.request.EventRequestManager, com.sun.tools.jdi.MirrorImpl]> {}
          interface _EventRequestManagerImpl$AccessWatchpointRequestImpl$$static extends ClassLike {
            _new(this$0: EventRequestManagerImpl, field: sun.jdi.Field): EventRequestManagerImpl$AccessWatchpointRequestImpl;
          }
          let EventRequestManagerImpl$AccessWatchpointRequestImpl: _EventRequestManagerImpl$AccessWatchpointRequestImpl$$static;
          interface _EventRequestManagerImpl$AccessWatchpointRequestImpl {
            _eventCmd(): int;
            toString(): string;
          }
          interface EventRequestManagerImpl$AccessWatchpointRequestImpl extends CombineTypes<[_EventRequestManagerImpl$AccessWatchpointRequestImpl, com.sun.jdi.request.AccessWatchpointRequest, com.sun.tools.jdi.EventRequestManagerImpl$WatchpointRequestImpl]> {}
          interface _EventRequestManagerImpl$BreakpointRequestImpl$$static extends ClassLike {
            _new(this$0: EventRequestManagerImpl, location: sun.jdi.Location): EventRequestManagerImpl$BreakpointRequestImpl;
          }
          let EventRequestManagerImpl$BreakpointRequestImpl: _EventRequestManagerImpl$BreakpointRequestImpl$$static;
          interface _EventRequestManagerImpl$BreakpointRequestImpl {
            _eventCmd(): int;
            location(): sun.jdi.Location;
            toString(): string;
            _location: sun.jdi.Location;
          }
          interface EventRequestManagerImpl$BreakpointRequestImpl extends CombineTypes<[_EventRequestManagerImpl$BreakpointRequestImpl, com.sun.jdi.request.BreakpointRequest, com.sun.tools.jdi.EventRequestManagerImpl$ClassVisibleEventRequestImpl]> {}
          interface _EventRequestManagerImpl$ClassPrepareRequestImpl$$static extends ClassLike {
            _new(this$0: EventRequestManagerImpl): EventRequestManagerImpl$ClassPrepareRequestImpl;
          }
          let EventRequestManagerImpl$ClassPrepareRequestImpl: _EventRequestManagerImpl$ClassPrepareRequestImpl$$static;
          interface _EventRequestManagerImpl$ClassPrepareRequestImpl {
            addSourceNameFilter(sourceNamePattern: string): void;
            _eventCmd(): int;
            toString(): string;
          }
          interface EventRequestManagerImpl$ClassPrepareRequestImpl extends CombineTypes<[_EventRequestManagerImpl$ClassPrepareRequestImpl, com.sun.jdi.request.ClassPrepareRequest, com.sun.tools.jdi.EventRequestManagerImpl$ClassVisibleEventRequestImpl]> {}
          interface _EventRequestManagerImpl$ClassUnloadRequestImpl$$static extends ClassLike {
            _new(this$0: EventRequestManagerImpl): EventRequestManagerImpl$ClassUnloadRequestImpl;
          }
          let EventRequestManagerImpl$ClassUnloadRequestImpl: _EventRequestManagerImpl$ClassUnloadRequestImpl$$static;
          interface _EventRequestManagerImpl$ClassUnloadRequestImpl {
            _eventCmd(): int;
            toString(): string;
          }
          interface EventRequestManagerImpl$ClassUnloadRequestImpl extends CombineTypes<[_EventRequestManagerImpl$ClassUnloadRequestImpl, com.sun.jdi.request.ClassUnloadRequest, com.sun.tools.jdi.EventRequestManagerImpl$ClassVisibleEventRequestImpl]> {}
          interface _EventRequestManagerImpl$ClassVisibleEventRequestImpl$$static extends ClassLike {
            _new(this$0: EventRequestManagerImpl): EventRequestManagerImpl$ClassVisibleEventRequestImpl;
          }
          let EventRequestManagerImpl$ClassVisibleEventRequestImpl: _EventRequestManagerImpl$ClassVisibleEventRequestImpl$$static;
          interface _EventRequestManagerImpl$ClassVisibleEventRequestImpl {
            addClassExclusionFilter(classPattern: string): void;
            addClassFilter(clazz: sun.jdi.ReferenceType): void;
            addClassFilter(classPattern: string): void;
            addInstanceFilter(instance: sun.jdi.ObjectReference): void;
          }
          interface EventRequestManagerImpl$ClassVisibleEventRequestImpl extends CombineTypes<[_EventRequestManagerImpl$ClassVisibleEventRequestImpl, com.sun.tools.jdi.EventRequestManagerImpl$ThreadVisibleEventRequestImpl]> {}
          interface _EventRequestManagerImpl$EventRequestImpl$$static extends ClassLike {
            _new(a0: EventRequestManagerImpl): EventRequestManagerImpl$EventRequestImpl;
          }
          let EventRequestManagerImpl$EventRequestImpl: _EventRequestManagerImpl$EventRequestImpl$$static;
          interface _EventRequestManagerImpl$EventRequestImpl {
            addCountFilter(count: int): void;
            _clear(): void;
            _delete(): void;
            disable(): void;
            enable(): void;
            equals(obj: any): boolean;
            _eventCmd(): int;
(): int;
            _getProperties(): java.util.Map<any,any>;
            getProperty(key: any): any;
            hashCode(): int;
            _invalidState(): sun.jdi.request.InvalidRequestStateException;
            isEnabled(): boolean;
            putProperty(key: any, value: any): void;
            _requestList(): java.util.List;
            _set(): void;
            setEnabled(val: boolean): void;
            setSuspendPolicy(policy: int): void;
            _state(): string;
            suspendPolicy(): int;
            _clientProperties: java.util.Map<any,any>;
            _deleted: boolean;
            _filters: java.util.List<any>;
            _id: int;
            _isEnabled: boolean;
            _suspendPolicy: byte;
            _this$0: EventRequestManagerImpl;
          }
          interface EventRequestManagerImpl$EventRequestImpl extends CombineTypes<[_EventRequestManagerImpl$EventRequestImpl, com.sun.tools.jdi.MirrorImpl, com.sun.jdi.request.EventRequest]> {}
          interface _EventRequestManagerImpl$ExceptionRequestImpl$$static extends ClassLike {
            _new(this$0: EventRequestManagerImpl, refType: sun.jdi.ReferenceType, notifyCaught: boolean, notifyUncaught: boolean): EventRequestManagerImpl$ExceptionRequestImpl;
          }
          let EventRequestManagerImpl$ExceptionRequestImpl: _EventRequestManagerImpl$ExceptionRequestImpl$$static;
          interface _EventRequestManagerImpl$ExceptionRequestImpl {
            _eventCmd(): int;
            exception(): sun.jdi.ReferenceType;
            notifyCaught(): boolean;
            notifyUncaught(): boolean;
            toString(): string;
            _caught: boolean;
            _exception: sun.jdi.ReferenceType;
            _uncaught: boolean;
          }
          interface EventRequestManagerImpl$ExceptionRequestImpl extends CombineTypes<[_EventRequestManagerImpl$ExceptionRequestImpl, com.sun.tools.jdi.EventRequestManagerImpl$ClassVisibleEventRequestImpl, com.sun.jdi.request.ExceptionRequest]> {}
          interface _EventRequestManagerImpl$MethodEntryRequestImpl$$static extends ClassLike {
            _new(this$0: EventRequestManagerImpl): EventRequestManagerImpl$MethodEntryRequestImpl;
          }
          let EventRequestManagerImpl$MethodEntryRequestImpl: _EventRequestManagerImpl$MethodEntryRequestImpl$$static;
          interface _EventRequestManagerImpl$MethodEntryRequestImpl {
            _eventCmd(): int;
            toString(): string;
          }
          interface EventRequestManagerImpl$MethodEntryRequestImpl extends CombineTypes<[_EventRequestManagerImpl$MethodEntryRequestImpl, com.sun.tools.jdi.EventRequestManagerImpl$ClassVisibleEventRequestImpl, com.sun.jdi.request.MethodEntryRequest]> {}
          interface _EventRequestManagerImpl$MethodExitRequestImpl$$static extends ClassLike {
            _new(this$0: EventRequestManagerImpl): EventRequestManagerImpl$MethodExitRequestImpl;
          }
          let EventRequestManagerImpl$MethodExitRequestImpl: _EventRequestManagerImpl$MethodExitRequestImpl$$static;
          interface _EventRequestManagerImpl$MethodExitRequestImpl {
            _eventCmd(): int;
            toString(): string;
          }
          interface EventRequestManagerImpl$MethodExitRequestImpl extends CombineTypes<[_EventRequestManagerImpl$MethodExitRequestImpl, com.sun.jdi.request.MethodExitRequest, com.sun.tools.jdi.EventRequestManagerImpl$ClassVisibleEventRequestImpl]> {}
          interface _EventRequestManagerImpl$ModificationWatchpointRequestImpl$$static extends ClassLike {
            _new(this$0: EventRequestManagerImpl, field: sun.jdi.Field): EventRequestManagerImpl$ModificationWatchpointRequestImpl;
          }
          let EventRequestManagerImpl$ModificationWatchpointRequestImpl: _EventRequestManagerImpl$ModificationWatchpointRequestImpl$$static;
          interface _EventRequestManagerImpl$ModificationWatchpointRequestImpl {
            _eventCmd(): int;
            toString(): string;
          }
          interface EventRequestManagerImpl$ModificationWatchpointRequestImpl extends CombineTypes<[_EventRequestManagerImpl$ModificationWatchpointRequestImpl, com.sun.jdi.request.ModificationWatchpointRequest, com.sun.tools.jdi.EventRequestManagerImpl$WatchpointRequestImpl]> {}
          interface _EventRequestManagerImpl$MonitorContendedEnterRequestImpl$$static extends ClassLike {
            _new(this$0: EventRequestManagerImpl): EventRequestManagerImpl$MonitorContendedEnterRequestImpl;
          }
          let EventRequestManagerImpl$MonitorContendedEnterRequestImpl: _EventRequestManagerImpl$MonitorContendedEnterRequestImpl$$static;
          interface _EventRequestManagerImpl$MonitorContendedEnterRequestImpl {
            _eventCmd(): int;
            toString(): string;
          }
          interface EventRequestManagerImpl$MonitorContendedEnterRequestImpl extends CombineTypes<[_EventRequestManagerImpl$MonitorContendedEnterRequestImpl, com.sun.jdi.request.MonitorContendedEnterRequest, com.sun.tools.jdi.EventRequestManagerImpl$ClassVisibleEventRequestImpl]> {}
          interface _EventRequestManagerImpl$MonitorContendedEnteredRequestImpl$$static extends ClassLike {
            _new(this$0: EventRequestManagerImpl): EventRequestManagerImpl$MonitorContendedEnteredRequestImpl;
          }
          let EventRequestManagerImpl$MonitorContendedEnteredRequestImpl: _EventRequestManagerImpl$MonitorContendedEnteredRequestImpl$$static;
          interface _EventRequestManagerImpl$MonitorContendedEnteredRequestImpl {
            _eventCmd(): int;
            toString(): string;
          }
          interface EventRequestManagerImpl$MonitorContendedEnteredRequestImpl extends CombineTypes<[_EventRequestManagerImpl$MonitorContendedEnteredRequestImpl, com.sun.jdi.request.MonitorContendedEnteredRequest, com.sun.tools.jdi.EventRequestManagerImpl$ClassVisibleEventRequestImpl]> {}
          interface _EventRequestManagerImpl$MonitorWaitRequestImpl$$static extends ClassLike {
            _new(this$0: EventRequestManagerImpl): EventRequestManagerImpl$MonitorWaitRequestImpl;
          }
          let EventRequestManagerImpl$MonitorWaitRequestImpl: _EventRequestManagerImpl$MonitorWaitRequestImpl$$static;
          interface _EventRequestManagerImpl$MonitorWaitRequestImpl {
            _eventCmd(): int;
            toString(): string;
          }
          interface EventRequestManagerImpl$MonitorWaitRequestImpl extends CombineTypes<[_EventRequestManagerImpl$MonitorWaitRequestImpl, com.sun.jdi.request.MonitorWaitRequest, com.sun.tools.jdi.EventRequestManagerImpl$ClassVisibleEventRequestImpl]> {}
          interface _EventRequestManagerImpl$MonitorWaitedRequestImpl$$static extends ClassLike {
            _new(this$0: EventRequestManagerImpl): EventRequestManagerImpl$MonitorWaitedRequestImpl;
          }
          let EventRequestManagerImpl$MonitorWaitedRequestImpl: _EventRequestManagerImpl$MonitorWaitedRequestImpl$$static;
          interface _EventRequestManagerImpl$MonitorWaitedRequestImpl {
            _eventCmd(): int;
            toString(): string;
          }
          interface EventRequestManagerImpl$MonitorWaitedRequestImpl extends CombineTypes<[_EventRequestManagerImpl$MonitorWaitedRequestImpl, com.sun.jdi.request.MonitorWaitedRequest, com.sun.tools.jdi.EventRequestManagerImpl$ClassVisibleEventRequestImpl]> {}
          interface _EventRequestManagerImpl$StepRequestImpl$$static extends ClassLike {
            _new(this$0: EventRequestManagerImpl, thread: sun.jdi.ThreadReference, size: int, depth: int): EventRequestManagerImpl$StepRequestImpl;
          }
          let EventRequestManagerImpl$StepRequestImpl: _EventRequestManagerImpl$StepRequestImpl$$static;
          interface _EventRequestManagerImpl$StepRequestImpl {
            depth(): int;
            _eventCmd(): int;
            size(): int;
            thread(): sun.jdi.ThreadReference;
            toString(): string;
            _depth: int;
            _size: int;
            _thread: ThreadReferenceImpl;
          }
          interface EventRequestManagerImpl$StepRequestImpl extends CombineTypes<[_EventRequestManagerImpl$StepRequestImpl, com.sun.jdi.request.StepRequest, com.sun.tools.jdi.EventRequestManagerImpl$ClassVisibleEventRequestImpl]> {}
          interface _EventRequestManagerImpl$ThreadDeathRequestImpl$$static extends ClassLike {
            _new(this$0: EventRequestManagerImpl): EventRequestManagerImpl$ThreadDeathRequestImpl;
          }
          let EventRequestManagerImpl$ThreadDeathRequestImpl: _EventRequestManagerImpl$ThreadDeathRequestImpl$$static;
          interface _EventRequestManagerImpl$ThreadDeathRequestImpl {
            _eventCmd(): int;
            toString(): string;
          }
          interface EventRequestManagerImpl$ThreadDeathRequestImpl extends CombineTypes<[_EventRequestManagerImpl$ThreadDeathRequestImpl, com.sun.jdi.request.ThreadDeathRequest, com.sun.tools.jdi.EventRequestManagerImpl$ThreadLifecycleEventRequestImpl]> {}
          interface _EventRequestManagerImpl$ThreadLifecycleEventRequestImpl$$static extends ClassLike {
            _new(this$0: EventRequestManagerImpl): EventRequestManagerImpl$ThreadLifecycleEventRequestImpl;
          }
          let EventRequestManagerImpl$ThreadLifecycleEventRequestImpl: _EventRequestManagerImpl$ThreadLifecycleEventRequestImpl$$static;
          interface _EventRequestManagerImpl$ThreadLifecycleEventRequestImpl {
            addPlatformThreadsOnlyFilter(): void;
          }
          interface EventRequestManagerImpl$ThreadLifecycleEventRequestImpl extends CombineTypes<[_EventRequestManagerImpl$ThreadLifecycleEventRequestImpl, com.sun.tools.jdi.EventRequestManagerImpl$ThreadVisibleEventRequestImpl]> {}
          interface _EventRequestManagerImpl$ThreadStartRequestImpl$$static extends ClassLike {
            _new(this$0: EventRequestManagerImpl): EventRequestManagerImpl$ThreadStartRequestImpl;
          }
          let EventRequestManagerImpl$ThreadStartRequestImpl: _EventRequestManagerImpl$ThreadStartRequestImpl$$static;
          interface _EventRequestManagerImpl$ThreadStartRequestImpl {
            _eventCmd(): int;
            toString(): string;
          }
          interface EventRequestManagerImpl$ThreadStartRequestImpl extends CombineTypes<[_EventRequestManagerImpl$ThreadStartRequestImpl, com.sun.jdi.request.ThreadStartRequest, com.sun.tools.jdi.EventRequestManagerImpl$ThreadLifecycleEventRequestImpl]> {}
          interface _EventRequestManagerImpl$ThreadVisibleEventRequestImpl$$static extends ClassLike {
            _new(this$0: EventRequestManagerImpl): EventRequestManagerImpl$ThreadVisibleEventRequestImpl;
          }
          let EventRequestManagerImpl$ThreadVisibleEventRequestImpl: _EventRequestManagerImpl$ThreadVisibleEventRequestImpl$$static;
          interface _EventRequestManagerImpl$ThreadVisibleEventRequestImpl {
            addThreadFilter(thread: sun.jdi.ThreadReference): void;
          }
          interface EventRequestManagerImpl$ThreadVisibleEventRequestImpl extends CombineTypes<[_EventRequestManagerImpl$ThreadVisibleEventRequestImpl, com.sun.tools.jdi.EventRequestManagerImpl$EventRequestImpl]> {}
          interface _EventRequestManagerImpl$VMDeathRequestImpl$$static extends ClassLike {
            _new(this$0: EventRequestManagerImpl): EventRequestManagerImpl$VMDeathRequestImpl;
          }
          let EventRequestManagerImpl$VMDeathRequestImpl: _EventRequestManagerImpl$VMDeathRequestImpl$$static;
          interface _EventRequestManagerImpl$VMDeathRequestImpl {
            _eventCmd(): int;
            toString(): string;
          }
          interface EventRequestManagerImpl$VMDeathRequestImpl extends CombineTypes<[_EventRequestManagerImpl$VMDeathRequestImpl, com.sun.tools.jdi.EventRequestManagerImpl$EventRequestImpl, com.sun.jdi.request.VMDeathRequest]> {}
          interface _EventRequestManagerImpl$WatchpointRequestImpl$$static extends ClassLike {
            _new(this$0: EventRequestManagerImpl, field: sun.jdi.Field): EventRequestManagerImpl$WatchpointRequestImpl;
          }
          let EventRequestManagerImpl$WatchpointRequestImpl: _EventRequestManagerImpl$WatchpointRequestImpl$$static;
          interface _EventRequestManagerImpl$WatchpointRequestImpl {
            field(): sun.jdi.Field;
            _field: sun.jdi.Field;
          }
          interface EventRequestManagerImpl$WatchpointRequestImpl extends CombineTypes<[_EventRequestManagerImpl$WatchpointRequestImpl, com.sun.jdi.request.WatchpointRequest, com.sun.tools.jdi.EventRequestManagerImpl$ClassVisibleEventRequestImpl]> {}
          interface _EventSetImpl$$static extends ClassLike {
            _serialVersionUID: long;
            _new(aVm: sun.jdi.VirtualMachine, pkt: Packet): EventSetImpl;
            _new(aVm: sun.jdi.VirtualMachine, eventCmd: byte): EventSetImpl;
          }
          let EventSetImpl: _EventSetImpl$$static;
          interface _EventSetImpl {
            add(o: sun.jdi.event.Event): boolean;
            add(a0: any): boolean;
            addAll(coll: java.util.Collection<sun.jdi.event.Event>): boolean;
            _addEvent(evt: EventSetImpl$EventImpl): void;
            _build(): void;
            clear(): void;
            _createEvent(evt: JDWP$Event$Composite$Events): EventSetImpl$EventImpl;
            eventIterator(): sun.jdi.event.EventIterator;
            _eventThread(): sun.jdi.ThreadReference;
            _internalFilter(): sun.jdi.event.EventSet;
            iterator(): java.util.Iterator<sun.jdi.event.Event>;
            remove(o: any): boolean;
            removeAll(coll: java.util.Collection<any>): boolean;
            resume(): void;
            retainAll(coll: java.util.Collection<any>): boolean;
            spliterator(): java.util.Spliterator<sun.jdi.event.Event>;
            suspendPolicy(): int;
            toString(): string;
            _userFilter(): sun.jdi.event.EventSet;
            virtualMachine(): sun.jdi.VirtualMachine;
            _internalEventSet: EventSetImpl;
            _pkt: Packet;
            _suspendPolicy: byte;
            _vm: VirtualMachineImpl;
          }
          interface EventSetImpl extends CombineTypes<[_EventSetImpl, java.util.ArrayList<sun.jdi.event.Event>, sun.jdi.event.EventSet]> {}
          interface _EventSetImpl$AccessWatchpointEventImpl$$static extends ClassLike {
            _new(this$0: EventSetImpl, evt: JDWP$Event$Composite$Events$FieldAccess): EventSetImpl$AccessWatchpointEventImpl;
          }
          let EventSetImpl$AccessWatchpointEventImpl: _EventSetImpl$AccessWatchpointEventImpl$$static;
          interface _EventSetImpl$AccessWatchpointEventImpl {
            _eventName(): string;
          }
          interface EventSetImpl$AccessWatchpointEventImpl extends CombineTypes<[_EventSetImpl$AccessWatchpointEventImpl, com.sun.tools.jdi.EventSetImpl$WatchpointEventImpl, com.sun.jdi.event.AccessWatchpointEvent]> {}
          interface _EventSetImpl$BreakpointEventImpl$$static extends ClassLike {
            _new(this$0: EventSetImpl, evt: JDWP$Event$Composite$Events$Breakpoint): EventSetImpl$BreakpointEventImpl;
          }
          let EventSetImpl$BreakpointEventImpl: _EventSetImpl$BreakpointEventImpl$$static;
          interface _EventSetImpl$BreakpointEventImpl {
            _eventName(): string;
          }
          interface EventSetImpl$BreakpointEventImpl extends CombineTypes<[_EventSetImpl$BreakpointEventImpl, com.sun.jdi.event.BreakpointEvent, com.sun.tools.jdi.EventSetImpl$LocatableEventImpl]> {}
          interface _EventSetImpl$ClassPrepareEventImpl$$static extends ClassLike {
            _new(this$0: EventSetImpl, evt: JDWP$Event$Composite$Events$ClassPrepare): EventSetImpl$ClassPrepareEventImpl;
          }
          let EventSetImpl$ClassPrepareEventImpl: _EventSetImpl$ClassPrepareEventImpl$$static;
          interface _EventSetImpl$ClassPrepareEventImpl {
            _eventName(): string;
            referenceType(): sun.jdi.ReferenceType;
            _referenceType: sun.jdi.ReferenceType;
          }
          interface EventSetImpl$ClassPrepareEventImpl extends CombineTypes<[_EventSetImpl$ClassPrepareEventImpl, com.sun.jdi.event.ClassPrepareEvent, com.sun.tools.jdi.EventSetImpl$ThreadedEventImpl]> {}
          interface _EventSetImpl$ClassUnloadEventImpl$$static extends ClassLike {
            _new(this$0: EventSetImpl, evt: JDWP$Event$Composite$Events$ClassUnload): EventSetImpl$ClassUnloadEventImpl;
          }
          let EventSetImpl$ClassUnloadEventImpl: _EventSetImpl$ClassUnloadEventImpl$$static;
          interface _EventSetImpl$ClassUnloadEventImpl {
            className(): string;
            classSignature(): string;
            _eventName(): string;
            _classSignature: string;
          }
          interface EventSetImpl$ClassUnloadEventImpl extends CombineTypes<[_EventSetImpl$ClassUnloadEventImpl, com.sun.jdi.event.ClassUnloadEvent, com.sun.tools.jdi.EventSetImpl$EventImpl]> {}
          interface _EventSetImpl$EventImpl$$static extends ClassLike {
            _new(this$0: EventSetImpl, evt: JDWP$Event$Composite$Events$EventsCommon, requestID: int): EventSetImpl$EventImpl;
            _new(this$0: EventSetImpl, eventCmd: byte): EventSetImpl$EventImpl;
          }
          let EventSetImpl$EventImpl: _EventSetImpl$EventImpl$$static;
          interface _EventSetImpl$EventImpl {
            _destination(): EventDestination;
            equals(obj: any): boolean;
            _eventName(): string;
(): string;
            hashCode(): int;
            request(): sun.jdi.request.EventRequest;
            _requestID(): int;
            toString(): string;
            _eventCmd: byte;
            _request: sun.jdi.request.EventRequest;
            _requestID: int;
          }
          interface EventSetImpl$EventImpl extends CombineTypes<[_EventSetImpl$EventImpl, com.sun.jdi.event.Event, com.sun.tools.jdi.MirrorImpl]> {}
          interface _EventSetImpl$ExceptionEventImpl$$static extends ClassLike {
            _new(this$0: EventSetImpl, evt: JDWP$Event$Composite$Events$Exception): EventSetImpl$ExceptionEventImpl;
          }
          let EventSetImpl$ExceptionEventImpl: _EventSetImpl$ExceptionEventImpl$$static;
          interface _EventSetImpl$ExceptionEventImpl {
            catchLocation(): sun.jdi.Location;
            _eventName(): string;
            exception(): sun.jdi.ObjectReference;
            _catchLocation: sun.jdi.Location;
            _exception: sun.jdi.ObjectReference;
          }
          interface EventSetImpl$ExceptionEventImpl extends CombineTypes<[_EventSetImpl$ExceptionEventImpl, com.sun.tools.jdi.EventSetImpl$LocatableEventImpl, com.sun.jdi.event.ExceptionEvent]> {}
          interface _EventSetImpl$Itr$$static extends ClassLike {
            new(this$0: EventSetImpl): EventSetImpl$Itr;
          }
          let EventSetImpl$Itr: _EventSetImpl$Itr$$static;
          interface _EventSetImpl$Itr {
            hasNext(): boolean;
            next(): sun.jdi.event.Event;
            next(): any;
            nextEvent(): sun.jdi.event.Event;
            remove(): void;
            _cursor: int;
            _this$0: EventSetImpl;
          }
          interface EventSetImpl$Itr extends CombineTypes<[_EventSetImpl$Itr, java.lang.Object, com.sun.jdi.event.EventIterator]> {}
          interface _EventSetImpl$LocatableEventImpl$$static extends ClassLike {
            _new(this$0: EventSetImpl, evt: JDWP$Event$Composite$Events$EventsCommon, requestID: int, thread: sun.jdi.ThreadReference, location: sun.jdi.Location): EventSetImpl$LocatableEventImpl;
          }
          let EventSetImpl$LocatableEventImpl: _EventSetImpl$LocatableEventImpl$$static;
          interface _EventSetImpl$LocatableEventImpl {
            location(): sun.jdi.Location;
            method(): sun.jdi.Method;
            toString(): string;
            _location: sun.jdi.Location;
          }
          interface EventSetImpl$LocatableEventImpl extends CombineTypes<[_EventSetImpl$LocatableEventImpl, com.sun.jdi.Locatable, com.sun.tools.jdi.EventSetImpl$ThreadedEventImpl]> {}
          interface _EventSetImpl$MethodEntryEventImpl$$static extends ClassLike {
            _new(this$0: EventSetImpl, evt: JDWP$Event$Composite$Events$MethodEntry): EventSetImpl$MethodEntryEventImpl;
          }
          let EventSetImpl$MethodEntryEventImpl: _EventSetImpl$MethodEntryEventImpl$$static;
          interface _EventSetImpl$MethodEntryEventImpl {
            _eventName(): string;
          }
          interface EventSetImpl$MethodEntryEventImpl extends CombineTypes<[_EventSetImpl$MethodEntryEventImpl, com.sun.jdi.event.MethodEntryEvent, com.sun.tools.jdi.EventSetImpl$LocatableEventImpl]> {}
          interface _EventSetImpl$MethodExitEventImpl$$static extends ClassLike {
            _new(this$0: EventSetImpl, evt: JDWP$Event$Composite$Events$MethodExit): EventSetImpl$MethodExitEventImpl;
            _new(this$0: EventSetImpl, evt: JDWP$Event$Composite$Events$MethodExitWithReturnValue): EventSetImpl$MethodExitEventImpl;
          }
          let EventSetImpl$MethodExitEventImpl: _EventSetImpl$MethodExitEventImpl$$static;
          interface _EventSetImpl$MethodExitEventImpl {
            _eventName(): string;
            returnValue(): sun.jdi.Value;
            _returnVal: sun.jdi.Value;
          }
          interface EventSetImpl$MethodExitEventImpl extends CombineTypes<[_EventSetImpl$MethodExitEventImpl, com.sun.tools.jdi.EventSetImpl$LocatableEventImpl, com.sun.jdi.event.MethodExitEvent]> {}
          interface _EventSetImpl$ModificationWatchpointEventImpl$$static extends ClassLike {
            _new(this$0: EventSetImpl, evt: JDWP$Event$Composite$Events$FieldModification): EventSetImpl$ModificationWatchpointEventImpl;
          }
          let EventSetImpl$ModificationWatchpointEventImpl: _EventSetImpl$ModificationWatchpointEventImpl$$static;
          interface _EventSetImpl$ModificationWatchpointEventImpl {
            _eventName(): string;
            valueToBe(): sun.jdi.Value;
            _newValue: sun.jdi.Value;
          }
          interface EventSetImpl$ModificationWatchpointEventImpl extends CombineTypes<[_EventSetImpl$ModificationWatchpointEventImpl, com.sun.tools.jdi.EventSetImpl$WatchpointEventImpl, com.sun.jdi.event.ModificationWatchpointEvent]> {}
          interface _EventSetImpl$MonitorContendedEnterEventImpl$$static extends ClassLike {
            _new(this$0: EventSetImpl, evt: JDWP$Event$Composite$Events$MonitorContendedEnter): EventSetImpl$MonitorContendedEnterEventImpl;
          }
          let EventSetImpl$MonitorContendedEnterEventImpl: _EventSetImpl$MonitorContendedEnterEventImpl$$static;
          interface _EventSetImpl$MonitorContendedEnterEventImpl {
            _eventName(): string;
            monitor(): sun.jdi.ObjectReference;
            _monitor: sun.jdi.ObjectReference;
          }
          interface EventSetImpl$MonitorContendedEnterEventImpl extends CombineTypes<[_EventSetImpl$MonitorContendedEnterEventImpl, com.sun.tools.jdi.EventSetImpl$LocatableEventImpl, com.sun.jdi.event.MonitorContendedEnterEvent]> {}
          interface _EventSetImpl$MonitorContendedEnteredEventImpl$$static extends ClassLike {
            _new(this$0: EventSetImpl, evt: JDWP$Event$Composite$Events$MonitorContendedEntered): EventSetImpl$MonitorContendedEnteredEventImpl;
          }
          let EventSetImpl$MonitorContendedEnteredEventImpl: _EventSetImpl$MonitorContendedEnteredEventImpl$$static;
          interface _EventSetImpl$MonitorContendedEnteredEventImpl {
            _eventName(): string;
            monitor(): sun.jdi.ObjectReference;
            _monitor: sun.jdi.ObjectReference;
          }
          interface EventSetImpl$MonitorContendedEnteredEventImpl extends CombineTypes<[_EventSetImpl$MonitorContendedEnteredEventImpl, com.sun.tools.jdi.EventSetImpl$LocatableEventImpl, com.sun.jdi.event.MonitorContendedEnteredEvent]> {}
          interface _EventSetImpl$MonitorWaitEventImpl$$static extends ClassLike {
            _new(this$0: EventSetImpl, evt: JDWP$Event$Composite$Events$MonitorWait): EventSetImpl$MonitorWaitEventImpl;
          }
          let EventSetImpl$MonitorWaitEventImpl: _EventSetImpl$MonitorWaitEventImpl$$static;
          interface _EventSetImpl$MonitorWaitEventImpl {
            _eventName(): string;
            monitor(): sun.jdi.ObjectReference;
            timeout(): long;
            _monitor: sun.jdi.ObjectReference;
            _timeout: long;
          }
          interface EventSetImpl$MonitorWaitEventImpl extends CombineTypes<[_EventSetImpl$MonitorWaitEventImpl, com.sun.tools.jdi.EventSetImpl$LocatableEventImpl, com.sun.jdi.event.MonitorWaitEvent]> {}
          interface _EventSetImpl$MonitorWaitedEventImpl$$static extends ClassLike {
            _new(this$0: EventSetImpl, evt: JDWP$Event$Composite$Events$MonitorWaited): EventSetImpl$MonitorWaitedEventImpl;
          }
          let EventSetImpl$MonitorWaitedEventImpl: _EventSetImpl$MonitorWaitedEventImpl$$static;
          interface _EventSetImpl$MonitorWaitedEventImpl {
            _eventName(): string;
            monitor(): sun.jdi.ObjectReference;
            timedout(): boolean;
            _monitor: sun.jdi.ObjectReference;
            _timed_out: boolean;
          }
          interface EventSetImpl$MonitorWaitedEventImpl extends CombineTypes<[_EventSetImpl$MonitorWaitedEventImpl, com.sun.tools.jdi.EventSetImpl$LocatableEventImpl, com.sun.jdi.event.MonitorWaitedEvent]> {}
          interface _EventSetImpl$StepEventImpl$$static extends ClassLike {
            _new(this$0: EventSetImpl, evt: JDWP$Event$Composite$Events$SingleStep): EventSetImpl$StepEventImpl;
          }
          let EventSetImpl$StepEventImpl: _EventSetImpl$StepEventImpl$$static;
          interface _EventSetImpl$StepEventImpl {
            _eventName(): string;
          }
          interface EventSetImpl$StepEventImpl extends CombineTypes<[_EventSetImpl$StepEventImpl, com.sun.tools.jdi.EventSetImpl$LocatableEventImpl, com.sun.jdi.event.StepEvent]> {}
          interface _EventSetImpl$ThreadDeathEventImpl$$static extends ClassLike {
            _new(this$0: EventSetImpl, evt: JDWP$Event$Composite$Events$ThreadDeath): EventSetImpl$ThreadDeathEventImpl;
          }
          let EventSetImpl$ThreadDeathEventImpl: _EventSetImpl$ThreadDeathEventImpl$$static;
          interface _EventSetImpl$ThreadDeathEventImpl {
            _eventName(): string;
          }
          interface EventSetImpl$ThreadDeathEventImpl extends CombineTypes<[_EventSetImpl$ThreadDeathEventImpl, com.sun.jdi.event.ThreadDeathEvent, com.sun.tools.jdi.EventSetImpl$ThreadedEventImpl]> {}
          interface _EventSetImpl$ThreadStartEventImpl$$static extends ClassLike {
            _new(this$0: EventSetImpl, evt: JDWP$Event$Composite$Events$ThreadStart): EventSetImpl$ThreadStartEventImpl;
          }
          let EventSetImpl$ThreadStartEventImpl: _EventSetImpl$ThreadStartEventImpl$$static;
          interface _EventSetImpl$ThreadStartEventImpl {
            _eventName(): string;
          }
          interface EventSetImpl$ThreadStartEventImpl extends CombineTypes<[_EventSetImpl$ThreadStartEventImpl, com.sun.jdi.event.ThreadStartEvent, com.sun.tools.jdi.EventSetImpl$ThreadedEventImpl]> {}
          interface _EventSetImpl$ThreadedEventImpl$$static extends ClassLike {
            _new(this$0: EventSetImpl, evt: JDWP$Event$Composite$Events$EventsCommon, requestID: int, thread: sun.jdi.ThreadReference): EventSetImpl$ThreadedEventImpl;
          }
          let EventSetImpl$ThreadedEventImpl: _EventSetImpl$ThreadedEventImpl$$static;
          interface _EventSetImpl$ThreadedEventImpl {
            thread(): sun.jdi.ThreadReference;
            toString(): string;
            _thread: sun.jdi.ThreadReference;
          }
          interface EventSetImpl$ThreadedEventImpl extends CombineTypes<[_EventSetImpl$ThreadedEventImpl, com.sun.tools.jdi.EventSetImpl$EventImpl]> {}
          interface _EventSetImpl$VMDeathEventImpl$$static extends ClassLike {
            _new(this$0: EventSetImpl, evt: JDWP$Event$Composite$Events$VMDeath): EventSetImpl$VMDeathEventImpl;
          }
          let EventSetImpl$VMDeathEventImpl: _EventSetImpl$VMDeathEventImpl$$static;
          interface _EventSetImpl$VMDeathEventImpl {
            _eventName(): string;
          }
          interface EventSetImpl$VMDeathEventImpl extends CombineTypes<[_EventSetImpl$VMDeathEventImpl, com.sun.jdi.event.VMDeathEvent, com.sun.tools.jdi.EventSetImpl$EventImpl]> {}
          interface _EventSetImpl$VMDisconnectEventImpl$$static extends ClassLike {
            _new(this$0: EventSetImpl): EventSetImpl$VMDisconnectEventImpl;
          }
          let EventSetImpl$VMDisconnectEventImpl: _EventSetImpl$VMDisconnectEventImpl$$static;
          interface _EventSetImpl$VMDisconnectEventImpl {
            _eventName(): string;
          }
          interface EventSetImpl$VMDisconnectEventImpl extends CombineTypes<[_EventSetImpl$VMDisconnectEventImpl, com.sun.jdi.event.VMDisconnectEvent, com.sun.tools.jdi.EventSetImpl$EventImpl]> {}
          interface _EventSetImpl$VMStartEventImpl$$static extends ClassLike {
            _new(this$0: EventSetImpl, evt: JDWP$Event$Composite$Events$VMStart): EventSetImpl$VMStartEventImpl;
          }
          let EventSetImpl$VMStartEventImpl: _EventSetImpl$VMStartEventImpl$$static;
          interface _EventSetImpl$VMStartEventImpl {
            _eventName(): string;
          }
          interface EventSetImpl$VMStartEventImpl extends CombineTypes<[_EventSetImpl$VMStartEventImpl, com.sun.jdi.event.VMStartEvent, com.sun.tools.jdi.EventSetImpl$ThreadedEventImpl]> {}
          interface _EventSetImpl$WatchpointEventImpl$$static extends ClassLike {
            _new(this$0: EventSetImpl, evt: JDWP$Event$Composite$Events$EventsCommon, requestID: int, thread: sun.jdi.ThreadReference, location: sun.jdi.Location, refTypeTag: byte, typeID: long, a7: long, fieldID: sun.jdi.ObjectReference): EventSetImpl$WatchpointEventImpl;
          }
          let EventSetImpl$WatchpointEventImpl: _EventSetImpl$WatchpointEventImpl$$static;
          interface _EventSetImpl$WatchpointEventImpl {
            field(): sun.jdi.Field;
            object(): sun.jdi.ObjectReference;
            valueCurrent(): sun.jdi.Value;
            _field: sun.jdi.Field;
            _fieldID: long;
            _object: sun.jdi.ObjectReference;
            _refType: ReferenceTypeImpl;
          }
          interface EventSetImpl$WatchpointEventImpl extends CombineTypes<[_EventSetImpl$WatchpointEventImpl, com.sun.tools.jdi.EventSetImpl$LocatableEventImpl, com.sun.jdi.event.WatchpointEvent]> {}
          interface _FieldImpl$$static extends ClassLike {
            _new(vm: sun.jdi.VirtualMachine, declaringType: ReferenceTypeImpl, ref: long, a3: string, name: string, signature: string, genericSignature: int): FieldImpl;
          }
          let FieldImpl: _FieldImpl$$static;
          interface _FieldImpl {
            compareTo(field: sun.jdi.Field): int;
            compareTo(a0: any): int;
            equals(obj: any): boolean;
            findType(signature: string): sun.jdi.Type;
            hashCode(): int;
            isEnumConstant(): boolean;
            isTransient(): boolean;
            isVolatile(): boolean;
            toString(): string;
            type(): sun.jdi.Type;
            typeName(): string;
          }
          interface FieldImpl extends CombineTypes<[_FieldImpl, com.sun.tools.jdi.TypeComponentImpl, com.sun.jdi.Field, com.sun.tools.jdi.ValueContainer]> {}
          interface _FloatTypeImpl$$static extends ClassLike {
            _new(vm: sun.jdi.VirtualMachine): FloatTypeImpl;
          }
          let FloatTypeImpl: _FloatTypeImpl$$static;
          interface _FloatTypeImpl {
            _convert(value: sun.jdi.PrimitiveValue): sun.jdi.PrimitiveValue;
            signature(): string;
            toString(): string;
          }
          interface FloatTypeImpl extends CombineTypes<[_FloatTypeImpl, com.sun.tools.jdi.PrimitiveTypeImpl, com.sun.jdi.FloatType]> {}
          interface _FloatValueImpl$$static extends ClassLike {
            _new(aVm: sun.jdi.VirtualMachine, aValue: float): FloatValueImpl;
          }
          let FloatValueImpl: _FloatValueImpl$$static;
          interface _FloatValueImpl {
            booleanValue(): boolean;
            byteValue(): byte;
            charValue(): char;
            _checkedByteValue(): byte;
            _checkedCharValue(): char;
            _checkedIntValue(): int;
            _checkedLongValue(): long;
            _checkedShortValue(): short;
            compareTo(obj: sun.jdi.FloatValue): int;
            compareTo(a0: any): int;
            doubleValue(): double;
            equals(obj: any): boolean;
            floatValue(): float;
            hashCode(): int;
            intValue(): int;
            longValue(): long;
            shortValue(): short;
            toString(): string;
            type(): sun.jdi.Type;
            _typeValueKey(): byte;
            value(): float;
            _value: float;
          }
          interface FloatValueImpl extends CombineTypes<[_FloatValueImpl, com.sun.tools.jdi.PrimitiveValueImpl, com.sun.jdi.FloatValue]> {}
          interface _GenericAttachingConnector$$static extends ClassLike {
            create(ts: sun.jdi.connect.spi.TransportService): GenericAttachingConnector;
            _ARG_ADDRESS: string;
            _ARG_TIMEOUT: string;
            _new(ts: sun.jdi.connect.spi.TransportService): GenericAttachingConnector;
          }
          let GenericAttachingConnector: _GenericAttachingConnector$$static;
          interface _GenericAttachingConnector {
            attach(address: string, args: java.util.Map<string,sun.jdi.connect.Connector$Argument>): sun.jdi.VirtualMachine;
            attach(args: java.util.Map<string,sun.jdi.connect.Connector$Argument>): sun.jdi.VirtualMachine;
            defaultArguments(): java.util.Map;
            description(): string;
            name(): string;
            toString(): string;
            transport(): sun.jdi.connect.Transport;
            _transport: sun.jdi.connect.Transport;
            _transportService: sun.jdi.connect.spi.TransportService;
          }
          interface GenericAttachingConnector extends CombineTypes<[_GenericAttachingConnector, com.sun.jdi.connect.AttachingConnector, com.sun.tools.jdi.ConnectorImpl]> {}
          interface _GenericListeningConnector$$static extends ClassLike {
            create(ts: sun.jdi.connect.spi.TransportService): GenericListeningConnector;
            _ARG_ADDRESS: string;
            _ARG_TIMEOUT: string;
            _new(ts: sun.jdi.connect.spi.TransportService): GenericListeningConnector;
          }
          let GenericListeningConnector: _GenericListeningConnector$$static;
          interface _GenericListeningConnector {
            accept(args: java.util.Map<string,sun.jdi.connect.Connector$Argument>): sun.jdi.VirtualMachine;
            defaultArguments(): java.util.Map;
            description(): string;
            name(): string;
            startListening(address: string, args: java.util.Map<string,sun.jdi.connect.Connector$Argument>): string;
            startListening(args: java.util.Map<string,sun.jdi.connect.Connector$Argument>): string;
            stopListening(args: java.util.Map<string,sun.jdi.connect.Connector$Argument>): void;
            supportsMultipleConnections(): boolean;
            toString(): string;
            transport(): sun.jdi.connect.Transport;
            _updateArgumentMapIfRequired(args: java.util.Map<string,sun.jdi.connect.Connector$Argument>, listener: sun.jdi.connect.spi.TransportService$ListenKey): void;
            _listenMap: java.util.Map<java.util.Map<string,sun.jdi.connect.Connector$Argument>,sun.jdi.connect.spi.TransportService$ListenKey>;
            _transport: sun.jdi.connect.Transport;
            _transportService: sun.jdi.connect.spi.TransportService;
          }
          interface GenericListeningConnector extends CombineTypes<[_GenericListeningConnector, com.sun.tools.jdi.ConnectorImpl, com.sun.jdi.connect.ListeningConnector]> {}
          interface _IntegerTypeImpl$$static extends ClassLike {
            _new(vm: sun.jdi.VirtualMachine): IntegerTypeImpl;
          }
          let IntegerTypeImpl: _IntegerTypeImpl$$static;
          interface _IntegerTypeImpl {
            _convert(value: sun.jdi.PrimitiveValue): sun.jdi.PrimitiveValue;
            signature(): string;
            toString(): string;
          }
          interface IntegerTypeImpl extends CombineTypes<[_IntegerTypeImpl, com.sun.tools.jdi.PrimitiveTypeImpl, com.sun.jdi.IntegerType]> {}
          interface _IntegerValueImpl$$static extends ClassLike {
            _new(aVm: sun.jdi.VirtualMachine, aValue: int): IntegerValueImpl;
          }
          let IntegerValueImpl: _IntegerValueImpl$$static;
          interface _IntegerValueImpl {
            booleanValue(): boolean;
            byteValue(): byte;
            charValue(): char;
            _checkedByteValue(): byte;
            _checkedCharValue(): char;
            _checkedShortValue(): short;
            compareTo(obj: sun.jdi.IntegerValue): int;
            compareTo(a0: any): int;
            doubleValue(): double;
            equals(obj: any): boolean;
            floatValue(): float;
            hashCode(): int;
            intValue(): int;
            longValue(): long;
            shortValue(): short;
            toString(): string;
            type(): sun.jdi.Type;
            _typeValueKey(): byte;
            value(): int;
            _value: int;
          }
          interface IntegerValueImpl extends CombineTypes<[_IntegerValueImpl, com.sun.jdi.IntegerValue, com.sun.tools.jdi.PrimitiveValueImpl]> {}
          interface _InterfaceTypeImpl$$static extends ClassLike {
            _new(aVm: sun.jdi.VirtualMachine, aRef: long): InterfaceTypeImpl;
          }
          let InterfaceTypeImpl: _InterfaceTypeImpl$$static;
          interface _InterfaceTypeImpl {
            _canInvoke(method: sun.jdi.Method): boolean;
            _getInvokeMethodSender(thread: ThreadReferenceImpl, method: MethodImpl, args: ValueImpl[], options: int): CommandSender;
            implementors(): java.util.List<sun.jdi.ClassType>;
            _interfaces(): java.util.List<sun.jdi.InterfaceType>;
            _isAssignableTo(type: sun.jdi.ReferenceType): boolean;
            isInitialized(): boolean;
            subinterfaces(): java.util.List<sun.jdi.InterfaceType>;
            _superclass(): sun.jdi.ClassType;
            superinterfaces(): java.util.List<sun.jdi.InterfaceType>;
            toString(): string;
            _waitForReply(stream: PacketStream): InvokableTypeImpl$InvocationResult;
            _superinterfacesRef: java.lang.ref.SoftReference<java.util.List<sun.jdi.InterfaceType>>;
          }
          interface InterfaceTypeImpl extends CombineTypes<[_InterfaceTypeImpl, com.sun.tools.jdi.InvokableTypeImpl, com.sun.jdi.InterfaceType]> {}
          interface _InterfaceTypeImpl$IResult$$static extends ClassLike {
            new(rslt: JDWP$InterfaceType$InvokeMethod): InterfaceTypeImpl$IResult;
          }
          let InterfaceTypeImpl$IResult: _InterfaceTypeImpl$IResult$$static;
          interface _InterfaceTypeImpl$IResult {
            getException(): ObjectReferenceImpl;
            getResult(): ValueImpl;
            _rslt: JDWP$InterfaceType$InvokeMethod;
          }
          interface InterfaceTypeImpl$IResult extends CombineTypes<[_InterfaceTypeImpl$IResult, java.lang.Object, com.sun.tools.jdi.InvokableTypeImpl$InvocationResult]> {}
          interface _InternalEventHandler$$static extends ClassLike {
            _new(vm: VirtualMachineImpl, queue: EventQueueImpl): InternalEventHandler;
          }
          let InternalEventHandler: _InternalEventHandler$$static;
          interface _InternalEventHandler {
            run(): void;
            _queue: EventQueueImpl;
            _vm: VirtualMachineImpl;
          }
          interface InternalEventHandler extends CombineTypes<[_InternalEventHandler, java.lang.Object, java.lang.Runnable]> {}
          interface _InvokableTypeImpl$$static extends ClassLike {
            _new(aVm: sun.jdi.VirtualMachine, aRef: long): InvokableTypeImpl;
          }
          let InvokableTypeImpl: _InvokableTypeImpl$$static;
          interface _InvokableTypeImpl {
            _addInterfaces(list: java.util.List<sun.jdi.InterfaceType>): void;
            _addVisibleMethods(methodMap: java.util.Map<string,sun.jdi.Method>, seenInterfaces: java.util.Set<sun.jdi.InterfaceType>): void;
            allMethods(): java.util.List<sun.jdi.Method>;
            _canInvoke(a0: sun.jdi.Method): boolean;
            _getAllInterfaces(): java.util.List<sun.jdi.InterfaceType>;
            _getInvokeMethodSender(a0: ThreadReferenceImpl, a1: MethodImpl, a2: ValueImpl[], a3: int): CommandSender;
            _inheritedTypes(): java.util.List<sun.jdi.ReferenceType>;
            _interfaces(): java.util.List<sun.jdi.InterfaceType>;
            invokeMethod(threadIntf: sun.jdi.ThreadReference, methodIntf: sun.jdi.Method, origArguments: java.util.List<sun.jdi.Value>, options: int): sun.jdi.Value;
            _isAssignableTo(type: sun.jdi.ReferenceType): boolean;
            _sendInvokeCommand(thread: ThreadReferenceImpl, method: MethodImpl, args: ValueImpl[], options: int): PacketStream;
            _superclass(): sun.jdi.ClassType;
            _validateMethodInvocation(method: sun.jdi.Method): void;
            _waitForReply(a0: PacketStream): InvokableTypeImpl$InvocationResult;
          }
          interface InvokableTypeImpl extends CombineTypes<[_InvokableTypeImpl, com.sun.tools.jdi.ReferenceTypeImpl]> {}
          interface _InvokableTypeImpl$InvocationResult$$static extends ClassLike {
          }
          let InvokableTypeImpl$InvocationResult: _InvokableTypeImpl$InvocationResult$$static;
          interface _InvokableTypeImpl$InvocationResult {
            getException(): ObjectReferenceImpl;
            getResult(): ValueImpl;
          }
          interface InvokableTypeImpl$InvocationResult extends CombineTypes<[_InvokableTypeImpl$InvocationResult, java.lang.Object]> {}
          interface _JDWP$$static extends ClassLike {
            _new(): JDWP;
          }
          let JDWP: _JDWP$$static;
          interface _JDWP {
          }
          interface JDWP extends CombineTypes<[_JDWP, java.lang.Object]> {}
          interface _JDWP$ArrayReference$$static extends ClassLike {
            _COMMAND_SET: int;
          }
          let JDWP$ArrayReference: _JDWP$ArrayReference$$static;
          interface _JDWP$ArrayReference {
          }
          interface JDWP$ArrayReference extends CombineTypes<[_JDWP$ArrayReference, java.lang.Object]> {}
          interface _JDWP$ArrayReference$GetValues$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, arrayObject: ArrayReferenceImpl, firstIndex: int, length: int): PacketStream;
            _process(vm: VirtualMachineImpl, arrayObject: ArrayReferenceImpl, firstIndex: int, length: int): JDWP$ArrayReference$GetValues;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ArrayReference$GetValues;
            _COMMAND: int;
          }
          let JDWP$ArrayReference$GetValues: _JDWP$ArrayReference$GetValues$$static;
          interface _JDWP$ArrayReference$GetValues {
            _values: java.util.List<any>;
          }
          interface JDWP$ArrayReference$GetValues extends CombineTypes<[_JDWP$ArrayReference$GetValues, java.lang.Object]> {}
          interface _JDWP$ArrayReference$Length$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, arrayObject: ArrayReferenceImpl): PacketStream;
            _process(vm: VirtualMachineImpl, arrayObject: ArrayReferenceImpl): JDWP$ArrayReference$Length;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ArrayReference$Length;
            _COMMAND: int;
          }
          let JDWP$ArrayReference$Length: _JDWP$ArrayReference$Length$$static;
          interface _JDWP$ArrayReference$Length {
            _arrayLength: int;
          }
          interface JDWP$ArrayReference$Length extends CombineTypes<[_JDWP$ArrayReference$Length, java.lang.Object]> {}
          interface _JDWP$ArrayReference$SetValues$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, arrayObject: ArrayReferenceImpl, firstIndex: int, values: ValueImpl[]): PacketStream;
            _process(vm: VirtualMachineImpl, arrayObject: ArrayReferenceImpl, firstIndex: int, values: ValueImpl[]): JDWP$ArrayReference$SetValues;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ArrayReference$SetValues;
            _COMMAND: int;
          }
          let JDWP$ArrayReference$SetValues: _JDWP$ArrayReference$SetValues$$static;
          interface _JDWP$ArrayReference$SetValues {
          }
          interface JDWP$ArrayReference$SetValues extends CombineTypes<[_JDWP$ArrayReference$SetValues, java.lang.Object]> {}
          interface _JDWP$ArrayType$$static extends ClassLike {
            _COMMAND_SET: int;
          }
          let JDWP$ArrayType: _JDWP$ArrayType$$static;
          interface _JDWP$ArrayType {
          }
          interface JDWP$ArrayType extends CombineTypes<[_JDWP$ArrayType, java.lang.Object]> {}
          interface _JDWP$ArrayType$NewInstance$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, arrType: ArrayTypeImpl, length: int): PacketStream;
            _process(vm: VirtualMachineImpl, arrType: ArrayTypeImpl, length: int): JDWP$ArrayType$NewInstance;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ArrayType$NewInstance;
            _COMMAND: int;
          }
          let JDWP$ArrayType$NewInstance: _JDWP$ArrayType$NewInstance$$static;
          interface _JDWP$ArrayType$NewInstance {
            _newArray: ObjectReferenceImpl;
          }
          interface JDWP$ArrayType$NewInstance extends CombineTypes<[_JDWP$ArrayType$NewInstance, java.lang.Object]> {}
          interface _JDWP$ClassLoaderReference$$static extends ClassLike {
            _COMMAND_SET: int;
          }
          let JDWP$ClassLoaderReference: _JDWP$ClassLoaderReference$$static;
          interface _JDWP$ClassLoaderReference {
          }
          interface JDWP$ClassLoaderReference extends CombineTypes<[_JDWP$ClassLoaderReference, java.lang.Object]> {}
          interface _JDWP$ClassLoaderReference$VisibleClasses$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, classLoaderObject: ClassLoaderReferenceImpl): PacketStream;
            _process(vm: VirtualMachineImpl, classLoaderObject: ClassLoaderReferenceImpl): JDWP$ClassLoaderReference$VisibleClasses;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ClassLoaderReference$VisibleClasses;
            _COMMAND: int;
          }
          let JDWP$ClassLoaderReference$VisibleClasses: _JDWP$ClassLoaderReference$VisibleClasses$$static;
          interface _JDWP$ClassLoaderReference$VisibleClasses {
            _classes: JDWP$ClassLoaderReference$VisibleClasses$ClassInfo[];
          }
          interface JDWP$ClassLoaderReference$VisibleClasses extends CombineTypes<[_JDWP$ClassLoaderReference$VisibleClasses, java.lang.Object]> {}
          interface _JDWP$ClassLoaderReference$VisibleClasses$ClassInfo$$static extends ClassLike {
          }
          let JDWP$ClassLoaderReference$VisibleClasses$ClassInfo: _JDWP$ClassLoaderReference$VisibleClasses$ClassInfo$$static;
          interface _JDWP$ClassLoaderReference$VisibleClasses$ClassInfo {
            _refTypeTag: byte;
            _typeID: long;
          }
          interface JDWP$ClassLoaderReference$VisibleClasses$ClassInfo extends CombineTypes<[_JDWP$ClassLoaderReference$VisibleClasses$ClassInfo, java.lang.Object]> {}
          interface _JDWP$ClassObjectReference$$static extends ClassLike {
            _COMMAND_SET: int;
          }
          let JDWP$ClassObjectReference: _JDWP$ClassObjectReference$$static;
          interface _JDWP$ClassObjectReference {
          }
          interface JDWP$ClassObjectReference extends CombineTypes<[_JDWP$ClassObjectReference, java.lang.Object]> {}
          interface _JDWP$ClassObjectReference$ReflectedType$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, classObject: ClassObjectReferenceImpl): PacketStream;
            _process(vm: VirtualMachineImpl, classObject: ClassObjectReferenceImpl): JDWP$ClassObjectReference$ReflectedType;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ClassObjectReference$ReflectedType;
            _COMMAND: int;
          }
          let JDWP$ClassObjectReference$ReflectedType: _JDWP$ClassObjectReference$ReflectedType$$static;
          interface _JDWP$ClassObjectReference$ReflectedType {
            _refTypeTag: byte;
            _typeID: long;
          }
          interface JDWP$ClassObjectReference$ReflectedType extends CombineTypes<[_JDWP$ClassObjectReference$ReflectedType, java.lang.Object]> {}
          interface _JDWP$ClassStatus$$static extends ClassLike {
            _ERROR: int;
            _INITIALIZED: int;
            _PREPARED: int;
            _VERIFIED: int;
            _new(): JDWP$ClassStatus;
          }
          let JDWP$ClassStatus: _JDWP$ClassStatus$$static;
          interface _JDWP$ClassStatus {
          }
          interface JDWP$ClassStatus extends CombineTypes<[_JDWP$ClassStatus, java.lang.Object]> {}
          interface _JDWP$ClassType$$static extends ClassLike {
            _COMMAND_SET: int;
          }
          let JDWP$ClassType: _JDWP$ClassType$$static;
          interface _JDWP$ClassType {
          }
          interface JDWP$ClassType extends CombineTypes<[_JDWP$ClassType, java.lang.Object]> {}
          interface _JDWP$ClassType$InvokeMethod$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, clazz: ClassTypeImpl, thread: ThreadReferenceImpl, methodID: long, a4: ValueImpl[], arguments: int): PacketStream;
            _process(vm: VirtualMachineImpl, clazz: ClassTypeImpl, thread: ThreadReferenceImpl, methodID: long, a4: ValueImpl[], arguments: int): JDWP$ClassType$InvokeMethod;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ClassType$InvokeMethod;
            _COMMAND: int;
          }
          let JDWP$ClassType$InvokeMethod: _JDWP$ClassType$InvokeMethod$$static;
          interface _JDWP$ClassType$InvokeMethod {
            _exception: ObjectReferenceImpl;
            _returnValue: ValueImpl;
          }
          interface JDWP$ClassType$InvokeMethod extends CombineTypes<[_JDWP$ClassType$InvokeMethod, java.lang.Object]> {}
          interface _JDWP$ClassType$NewInstance$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, clazz: ClassTypeImpl, thread: ThreadReferenceImpl, methodID: long, a4: ValueImpl[], arguments: int): PacketStream;
            _process(vm: VirtualMachineImpl, clazz: ClassTypeImpl, thread: ThreadReferenceImpl, methodID: long, a4: ValueImpl[], arguments: int): JDWP$ClassType$NewInstance;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ClassType$NewInstance;
            _COMMAND: int;
          }
          let JDWP$ClassType$NewInstance: _JDWP$ClassType$NewInstance$$static;
          interface _JDWP$ClassType$NewInstance {
            _exception: ObjectReferenceImpl;
            _newObject: ObjectReferenceImpl;
          }
          interface JDWP$ClassType$NewInstance extends CombineTypes<[_JDWP$ClassType$NewInstance, java.lang.Object]> {}
          interface _JDWP$ClassType$SetValues$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, clazz: ClassTypeImpl, values: JDWP$ClassType$SetValues$FieldValue[]): PacketStream;
            _process(vm: VirtualMachineImpl, clazz: ClassTypeImpl, values: JDWP$ClassType$SetValues$FieldValue[]): JDWP$ClassType$SetValues;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ClassType$SetValues;
            _COMMAND: int;
          }
          let JDWP$ClassType$SetValues: _JDWP$ClassType$SetValues$$static;
          interface _JDWP$ClassType$SetValues {
          }
          interface JDWP$ClassType$SetValues extends CombineTypes<[_JDWP$ClassType$SetValues, java.lang.Object]> {}
          interface _JDWP$ClassType$SetValues$FieldValue$$static extends ClassLike {
            _new(fieldID: long, a1: ValueImpl): JDWP$ClassType$SetValues$FieldValue;
          }
          let JDWP$ClassType$SetValues$FieldValue: _JDWP$ClassType$SetValues$FieldValue$$static;
          interface _JDWP$ClassType$SetValues$FieldValue {
            _write(ps: PacketStream): void;
            _fieldID: long;
            _value: ValueImpl;
          }
          interface JDWP$ClassType$SetValues$FieldValue extends CombineTypes<[_JDWP$ClassType$SetValues$FieldValue, java.lang.Object]> {}
          interface _JDWP$ClassType$Superclass$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, clazz: ClassTypeImpl): PacketStream;
            _process(vm: VirtualMachineImpl, clazz: ClassTypeImpl): JDWP$ClassType$Superclass;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ClassType$Superclass;
            _COMMAND: int;
          }
          let JDWP$ClassType$Superclass: _JDWP$ClassType$Superclass$$static;
          interface _JDWP$ClassType$Superclass {
            _superclass: ClassTypeImpl;
          }
          interface JDWP$ClassType$Superclass extends CombineTypes<[_JDWP$ClassType$Superclass, java.lang.Object]> {}
          interface _JDWP$Error$$static extends ClassLike {
            _ABSENT_INFORMATION: int;
            _ACCESS_DENIED: int;
            _ADD_METHOD_NOT_IMPLEMENTED: int;
            _ALREADY_INVOKING: int;
            _CIRCULAR_CLASS_DEFINITION: int;
            _CLASS_ATTRIBUTE_CHANGE_NOT_IMPLEMENTED: int;
            _CLASS_MODIFIERS_CHANGE_NOT_IMPLEMENTED: int;
            _CLASS_NOT_PREPARED: int;
            _DELETE_METHOD_NOT_IMPLEMENTED: int;
            _DUPLICATE: int;
            _FAILS_VERIFICATION: int;
            _HIERARCHY_CHANGE_NOT_IMPLEMENTED: int;
            _ILLEGAL_ARGUMENT: int;
            _INTERNAL: int;
            _INTERRUPT: int;
            _INVALID_ARRAY: int;
            _INVALID_CLASS: int;
            _INVALID_CLASS_FORMAT: int;
            _INVALID_CLASS_LOADER: int;
            _INVALID_COUNT: int;
            _INVALID_EVENT_TYPE: int;
            _INVALID_FIELDID: int;
            _INVALID_FRAMEID: int;
            _INVALID_INDEX: int;
            _INVALID_LENGTH: int;
            _INVALID_LOCATION: int;
            _INVALID_METHODID: int;
            _INVALID_MODULE: int;
            _INVALID_MONITOR: int;
            _INVALID_OBJECT: int;
            _INVALID_PRIORITY: int;
            _INVALID_SLOT: int;
            _INVALID_STRING: int;
            _INVALID_TAG: int;
            _INVALID_THREAD: int;
            _INVALID_THREAD_GROUP: int;
            _INVALID_TYPESTATE: int;
            _METHOD_MODIFIERS_CHANGE_NOT_IMPLEMENTED: int;
            _NAMES_DONT_MATCH: int;
            _NATIVE_METHOD: int;
            _NONE: int;
            _NOT_CURRENT_FRAME: int;
            _NOT_FOUND: int;
            _NOT_IMPLEMENTED: int;
            _NOT_MONITOR_OWNER: int;
            _NO_MORE_FRAMES: int;
            _NULL_POINTER: int;
            _OPAQUE_FRAME: int;
            _OUT_OF_MEMORY: int;
            _SCHEMA_CHANGE_NOT_IMPLEMENTED: int;
            _THREAD_NOT_ALIVE: int;
            _THREAD_NOT_SUSPENDED: int;
            _THREAD_SUSPENDED: int;
            _TRANSPORT_INIT: int;
            _TRANSPORT_LOAD: int;
            _TYPE_MISMATCH: int;
            _UNATTACHED_THREAD: int;
            _UNSUPPORTED_VERSION: int;
            _VM_DEAD: int;
            _new(): JDWP$Error;
          }
          let JDWP$Error: _JDWP$Error$$static;
          interface _JDWP$Error {
          }
          interface JDWP$Error extends CombineTypes<[_JDWP$Error, java.lang.Object]> {}
          interface _JDWP$Event$$static extends ClassLike {
            _COMMAND_SET: int;
          }
          let JDWP$Event: _JDWP$Event$$static;
          interface _JDWP$Event {
          }
          interface JDWP$Event extends CombineTypes<[_JDWP$Event, java.lang.Object]> {}
          interface _JDWP$Event$Composite$$static extends ClassLike {
            _COMMAND: int;
            _new(vm: VirtualMachineImpl, ps: PacketStream): JDWP$Event$Composite;
          }
          let JDWP$Event$Composite: _JDWP$Event$Composite$$static;
          interface _JDWP$Event$Composite {
            _events: JDWP$Event$Composite$Events[];
            _suspendPolicy: byte;
          }
          interface JDWP$Event$Composite extends CombineTypes<[_JDWP$Event$Composite, java.lang.Object]> {}
          interface _JDWP$Event$Composite$Events$$static extends ClassLike {
            _new(vm: VirtualMachineImpl, ps: PacketStream): JDWP$Event$Composite$Events;
          }
          let JDWP$Event$Composite$Events: _JDWP$Event$Composite$Events$$static;
          interface _JDWP$Event$Composite$Events {
            _aEventsCommon: JDWP$Event$Composite$Events$EventsCommon;
            _eventKind: byte;
          }
          interface JDWP$Event$Composite$Events extends CombineTypes<[_JDWP$Event$Composite$Events, java.lang.Object]> {}
          interface _JDWP$Event$Composite$Events$Breakpoint$$static extends ClassLike {
            _ALT_ID: byte;
            _new(vm: VirtualMachineImpl, ps: PacketStream): JDWP$Event$Composite$Events$Breakpoint;
          }
          let JDWP$Event$Composite$Events$Breakpoint: _JDWP$Event$Composite$Events$Breakpoint$$static;
          interface _JDWP$Event$Composite$Events$Breakpoint {
            _eventKind(): byte;
            _location: sun.jdi.Location;
            _requestID: int;
            _thread: ThreadReferenceImpl;
          }
          interface JDWP$Event$Composite$Events$Breakpoint extends CombineTypes<[_JDWP$Event$Composite$Events$Breakpoint, com.sun.tools.jdi.JDWP$Event$Composite$Events$EventsCommon]> {}
          interface _JDWP$Event$Composite$Events$ClassPrepare$$static extends ClassLike {
            _ALT_ID: byte;
            _new(vm: VirtualMachineImpl, ps: PacketStream): JDWP$Event$Composite$Events$ClassPrepare;
          }
          let JDWP$Event$Composite$Events$ClassPrepare: _JDWP$Event$Composite$Events$ClassPrepare$$static;
          interface _JDWP$Event$Composite$Events$ClassPrepare {
            _eventKind(): byte;
            _refTypeTag: byte;
            _requestID: int;
            _signature: string;
            _status: int;
            _thread: ThreadReferenceImpl;
            _typeID: long;
          }
          interface JDWP$Event$Composite$Events$ClassPrepare extends CombineTypes<[_JDWP$Event$Composite$Events$ClassPrepare, com.sun.tools.jdi.JDWP$Event$Composite$Events$EventsCommon]> {}
          interface _JDWP$Event$Composite$Events$ClassUnload$$static extends ClassLike {
            _ALT_ID: byte;
            _new(vm: VirtualMachineImpl, ps: PacketStream): JDWP$Event$Composite$Events$ClassUnload;
          }
          let JDWP$Event$Composite$Events$ClassUnload: _JDWP$Event$Composite$Events$ClassUnload$$static;
          interface _JDWP$Event$Composite$Events$ClassUnload {
            _eventKind(): byte;
            _requestID: int;
            _signature: string;
          }
          interface JDWP$Event$Composite$Events$ClassUnload extends CombineTypes<[_JDWP$Event$Composite$Events$ClassUnload, com.sun.tools.jdi.JDWP$Event$Composite$Events$EventsCommon]> {}
          interface _JDWP$Event$Composite$Events$EventsCommon$$static extends ClassLike {
            _new(): JDWP$Event$Composite$Events$EventsCommon;
          }
          let JDWP$Event$Composite$Events$EventsCommon: _JDWP$Event$Composite$Events$EventsCommon$$static;
          interface _JDWP$Event$Composite$Events$EventsCommon {
            _eventKind(): byte;
(): byte;
          }
          interface JDWP$Event$Composite$Events$EventsCommon extends CombineTypes<[_JDWP$Event$Composite$Events$EventsCommon, java.lang.Object]> {}
          interface _JDWP$Event$Composite$Events$Exception$$static extends ClassLike {
            _ALT_ID: byte;
            _new(vm: VirtualMachineImpl, ps: PacketStream): JDWP$Event$Composite$Events$Exception;
          }
          let JDWP$Event$Composite$Events$Exception: _JDWP$Event$Composite$Events$Exception$$static;
          interface _JDWP$Event$Composite$Events$Exception {
            _eventKind(): byte;
            _catchLocation: sun.jdi.Location;
            _exception: ObjectReferenceImpl;
            _location: sun.jdi.Location;
            _requestID: int;
            _thread: ThreadReferenceImpl;
          }
          interface JDWP$Event$Composite$Events$Exception extends CombineTypes<[_JDWP$Event$Composite$Events$Exception, com.sun.tools.jdi.JDWP$Event$Composite$Events$EventsCommon]> {}
          interface _JDWP$Event$Composite$Events$FieldAccess$$static extends ClassLike {
            _ALT_ID: byte;
            _new(vm: VirtualMachineImpl, ps: PacketStream): JDWP$Event$Composite$Events$FieldAccess;
          }
          let JDWP$Event$Composite$Events$FieldAccess: _JDWP$Event$Composite$Events$FieldAccess$$static;
          interface _JDWP$Event$Composite$Events$FieldAccess {
            _eventKind(): byte;
            _fieldID: long;
            _location: sun.jdi.Location;
            _object: ObjectReferenceImpl;
            _refTypeTag: byte;
            _requestID: int;
            _thread: ThreadReferenceImpl;
            _typeID: long;
          }
          interface JDWP$Event$Composite$Events$FieldAccess extends CombineTypes<[_JDWP$Event$Composite$Events$FieldAccess, com.sun.tools.jdi.JDWP$Event$Composite$Events$EventsCommon]> {}
          interface _JDWP$Event$Composite$Events$FieldModification$$static extends ClassLike {
            _ALT_ID: byte;
            _new(vm: VirtualMachineImpl, ps: PacketStream): JDWP$Event$Composite$Events$FieldModification;
          }
          let JDWP$Event$Composite$Events$FieldModification: _JDWP$Event$Composite$Events$FieldModification$$static;
          interface _JDWP$Event$Composite$Events$FieldModification {
            _eventKind(): byte;
            _fieldID: long;
            _location: sun.jdi.Location;
            _object: ObjectReferenceImpl;
            _refTypeTag: byte;
            _requestID: int;
            _thread: ThreadReferenceImpl;
            _typeID: long;
            _valueToBe: ValueImpl;
          }
          interface JDWP$Event$Composite$Events$FieldModification extends CombineTypes<[_JDWP$Event$Composite$Events$FieldModification, com.sun.tools.jdi.JDWP$Event$Composite$Events$EventsCommon]> {}
          interface _JDWP$Event$Composite$Events$MethodEntry$$static extends ClassLike {
            _ALT_ID: byte;
            _new(vm: VirtualMachineImpl, ps: PacketStream): JDWP$Event$Composite$Events$MethodEntry;
          }
          let JDWP$Event$Composite$Events$MethodEntry: _JDWP$Event$Composite$Events$MethodEntry$$static;
          interface _JDWP$Event$Composite$Events$MethodEntry {
            _eventKind(): byte;
            _location: sun.jdi.Location;
            _requestID: int;
            _thread: ThreadReferenceImpl;
          }
          interface JDWP$Event$Composite$Events$MethodEntry extends CombineTypes<[_JDWP$Event$Composite$Events$MethodEntry, com.sun.tools.jdi.JDWP$Event$Composite$Events$EventsCommon]> {}
          interface _JDWP$Event$Composite$Events$MethodExit$$static extends ClassLike {
            _ALT_ID: byte;
            _new(vm: VirtualMachineImpl, ps: PacketStream): JDWP$Event$Composite$Events$MethodExit;
          }
          let JDWP$Event$Composite$Events$MethodExit: _JDWP$Event$Composite$Events$MethodExit$$static;
          interface _JDWP$Event$Composite$Events$MethodExit {
            _eventKind(): byte;
            _location: sun.jdi.Location;
            _requestID: int;
            _thread: ThreadReferenceImpl;
          }
          interface JDWP$Event$Composite$Events$MethodExit extends CombineTypes<[_JDWP$Event$Composite$Events$MethodExit, com.sun.tools.jdi.JDWP$Event$Composite$Events$EventsCommon]> {}
          interface _JDWP$Event$Composite$Events$MethodExitWithReturnValue$$static extends ClassLike {
            _ALT_ID: byte;
            _new(vm: VirtualMachineImpl, ps: PacketStream): JDWP$Event$Composite$Events$MethodExitWithReturnValue;
          }
          let JDWP$Event$Composite$Events$MethodExitWithReturnValue: _JDWP$Event$Composite$Events$MethodExitWithReturnValue$$static;
          interface _JDWP$Event$Composite$Events$MethodExitWithReturnValue {
            _eventKind(): byte;
            _location: sun.jdi.Location;
            _requestID: int;
            _thread: ThreadReferenceImpl;
            _value: ValueImpl;
          }
          interface JDWP$Event$Composite$Events$MethodExitWithReturnValue extends CombineTypes<[_JDWP$Event$Composite$Events$MethodExitWithReturnValue, com.sun.tools.jdi.JDWP$Event$Composite$Events$EventsCommon]> {}
          interface _JDWP$Event$Composite$Events$MonitorContendedEnter$$static extends ClassLike {
            _ALT_ID: byte;
            _new(vm: VirtualMachineImpl, ps: PacketStream): JDWP$Event$Composite$Events$MonitorContendedEnter;
          }
          let JDWP$Event$Composite$Events$MonitorContendedEnter: _JDWP$Event$Composite$Events$MonitorContendedEnter$$static;
          interface _JDWP$Event$Composite$Events$MonitorContendedEnter {
            _eventKind(): byte;
            _location: sun.jdi.Location;
            _object: ObjectReferenceImpl;
            _requestID: int;
            _thread: ThreadReferenceImpl;
          }
          interface JDWP$Event$Composite$Events$MonitorContendedEnter extends CombineTypes<[_JDWP$Event$Composite$Events$MonitorContendedEnter, com.sun.tools.jdi.JDWP$Event$Composite$Events$EventsCommon]> {}
          interface _JDWP$Event$Composite$Events$MonitorContendedEntered$$static extends ClassLike {
            _ALT_ID: byte;
            _new(vm: VirtualMachineImpl, ps: PacketStream): JDWP$Event$Composite$Events$MonitorContendedEntered;
          }
          let JDWP$Event$Composite$Events$MonitorContendedEntered: _JDWP$Event$Composite$Events$MonitorContendedEntered$$static;
          interface _JDWP$Event$Composite$Events$MonitorContendedEntered {
            _eventKind(): byte;
            _location: sun.jdi.Location;
            _object: ObjectReferenceImpl;
            _requestID: int;
            _thread: ThreadReferenceImpl;
          }
          interface JDWP$Event$Composite$Events$MonitorContendedEntered extends CombineTypes<[_JDWP$Event$Composite$Events$MonitorContendedEntered, com.sun.tools.jdi.JDWP$Event$Composite$Events$EventsCommon]> {}
          interface _JDWP$Event$Composite$Events$MonitorWait$$static extends ClassLike {
            _ALT_ID: byte;
            _new(vm: VirtualMachineImpl, ps: PacketStream): JDWP$Event$Composite$Events$MonitorWait;
          }
          let JDWP$Event$Composite$Events$MonitorWait: _JDWP$Event$Composite$Events$MonitorWait$$static;
          interface _JDWP$Event$Composite$Events$MonitorWait {
            _eventKind(): byte;
            _location: sun.jdi.Location;
            _object: ObjectReferenceImpl;
            _requestID: int;
            _thread: ThreadReferenceImpl;
            _timeout: long;
          }
          interface JDWP$Event$Composite$Events$MonitorWait extends CombineTypes<[_JDWP$Event$Composite$Events$MonitorWait, com.sun.tools.jdi.JDWP$Event$Composite$Events$EventsCommon]> {}
          interface _JDWP$Event$Composite$Events$MonitorWaited$$static extends ClassLike {
            _ALT_ID: byte;
            _new(vm: VirtualMachineImpl, ps: PacketStream): JDWP$Event$Composite$Events$MonitorWaited;
          }
          let JDWP$Event$Composite$Events$MonitorWaited: _JDWP$Event$Composite$Events$MonitorWaited$$static;
          interface _JDWP$Event$Composite$Events$MonitorWaited {
            _eventKind(): byte;
            _location: sun.jdi.Location;
            _object: ObjectReferenceImpl;
            _requestID: int;
            _thread: ThreadReferenceImpl;
            _timed_out: boolean;
          }
          interface JDWP$Event$Composite$Events$MonitorWaited extends CombineTypes<[_JDWP$Event$Composite$Events$MonitorWaited, com.sun.tools.jdi.JDWP$Event$Composite$Events$EventsCommon]> {}
          interface _JDWP$Event$Composite$Events$SingleStep$$static extends ClassLike {
            _ALT_ID: byte;
            _new(vm: VirtualMachineImpl, ps: PacketStream): JDWP$Event$Composite$Events$SingleStep;
          }
          let JDWP$Event$Composite$Events$SingleStep: _JDWP$Event$Composite$Events$SingleStep$$static;
          interface _JDWP$Event$Composite$Events$SingleStep {
            _eventKind(): byte;
            _location: sun.jdi.Location;
            _requestID: int;
            _thread: ThreadReferenceImpl;
          }
          interface JDWP$Event$Composite$Events$SingleStep extends CombineTypes<[_JDWP$Event$Composite$Events$SingleStep, com.sun.tools.jdi.JDWP$Event$Composite$Events$EventsCommon]> {}
          interface _JDWP$Event$Composite$Events$ThreadDeath$$static extends ClassLike {
            _ALT_ID: byte;
            _new(vm: VirtualMachineImpl, ps: PacketStream): JDWP$Event$Composite$Events$ThreadDeath;
          }
          let JDWP$Event$Composite$Events$ThreadDeath: _JDWP$Event$Composite$Events$ThreadDeath$$static;
          interface _JDWP$Event$Composite$Events$ThreadDeath {
            _eventKind(): byte;
            _requestID: int;
            _thread: ThreadReferenceImpl;
          }
          interface JDWP$Event$Composite$Events$ThreadDeath extends CombineTypes<[_JDWP$Event$Composite$Events$ThreadDeath, com.sun.tools.jdi.JDWP$Event$Composite$Events$EventsCommon]> {}
          interface _JDWP$Event$Composite$Events$ThreadStart$$static extends ClassLike {
            _ALT_ID: byte;
            _new(vm: VirtualMachineImpl, ps: PacketStream): JDWP$Event$Composite$Events$ThreadStart;
          }
          let JDWP$Event$Composite$Events$ThreadStart: _JDWP$Event$Composite$Events$ThreadStart$$static;
          interface _JDWP$Event$Composite$Events$ThreadStart {
            _eventKind(): byte;
            _requestID: int;
            _thread: ThreadReferenceImpl;
          }
          interface JDWP$Event$Composite$Events$ThreadStart extends CombineTypes<[_JDWP$Event$Composite$Events$ThreadStart, com.sun.tools.jdi.JDWP$Event$Composite$Events$EventsCommon]> {}
          interface _JDWP$Event$Composite$Events$VMDeath$$static extends ClassLike {
            _ALT_ID: byte;
            _new(vm: VirtualMachineImpl, ps: PacketStream): JDWP$Event$Composite$Events$VMDeath;
          }
          let JDWP$Event$Composite$Events$VMDeath: _JDWP$Event$Composite$Events$VMDeath$$static;
          interface _JDWP$Event$Composite$Events$VMDeath {
            _eventKind(): byte;
            _requestID: int;
          }
          interface JDWP$Event$Composite$Events$VMDeath extends CombineTypes<[_JDWP$Event$Composite$Events$VMDeath, com.sun.tools.jdi.JDWP$Event$Composite$Events$EventsCommon]> {}
          interface _JDWP$Event$Composite$Events$VMStart$$static extends ClassLike {
            _ALT_ID: byte;
            _new(vm: VirtualMachineImpl, ps: PacketStream): JDWP$Event$Composite$Events$VMStart;
          }
          let JDWP$Event$Composite$Events$VMStart: _JDWP$Event$Composite$Events$VMStart$$static;
          interface _JDWP$Event$Composite$Events$VMStart {
            _eventKind(): byte;
            _requestID: int;
            _thread: ThreadReferenceImpl;
          }
          interface JDWP$Event$Composite$Events$VMStart extends CombineTypes<[_JDWP$Event$Composite$Events$VMStart, com.sun.tools.jdi.JDWP$Event$Composite$Events$EventsCommon]> {}
          interface _JDWP$EventKind$$static extends ClassLike {
            _BREAKPOINT: int;
            _CLASS_LOAD: int;
            _CLASS_PREPARE: int;
            _CLASS_UNLOAD: int;
            _EXCEPTION: int;
            _EXCEPTION_CATCH: int;
            _FIELD_ACCESS: int;
            _FIELD_MODIFICATION: int;
            _FRAME_POP: int;
            _METHOD_ENTRY: int;
            _METHOD_EXIT: int;
            _METHOD_EXIT_WITH_RETURN_VALUE: int;
            _MONITOR_CONTENDED_ENTER: int;
            _MONITOR_CONTENDED_ENTERED: int;
            _MONITOR_WAIT: int;
            _MONITOR_WAITED: int;
            _SINGLE_STEP: int;
            _THREAD_DEATH: int;
            _THREAD_END: int;
            _THREAD_START: int;
            _USER_DEFINED: int;
            _VM_DEATH: int;
            _VM_DISCONNECTED: int;
            _VM_INIT: int;
            _VM_START: int;
            _new(): JDWP$EventKind;
          }
          let JDWP$EventKind: _JDWP$EventKind$$static;
          interface _JDWP$EventKind {
          }
          interface JDWP$EventKind extends CombineTypes<[_JDWP$EventKind, java.lang.Object]> {}
          interface _JDWP$EventRequest$$static extends ClassLike {
            _COMMAND_SET: int;
          }
          let JDWP$EventRequest: _JDWP$EventRequest$$static;
          interface _JDWP$EventRequest {
          }
          interface JDWP$EventRequest extends CombineTypes<[_JDWP$EventRequest, java.lang.Object]> {}
          interface _JDWP$EventRequest$Clear$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, eventKind: byte, requestID: int): PacketStream;
            _process(vm: VirtualMachineImpl, eventKind: byte, requestID: int): JDWP$EventRequest$Clear;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$EventRequest$Clear;
            _COMMAND: int;
          }
          let JDWP$EventRequest$Clear: _JDWP$EventRequest$Clear$$static;
          interface _JDWP$EventRequest$Clear {
          }
          interface JDWP$EventRequest$Clear extends CombineTypes<[_JDWP$EventRequest$Clear, java.lang.Object]> {}
          interface _JDWP$EventRequest$ClearAllBreakpoints$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl): PacketStream;
            _process(vm: VirtualMachineImpl): JDWP$EventRequest$ClearAllBreakpoints;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$EventRequest$ClearAllBreakpoints;
            _COMMAND: int;
          }
          let JDWP$EventRequest$ClearAllBreakpoints: _JDWP$EventRequest$ClearAllBreakpoints$$static;
          interface _JDWP$EventRequest$ClearAllBreakpoints {
          }
          interface JDWP$EventRequest$ClearAllBreakpoints extends CombineTypes<[_JDWP$EventRequest$ClearAllBreakpoints, java.lang.Object]> {}
          interface _JDWP$EventRequest$Set$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, eventKind: byte, suspendPolicy: byte, modifiers: JDWP$EventRequest$Set$Modifier[]): PacketStream;
            _process(vm: VirtualMachineImpl, eventKind: byte, suspendPolicy: byte, modifiers: JDWP$EventRequest$Set$Modifier[]): JDWP$EventRequest$Set;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$EventRequest$Set;
            _COMMAND: int;
          }
          let JDWP$EventRequest$Set: _JDWP$EventRequest$Set$$static;
          interface _JDWP$EventRequest$Set {
            _requestID: int;
          }
          interface JDWP$EventRequest$Set extends CombineTypes<[_JDWP$EventRequest$Set, java.lang.Object]> {}
          interface _JDWP$EventRequest$Set$Modifier$$static extends ClassLike {
            _new(modKind: byte, aModifierCommon: JDWP$EventRequest$Set$Modifier$ModifierCommon): JDWP$EventRequest$Set$Modifier;
          }
          let JDWP$EventRequest$Set$Modifier: _JDWP$EventRequest$Set$Modifier$$static;
          interface _JDWP$EventRequest$Set$Modifier {
            _write(ps: PacketStream): void;
            _aModifierCommon: JDWP$EventRequest$Set$Modifier$ModifierCommon;
            _modKind: byte;
          }
          interface JDWP$EventRequest$Set$Modifier extends CombineTypes<[_JDWP$EventRequest$Set$Modifier, java.lang.Object]> {}
          interface _JDWP$EventRequest$Set$Modifier$ClassExclude$$static extends ClassLike {
            _create(classPattern: string): JDWP$EventRequest$Set$Modifier;
            _ALT_ID: byte;
            _new(classPattern: string): JDWP$EventRequest$Set$Modifier$ClassExclude;
          }
          let JDWP$EventRequest$Set$Modifier$ClassExclude: _JDWP$EventRequest$Set$Modifier$ClassExclude$$static;
          interface _JDWP$EventRequest$Set$Modifier$ClassExclude {
            _write(ps: PacketStream): void;
            _classPattern: string;
          }
          interface JDWP$EventRequest$Set$Modifier$ClassExclude extends CombineTypes<[_JDWP$EventRequest$Set$Modifier$ClassExclude, com.sun.tools.jdi.JDWP$EventRequest$Set$Modifier$ModifierCommon]> {}
          interface _JDWP$EventRequest$Set$Modifier$ClassMatch$$static extends ClassLike {
            _create(classPattern: string): JDWP$EventRequest$Set$Modifier;
            _ALT_ID: byte;
            _new(classPattern: string): JDWP$EventRequest$Set$Modifier$ClassMatch;
          }
          let JDWP$EventRequest$Set$Modifier$ClassMatch: _JDWP$EventRequest$Set$Modifier$ClassMatch$$static;
          interface _JDWP$EventRequest$Set$Modifier$ClassMatch {
            _write(ps: PacketStream): void;
            _classPattern: string;
          }
          interface JDWP$EventRequest$Set$Modifier$ClassMatch extends CombineTypes<[_JDWP$EventRequest$Set$Modifier$ClassMatch, com.sun.tools.jdi.JDWP$EventRequest$Set$Modifier$ModifierCommon]> {}
          interface _JDWP$EventRequest$Set$Modifier$ClassOnly$$static extends ClassLike {
            _create(clazz: ReferenceTypeImpl): JDWP$EventRequest$Set$Modifier;
            _ALT_ID: byte;
            _new(clazz: ReferenceTypeImpl): JDWP$EventRequest$Set$Modifier$ClassOnly;
          }
          let JDWP$EventRequest$Set$Modifier$ClassOnly: _JDWP$EventRequest$Set$Modifier$ClassOnly$$static;
          interface _JDWP$EventRequest$Set$Modifier$ClassOnly {
            _write(ps: PacketStream): void;
            _clazz: ReferenceTypeImpl;
          }
          interface JDWP$EventRequest$Set$Modifier$ClassOnly extends CombineTypes<[_JDWP$EventRequest$Set$Modifier$ClassOnly, com.sun.tools.jdi.JDWP$EventRequest$Set$Modifier$ModifierCommon]> {}
          interface _JDWP$EventRequest$Set$Modifier$Conditional$$static extends ClassLike {
            _create(exprID: int): JDWP$EventRequest$Set$Modifier;
            _ALT_ID: byte;
            _new(exprID: int): JDWP$EventRequest$Set$Modifier$Conditional;
          }
          let JDWP$EventRequest$Set$Modifier$Conditional: _JDWP$EventRequest$Set$Modifier$Conditional$$static;
          interface _JDWP$EventRequest$Set$Modifier$Conditional {
            _write(ps: PacketStream): void;
            _exprID: int;
          }
          interface JDWP$EventRequest$Set$Modifier$Conditional extends CombineTypes<[_JDWP$EventRequest$Set$Modifier$Conditional, com.sun.tools.jdi.JDWP$EventRequest$Set$Modifier$ModifierCommon]> {}
          interface _JDWP$EventRequest$Set$Modifier$Count$$static extends ClassLike {
            _create(count: int): JDWP$EventRequest$Set$Modifier;
            _ALT_ID: byte;
            _new(count: int): JDWP$EventRequest$Set$Modifier$Count;
          }
          let JDWP$EventRequest$Set$Modifier$Count: _JDWP$EventRequest$Set$Modifier$Count$$static;
          interface _JDWP$EventRequest$Set$Modifier$Count {
            _write(ps: PacketStream): void;
            _count: int;
          }
          interface JDWP$EventRequest$Set$Modifier$Count extends CombineTypes<[_JDWP$EventRequest$Set$Modifier$Count, com.sun.tools.jdi.JDWP$EventRequest$Set$Modifier$ModifierCommon]> {}
          interface _JDWP$EventRequest$Set$Modifier$ExceptionOnly$$static extends ClassLike {
            _create(exceptionOrNull: ReferenceTypeImpl, caught: boolean, uncaught: boolean): JDWP$EventRequest$Set$Modifier;
            _ALT_ID: byte;
            _new(exceptionOrNull: ReferenceTypeImpl, caught: boolean, uncaught: boolean): JDWP$EventRequest$Set$Modifier$ExceptionOnly;
          }
          let JDWP$EventRequest$Set$Modifier$ExceptionOnly: _JDWP$EventRequest$Set$Modifier$ExceptionOnly$$static;
          interface _JDWP$EventRequest$Set$Modifier$ExceptionOnly {
            _write(ps: PacketStream): void;
            _caught: boolean;
            _exceptionOrNull: ReferenceTypeImpl;
            _uncaught: boolean;
          }
          interface JDWP$EventRequest$Set$Modifier$ExceptionOnly extends CombineTypes<[_JDWP$EventRequest$Set$Modifier$ExceptionOnly, com.sun.tools.jdi.JDWP$EventRequest$Set$Modifier$ModifierCommon]> {}
          interface _JDWP$EventRequest$Set$Modifier$FieldOnly$$static extends ClassLike {
            _create(declaring: ReferenceTypeImpl, fieldID: long): JDWP$EventRequest$Set$Modifier;
            _ALT_ID: byte;
            _new(declaring: ReferenceTypeImpl, fieldID: long): JDWP$EventRequest$Set$Modifier$FieldOnly;
          }
          let JDWP$EventRequest$Set$Modifier$FieldOnly: _JDWP$EventRequest$Set$Modifier$FieldOnly$$static;
          interface _JDWP$EventRequest$Set$Modifier$FieldOnly {
            _write(ps: PacketStream): void;
            _declaring: ReferenceTypeImpl;
            _fieldID: long;
          }
          interface JDWP$EventRequest$Set$Modifier$FieldOnly extends CombineTypes<[_JDWP$EventRequest$Set$Modifier$FieldOnly, com.sun.tools.jdi.JDWP$EventRequest$Set$Modifier$ModifierCommon]> {}
          interface _JDWP$EventRequest$Set$Modifier$InstanceOnly$$static extends ClassLike {
            _create(instance: ObjectReferenceImpl): JDWP$EventRequest$Set$Modifier;
            _ALT_ID: byte;
            _new(instance: ObjectReferenceImpl): JDWP$EventRequest$Set$Modifier$InstanceOnly;
          }
          let JDWP$EventRequest$Set$Modifier$InstanceOnly: _JDWP$EventRequest$Set$Modifier$InstanceOnly$$static;
          interface _JDWP$EventRequest$Set$Modifier$InstanceOnly {
            _write(ps: PacketStream): void;
            _instance: ObjectReferenceImpl;
          }
          interface JDWP$EventRequest$Set$Modifier$InstanceOnly extends CombineTypes<[_JDWP$EventRequest$Set$Modifier$InstanceOnly, com.sun.tools.jdi.JDWP$EventRequest$Set$Modifier$ModifierCommon]> {}
          interface _JDWP$EventRequest$Set$Modifier$LocationOnly$$static extends ClassLike {
            _create(loc: sun.jdi.Location): JDWP$EventRequest$Set$Modifier;
            _ALT_ID: byte;
            _new(loc: sun.jdi.Location): JDWP$EventRequest$Set$Modifier$LocationOnly;
          }
          let JDWP$EventRequest$Set$Modifier$LocationOnly: _JDWP$EventRequest$Set$Modifier$LocationOnly$$static;
          interface _JDWP$EventRequest$Set$Modifier$LocationOnly {
            _write(ps: PacketStream): void;
            _loc: sun.jdi.Location;
          }
          interface JDWP$EventRequest$Set$Modifier$LocationOnly extends CombineTypes<[_JDWP$EventRequest$Set$Modifier$LocationOnly, com.sun.tools.jdi.JDWP$EventRequest$Set$Modifier$ModifierCommon]> {}
          interface _JDWP$EventRequest$Set$Modifier$ModifierCommon$$static extends ClassLike {
            _new(): JDWP$EventRequest$Set$Modifier$ModifierCommon;
          }
          let JDWP$EventRequest$Set$Modifier$ModifierCommon: _JDWP$EventRequest$Set$Modifier$ModifierCommon$$static;
          interface _JDWP$EventRequest$Set$Modifier$ModifierCommon {
            _write(a0: PacketStream): void;
(a0: PacketStream): void;
          }
          interface JDWP$EventRequest$Set$Modifier$ModifierCommon extends CombineTypes<[_JDWP$EventRequest$Set$Modifier$ModifierCommon, java.lang.Object]> {}
          interface _JDWP$EventRequest$Set$Modifier$PlatformThreadsOnly$$static extends ClassLike {
            _create(): JDWP$EventRequest$Set$Modifier;
            _ALT_ID: byte;
            _new(): JDWP$EventRequest$Set$Modifier$PlatformThreadsOnly;
          }
          let JDWP$EventRequest$Set$Modifier$PlatformThreadsOnly: _JDWP$EventRequest$Set$Modifier$PlatformThreadsOnly$$static;
          interface _JDWP$EventRequest$Set$Modifier$PlatformThreadsOnly {
            _write(ps: PacketStream): void;
          }
          interface JDWP$EventRequest$Set$Modifier$PlatformThreadsOnly extends CombineTypes<[_JDWP$EventRequest$Set$Modifier$PlatformThreadsOnly, com.sun.tools.jdi.JDWP$EventRequest$Set$Modifier$ModifierCommon]> {}
          interface _JDWP$EventRequest$Set$Modifier$SourceNameMatch$$static extends ClassLike {
            _create(sourceNamePattern: string): JDWP$EventRequest$Set$Modifier;
            _ALT_ID: byte;
            _new(sourceNamePattern: string): JDWP$EventRequest$Set$Modifier$SourceNameMatch;
          }
          let JDWP$EventRequest$Set$Modifier$SourceNameMatch: _JDWP$EventRequest$Set$Modifier$SourceNameMatch$$static;
          interface _JDWP$EventRequest$Set$Modifier$SourceNameMatch {
            _write(ps: PacketStream): void;
            _sourceNamePattern: string;
          }
          interface JDWP$EventRequest$Set$Modifier$SourceNameMatch extends CombineTypes<[_JDWP$EventRequest$Set$Modifier$SourceNameMatch, com.sun.tools.jdi.JDWP$EventRequest$Set$Modifier$ModifierCommon]> {}
          interface _JDWP$EventRequest$Set$Modifier$Step$$static extends ClassLike {
            _create(thread: ThreadReferenceImpl, size: int, depth: int): JDWP$EventRequest$Set$Modifier;
            _ALT_ID: byte;
            _new(thread: ThreadReferenceImpl, size: int, depth: int): JDWP$EventRequest$Set$Modifier$Step;
          }
          let JDWP$EventRequest$Set$Modifier$Step: _JDWP$EventRequest$Set$Modifier$Step$$static;
          interface _JDWP$EventRequest$Set$Modifier$Step {
            _write(ps: PacketStream): void;
            _depth: int;
            _size: int;
            _thread: ThreadReferenceImpl;
          }
          interface JDWP$EventRequest$Set$Modifier$Step extends CombineTypes<[_JDWP$EventRequest$Set$Modifier$Step, com.sun.tools.jdi.JDWP$EventRequest$Set$Modifier$ModifierCommon]> {}
          interface _JDWP$EventRequest$Set$Modifier$ThreadOnly$$static extends ClassLike {
            _create(thread: ThreadReferenceImpl): JDWP$EventRequest$Set$Modifier;
            _ALT_ID: byte;
            _new(thread: ThreadReferenceImpl): JDWP$EventRequest$Set$Modifier$ThreadOnly;
          }
          let JDWP$EventRequest$Set$Modifier$ThreadOnly: _JDWP$EventRequest$Set$Modifier$ThreadOnly$$static;
          interface _JDWP$EventRequest$Set$Modifier$ThreadOnly {
            _write(ps: PacketStream): void;
            _thread: ThreadReferenceImpl;
          }
          interface JDWP$EventRequest$Set$Modifier$ThreadOnly extends CombineTypes<[_JDWP$EventRequest$Set$Modifier$ThreadOnly, com.sun.tools.jdi.JDWP$EventRequest$Set$Modifier$ModifierCommon]> {}
          interface _JDWP$Field$$static extends ClassLike {
            _COMMAND_SET: int;
          }
          let JDWP$Field: _JDWP$Field$$static;
          interface _JDWP$Field {
          }
          interface JDWP$Field extends CombineTypes<[_JDWP$Field, java.lang.Object]> {}
          interface _JDWP$InterfaceType$$static extends ClassLike {
            _COMMAND_SET: int;
          }
          let JDWP$InterfaceType: _JDWP$InterfaceType$$static;
          interface _JDWP$InterfaceType {
          }
          interface JDWP$InterfaceType extends CombineTypes<[_JDWP$InterfaceType, java.lang.Object]> {}
          interface _JDWP$InterfaceType$InvokeMethod$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, clazz: InterfaceTypeImpl, thread: ThreadReferenceImpl, methodID: long, a4: ValueImpl[], arguments: int): PacketStream;
            _process(vm: VirtualMachineImpl, clazz: InterfaceTypeImpl, thread: ThreadReferenceImpl, methodID: long, a4: ValueImpl[], arguments: int): JDWP$InterfaceType$InvokeMethod;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$InterfaceType$InvokeMethod;
            _COMMAND: int;
          }
          let JDWP$InterfaceType$InvokeMethod: _JDWP$InterfaceType$InvokeMethod$$static;
          interface _JDWP$InterfaceType$InvokeMethod {
            _exception: ObjectReferenceImpl;
            _returnValue: ValueImpl;
          }
          interface JDWP$InterfaceType$InvokeMethod extends CombineTypes<[_JDWP$InterfaceType$InvokeMethod, java.lang.Object]> {}
          interface _JDWP$InvokeOptions$$static extends ClassLike {
            _INVOKE_NONVIRTUAL: int;
            _INVOKE_SINGLE_THREADED: int;
            _new(): JDWP$InvokeOptions;
          }
          let JDWP$InvokeOptions: _JDWP$InvokeOptions$$static;
          interface _JDWP$InvokeOptions {
          }
          interface JDWP$InvokeOptions extends CombineTypes<[_JDWP$InvokeOptions, java.lang.Object]> {}
          interface _JDWP$Method$$static extends ClassLike {
            _COMMAND_SET: int;
          }
          let JDWP$Method: _JDWP$Method$$static;
          interface _JDWP$Method {
          }
          interface JDWP$Method extends CombineTypes<[_JDWP$Method, java.lang.Object]> {}
          interface _JDWP$Method$Bytecodes$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, refType: ReferenceTypeImpl, methodID: long): PacketStream;
            _process(vm: VirtualMachineImpl, refType: ReferenceTypeImpl, methodID: long): JDWP$Method$Bytecodes;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$Method$Bytecodes;
            _COMMAND: int;
          }
          let JDWP$Method$Bytecodes: _JDWP$Method$Bytecodes$$static;
          interface _JDWP$Method$Bytecodes {
            _bytes: byte[];
          }
          interface JDWP$Method$Bytecodes extends CombineTypes<[_JDWP$Method$Bytecodes, java.lang.Object]> {}
          interface _JDWP$Method$IsObsolete$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, refType: ReferenceTypeImpl, methodID: long): PacketStream;
            _process(vm: VirtualMachineImpl, refType: ReferenceTypeImpl, methodID: long): JDWP$Method$IsObsolete;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$Method$IsObsolete;
            _COMMAND: int;
          }
          let JDWP$Method$IsObsolete: _JDWP$Method$IsObsolete$$static;
          interface _JDWP$Method$IsObsolete {
            _isObsolete: boolean;
          }
          interface JDWP$Method$IsObsolete extends CombineTypes<[_JDWP$Method$IsObsolete, java.lang.Object]> {}
          interface _JDWP$Method$LineTable$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, refType: ReferenceTypeImpl, methodID: long): PacketStream;
            _process(vm: VirtualMachineImpl, refType: ReferenceTypeImpl, methodID: long): JDWP$Method$LineTable;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$Method$LineTable;
            _COMMAND: int;
          }
          let JDWP$Method$LineTable: _JDWP$Method$LineTable$$static;
          interface _JDWP$Method$LineTable {
            _end: long;
            _lines: JDWP$Method$LineTable$LineInfo[];
            _start: long;
          }
          interface JDWP$Method$LineTable extends CombineTypes<[_JDWP$Method$LineTable, java.lang.Object]> {}
          interface _JDWP$Method$LineTable$LineInfo$$static extends ClassLike {
          }
          let JDWP$Method$LineTable$LineInfo: _JDWP$Method$LineTable$LineInfo$$static;
          interface _JDWP$Method$LineTable$LineInfo {
            _lineCodeIndex: long;
            _lineNumber: int;
          }
          interface JDWP$Method$LineTable$LineInfo extends CombineTypes<[_JDWP$Method$LineTable$LineInfo, java.lang.Object]> {}
          interface _JDWP$Method$VariableTable$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, refType: ReferenceTypeImpl, methodID: long): PacketStream;
            _process(vm: VirtualMachineImpl, refType: ReferenceTypeImpl, methodID: long): JDWP$Method$VariableTable;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$Method$VariableTable;
            _COMMAND: int;
          }
          let JDWP$Method$VariableTable: _JDWP$Method$VariableTable$$static;
          interface _JDWP$Method$VariableTable {
            _argCnt: int;
            _slots: JDWP$Method$VariableTable$SlotInfo[];
          }
          interface JDWP$Method$VariableTable extends CombineTypes<[_JDWP$Method$VariableTable, java.lang.Object]> {}
          interface _JDWP$Method$VariableTable$SlotInfo$$static extends ClassLike {
          }
          let JDWP$Method$VariableTable$SlotInfo: _JDWP$Method$VariableTable$SlotInfo$$static;
          interface _JDWP$Method$VariableTable$SlotInfo {
            _codeIndex: long;
            _length: int;
            _name: string;
            _signature: string;
            _slot: int;
          }
          interface JDWP$Method$VariableTable$SlotInfo extends CombineTypes<[_JDWP$Method$VariableTable$SlotInfo, java.lang.Object]> {}
          interface _JDWP$Method$VariableTableWithGeneric$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, refType: ReferenceTypeImpl, methodID: long): PacketStream;
            _process(vm: VirtualMachineImpl, refType: ReferenceTypeImpl, methodID: long): JDWP$Method$VariableTableWithGeneric;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$Method$VariableTableWithGeneric;
            _COMMAND: int;
          }
          let JDWP$Method$VariableTableWithGeneric: _JDWP$Method$VariableTableWithGeneric$$static;
          interface _JDWP$Method$VariableTableWithGeneric {
            _argCnt: int;
            _slots: JDWP$Method$VariableTableWithGeneric$SlotInfo[];
          }
          interface JDWP$Method$VariableTableWithGeneric extends CombineTypes<[_JDWP$Method$VariableTableWithGeneric, java.lang.Object]> {}
          interface _JDWP$Method$VariableTableWithGeneric$SlotInfo$$static extends ClassLike {
          }
          let JDWP$Method$VariableTableWithGeneric$SlotInfo: _JDWP$Method$VariableTableWithGeneric$SlotInfo$$static;
          interface _JDWP$Method$VariableTableWithGeneric$SlotInfo {
            _codeIndex: long;
            _genericSignature: string;
            _length: int;
            _name: string;
            _signature: string;
            _slot: int;
          }
          interface JDWP$Method$VariableTableWithGeneric$SlotInfo extends CombineTypes<[_JDWP$Method$VariableTableWithGeneric$SlotInfo, java.lang.Object]> {}
          interface _JDWP$ModuleReference$$static extends ClassLike {
            _COMMAND_SET: int;
          }
          let JDWP$ModuleReference: _JDWP$ModuleReference$$static;
          interface _JDWP$ModuleReference {
          }
          interface JDWP$ModuleReference extends CombineTypes<[_JDWP$ModuleReference, java.lang.Object]> {}
          interface _JDWP$ModuleReference$ClassLoader$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, module: ModuleReferenceImpl): PacketStream;
            _process(vm: VirtualMachineImpl, module: ModuleReferenceImpl): JDWP$ModuleReference$ClassLoader;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ModuleReference$ClassLoader;
            _COMMAND: int;
          }
          let JDWP$ModuleReference$ClassLoader: _JDWP$ModuleReference$ClassLoader$$static;
          interface _JDWP$ModuleReference$ClassLoader {
            _classLoader: ClassLoaderReferenceImpl;
          }
          interface JDWP$ModuleReference$ClassLoader extends CombineTypes<[_JDWP$ModuleReference$ClassLoader, java.lang.Object]> {}
          interface _JDWP$ModuleReference$Name$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, module: ModuleReferenceImpl): PacketStream;
            _process(vm: VirtualMachineImpl, module: ModuleReferenceImpl): JDWP$ModuleReference$Name;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ModuleReference$Name;
            _COMMAND: int;
          }
          let JDWP$ModuleReference$Name: _JDWP$ModuleReference$Name$$static;
          interface _JDWP$ModuleReference$Name {
            _name: string;
          }
          interface JDWP$ModuleReference$Name extends CombineTypes<[_JDWP$ModuleReference$Name, java.lang.Object]> {}
          interface _JDWP$ObjectReference$$static extends ClassLike {
            _COMMAND_SET: int;
          }
          let JDWP$ObjectReference: _JDWP$ObjectReference$$static;
          interface _JDWP$ObjectReference {
          }
          interface JDWP$ObjectReference extends CombineTypes<[_JDWP$ObjectReference, java.lang.Object]> {}
          interface _JDWP$ObjectReference$DisableCollection$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, object: ObjectReferenceImpl): PacketStream;
            _process(vm: VirtualMachineImpl, object: ObjectReferenceImpl): JDWP$ObjectReference$DisableCollection;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ObjectReference$DisableCollection;
            _COMMAND: int;
          }
          let JDWP$ObjectReference$DisableCollection: _JDWP$ObjectReference$DisableCollection$$static;
          interface _JDWP$ObjectReference$DisableCollection {
          }
          interface JDWP$ObjectReference$DisableCollection extends CombineTypes<[_JDWP$ObjectReference$DisableCollection, java.lang.Object]> {}
          interface _JDWP$ObjectReference$EnableCollection$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, object: ObjectReferenceImpl): PacketStream;
            _process(vm: VirtualMachineImpl, object: ObjectReferenceImpl): JDWP$ObjectReference$EnableCollection;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ObjectReference$EnableCollection;
            _COMMAND: int;
          }
          let JDWP$ObjectReference$EnableCollection: _JDWP$ObjectReference$EnableCollection$$static;
          interface _JDWP$ObjectReference$EnableCollection {
          }
          interface JDWP$ObjectReference$EnableCollection extends CombineTypes<[_JDWP$ObjectReference$EnableCollection, java.lang.Object]> {}
          interface _JDWP$ObjectReference$GetValues$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, object: ObjectReferenceImpl, fields: JDWP$ObjectReference$GetValues$Field[]): PacketStream;
            _process(vm: VirtualMachineImpl, object: ObjectReferenceImpl, fields: JDWP$ObjectReference$GetValues$Field[]): JDWP$ObjectReference$GetValues;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ObjectReference$GetValues;
            _COMMAND: int;
          }
          let JDWP$ObjectReference$GetValues: _JDWP$ObjectReference$GetValues$$static;
          interface _JDWP$ObjectReference$GetValues {
            _values: ValueImpl[];
          }
          interface JDWP$ObjectReference$GetValues extends CombineTypes<[_JDWP$ObjectReference$GetValues, java.lang.Object]> {}
          interface _JDWP$ObjectReference$GetValues$Field$$static extends ClassLike {
            _new(fieldID: long): JDWP$ObjectReference$GetValues$Field;
          }
          let JDWP$ObjectReference$GetValues$Field: _JDWP$ObjectReference$GetValues$Field$$static;
          interface _JDWP$ObjectReference$GetValues$Field {
            _write(ps: PacketStream): void;
            _fieldID: long;
          }
          interface JDWP$ObjectReference$GetValues$Field extends CombineTypes<[_JDWP$ObjectReference$GetValues$Field, java.lang.Object]> {}
          interface _JDWP$ObjectReference$InvokeMethod$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, object: ObjectReferenceImpl, thread: ThreadReferenceImpl, clazz: ClassTypeImpl, methodID: long, a5: ValueImpl[], arguments: int): PacketStream;
            _process(vm: VirtualMachineImpl, object: ObjectReferenceImpl, thread: ThreadReferenceImpl, clazz: ClassTypeImpl, methodID: long, a5: ValueImpl[], arguments: int): JDWP$ObjectReference$InvokeMethod;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ObjectReference$InvokeMethod;
            _COMMAND: int;
          }
          let JDWP$ObjectReference$InvokeMethod: _JDWP$ObjectReference$InvokeMethod$$static;
          interface _JDWP$ObjectReference$InvokeMethod {
            _exception: ObjectReferenceImpl;
            _returnValue: ValueImpl;
          }
          interface JDWP$ObjectReference$InvokeMethod extends CombineTypes<[_JDWP$ObjectReference$InvokeMethod, java.lang.Object]> {}
          interface _JDWP$ObjectReference$IsCollected$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, object: ObjectReferenceImpl): PacketStream;
            _process(vm: VirtualMachineImpl, object: ObjectReferenceImpl): JDWP$ObjectReference$IsCollected;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ObjectReference$IsCollected;
            _COMMAND: int;
          }
          let JDWP$ObjectReference$IsCollected: _JDWP$ObjectReference$IsCollected$$static;
          interface _JDWP$ObjectReference$IsCollected {
            _isCollected: boolean;
          }
          interface JDWP$ObjectReference$IsCollected extends CombineTypes<[_JDWP$ObjectReference$IsCollected, java.lang.Object]> {}
          interface _JDWP$ObjectReference$MonitorInfo$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, object: ObjectReferenceImpl): PacketStream;
            _process(vm: VirtualMachineImpl, object: ObjectReferenceImpl): JDWP$ObjectReference$MonitorInfo;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ObjectReference$MonitorInfo;
            _COMMAND: int;
          }
          let JDWP$ObjectReference$MonitorInfo: _JDWP$ObjectReference$MonitorInfo$$static;
          interface _JDWP$ObjectReference$MonitorInfo {
            _entryCount: int;
            _owner: ThreadReferenceImpl;
            _waiters: ThreadReferenceImpl[];
          }
          interface JDWP$ObjectReference$MonitorInfo extends CombineTypes<[_JDWP$ObjectReference$MonitorInfo, java.lang.Object]> {}
          interface _JDWP$ObjectReference$ReferenceType$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, object: ObjectReferenceImpl): PacketStream;
            _process(vm: VirtualMachineImpl, object: ObjectReferenceImpl): JDWP$ObjectReference$ReferenceType;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ObjectReference$ReferenceType;
            _COMMAND: int;
          }
          let JDWP$ObjectReference$ReferenceType: _JDWP$ObjectReference$ReferenceType$$static;
          interface _JDWP$ObjectReference$ReferenceType {
            _refTypeTag: byte;
            _typeID: long;
          }
          interface JDWP$ObjectReference$ReferenceType extends CombineTypes<[_JDWP$ObjectReference$ReferenceType, java.lang.Object]> {}
          interface _JDWP$ObjectReference$ReferringObjects$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, object: ObjectReferenceImpl, maxReferrers: int): PacketStream;
            _process(vm: VirtualMachineImpl, object: ObjectReferenceImpl, maxReferrers: int): JDWP$ObjectReference$ReferringObjects;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ObjectReference$ReferringObjects;
            _COMMAND: int;
          }
          let JDWP$ObjectReference$ReferringObjects: _JDWP$ObjectReference$ReferringObjects$$static;
          interface _JDWP$ObjectReference$ReferringObjects {
            _referringObjects: ObjectReferenceImpl[];
          }
          interface JDWP$ObjectReference$ReferringObjects extends CombineTypes<[_JDWP$ObjectReference$ReferringObjects, java.lang.Object]> {}
          interface _JDWP$ObjectReference$SetValues$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, object: ObjectReferenceImpl, values: JDWP$ObjectReference$SetValues$FieldValue[]): PacketStream;
            _process(vm: VirtualMachineImpl, object: ObjectReferenceImpl, values: JDWP$ObjectReference$SetValues$FieldValue[]): JDWP$ObjectReference$SetValues;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ObjectReference$SetValues;
            _COMMAND: int;
          }
          let JDWP$ObjectReference$SetValues: _JDWP$ObjectReference$SetValues$$static;
          interface _JDWP$ObjectReference$SetValues {
          }
          interface JDWP$ObjectReference$SetValues extends CombineTypes<[_JDWP$ObjectReference$SetValues, java.lang.Object]> {}
          interface _JDWP$ObjectReference$SetValues$FieldValue$$static extends ClassLike {
            _new(fieldID: long, a1: ValueImpl): JDWP$ObjectReference$SetValues$FieldValue;
          }
          let JDWP$ObjectReference$SetValues$FieldValue: _JDWP$ObjectReference$SetValues$FieldValue$$static;
          interface _JDWP$ObjectReference$SetValues$FieldValue {
            _write(ps: PacketStream): void;
            _fieldID: long;
            _value: ValueImpl;
          }
          interface JDWP$ObjectReference$SetValues$FieldValue extends CombineTypes<[_JDWP$ObjectReference$SetValues$FieldValue, java.lang.Object]> {}
          interface _JDWP$ReferenceType$$static extends ClassLike {
            _COMMAND_SET: int;
          }
          let JDWP$ReferenceType: _JDWP$ReferenceType$$static;
          interface _JDWP$ReferenceType {
          }
          interface JDWP$ReferenceType extends CombineTypes<[_JDWP$ReferenceType, java.lang.Object]> {}
          interface _JDWP$ReferenceType$ClassFileVersion$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, refType: ReferenceTypeImpl): PacketStream;
            _process(vm: VirtualMachineImpl, refType: ReferenceTypeImpl): JDWP$ReferenceType$ClassFileVersion;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ReferenceType$ClassFileVersion;
            _COMMAND: int;
          }
          let JDWP$ReferenceType$ClassFileVersion: _JDWP$ReferenceType$ClassFileVersion$$static;
          interface _JDWP$ReferenceType$ClassFileVersion {
            _majorVersion: int;
            _minorVersion: int;
          }
          interface JDWP$ReferenceType$ClassFileVersion extends CombineTypes<[_JDWP$ReferenceType$ClassFileVersion, java.lang.Object]> {}
          interface _JDWP$ReferenceType$ClassLoader$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, refType: ReferenceTypeImpl): PacketStream;
            _process(vm: VirtualMachineImpl, refType: ReferenceTypeImpl): JDWP$ReferenceType$ClassLoader;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ReferenceType$ClassLoader;
            _COMMAND: int;
          }
          let JDWP$ReferenceType$ClassLoader: _JDWP$ReferenceType$ClassLoader$$static;
          interface _JDWP$ReferenceType$ClassLoader {
            _classLoader: ClassLoaderReferenceImpl;
          }
          interface JDWP$ReferenceType$ClassLoader extends CombineTypes<[_JDWP$ReferenceType$ClassLoader, java.lang.Object]> {}
          interface _JDWP$ReferenceType$ClassObject$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, refType: ReferenceTypeImpl): PacketStream;
            _process(vm: VirtualMachineImpl, refType: ReferenceTypeImpl): JDWP$ReferenceType$ClassObject;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ReferenceType$ClassObject;
            _COMMAND: int;
          }
          let JDWP$ReferenceType$ClassObject: _JDWP$ReferenceType$ClassObject$$static;
          interface _JDWP$ReferenceType$ClassObject {
            _classObject: ClassObjectReferenceImpl;
          }
          interface JDWP$ReferenceType$ClassObject extends CombineTypes<[_JDWP$ReferenceType$ClassObject, java.lang.Object]> {}
          interface _JDWP$ReferenceType$ConstantPool$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, refType: ReferenceTypeImpl): PacketStream;
            _process(vm: VirtualMachineImpl, refType: ReferenceTypeImpl): JDWP$ReferenceType$ConstantPool;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ReferenceType$ConstantPool;
            _COMMAND: int;
          }
          let JDWP$ReferenceType$ConstantPool: _JDWP$ReferenceType$ConstantPool$$static;
          interface _JDWP$ReferenceType$ConstantPool {
            _bytes: byte[];
            _count: int;
          }
          interface JDWP$ReferenceType$ConstantPool extends CombineTypes<[_JDWP$ReferenceType$ConstantPool, java.lang.Object]> {}
          interface _JDWP$ReferenceType$Fields$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, refType: ReferenceTypeImpl): PacketStream;
            _process(vm: VirtualMachineImpl, refType: ReferenceTypeImpl): JDWP$ReferenceType$Fields;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ReferenceType$Fields;
            _COMMAND: int;
          }
          let JDWP$ReferenceType$Fields: _JDWP$ReferenceType$Fields$$static;
          interface _JDWP$ReferenceType$Fields {
            _declared: JDWP$ReferenceType$Fields$FieldInfo[];
          }
          interface JDWP$ReferenceType$Fields extends CombineTypes<[_JDWP$ReferenceType$Fields, java.lang.Object]> {}
          interface _JDWP$ReferenceType$Fields$FieldInfo$$static extends ClassLike {
          }
          let JDWP$ReferenceType$Fields$FieldInfo: _JDWP$ReferenceType$Fields$FieldInfo$$static;
          interface _JDWP$ReferenceType$Fields$FieldInfo {
            _fieldID: long;
            _modBits: int;
            _name: string;
            _signature: string;
          }
          interface JDWP$ReferenceType$Fields$FieldInfo extends CombineTypes<[_JDWP$ReferenceType$Fields$FieldInfo, java.lang.Object]> {}
          interface _JDWP$ReferenceType$FieldsWithGeneric$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, refType: ReferenceTypeImpl): PacketStream;
            _process(vm: VirtualMachineImpl, refType: ReferenceTypeImpl): JDWP$ReferenceType$FieldsWithGeneric;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ReferenceType$FieldsWithGeneric;
            _COMMAND: int;
          }
          let JDWP$ReferenceType$FieldsWithGeneric: _JDWP$ReferenceType$FieldsWithGeneric$$static;
          interface _JDWP$ReferenceType$FieldsWithGeneric {
            _declared: JDWP$ReferenceType$FieldsWithGeneric$FieldInfo[];
          }
          interface JDWP$ReferenceType$FieldsWithGeneric extends CombineTypes<[_JDWP$ReferenceType$FieldsWithGeneric, java.lang.Object]> {}
          interface _JDWP$ReferenceType$FieldsWithGeneric$FieldInfo$$static extends ClassLike {
          }
          let JDWP$ReferenceType$FieldsWithGeneric$FieldInfo: _JDWP$ReferenceType$FieldsWithGeneric$FieldInfo$$static;
          interface _JDWP$ReferenceType$FieldsWithGeneric$FieldInfo {
            _fieldID: long;
            _genericSignature: string;
            _modBits: int;
            _name: string;
            _signature: string;
          }
          interface JDWP$ReferenceType$FieldsWithGeneric$FieldInfo extends CombineTypes<[_JDWP$ReferenceType$FieldsWithGeneric$FieldInfo, java.lang.Object]> {}
          interface _JDWP$ReferenceType$GetValues$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, refType: ReferenceTypeImpl, fields: JDWP$ReferenceType$GetValues$Field[]): PacketStream;
            _process(vm: VirtualMachineImpl, refType: ReferenceTypeImpl, fields: JDWP$ReferenceType$GetValues$Field[]): JDWP$ReferenceType$GetValues;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ReferenceType$GetValues;
            _COMMAND: int;
          }
          let JDWP$ReferenceType$GetValues: _JDWP$ReferenceType$GetValues$$static;
          interface _JDWP$ReferenceType$GetValues {
            _values: ValueImpl[];
          }
          interface JDWP$ReferenceType$GetValues extends CombineTypes<[_JDWP$ReferenceType$GetValues, java.lang.Object]> {}
          interface _JDWP$ReferenceType$GetValues$Field$$static extends ClassLike {
            _new(fieldID: long): JDWP$ReferenceType$GetValues$Field;
          }
          let JDWP$ReferenceType$GetValues$Field: _JDWP$ReferenceType$GetValues$Field$$static;
          interface _JDWP$ReferenceType$GetValues$Field {
            _write(ps: PacketStream): void;
            _fieldID: long;
          }
          interface JDWP$ReferenceType$GetValues$Field extends CombineTypes<[_JDWP$ReferenceType$GetValues$Field, java.lang.Object]> {}
          interface _JDWP$ReferenceType$Instances$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, refType: ReferenceTypeImpl, maxInstances: int): PacketStream;
            _process(vm: VirtualMachineImpl, refType: ReferenceTypeImpl, maxInstances: int): JDWP$ReferenceType$Instances;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ReferenceType$Instances;
            _COMMAND: int;
          }
          let JDWP$ReferenceType$Instances: _JDWP$ReferenceType$Instances$$static;
          interface _JDWP$ReferenceType$Instances {
            _instances: ObjectReferenceImpl[];
          }
          interface JDWP$ReferenceType$Instances extends CombineTypes<[_JDWP$ReferenceType$Instances, java.lang.Object]> {}
          interface _JDWP$ReferenceType$Interfaces$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, refType: ReferenceTypeImpl): PacketStream;
            _process(vm: VirtualMachineImpl, refType: ReferenceTypeImpl): JDWP$ReferenceType$Interfaces;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ReferenceType$Interfaces;
            _COMMAND: int;
          }
          let JDWP$ReferenceType$Interfaces: _JDWP$ReferenceType$Interfaces$$static;
          interface _JDWP$ReferenceType$Interfaces {
            _interfaces: InterfaceTypeImpl[];
          }
          interface JDWP$ReferenceType$Interfaces extends CombineTypes<[_JDWP$ReferenceType$Interfaces, java.lang.Object]> {}
          interface _JDWP$ReferenceType$Methods$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, refType: ReferenceTypeImpl): PacketStream;
            _process(vm: VirtualMachineImpl, refType: ReferenceTypeImpl): JDWP$ReferenceType$Methods;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ReferenceType$Methods;
            _COMMAND: int;
          }
          let JDWP$ReferenceType$Methods: _JDWP$ReferenceType$Methods$$static;
          interface _JDWP$ReferenceType$Methods {
            _declared: JDWP$ReferenceType$Methods$MethodInfo[];
          }
          interface JDWP$ReferenceType$Methods extends CombineTypes<[_JDWP$ReferenceType$Methods, java.lang.Object]> {}
          interface _JDWP$ReferenceType$Methods$MethodInfo$$static extends ClassLike {
          }
          let JDWP$ReferenceType$Methods$MethodInfo: _JDWP$ReferenceType$Methods$MethodInfo$$static;
          interface _JDWP$ReferenceType$Methods$MethodInfo {
            _methodID: long;
            _modBits: int;
            _name: string;
            _signature: string;
          }
          interface JDWP$ReferenceType$Methods$MethodInfo extends CombineTypes<[_JDWP$ReferenceType$Methods$MethodInfo, java.lang.Object]> {}
          interface _JDWP$ReferenceType$MethodsWithGeneric$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, refType: ReferenceTypeImpl): PacketStream;
            _process(vm: VirtualMachineImpl, refType: ReferenceTypeImpl): JDWP$ReferenceType$MethodsWithGeneric;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ReferenceType$MethodsWithGeneric;
            _COMMAND: int;
          }
          let JDWP$ReferenceType$MethodsWithGeneric: _JDWP$ReferenceType$MethodsWithGeneric$$static;
          interface _JDWP$ReferenceType$MethodsWithGeneric {
            _declared: JDWP$ReferenceType$MethodsWithGeneric$MethodInfo[];
          }
          interface JDWP$ReferenceType$MethodsWithGeneric extends CombineTypes<[_JDWP$ReferenceType$MethodsWithGeneric, java.lang.Object]> {}
          interface _JDWP$ReferenceType$MethodsWithGeneric$MethodInfo$$static extends ClassLike {
          }
          let JDWP$ReferenceType$MethodsWithGeneric$MethodInfo: _JDWP$ReferenceType$MethodsWithGeneric$MethodInfo$$static;
          interface _JDWP$ReferenceType$MethodsWithGeneric$MethodInfo {
            _genericSignature: string;
            _methodID: long;
            _modBits: int;
            _name: string;
            _signature: string;
          }
          interface JDWP$ReferenceType$MethodsWithGeneric$MethodInfo extends CombineTypes<[_JDWP$ReferenceType$MethodsWithGeneric$MethodInfo, java.lang.Object]> {}
          interface _JDWP$ReferenceType$Modifiers$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, refType: ReferenceTypeImpl): PacketStream;
            _process(vm: VirtualMachineImpl, refType: ReferenceTypeImpl): JDWP$ReferenceType$Modifiers;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ReferenceType$Modifiers;
            _COMMAND: int;
          }
          let JDWP$ReferenceType$Modifiers: _JDWP$ReferenceType$Modifiers$$static;
          interface _JDWP$ReferenceType$Modifiers {
            _modBits: int;
          }
          interface JDWP$ReferenceType$Modifiers extends CombineTypes<[_JDWP$ReferenceType$Modifiers, java.lang.Object]> {}
          interface _JDWP$ReferenceType$Module$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, refType: ReferenceTypeImpl): PacketStream;
            _process(vm: VirtualMachineImpl, refType: ReferenceTypeImpl): JDWP$ReferenceType$Module;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ReferenceType$Module;
            _COMMAND: int;
          }
          let JDWP$ReferenceType$Module: _JDWP$ReferenceType$Module$$static;
          interface _JDWP$ReferenceType$Module {
            _module: ModuleReferenceImpl;
          }
          interface JDWP$ReferenceType$Module extends CombineTypes<[_JDWP$ReferenceType$Module, java.lang.Object]> {}
          interface _JDWP$ReferenceType$NestedTypes$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, refType: ReferenceTypeImpl): PacketStream;
            _process(vm: VirtualMachineImpl, refType: ReferenceTypeImpl): JDWP$ReferenceType$NestedTypes;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ReferenceType$NestedTypes;
            _COMMAND: int;
          }
          let JDWP$ReferenceType$NestedTypes: _JDWP$ReferenceType$NestedTypes$$static;
          interface _JDWP$ReferenceType$NestedTypes {
            _classes: JDWP$ReferenceType$NestedTypes$TypeInfo[];
          }
          interface JDWP$ReferenceType$NestedTypes extends CombineTypes<[_JDWP$ReferenceType$NestedTypes, java.lang.Object]> {}
          interface _JDWP$ReferenceType$NestedTypes$TypeInfo$$static extends ClassLike {
          }
          let JDWP$ReferenceType$NestedTypes$TypeInfo: _JDWP$ReferenceType$NestedTypes$TypeInfo$$static;
          interface _JDWP$ReferenceType$NestedTypes$TypeInfo {
            _refTypeTag: byte;
            _typeID: long;
          }
          interface JDWP$ReferenceType$NestedTypes$TypeInfo extends CombineTypes<[_JDWP$ReferenceType$NestedTypes$TypeInfo, java.lang.Object]> {}
          interface _JDWP$ReferenceType$Signature$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, refType: ReferenceTypeImpl): PacketStream;
            _process(vm: VirtualMachineImpl, refType: ReferenceTypeImpl): JDWP$ReferenceType$Signature;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ReferenceType$Signature;
            _COMMAND: int;
          }
          let JDWP$ReferenceType$Signature: _JDWP$ReferenceType$Signature$$static;
          interface _JDWP$ReferenceType$Signature {
            _signature: string;
          }
          interface JDWP$ReferenceType$Signature extends CombineTypes<[_JDWP$ReferenceType$Signature, java.lang.Object]> {}
          interface _JDWP$ReferenceType$SignatureWithGeneric$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, refType: ReferenceTypeImpl): PacketStream;
            _process(vm: VirtualMachineImpl, refType: ReferenceTypeImpl): JDWP$ReferenceType$SignatureWithGeneric;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ReferenceType$SignatureWithGeneric;
            _COMMAND: int;
          }
          let JDWP$ReferenceType$SignatureWithGeneric: _JDWP$ReferenceType$SignatureWithGeneric$$static;
          interface _JDWP$ReferenceType$SignatureWithGeneric {
            _genericSignature: string;
            _signature: string;
          }
          interface JDWP$ReferenceType$SignatureWithGeneric extends CombineTypes<[_JDWP$ReferenceType$SignatureWithGeneric, java.lang.Object]> {}
          interface _JDWP$ReferenceType$SourceDebugExtension$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, refType: ReferenceTypeImpl): PacketStream;
            _process(vm: VirtualMachineImpl, refType: ReferenceTypeImpl): JDWP$ReferenceType$SourceDebugExtension;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ReferenceType$SourceDebugExtension;
            _COMMAND: int;
          }
          let JDWP$ReferenceType$SourceDebugExtension: _JDWP$ReferenceType$SourceDebugExtension$$static;
          interface _JDWP$ReferenceType$SourceDebugExtension {
            _extension: string;
          }
          interface JDWP$ReferenceType$SourceDebugExtension extends CombineTypes<[_JDWP$ReferenceType$SourceDebugExtension, java.lang.Object]> {}
          interface _JDWP$ReferenceType$SourceFile$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, refType: ReferenceTypeImpl): PacketStream;
            _process(vm: VirtualMachineImpl, refType: ReferenceTypeImpl): JDWP$ReferenceType$SourceFile;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ReferenceType$SourceFile;
            _COMMAND: int;
          }
          let JDWP$ReferenceType$SourceFile: _JDWP$ReferenceType$SourceFile$$static;
          interface _JDWP$ReferenceType$SourceFile {
            _sourceFile: string;
          }
          interface JDWP$ReferenceType$SourceFile extends CombineTypes<[_JDWP$ReferenceType$SourceFile, java.lang.Object]> {}
          interface _JDWP$ReferenceType$Status$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, refType: ReferenceTypeImpl): PacketStream;
            _process(vm: VirtualMachineImpl, refType: ReferenceTypeImpl): JDWP$ReferenceType$Status;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ReferenceType$Status;
            _COMMAND: int;
          }
          let JDWP$ReferenceType$Status: _JDWP$ReferenceType$Status$$static;
          interface _JDWP$ReferenceType$Status {
            _status: int;
          }
          interface JDWP$ReferenceType$Status extends CombineTypes<[_JDWP$ReferenceType$Status, java.lang.Object]> {}
          interface _JDWP$StackFrame$$static extends ClassLike {
            _COMMAND_SET: int;
          }
          let JDWP$StackFrame: _JDWP$StackFrame$$static;
          interface _JDWP$StackFrame {
          }
          interface JDWP$StackFrame extends CombineTypes<[_JDWP$StackFrame, java.lang.Object]> {}
          interface _JDWP$StackFrame$GetValues$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, thread: ThreadReferenceImpl, frame: long, a3: JDWP$StackFrame$GetValues$SlotInfo[]): PacketStream;
            _process(vm: VirtualMachineImpl, thread: ThreadReferenceImpl, frame: long, a3: JDWP$StackFrame$GetValues$SlotInfo[]): JDWP$StackFrame$GetValues;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$StackFrame$GetValues;
            _COMMAND: int;
          }
          let JDWP$StackFrame$GetValues: _JDWP$StackFrame$GetValues$$static;
          interface _JDWP$StackFrame$GetValues {
            _values: ValueImpl[];
          }
          interface JDWP$StackFrame$GetValues extends CombineTypes<[_JDWP$StackFrame$GetValues, java.lang.Object]> {}
          interface _JDWP$StackFrame$GetValues$SlotInfo$$static extends ClassLike {
            _new(slot: int, sigbyte: byte): JDWP$StackFrame$GetValues$SlotInfo;
          }
          let JDWP$StackFrame$GetValues$SlotInfo: _JDWP$StackFrame$GetValues$SlotInfo$$static;
          interface _JDWP$StackFrame$GetValues$SlotInfo {
            _write(ps: PacketStream): void;
            _sigbyte: byte;
            _slot: int;
          }
          interface JDWP$StackFrame$GetValues$SlotInfo extends CombineTypes<[_JDWP$StackFrame$GetValues$SlotInfo, java.lang.Object]> {}
          interface _JDWP$StackFrame$PopFrames$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, thread: ThreadReferenceImpl, frame: long): PacketStream;
            _process(vm: VirtualMachineImpl, thread: ThreadReferenceImpl, frame: long): JDWP$StackFrame$PopFrames;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$StackFrame$PopFrames;
            _COMMAND: int;
          }
          let JDWP$StackFrame$PopFrames: _JDWP$StackFrame$PopFrames$$static;
          interface _JDWP$StackFrame$PopFrames {
          }
          interface JDWP$StackFrame$PopFrames extends CombineTypes<[_JDWP$StackFrame$PopFrames, java.lang.Object]> {}
          interface _JDWP$StackFrame$SetValues$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, thread: ThreadReferenceImpl, frame: long, a3: JDWP$StackFrame$SetValues$SlotInfo[]): PacketStream;
            _process(vm: VirtualMachineImpl, thread: ThreadReferenceImpl, frame: long, a3: JDWP$StackFrame$SetValues$SlotInfo[]): JDWP$StackFrame$SetValues;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$StackFrame$SetValues;
            _COMMAND: int;
          }
          let JDWP$StackFrame$SetValues: _JDWP$StackFrame$SetValues$$static;
          interface _JDWP$StackFrame$SetValues {
          }
          interface JDWP$StackFrame$SetValues extends CombineTypes<[_JDWP$StackFrame$SetValues, java.lang.Object]> {}
          interface _JDWP$StackFrame$SetValues$SlotInfo$$static extends ClassLike {
            _new(slot: int, slotValue: ValueImpl): JDWP$StackFrame$SetValues$SlotInfo;
          }
          let JDWP$StackFrame$SetValues$SlotInfo: _JDWP$StackFrame$SetValues$SlotInfo$$static;
          interface _JDWP$StackFrame$SetValues$SlotInfo {
            _write(ps: PacketStream): void;
            _slot: int;
            _slotValue: ValueImpl;
          }
          interface JDWP$StackFrame$SetValues$SlotInfo extends CombineTypes<[_JDWP$StackFrame$SetValues$SlotInfo, java.lang.Object]> {}
          interface _JDWP$StackFrame$ThisObject$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, thread: ThreadReferenceImpl, frame: long): PacketStream;
            _process(vm: VirtualMachineImpl, thread: ThreadReferenceImpl, frame: long): JDWP$StackFrame$ThisObject;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$StackFrame$ThisObject;
            _COMMAND: int;
          }
          let JDWP$StackFrame$ThisObject: _JDWP$StackFrame$ThisObject$$static;
          interface _JDWP$StackFrame$ThisObject {
            _objectThis: ObjectReferenceImpl;
          }
          interface JDWP$StackFrame$ThisObject extends CombineTypes<[_JDWP$StackFrame$ThisObject, java.lang.Object]> {}
          interface _JDWP$StepDepth$$static extends ClassLike {
            _INTO: int;
            _OUT: int;
            _OVER: int;
            _new(): JDWP$StepDepth;
          }
          let JDWP$StepDepth: _JDWP$StepDepth$$static;
          interface _JDWP$StepDepth {
          }
          interface JDWP$StepDepth extends CombineTypes<[_JDWP$StepDepth, java.lang.Object]> {}
          interface _JDWP$StepSize$$static extends ClassLike {
            _LINE: int;
            _MIN: int;
            _new(): JDWP$StepSize;
          }
          let JDWP$StepSize: _JDWP$StepSize$$static;
          interface _JDWP$StepSize {
          }
          interface JDWP$StepSize extends CombineTypes<[_JDWP$StepSize, java.lang.Object]> {}
          interface _JDWP$StringReference$$static extends ClassLike {
            _COMMAND_SET: int;
          }
          let JDWP$StringReference: _JDWP$StringReference$$static;
          interface _JDWP$StringReference {
          }
          interface JDWP$StringReference extends CombineTypes<[_JDWP$StringReference, java.lang.Object]> {}
          interface _JDWP$StringReference$Value$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, stringObject: ObjectReferenceImpl): PacketStream;
            _process(vm: VirtualMachineImpl, stringObject: ObjectReferenceImpl): JDWP$StringReference$Value;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$StringReference$Value;
            _COMMAND: int;
          }
          let JDWP$StringReference$Value: _JDWP$StringReference$Value$$static;
          interface _JDWP$StringReference$Value {
            _stringValue: string;
          }
          interface JDWP$StringReference$Value extends CombineTypes<[_JDWP$StringReference$Value, java.lang.Object]> {}
          interface _JDWP$SuspendPolicy$$static extends ClassLike {
            _ALL: int;
            _EVENT_THREAD: int;
            _NONE: int;
            _new(): JDWP$SuspendPolicy;
          }
          let JDWP$SuspendPolicy: _JDWP$SuspendPolicy$$static;
          interface _JDWP$SuspendPolicy {
          }
          interface JDWP$SuspendPolicy extends CombineTypes<[_JDWP$SuspendPolicy, java.lang.Object]> {}
          interface _JDWP$SuspendStatus$$static extends ClassLike {
            _SUSPEND_STATUS_SUSPENDED: int;
            _new(): JDWP$SuspendStatus;
          }
          let JDWP$SuspendStatus: _JDWP$SuspendStatus$$static;
          interface _JDWP$SuspendStatus {
          }
          interface JDWP$SuspendStatus extends CombineTypes<[_JDWP$SuspendStatus, java.lang.Object]> {}
          interface _JDWP$Tag$$static extends ClassLike {
            _ARRAY: int;
            _BOOLEAN: int;
            _BYTE: int;
            _CHAR: int;
            _CLASS_LOADER: int;
            _CLASS_OBJECT: int;
            _DOUBLE: int;
            _FLOAT: int;
            _INT: int;
            _LONG: int;
            _OBJECT: int;
            _SHORT: int;
            _STRING: int;
            _THREAD: int;
            _THREAD_GROUP: int;
            _VOID: int;
            _new(): JDWP$Tag;
          }
          let JDWP$Tag: _JDWP$Tag$$static;
          interface _JDWP$Tag {
          }
          interface JDWP$Tag extends CombineTypes<[_JDWP$Tag, java.lang.Object]> {}
          interface _JDWP$ThreadGroupReference$$static extends ClassLike {
            _COMMAND_SET: int;
          }
          let JDWP$ThreadGroupReference: _JDWP$ThreadGroupReference$$static;
          interface _JDWP$ThreadGroupReference {
          }
          interface JDWP$ThreadGroupReference extends CombineTypes<[_JDWP$ThreadGroupReference, java.lang.Object]> {}
          interface _JDWP$ThreadGroupReference$Children$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, group: ThreadGroupReferenceImpl): PacketStream;
            _process(vm: VirtualMachineImpl, group: ThreadGroupReferenceImpl): JDWP$ThreadGroupReference$Children;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ThreadGroupReference$Children;
            _COMMAND: int;
          }
          let JDWP$ThreadGroupReference$Children: _JDWP$ThreadGroupReference$Children$$static;
          interface _JDWP$ThreadGroupReference$Children {
            _childGroups: ThreadGroupReferenceImpl[];
            _childThreads: ThreadReferenceImpl[];
          }
          interface JDWP$ThreadGroupReference$Children extends CombineTypes<[_JDWP$ThreadGroupReference$Children, java.lang.Object]> {}
          interface _JDWP$ThreadGroupReference$Name$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, group: ThreadGroupReferenceImpl): PacketStream;
            _process(vm: VirtualMachineImpl, group: ThreadGroupReferenceImpl): JDWP$ThreadGroupReference$Name;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ThreadGroupReference$Name;
            _COMMAND: int;
          }
          let JDWP$ThreadGroupReference$Name: _JDWP$ThreadGroupReference$Name$$static;
          interface _JDWP$ThreadGroupReference$Name {
            _groupName: string;
          }
          interface JDWP$ThreadGroupReference$Name extends CombineTypes<[_JDWP$ThreadGroupReference$Name, java.lang.Object]> {}
          interface _JDWP$ThreadGroupReference$Parent$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, group: ThreadGroupReferenceImpl): PacketStream;
            _process(vm: VirtualMachineImpl, group: ThreadGroupReferenceImpl): JDWP$ThreadGroupReference$Parent;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ThreadGroupReference$Parent;
            _COMMAND: int;
          }
          let JDWP$ThreadGroupReference$Parent: _JDWP$ThreadGroupReference$Parent$$static;
          interface _JDWP$ThreadGroupReference$Parent {
            _parentGroup: ThreadGroupReferenceImpl;
          }
          interface JDWP$ThreadGroupReference$Parent extends CombineTypes<[_JDWP$ThreadGroupReference$Parent, java.lang.Object]> {}
          interface _JDWP$ThreadReference$$static extends ClassLike {
            _COMMAND_SET: int;
          }
          let JDWP$ThreadReference: _JDWP$ThreadReference$$static;
          interface _JDWP$ThreadReference {
          }
          interface JDWP$ThreadReference extends CombineTypes<[_JDWP$ThreadReference, java.lang.Object]> {}
          interface _JDWP$ThreadReference$CurrentContendedMonitor$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, thread: ThreadReferenceImpl): PacketStream;
            _process(vm: VirtualMachineImpl, thread: ThreadReferenceImpl): JDWP$ThreadReference$CurrentContendedMonitor;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ThreadReference$CurrentContendedMonitor;
            _COMMAND: int;
          }
          let JDWP$ThreadReference$CurrentContendedMonitor: _JDWP$ThreadReference$CurrentContendedMonitor$$static;
          interface _JDWP$ThreadReference$CurrentContendedMonitor {
            _monitor: ObjectReferenceImpl;
          }
          interface JDWP$ThreadReference$CurrentContendedMonitor extends CombineTypes<[_JDWP$ThreadReference$CurrentContendedMonitor, java.lang.Object]> {}
          interface _JDWP$ThreadReference$ForceEarlyReturn$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, thread: ThreadReferenceImpl, value: ValueImpl): PacketStream;
            _process(vm: VirtualMachineImpl, thread: ThreadReferenceImpl, value: ValueImpl): JDWP$ThreadReference$ForceEarlyReturn;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ThreadReference$ForceEarlyReturn;
            _COMMAND: int;
          }
          let JDWP$ThreadReference$ForceEarlyReturn: _JDWP$ThreadReference$ForceEarlyReturn$$static;
          interface _JDWP$ThreadReference$ForceEarlyReturn {
          }
          interface JDWP$ThreadReference$ForceEarlyReturn extends CombineTypes<[_JDWP$ThreadReference$ForceEarlyReturn, java.lang.Object]> {}
          interface _JDWP$ThreadReference$FrameCount$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, thread: ThreadReferenceImpl): PacketStream;
            _process(vm: VirtualMachineImpl, thread: ThreadReferenceImpl): JDWP$ThreadReference$FrameCount;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ThreadReference$FrameCount;
            _COMMAND: int;
          }
          let JDWP$ThreadReference$FrameCount: _JDWP$ThreadReference$FrameCount$$static;
          interface _JDWP$ThreadReference$FrameCount {
            _frameCount: int;
          }
          interface JDWP$ThreadReference$FrameCount extends CombineTypes<[_JDWP$ThreadReference$FrameCount, java.lang.Object]> {}
          interface _JDWP$ThreadReference$Frames$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, thread: ThreadReferenceImpl, startFrame: int, length: int): PacketStream;
            _process(vm: VirtualMachineImpl, thread: ThreadReferenceImpl, startFrame: int, length: int): JDWP$ThreadReference$Frames;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ThreadReference$Frames;
            _COMMAND: int;
          }
          let JDWP$ThreadReference$Frames: _JDWP$ThreadReference$Frames$$static;
          interface _JDWP$ThreadReference$Frames {
            _frames: JDWP$ThreadReference$Frames$Frame[];
          }
          interface JDWP$ThreadReference$Frames extends CombineTypes<[_JDWP$ThreadReference$Frames, java.lang.Object]> {}
          interface _JDWP$ThreadReference$Frames$Frame$$static extends ClassLike {
          }
          let JDWP$ThreadReference$Frames$Frame: _JDWP$ThreadReference$Frames$Frame$$static;
          interface _JDWP$ThreadReference$Frames$Frame {
            _frameID: long;
            _location: sun.jdi.Location;
          }
          interface JDWP$ThreadReference$Frames$Frame extends CombineTypes<[_JDWP$ThreadReference$Frames$Frame, java.lang.Object]> {}
          interface _JDWP$ThreadReference$Interrupt$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, thread: ThreadReferenceImpl): PacketStream;
            _process(vm: VirtualMachineImpl, thread: ThreadReferenceImpl): JDWP$ThreadReference$Interrupt;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ThreadReference$Interrupt;
            _COMMAND: int;
          }
          let JDWP$ThreadReference$Interrupt: _JDWP$ThreadReference$Interrupt$$static;
          interface _JDWP$ThreadReference$Interrupt {
          }
          interface JDWP$ThreadReference$Interrupt extends CombineTypes<[_JDWP$ThreadReference$Interrupt, java.lang.Object]> {}
          interface _JDWP$ThreadReference$IsVirtual$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, thread: ThreadReferenceImpl): PacketStream;
            _process(vm: VirtualMachineImpl, thread: ThreadReferenceImpl): JDWP$ThreadReference$IsVirtual;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ThreadReference$IsVirtual;
            _COMMAND: int;
          }
          let JDWP$ThreadReference$IsVirtual: _JDWP$ThreadReference$IsVirtual$$static;
          interface _JDWP$ThreadReference$IsVirtual {
            _isVirtual: boolean;
          }
          interface JDWP$ThreadReference$IsVirtual extends CombineTypes<[_JDWP$ThreadReference$IsVirtual, java.lang.Object]> {}
          interface _JDWP$ThreadReference$Name$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, thread: ThreadReferenceImpl): PacketStream;
            _process(vm: VirtualMachineImpl, thread: ThreadReferenceImpl): JDWP$ThreadReference$Name;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ThreadReference$Name;
            _COMMAND: int;
          }
          let JDWP$ThreadReference$Name: _JDWP$ThreadReference$Name$$static;
          interface _JDWP$ThreadReference$Name {
            _threadName: string;
          }
          interface JDWP$ThreadReference$Name extends CombineTypes<[_JDWP$ThreadReference$Name, java.lang.Object]> {}
          interface _JDWP$ThreadReference$OwnedMonitors$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, thread: ThreadReferenceImpl): PacketStream;
            _process(vm: VirtualMachineImpl, thread: ThreadReferenceImpl): JDWP$ThreadReference$OwnedMonitors;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ThreadReference$OwnedMonitors;
            _COMMAND: int;
          }
          let JDWP$ThreadReference$OwnedMonitors: _JDWP$ThreadReference$OwnedMonitors$$static;
          interface _JDWP$ThreadReference$OwnedMonitors {
            _owned: ObjectReferenceImpl[];
          }
          interface JDWP$ThreadReference$OwnedMonitors extends CombineTypes<[_JDWP$ThreadReference$OwnedMonitors, java.lang.Object]> {}
          interface _JDWP$ThreadReference$OwnedMonitorsStackDepthInfo$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, thread: ThreadReferenceImpl): PacketStream;
            _process(vm: VirtualMachineImpl, thread: ThreadReferenceImpl): JDWP$ThreadReference$OwnedMonitorsStackDepthInfo;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ThreadReference$OwnedMonitorsStackDepthInfo;
            _COMMAND: int;
          }
          let JDWP$ThreadReference$OwnedMonitorsStackDepthInfo: _JDWP$ThreadReference$OwnedMonitorsStackDepthInfo$$static;
          interface _JDWP$ThreadReference$OwnedMonitorsStackDepthInfo {
            _owned: JDWP$ThreadReference$OwnedMonitorsStackDepthInfo$monitor[];
          }
          interface JDWP$ThreadReference$OwnedMonitorsStackDepthInfo extends CombineTypes<[_JDWP$ThreadReference$OwnedMonitorsStackDepthInfo, java.lang.Object]> {}
          interface _JDWP$ThreadReference$OwnedMonitorsStackDepthInfo$monitor$$static extends ClassLike {
          }
          let JDWP$ThreadReference$OwnedMonitorsStackDepthInfo$monitor: _JDWP$ThreadReference$OwnedMonitorsStackDepthInfo$monitor$$static;
          interface _JDWP$ThreadReference$OwnedMonitorsStackDepthInfo$monitor {
            _monitor: ObjectReferenceImpl;
            _stack_depth: int;
          }
          interface JDWP$ThreadReference$OwnedMonitorsStackDepthInfo$monitor extends CombineTypes<[_JDWP$ThreadReference$OwnedMonitorsStackDepthInfo$monitor, java.lang.Object]> {}
          interface _JDWP$ThreadReference$Resume$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, thread: ThreadReferenceImpl): PacketStream;
            _process(vm: VirtualMachineImpl, thread: ThreadReferenceImpl): JDWP$ThreadReference$Resume;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ThreadReference$Resume;
            _COMMAND: int;
          }
          let JDWP$ThreadReference$Resume: _JDWP$ThreadReference$Resume$$static;
          interface _JDWP$ThreadReference$Resume {
          }
          interface JDWP$ThreadReference$Resume extends CombineTypes<[_JDWP$ThreadReference$Resume, java.lang.Object]> {}
          interface _JDWP$ThreadReference$Status$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, thread: ThreadReferenceImpl): PacketStream;
            _process(vm: VirtualMachineImpl, thread: ThreadReferenceImpl): JDWP$ThreadReference$Status;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ThreadReference$Status;
            _COMMAND: int;
          }
          let JDWP$ThreadReference$Status: _JDWP$ThreadReference$Status$$static;
          interface _JDWP$ThreadReference$Status {
            _suspendStatus: int;
            _threadStatus: int;
          }
          interface JDWP$ThreadReference$Status extends CombineTypes<[_JDWP$ThreadReference$Status, java.lang.Object]> {}
          interface _JDWP$ThreadReference$Stop$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, thread: ThreadReferenceImpl, throwable: ObjectReferenceImpl): PacketStream;
            _process(vm: VirtualMachineImpl, thread: ThreadReferenceImpl, throwable: ObjectReferenceImpl): JDWP$ThreadReference$Stop;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ThreadReference$Stop;
            _COMMAND: int;
          }
          let JDWP$ThreadReference$Stop: _JDWP$ThreadReference$Stop$$static;
          interface _JDWP$ThreadReference$Stop {
          }
          interface JDWP$ThreadReference$Stop extends CombineTypes<[_JDWP$ThreadReference$Stop, java.lang.Object]> {}
          interface _JDWP$ThreadReference$Suspend$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, thread: ThreadReferenceImpl): PacketStream;
            _process(vm: VirtualMachineImpl, thread: ThreadReferenceImpl): JDWP$ThreadReference$Suspend;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ThreadReference$Suspend;
            _COMMAND: int;
          }
          let JDWP$ThreadReference$Suspend: _JDWP$ThreadReference$Suspend$$static;
          interface _JDWP$ThreadReference$Suspend {
          }
          interface JDWP$ThreadReference$Suspend extends CombineTypes<[_JDWP$ThreadReference$Suspend, java.lang.Object]> {}
          interface _JDWP$ThreadReference$SuspendCount$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, thread: ThreadReferenceImpl): PacketStream;
            _process(vm: VirtualMachineImpl, thread: ThreadReferenceImpl): JDWP$ThreadReference$SuspendCount;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ThreadReference$SuspendCount;
            _COMMAND: int;
          }
          let JDWP$ThreadReference$SuspendCount: _JDWP$ThreadReference$SuspendCount$$static;
          interface _JDWP$ThreadReference$SuspendCount {
            _suspendCount: int;
          }
          interface JDWP$ThreadReference$SuspendCount extends CombineTypes<[_JDWP$ThreadReference$SuspendCount, java.lang.Object]> {}
          interface _JDWP$ThreadReference$ThreadGroup$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, thread: ThreadReferenceImpl): PacketStream;
            _process(vm: VirtualMachineImpl, thread: ThreadReferenceImpl): JDWP$ThreadReference$ThreadGroup;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$ThreadReference$ThreadGroup;
            _COMMAND: int;
          }
          let JDWP$ThreadReference$ThreadGroup: _JDWP$ThreadReference$ThreadGroup$$static;
          interface _JDWP$ThreadReference$ThreadGroup {
            _group: ThreadGroupReferenceImpl;
          }
          interface JDWP$ThreadReference$ThreadGroup extends CombineTypes<[_JDWP$ThreadReference$ThreadGroup, java.lang.Object]> {}
          interface _JDWP$ThreadStatus$$static extends ClassLike {
            _MONITOR: int;
            _RUNNING: int;
            _SLEEPING: int;
            _WAIT: int;
            _ZOMBIE: int;
            _new(): JDWP$ThreadStatus;
          }
          let JDWP$ThreadStatus: _JDWP$ThreadStatus$$static;
          interface _JDWP$ThreadStatus {
          }
          interface JDWP$ThreadStatus extends CombineTypes<[_JDWP$ThreadStatus, java.lang.Object]> {}
          interface _JDWP$TypeTag$$static extends ClassLike {
            _ARRAY: int;
            _CLASS: int;
            _INTERFACE: int;
            _new(): JDWP$TypeTag;
          }
          let JDWP$TypeTag: _JDWP$TypeTag$$static;
          interface _JDWP$TypeTag {
          }
          interface JDWP$TypeTag extends CombineTypes<[_JDWP$TypeTag, java.lang.Object]> {}
          interface _JDWP$VirtualMachine$$static extends ClassLike {
            _COMMAND_SET: int;
          }
          let JDWP$VirtualMachine: _JDWP$VirtualMachine$$static;
          interface _JDWP$VirtualMachine {
          }
          interface JDWP$VirtualMachine extends CombineTypes<[_JDWP$VirtualMachine, java.lang.Object]> {}
          interface _JDWP$VirtualMachine$AllClasses$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl): PacketStream;
            _process(vm: VirtualMachineImpl): JDWP$VirtualMachine$AllClasses;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$VirtualMachine$AllClasses;
            _COMMAND: int;
          }
          let JDWP$VirtualMachine$AllClasses: _JDWP$VirtualMachine$AllClasses$$static;
          interface _JDWP$VirtualMachine$AllClasses {
            _classes: JDWP$VirtualMachine$AllClasses$ClassInfo[];
          }
          interface JDWP$VirtualMachine$AllClasses extends CombineTypes<[_JDWP$VirtualMachine$AllClasses, java.lang.Object]> {}
          interface _JDWP$VirtualMachine$AllClasses$ClassInfo$$static extends ClassLike {
          }
          let JDWP$VirtualMachine$AllClasses$ClassInfo: _JDWP$VirtualMachine$AllClasses$ClassInfo$$static;
          interface _JDWP$VirtualMachine$AllClasses$ClassInfo {
            _refTypeTag: byte;
            _signature: string;
            _status: int;
            _typeID: long;
          }
          interface JDWP$VirtualMachine$AllClasses$ClassInfo extends CombineTypes<[_JDWP$VirtualMachine$AllClasses$ClassInfo, java.lang.Object]> {}
          interface _JDWP$VirtualMachine$AllClassesWithGeneric$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl): PacketStream;
            _process(vm: VirtualMachineImpl): JDWP$VirtualMachine$AllClassesWithGeneric;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$VirtualMachine$AllClassesWithGeneric;
            _COMMAND: int;
          }
          let JDWP$VirtualMachine$AllClassesWithGeneric: _JDWP$VirtualMachine$AllClassesWithGeneric$$static;
          interface _JDWP$VirtualMachine$AllClassesWithGeneric {
            _classes: JDWP$VirtualMachine$AllClassesWithGeneric$ClassInfo[];
          }
          interface JDWP$VirtualMachine$AllClassesWithGeneric extends CombineTypes<[_JDWP$VirtualMachine$AllClassesWithGeneric, java.lang.Object]> {}
          interface _JDWP$VirtualMachine$AllClassesWithGeneric$ClassInfo$$static extends ClassLike {
          }
          let JDWP$VirtualMachine$AllClassesWithGeneric$ClassInfo: _JDWP$VirtualMachine$AllClassesWithGeneric$ClassInfo$$static;
          interface _JDWP$VirtualMachine$AllClassesWithGeneric$ClassInfo {
            _genericSignature: string;
            _refTypeTag: byte;
            _signature: string;
            _status: int;
            _typeID: long;
          }
          interface JDWP$VirtualMachine$AllClassesWithGeneric$ClassInfo extends CombineTypes<[_JDWP$VirtualMachine$AllClassesWithGeneric$ClassInfo, java.lang.Object]> {}
          interface _JDWP$VirtualMachine$AllModules$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl): PacketStream;
            _process(vm: VirtualMachineImpl): JDWP$VirtualMachine$AllModules;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$VirtualMachine$AllModules;
            _COMMAND: int;
          }
          let JDWP$VirtualMachine$AllModules: _JDWP$VirtualMachine$AllModules$$static;
          interface _JDWP$VirtualMachine$AllModules {
            _modules: ModuleReferenceImpl[];
          }
          interface JDWP$VirtualMachine$AllModules extends CombineTypes<[_JDWP$VirtualMachine$AllModules, java.lang.Object]> {}
          interface _JDWP$VirtualMachine$AllThreads$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl): PacketStream;
            _process(vm: VirtualMachineImpl): JDWP$VirtualMachine$AllThreads;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$VirtualMachine$AllThreads;
            _COMMAND: int;
          }
          let JDWP$VirtualMachine$AllThreads: _JDWP$VirtualMachine$AllThreads$$static;
          interface _JDWP$VirtualMachine$AllThreads {
            _threads: ThreadReferenceImpl[];
          }
          interface JDWP$VirtualMachine$AllThreads extends CombineTypes<[_JDWP$VirtualMachine$AllThreads, java.lang.Object]> {}
          interface _JDWP$VirtualMachine$Capabilities$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl): PacketStream;
            _process(vm: VirtualMachineImpl): JDWP$VirtualMachine$Capabilities;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$VirtualMachine$Capabilities;
            _COMMAND: int;
          }
          let JDWP$VirtualMachine$Capabilities: _JDWP$VirtualMachine$Capabilities$$static;
          interface _JDWP$VirtualMachine$Capabilities {
            _canGetBytecodes: boolean;
            _canGetCurrentContendedMonitor: boolean;
            _canGetMonitorInfo: boolean;
            _canGetOwnedMonitorInfo: boolean;
            _canGetSyntheticAttribute: boolean;
            _canWatchFieldAccess: boolean;
            _canWatchFieldModification: boolean;
          }
          interface JDWP$VirtualMachine$Capabilities extends CombineTypes<[_JDWP$VirtualMachine$Capabilities, java.lang.Object]> {}
          interface _JDWP$VirtualMachine$CapabilitiesNew$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl): PacketStream;
            _process(vm: VirtualMachineImpl): JDWP$VirtualMachine$CapabilitiesNew;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$VirtualMachine$CapabilitiesNew;
            _COMMAND: int;
          }
          let JDWP$VirtualMachine$CapabilitiesNew: _JDWP$VirtualMachine$CapabilitiesNew$$static;
          interface _JDWP$VirtualMachine$CapabilitiesNew {
            _canAddMethod: boolean;
            _canForceEarlyReturn: boolean;
            _canGetBytecodes: boolean;
            _canGetConstantPool: boolean;
            _canGetCurrentContendedMonitor: boolean;
            _canGetInstanceInfo: boolean;
            _canGetMonitorFrameInfo: boolean;
            _canGetMonitorInfo: boolean;
            _canGetOwnedMonitorInfo: boolean;
            _canGetSourceDebugExtension: boolean;
            _canGetSyntheticAttribute: boolean;
            _canPopFrames: boolean;
            _canRedefineClasses: boolean;
            _canRequestMonitorEvents: boolean;
            _canRequestVMDeathEvent: boolean;
            _canSetDefaultStratum: boolean;
            _canUnrestrictedlyRedefineClasses: boolean;
            _canUseInstanceFilters: boolean;
            _canUseSourceNameFilters: boolean;
            _canWatchFieldAccess: boolean;
            _canWatchFieldModification: boolean;
            _reserved22: boolean;
            _reserved23: boolean;
            _reserved24: boolean;
            _reserved25: boolean;
            _reserved26: boolean;
            _reserved27: boolean;
            _reserved28: boolean;
            _reserved29: boolean;
            _reserved30: boolean;
            _reserved31: boolean;
            _reserved32: boolean;
          }
          interface JDWP$VirtualMachine$CapabilitiesNew extends CombineTypes<[_JDWP$VirtualMachine$CapabilitiesNew, java.lang.Object]> {}
          interface _JDWP$VirtualMachine$ClassPaths$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl): PacketStream;
            _process(vm: VirtualMachineImpl): JDWP$VirtualMachine$ClassPaths;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$VirtualMachine$ClassPaths;
            _COMMAND: int;
          }
          let JDWP$VirtualMachine$ClassPaths: _JDWP$VirtualMachine$ClassPaths$$static;
          interface _JDWP$VirtualMachine$ClassPaths {
            _baseDir: string;
            _bootclasspaths: string[];
            _classpaths: string[];
          }
          interface JDWP$VirtualMachine$ClassPaths extends CombineTypes<[_JDWP$VirtualMachine$ClassPaths, java.lang.Object]> {}
          interface _JDWP$VirtualMachine$ClassesBySignature$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, signature: string): PacketStream;
            _process(vm: VirtualMachineImpl, signature: string): JDWP$VirtualMachine$ClassesBySignature;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$VirtualMachine$ClassesBySignature;
            _COMMAND: int;
          }
          let JDWP$VirtualMachine$ClassesBySignature: _JDWP$VirtualMachine$ClassesBySignature$$static;
          interface _JDWP$VirtualMachine$ClassesBySignature {
            _classes: JDWP$VirtualMachine$ClassesBySignature$ClassInfo[];
          }
          interface JDWP$VirtualMachine$ClassesBySignature extends CombineTypes<[_JDWP$VirtualMachine$ClassesBySignature, java.lang.Object]> {}
          interface _JDWP$VirtualMachine$ClassesBySignature$ClassInfo$$static extends ClassLike {
          }
          let JDWP$VirtualMachine$ClassesBySignature$ClassInfo: _JDWP$VirtualMachine$ClassesBySignature$ClassInfo$$static;
          interface _JDWP$VirtualMachine$ClassesBySignature$ClassInfo {
            _refTypeTag: byte;
            _status: int;
            _typeID: long;
          }
          interface JDWP$VirtualMachine$ClassesBySignature$ClassInfo extends CombineTypes<[_JDWP$VirtualMachine$ClassesBySignature$ClassInfo, java.lang.Object]> {}
          interface _JDWP$VirtualMachine$CreateString$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, utf: string): PacketStream;
            _process(vm: VirtualMachineImpl, utf: string): JDWP$VirtualMachine$CreateString;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$VirtualMachine$CreateString;
            _COMMAND: int;
          }
          let JDWP$VirtualMachine$CreateString: _JDWP$VirtualMachine$CreateString$$static;
          interface _JDWP$VirtualMachine$CreateString {
            _stringObject: StringReferenceImpl;
          }
          interface JDWP$VirtualMachine$CreateString extends CombineTypes<[_JDWP$VirtualMachine$CreateString, java.lang.Object]> {}
          interface _JDWP$VirtualMachine$Dispose$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl): PacketStream;
            _process(vm: VirtualMachineImpl): JDWP$VirtualMachine$Dispose;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$VirtualMachine$Dispose;
            _COMMAND: int;
          }
          let JDWP$VirtualMachine$Dispose: _JDWP$VirtualMachine$Dispose$$static;
          interface _JDWP$VirtualMachine$Dispose {
          }
          interface JDWP$VirtualMachine$Dispose extends CombineTypes<[_JDWP$VirtualMachine$Dispose, java.lang.Object]> {}
          interface _JDWP$VirtualMachine$DisposeObjects$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, requests: JDWP$VirtualMachine$DisposeObjects$Request[]): PacketStream;
            _process(vm: VirtualMachineImpl, requests: JDWP$VirtualMachine$DisposeObjects$Request[]): JDWP$VirtualMachine$DisposeObjects;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$VirtualMachine$DisposeObjects;
            _COMMAND: int;
          }
          let JDWP$VirtualMachine$DisposeObjects: _JDWP$VirtualMachine$DisposeObjects$$static;
          interface _JDWP$VirtualMachine$DisposeObjects {
          }
          interface JDWP$VirtualMachine$DisposeObjects extends CombineTypes<[_JDWP$VirtualMachine$DisposeObjects, java.lang.Object]> {}
          interface _JDWP$VirtualMachine$DisposeObjects$Request$$static extends ClassLike {
            _new(object: ObjectReferenceImpl, refCnt: int): JDWP$VirtualMachine$DisposeObjects$Request;
          }
          let JDWP$VirtualMachine$DisposeObjects$Request: _JDWP$VirtualMachine$DisposeObjects$Request$$static;
          interface _JDWP$VirtualMachine$DisposeObjects$Request {
            _write(ps: PacketStream): void;
            _object: ObjectReferenceImpl;
            _refCnt: int;
          }
          interface JDWP$VirtualMachine$DisposeObjects$Request extends CombineTypes<[_JDWP$VirtualMachine$DisposeObjects$Request, java.lang.Object]> {}
          interface _JDWP$VirtualMachine$Exit$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, exitCode: int): PacketStream;
            _process(vm: VirtualMachineImpl, exitCode: int): JDWP$VirtualMachine$Exit;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$VirtualMachine$Exit;
            _COMMAND: int;
          }
          let JDWP$VirtualMachine$Exit: _JDWP$VirtualMachine$Exit$$static;
          interface _JDWP$VirtualMachine$Exit {
          }
          interface JDWP$VirtualMachine$Exit extends CombineTypes<[_JDWP$VirtualMachine$Exit, java.lang.Object]> {}
          interface _JDWP$VirtualMachine$HoldEvents$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl): PacketStream;
            _process(vm: VirtualMachineImpl): JDWP$VirtualMachine$HoldEvents;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$VirtualMachine$HoldEvents;
            _COMMAND: int;
          }
          let JDWP$VirtualMachine$HoldEvents: _JDWP$VirtualMachine$HoldEvents$$static;
          interface _JDWP$VirtualMachine$HoldEvents {
          }
          interface JDWP$VirtualMachine$HoldEvents extends CombineTypes<[_JDWP$VirtualMachine$HoldEvents, java.lang.Object]> {}
          interface _JDWP$VirtualMachine$IDSizes$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl): PacketStream;
            _process(vm: VirtualMachineImpl): JDWP$VirtualMachine$IDSizes;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$VirtualMachine$IDSizes;
            _COMMAND: int;
          }
          let JDWP$VirtualMachine$IDSizes: _JDWP$VirtualMachine$IDSizes$$static;
          interface _JDWP$VirtualMachine$IDSizes {
            _fieldIDSize: int;
            _frameIDSize: int;
            _methodIDSize: int;
            _objectIDSize: int;
            _referenceTypeIDSize: int;
          }
          interface JDWP$VirtualMachine$IDSizes extends CombineTypes<[_JDWP$VirtualMachine$IDSizes, java.lang.Object]> {}
          interface _JDWP$VirtualMachine$InstanceCounts$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, refTypesCount: ReferenceTypeImpl[]): PacketStream;
            _process(vm: VirtualMachineImpl, refTypesCount: ReferenceTypeImpl[]): JDWP$VirtualMachine$InstanceCounts;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$VirtualMachine$InstanceCounts;
            _COMMAND: int;
          }
          let JDWP$VirtualMachine$InstanceCounts: _JDWP$VirtualMachine$InstanceCounts$$static;
          interface _JDWP$VirtualMachine$InstanceCounts {
            _counts: long[];
          }
          interface JDWP$VirtualMachine$InstanceCounts extends CombineTypes<[_JDWP$VirtualMachine$InstanceCounts, java.lang.Object]> {}
          interface _JDWP$VirtualMachine$RedefineClasses$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, classes: JDWP$VirtualMachine$RedefineClasses$ClassDef[]): PacketStream;
            _process(vm: VirtualMachineImpl, classes: JDWP$VirtualMachine$RedefineClasses$ClassDef[]): JDWP$VirtualMachine$RedefineClasses;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$VirtualMachine$RedefineClasses;
            _COMMAND: int;
          }
          let JDWP$VirtualMachine$RedefineClasses: _JDWP$VirtualMachine$RedefineClasses$$static;
          interface _JDWP$VirtualMachine$RedefineClasses {
          }
          interface JDWP$VirtualMachine$RedefineClasses extends CombineTypes<[_JDWP$VirtualMachine$RedefineClasses, java.lang.Object]> {}
          interface _JDWP$VirtualMachine$RedefineClasses$ClassDef$$static extends ClassLike {
            _new(refType: ReferenceTypeImpl, classfile: byte[]): JDWP$VirtualMachine$RedefineClasses$ClassDef;
          }
          let JDWP$VirtualMachine$RedefineClasses$ClassDef: _JDWP$VirtualMachine$RedefineClasses$ClassDef$$static;
          interface _JDWP$VirtualMachine$RedefineClasses$ClassDef {
            _write(ps: PacketStream): void;
            _classfile: byte[];
            _refType: ReferenceTypeImpl;
          }
          interface JDWP$VirtualMachine$RedefineClasses$ClassDef extends CombineTypes<[_JDWP$VirtualMachine$RedefineClasses$ClassDef, java.lang.Object]> {}
          interface _JDWP$VirtualMachine$ReleaseEvents$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl): PacketStream;
            _process(vm: VirtualMachineImpl): JDWP$VirtualMachine$ReleaseEvents;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$VirtualMachine$ReleaseEvents;
            _COMMAND: int;
          }
          let JDWP$VirtualMachine$ReleaseEvents: _JDWP$VirtualMachine$ReleaseEvents$$static;
          interface _JDWP$VirtualMachine$ReleaseEvents {
          }
          interface JDWP$VirtualMachine$ReleaseEvents extends CombineTypes<[_JDWP$VirtualMachine$ReleaseEvents, java.lang.Object]> {}
          interface _JDWP$VirtualMachine$Resume$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl): PacketStream;
            _process(vm: VirtualMachineImpl): JDWP$VirtualMachine$Resume;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$VirtualMachine$Resume;
            _COMMAND: int;
          }
          let JDWP$VirtualMachine$Resume: _JDWP$VirtualMachine$Resume$$static;
          interface _JDWP$VirtualMachine$Resume {
          }
          interface JDWP$VirtualMachine$Resume extends CombineTypes<[_JDWP$VirtualMachine$Resume, java.lang.Object]> {}
          interface _JDWP$VirtualMachine$SetDefaultStratum$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl, stratumID: string): PacketStream;
            _process(vm: VirtualMachineImpl, stratumID: string): JDWP$VirtualMachine$SetDefaultStratum;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$VirtualMachine$SetDefaultStratum;
            _COMMAND: int;
          }
          let JDWP$VirtualMachine$SetDefaultStratum: _JDWP$VirtualMachine$SetDefaultStratum$$static;
          interface _JDWP$VirtualMachine$SetDefaultStratum {
          }
          interface JDWP$VirtualMachine$SetDefaultStratum extends CombineTypes<[_JDWP$VirtualMachine$SetDefaultStratum, java.lang.Object]> {}
          interface _JDWP$VirtualMachine$Suspend$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl): PacketStream;
            _process(vm: VirtualMachineImpl): JDWP$VirtualMachine$Suspend;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$VirtualMachine$Suspend;
            _COMMAND: int;
          }
          let JDWP$VirtualMachine$Suspend: _JDWP$VirtualMachine$Suspend$$static;
          interface _JDWP$VirtualMachine$Suspend {
          }
          interface JDWP$VirtualMachine$Suspend extends CombineTypes<[_JDWP$VirtualMachine$Suspend, java.lang.Object]> {}
          interface _JDWP$VirtualMachine$TopLevelThreadGroups$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl): PacketStream;
            _process(vm: VirtualMachineImpl): JDWP$VirtualMachine$TopLevelThreadGroups;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$VirtualMachine$TopLevelThreadGroups;
            _COMMAND: int;
          }
          let JDWP$VirtualMachine$TopLevelThreadGroups: _JDWP$VirtualMachine$TopLevelThreadGroups$$static;
          interface _JDWP$VirtualMachine$TopLevelThreadGroups {
            _groups: ThreadGroupReferenceImpl[];
          }
          interface JDWP$VirtualMachine$TopLevelThreadGroups extends CombineTypes<[_JDWP$VirtualMachine$TopLevelThreadGroups, java.lang.Object]> {}
          interface _JDWP$VirtualMachine$Version$$static extends ClassLike {
            _enqueueCommand(vm: VirtualMachineImpl): PacketStream;
            _process(vm: VirtualMachineImpl): JDWP$VirtualMachine$Version;
            _waitForReply(vm: VirtualMachineImpl, ps: PacketStream): JDWP$VirtualMachine$Version;
            _COMMAND: int;
          }
          let JDWP$VirtualMachine$Version: _JDWP$VirtualMachine$Version$$static;
          interface _JDWP$VirtualMachine$Version {
            _description: string;
            _jdwpMajor: int;
            _jdwpMinor: int;
            _vmName: string;
            _vmVersion: string;
          }
          interface JDWP$VirtualMachine$Version extends CombineTypes<[_JDWP$VirtualMachine$Version, java.lang.Object]> {}
          interface _JDWPException$$static extends ClassLike {
            _serialVersionUID: long;
            _new(errorCode: short): JDWPException;
          }
          let JDWPException: _JDWPException$$static;
          interface _JDWPException {
            _errorCode(): short;
            _toJDIException(): java.lang.RuntimeException;
            _errorCode: short;
          }
          interface JDWPException extends CombineTypes<[_JDWPException, java.lang.Exception]> {}
          interface _JNITypeParser$$static extends ClassLike {
            _convertSignatureToClassname(classSignature: string): string;
            _typeNameToSignature(typeName: string): string;
            _SIGNATURE_ENDCLASS: char;
            _SIGNATURE_ENDFUNC: char;
            _SIGNATURE_FUNC: char;
            _new(signature: string): JNITypeParser;
          }
          let JNITypeParser: _JNITypeParser$$static;
          interface _JNITypeParser {
            _argumentSignatures(): java.util.List<string>;
            _argumentTypeNames(): java.util.List<string>;
            _componentSignature(level: int): string;
            _componentSignature(): string;
            _dimensionCount(): int;
            _isArray(): boolean;
            _isBoolean(): boolean;
            _isPrimitive(): boolean;
            _isReference(): boolean;
            _isVoid(): boolean;
            _jdwpTag(): byte;
            _nextSignature(): string;
            _nextTypeName(): string;
            _signature(): string;
            _signatureList(): java.util.List<string>;
            _typeName(): string;
            _typeNameList(): java.util.List<string>;
            _currentIndex: int;
            _signature: string;
            _signatureList: java.util.List<string>;
            _typeNameList: java.util.List<string>;
          }
          interface JNITypeParser extends CombineTypes<[_JNITypeParser, java.lang.Object]> {}
          interface _LineInfo$$static extends ClassLike {
          }
          let LineInfo: _LineInfo$$static;
          interface _LineInfo {
            liLineNumber(): int;
            liSourceName(): string;
            liSourcePath(): string;
            liStratum(): string;
          }
          interface LineInfo extends CombineTypes<[_LineInfo, java.lang.Object]> {}
          interface _LocalVariableImpl$$static extends ClassLike {
            _new(vm: sun.jdi.VirtualMachine, method: sun.jdi.Method, slot: int, scopeStart: sun.jdi.Location, scopeEnd: sun.jdi.Location, name: string, signature: string, genericSignature: string): LocalVariableImpl;
          }
          let LocalVariableImpl: _LocalVariableImpl$$static;
          interface _LocalVariableImpl {
            compareTo(object: sun.jdi.LocalVariable): int;
            compareTo(a0: any): int;
            equals(obj: any): boolean;
            findType(signature: string): sun.jdi.Type;
            genericSignature(): string;
            hashCode(): int;
            _hides(other: sun.jdi.LocalVariable): boolean;
            isArgument(): boolean;
            isVisible(frame: sun.jdi.StackFrame): boolean;
            name(): string;
            signature(): string;
            _slot(): int;
            toString(): string;
            type(): sun.jdi.Type;
            typeName(): string;
            virtualMachine(): sun.jdi.VirtualMachine;
            _genericSignature: string;
            _method: sun.jdi.Method;
            _name: string;
            _scopeEnd: sun.jdi.Location;
            _scopeStart: sun.jdi.Location;
            _signature: string;
            _slot: int;
          }
          interface LocalVariableImpl extends CombineTypes<[_LocalVariableImpl, com.sun.tools.jdi.ValueContainer, com.sun.tools.jdi.MirrorImpl, com.sun.jdi.LocalVariable]> {}
          interface _LocationImpl$$static extends ClassLike {
            _new(vm: sun.jdi.VirtualMachine, method: sun.jdi.Method, codeIndex: long): LocationImpl;
            _new(vm: sun.jdi.VirtualMachine, declaringType: ReferenceTypeImpl, methodRef: long, a3: long): LocationImpl;
          }
          let LocationImpl: _LocationImpl$$static;
          interface _LocationImpl {
            _addBaseLineInfo(lineInfo: LineInfo): void;
            _addStratumLineInfo(lineInfo: LineInfo): void;
            codeIndex(): long;
            compareTo(other: sun.jdi.Location): int;
            compareTo(a0: any): int;
            declaringType(): sun.jdi.ReferenceType;
            equals(obj: any): boolean;
            _getBaseLineInfo(stratum: SDE$Stratum): LineInfo;
            _getLineInfo(stratum: SDE$Stratum): LineInfo;
            hashCode(): int;
            lineNumber(): int;
            lineNumber(stratumID: string): int;
            _lineNumber(stratum: SDE$Stratum): int;
            method(): sun.jdi.Method;
            sourceName(): string;
            sourceName(stratumID: string): string;
            _sourceName(stratum: SDE$Stratum): string;
            sourcePath(): string;
            sourcePath(stratumID: string): string;
            _sourcePath(stratum: SDE$Stratum): string;
            toString(): string;
            virtualMachine(): sun.jdi.VirtualMachine;
            _baseLineInfo: LineInfo;
            _codeIndex: long;
            _declaringType: ReferenceTypeImpl;
            _method: sun.jdi.Method;
            _methodRef: long;
            _otherLineInfo: LineInfo;
          }
          interface LocationImpl extends CombineTypes<[_LocationImpl, com.sun.tools.jdi.MirrorImpl, com.sun.jdi.Location]> {}
          interface _LockObject$$static extends ClassLike {
            new(): LockObject;
          }
          let LockObject: _LockObject$$static;
          interface _LockObject {
          }
          interface LockObject extends CombineTypes<[_LockObject, java.lang.Object]> {}
          interface _LongTypeImpl$$static extends ClassLike {
            _new(vm: sun.jdi.VirtualMachine): LongTypeImpl;
          }
          let LongTypeImpl: _LongTypeImpl$$static;
          interface _LongTypeImpl {
            _convert(value: sun.jdi.PrimitiveValue): sun.jdi.PrimitiveValue;
            signature(): string;
            toString(): string;
          }
          interface LongTypeImpl extends CombineTypes<[_LongTypeImpl, com.sun.jdi.LongType, com.sun.tools.jdi.PrimitiveTypeImpl]> {}
          interface _LongValueImpl$$static extends ClassLike {
            _new(aVm: sun.jdi.VirtualMachine, aValue: long): LongValueImpl;
          }
          let LongValueImpl: _LongValueImpl$$static;
          interface _LongValueImpl {
            booleanValue(): boolean;
            byteValue(): byte;
            charValue(): char;
            _checkedByteValue(): byte;
            _checkedCharValue(): char;
            _checkedIntValue(): int;
            _checkedShortValue(): short;
            compareTo(obj: sun.jdi.LongValue): int;
            compareTo(a0: any): int;
            doubleValue(): double;
            equals(obj: any): boolean;
            floatValue(): float;
            hashCode(): int;
            intValue(): int;
            longValue(): long;
            shortValue(): short;
            toString(): string;
            type(): sun.jdi.Type;
            _typeValueKey(): byte;
            value(): long;
            _value: long;
          }
          interface LongValueImpl extends CombineTypes<[_LongValueImpl, com.sun.jdi.LongValue, com.sun.tools.jdi.PrimitiveValueImpl]> {}
          interface _MethodImpl$$static extends ClassLike {
            _createMethodImpl(vm: sun.jdi.VirtualMachine, declaringType: ReferenceTypeImpl, ref: long, a3: string, name: string, signature: string, genericSignature: int): MethodImpl;
            _new(vm: sun.jdi.VirtualMachine, declaringType: ReferenceTypeImpl, ref: long, a3: string, name: string, signature: string, genericSignature: int): MethodImpl;
          }
          let MethodImpl: _MethodImpl$$static;
          interface _MethodImpl {
            _allLineLocations(a0: SDE$Stratum, a1: string): java.util.List<sun.jdi.Location>;
            allLineLocations(): java.util.List<sun.jdi.Location>;
            allLineLocations(stratumID: string, sourceName: string): java.util.List<sun.jdi.Location>;
            _argSlotCount(): int;
            argumentSignatures(): java.util.List<string>;
            _argumentType(index: int): sun.jdi.Type;
            argumentTypeNames(): java.util.List<string>;
            argumentTypes(): java.util.List<sun.jdi.Type>;
            _codeIndexToLineInfo(stratum: SDE$Stratum, codeIndex: long): LineInfo;
            compareTo(method: sun.jdi.Method): int;
            compareTo(a0: any): int;
            equals(obj: any): boolean;
            findType(signature: string): sun.jdi.Type;
            _getReturnValueContainer(): MethodImpl$ReturnContainer;
            _handleVarArgs(arguments: java.util.List<sun.jdi.Value>): void;
            hashCode(): int;
            isAbstract(): boolean;
            isBridge(): boolean;
            isConstructor(): boolean;
            isDefault(): boolean;
            isNative(): boolean;
            isObsolete(): boolean;
            isStaticInitializer(): boolean;
            isSynchronized(): boolean;
            isVarArgs(): boolean;
            _locationsOfLine(a0: SDE$Stratum, a1: string, a2: int): java.util.List<sun.jdi.Location>;
            locationsOfLine(lineNumber: int): java.util.List<sun.jdi.Location>;
            locationsOfLine(stratumID: string, sourceName: string, lineNumber: int): java.util.List<sun.jdi.Location>;
            _returnSignature(): string;
            returnType(): sun.jdi.Type;
            returnTypeName(): string;
            toString(): string;
            _validateAndPrepareArgumentsForInvoke(origArguments: java.util.List<sun.jdi.Value>): java.util.List<sun.jdi.Value>;
            _retValContainer: MethodImpl$ReturnContainer;
            _signatureParser: JNITypeParser;
          }
          interface MethodImpl extends CombineTypes<[_MethodImpl, com.sun.tools.jdi.TypeComponentImpl, com.sun.jdi.Method]> {}
          interface _MethodImpl$ArgumentContainer$$static extends ClassLike {
            _new(this$0: MethodImpl, index: int): MethodImpl$ArgumentContainer;
          }
          let MethodImpl$ArgumentContainer: _MethodImpl$ArgumentContainer$$static;
          interface _MethodImpl$ArgumentContainer {
            findType(signature: string): sun.jdi.Type;
            signature(): string;
            type(): sun.jdi.Type;
            typeName(): string;
            _index: int;
            _this$0: MethodImpl;
          }
          interface MethodImpl$ArgumentContainer extends CombineTypes<[_MethodImpl$ArgumentContainer, com.sun.tools.jdi.ValueContainer, java.lang.Object]> {}
          interface _MethodImpl$ReturnContainer$$static extends ClassLike {
            _new(this$0: MethodImpl): MethodImpl$ReturnContainer;
          }
          let MethodImpl$ReturnContainer: _MethodImpl$ReturnContainer$$static;
          interface _MethodImpl$ReturnContainer {
            findType(signature: string): sun.jdi.Type;
            signature(): string;
            type(): sun.jdi.Type;
            typeName(): string;
            _this$0: MethodImpl;
          }
          interface MethodImpl$ReturnContainer extends CombineTypes<[_MethodImpl$ReturnContainer, com.sun.tools.jdi.ValueContainer, java.lang.Object]> {}
          interface _MirrorImpl$$static extends ClassLike {
            _new(aVm: sun.jdi.VirtualMachine): MirrorImpl;
          }
          let MirrorImpl: _MirrorImpl$$static;
          interface _MirrorImpl {
            equals(obj: any): boolean;
            hashCode(): int;
            _validateMirror(mirror: sun.jdi.Mirror): void;
            _validateMirrorOrNull(mirror: sun.jdi.Mirror): void;
            _validateMirrors(mirrors: java.util.Collection<sun.jdi.Mirror>): void;
            _validateMirrorsOrNulls(mirrors: java.util.Collection<sun.jdi.Mirror>): void;
            virtualMachine(): sun.jdi.VirtualMachine;
            _vm: VirtualMachineImpl;
          }
          interface MirrorImpl extends CombineTypes<[_MirrorImpl, com.sun.jdi.Mirror, java.lang.Object]> {}
          interface _ModuleReferenceImpl$$static extends ClassLike {
            _new(aVm: sun.jdi.VirtualMachine, aRef: long): ModuleReferenceImpl;
          }
          let ModuleReferenceImpl: _ModuleReferenceImpl$$static;
          interface _ModuleReferenceImpl {
            classLoader(): sun.jdi.ClassLoaderReference;
            _description(): string;
            name(): string;
            _cachedClassLoader: boolean;
            _cachedName: boolean;
            _classLoader: sun.jdi.ClassLoaderReference;
            _name: string;
          }
          interface ModuleReferenceImpl extends CombineTypes<[_ModuleReferenceImpl, com.sun.tools.jdi.ObjectReferenceImpl, com.sun.jdi.ModuleReference]> {}
          interface _MonitorInfoImpl$$static extends ClassLike {
            _new(vm: sun.jdi.VirtualMachine, mon: sun.jdi.ObjectReference, thread: ThreadReferenceImpl, dpth: int): MonitorInfoImpl;
          }
          let MonitorInfoImpl: _MonitorInfoImpl$$static;
          interface _MonitorInfoImpl {
            equals(a0: any): boolean;
            hashCode(): int;
            monitor(): sun.jdi.ObjectReference;
            stackDepth(): int;
            thread(): sun.jdi.ThreadReference;
            threadResumable(action: ThreadAction): boolean;
            _validateMonitorInfo(): void;
            virtualMachine(): sun.jdi.VirtualMachine;
            _isValid: boolean;
            _monitor: sun.jdi.ObjectReference;
            _stack_depth: int;
            _thread: sun.jdi.ThreadReference;
          }
          interface MonitorInfoImpl extends CombineTypes<[_MonitorInfoImpl, com.sun.jdi.MonitorInfo, com.sun.tools.jdi.MirrorImpl, com.sun.tools.jdi.ThreadListener]> {}
          interface _NonConcreteMethodImpl$$static extends ClassLike {
            _new(vm: sun.jdi.VirtualMachine, declaringType: ReferenceTypeImpl, ref: long, a3: string, name: string, signature: string, genericSignature: int): NonConcreteMethodImpl;
          }
          let NonConcreteMethodImpl: _NonConcreteMethodImpl$$static;
          interface _NonConcreteMethodImpl {
            allLineLocations(stratumID: string, sourceName: string): java.util.List<sun.jdi.Location>;
            allLineLocations(stratum: SDE$Stratum, sourceName: string): java.util.List<sun.jdi.Location>;
            _argSlotCount(): int;
            arguments(): java.util.List<sun.jdi.LocalVariable>;
            bytecodes(): byte[];
            location(): sun.jdi.Location;
            locationOfCodeIndex(codeIndex: long): sun.jdi.Location;
            locationsOfLine(stratumID: string, sourceName: string, lineNumber: int): java.util.List<sun.jdi.Location>;
            locationsOfLine(stratum: SDE$Stratum, sourceName: string, lineNumber: int): java.util.List<sun.jdi.Location>;
            variables(): java.util.List<sun.jdi.LocalVariable>;
            variablesByName(name: string): java.util.List<sun.jdi.LocalVariable>;
            _location: sun.jdi.Location;
          }
          interface NonConcreteMethodImpl extends CombineTypes<[_NonConcreteMethodImpl, com.sun.tools.jdi.MethodImpl]> {}
          interface _ObjectReferenceImpl$$static extends ClassLike {
            _isNonVirtual(options: int): boolean;
            _markerCache: ObjectReferenceImpl$Cache;
            _noInitCache: ObjectReferenceImpl$Cache;
            _new(aVm: sun.jdi.VirtualMachine, aRef: long): ObjectReferenceImpl;
          }
          let ObjectReferenceImpl: _ObjectReferenceImpl$$static;
          interface _ObjectReferenceImpl {
            _description(): string;
            _disableCache(): void;
            disableCollection(): void;
            _enableCache(): void;
            enableCollection(): void;
            entryCount(): int;
            equals(obj: any): boolean;
            _getCache(): ObjectReferenceImpl$Cache;
            getValue(sig: sun.jdi.Field): sun.jdi.Value;
            getValues(theFields: java.util.List<sun.jdi.Field>): java.util.Map<sun.jdi.Field,sun.jdi.Value>;
            hashCode(): int;
            _invokableReferenceType(method: sun.jdi.Method): ClassTypeImpl;
            invokeMethod(threadIntf: sun.jdi.ThreadReference, methodIntf: sun.jdi.Method, origArguments: java.util.List<sun.jdi.Value>, options: int): sun.jdi.Value;
            _isClassObject(): boolean;
            isCollected(): boolean;
            _jdwpMonitorInfo(): JDWP$ObjectReference$MonitorInfo;
            _newCache(): ObjectReferenceImpl$Cache;
            owningThread(): sun.jdi.ThreadReference;
            _prepareForAssignmentTo(destination: ValueContainer): ValueImpl;
            _ref(): long;
            referenceType(): sun.jdi.ReferenceType;
            referringObjects(maxReferrers: long): java.util.List<sun.jdi.ObjectReference>;
            _sendInvokeCommand(thread: ThreadReferenceImpl, refType: ClassTypeImpl, method: MethodImpl, args: ValueImpl[], options: int): PacketStream;
            setValue(field: sun.jdi.Field, value: sun.jdi.Value): void;
            toString(): string;
            type(): sun.jdi.Type;
            _typeValueKey(): byte;
            uniqueID(): long;
            _validateAssignment(destination: ValueContainer): void;
            _validateClassMethodInvocation(method: sun.jdi.Method, options: int): void;
            _validateIfaceMethodInvocation(method: sun.jdi.Method, options: int): void;
            _validateMethodInvocation(method: sun.jdi.Method, options: int): void;
            virtualMachine(): sun.jdi.VirtualMachine;
            vmNotSuspended(action: VMAction): boolean;
            vmSuspended(action: VMAction): boolean;
            waitingThreads(): java.util.List<sun.jdi.ThreadReference>;
            _addedListener: boolean;
            _cache: ObjectReferenceImpl$Cache;
            _gcDisableCount: int;
            _ref: long;
            _type: sun.jdi.ReferenceType;
          }
          interface ObjectReferenceImpl extends CombineTypes<[_ObjectReferenceImpl, com.sun.tools.jdi.ValueImpl, com.sun.tools.jdi.VMListener, com.sun.jdi.ObjectReference]> {}
          interface _ObjectReferenceImpl$Cache$$static extends ClassLike {
            _new(): ObjectReferenceImpl$Cache;
          }
          let ObjectReferenceImpl$Cache: _ObjectReferenceImpl$Cache$$static;
          interface _ObjectReferenceImpl$Cache {
            _monitorInfo: JDWP$ObjectReference$MonitorInfo;
          }
          interface ObjectReferenceImpl$Cache extends CombineTypes<[_ObjectReferenceImpl$Cache, java.lang.Object]> {}
          interface _ObsoleteMethodImpl$$static extends ClassLike {
            _new(vm: sun.jdi.VirtualMachine, declaringType: ReferenceTypeImpl): ObsoleteMethodImpl;
          }
          let ObsoleteMethodImpl: _ObsoleteMethodImpl$$static;
          interface _ObsoleteMethodImpl {
            argumentSignatures(): java.util.List<string>;
            _argumentType(index: int): sun.jdi.Type;
            argumentTypeNames(): java.util.List<string>;
            argumentTypes(): java.util.List<sun.jdi.Type>;
            isObsolete(): boolean;
            returnType(): sun.jdi.Type;
            returnTypeName(): string;
          }
          interface ObsoleteMethodImpl extends CombineTypes<[_ObsoleteMethodImpl, com.sun.tools.jdi.NonConcreteMethodImpl]> {}
          interface _Packet$$static extends ClassLike {
            fromByteArray(b: byte[]): Packet;
            _uniqID(): int;
            readonly NoFlags: short;
            readonly Reply: short;
            readonly ReplyNoError: short;
            _nullData: byte[];
            _uID: int;
            _new(): Packet;
          }
          let Packet: _Packet$$static;
          interface _Packet {
            toByteArray(): byte[];
            _cmd: short;
            _cmdSet: short;
            _data: byte[];
            _errorCode: short;
            _flags: short;
            _id: int;
            _replied: boolean;
          }
          interface Packet extends CombineTypes<[_Packet, java.lang.Object]> {}
          interface _PacketStream$$static extends ClassLike {
            _isObjectTag(tag: byte): boolean;
            _new(vm: VirtualMachineImpl, cmdSet: int, cmd: int): PacketStream;
            _new(vm: VirtualMachineImpl, pkt: Packet): PacketStream;
          }
          let PacketStream: _PacketStream$$static;
          interface _PacketStream {
            _command(): byte;
            _id(): int;
            _readArrayReference(): ArrayReferenceImpl;
            _readArrayRegion(): java.util.List<sun.jdi.Value>;
            _readBoolean(): boolean;
            _readByte(): byte;
            _readByteArray(length: int): byte[];
            _readChar(): char;
            _readClassLoaderReference(): ClassLoaderReferenceImpl;
            _readClassObjectReference(): ClassObjectReferenceImpl;
            _readClassRef(): long;
            _readDouble(): double;
            _readField(): sun.jdi.Field;
            _readFieldRef(): long;
            _readFloat(): float;
            _readFrameRef(): long;
            _readID(size: int): long;
            _readInt(): int;
            _readLocation(): sun.jdi.Location;
            _readLong(): long;
            _readMethodRef(): long;
            _readModule(): ModuleReferenceImpl;
            _readModuleRef(): long;
            _readObjectRef(): long;
            _readObjectReference(): ObjectReferenceImpl;
            _readReferenceType(): ReferenceTypeImpl;
            _readShort(): short;
            _readString(): string;
            _readStringReference(): StringReferenceImpl;
            _readTaggedObjectReference(): ObjectReferenceImpl;
            _readThreadGroupReference(): ThreadGroupReferenceImpl;
            _readThreadReference(): ThreadReferenceImpl;
            _readUntaggedValue(typeKey: byte): ValueImpl;
            _readValue(): ValueImpl;
            _send(): void;
            _skipBytes(n: int): int;
            _waitForReply(): void;
            _writeArrayRegion(srcValues: java.util.List<sun.jdi.Value>): void;
            _writeBoolean(data: boolean): void;
            _writeByte(data: byte): void;
            _writeByteArray(data: byte[]): void;
            _writeChar(data: char): void;
            _writeClassRef(data: long): void;
            _writeDouble(data: double): void;
            _writeFieldRef(data: long): void;
            _writeFloat(data: float): void;
            _writeFrameRef(data: long): void;
            _writeID(size: int, data: long): void;
            _writeInt(data: int): void;
            _writeLocation(location: sun.jdi.Location): void;
            _writeLong(data: long): void;
            _writeMethodRef(data: long): void;
            _writeModuleRef(data: long): void;
            _writeNullObjectRef(): void;
            _writeObjectRef(data: long): void;
            _writeShort(data: short): void;
            _writeString(string: string): void;
            _writeUntaggedValue(val: sun.jdi.Value): void;
            _writeUntaggedValueChecked(val: sun.jdi.Value): void;
            _writeValue(val: sun.jdi.Value): void;
            _writeValueChecked(val: sun.jdi.Value): void;
            _dataStream: java.io.ByteArrayOutputStream;
            _inCursor: int;
            _isCommitted: boolean;
            _pkt: Packet;
            _vm: VirtualMachineImpl;
          }
          interface PacketStream extends CombineTypes<[_PacketStream, java.lang.Object]> {}
          interface _PrimitiveTypeImpl$$static extends ClassLike {
            _new(vm: sun.jdi.VirtualMachine): PrimitiveTypeImpl;
          }
          let PrimitiveTypeImpl: _PrimitiveTypeImpl$$static;
          interface _PrimitiveTypeImpl {
            _convert(a0: sun.jdi.PrimitiveValue): sun.jdi.PrimitiveValue;
(a0: sun.jdi.PrimitiveValue): sun.jdi.PrimitiveValue;
            toString(): string;
          }
          interface PrimitiveTypeImpl extends CombineTypes<[_PrimitiveTypeImpl, com.sun.jdi.PrimitiveType, com.sun.tools.jdi.TypeImpl]> {}
          interface _PrimitiveValueImpl$$static extends ClassLike {
            _new(aVm: sun.jdi.VirtualMachine): PrimitiveValueImpl;
          }
          let PrimitiveValueImpl: _PrimitiveValueImpl$$static;
          interface _PrimitiveValueImpl {
            booleanValue(): boolean;
            byteValue(): byte;
            charValue(): char;
            _checkedBooleanValue(): boolean;
            _checkedByteValue(): byte;
            _checkedCharValue(): char;
            _checkedDoubleValue(): double;
            _checkedFloatValue(): float;
            _checkedIntValue(): int;
            _checkedLongValue(): long;
            _checkedShortValue(): short;
            _convertForAssignmentTo(destination: ValueContainer): ValueImpl;
            doubleValue(): double;
            equals(a0: any): boolean;
            floatValue(): float;
            hashCode(): int;
            intValue(): int;
            longValue(): long;
            _prepareForAssignmentTo(destination: ValueContainer): ValueImpl;
            shortValue(): short;
            virtualMachine(): sun.jdi.VirtualMachine;
          }
          interface PrimitiveValueImpl extends CombineTypes<[_PrimitiveValueImpl, com.sun.tools.jdi.ValueImpl, com.sun.jdi.PrimitiveValue]> {}
          interface _ProcessAttachingConnector$$static extends ClassLike {
            _ARG_PID: string;
            _ARG_TIMEOUT: string;
            new(): ProcessAttachingConnector;
          }
          let ProcessAttachingConnector: _ProcessAttachingConnector$$static;
          interface _ProcessAttachingConnector {
            attach(args: java.util.Map<string,sun.jdi.connect.Connector$Argument>): sun.jdi.VirtualMachine;
            defaultArguments(): java.util.Map;
            description(): string;
            name(): string;
            toString(): string;
            transport(): sun.jdi.connect.Transport;
            _transport: sun.jdi.connect.Transport;
            _vm: tools.attach.VirtualMachine;
          }
          interface ProcessAttachingConnector extends CombineTypes<[_ProcessAttachingConnector, com.sun.jdi.connect.AttachingConnector, com.sun.tools.jdi.ConnectorImpl]> {}
          interface _RawCommandLineLauncher$$static extends ClassLike {
            _ARG_ADDRESS: string;
            _ARG_COMMAND: string;
            _ARG_QUOTE: string;
            new(): RawCommandLineLauncher;
          }
          let RawCommandLineLauncher: _RawCommandLineLauncher$$static;
          interface _RawCommandLineLauncher {
            defaultArguments(): java.util.Map;
            description(): string;
            launch(arguments: java.util.Map<string,sun.jdi.connect.Connector$Argument>): sun.jdi.VirtualMachine;
            name(): string;
            toString(): string;
            transport(): sun.jdi.connect.Transport;
            transportService(): sun.jdi.connect.spi.TransportService;
            _transport: sun.jdi.connect.Transport;
            _transportService: sun.jdi.connect.spi.TransportService;
          }
          interface RawCommandLineLauncher extends CombineTypes<[_RawCommandLineLauncher, com.sun.tools.jdi.AbstractLauncher]> {}
          interface _ReferenceTypeImpl$$static extends ClassLike {
            _isOneDimensionalPrimitiveArray(signature: string): boolean;
            _ABSENT_BASE_SOURCE_NAME: string;
            _INITIALIZED_OR_FAILED: int;
            _NO_SDE_INFO_MARK: SDE;
            _new(aVm: sun.jdi.VirtualMachine, aRef: long): ReferenceTypeImpl;
          }
          let ReferenceTypeImpl: _ReferenceTypeImpl$$static;
          interface _ReferenceTypeImpl {
            _addAllFields(fieldList: java.util.List<sun.jdi.Field>, typeSet: java.util.Set<sun.jdi.ReferenceType>): void;
            _addToMethodMap(methodMap: java.util.Map<string,sun.jdi.Method>, methodList: java.util.List<sun.jdi.Method>): void;
            _addVisibleFields(visibleList: java.util.List<sun.jdi.Field>, visibleTable: java.util.Map<string,sun.jdi.Field>, ambiguousNames: java.util.List<string>): void;
            _addVisibleMethods(a0: java.util.Map<string,sun.jdi.Method>, a1: java.util.Set<sun.jdi.InterfaceType>): void;
            allFields(): java.util.List<sun.jdi.Field>;
            allLineLocations(): java.util.List<sun.jdi.Location>;
            allLineLocations(stratumID: string, sourceName: string): java.util.List<sun.jdi.Location>;
            allMethods(): java.util.List<sun.jdi.Method>;
            availableStrata(): java.util.List<string>;
            _baseSourceDir(): string;
            _baseSourceName(): string;
            _baseSourcePath(): string;
            classLoader(): sun.jdi.ClassLoaderReference;
            classObject(): sun.jdi.ClassObjectReference;
            compareTo(object: sun.jdi.ReferenceType): int;
            compareTo(a0: any): int;
            constantPool(): byte[];
            constantPoolCount(): int;
            _decodeStatus(status: int): void;
            defaultStratum(): string;
            equals(obj: any): boolean;
            failedToInitialize(): boolean;
            fieldByName(fieldName: string): sun.jdi.Field;
            fields(): java.util.List<sun.jdi.Field>;
            _findType(signature: string): sun.jdi.Type;
            genericSignature(): string;
            _getClassFileVersion(): void;
            _getConstantPoolInfo(): byte[];
            _getFieldMirror(ref: long): sun.jdi.Field;
            _getInterfaces(): java.util.List<sun.jdi.InterfaceType>;
            _getMethodMirror(ref: long): sun.jdi.Method;
            _getModifiers(): void;
            getValue(sig: sun.jdi.Field): sun.jdi.Value;
            getValues(theFields: java.util.List<sun.jdi.Field>): java.util.Map<sun.jdi.Field,sun.jdi.Value>;
            hashCode(): int;
            _indexOf(method: sun.jdi.Method): int;
            _indexOf(field: sun.jdi.Field): int;
            _inheritedTypes(): java.util.List<sun.jdi.ReferenceType>;
            instances(maxInstances: long): java.util.List<sun.jdi.ObjectReference>;
            isAbstract(): boolean;
            _isAssignableFrom(type: sun.jdi.ReferenceType): boolean;
            _isAssignableFrom(object: sun.jdi.ObjectReference): boolean;
            _isAssignableTo(a0: sun.jdi.ReferenceType): boolean;
            isFinal(): boolean;
            isInitialized(): boolean;
            isPackagePrivate(): boolean;
            isPrepared(): boolean;
            isPrivate(): boolean;
            isProtected(): boolean;
            isPublic(): boolean;
            isStatic(): boolean;
            isVerified(): boolean;
            _loaderString(): string;
            locationsOfLine(lineNumber: int): java.util.List<sun.jdi.Location>;
            locationsOfLine(stratumID: string, sourceName: string, lineNumber: int): java.util.List<sun.jdi.Location>;
            majorVersion(): int;
            _markPrepared(): void;
            methods(): java.util.List<sun.jdi.Method>;
            _methods1_4(): java.util.List<sun.jdi.Method>;
            methodsByName(name: string): java.util.List<sun.jdi.Method>;
            methodsByName(name: string, signature: string): java.util.List<sun.jdi.Method>;
            minorVersion(): int;
            modifiers(): int;
            module(): sun.jdi.ModuleReference;
            nestedTypes(): java.util.List<sun.jdi.ReferenceType>;
            _noticeRedefineClass(): void;
            _ref(): long;
            _setGenericSignature(signature: string): void;
            _setSignature(signature: string): void;
            _setStatus(status: int): void;
            signature(): string;
            sourceDebugExtension(): string;
            _sourceDebugExtensionInfo(): SDE;
            sourceName(): string;
            sourceNames(stratumID: string): java.util.List<string>;
            sourcePaths(stratumID: string): java.util.List<string>;
            _stratum(stratumID: string): SDE$Stratum;
            _updateStatus(): void;
            _validateFieldAccess(field: sun.jdi.Field): void;
            _validateFieldSet(field: sun.jdi.Field): void;
            visibleFields(): java.util.List<sun.jdi.Field>;
            visibleMethods(): java.util.List<sun.jdi.Method>;
            _baseSourceDir: string;
            _baseSourceName: string;
            _baseSourcePath: string;
            _classLoader: sun.jdi.ClassLoaderReference;
            _classObject: sun.jdi.ClassObjectReference;
            _constanPoolCount: int;
            _constantPoolBytesRef: java.lang.ref.SoftReference<byte[]>;
            _constantPoolInfoGotten: boolean;
            _fieldsRef: java.lang.ref.SoftReference<java.util.List<sun.jdi.Field>>;
            _genericSignature: string;
            _genericSignatureGotten: boolean;
            _isClassLoaderCached: boolean;
            _isPrepared: boolean;
            _majorVersion: int;
            _methodsRef: java.lang.ref.SoftReference<java.util.List<sun.jdi.Method>>;
            _minorVersion: int;
            _modifiers: int;
            _module: sun.jdi.ModuleReference;
            _ref: long;
            _sdeRef: java.lang.ref.SoftReference<SDE>;
            _signature: string;
            _status: int;
            _versionNumberGotten: boolean;
          }
          interface ReferenceTypeImpl extends CombineTypes<[_ReferenceTypeImpl, com.sun.jdi.ReferenceType, com.sun.tools.jdi.TypeImpl]> {}
          interface _SDE$$static extends ClassLike {
            _BASE_STRATUM_NAME: string;
            _INIT_SIZE_FILE: int;
            _INIT_SIZE_LINE: int;
            _INIT_SIZE_STRATUM: int;
            _NullString: string;
            _new(sourceDebugExtension: string): SDE;
            _new(): SDE;
          }
          let SDE: _SDE$$static;
          interface _SDE {
            _assureFileTableSize(): void;
            _assureLineTableSize(): void;
            _assureStratumTableSize(): void;
            _availableStrata(): java.util.List<string>;
            _createJavaStratum(): void;
            _createProxyForAbsentSDE(): void;
            _decode(): void;
            _defaultStratumTableIndex(): int;
            _fileLine(): void;
            _fileSection(): void;
            _fileTableIndex(sti: int, fileId: int): int;
            _ignoreLine(): void;
            _ignoreSection(): void;
            _ignoreWhite(): void;
            _isValid(): boolean;
            _lineLine(): void;
            _lineSection(): void;
            _readLine(): string;
            _readNumber(): int;
            _sdeAdvance(): void;
            _sdePeek(): char;
            _sdeRead(): char;
            _stiFileTableIndex(sti: int, lti: int): int;
            _stiLineNumber(sti: int, lti: int, jplsLine: int): int;
            _stiLineTableIndex(sti: int, jplsLine: int): int;
            _storeFile(fileId: int, sourceName: string, sourcePath: string): void;
            _storeLine(jplsStart: int, jplsEnd: int, jplsLineInc: int, njplsStart: int, njplsEnd: int, fileId: int): void;
            _storeStratum(stratumId: string): void;
            _stratum(stratumID: string): SDE$Stratum;
            _stratumSection(): void;
            _stratumTableIndex(stratumId: string): int;
            _syntax(): void;
            _syntax(msg: string): void;
            _baseStratumIndex: int;
            _currentFileId: int;
            _defaultStratumId: string;
            _defaultStratumIndex: int;
            _fileIndex: int;
            _fileTable: SDE$FileTableRecord[];
            _isValid: boolean;
            _jplsFilename: string;
            _lineIndex: int;
            _lineTable: SDE$LineTableRecord[];
            _sdePos: int;
            _sourceDebugExtension: string;
            _stratumIndex: int;
            _stratumTable: SDE$StratumTableRecord[];
          }
          interface SDE extends CombineTypes<[_SDE, java.lang.Object]> {}
          interface _SDE$FileTableRecord$$static extends ClassLike {
          }
          let SDE$FileTableRecord: _SDE$FileTableRecord$$static;
          interface _SDE$FileTableRecord {
            _getSourcePath(refType: ReferenceTypeImpl): string;
            _fileId: int;
            _isConverted: boolean;
            _sourceName: string;
            _sourcePath: string;
          }
          interface SDE$FileTableRecord extends CombineTypes<[_SDE$FileTableRecord, java.lang.Object]> {}
          interface _SDE$LineStratum$$static extends ClassLike {
          }
          let SDE$LineStratum: _SDE$LineStratum$$static;
          interface _SDE$LineStratum {
            equals(obj: any): boolean;
            _getSourceInfo(): void;
            hashCode(): int;
            _lineNumber(): int;
            _sourceName(): string;
            _sourcePath(): string;
            _jplsLine: int;
            _lti: int;
            _refType: ReferenceTypeImpl;
            _sourceName: string;
            _sourcePath: string;
            _sti: int;
            _this$0: SDE;
          }
          interface SDE$LineStratum extends CombineTypes<[_SDE$LineStratum, java.lang.Object]> {}
          interface _SDE$LineTableRecord$$static extends ClassLike {
          }
          let SDE$LineTableRecord: _SDE$LineTableRecord$$static;
          interface _SDE$LineTableRecord {
            _fileId: int;
            _jplsEnd: int;
            _jplsLineInc: int;
            _jplsStart: int;
            _njplsEnd: int;
            _njplsStart: int;
          }
          interface SDE$LineTableRecord extends CombineTypes<[_SDE$LineTableRecord, java.lang.Object]> {}
          interface _SDE$Stratum$$static extends ClassLike {
          }
          let SDE$Stratum: _SDE$Stratum$$static;
          interface _SDE$Stratum {
            _id(): string;
            _isJava(): boolean;
            _lineStratum(refType: ReferenceTypeImpl, jplsLine: int): SDE$LineStratum;
            _sourceNames(refType: ReferenceTypeImpl): java.util.List<string>;
            _sourcePaths(refType: ReferenceTypeImpl): java.util.List<string>;
            _sti: int;
            _this$0: SDE;
          }
          interface SDE$Stratum extends CombineTypes<[_SDE$Stratum, java.lang.Object]> {}
          interface _SDE$StratumTableRecord$$static extends ClassLike {
          }
          let SDE$StratumTableRecord: _SDE$StratumTableRecord$$static;
          interface _SDE$StratumTableRecord {
            _fileIndex: int;
            _id: string;
            _lineIndex: int;
          }
          interface SDE$StratumTableRecord extends CombineTypes<[_SDE$StratumTableRecord, java.lang.Object]> {}
          interface _SharedMemoryAttachingConnector$$static extends ClassLike {
            _ARG_NAME: string;
            new(): SharedMemoryAttachingConnector;
          }
          let SharedMemoryAttachingConnector: _SharedMemoryAttachingConnector$$static;
          interface _SharedMemoryAttachingConnector {
            attach(arguments: java.util.Map<string,sun.jdi.connect.Connector$Argument>): sun.jdi.VirtualMachine;
            description(): string;
            name(): string;
          }
          interface SharedMemoryAttachingConnector extends CombineTypes<[_SharedMemoryAttachingConnector, com.sun.tools.jdi.GenericAttachingConnector]> {}
          interface _SharedMemoryConnection$$static extends ClassLike {
            _new(id: long): SharedMemoryConnection;
          }
          let SharedMemoryConnection: _SharedMemoryConnection$$static;
          interface _SharedMemoryConnection {
            close(): void;
            _close0(a0: long): void;
            _handshake(handshakeTimeout: long): void;
            isOpen(): boolean;
            readPacket(): byte[];
            _receiveByte0(a0: long): byte;
            _receivePacket0(a0: long): byte[];
            _sendByte0(a0: long, a1: byte): void;
            _sendPacket0(a0: long, a1: byte[]): void;
            writePacket(b: byte[]): void;
            _closeLock: any;
            _closed: boolean;
            _id: long;
            _receiveLock: any;
            _sendLock: any;
          }
          interface SharedMemoryConnection extends CombineTypes<[_SharedMemoryConnection, com.sun.jdi.connect.spi.Connection]> {}
          interface _SharedMemoryListeningConnector$$static extends ClassLike {
            _ARG_NAME: string;
            new(): SharedMemoryListeningConnector;
          }
          let SharedMemoryListeningConnector: _SharedMemoryListeningConnector$$static;
          interface _SharedMemoryListeningConnector {
            description(): string;
            name(): string;
            startListening(args: java.util.Map<string,sun.jdi.connect.Connector$Argument>): string;
          }
          interface SharedMemoryListeningConnector extends CombineTypes<[_SharedMemoryListeningConnector, com.sun.tools.jdi.GenericListeningConnector]> {}
          interface _SharedMemoryTransportService$$static extends ClassLike {
            _new(): SharedMemoryTransportService;
          }
          let SharedMemoryTransportService: _SharedMemoryTransportService$$static;
          interface _SharedMemoryTransportService {
            accept(listener: sun.jdi.connect.spi.TransportService$ListenKey, acceptTimeout: long, a2: long): sun.jdi.connect.spi.Connection;
            _accept0(a0: long, a1: long): long;
            attach(address: string, attachTimeout: long, a2: long): sun.jdi.connect.spi.Connection;
            _attach0(a0: string, a1: long): long;
            capabilities(): sun.jdi.connect.spi.TransportService$Capabilities;
            defaultAddress(): string;
            description(): string;
            _initialize(): void;
            name(): string;
            _name(a0: long): string;
            startListening(address: string): sun.jdi.connect.spi.TransportService$ListenKey;
            startListening(): sun.jdi.connect.spi.TransportService$ListenKey;
            _startListening0(a0: string): long;
            stopListening(listener: sun.jdi.connect.spi.TransportService$ListenKey): void;
            _stopListening0(a0: long): void;
            _messages: java.util.ResourceBundle;
          }
          interface SharedMemoryTransportService extends CombineTypes<[_SharedMemoryTransportService, com.sun.jdi.connect.spi.TransportService]> {}
          interface _SharedMemoryTransportService$SharedMemoryListenKey$$static extends ClassLike {
            _new(id: long, a1: string): SharedMemoryTransportService$SharedMemoryListenKey;
          }
          let SharedMemoryTransportService$SharedMemoryListenKey: _SharedMemoryTransportService$SharedMemoryListenKey$$static;
          interface _SharedMemoryTransportService$SharedMemoryListenKey {
            address(): string;
            _id(): long;
            _setId(id: long): void;
            toString(): string;
            _id: long;
            _name: string;
          }
          interface SharedMemoryTransportService$SharedMemoryListenKey extends CombineTypes<[_SharedMemoryTransportService$SharedMemoryListenKey, com.sun.jdi.connect.spi.TransportService$ListenKey]> {}
          interface _SharedMemoryTransportServiceCapabilities$$static extends ClassLike {
            _new(): SharedMemoryTransportServiceCapabilities;
          }
          let SharedMemoryTransportServiceCapabilities: _SharedMemoryTransportServiceCapabilities$$static;
          interface _SharedMemoryTransportServiceCapabilities {
            supportsAcceptTimeout(): boolean;
            supportsAttachTimeout(): boolean;
            supportsHandshakeTimeout(): boolean;
            supportsMultipleConnections(): boolean;
          }
          interface SharedMemoryTransportServiceCapabilities extends CombineTypes<[_SharedMemoryTransportServiceCapabilities, com.sun.jdi.connect.spi.TransportService$Capabilities]> {}
          interface _ShortTypeImpl$$static extends ClassLike {
            _new(vm: sun.jdi.VirtualMachine): ShortTypeImpl;
          }
          let ShortTypeImpl: _ShortTypeImpl$$static;
          interface _ShortTypeImpl {
            _convert(value: sun.jdi.PrimitiveValue): sun.jdi.PrimitiveValue;
            signature(): string;
            toString(): string;
          }
          interface ShortTypeImpl extends CombineTypes<[_ShortTypeImpl, com.sun.tools.jdi.PrimitiveTypeImpl, com.sun.jdi.ShortType]> {}
          interface _ShortValueImpl$$static extends ClassLike {
            _new(aVm: sun.jdi.VirtualMachine, aValue: short): ShortValueImpl;
          }
          let ShortValueImpl: _ShortValueImpl$$static;
          interface _ShortValueImpl {
            booleanValue(): boolean;
            byteValue(): byte;
            charValue(): char;
            _checkedByteValue(): byte;
            _checkedCharValue(): char;
            compareTo(obj: sun.jdi.ShortValue): int;
            compareTo(a0: any): int;
            doubleValue(): double;
            equals(obj: any): boolean;
            floatValue(): float;
            hashCode(): int;
            intValue(): int;
            longValue(): long;
            shortValue(): short;
            toString(): string;
            type(): sun.jdi.Type;
            _typeValueKey(): byte;
            value(): short;
            _value: short;
          }
          interface ShortValueImpl extends CombineTypes<[_ShortValueImpl, com.sun.jdi.ShortValue, com.sun.tools.jdi.PrimitiveValueImpl]> {}
          interface _SocketAttachingConnector$$static extends ClassLike {
            _ARG_HOST: string;
            _ARG_PORT: string;
            new(): SocketAttachingConnector;
          }
          let SocketAttachingConnector: _SocketAttachingConnector$$static;
          interface _SocketAttachingConnector {
            attach(arguments: java.util.Map<string,sun.jdi.connect.Connector$Argument>): sun.jdi.VirtualMachine;
            description(): string;
            name(): string;
          }
          interface SocketAttachingConnector extends CombineTypes<[_SocketAttachingConnector, com.sun.tools.jdi.GenericAttachingConnector]> {}
          interface _SocketConnection$$static extends ClassLike {
            _new(socket: java.net.Socket): SocketConnection;
          }
          let SocketConnection: _SocketConnection$$static;
          interface _SocketConnection {
            close(): void;
            isOpen(): boolean;
            readPacket(): byte[];
            writePacket(b: byte[]): void;
            _closeLock: any;
            _closed: boolean;
            _receiveLock: any;
            _sendLock: any;
            _socket: java.net.Socket;
            _socketInput: java.io.InputStream;
            _socketOutput: java.io.OutputStream;
          }
          interface SocketConnection extends CombineTypes<[_SocketConnection, com.sun.jdi.connect.spi.Connection]> {}
          interface _SocketListeningConnector$$static extends ClassLike {
            _ARG_LOCALADDR: string;
            _ARG_PORT: string;
            new(): SocketListeningConnector;
          }
          let SocketListeningConnector: _SocketListeningConnector$$static;
          interface _SocketListeningConnector {
            description(): string;
            _isWildcardPort(args: java.util.Map<string,sun.jdi.connect.Connector$Argument>): boolean;
            name(): string;
            startListening(args: java.util.Map<string,sun.jdi.connect.Connector$Argument>): string;
            _updateArgumentMapIfRequired(args: java.util.Map<string,sun.jdi.connect.Connector$Argument>, listener: sun.jdi.connect.spi.TransportService$ListenKey): void;
          }
          interface SocketListeningConnector extends CombineTypes<[_SocketListeningConnector, com.sun.tools.jdi.GenericListeningConnector]> {}
          interface _SocketTransportService$$static extends ClassLike {
            new(): SocketTransportService;
          }
          let SocketTransportService: _SocketTransportService$$static;
          interface _SocketTransportService {
            accept(listener: sun.jdi.connect.spi.TransportService$ListenKey, acceptTimeout: long, a2: long): sun.jdi.connect.spi.Connection;
            attach(address: string, attachTimeout: long, a2: long): sun.jdi.connect.spi.Connection;
            capabilities(): sun.jdi.connect.spi.TransportService$Capabilities;
            description(): string;
            _handshake(s: java.net.Socket, timeout: long): void;
            name(): string;
            _startListening(localaddress: string, port: int): sun.jdi.connect.spi.TransportService$ListenKey;
            startListening(address: string): sun.jdi.connect.spi.TransportService$ListenKey;
            startListening(): sun.jdi.connect.spi.TransportService$ListenKey;
            stopListening(listener: sun.jdi.connect.spi.TransportService$ListenKey): void;
            toString(): string;
            _messages: java.util.ResourceBundle;
          }
          interface SocketTransportService extends CombineTypes<[_SocketTransportService, com.sun.jdi.connect.spi.TransportService]> {}
          interface _SocketTransportService$HostPort$$static extends ClassLike {
            parse(hostPort: string): SocketTransportService$HostPort;
          }
          let SocketTransportService$HostPort: _SocketTransportService$HostPort$$static;
          interface _SocketTransportService$HostPort {
            readonly host: string;
            readonly port: int;
          }
          interface SocketTransportService$HostPort extends CombineTypes<[_SocketTransportService$HostPort, java.lang.Object]> {}
          interface _SocketTransportService$SocketListenKey$$static extends ClassLike {
            _new(ss: java.net.ServerSocket): SocketTransportService$SocketListenKey;
          }
          let SocketTransportService$SocketListenKey: _SocketTransportService$SocketListenKey$$static;
          interface _SocketTransportService$SocketListenKey {
            address(): string;
            _socket(): java.net.ServerSocket;
            toString(): string;
            _ss: java.net.ServerSocket;
          }
          interface SocketTransportService$SocketListenKey extends CombineTypes<[_SocketTransportService$SocketListenKey, com.sun.jdi.connect.spi.TransportService$ListenKey]> {}
          interface _StackFrameImpl$$static extends ClassLike {
            _new(vm: sun.jdi.VirtualMachine, thread: ThreadReferenceImpl, id: long, a3: sun.jdi.Location): StackFrameImpl;
          }
          let StackFrameImpl: _StackFrameImpl$$static;
          interface _StackFrameImpl {
            _createVisibleVariables(): void;
            equals(obj: any): boolean;
            getArgumentValues(): java.util.List<sun.jdi.Value>;
            getValue(variable: sun.jdi.LocalVariable): sun.jdi.Value;
            getValues(variables: java.util.List<sun.jdi.LocalVariable>): java.util.Map<sun.jdi.LocalVariable,sun.jdi.Value>;
            hashCode(): int;
            location(): sun.jdi.Location;
            _pop(): void;
            setValue(variableIntf: sun.jdi.LocalVariable, valueIntf: sun.jdi.Value): void;
            thisObject(): sun.jdi.ObjectReference;
            thread(): sun.jdi.ThreadReference;
            threadResumable(action: ThreadAction): boolean;
            toString(): string;
            _validateStackFrame(): void;
            virtualMachine(): sun.jdi.VirtualMachine;
            visibleVariableByName(name: string): sun.jdi.LocalVariable;
            visibleVariables(): java.util.List<sun.jdi.LocalVariable>;
            _id: long;
            _isValid: boolean;
            _location: sun.jdi.Location;
            _thisObject: sun.jdi.ObjectReference;
            _thread: ThreadReferenceImpl;
            _visibleVariables: java.util.Map<string,sun.jdi.LocalVariable>;
          }
          interface StackFrameImpl extends CombineTypes<[_StackFrameImpl, com.sun.jdi.StackFrame, com.sun.tools.jdi.MirrorImpl, com.sun.tools.jdi.ThreadListener]> {}
          interface _StratumLineInfo$$static extends ClassLike {
            _new(stratumID: string, lineNumber: int, sourceName: string, sourcePath: string): StratumLineInfo;
          }
          let StratumLineInfo: _StratumLineInfo$$static;
          interface _StratumLineInfo {
            liLineNumber(): int;
            liSourceName(): string;
            liSourcePath(): string;
            liStratum(): string;
            _lineNumber: int;
            _sourceName: string;
            _sourcePath: string;
            _stratumID: string;
          }
          interface StratumLineInfo extends CombineTypes<[_StratumLineInfo, java.lang.Object, com.sun.tools.jdi.LineInfo]> {}
          interface _StringReferenceImpl$$static extends ClassLike {
            _new(aVm: sun.jdi.VirtualMachine, aRef: long): StringReferenceImpl;
          }
          let StringReferenceImpl: _StringReferenceImpl$$static;
          interface _StringReferenceImpl {
            toString(): string;
            _typeValueKey(): byte;
            value(): string;
            _value: string;
          }
          interface StringReferenceImpl extends CombineTypes<[_StringReferenceImpl, com.sun.tools.jdi.ObjectReferenceImpl, com.sun.jdi.StringReference]> {}
          interface _SunCommandLineLauncher$$static extends ClassLike {
            _hasWhitespace(string: string): boolean;
            _ARG_HOME: string;
            _ARG_INIT_SUSPEND: string;
            _ARG_MAIN: string;
            _ARG_OPTIONS: string;
            _ARG_QUOTE: string;
            _ARG_VM_EXEC: string;
            _ARG_VM_INCLUDE_VTHREADS: string;
            new(): SunCommandLineLauncher;
          }
          let SunCommandLineLauncher: _SunCommandLineLauncher$$static;
          interface _SunCommandLineLauncher {
            defaultArguments(): java.util.Map;
            description(): string;
            launch(arguments: java.util.Map<string,sun.jdi.connect.Connector$Argument>): sun.jdi.VirtualMachine;
            name(): string;
            toString(): string;
            transport(): sun.jdi.connect.Transport;
            _transportService(): sun.jdi.connect.spi.TransportService;
            _transport: sun.jdi.connect.Transport;
            _transportService: sun.jdi.connect.spi.TransportService;
            _usingSharedMemory: boolean;
          }
          interface SunCommandLineLauncher extends CombineTypes<[_SunCommandLineLauncher, com.sun.tools.jdi.AbstractLauncher]> {}
          interface _SunSDK$$static extends ClassLike {
            _home(): string;
            _new(): SunSDK;
          }
          let SunSDK: _SunSDK$$static;
          interface _SunSDK {
          }
          interface SunSDK extends CombineTypes<[_SunSDK, java.lang.Object]> {}
          interface _TargetVM$$static extends ClassLike {
            _OVERLOADED_QUEUE: int;
            _UNDERLOADED_QUEUE: int;
            _new(vm: VirtualMachineImpl, connection: sun.jdi.connect.spi.Connection): TargetVM;
          }
          let TargetVM: _TargetVM$$static;
          interface _TargetVM {
            _addEventQueue(queue: EventQueueImpl): void;
            _controlEventFlow(maxQueueSize: int): void;
            _dumpPacket(packet: Packet, sending: boolean): void;
            _eventController(): TargetVM$EventController;
            _handleEventCmdSet(p: Packet): void;
            _handleVMCommand(p: Packet): void;
            _notifyDequeueEventSet(): void;
            _queueEventSet(eventSet: sun.jdi.event.EventSet): void;
            run(): void;
            _send(packet: Packet): void;
            _start(): void;
            _stopListening(): void;
            _waitForReply(packet: Packet): void;
            _connection: sun.jdi.connect.spi.Connection;
            _eventController: TargetVM$EventController;
            _eventQueues: java.util.List<sun.jdi.event.EventQueue>;
            _eventsHeld: boolean;
            _readerThread: java.lang.Thread;
            _shouldListen: boolean;
            _vm: VirtualMachineImpl;
            _waitingQueue: java.util.Map<string,Packet>;
          }
          interface TargetVM extends CombineTypes<[_TargetVM, java.lang.Object, java.lang.Runnable]> {}
          interface _TargetVM$EventController$$static extends ClassLike {
            _new(a0: TargetVM): TargetVM$EventController;
          }
          let TargetVM$EventController: _TargetVM$EventController$$static;
          interface _TargetVM$EventController {
            _hold(): void;
            _release(): void;
            run(): void;
            _controlRequest: int;
            _this$0: TargetVM;
          }
          interface TargetVM$EventController extends CombineTypes<[_TargetVM$EventController, java.lang.Thread]> {}
          interface _ThreadAction$$static extends ClassLike {
            _THREAD_RESUMABLE: int;
            _serialVersionUID: long;
            _new(thread: sun.jdi.ThreadReference, id: int): ThreadAction;
          }
          let ThreadAction: _ThreadAction$$static;
          interface _ThreadAction {
            _id(): int;
            _thread(): sun.jdi.ThreadReference;
            _id: int;
          }
          interface ThreadAction extends CombineTypes<[_ThreadAction, java.util.EventObject]> {}
          interface _ThreadGroupReferenceImpl$$static extends ClassLike {
            _new(aVm: sun.jdi.VirtualMachine, aRef: long): ThreadGroupReferenceImpl;
          }
          let ThreadGroupReferenceImpl: _ThreadGroupReferenceImpl$$static;
          interface _ThreadGroupReferenceImpl {
            _description(): string;
            _kids(): JDWP$ThreadGroupReference$Children;
            name(): string;
            _newCache(): ObjectReferenceImpl$Cache;
            parent(): sun.jdi.ThreadGroupReference;
            resume(): void;
            suspend(): void;
            threadGroups(): java.util.List<sun.jdi.ThreadGroupReference>;
            threads(): java.util.List<sun.jdi.ThreadReference>;
            toString(): string;
            _typeValueKey(): byte;
            _name: string;
            _parent: sun.jdi.ThreadGroupReference;
            _triedParent: boolean;
          }
          interface ThreadGroupReferenceImpl extends CombineTypes<[_ThreadGroupReferenceImpl, com.sun.tools.jdi.ObjectReferenceImpl, com.sun.jdi.ThreadGroupReference]> {}
          interface _ThreadGroupReferenceImpl$Cache$$static extends ClassLike {
          }
          let ThreadGroupReferenceImpl$Cache: _ThreadGroupReferenceImpl$Cache$$static;
          interface _ThreadGroupReferenceImpl$Cache {
            _kids: JDWP$ThreadGroupReference$Children;
          }
          interface ThreadGroupReferenceImpl$Cache extends CombineTypes<[_ThreadGroupReferenceImpl$Cache, com.sun.tools.jdi.ObjectReferenceImpl$Cache]> {}
          interface _ThreadListener$$static extends ClassLike {
          }
          let ThreadListener: _ThreadListener$$static;
          interface _ThreadListener {
            threadResumable(a0: ThreadAction): boolean;
(a0: ThreadAction): boolean;
          }
          interface ThreadListener extends CombineTypes<[_ThreadListener, java.util.EventListener, java.lang.Object]> {}
          interface _ThreadReferenceImpl$$static extends ClassLike {
            _SUSPEND_STATUS_BREAK: int;
            _SUSPEND_STATUS_SUSPENDED: int;
            _new(aVm: sun.jdi.VirtualMachine, aRef: long): ThreadReferenceImpl;
          }
          let ThreadReferenceImpl: _ThreadReferenceImpl$$static;
          interface _ThreadReferenceImpl {
            _addListener(listener: ThreadListener): void;
            currentContendedMonitor(): sun.jdi.ObjectReference;
            _description(): string;
            forceEarlyReturn(returnValue: sun.jdi.Value): void;
            frame(index: int): sun.jdi.StackFrame;
            frameCount(): int;
            frames(): java.util.List<sun.jdi.StackFrame>;
            frames(start: int, length: int): java.util.List<sun.jdi.StackFrame>;
            interrupt(): void;
            isAtBreakpoint(): boolean;
            _isSubrange(snapshot: ThreadReferenceImpl$LocalCache, start: int, length: int): boolean;
            isSuspended(): boolean;
            isVirtual(): boolean;
            _jdwpStatus(): JDWP$ThreadReference$Status;
            name(): string;
            _newCache(): ObjectReferenceImpl$Cache;
            ownedMonitors(): java.util.List<sun.jdi.ObjectReference>;
            ownedMonitorsAndFrames(): java.util.List<sun.jdi.MonitorInfo>;
            popFrames(frame: sun.jdi.StackFrame): void;
            _privateFrames(start: int, length: int): java.util.List<sun.jdi.StackFrame>;
            _processThreadAction(action: ThreadAction): void;
            _resetLocalCache(): void;
            resume(): void;
            _sendResumingCommand(sender: CommandSender): PacketStream;
            status(): int;
            stop(throwable: sun.jdi.ObjectReference): void;
            suspend(): void;
            suspendCount(): int;
            threadGroup(): sun.jdi.ThreadGroupReference;
            toString(): string;
            _typeValueKey(): byte;
            vmNotSuspended(action: VMAction): boolean;
            _isVirtual: boolean;
            _isVirtualCached: boolean;
            _listeners: java.util.List<java.lang.ref.WeakReference<ThreadListener>>;
            _localCache: ThreadReferenceImpl$LocalCache;
            _suspendedZombieCount: int;
            _threadGroup: sun.jdi.ThreadGroupReference;
          }
          interface ThreadReferenceImpl extends CombineTypes<[_ThreadReferenceImpl, com.sun.tools.jdi.ObjectReferenceImpl, com.sun.jdi.ThreadReference]> {}
          interface _ThreadReferenceImpl$Cache$$static extends ClassLike {
          }
          let ThreadReferenceImpl$Cache: _ThreadReferenceImpl$Cache$$static;
          interface _ThreadReferenceImpl$Cache {
            _name: string;
          }
          interface ThreadReferenceImpl$Cache extends CombineTypes<[_ThreadReferenceImpl$Cache, com.sun.tools.jdi.ObjectReferenceImpl$Cache]> {}
          interface _ThreadReferenceImpl$LocalCache$$static extends ClassLike {
          }
          let ThreadReferenceImpl$LocalCache: _ThreadReferenceImpl$LocalCache$$static;
          interface _ThreadReferenceImpl$LocalCache {
            _contendedMonitor: sun.jdi.ObjectReference;
            _frameCount: int;
            _frames: java.util.List<sun.jdi.StackFrame>;
            _framesLength: int;
            _framesStart: int;
            _ownedMonitors: java.util.List<sun.jdi.ObjectReference>;
            _ownedMonitorsInfo: java.util.List<sun.jdi.MonitorInfo>;
            _status: JDWP$ThreadReference$Status;
            _triedCurrentContended: boolean;
          }
          interface ThreadReferenceImpl$LocalCache extends CombineTypes<[_ThreadReferenceImpl$LocalCache, java.lang.Object]> {}
          interface _TypeComponentImpl$$static extends ClassLike {
            _new(vm: sun.jdi.VirtualMachine, declaringType: ReferenceTypeImpl, ref: long, a3: string, name: string, signature: string, genericSignature: int): TypeComponentImpl;
          }
          let TypeComponentImpl: _TypeComponentImpl$$static;
          interface _TypeComponentImpl {
            declaringType(): sun.jdi.ReferenceType;
            equals(a0: any): boolean;
            genericSignature(): string;
            hashCode(): int;
            isFinal(): boolean;
            _isModifierSet(compareBits: int): boolean;
            isPackagePrivate(): boolean;
            isPrivate(): boolean;
            isProtected(): boolean;
            isPublic(): boolean;
            isStatic(): boolean;
            isSynthetic(): boolean;
            modifiers(): int;
            name(): string;
            _ref(): long;
            signature(): string;
            virtualMachine(): sun.jdi.VirtualMachine;
            _declaringType: ReferenceTypeImpl;
            _genericSignature: string;
            _modifiers: int;
            _name: string;
            _ref: long;
            _signature: string;
          }
          interface TypeComponentImpl extends CombineTypes<[_TypeComponentImpl, com.sun.tools.jdi.MirrorImpl, com.sun.jdi.TypeComponent]> {}
          interface _TypeImpl$$static extends ClassLike {
            _new(vm: sun.jdi.VirtualMachine): TypeImpl;
          }
          let TypeImpl: _TypeImpl$$static;
          interface _TypeImpl {
            equals(obj: any): boolean;
            hashCode(): int;
            name(): string;
            signature(): string;
(): string;
            virtualMachine(): sun.jdi.VirtualMachine;
            _myName: string;
          }
          interface TypeImpl extends CombineTypes<[_TypeImpl, com.sun.jdi.Type, com.sun.tools.jdi.MirrorImpl]> {}
          interface _VMAction$$static extends ClassLike {
            _VM_NOT_SUSPENDED: int;
            _VM_SUSPENDED: int;
            _serialVersionUID: long;
            _new(vm: sun.jdi.VirtualMachine, id: int): VMAction;
            _new(vm: sun.jdi.VirtualMachine, resumingThread: sun.jdi.ThreadReference, id: int): VMAction;
          }
          let VMAction: _VMAction$$static;
          interface _VMAction {
            _id(): int;
            _resumingThread(): sun.jdi.ThreadReference;
            _vm(): sun.jdi.VirtualMachine;
            _id: int;
            _resumingThread: sun.jdi.ThreadReference;
          }
          interface VMAction extends CombineTypes<[_VMAction, java.util.EventObject]> {}
          interface _VMListener$$static extends ClassLike {
          }
          let VMListener: _VMListener$$static;
          interface _VMListener {
            vmNotSuspended(a0: VMAction): boolean;
            vmSuspended(a0: VMAction): boolean;
          }
          interface VMListener extends CombineTypes<[_VMListener, java.util.EventListener, java.lang.Object]> {}
          interface _VMModifiers$$static extends ClassLike {
            readonly ABSTRACT: int;
            readonly BRIDGE: int;
            readonly ENUM_CONSTANT: int;
            readonly FINAL: int;
            readonly INTERFACE: int;
            readonly NATIVE: int;
            readonly PRIVATE: int;
            readonly PROTECTED: int;
            readonly PUBLIC: int;
            readonly STATIC: int;
            readonly SYNCHRONIZED: int;
            readonly SYNTHETIC: int;
            readonly TRANSIENT: int;
            readonly VARARGS: int;
            readonly VOLATILE: int;
          }
          let VMModifiers: _VMModifiers$$static;
          interface _VMModifiers {
          }
          interface VMModifiers extends CombineTypes<[_VMModifiers, java.lang.Object]> {}
          interface _VMState$$static extends ClassLike {
            _markerCache: VMState$Cache;
            _new(vm: VirtualMachineImpl): VMState;
          }
          let VMState: _VMState$$static;
          interface _VMState {
            _addListener(listener: VMListener): void;
            _allThreads(): java.util.List<sun.jdi.ThreadReference>;
            _disableCache(): void;
            _enableCache(): void;
            _freeze(): void;
            _getCache(): VMState$Cache;
            _hasListener(listener: VMListener): boolean;
            _isSuspended(): boolean;
            _notifyCommandComplete(id: int): void;
            _processVMAction(action: VMAction): void;
            _removeUnreachableListeners(): void;
            _thaw(): void;
            _thaw(resumingThread: sun.jdi.ThreadReference): void;
            _thawCommand(sender: CommandSender): PacketStream;
            _topLevelThreadGroups(): java.util.List<sun.jdi.ThreadGroupReference>;
            _cache: VMState$Cache;
            _listeners: java.util.List<java.lang.ref.WeakReference<VMListener>>;
            _listenersReferenceQueue: java.lang.ref.ReferenceQueue<VMListener>;
            _notifyingListeners: boolean;
            _pendingResumeCommands: java.util.Set<int>;
            _vm: VirtualMachineImpl;
          }
          interface VMState extends CombineTypes<[_VMState, java.lang.Object]> {}
          interface _VMState$Cache$$static extends ClassLike {
          }
          let VMState$Cache: _VMState$Cache$$static;
          interface _VMState$Cache {
            _groups: java.util.List<sun.jdi.ThreadGroupReference>;
            _threads: java.util.List<sun.jdi.ThreadReference>;
          }
          interface VMState$Cache extends CombineTypes<[_VMState$Cache, java.lang.Object]> {}
          interface _ValueContainer$$static extends ClassLike {
          }
          let ValueContainer: _ValueContainer$$static;
          interface _ValueContainer {
            findType(a0: string): sun.jdi.Type;
            signature(): string;
            type(): sun.jdi.Type;
            typeName(): string;
          }
          interface ValueContainer extends CombineTypes<[_ValueContainer, java.lang.Object]> {}
          interface _ValueImpl$$static extends ClassLike {
            _prepareForAssignment(value: sun.jdi.Value, destination: ValueContainer): ValueImpl;
            _typeValueKey(val: sun.jdi.Value): byte;
            _new(aVm: sun.jdi.VirtualMachine): ValueImpl;
          }
          let ValueImpl: _ValueImpl$$static;
          interface _ValueImpl {
            _prepareForAssignmentTo(a0: ValueContainer): ValueImpl;
            _typeValueKey(): byte;
          }
          interface ValueImpl extends CombineTypes<[_ValueImpl, com.sun.tools.jdi.MirrorImpl, com.sun.jdi.Value]> {}
          interface _VirtualMachineImpl$$static extends ClassLike {
            _DISPOSE_THRESHOLD: int;
            _TRACE_RAW_RECEIVES: int;
            _TRACE_RAW_SENDS: int;
            _new(manager: sun.jdi.VirtualMachineManager, connection: sun.jdi.connect.spi.Connection, process: java.lang.Process, sequenceNumber: int): VirtualMachineImpl;
          }
          let VirtualMachineImpl: _VirtualMachineImpl$$static;
          interface _VirtualMachineImpl {
            _addModule(id: long): sun.jdi.ModuleReference;
            _addReferenceType(id: long, a1: int, tag: string): ReferenceTypeImpl;
            allClasses(): java.util.List<sun.jdi.ReferenceType>;
            allModules(): java.util.List<sun.jdi.ModuleReference>;
            allThreads(): java.util.List<sun.jdi.ThreadReference>;
            _arrayMirror(id: long): ArrayReferenceImpl;
            _arrayType(ref: long): ArrayTypeImpl;
            baseDirectory(): string;
            _batchForDispose(ref: VirtualMachineImpl$SoftObjectReference): void;
            bootClassPath(): java.util.List<string>;
            canAddMethod(): boolean;
            canBeModified(): boolean;
            canForceEarlyReturn(): boolean;
            _canGet1_5LanguageFeatures(): boolean;
            canGetBytecodes(): boolean;
            canGetClassFileVersion(): boolean;
            canGetConstantPool(): boolean;
            canGetCurrentContendedMonitor(): boolean;
            canGetInstanceInfo(): boolean;
            canGetMethodReturnValues(): boolean;
            canGetModuleInfo(): boolean;
            canGetMonitorFrameInfo(): boolean;
            canGetMonitorInfo(): boolean;
            canGetOwnedMonitorInfo(): boolean;
            canGetSourceDebugExtension(): boolean;
            canGetSyntheticAttribute(): boolean;
            canPopFrames(): boolean;
            canRedefineClasses(): boolean;
            canRequestMonitorEvents(): boolean;
            canRequestVMDeathEvent(): boolean;
            canUnrestrictedlyRedefineClasses(): boolean;
            canUseInstanceFilters(): boolean;
            canUseSourceNameFilters(): boolean;
            canWatchFieldAccess(): boolean;
            canWatchFieldModification(): boolean;
            _capabilities(): JDWP$VirtualMachine$Capabilities;
            _capabilitiesNew(): JDWP$VirtualMachine$CapabilitiesNew;
            _classLoaderMirror(id: long): ClassLoaderReferenceImpl;
            _classObjectMirror(id: long): ClassObjectReferenceImpl;
            classPath(): java.util.List<string>;
            _classType(ref: long): ClassTypeImpl;
            classesByName(className: string): java.util.List<sun.jdi.ReferenceType>;
            _classesBySignature(signature: string): java.util.List<sun.jdi.ReferenceType>;
            description(): string;
            dispose(): void;
            equals(obj: any): boolean;
            eventQueue(): sun.jdi.event.EventQueue;
            eventRequestManager(): sun.jdi.request.EventRequestManager;
            _eventRequestManagerImpl(): EventRequestManagerImpl;
            exit(exitCode: int): void;
            _findBootType(signature: string): sun.jdi.Type;
            _findReferenceTypes(signature: string): java.util.List<sun.jdi.ReferenceType>;
            forEachClass(action: java.util.function.Consumer<sun.jdi.ReferenceType>): void;
            _getClasspath(): JDWP$VirtualMachine$ClassPaths;
            getDefaultStratum(): string;
            _getInternalEventRequestManager(): EventRequestManagerImpl;
            _getModule(id: long): sun.jdi.ModuleReference;
            _hasNewCapabilities(): boolean;
            hashCode(): int;
            _initReferenceTypes(): void;
            instanceCounts(classes: java.util.List<sun.jdi.ReferenceType>): long[];
            _interfaceType(ref: long): InterfaceTypeImpl;
            _mayCreateVirtualThreads(): boolean;
            mirrorOf(value: boolean): sun.jdi.BooleanValue;
            mirrorOf(value: byte): sun.jdi.ByteValue;
            mirrorOf(value: char): sun.jdi.CharValue;
            mirrorOf(value: short): sun.jdi.ShortValue;
            mirrorOf(value: int): sun.jdi.IntegerValue;
            mirrorOf(value: long): sun.jdi.LongValue;
            mirrorOf(value: float): sun.jdi.FloatValue;
            mirrorOf(value: double): sun.jdi.DoubleValue;
            mirrorOf(value: string): sun.jdi.StringReference;
            mirrorOfVoid(): sun.jdi.VoidValue;
            _moduleMirror(id: long): ModuleReferenceImpl;
            name(): string;
            _notifyInitCompletion(): void;
            _notifySuspend(): void;
            _objectMirror(id: long, a1: int): ObjectReferenceImpl;
            _objectMirror(id: long): ObjectReferenceImpl;
            _primitiveTypeMirror(tag: byte): sun.jdi.PrimitiveType;
            _printReceiveTrace(depth: int, string: string): void;
            _printTrace(string: string): void;
            process(): java.lang.Process;
            _processBatchedDisposes(): void;
            _processQueue(): void;
            redefineClasses(classToBytes: java.util.Map<sun.jdi.ReferenceType,byte[]>): void;
            _referenceType(ref: long, a1: byte): ReferenceTypeImpl;
            _referenceType(id: long, a1: int, tag: string): ReferenceTypeImpl;
            _removeObjectMirror(ref: VirtualMachineImpl$SoftObjectReference): void;
            _removeReferenceType(signature: string): void;
            resume(): void;
            _retrieveAllClasses(): void;
            _retrieveAllClasses1_4(): void;
            _retrieveAllModules(): java.util.List<sun.jdi.ModuleReference>;
            _retrieveClassesBySignature(signature: string): java.util.List<sun.jdi.ReferenceType>;
            _sendResumingCommand(sender: CommandSender): PacketStream;
            _sendToTarget(packet: Packet): void;
            setDebugTraceMode(traceFlags: int): void;
            setDefaultStratum(stratum: string): void;
            _state(): VMState;
            _stringMirror(id: long): StringReferenceImpl;
            suspend(): void;
            _theBooleanType(): sun.jdi.BooleanType;
            _theByteType(): sun.jdi.ByteType;
            _theCharType(): sun.jdi.CharType;
            _theDoubleType(): sun.jdi.DoubleType;
            _theFloatType(): sun.jdi.FloatType;
            _theIntegerType(): sun.jdi.IntegerType;
            _theLongType(): sun.jdi.LongType;
            _theShortType(): sun.jdi.ShortType;
            _theVoidType(): sun.jdi.VoidType;
            _threadGroupForJDI(): java.lang.ThreadGroup;
            _threadGroupMirror(id: long): ThreadGroupReferenceImpl;
            _threadMirror(id: long): ThreadReferenceImpl;
            threadResumable(action: ThreadAction): boolean;
            topLevelThreadGroups(): java.util.List<sun.jdi.ThreadGroupReference>;
            _validateVM(): void;
            version(): string;
            _versionInfo(): JDWP$VirtualMachine$Version;
            _waitForTargetReply(packet: Packet): void;
            _waitInitCompletion(): void;
            _batchedDisposeRequests: java.util.List<VirtualMachineImpl$SoftObjectReference>;
            _capabilities: JDWP$VirtualMachine$Capabilities;
            _capabilitiesNew: JDWP$VirtualMachine$CapabilitiesNew;
            _defaultStratum: string;
            _eventQueue: EventQueueImpl;
            _eventRequestManager: EventRequestManagerImpl;
            _initComplete: boolean;
            _initMonitor: any;
            _internalEventRequestManager: EventRequestManagerImpl;
            _modulesByID: java.util.Map<long,sun.jdi.ModuleReference>;
            _objectsByID: java.util.Map<long,VirtualMachineImpl$SoftObjectReference>;
            _pathInfo: JDWP$VirtualMachine$ClassPaths;
            _process: java.lang.Process;
            _referenceQueue: java.lang.ref.ReferenceQueue<ObjectReferenceImpl>;
            _retrievedAllTypes: boolean;
            _sequenceNumber: int;
            _shutdown: boolean;
            readonly sizeofClassRef: int;
            readonly sizeofFieldRef: int;
            readonly sizeofFrameRef: int;
            readonly sizeofMethodRef: int;
            readonly sizeofModuleRef: int;
            readonly sizeofObjectRef: int;
            _state: VMState;
            _target: TargetVM;
            _theBooleanType: sun.jdi.BooleanType;
            _theByteType: sun.jdi.ByteType;
            _theCharType: sun.jdi.CharType;
            _theDoubleType: sun.jdi.DoubleType;
            _theFloatType: sun.jdi.FloatType;
            _theIntegerType: sun.jdi.IntegerType;
            _theLongType: sun.jdi.LongType;
            _theShortType: sun.jdi.ShortType;
            _theVoidType: sun.jdi.VoidType;
            _threadGroupForJDI: java.lang.ThreadGroup;
            _traceFlags: int;
            _traceReceives: boolean;
            _typesByID: java.util.Map<long,sun.jdi.ReferenceType>;
            _typesBySignature: java.util.Set<sun.jdi.ReferenceType>;
            _versionInfo: JDWP$VirtualMachine$Version;
            _vmManager: VirtualMachineManagerImpl;
            _voidVal: sun.jdi.VoidValue;
          }
          interface VirtualMachineImpl extends CombineTypes<[_VirtualMachineImpl, com.sun.tools.jdi.MirrorImpl, com.sun.jdi.PathSearchingVirtualMachine, com.sun.tools.jdi.ThreadListener]> {}
          interface _VirtualMachineImpl$SoftObjectReference$$static extends ClassLike {
            _new(key: long, mirror: ObjectReferenceImpl, queue: java.lang.ref.ReferenceQueue<ObjectReferenceImpl>): VirtualMachineImpl$SoftObjectReference;
          }
          let VirtualMachineImpl$SoftObjectReference: _VirtualMachineImpl$SoftObjectReference$$static;
          interface _VirtualMachineImpl$SoftObjectReference {
            _count(): int;
            _incrementCount(): void;
            _key(): long;
            _object(): ObjectReferenceImpl;
            _count: int;
            _key: long;
          }
          interface VirtualMachineImpl$SoftObjectReference extends CombineTypes<[_VirtualMachineImpl$SoftObjectReference, java.lang.ref.SoftReference<ObjectReferenceImpl>]> {}
          interface _VirtualMachineManagerImpl$$static extends ClassLike {
            virtualMachineManager(): sun.jdi.VirtualMachineManager;
            _lock: any;
            _majorVersion: int;
            _minorVersion: int;
            _vmm: VirtualMachineManagerImpl;
            _new(): VirtualMachineManagerImpl;
          }
          let VirtualMachineManagerImpl: _VirtualMachineManagerImpl$$static;
          interface _VirtualMachineManagerImpl {
            addConnector(connector: sun.jdi.connect.Connector): void;
            addVirtualMachine(vm: sun.jdi.VirtualMachine): void;
            allConnectors(): java.util.List<sun.jdi.connect.Connector>;
            attachingConnectors(): java.util.List<sun.jdi.connect.AttachingConnector>;
            connectedVirtualMachines(): java.util.List<sun.jdi.VirtualMachine>;
            createVirtualMachine(connection: sun.jdi.connect.spi.Connection, process: java.lang.Process): sun.jdi.VirtualMachine;
            createVirtualMachine(connection: sun.jdi.connect.spi.Connection): sun.jdi.VirtualMachine;
            defaultConnector(): sun.jdi.connect.LaunchingConnector;
            _disposeVirtualMachine(vm: sun.jdi.VirtualMachine): void;
            _getString(key: string): string;
            launchingConnectors(): java.util.List<sun.jdi.connect.LaunchingConnector>;
            listeningConnectors(): java.util.List<sun.jdi.connect.ListeningConnector>;
            _mainGroupForJDI(): java.lang.ThreadGroup;
            majorInterfaceVersion(): int;
            minorInterfaceVersion(): int;
            removeConnector(connector: sun.jdi.connect.Connector): void;
            setDefaultConnector(connector: sun.jdi.connect.LaunchingConnector): void;
            _connectors: java.util.List<sun.jdi.connect.Connector>;
            _defaultConnector: sun.jdi.connect.LaunchingConnector;
            _mainGroupForJDI: java.lang.ThreadGroup;
            _messages: java.util.ResourceBundle;
            _targets: java.util.List<sun.jdi.VirtualMachine>;
            _vmSequenceNumber: int;
          }
          interface VirtualMachineManagerImpl extends CombineTypes<[_VirtualMachineManagerImpl, com.sun.tools.jdi.VirtualMachineManagerService, java.lang.Object]> {}
          interface _VirtualMachineManagerService$$static extends ClassLike {
          }
          let VirtualMachineManagerService: _VirtualMachineManagerService$$static;
          interface _VirtualMachineManagerService {
            addConnector(a0: sun.jdi.connect.Connector): void;
            removeConnector(a0: sun.jdi.connect.Connector): void;
            setDefaultConnector(a0: sun.jdi.connect.LaunchingConnector): void;
          }
          interface VirtualMachineManagerService extends CombineTypes<[_VirtualMachineManagerService, com.sun.jdi.VirtualMachineManager, java.lang.Object]> {}
          interface _VoidTypeImpl$$static extends ClassLike {
            _new(vm: sun.jdi.VirtualMachine): VoidTypeImpl;
          }
          let VoidTypeImpl: _VoidTypeImpl$$static;
          interface _VoidTypeImpl {
            signature(): string;
            toString(): string;
          }
          interface VoidTypeImpl extends CombineTypes<[_VoidTypeImpl, com.sun.jdi.VoidType, com.sun.tools.jdi.TypeImpl]> {}
          interface _VoidValueImpl$$static extends ClassLike {
            _new(aVm: sun.jdi.VirtualMachine): VoidValueImpl;
          }
          let VoidValueImpl: _VoidValueImpl$$static;
          interface _VoidValueImpl {
            equals(obj: any): boolean;
            hashCode(): int;
            _prepareForAssignmentTo(destination: ValueContainer): ValueImpl;
            toString(): string;
            type(): sun.jdi.Type;
            _typeValueKey(): byte;
            virtualMachine(): sun.jdi.VirtualMachine;
          }
          interface VoidValueImpl extends CombineTypes<[_VoidValueImpl, com.sun.tools.jdi.ValueImpl, com.sun.jdi.VoidValue]> {}
        }
      }
    }
  }
}
