import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import {Skeleton} from "@mui/material";

interface Props {
    image: string
    alt: string
    height?: number
    loading?: boolean
}

const ImageComponent = ({image, alt, height = 292, loading = false}: Props) => {
    const [loaded, setLoaded] = React.useState(false);

    const showImage = loaded && !loading
    return (
        <>
            {!showImage && <Skeleton variant="rectangular" height={height}/>}
            <CardMedia
                component="img"
                height={height}
                image={image}
                alt={alt}
                onLoad={() => setLoaded(true)}
                style={showImage ? {display: 'inline-block'} : {display: 'none'}}
            />
        </>
    )
}

export default ImageComponent

