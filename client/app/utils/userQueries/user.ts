import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const userLogin = () => {
  const query = useMutation({
    mutationKey: ["userLogin"],
    mutationFn: async (object: { role: string, user: any }) =>
      await axios.post(
        `http://127.0.0.1:3001/auth/signin/${object.role}`,
        object.user
      ),
    onSuccess: (data) => {
      console.log(data.data);
      window.localStorage.setItem("currentUser", JSON.stringify(data.data));
    },
    
  });
  return query;
};

export const userSigninWithGoogle = () => {
  const query = useMutation({
    mutationKey: ["userLoginGoogle"],
    mutationFn: async (object:{role:string,user:any}) =>
      await axios.post(
        `http://127.0.0.1:3001/auth/signupgoogle/${object.role}`,
        object.user
      ),
    onSuccess: (data) => {
      console.log(data.data);
      window.localStorage.setItem("currentUser", JSON.stringify(data.data));
    },
  });
  return query;
};

export const userSignUp = () => {
  const query = useMutation({
    mutationKey: ["userSignUp"],
    mutationFn: async (object: { role: string, user: any }) =>
      await axios.post(
        `http://127.0.0.1:3001/auth/signup/${object.role}`,
        object.user
      ),
    onSuccess: (data) => {
      console.log(data.data);
      window.localStorage.setItem("currentUser", JSON.stringify(data.data));
    },
  });
  return query;
};

export const logout = ()=>{
    const query = useMutation({
        mutationKey: ["logout"],
        mutationFn: async ()=> await axios.post('http://127.0.0.1:3001/auth/logout'),
        onSuccess:()=> window.localStorage.clear()
    })
    return query;
}

export const forgotPassword = ()=>{
  const query = useMutation({
    mutationKey: ["forgotPassword"],
    mutationFn: async (email:any)=> await axios.post('http://localhost:3001/auth/forgot-password',{
      email:email
    }),
    onSuccess: (data)=> console.log(data.data)
    
  })

  return query
}
