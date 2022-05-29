import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import Image from './Image'
import Title from './Title'
import Text from './Text'
import {Children} from "common/interfaces/props"
import Chips from "./Chips";
import Content from "./Content";

const MediaCard = ({children}: Children) => {
    return (
        <Card sx={{maxWidth: 345}} className="m-4">
            {children}
        </Card>
    );
}

MediaCard.Image = Image
MediaCard.Content = Content
MediaCard.Title = Title
MediaCard.Text = Text
MediaCard.Bottom = CardActions
MediaCard.Chips = Chips

export default MediaCard