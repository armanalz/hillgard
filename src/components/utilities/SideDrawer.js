import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {

    return (

        <Drawer anchor="right" open={props.open} onClose={()=>props.onClose(false)}>
           
            <List component="nav">
                <ListItem button id="list-item">
                    About
                </ListItem>

                <ListItem button id="list-item">
                    Services
                </ListItem>

                <ListItem button id="list-item">
                    Journal
                </ListItem>

                <ListItem button id="list-item">
                Contacts
                </ListItem>

            </List>

        </Drawer>
    );
};

export default SideDrawer;