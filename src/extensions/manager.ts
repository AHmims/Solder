import {Extension} from "./types/extension.type";

const fs = require('fs-extra');
import config from '../../solder.config';
import * as path from "path";
import {extensionConfig} from "./types/extensionConfig.type";
import {item} from "./types/item.type";

export async function getExtensions(): Promise<Array<Extension | null>> {
    let extensions: Array<Extension | null> = [];

    try {
        const modules: Array<string> = await fs.readdir(config.MODULES_DIRECTORY);

        for (const module of modules) {
            const extension = await fetchModule(module);

            if (extension !== null) {
                extensions.push(extension);
            }
        }

    } catch (e) {
        console.error(e);
    }

    return extensions;
}

const fetchModule = async (fileName: string): Promise<Extension | null> => {
    let extension: Extension | null = null;

    try {
        extension = await fs.readJSON(path.join(config.MODULES_DIRECTORY, fileName));
    } catch (e) {
        console.error(e);
    }

    return extension;
}