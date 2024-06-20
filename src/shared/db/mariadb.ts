/* eslint-disable import/no-extraneous-dependencies */
import { Sequelize } from 'sequelize'
import logger from '@shared/utils/logger';
// import { initialize } from '@fligh/models';
class Database {
  private sequelize: Sequelize;

  constructor(url: string) {
    this.initialize(url);
  }

  async initialize( url: string) {
    this.sequelize = new Sequelize( url , {
      dialect: 'mariadb',
      logging: false,
      dialectOptions: {
        connectTimeout: 5000,
      },
    });
    logger.info(`Database connected`);
  }

  public async authenticate(): Promise<void> {
    return this.sequelize.authenticate().then(() => {
      console.log('Conectado a la DB.');
    //   return initialize(this.getSequelizeInstance());
    }).then(() => {
      // console.log('DB inicializada y modelos asociados.');
      // return this.sequelize.sync();
    }).then(() => {
      // console.log('DB sincronizada.');
    }).catch((error: unknown) => {
      console.error('Unable to connect to the database:', error);
    });
  }
  
  // Método para acceder a la instancia de Sequelize (opcional, en caso de que necesites acceder directamente a la instancia de Sequelize fuera de esta clase)
  public getSequelizeInstance(): Sequelize {
    return this.sequelize;
  }
  // Puedes agregar más métodos aquí, como inicialización de modelos, sincronización de la base de datos, etc.
}

export default Database;
