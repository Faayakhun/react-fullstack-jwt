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
                        <th>Nama Pemesan</th>
                    </tr>
                </thead>
            <tbody>
            { cart.length > 0 ?  (cart.map((item, index) => (
            <tr key={index}>
            <td>{item.product[0].productName}</td>
            <td>{item.product[0].price}</td>
            <td>{item.product[0].description}</td>
            <td>{item.user.name}</td>
            </tr>
            
        ))) : <tr>
              <td>No Item</td>
              </tr>}
              { cart.length > 0 ?  (cart.map((item, index) => (
            <tr key={index}>
            <td>{item.product[1].productName}</td>
            <td>{item.product[1].price}</td>
            <td>{item.product[1].description}</td>
            <td>{item.user.name}</td>
            </tr>
            
        ))) : <tr>
              <td>No Item</td>
              </tr>}
      </tbody>
            </Table>
            
        </div>
    )
}

export default Cart
