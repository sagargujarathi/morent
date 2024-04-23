import { TextFieldProps } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Controller, useFormContext } from "react-hook-form";

type Props = {
  name: string;
  label?: string;
  fullWidth?: boolean;
  maxDate?: string;
  minDate?: string;
  helperText?: string;
  placeholder?: string;
  textfield: TextFieldProps;
};

const RHFDatePicker = ({ name, helperText, ...other }: Props) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <DatePicker
          {...field}
          slotProps={{
            textField: {
              fullWidth: true,
              error: !!error,
              helperText: error?.message || helperText,
              ...other.textfield,
              placeholder: other.placeholder,
            },
          }}
        />
      )}
    />
  );
};

export default RHFDatePicker;
