"use client";

import { theme } from "@/utils/theme/palette";
import MarkIcon from "@/assets/icons/mark-icon";
import { useForm } from "react-hook-form";
import SwapIcon from "@/assets/icons/swap-icon";
import { Divider, Stack, Typography } from "@mui/material";
import FormProvider from "@/app/components/hook-form/form-provider";
import RHFAutocomplete from "@/app/components/hook-form/rhf-autocomplete";

const PickDetailsForm = () => {
  const methods = useForm({});

  return (
    <FormProvider methods={methods}>
      <Stack direction="row" my={4} gap={44 / 8} alignItems="center">
        <Stack
          px={6}
          py={3}
          sx={{ bgcolor: theme.common.white, borderRadius: 10 / 4 }}
          gap={2}
          flexGrow={1}
        >
          <Stack direction="row" gap={1} alignItems="center">
            <MarkIcon />
            <Typography fontSize={16} fontWeight={600}>
              Pick - Up
            </Typography>
          </Stack>
          <Stack direction="row" gap={3} alignItems="center">
            <Stack gap={1} flexGrow={1}>
              <Typography fontSize={16} fontWeight={700}>
                Location
              </Typography>
              <RHFAutocomplete
                InputProps={{
                  sx: { color: theme.secondary.light, fontSize: 12 },
                  disableUnderline: true,
                }}
                fullWidth
                disableClearable
                variant="standard"
                size="small"
                name="pickupLocation"
                placeholder="Select your city"
                options={["Hyderabad", "Chennai"]}
              />
            </Stack>
            <Divider
              orientation="vertical"
              sx={{ bgColor: "#C3D4E966", width: "min-content" }}
            />
            <Stack gap={1} flexGrow={1}>
              <Typography fontSize={16} fontWeight={700}>
                Date
              </Typography>
              <RHFAutocomplete
                InputProps={{
                  sx: { color: theme.secondary.light, fontSize: 12 },
                  disableUnderline: true,
                }}
                fullWidth
                disableClearable
                variant="standard"
                size="small"
                name="pickupLocation"
                placeholder="Select your date"
                options={["Hyderabad", "Chennai"]}
              />
            </Stack>
            <Divider
              orientation="vertical"
              sx={{ bgColor: "#C3D4E966", width: "min-content" }}
            />
            <Stack gap={1} flexGrow={1}>
              <Typography fontSize={16} fontWeight={700}>
                Time
              </Typography>
              <RHFAutocomplete
                InputProps={{
                  sx: { color: theme.secondary.light, fontSize: 12 },
                  disableUnderline: true,
                }}
                fullWidth
                disableClearable
                variant="standard"
                size="small"
                name="pickupLocation"
                placeholder="Select your time"
                options={["Hyderabad", "Chennai"]}
              />
            </Stack>
          </Stack>
        </Stack>
        <Stack
          justifyContent="center"
          alignItems="center"
          p={18 / 8}
          borderRadius={10 / 4}
          bgcolor="primary.main"
          height="max-content"
        >
          <SwapIcon />
        </Stack>
        <Stack
          px={6}
          py={3}
          sx={{ bgcolor: theme.common.white, borderRadius: 10 / 4 }}
          gap={2}
          flexGrow={1}
        >
          <Stack direction="row" gap={1} alignItems="center">
            <MarkIcon />
            <Typography fontSize={16} fontWeight={600}>
              Pick - Up
            </Typography>
          </Stack>
          <Stack direction="row" gap={3} alignItems="center">
            <Stack gap={1} flexGrow={1}>
              <Typography fontSize={16} fontWeight={700}>
                Location
              </Typography>
              <RHFAutocomplete
                InputProps={{
                  sx: { color: theme.secondary.light, fontSize: 12 },
                  disableUnderline: true,
                }}
                fullWidth
                disableClearable
                variant="standard"
                size="small"
                name="pickupLocation"
                placeholder="Select your city"
                options={["Hyderabad", "Chennai"]}
              />
            </Stack>
            <Divider
              orientation="vertical"
              sx={{ bgColor: "#C3D4E966", width: "min-content" }}
            />
            <Stack gap={1} flexGrow={1}>
              <Typography fontSize={16} fontWeight={700}>
                Date
              </Typography>
              <RHFAutocomplete
                InputProps={{
                  sx: { color: theme.secondary.light, fontSize: 12 },
                  disableUnderline: true,
                }}
                fullWidth
                disableClearable
                variant="standard"
                size="small"
                name="pickupLocation"
                placeholder="Select your date"
                options={["Hyderabad", "Chennai"]}
              />
            </Stack>
            <Divider
              orientation="vertical"
              sx={{ bgColor: "#C3D4E966", width: "min-content" }}
            />
            <Stack gap={1} flexGrow={1}>
              <Typography fontSize={16} fontWeight={700}>
                Time
              </Typography>
              <RHFAutocomplete
                InputProps={{
                  sx: { color: theme.secondary.light, fontSize: 12 },
                  disableUnderline: true,
                }}
                fullWidth
                disableClearable
                variant="standard"
                size="small"
                name="pickupLocation"
                placeholder="Select your time"
                options={["Hyderabad", "Chennai"]}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </FormProvider>
  );
};

export default PickDetailsForm;
