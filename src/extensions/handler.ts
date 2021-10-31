/** Types */
import {Extension} from "./extension.type";

/** Imports */
const fs = require('fs-extra');
import config from '../../solder.config';

export function getExtensions() {
    let extensions: Array<Extension> = [];

    fs.readdir(config.MODULES_DIRECTORY, (err: Error, files: Array<File>) => {
        if (err) {
            console.error(err);
        }

        console.log(files);
    });

    return extensions;
}