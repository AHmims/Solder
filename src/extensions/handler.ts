/** Types */
import {Extension} from "./extension.type";

/** Imports */
const fs = require('fs-extra');
import * as path from 'path';

/** Constants */
const MODULES_DIRECTORY = path.join(__dirname, 'modules');

export function getExtensions() {
    let extensions: Array<Extension> = [];

    fs.readdir(MODULES_DIRECTORY, (err: Error, files: Array<File>) => {
        if (err) {
            console.error(err);
        }

        console.log(files);
    });

    return extensions;
}