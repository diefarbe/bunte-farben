import { KeyModel } from "../keyboards/KeyModel";


export const keySelected = (key: KeyModel) => ({
    type: 'KEY_SELECTED',
    key
})