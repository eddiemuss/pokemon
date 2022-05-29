import * as React from 'react';
import TextField from '@mui/material/TextField';
import {FCReturnValue} from "../../interfaces/return";

interface Props {
    label: string
    id: string
    onChange: (value: string) => void
}

const BasicTextField = (props: Props): FCReturnValue => (
    <TextField {...props} onChange={({target: {value}}) => props.onChange(value)} variant="outlined"/>
)

export default BasicTextField
