import React, { useState } from "react";

function AddProduct({ addProduct }) {
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
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Code</label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddProduct;
