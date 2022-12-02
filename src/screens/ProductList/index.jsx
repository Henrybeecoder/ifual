import React, { useReducer, useState } from "react";
import PageContainer from "../../containers/PageContainer";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./style.module.css";
import right from "../../assets/svg/right.svg";
import left from "../../assets/svg/left.svg";
import filter from "../../assets/svg/filter.svg";
import tick from "../../assets/svg/tick.svg";
import Button from "../../Components/Button";
import { SvgArrowback, SvgDelete, SvgEdit } from "../../assets/Svgs";
import { InputTemp, SelectTemp } from "../../Components/InputTemp";
import { states } from "../../utils/state";
import SubModal from "../../Components/SubModal";
import Modal from "../../Components/Modals";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(id, name, calories, fat, carbs, protein) {
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    1,
    ".88 Distilled Diesel",
    "Diesel",
    "In stock",
    "6 hours",
    "N300.00"
  ),
  createData(
    2,
    "Unadulterated Petrol",
    "Petrol",
    "In stock",
    "6 hours",
    "N300.00"
  ),
  createData(
    3,
    ".9 Distilled Diesel",
    "AGO Diesel",
    "Out of stock",
    "6 hours",
    "N300.00"
  ),
  createData(
    4,
    "Pure, distilled Kerosene",
    "AGO Diesel",
    "In stock",
    "6 hours",
    "N300.00"
  ),
  createData(
    5,
    "Pure, distilled Kerosene",
    "Diesel",
    "Out of stock",
    "6 hours",
    "N300.00"
  ),
  createData(
    6,
    ".9 Distilled Diesel",
    "AGO Diesel",
    "In stock",
    "6 hours",
    "N300.00"
  ),
  createData(
    7,
    "Pure, distilled Kerosene",
    "AGO Diesel",
    "In stock",
    "6 hours",
    "N300.00"
  ),
  createData(
    8,
    ".88 Distilled Diesel",
    "Petrol",
    "Out of stock",
    "6 hours",
    "N300.00"
  ),
  createData(
    9,
    "Unadulterated Petrol",
    "AGO Diesel",
    "Out of stock",
    "6 hours",
    "N300.00"
  ),
  createData(
    10,
    ".9 Distilled Diesel",
    "Petrol",
    "In stock",
    "6 hours",
    "N300.00"
  ),
];

