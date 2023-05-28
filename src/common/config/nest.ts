import { getEnvPath } from '@helpers';
import { ConfigModuleOptions } from '@nestjs/config';

const envFilePath = getEnvPath(`${__dirname}/../env`);

const NEST_CONFIG: ConfigModuleOptions = {
  isGlobal: true,
  envFilePath,
};

export { NEST_CONFIG };
