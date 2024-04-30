import React, {useEffect, useState} from 'react';
import "../App.css"
import axios from "axios";

function Student(props) {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        loadUsers();
    },[]);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8000/students/");
        setStudents(result.data);
    };

    return(
        <div className={"row side-row"}>
            <table className="table">
                <thead className="thead-light">
                <tr>
                    <th scope="col">Student ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Registration Number</th>
                    <th scope="col">Email</th>
                    <th scope="col">Course Code</th>
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
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}

export default Student;