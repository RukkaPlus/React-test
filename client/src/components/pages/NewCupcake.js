const NewCupcake = () => (
  <>
    <h1>Create a new Cupcake</h1>
    <form action='/api/cupcakes/new' method="PUT">
      <div>
        <label htmlFor='cupcolor'>Cupcake color</label>
        <input type='text' id='cupcolor' name='cupcolor' />
      </div>
      <div>
        <label htmlFor='cupflavour'>Cupcake flavour</label>
        <input type='text' id='cupflavour' name='cupflavour' />
      </div>
      <input type='submit' value='create' />
    </form>
  </>
);

export default NewCupcake;