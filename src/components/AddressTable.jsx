import { useState } from "react";
import "../css/AddressTable.css";

export default function AddressTable({ data, onUpdate}) {
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const handleEdit = (book) => {
    setEditingId(book.id);
    setEditForm({ ...book });
  };

  const handleSave = () => {
    if (!editForm.firstName || !editForm.lastName || !editForm.phone) {
      alert("Fields cannot be empty");
      return;
    }
    onUpdate(editForm);
    setEditingId(null);
  };

  if (data.length === 0)
    return <p className="no-data">No data to display.</p>;

  return (
    <div className="address-table-container">
      <h2 className="address-table-title">Address Book</h2>
      <table className="address-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((b) =>
            editingId === b.id ? (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>
                  <input
                    value={editForm.firstName}
                    onChange={(e) =>
                      setEditForm({ ...editForm, firstName: e.target.value })
                    }
                  />
                </td>
                <td>
                  <input
                    value={editForm.lastName}
                    onChange={(e) =>
                      setEditForm({ ...editForm, lastName: e.target.value })
                    }
                  />
                </td>
                <td>
                  <input
                    value={editForm.phone}
                    onChange={(e) =>
                      setEditForm({ ...editForm, phone: e.target.value })
                    }
                  />
                </td>
                <td>
                  <button className="table-btn btn-save" onClick={handleSave}>
                    Save
                  </button>
                </td>
              </tr>
            ) : (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.firstName}</td>
                <td>{b.lastName}</td>
                <td>{b.phone}</td>
                <td>
                  <button
                    className="table-btn btn-edit"
                    onClick={() => handleEdit(b)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
