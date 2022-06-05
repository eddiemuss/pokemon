import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import Image from './Image'
import Title from './Title'
import Text from './Text'
import {Children} from "common/interfaces/props"
import Chips from "./Chips";
import Content from "./Content";
import {Skeleton} from "@mui/material";

interface MediaCardProps extends Children {
    onClick: () => void
}

const MediaCard = ({children, onClick}: MediaCardProps) => {
    return (
        <Card sx={{width: 345}} className="m-4" onClick={onClick}>
            {children}
        </Card>
    );
}

interface Props extends Children {
    loading: boolean
}

const CustomCardActions = ({loading = false, children}: Props) => {
    if (loading) return <Skeleton variant="rectangular" height="48"/>
    return <CardActions>{children}</CardActions>
}


MediaCard.Image = Image
MediaCard.Content = Content
MediaCard.Title = Title
MediaCard.Text = Text
MediaCard.Bottom = CustomCardActions
MediaCard.Chips = Chips

export default MediaCard