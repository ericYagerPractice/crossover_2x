import genericPhoto from '../staticfiles/Male-generic-image.jpg';
import React from "react";

export default function GenericPhoto(){
    return(
        <img src={genericPhoto} alt="generic for avatars" />
    )
}