import CardMedia from "@mui/material/CardMedia";
import * as React from "react";

interface Props {
    image: string
    alt: string
    height?: number
}

const Image = ({ image, alt, height = 140 }: Props) => (
    <CardMedia
        component="img"
        height={height}
        image={image}
        alt={alt}
    />
)

export default Image

