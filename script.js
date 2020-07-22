function Transport(model, maxSpeed) {
  this.model = model;
  this.maxSpeed = maxSpeed;
  this.getTransportInformation = function() {
    return 'Модель:' + ' ' + this.model + ' ' + 'Скорость:' + ' ' + this.maxSpeed;
  }
}

function Car() {
  Transport.apply(this, arguments);
  var getTransport = this.getTransportInformation;
  this.getTransportInformation = function() {
    getTransport.call(this);
    var type = 'Автомобиль';
    return type + ' ' + 'Модель:' + ' ' + this.model + ' ' + 'Скорость:' + ' ' + this.maxSpeed;
  }
}

function Ship() {
  Transport.apply(this, arguments);
  var getTransport = this.getTransportInformation;
  this.getTransportInformation = function() {
    getTransport.call(this);
    var type = 'Корабль';
    return type + ' ' + 'Модель:' + ' ' + this.model + ' ' + 'Скорость:' + ' ' + this.maxSpeed;
  }
}

function Plane() {
  Transport.apply(this, arguments);
  var getTransport = this.getTransportInformation;
  this.getTransportInformation = function() {
    getTransport.call(this);
    var type = 'Самолёт';
    return type + ' ' + 'Модель:' + ' ' + this.model + ' ' + 'Скорость:' + ' ' + this.maxSpeed;
  }
}

var car = new Car('BMW', '240 km/h');
var ship = new Ship('Linkorn', '50 km/h');
var plane = new Plane('Airbus', '700 km/h');

console.log(car.getTransportInformation());
console.log(ship.getTransportInformation());
console.log(plane.getTransportInformation());



