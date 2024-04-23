import { Button, Grid, Stack, Typography } from "@mui/material";
import CarCard from "../pick-details-form/car-card";
import CAR_DATA from "@/assets/data";

const PopularCars = () => {
  return (
    <Stack component="section" about="Popular Cars" gap={20 / 8}>
      <Stack direction="row" justifyContent="space-between">
        <Typography fontSize={16} fontWeight={600} sx={{ color: "#90A3BF" }}>
          Popular Car
        </Typography>
        <Button variant="text">View All</Button>
      </Stack>
      <Grid container spacing={4}>
        {CAR_DATA.slice(0, 3).map((item) => (
          <CarCard key={item.id} {...item} />
        ))}
      </Grid>
    </Stack>
  );
};

export default PopularCars;
