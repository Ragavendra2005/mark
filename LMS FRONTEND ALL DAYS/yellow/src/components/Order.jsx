import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome
import React from 'react';
import './Order.css';

const products = [
  {
    name: 'Analog Quartz Wristwatch',
    code: 'P123456',
    quantity: 1,
    price: 56,
    image: 'https://img0.junaroad.com/uiproducts/18406170/zoom_0-1674657780.jpg',
  },
  {
    name: 'Iphone 14 Pro Max',
    code: 'P789012',
    quantity: 1,
    price: 1400,
    image: 'https://ik.imagekit.io/3ixwwooea/tr:n-main_preview_image/ibiUe6T6f.jpg',
  },
  {
    name: 'Smart Digital Sports Watch',
    code: 'P345678',
    quantity: 2,
    price: 44.20,
    image: 'https://assets.ajio.com/medias/sys_master/root/20220823/WOe5/6304be01aeb269176195b05c/-473Wx593H-4924036450-multi-MODEL2.jpg',
  },
  {
    name: 'Polo T Shirt For Men',
    code: 'P901234',
    quantity: 7,
    price: 15.53,
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/2/CE/XR/VB/181681384/6.jpg',
  },
  {
    name: 'Cotton Pant',
    code: 'P567890',
    quantity: 4,
    price: 11.94,
    image: 'https://www.colorhunt.in/wp-content/uploads/2021/01/220107722-01-2.jpg',
  },
];

const Order = () => {
  const subtotal = products.reduce((total, product) => total + product.price * product.quantity, 0);
  const shipping = 10;
  const tax = 15;
  const total = subtotal + shipping + tax;

  return (
    <div className="container">
      <h2>Order Details ({products.length})</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Product Code</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className="product">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-details">
                  <div>{product.name}</div>
                </div>
              </td>
              <td>{product.code}</td>
              <td>X{product.quantity}</td>
              <td>${product.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="order-summary">
        <div className="summary-row">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Shipping fee</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="summary-row total">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Order;
