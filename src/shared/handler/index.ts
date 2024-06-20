import YAML from 'yamljs';
import { config } from '@shared/index';
import { errorHandler } from './handler';

const errors = YAML.load(config.DIR_ERRORS);

export { errors, errorHandler };
