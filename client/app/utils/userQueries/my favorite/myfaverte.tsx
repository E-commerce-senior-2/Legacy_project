import axios from "axios";
import { useQuery } from "react-query";

// export const fetchData = async (id: string) => {
//   const query = useQuery(["client"], async () => {
//     const response = await axios.get(
//       `http://localhost:3001/favoriteItem/${id}`
//     );
//     return response.data;
//   });

//   return query;
// };

export const deleteItem = async (iditem: string, id: string) => {
  const query = useQuery(["client"], async () => {
    const response = await axios.delete(
      `http://localhost:3001/favoriteItem/${iditem}/${id}`
    );
    return response.data;
  });
};
export  function  fetchData(id:number) {
  const query = useQuery ({
      queryKey: ["creator"],
      queryFn: async () =>{ 
          const result =await axios.get(`http://localhost:3001/favoriteItem/${id}`);
          return result.data },
          select :(data)=>data

  }); return query 
}