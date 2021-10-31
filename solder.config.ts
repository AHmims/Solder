/** Imports */
import * as path from 'path';
import * as dotenv from "dotenv";

dotenv.config();

export default {
    MODULES_DIRECTORY: path.join(__dirname, process.env['MODULES_PATH'] as string) as string,
    hmm: "slm"
}