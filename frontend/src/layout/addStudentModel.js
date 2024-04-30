import React from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import {addStudent} from "../services/studentServices";
import student from "./student";

function AddStudentModel(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
        addStudent(e.target)
            .then(()=>{
                    alert("Student has been created.");
                },
                (error)=>{
                    alert("Failed to Add Student.");
                })
    }

    return(
        <div className="container">

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Fill In Student Information
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="first_name">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" name="first_name" required placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="last_name">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" name="last_name" required placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="registration_number">
                                    <Form.Label>Registration No.</Form.Label>
                                    <Form.Control type="text" name="registration_number" required placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" name="email" required placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="course">
                                    <Form.Label>Course</Form.Label>
                                    <Form.Control type="text" name="course" required placeholder="" />
                                </Form.Group>
                                <Form.Group>
                                    <p></p>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" type="submit" onClick={props.onHide}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AddStudentModel;