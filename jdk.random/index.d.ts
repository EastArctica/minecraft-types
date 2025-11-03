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
    module random {
      interface _L128X1024MixRandom$$static extends ClassLike {
        _ML: long;
        _N: int;
        _defaultGen: java.util.concurrent.atomic.AtomicLong;
        new(ah: long, a1: long, al: long, a3: long, sh: long, a5: long, sl: long, a7: long, x0: long, a9: long, x1: long, a11: long, x2: long, a13: long, x3: long, a15: long, x4: long, a17: long, x5: long, a19: long): L128X1024MixRandom;
        new(seed: long): L128X1024MixRandom;
        new(): L128X1024MixRandom;
        new(seed: byte[]): L128X1024MixRandom;
      }
      let L128X1024MixRandom: _L128X1024MixRandom$$static;
      interface _L128X1024MixRandom {
        nextLong(): long;
        split(source: java.util.random.RandomGenerator$SplittableGenerator, brine: long): java.util.random.RandomGenerator$SplittableGenerator;
        _ah: long;
        _al: long;
        _p: int;
        _sh: long;
        _sl: long;
        _x: long[];
      }
      interface L128X1024MixRandom extends CombineTypes<[_L128X1024MixRandom, jdk.internal.util.random.RandomSupport$AbstractSplittableWithBrineGenerator]> {}
      interface _L128X128MixRandom$$static extends ClassLike {
        _ML: long;
        _defaultGen: java.util.concurrent.atomic.AtomicLong;
        new(ah: long, a1: long, al: long, a3: long, sh: long, a5: long): L128X128MixRandom;
        new(seed: long): L128X128MixRandom;
        new(): L128X128MixRandom;
        new(seed: byte[]): L128X128MixRandom;
      }
      let L128X128MixRandom: _L128X128MixRandom$$static;
      interface _L128X128MixRandom {
        nextLong(): long;
        split(source: java.util.random.RandomGenerator$SplittableGenerator, brine: long): java.util.random.RandomGenerator$SplittableGenerator;
        _ah: long;
        _al: long;
        _sh: long;
        _sl: long;
        _x0: long;
        _x1: long;
      }
      interface L128X128MixRandom extends CombineTypes<[_L128X128MixRandom, jdk.internal.util.random.RandomSupport$AbstractSplittableWithBrineGenerator]> {}
      interface _L128X256MixRandom$$static extends ClassLike {
        _EQUIDISTRIBUTION: int;
        _ML: long;
        _defaultGen: java.util.concurrent.atomic.AtomicLong;
        new(ah: long, a1: long, al: long, a3: long, sh: long, a5: long, sl: long, a7: long): L128X256MixRandom;
        new(seed: long): L128X256MixRandom;
        new(): L128X256MixRandom;
        new(seed: byte[]): L128X256MixRandom;
      }
      let L128X256MixRandom: _L128X256MixRandom$$static;
      interface _L128X256MixRandom {
        nextLong(): long;
        split(source: java.util.random.RandomGenerator$SplittableGenerator, brine: long): java.util.random.RandomGenerator$SplittableGenerator;
        _ah: long;
        _al: long;
        _sh: long;
        _sl: long;
        _x0: long;
        _x1: long;
        _x2: long;
        _x3: long;
      }
      interface L128X256MixRandom extends CombineTypes<[_L128X256MixRandom, jdk.internal.util.random.RandomSupport$AbstractSplittableWithBrineGenerator]> {}
      interface _L32X64MixRandom$$static extends ClassLike {
        _M: int;
        _defaultGen: java.util.concurrent.atomic.AtomicLong;
        new(a: int, s: int, x0: int, x1: int): L32X64MixRandom;
        new(seed: long): L32X64MixRandom;
        new(): L32X64MixRandom;
        new(seed: byte[]): L32X64MixRandom;
      }
      let L32X64MixRandom: _L32X64MixRandom$$static;
      interface _L32X64MixRandom {
        nextInt(): int;
        nextLong(): long;
        split(source: java.util.random.RandomGenerator$SplittableGenerator, brine: long): java.util.random.RandomGenerator$SplittableGenerator;
        _a: int;
        _s: int;
        _x0: int;
        _x1: int;
      }
      interface L32X64MixRandom extends CombineTypes<[_L32X64MixRandom, jdk.internal.util.random.RandomSupport$AbstractSplittableWithBrineGenerator]> {}
      interface _L64X1024MixRandom$$static extends ClassLike {
        _M: long;
        _N: int;
        _defaultGen: java.util.concurrent.atomic.AtomicLong;
        new(a: long, a1: long, s: long, a3: long, x0: long, a5: long, x1: long, a7: long, x2: long, a9: long, x3: long, a11: long, x4: long, a13: long, x5: long, a15: long, x6: long, a17: long): L64X1024MixRandom;
        new(seed: long): L64X1024MixRandom;
        new(): L64X1024MixRandom;
        new(seed: byte[]): L64X1024MixRandom;
      }
      let L64X1024MixRandom: _L64X1024MixRandom$$static;
      interface _L64X1024MixRandom {
        nextLong(): long;
        split(source: java.util.random.RandomGenerator$SplittableGenerator, brine: long): java.util.random.RandomGenerator$SplittableGenerator;
        _a: long;
        _p: int;
        _s: long;
        _x: long[];
      }
      interface L64X1024MixRandom extends CombineTypes<[_L64X1024MixRandom, jdk.internal.util.random.RandomSupport$AbstractSplittableWithBrineGenerator]> {}
      interface _L64X128MixRandom$$static extends ClassLike {
        _M: long;
        _defaultGen: java.util.concurrent.atomic.AtomicLong;
        new(a: long, a1: long, s: long, a3: long): L64X128MixRandom;
        new(seed: long): L64X128MixRandom;
        new(): L64X128MixRandom;
        new(seed: byte[]): L64X128MixRandom;
      }
      let L64X128MixRandom: _L64X128MixRandom$$static;
      interface _L64X128MixRandom {
        nextLong(): long;
        split(source: java.util.random.RandomGenerator$SplittableGenerator, brine: long): java.util.random.RandomGenerator$SplittableGenerator;
        _a: long;
        _s: long;
        _x0: long;
        _x1: long;
      }
      interface L64X128MixRandom extends CombineTypes<[_L64X128MixRandom, jdk.internal.util.random.RandomSupport$AbstractSplittableWithBrineGenerator]> {}
      interface _L64X128StarStarRandom$$static extends ClassLike {
        _M: long;
        _defaultGen: java.util.concurrent.atomic.AtomicLong;
        new(a: long, a1: long, s: long, a3: long): L64X128StarStarRandom;
        new(seed: long): L64X128StarStarRandom;
        new(): L64X128StarStarRandom;
        new(seed: byte[]): L64X128StarStarRandom;
      }
      let L64X128StarStarRandom: _L64X128StarStarRandom$$static;
      interface _L64X128StarStarRandom {
        nextLong(): long;
        split(source: java.util.random.RandomGenerator$SplittableGenerator, brine: long): java.util.random.RandomGenerator$SplittableGenerator;
        _a: long;
        _s: long;
        _x0: long;
        _x1: long;
      }
      interface L64X128StarStarRandom extends CombineTypes<[_L64X128StarStarRandom, jdk.internal.util.random.RandomSupport$AbstractSplittableWithBrineGenerator]> {}
      interface _L64X256MixRandom$$static extends ClassLike {
        _M: long;
        _defaultGen: java.util.concurrent.atomic.AtomicLong;
        new(a: long, a1: long, s: long, a3: long, x0: long, a5: long): L64X256MixRandom;
        new(seed: long): L64X256MixRandom;
        new(): L64X256MixRandom;
        new(seed: byte[]): L64X256MixRandom;
      }
      let L64X256MixRandom: _L64X256MixRandom$$static;
      interface _L64X256MixRandom {
        nextLong(): long;
        split(source: java.util.random.RandomGenerator$SplittableGenerator, brine: long): java.util.random.RandomGenerator$SplittableGenerator;
        _a: long;
        _s: long;
        _x0: long;
        _x1: long;
        _x2: long;
        _x3: long;
      }
      interface L64X256MixRandom extends CombineTypes<[_L64X256MixRandom, jdk.internal.util.random.RandomSupport$AbstractSplittableWithBrineGenerator]> {}
      interface _Xoroshiro128PlusPlus$$static extends ClassLike {
        _GROUP: string;
        _JUMP_TABLE: long[];
        _LEAP_TABLE: long[];
        _defaultGen: java.util.concurrent.atomic.AtomicLong;
        new(x0: long, a1: long): Xoroshiro128PlusPlus;
        new(seed: long): Xoroshiro128PlusPlus;
        new(): Xoroshiro128PlusPlus;
        new(seed: byte[]): Xoroshiro128PlusPlus;
      }
      let Xoroshiro128PlusPlus: _Xoroshiro128PlusPlus$$static;
      interface _Xoroshiro128PlusPlus {
        copy(): Xoroshiro128PlusPlus;
        copy(): java.util.random.RandomGenerator$LeapableGenerator;
        copy(): java.util.random.RandomGenerator$JumpableGenerator;
        jump(): void;
        _jumpAlgorithm(table: long[]): void;
        jumpDistance(): double;
        leap(): void;
        leapDistance(): double;
        nextLong(): long;
        _x0: long;
        _x1: long;
      }
      interface Xoroshiro128PlusPlus extends CombineTypes<[_Xoroshiro128PlusPlus, java.util.random.RandomGenerator$LeapableGenerator, java.lang.Object]> {}
      interface _Xoshiro256PlusPlus$$static extends ClassLike {
        _DEFAULT_GEN: java.util.concurrent.atomic.AtomicLong;
        _JUMP_TABLE: long[];
        _LEAP_TABLE: long[];
        new(x0: long, a1: long, x1: long, a3: long): Xoshiro256PlusPlus;
        new(seed: long): Xoshiro256PlusPlus;
        new(): Xoshiro256PlusPlus;
        new(seed: byte[]): Xoshiro256PlusPlus;
      }
      let Xoshiro256PlusPlus: _Xoshiro256PlusPlus$$static;
      interface _Xoshiro256PlusPlus {
        copy(): Xoshiro256PlusPlus;
        copy(): java.util.random.RandomGenerator$LeapableGenerator;
        copy(): java.util.random.RandomGenerator$JumpableGenerator;
        jump(): void;
        _jumpAlgorithm(table: long[]): void;
        jumpDistance(): double;
        leap(): void;
        leapDistance(): double;
        nextLong(): long;
        _x0: long;
        _x1: long;
        _x2: long;
        _x3: long;
      }
      interface Xoshiro256PlusPlus extends CombineTypes<[_Xoshiro256PlusPlus, java.util.random.RandomGenerator$LeapableGenerator, java.lang.Object]> {}
    }
  }
}
