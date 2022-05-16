const ElectricalDevices = {
  power: 0,
  status: false,

  powerRating() {
    if (this.status) {
      console.log(`Мощность устройства: ${this.power}`);
    } else {
      console.log('Ошибка! Сначала включите устройство');
    }
  },

  powerOn() {
    this.status = true;
    console.log('Устройство включено');
  },

  powerOff() {
    this.status = false;
    console.log('Устройство выключено');
  },

  statusOnOffCheck() {
    if (this.status) {
      console.log('Устройство включено');
    } else {
      console.log('Устройство выключено');
    }
  },
};

const VacuumCleaner = {
  power: 2000,
  status: false,
  mode: 'dry',
  __proto__: ElectricalDevices,

  workingModeDry() {
    if (this.status) {
      this.mode = 'dry';
      console.log('Выбран режим сухой уборки');
    } else {
      console.log('Ошибка! Сначала включите устройство');
    }
  },

  workingModeWet() {
    if (this.status) {
      this.mode = 'wet';
      console.log('Выбран режим влажной уборки');
    } else {
      console.log('Ошибка! Сначала включите устройство');
    }
  },

  statusworkingMode() {
    if (this.status) {
      if (this.mode === 'dry' || this.mode === 'wet') {
        if (this.mode === 'dry') {
          console.log('Режим сухой уборки');
        }

        if (this.mode === 'wet') {
          console.log('Режим влажной уборки');
        }
      } else {
        console.log('ERROR, выбранного режима работы не существует');
      }
    } else {
      console.log('Ошибка! Сначала включите устройство');
    }
  },

  info() {
    if (this.status) {
      if (this.mode === 'dry' || this.mode === 'wet') {
        if (this.mode === 'dry') {
          console.log('Режим сухой уборки');
        }

        if (this.mode === 'wet') {
          console.log('Режим влажной уборки');
        }
      } else {
        console.log('ERROR, выбранного режима работы не существует');
      }

      console.log(`Мощность устройства: ${this.power}`);
    } else {
      console.log('Ошибка! Сначала включите устройство');
    }
  },
};

const RobotCleaner = {
  power: 1200,
  status: false,
  mode: 'dry',
  localMap: false,
  __proto__: VacuumCleaner,

  localMapOn() {
    if (this.status) {
      this.localMap = true;
      console.log('Запуск сканирования местности....Карта местности установлена');
    } else {
      console.log('Ошибка! Сначала включите устройство');
    }
  },

  localMapOff() {
    if (this.status) {
      this.localMap = false;
      console.log('Карта местности отсутствует/удалена');
    } else {
      console.log('Ошибка! Сначала включите устройство');
    }
  },

  statusLocalMap() {
    if (this.localMap) {
      console.log('Карта местности установлена');
    } else {
      console.log('Карта местности отсутствует/удалена');
    }
  },

  info() {
    if (this.status) {
      console.log(`Мощность устройства: ${this.power}`);

      if (this.localMap) {
        console.log('Карта местности установлена');
      } else {
        console.log('Карта местности отсутствует/удалена');
      }

      if (this.mode === 'dry' || this.mode === 'wet') {
        if (this.mode === 'dry') {
          console.log('Режим сухой уборки');
        }

        if (this.mode === 'wet') {
          console.log('Режим влажной уборки');
        }
      } else {
        console.log('ERROR, выбранного режима работы не существует');
      }
    } else {
      console.log('Ошибка! Сначала включите устройство');
    }
  },
};

const RobotSoldier = {
  power: 4000,
  status: false,
  mode: 'dry',
  localMap: false,
  shooting: false,
  __proto__: ElectricalDevices,

  localMapOn() {
    if (this.status) {
      this.localMap = true;
      console.log('Запуск сканирования местности....Карта местности установлена');
    } else {
      console.log('Ошибка! Сначала включите устройство');
    }
  },

  localMapOff() {
    if (this.status) {
      this.localMap = false;
      console.log('Карта местности отсутствует/удалена');
    } else {
      console.log('Ошибка! Сначала включите устройство');
    }
  },

  statusLocalMap() {
    if (this.localMap) {
      console.log('Карта местности установлена');
    } else {
      console.log('Карта местности отсутствует/удалена');
    }
  },

  shootingOn() {
    if (this.status) {
      this.shooting = true;
      console.log('Запуск стрельбы');
    } else {
      console.log('Ошибка! Сначала включите устройство');
    }
  },

  shootingOff() {
    if (this.status) {
      this.shooting = false;
      console.log('Прекратить стрельбу');
    } else {
      console.log('Ошибка! Сначала включите устройство');
    }
  },

  statusShooting() {
    if (this.shooting) {
      console.log('Робот стреляет');
    } else {
      console.log('Робот не стреляет');
    }
  },

  info() {
    if (this.status) {
      console.log(`Мощность устройства: ${this.power}`);

      if (this.localMap) {
        console.log('Карта местности установлена');
      } else {
        console.log('Карта местности отсутствует/удалена');
      }

      if (this.shooting) {
        console.log('Робот стреляет');
      } else {
        console.log('Робот не стреляет');
      }
    } else {
      console.log('Ошибка! Сначала включите устройство');
    }
  },
};

RobotCleaner.info();
RobotSoldier.info();
