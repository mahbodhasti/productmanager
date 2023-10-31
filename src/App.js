import React, { useState } from "react";
import ProductList from "./componenet/ProductList";
import ProductForm from "./componenet/ProductForm";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
  useParams,
} from "react-router-dom";




// function App() {
//   const [products, setProducts] = useState([]);

//   const addProduct = (product) => {
//     setProducts([...products, product]);
//   };

//   return (
//     <div className="App">
//       <div className="container">
//         <h1>Product Manager</h1>
//         <ProductList products={products} />
//         <ProductForm addProduct={addProduct} />
//       </div>
//     </div>
//   );
// }

// export default App;



function App() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchCriteria, setSearchCriteria] = useState("code");

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <Router>
      <div className="App">
        <div className="container">
          <h1>لیست محصول ها</h1>

          <div className="mb-4">
            <label htmlFor="">جستجو</label>
            <input
              type="text"
              placeholder="جستجو"
              className="form-control"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label>
              Search by:
              <select
                value={searchCriteria}
                onChange={(e) => setSearchCriteria(e.target.value)}
                className="form-select"
              >
                <option value="code">Code</option>
                <option value="name">Name</option>
              </select>
            </label>
          </div>
          <div className="mb-4">
            <Link to={`/search/${searchText}/${searchCriteria}`}>
              <button>Search</button>
            </Link>
          </div>
          <Routes>
            <Route
              path="/search/:searchText/:searchCriteria"
              element={<SearchResults products={products} />}
            />
            <Route
              path="/"
              element={
                <div>
                  
                  <ProductList products={products} />
                  <ProductForm addProduct={addProduct} />
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function SearchResults({ products }) {
  const { searchText, searchCriteria } = useParams();

  // Filter products based on the search criteria and text
  const filteredProducts = products.filter((product) => {
    if (
      product &&
      product.code &&
      product.name &&
      searchText &&
      searchText.trim() !== ""
    ) {
      if (searchCriteria === "code") {
        return product.code.toLowerCase().includes(searchText.toLowerCase());
      } else if (searchCriteria === "name") {
        return product.name.toLowerCase().includes(searchText.toLowerCase());
      }
    }
    return false;
  });

  return (
    <div>
      <h2>Search Results</h2>
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
