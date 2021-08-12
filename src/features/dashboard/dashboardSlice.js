import { createSlice } from '@reduxjs/toolkit'
import { REPERTOIRE_LISTS } from '../../app/data/REPERTOIRE_LISTS'
import{ PIECES } from '../../app/data/PIECES'

const initialState = {
    repertoireLists: REPERTOIRE_LISTS,
    pieces: PIECES,
    practiceSessions: [
        {
            id: 0,
            time: null,
            piece: 'some title',
            length: null
        }
    ]
}

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers : {
        addRepList : (state, action) => {
            state.repertoireLists.concat(action.payload)
        } 
    }
})

export const { addRepList } = dashboardSlice.actions


export const selectRepertoireLists = state => state.dashboard.repertoireLists
export const selectPieces = state => state.dashboard.pieces


export default dashboardSlice.reducer