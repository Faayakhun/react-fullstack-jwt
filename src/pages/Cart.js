import {useEffect} from 'react'
import {useDispatch, useSelector} from  'react-redux'
import {cartAction} from '../redux/actions/cart.action'
import {Table} from 'react-bootstrap'


function Cart() {
    const cart = useSelector((state)=>state.Cart.data)
    console.log(cart)
    
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(cartAction())
    },[dispatch])


    return (
        <div>
            <h2>CART</h2>
            <Table>
            <thead>
                    <tr>
                        <th>Nama Barang</th>
                        <th>Harga Barang</th>
                        <th>Deskripsi</th>
                    </tr>
            </thead>
            { cart.length > 0 ?  (cart.map((item, index) => (
            <tbody key={index}>
                {item.product.map((barang,i) => (
                    <tr key ={i}>
                    <td>{barang.productName}</td>
                    <td>{barang.price}</td>
                    <td>{barang.description}</td>
                    </tr>
                ))}
            </tbody>
            
        ))) :   <tr>
                <td>No Item</td>
                </tr>}
            </Table>
            
        </div>
    )
}

export default Cart
