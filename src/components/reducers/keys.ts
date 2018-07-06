import { KeyModel } from "../../keyboards/en-US";


const keys = (state: any = {}, action: { type: string, key: KeyModel }) => {
    switch (action.type) {
        case "KEY_SELECTED":
            if (state.hasOwnProperty(action.key.shortName)) {
                delete state[action.key.shortName]
            } else {
                state[action.key.shortName] = action.key;
            }
            return {
                ...state
            }
        default:
            return state
    }
}

export default keys