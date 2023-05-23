import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import IconButton from '@mui/material/IconButton';
import html2canvas from 'html2canvas';


// const Img = styled('img')({
//   width: 'auto',
//   display: 'flex',
//   maxWidth: '490',
//   maxHeight: '650'
// });

export const ViewCardVertical = ({ data }) => {
    const downloadCard = () => {
        html2canvas(document.getElementById('capture')).then((canvas)=>{
          const link = document.createElement("a");
          link.href = canvas.toDataURL();
          link.setAttribute("download", data.title+".jpg");
          link.style.display = "none";
          document.body.appendChild(link);
          link.click();
        });
      }

  return (
    
    <Paper
      id="capture"
      className='card-paper '
      sx={{
        p: 2,
        margin: 'auto',
        width: 900,
        height: 1200,
        flexGrow: 50,
        evaluation: 240,
        backgroundColor: '#EFEEEC',
        // backgroundColor: (theme) =>
        //   theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      
      <div className='vcard-container  card-paper'>
        {/* <div className='card-text-container'>
            <div className='card-text-header'>
                <div className='card-label category-font'>  {data.category} </div>
                <div className='card-title title-font'>{data.title}</div>
                <div className='subtitle-font'>{data.subheader}</div>
                <div className='card-intro '>
                    <div className='intro-font'>{data.intro}</div>
                    <div className='intro-font signature'> –––––– {data.sign}</div>
                </div>
            </div>
            <div className='card-text-content'>
                <div className='card-ingre'>
                <div className='card-serve'>SERVES {data.serves}</div>
                {data.ingredients && data.ingredients.map((s) => (<p>{s}</p>))}
                </div>
                <div className='card-steps'>
                {data.steps && data.steps.map((s) => (<div className='step-item'>{s}</div>))}
                </div>
            </div>
            <div className='download-btn' id="download-btn">
                <IconButton aria-label="Download as picture" onClick={downloadCard}>
                    <FileDownloadOutlinedIcon/>
                </IconButton>
            </div>
            
        </div>
        <div className='card-img-container'>
            <Img src={data.img} alt={data.subheader} />
        </div> */}
        <div className='vcard-head-container' style={{ backgroundImage: `url(${data.img})` }}>
        </div>
        <div className='vcard-text-container'>
        <div className='card-text-header'>
                {/* <div className='card-label category-font'>  {data.category} </div> */}
                <div className='card-title title-font'>{data.title}</div>
                <div className='subtitle-font'>{data.subheader}</div>
                <div className='card-intro '>
                    <div className='intro-font'>{data.intro}</div>
                    <div className='intro-font signature'> –––––– {data.sign}</div>
                </div>

            </div>
        </div>
        <div className='card-instruction-container'>
        <div className='instr-text card-serve'>SERVES {data.serves}</div>
        <div ></div>
            {
              data.instructions && data.instructions.map((s) => {
                  return <div className='card-instruction'>
                    <div className='card-ingre ingredient instr-text'>
                      {s.ingredients && s.ingredients.map((s) => (<p>{s}</p>))}
                    </div>
                    {/* <div className='ingredient'>{s.ingredients}</div> */}
                    <div className='step-item step instr-text'>
                        {s.steps && s.steps.map((s) => (<p>{s}</p>))}
                    </div>
                  </div>
                })
              
            }
            
        </div>
      </div>
      <div className='download-btn' id="download-btn">
                <IconButton aria-label="Download as picture" onClick={downloadCard}>
                    <FileDownloadOutlinedIcon/>
                </IconButton>
            </div>
    </Paper>
    
    
  )
}
