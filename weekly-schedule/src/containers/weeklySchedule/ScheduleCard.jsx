import { Box, Paper } from "@mui/material"
import Typography from "@mui/material/Typography"

/*
type ScheduleCardProps ={
    
}
*/
export default function ScheduleCard(props){

    return(
        <Box p={1}>
            <Paper elevation={0}>
                <Box p={1}>
                    <Typography variant="h6"> Title </Typography>
                    <Typography variant="body1"> Descrição mais longa do evento que irá aparecer nessa região </Typography>
                </Box>
            </Paper>
        </Box>
    )
}