import React from 'react'

const JournalEntry = () => {
  return (
    <div className='journal__entry'>
      <div
        className='journal__entry-picture'
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(https://images.pexels.com/photos/636237/pexels-photo-636237.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)'
        }}
      >

      </div>
      <div className='journal__entry-body'>
        <p className='journal__entry-title'>
          new ENtry
        </p>
        <p className='journal__entry-content'>
          n the other hand, we denounce with righteous indignation a
        </p>
      </div>

      <div className='journal__entry-date'>

        <span>Monday</span>
        <h4>27</h4>
      </div>

    </div>
  )
}

export default JournalEntry
