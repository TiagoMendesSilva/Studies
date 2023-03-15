import { Box, Button, Grid, Stack, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ParticipantForm(){
    return (
        <Box m={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <TextField fullWidth label="Name" /> 
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField fullWidth label="E-mail" /> 
          </Grid>
          <Grid item xs={12} sm={4}>
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
          <Grid item xs></Grid>
          <Grid item xs="auto">
            <Stack spacing={3} direction='row'>
              <Button variant='outlined'> Cancel </Button> 
              <Button variant='contained'> Save </Button>
            </Stack>
             
          </Grid>
          
        </Grid>
      </Box>
    )
}







/* 
Componentes de layouts
Box

  <Box m={3}>
        <TextField fullWidth label="Name" /> 
        <TextField fullWidth label="E-mail" /> 
  </Box>

Grid - controle a proporção que cada componente ocupe em cada linha e configura para cada tamanho de tela

Grid divide em 12 espaços


*/

/*
Stack - para agrupar os botões

FormControl consegue agrupar o label com o select o label 
*/