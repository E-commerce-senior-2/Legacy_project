import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const getCreatorData = (creatorId: number) => {
  const query = useQuery({
    queryKey: ["creator", creatorId],
    queryFn: async () => {
      const result = await axios.get(
        `http://localhost:3001/creators/${creatorId}`
      );
      return result.data;
    },
  });
  return query;
};

export const updateCreatorData = () => {
  const query = useMutation({
    mutationKey: ["updateCreator"],
    mutationFn: async (object:{creatorId:number,creator:any}) => {
      const result = await axios.put(
        `http://localhost:3001/creators/${object.creatorId}`,
        object.creator
      );
      console.log(result)
    },
  });

  return query;
};



