import Layout from "../../../containers/LayoutSuperAdmin";
import styles from "./style.module.css";
import { ReactComponent as FilterSvg } from "../../../assets/navbericon/filter-outline.svg";
import Button from "@components/Button";
import OptionsModal from "@components/OptionsModal";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <Layout>
      <>
        <div className={styles.flexLg}>
          <div className={styles.header}>
            <h3>MANAGE PRODUCTS</h3>
            <div className={styles.filterFlex}>
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <h3>Filter</h3>
                <FilterSvg />
              </div>
            </div>
          </div>
          <Button
            text='Add New'
            height='40px'
            width='120px'
            className={""}
            onClick={() => navigate("new")}
          />
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
                    <td>
                      <OptionsModal>
                        <button onClick={() => navigate(`${row.id}`)}>
                          View
                        </button>
                        <button
                          onClick={() =>
                            navigate({
                              pathname: `${row.id}`,
                              search: "mode=edit",
                            })
                          }>
                          Edit
                        </button>
                        <button>Delete</button>
                      </OptionsModal>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    </Layout>
  );
};

export default ManageProducts;
