import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
// Make some unique id
import { v4 as uuid } from "uuid";
import useCreateDate from "../components/elements/useCreateDate";

const CreateNote = ({ setNotes }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const date = useCreateDate();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && details) {
      const note = {
        id: uuid(),
        title,
        details,
        date,
      };
      // Push note to the Notes
      setNotes((prevNotes) => [note, ...prevNotes]);

      // Redirect to Home Page
      navigate("/");
    }
  };

  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleSubmit}>
          Save
        </button>
      </header>
      <form className="create-note__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title..."
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          rows="30"
          placeholder="Content..."
          style={{ resize: "none" }}
          onChange={(e) => setDetails(e.target.value)}
          value={details}
        ></textarea>
      </form>
    </section>
  );
};

export default CreateNote;
