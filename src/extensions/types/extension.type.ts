import {extensionConfig} from "./extensionConfig.type";

export interface Extension {
    name: string,
    description: string,
    baseUrl: string,
    config: extensionConfig
}