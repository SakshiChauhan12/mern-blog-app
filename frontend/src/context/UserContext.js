import {createContext,useContext,useState,useEffect} from 'react';

const UserContext=createContext();
export const UserProvider=({children})=>{
const[isLoggedIn,setIsLoggedIn]=useState(false);

useEffect(()=>{
    const token=localStorage.getItem("token");
    if(token){
        setIsLoggedIn(true);
    }
    else{
        setIsLoggedIn(false);
    }

},[]);
const login=()=>{
    setIsLoggedIn(true);
}
const logout=()=>{
  
    localStorage.removeItem("token");
      setIsLoggedIn(false);
};

    return (
        <UserContext.Provider value={{isLoggedIn, login, logout}}>
          {children}
        </UserContext.Provider>

    );


}
export const useUser=()=>useContext(UserContext);