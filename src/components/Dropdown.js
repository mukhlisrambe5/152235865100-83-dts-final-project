import React from 'react';
import {
    
    CardMedia,

  } from '@mui/material'

const Dropdown = props => {    

    const dropdownChanged = e => {
        props.changed(e.target.value);

    }    

    return (
        <div className="col-sm-6 form-group row px-0">     
            {/* <label className="form-label col-sm-2">{props.label}</label>        */}
            {/* <select value={props.selectedValue} onChange={dropdownChanged} className="form-control form-control-sm col-sm-10"> */}
                {props.options?.map((item, idx) => <div key={idx} value={item.id}>
                    {item.name}
                    {/* {item.icons} */}
                    {/* <div key={idx}>
                        
                        {item.icons.map(icon => <div>{icon.url}</div>)}
                    </div> */}
                    <CardMedia component="img"
            sx={{width:151}}
            image={`${item.icons.map(icon => icon.url)}`}
            // image={`${item.icons.map((icon) => <div key={icon.url}>{icon.url}</div>)}`}

            
            alt="seekor kucing"
            ></CardMedia>
                    {/* <img src={`${item.icons.map(icon => <div>{icon.url}</div>)}`} alt="" /> */}
{/* 
                    <div className="col">
      <h1>Mi Casa</h1>
      <p>This is my house y&apos;all!</p>
      {homes.map(home => <div>{home.name}</div>)}
    </div> */}
                    {/* <img src={`${item.icons.url}`} alt="" />
                    <br />
                   <a href={`${item.href}`}>{item.href}</a>
                   <br />
                   <a href={`${item.href}`}>{item.icons.url}</a> */}
                   {/* {item.name.url} */}
                    </div>)}
            {/* </select>             */}
        </div>
    );
}

export default Dropdown;