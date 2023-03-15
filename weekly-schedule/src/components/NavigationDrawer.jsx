import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom'

const discretLink ={
    textDecoration: 'none',
    color: 'black'
}

/*
type NavigationDrawerProps = {
    open: boolean
}
*/

export default function NavigationDrawer(props){

    return (
        <Drawer
            anchor="left"
            open={props.open}
            onClose={props.onClose}
        >
          <Box
            sx={{ width: 250 }}
          >
            <List>
                <Link to='weekly-schedule' style={discretLink}>
                    <ListItem key="schedule" disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <CalendarMonthIcon /> 
                            </ListItemIcon>
                            <ListItemText primary="Weekly schedule"/>
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>
            <Divider />
            <List>
                <Link to='participants' style={discretLink}>
                    <ListItem key="participants" disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <PersonIcon /> 
                            </ListItemIcon>
                            <ListItemText primary="Participants"/>
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to='events' style={discretLink}>
                    <ListItem key="events" disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AccessTimeIcon /> 
                            </ListItemIcon>
                            <ListItemText primary="Events"/>
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>
          </Box>
        </Drawer>
    )
}