import { KeyModel } from "../keyboards/KeyModel";
import { Animation } from "../animations/Animations";

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
        const red = channels[0];
        const green = channels[1];
        const blue = channels[2];

        const data = keys[key];
        keyNewSettings.push({
            key: data.description,
            data: {
                red: Animation.createAnimationFromObject(channels[0]),
                green: Animation.createAnimationFromObject(channels[1]),
                blue: Animation.createAnimationFromObject(channels[2]),
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