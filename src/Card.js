const Card=({picture,price})=>{

    return(
<>
<div className="card" style="width: 18rem;">
  <img src={picture} className="card-img-top" alt="hey"></img>
  <div className="card-body">
    <h1 className="card-text">The price of this coin is :</h1>
    <p>{price}</p>
  </div>
</div>
</>
    );

};

export default Card;

