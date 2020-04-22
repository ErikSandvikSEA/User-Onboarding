import React, {useState, useEffect} from 'react';
import TeamMemberForm from './TeamMemberForm'
import * as yup from 'yup'
import axios from 'axios'
import './App.css';


const url = 'https://reqres.in/api/users'

const initialFormValues = {
  ///// TEXT INPUTS /////
  name: '',
  email: '',
  ///// DROPDOWN /////
  password: '',
  ///// CHECKBOXES /////
  hobbies: {
    hiking: false,
    reading: false,
    coding: false,
  },
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
}

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(1, 'Name must have at least 1 characters')
    .required('Name is required'),
  email: yup
    .string()
    .email('Valid email is required')
    .required('Email is required'),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
      "Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .required('Civil status is required')
})


function App() {
  const [teamMembers, setTeamMembers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

const [formEnabled, setFormEnabled] = useState(false)
const [formErrors, setFormErrors] = useState(initialFormErrors)

const postTeamMember = teamMember => {
  axios.post(url, teamMember)
  .then(res => {
    setTeamMembers(...teamMembers, res.data)
  })
  .catch(err => {
    console.log('error')
  })
}







  return (
    <div className="App">
    <TeamMemberForm>

    </TeamMemberForm>
    </div>
  );
}

export default App;
