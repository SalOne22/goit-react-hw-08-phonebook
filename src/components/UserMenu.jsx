import {
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  Avatar,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../redux/selectors';
import { logout } from '../redux/operations';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Menu>
      <MenuButton>
        <Avatar size="sm" name={user.name} />
      </MenuButton>
      <MenuList color="MenuText">
        <MenuGroup title={user.email}>
          <MenuItem onClick={handleLogout}>Log out</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
