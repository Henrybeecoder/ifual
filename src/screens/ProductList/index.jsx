import React, { useState } from 'react';
import PageContainer from '../../containers/PageContainer';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from "./style.module.css"
import right from "../../assets/svg/right.svg"
import left from "../../assets/svg/left.svg"
import filter from "../../assets/svg/filter.svg"
import tick from "../../assets/svg/tick.svg"
import Button from '../../Components/Button';

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
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    id,
    name,
    calories,
    fat,
    carbs,
    protein,
) {
    return { id,name, calories, fat, carbs, protein };
}

const rows = [
    createData(1,'.88 Distilled Diesel', "Diesel", "In stock", "6 hours", "N300.00"),
    createData(2,'Unadulterated Petrol', "Petrol", "In stock", "6 hours", "N300.00"),
    createData(3,'.9 Distilled Diesel', "AGO Diesel", "Out of stock", "6 hours", "N300.00"),
    createData(4,'Pure, distilled Kerosene', "AGO Diesel", "In stock", "6 hours", "N300.00"),
    createData(5,'Pure, distilled Kerosene', "Diesel", "Out of stock", "6 hours", "N300.00"),
    createData(6,'.9 Distilled Diesel', "AGO Diesel", "In stock", "6 hours", "N300.00"),
    createData(7,'Pure, distilled Kerosene', "AGO Diesel", "In stock", "6 hours", "N300.00"),
    createData(8,'.88 Distilled Diesel', "Petrol", "Out of stock", "6 hours", "N300.00"),
    createData(9,'Unadulterated Petrol', "AGO Diesel", "Out of stock", "6 hours", "N300.00"),
    createData(10,'.9 Distilled Diesel', "Petrol", "In stock", "6 hours", "N300.00"),

];


export default function ProductList () {
    const [openSubModal, setOpenSubModal] = useState(false)
    const [filterSet, setFilter] = useState(false)

    const rowClick = (e) => {
   
    setOpenSubModal(e)
}
    const toggleSubModal = () => {
        setOpenSubModal(true)
    }
    const closeSubModal = () => {
        setOpenSubModal(false)
    }
    return (
        <div>
          <PageContainer active="product-list">
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

            <div className={styles.pageContainer}>
                <div className={styles.pageHeader}>
                    <h1>Product List</h1>
                    <div className={styles.pagerHeaderContainer}>
                        <div className={styles.paginations}>
                            <p>1 - 6 of 6</p>
                            <div className={styles.holders}>
                                <img src={left} alt="" />
                                <img src={right} alt="" />
                            </div>
                        </div>
                        <div className={styles.filter} onClick={() => setFilter(!filterSet)}>
                            <h2>Filter</h2>
                            <img src={filter} alt="" />
                        </div>
                        <button>Add Product</button>
                    </div>
                </div>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableBody>
                            <StyledTableRow>
                                <StyledTableCell><h2 className={styles.title}>Description</h2></StyledTableCell>
                                <StyledTableCell align="center"><h2 className={styles.title}>Category</h2></StyledTableCell>
                                <StyledTableCell align="center"><h2 className={styles.title}>Status</h2></StyledTableCell>
                                <StyledTableCell align="center"><h2 className={styles.title}>Supply Time</h2></StyledTableCell>
                                <StyledTableCell align="center"><h2 className={styles.title}>Price/Ltr</h2></StyledTableCell>
                                <StyledTableCell align="right"></StyledTableCell>
                            </StyledTableRow>
                            {rows.map((row) => (
                        <>

                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        <h3 className={styles.subText}>{row.name}</h3>
                                    </StyledTableCell>
                                    <StyledTableCell align="center"><h3 className={styles.subText}>{row.calories}</h3></StyledTableCell>
                                    <StyledTableCell align="center" >
                                        <p className={`${row.fat === "In stock" && styles.delivered} ${row.fat === "Pending" && styles.pending} ${row.fat === "Out of stock" && styles.cancelled} `}>
                                            {row.fat}
                                        </p>
                                    </StyledTableCell>
                                    <StyledTableCell align="center" >
                                        <h3 className={styles.subText}>{row.carbs}</h3>


                                    </StyledTableCell>
                                    <StyledTableCell align="center"><h3 className={styles.subText}>{row.protein}</h3></StyledTableCell>
                                    <StyledTableCell align="right" style={{cursor: "pointer"}}>
                                        <img src={tick} alt=""  onClick={() => rowClick(row.id)}/>
                                        {openSubModal && (
                                    <div className={styles.subModal}>
                                        <p onClick={closeSubModal}>View</p>
                                        <p onClick={closeSubModal}>Report</p>
                                    </div>
                                    )}
                                    </StyledTableCell>
                                    

                                </StyledTableRow>
                                 
                                     </>
                            ))}
                                 
                        </TableBody>
                    </Table>
                    
                </TableContainer>
            </div>
        </PageContainer>
            
        </div>
    )
}