import React,{useState,useEffect} from 'react'

import "./image.css"
import img1 from "./img/Done1.svg"
import img2 from "./img/user.svg"
import img3 from "./img/2.svg"
import img4 from "./img/add.svg"
 
interface Props{
    size?:boolean;
}

export const Image:React.FC<Props> = (props) => {
 const {size} = props;
 const [issize,setSize] = useState<boolean>(false)
 useEffect(()=>{
    setSize(issize === size)
 },[size])
  return (
    <div>
        {issize ? (
            <img src={img1} alt="img" />
        ):(
            <img src={img1} alt="img" className={`size`} />
        )}
    </div>
  )
}


export const ImageUser:React.FC =()=>{
    return(
        <div>
            <img src={img2} alt="img user" />
        </div>
    );
}

export const ImageWacth:React.FC =()=>{
    return(
        <div>
            <img src={img3} alt="img watch" />
        </div>
    );
}

export const ImageAdd:React.FC =()=>{
    return(
        <div>
            <img src={img4} alt="img watch" />
        </div>
    );
}