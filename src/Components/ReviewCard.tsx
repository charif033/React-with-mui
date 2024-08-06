import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { blueGrey } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { IconButton, Rating } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React from 'react';



export default function ReviewCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: blueGrey[500] }} aria-label="recipe">
                        J
                    </Avatar>
                }
                title="John Doe"
                subheader="September 14, 2016"
            />

            <CardContent>
                <Rating name="read-only" value={4} readOnly />
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat consequatur facilis omnis consequuntur! Laudantium neque consequuntur animi ducimus quos.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export function ReviewInput() {
    const [value, setValue] = React.useState<number | null>(0);
    return (
        <Card sx={{ maxWidth: '100%' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: blueGrey[500] }} aria-label="recipe">
                        Y
                    </Avatar>
                }
                title="You"
                subheader=""
            />

            <CardContent>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
                <Typography variant="body2" color="text.secondary">
                    <textarea name="comment" id="" style={{ width: '98%', padding: '5px', border: '1px solid lightgray', borderRadius: '5px', resize: 'none' }} ></textarea>
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton sx={{ margin: '0 20px 0 auto' }} >
                    <SendIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}