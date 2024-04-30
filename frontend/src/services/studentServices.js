import axios from 'axios'

export function addStudent(student){
    return axios.post('http://127.0.0.1:8000/students/', {
        student_id:null,
        first_name:student.first_name.value,
        last_name:student.last_name.value,
        registration_number:student.registration_number.value,
        email:student.email.value,
        course:student.course.value
    })
        .then(response=>response.data)
}

export function updateStudent(stuid, student) {
    return axios.put('http://127.0.0.1:8000/students/' + stuid + '/', {
            first_name:student.first_name.value,
            last_name:student.last_name.value,
            registration_number:student.registration_number.value,
            email:student.email.value,
            course:student.course.value
        })
        .then(response=>response.data)
}

export function deleteStudent(studentId) {
    return axios.delete('http://127.0.0.1:8000/students/' + studentId + '/', {
        method: 'DELETE',
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
        }
    })
        .then(response => response.data)
}