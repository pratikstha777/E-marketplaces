import React from "react";
import ProductList from "./component/ProductList";
import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <h1>My E-Marketplace</h1>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  )
}

export default App