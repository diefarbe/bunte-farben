import { ColorResult } from "../../../node_modules/@types/react-color";
import { KeyModel } from "../../keyboards/en-US";

export async function getKeyboardData() {

    window.addEventListener('blur', () => {
        console.log("blured");
    })

    window.addEventListener("focus", () => {
        getKeyboardFirmware();
        getKeysData();
    })

    getKeysData();
}

export async function getKeyboardFirmware() {
    const response = await fetch("http://localhost:3030/info");

    const data = await response.json();
}

export async function getKeysData(): Promise<void> {
    const response = await fetch("http://localhost:3030/keys");

    const data = await response.json();
};

function buildSillyModel() {
    return {
        "upHoldLevel": 0,
        "downHoldLevel": 0,
        "upMaximumLevel": 0,
        "downMinimumLevel": 0,
        "upHoldDelay": 0,
        "downHoldDelay": 0,
        "upIncrement": 0,
        "downDecrement": 0,
        "upIncrementDelay": 0,
        "downDecrementDelay": 0,
        "startDelay": 0,
        "effectId": 0
    }
}

function mergeModels(model: any, channelData: any) {
    return {
        ...model,
        ...channelData,
    }
}

export async function setKeysColor(keys: { [key in string]: KeyModel }[], channels: any[]) {

    const keyNewSettings = [];
    const sillyModel = buildSillyModel();
    for (let key in keys) {
        const data = keys[key];
        keyNewSettings.push({
            key: data.description,
            data: {
                red: mergeModels(sillyModel, channels[0]),
                green: mergeModels(sillyModel, channels[1]),
                blue: mergeModels(sillyModel, channels[2]),
            }
        })
    }

    console.log("SENDING:" + JSON.stringify(keyNewSettings));

    const response = await fetch("http://localhost:3030/keys", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(keyNewSettings),
    });

    const data = await response.json();
}