import {styled} from "@mui/material";
import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { removeFromBasket, addToBasket, minusOneItem } from "../store/actions/shopActions";
import {useCallback} from "react";

const Wrapper = styled('div')`
  position: fixed;
  z-index: 1000;
  right: 20px;
  top: 80px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: .2s;
  ${({ expanded }) => (expanded && `
    width: 400px;
    height: 600px;
    background: white;
    border: 1px solid red;
    border-radius: 10px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 16px;
  `)}
`
const BasketIcon = styled('span')`
  font-size: 40px;
`

const Close = styled('button')`
    color: red;
    font-size: 48px;
    margin-left: 300px;
`


export function BasketItem({product, counter, removefromBasket, addOne , minusOne}) {

    let disabled = counter <= 1;

    return (
        <div style={{background: '#B0E0E6', width: '100%'}}>
            {product.title} 
            <div>
                <span style={{background: 'yellow'}}> numbers: {counter}</span>
                <button onClick={addOne}>add + 1</button>
                <button disabled={disabled} onClick={minusOne} >remove - 1</button> 
            </div>
            
            <button style={{display: 'block', marginLeft: '80%'}} onClick={removefromBasket} >delete</button>
            <hr />
        </div>
    )
}

export function Basket() {
    const [expanded, setExpanded] = useState(false)
    const cartItems = useSelector((state) => state.shop.items)
    const dispatch = useDispatch()

    const addedProducts = Object.keys(cartItems).map(key => {
        return cartItems[key][0]
    })


    const handleRemoveformBasket = useCallback((product) => {
        dispatch(removeFromBasket(product))
    }, [cartItems, dispatch])

    return (
        <Wrapper onClick={(e) =>{
            setExpanded(true)
        }} expanded={expanded}>

            <div style={{display: 'flex', justifyContent: "space-between"}} >
                <BasketIcon>🧺</BasketIcon>
                {expanded ? <Close onClick={(e) => {
                    e.stopPropagation()
                    setExpanded(false)}
                } >XX</Close> : ''}
            </div>

            
            { expanded && addedProducts.map((product) => (
                <>
                    <BasketItem minusOne={() => dispatch(minusOneItem(product.id))} addOne={() => dispatch(addToBasket(product))} product={product} counter={cartItems[product.id].length} removefromBasket={() => handleRemoveformBasket(product.id)}  key={product.id} />
                </>

            ))}
        </Wrapper>
    )
}