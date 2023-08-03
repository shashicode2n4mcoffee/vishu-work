import React, { useState } from 'react'
import JobListingCard from './JobListingCard'
import EditJobForm from './EditJobForm'
import JobPostingForm from './JobPostings'

const JobListingsPage = () => {
  const [jobListings, setJobListings] = useState([
    {
      jobTitle: 'Software Engineer',
      jobFunction: 'Engineering',
      jobType: 'Full-time',
      experience: '2-5 years',
      salary: '$80,000 - $100,000',
      jobExpiresIn: '30 days',
      skills: 'JavaScript, React, Node.js',
      companyLogo:
        'https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg',
      location: 'San Francisco, CA',
    },
    {
      jobTitle: 'Data Scientist',
      jobFunction: 'Data Science',
      jobType: 'Remote',
      experience: '3-7 years',
      salary: '$90,000 - $120,000',
      jobExpiresIn: '45 days',
      skills: 'Python, Machine Learning, Statistics',
      companyLogo:
        'https://seeklogo.com/images/B/business-company-logo-C561B48365-seeklogo.com.png',
      location: 'New York, NY',
    },
  ])

  const [editMode, setEditMode] = useState(false)
  const [selectedJob, setSelectedJob] = useState(null)
  const [createMode, setCreateMode] = useState(null)

  const handleEdit = (job) => {
    setEditMode(true)
    setSelectedJob(job)
  }

  const handleCancelEdit = () => {
    setEditMode(false)
    setSelectedJob(null)
  }

  const handleSaveEdit = (editedJob) => {
    const updatedJobListings = jobListings.map((job) =>
      job === selectedJob ? editedJob : job
    )
    setJobListings(updatedJobListings)

    setEditMode(false)
    setSelectedJob(null)
  }

  const handleDelete = (job) => {
    const updatedJobListings = jobListings.filter((j) => j !== job)
    setJobListings(updatedJobListings)
  }

  const handleCreateJob = () => {
    setCreateMode(true)
  }

  return (
    <div className='job-listings-page' style={{ marginTop: '1rem' }}>
      {!createMode && (
        <button onClick={handleCreateJob}>Create Job Listing</button>
      )}
      {createMode && (
        <JobPostingForm
          setJobListings={setJobListings}
          setCreateMode={setCreateMode}
        />
      )}
      {!createMode &&
        jobListings.map((job, index) => (
          <div key={index}>
            {editMode && selectedJob === job ? (
              <EditJobForm
                job={selectedJob}
                onSave={handleSaveEdit}
                onCancel={handleCancelEdit}
              />
            ) : (
              <JobListingCard
                job={job}
                onEdit={handleEdit}
                onDelete={() => handleDelete(job)}
              />
            )}
          </div>
        ))}
    </div>
  )
}

export default JobListingsPage
