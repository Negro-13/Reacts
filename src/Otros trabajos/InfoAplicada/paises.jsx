import { useState } from "react";

function App() {
  const [pais, setPais] = useState("");
  const [country, setCountry] = useState(null);
  const getData = (pais) => {
    fetch(`https://restcountries.com/v3.1/name/${pais}`)
      .then((response) => response.json())
      .then((data) => {
        setCountry(data[0]);
      });
  };

  const handleInputChange = (e) => {
    setPais(e.target.value);
  };

  const handlePais = (e) => {
    e.preventDefault();
    getData(pais);
    console.log(pais);
  };
  return (
    <div>
      <center>
        <h1>Datamundi</h1>
        <form onSubmit={handlePais}>
          <input type="text" value={pais} onChange={handleInputChange} />
          <button type="submit">Mandar</button>
          <br />
        </form>
        {country && (
          <div>
            <h1>{country.name.common}</h1>
            <h2>Continente: {country.region}</h2>
            <h2>Capital: {country.capital}</h2>
            <h2>Poblacion: {country.population}</h2>
            <img src={country.flags.svg}></img>
          </div>
        )}
      </center>
    </div>
  );
}

export default App;
