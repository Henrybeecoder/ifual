import styles from "./style.module.css";
import LayoutSuperAdmin from "../../../containers/LayoutSuperAdmin";
import { SvgFilterIcon } from "../../../assets/Svgs";
import { useTable } from "react-table";

const data = [
  { category: "Diesel", vendors: 14, locations: "20", price: "N800/ltr" },
  { category: "Gas", vendors: 20, locations: "16", price: "N750/ltr" },
  { category: "Kerosene", vendors: 100, locations: "37", price: "N120/ltr" },
  { category: "Petrol", vendors: 20, locations: "37", price: "N300/ltr" },
];
const columns = [
  { Header: "Product Categories", accessor: "category" },
  { Header: "Vendors", accessor: "vendors" },
  { Header: "Locations", accessor: "locations" },
  { Header: "Price Cap", accessor: "price" },
];

const ManageProducts = () => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <LayoutSuperAdmin>
      <div className={styles.header}>
        <h3>MANAGE PRODUCTS</h3>
        <div className={styles.filterFlex}>
          <h3>Filter</h3>
          <SvgFilterIcon />
          <button className={""}>Add New</button>
        </div>
      </div>
      <div className={styles.tableWrapper}>
        <table {...getTableProps()}>
          <thead>
            {headerGroups?.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className={styles.tableHeadRow}>
                {headerGroup.headers?.map((column) => (
                  <th {...column.getHeaderProps()} key={column}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows?.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={row.id}>
                  {row?.cells?.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </LayoutSuperAdmin>
  );
};

export default ManageProducts;
