import "./SearchAndFilter.css";

const SearchAndFilter = ({ busqueda, setBusqueda, categoriaActiva, setCategoriaActiva, categorias }) => {
  return (
    <div className="search-filter-container">
      <div className="search-input-wrapper">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar beneficios..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>
      <div className="search-select-wrapper">
        <select
          className="form-select"
          value={categoriaActiva}
          onChange={(e) => setCategoriaActiva(e.target.value)}
        >
          <option value="Todas">Todas las categorías</option>
          {categorias.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchAndFilter;