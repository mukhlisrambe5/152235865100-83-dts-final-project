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
        <label className="form-label col-sm-2">{props.label}</label>       
        <select style={{width:'420px', fontSize: '18px'}} value={props.selectedValue} onChange={dropdownChanged} className="form-control form-control-sm col-sm-10">
            <option key={0}>Select...</option>
            {props.options?.map((item, idx) => <option key={idx} value={item.id}>{item.name}</option>)}
        </select>            
    </div>
    );
}

export default Dropdown;