import AXIOS from "@/components/common/Axios"
import {useMutation, useQuery} from "@tanstack/react-query"

export const QueryGetAllStrategy = () => {
    return useQuery({
        queryKey : ["get-strategy"] , 
        queryFn : async ({meta}) => {
            const res = await AXIOS<globalApiType<IGetMultiLegAlgorithmInstance[]>>("/GetMultiLegAlgorithmInstance" , {requiresAuth : meta?.requiresAuth})
            return res.data?.result;
        } , 
        meta :{
            requiresAuth : true
        }
    })
}

export const QueryGetMultiLegOrderByInstanceId = (algoInstanceId : string) => {
    return useQuery({
        queryKey : ["multiLeg" , algoInstanceId] ,
        queryFn : async () => {
            const res = await AXIOS<globalApiType<LegData[]>>("/GetMultiLegOrderByInstanceId" , {params : {algoInstanceId}})
            return res.data?.result;
        },
        enabled : !!algoInstanceId
    })
}



export const MutationNewStrategy = () => {
    return useMutation({
        mutationFn : async (data : IStrategyData) => {
            const res = await AXIOS.post<globalApiType<number>>("/CreateMultiLegAlgorithmInstance",data)
            return res.data
        }
    })
}



export const MutationNewLeg = () => {
    return useMutation({
        mutationFn : async (data : LegData[]) => {
            const res = await AXIOS.post<globalApiType<number>>("/CreateMultiLegOrder", data)
            return res.data
        }
    })
}

