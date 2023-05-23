import React from 'react'
import Paper from '@mui/material/Paper';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import IconButton from '@mui/material/IconButton';
import html2canvas from 'html2canvas';


export const ViewCover = ({ data }) => {
    const downloadCover = () => {
        html2canvas(document.getElementById('capture')).then((canvas)=>{
          const link = document.createElement("a");
          link.href = canvas.toDataURL();
          link.setAttribute("download", data.title+".cover.jpg");
          link.style.display = "none";
          document.body.appendChild(link);
          link.click();
        });
      }

    return (
        <Paper
        id="capture"
        sx={{
        //   p:0.5,
          margin: 'auto',
          width: 540,
          height: 700,
          flexGrow: 1,
          elevation: 5,
          variant:"outlined",
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <div className='cover-major-container'>
            {/* <div className='container text-center' style={{ backgroundImage: `url(${data.img})` }}> */}
                <div class="cover-content" style={{ backgroundImage: `url(${data.coverImg === undefined || data.coverImg==="" ? data.img:data.coverImg})` }}>
                    <div class="cover-label">
                        <div><span class="cover-category">{data.category}食谱</span></div>
                        <div><span class="cover-meal">{data.meal}</span></div>
                    </div>
                    <div class="cover-recipe">
                        <div class="cover-title text-center">[{data.title}]</div>
                        <div class="cover-subhead text-center">{data.subheader}</div>
                        <div class="cover-labels text-center">{data.cal} 卡 / {data.labels.map((item)=>{return item;}).join(" / ")}</div>
                    </div>
                    
                    <div class="cover-sign">COOKAGE PRESENTS</div>
                {/* </div> */}
                
            </div>
            
        </div>
        <div className='download-btn' id="download-btn">
                <IconButton aria-label="Download as picture" onClick={downloadCover}>
                    <FileDownloadOutlinedIcon/>
                </IconButton>
            </div>
    
    </Paper>
    )
  
}
