import React from 'react';
import './App.css';

const TeamMemberForm = () => {


     return (
          <form className='friend container'>
            <h2>Friend Form</h2>
            {/* 🔥 STEP 10 - SHOW A BUNCH OF ERRORS */}
            <div className='errors'>
           
            </div>
            {/* ////////// TEXT INPUTS ////////// */}
            <label>Name:&nbsp;
            <input
                name='name'
                type='text'
              />
               {/* IN-Line STYLE {errors.username.length > 2 ? (<p className="errors">{errors.username}</p>) : null} */}
              </label>
            <label>Email:&nbsp;
            <input
                name='email'
                type='text'
              />
              {/* IN-Line STYLE {errors.email ? (<p className="errors">{errors.email}</p>) : null} */}
              </label>
      
            {/* ////////// DROPDOWN ////////// */}
            <label>Password&nbsp;
            <input
               name='password'
               type='password'
              />
              {/* IN-Line STYLE {errors.civil ? (<p className="errors">{errors.civil}</p>) : null} */}
              </label>
      
            {/* ////////// CHECKBOXES ////////// */}
            <label><input
              name='hiking'
              type="checkbox" /> Hiking</label>
            <label><input
              name='reading'
              type="checkbox" /> Reading</label>
            <label><input
              name='coding'
              type="checkbox" /> Coding</label>
      
            {/* ////////// DISABLED PROP NEW FOR TODAY ////////// */}
            <button>submit</button>
          </form>
        )
}

export default TeamMemberForm