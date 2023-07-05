import React from "react";

function Heading()
{
    var curr = new Date().getHours(); 
    
    const customStyle = 
    {
        color:"",
        backgroundColor:""
    };

    var greeting;

    if(curr<12)
    {
        greeting = "Good Morning";
        customStyle.color ="blue";
        customStyle.backgroundColor="lightblue";
    }
    else if(curr>12 && curr<20)
    {
        greeting = "Good afternoon";
        customStyle.color = "yellow";
        customStyle.backgroundColor="orange";
    }
    else
    {
        greeting = "Good night";
        customStyle.color="red";
        customStyle.backgroundColor="#fadadd";
    }
    return <h1 className="heading" style={customStyle}>{greeting}</h1>; 
}



export default Heading;