import React, { useState } from "react"
import { Link } from "react-router-dom"
const desc='energistia in deliver atactica Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of '

const ProductDisplay = ({item}) => {

    console.log(item)
    const {name, id, price, seller, ratingsCount, quantity, img} = item

    const [prequantity, setQuantity ]=useState(quantity)
    const [coupon,setCoupon]=useState('')
    const [size,setSize]=useState('select size')
    const [color,setColor]=useState('select color')

    const handleSizeChange= (e) => {
        setSize(e.target.value)
    }
    const handleColorChange= (e) => {
        setColor(e.target.value)
    }

    const handleDecrease= () => {
        if(prequantity > 1){
            setQuantity(prequantity - 1)
        }
    }
    const handleIncrease= () => {
            setQuantity(prequantity + 1)
    }

    const handleSubmit =(e) => {
        e.preventDefault()
        const product={
            id:id,
            img:img,
            name:name,
            price:price,
            quantity:prequantity,
            size:size,
            color:color,
            coupon:coupon
        }

        console.log(product)
        const existingCart=JSON.parse(localStorage.getItem('cart')) || []
        
        const existingProductIndex=existingCart.findIndex((item) => item.id === id)
    
        if(existingProductIndex !== -1){
            existingCart[existingProductIndex].quantity += prequantity
        }else{
            existingCart.push(product)
        }
        
        //update local storage
        localStorage.setItem('cart', JSON.stringify(existingCart))

        // reset form fields
        setQuantity(1)
        setSize('select size')
        setColor('select color')
        setCoupon('')

    }

  return (
    <div>
        <div>
            <h4>{name}</h4>
            <p className="rating">
                <i className="icofont-star"></i>
                <i className="icofont-star"></i>
                <i className="icofont-star"></i>
                <i className="icofont-star"></i>
                <i className="icofont-star"></i>
                <span>{ratingsCount} review</span>
            </p>
            <h4>${price}</h4>
            <h4>${seller}</h4>
            <h4>${desc}</h4>
        </div>

        {/* cart component */}
        <div>
            <form onSubmit={handleSubmit}>
                {/* sizing */}
                <div className="select-product size">
                    <select value={size} onChange={handleSizeChange}>
                        <option>select size</option>
                        <option>sm</option>
                        <option>md</option>
                        <option>lg</option>
                        <option>xl</option>
                        <option>xxl</option>
                    </select>
                    <i className="icofont-rounded-down"></i>
                </div>

                {/* color */}
                <div className="select-product color">
                    <select value={color} onChange={handleColorChange}>
                        <option>select color</option>
                        <option>pink</option>
                        <option>ash</option>
                        <option>red</option>
                        <option>white</option>
                        <option>blue</option>
                        <option>black</option>
                    </select>
                    <i className="icofont-rounded-down"></i>
                </div>

                {/* cart plus minus */}
                <div className="cart-plus-minus">
                    <div className="dec qtybutton" onClick={handleDecrease}>-</div>
                    <input className="cart-plus-minus-box" type="text" name="qtybutton" id="qtybutton" value=
                    {prequantity} onChange={(e) => setQuantity(parseInt(e.target.value, 10))} />
                    <div className="inc qtybutton" onClick={handleIncrease}>+</div>
                </div>

                {/* coupon field */}
                <div className="discount-code mb-2">
                    <input type="text" placeholder="enter discount code" onChange={(e) => setCoupon(e.target.
                        value)} />
                </div>

                {/* btn section */}
                <button type="submit" className="lab-btn">
                        <span>add to cart</span>
                </button>
                <Link to='/cart-page' className="lab-btn bg-primary">
                    <span>check out</span>
                </Link>
            </form>
        </div>
    </div>
  )
}

export default ProductDisplay