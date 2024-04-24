import { Link } from 'react-router-dom';
import dataJson from '../../data/response.json';

function HomePage() {
  const countries = dataJson;

  return (
    <>
      <h1>WikiCountries: Your Guide to the World</h1>
      <div>
        <ul className='list-group'>
          {countries.map(country => (
            <Link to={`/${country._id}`} key={country._id}>
              <li className="list-group-item d-flex justify-content-center">
                <img src={`https://flagcdn.com/${country.alpha2Code.toLowerCase()}.svg`} alt={country.name.common} width="3%" height="3%" ></img>
                <p className="mx-2" style={{ fontSize: "20px", fontWeight: "bold" }}>{country.name.common}</p>
              </li>
            </Link>

          ))}
        </ul>
      </div>
    </>

  )
}

export default HomePage;
