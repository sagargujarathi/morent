import BellIcon from "@/assets/icons/bell-icon";
import HeartIcon from "@/assets/icons/heart-icon";
import LinearFilter from "@/assets/icons/linear-filter";
import SearchIcon from "@/assets/icons/search-icon";
import SettingIcon from "@/assets/icons/setting-icon";
import { alpha } from "@/utils/theme/typography";

import {
  AppBar,
  Avatar,
  Badge,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const Header = () => {
  return (
    <AppBar
      sx={{
        bgcolor: "white",
        boxShadow: "none !important",
        borderBottom: `1px solid ${alpha("#C3D4E9", 0.4)}`,
        zIndex: 11,
      }}
      position="fixed"
    >
      <Stack
        component="nav"
        direction="row"
        py={40 / 8}
        px={60 / 8}
        justifyContent="space-between"
      >
        <Stack direction="row" gap={8} alignItems="center">
          <Typography
            component="h1"
            sx={{ fontSize: 32, fontWeight: 700 }}
            color="primary"
          >
            MORENT
          </Typography>
          <TextField
            sx={{ width: { lg: 500 } }}
            placeholder="Search something here"
            color="secondary"
            size="small"
            InputProps={{
              sx: { borderRadius: 70 / 8, fontSize: 14 },
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton edge="start" size="small">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" size="small">
                    <LinearFilter />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack direction="row" gap={20 / 8} alignItems="center">
          <IconButton sx={{ border: `1px solid ${alpha("#C3D4E9", 0.4)}` }}>
            <HeartIcon />
          </IconButton>
          <IconButton sx={{ border: `1px solid ${alpha("#C3D4E9", 0.4)}` }}>
            <Badge color="error" badgeContent="" variant="dot">
              <BellIcon />
            </Badge>
          </IconButton>
          <IconButton sx={{ border: `1px solid ${alpha("#C3D4E9", 0.4)}` }}>
            <SettingIcon />
          </IconButton>
          <Avatar />
        </Stack>
      </Stack>
    </AppBar>
  );
};

export default Header;
