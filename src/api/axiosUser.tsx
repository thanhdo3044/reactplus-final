import { User } from "../model/user";
import axiosLogin from "./axiosLogin";


export const axiosUser= {
  postLogin: async (params:User) => {
    return await axiosLogin.post('users',params);
  }
};

export const axiosGet = async ()=>{
  const res = await axiosLogin.get('tasks');
  return res;
}

