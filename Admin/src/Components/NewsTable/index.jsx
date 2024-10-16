import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'flag', label: 'Flag', minWidth: 100 },
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'language', label: 'Language', minWidth: 170 }
];

function createData(flag, name, language) {
  return { flag, name, language };
}
const rows = [
  createData('https://flagcdn.com/w320/in.png', 'India', 'Hindi, English'),
  createData('https://flagcdn.com/w320/cn.png', 'China', 'Mandarin'),
  createData('https://flagcdn.com/w320/it.png', 'Italy', 'Italian'),
  createData('https://flagcdn.com/w320/us.png', 'United States', 'English'),
  createData('https://flagcdn.com/w320/ca.png', 'Canada', 'English, French'),
  createData('https://flagcdn.com/w320/au.png', 'Australia', 'English'),
  createData('https://flagcdn.com/w320/de.png', 'Germany', 'German'),
  createData('https://flagcdn.com/w320/ie.png', 'Ireland', 'Irish, English'),
  createData('https://flagcdn.com/w320/mx.png', 'Mexico', 'Spanish'),
  createData('https://flagcdn.com/w320/jp.png', 'Japan', 'Japanese'),
  createData('https://flagcdn.com/w320/fr.png', 'France', 'French'),
  createData('https://flagcdn.com/w320/gb.png', 'United Kingdom', 'English'),
  createData('https://flagcdn.com/w320/ru.png', 'Russia', 'Russian'),
  createData('https://flagcdn.com/w320/ng.png', 'Nigeria', 'English'),
  createData('https://flagcdn.com/w320/br.png', 'Brazil', 'Portuguese'),
];

export default function NewsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer style={{height:"70vh"}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id}>
                          {column.id === 'flag' ? (
                            <img width={150} alt={row.name} src={row.flag} />
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[25, 50 , 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Səhifədə görünən xəbər:"
      />
    </Paper>
  );
}
