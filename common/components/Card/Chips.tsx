import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

interface Props {
    chips: string[]
}

const BaseChip = ({label}: { label: string }) => <Chip label={label}/>


const Chips = ({chips}: Props) => {
    return (
        <Stack direction="row" spacing={1}>
            {chips.map((chip) => <BaseChip key={chip} label={chip}/>)}
        </Stack>
    );
}

export default Chips