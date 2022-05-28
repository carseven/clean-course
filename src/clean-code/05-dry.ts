type Size = "" | "S" | "M" | "L" | "XL" | "XXL";

class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}

  isProductValid(): void | never {
    for (const key in this) {
      const property = this[key];
      switch (typeof property) {
        case "string":
          if ((<string>(<unknown>property)).length <= 0) {
            throw Error(`Property ${key} ${property} is empty`);
          }
          break;
        case "number":
          if (<number>(<unknown>property) <= 0) {
            throw Error(`Property ${key} ${property} is zero or negative`);
          }
          break;
        default:
          throw Error(`Property ${key} ${typeof property} is not supported`);
      }
    }
  }

  toString() {
    this.isProductValid();

    return `${this.name} ${this.price} ${this.size}`;
  }
}

(() => {
  const product = new Product("iPhone");
  console.log(product.toString());
})();
