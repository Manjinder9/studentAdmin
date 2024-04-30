import React from 'react';
import {updateStudent} from "../services/studentServices";
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
function UpdateStudentModel(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
        updateStudent(props.student.student_id, e.target)
            .then((result)=>{
                    alert(props.student.first_name + " has been Updated");
                },
                (error)=>{
                    alert("Failed to Update Student");
                })
    };

    return (
        <div>
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
                                    <Form.Control type="text" name="first_name" defaultValue={props.student.first_name} required placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="last_name">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" name="last_name" defaultValue={props.student.last_name} required placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="registration_number">
                                    <Form.Label>Registration No.</Form.Label>
                                    <Form.Control type="text" name="registration_number" defaultValue={props.student.registration_number} required placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" name="email" defaultValue={props.student.email} required placeholder="" />
                                </Form.Group>
                                <Form.Group controlId="course">
                                    <Form.Label>Course</Form.Label>
                                    <Form.Control type="text" name="course" defaultValue={props.student.course} required placeholder="" />
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
};

export default UpdateStudentModel;