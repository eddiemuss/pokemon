import Typography from "@mui/material/Typography";
import * as React from "react";
import {Children} from "common/interfaces/props";


const Text = ({children}: Children) => (
    <Typography variant="body2" color="text.secondary">
        {children}
    </Typography>
)

export default Text
