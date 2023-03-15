import { Box, Paper } from "@mui/material"
import { ReactNode } from "react"

import Typography from "@mui/material/Typography"

/*
type ScheduleColumnProps ={
    children?: ReactNode,
    title: string
}
*/
export default function ScheduleColumn(props){
    return (
        <Box sx={{flexGrow:1, flexBasis:1, p:1}}>
            <Paper sx={{backgroundColor:'primary.light'}}>
                <Box pt={1}>
                    <Typography variant="h6">{props.title}</Typography>
                </Box>
                <Box p={1}>
                    {props.children}
                </Box>
            </Paper>
        </Box>
    )
}
