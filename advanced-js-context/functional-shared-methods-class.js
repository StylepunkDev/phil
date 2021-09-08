// // Class

// function Phone(number) {
//   var result = {};
//   result.number = number;
//   Object.assign(result, phoneMethods);
//   return result;
// }

// var phoneMethods = {};
// phoneMethods.dial = function (number) {
//   console.log('Dialing', number);
// };

// var motorola = Phone(695323871);

// // Sub-class

// function SmartPhone(number, email) {
//   // let res = Object.create(Phone(number));
//   let res = Phone(number);
//   res.email = email;
//   Object.assign(res, SmartPhoneMethods);
//   return res;
// }

// var SmartPhoneMethods = {};

// SmartPhoneMethods.sendEmail = function (email) {
//   console.log('Emailing ', email);
// };

// let mySmartPhone = SmartPhone(813285,'myemail@gmail.com');

// motorola.dial(56456450)
// mySmartPhone.sendEmail('myfriend@gmail.com');

// pseudo-classical, prototype does not need to be set

function Phone(number) {
  // var this = Object.create(Phone.prototype);
  this.number = number;
  // return this;
}

Phone.prototype.dial = function (number) {
  console.log('Dialing', number);
};

var motorola = new Phone(695323871);

// Sub-class

function SmartPhone(number, email) {
  // var this = Object.create(SmartPhone.prototype);
  Phone.call(this, number);
  this.email = email;
  // return this;
}

SmartPhone.prototype = Object.create(Phone.prototype);
// Set child constructor as the same as itself
SmartPhone.prototype.constructor = SmartPhone;

SmartPhone.prototype.sendEmail = function (email) {
  console.log('Emailing', email);
};

var iPhone = new SmartPhone(642503917, 'jack@apple.com');

// es6

// class Phone {
//   constructor(number) {
//     this.number = number;
//   }

//   dial(num) {
//     console.log('dialing', num);
//   }
// }

// class SmartPhone extends Phone {
//   constructor(number, email) {
//     super(number);
//     this.email = email;
//   }

//   sendEmail(email) {
//     console.log('Emailing', email);
//   }
// }

// let mySmartPhone = new SmartPhone(722451, 'myemail@onjb');

// mySmartPhone.dial(456451684);
// mySmartPhone.sendEmail('oifnewivwen');
