import { theme } from "@/utils/theme/palette";
import LinearHeart from "@/assets/icons/linear-heart";
import BoldHeart from "@/assets/icons/bold-heart";
import GasStation from "@/assets/icons/gas-station";
import ProfileIcon from "@/assets/icons/profile-icon";
import GearIcon from "@/assets/icons/gear-icon";
import { Box, Button, Checkbox, Grid, Stack, Typography } from "@mui/material";
import { ICarType } from "@/assets/data";
import Link from "next/link";

const CarCard = ({
  name,
  gas,
  price,
  seating,
  transmission,
  type,
  ...other
}: ICarType) => {
  return (
    <Grid item lg={4} md={4} xs={6} height="100%">
      <Stack gap={3} p={3} bgcolor={theme.common.white} borderRadius={10 / 4}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="start"
        >
          <Box>
            <Typography fontSize={20} fontWeight={700}>
              {name}
            </Typography>
            <Typography
              fontSize={14}
              fontWeight={700}
              sx={{ color: "#90A3BF" }}
            >
              {type}
            </Typography>
          </Box>
          <Checkbox icon={<LinearHeart />} checkedIcon={<BoldHeart />} />
        </Stack>
        <Box minHeight={200 / 8} px={1} py={2}>
          <other.image
            objectFit="contain"
            style={{ width: "100%" }}
            loading="lazy"
          />
        </Box>
        <Stack gap={3}>
          <Stack direction="row" gap={2} justifyContent="space-between">
            <Stack direction="row" gap={6 / 8} alignItems="center">
              <GasStation />
              <Typography fontSize={14} fontWeight={500} color="#90A3BF">
                {gas}L
              </Typography>
            </Stack>
            <Stack direction="row" gap={6 / 8} alignItems="center">
              <GearIcon />
              <Typography fontSize={14} fontWeight={500} color="#90A3BF">
                {transmission}
              </Typography>
            </Stack>
            <Stack direction="row" gap={6 / 8} alignItems="center">
              <ProfileIcon />
              <Typography fontSize={14} fontWeight={500} color="#90A3BF">
                {seating} People
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography fontSize={20} fontWeight={700} display="inline">
                ${price}.00/
              </Typography>
              <Typography
                fontWeight={700}
                fontSize={14}
                color="#90A3BF"
                display="inline"
              >
                day
              </Typography>
            </Box>
            <Button
              variant="contained"
              disableElevation
              LinkComponent={Link}
              href={"/billing/" + other.id}
            >
              Rent Now
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default CarCard;
