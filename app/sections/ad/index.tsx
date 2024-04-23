import Banner1 from "@/assets/icons/banner-1";
import Banner2 from "@/assets/icons/banner-2";
import Car1 from "@/assets/icons/mock/car-1";
import Car2 from "@/assets/icons/mock/car-2";
import { theme } from "@/utils/theme/palette";
import { Box, Button, Stack, Typography } from "@mui/material";

const Ad = () => (
  <Stack component="section" direction="row" gap={4} justifyContent="center">
    <Stack
      sx={{ bgcolor: theme.info.main, borderRadius: 10 / 4 }}
      width="50%"
      position="relative"
    >
      <Banner1 />
      <Stack position="absolute" p={3} gap={2}>
        <Typography
          fontSize={32}
          fontWeight={600}
          color={"primary.contrastText"}
        >
          The Best Platform <br /> for Car Rental
        </Typography>
        <Typography
          fontSize={16}
          fontWeight={500}
          color={"primary.contrastText"}
        >
          Ease of doing a car rental safely and
          <br /> reliably. Of course at a low price.
        </Typography>
        <Box>
          <Button
            variant="contained"
            size="large"
            sx={{ fontSize: 16, fontWeight: 600 }}
            disableElevation
          >
            Rental Car
          </Button>
        </Box>
      </Stack>
      <Car1 style={{ position: "absolute", right: "97px", bottom: "10px" }} />
    </Stack>
    <Stack
      width="50%"
      sx={{ bgcolor: theme.primary.main, borderRadius: 10 / 4 }}
      position="relative"
    >
      <Banner2 />
      <Stack position="absolute" p={3} gap={2}>
        <Typography
          fontSize={32}
          fontWeight={600}
          color={"primary.contrastText"}
        >
          The Best Platform <br /> for Car Rental
        </Typography>
        <Typography
          fontSize={16}
          fontWeight={500}
          color={"primary.contrastText"}
        >
          Ease of doing a car rental safely and
          <br /> reliably. Of course at a low price.
        </Typography>
        <Box>
          <Button
            variant="contained"
            size="large"
            color="info"
            sx={{ fontSize: 16, fontWeight: 600 }}
            disableElevation
          >
            Rental Car
          </Button>
        </Box>
      </Stack>
      <Car2 style={{ position: "absolute", right: "97px", bottom: "10px" }} />
    </Stack>
  </Stack>
);

export default Ad;
