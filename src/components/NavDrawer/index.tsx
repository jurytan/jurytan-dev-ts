import React, { FunctionComponent } from "react";
import {
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DrawerSubtitle,
  DrawerContent,
} from "@rmwc/drawer/dist";
import { List, ListItem } from "@rmwc/list/dist";
import { Icon } from "@rmwc/icon/dist";
import "./NavDrawer.css";

const NavDrawer : FunctionComponent<{open: boolean, setOpen: (value: boolean) => void}> = 
  ({open, setOpen}) => (
  <Drawer
    className="Nav"
    modal
    open={open}
    onClose={() => setOpen(false)}
    style={{ background: "#1e1e1e" }}
  >
    <DrawerHeader>
      <DrawerTitle style={{ color: "white" }}>Whoa</DrawerTitle>
      <DrawerSubtitle style={{ color: "white" }}>Wassup?</DrawerSubtitle>
    </DrawerHeader>
    <DrawerContent>
      <List>
        <ListItem>Portfolio</ListItem>
        <ListItem>Projects</ListItem>
        <ListItem>Timeline</ListItem>
        <ListItem>Blog</ListItem>
        <ListItem>
          <Icon icon={{ 
              icon: 'star',
              strategy: 'ligature',
          }} />  
          Contact Me!
        </ListItem>
      </List>
    </DrawerContent>
  </Drawer>
);

export default NavDrawer;