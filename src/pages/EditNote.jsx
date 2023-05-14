import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import useCreateDate from "../components/elements/useCreateDate";

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id === id);

  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);

  const date = useCreateDate();
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();

    if (title && details) {
      // Spread operator untuk mengambil semua isi note sebelumnya. Title dan Details diinisialisai ulang karena akan diubah/edit
      const newNote = {
        ...note,
        title,
        details,
        date,
      };

      const updateNotes = notes.map((item) => {
        if (item.id === id) {
          item = newNote;
        }
        return item;
      });
      setNotes(updateNotes);
      // Redirect to Home Page
      navigate("/");
    }
  };

  const handleDelete = () => {
    // Konfirmasi duluu
    if (window.confirm("Are you sure want to delete it?")) {
      // Fungsi filter untuk memfilter semua note yang tidak sama dengan id dari params
      const updateNotes = notes.filter((item) => item.id !== id);
      // Berarti jika kedapatan item.id === id, maka dia akan difilter atau dihapus
      setNotes(updateNotes);
      navigate("/");
    }
  };

  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleChange}>
          Save
        </button>
        <button className="btn lg danger" onClick={handleDelete}>
          <RiDeleteBin6Line />
        </button>
      </header>
      <form className="create-note__form" onSubmit={handleChange}>
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

export default EditNote;
