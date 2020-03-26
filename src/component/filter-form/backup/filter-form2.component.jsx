import React from 'react';
import { connect } from 'react-redux';

import {
    toggleMediumRisk,
    toggleHighRisk,
    toggleCriticalRisk
} from '../../redux/filter/filter.actions'

class FilterForm extends React.Component {
    constructor(props) {
        super(props)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit', e)
        this.props.handleSubmit();

    }
    handleChange = (e) => {
        if (e.target.name === 'mediumRisk') {
            this.props.toggleMediumRisk()
        }
        if (e.target.name === 'highRisk') {
            this.props.toggleHighRisk()
        }
        if (e.target.name === 'criticalRisk') {
            this.props.toggleCriticalRisk()
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="risk-category">Risk Category</label>
                        <div>
                            <label className='checkbox-inline'>
                                <div>
                                    &emsp;
                                <input
                                        name="mediumRisk"
                                        id="mediumRisk"
                                        component="input"
                                        type="checkbox"
                                        onChange={this.handleChange}
                                        checked={this.props.mediumRisk}
                                    />
                                    <span> Medium Risk </span>
                                </div>

                            </label>
                            <label className='checkbox-inline'>
                                <div>
                                    &emsp;
                                <input
                                        name="highRisk"
                                        id="highRisk"
                                        component="input"
                                        type="checkbox"
                                        onChange={this.handleChange}
                                        checked={this.props.highRisk}
                                    />
                                    <span> High Risk </span>
                                </div>
                            </label>
                            <label>
                                <div>
                                    &emsp;
                                <input
                                        name="criticalRisk"
                                        id="criticalRisk"
                                        component="input"
                                        type="checkbox"
                                        onChange={this.handleChange}
                                        checked={this.props.criticalRisk}
                                    />
                                    <span> Critical Risk </span>
                                </div>
                            </label>
                        </div>
                        <br />
                        <div>
                            <label htmlFor="year-built">Year Built</label>
                            <div> &emsp;Between&emsp;
                        <input
                                    name="minYear"
                                    id="minYear"
                                    component="input"
                                    type="text"
                                    maxLength="4"
                                    size="4"
                                    text-align="center"
                                />
                                &emsp;and&emsp;
                        <input
                                    name="maxYear"
                                    id="maxYear"
                                    component="input"
                                    type="text"
                                    maxLength="4"
                                    size="4"
                                    text-align="center"
                                />
                            </div>
                        </div>
                    </div>
                    <br />

                    <button type="submit" className="btn btn-primary">Submit</button>
                    &emsp;
                <button type="button" onClick={() => { console.log('clicked') }} className="btn btn-default">Reset Filter</button>
                </form >
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        mediumRisk: state.filter.mediumRisk,
        highRisk: state.filter.highRisk,
        criticalRisk: state.filter.criticalRisk
    }
}

const mapDispatchToProps = dispatch => ({
    toggleMediumRisk: () => dispatch(toggleMediumRisk()),
    toggleHighRisk: () => dispatch(toggleHighRisk()),
    toggleCriticalRisk: () => dispatch(toggleCriticalRisk()),
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);



// class FilterForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: "",
//             surname: "",
//             index: "",
//             class: "",
//             visible: "",
//             ...this.props.student
//         };
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleSubmit(e) {
//         const student = {
//             name: this.state.name,
//             surname: this.state.surname,
//             index: this.state.index,
//             class: this.state.class
//         };
//         this.props.onSubmit(student);
//         e.preventDefault();
//     }

//     handleChange(e) {
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     }

//     render() {
//         const type = this.props.visible ? { display: 'block' } : { display: 'none' };
//         return (
//             <div style={type}>
//                 <form className="form-group" onSubmit={this.handleSubmit}>
//                     Name
//                       <input className="Name" name="name" type="text" onChange={this.handleChange} value={this.state.name} />
//                     Surname
//                       <input className="Surname" name="surname" type="text" onChange={this.handleChange} value={this.state.surname} />
//                     Index
//                       <input className="Index" name="index" type="text" onChange={this.handleChange} value={this.state.index} />
//                     Class
//                       <input className="Class" name="class" type="text" onChange={this.handleChange} value={this.state.class} />
//                     <input className="submit btn" type="submit" value="Промени" />
//                 </form>
//             </div>
//         );
//     }
// }

// export default FilterForm;



  //https://stackoverflow.com/questions/53171918/react-setting-initial-value-to-input-element