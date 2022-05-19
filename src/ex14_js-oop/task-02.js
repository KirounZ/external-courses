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

Room.addNewDevices();
