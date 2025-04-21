import { useEffect, useState } from 'react'
import { createProduct, getProduct, updateProduct } from '../api/Products'
import { useNavigate, useParams } from 'react-router'
import toast from 'react-hot-toast'

export default function ProductForm() {

  const [products, setProducts] = useState({
    marca: "",
    descripcion: "",
    precio: 0,
    cantidad: 0,
  })

  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    const loadProduct = async () => {
      if (params.id) {
        const response = await getProduct(params.id)
        setProducts(response.data)
      }
    }
    loadProduct()
  }, [params.id])

  const handleSumit = async (e) => {
    e.preventDefault()
    if (params.id) {
        await updateProduct(params.id, products)
        toast.success('Producto editado correctamente.')
    } else {
        await createProduct(products)
        toast.success('Producto creado correctamente.')
    }    
    navigate("/")
  }

  const handleCancel = () =>{
    navigate("/")
  }

  return (
    <div>
      <form onSubmit={handleSumit}>
        <div className="border-6 text-teal-900 p-4 rounded-lg shadow" >
          <h1 className="mt-8 text-3xl text-center text-teal-900 font-bold border-4 rounded-2xl border-teal-900 p-5 mx-auto w-[600px]"
          > Formulario de Productos</h1>
          <div className="mb-4">
            <label className="block text-2xl font-bold mb-2" htmlFor="marca">Marca</label>
            <input
              value={products.marca}
              type="text" id="marca"
              onChange={(e) => setProducts({ ...products, marca: e.target.value })}
              className="bg-green-300 border-4 rounded-lg py-2 px-3 w-full" placeholder="Marca de la bicicleta"
            />
          </div>
          <div className="mb-4">
            <label className="block text-2xl font-bold mb-2" htmlFor="descripcion">Descripcion</label>
            <textarea
              id="descripcion"
              value={products.descripcion}
              onChange={(e) => setProducts({ ...products, descripcion: e.target.value })}
              className="bg-green-300 border-4 rounded-lg py-2 px-3 w-full" placeholder="Descripcion de la bicicleta"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-2xl font-bold mb-2" htmlFor="precio">Precio</label>
            <input
              value={products.precio}
              type="number" id="precio"
              onChange={(e) => setProducts({ ...products, precio: e.target.value })}
              className="bg-green-300 border-4 rounded-lg py-2 px-3 w-full" placeholder="Precio de la bicicleta"
            />
          </div>
          <div className="mb-4">
            <label className="block text-2xl font-bold mb-2" htmlFor="cantidad">Cantidad</label>
            <input
              value={products.cantidad}
              type="number" id="cantidad"
              onChange={(e) => setProducts({ ...products, cantidad: e.target.value })}
              className="bg-green-300 border-4 rounded-lg py-2 px-3 w-full" placeholder="Cantidad de bicicletas disponibles"
            />
          </div>
          <button 
            type="submit" 
            className="bg-green-700 text-green-200 px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Guardar Producto
          </button>
          <button 
            type="button"
            onClick={handleCancel} 
            className="bg-red-700 text-green-200 px-4 py-2 rounded-lg hover:bg-red-600 ml-3"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  )
}
