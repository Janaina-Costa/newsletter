import {createSlice} from '@reduxjs/toolkit'
import { RootState } from '../store'

interface EmailState{
    email: string
}

const initialState={
    email:''
}as EmailState

export const emailSlice = createSlice({
    name: 'email',

    initialState,
    reducers:{
        reset:()=>initialState,
        setEmailState(state,actions){
            state.email = actions.payload
        }
    }
})

export const{
reset,
setEmailState
}= emailSlice.actions

export const selectEmail = (state:RootState)=>state.email
export default emailSlice.reducer