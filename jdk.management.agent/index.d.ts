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
    module internal {
      module agent {
        module resources {
          interface _agent$$static extends ClassLike {
            new(): agent;
          }
          let agent: _agent$$static;
          interface _agent {
            _getContents(): any[][];
          }
          interface agent extends CombineTypes<[_agent, java.util.ListResourceBundle]> {}
          interface _agent_de$$static extends ClassLike {
            new(): agent_de;
          }
          let agent_de: _agent_de$$static;
          interface _agent_de {
            _getContents(): any[][];
          }
          interface agent_de extends CombineTypes<[_agent_de, java.util.ListResourceBundle]> {}
          interface _agent_es$$static extends ClassLike {
            new(): agent_es;
          }
          let agent_es: _agent_es$$static;
          interface _agent_es {
            _getContents(): any[][];
          }
          interface agent_es extends CombineTypes<[_agent_es, java.util.ListResourceBundle]> {}
          interface _agent_fr$$static extends ClassLike {
            new(): agent_fr;
          }
          let agent_fr: _agent_fr$$static;
          interface _agent_fr {
            _getContents(): any[][];
          }
          interface agent_fr extends CombineTypes<[_agent_fr, java.util.ListResourceBundle]> {}
          interface _agent_it$$static extends ClassLike {
            new(): agent_it;
          }
          let agent_it: _agent_it$$static;
          interface _agent_it {
            _getContents(): any[][];
          }
          interface agent_it extends CombineTypes<[_agent_it, java.util.ListResourceBundle]> {}
          interface _agent_ja$$static extends ClassLike {
            new(): agent_ja;
          }
          let agent_ja: _agent_ja$$static;
          interface _agent_ja {
            _getContents(): any[][];
          }
          interface agent_ja extends CombineTypes<[_agent_ja, java.util.ListResourceBundle]> {}
          interface _agent_ko$$static extends ClassLike {
            new(): agent_ko;
          }
          let agent_ko: _agent_ko$$static;
          interface _agent_ko {
            _getContents(): any[][];
          }
          interface agent_ko extends CombineTypes<[_agent_ko, java.util.ListResourceBundle]> {}
          interface _agent_pt_BR$$static extends ClassLike {
            new(): agent_pt_BR;
          }
          let agent_pt_BR: _agent_pt_BR$$static;
          interface _agent_pt_BR {
            _getContents(): any[][];
          }
          interface agent_pt_BR extends CombineTypes<[_agent_pt_BR, java.util.ListResourceBundle]> {}
          interface _agent_sv$$static extends ClassLike {
            new(): agent_sv;
          }
          let agent_sv: _agent_sv$$static;
          interface _agent_sv {
            _getContents(): any[][];
          }
          interface agent_sv extends CombineTypes<[_agent_sv, java.util.ListResourceBundle]> {}
          interface _agent_zh_CN$$static extends ClassLike {
            new(): agent_zh_CN;
          }
          let agent_zh_CN: _agent_zh_CN$$static;
          interface _agent_zh_CN {
            _getContents(): any[][];
          }
          interface agent_zh_CN extends CombineTypes<[_agent_zh_CN, java.util.ListResourceBundle]> {}
          interface _agent_zh_HK$$static extends ClassLike {
            new(): agent_zh_HK;
          }
          let agent_zh_HK: _agent_zh_HK$$static;
          interface _agent_zh_HK {
            _getContents(): any[][];
          }
          interface agent_zh_HK extends CombineTypes<[_agent_zh_HK, java.util.ListResourceBundle]> {}
          interface _agent_zh_TW$$static extends ClassLike {
            new(): agent_zh_TW;
          }
          let agent_zh_TW: _agent_zh_TW$$static;
          interface _agent_zh_TW {
            _getContents(): any[][];
          }
          interface agent_zh_TW extends CombineTypes<[_agent_zh_TW, java.util.ListResourceBundle]> {}
        }
        interface _Agent$$static extends ClassLike {
          agentmain(args: string): void;
          error(key: string): void;
          error(key: string, message: string): void;
          error(e: java.lang.Exception): void;
          error(e: AgentConfigurationError): void;
          _getManagementAgentStatus(): string;
          getManagementProperties(): java.util.Properties;
          getText(key: string): string;
          getText(key: string, args: string[]): string;
          getText(key: string, ...args: string[]): string;
          _initResource(): void;
          loadManagementProperties(): java.util.Properties;
          _parseString(args: string): java.util.Properties;
          premain(args: string): void;
          _readConfiguration(fname: string, p: java.util.Properties): void;
          _startAgent(props: java.util.Properties): void;
          startAgent(): void;
          _startDiscoveryService(props: java.util.Properties): void;
          _startLocalManagementAgent(): void;
          _startRemoteManagementAgent(args: string): void;
          _stopRemoteManagementAgent(): void;
          warning(key: string, message: string): void;
          _CONFIG_FILE: string;
          _ENABLE_THREAD_CONTENTION_MONITORING: string;
          _JDP_DEFAULT_ADDRESS: string;
          _JDP_DEFAULT_PORT: int;
          _JMXREMOTE: string;
          _JMXREMOTE_PORT: string;
          _LOCAL_CONNECTOR_ADDRESS_PROP: string;
          _RMI_PORT: string;
          _configProps: java.util.Properties;
          _jmxServer: javax.management.remote.JMXConnectorServer;
          _messageRB: java.util.ResourceBundle;
          _mgmtProps: java.util.Properties;
          new(): Agent;
        }
        let Agent: _Agent$$static;
        interface _Agent {
        }
        interface Agent extends CombineTypes<[_Agent, java.lang.Object]> {}
        interface _Agent$StatusCollector$$static extends ClassLike {
          _isManagementProp(pName: any): boolean;
          _preprocess<T, V>(f: java.util.function.Function<T,V>, p: java.util.function.Predicate<V>): java.util.function.Predicate<T>;
          _DEFAULT_PROPS: java.util.Map<string,string>;
        }
        let Agent$StatusCollector: _Agent$StatusCollector$$static;
        interface _Agent$StatusCollector {
          _addAgentStatus(a0: boolean): void;
          _addConfigProp(a0: java.util.Map$Entry<any,any>): void;
          _addConfigProperties(): void;
          _addConnection(remote: boolean, u: javax.management.remote.JMXServiceURL): void;
          _addConnectionDetails(a0: javax.management.remote.JMXServiceURL): void;
          _appendConfigPropsFooter(): void;
          _appendConfigPropsHeader(): void;
          _appendConnectionFooter(a0: boolean): void;
          _appendConnectionHeader(a0: boolean): void;
          _appendConnections(localConnAddr: string): void;
          _appendConnectionsFooter(): void;
          _appendConnectionsHeader(): void;
          collect(): string;
          _sb: agent$stringBuilder;
        }
        interface Agent$StatusCollector extends CombineTypes<[_Agent$StatusCollector, java.lang.Object]> {}
        interface _Agent$TextStatusCollector$$static extends ClassLike {
        }
        let Agent$TextStatusCollector: _Agent$TextStatusCollector$$static;
        interface _Agent$TextStatusCollector {
          _addAgentStatus(enabled: boolean): void;
          _addConfigProp(prop: java.util.Map$Entry<any,any>): void;
          _addConnectionDetails(u: javax.management.remote.JMXServiceURL): void;
          _appendConfigPropsFooter(): void;
          _appendConfigPropsHeader(): void;
          _appendConnectionFooter(remote: boolean): void;
          _appendConnectionHeader(remote: boolean): void;
          _appendConnectionsFooter(): void;
          _appendConnectionsHeader(): void;
        }
        interface Agent$TextStatusCollector extends CombineTypes<[_Agent$TextStatusCollector, jdk.internal.agent.Agent$StatusCollector]> {}
        interface _AgentConfigurationError$$static extends ClassLike {
          readonly ACCESS_FILE_NOT_FOUND: string;
          readonly ACCESS_FILE_NOT_READABLE: string;
          readonly ACCESS_FILE_NOT_SET: string;
          readonly ACCESS_FILE_READ_FAILED: string;
          readonly AGENT_CLASS_ACCESS_DENIED: string;
          readonly AGENT_CLASS_FAILED: string;
          readonly AGENT_CLASS_INVALID: string;
          readonly AGENT_CLASS_NOT_FOUND: string;
          readonly AGENT_CLASS_PREMAIN_NOT_FOUND: string;
          readonly AGENT_EXCEPTION: string;
          readonly CONFIG_FILE_ACCESS_DENIED: string;
          readonly CONFIG_FILE_CLOSE_FAILED: string;
          readonly CONFIG_FILE_NOT_FOUND: string;
          readonly CONFIG_FILE_OPEN_FAILED: string;
          readonly CONNECTOR_SERVER_IO_ERROR: string;
          readonly EXPORT_ADDRESS_FAILED: string;
          readonly FILE_ACCESS_NOT_RESTRICTED: string;
          readonly FILE_NOT_FOUND: string;
          readonly FILE_NOT_READABLE: string;
          readonly FILE_NOT_SET: string;
          readonly FILE_READ_FAILED: string;
          readonly INVALID_JMXREMOTE_LOCAL_PORT: string;
          readonly INVALID_JMXREMOTE_PORT: string;
          readonly INVALID_JMXREMOTE_RMI_PORT: string;
          readonly INVALID_OPTION: string;
          readonly INVALID_STATE: string;
          readonly PASSWORD_FILE_ACCESS_NOT_RESTRICTED: string;
          readonly PASSWORD_FILE_NOT_FOUND: string;
          readonly PASSWORD_FILE_NOT_READABLE: string;
          readonly PASSWORD_FILE_NOT_SET: string;
          readonly PASSWORD_FILE_READ_FAILED: string;
          _serialVersionUID: long;
          new(error: string): AgentConfigurationError;
          new(error: string, cause: java.lang.Throwable): AgentConfigurationError;
          new(error: string, params: string[]): AgentConfigurationError;
          new(error: string, ...params: string[]): AgentConfigurationError;
          new(error: string, cause: java.lang.Throwable, params: string[]): AgentConfigurationError;
          new(error: string, cause: java.lang.Throwable, ...params: string[]): AgentConfigurationError;
        }
        let AgentConfigurationError: _AgentConfigurationError$$static;
        interface _AgentConfigurationError {
          getError(): string;
          getParams(): string[];
          _error: string;
          _params: string[];
        }
        interface AgentConfigurationError extends CombineTypes<[_AgentConfigurationError, java.lang.Error]> {}
        interface _ConnectorAddressLink$$static extends ClassLike {
          export(address: string): void;
          exportRemote(properties: java.util.Map<string,string>): void;
          importFrom(vmid: int): string;
          importRemoteFrom(vmid: int): java.util.Map<string,string>;
          _unexport(ph: ConnectorAddressLink$PerfHandle): void;
          unexportRemote(): void;
          _CONNECTOR_ADDRESS_COUNTER: string;
          _REMOTE_CONNECTOR_COUNTER_PREFIX: string;
          _REMOTE_CONNECTOR_STATE_COUNTER: string;
          _counter: java.util.concurrent.atomic.AtomicInteger;
          _remotePerfHandle: ConnectorAddressLink$PerfHandle;
          new(): ConnectorAddressLink;
        }
        let ConnectorAddressLink: _ConnectorAddressLink$$static;
        interface _ConnectorAddressLink {
        }
        interface ConnectorAddressLink extends CombineTypes<[_ConnectorAddressLink, java.lang.Object]> {}
        interface _ConnectorAddressLink$PerfHandle$$static extends ClassLike {
        }
        let ConnectorAddressLink$PerfHandle: _ConnectorAddressLink$PerfHandle$$static;
        interface _ConnectorAddressLink$PerfHandle {
          _putLong(l: long): void;
          _bb: java.nio.ByteBuffer;
        }
        interface ConnectorAddressLink$PerfHandle extends CombineTypes<[_ConnectorAddressLink$PerfHandle, java.lang.Object]> {}
        interface _FileSystem$$static extends ClassLike {
          open(): FileSystem;
          _fs: FileSystem;
          _lock: any;
          _new(): FileSystem;
        }
        let FileSystem: _FileSystem$$static;
        interface _FileSystem {
          isAccessUserOnly(a0: java.io.File): boolean;
          supportsFileSecurity(a0: java.io.File): boolean;
        }
        interface FileSystem extends CombineTypes<[_FileSystem, java.lang.Object]> {}
        interface _FileSystemImpl$$static extends ClassLike {
          _init0(): void;
          _isAccessUserOnly0(a0: string): boolean;
          _isSecuritySupported0(a0: string): boolean;
          new(): FileSystemImpl;
        }
        let FileSystemImpl: _FileSystemImpl$$static;
        interface _FileSystemImpl {
          isAccessUserOnly(f: java.io.File): boolean;
          supportsFileSecurity(f: java.io.File): boolean;
        }
        interface FileSystemImpl extends CombineTypes<[_FileSystemImpl, jdk.internal.agent.FileSystem]> {}
      }
    }
  }
  module sun {
    module management {
      module jdp {
        interface _JdpBroadcaster$$static extends ClassLike {
          new(address: java.net.InetAddress, srcAddress: java.net.InetAddress, port: int, ttl: int): JdpBroadcaster;
          new(address: java.net.InetAddress, port: int, ttl: int): JdpBroadcaster;
        }
        let JdpBroadcaster: _JdpBroadcaster$$static;
        interface _JdpBroadcaster {
          sendPacket(packet: JdpPacket): void;
          shutdown(): void;
          _addr: java.net.InetAddress;
          _channel: java.nio.channels.DatagramChannel;
          _port: int;
        }
        interface JdpBroadcaster extends CombineTypes<[_JdpBroadcaster, java.lang.Object]> {}
        interface _JdpController$$static extends ClassLike {
          _getInetAddress(val: string, dflt: java.net.InetAddress, msg: string): java.net.InetAddress;
          _getInteger(val: string, dflt: int, msg: string): int;
          _getProcessId(): long;
          startDiscoveryService(address: java.net.InetAddress, port: int, instanceName: string, url: string): void;
          stopDiscoveryService(): void;
          _controller: JdpController$JDPControllerRunner;
        }
        let JdpController: _JdpController$$static;
        interface _JdpController {
        }
        interface JdpController extends CombineTypes<[_JdpController, java.lang.Object]> {}
        interface _JdpController$JDPControllerRunner$$static extends ClassLike {
        }
        let JdpController$JDPControllerRunner: _JdpController$JDPControllerRunner$$static;
        interface _JdpController$JDPControllerRunner {
          run(): void;
          stop(): void;
          _bcast: JdpBroadcaster;
          _packet: JdpJmxPacket;
          _pause: int;
          _shutdown: boolean;
        }
        interface JdpController$JDPControllerRunner extends CombineTypes<[_JdpController$JDPControllerRunner, java.lang.Object, java.lang.Runnable]> {}
        interface _JdpException$$static extends ClassLike {
          _serialVersionUID: long;
          new(msg: string): JdpException;
        }
        let JdpException: _JdpException$$static;
        interface _JdpException {
        }
        interface JdpException extends CombineTypes<[_JdpException, java.lang.Exception]> {}
        interface _JdpGenericPacket$$static extends ClassLike {
          checkMagic(magic: int): void;
          checkVersion(version: short): void;
          getMagic(): int;
          getVersion(): short;
          _MAGIC: int;
          _PROTOCOL_VERSION: short;
          _new(): JdpGenericPacket;
        }
        let JdpGenericPacket: _JdpGenericPacket$$static;
        interface _JdpGenericPacket {
        }
        interface JdpGenericPacket extends CombineTypes<[_JdpGenericPacket, sun.management.jdp.JdpPacket, java.lang.Object]> {}
        interface _JdpJmxPacket$$static extends ClassLike {
          readonly BROADCAST_INTERVAL_KEY: string;
          readonly INSTANCE_NAME_KEY: string;
          readonly JMX_SERVICE_URL_KEY: string;
          readonly MAIN_CLASS_KEY: string;
          readonly PROCESS_ID_KEY: string;
          readonly RMI_HOSTNAME_KEY: string;
          readonly UUID_KEY: string;
          new(id: java.util.UUID, jmxServiceUrl: string): JdpJmxPacket;
          new(data: byte[]): JdpJmxPacket;
        }
        let JdpJmxPacket: _JdpJmxPacket$$static;
        interface _JdpJmxPacket {
          equals(o: any): boolean;
          getBroadcastInterval(): string;
          getId(): java.util.UUID;
          getInstanceName(): string;
          getJmxServiceUrl(): string;
          getMainClass(): string;
          getPacketData(): byte[];
          getProcessId(): string;
          getRmiHostname(): string;
          hashCode(): int;
          setBroadcastInterval(broadcastInterval: string): void;
          setInstanceName(instanceName: string): void;
          setMainClass(mainClass: string): void;
          setProcessId(processId: string): void;
          setRmiHostname(rmiHostname: string): void;
          _broadcastInterval: string;
          _id: java.util.UUID;
          _instanceName: string;
          _jmxServiceUrl: string;
          _mainClass: string;
          _processId: string;
          _rmiHostname: string;
        }
        interface JdpJmxPacket extends CombineTypes<[_JdpJmxPacket, sun.management.jdp.JdpPacket, sun.management.jdp.JdpGenericPacket]> {}
        interface _JdpPacket$$static extends ClassLike {
        }
        let JdpPacket: _JdpPacket$$static;
        interface _JdpPacket {
          getPacketData(): byte[];
(): byte[];
        }
        interface JdpPacket extends CombineTypes<[_JdpPacket, java.lang.Object]> {}
        interface _JdpPacketReader$$static extends ClassLike {
          new(packet: byte[]): JdpPacketReader;
        }
        let JdpPacketReader: _JdpPacketReader$$static;
        interface _JdpPacketReader {
          getDiscoveryDataAsMap(): java.util.Map<string,string>;
          getEntry(): string;
          _pkt: java.io.DataInputStream;
          _pmap: java.util.Map<string,string>;
        }
        interface JdpPacketReader extends CombineTypes<[_JdpPacketReader, java.lang.Object]> {}
        interface _JdpPacketWriter$$static extends ClassLike {
          new(): JdpPacketWriter;
        }
        let JdpPacketWriter: _JdpPacketWriter$$static;
        interface _JdpPacketWriter {
          addEntry(entry: string): void;
          addEntry(key: string, val: string): void;
          getPacketBytes(): byte[];
          _baos: java.io.ByteArrayOutputStream;
          _pkt: java.io.DataOutputStream;
        }
        interface JdpPacketWriter extends CombineTypes<[_JdpPacketWriter, java.lang.Object]> {}
      }
      module jmxremote {
        interface _ConnectorBootstrap$$static extends ClassLike {
          _checkAccessFile(accessFileName: string): void;
          _checkPasswordFile(passwordFileName: string): void;
          _checkRestrictedFile(restrictedFileName: string): void;
          _config(func: string, msg: string): void;
          _config(func: string, t: java.lang.Throwable): void;
          _config(func: string, msg: string, t: java.lang.Throwable): void;
          _createSslRMIServerSocketFactory(sslConfigFileName: string, enabledCipherSuites: string[], enabledProtocols: string[], sslNeedClientAuth: boolean, bindAddress: string): javax.rmi.ssl.SslRMIServerSocketFactory;
          _exportMBeanServer(mbs: javax.management.MBeanServer, port: int, rmiPort: int, useSsl: boolean, useRegistrySsl: boolean, sslConfigFileName: string, enabledCipherSuites: string[], enabledProtocols: string[], sslNeedClientAuth: boolean, useAuthentication: boolean, loginConfigName: string, passwordFileName: string, shouldHashPasswords: boolean, accessFileName: string, bindAddress: string, jmxRmiFilter: string): ConnectorBootstrap$JMXConnectorServerData;
          _getDefaultFileName(basename: string): string;
          initialize(): javax.management.remote.JMXConnectorServer;
          initialize(portStr: string, props: java.util.Properties): javax.management.remote.JMXConnectorServer;
          startLocalConnectorServer(): javax.management.remote.JMXConnectorServer;
          startRemoteConnectorServer(portStr: string, props: java.util.Properties): javax.management.remote.JMXConnectorServer;
          unexportRegistry(): void;
          _logger: java.lang.System$Logger;
          _registry: java.rmi.registry.Registry;
        }
        let ConnectorBootstrap: _ConnectorBootstrap$$static;
        interface _ConnectorBootstrap {
        }
        interface ConnectorBootstrap extends CombineTypes<[_ConnectorBootstrap, java.lang.Object]> {}
        interface _ConnectorBootstrap$AccessFileCheckerAuthenticator$$static extends ClassLike {
          _propertiesFromFile(fname: string): java.util.Properties;
          new(env: java.util.Map<string,any>): ConnectorBootstrap$AccessFileCheckerAuthenticator;
        }
        let ConnectorBootstrap$AccessFileCheckerAuthenticator: _ConnectorBootstrap$AccessFileCheckerAuthenticator$$static;
        interface _ConnectorBootstrap$AccessFileCheckerAuthenticator {
          authenticate(credentials: any): javax.security.auth.Subject;
          _checkAccessFileEntries(subject: javax.security.auth.Subject): void;
          _accessFile: string;
          _environment: java.util.Map<string,any>;
          _properties: java.util.Properties;
        }
        interface ConnectorBootstrap$AccessFileCheckerAuthenticator extends CombineTypes<[_ConnectorBootstrap$AccessFileCheckerAuthenticator, java.lang.Object, javax.management.remote.JMXAuthenticator]> {}
        interface _ConnectorBootstrap$DefaultValues$$static extends ClassLike {
          readonly ACCESS_FILE_NAME: string;
          readonly CONFIG_FILE_NAME: string;
          readonly HASH_PASSWORDS: string;
          readonly PASSWORD_FILE_NAME: string;
          readonly PORT: string;
          readonly SSL_NEED_CLIENT_AUTH: string;
          readonly USE_AUTHENTICATION: string;
          readonly USE_LOCAL_ONLY: string;
          readonly USE_REGISTRY_SSL: string;
          readonly USE_SSL: string;
        }
        let ConnectorBootstrap$DefaultValues: _ConnectorBootstrap$DefaultValues$$static;
        interface _ConnectorBootstrap$DefaultValues {
        }
        interface ConnectorBootstrap$DefaultValues extends CombineTypes<[_ConnectorBootstrap$DefaultValues, java.lang.Object]> {}
        interface _ConnectorBootstrap$HostAwareSocketFactory$$static extends ClassLike {
        }
        let ConnectorBootstrap$HostAwareSocketFactory: _ConnectorBootstrap$HostAwareSocketFactory$$static;
        interface _ConnectorBootstrap$HostAwareSocketFactory {
          createServerSocket(port: int): java.net.ServerSocket;
          _bindAddress: string;
        }
        interface ConnectorBootstrap$HostAwareSocketFactory extends CombineTypes<[_ConnectorBootstrap$HostAwareSocketFactory, java.lang.Object, java.rmi.server.RMIServerSocketFactory]> {}
        interface _ConnectorBootstrap$HostAwareSslSocketFactory$$static extends ClassLike {
          _checkValues(context: javax.net.ssl.SSLContext, enabledCipherSuites: string[], enabledProtocols: string[]): void;
        }
        let ConnectorBootstrap$HostAwareSslSocketFactory: _ConnectorBootstrap$HostAwareSslSocketFactory$$static;
        interface _ConnectorBootstrap$HostAwareSslSocketFactory {
          createServerSocket(port: int): java.net.ServerSocket;
          _bindAddress: string;
          _context: javax.net.ssl.SSLContext;
        }
        interface ConnectorBootstrap$HostAwareSslSocketFactory extends CombineTypes<[_ConnectorBootstrap$HostAwareSslSocketFactory, javax.rmi.ssl.SslRMIServerSocketFactory]> {}
        interface _ConnectorBootstrap$JMXConnectorServerData$$static extends ClassLike {
          new(jmxConnectorServer: javax.management.remote.JMXConnectorServer, jmxRemoteURL: javax.management.remote.JMXServiceURL): ConnectorBootstrap$JMXConnectorServerData;
        }
        let ConnectorBootstrap$JMXConnectorServerData: _ConnectorBootstrap$JMXConnectorServerData$$static;
        interface _ConnectorBootstrap$JMXConnectorServerData {
          _jmxConnectorServer: javax.management.remote.JMXConnectorServer;
          _jmxRemoteURL: javax.management.remote.JMXServiceURL;
        }
        interface ConnectorBootstrap$JMXConnectorServerData extends CombineTypes<[_ConnectorBootstrap$JMXConnectorServerData, java.lang.Object]> {}
        interface _ConnectorBootstrap$PermanentExporter$$static extends ClassLike {
        }
        let ConnectorBootstrap$PermanentExporter: _ConnectorBootstrap$PermanentExporter$$static;
        interface _ConnectorBootstrap$PermanentExporter {
          exportObject(obj: java.rmi.Remote, port: int, csf: java.rmi.server.RMIClientSocketFactory, ssf: java.rmi.server.RMIServerSocketFactory, filter: java.io.ObjectInputFilter): java.rmi.Remote;
          unexportObject(obj: java.rmi.Remote, force: boolean): boolean;
          _firstExported: java.rmi.Remote;
        }
        interface ConnectorBootstrap$PermanentExporter extends CombineTypes<[_ConnectorBootstrap$PermanentExporter, com.sun.jmx.remote.internal.rmi.RMIExporter, java.lang.Object]> {}
        interface _ConnectorBootstrap$PropertyNames$$static extends ClassLike {
          readonly ACCESS_FILE_NAME: string;
          readonly CONFIG_FILE_NAME: string;
          readonly HASH_PASSWORDS: string;
          readonly HOST: string;
          readonly LOCAL_PORT: string;
          readonly LOGIN_CONFIG_NAME: string;
          readonly PASSWORD_FILE_NAME: string;
          readonly PORT: string;
          readonly RMI_PORT: string;
          readonly SERIAL_FILTER_PATTERN: string;
          readonly SSL_CONFIG_FILE_NAME: string;
          readonly SSL_ENABLED_CIPHER_SUITES: string;
          readonly SSL_ENABLED_PROTOCOLS: string;
          readonly SSL_NEED_CLIENT_AUTH: string;
          readonly USE_AUTHENTICATION: string;
          readonly USE_LOCAL_ONLY: string;
          readonly USE_REGISTRY_SSL: string;
          readonly USE_SSL: string;
        }
        let ConnectorBootstrap$PropertyNames: _ConnectorBootstrap$PropertyNames$$static;
        interface _ConnectorBootstrap$PropertyNames {
        }
        interface ConnectorBootstrap$PropertyNames extends CombineTypes<[_ConnectorBootstrap$PropertyNames, java.lang.Object]> {}
        interface _ConnectorBootstrap$SslServerSocket$$static extends ClassLike {
          _getDefaultSSLSocketFactory(): javax.net.ssl.SSLSocketFactory;
          _defaultSSLSocketFactory: javax.net.ssl.SSLSocketFactory;
        }
        let ConnectorBootstrap$SslServerSocket: _ConnectorBootstrap$SslServerSocket$$static;
        interface _ConnectorBootstrap$SslServerSocket {
          accept(): java.net.Socket;
          _context: javax.net.ssl.SSLContext;
          _enabledCipherSuites: string[];
          _enabledProtocols: string[];
          _needClientAuth: boolean;
        }
        interface ConnectorBootstrap$SslServerSocket extends CombineTypes<[_ConnectorBootstrap$SslServerSocket, java.net.ServerSocket]> {}
        interface _LocalRMIServerSocketFactory$$static extends ClassLike {
          new(): LocalRMIServerSocketFactory;
        }
        let LocalRMIServerSocketFactory: _LocalRMIServerSocketFactory$$static;
        interface _LocalRMIServerSocketFactory {
          createServerSocket(port: int): java.net.ServerSocket;
          equals(obj: any): boolean;
          hashCode(): int;
        }
        interface LocalRMIServerSocketFactory extends CombineTypes<[_LocalRMIServerSocketFactory, java.lang.Object, java.rmi.server.RMIServerSocketFactory]> {}
        interface _SingleEntryRegistry$$static extends ClassLike {
          _singleRegistryFilter(info: java.io.ObjectInputFilter$FilterInfo): java.io.ObjectInputFilter$Status;
          _serialVersionUID: long;
          _new(port: int, name: string, object: java.rmi.Remote): SingleEntryRegistry;
          _new(port: int, csf: java.rmi.server.RMIClientSocketFactory, ssf: java.rmi.server.RMIServerSocketFactory, name: string, object: java.rmi.Remote): SingleEntryRegistry;
        }
        let SingleEntryRegistry: _SingleEntryRegistry$$static;
        interface _SingleEntryRegistry {
          bind(name: string, obj: java.rmi.Remote): void;
          list(): string[];
          lookup(name: string): java.rmi.Remote;
          rebind(name: string, obj: java.rmi.Remote): void;
          unbind(name: string): void;
          _name: string;
          _object: java.rmi.Remote;
        }
        interface SingleEntryRegistry extends CombineTypes<[_SingleEntryRegistry, sun.rmi.registry.RegistryImpl]> {}
      }
    }
  }
}
