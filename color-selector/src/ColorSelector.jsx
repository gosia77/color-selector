import React, {useState} from 'react';


function ColorSelector(){

    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(){
        setColor(event.target.value);
    }



    return(
        <div className='color-selector-container'>
            <h1>Color Selector</h1>
            <div className='color-display' style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a Color:  </label>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
        
       
    );
}

export default ColorSelector