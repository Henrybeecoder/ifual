import styles from "./style.module.css";
import { SvgFilterIcon } from "../../../assets/Svgs";

const data = [
  {
    id: "1",
    category: "Diesel",
    vendors: 14,
    locations: "20",
    price: "N800/ltr",
  },
  { id: "2", category: "Gas", vendors: 20, locations: "16", price: "N750/ltr" },
  {
    id: "3",
    category: "Kerosene",
    vendors: 100,
    locations: "37",
    price: "N120/ltr",
  },
  {
    id: "4",
    category: "Petrol",
    vendors: 20,
    locations: "37",
    price: "N300/ltr",
  },
];

const ManageProducts = () => {
  return (
    <>
      <div className={styles.flexLg}>
        <div className={styles.header}>
          <h3>MANAGE PRODUCTS</h3>
          <div className={styles.filterFlex}>
            <h3>Filter</h3>
            <SvgFilterIcon />
          </div>
        </div>
        <button className={""}>Add New</button>
      </div>
      <div className={styles.tableWrapper}>
        <table>
          <thead>
            <tr>
              <th>Product Category</th>
              <th>Vendors</th>
              <th>Locations</th>
              <th>Price Cap</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((row) => {
              return (
                <tr key={row.id}>
                  <td>{row.category}</td>
                  <td>{row.vendors}</td>
                  <td>{row.locations}</td>
                  <td>{row.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageProducts;
