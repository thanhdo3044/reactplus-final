import React, { useState,useEffect } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./Button.css";

interface Props {
  children: string;
  icon?: boolean;
  onclick?:any;
}

export const Button: React.FC<Props> = (props) => {
  const { children, icon,onclick } = props;
  const [isicon, setIcon] = useState<boolean>(true);
  useEffect(()=>{
    setIcon(icon === isicon)
  },[icon])

  return (
    <button className="button" onClick={onclick}>
      {isicon ? (
        <p>
          {children}
          <span>
            <ArrowRightOutlined />
          </span>
        </p>
      ) : (
        <p>{children}</p>
      )}
    </button>
  );
};
