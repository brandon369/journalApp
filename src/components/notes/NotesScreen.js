import React, {useEffect, useRef} from 'react'
import NotesAppBar from "./NotesAppBar";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "../../hooks/useForm";
import {activeNote} from "../../actions/notes";

const NotesScreen = () => {

  const dispatch = useDispatch()


  const {active: note} = useSelector(state => state.notes)

  const [values, handleInputChange, reset] = useForm(note)

  const {body, title, id} = values

  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note)
      activeId.current = note.id
    }

  }, [note, reset])


  useEffect(() => {
    dispatch(activeNote(id, {...values}))
  }, [values, dispatch]);


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
          name='title'
          onChange={handleInputChange}
        />
        <textarea
          placeholder='What happened today'
          className='notes__text-area'
          value={body}
          name='body'
          onChange={handleInputChange}

        ></textarea>
        {(note.url) && (
          <div className='notes__image'>
            <img
              src={note.url}
              alt='image'
            />
          </div>
        )}
      </div>

    </div>
  )
}

export default NotesScreen
