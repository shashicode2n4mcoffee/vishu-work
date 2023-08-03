import React from 'react'

const JobListingCard = ({ job, onEdit, onDelete }) => {
  const {
    jobTitle,
    jobFunction,
    jobType,
    experience,
    salary,
    jobExpiresIn,
    skills,
    companyLogo,
    location,
  } = job

  return (
    <div
      className='job-listing-card'
      style={{
        paddingBottom: '2rem',
        margin: '1rem',
        border: '1px solid #000000',
      }}
    >
      <div className='company-logo'>
        <img
          src={companyLogo}
          alt='Company Logo'
          style={{ width: '4rem', height: '4rem' }}
        />
      </div>
      <div className='job-details'>
        <h2>{jobTitle}</h2>
        <p>
          <strong>Job Function:</strong> {jobFunction}
        </p>
        <p>
          <strong>Job Type:</strong> {jobType}
        </p>
        <p>
          <strong>Experience:</strong> {experience}
        </p>
        <p>
          <strong>Salary:</strong> {salary}
        </p>
        <p>
          <strong>Job Expires in:</strong> {jobExpiresIn}
        </p>
        <p>
          <strong>Skills:</strong> {skills}
        </p>
        <p>
          <strong>Location:</strong> {location}
        </p>
        <div className='actions'>
          <button onClick={() => onEdit(job)}>Edit</button>
          <button onClick={() => onDelete(job)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default JobListingCard
