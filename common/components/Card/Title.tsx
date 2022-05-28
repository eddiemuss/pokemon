import Typography from "@mui/material/Typography";
import * as React from "react";
import {Children} from "common/interfaces/props";

const Title = ({children}: Children) => (
    <Typography variant="h3" component="div">
        {children}
    </Typography>
)

export default Title
