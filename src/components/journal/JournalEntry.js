import React from 'react'
import moment from "moment";
const JournalEntry = ({id, title, body, date, url}) => {

  const noteDate = moment(date);
  console.log(noteDate)

  return (
    <div className='journal__entry'>

      {url && (

        <div
          className='journal__entry-picture'
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${url})`
          }}
        >

        </div>
      )}

      <div className='journal__entry-body'>
        <p className='journal__entry-title'>
          {title}
        </p>
        <p className='journal__entry-content'>
          {body}
        </p>
      </div>

      <div className='journal__entry-date'>

        <span>{noteDate.format('dddd')}</span>
        <h4>{noteDate.format('D')}</h4>
      </div>

    </div>
  )
}

export default JournalEntry
