import { Box } from "@mui/material"
import { ReactNode } from "react"

/*
type ContainerScheduleProps ={
    children?: ReactNode
}
*/
export default function ContainerSchedule(props){
    return (
        <Box sx={{p:3, display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            {props.children}
        </Box>
    )
}