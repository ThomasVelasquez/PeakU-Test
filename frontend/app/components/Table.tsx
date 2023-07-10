import React, { useState, type MouseEvent } from "react";
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  InputAdornment,
  Box,
  TextField,
  TablePagination,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

type IColumn = {
  label: string;
  render: any;
};

interface ITableProps {
  columns: IColumn[];
  rows: any[];
}

interface ICell {
  row: string;
  column: IColumn;
}

function Cell({ row, column }: ICell) {
  return column.render(row);
}

export default function Table({ columns, rows }: ITableProps) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filters, setFilters] = useState<any>({
    Linea: "",
    Residencial: "",
    Comercial: "",
    Industrial: "",
  });

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const filteredRows = rows.filter((row) => {
    return Object.keys(filters).every((key) => {
      return String(row[key])
        .toLowerCase()
        .includes(filters[key].toLowerCase());
    });
  });

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer sx={{ maxHeight: 750 }}>
          <MuiTable stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column,index) => (
                  <TableCell key={index}>
                    {column.label}
                    <TextField
                      variant="standard"
                      value={filters[column.label]}
                      onChange={(e) => {
                        setFilters({
                          ...filters,
                          [column.label]: e.target.value,
                        });
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <FontAwesomeIcon icon={faSearch} />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={index}
                      sx={{ cursor: "pointer" }}
                    >
                      {columns.map((column, index) => (
                        <TableCell key={index} align="left">
                          <Cell row={row} column={column} />
                        </TableCell>
                      ))}
                    </TableRow>
                  );
                })}
            </TableBody>
          </MuiTable>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
