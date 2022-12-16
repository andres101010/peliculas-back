import {createPool} from 'mysql2/promise';
import { BD_HOST, BD_NAME, BD_PASSWORD, BD_PORT, BD_USER} from './config.js';

export const BD = createPool({
    host: BD_HOST,
    password: BD_PASSWORD,
    port: BD_PORT,
    user: BD_USER,
    database: BD_NAME
});