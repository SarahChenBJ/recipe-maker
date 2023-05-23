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

export const ViewCard_ungroup_ver = ({ data }) => {
    const downloadCard = () => {
        html2canvas(document.getElementById('capture')).then((canvas) => {
            const link = document.createElement("a");
            link.href = canvas.toDataURL();
            link.setAttribute("download", data.title + ".jpg");
            link.style.display = "none";
            document.body.appendChild(link);
            link.click();
        });
    }

    return (

        <Paper
            id="capture"
            className='card-paper'
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

            <div className='vcard-container-mix'>
                <div className='vcard-head-mix'>
                    <div className='vcard-head-container' style={{ backgroundImage: `url(${data.img})` }}>
                    </div>
                    <div className='vcard-intro'>
                        <div className='aaa'></div>
                        <div className='intro-font'>{data.intro}</div>
                        <div className='intro-font signature'> –––––– {data.sign}</div>
                    </div>
                </div>

                {/* <div className='vcard-text-container mgt-30'>
                    <div className='card-text-header mgt-30' >
                        <div className='card-title vtitle-font-mix'>{data.title}</div>
                        <div className='vsubtitle-font-mix'>{data.subheader}</div>
                    </div>
                </div> */}
                {/* <div className='card-instruction-container mgt-20'>
                    <div className='instr-text card-serve'>SERVES {data.serves}</div>
                    <div ></div>
                    {
                        data.instructions && data.instructions.map((s) => {
                            return <div className='card-instruction'>
                                <div className='card-ingre ingredient instr-text'>
                                    {s.ingredients && s.ingredients.map((s) => (<p>{s}</p>))}
                                </div>
                                <div className='step-item step instr-text'>
                                    {s.steps && s.steps.map((s) => (<p>{s}</p>))}
                                </div>
                            </div>
                        })

                    }

                </div> */}
                <div className='vbcard-text-container mgt-30'>
                <div className='vbcard-text-header'>
                    <div className='card-label bcategory-font'>  {data.category} </div>
                    <div className='card-title vtitle-font-mix'>{data.title}</div>
                    <div className='vsubtitle-font-mix'>{data.subheader}</div>
                    
                </div>
                <div className='vbcard-instruction-container mgt-20'>
                    <div className='vbcard-ingre'>
                        <div className='bcard-serve'>SERVES {data.serves}</div>
                        {data.instructions.ingredients && data.instructions.ingredients.map((s) => (<p>{s}</p>))}
                    </div>
                    <div className='vbcard-steps'>
                        {data.instructions.steps && data.instructions.steps.map((s) => (<div className='vbstep-item'>{s}</div>))}
                    </div>
                </div>
            </div>
            </div>
            <div className='download-btn' id="download-btn">
                <IconButton aria-label="Download as picture" onClick={downloadCard}>
                    <FileDownloadOutlinedIcon />
                </IconButton>
            </div>
            
        </Paper>


    )
}
