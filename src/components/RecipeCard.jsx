import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { CardActionArea, Chip, Divider, Modal, Stack,Button } from '@mui/material';
import { ViewCover } from './Cover';
import { ViewCardVertical } from './Card3';
import {ViewCard_group_ver_ximg} from './listTemplate/Card4';
import {ViewCard_ungroup_hor} from './listTemplate/Card2-1';
import {ViewCard_group_ver} from './listTemplate/Card3';
import {ViewCard_ungroup_ver} from './listTemplate/Card4-1'

export default function RecipeReviewCard({ data }) {
    const [open, setOpen] = React.useState(false);
    const viewCard = () => setOpen(true);
    const closeCard = () => setOpen(false);

    const [coverOpen, setCoverOpen] = React.useState(false);
    const viewCover = () => setCoverOpen(true);
    const closeCover = () => setCoverOpen(false);

    const getTemplate = (recipe) => {
        switch (recipe.template) {
          case 'card2-1': return <ViewCard_ungroup_hor data={recipe}/>
          case 'card3': return <ViewCard_group_ver data={recipe}/>
          case 'card4': return <ViewCard_group_ver_ximg data={recipe}/>
          case 'card4-1': return <ViewCard_ungroup_ver data={recipe}/>
          default: return <ViewCard_ungroup_hor data={recipe}/>
        }
      }

    return (
        <>
        <Card sx={{ maxWidth: 380 }} className="card-thumb">
            <CardActionArea onClick={viewCard} >
            {}
                <CardMedia
                    component="img"
                    height="180"
                    image={data.coverImg === undefined || data.coverImg=="" ? data.img : data.coverImg}
                    alt={data.subheader}
                />
                <CardHeader title={data.title} />
                <CardContent> 
                    <div className='story'>
                        {data.intro}
                    </div>
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
            {
                getTemplate(data)
            }
            {/* <ViewCardVertical data={data}/> */}
            {/* {data.lang === 'zh' ? <ViewCard2 data={data}/> : <ViewCard data={data}/>} */}
            {/* <ViewCardVertical data={data}/>
            <ViewCardVertical2 data={data}/> */}
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