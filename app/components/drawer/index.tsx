"use client";

import FilterIcon from "@/assets/icons/filter-icon";
import {
  Checkbox,
  Drawer,
  Fab,
  FormControlLabel,
  FormControlLabelProps,
  FormGroup,
  Stack,
  Typography,
} from "@mui/material";
import { ACTION_TYPE, useStore } from "../store-provider";
import NotTick from "@/assets/icons/not-tick";
import TickSquare from "@/assets/icons/tick-square";
import { theme } from "@/utils/theme/palette";

export const DRAWER_WIDTH = 300;

const LIST = [
  {
    title: "T Y P E",
    checkBoxes: [
      { label: "Sport  (10)" },
      { label: "SUV  (12)" },
      { label: "MPV  (16)" },
      { label: "Sedan  (20)" },
      { label: "Coupe  (14)" },
      { label: "Hatchback  (14)" },
    ],
  },
  {
    title: "C A P A C I T Y",
    checkBoxes: [
      { label: "2 Person  (10)" },
      { label: "4 Person  (14)" },
      { label: "6 Person  (12)" },
      { label: "8 or More  (16)" },
    ],
  },
];

const ControlledCheckbox = (props: Omit<FormControlLabelProps, "control">) => (
  <FormControlLabel
    control={
      <Checkbox size="small" icon={<NotTick />} checkedIcon={<TickSquare />} />
    }
    {...props}
  />
);

const Aside = () => {
  const { state, dispatch } = useStore();
  const onClose = () =>
    dispatch({
      type: ACTION_TYPE.DRAWER,
      value: !state.openDrawer,
    });

  return (
    <>
      <Drawer
        component="aside"
        open={state.openDrawer}
        onClose={onClose}
        variant="persistent"
        sx={{
          "& .MuiDrawer-paper": {
            zIndex: 10,
            pt: 128 / 8,
          },
        }}
      >
        <Stack
          gap={56 / 8}
          sx={{ width: { lg: DRAWER_WIDTH, sm: "auto" }, p: 4 }}
          component="ul"
        >
          {LIST.map((item) => (
            <Stack gap={1} key={item.title} component="li">
              <Typography
                fontSize={12}
                fontWeight={600}
                color="#90A3BF"
                component="h3"
              >
                {item.title}
              </Typography>
              <FormGroup>
                {item.checkBoxes.map((checkbox) => (
                  <ControlledCheckbox
                    key={checkbox.label}
                    label={checkbox.label}
                    slotProps={{
                      typography: {
                        sx: {
                          fontWeight: 600,
                          color: theme.secondary.light,
                          fontSize: 14,
                        },
                      },
                    }}
                  />
                ))}
              </FormGroup>
            </Stack>
          ))}
        </Stack>
      </Drawer>
      <Fab
        sx={{ position: "fixed", bottom: 4 * 8, right: 4 * 8 }}
        aria-label="Filter"
        color="primary"
        onClick={onClose}
      >
        <FilterIcon />
      </Fab>
    </>
  );
};

export default Aside;
