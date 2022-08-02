import React from 'react';

const Listbox = props => {

    const clicked = e => {
        e.preventDefault();
        props.clicked(e.target.id);
    }    

    return (
        <div className="col-sm-6 px-0">
            <div className="list-group" style={{flexDirection: 'row', }}>
                {
                    props.items.map((item, idx) => 
                    <button style={{width:'500px', 
                        paddingTop: '1em',
                        paddingBottom: '1em',
                        textAlign: 'left',
                        fontSize: '16px',
                        color: '#003F9A'}} 
                        key={idx}
                        onClick={clicked}
                        className="list-group-item list-group-item-action list-group-item-light"
                        id={item.track.id}>
                            
                            {item.track.name}
                    </button> )
                }
            </div>
        </div>
        

    );
}

export default Listbox;