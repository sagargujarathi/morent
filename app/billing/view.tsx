import { theme } from "@/utils/theme/palette";
import {
  Box,
  Button,
  Divider,
  Grid,
  InputAdornment,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { lazy } from "react";
import RHFTimePicker from "../components/hook-form/rhf-time-picker";
import MarkIcon from "@/assets/icons/mark-icon";
import VisaIcon from "@/assets/icons/visa-icon";
import MasterCard from "@/assets/icons/master-card-icon";
import Banner2 from "@/assets/icons/banner-2";
import { RHFCheckbox } from "../components/hook-form/rhf-checkbox";
import NotTick from "@/assets/icons/not-tick";
import TickSquare from "@/assets/icons/tick-square";
import LayerIcon from "@/assets/icons/layer-icon";
import CAR_DATA from "@/assets/data";
import Link from "next/link";

const RHFTextField = lazy(
  () => import("../components/hook-form/rhf-text-field")
);
const RHFDatePicker = lazy(
  () => import("../components/hook-form/rhf-date-picker")
);
const RHFAutocomplete = lazy(
  () => import("../components/hook-form/rhf-autocomplete")
);

interface Props {
  title: string;
  name: string;
  placeholder: string;
  type: "DATE_PICKER" | "TIME_PICKER" | "AUTOCOMPLETE" | "TEXT_FIELD";
  options?: unknown[];
  bgcolor?: string;
}

const InputBox = ({ title, name, placeholder, type, ...other }: Props) => (
  <Grid item lg={6}>
    <Stack gap={2}>
      <Typography fontSize={16} fontWeight={600}>
        {title}
      </Typography>
      {type === "TEXT_FIELD" && (
        <RHFTextField
          name={name}
          placeholder={placeholder}
          sx={{
            bgcolor: "#F6F7F9",
            borderRadius: 10 / 4,
            outline: "none",
            "& fieldset": { border: "none" },
            ...other,
          }}
          InputProps={{
            sx: { outline: "none", fontSize: 14, fontWeight: 500 },
          }}
        />
      )}
      {type === "DATE_PICKER" && (
        <RHFDatePicker
          name={name}
          placeholder={placeholder}
          textfield={{
            sx: {
              bgcolor: "#F6F7F9",
              borderRadius: 10 / 4,
              outline: "none",
              "& fieldset": { border: "none" },
            },
          }}
        />
      )}
      {type === "AUTOCOMPLETE" && (
        <RHFAutocomplete
          name={name}
          placeholder={placeholder}
          options={[]}
          InputProps={{
            sx: {
              bgcolor: "#F6F7F9",
              borderRadius: 10 / 4,
              outline: "none",
              "& fieldset": { border: "none" },
            },
          }}
          {...other}
        />
      )}
      {type === "TIME_PICKER" && (
        <RHFTimePicker
          name={name}
          placeholder={placeholder}
          textfield={{
            sx: {
              bgcolor: "#F6F7F9",
              borderRadius: 10 / 4,
              outline: "none",
              "& fieldset": { border: "none" },
            },
          }}
        />
      )}
    </Stack>
  </Grid>
);

const View = ({ id, isValid }: { id: number; isValid: boolean }) => {
  const CAR = CAR_DATA[id - 1];

  return (
    <Grid container component="section" spacing={4}>
      <Grid item container spacing={4} lg={7}>
        <Grid item lg={12} component="section" about="Billing Information">
          <Stack
            p={3}
            gap={4}
            borderRadius={10 / 4}
            bgcolor={theme.common.white}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="end"
            >
              <Box>
                <Typography fontSize={20} fontWeight={700}>
                  Billing Info
                </Typography>
                <Typography fontSize={14} fontWeight={500} color="#90A3BF">
                  Please enter your billing info
                </Typography>
              </Box>
              <Typography fontSize={14} fontWeight={500} color="#90A3BF">
                Step 1 of 4
              </Typography>
            </Stack>
            <Grid container rowSpacing={3} columnSpacing={4}>
              <InputBox
                title="Name"
                name="name"
                placeholder="Your name"
                type="TEXT_FIELD"
              />
              <InputBox
                title="Phone Number"
                name="phoneNumber"
                placeholder="Phone number"
                type="TEXT_FIELD"
              />
              <InputBox
                title="Address"
                name="address"
                placeholder="Address"
                type="TEXT_FIELD"
              />
              <InputBox
                title="Town / City"
                name="townOrCity"
                placeholder="Town or city"
                type="TEXT_FIELD"
              />
            </Grid>
          </Stack>
        </Grid>

        <Grid item lg={12} component="section" about="Rental Information">
          <Stack
            p={3}
            gap={4}
            borderRadius={10 / 4}
            bgcolor={theme.common.white}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="end"
            >
              <Box>
                <Typography fontSize={20} fontWeight={700}>
                  Rental Info
                </Typography>
                <Typography fontSize={14} fontWeight={500} color="#90A3BF">
                  Please select your rental date
                </Typography>
              </Box>
              <Typography fontSize={14} fontWeight={500} color="#90A3BF">
                Step 2 of 4
              </Typography>
            </Stack>
            <Grid container rowSpacing={3} columnSpacing={4}>
              <Grid item lg={12}>
                <Stack direction="row" alignItems="center" gap={1}>
                  <MarkIcon />
                  <Typography fontSize={16} fontWeight={600}>
                    Pick - Up
                  </Typography>
                </Stack>
              </Grid>
              <InputBox
                title="Locations"
                name="pickup.location"
                placeholder="Select your city"
                type="AUTOCOMPLETE"
                options={["London", "Glasgow", "Hyderabad"]}
              />
              <InputBox
                title="Date"
                name="pickup.date"
                placeholder="Select your date"
                type="DATE_PICKER"
              />
              <InputBox
                title="Time"
                name="pickup.time"
                placeholder="Select your time"
                type="TIME_PICKER"
              />
            </Grid>
            <Grid container spacing={3}>
              <Grid item lg={12}>
                <Stack direction="row" alignItems="center" gap={1}>
                  <MarkIcon />
                  <Typography fontSize={16} fontWeight={600}>
                    Drop - Off
                  </Typography>
                </Stack>
              </Grid>
              <InputBox
                title="Locations"
                name="dropoff.location"
                placeholder="Select your city"
                type="AUTOCOMPLETE"
                options={["London", "Glasgow", "Hyderabad"]}
              />
              <InputBox
                title="Date"
                name="dropoff.date"
                placeholder="Select your date"
                type="DATE_PICKER"
              />
              <InputBox
                title="Time"
                name="dropoff.time"
                placeholder="Select your time"
                type="TIME_PICKER"
              />
            </Grid>
          </Stack>
        </Grid>
        <Grid item lg={12} component="section" about="Payment Method">
          <Stack
            p={3}
            gap={4}
            borderRadius={10 / 4}
            bgcolor={theme.common.white}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="end"
            >
              <Box>
                <Typography fontSize={20} fontWeight={700}>
                  Payment Method
                </Typography>
                <Typography fontSize={14} fontWeight={500} color="#90A3BF">
                  Please enter your payment method
                </Typography>
              </Box>
              <Typography fontSize={14} fontWeight={500} color="#90A3BF">
                Step 3 of 4
              </Typography>
            </Stack>
            <Box sx={{ bgcolor: "#F6F7F9", borderRadius: 10 / 4, p: 3 }}>
              <Grid container spacing={4}>
                <Grid item lg={12}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Stack direction="row" alignItems="center" gap={1}>
                      <MarkIcon />
                      <Typography fontSize={16} fontWeight={600}>
                        Credit Card
                      </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" gap={1}>
                      <VisaIcon />
                      <MasterCard />
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item container lg={12} rowSpacing={3} columnSpacing={4}>
                  <InputBox
                    title="Card Number"
                    name="cardNumber"
                    placeholder="Card number"
                    type="TEXT_FIELD"
                    bgcolor={theme.common.white}
                  />
                  <InputBox
                    title="Expration Date"
                    name="expDate"
                    placeholder="DD / MM / YY"
                    type="TEXT_FIELD"
                    bgcolor={theme.common.white}
                  />
                  <InputBox
                    title="Card Holder"
                    name="cardHolder"
                    placeholder="Card holder"
                    type="TEXT_FIELD"
                    bgcolor={theme.common.white}
                  />
                  <InputBox
                    title="CVC"
                    name="cvc"
                    placeholder="CVC"
                    type="TEXT_FIELD"
                    bgcolor={theme.common.white}
                  />
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </Grid>
        <Grid item lg={12} component="section" about="Confirmation">
          <Stack
            p={3}
            gap={4}
            borderRadius={10 / 4}
            bgcolor={theme.common.white}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="end"
            >
              <Box>
                <Typography fontSize={20} fontWeight={700}>
                  Confirmation
                </Typography>
                <Typography fontSize={14} fontWeight={500} color="#90A3BF">
                  We are getting to the end. Just few clicks and your rental is
                  ready!
                </Typography>
              </Box>
              <Typography fontSize={14} fontWeight={500} color="#90A3BF">
                Step 4 of 4
              </Typography>
            </Stack>
            <Stack gap={3}>
              <RHFCheckbox
                name="agree1"
                checkedIcon={<NotTick />}
                icon={<TickSquare />}
                label="I agree with sending an Marketing and newsletter emails. No spam, promissed!"
                sx={{
                  bgcolor: "#F6F7F9",
                  px: 4,
                  py: 1,
                  width: "100%",
                  borderRadius: 10 / 4,
                }}
                slotProps={{ typography: { fontWeight: 600, fontSize: 16 } }}
              />
              <RHFCheckbox
                name="agree2"
                checkedIcon={<NotTick />}
                icon={<TickSquare />}
                label="I agree with our terms and conditions and privacy policy."
                sx={{
                  bgcolor: "#F6F7F9",
                  px: 4,
                  py: 1,
                  width: "100%",
                  borderRadius: 10 / 4,
                }}
                slotProps={{ typography: { fontWeight: 600, fontSize: 16 } }}
              />
            </Stack>
            <Button
              variant="contained"
              size="large"
              sx={{ width: "max-content" }}
              disableElevation
              LinkComponent={Link}
              href={"/"}
              type="submit"
              disabled={!isValid}
            >
              Rent Now
            </Button>
            <Stack gap={2}>
              <LayerIcon />
              <Box>
                <Typography fontSize={16} fontWeight={600}>
                  All your data are safe
                </Typography>
                <Typography fontSize={14} fontWeight={500} color="#90A3BF">
                  We are using the most advanced security to provide you the
                  best experience ever.
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <Grid
        item
        lg={5}
        xs={12}
        alignItems="start"
        component="section"
        about="Rental Summary"
      >
        <Stack p={3} gap={4} borderRadius={10 / 4} bgcolor={theme.common.white}>
          <Box>
            <Typography fontSize={20} fontWeight={700}>
              Rental Summary
            </Typography>
            <Typography fontSize={14} fontWeight={500} color="#90A3BF">
              Prices may change depending on the length of the rental and the
              price of your rental car.
            </Typography>
          </Box>
          <Stack direction="row" gap={3} alignItems="center">
            <Box
              width={132}
              height={108}
              bgcolor={theme.primary.main}
              borderRadius={2}
              position="relative"
            >
              <Banner2 />
              <CAR.image
                style={{
                  position: "absolute",
                  width: "95%",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </Box>
            <Stack>
              <Typography fontSize={32} fontWeight={700}>
                {CAR.name}
              </Typography>
              <Stack direction="row" gap={1} alignItems="center">
                <Rating defaultValue={4} readOnly />
                <Typography
                  fontSize={14}
                  fontWeight={500}
                  color={theme.secondary.light}
                >
                  440+ Reviewer
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Divider />
          <Stack direction="row" justifyContent="space-between">
            <Typography fontSize={16} fontWeight={500} color="#90A3BF">
              Subtotal
            </Typography>
            <Typography fontSize={16} fontWeight={600}>
              ${CAR.price}.00
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Typography fontSize={16} fontWeight={500} color="#90A3BF">
              Tax
            </Typography>
            <Typography fontSize={16} fontWeight={600}>
              $0
            </Typography>
          </Stack>
          <TextField
            placeholder="Apply promo code"
            sx={{
              bgcolor: "#F6F7F9",
              borderRadius: 10 / 4,
              outline: "none",
              "& fieldset": { border: "none" },
            }}
            InputProps={{
              sx: { outline: "none", fontSize: 14, fontWeight: 500 },

              endAdornment: (
                <InputAdornment position="end">
                  <Button variant="text" color="secondary">
                    Apply now
                  </Button>
                </InputAdornment>
              ),
            }}
          />
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography fontSize={20} fontWeight={700}>
                Total Rental Price
              </Typography>
              <Typography fontSize={14} fontWeight={500} color="#90A3BF">
                Overall price and includes rental discount
              </Typography>
            </Box>
            <Typography fontSize={32} fontWeight={700}>
              ${CAR.price}.00
            </Typography>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default View;
