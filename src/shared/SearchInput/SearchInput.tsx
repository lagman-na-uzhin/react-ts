import {FC, ReactNode} from "react";
import {TextFieldProps, Autocomplete, Stack, TextField, StackProps} from "@mui/material";



type SearchInputProps = {
    placeholder: ReactNode,
    searchData?: string[] | undefined,
    searchField?: string | undefined
}
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    ]
export const SearchInput:FC<SearchInputProps&TextFieldProps&StackProps> = ({placeholder, sx, variant, width}) => {
    return (
        <Stack spacing={2} sx={{ width: width }}>
            <Autocomplete
                disableClearable
                options={top100Films.map((option) => option.title)}
                renderInput={(params) => (
                    <TextField
                        sx={sx}
                        variant={variant}
                        {...params}
                        label={placeholder}
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                        }}
                    />
                )}
            />
            </Stack>
    );
}
