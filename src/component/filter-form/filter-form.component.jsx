import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { connect } from 'react-redux';

class FilterForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { handleSubmit, reset } = this.props;
        return (
            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="risk-category">Risk Category</label>
                    <div>
                        <label className='checkbox-inline'>
                            <div>
                                &emsp;
                                <Field
                                    name="mediumRisk"
                                    id="mediumRisk"
                                    component="input"
                                    type="checkbox"
                                />
                                <span> Medium Risk </span>
                            </div>

                        </label>
                        <label className='checkbox-inline'>
                            <div>
                                &emsp;
                                <Field
                                    name="highRisk"
                                    id="highRisk"
                                    component="input"
                                    type="checkbox"
                                />
                                <span> High Risk </span>
                            </div>
                        </label>
                        <label>
                            <div>
                                &emsp;
                                <Field
                                    name="criticalRisk"
                                    id="criticalRisk"
                                    component="input"
                                    type="checkbox"
                                />
                                <span> Critical Risk </span>
                            </div>
                        </label>
                    </div>
                    {/* <br />
                    <div>
                        <label htmlFor="year-built">Year Built</label>
                        <div> &emsp;Between&emsp;
                        <Field
                                name="minYear"
                                id="minYear"
                                component="input"
                                type="text"
                                maxLength="4"
                                size="4"
                                text-align="center"
                            />
                            &emsp;and&emsp;
                        <Field
                                name="maxYear"
                                id="maxYear"
                                component="input"
                                type="text"
                                maxLength="4"
                                size="4"
                                text-align="center"
                            />
                        </div>
                    </div> */}
                </div>
                <br />

                <button type="submit" className="btn btn-primary">Submit</button>
                &emsp;
                <button type="button" onClick={reset} className="btn btn-default">Reset Filter</button>
            </form >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        criticalRisk: state.data.criticalRisk
    }
}

// Decorate the form component
FilterForm = reduxForm({
    form: 'filterForm',
    initialValues: {
        mediumRisk: true,
        highRisk: true,
        criticalRisk: true,
        minYear: '1886',
        maxYear: '1957'
    },
    enableReinitialize: true,
    keepDirtyOnReinitialize: true
})(FilterForm);

export default connect(mapStateToProps, null)(FilterForm);



//https://www.linkedin.com/pulse/how-add-initial-values-your-redux-form-montez-smith
// https://codesandbox.io/s/2on863xwj0
//https://redux-form.com/6.0.0-alpha.4/examples/initializefromstate/