import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import IconButton from '@mui/material/IconButton';
import html2canvas from 'html2canvas';


const Img = styled('img')({
  width: 'auto',
  height: '620px',
  display: 'flex',
  maxWidth: '490',
  maxHeight: '650'
});

//horizontal: img + group
export const ViewCard_group_hor = ({ data }) => {
    const downloadCard = () => {
      const dom = document.getElementById('capture');

      const config = {
        useCORS: true
      }
      html2canvas(dom, config).then((canvas)=>{
          const link = document.createElement("a");
          link.href = canvas.toDataURL();
          link.setAttribute("download", data.title+".jpg");
          link.style.display = "none";
          document.body.appendChild(link);
          link.click();
        });
      };

  return (
    
    <Paper
      id="capture"
      className='card-paper'
      sx={{
        p: 2,
        margin: 'auto',
        width: 1200,
        height: 675,
        flexGrow: 50,
        boxShadow: 2,
        borderRadius: 3,
        evaluation: 240,
        backgroundColor: '#EFEEEC',
        // backgroundColor: (theme) =>
        //   theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <div className='bcard-container' >
        <div className='bcard-text-container'>
            <div className='bcard-text-header'>
                <div className='bcategory-font'>  {data.category} </div>
                <div className='bcard-title btitle-font'>{data.title}</div>
                <div className='bsubtitle-font'>{data.subheader}</div>
                <div className='bcard-intro '>
                    <div className='bintro-font'>{data.intro}</div>
                    <div className='bintro-font signature'> –––––– {data.sign}</div>
                </div>
            </div>
            <div className='bcard-text-content-group'>
            <div className='bcard-serve mgl-18'>SERVES {data.serves}</div>
            {
              data.instructions && data.instructions.map((s) => {
                  return <div className='card-instruction'>
                    <div className='card-ingre ingredient instr-text'>
                      
                      {s.ingredients && s.ingredients.map((i) => (<p>{i}</p>))}
                    </div>
                    <div className='step-item step instr-text'>
                        <p className='grouptitle'>{s.group_title}</p>
                        {s.steps && s.steps.map((st) => (<p>{st}</p>))}
                    </div>
                  </div>
                })
              
            }
                {/* <div className='bcard-ingre'>
                <div className='bcard-serve'>SERVES {data.serves}</div>
                {data.instructions[0].ingredients && data.instructions[0].ingredients.map((s) => (<p>{s}</p>))}
                </div>
                <div className='bcard-steps'>
                {data.instructions[0].steps && data.instructions[0].steps.map((s) => (<div className='bstep-item'>{s}</div>))}
                </div> */}
            </div>
            <div className='download-btn' id="download-btn">
                <IconButton aria-label="Download as picture" onClick={downloadCard}>
                    <FileDownloadOutlinedIcon/>
                </IconButton>
            </div>
            
        </div>
        {/* <div className='card-img-container'>
            <Img src={data.img} alt={data.subheader} crossorigin="anonymous"/>
            </div> */}
        
         <div className='bcard-img-container' crossorigin="anonymous" style={{ backgroundImage: `url(${data.img})` }}>
         </div>

        

      </div>
    </Paper>
    
    
  )
}
