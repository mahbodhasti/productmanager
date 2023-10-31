// import React, { useState } from "react";

// function App() {
//     const [products, setProducts] = useState([]);
//     const [searchText, setSearchText] = useState("");
//     const [searchCriteria, setSearchCriteria] = useState("code");
//     const [filteredProducts, setFilteredProducts] = useState([]);
  
//     const addProduct = (product) => {
//       setProducts([...products, product]);
//     };
  
//     const handleSearch = () => {
//       // Create a copy of the original products to avoid modifying the state directly
//       const updatedProducts = [...products];
  
//       // Filtering products based on search criteria and text
//       const newFilteredProducts = updatedProducts.filter((product) => {
//         if (searchCriteria === "code") {
//           return product.code.toLowerCase().includes(searchText.toLowerCase());
//         } else if (searchCriteria === "name") {
//           return product.name.toLowerCase().includes(searchText.toLowerCase());
//         }
//         return true;
//       });
  
//       // Updating the filtered products
//       setFilteredProducts(newFilteredProducts);
//     };
  
//     const handleClearSearch = () => {
//       // Clear the search input and reset the filtered products to the full product list
//       setSearchText("");
//       setFilteredProducts([]);
//     };
  
//     return (
//       <div className="App">
//         <div className="container">
//           <h1>mahbod Manager</h1>
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Search products..."
//               className="form-control"
//               value={searchText}
//               onChange={(e) => setSearchText(e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <label>
//               Search by:
//               <select
//                 value={searchCriteria}
//                 onChange={(e) => setSearchCriteria(e.target.value)}
//                 className="form-select"
//               >
//                 <option value="code">Code</option>
//                 <option value="name">Name</option>
//               </select>
//             </label>
//           </div>
//           <div className="mb-4">
//             <button onClick={handleSearch}>Search</button>
//             <button onClick={handleClearSearch}>Clear Search</button>
//           </div>
//           <ProductList products={filteredProducts.length > 0 ? filteredProducts : products} />
//           <ProductForm addProduct={addProduct} />
//         </div>
//       </div>
//     );
//   }
  
//   export default App;