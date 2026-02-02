import { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="product-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', padding: '20px' }}>
      {products.map((product) => (
        <div key={product.id} className="card" style={{ width: '250px', border: '1px solid #333', borderRadius: '10px', overflow: 'hidden', background: '#1a1a1a', color: 'white' }}>
          {/* Your API already provides the full URL: http://127.0.0.1:8000/media/... */}
          <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          
          <div style={{ padding: '15px' }}>
            <h2 style={{ fontSize: '1.2rem' }}>{product.name}</h2>
            <p style={{ color: '#aaa', fontSize: '0.9rem' }}>{product.category_name}</p>
            <p style={{ fontWeight: 'bold', color: '#4caf50' }}>${product.price}</p>
            
            {/* Displaying those JSON Specifications you fixed! */}
            <div style={{ fontSize: '0.8rem', marginTop: '10px', color: '#888' }}>
               <span>Size: {product.specifications?.size}</span> | <span>Color: {product.specifications?.color}</span>
            </div>
            
            <button style={{ marginTop: '15px', width: '100%', padding: '10px', background: '#4caf50', border: 'none', color: 'white', borderRadius: '5px', cursor: 'pointer' }}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;