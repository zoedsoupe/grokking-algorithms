export type LazyT<A> = () => A;

export type ListT<A> = LazyT<
  {
    head: LazyT<A>;
    tail: ListT<A>;
  } | null
>;

export namespace Lazy {
  export function sum(a: LazyT<number>, b: LazyT<number>): LazyT<number> {
    return () => a() + b();
  }

  export function avg(a: LazyT<number>, b: LazyT<number>): LazyT<number> {
    return () => (a() + b()) / 2;
  }

  export function and(a: LazyT<boolean>, b: LazyT<boolean>): LazyT<boolean> {
    return () => (!a() ? false : b());
  }

  export function or(a: LazyT<boolean>, b: LazyT<boolean>): LazyT<boolean> {
    return () => (a() ? true : b());
  }

  export function trace<A>(x: LazyT<A>, message: string): LazyT<A> {
    return () => {
      console.log(message);
      return x();
    };
  }
}

export namespace List {
  // List helpers
  export function toList<A>(xs: A[]): ListT<A> {
    return () => {
      if (xs.length === 0) return null;

      return {
        head: () => xs[0],
        tail: toList(xs.slice(1)),
      };
    };
  }

  export function range(begin: LazyT<number>): ListT<number> {
    return () => {
      let x = begin();
      return {
        head: () => x,
        tail: range(() => x + 1),
      };
    };
  }

  export function foldr<A, B>(
    f: (a: A, b: B) => LazyT<B>,
    acc: LazyT<B>,
    xs: ListT<A>,
  ): LazyT<B> {
    const pair = xs();

    if (pair === null) return acc;

    const x = pair.head();

    return foldr(f, f(x, acc()), pair.tail);
  }

  export function hd<A>(xs: ListT<A>): LazyT<A> | null {
    const pair = xs();

    if (pair === null) return null;

    return pair.head;
  }

  export function tail<A>(xs: ListT<A>): ListT<A> {
    const pair = xs();

    if (pair === null) return () => null;

    return pair.tail;
  }

  export function take<A>(n: LazyT<number>, xs: ListT<A>): ListT<A> {
    return () => {
      const m = n();
      const pair = xs();
      if (m > 0 && pair !== null) {
        return {
          head: pair.head,
          tail: take(() => m - 1, pair.tail),
        };
      }
      return null;
    };
  }

  export function length<A>(xs: ListT<A>): LazyT<number> {
    return l(xs, () => 0);
  }

  const l = <A>(xs: ListT<A>, acc: LazyT<number>): LazyT<number> => {
    const pair = xs();

    if (pair === null) return acc;

    return l(xs, () => acc() + 1);
  };

  export function filter<A>(f: (x: A) => boolean, xs: ListT<A>): ListT<A> {
    return () => {
      const pair = xs();
      if (pair === null) return null;

      const x = pair.head();
      if (f(x)) {
        return {
          head: () => x,
          tail: filter(f, pair.tail),
        };
      }

      return filter(f, pair.tail)();
    };
  }

  export function map<A, B>(f: (a: A) => B, xs: ListT<A>): ListT<B> {
    return () => {
      const pair = xs();

      if (pair === null) return null;

      return {
        head: () => f(pair.head()),
        tail: map(f, pair.tail),
      };
    };
  }

  export function printList<A>(xs: ListT<A>): void {
    const pair = xs();
    if (pair === null) return;

    console.log(pair.head());
    return printList(pair.tail);
  }
}
