import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/NoteContext';

const AddNote = (props) => {
    const context=useContext(NoteContext);
    const {addNote}=context;

    const [note, setNote] = useState({title:"",description:"",tag:"default"})


    const handleClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setNote({title:"",description:"",tag:""});
        props.showAlert("Added succesfully","success");
    }
    const onChange=(e)=>{
            setNote({...note,[e.target.name]:e.target.value})
    }
  return (
    <div className="container my-5">
        <h2>Add a Note</h2>

        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title:
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name='title'
              value={note.title}
              aria-describedby="emailHelp"
              onChange={onChange}
            
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              {" "}
              Description:
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name='description'
              value={note.description}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              {" "}
              Tag:
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name='tag'
              value={note.tag}
              onChange={onChange}
            />
          </div>

          <button disabled={note.title.length<1 || note.description.length<3 } type="submit" className="btn btn-primary" onClick={handleClick}>
            Add Note
          </button>
        </form>
      </div>
  )
}

export default AddNote
