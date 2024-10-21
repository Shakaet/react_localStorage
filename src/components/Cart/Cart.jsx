

const Cart = ({cart, handleRemove}) => {
    return (
        <div>
            <h4>Cart: {cart.length}</h4>
            <div className="cart-container">
                {cart.map((bottle, index) => (
                    <div key={`${bottle.id}-${index}`}>
                        <img style={{width: "25%"}} src={bottle.img} alt="" />
                        <button onClick={() => handleRemove(bottle.id)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Cart;