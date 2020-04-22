import React from 'react';
import './App.css';

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
    <form className='friend container'>
      <h2>Friend Form</h2>
      {/* 🔥 STEP 10 - SHOW A BUNCH OF ERRORS */}
      <div className='errors'>
        <h3>{errors.name}</h3>
        <h3>{errors.email}</h3>
        <h3>{errors.password}</h3>
      </div>
      {/* ////////// TEXT INPUTS ////////// */}
      <label>Name:&nbsp;
            <input
          name='name'
          type='text'
          value={values.name}
          onChange={onInputChange}
        />
        {/* IN-Line STYLE {errors.username.length > 2 ? (<p className="errors">{errors.username}</p>) : null} */}
      </label>
      <label>Email:&nbsp;
            <input
          name='email'
          type='text'
          value={values.email}
          onChange={onInputChange}
        />
        {/* IN-Line STYLE {errors.email ? (<p className="errors">{errors.email}</p>) : null} */}
      </label>

      {/* ////////// DROPDOWN ////////// */}
      <label>Password&nbsp;
            <input
          name='password'
          type='password'
          value={values.password}
          onChange={onInputChange}
        />
        {/* IN-Line STYLE {errors.civil ? (<p className="errors">{errors.civil}</p>) : null} */}
      </label>

      {/* ////////// CHECKBOXES ////////// */}
      <label><input
        checked={values.hobbies.hiking}
        onChange={onCheckboxChange}
        name='hiking'
        type="checkbox" /> Hiking</label>
      <label><input
        checked={values.hobbies.reading}
        onChange={onCheckboxChange}
        name='reading'
        type="checkbox" /> Reading</label>
      <label><input
        checked={values.hobbies.coding}
        onChange={onCheckboxChange}
        name='coding'
        type="checkbox" /> Coding</label>

<label><input
        checked={values.termsOfService}
        onChange={onTermsAgreement}
        name='termsOfService'
        type="checkbox" /> Terms of Service</label>

      {/* ////////// DISABLED PROP NEW FOR TODAY ////////// */}
      <button onClick={onSubmit} disabled={disabled}>submit</button>
    </form>
  )
}

export default TeamMemberForm