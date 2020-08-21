// @flow
import React from 'react';
import { withStyles } from '@material-ui/styles';

type ExternalProps = {
};

type InternalProps = {
};

type Props = ExternalProps & InternalProps;

const AddNodeComp = (props: Props) => {
    return (
       <div>add-node</div>
    );
};

const styles = () => ({
    buttonWrapper: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
});

export const AddNode = withStyles(styles)(AddNodeComp);
