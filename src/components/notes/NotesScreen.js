import React, {useEffect, useRef} from 'react'
import NotesAppBar from "./NotesAppBar";
import {useSelector} from "react-redux";
import {useForm} from "../../hooks/useForm";

const NotesScreen = () => {

  const {active: note} = useSelector(state => state.notes)

  const [values, handleInputChange, reset] = useForm(note)

  const {body, title} = values

  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note)
      activeId.current = note.id
    }

  }, [note, reset])

  return (
    <div className='notes__main-content'>

      <NotesAppBar/>
      <div className='notes__content'>
        <input
          type='text'
          placeholder='Some awesome title'
          className='notes__title-input'
          autoComplete='off'
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          placeholder='What happened today'
          className='notes__text-area'
          value={body}
          onChange={handleInputChange}

        ></textarea>
        {(note.url) && (
          <div className='notes__image'>
            <img
              src={'https://images.pexels.com/photos/4947862/pexels-photo-4947862.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
              alt='image'
            />
          </div>
        )}
      </div>

    </div>
  )
}

export default NotesScreen
