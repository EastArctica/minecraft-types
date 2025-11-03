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
  module javax {
    module smartcardio {
      interface _ATR$$static extends ClassLike {
        _serialVersionUID: long;
        new(atr: byte[]): ATR;
      }
      let ATR: _ATR$$static;
      interface _ATR {
        equals(obj: any): boolean;
        getBytes(): byte[];
        getHistoricalBytes(): byte[];
        hashCode(): int;
        _parse(): void;
        _readObject(_in: java.io.ObjectInputStream): void;
        toString(): string;
        _atr: byte[];
        _nHistorical: int;
        _startHistorical: int;
      }
      interface ATR extends CombineTypes<[_ATR, java.lang.Object, java.io.Serializable]> {}
      interface _Card$$static extends ClassLike {
        _new(): Card;
      }
      let Card: _Card$$static;
      interface _Card {
        beginExclusive(): void;
        disconnect(a0: boolean): void;
        endExclusive(): void;
        getATR(): ATR;
        getBasicChannel(): CardChannel;
        getProtocol(): string;
        openLogicalChannel(): CardChannel;
        transmitControlCommand(a0: int, a1: byte[]): byte[];
      }
      interface Card extends CombineTypes<[_Card, java.lang.Object]> {}
      interface _CardChannel$$static extends ClassLike {
        _new(): CardChannel;
      }
      let CardChannel: _CardChannel$$static;
      interface _CardChannel {
        close(): void;
        getCard(): Card;
        getChannelNumber(): int;
        transmit(a0: CommandAPDU): ResponseAPDU;
        transmit(a0: java.nio.ByteBuffer, a1: java.nio.ByteBuffer): int;
      }
      interface CardChannel extends CombineTypes<[_CardChannel, java.lang.Object]> {}
      interface _CardException$$static extends ClassLike {
        _serialVersionUID: long;
        new(message: string): CardException;
        new(cause: java.lang.Throwable): CardException;
        new(message: string, cause: java.lang.Throwable): CardException;
      }
      let CardException: _CardException$$static;
      interface _CardException {
      }
      interface CardException extends CombineTypes<[_CardException, java.lang.Exception]> {}
      interface _CardNotPresentException$$static extends ClassLike {
        _serialVersionUID: long;
        new(message: string): CardNotPresentException;
        new(cause: java.lang.Throwable): CardNotPresentException;
        new(message: string, cause: java.lang.Throwable): CardNotPresentException;
      }
      let CardNotPresentException: _CardNotPresentException$$static;
      interface _CardNotPresentException {
      }
      interface CardNotPresentException extends CombineTypes<[_CardNotPresentException, javax.smartcardio.CardException]> {}
      interface _CardPermission$$static extends ClassLike {
        _getActions(mask: int): string;
        _getMask(actions: string): int;
        _ARRAY_MASKS: int[];
        _ARRAY_STRINGS: string[];
        _A_ALL: int;
        _A_CONNECT: int;
        _A_EXCLUSIVE: int;
        _A_GET_BASIC_CHANNEL: int;
        _A_OPEN_LOGICAL_CHANNEL: int;
        _A_RESET: int;
        _A_TRANSMIT_CONTROL: int;
        _S_ALL: string;
        _S_CONNECT: string;
        _S_EXCLUSIVE: string;
        _S_GET_BASIC_CHANNEL: string;
        _S_OPEN_LOGICAL_CHANNEL: string;
        _S_RESET: string;
        _S_TRANSMIT_CONTROL: string;
        _serialVersionUID: long;
        new(terminalName: string, actions: string): CardPermission;
      }
      let CardPermission: _CardPermission$$static;
      interface _CardPermission {
        equals(obj: any): boolean;
        getActions(): string;
        hashCode(): int;
        implies(permission: java.security.Permission): boolean;
        _readObject(s: java.io.ObjectInputStream): void;
        _writeObject(s: java.io.ObjectOutputStream): void;
        _actions: string;
        _mask: int;
      }
      interface CardPermission extends CombineTypes<[_CardPermission, java.security.Permission]> {}
      interface _CardTerminal$$static extends ClassLike {
        _new(): CardTerminal;
      }
      let CardTerminal: _CardTerminal$$static;
      interface _CardTerminal {
        connect(a0: string): Card;
        getName(): string;
        isCardPresent(): boolean;
        waitForCardAbsent(a0: long): boolean;
        waitForCardPresent(a0: long): boolean;
      }
      interface CardTerminal extends CombineTypes<[_CardTerminal, java.lang.Object]> {}
      interface _CardTerminals$$static extends ClassLike {
        _new(): CardTerminals;
      }
      let CardTerminals: _CardTerminals$$static;
      interface _CardTerminals {
        getTerminal(name: string): CardTerminal;
        list(): java.util.List<CardTerminal>;
        list(a0: CardTerminals$State): java.util.List<CardTerminal>;
        waitForChange(): void;
        waitForChange(a0: long): boolean;
      }
      interface CardTerminals extends CombineTypes<[_CardTerminals, java.lang.Object]> {}
      interface _CardTerminals$State$$static extends ClassLike {
        valueOf(name: string): CardTerminals$State;
        values(): CardTerminals$State[];
        readonly ALL: CardTerminals$State;
        readonly CARD_ABSENT: CardTerminals$State;
        readonly CARD_INSERTION: CardTerminals$State;
        readonly CARD_PRESENT: CardTerminals$State;
        readonly CARD_REMOVAL: CardTerminals$State;
      }
      let CardTerminals$State: _CardTerminals$State$$static;
      interface _CardTerminals$State {
      }
      interface CardTerminals$State extends CombineTypes<[_CardTerminals$State]> {}
      interface _CommandAPDU$$static extends ClassLike {
        _arrayLength(b: byte[]): int;
        _MAX_APDU_SIZE: int;
        _serialVersionUID: long;
        new(apdu: byte[]): CommandAPDU;
        new(apdu: byte[], apduOffset: int, apduLength: int): CommandAPDU;
        new(apdu: java.nio.ByteBuffer): CommandAPDU;
        new(cla: int, ins: int, p1: int, p2: int): CommandAPDU;
        new(cla: int, ins: int, p1: int, p2: int, ne: int): CommandAPDU;
        new(cla: int, ins: int, p1: int, p2: int, data: byte[]): CommandAPDU;
        new(cla: int, ins: int, p1: int, p2: int, data: byte[], dataOffset: int, dataLength: int): CommandAPDU;
        new(cla: int, ins: int, p1: int, p2: int, data: byte[], ne: int): CommandAPDU;
        new(cla: int, ins: int, p1: int, p2: int, data: byte[], dataOffset: int, dataLength: int, ne: int): CommandAPDU;
      }
      let CommandAPDU: _CommandAPDU$$static;
      interface _CommandAPDU {
        _checkArrayBounds(b: byte[], ofs: int, len: int): void;
        equals(obj: any): boolean;
        getBytes(): byte[];
        getCLA(): int;
        getData(): byte[];
        getINS(): int;
        getNc(): int;
        getNe(): int;
        getP1(): int;
        getP2(): int;
        hashCode(): int;
        _parse(): void;
        _readObject(_in: java.io.ObjectInputStream): void;
        _setHeader(cla: int, ins: int, p1: int, p2: int): void;
        toString(): string;
        _apdu: byte[];
        _dataOffset: int;
        _nc: int;
        _ne: int;
      }
      interface CommandAPDU extends CombineTypes<[_CommandAPDU, java.lang.Object, java.io.Serializable]> {}
      interface _ResponseAPDU$$static extends ClassLike {
        _check(apdu: byte[]): void;
        _serialVersionUID: long;
        new(apdu: byte[]): ResponseAPDU;
      }
      let ResponseAPDU: _ResponseAPDU$$static;
      interface _ResponseAPDU {
        equals(obj: any): boolean;
        getBytes(): byte[];
        getData(): byte[];
        getNr(): int;
        getSW(): int;
        getSW1(): int;
        getSW2(): int;
        hashCode(): int;
        _readObject(_in: java.io.ObjectInputStream): void;
        toString(): string;
        _apdu: byte[];
      }
      interface ResponseAPDU extends CombineTypes<[_ResponseAPDU, java.lang.Object, java.io.Serializable]> {}
      interface _TerminalFactory$$static extends ClassLike {
        getDefault(): TerminalFactory;
        getDefaultType(): string;
        getInstance(type: string, params: any): TerminalFactory;
        getInstance(type: string, params: any, provider: string): TerminalFactory;
        getInstance(type: string, params: any, provider: java.security.Provider): TerminalFactory;
        _PROP_NAME: string;
        _defaultFactory: TerminalFactory;
        _defaultType: string;
      }
      let TerminalFactory: _TerminalFactory$$static;
      interface _TerminalFactory {
        getProvider(): java.security.Provider;
        getType(): string;
        terminals(): CardTerminals;
        toString(): string;
        _provider: java.security.Provider;
        _spi: TerminalFactorySpi;
        _type: string;
      }
      interface TerminalFactory extends CombineTypes<[_TerminalFactory, java.lang.Object]> {}
      interface _TerminalFactory$NoneCardTerminals$$static extends ClassLike {
        _INSTANCE: CardTerminals;
      }
      let TerminalFactory$NoneCardTerminals: _TerminalFactory$NoneCardTerminals$$static;
      interface _TerminalFactory$NoneCardTerminals {
        list(state: CardTerminals$State): java.util.List<CardTerminal>;
        waitForChange(timeout: long): boolean;
      }
      interface TerminalFactory$NoneCardTerminals extends CombineTypes<[_TerminalFactory$NoneCardTerminals, javax.smartcardio.CardTerminals]> {}
      interface _TerminalFactory$NoneFactorySpi$$static extends ClassLike {
        _INSTANCE: TerminalFactorySpi;
      }
      let TerminalFactory$NoneFactorySpi: _TerminalFactory$NoneFactorySpi$$static;
      interface _TerminalFactory$NoneFactorySpi {
        _engineTerminals(): CardTerminals;
      }
      interface TerminalFactory$NoneFactorySpi extends CombineTypes<[_TerminalFactory$NoneFactorySpi, javax.smartcardio.TerminalFactorySpi]> {}
      interface _TerminalFactory$NoneProvider$$static extends ClassLike {
        _INSTANCE: java.security.Provider;
        _serialVersionUID: long;
      }
      let TerminalFactory$NoneProvider: _TerminalFactory$NoneProvider$$static;
      interface _TerminalFactory$NoneProvider {
      }
      interface TerminalFactory$NoneProvider extends CombineTypes<[_TerminalFactory$NoneProvider, java.security.Provider]> {}
      interface _TerminalFactorySpi$$static extends ClassLike {
        _new(): TerminalFactorySpi;
      }
      let TerminalFactorySpi: _TerminalFactorySpi$$static;
      interface _TerminalFactorySpi {
        _engineTerminals(): CardTerminals;
(): CardTerminals;
      }
      interface TerminalFactorySpi extends CombineTypes<[_TerminalFactorySpi, java.lang.Object]> {}
    }
  }
  module sun {
    module security {
      module smartcardio {
        interface _CardImpl$$static extends ClassLike {
          _getSW(b: byte[]): int;
          _commandOpenChannel: byte[];
          _new(terminal: TerminalImpl, protocol: string): CardImpl;
        }
        let CardImpl: _CardImpl$$static;
        interface _CardImpl {
          beginExclusive(): void;
          _checkExclusive(): void;
          _checkSecurity(action: string): void;
          _checkState(): void;
          disconnect(reset: boolean): void;
          endExclusive(): void;
          _finalize(): void;
          getATR(): javax.smartcardio.ATR;
          getBasicChannel(): javax.smartcardio.CardChannel;
          getProtocol(): string;
          _handleError(e: PCSCException): void;
          _isValid(): boolean;
          openLogicalChannel(): javax.smartcardio.CardChannel;
          toString(): string;
          transmitControlCommand(controlCode: int, command: byte[]): byte[];
          _atr: javax.smartcardio.ATR;
          _basicChannel: ChannelImpl;
          _cardId: long;
          _exclusiveThread: java.lang.Thread;
          _protocol: int;
          _state: CardImpl$State;
          _terminal: TerminalImpl;
        }
        interface CardImpl extends CombineTypes<[_CardImpl, javax.smartcardio.Card]> {}
        interface _CardImpl$State$$static extends ClassLike {
          valueOf(name: string): CardImpl$State;
          values(): CardImpl$State[];
          readonly DISCONNECTED: CardImpl$State;
          readonly OK: CardImpl$State;
          readonly REMOVED: CardImpl$State;
        }
        let CardImpl$State: _CardImpl$State$$static;
        interface _CardImpl$State {
        }
        interface CardImpl$State extends CombineTypes<[_CardImpl$State]> {}
        interface _ChannelImpl$$static extends ClassLike {
          _checkManageChannel(b: byte[]): void;
          _getBooleanProperty(name: string, def: boolean): boolean;
          _getSW(res: byte[]): int;
          _isOK(res: byte[]): boolean;
          _B0: byte[];
          _RESPONSE_ITERATIONS: int;
          _t0GetResponse: boolean;
          _t1GetResponse: boolean;
          _t1StripLe: boolean;
          _new(card: CardImpl, channel: int): ChannelImpl;
        }
        let ChannelImpl: _ChannelImpl$$static;
        interface _ChannelImpl {
          _checkClosed(): void;
          close(): void;
          _concat(b1: byte[], b2: byte[], n2: int): byte[];
          _doTransmit(command: byte[]): byte[];
          getCard(): javax.smartcardio.Card;
          getChannelNumber(): int;
          _setChannel(com: byte[]): void;
          toString(): string;
          transmit(command: javax.smartcardio.CommandAPDU): javax.smartcardio.ResponseAPDU;
          transmit(command: java.nio.ByteBuffer, response: java.nio.ByteBuffer): int;
          _card: CardImpl;
          _channel: int;
          _isClosed: boolean;
        }
        interface ChannelImpl extends CombineTypes<[_ChannelImpl, javax.smartcardio.CardChannel]> {}
        interface _PCSC$$static extends ClassLike {
          _SCardBeginTransaction(a0: long): void;
          _SCardConnect(a0: long, a1: string, a2: int, a3: int): long;
          _SCardControl(a0: long, a1: int, a2: byte[]): byte[];
          _SCardDisconnect(a0: long, a1: int): void;
          _SCardEndTransaction(a0: long, a1: int): void;
          _SCardEstablishContext(a0: int): long;
          _SCardGetStatusChange(a0: long, a1: long, a2: int[], a3: string[]): int[];
          _SCardListReaders(a0: long): string[];
          _SCardStatus(a0: long, a1: byte[]): byte[];
          _SCardTransmit(a0: long, a1: int, a2: byte[], a3: int, a4: int): byte[];
          _checkAvailable(): void;
          toString(b: byte[]): string;
          _SCARD_EJECT_CARD: int;
          _SCARD_E_CANCELLED: int;
          _SCARD_E_CANT_DISPOSE: int;
          _SCARD_E_CARD_UNSUPPORTED: int;
          _SCARD_E_DUPLICATE_READER: int;
          _SCARD_E_INSUFFICIENT_BUFFER: int;
          _SCARD_E_INVALID_ATR: int;
          _SCARD_E_INVALID_HANDLE: int;
          _SCARD_E_INVALID_PARAMETER: int;
          _SCARD_E_INVALID_TARGET: int;
          _SCARD_E_INVALID_VALUE: int;
          _SCARD_E_NOT_READY: int;
          _SCARD_E_NOT_TRANSACTED: int;
          _SCARD_E_NO_MEMORY: int;
          _SCARD_E_NO_READERS_AVAILABLE: int;
          _SCARD_E_NO_SERVICE: int;
          _SCARD_E_NO_SMARTCARD: int;
          _SCARD_E_PCI_TOO_SMALL: int;
          _SCARD_E_PROTO_MISMATCH: int;
          _SCARD_E_READER_UNAVAILABLE: int;
          _SCARD_E_READER_UNSUPPORTED: int;
          _SCARD_E_SERVICE_STOPPED: int;
          _SCARD_E_SHARING_VIOLATION: int;
          _SCARD_E_SYSTEM_CANCELLED: int;
          _SCARD_E_TIMEOUT: int;
          _SCARD_E_UNKNOWN_CARD: int;
          _SCARD_E_UNKNOWN_READER: int;
          _SCARD_E_UNSUPPORTED_FEATURE: int;
          _SCARD_F_COMM_ERROR: int;
          _SCARD_F_INTERNAL_ERROR: int;
          _SCARD_F_UNKNOWN_ERROR: int;
          _SCARD_F_WAITED_TOO_LONG: int;
          _SCARD_LEAVE_CARD: int;
          _SCARD_RESET_CARD: int;
          _SCARD_SCOPE_GLOBAL: int;
          _SCARD_SCOPE_SYSTEM: int;
          _SCARD_SCOPE_TERMINAL: int;
          _SCARD_SCOPE_USER: int;
          _SCARD_SHARE_DIRECT: int;
          _SCARD_SHARE_EXCLUSIVE: int;
          _SCARD_SHARE_SHARED: int;
          _SCARD_STATE_ATRMATCH: int;
          _SCARD_STATE_CHANGED: int;
          _SCARD_STATE_EMPTY: int;
          _SCARD_STATE_EXCLUSIVE: int;
          _SCARD_STATE_IGNORE: int;
          _SCARD_STATE_INUSE: int;
          _SCARD_STATE_MUTE: int;
          _SCARD_STATE_PRESENT: int;
          _SCARD_STATE_UNAVAILABLE: int;
          _SCARD_STATE_UNAWARE: int;
          _SCARD_STATE_UNKNOWN: int;
          _SCARD_STATE_UNPOWERED: int;
          _SCARD_S_SUCCESS: int;
          _SCARD_UNPOWER_CARD: int;
          _SCARD_W_INSERTED_CARD: int;
          _SCARD_W_REMOVED_CARD: int;
          _SCARD_W_RESET_CARD: int;
          _SCARD_W_UNPOWERED_CARD: int;
          _SCARD_W_UNRESPONSIVE_CARD: int;
          _SCARD_W_UNSUPPORTED_CARD: int;
          _TIMEOUT_INFINITE: int;
          _WINDOWS_ERROR_INVALID_HANDLE: int;
          _WINDOWS_ERROR_INVALID_PARAMETER: int;
          _hexDigits: char[];
        }
        let PCSC: _PCSC$$static;
        interface _PCSC {
        }
        interface PCSC extends CombineTypes<[_PCSC, sun.security.smartcardio.PlatformPCSC]> {}
        interface _PCSCException$$static extends ClassLike {
          _toErrorString(code: int): string;
          _serialVersionUID: long;
          _new(code: int): PCSCException;
        }
        let PCSCException: _PCSCException$$static;
        interface _PCSCException {
          _code: int;
        }
        interface PCSCException extends CombineTypes<[_PCSCException, java.lang.Exception]> {}
        interface _PCSCTerminals$$static extends ClassLike {
          _implGetTerminal(name: string): TerminalImpl;
          _initContext(): void;
          _waitForCards(terminals: java.util.List<javax.smartcardio.CardTerminal>, timeout: long, a2: boolean): java.util.List<javax.smartcardio.CardTerminal>;
          _contextId: long;
          _terminals: java.util.Map<string,java.lang.ref.Reference<TerminalImpl>>;
          _new(): PCSCTerminals;
        }
        let PCSCTerminals: _PCSCTerminals$$static;
        interface _PCSCTerminals {
          list(state: javax.smartcardio.CardTerminals$State): java.util.List<javax.smartcardio.CardTerminal>;
          waitForChange(timeout: long): boolean;
          _stateMap: java.util.Map<string,PCSCTerminals$ReaderState>;
        }
        interface PCSCTerminals extends CombineTypes<[_PCSCTerminals, javax.smartcardio.CardTerminals]> {}
        interface _PCSCTerminals$ReaderState$$static extends ClassLike {
          _present(state: int): boolean;
          _new(): PCSCTerminals$ReaderState;
        }
        let PCSCTerminals$ReaderState: _PCSCTerminals$ReaderState$$static;
        interface _PCSCTerminals$ReaderState {
          _get(): int;
          _isInsertion(): boolean;
          _isRemoval(): boolean;
          _update(newState: int): void;
          _current: int;
          _previous: int;
        }
        interface PCSCTerminals$ReaderState extends CombineTypes<[_PCSCTerminals$ReaderState, java.lang.Object]> {}
        interface _PlatformPCSC$$static extends ClassLike {
          _loadLibrary(): java.lang.Throwable;
          _SCARD_ABSENT: int;
          _SCARD_NEGOTIABLE: int;
          _SCARD_POWERED: int;
          _SCARD_PRESENT: int;
          _SCARD_PROTOCOL_RAW: int;
          _SCARD_PROTOCOL_T0: int;
          _SCARD_PROTOCOL_T1: int;
          _SCARD_SPECIFIC: int;
          _SCARD_SWALLOWED: int;
          _SCARD_UNKNOWN: int;
          _initException: java.lang.Throwable;
          _new(): PlatformPCSC;
        }
        let PlatformPCSC: _PlatformPCSC$$static;
        interface _PlatformPCSC {
        }
        interface PlatformPCSC extends CombineTypes<[_PlatformPCSC, java.lang.Object]> {}
        interface _SunPCSC$$static extends ClassLike {
          _serialVersionUID: long;
          new(): SunPCSC;
        }
        let SunPCSC: _SunPCSC$$static;
        interface _SunPCSC {
        }
        interface SunPCSC extends CombineTypes<[_SunPCSC, java.security.Provider]> {}
        interface _SunPCSC$Factory$$static extends ClassLike {
          new(obj: any): SunPCSC$Factory;
        }
        let SunPCSC$Factory: _SunPCSC$Factory$$static;
        interface _SunPCSC$Factory {
          _engineTerminals(): javax.smartcardio.CardTerminals;
        }
        interface SunPCSC$Factory extends CombineTypes<[_SunPCSC$Factory, javax.smartcardio.TerminalFactorySpi]> {}
        interface _SunPCSC$ProviderService$$static extends ClassLike {
          _new(p: java.security.Provider, type: string, algo: string, cn: string): SunPCSC$ProviderService;
        }
        let SunPCSC$ProviderService: _SunPCSC$ProviderService$$static;
        interface _SunPCSC$ProviderService {
          newInstance(ctrParamObj: any): any;
        }
        interface SunPCSC$ProviderService extends CombineTypes<[_SunPCSC$ProviderService, java.security.Provider$Service]> {}
        interface _TerminalImpl$$static extends ClassLike {
          _new(contextId: long, a1: string): TerminalImpl;
        }
        let TerminalImpl: _TerminalImpl$$static;
        interface _TerminalImpl {
          connect(protocol: string): javax.smartcardio.Card;
          getName(): string;
          isCardPresent(): boolean;
          toString(): string;
          _waitForCard(wantPresent: boolean, timeout: long): boolean;
          waitForCardAbsent(timeout: long): boolean;
          waitForCardPresent(timeout: long): boolean;
          _card: CardImpl;
          _contextId: long;
          _name: string;
        }
        interface TerminalImpl extends CombineTypes<[_TerminalImpl, javax.smartcardio.CardTerminal]> {}
      }
    }
  }
}
