class HashTable {
  constructor(size) {
    this.data = new Array(size);
    this.private = "SUPER_SECRET";
  }

  /**
   * "hashes the key"
   * @param {string} key
   * @private
   */
  #hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  /**
   * sets properties on the hash table
   * @param {*} key
   * @param {*} value
   * @public
   */
  set(key, value) {
    let address = this.#hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    // console.table(this.data);
  }

  /**
   * gets a 'key' property from the hash table
   * @param {String} key
   * @public
   */
  get(key) {
    let address = this.#hash(key);
    const dataBucket = this.data[address];
    if (dataBucket) {
      // No collision, returns the value
      if (dataBucket.length === 1) {
        return dataBucket[1];
      }

      // Collison: find index of the key in the bucket
      const keyIdx = dataBucket.findIndex((el) => el[0] === key);

      // Key found in list
      if (keyIdx !== -1) {
        return dataBucket[keyIdx][1];
      }
      // Key not found in list
      else {
        return `Error: cannot find property '${key}' in the hash table`;
      }
    } else {
      return `Error: cannot find property '${key}' in the hash table`;
    }
  }

  keys() {
    const keysArr = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].length === 1) {
        keysArr.push(this.data[i][0][0]);
      } else if (this.data[i].length > 1) {
        const innerKeysArr = [];
        for (let j = 0; j < this.data[i].length; j++) {
          innerKeysArr.push(this.data[i][j][0]);
        }
        keysArr.push(...innerKeysArr);
      }
    }
    return keysArr;
  }
}

const customHashTable = new HashTable(2);
customHashTable.set("grapes", 10000);
customHashTable.set("apples", 25);
customHashTable.set("oranges", 10);
customHashTable.set("agbon", 2);

console.table(customHashTable.get("grapes"));
console.log(customHashTable.keys());
