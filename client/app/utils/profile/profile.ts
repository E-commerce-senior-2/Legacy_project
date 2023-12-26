import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { query } from "firebase/database";
export function getCreator(id: number) {
  const query = useQuery<Creator>({
    queryKey: ["creator"],
    queryFn: async () => {
      const result = await axios.get(`http://localhost:3001/creators/${id}`);
      return result.data
    },
    select: (data) => data

  }); return query
}
export const getAllPosts = (id: number) => {
  const query = useQuery<Post[]>({
    queryKey: ["post"],
    queryFn: async () => {
      const result = await axios.get(`http://localhost:3001/posts/${id}`)
      return result.data
    },
    select: (data) => data

  });
  return query
}
export const deletePosts = () => {
  const query = useMutation({
    mutationKey: ["userLogin"],
    mutationFn: async (id: number) =>
      await axios.delete(
        `http://localhost:3001/posts/${id}`
      ),
    onSuccess: (data) => {
      console.log('done')
    },

  });
  return query;
}
export const changeBgImagec = () => {
  const query = useMutation({
    mutationKey: ["BgImage"],
    mutationFn: async (object: { id: number | undefined, downloadurl: string }) =>
      await axios.put(`http://localhost:3001/creators/bgimage/${object.id}`, {
        bgImage: object.downloadurl,
      }),
    onSuccess: (data) => {
      console.log('done');

    },

  });
  return query;
};
export const addPosts = () => {
  const query = useMutation({
    mutationKey: ["BgImage"],
    mutationFn: async (object: { id: number | undefined, downloadurl: string, status: string }) =>
      await axios.post(`http://localhost:3001/Posts/${object.id}`, {
        image: object.downloadurl,
        status: object.status,
      }),
    onSuccess: (data) => {
      console.log('done');
      window.location.reload()
    },

  });
  return query;
};
export const addProfile = () => {
  const query = useMutation({
    mutationKey: ["BfImage"],
    mutationFn: async (object: { id: number | undefined, downloadurl: string }) =>
      await axios
        .put(`http://localhost:3001/creators/pfimage/${object.id}`, {
          pfImage: object.downloadurl,
        }),
    onSuccess: (data) => {
      console.log('done');
      window.location.reload()
    },

  });
  return query;
};
export const commentPost = () => {
  const query = useMutation({
    mutationKey: ["comment"],
    mutationFn: async (object: { userId: number | undefined, postId: number, comment: string | undefined }) =>
      await axios
        .post(`http://localhost:3001/comment/post/${object.userId}/${object.postId}`, {
          comment: object.comment,
        }),
    onSuccess: (data) => {
      console.log('done');
      window.location.reload()
    },

  });
  return query;
};
export function getComment(id: number) {
  const query = useQuery<Comment[]>({
    queryKey: ["commen"],
    queryFn: async () => {
      const result = await axios.get(`http://localhost:3001/comment/post/${id}`);
      console.log(result.data)
      return result.data
    },
    select: (data) => data

  }); return query
}
export function getUser(id: number) {
  const query = useQuery<object>({
    queryKey: ["userc",id],
    queryFn: async () => {
console.log('user,',id)
      const result = await axios.get(`http://localhost:3001/user/get/${id}`);
      console.log(result,'data');
      return result.data
    },
    select: (data) => data

  }); return query

}
export function addLike(){
  const query = useMutation({
    mutationKey: ["like"],
    mutationFn: async (postId:number|null) =>
      await axios
        .put(`http://localhost:3001/posts/like/${postId}`, {
        
        }),
    onSuccess: (data) => {
      console.log('done');
      window.location.reload()
    },

  });
  return query;
}
export function searchCreator(name: string) {
  const query = useQuery<Creator>({
    queryKey: ["search",name],
    queryFn: async () => {
      const result = await axios.get(`http://localhost:3001/creators/searchCreator/${name}`);
      console.log(result.data)
      return result.data
    },
    select: (data) => data

  }); return query
}