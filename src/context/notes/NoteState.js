import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:4000";

  const notesInitial = [
    
  ];

  const [notes, setNotes] = useState(notesInitial);


  //get all note
  const getNotes = async() => {
    // API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlOTgwOWUzMGQ5N2ZiNGE0MzJmYjUyIn0sImlhdCI6MTcwOTgzMDgxMH0.3_4hylCz-qeJOrFQbeZlBeT4ahD-qFiZfFL2KeK1V4Q",
      }

      
    });
    const json=await response.json();
    //console.log(json);
    setNotes(json);
  };


  //Add a note
  const addNote = async(title, description, tag) => {
    // API call
     // eslint-disable-next-line
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlOTgwOWUzMGQ5N2ZiNGE0MzJmYjUyIn0sImlhdCI6MTcwOTgzMDgxMH0.3_4hylCz-qeJOrFQbeZlBeT4ahD-qFiZfFL2KeK1V4Q",
      },

      body: JSON.stringify({title,description,tag}),
    });
    

    // console.log("adding a new note");
    const note = {
      _id: "65e9f6093a1e4720ba33aa78",
      user: "65e9809e30d97fb4a432fb52",
      title: title,
      description: description,
      tag: tag,
      date: "2024-03-07T17:14:49.128Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //delete a note
  const deleteNote =async (id) => {
    //TODO:API call
     // eslint-disable-next-line
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlOTgwOWUzMGQ5N2ZiNGE0MzJmYjUyIn0sImlhdCI6MTcwOTgzMDgxMH0.3_4hylCz-qeJOrFQbeZlBeT4ahD-qFiZfFL2KeK1V4Q",
      }
    });



    //console.log("deleteing the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //edit a note
  const editNote = async (id, title, description, tag) => {
    //APi call

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlOTgwOWUzMGQ5N2ZiNGE0MzJmYjUyIn0sImlhdCI6MTcwOTgzMDgxMH0.3_4hylCz-qeJOrFQbeZlBeT4ahD-qFiZfFL2KeK1V4Q",
      },

      body: JSON.stringify({title,description,tag})
    });
     // eslint-disable-next-line
    const json = response.json();
    

    //logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes,getNotes, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
