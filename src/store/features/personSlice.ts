import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Person {
    id: number;
    name: string;
}

interface PersonState {
    people: Person[];
}

const initialState: PersonState = {
    people: [],
};

export const fetchPeople = createAsyncThunk("personFetch",
async (thunk) => {
    const response = await fetch("http://localhost:4001/people");
    const data = await response.json();  
    return data;
});

export const savePerson = createAsyncThunk("personSave",
 async(name: string, thunk) => {
    const response = await fetch("http://localhost:4001/people", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name})
    });
    const data = await response.json();
    return data;
 });


export const PersonSlice = createSlice(
    {
        name: 'person',
        initialState,
        reducers: {
            addPerson: (state, action: PayloadAction<{name: string}>) => {
                state.people.push(
                    {
                        id: state.people.length,
                        name: action.payload.name,
                    }
                );
            }
        },
        extraReducers: (builder) => {
            builder.addCase(fetchPeople.fulfilled, (state, action) => {
                state.people = action.payload;
            });
            //builder
            // .addCase(fetchPeople.pending, (state) => {
            //   state.status = "loading";
            // })
            // builder.addCase(fetchPeople.rejected, (state, action) => {
            //     state.status = "failed";
            //     state.error = action.error.message;
            //   });
            builder.addCase(savePerson.fulfilled, (state, action) => {
                state.people.push(action.payload);
            });
        }
    });

export default PersonSlice.reducer;
export const {addPerson} = PersonSlice.actions
