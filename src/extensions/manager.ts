import {Extension} from "./extension.type";

const fs = require('fs-extra');
import config from '../../solder.config';
import * as path from "path";

export async function getExtensions(): Promise<Array<Extension | null>> {
    let extensions: Array<Extension | null> = [];

    try {
        const modules: Array<string> = await fs.readdir(config.MODULES_DIRECTORY);

        for (const module of modules) {
            const extension = await fetchModule(module);
            extensions.push(extension);
        }

    } catch (e) {
        console.error(e);
    }

    return extensions;
}

const fetchModule = async (fileName: string): Promise<Extension | null> => {
    let extension: Extension | null = null;

    try {
        const jsonModule = await fs.readJSON(path.join(config.MODULES_DIRECTORY, fileName));

        extension = {
            name: jsonModule.name,
            baseUrl: jsonModule.baseUrl
        }
    } catch (e) {
        console.error(e);
    }

    return extension;
}