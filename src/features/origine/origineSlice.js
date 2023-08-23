import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import origineService from './origineService' // Assurez-vous d'avoir le service correspondant

const initialState = {
  origines: [],
  origine: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const createOrigine = createAsyncThunk(
  'origine/createOrigine',
  async (origineData, thunkAPI) => {
    try {
      return await origineService.createOrigine(origineData)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const getOrigines = createAsyncThunk(
  'origine/getOrigines',
  async (_, thunkAPI) => {
    try {
      return await origineService.getOrigines()
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const getOrigine = createAsyncThunk(
  'origine/getOrigine',
  async (id, thunkAPI) => {
    try {
      return await origineService.getOrigine(id)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const updateOrigine = createAsyncThunk(
  'origine/updateOrigine',
  async (data, thunkAPI) => {
    try {
      return await origineService.updateOrigine(data.id, data.origineData)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const deleteOrigine = createAsyncThunk(
  'origine/deleteOrigine',
  async (id, thunkAPI) => {
    try {
      await origineService.deleteOrigine(id)
      return id
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  },
)

export const origineSlice = createSlice({
  name: 'origine',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrigine.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createOrigine.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.origines.push(action.payload)
      })
      .addCase(createOrigine.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getOrigines.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getOrigines.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.origines = action.payload
      })
      .addCase(getOrigines.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getOrigine.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getOrigine.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.origine = action.payload
      })
      .addCase(getOrigine.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateOrigine.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateOrigine.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.origines = state.origines.map((origine) =>
          origine.id === action.payload.id ? action.payload : origine,
        )
      })
      .addCase(updateOrigine.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteOrigine.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteOrigine.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.origines = state.origines.filter(
          (origine) => origine.id !== action.payload,
        )
      })
      .addCase(deleteOrigine.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = origineSlice.actions
export default origineSlice.reducer
