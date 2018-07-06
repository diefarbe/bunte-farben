import { KeyModel } from "../../keyboards/en-US";


export const keySelected = (key: KeyModel) => ({
    type: 'KEY_SELECTED',
    key
})