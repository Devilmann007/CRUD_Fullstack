import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="py-4 mb-2 bg-white/10 backdrop-blur-sm border-2 md:border-2 rounded-lg md:rounded-1xl"> {}
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-xl md:text-3xl text-left text-green-950 font-bold border-2 md:border-3 rounded-lg md:rounded-2xl
                   border-green-900 p-3 md:p-5 w-auto md:w-[auto] bg-green-200/50 mr-4 ml-4"
        >
          App inventario bicicletas
        </Link>
        <div>
          <Link
            to="/nuevo-producto"
            className="bg-green-700 text-white px-8 py-4 rounded-md hover:bg-green-600 text-sm md:text-base mr-8"
          >
            Nuevo Producto
          </Link>
        </div>
      </div>
    </nav>
  );
}