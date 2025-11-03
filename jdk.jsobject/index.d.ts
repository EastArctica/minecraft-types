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
  module netscape {
    module javascript {
      interface _JSException$$static extends ClassLike {
        _serialVersionUID: long;
        new(): JSException;
        new(s: string): JSException;
        new(t: java.lang.Throwable): JSException;
      }
      let JSException: _JSException$$static;
      interface _JSException {
      }
      interface JSException extends CombineTypes<[_JSException, java.lang.RuntimeException]> {}
      interface _JSObject$$static extends ClassLike {
        _new(): JSObject;
      }
      let JSObject: _JSObject$$static;
      interface _JSObject {
        call(a0: string, a1: any[]): any;
        call(a0: string, ...a1: any[]): any;
        eval(a0: string): any;
        getMember(a0: string): any;
        getSlot(a0: int): any;
        removeMember(a0: string): void;
        setMember(a0: string, a1: any): void;
        setSlot(a0: int, a1: any): void;
      }
      interface JSObject extends CombineTypes<[_JSObject, java.lang.Object]> {}
    }
  }
}
