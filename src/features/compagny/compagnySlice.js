import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import compagnyService from './compagnyService' // Assurez-vous d'avoir le service correspondant

const initialState = {
  compagnies: [],
  compagny: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const createCompagny = createAsyncThunk(
  'compagny/createCompagny',
  async (compagnyData, thunkAPI) => {
    try {
      return await compagnyService.createCompagny(compagnyData)
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const getCompagnies = createAsyncThunk(
  'compagny/getCompagnies',
  async (_, thunkAPI) => {
    try {
      return await compagnyService.getCompagnies()
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const getCompagny = createAsyncThunk(
  'compagny/getCompagny',
  async (id, thunkAPI) => {
    try {
      return await compagnyService.getCompagny(id)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const updateCompagny = createAsyncThunk(
  'compagny/updateCompagny',
  async ({ id, compagnyData }, thunkAPI) => {
    try {
      return await compagnyService.updateCompagny(id, compagnyData)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const deleteCompagny = createAsyncThunk(
  'compagny/deleteCompagny',
  async (id, thunkAPI) => {
    try {
      await compagnyService.deleteCompagny(id)
      return id
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const compagnySlice = createSlice({
  name: 'compagny',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCompagny.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createCompagny.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(createCompagny.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getCompagnies.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCompagnies.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.compagnies = action.payload
      })
      .addCase(getCompagnies.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.compagnies = null
      })
      .addCase(getCompagny.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCompagny.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.compagny = action.payload
      })
      .addCase(getCompagny.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.compagny = null
      })
      .addCase(updateCompagny.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateCompagny.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.compagny = action.payload
      })
      .addCase(updateCompagny.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteCompagny.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteCompagny.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        if (Array.isArray(state.compagnies)) {
          state.compagnies = state.compagnies.filter(
            (compagny) => compagny.id !== action.payload,
          )
        }
      })
      .addCase(deleteCompagny.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = compagnySlice.actions
export default compagnySlice.reducer
