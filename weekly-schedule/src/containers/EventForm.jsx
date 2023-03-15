import { Box, Button, Grid, Stack, TextField } from '@mui/material';

export default function EventForm(){
    return (
        <Box m={3}>
            <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6}>
                <TextField fullWidth label="Title" /> 
            </Grid>
            <Grid item xs={12} sm={6}  md={3}>
                <TextField InputLabelProps={{shrink: true}} type="date" fullWidth label="Day" /> 
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <TextField InputLabelProps={{shrink: true}} type="time" fullWidth label="Hour" /> 
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <TextField fullWidth label="Description" /> 
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