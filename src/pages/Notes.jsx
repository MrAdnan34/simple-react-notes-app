import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import {AiOutlinePlusCircle} from 'react-icons/ai';
import { Link } from "react-router-dom";
import dummyNotes from '../dummy_notes.js';
import NoteItem from "../components/NoteItem.jsx";

const Notes = () => {
  return (
    <section>
      <header className="notes__header">
        <h2>Notes Notsan</h2>
        {/* <input type="text" placeholder="Input text..." autoFocus /> */}
        <button className="btn"><BiSearchAlt /></button>
      </header>
      <div className="notes__container">
        {
          dummyNotes.map((note) => <NoteItem key={note.id} note={note} />)
        }
      </div>
      <Link className="btn add__btn"><AiOutlinePlusCircle /></Link>
    </section>
  );
};

export default Notes;
