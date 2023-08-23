import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import benneficiaireService from './benneficiareService' // Assurez-vous d'avoir un service correspondant
import { toast } from 'react-toastify'

const initialState = {
  benneficiaires: [],
  benneficiaire: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const createBenneficiaire = createAsyncThunk(
  'benneficiaire/createBenneficiaire',
  async (benneficiaireData, thunkAPI) => {
    try {
      return await benneficiaireService.createBenneficiaire(benneficiaireData)
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  },
)

export const getBenneficiaires = createAsyncThunk(
  'benneficiaire/getBenneficiaires',
  async (_, thunkAPI) => {
    try {
      return await benneficiaireService.getBenneficiaires()
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

export const getBenneficiaire = createAsyncThunk(
  'benneficiaire/getBenneficiaire',
  async (id, thunkAPI) => {
    try {
      return await benneficiaireService.getBenneficiaire(id)
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

export const deleteBenneficiaire = createAsyncThunk(
  'benneficiaire/deleteBenneficiaire',
  async (id, thunkAPI) => {
    try {
      await benneficiaireService.deleteBenneficiaire(id)
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

export const benneficiaireSlice = createSlice({
  name: 'benneficiaire',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBenneficiaire.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createBenneficiaire.fulfilled, (state) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(createBenneficiaire.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getBenneficiaires.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getBenneficiaires.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.benneficiaires = action.payload
      })
      .addCase(getBenneficiaires.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.benneficiaires = null
      })
      .addCase(getBenneficiaire.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getBenneficiaire.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.benneficiaire = action.payload
      })
      .addCase(getBenneficiaire.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.benneficiaire = null
      })
      .addCase(deleteBenneficiaire.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteBenneficiaire.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        if (Array.isArray(state.benneficiaires)) {
          state.benneficiaires = state.benneficiaires.filter(
            (benneficiaire) => benneficiaire.id !== action.payload,
          )
        }
      })
      .addCase(deleteBenneficiaire.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = benneficiaireSlice.actions
export default benneficiaireSlice.reducer
