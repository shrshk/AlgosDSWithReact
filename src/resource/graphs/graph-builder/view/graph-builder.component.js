// @flow
import React from 'react';
import { withStyles } from '@material-ui/styles';
import { GraphBuilderForm } from './graph-builder-form.component';

import { Graph } from 'react-d3-graph';

type Props = {
    graphData: Object,
    graphDataForm: ?Object,
};

type State = {
};

const myConfig = {
    nodeHighlightBehavior: true,
    node: {
        color: "lightgreen",
        size: 120,
        highlightStrokeColor: "blue",
    },
    link: {
        highlightColor: "lightblue",
    },
};

// graph event callbacks
const onClickGraph = function() {
    window.alert(`Clicked the graph background`);
};

const onClickNode = function(nodeId) {
    window.alert(`Clicked node ${nodeId}`);
};

const onDoubleClickNode = function(nodeId) {
    window.alert(`Double clicked node ${nodeId}`);
};

const onRightClickNode = function(event, nodeId) {
    window.alert(`Right clicked node ${nodeId}`);
};

const onMouseOverNode = function(nodeId) {
    window.alert(`Mouse over node ${nodeId}`);
};

const onMouseOutNode = function(nodeId) {
    window.alert(`Mouse out node ${nodeId}`);
};

const onClickLink = function(source, target) {
    window.alert(`Clicked link between ${source} and ${target}`);
};

const onRightClickLink = function(event, source, target) {
    window.alert(`Right clicked link between ${source} and ${target}`);
};

const onMouseOverLink = function(source, target) {
    window.alert(`Mouse over in link between ${source} and ${target}`);
};

const onMouseOutLink = function(source, target) {
    window.alert(`Mouse out link between ${source} and ${target}`);
};

export class GraphBuilderComponent extends React.PureComponent<Props> {

    isGraphValid = (graphDataForm) => {
        const { nodes, links } = graphDataForm;
        let isValid = true;
        let nodeValues = nodes.map(n => n.id);
        console.log(nodeValues);
        links.forEach((link) => {
            // Object.values(link).every((v) => {
            //     if (v === null || v === "")
            //         isValid = false;
            // });
            // loop thru entries and make sure source and target exists.
            if (!link.hasOwnProperty('target'))
                isValid = false;
            let values = Object.values(link);
            values.map(v => {
                if (v === "" || !nodeValues.includes(v))
                    isValid = false;
            })
        });
        return isValid;
    };

    render() {
        const { graphData, graphDataForm } = this.props;
        if (graphDataForm)
            console.log(this.isGraphValid(graphDataForm));
        return (
            <div>
                {graphDataForm && this.isGraphValid(graphDataForm) &&
                    <Graph
                        id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                        data={graphDataForm}
                        config={myConfig}
                        onClickGraph={onClickGraph}
                    />
                }
                <GraphBuilderForm initialValues = {graphData} />
            </div>
        );
    }
}
const styles = (theme: Object) => ({
});

export const GraphBuilderComp = withStyles(styles)(GraphBuilderComponent);