import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { CardActionArea, Chip, Divider, Modal, Stack,Button } from '@mui/material';
import ComplexGrid from './testpop';
import { ViewCard } from './Card';
import { ViewCard2} from './Card2';
import { ViewCover } from './Cover'


export default function RecipeReviewCard({ data }) {
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
                    image={data.img}
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

            {/* <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" >
                    <FavoriteIcon/>
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                
            </CardActions> */}
            <CardActions onClick={viewCover}>
                <Button size="small" color="primary">
                View Cover
                </Button>
            </CardActions>
        </Card>
        <Modal
            open={open}
            onClose={closeCard}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            {data.lang === 'zh' ? <ViewCard2 data={data}/> : <ViewCard data={data}/>}
            
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