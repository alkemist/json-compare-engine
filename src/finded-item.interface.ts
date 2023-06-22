import {AnyValue} from "./value.type.js";

export interface FindedItemInterface {
    index: number,
    value: Record<string, AnyValue> | undefined
}