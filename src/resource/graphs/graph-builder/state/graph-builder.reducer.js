// @flow
import { createAndCombineSliceReducer } from '../../../../utils';

export const sliceName = 'graphBuilderSlice';

export type graphBuilderSlice = {
};

const initialState: graphBuilderSlice = {
    data : {
        nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }, {id: "Shirish"}],
        links: [{ source: "Harry", target: "Sally" }, { source: "Harry", target: "Alice" }, { source: "Harry", target: "Harry" }],
    }
};

export const graphBuilderReducer = createAndCombineSliceReducer(
    sliceName,
    initialState
);
