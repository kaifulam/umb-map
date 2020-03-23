import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

//import './custom-button.styles.scss';

class CustomButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModel: false,
            lowRisk: true,
            mediumRisk: true,
            highRisk: true,
        }
    }

    handleToggle = () => {
        this.setState({
            showModel: !this.state.showModel
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            showModel: !this.state.showModel
        }, () => { console.log(this.state) })
        console.log(event.target);
    }
    handleChange = event => {
        const { checked, name } = event.target;
        this.setState({ [name]: checked })
        console.log(event.target)
    }

    render() {

        return (
            <React.Fragment>
                <button className='custom-button' onClick={this.handleToggle}>
                    {this.props.children}
                </button>
                {this.props.children == ' Filter... '
                    ?
                    (
                        <Modal show={this.state.showModel} onHide={this.handleToggle}>
                            <Modal.Header closeButton>
                                <Modal.Title>Data Filter</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group>
                                        <Form.Label>Risk Category</Form.Label>
                                        <div key='inline'>
                                            <Form.Check
                                                name='lowRisk'
                                                checked={this.state.lowRisk}
                                                onChange={this.handleChange}
                                                inline
                                                label="Low"
                                                id={`inline-1`}

                                            />
                                            <Form.Check
                                                name='mediumRisk'
                                                checked={this.state.mediumRisk}
                                                onChange={this.handleChange}
                                                inline
                                                label="Medium"
                                                id={`inline-2`}

                                            />
                                            <Form.Check
                                                name='highRisk'
                                                checked={this.state.highRisk}
                                                onChange={this.handleChange}
                                                inline
                                                label="High"
                                                id={`inline-3`}
                                            />
                                        </div>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Year Built</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Building Use</Form.Label>
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                            </Button>
                                </Form>
                            </Modal.Body>
                        </Modal>
                    )
                    :
                    (
                        <Modal show={this.state.showModel} onHide={this.handleToggle}>
                            <Modal.Header closeButton>
                                <Modal.Title>About</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div>
                                    This page is about...
                                    </div>
                            </Modal.Body>

                        </Modal>
                    )
                }

            </React.Fragment >
        )
    }
}

export default CustomButton;

//advanced if statement to distiguish filter from about