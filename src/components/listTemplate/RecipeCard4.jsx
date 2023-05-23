import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { CardActionArea, Chip, Divider, Modal, Stack, Button} from '@mui/material';
import { ViewCover } from '../Cover';
import {ViewCard_ungroup_ver} from './Card4-1'

export default function RecipeReviewCard2({ data }) {
    const [open, setOpen] = React.useState(false);
    const viewCard = () => setOpen(true);
    const closeCard = () => setOpen(false);

    const [coverOpen, setCoverOpen] = React.useState(false);
    const viewCover = () => setCoverOpen(true);
    const closeCover = () => setCoverOpen(false);


    return (
        <>
        <Card sx={{ maxWidth: 380 }} className="card-thumb">
            <CardActionArea onClick={viewCard} >
            {/* <CardHeader
                // avatar={
                //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                //     S
                //   </Avatar>
                // }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={data.title}
            // subheader={data.subheader}
            /> */}
                <CardMedia
                    component="img"
                    height="230"
                    image={data.coverImg === undefined || data.coverImg=="" ? data.img : data.coverImg}
                    alt={data.subheader}
                />
                <CardHeader title={data.title} />
                
                <CardContent> 
                <Typography variant="body2" color="text.secondary">
                    {data.intro}
                </Typography>
                <Stack direction="row" mt={2}  spacing={1} >
                    {data.labels && data.labels.map((lb) => (<Chip label={lb} />))}
                </Stack>
            </CardContent>
            </CardActionArea>
            <CardActions onClick={viewCover}>
                <Button size="small" color="primary">
                View Cover
                </Button>
            </CardActions>

            {/* <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" >
                    <FavoriteIcon/>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                
            </CardActions> */}
        </Card>
        <Modal
            open={open}
            onClose={closeCard}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <ViewCard_ungroup_ver data={data}/>

        </Modal>
       
        <Modal
            open={coverOpen}
            onClose={closeCover}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <ViewCover data={data}/>

        </Modal>
        
        </>
    );
}