import React from 'react'

function TeamMember({ details }) {
  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }
  return (
    <div className='friend container'>
      <h2>Name: {details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Password: {details.password}</p>

      {
        !!details.hobbies && !!details.hobbies.length &&
        <div>
          Hobbies:
          <ul>
            {
              details.hobbies.map((like, idx) => <li key={idx}>{like}</li>)
            }
          </ul>
        </div>
      }
    </div>
  )
}

export default TeamMember