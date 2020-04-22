import React, { useState, useEffect } from 'react';
import TeamMemberForm from './TeamMemberForm'
import TeamMember from './TeamMember'
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
    .min(2, 'Name must have at least 2 characters')
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
    .required('Password is required')
})


const App = () => {
  const [teamMembers, setTeamMembers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const [formDisabled, setFormDisabled] = useState(true)

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

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => {
        setFormDisabled(!valid)
      })
  }, [formValues])


  const onSubmit = evt => {
    evt.preventDefault()

    const newTeamMember = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      hobbies: Object.keys(formValues.hobbies)
        .filter(hobby => formValues.hobbies[hobby] === true)
    }

    // 🔥 STEP 6 - WE NEED TO POST OUR NEW FRIEND TO THE API!
    postTeamMember(newTeamMember)
    setFormValues(initialFormValues)
  }

  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        //clear errors
        setFormErrors({
          ...formErrors,
          [name]: '',
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const onCheckboxChange = evt => {
    const { name } = evt.target
    const isChecked = evt.target.checked

    setFormValues({
      ...formValues,
      hobbies: {
        ...formValues.hobbies,
        [name]: isChecked,
      }
    })
  }



  return (
    <div className="App">
      <header><h1>Team Members</h1></header>
      <TeamMemberForm
        values={formValues}
        onSubmit={onSubmit}
        disabled={formDisabled}
        errors={formErrors}
        onCheckboxChange={onCheckboxChange}
        onInputChange={onInputChange}

      />
      {
        teamMembers.map(teamMember => {
          return (
            <TeamMember key={teamMember.name} details={teamMember} />
          )
        })
      }

    </div>
  );
}

export default App;
