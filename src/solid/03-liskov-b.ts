/*
    Forma que había pensado inicialmente, 
    para este caso es mejor ya que todos las implementaciones
    seran la misma en las diferentes clases. Las clase abstracta
    la podemos usar si no necesitamos la misma implementación.
*/
// export class Cars {
//   constructor(private numberOfSeats: number) {}

//   getNumberOfSeats() {
//     return this.numberOfSeats;
//   }
// }

// export class Tesla extends Cars {}

// export class Audi extends Cars {}

// export class Toyota extends Cars {}

// export class Honda extends Cars {}

export abstract class Vehicle {
  abstract getNumberOfSeats(): number;
}

export class Tesla extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }
  getNumberOfSeats() {
    return this.numberOfSeats;
  }
}

export class Audi extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }
  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

export class Toyota extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }
  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

export class Honda extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }
  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}
