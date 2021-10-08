import { useEffect, useState } from "react";

const initialinfo = {
  current: "",
  forecast: "",
}

const initialForm = "";

const FormGetter = ({ info, setInfo, infoGetter }) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (info) {
      setForm(info);
    } else {
      setForm(initialinfo);
      return;
    }
  }, [info]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form) {
      alert("Ingresa una ciudad");
      return;
    } else {
      infoGetter(form)
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