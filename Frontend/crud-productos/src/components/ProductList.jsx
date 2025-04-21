import { useEffect, useState } from "react"
import { getProducts } from "../api/Products"
import { useNavigate } from "react-router"
import { deleteProduct } from "../api/Products"
import toast from "react-hot-toast"

export default function ProductList() {

    const [products, setProducts] = useState([])

    const navigate = useNavigate()

    const LoadProducts = async () => {
        const response = await getProducts()
        setProducts(response.data)
    }
    const handleDelete = async (id) => {
        await deleteProduct(id)
        toast.success("Producto Eliminado")
        setProducts(products.filter(product => product.id !== id)) 
    }
    
    useEffect(() => {
        LoadProducts()
    }   , [])

    return (
        <div className="bg-cover bg-center bg-no-repeat min-h-screen mt-8">
          <h1
            className="text-3xl text-center text-green-950 font-bold border-4 rounded-2xl
             border-green-900 p-5 mx-auto w-[600px] bg-[rgba(147,197,114,0.5)]"
          >
            Inventario Productos Disponibles
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-15 gap-6">
            {products.map((product) => (
              <div key={product.id} className=" bg-green-900 text-green-300 p-4 rounded-lg shadow">
                <p><span className="font-bold">Bicicleta: </span></p>
                <p><span className="font-bold">Marca: </span>{product.marca}</p>
                <p><span className="font-bold">Descripcion: </span>{product.descripcion}</p>
                <p>
                  <span className="font-bold">Precio: </span>
                  {product.precio.toLocaleString('es-CO', {
                    style: 'currency',
                    currency: 'COP',
                  })}
                </p>
                <p><span className="font-bold">Cantidad: </span>{product.cantidad}</p>
                <div className="mt-4">
                    <button 
                        className="bg-green-700 text-green-200 px-2 py-1 rounded-lg hover:bg-green-600"
                        onClick={() => navigate('/editar-producto/' + product.id)}
                    >   
                        Editar
                    </button>
                    <button 
                        className="bg-red-700 text-green-200 px-2 py-1 rounded-lg ml-2 hover:bg-red-600"
                        onClick={() => handleDelete(product.id)}
                    >
                        Eliminar
                    </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}