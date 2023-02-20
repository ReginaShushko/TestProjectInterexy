import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IContactState {
    name: string;
    email: string;
    message: string;
}

export const initialState: IContactState = {
    name: "",
    email: "",
    message: "",
};

const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setMessage: (state, action: PayloadAction<string>) => {
            state.message = action.payload;
        },
    },
});

export const contactActions = contactSlice.actions;
export default contactSlice.reducer;