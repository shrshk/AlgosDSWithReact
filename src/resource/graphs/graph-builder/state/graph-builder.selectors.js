// @flow
import { createSelector } from 'reselect';
import { graphBuilderReducer } from './graph-builder.reducer';

const sliceSelector = (state) => state[graphBuilderReducer.sliceName];
const formSelector = (state: any) => state.form['graph-builder-form-component'];

export const graphDataSelector = createSelector(
    sliceSelector,
    (slice) => slice.data
);

export const graphDataFormSelector = createSelector(
    formSelector,
    (form) => {
        return form && form.values;
    }
);