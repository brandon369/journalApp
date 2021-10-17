import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {startSaveNote, startUploading} from "../../actions/notes";

const NotesAppBar = () => {
  const dispatch = useDispatch()
  const {active: note} = useSelector(state => state.notes)
  const handleSave = () => {
    dispatch(startSaveNote(note))
  }

  const handleLoadPicture = () => {
    console.log('load picture')
    document.querySelector('#fileSelector').click()
  }
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if(file){
      dispatch(startUploading(file))
    }
  }


  return (
    <div className='notes__app-bar'>
      <span> 28 de agosto 2020</span>

      <input
        id='fileSelector'
        type='file'
        name='file'
        style={{display: 'none'}}
        onChange={handleFileChange}
      />
      <div>
        <button
          onClick={handleLoadPicture}
          className='btn'
        >
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
