// @flow
import React from 'react';
import { withStyles } from '@material-ui/styles';
import { reduxForm, Field, FieldArray } from 'redux-form';
import TextField from '@material-ui/core/TextField';

type ExternalProps = {
};

type InternalProps = {
};

type Props = ExternalProps & InternalProps;

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} type={type} placeholder={label} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);

const renderNode = (props: Props)=> {
    const { input, custom, classes } = props;
    return (
        <TextField
            InputProps={{
                disableUnderline: true,
            }}
            fullWidth
            {...input}
            {...custom}
        />
    );
};

const renderLink = (props: Props)=> {
    const { input, custom, classes } = props;
    return (
        <TextField
            InputProps={{
                disableUnderline: true,
            }}
            fullWidth
            {...input}
            {...custom}
        />
    );
};


const renderNodes = ({ fields, meta: { error, submitFailed } }) => {
    // const nodes = fields.getAll();
    // console.log(nodes);
    return (
        <ul>
            {fields && fields.map((node, index) => (
                <li key={index}>
                    <button type="button" onClick={() => fields.remove(index)}>
                        Remove node
                    </button>
                    <Field
                        name={`${node}.id`}
                        component={renderNode}
                        label="Node"
                    />
                </li>
            ))}
            <li>
                <button type="button" onClick={() => fields.push({'id': ''})}>
                    Add Node
                </button>
                {submitFailed && error && <span>{error}</span>}
            </li>
        </ul>
    )
};

// make this select fields and populate select options with nodes.
const renderLinks = ({ fields, meta: { error, submitFailed } }) => {
    // const nodes = fields.getAll();
    // console.log(nodes);
    return (
        <ul>
            {fields && fields.map((link, index) => (
                <li key={index}>
                    <button type="button" onClick={() => fields.remove(index)}>
                        Remove Link
                    </button>
                    <Field
                        name={`${link}.source`}
                        component={renderLink}
                        label="Source"
                    />
                    <Field
                        name={`${link}.target`}
                        component={renderLink}
                        label="Target"
                    />
                </li>
            ))}
            <li>
                <button type="button" onClick={() => fields.push({'source': "", 'target': ""})}>
                    Add Link
                </button>
                {submitFailed && error && <span>{error}</span>}
            </li>
        </ul>
    )
};

const GraphBuilderFormComp = (props: Props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    console.log(props);
    // const { nodes, links } = initialValues; // get this from form selectors.
    return (
        <form onSubmit={handleSubmit}>
            <FieldArray name="nodes" component={renderNodes} />
            <FieldArray name="links" component={renderLinks} />
        </form>
    );
};

const styles = () => ({
    buttonWrapper: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
});

export const GraphBuilderForm = withStyles(styles)(
    reduxForm({
        form: 'graph-builder-form-component',
        enableReinitialize: true,
    })(GraphBuilderFormComp)
);