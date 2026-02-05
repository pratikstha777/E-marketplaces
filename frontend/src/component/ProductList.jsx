import { useEffect, useState } from "react";
import { fetchProducts } from "../api"; // Import your helper function

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Using your API helper
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ color: 'white', textAlign: 'center' }}>Loading products...</div>;
  if (error) return <div style={{ color: 'red', textAlign: 'center' }}>Error: {error}</div>;

  return (
    <div className="product-container" style={{ padding: '40px' }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
        gap: '30px' 
      }}>
        {products.map((product) => (
          <div key={product.id} className="product-card" style={{
            background: '#1e1e1e',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            transition: 'transform 0.2s'
          }}>
            {/* The image URL from your Django API (image_3aa162.png) is already absolute */}
            <img 
              src={product.image} 
              alt={product.name} 
              style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
            />
            
            <div style={{ padding: '15px', color: 'white' }}>
              <h3 style={{ margin: '0 0 10px 0' }}>{product.name}</h3>
              <p style={{ color: '#4caf50', fontSize: '1.2rem', fontWeight: 'bold' }}>
                ${product.price}
              </p>
              
              {/* Rendering your validated JSON specifications */}
              <div style={{ fontSize: '0.85rem', color: '#888', marginBottom: '15px' }}>
                {product.specifications?.color && <span>Color: {product.specifications.color} </span>}
                {product.specifications?.size && <span>| Size: {product.specifications.size}</span>}
              </div>

              <button style={{
                width: '100%',
                padding: '10px',
                background: '#4caf50',
                border: 'none',
                borderRadius: '6px',
                color: 'white',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;