export default function ProductList() {
  const [filterSet, setFilter] = useState(false);
  const [page, setPage] = useState("home");
  const [selected, setSelected] = useState(null);
  const [deleteCfmModal, setDeleteCfmModal] = useState(false);

  const selectedProduct = rows
    .map((row) => ({
      id: row.id,
      description: row.name,
      category: row.calories,
      status: rows.fat,
      supplyTime: row.carbs,
      price: row.protein,
      locations: [],
      discount: "",
    }))
    .find((row) => row.id === selected);

  const addProduct = () => {
    setPage("add-product");
  };

  const backToProductsList = () => {
    setSelected(null);
    setPage("home");
  };

  const editProduct = (id) => {
    setSelected(id);
    setPage("edit-product");
  };

  const viewProduct = (id) => {
    setSelected(id);
    setPage("view-product");
  };

  const closeModal = () => {
    setDeleteCfmModal(false);
  };

  const openModal = () => {
    setDeleteCfmModal(true);
  };

  const emptyInitialState = {
    price: "",
    description: "",
    category: "",
    supplyTime: "",
    status: "",
    discount: "",
    locations: [],
  };

  return (
    <PageContainer active='product-list'>
      <div className={styles.pageContainer}>
        <Modal openModal={deleteCfmModal} closeModal={closeModal}>
          yoo
        </Modal>
        {page === "edit-product" ? (
          <ProductsPage
            pageHeader='Edit Product'
            backToProductsList={backToProductsList}
            initialState={selectedProduct}>
            <div className={styles.editDeleteContainer}>
              <button className={styles.btnEditActive}>
                <span>Edit</span>
                <div className={styles.svgContainer}>
                  <SvgEdit className={styles.svgEdit} />
                </div>
              </button>
              <button className={styles.btnDelete} onClick={openModal}>
                <span>Delete</span>
                <div className={styles.svgContainer}>
                  <SvgDelete />
                </div>
              </button>
            </div>
          </ProductsPage>
        ) : page === "view-product" ? (
          <ProductsPage
            pageHeader='Product Details'
            backToProductsList={backToProductsList}
            initialState={selectedProduct}>
            <div className={styles.editDeleteContainer}>
              <button className={styles.btnEdit} onClick={editProduct}>
                <span>Edit</span>
                <div className={styles.svgContainer}>
                  <SvgEdit className={styles.svgEdit} />
                </div>
              </button>
              <button className={styles.btnDelete} onClick={openModal}>
                <span>Delete</span>
                <div className={styles.svgContainer}>
                  <SvgDelete />
                </div>
              </button>
            </div>
          </ProductsPage>
        ) : page === "add-product" ? (
          <ProductsPage
            pageHeader='Add Product'
            backToProductsList={backToProductsList}
            initialState={emptyInitialState}
          />
        ) : (
          <>
            {filterSet && (
              <div className={styles.filterContainer}>
                <div className={styles.filterHeader}>
                  <p>Filter</p>
                </div>
                <div className={styles.filterContent}>
                  <p>Delivered</p>
                  <p>Pending</p>
                  <p>Cancelled</p>
                  <p>Newest to Oldest</p>
                  <p>Oldest to Newest</p>
                </div>
              </div>
            )}

            <div>
              <div className={styles.pageHeader}>
                <h1>Product List</h1>
                <div className={styles.pagerHeaderContainer}>
                  <div className={styles.paginations}>
                    <p>1 - 6 of 6</p>
                    <div className={styles.holders}>
                      <img src={left} alt='' />
                      <img src={right} alt='' />
                    </div>
                  </div>
                  <div
                    className={styles.filter}
                    onClick={() => setFilter(!filterSet)}>
                    <h2>Filter</h2>
                    <img src={filter} alt='' />
                  </div>
                  <button onClick={addProduct}>Add Product</button>
                </div>
              </div>

              <TableContainer
                style={{ marginTop: "35px", borderRadius: "17px" }}
                // className={styles.tableContainer}
                component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label='customized table'>
                  <TableBody>
                    <StyledTableRow>
                      <StyledTableCell>
                        <h2 className={styles.title}>Description</h2>
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        <h2 className={styles.title}>Category</h2>
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        <h2 className={styles.title}>Status</h2>
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        <h2 className={styles.title}>Supply Time</h2>
                      </StyledTableCell>
                      <StyledTableCell align='center'>
                        <h2 className={styles.title}>Price/Ltr</h2>
                      </StyledTableCell>
                      <StyledTableCell align='right'></StyledTableCell>
                    </StyledTableRow>
                    {rows.map((row) => (
                      <>
                        <StyledTableRow key={row.name}>
                          <StyledTableCell component='th' scope='row'>
                            <h3 className={styles.subText}>{row.name}</h3>
                          </StyledTableCell>
                          <StyledTableCell align='center'>
                            <h3 className={styles.subText}>{row.calories}</h3>
                          </StyledTableCell>
                          <StyledTableCell align='center'>
                            <p
                              className={`${
                                row.fat === "In stock" && styles.delivered
                              } ${row.fat === "Pending" && styles.pending} ${
                                row.fat === "Out of stock" && styles.cancelled
                              } `}>
                              {row.fat}
                            </p>
                          </StyledTableCell>
                          <StyledTableCell align='center'>
                            <h3 className={styles.subText}>{row.carbs}</h3>
                          </StyledTableCell>
                          <StyledTableCell align='center'>
                            <h3 className={styles.subText}>{row.protein}</h3>
                          </StyledTableCell>
                          <StyledTableCell align='right'>
                            <SubModal>
                              <div className={styles.subModalContainer}>
                                <button
                                  onClick={() => {
                                    viewProduct(row.id);
                                  }}>
                                  View
                                </button>
                                <button
                                  onClick={() => {
                                    editProduct(row.id);
                                  }}>
                                  Edit
                                </button>
                                <button onClick={() => {}}>Delete</button>
                              </div>
                            </SubModal>
                          </StyledTableCell>
                        </StyledTableRow>
                      </>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </>
        )}
      </div>
    </PageContainer>
  );
}

const ProductsPage = ({
  children,
  pageHeader,
  backToProductsList,
  initialState,
}) => {
  const statusOptions = [
    { value: "In stock", label: "In stock" },
    { value: "Out of stock", label: "Out of stock" },
  ];

  const statesOptions = states.map((state) => ({
    value: state.name.toLowerCase(),
    label: state.name,
  }));

  const categoryOptions = [
    { value: "diesel", label: "Diesel" },
    { value: "petrol", label: "Petrol" },
    { value: "AGO-diesel", label: "AGO Diesel" },
  ];

  // const [description, setDescription] = useState(initialState.description);
  // const [category, setCategory] = useState(initialState.category);
  // const [supplyTime, setsupplyTime] = useState(initialState.supplyTime);
  // const [price, setPrice] = useState(initialState.price);
  // const [status, setStatus] = useState(initialState.status);
  // const [discount, setDiscount] = useState(initialState.discount);
  // const [location, setLocation] = useState(initialState.location);

  const reducer = (state, action) => {
    switch (action.type) {
      case "description":
        return { ...state, description: action.payload };
      case "category":
        return { ...state, category: action.payload };
      case "supplyTime":
        return { ...state, supplyTime: action.payload };
      case "price":
        return { ...state, price: action.payload };
      case "status":
        return { ...state, status: action.payload };
      case "discount":
        return { ...state, discount: action.payload };
      case "locations":
        return { ...state, locations: action.payload };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <button className={styles.btnBack} onClick={backToProductsList}>
        <SvgArrowback />
        <h2>Back</h2>
      </button>
      <div className={styles.pageHeader}>
        <h1>{pageHeader}</h1>
        {children}
      </div>
      <div>
        <div className={styles.flexForm}>
          <InputTemp
            inputType='text'
            label='PRODUCT DESCRIPTION'
            placeholder='Enter Description'
            marginRight
            value={state.description}
            onValueChange={(e) => dispatch({ type: "description", payload: e })}
          />
          <SelectTemp
            inputType='text'
            label='CATEGORY'
            placeholder='Select Category'
            marginLeft
            options={categoryOptions}
          />
        </div>
        <div className={styles.flexForm}>
          <InputTemp
            inputType='text'
            label='SUPPLY TIME (IN HOURS)'
            placeholder='E.g 12 Hours'
            marginRight
            value={state.supplyTime}
            onValueChange={(e) => dispatch({ type: "suplyTime", payload: e })}
          />
          <InputTemp
            inputType='text'
            label='PRICE/LITRE IN NAIRA'
            placeholder='300.00'
            marginLeft
            value={state.price}
            onValueChange={(e) => dispatch({ type: "price", payload: e })}
          />
        </div>
        <div className={styles.flexForm}>
          <SelectTemp
            inputType='text'
            label='STATUS'
            placeholder='In stock'
            // value='In stock'
            marginRight
            options={statusOptions}
          />
          <InputTemp
            inputType='text'
            label='DISCOUNT (IN PERCENTAGE)'
            placeholder='E.g 50%'
            marginLeft
            value={state.discount}
            onValueChange={(e) => dispatch({ type: "discount", payload: e })}
          />
        </div>
        <SelectTemp
          inputType='text'
          label='LOCATION'
          placeholder='Select all that applies'
          isMulti
          options={statesOptions}
        />
        <div className={styles.flexFooter}>
          <button className={styles.btnBackFooter}>Back</button>
          <button className={styles.btnSaveFooter}>Save</button>
        </div>
      </div>
    </>
  );
};
