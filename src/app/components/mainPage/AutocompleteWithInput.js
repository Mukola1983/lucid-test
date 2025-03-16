"use client"
import React, {useEffect, useState} from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';


const filter = createFilterOptions();

const AutocompleteWithInput = ({handleState, list,width="150px",state, optionName, label}) => {


    const filterOptions = (options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        const isExisting = options.some((option) => inputValue === option?.[optionName]);
        if (inputValue !== '' && !isExisting) {
            filtered.push({
                inputValue,
                [optionName]: `Додати "${inputValue}"`,
            });
        }

        return filtered;
    }

    const handleLocalState = (event, newValue) => {
        if (typeof newValue === 'string') {
            handleState(state, {[optionName]: newValue})

        } else if (newValue && newValue.inputValue) {
            handleState(state, {[optionName]: newValue.inputValue})
        } else {
             handleState(state, newValue)
        }
    }


    return (
        <Autocomplete
            value={state}
            onChange={handleLocalState}
            filterOptions={filterOptions}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            id="free-solo-with-text-demo"
            options={list}
            getOptionLabel={(option) => {
                if (typeof option === 'string') {
                    return option;
                }
                if (option.inputValue) {
                    return option.inputValue;
                }
                return option?.[optionName];
            }}
            renderOption={(props, option) => {
                const { key, ...optionProps } = props;
                return (
                    <li key={key} {...optionProps}>
                        {option?.[optionName]}
                    </li>
                );
            }}
            sx={{
                width: width,
                '& .MuiOutlinedInput-root': {
                    border: 'none', // Remove border
                },
                '& .MuiInputBase-root': {
                    border: 'none', // Remove the input's border as well
                },
                '& .MuiAutocomplete-listbox': {
                    border: 'none', // Remove border from dropdown list
                },
            }}
            freeSolo
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            border: 'none', // Remove border
                        },
                        '& .MuiInputBase-root': {
                            border: 'none', // Remove the input's border as well
                        },
                    }}
                />
            )}
        />
    );
}

export default AutocompleteWithInput

