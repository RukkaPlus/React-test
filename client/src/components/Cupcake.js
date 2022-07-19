import { Link } from "react-router-dom";

const Cupcake = ({colour, flavour, id}) => (
  <div>
    <h2>Cupcake</h2>
    <p>A cupcake of <b>{colour} color</b> and of <b>{flavour}</b> <br /> <Link to={`${id}`}>More info </Link></p>
  </div>
)

export default Cupcake;