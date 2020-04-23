import React from 'react';

import './App.css';
import Form from 'muicss/lib/react/form'
import Input from 'muicss/lib/react/input'
import Button from 'muicss/lib/react/button';


const TeamMemberForm = (props) => {
  const {
    values,
    onSubmit,
    disabled,
    errors,
    onCheckboxChange,
    onInputChange,
    onTermsAgreement
  } = props
  console.log(values)

  return (
    <Form>
      <legend>Team Member Form</legend>
      {/* 🔥 STEP 10 - SHOW A BUNCH OF ERRORS */}
      <div className='errors'>
        <h3 
        data-cyName='nameErrorInput' 
        value={errors.name}>{errors.name}</h3>
        <h3>{errors.email}</h3>
        <h3>{errors.password}</h3>
        <h3>{errors.termsOfService}</h3>

      </div>
      {/* ////////// TEXT INPUTS ////////// */}
      <label>Name:&nbsp;
            <Input
          data-cyName='firstNameInput'
          name='name'
          type='text'
          value={values.name}
          onChange={onInputChange}
        />
        {/* IN-Line STYLE {errors.username.length > 2 ? (<p className="errors">{errors.username}</p>) : null} */}
      </label>
      <label>Email:&nbsp;
            <Input
          data-cyName='emailInput'
          name='email'
          type='text'
          value={values.email}
          onChange={onInputChange}
        />
        {/* IN-Line STYLE {errors.email ? (<p className="errors">{errors.email}</p>) : null} */}
      </label>

      {/* ////////// DROPDOWN ////////// */}
      <label>Password&nbsp;
            <Input
          data-cyName='passwordInput'
          name='password'
          type='password'
          value={values.password}
          onChange={onInputChange}
        />
        {/* IN-Line STYLE {errors.civil ? (<p className="errors">{errors.civil}</p>) : null} */}
      </label>

      {/* ////////// CHECKBOXES ////////// */}
      <label><Input
        checked={values.hobbies.hiking}
        onChange={onCheckboxChange}
        name='hiking'
        type="checkbox" /> Hiking</label>
      <label><Input
        checked={values.hobbies.reading}
        onChange={onCheckboxChange}
        name='reading'
        type="checkbox" /> Reading</label>
      <label><Input
        checked={values.hobbies.coding}
        onChange={onCheckboxChange}
        name='coding'
        type="checkbox" /> Coding</label>

<label><Input
        data-cyName='termsOfServiceCheckbox'
        checked={values.termsOfService}
        onChange={onTermsAgreement}
        name='termsOfService'
        type="checkbox" /> Terms of Service</label>

      {/* ////////// DISABLED PROP NEW FOR TODAY ////////// */}
      <Button 
        data-cyName='submitButton'
        color='primary' 
        variant='fab' 
        onClick={onSubmit} 
        disabled={disabled}>submit</Button>
    </Form>
  )
}

export default TeamMemberForm