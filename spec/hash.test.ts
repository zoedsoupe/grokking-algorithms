import { HashTable } from "../ch5/hash";

describe("test hash table", () => {
  it("should perform basic operations on a hash table", () => {
    const hash = new HashTable();

    hash.set("myName", "Zoey");
    hash.set("add", (a: number, b: number) => a + b);

    expect(hash.get("myName")).toEqual("Zoey");
    expect(hash.get("add")).toBeInstanceOf(Function);
  });

  it("should resize the hash table", () => {
    const hash = new HashTable();

    for (let i = 0; i <= 2030; i++) {
      hash.set(`key${i}`, `value${i}`);
    }

    expect(hash.length()).toBeGreaterThan(2003);
  });
});
