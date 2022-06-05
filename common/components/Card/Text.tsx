import * as React from "react";
import omit from "lodash/omit";
import Typography from "@mui/material/Typography";
import {Children} from "common/interfaces/props";

interface TextProps extends Children {
    className?: string
}

const Text = (props: TextProps) => (
    <Typography {...omit(props, ['children'])} variant="body2" color="text.secondary">
        {props.children}
    </Typography>
)

export default Text
