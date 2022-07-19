import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CupcakeInfo = () => {
  const { cupcakeId }       = useParams();
  const [ info, setInfo ]   = useState();
  const [ error, setError ] = useState();
 
  useEffect(() => {
    fetch(`/api/cupcakes/${cupcakeId}`)
      .then(response => response.json())
      .then(setInfo)
      .catch(setError);
  }, [cupcakeId]);

  return (
    <div>
      <h2>Cupcake information</h2>
      {
        !error ? (
          info ? (
            <p>This cupcake is {info.colour} and it flavour is {info.flavour} <br /> <small>id: {info.id}</small></p>
          ) : (
            <p>Loading...</p>
          )
        ) : (
          <p>This cupcake ID is not correct. Please, try with other ID</p>
        )
      }
    </div>
  );
}

export default CupcakeInfo;