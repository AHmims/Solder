
import { ExtensionEnum } from 'lib/enums/extension.enum';
import { extensionConfig } from './extensionConfig.type';

export interface Extension {
    id: string,
    name: ExtensionEnum,
    description: string,
    baseUrl: string,
    config: extensionConfig
}