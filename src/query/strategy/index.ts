import AXIOS from "@/components/common/Axios"
import {useMutation, useQuery} from "@tanstack/react-query"

export const QueryNewStrategy = () => {
    return useQuery({
        queryKey : ["new-strategy"] , 
        queryFn : async ({meta}) => {
            const res = await AXIOS<{test : string}[]>("https://jsonplaceholder.typicode.com/posts" , {requiresAuth : meta?.requiresAuth})
            return res.data;
        } , 
        meta :{
            requiresAuth : false
        }
    })
}


export const MutationNewStrategy = () => {
    return useMutation({
        mutationFn : async (data : IReqSubmitStrategy) => {
            AXIOS.post<{response : boolean}>("https://jsonplaceholder.typicode.com/posts" ,data)
        }
    })
}