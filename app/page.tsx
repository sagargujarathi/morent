import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Ad from "./sections/ad";
import PickDetailsForm from "./sections/pick-details-form";
import PopularCars from "./sections/popular-cars-sections";
import CarCard from "./sections/pick-details-form/car-card";
import CAR_DATA from "@/assets/data";

const Home = () => {
  return (
    <>
      <Ad />
      <PickDetailsForm />
      <PopularCars />
      <Stack component="section" about="Recomendation Car" gap={20 / 8} mt={4}>
        <Stack direction="row" justifyContent="space-between">
          <Typography fontSize={16} fontWeight={600} sx={{ color: "#90A3BF" }}>
            Recomendation Car
          </Typography>
          <Button variant="text">View All</Button>
        </Stack>
        <Grid container spacing={4}>
          {CAR_DATA.map((item) => (
            <CarCard key={item.id} {...item} />
          ))}
        </Grid>
        <Box mt={5} mx="auto">
          <Button variant="contained" disableElevation>
            Show more cars
          </Button>
        </Box>
      </Stack>
    </>
  );
};

export default Home;
