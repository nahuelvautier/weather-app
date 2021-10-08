import { useEffect, useState } from "react";

const initialForm = {
  id: null,
  city: "",
};

const FormGetter = ({ info, setInfo  }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (info) {
      setForm(info);
    } else {
      setForm(initialForm);
    }
  }, [info]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form) {
      alert("Ingresa una ciudad");
      return;
    } else {
      setInfo(form);
    }
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" name="city" onChange={handleChange} />
        <input type="submit" value="Buscar" />
      </form>
    </div>
  );
}

export default FormGetter;