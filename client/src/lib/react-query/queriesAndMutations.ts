import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { QUERY_KEYS } from "./queryKey"
import { deleteParkingSlot, getAllSlots } from "@/api/slots"



export const useGetAllParkingSlots= ()=>{
    return useQuery({
        queryKey: [QUERY_KEYS.GET_ALL_PARKING_SLOTS],
        queryFn: ()=> getAllSlots()
    })
}

export const useDeleteParkingSlotMutation= ()=>{
    const queryClient= useQueryClient();

    return useMutation({
        mutationFn: (id:string)=> deleteParkingSlot(id),
        onSuccess: ()=>{
            queryClient.invalidateQueries({
                queryKey:[QUERY_KEYS.GET_ALL_PARKING_SLOTS]
            })
        }
    })
}


