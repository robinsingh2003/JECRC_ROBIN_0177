import React,{createContext,useState,useContext,useEffect} from 'react';
const Authcontext=createContext();
export const useAuth = ()=>{
  const context = useContext(Authcontext);
  if(!context){
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
export const AuthProvider=({children})=>{
  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    const storedUser=localStorage.getItem('user');
    if(storedUser){
      setUser(JSON.parse(storedUser));
    }   
    setLoading(false);
  },[]);
  const Login = async (username, password) =>{
    setLoading(true);
    try {
      // Simulate an API call for authentication    
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (username === 'admin' && password === 'password') {
      const userData = { username:"admin" };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
    } else {
      throw new Error('Invalid username or password');
    }
  } catch (error) {
    console.error('Login failed', error);
  } finally {
    setLoading(false);
  }
  };
const logout = () => {
  setUser(null);
  localStorage.removeItem('user');
};
return (
    <Authcontext.Provider value={{user,Login,logout,loading,isAuthenticated:!!user}}>
        {children}
    </Authcontext.Provider>
);
};