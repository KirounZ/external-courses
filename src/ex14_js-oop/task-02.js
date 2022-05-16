class ElectricalDevices {
  statusOnOff = false

  constructor(deviceName, devicePower) {
    this.deviceName = deviceName;
    this.devicePower = devicePower;
  }

  powerOn() {
    this.statusOnOff = true;
    console.log('Устройство включено в розетку');
  }

  powerOff() {
    this.statusOnOff = false;
    console.log('Устройство выключено');
  }

  statusOnOffCheck() {
    if (this.statusOnOff) {
      console.log('Устройство включено');
    } else {
      console.log('Устройство выключено');
    }
  }
}

class LowPowerDevices extends ElectricalDevices {
  static classDevice() {
    console.log('Это устройство малой мощности');
  }
}

class AveragePowerDevices extends ElectricalDevices {
  static classDevice() {
    console.log('Это устройство средней мощности');
  }
}

class HighPowerDevices extends ElectricalDevices {
  static classDevice() {
    console.log('Это устройство высокой мощности');
  }
}

class Room {
  allDeviceInRoom = [];

  numDevice = 0;

  constructor(roomName) {
    this.roomName = roomName;
  }

  addNewDevices(deviceName, devicePower) {
    this.deviceName = deviceName;
    this.devicePower = devicePower;

    if (devicePower < 800) {
      this.allDeviceInRoom[this.numDevice] = new LowPowerDevices(deviceName, devicePower);
    }

    if (devicePower >= 800 && devicePower <= 1400) {
      this.allDeviceInRoom[this.numDevice] = new AveragePowerDevices(deviceName, devicePower);
    }

    if (devicePower > 1400) {
      this.allDeviceInRoom[this.numDevice] = new HighPowerDevices(deviceName, devicePower);
    }

    this.numDevice += 1;
    console.log(`Добавлено устройство: ${deviceName} с мощностью ${devicePower} Вт`);
  }

  powerCalculation() {
    let sum = 0;
    for (let i = 0; i < this.allDeviceInRoom.length; i += 1) {
      sum += this.allDeviceInRoom[i].devicePower;
    }

    console.log(`Потребляемая мощность в комнате ${this.roomName} составляет ${sum} Вт`);

    return sum;
  }

  searchDevice(searchName) {
    for (let i = 0; i < this.allDeviceInRoom.length; i += 1) {
      if (this.allDeviceInRoom[i].deviceName === searchName) {
        console.log(`Устройство найдено. Имя устройства - ${this.allDeviceInRoom[i].deviceName}, потребляемая мощность ${this.allDeviceInRoom[i].devicePower}`);
      }
    }
  }
}

const kitchen = new Room('Кухня');
const livingRoom = new Room('Гостинная');
const bedRoom = new Room('Спальня');

kitchen.addNewDevices('Стиральная машина', 1200);
kitchen.allDeviceInRoom[0].powerOn();
kitchen.addNewDevices('Холодильник', 700);
kitchen.addNewDevices('СВЧ печь', 2200);
kitchen.allDeviceInRoom[2].powerOn();

livingRoom.addNewDevices('Телевизор', 600);
livingRoom.addNewDevices('Колонки', 1200);
livingRoom.allDeviceInRoom[1].powerOn();
livingRoom.addNewDevices('Робот-пылесос', 800);
livingRoom.addNewDevices('Игровая приставка', 400);

bedRoom.addNewDevices('Ночник', 200);
bedRoom.addNewDevices('Проектор', 1200);
bedRoom.allDeviceInRoom[0].powerOn();
bedRoom.allDeviceInRoom[1].powerOn();

kitchen.powerCalculation();
livingRoom.powerCalculation();
bedRoom.powerCalculation();

kitchen.searchDevice('Телевизор');
livingRoom.searchDevice('Игровая приставка');
bedRoom.searchDevice('Утюг');
