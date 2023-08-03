import React, { useState } from 'react'

const EditJobForm = ({ job, onSave, onCancel }) => {
  const [editedJob, setEditedJob] = useState({ ...job })

  const handleChange = (e) => {
    const { name, value } = e.target
    setEditedJob((prevJob) => ({
      ...prevJob,
      [name]: value,
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(editedJob)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='jobTitle'>Job Title:</label>
        <input
          type='text'
          id='jobTitle'
          name='jobTitle'
          value={editedJob.jobTitle}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor='jobFunction'>Job Function:</label>
        <input
          type='text'
          id='jobFunction'
          name='jobFunction'
          value={editedJob.jobFunction}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor='jobType'>Job Type:</label>
        <input
          type='text'
          id='jobType'
          name='jobType'
          value={editedJob.jobType}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor='experience'>Experience:</label>
        <input
          type='text'
          id='experience'
          name='experience'
          value={editedJob.experience}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor='salary'>Salary:</label>
        <input
          type='text'
          id='salary'
          name='salary'
          value={editedJob.salary}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor='jobExpiresIn'>Job Expires in:</label>
        <input
          type='text'
          id='jobExpiresIn'
          name='jobExpiresIn'
          value={editedJob.jobExpiresIn}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor='skills'>Skills:</label>
        <input
          type='text'
          id='skills'
          name='skills'
          value={editedJob.skills}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor='companyLogo'>Company Logo:</label>
        <input
          type='text'
          id='companyLogo'
          name='companyLogo'
          value={editedJob.companyLogo}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor='location'>Location:</label>
        <input
          type='text'
          id='location'
          name='location'
          value={editedJob.location}
          onChange={handleChange}
          required
        />
      </div>
      <button type='submit'>Save</button>
      <button type='button' onClick={onCancel}>
        Cancel
      </button>
    </form>
  )
}

export default EditJobForm
