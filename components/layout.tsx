import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { FaFacebookMessenger, FaGithub, FaStackOverflow } from 'react-icons/fa';

type Props = {
  children: React.FC | React.ReactElement;
};

export default function Layout({ children }: Props) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (state: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    )
      return;

    setOpen(state);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setOpen(!open)}
            >
              <Menu />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
        <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <FaFacebookMessenger fontSize={24} />
                </ListItemIcon>
                <ListItemText primary="Facebook Messenger" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <FaGithub fontSize={24} />
                </ListItemIcon>
                <ListItemText primary="Github Community" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <FaStackOverflow fontSize={24} />
                </ListItemIcon>
                <ListItemText primary="Stack Overflow" />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </Box>
      <main>{children}</main>
    </>
  );
}
