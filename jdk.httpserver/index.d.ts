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
      module net {
        module httpserver {
          module spi {
            interface _HttpServerProvider$$static extends ClassLike {
              _loadProviderAsService(): boolean;
              _loadProviderFromProperty(): boolean;
              provider(): HttpServerProvider;
              _lock: any;
              _provider: HttpServerProvider;
              _new(): HttpServerProvider;
            }
            let HttpServerProvider: _HttpServerProvider$$static;
            interface _HttpServerProvider {
              createHttpServer(a0: java.net.InetSocketAddress, a1: int): HttpServer;
              createHttpsServer(a0: java.net.InetSocketAddress, a1: int): HttpsServer;
            }
            interface HttpServerProvider extends CombineTypes<[_HttpServerProvider, java.lang.Object]> {}
          }
          interface _Authenticator$$static extends ClassLike {
            _new(): Authenticator;
          }
          let Authenticator: _Authenticator$$static;
          interface _Authenticator {
            authenticate(a0: HttpExchange): Authenticator$Result;
(a0: HttpExchange): Authenticator$Result;
          }
          interface Authenticator extends CombineTypes<[_Authenticator, java.lang.Object]> {}
          interface _Authenticator$Failure$$static extends ClassLike {
            new(responseCode: int): Authenticator$Failure;
          }
          let Authenticator$Failure: _Authenticator$Failure$$static;
          interface _Authenticator$Failure {
            getResponseCode(): int;
            _responseCode: int;
          }
          interface Authenticator$Failure extends CombineTypes<[_Authenticator$Failure, com.sun.net.httpserver.Authenticator$Result]> {}
          interface _Authenticator$Result$$static extends ClassLike {
            _new(): Authenticator$Result;
          }
          let Authenticator$Result: _Authenticator$Result$$static;
          interface _Authenticator$Result {
          }
          interface Authenticator$Result extends CombineTypes<[_Authenticator$Result, java.lang.Object]> {}
          interface _Authenticator$Retry$$static extends ClassLike {
            new(responseCode: int): Authenticator$Retry;
          }
          let Authenticator$Retry: _Authenticator$Retry$$static;
          interface _Authenticator$Retry {
            getResponseCode(): int;
            _responseCode: int;
          }
          interface Authenticator$Retry extends CombineTypes<[_Authenticator$Retry, com.sun.net.httpserver.Authenticator$Result]> {}
          interface _Authenticator$Success$$static extends ClassLike {
            new(p: HttpPrincipal): Authenticator$Success;
          }
          let Authenticator$Success: _Authenticator$Success$$static;
          interface _Authenticator$Success {
            getPrincipal(): HttpPrincipal;
            _principal: HttpPrincipal;
          }
          interface Authenticator$Success extends CombineTypes<[_Authenticator$Success, com.sun.net.httpserver.Authenticator$Result]> {}
          interface _BasicAuthenticator$$static extends ClassLike {
            new(realm: string): BasicAuthenticator;
            new(realm: string, charset: java.nio.charset.Charset): BasicAuthenticator;
          }
          let BasicAuthenticator: _BasicAuthenticator$$static;
          interface _BasicAuthenticator {
            authenticate(t: HttpExchange): Authenticator$Result;
            checkCredentials(a0: string, a1: string): boolean;
(a0: string, a1: string): boolean;
            getRealm(): string;
            _setAuthHeader(t: HttpExchange): void;
            _charset: java.nio.charset.Charset;
            _isUTF8: boolean;
            _realm: string;
          }
          interface BasicAuthenticator extends CombineTypes<[_BasicAuthenticator, com.sun.net.httpserver.Authenticator]> {}
          interface _Filter$$static extends ClassLike {
            adaptRequest(description: string, requestOperator: java.util.function.UnaryOperator<Request>): Filter;
            afterHandler(description: string, operation: java.util.function.Consumer<HttpExchange>): Filter;
            beforeHandler(description: string, operation: java.util.function.Consumer<HttpExchange>): Filter;
            _new(): Filter;
          }
          let Filter: _Filter$$static;
          interface _Filter {
            description(): string;
            doFilter(a0: HttpExchange, a1: Filter$Chain): void;
          }
          interface Filter extends CombineTypes<[_Filter, java.lang.Object]> {}
          interface _Filter$Chain$$static extends ClassLike {
            new(filters: java.util.List<Filter>, handler: HttpHandler): Filter$Chain;
          }
          let Filter$Chain: _Filter$Chain$$static;
          interface _Filter$Chain {
            doFilter(exchange: HttpExchange): void;
            _handler: HttpHandler;
            _iter: java.util.ListIterator<Filter>;
          }
          interface Filter$Chain extends CombineTypes<[_Filter$Chain, java.lang.Object]> {}
          interface _Headers$$static extends ClassLike {
            _checkValue(value: string): void;
            of(headers: string[]): Headers;
            of(...headers: string[]): Headers;
            of(headers: java.util.Map<string,java.util.List<string>>): Headers;
            new(): Headers;
            new(headers: java.util.Map<string,java.util.List<string>>): Headers;
          }
          let Headers: _Headers$$static;
          interface _Headers {
            add(key: string, value: string): void;
            clear(): void;
            containsKey(key: any): boolean;
            containsValue(value: any): boolean;
            entrySet(): java.util.Set<java.util.Map$Entry<string,java.util.List<string>>>;
            equals(o: any): boolean;
            get(key: any): java.util.List<string>;
            get(a0: any): any;
            getFirst(key: string): string;
            hashCode(): int;
            isEmpty(): boolean;
            keySet(): java.util.Set<string>;
            _normalize(key: string): string;
            put(key: string, value: java.util.List<string>): java.util.List<string>;
            put(a0: any, a1: any): any;
            putAll(t: java.util.Map<string,java.util.List<string>>): void;
            remove(key: any): java.util.List<string>;
            remove(a0: any): any;
            replaceAll(_function: java.util.function.BiFunction<string,java.util.List<string>,java.util.List<string>>): void;
            set(key: string, value: string): void;
            size(): int;
            toString(): string;
            values(): java.util.Collection<java.util.List<string>>;
            _map: java.util.HashMap<string,java.util.List<string>>;
          }
          interface Headers extends CombineTypes<[_Headers, java.lang.Object, java.util.Map<string,java.util.List<string>>]> {}
          interface _HttpContext$$static extends ClassLike {
            _new(): HttpContext;
          }
          let HttpContext: _HttpContext$$static;
          interface _HttpContext {
            getAttributes(): java.util.Map<string,any>;
            getAuthenticator(): Authenticator;
            getFilters(): java.util.List<Filter>;
            getHandler(): HttpHandler;
            getPath(): string;
            getServer(): HttpServer;
            setAuthenticator(a0: Authenticator): Authenticator;
            setHandler(a0: HttpHandler): void;
          }
          interface HttpContext extends CombineTypes<[_HttpContext, java.lang.Object]> {}
          interface _HttpExchange$$static extends ClassLike {
            _new(): HttpExchange;
          }
          let HttpExchange: _HttpExchange$$static;
          interface _HttpExchange {
            close(): void;
            getAttribute(a0: string): any;
            getHttpContext(): HttpContext;
            getLocalAddress(): java.net.InetSocketAddress;
            getPrincipal(): HttpPrincipal;
            getProtocol(): string;
            getRemoteAddress(): java.net.InetSocketAddress;
            getRequestBody(): java.io.InputStream;
            getRequestHeaders(): Headers;
            getRequestMethod(): string;
            getRequestURI(): java.net.URI;
            getResponseBody(): java.io.OutputStream;
            getResponseCode(): int;
            getResponseHeaders(): Headers;
            sendResponseHeaders(a0: int, a1: long): void;
            setAttribute(a0: string, a1: any): void;
            setStreams(a0: java.io.InputStream, a1: java.io.OutputStream): void;
          }
          interface HttpExchange extends CombineTypes<[_HttpExchange, java.lang.Object, java.lang.AutoCloseable, com.sun.net.httpserver.Request]> {}
          interface _HttpHandler$$static extends ClassLike {
          }
          let HttpHandler: _HttpHandler$$static;
          interface _HttpHandler {
            handle(a0: HttpExchange): void;
(a0: HttpExchange): void;
          }
          interface HttpHandler extends CombineTypes<[_HttpHandler, java.lang.Object]> {}
          interface _HttpHandlers$$static extends ClassLike {
            handleOrElse(handlerTest: java.util.function.Predicate<Request>, handler: HttpHandler, fallbackHandler: HttpHandler): HttpHandler;
            of(statusCode: int, headers: Headers, body: string): HttpHandler;
          }
          let HttpHandlers: _HttpHandlers$$static;
          interface _HttpHandlers {
          }
          interface HttpHandlers extends CombineTypes<[_HttpHandlers, java.lang.Object]> {}
          interface _HttpPrincipal$$static extends ClassLike {
            new(username: string, realm: string): HttpPrincipal;
          }
          let HttpPrincipal: _HttpPrincipal$$static;
          interface _HttpPrincipal {
            equals(another: any): boolean;
            getName(): string;
            getRealm(): string;
            getUsername(): string;
            hashCode(): int;
            toString(): string;
            _realm: string;
            _username: string;
          }
          interface HttpPrincipal extends CombineTypes<[_HttpPrincipal, java.security.Principal, java.lang.Object]> {}
          interface _HttpServer$$static extends ClassLike {
            create(): HttpServer;
            create(addr: java.net.InetSocketAddress, backlog: int): HttpServer;
            create(addr: java.net.InetSocketAddress, backlog: int, path: string, handler: HttpHandler, filters: Filter[]): HttpServer;
            create(addr: java.net.InetSocketAddress, backlog: int, path: string, handler: HttpHandler, ...filters: Filter[]): HttpServer;
            _new(): HttpServer;
          }
          let HttpServer: _HttpServer$$static;
          interface _HttpServer {
            bind(a0: java.net.InetSocketAddress, a1: int): void;
            createContext(a0: string, a1: HttpHandler): HttpContext;
            createContext(a0: string): HttpContext;
            getAddress(): java.net.InetSocketAddress;
            getExecutor(): java.util.concurrent.Executor;
            removeContext(a0: string): void;
            removeContext(a0: HttpContext): void;
            setExecutor(a0: java.util.concurrent.Executor): void;
            start(): void;
            stop(a0: int): void;
          }
          interface HttpServer extends CombineTypes<[_HttpServer, java.lang.Object]> {}
          interface _HttpsConfigurator$$static extends ClassLike {
            new(context: javax.net.ssl.SSLContext): HttpsConfigurator;
          }
          let HttpsConfigurator: _HttpsConfigurator$$static;
          interface _HttpsConfigurator {
            configure(params: HttpsParameters): void;
            getSSLContext(): javax.net.ssl.SSLContext;
            _context: javax.net.ssl.SSLContext;
          }
          interface HttpsConfigurator extends CombineTypes<[_HttpsConfigurator, java.lang.Object]> {}
          interface _HttpsExchange$$static extends ClassLike {
            _new(): HttpsExchange;
          }
          let HttpsExchange: _HttpsExchange$$static;
          interface _HttpsExchange {
            getSSLSession(): javax.net.ssl.SSLSession;
(): javax.net.ssl.SSLSession;
          }
          interface HttpsExchange extends CombineTypes<[_HttpsExchange, com.sun.net.httpserver.HttpExchange]> {}
          interface _HttpsParameters$$static extends ClassLike {
            _new(): HttpsParameters;
          }
          let HttpsParameters: _HttpsParameters$$static;
          interface _HttpsParameters {
            getCipherSuites(): string[];
            getClientAddress(): java.net.InetSocketAddress;
            getHttpsConfigurator(): HttpsConfigurator;
            getNeedClientAuth(): boolean;
            getProtocols(): string[];
            getWantClientAuth(): boolean;
            setCipherSuites(cipherSuites: string[]): void;
            setNeedClientAuth(needClientAuth: boolean): void;
            setProtocols(protocols: string[]): void;
            setSSLParameters(a0: javax.net.ssl.SSLParameters): void;
            setWantClientAuth(wantClientAuth: boolean): void;
            _cipherSuites: string[];
            _needClientAuth: boolean;
            _protocols: string[];
            _wantClientAuth: boolean;
          }
          interface HttpsParameters extends CombineTypes<[_HttpsParameters, java.lang.Object]> {}
          interface _HttpsServer$$static extends ClassLike {
            create(): HttpsServer;
            create(addr: java.net.InetSocketAddress, backlog: int): HttpsServer;
            create(addr: java.net.InetSocketAddress, backlog: int, path: string, handler: HttpHandler, filters: Filter[]): HttpsServer;
            create(addr: java.net.InetSocketAddress, backlog: int, path: string, handler: HttpHandler, ...filters: Filter[]): HttpsServer;
            _new(): HttpsServer;
          }
          let HttpsServer: _HttpsServer$$static;
          interface _HttpsServer {
            getHttpsConfigurator(): HttpsConfigurator;
            setHttpsConfigurator(a0: HttpsConfigurator): void;
          }
          interface HttpsServer extends CombineTypes<[_HttpsServer, com.sun.net.httpserver.HttpServer]> {}
          interface _Request$$static extends ClassLike {
          }
          let Request: _Request$$static;
          interface _Request {
            getRequestHeaders(): Headers;
            getRequestMethod(): string;
            getRequestURI(): java.net.URI;
            with(headerName: string, headerValues: java.util.List<string>): Request;
          }
          interface Request extends CombineTypes<[_Request, java.lang.Object]> {}
          interface _SimpleFileServer$$static extends ClassLike {
            createFileHandler(rootDirectory: java.nio.file.Path): HttpHandler;
            createFileServer(addr: java.net.InetSocketAddress, rootDirectory: java.nio.file.Path, outputLevel: SimpleFileServer$OutputLevel): HttpServer;
            createOutputFilter(out: java.io.OutputStream, outputLevel: SimpleFileServer$OutputLevel): Filter;
            _MIME_TABLE: java.util.function.UnaryOperator<string>;
          }
          let SimpleFileServer: _SimpleFileServer$$static;
          interface _SimpleFileServer {
          }
          interface SimpleFileServer extends CombineTypes<[_SimpleFileServer, java.lang.Object]> {}
          interface _SimpleFileServer$OutputLevel$$static extends ClassLike {
            valueOf(name: string): SimpleFileServer$OutputLevel;
            values(): SimpleFileServer$OutputLevel[];
            readonly INFO: SimpleFileServer$OutputLevel;
            readonly NONE: SimpleFileServer$OutputLevel;
            readonly VERBOSE: SimpleFileServer$OutputLevel;
          }
          let SimpleFileServer$OutputLevel: _SimpleFileServer$OutputLevel$$static;
          interface _SimpleFileServer$OutputLevel {
          }
          interface SimpleFileServer$OutputLevel extends CombineTypes<[_SimpleFileServer$OutputLevel]> {}
        }
      }
    }
  }
  module sun {
    module net {
      module httpserver {
        module simpleserver {
          module resources {
            interface _simpleserver$$static extends ClassLike {
              new(): simpleserver;
            }
            let simpleserver: _simpleserver$$static;
            interface _simpleserver {
              _getContents(): any[][];
            }
            interface simpleserver extends CombineTypes<[_simpleserver, java.util.ListResourceBundle]> {}
            interface _simpleserver_de$$static extends ClassLike {
              new(): simpleserver_de;
            }
            let simpleserver_de: _simpleserver_de$$static;
            interface _simpleserver_de {
              _getContents(): any[][];
            }
            interface simpleserver_de extends CombineTypes<[_simpleserver_de, java.util.ListResourceBundle]> {}
            interface _simpleserver_ja$$static extends ClassLike {
              new(): simpleserver_ja;
            }
            let simpleserver_ja: _simpleserver_ja$$static;
            interface _simpleserver_ja {
              _getContents(): any[][];
            }
            interface simpleserver_ja extends CombineTypes<[_simpleserver_ja, java.util.ListResourceBundle]> {}
            interface _simpleserver_zh_CN$$static extends ClassLike {
              new(): simpleserver_zh_CN;
            }
            let simpleserver_zh_CN: _simpleserver_zh_CN$$static;
            interface _simpleserver_zh_CN {
              _getContents(): any[][];
            }
            interface simpleserver_zh_CN extends CombineTypes<[_simpleserver_zh_CN, java.util.ListResourceBundle]> {}
          }
          interface _FileServerHandler$$static extends ClassLike {
            _checkPathWithinRoot(path: java.nio.file.Path, root: java.nio.file.Path): java.nio.file.Path;
            _checkRequestWithinContext(requestPath: string, contextPath: string): void;
            _contextPath(exchange: com.sun.net.httpserver.HttpExchange): string;
            create(root: java.nio.file.Path, mimeTable: java.util.function.UnaryOperator<string>): com.sun.net.httpserver.HttpHandler;
            _dirListing(exchange: com.sun.net.httpserver.HttpExchange, path: java.nio.file.Path): string;
            _discardRequestBody(exchange: com.sun.net.httpserver.HttpExchange): void;
            _getLastModified(path: java.nio.file.Path): string;
            _hrefListItemFor(uri: java.net.URI): string;
            _indexFile(path: java.nio.file.Path): java.nio.file.Path;
            _isHiddenOrSymLink(path: java.nio.file.Path): boolean;
            _missingSlash(exchange: com.sun.net.httpserver.HttpExchange): boolean;
            _pathForSecurityCheck(path: string): string;
            _relativeRequestPath(exchange: com.sun.net.httpserver.HttpExchange): string;
            _requestPath(exchange: com.sun.net.httpserver.HttpExchange): string;
            _DEFAULT_CONTENT_TYPE: string;
            _METHOD_NOT_ALLOWED_HANDLER: com.sun.net.httpserver.HttpHandler;
            _NOT_IMPLEMENTED_HANDLER: com.sun.net.httpserver.HttpHandler;
            _RESERVED_CHARS: java.util.Map<int,string>;
            _SUPPORTED_METHODS: java.util.List<string>;
            _UNSUPPORTED_METHODS: java.util.List<string>;
            _closeHTML: string;
            _hrefListItemTemplate: string;
            _openHTML: string;
            _sanitize: java.util.function.UnaryOperator<string>;
          }
          let FileServerHandler: _FileServerHandler$$static;
          interface _FileServerHandler {
            _getRedirectURI(uri: java.net.URI): string;
            handle(exchange: com.sun.net.httpserver.HttpExchange): void;
            _handleForbidden(exchange: com.sun.net.httpserver.HttpExchange): void;
            _handleGET(exchange: com.sun.net.httpserver.HttpExchange, path: java.nio.file.Path): void;
            _handleHEAD(exchange: com.sun.net.httpserver.HttpExchange, path: java.nio.file.Path): void;
            _handleMovedPermanently(exchange: com.sun.net.httpserver.HttpExchange): void;
            _handleNotFound(exchange: com.sun.net.httpserver.HttpExchange): void;
            _handleSupportedMethod(exchange: com.sun.net.httpserver.HttpExchange, path: java.nio.file.Path, writeBody: boolean): void;
            _listFiles(exchange: com.sun.net.httpserver.HttpExchange, path: java.nio.file.Path, writeBody: boolean): void;
            _mapToPath(exchange: com.sun.net.httpserver.HttpExchange, root: java.nio.file.Path): java.nio.file.Path;
            _mediaType(file: string): string;
            _serveFile(exchange: com.sun.net.httpserver.HttpExchange, path: java.nio.file.Path, writeBody: boolean): void;
            _logger: java.lang.System$Logger;
            _mimeTable: java.util.function.UnaryOperator<string>;
            _root: java.nio.file.Path;
          }
          interface FileServerHandler extends CombineTypes<[_FileServerHandler, com.sun.net.httpserver.HttpHandler, java.lang.Object]> {}
          interface _JWebServer$$static extends ClassLike {
            main(args: string[]): void;
            main(...args: string[]): void;
            _setMaxConnectionsIfNotSet(): void;
            _setMaxReqTime(): void;
            _DEFAULT_JWEBSERVER_MAX_CONNECTIONS: string;
            readonly MAXREQTIME_KEY: string;
            readonly MAXREQTIME_VAL: string;
            _SYS_PROP_MAX_CONNECTIONS: string;
          }
          let JWebServer: _JWebServer$$static;
          interface _JWebServer {
          }
          interface JWebServer extends CombineTypes<[_JWebServer, java.lang.Object]> {}
          interface _Main$$static extends ClassLike {
            main(args: string[]): void;
            main(...args: string[]): void;
            _setMaxReqTime(): void;
            readonly MAXREQTIME_KEY: string;
            readonly MAXREQTIME_VAL: string;
          }
          let Main: _Main$$static;
          interface _Main {
          }
          interface Main extends CombineTypes<[_Main, java.lang.Object]> {}
          interface _OutputFilter$$static extends ClassLike {
            create(os: java.io.OutputStream, outputLevel: com.sun.net.httpserver.SimpleFileServer$OutputLevel): OutputFilter;
            _FORMATTER: java.time.format.DateTimeFormatter;
          }
          let OutputFilter: _OutputFilter$$static;
          interface _OutputFilter {
            description(): string;
            doFilter(exchange: com.sun.net.httpserver.HttpExchange, chain: com.sun.net.httpserver.Filter$Chain): void;
            _logHeaders(sign: string, headers: com.sun.net.httpserver.Headers): void;
            _operation(): java.util.function.Consumer<com.sun.net.httpserver.HttpExchange>;
            _reportError(message: string): void;
            _filter: com.sun.net.httpserver.Filter;
            _outputLevel: com.sun.net.httpserver.SimpleFileServer$OutputLevel;
            _printStream: java.io.PrintStream;
          }
          interface OutputFilter extends CombineTypes<[_OutputFilter, com.sun.net.httpserver.Filter]> {}
          interface _ResourceBundleHelper$$static extends ClassLike {
            _getMessage(key: string, args: any[]): string;
            _getMessage(key: string, ...args: any[]): string;
            _bundle: java.util.ResourceBundle;
            _new(): ResourceBundleHelper;
          }
          let ResourceBundleHelper: _ResourceBundleHelper$$static;
          interface _ResourceBundleHelper {
          }
          interface ResourceBundleHelper extends CombineTypes<[_ResourceBundleHelper, java.lang.Object]> {}
          interface _SimpleFileServerImpl$$static extends ClassLike {
            _start(writer: java.io.PrintWriter, launcher: string, args: string[]): int;
            _DEFAULT_OUTPUT_LEVEL: com.sun.net.httpserver.SimpleFileServer$OutputLevel;
            _DEFAULT_PORT: int;
            _DEFAULT_ROOT: java.nio.file.Path;
            _LOOPBACK_ADDR: java.net.InetAddress;
            _addrSpecified: boolean;
          }
          let SimpleFileServerImpl: _SimpleFileServerImpl$$static;
          interface _SimpleFileServerImpl {
          }
          interface SimpleFileServerImpl extends CombineTypes<[_SimpleFileServerImpl, java.lang.Object]> {}
          interface _SimpleFileServerImpl$Out$$static extends ClassLike {
            _new(writer: java.io.PrintWriter): SimpleFileServerImpl$Out;
          }
          let SimpleFileServerImpl$Out: _SimpleFileServerImpl$Out$$static;
          interface _SimpleFileServerImpl$Out {
            _flush(): void;
            _printStartMessage(root: java.nio.file.Path, server: com.sun.net.httpserver.HttpServer): void;
            _reportError(message: string): void;
            _showHelp(launcher: string): void;
            _showOption(option: string): void;
            _showUsage(launcher: string): void;
            _showVersion(launcher: string): void;
            _writer: java.io.PrintWriter;
          }
          interface SimpleFileServerImpl$Out extends CombineTypes<[_SimpleFileServerImpl$Out, java.lang.Object]> {}
          interface _SimpleFileServerImpl$Startup$$static extends ClassLike {
            valueOf(name: string): SimpleFileServerImpl$Startup;
            values(): SimpleFileServerImpl$Startup[];
            readonly CMDERR: SimpleFileServerImpl$Startup;
            readonly OK: SimpleFileServerImpl$Startup;
            readonly SYSERR: SimpleFileServerImpl$Startup;
          }
          let SimpleFileServerImpl$Startup: _SimpleFileServerImpl$Startup$$static;
          interface _SimpleFileServerImpl$Startup {
            readonly statusCode: int;
          }
          interface SimpleFileServerImpl$Startup extends CombineTypes<[_SimpleFileServerImpl$Startup]> {}
          interface _URIPathSegment$$static extends ClassLike {
            _isLetter(c: char): boolean;
            _isSupported(segment: string): boolean;
          }
          let URIPathSegment: _URIPathSegment$$static;
          interface _URIPathSegment {
          }
          interface URIPathSegment extends CombineTypes<[_URIPathSegment, java.lang.Object]> {}
        }
        interface _AuthFilter$$static extends ClassLike {
          new(authenticator: com.sun.net.httpserver.Authenticator): AuthFilter;
        }
        let AuthFilter: _AuthFilter$$static;
        interface _AuthFilter {
          consumeInput(t: com.sun.net.httpserver.HttpExchange): void;
          description(): string;
          doFilter(t: com.sun.net.httpserver.HttpExchange, chain: com.sun.net.httpserver.Filter$Chain): void;
          setAuthenticator(a: com.sun.net.httpserver.Authenticator): void;
          _authenticator: com.sun.net.httpserver.Authenticator;
        }
        interface AuthFilter extends CombineTypes<[_AuthFilter, com.sun.net.httpserver.Filter]> {}
        interface _ChunkedInputStream$$static extends ClassLike {
          _CR: char;
          _LF: char;
          _MAX_CHUNK_HEADER_SIZE: int;
          _new(t: ExchangeImpl, src: java.io.InputStream): ChunkedInputStream;
        }
        let ChunkedInputStream: _ChunkedInputStream$$static;
        interface _ChunkedInputStream {
          available(): int;
          _consumeCRLF(): void;
          isDataBuffered(): boolean;
          mark(l: int): void;
          markSupported(): boolean;
          _numeric(arr: char[], nchars: int): int;
          _readChunkHeader(): int;
          _readImpl(b: byte[], off: int, len: int): int;
          reset(): void;
          _needToReadHeader: boolean;
          _remaining: int;
        }
        interface ChunkedInputStream extends CombineTypes<[_ChunkedInputStream, sun.net.httpserver.LeftOverInputStream]> {}
        interface _ChunkedOutputStream$$static extends ClassLike {
          _CHUNK_SIZE: int;
          _OFFSET: int;
          _new(t: ExchangeImpl, src: java.io.OutputStream): ChunkedOutputStream;
        }
        let ChunkedOutputStream: _ChunkedOutputStream$$static;
        interface _ChunkedOutputStream {
          close(): void;
          flush(): void;
          write(b: int): void;
          write(b: byte[], off: int, len: int): void;
          _writeChunk(): void;
          _buf: byte[];
          _closed: boolean;
          _count: int;
          _pos: int;
          _t: ExchangeImpl;
        }
        interface ChunkedOutputStream extends CombineTypes<[_ChunkedOutputStream, java.io.FilterOutputStream]> {}
        interface _Code$$static extends ClassLike {
          _msg(code: int): string;
          readonly HTTP_ACCEPTED: int;
          readonly HTTP_BAD_GATEWAY: int;
          readonly HTTP_BAD_METHOD: int;
          readonly HTTP_BAD_REQUEST: int;
          readonly HTTP_CLIENT_TIMEOUT: int;
          readonly HTTP_CONFLICT: int;
          readonly HTTP_CONTINUE: int;
          readonly HTTP_CREATED: int;
          readonly HTTP_ENTITY_TOO_LARGE: int;
          readonly HTTP_FORBIDDEN: int;
          readonly HTTP_GATEWAY_TIMEOUT: int;
          readonly HTTP_GONE: int;
          readonly HTTP_INTERNAL_ERROR: int;
          readonly HTTP_LENGTH_REQUIRED: int;
          readonly HTTP_MOVED_PERM: int;
          readonly HTTP_MOVED_TEMP: int;
          readonly HTTP_MULT_CHOICE: int;
          readonly HTTP_NOT_ACCEPTABLE: int;
          readonly HTTP_NOT_AUTHORITATIVE: int;
          readonly HTTP_NOT_FOUND: int;
          readonly HTTP_NOT_IMPLEMENTED: int;
          readonly HTTP_NOT_MODIFIED: int;
          readonly HTTP_NO_CONTENT: int;
          readonly HTTP_OK: int;
          readonly HTTP_PARTIAL: int;
          readonly HTTP_PAYMENT_REQUIRED: int;
          readonly HTTP_PRECON_FAILED: int;
          readonly HTTP_PROXY_AUTH: int;
          readonly HTTP_REQ_TOO_LONG: int;
          readonly HTTP_RESET: int;
          readonly HTTP_SEE_OTHER: int;
          readonly HTTP_UNAUTHORIZED: int;
          readonly HTTP_UNAVAILABLE: int;
          readonly HTTP_UNSUPPORTED_TYPE: int;
          readonly HTTP_USE_PROXY: int;
          readonly HTTP_VERSION: int;
          _new(): Code;
        }
        let Code: _Code$$static;
        interface _Code {
        }
        interface Code extends CombineTypes<[_Code, java.lang.Object]> {}
        interface _ContextList$$static extends ClassLike {
          _new(): ContextList;
        }
        let ContextList: _ContextList$$static;
        interface _ContextList {
          add(ctx: HttpContextImpl): void;
          _contains(ctx: HttpContextImpl): boolean;
          _findContext(protocol: string, path: string): HttpContextImpl;
          _findContext(protocol: string, path: string, exact: boolean): HttpContextImpl;
          remove(protocol: string, path: string): void;
          remove(context: HttpContextImpl): void;
          size(): int;
          _list: java.util.LinkedList<HttpContextImpl>;
        }
        interface ContextList extends CombineTypes<[_ContextList, java.lang.Object]> {}
        interface _DefaultHttpServerProvider$$static extends ClassLike {
          new(): DefaultHttpServerProvider;
        }
        let DefaultHttpServerProvider: _DefaultHttpServerProvider$$static;
        interface _DefaultHttpServerProvider {
          createHttpServer(addr: java.net.InetSocketAddress, backlog: int): com.sun.net.httpserver.HttpServer;
          createHttpsServer(addr: java.net.InetSocketAddress, backlog: int): com.sun.net.httpserver.HttpsServer;
        }
        interface DefaultHttpServerProvider extends CombineTypes<[_DefaultHttpServerProvider, com.sun.net.httpserver.spi.HttpServerProvider]> {}
        interface _DelegatingHttpExchange$$static extends ClassLike {
          new(ex: com.sun.net.httpserver.HttpExchange): DelegatingHttpExchange;
        }
        let DelegatingHttpExchange: _DelegatingHttpExchange$$static;
        interface _DelegatingHttpExchange {
          close(): void;
          getAttribute(name: string): any;
          getHttpContext(): com.sun.net.httpserver.HttpContext;
          getLocalAddress(): java.net.InetSocketAddress;
          getPrincipal(): com.sun.net.httpserver.HttpPrincipal;
          getProtocol(): string;
          getRemoteAddress(): java.net.InetSocketAddress;
          getRequestBody(): java.io.InputStream;
          getRequestHeaders(): com.sun.net.httpserver.Headers;
          getRequestMethod(): string;
          getRequestURI(): java.net.URI;
          getResponseBody(): java.io.OutputStream;
          getResponseCode(): int;
          getResponseHeaders(): com.sun.net.httpserver.Headers;
          sendResponseHeaders(rCode: int, contentLen: long): void;
          setAttribute(name: string, value: any): void;
          setStreams(i: java.io.InputStream, o: java.io.OutputStream): void;
          _exchange: com.sun.net.httpserver.HttpExchange;
        }
        interface DelegatingHttpExchange extends CombineTypes<[_DelegatingHttpExchange, com.sun.net.httpserver.HttpExchange]> {}
        interface _Event$$static extends ClassLike {
          _new(t: ExchangeImpl): Event;
        }
        let Event: _Event$$static;
        interface _Event {
          _exchange: ExchangeImpl;
        }
        interface Event extends CombineTypes<[_Event, java.lang.Object]> {}
        interface _ExchangeImpl$$static extends ClassLike {
          _get(t: com.sun.net.httpserver.HttpExchange): ExchangeImpl;
          _FORMATTER: java.time.format.DateTimeFormatter;
          _HEAD: string;
          _new(m: string, u: java.net.URI, req: Request, len: long, a4: HttpConnection): ExchangeImpl;
        }
        let ExchangeImpl: _ExchangeImpl$$static;
        interface _ExchangeImpl {
          _bytes(s: string, extra: int): byte[];
          close(): void;
          getAttribute(name: string): any;
          _getConnection(): HttpConnection;
          getHttpContext(): HttpContextImpl;
          getLocalAddress(): java.net.InetSocketAddress;
          _getOriginalInputStream(): LeftOverInputStream;
          _getPlaceholderResponseBody(): PlaceholderOutputStream;
          getPrincipal(): com.sun.net.httpserver.HttpPrincipal;
          getProtocol(): string;
          getRemoteAddress(): java.net.InetSocketAddress;
          getRequestBody(): java.io.InputStream;
          getRequestHeaders(): com.sun.net.httpserver.Headers;
          getRequestMethod(): string;
          getRequestURI(): java.net.URI;
          getResponseBody(): java.io.OutputStream;
          getResponseCode(): int;
          getResponseHeaders(): com.sun.net.httpserver.Headers;
          getSSLSession(): javax.net.ssl.SSLSession;
          _getServerImpl(): ServerImpl;
          _isHeadRequest(): boolean;
          sendResponseHeaders(rCode: int, contentLen: long): void;
          setAttribute(name: string, value: any): void;
          _setPrincipal(principal: com.sun.net.httpserver.HttpPrincipal): void;
          setStreams(i: java.io.InputStream, o: java.io.OutputStream): void;
          _write(map: com.sun.net.httpserver.Headers, os: java.io.OutputStream): void;
          _attributes: java.util.Map<string,any>;
          _close: boolean;
          _closed: boolean;
          _connection: HttpConnection;
          _http10: boolean;
          _method: string;
          _principal: com.sun.net.httpserver.HttpPrincipal;
          _rcode: int;
          _req: Request;
          _reqContentLen: long;
          _reqHdrs: com.sun.net.httpserver.Headers;
          _ris: java.io.InputStream;
          _ros: java.io.OutputStream;
          _rspContentLen: long;
          _rspHdrs: com.sun.net.httpserver.Headers;
          _rspbuf: byte[];
          _sentHeaders: boolean;
          _server: ServerImpl;
          _thread: java.lang.Thread;
          _uis: java.io.InputStream;
          _uis_orig: LeftOverInputStream;
          _uos: java.io.OutputStream;
          _uos_orig: PlaceholderOutputStream;
          _uri: java.net.URI;
          _writefinished: boolean;
        }
        interface ExchangeImpl extends CombineTypes<[_ExchangeImpl, java.lang.Object]> {}
        interface _FixedLengthInputStream$$static extends ClassLike {
          _new(t: ExchangeImpl, src: java.io.InputStream, len: long): FixedLengthInputStream;
        }
        let FixedLengthInputStream: _FixedLengthInputStream$$static;
        interface _FixedLengthInputStream {
          available(): int;
          mark(l: int): void;
          markSupported(): boolean;
          _readImpl(b: byte[], off: int, len: int): int;
          reset(): void;
          _remaining: long;
        }
        interface FixedLengthInputStream extends CombineTypes<[_FixedLengthInputStream, sun.net.httpserver.LeftOverInputStream]> {}
        interface _FixedLengthOutputStream$$static extends ClassLike {
          _new(t: ExchangeImpl, src: java.io.OutputStream, len: long): FixedLengthOutputStream;
        }
        let FixedLengthOutputStream: _FixedLengthOutputStream$$static;
        interface _FixedLengthOutputStream {
          close(): void;
          write(b: int): void;
          write(b: byte[], off: int, len: int): void;
          _closed: boolean;
          _remaining: long;
          _t: ExchangeImpl;
        }
        interface FixedLengthOutputStream extends CombineTypes<[_FixedLengthOutputStream, java.io.FilterOutputStream]> {}
        interface _HttpConnection$$static extends ClassLike {
          _new(): HttpConnection;
        }
        let HttpConnection: _HttpConnection$$static;
        interface _HttpConnection {
          _close(): void;
          _getChannel(): java.nio.channels.SocketChannel;
          _getHttpContext(): HttpContextImpl;
          _getInputStream(): java.io.InputStream;
          _getProtocol(): string;
          _getRawOutputStream(): java.io.OutputStream;
          _getRemaining(): int;
          _getSSLContext(): javax.net.ssl.SSLContext;
          _getSSLEngine(): javax.net.ssl.SSLEngine;
          _getSelectionKey(): java.nio.channels.SelectionKey;
          _getState(): HttpConnection$State;
          _setChannel(c: java.nio.channels.SocketChannel): void;
          _setContext(ctx: HttpContextImpl): void;
          _setParameters(_in: java.io.InputStream, rawout: java.io.OutputStream, chan: java.nio.channels.SocketChannel, engine: javax.net.ssl.SSLEngine, sslStreams: SSLStreams, sslContext: javax.net.ssl.SSLContext, protocol: string, context: HttpContextImpl, raw: java.io.InputStream): void;
          _setRemaining(r: int): void;
          _setState(s: HttpConnection$State): void;
          toString(): string;
          _chan: java.nio.channels.SocketChannel;
          _closed: boolean;
          _context: HttpContextImpl;
          _engine: javax.net.ssl.SSLEngine;
          _i: java.io.InputStream;
          _idleStartTime: long;
          _logger: java.lang.System$Logger;
          _protocol: string;
          _raw: java.io.InputStream;
          _rawout: java.io.OutputStream;
          _remaining: int;
          _reqStartedTime: long;
          _rspStartedTime: long;
          _selectionKey: java.nio.channels.SelectionKey;
          _sslContext: javax.net.ssl.SSLContext;
          _sslStreams: SSLStreams;
          _state: HttpConnection$State;
        }
        interface HttpConnection extends CombineTypes<[_HttpConnection, java.lang.Object]> {}
        interface _HttpConnection$State$$static extends ClassLike {
          valueOf(name: string): HttpConnection$State;
          values(): HttpConnection$State[];
          readonly IDLE: HttpConnection$State;
          readonly NEWLY_ACCEPTED: HttpConnection$State;
          readonly REQUEST: HttpConnection$State;
          readonly RESPONSE: HttpConnection$State;
        }
        let HttpConnection$State: _HttpConnection$State$$static;
        interface _HttpConnection$State {
        }
        interface HttpConnection$State extends CombineTypes<[_HttpConnection$State]> {}
        interface _HttpContextImpl$$static extends ClassLike {
          _new(protocol: string, path: string, cb: com.sun.net.httpserver.HttpHandler, server: ServerImpl): HttpContextImpl;
        }
        let HttpContextImpl: _HttpContextImpl$$static;
        interface _HttpContextImpl {
          getAttributes(): java.util.Map<string,any>;
          getAuthenticator(): com.sun.net.httpserver.Authenticator;
          getFilters(): java.util.List<com.sun.net.httpserver.Filter>;
          getHandler(): com.sun.net.httpserver.HttpHandler;
          _getLogger(): java.lang.System$Logger;
          getPath(): string;
          getProtocol(): string;
          getServer(): com.sun.net.httpserver.HttpServer;
          _getServerImpl(): ServerImpl;
          _getSystemFilters(): java.util.List<com.sun.net.httpserver.Filter>;
          setAuthenticator(auth: com.sun.net.httpserver.Authenticator): com.sun.net.httpserver.Authenticator;
          setHandler(h: com.sun.net.httpserver.HttpHandler): void;
          _attributes: java.util.Map<string,any>;
          _authenticator: com.sun.net.httpserver.Authenticator;
          _authfilter: AuthFilter;
          _handler: com.sun.net.httpserver.HttpHandler;
          _path: string;
          _protocol: string;
          _server: ServerImpl;
          _sfilters: java.util.List<com.sun.net.httpserver.Filter>;
          _ufilters: java.util.List<com.sun.net.httpserver.Filter>;
        }
        interface HttpContextImpl extends CombineTypes<[_HttpContextImpl, com.sun.net.httpserver.HttpContext]> {}
        interface _HttpError$$static extends ClassLike {
          _serialVersionUID: long;
          new(msg: string): HttpError;
        }
        let HttpError: _HttpError$$static;
        interface _HttpError {
        }
        interface HttpError extends CombineTypes<[_HttpError, java.lang.RuntimeException]> {}
        interface _HttpExchangeImpl$$static extends ClassLike {
          _new(impl: ExchangeImpl): HttpExchangeImpl;
        }
        let HttpExchangeImpl: _HttpExchangeImpl$$static;
        interface _HttpExchangeImpl {
          close(): void;
          getAttribute(name: string): any;
          _getExchangeImpl(): ExchangeImpl;
          getHttpContext(): HttpContextImpl;
          getHttpContext(): com.sun.net.httpserver.HttpContext;
          getLocalAddress(): java.net.InetSocketAddress;
          getPrincipal(): com.sun.net.httpserver.HttpPrincipal;
          getProtocol(): string;
          getRemoteAddress(): java.net.InetSocketAddress;
          getRequestBody(): java.io.InputStream;
          getRequestHeaders(): com.sun.net.httpserver.Headers;
          getRequestMethod(): string;
          getRequestURI(): java.net.URI;
          getResponseBody(): java.io.OutputStream;
          getResponseCode(): int;
          getResponseHeaders(): com.sun.net.httpserver.Headers;
          sendResponseHeaders(rCode: int, contentLen: long): void;
          setAttribute(name: string, value: any): void;
          setStreams(i: java.io.InputStream, o: java.io.OutputStream): void;
          _impl: ExchangeImpl;
        }
        interface HttpExchangeImpl extends CombineTypes<[_HttpExchangeImpl, com.sun.net.httpserver.HttpExchange]> {}
        interface _HttpServerImpl$$static extends ClassLike {
          _new(): HttpServerImpl;
          _new(addr: java.net.InetSocketAddress, backlog: int): HttpServerImpl;
        }
        let HttpServerImpl: _HttpServerImpl$$static;
        interface _HttpServerImpl {
          bind(addr: java.net.InetSocketAddress, backlog: int): void;
          createContext(path: string, handler: com.sun.net.httpserver.HttpHandler): HttpContextImpl;
          createContext(path: string): HttpContextImpl;
          createContext(a0: string): com.sun.net.httpserver.HttpContext;
          createContext(a0: string, a1: com.sun.net.httpserver.HttpHandler): com.sun.net.httpserver.HttpContext;
          getAddress(): java.net.InetSocketAddress;
          getExecutor(): java.util.concurrent.Executor;
          removeContext(path: string): void;
          removeContext(context: com.sun.net.httpserver.HttpContext): void;
          setExecutor(executor: java.util.concurrent.Executor): void;
          start(): void;
          stop(delay: int): void;
          _server: ServerImpl;
        }
        interface HttpServerImpl extends CombineTypes<[_HttpServerImpl, com.sun.net.httpserver.HttpServer]> {}
        interface _HttpsExchangeImpl$$static extends ClassLike {
          _new(impl: ExchangeImpl): HttpsExchangeImpl;
        }
        let HttpsExchangeImpl: _HttpsExchangeImpl$$static;
        interface _HttpsExchangeImpl {
          close(): void;
          getAttribute(name: string): any;
          _getExchangeImpl(): ExchangeImpl;
          getHttpContext(): HttpContextImpl;
          getHttpContext(): com.sun.net.httpserver.HttpContext;
          getLocalAddress(): java.net.InetSocketAddress;
          getPrincipal(): com.sun.net.httpserver.HttpPrincipal;
          getProtocol(): string;
          getRemoteAddress(): java.net.InetSocketAddress;
          getRequestBody(): java.io.InputStream;
          getRequestHeaders(): com.sun.net.httpserver.Headers;
          getRequestMethod(): string;
          getRequestURI(): java.net.URI;
          getResponseBody(): java.io.OutputStream;
          getResponseCode(): int;
          getResponseHeaders(): com.sun.net.httpserver.Headers;
          getSSLSession(): javax.net.ssl.SSLSession;
          sendResponseHeaders(rCode: int, contentLen: long): void;
          setAttribute(name: string, value: any): void;
          setStreams(i: java.io.InputStream, o: java.io.OutputStream): void;
          _impl: ExchangeImpl;
        }
        interface HttpsExchangeImpl extends CombineTypes<[_HttpsExchangeImpl, com.sun.net.httpserver.HttpsExchange]> {}
        interface _HttpsServerImpl$$static extends ClassLike {
          _new(): HttpsServerImpl;
          _new(addr: java.net.InetSocketAddress, backlog: int): HttpsServerImpl;
        }
        let HttpsServerImpl: _HttpsServerImpl$$static;
        interface _HttpsServerImpl {
          bind(addr: java.net.InetSocketAddress, backlog: int): void;
          createContext(path: string, handler: com.sun.net.httpserver.HttpHandler): HttpContextImpl;
          createContext(path: string): HttpContextImpl;
          createContext(a0: string): com.sun.net.httpserver.HttpContext;
          createContext(a0: string, a1: com.sun.net.httpserver.HttpHandler): com.sun.net.httpserver.HttpContext;
          getAddress(): java.net.InetSocketAddress;
          getExecutor(): java.util.concurrent.Executor;
          getHttpsConfigurator(): com.sun.net.httpserver.HttpsConfigurator;
          removeContext(path: string): void;
          removeContext(context: com.sun.net.httpserver.HttpContext): void;
          setExecutor(executor: java.util.concurrent.Executor): void;
          setHttpsConfigurator(config: com.sun.net.httpserver.HttpsConfigurator): void;
          start(): void;
          stop(delay: int): void;
          _server: ServerImpl;
        }
        interface HttpsServerImpl extends CombineTypes<[_HttpsServerImpl, com.sun.net.httpserver.HttpsServer]> {}
        interface _LeftOverInputStream$$static extends ClassLike {
          new(t: ExchangeImpl, src: java.io.InputStream): LeftOverInputStream;
        }
        let LeftOverInputStream: _LeftOverInputStream$$static;
        interface _LeftOverInputStream {
          close(): void;
          drain(l: long): boolean;
          isClosed(): boolean;
          isDataBuffered(): boolean;
          isEOF(): boolean;
          read(): int;
          read(b: byte[], off: int, len: int): int;
          _readImpl(a0: byte[], a1: int, a2: int): int;
(a0: byte[], a1: int, a2: int): int;
          _closed: boolean;
          _eof: boolean;
          _one: byte[];
          _server: ServerImpl;
          _t: ExchangeImpl;
        }
        interface LeftOverInputStream extends CombineTypes<[_LeftOverInputStream, java.io.FilterInputStream]> {}
        interface _PlaceholderOutputStream$$static extends ClassLike {
          _new(os: java.io.OutputStream): PlaceholderOutputStream;
        }
        let PlaceholderOutputStream: _PlaceholderOutputStream$$static;
        interface _PlaceholderOutputStream {
          _checkWrap(): void;
          close(): void;
          flush(): void;
          _isWrapped(): boolean;
          _setWrappedStream(os: java.io.OutputStream): void;
          write(b: int): void;
          write(b: byte[]): void;
          write(b: byte[], off: int, len: int): void;
          _wrapped: java.io.OutputStream;
        }
        interface PlaceholderOutputStream extends CombineTypes<[_PlaceholderOutputStream, java.io.OutputStream]> {}
        interface _Request$$static extends ClassLike {
          _BUF_LEN: int;
          _CR: byte;
          _LF: byte;
          _new(rawInputStream: java.io.InputStream, rawout: java.io.OutputStream): Request;
        }
        let Request: _Request$$static;
        interface _Request {
          _consume(c: int): void;
          _headers(): com.sun.net.httpserver.Headers;
          inputStream(): java.io.InputStream;
          outputStream(): java.io.OutputStream;
          readLine(): string;
          requestLine(): string;
          _buf: char[];
          _chan: java.nio.channels.SocketChannel;
          _hdrs: com.sun.net.httpserver.Headers;
          _is: java.io.InputStream;
          _lineBuf: httpserver$stringBuffer;
          _maxReqHeaderSize: int;
          _os: java.io.OutputStream;
          _pos: int;
          _startLine: string;
        }
        interface Request extends CombineTypes<[_Request, java.lang.Object]> {}
        interface _Request$ReadStream$$static extends ClassLike {
          _BUFSIZE: int;
          _readTimeout: long;
          new(server: ServerImpl, chan: java.nio.channels.SocketChannel): Request$ReadStream;
        }
        let Request$ReadStream: _Request$ReadStream$$static;
        interface _Request$ReadStream {
          available(): int;
          close(): void;
          mark(readlimit: int): void;
          markSupported(): boolean;
          read(b: byte[]): int;
          read(): int;
          read(b: byte[], off: int, srclen: int): int;
          reset(): void;
          _chanbuf: java.nio.ByteBuffer;
          _channel: java.nio.channels.SocketChannel;
          _closed: boolean;
          _eof: boolean;
          _markBuf: java.nio.ByteBuffer;
          _marked: boolean;
          _one: byte[];
          _readlimit: int;
          _reset: boolean;
          _server: ServerImpl;
        }
        interface Request$ReadStream extends CombineTypes<[_Request$ReadStream, java.io.InputStream]> {}
        interface _Request$WriteStream$$static extends ClassLike {
          new(server: ServerImpl, channel: java.nio.channels.SocketChannel): Request$WriteStream;
        }
        let Request$WriteStream: _Request$WriteStream$$static;
        interface _Request$WriteStream {
          close(): void;
          write(b: int): void;
          write(b: byte[]): void;
          write(b: byte[], off: int, len: int): void;
          _buf: java.nio.ByteBuffer;
          _channel: java.nio.channels.SocketChannel;
          _closed: boolean;
          _key: java.nio.channels.SelectionKey;
          _one: byte[];
          _server: ServerImpl;
        }
        interface Request$WriteStream extends CombineTypes<[_Request$WriteStream, java.io.OutputStream]> {}
        interface _SSLStreams$$static extends ClassLike {
          _new(server: ServerImpl, sslctx: javax.net.ssl.SSLContext, chan: java.nio.channels.SocketChannel): SSLStreams;
        }
        let SSLStreams: _SSLStreams$$static;
        interface _SSLStreams {
          _allocate(type: SSLStreams$BufType): java.nio.ByteBuffer;
          _allocate(type: SSLStreams$BufType, len: int): java.nio.ByteBuffer;
          _beginHandshake(): void;
          _close(): void;
          _configureEngine(cfg: com.sun.net.httpserver.HttpsConfigurator, addr: java.net.InetSocketAddress): void;
          _doClosure(): void;
          _doHandshake(hs_status: javax.net.ssl.SSLEngineResult$HandshakeStatus): void;
          _getInputStream(): SSLStreams$InputStream;
          _getOutputStream(): SSLStreams$OutputStream;
          _getSSLEngine(): javax.net.ssl.SSLEngine;
          _realloc(b: java.nio.ByteBuffer, flip: boolean, type: SSLStreams$BufType): java.nio.ByteBuffer;
          recvData(dst: java.nio.ByteBuffer): SSLStreams$WrapperResult;
          sendData(src: java.nio.ByteBuffer): SSLStreams$WrapperResult;
          _app_buf_size: int;
          _chan: java.nio.channels.SocketChannel;
          _engine: javax.net.ssl.SSLEngine;
          _handshaking: java.util.concurrent.locks.Lock;
          _is: SSLStreams$InputStream;
          _os: SSLStreams$OutputStream;
          _packet_buf_size: int;
          _server: ServerImpl;
          _sslctx: javax.net.ssl.SSLContext;
          _wrapper: SSLStreams$EngineWrapper;
        }
        interface SSLStreams extends CombineTypes<[_SSLStreams, java.lang.Object]> {}
        interface _SSLStreams$BufType$$static extends ClassLike {
          valueOf(name: string): SSLStreams$BufType;
          values(): SSLStreams$BufType[];
          readonly APPLICATION: SSLStreams$BufType;
          readonly PACKET: SSLStreams$BufType;
        }
        let SSLStreams$BufType: _SSLStreams$BufType$$static;
        interface _SSLStreams$BufType {
        }
        interface SSLStreams$BufType extends CombineTypes<[_SSLStreams$BufType]> {}
        interface _SSLStreams$EngineWrapper$$static extends ClassLike {
          _new(this$0: SSLStreams, chan: java.nio.channels.SocketChannel, engine: javax.net.ssl.SSLEngine): SSLStreams$EngineWrapper;
        }
        let SSLStreams$EngineWrapper: _SSLStreams$EngineWrapper$$static;
        interface _SSLStreams$EngineWrapper {
          _close(): void;
          _recvAndUnwrap(dst: java.nio.ByteBuffer): SSLStreams$WrapperResult;
          _wrapAndSend(src: java.nio.ByteBuffer): SSLStreams$WrapperResult;
          _wrapAndSendX(src: java.nio.ByteBuffer, ignoreClose: boolean): SSLStreams$WrapperResult;
          _chan: java.nio.channels.SocketChannel;
          _closed: boolean;
          _engine: javax.net.ssl.SSLEngine;
          _this$0: SSLStreams;
          _u_remaining: int;
          _unwrapLock: any;
          _unwrap_src: java.nio.ByteBuffer;
          _wrapLock: any;
          _wrap_dst: java.nio.ByteBuffer;
        }
        interface SSLStreams$EngineWrapper extends CombineTypes<[_SSLStreams$EngineWrapper, java.lang.Object]> {}
        interface _SSLStreams$InputStream$$static extends ClassLike {
          _new(this$0: SSLStreams): SSLStreams$InputStream;
        }
        let SSLStreams$InputStream: _SSLStreams$InputStream$$static;
        interface _SSLStreams$InputStream {
          available(): int;
          close(): void;
          markSupported(): boolean;
          read(buf: byte[], off: int, len: int): int;
          read(buf: byte[]): int;
          read(): int;
          reset(): void;
          skip(s: long): long;
          _bbuf: java.nio.ByteBuffer;
          _closed: boolean;
          _eof: boolean;
          _needData: boolean;
          _single: byte[];
          _this$0: SSLStreams;
        }
        interface SSLStreams$InputStream extends CombineTypes<[_SSLStreams$InputStream, java.io.InputStream]> {}
        interface _SSLStreams$OutputStream$$static extends ClassLike {
          _new(this$0: SSLStreams): SSLStreams$OutputStream;
        }
        let SSLStreams$OutputStream: _SSLStreams$OutputStream$$static;
        interface _SSLStreams$OutputStream {
          close(): void;
          flush(): void;
          write(b: int): void;
          write(b: byte[]): void;
          write(b: byte[], off: int, len: int): void;
          _buf: java.nio.ByteBuffer;
          _closed: boolean;
          _single: byte[];
          _this$0: SSLStreams;
        }
        interface SSLStreams$OutputStream extends CombineTypes<[_SSLStreams$OutputStream, java.io.OutputStream]> {}
        interface _SSLStreams$Parameters$$static extends ClassLike {
          _new(this$0: SSLStreams, cfg: com.sun.net.httpserver.HttpsConfigurator, addr: java.net.InetSocketAddress): SSLStreams$Parameters;
        }
        let SSLStreams$Parameters: _SSLStreams$Parameters$$static;
        interface _SSLStreams$Parameters {
          getClientAddress(): java.net.InetSocketAddress;
          getHttpsConfigurator(): com.sun.net.httpserver.HttpsConfigurator;
          _getSSLParameters(): javax.net.ssl.SSLParameters;
          setSSLParameters(p: javax.net.ssl.SSLParameters): void;
          _addr: java.net.InetSocketAddress;
          _cfg: com.sun.net.httpserver.HttpsConfigurator;
          _params: javax.net.ssl.SSLParameters;
        }
        interface SSLStreams$Parameters extends CombineTypes<[_SSLStreams$Parameters, com.sun.net.httpserver.HttpsParameters]> {}
        interface _SSLStreams$WrapperResult$$static extends ClassLike {
          _new(this$0: SSLStreams): SSLStreams$WrapperResult;
        }
        let SSLStreams$WrapperResult: _SSLStreams$WrapperResult$$static;
        interface _SSLStreams$WrapperResult {
          _buf: java.nio.ByteBuffer;
          _result: javax.net.ssl.SSLEngineResult;
        }
        interface SSLStreams$WrapperResult extends CombineTypes<[_SSLStreams$WrapperResult, java.lang.Object]> {}
        interface _ServerConfig$$static extends ClassLike {
          _checkLegacyProperties(logger: java.lang.System$Logger): void;
          _debugEnabled(): boolean;
          _getDrainAmount(): long;
          _getIdleIntervalMillis(): long;
          _getIdleTimerScheduleMillis(): long;
          _getMaxConnections(): int;
          _getMaxIdleConnections(): int;
          _getMaxReqHeaderSize(): int;
          _getMaxReqHeaders(): int;
          _getMaxReqTime(): long;
          _getMaxRspTime(): long;
          _getReqRspTimerScheduleMillis(): long;
          _noDelay(): boolean;
          _DEFAULT_DRAIN_AMOUNT: long;
          _DEFAULT_IDLE_INTERVAL_IN_SECS: long;
          _DEFAULT_IDLE_TIMER_SCHEDULE_MILLIS: int;
          _DEFAULT_MAX_CONNECTIONS: int;
          _DEFAULT_MAX_IDLE_CONNECTIONS: int;
          _DEFAULT_MAX_REQ_HEADERS: int;
          _DEFAULT_MAX_REQ_HEADER_SIZE: int;
          _DEFAULT_MAX_REQ_TIME: long;
          _DEFAULT_MAX_RSP_TIME: long;
          _DEFAULT_REQ_RSP_TIMER_TASK_SCHEDULE_MILLIS: long;
          _debug: boolean;
          _drainAmount: long;
          _idleIntervalMillis: long;
          _idleTimerScheduleMillis: long;
          _maxConnections: int;
          _maxIdleConnections: int;
          _maxReqHeaders: int;
          _maxReqHeadersSize: int;
          _maxReqTime: long;
          _maxRspTime: long;
          _noDelay: boolean;
          _reqRspTimerScheduleMillis: long;
          _new(): ServerConfig;
        }
        let ServerConfig: _ServerConfig$$static;
        interface _ServerConfig {
        }
        interface ServerConfig extends CombineTypes<[_ServerConfig, java.lang.Object]> {}
        interface _ServerImpl$$static extends ClassLike {
          _dprint(s: string): void;
          _dprint(e: java.lang.Exception): void;
          _getTimeMillis(secs: long): long;
          _IDLE_INTERVAL: long;
          _IDLE_TIMER_TASK_SCHEDULE: long;
          _MAX_CONNECTIONS: int;
          _MAX_IDLE_CONNECTIONS: int;
          _MAX_REQ_TIME: long;
          _MAX_RSP_TIME: long;
          _NEWLY_ACCEPTED_CONN_IDLE_INTERVAL: long;
          _REQ_RSP_TIMER_SCHEDULE: long;
          _debug: boolean;
          _reqRspTimeoutEnabled: boolean;
          _new(wrapper: com.sun.net.httpserver.HttpServer, protocol: string, addr: java.net.InetSocketAddress, backlog: int): ServerImpl;
        }
        let ServerImpl: _ServerImpl$$static;
        interface _ServerImpl {
          _addEvent(r: Event): void;
          bind(addr: java.net.InetSocketAddress, backlog: int): void;
          _closeConnection(conn: HttpConnection): void;
          createContext(path: string, handler: com.sun.net.httpserver.HttpHandler): HttpContextImpl;
          createContext(path: string): HttpContextImpl;
          _delay(): void;
          _endExchange(): int;
          getAddress(): java.net.InetSocketAddress;
          getExecutor(): java.util.concurrent.Executor;
          getHttpsConfigurator(): com.sun.net.httpserver.HttpsConfigurator;
          _getLogger(): java.lang.System$Logger;
          _getWrapper(): com.sun.net.httpserver.HttpServer;
          isFinishing(): boolean;
          _logReply(code: int, requestStr: string, text: string): void;
          _markIdle(c: HttpConnection): void;
          _markNewlyAccepted(c: HttpConnection): void;
          removeContext(path: string): void;
          removeContext(context: com.sun.net.httpserver.HttpContext): void;
          _requestCompleted(c: HttpConnection): void;
          _requestStarted(c: HttpConnection): void;
          _responseCompleted(c: HttpConnection): void;
          setExecutor(executor: java.util.concurrent.Executor): void;
          setHttpsConfigurator(config: com.sun.net.httpserver.HttpsConfigurator): void;
          start(): void;
          _startExchange(): void;
          stop(delay: int): void;
          _address: java.net.InetSocketAddress;
          _allConnections: java.util.Set<HttpConnection>;
          _bound: boolean;
          _contexts: ContextList;
          _dispatcher: ServerImpl$Dispatcher;
          _dispatcherThread: java.lang.Thread;
          _events: java.util.List<Event>;
          _exchangeCount: int;
          _executor: java.util.concurrent.Executor;
          _finished: boolean;
          _https: boolean;
          _httpsConfig: com.sun.net.httpserver.HttpsConfigurator;
          _idleConnections: java.util.Set<HttpConnection>;
          _listenerKey: java.nio.channels.SelectionKey;
          _logger: java.lang.System$Logger;
          _lolock: any;
          _newlyAcceptedConnections: java.util.Set<HttpConnection>;
          _protocol: string;
          _reqConnections: java.util.Set<HttpConnection>;
          _rspConnections: java.util.Set<HttpConnection>;
          _schan: java.nio.channels.ServerSocketChannel;
          _selector: java.nio.channels.Selector;
          _sslContext: javax.net.ssl.SSLContext;
          _started: boolean;
          _terminating: boolean;
          _timer: java.util.Timer;
          _timer1: java.util.Timer;
          _wrapper: com.sun.net.httpserver.HttpServer;
        }
        interface ServerImpl extends CombineTypes<[_ServerImpl, java.lang.Object]> {}
        interface _ServerImpl$DefaultExecutor$$static extends ClassLike {
        }
        let ServerImpl$DefaultExecutor: _ServerImpl$DefaultExecutor$$static;
        interface _ServerImpl$DefaultExecutor {
          execute(task: java.lang.Runnable): void;
        }
        interface ServerImpl$DefaultExecutor extends CombineTypes<[_ServerImpl$DefaultExecutor, java.util.concurrent.Executor, java.lang.Object]> {}
        interface _ServerImpl$Dispatcher$$static extends ClassLike {
          _new(this$0: ServerImpl): ServerImpl$Dispatcher;
        }
        let ServerImpl$Dispatcher: _ServerImpl$Dispatcher$$static;
        interface _ServerImpl$Dispatcher {
          handle(chan: java.nio.channels.SocketChannel, conn: HttpConnection): void;
          _handleEvent(r: Event): void;
          _handleException(key: java.nio.channels.SelectionKey, e: java.lang.Exception): void;
          _reRegister(c: HttpConnection): void;
          run(): void;
          _connsToRegister: java.util.ArrayList<HttpConnection>;
          _this$0: ServerImpl;
        }
        interface ServerImpl$Dispatcher extends CombineTypes<[_ServerImpl$Dispatcher, java.lang.Object, java.lang.Runnable]> {}
        interface _ServerImpl$Exchange$$static extends ClassLike {
          _new(this$0: ServerImpl, chan: java.nio.channels.SocketChannel, protocol: string, conn: HttpConnection): ServerImpl$Exchange;
        }
        let ServerImpl$Exchange: _ServerImpl$Exchange$$static;
        interface _ServerImpl$Exchange {
          _reject(code: int, requestStr: string, message: string): void;
          run(): void;
          _sendReply(code: int, closeNow: boolean, text: string): void;
          _chan: java.nio.channels.SocketChannel;
          _connection: HttpConnection;
          _context: HttpContextImpl;
          _ctx: HttpContextImpl;
          _protocol: string;
          _rawin: java.io.InputStream;
          _rawout: java.io.OutputStream;
          _rejected: boolean;
          _this$0: ServerImpl;
          _tx: ExchangeImpl;
        }
        interface ServerImpl$Exchange extends CombineTypes<[_ServerImpl$Exchange, java.lang.Object, java.lang.Runnable]> {}
        interface _ServerImpl$Exchange$LinkHandler$$static extends ClassLike {
          _new(this$1: ServerImpl$Exchange, nextChain: com.sun.net.httpserver.Filter$Chain): ServerImpl$Exchange$LinkHandler;
        }
        let ServerImpl$Exchange$LinkHandler: _ServerImpl$Exchange$LinkHandler$$static;
        interface _ServerImpl$Exchange$LinkHandler {
          handle(exchange: com.sun.net.httpserver.HttpExchange): void;
          _nextChain: com.sun.net.httpserver.Filter$Chain;
        }
        interface ServerImpl$Exchange$LinkHandler extends CombineTypes<[_ServerImpl$Exchange$LinkHandler, com.sun.net.httpserver.HttpHandler, java.lang.Object]> {}
        interface _ServerImpl$IdleTimeoutTask$$static extends ClassLike {
          _new(this$0: ServerImpl): ServerImpl$IdleTimeoutTask;
        }
        let ServerImpl$IdleTimeoutTask: _ServerImpl$IdleTimeoutTask$$static;
        interface _ServerImpl$IdleTimeoutTask {
          _closeConnections(connections: java.util.Set<HttpConnection>, idleInterval: long): void;
          run(): void;
          _this$0: ServerImpl;
        }
        interface ServerImpl$IdleTimeoutTask extends CombineTypes<[_ServerImpl$IdleTimeoutTask, java.util.TimerTask]> {}
        interface _ServerImpl$ReqRspTimeoutTask$$static extends ClassLike {
          _new(this$0: ServerImpl): ServerImpl$ReqRspTimeoutTask;
        }
        let ServerImpl$ReqRspTimeoutTask: _ServerImpl$ReqRspTimeoutTask$$static;
        interface _ServerImpl$ReqRspTimeoutTask {
          run(): void;
          _this$0: ServerImpl;
        }
        interface ServerImpl$ReqRspTimeoutTask extends CombineTypes<[_ServerImpl$ReqRspTimeoutTask, java.util.TimerTask]> {}
        interface _StreamClosedException$$static extends ClassLike {
          _serialVersionUID: long;
          _new(): StreamClosedException;
        }
        let StreamClosedException: _StreamClosedException$$static;
        interface _StreamClosedException {
        }
        interface StreamClosedException extends CombineTypes<[_StreamClosedException, java.io.IOException]> {}
        interface _UndefLengthOutputStream$$static extends ClassLike {
          _new(t: ExchangeImpl, src: java.io.OutputStream): UndefLengthOutputStream;
        }
        let UndefLengthOutputStream: _UndefLengthOutputStream$$static;
        interface _UndefLengthOutputStream {
          close(): void;
          write(b: int): void;
          write(b: byte[], off: int, len: int): void;
          _closed: boolean;
          _t: ExchangeImpl;
        }
        interface UndefLengthOutputStream extends CombineTypes<[_UndefLengthOutputStream, java.io.FilterOutputStream]> {}
        interface _UnmodifiableHeaders$$static extends ClassLike {
          new(headers: com.sun.net.httpserver.Headers): UnmodifiableHeaders;
        }
        let UnmodifiableHeaders: _UnmodifiableHeaders$$static;
        interface _UnmodifiableHeaders {
          add(key: string, value: string): void;
          clear(): void;
          containsKey(key: any): boolean;
          containsValue(value: any): boolean;
          entrySet(): java.util.Set<java.util.Map$Entry<string,java.util.List<string>>>;
          equals(o: any): boolean;
          get(key: any): java.util.List<string>;
          get(a0: any): any;
          getFirst(key: string): string;
          hashCode(): int;
          isEmpty(): boolean;
          keySet(): java.util.Set<string>;
          put(key: string, value: java.util.List<string>): java.util.List<string>;
          put(a0: any, a1: any): any;
          putAll(t: java.util.Map<string,java.util.List<string>>): void;
          remove(key: any): java.util.List<string>;
          remove(a0: any): any;
          replace(key: string, value: java.util.List<string>): java.util.List<string>;
          replace(key: string, oldValue: java.util.List<string>, newValue: java.util.List<string>): boolean;
          replace(a0: any, a1: any): any;
          replace(a0: any, a1: any, a2: any): boolean;
          replaceAll(_function: java.util.function.BiFunction<string,java.util.List<string>,java.util.List<string>>): void;
          set(key: string, value: string): void;
          size(): int;
          values(): java.util.Collection<java.util.List<string>>;
          _headers: com.sun.net.httpserver.Headers;
          _map: java.util.Map<string,java.util.List<string>>;
        }
        interface UnmodifiableHeaders extends CombineTypes<[_UnmodifiableHeaders, com.sun.net.httpserver.Headers]> {}
        interface _Utils$$static extends ClassLike {
          isQuotedStringContent(token: string): boolean;
          isValidName(token: string): boolean;
          _QDTEXT: boolean[];
          _QUOTED_PAIR: boolean[];
          _TCHAR: boolean[];
          new(): Utils;
        }
        let Utils: _Utils$$static;
        interface _Utils {
        }
        interface Utils extends CombineTypes<[_Utils, java.lang.Object]> {}
        interface _WriteFinishedEvent$$static extends ClassLike {
          _new(t: ExchangeImpl): WriteFinishedEvent;
        }
        let WriteFinishedEvent: _WriteFinishedEvent$$static;
        interface _WriteFinishedEvent {
        }
        interface WriteFinishedEvent extends CombineTypes<[_WriteFinishedEvent, sun.net.httpserver.Event]> {}
      }
    }
  }
}
