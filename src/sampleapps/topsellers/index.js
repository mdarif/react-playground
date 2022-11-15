import { useState, useEffect } from "react";
// import styles from "./dashboard.css";
import data from "./orders.json";

// Requirements:
// Once the <TopSellers /> component is mounted, load the order data [DONE]
// Calculate and display the total revenue [DONE]
// Display a ranking showing the sellers ordered by their total revenue using the <SellerRanking /> component. [DONE]
// The seller with the highest revenue should be shown at the top with position 1. [DONE]
// All the revenue values should only consider Confirmed orders. Canceled orders should be ignored. [DONE]
// All dollar amounts should be displayed to 2 decimal places [DONE]

// SellerRanking Component
const SellerRanking = ({ position, sellerName, sellerRevenue }) => {
  return (
    <tr>
      <td>{position}</td>
      <td>{sellerName}</td>
      <td>${sellerRevenue}</td>
    </tr>
  );
};

// TopSellers Component
function TopSellers() {
  const [orders, setOrders] = useState();
  const [totalRevenue, setTotalRevenue] = useState();

  // Filter confirmed orders
  const filterConfirmedOrders = (orders) => {
    return orders.filter((order) => order.status === "Confirmed");
  };

  // Calculate total revenue
  const calculateTotalRevenue = (orders) => {
    return orders.reduce((total, order) => total + order.revenue, 0);
  };

  // Display a ranking showing the sellers ordered by their total revenue
  const displaySellerRanking = (orders) => {
    return orders.map((order, index) => (
      <SellerRanking
        key={index}
        position={index + 1}
        sellerName={order.sellerName}
        sellerRevenue={order.revenue}
      />
    ));
  };

  // Sort sellers by revenue at the end
  const sortSellerByRevenue = (orders) => {
    return orders.sort((a, b) => b.revenue - a.revenue);
  };

  useEffect(() => {
    // Confirmed orders
    const confirmedOrders = filterConfirmedOrders(data.orders);

    // Do the grouping
    const groupBySeller = confirmedOrders.group(({ sellerName }) => sellerName);

    console.log("groupBySeller", groupBySeller);

    /**
     * Object.keys()
     *
     * The Object.keys() method returns an array of a given object's own enumerable
     * property names, iterated in the same order that a normal loop would.
     */

    // Get the top seller with the accumulated revenue
    const sellerRevenue = Object.keys(groupBySeller).map((sellerName) => {
      const orders = groupBySeller[sellerName];
      const revenue = orders
        .reduce((total, order) => total + order.revenue, 0)
        .toFixed(2);

      return {
        sellerName,
        revenue,
      };
    });

    // Total revenue
    const totalRevenue = calculateTotalRevenue(confirmedOrders).toFixed(2);
    setTotalRevenue(totalRevenue);

    // Finally update the state while showing the top seller in terms of revenue
    setOrders(sortSellerByRevenue(sellerRevenue));
  }, []);

  return (
    <>
      <div>
        <header>
          <h1>Top Sellers</h1>
        </header>
        <main>
          <div>
            <p>
              <strong>Total revenue: </strong>
              <span id="totalRevenue">${totalRevenue}</span>
            </p>
          </div>
          <h2>Seller Rankings</h2>
          <table>
            <thead>
              <tr>
                <th>Position</th>
                <th>Seller Name</th>
                <th>Seller Revenue</th>
              </tr>
            </thead>
            <tbody>{orders && displaySellerRanking(orders)}</tbody>
          </table>
        </main>
        <div>
          <h1>Actual Object</h1>
          <p>{JSON.stringify(data)}</p>
        </div>
      </div>
    </>
  );
}

export default TopSellers;
