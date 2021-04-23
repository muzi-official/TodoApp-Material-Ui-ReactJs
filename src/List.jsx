import React , { useState }from 'react'
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";


const List = (props) => {
const [line , setLine] = useState(false);

const cutIt = () => {
    setLine(true);
};


    return (
    <>
<div className="list">
<li style={{textDecoration: line ?  "line-through" : "none" }}>{props.text}</li>
<Button variant="contained" color="secondary" onClick={cutIt}>
            <DeleteIcon />
          </Button>
</div>   
 </> 
    );
};

export default List;