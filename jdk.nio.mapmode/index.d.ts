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
    module nio {
      module mapmode {
        interface _ExtendedMapMode$$static extends ClassLike {
          readonly READ_ONLY_SYNC: java.nio.channels.FileChannel$MapMode;
          readonly READ_WRITE_SYNC: java.nio.channels.FileChannel$MapMode;
        }
        let ExtendedMapMode: _ExtendedMapMode$$static;
        interface _ExtendedMapMode {
        }
        interface ExtendedMapMode extends CombineTypes<[_ExtendedMapMode, java.lang.Object]> {}
      }
    }
  }
}
