import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Pagination, Grid, TextField, Button } from '@mui/material';

const rows = [
  {id: 1, title:" Acordar",  description: "Acordaaaa!!!",day: "28/02/2023", hour: "8:00"},
  {id: 1, title:" Café",  description: "Caféé!!!",day: "28/02/2023", hour: "9:00"},
  {id: 1, title:" Almoço",  description: "Almoçaaaar!!!",day: "28/02/2023", hour: "12:00"},
];

export default function EventLis() {
  return (
    <>
    <Box m={3}>
      <Grid container spacing={3}>
        <Grid item sm xs={12}>
            <TextField fullWidth label="Title" />
        </Grid>
        <Grid item xs={12} sm>
            <TextField InputLabelProps={{shrink: true}} type="date" fullWidth label="Day" />  
        </Grid>
        <Grid item sm="auto" xs={12}>
            <Box m={1}><Button variant='contained'> Filter </Button></Box>
        </Grid>
      </Grid>
    </Box>
    <Box m={3}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} >
          <TableHead>
            <TableRow>
              <TableCell> <b>Title</b>  </TableCell>
              <TableCell> <b>Day</b>  </TableCell>
              <TableCell> <b>Hour</b> </TableCell>
              <TableCell> <b>Description</b> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
              >
                <TableCell >{row.title}</TableCell>
                <TableCell>{row.day}</TableCell>
                <TableCell >{row.hour}</TableCell>
                <TableCell >{row.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    <Box  sx={{display:'flex', flexDirection:'row', justifyContent:'center'}} m={3}>
      <Pagination count={10} />
    </Box>
    </>
  );
}


/**
 Paginação
    <Box  sx={{display:'flex', flexDirection:'row', justifyContent:'center'}} m={3}>
      <Pagination count={10} />
    </Box>

  sx={{display:'flex', flexDirection:'row', justifyContent:'center'}} - deixar a paginação centralizada 

 */