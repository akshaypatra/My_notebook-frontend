import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState=(props)=>{

    const notesInitial=[
        {
          "_id": "65e9f6093a1e4720ba33aa78",
          "user": "65e9809e30d97fb4a432fb52",
          "title": "Meeting updated",
          "description": "meeting at 10:00 AM sharp",
          "tag": "personal",
          "date": "2024-03-07T17:14:49.128Z",
          "__v": 0
        },
        {
          "_id": "65e9f6093a1e4720ba33aa7a",
          "user": "65e9809e30d97fb4a432fb52",
          "title": "Meeting",
          "description": "meeting at 9:00 AM sharp",
          "tag": "personal",
          "date": "2024-03-07T17:14:49.322Z",
          "__v": 0
        },
        {
          "_id": "65e9f60a3a1e4720ba33aa7c",
          "user": "65e9809e30d97fb4a432fb52",
          "title": "Meeting",
          "description": "meeting at 9:00 AM sharp",
          "tag": "personal",
          "date": "2024-03-07T17:14:50.211Z",
          "__v": 0
        },
        {
          "_id": "65e9f6ca3a1e4720ba33aa82",
          "user": "65e9809e30d97fb4a432fb52",
          "title": "office",
          "description": "meeting at 12:00 PM sharp",
          "tag": "office",
          "date": "2024-03-07T17:18:02.763Z",
          "__v": 0
        }
      ];

    const [notes, setNotes] = useState(notesInitial);

    //Add a note
    const addNote=(title,description,tag)=>{
      //TODO : API call
      console.log("adding a new note")
        const note={
          "_id": "65e9f6093a1e4720ba33aa78",
          "user": "65e9809e30d97fb4a432fb52",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2024-03-07T17:14:49.128Z",
          "__v": 0
        }
        setNotes(notes.concat(note));
    };
    
    //delete a note
    const deleteNote=(id)=>{

    };

    //edit a note
    const editNote=(id)=>{
      
    };

    return(
        <NoteContext.Provider value={{notes,setNotes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;