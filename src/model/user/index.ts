export interface User{
    name:string;
    password:string;
    email:string;
    confirm:string;
}

export interface UserGet{
    name:string;
    components:boolean;
}