import { useState } from "react";
import "../css/AddForm.css"; // ✅ обов’язково ../css

export default function AddForm({ onAdd }) {
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errs = {};
    if (!form.firstName.trim()) errs.firstName = "The first name is required";
    if (!form.lastName.trim()) errs.lastName = "The last name is required";
    if (!form.phone.trim()) errs.phone = "The phone is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onAdd(form);
    setForm({ firstName: "", lastName: "", phone: "" });
  };

  return (
    <div className="add-form-container">
      <form className="add-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}

        <input
          type="text"
          placeholder="Last Name"
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}

        <input
          type="text"
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <button type="submit">Add</button>
      </form>
    </div>
  );
}