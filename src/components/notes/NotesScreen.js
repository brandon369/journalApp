import React from 'react'
import NotesAppBar from "./NotesAppBar";

const NotesScreen = () => {
  return (
    <div className='notes__main-content'>

      <NotesAppBar/>
      <div className='notes__content'>
        <input
          type='text'
          placeholder='Some awesome title'
          className='notes__title-input'
          autoComplete='off'
        />
        <textarea
          placeholder='What happened today'
          className='notes__text-area'

        ></textarea>
        <div className='notes__image'>
          <img
            src={'https://images.pexels.com/photos/4947862/pexels-photo-4947862.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
            alt='image'
          />
        </div>
      </div>

    </div>
  )
}

export default NotesScreen
