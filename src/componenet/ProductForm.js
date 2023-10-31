import React, { useState } from "react";

function ProductForm({ addProduct }) {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ code, name, price });
    setCode("");
    setName("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>اضافه کردن محصول</h2>
      <div className="mb-3">
        <label>ردیف</label>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label>نام</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label>قیمت</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
}

export default ProductForm;
