import React from 'react';
import styles from './Cart.module.css';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa6';

const Cart = ({ cartData, updateCartCount, removeFromCart }) => {
  const totalItems = cartData.reduce((acc, item) => acc + item.count, 0);
  const totalPrice = cartData.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div className={styles.cartPage}>
      <div className={styles.container}>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Count</th>
                <th>Total Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={item.imgSrc} alt={item.title} className={styles.itemImg} />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price.toFixed(2)} $</td>
                  <td>
                    <div className={styles.counter}>
                      <button onClick={() => updateCartCount(item.id, -1)} className={styles.countBtn}>
                        <FaMinus />
                      </button>
                      <span>{item.count}</span>
                      <button onClick={() => updateCartCount(item.id, 1)} className={styles.countBtn}>
                        <FaPlus />
                      </button>
                    </div>
                  </td>
                  <td>{(item.price * item.count).toFixed(2)} $</td>
                  <td>
                    <button onClick={() => removeFromCart(item.id)} className={styles.removeBtn}>
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.summaryCard}>
          <div className={styles.summaryItem}>
            <span>Total items:</span>
            <span>{totalItems}</span>
          </div>
          <div className={styles.summaryItem}>
            <span>Total price:</span>
            <span>{totalPrice.toFixed(2)} $</span>
          </div>
          <div className={styles.grandTotal}>
            <span>Grand Total:</span>
            <span>{totalPrice.toFixed(2)} $</span>
          </div>
          <button className={styles.orderBtn}>Order</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
