import * as React from "react";
import { SmallKey } from "../keys/SmallKey";
import { enUS, KeyModel } from "../../keyboards/en-US";
import { PhotoshopPicker, SketchPicker } from "react-color";

export class Keyboard extends React.Component<{}, {}> {

    render() {

        const en = Object.keys(enUS).map((key: string) => {
            const keyModel = ((enUS as any)[key] as KeyModel);
            return <div
                key={key}
            >
                <SmallKey
                    text={keyModel.shortName}
                    width={keyModel.width}
                    height={keyModel.height}
                    y={keyModel.topLeftCoordinates.y}
                    x={keyModel.topLeftCoordinates.x}
                />
            </div>;

        });

        return <div>
            <div>
                <div style={{
                    position: "relative",
                    width: "675px",
                    height: "200px",
                    background: "#ccc",
                }}>
                    {en}
                </div>
            </div>
            <div style={{

            }}>
                <SketchPicker />
            </div>
        </div>
    }
}