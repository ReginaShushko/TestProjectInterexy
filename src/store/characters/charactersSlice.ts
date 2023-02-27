import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAll } from "./charactersActions";

export interface ICharacterState {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
}

export interface ICharState {
  charactersList: ICharacterState[];
  selectedCharacter: ICharacterState | null;
  isCharactersLoading: boolean;
  isSelectedCharacterLoading: boolean;
}

export const initialState: ICharState = {
  charactersList: [],
  selectedCharacter: null,
  isCharactersLoading: false,
  isSelectedCharacterLoading: false,
};

const charactersSlice = createSlice({
  name: "CharactersSlice",
  initialState,
  reducers: {
    setLoadingCharacters: (state, action: PayloadAction<boolean>) => {
      state.isCharactersLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.charactersList.push(...action.payload);
    });
  },
});

export const charactersActions = charactersSlice.actions;
export default charactersSlice.reducer;
