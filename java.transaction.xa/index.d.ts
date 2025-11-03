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
    module transaction {
      module xa {
        interface _XAException$$static extends ClassLike {
          readonly XAER_ASYNC: int;
          readonly XAER_DUPID: int;
          readonly XAER_INVAL: int;
          readonly XAER_NOTA: int;
          readonly XAER_OUTSIDE: int;
          readonly XAER_PROTO: int;
          readonly XAER_RMERR: int;
          readonly XAER_RMFAIL: int;
          readonly XA_HEURCOM: int;
          readonly XA_HEURHAZ: int;
          readonly XA_HEURMIX: int;
          readonly XA_HEURRB: int;
          readonly XA_NOMIGRATE: int;
          readonly XA_RBBASE: int;
          readonly XA_RBCOMMFAIL: int;
          readonly XA_RBDEADLOCK: int;
          readonly XA_RBEND: int;
          readonly XA_RBINTEGRITY: int;
          readonly XA_RBOTHER: int;
          readonly XA_RBPROTO: int;
          readonly XA_RBROLLBACK: int;
          readonly XA_RBTIMEOUT: int;
          readonly XA_RBTRANSIENT: int;
          readonly XA_RDONLY: int;
          readonly XA_RETRY: int;
          _serialVersionUID: long;
          new(): XAException;
          new(s: string): XAException;
          new(errcode: int): XAException;
        }
        let XAException: _XAException$$static;
        interface _XAException {
          errorCode: int;
        }
        interface XAException extends CombineTypes<[_XAException, java.lang.Exception]> {}
        interface _XAResource$$static extends ClassLike {
          readonly TMENDRSCAN: int;
          readonly TMFAIL: int;
          readonly TMJOIN: int;
          readonly TMNOFLAGS: int;
          readonly TMONEPHASE: int;
          readonly TMRESUME: int;
          readonly TMSTARTRSCAN: int;
          readonly TMSUCCESS: int;
          readonly TMSUSPEND: int;
          readonly XA_OK: int;
          readonly XA_RDONLY: int;
        }
        let XAResource: _XAResource$$static;
        interface _XAResource {
          commit(a0: Xid, a1: boolean): void;
          end(a0: Xid, a1: int): void;
          forget(a0: Xid): void;
          getTransactionTimeout(): int;
          isSameRM(a0: XAResource): boolean;
          prepare(a0: Xid): int;
          recover(a0: int): Xid[];
          rollback(a0: Xid): void;
          setTransactionTimeout(a0: int): boolean;
          start(a0: Xid, a1: int): void;
        }
        interface XAResource extends CombineTypes<[_XAResource, java.lang.Object]> {}
        interface _Xid$$static extends ClassLike {
          readonly MAXBQUALSIZE: int;
          readonly MAXGTRIDSIZE: int;
        }
        let Xid: _Xid$$static;
        interface _Xid {
          getBranchQualifier(): byte[];
          getFormatId(): int;
          getGlobalTransactionId(): byte[];
        }
        interface Xid extends CombineTypes<[_Xid, java.lang.Object]> {}
      }
    }
  }
}
