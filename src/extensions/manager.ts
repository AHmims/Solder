import {Extension} from "./types/extension.type";

const fs = require('fs-extra');
import config from '../../solder.config';
import * as path from "path";

export async function getExtensions(): Promise<Array<Extension>> {
    let extensions: Array<Extension> = [];

    try {
        const modules: Array<string> = await fs.readdir(config.MODULES_DIRECTORY);

        for (const module of modules) {
            const extension = await fetchModule(module);

            if (extension === null) {
                continue;
            }

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
            id: path.parse(fileName).name,
            ...jsonModule
        }
    } catch (e) {
        console.error(e);
    }

    return extension;
}