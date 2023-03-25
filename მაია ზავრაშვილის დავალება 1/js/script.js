// დავალება:

// 1) შექმენით მასივი,რომელიც შეიცავს როგორც დადებით ასევე უარყოფით რიცხვებს.გაფილტრეთ მოცემული მასივი შემდეგ კი დაითვალეთ მხოლოდ დადებითი რიცხვების ჯამი. გამოიყენეთ მასივის filter და reduce მეთოდები.

const numbers = [2, 5, -7, 0, -3, 8, -10, 4];
const positiveNumbers = numbers.filter((num) => num > 0);
const sumOfPositiveNumbers = positiveNumbers.reduce(
  (acc, curr) => acc + curr,
  0
);

console.log(sumOfPositiveNumbers); // Output: 19

// 2)შექმენით მასივი,რომელიც შედგება სტრინგებისგან(რომლებიც შეიძლება განმეორდეს). დაწერეთ კოდი,რომელიც დაითვლის რამდენჯერ მეორდება თითოეული სტრინგი მასივში და დააბრუნეთ ობიექტის სახით, მაგ: { a:1 , b: 6, c : 2}. გამოიყენეთ მასივის reduce მეთოდი.
const strings = ["a", "b", "c", "a", "b", "b", "c", "a", "b", "c", "a", "a"];

const stringCounts = strings.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});

console.log(stringCounts); // Output: {a: 5, b: 4, c: 3}

// 3) შექმენით კლასი car, რომელსაც ექნება 4 ფროფერთი (brand,model, speed,motion).  ბრენდი და მოდელი კლასს კონსტრუქტორში გადაეცემა, ხოლო speed კონსტრუქტორში დიფოლტად ინიციალიზდება და მისი მნიშვნელობა არის 0.ასევე დიფოლტად ინიციალიზდება motion,რომლის საწყისი მნიშვნელობაა “The car is not moving”.
// კლასს უნდა ჰქონდეს შემდეგი მეთოდები:...

class Car {
  constructor(brand, model, speed = 0) {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.motion = "The car is not moving";
  }

  check_motion() {
    if (this.speed > 0) {
      this.motion = "the car is moving";
    } else {
      this.motion = "the car is stopped";
    }
  }

  accelerate(speed) {
    this.speed += speed;
    this.check_motion();
  }

  brake(speed) {
    this.speed = Math.max(0, this.speed - speed);
    this.check_motion();
  }

  emergency_brake() {
    this.speed = 0;
    this.check_motion();
  }

  status() {
    return `Vehicle ${this.brand} ${this.model} is moving at ${this.speed} km/h and status is ${this.motion}.`;
  }
}

const myCar = new Car("Ford", "Mustang");

console.log(myCar.status());

myCar.accelerate(80);
console.log(myCar.status());

myCar.brake(20);
console.log(myCar.status());

myCar.emergency_brake();
console.log(myCar.status());

// 4) შექმენით ფუნქცია addAsync,რომელიც იღებს ორ პარამეტრს და აბრუნებს პრომისს. თუ ორივე პარამეტრი გადაეცემა(undefined არ არის და ორივე პარამეტრი რიცხვია) პრომისი უნდა დარიზოლვდეს(resolve), წინააღმდეგ შემთხვევაში დარიჯექთდეს(reject).
function addAsync(a, b) {
  return new Promise((resolve, reject) => {
    if (
      typeof a === "undefined" ||
      typeof b === "undefined" ||
      typeof a !== "number" ||
      typeof b !== "number"
    ) {
      reject(new Error("Both parameters must be defined numbers."));
    } else {
      resolve(a + b);
    }
  });
}

//   გამოიძახეთ ფუნქცია რამდენიმეჯერ, სხვადასხვა პარამეტრით და კონსოლში გამოიტანეთ შედეგი.

addAsync(2, 3)
  .then((result) => console.log(result)) // Output: 5
  .catch((error) => console.error(error.message));

addAsync(4)
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message));

addAsync("a", "b")
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message));

addAsync(10, null)
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message));
