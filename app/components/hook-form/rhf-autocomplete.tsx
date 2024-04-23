import { useFormContext, Controller } from "react-hook-form";
// @mui
import TextField, { TextFieldVariants } from "@mui/material/TextField";
import Autocomplete, { AutocompleteProps } from "@mui/material/Autocomplete";
import {
  FilledInputProps,
  InputProps,
  OutlinedInputProps,
} from "@mui/material";

// ----------------------------------------------------------------------

interface Props<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> extends AutocompleteProps<T, Multiple, DisableClearable, FreeSolo> {
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: React.ReactNode;
  variant?: TextFieldVariants;
  InputProps?:
    | Partial<FilledInputProps>
    | Partial<OutlinedInputProps>
    | Partial<InputProps>
    | undefined;
}

export default function RHFAutocomplete<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
>({
  name,
  label,
  placeholder,
  variant,
  helperText,
  InputProps,
  ...other
}: Omit<Props<T, Multiple, DisableClearable, FreeSolo>, "renderInput">) {
  const { control, setValue } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          {...field}
          onChange={(event, newValue) =>
            setValue(name, newValue, { shouldValidate: true })
          }
          renderInput={(params) => (
            <TextField
              label={label}
              placeholder={placeholder}
              error={!!error}
              helperText={error ? error?.message : helperText}
              variant={variant}
              {...params}
              InputProps={{ ...InputProps, ...params.InputProps }}
            />
          )}
          {...other}
        />
      )}
    />
  );
}
