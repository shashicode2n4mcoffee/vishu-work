import React, { useState } from 'react'

const JobPostingForm = ({ setJobListings, setCreateMode }) => {
  const [jobData, setJobData] = useState({
    jobTitle: '',
    jobFunction: '',
    jobType: '',
    experience: '',
    salary: '',
    jobExpiresIn: '',
    skills: '',
    companyLogo: '',
    location: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setJobData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setJobListings((prevData) => [jobData, ...prevData])
    setCreateMode(null)
  }

  return (
    <>
      <h2>Enter details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='jobTitle'>Job Title:</label>
          <input
            type='text'
            id='jobTitle'
            name='jobTitle'
            value={jobData.jobTitle}
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
            value={jobData.jobFunction}
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
            value={jobData.jobType}
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
            value={jobData.experience}
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
            value={jobData.salary}
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
            value={jobData.jobExpiresIn}
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
            value={jobData.skills}
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
            value={jobData.companyLogo}
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
            value={jobData.location}
            onChange={handleChange}
            required
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default JobPostingForm
