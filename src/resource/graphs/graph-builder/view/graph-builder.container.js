// @flow
import { connect } from 'react-redux';
import { GraphBuilderComp } from './graph-builder.component';
import { graphDataSelector, graphDataFormSelector } from '../state/graph-builder.selectors';

function mapStateToProps(state) {
    return {
        graphData: graphDataSelector(state),
        graphDataForm: graphDataFormSelector(state),
    };
}

const mapDispatchToProps = {
};

export const graphBuilder = connect(
    mapStateToProps,
    mapDispatchToProps
)(GraphBuilderComp);