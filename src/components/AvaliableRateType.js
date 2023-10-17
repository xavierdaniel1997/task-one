import React from "react";

import "./AvaliableRateType.css";

import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useSelector } from "react-redux";


const AvaliableRateType = () => {

  const tableDatas = useSelector((store) => store.tableData.datas)
  return (
    <div className="avaliableRateType">
      <div>
        <h1 className="table-heading">Avalible Rate Types</h1>
      </div>
      <div className="table-container">
        <TableContainer component={Paper}>
          <Table>
            <TableHead className="table-header">
              <TableRow>
                <TableCell className="table-desc">New Rate Type</TableCell>
                <TableCell className="table-desc">Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableDatas.map((data, index) => (
              <TableRow key={index} className="table-body">
                <TableCell>{data.rateType}</TableCell>
                <TableCell>{data.description}</TableCell>
              </TableRow>
            ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div></div>
    </div>
  );
};

export default AvaliableRateType;
