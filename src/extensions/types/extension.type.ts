import {extensionConfig} from "./extensionConfig.type";

export interface Extension {
    id: string,
    name: string,
    description: string,
    baseUrl: string,
    config: extensionConfig
}