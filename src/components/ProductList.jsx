import { useState, useEffect } from "react";

const ProductList = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/products/");
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4 text-white text-center">
        Lista de Productos
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border bg-gray-800 text-white">
          <thead>
            <tr>
              <th className="border p-4">Nombre</th>
              <th className="border p-4">Precio</th>
              <th className="border p-4">Modelo</th>
              <th className="border p-4">Categoría</th>
              <th className="border p-4">Stock</th>
              <th className="border p-4">Imagen</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((product, index) => (
              <tr key={index}>
                <td className="border p-4">{product.name}</td>
                <td className="border p-4">
                  {typeof product.price === "number"
                    ? `$${product.price.toFixed(2)}`
                    : "Precio no disponible"}
                </td>
                <td className="border p-4">{product.model}</td>
                <td className="border p-4">{product.category}</td>
                <td className="border p-4">{product.stock}</td>
                <td className="border p-4 text-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-24 h-24 object-cover mx-auto"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
