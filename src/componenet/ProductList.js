import React from "react";

function ProductList({ products }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>کد</th>
          <th>نام</th>
          <th>قیمت</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{product.code}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductList;







