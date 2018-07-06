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

function buildSillyModel(color: number) {
    return {
        "upHoldLevel": color,
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

export async function setKeysColor(keys: { [key in string]: KeyModel }[], color: ColorResult) {


    const keyNewSettings = [];
    for (let key in keys) {
        const data = keys[key];
        keyNewSettings.push({
            key: data.description,
            data: {
                red: buildSillyModel(color.rgb.r),
                green: buildSillyModel(color.rgb.g),
                blue: buildSillyModel(color.rgb.b),
            }
        })
    }

    const response = await fetch("http://localhost:3030/keys", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(keyNewSettings),
    });

    const data = await response.json();
}