import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Grid, Pagination, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const rows = [
  {id: 1, name:" Tiago", email: "t@teste.com", type: "presencial"},
  {id: 2, name:" Goati", email: "goati@teste.com", type: "remoto"},
  {id: 3, name:" Caê", email: "cae@teste.com", type: "presencial"},
];

export default function ParticipantList() {
  return (
    <>
    <Box m={3}>
      <Grid container spacing={3}>
        <Grid item sm xs={12}>
          <TextField fullWidth label="Name" />
        </Grid>
        <Grid item xs={12} sm>
          <FormControl fullWidth>
            <InputLabel>Type</InputLabel>
            <Select
              label="type"
            >
              <MenuItem value="remote">Remote</MenuItem>
              <MenuItem value="in-person">In person</MenuItem>
            </Select>
          </FormControl> 
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
              <TableCell> <b>Name</b>  </TableCell>
              <TableCell> <b>E-mail</b>  </TableCell>
              <TableCell> <b>Type</b> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
              >
                <TableCell >{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell >{row.type}</TableCell>
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