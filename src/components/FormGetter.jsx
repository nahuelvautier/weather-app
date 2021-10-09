import { useEffect, useState } from "react";

const initialForm = {
  id: null,
  city: "",
};

const FormGetter = ({ info, setInfo, infoGetter  }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!form) {
      alert("Ciudad");
      return;
    }

    infoGetter(form);
    setForm(initialForm);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" name="city" onChange={handleChange} value={form.city} />
        <input type="submit" value="Buscar" />
      </form>
    </div>
  );
}

export default FormGetter;