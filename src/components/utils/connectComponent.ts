import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { ActionCreators } from "../actions";

export function connectComponent<K>(stores: Array<any>,
    component: React.ComponentClass<K>
        | React.StatelessComponent<K>) {

    const mapDispatchToProps = (dispatch: any) => {

        const actions = {
            ...bindActionCreators(ActionCreators, dispatch),
        };
        return ({
            actions,
            dispatch,
        } as any);
    };

    const mapStateToProps = (state: any) => stores.reduce(
        (map: any, store: string) => {
            map[store] = state[store];
            return map;
        },
        {},
    );


    return connect(mapStateToProps, mapDispatchToProps)(component);
}
