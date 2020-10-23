const hashStrintToInt = (s: string, tableSize: number): number =>
  s
    .split('')
    .reduce((acc, ch) => (acc = (13 * acc * ch.charCodeAt(0)) % tableSize), 17);

export class HashTable {
  private table: any[][] = new Array(2003);
  private numItems = 0;
  private loadFactor = this.numItems / this.table.length;

  private resize(): void {
    const newTable: any[][] = new Array(this.table.length * 2);

    this.table.forEach((item) => {
      if (item) {
        item.forEach(([key, value]) => {
          const idx = hashStrintToInt(key, newTable.length);
          newTable[idx]
            ? newTable.push([key, value])
            : (newTable[idx] = [[key, value]]);
        });
      }
    });

    this.table = newTable;
  }

  set(key: string, value: any): void {
    this.numItems++;

    if (this.loadFactor >= 0.8) this.resize();

    const idx = hashStrintToInt(key, this.table.length);
    this.table[idx]
      ? this.table.push([key, value])
      : (this.table[idx] = [[key, value]]);
  }

  get(key: string): any {
    const idx = hashStrintToInt(key, this.table.length);

    if (!this.table[idx]) return null;

    return this.table[idx].find((x) => x[0] === key)[1];
  }

  length(): number {
    return this.table.length;
  }
}
