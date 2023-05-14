import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { RiCloseCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import NoteItem from "../components/layout/NoteItem.jsx";

const Notes = ({ notes }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);

  const handleSearch = () => {
    setFilteredNotes(
      notes.filter((note) => {
        if (note.title.toLowerCase().match(text.toLowerCase())) {
          return note;
        }
        return null;
      })
    );
  };

  // Fungsi handleSearch akan berjalan ketika text diisi
  useEffect(handleSearch, [text]);

  return (
    <section>
      <header className="notes__header">
        {!showSearch ? <h2>Notes Notsan</h2> : ""}
        {showSearch ? (
          <input
            type="text"
            placeholder="Input title..."
            autoFocus
            onChange={(e) => {
              setText(e.target.value);
              handleSearch();
            }}
            value={text}
          />
        ) : (
          ""
        )}
        <button
          className="btn"
          onClick={() => setShowSearch((prevState) => !prevState)}
        >
          {showSearch ? <RiCloseCircleLine /> : <BiSearchAlt />}
        </button>
      </header>
      <div className="notes__container">
        {filteredNotes.length === 0 ? <p className="empty__notes">No Note Found 🗿</p> : ""}
        {filteredNotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
      <Link className="btn add__btn" to="/create">
        <AiOutlinePlusCircle />
      </Link>
    </section>
  );
};

export default Notes;
