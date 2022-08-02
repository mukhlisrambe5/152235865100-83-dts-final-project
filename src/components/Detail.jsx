import React from 'react';

const Detail = ({album, artists, name}) => {

    return (
        <div className="offset-md-1 col-sm-4" style={{fontWeight: 'bold'}}>
            <div className="row col-sm-12 px-0">
                <img 
                    src={album.images[0].url}
                    alt={name}>                    
                </img>
            </div>
            <div className="row col-sm-12 px-0">
                <label htmlFor={name} className="form-label col-sm-12" style={{color: '#1656E4'}}>
                   Track : {name}
                </label>
            </div>
            <div className="row col-sm-12 px-0">
                <label htmlFor={artists[0].name} className="form-label col-sm-12" style={{color: '#1656E4'}}>
                   Artist : {artists[0].name}
                </label>
            </div>
        </div>
    );
}

export default Detail;