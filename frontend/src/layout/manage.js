import React, {useEffect, useState} from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap'
import axios from "axios";
import "../App.css"
import AddStudentModel from "./addStudentModel";
import UpdateStudentModel from "./updateStudentModel";
import {deleteStudent} from "../services/studentServices";

function Manage(props) {
    const [students, setStudents] = useState([]);
    const [addModalShow, setAddModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [editStudent, setEditStudent] = useState([]);
    useEffect(() => {
        loadUsers();
    },[]);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8000/students/");
        setStudents(result.data);
    };

    const handleAdd = (e) => {
        e.preventDefault();
        setAddModalShow(true);

    };
    const handleUpdate = (e, stu) => {
        e.preventDefault();
        setEditModalShow(true);
        setEditStudent(stu);
    };

    const handleDelete = (e, student_id, first_name) => {
        if(window.confirm('Are you sure ?')){
            e.preventDefault();
            deleteStudent(student_id)
                .then((result)=>{
                        alert(first_name + " has been deleted.");
                    },
                    (error)=>{
                        alert("Failed to Delete Student");
                    })
        }
    };

    let AddModalClose=()=>setAddModalShow(false);
    let EditModalClose=()=>setEditModalShow(false);

    return(
        <div className={"row side-row"}>
            <ButtonToolbar>
                <Button variant="secondary" onClick={handleAdd}>Add Student</Button>{' '}
                <AddStudentModel show ={addModalShow} onHide = {AddModalClose}>
                </AddStudentModel>
            </ButtonToolbar>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Student ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Registration Number</th>
                        <th scope="col">Email</th>
                        <th scope="col">Course Code</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>

                <tbody>
                {students.map((stu) =>
                    <tr key={stu.id}>
                        <td>{stu.student_id}</td>
                        <td>{stu.first_name}</td>
                        <td>{stu.last_name}</td>
                        <td>{stu.registration_number}</td>
                        <td>{stu.email}</td>
                        <td>{stu.course}</td>
                        <td>
                            <Button className={"mr-2"} variant="secondary" onClick={event => handleDelete(event,stu.student_id, stu.first_name)}>
                            Delete
                            </Button>{' '}

                            <Button className={"mr-2"} variant="secondary" onClick={event => handleUpdate(event,stu)}>
                            Update
                            </Button>{' '}
                            <UpdateStudentModel show={editModalShow} student={editStudent}
                                                onHide={EditModalClose}></UpdateStudentModel>

                        </td>
                    </tr>
                )}
                </tbody>
            </table>

        </div>
    );
}

export default Manage;