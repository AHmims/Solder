import {fieldType} from "./fieldType.type";
import {fieldValue} from "./fieldValue.type";

export type field = {
    type: fieldType,
    key: string,
    value: fieldValue
}