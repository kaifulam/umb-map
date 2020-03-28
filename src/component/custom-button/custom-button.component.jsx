import React from 'react';
import { connect } from 'react-redux';

import {
    resetFilteredData,
    filterOutMediumRisk,
    filterOutHighRisk,
    filterOutCriticalRisk
} from '../../redux/data/data.actions';

import FilterForm from '../filter-form/filter-form.component';

import { Modal, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

//import './custom-button.styles.scss';

class CustomButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        }
    }

    handleToggle = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    handleSubmit = (val) => {
        //e.preventDefault();
        this.props.resetFilteredData();

        if (!val.criticalRisk) {
            this.props.filterOutCriticalRisk();
        }
        if (!val.highRisk) {
            this.props.filterOutHighRisk();
        }
        if (!val.mediumRisk) {
            this.props.filterOutMediumRisk();
        }

        this.handleToggle();
    }

    render() {
        if (this.props.id === 'filterButton') {
            return (
                <React.Fragment>
                    <Button className='custom-button' onClick={this.handleToggle} id={this.props.id}>
                        {this.props.children}
                    </Button>
                    <Modal show={this.state.showModal} onHide={this.handleToggle}>
                        <Modal.Header closeButton>
                            <Modal.Title>Data Filter</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <FilterForm onSubmit={this.handleSubmit} />
                        </Modal.Body>
                    </Modal>
                </React.Fragment>
            )
        }
        else {
            return (
                <React.Fragment>
                    <Button className='custom-button' onClick={this.handleToggle} id={this.props.id}>
                        {this.props.children}
                    </Button>
                    <Modal show={this.state.showModal} onHide={this.handleToggle}>
                        <Modal.Header closeButton>
                            <Modal.Title>About</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <iframe width="450" height="253" src="https://www.youtube.com/embed/oYxbUyFyKb4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <br />
                                <p><a href='https://www.seattle.gov/emergency-management/hazards/unreinforced-masonry-buildings-(urm)-' target="_blank" rel="noopener noreferrer"><b>Unreinforced Masonry Buildings</b></a> are susceptible to damages or collapse during an <a href='https://mynorthwest.com/category/earthquake_tracker/' target="_blank" rel="noopener noreferrer">earthquake</a>.</p>
                                <p>This map is created using live data provided by <a href='https://www.seattle.gov/sdci/codes/changes-to-code/unreinforced-masonry-buildings/project-documents' target="_blank" rel="noopener noreferrer">City of Seattle</a>.</p>
                                <p>This is <b>NOT</b> an official map created by the city. Use at your own risk.</p>
                                <p>Last updated in March, 2020.</p>
                                <p>Want to reach out? Let's connect on <a href='https://www.linkedin.com/in/kaifulam' target="_blank" rel="noopener noreferrer">LinkedIn</a>!</p>
                            </div>
                        </Modal.Body>
                    </Modal>
                </React.Fragment>
            )
        }
    }
}

const mapDispatchToProps = dispatch => ({
    resetFilteredData: () => dispatch(resetFilteredData()),
    filterOutMediumRisk: () => dispatch(filterOutMediumRisk()),
    filterOutHighRisk: () => dispatch(filterOutHighRisk()),
    filterOutCriticalRisk: () => dispatch(filterOutCriticalRisk())
})


export default connect(null, mapDispatchToProps)(CustomButton);

//advanced if statement to distiguish filter from about








        // return (
        //     <React.Fragment>
        //         <Button className='custom-button' onClick={this.handleToggle} id={this.props.id}>
        //             {this.props.children}
        //         </Button>

        //         {this.props.id === 'filterButton' ? (
        //             console.log('inside filterButton')
        //         ) : (
        //                 console.log('inside else statement')
        //             )}

        //         {
        //             this.props.id === 'filterButton' ? (
        //                 <Modal show={this.state.showModal} onHide={this.handleToggle}>
        //                     <Modal.Header closeButton>
        //                         <Modal.Title>Data Filter</Modal.Title>
        //                     </Modal.Header>
        //                     <Modal.Body>
        //                         <FilterForm onSubmit={this.handleSubmit} />
        //                     </Modal.Body>
        //                 </Modal>
        //             ) : (
        //                     <Modal show={this.state.showModel} onHide={this.handleToggle}>
        //                         <Modal.Header closeButton>
        //                             <Modal.Title>About</Modal.Title>
        //                         </Modal.Header>
        //                         <Modal.Body>
        //                             <div>
        //                                 <p>This map is created based on <a href='https://data.seattle.gov/resource/54qs-2h7f.geojson'>data</a> provided by City of Seattle.</p>
        //                             </div>
        //                         </Modal.Body>

        //                     </Modal>
        //                 )
        //         }

        //     </React.Fragment >

