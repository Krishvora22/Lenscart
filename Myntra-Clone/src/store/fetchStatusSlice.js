import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
    name: "fetchStatus",
    initialState: {
        fetchDone: false, // false: Pending, True: Done
        currFetch: false
    },
    reducers: {
        setFetchDone: (state) => {
            state.fetchDone = true;
            return state;
        },
        setFetchingStarted: (state) => {
            state.currFetch = true;
            return state;
        },
        setFetchingEnded: (state) => {
            state.currFetch = flase;
            return state;
        }
    }
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;