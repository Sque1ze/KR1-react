import { useState } from "react";
import AddForm from "./components/AddForm";
import AddressTable from "./components/AddressTable";
import Book from "./models/Book";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  const handleAdd = (form) => {
    const newBook = new Book(Date.now(), form.firstName, form.lastName, form.phone);
    setBooks([...books, newBook]);
  };

  const handleUpdate = (updatedBook) => {
    setBooks(books.map((b) => (b.id === updatedBook.id ? updatedBook : b)));
  };

  const filtered = books.filter((b) =>
    `${b.firstName} ${b.lastName}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1>📖 Address Book</h1>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <AddForm onAdd={handleAdd} />
      <AddressTable data={filtered} onUpdate={handleUpdate} />
    </div>
  );
}

export default App;