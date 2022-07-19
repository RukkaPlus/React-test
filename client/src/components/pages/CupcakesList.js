import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cupcake from '../Cupcake';
import '../../css/CupcakesList.css';

const CupcakesList = () => {
  const [cupcakes, setCupcakes] = useState();
  const [error, setError]       = useState();

  useEffect(() => {
    fetch('/api/cupcakes')
      .then(res => res.json())
      .then(setCupcakes)
      .catch(setError);
  }, []);

  return (
    <>
      <section>
      {
        !error ? (
          cupcakes ? (
            <ul className='cupcakes-list'>
            { 
              cupcakes.map(({colour, flavour, id}, index) => (
                <li key={index}><Cupcake colour={colour} flavour={flavour} id={id} /></li>
              ))
            }
            </ul>
          ) : (<p className='loading'>Loading...</p>)
        ) : (<p>The database is possibly empty. Create a new cupcake!</p>)
      }
      </section>
      <section>
        <h2>New cupcake</h2>
        <p>Follow this <Link to="new">link</Link> to create a new cupcake</p>
      </section>
    </>
  );
}

export default CupcakesList;