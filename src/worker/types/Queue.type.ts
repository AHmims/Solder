import {queueJob} from "./queueJob.type";
import {Extension} from "../../extensions/types/extension.type";

export interface Queue {
    extension: Extension,
    interval: number,
    job: queueJob
}