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
    module net {
      module http {
        interface _HttpClient$$static extends ClassLike {
          newBuilder(): HttpClient$Builder;
          newHttpClient(): HttpClient;
          _new(): HttpClient;
        }
        let HttpClient: _HttpClient$$static;
        interface _HttpClient {
          authenticator(): java.util.Optional<Authenticator>;
          awaitTermination(duration: java.time.Duration): boolean;
          close(): void;
          connectTimeout(): java.util.Optional<java.time.Duration>;
          cookieHandler(): java.util.Optional<CookieHandler>;
          executor(): java.util.Optional<java.util.concurrent.Executor>;
          followRedirects(): HttpClient$Redirect;
          isTerminated(): boolean;
          newWebSocketBuilder(): WebSocket$Builder;
          proxy(): java.util.Optional<ProxySelector>;
          send<T>(a0: HttpRequest, a1: HttpResponse$BodyHandler<T>): HttpResponse<T>;
          sendAsync<T>(a0: HttpRequest, a1: HttpResponse$BodyHandler<T>): java.util.concurrent.CompletableFuture<HttpResponse<T>>;
          sendAsync<T>(a0: HttpRequest, a1: HttpResponse$BodyHandler<T>, a2: HttpResponse$PushPromiseHandler<T>): java.util.concurrent.CompletableFuture<HttpResponse<T>>;
          shutdown(): void;
          shutdownNow(): void;
          sslContext(): javax.net.ssl.SSLContext;
          sslParameters(): javax.net.ssl.SSLParameters;
          version(): HttpClient$Version;
        }
        interface HttpClient extends CombineTypes<[_HttpClient, java.lang.Object, java.lang.AutoCloseable]> {}
        interface _HttpClient$Builder$$static extends ClassLike {
          readonly NO_PROXY: ProxySelector;
        }
        let HttpClient$Builder: _HttpClient$Builder$$static;
        interface _HttpClient$Builder {
          authenticator(a0: Authenticator): HttpClient$Builder;
          build(): HttpClient;
          connectTimeout(a0: java.time.Duration): HttpClient$Builder;
          cookieHandler(a0: CookieHandler): HttpClient$Builder;
          executor(a0: java.util.concurrent.Executor): HttpClient$Builder;
          followRedirects(a0: HttpClient$Redirect): HttpClient$Builder;
          localAddress(localAddr: InetAddress): HttpClient$Builder;
          priority(a0: int): HttpClient$Builder;
          proxy(a0: ProxySelector): HttpClient$Builder;
          sslContext(a0: javax.net.ssl.SSLContext): HttpClient$Builder;
          sslParameters(a0: javax.net.ssl.SSLParameters): HttpClient$Builder;
          version(a0: HttpClient$Version): HttpClient$Builder;
        }
        interface HttpClient$Builder extends CombineTypes<[_HttpClient$Builder, java.lang.Object]> {}
        interface _HttpClient$Redirect$$static extends ClassLike {
          valueOf(name: string): HttpClient$Redirect;
          values(): HttpClient$Redirect[];
          readonly ALWAYS: HttpClient$Redirect;
          readonly NEVER: HttpClient$Redirect;
          readonly NORMAL: HttpClient$Redirect;
        }
        let HttpClient$Redirect: _HttpClient$Redirect$$static;
        interface _HttpClient$Redirect {
        }
        interface HttpClient$Redirect extends CombineTypes<[_HttpClient$Redirect]> {}
        interface _HttpClient$Version$$static extends ClassLike {
          valueOf(name: string): HttpClient$Version;
          values(): HttpClient$Version[];
          readonly HTTP_1_1: HttpClient$Version;
          readonly HTTP_2: HttpClient$Version;
        }
        let HttpClient$Version: _HttpClient$Version$$static;
        interface _HttpClient$Version {
        }
        interface HttpClient$Version extends CombineTypes<[_HttpClient$Version]> {}
        interface _HttpConnectTimeoutException$$static extends ClassLike {
          _serialVersionUID: long;
          new(message: string): HttpConnectTimeoutException;
        }
        let HttpConnectTimeoutException: _HttpConnectTimeoutException$$static;
        interface _HttpConnectTimeoutException {
        }
        interface HttpConnectTimeoutException extends CombineTypes<[_HttpConnectTimeoutException, java.net.http.HttpTimeoutException]> {}
        interface _HttpHeaders$$static extends ClassLike {
          _entryHash(e: java.util.Map$Entry<string,java.util.List<string>>): int;
          _headersOf(map: java.util.Map<string,java.util.List<string>>, filter: java.util.function.BiPredicate<string,string>): HttpHeaders;
          of(headerMap: java.util.Map<string,java.util.List<string>>, filter: java.util.function.BiPredicate<string,string>): HttpHeaders;
          _NO_HEADERS: HttpHeaders;
        }
        let HttpHeaders: _HttpHeaders$$static;
        interface _HttpHeaders {
          allValues(name: string): java.util.List<string>;
          equals(obj: any): boolean;
          firstValue(name: string): java.util.Optional<string>;
          firstValueAsLong(name: string): java.util.OptionalLong;
          hashCode(): int;
          map(): java.util.Map<string,java.util.List<string>>;
          toString(): string;
          _headers: java.util.Map<string,java.util.List<string>>;
        }
        interface HttpHeaders extends CombineTypes<[_HttpHeaders, java.lang.Object]> {}
        interface _HttpRequest$$static extends ClassLike {
          newBuilder(uri: URI): HttpRequest$Builder;
          newBuilder(request: HttpRequest, filter: java.util.function.BiPredicate<string,string>): HttpRequest$Builder;
          newBuilder(): HttpRequest$Builder;
          _new(): HttpRequest;
        }
        let HttpRequest: _HttpRequest$$static;
        interface _HttpRequest {
          bodyPublisher(): java.util.Optional<HttpRequest$BodyPublisher>;
          equals(obj: any): boolean;
          expectContinue(): boolean;
          hashCode(): int;
          headers(): HttpHeaders;
          method(): string;
          timeout(): java.util.Optional<java.time.Duration>;
          uri(): URI;
          version(): java.util.Optional<HttpClient$Version>;
        }
        interface HttpRequest extends CombineTypes<[_HttpRequest, java.lang.Object]> {}
        interface _HttpRequest$BodyPublisher$$static extends ClassLike {
        }
        let HttpRequest$BodyPublisher: _HttpRequest$BodyPublisher$$static;
        interface _HttpRequest$BodyPublisher {
          contentLength(): long;
(): long;
        }
        interface HttpRequest$BodyPublisher extends CombineTypes<[_HttpRequest$BodyPublisher, java.lang.Object, java.util.concurrent.Flow$Publisher<java.nio.ByteBuffer>]> {}
        interface _HttpRequest$BodyPublishers$$static extends ClassLike {
          concat(publishers: HttpRequest$BodyPublisher[]): HttpRequest$BodyPublisher;
          concat(...publishers: HttpRequest$BodyPublisher[]): HttpRequest$BodyPublisher;
          fromPublisher(publisher: java.util.concurrent.Flow$Publisher<java.nio.ByteBuffer>): HttpRequest$BodyPublisher;
          fromPublisher(publisher: java.util.concurrent.Flow$Publisher<java.nio.ByteBuffer>, contentLength: long): HttpRequest$BodyPublisher;
          noBody(): HttpRequest$BodyPublisher;
          ofByteArray(buf: byte[]): HttpRequest$BodyPublisher;
          ofByteArray(buf: byte[], offset: int, length: int): HttpRequest$BodyPublisher;
          ofByteArrays(iter: java.lang.Iterable<byte[]>): HttpRequest$BodyPublisher;
          ofFile(path: java.nio.file.Path): HttpRequest$BodyPublisher;
          ofInputStream(streamSupplier: java.util.function.Supplier<java.io.InputStream>): HttpRequest$BodyPublisher;
          ofString(body: string): HttpRequest$BodyPublisher;
          ofString(s: string, charset: java.nio.charset.Charset): HttpRequest$BodyPublisher;
        }
        let HttpRequest$BodyPublishers: _HttpRequest$BodyPublishers$$static;
        interface _HttpRequest$BodyPublishers {
        }
        interface HttpRequest$BodyPublishers extends CombineTypes<[_HttpRequest$BodyPublishers, java.lang.Object]> {}
        interface _HttpRequest$Builder$$static extends ClassLike {
        }
        let HttpRequest$Builder: _HttpRequest$Builder$$static;
        interface _HttpRequest$Builder {
          DELETE(): HttpRequest$Builder;
          GET(): HttpRequest$Builder;
          HEAD(): HttpRequest$Builder;
          POST(a0: HttpRequest$BodyPublisher): HttpRequest$Builder;
          PUT(a0: HttpRequest$BodyPublisher): HttpRequest$Builder;
          build(): HttpRequest;
          copy(): HttpRequest$Builder;
          expectContinue(a0: boolean): HttpRequest$Builder;
          header(a0: string, a1: string): HttpRequest$Builder;
          headers(a0: string[]): HttpRequest$Builder;
          headers(...a0: string[]): HttpRequest$Builder;
          method(a0: string, a1: HttpRequest$BodyPublisher): HttpRequest$Builder;
          setHeader(a0: string, a1: string): HttpRequest$Builder;
          timeout(a0: java.time.Duration): HttpRequest$Builder;
          uri(a0: URI): HttpRequest$Builder;
          version(a0: HttpClient$Version): HttpRequest$Builder;
        }
        interface HttpRequest$Builder extends CombineTypes<[_HttpRequest$Builder, java.lang.Object]> {}
        interface _HttpResponse$$static<T> extends ClassLike {
        }
        let HttpResponse: _HttpResponse$$static<T>;
        interface _HttpResponse<T> {
          body(): T;
          headers(): HttpHeaders;
          previousResponse(): java.util.Optional<HttpResponse<T>>;
          request(): HttpRequest;
          sslSession(): java.util.Optional<javax.net.ssl.SSLSession>;
          statusCode(): int;
          uri(): URI;
          version(): HttpClient$Version;
        }
        interface HttpResponse<T> extends CombineTypes<[_HttpResponse<T>, java.lang.Object]> {}
        interface _HttpResponse$BodyHandler$$static<T> extends ClassLike {
        }
        let HttpResponse$BodyHandler: _HttpResponse$BodyHandler$$static<T>;
        interface _HttpResponse$BodyHandler<T> {
          apply(a0: HttpResponse$ResponseInfo): HttpResponse$BodySubscriber<T>;
(a0: HttpResponse$ResponseInfo): HttpResponse$BodySubscriber<T>;
        }
        interface HttpResponse$BodyHandler<T> extends CombineTypes<[_HttpResponse$BodyHandler<T>, java.lang.Object]> {}
        interface _HttpResponse$BodyHandlers$$static extends ClassLike {
          buffering<T>(downstreamHandler: HttpResponse$BodyHandler<T>, bufferSize: int): HttpResponse$BodyHandler<T>;
          discarding(): HttpResponse$BodyHandler<java.lang.Void>;
          fromLineSubscriber(subscriber: java.util.concurrent.Flow$Subscriber<string>): HttpResponse$BodyHandler<java.lang.Void>;
          fromLineSubscriber<S, T>(subscriber: S, finisher: java.util.function.Function<S,T>, lineSeparator: string): HttpResponse$BodyHandler<T>;
          fromSubscriber(subscriber: java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>): HttpResponse$BodyHandler<java.lang.Void>;
          fromSubscriber<S, T>(subscriber: S, finisher: java.util.function.Function<S,T>): HttpResponse$BodyHandler<T>;
          ofByteArray(): HttpResponse$BodyHandler<byte[]>;
          ofByteArrayConsumer(consumer: java.util.function.Consumer<java.util.Optional<byte[]>>): HttpResponse$BodyHandler<java.lang.Void>;
          ofFile(file: java.nio.file.Path, openOptions: java.nio.file.OpenOption[]): HttpResponse$BodyHandler<java.nio.file.Path>;
          ofFile(file: java.nio.file.Path, ...openOptions: java.nio.file.OpenOption[]): HttpResponse$BodyHandler<java.nio.file.Path>;
          ofFile(file: java.nio.file.Path): HttpResponse$BodyHandler<java.nio.file.Path>;
          ofFileDownload(directory: java.nio.file.Path, openOptions: java.nio.file.OpenOption[]): HttpResponse$BodyHandler<java.nio.file.Path>;
          ofFileDownload(directory: java.nio.file.Path, ...openOptions: java.nio.file.OpenOption[]): HttpResponse$BodyHandler<java.nio.file.Path>;
          ofInputStream(): HttpResponse$BodyHandler<java.io.InputStream>;
          ofLines(): HttpResponse$BodyHandler<java.util.stream.Stream<string>>;
          ofPublisher(): HttpResponse$BodyHandler<java.util.concurrent.Flow$Publisher<java.util.List<java.nio.ByteBuffer>>>;
          ofString(charset: java.nio.charset.Charset): HttpResponse$BodyHandler<string>;
          ofString(): HttpResponse$BodyHandler<string>;
          replacing<U>(value: U): HttpResponse$BodyHandler<U>;
        }
        let HttpResponse$BodyHandlers: _HttpResponse$BodyHandlers$$static;
        interface _HttpResponse$BodyHandlers {
        }
        interface HttpResponse$BodyHandlers extends CombineTypes<[_HttpResponse$BodyHandlers, java.lang.Object]> {}
        interface _HttpResponse$BodySubscriber$$static<T> extends ClassLike {
        }
        let HttpResponse$BodySubscriber: _HttpResponse$BodySubscriber$$static<T>;
        interface _HttpResponse$BodySubscriber<T> {
          getBody(): java.util.concurrent.CompletionStage<T>;
(): java.util.concurrent.CompletionStage<T>;
        }
        interface HttpResponse$BodySubscriber<T> extends CombineTypes<[_HttpResponse$BodySubscriber<T>, java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>, java.lang.Object]> {}
        interface _HttpResponse$BodySubscribers$$static extends ClassLike {
          buffering<T>(downstream: HttpResponse$BodySubscriber<T>, bufferSize: int): HttpResponse$BodySubscriber<T>;
          discarding(): HttpResponse$BodySubscriber<java.lang.Void>;
          fromLineSubscriber(subscriber: java.util.concurrent.Flow$Subscriber<string>): HttpResponse$BodySubscriber<java.lang.Void>;
          fromLineSubscriber<S, T>(subscriber: S, finisher: java.util.function.Function<S,T>, charset: java.nio.charset.Charset, lineSeparator: string): HttpResponse$BodySubscriber<T>;
          fromSubscriber(subscriber: java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>): HttpResponse$BodySubscriber<java.lang.Void>;
          fromSubscriber<S, T>(subscriber: S, finisher: java.util.function.Function<S,T>): HttpResponse$BodySubscriber<T>;
          mapping<T, U>(upstream: HttpResponse$BodySubscriber<T>, mapper: java.util.function.Function<T,U>): HttpResponse$BodySubscriber<U>;
          ofByteArray(): HttpResponse$BodySubscriber<byte[]>;
          ofByteArrayConsumer(consumer: java.util.function.Consumer<java.util.Optional<byte[]>>): HttpResponse$BodySubscriber<java.lang.Void>;
          ofFile(file: java.nio.file.Path, openOptions: java.nio.file.OpenOption[]): HttpResponse$BodySubscriber<java.nio.file.Path>;
          ofFile(file: java.nio.file.Path, ...openOptions: java.nio.file.OpenOption[]): HttpResponse$BodySubscriber<java.nio.file.Path>;
          ofFile(file: java.nio.file.Path): HttpResponse$BodySubscriber<java.nio.file.Path>;
          ofInputStream(): HttpResponse$BodySubscriber<java.io.InputStream>;
          ofLines(charset: java.nio.charset.Charset): HttpResponse$BodySubscriber<java.util.stream.Stream<string>>;
          ofPublisher(): HttpResponse$BodySubscriber<java.util.concurrent.Flow$Publisher<java.util.List<java.nio.ByteBuffer>>>;
          ofString(charset: java.nio.charset.Charset): HttpResponse$BodySubscriber<string>;
          replacing<U>(value: U): HttpResponse$BodySubscriber<U>;
        }
        let HttpResponse$BodySubscribers: _HttpResponse$BodySubscribers$$static;
        interface _HttpResponse$BodySubscribers {
        }
        interface HttpResponse$BodySubscribers extends CombineTypes<[_HttpResponse$BodySubscribers, java.lang.Object]> {}
        interface _HttpResponse$PushPromiseHandler$$static<T> extends ClassLike {
          of<T>(pushPromiseHandler: java.util.function.Function<HttpRequest,HttpResponse$BodyHandler<T>>, pushPromisesMap: java.util.concurrent.ConcurrentMap<HttpRequest,java.util.concurrent.CompletableFuture<HttpResponse<T>>>): HttpResponse$PushPromiseHandler<T>;
        }
        let HttpResponse$PushPromiseHandler: _HttpResponse$PushPromiseHandler$$static<T>;
        interface _HttpResponse$PushPromiseHandler<T> {
          applyPushPromise(a0: HttpRequest, a1: HttpRequest, a2: java.util.function.Function<HttpResponse$BodyHandler<T>,java.util.concurrent.CompletableFuture<HttpResponse<T>>>): void;
(a0: HttpRequest, a1: HttpRequest, a2: java.util.function.Function<HttpResponse$BodyHandler<T>,java.util.concurrent.CompletableFuture<HttpResponse<T>>>): void;
        }
        interface HttpResponse$PushPromiseHandler<T> extends CombineTypes<[_HttpResponse$PushPromiseHandler<T>, java.lang.Object]> {}
        interface _HttpResponse$ResponseInfo$$static extends ClassLike {
        }
        let HttpResponse$ResponseInfo: _HttpResponse$ResponseInfo$$static;
        interface _HttpResponse$ResponseInfo {
          headers(): HttpHeaders;
          statusCode(): int;
          version(): HttpClient$Version;
        }
        interface HttpResponse$ResponseInfo extends CombineTypes<[_HttpResponse$ResponseInfo, java.lang.Object]> {}
        interface _HttpTimeoutException$$static extends ClassLike {
          _serialVersionUID: long;
          new(message: string): HttpTimeoutException;
        }
        let HttpTimeoutException: _HttpTimeoutException$$static;
        interface _HttpTimeoutException {
        }
        interface HttpTimeoutException extends CombineTypes<[_HttpTimeoutException, java.io.IOException]> {}
        interface _WebSocket$$static extends ClassLike {
          readonly NORMAL_CLOSURE: int;
        }
        let WebSocket: _WebSocket$$static;
        interface _WebSocket {
          abort(): void;
          getSubprotocol(): string;
          isInputClosed(): boolean;
          isOutputClosed(): boolean;
          request(a0: long): void;
          sendBinary(a0: java.nio.ByteBuffer, a1: boolean): java.util.concurrent.CompletableFuture<WebSocket>;
          sendClose(a0: int, a1: string): java.util.concurrent.CompletableFuture<WebSocket>;
          sendPing(a0: java.nio.ByteBuffer): java.util.concurrent.CompletableFuture<WebSocket>;
          sendPong(a0: java.nio.ByteBuffer): java.util.concurrent.CompletableFuture<WebSocket>;
          sendText(a0: WebSocket$charSequence, a1: boolean): java.util.concurrent.CompletableFuture<WebSocket>;
        }
        interface WebSocket extends CombineTypes<[_WebSocket, java.lang.Object]> {}
        interface _WebSocket$Builder$$static extends ClassLike {
        }
        let WebSocket$Builder: _WebSocket$Builder$$static;
        interface _WebSocket$Builder {
          buildAsync(a0: URI, a1: WebSocket$Listener): java.util.concurrent.CompletableFuture<WebSocket>;
          connectTimeout(a0: java.time.Duration): WebSocket$Builder;
          header(a0: string, a1: string): WebSocket$Builder;
          subprotocols(a0: string, a1: string[]): WebSocket$Builder;
          subprotocols(a0: string, ...a1: string[]): WebSocket$Builder;
        }
        interface WebSocket$Builder extends CombineTypes<[_WebSocket$Builder, java.lang.Object]> {}
        interface _WebSocket$Listener$$static extends ClassLike {
        }
        let WebSocket$Listener: _WebSocket$Listener$$static;
        interface _WebSocket$Listener {
          onBinary(webSocket: WebSocket, data: java.nio.ByteBuffer, last: boolean): java.util.concurrent.CompletionStage<any>;
          onClose(webSocket: WebSocket, statusCode: int, reason: string): java.util.concurrent.CompletionStage<any>;
          onError(webSocket: WebSocket, error: java.lang.Throwable): void;
          onOpen(webSocket: WebSocket): void;
          onPing(webSocket: WebSocket, message: java.nio.ByteBuffer): java.util.concurrent.CompletionStage<any>;
          onPong(webSocket: WebSocket, message: java.nio.ByteBuffer): java.util.concurrent.CompletionStage<any>;
          onText(webSocket: WebSocket, data: WebSocket$Listener$charSequence, last: boolean): java.util.concurrent.CompletionStage<any>;
        }
        interface WebSocket$Listener extends CombineTypes<[_WebSocket$Listener, java.lang.Object]> {}
        interface _WebSocketHandshakeException$$static extends ClassLike {
          _serialVersionUID: long;
          new(response: HttpResponse<any>): WebSocketHandshakeException;
        }
        let WebSocketHandshakeException: _WebSocketHandshakeException$$static;
        interface _WebSocketHandshakeException {
          getResponse(): HttpResponse<any>;
          initCause(cause: java.lang.Throwable): WebSocketHandshakeException;
          initCause(a0: java.lang.Throwable): java.lang.Throwable;
          _response: HttpResponse<any>;
        }
        interface WebSocketHandshakeException extends CombineTypes<[_WebSocketHandshakeException, java.io.IOException]> {}
      }
    }
  }
  module jdk {
    module internal {
      module net {
        module http {
          module common {
            interface _BufferSupplier$$static extends ClassLike {
            }
            let BufferSupplier: _BufferSupplier$$static;
            interface _BufferSupplier {
              get(): java.nio.ByteBuffer;
              get(): any;
              recycle(a0: java.nio.ByteBuffer): void;
            }
            interface BufferSupplier extends CombineTypes<[_BufferSupplier, java.lang.Object, java.util.function.Supplier<java.nio.ByteBuffer>]> {}
            interface _Cancelable$$static extends ClassLike {
            }
            let Cancelable: _Cancelable$$static;
            interface _Cancelable {
              cancel(a0: boolean): boolean;
(a0: boolean): boolean;
            }
            interface Cancelable extends CombineTypes<[_Cancelable, java.lang.Object]> {}
            interface _ConnectionExpiredException$$static extends ClassLike {
              _serialVersionUID: long;
              new(cause: java.lang.Throwable): ConnectionExpiredException;
            }
            let ConnectionExpiredException: _ConnectionExpiredException$$static;
            interface _ConnectionExpiredException {
            }
            interface ConnectionExpiredException extends CombineTypes<[_ConnectionExpiredException, java.io.IOException]> {}
            interface _DebugLogger$$static extends ClassLike {
              createHpackLogger(dbgTag: java.util.function.Supplier<string>, config: DebugLogger$LoggerConfig): DebugLogger;
              createHttpLogger(dbgTag: java.util.function.Supplier<string>, config: DebugLogger$LoggerConfig): DebugLogger;
              createWebSocketLogger(dbgTag: java.util.function.Supplier<string>, config: DebugLogger$LoggerConfig): DebugLogger;
              _levelEnabledFor(level: java.lang.System$Logger$Level, config: DebugLogger$LoggerConfig, logger: java.lang.System$Logger): boolean;
              _HPACK: java.lang.System$Logger;
              _HPACK_NAME: string;
              _HTTP: java.lang.System$Logger;
              _HTTP_NAME: string;
              _NO_HPACK_LOGGER: DebugLogger;
              _NO_HTTP_LOGGER: DebugLogger;
              _NO_WS_LOGGER: DebugLogger;
              _START_NANOS: long;
              _WS: java.lang.System$Logger;
              _WS_NAME: string;
            }
            let DebugLogger: _DebugLogger$$static;
            interface _DebugLogger {
              _decorate(sb: DebugLogger$stringBuilder, msg: string): DebugLogger$stringBuilder;
              _format(sb: DebugLogger$stringBuilder, format: string, params: any[]): DebugLogger$stringBuilder;
              _getFormat(sb: DebugLogger$stringBuilder, format: string, params: any[]): DebugLogger$stringBuilder;
              getName(): string;
              _isEnabled(level: java.lang.System$Logger$Level): boolean;
              isLoggable(level: java.lang.System$Logger$Level): boolean;
              log(level: java.lang.System$Logger$Level, unused: java.util.ResourceBundle, format: string, params: any[]): void;
              log(level: java.lang.System$Logger$Level, unused: java.util.ResourceBundle, format: string, ...params: any[]): void;
              log(level: java.lang.System$Logger$Level, unused: java.util.ResourceBundle, msg: string, thrown: java.lang.Throwable): void;
              on(): boolean;
              _print(out: java.io.PrintStream, level: java.lang.System$Logger$Level, msg: string, params: any[], t: java.lang.Throwable): void;
              _config: DebugLogger$LoggerConfig;
              _dbgTag: java.util.function.Supplier<string>;
              _debugOn: boolean;
              _logger: java.lang.System$Logger;
              _minSeverity: int;
              _traceOn: boolean;
            }
            interface DebugLogger extends CombineTypes<[_DebugLogger, jdk.internal.net.http.common.Logger, java.lang.Object]> {}
            interface _DebugLogger$LoggerConfig$$static extends ClassLike {
              of(config: DebugLogger$LoggerConfig): DebugLogger$LoggerConfig;
              new(outLevel: java.lang.System$Logger$Level, errLevel: java.lang.System$Logger$Level, logLevel: java.lang.System$Logger$Level): DebugLogger$LoggerConfig;
            }
            let DebugLogger$LoggerConfig: _DebugLogger$LoggerConfig$$static;
            interface _DebugLogger$LoggerConfig {
              equals(o: any): boolean;
              errLevel(): java.lang.System$Logger$Level;
              hashCode(): int;
              levelEnabledFor(level: java.lang.System$Logger$Level, logger: java.lang.System$Logger): boolean;
              logLevel(): java.lang.System$Logger$Level;
              minSeverity(): int;
              on(): boolean;
              outLevel(): java.lang.System$Logger$Level;
              toString(): string;
              withErrLevel(errLevel: java.lang.System$Logger$Level): DebugLogger$LoggerConfig;
              withLogLevel(logLevel: java.lang.System$Logger$Level): DebugLogger$LoggerConfig;
              withOutLevel(outLevel: java.lang.System$Logger$Level): DebugLogger$LoggerConfig;
            }
            interface DebugLogger$LoggerConfig extends CombineTypes<[_DebugLogger$LoggerConfig, java.lang.Record]> {}
            interface _Demand$$static extends ClassLike {
              new(): Demand;
            }
            let Demand: _Demand$$static;
            interface _Demand {
              decreaseAndGet(n: long): long;
              get(): long;
              increase(n: long): boolean;
              increaseIfFulfilled(): boolean;
              isFulfilled(): boolean;
              reset(): void;
              toString(): string;
              tryDecrement(): boolean;
              _val: java.util.concurrent.atomic.AtomicLong;
            }
            interface Demand extends CombineTypes<[_Demand, java.lang.Object]> {}
            interface _FlowTube$$static extends ClassLike {
              asTubePublisher(p: java.util.concurrent.Flow$Publisher<java.util.List<java.nio.ByteBuffer>>): FlowTube$TubePublisher;
              asTubeSubscriber(s: java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>): FlowTube$TubeSubscriber;
            }
            let FlowTube: _FlowTube$$static;
            interface _FlowTube {
              connectFlows(writePublisher: FlowTube$TubePublisher, readSubscriber: FlowTube$TubeSubscriber): void;
              isFinished(): boolean;
(): boolean;
            }
            interface FlowTube extends CombineTypes<[_FlowTube, java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>, java.lang.Object, java.util.concurrent.Flow$Publisher<java.util.List<java.nio.ByteBuffer>>]> {}
            interface _FlowTube$AbstractTubePublisher$$static extends ClassLike {
              new(): FlowTube$AbstractTubePublisher;
            }
            let FlowTube$AbstractTubePublisher: _FlowTube$AbstractTubePublisher$$static;
            interface _FlowTube$AbstractTubePublisher {
            }
            interface FlowTube$AbstractTubePublisher extends CombineTypes<[_FlowTube$AbstractTubePublisher, jdk.internal.net.http.common.FlowTube$TubePublisher, java.lang.Object]> {}
            interface _FlowTube$AbstractTubePublisher$TubePublisherWrapper$$static extends ClassLike {
              new(delegate: java.util.concurrent.Flow$Publisher<java.util.List<java.nio.ByteBuffer>>): FlowTube$AbstractTubePublisher$TubePublisherWrapper;
            }
            let FlowTube$AbstractTubePublisher$TubePublisherWrapper: _FlowTube$AbstractTubePublisher$TubePublisherWrapper$$static;
            interface _FlowTube$AbstractTubePublisher$TubePublisherWrapper {
              subscribe(subscriber: java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>): void;
              _delegate: java.util.concurrent.Flow$Publisher<java.util.List<java.nio.ByteBuffer>>;
            }
            interface FlowTube$AbstractTubePublisher$TubePublisherWrapper extends CombineTypes<[_FlowTube$AbstractTubePublisher$TubePublisherWrapper, jdk.internal.net.http.common.FlowTube$AbstractTubePublisher]> {}
            interface _FlowTube$AbstractTubeSubscriber$$static extends ClassLike {
              new(): FlowTube$AbstractTubeSubscriber;
            }
            let FlowTube$AbstractTubeSubscriber: _FlowTube$AbstractTubeSubscriber$$static;
            interface _FlowTube$AbstractTubeSubscriber {
            }
            interface FlowTube$AbstractTubeSubscriber extends CombineTypes<[_FlowTube$AbstractTubeSubscriber, jdk.internal.net.http.common.FlowTube$TubeSubscriber, java.lang.Object]> {}
            interface _FlowTube$AbstractTubeSubscriber$TubeSubscriberWrapper$$static extends ClassLike {
              _new(delegate: java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>): FlowTube$AbstractTubeSubscriber$TubeSubscriberWrapper;
            }
            let FlowTube$AbstractTubeSubscriber$TubeSubscriberWrapper: _FlowTube$AbstractTubeSubscriber$TubeSubscriberWrapper$$static;
            interface _FlowTube$AbstractTubeSubscriber$TubeSubscriberWrapper {
              dropSubscription(): void;
              onComplete(): void;
              onError(throwable: java.lang.Throwable): void;
              onNext(item: java.util.List<java.nio.ByteBuffer>): void;
              onNext(a0: any): void;
              onSubscribe(subscription: java.util.concurrent.Flow$Subscription): void;
              _delegate: java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>;
            }
            interface FlowTube$AbstractTubeSubscriber$TubeSubscriberWrapper extends CombineTypes<[_FlowTube$AbstractTubeSubscriber$TubeSubscriberWrapper, jdk.internal.net.http.common.FlowTube$AbstractTubeSubscriber]> {}
            interface _FlowTube$TubePublisher$$static extends ClassLike {
            }
            let FlowTube$TubePublisher: _FlowTube$TubePublisher$$static;
            interface _FlowTube$TubePublisher {
            }
            interface FlowTube$TubePublisher extends CombineTypes<[_FlowTube$TubePublisher, java.lang.Object, java.util.concurrent.Flow$Publisher<java.util.List<java.nio.ByteBuffer>>]> {}
            interface _FlowTube$TubeSubscriber$$static extends ClassLike {
            }
            let FlowTube$TubeSubscriber: _FlowTube$TubeSubscriber$$static;
            interface _FlowTube$TubeSubscriber {
              dropSubscription(): void;
              supportsRecycling(): boolean;
            }
            interface FlowTube$TubeSubscriber extends CombineTypes<[_FlowTube$TubeSubscriber, java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>, java.lang.Object]> {}
            interface _HeaderDecoder$$static extends ClassLike {
              new(): HeaderDecoder;
            }
            let HeaderDecoder: _HeaderDecoder$$static;
            interface _HeaderDecoder {
              _addHeader(name: string, value: string): void;
              headers(): java.net.http.HttpHeaders;
              onDecoded(name: HeaderDecoder$charSequence, value: HeaderDecoder$charSequence): void;
              _headersBuilder: HttpHeadersBuilder;
            }
            interface HeaderDecoder extends CombineTypes<[_HeaderDecoder, jdk.internal.net.http.common.ValidatingHeadersConsumer]> {}
            interface _HttpBodySubscriberWrapper$$static<T> extends ClassLike {
              _CANCELLED: int;
              readonly COMPARE_BY_ID: java.util.Comparator<HttpBodySubscriberWrapper<any>>;
              _COMPLETED: int;
              _IDS: java.util.concurrent.atomic.AtomicLong;
              readonly NOP: java.util.concurrent.Flow$Subscription;
              _REGISTERED: int;
              _SUBSCRIBED: int;
              _UNREGISTERED: int;
              new(userSubscriber: java.net.http.HttpResponse$BodySubscriber<T>): HttpBodySubscriberWrapper<T>;
            }
            let HttpBodySubscriberWrapper: _HttpBodySubscriberWrapper$$static<T>;
            interface _HttpBodySubscriberWrapper<T> {
              cancelled(): boolean;
              complete(t: java.lang.Throwable): void;
              completed(): boolean;
              getBody(): java.util.concurrent.CompletionStage<T>;
              _id(): long;
              _markCancelled(): boolean;
              _markCompleted(): boolean;
              _markRegistered(): boolean;
              _markState(flag: int): boolean;
              _markSubscribed(): boolean;
              _markUnregistered(): boolean;
              needsExecutor(): boolean;
              _onCancel(): void;
              onComplete(): void;
              onError(throwable: java.lang.Throwable): void;
              onNext(item: java.util.List<java.nio.ByteBuffer>): void;
              onNext(a0: any): void;
              onSubscribe(subscription: java.util.concurrent.Flow$Subscription): void;
              _propagateError(t: java.lang.Throwable): void;
              _register(): void;
              registered(): boolean;
              subscribed(): boolean;
              _tryRegister(): boolean;
              _tryUnregister(): boolean;
              _unregister(): void;
              unregistered(): boolean;
              _id: long;
              _state: int;
              _subscription: common$SubscriptionWrapper;
              _subscriptionLock: java.util.concurrent.locks.ReentrantLock;
              _userSubscriber: java.net.http.HttpResponse$BodySubscriber<T>;
              _withError: java.lang.Throwable;
            }
            interface HttpBodySubscriberWrapper<T> extends CombineTypes<[_HttpBodySubscriberWrapper<T>, java.lang.Object, ResponseSubscribers$TrustedSubscriber<T>]> {}
            interface _HttpBodySubscriberWrapper$SubscriptionWrapper$$static extends ClassLike {
              _new(a0: HttpBodySubscriberWrapper, s: java.util.concurrent.Flow$Subscription): HttpBodySubscriberWrapper$SubscriptionWrapper;
            }
            let HttpBodySubscriberWrapper$SubscriptionWrapper: _HttpBodySubscriberWrapper$SubscriptionWrapper$$static;
            interface _HttpBodySubscriberWrapper$SubscriptionWrapper {
              cancel(): void;
              request(n: long): void;
              _subscription: java.util.concurrent.Flow$Subscription;
              _this$0: HttpBodySubscriberWrapper;
            }
            interface HttpBodySubscriberWrapper$SubscriptionWrapper extends CombineTypes<[_HttpBodySubscriberWrapper$SubscriptionWrapper, java.lang.Object, java.util.concurrent.Flow$Subscription]> {}
            interface _HttpHeadersBuilder$$static extends ClassLike {
              new(): HttpHeadersBuilder;
            }
            let HttpHeadersBuilder: _HttpHeadersBuilder$$static;
            interface _HttpHeadersBuilder {
              addHeader(name: string, value: string): void;
              build(): java.net.http.HttpHeaders;
              clear(): void;
              map(): java.util.Map<string,java.util.List<string>>;
              setHeader(name: string, value: string): void;
              structuralCopy(): HttpHeadersBuilder;
              toString(): string;
              _headersMap: java.util.TreeMap<string,java.util.List<string>>;
            }
            interface HttpHeadersBuilder extends CombineTypes<[_HttpHeadersBuilder, java.lang.Object]> {}
            interface _ImmutableExtendedSSLSession$$static extends ClassLike {
              _new(session: javax.net.ssl.ExtendedSSLSession): ImmutableExtendedSSLSession;
            }
            let ImmutableExtendedSSLSession: _ImmutableExtendedSSLSession$$static;
            interface _ImmutableExtendedSSLSession {
              getApplicationBufferSize(): int;
              getCipherSuite(): string;
              getCreationTime(): long;
              getId(): byte[];
              getLastAccessedTime(): long;
              getLocalCertificates(): java.security.cert.Certificate[];
              getLocalPrincipal(): java.security.Principal;
              getLocalSupportedSignatureAlgorithms(): string[];
              getPacketBufferSize(): int;
              getPeerCertificates(): java.security.cert.Certificate[];
              getPeerHost(): string;
              getPeerPort(): int;
              getPeerPrincipal(): java.security.Principal;
              getPeerSupportedSignatureAlgorithms(): string[];
              getProtocol(): string;
              getRequestedServerNames(): java.util.List<javax.net.ssl.SNIServerName>;
              getSessionContext(): javax.net.ssl.SSLSessionContext;
              getStatusResponses(): java.util.List<byte[]>;
              getValue(name: string): any;
              getValueNames(): string[];
              invalidate(): void;
              isValid(): boolean;
              putValue(name: string, value: any): void;
              removeValue(name: string): void;
              _delegate: javax.net.ssl.ExtendedSSLSession;
            }
            interface ImmutableExtendedSSLSession extends CombineTypes<[_ImmutableExtendedSSLSession, javax.net.ssl.ExtendedSSLSession]> {}
            interface _ImmutableSSLSession$$static extends ClassLike {
              _new(session: javax.net.ssl.SSLSession): ImmutableSSLSession;
            }
            let ImmutableSSLSession: _ImmutableSSLSession$$static;
            interface _ImmutableSSLSession {
              getApplicationBufferSize(): int;
              getCipherSuite(): string;
              getCreationTime(): long;
              getId(): byte[];
              getLastAccessedTime(): long;
              getLocalCertificates(): java.security.cert.Certificate[];
              getLocalPrincipal(): java.security.Principal;
              getPacketBufferSize(): int;
              getPeerCertificates(): java.security.cert.Certificate[];
              getPeerHost(): string;
              getPeerPort(): int;
              getPeerPrincipal(): java.security.Principal;
              getProtocol(): string;
              getSessionContext(): javax.net.ssl.SSLSessionContext;
              getValue(name: string): any;
              getValueNames(): string[];
              invalidate(): void;
              isValid(): boolean;
              putValue(name: string, value: any): void;
              removeValue(name: string): void;
              _delegate: javax.net.ssl.SSLSession;
            }
            interface ImmutableSSLSession extends CombineTypes<[_ImmutableSSLSession, javax.net.ssl.SSLSession, java.lang.Object]> {}
            interface _Log$$static extends ClassLike {
              channel(): boolean;
              dumpHeaders(sb: Log$stringBuilder, prefix: string, headers: java.net.http.HttpHeaders): void;
              errors(): boolean;
              frames(): boolean;
              headers(): boolean;
              logChannel(s: string, s1: any[]): void;
              logChannel(s: string, ...s1: any[]): void;
              logChannel(msgSupplier: java.util.function.Supplier<string>): void;
              logError(s: string, s1: any[]): void;
              logError(s: string, ...s1: any[]): void;
              logError(t: java.lang.Throwable): void;
              logFrames(f: http.frame.Http2Frame, direction: string): void;
              logHeaders(s: string, s1: any[]): void;
              logHeaders(s: string, ...s1: any[]): void;
              logParams(p: javax.net.ssl.SSLParameters): void;
              logRequest(s: string, s1: any[]): void;
              logRequest(s: string, ...s1: any[]): void;
              logResponse(supplier: java.util.function.Supplier<string>): void;
              logSSL(s: string, s1: any[]): void;
              logSSL(s: string, ...s1: any[]): void;
              logSSL(msgSupplier: java.util.function.Supplier<string>): void;
              logTrace(s: string, s1: any[]): void;
              logTrace(s: string, ...s1: any[]): void;
              loggingFrame(clazz: java.lang.Class<http.frame.Http2Frame>): boolean;
              requests(): boolean;
              ssl(): boolean;
              trace(): boolean;
              readonly ALL: int;
              readonly CHANNEL: int;
              readonly CONTENT: int;
              readonly CONTROL: int;
              readonly DATA: int;
              readonly ERRORS: int;
              readonly FRAMES: int;
              readonly HEADERS: int;
              readonly OFF: int;
              readonly REQUESTS: int;
              readonly SSL: int;
              readonly TRACE: int;
              readonly WINDOW_UPDATES: int;
              _frametypes: int;
              _logProp: string;
              _logger: java.lang.System$Logger;
              _logging: int;
            }
            let Log: _Log$$static;
            interface _Log {
            }
            interface Log extends CombineTypes<[_Log, java.lang.System$Logger, java.lang.Object]> {}
            interface _Logger$$static extends ClassLike {
            }
            let Logger: _Logger$$static;
            interface _Logger {
              log(msg: string): void;
              log(msgSupplier: java.util.function.Supplier<string>): void;
              log(obj: any): void;
              log(msg: string, thrown: java.lang.Throwable): void;
              log(msgSupplier: java.util.function.Supplier<string>, thrown: java.lang.Throwable): void;
              log(format: string, params: any[]): void;
              log(format: string, ...params: any[]): void;
              on(): boolean;
            }
            interface Logger extends CombineTypes<[_Logger, java.lang.System$Logger, java.lang.Object]> {}
            interface _MinimalFuture$$static<T> extends ClassLike {
              _complete<U>(cf: java.util.concurrent.CompletableFuture<U>, result: U, t: java.lang.Throwable): void;
              completedFuture<U>(value: U): MinimalFuture<U>;
              failedFuture<U>(ex: java.lang.Throwable): java.util.concurrent.CompletableFuture<U>;
              of<U>(stage: java.util.concurrent.CompletionStage<U>): MinimalFuture<U>;
              supply<U>(supplier: MinimalFuture$ExceptionalSupplier<U>): java.util.concurrent.CompletableFuture<U>;
              _TOKENS: java.util.concurrent.atomic.AtomicLong;
              new(): MinimalFuture<T>;
              new(cancelable: Cancelable): MinimalFuture<T>;
            }
            let MinimalFuture: _MinimalFuture$$static<T>;
            interface _MinimalFuture<T> {
              cancel(mayInterruptIfRunning: boolean): boolean;
              _cancelable(): Cancelable;
              newIncompleteFuture<U>(): MinimalFuture<U>;
              newIncompleteFuture(): java.util.concurrent.CompletableFuture;
              obtrudeException(ex: java.lang.Throwable): void;
              obtrudeValue(value: T): void;
              toString(): string;
              _cancelable: Cancelable;
              _id: long;
            }
            interface MinimalFuture<T> extends CombineTypes<[_MinimalFuture<T>, java.util.concurrent.CompletableFuture<T>]> {}
            interface _MinimalFuture$ExceptionalSupplier$$static<U> extends ClassLike {
            }
            let MinimalFuture$ExceptionalSupplier: _MinimalFuture$ExceptionalSupplier$$static<U>;
            interface _MinimalFuture$ExceptionalSupplier<U> {
              get(): U;
(): U;
            }
            interface MinimalFuture$ExceptionalSupplier<U> extends CombineTypes<[_MinimalFuture$ExceptionalSupplier<U>, java.lang.Object]> {}
            interface _OperationTrackers$$static extends ClassLike {
              getTracker(client: java.net.http.HttpClient): OperationTrackers$Tracker;
            }
            let OperationTrackers: _OperationTrackers$$static;
            interface _OperationTrackers {
            }
            interface OperationTrackers extends CombineTypes<[_OperationTrackers, java.lang.Object]> {}
            interface _OperationTrackers$Trackable$$static extends ClassLike {
            }
            let OperationTrackers$Trackable: _OperationTrackers$Trackable$$static;
            interface _OperationTrackers$Trackable {
              getOperationsTracker(): OperationTrackers$Tracker;
(): OperationTrackers$Tracker;
            }
            interface OperationTrackers$Trackable extends CombineTypes<[_OperationTrackers$Trackable, java.lang.Object]> {}
            interface _OperationTrackers$Tracker$$static extends ClassLike {
            }
            let OperationTrackers$Tracker: _OperationTrackers$Tracker$$static;
            interface _OperationTrackers$Tracker {
              getName(): string;
              getOutstandingHttp2Streams(): long;
              getOutstandingHttpOperations(): long;
              getOutstandingHttpRequests(): long;
              getOutstandingOperations(): long;
              getOutstandingSubscribers(): long;
              getOutstandingTcpConnections(): long;
              getOutstandingWebSocketOperations(): long;
              isFacadeReferenced(): boolean;
              isImplementationReferenced(): boolean;
              isSelectorAlive(): boolean;
            }
            interface OperationTrackers$Tracker extends CombineTypes<[_OperationTrackers$Tracker, java.lang.Object]> {}
            interface _Pair$$static<T,U> extends ClassLike {
              pair<T, U>(first: T, second: U): Pair<T,U>;
              new(first: T, second: U): Pair<T,U>;
            }
            let Pair: _Pair$$static<T,U>;
            interface _Pair<T,U> {
              toString(): string;
              readonly first: T;
              readonly second: U;
            }
            interface Pair<T,U> extends CombineTypes<[_Pair<T,U>, java.lang.Object]> {}
            interface _SSLFlowDelegate$$static extends ClassLike {
              _states(state: java.util.concurrent.atomic.AtomicInteger): string;
              _DOING_TASKS: int;
              _FINISH_OR_DO_TASKS: java.util.function.IntBinaryOperator;
              _HANDSHAKING: int;
              _HS_TRIGGER: java.nio.ByteBuffer;
              _NOTHING: java.nio.ByteBuffer;
              _NOT_HANDSHAKING: int;
              _READER: int;
              _REQUESTING_TASKS: int;
              _REQUEST_OR_DO_TASKS: java.util.function.IntBinaryOperator;
              _SENTINEL: java.nio.ByteBuffer;
              _TASK_BITS: int;
              _WRITER: int;
              _isMonitored: boolean;
              _monProp: string;
              _scount: java.util.concurrent.atomic.AtomicInteger;
              new(engine: javax.net.ssl.SSLEngine, exec: java.util.concurrent.Executor, downReader: java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>, downWriter: java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>): SSLFlowDelegate;
              new(engine: javax.net.ssl.SSLEngine, exec: java.util.concurrent.Executor, recycler: java.util.function.Consumer<java.nio.ByteBuffer>, downReader: java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>, downWriter: java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>): SSLFlowDelegate;
            }
            let SSLFlowDelegate: _SSLFlowDelegate$$static;
            interface _SSLFlowDelegate {
              alpn(): java.util.concurrent.CompletableFuture<string>;
              _checkForHandshake(t: java.lang.Throwable): java.lang.Throwable;
              _cleanList(l: java.util.List<java.nio.ByteBuffer>): void;
              closeNotifyReceived(): boolean;
              _connect(downReader: java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>, downWriter: java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>): void;
              _dbgString(): string;
              _doClosure(r: SSLFlowDelegate$EngineResult): SSLFlowDelegate$EngineResult;
              _doHandshake(r: SSLFlowDelegate$EngineResult, caller: int): boolean;
              _enterReadScheduling(): SubscriberWrapper$SchedulingAction;
              _executeTasks(tasks: java.util.List<java.lang.Runnable>): void;
              _getAppBuffer(): java.nio.ByteBuffer;
              _getNetBuffer(): java.nio.ByteBuffer;
              _handleError(t: java.lang.Throwable): void;
              monitor(): string;
              _normalStop(): void;
              _obtainTasks(): java.util.List<java.lang.Runnable>;
              resetReaderDemand(): void;
              _resumeActivity(): void;
              resumeReader(): boolean;
              _setALPN(): void;
              _stopOnError(error: java.lang.Throwable): java.lang.Void;
              _trySetALPN(): boolean;
              upstreamReader(): java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>;
              upstreamWriter(): java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>;
              _adaptiveAppBufferSize: int;
              _alpnCF: java.util.concurrent.CompletableFuture<string>;
              _applicationBufferSize: int;
              _close_notify_received: boolean;
              _debug: Logger;
              _engine: javax.net.ssl.SSLEngine;
              _exec: java.util.concurrent.Executor;
              _handshakeState: java.util.concurrent.atomic.AtomicInteger;
              _id: int;
              _monitor: SSLFlowDelegate$Monitorable;
              _packetBufferSize: int;
              _reader: SSLFlowDelegate$Reader;
              _readerCF: java.util.concurrent.CompletableFuture<java.lang.Void>;
              _recycler: java.util.function.Consumer<java.nio.ByteBuffer>;
              _stateList: java.util.concurrent.ConcurrentLinkedQueue<string>;
              _stopCF: java.util.concurrent.CompletableFuture<java.lang.Void>;
              _stopped: boolean;
              _tubeName: string;
              _writer: SSLFlowDelegate$Writer;
              _writerCF: java.util.concurrent.CompletableFuture<java.lang.Void>;
            }
            interface SSLFlowDelegate extends CombineTypes<[_SSLFlowDelegate, java.lang.Object]> {}
            interface _SSLFlowDelegate$EngineResult$$static extends ClassLike {
              _new(result: javax.net.ssl.SSLEngineResult): SSLFlowDelegate$EngineResult;
              _new(result: javax.net.ssl.SSLEngineResult, destBuffer: java.nio.ByteBuffer): SSLFlowDelegate$EngineResult;
            }
            let SSLFlowDelegate$EngineResult: _SSLFlowDelegate$EngineResult$$static;
            interface _SSLFlowDelegate$EngineResult {
              _bytesConsumed(): int;
              _bytesProduced(): int;
              _handshakeStatus(): javax.net.ssl.SSLEngineResult$HandshakeStatus;
              _handshaking(): boolean;
              _needUnwrap(): boolean;
              _status(): javax.net.ssl.SSLEngineResult$Status;
              _destBuffer: java.nio.ByteBuffer;
              _result: javax.net.ssl.SSLEngineResult;
            }
            interface SSLFlowDelegate$EngineResult extends CombineTypes<[_SSLFlowDelegate$EngineResult, java.lang.Object]> {}
            interface _SSLFlowDelegate$Monitor$$static extends ClassLike {
              add(o: SSLFlowDelegate$Monitorable): void;
              remove(o: SSLFlowDelegate$Monitorable): void;
              _themon: SSLFlowDelegate$Monitor;
              _new(): SSLFlowDelegate$Monitor;
            }
            let SSLFlowDelegate$Monitor: _SSLFlowDelegate$Monitor$$static;
            interface _SSLFlowDelegate$Monitor {
              _addTarget(o: SSLFlowDelegate$Monitorable): void;
              _removeTarget(o: SSLFlowDelegate$Monitorable): void;
              run(): void;
              _finalList: java.util.List<SSLFlowDelegate$Monitor$FinalMonitorable>;
              _list: java.util.List<java.lang.ref.WeakReference<SSLFlowDelegate$Monitorable>>;
              _queue: java.lang.ref.ReferenceQueue<SSLFlowDelegate$Monitorable>;
            }
            interface SSLFlowDelegate$Monitor extends CombineTypes<[_SSLFlowDelegate$Monitor, java.lang.Thread]> {}
            interface _SSLFlowDelegate$Monitor$FinalMonitorable$$static extends ClassLike {
              _new(this$0: SSLFlowDelegate$Monitor, o: SSLFlowDelegate$Monitorable): SSLFlowDelegate$Monitor$FinalMonitorable;
            }
            let SSLFlowDelegate$Monitor$FinalMonitorable: _SSLFlowDelegate$Monitor$FinalMonitorable$$static;
            interface _SSLFlowDelegate$Monitor$FinalMonitorable {
              getInfo(): string;
              _finalState: string;
              _this$0: SSLFlowDelegate$Monitor;
            }
            interface SSLFlowDelegate$Monitor$FinalMonitorable extends CombineTypes<[_SSLFlowDelegate$Monitor$FinalMonitorable, jdk.internal.net.http.common.SSLFlowDelegate$Monitorable, java.lang.Object]> {}
            interface _SSLFlowDelegate$Monitorable$$static extends ClassLike {
            }
            let SSLFlowDelegate$Monitorable: _SSLFlowDelegate$Monitorable$$static;
            interface _SSLFlowDelegate$Monitorable {
              getInfo(): string;
(): string;
            }
            interface SSLFlowDelegate$Monitorable extends CombineTypes<[_SSLFlowDelegate$Monitorable, java.lang.Object]> {}
            interface _SSLFlowDelegate$Reader$$static extends ClassLike {
              _TARGET_BUFSIZE: int;
              _new(this$0: SSLFlowDelegate): SSLFlowDelegate$Reader;
            }
            let SSLFlowDelegate$Reader: _SSLFlowDelegate$Reader$$static;
            interface _SSLFlowDelegate$Reader {
              _addToReadBuf(buffers: java.util.List<java.nio.ByteBuffer>, complete: boolean): void;
              dbgString(): string;
              _enterScheduling(): SubscriberWrapper$SchedulingAction;
              _errorCommon(throwable: java.lang.Throwable): boolean;
              incoming(buffers: java.util.List<java.nio.ByteBuffer>, complete: boolean): void;
              _needsMoreData(): boolean;
              _processData(): void;
              _reallocReadBuf(): void;
              _requestMoreDataIfNeeded(): void;
              _schedule(): void;
              _stop(): void;
              supportsRecycling(): boolean;
              toString(): string;
              _unwrapBuffer(src: java.nio.ByteBuffer): SSLFlowDelegate$EngineResult;
              _upstreamWindowUpdate(currentWindow: long, a1: long): long;
              _completing: boolean;
              _count: java.util.concurrent.atomic.AtomicInteger;
              _debugr: Logger;
              _lastUnwrapStatus: javax.net.ssl.SSLEngineResult$Status;
              _minBytesRequired: int;
              _readBuf: java.nio.ByteBuffer;
              _readBufferLock: java.util.concurrent.locks.ReentrantLock;
              _scheduler: SequentialScheduler;
              _this$0: SSLFlowDelegate;
            }
            interface SSLFlowDelegate$Reader extends CombineTypes<[_SSLFlowDelegate$Reader, jdk.internal.net.http.common.SubscriberWrapper, jdk.internal.net.http.common.FlowTube$TubeSubscriber]> {}
            interface _SSLFlowDelegate$Reader$ReaderDownstreamPusher$$static extends ClassLike {
            }
            let SSLFlowDelegate$Reader$ReaderDownstreamPusher: _SSLFlowDelegate$Reader$ReaderDownstreamPusher$$static;
            interface _SSLFlowDelegate$Reader$ReaderDownstreamPusher {
              run(): void;
              _this$1: SSLFlowDelegate$Reader;
            }
            interface SSLFlowDelegate$Reader$ReaderDownstreamPusher extends CombineTypes<[_SSLFlowDelegate$Reader$ReaderDownstreamPusher, java.lang.Object, java.lang.Runnable]> {}
            interface _SSLFlowDelegate$Writer$$static extends ClassLike {
              _new(this$0: SSLFlowDelegate): SSLFlowDelegate$Writer;
            }
            let SSLFlowDelegate$Writer: _SSLFlowDelegate$Writer$$static;
            interface _SSLFlowDelegate$Writer {
              closing(): boolean;
              dbgString(): string;
              _hsTriggered(): boolean;
              _incoming(buffers: java.util.List<java.nio.ByteBuffer>, complete: boolean): void;
              _isCompleting(): boolean;
              _needWrap(): boolean;
              _onSubscribe(): void;
              _processData(): void;
              _schedule(): void;
              _sendResultBytes(result: SSLFlowDelegate$EngineResult): void;
              _stop(): void;
              toString(): string;
              _triggerWrite(): void;
              _upstreamWindowUpdate(currentWindow: long, a1: long): long;
              _wrapBuffers(src: java.nio.ByteBuffer[]): SSLFlowDelegate$EngineResult;
              _completed: boolean;
              _completing: boolean;
              _debugw: Logger;
              _lastWrappedStatus: javax.net.ssl.SSLEngineResult$Status;
              _scheduler: SequentialScheduler;
              _this$0: SSLFlowDelegate;
              _writeBuffer: java.nio.ByteBuffer;
              _writeList: java.util.List<java.nio.ByteBuffer>;
            }
            interface SSLFlowDelegate$Writer extends CombineTypes<[_SSLFlowDelegate$Writer, jdk.internal.net.http.common.SubscriberWrapper]> {}
            interface _SSLFlowDelegate$Writer$WriterDownstreamPusher$$static extends ClassLike {
              _new(this$1: SSLFlowDelegate$Writer): SSLFlowDelegate$Writer$WriterDownstreamPusher;
            }
            let SSLFlowDelegate$Writer$WriterDownstreamPusher: _SSLFlowDelegate$Writer$WriterDownstreamPusher$$static;
            interface _SSLFlowDelegate$Writer$WriterDownstreamPusher {
              run(): void;
              _this$1: SSLFlowDelegate$Writer;
            }
            interface SSLFlowDelegate$Writer$WriterDownstreamPusher extends CombineTypes<[_SSLFlowDelegate$Writer$WriterDownstreamPusher, jdk.internal.net.http.common.SequentialScheduler$CompleteRestartableTask]> {}
            interface _SSLTube$$static extends ClassLike {
              new(engine: javax.net.ssl.SSLEngine, executor: java.util.concurrent.Executor, tube: FlowTube): SSLTube;
              new(engine: javax.net.ssl.SSLEngine, executor: java.util.concurrent.Executor, recycler: java.util.function.Consumer<java.nio.ByteBuffer>, tube: FlowTube): SSLTube;
            }
            let SSLTube: _SSLTube$$static;
            interface _SSLTube {
              _checkForHandshake(t: java.lang.Throwable): java.lang.Throwable;
              connectFlows(writePub: FlowTube$TubePublisher, readSub: FlowTube$TubeSubscriber): void;
              _dbgString(): string;
              getALPN(): java.util.concurrent.CompletableFuture<string>;
              _handshakeFailed(): string;
              _handshaking(): boolean;
              isFinished(): boolean;
              onComplete(): void;
              onError(throwable: java.lang.Throwable): void;
              onNext(item: java.util.List<java.nio.ByteBuffer>): void;
              onNext(a0: any): void;
              onSubscribe(subscription: java.util.concurrent.Flow$Subscription): void;
              subscribe(s: java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>): void;
              toString(): string;
              _debug: Logger;
              _engine: javax.net.ssl.SSLEngine;
              _finished: boolean;
              _readSubscriber: SSLTube$SSLSubscriberWrapper;
              _readSubscription: java.util.concurrent.Flow$Subscription;
              _sslDelegate: SSLFlowDelegate;
              _tube: FlowTube;
              _writeDemand: Demand;
              _writeSubscription: SSLTube$SSLSubscriptionWrapper;
            }
            interface SSLTube extends CombineTypes<[_SSLTube, jdk.internal.net.http.common.FlowTube, java.lang.Object]> {}
            interface _SSLTube$DelegateWrapper$$static extends ClassLike {
              _new(delegate: java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>, debug: Logger): SSLTube$DelegateWrapper;
            }
            let SSLTube$DelegateWrapper: _SSLTube$DelegateWrapper$$static;
            interface _SSLTube$DelegateWrapper {
              dropSubscription(): void;
              onComplete(): void;
              onError(t: java.lang.Throwable): void;
              onNext(item: java.util.List<java.nio.ByteBuffer>): void;
              onNext(a0: any): void;
              onSubscribe(subscription: java.util.concurrent.Flow$Subscription): void;
              _onSubscribe(method: java.util.function.Consumer<java.util.concurrent.Flow$Subscription>, subscription: java.util.concurrent.Flow$Subscription): void;
              toString(): string;
              _completed: boolean;
              _debug: Logger;
              _delegate: FlowTube$TubeSubscriber;
              _error: java.lang.Throwable;
              _subscribedCalled: boolean;
              _subscribedDone: boolean;
            }
            interface SSLTube$DelegateWrapper extends CombineTypes<[_SSLTube$DelegateWrapper, jdk.internal.net.http.common.FlowTube$TubeSubscriber, java.lang.Object]> {}
            interface _SSLTube$SSLSubscriberWrapper$$static extends ClassLike {
              _new(this$0: SSLTube): SSLTube$SSLSubscriberWrapper;
            }
            let SSLTube$SSLSubscriberWrapper: _SSLTube$SSLSubscriberWrapper$$static;
            interface _SSLTube$SSLSubscriberWrapper {
              _complete(subscriberImpl: SSLTube$DelegateWrapper, t: java.lang.Throwable): void;
              dropSubscription(): void;
              onComplete(): void;
              onError(throwable: java.lang.Throwable): void;
              onErrorImpl(throwable: java.lang.Throwable): void;
              _onNewSubscription(subscriberImpl: SSLTube$DelegateWrapper, subscription: java.util.concurrent.Flow$Subscription): void;
              onNext(item: java.util.List<java.nio.ByteBuffer>): void;
              onNext(a0: any): void;
              onSubscribe(subscription: java.util.concurrent.Flow$Subscription): void;
              _onSubscribeImpl(subscription: java.util.concurrent.Flow$Subscription): void;
              _processPendingSubscriber(): void;
              _setDelegate(delegate: java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>): void;
              toString(): string;
              _errorRef: java.util.concurrent.atomic.AtomicReference<java.lang.Throwable>;
              _onCompleteReceived: boolean;
              _pendingDelegate: java.util.concurrent.atomic.AtomicReference<SSLTube$DelegateWrapper>;
              _subscribed: SSLTube$DelegateWrapper;
              _this$0: SSLTube;
            }
            interface SSLTube$SSLSubscriberWrapper extends CombineTypes<[_SSLTube$SSLSubscriberWrapper, jdk.internal.net.http.common.FlowTube$TubeSubscriber, java.lang.Object]> {}
            interface _SSLTube$SSLSubscriptionWrapper$$static extends ClassLike {
              _new(this$0: SSLTube): SSLTube$SSLSubscriptionWrapper;
            }
            let SSLTube$SSLSubscriptionWrapper: _SSLTube$SSLSubscriptionWrapper$$static;
            interface _SSLTube$SSLSubscriptionWrapper {
              cancel(): void;
              request(n: long): void;
              _setSubscription(sub: java.util.concurrent.Flow$Subscription): void;
              _cancelled: boolean;
              _delegate: java.util.concurrent.Flow$Subscription;
              _this$0: SSLTube;
            }
            interface SSLTube$SSLSubscriptionWrapper extends CombineTypes<[_SSLTube$SSLSubscriptionWrapper, java.lang.Object, java.util.concurrent.Flow$Subscription]> {}
            interface _SSLTube$SSLTubeFlowDelegate$$static extends ClassLike {
              _new(this$0: javax.net.ssl.SSLEngine, engine: java.util.concurrent.Executor, executor: java.util.function.Consumer<java.nio.ByteBuffer>, recycler: SSLTube$SSLSubscriberWrapper, readSubscriber: FlowTube): SSLTube$SSLTubeFlowDelegate;
            }
            let SSLTube$SSLTubeFlowDelegate: _SSLTube$SSLTubeFlowDelegate$$static;
            interface _SSLTube$SSLTubeFlowDelegate {
              _checkForHandshake(t: java.lang.Throwable): java.lang.Throwable;
              _connect(downReader: java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>, downWriter: java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>): void;
              _enterReadScheduling(): SubscriberWrapper$SchedulingAction;
              _this$0: SSLTube;
            }
            interface SSLTube$SSLTubeFlowDelegate extends CombineTypes<[_SSLTube$SSLTubeFlowDelegate, jdk.internal.net.http.common.SSLFlowDelegate]> {}
            interface _SequentialScheduler$$static extends ClassLike {
              lockingScheduler(mainLoop: java.lang.Runnable): SequentialScheduler;
              _AGAIN: int;
              _BEGIN: int;
              _END: int;
              _OFFLOAD: int;
              _STOP: int;
              new(restartableTask: SequentialScheduler$RestartableTask): SequentialScheduler;
            }
            let SequentialScheduler: _SequentialScheduler$$static;
            interface _SequentialScheduler {
              isStopped(): boolean;
              runOrSchedule(): void;
              runOrSchedule(executor: java.util.concurrent.Executor): void;
              _runOrSchedule(task: SequentialScheduler$SchedulableTask, executor: java.util.concurrent.Executor): void;
              stop(): void;
              _completer: SequentialScheduler$DeferredCompleter;
              _restartableTask: SequentialScheduler$RestartableTask;
              _schedulableTask: SequentialScheduler$SchedulableTask;
              _state: java.util.concurrent.atomic.AtomicInteger;
            }
            interface SequentialScheduler extends CombineTypes<[_SequentialScheduler, java.lang.Object]> {}
            interface _SequentialScheduler$CompleteRestartableTask$$static extends ClassLike {
              new(): SequentialScheduler$CompleteRestartableTask;
            }
            let SequentialScheduler$CompleteRestartableTask: _SequentialScheduler$CompleteRestartableTask$$static;
            interface _SequentialScheduler$CompleteRestartableTask {
              run(taskCompleter: SequentialScheduler$DeferredCompleter): void;
              _run(): void;
(): void;
            }
            interface SequentialScheduler$CompleteRestartableTask extends CombineTypes<[_SequentialScheduler$CompleteRestartableTask, java.lang.Object, jdk.internal.net.http.common.SequentialScheduler$RestartableTask]> {}
            interface _SequentialScheduler$DeferredCompleter$$static extends ClassLike {
            }
            let SequentialScheduler$DeferredCompleter: _SequentialScheduler$DeferredCompleter$$static;
            interface _SequentialScheduler$DeferredCompleter {
              complete(): void;
(): void;
            }
            interface SequentialScheduler$DeferredCompleter extends CombineTypes<[_SequentialScheduler$DeferredCompleter, java.lang.Object]> {}
            interface _SequentialScheduler$LockingRestartableTask$$static extends ClassLike {
              new(mainLoop: java.lang.Runnable): SequentialScheduler$LockingRestartableTask;
            }
            let SequentialScheduler$LockingRestartableTask: _SequentialScheduler$LockingRestartableTask$$static;
            interface _SequentialScheduler$LockingRestartableTask {
              _run(): void;
              _lock: java.util.concurrent.locks.Lock;
              _mainLoop: java.lang.Runnable;
            }
            interface SequentialScheduler$LockingRestartableTask extends CombineTypes<[_SequentialScheduler$LockingRestartableTask, jdk.internal.net.http.common.SequentialScheduler$CompleteRestartableTask]> {}
            interface _SequentialScheduler$RestartableTask$$static extends ClassLike {
            }
            let SequentialScheduler$RestartableTask: _SequentialScheduler$RestartableTask$$static;
            interface _SequentialScheduler$RestartableTask {
              run(a0: SequentialScheduler$DeferredCompleter): void;
(a0: SequentialScheduler$DeferredCompleter): void;
            }
            interface SequentialScheduler$RestartableTask extends CombineTypes<[_SequentialScheduler$RestartableTask, java.lang.Object]> {}
            interface _SequentialScheduler$SchedulableTask$$static extends ClassLike {
            }
            let SequentialScheduler$SchedulableTask: _SequentialScheduler$SchedulableTask$$static;
            interface _SequentialScheduler$SchedulableTask {
              run(): void;
              _this$0: SequentialScheduler;
            }
            interface SequentialScheduler$SchedulableTask extends CombineTypes<[_SequentialScheduler$SchedulableTask, java.lang.Object, java.lang.Runnable]> {}
            interface _SequentialScheduler$TryEndDeferredCompleter$$static extends ClassLike {
            }
            let SequentialScheduler$TryEndDeferredCompleter: _SequentialScheduler$TryEndDeferredCompleter$$static;
            interface _SequentialScheduler$TryEndDeferredCompleter {
              complete(): void;
              _this$0: SequentialScheduler;
            }
            interface SequentialScheduler$TryEndDeferredCompleter extends CombineTypes<[_SequentialScheduler$TryEndDeferredCompleter, jdk.internal.net.http.common.SequentialScheduler$DeferredCompleter]> {}
            interface _SubscriberWrapper$$static extends ClassLike {
              new(): SubscriberWrapper;
              new(downstreamWrapper: java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>): SubscriberWrapper;
            }
            let SubscriberWrapper: _SubscriberWrapper$$static;
            interface _SubscriberWrapper {
              addData(l: java.nio.ByteBuffer): void;
              _checkCompletion(): void;
              close(): void;
              close(t: java.lang.Throwable): void;
              closing(): boolean;
              completion(): java.util.concurrent.CompletableFuture<java.lang.Void>;
              dbgString(): string;
              _downstreamCompletion(): void;
              _enterScheduling(): SubscriberWrapper$SchedulingAction;
              _errorCommon(throwable: java.lang.Throwable): boolean;
              _hasNoOutputData(): boolean;
              _incoming(a0: java.util.List<java.nio.ByteBuffer>, a1: boolean): void;
(a0: java.util.List<java.nio.ByteBuffer>, a1: boolean): void;
              _incomingCaller(l: java.util.List<java.nio.ByteBuffer>, complete: boolean): void;
              _initialUpstreamDemand(): long;
              onComplete(): void;
              onError(throwable: java.lang.Throwable): void;
              onNext(item: java.util.List<java.nio.ByteBuffer>): void;
              onNext(a0: any): void;
              _onSubscribe(): void;
              onSubscribe(subscription: java.util.concurrent.Flow$Subscription): void;
              outgoing(buffer: java.nio.ByteBuffer, complete: boolean): void;
              outgoing(buffers: java.util.List<java.nio.ByteBuffer>, complete: boolean): void;
              _outputQueueSize(): int;
              _requestMore(): void;
              resetDownstreamDemand(): void;
              _signalScheduling(): boolean;
              subscribe(downstreamSubscriber: java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>): void;
              toString(): string;
              _upstreamRequest(n: long): void;
              upstreamWindow(): long;
              _upstreamWindowUpdate(currentWindow: long, a1: long): long;
              _upstreamWindowUpdate(): void;
              _cf: java.util.concurrent.CompletableFuture<java.lang.Void>;
              _completionAcknowledged: boolean;
              _debug: Logger;
              _downstreamCompleted: boolean;
              _downstreamSubscriber: java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>;
              _downstreamSubscription: SubscriptionBase;
              _errorRef: java.util.concurrent.atomic.AtomicReference<java.lang.Throwable>;
              _outputQ: java.util.concurrent.ConcurrentLinkedQueue<java.util.List<java.nio.ByteBuffer>>;
              _pushScheduler: SequentialScheduler;
              _upstreamCompleted: boolean;
              _upstreamSubscription: java.util.concurrent.Flow$Subscription;
              _upstreamWindow: java.util.concurrent.atomic.AtomicLong;
            }
            interface SubscriberWrapper extends CombineTypes<[_SubscriberWrapper, FlowTube$TubeSubscriber, java.io.Closeable, java.lang.Object, java.util.concurrent.Flow$Processor<java.util.List<java.nio.ByteBuffer>,java.util.List<java.nio.ByteBuffer>>]> {}
            interface _SubscriberWrapper$DownstreamPusher$$static extends ClassLike {
              _new(this$0: SubscriberWrapper): SubscriberWrapper$DownstreamPusher;
            }
            let SubscriberWrapper$DownstreamPusher: _SubscriberWrapper$DownstreamPusher$$static;
            interface _SubscriberWrapper$DownstreamPusher {
              run(): void;
              _run1(): void;
              _this$0: SubscriberWrapper;
            }
            interface SubscriberWrapper$DownstreamPusher extends CombineTypes<[_SubscriberWrapper$DownstreamPusher, java.lang.Object, java.lang.Runnable]> {}
            interface _SubscriberWrapper$SchedulingAction$$static extends ClassLike {
              valueOf(name: string): SubscriberWrapper$SchedulingAction;
              values(): SubscriberWrapper$SchedulingAction[];
              readonly CONTINUE: SubscriberWrapper$SchedulingAction;
              readonly RESCHEDULE: SubscriberWrapper$SchedulingAction;
              readonly RETURN: SubscriberWrapper$SchedulingAction;
            }
            let SubscriberWrapper$SchedulingAction: _SubscriberWrapper$SchedulingAction$$static;
            interface _SubscriberWrapper$SchedulingAction {
            }
            interface SubscriberWrapper$SchedulingAction extends CombineTypes<[_SubscriberWrapper$SchedulingAction]> {}
            interface _SubscriptionBase$$static extends ClassLike {
              new(scheduler: SequentialScheduler, cancelAction: java.lang.Runnable): SubscriptionBase;
              new(scheduler: SequentialScheduler, cancelAction: java.lang.Runnable, onError: java.util.function.Consumer<java.lang.Throwable>): SubscriptionBase;
            }
            let SubscriptionBase: _SubscriptionBase$$static;
            interface _SubscriptionBase {
              cancel(): void;
              request(n: long): void;
              toString(): string;
              tryDecrement(): boolean;
              window(): long;
              _cancelAction: java.lang.Runnable;
              _cancelled: java.util.concurrent.atomic.AtomicBoolean;
              _demand: Demand;
              _onError: java.util.function.Consumer<java.lang.Throwable>;
              _scheduler: SequentialScheduler;
            }
            interface SubscriptionBase extends CombineTypes<[_SubscriptionBase, java.lang.Object, java.util.concurrent.Flow$Subscription]> {}
            interface _Utils$$static extends ClassLike {
              CONTEXT_RESTRICTED(client: java.net.http.HttpClient): java.util.function.BiPredicate<string,string>;
              PROXY_TUNNEL_RESTRICTED(client: java.net.http.HttpClient): java.util.function.BiPredicate<string,string>;
              accumulateBuffers(currentList: java.util.List<java.nio.ByteBuffer>, buffersToAdd: java.util.List<java.nio.ByteBuffer>): long;
              charsetFrom(headers: java.net.http.HttpHeaders): java.nio.charset.Charset;
              close(closeables: java.io.Closeable[]): void;
              close(...closeables: java.io.Closeable[]): void;
              copy(src: java.nio.ByteBuffer, dst: java.nio.ByteBuffer): int;
              copy(src: java.nio.ByteBuffer): java.nio.ByteBuffer;
              copyAligned(src: java.nio.ByteBuffer): java.nio.ByteBuffer;
              copyProxy(proxy: java.net.Proxy): java.net.Proxy;
              copySSLParameters(p: javax.net.ssl.SSLParameters): javax.net.ssl.SSLParameters;
              dump(objects: any[]): string;
              dump(...objects: any[]): string;
              encode(s: string): string;
              flipToMark(buffer: java.nio.ByteBuffer, mark: int): void;
              getBooleanProperty(name: string, def: boolean): boolean;
              getBuffer(): java.nio.ByteBuffer;
              getCancelCause(x: java.lang.Throwable): java.lang.Throwable;
              getCompletionCause(x: java.lang.Throwable): java.lang.Throwable;
              getDebugLogger(dbgTag: java.util.function.Supplier<string>): Logger;
              getDebugLogger(dbgTag: java.util.function.Supplier<string>, on: boolean): Logger;
              _getDisallowedHeaders(): java.util.Set<string>;
              _getDisallowedRedirectHeaders(): java.util.Set<string>;
              getHpackLogger(dbgTag: java.util.function.Supplier<string>, errLevel: java.lang.System$Logger$Level): Logger;
              getHpackLogger(dbgTag: java.util.function.Supplier<string>): Logger;
              getIOException(t: java.lang.Throwable): java.io.IOException;
              getIntegerNetProperty(name: string, defaultValue: int): int;
              getIntegerNetProperty(property: string, min: int, max: int, defaultValue: int, log: boolean): int;
              getIntegerProperty(name: string, defaultValue: int): int;
              _getLoggerConfig(loggerName: string, def: DebugLogger$LoggerConfig): DebugLogger$LoggerConfig;
              getNetProperty(name: string): string;
              getProperty(name: string): string;
              getServerName(addr: java.net.InetSocketAddress): Utils$ServerName;
              getWebSocketLogger(dbgTag: java.util.function.Supplier<string>): Logger;
              hasRemaining(bufs: java.util.List<java.nio.ByteBuffer>): boolean;
              hasRemaining(bufs: java.nio.ByteBuffer[]): boolean;
              hostString(request: HttpRequestImpl): string;
              _hostnameVerificationDisabledValue(): boolean;
              immutableSession(session: javax.net.ssl.SSLSession): javax.net.ssl.SSLSession;
              _isAllowedForProxy(name: string, value: string, disabledSchemes: java.util.Set<string>, allowedKeys: java.util.function.Predicate<string>): boolean;
              isHostnameVerificationDisabled(): boolean;
              _isLoopbackLiteral(bytes: byte[]): boolean;
              isValidLowerCaseName(token: string): boolean;
              isValidName(token: string): boolean;
              isValidValue(token: string): boolean;
              newIAE(message: string, args: any[]): java.lang.IllegalArgumentException;
              newIAE(message: string, ...args: any[]): java.lang.IllegalArgumentException;
              permissionForProxy(proxyAddress: java.net.InetSocketAddress): java.net.URLPermission;
              permissionForServer(uri: java.net.URI, method: string, headers: java.util.stream.Stream<string>): java.net.URLPermission;
              pow2Size(n: int): int;
              proxyHasDisabledSchemes(tunnel: boolean): boolean;
              remaining(bufs: java.nio.ByteBuffer[]): long;
              remaining(bufs: java.util.List<java.nio.ByteBuffer>): long;
              remaining(bufs: java.util.List<java.nio.ByteBuffer>, max: int): int;
              remaining(refs: java.nio.ByteBuffer[], max: int): int;
              resolveAddress(address: java.net.InetSocketAddress): java.net.InetSocketAddress;
              setWebSocketUpgradeHeaders(request: HttpRequestImpl): void;
              sliceWithLimitedCapacity(buffer: java.nio.ByteBuffer, amount: int): java.nio.ByteBuffer;
              stackTrace(t: java.lang.Throwable): string;
              stringOf(source: java.util.Collection<any>): string;
              synchronizedRemaining(bufs: java.util.List<java.nio.ByteBuffer>): long;
              toConnectException(e: java.lang.Throwable): java.lang.Throwable;
              unchecked(e: java.io.IOException): java.io.UncheckedIOException;
              wrapForDebug<T>(logger: Logger, name: string, cf: java.util.concurrent.CompletableFuture<T>): java.util.concurrent.CompletableFuture<T>;
              wrapWithExtraDetail(t: java.lang.Throwable, messageSupplier: java.util.function.Supplier<string>): java.lang.Throwable;
              readonly ACCEPT_ALL: java.util.function.BiPredicate<string,string>;
              readonly ALLOWED_HEADERS: java.util.function.BiPredicate<string,string>;
              readonly ALLOWED_REDIRECT_HEADERS: java.util.function.BiPredicate<string,string>;
              _ALL_HEADERS: java.util.function.Predicate<string>;
              readonly ASSERTIONSENABLED: boolean;
              readonly BUFSIZE: int;
              _COPY_THRESHOLD: int;
              readonly DEBUG: boolean;
              readonly DEBUG_CONFIG: DebugLogger$LoggerConfig;
              readonly DEBUG_HPACK_CONFIG: DebugLogger$LoggerConfig;
              readonly DEBUG_WS: boolean;
              readonly DEBUG_WS_CONFIG: DebugLogger$LoggerConfig;
              _DEFAULT_BUFSIZE: int;
              _DISALLOWED_HEADERS_SET: java.util.Set<string>;
              _DISALLOWED_REDIRECT_HEADERS_SET: java.util.Set<string>;
              readonly EMPTY_BB_ARRAY: java.nio.ByteBuffer[];
              readonly EMPTY_BB_LIST: java.util.List<java.nio.ByteBuffer>;
              readonly EMPTY_BYTEBUFFER: java.nio.ByteBuffer;
              _HEADER_CONNECTION: string;
              _HEADER_UPGRADE: string;
              _HOST_RESTRICTED: java.util.function.BiPredicate<string,string>;
              _IS_HOST: java.util.function.Predicate<string>;
              _IS_PROXY_HEADER: java.util.function.Predicate<string>;
              _LOWER_CASE_CHARS: boolean[];
              _NO_PROXY_HEADER: java.util.function.Predicate<string>;
              readonly NO_PROXY_HEADERS_FILTER: java.util.function.BiPredicate<string,string>;
              _PROXY_AUTH_DISABLED_SCHEMES: java.util.Set<string>;
              _PROXY_AUTH_TUNNEL_DISABLED_SCHEMES: java.util.Set<string>;
              readonly PROXY_FILTER: java.util.function.BiPredicate<string,string>;
              readonly PROXY_TUNNEL_FILTER: java.util.function.BiPredicate<string,string>;
              readonly TESTING: boolean;
              readonly VALIDATE_USER_HEADER: java.util.function.BiPredicate<string,string>;
              _WSPACES: string;
              _fieldvchar: boolean[];
              readonly isHostnameVerificationDisabled: boolean;
              _tchar: boolean[];
            }
            let Utils: _Utils$$static;
            interface _Utils {
            }
            interface Utils extends CombineTypes<[_Utils, java.lang.Object]> {}
            interface _Utils$ProxyHeaders$$static extends ClassLike {
              new(userHeaders: java.net.http.HttpHeaders, systemHeaders: java.net.http.HttpHeaders): Utils$ProxyHeaders;
            }
            let Utils$ProxyHeaders: _Utils$ProxyHeaders$$static;
            interface _Utils$ProxyHeaders {
              equals(o: any): boolean;
              hashCode(): int;
              systemHeaders(): java.net.http.HttpHeaders;
              toString(): string;
              userHeaders(): java.net.http.HttpHeaders;
            }
            interface Utils$ProxyHeaders extends CombineTypes<[_Utils$ProxyHeaders, java.lang.Record]> {}
            interface _Utils$ServerName$$static extends ClassLike {
              _new(name: string, isLiteral: boolean): Utils$ServerName;
            }
            let Utils$ServerName: _Utils$ServerName$$static;
            interface _Utils$ServerName {
              getName(): string;
              isLiteral(): boolean;
              _isLiteral: boolean;
              _name: string;
            }
            interface Utils$ServerName extends CombineTypes<[_Utils$ServerName, java.lang.Object]> {}
            interface _ValidatingHeadersConsumer$$static extends ClassLike {
              _PSEUDO_HEADERS: java.util.Set<string>;
              new(): ValidatingHeadersConsumer;
            }
            let ValidatingHeadersConsumer: _ValidatingHeadersConsumer$$static;
            interface _ValidatingHeadersConsumer {
              _formatMessage(message: string, header: string): string;
              _newException(message: string, header: string): java.io.UncheckedIOException;
              onDecoded(name: ValidatingHeadersConsumer$charSequence, value: ValidatingHeadersConsumer$charSequence): void;
              reset(): void;
              _pseudoHeadersEnded: boolean;
            }
            interface ValidatingHeadersConsumer extends CombineTypes<[_ValidatingHeadersConsumer, java.lang.Object]> {}
          }
          module frame {
            interface _ContinuationFrame$$static extends ClassLike {
              readonly TYPE: int;
              new(streamid: int, flags: int, headerBlocks: java.util.List<java.nio.ByteBuffer>): ContinuationFrame;
              new(streamid: int, headersBlock: java.nio.ByteBuffer): ContinuationFrame;
            }
            let ContinuationFrame: _ContinuationFrame$$static;
            interface _ContinuationFrame {
              _length(): int;
              type(): int;
            }
            interface ContinuationFrame extends CombineTypes<[_ContinuationFrame, jdk.internal.net.http.frame.HeaderFrame]> {}
            interface _DataFrame$$static extends ClassLike {
              readonly END_STREAM: int;
              readonly PADDED: int;
              readonly TYPE: int;
              new(streamid: int, flags: int, data: java.nio.ByteBuffer): DataFrame;
              new(streamid: int, flags: int, data: java.util.List<java.nio.ByteBuffer>): DataFrame;
              new(streamid: int, flags: int, data: java.util.List<java.nio.ByteBuffer>, padLength: int): DataFrame;
            }
            let DataFrame: _DataFrame$$static;
            interface _DataFrame {
              flagAsString(flag: int): string;
              getData(): java.util.List<java.nio.ByteBuffer>;
              getDataLength(): int;
              _getPadLength(): int;
              _length(): int;
              payloadLength(): int;
              setPadLength(padLength: int): void;
              type(): int;
              _data: java.util.List<java.nio.ByteBuffer>;
              _dataLength: int;
              _padLength: int;
            }
            interface DataFrame extends CombineTypes<[_DataFrame, jdk.internal.net.http.frame.Http2Frame]> {}
            interface _ErrorFrame$$static extends ClassLike {
              stringForCode(code: int): string;
              readonly CANCEL: int;
              readonly COMPRESSION_ERROR: int;
              readonly CONNECT_ERROR: int;
              readonly ENHANCE_YOUR_CALM: int;
              readonly FLOW_CONTROL_ERROR: int;
              readonly FRAME_SIZE_ERROR: int;
              readonly HTTP_1_1_REQUIRED: int;
              readonly INADEQUATE_SECURITY: int;
              readonly INTERNAL_ERROR: int;
              _LAST_ERROR: int;
              readonly NO_ERROR: int;
              readonly PROTOCOL_ERROR: int;
              readonly REFUSED_STREAM: int;
              readonly SETTINGS_TIMEOUT: int;
              readonly STREAM_CLOSED: int;
              _errorStrings: string[];
              new(streamid: int, flags: int, errorCode: int): ErrorFrame;
            }
            let ErrorFrame: _ErrorFrame$$static;
            interface _ErrorFrame {
              getErrorCode(): int;
              toString(): string;
              _errorCode: int;
            }
            interface ErrorFrame extends CombineTypes<[_ErrorFrame, jdk.internal.net.http.frame.Http2Frame]> {}
            interface _FramesDecoder$$static extends ClassLike {
              _COPY_THRESHOLD: int;
              _debug: http.common.Logger;
              new(frameProcessor: FramesDecoder$FrameProcessor): FramesDecoder;
              new(frameProcessor: FramesDecoder$FrameProcessor, maxFrameSize: int): FramesDecoder;
            }
            let FramesDecoder: _FramesDecoder$$static;
            interface _FramesDecoder {
              close(msg: string): void;
              decode(inBoundBuffer: java.nio.ByteBuffer): void;
              _frameProcessed(): void;
              _getBuffers(isDataFrame: boolean, bytecount: int): java.util.List<java.nio.ByteBuffer>;
              getByte(): int;
              getBytes(n: int): byte[];
              getInt(): int;
              getShort(): int;
              _nextBuffer(): void;
              _nextFrame(): Http2Frame;
              _parseContinuationFrame(frameLength: int, streamid: int, flags: int): Http2Frame;
              _parseDataFrame(frameLength: int, streamid: int, flags: int): Http2Frame;
              _parseFrameBody(): Http2Frame;
              _parseFrameHeader(): void;
              _parseGoAwayFrame(frameLength: int, streamid: int, flags: int): Http2Frame;
              _parseHeadersFrame(frameLength: int, streamid: int, flags: int): Http2Frame;
              _parsePingFrame(frameLength: int, streamid: int, flags: int): Http2Frame;
              _parsePriorityFrame(frameLength: int, streamid: int, flags: int): Http2Frame;
              _parsePushPromiseFrame(frameLength: int, streamid: int, flags: int): Http2Frame;
              _parseResetFrame(frameLength: int, streamid: int, flags: int): Http2Frame;
              _parseSettingsFrame(frameLength: int, streamid: int, flags: int): Http2Frame;
              _parseWindowUpdateFrame(frameLength: int, streamid: int, flags: int): Http2Frame;
              skipBytes(bytecount: int): void;
              _closed: boolean;
              _currentBuffer: java.nio.ByteBuffer;
              _frameFlags: int;
              _frameHeaderParsed: boolean;
              _frameLength: int;
              _frameProcessor: FramesDecoder$FrameProcessor;
              _frameStreamid: int;
              _frameType: int;
              _maxFrameSize: int;
              _prepareToRelease: java.util.List<java.nio.ByteBuffer>;
              _slicedToDataFrame: boolean;
              _tailBuffers: java.util.ArrayDeque<java.nio.ByteBuffer>;
              _tailSize: int;
            }
            interface FramesDecoder extends CombineTypes<[_FramesDecoder, java.lang.Object]> {}
            interface _FramesDecoder$FrameProcessor$$static extends ClassLike {
            }
            let FramesDecoder$FrameProcessor: _FramesDecoder$FrameProcessor$$static;
            interface _FramesDecoder$FrameProcessor {
              processFrame(a0: Http2Frame): void;
(a0: Http2Frame): void;
            }
            interface FramesDecoder$FrameProcessor extends CombineTypes<[_FramesDecoder$FrameProcessor, java.lang.Object]> {}
            interface _FramesEncoder$$static extends ClassLike {
              _NO_FLAGS: int;
              _ZERO_STREAM: int;
              new(): FramesEncoder;
            }
            let FramesEncoder: _FramesEncoder$$static;
            interface _FramesEncoder {
              encodeConnectionPreface(preface: byte[], frame: SettingsFrame): java.nio.ByteBuffer;
              _encodeContinuationFrame(frame: ContinuationFrame): java.util.List<java.nio.ByteBuffer>;
              _encodeDataFrame(frame: DataFrame): java.util.List<java.nio.ByteBuffer>;
              _encodeDataFrameStart(frame: DataFrame): java.nio.ByteBuffer;
              encodeFrame(frame: Http2Frame): java.util.List<java.nio.ByteBuffer>;
              encodeFrames(frames: java.util.List<HeaderFrame>): java.util.List<java.nio.ByteBuffer>;
              _encodeGoAwayFrame(frame: GoAwayFrame): java.util.List<java.nio.ByteBuffer>;
              _encodeHeadersFrame(frame: HeadersFrame): java.util.List<java.nio.ByteBuffer>;
              _encodeHeadersFrameStart(frame: HeadersFrame): java.nio.ByteBuffer;
              _encodePingFrame(frame: PingFrame): java.util.List<java.nio.ByteBuffer>;
              _encodePriorityFrame(frame: PriorityFrame): java.util.List<java.nio.ByteBuffer>;
              _encodePushPromiseFrame(frame: PushPromiseFrame): java.util.List<java.nio.ByteBuffer>;
              _encodeResetFrame(frame: ResetFrame): java.util.List<java.nio.ByteBuffer>;
              _encodeSettingsFrame(frame: SettingsFrame): java.util.List<java.nio.ByteBuffer>;
              _encodeWindowUpdateFrame(frame: WindowUpdateFrame): java.util.List<java.nio.ByteBuffer>;
              _getBuffer(capacity: int): java.nio.ByteBuffer;
              getPadding(length: int): java.nio.ByteBuffer;
              _join(buf: java.nio.ByteBuffer, data: java.util.List<java.nio.ByteBuffer>): java.util.List<java.nio.ByteBuffer>;
              _joinWithPadding(buf: java.nio.ByteBuffer, data: java.util.List<java.nio.ByteBuffer>, padLength: int): java.util.List<java.nio.ByteBuffer>;
              _putHeader(buf: java.nio.ByteBuffer, length: int, type: int, flags: int, streamId: int): void;
              _putPriority(buf: java.nio.ByteBuffer, exclusive: boolean, streamDependency: int, weight: int): void;
              _putSettingsFrame(buf: java.nio.ByteBuffer, frame: SettingsFrame, length: int): void;
            }
            interface FramesEncoder extends CombineTypes<[_FramesEncoder, java.lang.Object]> {}
            interface _GoAwayFrame$$static extends ClassLike {
              readonly TYPE: int;
              new(lastStream: int, errorCode: int): GoAwayFrame;
              new(lastStream: int, errorCode: int, debugData: byte[]): GoAwayFrame;
            }
            let GoAwayFrame: _GoAwayFrame$$static;
            interface _GoAwayFrame {
              getDebugData(): byte[];
              getLastStream(): int;
              _length(): int;
              toString(): string;
              type(): int;
              _debugData: byte[];
              _lastStream: int;
            }
            interface GoAwayFrame extends CombineTypes<[_GoAwayFrame, jdk.internal.net.http.frame.ErrorFrame]> {}
            interface _HeaderFrame$$static extends ClassLike {
              readonly END_HEADERS: int;
              readonly END_STREAM: int;
              new(streamid: int, flags: int, headerBlocks: java.util.List<java.nio.ByteBuffer>): HeaderFrame;
            }
            let HeaderFrame: _HeaderFrame$$static;
            interface _HeaderFrame {
              endHeaders(): boolean;
              flagAsString(flag: int): string;
              getHeaderBlock(): java.util.List<java.nio.ByteBuffer>;
              _getHeaderLength(): int;
              _headerBlocks: java.util.List<java.nio.ByteBuffer>;
              _headerLength: int;
            }
            interface HeaderFrame extends CombineTypes<[_HeaderFrame, jdk.internal.net.http.frame.Http2Frame]> {}
            interface _HeadersFrame$$static extends ClassLike {
              readonly END_STREAM: int;
              readonly PADDED: int;
              readonly PRIORITY: int;
              readonly TYPE: int;
              new(streamid: int, flags: int, headerBlocks: java.util.List<java.nio.ByteBuffer>, padLength: int): HeadersFrame;
              new(streamid: int, flags: int, headerBlocks: java.util.List<java.nio.ByteBuffer>): HeadersFrame;
              new(streamid: int, flags: int, headerBlock: java.nio.ByteBuffer): HeadersFrame;
            }
            let HeadersFrame: _HeadersFrame$$static;
            interface _HeadersFrame {
              flagAsString(flag: int): string;
              getExclusive(): boolean;
              _getPadLength(): int;
              getStreamDependency(): int;
              getWeight(): int;
              _length(): int;
              setPadLength(padLength: int): void;
              setPriority(streamDependency: int, exclusive: boolean, weight: int): void;
              type(): int;
              _exclusive: boolean;
              _padLength: int;
              _streamDependency: int;
              _weight: int;
            }
            interface HeadersFrame extends CombineTypes<[_HeadersFrame, jdk.internal.net.http.frame.HeaderFrame]> {}
            interface _Http2Frame$$static extends ClassLike {
              asString(type: int): string;
              readonly FRAME_HEADER_SIZE: int;
              new(streamid: int, flags: int): Http2Frame;
            }
            let Http2Frame: _Http2Frame$$static;
            interface _Http2Frame {
              flagAsString(f: int): string;
              getFlag(flag: int): boolean;
              getFlags(): int;
              _length(): int;
              setFlag(flag: int): void;
              streamid(): int;
              streamid(streamid: int): void;
              toString(): string;
              type(): int;
              _typeAsString(): string;
              _flags: int;
              _streamid: int;
            }
            interface Http2Frame extends CombineTypes<[_Http2Frame, java.lang.Object]> {}
            interface _MalformedFrame$$static extends ClassLike {
              new(errorCode: int, msg: string): MalformedFrame;
              new(errorCode: int, errorStream: int, msg: string): MalformedFrame;
            }
            let MalformedFrame: _MalformedFrame$$static;
            interface _MalformedFrame {
              getErrorCode(): int;
              getMessage(): string;
              toString(): string;
              _errorCode: int;
              _errorStream: int;
              _msg: string;
            }
            interface MalformedFrame extends CombineTypes<[_MalformedFrame, jdk.internal.net.http.frame.Http2Frame]> {}
            interface _OutgoingHeaders$$static<T> extends ClassLike {
              readonly PRIORITY: int;
              new(hdrs1: java.net.http.HttpHeaders, hdrs2: java.net.http.HttpHeaders, attachment: T): OutgoingHeaders<T>;
            }
            let OutgoingHeaders: _OutgoingHeaders$$static<T>;
            interface _OutgoingHeaders<T> {
              getAttachment(): T;
              getExclusive(): boolean;
              getStreamDependency(): int;
              getSystemHeaders(): java.net.http.HttpHeaders;
              getUserHeaders(): java.net.http.HttpHeaders;
              getWeight(): int;
              setPriority(streamDependency: int, exclusive: boolean, weight: int): void;
              toString(): string;
              _attachment: T;
              _exclusive: boolean;
              _streamDependency: int;
              _system: java.net.http.HttpHeaders;
              _user: java.net.http.HttpHeaders;
              _weight: int;
            }
            interface OutgoingHeaders<T> extends CombineTypes<[_OutgoingHeaders<T>, Http2Frame]> {}
            interface _PingFrame$$static extends ClassLike {
              readonly ACK: int;
              readonly TYPE: int;
              new(flags: int, data: byte[]): PingFrame;
            }
            let PingFrame: _PingFrame$$static;
            interface _PingFrame {
              flagAsString(flag: int): string;
              getData(): byte[];
              _length(): int;
              type(): int;
              _data: byte[];
            }
            interface PingFrame extends CombineTypes<[_PingFrame, jdk.internal.net.http.frame.Http2Frame]> {}
            interface _PriorityFrame$$static extends ClassLike {
              readonly TYPE: int;
              new(streamId: int, streamDependency: int, exclusive: boolean, weight: int): PriorityFrame;
            }
            let PriorityFrame: _PriorityFrame$$static;
            interface _PriorityFrame {
              exclusive(): boolean;
              _length(): int;
              streamDependency(): int;
              type(): int;
              weight(): int;
              _exclusive: boolean;
              _streamDependency: int;
              _weight: int;
            }
            interface PriorityFrame extends CombineTypes<[_PriorityFrame, jdk.internal.net.http.frame.Http2Frame]> {}
            interface _PushPromiseFrame$$static extends ClassLike {
              readonly END_HEADERS: int;
              readonly PADDED: int;
              readonly TYPE: int;
              new(streamid: int, flags: int, promisedStream: int, buffers: java.util.List<java.nio.ByteBuffer>, padLength: int): PushPromiseFrame;
            }
            let PushPromiseFrame: _PushPromiseFrame$$static;
            interface _PushPromiseFrame {
              endHeaders(): boolean;
              flagAsString(flag: int): string;
              getPadLength(): int;
              getPromisedStream(): int;
              _length(): int;
              setPadLength(padLength: int): void;
              toString(): string;
              type(): int;
              _padLength: int;
              _promisedStream: int;
            }
            interface PushPromiseFrame extends CombineTypes<[_PushPromiseFrame, jdk.internal.net.http.frame.HeaderFrame]> {}
            interface _ResetFrame$$static extends ClassLike {
              readonly TYPE: int;
              new(streamid: int, errorCode: int): ResetFrame;
            }
            let ResetFrame: _ResetFrame$$static;
            interface _ResetFrame {
              _length(): int;
              type(): int;
            }
            interface ResetFrame extends CombineTypes<[_ResetFrame, jdk.internal.net.http.frame.ErrorFrame]> {}
            interface _SettingsFrame$$static extends ClassLike {
              defaultRFCSettings(): SettingsFrame;
              readonly ACK: int;
              readonly DEFAULT_ENABLE_PUSH: int;
              readonly DEFAULT_HEADER_TABLE_SIZE: int;
              readonly DEFAULT_INITIAL_WINDOW_SIZE: int;
              readonly DEFAULT_MAX_CONCURRENT_STREAMS: int;
              readonly DEFAULT_MAX_FRAME_SIZE: int;
              readonly ENABLE_PUSH: int;
              readonly HEADER_TABLE_SIZE: int;
              readonly INITIAL_CONNECTION_WINDOW_SIZE: int;
              readonly INITIAL_WINDOW_SIZE: int;
              _K: int;
              readonly MAX_CONCURRENT_STREAMS: int;
              readonly MAX_FRAME_SIZE: int;
              readonly MAX_HEADER_LIST_SIZE: int;
              readonly MAX_PARAM: int;
              readonly TYPE: int;
              new(flags: int): SettingsFrame;
              new(): SettingsFrame;
              new(other: SettingsFrame): SettingsFrame;
            }
            let SettingsFrame: _SettingsFrame$$static;
            interface _SettingsFrame {
              flagAsString(flag: int): string;
              getParameter(paramID: int): int;
              _length(): int;
              _name(i: int): string;
              setParameter(paramID: int, value: int): SettingsFrame;
              toByteArray(): byte[];
              _toByteBuffer(buf: java.nio.ByteBuffer): void;
              toString(): string;
              type(): int;
              update(updated: SettingsFrame): void;
              _parameters: int[];
            }
            interface SettingsFrame extends CombineTypes<[_SettingsFrame, jdk.internal.net.http.frame.Http2Frame]> {}
            interface _WindowUpdateFrame$$static extends ClassLike {
              readonly TYPE: int;
              new(streamid: int, windowUpdate: int): WindowUpdateFrame;
            }
            let WindowUpdateFrame: _WindowUpdateFrame$$static;
            interface _WindowUpdateFrame {
              getUpdate(): int;
              _length(): int;
              toString(): string;
              type(): int;
              _windowUpdate: int;
            }
            interface WindowUpdateFrame extends CombineTypes<[_WindowUpdateFrame, jdk.internal.net.http.frame.Http2Frame]> {}
          }
          module hpack {
            interface _BinaryRepresentationWriter$$static extends ClassLike {
            }
            let BinaryRepresentationWriter: _BinaryRepresentationWriter$$static;
            interface _BinaryRepresentationWriter {
              reset(): BinaryRepresentationWriter;
              write(a0: HeaderTable, a1: java.nio.ByteBuffer): boolean;
            }
            interface BinaryRepresentationWriter extends CombineTypes<[_BinaryRepresentationWriter, java.lang.Object]> {}
            interface _BulkSizeUpdateWriter$$static extends ClassLike {
              _new(): BulkSizeUpdateWriter;
            }
            let BulkSizeUpdateWriter: _BulkSizeUpdateWriter$$static;
            interface _BulkSizeUpdateWriter {
              _maxHeaderTableSizes(sizes: java.lang.Iterable<int>): BulkSizeUpdateWriter;
              reset(): BulkSizeUpdateWriter;
              reset(): BinaryRepresentationWriter;
              write(table: HeaderTable, destination: java.nio.ByteBuffer): boolean;
              _configured: boolean;
              _maxSizes: java.util.Iterator<int>;
              _writer: SizeUpdateWriter;
              _writing: boolean;
            }
            interface BulkSizeUpdateWriter extends CombineTypes<[_BulkSizeUpdateWriter, java.lang.Object, jdk.internal.net.http.hpack.BinaryRepresentationWriter]> {}
            interface _Decoder$$static extends ClassLike {
              _DECODERS_IDS: java.util.concurrent.atomic.AtomicLong;
              _states: java.util.List<Decoder$State>;
              new(capacity: int): Decoder;
              new(capacity: int, maxHeaderListSize: int, maxIndexed: int): Decoder;
            }
            let Decoder: _Decoder$$static;
            interface _Decoder {
              _checkMaxHeaderListSize(sz: long, a1: DecodingCallback): void;
              _cleanUpAfterReading(): void;
              _completeReading(input: java.nio.ByteBuffer, action: DecodingCallback): boolean;
              decode(headerBlock: java.nio.ByteBuffer, endOfHeaderBlock: boolean, consumer: DecodingCallback): void;
              _getHeaderFieldAt(index: int): SimpleHeaderTable$HeaderField;
              _getTable(): SimpleHeaderTable;
              _proceed(input: java.nio.ByteBuffer, action: DecodingCallback): void;
              _resumeIndexed(input: java.nio.ByteBuffer, action: DecodingCallback): void;
              _resumeLiteral(input: java.nio.ByteBuffer, action: DecodingCallback): void;
              _resumeLiteralNeverIndexed(input: java.nio.ByteBuffer, action: DecodingCallback): void;
              _resumeLiteralWithIndexing(input: java.nio.ByteBuffer, action: DecodingCallback): void;
              _resumeReady(input: java.nio.ByteBuffer, action: DecodingCallback): void;
              _resumeSizeUpdate(input: java.nio.ByteBuffer, action: DecodingCallback): void;
              setMaxCapacity(capacity: int): void;
              _setMaxCapacity0(capacity: int): void;
              _capacity: int;
              _firstValueIndex: boolean;
              _firstValueRead: boolean;
              _id: long;
              _indexed: int;
              _intValue: int;
              _integerReader: IntegerReader;
              _logger: HPACK$Logger;
              _maxHeaderListSize: int;
              _maxIndexed: int;
              _name: hpack$stringBuilder;
              _nameHuffmanEncoded: boolean;
              _size: long;
              _state: Decoder$State;
              _stringReader: StringReader;
              _table: SimpleHeaderTable;
              _value: hpack$stringBuilder;
              _valueHuffmanEncoded: boolean;
            }
            interface Decoder extends CombineTypes<[_Decoder, java.lang.Object]> {}
            interface _Decoder$State$$static extends ClassLike {
              valueOf(name: string): Decoder$State;
              values(): Decoder$State[];
              readonly INDEXED: Decoder$State;
              readonly LITERAL: Decoder$State;
              readonly LITERAL_NEVER_INDEXED: Decoder$State;
              readonly LITERAL_WITH_INDEXING: Decoder$State;
              readonly READY: Decoder$State;
              readonly SIZE_UPDATE: Decoder$State;
            }
            let Decoder$State: _Decoder$State$$static;
            interface _Decoder$State {
            }
            interface Decoder$State extends CombineTypes<[_Decoder$State]> {}
            interface _DecodingCallback$$static extends ClassLike {
            }
            let DecodingCallback: _DecodingCallback$$static;
            interface _DecodingCallback {
              onDecoded(a0: DecodingCallback$charSequence, a1: DecodingCallback$charSequence): void;
(a0: DecodingCallback$charSequence, a1: DecodingCallback$charSequence): void;
              onDecoded(name: DecodingCallback$charSequence, value: DecodingCallback$charSequence, sensitive: boolean): void;
              onIndexed(index: int, name: DecodingCallback$charSequence, value: DecodingCallback$charSequence): void;
              onLiteral(index: int, name: DecodingCallback$charSequence, value: DecodingCallback$charSequence, valueHuffman: boolean): void;
              onLiteral(name: DecodingCallback$charSequence, nameHuffman: boolean, value: DecodingCallback$charSequence, valueHuffman: boolean): void;
              onLiteralNeverIndexed(index: int, name: DecodingCallback$charSequence, value: DecodingCallback$charSequence, valueHuffman: boolean): void;
              onLiteralNeverIndexed(name: DecodingCallback$charSequence, nameHuffman: boolean, value: DecodingCallback$charSequence, valueHuffman: boolean): void;
              onLiteralWithIndexing(index: int, name: DecodingCallback$charSequence, value: DecodingCallback$charSequence, valueHuffman: boolean): void;
              onLiteralWithIndexing(name: DecodingCallback$charSequence, nameHuffman: boolean, value: DecodingCallback$charSequence, valueHuffman: boolean): void;
              onMaxHeaderListSizeReached(size: long, a1: int): void;
              onMaxLiteralWithIndexingReached(indexed: long, a1: int): void;
              onSizeUpdate(capacity: int): void;
            }
            interface DecodingCallback extends CombineTypes<[_DecodingCallback, java.lang.Object]> {}
            interface _Encoder$$static extends ClassLike {
              _ENCODERS_IDS: java.util.concurrent.atomic.AtomicLong;
              new(maxCapacity: int): Encoder;
            }
            let Encoder: _Encoder$$static;
            interface _Encoder {
              _calculateCapacity(maxCapacity: int): int;
              _checkEncoding(): void;
              encode(headerBlock: java.nio.ByteBuffer): boolean;
              _getHeaderTable(): HeaderTable;
              _getMaxCapacity(): int;
              header(name: Encoder$charSequence, value: Encoder$charSequence): void;
              header(name: Encoder$charSequence, value: Encoder$charSequence, sensitive: boolean): void;
              _indexed(index: int): void;
              _isHuffmanBetterFor(value: Encoder$charSequence): boolean;
              _literal(index: int, value: Encoder$charSequence, useHuffman: boolean): void;
              _literal(name: Encoder$charSequence, nameHuffman: boolean, value: Encoder$charSequence, valueHuffman: boolean): void;
              _literalNeverIndexed(index: int, value: Encoder$charSequence, valueHuffman: boolean): void;
              _literalNeverIndexed(name: Encoder$charSequence, nameHuffman: boolean, value: Encoder$charSequence, valueHuffman: boolean): void;
              _literalWithIndexing(index: int, value: Encoder$charSequence, valueHuffman: boolean): void;
              _literalWithIndexing(name: Encoder$charSequence, nameHuffman: boolean, value: Encoder$charSequence, valueHuffman: boolean): void;
              _logger(): HPACK$Logger;
              _prependWithCapacityUpdate(headerBlock: java.nio.ByteBuffer): boolean;
              setMaxCapacity(capacity: int): void;
              _setMaxCapacity0(capacity: int): void;
              _sizeUpdate(capacity: int): void;
              _tableIndexOf(name: Encoder$charSequence, value: Encoder$charSequence): int;
              _bulkSizeUpdateWriter: BulkSizeUpdateWriter;
              _capacityUpdate: boolean;
              _configuredCapacityUpdate: boolean;
              _currCapacity: int;
              _encoding: boolean;
              _headerTable: HeaderTable;
              _huffmanWriter: QuickHuffman$Writer;
              _id: long;
              _indexedWriter: IndexedWriter;
              _lastCapacity: int;
              _literalNeverIndexedWriter: LiteralNeverIndexedWriter;
              _literalWithIndexingWriter: LiteralWithIndexingWriter;
              _literalWriter: LiteralWriter;
              _logger: HPACK$Logger;
              _maxCapacity: int;
              _minCapacity: long;
              _sizeUpdateWriter: SizeUpdateWriter;
              _writer: BinaryRepresentationWriter;
            }
            interface Encoder extends CombineTypes<[_Encoder, java.lang.Object]> {}
            interface _HPACK$$static extends ClassLike {
              _bytesForBits(n: int): int;
              getLogger(): HPACK$Logger;
              read(source: java.nio.ByteBuffer, buffer: long, a2: int, bufferLen: HPACK$BufferUpdateConsumer): int;
              write(buffer: long, a1: int, bufferLen: HPACK$BufferUpdateConsumer, consumer: java.nio.ByteBuffer): int;
              _LOGGER: HPACK$RootLogger;
              _logLevels: java.util.Map<string,HPACK$Logger$Level>;
            }
            let HPACK: _HPACK$$static;
            interface _HPACK {
            }
            interface HPACK extends CombineTypes<[_HPACK, java.lang.Object]> {}
            interface _HPACK$BufferUpdateConsumer$$static extends ClassLike {
            }
            let HPACK$BufferUpdateConsumer: _HPACK$BufferUpdateConsumer$$static;
            interface _HPACK$BufferUpdateConsumer {
              accept(a0: long, a1: int): void;
(a0: long, a1: int): void;
            }
            interface HPACK$BufferUpdateConsumer extends CombineTypes<[_HPACK$BufferUpdateConsumer, java.lang.Object]> {}
            interface _HPACK$Logger$$static extends ClassLike {
            }
            let HPACK$Logger: _HPACK$Logger$$static;
            interface _HPACK$Logger {
              getName(): string;
              isLoggable(level: java.lang.System$Logger$Level): boolean;
              isLoggable(level: HPACK$Logger$Level): boolean;
              log(level: java.lang.System$Logger$Level, bundle: java.util.ResourceBundle, msg: string, thrown: java.lang.Throwable): void;
              log(level: java.lang.System$Logger$Level, bundle: java.util.ResourceBundle, format: string, params: any[]): void;
              log(level: java.lang.System$Logger$Level, bundle: java.util.ResourceBundle, format: string, ...params: any[]): void;
              log(level: HPACK$Logger$Level, s: java.util.function.Supplier<string>): void;
              subLogger(name: string): HPACK$Logger;
              _level: HPACK$Logger$Level;
              _logger: java.lang.System$Logger;
              _name: string;
              _path: string;
            }
            interface HPACK$Logger extends CombineTypes<[_HPACK$Logger, java.lang.System$Logger, java.lang.Object]> {}
            interface _HPACK$Logger$Level$$static extends ClassLike {
              valueOf(name: string): HPACK$Logger$Level;
              values(): HPACK$Logger$Level[];
              readonly EXTRA: HPACK$Logger$Level;
              readonly NONE: HPACK$Logger$Level;
              readonly NORMAL: HPACK$Logger$Level;
            }
            let HPACK$Logger$Level: _HPACK$Logger$Level$$static;
            interface _HPACK$Logger$Level {
              implies(other: HPACK$Logger$Level): boolean;
              _level: int;
              _systemLevel: java.lang.System$Logger$Level;
            }
            interface HPACK$Logger$Level extends CombineTypes<[_HPACK$Logger$Level]> {}
            interface _HPACK$RootLogger$$static extends ClassLike {
              _new(level: HPACK$Logger$Level): HPACK$RootLogger;
            }
            let HPACK$RootLogger: _HPACK$RootLogger$$static;
            interface _HPACK$RootLogger {
            }
            interface HPACK$RootLogger extends CombineTypes<[_HPACK$RootLogger, jdk.internal.net.http.hpack.HPACK$Logger]> {}
            interface _HeaderTable$$static extends ClassLike {
              _staticIndexes: java.util.Map<string,java.util.Map<string,int>>;
              new(maxSize: int, logger: HPACK$Logger): HeaderTable;
            }
            let HeaderTable: _HeaderTable$$static;
            interface _HeaderTable {
              _add(f: SimpleHeaderTable$HeaderField): void;
              indexOf(name: HeaderTable$charSequence, value: HeaderTable$charSequence): int;
              _indexesUniqueAndOrdered(indexes: java.util.Deque<long>): boolean;
              _remove(): SimpleHeaderTable$HeaderField;
              _search(name: string, value: string): int;
              _counter: long;
              _map: java.util.Map<string,java.util.Map<string,java.util.Deque<long>>>;
            }
            interface HeaderTable extends CombineTypes<[_HeaderTable, jdk.internal.net.http.hpack.SimpleHeaderTable]> {}
            interface _Huffman$$static extends ClassLike {
              new(): Huffman;
            }
            let Huffman: _Huffman$$static;
            interface _Huffman {
            }
            interface Huffman extends CombineTypes<[_Huffman, java.lang.Object]> {}
            interface _Huffman$Reader$$static extends ClassLike {
            }
            let Huffman$Reader: _Huffman$Reader$$static;
            interface _Huffman$Reader {
              read(a0: java.nio.ByteBuffer, a1: java.lang.Appendable, a2: boolean): void;
              reset(): void;
            }
            interface Huffman$Reader extends CombineTypes<[_Huffman$Reader, java.lang.Object]> {}
            interface _Huffman$Writer$$static extends ClassLike {
            }
            let Huffman$Writer: _Huffman$Writer$$static;
            interface _Huffman$Writer {
              from(a0: Huffman$Writer$charSequence, a1: int, a2: int): Huffman$Writer;
              lengthOf(a0: Huffman$Writer$charSequence, a1: int, a2: int): int;
              lengthOf(value: Huffman$Writer$charSequence): int;
              reset(): Huffman$Writer;
              write(a0: java.nio.ByteBuffer): boolean;
            }
            interface Huffman$Writer extends CombineTypes<[_Huffman$Writer, java.lang.Object]> {}
            interface _ISO_8859_1$$static extends ClassLike {
            }
            let ISO_8859_1: _ISO_8859_1$$static;
            interface _ISO_8859_1 {
            }
            interface ISO_8859_1 extends CombineTypes<[_ISO_8859_1, java.lang.Object]> {}
            interface _ISO_8859_1$Reader$$static extends ClassLike {
              new(): ISO_8859_1$Reader;
            }
            let ISO_8859_1$Reader: _ISO_8859_1$Reader$$static;
            interface _ISO_8859_1$Reader {
              read(source: java.nio.ByteBuffer, destination: java.lang.Appendable): void;
              reset(): ISO_8859_1$Reader;
              _UPDATER: HPACK$BufferUpdateConsumer;
              _buffer: long;
              _bufferLen: int;
            }
            interface ISO_8859_1$Reader extends CombineTypes<[_ISO_8859_1$Reader, java.lang.Object]> {}
            interface _ISO_8859_1$Writer$$static extends ClassLike {
              new(): ISO_8859_1$Writer;
            }
            let ISO_8859_1$Writer: _ISO_8859_1$Writer$$static;
            interface _ISO_8859_1$Writer {
              configure(source: ISO_8859_1$Writer$charSequence, start: int, end: int): ISO_8859_1$Writer;
              reset(): ISO_8859_1$Writer;
              write(destination: java.nio.ByteBuffer): boolean;
              _UPDATER: HPACK$BufferUpdateConsumer;
              _buffer: long;
              _bufferLen: int;
              _end: int;
              _pos: int;
              _source: hpack$charSequence;
            }
            interface ISO_8859_1$Writer extends CombineTypes<[_ISO_8859_1$Writer, java.lang.Object]> {}
            interface _IndexNameValueWriter$$static extends ClassLike {
              _NAME_PART_WRITTEN: int;
              _NEW: int;
              _VALUE_WRITTEN: int;
              _new(pattern: int, prefix: int): IndexNameValueWriter;
            }
            let IndexNameValueWriter: _IndexNameValueWriter$$static;
            interface _IndexNameValueWriter {
              _index(index: int): IndexNameValueWriter;
              _name(name: IndexNameValueWriter$charSequence, useHuffman: boolean): IndexNameValueWriter;
              reset(): IndexNameValueWriter;
              reset(): BinaryRepresentationWriter;
              _value(value: IndexNameValueWriter$charSequence, useHuffman: boolean): IndexNameValueWriter;
              write(table: HeaderTable, destination: java.nio.ByteBuffer): boolean;
              _indexedRepresentation: boolean;
              _intWriter: IntegerWriter;
              _nameWriter: StringWriter;
              _pattern: int;
              _prefix: int;
              _state: int;
              _valueWriter: StringWriter;
            }
            interface IndexNameValueWriter extends CombineTypes<[_IndexNameValueWriter, java.lang.Object, jdk.internal.net.http.hpack.BinaryRepresentationWriter]> {}
            interface _IndexedWriter$$static extends ClassLike {
              _new(): IndexedWriter;
            }
            let IndexedWriter: _IndexedWriter$$static;
            interface _IndexedWriter {
              _index(index: int): IndexedWriter;
              reset(): BinaryRepresentationWriter;
              write(table: HeaderTable, destination: java.nio.ByteBuffer): boolean;
              _intWriter: IntegerWriter;
            }
            interface IndexedWriter extends CombineTypes<[_IndexedWriter, java.lang.Object, jdk.internal.net.http.hpack.BinaryRepresentationWriter]> {}
            interface _IntegerReader$$static extends ClassLike {
              _checkPrefix(N: int): void;
              _CONFIGURED: int;
              _DONE: int;
              _FIRST_BYTE_READ: int;
              _NEW: int;
              _new(): IntegerReader;
            }
            let IntegerReader: _IntegerReader$$static;
            interface _IntegerReader {
              configure(N: int): IntegerReader;
              configure(N: int, maxValue: int): IntegerReader;
              get(): int;
              read(input: java.nio.ByteBuffer): boolean;
              reset(): IntegerReader;
              _N: int;
              _b: long;
              _maxValue: int;
              _r: long;
              _state: int;
              _value: int;
            }
            interface IntegerReader extends CombineTypes<[_IntegerReader, java.lang.Object]> {}
            interface _IntegerWriter$$static extends ClassLike {
              _checkPrefix(N: int): void;
              _CONFIGURED: int;
              _DONE: int;
              _FIRST_BYTE_WRITTEN: int;
              _NEW: int;
              _new(): IntegerWriter;
            }
            let IntegerWriter: _IntegerWriter$$static;
            interface _IntegerWriter {
              configure(value: int, N: int, payload: int): IntegerWriter;
              reset(): IntegerWriter;
              write(output: java.nio.ByteBuffer): boolean;
              _N: int;
              _payload: int;
              _state: int;
              _value: int;
            }
            interface IntegerWriter extends CombineTypes<[_IntegerWriter, java.lang.Object]> {}
            interface _LiteralNeverIndexedWriter$$static extends ClassLike {
              _new(): LiteralNeverIndexedWriter;
            }
            let LiteralNeverIndexedWriter: _LiteralNeverIndexedWriter$$static;
            interface _LiteralNeverIndexedWriter {
            }
            interface LiteralNeverIndexedWriter extends CombineTypes<[_LiteralNeverIndexedWriter, jdk.internal.net.http.hpack.IndexNameValueWriter]> {}
            interface _LiteralWithIndexingWriter$$static extends ClassLike {
              _new(): LiteralWithIndexingWriter;
            }
            let LiteralWithIndexingWriter: _LiteralWithIndexingWriter$$static;
            interface _LiteralWithIndexingWriter {
              _index(index: int): LiteralWithIndexingWriter;
              _index(a0: int): IndexNameValueWriter;
              _name(name: LiteralWithIndexingWriter$charSequence, useHuffman: boolean): LiteralWithIndexingWriter;
              _name(a0: LiteralWithIndexingWriter$charSequence, a1: boolean): IndexNameValueWriter;
              reset(): IndexNameValueWriter;
              reset(): BinaryRepresentationWriter;
              _value(value: LiteralWithIndexingWriter$charSequence, useHuffman: boolean): LiteralWithIndexingWriter;
              _value(a0: LiteralWithIndexingWriter$charSequence, a1: boolean): IndexNameValueWriter;
              write(table: HeaderTable, destination: java.nio.ByteBuffer): boolean;
              _index: int;
              _name: hpack$charSequence;
              _tableUpdated: boolean;
              _value: hpack$charSequence;
            }
            interface LiteralWithIndexingWriter extends CombineTypes<[_LiteralWithIndexingWriter, jdk.internal.net.http.hpack.IndexNameValueWriter]> {}
            interface _LiteralWriter$$static extends ClassLike {
              _new(): LiteralWriter;
            }
            let LiteralWriter: _LiteralWriter$$static;
            interface _LiteralWriter {
            }
            interface LiteralWriter extends CombineTypes<[_LiteralWriter, jdk.internal.net.http.hpack.IndexNameValueWriter]> {}
            interface _NaiveHuffman$$static extends ClassLike {
              readonly INSTANCE: NaiveHuffman;
            }
            let NaiveHuffman: _NaiveHuffman$$static;
            interface _NaiveHuffman {
              _addChar(c: int, code: int, bitLength: int): void;
              _addEOS(c: int, code: int, bitLength: int): void;
              _addLeaf(c: int, code: int, bitLength: int, isEOS: boolean): void;
              _codeOf(c: char): NaiveHuffman$Code;
              _getRoot(): NaiveHuffman$Node;
              lengthOf(value: NaiveHuffman$charSequence): int;
              lengthOf(value: NaiveHuffman$charSequence, start: int, end: int): int;
              _EOS: NaiveHuffman$Code;
              _codes: NaiveHuffman$Code[];
              _root: NaiveHuffman$Node;
            }
            interface NaiveHuffman extends CombineTypes<[_NaiveHuffman, java.lang.Object]> {}
            interface _NaiveHuffman$Code$$static extends ClassLike {
            }
            let NaiveHuffman$Code: _NaiveHuffman$Code$$static;
            interface _NaiveHuffman$Code {
              getCode(): int;
              getLength(): int;
              toString(): string;
              _code: int;
              _length: int;
            }
            interface NaiveHuffman$Code extends CombineTypes<[_NaiveHuffman$Code, java.lang.Object]> {}
            interface _NaiveHuffman$Node$$static extends ClassLike {
              _new(): NaiveHuffman$Node;
            }
            let NaiveHuffman$Node: _NaiveHuffman$Node$$static;
            interface _NaiveHuffman$Node {
              _addChildIfAbsent(i: int): NaiveHuffman$Node;
              _getChar(): char;
              _getChild(selector: int): NaiveHuffman$Node;
              _isLeaf(): boolean;
              _setChar(c: char): void;
              toString(): string;
              _c: char;
              _charIsSet: boolean;
              _isEOSPath: boolean;
              _left: NaiveHuffman$Node;
              _right: NaiveHuffman$Node;
            }
            interface NaiveHuffman$Node extends CombineTypes<[_NaiveHuffman$Node, java.lang.Object]> {}
            interface _NaiveHuffman$Reader$$static extends ClassLike {
              _new(): NaiveHuffman$Reader;
            }
            let NaiveHuffman$Reader: _NaiveHuffman$Reader$$static;
            interface _NaiveHuffman$Reader {
              read(source: java.nio.ByteBuffer, destination: java.lang.Appendable, isLast: boolean): void;
              _read(source: java.nio.ByteBuffer, destination: java.lang.Appendable, reportEOS: boolean, isLast: boolean): void;
              reset(): void;
              _resetProbe(): void;
              _curr: NaiveHuffman$Node;
              _len: int;
              _p: int;
            }
            interface NaiveHuffman$Reader extends CombineTypes<[_NaiveHuffman$Reader, jdk.internal.net.http.hpack.Huffman$Reader, java.lang.Object]> {}
            interface _NaiveHuffman$Writer$$static extends ClassLike {
              _new(): NaiveHuffman$Writer;
            }
            let NaiveHuffman$Writer: _NaiveHuffman$Writer$$static;
            interface _NaiveHuffman$Writer {
              from(input: NaiveHuffman$Writer$charSequence, start: int, end: int): NaiveHuffman$Writer;
              from(a0: NaiveHuffman$Writer$charSequence, a1: int, a2: int): Huffman$Writer;
              lengthOf(value: NaiveHuffman$Writer$charSequence, start: int, end: int): int;
              reset(): NaiveHuffman$Writer;
              reset(): Huffman$Writer;
              write(destination: java.nio.ByteBuffer): boolean;
              _avail: int;
              _code: int;
              _curr: int;
              _end: int;
              _pos: int;
              _rem: int;
              _source: hpack$charSequence;
            }
            interface NaiveHuffman$Writer extends CombineTypes<[_NaiveHuffman$Writer, jdk.internal.net.http.hpack.Huffman$Writer, java.lang.Object]> {}
            interface _QuickHuffman$$static extends ClassLike {
              _addChar(root: QuickHuffman$Node, symbol: int, code: int, bitLength: int): void;
              _addEOS(root: QuickHuffman$Node, symbol: int, code: int, bitLength: int): void;
              _addLeaf(root: QuickHuffman$Node, symbol: char, code: int, bitLength: int, isEOS: boolean): void;
              _buildTrie(): QuickHuffman$Node;
              _codeLengthOf(c: char): int;
              _codeValueOf(c: char): long;
              _EOS_LENGTH: int;
              _EOS_LSB: int;
              _EOS_MSB: long;
              _codes: long[];
              _root: QuickHuffman$Node;
            }
            let QuickHuffman: _QuickHuffman$$static;
            interface _QuickHuffman {
            }
            interface QuickHuffman extends CombineTypes<[_QuickHuffman, java.lang.Object]> {}
            interface _QuickHuffman$ImmutableNode$$static extends ClassLike {
              copyOf(node: QuickHuffman$Node): QuickHuffman$ImmutableNode;
            }
            let QuickHuffman$ImmutableNode: _QuickHuffman$ImmutableNode$$static;
            interface _QuickHuffman$ImmutableNode {
              getChild(index: int): QuickHuffman$ImmutableNode;
              getChild(a0: int): QuickHuffman$Node;
              getChildren(): QuickHuffman$ImmutableNode[];
              getChildren(): QuickHuffman$Node[];
              getLength(): int;
              getOrCreateChild(index: int): QuickHuffman$ImmutableNode;
              getOrCreateChild(a0: int): QuickHuffman$Node;
              getSymbol(): char;
              isEOSPath(): boolean;
              isLeaf(): boolean;
              setEOSPath(value: boolean): void;
              setLength(value: int): void;
              setSymbol(symbol: char): void;
              _children: java.util.List<QuickHuffman$ImmutableNode>;
              _eosPath: boolean;
              _length: int;
              _symbol: char;
            }
            interface QuickHuffman$ImmutableNode extends CombineTypes<[_QuickHuffman$ImmutableNode, java.lang.Object, jdk.internal.net.http.hpack.QuickHuffman$Node]> {}
            interface _QuickHuffman$Node$$static extends ClassLike {
            }
            let QuickHuffman$Node: _QuickHuffman$Node$$static;
            interface _QuickHuffman$Node {
              getChild(a0: int): QuickHuffman$Node;
              getChildren(): QuickHuffman$Node[];
              getLength(): int;
              getOrCreateChild(a0: int): QuickHuffman$Node;
              getSymbol(): char;
              isEOSPath(): boolean;
              isLeaf(): boolean;
              setEOSPath(a0: boolean): void;
              setLength(a0: int): void;
              setSymbol(a0: char): void;
            }
            interface QuickHuffman$Node extends CombineTypes<[_QuickHuffman$Node, java.lang.Object]> {}
            interface _QuickHuffman$Reader$$static extends ClassLike {
              _new(): QuickHuffman$Reader;
            }
            let QuickHuffman$Reader: _QuickHuffman$Reader$$static;
            interface _QuickHuffman$Reader {
              read(source: java.nio.ByteBuffer, destination: java.lang.Appendable, isLast: boolean): void;
              reset(): void;
              _UPDATER: HPACK$BufferUpdateConsumer;
              _buffer: long;
              _bufferLen: int;
              _curr: QuickHuffman$Node;
              _done: boolean;
              _len: int;
            }
            interface QuickHuffman$Reader extends CombineTypes<[_QuickHuffman$Reader, jdk.internal.net.http.hpack.Huffman$Reader, java.lang.Object]> {}
            interface _QuickHuffman$TemporaryNode$$static extends ClassLike {
              _new(): QuickHuffman$TemporaryNode;
            }
            let QuickHuffman$TemporaryNode: _QuickHuffman$TemporaryNode$$static;
            interface _QuickHuffman$TemporaryNode {
              _ensureChildrenExist(): void;
              getChild(index: int): QuickHuffman$TemporaryNode;
              getChild(a0: int): QuickHuffman$Node;
              getChildren(): QuickHuffman$Node[];
              getLength(): int;
              getOrCreateChild(index: int): QuickHuffman$TemporaryNode;
              getOrCreateChild(a0: int): QuickHuffman$Node;
              getSymbol(): char;
              isEOSPath(): boolean;
              isLeaf(): boolean;
              setEOSPath(value: boolean): void;
              setLength(value: int): void;
              setSymbol(value: char): void;
              _children: QuickHuffman$TemporaryNode[];
              _eosPath: boolean;
              _length: int;
              _symbol: char;
            }
            interface QuickHuffman$TemporaryNode extends CombineTypes<[_QuickHuffman$TemporaryNode, java.lang.Object, jdk.internal.net.http.hpack.QuickHuffman$Node]> {}
            interface _QuickHuffman$Writer$$static extends ClassLike {
              _new(): QuickHuffman$Writer;
            }
            let QuickHuffman$Writer: _QuickHuffman$Writer$$static;
            interface _QuickHuffman$Writer {
              from(input: QuickHuffman$Writer$charSequence, start: int, end: int): QuickHuffman$Writer;
              from(a0: QuickHuffman$Writer$charSequence, a1: int, a2: int): Huffman$Writer;
              lengthOf(value: QuickHuffman$Writer$charSequence, start: int, end: int): int;
              reset(): QuickHuffman$Writer;
              reset(): Huffman$Writer;
              write(destination: java.nio.ByteBuffer): boolean;
              _UPDATER: HPACK$BufferUpdateConsumer;
              _buffer: long;
              _bufferLen: int;
              _end: int;
              _padded: boolean;
              _pos: int;
              _source: hpack$charSequence;
            }
            interface QuickHuffman$Writer extends CombineTypes<[_QuickHuffman$Writer, jdk.internal.net.http.hpack.Huffman$Writer, java.lang.Object]> {}
            interface _SimpleHeaderTable$$static extends ClassLike {
              _ENTRY_SIZE: int;
              _STATIC_TABLE_LENGTH: int;
              _staticTable: java.util.List<SimpleHeaderTable$HeaderField>;
              new(maxSize: int, logger: HPACK$Logger): SimpleHeaderTable;
            }
            let SimpleHeaderTable: _SimpleHeaderTable$$static;
            interface _SimpleHeaderTable {
              _add(f: SimpleHeaderTable$HeaderField): void;
              _checkIndex(index: int): int;
              _evictEntry(): SimpleHeaderTable$HeaderField;
              _get(index: int): SimpleHeaderTable$HeaderField;
              _getStateString(): string;
              length(): int;
              maxSize(): int;
              _put(name: SimpleHeaderTable$charSequence, value: SimpleHeaderTable$charSequence): void;
              _put(h: SimpleHeaderTable$HeaderField): void;
              _remove(): SimpleHeaderTable$HeaderField;
              _setMaxSize(maxSize: int): void;
              size(): int;
              _sizeOf(f: SimpleHeaderTable$HeaderField): int;
              toString(): string;
              _buffer: SimpleHeaderTable$CircularBuffer<SimpleHeaderTable$HeaderField>;
              _logger: HPACK$Logger;
              _maxSize: int;
              _size: int;
            }
            interface SimpleHeaderTable extends CombineTypes<[_SimpleHeaderTable, java.lang.Object]> {}
            interface _SimpleHeaderTable$CircularBuffer$$static<E> extends ClassLike {
              _new(capacity: int): SimpleHeaderTable$CircularBuffer<E>;
            }
            let SimpleHeaderTable$CircularBuffer: _SimpleHeaderTable$CircularBuffer$$static<E>;
            interface _SimpleHeaderTable$CircularBuffer<E> {
              _add(elem: E): void;
              _get(index: int): E;
              _remove(): E;
              resize(newCapacity: int): void;
              _capacity: int;
              _elements: any[];
              _head: int;
              _size: int;
              _tail: int;
            }
            interface SimpleHeaderTable$CircularBuffer<E> extends CombineTypes<[_SimpleHeaderTable$CircularBuffer<E>, java.lang.Object]> {}
            interface _SimpleHeaderTable$HeaderField$$static extends ClassLike {
              new(name: string): SimpleHeaderTable$HeaderField;
              new(name: string, value: string): SimpleHeaderTable$HeaderField;
            }
            let SimpleHeaderTable$HeaderField: _SimpleHeaderTable$HeaderField$$static;
            interface _SimpleHeaderTable$HeaderField {
              toString(): string;
              _name: string;
              _value: string;
            }
            interface SimpleHeaderTable$HeaderField extends CombineTypes<[_SimpleHeaderTable$HeaderField, java.lang.Object]> {}
            interface _SizeUpdateWriter$$static extends ClassLike {
              _new(): SizeUpdateWriter;
            }
            let SizeUpdateWriter: _SizeUpdateWriter$$static;
            interface _SizeUpdateWriter {
              _maxHeaderTableSize(size: int): SizeUpdateWriter;
              reset(): BinaryRepresentationWriter;
              write(table: HeaderTable, destination: java.nio.ByteBuffer): boolean;
              _intWriter: IntegerWriter;
              _maxSize: int;
              _tableUpdated: boolean;
            }
            interface SizeUpdateWriter extends CombineTypes<[_SizeUpdateWriter, java.lang.Object, jdk.internal.net.http.hpack.BinaryRepresentationWriter]> {}
            interface _StringReader$$static extends ClassLike {
              _DONE: int;
              _FIRST_BYTE_READ: int;
              _LENGTH_READ: int;
              _NEW: int;
              _new(): StringReader;
            }
            let StringReader: _StringReader$$static;
            interface _StringReader {
              _isHuffmanEncoded(): boolean;
              _read(input: java.nio.ByteBuffer, output: java.lang.Appendable): boolean;
              _reset(): void;
              _huffman: boolean;
              _huffmanReader: Huffman$Reader;
              _intReader: IntegerReader;
              _plainReader: ISO_8859_1$Reader;
              _remainingLength: int;
              _state: int;
            }
            interface StringReader extends CombineTypes<[_StringReader, java.lang.Object]> {}
            interface _StringWriter$$static extends ClassLike {
              _CONFIGURED: int;
              _DONE: int;
              _LENGTH_WRITTEN: int;
              _NEW: int;
              _new(): StringWriter;
            }
            let StringWriter: _StringWriter$$static;
            interface _StringWriter {
              _configure(input: StringWriter$charSequence, huffman: boolean): StringWriter;
              _configure(input: StringWriter$charSequence, start: int, end: int, huffman: boolean): StringWriter;
              _reset(): void;
              _write(output: java.nio.ByteBuffer): boolean;
              _huffman: boolean;
              _huffmanWriter: Huffman$Writer;
              _intWriter: IntegerWriter;
              _plainWriter: ISO_8859_1$Writer;
              _state: int;
            }
            interface StringWriter extends CombineTypes<[_StringWriter, java.lang.Object]> {}
          }
          module websocket {
            interface _BuilderImpl$$static extends ClassLike {
              new(client: java.net.http.HttpClient, proxySelector: java.net.ProxySelector): BuilderImpl;
            }
            let BuilderImpl: _BuilderImpl$$static;
            interface _BuilderImpl {
              buildAsync(uri: java.net.URI, listener: java.net.http.WebSocket$Listener): java.util.concurrent.CompletableFuture<java.net.http.WebSocket>;
              connectTimeout(timeout: java.time.Duration): java.net.http.WebSocket$Builder;
              _getClient(): java.net.http.HttpClient;
              _getConnectTimeout(): java.time.Duration;
              _getHeaders(): java.util.Collection<http.common.Pair<string,string>>;
              _getListener(): java.net.http.WebSocket$Listener;
              _getProxySelector(): java.util.Optional<java.net.ProxySelector>;
              _getSubprotocols(): java.util.Collection<string>;
              _getUri(): java.net.URI;
              header(name: string, value: string): java.net.http.WebSocket$Builder;
              _immutableCopy(): BuilderImpl;
              subprotocols(mostPreferred: string, lesserPreferred: string[]): java.net.http.WebSocket$Builder;
              subprotocols(mostPreferred: string, ...lesserPreferred: string[]): java.net.http.WebSocket$Builder;
              _client: java.net.http.HttpClient;
              _headers: java.util.Collection<http.common.Pair<string,string>>;
              _listener: java.net.http.WebSocket$Listener;
              _proxySelector: java.util.Optional<java.net.ProxySelector>;
              _subprotocols: java.util.Collection<string>;
              _timeout: java.time.Duration;
              _uri: java.net.URI;
            }
            interface BuilderImpl extends CombineTypes<[_BuilderImpl, java.lang.Object, java.net.http.WebSocket$Builder]> {}
            interface _CheckFailedException$$static extends ClassLike {
              _serialVersionUID: long;
              _new(message: string): CheckFailedException;
            }
            let CheckFailedException: _CheckFailedException$$static;
            interface _CheckFailedException {
            }
            interface CheckFailedException extends CombineTypes<[_CheckFailedException, java.lang.RuntimeException]> {}
            interface _FailWebSocketException$$static extends ClassLike {
              _serialVersionUID: long;
              _new(detail: string): FailWebSocketException;
              _new(detail: string, statusCode: int): FailWebSocketException;
            }
            let FailWebSocketException: _FailWebSocketException$$static;
            interface _FailWebSocketException {
              _getStatusCode(): int;
              initCause(cause: java.lang.Throwable): FailWebSocketException;
              initCause(a0: java.lang.Throwable): java.lang.Throwable;
              _statusCode: int;
            }
            interface FailWebSocketException extends CombineTypes<[_FailWebSocketException, java.lang.RuntimeException]> {}
            interface _Frame$$static extends ClassLike {
              _MAX_CONTROL_FRAME_PAYLOAD_LENGTH: int;
              _MAX_HEADER_SIZE_BYTES: int;
            }
            let Frame: _Frame$$static;
            interface _Frame {
            }
            interface Frame extends CombineTypes<[_Frame, java.lang.Object]> {}
            interface _Frame$Consumer$$static extends ClassLike {
            }
            let Frame$Consumer: _Frame$Consumer$$static;
            interface _Frame$Consumer {
              endFrame(): void;
              fin(a0: boolean): void;
              mask(a0: boolean): void;
              maskingKey(a0: int): void;
              opcode(a0: Frame$Opcode): void;
              payloadData(a0: java.nio.ByteBuffer): void;
              payloadLen(a0: long): void;
              rsv1(a0: boolean): void;
              rsv2(a0: boolean): void;
              rsv3(a0: boolean): void;
            }
            interface Frame$Consumer extends CombineTypes<[_Frame$Consumer, java.lang.Object]> {}
            interface _Frame$HeaderWriter$$static extends ClassLike {
              _new(): Frame$HeaderWriter;
            }
            let Frame$HeaderWriter: _Frame$HeaderWriter$$static;
            interface _Frame$HeaderWriter {
              _fin(value: boolean): Frame$HeaderWriter;
              _mask(value: int): Frame$HeaderWriter;
              _noMask(): Frame$HeaderWriter;
              _opcode(value: Frame$Opcode): Frame$HeaderWriter;
              _payloadLen(value: long): Frame$HeaderWriter;
              _rsv1(value: boolean): Frame$HeaderWriter;
              _rsv2(value: boolean): Frame$HeaderWriter;
              _rsv3(value: boolean): Frame$HeaderWriter;
              _write(buffer: java.nio.ByteBuffer): void;
              _firstChar: char;
              _mask: boolean;
              _maskingKey: int;
              _payloadLen: long;
            }
            interface Frame$HeaderWriter extends CombineTypes<[_Frame$HeaderWriter, java.lang.Object]> {}
            interface _Frame$Masker$$static extends ClassLike {
              _transferMasking(src: java.nio.ByteBuffer, dst: java.nio.ByteBuffer, mask: int): void;
              _new(): Frame$Masker;
            }
            let Frame$Masker: _Frame$Masker$$static;
            interface _Frame$Masker {
              _begin(src: java.nio.ByteBuffer, dst: java.nio.ByteBuffer): void;
              _end(src: java.nio.ByteBuffer, dst: java.nio.ByteBuffer): void;
              _loop(src: java.nio.ByteBuffer, dst: java.nio.ByteBuffer): void;
              _mask(value: int): Frame$Masker;
              _transferMasking(src: java.nio.ByteBuffer, dst: java.nio.ByteBuffer): Frame$Masker;
              _acc: java.nio.ByteBuffer;
              _maskBytes: int[];
              _maskLong: long;
              _offset: int;
            }
            interface Frame$Masker extends CombineTypes<[_Frame$Masker, java.lang.Object]> {}
            interface _Frame$Opcode$$static extends ClassLike {
              _ofCode(code: int): Frame$Opcode;
              valueOf(name: string): Frame$Opcode;
              values(): Frame$Opcode[];
              readonly BINARY: Frame$Opcode;
              readonly CLOSE: Frame$Opcode;
              readonly CONTINUATION: Frame$Opcode;
              readonly CONTROL_0xB: Frame$Opcode;
              readonly CONTROL_0xC: Frame$Opcode;
              readonly CONTROL_0xD: Frame$Opcode;
              readonly CONTROL_0xE: Frame$Opcode;
              readonly CONTROL_0xF: Frame$Opcode;
              readonly NON_CONTROL_0x3: Frame$Opcode;
              readonly NON_CONTROL_0x4: Frame$Opcode;
              readonly NON_CONTROL_0x5: Frame$Opcode;
              readonly NON_CONTROL_0x6: Frame$Opcode;
              readonly NON_CONTROL_0x7: Frame$Opcode;
              readonly PING: Frame$Opcode;
              readonly PONG: Frame$Opcode;
              readonly TEXT: Frame$Opcode;
              _opcodes: Frame$Opcode[];
            }
            let Frame$Opcode: _Frame$Opcode$$static;
            interface _Frame$Opcode {
              _isControl(): boolean;
              _code: byte;
            }
            interface Frame$Opcode extends CombineTypes<[_Frame$Opcode]> {}
            interface _Frame$Reader$$static extends ClassLike {
              _negativePayload(payloadLength: long): FailWebSocketException;
              _notMinimalEncoding(payloadLength: long): FailWebSocketException;
              _AWAITING_FIRST_BYTE: int;
              _AWAITING_SECOND_BYTE: int;
              _READING_16_LENGTH: int;
              _READING_64_LENGTH: int;
              _READING_MASK: int;
              _READING_PAYLOAD: int;
              _new(): Frame$Reader;
            }
            let Frame$Reader: _Frame$Reader$$static;
            interface _Frame$Reader {
              _readFrame(input: java.nio.ByteBuffer, consumer: Frame$Consumer): void;
              _accumulator: java.nio.ByteBuffer;
              _mask: boolean;
              _remainingPayloadLength: long;
              _state: int;
            }
            interface Frame$Reader extends CombineTypes<[_Frame$Reader, java.lang.Object]> {}
            interface _MessageDecoder$$static extends ClassLike {
              _debug: http.common.Logger;
              _new(output: MessageStreamConsumer): MessageDecoder;
              _new(output: MessageStreamConsumer, server: boolean): MessageDecoder;
            }
            let MessageDecoder: _MessageDecoder$$static;
            interface _MessageDecoder {
              endFrame(): void;
              fin(value: boolean): void;
              _getOutput(): MessageStreamConsumer;
              mask(value: boolean): void;
              maskingKey(value: int): void;
              opcode(v: Frame$Opcode): void;
              payloadData(data: java.nio.ByteBuffer): void;
              payloadLen(value: long): void;
              rsv1(value: boolean): void;
              rsv2(value: boolean): void;
              rsv3(value: boolean): void;
              _unMask(src: java.nio.ByteBuffer): void;
              _binaryData: java.nio.ByteBuffer;
              _decoder: UTF8AccumulatingDecoder;
              _fin: boolean;
              _maskingKey: int;
              _opcode: Frame$Opcode;
              _originatingOpcode: Frame$Opcode;
              _output: MessageStreamConsumer;
              _payloadLen: long;
              _server: boolean;
              _unconsumedPayloadLen: long;
            }
            interface MessageDecoder extends CombineTypes<[_MessageDecoder, java.lang.Object, jdk.internal.net.http.websocket.Frame$Consumer]> {}
            interface _MessageEncoder$$static extends ClassLike {
              _debug: http.common.Logger;
              _new(): MessageEncoder;
              _new(isServer: boolean): MessageEncoder;
            }
            let MessageEncoder: _MessageEncoder$$static;
            interface _MessageEncoder {
              _createIntermediateBuffer(minSize: int): java.nio.ByteBuffer;
              encodeBinary(src: java.nio.ByteBuffer, last: boolean, dst: java.nio.ByteBuffer): boolean;
              encodeClose(statusCode: int, reason: java.nio.CharBuffer, dst: java.nio.ByteBuffer): boolean;
              encodePing(src: java.nio.ByteBuffer, dst: java.nio.ByteBuffer): boolean;
              encodePong(src: java.nio.ByteBuffer, dst: java.nio.ByteBuffer): boolean;
              encodeText(src: java.nio.CharBuffer, last: boolean, dst: java.nio.ByteBuffer): boolean;
              _maskAvailable(src: java.nio.ByteBuffer, dst: java.nio.ByteBuffer): int;
              _putAvailable(src: java.nio.ByteBuffer, dst: java.nio.ByteBuffer): boolean;
              reset(): void;
              _setupHeader(opcode: Frame$Opcode, fin: boolean, payloadLen: long): void;
              _actualLen: int;
              _charsetEncoder: java.nio.charset.CharsetEncoder;
              _closed: boolean;
              _expectedLen: int;
              _flushing: boolean;
              _headerBuffer: java.nio.ByteBuffer;
              _headerCount: long;
              _headerWriter: Frame$HeaderWriter;
              _intermediateBuffer: java.nio.ByteBuffer;
              _maskingKeySource: java.security.SecureRandom;
              _moreText: boolean;
              _payloadMasker: Frame$Masker;
              _previousFin: boolean;
              _previousText: boolean;
              _server: boolean;
              _started: boolean;
            }
            interface MessageEncoder extends CombineTypes<[_MessageEncoder, java.lang.Object]> {}
            interface _MessageQueue$$static extends ClassLike {
              _effectiveCapacityOf(n: int): int;
              new(capacity: int): MessageQueue;
            }
            let MessageQueue: _MessageQueue$$static;
            interface _MessageQueue {
              _add<T>(type: MessageQueue$Type, binarySupplier: java.util.function.Supplier<java.nio.ByteBuffer>, binary: java.nio.ByteBuffer, text: java.nio.CharBuffer, isLast: boolean, statusCode: int, attachment: T, action: java.util.function.BiConsumer<T,java.lang.Throwable>, future: java.util.concurrent.CompletableFuture<T>): void;
              addBinary<T>(message: java.nio.ByteBuffer, isLast: boolean, attachment: T, action: java.util.function.BiConsumer<T,java.lang.Throwable>, future: java.util.concurrent.CompletableFuture<T>): void;
              addClose<T>(statusCode: int, reason: java.nio.CharBuffer, attachment: T, action: java.util.function.BiConsumer<T,java.lang.Throwable>, future: java.util.concurrent.CompletableFuture<T>): void;
              addPing<T>(message: java.nio.ByteBuffer, attachment: T, action: java.util.function.BiConsumer<T,java.lang.Throwable>, future: java.util.concurrent.CompletableFuture<T>): void;
              addPong<T>(message: java.nio.ByteBuffer, attachment: T, action: java.util.function.BiConsumer<T,java.lang.Throwable>, future: java.util.concurrent.CompletableFuture<T>): void;
              addPong<T>(message: java.util.function.Supplier<java.nio.ByteBuffer>, attachment: T, action: java.util.function.BiConsumer<T,java.lang.Throwable>, future: java.util.concurrent.CompletableFuture<T>): void;
              addText<T>(message: java.nio.CharBuffer, isLast: boolean, attachment: T, action: java.util.function.BiConsumer<T,java.lang.Throwable>, future: java.util.concurrent.CompletableFuture<T>): void;
              isEmpty(): boolean;
              peek<R, E>(callback: MessageQueue$QueueCallback<R,E>): R;
              remove(): void;
              _elements: MessageQueue$Message[];
              _head: int;
              _tail: java.util.concurrent.atomic.AtomicInteger;
            }
            interface MessageQueue extends CombineTypes<[_MessageQueue, java.lang.Object]> {}
            interface _MessageQueue$Message$$static extends ClassLike {
            }
            let MessageQueue$Message: _MessageQueue$Message$$static;
            interface _MessageQueue$Message {
              _action: java.util.function.BiConsumer;
              _attachment: any;
              _binary: java.nio.ByteBuffer;
              _binarySupplier: java.util.function.Supplier<java.nio.ByteBuffer>;
              _future: java.util.concurrent.CompletableFuture;
              _isLast: boolean;
              _ready: boolean;
              _statusCode: int;
              _text: java.nio.CharBuffer;
              _type: MessageQueue$Type;
            }
            interface MessageQueue$Message extends CombineTypes<[_MessageQueue$Message, java.lang.Object]> {}
            interface _MessageQueue$QueueCallback$$static<R,E> extends ClassLike {
            }
            let MessageQueue$QueueCallback: _MessageQueue$QueueCallback$$static<R,E>;
            interface _MessageQueue$QueueCallback<R,E> {
              onBinary<T>(a0: java.nio.ByteBuffer, a1: boolean, a2: T, a3: java.util.function.BiConsumer<T,java.lang.Throwable>, a4: java.util.concurrent.CompletableFuture<T>): R;
              onClose<T>(a0: int, a1: java.nio.CharBuffer, a2: T, a3: java.util.function.BiConsumer<T,java.lang.Throwable>, a4: java.util.concurrent.CompletableFuture<T>): R;
              onEmpty(): R;
              onPing<T>(a0: java.nio.ByteBuffer, a1: T, a2: java.util.function.BiConsumer<T,java.lang.Throwable>, a3: java.util.concurrent.CompletableFuture<T>): R;
              onPong<T>(a0: java.nio.ByteBuffer, a1: T, a2: java.util.function.BiConsumer<T,java.lang.Throwable>, a3: java.util.concurrent.CompletableFuture<T>): R;
              onPong<T>(a0: java.util.function.Supplier<java.nio.ByteBuffer>, a1: T, a2: java.util.function.BiConsumer<T,java.lang.Throwable>, a3: java.util.concurrent.CompletableFuture<T>): R;
              onText<T>(a0: java.nio.CharBuffer, a1: boolean, a2: T, a3: java.util.function.BiConsumer<T,java.lang.Throwable>, a4: java.util.concurrent.CompletableFuture<T>): R;
            }
            interface MessageQueue$QueueCallback<R,E> extends CombineTypes<[_MessageQueue$QueueCallback<R,E>, java.lang.Object]> {}
            interface _MessageQueue$Type$$static extends ClassLike {
              valueOf(name: string): MessageQueue$Type;
              values(): MessageQueue$Type[];
              readonly BINARY: MessageQueue$Type;
              readonly CLOSE: MessageQueue$Type;
              readonly PING: MessageQueue$Type;
              readonly PONG: MessageQueue$Type;
              readonly TEXT: MessageQueue$Type;
            }
            let MessageQueue$Type: _MessageQueue$Type$$static;
            interface _MessageQueue$Type {
            }
            interface MessageQueue$Type extends CombineTypes<[_MessageQueue$Type]> {}
            interface _MessageStreamConsumer$$static extends ClassLike {
            }
            let MessageStreamConsumer: _MessageStreamConsumer$$static;
            interface _MessageStreamConsumer {
              onBinary(a0: java.nio.ByteBuffer, a1: boolean): void;
              onClose(a0: int, a1: MessageStreamConsumer$charSequence): void;
              onComplete(): void;
              onError(a0: java.lang.Throwable): void;
              onPing(a0: java.nio.ByteBuffer): void;
              onPong(a0: java.nio.ByteBuffer): void;
              onText(a0: MessageStreamConsumer$charSequence, a1: boolean): void;
            }
            interface MessageStreamConsumer extends CombineTypes<[_MessageStreamConsumer, java.lang.Object]> {}
            interface _OpeningHandshake$$static extends ClassLike {
              _checkFailed(message: string): CheckFailedException;
              _checkPermissions(b: BuilderImpl, proxy: java.net.Proxy): void;
              _checkURI(uri: java.net.URI): java.net.URI;
              _createNonce(): string;
              _createRequestSubprotocols(subprotocols: java.util.Collection<string>): java.util.Collection<string>;
              _createRequestURI(uri: java.net.URI): java.net.URI;
              _illegal(message: string): java.lang.IllegalArgumentException;
              _proxyFor(selector: java.util.Optional<java.net.ProxySelector>, uri: java.net.URI): java.net.Proxy;
              _requireAbsent(responseHeaders: java.net.http.HttpHeaders, headerName: string): void;
              _requireAtMostOne(responseHeaders: java.net.http.HttpHeaders, headerName: string): java.util.Optional<string>;
              _requireSingle(responseHeaders: java.net.http.HttpHeaders, headerName: string): string;
              _HEADER_ACCEPT: string;
              _HEADER_CONNECTION: string;
              _HEADER_EXTENSIONS: string;
              _HEADER_KEY: string;
              _HEADER_PROTOCOL: string;
              _HEADER_UPGRADE: string;
              _HEADER_VERSION: string;
              _ILLEGAL_HEADERS: java.util.Set<string>;
              _VERSION: string;
              _random: java.security.SecureRandom;
              new(b: BuilderImpl): OpeningHandshake;
            }
            let OpeningHandshake: _OpeningHandshake$$static;
            interface _OpeningHandshake {
              _checkAndReturnSubprotocol(responseHeaders: java.net.http.HttpHeaders): string;
              _handleResponse(response: java.net.http.HttpResponse<any>): OpeningHandshake$Result;
              _resultFrom(response: java.net.http.HttpResponse<any>): java.util.concurrent.CompletableFuture<OpeningHandshake$Result>;
              send(): java.util.concurrent.CompletableFuture<OpeningHandshake$Result>;
              _client: java.net.http.HttpClient;
              _nonce: string;
              _request: HttpRequestImpl;
              _sha1: java.security.MessageDigest;
              _subprotocols: java.util.Collection<string>;
            }
            interface OpeningHandshake extends CombineTypes<[_OpeningHandshake, java.lang.Object]> {}
            interface _OpeningHandshake$Result$$static extends ClassLike {
            }
            let OpeningHandshake$Result: _OpeningHandshake$Result$$static;
            interface _OpeningHandshake$Result {
              _subprotocol: string;
              _transport: TransportFactory;
            }
            interface OpeningHandshake$Result extends CombineTypes<[_OpeningHandshake$Result, java.lang.Object]> {}
            interface _RawChannel$$static extends ClassLike {
            }
            let RawChannel: _RawChannel$$static;
            interface _RawChannel {
              close(): void;
              initialByteBuffer(): java.nio.ByteBuffer;
              read(): java.nio.ByteBuffer;
              registerEvent(a0: RawChannel$RawEvent): void;
              shutdownInput(): void;
              shutdownOutput(): void;
              write(a0: java.nio.ByteBuffer[], a1: int, a2: int): long;
            }
            interface RawChannel extends CombineTypes<[_RawChannel, java.io.Closeable, java.lang.Object]> {}
            interface _RawChannel$Provider$$static extends ClassLike {
            }
            let RawChannel$Provider: _RawChannel$Provider$$static;
            interface _RawChannel$Provider {
              closeRawChannel(): void;
              rawChannel(): RawChannel;
            }
            interface RawChannel$Provider extends CombineTypes<[_RawChannel$Provider, java.lang.Object]> {}
            interface _RawChannel$RawEvent$$static extends ClassLike {
            }
            let RawChannel$RawEvent: _RawChannel$RawEvent$$static;
            interface _RawChannel$RawEvent {
              handle(): void;
              interestOps(): int;
            }
            interface RawChannel$RawEvent extends CombineTypes<[_RawChannel$RawEvent, java.lang.Object]> {}
            interface _StatusCodes$$static extends ClassLike {
              _isLegal(code: int): boolean;
              _isLegalToReceiveFromServer(code: int): boolean;
              _isLegalToSendFromClient(code: int): boolean;
              _CLOSED_ABNORMALLY: int;
              _NOT_CONSISTENT: int;
              _NO_STATUS_CODE: int;
              _PROTOCOL_ERROR: int;
            }
            let StatusCodes: _StatusCodes$$static;
            interface _StatusCodes {
            }
            interface StatusCodes extends CombineTypes<[_StatusCodes, java.lang.Object]> {}
            interface _Transport$$static extends ClassLike {
            }
            let Transport: _Transport$$static;
            interface _Transport {
              acknowledgeReception(): void;
              closeInput(): void;
              closeOutput(): void;
              request(a0: long): void;
              sendBinary<T>(a0: java.nio.ByteBuffer, a1: boolean, a2: T, a3: java.util.function.BiConsumer<T,java.lang.Throwable>): java.util.concurrent.CompletableFuture<T>;
              sendClose<T>(a0: int, a1: string, a2: T, a3: java.util.function.BiConsumer<T,java.lang.Throwable>): java.util.concurrent.CompletableFuture<T>;
              sendPing<T>(a0: java.nio.ByteBuffer, a1: T, a2: java.util.function.BiConsumer<T,java.lang.Throwable>): java.util.concurrent.CompletableFuture<T>;
              sendPong<T>(a0: java.nio.ByteBuffer, a1: T, a2: java.util.function.BiConsumer<T,java.lang.Throwable>): java.util.concurrent.CompletableFuture<T>;
              sendPong<T>(a0: java.util.function.Supplier<java.nio.ByteBuffer>, a1: T, a2: java.util.function.BiConsumer<T,java.lang.Throwable>): java.util.concurrent.CompletableFuture<T>;
              sendText<T>(a0: Transport$charSequence, a1: boolean, a2: T, a3: java.util.function.BiConsumer<T,java.lang.Throwable>): java.util.concurrent.CompletableFuture<T>;
            }
            interface Transport extends CombineTypes<[_Transport, java.lang.Object]> {}
            interface _TransportFactory$$static extends ClassLike {
            }
            let TransportFactory: _TransportFactory$$static;
            interface _TransportFactory {
              createTransport(a0: MessageQueue, a1: MessageStreamConsumer): Transport;
(a0: MessageQueue, a1: MessageStreamConsumer): Transport;
            }
            interface TransportFactory extends CombineTypes<[_TransportFactory, java.lang.Object]> {}
            interface _TransportFactoryImpl$$static extends ClassLike {
              new(channel: RawChannel): TransportFactoryImpl;
            }
            let TransportFactoryImpl: _TransportFactoryImpl$$static;
            interface _TransportFactoryImpl {
              createTransport(queue: MessageQueue, consumer: MessageStreamConsumer): Transport;
              _channel: RawChannel;
            }
            interface TransportFactoryImpl extends CombineTypes<[_TransportFactoryImpl, java.lang.Object, jdk.internal.net.http.websocket.TransportFactory]> {}
            interface _TransportImpl$$static extends ClassLike {
              _debug: http.common.Logger;
              new(queue: MessageQueue, consumer: MessageStreamConsumer, channel: RawChannel): TransportImpl;
            }
            let TransportImpl: _TransportImpl$$static;
            interface _TransportImpl {
              acknowledgeReception(): void;
              closeInput(): void;
              closeOutput(): void;
              _createWriteBuffer(): java.nio.ByteBuffer;
              request(n: long): void;
              sendBinary<T>(message: java.nio.ByteBuffer, isLast: boolean, attachment: T, action: java.util.function.BiConsumer<T,java.lang.Throwable>): java.util.concurrent.CompletableFuture<T>;
              sendClose<T>(statusCode: int, reason: string, attachment: T, action: java.util.function.BiConsumer<T,java.lang.Throwable>): java.util.concurrent.CompletableFuture<T>;
              sendPing<T>(message: java.nio.ByteBuffer, attachment: T, action: java.util.function.BiConsumer<T,java.lang.Throwable>): java.util.concurrent.CompletableFuture<T>;
              sendPong<T>(message: java.nio.ByteBuffer, attachment: T, action: java.util.function.BiConsumer<T,java.lang.Throwable>): java.util.concurrent.CompletableFuture<T>;
              sendPong<T>(message: java.util.function.Supplier<java.nio.ByteBuffer>, attachment: T, action: java.util.function.BiConsumer<T,java.lang.Throwable>): java.util.concurrent.CompletableFuture<T>;
              sendText<T>(message: TransportImpl$charSequence, isLast: boolean, attachment: T, action: java.util.function.BiConsumer<T,java.lang.Throwable>): java.util.concurrent.CompletableFuture<T>;
              _write(): boolean;
              _channel: RawChannel;
              _closeLock: java.util.concurrent.locks.ReentrantLock;
              _counter: java.util.concurrent.atomic.AtomicLong;
              _data: java.nio.ByteBuffer;
              _decoder: MessageDecoder;
              _demand: http.common.Demand;
              _dst: java.nio.ByteBuffer;
              _dstArray: java.nio.ByteBuffer[];
              _encoder: MessageEncoder;
              _inputClosed: boolean;
              _messageConsumer: MessageStreamConsumer;
              _outputClosed: boolean;
              _queue: MessageQueue;
              _readEvent: RawChannel$RawEvent;
              _readState: TransportImpl$ChannelState;
              _reader: Frame$Reader;
              _receiveScheduler: http.common.SequentialScheduler;
              _sendScheduler: http.common.SequentialScheduler;
              _writeEvent: RawChannel$RawEvent;
              _writeState: java.util.concurrent.atomic.AtomicReference<TransportImpl$ChannelState>;
            }
            interface TransportImpl extends CombineTypes<[_TransportImpl, jdk.internal.net.http.websocket.Transport, java.lang.Object]> {}
            interface _TransportImpl$ChannelState$$static extends ClassLike {
              valueOf(name: string): TransportImpl$ChannelState;
              values(): TransportImpl$ChannelState[];
              readonly AVAILABLE: TransportImpl$ChannelState;
              readonly CLOSED: TransportImpl$ChannelState;
              readonly UNREGISTERED: TransportImpl$ChannelState;
              readonly WAITING: TransportImpl$ChannelState;
            }
            let TransportImpl$ChannelState: _TransportImpl$ChannelState$$static;
            interface _TransportImpl$ChannelState {
            }
            interface TransportImpl$ChannelState extends CombineTypes<[_TransportImpl$ChannelState]> {}
            interface _TransportImpl$ReadEvent$$static extends ClassLike {
            }
            let TransportImpl$ReadEvent: _TransportImpl$ReadEvent$$static;
            interface _TransportImpl$ReadEvent {
              handle(): void;
              interestOps(): int;
              _this$0: TransportImpl;
            }
            interface TransportImpl$ReadEvent extends CombineTypes<[_TransportImpl$ReadEvent, jdk.internal.net.http.websocket.RawChannel$RawEvent, java.lang.Object]> {}
            interface _TransportImpl$ReceiveTask$$static extends ClassLike {
            }
            let TransportImpl$ReceiveTask: _TransportImpl$ReceiveTask$$static;
            interface _TransportImpl$ReceiveTask {
              run(): void;
              _this$0: TransportImpl;
            }
            interface TransportImpl$ReceiveTask extends CombineTypes<[_TransportImpl$ReceiveTask, jdk.internal.net.http.common.SequentialScheduler$CompleteRestartableTask]> {}
            interface _TransportImpl$SendTask$$static extends ClassLike {
            }
            let TransportImpl$SendTask: _TransportImpl$SendTask$$static;
            interface _TransportImpl$SendTask {
              _removeAndComplete(error: java.lang.Throwable): void;
              run(): void;
              _tryCompleteWrite(): boolean;
              _action: java.util.function.BiConsumer;
              _attachment: any;
              _encoded: boolean;
              _encodingCallback: MessageQueue$QueueCallback<boolean,java.io.IOException>;
              _firstPass: boolean;
              _future: java.util.concurrent.CompletableFuture;
              _loadCallback: MessageQueue$QueueCallback<boolean,java.lang.RuntimeException>;
              _this$0: TransportImpl;
            }
            interface TransportImpl$SendTask extends CombineTypes<[_TransportImpl$SendTask, jdk.internal.net.http.common.SequentialScheduler$CompleteRestartableTask]> {}
            interface _TransportImpl$WriteEvent$$static extends ClassLike {
            }
            let TransportImpl$WriteEvent: _TransportImpl$WriteEvent$$static;
            interface _TransportImpl$WriteEvent {
              handle(): void;
              interestOps(): int;
              _this$0: TransportImpl;
            }
            interface TransportImpl$WriteEvent extends CombineTypes<[_TransportImpl$WriteEvent, jdk.internal.net.http.websocket.RawChannel$RawEvent, java.lang.Object]> {}
            interface _UTF8AccumulatingDecoder$$static extends ClassLike {
              _new(): UTF8AccumulatingDecoder;
            }
            let UTF8AccumulatingDecoder: _UTF8AccumulatingDecoder$$static;
            interface _UTF8AccumulatingDecoder {
              _decode(_in: java.nio.ByteBuffer, endOfInput: boolean): java.nio.CharBuffer;
              _decoder: java.nio.charset.CharsetDecoder;
              _leftovers: java.nio.ByteBuffer;
            }
            interface UTF8AccumulatingDecoder extends CombineTypes<[_UTF8AccumulatingDecoder, java.lang.Object]> {}
            interface _WebSocketImpl$$static extends ClassLike {
              _isLegalReason(reason: string): boolean;
              _newInstance(uri: java.net.URI, client: java.net.http.HttpClient, subprotocol: string, listener: java.net.http.WebSocket$Listener, transport: TransportFactory): WebSocketImpl;
              newInstanceAsync(b: BuilderImpl): java.util.concurrent.CompletableFuture<java.net.http.WebSocket>;
              _debug: http.common.Logger;
            }
            let WebSocketImpl: _WebSocketImpl$$static;
            interface _WebSocketImpl {
              abort(): void;
              _clearAutomaticPong(): java.nio.ByteBuffer;
              _clearPendingPingOrPong(): void;
              _clearPendingTextOrBinary(): void;
              _close(): void;
              getSubprotocol(): string;
              isInputClosed(): boolean;
              isOutputClosed(): boolean;
              _processCloseError(e: java.lang.Throwable): void;
              _replaceNull(cf: java.util.concurrent.CompletableFuture<java.net.http.WebSocket>): java.util.concurrent.CompletableFuture<java.net.http.WebSocket>;
              request(n: long): void;
              sendBinary(message: java.nio.ByteBuffer, last: boolean): java.util.concurrent.CompletableFuture<java.net.http.WebSocket>;
              sendClose(statusCode: int, reason: string): java.util.concurrent.CompletableFuture<java.net.http.WebSocket>;
              _sendClose0(statusCode: int, reason: string): java.util.concurrent.CompletableFuture<java.net.http.WebSocket>;
              _sendCloseSilently(statusCode: int): void;
              sendPing(message: java.nio.ByteBuffer): java.util.concurrent.CompletableFuture<java.net.http.WebSocket>;
              sendPong(message: java.nio.ByteBuffer): java.util.concurrent.CompletableFuture<java.net.http.WebSocket>;
              sendText(message: WebSocketImpl$charSequence, last: boolean): java.util.concurrent.CompletableFuture<java.net.http.WebSocket>;
              _setPendingPingOrPong(): boolean;
              _setPendingTextOrBinary(): boolean;
              _signalClose(statusCode: int, reason: string): void;
              _signalError(error: java.lang.Throwable): void;
              _signalOpen(): void;
              toString(): string;
              _transport(): Transport;
              _tryChangeState(expectedState: WebSocketImpl$State, newState: WebSocketImpl$State): boolean;
              _trySetState(newState: WebSocketImpl$State): boolean;
              _trySwapAutomaticPong(copy: java.nio.ByteBuffer): boolean;
              _DONE: http.common.MinimalFuture<java.net.http.WebSocket>;
              _binaryData: java.nio.ByteBuffer;
              _clientExecutor: java.util.concurrent.Executor;
              _demand: http.common.Demand;
              _error: java.util.concurrent.atomic.AtomicReference<java.lang.Throwable>;
              _inputClosed: boolean;
              _last: boolean;
              _lastAutomaticPong: java.util.concurrent.atomic.AtomicReference<java.nio.ByteBuffer>;
              _listener: java.net.http.WebSocket$Listener;
              _outputClosed: java.util.concurrent.atomic.AtomicBoolean;
              _pendingPingOrPong: java.util.concurrent.atomic.AtomicBoolean;
              _pendingTextOrBinary: java.util.concurrent.atomic.AtomicBoolean;
              _reason: string;
              _receiveCounter: java.util.concurrent.atomic.AtomicLong;
              _receiveScheduler: http.common.SequentialScheduler;
              _sendCounter: java.util.concurrent.atomic.AtomicLong;
              _state: java.util.concurrent.atomic.AtomicReference<WebSocketImpl$State>;
              _statusCode: int;
              _subprotocol: string;
              _text: websocket$charSequence;
              _transport: Transport;
              _uri: java.net.URI;
            }
            interface WebSocketImpl extends CombineTypes<[_WebSocketImpl, java.net.http.WebSocket, java.lang.Object]> {}
            interface _WebSocketImpl$ReceiveTask$$static extends ClassLike {
            }
            let WebSocketImpl$ReceiveTask: _WebSocketImpl$ReceiveTask$$static;
            interface _WebSocketImpl$ReceiveTask {
              _processBinary(): void;
              _processClose(): void;
              _processError(): void;
              _processOpen(): void;
              _processPing(): void;
              _processPong(): void;
              _processText(): void;
              run(): void;
              _this$0: WebSocketImpl;
            }
            interface WebSocketImpl$ReceiveTask extends CombineTypes<[_WebSocketImpl$ReceiveTask, jdk.internal.net.http.common.SequentialScheduler$CompleteRestartableTask]> {}
            interface _WebSocketImpl$SignallingMessageConsumer$$static extends ClassLike {
            }
            let WebSocketImpl$SignallingMessageConsumer: _WebSocketImpl$SignallingMessageConsumer$$static;
            interface _WebSocketImpl$SignallingMessageConsumer {
              onBinary(data: java.nio.ByteBuffer, last: boolean): void;
              onClose(statusCode: int, reason: WebSocketImpl$SignallingMessageConsumer$charSequence): void;
              onComplete(): void;
              onError(error: java.lang.Throwable): void;
              onPing(data: java.nio.ByteBuffer): void;
              onPong(data: java.nio.ByteBuffer): void;
              onText(data: WebSocketImpl$SignallingMessageConsumer$charSequence, last: boolean): void;
              _this$0: WebSocketImpl;
            }
            interface WebSocketImpl$SignallingMessageConsumer extends CombineTypes<[_WebSocketImpl$SignallingMessageConsumer, jdk.internal.net.http.websocket.MessageStreamConsumer, java.lang.Object]> {}
            interface _WebSocketImpl$State$$static extends ClassLike {
              valueOf(name: string): WebSocketImpl$State;
              values(): WebSocketImpl$State[];
              readonly BINARY: WebSocketImpl$State;
              readonly CLOSE: WebSocketImpl$State;
              readonly ERROR: WebSocketImpl$State;
              readonly IDLE: WebSocketImpl$State;
              readonly OPEN: WebSocketImpl$State;
              readonly PING: WebSocketImpl$State;
              readonly PONG: WebSocketImpl$State;
              readonly TEXT: WebSocketImpl$State;
              readonly WAITING: WebSocketImpl$State;
            }
            let WebSocketImpl$State: _WebSocketImpl$State$$static;
            interface _WebSocketImpl$State {
            }
            interface WebSocketImpl$State extends CombineTypes<[_WebSocketImpl$State]> {}
            interface _WebSocketRequest$$static extends ClassLike {
            }
            let WebSocketRequest: _WebSocketRequest$$static;
            interface _WebSocketRequest {
              isWebSocket(a0: boolean): void;
              setProxy(a0: java.net.Proxy): void;
              setSystemHeader(a0: string, a1: string): void;
            }
            interface WebSocketRequest extends CombineTypes<[_WebSocketRequest, java.lang.Object]> {}
          }
          interface _AbstractAsyncSSLConnection$$static extends ClassLike {
            _contains(rr: string[], target: string): boolean;
            _createEngine(context: javax.net.ssl.SSLContext, serverName: string, port: int, sslParameters: javax.net.ssl.SSLParameters): javax.net.ssl.SSLEngine;
            _createSSLParameters(client: HttpClientImpl, serverName: http.common.Utils$ServerName, alpn: string[]): javax.net.ssl.SSLParameters;
            _disableHostnameVerification: boolean;
            _new(addr: java.net.InetSocketAddress, client: HttpClientImpl, serverName: http.common.Utils$ServerName, port: int, alpn: string[]): AbstractAsyncSSLConnection;
          }
          let AbstractAsyncSSLConnection: _AbstractAsyncSSLConnection$$static;
          interface _AbstractAsyncSSLConnection {
            _getALPN(): java.util.concurrent.CompletableFuture<string>;
            _getConnectionFlow(): http.common.SSLTube;
(): http.common.SSLTube;
            _getConnectionFlow(): http.common.FlowTube;
            _getEngine(): javax.net.ssl.SSLEngine;
            _isSecure(): boolean;
            _engine: javax.net.ssl.SSLEngine;
            _serverName: string;
            _sslParameters: javax.net.ssl.SSLParameters;
          }
          interface AbstractAsyncSSLConnection extends CombineTypes<[_AbstractAsyncSSLConnection, jdk.internal.net.http.HttpConnection]> {}
          interface _AbstractSubscription$$static extends ClassLike {
            _new(): AbstractSubscription;
          }
          let AbstractSubscription: _AbstractSubscription$$static;
          interface _AbstractSubscription {
            _demand(): http.common.Demand;
            _demand: common.Demand;
          }
          interface AbstractSubscription extends CombineTypes<[_AbstractSubscription, java.lang.Object, java.util.concurrent.Flow$Subscription]> {}
          interface _AsyncEvent$$static extends ClassLike {
            readonly REPEATING: int;
            _new(): AsyncEvent;
            _new(flags: int): AsyncEvent;
          }
          let AsyncEvent: _AsyncEvent$$static;
          interface _AsyncEvent {
            abort(a0: java.io.IOException): void;
            channel(): java.nio.channels.SelectableChannel;
            handle(): void;
            interestOps(): int;
            repeating(): boolean;
            _flags: int;
          }
          interface AsyncEvent extends CombineTypes<[_AsyncEvent, java.lang.Object]> {}
          interface _AsyncSSLConnection$$static extends ClassLike {
            _new(addr: java.net.InetSocketAddress, client: HttpClientImpl, alpn: string[]): AsyncSSLConnection;
          }
          let AsyncSSLConnection: _AsyncSSLConnection$$static;
          interface _AsyncSSLConnection {
            _cacheKey(): ConnectionPool$CacheKey;
            _channel(): java.nio.channels.SocketChannel;
            close(): void;
            _close(cause: java.lang.Throwable): void;
            connectAsync(exchange: Exchange<any>): java.util.concurrent.CompletableFuture<java.lang.Void>;
            _connected(): boolean;
            finishConnect(): java.util.concurrent.CompletableFuture<java.lang.Void>;
            _getConnectionFlow(): http.common.SSLTube;
            _getConnectionFlow(): http.common.FlowTube;
            _isProxied(): boolean;
            _proxy(): java.net.InetSocketAddress;
            _publisher(): HttpConnection$HttpPublisher;
            _flow: common.SSLTube;
            _plainConnection: PlainHttpConnection;
            _writePublisher: HttpConnection$PlainHttpPublisher;
          }
          interface AsyncSSLConnection extends CombineTypes<[_AsyncSSLConnection, jdk.internal.net.http.AbstractAsyncSSLConnection]> {}
          interface _AsyncSSLTunnelConnection$$static extends ClassLike {
            _new(addr: java.net.InetSocketAddress, client: HttpClientImpl, alpn: string[], proxy: java.net.InetSocketAddress, proxyHeaders: http.common.Utils$ProxyHeaders): AsyncSSLTunnelConnection;
          }
          let AsyncSSLTunnelConnection: _AsyncSSLTunnelConnection$$static;
          interface _AsyncSSLTunnelConnection {
            _cacheKey(): ConnectionPool$CacheKey;
            _channel(): java.nio.channels.SocketChannel;
            close(): void;
            _close(cause: java.lang.Throwable): void;
            connectAsync(exchange: Exchange<any>): java.util.concurrent.CompletableFuture<java.lang.Void>;
            _connected(): boolean;
            finishConnect(): java.util.concurrent.CompletableFuture<java.lang.Void>;
            _getConnectionFlow(): http.common.SSLTube;
            _getConnectionFlow(): http.common.FlowTube;
            _isProxied(): boolean;
            _isTunnel(): boolean;
            _proxy(): java.net.InetSocketAddress;
            _publisher(): HttpConnection$HttpPublisher;
            toString(): string;
            _flow: common.SSLTube;
            _plainConnection: PlainTunnelingConnection;
            _writePublisher: HttpConnection$PlainHttpPublisher;
          }
          interface AsyncSSLTunnelConnection extends CombineTypes<[_AsyncSSLTunnelConnection, jdk.internal.net.http.AbstractAsyncSSLConnection]> {}
          interface _AsyncTriggerEvent$$static extends ClassLike {
            _new(errorHandler: java.util.function.Consumer<java.io.IOException>, trigger: java.lang.Runnable): AsyncTriggerEvent;
          }
          let AsyncTriggerEvent: _AsyncTriggerEvent$$static;
          interface _AsyncTriggerEvent {
            abort(ioe: java.io.IOException): void;
            channel(): java.nio.channels.SelectableChannel;
            handle(): void;
            interestOps(): int;
            repeating(): boolean;
            _errorHandler: java.util.function.Consumer<java.io.IOException>;
            _trigger: java.lang.Runnable;
          }
          interface AsyncTriggerEvent extends CombineTypes<[_AsyncTriggerEvent, jdk.internal.net.http.AsyncEvent]> {}
          interface _AuthenticationFilter$$static extends ClassLike {
            _addBasicCredentials(r: HttpRequestImpl, proxy: boolean, pw: java.net.PasswordAuthentication, isUTF8: boolean): void;
            _getCache(exchange: MultiExchange<any>): AuthenticationFilter$Cache;
            _normalize(uri: java.net.URI, isPrimaryKey: boolean): java.net.URI;
            _BASIC_DUMMY: string;
            _DEFAULT_RETRY_LIMIT: int;
            _PROXY_UNAUTHORIZED: int;
            _UNAUTHORIZED: int;
            _caches: java.util.WeakHashMap<HttpClientImpl,AuthenticationFilter$Cache>;
            _encoder: java.util.Base64$Encoder;
            _retry_limit: int;
            new(): AuthenticationFilter;
          }
          let AuthenticationFilter: _AuthenticationFilter$$static;
          interface _AuthenticationFilter {
            _getCredentials(header: string, proxy: boolean, req: HttpRequestImpl): java.net.PasswordAuthentication;
            _getProxyURI(r: HttpRequestImpl): java.net.URI;
            request(r: HttpRequestImpl, e: MultiExchange<any>): void;
            response(r: Response): HttpRequestImpl;
            _toURL(uri: java.net.URI, method: string, proxy: boolean): java.net.URL;
            _exchange: MultiExchange<any>;
          }
          interface AuthenticationFilter extends CombineTypes<[_AuthenticationFilter, java.lang.Object, jdk.internal.net.http.HeaderFilter]> {}
          interface _AuthenticationFilter$AuthInfo$$static extends ClassLike {
            _new(fromcache: boolean, scheme: string, credentials: java.net.PasswordAuthentication, isUTF8: boolean): AuthenticationFilter$AuthInfo;
            _new(fromcache: boolean, scheme: string, credentials: java.net.PasswordAuthentication, ca: AuthenticationFilter$CacheEntry, isUTF8: boolean): AuthenticationFilter$AuthInfo;
          }
          let AuthenticationFilter$AuthInfo: _AuthenticationFilter$AuthInfo$$static;
          interface _AuthenticationFilter$AuthInfo {
            _retryWithCredentials(pw: java.net.PasswordAuthentication, isUTF8: boolean): AuthenticationFilter$AuthInfo;
            _cacheEntry: AuthenticationFilter$CacheEntry;
            _credentials: java.net.PasswordAuthentication;
            _fromcache: boolean;
            _isUTF8: boolean;
            _retries: int;
            _scheme: string;
          }
          interface AuthenticationFilter$AuthInfo extends CombineTypes<[_AuthenticationFilter$AuthInfo, java.lang.Object]> {}
          interface _AuthenticationFilter$Cache$$static extends ClassLike {
            _equalsIgnoreCase(s1: string, s2: string): boolean;
            _new(): AuthenticationFilter$Cache;
          }
          let AuthenticationFilter$Cache: _AuthenticationFilter$Cache$$static;
          interface _AuthenticationFilter$Cache {
            _get(uri: java.net.URI, proxy: boolean): AuthenticationFilter$CacheEntry;
            _remove(authscheme: string, domain: java.net.URI, proxy: boolean): void;
            _remove(entry: AuthenticationFilter$CacheEntry): void;
            _store(authscheme: string, domain: java.net.URI, proxy: boolean, value: java.net.PasswordAuthentication, isUTF8: boolean): void;
            _entries: java.util.LinkedList<AuthenticationFilter$CacheEntry>;
          }
          interface AuthenticationFilter$Cache extends CombineTypes<[_AuthenticationFilter$Cache, java.lang.Object]> {}
          interface _AuthenticationFilter$CacheEntry$$static extends ClassLike {
            _new(authscheme: string, uri: java.net.URI, proxy: boolean, value: java.net.PasswordAuthentication, isUTF8: boolean): AuthenticationFilter$CacheEntry;
          }
          let AuthenticationFilter$CacheEntry: _AuthenticationFilter$CacheEntry$$static;
          interface _AuthenticationFilter$CacheEntry {
            equalsKey(uri: java.net.URI, proxy: boolean): boolean;
            value(): java.net.PasswordAuthentication;
            _isUTF8: boolean;
            _proxy: boolean;
            _root: string;
            _scheme: string;
            _value: java.net.PasswordAuthentication;
          }
          interface AuthenticationFilter$CacheEntry extends CombineTypes<[_AuthenticationFilter$CacheEntry, java.lang.Object]> {}
          interface _BufferingSubscriber$$static<T> extends ClassLike {
            _remaining(buffers: java.util.List<java.nio.ByteBuffer>): long;
            _ACTIVE: int;
            _CANCELLED: int;
            _COMPLETE: int;
            _ERROR: int;
            _UNSUBSCRIBED: int;
            new(downstreamSubscriber: java.net.http.HttpResponse$BodySubscriber<T>, bufferSize: int): BufferingSubscriber<T>;
          }
          let BufferingSubscriber: _BufferingSubscriber$$static<T>;
          interface _BufferingSubscriber<T> {
            _fromInternalBuffers(): java.util.List<java.nio.ByteBuffer>;
            getBody(): java.util.concurrent.CompletionStage<T>;
            _hasEnoughAccumulatedBytes(): boolean;
            needsExecutor(): boolean;
            onComplete(): void;
            onError(incomingThrowable: java.lang.Throwable): void;
            onNext(item: java.util.List<java.nio.ByteBuffer>): void;
            onNext(a0: any): void;
            onSubscribe(subscription: java.util.concurrent.Flow$Subscription): void;
            _accumulatedBytes: long;
            _bufferSize: int;
            _buffersLock: any;
            _downstreamSubscriber: java.net.http.HttpResponse$BodySubscriber<T>;
            _downstreamSubscription: http$DownstreamSubscription;
            _internalBuffers: java.util.ArrayList<java.nio.ByteBuffer>;
            _state: int;
            _subscription: java.util.concurrent.Flow$Subscription;
            _throwable: java.lang.Throwable;
          }
          interface BufferingSubscriber<T> extends CombineTypes<[_BufferingSubscriber<T>, java.lang.Object, ResponseSubscribers$TrustedSubscriber<T>]> {}
          interface _BufferingSubscriber$DownstreamSubscription$$static extends ClassLike {
          }
          let BufferingSubscriber$DownstreamSubscription: _BufferingSubscriber$DownstreamSubscription$$static;
          interface _BufferingSubscriber$DownstreamSubscription {
            cancel(): void;
            _pushDemanded(): void;
            request(n: long): void;
            _cancelled: java.util.concurrent.atomic.AtomicBoolean;
            _demand: common.Demand;
            _illegalArg: boolean;
            _pushDemandedScheduler: common.SequentialScheduler;
            _this$0: BufferingSubscriber;
          }
          interface BufferingSubscriber$DownstreamSubscription extends CombineTypes<[_BufferingSubscriber$DownstreamSubscription, java.lang.Object, java.util.concurrent.Flow$Subscription]> {}
          interface _BufferingSubscriber$DownstreamSubscription$PushDemandedTask$$static extends ClassLike {
            _new(this$1: BufferingSubscriber$DownstreamSubscription): BufferingSubscriber$DownstreamSubscription$PushDemandedTask;
          }
          let BufferingSubscriber$DownstreamSubscription$PushDemandedTask: _BufferingSubscriber$DownstreamSubscription$PushDemandedTask$$static;
          interface _BufferingSubscriber$DownstreamSubscription$PushDemandedTask {
            run(): void;
            _this$1: BufferingSubscriber$DownstreamSubscription;
          }
          interface BufferingSubscriber$DownstreamSubscription$PushDemandedTask extends CombineTypes<[_BufferingSubscriber$DownstreamSubscription$PushDemandedTask, jdk.internal.net.http.common.SequentialScheduler$CompleteRestartableTask]> {}
          interface _ConnectionPool$$static extends ClassLike {
            _cacheKey(secure: boolean, destination: java.net.InetSocketAddress, proxy: java.net.InetSocketAddress): ConnectionPool$CacheKey;
            _MAX_POOL_SIZE: long;
            _new(clientId: long): ConnectionPool;
          }
          let ConnectionPool: _ConnectionPool$$static;
          interface _ConnectionPool {
            _cleanup(c: HttpConnection, error: java.lang.Throwable): void;
            _close(c: HttpConnection): void;
            _contains(c: HttpConnection): boolean;
            _contains0(c: HttpConnection): boolean;
            _dbgString(): string;
            _findConnection(key: ConnectionPool$CacheKey, pool: java.util.HashMap<ConnectionPool$CacheKey,java.util.LinkedList<HttpConnection>>): HttpConnection;
            _getConnection(secure: boolean, addr: java.net.InetSocketAddress, proxy: java.net.InetSocketAddress): HttpConnection;
            _getConnection0(secure: boolean, addr: java.net.InetSocketAddress, proxy: java.net.InetSocketAddress): HttpConnection;
            _purgeExpiredConnectionsAndReturnNextDeadline(): long;
            _purgeExpiredConnectionsAndReturnNextDeadline(now: java.time.Instant): long;
            _putConnection(c: HttpConnection, pool: java.util.HashMap<ConnectionPool$CacheKey,java.util.LinkedList<HttpConnection>>): void;
            _registerCleanupTrigger(conn: HttpConnection): ConnectionPool$CleanupTrigger;
            _removeFromPool(c: HttpConnection, pool: java.util.HashMap<ConnectionPool$CacheKey,java.util.LinkedList<HttpConnection>>): boolean;
            _removeFromPool(c: HttpConnection): void;
            _returnToPool(conn: HttpConnection): void;
            _returnToPool(conn: HttpConnection, now: java.time.Instant, keepAlive: long): void;
            _start(): void;
            _stop(): void;
            _dbgTag: string;
            _debug: common.Logger;
            _expiryList: ConnectionPool$ExpiryList;
            _plainPool: java.util.HashMap<ConnectionPool$CacheKey,java.util.LinkedList<HttpConnection>>;
            _sslPool: java.util.HashMap<ConnectionPool$CacheKey,java.util.LinkedList<HttpConnection>>;
            _stateLock: java.util.concurrent.locks.ReentrantLock;
            _stopped: boolean;
          }
          interface ConnectionPool extends CombineTypes<[_ConnectionPool, java.lang.Object]> {}
          interface _ConnectionPool$CacheKey$$static extends ClassLike {
          }
          let ConnectionPool$CacheKey: _ConnectionPool$CacheKey$$static;
          interface _ConnectionPool$CacheKey {
            equals(obj: any): boolean;
            hashCode(): int;
            _destination: java.net.InetSocketAddress;
            _proxy: java.net.InetSocketAddress;
            _secure: boolean;
          }
          interface ConnectionPool$CacheKey extends CombineTypes<[_ConnectionPool$CacheKey, java.lang.Object]> {}
          interface _ConnectionPool$CleanupTrigger$$static extends ClassLike {
            new(a0: ConnectionPool, connection: HttpConnection): ConnectionPool$CleanupTrigger;
          }
          let ConnectionPool$CleanupTrigger: _ConnectionPool$CleanupTrigger$$static;
          interface _ConnectionPool$CleanupTrigger {
            cancel(): void;
            isDone(): boolean;
            onComplete(): void;
            onError(error: java.lang.Throwable): void;
            onNext(item: java.util.List<java.nio.ByteBuffer>): void;
            onNext(a0: any): void;
            onSubscribe(subscription: java.util.concurrent.Flow$Subscription): void;
            request(n: long): void;
            subscribe(subscriber: java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>): void;
            toString(): string;
            _triggerCleanup(error: java.lang.Throwable): void;
            _connection: HttpConnection;
            _done: boolean;
            _this$0: ConnectionPool;
          }
          interface ConnectionPool$CleanupTrigger extends CombineTypes<[_ConnectionPool$CleanupTrigger, jdk.internal.net.http.common.FlowTube$TubePublisher, jdk.internal.net.http.common.FlowTube$TubeSubscriber, java.lang.Object, java.util.concurrent.Flow$Subscription]> {}
          interface _ConnectionPool$ExpiryEntry$$static extends ClassLike {
            _new(connection: HttpConnection, expiry: java.time.Instant): ConnectionPool$ExpiryEntry;
          }
          let ConnectionPool$ExpiryEntry: _ConnectionPool$ExpiryEntry$$static;
          interface _ConnectionPool$ExpiryEntry {
            _connection: HttpConnection;
            _expiry: java.time.Instant;
          }
          interface ConnectionPool$ExpiryEntry extends CombineTypes<[_ConnectionPool$ExpiryEntry, java.lang.Object]> {}
          interface _ConnectionPool$ExpiryList$$static extends ClassLike {
          }
          let ConnectionPool$ExpiryList: _ConnectionPool$ExpiryList$$static;
          interface _ConnectionPool$ExpiryList {
            _add(conn: HttpConnection): void;
            _add(conn: HttpConnection, now: java.time.Instant, keepAlive: long): void;
            _clear(): void;
            _nextExpiryDeadline(): java.util.Optional<java.time.Instant>;
            _purgeMaybeRequired(): boolean;
            _purgeUntil(now: java.time.Instant): java.util.List<HttpConnection>;
            _remove(c: HttpConnection): void;
            _removeOldest(): HttpConnection;
            _size(): int;
            _stream(): java.util.stream.Stream<ConnectionPool$ExpiryEntry>;
            _list: java.util.LinkedList<ConnectionPool$ExpiryEntry>;
            _mayContainEntries: boolean;
          }
          interface ConnectionPool$ExpiryList extends CombineTypes<[_ConnectionPool$ExpiryList, java.lang.Object]> {}
          interface _CookieFilter$$static extends ClassLike {
            new(): CookieFilter;
          }
          let CookieFilter: _CookieFilter$$static;
          interface _CookieFilter {
            request(r: HttpRequestImpl, e: MultiExchange<any>): void;
            response(r: Response): HttpRequestImpl;
          }
          interface CookieFilter extends CombineTypes<[_CookieFilter, java.lang.Object, jdk.internal.net.http.HeaderFilter]> {}
          interface _Exchange$$static<T> extends ClassLike {
            _permissionForServer(uri: java.net.URI, method: string, headers: java.util.Map<string,java.util.List<string>>): java.net.URLPermission;
            _replaceHostInURI(u: java.net.URI, hostPort: string): java.net.URI;
            _MAX_NON_FINAL_RESPONSES: int;
            _new(request: HttpRequestImpl, multi: MultiExchange<T>): Exchange<T>;
            _new(request: HttpRequestImpl, multi: MultiExchange<T>, acc: java.security.AccessControlContext): Exchange<T>;
          }
          let Exchange: _Exchange$$static<T>;
          interface _Exchange<T> {
            cancel(): void;
            cancel(cause: java.io.IOException): void;
            _checkCancelled(): void;
            _checkCancelled<T>(cf: java.util.concurrent.CompletableFuture<T>, connection: HttpConnection): java.util.concurrent.CompletableFuture<T>;
            _checkFor407(ex: ExchangeImpl<T>, t: java.lang.Throwable, andThen: java.util.function.Function<ExchangeImpl<T>,java.util.concurrent.CompletableFuture<Response>>): java.util.concurrent.CompletableFuture<Response>;
            _checkForUpgradeAsync(resp: Response, ex: ExchangeImpl<T>): java.util.concurrent.CompletableFuture<Response>;
            _checkPermissions(): java.lang.SecurityException;
            _client(): HttpClientImpl;
            _dbgString(): string;
            _establishExchange(connection: HttpConnection): java.util.concurrent.CompletableFuture<ExchangeImpl<T>>;
            _executor(): java.util.concurrent.Executor;
            _expectContinue(ex: ExchangeImpl<T>): java.util.concurrent.CompletableFuture<Response>;
            _getCancelCause(): java.io.IOException;
            _getPushGroup(): PushGroup<T>;
            _getURIForSecurityCheck(): java.net.URI;
            h2Upgrade(): void;
            _h2cSettingsStrings(): string;
            _ignore1xxResponse(rsp: Response): java.util.concurrent.CompletableFuture<Response>;
            ignoreBody(): java.util.concurrent.CompletableFuture<java.lang.Void>;
            _ignoreBody(hdrs: java.net.http.HttpResponse$ResponseInfo): java.net.http.HttpResponse$BodySubscriber<T>;
            _nullBody(resp: java.net.http.HttpResponse<T>, t: java.lang.Throwable): void;
            _pushEnabled(): boolean;
            readBodyAsync(handler: java.net.http.HttpResponse$BodyHandler<T>): java.util.concurrent.CompletableFuture<T>;
            released(): void;
            remainingConnectTimeout(): java.util.Optional<java.time.Duration>;
            request(): HttpRequestImpl;
            responseAsync(): java.util.concurrent.CompletableFuture<Response>;
            _responseAsyncImpl(connection: HttpConnection): java.util.concurrent.CompletableFuture<Response>;
            _responseAsyncImpl0(connection: HttpConnection): java.util.concurrent.CompletableFuture<Response>;
            _sendRequestBody(ex: ExchangeImpl<T>): java.util.concurrent.CompletableFuture<Response>;
            _version(): java.net.http.HttpClient$Version;
            _wrapForLog(cf: java.util.concurrent.CompletableFuture<Response>): java.util.concurrent.CompletableFuture<Response>;
            _wrapForUpgrade(cf: java.util.concurrent.CompletableFuture<Response>): java.util.concurrent.CompletableFuture<Response>;
            _acc: java.security.AccessControlContext;
            _bodyIgnored: java.util.concurrent.CompletableFuture<java.lang.Void>;
            _client: HttpClientImpl;
            _connectionAborter: Exchange$ConnectionAborter;
            _dbgTag: string;
            _debug: common.Logger;
            _exchImpl: ExchangeImpl<T>;
            _exchangeCF: java.util.concurrent.CompletableFuture<ExchangeImpl<T>>;
            _failed: java.io.IOException;
            _multi: MultiExchange<T>;
            _nonFinalResponses: java.util.concurrent.atomic.AtomicInteger;
            _parentExecutor: java.util.concurrent.Executor;
            _pushGroup: PushGroup<T>;
            _request: HttpRequestImpl;
            _upgraded: boolean;
            _upgrading: boolean;
          }
          interface Exchange<T> extends CombineTypes<[_Exchange<T>, java.lang.Object]> {}
          interface _Exchange$ConnectionAborter$$static extends ClassLike {
            _closeConnection(connection: HttpConnection, cause: java.lang.Throwable): void;
            _new(): Exchange$ConnectionAborter;
          }
          let Exchange$ConnectionAborter: _Exchange$ConnectionAborter$$static;
          interface _Exchange$ConnectionAborter {
            _closeConnection(error: java.lang.Throwable): void;
            _connection(connection: HttpConnection): void;
            _disable(): HttpConnection;
            _cause: java.lang.Throwable;
            _closeRequested: boolean;
            _connection: HttpConnection;
          }
          interface Exchange$ConnectionAborter extends CombineTypes<[_Exchange$ConnectionAborter, java.lang.Object]> {}
          interface _ExchangeImpl$$static<T> extends ClassLike {
            _createExchangeImpl<U>(c: Http2Connection, t: java.lang.Throwable, exchange: Exchange<U>, connection: HttpConnection): java.util.concurrent.CompletableFuture<ExchangeImpl<U>>;
            _createHttp1Exchange<T>(ex: Exchange<T>, as: HttpConnection): java.util.concurrent.CompletableFuture<Http1Exchange<T>>;
            _get<U>(exchange: Exchange<U>, connection: HttpConnection): java.util.concurrent.CompletableFuture<ExchangeImpl<U>>;
            _debug: common.Logger;
            _new(e: Exchange<T>): ExchangeImpl<T>;
          }
          let ExchangeImpl: _ExchangeImpl$$static<T>;
          interface _ExchangeImpl<T> {
            _cancel(): void;
            _cancel(a0: java.io.IOException): void;
            _client(): HttpClientImpl;
            _completed(): void;
            _connection(): HttpConnection;
            _createResponseSubscriber(handler: java.net.http.HttpResponse$BodyHandler<T>, response: java.net.http.HttpResponse$ResponseInfo): http.common.HttpBodySubscriberWrapper<T>;
            _expectContinueFailed(rcode: int): void;
            _getCancelCause(): java.lang.Throwable;
            _getExchange(): Exchange<T>;
            _getResponseAsync(a0: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<Response>;
            _ignoreBody(): java.util.concurrent.CompletableFuture<java.lang.Void>;
            _isCanceled(): boolean;
            _isUnprocessedByPeer(): boolean;
            _markUnprocessedByPeer(): void;
            _nullBody(resp: java.net.http.HttpResponse<T>, t: java.lang.Throwable): void;
            _onProtocolError(a0: java.io.IOException): void;
            _readBodyAsync(a0: java.net.http.HttpResponse$BodyHandler<T>, a1: boolean, a2: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<T>;
            _released(): void;
            _sendBodyAsync(): java.util.concurrent.CompletableFuture<ExchangeImpl<T>>;
            _sendHeadersAsync(): java.util.concurrent.CompletableFuture<ExchangeImpl<T>>;
            _upgraded(): void;
            _exchange: Exchange<T>;
            _unprocessedByPeer: boolean;
          }
          interface ExchangeImpl<T> extends CombineTypes<[_ExchangeImpl<T>, java.lang.Object]> {}
          interface _FilterFactory$$static extends ClassLike {
            _new(): FilterFactory;
          }
          let FilterFactory: _FilterFactory$$static;
          interface _FilterFactory {
            addFilter(type: java.lang.Class<HeaderFilter>): void;
            _getFilterChain(): java.util.List<HeaderFilter>;
            _filterClasses: java.util.List<java.lang.Class<HeaderFilter>>;
          }
          interface FilterFactory extends CombineTypes<[_FilterFactory, java.lang.Object]> {}
          interface _HeaderFilter$$static extends ClassLike {
          }
          let HeaderFilter: _HeaderFilter$$static;
          interface _HeaderFilter {
            request(a0: HttpRequestImpl, a1: MultiExchange<any>): void;
            response(a0: Response): HttpRequestImpl;
          }
          interface HeaderFilter extends CombineTypes<[_HeaderFilter, java.lang.Object]> {}
          interface _HeaderParser$$static extends ClassLike {
            new(raw: string): HeaderParser;
          }
          let HeaderParser: _HeaderParser$$static;
          interface _HeaderParser {
            findKey(i: int): string;
            findValue(i: int): string;
            findValue(key: string): string;
            findValue(k: string, Default: string): string;
            keys(): java.util.Iterator<string>;
            _parse(): void;
            toString(): string;
            _asize: int;
            _nkeys: int;
            _raw: string;
            _tab: string[][];
          }
          interface HeaderParser extends CombineTypes<[_HeaderParser, java.lang.Object]> {}
          interface _HeaderParser$ParserIterator$$static extends ClassLike {
            _new(this$0: HeaderParser, returnValue: boolean): HeaderParser$ParserIterator;
          }
          let HeaderParser$ParserIterator: _HeaderParser$ParserIterator$$static;
          interface _HeaderParser$ParserIterator {
            hasNext(): boolean;
            next(): string;
            next(): any;
            _index: int;
            _returnsValue: boolean;
            _this$0: HeaderParser;
          }
          interface HeaderParser$ParserIterator extends CombineTypes<[_HeaderParser$ParserIterator, java.lang.Object, java.util.Iterator<string>]> {}
          interface _Http1AsyncReceiver$$static extends ClassLike {
            new(executor: java.util.concurrent.Executor, owner: Http1Exchange<any>): Http1AsyncReceiver;
          }
          let Http1AsyncReceiver: _Http1AsyncReceiver$$static;
          interface _Http1AsyncReceiver {
            _asyncReceive(buf: java.nio.ByteBuffer): void;
            _checkForErrors(): void;
            _checkRequestMore(): void;
            _clear(): void;
            _dbgString(): string;
            _debugQBB(qbb: java.nio.ByteBuffer[]): string;
            _describe(): string;
            _drain(initial: java.nio.ByteBuffer): java.nio.ByteBuffer;
            _flush(): void;
            _handlePendingDelegate(): boolean;
            _hasDemand(delegate: Http1AsyncReceiver$Http1AsyncDelegate): boolean;
            _onReadError(ex: java.lang.Throwable): void;
            _remaining(): long;
            _setRetryOnError(retry: boolean): void;
            _stop(): void;
            _subscribe(delegate: Http1AsyncReceiver$Http1AsyncDelegate): void;
            _subscriber(): http.common.FlowTube$TubeSubscriber;
            _unsubscribe(delegate: Http1AsyncReceiver$Http1AsyncDelegate): void;
            _canRequestMore: java.util.concurrent.atomic.AtomicBoolean;
            _client: HttpClientImpl;
            _dbgTag: string;
            _debug: common.Logger;
            _delegate: Http1AsyncReceiver$Http1AsyncDelegate;
            _error: java.lang.Throwable;
            _executor: java.util.concurrent.Executor;
            _owner: Http1Exchange<any>;
            _pendingDelegateRef: java.util.concurrent.atomic.AtomicReference<Http1AsyncReceiver$Http1AsyncDelegate>;
            _queue: java.util.concurrent.ConcurrentLinkedDeque<java.nio.ByteBuffer>;
            _received: java.util.concurrent.atomic.AtomicLong;
            _retry: boolean;
            _scheduler: common.SequentialScheduler;
            _stopRequested: boolean;
            _subscriber: Http1AsyncReceiver$Http1TubeSubscriber;
            _whenFinished: common.MinimalFuture<java.lang.Void>;
          }
          interface Http1AsyncReceiver extends CombineTypes<[_Http1AsyncReceiver, java.lang.Object]> {}
          interface _Http1AsyncReceiver$Http1AsyncDelegate$$static extends ClassLike {
          }
          let Http1AsyncReceiver$Http1AsyncDelegate: _Http1AsyncReceiver$Http1AsyncDelegate$$static;
          interface _Http1AsyncReceiver$Http1AsyncDelegate {
            close(a0: java.lang.Throwable): void;
            onReadError(a0: java.lang.Throwable): void;
            onSubscribe(a0: AbstractSubscription): void;
            subscription(): AbstractSubscription;
            tryAsyncReceive(a0: java.nio.ByteBuffer): boolean;
          }
          interface Http1AsyncReceiver$Http1AsyncDelegate extends CombineTypes<[_Http1AsyncReceiver$Http1AsyncDelegate, java.lang.Object]> {}
          interface _Http1AsyncReceiver$Http1AsyncDelegateSubscription$$static extends ClassLike {
            _new(scheduler: http.common.SequentialScheduler, onCancel: java.lang.Runnable, onError: java.util.function.Consumer<java.lang.Throwable>): Http1AsyncReceiver$Http1AsyncDelegateSubscription;
          }
          let Http1AsyncReceiver$Http1AsyncDelegateSubscription: _Http1AsyncReceiver$Http1AsyncDelegateSubscription$$static;
          interface _Http1AsyncReceiver$Http1AsyncDelegateSubscription {
            cancel(): void;
            request(n: long): void;
            _cancelled: boolean;
            _onCancel: java.lang.Runnable;
            _onError: java.util.function.Consumer<java.lang.Throwable>;
            _scheduler: common.SequentialScheduler;
          }
          interface Http1AsyncReceiver$Http1AsyncDelegateSubscription extends CombineTypes<[_Http1AsyncReceiver$Http1AsyncDelegateSubscription, jdk.internal.net.http.AbstractSubscription]> {}
          interface _Http1AsyncReceiver$Http1TubeSubscriber$$static extends ClassLike {
            _new(this$0: Http1AsyncReceiver): Http1AsyncReceiver$Http1TubeSubscriber;
          }
          let Http1AsyncReceiver$Http1TubeSubscriber: _Http1AsyncReceiver$Http1TubeSubscriber$$static;
          interface _Http1AsyncReceiver$Http1TubeSubscriber {
            dropSubscription(): void;
            onComplete(): void;
            onError(throwable: java.lang.Throwable): void;
            onNext(item: java.util.List<java.nio.ByteBuffer>): void;
            onNext(a0: any): void;
            onSubscribe(subscription: java.util.concurrent.Flow$Subscription): void;
            _requestMore(): void;
            _completed: boolean;
            _dropped: boolean;
            _subscription: java.util.concurrent.Flow$Subscription;
            _this$0: Http1AsyncReceiver;
          }
          interface Http1AsyncReceiver$Http1TubeSubscriber extends CombineTypes<[_Http1AsyncReceiver$Http1TubeSubscriber, jdk.internal.net.http.common.FlowTube$TubeSubscriber, java.lang.Object]> {}
          interface _Http1Exchange$$static<T> extends ClassLike {
            _new(exchange: Exchange<T>, connection: HttpConnection): Http1Exchange<T>;
          }
          let Http1Exchange: _Http1Exchange$$static<T>;
          interface _Http1Exchange<T> {
            _appendToOutgoing(throwable: java.lang.Throwable): void;
            _appendToOutgoing(item: java.util.List<java.nio.ByteBuffer>): void;
            _appendToOutgoing(dp: Http1Exchange$DataPair): void;
            _cancel(): void;
            _cancel(cause: java.io.IOException): void;
            _cancelIfFailed(s: java.util.concurrent.Flow$Subscription): void;
            _cancelImpl(cause: java.lang.Throwable): void;
            _cancelUpstreamSubscription(): void;
            _client(): HttpClientImpl;
            _completed(): void;
            _connectFlows(connection: HttpConnection): void;
            _connection(): HttpConnection;
            _createResponseSubscriber(handler: java.net.http.HttpResponse$BodyHandler<T>, response: java.net.http.HttpResponse$ResponseInfo): Http1Exchange$Http1ResponseBodySubscriber<T>;
            _createResponseSubscriber(a0: java.net.http.HttpResponse$BodyHandler, a1: java.net.http.HttpResponse$ResponseInfo): http.common.HttpBodySubscriberWrapper;
            _dbgString(): string;
            _drainLeftOverBytes(): java.nio.ByteBuffer;
            _expectContinueFailed(rcode: int): void;
            _getCancelCause(): java.lang.Throwable;
            _getOutgoing(): Http1Exchange$DataPair;
            _getResponseAsync(executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<Response>;
            _hasOutgoing(): boolean;
            _ignoreBody(): java.util.concurrent.CompletableFuture<java.lang.Void>;
            _isCanceled(): boolean;
            nullBody(resp: java.net.http.HttpResponse<T>, t: java.lang.Throwable): void;
            _onProtocolError(cause: java.io.IOException): void;
            _readBodyAsync(handler: java.net.http.HttpResponse$BodyHandler<T>, returnConnectionToPool: boolean, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<T>;
            _registerResponseSubscriber(subscriber: Http1Exchange$Http1ResponseBodySubscriber<T>): boolean;
            _released(): void;
            _request(): HttpRequestImpl;
            _requestMoreBody(): void;
            _runInline(run: java.lang.Runnable): void;
            _sendBodyAsync(): java.util.concurrent.CompletableFuture<ExchangeImpl<T>>;
            _sendHeadersAsync(): java.util.concurrent.CompletableFuture<ExchangeImpl<T>>;
            _switchAssertState(expected: Http1Exchange$State, newState: Http1Exchange$State): Http1Exchange$State;
            _switchState(newState: Http1Exchange$State): Http1Exchange$State;
            toString(): string;
            _unregisterResponseSubscriber(subscriber: Http1Exchange$Http1ResponseBodySubscriber<T>): boolean;
            _upgraded(): void;
            _asyncReceiver: Http1AsyncReceiver;
            _bodySentCF: java.util.concurrent.CompletableFuture<ExchangeImpl<T>>;
            _bodySubscriber: Http1Exchange$Http1RequestBodySubscriber;
            _client: HttpClientImpl;
            _connection: HttpConnection;
            _debug: common.Logger;
            _executor: java.util.concurrent.Executor;
            _failedRef: java.util.concurrent.atomic.AtomicReference<java.lang.Throwable>;
            _headersSentCF: java.util.concurrent.CompletableFuture<ExchangeImpl<T>>;
            _lock: java.util.concurrent.locks.ReentrantLock;
            _operations: java.util.List<java.util.concurrent.CompletableFuture<any>>;
            _outgoing: java.util.concurrent.ConcurrentLinkedDeque<Http1Exchange$DataPair>;
            _request: HttpRequestImpl;
            _requestAction: Http1Request;
            _response: Http1Response<T>;
            _responseSubscriber: java.net.http.HttpResponse$BodySubscriber<T>;
            _state: Http1Exchange$State;
            _upgraded: boolean;
            _writePublisher: http$Http1Publisher;
          }
          interface Http1Exchange<T> extends CombineTypes<[_Http1Exchange<T>, ExchangeImpl<T>]> {}
          interface _Http1Exchange$DataPair$$static extends ClassLike {
            _new(data: java.util.List<java.nio.ByteBuffer>, throwable: java.lang.Throwable): Http1Exchange$DataPair;
          }
          let Http1Exchange$DataPair: _Http1Exchange$DataPair$$static;
          interface _Http1Exchange$DataPair {
            toString(): string;
            _data: java.util.List<java.nio.ByteBuffer>;
            _throwable: java.lang.Throwable;
          }
          interface Http1Exchange$DataPair extends CombineTypes<[_Http1Exchange$DataPair, java.lang.Object]> {}
          interface _Http1Exchange$Http1Publisher$$static extends ClassLike {
            _new(this$0: Http1Exchange): Http1Exchange$Http1Publisher;
          }
          let Http1Exchange$Http1Publisher: _Http1Exchange$Http1Publisher$$static;
          interface _Http1Exchange$Http1Publisher {
            _checkRequestCancelled(): boolean;
            _dbgString(): string;
            subscribe(s: java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>): void;
            _cancelled: boolean;
            _dbgTag: string;
            _debug: common.Logger;
            _demand: common.Demand;
            _subscriber: java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>;
            _subscription: http$Http1WriteSubscription;
            _this$0: Http1Exchange;
            _writeScheduler: common.SequentialScheduler;
          }
          interface Http1Exchange$Http1Publisher extends CombineTypes<[_Http1Exchange$Http1Publisher, jdk.internal.net.http.common.FlowTube$TubePublisher, java.lang.Object]> {}
          interface _Http1Exchange$Http1Publisher$Http1WriteSubscription$$static extends ClassLike {
            _new(this$1: Http1Exchange$Http1Publisher): Http1Exchange$Http1Publisher$Http1WriteSubscription;
          }
          let Http1Exchange$Http1Publisher$Http1WriteSubscription: _Http1Exchange$Http1Publisher$Http1WriteSubscription$$static;
          interface _Http1Exchange$Http1Publisher$Http1WriteSubscription {
            cancel(): void;
            request(n: long): void;
            _this$1: Http1Exchange$Http1Publisher;
          }
          interface Http1Exchange$Http1Publisher$Http1WriteSubscription extends CombineTypes<[_Http1Exchange$Http1Publisher$Http1WriteSubscription, java.lang.Object, java.util.concurrent.Flow$Subscription]> {}
          interface _Http1Exchange$Http1Publisher$WriteTask$$static extends ClassLike {
            _new(this$1: Http1Exchange$Http1Publisher): Http1Exchange$Http1Publisher$WriteTask;
          }
          let Http1Exchange$Http1Publisher$WriteTask: _Http1Exchange$Http1Publisher$WriteTask$$static;
          interface _Http1Exchange$Http1Publisher$WriteTask {
            run(): void;
            _this$1: Http1Exchange$Http1Publisher;
          }
          interface Http1Exchange$Http1Publisher$WriteTask extends CombineTypes<[_Http1Exchange$Http1Publisher$WriteTask, java.lang.Object, java.lang.Runnable]> {}
          interface _Http1Exchange$Http1RequestBodySubscriber$$static extends ClassLike {
            _completeSubscriber(debug: http.common.Logger): Http1Exchange$Http1RequestBodySubscriber;
            _COMPLETED: java.util.List<java.nio.ByteBuffer>;
            _new(debug: http.common.Logger): Http1Exchange$Http1RequestBodySubscriber;
          }
          let Http1Exchange$Http1RequestBodySubscriber: _Http1Exchange$Http1RequestBodySubscriber$$static;
          interface _Http1Exchange$Http1RequestBodySubscriber {
            _cancelSubscription(): void;
            _currentStateMessage(): string;
(): string;
            _isSubscribed(): boolean;
            _request(n: long): void;
            _setSubscription(subscription: java.util.concurrent.Flow$Subscription): void;
            _complete: boolean;
            _debug: common.Logger;
            _subscription: java.util.concurrent.Flow$Subscription;
            _whenSubscribed: common.MinimalFuture<java.util.concurrent.Flow$Subscription>;
          }
          interface Http1Exchange$Http1RequestBodySubscriber extends CombineTypes<[_Http1Exchange$Http1RequestBodySubscriber, java.util.concurrent.Flow$Subscriber<java.nio.ByteBuffer>, java.lang.Object]> {}
          interface _Http1Exchange$Http1ResponseBodySubscriber$$static<U> extends ClassLike {
            _new(userSubscriber: java.net.http.HttpResponse$BodySubscriber<U>, exchange: Http1Exchange<U>): Http1Exchange$Http1ResponseBodySubscriber<U>;
          }
          let Http1Exchange$Http1ResponseBodySubscriber: _Http1Exchange$Http1ResponseBodySubscriber$$static<U>;
          interface _Http1Exchange$Http1ResponseBodySubscriber<U> {
            _register(): void;
            _unregister(): void;
            _exchange: Http1Exchange<U>;
          }
          interface Http1Exchange$Http1ResponseBodySubscriber<U> extends CombineTypes<[_Http1Exchange$Http1ResponseBodySubscriber<U>, common.HttpBodySubscriberWrapper<U>]> {}
          interface _Http1Exchange$State$$static extends ClassLike {
            valueOf(name: string): Http1Exchange$State;
            values(): Http1Exchange$State[];
            readonly BODY: Http1Exchange$State;
            readonly COMPLETED: Http1Exchange$State;
            readonly COMPLETING: Http1Exchange$State;
            readonly ERROR: Http1Exchange$State;
            readonly HEADERS: Http1Exchange$State;
            readonly INITIAL: Http1Exchange$State;
          }
          let Http1Exchange$State: _Http1Exchange$State$$static;
          interface _Http1Exchange$State {
          }
          interface Http1Exchange$State extends CombineTypes<[_Http1Exchange$State]> {}
          interface _Http1HeaderParser$$static extends ClassLike {
            _newSize(size: long, a1: int, name: int): long;
            _CR: char;
            _HT: char;
            _K: int;
            _LF: char;
            _MAX_HTTP_HEADER_SIZE: int;
            _SP: char;
            _new(): Http1HeaderParser;
          }
          let Http1HeaderParser: _Http1HeaderParser$$static;
          interface _Http1HeaderParser {
            _addHeaderFromString(headerString: string): void;
            _canContinueParsing(buffer: java.nio.ByteBuffer): boolean;
            _checkMaxHeaderSize(sz: int): void;
            currentStateMessage(): string;
            _get(input: java.nio.ByteBuffer): char;
            _headers(): java.net.http.HttpHeaders;
            _maybeEndHeaders(input: java.nio.ByteBuffer): void;
            _maybeStartHeaders(input: java.nio.ByteBuffer): void;
            _parse(input: java.nio.ByteBuffer): boolean;
            _protocolException(format: string, args: any[]): java.net.ProtocolException;
            _protocolException(format: string, ...args: any[]): java.net.ProtocolException;
            _readResumeHeader(input: java.nio.ByteBuffer): void;
            _readResumeStatusLine(input: java.nio.ByteBuffer): void;
            _readStatusLineFeed(input: java.nio.ByteBuffer): void;
            _responseCode(): int;
            _resumeOrEndHeaders(input: java.nio.ByteBuffer): void;
            _resumeOrLF(input: java.nio.ByteBuffer): void;
            _resumeOrSecondCR(input: java.nio.ByteBuffer): void;
            _statusLine(): string;
            _headers: java.net.http.HttpHeaders;
            _privateMap: java.util.Map<string,java.util.List<string>>;
            _responseCode: int;
            _sb: http$stringBuilder;
            _size: long;
            _state: Http1HeaderParser$State;
            _statusLine: string;
          }
          interface Http1HeaderParser extends CombineTypes<[_Http1HeaderParser, java.lang.Object]> {}
          interface _Http1HeaderParser$State$$static extends ClassLike {
            valueOf(name: string): Http1HeaderParser$State;
            values(): Http1HeaderParser$State[];
            readonly FINISHED: Http1HeaderParser$State;
            readonly HEADER: Http1HeaderParser$State;
            readonly HEADER_FOUND_CR: Http1HeaderParser$State;
            readonly HEADER_FOUND_CR_LF: Http1HeaderParser$State;
            readonly HEADER_FOUND_CR_LF_CR: Http1HeaderParser$State;
            readonly HEADER_FOUND_LF: Http1HeaderParser$State;
            readonly INITIAL: Http1HeaderParser$State;
            readonly STATUS_LINE: Http1HeaderParser$State;
            readonly STATUS_LINE_END: Http1HeaderParser$State;
            readonly STATUS_LINE_END_CR: Http1HeaderParser$State;
            readonly STATUS_LINE_END_LF: Http1HeaderParser$State;
            readonly STATUS_LINE_FOUND_CR: Http1HeaderParser$State;
            readonly STATUS_LINE_FOUND_LF: Http1HeaderParser$State;
          }
          let Http1HeaderParser$State: _Http1HeaderParser$State$$static;
          interface _Http1HeaderParser$State {
          }
          interface Http1HeaderParser$State extends CombineTypes<[_Http1HeaderParser$State]> {}
          interface _Http1Request$$static extends ClassLike {
            _getHeader(size: int): java.nio.ByteBuffer;
            _COOKIE_HEADER: string;
            _CRLF: byte[];
            _EMPTY_CHUNK_BYTES: byte[];
            _NOCOOKIES: java.util.function.BiPredicate<string,string>;
            _new(request: HttpRequestImpl, http1Exchange: Http1Exchange<any>): Http1Request;
          }
          let Http1Request: _Http1Request$$static;
          interface _Http1Request {
            _authorityString(addr: java.net.InetSocketAddress): string;
            _collectCookies(sb: Http1Request$stringBuilder, system: java.net.http.HttpHeaders, user: java.net.http.HttpHeaders): void;
            collectHeaders0(sb: Http1Request$stringBuilder): void;
            _collectHeaders1(sb: Http1Request$stringBuilder, headers: java.net.http.HttpHeaders, filter: java.util.function.BiPredicate<string,string>): void;
            _continueRequest(): Http1Exchange$Http1RequestBodySubscriber;
            _finished(): boolean;
            _getPathAndQuery(uri: java.net.URI): string;
            _headers(): java.util.List<java.nio.ByteBuffer>;
            _hostString(): string;
            _logHeaders(completeHeaders: string): void;
            _requestURI(): string;
            _setFinished(): void;
            _connection: HttpConnection;
            _contentLength: long;
            _debug: common.Logger;
            _finished: boolean;
            _http1Exchange: Http1Exchange<any>;
            _request: HttpRequestImpl;
            _requestPublisher: java.net.http.HttpRequest$BodyPublisher;
            _streaming: boolean;
            _systemHeadersBuilder: common.HttpHeadersBuilder;
            _userHeaders: java.net.http.HttpHeaders;
          }
          interface Http1Request extends CombineTypes<[_Http1Request, java.lang.Object]> {}
          interface _Http1Request$FixedContentSubscriber$$static extends ClassLike {
            _new(this$0: Http1Request): Http1Request$FixedContentSubscriber;
          }
          let Http1Request$FixedContentSubscriber: _Http1Request$FixedContentSubscriber$$static;
          interface _Http1Request$FixedContentSubscriber {
            currentStateMessage(): string;
            onComplete(): void;
            onError(throwable: java.lang.Throwable): void;
            onNext(item: java.nio.ByteBuffer): void;
            onNext(a0: any): void;
            onSubscribe(subscription: java.util.concurrent.Flow$Subscription): void;
            _contentWritten: long;
            _this$0: Http1Request;
          }
          interface Http1Request$FixedContentSubscriber extends CombineTypes<[_Http1Request$FixedContentSubscriber, jdk.internal.net.http.Http1Exchange$Http1RequestBodySubscriber]> {}
          interface _Http1Request$StreamSubscriber$$static extends ClassLike {
            _new(this$0: Http1Request): Http1Request$StreamSubscriber;
          }
          let Http1Request$StreamSubscriber: _Http1Request$StreamSubscriber$$static;
          interface _Http1Request$StreamSubscriber {
            currentStateMessage(): string;
            onComplete(): void;
            onError(throwable: java.lang.Throwable): void;
            onNext(item: java.nio.ByteBuffer): void;
            onNext(a0: any): void;
            onSubscribe(subscription: java.util.concurrent.Flow$Subscription): void;
            _this$0: Http1Request;
          }
          interface Http1Request$StreamSubscriber extends CombineTypes<[_Http1Request$StreamSubscriber, jdk.internal.net.http.Http1Exchange$Http1RequestBodySubscriber]> {}
          interface _Http1Response$$static<T> extends ClassLike {
            _MAX_IGNORE: int;
            _responseCount: java.util.concurrent.atomic.AtomicLong;
            _new(conn: HttpConnection, exchange: Http1Exchange<T>, asyncReceiver: Http1AsyncReceiver): Http1Response<T>;
          }
          let Http1Response: _Http1Response$$static<T>;
          interface _Http1Response<T> {
            _advance(previous: Http1Response$State): Http1Response$State;
            _closeWhenFinished(): void;
            _completed(): void;
            _dbgString(): string;
            _finished(): boolean;
            _fixupContentLen(clen: long): long;
            ignoreBody(executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<java.lang.Void>;
            nullBody(resp: java.net.http.HttpResponse<T>, t: java.lang.Throwable): void;
            _onFinished(): void;
            _onReadError(t: java.lang.Throwable): void;
            readBody<U>(p: java.net.http.HttpResponse$BodySubscriber<U>, return2Cache: boolean, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<U>;
            readHeadersAsync(executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<Response>;
            _receiver(state: Http1Response$State): Http1Response$Receiver<any>;
            _responseCode(): int;
            _responseHeaders(): java.net.http.HttpHeaders;
            _asyncReceiver: Http1AsyncReceiver;
            _bodyParser: ResponseContent$BodyParser;
            _bodyReader: http$BodyReader;
            _closeWhenFinished: boolean;
            _connection: HttpConnection;
            _content: ResponseContent;
            _dbgTag: string;
            _debug: common.Logger;
            _eof: java.io.EOFException;
            _exchange: Http1Exchange<T>;
            _finished: boolean;
            _firstTimeAround: boolean;
            _hd: Http1HeaderParser;
            _headers: java.net.http.HttpHeaders;
            _headersReader: http$HeadersReader;
            _id: long;
            _readProgress: Http1Response$State;
            _request: HttpRequestImpl;
            _response: Response;
            _responseCode: int;
            _return2Cache: boolean;
          }
          interface Http1Response<T> extends CombineTypes<[_Http1Response<T>, java.lang.Object]> {}
          interface _Http1Response$BodyReader$$static extends ClassLike {
            _new(this$0: java.util.function.Consumer<Http1Response$State>): Http1Response$BodyReader;
          }
          let Http1Response$BodyReader: _Http1Response$BodyReader$$static;
          interface _Http1Response$BodyReader {
            close(error: java.lang.Throwable): void;
            _completion(): java.util.concurrent.CompletableFuture<Http1Response$State>;
            _handle(b: java.nio.ByteBuffer, parser: ResponseContent$BodyParser, cf: java.util.concurrent.CompletableFuture<Http1Response$State>): void;
            _handle(a0: java.nio.ByteBuffer, a1: any, a2: java.util.concurrent.CompletableFuture): void;
            _onComplete(closedExceptionally: java.lang.Throwable): void;
            onReadError(t: java.lang.Throwable): void;
            onSubscribe(s: AbstractSubscription): void;
            _reset(): void;
            _start(parser: ResponseContent$BodyParser): void;
            _start(a0: any): void;
            subscription(): AbstractSubscription;
            toString(): string;
            tryAsyncReceive(b: java.nio.ByteBuffer): boolean;
            _cf: java.util.concurrent.CompletableFuture<Http1Response$State>;
            _onComplete: java.util.function.Consumer<Http1Response$State>;
            _parser: ResponseContent$BodyParser;
            _subscription: AbstractSubscription;
            _this$0: Http1Response;
          }
          interface Http1Response$BodyReader extends CombineTypes<[_Http1Response$BodyReader, Http1Response$Receiver<ResponseContent$BodyParser>]> {}
          interface _Http1Response$ClientRefCountTracker$$static extends ClassLike {
            _STATE: java.lang.invoke.VarHandle;
            _new(client: HttpClientImpl, logger: http.common.Logger): Http1Response$ClientRefCountTracker;
          }
          let Http1Response$ClientRefCountTracker: _Http1Response$ClientRefCountTracker$$static;
          interface _Http1Response$ClientRefCountTracker {
            acquire(): boolean;
            tryRelease(): void;
            _client: HttpClientImpl;
            _debug: common.Logger;
            _state: byte;
          }
          interface Http1Response$ClientRefCountTracker extends CombineTypes<[_Http1Response$ClientRefCountTracker, java.lang.Object]> {}
          interface _Http1Response$HeadersReader$$static extends ClassLike {
            _new(this$0: java.util.function.Consumer<Http1Response$State>): Http1Response$HeadersReader;
          }
          let Http1Response$HeadersReader: _Http1Response$HeadersReader$$static;
          interface _Http1Response$HeadersReader {
            close(error: java.lang.Throwable): void;
            _completion(): java.util.concurrent.CompletableFuture<Http1Response$State>;
            _handle(b: java.nio.ByteBuffer, parser: Http1HeaderParser, cf: java.util.concurrent.CompletableFuture<Http1Response$State>): void;
            _handle(a0: java.nio.ByteBuffer, a1: any, a2: java.util.concurrent.CompletableFuture): void;
            onReadError(t: java.lang.Throwable): void;
            onSubscribe(s: AbstractSubscription): void;
            _reset(): void;
            _start(hp: Http1HeaderParser): void;
            _start(a0: any): void;
            subscription(): AbstractSubscription;
            tryAsyncReceive(ref: java.nio.ByteBuffer): boolean;
            _cf: java.util.concurrent.CompletableFuture<Http1Response$State>;
            _count: long;
            _onComplete: java.util.function.Consumer<Http1Response$State>;
            _parser: Http1HeaderParser;
            _subscription: AbstractSubscription;
            _this$0: Http1Response;
          }
          interface Http1Response$HeadersReader extends CombineTypes<[_Http1Response$HeadersReader, Http1Response$Receiver<Http1HeaderParser>]> {}
          interface _Http1Response$Receiver$$static<T> extends ClassLike {
            _new(): Http1Response$Receiver<T>;
          }
          let Http1Response$Receiver: _Http1Response$Receiver$$static<T>;
          interface _Http1Response$Receiver<T> {
            _accept(buf: java.nio.ByteBuffer, parser: T, cf: java.util.concurrent.CompletableFuture<Http1Response$State>): boolean;
            _completion(): java.util.concurrent.CompletableFuture<Http1Response$State>;
            _handle(a0: java.nio.ByteBuffer, a1: T, a2: java.util.concurrent.CompletableFuture<Http1Response$State>): void;
            onReadError(a0: java.lang.Throwable): void;
            onSubscribe(a0: AbstractSubscription): void;
            _reset(): void;
            _start(a0: T): void;
            subscription(): AbstractSubscription;
            tryAsyncReceive(a0: java.nio.ByteBuffer): boolean;
          }
          interface Http1Response$Receiver<T> extends CombineTypes<[_Http1Response$Receiver<T>, java.lang.Object, Http1AsyncReceiver$Http1AsyncDelegate]> {}
          interface _Http1Response$State$$static extends ClassLike {
            valueOf(name: string): Http1Response$State;
            values(): Http1Response$State[];
            readonly DONE: Http1Response$State;
            readonly INITIAL: Http1Response$State;
            readonly READING_BODY: Http1Response$State;
            readonly READING_HEADERS: Http1Response$State;
          }
          let Http1Response$State: _Http1Response$State$$static;
          interface _Http1Response$State {
          }
          interface Http1Response$State extends CombineTypes<[_Http1Response$State]> {}
          interface _Http2ClientImpl$$static extends ClassLike {
            _getParameter(property: string, min: int, max: int, defaultValue: int): int;
            _K: int;
            _debug: common.Logger;
            _new(client: HttpClientImpl): Http2ClientImpl;
          }
          let Http2ClientImpl: _Http2ClientImpl$$static;
          interface _Http2ClientImpl {
            _client(): HttpClientImpl;
            _close(h2c: Http2Connection): void;
            _getClientSettings(defaultServerPush: boolean): http.frame.SettingsFrame;
            _getConnectionFor(req: HttpRequestImpl, exchange: Exchange<any>): java.util.concurrent.CompletableFuture<Http2Connection>;
            _getConnectionWindowSize(clientSettings: http.frame.SettingsFrame): int;
            _getSettingsString(defaultServerPush: boolean): string;
            _offerConnection(c: Http2Connection): boolean;
            _removeFromPool(c: Http2Connection): void;
            _serverPushDisabled(): boolean;
            _stop(): void;
            stopping(): boolean;
            _STOPPED: java.io.EOFException;
            _client: HttpClientImpl;
            _connectionPoolLock: java.util.concurrent.locks.ReentrantLock;
            _connections: java.util.Map<string,Http2Connection>;
            _failures: java.util.Set<string>;
            _stopping: boolean;
          }
          interface Http2ClientImpl extends CombineTypes<[_Http2ClientImpl, java.lang.Object]> {}
          interface _Http2Connection$$static extends ClassLike {
            _checkSSLConfig(aconn: AbstractAsyncSSLConnection): java.util.concurrent.CompletableFuture<any>;
            _createAsync(connection: HttpConnection, client2: Http2ClientImpl, exchange: Exchange<any>, initial: java.util.function.Supplier<java.nio.ByteBuffer>): java.util.concurrent.CompletableFuture<Http2Connection>;
            _createAsync(request: HttpRequestImpl, h2client: Http2ClientImpl, exchange: Exchange<any>): java.util.concurrent.CompletableFuture<Http2Connection>;
            _isServerInitiatedStream(streamid: int): boolean;
            _keyFor(connection: HttpConnection): string;
            _keyFor(request: HttpRequestImpl): string;
            _keyString(secure: boolean, proxy: java.net.InetSocketAddress, host: string, port: int): string;
            _CLIENT_PREFACE: string;
            _CLOSED_STATE: java.lang.invoke.VarHandle;
            _DEBUG_LOGGER: common.Logger;
            _DEFAULT_FRAME_SIZE: int;
            _EMPTY_TRIGGER: java.nio.ByteBuffer;
            _HALF_CLOSED_LOCAL: int;
            _HALF_CLOSED_REMOTE: int;
            _IDLE_SHUTDOWN_INITIATED: int;
            _MAX_CLIENT_STREAM_ID: int;
            _MAX_LITERAL_WITH_INDEXING: int;
            _MAX_ORPHANED_HEADERS: int;
            _MAX_SERVER_STREAM_ID: int;
            _PREFACE_BYTES: byte[];
            _SHUTDOWN_REQUESTED: int;
          }
          let Http2Connection: _Http2Connection$$static;
          interface _Http2Connection {
            _asyncReceive(buffer: java.nio.ByteBuffer): void;
            _cancelIdleShutdownEvent(): void;
            _checkMaxOrphanedHeadersExceeded(hf: http.frame.HeaderFrame): string;
            _client(): HttpClientImpl;
            _close(): void;
            _closeAllStreams(): void;
            _closeStream(streamid: int): void;
            _completePushPromise<T>(promisedStreamid: int, parent: Stream<T>, headers: java.net.http.HttpHeaders): void;
            _connectFlows(connection: HttpConnection): void;
            _createPushStream<T>(parent: Stream<T>, pushEx: Exchange<T>): Stream$PushedStream<T>;
            _createStream<T>(exchange: Exchange<T>): Stream<T>;
            _dbgString(): string;
            _decodeHeaders(frame: http.frame.HeaderFrame, decoder: http.hpack.DecodingCallback): void;
            _decrementStreamsCount(streamid: int): void;
            _decrementStreamsCount0(streamid: int): void;
            _describeClosedState(state: int): string;
            _dropDataFrame(df: http.frame.DataFrame): void;
            _encodeFrame(frame: http.frame.Http2Frame): java.util.List<java.nio.ByteBuffer>;
            _encodeFrames(frames: java.util.List<http.frame.HeaderFrame>): java.util.List<java.nio.ByteBuffer>;
            _encodeHeaders(frame: http.frame.OutgoingHeaders<Stream<any>>): java.util.List<http.frame.HeaderFrame>;
            _encodeHeaders(oh: http.frame.OutgoingHeaders<Stream<any>>, stream: Stream<any>): java.util.List<java.nio.ByteBuffer>;
            _encodeHeadersImpl(bufferSize: int, headers: java.net.http.HttpHeaders[]): java.util.List<java.nio.ByteBuffer>;
            _encodeHeadersImpl(bufferSize: int, ...headers: java.net.http.HttpHeaders[]): java.util.List<java.nio.ByteBuffer>;
            _ensureWindowUpdated(df: http.frame.DataFrame): void;
            _finalStream(): boolean;
            _getHeaderBuffer(size: int): java.nio.ByteBuffer;
            _getInitialSendWindowSize(): int;
            _getInitialStream<T>(): Stream<T>;
            getMaxReceiveFrameSize(): int;
            getMaxSendFrameSize(): int;
            _getRecordedCause(): java.lang.Throwable;
            _getStream<T>(streamid: int): Stream<T>;
            _handleConnectionFrame(frame: http.frame.Http2Frame): void;
            _handleGoAway(frame: http.frame.GoAwayFrame): void;
            _handlePeerUnprocessedStreams(lastProcessedStream: long): void;
            _handlePing(frame: http.frame.PingFrame): void;
            _handlePushContinuation<T>(pcs: Http2Connection$PushContinuationState, parent: Stream<T>, cf: http.frame.ContinuationFrame): void;
            _handlePushPromise<T>(parent: Stream<T>, pp: http.frame.PushPromiseFrame): void;
            _handleSettings(frame: http.frame.SettingsFrame): void;
            _handleWindowUpdate(f: http.frame.WindowUpdateFrame): void;
            _isActive(): boolean;
            _isMarked(state: int, mask: int): boolean;
            _isMarkedForShutdown(): boolean;
            _isOpen(): boolean;
            _key(): string;
            _markClosedState(flag: int): boolean;
            _markHalfClosedLocal(): boolean;
            _markHalfClosedRemote(): boolean;
            _markIdleShutdownInitiated(): boolean;
            _markShutdownRequested(): boolean;
            _markStream(streamid: int, code: int): void;
            _maxConcurrentClientInitiatedStreams(): int;
            _maxConcurrentServerInitiatedStreams(): int;
            _offerConnection(): boolean;
            _processFrame(frame: http.frame.Http2Frame): void;
            _protocolError(errorCode: int): void;
            _protocolError(errorCode: int, msg: string): void;
            _publisher(): HttpConnection$HttpPublisher;
            _putStream<T>(stream: Stream<T>, streamid: int): void;
            _registerNewStream(oh: http.frame.OutgoingHeaders<Stream<any>>): Stream<any>;
            _releaseUnconsumed(df: http.frame.DataFrame): void;
            _reserveStream(clientInitiated: boolean, pushEnabled: boolean): boolean;
            _reserveStream0(clientInitiated: boolean, pushEnabled: boolean): boolean;
            _resetStream(streamid: int, code: int): void;
            _sendConnectionPreface(): void;
            _sendDataFrame(frame: http.frame.DataFrame): void;
            _sendFrame(frame: http.frame.Http2Frame): void;
            _sendUnorderedFrame(frame: http.frame.Http2Frame): void;
            serverPushEnabled(): boolean;
            _setFinalStream(): void;
            _shouldClose(): boolean;
            _shutdown(t: java.lang.Throwable): void;
            toString(): string;
            _tryReserveForPoolCheckout(): boolean;
            _cause: java.util.concurrent.atomic.AtomicReference<java.lang.Throwable>;
            _client2: Http2ClientImpl;
            _clientSettings: frame.SettingsFrame;
            _closedState: int;
            _connection: HttpConnection;
            _count: long;
            _debug: common.Logger;
            _debugHpack: common.Logger;
            _finalStream: boolean;
            _framesController: Http2Connection$FramesController;
            _framesDecoder: frame.FramesDecoder;
            _framesEncoder: frame.FramesEncoder;
            _hpackIn: hpack.Decoder;
            _hpackOut: hpack.Encoder;
            _idleConnectionTimeoutEvent: Http2Connection$IdleConnectionTimeoutEvent;
            _initial: java.util.function.Supplier<java.nio.ByteBuffer>;
            _initialStream: Stream<any>;
            _key: string;
            _lastProcessedStreamInGoAway: java.util.concurrent.atomic.AtomicLong;
            _lastReservedClientStreamid: int;
            _lastReservedServerStreamid: int;
            _nextPushStream: int;
            _nextstreamid: int;
            _numReservedClientStreams: int;
            _numReservedServerStreams: int;
            _orphanedConsumer: common.ValidatingHeadersConsumer;
            _orphanedHeaders: java.util.concurrent.atomic.AtomicInteger;
            _pushContinuationState: Http2Connection$PushContinuationState;
            _sendlock: java.util.concurrent.locks.Lock;
            _serverSettings: frame.SettingsFrame;
            _stateLock: java.util.concurrent.locks.ReentrantLock;
            _streams: java.util.concurrent.ConcurrentMap<int,Stream<any>>;
            _subscriber: Http2Connection$Http2TubeSubscriber;
            _windowController: WindowController;
            _windowUpdater: Http2Connection$ConnectionWindowUpdateSender;
          }
          interface Http2Connection extends CombineTypes<[_Http2Connection, java.lang.Object]> {}
          interface _Http2Connection$ALPNException$$static extends ClassLike {
            _serialVersionUID: long;
            _new(msg: string, connection: AbstractAsyncSSLConnection): Http2Connection$ALPNException;
          }
          let Http2Connection$ALPNException: _Http2Connection$ALPNException$$static;
          interface _Http2Connection$ALPNException {
            _getConnection(): AbstractAsyncSSLConnection;
            _connection: AbstractAsyncSSLConnection;
          }
          interface Http2Connection$ALPNException extends CombineTypes<[_Http2Connection$ALPNException, java.io.IOException]> {}
          interface _Http2Connection$ConnectionWindowUpdateSender$$static extends ClassLike {
            new(connection: Http2Connection, initialWindowSize: int): Http2Connection$ConnectionWindowUpdateSender;
          }
          let Http2Connection$ConnectionWindowUpdateSender: _Http2Connection$ConnectionWindowUpdateSender$$static;
          interface _Http2Connection$ConnectionWindowUpdateSender {
            _getStreamId(): int;
            _windowSizeExceeded(received: long): boolean;
            _initialWindowSize: int;
          }
          interface Http2Connection$ConnectionWindowUpdateSender extends CombineTypes<[_Http2Connection$ConnectionWindowUpdateSender, jdk.internal.net.http.WindowUpdateSender]> {}
          interface _Http2Connection$FramesController$$static extends ClassLike {
          }
          let Http2Connection$FramesController: _Http2Connection$FramesController$$static;
          interface _Http2Connection$FramesController {
            _markPrefaceSent(): void;
            _processReceivedData(decoder: http.frame.FramesDecoder, buf: java.nio.ByteBuffer): boolean;
            _pending: java.util.List<java.nio.ByteBuffer>;
            _prefaceSent: boolean;
            _this$0: Http2Connection;
          }
          interface Http2Connection$FramesController extends CombineTypes<[_Http2Connection$FramesController, java.lang.Object]> {}
          interface _Http2Connection$Http2TubeSubscriber$$static extends ClassLike {
            _new(this$0: Http2Connection, client: HttpClientImpl): Http2Connection$Http2TubeSubscriber;
          }
          let Http2Connection$Http2TubeSubscriber: _Http2Connection$Http2TubeSubscriber$$static;
          interface _Http2Connection$Http2TubeSubscriber {
            dropSubscription(): void;
            onComplete(): void;
            onError(throwable: java.lang.Throwable): void;
            onNext(item: java.util.List<java.nio.ByteBuffer>): void;
            onNext(a0: any): void;
            onSubscribe(subscription: java.util.concurrent.Flow$Subscription): void;
            _processQueue(): void;
            _runOrSchedule(): void;
            _stop(error: java.lang.Throwable): void;
            _client: HttpClientImpl;
            _completed: boolean;
            _dropped: boolean;
            _errorRef: java.util.concurrent.atomic.AtomicReference<java.lang.Throwable>;
            _queue: java.util.concurrent.ConcurrentLinkedQueue<java.nio.ByteBuffer>;
            _scheduler: common.SequentialScheduler;
            _subscription: java.util.concurrent.Flow$Subscription;
            _this$0: Http2Connection;
          }
          interface Http2Connection$Http2TubeSubscriber extends CombineTypes<[_Http2Connection$Http2TubeSubscriber, jdk.internal.net.http.common.FlowTube$TubeSubscriber, java.lang.Object]> {}
          interface _Http2Connection$IdleConnectionTimeoutEvent$$static extends ClassLike {
            _new(this$0: Http2Connection, duration: java.time.Duration): Http2Connection$IdleConnectionTimeoutEvent;
          }
          let Http2Connection$IdleConnectionTimeoutEvent: _Http2Connection$IdleConnectionTimeoutEvent$$static;
          interface _Http2Connection$IdleConnectionTimeoutEvent {
            _cancel(): void;
            handle(): void;
            toString(): string;
            _cancelled: boolean;
            _this$0: Http2Connection;
          }
          interface Http2Connection$IdleConnectionTimeoutEvent extends CombineTypes<[_Http2Connection$IdleConnectionTimeoutEvent, jdk.internal.net.http.TimeoutEvent]> {}
          interface _Http2Connection$PushContinuationState$$static extends ClassLike {
          }
          let Http2Connection$PushContinuationState: _Http2Connection$PushContinuationState$$static;
          interface _Http2Connection$PushContinuationState {
            equals(o: any): boolean;
            hashCode(): int;
            pushContDecoder(): Http2Connection$PushPromiseDecoder;
            pushContFrame(): http.frame.PushPromiseFrame;
            toString(): string;
          }
          interface Http2Connection$PushContinuationState extends CombineTypes<[_Http2Connection$PushContinuationState, java.lang.Record]> {}
          interface _Http2Connection$PushPromiseDecoder$$static extends ClassLike {
            _new(a0: int, parentStreamId: int, pushPromiseStreamId: Stream<any>): Http2Connection$PushPromiseDecoder;
          }
          let Http2Connection$PushPromiseDecoder: _Http2Connection$PushPromiseDecoder$$static;
          interface _Http2Connection$PushPromiseDecoder {
            _addHeader(name: string, value: string): void;
            onMaxHeaderListSizeReached(size: long, a1: int): void;
            _errorRef: java.util.concurrent.atomic.AtomicReference<java.lang.Throwable>;
            _parent: Stream<any>;
            _parentStreamId: int;
            _pushPromiseStreamId: int;
            _this$0: Http2Connection;
          }
          interface Http2Connection$PushPromiseDecoder extends CombineTypes<[_Http2Connection$PushPromiseDecoder, jdk.internal.net.http.hpack.DecodingCallback, jdk.internal.net.http.common.HeaderDecoder]> {}
          interface _HttpClientBuilderImpl$$static extends ClassLike {
            new(): HttpClientBuilderImpl;
          }
          let HttpClientBuilderImpl: _HttpClientBuilderImpl$$static;
          interface _HttpClientBuilderImpl {
            authenticator(a: java.net.Authenticator): HttpClientBuilderImpl;
            authenticator(a0: java.net.Authenticator): java.net.http.HttpClient$Builder;
            build(): java.net.http.HttpClient;
            connectTimeout(duration: java.time.Duration): HttpClientBuilderImpl;
            connectTimeout(a0: java.time.Duration): java.net.http.HttpClient$Builder;
            cookieHandler(cookieHandler: java.net.CookieHandler): HttpClientBuilderImpl;
            cookieHandler(a0: java.net.CookieHandler): java.net.http.HttpClient$Builder;
            executor(s: java.util.concurrent.Executor): HttpClientBuilderImpl;
            executor(a0: java.util.concurrent.Executor): java.net.http.HttpClient$Builder;
            followRedirects(policy: java.net.http.HttpClient$Redirect): HttpClientBuilderImpl;
            followRedirects(a0: java.net.http.HttpClient$Redirect): java.net.http.HttpClient$Builder;
            localAddress(localAddr: java.net.InetAddress): java.net.http.HttpClient$Builder;
            priority(priority: int): HttpClientBuilderImpl;
            priority(a0: int): java.net.http.HttpClient$Builder;
            proxy(proxy: java.net.ProxySelector): HttpClientBuilderImpl;
            proxy(a0: java.net.ProxySelector): java.net.http.HttpClient$Builder;
            sslContext(sslContext: javax.net.ssl.SSLContext): HttpClientBuilderImpl;
            sslContext(a0: javax.net.ssl.SSLContext): java.net.http.HttpClient$Builder;
            sslParameters(sslParameters: javax.net.ssl.SSLParameters): HttpClientBuilderImpl;
            sslParameters(a0: javax.net.ssl.SSLParameters): java.net.http.HttpClient$Builder;
            version(version: java.net.http.HttpClient$Version): HttpClientBuilderImpl;
            version(a0: java.net.http.HttpClient$Version): java.net.http.HttpClient$Builder;
            _authenticator: java.net.Authenticator;
            _connectTimeout: java.time.Duration;
            _cookieHandler: java.net.CookieHandler;
            _executor: java.util.concurrent.Executor;
            _followRedirects: java.net.http.HttpClient$Redirect;
            _localAddr: java.net.InetAddress;
            _priority: int;
            _proxy: java.net.ProxySelector;
            _sslContext: javax.net.ssl.SSLContext;
            _sslParams: javax.net.ssl.SSLParameters;
            _version: java.net.http.HttpClient$Version;
          }
          interface HttpClientBuilderImpl extends CombineTypes<[_HttpClientBuilderImpl, java.net.http.HttpClient$Builder, java.lang.Object]> {}
          interface _HttpClientFacade$$static extends ClassLike {
            _cleaner: java.lang.ref.Cleaner;
            _new(impl: HttpClientImpl): HttpClientFacade;
          }
          let HttpClientFacade: _HttpClientFacade$$static;
          interface _HttpClientFacade {
            authenticator(): java.util.Optional<java.net.Authenticator>;
            awaitTermination(duration: java.time.Duration): boolean;
            close(): void;
            connectTimeout(): java.util.Optional<java.time.Duration>;
            cookieHandler(): java.util.Optional<java.net.CookieHandler>;
            executor(): java.util.Optional<java.util.concurrent.Executor>;
            followRedirects(): java.net.http.HttpClient$Redirect;
            getOperationsTracker(): http.common.OperationTrackers$Tracker;
            isTerminated(): boolean;
            newWebSocketBuilder(): java.net.http.WebSocket$Builder;
            proxy(): java.util.Optional<java.net.ProxySelector>;
            send<T>(req: java.net.http.HttpRequest, responseBodyHandler: java.net.http.HttpResponse$BodyHandler<T>): java.net.http.HttpResponse<T>;
            sendAsync<T>(req: java.net.http.HttpRequest, responseBodyHandler: java.net.http.HttpResponse$BodyHandler<T>): java.util.concurrent.CompletableFuture<java.net.http.HttpResponse<T>>;
            sendAsync<T>(req: java.net.http.HttpRequest, responseBodyHandler: java.net.http.HttpResponse$BodyHandler<T>, pushPromiseHandler: java.net.http.HttpResponse$PushPromiseHandler<T>): java.util.concurrent.CompletableFuture<java.net.http.HttpResponse<T>>;
            shutdown(): void;
            shutdownNow(): void;
            sslContext(): javax.net.ssl.SSLContext;
            sslParameters(): javax.net.ssl.SSLParameters;
            theExecutor(): java.util.concurrent.Executor;
            toString(): string;
            version(): java.net.http.HttpClient$Version;
            _impl: HttpClientImpl;
          }
          interface HttpClientFacade extends CombineTypes<[_HttpClientFacade, jdk.internal.net.http.common.OperationTrackers$Trackable, java.net.http.HttpClient]> {}
          interface _HttpClientImpl$$static extends ClassLike {
            _abortPendingRequests(client: HttpClientImpl, reason: java.lang.Throwable): void;
            _closeSubscribers(client: HttpClientImpl, t: java.lang.Throwable): void;
            _create(builder: HttpClientBuilderImpl): HttpClientFacade;
            _getDefaultParams(ctx: javax.net.ssl.SSLContext): javax.net.ssl.SSLParameters;
            _getDefaultProxySelector(): java.net.ProxySelector;
            _getTimeoutProp(prop: string, def: long): long;
            _registerPending<T>(pending: HttpClientImpl$PendingRequest, res: java.util.concurrent.CompletableFuture<T>): java.util.concurrent.CompletableFuture<T>;
            _ASYNC_POOL: java.util.concurrent.Executor;
            _CLIENT_IDS: java.util.concurrent.atomic.AtomicLong;
            _DEBUGELAPSED: boolean;
            _DEBUGTIMEOUT: boolean;
            _DEFAULT_KEEP_ALIVE_TIMEOUT: int;
            _IDLE_CONNECTION_TIMEOUT: long;
            _KEEP_ALIVE_TIMEOUT: long;
          }
          let HttpClientImpl: _HttpClientImpl$$static;
          interface _HttpClientImpl {
            _addFilter(f: java.lang.Class<HeaderFilter>): void;
            authenticator(): java.util.Optional<java.net.Authenticator>;
            awaitTermination(duration: java.time.Duration): boolean;
            _cancelTimer(event: TimeoutEvent): void;
            _client2(): Http2ClientImpl;
            _closeConnection(conn: HttpConnection): void;
            _closeSubscribers(): void;
            connectTimeout(): java.util.Optional<java.time.Duration>;
            connectionClosed(plainHttpConnection: PlainHttpConnection): void;
            connectionOpened(plainHttpConnection: PlainHttpConnection): void;
            _connectionPool(): ConnectionPool;
            cookieHandler(): java.util.Optional<java.net.CookieHandler>;
            _dbgString(): string;
            _debugCompleted(tag: string, startNanos: long, a2: java.net.http.HttpRequest): void;
            _debugInterestOps(channel: java.nio.channels.SelectableChannel): string;
            _eventUpdated(event: AsyncEvent): void;
            executor(): java.util.Optional<java.util.concurrent.Executor>;
            _facade(): HttpClientFacade;
            _facadeCleanup(): void;
            _filterChain(): java.util.List<HeaderFilter>;
            _finished(): boolean;
            followRedirects(): java.net.http.HttpClient$Redirect;
            _getIdleConnectionTimeout(): java.time.Duration;
            getOperationsTracker(): http.common.OperationTrackers$Tracker;
            _getReceiveBufferSize(): int;
            _getSSLBufferSupplier(): http.common.BufferSupplier;
            _getSendBufferSize(): int;
            _idleConnectionTimeout(): java.util.Optional<java.time.Duration>;
            _initFilters(): void;
            _isReferenced(): boolean;
            _isSelectorClosed(): boolean;
            _isSelectorThread(): boolean;
            isTerminated(): boolean;
            _localAddress(): java.net.InetAddress;
            newConnectionId(): long;
            newWebSocketBuilder(): java.net.http.WebSocket$Builder;
            _onSubmitFailure(command: java.lang.Runnable, failure: java.lang.Throwable): void;
            proxy(): java.util.Optional<java.net.ProxySelector>;
            _proxySelector(): java.net.ProxySelector;
            _purgeTimeoutsAndReturnNextDeadline(): long;
            _reference(): long;
            _referenceCount(): long;
            _registerEvent(exchange: AsyncEvent): void;
            registerSubscriber(subscriber: http.common.HttpBodySubscriberWrapper<any>): boolean;
            _registerTimer(event: TimeoutEvent): void;
            _requestReference(): long;
            _requestUnreference(): long;
            _selectorClosedException(): java.io.IOException;
            send<T>(req: java.net.http.HttpRequest, responseHandler: java.net.http.HttpResponse$BodyHandler<T>): java.net.http.HttpResponse<T>;
            sendAsync<T>(userRequest: java.net.http.HttpRequest, responseHandler: java.net.http.HttpResponse$BodyHandler<T>): java.util.concurrent.CompletableFuture<java.net.http.HttpResponse<T>>;
            sendAsync<T>(userRequest: java.net.http.HttpRequest, responseHandler: java.net.http.HttpResponse$BodyHandler<T>, pushPromiseHandler: java.net.http.HttpResponse$PushPromiseHandler<T>): java.util.concurrent.CompletableFuture<java.net.http.HttpResponse<T>>;
            _sendAsync<T>(userRequest: java.net.http.HttpRequest, responseHandler: java.net.http.HttpResponse$BodyHandler<T>, pushPromiseHandler: java.net.http.HttpResponse$PushPromiseHandler<T>, exchangeExecutor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<java.net.http.HttpResponse<T>>;
            shutdown(): void;
            shutdownNow(): void;
            sslContext(): javax.net.ssl.SSLContext;
            sslParameters(): javax.net.ssl.SSLParameters;
            _start(): void;
            _stop(): void;
            _streamReference(): long;
            _streamUnreference(): long;
            _theExecutor(): HttpClientImpl$DelegatingExecutor;
            _theSSLContext(): javax.net.ssl.SSLContext;
            toString(): string;
            _unreference(): long;
            unregisterSubscriber(subscriber: http.common.HttpBodySubscriberWrapper<any>): boolean;
            version(): java.net.http.HttpClient$Version;
            _webSocketClose(): long;
            _webSocketOpen(): long;
            _CONNECTION_IDS: java.util.concurrent.atomic.AtomicLong;
            _authenticator: java.net.Authenticator;
            _client2: Http2ClientImpl;
            _connectTimeout: java.time.Duration;
            _connections: ConnectionPool;
            _cookieHandler: java.net.CookieHandler;
            _dbgTag: string;
            _debug: common.Logger;
            _debugelapsed: common.Logger;
            _debugtimeout: common.Logger;
            _delegatingExecutor: HttpClientImpl$DelegatingExecutor;
            _facadeRef: java.lang.ref.WeakReference<HttpClientFacade>;
            _filters: FilterFactory;
            _followRedirects: java.net.http.HttpClient$Redirect;
            _id: long;
            _implRef: java.lang.ref.WeakReference<HttpClientImpl>;
            _isAlive: java.util.concurrent.atomic.AtomicBoolean;
            _isDefaultExecutor: boolean;
            _isStarted: java.util.concurrent.atomic.AtomicBoolean;
            _localAddr: java.net.InetAddress;
            _openedConnections: java.util.concurrent.ConcurrentSkipListSet<PlainHttpConnection>;
            _pendingHttp2StreamCount: java.util.concurrent.atomic.AtomicLong;
            _pendingHttpOperationsCount: java.util.concurrent.atomic.AtomicLong;
            _pendingHttpRequestCount: java.util.concurrent.atomic.AtomicLong;
            _pendingOperationCount: java.util.concurrent.atomic.AtomicLong;
            _pendingRequestId: java.util.concurrent.atomic.AtomicLong;
            _pendingRequests: java.util.Set<HttpClientImpl$PendingRequest>;
            _pendingSubscribersCount: java.util.concurrent.atomic.AtomicLong;
            _pendingTCPConnectionCount: java.util.concurrent.atomic.AtomicLong;
            _pendingWebSocketCount: java.util.concurrent.atomic.AtomicLong;
            _proxySelector: java.net.ProxySelector;
            _selmgr: HttpClientImpl$SelectorManager;
            _shutdownRequested: boolean;
            _sslBufferSupplier: HttpClientImpl$SSLDirectBufferSupplier;
            _sslContext: javax.net.ssl.SSLContext;
            _sslParams: javax.net.ssl.SSLParameters;
            _subscribers: java.util.concurrent.ConcurrentSkipListSet<common.HttpBodySubscriberWrapper<any>>;
            _timeouts: java.util.TreeSet<TimeoutEvent>;
            _userProxySelector: java.net.ProxySelector;
            _version: java.net.http.HttpClient$Version;
          }
          interface HttpClientImpl extends CombineTypes<[_HttpClientImpl, jdk.internal.net.http.common.OperationTrackers$Trackable, java.net.http.HttpClient]> {}
          interface _HttpClientImpl$DefaultThreadFactory$$static extends ClassLike {
            _new(clientID: long): HttpClientImpl$DefaultThreadFactory;
          }
          let HttpClientImpl$DefaultThreadFactory: _HttpClientImpl$DefaultThreadFactory$$static;
          interface _HttpClientImpl$DefaultThreadFactory {
            newThread(r: java.lang.Runnable): java.lang.Thread;
            _namePrefix: string;
            _nextId: java.util.concurrent.atomic.AtomicInteger;
          }
          interface HttpClientImpl$DefaultThreadFactory extends CombineTypes<[_HttpClientImpl$DefaultThreadFactory, java.lang.Object, java.util.concurrent.ThreadFactory]> {}
          interface _HttpClientImpl$DelegatingExecutor$$static extends ClassLike {
            _new(isInSelectorThread: java.util.function.BooleanSupplier, delegate: java.util.concurrent.Executor, errorHandler: java.util.function.BiConsumer<java.lang.Runnable,java.lang.Throwable>): HttpClientImpl$DelegatingExecutor;
          }
          let HttpClientImpl$DelegatingExecutor: _HttpClientImpl$DelegatingExecutor$$static;
          interface _HttpClientImpl$DelegatingExecutor {
            _delegate(): java.util.concurrent.Executor;
            ensureExecutedAsync(command: java.lang.Runnable): void;
            execute(command: java.lang.Runnable): void;
            _shutdown(): void;
            _delegate: java.util.concurrent.Executor;
            _errorHandler: java.util.function.BiConsumer<java.lang.Runnable,java.lang.Throwable>;
            _isInSelectorThread: java.util.function.BooleanSupplier;
          }
          interface HttpClientImpl$DelegatingExecutor extends CombineTypes<[_HttpClientImpl$DelegatingExecutor, java.util.concurrent.Executor, java.lang.Object]> {}
          interface _HttpClientImpl$HttpClientTracker$$static extends ClassLike {
            _new(request: java.util.concurrent.atomic.AtomicLong, http: java.util.concurrent.atomic.AtomicLong, http2: java.util.concurrent.atomic.AtomicLong, ws: java.util.concurrent.atomic.AtomicLong, ops: java.util.concurrent.atomic.AtomicLong, conns: java.util.concurrent.atomic.AtomicLong, subscribers: java.util.concurrent.atomic.AtomicLong, ref: java.lang.ref.Reference<any>, implRef: java.lang.ref.Reference<any>, isAlive: java.util.concurrent.atomic.AtomicBoolean, isStarted: java.util.concurrent.atomic.AtomicBoolean, name: string): HttpClientImpl$HttpClientTracker;
          }
          let HttpClientImpl$HttpClientTracker: _HttpClientImpl$HttpClientTracker$$static;
          interface _HttpClientImpl$HttpClientTracker {
            getName(): string;
            getOutstandingHttp2Streams(): long;
            getOutstandingHttpOperations(): long;
            getOutstandingHttpRequests(): long;
            getOutstandingOperations(): long;
            getOutstandingSubscribers(): long;
            getOutstandingTcpConnections(): long;
            getOutstandingWebSocketOperations(): long;
            isFacadeReferenced(): boolean;
            isImplementationReferenced(): boolean;
            isSelectorAlive(): boolean;
            _connnectionsCount: java.util.concurrent.atomic.AtomicLong;
            _http2Count: java.util.concurrent.atomic.AtomicLong;
            _httpCount: java.util.concurrent.atomic.AtomicLong;
            _implRef: java.lang.ref.Reference<any>;
            _isAlive: java.util.concurrent.atomic.AtomicBoolean;
            _isStarted: java.util.concurrent.atomic.AtomicBoolean;
            _name: string;
            _operationsCount: java.util.concurrent.atomic.AtomicLong;
            _reference: java.lang.ref.Reference<any>;
            _requestCount: java.util.concurrent.atomic.AtomicLong;
            _subscribersCount: java.util.concurrent.atomic.AtomicLong;
            _websocketCount: java.util.concurrent.atomic.AtomicLong;
          }
          interface HttpClientImpl$HttpClientTracker extends CombineTypes<[_HttpClientImpl$HttpClientTracker, java.lang.Object, jdk.internal.net.http.common.OperationTrackers$Tracker]> {}
          interface _HttpClientImpl$PendingRequest$$static extends ClassLike {
          }
          let HttpClientImpl$PendingRequest: _HttpClientImpl$PendingRequest$$static;
          interface _HttpClientImpl$PendingRequest {
            abort(t: java.lang.Throwable): void;
            compareTo(o: HttpClientImpl$PendingRequest): int;
            compareTo(a0: any): int;
            _completeExceptionally(t: java.lang.Throwable): void;
            toString(): string;
            _cf: java.util.concurrent.CompletableFuture<any>;
            _client: HttpClientImpl;
            _id: long;
            _mex: MultiExchange<any>;
            _ref: any;
            _request: java.net.http.HttpRequest;
          }
          interface HttpClientImpl$PendingRequest extends CombineTypes<[_HttpClientImpl$PendingRequest, java.lang.Comparable<HttpClientImpl$PendingRequest>, java.lang.Object]> {}
          interface _HttpClientImpl$SSLDirectBufferSupplier$$static extends ClassLike {
            _POOL_SIZE: int;
            _new(client: HttpClientImpl): HttpClientImpl$SSLDirectBufferSupplier;
          }
          let HttpClientImpl$SSLDirectBufferSupplier: _HttpClientImpl$SSLDirectBufferSupplier$$static;
          interface _HttpClientImpl$SSLDirectBufferSupplier {
            get(): java.nio.ByteBuffer;
            get(): any;
            recycle(buffer: java.nio.ByteBuffer): void;
            _client: HttpClientImpl;
            _count: int;
            _debug: common.Logger;
            _pool: java.nio.ByteBuffer[];
            _tail: int;
          }
          interface HttpClientImpl$SSLDirectBufferSupplier extends CombineTypes<[_HttpClientImpl$SSLDirectBufferSupplier, jdk.internal.net.http.common.BufferSupplier, java.lang.Object]> {}
          interface _HttpClientImpl$SelectorAttachment$$static extends ClassLike {
            _debug: common.Logger;
            _new(chan: java.nio.channels.SelectableChannel, selector: java.nio.channels.Selector): HttpClientImpl$SelectorAttachment;
          }
          let HttpClientImpl$SelectorAttachment: _HttpClientImpl$SelectorAttachment$$static;
          interface _HttpClientImpl$SelectorAttachment {
            _abortPending(x: java.lang.Throwable): void;
            _events(interestOps: int): java.util.stream.Stream<AsyncEvent>;
            _register(e: AsyncEvent): void;
            _resetInterestOps(interestOps: int): void;
            _chan: java.nio.channels.SelectableChannel;
            _interestOps: int;
            _pending: java.util.Set<AsyncEvent>;
            _selector: java.nio.channels.Selector;
          }
          interface HttpClientImpl$SelectorAttachment extends CombineTypes<[_HttpClientImpl$SelectorAttachment, java.lang.Object]> {}
          interface _HttpClientImpl$SelectorManager$$static extends ClassLike {
            _DEF_NODEADLINE: int;
            _MAX_NODEADLINE: int;
            _MIN_NODEADLINE: int;
            _NODEADLINE: long;
            _new(ref: HttpClientImpl): HttpClientImpl$SelectorManager;
          }
          let HttpClientImpl$SelectorManager: _HttpClientImpl$SelectorManager$$static;
          interface _HttpClientImpl$SelectorManager {
            _abort(t: java.lang.Throwable): void;
            _eventUpdated(e: AsyncEvent): void;
            _handleEvent(event: AsyncEvent, ioe: java.io.IOException): void;
            _isClosed(): boolean;
            _lock(): void;
            _register(e: AsyncEvent): void;
            run(): void;
            _selectorClosedException(): java.io.IOException;
            _shutdown(): void;
            _unlock(): void;
            _wakeupSelector(): void;
            _closed: boolean;
            _debug: common.Logger;
            _debugtimeout: common.Logger;
            _deregistrations: java.util.List<AsyncTriggerEvent>;
            _errorRef: java.util.concurrent.atomic.AtomicReference<java.lang.Throwable>;
            _lock: java.util.concurrent.locks.ReentrantLock;
            _owner: HttpClientImpl;
            _pool: ConnectionPool;
            _registrations: java.util.List<AsyncEvent>;
            _selector: java.nio.channels.Selector;
          }
          interface HttpClientImpl$SelectorManager extends CombineTypes<[_HttpClientImpl$SelectorManager, java.lang.Thread]> {}
          interface _HttpClientImpl$SingleFacadeFactory$$static extends ClassLike {
          }
          let HttpClientImpl$SingleFacadeFactory: _HttpClientImpl$SingleFacadeFactory$$static;
          interface _HttpClientImpl$SingleFacadeFactory {
            _createFacade(impl: HttpClientImpl): HttpClientFacade;
            _facade: HttpClientFacade;
          }
          interface HttpClientImpl$SingleFacadeFactory extends CombineTypes<[_HttpClientImpl$SingleFacadeFactory, java.lang.Object]> {}
          interface _HttpConnection$$static extends ClassLike {
            getConnection(addr: java.net.InetSocketAddress, client: HttpClientImpl, request: HttpRequestImpl, version: java.net.http.HttpClient$Version): HttpConnection;
            _getPlainConnection(addr: java.net.InetSocketAddress, proxy: java.net.InetSocketAddress, request: HttpRequestImpl, client: HttpClientImpl): HttpConnection;
            _getSSLConnection(addr: java.net.InetSocketAddress, proxy: java.net.InetSocketAddress, alpn: string[], request: HttpRequestImpl, client: HttpClientImpl): HttpConnection;
            _hasRequiredHTTP2TLSVersion(client: java.net.http.HttpClient): boolean;
            _proxyTunnelHeaders(request: HttpRequestImpl): http.common.Utils$ProxyHeaders;
            readonly COMPARE_BY_ID: java.util.Comparator<HttpConnection>;
            _DEBUG_LOGGER: common.Logger;
            _testRequiredHTTP2TLSVersion: java.util.function.Predicate<string>;
            _new(address: java.net.InetSocketAddress, client: HttpClientImpl): HttpConnection;
          }
          let HttpConnection: _HttpConnection$$static;
          interface _HttpConnection {
            _addTrailingOperation(cf: java.util.concurrent.CompletionStage<any>): void;
            _address(): java.net.InetSocketAddress;
            _cacheKey(): ConnectionPool$CacheKey;
            _channel(): java.nio.channels.SocketChannel;
            _checkOpen(): boolean;
            _client(): HttpClientImpl;
            close(): void;
            _close(cause: java.lang.Throwable): void;
            _closeOrReturnToCache(hdrs: java.net.http.HttpHeaders): void;
            connectAsync(a0: Exchange<any>): java.util.concurrent.CompletableFuture<java.lang.Void>;
            _connected(): boolean;
            _contextRestricted(request: HttpRequestImpl, client: java.net.http.HttpClient): java.util.function.BiPredicate<string,string>;
            _dbgString(): string;
            finishConnect(): java.util.concurrent.CompletableFuture<java.lang.Void>;
            _getConnectionFlow(): http.common.FlowTube;
            _headerFilter(request: HttpRequestImpl): java.util.function.BiPredicate<string,string>;
            _id(): long;
            _isOpen(): boolean;
            _isProxied(): boolean;
            _isSecure(): boolean;
            _isTunnel(): boolean;
            _newConnectionId(client: HttpClientImpl): long;
            _proxy(): java.net.InetSocketAddress;
            _publisher(): HttpConnection$HttpPublisher;
            toString(): string;
            _address: java.net.InetSocketAddress;
            _client: HttpClientImpl;
            _dbgTag: string;
            _debug: common.Logger;
            _id: long;
            _trailingOperations: HttpConnection$TrailingOperations;
          }
          interface HttpConnection extends CombineTypes<[_HttpConnection, java.io.Closeable, java.lang.Object]> {}
          interface _HttpConnection$HttpPublisher$$static extends ClassLike {
          }
          let HttpConnection$HttpPublisher: _HttpConnection$HttpPublisher$$static;
          interface _HttpConnection$HttpPublisher {
            enqueue(a0: java.util.List<java.nio.ByteBuffer>): void;
            enqueueUnordered(a0: java.util.List<java.nio.ByteBuffer>): void;
            signalEnqueued(): void;
          }
          interface HttpConnection$HttpPublisher extends CombineTypes<[_HttpConnection$HttpPublisher, jdk.internal.net.http.common.FlowTube$TubePublisher, java.lang.Object]> {}
          interface _HttpConnection$PlainHttpPublisher$$static extends ClassLike {
            _new(this$0: HttpConnection): HttpConnection$PlainHttpPublisher;
            _new(this$0: HttpConnection, readingLock: any): HttpConnection$PlainHttpPublisher;
          }
          let HttpConnection$PlainHttpPublisher: _HttpConnection$PlainHttpPublisher$$static;
          interface _HttpConnection$PlainHttpPublisher {
            enqueue(buffers: java.util.List<java.nio.ByteBuffer>): void;
            enqueueUnordered(buffers: java.util.List<java.nio.ByteBuffer>): void;
            _flushTask(completer: http.common.SequentialScheduler$DeferredCompleter): void;
            _signal(): void;
            signalEnqueued(): void;
            subscribe(subscriber: java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>): void;
            _priority: java.util.concurrent.ConcurrentLinkedDeque<java.util.List<java.nio.ByteBuffer>>;
            _queue: java.util.concurrent.ConcurrentLinkedDeque<java.util.List<java.nio.ByteBuffer>>;
            _reading: any;
            _subscriber: java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>;
            _subscription: HttpConnection$PlainHttpPublisher$HttpWriteSubscription;
            _this$0: HttpConnection;
            _writeScheduler: common.SequentialScheduler;
          }
          interface HttpConnection$PlainHttpPublisher extends CombineTypes<[_HttpConnection$PlainHttpPublisher, jdk.internal.net.http.HttpConnection$HttpPublisher, java.lang.Object]> {}
          interface _HttpConnection$PlainHttpPublisher$HttpWriteSubscription$$static extends ClassLike {
            _new(this$1: HttpConnection$PlainHttpPublisher): HttpConnection$PlainHttpPublisher$HttpWriteSubscription;
          }
          let HttpConnection$PlainHttpPublisher$HttpWriteSubscription: _HttpConnection$PlainHttpPublisher$HttpWriteSubscription$$static;
          interface _HttpConnection$PlainHttpPublisher$HttpWriteSubscription {
            cancel(): void;
            _flush(): void;
            _isEmpty(): boolean;
            _poll(): java.util.List<java.nio.ByteBuffer>;
            request(n: long): void;
            _demand: common.Demand;
            _this$1: HttpConnection$PlainHttpPublisher;
          }
          interface HttpConnection$PlainHttpPublisher$HttpWriteSubscription extends CombineTypes<[_HttpConnection$PlainHttpPublisher$HttpWriteSubscription, java.lang.Object, java.util.concurrent.Flow$Subscription]> {}
          interface _HttpConnection$TrailingOperations$$static extends ClassLike {
          }
          let HttpConnection$TrailingOperations: _HttpConnection$TrailingOperations$$static;
          interface _HttpConnection$TrailingOperations {
            _add(cf: java.util.concurrent.CompletionStage<any>): void;
            _remove(cf: java.util.concurrent.CompletionStage<any>): boolean;
            _operations: java.util.Map<java.util.concurrent.CompletionStage<any>,boolean>;
          }
          interface HttpConnection$TrailingOperations extends CombineTypes<[_HttpConnection$TrailingOperations, java.lang.Object]> {}
          interface _HttpRequestBuilderImpl$$static extends ClassLike {
            _checkURI(uri: java.net.URI): void;
            new(uri: java.net.URI): HttpRequestBuilderImpl;
            new(): HttpRequestBuilderImpl;
          }
          let HttpRequestBuilderImpl: _HttpRequestBuilderImpl$$static;
          interface _HttpRequestBuilderImpl {
            DELETE(): java.net.http.HttpRequest$Builder;
            GET(): java.net.http.HttpRequest$Builder;
            HEAD(): java.net.http.HttpRequest$Builder;
            POST(body: java.net.http.HttpRequest$BodyPublisher): java.net.http.HttpRequest$Builder;
            PUT(body: java.net.http.HttpRequest$BodyPublisher): java.net.http.HttpRequest$Builder;
            _bodyPublisher(): java.net.http.HttpRequest$BodyPublisher;
            build(): java.net.http.HttpRequest;
            buildForWebSocket(): HttpRequestImpl;
            _checkNameAndValue(name: string, value: string): void;
            copy(): HttpRequestBuilderImpl;
            copy(): java.net.http.HttpRequest$Builder;
            expectContinue(enable: boolean): HttpRequestBuilderImpl;
            _expectContinue(): boolean;
            expectContinue(a0: boolean): java.net.http.HttpRequest$Builder;
            header(name: string, value: string): HttpRequestBuilderImpl;
            header(a0: string, a1: string): java.net.http.HttpRequest$Builder;
            headers(params: string[]): HttpRequestBuilderImpl;
            headers(...params: string[]): HttpRequestBuilderImpl;
            headers(a0: string[]): java.net.http.HttpRequest$Builder;
            _headersBuilder(): http.common.HttpHeadersBuilder;
            _method(): string;
            method(method: string, body: java.net.http.HttpRequest$BodyPublisher): java.net.http.HttpRequest$Builder;
            _method0(method: string, body: java.net.http.HttpRequest$BodyPublisher): java.net.http.HttpRequest$Builder;
            setHeader(name: string, value: string): HttpRequestBuilderImpl;
            setHeader(a0: string, a1: string): java.net.http.HttpRequest$Builder;
            timeout(duration: java.time.Duration): java.net.http.HttpRequest$Builder;
            _timeout(): java.time.Duration;
            uri(uri: java.net.URI): HttpRequestBuilderImpl;
            _uri(): java.net.URI;
            uri(a0: java.net.URI): java.net.http.HttpRequest$Builder;
            version(version: java.net.http.HttpClient$Version): HttpRequestBuilderImpl;
            _version(): java.util.Optional<java.net.http.HttpClient$Version>;
            version(a0: java.net.http.HttpClient$Version): java.net.http.HttpRequest$Builder;
            _bodyPublisher: java.net.http.HttpRequest$BodyPublisher;
            _duration: java.time.Duration;
            _expectContinue: boolean;
            _headersBuilder: common.HttpHeadersBuilder;
            _method: string;
            _uri: java.net.URI;
            _version: java.util.Optional<java.net.http.HttpClient$Version>;
          }
          interface HttpRequestBuilderImpl extends CombineTypes<[_HttpRequestBuilderImpl, java.lang.Object, java.net.http.HttpRequest$Builder]> {}
          interface _HttpRequestImpl$$static extends ClassLike {
            _checkTimeout(duration: java.time.Duration): void;
            _createPushRequest(parent: HttpRequestImpl, headers: java.net.http.HttpHeaders): HttpRequestImpl;
            newInstanceForAuthentication(other: HttpRequestImpl): HttpRequestImpl;
            newInstanceForRedirection(uri: java.net.URI, method: string, other: HttpRequestImpl, mayHaveBody: boolean): HttpRequestImpl;
            _retrieveProxy(request: java.net.http.HttpRequest, ps: java.net.ProxySelector, uri: java.net.URI): java.net.Proxy;
            _userAgent(): string;
            readonly USER_AGENT: string;
            new(builder: HttpRequestBuilderImpl): HttpRequestImpl;
            new(request: java.net.http.HttpRequest, ps: java.net.ProxySelector): HttpRequestImpl;
            _new(method: string, authority: java.net.InetSocketAddress, headers: http.common.Utils$ProxyHeaders): HttpRequestImpl;
          }
          let HttpRequestImpl: _HttpRequestImpl$$static;
          interface _HttpRequestImpl {
            _authority(): java.net.InetSocketAddress;
            bodyPublisher(): java.util.Optional<java.net.http.HttpRequest$BodyPublisher>;
            expectContinue(): boolean;
            _getAddress(): java.net.InetSocketAddress;
            _getSystemHeadersBuilder(): http.common.HttpHeadersBuilder;
            _getUserHeaders(): java.net.http.HttpHeaders;
            headers(): java.net.http.HttpHeaders;
            _isConnect(): boolean;
            isWebSocket(is: boolean): void;
            _isWebSocket(): boolean;
            method(): string;
            _proxy(): java.net.InetSocketAddress;
            _publisher(other: HttpRequestImpl): java.net.http.HttpRequest$BodyPublisher;
            _secure(): boolean;
            _setH2Upgrade(exchange: Exchange<any>): void;
            setProxy(proxy: java.net.Proxy): void;
            setSystemHeader(name: string, value: string): void;
            timeout(): java.util.Optional<java.time.Duration>;
            toString(): string;
            uri(): java.net.URI;
            version(): java.util.Optional<java.net.http.HttpClient$Version>;
            _acc: java.security.AccessControlContext;
            _authority: java.net.InetSocketAddress;
            _expectContinue: boolean;
            _isWebSocket: boolean;
            _method: string;
            _proxy: java.net.Proxy;
            _requestPublisher: java.net.http.HttpRequest$BodyPublisher;
            _secure: boolean;
            _systemHeadersBuilder: common.HttpHeadersBuilder;
            _timeout: java.time.Duration;
            _uri: java.net.URI;
            _userHeaders: java.net.http.HttpHeaders;
            _version: java.util.Optional<java.net.http.HttpClient$Version>;
          }
          interface HttpRequestImpl extends CombineTypes<[_HttpRequestImpl, jdk.internal.net.http.websocket.WebSocketRequest, java.net.http.HttpRequest]> {}
          interface _HttpResponseImpl$$static<T> extends ClassLike {
            new(initialRequest: java.net.http.HttpRequest, response: Response, previousResponse: java.net.http.HttpResponse<T>, body: T, exch: Exchange<T>): HttpResponseImpl<T>;
          }
          let HttpResponseImpl: _HttpResponseImpl$$static<T>;
          interface _HttpResponseImpl<T> {
            body(): T;
            closeRawChannel(): void;
            headers(): java.net.http.HttpHeaders;
            previousResponse(): java.util.Optional<java.net.http.HttpResponse<T>>;
            rawChannel(): http.websocket.RawChannel;
            request(): java.net.http.HttpRequest;
            sslSession(): java.util.Optional<javax.net.ssl.SSLSession>;
            statusCode(): int;
            toString(): string;
            uri(): java.net.URI;
            version(): java.net.http.HttpClient$Version;
            _body: T;
            _headers: java.net.http.HttpHeaders;
            _initialRequest: java.net.http.HttpRequest;
            _previousResponse: java.util.Optional<java.net.http.HttpResponse<T>>;
            _rawChannelProvider: HttpResponseImpl$RawChannelProvider;
            _responseCode: int;
            _sslSession: java.util.Optional<javax.net.ssl.SSLSession>;
            _uri: java.net.URI;
            _version: java.net.http.HttpClient$Version;
          }
          interface HttpResponseImpl<T> extends CombineTypes<[_HttpResponseImpl<T>, java.net.http.HttpResponse<T>, websocket.RawChannel$Provider, java.lang.Object]> {}
          interface _HttpResponseImpl$RawChannelProvider$$static extends ClassLike {
            _connection(resp: Response, exch: Exchange<any>): HttpConnection;
            _create(resp: Response, exch: Exchange<any>): HttpResponseImpl$RawChannelProvider;
            _new(conn: HttpConnection, exch: Exchange<any>): HttpResponseImpl$RawChannelProvider;
          }
          let HttpResponseImpl$RawChannelProvider: _HttpResponseImpl$RawChannelProvider$$static;
          interface _HttpResponseImpl$RawChannelProvider {
            closeRawChannel(): void;
            _exchangeImpl(): ExchangeImpl<any>;
            rawChannel(): http.websocket.RawChannel;
            _rawChannel0(): http.websocket.RawChannel;
            _connection: HttpConnection;
            _exchange: Exchange<any>;
            _rawchan: websocket.RawChannel;
            _stateLock: java.util.concurrent.locks.ReentrantLock;
          }
          interface HttpResponseImpl$RawChannelProvider extends CombineTypes<[_HttpResponseImpl$RawChannelProvider, jdk.internal.net.http.websocket.RawChannel$Provider, java.lang.Object]> {}
          interface _ImmutableHttpRequest$$static extends ClassLike {
            _new(builder: HttpRequestBuilderImpl): ImmutableHttpRequest;
          }
          let ImmutableHttpRequest: _ImmutableHttpRequest$$static;
          interface _ImmutableHttpRequest {
            bodyPublisher(): java.util.Optional<java.net.http.HttpRequest$BodyPublisher>;
            expectContinue(): boolean;
            headers(): java.net.http.HttpHeaders;
            method(): string;
            timeout(): java.util.Optional<java.time.Duration>;
            toString(): string;
            uri(): java.net.URI;
            version(): java.util.Optional<java.net.http.HttpClient$Version>;
            _expectContinue: boolean;
            _headers: java.net.http.HttpHeaders;
            _method: string;
            _requestPublisher: java.util.Optional<java.net.http.HttpRequest$BodyPublisher>;
            _timeout: java.util.Optional<java.time.Duration>;
            _uri: java.net.URI;
            _version: java.util.Optional<java.net.http.HttpClient$Version>;
          }
          interface ImmutableHttpRequest extends CombineTypes<[_ImmutableHttpRequest, java.net.http.HttpRequest]> {}
          interface _LineSubscriberAdapter$$static<S,R> extends ClassLike {
            create<S, R>(subscriber: S, finisher: java.util.function.Function<S,R>, charset: java.nio.charset.Charset, eol: string): LineSubscriberAdapter<S,R>;
          }
          let LineSubscriberAdapter: _LineSubscriberAdapter$$static<S,R>;
          interface _LineSubscriberAdapter<S,R> {
            getBody(): java.util.concurrent.CompletionStage<R>;
            onComplete(): void;
            onError(throwable: java.lang.Throwable): void;
            onNext(item: java.util.List<java.nio.ByteBuffer>): void;
            onNext(a0: any): void;
            onSubscribe(subscription: java.util.concurrent.Flow$Subscription): void;
            _cf: java.util.concurrent.CompletableFuture<R>;
            _charset: java.nio.charset.Charset;
            _downstream: LineSubscriberAdapter$LineSubscription;
            _eol: string;
            _finisher: java.util.function.Function<S,R>;
            _subscribed: java.util.concurrent.atomic.AtomicBoolean;
            _subscriber: S;
          }
          interface LineSubscriberAdapter<S,R> extends CombineTypes<[_LineSubscriberAdapter<S,R>, java.lang.Object, java.net.http.HttpResponse$BodySubscriber<R>]> {}
          interface _LineSubscriberAdapter$LineSubscription$$static extends ClassLike {
            _create(s: java.util.concurrent.Flow$Subscription, charset: java.nio.charset.Charset, lineSeparator: string, upstream: java.util.concurrent.Flow$Subscriber<string>, cf: java.util.concurrent.CompletableFuture<any>): LineSubscriberAdapter$LineSubscription;
            _endOfLine(b: LineSubscriberAdapter$LineSubscription$stringBuilder, eol: string, endOfInput: boolean): int;
            _nextLine(b: LineSubscriberAdapter$LineSubscription$stringBuilder, eol: string, endOfInput: boolean): string;
            _take(b: LineSubscriberAdapter$LineSubscription$stringBuilder, start: int, end: int): string;
          }
          let LineSubscriberAdapter$LineSubscription: _LineSubscriberAdapter$LineSubscription$$static;
          interface _LineSubscriberAdapter$LineSubscription {
            cancel(): void;
            _isUnderFlow(_in: java.nio.ByteBuffer, out: java.nio.CharBuffer, endOfInput: boolean): boolean;
            _loop(): void;
            _nextLine(): string;
            request(n: long): void;
            signalComplete(): void;
            signalError(error: java.lang.Throwable): void;
            submit(list: java.util.List<java.nio.ByteBuffer>): void;
            _buffer: java.nio.CharBuffer;
            _builder: http$stringBuilder;
            _cancelled: boolean;
            _cf: java.util.concurrent.CompletableFuture<any>;
            _chars: char[];
            _completed: boolean;
            _decoder: java.nio.charset.CharsetDecoder;
            _demanded: java.util.concurrent.atomic.AtomicLong;
            _downstreamDemand: common.Demand;
            _errorRef: java.util.concurrent.atomic.AtomicReference<java.lang.Throwable>;
            _leftover: java.nio.ByteBuffer;
            _newline: string;
            _nextLine: string;
            _queue: java.util.concurrent.ConcurrentLinkedDeque<java.nio.ByteBuffer>;
            _scheduler: common.SequentialScheduler;
            _upstream: java.util.concurrent.Flow$Subscriber<string>;
            _upstreamSubscription: java.util.concurrent.Flow$Subscription;
          }
          interface LineSubscriberAdapter$LineSubscription extends CombineTypes<[_LineSubscriberAdapter$LineSubscription, java.lang.Object, java.util.concurrent.Flow$Subscription]> {}
          interface _MultiExchange$$static<T> extends ClassLike {
            _bodyNotPermitted(r: Response): boolean;
            _canRetryRequest(request: java.net.http.HttpRequest): boolean;
            _disableRetryConnect(): boolean;
            _isIdempotentRequest(request: java.net.http.HttpRequest): boolean;
            _retryPostValue(): boolean;
            _DEFAULT_MAX_ATTEMPTS: int;
            _RETRY_ALWAYS: boolean;
            _RETRY_CONNECT: boolean;
            _debug: common.Logger;
            _max_attempts: int;
            _new(userRequest: java.net.http.HttpRequest, requestImpl: HttpRequestImpl, client: HttpClientImpl, responseHandler: java.net.http.HttpResponse$BodyHandler<T>, pushPromiseHandler: java.net.http.HttpResponse$PushPromiseHandler<T>, acc: java.security.AccessControlContext): MultiExchange<T>;
          }
          let MultiExchange: _MultiExchange$$static<T>;
          interface _MultiExchange<T> {
            _bodyIsPresent(r: Response): boolean;
            cancel(cause: java.io.IOException): void;
            cancel(mayInterruptIfRunning: boolean): boolean;
            _cancelTimer(): void;
            _client(): HttpClientImpl;
            _getExceptionalCF(t: java.lang.Throwable, exchImpl: ExchangeImpl<any>): java.util.concurrent.CompletableFuture<Response>;
            _getExchange(): Exchange<T>;
            _handleNoBody(r: Response, exch: Exchange<T>): java.util.concurrent.CompletableFuture<java.net.http.HttpResponse<T>>;
            remainingConnectTimeout(): java.util.Optional<java.time.Duration>;
            _requestCancelled(): boolean;
            _requestFilters(r: HttpRequestImpl): void;
            responseAsync(executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<java.net.http.HttpResponse<T>>;
            _responseAsync0(start: java.util.concurrent.CompletableFuture<java.lang.Void>): java.util.concurrent.CompletableFuture<java.net.http.HttpResponse<T>>;
            _responseAsyncImpl(): java.util.concurrent.CompletableFuture<Response>;
            _responseFilters(response: Response): HttpRequestImpl;
            _retryCause(t: java.lang.Throwable): java.lang.Throwable;
            _retryOnFailure(t: java.lang.Throwable): boolean;
            _setExchange(exchange: Exchange<T>): void;
            _toTimeoutException(ioe: java.io.IOException): java.net.http.HttpTimeoutException;
            _version(): java.net.http.HttpClient$Version;
            _whenCancelled(t: java.lang.Throwable): java.util.concurrent.CompletableFuture<java.net.http.HttpResponse<T>>;
            _wrapIfCancelled(cause: java.lang.Throwable): java.lang.Throwable;
            _acc: java.security.AccessControlContext;
            _attempts: java.util.concurrent.atomic.AtomicInteger;
            _cancelled: boolean;
            _client: HttpClientImpl;
            _connectTimeout: MultiExchange$ConnectTimeoutTracker;
            _currentreq: HttpRequestImpl;
            _exchange: Exchange<T>;
            _executor: HttpClientImpl$DelegatingExecutor;
            _filters: java.util.List<HeaderFilter>;
            _interrupted: java.util.concurrent.atomic.AtomicReference<java.util.concurrent.CancellationException>;
            _numberOfRedirects: int;
            _previous: Exchange<T>;
            _previousreq: HttpRequestImpl;
            _proxyauth: AuthenticationFilter$AuthInfo;
            _pushGroup: PushGroup<T>;
            _request: HttpRequestImpl;
            _response: java.net.http.HttpResponse<T>;
            _responseHandler: java.net.http.HttpResponse$BodyHandler<T>;
            _responseTimerEvent: ResponseTimerEvent;
            _retriedOnce: boolean;
            _retryCause: java.lang.Throwable;
            _serverauth: AuthenticationFilter$AuthInfo;
            _userRequest: java.net.http.HttpRequest;
          }
          interface MultiExchange<T> extends CombineTypes<[_MultiExchange<T>, common.Cancelable, java.lang.Object]> {}
          interface _MultiExchange$CancelableRef$$static extends ClassLike {
            _new(cancelable: http.common.Cancelable): MultiExchange$CancelableRef;
          }
          let MultiExchange$CancelableRef: _MultiExchange$CancelableRef$$static;
          interface _MultiExchange$CancelableRef {
            cancel(mayInterruptIfRunning: boolean): boolean;
            _cancelableRef: java.lang.ref.WeakReference<common.Cancelable>;
          }
          interface MultiExchange$CancelableRef extends CombineTypes<[_MultiExchange$CancelableRef, jdk.internal.net.http.common.Cancelable, java.lang.Object]> {}
          interface _MultiExchange$ConnectTimeoutTracker$$static extends ClassLike {
            _new(connectTimeout: java.time.Duration): MultiExchange$ConnectTimeoutTracker;
          }
          let MultiExchange$ConnectTimeoutTracker: _MultiExchange$ConnectTimeoutTracker$$static;
          interface _MultiExchange$ConnectTimeoutTracker {
            _getRemaining(): java.time.Duration;
            _reset(): void;
            _max: java.time.Duration;
            _startTime: java.util.concurrent.atomic.AtomicLong;
          }
          interface MultiExchange$ConnectTimeoutTracker extends CombineTypes<[_MultiExchange$ConnectTimeoutTracker, java.lang.Object]> {}
          interface _MultiExchange$NullSubscription$$static extends ClassLike {
            _new(): MultiExchange$NullSubscription;
          }
          let MultiExchange$NullSubscription: _MultiExchange$NullSubscription$$static;
          interface _MultiExchange$NullSubscription {
            cancel(): void;
            request(n: long): void;
          }
          interface MultiExchange$NullSubscription extends CombineTypes<[_MultiExchange$NullSubscription, java.lang.Object, java.util.concurrent.Flow$Subscription]> {}
          interface _PlainHttpConnection$$static extends ClassLike {
            _new(addr: java.net.InetSocketAddress, client: HttpClientImpl): PlainHttpConnection;
          }
          let PlainHttpConnection: _PlainHttpConnection$$static;
          interface _PlainHttpConnection {
            _cacheKey(): ConnectionPool$CacheKey;
            _canRetryConnect(e: java.lang.Throwable): boolean;
            _channel(): java.nio.channels.SocketChannel;
            _checkRetryConnect(connect: PlainHttpConnection$ConnectState, failed: java.lang.Throwable, exchange: Exchange<any>): java.util.concurrent.CompletableFuture<java.lang.Void>;
            close(): void;
            _close(cause: java.lang.Throwable): void;
            connectAsync(exchange: Exchange<any>): java.util.concurrent.CompletableFuture<java.lang.Void>;
            _connected(): boolean;
            _connectionOpened(): boolean;
            finishConnect(): java.util.concurrent.CompletableFuture<java.lang.Void>;
            _getConnectionFlow(): http.common.FlowTube;
            _getSoReceiveBufferSize(): int;
            _getSoSendBufferSize(): int;
            _isProxied(): boolean;
            _isSecure(): boolean;
            _newConnectTimer(exchange: Exchange<any>, cf: java.util.concurrent.CompletableFuture<any>): PlainHttpConnection$ConnectTimerEvent;
            _proxy(): java.net.InetSocketAddress;
            _publisher(): HttpConnection$HttpPublisher;
            toString(): string;
            _trySetReceiveBufferSize(bufsize: int): boolean;
            _trySetSendBufferSize(bufsize: int): boolean;
            _chan: java.nio.channels.SocketChannel;
            _closed: boolean;
            _connectTimerEvent: PlainHttpConnection$ConnectTimerEvent;
            _connected: boolean;
            _stateLock: java.util.concurrent.locks.ReentrantLock;
            _tube: SocketTube;
            _unsuccessfulAttempts: int;
            _writePublisher: HttpConnection$PlainHttpPublisher;
          }
          interface PlainHttpConnection extends CombineTypes<[_PlainHttpConnection, jdk.internal.net.http.HttpConnection]> {}
          interface _PlainHttpConnection$ConnectEvent$$static extends ClassLike {
            _new(this$0: java.util.concurrent.CompletableFuture<PlainHttpConnection$ConnectState>, cf: Exchange<any>): PlainHttpConnection$ConnectEvent;
          }
          let PlainHttpConnection$ConnectEvent: _PlainHttpConnection$ConnectEvent$$static;
          interface _PlainHttpConnection$ConnectEvent {
            abort(ioe: java.io.IOException): void;
            channel(): java.nio.channels.SelectableChannel;
            handle(): void;
            interestOps(): int;
            _cf: java.util.concurrent.CompletableFuture<PlainHttpConnection$ConnectState>;
            _exchange: Exchange<any>;
            _this$0: PlainHttpConnection;
          }
          interface PlainHttpConnection$ConnectEvent extends CombineTypes<[_PlainHttpConnection$ConnectEvent, jdk.internal.net.http.AsyncEvent]> {}
          interface _PlainHttpConnection$ConnectState$$static extends ClassLike {
            valueOf(name: string): PlainHttpConnection$ConnectState;
            values(): PlainHttpConnection$ConnectState[];
            readonly RETRY: PlainHttpConnection$ConnectState;
            readonly SUCCESS: PlainHttpConnection$ConnectState;
          }
          let PlainHttpConnection$ConnectState: _PlainHttpConnection$ConnectState$$static;
          interface _PlainHttpConnection$ConnectState {
          }
          interface PlainHttpConnection$ConnectState extends CombineTypes<[_PlainHttpConnection$ConnectState]> {}
          interface _PlainHttpConnection$ConnectTimerEvent$$static extends ClassLike {
            _new(this$0: java.time.Duration, duration: Exchange<any>, exchange: java.util.concurrent.CompletableFuture<any>): PlainHttpConnection$ConnectTimerEvent;
          }
          let PlainHttpConnection$ConnectTimerEvent: _PlainHttpConnection$ConnectTimerEvent$$static;
          interface _PlainHttpConnection$ConnectTimerEvent {
            handle(): void;
            toString(): string;
            _cf: java.util.concurrent.CompletableFuture<any>;
            _exchange: Exchange<any>;
            _this$0: PlainHttpConnection;
          }
          interface PlainHttpConnection$ConnectTimerEvent extends CombineTypes<[_PlainHttpConnection$ConnectTimerEvent, jdk.internal.net.http.TimeoutEvent]> {}
          interface _PlainProxyConnection$$static extends ClassLike {
            _new(proxy: java.net.InetSocketAddress, client: HttpClientImpl): PlainProxyConnection;
          }
          let PlainProxyConnection: _PlainProxyConnection$$static;
          interface _PlainProxyConnection {
            _cacheKey(): ConnectionPool$CacheKey;
            isProxied(): boolean;
            _proxy(): java.net.InetSocketAddress;
          }
          interface PlainProxyConnection extends CombineTypes<[_PlainProxyConnection, jdk.internal.net.http.PlainHttpConnection]> {}
          interface _PlainTunnelingConnection$$static extends ClassLike {
            _new(addr: java.net.InetSocketAddress, proxy: java.net.InetSocketAddress, client: HttpClientImpl, proxyHeaders: http.common.Utils$ProxyHeaders): PlainTunnelingConnection;
          }
          let PlainTunnelingConnection: _PlainTunnelingConnection$$static;
          interface _PlainTunnelingConnection {
            _cacheKey(): ConnectionPool$CacheKey;
            _channel(): java.nio.channels.SocketChannel;
            close(): void;
            _close(cause: java.lang.Throwable): void;
            connectAsync(exchange: Exchange<any>): java.util.concurrent.CompletableFuture<java.lang.Void>;
            _connected(): boolean;
            finishConnect(): java.util.concurrent.CompletableFuture<java.lang.Void>;
            _getConnectionFlow(): http.common.FlowTube;
            _isProxied(): boolean;
            _isSecure(): boolean;
            _isTunnel(): boolean;
            _proxy(): java.net.InetSocketAddress;
            _publisher(): HttpConnection$HttpPublisher;
            _connected: boolean;
            _delegate: PlainHttpConnection;
            _proxyAddr: java.net.InetSocketAddress;
            _proxyHeaders: common.Utils$ProxyHeaders;
          }
          interface PlainTunnelingConnection extends CombineTypes<[_PlainTunnelingConnection, jdk.internal.net.http.HttpConnection]> {}
          interface _PrivilegedExecutor$$static extends ClassLike {
            new(executor: java.util.concurrent.Executor, acc: java.security.AccessControlContext): PrivilegedExecutor;
          }
          let PrivilegedExecutor: _PrivilegedExecutor$$static;
          interface _PrivilegedExecutor {
            execute(r: java.lang.Runnable): void;
            _acc: java.security.AccessControlContext;
            _executor: java.util.concurrent.Executor;
          }
          interface PrivilegedExecutor extends CombineTypes<[_PrivilegedExecutor, java.util.concurrent.Executor, java.lang.Object]> {}
          interface _PrivilegedExecutor$PrivilegedRunnable$$static extends ClassLike {
            _new(r: java.lang.Runnable, acc: java.security.AccessControlContext): PrivilegedExecutor$PrivilegedRunnable;
          }
          let PrivilegedExecutor$PrivilegedRunnable: _PrivilegedExecutor$PrivilegedRunnable$$static;
          interface _PrivilegedExecutor$PrivilegedRunnable {
            run(): void;
            _acc: java.security.AccessControlContext;
            _r: java.lang.Runnable;
          }
          interface PrivilegedExecutor$PrivilegedRunnable extends CombineTypes<[_PrivilegedExecutor$PrivilegedRunnable, java.lang.Object, java.lang.Runnable]> {}
          interface _ProxyAuthenticationRequired$$static extends ClassLike {
            _serialVersionUID: long;
            new(proxyResponse: Response): ProxyAuthenticationRequired;
          }
          let ProxyAuthenticationRequired: _ProxyAuthenticationRequired$$static;
          interface _ProxyAuthenticationRequired {
            _proxyResponse: Response;
          }
          interface ProxyAuthenticationRequired extends CombineTypes<[_ProxyAuthenticationRequired, java.io.IOException]> {}
          interface _PullPublisher$$static<T> extends ClassLike {
            _new(iterable: java.lang.Iterable<T>, throwable: java.lang.Throwable): PullPublisher<T>;
            _new(iterable: java.lang.Iterable<T>): PullPublisher<T>;
          }
          let PullPublisher: _PullPublisher$$static<T>;
          interface _PullPublisher<T> {
            subscribe(subscriber: java.util.concurrent.Flow$Subscriber<T>): void;
            _iterable: java.lang.Iterable<T>;
            _throwable: java.lang.Throwable;
          }
          interface PullPublisher<T> extends CombineTypes<[_PullPublisher<T>, java.util.concurrent.Flow$Publisher<T>, java.lang.Object]> {}
          interface _PullPublisher$Subscription$$static extends ClassLike {
            _new(a0: java.util.concurrent.Flow$Subscriber<T>, subscriber: java.util.Iterator<T>, iter: java.lang.Throwable): PullPublisher$Subscription;
          }
          let PullPublisher$Subscription: _PullPublisher$Subscription$$static;
          interface _PullPublisher$Subscription {
            cancel(): void;
            request(n: long): void;
            _cancelled: boolean;
            _completed: boolean;
            _demand: common.Demand;
            _error: java.lang.Throwable;
            _iter: java.util.Iterator<T>;
            _pullScheduler: common.SequentialScheduler;
            _subscriber: java.util.concurrent.Flow$Subscriber<T>;
          }
          interface PullPublisher$Subscription extends CombineTypes<[_PullPublisher$Subscription, java.lang.Object, java.util.concurrent.Flow$Subscription]> {}
          interface _PullPublisher$Subscription$PullTask$$static extends ClassLike {
            _new(this$1: PullPublisher$Subscription): PullPublisher$Subscription$PullTask;
          }
          let PullPublisher$Subscription$PullTask: _PullPublisher$Subscription$PullTask$$static;
          interface _PullPublisher$Subscription$PullTask {
            _run(): void;
            _this$1: PullPublisher$Subscription;
          }
          interface PullPublisher$Subscription$PullTask extends CombineTypes<[_PullPublisher$Subscription$PullTask, jdk.internal.net.http.common.SequentialScheduler$CompleteRestartableTask]> {}
          interface _PushGroup$$static<T> extends ClassLike {
            _new(pushPromiseHandler: java.net.http.HttpResponse$PushPromiseHandler<T>, initiatingRequest: HttpRequestImpl, executor: java.util.concurrent.Executor): PushGroup<T>;
          }
          let PushGroup: _PushGroup$$static<T>;
          interface _PushGroup<T> {
            _acceptPushRequest(pushRequest: java.net.http.HttpRequest): PushGroup$Acceptor<T>;
            _checkIfCompleted(): void;
            _pushCompleted(): void;
            _pushError(t: java.lang.Throwable): void;
            _error: java.lang.Throwable;
            _executor: java.util.concurrent.Executor;
            _initiatingRequest: java.net.http.HttpRequest;
            _numberOfPushes: int;
            _pushPromiseHandler: java.net.http.HttpResponse$PushPromiseHandler<T>;
            _remainingPushes: int;
            _stateLock: java.util.concurrent.locks.ReentrantLock;
          }
          interface PushGroup<T> extends CombineTypes<[_PushGroup<T>, java.lang.Object]> {}
          interface _PushGroup$Acceptor$$static<T> extends ClassLike {
          }
          let PushGroup$Acceptor: _PushGroup$Acceptor$$static<T>;
          interface _PushGroup$Acceptor<T> {
            accepted(): boolean;
            bodyHandler(): java.net.http.HttpResponse$BodyHandler<T>;
            cf(): java.util.concurrent.CompletableFuture<java.net.http.HttpResponse<T>>;
          }
          interface PushGroup$Acceptor<T> extends CombineTypes<[_PushGroup$Acceptor<T>, java.lang.Object]> {}
          interface _PushGroup$AcceptorImpl$$static<T> extends ClassLike {
            _new(executor: java.util.concurrent.Executor): PushGroup$AcceptorImpl<T>;
          }
          let PushGroup$AcceptorImpl: _PushGroup$AcceptorImpl$$static<T>;
          interface _PushGroup$AcceptorImpl<T> {
            _accept(bodyHandler: java.net.http.HttpResponse$BodyHandler<T>): java.util.concurrent.CompletableFuture<java.net.http.HttpResponse<T>>;
            accepted(): boolean;
            bodyHandler(): java.net.http.HttpResponse$BodyHandler<T>;
            cf(): java.util.concurrent.CompletableFuture<java.net.http.HttpResponse<T>>;
            _bodyHandler: java.net.http.HttpResponse$BodyHandler<T>;
            _cf: java.util.concurrent.CompletableFuture<java.net.http.HttpResponse<T>>;
            _executor: java.util.concurrent.Executor;
          }
          interface PushGroup$AcceptorImpl<T> extends CombineTypes<[_PushGroup$AcceptorImpl<T>, java.lang.Object, PushGroup$Acceptor<T>]> {}
          interface _RawChannelTube$$static extends ClassLike {
            _copy(src: java.nio.ByteBuffer[], offset: int, len: int): java.util.List<java.nio.ByteBuffer>;
            _cleaner: java.lang.ref.Cleaner;
            _new(connection: HttpConnection, initial: java.util.function.Supplier<java.nio.ByteBuffer>): RawChannelTube;
          }
          let RawChannelTube: _RawChannelTube$$static;
          interface _RawChannelTube {
            close(): void;
            _connectFlows(): void;
            initialByteBuffer(): java.nio.ByteBuffer;
            read(): java.nio.ByteBuffer;
            registerEvent(event: http.websocket.RawChannel$RawEvent): void;
            shutdownInput(): void;
            shutdownOutput(): void;
            write(srcs: java.nio.ByteBuffer[], offset: int, length: int): long;
            _closed: java.util.concurrent.atomic.AtomicBoolean;
            _connection: HttpConnection;
            _dbgTag: string;
            _debug: common.Logger;
            _inited: java.util.concurrent.atomic.AtomicBoolean;
            _initial: java.util.function.Supplier<java.nio.ByteBuffer>;
            _inputClosed: java.util.concurrent.atomic.AtomicBoolean;
            _outputClosed: java.util.concurrent.atomic.AtomicBoolean;
            _readSubscriber: RawChannelTube$ReadSubscriber;
            _tube: common.FlowTube;
            _writePublisher: RawChannelTube$WritePublisher;
          }
          interface RawChannelTube extends CombineTypes<[_RawChannelTube, jdk.internal.net.http.websocket.RawChannel, java.lang.Object]> {}
          interface _RawChannelTube$CleanupChecker$$static extends ClassLike {
            _new(closed: java.util.concurrent.atomic.AtomicBoolean, debug: java.lang.System$Logger): RawChannelTube$CleanupChecker;
          }
          let RawChannelTube$CleanupChecker: _RawChannelTube$CleanupChecker$$static;
          interface _RawChannelTube$CleanupChecker {
            run(): void;
            _closed: java.util.concurrent.atomic.AtomicBoolean;
            _debug: java.lang.System$Logger;
          }
          interface RawChannelTube$CleanupChecker extends CombineTypes<[_RawChannelTube$CleanupChecker, java.lang.Object, java.lang.Runnable]> {}
          interface _RawChannelTube$ReadSubscriber$$static extends ClassLike {
            _new(this$0: RawChannelTube): RawChannelTube$ReadSubscriber;
          }
          let RawChannelTube$ReadSubscriber: _RawChannelTube$ReadSubscriber$$static;
          interface _RawChannelTube$ReadSubscriber {
            _checkEvents(): void;
            onComplete(): void;
            onError(throwable: java.lang.Throwable): void;
            onNext(item: java.util.List<java.nio.ByteBuffer>): void;
            onNext(a0: any): void;
            onSubscribe(subscription: java.util.concurrent.Flow$Subscription): void;
            _buffers: java.util.concurrent.ConcurrentLinkedQueue<java.nio.ByteBuffer>;
            _completed: boolean;
            _errorRef: java.util.concurrent.atomic.AtomicReference<java.lang.Throwable>;
            _events: java.util.concurrent.ConcurrentLinkedQueue<websocket.RawChannel$RawEvent>;
            _initialRequest: long;
            _readSubscription: java.util.concurrent.Flow$Subscription;
            _this$0: RawChannelTube;
          }
          interface RawChannelTube$ReadSubscriber extends CombineTypes<[_RawChannelTube$ReadSubscriber, jdk.internal.net.http.common.FlowTube$TubeSubscriber, java.lang.Object]> {}
          interface _RawChannelTube$WritePublisher$$static extends ClassLike {
            _new(this$0: RawChannelTube): RawChannelTube$WritePublisher;
          }
          let RawChannelTube$WritePublisher: _RawChannelTube$WritePublisher$$static;
          interface _RawChannelTube$WritePublisher {
            subscribe(subscriber: java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>): void;
            _events: java.util.concurrent.ConcurrentLinkedQueue<websocket.RawChannel$RawEvent>;
            _this$0: RawChannelTube;
            _writeSubscription: RawChannelTube$WriteSubscription;
          }
          interface RawChannelTube$WritePublisher extends CombineTypes<[_RawChannelTube$WritePublisher, jdk.internal.net.http.common.FlowTube$TubePublisher, java.lang.Object]> {}
          interface _RawChannelTube$WriteSubscription$$static extends ClassLike {
            _new(this$0: java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>): RawChannelTube$WriteSubscription;
          }
          let RawChannelTube$WriteSubscription: _RawChannelTube$WriteSubscription$$static;
          interface _RawChannelTube$WriteSubscription {
            cancel(): void;
            request(n: long): void;
            _cancelled: boolean;
            _demand: common.Demand;
            _subscriber: java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>;
            _this$0: RawChannelTube;
          }
          interface RawChannelTube$WriteSubscription extends CombineTypes<[_RawChannelTube$WriteSubscription, java.lang.Object, java.util.concurrent.Flow$Subscription]> {}
          interface _RedirectFilter$$static extends ClassLike {
            _isRedirecting(statusCode: int): boolean;
            _redirectedMethod(statusCode: int, orig: string): string;
            _DEFAULT_MAX_REDIRECTS: int;
            _HTTP_NOT_MODIFIED: int;
            _max_redirects: int;
            new(): RedirectFilter;
          }
          let RedirectFilter: _RedirectFilter$$static;
          interface _RedirectFilter {
            _canRedirect(redir: java.net.URI): boolean;
            _getRedirectedURI(headers: java.net.http.HttpHeaders): java.net.URI;
            _handleResponse(r: Response): HttpRequestImpl;
            request(r: HttpRequestImpl, e: MultiExchange<any>): void;
            response(r: Response): HttpRequestImpl;
            _client: HttpClientImpl;
            _exchange: MultiExchange<any>;
            _method: string;
            _policy: java.net.http.HttpClient$Redirect;
            _request: HttpRequestImpl;
            _stateLock: java.util.concurrent.locks.ReentrantLock;
            _uri: java.net.URI;
          }
          interface RedirectFilter extends CombineTypes<[_RedirectFilter, java.lang.Object, jdk.internal.net.http.HeaderFilter]> {}
          interface _RequestPublishers$$static extends ClassLike {
            concat(publishers: java.net.http.HttpRequest$BodyPublisher[]): java.net.http.HttpRequest$BodyPublisher;
            concat(...publishers: java.net.http.HttpRequest$BodyPublisher[]): java.net.http.HttpRequest$BodyPublisher;
          }
          let RequestPublishers: _RequestPublishers$$static;
          interface _RequestPublishers {
          }
          interface RequestPublishers extends CombineTypes<[_RequestPublishers, java.lang.Object]> {}
          interface _RequestPublishers$AggregatePublisher$$static extends ClassLike {
            _new(bodies: java.util.List<java.net.http.HttpRequest$BodyPublisher>): RequestPublishers$AggregatePublisher;
          }
          let RequestPublishers$AggregatePublisher: _RequestPublishers$AggregatePublisher$$static;
          interface _RequestPublishers$AggregatePublisher {
            contentLength(): long;
            subscribe(subscriber: java.util.concurrent.Flow$Subscriber<java.nio.ByteBuffer>): void;
            _bodies: java.util.List<java.net.http.HttpRequest$BodyPublisher>;
          }
          interface RequestPublishers$AggregatePublisher extends CombineTypes<[_RequestPublishers$AggregatePublisher, java.lang.Object, java.net.http.HttpRequest$BodyPublisher]> {}
          interface _RequestPublishers$AggregateSubscription$$static extends ClassLike {
            _new(bodies: java.util.List<java.net.http.HttpRequest$BodyPublisher>, subscriber: java.util.concurrent.Flow$Subscriber<java.nio.ByteBuffer>): RequestPublishers$AggregateSubscription;
          }
          let RequestPublishers$AggregateSubscription: _RequestPublishers$AggregateSubscription$$static;
          interface _RequestPublishers$AggregateSubscription {
            cancel(): void;
            _cancelSubscription(): boolean;
            onComplete(): void;
            onError(throwable: java.lang.Throwable): void;
            onNext(item: java.nio.ByteBuffer): void;
            onNext(a0: any): void;
            onSubscribe(subscription: java.util.concurrent.Flow$Subscription): void;
            request(n: long): void;
            run(): void;
            _bodies: java.util.Queue<java.net.http.HttpRequest$BodyPublisher>;
            _cancelled: boolean;
            _demand: common.Demand;
            _demanded: common.Demand;
            _error: java.util.concurrent.atomic.AtomicReference<java.lang.Throwable>;
            _illegalRequest: java.lang.Throwable;
            _publisher: java.net.http.HttpRequest$BodyPublisher;
            _scheduler: common.SequentialScheduler;
            _subscriber: java.util.concurrent.Flow$Subscriber<java.nio.ByteBuffer>;
            _subscription: java.util.concurrent.Flow$Subscription;
          }
          interface RequestPublishers$AggregateSubscription extends CombineTypes<[_RequestPublishers$AggregateSubscription, java.util.concurrent.Flow$Subscriber<java.nio.ByteBuffer>, java.lang.Object, java.util.concurrent.Flow$Subscription]> {}
          interface _RequestPublishers$ByteArrayPublisher$$static extends ClassLike {
            new(content: byte[]): RequestPublishers$ByteArrayPublisher;
            new(content: byte[], offset: int, length: int): RequestPublishers$ByteArrayPublisher;
            _new(content: byte[], offset: int, length: int, bufSize: int): RequestPublishers$ByteArrayPublisher;
          }
          let RequestPublishers$ByteArrayPublisher: _RequestPublishers$ByteArrayPublisher$$static;
          interface _RequestPublishers$ByteArrayPublisher {
            contentLength(): long;
            _copy(content: byte[], offset: int, length: int): java.util.List<java.nio.ByteBuffer>;
            subscribe(subscriber: java.util.concurrent.Flow$Subscriber<java.nio.ByteBuffer>): void;
            _bufSize: int;
            _content: byte[];
            _length: int;
            _offset: int;
          }
          interface RequestPublishers$ByteArrayPublisher extends CombineTypes<[_RequestPublishers$ByteArrayPublisher, java.lang.Object, java.net.http.HttpRequest$BodyPublisher]> {}
          interface _RequestPublishers$EmptyPublisher$$static extends ClassLike {
            new(): RequestPublishers$EmptyPublisher;
          }
          let RequestPublishers$EmptyPublisher: _RequestPublishers$EmptyPublisher$$static;
          interface _RequestPublishers$EmptyPublisher {
            contentLength(): long;
            subscribe(subscriber: java.util.concurrent.Flow$Subscriber<java.nio.ByteBuffer>): void;
            _delegate: java.util.concurrent.Flow$Publisher<java.nio.ByteBuffer>;
          }
          interface RequestPublishers$EmptyPublisher extends CombineTypes<[_RequestPublishers$EmptyPublisher, java.lang.Object, java.net.http.HttpRequest$BodyPublisher]> {}
          interface _RequestPublishers$FilePublisher$$static extends ClassLike {
            create(path: java.nio.file.Path): RequestPublishers$FilePublisher;
            _createInputStream(path: java.nio.file.Path, acc: java.security.AccessControlContext, perm: java.security.Permission, defaultFS: boolean): java.io.InputStream;
            _pathForSecurityCheck(path: java.nio.file.Path): string;
            _toUncheckedException(t: java.lang.Throwable): java.lang.RuntimeException;
          }
          let RequestPublishers$FilePublisher: _RequestPublishers$FilePublisher$$static;
          interface _RequestPublishers$FilePublisher {
            contentLength(): long;
            subscribe(subscriber: java.util.concurrent.Flow$Subscriber<java.nio.ByteBuffer>): void;
            _inputStreamSupplier: java.util.function.Function<java.nio.file.Path,java.io.InputStream>;
            _length: long;
            _path: java.nio.file.Path;
          }
          interface RequestPublishers$FilePublisher extends CombineTypes<[_RequestPublishers$FilePublisher, java.lang.Object, java.net.http.HttpRequest$BodyPublisher]> {}
          interface _RequestPublishers$InputStreamPublisher$$static extends ClassLike {
            new(streamSupplier: java.util.function.Supplier<java.io.InputStream>): RequestPublishers$InputStreamPublisher;
          }
          let RequestPublishers$InputStreamPublisher: _RequestPublishers$InputStreamPublisher$$static;
          interface _RequestPublishers$InputStreamPublisher {
            contentLength(): long;
            _iterableOf(is: java.io.InputStream): java.lang.Iterable<java.nio.ByteBuffer>;
            subscribe(subscriber: java.util.concurrent.Flow$Subscriber<java.nio.ByteBuffer>): void;
            _streamSupplier: java.util.function.Supplier<java.io.InputStream>;
          }
          interface RequestPublishers$InputStreamPublisher extends CombineTypes<[_RequestPublishers$InputStreamPublisher, java.lang.Object, java.net.http.HttpRequest$BodyPublisher]> {}
          interface _RequestPublishers$IterablePublisher$$static extends ClassLike {
            _computeLength(bytes: java.lang.Iterable<byte[]>): long;
            new(content: java.lang.Iterable<byte[]>): RequestPublishers$IterablePublisher;
          }
          let RequestPublishers$IterablePublisher: _RequestPublishers$IterablePublisher$$static;
          interface _RequestPublishers$IterablePublisher {
            contentLength(): long;
            iterator(): java.util.Iterator<java.nio.ByteBuffer>;
            subscribe(subscriber: java.util.concurrent.Flow$Subscriber<java.nio.ByteBuffer>): void;
            _content: java.lang.Iterable<byte[]>;
            _contentLength: long;
          }
          interface RequestPublishers$IterablePublisher extends CombineTypes<[_RequestPublishers$IterablePublisher, java.lang.Object, java.net.http.HttpRequest$BodyPublisher]> {}
          interface _RequestPublishers$IterablePublisher$ByteBufferIterator$$static extends ClassLike {
            _new(this$0: RequestPublishers$IterablePublisher): RequestPublishers$IterablePublisher$ByteBufferIterator;
          }
          let RequestPublishers$IterablePublisher$ByteBufferIterator: _RequestPublishers$IterablePublisher$ByteBufferIterator$$static;
          interface _RequestPublishers$IterablePublisher$ByteBufferIterator {
            _copy(): void;
            _getBuffer(): java.nio.ByteBuffer;
            hasNext(): boolean;
            next(): java.nio.ByteBuffer;
            next(): any;
            _buffers: java.util.concurrent.ConcurrentLinkedQueue<java.nio.ByteBuffer>;
            _iterator: java.util.Iterator<byte[]>;
            _this$0: RequestPublishers$IterablePublisher;
          }
          interface RequestPublishers$IterablePublisher$ByteBufferIterator extends CombineTypes<[_RequestPublishers$IterablePublisher$ByteBufferIterator, java.lang.Object, java.util.Iterator<java.nio.ByteBuffer>]> {}
          interface _RequestPublishers$PublisherAdapter$$static extends ClassLike {
            new(publisher: java.util.concurrent.Flow$Publisher<java.nio.ByteBuffer>, contentLength: long): RequestPublishers$PublisherAdapter;
          }
          let RequestPublishers$PublisherAdapter: _RequestPublishers$PublisherAdapter$$static;
          interface _RequestPublishers$PublisherAdapter {
            contentLength(): long;
            subscribe(subscriber: java.util.concurrent.Flow$Subscriber<java.nio.ByteBuffer>): void;
            _contentLength: long;
            _publisher: java.util.concurrent.Flow$Publisher<java.nio.ByteBuffer>;
          }
          interface RequestPublishers$PublisherAdapter extends CombineTypes<[_RequestPublishers$PublisherAdapter, java.lang.Object, java.net.http.HttpRequest$BodyPublisher]> {}
          interface _RequestPublishers$StreamIterator$$static extends ClassLike {
            _new(is: java.io.InputStream): RequestPublishers$StreamIterator;
            _new(is: java.io.InputStream, bufSupplier: java.util.function.Supplier<java.nio.ByteBuffer>): RequestPublishers$StreamIterator;
          }
          let RequestPublishers$StreamIterator: _RequestPublishers$StreamIterator$$static;
          interface _RequestPublishers$StreamIterator {
            _closeStream(): void;
            hasNext(): boolean;
            _hasNext0(): boolean;
            next(): java.nio.ByteBuffer;
            next(): any;
            _read(): int;
            _bufSupplier: java.util.function.Supplier<java.nio.ByteBuffer>;
            _eof: boolean;
            _haveNext: boolean;
            _is: java.io.InputStream;
            _need2Read: boolean;
            _nextBuffer: java.nio.ByteBuffer;
            _stateLock: java.util.concurrent.locks.ReentrantLock;
          }
          interface RequestPublishers$StreamIterator extends CombineTypes<[_RequestPublishers$StreamIterator, java.lang.Object, java.util.Iterator<java.nio.ByteBuffer>]> {}
          interface _RequestPublishers$StringPublisher$$static extends ClassLike {
            new(content: string, charset: java.nio.charset.Charset): RequestPublishers$StringPublisher;
          }
          let RequestPublishers$StringPublisher: _RequestPublishers$StringPublisher$$static;
          interface _RequestPublishers$StringPublisher {
          }
          interface RequestPublishers$StringPublisher extends CombineTypes<[_RequestPublishers$StringPublisher, jdk.internal.net.http.RequestPublishers$ByteArrayPublisher]> {}
          interface _Response$$static extends ClassLike {
            _new(req: HttpRequestImpl, exchange: Exchange<any>, headers: java.net.http.HttpHeaders, connection: HttpConnection, statusCode: int, version: java.net.http.HttpClient$Version): Response;
            _new(req: HttpRequestImpl, exchange: Exchange<any>, headers: java.net.http.HttpHeaders, connection: HttpConnection, statusCode: int, version: java.net.http.HttpClient$Version, isConnectResponse: boolean): Response;
          }
          let Response: _Response$$static;
          interface _Response {
            _getSSLSession(): javax.net.ssl.SSLSession;
            _headers(): java.net.http.HttpHeaders;
            _request(): HttpRequestImpl;
            _statusCode(): int;
            toString(): string;
            _version(): java.net.http.HttpClient$Version;
            _exchange: Exchange<any>;
            _headers: java.net.http.HttpHeaders;
            _isConnectResponse: boolean;
            _localAddress: java.net.InetSocketAddress;
            _request: HttpRequestImpl;
            _sslSession: javax.net.ssl.SSLSession;
            _statusCode: int;
            _version: java.net.http.HttpClient$Version;
          }
          interface Response extends CombineTypes<[_Response, java.lang.Object]> {}
          interface _ResponseBodyHandlers$$static extends ClassLike {
            _pathForSecurityCheck(path: java.nio.file.Path): string;
          }
          let ResponseBodyHandlers: _ResponseBodyHandlers$$static;
          interface _ResponseBodyHandlers {
          }
          interface ResponseBodyHandlers extends CombineTypes<[_ResponseBodyHandlers, java.lang.Object]> {}
          interface _ResponseBodyHandlers$FileDownloadBodyHandler$$static extends ClassLike {
            _allowedInToken(c: char): boolean;
            create(directory: java.nio.file.Path, openOptions: java.util.List<java.nio.file.OpenOption>): ResponseBodyHandlers$FileDownloadBodyHandler;
            _isQuotedStringText(c: char): boolean;
            _isTokenText(c: char): boolean;
            _processFilename(src: string): string;
            _processQuotedString(src: string): string;
            _processToken(src: string): string;
            _unchecked(rinfo: java.net.http.HttpResponse$ResponseInfo, msg: string): java.io.UncheckedIOException;
            _unchecked(msg: string): java.io.UncheckedIOException;
            _DISPOSITION_TYPE: string;
            _FILENAME: java.util.regex.Pattern;
            _NOT_ALLOWED_IN_TOKEN: java.util.Set<http$character>;
            _PROHIBITED: java.util.List<string>;
          }
          let ResponseBodyHandlers$FileDownloadBodyHandler: _ResponseBodyHandlers$FileDownloadBodyHandler$$static;
          interface _ResponseBodyHandlers$FileDownloadBodyHandler {
            apply(responseInfo: java.net.http.HttpResponse$ResponseInfo): java.net.http.HttpResponse$BodySubscriber<java.nio.file.Path>;
            _acc: java.security.AccessControlContext;
            _directory: java.nio.file.Path;
            _filePermissions: java.io.FilePermission[];
            _openOptions: java.util.List<java.nio.file.OpenOption>;
          }
          interface ResponseBodyHandlers$FileDownloadBodyHandler extends CombineTypes<[_ResponseBodyHandlers$FileDownloadBodyHandler, java.lang.Object, java.net.http.HttpResponse$BodyHandler<java.nio.file.Path>]> {}
          interface _ResponseBodyHandlers$PathBodyHandler$$static extends ClassLike {
            create(file: java.nio.file.Path, openOptions: java.util.List<java.nio.file.OpenOption>): ResponseBodyHandlers$PathBodyHandler;
          }
          let ResponseBodyHandlers$PathBodyHandler: _ResponseBodyHandlers$PathBodyHandler$$static;
          interface _ResponseBodyHandlers$PathBodyHandler {
            apply(responseInfo: java.net.http.HttpResponse$ResponseInfo): java.net.http.HttpResponse$BodySubscriber<java.nio.file.Path>;
            _acc: java.security.AccessControlContext;
            _file: java.nio.file.Path;
            _filePermission: java.io.FilePermission;
            _openOptions: java.util.List<java.nio.file.OpenOption>;
          }
          interface ResponseBodyHandlers$PathBodyHandler extends CombineTypes<[_ResponseBodyHandlers$PathBodyHandler, java.lang.Object, java.net.http.HttpResponse$BodyHandler<java.nio.file.Path>]> {}
          interface _ResponseBodyHandlers$PushPromisesHandlerWithMap$$static<T> extends ClassLike {
            new(pushPromiseHandler: java.util.function.Function<java.net.http.HttpRequest,java.net.http.HttpResponse$BodyHandler<T>>, pushPromisesMap: java.util.concurrent.ConcurrentMap<java.net.http.HttpRequest,java.util.concurrent.CompletableFuture<java.net.http.HttpResponse<T>>>): ResponseBodyHandlers$PushPromisesHandlerWithMap<T>;
          }
          let ResponseBodyHandlers$PushPromisesHandlerWithMap: _ResponseBodyHandlers$PushPromisesHandlerWithMap$$static<T>;
          interface _ResponseBodyHandlers$PushPromisesHandlerWithMap<T> {
            applyPushPromise(initiatingRequest: java.net.http.HttpRequest, pushRequest: java.net.http.HttpRequest, acceptor: java.util.function.Function<java.net.http.HttpResponse$BodyHandler<T>,java.util.concurrent.CompletableFuture<java.net.http.HttpResponse<T>>>): void;
            _pushPromiseHandler: java.util.function.Function<java.net.http.HttpRequest,java.net.http.HttpResponse$BodyHandler<T>>;
            _pushPromisesMap: java.util.concurrent.ConcurrentMap<java.net.http.HttpRequest,java.util.concurrent.CompletableFuture<java.net.http.HttpResponse<T>>>;
          }
          interface ResponseBodyHandlers$PushPromisesHandlerWithMap<T> extends CombineTypes<[_ResponseBodyHandlers$PushPromisesHandlerWithMap<T>, java.net.http.HttpResponse$PushPromiseHandler<T>, java.lang.Object]> {}
          interface _ResponseContent$$static extends ClassLike {
            _CR: int;
            _LF: int;
            _MAX_CHUNK_HEADER_SIZE: int;
            _new(connection: HttpConnection, contentLength: long, a2: java.net.http.HttpHeaders, h: java.net.http.HttpResponse$BodySubscriber<any>, userSubscriber: java.lang.Runnable): ResponseContent;
          }
          let ResponseContent: _ResponseContent$$static;
          interface _ResponseContent {
            _contentChunked(): boolean;
            _getBodyParser(onComplete: java.util.function.Consumer<java.lang.Throwable>): ResponseContent$BodyParser;
            _chunkedContent: boolean;
            _chunkedContentInitialized: boolean;
            _contentLength: long;
            _dbgTag: string;
            _headers: java.net.http.HttpHeaders;
            _onFinished: java.lang.Runnable;
            _pusher: java.net.http.HttpResponse$BodySubscriber<any>;
          }
          interface ResponseContent extends CombineTypes<[_ResponseContent, java.lang.Object]> {}
          interface _ResponseContent$BodyParser$$static extends ClassLike {
          }
          let ResponseContent$BodyParser: _ResponseContent$BodyParser$$static;
          interface _ResponseContent$BodyParser {
            currentStateMessage(): string;
            onError(a0: java.lang.Throwable): void;
            onSubscribe(a0: AbstractSubscription): void;
          }
          interface ResponseContent$BodyParser extends CombineTypes<[_ResponseContent$BodyParser, java.lang.Object, java.util.function.Consumer<java.nio.ByteBuffer>]> {}
          interface _ResponseContent$ChunkState$$static extends ClassLike {
            valueOf(name: string): ResponseContent$ChunkState;
            values(): ResponseContent$ChunkState[];
            readonly DONE: ResponseContent$ChunkState;
            readonly READING_DATA: ResponseContent$ChunkState;
            readonly READING_LENGTH: ResponseContent$ChunkState;
          }
          let ResponseContent$ChunkState: _ResponseContent$ChunkState$$static;
          interface _ResponseContent$ChunkState {
          }
          interface ResponseContent$ChunkState extends CombineTypes<[_ResponseContent$ChunkState]> {}
          interface _ResponseContent$ChunkedBodyParser$$static extends ClassLike {
            _new(this$0: java.util.function.Consumer<java.lang.Throwable>): ResponseContent$ChunkedBodyParser;
          }
          let ResponseContent$ChunkedBodyParser: _ResponseContent$ChunkedBodyParser$$static;
          interface _ResponseContent$ChunkedBodyParser {
            accept(b: java.nio.ByteBuffer): void;
            accept(a0: any): void;
            currentStateMessage(): string;
            _dbgString(): string;
            _debugBuffer(b: java.nio.ByteBuffer): void;
            onError(t: java.lang.Throwable): void;
            onSubscribe(sub: AbstractSubscription): void;
            _toDigit(b: int): int;
            _tryConsumeBytes(chunkbuf: java.nio.ByteBuffer): int;
            _tryPushOneHunk(b: java.nio.ByteBuffer, out: java.util.List<java.nio.ByteBuffer>): boolean;
            _tryReadChunkLen(chunkbuf: java.nio.ByteBuffer): int;
            _tryReadOneHunk(chunk: java.nio.ByteBuffer): java.nio.ByteBuffer;
            _READMORE: java.nio.ByteBuffer;
            _bytesToConsume: int;
            _bytesremaining: int;
            _chunkext: int;
            _chunklen: int;
            _closedExceptionally: java.lang.Throwable;
            _cr: boolean;
            _dbgTag: string;
            _debug: common.Logger;
            _digits: int;
            _onComplete: java.util.function.Consumer<java.lang.Throwable>;
            _partialChunklen: int;
            _state: ResponseContent$ChunkState;
            _sub: AbstractSubscription;
            _this$0: ResponseContent;
          }
          interface ResponseContent$ChunkedBodyParser extends CombineTypes<[_ResponseContent$ChunkedBodyParser, jdk.internal.net.http.ResponseContent$BodyParser, java.lang.Object]> {}
          interface _ResponseContent$FixedLengthBodyParser$$static extends ClassLike {
            _new(this$0: long, contentLength: java.util.function.Consumer<java.lang.Throwable>): ResponseContent$FixedLengthBodyParser;
          }
          let ResponseContent$FixedLengthBodyParser: _ResponseContent$FixedLengthBodyParser$$static;
          interface _ResponseContent$FixedLengthBodyParser {
            accept(b: java.nio.ByteBuffer): void;
            accept(a0: any): void;
            currentStateMessage(): string;
            _dbgString(): string;
            onError(t: java.lang.Throwable): void;
            onSubscribe(sub: AbstractSubscription): void;
            _closedExceptionally: java.lang.Throwable;
            _contentLength: long;
            _dbgTag: string;
            _debug: common.Logger;
            _onComplete: java.util.function.Consumer<java.lang.Throwable>;
            _remaining: long;
            _sub: AbstractSubscription;
            _this$0: ResponseContent;
          }
          interface ResponseContent$FixedLengthBodyParser extends CombineTypes<[_ResponseContent$FixedLengthBodyParser, jdk.internal.net.http.ResponseContent$BodyParser, java.lang.Object]> {}
          interface _ResponseContent$UnknownLengthBodyParser$$static extends ClassLike {
            _new(this$0: java.util.function.Consumer<java.lang.Throwable>): ResponseContent$UnknownLengthBodyParser;
          }
          let ResponseContent$UnknownLengthBodyParser: _ResponseContent$UnknownLengthBodyParser$$static;
          interface _ResponseContent$UnknownLengthBodyParser {
            accept(b: java.nio.ByteBuffer): void;
            accept(a0: any): void;
            complete(): void;
            currentStateMessage(): string;
            _dbgString(): string;
            onError(t: java.lang.Throwable): void;
            onSubscribe(sub: AbstractSubscription): void;
            _breceived: int;
            _closedExceptionally: java.lang.Throwable;
            _dbgTag: string;
            _debug: common.Logger;
            _onComplete: java.util.function.Consumer<java.lang.Throwable>;
            _sub: AbstractSubscription;
            _this$0: ResponseContent;
          }
          interface ResponseContent$UnknownLengthBodyParser extends CombineTypes<[_ResponseContent$UnknownLengthBodyParser, jdk.internal.net.http.ResponseContent$BodyParser, java.lang.Object]> {}
          interface _ResponseInfoImpl$$static extends ClassLike {
            _new(response: Response): ResponseInfoImpl;
            _new(statusCode: int, headers: java.net.http.HttpHeaders, version: java.net.http.HttpClient$Version): ResponseInfoImpl;
          }
          let ResponseInfoImpl: _ResponseInfoImpl$$static;
          interface _ResponseInfoImpl {
            headers(): java.net.http.HttpHeaders;
            statusCode(): int;
            version(): java.net.http.HttpClient$Version;
            _headers: java.net.http.HttpHeaders;
            _statusCode: int;
            _version: java.net.http.HttpClient$Version;
          }
          interface ResponseInfoImpl extends CombineTypes<[_ResponseInfoImpl, java.lang.Object, java.net.http.HttpResponse$ResponseInfo]> {}
          interface _ResponseSubscribers$$static extends ClassLike {
            createLineStream(): java.net.http.HttpResponse$BodySubscriber<java.util.stream.Stream<string>>;
            createLineStream(charset: java.nio.charset.Charset): java.net.http.HttpResponse$BodySubscriber<java.util.stream.Stream<string>>;
            createPublisher(): java.net.http.HttpResponse$BodySubscriber<java.util.concurrent.Flow$Publisher<java.util.List<java.nio.ByteBuffer>>>;
            getBodyAsync<T>(e: java.util.concurrent.Executor, bs: java.net.http.HttpResponse$BodySubscriber<T>): java.util.concurrent.CompletionStage<T>;
            getBodyAsync<T>(e: java.util.concurrent.Executor, bs: java.net.http.HttpResponse$BodySubscriber<T>, cf: java.util.concurrent.CompletableFuture<T>): java.util.concurrent.CompletableFuture<T>;
            getBodyAsync<T>(e: java.util.concurrent.Executor, bs: java.net.http.HttpResponse$BodySubscriber<T>, cf: java.util.concurrent.CompletableFuture<T>, errorHandler: java.util.function.Consumer<java.lang.Throwable>): java.util.concurrent.CompletableFuture<T>;
            new(): ResponseSubscribers;
          }
          let ResponseSubscribers: _ResponseSubscribers$$static;
          interface _ResponseSubscribers {
          }
          interface ResponseSubscribers extends CombineTypes<[_ResponseSubscribers, java.lang.Object]> {}
          interface _ResponseSubscribers$ByteArraySubscriber$$static<T> extends ClassLike {
            _join(bytes: java.util.List<java.nio.ByteBuffer>): byte[];
            new(finisher: java.util.function.Function<byte[],T>): ResponseSubscribers$ByteArraySubscriber<T>;
          }
          let ResponseSubscribers$ByteArraySubscriber: _ResponseSubscribers$ByteArraySubscriber$$static<T>;
          interface _ResponseSubscribers$ByteArraySubscriber<T> {
            getBody(): java.util.concurrent.CompletionStage<T>;
            onComplete(): void;
            onError(throwable: java.lang.Throwable): void;
            onNext(items: java.util.List<java.nio.ByteBuffer>): void;
            onNext(a0: any): void;
            onSubscribe(subscription: java.util.concurrent.Flow$Subscription): void;
            _finisher: java.util.function.Function<byte[],T>;
            _received: java.util.List<java.nio.ByteBuffer>;
            _result: java.util.concurrent.CompletableFuture<T>;
            _subscription: java.util.concurrent.Flow$Subscription;
          }
          interface ResponseSubscribers$ByteArraySubscriber<T> extends CombineTypes<[_ResponseSubscribers$ByteArraySubscriber<T>, java.lang.Object, ResponseSubscribers$TrustedSubscriber<T>]> {}
          interface _ResponseSubscribers$ConsumerSubscriber$$static extends ClassLike {
            new(consumer: java.util.function.Consumer<java.util.Optional<byte[]>>): ResponseSubscribers$ConsumerSubscriber;
          }
          let ResponseSubscribers$ConsumerSubscriber: _ResponseSubscribers$ConsumerSubscriber$$static;
          interface _ResponseSubscribers$ConsumerSubscriber {
            getBody(): java.util.concurrent.CompletionStage<java.lang.Void>;
            onComplete(): void;
            onError(throwable: java.lang.Throwable): void;
            onNext(items: java.util.List<java.nio.ByteBuffer>): void;
            onNext(a0: any): void;
            onSubscribe(subscription: java.util.concurrent.Flow$Subscription): void;
            _consumer: java.util.function.Consumer<java.util.Optional<byte[]>>;
            _result: java.util.concurrent.CompletableFuture<java.lang.Void>;
            _subscribed: java.util.concurrent.atomic.AtomicBoolean;
            _subscription: java.util.concurrent.Flow$Subscription;
          }
          interface ResponseSubscribers$ConsumerSubscriber extends CombineTypes<[_ResponseSubscribers$ConsumerSubscriber, java.lang.Object, ResponseSubscribers$TrustedSubscriber<java.lang.Void>]> {}
          interface _ResponseSubscribers$HttpResponseInputStream$$static extends ClassLike {
            _LAST_BUFFER: java.nio.ByteBuffer;
            _LAST_LIST: java.util.List<java.nio.ByteBuffer>;
            _MAX_BUFFERS_IN_QUEUE: int;
            _debug: common.Logger;
            new(): ResponseSubscribers$HttpResponseInputStream;
            _new(maxBuffers: int): ResponseSubscribers$HttpResponseInputStream;
          }
          let ResponseSubscribers$HttpResponseInputStream: _ResponseSubscribers$HttpResponseInputStream$$static;
          interface _ResponseSubscribers$HttpResponseInputStream {
            available(): int;
            close(): void;
            _current(): java.nio.ByteBuffer;
            getBody(): java.util.concurrent.CompletionStage<java.io.InputStream>;
            onComplete(): void;
            onError(thrwbl: java.lang.Throwable): void;
            onNext(t: java.util.List<java.nio.ByteBuffer>): void;
            onNext(a0: any): void;
            onSubscribe(s: java.util.concurrent.Flow$Subscription): void;
            read(bytes: byte[], off: int, len: int): int;
            read(): int;
            _buffers: java.util.concurrent.BlockingQueue<java.util.List<java.nio.ByteBuffer>>;
            _closed: boolean;
            _currentBuffer: java.nio.ByteBuffer;
            _currentListItr: java.util.Iterator<java.nio.ByteBuffer>;
            _failed: java.lang.Throwable;
            _subscribed: java.util.concurrent.atomic.AtomicBoolean;
            _subscription: java.util.concurrent.Flow$Subscription;
          }
          interface ResponseSubscribers$HttpResponseInputStream extends CombineTypes<[_ResponseSubscribers$HttpResponseInputStream, ResponseSubscribers$TrustedSubscriber<java.io.InputStream>, java.io.InputStream]> {}
          interface _ResponseSubscribers$MappingSubscriber$$static<T,U> extends ClassLike {
            new(upstream: java.net.http.HttpResponse$BodySubscriber<T>, mapper: java.util.function.Function<T,U>): ResponseSubscribers$MappingSubscriber<T,U>;
            _new(upstream: java.net.http.HttpResponse$BodySubscriber<T>, mapper: java.util.function.Function<T,U>, trusted: boolean): ResponseSubscribers$MappingSubscriber<T,U>;
          }
          let ResponseSubscribers$MappingSubscriber: _ResponseSubscribers$MappingSubscriber$$static<T,U>;
          interface _ResponseSubscribers$MappingSubscriber<T,U> {
            getBody(): java.util.concurrent.CompletionStage<U>;
            needsExecutor(): boolean;
            onComplete(): void;
            onError(throwable: java.lang.Throwable): void;
            onNext(item: java.util.List<java.nio.ByteBuffer>): void;
            onNext(a0: any): void;
            onSubscribe(subscription: java.util.concurrent.Flow$Subscription): void;
            _mapper: java.util.function.Function<T,U>;
            _trusted: boolean;
            _upstream: java.net.http.HttpResponse$BodySubscriber<T>;
          }
          interface ResponseSubscribers$MappingSubscriber<T,U> extends CombineTypes<[_ResponseSubscribers$MappingSubscriber<T,U>, java.lang.Object, ResponseSubscribers$TrustedSubscriber<U>]> {}
          interface _ResponseSubscribers$NullSubscriber$$static<T> extends ClassLike {
            new(result: java.util.Optional<T>): ResponseSubscribers$NullSubscriber<T>;
          }
          let ResponseSubscribers$NullSubscriber: _ResponseSubscribers$NullSubscriber$$static<T>;
          interface _ResponseSubscribers$NullSubscriber<T> {
            getBody(): java.util.concurrent.CompletionStage<T>;
            onComplete(): void;
            onError(throwable: java.lang.Throwable): void;
            onNext(items: java.util.List<java.nio.ByteBuffer>): void;
            onNext(a0: any): void;
            onSubscribe(subscription: java.util.concurrent.Flow$Subscription): void;
            _cf: java.util.concurrent.CompletableFuture<T>;
            _result: java.util.Optional<T>;
            _subscribed: java.util.concurrent.atomic.AtomicBoolean;
          }
          interface ResponseSubscribers$NullSubscriber<T> extends CombineTypes<[_ResponseSubscribers$NullSubscriber<T>, java.lang.Object, ResponseSubscribers$TrustedSubscriber<T>]> {}
          interface _ResponseSubscribers$PathSubscriber$$static extends ClassLike {
            create(file: java.nio.file.Path, options: java.util.List<java.nio.file.OpenOption>): ResponseSubscribers$PathSubscriber;
            _isDefaultFS(file: java.nio.file.Path): boolean;
            _pathForSecurityCheck(path: java.nio.file.Path): string;
            _EMPTY_FILE_PERMISSIONS: java.io.FilePermission[];
            _new(file: java.nio.file.Path, options: java.util.List<java.nio.file.OpenOption>, acc: java.security.AccessControlContext, filePermissions: java.io.FilePermission[]): ResponseSubscribers$PathSubscriber;
            _new(file: java.nio.file.Path, options: java.util.List<java.nio.file.OpenOption>, acc: java.security.AccessControlContext, ...filePermissions: java.io.FilePermission[]): ResponseSubscribers$PathSubscriber;
          }
          let ResponseSubscribers$PathSubscriber: _ResponseSubscribers$PathSubscriber$$static;
          interface _ResponseSubscribers$PathSubscriber {
            _close(): void;
            getBody(): java.util.concurrent.CompletionStage<java.nio.file.Path>;
            onComplete(): void;
            onError(e: java.lang.Throwable): void;
            onNext(items: java.util.List<java.nio.ByteBuffer>): void;
            onNext(a0: any): void;
            onSubscribe(subscription: java.util.concurrent.Flow$Subscription): void;
            _acc: java.security.AccessControlContext;
            _file: java.nio.file.Path;
            _filePermissions: java.io.FilePermission[];
            _isDefaultFS: boolean;
            _options: java.nio.file.OpenOption[];
            _out: java.nio.channels.FileChannel;
            _result: java.util.concurrent.CompletableFuture<java.nio.file.Path>;
            _subscribed: java.util.concurrent.atomic.AtomicBoolean;
            _subscription: java.util.concurrent.Flow$Subscription;
          }
          interface ResponseSubscribers$PathSubscriber extends CombineTypes<[_ResponseSubscribers$PathSubscriber, ResponseSubscribers$TrustedSubscriber<java.nio.file.Path>, java.lang.Object]> {}
          interface _ResponseSubscribers$PublishingBodySubscriber$$static extends ClassLike {
          }
          let ResponseSubscribers$PublishingBodySubscriber: _ResponseSubscribers$PublishingBodySubscriber$$static;
          interface _ResponseSubscribers$PublishingBodySubscriber {
            _complete(ref: ResponseSubscribers$PublishingBodySubscriber$SubscriberRef, t: java.lang.Throwable): void;
            getBody(): java.util.concurrent.CompletionStage<java.util.concurrent.Flow$Publisher<java.util.List<java.nio.ByteBuffer>>>;
            onComplete(): void;
            onError(throwable: java.lang.Throwable): void;
            onNext(item: java.util.List<java.nio.ByteBuffer>): void;
            onNext(a0: any): void;
            onSubscribe(subscription: java.util.concurrent.Flow$Subscription): void;
            _signalComplete(): void;
            _signalError(err: java.lang.Throwable): void;
            _subscribe(subscriber: java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>): void;
            _suppress(condition: boolean, assertion: string, carrier: java.lang.Throwable): boolean;
            _body: java.util.concurrent.CompletionStage<java.util.concurrent.Flow$Publisher<java.util.List<java.nio.ByteBuffer>>>;
            _completionCF: common.MinimalFuture<java.lang.Void>;
            _subscribed: java.util.concurrent.atomic.AtomicBoolean;
            _subscribedCF: common.MinimalFuture<ResponseSubscribers$PublishingBodySubscriber$SubscriberRef>;
            _subscriberRef: java.util.concurrent.atomic.AtomicReference<ResponseSubscribers$PublishingBodySubscriber$SubscriberRef>;
            _subscriptionCF: common.MinimalFuture<java.util.concurrent.Flow$Subscription>;
          }
          interface ResponseSubscribers$PublishingBodySubscriber extends CombineTypes<[_ResponseSubscribers$PublishingBodySubscriber, ResponseSubscribers$TrustedSubscriber<java.util.concurrent.Flow$Publisher<java.util.List<java.nio.ByteBuffer>>>, java.lang.Object]> {}
          interface _ResponseSubscribers$PublishingBodySubscriber$SubscriberRef$$static extends ClassLike {
            _new(subscriber: java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>): ResponseSubscribers$PublishingBodySubscriber$SubscriberRef;
          }
          let ResponseSubscribers$PublishingBodySubscriber$SubscriberRef: _ResponseSubscribers$PublishingBodySubscriber$SubscriberRef$$static;
          interface _ResponseSubscribers$PublishingBodySubscriber$SubscriberRef {
            _clear(): java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>;
            _get(): java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>;
            _ref: java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>;
          }
          interface ResponseSubscribers$PublishingBodySubscriber$SubscriberRef extends CombineTypes<[_ResponseSubscribers$PublishingBodySubscriber$SubscriberRef, java.lang.Object]> {}
          interface _ResponseSubscribers$PublishingBodySubscriber$SubscriptionRef$$static extends ClassLike {
            _new(subscription: java.util.concurrent.Flow$Subscription, subscriberRef: ResponseSubscribers$PublishingBodySubscriber$SubscriberRef): ResponseSubscribers$PublishingBodySubscriber$SubscriptionRef;
          }
          let ResponseSubscribers$PublishingBodySubscriber$SubscriptionRef: _ResponseSubscribers$PublishingBodySubscriber$SubscriptionRef$$static;
          interface _ResponseSubscribers$PublishingBodySubscriber$SubscriptionRef {
            cancel(): void;
            request(n: long): void;
            _subscribe(): void;
            toString(): string;
            _subscriberRef: ResponseSubscribers$PublishingBodySubscriber$SubscriberRef;
            _subscription: java.util.concurrent.Flow$Subscription;
          }
          interface ResponseSubscribers$PublishingBodySubscriber$SubscriptionRef extends CombineTypes<[_ResponseSubscribers$PublishingBodySubscriber$SubscriptionRef, java.lang.Object, java.util.concurrent.Flow$Subscription]> {}
          interface _ResponseSubscribers$SubscriberAdapter$$static<S,R> extends ClassLike {
            new(subscriber: S, finisher: java.util.function.Function<S,R>): ResponseSubscribers$SubscriberAdapter<S,R>;
          }
          let ResponseSubscribers$SubscriberAdapter: _ResponseSubscribers$SubscriberAdapter$$static<S,R>;
          interface _ResponseSubscribers$SubscriberAdapter<S,R> {
            getBody(): java.util.concurrent.CompletionStage<R>;
            onComplete(): void;
            onError(throwable: java.lang.Throwable): void;
            onNext(item: java.util.List<java.nio.ByteBuffer>): void;
            onNext(a0: any): void;
            onSubscribe(subscription: java.util.concurrent.Flow$Subscription): void;
            _cf: java.util.concurrent.CompletableFuture<R>;
            _finisher: java.util.function.Function<S,R>;
            _subscriber: S;
            _subscription: java.util.concurrent.Flow$Subscription;
          }
          interface ResponseSubscribers$SubscriberAdapter<S,R> extends CombineTypes<[_ResponseSubscribers$SubscriberAdapter<S,R>, java.lang.Object, ResponseSubscribers$TrustedSubscriber<R>]> {}
          interface _ResponseSubscribers$TrustedSubscriber$$static<T> extends ClassLike {
            needsExecutor(bs: java.net.http.HttpResponse$BodySubscriber<any>): boolean;
          }
          let ResponseSubscribers$TrustedSubscriber: _ResponseSubscribers$TrustedSubscriber$$static<T>;
          interface _ResponseSubscribers$TrustedSubscriber<T> {
            needsExecutor(): boolean;
          }
          interface ResponseSubscribers$TrustedSubscriber<T> extends CombineTypes<[_ResponseSubscribers$TrustedSubscriber<T>, java.lang.Object, java.net.http.HttpResponse$BodySubscriber<T>]> {}
          interface _ResponseTimerEvent$$static extends ClassLike {
            _of(exchange: MultiExchange<any>): ResponseTimerEvent;
            _debug: common.Logger;
          }
          let ResponseTimerEvent: _ResponseTimerEvent$$static;
          interface _ResponseTimerEvent {
            compareTo(a0: TimeoutEvent): int;
            deadline(): java.time.Instant;
            handle(): void;
            toString(): string;
            _multiExchange: MultiExchange<any>;
          }
          interface ResponseTimerEvent extends CombineTypes<[_ResponseTimerEvent, jdk.internal.net.http.TimeoutEvent]> {}
          interface _SocketTube$$static extends ClassLike {
            _listOf<T>(list: java.util.List<T>, item: T): java.util.List<T>;
            _EOF: java.util.List<java.nio.ByteBuffer>;
            _IDS: java.util.concurrent.atomic.AtomicLong;
            _MAX_BUFFERS: int;
            _NOTHING: java.util.List<java.nio.ByteBuffer>;
            new(client: HttpClientImpl, channel: java.nio.channels.SocketChannel, buffersFactory: java.util.function.Supplier<java.nio.ByteBuffer>): SocketTube;
          }
          let SocketTube: _SocketTube$$static;
          interface _SocketTube {
            _channelDescr(): string;
            connectFlows(writePublisher: http.common.FlowTube$TubePublisher, readSubscriber: http.common.FlowTube$TubeSubscriber): void;
            _dbgString(): string;
            _debugState(when: string): void;
            isFinished(): boolean;
            onComplete(): void;
            onError(throwable: java.lang.Throwable): void;
            onNext(item: java.util.List<java.nio.ByteBuffer>): void;
            onNext(a0: any): void;
            onSubscribe(subscription: java.util.concurrent.Flow$Subscription): void;
            _pauseEvent(event: SocketTube$SocketFlowEvent, errorSignaler: java.util.function.Consumer<java.lang.Throwable>): void;
            _readAvailable(buffersSource: SocketTube$BufferSource): java.util.List<java.nio.ByteBuffer>;
            _resumeEvent(event: SocketTube$SocketFlowEvent, errorSignaler: java.util.function.Consumer<java.lang.Throwable>): void;
            _signalClosed(cause: java.lang.Throwable): void;
            subscribe(s: java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>): void;
            toString(): string;
            _writeAvailable(bytes: java.util.List<java.nio.ByteBuffer>): long;
            _channel: java.nio.channels.SocketChannel;
            _client: HttpClientImpl;
            _debug: common.Logger;
            _errorRef: java.util.concurrent.atomic.AtomicReference<java.lang.Throwable>;
            _id: long;
            _lock: any;
            _readPublisher: SocketTube$InternalReadPublisher;
            _sliceBuffersSource: SocketTube$SliceBufferSource;
            _writeSubscriber: SocketTube$InternalWriteSubscriber;
          }
          interface SocketTube extends CombineTypes<[_SocketTube, jdk.internal.net.http.common.FlowTube, java.lang.Object]> {}
          interface _SocketTube$BufferSource$$static extends ClassLike {
          }
          let SocketTube$BufferSource: _SocketTube$BufferSource$$static;
          interface _SocketTube$BufferSource {
            append(a0: java.util.List<java.nio.ByteBuffer>, a1: java.nio.ByteBuffer, a2: int): java.util.List<java.nio.ByteBuffer>;
            getBuffer(): java.nio.ByteBuffer;
            returnUnused(buffer: java.nio.ByteBuffer): void;
          }
          interface SocketTube$BufferSource extends CombineTypes<[_SocketTube$BufferSource, java.lang.Object]> {}
          interface _SocketTube$InternalReadPublisher$$static extends ClassLike {
          }
          let SocketTube$InternalReadPublisher: _SocketTube$InternalReadPublisher$$static;
          interface _SocketTube$InternalReadPublisher {
            _signalError(error: java.lang.Throwable): void;
            subscribe(s: java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>): void;
            _pendingSubscription: java.util.concurrent.atomic.AtomicReference<SocketTube$InternalReadPublisher$ReadSubscription>;
            _subscription: SocketTube$InternalReadPublisher$ReadSubscription;
            _subscriptionImpl: SocketTube$InternalReadPublisher$InternalReadSubscription;
            _this$0: SocketTube;
          }
          interface SocketTube$InternalReadPublisher extends CombineTypes<[_SocketTube$InternalReadPublisher, java.lang.Object, java.util.concurrent.Flow$Publisher<java.util.List<java.nio.ByteBuffer>>]> {}
          interface _SocketTube$InternalReadPublisher$InternalReadSubscription$$static extends ClassLike {
            _new(this$1: SocketTube$InternalReadPublisher): SocketTube$InternalReadPublisher$InternalReadSubscription;
          }
          let SocketTube$InternalReadPublisher$InternalReadSubscription: _SocketTube$InternalReadPublisher$InternalReadSubscription$$static;
          interface _SocketTube$InternalReadPublisher$InternalReadSubscription {
            cancel(): void;
            _handleError(): void;
            _handlePending(): boolean;
            _handleSubscribeEvent(): void;
            _pauseReadEvent(): void;
            _read(): void;
            request(n: long): void;
            _resumeReadEvent(): void;
            _signalError(error: java.lang.Throwable): void;
            _signalReadable(): void;
            _signalSubscribe(): void;
            _completed: boolean;
            _demand: common.Demand;
            _readEvent: SocketTube$InternalReadPublisher$ReadEvent;
            _readScheduler: common.SequentialScheduler;
            _subscribeEvent: AsyncEvent;
            _this$1: SocketTube$InternalReadPublisher;
          }
          interface SocketTube$InternalReadPublisher$InternalReadSubscription extends CombineTypes<[_SocketTube$InternalReadPublisher$InternalReadSubscription, java.lang.Object, java.util.concurrent.Flow$Subscription]> {}
          interface _SocketTube$InternalReadPublisher$ReadEvent$$static extends ClassLike {
            _new(this$1: SocketTube$InternalReadPublisher, channel: java.nio.channels.SocketChannel, sub: SocketTube$InternalReadPublisher$InternalReadSubscription): SocketTube$InternalReadPublisher$ReadEvent;
          }
          let SocketTube$InternalReadPublisher$ReadEvent: _SocketTube$InternalReadPublisher$ReadEvent$$static;
          interface _SocketTube$InternalReadPublisher$ReadEvent {
            _debug(): http.common.Logger;
            _signalError(error: java.lang.Throwable): void;
            _signalEvent(): void;
            _sub: SocketTube$InternalReadPublisher$InternalReadSubscription;
            _this$1: SocketTube$InternalReadPublisher;
          }
          interface SocketTube$InternalReadPublisher$ReadEvent extends CombineTypes<[_SocketTube$InternalReadPublisher$ReadEvent, jdk.internal.net.http.SocketTube$SocketFlowEvent]> {}
          interface _SocketTube$InternalReadPublisher$ReadSubscription$$static extends ClassLike {
            new(this$1: SocketTube$InternalReadPublisher, impl: SocketTube$InternalReadPublisher$InternalReadSubscription, subscriber: http.common.FlowTube$TubeSubscriber): SocketTube$InternalReadPublisher$ReadSubscription;
          }
          let SocketTube$InternalReadPublisher$ReadSubscription: _SocketTube$InternalReadPublisher$ReadSubscription$$static;
          interface _SocketTube$InternalReadPublisher$ReadSubscription {
            cancel(): void;
            request(n: long): void;
            _signalCompletion(): void;
            _signalOnSubscribe(): void;
            _bufferSource: SocketTube$BufferSource;
            _cancelled: boolean;
            _completed: boolean;
            _errorRef: java.util.concurrent.atomic.AtomicReference<java.lang.Throwable>;
            _impl: SocketTube$InternalReadPublisher$InternalReadSubscription;
            _subscribed: boolean;
            _subscriber: common.FlowTube$TubeSubscriber;
            _this$1: SocketTube$InternalReadPublisher;
          }
          interface SocketTube$InternalReadPublisher$ReadSubscription extends CombineTypes<[_SocketTube$InternalReadPublisher$ReadSubscription, java.lang.Object, java.util.concurrent.Flow$Subscription]> {}
          interface _SocketTube$InternalWriteSubscriber$$static extends ClassLike {
          }
          let SocketTube$InternalWriteSubscriber: _SocketTube$InternalWriteSubscriber$$static;
          interface _SocketTube$InternalWriteSubscriber {
            onComplete(): void;
            onError(throwable: java.lang.Throwable): void;
            onNext(bufs: java.util.List<java.nio.ByteBuffer>): void;
            onNext(a0: any): void;
            onSubscribe(subscription: java.util.concurrent.Flow$Subscription): void;
            _requestMore(): void;
            _resumeWriteEvent(inSelectorThread: boolean): void;
            _signalError(error: java.lang.Throwable): void;
            _signalWritable(): void;
            _startSubscription(): void;
            _tryFlushCurrent(inSelectorThread: boolean): void;
            _completed: boolean;
            _current: java.util.List<java.nio.ByteBuffer>;
            _startSubscription: AsyncTriggerEvent;
            _subscription: SocketTube$InternalWriteSubscriber$WriteSubscription;
            _this$0: SocketTube;
            _writeDemand: common.Demand;
            _writeEvent: SocketTube$InternalWriteSubscriber$WriteEvent;
          }
          interface SocketTube$InternalWriteSubscriber extends CombineTypes<[_SocketTube$InternalWriteSubscriber, java.util.concurrent.Flow$Subscriber<java.util.List<java.nio.ByteBuffer>>, java.lang.Object]> {}
          interface _SocketTube$InternalWriteSubscriber$WriteEvent$$static extends ClassLike {
            _new(this$1: SocketTube$InternalWriteSubscriber, channel: java.nio.channels.SocketChannel, sub: SocketTube$InternalWriteSubscriber): SocketTube$InternalWriteSubscriber$WriteEvent;
          }
          let SocketTube$InternalWriteSubscriber$WriteEvent: _SocketTube$InternalWriteSubscriber$WriteEvent$$static;
          interface _SocketTube$InternalWriteSubscriber$WriteEvent {
            _debug(): http.common.Logger;
            _signalError(error: java.lang.Throwable): void;
            _signalEvent(): void;
            _sub: SocketTube$InternalWriteSubscriber;
            _this$1: SocketTube$InternalWriteSubscriber;
          }
          interface SocketTube$InternalWriteSubscriber$WriteEvent extends CombineTypes<[_SocketTube$InternalWriteSubscriber$WriteEvent, jdk.internal.net.http.SocketTube$SocketFlowEvent]> {}
          interface _SocketTube$InternalWriteSubscriber$WriteSubscription$$static extends ClassLike {
            _new(this$1: SocketTube$InternalWriteSubscriber, subscription: java.util.concurrent.Flow$Subscription): SocketTube$InternalWriteSubscriber$WriteSubscription;
          }
          let SocketTube$InternalWriteSubscriber$WriteSubscription: _SocketTube$InternalWriteSubscriber$WriteSubscription$$static;
          interface _SocketTube$InternalWriteSubscriber$WriteSubscription {
            cancel(): void;
            _dropSubscription(): void;
            request(n: long): void;
            _requestMore(): void;
            _cancelled: boolean;
            _this$1: SocketTube$InternalWriteSubscriber;
            _upstreamSubscription: java.util.concurrent.Flow$Subscription;
          }
          interface SocketTube$InternalWriteSubscriber$WriteSubscription extends CombineTypes<[_SocketTube$InternalWriteSubscriber$WriteSubscription, java.lang.Object, java.util.concurrent.Flow$Subscription]> {}
          interface _SocketTube$SSLDirectBufferSource$$static extends ClassLike {
            new(client: HttpClientImpl): SocketTube$SSLDirectBufferSource;
          }
          let SocketTube$SSLDirectBufferSource: _SocketTube$SSLDirectBufferSource$$static;
          interface _SocketTube$SSLDirectBufferSource {
            append(list: java.util.List<java.nio.ByteBuffer>, buf: java.nio.ByteBuffer, start: int): java.util.List<java.nio.ByteBuffer>;
            getBuffer(): java.nio.ByteBuffer;
            returnUnused(buffer: java.nio.ByteBuffer): void;
            _client: HttpClientImpl;
            _current: java.nio.ByteBuffer;
            _factory: common.BufferSupplier;
          }
          interface SocketTube$SSLDirectBufferSource extends CombineTypes<[_SocketTube$SSLDirectBufferSource, jdk.internal.net.http.SocketTube$BufferSource, java.lang.Object]> {}
          interface _SocketTube$SliceBufferSource$$static extends ClassLike {
            new(): SocketTube$SliceBufferSource;
            new(factory: java.util.function.Supplier<java.nio.ByteBuffer>): SocketTube$SliceBufferSource;
          }
          let SocketTube$SliceBufferSource: _SocketTube$SliceBufferSource$$static;
          interface _SocketTube$SliceBufferSource {
            append(list: java.util.List<java.nio.ByteBuffer>, buf: java.nio.ByteBuffer, start: int): java.util.List<java.nio.ByteBuffer>;
            getBuffer(): java.nio.ByteBuffer;
            _current: java.nio.ByteBuffer;
            _factory: java.util.function.Supplier<java.nio.ByteBuffer>;
          }
          interface SocketTube$SliceBufferSource extends CombineTypes<[_SocketTube$SliceBufferSource, jdk.internal.net.http.SocketTube$BufferSource, java.lang.Object]> {}
          interface _SocketTube$SocketFlowEvent$$static extends ClassLike {
            _new(defaultInterest: int, channel: java.nio.channels.SocketChannel): SocketTube$SocketFlowEvent;
          }
          let SocketTube$SocketFlowEvent: _SocketTube$SocketFlowEvent$$static;
          interface _SocketTube$SocketFlowEvent {
            abort(error: java.io.IOException): void;
            channel(): java.nio.channels.SelectableChannel;
            _debug(): http.common.Logger;
            handle(): void;
            interestOps(): int;
            _pause(): void;
            _registered(): boolean;
            _resume(): void;
            _signalError(a0: java.lang.Throwable): void;
            _signalEvent(): void;
            _channel: java.nio.channels.SocketChannel;
            _defaultInterest: int;
            _interestOps: int;
            _registered: boolean;
          }
          interface SocketTube$SocketFlowEvent extends CombineTypes<[_SocketTube$SocketFlowEvent, jdk.internal.net.http.AsyncEvent]> {}
          interface _SocketTube$SocketFlowTask$$static extends ClassLike {
            _new(task: java.lang.Runnable): SocketTube$SocketFlowTask;
          }
          let SocketTube$SocketFlowTask: _SocketTube$SocketFlowTask$$static;
          interface _SocketTube$SocketFlowTask {
            run(taskCompleter: http.common.SequentialScheduler$DeferredCompleter): void;
            _lock: java.util.concurrent.locks.Lock;
            _task: java.lang.Runnable;
          }
          interface SocketTube$SocketFlowTask extends CombineTypes<[_SocketTube$SocketFlowTask, java.lang.Object, jdk.internal.net.http.common.SequentialScheduler$RestartableTask]> {}
          interface _Stream$$static<T> extends ClassLike {
            _createPseudoHeaders(request: java.net.http.HttpRequest): java.net.http.HttpHeaders;
            _COMPLETED: java.nio.ByteBuffer;
            _COOKIE_HEADER: string;
            _DEREGISTERED: java.lang.invoke.VarHandle;
            _STREAM_STATE: java.lang.invoke.VarHandle;
            _new(connection: Http2Connection, e: Exchange<T>, windowController: WindowController): Stream<T>;
          }
          let Stream: _Stream$$static<T>;
          interface _Stream<T> {
            _cancel(): void;
            _cancel(cause: java.io.IOException): void;
            _cancelImpl(e: java.lang.Throwable): void;
            _cancelImpl(e: java.lang.Throwable, resetFrameErrCode: int): void;
            _checkInterimResponseCountExceeded(): string;
            _checkRequestCancelled(): boolean;
            _close(): void;
            _closeAsUnprocessed(): void;
            _completeResponse(resp: Response): void;
            _completeResponseExceptionally(t: java.lang.Throwable): void;
            _completed(): void;
            _connection(): HttpConnection;
            _connectionClosing(cause: java.lang.Throwable): void;
            _consumed(df: http.frame.DataFrame): boolean;
            _createResponseSubscriber(handler: java.net.http.HttpResponse$BodyHandler<T>, response: java.net.http.HttpResponse$ResponseInfo): Stream$Http2StreamResponseSubscriber<T>;
            _createResponseSubscriber(a0: java.net.http.HttpResponse$BodyHandler, a1: java.net.http.HttpResponse$ResponseInfo): http.common.HttpBodySubscriberWrapper;
            _dbgString(): string;
            _deRegister(): boolean;
            _drainInputQueue(): void;
            _endStreamReceived(): boolean;
            _expectContinueFailed(rcode: int): void;
            _filterHeaders(headers: java.net.http.HttpHeaders): java.net.http.HttpHeaders;
            _getCancelCause(): java.lang.Throwable;
            _getDataFrame(buffer: java.nio.ByteBuffer): http.frame.DataFrame;
            _getEmptyEndStreamDataFrame(): http.frame.DataFrame;
            _getRequestPseudoHeaders(): java.net.http.HttpHeaders;
            _getResponseAsync(executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<Response>;
            _handleReset(frame: http.frame.ResetFrame, subscriber: java.util.concurrent.Flow$Subscriber<any>): void;
            _handleResponse(hf: http.frame.HeaderFrame): void;
            _hasProxyAuthorization(headers: java.net.http.HttpHeaders): boolean;
            _headerFrame(contentLength: long): http.frame.OutgoingHeaders<Stream<T>>;
            ignoreBody(): java.util.concurrent.CompletableFuture<java.lang.Void>;
            _incoming(frame: http.frame.Http2Frame): void;
            _incoming_priority(frame: http.frame.PriorityFrame): void;
            _incoming_pushPromise(pushRequest: HttpRequestImpl, pushStream: Stream$PushedStream<T>): void;
            _incoming_reset(frame: http.frame.ResetFrame): void;
            _incoming_windowUpdate(frame: http.frame.WindowUpdateFrame): void;
            _isCanceled(): boolean;
            _markStream(code: int): int;
            _needsFiltering(headers: java.net.http.HttpHeaders, filter: java.util.function.BiPredicate<string,string>): boolean;
            _nullBody(resp: java.net.http.HttpResponse<T>, t: java.lang.Throwable): void;
            _onProtocolError(cause: java.io.IOException): void;
            _onProtocolError(cause: java.io.IOException, code: int): void;
            _onSubscriptionError(t: java.lang.Throwable): void;
            _otherFrame(frame: http.frame.Http2Frame): void;
            _pushDataFrame(len: int, df: http.frame.DataFrame): void;
            _readBodyAsync(handler: java.net.http.HttpResponse$BodyHandler<T>, returnConnectionToPool: boolean, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<T>;
            _receiveData(bodySubscriber: java.net.http.HttpResponse$BodySubscriber<T>, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<T>;
            _receiveDataFrame(df: http.frame.DataFrame): void;
            _receiveResetFrame(frame: http.frame.ResetFrame): void;
            _registerResponseSubscriber(subscriber: Stream$Http2StreamResponseSubscriber<any>): boolean;
            _registerStream(id: int, registerIfCancelled: boolean): boolean;
            _released(): void;
            _requestSent(): void;
            _responseReceived(): void;
            _rspHeadersConsumer(): http.hpack.DecodingCallback;
            _schedule(): void;
            _sendBodyAsync(): java.util.concurrent.CompletableFuture<ExchangeImpl<T>>;
            _sendBodyImpl(): java.util.concurrent.CompletableFuture<java.lang.Void>;
            _sendDataFrame(frame: http.frame.DataFrame): void;
            _sendHeadersAsync(): java.util.concurrent.CompletableFuture<ExchangeImpl<T>>;
            _sendResetStreamFrame(resetFrameErrCode: int): void;
            _setEndStreamReceived(): void;
            _signalWindowUpdate(): void;
            toString(): string;
            _unregisterResponseSubscriber(subscriber: Stream$Http2StreamResponseSubscriber<any>): boolean;
            _closed: boolean;
            _connection: Http2Connection;
            _deRegistered: boolean;
            _debug: common.Logger;
            _endStreamSent: boolean;
            _errorRef: java.util.concurrent.atomic.AtomicReference<java.lang.Throwable>;
            _finalResponseCodeReceived: boolean;
            _inputQ: java.util.concurrent.ConcurrentLinkedQueue<frame.Http2Frame>;
            _inputQLock: java.util.concurrent.locks.Lock;
            _nonFinalResponseCount: java.util.concurrent.atomic.AtomicInteger;
            _pendingResponseSubscriber: java.net.http.HttpResponse$BodySubscriber<T>;
            _remotelyClosed: boolean;
            _request: HttpRequestImpl;
            _requestBodyCF: java.util.concurrent.CompletableFuture<java.lang.Void>;
            _requestContentLen: long;
            _requestPseudoHeaders: java.net.http.HttpHeaders;
            _requestPublisher: java.net.http.HttpRequest$BodyPublisher;
            _requestSent: boolean;
            _requestSubscriber: http$RequestSubscriber;
            _response: Response;
            _responseBodyCF: java.util.concurrent.CompletableFuture<T>;
            _responseCode: int;
            _responseHeadersBuilder: common.HttpHeadersBuilder;
            _responseReceived: boolean;
            _responseSubscriber: java.net.http.HttpResponse$BodySubscriber<T>;
            _response_cfs: java.util.List<java.util.concurrent.CompletableFuture<Response>>;
            _response_cfs_lock: java.util.concurrent.locks.Lock;
            _rspHeadersConsumer: http$HeadersConsumer;
            _sched: common.SequentialScheduler;
            _sendLock: java.util.concurrent.locks.Lock;
            _stateLock: java.util.concurrent.locks.Lock;
            _stopRequested: boolean;
            _streamState: int;
            _streamWindowUpdater: WindowUpdateSender;
            _streamid: int;
            _trailerReceived: boolean;
            _userSubscription: common.SubscriptionBase;
            _windowController: WindowController;
          }
          interface Stream<T> extends CombineTypes<[_Stream<T>, ExchangeImpl<T>]> {}
          interface _Stream$HeadersConsumer$$static extends ClassLike {
          }
          let Stream$HeadersConsumer: _Stream$HeadersConsumer$$static;
          interface _Stream$HeadersConsumer {
            _formatMessage(message: string, header: string): string;
            onDecoded(name: Stream$HeadersConsumer$charSequence, value: Stream$HeadersConsumer$charSequence): void;
            onMaxHeaderListSizeReached(size: long, a1: int): void;
            reset(): void;
            _maxHeaderListSizeReached: boolean;
            _this$0: Stream;
          }
          interface Stream$HeadersConsumer extends CombineTypes<[_Stream$HeadersConsumer, jdk.internal.net.http.common.ValidatingHeadersConsumer, jdk.internal.net.http.hpack.DecodingCallback]> {}
          interface _Stream$Http2StreamResponseSubscriber$$static<U> extends ClassLike {
            _new(this$0: java.net.http.HttpResponse$BodySubscriber<U>): Stream$Http2StreamResponseSubscriber<U>;
          }
          let Stream$Http2StreamResponseSubscriber: _Stream$Http2StreamResponseSubscriber$$static<U>;
          interface _Stream$Http2StreamResponseSubscriber<U> {
            _register(): void;
            _unregister(): void;
            _this$0: Stream;
          }
          interface Stream$Http2StreamResponseSubscriber<U> extends CombineTypes<[_Stream$Http2StreamResponseSubscriber<U>, common.HttpBodySubscriberWrapper<U>]> {}
          interface _Stream$PushedStream$$static<T> extends ClassLike {
            _new(parent: Stream<T>, pushGroup: PushGroup<T>, connection: Http2Connection, pushReq: Exchange<T>): Stream$PushedStream<T>;
          }
          let Stream$PushedStream: _Stream$PushedStream$$static<T>;
          interface _Stream$PushedStream<T> {
            _completeResponse(r: Response): void;
            _completeResponseExceptionally(t: java.lang.Throwable): void;
            _createResponseSubscriber(a0: java.net.http.HttpResponse$BodyHandler, a1: java.net.http.HttpResponse$ResponseInfo): http.common.HttpBodySubscriberWrapper;
            _getPushHandler(): java.net.http.HttpResponse$BodyHandler<T>;
            _getResponseAsync(executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<Response>;
            _handleResponse(hf: http.frame.HeaderFrame): void;
            _readBodyAsync(handler: java.net.http.HttpResponse$BodyHandler<T>, returnConnectionToPool: boolean, executor: java.util.concurrent.Executor): java.util.concurrent.CompletableFuture<T>;
            _responseCF(): java.util.concurrent.CompletableFuture<java.net.http.HttpResponse<T>>;
            _sendBodyAsync(): java.util.concurrent.CompletableFuture<ExchangeImpl<T>>;
            _sendHeadersAsync(): java.util.concurrent.CompletableFuture<ExchangeImpl<T>>;
            _setPushHandler(pushHandler: java.net.http.HttpResponse$BodyHandler<T>): void;
            _finalPushResponseCodeReceived: boolean;
            _parent: Stream<T>;
            _pushCF: java.util.concurrent.CompletableFuture<Response>;
            _pushGroup: PushGroup<T>;
            _pushHandler: java.net.http.HttpResponse$BodyHandler<T>;
            _pushReq: HttpRequestImpl;
            _responseCF: java.util.concurrent.CompletableFuture<java.net.http.HttpResponse<T>>;
          }
          interface Stream$PushedStream<T> extends CombineTypes<[_Stream$PushedStream<T>, Stream<T>]> {}
          interface _Stream$RequestSubscriber$$static extends ClassLike {
            _new(this$0: Stream, contentLen: long): Stream$RequestSubscriber;
          }
          let Stream$RequestSubscriber: _Stream$RequestSubscriber$$static;
          interface _Stream$RequestSubscriber {
            _complete(): void;
            onComplete(): void;
            onError(throwable: java.lang.Throwable): void;
            onNext(item: java.nio.ByteBuffer): void;
            onNext(a0: any): void;
            _onNextImpl(item: java.nio.ByteBuffer): void;
            onSubscribe(subscription: java.util.concurrent.Flow$Subscription): void;
            _trySend(): void;
            _contentLength: long;
            _errorRef: java.util.concurrent.atomic.AtomicReference<java.lang.Throwable>;
            _outgoing: java.util.concurrent.ConcurrentLinkedDeque<java.nio.ByteBuffer>;
            _remainingContentLength: long;
            _sendScheduler: common.SequentialScheduler;
            _subscription: java.util.concurrent.Flow$Subscription;
            _this$0: Stream;
          }
          interface Stream$RequestSubscriber extends CombineTypes<[_Stream$RequestSubscriber, java.util.concurrent.Flow$Subscriber<java.nio.ByteBuffer>, java.lang.Object]> {}
          interface _Stream$StreamWindowUpdateSender$$static extends ClassLike {
            _new(this$0: Stream, connection: Http2Connection): Stream$StreamWindowUpdateSender;
          }
          let Stream$StreamWindowUpdateSender: _Stream$StreamWindowUpdateSender$$static;
          interface _Stream$StreamWindowUpdateSender {
            _dbgString(): string;
            _getStreamId(): int;
            _windowSizeExceeded(received: long): boolean;
            _this$0: Stream;
          }
          interface Stream$StreamWindowUpdateSender extends CombineTypes<[_Stream$StreamWindowUpdateSender, jdk.internal.net.http.WindowUpdateSender]> {}
          interface _TimeoutEvent$$static extends ClassLike {
            _COUNTER: java.util.concurrent.atomic.AtomicLong;
            _new(duration: java.time.Duration): TimeoutEvent;
          }
          let TimeoutEvent: _TimeoutEvent$$static;
          interface _TimeoutEvent {
            compareTo(other: TimeoutEvent): int;
            compareTo(a0: any): int;
            deadline(): java.time.Instant;
            handle(): void;
(): void;
            toString(): string;
            _deadline: java.time.Instant;
            _duration: java.time.Duration;
            _id: long;
          }
          interface TimeoutEvent extends CombineTypes<[_TimeoutEvent, java.lang.Comparable<TimeoutEvent>, java.lang.Object]> {}
          interface _WindowController$$static extends ClassLike {
            _DEFAULT_INITIAL_WINDOW_SIZE: int;
            _debug: common.Logger;
            _new(): WindowController;
          }
          let WindowController: _WindowController$$static;
          interface _WindowController {
            _adjustActiveStreams(adjustAmount: int): void;
            _connectionWindowSize(): int;
            _increaseConnectionWindow(amount: int): boolean;
            _increaseStreamWindow(amount: int, streamid: int): boolean;
            _registerStream(streamid: int, initialStreamWindowSize: int): void;
            _removeStream(streamid: int): void;
            _streamWindowSize(streamid: int): int;
            _tryAcquire(requestAmount: int, streamid: int, stream: Stream<any>): int;
            _connectionWindowSize: int;
            _controllerLock: java.util.concurrent.locks.ReentrantLock;
            _pending: java.util.Map<int,java.util.Map$Entry<Stream<any>,int>>;
            _streams: java.util.Map<int,int>;
          }
          interface WindowController extends CombineTypes<[_WindowController, java.lang.Object]> {}
          interface _WindowUpdateSender$$static extends ClassLike {
            _new(connection: Http2Connection): WindowUpdateSender;
            _new(connection: Http2Connection, initWindowSize: int): WindowUpdateSender;
            _new(connection: Http2Connection, maxFrameSize: int, initWindowSize: int): WindowUpdateSender;
          }
          let WindowUpdateSender: _WindowUpdateSender$$static;
          interface _WindowUpdateSender {
            _canBufferUnprocessedBytes(len: int): boolean;
            _checkWindowSizeExceeded(processed: long, a1: long): boolean;
            _dbgString(): string;
            _getStreamId(): int;
            _processed(delta: int): void;
            _released(delta: int): long;
            _sendWindowUpdate(delta: int): void;
            _update(delta: int): void;
            _windowSizeExceeded(a0: long): boolean;
            _connection: Http2Connection;
            _dbgString: string;
            _debug: common.Logger;
            _limit: int;
            _received: java.util.concurrent.atomic.AtomicLong;
            _sendLock: java.util.concurrent.locks.ReentrantLock;
            _unprocessed: java.util.concurrent.atomic.AtomicLong;
            _windowSize: int;
          }
          interface WindowUpdateSender extends CombineTypes<[_WindowUpdateSender, java.lang.Object]> {}
        }
      }
    }
  }
}
