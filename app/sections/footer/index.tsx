import { theme } from "@/utils/theme/palette";
import {
  Box,
  Divider,
  Link,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

const DATA = [
  {
    title: "About",
    links: [
      { label: "How it works", link: "" },
      { label: "Featured", link: "" },
      { label: "Partnership", link: "" },
      { label: "Bussiness Relation", link: "" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Events", link: "" },
      { label: "Blog", link: "" },
      { label: "Podcast", link: "" },
      { label: "Invite a friend", link: "" },
    ],
  },
  {
    title: "Socials",
    links: [
      { label: "Discord", link: "" },
      { label: "Instagram", link: "" },
      { label: "Twitter", link: "" },
      { label: "Facebook", link: "" },
    ],
  },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: theme.common.white, mt: 8 }}
      p={60 / 8}
    >
      <Stack direction="row" justifyContent="space-between">
        <Stack gap={2}>
          <Typography
            component="h1"
            sx={{ fontSize: 32, fontWeight: 700 }}
            color="primary"
          >
            MORENT
          </Typography>
          <Typography
            fontSize={16}
            fontWeight={500}
            sx={{ color: "rgba(19, 19, 19, 0.60)" }}
          >
            Our vision is to provide convenience
            <br /> and help increase your sales business.
          </Typography>
        </Stack>
        <Stack direction="row" gap={60 / 8}>
          {DATA.map((item) => (
            <Stack component="section" about={item.title} key={item.title}>
              <Typography component="h3" fontSize={20} fontWeight={600}>
                {item.title}
              </Typography>
              <List>
                {item.links.map((list) => (
                  <ListItem disableGutters key={list.label}>
                    <ListItemText>{list.label}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Divider
        sx={{ my: 4, bgcolor: "rgba(19, 19, 19, 0.16)" }}
        orientation="horizontal"
      />
      <Stack direction="row" justifyContent="space-between">
        <Typography fontSize={16} fontWeight={600}>
          ©2022 MORENT. All rights reserved
        </Typography>
        <Stack direction="row" gap={60 / 8}>
          <Typography fontSize={16} fontWeight={600}>
            Privacy & Policy
          </Typography>
          <Typography fontSize={16} fontWeight={600}>
            Terms & Condition
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
