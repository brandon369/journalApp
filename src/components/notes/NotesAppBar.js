import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {startSaveNote} from "../../actions/notes";

const NotesAppBar = () => {
  const dispatch = useDispatch()
  const {active: note} = useSelector(state => state.notes)
  const handleSave = () => {
    dispatch(startSaveNote(note))
  }

  return (
    <div className='notes__app-bar'>
      <span> 28 de agosto 2020</span>
      <div>
        <button className='btn'>
          Picture
        </button>
        <button
          onClick={handleSave}
          className='btn'
        >
          save
        </button>
      </div>

    </div>
  )
}

export default NotesAppBar
