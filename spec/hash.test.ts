import { HashTable } from "../src/ch5/hash";
import { assertGreaterThan } from "./assertions.ts";
import { assertStrictEquals } from "https://deno.land/std@0.92.0/testing/asserts.ts";

Deno.test("test hash table", () => {
  Deno.test("should perform basic operations on a hash table", () => {
    const hash = HashTable.empty();

    const hash2 = hash.set("myName", "Zoey");
    const hash3 = hash2.set("add", (a: number, b: number) => a + b);

    expect(hash.get("myName")).toEqual("Zoey");

    assertStrictEquals(hash3.get("myName")(), "Zoey");

    if (!(hash.get("add")() instanceof Function)) {
      const msg =
        `actual: "${actual}" expected to be instance of : "${expected}"`;
      throw new AssertionError(msg);
    }
  });

  Deno.test("should resize the hash table", () => {
    let hash = HashTable.empty();

    for (let i = 0; i <= 2030; i++) {
      hash = hash.set(`key${i}`, `value${i}`);
    }

    assertGreaterThan(hash.length()(), 2003);
  });
});
