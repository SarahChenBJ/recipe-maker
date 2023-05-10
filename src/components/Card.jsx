import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import IconButton from '@mui/material/IconButton';
import html2canvas from 'html2canvas';


const Img = styled('img')({
  width: 'auto',
  height: '620px',
  display: 'flex',
  maxWidth: '490',
  maxHeight: '650',
});

export const ViewCard = ({ data }) => {
  const downloadCard = () => {
    html2canvas(document.getElementById('capture')).then((canvas)=>{
      const link = document.createElement("a");
      link.href = canvas.toDataURL();
      link.setAttribute("download", "recipeCard.png");
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
    });
  }

  return (
    <Paper
      id="capture"
      sx={{
        p: 2,
        margin: 'auto',
        width: 1000,
        height: 660,
        flexGrow: 1,
        evaluation: 24,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2} direction="row">
        <Grid item xs={4} sm container>
          <Grid item container direction="column" justifyContent="flex-start"
            alignItems="center">
            <Grid item >
              <Typography gutterBottom variant="body2">
                {data.labels}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Typography gutterBottom variant="h4" component="div" align= "center">
                {data.title}
              </Typography>
    
              <Typography gutterBottom variant="body2" align= "center">
                {data.subheader}
              </Typography>
            </Grid >
            <Grid item >
              <Typography variant="body2" gutterBottom>
                {data.intro}
              </Typography>
            </Grid>

            <Grid item container direction="row" spacing={1} wrap="wrap" alignItems="center" justifyContent="center">
              <Grid item xs={6}>
                <Typography variant="caption" display="block" gutterBottom style={{ wordWrap: "break-word" }}>
                {data.ingredients && data.ingredients.map((s) => (<p>{s}</p>))}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="caption" display="block" gutterBottom style={{ wordWrap: "break-word" }}>
                  {data.steps && data.steps.map((s) => (<p>{s}</p>))}
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={1}>
              <IconButton aria-label="add to favorites" onClick={downloadCard}>
                <FileDownloadOutlinedIcon/>
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3} sm >
          <Img src={data.img} alt={data.subheader} />
        </Grid>
      </Grid>
     
    </Paper>
  )
}
