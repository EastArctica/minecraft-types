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
      module jndi {
        module dns {
          interface _BaseNameClassPairEnumeration$$static<T> extends ClassLike {
            _new(ctx: DnsContext, nodes: java.util.Hashtable<string,NameNode>): BaseNameClassPairEnumeration<T>;
          }
          let BaseNameClassPairEnumeration: _BaseNameClassPairEnumeration$$static<T>;
          interface _BaseNameClassPairEnumeration<T> {
            close(): void;
            hasMore(): boolean;
            hasMoreElements(): boolean;
            next(): T;
(): T;
            nextElement(): T;
            _ctx: DnsContext;
            _nodes: java.util.Enumeration<NameNode>;
          }
          interface BaseNameClassPairEnumeration<T> extends CombineTypes<[_BaseNameClassPairEnumeration<T>, java.lang.Object, javax.naming.NamingEnumeration<T>]> {}
          interface _BindingEnumeration$$static extends ClassLike {
            _new(ctx: DnsContext, nodes: java.util.Hashtable<string,NameNode>): BindingEnumeration;
          }
          let BindingEnumeration: _BindingEnumeration$$static;
          interface _BindingEnumeration {
            next(): javax.naming.Binding;
            next(): any;
          }
          interface BindingEnumeration extends CombineTypes<[_BindingEnumeration, BaseNameClassPairEnumeration<javax.naming.Binding>, javax.naming.NamingEnumeration<javax.naming.Binding>]> {}
          interface _CT$$static extends ClassLike {
            _new(rrclass: int, rrtype: int): CT;
          }
          let CT: _CT$$static;
          interface _CT {
            _rrclass: int;
            _rrtype: int;
          }
          interface CT extends CombineTypes<[_CT, java.lang.Object]> {}
          interface _DNSDatagramChannelFactory$$static extends ClassLike {
            _findFirstFreePort(): int;
            _getLocalPort(dc: java.nio.channels.DatagramChannel): int;
            _BIT_DEVIATION: int;
            _DEVIATION: int;
            _HISTORY: int;
            _MAX_RANDOM_TRIES: int;
            _THRESHOLD: int;
            _new(): DNSDatagramChannelFactory;
            _new(random: java.util.Random): DNSDatagramChannelFactory;
            _new(random: java.util.Random, family: java.net.ProtocolFamily, deviation: int, threshold: int): DNSDatagramChannelFactory;
          }
          let DNSDatagramChannelFactory: _DNSDatagramChannelFactory$$static;
          interface _DNSDatagramChannelFactory {
            _farEnough(port: int): boolean;
            _isUndecided(): boolean;
            _isUsingJavaPortRandomization(): boolean;
            _isUsingNativePortRandomization(): boolean;
            open(): java.nio.channels.DatagramChannel;
            _openDefault(): java.nio.channels.DatagramChannel;
            _openRandom(): java.nio.channels.DatagramChannel;
            _deviation: int;
            _family: java.net.ProtocolFamily;
            _history: DNSDatagramChannelFactory$PortHistory;
            _lastSystemAllocated: int;
            _lastport: int;
            _random: java.util.Random;
            _suitablePortCount: int;
            _thresholdCount: int;
            _unsuitablePortCount: int;
          }
          interface DNSDatagramChannelFactory extends CombineTypes<[_DNSDatagramChannelFactory, java.lang.Object]> {}
          interface _DNSDatagramChannelFactory$EphemeralPortRange$$static extends ClassLike {
            _LOWER: int;
            _RANGE: int;
            _UPPER: int;
          }
          let DNSDatagramChannelFactory$EphemeralPortRange: _DNSDatagramChannelFactory$EphemeralPortRange$$static;
          interface _DNSDatagramChannelFactory$EphemeralPortRange {
          }
          interface DNSDatagramChannelFactory$EphemeralPortRange extends CombineTypes<[_DNSDatagramChannelFactory$EphemeralPortRange, java.lang.Object]> {}
          interface _DNSDatagramChannelFactory$PortHistory$$static extends ClassLike {
            _new(capacity: int, random: java.util.Random): DNSDatagramChannelFactory$PortHistory;
          }
          let DNSDatagramChannelFactory$PortHistory: _DNSDatagramChannelFactory$PortHistory$$static;
          interface _DNSDatagramChannelFactory$PortHistory {
            add(port: int): boolean;
            contains(port: int): boolean;
            offer(port: int): boolean;
            _capacity: int;
            _index: int;
            _ports: int[];
            _random: java.util.Random;
          }
          interface DNSDatagramChannelFactory$PortHistory extends CombineTypes<[_DNSDatagramChannelFactory$PortHistory, java.lang.Object]> {}
          interface _DnsClient$$static extends ClassLike {
            _dprint(mess: string): void;
            _DEFAULT_PORT: int;
            _DNS_HDR_SIZE: int;
            _FLAGS_OFFSET: int;
            _FORMAT_ERROR: int;
            _IDENT_OFFSET: int;
            _MIN_TIMEOUT: int;
            _NAME_ERROR: int;
            _NOT_IMPL: int;
            _NO_ERROR: int;
            _NUMADD_OFFSET: int;
            _NUMANS_OFFSET: int;
            _NUMAUTH_OFFSET: int;
            _NUMQ_OFFSET: int;
            _REFUSED: int;
            _SERVER_FAILURE: int;
            _TRANSACTION_ID_BOUND: int;
            _debug: boolean;
            _factory: DNSDatagramChannelFactory;
            _random: java.security.SecureRandom;
            _rcodeDescription: string[];
            new(servers: string[], timeout: int, retries: int): DnsClient;
          }
          let DnsClient: _DnsClient$$static;
          interface _DnsClient {
            _blockingReceive(dc: java.nio.channels.DatagramChannel, target: java.net.InetSocketAddress, buffer: java.nio.ByteBuffer, timeout: long): boolean;
            _checkResponseCode(hdr: Header): void;
            close(): void;
            _continueTcpQuery(tcp: Tcp): byte[];
            _doTcpQuery(tcp: Tcp, pkt: Packet): byte[];
            _doUdpQuery(pkt: Packet, server: java.net.InetAddress, port: int, retry: int, xid: int, unfulfilledTimeout: java.util.concurrent.atomic.AtomicLong, unfulfilledOnly: boolean): byte[];
            _getDatagramChannel(): java.nio.channels.DatagramChannel;
            _isMatchResponse(pkt: byte[], xid: int): boolean;
            _lookupResponse(xid: int): byte[];
            _makeQueryName(fqdn: DnsName, pkt: Packet, off: int): void;
            _makeQueryPacket(fqdn: DnsName, xid: int, qclass: int, qtype: int, recursion: boolean): Packet;
            _query(fqdn: DnsName, qclass: int, qtype: int, recursion: boolean, auth: boolean): ResourceRecords;
            _queryZone(zone: DnsName, qclass: int, recursion: boolean): ResourceRecords;
            _queuesLock: any;
            _reqs: java.util.Map<int,ResourceRecord>;
            _resps: java.util.Map<int,byte[]>;
            _retries: int;
            _selectorCleanup: java.lang.ref.Cleaner$Cleanable;
            _serverPorts: int[];
            _servers: java.net.InetAddress[];
            _timeout: int;
            _udpChannelLock: java.util.concurrent.locks.ReentrantLock;
            _udpChannelSelector: java.nio.channels.Selector;
          }
          interface DnsClient extends CombineTypes<[_DnsClient, java.lang.Object]> {}
          interface _DnsContext$$static extends ClassLike {
            _attrIdsToClassesAndTypes(attrIds: string[]): CT[];
            _classAndTypeMatch(rrclass: int, rrtype: int, cts: CT[]): boolean;
            _dprint(msg: string): void;
            _fromAttrId(attrId: string): CT;
            _getClassAndTypeToQuery(cts: CT[]): CT;
            _rrsToAttrs(rrs: ResourceRecords, cts: CT[]): javax.naming.directory.Attributes;
            _toAttrId(rrclass: int, rrtype: int): string;
            _ANY: int;
            _DEFAULT_INIT_TIMEOUT: int;
            _DEFAULT_RETRIES: int;
            _INIT_TIMEOUT: string;
            _LOOKUP_ATTR: string;
            _RECURSION: string;
            _RETRIES: string;
            _debug: boolean;
            _nameParser: javax.naming.NameParser;
            _zoneTree: ZoneNode;
            new(domain: string, servers: string[], environment: java.util.Hashtable<any,any>): DnsContext;
            _new(ctx: DnsContext, domain: DnsName): DnsContext;
          }
          let DnsContext: _DnsContext$$static;
          interface _DnsContext {
            addToEnvironment(propName: string, propVal: any): any;
            c_bind(name: javax.naming.Name, obj: any, cont: jndi.toolkit.ctx.Continuation): void;
            c_bind(name: javax.naming.Name, obj: any, attrs: javax.naming.directory.Attributes, cont: jndi.toolkit.ctx.Continuation): void;
            c_createSubcontext(name: javax.naming.Name, cont: jndi.toolkit.ctx.Continuation): javax.naming.Context;
            c_createSubcontext(name: javax.naming.Name, attrs: javax.naming.directory.Attributes, cont: jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext;
            c_destroySubcontext(name: javax.naming.Name, cont: jndi.toolkit.ctx.Continuation): void;
            c_getAttributes(name: javax.naming.Name, attrIds: string[], cont: jndi.toolkit.ctx.Continuation): javax.naming.directory.Attributes;
            c_getNameParser(name: javax.naming.Name, cont: jndi.toolkit.ctx.Continuation): javax.naming.NameParser;
            c_getSchema(name: javax.naming.Name, cont: jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext;
            c_getSchemaClassDefinition(name: javax.naming.Name, cont: jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext;
            c_list(name: javax.naming.Name, cont: jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.NameClassPair>;
            c_listBindings(name: javax.naming.Name, cont: jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.Binding>;
            c_lookup(name: javax.naming.Name, cont: jndi.toolkit.ctx.Continuation): any;
            c_lookupLink(name: javax.naming.Name, cont: jndi.toolkit.ctx.Continuation): any;
            c_modifyAttributes(name: javax.naming.Name, mod_op: int, attrs: javax.naming.directory.Attributes, cont: jndi.toolkit.ctx.Continuation): void;
            c_modifyAttributes(name: javax.naming.Name, mods: javax.naming.directory.ModificationItem[], cont: jndi.toolkit.ctx.Continuation): void;
            c_rebind(name: javax.naming.Name, obj: any, cont: jndi.toolkit.ctx.Continuation): void;
            c_rebind(name: javax.naming.Name, obj: any, attrs: javax.naming.directory.Attributes, cont: jndi.toolkit.ctx.Continuation): void;
            c_rename(oldname: javax.naming.Name, newname: javax.naming.Name, cont: jndi.toolkit.ctx.Continuation): void;
            c_search(name: javax.naming.Name, matchingAttributes: javax.naming.directory.Attributes, attributesToReturn: string[], cont: jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
            c_search(name: javax.naming.Name, filter: string, cons: javax.naming.directory.SearchControls, cont: jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
            c_search(name: javax.naming.Name, filterExpr: string, filterArgs: any[], cons: javax.naming.directory.SearchControls, cont: jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>;
            c_unbind(name: javax.naming.Name, cont: jndi.toolkit.ctx.Continuation): void;
            close(): void;
            composeName(name: javax.naming.Name, prefix: javax.naming.Name): javax.naming.Name;
            _fullyQualify(name: javax.naming.Name): DnsName;
            getEnvironment(): java.util.Hashtable<any,any>;
            _getLookupCT(attrId: string): CT;
            getNameInNamespace(): string;
            _getNameNode(fqdn: DnsName): NameNode;
            _getResolver(): Resolver;
            _initFromEnvironment(): void;
            _isZoneCurrent(znode: ZoneNode, zone: DnsName): boolean;
            _p_getEnvironment(): java.util.Hashtable<any,any>;
            _populateZone(znode: ZoneNode, zone: DnsName): NameNode;
            removeFromEnvironment(propName: string): any;
            _setProviderUrl(url: string): void;
            _authoritative: boolean;
            _domain: DnsName;
            _envShared: boolean;
            _environment: java.util.Hashtable<any,any>;
            _lookupCT: CT;
            _parentIsDns: boolean;
            _recursion: boolean;
            _resolver: Resolver;
            _retries: int;
            _servers: string[];
            _timeout: int;
          }
          interface DnsContext extends CombineTypes<[_DnsContext, com.sun.jndi.toolkit.ctx.ComponentDirContext]> {}
          interface _DnsContextFactory$$static extends ClassLike {
            _constructProviderUrl(domain: string, servers: string[]): string;
            _filterNameServers(input: java.util.List<string>, oneIsEnough: boolean): java.util.List<string>;
            getContext(domain: string, servers: string[], env: java.util.Hashtable<any,any>): DnsContext;
            getContext(domain: string, urls: DnsUrl[], env: java.util.Hashtable<any,any>): DnsContext;
            _getInitCtxUrl(env: java.util.Hashtable<any,any>): string;
            platformServersAvailable(): boolean;
            _platformServersUsed(urls: DnsUrl[]): boolean;
            _serversForUrls(urls: DnsUrl[]): string[];
            _urlToContext(url: string, env: java.util.Hashtable<any,any>): javax.naming.Context;
            _DEFAULT_PORT: int;
            _DEFAULT_URL: string;
            new(): DnsContextFactory;
          }
          let DnsContextFactory: _DnsContextFactory$$static;
          interface _DnsContextFactory {
            getInitialContext(env: java.util.Hashtable<any,any>): javax.naming.Context;
          }
          interface DnsContextFactory extends CombineTypes<[_DnsContextFactory, javax.naming.spi.InitialContextFactory, java.lang.Object]> {}
          interface _DnsName$$static extends ClassLike {
            _compareLabels(label1: string, label2: string): int;
            _escape(buf: DnsName$stringBuilder, label: string): void;
            _getEscapedOctet(name: string, pos: int): char;
            _isDigit(c: char): boolean;
            _isHostNameChar(c: char): boolean;
            _isHostNameLabel(label: string): boolean;
            _keyForLabel(label: string): string;
            _verifyLabel(label: string): void;
            _serialVersionUID: long;
            new(): DnsName;
            new(name: string): DnsName;
          }
          let DnsName: _DnsName$$static;
          interface _DnsName {
            add(comp: string): javax.naming.Name;
            add(pos: int, comp: string): javax.naming.Name;
            addAll(suffix: javax.naming.Name): javax.naming.Name;
            addAll(pos: int, n: javax.naming.Name): javax.naming.Name;
            clone(): any;
            _compareRange(beg: int, end: int, n: javax.naming.Name): int;
            compareTo(obj: any): int;
            endsWith(n: javax.naming.Name): boolean;
            equals(obj: any): boolean;
            get(pos: int): string;
            getAll(): java.util.Enumeration<string>;
            _getKey(i: int): string;
            getOctets(): short;
            getPrefix(pos: int): javax.naming.Name;
            getSuffix(pos: int): javax.naming.Name;
            _hasRootLabel(): boolean;
            hashCode(): int;
            isEmpty(): boolean;
            isHostName(): boolean;
            _parse(name: string): void;
            _readObject(s: java.io.ObjectInputStream): void;
            remove(pos: int): any;
            size(): int;
            startsWith(n: javax.naming.Name): boolean;
            toString(): string;
            _writeObject(s: java.io.ObjectOutputStream): void;
            _domain: string;
            _labels: java.util.ArrayList<string>;
            _octets: short;
          }
          interface DnsName extends CombineTypes<[_DnsName, java.lang.Object, javax.naming.Name]> {}
          interface _DnsNameParser$$static extends ClassLike {
            _new(): DnsNameParser;
          }
          let DnsNameParser: _DnsNameParser$$static;
          interface _DnsNameParser {
            equals(obj: any): boolean;
            hashCode(): int;
            parse(name: string): javax.naming.Name;
          }
          interface DnsNameParser extends CombineTypes<[_DnsNameParser, java.lang.Object, javax.naming.NameParser]> {}
          interface _DnsUrl$$static extends ClassLike {
            fromList(urlList: string): DnsUrl[];
            _isDnsSchemeOnly(uri: string): boolean;
            _validateURI(uri: string): string;
            _DEFAULT_PARSE_MODE: jndi.toolkit.url.Uri$ParseMode;
            readonly PARSE_MODE: jndi.toolkit.url.Uri$ParseMode;
            _PARSE_MODE_PROP: string;
            new(url: string): DnsUrl;
          }
          let DnsUrl: _DnsUrl$$static;
          interface _DnsUrl {
            _checkSchemeOnly(uri: string, scheme: string): boolean;
            getDomain(): string;
            _isSchemeOnly(uri: string): boolean;
            _newInvalidURISchemeException(uri: string): java.net.MalformedURLException;
            _parseMode(): jndi.toolkit.url.Uri$ParseMode;
            _domain: string;
          }
          interface DnsUrl extends CombineTypes<[_DnsUrl, com.sun.jndi.toolkit.url.Uri]> {}
          interface _Header$$static extends ClassLike {
            _getShort(msg: byte[], pos: int): int;
            _AA_BIT: short;
            _HEADER_SIZE: int;
            _OPCODE_MASK: short;
            _OPCODE_SHIFT: int;
            _QR_BIT: short;
            _RA_BIT: short;
            _RCODE_MASK: short;
            _RD_BIT: short;
            _TC_BIT: short;
            _new(msg: byte[], msgLen: int): Header;
          }
          let Header: _Header$$static;
          interface _Header {
            _decode(msg: byte[], msgLen: int): void;
            _authoritative: boolean;
            _numAdditionals: int;
            _numAnswers: int;
            _numAuthorities: int;
            _numQuestions: int;
            _opcode: int;
            _query: boolean;
            _rcode: int;
            _recursionAvail: boolean;
            _recursionDesired: boolean;
            _truncated: boolean;
            _xid: int;
          }
          interface Header extends CombineTypes<[_Header, java.lang.Object]> {}
          interface _NameClassPairEnumeration$$static extends ClassLike {
            _new(ctx: DnsContext, nodes: java.util.Hashtable<string,NameNode>): NameClassPairEnumeration;
          }
          let NameClassPairEnumeration: _NameClassPairEnumeration$$static;
          interface _NameClassPairEnumeration {
            next(): javax.naming.NameClassPair;
            next(): any;
          }
          interface NameClassPairEnumeration extends CombineTypes<[_NameClassPairEnumeration, BaseNameClassPairEnumeration<javax.naming.NameClassPair>, javax.naming.NamingEnumeration<javax.naming.NameClassPair>]> {}
          interface _NameNode$$static extends ClassLike {
            _new(label: string): NameNode;
          }
          let NameNode: _NameNode$$static;
          interface _NameNode {
            _add(name: DnsName, idx: int): NameNode;
            _depth(): int;
            _get(key: string): NameNode;
            _get(name: DnsName, idx: int): NameNode;
            _getChildren(): java.util.Hashtable<string,NameNode>;
            _getLabel(): string;
            _isZoneCut(): boolean;
            _newNameNode(label: string): NameNode;
            _setZoneCut(isZoneCut: boolean): void;
            _children: java.util.Hashtable<string,NameNode>;
            _depth: int;
            _isZoneCut: boolean;
            _label: string;
          }
          interface NameNode extends CombineTypes<[_NameNode, java.lang.Object]> {}
          interface _Packet$$static extends ClassLike {
            _new(len: int): Packet;
            _new(data: byte[], len: int): Packet;
          }
          let Packet: _Packet$$static;
          interface _Packet {
            _getData(): byte[];
            _length(): int;
            _putByte(x: int, off: int): void;
            _putBytes(src: byte[], src_offset: int, dst_offset: int, len: int): void;
            _putInt(x: int, off: int): void;
            _putShort(x: int, off: int): void;
            _buf: byte[];
          }
          interface Packet extends CombineTypes<[_Packet, java.lang.Object]> {}
          interface _Resolver$$static extends ClassLike {
            _new(servers: string[], timeout: int, retries: int): Resolver;
          }
          let Resolver: _Resolver$$static;
          interface _Resolver {
            close(): void;
            _findNameServers(zone: DnsName, recursion: boolean): string[];
            _findSoa(zone: DnsName, rrclass: int, recursion: boolean): ResourceRecord;
            _findZoneName(fqdn: DnsName, rrclass: int, recursion: boolean): DnsName;
            _query(fqdn: DnsName, rrclass: int, rrtype: int, recursion: boolean, auth: boolean): ResourceRecords;
            _queryZone(zone: DnsName, rrclass: int, recursion: boolean): ResourceRecords;
            _dnsClient: DnsClient;
            _retries: int;
            _timeout: int;
          }
          interface Resolver extends CombineTypes<[_Resolver, java.lang.Object]> {}
          interface _ResourceRecord$$static extends ClassLike {
            compareSerialNumbers(s1: long, a1: long): int;
            _dprint(mess: string): void;
            getRrclass(className: string): int;
            getRrclassName(rrclass: int): string;
            getType(typeName: string): int;
            getTypeName(rrtype: int): string;
            _nameToValue(name: string, names: string[]): int;
            _valueToName(val: int, names: string[]): string;
            _CLASS_HESIOD: int;
            _CLASS_INTERNET: int;
            _MAXIMUM_COMPRESSION_REFERENCES: int;
            _QCLASS_STAR: int;
            _QTYPE_AXFR: int;
            _QTYPE_STAR: int;
            _TYPE_A: int;
            _TYPE_AAAA: int;
            _TYPE_CNAME: int;
            _TYPE_HINFO: int;
            _TYPE_MX: int;
            _TYPE_NAPTR: int;
            _TYPE_NS: int;
            _TYPE_PTR: int;
            _TYPE_SOA: int;
            _TYPE_SRV: int;
            _TYPE_TXT: int;
            _debug: boolean;
            _rrClassNames: string[];
            _rrTypeNames: string[];
            _new(msg: byte[], msgLen: int, offset: int, qSection: boolean, decodeRdata: boolean): ResourceRecord;
          }
          let ResourceRecord: _ResourceRecord$$static;
          interface _ResourceRecord {
            _decode(decodeRdata: boolean): void;
            _decodeA(pos: int): string;
            _decodeAAAA(pos: int): string;
            _decodeCharString(pos: int, buf: ResourceRecord$stringBuffer): int;
            _decodeHinfo(pos: int): string;
            _decodeMx(pos: int): string;
            _decodeName(pos: int): DnsName;
            _decodeName(pos: int, n: DnsName): int;
            _decodeNaptr(pos: int): string;
            _decodeRdata(pos: int): any;
            _decodeSoa(pos: int): string;
            _decodeSrv(pos: int): string;
            _decodeTxt(pos: int): string;
            _getInt(pos: int): int;
            getName(): DnsName;
            getRdata(): any;
            getRrclass(): int;
            getType(): int;
            _getUByte(pos: int): int;
            _getUInt(pos: int): long;
            _getUShort(pos: int): int;
            size(): int;
            toString(): string;
            _msg: byte[];
            _msgLen: int;
            _name: DnsName;
            _offset: int;
            _qSection: boolean;
            _rdata: any;
            _rdlen: int;
            _rrclass: int;
            _rrclassName: string;
            _rrlen: int;
            _rrtype: int;
            _rrtypeName: string;
            _ttl: int;
          }
          interface ResourceRecord extends CombineTypes<[_ResourceRecord, java.lang.Object]> {}
          interface _ResourceRecords$$static extends ClassLike {
            _new(msg: byte[], msgLen: int, hdr: Header, zoneXfer: boolean): ResourceRecords;
          }
          let ResourceRecords: _ResourceRecords$$static;
          interface _ResourceRecords {
            _add(msg: byte[], msgLen: int, hdr: Header): void;
            _getFirstAnsType(): int;
            _getLastAnsType(): int;
            _additional: java.util.Vector<ResourceRecord>;
            _answer: java.util.Vector<ResourceRecord>;
            _authority: java.util.Vector<ResourceRecord>;
            _question: java.util.Vector<ResourceRecord>;
            _zoneXfer: boolean;
          }
          interface ResourceRecords extends CombineTypes<[_ResourceRecords, java.lang.Object]> {}
          interface _Tcp$$static extends ClassLike {
            _new(server: java.net.InetAddress, port: int, timeout: long): Tcp;
          }
          let Tcp: _Tcp$$static;
          interface _Tcp {
            _close(): void;
            _read(): int;
            _read(b: byte[], off: int, len: int): int;
            _readWithTimeout(reader: Tcp$SocketReadOp): int;
            _in: java.io.InputStream;
            _out: java.io.OutputStream;
            _sock: java.net.Socket;
            _timeoutLeft: long;
          }
          interface Tcp extends CombineTypes<[_Tcp, java.lang.Object]> {}
          interface _Tcp$SocketReadOp$$static extends ClassLike {
          }
          let Tcp$SocketReadOp: _Tcp$SocketReadOp$$static;
          interface _Tcp$SocketReadOp {
            read(): int;
(): int;
          }
          interface Tcp$SocketReadOp extends CombineTypes<[_Tcp$SocketReadOp, java.lang.Object]> {}
          interface _ZoneNode$$static extends ClassLike {
            _getMinimumTtl(soa: ResourceRecord): long;
            _getSerialNumber(soa: ResourceRecord): long;
            _new(label: string): ZoneNode;
          }
          let ZoneNode: _ZoneNode$$static;
          interface _ZoneNode {
            _compareSerialNumberTo(soa: ResourceRecord): int;
            _depopulate(): void;
            _getContents(): NameNode;
            _getDeepestPopulated(fqdn: DnsName): ZoneNode;
            _isExpired(): boolean;
            _isPopulated(): boolean;
            _newNameNode(label: string): NameNode;
            _populate(zone: DnsName, rrs: ResourceRecords): NameNode;
            _setExpiration(secsToExpiration: long): void;
            _contentsRef: java.lang.ref.SoftReference<NameNode>;
            _expiration: java.util.Date;
            _serialNumber: long;
          }
          interface ZoneNode extends CombineTypes<[_ZoneNode, com.sun.jndi.dns.NameNode]> {}
        }
        module url {
          module dns {
            interface _dnsURLContext$$static extends ClassLike {
              new(env: java.util.Hashtable<any,any>): dnsURLContext;
            }
            let dnsURLContext: _dnsURLContext$$static;
            interface _dnsURLContext {
              _getRootURLContext(url: string, env: java.util.Hashtable<any,any>): javax.naming.spi.ResolveResult;
            }
            interface dnsURLContext extends CombineTypes<[_dnsURLContext, com.sun.jndi.toolkit.url.GenericURLDirContext]> {}
            interface _dnsURLContextFactory$$static extends ClassLike {
              _getUsingURL(url: string, env: java.util.Hashtable<any,any>): any;
              _getUsingURLs(urls: string[], env: java.util.Hashtable<any,any>): any;
              new(): dnsURLContextFactory;
            }
            let dnsURLContextFactory: _dnsURLContextFactory$$static;
            interface _dnsURLContextFactory {
              getObjectInstance(urlInfo: any, name: javax.naming.Name, nameCtx: javax.naming.Context, env: java.util.Hashtable<any,any>): any;
            }
            interface dnsURLContextFactory extends CombineTypes<[_dnsURLContextFactory, javax.naming.spi.ObjectFactory, java.lang.Object]> {}
          }
        }
      }
    }
  }
}
